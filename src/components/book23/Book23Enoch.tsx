import React from 'react';
import { Star, Search, HelpCircle, Check, BookOpen, User } from 'lucide-react';

export default function Book23Enoch() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">

      <div className="mb-8 rounded-2xl overflow-hidden shadow-lg border border-amber-200">
        <div className="bg-gradient-to-r from-amber-600 to-red-700 px-5 py-3 flex flex-wrap gap-2">
          <span className="bg-white/20 text-white text-xs font-semibold px-2 py-0.5 rounded-full">創世記</span>
          <span className="ml-auto text-white/80 text-xs font-medium">塞特的子孫</span>
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6">
          <p className="text-sm text-amber-700 font-medium mb-1">Enoch (Seth's Descendant)</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-1">以諾</h1>
          <p className="text-base text-amber-700 font-semibold mb-4">塞特的子孫（與該隱後代的以諾為不同人）</p>
          <div className="relative bg-white border-2 border-amber-300 rounded-2xl px-5 py-4 shadow-sm inline-block max-w-sm">
            <div className="absolute -left-3 top-5 w-0 h-0 border-t-8 border-t-transparent border-r-[12px] border-r-amber-300 border-b-8 border-b-transparent" />
            <p className="text-gray-800 font-medium text-sm leading-relaxed">我好像是活著被召喚上天的</p>
          </div>
          <div className="mt-4 flex items-center gap-1 text-sm text-gray-600">
            <BookOpen className="w-4 h-4 text-amber-500" />
            <span>創世記 5章</span>
          </div>
        </div>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-amber-100 rounded-xl overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 flex items-center gap-2">
          <User className="w-5 h-5 text-amber-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">主要內容</span>
        </div>
        <div className="p-5 bg-white space-y-5">

          <div>
            <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
              與上帝同行，活著升天的信仰人物
            </h3>
            <p className="text-gray-700 leading-relaxed">
              瑪土撒拉（→以挪士等，p.30）的父親，挪亞（→挪亞，p.32）的祖先。信仰堅定。創世記第五章記載：「以諾與上帝同行三百年……以諾與上帝同行，上帝把他接去，他就不在了。」
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              其他所有人物都明白記載「他就死了」，而以諾是「不在了」，因此一般認為以諾是活著被上帝接去天堂（創世記 5章）。在許多人都活超過九百歲的情況下，他的一生僅有三百六十五年——謙遜而短暫，卻比所有長壽者更深地與上帝同行。
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
              《以諾書》的主角
            </h3>
            <p className="text-gray-700 leading-relaxed">
              以諾同時也是《以諾書》（揭露上帝和服事上帝的使者的啟示文學）的主角。《以諾書》是西元前一世紀至西元前二世紀左右在猶太教和基督教中廣泛流傳的啟示文學作品，書中記載上帝所愛的以諾在天堂和地獄的見聞，及宇宙的誕生到世界末日的預言。雖然未被納入聖經正典，但它深刻影響了猶太末世論和新約思想。
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-800">
            <span className="font-semibold">📌 小知識：</span>以諾出生的年代據說暴力橫行，人們對上帝的崇拜式微。
          </div>
        </div>
      </div>

      {/* 重點總結 */}
      <div className="mb-6 border border-sky-100 rounded-xl overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 flex items-center gap-2">
          <Star className="w-5 h-5 text-sky-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">重點總結</span>
        </div>
        <div className="p-5 bg-white space-y-3">
          {[
            '以諾是聖經中極少數「沒有死亡記錄」的人物之一，與上帝同行後被上帝接去，被解讀為活著升天。',
            '在長壽者普遍活到八九百歲的時代，他只活了365年，但聖經給他的評語是最高的：「他與上帝同行」。',
            '他的生命說明：信仰的質量比生命的長度更重要。長壽不等於與上帝親近，與上帝同行才是。',
            '他是《以諾書》的主角，影響了猶太末世論和新約思想，在亞伯拉罕諸教中留下了深遠的神學足跡。',
          ].map((point, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-sky-600 font-bold flex-shrink-0 mt-0.5">{i + 1}.</span>
              <p className="text-gray-700 leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 延伸探討 */}
      <div className="mb-6 border border-indigo-100 rounded-xl overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 flex items-center gap-2">
          <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">延伸探討</span>
        </div>
        <div className="p-5 bg-white space-y-5">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">「與上帝同行」是什麼意思？</h4>
            <p className="text-gray-700 leading-relaxed">
              創世記5章在描述每一位先祖時，只記錄了生卒年齡和後代，唯獨對以諾加上「他與上帝同行」的評語。在希伯來文原文中，「同行」（hithallekh）有「走在一起、保持親密關係、陪伴」的意思。這不是指一次性的宗教行為，而是一種持續的生命姿態——日復一日、年復一年地讓上帝成為生命的同行者，而不只是偶爾求告的對象。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">以諾與以利亞：兩位活著升天的人</h4>
            <p className="text-gray-700 leading-relaxed">
              聖經中有兩位沒有死亡記錄而被上帝接去的人：以諾和先知以利亞（列王記下 2章）。兩人在末世論中都有特殊地位——啟示錄中有人認為在末世出現的「兩個見證人」就是以諾和以利亞。希伯來書11:5說：「以諾因著信，被接去，不至於見死。」將他列入信心英雄的行列。
            </p>
          </div>
        </div>
      </div>

      {/* 反思問題 */}
      <div className="mb-6 border border-amber-100 rounded-xl overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">反思問題</span>
        </div>
        <div className="p-5 bg-white space-y-3">
          {[
            '「與上帝同行」是一種持續的生命姿態，而非偶爾的宗教行為。你如何描述自己目前與上帝的關係——是「同行」，還是「偶爾打個招呼」？',
            '以諾活在一個暴力橫行、信仰衰微的時代，卻選擇與上帝同行。在你周遭的環境中，有什麼因素讓信仰顯得困難？你如何面對？',
            '以諾活了365年，比身邊所有人都短，卻得到最高的評語。你認為人生的意義在於長度還是深度？',
          ].map((q, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0 mt-0.5">{i + 1}.</span>
              <p className="text-gray-700 leading-relaxed">{q}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 具體實踐方針 */}
      <div className="mb-6 border border-green-100 rounded-xl overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 flex items-center gap-2">
          <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">具體實踐方針</span>
        </div>
        <div className="p-5 bg-white space-y-4">
          <div>
            <h4 className="font-semibold text-green-700 mb-2">操練「與上帝同行」的日常習慣</h4>
            <ul className="space-y-1.5 text-sm text-gray-700 ml-1">
              <li className="flex gap-2"><span className="text-green-500 flex-shrink-0 mt-0.5">•</span>嘗試把日常的瑣碎事務帶到上帝面前：吃飯前、出門前、工作時的片刻——不只是在「靈修時間」才想到上帝</li>
              <li className="flex gap-2"><span className="text-green-500 flex-shrink-0 mt-0.5">•</span>練習「呼吸禱告」：每次感到壓力或轉換場景時，用一句話向上帝說話（例如：「主，我在這裡，你也在這裡」）</li>
              <li className="flex gap-2"><span className="text-green-500 flex-shrink-0 mt-0.5">•</span>在今晚睡前回顧：今天有哪些時刻你「與上帝同行」？哪些時刻你走偏了？</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">本週聖經閱讀</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {[
                { ref: '創世記 5:21–24', desc: '以諾與上帝同行，被接去' },
                { ref: '希伯來書 11:5–6', desc: '以諾：信心英雄' },
                { ref: '猶大書 14–15節', desc: '以諾的預言引用' },
              ].map(item => (
                <div key={item.ref} className="bg-green-50 border border-green-100 rounded-lg px-3 py-2">
                  <p className="font-semibold text-green-700">{item.ref}</p>
                  <p className="text-gray-600 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 border border-gray-200 rounded-xl p-5 bg-gray-50">
        <h4 className="font-semibold text-gray-700 mb-3 text-sm">相關人物</h4>
        <div className="flex flex-wrap gap-2 text-xs">
          {[{ name: '瑪土撒拉', desc: '兒子' }, { name: '挪亞', desc: '後代' }, { name: '塞特', desc: '祖先' }].map(p => (
            <span key={p.name} className="bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">
              <span className="font-semibold text-amber-700">{p.name}</span>
              <span className="mx-1 text-gray-300">·</span>{p.desc}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
