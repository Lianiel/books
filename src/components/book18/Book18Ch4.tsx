import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Search, HelpCircle, Check } from 'lucide-react';

export default function Book18Ch4() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    exploration: true,
    questions: true,
    practice: true
  });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-600 to-rose-700 bg-clip-text text-transparent">第四章</h1>
        <h2 className="text-xl font-semibold text-gray-700">教會歷史中的撒但</h2>
        <p className="text-sm text-gray-500 mt-2">第一部分：認識敵人</p>
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
          <div className="p-5 bg-white space-y-6">

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">研究撒但工作的理由</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                為何要研究教會歷史中的撒但？因為藉著研究歷史，我們能夠辨識出撒但慣常使用的模式和策略。正如軍事將領研究過去的戰役以了解敵人的戰術，基督徒研究撒但在教會歷史中的工作，能使我們更好地辨識和抵禦他今天的攻擊。
              </p>
              <p className="text-gray-700 leading-relaxed">
                歷史同時也使我們謙卑：我們的時代並不獨特，今天的教會面對的試探和挑戰，其根源與幾個世紀前並無本質差異。了解這一點，既讓我們從前人的失敗中學習，也讓我們從前人的得勝中得到鼓勵。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">撒但與早期教會的異端</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                教會歷史上，撒但最成功的攻擊之一就是藉著引入異端（heresy）來腐化基督信仰。異端的危險在於，它不是赤裸裸的謊言，而是「幾乎正確的真理」——一個小小的偏差，足以從根本上扭曲福音。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>諾斯底主義</strong>（Gnosticism）是早期教會最重大的威脅之一。它結合希臘哲學與基督教詞彙，宣稱靈是善、物質是惡，因此否認基督真正取了肉身（道成肉身），也否認身體的復活。這直接攻擊了救贖的核心——基督若非真正成肉身，就無法真正代替人受死和復活。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>阿利烏斯主義</strong>（Arianism）在四世紀席捲教會，宣稱子神是被造的，低於父神。這使得基督的救贖成為不可能——若基督只是一個被造物，祂就無法承擔全人類的罪，也無法真正給我們神的生命。教會在尼西亞會議（325年）做出了抵擋。
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>伯拉糾主義</strong>（Pelagianism）宣稱人有自由意志選擇善惡，不需要神的特殊恩典就能達到救恩。奧古斯丁在五世紀與之力戰，堅持人全然墮落、唯靠神恩的聖經真理。這場爭戰在宗教改革中再次爆發，今天仍以不同形式繼續。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">撒但與宗教混合主義</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                除了神學異端，撒但也透過宗教混合主義工作——將真正的基督信仰與其他宗教元素摻雜，使信仰失去其獨特性和純潔性。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                中世紀教會的馬利亞崇拜、聖徒祈禱和煉獄教義，在宗教改革者看來，是將人的功德摻入僅靠恩典的救恩——這是一種危險的混合。宗教改革的核心口號「唯獨恩典、唯獨信心、唯獨聖經」，正是針對這種混合主義的糾正。
              </p>
              <p className="text-gray-700 leading-relaxed">
                撒但最有效的工作往往不是公開地攻擊基督信仰，而是悄悄地稀釋它，使它漸漸失去鹽味，失去改變生命的能力。教會歷史上充滿了這樣的例子：當教會與世界的哲學、文化或政治勢力妥協時，福音的力量就逐漸流失。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">撒但與伊斯蘭教的興起</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                七世紀伊斯蘭教的興起是教會歷史的一個重大轉折。在短短幾十年內，曾是基督教重鎮的北非、中東大部分地區被伊斯蘭征服，教會幾乎被根除。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                從屬靈爭戰的視角看，伊斯蘭對基督的認識（只承認耶穌是先知，否認祂的神性、十字架的救贖和復活）是對福音核心的直接否定。今天全球有十七億穆斯林，其中絕大多數從未聽過真正的福音信息，這是教會的巨大宣教挑戰。
              </p>
              <p className="text-gray-700 leading-relaxed">
                對基督徒來說，正確的回應不是敵意，而是傳揚那位是「道路、真理、生命」的基督，求神的靈開啟穆斯林的心，正如今天在伊斯蘭世界中確實有許多人藉夢見耶穌而歸向基督的見證。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">撒但與現代意識形態</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                二十世紀見證了兩種徹底反基督的政治意識形態造成空前浩劫：希特勒的納粹主義和馬克思共產主義。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>納粹主義</strong>以種族優越論取代人人按神形象被造的真理，以「民族神話」取代基督，以血與土地的崇拜取代對創造主的敬拜。它不僅殺害了六百萬猶太人，也試圖使教會成為國家的工具（「德意志基督徒」運動），並迫害那些堅持聖經真理的「認信教會」（Confessing Church，如潘霍華、巴特等人）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>馬克思主義</strong>在二十世紀以無神論意識形態掌控了地球上近三分之一的人口，系統地迫害教會，試圖根除宗教。然而，逼迫往往使教會更純潔、更深根。中國的地下教會在數十年的逼迫後，信徒人數反而大幅增長，這本身就是撒但計謀的失敗。
              </p>
              <p className="text-gray-700 leading-relaxed">
                今天的後現代主義和世俗人文主義，以更柔和、更誘人的方式攻擊基督信仰——不用逼迫，而用漠視；不否認神的存在，而使「神」成為個人偏好而非客觀真理。這也許是更危險的攻擊，因為它沒有製造殉道者，卻在不知不覺中使信仰變成文化習慣而非生命得救的信仰。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">神學界對撒但的不同立場</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                教會歷史上，神學家對撒但的理解有各種不同的立場，從一個極端到另一個極端。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                一端是奧利根（Origen，三世紀）的「普救論」，認為撒但最終也會被救贖，這削弱了屬靈爭戰的嚴肅性。另一端是中世紀和某些靈恩傳統中對撒但的過度強調，使信徒陷入不必要的恐懼，甚至將一切困難都歸咎於邪靈。
              </p>
              <p className="text-gray-700 leading-relaxed">
                改革宗傳統的立場試圖保持平衡：承認撒但是真實的、積極的個人存在，但強調他完全在神的主權之下，基督已徹底勝過他，信徒通過十字架的得勝和神所賜的全副軍裝能夠站立得住。這個平衡，使信徒既不輕忽屬靈爭戰，也不在恐懼中喪失基督徒的喜樂和確據。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">教會歷史給我們的功課</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                縱觀兩千年教會歷史，撒但的策略有幾個持久的模式：外部逼迫、內部腐化（異端和道德失敗）、以及漸進的世俗化。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                然而，歷史同樣見證了神對祂教會的保守：即使在最黑暗的時期，神都保留了一個忠心的餘民。修道院運動在黑暗時代保存了聖經和學術；宗教改革在教會最腐敗時帶來了復興；清教徒在英國國教的妥協壓力下仍堅持聖經真理。
              </p>
              <p className="text-gray-700 leading-relaxed">
                最重要的功課是：教會得勝的秘訣不在於世俗的力量、政治影響或文化適應，而在於對聖經真理的忠心、對十字架的緊緊抓住，以及倚靠聖靈的大能。這在每個世代都是真理，在今天同樣是真理。
              </p>
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
          <div className="p-5 bg-white space-y-5">

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">尼西亞信經：教會對抗異端的重大勝利</h4>
              <p className="text-gray-700 leading-relaxed">
                325年尼西亞會議是教會歷史上對撒但藉異端策略的一次重大勝利。阿利烏斯主義的威脅逼使教會精確地釐清基督的神性——使用「同質」（homoousios，「與父同質」）這個詞，清楚地宣告基督是完全的神，不是被造物。這個精確的神學表述看似抽象的哲學爭論，但其背後是信仰的存亡：若基督只是一個高等被造物，整個基督教救贖論就崩潰了。今天我們在主日所背誦的尼西亞信經，是用精準的神學語言對撒但「基督只是個偉大先知或老師」這個謊言的永久回應。每次我們宣認「神的獨生子，從父所生，非受造的，與父同質」，我們都是在重申那個在尼西亞的重大勝利。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">宗教改革：撒但藉制度化腐敗的失敗</h4>
              <p className="text-gray-700 leading-relaxed">
                十六世紀的宗教改革是教會歷史上另一個重要的屬靈爭戰時刻。在宗教改革之前，中世紀天主教教會積累了幾個世紀的錯誤：買賣聖職、以功德補救恩典的救恩觀、以傳統教義取代聖經的最高權威。馬丁路德釘在威登堡教堂門上的九十五條論綱，不只是反對贖罪券——它是對「人可以用自己的作為在神面前站立」這個根本謊言的抗爭。撒但最成功的謊言之一，是使人相信他可以在罪中安然無事（恩典濫用），或使人相信他必須靠自己的功德取得神的悅納（律法主義）。宗教改革恢復了「唯靠恩典、唯靠信心」，切斷了撒但在這兩個方向上的攻擊路線。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">逼迫如何使教會成長：歷史的矛盾</h4>
              <p className="text-gray-700 leading-relaxed">
                教會歷史的一個驚人規律是：嚴酷的逼迫往往導致教會的增長和深化，而安舒和世俗化反而使教會衰退。德爾圖良（Tertullian）在三世紀說：「殉道者的血是教會的種子。」羅馬帝國三個世紀的逼迫，不但沒能消滅基督教，反而使其增長到最後征服了帝國本身。二十世紀中國的文化大革命試圖消滅基督教，結果信徒人數從1949年的不到一百萬增長到今天的估計七千萬到一億。這個矛盾背後的原因是：逼迫去除了口頭信徒，使教會更純潔；殉道者的見證使人看到有值得為之犧牲的信仰；逼迫把信徒逼向更深的禱告和信靠神。這個歷史規律告訴我們：撒但藉逼迫攻擊教會的計謀常常適得其反，神使萬事互相效力。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">世俗主義：撒但在後現代的最新策略</h4>
              <p className="text-gray-700 leading-relaxed">
                若說歷史上撒但的主要策略是外部逼迫和神學異端，今天在西方世界他最有效的策略也許是世俗化和文化同化。世俗主義不說「基督教是錯的」，而是說「宗教只是個人選擇，不應影響公共生活」。後現代主義不說「真理不存在」，而是說「沒有普遍真理，只有你的真理和我的真理」。這些策略的成效顯而易見：在歐洲，曾是基督教中心的國家，教會出席率下降到個位數。在北美，越來越多年輕人雖從小在教會長大，卻在成年後離開信仰。應對這個策略，需要教會清醒地認識文化的影響，培育有智識根基的信仰，並在日常生活中活出福音的真實力量。
              </p>
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
          <div className="p-5 bg-white space-y-4">
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">1.</span>
              <p className="text-gray-700">本章描述了撒但透過異端腐化教會的歷史。在你今天所處的基督教環境中，你是否看到類似的「幾乎正確的真理」——一些微妙的神學偏差，可能在不知不覺中稀釋了福音的純正？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">撒但有時透過逼迫，有時透過安舒來攻擊教會。對你個人和你的教會而言，哪種威脅目前更大——外部的逼迫壓力，還是內部的舒適化和世俗化？為什麼？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">「逼迫往往使教會更純潔、更有力量」——這個歷史規律讓你對今天面臨逼迫的教會（如中國、北韓、中東）有什麼思考？它如何挑戰你對自身信仰「舒適感」的看法？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">後現代主義說「沒有普遍真理，只有個人真理」——這個觀念在多大程度上已悄悄滲透了你的思維方式？你如何辨識並抵抗這種文化的影響？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">宗教改革恢復了「唯靠恩典、唯靠信心」的真理。在你的實際信仰生活中，你是否仍然傾向於倚靠「自己的表現」來換取神的悅納？宗教改革的得勝信息如何改變你每日的靈命狀態？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">學習撒但在歷史中的工作，是否讓你對今日的教會有更大的憂慮，還是更大的信心？神在歷史中對祂教會的保守，如何激勵你在今天的屬靈爭戰中忠心站立？</p>
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
          <div className="p-5 bg-white space-y-5">

            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 認識信仰的根基——研讀尼西亞信經</h4>
              <p className="text-gray-700 mb-2">找出尼西亞信經的完整文本，逐句研讀，思考每一個陳述的神學意義和歷史背景。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>特別思考關於基督神性的條款：「從父所生，非受造的，與父同質」</li>
                <li>問自己：若去掉這個條款（採取阿利烏斯的立場），救恩會如何改變？</li>
                <li>嘗試用自己的話解釋信經中最難理解的一句</li>
                <li>每周主日崇拜時，有意識地宣認信經的每一個字，而不只是機械性地重複</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 辨識今日教會的試探</h4>
              <p className="text-gray-700 mb-2">花時間禱告並思考，撒但目前透過哪些方式攻擊你所在的教會或基督徒群體。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>在紙上列出你觀察到的可能「世俗化」或「妥協」的跡象</li>
                <li>也列出你所在教會的屬靈強項和健康指標</li>
                <li>思考：作為一個普通成員，你可以如何在自己的範圍內為教會的純正和活力作貢獻？</li>
                <li>不要只是批評，要將觀察轉化為具體的代禱</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 為受逼迫教會代禱</h4>
              <p className="text-gray-700 mb-2">選擇一個正在受逼迫的國家（如北韓、中國新疆、伊朗等），每天為該地的信徒禱告一周。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>可使用「國際使命差會」或「開放的門」等機構提供的代禱資料</li>
                <li>禱告他們的信心在逼迫中得堅固，神跡見證在黑暗中發光</li>
                <li>禱告撒但的攻擊反而成為教會增長的機會</li>
                <li>同時反思：若你處在同樣的處境，你的信心是否足以承受？什麼能使你有這樣的信心根基？</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">📚 了解一位歷史上的忠心見證人</h4>
              <p className="text-gray-700 mb-2">選擇一位在撒但攻擊中忠心站立的歷史人物，閱讀他/她的簡短傳記或生平故事。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>可選：潘霍華（對抗納粹）、司提反（初代教會殉道）、波利卡普（二世紀殉道者）、路德（宗教改革）、薇依·安德慈（中國宣教士）</li>
                <li>特別注意：他/她面對什麼樣的試探或壓力？</li>
                <li>他/她如何在那個處境中仍然抓住基督？</li>
                <li>他/她的見證如何激勵你在今天的挑戰中忠心？</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-4 mt-2">
              <h4 className="font-semibold text-green-800 mb-2">🙏 禱告詞</h4>
              <p className="text-gray-700 leading-relaxed italic text-sm">
                「主啊，感謝祢在歷史中從未放棄祢的教會。當異端幾乎淹沒真理時，祢興起忠心的神學家；當腐敗滲透教會時，祢帶來宗教改革；當逼迫試圖撲滅信仰時，殉道者的血成為種子。今天，幫助我辨識撒但在我的時代和環境中所使用的策略。給我智慧分辨真偽，給我勇氣站在真理一邊，縱使那需要付代價。也讓我記住：教會是祢的，陰間的門不能勝過她。奉基督的名，阿們。」
              </p>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
