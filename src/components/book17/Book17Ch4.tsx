import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Search, HelpCircle, Check } from 'lucide-react';

export default function Book17Ch4() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    exploration: true,
    questions: true,
    practice: true,
  });

  const toggleSection = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">第四章</h1>
        <h2 className="text-xl font-semibold text-gray-700">教會與傳道人的關係</h2>
        <p className="text-sm text-gray-500 mt-1">哥林多前書 三1-23</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">一、屬肉體的哥林多人（三1-4）</h4>
              <p className="text-gray-700 leading-relaxed">保羅指出哥林多信徒仍是「屬肉體的」，不是「屬靈的」。他只能用奶餵養他們，不能給他們吃乾糧，因為他們還沒有準備好。嫉妒分爭正是屬肉體的明證——他們「照著世人的樣子行」。信仰長進的標誌不是神學知識，而是能否超越嫉妒分爭、以基督的心相待。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">二、傳道人是農夫與建築工人（三5-17）</h4>
              <p className="text-gray-700 leading-relaxed">保羅以兩個比喻定義傳道人的角色。農夫比喻：保羅種、亞波羅澆水，但叫它生長的是神。傳道人只是「神的同工」，教會是「神的田地」。建築工人比喻：保羅立好了根基（耶穌基督），各人在上面建造。所用的材料（金銀寶石或草木禾稭）在末日的火中接受考驗。教會是「神的殿」，污穢神殿者必受審判。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">三、屬於基督，基督屬於神（三18-23）</h4>
              <p className="text-gray-700 leading-relaxed">保羅再次反轉世人的智慧：若想在主裡有真智慧，先要成為世上的愚拙。所有傳道人（保羅、亞波羅、磯法）都是屬於信徒的，信徒是屬基督的，基督是屬神的。因此不需要「誇口屬某人」，因為你已擁有一切，一切都是神的恩賜。</p>
            </div>
          </div>
        )}
      </div>

      {/* 延伸探討 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('exploration')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">延伸探討</span>
          </div>
          {expanded['exploration'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['exploration'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「屬靈」vs「屬肉體」的診斷</h4>
              <p className="text-gray-700 leading-relaxed">保羅診斷哥林多人屬靈不成熟的標誌不是神學錯誤，而是「嫉妒分爭」。這讓人反省：一個人可以擁有豐富的神學知識和屬靈恩賜，卻在關係上仍是「嬰孩」。屬靈成熟的指標在於：面對分歧時的態度——是以基督的心去理解對方，還是以自我中心去維護「我這一派」。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">傳道人的神學定位</h4>
              <p className="text-gray-700 leading-relaxed">「農夫」和「建築工人」的比喻有深刻的神學含義：傳道人是同工（synergoi）而非主人。生長的權柄屬於神，根基只有一個（耶穌基督）。這定位讓傳道人謙卑，也保護教會：不能讓傳道人成為教會的「主」，也不能讓教會的走向取決於某一傳道人的風格偏好。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">末日的審判與今日的建造</h4>
              <p className="text-gray-700 leading-relaxed">保羅在三章12-15節提到末日的火將試驗各人在教會根基上所建的工程。這不是關於個人得救，而是關於在地上服事的品質。「金銀寶石」代表有恆久價值的工作，「草木禾稭」代表看似龐大卻毫無永恆價值的工程。這提醒教會和傳道人：不是規模大、熱鬧多就等於蒙神悅納。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「萬物都是你們的」的神學震撼</h4>
              <p className="text-gray-700 leading-relaxed">三章21-23節宣告：「萬物都是你們的」——保羅、亞波羅、磯法、世界、生、死、現今的事、將來的事，都屬於信徒，而信徒是屬基督的，基督是屬神的。這個宣告徹底顛覆了結黨的邏輯：當你已擁有一切，為何還要因為「屬某人派」而自我設限？以神的兒女身份活著，本是最豐盛的。</p>
            </div>
          </div>
        )}
      </div>

      {/* 反思問題 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">反思問題</span>
          </div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && (
          <div className="p-5 bg-white space-y-3">
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">1.</span>
              <p className="text-gray-700">保羅以「嫉妒分爭」作為屬靈不成熟的診斷。你在教會生活中，是否察覺自己或身邊人有這樣的現象？這對你有何提醒？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">你如何看待你教會的傳道人？你是否有時過度期待他，認為教會的成敗取決於他的能力？這種期待符合「傳道人是同工」的聖經定位嗎？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">「根基只有一個，就是耶穌基督」——你在教會服事中，是否曾不知不覺地把某個方法、風格或程序視為不可撼動的「根基」？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">末日的火試驗各人的工程——若以此標準思考你目前的服事，你認為你所建造的是「金銀寶石」還是「草木禾稭」？這個省思讓你想做什麼改變？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">「萬物都是你們的」這個宣告讓你有何感受？你是否真的活在神兒女的豐盛中，還是仍為著屬世的爭奪和得失而掙扎？</p>
            </div>
          </div>
        )}
      </div>

      {/* 具體實踐方針 */}
      <div className="mb-6 border border-green-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('practice')} className="w-full px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">具體實踐方針</span>
          </div>
          {expanded['practice'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['practice'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 為傳道人禱告並感謝神</h4>
              <p className="text-gray-700 mb-2">這週以「傳道人是神的同工」的眼光，做以下的事：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>為你的牧師/傳道人代禱，感謝神差遣他/她來到你的教會</li>
                <li>鼓勵他/她——一句話、一封短信，或一個具體的感謝</li>
                <li>不把教會問題都歸咎於傳道人，而是問「我在這根基上建造了什麼？」</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 服事品質的省察</h4>
              <p className="text-gray-700 mb-2">回顧你目前參與的服事，問自己：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>這服事的動機是榮耀神，還是維持形式/展示能力？</li>
                <li>若在末日被火試驗，哪些部分可能是「草木禾稭」？</li>
                <li>下週我可以在哪一個服事項目上更用心建造「金銀寶石」？</li>
              </ul>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-sm text-green-800 font-medium mb-1">本週禱告</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">
                「主啊，感謝祢在教會中興起傳道人作祢的同工。求祢讓我不以他們代替祢，也不輕看祢藉他們做的工作。讓我在教會根基上建造有永恆價值的事工，不為自己的名，只為祢的榮耀。讓我記住：萬物都是我的，因我是屬基督的，基督是屬神的。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
