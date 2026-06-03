import React from 'react';
import { Star, Search, HelpCircle, Check, BookOpen, User } from 'lucide-react';

export default function Book23Eve() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">

      <div className="mb-8 rounded-2xl overflow-hidden shadow-lg border border-amber-200">
        <div className="bg-gradient-to-r from-amber-600 to-red-700 px-5 py-3 flex flex-wrap gap-2">
          <span className="bg-white/20 text-white text-xs font-semibold px-2 py-0.5 rounded-full">創世記</span>
          <span className="ml-auto text-white/80 text-xs font-medium">用亞當的一部分創造出的女人</span>
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6">
          <p className="text-sm text-amber-700 font-medium mb-1">Eva</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-1">夏娃</h1>
          <p className="text-base text-amber-700 font-semibold mb-4">用亞當的一部分創造出的女人</p>
          <div className="relative bg-white border-2 border-amber-300 rounded-2xl px-5 py-4 shadow-sm inline-block max-w-sm">
            <div className="absolute -left-3 top-5 w-0 h-0 border-t-8 border-t-transparent border-r-[12px] border-r-amber-300 border-b-8 border-b-transparent" />
            <p className="text-gray-800 font-medium text-sm leading-relaxed">我生下人類最早的小孩</p>
          </div>
          <div className="mt-4 flex items-center gap-1 text-sm text-gray-600">
            <BookOpen className="w-4 h-4 text-amber-500" />
            <span>創世記 2–4章</span>
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
              從亞當肋骨創造出的女人
            </h3>
            <p className="text-gray-700 leading-relaxed">
              上帝讓亞當（→亞當，p.24）睡著，取其肋骨的一部分創造了夏娃。她成為亞當的妻子，一起生活在伊甸園；有一次，她在蛇的引誘下偷嘗了「禁果」。當上帝詰問她時，她把責任推給蛇，上帝因此施以懲罰，讓女人以後都要受到男人支配，並承受生產的痛苦（創世記 2–3章）。
            </p>
          </div>

          {/* Episode 01 */}
          <div className="border-l-4 border-red-400 bg-red-50 rounded-r-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">episode 01</span>
              <h3 className="font-semibold text-red-800">「禁果」的真面目是？</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm mb-2">
              上帝代代「吃了會沒命」的「禁果」，然而蛇卻以「吃了會變聰明」來誘惑夏娃，夏娃吃了那果實後的確變聰明了一點……所以以後也讓亞當吃了那果實。
            </p>
            <p className="text-gray-700 leading-relaxed text-sm">
              舊約聖經中只記載是「樹的果實」，不過後世認為「禁果」就是蘋果的想法卻根深柢固。
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-800">
            <span className="font-semibold">📌 小知識：</span>夏娃這名字在希伯來文中代表「賦予生命者」、「生命之源」的意思。
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
            '夏娃是上帝從亞當的肋骨所創造的第一個女人，成為亞當的妻子，人類的始祖之一。',
            '她在蛇的誘惑下偷吃了禁果，又把果子給了亞當，導致兩人被逐出伊甸園——聖經稱此為人類的「墮落」。',
            '面對上帝的詰問，她把責任推給蛇，這是人類第一次「推卸責任」的記錄。',
            '她的名字「夏娃」在希伯來語意指「生命之源」，象徵她作為人類母親的角色。',
            '蛇以「吃了會變聰明」來誘惑夏娃，呈現了罪的本質：以看似美好的謊言取代上帝的真實話語。',
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
            <h4 className="font-semibold text-gray-800 mb-2">蛇的誘惑策略：扭曲上帝的話</h4>
            <p className="text-gray-700 leading-relaxed">
              蛇對夏娃說的第一句話是：「上帝豈是真說不許你們吃園中所有樹上的果子嗎？」（創世記3:1）這是一個刻意扭曲的問題——上帝實際上只禁止吃一棵樹的果子，蛇卻讓夏娃覺得上帝是在限制她「所有」的享受。扭曲上帝的話、讓人對上帝的善意產生懷疑，是誘惑最常用的手法。對此保持敏感，是信仰操練的重要一環。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">夏娃與女性神學</h4>
            <p className="text-gray-700 leading-relaxed">
              夏娃的故事在歷史上常被用來為女性的次等地位辯護，但現代神學家指出這是誤讀。創世記2:18上帝說要為亞當造一個「配偶幫助他」，希伯來原文「ezer」（幫助者）同樣被用來描述上帝（詩篇121:2）——這不是地位的低下，而是能力的互補。男女共同按上帝形象被造，共同蒙召管理受造物（創世記1:27-28），是聖經最基礎的人論。
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
            '蛇先質疑上帝的話，再提供「更好的理由」——你在生活中有沒有遇過類似的誘惑邏輯？那是什麼情況？',
            '夏娃「看見那棵樹的果子好作食物，也悅人的眼目，且是可喜愛的」——你注意到誘惑進入生命時通常以什麼面貌出現？',
            '夏娃把責任推給蛇，這是人類的第一次卸責。你通常用什麼方式為自己的錯誤找藉口？',
            '上帝問「你在哪裡？」時，其實上帝知道答案——這個問題是為誰問的？這對你有什麼意義？',
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
            <h4 className="font-semibold text-green-700 mb-2">識別誘惑的邏輯</h4>
            <ul className="space-y-1.5 text-sm text-gray-700 ml-1">
              <li className="flex gap-2"><span className="text-green-500 flex-shrink-0 mt-0.5">•</span>當一個想法讓你質疑「上帝真的說不行嗎？」時，先停下來讀聖經原文，不要靠感覺判斷</li>
              <li className="flex gap-2"><span className="text-green-500 flex-shrink-0 mt-0.5">•</span>找一個可以彼此問責的屬靈朋友，在面臨誘惑時互相提醒</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">本週聖經閱讀</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {[
                { ref: '創世記 2:18–25', desc: '夏娃的創造' },
                { ref: '創世記 3章', desc: '誘惑、墮落與懲罰' },
                { ref: '提摩太前書 2:13–15', desc: '保羅對夏娃的引用' },
                { ref: '哥林多後書 11:3', desc: '蛇誘惑夏娃的警示' },
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
          {[{ name: '亞當', desc: '丈夫' }, { name: '該隱', desc: '長男' }, { name: '亞伯', desc: '次男' }, { name: '塞特', desc: '三男' }].map(p => (
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
