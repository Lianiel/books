import React from 'react';
import { Star, Search, HelpCircle, Check, BookOpen, User } from 'lucide-react';

export default function Book23Cain() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">

      <div className="mb-8 rounded-2xl overflow-hidden shadow-lg border border-amber-200">
        <div className="bg-gradient-to-r from-amber-600 to-red-700 px-5 py-3 flex flex-wrap gap-2">
          <span className="bg-white/20 text-white text-xs font-semibold px-2 py-0.5 rounded-full">創世記</span>
          <span className="ml-auto text-white/80 text-xs font-medium">亞當和夏娃的長男</span>
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6">
          <p className="text-sm text-amber-700 font-medium mb-1">Cain</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-1">該隱</h1>
          <p className="text-base text-amber-700 font-semibold mb-4">亞當和夏娃的長男</p>
          <div className="relative bg-white border-2 border-amber-300 rounded-2xl px-5 py-4 shadow-sm inline-block max-w-sm">
            <div className="absolute -left-3 top-5 w-0 h-0 border-t-8 border-t-transparent border-r-[12px] border-r-amber-300 border-b-8 border-b-transparent" />
            <p className="text-gray-800 font-medium text-sm leading-relaxed">
              我是人類第一個嬰兒！也是第一個殺人犯……
            </p>
          </div>
          <div className="mt-4 flex items-center gap-1 text-sm text-gray-600">
            <BookOpen className="w-4 h-4 text-amber-500" />
            <span>創世記 4章</span>
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
              人類第一個嬰兒，種田人的該隱
            </h3>
            <p className="text-gray-700 leading-relaxed">
              亞當（→亞當，p.24）和夏娃（→夏娃，p.25）所生的長子，人類第一個呱呱墜地的嬰兒。相傳有著一頭泛紅的金髮，是個種田的人。
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              有一年收穫祭，該隱將自己收成的農作物獻給上帝，不料上帝卻對他的祭品不屑一顧，獨鍾弟弟亞伯（→亞伯，p.27）所獻祭的肥美羔羊。內心大受打擊的該隱因嫉妒而殺死弟弟（創世記 4章）。
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
              被詛咒，流浪到擄得之地
            </h3>
            <p className="text-gray-700 leading-relaxed">
              上帝得知後說他必受詛咒，必須離開這片土地。「你耕種的土地再也不會給你收成，你將在地上流浪。」該隱最後在擄得之地落腳，與妻子生下兒子以諾，並在那裡建造一座城，用兒子的名字「以諾」為那城市命名（創世記 4章）。
            </p>
          </div>

          {/* Let's read */}
          <div className="border-l-4 border-red-400 bg-red-50 rounded-r-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">Let's read</div>
              <h3 className="font-semibold text-red-800">該隱居住地「擄得」的實際情況</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm">
              該隱因殺死弟弟亞伯受到天譴，被逐出生長的地方。因耕種的土地都沒有收成，難以定居，被迫流浪。最後他來到擄得之地，「擄得」在希伯來文中含有「流浪」的意思，因此也有人將他在流浪之地（擄得）解釋為他過著流浪的生活。
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-800">
            <span className="font-semibold">📌 小知識：</span>該隱這名字在希伯來語中意指「鐵匠」。其後代士八該隱即是位鐵匠。
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
            '該隱是人類第一個出生的嬰兒，也是第一個殺人犯，他殺死了弟弟亞伯，成為聖經中罪惡擴展的第一個例子。',
            '他的祭物被上帝拒絕，不是因為他的職業（種田），而是因為他獻祭的態度不如亞伯真誠。',
            '上帝在詛咒該隱之前特意警告他：「罪就伏在門前，它必戀慕你，你卻要制伏它」——說明罪在行動之前，人有機會選擇不犯。',
            '即使被詛咒流浪，上帝仍在該隱身上留下「記號」保護他，顯示上帝的憐憫超越了審判。',
            '該隱建立了世界上第一座城，以兒子以諾命名，體現了人即使在罪中仍有創造和建設的能力。',
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
            <h4 className="font-semibold text-gray-800 mb-2">上帝為何拒絕該隱的祭物？</h4>
            <p className="text-gray-700 leading-relaxed">
              聖經沒有明說原因，但希伯來書11:4提到亞伯「因著信」獻祭，暗示問題在於信心和態度，而非祭物的種類。相傳亞伯從仔羊中挑選了「頭生的、最肥美的」來獻，顯示出精心挑選和誠摯奉獻的心；該隱則只是拿了「農作物的一些」。這個故事提醒我們：上帝所看重的，是奉獻者的心，而非禮物的外表價值。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">嫉妒的機制與轉化</h4>
            <p className="text-gray-700 leading-relaxed">
              上帝在該隱殺害亞伯之前，已明確警告他：「你若行得好，豈不蒙悅納？你若行得不好，罪就伏在門前。它必戀慕你，你卻要制伏它！」（創4:7）嫉妒在行動之前有一個窗口，在那個窗口裡，人可以選擇轉化而非放縱。心理學研究也顯示，嫉妒若能被轉化為「欣賞他人的成就並激勵自己進步」，可以成為建設性的動力；但若被放任為「毀滅對方」的衝動，就會走向該隱的結局。
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
            '上帝問該隱：「你兄弟亞伯在哪裡？」該隱回答：「我不知道，我豈是看守我兄弟的人嗎？」你認為我們是否有責任關心身邊人的安危和靈魂？',
            '你有沒有過因為嫉妒而想要貶低或傷害他人的念頭？那時你如何處理那個衝動？',
            '上帝警告該隱「罪伏在門前」，但他沒有理會。你有沒有在犯某個錯誤之前，已感受到內心的警示聲音？那聲音是什麼？',
            '即使殺了弟弟，上帝仍保護該隱不被人殺害。這個「保護殺人犯」的行為，反映了上帝怎樣的性格？',
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
            <h4 className="font-semibold text-green-700 mb-2">對抗嫉妒的三個步驟</h4>
            <ul className="space-y-1.5 text-sm text-gray-700 ml-1">
              <li className="flex gap-2"><span className="text-green-500 flex-shrink-0 mt-0.5">•</span><span><strong>承認：</strong>當感到嫉妒時，誠實地承認它的存在，而不是假裝沒有或壓下去</span></li>
              <li className="flex gap-2"><span className="text-green-500 flex-shrink-0 mt-0.5">•</span><span><strong>對話：</strong>向上帝說出你的感受，就像對話一樣——「我看見他/她得到了那個，而我感到不公平……」</span></li>
              <li className="flex gap-2"><span className="text-green-500 flex-shrink-0 mt-0.5">•</span><span><strong>轉化：</strong>刻意為讓你嫉妒的那個人禱告，祝福他/她——這是打破嫉妒循環最有效的操練之一</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">本週聖經閱讀</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {[
                { ref: '創世記 4:1–16', desc: '該隱殺亞伯的全過程' },
                { ref: '希伯來書 11:4', desc: '亞伯因信獻祭' },
                { ref: '約翰一書 3:11–12', desc: '新約對該隱的警示' },
                { ref: '創世記 4:17–24', desc: '該隱的後代與文化建造' },
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
          {[{ name: '亞當', desc: '父親' }, { name: '夏娃', desc: '母親' }, { name: '亞伯', desc: '被殺的弟弟' }, { name: '塞特', desc: '另一個弟弟' }].map(p => (
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
