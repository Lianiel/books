import { useState, useEffect, useCallback } from 'react';

export type HighlightStyle = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple';

export interface Highlight {
  id: string;
  book_id: string;
  chapter: string;
  text_content: string;
  style: HighlightStyle;
}

// 從 localStorage 載入高亮資料
function loadHighlights(bookId: string, chapter: string): Highlight[] {
  try {
    const key = `highlights_${bookId}_${chapter}`;
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('載入高亮資料失敗:', e);
    return [];
  }
}

// 儲存高亮資料到 localStorage
function saveHighlights(bookId: string, chapter: string, highlights: Highlight[]) {
  try {
    const key = `highlights_${bookId}_${chapter}`;
    localStorage.setItem(key, JSON.stringify(highlights));
  } catch (e) {
    console.error('儲存高亮資料失敗:', e);
  }
}

// 生成唯一 ID
function generateId(): string {
  return `hl_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function useHighlight(bookId: string, chapter: string) {
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [isLoggedIn] = useState(true); // 本地模式永遠是「已登入」狀態

  // 載入高亮資料
  useEffect(() => {
    const loaded = loadHighlights(bookId, chapter);
    console.log('📚 載入本地高亮資料:', loaded.length, '筆');
    setHighlights(loaded);
  }, [bookId, chapter]);

  // 套用所有高亮
  const applyHighlights = useCallback(() => {
    console.log('🎨 開始套用高亮，共', highlights.length, '筆');
    clearHighlightSpans();
    highlights.forEach(h => {
      try { 
        applyHighlightToDOM(h); 
      } catch (e) {
        console.error('套用高亮失敗:', e);
      }
    });
  }, [highlights]);

  // 新增高亮
  const addHighlight = useCallback((text: string, style: HighlightStyle) => {
    if (!text.trim()) {
      console.warn('文字內容為空，無法新增高亮');
      return;
    }

    console.log('➕ 新增高亮:', text.substring(0, 30) + '...', '顏色:', style);

    const newHighlight: Highlight = {
      id: generateId(),
      book_id: bookId,
      chapter,
      text_content: text,
      style
    };

    const updated = [...highlights, newHighlight];
    setHighlights(updated);
    saveHighlights(bookId, chapter, updated);

    console.log('✓ 已儲存到 localStorage');
    console.log('⚡ 立即套用到 DOM...');
    
    // 立即套用到 DOM
    try {
      applyHighlightToDOM(newHighlight);
      console.log('✓ 套用成功');
    } catch (e) {
      console.error('✗ 套用失敗:', e);
    }
  }, [highlights, bookId, chapter]);

  // 移除高亮
  const removeHighlight = useCallback((id: string) => {
    console.log('🗑️ 移除高亮:', id);
    
    const updated = highlights.filter(h => h.id !== id);
    setHighlights(updated);
    saveHighlights(bookId, chapter, updated);

    // 從 DOM 移除
    const span = document.querySelector(`span[data-highlight-id="${id}"]`);
    if (span?.parentNode) {
      span.parentNode.replaceChild(document.createTextNode(span.textContent || ''), span);
      span.parentNode.normalize();
    }
  }, [highlights, bookId, chapter]);

  const isHighlighted = useCallback((text: string) =>
    highlights.some(h => h.text_content === text), [highlights]);

  const getHighlightByText = useCallback((text: string) =>
    highlights.find(h => h.text_content === text), [highlights]);

  return { 
    highlights, 
    isLoggedIn, 
    applyHighlights, 
    addHighlight, 
    removeHighlight, 
    isHighlighted, 
    getHighlightByText 
  };
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
  
  // 找主容器
  let main = document.querySelector('main');
  if (!main) {
    main = document.querySelector('.book-content, #content, article, [role="main"]') as HTMLElement;
  }
  
  if (!main) {
    console.error('    ✗ 找不到主容器');
    return;
  }
  console.log('    ✓ 找到主容器:', main.tagName);
  
  // 遍歷文字節點
  const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => {
      if ((node as Text).parentElement?.closest('span[data-highlight-id]')) {
        return NodeFilter.FILTER_REJECT;
      }
      if ((node as Text).parentElement?.tagName === 'SCRIPT') {
        return NodeFilter.FILTER_REJECT;
      }
      return (node.textContent?.includes(h.text_content)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  
  const node = walker.nextNode() as Text | null;
  if (!node) {
    console.error('    ✗ 找不到文字節點');
    return;
  }
  console.log('    ✓ 找到文字節點');
  
  const idx = node.textContent!.indexOf(h.text_content);
  if (idx === -1) {
    console.error('    ✗ 文字不匹配');
    return;
  }
  
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
  
  try {
    range.surroundContents(span);
    console.log('    ✓✓✓ 成功插入 DOM');
  } catch (e) {
    console.error('    ✗✗✗ surroundContents 失敗:', e);
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
