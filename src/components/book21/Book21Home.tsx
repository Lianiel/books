import React from 'react';
import { BookOpen, Star, Users, Heart } from 'lucide-react';

export default function Book21Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">基督徒須知</h1>
        <p className="text-lg text-gray-600">I Want To Be a Christian</p>
        <p className="text-gray-500 mt-1">巴刻（J. I. Packer）著 · 黃文祐 譯</p>
        <p className="text-gray-400 text-sm mt-1">宣道出版社 · 2011年第14次印刷</p>
      </div>

      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-6 mb-6">
        <h2 className="text-xl font-bold text-amber-800 mb-3 flex items-center gap-2">
          <BookOpen className="w-5 h-5" />
          書本簡介
        </h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          本書是英國著名神學家巴刻（J. I. Packer）所著的基督徒信仰入門經典。他以清晰簡練的文字，透過使徒信經、洗禮、主禱文和十誡四大信仰支柱，帶領讀者認識基督信仰的核心內容。
        </p>
        <p className="text-gray-700 leading-relaxed">
          全書結構嚴謹，每個主題都配有聖經研讀和思考討論題目，既適合個人靈修，也是小組查經的優質教材。自1958年出版以來，被世界各地教會廣泛採用。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm text-center">
          <Star className="w-8 h-8 text-amber-500 mx-auto mb-2" />
          <h3 className="font-semibold text-gray-800">作者</h3>
          <p className="text-gray-600 text-sm mt-1">巴刻（J. I. Packer）</p>
          <p className="text-gray-500 text-xs mt-1">當代最重要的改革宗神學家之一，英國牛津大學神學博士</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm text-center">
          <Users className="w-8 h-8 text-amber-500 mx-auto mb-2" />
          <h3 className="font-semibold text-gray-800">適合對象</h3>
          <p className="text-gray-600 text-sm mt-1">新信徒 · 慕道友</p>
          <p className="text-gray-500 text-xs mt-1">也適合希望重新釐清基礎信仰的老信徒</p>
        </div>
        <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm text-center">
          <Heart className="w-8 h-8 text-amber-500 mx-auto mb-2" />
          <h3 className="font-semibold text-gray-800">核心主題</h3>
          <p className="text-gray-600 text-sm mt-1">信 · 洗 · 禱 · 行</p>
          <p className="text-gray-500 text-xs mt-1">信仰、禮儀、禱告、生活的完整基礎</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
        <h2 className="text-lg font-bold text-gray-800 mb-4">四大信仰支柱</h2>
        <div className="space-y-3">
          {[
            { num: '第一章', title: '聖父、聖子、聖靈——使徒信經', desc: '17個主題，從「我信神」到「永生」，系統闡釋三位一體的信仰', color: 'bg-blue-50 border-blue-200' },
            { num: '第二章', title: '加入教會——洗禮和歸正', desc: '14個主題，探討洗禮的意義、歸正的要素、與基督聯合的豐富涵義', color: 'bg-green-50 border-green-200' },
            { num: '第三章', title: '心對心——主禱文', desc: '16個主題，逐句解析主禱文，重建與天父親密對話的禱告生命', color: 'bg-purple-50 border-purple-200' },
            { num: '第四章', title: '生活的準則——十誡', desc: '16個主題，重新詮釋十誡在新約時代的積極意義，作為生活的行為藍圖', color: 'bg-amber-50 border-amber-200' },
          ].map((ch, i) => (
            <div key={i} className={`border rounded-lg p-3 ${ch.color}`}>
              <div className="flex items-start gap-3">
                <span className="text-sm font-bold text-gray-500 flex-shrink-0 mt-0.5">{ch.num}</span>
                <div>
                  <p className="font-semibold text-gray-800">{ch.title}</p>
                  <p className="text-sm text-gray-600 mt-0.5">{ch.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
        <p className="text-amber-800 font-semibold">「以信心接受耶穌基督作你的救主，並倚靠祂的慈悲憐憫完成一切。」</p>
        <p className="text-amber-600 text-sm mt-1">——巴刻的信仰邀請</p>
      </div>
    </div>
  );
}
