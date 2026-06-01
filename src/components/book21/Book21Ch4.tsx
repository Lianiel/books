import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Search, HelpCircle, Check } from 'lucide-react';

export default function Book21Ch4() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    exploration: true,
    questions: true,
    practice: true,
  });
  const toggle = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">第四章</h1>
        <h2 className="text-xl font-semibold text-gray-700">生活的準則——十誡</h2>
        <p className="text-gray-500 text-sm mt-1">神給人生的行為藍圖，16個主題</p>
      </div>

      {/* 十誡文本 */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-6 mb-6">
        <h3 className="font-bold text-amber-800 mb-3 text-center">十誡（出埃及記20:1-17）</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
          {[
            '第一誡：除我以外，你不可有別的神',
            '第二誡：不可為自己雕刻偶像',
            '第三誡：不可妄稱耶和華你神的名',
            '第四誡：當記念安息日，守為聖日',
            '第五誡：當孝敬父母',
            '第六誡：不可殺人',
            '第七誡：不可姦淫',
            '第八誡：不可偷盜',
            '第九誡：不可作假見證陷害人',
            '第十誡：不可貪戀人的房屋、妻子及財物',
          ].map((c, i) => (
            <div key={i} className="bg-white rounded px-3 py-2 border border-amber-100">{c}</div>
          ))}
        </div>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">

            <div>
              <h3 className="font-bold text-purple-700 mb-2">十誡：行為的藍圖，不是行為的枷鎖</h3>
              <p className="text-gray-700 leading-relaxed">巴刻用汽車說明書作比喻：如果你按製造商的指示駕駛，汽車就能充分發揮性能；同樣，神藉著十誡告訴我們，生命要怎樣才能運作得最好。十誡不是要限制我們的自由，而是要幫助我們找到真正的自由——在正確的關係和行為模式中，人才能真正興旺。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">「我和你」——神與人的位格關係</h3>
              <p className="text-gray-700 leading-relaxed">十誡的基礎是「我是耶和華你的神」——這是一個「我—你」的位格關係，不是抽象的道德律。神是愛我們的父，向我們發出邀請而非命令：「讓我們建立正確的關係。」當我們遵守十誡，不是在博取神的喜愛，而是在回應祂對我們的愛——就像兒女因愛父母而願意遵守家規。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">律法和愛——不是對立，而是盟友</h3>
              <p className="text-gray-700 leading-relaxed">有人認為愛就夠了，不需要律法；但巴刻指出：愛是盲目的，需要律法作眼睛。真正的愛不是隨心所欲，而是按神的標準去行善。同樣，遵行律法需要愛作動力，否則就成了法利賽主義。耶穌說十誡濃縮在兩條誡命中：「愛神」和「愛鄰舍」（馬太22:37-39）。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">前四誡：關乎對神的責任</h3>
              <p className="text-gray-700 leading-relaxed">第一誡（只敬拜神）：神要我們的全人委身，不允許競爭的忠誠。第二誡（不拜偶像）：偶像不只是雕像，而是任何取代神在我們心中首位的東西——金錢、名譽、舒適、甚至家人。第三誡（不妄稱神名）：尊重神的名包括守諾言、不用祂的名說謊。第四誡（守安息日）：時間是神的，每週一天的停息是承認神的主權，也是靈魂的需要。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">後六誡：關乎對人的責任</h3>
              <p className="text-gray-700 leading-relaxed">第五誡（孝敬父母）：家庭是社會的基本單位，孝敬父母是神的心意，也是社會穩定的基礎。第六誡（不可殺人）：生命是神聖的，因為人帶著神的形象（創1:27）。這誡命也禁止仇恨、憤怒（太5:21-22）和所有破壞生命的行為。第七誡（不可姦淫）：性是神聖的，婚姻是神設立的，婚外性行為破壞了這個神聖的設計。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">後三誡：財富、真實、慾望</h3>
              <p className="text-gray-700 leading-relaxed">第八誡（不可偷盜）：財產所有權受神的保護，偷盜包括剝削、欺騙、拖欠。神希望我們作財物的好管家。第九誡（不可作假見證）：真話是神聖的，謊言破壞信任，也破壞人的形象（我們反映了「真實（阿們）的神」）。第十誡（不可貪戀）：是唯一針對內心態度的誡命，揭示神關心我們的動機，不只是行為。貪戀是萬惡之根源（提前6:10）。</p>
            </div>

          </div>
        )}
      </div>

      {/* 延伸探討 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('exploration')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">延伸探討</span>
          </div>
          {expanded['exploration'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['exploration'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">十誡在新約時代仍有效嗎？</h4>
              <p className="text-gray-700 leading-relaxed">有些人認為基督徒在恩典下，不再需要遵守十誡。但耶穌說：「我來不是要廢掉律法，乃是要成全。」（太5:17）祂一方面確認了十誡的道德精神，另一方面更深化了其要求（如憤怒等同謀殺）。保羅也說：「律法是聖潔的……律法原是好的。」（羅7:12）十誡的精神在新約中全部保留，只是第四誡（守日）在基督復活後轉移到主日。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">現代偶像崇拜的形態</h4>
              <p className="text-gray-700 leading-relaxed">今天很少有人跪拜木頭或石頭，但偶像崇拜從未消失。提摩太前書6:10「貪財是萬惡之根」——金錢是最常見的現代偶像。此外：對成功的過度渴求、對他人認可的依賴、對安全感的執著（超過對神的信靠）、甚至對美好家庭生活的追求若凌駕於神之上，都是偶像。「你所愛的是什麼，那就是你的神。」（馬丁路德）</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">生命的神聖性——第六誡的現代應用</h4>
              <p className="text-gray-700 leading-relaxed">「不可殺人」的原則在現代有廣泛的應用：（1）墮胎：遺傳學顯示，從受孕開始胎兒就已是一個形成中的人；（2）安樂死：即使出於憐憫，也不能讓我們奪取神的主權；（3）自殺：是生命秩序的違反；（4）死刑和戰爭：有爭議，但十誡本身並不直接適用——聖經其他地方允許合法的司法和戰爭執行（出21:12-17）。這些議題要求我們在尊重生命的前提下謹慎思考。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「處境倫理」的問題</h4>
              <p className="text-gray-700 leading-relaxed">1960年代流行「處境倫理」（situational ethics）：認為在任何處境下，只要動機是愛，就沒有絕對的對錯。表面上聽起來充滿愛，實際上卻讓人失去道德的錨點。巴刻指出：沒有神的律法指引，「愛」是盲目的，容易被自我欺騙所操縱。真正的愛不是「隨機應變」，而是以神的啟示和律法為指南，在其框架內靈活地服事他人。</p>
            </div>
          </div>
        )}
      </div>

      {/* 反思問題 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">反思問題</span>
          </div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && (
          <div className="p-5 bg-white space-y-3">
            {[
              '你的生命中有沒有「偶像」——什麼東西佔據了本應屬於神的首位？你如何辨認它？',
              '「不可妄稱耶和華的名」在日常生活中（不只是用髒話）意味著什麼？你怎樣用自己的生活尊崇神的名？',
              '你如何守安息日？在現代快節奏的生活中，你如何實踐每週一天的停息？',
              '「不可殺人」包括仇恨和憤怒（太5:21-22）。你生命中有沒有需要處理的仇恨或憤怒？',
              '第十誡（不可貪戀）是唯一針對內心動機的誡命。你最容易貪戀的是什麼？這怎樣影響你與神的關係？',
              '巴刻說遵守十誡應該是對神之愛的回應，不是要賺取神的接納。這兩種動機在你的信仰生活中各佔多少比例？',
            ].map((q, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0">{i + 1}.</span>
                <p className="text-gray-700">{q}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 具體實踐方針 */}
      <div className="mb-6 border border-green-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('practice')} className="w-full px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">具體實踐方針</span>
          </div>
          {expanded['practice'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['practice'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 十誡個人檢視</h4>
              <p className="text-gray-700 mb-2">花30分鐘，逐條讀十誡，並誠實地問自己：「我在這一條上做得如何？」不是要定罪自己，而是讓聖靈光照，帶來悔改和更新。寫下三條你認為最需要在生活中改進的誡命，並想出具體的改變步驟。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">⏰ 建立安息日的操練</h4>
              <p className="text-gray-700 mb-2">這週選擇一天（或半天），真正地停下來：不工作、不刷手機（工作相關）、不生產——只是敬拜、休息、享受神的創造和人際關係。安息不是懶惰，而是宣告：我的生命不靠自己的努力維持，而是靠神的恩典。記錄這次安息的體驗。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 識別並面對你的「現代偶像」</h4>
              <p className="text-gray-700 mb-2">問自己三個問題：（1）失去什麼會讓我最恐懼？（2）得到什麼能讓我最快樂？（3）我把最多的時間、金錢和精力投在哪裡？這些答案往往揭示你的「偶像」。選擇一個具體的行動來重新排列優先順序——例如把本來花在某個偶像上的時間，用來與神同在或服事他人。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 「真話是神聖的」——誠實的操練</h4>
              <p className="text-gray-700 mb-2">本週刻意留意你的言語：有沒有誇大、半真半假、不必要的謊言？每天晚上回顧：今天我有沒有說謊？包括「善意的謊言」。如果有，向神認罪，並在適當時向相關的人道歉。神是「真實（阿們）的神」，我們的言語應反映祂的性格。</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 mt-2">
              <p className="text-green-800 font-medium mb-1">🕊️ 禱告詞</p>
              <p className="text-green-700 italic leading-relaxed">「神啊，感謝祢藉著十誡給我一個清晰的生活藍圖。我承認我常常偏離這個藍圖——我有我的偶像，我說謊，我貪戀，我不休息。今天我不是靠遵守律法來賺得祢的愛，而是因為接受了祢的愛，所以願意從愛的動機出發遵行祢的命令。幫助我在每一個關係中、每一個決定中、每一個念頭中，真實地活出『愛神愛人』的精神。奉耶穌基督的名，阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
