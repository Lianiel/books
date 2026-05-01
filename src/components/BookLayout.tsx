import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { X, Volume2, VolumeX, ZoomIn, ZoomOut, Highlighter, LogOut, Download, Maximize2, ChevronDown, ChevronUp } from 'lucide-react';
import { useHighlight, HighlightStyle, applyStyleToSpan } from '../useHighlight';
import { asBlob } from 'html-docx-js-typescript';

interface BookLayoutProps {
  bookId: string;
  chapter: string;
  children: ReactNode;
}

type FontSize = 'sm' | 'base' | 'lg' | 'xl' | '2xl';

const fontSizeClasses: Record<FontSize, string> = {
  'sm': 'text-sm',
  'base': 'text-base',
  'lg': 'text-lg',
  'xl': 'text-xl',
  '2xl': 'text-2xl'
};

const BookLayout: React.FC<BookLayoutProps> = ({ bookId, chapter, children }) => {
  // 字體縮放
  const [fontSize, setFontSize] = useState<FontSize>('base');
  
  // 工具列顯示/隱藏
  const [showToolbar, setShowToolbar] = useState(true);
  
  // TTS 狀態
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [speechRate, setSpeechRate] = useState(0.5); // 預設 0.5x
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  
  // 螢光筆
  const { isLoggedIn, applyHighlights, addHighlight, removeHighlight } = useHighlight(bookId, chapter);
  const [highlightMode, setHighlightMode] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState<HighlightStyle>('yellow');
  
  // 登出功能
  const handleLogout = async () => {
    const sb = (window as any).supabase?.createClient(
      'https://yhchjanqmopgbwgjspmf.supabase.co',
      'sb_publishable_51sbrd_Tv8Xuab92XiqRVQ_7iePDoJx'
    );
    if (sb) {
      await sb.auth.signOut();
      window.location.reload();
    }
  };
  
  // 全展開功能
  const handleExpandAll = () => {
    // 觸發所有可折疊元素展開
    const buttons = document.querySelectorAll('button[aria-expanded="false"]');
    buttons.forEach(btn => {
      (btn as HTMLButtonElement).click();
    });
    
    // 也可以通過 class 或其他方式找到折疊區塊
    const sections = document.querySelectorAll('[class*="collapse"]');
    sections.forEach(section => {
      (section as HTMLElement).style.display = 'block';
    });
    
    alert('已展開所有內容');
  };
  
  // 匯出 Word
  const handleExportWord = async () => {
    try {
      const mainContent = document.querySelector('main');
      if (!mainContent) {
        alert('找不到內容區域');
        return;
      }
      
      // 克隆內容以避免修改原始 DOM
      const clone = mainContent.cloneNode(true) as HTMLElement;
      
      // 移除不需要的元素（如按鈕、工具列）
      clone.querySelectorAll('button').forEach(btn => btn.remove());
      clone.querySelectorAll('[class*="toolbar"]').forEach(el => el.remove());
      
      // 準備 HTML 內容
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
      
      // 轉換成 Word 格式
      const blob = await asBlob(htmlContent);
      
      // 下載檔案
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${bookId}_${chapter}.docx`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      alert('Word 檔案已下載！');
    } catch (error) {
      console.error('匯出失敗：', error);
      alert('匯出失敗，請稍後再試');
    }
  };
  
  // 初始化螢光筆
  useEffect(() => {
    applyHighlights();
  }, [applyHighlights]);
  
  useEffect(() => {
    const handler = (e: Event) => {
      const id = (e as CustomEvent).detail;
      removeHighlight(id);
    };
    document.addEventListener('removeHighlight', handler);
    return () => document.removeEventListener('removeHighlight', handler);
  }, [removeHighlight]);

  // 關閉按鈕 - 發送 postMessage 給埔和小站
  const handleClose = () => {
    // 停止 TTS
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      setIsPaused(false);
    }
    
    // 發送關閉訊息給父視窗（埔和小站）
    window.parent.postMessage({ type: 'closeBookEmbed' }, '*');
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

    const mainContent = document.querySelector('main');
    if (!mainContent) return;

    const textContent = mainContent.innerText;
    const utterance = new SpeechSynthesisUtterance(textContent);
    utterance.lang = 'zh-TW';
    utterance.rate = speechRate; // 使用狀態中的語速
    
    utterance.onstart = () => {
      setIsSpeaking(true);
      setIsPaused(false);
    };
    
    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
      utteranceRef.current = null;
    };
    
    utterance.onerror = () => {
      setIsSpeaking(false);
      setIsPaused(false);
      utteranceRef.current = null;
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const handleStopSpeak = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
    utteranceRef.current = null;
  };

  // 字體縮放
  const handleFontSizeChange = (direction: 'up' | 'down') => {
    const sizes: FontSize[] = ['sm', 'base', 'lg', 'xl', '2xl'];
    const currentIndex = sizes.indexOf(fontSize);
    
    if (direction === 'up' && currentIndex < sizes.length - 1) {
      setFontSize(sizes[currentIndex + 1]);
    } else if (direction === 'down' && currentIndex > 0) {
      setFontSize(sizes[currentIndex - 1]);
    }
  };

  // 螢光筆模式（包含登入流程）
  const toggleHighlightMode = async () => {
    if (!isLoggedIn) {
      // 需要登入才能使用螢光筆
      const phone = prompt('請輸入手機號碼：');
      if (!phone) return;
      
      const password = prompt('請輸入密碼：');
      if (!password) return;
      
      const email = `${phone}@puhe.church`;
      
      const sb = (window as any).supabase?.createClient(
        'https://yhchjanqmopgbwgjspmf.supabase.co',
        'sb_publishable_51sbrd_Tv8Xuab92XiqRVQ_7iePDoJx'
      );
      
      if (!sb) {
        alert('登入功能初始化失敗');
        return;
      }
      
      const { error } = await sb.auth.signInWithPassword({ email, password });
      if (error) {
        alert('登入失敗：' + error.message);
        return;
      }
      
      // 登入成功，重新載入頁面以更新狀態
      alert('登入成功！螢光筆功能已啟用');
      window.location.reload();
      return;
    }
    setHighlightMode(!highlightMode);
  };

  useEffect(() => {
    if (!highlightMode) return;

    const handleSelection = () => {
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed) return;
      
      const text = selection.toString().trim();
      if (!text) return;

      addHighlight(text, selectedStyle);
      selection.removeAllRanges();
      
      // 延遲重新套用螢光筆，確保 DOM 更新
      setTimeout(() => applyHighlights(), 100);
    };

    document.addEventListener('mouseup', handleSelection);
    return () => document.removeEventListener('mouseup', handleSelection);
  }, [highlightMode, selectedStyle, addHighlight, applyHighlights]);

  return (
    <div className="relative min-h-screen">
      {/* 主要內容 - 套用字體大小 */}
      <main className={fontSizeClasses[fontSize]}>
        {children}
      </main>

      {/* 底部工具列 */}
      <div className={`fixed bottom-0 left-0 right-0 bg-gradient-to-r from-slate-800 to-slate-900 border-t border-slate-700 shadow-2xl z-40 transition-transform duration-300 ${showToolbar ? 'translate-y-0' : 'translate-y-full'}`}>
        {/* 收起/展開按鈕（固定在工具列上方）*/}
        <button
          onClick={() => setShowToolbar(!showToolbar)}
          className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-1 rounded-t-lg shadow-lg transition-colors"
          title={showToolbar ? '收起工具列' : '展開工具列'}
        >
          {showToolbar ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
        </button>
        
        <div className="flex items-center justify-between px-2 sm:px-4 py-2 max-w-7xl mx-auto">
          
          {/* 左側：關閉 + 全展開 + 匯出 */}
          <div className="flex items-center gap-1">
            <button
              onClick={handleClose}
              className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-2 sm:px-3 py-1.5 rounded-lg transition-colors font-semibold shadow-lg text-sm"
              title="關閉並返回書房"
            >
              <X className="w-4 h-4" />
              <span className="hidden sm:inline text-sm">關閉</span>
            </button>
            
            <button
              onClick={handleExpandAll}
              className="flex items-center gap-1 bg-purple-600 hover:bg-purple-700 text-white px-2 sm:px-3 py-1.5 rounded-lg transition-colors font-semibold shadow-lg text-sm"
              title="展開所有內容"
            >
              <Maximize2 className="w-4 h-4" />
              <span className="hidden sm:inline text-sm">全展開</span>
            </button>
            
            <button
              onClick={handleExportWord}
              className="flex items-center gap-1 bg-indigo-600 hover:bg-indigo-700 text-white px-2 sm:px-3 py-1.5 rounded-lg transition-colors font-semibold shadow-lg text-sm"
              title="匯出 Word 文件"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline text-sm">Word</span>
            </button>
          </div>

          {/* 中間：TTS 控制 + 語速 */}
          <div className="flex items-center gap-1">
            {/* TTS 按鈕 */}
            <button
              onClick={handleSpeak}
              className={`flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-lg transition-colors font-semibold text-sm ${
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
              <span className="hidden sm:inline text-sm">
                {isSpeaking ? (isPaused ? '繼續' : '暫停') : '朗讀'}
              </span>
            </button>
            
            {/* 停止按鈕 */}
            {isSpeaking && (
              <button
                onClick={handleStopSpeak}
                className="px-2 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-semibold shadow-lg text-sm"
                title="停止"
              >
                <span className="hidden sm:inline text-sm">停止</span>
                <span className="sm:hidden">■</span>
              </button>
            )}
            
            {/* 語速調整 */}
            <div className="flex items-center bg-slate-700 rounded-lg overflow-hidden">
              {[0.5, 0.75, 1.0].map(rate => (
                <button
                  key={rate}
                  onClick={() => setSpeechRate(rate)}
                  className={`px-2 py-1.5 text-xs font-semibold transition-colors ${
                    speechRate === rate
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-slate-600'
                  }`}
                  title={`語速 ${rate}x`}
                >
                  {rate}x
                </button>
              ))}
            </div>
          </div>

          {/* 右側：字體縮放 + 螢光筆 */}
          <div className="flex items-center gap-1">
            {/* 字體縮放 */}
            <div className="flex items-center gap-0.5 bg-slate-700 rounded-lg p-0.5">
              <button
                onClick={() => handleFontSizeChange('down')}
                disabled={fontSize === 'sm'}
                className="p-1.5 rounded hover:bg-slate-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                title="縮小字體"
              >
                <ZoomOut className="w-3.5 h-3.5 text-white" />
              </button>
              <span className="text-white text-xs font-semibold px-1.5 hidden sm:inline">
                {fontSize.toUpperCase()}
              </span>
              <button
                onClick={() => handleFontSizeChange('up')}
                disabled={fontSize === '2xl'}
                className="p-1.5 rounded hover:bg-slate-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                title="放大字體"
              >
                <ZoomIn className="w-3.5 h-3.5 text-white" />
              </button>
            </div>

            {/* 螢光筆（包含自動登入）*/}
            <button
              onClick={toggleHighlightMode}
              className={`flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-lg transition-colors font-semibold shadow-lg text-sm ${
                highlightMode 
                  ? 'bg-yellow-500 hover:bg-yellow-600 text-slate-900' 
                  : 'bg-slate-700 hover:bg-slate-600 text-white'
              }`}
              title={isLoggedIn ? '螢光筆' : '點擊以登入並使用螢光筆'}
            >
              <Highlighter className="w-4 h-4" />
              <span className="hidden sm:inline text-sm">筆</span>
            </button>
            
            {/* 登出（僅在已登入時顯示）*/}
            {isLoggedIn && (
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-white transition-colors font-semibold shadow-lg text-sm"
                title="登出"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline text-sm">登出</span>
              </button>
            )}
          </div>
        </div>

        {/* 螢光筆樣式選擇器 */}
        {highlightMode && (
          <div className="bg-slate-700 border-t border-slate-600 px-2 sm:px-4 py-1.5">
            <div className="flex items-center gap-1.5 max-w-7xl mx-auto">
              <span className="text-white text-xs font-semibold mr-1">樣式：</span>
              {(['yellow', 'red', 'blue', 'bold', 'underline'] as HighlightStyle[]).map(style => {
                const demoSpan = document.createElement('span');
                demoSpan.textContent = style === 'yellow' ? '黃' : 
                                       style === 'red' ? '紅' : 
                                       style === 'blue' ? '藍' : 
                                       style === 'bold' ? '粗' : '底';
                applyStyleToSpan(demoSpan, style);
                
                return (
                  <button
                    key={style}
                    onClick={() => setSelectedStyle(style)}
                    className={`px-2 py-0.5 text-sm rounded transition-all ${
                      selectedStyle === style 
                        ? 'bg-white text-slate-900 ring-2 ring-yellow-400' 
                        : 'bg-slate-600 text-white hover:bg-slate-500'
                    }`}
                  >
                    <span dangerouslySetInnerHTML={{ __html: demoSpan.outerHTML }} />
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* 底部留白（避免內容被工具列遮住）*/}
      <div className="h-32 sm:h-24"></div>
    </div>
  );
};

export default BookLayout;
