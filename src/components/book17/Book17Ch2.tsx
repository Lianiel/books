import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Search, HelpCircle, Check } from 'lucide-react';

export default function Book17Ch2() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    application: true,
    exploration: true,
    questions: true,
    practice: true,
  });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">第二章</h1>
        <h2 className="text-xl font-semibold text-gray-700">在十架陰影下合一</h2>
        <p className="text-sm text-gray-500 mt-1">哥林多前書 一10-31</p>
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
              <h4 className="font-semibold text-purple-700 mb-2">一、基督的十字架與紛爭（一10-17）</h4>
              <p className="text-gray-700 leading-relaxed">哥林多教會的紛爭結黨，是因為他們富足，有太多有恩賜的傳道人可以跟從：保羅、亞波羅、磯法。保羅在第13節直截了當地問：「基督是分開的嗎？」任何分黨結派在保羅眼中都是不對的。保羅要求的不是「一言堂」或「劃一」，而是像他在腓立比書所說：「以基督的心為心……因耶穌的名無不屈膝，無不口稱『耶穌基督為主』。」</p>
              <p className="text-gray-700 leading-relaxed mt-2">為何不可以跟隨人？保羅用反問方式表達：「保羅為你們釘了十字架嗎？你們是奉保羅的名受洗嗎？」是耶穌基督為你們釘十字架！你們是奉主耶穌的名受洗！傳道人在基督徒的得救上沒有直接的功勞，因此以傳道人為效忠的對象就是不對的。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">二、基督的十字架與智慧（一18-25）</h4>
              <p className="text-gray-700 leading-relaxed">保羅將十字架資訊與世人的智慧作強烈對比：猶太人追尋神蹟、希臘人追尋智慧，兩者都對十字架評價極低。但保羅指出，神用人認為愚拙的道理來拯救人，這正是神的智慧——「末世的傾覆」。所以傳道人所傳的，應是神的智慧——十字架的道理，而信徒所追尋的，也應是神的智慧。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">三、基督的十字架與價值觀（一26-31）</h4>
              <p className="text-gray-700 leading-relaxed">保羅從哥林多人的出身看神在他們身上所做的「末世傾覆」——神揀選世上愚拙的、軟弱的、卑賤的、被人厭惡的，來羞辱那有智慧有能力的，目的是「使一切有血氣的，在神面前一個也不能自誇」。神在耶穌基督裡為信徒供給豐盛的救恩：公義、聖潔、智慧、救贖。因此「誇口的當指著主誇口」——不應以人為榮，而要以神為榮。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">結語</h4>
              <p className="text-gray-700 leading-relaxed">針對教會以人為中心引起的紛爭，保羅要求哥林多信徒回到救主耶穌基督的十字架下：大家都是主裡的人，在主裡本是合一的；十字架的救贖是神智慧的傑作，所以基督徒在世生活，需要在價值觀上作改變。</p>
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
              <h4 className="font-semibold text-teal-700 mb-2">一、基督徒在十字架下找到根本的歸屬</h4>
              <p className="text-gray-700 leading-relaxed">哥林多信徒信主時，都求告主耶穌之名，承認主耶穌是他們的主；都因主耶穌為他們而死，奉主的名受洗，歸入主的名下。在十字架下，信徒找到相同的歸屬，擁有一樣的信仰告白，所以我們是合一的。可惜哥林多信徒卻以人代替了主耶穌基督——將人偶像化。</p>
              <p className="text-gray-700 leading-relaxed mt-2">筆者原先的教會背景受加爾文影響，在改革宗的西敏寺神學院就讀時，有個有趣現象：若在神學爭論中能搬出加爾文如何詮釋，一切問題就迎刃而解。同樣在路德宗，只要能指出馬丁路德的說法，所有問題也煙消雲散。理論上我們知道路德或加爾文都不能取代上帝，但在各宗派中，只要能抬出改教英雄，保證一定贏。華人教會雖然宗派規模較小，但我們對某些有恩賜者的崇拜，恐怕是有過之而無不及。</p>
              <p className="text-gray-700 leading-relaxed mt-2">哥林多教會的問題也是如出一轍：保羅、亞波羅、磯法這三人都是傑出且有恩賜的傳道人，各有所長。保羅刻意避免以口才讓人印象深刻；亞波羅受正規希臘教育，有學問又有口才；彼得是早期教會難得的領袖，代表十二使徒說話。這三人各領風騷，哥林多信徒對不同恩賜與領導風格的傳道人，產生了不同的接納度，最終這三人成了信徒間的偶像。</p>
              <p className="text-gray-700 leading-relaxed mt-2">保羅的處理方式是主動破除偶像——將自己從被信徒「偶像化」的神壇上拉下來。因為對保羅而言，假如有任何人將他絕對化或視之為偶像，這已違背了十字架的道理；十架真理最終的歸結點應是耶穌基督。</p>
              <p className="text-gray-700 leading-relaxed mt-2">筆者在美國教會事奉時遇見這種情況：牧者離開後，有人要求找以前的牧者回來證婚或施洗。筆者深刻體會到保羅在事奉上的特點之一，就是不允許這種排擠現象發生，原因是他知道——真正核心資訊與信仰的對象是誰！這是哥林多前書讓我們學習的第一個功課：在十字架下，找到我們真正的生命歸宿。</p>
            </div>
            <div>
              <h4 className="font-semibold text-teal-700 mb-2">二、基督徒必須在十字架下改變屬世的價值觀</h4>
              <p className="text-gray-700 leading-relaxed">「以人誇口」的根本原因，是跟從世人的智慧，接受世人的價值觀。不同文化中，每個人都深受其「價值觀」所影響。在第一世紀希臘人的文化中，最看重的三種價值是：智慧（口才和知識）、能力（可以做成事情）、以及尊貴（好的家庭背景）。這三種價值往往集中在一個人身上——好出身加有學問又能幹，是最被看重的人物。</p>
              <p className="text-gray-700 leading-relaxed mt-2">就如六七十年代台灣的留學潮極為盛行，台大畢業生見面的問候語往往都是：「什麼時候出國？」若是五年後仍留在台灣，就被認為有問題。這就是文化價值觀中很容易受到影響且被動接受的例子。第一世紀希臘人面對這種壓力的情況，與今日也相仿。</p>
              <p className="text-gray-700 leading-relaxed mt-2">但是，保羅在哥林多前書第一章給信徒的資訊是：這些價值觀違反了福音的基本精神——猶太人或外邦人都是因信耶穌得救，而非依靠好身世、高成就。雖然世人以家世、教育、能力來取決應受的尊重，但在因信稱義的真理上，是將所有世人都放在相同的立足點上。這是基督徒在社會中應當有的重要貢獻——若能準確地將神的價值觀實踐在生活中，就可以讓人們知道福音內涵到底為何。</p>
              <p className="text-gray-700 leading-relaxed mt-2">拿到博士學位之後，往往不自覺地有一股傲氣，卻還自以為謙卑。保羅用這段經文提醒我們，需要以耶穌基督釘十字架及因信稱義的道理，來修正我們的心態與價值觀——所流露出來的生命資訊不是「我比你出類拔萃」，而是「我們都是罪人，都需要耶穌才有今日」。</p>
            </div>
            <div className="mt-2 p-4 bg-teal-50 rounded-lg border border-teal-100">
              <p className="text-sm font-semibold text-teal-800 mb-1">默想</p>
              <p className="text-gray-700 leading-relaxed">教會的問題不一定是傳道人故意引起的，但是傳道人怎樣去面對和處理問題，卻往往能影響它的結局。作為基督徒，我們需要活在十字架的光照與恩典中，好使我們的價值觀被重新塑造。</p>
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
              <h4 className="font-semibold text-indigo-700 mb-2">第一世紀的「明星崇拜」文化</h4>
              <p className="text-gray-700 leading-relaxed">保羅時代的希臘羅馬世界盛行「哲人崇拜」（philosopher worship）。遊走各地的修辭學家和哲人（sophists）以其口才和智慧吸引門徒，形成「大師—門徒」的依附關係，弟子們以所跟從的哲人為榮。亞波羅「很有學問，最能講解聖經」（徒18:24），恰好符合了希臘人對智者的期望，因此吸引了大批哥林多信徒。歷史學家 Edwin Judge 指出，這種「修辭明星」文化是理解哥林多書信的關鍵背景——哥林多信徒不是純粹的宗教分黨，而是深受其文化中的知識精英崇拜模式所塑造。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">十字架神學（Theologia Crucis）的歷史</h4>
              <p className="text-gray-700 leading-relaxed">馬丁路德在1518年的海德堡辯論中提出「十字架神學」（theologia crucis）與「榮耀神學」（theologia gloriae）的對立：榮耀神學藉可見的偉大和力量尋找神，十字架神學卻在苦難和軟弱中尋見神。路德的洞見直接根植於保羅在哥林多前書的論述——真正的屬靈智慧不是透過人的成就展現，而是在十字架的愚拙中彰顯。這個神學傳統對抗了教會歷史中一再出現的「成功神學」傾向，提醒我們：神的能力在軟弱上顯得完全。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「末世的傾覆」（Eschatological Reversal）</h4>
              <p className="text-gray-700 leading-relaxed">保羅在一26-31節描述的神揀選模式，學者稱之為「末世傾覆」——世界的等級秩序在神的末世計畫中被顛倒。這一主題貫穿聖經：瑪利亞的頌歌「祂叫有權柄的失位，叫卑賤的升高」（路1:52）、馬太福音的八福、主耶穌的山上寶訓，都展現同樣的邏輯。社會學家 Wayne Meeks 在其著作《第一批城市基督徒》（The First Urban Christians）中指出，哥林多教會的成員主要是「地位不一致」（status inconsistency）者——他們在某些社會指標上地位較高（如財富），在另一些方面卻地位較低（如出身或種族），這使他們特別容易受到「末世傾覆」信息的吸引。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">宗派分裂的歷史反思</h4>
              <p className="text-gray-700 leading-relaxed">哥林多的「黨派問題」在教會歷史中一再重演。宗教改革後，基督新教分裂為數百個宗派，其中不乏以創始人或神學家命名者（路德宗、加爾文宗、衛斯理宗）。二十世紀的教會合一運動（Ecumenical Movement）試圖回應保羅「基督是分開的嗎？」的挑戰，世界教會聯合會（WCC）的成立，也可以看作是教會歷史對哥林多問題的當代回應。但保羅的洞見提醒我們：合一不是靠組織架構達成，而是靠回到十字架——共同認信耶穌基督為主。</p>
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
              <p className="text-gray-700">你有沒有發現自己或教會，在有意無意間「偶像化」某位傳道人或神學家？這種傾向的背後是什麼心理需求？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">保羅說他主動把自己從信徒的「神壇上拉下來」。作為一個有影響力的基督徒（可能是傳道人、小組長、父母），你如何避免被人偶像化？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">你成長的文化環境中，哪些價值觀是「被強迫接受」的（如學歷、出身、財富）？這些價值觀如何影響你對教會同工或傳道人的評估？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">「誇口的當指著主誇口」——在你的信仰生活和事奉中，你的「誇口」是指向主，還是指向你的成就、恩賜或所屬的教派？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">十字架的道理「對滅亡的人是愚拙」——你有沒有嘗試「包裝」或「軟化」福音，使它在文化上更容易接受？這樣做有什麼危險？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">教會中的紛爭結黨，有沒有讓你也感到左右為難過？當時你的選擇是什麼？現在的你會如何回應？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">7.</span>
              <p className="text-gray-700">保羅說真正的合一是「以基督的心為心……口稱耶穌基督為主」。在你的教會或小組中，什麼是最能帶來真實合一的共同基礎？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 識別你的「偶像」傾向</h4>
              <p className="text-gray-700 mb-2">誠實地反省：在你的信仰生活中，誰是你最傾向「偶像化」的人物？</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>寫下這個人對你的影響是正面的（建立信仰）還是有問題的（替代基督）</li>
                <li>問自己：「如果這個人犯了嚴重的罪，我的信仰會動搖嗎？」</li>
                <li>練習在討論中使用「我認為聖經說……」而非「某某說……」</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 文化價值觀檢視</h4>
              <p className="text-gray-700 mb-2">列出你所在文化中三個最被看重的價值（如學歷、財富、人際關係）：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>思考這些價值如何影響你評估教會同工或傳道人</li>
                <li>用「在主裡，這個人是誰？」的角度重新評估同一批人</li>
                <li>本週在一個具體場合中，實踐「誇口指著主誇口」</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 在分歧中尋求合一</h4>
              <p className="text-gray-700 mb-2">找一位你在教會路線或神學觀點上有分歧的弟兄姊妹：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>主動邀請他/她分享信仰的見證和對主的經歷</li>
                <li>在對話中尋找共同的信仰基礎，而非爭論分歧</li>
                <li>為這位弟兄姊妹禱告，求神加深你們在基督裡的連結</li>
              </ul>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-sm text-green-800 font-medium mb-1">本週禱告</p>
              <p className="text-gray-700 leading-relaxed italic text-lg">「主耶穌，祢是我們唯一的主，是我們信仰真正的核心。求祢幫助我在不知不覺間，不以任何人——無論是偉大的傳道人、神學家，甚至是自己的所屬宗派——來替代祢在我心中的地位。求祢的十字架不斷提醒我：我所有的智慧、地位和成就，都不是我的資本，而是祢白白的恩典。讓我的誇口永遠指向祢，而不是自己。奉主耶穌基督的名禱告，阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
