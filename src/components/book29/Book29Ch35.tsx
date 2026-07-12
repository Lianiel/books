import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch35() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第三十五章</h1>
        <h2 className="text-xl font-semibold text-gray-700">你和你全家</h2>
        <p className="text-gray-500 mt-1">耶和華對挪亞說：「你和你的全家都要進入方舟；因為在這世代中，我見你在我面前是義人。凡潔淨的畜類，你要帶七公七母；不潔淨的畜類，你要帶一公一母；空中的飛鳥也要帶七公七母，可以留種，活在全地上；因為再過七天，我要降雨在地上四十晝夜，把我所造的各種活物都從地上除滅。」挪亞就遵著耶和華所吩咐的行了。創世記七1-5</p>
      </div>

      {/* 正文 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">正文</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">前言</h3>
              <p className="text-gray-700 leading-relaxed">
                挪亞的故事不單是一個人的故事，也是一個家庭全家事奉的故事。本章主要分享挪亞與他的家人，最早在創世記五32說：「挪亞五百歲生了閃、含、雅弗。」創世記六10又說：「挪亞生了三個兒子，就是閃、含、雅弗。」創世記六18記載：「我卻要與你立約；你同你的妻，與兒子兒婦，都要進入方舟。」創世記七1又記載：「耶和華對挪亞說：你和你的全家都要進入方舟。」從這些經文，可以發現神非常看重家庭，包括家庭生活、全家得救、全家事奉。以下分三段分享：1.挪亞生三個兒子，2.挪亞全家造方舟，3.挪亞全家進方舟。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、挪亞生三個兒子</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記五32說：「挪亞五百歲生了閃、含、雅弗。」挪亞500歲那年一共生了三個孩子嗎？他的肉身長子是閃嗎？都不是，這是舊約聖經中彌賽亞譜系的特殊記錄方式。「挪亞500歲生了閃、含、雅弗」這句話代表三個意思<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（林道亮主講，《創世記研究（DVD）》。台北：中華福音神學院，1985）</span>：1.挪亞500歲開始生孩子。2.他一生共生了閃、含、雅弗三個兒子。3.排第一位的閃是屬靈長子、是彌賽亞的祖先。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                至於肉身的長子是誰，那必須由其他資料去推論。創世記十一10記載：「閃的後代記在下面。洪水以後二年，閃一百歲生了亞法撒。」如果挪亞500歲生了閃，那麼洪水來的時候，閃就100歲了，洪水本身花了一年時間，到洪水之後二年，閃就應該是102歲或103歲了。但聖經說，那時他才100歲。這不是數字計算錯誤，而是由於舊約聖經的特殊筆法。照計算，挪亞大約502歲生閃，這樣洪水後二年，閃可以是100歲。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                挪亞肉身的大兒子是誰呢？由創世記十章三個家譜的先後次序，合理推論雅弗是老大，含是老二。歸納起來大概是這樣，挪亞500歲生雅弗，501歲生含，502歲生閃。挪亞既然很晚生孩子，一清楚神的計畫，就以最快的速度把三個兒子在三年內都生出來。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這種特殊的家譜記載方式，並非只在這裡出現，洪水後另有一例：「他拉七十歲生了亞伯蘭、拿鶴、哈蘭。」（創十一26）這句話也同樣有三個意思：1.他拉70歲開始生孩子。2.他一生共生了亞伯蘭、拿鶴、哈蘭三個兒子。3.排第一位的亞伯蘭是屬靈長子、是彌賽亞的祖先。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                對照一下前後經文，創世記十一32：「他拉共活了二百零五歲，就死在哈蘭。」創世記十二4：「……亞伯蘭出哈蘭的時候，年七十五歲。」如果他拉七十歲生亞伯蘭，那麼他拉死的時候亞伯蘭就已經一百三十五歲了，不會只有七十五歲。所以他拉的肉身長子不是亞伯蘭，亞伯蘭比肉身長子還小六十歲。有人猜想，會不會他拉沒死，亞伯蘭就先離開父親了。提早六十年離開，太不近情理。更重要是有新約的佐證，使徒行傳記載司提反的講道，清楚說明這段歷史：「2……當日我們的祖宗亞伯拉罕在米所波大米還未住哈蘭的時候，榮耀的神向他顯現，對他說：你要離開本地和親族，往我所要指示你的地方去。4他就離開迦勒底人之地，住在哈蘭。他父親死了以後，神使他從那裡搬到你們現在所住之地。」（徒七2-4）很清楚，是他拉死了之後，亞伯蘭才去迦南地。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                他拉的肉身長子是誰並不難推論，查看創世記十一27-29：「27他拉的後代記在下面。他拉生亞伯蘭、拿鶴、哈蘭；哈蘭生羅得。28哈蘭死在他的本地迦勒底的吾珥，在他父親他拉之先。29亞伯蘭、拿鶴各娶了妻：亞伯蘭的妻子名叫撒萊；拿鶴的妻子名叫密迦，是哈蘭的女兒；哈蘭是密迦和亦迦的父親。」這裡提供三個重要線索：1.哈蘭最早去世，比父親他拉還早。2.拿鶴娶了哈蘭的女兒密迦。3.哈蘭的兒子羅得與亞伯蘭年紀接近，亞伯蘭有時稱他為兄弟（創十三8）。所以很容易推論，哈蘭是老大。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                拿鶴可能是老二，也有三個線索：1.亞伯蘭比哈蘭小六十歲，相隔很久，中間有一位拿鶴來當老二比較合理。2.拿鶴若比哈蘭小約三十歲，娶哈蘭的女兒，差不多恰好。3.亞伯蘭的兒子娶了拿鶴的孫女（創廿四15），拿鶴應比亞伯蘭大。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神的揀選很特別，比較多是揀選最小的。該隱、亞伯兩兄弟，神揀選弟弟亞伯；亞當於130歲時生塞特來代替亞伯，之前應已生了至少十幾個，塞特是比較小的。挪亞生三個，神揀選最小的閃；他拉生三個，神揀選最小的亞伯蘭；亞伯拉罕生以實瑪利、以撒，神揀選以撒；以撒生以掃、雅各，神揀選弟弟雅各；暗蘭生亞倫、摩西，神揀選弟弟摩西（出六20）；耶西有八個兒子，神揀選最小的大衛。可能是因為神不喜歡人驕傲，或太過自信，而最小的比較卑微、軟弱、謙卑。神抵擋驕傲的，恩待卑微的，更能顯出神的恩典和能力。
              </p>
              <p className="text-gray-700 leading-relaxed">
                彌賽亞譜系裡，神特意將每一位彌賽亞的祖先都寫在家譜的最前面，是要凸顯一件事，神要透過這些人將彌賽亞生出來，彌賽亞就是將來要成為君王、救主的那一位。在舊約先有猶大支派的大衛王成為彌賽亞，在新約是大衛的子孫基督耶穌為永遠的彌賽亞，耶穌基督就是彌賽亞譜系這些人的後裔。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、挪亞全家造方舟</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記六17-22與七1-5講相似的內容，但二者相隔大約八十年。挪亞約略知道需要造方舟，可能是在他接近500歲的時候，因為他本來不想生孩子，後來得到啟示，知道需要造方舟，就在500歲開始生孩子。到了大約520歲時，三個孩子都長大成人了，也都娶妻了。這時神對挪亞正式呼召，就是創世記六13-22這段話。這段話不是挪亞500歲時講的，因為那時剛生孩子，沒有媳婦。這話也不是挪亞600歲時講的，因為神是要挪亞開始來造方舟，也要媳婦們預備食物，而這要花大約80年的時間。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這段話是在挪亞大約520歲的這個時間點講的，有一個很重要的內容，是神與挪亞立約（創六18），約的內容特別提到挪亞全家要預備進方舟，這個異象目標清楚了，然後就啟動了全家一起來建造方舟。過了約80年，方舟建造好了，就在洪水即將來臨前七天（創七4），神再次對挪亞說話，內容大致一樣。以前是目標、是預告，現在是實現了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                從神說「來造方舟」到神說「來進方舟」相隔80年。這期間包含挪亞多次前往世界各地傳道，也包含三個兒子同心協力建造方舟，還有三個兒媳婦天天為全家預備食物，並不斷研發可保存長久一點的食物。至於挪亞的妻子，可能一方面領導、指導媳婦，一方面每天為挪亞的傳道工作守望禱告，也為兒子們的建造工作守望禱告，因為求神參與建造是很重要的。正如詩篇一二七1所說的：「若不是耶和華建造房屋，建造的人就枉然勞力；若不是耶和華看守城池，看守的人就枉然儆醒。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在這80年當中，夫妻聚少離多，但有前面520年恩愛的基礎，使他們能挺過這80年。挪亞與兒子們也有前面約20年生活在一起的基礎，這是基督化家庭非常重要的原則，在兒少成長的過程，父親不能缺席。因此不是傳道100年，乃是傳道80年，他們先以20年建立了家庭根基，之後80年是一個關係密切、妥善分工的團隊。
              </p>
              <p className="text-gray-700 leading-relaxed">
                雖然挪亞走遍全地一次大概需要五年，但並不是必須五年才能回家一次。因為他的家就在盤古大陸的正中央，他可以每次前往東西南北不同方向，路徑小繞一下，就可涵蓋大約五分之一的區域，不到一年就可以回家一陣子，與妻子同住、禱告，與兒子們核對建造方舟的方式與進度，之後再出發。就如同保羅的宣教，經常在傳完一個區域後，就回到耶路撒冷述職，之後再出發。面對長期的旅行佈道工作，維持家人關係、同工關係，定期安息、充電等，是很重要的。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、挪亞全家進方舟</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記七1：「耶和華對挪亞說：你和你的全家都要進入方舟；因為在這世代中，我見你在我面前是義人。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記六9已經說：「挪亞是個義人，在當時的世代是個完全人。」那是在挪亞造方舟之前。到了創世記七1，神再次說：「你和你的全家都要進入方舟；因為在這世代中，我見你在我面前是個義人。」時間已相隔約八十年。這讓我們想到，保羅所說：「這義是本於信，以致於信。如經上所記：義人必因信得生。」（羅一17）挪亞本來就是因信靠神而被稱為是義人，而後信心繼續成長，更深地信靠神、與神同行，所以在神面前繼續是一個義人。就在進方舟前，神給予尊榮和肯定。進方舟是神的救恩，也可說是神給挪亞的獎賞。馬丁路德說，有兩種義，一種是因信稱義的義，一種是信主後靠主行出義來。後者正如啟示錄十九7-8所說：「7……羔羊婚娶的時候到了；新婦也自己預備好了，8就蒙恩得穿光明潔白的細麻衣。這細麻衣就是聖徒所行的義。」新婦的細麻衣，乃是聖徒所行的義。挪亞全家預備進方舟時，不僅有因信稱義的義，也有聖徒所行的義，因為他們建立了美好的婚姻家庭，同心合意將方舟建造起來，也將福音傳遍地極。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                關於全家信主得救，挪亞全家乃是聖經中第一個榜樣，後來有妓女喇合全家信主得救。新約時代有哥尼流全家信主得救，還有腓立比監獄的獄卒全家信主得救。使徒行傳十六30-33記載：「30又領他們出來，說：二位先生，我當怎樣行才可以得救？31他們說：當信主耶穌，你和你一家都必得救。32他們就把主的道講給他和他全家的人聽。33當夜，就在那時候，禁卒把他們帶去，洗他們的傷；他和屬乎他的人立時都受了洗。」這裡的「當信主耶穌，你和你一家都必得救」，被很多人理解為「一人信主，全家得救」。其實照原文的意思，當信主耶穌的主詞也要包含你和你一家。比較好的翻譯是：「你和你一家當信主耶穌，都必得救。」獄卒本來只關心自己的得救，但保羅對他說，你和你全家都應該來信主耶穌，都可以得救。獄卒全家果然照著保羅的勉勵，都聽道、信主、受洗，所以都得救了。全家信主而得救是神所看重的，但不是神的應許或保證。我們當效法挪亞，先花時間在妻子、兒女身上，使他們信主、愛主，而後有一個堅強的團隊一起來事奉主，這樣是最好的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                八十年前神與挪亞立約之後，挪亞開始建造方舟與旅行佈道，過了八十年，方舟建造好了，福音傳遍地極，這時神說，進來方舟享受安歇吧！這讓我們想到保羅離世見主前的見證：「那美好的仗我已經打過了，當跑的路我已經跑盡了，所信的道我已經守住了。從此以後，有公義的冠冕為我存留，就是按著公義審判的主到了那日要賜給我的；不但賜給我，也賜給凡愛慕他顯現的人。」（提後四7-8）還有彼得的見證：「1我這作長老、作基督受苦的見證、同享後來所要顯現之榮耀的，勸你們中間與我同作長老的人：2務要牧養在你們中間神的群羊，按著神旨意照管他們；不是出於勉強，乃是出於甘心；3也不是因為貪財，乃是出於樂意；也不是轄制所託付你們的，乃是作群羊的榜樣。4到了牧長顯現的時候，你們必得那永不衰殘的榮耀冠冕。」（彼前五1-4）
              </p>
              <p className="text-gray-700 leading-relaxed">
                保羅與彼得都帶著得冠冕的盼望忠心事奉數十年，他們都殉道了，但靈魂都立即到天上，「與基督同在，好得無比」（腓一23）。挪亞進方舟，是他600歲人生與神同行、忠心事奉的果實，如同使徒宣告的那個榮耀公義冠冕，也如同得勝者升天或死而復活作王掌權的賞賜。第一、二、三世紀有許多為主受苦、甚至為主殉道的聖徒，第十八、九世紀以來，有許多的宣教士離鄉背井，是為完成主的大使命，他們許多人也是為主受苦、甚至為主殉道。但這一切，主都記念，也都獎賞。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                創世記六22：「挪亞就這樣行。凡神所吩咐的，他都照樣行了。」這裡是講挪亞聽了神的吩咐，就開始去建造方舟、宣教傳道。創世記七5：「挪亞就遵著耶和華所吩咐的行了。」這裡是講挪亞聽了神的吩咐，就將全家人及各樣活物都帶進方舟。願主開我們的眼睛，讓我們看見那永恆榮耀的實際。我們今天順服神去做神所吩咐的，將來也會聽到神吩咐說：「好，你這又良善又忠心的僕人，你在不多的事上有忠心，我要把許多事派你管理；可以進來享受你主人的快樂。」（太廿五21）
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 重點整理 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-sky-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">重點整理</span>
          </div>
          {expanded['summary'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['summary'] && (
          <div className="p-5 bg-white">
            <ul className="space-y-3">
              {[
                '「挪亞五百歲生了閃、含、雅弗」是彌賽亞譜系的特殊記錄法：500歲開始生子、一生共生三子、排第一的閃是屬靈長子；肉身次序推論為雅弗、含、閃（500、501、502歲）。他拉生亞伯蘭、拿鶴、哈蘭同理。',
                '神的揀選常揀選最小的（亞伯、塞特、閃、亞伯蘭、以撒、雅各、摩西、大衛）——神抵擋驕傲的，恩待卑微的，更顯出神的恩典和能力。',
                '神在挪亞約520歲時正式呼召立約；「造方舟」到「進方舟」相隔80年：挪亞旅行傳道、三個兒子同心建造、媳婦們預備食物、妻子守望禱告——先以20年建立家庭根基，後80年成為分工密切的事奉團隊。',
                '進方舟前神再次稱挪亞為義人：不僅有因信稱義的義，也有聖徒所行的義（啟十九8新婦的細麻衣）；進方舟是神的救恩，也是與神同行、忠心事奉的獎賞，如同公義的冠冕。',
                '「你和你一家都必得救」（徒十六31）正確理解是「你和你一家當信主耶穌，都必得救」——全家得救是神所看重的方向，但需要全家都信；當效法挪亞先花時間使家人信主愛主，建立全家事奉的團隊。',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-gray-700 leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* 分享題目 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-yellow-50 hover:from-amber-100 hover:to-yellow-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">分享題目</span>
          </div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && (
          <div className="p-5 bg-white space-y-4">
            {[
              '挪亞的三個兒子閃、含、雅弗，肉身出生的時間怎樣排列？如何推論出來？',
              '挪亞全家一起造方舟的見證，提醒我們現在的信仰生活應當注重甚麼？有甚麼優先次序？',
              '挪亞全家進方舟，有豐富的屬靈意義。不僅有因信稱義的義，也有聖徒所行的義；不僅是全家得救，也是全家得賞賜。整件事如何應用在今日基督徒的生活與事奉？',
            ].map((q, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0 text-lg">{i + 1}.</span>
                <p className="text-gray-700 leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
