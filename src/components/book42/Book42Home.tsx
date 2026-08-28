import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ChevronRight } from 'lucide-react';

const chapters = [
  { path: '/book42/chapter1', title: '緒論　台灣宣教策略之再思' },
  { path: '/book42/chapter2', title: '第一篇1　道成肉身的宣教原理' },
  { path: '/book42/chapter3', title: '第一篇2　初代教會的談道法' },
  { path: '/book42/chapter4', title: '第一篇3　台灣本土文化的適應' },
  { path: '/book42/chapter5', title: '第二篇4　啟示的神' },
  { path: '/book42/chapter6', title: '第二篇5　復和之道' },
  { path: '/book42/chapter7', title: '第二篇6　耶穌是神' },
  { path: '/book42/chapter8', title: '第三篇7　依靠聖靈' },
  { path: '/book42/chapter9', title: '第三篇8　領受聖靈' },
  { path: '/book42/chapter10', title: '第三篇9　心靈醫治' },
  { path: '/book42/chapter11', title: '總結　台灣宣教策略之再思' },
  { path: '/book42/chapter12', title: '附錄　本土化宣教實例——苦難中的福音' },
];

export default function Book42Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-800 to-orange-900 bg-clip-text text-transparent">本土化談道</h1>
        <h2 className="text-lg font-semibold text-gray-600 mb-1">道成肉身的福音策略（增訂版）</h2>
        <p className="text-gray-500">王武聰　牧師　著</p>
      </div>

      <div className="mb-8 p-5 bg-amber-50 border border-amber-100 rounded-lg">
        <p className="text-gray-700 leading-relaxed">
          作者王武聰牧師在澎湖白沙、台北板橋、美國休士頓三個完全不同層面的百姓中牧會超過十四年，深感台灣教會普遍缺乏一套針對本土背景的個人談道資料，遂以自身談道引人歸主的經驗，結合聖經神學的基礎、中國文化的傳統、台灣百姓的宗教心理，以及屬靈爭戰的層面，寫成台福神學院牧教學博士論文，整理出版本書。全書以「道成肉身」為核心的宣教原理，主張談道策略是「先認同、再說服」：分三大篇——「本土化談道的神學基礎」（道成肉身的宣教原理、初代教會的談道法、台灣本土文化的適應）、「本土化談道的福音內容」（啟示的神、復和之道、耶穌是神）、「本土化談道的屬靈爭戰」（依靠聖靈、領受聖靈、心靈醫治），並在附錄中以九二一大地震的實際牧養見證，示範本土化宣教如何具體落實。
        </p>
        <p className="text-gray-500 text-sm mt-3">全書緒論、三篇正文共九章、總結與附錄，共十二章，已全部完結上線。</p>
      </div>

      <div className="space-y-3">
        {chapters.map((ch) => (
          <Link
            key={ch.path}
            to={ch.path}
            className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:border-amber-300 hover:bg-amber-50 transition-all group"
          >
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-amber-700 flex-shrink-0" />
              <span className="font-medium text-gray-800">{ch.title}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-amber-500 transition-colors" />
          </Link>
        ))}
      </div>
    </div>
  );
}
