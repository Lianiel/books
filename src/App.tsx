import { useState, useEffect } from 'react';
import { BookOpen, ChevronLeft, ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Book 1 imports
import SectionHome from './components/book1/SectionHome';
import SectionDefinition from './components/book1/SectionDefinition';
import SectionDiagnosis from './components/book1/SectionDiagnosis';
import SectionDevelopment from './components/book1/SectionDevelopment';
import SectionLaws from './components/book1/SectionLaws';
import SectionMyths from './components/book1/SectionMyths';
import SectionFamily from './components/book1/SectionFamily';
import SectionWork from './components/book1/SectionWork';
import SectionSelf from './components/book1/SectionSelf';
import SectionKids from './components/book1/SectionKids';
import SectionBoundaries from './components/book1/SectionBoundaries';
import SectionResistance from './components/book1/SectionResistance';
import SectionSuccess from './components/book1/SectionSuccess';
import SectionDigital from './components/book1/SectionDigital';
import SectionFood from './components/book1/SectionFood';
import SectionSexuality from './components/book1/SectionSexuality';
import SectionClosing from './components/book1/SectionClosing';

// Book 2 imports
import Chapter1 from './components/book2/Chapter1';
import Chapter2 from './components/book2/Chapter2';
import Chapter3 from './components/book2/Chapter3';
import Chapter4 from './components/book2/Chapter4';
import Chapter5 from './components/book2/Chapter5';
import Chapter6 from './components/book2/Chapter6';
import Chapter7 from './components/book2/Chapter7';
import Chapter8 from './components/book2/Chapter8';

// Book 3 imports
import Paul1 from './components/book3/Chapter1';
import Paul2 from './components/book3/Chapter2';
import Paul3 from './components/book3/Chapter3';
import Paul4 from './components/book3/Chapter4';
import Paul5 from './components/book3/Chapter5';
import Paul6 from './components/book3/Chapter6';
import Paul7 from './components/book3/Chapter7';
import Paul8 from './components/book3/Chapter8';

// Book 4 imports
import Inf1 from './components/book4/Chapter1';
import Inf2 from './components/book4/Chapter2';
import Inf3 from './components/book4/Chapter3';
import Inf4 from './components/book4/Chapter4';
import Inf5 from './components/book4/Chapter5';
import Inf6 from './components/book4/Chapter6';
import Inf7 from './components/book4/Chapter7';
import Inf8 from './components/book4/Chapter8';
import Inf9 from './components/book4/Chapter9';
import Inf10 from './components/book4/Chapter10';
import Inf11 from './components/book4/Chapter11';
import Inf12 from './components/book4/Chapter12';
import Inf13 from './components/book4/Chapter13';
import Inf14 from './components/book4/Chapter14';
import Inf15 from './components/book4/Chapter15';

// Book 5 imports
import Christ1 from './components/book5/Week1';
import Christ2 from './components/book5/Week2';
import Christ3 from './components/book5/Week3';
import Christ4 from './components/book5/Week4';
import Christ5 from './components/book5/Week5';
import Christ6 from './components/book5/Week6';

// Book 6 imports
import Kings1 from './components/book6/Chapter1';
import Kings2 from './components/book6/Chapter2';
import Kings3 from './components/book6/Chapter3';
import Kings4 from './components/book6/Chapter4';
import Kings5 from './components/book6/Chapter5';
import Kings6 from './components/book6/Chapter6';
import Kings7 from './components/book6/Chapter7';
import Kings8 from './components/book6/Chapter8';

// Book 7 imports
import Ezra1 from './components/book7/Chapter1';
import Ezra2 from './components/book7/Chapter2';
import Ezra3 from './components/book7/Chapter3';
import Ezra4 from './components/book7/Chapter4';
import Ezra5 from './components/book7/Chapter5';
import Ezra6 from './components/book7/Chapter6';
import Ezra7 from './components/book7/Chapter7';
import Ezra8 from './components/book7/Chapter8';
import Ezra9 from './components/book7/Chapter9';
import Ezra10 from './components/book7/Chapter10';

// Book 8 imports
import Spir1 from './components/book8/Chapter1';
import Spir2 from './components/book8/Chapter2';
import Spir3 from './components/book8/Chapter3';
import Spir4 from './components/book8/Chapter4';
import Spir5 from './components/book8/Chapter5';
import Spir6 from './components/book8/Chapter6';
import Spir7 from './components/book8/Chapter7';
import Spir8 from './components/book8/Chapter8';
import Spir9 from './components/book8/Chapter9';
import Spir10 from './components/book8/Chapter10';
import Spir11 from './components/book8/Chapter11';
import Spir12 from './components/book8/Chapter12';

// Book 9 imports
import Prayer_Intro from './components/book9/Intro';
import Prayer_Ch1 from './components/book9/Chapter1';
import Prayer_Ch2 from './components/book9/Chapter2';
import Prayer_Ch3 from './components/book9/Chapter3';
import Prayer_Ch4 from './components/book9/Chapter4';
import Prayer_Ch5 from './components/book9/Chapter5';
import Prayer_Ch6 from './components/book9/Chapter6';


// ==================== BOOKS DEFINITION ====================
const BOOKS = [
  {
    id: 'book1',
    title: '立界線得自由',
    subtitle: '克勞德、湯森德 著',
    emoji: '📘',
    accentHex: '#0d9488',
    chapters: [
      { id: 'ch1', label: '第1章', title: '界線混亂的一天' },
      { id: 'ch2', label: '第2章', title: '界線看來啥模樣？' },
      { id: 'ch3', label: '第3章', title: '為何我們建不起界線？' },
      { id: 'ch4', label: '第4章', title: '界線從哪裡來？' },
      { id: 'ch5', label: '第5章', title: '界線的十大法則' },
      { id: 'ch6', label: '第6章', title: '界線的迷思' },
      { id: 'ch7', label: '第7章', title: '家庭中的界線' },
      { id: 'ch8', label: '第8章', title: '工作中的界線' },
      { id: 'ch9', label: '第9章', title: '與自己的界線' },
      { id: 'ch10', label: '第10章', title: '與孩童的界線' },
      { id: 'ch11', label: '第11章', title: '界線的實際應用' },
      { id: 'ch12', label: '第12章', title: '阻力與成功' },
      { id: 'ch13', label: '第13章', title: '數位時代的界線' },
      { id: 'ch14', label: '第14章', title: '飲食與身體的界線' },
      { id: 'ch15', label: '第15章', title: '性與界線' },
      { id: 'ch16', label: '第16章', title: '總結' },
      { id: 'ch17', label: '第17章', title: '結語' },
    ],
  },
  {
    id: 'book2',
    title: '情感健康的門徒',
    subtitle: '史葛荷 著',
    emoji: '📗',
    accentHex: '#e11d48',
    chapters: [
      { id: 'ch1', label: '第1章', title: '隱藏在冰山下的問題' },
      { id: 'ch2', label: '第2章', title: '察覺你的感受，做真實的自己' },
      { id: 'ch3', label: '第3章', title: '回到過去以擁抱上帝更大的未來' },
      { id: 'ch4', label: '第4章', title: '在失落與破碎中與主相遇' },
      { id: 'ch5', label: '第5章', title: '使你的愛有所節制' },
      { id: 'ch6', label: '第6章', title: '正確地發展悲傷和失落' },
      { id: 'ch7', label: '第7章', title: '擴大你的生命去愛那些與你不同的人' },
      { id: 'ch8', label: '第8章', title: '帶領其他人進入情感健康的門徒生命' },
    ],
  },
  {
    id: 'book3',
    title: '向保羅學宣教',
    subtitle: '王乃純 著',
    emoji: '📙',
    accentHex: '#4338ca',
    chapters: [
      { id: 'ch1', label: '第1章', title: '保羅的呼召與預備' },
      { id: 'ch2', label: '第2章', title: '保羅的宣教策略' },
      { id: 'ch3', label: '第3章', title: '保羅的宣教團隊' },
      { id: 'ch4', label: '第4章', title: '保羅的宣教神學' },
      { id: 'ch5', label: '第5章', title: '保羅的宣教苦難' },
      { id: 'ch6', label: '第6章', title: '保羅的宣教方法' },
      { id: 'ch7', label: '第7章', title: '保羅的宣教果效' },
      { id: 'ch8', label: '第8章', title: '保羅的宣教遺產' },
    ],
  },
  {
    id: 'book4',
    title: '成為有感染力的基督徒',
    subtitle: '海波斯、米道藍 著',
    emoji: '📕',
    accentHex: '#dc2626',
    chapters: [
      { id: 'ch1', label: '第1章', title: '為何要成為有感染力的基督徒（一）' },
      { id: 'ch2', label: '第2章', title: '為何要成為有感染力的基督徒（二）' },
      { id: 'ch3', label: '第3章', title: '為何要成為有感染力的基督徒（三）' },
      { id: 'ch4', label: '第4章', title: '活出基督徒特質（一）' },
      { id: 'ch5', label: '第5章', title: '活出基督徒特質（二）' },
      { id: 'ch6', label: '第6章', title: '活出基督徒特質（三）' },
      { id: 'ch7', label: '第7章', title: '靠近人（一）' },
      { id: 'ch8', label: '第8章', title: '靠近人（二）' },
      { id: 'ch9', label: '第9章', title: '靠近人（三）' },
      { id: 'ch10', label: '第10章', title: '清楚傳達（一）' },
      { id: 'ch11', label: '第11章', title: '清楚傳達（二）' },
      { id: 'ch12', label: '第12章', title: '清楚傳達（三）' },
      { id: 'ch13', label: '第13章', title: '最大影響（一）' },
      { id: 'ch14', label: '第14章', title: '最大影響（二）' },
      { id: 'ch15', label: '第15章', title: '最大影響（三）' },
    ],
  },
  {
    id: 'book5',
    title: '如何活出基督的樣式',
    subtitle: '陶恕 著',
    emoji: '📔',
    accentHex: '#ea580c',
    chapters: [
      { id: 'week1', label: '第1週', title: '謙卑' },
      { id: 'week2', label: '第2週', title: '柔和' },
      { id: 'week3', label: '第3週', title: '合一' },
      { id: 'week4', label: '第4週', title: '愛心' },
      { id: 'week5', label: '第5週', title: '聖潔' },
      { id: 'week6', label: '第6週', title: '信心' },
    ],
  },
  {
    id: 'book6',
    title: '列王紀上——上帝的啟示在人間',
    subtitle: '聖經註釋',
    emoji: '📖',
    accentHex: '#059669',
    chapters: [
      { id: 'ch1', label: '第1章', title: '大衛的晚年與所羅門登基' },
      { id: 'ch2', label: '第2章', title: '所羅門鞏固王位' },
      { id: 'ch3', label: '第3章', title: '所羅門求智慧' },
      { id: 'ch4', label: '第4章', title: '所羅門的智慧與繁榮' },
      { id: 'ch5', label: '第5章', title: '建造聖殿的預備' },
      { id: 'ch6', label: '第6章', title: '建造聖殿' },
      { id: 'ch7', label: '第7章', title: '所羅門的宮殿與聖殿器具' },
      { id: 'ch8', label: '第8章', title: '獻殿禮與所羅門的禱告' },
    ],
  },
  {
    id: 'book7',
    title: '以斯拉記——重建聖殿與靈性復興',
    subtitle: '聖經註釋',
    emoji: '📜',
    accentHex: '#7c3aed',
    chapters: [
      { id: 'ch1', label: '第1章', title: '古列王下詔重建聖殿' },
      { id: 'ch2', label: '第2章', title: '歸回者的名單' },
      { id: 'ch3', label: '第3章', title: '重建祭壇與立殿根基' },
      { id: 'ch4', label: '第4章', title: '敵人阻擋重建工程' },
      { id: 'ch5', label: '第5章', title: '重新開始建造聖殿' },
      { id: 'ch6', label: '第6章', title: '完成並獻上聖殿' },
      { id: 'ch7', label: '第7章', title: '以斯拉來到耶路撒冷' },
      { id: 'ch8', label: '第8章', title: '與以斯拉同來的人' },
      { id: 'ch9', label: '第9章', title: '以斯拉為百姓的罪禱告' },
      { id: 'ch10', label: '第10章', title: '百姓的認罪與悔改' },
    ],
  },
  {
    id: 'book8',
    title: '屬靈操練禮讚',
    subtitle: '傅士德 著',
    emoji: '🙏',
    accentHex: '#0891b2',
    chapters: [
      { id: 'ch1', label: '第1章', title: '屬靈操練的門' },
      { id: 'ch2', label: '第2章', title: '默想的操練' },
      { id: 'ch3', label: '第3章', title: '禱告的操練' },
      { id: 'ch4', label: '第4章', title: '禁食的操練' },
      { id: 'ch5', label: '第5章', title: '研究的操練' },
      { id: 'ch6', label: '第6章', title: '簡樸的操練' },
      { id: 'ch7', label: '第7章', title: '獨處的操練' },
      { id: 'ch8', label: '第8章', title: '順服的操練' },
      { id: 'ch9', label: '第9章', title: '服事的操練' },
      { id: 'ch10', label: '第10章', title: '認罪的操練' },
      { id: 'ch11', label: '第11章', title: '敬拜的操練' },
      { id: 'ch12', label: '第12章', title: '引導的操練' },
    ],
  },
  {
    id: 'book9',
    title: '三層天禱告',
    subtitle: '會幕式禱告手冊',
    emoji: '🙏',
    accentHex: '#7c3aed',
    chapters: [
      { id: 'intro', label: '前言', title: '會幕禱告架構' },
      { id: 'ch1', label: '第1篇', title: '第三層天禱告' },
      { id: 'ch2', label: '第2篇', title: '第二層天禱告' },
      { id: 'ch3', label: '第3篇', title: '第一層天禱告' },
      { id: 'ch4', label: '第4篇', title: '為產業禱告' },
      { id: 'ch5', label: '第5篇', title: '破除迦南七族' },
      { id: 'ch6', label: '第6篇', title: '話禱的範例' },
    ],
  },
];

// ==================== RENDER FUNCTIONS ====================
function renderBook1(ch: string) {
  switch (ch) {
    case 'ch1': return <SectionHome />;
    case 'ch2': return <SectionDefinition />;
    case 'ch3': return <SectionDiagnosis />;
    case 'ch4': return <SectionDevelopment />;
    case 'ch5': return <SectionLaws />;
    case 'ch6': return <SectionMyths />;
    case 'ch7': return <SectionFamily />;
    case 'ch8': return <SectionWork />;
    case 'ch9': return <SectionSelf />;
    case 'ch10': return <SectionKids />;
    case 'ch11': return <SectionBoundaries />;
    case 'ch12': return <SectionResistance />;
    case 'ch13': return <SectionSuccess />;
    case 'ch14': return <SectionDigital />;
    case 'ch15': return <SectionFood />;
    case 'ch16': return <SectionSexuality />;
    default: return <SectionClosing />;
  }
}

function renderBook2(ch: string, expandAll: boolean) {
  switch (ch) {
    case 'ch1': return <Chapter1 expandAll={expandAll} />;
    case 'ch2': return <Chapter2 expandAll={expandAll} />;
    case 'ch3': return <Chapter3 expandAll={expandAll} />;
    case 'ch4': return <Chapter4 expandAll={expandAll} />;
    case 'ch5': return <Chapter5 expandAll={expandAll} />;
    case 'ch6': return <Chapter6 expandAll={expandAll} />;
    case 'ch7': return <Chapter7 expandAll={expandAll} />;
    default: return <Chapter8 expandAll={expandAll} />;
  }
}

function renderBook3(ch: string) {
  switch (ch) {
    case 'ch1': return <Paul1 />;
    case 'ch2': return <Paul2 />;
    case 'ch3': return <Paul3 />;
    case 'ch4': return <Paul4 />;
    case 'ch5': return <Paul5 />;
    case 'ch6': return <Paul6 />;
    case 'ch7': return <Paul7 />;
    default: return <Paul8 />;
  }
}

function renderBook4(ch: string, expandAll: boolean) {
  switch (ch) {
    case 'ch1': return <Inf1 expandAll={expandAll} />;
    case 'ch2': return <Inf2 expandAll={expandAll} />;
    case 'ch3': return <Inf3 expandAll={expandAll} />;
    case 'ch4': return <Inf4 expandAll={expandAll} />;
    case 'ch5': return <Inf5 expandAll={expandAll} />;
    case 'ch6': return <Inf6 expandAll={expandAll} />;
    case 'ch7': return <Inf7 expandAll={expandAll} />;
    case 'ch8': return <Inf8 expandAll={expandAll} />;
    case 'ch9': return <Inf9 expandAll={expandAll} />;
    case 'ch10': return <Inf10 expandAll={expandAll} />;
    case 'ch11': return <Inf11 expandAll={expandAll} />;
    case 'ch12': return <Inf12 expandAll={expandAll} />;
    case 'ch13': return <Inf13 expandAll={expandAll} />;
    case 'ch14': return <Inf14 expandAll={expandAll} />;
    default: return <Inf15 expandAll={expandAll} />;
  }
}

function renderBook5(ch: string) {
  switch (ch) {
    case 'week1': return <Christ1 />;
    case 'week2': return <Christ2 />;
    case 'week3': return <Christ3 />;
    case 'week4': return <Christ4 />;
    case 'week5': return <Christ5 />;
    default: return <Christ6 />;
  }
}

function renderBook6(ch: string) {
  switch (ch) {
    case 'ch1': return <Kings1 />;
    case 'ch2': return <Kings2 />;
    case 'ch3': return <Kings3 />;
    case 'ch4': return <Kings4 />;
    case 'ch5': return <Kings5 />;
    case 'ch6': return <Kings6 />;
    case 'ch7': return <Kings7 />;
    default: return <Kings8 />;
  }
}

function renderBook7(ch: string) {
  switch (ch) {
    case 'ch1': return <Ezra1 />;
    case 'ch2': return <Ezra2 />;
    case 'ch3': return <Ezra3 />;
    case 'ch4': return <Ezra4 />;
    case 'ch5': return <Ezra5 />;
    case 'ch6': return <Ezra6 />;
    case 'ch7': return <Ezra7 />;
    case 'ch8': return <Ezra8 />;
    case 'ch9': return <Ezra9 />;
    default: return <Ezra10 />;
  }
}

function renderBook8(ch: string) {
  switch (ch) {
    case 'ch1': return <Spir1 />;
    case 'ch2': return <Spir2 />;
    case 'ch3': return <Spir3 />;
    case 'ch4': return <Spir4 />;
    case 'ch5': return <Spir5 />;
    case 'ch6': return <Spir6 />;
    case 'ch7': return <Spir7 />;
    case 'ch8': return <Spir8 />;
    case 'ch9': return <Spir9 />;
    case 'ch10': return <Spir10 />;
    case 'ch11': return <Spir11 />;
    default: return <Spir12 />;
  }
}

function renderBook9(ch: string, expandAll: boolean) {
  switch (ch) {
    case 'intro': return <Prayer_Intro />;
    case 'ch1': return <Prayer_Ch1 />;
    case 'ch2': return <Prayer_Ch2 />;
    case 'ch3': return <Prayer_Ch3 />;
    case 'ch4': return <Prayer_Ch4 />;
    case 'ch5': return <Prayer_Ch5 />;
    default: return <Prayer_Ch6 />;
  }
}


// ==================== MAIN APP ====================
export default function App() {
  const [selectedBook, setSelectedBook] = useState<string | null>(null);
  const [activeChapter, setActiveChapter] = useState<string>('ch1');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandAll, setExpandAll] = useState(false);

  // URL parameter handling
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const bookParam = params.get('book');
    if (bookParam && BOOKS.find(b => b.id === bookParam)) {
      setSelectedBook(bookParam);
      if (bookParam === 'book9') {
        setActiveChapter('intro');
      } else {
        setActiveChapter('ch1');
      }
    }
  }, []);

  const book = BOOKS.find(b => b.id === selectedBook);

  const handleSelectBook = (id: string) => {
    setSelectedBook(id);
    setActiveChapter(id === 'book9' ? 'intro' : id === 'book5' ? 'week1' : 'ch1');
    setIsSidebarOpen(false);
  };

  const handleChapterChange = (chId: string) => {
    setActiveChapter(chId);
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    if (selectedBook === 'book1') return renderBook1(activeChapter);
    if (selectedBook === 'book2') return renderBook2(activeChapter, expandAll);
    if (selectedBook === 'book3') return renderBook3(activeChapter);
    if (selectedBook === 'book4') return renderBook4(activeChapter, expandAll);
    if (selectedBook === 'book5') return renderBook5(activeChapter);
    if (selectedBook === 'book6') return renderBook6(activeChapter);
    if (selectedBook === 'book7') return renderBook7(activeChapter);
    if (selectedBook === 'book8') return renderBook8(activeChapter);
    if (selectedBook === 'book9') return renderBook9(activeChapter, expandAll);
    return null;
  };

  // ==================== BOOK LIST VIEW ====================
  if (!selectedBook) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <header className="bg-white border-b border-slate-200 px-6 py-5 text-center shadow-sm">
          <div className="flex items-center justify-center gap-2 mb-1">
            <BookOpen className="h-6 w-6 text-indigo-500" />
            <h1 className="text-xl font-bold text-slate-800">書房</h1>
          </div>
          <p className="text-xs text-slate-400">選擇一本書開始閱讀</p>
        </header>
        <main className="flex-1 p-6 max-w-lg mx-auto w-full">
          <div className="flex flex-col gap-4 mt-4">
            {BOOKS.map(b => (
              <motion.button
                key={b.id}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleSelectBook(b.id)}
                className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex items-center gap-4 text-left hover:shadow-md transition-shadow"
              >
                <span className="text-4xl flex-shrink-0">{b.emoji}</span>
                <div>
                  <div className="font-bold text-slate-800 text-base">{b.title}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{b.subtitle}</div>
                  <div className="text-xs mt-1.5" style={{ color: b.accentHex }}>
                    {b.chapters.length} 章節
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </main>
      </div>
    );
  }

  // ==================== READER VIEW ====================
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col">
      {/* Top Header */}
      <div className="bg-white shadow-sm sticky top-0 z-50 border-b border-slate-200 px-4 h-14 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSelectedBook(null)}
            className="text-slate-400 hover:text-slate-700 p-1 rounded-md"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="text-sm font-bold text-slate-800 truncate max-w-[180px]">{book!.title}</span>
        </div>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-md text-slate-500 hover:text-slate-800 focus:outline-none"
        >
          {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-14 bottom-0 w-80 bg-white shadow-2xl z-40 overflow-y-auto border-l border-slate-200"
          >
            <div className="p-6">
              <h2 className="text-lg font-bold text-slate-800 mb-4">目錄</h2>
              {selectedBook === 'book2' || selectedBook === 'book4' ? (
                <button
                  onClick={() => setExpandAll(!expandAll)}
                  className="w-full mb-4 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
                >
                  {expandAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  <span>{expandAll ? '收合全部' : '展開全部'}</span>
                </button>
              ) : null}
              <div className="space-y-2">
                {book!.chapters.map(ch => (
                  <button
                    key={ch.id}
                    onClick={() => handleChapterChange(ch.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeChapter === ch.id
                        ? 'bg-slate-800 text-white font-semibold'
                        : 'hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <div className="font-medium">{ch.label}</div>
                    <div className="text-sm opacity-75 mt-0.5">{ch.title}</div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 p-6 max-w-4xl mx-auto w-full">
        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-slate-200 px-4 py-3 flex justify-between items-center sticky bottom-0">
        <button
          onClick={() => {
            const currentIdx = book!.chapters.findIndex(c => c.id === activeChapter);
            if (currentIdx > 0) handleChapterChange(book!.chapters[currentIdx - 1].id);
          }}
          disabled={book!.chapters.findIndex(c => c.id === activeChapter) === 0}
          className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-200 transition-colors text-sm"
        >
          ← 上一章
        </button>
        <span className="text-xs text-slate-500">
          {book!.chapters.find(c => c.id === activeChapter)?.label}
        </span>
        <button
          onClick={() => {
            const currentIdx = book!.chapters.findIndex(c => c.id === activeChapter);
            if (currentIdx < book!.chapters.length - 1) handleChapterChange(book!.chapters[currentIdx + 1].id);
          }}
          disabled={book!.chapters.findIndex(c => c.id === activeChapter) === book!.chapters.length - 1}
          className="px-4 py-2 bg-slate-800 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-700 transition-colors text-sm"
        >
          下一章 →
        </button>
      </div>
    </div>
  );
}
