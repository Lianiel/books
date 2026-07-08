import { useState, useEffect, useCallback, useRef } from 'react';
import { supabase } from './lib/supabase';
import { getReaderPhone } from './lib/readerAuth';

export type HighlightStyle = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple';

export interface HighlightRecord {
  id: string;
  book_id: string;
  chapter: string;
  text_content: string;
  start_offset: number;
  style: HighlightStyle;
  bold?: boolean;
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

// 粗體用 text-shadow 疊字模擬（::highlight() 不支援 font-weight）。
// 顏色+粗體各自獨立定義成一個 highlight 名稱（而非疊加兩個 highlight），
// 避免 currentColor 在 highlight 偽元素內解析不穩定、以及多個 highlight 疊加時瀏覽器優先權判斷不一致的問題。
function highlightName(style: HighlightStyle, bold?: boolean) {
  return bold ? `hl-${style}-bold` : `hl-${style}`;
}

function boldTextShadow(hex: string) {
  return `-0.5px 0 ${hex}, 0.5px 0 ${hex}, 0 -0.5px ${hex}, 0 0.5px ${hex}`;
}

function ensureHighlightStylesInjected() {
  if (document.getElementById(STYLE_EL_ID)) return;
  const styleEl = document.createElement('style');
  styleEl.id = STYLE_EL_ID;
  styleEl.textContent = (Object.keys(COLOR_MAP) as HighlightStyle[])
    .flatMap(style => {
      const { color, bg } = COLOR_MAP[style];
      return [
        `::highlight(hl-${style}) { color: ${color}; background-color: ${bg}; }`,
        `::highlight(hl-${style}-bold) { color: ${color}; background-color: ${bg}; text-shadow: ${boldTextShadow(color)}; }`
      ];
    })
    .join('\n');
  document.head.appendChild(styleEl);
}

// CSS Custom Highlight API 支援偵測（不支援時功能靜默降級，資料仍會保存）
export function isHighlightApiSupported(): boolean {
  return typeof window !== 'undefined' && 'Highlight' in window && !!(CSS as any).highlights;
}

const STORAGE_PREFIX = 'highlights_';

function storageKey(bookId: string, chapter: string) {
  return `${STORAGE_PREFIX}${bookId}_${chapter}`;
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

// 雲端同步：以手機號碼（reader_phone）為身分依據，讓同一人跨裝置看到同一份畫重點
async function fetchCloudHighlights(userKey: string, bookId: string, chapter: string): Promise<HighlightRecord[] | null> {
  const { data, error } = await supabase
    .from('highlights')
    .select('id, book_id, chapter, text_content, start_offset, style, bold')
    .eq('user_key', userKey)
    .eq('book_id', bookId)
    .eq('chapter', chapter);
  if (error) {
    console.error('讀取雲端畫重點失敗:', error);
    return null;
  }
  return data as HighlightRecord[];
}

async function upsertCloudHighlight(userKey: string, h: HighlightRecord) {
  const { error } = await supabase.from('highlights').upsert({
    id: h.id,
    user_key: userKey,
    book_id: h.book_id,
    chapter: h.chapter,
    text_content: h.text_content,
    start_offset: h.start_offset,
    style: h.style,
    bold: h.bold || false,
  });
  if (error) console.error('同步畫重點到雲端失敗:', error);
}

async function deleteCloudHighlight(userKey: string, id: string) {
  const { error } = await supabase.from('highlights').delete().eq('id', id).eq('user_key', userKey);
  if (error) console.error('從雲端刪除畫重點失敗:', error);
}

// 讀取某本書所有章節的畫重點（跨章節總覽用），依 chapter 分組
export function loadAllHighlightsForBook(bookId: string): Record<string, HighlightRecord[]> {
  const result: Record<string, HighlightRecord[]> = {};
  const prefix = `${STORAGE_PREFIX}${bookId}_`;
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key || !key.startsWith(prefix)) continue;
    const chapter = key.slice(prefix.length);
    try {
      const list = JSON.parse(localStorage.getItem(key) || '[]') as HighlightRecord[];
      if (list.length > 0) result[chapter] = list;
    } catch {
      // 忽略壞掉的資料
    }
  }
  return result;
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

// 捲動到某筆畫重點的位置（列表點擊跳轉用）
export function scrollToHighlight(container: HTMLElement, h: HighlightRecord): boolean {
  const range = locateHighlight(container, h);
  if (!range) return false;
  const rect = range.getBoundingClientRect();
  const target = rect.top + window.scrollY - window.innerHeight / 3;
  window.scrollTo({ top: target, behavior: 'smooth' });
  return true;
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
  const highlightsRef = useRef<HighlightRecord[]>([]);
  highlightsRef.current = highlights;
  const supported = isHighlightApiSupported();

  useEffect(() => {
    const local = loadHighlights(bookId, chapter);
    setHighlights(local);

    const userKey = getReaderPhone();
    if (!userKey) return;
    let cancelled = false;
    fetchCloudHighlights(userKey, bookId, chapter).then(cloud => {
      if (cancelled || !cloud) return;
      // 已登入時雲端為準（同步跨裝置），並回寫本機快取
      saveHighlights(bookId, chapter, cloud);
      setHighlights(cloud);
    });
    return () => { cancelled = true; };
  }, [bookId, chapter]);

  // 重新套用所有畫重點（不修改 DOM，只註冊 Range 給 CSS Custom Highlight API）
  const applyHighlights = useCallback((container?: HTMLElement | null) => {
    if (!supported) return;
    ensureHighlightStylesInjected();
    const main = (container || document.querySelector('main')) as HTMLElement | null;
    if (!main) return;

    const styles = Object.keys(COLOR_MAP) as HighlightStyle[];
    const byName: Record<string, Range[]> = {};
    styles.forEach(style => {
      byName[highlightName(style, false)] = [];
      byName[highlightName(style, true)] = [];
    });

    highlights.forEach(h => {
      try {
        const range = locateHighlight(main, h);
        if (!range) return;
        byName[highlightName(h.style, h.bold)].push(range);
      } catch {
        // 該筆重點所在的 DOM 節點可能因為畫面重新渲染而暫時不穩定，略過即可，下次重新套用會再試
      }
    });

    Object.keys(byName).forEach(name => {
      try {
        const ranges = byName[name];
        if (ranges.length === 0) {
          (CSS as any).highlights?.delete(name);
        } else {
          (CSS as any).highlights?.set(name, new (window as any).Highlight(...ranges));
        }
      } catch {
        // 忽略單一顏色群組的暫時性失敗
      }
    });
  }, [highlights, supported]);

  const addHighlight = useCallback((text: string, style: HighlightStyle, startOffset: number, bold?: boolean) => {
    if (!text.trim()) return '';
    const prev = highlightsRef.current;
    // 同一段文字（相同起點與內容）已經畫過重點時，直接更新顏色/粗體，避免產生重疊的重複記錄
    const existing = prev.find(h => h.start_offset === startOffset && h.text_content === text);
    const resultId = existing ? existing.id : generateId();
    const record: HighlightRecord = { id: resultId, book_id: bookId, chapter, text_content: text, start_offset: startOffset, style, bold };
    const updated = existing
      ? prev.map(h => h.id === existing.id ? record : h)
      : [...prev, record];

    highlightsRef.current = updated;
    saveHighlights(bookId, chapter, updated);
    setHighlights(updated);

    const userKey = getReaderPhone();
    if (userKey) upsertCloudHighlight(userKey, record);
    return resultId;
  }, [bookId, chapter]);

  const removeHighlight = useCallback((id: string) => {
    setHighlights(prev => {
      const updated = prev.filter(h => h.id !== id);
      saveHighlights(bookId, chapter, updated);
      return updated;
    });
    const userKey = getReaderPhone();
    if (userKey) deleteCloudHighlight(userKey, id);
  }, [bookId, chapter]);

  // 依點擊座標找出被點到的畫重點（用來實作「點擊移除」）
  const findHighlightAtPoint = useCallback((x: number, y: number, container?: HTMLElement | null): HighlightRecord | null => {
    const main = (container || document.querySelector('main')) as HTMLElement | null;
    if (!main) return null;
    for (const h of highlights) {
      try {
        const range = locateHighlight(main, h);
        if (!range) continue;
        const rects = range.getClientRects();
        for (let i = 0; i < rects.length; i++) {
          const r = rects[i];
          if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) return h;
        }
      } catch {
        // 忽略暫時性的節點失效
      }
    }
    return null;
  }, [highlights]);

  return { highlights, supported, applyHighlights, addHighlight, removeHighlight, findHighlightAtPoint };
}
