import React from 'react';
import { BookOpen, Heart, Shield, Flame, Eye, Clock, AlertCircle, Music, Sparkles } from 'lucide-react';

export default function Book14Home() {
  const chapters = [
    { num: 1, title: '序言及前言', icon: BookOpen, color: 'text-purple-600' },
    { num: 2, title: '看清楚聖靈', icon: Eye, color: 'text-blue-600' },
    { num: 3, title: '聖經裡的聖靈', icon: Heart, color: 'text-pink-600' },
    { num: 4, title: '聖靈的路徑－聖潔之道', icon: Shield, color: 'text-green-600' },
    { num: 5, title: '聖靈的路徑－成聖面面觀', icon: Flame, color: 'text-orange-600' },
    { num: 6, title: '聖靈的路徑－靈恩生活', icon: Sparkles, color: 'text-yellow-600' },
    { num: 7, title: '聖靈的路徑－解釋聖靈生活', icon: Clock, color: 'text-indigo-600' },
    { num: 8, title: '聖靈，請來！', icon: Music, color: 'text-rose-600' },
    { num: 9, title: '附錄：羅馬書第七章的『苦中人』', icon: AlertCircle, color: 'text-slate-600' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          活在聖靈中
        </h1>
        <p className="text-xl text-gray-600 mb-2">巴刻 (J. I. Packer)</p>
        <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
          深入探討聖靈的位格、工作與基督徒生命。透過九章的內容，幫助信徒認識聖靈如何在我們的靈命中工作。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {chapters.map((ch) => {
          const Icon = ch.icon;
          return (
            <div key={ch.num} className="bg-white rounded-xl p-5 border border-gray-200 hover:border-gray-400 hover:shadow-md transition-all cursor-pointer">
              <div className="flex items-start gap-4">
                <Icon className={`w-6 h-6 flex-shrink-0 mt-1 ${ch.color}`} />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    第{ch.num}章 {ch.title}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
        <h2 className="font-bold text-lg mb-3 text-gray-800">📖 如何閱讀本書</h2>
        <ul className="space-y-2 text-gray-700 ml-4">
          <li>✓ 每章包含主要內容、延伸探討、反思問題和實踐方針</li>
          <li>✓ 建議按序閱讀，但也可以按需查看特定章節</li>
          <li>✓ 在反思問題部分停留，讓內容內化於心</li>
          <li>✓ 完成實踐方針，將所學應用在生活中</li>
        </ul>
      </div>
    </div>
  );
}
