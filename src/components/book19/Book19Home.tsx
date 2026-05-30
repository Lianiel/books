import React from 'react';
import { Heart, Shield, Star, Check, Target, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const themes = [
  {
    num: 1,
    emoji: '🌱',
    title: '新生命的基礎',
    desc: '新生命的本質、靈奶、信心、神的話語，及完全接納神所賜的兒子耶穌',
    chapters: '第1-8章、第26、38、52章',
    color: 'from-emerald-500 to-green-600',
    bg: 'from-emerald-50 to-green-50',
    border: 'border-emerald-100',
    path: '/book19/chapter1',
    icon: Heart,
  },
  {
    num: 2,
    emoji: '⚔️',
    title: '勝過罪與世界',
    desc: '將罪交由主對付、認罪悔改、赦免與潔淨，在肉體與靈的爭戰中靠主得勝',
    chapters: '第9-13、18、24-25、27-28章',
    color: 'from-red-500 to-rose-600',
    bg: 'from-red-50 to-rose-50',
    border: 'border-red-100',
    path: '/book19/chapter2',
    icon: Shield,
  },
  {
    num: 3,
    emoji: '💎',
    title: '聖潔生活的品格',
    desc: '聖潔、公義、愛、謙卑、敬畏主、順服——新生命必然結出的屬靈品格',
    chapters: '第14-17、36、44-46章',
    color: 'from-violet-500 to-purple-600',
    bg: 'from-violet-50 to-purple-50',
    border: 'border-violet-100',
    path: '/book19/chapter3',
    icon: Star,
  },
  {
    num: 4,
    emoji: '🔥',
    title: '在聖靈裡的能力',
    desc: '聖靈的工作與帶領、在軟弱中得著能力、不憑感覺憑信心、真自由的生命',
    chapters: '第19-23、32、49章',
    color: 'from-orange-500 to-amber-600',
    bg: 'from-orange-50 to-amber-50',
    border: 'border-orange-100',
    path: '/book19/chapter4',
    icon: Check,
  },
  {
    num: 5,
    emoji: '🙏',
    title: '基督徒的實踐',
    desc: '禱告、事奉、宣教、聖禮、金錢觀——把真理融入每日言行的具體操練',
    chapters: '第29-35、37、40-43、47-48章',
    color: 'from-blue-500 to-indigo-600',
    bg: 'from-blue-50 to-indigo-50',
    border: 'border-blue-100',
    path: '/book19/chapter5',
    icon: Target,
  },
  {
    num: 6,
    emoji: '📈',
    title: '生命的持續長進',
    desc: '效法基督、屬靈生命的自然成長，及如何正確使用神的話語持續長進',
    chapters: '第39、50-51章',
    color: 'from-teal-500 to-cyan-600',
    bg: 'from-teal-50 to-cyan-50',
    border: 'border-teal-100',
    path: '/book19/chapter6',
    icon: BookOpen,
  },
];

export default function Book19Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">《新生命》</h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-1">慕安德列（Andrew Murray）著</h2>
        <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed mt-2">
          本書為初信者系統性靈命教導，原著52章核心內容重組為六大生命主題，幫助您清晰直觀地探索神在基督耶穌裡那充滿能力與喜樂的豐盛生命。
        </p>
      </div>

      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 rounded-xl p-5 mb-8 shadow-sm">
        <p className="text-gray-700 leading-relaxed text-center italic">
          「許多信徒因對新生命的榮耀本質與內在能力缺乏認識，常常陷於軟弱。本書旨在幫助信徒認識這個新生命，學習憑信心生活，讓基督的大能在裡面彰顯出來。」
        </p>
        <p className="text-right text-gray-500 text-sm mt-2">——慕安德列</p>
      </div>

      <div className="grid gap-4">
        {themes.map((theme) => {
          const Icon = theme.icon;
          return (
            <Link key={theme.num} to={theme.path} className="block group">
              <div className={`border ${theme.border} rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition-all`}>
                <div className={`px-5 py-4 bg-gradient-to-r ${theme.bg} flex items-center gap-3`}>
                  <div className={`flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br ${theme.color} flex items-center justify-center text-white text-sm font-bold shadow`}>
                    {theme.num}
                  </div>
                  <Icon className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{theme.emoji}</span>
                      <h3 className="font-bold text-gray-900">{theme.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm mt-0.5 leading-relaxed">{theme.desc}</p>
                    <p className="text-gray-400 text-xs mt-1">{theme.chapters}</p>
                  </div>
                  <div className={`text-white text-xs font-semibold px-3 py-1.5 rounded-full bg-gradient-to-r ${theme.color} flex-shrink-0 shadow-sm`}>
                    閱讀 →
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-8 bg-gradient-to-r from-gray-50 to-slate-50 border border-gray-200 rounded-xl p-6 text-center shadow-sm">
        <p className="text-gray-600 text-sm leading-relaxed">
          慕安德列（Andrew Murray，1828-1917），南非荷蘭改革宗牧師，著名靈命培育作家。<br />
          本書原名《The New Life》，是他為初信者所寫的經典靈修指引，深受普世教會珍視。
        </p>
      </div>
    </div>
  );
}
