import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import Book1 from './components/book1';
import Book2 from './components/book2';
import Book3 from './components/book3';
import Book4 from './components/book4';
import Book5 from './components/book5';
import Book6 from './components/book6';
import Book7 from './components/book7';
import Book8 from './components/book8';
import Book9 from './components/book9';
import Book10 from './components/book10';

interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  chapters: number;
  color: string;
  component: React.ComponentType;
}

function App() {
  const [selectedBook, setSelectedBook] = useState<string | null>(null);

  const books: Book[] = [
    {
      id: 'book1',
      title: '作主門徒',
      author: '戴維·普拉特',
      description: '重新定義跟隨耶穌的真正含義，挑戰我們過著真實門徒的生活',
      chapters: 9,
      color: 'from-blue-500 to-cyan-500',
      component: Book1
    },
    {
      id: 'book2',
      title: '情感健康的門徒',
      author: '彼得·史卡吉羅',
      description: '探討情感健康與靈命成長的關係，學習在基督裡建立健康的情感生活',
      chapters: 8,
      color: 'from-purple-500 to-pink-500',
      component: Book2
    },
    {
      id: 'book3',
      title: '恩典多奇異',
      author: '菲利普·楊西',
      description: '深入探討神的恩典如何改變我們的生命，重新認識恩典的真諦',
      chapters: 14,
      color: 'from-green-500 to-teal-500',
      component: Book3
    },
    {
      id: 'book4',
      title: '成為有感染力的基督徒',
      author: '比爾·海波斯 & 馬克·米道堡',
      description: '學習如何自然而有效地分享信仰，成為有影響力的見證人',
      chapters: 10,
      color: 'from-orange-500 to-red-500',
      component: Book4
    },
    {
      id: 'book5',
      title: '如何活出基督的樣式',
      author: '華理克',
      description: '探討基督徒生命成長的關鍵要素，學習在日常生活中效法基督',
      chapters: 6,
      color: 'from-indigo-500 to-purple-500',
      component: Book5
    },
    {
      id: 'book6',
      title: '列王紀上——上帝的啟示在人間',
      author: '陳濟民',
      description: '深入研讀列王紀上，探討神在歷史中的作為與對今日的啟示',
      chapters: 8,
      color: 'from-yellow-500 to-orange-500',
      component: Book6
    },
    {
      id: 'book7',
      title: '屬靈操練禮讚',
      author: '傅士德',
      description: '系統性介紹基督教傳統中的屬靈操練，幫助信徒建立深度靈修生活',
      chapters: 12,
      color: 'from-teal-500 to-green-500',
      component: Book7
    },
    {
      id: 'book8',
      title: '與神為友',
      author: '傅士德',
      description: '探討禱告生活的深度與廣度，學習建立與神親密的關係',
      chapters: 10,
      color: 'from-pink-500 to-rose-500',
      component: Book8
    },
    {
      id: 'book9',
      title: '認識神',
      author: '巴刻',
      description: '經典神學著作，幫助信徒更深入認識神的屬性與作為',
      chapters: 22,
      color: 'from-cyan-500 to-blue-500',
      component: Book9
    },
    {
      id: 'book10',
      title: '破繭而出——重塑你的屬靈生命',
      author: '彼得·史卡吉羅',
      description: '深入探討屬靈成長與生命重塑的核心議題，幫助信徒突破成長瓶頸',
      chapters: 8,
      color: 'from-violet-500 to-purple-500',
      component: Book10
    }
  ];

  const selectedBookData = books.find(book => book.id === selectedBook);

  if (selectedBook && selectedBookData) {
    const BookComponent = selectedBookData.component;
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 py-8">
          <button
            onClick={() => setSelectedBook(null)}
            className="mb-6 px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            ← 返回書櫃
          </button>
          <BookComponent />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-12 h-12 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-800">屬靈書籍圖書館</h1>
          </div>
          <p className="text-gray-600 text-lg">深入學習，靈命成長</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {books.map((book) => (
            <div
              key={book.id}
              onClick={() => setSelectedBook(book.id)}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 overflow-hidden"
            >
              <div className={`h-3 bg-gradient-to-r ${book.color}`}></div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-xl font-bold text-gray-800 flex-1">{book.title}</h2>
                  <span className="ml-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium whitespace-nowrap">
                    {book.chapters} 章
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{book.author}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{book.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
EOF
