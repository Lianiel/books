import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Book } from 'lucide-react';
import { useState, useEffect } from 'react';
import BookLayout from './components/BookLayout';
import { fetchBooks, fetchChapters, type Book as BookType, type Chapter } from './api/books_supabase';

// ========== TypeScript 型別定義 ==========

interface BookCardProps {
  number: number;
  title: string;
  author?: string;
  description?: string;
  chapters: number;
  to: string;
  color?: string;
}

export interface ChapterInfo {
  id: string;
  title: string;
  path: string;
}

// ========== 向後兼容：匯出空的 BOOK_TITLES 和 BOOK_CHAPTERS （已遷移到 Supabase）==========
export const BOOK_TITLES: Record<string, string> = {};
export const BOOK_CHAPTERS: Record<string, ChapterInfo[]> = {};

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

// ========== 導入 Book 12 章節 ==========
import Book12Home from './components/book12/Book12Home';

// ========== 導入 Book 13 章節 ==========
import Book13Ch1 from './components/book13/Chapter1';
import Book13Ch2 from './components/book13/Chapter2';
import Book13Ch3 from './components/book13/Chapter3';
import Book13Ch4 from './components/book13/Chapter4';
import Book13Ch5 from './components/book13/Chapter5';
import Book13Ch6 from './components/book13/Chapter6';
import Book13Ch7 from './components/book13/Chapter7';

// ========== 導入 Book 14 章節 ==========
import Book14Ch1 from './components/book14/Book14Ch1';
import Book14Ch2 from './components/book14/Book14Ch2';
import Book14Ch3 from './components/book14/Book14Ch3';
import Book14Ch4 from './components/book14/Book14Ch4';
import Book14Ch5 from './components/book14/Book14Ch5';
import Book14Ch6 from './components/book14/Book14Ch6';
import Book14Ch7 from './components/book14/Book14Ch7';
import Book14Ch8 from './components/book14/Book14Ch8';
import Book14Ch9 from './components/book14/Book14Ch9';

// ========== 導入 Book 15 章節 ==========
import Book15Home from './components/book15/Book15Home';
import Book15Ch1 from './components/book15/Book15Ch1';
import Book15Ch2 from './components/book15/Book15Ch2';
import Book15Ch3 from './components/book15/Book15Ch3';
import Book15Ch4 from './components/book15/Book15Ch4';
import Book15Ch5 from './components/book15/Book15Ch5';
import Book15Ch6 from './components/book15/Book15Ch6';
import Book15Ch7 from './components/book15/Book15Ch7';
import Book15Ch8 from './components/book15/Book15Ch8';
import Book15Ch9 from './components/book15/Book15Ch9';

// ========== 導入 Book 16 章節 ==========
import Book16Home from './components/book16/Book16Home';
import Book16Ch1 from './components/book16/Book16Ch1';
import Book16Ch2 from './components/book16/Book16Ch2';
import Book16Ch3 from './components/book16/Book16Ch3';
import Book16Ch4 from './components/book16/Book16Ch4';
import Book16Ch5 from './components/book16/Book16Ch5';
import Book16Ch6 from './components/book16/Book16Ch6';

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
  const [books, setBooks] = useState<BookType[]>([]);
  const [bookChapters, setBookChapters] = useState<Record<string, Chapter[]>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const booksData = await fetchBooks();
        setBooks(booksData);

        const chaptersMap: Record<string, Chapter[]> = {};
        for (const book of booksData) {
          const chapters = await fetchChapters(book.book_id);
          chaptersMap[book.book_id] = chapters;
        }
        setBookChapters(chaptersMap);
        setError(null);
      } catch (err) {
        console.error('Failed to load books data:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // 本地路由映射（保留向後兼容）- 轉換 Chapter[] 為 ChapterInfo[]
  const getChaptersForBook = (bookId: string): ChapterInfo[] => {
    const chapters = bookChapters[bookId] || [];
    return chapters.map(ch => ({
      id: ch.chapter_id,
      title: ch.title,
      path: `/${bookId}/${ch.chapter_id}`
    }));
  };

  return (
    <Router>
      <Routes>
        {/* ========== Book 1 - 立界線得自由 ========== */}
        <Route path="/book1/home" element={<BookLayout bookId="book1" chapter="home" chapters={getChaptersForBook('book1')}><Book1Home /></BookLayout>} />
        <Route path="/book1/definition" element={<BookLayout bookId="book1" chapter="definition" chapters={getChaptersForBook('book1')}><Book1Definition /></BookLayout>} />
        <Route path="/book1/development" element={<BookLayout bookId="book1" chapter="development" chapters={getChaptersForBook('book1')}><Book1Development /></BookLayout>} />
        <Route path="/book1/myths" element={<BookLayout bookId="book1" chapter="myths" chapters={getChaptersForBook('book1')}><Book1Myths /></BookLayout>} />
        <Route path="/book1/diagnosis" element={<BookLayout bookId="book1" chapter="diagnosis" chapters={getChaptersForBook('book1')}><Book1Diagnosis /></BookLayout>} />
        <Route path="/book1/laws" element={<BookLayout bookId="book1" chapter="laws" chapters={getChaptersForBook('book1')}><Book1Laws /></BookLayout>} />
        <Route path="/book1/ch7" element={<BookLayout bookId="book1" chapter="ch7" chapters={getChaptersForBook('book1')}><Book1Ch7 /></BookLayout>} />
        <Route path="/book1/ch8" element={<BookLayout bookId="book1" chapter="ch8" chapters={getChaptersForBook('book1')}><Book1Ch8 /></BookLayout>} />
        <Route path="/book1/ch9" element={<BookLayout bookId="book1" chapter="ch9" chapters={getChaptersForBook('book1')}><Book1Ch9 /></BookLayout>} />
        <Route path="/book1/ch10" element={<BookLayout bookId="book1" chapter="ch10" chapters={getChaptersForBook('book1')}><Book1Ch10 /></BookLayout>} />
        <Route path="/book1/ch11" element={<BookLayout bookId="book1" chapter="ch11" chapters={getChaptersForBook('book1')}><Book1Ch11 /></BookLayout>} />
        <Route path="/book1/ch12" element={<BookLayout bookId="book1" chapter="ch12" chapters={getChaptersForBook('book1')}><Book1Ch12 /></BookLayout>} />
        <Route path="/book1/ch13" element={<BookLayout bookId="book1" chapter="ch13" chapters={getChaptersForBook('book1')}><Book1Ch13 /></BookLayout>} />
        <Route path="/book1/ch14" element={<BookLayout bookId="book1" chapter="ch14" chapters={getChaptersForBook('book1')}><Book1Ch14 /></BookLayout>} />
        <Route path="/book1/ch15" element={<BookLayout bookId="book1" chapter="ch15" chapters={getChaptersForBook('book1')}><Book1Ch15 /></BookLayout>} />
        <Route path="/book1/ch16" element={<BookLayout bookId="book1" chapter="ch16" chapters={getChaptersForBook('book1')}><Book1Ch16 /></BookLayout>} />
        <Route path="/book1/ch17" element={<BookLayout bookId="book1" chapter="ch17" chapters={getChaptersForBook('book1')}><Book1Ch17 /></BookLayout>} />
        {/* Book 1 首頁入口 */}
        <Route path="/book1" element={<BookLayout bookId="book1" chapter="home" chapters={getChaptersForBook('book1')}><Book1Home /></BookLayout>} />

        {/* ========== Book 2 - 情感健康的門徒 ========== */}
        <Route path="/book2/chapter1" element={<BookLayout bookId="book2" chapter="chapter1" chapters={getChaptersForBook('book2')}><Book2Ch1 expandAll /></BookLayout>} />
        <Route path="/book2/chapter2" element={<BookLayout bookId="book2" chapter="chapter2" chapters={getChaptersForBook('book2')}><Book2Ch2 expandAll /></BookLayout>} />
        <Route path="/book2/chapter3" element={<BookLayout bookId="book2" chapter="chapter3" chapters={getChaptersForBook('book2')}><Book2Ch3 expandAll /></BookLayout>} />
        <Route path="/book2/chapter4" element={<BookLayout bookId="book2" chapter="chapter4" chapters={getChaptersForBook('book2')}><Book2Ch4 expandAll /></BookLayout>} />
        <Route path="/book2/chapter5" element={<BookLayout bookId="book2" chapter="chapter5" chapters={getChaptersForBook('book2')}><Book2Ch5 expandAll /></BookLayout>} />
        <Route path="/book2/chapter6" element={<BookLayout bookId="book2" chapter="chapter6" chapters={getChaptersForBook('book2')}><Book2Ch6 expandAll /></BookLayout>} />
        <Route path="/book2/chapter7" element={<BookLayout bookId="book2" chapter="chapter7" chapters={getChaptersForBook('book2')}><Book2Ch7 expandAll /></BookLayout>} />
        <Route path="/book2/chapter8" element={<BookLayout bookId="book2" chapter="chapter8" chapters={getChaptersForBook('book2')}><Book2Ch8 expandAll /></BookLayout>} />

        {/* ========== Book 3 - 向保羅學宣教 ========== */}
        <Route path="/book3/chapter1" element={<BookLayout bookId="book3" chapter="chapter1" chapters={getChaptersForBook('book3')}><Book3Ch1 /></BookLayout>} />
        <Route path="/book3/chapter2" element={<BookLayout bookId="book3" chapter="chapter2" chapters={getChaptersForBook('book3')}><Book3Ch2 /></BookLayout>} />
        <Route path="/book3/chapter3" element={<BookLayout bookId="book3" chapter="chapter3" chapters={getChaptersForBook('book3')}><Book3Ch3 /></BookLayout>} />
        <Route path="/book3/chapter4" element={<BookLayout bookId="book3" chapter="chapter4" chapters={getChaptersForBook('book3')}><Book3Ch4 /></BookLayout>} />
        <Route path="/book3/chapter5" element={<BookLayout bookId="book3" chapter="chapter5" chapters={getChaptersForBook('book3')}><Book3Ch5 /></BookLayout>} />
        <Route path="/book3/chapter6" element={<BookLayout bookId="book3" chapter="chapter6" chapters={getChaptersForBook('book3')}><Book3Ch6 /></BookLayout>} />
        <Route path="/book3/chapter7" element={<BookLayout bookId="book3" chapter="chapter7" chapters={getChaptersForBook('book3')}><Book3Ch7 /></BookLayout>} />
        <Route path="/book3/chapter8" element={<BookLayout bookId="book3" chapter="chapter8" chapters={getChaptersForBook('book3')}><Book3Ch8 /></BookLayout>} />
        {/* Book 3 首頁入口 */}
        <Route path="/book3" element={<BookLayout bookId="book3" chapter="chapter1" chapters={getChaptersForBook('book3')}><Book3Ch1 /></BookLayout>} />

        {/* ========== Book 4 - 成為有感染力的基督徒 ========== */}
        <Route path="/book4/chapter1" element={<BookLayout bookId="book4" chapter="chapter1" chapters={getChaptersForBook('book4')}><Book4Ch1 /></BookLayout>} />
        <Route path="/book4/chapter2" element={<BookLayout bookId="book4" chapter="chapter2" chapters={getChaptersForBook('book4')}><Book4Ch2 /></BookLayout>} />
        <Route path="/book4/chapter3" element={<BookLayout bookId="book4" chapter="chapter3" chapters={getChaptersForBook('book4')}><Book4Ch3 /></BookLayout>} />
        <Route path="/book4/chapter4" element={<BookLayout bookId="book4" chapter="chapter4" chapters={getChaptersForBook('book4')}><Book4Ch4 /></BookLayout>} />
        <Route path="/book4/chapter5" element={<BookLayout bookId="book4" chapter="chapter5" chapters={getChaptersForBook('book4')}><Book4Ch5 /></BookLayout>} />
        <Route path="/book4/chapter6" element={<BookLayout bookId="book4" chapter="chapter6" chapters={getChaptersForBook('book4')}><Book4Ch6 /></BookLayout>} />
        <Route path="/book4/chapter7" element={<BookLayout bookId="book4" chapter="chapter7" chapters={getChaptersForBook('book4')}><Book4Ch7 /></BookLayout>} />
        <Route path="/book4/chapter8" element={<BookLayout bookId="book4" chapter="chapter8" chapters={getChaptersForBook('book4')}><Book4Ch8 /></BookLayout>} />
        <Route path="/book4/chapter9" element={<BookLayout bookId="book4" chapter="chapter9" chapters={getChaptersForBook('book4')}><Book4Ch9 /></BookLayout>} />
        <Route path="/book4/chapter10" element={<BookLayout bookId="book4" chapter="chapter10" chapters={getChaptersForBook('book4')}><Book4Ch10 /></BookLayout>} />
        <Route path="/book4/chapter11" element={<BookLayout bookId="book4" chapter="chapter11" chapters={getChaptersForBook('book4')}><Book4Ch11 /></BookLayout>} />
        <Route path="/book4/chapter12" element={<BookLayout bookId="book4" chapter="chapter12" chapters={getChaptersForBook('book4')}><Book4Ch12 /></BookLayout>} />
        <Route path="/book4/chapter13" element={<BookLayout bookId="book4" chapter="chapter13" chapters={getChaptersForBook('book4')}><Book4Ch13 /></BookLayout>} />
        <Route path="/book4/chapter14" element={<BookLayout bookId="book4" chapter="chapter14" chapters={getChaptersForBook('book4')}><Book4Ch14 /></BookLayout>} />
        <Route path="/book4/chapter15" element={<BookLayout bookId="book4" chapter="chapter15" chapters={getChaptersForBook('book4')}><Book4Ch15 /></BookLayout>} />
        <Route path="/book4/chapter16" element={<BookLayout bookId="book4" chapter="chapter16" chapters={getChaptersForBook('book4')}><Book4Ch16 /></BookLayout>} />
        {/* Book 4 首頁入口 */}
        <Route path="/book4" element={<BookLayout bookId="book4" chapter="chapter1" chapters={getChaptersForBook('book4')}><Book4Ch1 /></BookLayout>} />

        {/* ========== Book 5 - 如何活出基督的樣式 ========== */}
        <Route path="/book5/chapter1" element={<BookLayout bookId="book5" chapter="chapter1" chapters={getChaptersForBook('book5')}><Book5Ch1 /></BookLayout>} />
        <Route path="/book5/chapter2" element={<BookLayout bookId="book5" chapter="chapter2" chapters={getChaptersForBook('book5')}><Book5Ch2 /></BookLayout>} />
        <Route path="/book5/chapter3" element={<BookLayout bookId="book5" chapter="chapter3" chapters={getChaptersForBook('book5')}><Book5Ch3 /></BookLayout>} />
        <Route path="/book5/chapter4" element={<BookLayout bookId="book5" chapter="chapter4" chapters={getChaptersForBook('book5')}><Book5Ch4 /></BookLayout>} />
        <Route path="/book5/chapter5" element={<BookLayout bookId="book5" chapter="chapter5" chapters={getChaptersForBook('book5')}><Book5Ch5 /></BookLayout>} />
        <Route path="/book5/chapter6" element={<BookLayout bookId="book5" chapter="chapter6" chapters={getChaptersForBook('book5')}><Book5Ch6 /></BookLayout>} />
        {/* Book 5 首頁入口 */}
        <Route path="/book5" element={<BookLayout bookId="book5" chapter="chapter1" chapters={getChaptersForBook('book5')}><Book5Ch1 /></BookLayout>} />

        {/* ========== Book 6 - 列王記上 從歷史中看見神的啟示 ========== */}
        <Route path="/book6/chapter1" element={<BookLayout bookId="book6" chapter="chapter1" chapters={getChaptersForBook('book6')}><Book6Ch1 /></BookLayout>} />
        <Route path="/book6/chapter2" element={<BookLayout bookId="book6" chapter="chapter2" chapters={getChaptersForBook('book6')}><Book6Ch2 /></BookLayout>} />
        <Route path="/book6/chapter3" element={<BookLayout bookId="book6" chapter="chapter3" chapters={getChaptersForBook('book6')}><Book6Ch3 /></BookLayout>} />
        <Route path="/book6/chapter4" element={<BookLayout bookId="book6" chapter="chapter4" chapters={getChaptersForBook('book6')}><Book6Ch4 /></BookLayout>} />
        <Route path="/book6/chapter5" element={<BookLayout bookId="book6" chapter="chapter5" chapters={getChaptersForBook('book6')}><Book6Ch5 /></BookLayout>} />
        <Route path="/book6/chapter6" element={<BookLayout bookId="book6" chapter="chapter6" chapters={getChaptersForBook('book6')}><Book6Ch6 /></BookLayout>} />
        <Route path="/book6/chapter7" element={<BookLayout bookId="book6" chapter="chapter7" chapters={getChaptersForBook('book6')}><Book6Ch7 /></BookLayout>} />
        <Route path="/book6/chapter8" element={<BookLayout bookId="book6" chapter="chapter8" chapters={getChaptersForBook('book6')}><Book6Ch8 /></BookLayout>} />
        {/* Book 6 首頁入口 */}
        <Route path="/book6" element={<BookLayout bookId="book6" chapter="chapter1" chapters={getChaptersForBook('book6')}><Book6Ch1 /></BookLayout>} />

        {/* ========== Book 7 - 基要陪讀課程 ========== */}
        <Route path="/book7/chapter1" element={<BookLayout bookId="book7" chapter="chapter1" chapters={getChaptersForBook('book7')}><Book7Ch1 /></BookLayout>} />
        <Route path="/book7/chapter2" element={<BookLayout bookId="book7" chapter="chapter2" chapters={getChaptersForBook('book7')}><Book7Ch2 /></BookLayout>} />
        <Route path="/book7/chapter3" element={<BookLayout bookId="book7" chapter="chapter3" chapters={getChaptersForBook('book7')}><Book7Ch3 /></BookLayout>} />
        <Route path="/book7/chapter4" element={<BookLayout bookId="book7" chapter="chapter4" chapters={getChaptersForBook('book7')}><Book7Ch4 /></BookLayout>} />
        <Route path="/book7/chapter5" element={<BookLayout bookId="book7" chapter="chapter5" chapters={getChaptersForBook('book7')}><Book7Ch5 /></BookLayout>} />
        <Route path="/book7/chapter6" element={<BookLayout bookId="book7" chapter="chapter6" chapters={getChaptersForBook('book7')}><Book7Ch6 /></BookLayout>} />
        {/* Book 7 首頁入口 */}
        <Route path="/book7" element={<BookLayout bookId="book7" chapter="chapter1" chapters={getChaptersForBook('book7')}><Book7Ch1 /></BookLayout>} />

        {/* ========== Book 8 - 靈性關懷與身心健康 ========== */}
        <Route path="/book8/chapter1" element={<BookLayout bookId="book8" chapter="chapter1" chapters={getChaptersForBook('book8')}><Book8Ch1 /></BookLayout>} />
        <Route path="/book8/chapter2" element={<BookLayout bookId="book8" chapter="chapter2" chapters={getChaptersForBook('book8')}><Book8Ch2 /></BookLayout>} />
        <Route path="/book8/chapter3" element={<BookLayout bookId="book8" chapter="chapter3" chapters={getChaptersForBook('book8')}><Book8Ch3 /></BookLayout>} />
        <Route path="/book8/chapter4" element={<BookLayout bookId="book8" chapter="chapter4" chapters={getChaptersForBook('book8')}><Book8Ch4 /></BookLayout>} />
        <Route path="/book8/chapter5" element={<BookLayout bookId="book8" chapter="chapter5" chapters={getChaptersForBook('book8')}><Book8Ch5 /></BookLayout>} />
        <Route path="/book8/chapter6" element={<BookLayout bookId="book8" chapter="chapter6" chapters={getChaptersForBook('book8')}><Book8Ch6 /></BookLayout>} />
        <Route path="/book8/chapter7" element={<BookLayout bookId="book8" chapter="chapter7" chapters={getChaptersForBook('book8')}><Book8Ch7 /></BookLayout>} />
        <Route path="/book8/chapter8" element={<BookLayout bookId="book8" chapter="chapter8" chapters={getChaptersForBook('book8')}><Book8Ch8 /></BookLayout>} />
        <Route path="/book8/chapter9" element={<BookLayout bookId="book8" chapter="chapter9" chapters={getChaptersForBook('book8')}><Book8Ch9 /></BookLayout>} />
        <Route path="/book8/chapter10" element={<BookLayout bookId="book8" chapter="chapter10" chapters={getChaptersForBook('book8')}><Book8Ch10 /></BookLayout>} />
        <Route path="/book8/chapter11" element={<BookLayout bookId="book8" chapter="chapter11" chapters={getChaptersForBook('book8')}><Book8Ch11 /></BookLayout>} />
        <Route path="/book8/chapter12" element={<BookLayout bookId="book8" chapter="chapter12" chapters={getChaptersForBook('book8')}><Book8Ch12 /></BookLayout>} />
        {/* Book 8 首頁入口 */}
        <Route path="/book8" element={<BookLayout bookId="book8" chapter="chapter1" chapters={getChaptersForBook('book8')}><Book8Ch1 /></BookLayout>} />

        {/* ========== Book 9 - 三層天禱告 ========== */}
        <Route path="/book9/intro" element={<BookLayout bookId="book9" chapter="intro" chapters={getChaptersForBook('book9')}><Book9Intro /></BookLayout>} />
        <Route path="/book9/chapter1" element={<BookLayout bookId="book9" chapter="chapter1" chapters={getChaptersForBook('book9')}><Book9Ch1 /></BookLayout>} />
        <Route path="/book9/chapter2" element={<BookLayout bookId="book9" chapter="chapter2" chapters={getChaptersForBook('book9')}><Book9Ch2 /></BookLayout>} />
        <Route path="/book9/chapter3" element={<BookLayout bookId="book9" chapter="chapter3" chapters={getChaptersForBook('book9')}><Book9Ch3 /></BookLayout>} />
        <Route path="/book9/chapter4" element={<BookLayout bookId="book9" chapter="chapter4" chapters={getChaptersForBook('book9')}><Book9Ch4 /></BookLayout>} />
        <Route path="/book9/chapter5" element={<BookLayout bookId="book9" chapter="chapter5" chapters={getChaptersForBook('book9')}><Book9Ch5 /></BookLayout>} />
        <Route path="/book9/chapter6" element={<BookLayout bookId="book9" chapter="chapter6" chapters={getChaptersForBook('book9')}><Book9Ch6 /></BookLayout>} />
        {/* Book 9 首頁入口 */}
        <Route path="/book9" element={<BookLayout bookId="book9" chapter="intro" chapters={getChaptersForBook('book9')}><Book9Intro /></BookLayout>} />

        {/* ========== Book 10 - 禱告的盾牌 ========== */}
        <Route path="/book10/chapter1" element={<BookLayout bookId="book10" chapter="chapter1" chapters={getChaptersForBook('book10')}><Book10Ch1 /></BookLayout>} />
        <Route path="/book10/chapter2" element={<BookLayout bookId="book10" chapter="chapter2" chapters={getChaptersForBook('book10')}><Book10Ch2 /></BookLayout>} />
        <Route path="/book10/chapter3" element={<BookLayout bookId="book10" chapter="chapter3" chapters={getChaptersForBook('book10')}><Book10Ch3 /></BookLayout>} />
        <Route path="/book10/chapter4" element={<BookLayout bookId="book10" chapter="chapter4" chapters={getChaptersForBook('book10')}><Book10Ch4 /></BookLayout>} />
        <Route path="/book10/chapter5" element={<BookLayout bookId="book10" chapter="chapter5" chapters={getChaptersForBook('book10')}><Book10Ch5 /></BookLayout>} />
        <Route path="/book10/chapter6" element={<BookLayout bookId="book10" chapter="chapter6" chapters={getChaptersForBook('book10')}><Book10Ch6 /></BookLayout>} />
        <Route path="/book10/chapter7" element={<BookLayout bookId="book10" chapter="chapter7" chapters={getChaptersForBook('book10')}><Book10Ch7 /></BookLayout>} />
        <Route path="/book10/chapter8" element={<BookLayout bookId="book10" chapter="chapter8" chapters={getChaptersForBook('book10')}><Book10Ch8 /></BookLayout>} />
        <Route path="/book10/chapter9" element={<BookLayout bookId="book10" chapter="chapter9" chapters={getChaptersForBook('book10')}><Book10Ch9 /></BookLayout>} />

        {/* ========== Book 11 - 從懷疑到相信 ========== */}
        <Route path="/book11/lesson1" element={<BookLayout bookId="book11" chapter="lesson1" chapters={getChaptersForBook('book11')}><Book11Lesson1 /></BookLayout>} />

        {/* ========== Book 12 - 十架預言真奇妙 ========== */}
        <Route path="/book12/home" element={<BookLayout bookId="book12" chapter="home" chapters={getChaptersForBook('book12')}><Book12Home /></BookLayout>} />
        <Route path="/book/12" element={<BookLayout bookId="book12" chapter="home" chapters={getChaptersForBook('book12')}><Book12Home /></BookLayout>} />

        {/* ========== Book 13 - 十字架跨越的智慧 ========== */}
        <Route path="/book13/chapter1" element={<BookLayout bookId="book13" chapter="chapter1" chapters={getChaptersForBook('book13')}><Book13Ch1 /></BookLayout>} />
        <Route path="/book13/chapter2" element={<BookLayout bookId="book13" chapter="chapter2" chapters={getChaptersForBook('book13')}><Book13Ch2 /></BookLayout>} />
        <Route path="/book13/chapter3" element={<BookLayout bookId="book13" chapter="chapter3" chapters={getChaptersForBook('book13')}><Book13Ch3 /></BookLayout>} />
        <Route path="/book13/chapter4" element={<BookLayout bookId="book13" chapter="chapter4" chapters={getChaptersForBook('book13')}><Book13Ch4 /></BookLayout>} />
        <Route path="/book13/chapter5" element={<BookLayout bookId="book13" chapter="chapter5" chapters={getChaptersForBook('book13')}><Book13Ch5 /></BookLayout>} />
        <Route path="/book13/chapter6" element={<BookLayout bookId="book13" chapter="chapter6" chapters={getChaptersForBook('book13')}><Book13Ch6 /></BookLayout>} />
        <Route path="/book13/chapter7" element={<BookLayout bookId="book13" chapter="chapter7" chapters={getChaptersForBook('book13')}><Book13Ch7 /></BookLayout>} />
        <Route path="/book/13" element={<BookLayout bookId="book13" chapter="chapter1" chapters={getChaptersForBook('book13')}><Book13Ch1 /></BookLayout>} />

        {/* ========== Book 14 - 活在聖靈中 ========== */}
        <Route path="/book14/chapter1" element={<BookLayout bookId="book14" chapter="chapter1" chapters={getChaptersForBook('book14')}><Book14Ch1 /></BookLayout>} />
        <Route path="/book14/chapter2" element={<BookLayout bookId="book14" chapter="chapter2" chapters={getChaptersForBook('book14')}><Book14Ch2 /></BookLayout>} />
        <Route path="/book14/chapter3" element={<BookLayout bookId="book14" chapter="chapter3" chapters={getChaptersForBook('book14')}><Book14Ch3 /></BookLayout>} />
        <Route path="/book14/chapter4" element={<BookLayout bookId="book14" chapter="chapter4" chapters={getChaptersForBook('book14')}><Book14Ch4 /></BookLayout>} />
        <Route path="/book14/chapter5" element={<BookLayout bookId="book14" chapter="chapter5" chapters={getChaptersForBook('book14')}><Book14Ch5 /></BookLayout>} />
        <Route path="/book14/chapter6" element={<BookLayout bookId="book14" chapter="chapter6" chapters={getChaptersForBook('book14')}><Book14Ch6 /></BookLayout>} />
        <Route path="/book14/chapter7" element={<BookLayout bookId="book14" chapter="chapter7" chapters={getChaptersForBook('book14')}><Book14Ch7 /></BookLayout>} />
        <Route path="/book14/chapter8" element={<BookLayout bookId="book14" chapter="chapter8" chapters={getChaptersForBook('book14')}><Book14Ch8 /></BookLayout>} />
        <Route path="/book14/chapter9" element={<BookLayout bookId="book14" chapter="chapter9" chapters={getChaptersForBook('book14')}><Book14Ch9 /></BookLayout>} />
        <Route path="/book/14" element={<BookLayout bookId="book14" chapter="chapter1" chapters={getChaptersForBook('book14')}><Book14Ch1 /></BookLayout>} />

        {/* ========== Book 15 - 誰需要神學？ ========== */}
        <Route path="/book15/home" element={<BookLayout bookId="book15" chapter="home" chapters={getChaptersForBook('book15')}><Book15Home /></BookLayout>} />
        <Route path="/book15/chapter1" element={<BookLayout bookId="book15" chapter="chapter1" chapters={getChaptersForBook('book15')}><Book15Ch1 /></BookLayout>} />
        <Route path="/book15/chapter2" element={<BookLayout bookId="book15" chapter="chapter2" chapters={getChaptersForBook('book15')}><Book15Ch2 /></BookLayout>} />
        <Route path="/book15/chapter3" element={<BookLayout bookId="book15" chapter="chapter3" chapters={getChaptersForBook('book15')}><Book15Ch3 /></BookLayout>} />
        <Route path="/book15/chapter4" element={<BookLayout bookId="book15" chapter="chapter4" chapters={getChaptersForBook('book15')}><Book15Ch4 /></BookLayout>} />
        <Route path="/book15/chapter5" element={<BookLayout bookId="book15" chapter="chapter5" chapters={getChaptersForBook('book15')}><Book15Ch5 /></BookLayout>} />
        <Route path="/book15/chapter6" element={<BookLayout bookId="book15" chapter="chapter6" chapters={getChaptersForBook('book15')}><Book15Ch6 /></BookLayout>} />
        <Route path="/book15/chapter7" element={<BookLayout bookId="book15" chapter="chapter7" chapters={getChaptersForBook('book15')}><Book15Ch7 /></BookLayout>} />
        <Route path="/book15/chapter8" element={<BookLayout bookId="book15" chapter="chapter8" chapters={getChaptersForBook('book15')}><Book15Ch8 /></BookLayout>} />
        <Route path="/book15/chapter9" element={<BookLayout bookId="book15" chapter="chapter9" chapters={getChaptersForBook('book15')}><Book15Ch9 /></BookLayout>} />
        <Route path="/book/15" element={<BookLayout bookId="book15" chapter="home" chapters={getChaptersForBook('book15')}><Book15Home /></BookLayout>} />

        {/* ========== Book 16 - 拾級靈程三階 ========== */}
        <Route path="/book16/home" element={<BookLayout bookId="book16" chapter="home" chapters={getChaptersForBook('book16')}><Book16Home /></BookLayout>} />
        <Route path="/book16/chapter1" element={<BookLayout bookId="book16" chapter="chapter1" chapters={getChaptersForBook('book16')}><Book16Ch1 /></BookLayout>} />
        <Route path="/book16/chapter2" element={<BookLayout bookId="book16" chapter="chapter2" chapters={getChaptersForBook('book16')}><Book16Ch2 /></BookLayout>} />
        <Route path="/book16/chapter3" element={<BookLayout bookId="book16" chapter="chapter3" chapters={getChaptersForBook('book16')}><Book16Ch3 /></BookLayout>} />
        <Route path="/book16/chapter4" element={<BookLayout bookId="book16" chapter="chapter4" chapters={getChaptersForBook('book16')}><Book16Ch4 /></BookLayout>} />
        <Route path="/book16/chapter5" element={<BookLayout bookId="book16" chapter="chapter5" chapters={getChaptersForBook('book16')}><Book16Ch5 /></BookLayout>} />
        <Route path="/book16/chapter6" element={<BookLayout bookId="book16" chapter="chapter6" chapters={getChaptersForBook('book16')}><Book16Ch6 /></BookLayout>} />
        <Route path="/book/16" element={<BookLayout bookId="book16" chapter="home" chapters={getChaptersForBook('book16')}><Book16Home /></BookLayout>} />

        {/* ========== 首頁 - 書籍列表（從 Supabase 動態加載）========== */}
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

            {/* 加載狀態 */}
            {loading && (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
                <p className="text-gray-600">加載書籍中...</p>
              </div>
            )}

            {/* 錯誤狀態 */}
            {error && (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                  <p>無法加載書籍：{error}</p>
                </div>
              </div>
            )}

            {/* 書籍網格（從 Supabase 動態生成）*/}
            {!loading && !error && (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {books.map((book) => {
                    const bookNumber = parseInt(book.book_id.replace('book', ''));
                    const firstChapter = bookChapters[book.book_id]?.[0];
                    const bookUrl = firstChapter
                      ? `/${book.book_id}/${firstChapter.chapter_id}`
                      : `/${book.book_id}`;

                    // 預先定義的顏色映射（保留原有設計）
                    const colorMap: Record<number, string> = {
                      1: 'from-blue-500 to-cyan-600',
                      2: 'from-green-500 to-emerald-600',
                      3: 'from-purple-500 to-pink-600',
                      4: 'from-orange-500 to-red-600',
                      5: 'from-teal-500 to-cyan-600',
                      6: 'from-indigo-500 to-purple-600',
                      7: 'from-amber-500 to-orange-600',
                      8: 'from-rose-500 to-pink-600',
                      9: 'from-violet-500 to-purple-600',
                      10: 'from-purple-500 to-pink-600',
                      11: 'from-indigo-500 to-purple-600',
                      12: 'from-amber-500 to-orange-600',
                      13: 'from-teal-500 to-cyan-600',
                      14: 'from-purple-500 to-pink-600',
                      15: 'from-indigo-600 to-slate-700',
                      16: 'from-violet-600 to-purple-700',
                    };

                    return (
                      <BookCard
                        key={book.book_id}
                        number={bookNumber}
                        title={book.title}
                        author={book.author}
                        description={book.description}
                        chapters={book.chapters_count}
                        to={bookUrl}
                        color={colorMap[bookNumber] || 'from-blue-500 to-purple-600'}
                      />
                    );
                  })}
                </div>
              </div>
            )}

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
