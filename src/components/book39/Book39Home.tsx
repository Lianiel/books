import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ChevronRight } from 'lucide-react';

const chapters = [
  { path: '/book39/chapter1', title: '第一章　導論' },
  { path: '/book39/chapter2', title: '第二章　如何做倫理道德判斷？' },
  { path: '/book39/chapter3', title: '第三章　聖經倫理學I（舊約）' },
  { path: '/book39/chapter4', title: '第四章　聖經倫理學II（新約）' },
  { path: '/book39/chapter5', title: '第五章　從心出發——奧古斯丁倫理學' },
  { path: '/book39/chapter6', title: '第六章　活出自由——路德倫理學' },
];

export default function Book39Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-slate-800 to-blue-900 bg-clip-text text-transparent">基督教倫理學</h1>
        <p className="text-gray-500">林鴻信　著</p>
      </div>

      <div className="mb-8 p-5 bg-slate-50 border border-slate-100 rounded-lg">
        <p className="text-gray-700 leading-relaxed">
          本書從基督教信仰出發，系統性地探討倫理道德判斷的基礎與方法。全書分為多個部分，從導論建立基本概念與判斷方法，繼而深入聖經倫理（舊約、新約），並逐步展開各項具體倫理議題的討論。作者林鴻信教授長期任教於台灣神學院系統神學領域，本書以扎實的神學反思、豐富的原典引註，並大量結合台灣與華人文化處境的實例，是深入認識基督教倫理學的重要著作。
        </p>
        <p className="text-gray-500 text-sm mt-3">目前已上線：第一部「導論」（第一、二章）、第二部「聖經」（第三章舊約、第四章新約）、第三部「傳統」（第五章奧古斯丁、第六章路德倫理學）。全書後續章節將陸續增補。</p>
      </div>

      <div className="space-y-3">
        {chapters.map((ch) => (
          <Link
            key={ch.path}
            to={ch.path}
            className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all group"
          >
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-slate-600 flex-shrink-0" />
              <span className="font-medium text-gray-800">{ch.title}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
          </Link>
        ))}
      </div>
    </div>
  );
}
