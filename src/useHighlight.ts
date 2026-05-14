import { useState, useEffect, useCallback } from 'react';

const SUPABASE_URL = 'https://yhchjanqmopgbwgjspmf.supabase.co';
const SUPABASE_KEY = 'sb_publishable_51sbrd_Tv8Xuab92XiqRVQ_7iePDoJx';

declare const supabase: any;
const getSb = () => (window as any).supabase?.createClient(SUPABASE_URL, SUPABASE_KEY);

export type HighlightStyle = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple';

export interface Highlight {
  id: string;
  book_id: string;
  chapter: string;
  text_content: string;
  style: HighlightStyle;
}

async function getUserPhone(): Promise<string | null> {
  const sb = getSb();
  if (!sb) return null;
  const { data: { session } } = await sb.auth.getSession();
  if (!session) return null;
  return session.user.email?.split('@')[0] || null;
}

export function useHighlight(bookId: string, chapter: string) {
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [userPhone, setUserPhone] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sb] = useState(() => getSb());

  useEffect(() => {
    getUserPhone().then(phone => {
      setUserPhone(phone);
      setIsLoggedIn(!!phone);
    });
    if (!sb) return;
    const { data: { subscription } } = sb.auth.onAuthStateChange((_: any, session: any) => {
      const phone = session?.user?.email?.split('@')[0] || null;
      setUserPhone(phone);
      setIsLoggedIn(!!phone);
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!userPhone || !bookId || !chapter || !sb) return;
    sb.from('book_highlights')
      .select('*')
      .eq('user_phone', userPhone)
      .eq('book_id', bookId)
      .eq('chapter', chapter)
      .then(({ data }: any) => {
        if (data) {
          console.log('📚 載入高亮資料:', data);
          setHighlights(data as Highlight[]);
        }
      });
  }, [userPhone, bookId, chapter]);

  const applyHighlights = useCallback(() => {
    console.log('🎨 開始套用高亮，共', highlights.length, '筆');
    clearHighlightSpans();
    highlights.forEach(h => {
      console.log('  → 套用:', h.text_content.substring(0, 20) + '...', '顏色:', h.style);
      try { applyHighlightToDOM(h); } catch (e) {
        console.error('  ✗ 套用失敗:', e);
      }
    });
  }, [highlights]);

  const addHighlight = useCallback(async (text: string, style: HighlightStyle) => {
    if (!userPhone || !text.trim() || !sb) return;
    console.log('➕ 新增高亮:', text.substring(0, 30) + '...', '顏色:', style);
    const { data, error } = await sb.from('book_highlights')
      .insert([{ user_phone: userPhone, book_id: bookId, chapter, text_content: text, style }])
      .select().single();
    if (!error && data) {
      console.log('✓ 新增成功，資料:', data);
      setHighlights(prev => [...prev, data as Highlight]);
    } else {
      console.error('✗ 新增失敗:', error);
    }
  }, [userPhone, bookId, chapter, sb]);

  const removeHighlight = useCallback(async (id: string) => {
    if (!sb) return;
    await sb.from('book_highlights').delete().eq('id', id);
    setHighlights(prev => prev.filter(h => h.id !== id));
    const span = document.querySelector(`span[data-highlight-id="${id}"]`);
    if (span?.parentNode) {
      span.parentNode.replaceChild(document.createTextNode(span.textContent || ''), span);
      span.parentNode.normalize();
    }
  }, [sb]);

  const isHighlighted = useCallback((text: string) =>
    highlights.some(h => h.text_content === text), [highlights]);

  const getHighlightByText = useCallback((text: string) =>
    highlights.find(h => h.text_content === text), [highlights]);

  return { highlights, isLoggedIn, applyHighlights, addHighlight, removeHighlight, isHighlighted, getHighlightByText };
}

function clearHighlightSpans() {
  document.querySelectorAll('span[data-highlight-id]').forEach(el => {
    const parent = el.parentNode;
    if (parent) {
      parent.replaceChild(document.createTextNode(el.textContent || ''), el);
      parent.normalize();
    }
  });
}

function applyHighlightToDOM(h: Highlight) {
  const main = document.querySelector('main');
  if (!main) {
    console.error('  ✗ 找不到 main 元素');
    return;
  }
  
  const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => {
      if ((node as Text).parentElement?.closest('span[data-highlight-id]')) return NodeFilter.FILTER_REJECT;
      if ((node as Text).parentElement?.tagName === 'SCRIPT') return NodeFilter.FILTER_REJECT;
      return (node.textContent?.includes(h.text_content)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  
  const node = walker.nextNode() as Text | null;
  if (!node) {
    console.error('  ✗ 找不到文字節點:', h.text_content.substring(0, 30));
    return;
  }
  
  const idx = node.textContent!.indexOf(h.text_content);
  if (idx === -1) {
    console.error('  ✗ 文字不匹配');
    return;
  }
  
  const range = document.createRange();
  range.setStart(node, idx);
  range.setEnd(node, idx + h.text_content.length);
  
  const span = document.createElement('span');
  span.setAttribute('data-highlight-id', h.id);
  span.style.cursor = 'pointer';
  span.title = '點擊移除';
  
  // 套用樣式
  console.log('  → 套用樣式到 span，style 值:', h.style, '型別:', typeof h.style);
  applyStyleToSpan(span, h.style);
  
  // 檢查樣式是否成功套用
  console.log('  → span 實際樣式:', {
    color: span.style.color,
    backgroundColor: span.style.backgroundColor,
    fontWeight: span.style.fontWeight
  });
  
  span.addEventListener('click', (e) => {
    e.stopPropagation();
    const event = new CustomEvent('removeHighlight', { detail: h.id });
    document.dispatchEvent(event);
  });
  
  try { 
    range.surroundContents(span);
    console.log('  ✓ 成功包裹 span');
  } catch (e) {
    console.error('  ✗ 包裹失敗:', e);
  }
}

export function applyStyleToSpan(span: HTMLElement, style: HighlightStyle) {
  console.log('    🎨 applyStyleToSpan 被調用，style =', style, '型別 =', typeof style);
  
  // 使用 setProperty 和 !important 確保樣式優先級
  span.style.setProperty('font-weight', '600', 'important');
  
  let color: string;
  switch (style) {
    case 'red':    color = '#dc2626'; break;
    case 'orange': color = '#ea580c'; break;
    case 'yellow': color = '#ca8a04'; break;
    case 'green':  color = '#16a34a'; break;
    case 'blue':   color = '#2563eb'; break;
    case 'indigo': color = '#4f46e5'; break;
    case 'purple': color = '#9333ea'; break;
    default:       
      color = '#dc2626';
      console.warn('    ⚠️ 未知的 style 值:', style, '使用預設紅色');
      break;
  }
  
  console.log('    → 決定使用顏色:', color);
  
  // 使用 !important 強制覆蓋其他 CSS 規則
  span.style.setProperty('color', color, 'important');
  
  // 添加背景色讓效果更明顯（半透明）
  const bgColor = color + '20';
  span.style.setProperty('background-color', bgColor, 'important');
  
  // 添加圓角和內距讓高亮更明顯
  span.style.setProperty('border-radius', '2px', 'important');
  span.style.setProperty('padding', '1px 2px', 'important');
  
  console.log('    ✓ 樣式已設定');
}
