import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ChevronRight } from 'lucide-react';

const chapters = [
  { path: '/book40/preface', title: '前言　十誡——使人自由的律法' },
  { path: '/book40/chapter1', title: '第一章　基督教倫理學概論' },
];

export default function Book40Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-800 to-orange-900 bg-clip-text text-transparent">原來十誡這麼重要</h1>
        <h2 className="text-lg font-semibold text-gray-600 mb-1">——從十誡看倫理</h2>
        <p className="text-gray-500">王天佑　著</p>
      </div>

      <div className="mb-8 p-5 bg-amber-50 border border-amber-100 rounded-lg">
        <p className="text-gray-700 leading-relaxed">
          本書從基督教倫理學的角度，重新詮釋十誡的現代意義。作者先建立基督教倫理學的基本觀念——何謂倫理、律法主義的誤區、學習倫理學應有的態度，以及「準則、處境、動機」三個判斷倫理問題的觀點，再逐條深入闡釋十誡的內容，結合大量生活實例與釋經原則，說明十誡不是捆綁人的重擔，而是使人得著真自由、活出幸福人生的美好指引。
        </p>
        <p className="text-gray-500 text-sm mt-3">目前已上線：前言、第一章「基督教倫理學概論」。全書後續章節（倫理三觀點應用實例、十誡緒論、第一誡至第十誡）將陸續增補。</p>
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
