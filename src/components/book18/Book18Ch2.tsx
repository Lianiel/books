import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Search, HelpCircle, Check } from 'lucide-react';

export default function Book18Ch2() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">第二章</h1>
        <h2 className="text-xl font-semibold text-gray-700">舊約中的撒但</h2>
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
              <p className="text-gray-700 leading-relaxed mb-3">
                撒但及其歷史是撒但論的基礎。關於撒但的教義有時被稱為「撒但學」（Satanology），再加上那些幫助撒但的墮落天使，此類考察也被稱為「魔鬼學」（demonology）。撒但的事業在人類受造之前就已經開始了（約38：7），並且會一直延續到遙遠的未來，因此，撒但論是聖經中一個重要教義。
              </p>
              <p className="text-gray-700 leading-relaxed">
                聖經中很多次提到撒但。因此，如果不相信魔鬼確實存在，就不可能持守基督教信仰。舊約中九本書（《創世記》、《利未記》、《申命記》、《歷代志上》、《約伯記》、《詩篇》、《以賽亞書》、《以西結書》、《撒迦利亞書》）以及新約中每一位作者都證明了魔鬼的存在。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">1. 撒但的名字和起源</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「撒但」（Satan）一詞出自希伯來語，意思是「控告者、敵人、抵擋者」。舊約中十九次用到這個詞，其中十四次在《約伯記》第1和2章中。《歷代志上》第21章1節、《詩篇》第109篇6節和《撒迦利亞書》第3章1-2節中也提到「撒但」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                學者一直在爭論「撒但」這個詞到底是一個專有名稱，還是一個頭銜。在《約伯記》和《撒迦利亞書》中，「撒但」這個名詞之前有定冠詞，所以它的字面翻譯是「那撒但」或「那控告者」。然而，在《歷代志上》第21章1節和《詩篇》第109篇6節中，「撒但」之前沒有定冠詞。一些學者由此得出結論說，「撒但」這個詞在《約伯記》和《撒迦利亞書》中應當被認為是一個頭銜，而在《歷代志上》和《詩篇》第109篇中應當被認為是一個專有名稱。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                撒但以及其他所有天使都是上帝所造的靈（詩148：2，5；來1：7，14）。《約伯記》第1章表明撒但可能曾經是上帝所造的天使中地位最高、最聰明的一個，他在侍奉上帝的工作中有特別卓越的地位。《以西結書》第28章12至15節告訴我們撒但在犯罪之前是什麼樣子。這段話雖然是跟推羅王說的，但先知以西結實際上是藉著推羅王向撒但發話。他把撒但描述為「受膏遮掩約櫃的基路伯」（第14節），「智慧充足，全然美麗」（12節），「所行的都完全」（15節）。他曾在「伊甸上帝的園中」（13節），被安置在「上帝的聖山上」（14節）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                唐納德·格雷·巴恩豪斯（Donald Gray Barnhouse）寫道：「撒但最初存在時全然美麗，身居尊位，大有權勢，被上帝所賜的華美環繞。他看自己比天上一切天使更有能力，更有智慧和美麗。他認為只有上帝比他自己所擁有的更多。」巴恩豪斯總結說，撒但在墮落前「擔任上帝的首相，可能治理整個宇宙，肯定管理這個世界」（《無形的爭戰》，Invisible War，26-27頁）。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">2. 撒但在伊甸園中的墮落及活動</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                《以西結書》第28章15至19節繼續告訴我們撒但從其尊位墮落，因為他關注的只是自己的美麗和榮耀，因為他有愚蠢的野心，要取代榮耀的上帝。撒但之罪源於驕傲，在自欺中發展，最終所導致的就是叛逆的野心。他的叛逆致使他誘惑一大群天使與他一起背叛上帝（啟12：4）。於是上帝把撒但和所有叛逆天使逐出天堂，摔到地上（結28：16-17）。撒但永遠失去了他那作為上帝所膏抹的基路伯的本位（猶6）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                撒但不再能從天上直接攻擊上帝，他就竭盡一切惡毒來攻擊人，因為人是上帝創造的顛峰。撒但在歷史中的行動最早記錄在《創世記》第3章中。我們得知撒但變成蛇來到伊甸園，從那裡接近夏娃。撒但今天仍然在使用當初他用來誘惑夏娃的一些詭計：
              </p>
              <div className="ml-4 space-y-4">
                <div className="border-l-4 border-red-300 pl-4">
                  <p className="font-semibold text-gray-800 mb-1">（1）撒但歪曲上帝的誡命</p>
                  <p className="text-gray-700 leading-relaxed">他問夏娃：「上帝豈是真說，不許你們吃園中所有樹上的果子嗎？」（創3：1下）。上帝實際上說的是，除了一棵樹上的果子之外，亞當和夏娃可以吃伊甸園中成千上萬棵樹上的果子。夏娃糾正撒但說：「園中樹上的果子我們可以吃，惟有園當中那棵樹上的果子，上帝曾說：你們不可吃，也不可摸，免得你們死」（創3：2-3）。</p>
                </div>
                <div className="border-l-4 border-red-300 pl-4">
                  <p className="font-semibold text-gray-800 mb-1">（2）撒但質疑上帝的動機和品格</p>
                  <p className="text-gray-700 leading-relaxed">他告訴夏娃：「你們不一定死，因為上帝知道，你們吃的日子眼睛就明亮了，你們便如上帝能知道善惡」（創3：4-5）。撒但試圖通過挑唆夏娃質疑上帝的良善來質疑上帝的品格。他暗示夏娃，上帝並不是公平良善的，因為上帝限制他們的自由，禁止他們吃分別善惡樹上的果子。</p>
                </div>
                <div className="border-l-4 border-red-300 pl-4">
                  <p className="font-semibold text-gray-800 mb-1">（3）撒但說人可以像上帝一樣</p>
                  <p className="text-gray-700 leading-relaxed">撒但試圖把自己的目標強加給人類，他說：「你們便如上帝能知道善惡」（創3：5下）。換言之，亞當和夏娃可以自行判斷對錯。他們可以決定自己想要做什麼，不必聽從上帝的話，可以做自己的上帝。但撒但所說的話只有一半是真的，因為他們將能夠分辨善惡，但他們永遠也不可能像上帝一樣。撒但也沒有告訴他們，離開了上帝的恩典，他們根本沒有能力離惡行善。</p>
                </div>
                <div className="border-l-4 border-red-300 pl-4">
                  <p className="font-semibold text-gray-800 mb-1">（4）撒但使罪看起來是美善的</p>
                  <p className="text-gray-700 leading-relaxed">《創世記》第3章6節告訴我們：「於是女人見那棵樹的果子好作食物，也悅人眼目，且是可喜愛的，能使人有智慧，就摘下果子來吃了；又給她丈夫，她丈夫也吃了。」撒但把罪惡包裝成美麗的外表，讓人在感官和理智上都感到吸引力。</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">3. 儘管撒但不斷攻擊，但他仍處在上帝的掌管之下</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                儘管撒但成功地誘惑亞當和夏娃，使他們背叛上帝，違背與上帝所立的聖約，使全人類都陷入罪中，但在整個舊約時代，撒但一直處在上帝的掌管之下。《撒母耳上》16章14至23節中撒但與掃羅的關係以及《約伯記》第1章中撒但對待約伯的方式都證明了這一點。撒但的行為不能超越造物主上帝出於自己的至高無上的權能為他限定的界限。上帝如果不允許，他「動也不能動」（參《海德堡教理問答》第28問）。馬丁·路德說「就連魔鬼也是上帝的魔鬼」，正是這個意思。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                然而，自從人在伊甸園墮落之後，撒但經常傷女人後裔的腳跟。各民族都生活在他的黑暗之中，生活在盲目的不信之中，生活在各種各樣的罪惡之中。但上帝出於自己的主權，從撒但的黑暗權勢之下為自己揀選了一個民族。然而，就連在上帝的選民以色列人當中，黑暗也常常盛行。不過上帝為自己留下了不曾向巴力屈膝的七千人（王上19：18）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                撒但的影響表現在該隱與亞伯、以實瑪利與以撒、以掃與雅各、埃及與以色列的衝突之中。撒但的目標始終是一樣的：剷除蒙揀選的後裔。埃及法老命令殺死所有的以色列男孩，埃及人在紅海攻擊以色列人，哈曼企圖消滅以斯帖和她的本族人的陰謀，這些都證明了這一點。在整個舊約時代，撒但一直在伺機作惡，破壞上帝的長期計畫。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                撒但激動大衛數點以色列人（代上21：1）。撒但控告大祭司約書亞犯了罪（撒3：1）。撒但誘使上帝的選民參與外邦人邪淫的儀式（王上18：28）、邪術（王下9：22）、交鬼活動（王下21：6-7），占卜（彌5：12）。撒但試圖通過這些手段來滅絕他們。然而撒但的邪惡活動無論計畫多麼周密，都經常遭到失敗，因為上帝使用撒但的詭計來幫助實現自己的目的，它們絲毫不能妨礙上帝實現自己的目的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                撒但質疑約伯的敬虔，說他的敬虔是以自己的私利為基礎。但是，上帝的僕人約伯經歷了嚴酷的試煉，最終像金子一樣煉淨了自己。撒但企圖利用巴蘭詛咒以色列，但上帝的靈降臨在巴蘭身上，他預言了上帝對以色列人恩慈的祝福。撒但就這樣受到上帝命令的制約，加爾文說：「就像被迫服侍上帝一樣」（《基督徒敬虔學》1：14：17）。
              </p>
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed italic">
                  「明白我們最大的敵人那些惡謀完全處在我們最好的朋友的掌控之下，從而『曉得萬事都互相效力，叫愛上帝的人得益處，就是按他旨意被召的人』（羅8：28），這是多麼大的安慰啊！所以，加爾文總結說：『有時魔鬼甚至也可以當我們的醫生。』」
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
              <h4 className="font-semibold text-gray-800 mb-2">「撒但」名稱的語言學意義</h4>
              <p className="text-gray-700 leading-relaxed">
                希伯來語「撒但」（שָׂטָן，sāṭān）的三個核心含義——控告者、敵人、抵擋者——三者合一地描述了撒但的本質：他在上帝面前控告人（啟12：10），他是人的敵人（彼前5：8），他抵擋上帝的計畫（撒3：1）。這三個角色在整本聖經中都可以看到。值得注意的是，《約伯記》中撒但的稱謂前帶定冠詞（「那撒但」），暗示這是他的職銜而非純粹的名字——他是「那個控告者」、「那個對抗者」。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">撒但墮落前的尊榮地位</h4>
              <p className="text-gray-700 leading-relaxed">
                《以西結書》28章將撒但描述為「受膏遮掩約櫃的基路伯」，是天使中最崇高的位分。「基路伯」在舊約中守護上帝的聖所（出25：18），象徵上帝同在的護衛。撒但曾擔任這個最接近上帝的職分，卻因驕傲——「你因美麗心中高傲，又因榮光敗壞智慧」（結28：17）——而墮落。這提醒我們：最大的墮落往往源於最高的恩賜。驕傲是所有罪的根源，而這正是撒但最核心的特徵。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">伊甸園中四種詭計的現代形式</h4>
              <p className="text-gray-700 leading-relaxed">
                撒但在伊甸園使用的四種詭計至今未變：（1）歪曲上帝的話——今天表現為對聖經的重新詮釋，以符合文化偏好；（2）質疑上帝的動機——今天表現為「一個愛你的上帝怎麼會讓你受苦？」（3）自主如神——今天表現為「跟從你的內心」、「你才是自己生命的主人」；（4）美化罪惡——今天表現為媒體、廣告和社會風氣將各種罪包裝成自由和進步。認識這四種模式，有助於我們在每天的生活中辨認撒但的工作。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">上帝的主權與撒但的活動</h4>
              <p className="text-gray-700 leading-relaxed">
                《約伯記》第1-2章呈現了一個令人震驚的場景：撒但在天庭向上帝報告，並請求允許試煉約伯。這不是撒但比上帝更強大，而是上帝主動划定撒但的邊界。加爾文的話「就連魔鬼也是上帝的魔鬼」道出了一個深刻的神學真理：撒但的一切行動，包括他對信徒的攻擊，都在上帝的至高主權下，最終服務於上帝的救贖計畫。這對受苦中的信徒是極大的安慰：沒有任何試煉可以超過上帝所允許的範圍（林前10：13）。
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
              <p className="text-gray-700">撒但原是最榮耀的天使，卻因驕傲而墮落。這個事實對你如何看待自己生命中的驕傲有什麼提醒？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">撒但在伊甸園中使用的四種詭計（歪曲誡命、質疑動機、自主如神、美化罪惡），在你最近的生活中，哪一種是你最容易受到影響的？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">《約伯記》顯示撒但必須在上帝許可的範圍內行動。當你面對苦難和試煉時，這個真理對你有何幫助或困難？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">在整個舊約中，撒但的目標始終是「剷除蒙揀選的後裔」。你認為撒但今天針對上帝百姓的主要攻擊策略是什麼？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">加爾文說「有時魔鬼甚至也可以當我們的醫生」。你能否舉一個例子，說明上帝如何使用撒但的攻擊來使你的靈命成長？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">聖經說上帝在以色列人中「為自己留下了不曾向巴力屈膝的七千人」。在你所處的時代和文化中，你認為有哪些「現代的巴力」？你如何在這些壓力下持守信仰？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 辨認撒但的四種詭計</h4>
              <p className="text-gray-700 mb-2">本週每天晚上花5分鐘回顧當天，辨認撒但的詭計：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>今天有沒有人（或媒體/文化）試圖歪曲上帝話語的意思？</li>
                <li>有沒有什麼想法質疑上帝的良善或公平？</li>
                <li>有沒有「你可以自己決定」的誘惑？</li>
                <li>有沒有什麼罪被包裝得很美麗、很合理？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 研讀約伯記1-2章</h4>
              <p className="text-gray-700 mb-2">閱讀《約伯記》第1-2章，特別注意：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>上帝如何主動與撒但對話</li>
                <li>撒但必須請求上帝的許可才能攻擊約伯</li>
                <li>上帝為約伯設定了明確的邊界</li>
                <li>約伯的回應給你什麼啟示</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 個人反省：我的「驕傲盤點」</h4>
              <p className="text-gray-700 mb-2">撒但因驕傲而墮落。本週花時間誠實地寫下：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>我在哪些方面比較驕傲（才能、外貌、靈命、成就）？</li>
                <li>這些驕傲如何在關係中表現出來？</li>
                <li>帶著這份清單向上帝認罪，求祂賜下謙卑</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">🙏 本章禱告</h4>
              <p className="text-gray-700 leading-relaxed italic">
                「主啊，感謝祢的話語告訴我撒但的真面目——他是控告者、仇敵、抵擋者。求祢保守我的心不被驕傲所佔領，不讓撒但歪曲祢的話語在我心中紮根。當我面對試煉，求祢讓我記得：就連撒但的攻擊，也在祢的主權之下。萬事都互相效力，叫愛祢的人得益處。奉耶穌的名祈求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
