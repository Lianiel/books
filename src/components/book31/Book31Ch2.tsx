import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Eye, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book31Ch2() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true, summary: true, exploration: true, questions: true, practice: true,
  });
  const toggle = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">第二章</h1>
        <h2 className="text-xl font-semibold text-gray-700">地球到底有幾歲</h2>
        <p className="text-sm text-gray-500 mt-2">書頁 28–39</p>
      </div>

      {/* 章節引言 */}
      <div className="mb-6 bg-gradient-to-r from-teal-900 to-cyan-900 rounded-lg p-6 text-center">
        <p className="text-teal-100 leading-relaxed italic text-sm">
          創造諸天的耶和華，製造成全大地的　神，祂創造堅定大地，並非使地荒涼，是要給人居住。祂如此說：「我是耶和華，再沒有別神。」
        </p>
        <p className="text-teal-300 text-xs mt-2">—— 以賽亞書四十五章 18 節 ——</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-teal-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <p className="text-gray-700 leading-relaxed">
              地球到底有幾歲？真的是進化論所謂的四十六億歲嗎？朋友，在這裏我將引用最新的科技資料證明進化論錯了。你心裏要有準備，這是一個年輕的地球。
            </p>

            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">一、碳 14 測量法為什麼錯了</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                首先，進化論所宣稱的地球年齡原是用「放射測量法」推測的，但是現在科學界宣稱這種方法有許多錯誤。就以碳 14 測量法（Carbon 14 Method，又稱碳 14 同位素放射測量法）來說吧，這個方法原是 1940 年代利比（Libby）發明的。它的基本原理是藉著生物體內的碳 14 含量，來推測生物距今的年代。一般碳原子量是 12，但是在每十億的碳 12 中，就有 765 個碳 14，這碳 14 的特殊之處，即在每隔 5,700 年會減成原來的一半。倘若我們在生物遺體中測得碳 12 及碳 14 的數量，再藉著公式找出碳 12 和碳 14 的比例關係，這樣就可以推測出那生物距今的年代了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                然而直到 1960 年代，科學家才證實碳 12 和碳 14 的比例並不是十億比 765 的固定常數，大氣層中碳 14 竟遠超過這個比例，這項發現震垮了整個碳 14 測量法的根基。原來碳 14 本是由宇宙線擊打大氣層而形成中子的，這中子碰撞氮才成為碳 14；它再和氧作用變成二氧化碳，然後經由光合作用被植物吸收到體內。最後動物又吃下植物而將之存留在體內，這就是何以生物體內會擁有碳 14 的原因。現在既然大氣層中碳 14 並非平衡狀態，那麼過去所有用碳 14 測量出來的年代都應該大量的減少才對。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">二、碳 14 改良測定法</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                近來科學家按照 1960 年代以後所發現的資料，修正了碳 12 和碳 14 比例的公式而成為「碳 14 改良測定法」。科學家懷特勞（Whitelaw）就曾使用這個方法來測量一萬五千件古物，以下是他實驗的結果：
              </p>
              <ul className="space-y-3 ml-2">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold flex-shrink-0">（一）</span>
                  <p className="text-gray-700">大多數古物都少於五萬年，只有少數推測到六萬年，另外有三個鳥蛋殼他無法推知年代。為了確定實驗的真實性，他探測從深海沉積層下四十呎挖到的「最原始的生命形態」，發現只有四萬歲。進化論所謂的五千萬年前「始新世紀」（Eocene），經他測量的結果均少於四萬歲。被進化論認為有一億年的石油和褐煤，他推算也少於五萬歲。</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold flex-shrink-0">（二）</span>
                  <p className="text-gray-700">實驗顯示動物是突然大量出現在地球上的，植物也一度曾經在今天沙漠及兩極茂盛過。人類起源於近東（Near East）的少數祖先，後來才逐漸向外擴展。但是在距離今天大約 4,500 年以前，地球曾發生過一次毀滅全地的大洪水，這使得一些過去曾大量繁殖的物種從地球上絕跡。</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold flex-shrink-0">（三）</span>
                  <p className="text-gray-700">實驗證明，大洪水以後，人類及動物又起源於近東，後來再向外擴散。碳 14 改良法支持聖經裏叙述的以色列及其他古國的歷史，他們重新推測埃及、亞述、波斯等文明的古物，顯示都比從前的假設少五百年，他懷疑從前史學家有誇張之嫌。</p>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                懷特勞最後認為碳 14 改良法不盡完美，他認為若是再細加調節公式，可以同意地球有六千至七千歲。看到這個數據，你也許會奇怪當初碳 14 測量法，為什麼會錯得如此離譜。其中因素之一，也在於碳 14 的弱點——古物距離今天的年齡若是大於五萬年，由於太少的碳 14 存在體內，就會造成百萬年以上的臆測——其實這種臆測原是受到進化論先入為主觀念的影響，它是根本沒有科學根據的。
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                在此我要醒各位，就是無論是碳 14 測量法，或是碳 14 改良測定法，都是假設地球從開始到現今都是同樣的物理情況；既是相同的環境，才能用常數的比例來推測。但是實際上並非如此：地球磁場過去比今天強，磁場的不同，就會影響進入大氣層宇宙線的數量。同時，地球在大洪水以前，大氣層上面有「水氣層」覆蓋，這些都會減少碳 14 形成的機會，這就是為什麼大洪水以前的生物遺體含碳 14 少的關係。所以若未考慮這種情況，就會錯把它當作是比實際大很多歲的古物。這種用碳 14 改良法測量出來的數據並不準確，在此僅作參考，不過它幫助我們向前邁進了一步——地球的實際年齡一定比這些數據都小。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">三、岩石測量法的錯誤</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                以上所介紹的是測量古生物遺體的方法，至於測量岩石距今的年齡，就必須用其他的方法。目前常用的放射測量法，有「鈾鉛測量法」和「鉀氬測量法」這兩種。最初科學家是用鈾鉛（Uranium-lead）測量法來推算地殼年齡，其基本原理是鈾 238，每經過 45 億年才蛻變成原來數量的二分之一，其他的二分之一逐漸蛻變成鉛 206 及氦，如此可推算岩石當初的年齡。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">鈾鉛測量法推測地殼古老，這是因為他們犯了下列的錯誤：</p>
              <ul className="space-y-3 ml-2 mb-3">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold flex-shrink-0">（一）</span>
                  <p className="text-gray-700">鈾容易在地下水中過濾掉，其他諸如鉛及氦等都易遷入或流失，故無法測準年代。</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold flex-shrink-0">（二）</span>
                  <p className="text-gray-700">鉛 206 容易與游離中子（Neutrons）作用成鉛 208，故鉛 206 的數量不準確。</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold flex-shrink-0">（三）</span>
                  <p className="text-gray-700">地球磁場的改變，或是超級新星（Nova）的爆炸，都會加速放射蛻變率，所以用鈾鉛測量法推測年齡，都會誇張其實際年齡（見圖 15）。</p>
                </li>
              </ul>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch2-fig15-glacier-mountain.jpg" alt="北美洲冰河公園山脈" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 15 — 在北美洲冰河公園內的幾座山，山的紋理連在一起，也無地殼移動的跡象，但是山上的岩石竟測量出比山下「古老四億年」。</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                至於鉀氬（Potassium-argon）測量法，也用類似鈾鉛法的原理，常為科學家使用。但是 1968 年被人在夏威夷使用來測量 1800 年代爆發的火山熔岩時，居然錯把僅有一百多年歷史的熔岩測定為 20 億年以上，以致成了科學史上的笑話。以前太空人採集的月球岩石，也是用鉀氬測量法估計年齡的，美國太空實驗中心居然報導月球有 20 億至 30 億的年齡，顯然也犯了類似的錯誤。後來，經由諾貝爾獎得主庫克（Cook）實驗，報告書中指稱：少數在月球岩石內發現的氣體，並不是由放射產生的，根本是一千至兩千年前的太陽風（Solar Wind）所造成的。庫克又發現月球岩石上有明顯的釉，這證明月球表面曾受到攝氏一千度以上的高熱燒過，在燒的時候，鉀早就在攝氏七百多度蒸發掉了；若以為這是億萬年蛻變的結果就上當了。庫克根據他的分析下結論說：「月球可能不超過一萬歲。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">四、宇宙塵的證據</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                地球和月球會真是那麼年輕嗎？我們看一看宇宙塵就可以知道：每年差不多有幾千到 14,000,000 噸的宇宙塵會降在地球上，也就是說，如果地球真有 46 億歲的話，應該有高過五層樓的宇宙塵會堆積在地球上。因為宇宙塵含有大量的鎳，若按照進化論的說法，地殼應該有大量的鎳層才對，結果實驗顯示，在地面上及海底沉澱物中都找不到這種現象。有人估計海洋中的鎳，最多只有 9,000 年的歷史。
              </p>
              <p className="text-gray-700 leading-relaxed">
                另外最有趣的是，因為有人推測月球的宇宙塵有 54 呎厚，美國太空總署曾擔心火箭登陸月球時，會沉沒在假想月球年齡所堆積的宇宙塵裏。但是當阿波羅號登陸上月球後，太空人在其上所發現的宇宙塵竟少於二分之一吋，這又證明月球和地球都很年輕。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">五、地球磁場的記錄</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                地球到底有多年輕？我們可以藉著許多實驗來推算：過去一百六十多年以來，地球磁場的記錄顯示，磁場一直穩定而快速地向下衰退。因此，倘若地球的物理變化並未顯著的改變，那麼，推論一萬年以前的地球，應該是一個磁性行星（Magnetic Star）。不僅如此，有的科學家相信，地球磁場的產生是因為運行在地心的電流使然；若是如此，照著今日電流的強度反推回去，不到 20,000 至 25,000 年，電流早已大到足以融化這地球了。所以，這實驗理論顯示地球不可能大於 12,000 年。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">六、其他在地球上的實驗</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                早期，有人用地球每年由河流沖向海洋的沉澱物，以及海水含鹽量，來證明地球的年齡至少有三千萬歲。這理論是錯誤的，理由有三點：
              </p>
              <ul className="space-y-3 ml-2 mb-3">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold flex-shrink-0">（一）</span>
                  <p className="text-gray-700">河水向海沖刷的沉澱物是等比級數減少的，一開始土質表面鬆，顯然比他們所估計的每年 270 億噸沉澱物要多得多。</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold flex-shrink-0">（二）</span>
                  <p className="text-gray-700">考古證明地球曾發生過全面性的大洪水，這洪水必然在短期內帶來大量的沉澱物。</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold flex-shrink-0">（三）</span>
                  <p className="text-gray-700">海洋在冰河期前後面積不一樣，大洪水之前的海洋面積也無法確知，其間既無共同標準，故無法測量準確。</p>
                </li>
              </ul>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch2-fig16-ocean-sediment.jpg" alt="河流沖向海洋的沉澱物" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 16 — 有人用地球每年由河流沖向海洋的沉澱物，以及海水含鹽量，來證明地球的年齡，這理論是錯誤的。</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                近來，有的科學家研究地球內部的資源，發現天然氣及石油等，雖貯藏在可透氣的岩石層中，本身卻仍具高壓。實驗估計，這些氣體及石油，至多在距今一萬年才形成的，否則其壓力早就經由岩石透氣，向外逃散了。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">七、鐘乳石的故事</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                這裏，我要介紹一件有趣的事：人們多數以為鐘乳石及石筍的形成，至少需要億萬年，現在科學家承認這是無稽之談。譬如早在 1968 年，有人在美國華盛頓特別行政區的林肯紀念堂（Lincoln Memorial）地下室裏，赫然發現一些五呎長的鐘乳石，那紀念堂是在 1923 年建立的，其中只經過了四十五年的時間，鐘乳石竟長到五呎左右的長度（見圖 17）。實際上，碳酸鈣（CaCo₃）累積成鐘乳石並不需要很長的時間。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch2-fig17-stalactites.jpg" alt="林肯紀念堂地下室的鐘乳石" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 17 — 1968 年在華盛頓 D.C. 林肯紀念堂地下室，赫然發現一些 5 呎長的鐘乳石，那紀念堂是在 1923 年建立的，其中只經過 45 年，鐘乳石竟長成 5 呎。</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                足見我們常被進化論先入為主的觀念所蒙蔽，未經實驗，就輕易相信謬論。口頭語、文學作品中，動不動就說是幾百萬年前；過去的錯誤觀念，已根深蒂固地在一些人的思想裏，實在是始作俑者進化論所害的。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">八、塞特西島的證據</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                人往往受進化論的影響，以為地殼需要幾億年才能逐漸由熔岩凝結而成，這種觀念也是錯誤的。我們可以由以下兩個實例得到證實：首先就以塞特西島（Surtsey）來說吧，它位於冰島附近，是 1963 年冬季火山開始爆發陸續形成的火山島。1964 年春季，地質學家前往勘察時，發現僅在數月之間，這個新生島竟已變成一個自擁沙漠、卵石、植物和一些所謂「幾十億年」歷史的特徵，不知者經過此地，還會以為這是一個古老的地層。
              </p>
              <p className="text-gray-700 leading-relaxed">
                另外在陸地上也常有一些火山爆發，這些由地球內部噴出來的岩漿都很快的凝固成為岩石，根本不需要幾億年的歷史慢慢演化。既然地殼是由熔岩組成，我們由前述的兩個例子知道地殼是可以很快凝結而成的。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">九、這是一個年輕的地球</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                所以，這是一個年輕的地球，聯合國的資料顯示，現今世界的人口數量，僅需在 5,000 年之內即可到達這個數目；更何況大洪水之後，人類並非來自一個而是三個家庭開始，顯然不超過 4,470 年即可達到今天的人口數量。太陽系，包括太陽及其他星體，雖然人類仍在探測中摸索，但也由目前所知的一些數據，顯示他們也是年輕的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                是的，地球是年輕的，我由一些實驗的數據顯示，地球的年歲，保守的估計，是不會超過 12,000 歲的，而聖經中所記載的人類族譜，也可以累積至距今大約 6,126 年前。地球到底幾歲？無論如何，應該是介於 12,000 與 6,126 年中間。在這麼短的時間裏，那進化論是絕對不能成立的，因此，我非常肯定地告訴你，生命必來自上帝，宇宙的唯一真神。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                至於不信的朋友，　神要問你祂當初也以同樣問題問過約伯的話：「我立大地根基的時候，你在哪裏呢？你若有聰明只管說吧。你若曉得就說，是誰定地的尺度？是誰把準繩拉在其上？地的根基安置在何處？地的角石是誰安放的？」（約伯記三十八章 4 至 6 節）朋友，起初　神創造天地的時候，你在哪裏？
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch2-fig18-earth-apollo8.jpg" alt="阿波羅8號從月球上空拍攝的地球" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 18 — 這張照片是阿波羅 8 號從月球上空拍地球的情景。你想是誰立地球的根基？是誰定地球的尺度？是誰安放地球在這裏的？</p>
              </div>
            </div>

          </div>
        )}
      </div>

      {/* 重點總結 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-sky-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">重點總結</span>
          </div>
          {expanded['summary'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['summary'] && (
          <div className="p-5 bg-white">
            <ul className="space-y-2">
              {[
                '碳 14 測量法的根基被動搖：1960 年代科學家發現大氣層中碳 14 並非固定比例，所有用此法測出的年代都需大幅縮減。',
                '懷特勞的碳 14 改良實驗顯示大多數古物少於五萬年，石油和褐煤也少於五萬歲，地球實際年齡可能只有六至七千歲。',
                '岩石測量法（鈾鉛法、鉀氬法）存在系統性錯誤：夏威夷熔岩實例中僅百年歷史的岩石被測定為 20 億年，月球岩石被測為 20-30 億年但實際可能不超過一萬歲。',
                '多種物理證據指向年輕地球：海洋鎳含量只有 9,000 年歷史、月球宇宙塵極少、地球磁場衰退速率顯示地球不超過 12,000 年。',
                '林肯紀念堂鐘乳石案例打破「億萬年形成」迷思：1923 年建造，僅 45 年後地下室出現 5 呎長鐘乳石。',
                '地球年齡保守估計不超過 12,000 歲，結合聖經族譜約為 6,126 年，進化論在如此短暫時間內根本無法成立。',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-gray-700">{point}</p>
                </li>
              ))}
            </ul>
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
              <h4 className="font-semibold text-gray-800 mb-2">為何科學界長期使用不準確的測量方法？</h4>
              <p className="text-gray-700 leading-relaxed">放射測量法的錯誤早在 1960 年代就已被發現，但進化論框架已深植科學界的先入為主觀念。當一個理論被廣泛接受後，質疑它的證據往往被忽視或重新詮釋，而非修正原有理論。這種「確認偏誤」（Confirmation Bias）在科學史上屢見不鮮，提醒我們在評估任何科學數據時，都需要了解其假設前提。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">大洪水如何影響年代測定？</h4>
              <p className="text-gray-700 leading-relaxed">聖經所記載的大洪水（約 4,500 年前）若屬歷史事實，將從根本上改變所有放射測量法的計算基礎。大洪水之前大氣層有「水氣層」覆蓋，會減少宇宙線穿透量，使生物體內積累的碳 14 更少；加上磁場強度不同、地殼快速變動等因素，所有「億年前」的測定結果都可能需要大幅修正。懷特勞的研究正是在考慮這些因素後，得出地球約六至七千歲的結論。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「年輕地球」論與現代科學的對話</h4>
              <p className="text-gray-700 leading-relaxed">支持年輕地球的學者（年輕地球創造論者，Young Earth Creationists）引用的證據——如磁場衰退、宇宙塵積累、海洋鎳含量——在主流科學界有不同解釋。然而本書的核心要點是：這些測量法本身存在的假設前提（地球一直維持相同物理環境）是否成立，才是關鍵所在。若地球歷史上曾有劇烈變動（如大洪水），所有建立在「均變論」基礎上的年代測定都值得重新審視。</p>
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
              '當你得知碳 14 測量法的根本假設（大氣層碳 14 比例固定）早在 1960 年代就被推翻，卻仍被廣泛引用時，你對「科學結論」的信任有什麼改變？',
              '懷特勞的改良測量法顯示地球可能只有六至七千歲，這與你從小在學校學到的知識有多大差距？面對這種衝突，你傾向如何回應？',
              '林肯紀念堂的鐘乳石只花了 45 年就長成 5 呎，這個案例對你原有的「億年地質假設」有什麼衝擊？',
              '約伯記中　神問約伯：「我立大地根基的時候，你在哪裏呢？」這句話在你心裏引起了什麼感受？',
              '如果地球真的只有幾千至一萬多歲，這對你的世界觀（人的起源、生命的意義）有什麼影響？',
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
              <h4 className="font-semibold text-green-700 mb-2">🔍 查核一個「億年」說法</h4>
              <p className="text-gray-700 mb-2">本週從新聞、教科書或自然紀錄片中找一個使用「億萬年前」的陳述，追問其測量方法和假設前提，練習批判性思考。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 用約伯記回應心中的疑問</h4>
              <p className="text-gray-700 mb-2">閱讀約伯記三十八至三十九章，寫下三個讓你印象最深的　神對約伯的問題，思考這些問題如何回應你對地球起源的困惑。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🌍 感謝創造的禱告</h4>
              <p className="text-gray-700 mb-2">用本章末的角度祈禱：感謝　神精心創造地球，感謝祂使地球「並非使地荒涼，是要給人居住」，並求　神讓你更深認識這位創造者。</p>
              <p className="text-sm text-gray-500 italic">「以賽亞書四十五章 18 節：創造諸天的耶和華……祂如此說：我是耶和華，再沒有別神。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
