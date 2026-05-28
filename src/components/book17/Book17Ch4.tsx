import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Search, HelpCircle, Check } from 'lucide-react';

export default function Book17Ch4() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    application: true,
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

      {/* 經文要義 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">經文要義</span>
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

      {/* 省思與應用 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('application')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-teal-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">省思與應用</span>
          </div>
          {expanded['application'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['application'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-teal-700 mb-2">屬靈與屬世的誤解</h4>
              <p className="text-gray-700 leading-relaxed mb-3">「屬靈的人」和「屬肉體的人」這組對比，在教會中常被嚴重誤用。有人以外貌來判斷屬靈程度：同一個人，若是小腹微凸、西裝筆挺，大家覺得他是普通商人；若換上中式服裝、留著鬍子、仙風道骨，大家就覺得他「很屬靈」。外貌的確影響觀感，但與屬靈成熟毫無關係。</p>
              <p className="text-gray-700 leading-relaxed">更嚴重的誤解是把「屬靈」、「屬肉體」、「屬血氣」當作三個等級——彷彿有些信徒永遠只能在較低的等級。但保羅在此只分兩類：在基督裡的人（有時仍像嬰孩）、和不在基督裡的人。嬰孩的問題不是無法成長，而是不肯成長。</p>
            </div>
            <div>
              <h4 className="font-semibold text-teal-700 mb-2">田地與農夫</h4>
              <p className="text-gray-700 leading-relaxed mb-3">作者的岳父是農藝專家。岳父觀察，有些人以為對植物越殷勤越好，結果澆水太頻繁，植物反而枯死。植物的生長有其自身規律，農夫無論多努力，都不能替代這個過程。教會的生命成長也是如此——靠的是神，不是傳道人多努力。</p>
              <p className="text-gray-700 leading-relaxed">這個比喻直接挑戰一個常見的錯誤：把出席人數增加等同於生命成長。教會可以「人數增加」但「生命衰退」，也可以「人數穩定」但「生命深化」。叫生命成長的是神，傳道人的責任是忠心種植和澆水，不是製造奇蹟。</p>
            </div>
            <div>
              <h4 className="font-semibold text-teal-700 mb-2">聖殿的建築工人</h4>
              <p className="text-gray-700 leading-relaxed mb-3">把神的殿污穢了的人，神要毀壞。這是嚴重的警告，指向教會內部的破壞行為。有時同工之間嫉妒，一方想拆掉另一方的工作；信徒互相攻擊，教會落得兩敗俱傷。作者見過牧者辭職離開一間教會，立定心志不帶走任何信徒——這是榜樣，因為他明白教會是神的殿，不是他的產業。</p>
              <p className="text-gray-700 leading-relaxed">開餐館的心態是：「這是我的，我決定一切。」但教會不是餐館。把商業管理的邏輯完全移植到教會，忽略了一個根本差異：教會的主是基督，不是任何人。傳道人是管家，不是老闆。</p>
            </div>
            <div>
              <h4 className="font-semibold text-teal-700 mb-2">智慧、富足與偶像崇拜的心理</h4>
              <p className="text-gray-700 leading-relaxed mb-3">偶像崇拜有其深層心理：通過崇拜某人，可以哄抬自己的身份。哥林多人說「我是屬保羅的」、「我是屬亞波羅的」，其實是在說「我跟的老師比你的更好」——這是一種借力自我提升的策略。</p>
              <p className="text-gray-700 leading-relaxed">保羅對這種心理的回應出人意表：他不說「不要崇拜任何人」，而是說「保羅、亞波羅、磯法……都是屬你們的！」換句話說：他們都是你的僕人，你不需要靠他們來抬高自己，因為你本來就已擁有一切。</p>
            </div>
            <div className="mt-2 p-4 bg-teal-50 rounded-lg border border-teal-100">
              <p className="font-medium text-teal-800 mb-2">默想</p>
              <p className="text-gray-700 leading-relaxed italic">「教會是神的田地，神的殿。傳道人是同工，不是主人。信徒是繼承人，不是追星族。當我們記住這個秩序，教會就能回到她本來的美麗。」</p>
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
              <p className="text-gray-700">你是否曾以外表或風格來判斷一個人「屬不屬靈」？回想一下，這個判斷後來被印證了，還是被推翻了？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">保羅說嫉妒分爭是屬肉體的明證。你在教會生活中，是否察覺自己或身邊人有這樣的現象？這對你有何提醒？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">作者說「人數增加不等於生命成長」。你個人在評估一間教會的健康程度時，最看重的是什麼指標？這個指標是否符合聖經的標準？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">你是否曾見過教會內部的「破壞工程」——同工之間嫉妒、信徒互鬥？這些情況如何影響了你對教會的看法，以及你如何回應？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">作者說崇拜傳道人有「自我哄抬」的深層動機。你是否在某種程度上認同這個分析？這對你如何看待自己所尊敬的傳道人有何影響？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">「萬物都是你們的」——這句話讓你有何感受？你是否真的活在神兒女的豐盛中，還是仍為著屬世的爭奪和得失而掙扎？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">7.</span>
              <p className="text-gray-700">末日的火試驗各人的工程——若以此標準思考你目前的服事，你認為你所建造的是「金銀寶石」還是「草木禾稭」？這個省思讓你想做什麼改變？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 為傳道人禱告並鼓勵</h4>
              <p className="text-gray-700 mb-2">這週以「傳道人是神的同工」的眼光，做以下的事：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>為你的牧師或傳道人代禱，感謝神差遣他們</li>
                <li>用一句話、一封短信具體感謝他們的服事</li>
                <li>不把教會的問題都歸咎於傳道人，而是問自己「我在這根基上建造了什麼？」</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 服事動機的省察</h4>
              <p className="text-gray-700 mb-2">回顧你目前的服事，誠實問自己：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>我服事的動機——是要榮耀神，還是要被人看見、被人認可？</li>
                <li>若這份服事今天被取消，我的反應是釋懷還是難受？</li>
                <li>下週我可以在哪個地方更用心建造「有永恆價值的工程」？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💬 教會關係的修復</h4>
              <p className="text-gray-700 mb-2">若你與教會某位同工或信徒之間有嫌隙，考慮這週主動做一件事：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>傳一則真誠的問候或感謝</li>
                <li>在心裡原諒對方，讓嫉妒或怨恨不再成為你服事的攔阻</li>
                <li>把這關係交託給神，求祂修復</li>
              </ul>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-sm text-green-800 font-medium mb-1">本週禱告</p>
              <p className="text-gray-700 text-lg leading-relaxed italic">
                「主啊，感謝祢在教會中興起傳道人作祢的同工。求祢讓我不以他們代替祢，也不輕看祢藉他們所做的工。讓我在教會的根基上建造有永恆價值的事工，不為自己的名，只為祢的榮耀。幫助我記住：萬物都是我的，因我是屬基督的，基督是屬神的。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
