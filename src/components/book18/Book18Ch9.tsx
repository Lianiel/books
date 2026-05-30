import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Search, HelpCircle, Check } from 'lucide-react';

export default function Book18Ch9() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-600 to-rose-700 bg-clip-text text-transparent">第九章</h1>
        <h2 className="text-xl font-semibold text-gray-700">撒但的策略與伎倆</h2>
        <p className="text-sm text-gray-500 mt-2">第三部分：認識撒但的策略</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">清教徒論撒但的策略</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅在哥林多後書2:11說「我們並非不曉得他的詭計」（his schemes，his devices）——這暗示信徒有責任認識撒但的策略，使他的陰謀無法得逞。正如孫子兵法所說「知己知彼，百戰百勝」，認識仇敵的戰術是屬靈爭戰不可或缺的一部分。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                清教徒先賢在這方面留下了寶貴的財富。本章主要借鑒以下幾位清教徒對撒但策略的深入分析：
              </p>
              <ul className="space-y-2 mt-2 text-gray-700 text-sm">
                <li className="border-l-4 border-red-300 pl-3"><strong>湯瑪斯·布魯克斯</strong>（Thomas Brooks，1608-1680）：《對付撒但詭計的寶貴應對辦法》（Precious Remedies Against Satan's Devices）</li>
                <li className="border-l-4 border-red-300 pl-3"><strong>理查·吉爾平</strong>（Richard Gilpin，1625-1700）：《論撒但的試探》（Daemonologia Sacra: A Treatise of Satan's Temptations）</li>
                <li className="border-l-4 border-red-300 pl-3"><strong>威廉·司布斯托</strong>（William Spurstowe，1605-1666）：《撒但的詭計》（The Wiles of Satan）</li>
                <li className="border-l-4 border-red-300 pl-3"><strong>約翰·道內姆</strong>（John Downname，1571-1652）：《基督徒的爭戰》（The Christian Warfare）</li>
                <li className="border-l-4 border-red-300 pl-3"><strong>威廉·古諾爾</strong>（William Gurnall，1617-1679）：《穿戴全副軍裝的基督徒》（The Christian in Complete Armour）</li>
                <li className="border-l-4 border-red-300 pl-3"><strong>湯瑪斯·古德溫</strong>（Thomas Goodwin，1600-1680）：《作品集》中關於屬靈爭戰的章節</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">撒但為何如此善於策略</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                在具體分析撒但的策略之前，清教徒指出了撒但在策略上的幾個優勢，使信徒需要特別警醒：
              </p>

              <div className="space-y-3">
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-1">一、長達幾千年的試驗積累</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    撒但自從人類被造就開始試探人類，幾千年來他研究了無數人的心理弱點、性情特徵和在不同情況下的反應。他對人性的了解遠超任何心理學家——不是通過同情，而是通過幾千年的惡意觀察和試驗。清教徒吉爾平說：「他是一個試驗老到的老手，沒有任何類型的人是他不曾試過的。」
                  </p>
                </div>

                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-1">二、針對個人弱點的量身訂製</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    撒但不使用一刀切的策略；他針對每個人的特定弱點、性情、處境和靈命狀況量身訂製試探。他知道什麼最容易使一個驕傲的人跌倒，什麼最容易使一個抑鬱的人絕望，什麼最容易使一個貪財的人妥協。清教徒司布斯托說：「撒但是一個精明的獵人，知道每種獵物最容易被哪種誘餌吸引。」
                  </p>
                </div>

                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-1">三、選擇最有利的時機</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    撒但是試探的時機大師。他不在信徒靈命高昂時正面進攻，而是等待最脆弱的時刻——疲憊時、成功後的自滿、孤獨時、悲傷或憤怒中、長期爭戰後的疲乏。彼得前書5:8說他「往來遊行，尋找可吞吃的人」——這個「尋找」暗示他在研究何時出手最有效。
                  </p>
                </div>

                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-1">四、以光明天使偽裝</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    哥林多後書11:14說「撒但也裝作光明的天使」。他最成功的策略往往是偽裝成有益的，而非顯明地邪惡的。他可以包裝一個罪為「自我照顧」，包裝驕傲為「正當的自信」，包裝貪財為「為家人負責任的規劃」。這個偽裝使信徒很難在當下認出他的工作。
                  </p>
                </div>

                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-1">五、利用第三方</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    撒但常常不直接行動，而是通過其他人——朋友的不良建議、媒體的誘惑性內容、不敬虔的同伴影響。耶穌稱彼得為「撒但」（馬太福音16:23），因為彼得（無意中）成了撒但試探基督的工具。最危險的試探，往往來自我們最信任的人。
                  </p>
                </div>

                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-1">六、持之以恆、不知疲倦</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    啟示錄12:12說撒但「知道自己的時候不多，就氣忿忿地下到你們那裡去了」。他的憤怒使他持之以恆，從不因失敗而放棄。他可能暫時撤退（路加福音4:13說「魔鬼就離開他，再等候時機」），但他永遠不會永久放棄。信徒不能在屬靈爭戰中「退休」。
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">布魯克斯論撒但的試探裝置（Devices）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                湯瑪斯·布魯克斯在《對付撒但詭計的寶貴應對辦法》中，列出了撒但使用的大量具體「裝置」（devices，即策略或手段）。以下是其中最重要的幾個：
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">裝置一：將罪呈現為微小的</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-2">
                    撒但說：「這只是一件小事；神不會在乎這點點的罪；其他人做了更多更壞的事。」他使罪看起來微不足道，使良知的警示顯得過度敏感。
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed italic">
                    <strong>應對辦法</strong>（布魯克斯）：記住，沒有「小罪」——每一個罪都是對無限聖潔神的冒犯，每一個微小的罪都足以使人下地獄（雅各書2:10）。大衛的「小小」眼目淫亂，最終導致了姦淫、謀殺和數年的屬靈黑暗。一點點的酵能發起全團。
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">裝置二：將罪呈現為甜蜜和令人愉快的</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-2">
                    撒但遮蓋罪惡的後果，只呈現眼前的樂趣。他不讓你看見隱藏在誘惑後面的苦毒和破壞。
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed italic">
                    <strong>應對辦法</strong>：看見罪的全圖——不只是眼前的甜蜜，也要看見它的後果（破壞的關係、失去的純潔、神的不悅、良心的控訴）。希伯來書11:25描述摩西選擇「寧可與神的百姓同受苦害，也不願暫時享受罪中之樂」——他看見了「暫時」二字。
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">裝置三：在犯罪後，使神的憐憫顯得廉價</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-2">
                    「神是慈愛的，祂必饒恕」——撒但使用這個真理來鼓勵預謀的罪。他在試探之前說「神會饒恕的」，在犯罪之後又說「你真是無藥可救的罪人」。
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed italic">
                    <strong>應對辦法</strong>：神的恩典是真實的，但「繼續犯罪，使恩典顯多」的邏輯是錯誤的（羅馬書6:1-2）。真正的恩典使人離罪，不是鼓勵犯罪。同時，在犯罪後，要記住神的饒恕是真實的——不可讓撒但用已認罪、已得赦免的罪繼續定罪你。
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">裝置四：轉移注意力到別人的罪</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-2">
                    「你看看那些假冒為善的基督徒！他們比你更差。」撒但使人把注意力放在他人的失敗上，而非自己的罪和神的聖潔。
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed italic">
                    <strong>應對辦法</strong>：我要向神交帳，不是向其他人的標準交帳。其他人的罪不能為我的罪辯護。在審判席前，「但其他人……」不是有效的答辯。眼目轉向基督，而非橫向比較。
                  </p>
                </div>
              </div>
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
              <h4 className="font-semibold text-gray-800 mb-2">湯瑪斯·布魯克斯的《寶貴應對辦法》：清教徒屬靈心理學的巔峰</h4>
              <p className="text-gray-700 leading-relaxed">
                布魯克斯的《對付撒但詭計的寶貴應對辦法》（1652年）是清教徒屬靈文學中最重要的作品之一。這本書的獨特之處在於，它以「問題—解決方案」的格式組織：首先描述撒但的一個具體「裝置」（如何試探人），然後提供多個具體的「應對辦法」（如何抵制那個試探）。布魯克斯在序言中說：「撒但的最大技巧就是在試探中隱藏毒藥，用甜蜜的糖衣包裹苦藥。」他對人性心理的洞察遠超他的時代，預見了後來心理學對防禦機制、認知偏誤等現象的描述。今天，這本書仍然是了解撒但策略和如何回應的最佳實踐指南之一。司布真說：「那些從不讀古老書籍的人，在屬靈判斷力上是可憐的。布魯克斯的書是每個基督徒必須擁有的。」
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「試探」與「測試」的神學區分：神試煉與撒但試探</h4>
              <p className="text-gray-700 leading-relaxed">
                雅各書1:2-4和1:13-15描述了兩種完全不同的「考驗」：神的試煉（testing）和撒但的試探（temptation）。希臘文同一個詞（peirasmos）可以指兩者，但中文通常翻譯為兩個不同的詞。神的試煉目的是建造信心和品格（雅各書1:3），使人更加成熟；撒但的試探目的是引誘人犯罪（雅各書1:14-15）。神「試驗」亞伯拉罕（創世記22章），不是要他犯罪，而是要建造他的信心；撒但試探耶穌（馬太福音4章），是想使祂放棄神旨意的路。兩種「考驗」的反應不同：面對神的試煉，應當「忍受」（雅各書1:12），因為它結出好果子；面對撒但的試探，應當「逃跑」（哥林多前書6:18，提摩太後書2:22）或「抵擋」（雅各書4:7）。辨別當前的困難是神的試煉還是撒但的試探，對應當如何回應有實際意義。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「裝作光明天使」：靈性辨別的必要性</h4>
              <p className="text-gray-700 leading-relaxed">
                哥林多後書11:14說撒但能「裝作光明的天使」，這使靈性辨別（discernment）成為一個關鍵的屬靈恩賜和紀律。約翰一書4:1說「不要信服一切的靈，總要試驗那些靈是出於神的不是，因為世上有許多假先知已經出來了」。靈性辨別的能力如何培養？首先，深知聖經——許多偽靈性的東西，只要熟悉聖經就能辨別其矛盾之處。其次，注意果子——馬太福音7:16說「憑著他們的果子，就可以認出他們來」；良善的屬靈教導結出聖潔、謙卑、愛基督的果子，偽靈性結出驕傲、屬靈上癮、或道德上的妥協。第三，在靈命成熟的群體中尋求集體的辨別——重要的屬靈問題不應只靠個人判斷。第四，以神的榮耀為標準——任何使自我中心化、削弱聖經權威、或繞過基督而直接靠近神的教導，都應當警惕。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">神允許試探的目的：信心的精煉</h4>
              <p className="text-gray-700 leading-relaxed">
                一個深刻的問題是：如果神是全能的，為何祂允許撒但試探信徒？清教徒提供了幾個神學上的回答：第一，試探揭示我們心中真實的狀況——約伯的試探顯出了他信心的真實；我們只有在壓力下才知道自己真正相信什麼。第二，成功抵擋試探是信心操練的機會——就像肌肉在阻力下才能增強，信心在試探的抵擋中才能深化。第三，通過試探，我們更深地體驗基督的同在和能力——保羅的「肉中刺」（可能的邪靈攻擊）最終使他體驗「我的能力是在人的軟弱上顯得完全」（哥林多後書12:9）。第四，我們的得勝見證榮耀了神，也激勵其他信徒（啟示錄12:11說他們「因自己所見證的道，並不愛惜性命，直到於死」）。但這些原因不應成為輕視試探或不尋求幫助的藉口——神允許試探，但祂也應許了出路（哥林多前書10:13）。
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
              <p className="text-gray-700">本章說撒但「針對每個人的特定弱點量身訂製試探」。誠實地回顧，你自己的性情、背景和靈命狀況的哪些方面，讓你特別容易受到哪些類型的試探？認識這一點如何幫助你更好地防衛？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">布魯克斯的第一個裝置：「將罪呈現為微小的」。在你的生活中，有哪些你已經習慣的「小罪」，可能已經不再感覺是罪？神的聖潔如何重新校準你對罪嚴重性的認識？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">「神是慈愛的，祂必饒恕」——你是否曾（有意或無意地）用神的恩典來合理化繼續在某個罪中？這個「廉價恩典」的心態，與真正體驗神赦罪恩典後想要離罪的心態，有什麼根本不同？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">撒但選擇最脆弱的時刻出手——回想你曾有過的最嚴重的靈命失敗，當時你是在什麼狀態下（疲憊？孤單？剛剛有了成功？長期壓力後？）？認識這個規律如何幫助你預防？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">「試探」與「測試」的區分——你目前面對的最大困難，是更像神的試煉（建造你的信心），還是更像撒但的試探（引誘你犯罪）？你如何分辨，又如何相應地回應？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">撒但「持之以恆，從不放棄」——你在屬靈爭戰中是否也有類似的持之以恆？你是否曾因疲乏而放鬆了對某些試探的防守，讓它慢慢成為習慣性的罪？如何重新建立警戒？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">📖 閱讀布魯克斯的《寶貴應對辦法》</h4>
              <p className="text-gray-700 mb-2">嘗試閱讀這部清教徒經典的部分章節，深化對撒但策略的認識。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>選擇前三個「裝置及其應對辦法」作為入門閱讀</li>
                <li>注意布魯克斯如何從聖經引用大量例證</li>
                <li>對每個「裝置」問自己：「撒但曾用這個手段對付過我嗎？」</li>
                <li>對每個「應對辦法」問：「這個建議在我的處境中如何實際應用？」</li>
                <li>如果中文版難以獲得，可搜尋「Thomas Brooks Precious Remedies 中文」</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 個人「試探模式分析」</h4>
              <p className="text-gray-700 mb-2">花時間做一個誠實的個人試探模式分析，識別你最脆弱的時刻和領域。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>回顧過去三個月內你最常犯的罪，找出共同的模式</li>
                <li>問：這些罪通常發生在什麼時刻？（疲憊、飢餓、孤獨、剛有壓力等）</li>
                <li>問：通常有什麼「觸發點」（特定的媒體、人際關係、情境）？</li>
                <li>問：撒但在引導你到犯罪之前，通常先說什麼謊言讓你放鬆防守？</li>
                <li>為你識別的「脆弱時刻」制定具體的保護計劃</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🛡️ 學習辨別「神的試煉」與「撒但的試探」</h4>
              <p className="text-gray-700 mb-2">選擇你目前最大的一個困難，按照以下問題進行辨別分析。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>這個困難是否在引誘我犯罪（向謊言妥協、放棄信心、選擇自我保護勝過信靠神）？→ 可能是試探</li>
                <li>這個困難是否在操練我的信心、耐心或謙卑，雖然過程痛苦但結果是成長？→ 可能是神的試煉</li>
                <li>雅各書1:2-4的「全然喜樂」如何能夠在我的處境中成真？</li>
                <li>哥林多前書10:13的「出路」在我的處境中是什麼？</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">✝️ 建立「罪的完整圖像」的習慣</h4>
              <p className="text-gray-700 mb-2">對抗「罪被呈現為甜蜜」的裝置，學習在面對試探時看見罪的完整後果。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>下次面對試探時，先停下來，問自己：「若我屈服，接下來一小時、一天、一個月、一年內會發生什麼？」</li>
                <li>寫下一個你曾因屈服試探而付出代價的具體例子，作為對自己的提醒</li>
                <li>默想希伯來書11:25——摩西選擇「寧可與神的百姓同受苦害，也不願暫時享受罪中之樂」</li>
                <li>建立一個「後果清單」：若我屈服這個慣性的罪，它對我的靈命、關係、見證有什麼長期影響？</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-4 mt-2">
              <h4 className="font-semibold text-green-800 mb-2">🙏 禱告詞</h4>
              <p className="text-gray-700 leading-relaxed italic text-sm">
                「主，我承認撒但是一個狡猾的仇敵，遠比我更了解我的弱點。但感謝祢，祢比他更全知，更強大，更愛我。求祢賜我屬靈的辨別力，使我能認出撒但的裝置，在他說謊時說『我知道你的詭計』。在每次試探臨到時，讓我先停下來，看見罪的真實代價，而非只看眼前的甜蜜。讓保羅的話在我心中有分量：『你們所遇見的試探，無非是人所能受的；神是信實的，必不叫你們受試探過於所能受的。』奉基督的名，阿們。」
              </p>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
