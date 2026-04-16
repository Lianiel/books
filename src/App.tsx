import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen, Menu, X, Heart, Activity, Compass, Map, Shield, Users, Sun, Star,
  Home, Footprints, Scale, HelpCircle, HeartHandshake, Baby, Briefcase,
  Smartphone, User, Cross, ShieldAlert, TrendingUp, ChevronLeft, Download, Maximize2, Minimize2, Gift, AlertTriangle
} from 'lucide-react';
import { useHighlight, HighlightStyle, applyStyleToSpan } from './useHighlight';

// Book 1: 立界線得自由
import SectionHome from './components/book1/SectionHome';
import SectionDefinition from './components/book1/SectionDefinition';
import SectionDiagnosis from './components/book1/SectionDiagnosis';
import SectionDevelopment from './components/book1/SectionDevelopment';
import SectionLaws from './components/book1/SectionLaws';
import SectionMyths from './components/book1/SectionMyths';
import SectionCh7 from './components/book1/SectionCh7';
import SectionCh8 from './components/book1/SectionCh8';
import SectionCh9 from './components/book1/SectionCh9';
import SectionCh10 from './components/book1/SectionCh10';
import SectionCh11 from './components/book1/SectionCh11';
import SectionCh12 from './components/book1/SectionCh12';
import SectionCh13 from './components/book1/SectionCh13';
import SectionCh14 from './components/book1/SectionCh14';
import SectionCh15 from './components/book1/SectionCh15';
import SectionCh16 from './components/book1/SectionCh16';
import SectionCh17 from './components/book1/SectionCh17';

// Book 2: 情感健康的門徒
import Emo1 from './components/book2/Chapter1';
import Emo2 from './components/book2/Chapter2';
import Emo3 from './components/book2/Chapter3';
import Emo4 from './components/book2/Chapter4';
import Emo5 from './components/book2/Chapter5';
import Emo6 from './components/book2/Chapter6';
import Emo7 from './components/book2/Chapter7';
import Emo8 from './components/book2/Chapter8';

// Book 3: 向保羅學宣教
import Paul1 from './components/book3/Chapter1';
import Paul2 from './components/book3/Chapter2';
import Paul3 from './components/book3/Chapter3';
import Paul4 from './components/book3/Chapter4';
import Paul5 from './components/book3/Chapter5';
import Paul6 from './components/book3/Chapter6';
import Paul7 from './components/book3/Chapter7';
import Paul8 from './components/book3/Chapter8';

// Book 4: 成為有感染力的基督徒
import Cont1 from './components/book4/Chapter1';
import Cont2 from './components/book4/Chapter2';
import Cont3 from './components/book4/Chapter3';
import Cont4 from './components/book4/Chapter4';
import Cont5 from './components/book4/Chapter5';
import Cont6 from './components/book4/Chapter6';
import Cont7 from './components/book4/Chapter7';
import Cont8 from './components/book4/Chapter8';
import Cont9 from './components/book4/Chapter9';
import Cont10 from './components/book4/Chapter10';
import Cont11 from './components/book4/Chapter11';
import Cont12 from './components/book4/Chapter12';
import Cont13 from './components/book4/Chapter13';
import Cont14 from './components/book4/Chapter14';
import Cont15 from './components/book4/Chapter15';
import Cont16 from './components/book4/Chapter16';

// Book 5: 如何活出基督的樣式
import Walk1 from './components/book5/Chapter1';
import Walk2 from './components/book5/Chapter2';
import Walk3 from './components/book5/Chapter3';
import Walk4 from './components/book5/Chapter4';
import Walk5 from './components/book5/Chapter5';
import Walk6 from './components/book5/Chapter6';

// Book 6: 列王紀上—上帝的啟示在人間
import King1 from './components/book6/Chapter1';
import King2 from './components/book6/Chapter2';
import King3 from './components/book6/Chapter3';
import King4 from './components/book6/Chapter4';
import King5 from './components/book6/Chapter5';
import King6 from './components/book6/Chapter6';
import King7 from './components/book6/Chapter7';
import King8 from './components/book6/Chapter8';

// Book 7: 基要陪讀課程
import Disc1 from "./components/book7/Chapter1";
import Disc2 from "./components/book7/Chapter2";
import Disc3 from "./components/book7/Chapter3";
import Disc4 from "./components/book7/Chapter4";
import Disc5 from "./components/book7/Chapter5";
import Disc6 from "./components/book7/Chapter6";

const BOOKS = [
  {
    id: 'book1',
    title: '立界線得自由',
    subtitle: '全書重點整理',
    emoji: '📘',
    accentHex: '#0d9488',
    bgLight: 'bg-teal-50',
    textAccent: 'text-teal-700',
    hoverText: 'hover:text-teal-600',
    chapters: [
      { id: 'ch1',  label: '1. 界線混亂的一天',       icon: Home,           part: '第一部：什麼是界線' },
      { id: 'ch2',  label: '2. 界線看來啥模樣？',      icon: BookOpen,       part: '第一部：什麼是界線' },
      { id: 'ch3',  label: '3. 當界線出了問題',        icon: Activity,       part: '第一部：什麼是界線' },
      { id: 'ch4',  label: '4. 界線的發展歷程',        icon: Footprints,     part: '第一部：什麼是界線' },
      { id: 'ch5',  label: '5. 界線十律',              icon: Scale,          part: '第一部：什麼是界線' },
      { id: 'ch6',  label: '6. 常見的界線迷思',        icon: HelpCircle,     part: '第一部：什麼是界線' },
      { id: 'ch7',  label: '7. 界線與你的家庭',        icon: Users,          part: '第二部：界線衝突' },
      { id: 'ch8',  label: '8. 界線與你的朋友',        icon: HeartHandshake, part: '第二部：界線衝突' },
      { id: 'ch9',  label: '9. 界線與你的配偶',        icon: Heart,          part: '第二部：界線衝突' },
      { id: 'ch10', label: '10. 界線與你的子女',       icon: Baby,           part: '第二部：界線衝突' },
      { id: 'ch11', label: '11. 界線與工作',           icon: Briefcase,      part: '第二部：界線衝突' },
      { id: 'ch12', label: '12. 界線與數位時代',       icon: Smartphone,     part: '第二部：界線衝突' },
      { id: 'ch13', label: '13. 界線與自己',           icon: User,           part: '第二部：界線衝突' },
      { id: 'ch14', label: '14. 界線與上帝',           icon: Cross,          part: '第二部：界線衝突' },
      { id: 'ch15', label: '15. 對界線的抗拒',         icon: ShieldAlert,    part: '第三部：發展健康的界線' },
      { id: 'ch16', label: '16. 評估界線發展進度',     icon: TrendingUp,     part: '第三部：發展健康的界線' },
      { id: 'ch17', label: '17. 界線明確的一天',       icon: Sun,            part: '第三部：發展健康的界線' },
    ],
  },
  {
    id: 'book2',
    title: '情感健康的門徒',
    subtitle: '重點整理',
    emoji: '📗',
    accentHex: '#e11d48',
    bgLight: 'bg-rose-50',
    textAccent: 'text-rose-700',
    hoverText: 'hover:text-rose-600',
    chapters: [
      { id: 'ch1', label: '第 1 章：情感不健康門徒的症狀',     icon: Activity, part: '情感健康的門徒' },
      { id: 'ch2', label: '第 2 章：認識自己好認識神',         icon: Heart,    part: '情感健康的門徒' },
      { id: 'ch3', label: '第 3 章：往回看以便向前行',         icon: Compass,  part: '情感健康的門徒' },
      { id: 'ch4', label: '第 4 章：穿越這堵牆',               icon: Shield,   part: '情感健康的門徒' },
      { id: 'ch5', label: '第 5 章：藉悲傷與失落擴張靈魂',     icon: Map,      part: '情感健康的門徒' },
      { id: 'ch6', label: '第 6 章：發現每日日課與安息日的節奏', icon: Users,  part: '情感健康的門徒' },
      { id: 'ch7', label: '第 7 章：成長為情感成熟的大人',     icon: Sun,      part: '情感健康的門徒' },
      { id: 'ch8', label: '第 8 章：發展出生活法則',           icon: Star,     part: '情感健康的門徒' },
    ],
  },
  {
    id: 'book3',
    title: '向保羅學宣教',
    subtitle: '回歸聖經的宣教學－王乃純',
    emoji: '📙',
    accentHex: '#4338ca',
    bgLight: 'bg-indigo-50',
    textAccent: 'text-indigo-700',
    hoverText: 'hover:text-indigo-600',
    chapters: [
      { id: 'ch1', label: '緒論',                                   page: 'p13',  icon: BookOpen, part: '向保羅學宣教' },
      { id: 'ch2', label: '第一章：成長於兩個世界的保羅',           page: 'p25',  icon: Compass,  part: '向保羅學宣教' },
      { id: 'ch3', label: '第二章：宣教者保羅',                     page: 'p71',  icon: Map,      part: '向保羅學宣教' },
      { id: 'ch4', label: '第三章：牧者保羅',                       page: 'p132', icon: Shield,   part: '向保羅學宣教' },
      { id: 'ch5', label: '第四章：保羅的典範與啟示',               page: 'p156', icon: Users,    part: '向保羅學宣教' },
      { id: 'ch6', label: '第五章：宣教實踐者與導師',               page: 'p185', icon: Sun,      part: '向保羅學宣教' },
      { id: 'ch7', label: '附錄：保羅宣教於台灣拿撒勒人會之應用',  page: 'p191', icon: Star,     part: '向保羅學宣教' },
      { id: 'ch8', label: '參考書目',                               page: 'p198', icon: BookOpen, part: '向保羅學宣教' },
    ],
  },
  {
    id: 'book4',
    title: '成為有感染力的基督徒',
    subtitle: 'Bill Hybels & Mark Mittelberg 著',
    emoji: '📕',
    accentHex: '#d97706',
    bgLight: 'bg-amber-50',
    textAccent: 'text-amber-700',
    hoverText: 'hover:text-amber-600',
    chapters: [
      { id: 'ch1',  label: '1. 神看重人',                               page: 'p7',   icon: Heart,           part: 'Part 1：為何要成為有感染力的基督徒？' },
      { id: 'ch2',  label: '2. 有感染力之基督徒的報酬',                 page: 'p25',  icon: Star,            part: 'Part 1：為何要成為有感染力的基督徒？' },
      { id: 'ch3',  label: '3. 影響世界的公式',                         page: 'p43',  icon: TrendingUp,      part: 'Part 1：為何要成為有感染力的基督徒？' },
      { id: 'ch4',  label: '4. 真實的吸引力',                           page: 'p59',  icon: Sun,             part: 'Part 2：活出基督徒特質' },
      { id: 'ch5',  label: '5. 愛心的牽引力',                           page: 'p75',  icon: HeartHandshake,  part: 'Part 2：活出基督徒特質' },
      { id: 'ch6',  label: '6. 犧牲的力量',                             page: 'p93',  icon: Shield,          part: 'Part 2：活出基督徒特質' },
      { id: 'ch7',  label: '7. 人際關係中的機會',                       page: 'p111', icon: Users,           part: 'Part 3：靠近人' },
      { id: 'ch8',  label: '8. 跟未信者交往',                           page: 'p123', icon: Compass,         part: 'Part 3：靠近人' },
      { id: 'ch9',  label: '9. 找到合適自己的方法',                     page: 'p139', icon: Map,             part: 'Part 3：靠近人' },
      { id: 'ch10', label: '10. 開啟屬靈談話',                          page: 'p157', icon: Activity,        part: 'Part 4：清楚傳達' },
      { id: 'ch11', label: '11. 把福音信息講清楚',                      page: 'p175', icon: BookOpen,        part: 'Part 4：清楚傳達' },
      { id: 'ch12', label: '12. 拆毀阻斷信仰的障礙',                   page: 'p195', icon: ShieldAlert,     part: 'Part 4：清楚傳達' },
      { id: 'ch13', label: '13. 跨越信心之線',                          page: 'p215', icon: Footprints,      part: 'Part 5：報酬：最大影響' },
      { id: 'ch14', label: '14. 有感染力的基督徒和具感染力的教會',       page: 'p233', icon: Home,            part: 'Part 5：報酬：最大影響' },
      { id: 'ch15', label: '15. 把生命投資在人身上',                    page: 'p249', icon: User,            part: 'Part 5：報酬：最大影響' },
      { id: 'ch16', label: '附錄：訓練課程',                            page: 'p263', icon: Briefcase,       part: '附錄' },
    ],
  },
  {
    id: 'book5',
    title: '如何活出基督的樣式',
    subtitle: '歐凱莉（Kay Arthur）著',
    emoji: '📗',
    accentHex: '#059669',
    bgLight: 'bg-emerald-50',
    textAccent: 'text-emerald-700',
    hoverText: 'hover:text-emerald-600',
    chapters: [
      { id: 'ch1', label: '第一周', icon: BookOpen, part: '如何活出基督的樣式' },
      { id: 'ch2', label: '第二周', icon: Heart,    part: '如何活出基督的樣式' },
      { id: 'ch3', label: '第三周', icon: Compass,  part: '如何活出基督的樣式' },
      { id: 'ch4', label: '第四周', icon: Shield,   part: '如何活出基督的樣式' },
      { id: 'ch5', label: '第五周', icon: Sun,      part: '如何活出基督的樣式' },
      { id: 'ch6', label: '第六周', icon: Star,     part: '如何活出基督的樣式' },
    ],
  },
  {
    id: 'book6',
    title: '列王紀上—上帝的啟示在人間',
    subtitle: '吳獻章 著｜門訓生命讀經系列',
    emoji: '📕',
    accentHex: '#b45309',
    bgLight: 'bg-amber-50',
    textAccent: 'text-amber-700',
    hoverText: 'hover:text-amber-600',
    chapters: [
      { id: 'ch1', label: '第 1 站：《列王紀》總論',           page: 'p.11',  icon: BookOpen,       part: '列王紀上—上帝的啟示在人間' },
      { id: 'ch2', label: '第 2 站：聯合王國（一）所羅門登基', page: 'p.45',  icon: Star,           part: '列王紀上—上帝的啟示在人間' },
      { id: 'ch3', label: '第 3 站：聯合王國（二）所羅門建聖殿', page: 'p.81', icon: Home,           part: '列王紀上—上帝的啟示在人間' },
      { id: 'ch4', label: '第 4 站：聯合王國的分裂',           page: 'p.119', icon: ShieldAlert,    part: '列王紀上—上帝的啟示在人間' },
      { id: 'ch5', label: '第 5 站：遵行神旨意的先知',         page: 'p.157', icon: Compass,        part: '列王紀上—上帝的啟示在人間' },
      { id: 'ch6', label: '第 6 站：先知與君王的抗衡',         page: 'p.197', icon: Shield,         part: '列王紀上—上帝的啟示在人間' },
      { id: 'ch7', label: '第 7 站：學者論述',                 page: 'p.233', icon: Map,            part: '列王紀上—上帝的啟示在人間' },
      { id: 'ch8', label: '靈修默想／共讀討論指引',             page: 'p.242', icon: Heart,          part: '列王紀上—上帝的啟示在人間' },
    ],
  },
  {
    id: "book7",
    title: "基要陪讀課程",
    subtitle: "教會陪讀教材",
    emoji: "📗",
    accentHex: "#0d9488",
    bgLight: "bg-teal-50",
    textAccent: "text-teal-700",
    hoverText: "hover:text-teal-600",
    chapters: [
      { id: "ch1", label: "第一課：上帝的祝福",           page: "",  icon: Gift,           part: "基要陪讀課程" },
      { id: "ch2", label: "第二課：祝福去哪了？",         page: "",  icon: AlertTriangle,  part: "基要陪讀課程" },
      { id: "ch3", label: "第三課：祝福在耶穌裡",         page: "",  icon: Heart,          part: "基要陪讀課程" },
      { id: "ch4", label: "第四課：擁抱祝福",             page: "",  icon: Star,           part: "基要陪讀課程" },
      { id: "ch5", label: "補充經文及反對問題回應",       page: "",  icon: Shield,         part: "附錄" },
      { id: "ch6", label: "陪讀課程使用守則",             page: "",  icon: BookOpen,       part: "附錄" },
    ],
  },
];

function renderBook1(ch: string) {
  switch (ch) {
    case 'ch1': return <SectionHome />;
    case 'ch2': return <SectionDefinition />;
    case 'ch3': return <SectionDiagnosis />;
    case 'ch4': return <SectionDevelopment />;
    case 'ch5': return <SectionLaws />;
    case 'ch6': return <SectionMyths />;
    case 'ch7': return <SectionCh7 />;
    case 'ch8': return <SectionCh8 />;
    case 'ch9': return <SectionCh9 />;
    case 'ch10': return <SectionCh10 />;
    case 'ch11': return <SectionCh11 />;
    case 'ch12': return <SectionCh12 />;
    case 'ch13': return <SectionCh13 />;
    case 'ch14': return <SectionCh14 />;
    case 'ch15': return <SectionCh15 />;
    case 'ch16': return <SectionCh16 />;
    default:     return <SectionCh17 />;
  }
}
function renderBook2(ch: string, expandAll?: boolean) {
  switch (ch) {
    case 'ch1': return <Emo1 expandAll={expandAll} />;
    case 'ch2': return <Emo2 expandAll={expandAll} />;
    case 'ch3': return <Emo3 expandAll={expandAll} />;
    case 'ch4': return <Emo4 expandAll={expandAll} />;
    case 'ch5': return <Emo5 expandAll={expandAll} />;
    case 'ch6': return <Emo6 expandAll={expandAll} />;
    case 'ch7': return <Emo7 expandAll={expandAll} />;
    default:    return <Emo8 expandAll={expandAll} />;
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
    default:    return <Paul8 />;
  }
}
function renderBook4(ch: string, expandAll?: boolean) {
  switch (ch) {
    case 'ch1': return <Cont1 expandAll={expandAll} />;
    case 'ch2': return <Cont2 expandAll={expandAll} />;
    case 'ch3': return <Cont3 expandAll={expandAll} />;
    case 'ch4': return <Cont4 expandAll={expandAll} />;
    case 'ch5': return <Cont5 expandAll={expandAll} />;
    case 'ch6': return <Cont6 expandAll={expandAll} />;
    case 'ch7': return <Cont7 expandAll={expandAll} />;
    case 'ch8': return <Cont8 expandAll={expandAll} />;
    case 'ch9': return <Cont9 expandAll={expandAll} />;
    case 'ch10': return <Cont10 expandAll={expandAll} />;
    case 'ch11': return <Cont11 expandAll={expandAll} />;
    case 'ch12': return <Cont12 expandAll={expandAll} />;
    case 'ch13': return <Cont13 expandAll={expandAll} />;
    case 'ch14': return <Cont14 expandAll={expandAll} />;
    case 'ch15': return <Cont15 expandAll={expandAll} />;
    default:    return <Cont16 expandAll={expandAll} />;
  }
}
function renderBook5(ch: string) {
  switch (ch) {
    case 'ch1': return <Walk1 />;
    case 'ch2': return <Walk2 />;
    case 'ch3': return <Walk3 />;
    case 'ch4': return <Walk4 />;
    case 'ch5': return <Walk5 />;
    default:    return <Walk6 />;
  }
}
function renderBook6(ch: string) {
  switch (ch) {
    case 'ch1': return <King1 />;
    case 'ch2': return <King2 />;
    case 'ch3': return <King3 />;
    case 'ch4': return <King4 />;
    case 'ch5': return <King5 />;
    case 'ch6': return <King6 />;
    case 'ch7': return <King7 />;
    default:    return <King8 />;
  }
}

function renderBook7(ch: string) {
  switch (ch) {
    case "ch1": return <Disc1 />;
    case "ch2": return <Disc2 />;
    case "ch3": return <Disc3 />;
    case "ch4": return <Disc4 />;
    case "ch5": return <Disc5 />;
    default:    return <Disc6 />;
  }
}

export default function App() {
  // 讀取 URL 參數 ?book=book1 直接開對應書本
  const params = new URLSearchParams(window.location.search);
  const initBook = params.get('book');

  const [selectedBook, setSelectedBook] = useState<string | null>(
    BOOKS.find(b => b.id === initBook) ? initBook : null
  );
  const [activeChapter, setActiveChapter] = useState('ch1');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandAll, setExpandAll] = useState(false);

  // 從 URL 的 access_token 自動登入（從 puhe 後台帶過來）
  useEffect(() => {
    const access_token = params.get('access_token');
    const refresh_token = params.get('refresh_token');
    if (access_token && refresh_token) {
      const sb = (window as any).supabase?.createClient(
        'https://yhchjanqmopgbwgjspmf.supabase.co',
        'sb_publishable_51sbrd_Tv8Xuab92XiqRVQ_7iePDoJx'
      );
      sb?.auth.setSession({ access_token, refresh_token }).then(() => {
        // 清掉 URL 的 token 參數，避免暴露
        const clean = new URL(window.location.href);
        clean.searchParams.delete('access_token');
        clean.searchParams.delete('refresh_token');
        window.history.replaceState({}, '', clean.toString());
      });
    }
  }, []);

  // ── Highlight toolbar state ──────────────────────────────────────
  const [toolbar, setToolbar] = useState<{ x: number; y: number; text: string } | null>(null);
  const toolbarRef = useRef<HTMLDivElement>(null);
  const { isLoggedIn, highlights, applyHighlights, addHighlight, removeHighlight, getHighlightByText } =
    useHighlight(selectedBook || '', activeChapter);

  // Apply highlights whenever chapter changes or highlights load
  useEffect(() => {
    const timer = setTimeout(() => { applyHighlights(); }, 300);
    return () => clearTimeout(timer);
  }, [applyHighlights, activeChapter, selectedBook]);

  // Listen for click on highlight span (remove)
  useEffect(() => {
    const handler = (e: Event) => {
      const id = (e as CustomEvent).detail;
      removeHighlight(id);
    };
    document.addEventListener('removeHighlight', handler);
    return () => document.removeEventListener('removeHighlight', handler);
  }, [removeHighlight]);

  // Show toolbar on text selection (mouse + touch)
  useEffect(() => {
    if (!isLoggedIn || !selectedBook) return;

    const handleSelectionChange = () => {
      if (toolbarRef.current?.contains(document.activeElement)) return;
      const sel = window.getSelection();
      const text = sel?.toString().trim() || '';
      if (text.length < 2) { setToolbar(null); return; }
      try {
        const range = sel!.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        if (rect.width === 0 && rect.height === 0) return;
        setToolbar({ x: rect.left + rect.width / 2, y: rect.top + window.scrollY - 8, text });
      } catch (e) {}
    };

    const handleMouseUp = (e: MouseEvent) => {
      if (toolbarRef.current?.contains(e.target as Node)) return;
      setTimeout(handleSelectionChange, 10);
    };
    const handleTouchEnd = (e: TouchEvent) => {
      if (toolbarRef.current?.contains(e.target as Node)) return;
      // Delay to allow browser to update selection after touch
      setTimeout(handleSelectionChange, 300);
    };
    const handleMouseDown = (e: MouseEvent) => {
      if (!toolbarRef.current?.contains(e.target as Node)) setToolbar(null);
    };
    const handleTouchStart = (e: TouchEvent) => {
      if (!toolbarRef.current?.contains(e.target as Node)) setToolbar(null);
    };

    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('touchend', handleTouchEnd);
    document.addEventListener('touchstart', handleTouchStart);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, [isLoggedIn, selectedBook]);

  const handleHighlight = async (style: HighlightStyle) => {
    if (!toolbar) return;
    const existing = getHighlightByText(toolbar.text);
    if (existing) {
      await removeHighlight(existing.id);
    } else {
      await addHighlight(toolbar.text, style);
    }
    setToolbar(null);
    window.getSelection()?.removeAllRanges();
    setTimeout(() => applyHighlights(), 200);
  };

  const book = BOOKS.find(b => b.id === selectedBook);

  const handleSelectBook = (id: string) => {
    setSelectedBook(id);
    setActiveChapter('ch1');
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChapterClick = (id: string) => {
    setActiveChapter(id);
    setExpandAll(false);
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
    return null;
  };

  // ── Login Modal ───────────────────────────────────────────────────
  const [showLogin, setShowLogin] = useState(false);
  const [loginPhone, setLoginPhone] = useState('');
  const [loginPwd, setLoginPwd] = useState('');
  const [loginMsg, setLoginMsg] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  const handleLogin = async () => {
    if (!loginPhone || !loginPwd) { setLoginMsg('請填寫帳號和密碼'); return; }
    setLoginLoading(true); setLoginMsg('');
    const sb = (window as any).supabase?.createClient(
      'https://yhchjanqmopgbwgjspmf.supabase.co',
      'sb_publishable_51sbrd_Tv8Xuab92XiqRVQ_7iePDoJx'
    );
    const { error } = await sb.auth.signInWithPassword({
      email: `${loginPhone}@church.local`,
      password: loginPwd,
    });
    setLoginLoading(false);
    if (error) { setLoginMsg('帳號或密碼錯誤'); return; }
    setShowLogin(false); setLoginPhone(''); setLoginPwd(''); setLoginMsg('');
  };

  const handleLogout = async () => {
    const sb = (window as any).supabase?.createClient(
      'https://yhchjanqmopgbwgjspmf.supabase.co',
      'sb_publishable_51sbrd_Tv8Xuab92XiqRVQ_7iePDoJx'
    );
    await sb.auth.signOut();
  };

  // ── 匯出 Word 功能 ─────────────────────────────────────────
  const exportToWord = (title: string, content: string) => {
    const html = `
      <html xmlns:o="urn:schemas-microsoft-com:office:office"
            xmlns:w="urn:schemas-microsoft-com:office:word"
            xmlns="http://www.w3.org/TR/REC-html40">
      <head><meta charset="utf-8"><title>${title}</title>
      <style>
        body { font-family: '微軟正黑體', 'Microsoft JhengHei', sans-serif; line-height: 1.8; color: #333; max-width: 700px; margin: 0 auto; padding: 20px; }
        h1 { font-size: 22pt; color: #1e3a5f; border-bottom: 2px solid #1e3a5f; padding-bottom: 8px; }
        h2 { font-size: 16pt; color: #2c5282; margin-top: 24px; }
        h3 { font-size: 13pt; color: #4a5568; margin-top: 16px; }
        p { margin: 8px 0; font-size: 11pt; }
        li { margin: 4px 0; font-size: 11pt; }
        .divider { border-top: 1px solid #ccc; margin: 20px 0; }
      </style></head>
      <body>${content}</body></html>`;
    const blob = new Blob(['\ufeff' + html], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title}.doc`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const extractTextFromElement = (el: Element | null): string => {
    if (!el) return '';
    const clone = el.cloneNode(true) as Element;
    // 移除按鈕等互動元素
    clone.querySelectorAll('button, [data-highlight-id]').forEach(b => b.remove());
    return clone.innerHTML;
  };

  const handleExportChapter = () => {
    if (!book) return;
    // 先全展開所有摺疊區塊，等 DOM 更新後再抓取內容
    const wasExpanded = expandAll;
    if (!wasExpanded) {
      setExpandAll(true);
      // 等待 React re-render + framer-motion 動畫完成
      setTimeout(() => {
        doExportChapter();
        setExpandAll(false);
      }, 600);
    } else {
      doExportChapter();
    }
  };

  const doExportChapter = () => {
    if (!book) return;
    const main = document.querySelector('main');
    const chapterLabel = book.chapters.find((c: any) => c.id === activeChapter)?.label || activeChapter;
    const content = extractTextFromElement(main);
    const title = `${book.title}－${chapterLabel}`;
    exportToWord(title, `<h1>${title}</h1>${content}`);
  };

  const handleExportBook = () => {
    if (!book) return;
    const confirmed = window.confirm(`即將匯出《${book.title}》全書內容為 Word 檔，確定嗎？`);
    if (!confirmed) return;
    const wasExpanded = expandAll;
    if (!wasExpanded) {
      setExpandAll(true);
      setTimeout(() => {
        doExportBook();
        setExpandAll(false);
      }, 600);
    } else {
      doExportBook();
    }
  };

  const doExportBook = () => {
    if (!book) return;
    const main = document.querySelector('main');
    const content = extractTextFromElement(main);
    const chapterLabel = book.chapters.find((c: any) => c.id === activeChapter)?.label || activeChapter;
    let fullContent = `<h1>${book.title}</h1><p style="color:#888;">${book.subtitle}</p><div class="divider"></div>`;
    fullContent += `<h2>${chapterLabel}</h2>${content}`;
    fullContent += `<div class="divider"></div><p style="color:#aaa;text-align:center;">※ 如需匯出其他章節，請切換到該章節後使用「匯出本章」功能</p>`;
    exportToWord(book.title, fullContent);
  };

  // ── Book List (home) ─────────────────────────────────────────────
  if (!selectedBook) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <header className="bg-white border-b border-slate-200 px-6 py-4 shadow-sm">
          <div className="flex items-center justify-between max-w-lg mx-auto">
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-indigo-500" />
              <h1 className="text-xl font-bold text-slate-800">電子書房</h1>
            </div>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="text-xs text-slate-400 hover:text-slate-600 px-3 py-1.5 rounded-full border border-slate-200 hover:border-slate-300 transition-colors"
              >
                ✏️ 登出畫重點
              </button>
            ) : (
              <button
                onClick={() => setShowLogin(true)}
                className="text-xs text-indigo-600 hover:text-indigo-700 px-3 py-1.5 rounded-full border border-indigo-200 hover:border-indigo-300 transition-colors font-medium"
              >
                ✏️ 登入畫重點
              </button>
            )}
          </div>
          <p className="text-xs text-slate-400 text-center mt-1">選擇一本書開始閱讀</p>
        </header>

        {/* Login Modal */}
        {showLogin && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl">
              <h2 className="text-lg font-bold text-slate-800 mb-1">登入畫重點功能</h2>
              <p className="text-xs text-slate-400 mb-4">使用你的小組帳號登入</p>
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-medium text-slate-600 mb-1 block">帳號（電話號碼）</label>
                  <input
                    type="text"
                    value={loginPhone}
                    onChange={e => setLoginPhone(e.target.value)}
                    placeholder="輸入電話號碼"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-indigo-400"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-600 mb-1 block">密碼</label>
                  <input
                    type="password"
                    value={loginPwd}
                    onChange={e => setLoginPwd(e.target.value)}
                    placeholder="輸入密碼"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-indigo-400"
                    onKeyDown={e => e.key === 'Enter' && handleLogin()}
                  />
                </div>
                {loginMsg && <p className="text-xs text-red-500">{loginMsg}</p>}
                <button
                  onClick={handleLogin}
                  disabled={loginLoading}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg text-sm transition-colors disabled:opacity-60"
                >
                  {loginLoading ? '登入中...' : '登入'}
                </button>
                <button
                  onClick={() => { setShowLogin(false); setLoginMsg(''); }}
                  className="w-full text-slate-400 hover:text-slate-600 text-sm py-1 transition-colors"
                >
                  取消
                </button>
              </div>
            </div>
          </div>
        )}

        <main className="flex-1 p-6 max-w-lg mx-auto w-full">
          <div className="flex flex-col gap-4 mt-4">
            {BOOKS.map(b => (
              <motion.button
                key={b.id}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleSelectBook(b.id)}
                className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex items-center gap-4 text-left hover:shadow-md transition-shadow w-full"
              >
                <span className="text-4xl flex-shrink-0">{b.emoji}</span>
                <div>
                  <div className="font-bold text-slate-800 text-base">{b.title}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{b.subtitle}</div>
                  <div className="text-xs mt-1.5 font-medium" style={{ color: b.accentHex }}>
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

  // ── Reader ───────────────────────────────────────────────────────
  const parts = Array.from(new Set(book!.chapters.map((c: any) => c.part)));

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col">

      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-slate-100 px-4 py-3 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setSelectedBook(null)}
            className="text-slate-400 hover:text-slate-700 p-1.5 rounded-md"
            title="返回書單"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="text-sm font-bold text-slate-800 truncate max-w-[200px]">{book!.title}</span>
        </div>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold transition-all"
          style={{
            background: isSidebarOpen
              ? 'linear-gradient(135deg,#6366f1,#4338ca)'
              : 'linear-gradient(135deg,#f1f5f9,#e2e8f0)',
            color: isSidebarOpen ? 'white' : '#475569',
            boxShadow: isSidebarOpen ? '0 2px 8px rgba(99,102,241,0.4)' : '0 1px 3px rgba(0,0,0,0.1)',
          }}
          title="目錄"
        >
          {isSidebarOpen
            ? <><X className="h-4 w-4" /><span>關閉</span></>
            : <><Menu className="h-4 w-4" /><span>目錄</span></>
          }
        </button>
        {isLoggedIn && (
          <span className="text-xs text-indigo-400 font-medium hidden sm:block">✏️ 畫重點已啟用</span>
        )}
        {!isLoggedIn && (
          <button
            onClick={() => setShowLogin(true)}
            className="text-xs text-indigo-600 px-2.5 py-1 rounded-full border border-indigo-200 font-medium"
          >✏️ 登入</button>
        )}

        {/* Login Modal in reader */}
        {showLogin && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl">
              <h2 className="text-lg font-bold text-slate-800 mb-1">登入畫重點功能</h2>
              <p className="text-xs text-slate-400 mb-4">使用你的小組帳號登入</p>
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-medium text-slate-600 mb-1 block">帳號（電話號碼）</label>
                  <input
                    type="text"
                    value={loginPhone}
                    onChange={e => setLoginPhone(e.target.value)}
                    placeholder="輸入電話號碼"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-indigo-400"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-600 mb-1 block">密碼</label>
                  <input
                    type="password"
                    value={loginPwd}
                    onChange={e => setLoginPwd(e.target.value)}
                    placeholder="輸入密碼"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-indigo-400"
                    onKeyDown={e => e.key === 'Enter' && handleLogin()}
                  />
                </div>
                {loginMsg && <p className="text-xs text-red-500">{loginMsg}</p>}
                <button
                  onClick={handleLogin}
                  disabled={loginLoading}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg text-sm transition-colors disabled:opacity-60"
                >
                  {loginLoading ? '登入中...' : '登入'}
                </button>
                <button
                  onClick={() => { setShowLogin(false); setLoginMsg(''); }}
                  className="w-full text-slate-400 hover:text-slate-600 text-sm py-1 transition-colors"
                >
                  取消
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Slide-down TOC — all devices */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white border-b border-slate-200 overflow-hidden sticky top-14 z-40 max-h-[70vh] overflow-y-auto shadow-lg"
          >
            <div className="px-4 py-4 space-y-5">
              {parts.map(part => (
                <div key={part as string}>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{part as string}</h4>
                  <div className="space-y-1">
                    {book!.chapters.filter((c: any) => c.part === part).map((ch: any) => (
                      <button
                        key={ch.id}
                        onClick={() => handleChapterClick(ch.id)}
                        className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium flex items-center gap-3 transition-colors ${
                          activeChapter === ch.id
                            ? `${book!.bgLight} ${book!.textAccent}`
                            : `text-slate-600 hover:bg-slate-50 ${book!.hoverText}`
                        }`}
                      >
                        <ch.icon className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">
                          {ch.label}
                          {ch.page && <span className="text-xs opacity-60 ml-1">{ch.page}</span>}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              {/* 匯出全書按鈕 */}
              <button
                onClick={() => { setIsSidebarOpen(false); handleExportBook(); }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 mt-2 rounded-lg text-sm font-semibold text-white transition-colors"
                style={{ background: book!.accentHex }}
              >
                <Download className="w-4 h-4" />
                匯出全書 Word 檔
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <main className="flex-1 p-4 md:p-8 lg:p-12 max-w-4xl mx-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedBook + activeChapter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {renderContent()}
            {/* 全展開/摺疊 + 匯出本章按鈕 */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setExpandAll(!expandAll)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border-2 shadow-sm hover:shadow-md transition-all"
                style={{ borderColor: book!.accentHex, color: expandAll ? '#fff' : book!.accentHex, background: expandAll ? book!.accentHex : 'transparent' }}
              >
                {expandAll ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                {expandAll ? '全部摺疊' : '全部展開'}
              </button>
              <button
                onClick={handleExportChapter}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all"
                style={{ background: book!.accentHex }}
              >
                <Download className="w-4 h-4" />
                匯出本章 Word 檔
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Highlight Toolbar */}
      {toolbar && isLoggedIn && (
        <div
          ref={toolbarRef}
          style={{
            position: 'absolute',
            left: `${toolbar.x}px`,
            top: `${toolbar.y}px`,
            transform: 'translate(-50%, -100%)',
            zIndex: 9999,
          }}
          className="flex items-center gap-1 bg-slate-800 rounded-xl shadow-2xl px-2 py-1.5 border border-slate-600"
        >
          {/* Yellow highlight */}
          <button
            onClick={() => handleHighlight('yellow')}
            className="w-7 h-7 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
            style={{ backgroundColor: '#fef08a' }}
            title="螢光底色"
          >🖍</button>
          {/* Red text */}
          <button
            onClick={() => handleHighlight('red')}
            className="w-7 h-7 rounded-lg flex items-center justify-center hover:scale-110 transition-transform font-bold text-sm"
            style={{ backgroundColor: '#fee2e2', color: '#dc2626' }}
            title="紅色文字"
          >A</button>
          {/* Blue text */}
          <button
            onClick={() => handleHighlight('blue')}
            className="w-7 h-7 rounded-lg flex items-center justify-center hover:scale-110 transition-transform font-bold text-sm"
            style={{ backgroundColor: '#dbeafe', color: '#2563eb' }}
            title="藍色文字"
          >A</button>
          {/* Bold */}
          <button
            onClick={() => handleHighlight('bold')}
            className="w-7 h-7 rounded-lg flex items-center justify-center hover:scale-110 transition-transform font-black text-sm"
            style={{ backgroundColor: '#f1f5f9', color: '#1e293b' }}
            title="粗體"
          >B</button>
          {/* Underline */}
          <button
            onClick={() => handleHighlight('underline')}
            className="w-7 h-7 rounded-lg flex items-center justify-center hover:scale-110 transition-transform text-sm"
            style={{ backgroundColor: '#f1f5f9', color: '#475569', textDecoration: 'underline', textUnderlineOffset: '2px' }}
            title="底線"
          >U</button>
          {/* Divider */}
          <div className="w-px h-5 bg-slate-600 mx-0.5" />
          {/* Clear */}
          <button
            className="w-7 h-7 rounded-lg flex items-center justify-center hover:scale-110 transition-transform text-xs"
            style={{ backgroundColor: '#fee2e2', color: '#dc2626' }}
            title="移除畫線"
            onClick={async () => {
              const existing = getHighlightByText(toolbar.text);
              if (existing) { await removeHighlight(existing.id); setTimeout(() => applyHighlights(), 200); }
              setToolbar(null); window.getSelection()?.removeAllRanges();
            }}
          >✕</button>
        </div>
      )}

      <footer className="bg-white border-t border-slate-200 py-6 mt-auto">
        <div className="max-w-4xl mx-auto px-4 text-center text-slate-400 text-xs">
          {book!.title}・{book!.subtitle}
        </div>
      </footer>
    </div>
  );
}
