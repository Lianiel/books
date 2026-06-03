import React from 'react';
import { Star, Search, HelpCircle, Check, BookOpen, Users } from 'lucide-react';

export default function Book23EnoshEtc() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">

      <div className="mb-8 rounded-2xl overflow-hidden shadow-lg border border-amber-200">
        <div className="bg-gradient-to-r from-amber-600 to-red-700 px-5 py-3 flex flex-wrap gap-2">
          <span className="bg-white/20 text-white text-xs font-semibold px-2 py-0.5 rounded-full">創世記</span>
          <span className="ml-auto text-white/80 text-xs font-medium">塞特的子孫們</span>
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6">
          <p className="text-sm text-amber-700 font-medium mb-1">Enosh · Methuselah · Lamech</p>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">以挪士、瑪土撒拉、拉麥</h1>
          <p className="text-base text-amber-700 font-semibold mb-4">塞特的子孫們</p>
          <div className="relative bg-white border-2 border-amber-300 rounded-2xl px-5 py-4 shadow-sm inline-block max-w-sm">
            <div className="absolute -left-3 top-5 w-0 h-0 border-t-8 border-t-transparent border-r-[12px] border-r-amber-300 border-b-8 border-b-transparent" />
            <p className="text-gray-800 font-medium text-sm leading-relaxed">我們是以方舟聞名的挪亞之祖先</p>
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
          <Users className="w-5 h-5 text-amber-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">主要內容</span>
        </div>
        <div className="p-5 bg-white space-y-5">

          <div>
            <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
              以挪士：人類開始呼求上帝的時代
            </h3>
            <p className="text-gray-700 leading-relaxed">
              以挪士是塞特九百零五歲時所生的兒子。創世記4:26記載：「那時候，人才開始呼求耶和華的名。」——從以挪士的時代起，人類開始有組織地敬拜和呼求上帝的名，是正式信仰敬拜傳統的起點。
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
              瑪土撒拉：聖經中最長壽的人
            </h3>
            <p className="text-gray-700 leading-relaxed">
              瑪土撒拉是以挪士的孫子，活著被上帝召喚的以諾（→以諾，p.31）的兒子。他活到九百六十九歲，是整個聖經中壽命最長的人，因此在猶太教和基督教文化圈中，長壽的人常被比喻作「瑪土撒拉」。
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">3</span>
              拉麥：挪亞之父
            </h3>
            <p className="text-gray-700 leading-relaxed">
              拉麥是瑪土撒拉一百八十七歲時得到的兒子，也是打造方舟、在大洪水中倖存下來為人所知的挪亞（→挪亞，p.32）之父（創世記 5章）。
            </p>
          </div>

          {/* Let's read */}
          <div className="border-l-4 border-red-400 bg-red-50 rounded-r-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">Let's read</div>
              <h3 className="font-semibold text-red-800">長壽紀錄保持人、聖人瑪土撒拉</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm mb-2">
              瑪土撒拉一百八十七歲時，長子拉麥誕生。挪亞則在拉麥一百八十二歲時出生。挪亞六百歲時發生大洪水。
            </p>
            <p className="text-gray-700 leading-relaxed text-sm">
              計算：187 + 182 + 600 = 969，正好是瑪土撒拉去世的年齡。因此可以認為，上帝一直等到瑪土撒拉死後才引發大洪水。
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-800">
            <span className="font-semibold">📌 小知識：</span>查閱整個舊約和新約聖經，瑪土撒拉都是最長壽的人。
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
            '以挪士的時代是人類有組織地「呼求上帝的名」的開始，是正式敬拜傳統的起點。',
            '瑪土撒拉活到969歲，是聖經中記錄最長壽的人，成為後世「極度長壽」的代名詞。',
            '有趣的計算顯示，瑪土撒拉去世的那年恰好是挪亞洪水發生的那年——上帝似乎等他去世後才降下洪水。',
            '這三人是連接亞當到挪亞的信仰橋樑，確保了敬虔的血脈延續到洪水之後。',
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
        <div className="p-5 bg-white space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">長壽的意義：離上帝較近的時代？</h4>
            <p className="text-gray-700 leading-relaxed">
              創世記5章的人物普遍活到八九百歲，讓現代人感到難以置信。神學界有幾種詮釋：有人認為這是「上帝年」（神的曆法比人的更長）；有人認為這是用來建立各家族崇高地位的文學手法；也有人認為，這反映了人類離上帝創造狀態較近時，生命力更為旺盛，隨著罪的影響加深，壽命逐漸縮短。無論哪種詮釋，這些人物代表的是信仰的傳承，而非僅僅是年齡的數字。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">家譜在聖經中的神學意義</h4>
            <p className="text-gray-700 leading-relaxed">
              對現代讀者而言，聖經的家譜章節往往是最容易跳過的部分，但它們承載著重要的神學訊息：信仰的傳承是真實的歷史，不只是故事；每一個名字背後都是一個真實存在的人；上帝在歷史中的計劃是透過普通人的生命連接起來的。創世記5章的家譜，正是連接亞當的「墮落」和挪亞的「洪水」的橋樑。
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
            '創世記5章每隔幾句就說「他就死了」——在一個又一個壽命，這句「他就死了」反覆出現，提醒你什麼？',
            '瑪土撒拉的生命計算顯示上帝似乎等他離世才降洪水。你如何理解上帝的時間安排和耐心？',
            '你家族中有沒有像這些人物一樣，信仰傳承的橋樑角色？你希望自己成為下一代信仰的「橋樑」嗎？',
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
            <h4 className="font-semibold text-green-700 mb-2">成為家族信仰的橋樑</h4>
            <ul className="space-y-1.5 text-sm text-gray-700 ml-1">
              <li className="flex gap-2"><span className="text-green-500 flex-shrink-0 mt-0.5">•</span>思考：在你的家族中，信仰是如何傳承下來的？有沒有你要感謝的「以挪士」或「瑪土撒拉」？</li>
              <li className="flex gap-2"><span className="text-green-500 flex-shrink-0 mt-0.5">•</span>行動：這週聯繫一個家族中你希望與他/她分享信仰的人，哪怕只是一句問候或一個邀請</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">本週聖經閱讀</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {[
                { ref: '創世記 5章', desc: '亞當到挪亞的家譜' },
                { ref: '創世記 4:26', desc: '以挪士時代開始呼求上帝' },
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
          {[{ name: '塞特', desc: '祖先' }, { name: '以諾', desc: '瑪土撒拉之父' }, { name: '挪亞', desc: '拉麥之子' }].map(p => (
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
