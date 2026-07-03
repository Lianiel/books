import { useState, useEffect, useCallback } from 'react';

export type HighlightStyle = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple';

export interface HighlightRecord {
  id: string;
  book_id: string;
  chapter: string;
  text_content: string;
  start_offset: number;
  style: HighlightStyle;
}

const COLOR_MAP: Record<HighlightStyle, { color: string; bg: string }> = {
  red: { color: '#dc2626', bg: 'rgba(220,38,38,0.20)' },
  orange: { color: '#ea580c', bg: 'rgba(234,88,12,0.20)' },
  yellow: { color: '#a16207', bg: 'rgba(234,179,8,0.30)' },
  green: { color: '#16a34a', bg: 'rgba(22,163,74,0.20)' },
  blue: { color: '#2563eb', bg: 'rgba(37,99,235,0.20)' },
  indigo: { color: '#4f46e5', bg: 'rgba(79,70,229,0.20)' },
  purple: { color: '#9333ea', bg: 'rgba(147,51,234,0.20)' },
};

export const HIGHLIGHT_COLORS: { style: HighlightStyle; hex: string }[] =
  (Object.keys(COLOR_MAP) as HighlightStyle[]).map(style => ({ style, hex: COLOR_MAP[style].color }));

const STYLE_EL_ID = 'highlight-api-styles';

function ensureHighlightStylesInjected() {
  if (document.getElementById(STYLE_EL_ID)) return;
  const styleEl = document.createElement('style');
  styleEl.id = STYLE_EL_ID;
  styleEl.textContent = (Object.keys(COLOR_MAP) as HighlightStyle[])
    .map(style => `::highlight(hl-${style}) { color: ${COLOR_MAP[style].color}; background-color: ${COLOR_MAP[style].bg}; }`)
    .join('\n');
  document.head.appendChild(styleEl);
}

// CSS Custom Highlight API 支援偵測（不支援時功能靜默降級，資料仍會保存）
export function isHighlightApiSupported(): boolean {
  return typeof window !== 'undefined' && 'Highlight' in window && !!(CSS as any).highlights;
}

function storageKey(bookId: string, chapter: string) {
  return `highlights_${bookId}_${chapter}`;
}

function loadHighlights(bookId: string, chapter: string): HighlightRecord[] {
  try {
    const data = localStorage.getItem(storageKey(bookId, chapter));
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('載入畫重點資料失敗:', e);
    return [];
  }
}

function saveHighlights(bookId: string, chapter: string, list: HighlightRecord[]) {
  try {
    localStorage.setItem(storageKey(bookId, chapter), JSON.stringify(list));
  } catch (e) {
    console.error('儲存畫重點資料失敗:', e);
  }
}

function generateId(): string {
  return `hl_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

// 收集容器內所有文字節點，及其在 container.textContent 中的起訖偏移量
function collectTextNodes(container: HTMLElement): { node: Text; start: number; end: number }[] {
  const result: { node: Text; start: number; end: number }[] = [];
  let offset = 0;
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => {
      const parentTag = (node as Text).parentElement?.tagName;
      if (parentTag === 'SCRIPT' || parentTag === 'STYLE') return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  let node: Node | null;
  while ((node = walker.nextNode())) {
    const textNode = node as Text;
    const len = textNode.textContent?.length || 0;
    result.push({ node: textNode, start: offset, end: offset + len });
    offset += len;
  }
  return result;
}

// 依照純文字的起訖位置，建立跨越多個文字節點的 Range（不修改 DOM）
function buildRange(container: HTMLElement, start: number, end: number): Range | null {
  const nodes = collectTextNodes(container);
  let startNode: Text | null = null, startOffset = 0;
  let endNode: Text | null = null, endOffset = 0;

  for (const { node, start: nStart, end: nEnd } of nodes) {
    if (!startNode && nEnd > start) {
      startNode = node;
      startOffset = start - nStart;
    }
    if (nEnd >= end) {
      endNode = node;
      endOffset = end - nStart;
      break;
    }
  }
  if (!startNode || !endNode) return null;

  try {
    const range = document.createRange();
    range.setStart(startNode, Math.max(0, startOffset));
    range.setEnd(endNode, Math.max(0, endOffset));
    return range;
  } catch {
    return null;
  }
}

// 找出畫重點文字在容器中的位置：優先使用記錄的 start_offset，若內容對不上才重新掃描比對
function locateHighlight(container: HTMLElement, h: HighlightRecord): Range | null {
  const fullText = container.textContent || '';
  const { text_content, start_offset } = h;

  if (fullText.slice(start_offset, start_offset + text_content.length) === text_content) {
    return buildRange(container, start_offset, start_offset + text_content.length);
  }
  const idx = fullText.indexOf(text_content);
  if (idx === -1) return null;
  return buildRange(container, idx, idx + text_content.length);
}

// 計算某個 Range 的起點，相對於容器起始位置的字元偏移量
export function getOffsetInContainer(container: HTMLElement, range: Range): number {
  const preRange = document.createRange();
  preRange.selectNodeContents(container);
  preRange.setEnd(range.startContainer, range.startOffset);
  return preRange.toString().length;
}

export function useHighlight(bookId: string, chapter: string) {
  const [highlights, setHighlights] = useState<HighlightRecord[]>([]);
  const supported = isHighlightApiSupported();

  useEffect(() => {
    setHighlights(loadHighlights(bookId, chapter));
  }, [bookId, chapter]);

  // 重新套用所有畫重點（不修改 DOM，只註冊 Range 給 CSS Custom Highlight API）
  const applyHighlights = useCallback((container?: HTMLElement | null) => {
    if (!supported) return;
    ensureHighlightStylesInjected();
    const main = (container || document.querySelector('main')) as HTMLElement | null;
    if (!main) return;

    const byStyle: Record<HighlightStyle, Range[]> = {
      red: [], orange: [], yellow: [], green: [], blue: [], indigo: [], purple: []
    };

    highlights.forEach(h => {
      const range = locateHighlight(main, h);
      if (range) byStyle[h.style].push(range);
    });

    (Object.keys(byStyle) as HighlightStyle[]).forEach(style => {
      const name = `hl-${style}`;
      const ranges = byStyle[style];
      if (ranges.length === 0) {
        (CSS as any).highlights?.delete(name);
      } else {
        (CSS as any).highlights?.set(name, new (window as any).Highlight(...ranges));
      }
    });
  }, [highlights, supported]);

  const addHighlight = useCallback((text: string, style: HighlightStyle, startOffset: number) => {
    if (!text.trim()) return;
    const record: HighlightRecord = {
      id: generateId(), book_id: bookId, chapter, text_content: text, start_offset: startOffset, style
    };
    setHighlights(prev => {
      const updated = [...prev, record];
      saveHighlights(bookId, chapter, updated);
      return updated;
    });
  }, [bookId, chapter]);

  const removeHighlight = useCallback((id: string) => {
    setHighlights(prev => {
      const updated = prev.filter(h => h.id !== id);
      saveHighlights(bookId, chapter, updated);
      return updated;
    });
  }, [bookId, chapter]);

  // 依點擊座標找出被點到的畫重點（用來實作「點擊移除」）
  const findHighlightAtPoint = useCallback((x: number, y: number, container?: HTMLElement | null): HighlightRecord | null => {
    const main = (container || document.querySelector('main')) as HTMLElement | null;
    if (!main) return null;
    for (const h of highlights) {
      const range = locateHighlight(main, h);
      if (!range) continue;
      const rects = range.getClientRects();
      for (let i = 0; i < rects.length; i++) {
        const r = rects[i];
        if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) return h;
      }
    }
    return null;
  }, [highlights]);

  return { highlights, supported, applyHighlights, addHighlight, removeHighlight, findHighlightAtPoint };
}
