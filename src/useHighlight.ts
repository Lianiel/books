import { useState, useEffect, useCallback } from 'react';

export type HighlightStyle = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple';

export interface Highlight {
  id: string;
  book_id: string;
  chapter: string;
  text_content: string;
  style: HighlightStyle;
}

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

function saveHighlights(bookId: string, chapter: string, highlights: Highlight[]) {
  try {
    const key = `highlights_${bookId}_${chapter}`;
    localStorage.setItem(key, JSON.stringify(highlights));
  } catch (e) {
    console.error('儲存高亮資料失敗:', e);
  }
}

function generateId(): string {
  return `hl_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// 標準化文字（移除多餘空白，用於比對）
function normalizeText(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}

export function useHighlight(bookId: string, chapter: string) {
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [isLoggedIn] = useState(true);

  useEffect(() => {
    const loaded = loadHighlights(bookId, chapter);
    console.log('📚 載入本地高亮資料:', loaded.length, '筆');
    setHighlights(loaded);
  }, [bookId, chapter]);

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
    
    // 立即套用到 DOM
    try {
      applyHighlightToDOM(newHighlight);
      console.log('✓ 套用成功');
    } catch (e) {
      console.error('✗ 套用失敗:', e);
    }
  }, [highlights, bookId, chapter]);

  const removeHighlight = useCallback((id: string) => {
    const updated = highlights.filter(h => h.id !== id);
    setHighlights(updated);
    saveHighlights(bookId, chapter, updated);

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
  console.log('    → 尋找的文字:', h.text_content.substring(0, 50) + (h.text_content.length > 50 ? '...' : ''));
  
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
  
  // 標準化要尋找的文字
  const normalizedTarget = normalizeText(h.text_content);
  console.log('    → 標準化後的目標文字:', normalizedTarget.substring(0, 50) + '...');
  
  // 收集所有文字節點
  const textNodes: Text[] = [];
  const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => {
      if ((node as Text).parentElement?.closest('span[data-highlight-id]')) {
        return NodeFilter.FILTER_REJECT;
      }
      if ((node as Text).parentElement?.tagName === 'SCRIPT') {
        return NodeFilter.FILTER_REJECT;
      }
      if ((node as Text).parentElement?.tagName === 'STYLE') {
        return NodeFilter.FILTER_REJECT;
      }
      const text = node.textContent?.trim();
      if (text && text.length > 0) {
        return NodeFilter.FILTER_ACCEPT;
      }
      return NodeFilter.FILTER_SKIP;
    }
  });
  
  let node;
  while (node = walker.nextNode()) {
    textNodes.push(node as Text);
  }
  
  console.log('    → 找到', textNodes.length, '個文字節點');
  
  // 方法1: 精確匹配（原始文字）
  for (const textNode of textNodes) {
    const content = textNode.textContent || '';
    if (content.includes(h.text_content)) {
      console.log('    ✓ 精確匹配成功');
      return wrapTextInSpan(textNode, h, h.text_content);
    }
  }
  
  // 方法2: 標準化匹配（忽略多餘空白）
  for (const textNode of textNodes) {
    const content = textNode.textContent || '';
    const normalized = normalizeText(content);
    if (normalized.includes(normalizedTarget)) {
      console.log('    ✓ 標準化匹配成功');
      // 找出原始文字中對應的位置
      const idx = content.indexOf(h.text_content.trim());
      if (idx !== -1) {
        return wrapTextInSpan(textNode, h, h.text_content.trim());
      }
    }
  }
  
  // 方法3: 模糊匹配（尋找部分文字）
  const searchText = normalizedTarget.substring(0, Math.min(20, normalizedTarget.length));
  for (const textNode of textNodes) {
    const content = normalizeText(textNode.textContent || '');
    if (content.includes(searchText)) {
      console.log('    ⚠️ 模糊匹配成功（前20字）');
      console.log('    → 節點內容:', textNode.textContent?.substring(0, 60) + '...');
      // 這種情況可能是文字跨節點，暫不處理
      break;
    }
  }
  
  console.error('    ✗ 所有匹配方式都失敗');
  console.log('    💡 儲存的文字可能已不在當前頁面中');
}

function wrapTextInSpan(textNode: Text, h: Highlight, searchText: string): void {
  const content = textNode.textContent || '';
  const idx = content.indexOf(searchText);
  
  if (idx === -1) {
    console.error('    ✗ indexOf 失敗');
    return;
  }
  
  try {
    const range = document.createRange();
    range.setStart(textNode, idx);
    range.setEnd(textNode, idx + searchText.length);
    
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
