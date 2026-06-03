import React from 'react';
import { Star, Search, HelpCircle, Check, BookOpen, User } from 'lucide-react';

export default function Book23Seth() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">

      <div className="mb-8 rounded-2xl overflow-hidden shadow-lg border border-amber-200">
        <div className="bg-gradient-to-r from-amber-600 to-red-700 px-5 py-3 flex flex-wrap gap-2">
          <span className="bg-white/20 text-white text-xs font-semibold px-2 py-0.5 rounded-full">創世記</span>
          <span className="ml-auto text-white/80 text-xs font-medium">亞當和夏娃的三男</span>
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6">
          <p className="text-sm text-amber-700 font-medium mb-1">Seth</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-1">塞特</h1>
          <p className="text-base text-amber-700 font-semibold mb-4">亞當和夏娃的三男</p>
          <div className="relative bg-white border-2 border-amber-300 rounded-2xl px-5 py-4 shadow-sm inline-block max-w-sm">
            <div className="absolute -left-3 top-5 w-0 h-0 border-t-8 border-t-transparent border-r-[12px] border-r-amber-300 border-b-8 border-b-transparent" />
            <p className="text-gray-800 font-medium text-sm leading-relaxed">是我開始向上帝禱告的</p>
          </div>
          <div className="mt-4 flex items-center gap-1 text-sm text-gray-600">
            <BookOpen className="w-4 h-4 text-amber-500" />
            <span>創世記 4–5章</span>
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
              代替亞伯出生的亞當三男
            </h3>
            <p className="text-gray-700 leading-relaxed">
              該隱（→該隱，p.26）和亞伯（→亞伯，p.27）的弟弟。亞當一百三十歲時生的小孩，在該隱被逐出後出生，是上帝贈予亞當，以代替上帝所喜愛的亞伯。日後還有弟弟和妹妹出生，但只有塞特以該隱和亞伯之兄弟身分被記錄下來。
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              一般認為他活到九百一十二歲，是挪亞（→挪亞，p.32）、亞伯拉罕（→亞伯拉罕，p.42）等以色列歷史上重要人物的祖先（創世記 4–5章）。
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
              以諾士時代開始呼求上帝的名
            </h3>
            <p className="text-gray-700 leading-relaxed">
              創世記4:26記載：「那時候，人才開始呼求耶和華的名。」塞特的後代從他的孫子以挪士那一代起，開始有組織地呼求和崇拜上帝，因此塞特被認為是禱告傳統的開創者，也是亞伯拉罕信仰血脈的起點。
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-800">
            <span className="font-semibold">📌 小知識：</span>塞特的長相據說神似父親亞當（創世記 5章）。
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
            '塞特是亞當的第三個兒子，在該隱殺亞伯之後出生，是上帝賜給亞當「代替亞伯」的兒子。',
            '他是整個以色列信仰血脈的祖先——挪亞、亞伯拉罕、大衛、直至耶穌基督的家譜都源自塞特。',
            '從他的孫子以挪士時代起，人類開始呼求上帝的名，塞特一系是信仰禱告傳統的開創者。',
            '他的長壽（912歲）是那個時代的常態，象徵了最初人類與上帝之間較為接近的關係。',
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
            <h4 className="font-semibold text-gray-800 mb-2">兩條家譜：該隱一系 vs 塞特一系</h4>
            <p className="text-gray-700 leading-relaxed">
              創世記4–5章並列了兩條家譜：該隱的後代建造了城市、發展了音樂和金屬工藝（文明的發展），但也出現了拉麥的「復仇之歌」（暴力的升級）；塞特的後代則以信仰和敬虔著稱，其中有「與上帝同行」的以諾（→以諾，p.31）和得上帝眷顧的挪亞（→挪亞，p.32）。這兩條家譜的並列，展示了人類文明從一開始就有兩個走向：以能力和文化自足，或以信仰和謙卑依靠上帝。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">從悲劇中延續的盼望</h4>
            <p className="text-gray-700 leading-relaxed">
              亞伯被殺後，亞當一家陷入極大的悲劇——長子變成殺人犯，次子被殺。塞特的出生，代表了在悲劇之後上帝對人類的持續眷顧。夏娃為塞特命名時說：「上帝給我立了另一個後裔代替亞伯，因為該隱殺了他。」（創4:25）塞特的名字有「被賜予」、「被指定」的意思，象徵了上帝在審判之後仍有恩典在繼續。
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
            '塞特在家族的悲劇（兄殺弟）之後出生，成為新的盼望。你生命中有沒有在悲傷或失敗之後，意外出現的「新的開始」？',
            '塞特一系「開始呼求上帝的名」——你的禱告生活是如何開始的？是什麼契機讓你開始認真祈禱？',
            '該隱一系建造文明，塞特一系建立信仰——你認為文明發展和信仰發展是衝突的，還是可以並行的？',
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
            <h4 className="font-semibold text-green-700 mb-2">建立「呼求上帝」的習慣</h4>
            <p className="text-gray-700 text-sm mb-2">塞特的後代「開始呼求上帝的名」——這不是一次性的決定，而是一種生活習慣的建立。</p>
            <ul className="space-y-1.5 text-sm text-gray-700 ml-1">
              <li className="flex gap-2"><span className="text-green-500 flex-shrink-0 mt-0.5">•</span>設定每天一個固定時間「呼求上帝的名」——哪怕只是5分鐘</li>
              <li className="flex gap-2"><span className="text-green-500 flex-shrink-0 mt-0.5">•</span>在遇到困難時，第一個反應練習成「先禱告，再行動」</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">本週聖經閱讀</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {[
                { ref: '創世記 4:25–26', desc: '塞特的出生與呼求上帝' },
                { ref: '創世記 5章', desc: '塞特及其後代的家譜' },
                { ref: '路加福音 3:23–38', desc: '耶穌的家譜，追溯至塞特' },
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
          {[{ name: '亞當', desc: '父親' }, { name: '夏娃', desc: '母親' }, { name: '該隱', desc: '哥哥' }, { name: '亞伯', desc: '被殺的哥哥' }, { name: '挪亞', desc: '後代' }].map(p => (
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
