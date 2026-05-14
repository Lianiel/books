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
      // 立即套用樣式到 DOM
      console.log('⚡ 立即套用到 DOM...');
      try {
        applyHighlightToDOM(data as Highlight);
      } catch (e) {
        console.error('✗ 立即套用失敗:', e);
      }
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
  console.log('  🔧 applyHighlightToDOM 開始');
  console.log('    → 尋找的文字:', h.text_content);
  
  // 步驟 1: 找主容器
  let main = document.querySelector('main');
  if (!main) {
    console.warn('    ⚠️ 找不到 <main>，嘗試其他選擇器...');
    main = document.querySelector('.book-content, #content, article, [role="main"]') as HTMLElement;
  }
  
  if (!main) {
    console.error('    ✗ 找不到主容器元素');
    return;
  }
  console.log('    ✓ 找到主容器:', main.tagName, main.className);
  
  // 步驟 2: 遍歷文字節點
  console.log('    → 開始遍歷文字節點...');
  const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => {
      if ((node as Text).parentElement?.closest('span[data-highlight-id]')) {
        return NodeFilter.FILTER_REJECT;
      }
      if ((node as Text).parentElement?.tagName === 'SCRIPT') {
        return NodeFilter.FILTER_REJECT;
      }
      const hasText = node.textContent?.includes(h.text_content);
      return hasText ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  
  const node = walker.nextNode() as Text | null;
  if (!node) {
    console.error('    ✗ 找不到包含文字的節點');
    console.log('    提示: 嘗試在頁面搜索是否有這段文字:', h.text_content.substring(0, 50));
    return;
  }
  console.log('    ✓ 找到文字節點:', node.textContent?.substring(0, 50) + '...');
  
  // 步驟 3: 定位文字位置
  const idx = node.textContent!.indexOf(h.text_content);
  if (idx === -1) {
    console.error('    ✗ 文字不匹配（indexOf 返回 -1）');
    return;
  }
  console.log('    ✓ 文字位置 idx:', idx);
  
  // 步驟 4: 創建 range
  const range = document.createRange();
  try {
    range.setStart(node, idx);
    range.setEnd(node, idx + h.text_content.length);
    console.log('    ✓ Range 創建成功');
  } catch (e) {
    console.error('    ✗ Range 創建失敗:', e);
    return;
  }
  
  // 步驟 5: 創建 span
  const span = document.createElement('span');
  span.setAttribute('data-highlight-id', h.id);
  span.style.cursor = 'pointer';
  span.title = '點擊移除';
  console.log('    ✓ Span 元素創建成功');
  
  // 步驟 6: 套用樣式
  applyStyleToSpan(span, h.style);
  console.log('    ✓ 樣式已套用');
  
  // 步驟 7: 添加點擊事件
  span.addEventListener('click', (e) => {
    e.stopPropagation();
    const event = new CustomEvent('removeHighlight', { detail: h.id });
    document.dispatchEvent(event);
  });
  console.log('    ✓ 事件監聽器已添加');
  
  // 步驟 8: 包裹文字（關鍵步驟）
  try {
    range.surroundContents(span);
    console.log('    ✓✓✓ surroundContents 成功！Span 已插入 DOM');
    
    // 驗證
    const inserted = document.querySelector(`span[data-highlight-id="${h.id}"]`);
    if (inserted) {
      console.log('    ✓✓✓ 驗證成功：在 DOM 中找到了 span');
    } else {
      console.error('    ✗✗✗ 驗證失敗：surroundContents 成功但在 DOM 中找不到 span');
    }
  } catch (e) {
    console.error('    ✗✗✗ surroundContents 失敗:', e);
    console.error('    錯誤詳情:', e instanceof Error ? e.message : String(e));
    
    // 提供替代方案的提示
    console.log('    💡 可能原因：選擇的文字跨越了多個元素邊界');
  }
}

export function applyStyleToSpan(span: HTMLElement, style: HighlightStyle) {
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
    default:       color = '#dc2626'; break;
  }
  
  span.style.setProperty('color', color, 'important');
  const bgColor = color + '20';
  span.style.setProperty('background-color', bgColor, 'important');
  span.style.setProperty('border-radius', '2px', 'important');
  span.style.setProperty('padding', '1px 2px', 'important');
}
