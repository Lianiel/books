import React from 'react';
import { BookOpen, Users, Heart, Shield, Star, Target, Map, Volume2 } from 'lucide-react';

export default function Book26Home() {
  const chapters = [
    { num: 1, icon: Heart, title: '言語之戰', subtitle: '為神的緣故直達人心', author: '保羅・大衛・崔普', color: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-200' },
    { num: 2, icon: Shield, title: '嚼環、韁繩與祝福', subtitle: '雅各書 3:1–12 的解釋', author: '辛克萊・弗格森', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' },
    { num: 3, icon: Star, title: '是否存在基督徒的雄辯？', subtitle: '清晰的言語與十字架的奇妙', author: '約翰・派博', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
    { num: 4, icon: Target, title: '刀刃有多鋒利？', subtitle: '基督、爭議與尖銳的言語', author: '馬克・德里斯科爾', color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200' },
    { num: 5, icon: Map, title: '故事塑造的信仰', subtitle: '敘事與信仰的力量', author: '丹尼爾・泰勒', color: 'text-teal-600', bg: 'bg-teal-50', border: 'border-teal-200' },
    { num: 6, icon: Volume2, title: '奇妙的言語：當我們歌唱時', subtitle: '歌唱中發生了什麼？', author: '鮑勃・考夫林', color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-200' },
    { num: 7, icon: Users, title: '講者對談', subtitle: '從不同角度反思言語的力量', author: '多位作者', color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-200' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* 書本標題 */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-rose-500 to-red-700 mb-4 shadow-lg">
          <BookOpen className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-red-700 bg-clip-text text-transparent mb-2">
          言語的力量與神的奇妙
        </h1>
        <p className="text-lg text-gray-500 italic mb-1">The Power of Words and the Wonder of God</p>
        <p className="text-base text-gray-600 font-medium">約翰・派博 & 賈斯汀・泰勒 編輯</p>
        <p className="text-sm text-gray-400 mt-1">Crossway Books，2009</p>
      </div>

      {/* 書本簡介 */}
      <div className="bg-gradient-to-br from-rose-50 to-red-50 border border-rose-200 rounded-xl p-6 mb-8 shadow-sm">
        <h2 className="text-lg font-bold text-rose-700 mb-3 flex items-center gap-2">
          <BookOpen className="w-5 h-5" />
          書本簡介
        </h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          言語是人類最獨特的能力之一，也是最具破壞力與建造力的工具。本書由六位當代神學家和牧者共同撰寫，從不同角度探討言語在基督信仰中的重要性——言語如何反映人心的狀態、如何服事十字架的信息、如何在爭議中保持基督徒的身分、如何透過故事傳遞信仰，以及如何在歌唱中讓言語更深地觸動人心。
        </p>
        <p className="text-gray-700 leading-relaxed">
          每一章都是獨立的精彩論述，合在一起則構成一幅關於基督徒言語生活的完整圖像。本書挑戰讀者思考：我們每天所說的話，是否反映了基督的榮耀？我們的言語是否讓十字架的信息更加清晰，還是反而模糊了它的光輝？
        </p>
      </div>

      {/* 撰稿人介紹 */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8 shadow-sm">
        <h2 className="text-lg font-bold text-gray-700 mb-4 flex items-center gap-2">
          <Users className="w-5 h-5 text-gray-500" />
          撰稿人
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { name: '約翰・派博', en: 'John Piper', role: '明尼阿波利斯伯利恆浸信會牧師，渴望神事工創辦人' },
            { name: '賈斯汀・泰勒', en: 'Justin Taylor', role: '本書編輯，Crossway Books 副總裁' },
            { name: '保羅・大衛・崔普', en: 'Paul David Tripp', role: '輔導神學家，《危難時代》作者' },
            { name: '辛克萊・弗格森', en: 'Sinclair B. Ferguson', role: '威斯敏斯特神學院系統神學教授' },
            { name: '馬克・德里斯科爾', en: 'Mark Driscoll', role: '西雅圖火星山教會創辦人' },
            { name: '丹尼爾・泰勒', en: 'Daniel Taylor', role: '明尼蘇達大學英文系教授，基督徒作家' },
            { name: '鮑勃・考夫林', en: 'Bob Kauflin', role: 'Sovereign Grace Ministries 敬拜事工主任' },
          ].map((a, i) => (
            <div key={i} className="flex flex-col p-3 bg-gray-50 rounded-lg">
              <span className="font-semibold text-gray-800">{a.name}</span>
              <span className="text-xs text-gray-400 italic mb-1">{a.en}</span>
              <span className="text-sm text-gray-600">{a.role}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 章節列表 */}
      <div>
        <h2 className="text-lg font-bold text-gray-700 mb-4">章節目錄</h2>
        <div className="space-y-3">
          {chapters.map((ch) => {
            const Icon = ch.icon;
            return (
              <div key={ch.num} className={`flex items-start gap-4 p-4 rounded-xl border ${ch.bg} ${ch.border} shadow-sm`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm flex-shrink-0`}>
                  <Icon className={`w-5 h-5 ${ch.color}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full bg-white ${ch.color} border ${ch.border}`}>
                      第 {ch.num} 章
                    </span>
                    <span className="text-xs text-gray-400">{ch.author}</span>
                  </div>
                  <h3 className={`font-bold text-base ${ch.color}`}>{ch.title}</h3>
                  <p className="text-sm text-gray-600">{ch.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 核心主題 */}
      <div className="mt-8 bg-gradient-to-br from-gray-50 to-rose-50 border border-gray-200 rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-bold text-gray-700 mb-3">核心主題</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { emoji: '❤️', title: '言語與人心', desc: '言語是心靈的流露，要改變言語必先改變心' },
            { emoji: '✝️', title: '十字架的過濾器', desc: '好的言語以十字架為準則，榮耀基督而非自我' },
            { emoji: '⚔️', title: '言語中的爭戰', desc: '基督徒既要溫柔建造，也要勇敢護衛真理' },
            { emoji: '📖', title: '故事的力量', desc: '信仰透過故事傳承，神自己也用故事說話' },
            { emoji: '🎵', title: '歌唱的奧祕', desc: '歌唱讓言語滲入人心，音樂服事話語而非取代' },
            { emoji: '🙏', title: '聖靈的雄辯', desc: '真正的基督徒雄辯源於聖靈，而非人的技巧' },
          ].map((t, i) => (
            <div key={i} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-100">
              <span className="text-2xl flex-shrink-0">{t.emoji}</span>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm">{t.title}</h4>
                <p className="text-xs text-gray-600">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
