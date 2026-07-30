import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { X, Volume2, VolumeX, Download, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, BookOpen, List, User, StickyNote, Trash2 } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
// 從 App.tsx 導入章節類型和書名映射
import type { ChapterInfo } from '../App';
import { BOOK_TITLES } from '../App';
import { useHighlight, getOffsetInContainer, scrollToHighlight, HIGHLIGHT_COLORS, type HighlightStyle } from '../useHighlight';
import { getReaderPhone, loginReader, logoutReader, getReaderDisplayName } from '../lib/readerAuth';

interface BookLayoutProps {
  bookId: string;
  chapter: string;
  chapters: ChapterInfo[];  // 章節配置從 props 傳入
  children: ReactNode;
}

type FontSize = 'sm' | 'base' | 'lg' | 'xl' | '2xl';

const fontSizePx: Record<FontSize, string> = {
  'sm': '24px',
  'base': '28px',
  'lg': '32px',
  'xl': '36px',
  '2xl': '40px'
};

const fontSizeLabels: Record<FontSize, string> = {
  'sm': '24',
  'base': '28',
  'lg': '32',
  'xl': '36',
  '2xl': '40'
};

type FontFamilyKey = 'default' | 'serif' | 'kai';

const fontFamilyOptions: { key: FontFamilyKey; label: string; value: string }[] = [
  { key: 'default', label: '預設', value: '' },
  { key: 'serif', label: '明體', value: "'Noto Serif TC', 'PMingLiU', serif" },
  { key: 'kai', label: '楷體', value: "'Kaiti TC', 'DFKai-SB', 'BiauKai', cursive" },
];


// 聖經書卷簡稱／全名對照表，由長至短排列，避免短簡稱搶先匹配（如「約一」須排在「約」之前）
const BIBLE_BOOK_NAMES: [string, string][] = [
  ['撒母耳記上', '撒母耳記上'], ['撒母耳記下', '撒母耳記下'],
  ['列王紀上', '列王紀上'], ['列王紀下', '列王紀下'],
  ['歷代志上', '歷代志上'], ['歷代志下', '歷代志下'],
  ['哥林多前書', '哥林多前書'], ['哥林多後書', '哥林多後書'],
  ['帖撒羅尼迦前書', '帖撒羅尼迦前書'], ['帖撒羅尼迦後書', '帖撒羅尼迦後書'],
  ['提摩太前書', '提摩太前書'], ['提摩太後書', '提摩太後書'],
  ['以斯拉記', '以斯拉記'], ['尼希米記', '尼希米記'], ['以斯帖記', '以斯帖記'],
  ['約伯記', '約伯記'], ['傳道書', '傳道書'], ['以賽亞書', '以賽亞書'],
  ['耶利米書', '耶利米書'], ['耶利米哀歌', '耶利米哀歌'], ['以西結書', '以西結書'],
  ['但以理書', '但以理書'], ['何西阿書', '何西阿書'], ['約珥書', '約珥書'],
  ['阿摩司書', '阿摩司書'], ['俄巴底亞書', '俄巴底亞書'], ['約拿書', '約拿書'],
  ['彌迦書', '彌迦書'], ['那鴻書', '那鴻書'], ['哈巴谷書', '哈巴谷書'],
  ['西番雅書', '西番雅書'], ['哈該書', '哈該書'], ['撒迦利亞書', '撒迦利亞書'],
  ['瑪拉基書', '瑪拉基書'], ['馬太福音', '馬太福音'], ['馬可福音', '馬可福音'],
  ['路加福音', '路加福音'], ['約翰福音', '約翰福音'], ['使徒行傳', '使徒行傳'],
  ['羅馬書', '羅馬書'], ['加拉太書', '加拉太書'], ['以弗所書', '以弗所書'],
  ['腓立比書', '腓立比書'], ['歌羅西書', '歌羅西書'], ['提多書', '提多書'],
  ['腓利門書', '腓利門書'], ['希伯來書', '希伯來書'], ['雅各書', '雅各書'],
  ['彼得前書', '彼得前書'], ['彼得後書', '彼得後書'], ['約翰壹書', '約翰壹書'],
  ['約翰貳書', '約翰貳書'], ['約翰參書', '約翰參書'], ['猶大書', '猶大書'],
  ['啟示錄', '啟示錄'], ['創世記', '創世記'], ['出埃及記', '出埃及記'],
  ['利未記', '利未記'], ['民數記', '民數記'], ['申命記', '申命記'],
  ['約書亞記', '約書亞記'], ['士師記', '士師記'], ['路得記', '路得記'],
  ['詩篇', '詩篇'], ['箴言', '箴言'], ['雅歌', '雅歌'],
  // 常見簡稱（多字先於單字）
  ['撒上', '撒母耳記上'], ['撒下', '撒母耳記下'], ['王上', '列王紀上'], ['王下', '列王紀下'],
  ['代上', '歷代志上'], ['代下', '歷代志下'], ['林前', '哥林多前書'], ['林後', '哥林多後書'],
  ['帖前', '帖撒羅尼迦前書'], ['帖後', '帖撒羅尼迦後書'], ['提前', '提摩太前書'], ['提後', '提摩太後書'],
  ['約一', '約翰壹書'], ['約二', '約翰貳書'], ['約三', '約翰參書'], ['彼前', '彼得前書'], ['彼後', '彼得後書'],
  ['創', '創世記'], ['出', '出埃及記'], ['利', '利未記'], ['民', '民數記'], ['申', '申命記'],
  ['書', '約書亞記'], ['士', '士師記'], ['得', '路得記'], ['拉', '以斯拉記'], ['尼', '尼希米記'],
  ['斯', '以斯帖記'], ['伯', '約伯記'], ['詩', '詩篇'], ['箴', '箴言'], ['傳', '傳道書'],
  ['賽', '以賽亞書'], ['耶', '耶利米書'], ['哀', '耶利米哀歌'], ['結', '以西結書'], ['但', '但以理書'],
  ['何', '何西阿書'], ['珥', '約珥書'], ['摩', '阿摩司書'], ['俄', '俄巴底亞書'], ['拿', '約拿書'],
  ['彌', '彌迦書'], ['鴻', '那鴻書'], ['哈', '哈巴谷書'], ['番', '西番雅書'], ['該', '哈該書'],
  ['亞', '撒迦利亞書'], ['瑪', '瑪拉基書'], ['太', '馬太福音'], ['可', '馬可福音'], ['路', '路加福音'],
  ['約', '約翰福音'], ['徒', '使徒行傳'], ['羅', '羅馬書'], ['加', '加拉太書'], ['弗', '以弗所書'],
  ['腓', '腓立比書'], ['西', '歌羅西書'], ['多', '提多書'], ['門', '腓利門書'], ['來', '希伯來書'],
  ['雅', '雅各書'], ['猶', '猶大書'], ['啟', '啟示錄'],
];

const numToChinese = (n: number): string => {
  const digits = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  if (n < 10) return digits[n];
  if (n < 20) return n === 10 ? '十' : '十' + digits[n % 10];
  if (n < 100) {
    const tens = Math.floor(n / 10);
    const ones = n % 10;
    return digits[tens] + '十' + (ones ? digits[ones] : '');
  }
  const hundreds = Math.floor(n / 100);
  const rest = n % 100;
  if (rest === 0) return digits[hundreds] + '百';
  return digits[hundreds] + '百' + (rest < 10 ? '零' : '') + numToChinese(rest);
};

// 把「賽六十五17」「來一10~12」這類經文引用展開成「以賽亞書六十五章十七節」「希伯來書一章十節到十二節」，方便語音朗讀
const expandScriptureRefs = (text: string): string => {
  const bookAlt = BIBLE_BOOK_NAMES.map(([abbrev]) => abbrev).join('|');
  const refRegex = new RegExp(`(${bookAlt})([零一二三四五六七八九十百千廿卅]+)(\\d{1,3})(?:[-~–—](\\d{1,3}))?`, 'g');
  const bookMap = new Map(BIBLE_BOOK_NAMES);
  return text.replace(refRegex, (match, abbrev, chapterCn, verseStart, verseEnd) => {
    const fullName = bookMap.get(abbrev) || abbrev;
    const verseStartCn = numToChinese(parseInt(verseStart, 10));
    if (verseEnd) {
      const verseEndCn = numToChinese(parseInt(verseEnd, 10));
      return `${fullName}${chapterCn}章${verseStartCn}節到${verseEndCn}節`;
    }
    return `${fullName}${chapterCn}章${verseStartCn}節`;
  });
};

const BookLayout: React.FC<BookLayoutProps> = ({ bookId, chapter, chapters, children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // 字體縮放
  const [fontSize, setFontSize] = useState<FontSize>('sm');
  
  // 工具列顯示/隱藏
  const [showToolbar, setShowToolbar] = useState(true);
  
  // 章節選擇器顯示/隱藏
  const [showChapterMenu, setShowChapterMenu] = useState(false);
  
  // TTS 狀態
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [speechRate, setSpeechRate] = useState(0.5);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const speechQueueRef = useRef<string[]>([]);
  const speechIndexRef = useRef(0);
  const speechStopRef = useRef(false);
  
  // 語速選擇器
  const [showSpeedSelector, setShowSpeedSelector] = useState(false);
  
  // 字體選擇器
  const [showFontSelector, setShowFontSelector] = useState(false);

  // 字型選擇器
  const [fontFamily, setFontFamily] = useState<FontFamilyKey>('default');
  const [showFontFamilySelector, setShowFontFamilySelector] = useState(false);

  // 畫重點
  const mainRef = useRef<HTMLElement>(null);
  const { highlights, supported: highlightSupported, applyHighlights, addHighlight, updateNote, removeHighlight, findHighlightAtPoint } = useHighlight(bookId, chapter);
  const [selectionToolbar, setSelectionToolbar] = useState<{ x: number; y: number; text: string; range: Range } | null>(null);
  const [boldPending, setBoldPending] = useState(false);
  const [lastAdded, setLastAdded] = useState<{ id: string; x: number; y: number } | null>(null);
  const undoTimerRef = useRef<number | null>(null);
  const [showHighlightPanel, setShowHighlightPanel] = useState(false);
  // 已畫記文字被點擊時的動作選單（筆記／刪除），取代原本點擊即刪除的行為
  const [highlightActionPopup, setHighlightActionPopup] = useState<{ id: string; x: number; y: number } | null>(null);
  // 筆記編輯框
  const [noteEditor, setNoteEditor] = useState<{ id: string; value: string } | null>(null);

  // 讀者登入（跨裝置同步畫重點用）
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [readerPhone, setReaderPhoneState] = useState<string | null>(() => getReaderPhone());
  const [loginPhoneInput, setLoginPhoneInput] = useState('');
  const [loginPwdInput, setLoginPwdInput] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = () => {
    if (loginReader(loginPhoneInput, loginPwdInput)) {
      setReaderPhoneState(loginPhoneInput.trim());
      setShowLoginModal(false);
      setLoginPhoneInput('');
      setLoginPwdInput('');
      setLoginError('');
      window.location.reload();
    } else {
      setLoginError('手機號碼或密碼錯誤');
    }
  };

  const handleLogout = () => {
    logoutReader();
    setReaderPhoneState(null);
    window.location.reload();
  };

  // 獲取章節資訊
  const currentIndex = chapters.findIndex(ch => ch.id === chapter);
  const currentChapter = chapters[currentIndex];
  const previousChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex >= 0 && currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;
  

  
  // 自動展開所有區塊（不顯示提示）
  const clickAllToggles = () => {
    // 找到所有按鈕,檢查是否包含 ChevronDown（表示收合狀態）
    const buttons = Array.from(document.querySelectorAll('button'));
    buttons.forEach(btn => {
      // 檢查按鈕內是否有 ChevronDown 的 SVG
      const hasChevronDown = btn.querySelector('svg')?.parentElement?.innerHTML.includes('ChevronDown');
      if (hasChevronDown || btn.querySelector('[class*="lucide-chevron-down"]')) {
        btn.click();
      }
    });
  };
  
  // 匯出 Word
  const handleExportWord = async () => {
    try {
      const mainContent = document.querySelector('main');
      if (!mainContent) {
        alert('找不到內容區域');
        return;
      }
      
      const clone = mainContent.cloneNode(true) as HTMLElement;

      // 展開/收合的區塊標題（正文、重點整理、分享題目…）本身是 <button>，
      // 標題文字就寫在 button 裡面；舊版直接整顆 button 砍掉，連標題文字
      // 也一起消失了。改成「拆殼」：保留裡面的文字和圖示，只是不再是按鈕。
      clone.querySelectorAll('button').forEach((btn) => {
        const div = document.createElement('div');
        div.innerHTML = btn.innerHTML;
        div.setAttribute('style', btn.getAttribute('style') || '');
        btn.replaceWith(div);
      });
      clone.querySelectorAll('[class*="toolbar"]').forEach(el => el.remove());

      // 圖片路徑在頁面上是 /images/... 相對路徑，瀏覽器顯示沒問題，
      // 但匯出成獨立 docx 檔後沒有網址可以依循，Word 開啟時找不到圖檔。
      // 這裡把每張圖片轉成 base64 內嵌，讓 docx 檔本身就含有圖片資料。
      const imgs = Array.from(clone.querySelectorAll('img'));
      await Promise.all(imgs.map(async (img) => {
        try {
          const res = await fetch(img.src);
          const blob = await res.blob();
          const dataUrl = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          });
          img.setAttribute('src', dataUrl);
        } catch (e) {
          console.error('圖片轉換失敗，略過:', img.src, e);
        }
      }));

      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: "Microsoft JhengHei", "微軟正黑體", sans-serif; }
            h1, h2, h3 { color: #1e40af; }
            p { line-height: 1.6; margin-bottom: 0.5em; }
          </style>
        </head>
        <body>
          ${clone.innerHTML}
        </body>
        </html>
      `;
      
      const { asBlob } = await import('html-docx-js-typescript');
      const blob = await asBlob(htmlContent);
      
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${bookId}_${chapter}.docx`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      alert('Word 檔案已下載!');
    } catch (error) {
      console.error('匯出失敗:', error);
      alert('匯出失敗,請稍後再試');
    }
  };

  // 自動展開所有區塊（頁面載入或切換章節時）
  useEffect(() => {
    const expandAll = () => {
      // 找到所有可能的可展開區塊容器
      const containers = document.querySelectorAll('.bg-white.rounded-lg.shadow-md');
      
      containers.forEach(container => {
        // 在每個容器內找到按鈕
        const button = container.querySelector('button');
        if (button) {
          // 檢查容器內是否只有一個子元素（只有按鈕，沒有內容區）
          // 如果有內容區，容器會有2個子元素：button 和 content div
          if (container.children.length === 1) {
            // 只有按鈕，沒有內容，說明是收合狀態
            button.click();
          }
        }
      });
    };
    
    const timer = setTimeout(expandAll, 500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // 畫重點：資料變動時重新套用
  useEffect(() => {
    applyHighlights(mainRef.current);
  }, [applyHighlights]);

  // 畫重點：內容區塊展開/收合等 DOM 變動後，重新套用（CSS Custom Highlight 不會修改 DOM，
  // 但區塊展開收合會整段重新掛載，導致原本的 Range 失效，需要重新掃描一次）
  useEffect(() => {
    const main = mainRef.current;
    if (!main || !highlightSupported) return;
    const observer = new MutationObserver(() => {
      window.clearTimeout((observer as any)._t);
      (observer as any)._t = window.setTimeout(() => applyHighlights(main), 150);
    });
    observer.observe(main, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [applyHighlights, highlightSupported, location.pathname]);

  // 畫重點：選取文字後顯示顏色選單
  const handleSelectionChange = () => {
    const main = mainRef.current;
    if (!main) return;
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed || selection.rangeCount === 0) {
      setSelectionToolbar(null);
      return;
    }
    const range = selection.getRangeAt(0);
    if (!main.contains(range.commonAncestorContainer)) {
      setSelectionToolbar(null);
      return;
    }
    const text = range.toString().trim();
    if (!text) {
      setSelectionToolbar(null);
      return;
    }
    try {
      const rect = range.getBoundingClientRect();
      setSelectionToolbar({ x: rect.left + rect.width / 2, y: rect.top, text, range: range.cloneRange() });
    } catch {
      setSelectionToolbar(null);
    }
  };

  const handlePickHighlightColor = (style: HighlightStyle) => {
    if (!selectionToolbar || !mainRef.current) return;
    try {
      const offset = getOffsetInContainer(mainRef.current, selectionToolbar.range);
      const id = addHighlight(selectionToolbar.text, style, offset, boldPending);
      const { x, y } = selectionToolbar;
      window.getSelection()?.removeAllRanges();
      setSelectionToolbar(null);

      if (id) {
        if (undoTimerRef.current) window.clearTimeout(undoTimerRef.current);
        setLastAdded({ id, x, y });
        undoTimerRef.current = window.setTimeout(() => setLastAdded(null), 4000);
      }
    } catch (e) {
      console.error('畫重點失敗:', e);
      setSelectionToolbar(null);
    }
  };

  const handleUndoLastHighlight = () => {
    if (!lastAdded) return;
    if (undoTimerRef.current) window.clearTimeout(undoTimerRef.current);
    removeHighlight(lastAdded.id);
    setLastAdded(null);
  };

  // 畫重點：點擊已畫記的文字，顯示「筆記／刪除」動作選單（沒有選取文字時才觸發，避免跟選字互相干擾）
  const handleMainClick = (e: React.MouseEvent) => {
    if (!highlightSupported) return;
    const selection = window.getSelection();
    if (selection && !selection.isCollapsed) return;
    const hit = findHighlightAtPoint(e.clientX, e.clientY, mainRef.current);
    if (hit) setHighlightActionPopup({ id: hit.id, x: e.clientX, y: e.clientY });
  };

  const openNoteEditor = (id: string) => {
    const target = highlights.find(h => h.id === id);
    setNoteEditor({ id, value: target?.note || '' });
    setHighlightActionPopup(null);
    setShowHighlightPanel(false);
  };

  const saveNote = () => {
    if (!noteEditor) return;
    updateNote(noteEditor.id, noteEditor.value);
    setNoteEditor(null);
  };

  // 畫重點：從全書重點總覽頁點擊項目跳轉過來後，捲動到該筆重點並短暫閃爍提示
  useEffect(() => {
    const pendingId = sessionStorage.getItem('scrollToHighlightId');
    if (!pendingId || !mainRef.current) return;
    const target = highlights.find(h => h.id === pendingId);
    if (!target) return;
    sessionStorage.removeItem('scrollToHighlightId');
    const timer = setTimeout(() => {
      if (mainRef.current) scrollToHighlight(mainRef.current, target);
    }, 600);
    return () => clearTimeout(timer);
  }, [highlights]);

  // 關閉按鈕
  const handleClose = () => {
    if (isSpeaking) {
      speechStopRef.current = true;
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setIsPaused(false);
    }
    
    // 檢查是否在 iframe 中（從埔和小站嵌入）
    if (window.self !== window.parent) {
      // 在 iframe 中，發送訊息給父窗口
      window.parent.postMessage({ type: 'closeBookEmbed' }, '*');
    } else {
      // 直接開啟，返回書房首頁
      navigate('/');
    }
  };

  // 預載語音列表
  useEffect(() => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => { window.speechSynthesis.getVoices(); };
  }, []);

  // 把長文字依句尾標點切成安全長度的段落，避免 Android 語音引擎對單段文字的長度限制（超過約4000字會回報 synthesis-failed）
  const splitTextForSpeech = (text: string, maxLen = 300): string[] => {
    const parts = text.split(/([。！？\n]+)/);
    const sentences: string[] = [];
    for (let i = 0; i < parts.length; i += 2) {
      const sentence = parts[i] + (parts[i + 1] || '');
      if (sentence.trim()) sentences.push(sentence);
    }
    const chunks: string[] = [];
    let current = '';
    for (const s of sentences) {
      if (current && (current + s).length > maxLen) {
        chunks.push(current);
        current = s;
      } else {
        current += s;
      }
    }
    if (current.trim()) chunks.push(current);
    return chunks;
  };

  const speakNextChunk = () => {
    const queue = speechQueueRef.current;
    const idx = speechIndexRef.current;
    if (idx >= queue.length) {
      setIsSpeaking(false);
      setIsPaused(false);
      utteranceRef.current = null;
      return;
    }

    const utterance = new SpeechSynthesisUtterance(queue[idx]);
    utterance.lang = 'zh-TW';
    utterance.rate = speechRate;

    const voices = window.speechSynthesis.getVoices();
    const zhVoices = voices.filter(v => v.lang === 'zh-TW' || v.lang.startsWith('zh'));
    if (zhVoices.length > 0) utterance.voice = zhVoices[0];

    utterance.onend = () => {
      if (speechStopRef.current) return;
      speechIndexRef.current += 1;
      speakNextChunk();
    };
    utterance.onerror = () => {
      if (speechStopRef.current) return;
      setIsSpeaking(false);
      setIsPaused(false);
      utteranceRef.current = null;
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  // TTS 控制
  const handleSpeak = () => {
    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.pause();
      setIsPaused(true);
      return;
    }

    if (!('speechSynthesis' in window)) return;
    const mainContent = document.querySelector('main');
    if (!mainContent) return;
    const rawTextContent = (mainContent as HTMLElement).innerText.trim();
    if (!rawTextContent) return;
    const textContent = expandScriptureRefs(rawTextContent);

    speechStopRef.current = false;
    window.speechSynthesis.cancel();
    setIsSpeaking(true);
    setIsPaused(false);

    speechQueueRef.current = splitTextForSpeech(textContent);
    speechIndexRef.current = 0;

    setTimeout(() => {
      speakNextChunk();
    }, 150);
  };

  const handleStopSpeak = () => {
    speechStopRef.current = true;
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
    utteranceRef.current = null;
  };

  // 章節切換
  const handleChapterChange = (chapterPath: string) => {
    if (isSpeaking) {
      speechStopRef.current = true;
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setIsPaused(false);
    }

    setShowChapterMenu(false);
    navigate(chapterPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      
      {/* ========== 頂部章節導航條 ========== */}
      <div className="sticky top-0 z-50 bg-gradient-to-r from-pink-300 to-pink-400 shadow-lg" style={{ paddingTop: 'max(env(safe-area-inset-top), 20px)' }}>
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-2 sm:py-3">
          <div className="flex items-center gap-2">
            
            {/* 左側:上一章按鈕 */}
            <button
              onClick={() => previousChapter && handleChapterChange(previousChapter.path)}
              disabled={!previousChapter}
              className={`flex items-center gap-1 px-2 sm:px-3 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-colors flex-shrink-0 ${
                previousChapter 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              title={previousChapter ? `上一章: ${previousChapter.title}` : '已是第一章'}
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">上一章</span>
            </button>

            {/* 中間:章節標題與選擇器（佔據剩餘空間） */}
            <div className="flex-1 min-w-0">
              <button
                onClick={() => setShowChapterMenu(!showChapterMenu)}
                className="w-full flex items-center justify-between gap-1 sm:gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 sm:px-6 py-2 sm:py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all font-bold text-sm sm:text-base"
                title="點擊選擇章節"
              >
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="truncate flex-1 text-center">
                  <span className="opacity-75 font-normal">{BOOK_TITLES[bookId] || bookId}</span>
                  <span className="opacity-60 mx-1">·</span>
                  {currentChapter?.title || chapter}
                </span>
                <span className="text-sm opacity-90 flex-shrink-0">{currentIndex + 1}/{chapters.length}</span>
                <List className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              </button>

                {/* 章節選擇下拉選單 */}
                {showChapterMenu && (
                  <>
                    {/* 背景遮罩 */}
                    <div 
                      className="fixed inset-0 bg-black/20 z-40"
                      onClick={() => setShowChapterMenu(false)}
                    />
                    
                    {/* 選單內容 */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-xl shadow-2xl overflow-hidden z-50 w-[90vw] max-w-md border-2 border-indigo-200">
                      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-3">
                        <h3 className="font-bold text-center">章節選擇</h3>
                      </div>
                      <div className="max-h-[60vh] overflow-y-auto p-2">
                        {chapters.map((ch, idx) => (
                          <button
                            key={ch.id}
                            onClick={() => {
                              handleChapterChange(ch.path);
                              setShowChapterMenu(false);
                            }}
                            className={`w-full text-left px-4 py-3 rounded-lg mb-1 transition-all ${
                              ch.id === chapter
                                ? 'bg-gradient-to-r from-indigo-100 to-purple-100 border-2 border-indigo-500 font-bold'
                                : 'hover:bg-gray-100 border border-transparent'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-indigo-600 font-semibold text-sm">
                                {idx + 1}.
                              </span>
                              <span className="flex-1 text-gray-800 text-sm">
                                {ch.title}
                              </span>
                              {ch.id === chapter && (
                                <span className="text-xs bg-indigo-600 text-white px-2 py-0.5 rounded-full">
                                  當前
                                </span>
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}
            </div>

            {/* 下一章按鈕（縮小版） */}
            <button
              onClick={() => nextChapter && handleChapterChange(nextChapter.path)}
              disabled={!nextChapter}
              className={`flex items-center justify-center p-1.5 sm:px-2 sm:py-1.5 rounded-lg transition-colors flex-shrink-0 ${
                nextChapter 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              title={nextChapter ? `下一章: ${nextChapter.title}` : '沒有下一章'}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          {/* 進度條 */}
          <div className="mt-2 sm:mt-3 bg-gray-200 rounded-full h-1.5 sm:h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 h-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / chapters.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* ========== 主要內容區 ========== */}
      <main
        ref={mainRef}
        className="px-4 py-8"
        style={{
          fontSize: fontSizePx[fontSize],
          fontFamily: fontFamilyOptions.find(f => f.key === fontFamily)?.value || undefined,
          WebkitTouchCallout: 'none',
        }}
        onMouseUp={handleSelectionChange}
        onTouchEnd={handleSelectionChange}
        onClick={handleMainClick}
        onContextMenu={(e) => e.preventDefault()}
      >
        {children}
      </main>

      {/* 畫重點：選取文字後的顏色選單 */}
      {selectionToolbar && (
        <div
          className="fixed z-50 flex items-center gap-1 bg-white rounded-full shadow-lg border border-gray-200 px-2 py-1.5"
          style={{ left: selectionToolbar.x, top: selectionToolbar.y - 48, transform: 'translateX(-50%)' }}
        >
          <button
            onClick={() => setBoldPending(!boldPending)}
            className={`w-6 h-6 rounded-full border flex items-center justify-center font-black text-xs transition-colors ${
              boldPending ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-gray-500 border-gray-300 hover:bg-gray-100'
            }`}
            title="粗體"
            aria-label="切換粗體"
          >
            B
          </button>
          {HIGHLIGHT_COLORS.map(({ style, hex }) => (
            <button
              key={style}
              onClick={() => handlePickHighlightColor(style)}
              className="w-6 h-6 rounded-full border border-gray-300 hover:scale-110 transition-transform"
              style={{ backgroundColor: hex }}
              aria-label={`畫${style}色重點`}
            />
          ))}
          <button
            onClick={() => { window.getSelection()?.removeAllRanges(); setSelectionToolbar(null); }}
            className="ml-1 w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600"
            aria-label="取消"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* 畫重點：剛畫記完成後的復原提示 + 加筆記 */}
      {lastAdded && (
        <div
          className="fixed z-50 flex items-center gap-2 bg-slate-800 text-white rounded-full shadow-lg px-3 py-1.5 text-sm"
          style={{ left: lastAdded.x, top: lastAdded.y - 48, transform: 'translateX(-50%)' }}
        >
          <span>已畫重點</span>
          <button
            onClick={() => { openNoteEditor(lastAdded.id); setLastAdded(null); }}
            className="font-semibold text-amber-300 hover:text-amber-200 flex items-center gap-1"
          >
            <StickyNote className="w-3.5 h-3.5" />筆記
          </button>
          <button onClick={handleUndoLastHighlight} className="font-semibold text-blue-300 hover:text-blue-200">
            復原
          </button>
        </div>
      )}

      {/* 畫重點：點擊已畫記文字後的動作選單 */}
      {highlightActionPopup && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setHighlightActionPopup(null)} />
          <div
            className="fixed z-50 flex items-center gap-1 bg-white rounded-full shadow-lg border border-gray-200 px-2 py-1.5"
            style={{ left: highlightActionPopup.x, top: highlightActionPopup.y - 48, transform: 'translateX(-50%)' }}
          >
            <button
              onClick={() => openNoteEditor(highlightActionPopup.id)}
              className="flex items-center gap-1 px-2 py-1 rounded-full text-amber-700 hover:bg-amber-50 text-xs font-semibold"
            >
              <StickyNote className="w-3.5 h-3.5" />
              {highlights.find(h => h.id === highlightActionPopup.id)?.note ? '查看筆記' : '加筆記'}
            </button>
            <button
              onClick={() => { removeHighlight(highlightActionPopup.id); setHighlightActionPopup(null); }}
              className="flex items-center gap-1 px-2 py-1 rounded-full text-red-600 hover:bg-red-50 text-xs font-semibold"
            >
              <Trash2 className="w-3.5 h-3.5" />刪除
            </button>
          </div>
        </>
      )}

      {/* 畫重點：筆記編輯視窗 */}
      {noteEditor && (
        <div className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl shadow-2xl p-5 w-full max-w-sm">
            <h3 className="text-base font-bold text-slate-800 mb-3 flex items-center gap-1.5">
              <StickyNote className="w-4 h-4 text-amber-600" />筆記
            </h3>
            <textarea
              autoFocus
              value={noteEditor.value}
              onChange={e => setNoteEditor({ ...noteEditor, value: e.target.value })}
              placeholder="寫下你的想法或註解..."
              className="w-full border border-slate-300 rounded-lg px-3 py-2 mb-3 text-sm min-h-[100px] resize-y"
            />
            <div className="flex gap-2">
              <button onClick={saveNote} className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg py-2 text-sm font-semibold">
                儲存
              </button>
              <button onClick={() => setNoteEditor(null)} className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg py-2 text-sm font-semibold">
                取消
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========== 底部工具列 ========== */}
      <div className={`fixed bottom-0 left-0 right-0 bg-gradient-to-r from-slate-800 to-slate-900 border-t border-slate-700 shadow-2xl z-40 transition-transform duration-300 ${showToolbar ? 'translate-y-0' : 'translate-y-full'}`}>
        <button
          onClick={() => setShowToolbar(!showToolbar)}
          className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-1 rounded-t-lg shadow-lg transition-colors z-30"
          title={showToolbar ? '收起工具列' : '展開工具列'}
        >
          {showToolbar ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
        </button>
        
        {/* 單列工具列 */}
        <div className="flex items-center justify-between px-2 sm:px-4 py-3 sm:py-2 max-w-7xl mx-auto">
          
          {/* 左側:關閉 + Word */}
          <div className="flex items-center gap-1">
            <button
              onClick={handleClose}
              className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-2 sm:px-3 py-1.5 rounded-lg transition-colors font-semibold shadow-lg text-xs sm:text-sm"
              title="關閉並返回書房"
            >
              <X className="w-4 h-4" />
              <span className="hidden sm:inline">關閉</span>
            </button>
            
            <button
              onClick={handleExportWord}
              className="flex items-center gap-1 bg-indigo-600 hover:bg-indigo-700 text-white px-2 sm:px-3 py-1.5 rounded-lg transition-colors font-semibold shadow-lg text-xs sm:text-sm"
              title="匯出 Word 文件"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Word</span>
            </button>
          </div>

          {/* 中間:TTS 控制 + 語速 */}
          <div className="flex items-center gap-1">
            <button
              onClick={handleSpeak}
              className={`flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-lg transition-colors font-semibold text-xs sm:text-sm ${
                isSpeaking 
                  ? 'bg-orange-600 hover:bg-orange-700' 
                  : 'bg-blue-600 hover:bg-blue-700'
              } text-white shadow-lg`}
              title={isSpeaking ? (isPaused ? '繼續' : '暫停') : '播放'}
            >
              {isSpeaking ? (
                isPaused ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
              <span className="hidden sm:inline">
                {isSpeaking ? (isPaused ? '繼續' : '暫停') : '朗讀'}
              </span>
            </button>
            
            {isSpeaking && (
              <button
                onClick={handleStopSpeak}
                className="px-2 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-semibold shadow-lg text-xs sm:text-sm"
                title="停止"
              >
                <span className="hidden sm:inline">停止</span>
                <span className="sm:hidden">■</span>
              </button>
            )}
            
            <button
              onClick={() => setShowSpeedSelector(!showSpeedSelector)}
              className={`px-2 sm:px-3 py-1.5 rounded-lg transition-colors font-semibold shadow-lg text-xs sm:text-sm ${
                showSpeedSelector
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700 text-white hover:bg-slate-600'
              }`}
              title="語速調整"
            >
              <span className="font-bold">{speechRate}x</span>
            </button>
          </div>

          {/* 右側:字體大小 + 字型 + 重點列表 */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => readerPhone ? handleLogout() : setShowLoginModal(true)}
              className={`px-2 sm:px-3 py-1.5 rounded-lg transition-colors font-semibold shadow-lg text-xs sm:text-sm flex items-center gap-1 ${
                readerPhone ? 'bg-emerald-600 text-white hover:bg-emerald-700' : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
              title={readerPhone ? `已登入：${getReaderDisplayName(readerPhone)}（點擊登出）` : '登入以跨裝置同步畫重點'}
            >
              <User className="w-3.5 h-3.5" />
              <span>{readerPhone ? getReaderDisplayName(readerPhone) : '登入'}</span>
            </button>

            <button
              onClick={() => setShowHighlightPanel(!showHighlightPanel)}
              className={`px-2 sm:px-3 py-1.5 rounded-lg transition-colors font-semibold shadow-lg text-xs sm:text-sm ${
                showHighlightPanel
                  ? 'bg-slate-600 text-white'
                  : 'bg-slate-700 text-white hover:bg-slate-600'
              }`}
              title="本章重點列表"
            >
              🖍{highlights.length > 0 ? highlights.length : ''}
            </button>

            <button
              onClick={() => setShowFontFamilySelector(!showFontFamilySelector)}
              className={`px-2 sm:px-3 py-1.5 rounded-lg transition-colors font-semibold shadow-lg text-xs sm:text-sm ${
                showFontFamilySelector
                  ? 'bg-slate-600 text-white'
                  : 'bg-slate-700 text-white hover:bg-slate-600'
              }`}
              title="字型切換"
            >
              <span className="font-bold">字型</span>
            </button>

            <button
              onClick={() => setShowFontSelector(!showFontSelector)}
              className={`px-2 sm:px-3 py-1.5 rounded-lg transition-colors font-semibold shadow-lg text-xs sm:text-sm ${
                showFontSelector
                  ? 'bg-slate-600 text-white'
                  : 'bg-slate-700 text-white hover:bg-slate-600'
              }`}
              title="字體大小調整"
            >
              <span className="font-bold">{fontSizeLabels[fontSize]}</span>
            </button>
          </div>
        </div>

        {showHighlightPanel && (
          <div className="bg-slate-700 border-t border-slate-600 px-2 sm:px-4 py-2 max-h-56 overflow-y-auto">
            <div className="max-w-7xl mx-auto">
              {highlights.length === 0 ? (
                <p className="text-slate-300 text-xs">本章尚無畫重點</p>
              ) : (
                <ul className="space-y-1">
                  {highlights.map(h => (
                    <li key={h.id} className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          if (mainRef.current) scrollToHighlight(mainRef.current, h);
                          setShowHighlightPanel(false);
                        }}
                        className="flex-1 flex items-center gap-2 text-left text-white text-xs sm:text-sm hover:bg-slate-600 rounded px-2 py-1 transition-colors"
                      >
                        <span
                          className="w-3 h-3 rounded-full flex-shrink-0"
                          style={{ backgroundColor: HIGHLIGHT_COLORS.find(c => c.style === h.style)?.hex }}
                        />
                        <span className={`truncate ${h.bold ? 'font-bold' : ''}`}>{h.text_content}</span>
                      </button>
                      <button
                        onClick={() => openNoteEditor(h.id)}
                        className={`flex-shrink-0 ${h.note ? 'text-amber-400 hover:text-amber-300' : 'text-slate-400 hover:text-amber-300'}`}
                        aria-label={h.note ? '查看筆記' : '加筆記'}
                      >
                        <StickyNote className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => removeHighlight(h.id)}
                        className="text-slate-400 hover:text-red-400 flex-shrink-0"
                        aria-label="刪除此重點"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              <button
                onClick={() => { setShowHighlightPanel(false); navigate(`/${bookId}/highlights`); }}
                className="mt-2 text-blue-300 hover:text-blue-200 text-xs font-semibold"
              >
                查看全書重點總覽 →
              </button>
            </div>
          </div>
        )}

        {showFontFamilySelector && (
          <div className="bg-slate-700 border-t border-slate-600 px-2 sm:px-4 py-1.5">
            <div className="flex items-center gap-1.5 max-w-7xl mx-auto">
              <span className="text-white text-xs font-semibold mr-1">字型:</span>
              {fontFamilyOptions.map(opt => (
                <button
                  key={opt.key}
                  onClick={() => {
                    setFontFamily(opt.key);
                    setShowFontFamilySelector(false);
                  }}
                  className={`px-3 py-1 text-sm rounded transition-all font-semibold ${
                    fontFamily === opt.key
                      ? 'bg-slate-600 text-white ring-2 ring-slate-400'
                      : 'bg-slate-600 text-white hover:bg-slate-500'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {showSpeedSelector && (
          <div className="bg-slate-700 border-t border-slate-600 px-2 sm:px-4 py-1.5">
            <div className="flex items-center gap-1.5 max-w-7xl mx-auto">
              <span className="text-white text-xs font-semibold mr-1">語速:</span>
              {[0.5, 0.75, 1.0, 1.25, 1.5].map(rate => (
                <button
                  key={rate}
                  onClick={() => {
                    setSpeechRate(rate);
                    setShowSpeedSelector(false);
                  }}
                  className={`px-3 py-1 text-sm rounded transition-all font-semibold ${
                    speechRate === rate 
                      ? 'bg-blue-600 text-white ring-2 ring-blue-400' 
                      : 'bg-slate-600 text-white hover:bg-slate-500'
                  }`}
                >
                  {rate}x
                </button>
              ))}
            </div>
          </div>
        )}

        {showFontSelector && (
          <div className="bg-slate-700 border-t border-slate-600 px-2 sm:px-4 py-1.5">
            <div className="flex items-center gap-1.5 max-w-7xl mx-auto">
              <span className="text-white text-xs font-semibold mr-1">字體:</span>
              {(['sm', 'base', 'lg', 'xl', '2xl'] as FontSize[]).map(size => (
                <button
                  key={size}
                  onClick={() => {
                    setFontSize(size);
                    setShowFontSelector(false);
                  }}
                  className={`px-3 py-1 text-sm rounded transition-all font-semibold ${
                    fontSize === size 
                      ? 'bg-slate-600 text-white ring-2 ring-slate-400' 
                      : 'bg-slate-600 text-white hover:bg-slate-500'
                  }`}
                >
                  {fontSizeLabels[size]}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="h-40 sm:h-32"></div>

      {/* 讀者登入：手機號碼+固定密碼，用來跨裝置同步畫重點 */}
      {showLoginModal && (
        <div className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-1">登入電子書房</h3>
            <p className="text-xs text-slate-500 mb-4">登入後可跨裝置同步畫重點</p>
            <input
              type="text"
              placeholder="手機號碼"
              value={loginPhoneInput}
              onChange={e => setLoginPhoneInput(e.target.value)}
              className="w-full border border-slate-300 rounded-lg px-3 py-2 mb-2 text-sm"
            />
            <input
              type="password"
              placeholder="密碼"
              value={loginPwdInput}
              onChange={e => setLoginPwdInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') handleLogin(); }}
              className="w-full border border-slate-300 rounded-lg px-3 py-2 mb-2 text-sm"
            />
            {loginError && <p className="text-xs text-red-600 mb-2">{loginError}</p>}
            <div className="flex gap-2 mt-2">
              <button
                onClick={handleLogin}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg py-2 text-sm font-semibold"
              >
                登入
              </button>
              <button
                onClick={() => { setShowLoginModal(false); setLoginError(''); }}
                className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg py-2 text-sm font-semibold"
              >
                取消
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookLayout;
