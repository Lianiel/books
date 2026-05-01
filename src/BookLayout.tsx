import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { X, Volume2, VolumeX, ZoomIn, ZoomOut, Highlighter } from 'lucide-react';
import { useHighlight, HighlightStyle, applyStyleToSpan } from '../useHighlight';

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
  
  // TTS 狀態
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  
  // 螢光筆
  const { isLoggedIn, applyHighlights, addHighlight, removeHighlight } = useHighlight(bookId, chapter);
  const [highlightMode, setHighlightMode] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState<HighlightStyle>('yellow');
  
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
    utterance.rate = 0.5; // 語速 0.5x（根據記憶中 progressively halved twice）
    
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

  // 螢光筆模式
  const toggleHighlightMode = () => {
    if (!isLoggedIn) {
      alert('請先登入才能使用螢光筆功能');
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
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-slate-800 to-slate-900 border-t border-slate-700 shadow-2xl z-40">
        <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
          
          {/* 左側：關閉按鈕 */}
          <button
            onClick={handleClose}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors font-semibold shadow-lg"
            title="關閉並返回書房"
          >
            <X className="w-5 h-5" />
            <span className="hidden sm:inline">關閉</span>
          </button>

          {/* 中間：TTS 控制 */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleSpeak}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors font-semibold ${
                isSpeaking 
                  ? 'bg-orange-600 hover:bg-orange-700' 
                  : 'bg-blue-600 hover:bg-blue-700'
              } text-white shadow-lg`}
              title={isSpeaking ? (isPaused ? '繼續' : '暫停') : '播放'}
            >
              {isSpeaking ? (
                isPaused ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
              <span className="hidden sm:inline">
                {isSpeaking ? (isPaused ? '繼續' : '暫停') : '朗讀'}
              </span>
            </button>
            
            {isSpeaking && (
              <button
                onClick={handleStopSpeak}
                className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors font-semibold shadow-lg"
                title="停止"
              >
                <span className="hidden sm:inline">停止</span>
                <span className="sm:hidden">■</span>
              </button>
            )}
          </div>

          {/* 右側：字體縮放 + 螢光筆 */}
          <div className="flex items-center gap-2">
            {/* 字體縮放 */}
            <div className="flex items-center gap-1 bg-slate-700 rounded-lg p-1">
              <button
                onClick={() => handleFontSizeChange('down')}
                disabled={fontSize === 'sm'}
                className="p-2 rounded hover:bg-slate-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                title="縮小字體"
              >
                <ZoomOut className="w-4 h-4 text-white" />
              </button>
              <span className="text-white text-xs font-semibold px-2 hidden sm:inline">
                {fontSize.toUpperCase()}
              </span>
              <button
                onClick={() => handleFontSizeChange('up')}
                disabled={fontSize === '2xl'}
                className="p-2 rounded hover:bg-slate-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                title="放大字體"
              >
                <ZoomIn className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* 螢光筆 */}
            <button
              onClick={toggleHighlightMode}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors font-semibold shadow-lg ${
                highlightMode 
                  ? 'bg-yellow-500 hover:bg-yellow-600 text-slate-900' 
                  : 'bg-slate-700 hover:bg-slate-600 text-white'
              }`}
              title={isLoggedIn ? '螢光筆' : '請先登入使用螢光筆'}
            >
              <Highlighter className="w-5 h-5" />
              <span className="hidden sm:inline">螢光筆</span>
            </button>
          </div>
        </div>

        {/* 螢光筆樣式選擇器 */}
        {highlightMode && (
          <div className="bg-slate-700 border-t border-slate-600 px-4 py-2">
            <div className="flex items-center gap-2 max-w-7xl mx-auto">
              <span className="text-white text-sm font-semibold mr-2">選擇樣式：</span>
              {(['yellow', 'red', 'blue', 'bold', 'underline'] as HighlightStyle[]).map(style => {
                const demoSpan = document.createElement('span');
                demoSpan.textContent = style === 'yellow' ? '黃色' : 
                                       style === 'red' ? '紅色' : 
                                       style === 'blue' ? '藍色' : 
                                       style === 'bold' ? '粗體' : '底線';
                applyStyleToSpan(demoSpan, style);
                
                return (
                  <button
                    key={style}
                    onClick={() => setSelectedStyle(style)}
                    className={`px-3 py-1 rounded transition-all ${
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
      <div className="h-20"></div>
    </div>
  );
};

export default BookLayout;
