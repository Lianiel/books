import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { X, Volume2, VolumeX, Highlighter, LogOut, Download, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, BookOpen, List } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useHighlight, HighlightStyle, applyStyleToSpan } from '../useHighlight';
import { asBlob } from 'html-docx-js-typescript';

// 從 App.tsx 導入章節類型
import type { ChapterInfo } from '../App';

interface BookLayoutProps {
  bookId: string;
  chapter: string;
  chapters: ChapterInfo[];  // 章節配置從 props 傳入
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

const fontSizeLabels: Record<FontSize, string> = {
  'sm': '14',    // 14px
  'base': '16',  // 16px
  'lg': '18',    // 18px
  'xl': '20',    // 20px
  '2xl': '24'    // 24px
};


const BookLayout: React.FC<BookLayoutProps> = ({ bookId, chapter, chapters, children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // 字體縮放
  const [fontSize, setFontSize] = useState<FontSize>('base');
  
  // 工具列顯示/隱藏
  const [showToolbar, setShowToolbar] = useState(true);
  
  // 章節選擇器顯示/隱藏
  const [showChapterMenu, setShowChapterMenu] = useState(false);
  
  // TTS 狀態
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [speechRate, setSpeechRate] = useState(0.5);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  
  // 螢光筆
  const { isLoggedIn, applyHighlights, addHighlight, removeHighlight } = useHighlight(bookId, chapter);
  const [highlightMode, setHighlightMode] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState<HighlightStyle>('yellow');
  
  // 語速選擇器
  const [showSpeedSelector, setShowSpeedSelector] = useState(false);
  
  // 字體選擇器
  const [showFontSelector, setShowFontSelector] = useState(false);
  
  // 獲取章節資訊
  const currentIndex = chapters.findIndex(ch => ch.id === chapter);
  const currentChapter = chapters[currentIndex];
  const previousChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex >= 0 && currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;
  
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
      
      clone.querySelectorAll('button').forEach(btn => btn.remove());
      clone.querySelectorAll('[class*="toolbar"]').forEach(el => el.remove());
      
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

  // 關閉按鈕
  const handleClose = () => {
    if (isSpeaking) {
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
    utterance.rate = speechRate;
    
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

  // 螢光筆模式
  const toggleHighlightMode = async () => {
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
      
      setTimeout(() => applyHighlights(), 100);
    };

    document.addEventListener('mouseup', handleSelection);
    return () => document.removeEventListener('mouseup', handleSelection);
  }, [highlightMode, selectedStyle, addHighlight, applyHighlights]);

  // 章節切換
  const handleChapterChange = (chapterPath: string) => {
    if (isSpeaking) {
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
                className="w-full flex items-center justify-between gap-1 sm:gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 sm:px-6 py-2 sm:py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all font-bold text-xs sm:text-sm"
                title="點擊選擇章節"
              >
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="truncate flex-1 text-center">{currentChapter?.title || chapter}</span>
                <span className="text-xs opacity-90 flex-shrink-0">{currentIndex + 1}/{chapters.length}</span>
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
      <main className={`${fontSizeClasses[fontSize]} px-4 py-8`}>
        {children}
      </main>

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
        <div className="flex items-center justify-between px-2 sm:px-4 py-2 max-w-7xl mx-auto">
          
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

          {/* 右側:字體大小 + 螢光筆 */}
          <div className="flex items-center gap-1">
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

            <button
              onClick={toggleHighlightMode}
              className={`flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-lg transition-colors font-semibold shadow-lg text-xs sm:text-sm ${
                highlightMode 
                  ? 'bg-yellow-500 hover:bg-yellow-600 text-slate-900' 
                  : 'bg-slate-700 hover:bg-slate-600 text-white'
              }`}
              title="螢光筆"
            >
              <Highlighter className="w-4 h-4" />
              <span className="hidden sm:inline">筆</span>
            </button>
            
            {isLoggedIn && (
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-white transition-colors font-semibold shadow-lg text-xs sm:text-sm"
                title="登出"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">登出</span>
              </button>
            )}
          </div>
        </div>

        {highlightMode && (
          <div className="bg-slate-700 border-t border-slate-600 px-2 sm:px-4 py-1.5">
            <div className="flex items-center gap-1.5 max-w-7xl mx-auto">
              <span className="text-white text-xs font-semibold mr-1">樣式:</span>
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
    </div>
  );
};

export default BookLayout;
