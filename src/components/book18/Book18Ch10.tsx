import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Search, HelpCircle, Check } from 'lucide-react';

export default function Book18Ch10() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">第十章</h1>
        <h2 className="text-xl font-semibold text-gray-700">直面撒但的四大策略</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <div>
              <p className="text-gray-700 leading-relaxed italic border-l-4 border-purple-200 pl-4">
                「你不能阻止鳥兒飛過你的頭頂，」路德寫道，「但你可以不讓他們落在你頭上做窩。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">策略一：撒但誘惑我們犯罪</h3>

              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="font-semibold text-purple-700 mb-2">詭計①：以快樂為誘餌，其中隱藏罪的毒鉤</p>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    撒但給了亞當和夏娃一個水果來交換伊甸園，包藏在水果裡的毒鉤導致了懲罰和死亡。正如妻子看到兩隻老鼠小心地吃捕鼠器上的花生醬，前兩天的成功使它們粗心大膽，兩天後早晨卻死在捕鼠器上。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-1 font-semibold">應對辦法（5項）：</p>
                  <ul className="space-y-1 text-gray-700 ml-2">
                    <li>（1）牢記向誘惑屈服的後果。「在世上吃的許多東西要到地獄裡去消化。」（布魯克斯）「每個誘惑中都閃爍著地獄的火花。」（格諾爾）</li>
                    <li>（2）盡力遠離試探。知道自己的軟弱領域並儘量避免。不要問你可以離罪多近而不犯罪，而是盡可能遠離。「你若不想讓魔鬼用禁果誘惑你，最好遠離他的果園。」</li>
                    <li>（3）積極參與成長和侍奉。大衛不在自己當處的戰場上時特別容易受試探（撒下11）。「怠惰的時間是魔鬼的運動場。」</li>
                    <li>（4）與知己的基督徒朋友分享持續出現的試探。罪在秘密中更猖獗；把試探帶到光明之中能打破罪的權勢。孤獨的巡邏兵常常成為死亡的巡邏兵。</li>
                    <li>（5）記得你不可能對任何試探保持中立。每個試探或使你更接近上帝，或使你遠離上帝。「我們對罪的反應精確表明了我們對上帝的愛。」（歐文·盧茨爾）</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="font-semibold text-purple-700 mb-2">詭計②：使罪看起來是一種美德</p>
                  <p className="text-gray-700 leading-relaxed mb-1">驕傲變成了自尊，貪婪變成了有抱負，酗酒變成了善於交往。</p>
                  <p className="text-gray-700 leading-relaxed"><span className="font-semibold">應對辦法：</span>罪在掩飾和偽裝之下更危險，但終究會失去偽裝。我們必須像在臨終床上一樣看待罪的一切黑暗，也記得罪的赦免是以救主的寶血為代價的。</p>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="font-semibold text-purple-700 mb-2">詭計③：說悔改是容易的事</p>
                  <p className="text-gray-700 leading-relaxed mb-1">撒但藉著淡化悔改的難度，淡化罪的可怕性，鼓勵我們犯罪。</p>
                  <p className="text-gray-700 leading-relaxed"><span className="font-semibold">應對辦法：</span>布魯克斯說：「悔改不是生長在自然花園中的花朵。」「為罪悔改就像不犯罪一樣困難，是恩典之工。」悔改是一生每日都必須進行的工作，使整個人逐漸由罪轉向上帝——為罪憂傷、羞恥、承認、拋棄，最終惟獨奔向基督。</p>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="font-semibold text-purple-700 mb-2">詭計④：鼓勵我們與世俗的人交朋友</p>
                  <p className="text-gray-700 leading-relaxed mb-1">撒但知道交往能產生同化作用，藉著不敬虔的友誼引誘我們犯罪。</p>
                  <p className="text-gray-700 leading-relaxed"><span className="font-semibold">應對辦法：</span>《箴言》4:14-15說：「不可行惡人的路，不要走壞人的道。要躲避，不可經過；要轉身而去。」</p>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="font-semibold text-purple-700 mb-2">詭計⑤：使未歸正者看起來享福、信徒看起來多憂</p>
                  <p className="text-gray-700 leading-relaxed mb-1">企圖使人相信侍奉上帝是徒然的（詩73:1-15）。</p>
                  <p className="text-gray-700 leading-relaxed"><span className="font-semibold">應對辦法：</span>掃羅王被定罪時外在卻似乎蒙福，約伯被上帝深愛時外在卻似乎遭棄——上帝常為使所愛的人得永恆益處而管教他們（來12:5-6）。「萬事都互相效力，叫愛上帝的人得益處」（羅8:28）。信徒內在的喜樂往往遠大於外在可見的，而邪惡之人的內在需要總大於他們外在的喜樂。</p>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="font-semibold text-purple-700 mb-2">詭計⑥：故意淡化罪的嚴重性，帶領人犯更大的罪</p>
                  <p className="text-gray-700 leading-relaxed mb-1">司布斯托說：「撒但從來不突然把人從信仰告白的山頂扔到罪惡的深淵，而是逐漸帶領人下坡和轉彎，越來越低，直到他們到達地獄。」</p>
                  <p className="text-gray-700 leading-relaxed"><span className="font-semibold">應對辦法：</span>布魯克斯說：「即使最小的罪也違背了上帝的律法、本性、本質和榮耀。」「使人犯罪的誘惑越小，罪越大，因為屈服於小罪是對上帝最大的不友善——使上帝悲歎，使基督流血，使聖靈擔憂。」告訴撒但：你不會因向最大的仇敵屈服來讓你最偉大的朋友難過。</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">策略二：撒但攔阻我們靈修</h3>

              <div className="space-y-4">
                <div className="bg-pink-50 rounded-lg p-4">
                  <p className="font-semibold text-pink-700 mb-2">詭計①：使我們覺得靈修非常艱難</p>
                  <p className="text-gray-700 leading-relaxed mb-1">撒但讓我們以為，與其以敷衍了事的方式靈修，不如乾脆不做。</p>
                  <p className="text-gray-700 leading-relaxed"><span className="font-semibold">應對辦法：</span>藉著專注上帝關於操練靈修的命令來抵擋這種推理。要記得靈修的益處：藉著禱告、讀經、與信徒團契，我們榮耀並享受上帝，遇見並擁抱基督，堅固頭腦，抵擋罪。我們的懼怕消散，盼望升起。多仰望冠冕，少盯著十字架；多仰望將來的榮耀，少盯著現在的苦難。</p>
                </div>

                <div className="bg-pink-50 rounded-lg p-4">
                  <p className="font-semibold text-pink-700 mb-2">詭計②：用虛妄思想分散我們的注意力</p>
                  <p className="text-gray-700 leading-relaxed mb-1">靈修時撒但令人憂傷困惑，以致厭倦履行神聖的職責。</p>
                  <p className="text-gray-700 leading-relaxed"><span className="font-semibold">應對辦法：</span>當接近上帝時，專注于上帝威嚴的聖潔。路德說，他想要魔鬼知道自己與上帝的團契是認真的，所以大聲地進行靈修——大聲說話可以幫助集中注意力。如果生命中堆滿了世俗責任，應當減少屬世責任，直到每天都有時間尋求上帝。</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">策略三：撒但歪曲上帝及其真理</h3>

              <div className="space-y-4">
                <div className="bg-indigo-50 rounded-lg p-4">
                  <p className="font-semibold text-indigo-700 mb-2">詭計①：把上帝描繪成殘酷的工頭</p>
                  <p className="text-gray-700 leading-relaxed mb-1">撒但告訴許多人，聖潔公義的上帝不會憐憫他們，因為他們罪惡太深。</p>
                  <p className="text-gray-700 leading-relaxed"><span className="font-semibold">應對辦法：</span>愛德華滋說，大衛以自己的大罪為基礎祈求赦免——正如乞丐以自己的赤貧為根基祈求麵包，處於屬靈貧困中的人呼求上帝的憐憫。上帝是「三一上帝願意接納乞丐」的上帝。要記得「撒但把自己的顏色塗在上帝身上。」（查諾克）</p>
                </div>

                <div className="bg-indigo-50 rounded-lg p-4">
                  <p className="font-semibold text-indigo-700 mb-2">詭計②：宣揚三一上帝中各位格對拯救罪人的意願不同</p>
                  <p className="text-gray-700 leading-relaxed mb-1">有講道人只宣講基督願意拯救，而聖父聖靈似乎有所保留。</p>
                  <p className="text-gray-700 leading-relaxed"><span className="font-semibold">應對辦法：</span>聖父非常願意拯救我們，因此賜下自己的獨生愛子；聖靈也非常願意拯救我們，因此以驚人的耐心在各種罪人的心裡做工。三一上帝完全合一地愛罪人、救罪人。</p>
                </div>

                <div className="bg-indigo-50 rounded-lg p-4">
                  <p className="font-semibold text-indigo-700 mb-2">詭計③：只強調上帝的慈愛，忽略上帝的公義</p>
                  <p className="text-gray-700 leading-relaxed mb-1">撒但說，既然上帝大有憐憫，何必在意罪？</p>
                  <p className="text-gray-700 leading-relaxed"><span className="font-semibold">應對辦法：</span>布魯克斯說，上帝「首先掛出憐憫的白旗」，但若人拒絕憐憫，上帝就「拿出公義和審判的紅旗」。「世上使人最不像聖徒卻最像撒但的事，就是從上帝的憐憫出發為犯罪辯護——這就是魔鬼的邏輯。」信徒應當把上帝的憐憫視為保守自己遠離罪的最強有力的根據（詩26:3-5；羅6:1-2）。</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">策略四：撒但反對成聖</h3>

              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="font-semibold text-green-700 mb-2">詭計①：攔阻信徒得到救贖性知識，讓人像彼得一樣不認主</p>
                  <p className="text-gray-700 leading-relaxed"><span className="font-semibold">應對辦法：</span>為靈命的衰退而悔改，回到上帝面前，以起初的愛心行當行的事（啟2:4-5）。專心研讀聖經和好的屬靈書籍。多多禱告，求上帝使自己行事堅定。</p>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <p className="font-semibold text-green-700 mb-2">詭計②：強調頭腦知識就足夠了，阻止心靈的經歷性認識</p>
                  <p className="text-gray-700 leading-relaxed mb-1">華森寫道：「只要講道沒有在你的良心中做工，撒但並不介意你聽了多少次講道。」</p>
                  <p className="text-gray-700 leading-relaxed"><span className="font-semibold">應對辦法：</span>不要滿足於沒有在心靈中經歷基督的救恩（林前1:30）。《約翰福音》17:3所說的「認識」是深刻的、永久性的關係，不只是頭腦的資訊。</p>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <p className="font-semibold text-green-700 mb-2">詭計③：使成聖看起來不切實際、太難理解</p>
                  <p className="text-gray-700 leading-relaxed"><span className="font-semibold">應對辦法：</span>救恩和成聖都是白白的恩賜。即使當我們擔心自己的聖潔只有芥菜子那麼小時，上帝的靈仍在帶領我們走在聖潔之路上。這個聖潔的交換是美麗、單純、神奇的——基督把自己賜給我們，我們把自己獻給他，他的禮物貴重許多，但這交換是真實的。</p>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <p className="font-semibold text-green-700 mb-2">詭計④：使我們以為救恩依賴自己的靈性、聖潔和行為</p>
                  <p className="text-gray-700 leading-relaxed mb-1">撒但混淆信心與行為、福音與律法之間的真正關係。</p>
                  <p className="text-gray-700 leading-relaxed"><span className="font-semibold">應對辦法：</span>一個十九世紀的信徒說：「我以為自己必須遵守律法，於是去找摩西談判，但他立刻把我打倒了……絕望之中，我來到了髑髏地，在那裡找到了同情我的那位，他赦免了我的罪。現在我回去告訴摩西，他對我微笑，握手，非常親切——從那以後再也沒有把我打倒過。」救恩惟獨仰賴恩典。每日憑著信心和悔改在罪人的救主基督裡尋求庇護。</p>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <p className="font-semibold text-green-700 mb-2">詭計⑤：說今生努力追求成聖是不必要的，等死後自然聖潔</p>
                  <p className="text-gray-700 leading-relaxed"><span className="font-semibold">應對辦法：</span>聖經呼召信徒要在恩典中長進，忘記背後，努力向前追求靈命成熟。「我們或者憑著信心勝過世界，或者被世界所勝過，此外沒有別的出路。」（出14:13-14）</p>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <p className="font-semibold text-green-700 mb-2">詭計⑥：藉著世俗使我們麻木，讓我們與自己相比而非以聖經為標準</p>
                  <p className="text-gray-700 leading-relaxed mb-1">世俗就像惡性腫瘤，常常直到晚期才被發現。</p>
                  <p className="text-gray-700 leading-relaxed"><span className="font-semibold">應對辦法：</span>弗拉維爾在《保守心靈》中說：「在出入你心靈的每個門口，都當設一個守衛。」一個人問：你能離山邊緣多近而不掉下去？只有第四個候選人說：「我選擇儘量遠離邊緣」——他得到了工作。一旦察覺到自己的罪就立刻承認，只有清潔的良心才能與上帝保持清楚的團契。</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">布魯克斯的十個應對辦法——總結</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                布魯克斯在《寶貴的應對辦法》中，依據整本聖經概括了基督徒對付撒但詭計的十個辦法：
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  '以聖經為標準行事',
                  '不要使聖靈擔憂',
                  '追求屬天的智慧',
                  '立刻抵擋撒但的第一個提議',
                  '竭力追求被聖靈充滿',
                  '保持謙卑',
                  '始終保持警醒',
                  '保持與上帝的團契',
                  '靠著基督的力量抵擋撒但',
                  '多多禱告'
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 bg-purple-50 rounded-lg p-2">
                    <span className="text-purple-600 font-bold flex-shrink-0">{i + 1}.</span>
                    <p className="text-gray-700 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">彼得簡練的總結（彼前5:8-9）</h3>
              <div className="bg-purple-50 rounded-lg p-4 mb-3">
                <p className="text-gray-700 italic leading-relaxed">
                  「務要謹守，警醒；因為你們的仇敵魔鬼，如同吼叫的獅子，遍地遊行，尋找可吞吃的人。你們要用堅固的信心抵擋它。」
                </p>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li><span className="font-semibold">「務要謹守」：</span>清楚而認真地思考，最重要的是，要依據聖經思考。</li>
                <li><span className="font-semibold">「警醒」：</span>小心提防，警惕敵人存在、活動和目的的跡象。</li>
                <li><span className="font-semibold">「抵擋」魔鬼：</span>撒但的圖謀向來是邪惡的，他會得寸進尺。布魯克斯說：「撒但許諾的是最好的，但給予的是最差的；許諾的是尊榮，給予的是羞辱；許諾的是喜樂，給予的是痛苦；許諾的是生命，給予的是死亡。」</li>
                <li><span className="font-semibold">保持「堅固的信心」：</span>不動搖，不屈服，使用上帝兒子裡面的信心和上帝的聖言做盾牌。布魯克斯總結說：「要牢記，生命短暫，任重道遠，幫助是巨大的，回報是確定的；因此不要灰心喪氣，要堅持不懈，多行善事，天堂將會使所有人變得完全。」</li>
              </ul>
              <div className="mt-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
                <p className="text-gray-700 leading-relaxed font-medium">
                  最後，你真的想在自己生命中看到撒但的失敗嗎？專心仰望基督。靠著在基督裡面的信心勝過世界。在生活中，基督就是你的一切。
                </p>
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
              <h4 className="font-semibold text-gray-800 mb-2">「離邊緣越遠越好」——罪的漸進性與邊界的重要性</h4>
              <p className="text-gray-700 leading-relaxed">
                本章中「山頂司機」的比喻精準地揭示了一個重要真理：屬靈的邊界不是用來考驗我們能走多近，而是要盡可能遠離。現代文化有一種「灰色地帶」的思維——只要沒有明確犯罪，似乎就沒有問題。但司布斯托警告，撒但從來不突然把人從山頂扔到深淵，而是「逐漸帶領人下坡和轉彎」。罪的誘惑常常始於一個看似無害的選擇，然後一步一步。《箴言》5:8說「你所行的道要離她遠，不可就近她的房門」——不是「不要進去」，而是「不要靠近」。這種預防性的智慧，遠比在邊緣掙扎更有效也更實際。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「白旗與紅旗」——上帝憐憫的正確理解</h4>
              <p className="text-gray-700 leading-relaxed">
                布魯克斯的「白旗與紅旗」意象深刻地捕捉了上帝憐憫的雙重性質。許多人以上帝的憐憫為藉口，以為「反正上帝會饒恕，我可以繼續犯罪」——這正是撒但最成功的詭計之一，因為它用的是真實的神學概念（上帝的確憐憫人），卻得出了扭曲的結論。保羅在《羅馬書》6:1-2回應這個問題：「我們可以仍在罪中，叫恩典顯多嗎？斷乎不可！」真正理解上帝憐憫的人，會被憐憫所激勵而更加遠離罪，而不是更加放縱罪。上帝的憐憫是救恩的動力，不是犯罪的許可。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「從髑髏地來到西奈山」——律法與福音的正確關係</h4>
              <p className="text-gray-700 leading-relaxed">
                那個十九世紀信徒的見證極其生動：他先去找摩西（律法），但律法只能把他打倒；然後絕望中來到髑髏地（福音），在那裡得到了赦免和醫治；再回去見摩西時，摩西不再是審判他的，而是對他微笑。這正是宗教改革的核心洞見：律法的功用是「把人逼到基督那裡」（加3:24），而不是救人。一旦靠著信心在基督裡得救，我們遵守律法的動機也從「害怕定罪」轉變為「感恩的愛」。正如改革宗神學所強調的：我們不是為了得救而遵守律法，而是因為已經得救而遵守律法。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「頭腦知識」與「心靈知識」的區分</h4>
              <p className="text-gray-700 leading-relaxed">
                本章提到撒但「不介意我們繼續瞭解基督，但竭力阻止我們明白成聖的真道」——這個區分有深刻的神學意義。華森說：「只要講道沒有在你的良心中做工，撒但並不介意你聽了多少次講道。」信息的傳遞與靈命的轉化是兩回事。一個人可以能夠背誦許多經文、通曉系統神學，卻從未讓真理真正改變他的心靈和生活。約翰福音17:3中的「認識」（ginosko）不是課堂上的資訊學習，而是婚姻式的親密關係。真正的屬靈知識必然帶來生命的改變；如果知道了卻沒有改變，我們需要問自己：我真的「認識」了嗎？
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
          <div className="p-5 bg-white space-y-3">
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">1.</span>
              <p className="text-gray-700">撒但引誘我們犯罪的六個詭計中，你認為哪一個在你的生命中最有效果？為什麼那個特定的詭計對你特別有效？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">本章提到要「積極參與成長和侍奉」來避免試探，因為大衛的跌倒發生在他不在自己當處的戰場上。回想你在信仰上最容易跌倒的時期，那時你的靈修生活和事奉狀態如何？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">「撒但把自己的顏色塗在上帝身上」——你對上帝的形象中有哪些可能是被扭曲的？你如何更真實地認識聖經中啟示的上帝？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">你有沒有用過上帝的憐憫來為自己的犯罪辯護，哪怕只是在心裡？那個時刻對你與上帝的關係有什麼影響？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">布魯克斯的十個應對辦法中，哪三個你認為在你目前的屬靈生命中最需要加強？你打算如何具體地加強它們？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">彼得在彼前5:8-9中說「保持堅固的信心」來抵擋魔鬼。對你來說，什麼時候你的信心最容易動搖？是什麼幫助你在那些時刻保持堅固？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 識別自己的「軟弱地圖」</h4>
              <p className="text-gray-700 mb-2">本週花時間誠實地繪製自己的屬靈軟弱地圖：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>列出你最容易受試探的三個領域（可以很具體：網路、言語、金錢、驕傲等）</li>
                <li>為每個領域寫下撒但通常使用的「詭計」：是以美好外表包裝？還是逐漸麻木良心？</li>
                <li>為每個軟弱領域制定一個「遠離邊緣」的具體措施</li>
                <li>把這個地圖帶入禱告，請求上帝的保守</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 落實布魯克斯的十個應對辦法</h4>
              <p className="text-gray-700 mb-2">從布魯克斯的十個應對辦法中選擇本週最需要的兩個，制定具體計畫：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>「以聖經為標準行事」：選擇一段與你的試探領域相關的經文，每天晨起默想</li>
                <li>「保持與上帝的團契」：設定固定的靈修時間，哪怕只有15分鐘，不讓世俗責任侵佔</li>
                <li>「多多禱告」：在覺察到試探的當下立即禱告，不等到「有心情」才禱告</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">⏰ 建立「靈性健康檢查」習慣</h4>
              <p className="text-gray-700 mb-2">每週六晚上花10分鐘做一週的靈性回顧：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>我這週在哪裡「讓鳥兒做了窩」——屈服了哪些試探？</li>
                <li>我這週在哪裡「不讓鳥兒做窩」——成功抵擋了哪些試探？上帝如何幫助了我？</li>
                <li>我的靈修（禱告、讀經）這週是否有被撒但攔阻？如何被攔阻的？</li>
                <li>我對上帝的認識有沒有被誤導或扭曲？需要重新校正什麼？</li>
                <li>把回顧的結果帶入主日的敬拜和禱告</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4 mt-4">
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic leading-relaxed">
                主耶穌，你是得勝的主，是我唯一的盼望和力量。我承認自己軟弱，在撒但的許多詭計面前常常跌倒。感謝你的寶血赦免了我一切的罪，也感謝你應許使我成聖。求你幫助我在每一個試探面前，先想到你的榮耀，再想到罪的後果；先奔向你的憐憫，再面對自己的軟弱。使我越來越認識你，不只是頭腦上的認識，而是心靈深處真實的相交。奉你聖名，阿們。
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
