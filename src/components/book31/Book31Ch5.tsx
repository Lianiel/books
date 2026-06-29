import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book31Ch5() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    exploration: true,
    questions: true,
    practice: true,
  });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* 章節標題 */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">第五章</h1>
        <h2 className="text-xl font-semibold text-gray-700">伊甸失落在哪裏</h2>
        <p className="text-sm text-gray-500 mt-2">書頁 83–101</p>
      </div>

      {/* 開章引言 */}
      <div className="mb-8 rounded-xl overflow-hidden shadow-md">
        <div className="bg-gradient-to-r from-gray-900 to-teal-900 px-6 py-5">
          <p className="text-gray-100 leading-relaxed text-sm">
            耶和華神使他沉睡，他就睡了；於是取下他的一條肋骨，又把肉合起來。耶和華神就用那人身上所取的肋骨，造成一個女人，領她到那人跟前。那人說：「這是我骨中的骨，肉中的肉，可以稱她為女人，因為她是從男人身上取出來的。」因此，人要離開父母，與妻子連合，二人成為一體。
          </p>
          <p className="text-teal-300 text-sm mt-3 text-right italic">——— 創世記二章 21 至 24 節 ———</p>
        </div>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-teal-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            {/* 人類原可永生 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">人類原可永生</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                二十世紀末期醫學報導，人體一些器官，若非因疾病殘害，皆可活數百年之久。接著，科學家又陸續證實，人體的許多疾病也和基因與遺傳有關。當時曾被醫學家提出一個問題：人原來究竟可以活到幾歲？
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                人原本可以不死，有伊甸園生命樹的果子吃，就可以永遠活著（創世記三章22節）。然而，人類墮落了，淪落到今天的地步。有人說夏娃應該負責，有人說亞當應該負責，為澄清事實，我們先看這兩位人類始祖究竟有什麼不同。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                首先，夏娃是亞當沉睡時，神取下他的一條肋骨造成的（創世記二章21節）。這件事，科學實驗曾移植青蛙的皮膚細胞核，注射到「去核的卵細胞」內，居然也孵化成蝌蚪出來，證明生物體內的細胞，具有遺傳生命的樣式。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這種「複製」生物的技術一直在進步，乃至於在 1997 年 2 月維莫特（Wilmut）向世界宣佈他們已成功地「複製」了一隻羊，而且這隻取名叫達麗（Dolly）的羊，當時已健康地成長了七個月。維莫特博士成功地使用一隻母羊的乳腺細胞，培育後將之移植到「取去 DNA 的卵細胞」裏面，然後再放入母羊的子宮內懷孕成胎，就這樣「複製」了和母羊同樣的一隻羊（見圖35）。這件事原本是蘇格蘭的胚胎學者，使用神已創造的生物細胞，借用神已創造的卵子，經由 277 次嘗試才成功這一次複製的實驗，並不是人可以「創造生命」，也不是人可以使用自己的方法「複製生命」。但是經由媒體渲染，這個實驗卻震驚了全球。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch5-fig35-dolly-sheep.jpg" alt="圖35 複製羊Dolly" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 35 — 1997 年 2 月蘇格蘭的胚胎學者向全世界宣佈他們已成功地「複製」了和母羊同樣的一隻羊。</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                1998 年，在美國就有一位名叫席德（Seed）的科學家公開要成立複製人類的醫學中心。席德本身並不是生物遺傳專家，但是他相信人如今既然可以「複製動物」，所以每年幫助無法生育的夫婦「複製出 500 個人」應該不會困難。此語一出，立刻造成輿論界的高溫熱戰，連美國白宮也評論此舉是「不負責、不道德和非專家」的計劃。1999 年世界上就開始有許多政府立法禁止科學家再進一步去「複製人類」。光由以上這些科學實驗個案，已充分說明了神何以能以一根肋骨，藉其細胞分裂的方法，製造一位女子夏娃。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神如此行，可想而知，是為使二人源於一體，達到合一的目的（創世記二章24節）。然而，男女的染色體究竟不同：男的是 XY 型，女的是 XX 型，分明可見神當初除去 XY 中的 Y，複製了 X，造成二人不同之處。不錯，人類始祖都吃了禁果，在罪上都有份。然而，當夏娃犯罪時，尚不算全人類墮落，惟有那具有 XY 全部染色體的亞當犯罪，全人類子孫才算墮落。所以，罪由亞當犯罪而來，其後裔皆在罪中，惟有用那「末後的亞當」——耶穌的寶血洗淨各人的罪，信神的人才能重生得救。
              </p>
              <p className="text-gray-700 leading-relaxed">
                亞當沉睡時，取去肋骨造成夏娃，醒了之後才有配偶；同理，耶穌釘死時，用肋旁流出的血與水洗淨世人的罪，復活之後才有教會。原來，這救贖的工作，早在神創造人的時候就早已預備好了。
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                那麼，神既然預知人類會犯罪，為什麼造人呢？有人會因為有雜草而不種麥子嗎？農夫為那收割麥子的盼望，豈不輕看那除草的勞苦嗎？撒種時，任由雜草生長，是為免得傷麥苗。等到麥子成熟時，雜草割去綑起丟入火裏，那農夫豈不轉憂為喜嗎？使徒彼得說到神的長久忍耐：「主看一日如千年，千年如一日。主所應許的尚未成就，有人以為他是耽延，其實不是耽延，乃是寬容你們，不願有一人沉淪，乃願人人都悔改。」（彼得後書三章8至10節）
              </p>
            </div>

            {/* 撒但引誘人類犯罪 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">撒但引誘人類犯罪</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經上說，蛇引誘人吃禁果，誰是那蛇呢？聖經裏啟示錄記載撒但就是那古蛇，名叫魔鬼，也就是大龍（啟示錄十二章9節）。撒但本是那「明亮之星，早晨之子」（以賽亞書十四章12節），是那「基路伯」之一（以西結書二十八章14節），因驕傲而背叛神，自己要作王，又拖拉天上的三分之一天使叛亂（啟示錄十二章4節）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                那麼牠是在什麼時候背叛神的呢？是在伊甸園被造之前呢？還是在伊甸園被造之後呢？有關這一點，解經學者有不同的說法。我相信撒但是在引誘人吃禁果時才背叛神的，我有下列三個從聖經裏提出來的證據：
              </p>
              <div className="space-y-3 ml-2">
                <div className="flex gap-3">
                  <span className="text-teal-600 font-bold flex-shrink-0">（一）</span>
                  <p className="text-gray-700 leading-relaxed">聖經指明，撒但曾在伊甸園「無所不備，智慧充足，全然美麗」，後來犯罪，才被神驅逐出去（以西結書二十八章11至18節）。原本美麗又有榮光的撒但，為什麼竟會變成「古蛇」或「大龍」今天醜惡的外貌？顯然這與神對蛇的咒詛有關（創世記三章14節）。撒但既非在神建造伊甸園之前叛變，那就是在牠引誘人吃禁果時才墮落的。</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-teal-600 font-bold flex-shrink-0">（二）</span>
                  <p className="text-gray-700 leading-relaxed">「基路伯」後來負責看守生命樹的道路（創世記三章24節），足見當初也可以到伊甸園中。倘若撒但早就背叛神，未獲神的允許，牠怎麼可能輕易溜進這美麗的世界去試探人類？試想哪一位父親明知前面有火，還讓他的子女喪生火裏呢？絕對不會。那麼，神為什麼將「自由抉擇的意識」賦與受造物，讓他們也可以選擇背叛神呢？這是因為神不是造那已被程式設定的機械人，他所造的是具備祂的形象和樣式，並且有自由意識的子女，神的大愛就在這裏顯明了。</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-teal-600 font-bold flex-shrink-0">（三）</span>
                  <p className="text-gray-700 leading-relaxed">主耶穌指明，撒但「從起初是殺人的，不守真理；因他心裏沒有真理，他說謊是出於自己，因他本來是說謊的，也是說謊之人的父」（約翰福音八章44節）。是的，那蛇確是殺人的，又是說謊者，就是主耶穌所說「起初」撒但背叛神的特徵。</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mt-3">
                撒但說謊，又藉著這個謊言，把死亡帶到了人間。牠說：「你們不一定死，因為神知道，你們吃的日子眼睛就明亮了，你們便如神能知道善惡。」（創世記三章4至5節）。人聽了撒但的話，違背了神的吩咐，吃了不該吃的「分別善惡樹上的果子」，結果就是死亡。人不但被神宣判屬靈的死亡——與親密的團契被隔離，同時人與永生隔絕，肉體也必須死亡。人真「如神能知道善惡」嗎？人原可在聖潔上定形，在心性上達到完全的地步，這樣就更能像神，不需要體驗罪惡。如今，因為虧欠神的榮耀，受罪的轄制，行善要與情慾掙扎，一切由不得自己，真是上了撒但的大當。
              </p>
            </div>

            {/* 罪敗壞所有受造物 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">罪敗壞所有受造物</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經既然是以人類被神救贖為中心，所以也必忠實地敘述罪是用什麼方法進入人的經驗範圍。人墮落是一段歷史的記錄，這並不是神話，也不是寓言或比喻，因為聖經在這裏沒有必要用抽象的理念來說明人墮落的事實。前述這段聖經的記錄顯示出下列五個重點：
              </p>
              <div className="space-y-2 ml-2">
                {[
                  '試探是來自外面的，罪是由外面而進入人的生命裏面。所以亞當的犯罪，並不是罪惡的起源，而是罪進人心的開始。',
                  '關於罪的來源，我們只能追溯到撒但自身的墮落，牠是始作俑者。',
                  '撒但引誘人，使人違背了神的吩咐，吃了不該吃的「分別善惡樹上的果子」，從此罪進入人生命裏面。',
                  '罪敗壞了一個已經造得美好的世界，破壞了地球上原來美好的秩序。',
                  '罪的結果就造成人靈性上的死亡和肉體上的死亡，人因為罪而失去擁有永恆生命的機會。',
                ].map((point, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mt-3">
                神是聖潔的創造主，他必不會去製造罪惡。實際上，當受造物轉離神而朝向別的方向行進，這就是罪，也就是說罪的根源就是背叛神。撒但本身偏行己路、自高自大，這就是罪的開始。所以罪並不是受造物被造成有罪的狀態，罪是受造物扭曲原本神所創造的美好，而成為「違背神原本創造旨意」的另一種狀態。
              </p>
            </div>

            {/* 人體血液的實例 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">人體血液的實例</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經裏神是禁止人喝血的，神說：「因為活物的生命是在血中，我把這血賜給你們，可以在壇上為你們的生命贖罪；因血裏有生命，所以能贖罪。因此我對以色列人說：『你們都不可吃血，寄居在你們中間的外人，也不可吃血……。』」（利未記十七章11至12節）。主耶穌復活升天以後的新約時代，這個不可以喝血的禁戒仍然很清楚地寫在聖經上：「因為聖靈和我們，定意不將別的重擔放在你們身上，惟有幾件事是不可少的，就是禁戒祭偶像的物，和血，並勒死的牲畜，和姦淫。」（使徒行傳十五章28至29節）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經清楚說明「血裏有生命，所以能贖罪」。因此罪既然來到世間，神預備唯一的救贖方法，就是神的獨生子耶穌基督為世人釘在十字架上，祂流血為我們贖罪，使我們因信稱義，罪得赦免。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch5-fig36-blood-cells.jpg" alt="圖36 血液構造" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 36 — 人體血液的構造非常奇妙，上圖左邊的是紅血球，中間的是白血球，右邊的是血小板，它們都有不同的功能和結構。</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                現在讓我們察看這血液的構造：人體內正常的血液中，55% 部分是淡黃色的血漿，專門負責輸送營養、糖份、鹽份、礦物質、荷爾蒙和其他化學物質到人身體內部。另外還有 44% 的部分是紅血球，因為含有血紅素所以是紅色的，它們由骨髓中製造出來在血液中活動，功用是運輸氧到身體各部門去。紅血球被製造出來以後可以生存 120 天，它們環繞身體 172,000 次，是唯一沒有細胞核的細胞。在動脈中因為有大量的氧，所以看起來是鮮紅色，在靜脈裏因為氧的成份很少，所以就變成暗紅色。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                血液中另外少於 1% 的部分是白血球和血小板。白血球有幾種不同的類型，因為它們分別是由骨髓和淋巴腺裏製造出來的。白血球的壽命也因類型不同而有所分別，有的白血球只能生存九小時，有的竟可以存留在身體裏幾年以上，它們的功用都是用來抵抗外來的感染細菌。由於白血球分泌出不同的化學物質，所以人體血液就有 A 型、B 型、AB 型和 O 型等各種血型。除此之外，血小板的功用是幫助傷口血液凝結成塊，它們也可以釋放出某種化學物質攔阻血液從傷口中流失，並且幫助傷口儘快縫合。血小板是由骨髓製造出來的，它們是血液中最小的細胞，壽命一般只有九天。以上這些血液中的細胞對人體健康都非常重要，我們也可以從其中間接看到神創造人類身體的奇妙和偉大。
              </p>
              <p className="text-gray-700 leading-relaxed">
                如果一個人血液系統失調，造成白血球過多，紅血球減少的現象，這人就生病了。那麼這生病是神加出來的嗎？不是。這生病是因為自身系統中某部分失去正常運作，自己衍生出來的狀態。所以罪並不是神所創造出來的產物，罪是受造物自己違背神原本創造原則所產生的結果。很遺憾人類的始祖屈服在撒但試探下跌倒了，以致今天罪惡禍及到所有人類的子孫身上。
              </p>
            </div>

            {/* 分別善惡樹上的果子 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">分別善惡樹上的果子</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                有人完全責怪那「分別善惡樹上的果子」，實際上我們若仔細研究這果子，就知道事情不是那麼單純。希伯來文「分別善惡樹上的果子」並不是一件抽象的東西，也不是一般解經學者解釋的那麼簡單。如果真是如此，神不會說：「那人已經與我們相似，能知道善惡，現在恐怕他伸手又摘生命樹的果子吃，就永遠活著。」（創世記三章22節）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                今天人類發明電腦、電子產品，造成「知識爆炸」的時代。人徒然有許多知識，卻沒有智慧去使用它們，以致一般人都能使用這些產品，連動機不良的人也能使用它們作惡。二十世紀科學家研究出「原子核釋放能量」的原理，進而製造了原子彈，人們卻沒有能力及智慧去控制原子彈引爆所造成的後果。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch5-fig37-world-internet.jpg" alt="圖37 世界地圖與國際網路" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 37 — 二十一世紀人類更邁向電腦的國際網路時代，人們可以借著國際網路和世界許多角落聯絡，但是人沒有辦法徹底控制誰來使用它們。</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                二十一世紀人類更邁向電腦的國際網路（Internet）時代，這國際網路原來在 1969 年的時候，是用來連結軍事電腦統一指揮用的。沒想到國際網路在 1990 年代呈爆炸性的發展，以致有今天這種驚人的使用量。同樣的，罪惡也可以隨著網路侵蝕到世界許多角落去。今天人有知識嗎？人有，但是人沒有智慧。人為什麼沒有智慧？因為人離棄了智慧的源頭神，所以人就沒有智慧。人沒有智慧，都是因為「罪」所帶來的結果。所以人有「知識」卻沒有「智慧」是多麼危險的事，這就好像小孩玩火自焚一樣是人間的大悲劇。
              </p>
              <p className="text-gray-700 leading-relaxed">
                譬如說，當小孩懂事的時候，父親總是告訴他的孩子不可以玩火。父親慎重解釋玩火會造成傷害和生命危險的後果，小孩也答應父親不會去玩火。如果小孩不聽父親的警戒，卻偷偷點火來玩，一下子火勢蔓延，將整個房子燒了，最後連小孩也葬身火窟。在這裏我們可以責怪那火不對嗎？當然不可以，因為火是沒有生命的東西，火不必負道德的責任。同理，那「分別善惡樹上的果子」既然沒有生命，我們當然不應該去責怪它。神已經吩咐人不准吃那果子，人也知道神的警戒，所以神也沒有任何義務要為人的犯罪負責。反而人因為明知故犯，必須要在犯罪的事情上負道德的責任。聖經上說：「敬畏耶和華，是智慧的開端；認識至聖者，便是聰明。」（箴言九章10節）。人只有回到神的面前，人才可能有智慧、聰明和生命。
              </p>
            </div>

            {/* 神宣告審判與救贖 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">神宣告審判與救贖</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                公義又慈愛的神既然是宇宙的創造者，祂為了維持宇宙的秩序，就宣告了審判與救贖，這判決是這樣的：
              </p>
              <div className="space-y-4 ml-2">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">（一）蛇——始作俑者</p>
                  <p className="text-gray-700 leading-relaxed">原來美麗的身體，現在必須用肚子行走，人要痛恨牠，蛇與人要「彼此為仇」。神並且預言：「女人的後裔要傷你的頭，你要傷他的腳跟。」（創世記三章15節）。這預言並非僅是表面的人與蛇相互為敵，而是背後更深的啟示——死亡是因人被撒但引誘而來，所以主耶穌必須被釘死在十字架上，被撒但「傷了腳跟」。但是，主耶穌卻要復活，打傷撒但的頭，完成救贖人類的事工。</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">（二）女子</p>
                  <p className="text-gray-700 leading-relaxed">從此有生育的痛苦，原來與丈夫一體的關係，如今卻降低成被丈夫「管轄」，一直等到主耶穌新約「福音時代」來臨的時候，女子的情況才漸漸改善。</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">（三）男子</p>
                  <p className="text-gray-700 leading-relaxed">既然他違背神的吩咐吃了那樹上的果子，從此不像昔日不必耕種即可得食。如今，地受咒詛，人必須「終身勞苦」而且「汗流滿面才得口」，屬神的榮耀如飛而去，只留下那必死的屬地身體。</p>
                </div>
              </div>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch5-fig38-crucifixion.jpg" alt="圖38 釘十字架" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 38 — 罪既然來到世間，神預備祂唯一的救贖方法，就是神的獨生子耶穌基督為世人釘在十字架上，使人因信稱義，罪得赦免。</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                人現在發現荊棘和蒺藜阻礙他的地產，病痛戕害他的健康。熱力學第二定律進入了人間，衰退腐敗隨之而來，罪的代價就是死亡。然而，地球上空的「水氣層」尚未取去，還能吸收許多有害的宇宙輻射，所以人類那時還是可以維持高壽。特別是在大洪水審判以前，人類在地球上的歲數還可以生存到九百歲左右（創世記五章5至27節），這種現象不僅廣在全球各民族之間傳說，更可以在古巴比倫泥版上得到證實。
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                神在宣告判決之後，祂為亞當和夏娃「用皮子作衣服，給他們穿」（創世記三章21節），神犧牲了動物的生命，來遮蓋人類因罪而帶來的羞恥。這時候，似乎原來的一種天衣或榮耀在犯罪時就沒有了，人必須藉外面的衣物才能遮體；與神的親密團契從此隔離，人必須靠贖罪祭，才能與神和好。
              </p>
            </div>

            {/* 人類開始自相殘殺 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">人類開始自相殘殺</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                人類出了伊甸園，就開始生兒育女。亞當的次子亞伯信靠神，他承認自己的罪，就用頭生的羊作贖罪祭獻給神，因而蒙到神悅納。他哥哥該隱就嫉妒他，竟把亞伯殺了！人類開始仇恨殺人，對象居然是自己的兄弟，罪帶來世間的可怕與不幸，可見一斑。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神審判該隱的謀殺罪說：「你作了什麼事呢？你兄弟的血，有聲音從地裏向我哀告。地開了口，從你手裏接受你兄弟的血，現在你必從這地受咒詛。你種地，地不再給你效力；你必流離飄蕩在地上。」（創世記四章10至12節）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                接著，該隱就被神趕逐離開那地，神又給該隱「立一個記號」，免得亞當其他的後裔遇見他就殺他。從此，該隱放棄了農業生活方式，更又離開了耶和華的面，住在伊甸東邊挪得之地（創世記四章16節）。該隱放棄了神兒子的名份，在外面生兒養女，也開始建造城市。他的後裔又發展畜牧業，製造樂器、銅器、鐵器及各類武器，暴力興起，戰爭擴大，人類開始彼此殘殺與爭戰，連鎖反應竟帶來更大的報復與仇恨，就像該隱的子孫拉麥所說的：「若殺該隱，遭報七倍，殺拉麥，必遭報七十七倍。」（創世記四章24節）。該隱的後裔表面看起來好像是興起了某種人類文明，但是他們的道德每況愈下，罪惡倍加擴張，漸漸蠶食全地。
              </p>
            </div>

            {/* 罪惡充滿全地 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">罪惡充滿全地</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經記載：「當人在世上多起來，又生女兒的時候，神的兒子們看見人的女子美貌，就隨意挑選，娶來為妻。」（創世記六章1至4節）。誰是「神的兒子們」？是天使還是人？實際上，如果我們反覆考查聖經，就會很清楚知道在這裏所謂「神的兒子們」指的是人——他們是亞當兒子塞特的子孫。因為亞伯死後，該隱被逐，亞當和夏娃又生了一個兒子，起名叫塞特（創世記四章25節）。從此塞特繼承了長子名份，成為神的兒子。聖經上也說：「亞當是神的兒子。」（路加福音三章38節）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經裏有什麼證據證明「神的兒子們」確實指的是人呢？根據聖經，我們的理由有下列三點：
              </p>
              <div className="space-y-3 ml-2">
                <div className="flex gap-3">
                  <span className="text-teal-600 font-bold flex-shrink-0">（一）</span>
                  <p className="text-gray-700 leading-relaxed">大衛說：「神的眾子啊，你們要將榮耀能力，歸給耶和華。」（詩篇二十九篇1節），按著聖經這段經文上、下文所指，顯然這是指的是人並不是天使。</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-teal-600 font-bold flex-shrink-0">（二）</span>
                  <p className="text-gray-700 leading-relaxed">天使不娶不嫁（馬太福音二十二章30節），很明顯他們不是用人類繁殖的方法傳宗接代。同時，天使是以火及風為本質，人類是以土為本質，二者既不同種，基因不同，怎能通婚生子？至於聖經上「偉人」二字泛指身材高大的人，只是基因累積，特徵加強，並非另一類新品種。</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-teal-600 font-bold flex-shrink-0">（三）</span>
                  <p className="text-gray-700 leading-relaxed">創世記第五章記錄亞當的家譜，其中只敘述九位嫡傳後代的名字，又提到他們在生下長子後，又「生兒養女」。在這裏，何以神只找到挪亞是義人？塞特深得亞當遺傳（創世記五章3節），在體能與智慧上得天獨厚，其後裔成為英明領袖是可以推理的。從以上三個理由，我們知道因為「神的兒子」塞特子孫也和罪惡聯合，所以更使世間充滿暴力。</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mt-3">
                那時候，「耶和華見人在地上罪惡很大，終日所思想的盡都是惡；耶和華就後悔造人在地上，心中憂傷。耶和華說：『我要將所造的人，和走獸，並昆蟲，以及空中的飛鳥，都從地上除滅，因為我造他們後悔了。』惟有挪亞在耶和華眼前蒙恩」（創世記六章5至8節）。神長久忍耐憐憫慈愛，一再給人悔改的機會，人的犯罪只會更使天父憂傷。試問，哪一位父親不為兒子墮落而傷心呢？神嘆息人類的敗壞，他也讓挪亞「傳義道」（彼得後書二章5節），叫人悔改。在挽回人類歸向神的事情上，神作了最大的努力，一再寬容忍耐。然而，人偏行己路悖逆到底，讓天父徹底失望了。
              </p>
            </div>

            {/* 惟義人因信得生 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">惟義人因信得生</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                大洪水之前，聖經裏提到兩位義人，一位是以諾，一位是挪亞。以諾與主同行三百年，神就將他取去，使他不必見死，就可以直接到神的國度（創世記五章24節）。聖經裏後來提到類似提昇的例子，只有發生在先知以利亞身上（列王記下二章11節）。這些都是末後大審判，基督徒「一同被提到雲裏，在空中與主相遇」的預表（帖撒羅尼迦前書四章17節）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                至於挪亞，聖經裏也記載他是位義人，在當時的世代他是位完全人，挪亞「與神同行」（創世記六章9節）。就在挪亞那個世代，「神觀看世界，見是敗壞了，凡有血氣的人，在地上都敗壞了行為」（創世記六章12節）整個世界無藥可救，於是大洪水的審判近了。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch5-fig39-grape-leaves.jpg" alt="圖39 葡萄葉" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 39 — 那時好像夏天的果子被收盡，又像葡萄已被摘下，沒有一串可吃的。世間虔誠人少，正直人不再有，卻只有那義人要專心仰望耶和華。</p>
              </div>
              <div className="bg-teal-50 border-l-4 border-teal-400 p-4 rounded-r-lg my-4">
                <p className="text-gray-700 leading-relaxed italic">
                  義人的口談論智慧，他的舌頭講述公平，<br />
                  神的律法在他心裏，他的腳總不滑跌。<br />
                  完全人的言語純淨，他的心等候神，<br />
                  神要保守他脫離兇惡，他要尋求神的面。
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                是的，每當世風日下、人慾橫流、道德腐化、人心趨惡，整個世界沉淪的時候，就是那守望者降罰審判的日子。世間虔誠人少，正直人不再有，卻只有那義人要專心仰望耶和華，要專心等候那救他的神；他的神必應允他，他雖坐在黑暗裏，耶和華必作他的光。是的，耶和華必不撇他在惡人手裏，當審判的時候，也不定他的罪。朋友，你要細察那完全人，觀看那正直人，因為和平人有好結局。
              </p>
            </div>

          </div>
        )}
      </div>

      {/* 重點總結 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
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
                '人原本可以不死，有伊甸園生命樹的果子就可以永遠活著；複製羊Dolly的實驗說明神可以用一根肋骨造出夏娃，罪由具備XY完整染色體的亞當犯罪而入。',
                '撒但是在引誘人吃禁果時才背叛神的，三個聖經證據顯示：牠曾在伊甸園美麗榮耀、曾有資格進出伊甸園、主耶穌說牠「從起初是殺人的」。',
                '罪的本質是受造物轉離神、扭曲神原本創造的美好；罪不是神造的，是受造物用自由意志違背神所產生的結果。',
                '「血裏有生命，所以能贖罪」——人體血液構造精密奇妙（血漿55%、紅血球44%、白血球與血小板1%），正是神創造人類身體偉大的明證，也指向耶穌流血救贖的奧秘。',
                '人有知識卻沒有智慧是危險的；敬畏耶和華才是智慧的開端，人只有回到神的面前，才能得到真正的智慧、聰明和生命。',
                '神審判罪的同時也預備救贖：女人的後裔要傷蛇的頭（耶穌復活打敗撒但），義人以諾被提、挪亞與神同行得救，都是末後救贖的預表。',
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
              <h4 className="font-semibold text-gray-800 mb-2">複製技術與人的尊嚴</h4>
              <p className="text-gray-700 leading-relaxed">1997 年複製羊 Dolly 震驚全球，隨後席德（Seed）宣稱要複製人類，引發全球立法禁止。這引出深層問題：科學技術可以複製生命的形態，卻無法複製神所賦予的靈。複製人若成真，其靈魂歸屬何處？這恰恰說明人不只是生物機器，而是有神的形象、有靈的受造物，其尊嚴來源於神而非基因序列。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">罪的起源與自由意志的奧秘</h4>
              <p className="text-gray-700 leading-relaxed">神為何賦予受造物「自由意志」而允許罪的進入？神所要的不是程式設定的機器人，而是能自由選擇愛祂的兒女。正如父母在知道孩子可能犯錯的情況下仍生育撫養，神創造人類也是出於愛，甘願承擔罪所帶來的代價——以獨生子耶穌的生命為代價，完成救贖。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">知識與智慧的聖經神學</h4>
              <p className="text-gray-700 leading-relaxed">「分別善惡樹」所帶來的是知識（knowing good and evil），而非智慧。智慧的希伯來文（חָכְמָה, chokmah）是指能正確使用知識的能力，其根基是「敬畏耶和華」（箴言九章10節）。現代人的危機正是：知識以指數倍增（網路、AI、核技術），但離開神的智慧卻使人類面臨自我毀滅的危險——原子彈、生化武器、深度偽造（deepfake）都是有知識無智慧的明證。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">義人以諾的「被提」與末世論</h4>
              <p className="text-gray-700 leading-relaxed">以諾「與神同行，神將他取去」（創世記五章24節）是舊約中唯一未經死亡直接進入神面前的記錄（以利亞是另一例）。使徒保羅在帖撒羅尼迦前書四章17節描述的「被提」（Rapture）正是以此為預表。在道德極度敗壞的挪亞時代，神先「取去」以諾，再藉洪水審判全地——這提示末世的順序：義人被提，審判隨後。</p>
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
            {[
              '你認為罪的根源是什麼？是「環境」讓人犯罪，還是人心本身的問題？你自己的生命經歷如何印證這一點？',
              '撒但的策略是「說謊讓人覺得不一定死」。今天你生活中有哪些「謊言」讓你覺得某些罪不會帶來後果？',
              '神賦予人類「自由意志」，知道人可能犯罪還是創造了人。這對你理解神的愛有什麼意義？',
              '人有知識卻沒有智慧——你在自己的工作或生活中是否也面對這樣的張力？在哪些領域你感到「我有知識，但我需要從神來的智慧」？',
              '以諾「與神同行三百年」被提，挪亞「與神同行」得救。「與神同行」對你而言具體是什麼意思？你的日常生活中有哪些實踐？',
              '該隱殺亞伯後，神給了他公正的審判，同時也給了他記號保護他的生命。這對你如何看待神的公義與慈愛有何啟示？',
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 認識罪的本質——每日罪的省察</h4>
              <p className="text-gray-700 mb-2">罪是「轉離神、違背神原本創造旨意」的狀態。每晚睡前花五分鐘回顧：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>今天有哪些行為是出於自我中心而非愛神愛人？</li>
                <li>有哪些「謊言」讓我以為某件事不算罪或沒有後果？</li>
                <li>用耶穌的寶血向神認罪，接受赦免，重新得力。</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 操練「敬畏耶和華的智慧」</h4>
              <p className="text-gray-700 mb-2">本章強調「人有知識無智慧」的危險。嘗試以下操練：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>每週選一個重要決定（工作、關係、財務），先閱讀相關聖經章節再行動。</li>
                <li>讀箴言一章到九章，記錄「智慧」在其中的特徵。</li>
                <li>問自己：「這個決定我是在敬畏神的心中做的，還是僅憑自己的知識判斷？」</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 學習「與神同行」——以諾與挪亞的功課</h4>
              <p className="text-gray-700 mb-2">以諾在道德敗壞的世代仍與神同行三百年。本週嘗試：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>每天定一個固定時間安靜在神面前（哪怕只有十分鐘）。</li>
                <li>在面對誘惑或壓力時，默想「我現在是在神面前行事」。</li>
                <li>找一位可以彼此提醒、互相守望的信仰夥伴。</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 禱告</h4>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-gray-700 leading-relaxed italic text-sm">
                  「天父，感謝祢的救贖計劃早在創世之前就預備好了。我承認罪的根源在於我自己轉離了祢，求祢赦免我一切已知和未知的罪。求祢賜我敬畏祢的心，使我得著真正的智慧。幫助我每天與祢同行，無論世界多麼敗壞，讓我像挪亞一樣，在祢眼前蒙恩。奉主耶穌的名禱告，阿們。」
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
