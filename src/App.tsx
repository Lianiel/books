import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Book } from 'lucide-react';

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

// 導入第1-10本書（依照你現有的結構）
// import Book1 from './components/Book1';
// import Book2Ch1 from './components/Book2/Chapter1';
// ... 其他書籍
// import Book10Ch9 from './components/book10/Chapter9';

// ===== 新增：導入第11本書 =====
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
        {/* ========== 現有的路由（Book 1-10）========== */}
        {/* 
        <Route path="/book1" element={<Book1 />} />
        <Route path="/book2/chapter1" element={<Book2Ch1 />} />
        ...
        <Route path="/book10/chapter9" element={<Book10Ch9 />} />
        */}

        {/* ===== 新增：第11本書路由 ===== */}
        <Route path="/book11/lesson1" element={<Book11Lesson1 />} />

        {/* 首頁 - 書籍列表 */}
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
                  chapters={8}
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
                  chapters={6}
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
                  chapters={8}
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

                {/* ===== 新增：Book 11 - 從懷疑到相信 ===== */}
                <BookCard
                  number={11}
                  title="從懷疑到相信"
                  author="姜文琪 姊妹"
                  description="帶領未信者認識神的福音課程 - 第一課：神藉聖經傳達創造與末世"
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
