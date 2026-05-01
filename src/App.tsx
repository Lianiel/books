import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Book } from 'lucide-react';
import BookLayout from './components/BookLayout';

// ========== TypeScript 型別定義 ==========

interface BookCardProps {
  number: number;
  title: string;
  author: string;
  description: string;
  chapters: number;
  to: string;
  color?: string;
}

// ========== 導入 Book 1 章節 ==========
import Book1Home from './components/book1/SectionHome';
import Book1Definition from './components/book1/SectionDefinition';
import Book1Development from './components/book1/SectionDevelopment';
import Book1Myths from './components/book1/SectionMyths';
import Book1Diagnosis from './components/book1/SectionDiagnosis';
import Book1Laws from './components/book1/SectionLaws';
import Book1Ch7 from './components/book1/SectionCh7';
import Book1Ch8 from './components/book1/SectionCh8';
import Book1Ch9 from './components/book1/SectionCh9';
import Book1Ch10 from './components/book1/SectionCh10';
import Book1Ch11 from './components/book1/SectionCh11';
import Book1Ch12 from './components/book1/SectionCh12';
import Book1Ch13 from './components/book1/SectionCh13';
import Book1Ch14 from './components/book1/SectionCh14';
import Book1Ch15 from './components/book1/SectionCh15';
import Book1Ch16 from './components/book1/SectionCh16';
import Book1Ch17 from './components/book1/SectionCh17';

// ========== 導入 Book 2 章節 ==========
import Book2Ch1 from './components/book2/Chapter1';
import Book2Ch2 from './components/book2/Chapter2';
import Book2Ch3 from './components/book2/Chapter3';
import Book2Ch4 from './components/book2/Chapter4';
import Book2Ch5 from './components/book2/Chapter5';
import Book2Ch6 from './components/book2/Chapter6';
import Book2Ch7 from './components/book2/Chapter7';
import Book2Ch8 from './components/book2/Chapter8';

// ========== 導入 Book 3 章節 ==========
import Book3Ch1 from './components/book3/Chapter1';
import Book3Ch2 from './components/book3/Chapter2';
import Book3Ch3 from './components/book3/Chapter3';
import Book3Ch4 from './components/book3/Chapter4';
import Book3Ch5 from './components/book3/Chapter5';
import Book3Ch6 from './components/book3/Chapter6';
import Book3Ch7 from './components/book3/Chapter7';
import Book3Ch8 from './components/book3/Chapter8';

// ========== 導入 Book 4 章節 ==========
import Book4Ch1 from './components/book4/Chapter1';
import Book4Ch2 from './components/book4/Chapter2';
import Book4Ch3 from './components/book4/Chapter3';
import Book4Ch4 from './components/book4/Chapter4';
import Book4Ch5 from './components/book4/Chapter5';
import Book4Ch6 from './components/book4/Chapter6';
import Book4Ch7 from './components/book4/Chapter7';
import Book4Ch8 from './components/book4/Chapter8';
import Book4Ch9 from './components/book4/Chapter9';
import Book4Ch10 from './components/book4/Chapter10';
import Book4Ch11 from './components/book4/Chapter11';
import Book4Ch12 from './components/book4/Chapter12';
import Book4Ch13 from './components/book4/Chapter13';
import Book4Ch14 from './components/book4/Chapter14';
import Book4Ch15 from './components/book4/Chapter15';
import Book4Ch16 from './components/book4/Chapter16';

// ========== 導入 Book 5 章節 ==========
import Book5Ch1 from './components/book5/Chapter1';
import Book5Ch2 from './components/book5/Chapter2';
import Book5Ch3 from './components/book5/Chapter3';
import Book5Ch4 from './components/book5/Chapter4';
import Book5Ch5 from './components/book5/Chapter5';
import Book5Ch6 from './components/book5/Chapter6';

// ========== 導入 Book 6 章節 ==========
import Book6Ch1 from './components/book6/Chapter1';
import Book6Ch2 from './components/book6/Chapter2';
import Book6Ch3 from './components/book6/Chapter3';
import Book6Ch4 from './components/book6/Chapter4';
import Book6Ch5 from './components/book6/Chapter5';
import Book6Ch6 from './components/book6/Chapter6';
import Book6Ch7 from './components/book6/Chapter7';
import Book6Ch8 from './components/book6/Chapter8';

// ========== 導入 Book 7 章節 ==========
import Book7Ch1 from './components/book7/Chapter1';
import Book7Ch2 from './components/book7/Chapter2';
import Book7Ch3 from './components/book7/Chapter3';
import Book7Ch4 from './components/book7/Chapter4';
import Book7Ch5 from './components/book7/Chapter5';
import Book7Ch6 from './components/book7/Chapter6';

// ========== 導入 Book 8 章節 ==========
import Book8Ch1 from './components/book8/Chapter1';
import Book8Ch2 from './components/book8/Chapter2';
import Book8Ch3 from './components/book8/Chapter3';
import Book8Ch4 from './components/book8/Chapter4';
import Book8Ch5 from './components/book8/Chapter5';
import Book8Ch6 from './components/book8/Chapter6';
import Book8Ch7 from './components/book8/Chapter7';
import Book8Ch8 from './components/book8/Chapter8';
import Book8Ch9 from './components/book8/Chapter9';
import Book8Ch10 from './components/book8/Chapter10';
import Book8Ch11 from './components/book8/Chapter11';
import Book8Ch12 from './components/book8/Chapter12';

// ========== 導入 Book 9 章節 ==========
import Book9Intro from './components/book9/Intro';
import Book9Ch1 from './components/book9/Chapter1';
import Book9Ch2 from './components/book9/Chapter2';
import Book9Ch3 from './components/book9/Chapter3';
import Book9Ch4 from './components/book9/Chapter4';
import Book9Ch5 from './components/book9/Chapter5';
import Book9Ch6 from './components/book9/Chapter6';

// ========== 導入 Book 10 章節 ==========
import Book10Ch1 from './components/book10/Chapter1';
import Book10Ch2 from './components/book10/Chapter2';
import Book10Ch3 from './components/book10/Chapter3';
import Book10Ch4 from './components/book10/Chapter4';
import Book10Ch5 from './components/book10/Chapter5';
import Book10Ch6 from './components/book10/Chapter6';
import Book10Ch7 from './components/book10/Chapter7';
import Book10Ch8 from './components/book10/Chapter8';
import Book10Ch9 from './components/book10/Chapter9';

// ========== 導入 Book 11 章節 ==========
import Book11Lesson1 from './components/book11/Lesson1';

// BookCard 組件
const BookCard: React.FC<BookCardProps> = ({ 
  number, 
  title, 
  author, 
  description, 
  chapters, 
  to, 
  color = "from-blue-500 to-purple-600" 
}) => {
  return (
    <Link to={to} className="block">
      <div className={`bg-gradient-to-br ${color} rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300`}>
        <div className="flex items-start justify-between mb-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center">
            <Book className="w-6 h-6" />
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold">
            Book {number}
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-white/80 mb-3">{author}</p>
        <p className="text-sm text-white/90 mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between text-sm">
          <span className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
            {chapters} {chapters > 1 ? 'chapters' : 'lesson'}
          </span>
          <span className="font-semibold">閱讀 →</span>
        </div>
      </div>
    </Link>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* ========== Book 1 - 立界線得自由 ========== */}
        <Route path="/book1/home" element={<BookLayout bookId="book1" chapter="home"><Book1Home /></BookLayout>} />
        <Route path="/book1/definition" element={<BookLayout bookId="book1" chapter="definition"><Book1Definition /></BookLayout>} />
        <Route path="/book1/development" element={<BookLayout bookId="book1" chapter="development"><Book1Development /></BookLayout>} />
        <Route path="/book1/myths" element={<BookLayout bookId="book1" chapter="myths"><Book1Myths /></BookLayout>} />
        <Route path="/book1/diagnosis" element={<BookLayout bookId="book1" chapter="diagnosis"><Book1Diagnosis /></BookLayout>} />
        <Route path="/book1/laws" element={<BookLayout bookId="book1" chapter="laws"><Book1Laws /></BookLayout>} />
        <Route path="/book1/ch7" element={<BookLayout bookId="book1" chapter="ch7"><Book1Ch7 /></BookLayout>} />
        <Route path="/book1/ch8" element={<BookLayout bookId="book1" chapter="ch8"><Book1Ch8 /></BookLayout>} />
        <Route path="/book1/ch9" element={<BookLayout bookId="book1" chapter="ch9"><Book1Ch9 /></BookLayout>} />
        <Route path="/book1/ch10" element={<BookLayout bookId="book1" chapter="ch10"><Book1Ch10 /></BookLayout>} />
        <Route path="/book1/ch11" element={<BookLayout bookId="book1" chapter="ch11"><Book1Ch11 /></BookLayout>} />
        <Route path="/book1/ch12" element={<BookLayout bookId="book1" chapter="ch12"><Book1Ch12 /></BookLayout>} />
        <Route path="/book1/ch13" element={<BookLayout bookId="book1" chapter="ch13"><Book1Ch13 /></BookLayout>} />
        <Route path="/book1/ch14" element={<BookLayout bookId="book1" chapter="ch14"><Book1Ch14 /></BookLayout>} />
        <Route path="/book1/ch15" element={<BookLayout bookId="book1" chapter="ch15"><Book1Ch15 /></BookLayout>} />
        <Route path="/book1/ch16" element={<BookLayout bookId="book1" chapter="ch16"><Book1Ch16 /></BookLayout>} />
        <Route path="/book1/ch17" element={<BookLayout bookId="book1" chapter="ch17"><Book1Ch17 /></BookLayout>} />
        {/* Book 1 首頁入口 */}
        <Route path="/book1" element={<BookLayout bookId="book1" chapter="home"><Book1Home /></BookLayout>} />

        {/* ========== Book 2 - 情感健康的門徒 ========== */}
        <Route path="/book2/chapter1" element={<BookLayout bookId="book2" chapter="chapter1"><Book2Ch1 /></BookLayout>} />
        <Route path="/book2/chapter2" element={<BookLayout bookId="book2" chapter="chapter2"><Book2Ch2 /></BookLayout>} />
        <Route path="/book2/chapter3" element={<BookLayout bookId="book2" chapter="chapter3"><Book2Ch3 /></BookLayout>} />
        <Route path="/book2/chapter4" element={<BookLayout bookId="book2" chapter="chapter4"><Book2Ch4 /></BookLayout>} />
        <Route path="/book2/chapter5" element={<BookLayout bookId="book2" chapter="chapter5"><Book2Ch5 /></BookLayout>} />
        <Route path="/book2/chapter6" element={<BookLayout bookId="book2" chapter="chapter6"><Book2Ch6 /></BookLayout>} />
        <Route path="/book2/chapter7" element={<BookLayout bookId="book2" chapter="chapter7"><Book2Ch7 /></BookLayout>} />
        <Route path="/book2/chapter8" element={<BookLayout bookId="book2" chapter="chapter8"><Book2Ch8 /></BookLayout>} />

        {/* ========== Book 3 - 你可以更靠近神 ========== */}
        <Route path="/book3/chapter1" element={<BookLayout bookId="book3" chapter="chapter1"><Book3Ch1 /></BookLayout>} />
        <Route path="/book3/chapter2" element={<BookLayout bookId="book3" chapter="chapter2"><Book3Ch2 /></BookLayout>} />
        <Route path="/book3/chapter3" element={<BookLayout bookId="book3" chapter="chapter3"><Book3Ch3 /></BookLayout>} />
        <Route path="/book3/chapter4" element={<BookLayout bookId="book3" chapter="chapter4"><Book3Ch4 /></BookLayout>} />
        <Route path="/book3/chapter5" element={<BookLayout bookId="book3" chapter="chapter5"><Book3Ch5 /></BookLayout>} />
        <Route path="/book3/chapter6" element={<BookLayout bookId="book3" chapter="chapter6"><Book3Ch6 /></BookLayout>} />
        <Route path="/book3/chapter7" element={<BookLayout bookId="book3" chapter="chapter7"><Book3Ch7 /></BookLayout>} />
        <Route path="/book3/chapter8" element={<BookLayout bookId="book3" chapter="chapter8"><Book3Ch8 /></BookLayout>} />
        {/* Book 3 首頁入口 */}
        <Route path="/book3" element={<BookLayout bookId="book3" chapter="chapter1"><Book3Ch1 /></BookLayout>} />

        {/* ========== Book 4 - 成為有感染力的基督徒 ========== */}
        <Route path="/book4/chapter1" element={<BookLayout bookId="book4" chapter="chapter1"><Book4Ch1 /></BookLayout>} />
        <Route path="/book4/chapter2" element={<BookLayout bookId="book4" chapter="chapter2"><Book4Ch2 /></BookLayout>} />
        <Route path="/book4/chapter3" element={<BookLayout bookId="book4" chapter="chapter3"><Book4Ch3 /></BookLayout>} />
        <Route path="/book4/chapter4" element={<BookLayout bookId="book4" chapter="chapter4"><Book4Ch4 /></BookLayout>} />
        <Route path="/book4/chapter5" element={<BookLayout bookId="book4" chapter="chapter5"><Book4Ch5 /></BookLayout>} />
        <Route path="/book4/chapter6" element={<BookLayout bookId="book4" chapter="chapter6"><Book4Ch6 /></BookLayout>} />
        <Route path="/book4/chapter7" element={<BookLayout bookId="book4" chapter="chapter7"><Book4Ch7 /></BookLayout>} />
        <Route path="/book4/chapter8" element={<BookLayout bookId="book4" chapter="chapter8"><Book4Ch8 /></BookLayout>} />
        <Route path="/book4/chapter9" element={<BookLayout bookId="book4" chapter="chapter9"><Book4Ch9 /></BookLayout>} />
        <Route path="/book4/chapter10" element={<BookLayout bookId="book4" chapter="chapter10"><Book4Ch10 /></BookLayout>} />
        <Route path="/book4/chapter11" element={<BookLayout bookId="book4" chapter="chapter11"><Book4Ch11 /></BookLayout>} />
        <Route path="/book4/chapter12" element={<BookLayout bookId="book4" chapter="chapter12"><Book4Ch12 /></BookLayout>} />
        <Route path="/book4/chapter13" element={<BookLayout bookId="book4" chapter="chapter13"><Book4Ch13 /></BookLayout>} />
        <Route path="/book4/chapter14" element={<BookLayout bookId="book4" chapter="chapter14"><Book4Ch14 /></BookLayout>} />
        <Route path="/book4/chapter15" element={<BookLayout bookId="book4" chapter="chapter15"><Book4Ch15 /></BookLayout>} />
        <Route path="/book4/chapter16" element={<BookLayout bookId="book4" chapter="chapter16"><Book4Ch16 /></BookLayout>} />
        {/* Book 4 首頁入口 */}
        <Route path="/book4" element={<BookLayout bookId="book4" chapter="chapter1"><Book4Ch1 /></BookLayout>} />

        {/* ========== Book 5 - 如何活出基督的樣式 ========== */}
        <Route path="/book5/chapter1" element={<BookLayout bookId="book5" chapter="chapter1"><Book5Ch1 /></BookLayout>} />
        <Route path="/book5/chapter2" element={<BookLayout bookId="book5" chapter="chapter2"><Book5Ch2 /></BookLayout>} />
        <Route path="/book5/chapter3" element={<BookLayout bookId="book5" chapter="chapter3"><Book5Ch3 /></BookLayout>} />
        <Route path="/book5/chapter4" element={<BookLayout bookId="book5" chapter="chapter4"><Book5Ch4 /></BookLayout>} />
        <Route path="/book5/chapter5" element={<BookLayout bookId="book5" chapter="chapter5"><Book5Ch5 /></BookLayout>} />
        <Route path="/book5/chapter6" element={<BookLayout bookId="book5" chapter="chapter6"><Book5Ch6 /></BookLayout>} />
        {/* Book 5 首頁入口 */}
        <Route path="/book5" element={<BookLayout bookId="book5" chapter="chapter1"><Book5Ch1 /></BookLayout>} />

        {/* ========== Book 6 - 向保羅學宣教 ========== */}
        <Route path="/book6/chapter1" element={<BookLayout bookId="book6" chapter="chapter1"><Book6Ch1 /></BookLayout>} />
        <Route path="/book6/chapter2" element={<BookLayout bookId="book6" chapter="chapter2"><Book6Ch2 /></BookLayout>} />
        <Route path="/book6/chapter3" element={<BookLayout bookId="book6" chapter="chapter3"><Book6Ch3 /></BookLayout>} />
        <Route path="/book6/chapter4" element={<BookLayout bookId="book6" chapter="chapter4"><Book6Ch4 /></BookLayout>} />
        <Route path="/book6/chapter5" element={<BookLayout bookId="book6" chapter="chapter5"><Book6Ch5 /></BookLayout>} />
        <Route path="/book6/chapter6" element={<BookLayout bookId="book6" chapter="chapter6"><Book6Ch6 /></BookLayout>} />
        <Route path="/book6/chapter7" element={<BookLayout bookId="book6" chapter="chapter7"><Book6Ch7 /></BookLayout>} />
        <Route path="/book6/chapter8" element={<BookLayout bookId="book6" chapter="chapter8"><Book6Ch8 /></BookLayout>} />
        {/* Book 6 首頁入口 */}
        <Route path="/book6" element={<BookLayout bookId="book6" chapter="chapter1"><Book6Ch1 /></BookLayout>} />

        {/* ========== Book 7 - 基要陪讀課程 ========== */}
        <Route path="/book7/chapter1" element={<BookLayout bookId="book7" chapter="chapter1"><Book7Ch1 /></BookLayout>} />
        <Route path="/book7/chapter2" element={<BookLayout bookId="book7" chapter="chapter2"><Book7Ch2 /></BookLayout>} />
        <Route path="/book7/chapter3" element={<BookLayout bookId="book7" chapter="chapter3"><Book7Ch3 /></BookLayout>} />
        <Route path="/book7/chapter4" element={<BookLayout bookId="book7" chapter="chapter4"><Book7Ch4 /></BookLayout>} />
        <Route path="/book7/chapter5" element={<BookLayout bookId="book7" chapter="chapter5"><Book7Ch5 /></BookLayout>} />
        <Route path="/book7/chapter6" element={<BookLayout bookId="book7" chapter="chapter6"><Book7Ch6 /></BookLayout>} />
        {/* Book 7 首頁入口 */}
        <Route path="/book7" element={<BookLayout bookId="book7" chapter="chapter1"><Book7Ch1 /></BookLayout>} />

        {/* ========== Book 8 - 靈性關懷與身心健康 ========== */}
        <Route path="/book8/chapter1" element={<BookLayout bookId="book8" chapter="chapter1"><Book8Ch1 /></BookLayout>} />
        <Route path="/book8/chapter2" element={<BookLayout bookId="book8" chapter="chapter2"><Book8Ch2 /></BookLayout>} />
        <Route path="/book8/chapter3" element={<BookLayout bookId="book8" chapter="chapter3"><Book8Ch3 /></BookLayout>} />
        <Route path="/book8/chapter4" element={<BookLayout bookId="book8" chapter="chapter4"><Book8Ch4 /></BookLayout>} />
        <Route path="/book8/chapter5" element={<BookLayout bookId="book8" chapter="chapter5"><Book8Ch5 /></BookLayout>} />
        <Route path="/book8/chapter6" element={<BookLayout bookId="book8" chapter="chapter6"><Book8Ch6 /></BookLayout>} />
        <Route path="/book8/chapter7" element={<BookLayout bookId="book8" chapter="chapter7"><Book8Ch7 /></BookLayout>} />
        <Route path="/book8/chapter8" element={<BookLayout bookId="book8" chapter="chapter8"><Book8Ch8 /></BookLayout>} />
        <Route path="/book8/chapter9" element={<BookLayout bookId="book8" chapter="chapter9"><Book8Ch9 /></BookLayout>} />
        <Route path="/book8/chapter10" element={<BookLayout bookId="book8" chapter="chapter10"><Book8Ch10 /></BookLayout>} />
        <Route path="/book8/chapter11" element={<BookLayout bookId="book8" chapter="chapter11"><Book8Ch11 /></BookLayout>} />
        <Route path="/book8/chapter12" element={<BookLayout bookId="book8" chapter="chapter12"><Book8Ch12 /></BookLayout>} />
        {/* Book 8 首頁入口 */}
        <Route path="/book8" element={<BookLayout bookId="book8" chapter="chapter1"><Book8Ch1 /></BookLayout>} />

        {/* ========== Book 9 - 三層天禱告 ========== */}
        <Route path="/book9/intro" element={<BookLayout bookId="book9" chapter="intro"><Book9Intro /></BookLayout>} />
        <Route path="/book9/chapter1" element={<BookLayout bookId="book9" chapter="chapter1"><Book9Ch1 /></BookLayout>} />
        <Route path="/book9/chapter2" element={<BookLayout bookId="book9" chapter="chapter2"><Book9Ch2 /></BookLayout>} />
        <Route path="/book9/chapter3" element={<BookLayout bookId="book9" chapter="chapter3"><Book9Ch3 /></BookLayout>} />
        <Route path="/book9/chapter4" element={<BookLayout bookId="book9" chapter="chapter4"><Book9Ch4 /></BookLayout>} />
        <Route path="/book9/chapter5" element={<BookLayout bookId="book9" chapter="chapter5"><Book9Ch5 /></BookLayout>} />
        <Route path="/book9/chapter6" element={<BookLayout bookId="book9" chapter="chapter6"><Book9Ch6 /></BookLayout>} />
        {/* Book 9 首頁入口 */}
        <Route path="/book9" element={<BookLayout bookId="book9" chapter="intro"><Book9Intro /></BookLayout>} />

        {/* ========== Book 10 - 禱告的盾牌 ========== */}
        <Route path="/book10/chapter1" element={<BookLayout bookId="book10" chapter="chapter1"><Book10Ch1 /></BookLayout>} />
        <Route path="/book10/chapter2" element={<BookLayout bookId="book10" chapter="chapter2"><Book10Ch2 /></BookLayout>} />
        <Route path="/book10/chapter3" element={<BookLayout bookId="book10" chapter="chapter3"><Book10Ch3 /></BookLayout>} />
        <Route path="/book10/chapter4" element={<BookLayout bookId="book10" chapter="chapter4"><Book10Ch4 /></BookLayout>} />
        <Route path="/book10/chapter5" element={<BookLayout bookId="book10" chapter="chapter5"><Book10Ch5 /></BookLayout>} />
        <Route path="/book10/chapter6" element={<BookLayout bookId="book10" chapter="chapter6"><Book10Ch6 /></BookLayout>} />
        <Route path="/book10/chapter7" element={<BookLayout bookId="book10" chapter="chapter7"><Book10Ch7 /></BookLayout>} />
        <Route path="/book10/chapter8" element={<BookLayout bookId="book10" chapter="chapter8"><Book10Ch8 /></BookLayout>} />
        <Route path="/book10/chapter9" element={<BookLayout bookId="book10" chapter="chapter9"><Book10Ch9 /></BookLayout>} />

        {/* ========== Book 11 - 從懷疑到相信 ========== */}
        <Route path="/book11/lesson1" element={<BookLayout bookId="book11" chapter="lesson1"><Book11Lesson1 /></BookLayout>} />

        {/* ========== 首頁 - 書籍列表 ========== */}
        <Route path="/" element={
          <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            {/* Header */}
            <div className="bg-white shadow-md sticky top-0 z-10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center gap-3">
                  <Book className="w-8 h-8 text-blue-600" />
                  <h1 className="text-2xl font-bold text-gray-900">電子書房</h1>
                </div>
              </div>
            </div>

            {/* 書籍網格 */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Book 1 - 立界線得自由 */}
                <BookCard
                  number={1}
                  title="立界線得自由"
                  author="克勞德博士 & 湯森德博士"
                  description="學習在人際關係中建立健康的界線，活出自由豐盛的生命"
                  chapters={17}
                  to="/book1"
                  color="from-blue-500 to-cyan-600"
                />

                {/* Book 2 - 情感健康的門徒 */}
                <BookCard
                  number={2}
                  title="情感健康的門徒"
                  author="彼得·史卡吉羅"
                  description="整合情感健康與靈命成長，成為成熟的門徒"
                  chapters={8}
                  to="/book2/chapter1"
                  color="from-green-500 to-emerald-600"
                />

                {/* Book 3 - 你可以更靠近神 */}
                <BookCard
                  number={3}
                  title="你可以更靠近神"
                  author="作者名稱"
                  description="探索與神建立更深關係的途徑"
                  chapters={8}
                  to="/book3"
                  color="from-purple-500 to-pink-600"
                />

                {/* Book 4 - 成為有感染力的基督徒 */}
                <BookCard
                  number={4}
                  title="成為有感染力的基督徒"
                  author="比爾·海波斯 & 馬克·米德堡"
                  description="學習在日常生活中自然地分享信仰"
                  chapters={16}
                  to="/book4"
                  color="from-orange-500 to-red-600"
                />

                {/* Book 5 - 如何活出基督的樣式 */}
                <BookCard
                  number={5}
                  title="如何活出基督的樣式"
                  author="作者名稱"
                  description="六週靈修課程，學習效法基督的生命"
                  chapters={6}
                  to="/book5"
                  color="from-teal-500 to-cyan-600"
                />

                {/* Book 6 - 向保羅學宣教 */}
                <BookCard
                  number={6}
                  title="向保羅學宣教"
                  author="作者名稱"
                  description="從使徒保羅的宣教旅程學習福音策略"
                  chapters={8}
                  to="/book6"
                  color="from-indigo-500 to-purple-600"
                />

                {/* Book 7 - 基要陪讀課程 */}
                <BookCard
                  number={7}
                  title="基要陪讀課程"
                  author="作者名稱"
                  description="系統化的聖經陪讀教材"
                  chapters={6}
                  to="/book7"
                  color="from-amber-500 to-orange-600"
                />

                {/* Book 8 - 靈性關懷與身心健康 */}
                <BookCard
                  number={8}
                  title="靈性關懷與身心健康"
                  author="作者名稱"
                  description="整合靈性、心理與身體的全人關懷"
                  chapters={12}
                  to="/book8"
                  color="from-rose-500 to-pink-600"
                />

                {/* Book 9 - 三層天禱告 */}
                <BookCard
                  number={9}
                  title="三層天禱告"
                  author="作者名稱"
                  description="進入更深層次的禱告生活"
                  chapters={7}
                  to="/book9"
                  color="from-violet-500 to-purple-600"
                />

                {/* Book 10 - 禱告的盾牌 */}
                <BookCard
                  number={10}
                  title="禱告的盾牌"
                  author="C. Peter Wagner"
                  description="建立代禱團隊，為屬靈爭戰禱告"
                  chapters={9}
                  to="/book10/chapter1"
                  color="from-purple-500 to-pink-600"
                />

                {/* Book 11 - 從懷疑到相信 */}
                <BookCard
                  number={11}
                  title="從懷疑到相信"
                  author="姜文琪 姊妹"
                  description="帶領未信者認識神的福音課程"
                  chapters={1}
                  to="/book11/lesson1"
                  color="from-indigo-500 to-purple-600"
                />

              </div>
            </div>

            {/* Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-gray-600">
              <p className="text-sm">電子書房 · 數位靈修學習平台</p>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;
