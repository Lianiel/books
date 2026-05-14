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

    console.log('➕ 新增高亮:', text.length, '字，顏色:', style);

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

    // 移除所有相同 ID 的 span（可能有多個）
    document.querySelectorAll(`span[data-highlight-id="${id}"]`).forEach(span => {
      if (span.parentNode) {
        span.parentNode.replaceChild(document.createTextNode(span.textContent || ''), span);
      }
    });
    
    // 合併相鄰的文字節點
    const main = document.querySelector('main');
    if (main) main.normalize();
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
    }
  });
  const main = document.querySelector('main');
  if (main) main.normalize();
}

// 新的高亮策略：使用 CSS.highlights API（現代瀏覽器）+ fallback
function applyHighlightToDOM(h: Highlight) {
  console.log('  🔧 applyHighlightToDOM 開始，長度:', h.text_content.length, '字');
  
  const main = document.querySelector('main');
  if (!main) {
    console.error('    ✗ 找不到主容器');
    return;
  }
  
  // 收集主容器內的所有文字內容
  const fullText = main.textContent || '';
  const targetText = h.text_content;
  
  // 找到文字在完整內容中的位置
  const startIndex = fullText.indexOf(targetText);
  if (startIndex === -1) {
    console.error('    ✗ 在頁面中找不到這段文字');
    return;
  }
  
  console.log('    ✓ 找到文字，起始位置:', startIndex);
  
  // 使用 TreeWalker 找到所有文字節點，並計算每個節點的偏移量
  const textNodes: { node: Text; offset: number }[] = [];
  let currentOffset = 0;
  
  const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => {
      if ((node as Text).parentElement?.closest('span[data-highlight-id]')) {
        return NodeFilter.FILTER_REJECT;
      }
      if (['SCRIPT', 'STYLE'].includes((node as Text).parentElement?.tagName || '')) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  
  let node;
  while (node = walker.nextNode()) {
    const textNode = node as Text;
    const text = textNode.textContent || '';
    textNodes.push({ node: textNode, offset: currentOffset });
    currentOffset += text.length;
  }
  
  console.log('    → 找到', textNodes.length, '個文字節點，總長度:', currentOffset);
  
  // 找出需要高亮的節點範圍
  const endIndex = startIndex + targetText.length;
  const affectedNodes: { node: Text; startPos: number; endPos: number }[] = [];
  
  for (let i = 0; i < textNodes.length; i++) {
    const { node: textNode, offset } = textNodes[i];
    const nodeText = textNode.textContent || '';
    const nodeEnd = offset + nodeText.length;
    
    // 檢查這個節點是否與高亮範圍有交集
    if (nodeEnd > startIndex && offset < endIndex) {
      const startPos = Math.max(0, startIndex - offset);
      const endPos = Math.min(nodeText.length, endIndex - offset);
      affectedNodes.push({ node: textNode, startPos, endPos });
    }
  }
  
  console.log('    → 需要高亮', affectedNodes.length, '個節點');
  
  // 對每個受影響的節點進行高亮處理
  affectedNodes.forEach(({ node: textNode, startPos, endPos }) => {
    try {
      const text = textNode.textContent || '';
      const before = text.substring(0, startPos);
      const highlight = text.substring(startPos, endPos);
      const after = text.substring(endPos);
      
      // 創建高亮 span
      const span = document.createElement('span');
      span.setAttribute('data-highlight-id', h.id);
      span.style.cursor = 'pointer';
      span.title = '點擊移除';
      span.textContent = highlight;
      applyStyleToSpan(span, h.style);
      
      span.addEventListener('click', (e) => {
        e.stopPropagation();
        const event = new CustomEvent('removeHighlight', { detail: h.id });
        document.dispatchEvent(event);
      });
      
      // 替換文字節點
      const parent = textNode.parentNode;
      if (!parent) return;
      
      const fragment = document.createDocumentFragment();
      if (before) fragment.appendChild(document.createTextNode(before));
      fragment.appendChild(span);
      if (after) fragment.appendChild(document.createTextNode(after));
      
      parent.replaceChild(fragment, textNode);
      
    } catch (e) {
      console.error('    ✗ 處理節點失敗:', e);
    }
  });
  
  console.log('    ✓✓✓ 高亮完成');
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
