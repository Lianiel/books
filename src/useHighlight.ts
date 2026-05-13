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
        if (data) setHighlights(data as Highlight[]);
      });
  }, [userPhone, bookId, chapter]);

  const applyHighlights = useCallback(() => {
    clearHighlightSpans();
    highlights.forEach(h => {
      try { applyHighlightToDOM(h); } catch (e) {}
    });
  }, [highlights]);

  const addHighlight = useCallback(async (text: string, style: HighlightStyle) => {
    if (!userPhone || !text.trim() || !sb) return;
    const { data, error } = await sb.from('book_highlights')
      .insert([{ user_phone: userPhone, book_id: bookId, chapter, text_content: text, style }])
      .select().single();
    if (!error && data) setHighlights(prev => [...prev, data as Highlight]);
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
  if (!main) return;
  const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => {
      if ((node as Text).parentElement?.closest('span[data-highlight-id]')) return NodeFilter.FILTER_REJECT;
      if ((node as Text).parentElement?.tagName === 'SCRIPT') return NodeFilter.FILTER_REJECT;
      return (node.textContent?.includes(h.text_content)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  const node = walker.nextNode() as Text | null;
  if (!node) return;
  const idx = node.textContent!.indexOf(h.text_content);
  if (idx === -1) return;
  const range = document.createRange();
  range.setStart(node, idx);
  range.setEnd(node, idx + h.text_content.length);
  const span = document.createElement('span');
  span.setAttribute('data-highlight-id', h.id);
  span.style.cursor = 'pointer';
  span.title = '點擊移除';
  applyStyleToSpan(span, h.style);
  span.addEventListener('click', (e) => {
    e.stopPropagation();
    const event = new CustomEvent('removeHighlight', { detail: h.id });
    document.dispatchEvent(event);
  });
  try { range.surroundContents(span); } catch (e) {}
}

export function applyStyleToSpan(span: HTMLElement, style: HighlightStyle) {
  // 所有顏色都使用螢光筆效果（背景色 + 圓角）
  span.style.borderRadius = '2px';
  span.style.padding = '1px 2px';
  
  switch (style) {
    case 'red':    span.style.backgroundColor = '#fecaca'; break; // 紅色螢光筆
    case 'orange': span.style.backgroundColor = '#fed7aa'; break; // 橙色螢光筆
    case 'yellow': span.style.backgroundColor = '#fef08a'; break; // 黃色螢光筆
    case 'green':  span.style.backgroundColor = '#bbf7d0'; break; // 綠色螢光筆
    case 'blue':   span.style.backgroundColor = '#bfdbfe'; break; // 藍色螢光筆
    case 'indigo': span.style.backgroundColor = '#c7d2fe'; break; // 靛色螢光筆
    case 'purple': span.style.backgroundColor = '#e9d5ff'; break; // 紫色螢光筆
  }
}
 
