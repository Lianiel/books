import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Compass, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book31Ch10() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    exploration: true,
    questions: true,
    practice: true,
  });
  const toggle = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">第十章</h1>
        <h2 className="text-xl font-semibold text-gray-700">各民族遷徙全地</h2>
        <p className="text-sm text-gray-500 mt-1">書頁 235–256</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-teal-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <div>
              <h3 className="text-lg font-bold text-teal-700 mb-3">人類三大種族起源</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                神在大洪水以後賜福給挪亞和他的兒子們，對他們說：「你們要生養眾多，在地上昌盛繁茂。」（創世記九章7節）。於是人類又開始在地面上生養眾多，興盛起來。大洪水已經把全世界原來存活的人類都消滅了，只留下挪亞一家八口。挪亞的三個兒子——閃、含、雅弗和他們各人的妻子就成為現在世界人類的相先。至於為什麼今天世界上各民族應該是「四海之內皆兄弟」的和平世界，為什麼竟造成種族歧視、戰亂不斷、彼此不睦的社會呢？
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                實際上，人們往往只看到表面上的差異，卻忽視人類各種族都有許多相同之處：
              </p>
              <ul className="list-none space-y-2 mb-3 ml-2">
                {[
                  '所有種族的身體構造都是一樣的，只有男性與女性、身高和體重的差別。',
                  '所有種族都有良心，這「是非之心」都在他們的思想裏面發生作用。',
                  '所有種族都有宗教的觀念，只是有的敬拜　神，有的敬拜錯誤的對象。',
                  '所有種族都有自己起源的故事，只是有的是正確，有的在傳說中失去了原來本質。',
                  '所有種族都有人性墮落罪惡的一面，若不是靠著主耶穌基督寶血的救贖，沒有一個人可以得救。',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold flex-shrink-0">（{['一','二','三','四','五'][i]}）</span>
                    <p className="text-gray-700">{item}</p>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 leading-relaxed">
                在聖靈感動下，我們可以舉出更多的實例來，這些都證明人類各個種族確實來自一個家庭。至於為什麼今天的人類會有許多膚色、相貌、外表的差異，請不要忘記閃、含、雅弗各人的妻子是有不同的遺傳基因、特徵和性格的，他們的後代子孫也因此塑造了今天人類各種族的外貌特徵。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-teal-700 mb-3">各種因素影響人的外表特徵</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                除了遺傳以外，人類在各地各族裏因為食物、氣候、環境品質、生活習慣而產生不同的外表特徵。一個人若從小喜歡在太陽下工作、運動，平常又吃大量的肉食，他的身體自然就會變得又黑又壯。一個人若不喜歡戶外活動，又在靠近赤道附近地區不容易照到太陽，他自己又不喜歡吃肉類的東西，平常食量又小，久而久之他的身高、體重自然就和同種族的人有所差別。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                另外，具有同一種外表特徵的人彼此通婚，也會使得下一代的特徵加強。特別是挪亞後裔三大種族，自從遊徙分散後，各支派本族通婚，使得遺傳特徵更為顯著，再加上地理隔絕的因素，更成為今天顯著的種族差異。除此之外，各民族本身所發展的歷史文化、風俗習慣、政治經濟等因素，這些都逐漸形成今天世界上種族差異和種族歧視的主要原因。實際上，這種種族歧視的心理狀態是根本錯誤的。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch10-fig96-chromosome.jpg" alt="圖96 染色體遺傳圖解" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖96 — 人體內每個細胞核含有23對染色體，每個染色體內有幾百個基因，基因控制遺傳的特色，父親的XY型染色體會決定孩子的性別。</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-teal-700 mb-3">閃族後裔最初分佈區域</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                不論人類學家再怎麼區分世界的各個種族，基本上地球的種族是由黃種人、黑種人和白種人所組成的。至於褐色人種及其他顏色的人種，都是由前述這三大種族通婚生子所造成的結果。有的學者受到進化論及種族歧視的影響，故意把人類分成各自不同的「原始種別」，這些都是沒有根據的臆測而已。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                閃有五個兒子，他們分別是：以攔（住波斯灣美索布達米亞兩河流域以東的區域）、亞述（是亞述帝國的祖先）、亞法撒、路德（住土耳其南部附近）、亞蘭。其中，亞蘭的兒子烏斯、戶勒、基帖、瑪施住在幼發拉底河到今天大馬色的區域。閃的兒子法勒，希伯來文「פֶּלֶג」的意思是「分離」，主要是要讓人聯想到人類在他身上藉語言的分裂。約坦的後裔多半住在沙烏地阿拉伯半島附近，他的兒子們有亞摩達、沙列、哈薩瑪非等，住在以尋和耶和華山之間的地帶（創世記十章26至29節）。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch10-fig97-initial-distribution.jpg" alt="圖97 三大種族最初分佈地圖" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖97 — 大洪水審判以後，紅色圓點為閃族後裔最初分佈區域，紫色圓點為含族後裔最初分佈區域，藍色圓點為雅弗族後裔最初分佈區域。</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-teal-700 mb-3">含族後裔最初分佈區域</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                挪亞另一個兒子含有四個兒子，他們分別是古實（其後裔由巴比倫遷徙到非洲衣索匹亞附近）、麥西（住埃及及鄰近區域）、弗（住非洲利比亞區域）、迦南（原巴勒斯坦迦南人的祖先）。其中，古實的兒子寧錄是掌權的首領，聖經記載他是「世上英雄之首」，他在耶和華面前是個英勇的獵戶。寧錄後來就是興建巴別塔，他的國起頭是巴別、以力、亞甲、甲尼，都在示拿地（創世記十章8至10節）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                麥西生路低人、亞納米人、利哈比人、帕斯路希人（非利士人是其後裔）。迦南生長子西頓，又生赫，以及耶布斯人、亞摩利人、革迦撒人。含族希伯來文是「חָם」，意思是「黑色」，有膚色較黑的含意。由以上的歷史文獻，我們可以看出含族最初是由閃族所在的中東地區向非洲地區發展。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-teal-700 mb-3">雅弗族後裔最初分佈區域</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                挪亞的兒子雅弗也有七個兒子，他們分別是歌篾（住黑海以北）、瑪各（住裏海以西）、瑪代（住裏海南部）、雅完（住希臘地區）、土巴（住黑海東南附近）、米設（住安那海沿岸）、提拉（住愛琴海沿岸）。雅完的三個兒子是以利沙、他施和基提人（基提人住在今日的塞浦路斯島），多年人住小亞細亞，都是古羅德斯島 Rhodes 附近。雅弗希伯來文是「יֶפֶת」，意思是「美麗」，有膚色較白的含意。由以上的歷史文獻，我們可以看出雅弗族最初是向歐洲方向擴展。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch10-fig98-rhodes.jpg" alt="圖98 羅德斯島古城堡" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖98 — 雅弗兒子多迦的後裔曾住在羅德斯島 Rhodes 上，在早期十字軍東征的歷史畫面，羅德斯島是十字軍集合乘船前往聖地的重要據點。</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-teal-700 mb-3">挪亞對三大種族的預言</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                前面我們分析出來挪亞後裔最初分佈的區域，但是各種族的發展方向和特性是怎麼由來的呢？原來在大洪水以後，挪亞作起農業，栽了葡萄園。氣候的改變，使得葡萄汁發酵成酒，挪亞可能沒有經驗，喝多就醉了。那時迦南的父親含看見他父親赤身，就到外面告訴他兩個兄弟。挪亞醒了以後，知道小兒子向他所作的事，就說：「迦南當受咒詛，必給他弟兄作奴僕的奴僕。」又說：「耶和華閃的　神是應當稱頌的，願迦南作閃的奴僕。　神使雅弗擴張，使他住在閃的帳棚裏，又願迦南作雅弗的奴僕。」（創世記九章22至27節）。這段經文，就是大洪水審判以後人類三大種族發展方向和特性的寫照。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在人類的早期歷史時期間，屬於含族的腓尼基人、迦太基人、埃及人都曾臣服於閃族建立的亞述帝國。亞述帝國之後，巴比倫帝國和羅馬帝國也逐漸強大起來，希臘人和羅馬人先後都曾佔領了含族的領土——西頓、腓尼基、迦南之地、埃及及等地。羅馬人更又覆滅了強大的迦太基，含族的後裔就淪為雅弗族的奴僕，挪亞的預言一直持續在人類歷史中應驗。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                前述挪亞所說的「願　神使雅弗擴張，使他住在閃的帳棚裏，又願迦南作他的奴僕」，這段經文從十七世紀到二十世紀初期特別明顯。自從歐洲的雅弗族——西班牙、葡萄牙、英國、荷蘭、法國等等國家發展航海強權以來，他們分別又在閃族所在之地美洲、亞洲、澳洲建立起殖民地政權。這種現象一直維持到第一次及第二次世界大戰以後，雅弗族才陸續離開東南亞、南美、南洋、印度、非洲、阿拉伯等地區，結束他們「住在閃的帳棚裏」之時代，使當地種族各自獨立。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch10-fig99-ruins.jpg" alt="圖99 希臘羅馬廢墟" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖99 — 希臘和羅馬文明曾經相當影響歐美文化發展的方向，這是馬其頓腓立比城的廢墟，使徒保羅曾經在這裏傳福音，並使禁卒全家信主。</p>
              </div>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch10-fig100-stadium.jpg" alt="圖100 1996香港大球場佈道大會" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖100 — 在　神恩典下，1996年12月7日及8日我們在香港大球場舉行佈道大會，以「明日的希望」為主題，為香港的未來求　神賜福。</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                十七世紀到十九世紀還有一件毫無人道的事件就是販賣黑奴。大批含族的後裔從非洲運到美洲販賣為奴（這裡包括加勒比海 Caribbean 及巴西等地），這種現象一直到美國林肯當政時期才宣告結束。這也是「含族作雅弗族的奴僕」不幸的應驗。好在這種沒有人類知名的人口買賣行為，最後經由基督教立法制度才阻止了——　神的恩典從未離開。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-teal-700 mb-3">神變亂各民族口音</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                我很難讓懂人類學家的一個問題就是世界上不同言語的系統——今天地球上大約有四千到五千種不同的言語，光是在印度一個區域就有845種以上的言語。但是當我在學習一些言語、文字的時候，我發現這些言語似乎都有其共通性，不論這些言語是用字母拼音系統（譬如印歐語系、希伯來文、亞蘭文及希臘文），有的是用象形造字原理（譬如我們的漢文），好像他們的靈魂上都是出自同一種來源。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                原來在大洪水審判之後，最初天下的言語都是一樣的。但是人類自大洪水以後在巴比倫的區域，建造一座城和一座塔，塔頂要通天，以免人類分散在全地（創世記十一章4節）。在這段經文裡，我認為並不是人類的科技工程得罪了　神，而是人類誣稱　神造城、造塔是「使人分離」的機械使然。神變亂口音使人分散在全地，以免人類藉此名城「人本主義」及「世界政府主義」都在重複這樣「巴別塔」的老路。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經創世記第十一章記載——耶和華說：「看哪！他們成為一樣的人民，都是一樣的言語，如今既作起這事來，以後他們所要作的事，就沒有不成就的了。我們下去，在那裏變亂他們的口音，使他們的言語彼此不通。」於是耶和華使他們從那裏分散在全地上，他們就停工不造那城了。因為耶和華在那裏變亂天下人的言語，使眾人分散在全地上，所以那城名叫巴別（就是變亂的意思）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                巴別塔在歷史上有沒有遺蹟呢？有！考古學家在巴比倫倫宇及塔廟之北，發現一夜諸神將眾人所建的塔廟毀壞，使其言語不通，阻礙進步。寧錄把巴別、以力、亞甲、甲尼拼入巴比倫，成為史上第一個帝國，又建立尼尼微及其他大城（創世記十章10至12節）。寧錄所掌控的巴比倫城因為充滿罪惡，在亞伯拉罕的時代為　神降硫磺與火將之全部覆滅。
              </p>
              <p className="text-gray-700 leading-relaxed">
                歷史傳聞，巴別塔有多層，各層由下而上逐漸縮減，成為四方形角錐體，後來民族四散，一些含族的後裔遷徙到埃及及努比亞，便帶去了巴別塔的樣式，建設了著名的埃及金字塔。另外中南美洲的馬雅文明 Mayas、鐵比華拉文明 Teotihuacan、圖塔卡文明 Toltecs 等等，也在美洲建立許多類似金字塔的建築物，這些建築物都具有某種宗教的用途。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-teal-700 mb-3">三大種族後裔遷徙全地概況</h3>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch10-fig101-civilizations.jpg" alt="圖101 大洪水以後世界著名古文明地圖" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖101 — 橫色部分為大洪水以後世界著名的古文明，從右至左為黃河長江文明、印德斯河文明、兩河流域文明、尼羅河文明、中南美古文明。</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                <span className="font-semibold text-teal-700">閃族後裔遷徙全地概況：</span>我比較地球上大洪水以後初步的古代文明，無論是波斯灣美索布達米亞 Mesopotamia 兩河流域文明、埃及尼羅河文明、印度西北部的印德斯河 Indus 文明、中華民族的黃河長江流域文明、中南美的印地安古文明，他們無論在農業生產、銅鐵製造、商業行為、社會體系上都有其共通性，確實是來自於同一源頭——挪亞的後裔。原來在　神變亂天下口音之後，閃的後裔除留在美索布達米亞兩河流域的人以外（包括希伯來人的祖先），許多部族由巴比倫向東南分散，這裏包括亞述人、古代以攔人、阿拉伯人。其中有幾支順著波斯灣沿岸南到達印度以及中南半島，更有沿著今天海峽大陸橋，由亞洲抵達美洲，成為美洲古代印地安人的祖先。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                在閃族後裔中，也有許多部族向東方遷徙，翻越山嶺穿過來，沿著長江流域而成為中華民族的祖先。有的部族又繼續向東南行，順著台灣海峽遷移，定居在印尼群島及澳洲等地。閃族後裔的文化實在多彩多姿，武功也很強盛，所以後來也向歐洲地區發展。閃族之一，成吉思汗 Genghis Khan 及其後裔曾經在主後第十三世紀建立世界上有史以來最大的帝國——版圖東至太平洋、南至印度洋、西至地中海、北至莫斯科北部。另外，猶太人被迫遷居到中國大陸，有些人已與中華民族同化，希伯來人一直到第二次世界大戰以後　神才成全他們於1948年在巴勒斯坦重新建立國家。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <span className="font-semibold text-teal-700">含族後裔遷徙全地概況：</span>　神變亂天下口音之後，含族後裔大多向西南方向遷徙，除留在迦南之地的部族以外，大多數的人遷徙到非洲大陸去定居。埃及及昔日被稱為「含地」，又被稱為「麥西」，這些都是含族後裔建設的結果。含族這些後裔逐漸佔據了非洲大陸的大部分的區域，成為今天非洲黑種人的祖先。在人類歷史裏面，近十多年以來，含族經常不幸被征服者販賣到非洲以外的地區去。當我到土耳其的時候，發現當日鄂圖曼帝國 Ottoman 宮殿裏的奴隸就以非洲含族為主要來源。人口買賣的事件後來越來越嚴重，估計從1701到1810年之間，就有將近七百五十萬含族從非洲運到美洲去，有超過一百萬人不幸死亡途中。好在這種沒有人類知名的人口買賣行為，最後經由基督教立法制度才阻止了。這也是「含族作雅弗族的奴僕」不幸的應驗。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <span className="font-semibold text-teal-700">雅弗族後裔遷徙全地概況：</span>「巴別塔」事件之後，雅弗族的後裔主要是向西北方向遷徙，有些部族就延著地中海到達西歐及英國地區居住，另外有些部族就延著黑海和裏海之間以北抵達北歐及俄國地區定居。根據聖經上的記載，雅弗族就是今天歐洲白種人的祖先。在人類歷史裏面，雅弗族後裔經常在地中海附近來來往往遷徙，特別是自從雅弗族羅馬人離棄自己的宗教之後，居住在義大利的羅馬人把自己的語言拉丁文就成為義大利文；在法蘭西的混合言語也就成為法文；在英國因為早期英格蘭人的緣故，所以英文並沒有和拉丁文混合，這就是為什麼英文和其他歐洲語系不太相同的主要原因。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                主後1096年開始的幾次十字軍東征，也造成全歐洲雅弗族男子的大遷徙，雖然十字軍東征最後在十三世紀結束，但是由於參與的人各有志心、又有不良份子趁機取利，最後聖城耶路撒冷仍然落入阿拉伯人手中，一直到1918年才被雅弗族英國人佔領，最後歸回閃族希伯來人保管。經由十三世紀馬可波羅 Marco Polo 引進中華民族的指南針，雅弗族才開始大規模的朝向大西洋海運發展。十七世紀到十九世紀，許多雅弗族後裔從歐洲移民至南非、澳洲、紐蘭及其他許多地區。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch10-fig102-migration-2.jpg" alt="圖102 三大種族後裔遷徙全地方向圖（西半球）" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖102 — 大洪水審判以後，三大種族後裔向全地遷徙（西半球視角）。</p>
              </div>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch10-fig102-migration.jpg" alt="圖102 三大種族後裔遷徙全地方向圖" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖102 — 大洪水審判以後，紅色箭頭為閃族後裔遷徙全地的方向，紫色為含族後裔遷徙全地的方向，藍色箭頭為雅弗族後裔遷徙全地的方向。</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-teal-700 mb-3">挪亞後裔近代遍滿世界</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                大洪水審判以後，挪亞的後裔不斷的向全地遷徙。特別是在近代的電子資訊時代，人類各民族可以藉著各種快速的交通工具在陸上、海上、空中自由旅行。閃族、含族、雅弗族的後裔在許多地方也都比鄰而居。　神對挪亞和他兒子們的囑咐：「你們要生養眾多，遍滿了地。」（創世記一章1節）。如果挪亞的後裔都能靠主耶穌基督的愛，彼此在主裏合一，那將是多麼美好的事！就好像挪亞的三個兒子在大洪水時同在方舟裏面，或許他們曾一同唱歌：
              </p>
              <div className="bg-teal-50 rounded-lg p-5 my-4 border border-teal-100">
                <h4 className="text-center font-bold text-teal-800 mb-4">和樂歌</h4>
                <div className="space-y-4 text-center text-gray-700 leading-loose">
                  <p>我們是一家人，彼此生活在一起，<br />都是同一血源，來自同一位祖先，<br />都是主所創造，全是基督的恩典，<br />洗淨原本罪惡，都成為新造的人。</p>
                  <p>弟兄和睦同居，那是何等的美好，<br />好比貴重的油，滴在我們的頭上，<br />好比天上甘露，降在上帝的山上，<br />那是所定的福，就是永遠的生命。</p>
                  <p>我們是一家人，彼此生活在一起，<br />都是同一血源，來自同一位祖先，<br />都是主所創造，全是基督的恩典，<br />洗淨原本罪惡，都成為新造的人。</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                我們也可以觀察到沙烏地阿拉伯半島共同居住的閃族和含族有的彼此通婚，他們的後裔逐漸成為褐色種族，也向不同的方向遷徙。另外，居住在小亞細亞的閃族和雅弗族通婚，他們的後裔也逐漸發展成不同的種族，這就是為什麼今天世界上的種族有這麼多的特色。
              </p>
            </div>

            <div className="mt-4 p-4 bg-teal-50 rounded-lg border border-teal-200">
              <p className="text-center text-gray-700 leading-relaxed italic">
                那天使對他們說：「不要懼怕！我報給你們大喜的信息，是關乎萬民的；因今天在大衛的城裏，為你們生了救主，就是主基督。」
              </p>
              <p className="text-right text-sm text-teal-600 mt-2 font-medium">—— 路加福音二章10至11節 ——</p>
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
            <ul className="space-y-3">
              {[
                '人類三大種族（黃、黑、白）同源於挪亞三個兒子——閃、含、雅弗，種族外表差異是環境、飲食、氣候與通婚的結果，並非本質不同。',
                '挪亞的預言（創世記九章25-27節）在歷史中精準應驗：含族後裔曾被雅弗族（希臘、羅馬、歐洲列強）統治，閃族後裔承受神的特別祝福，雅弗族後裔向全地擴張。',
                '巴別塔事件（創世記十一章）導致言語變亂與人類分散，考古學在巴比倫地區發現相關遺址，全球各地類似金字塔的建築物也反映了這一共同源頭。',
                '世界主要古文明（兩河流域、尼羅河、印度河、黃河長江、中南美洲）都源自挪亞後裔，在農業、金屬、商業上有驚人共通性，證明人類同宗。',
                '三大種族後裔各有遷徙路線：閃族向東亞及美洲印地安；含族向非洲，17-19世紀近750萬人被販賣為奴；雅弗族向歐洲並在近代殖民擴張。',
                '神的旨意必定成就——「你們要生養眾多，遍滿了地」已在人類全球遷徙的歷史中完全實現，如今各民族若在基督裏合一，正是神美好心意的終極彰顯。',
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
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">染色體研究與聖經的一致性</h4>
              <p className="text-gray-700 leading-relaxed">
                現代遺傳學透過粒線體 DNA（母系遺傳）和 Y 染色體（父系遺傳）的追蹤，發現全人類確實可以追溯到極少數共同祖先。科學界稱這位共同母系祖先為「線粒體夏娃」，父系祖先為「Y 染色體亞當」。雖然學界對時間有爭議，但人類同源這一事實，與聖經中「全人類源自挪亞一家」的記載高度吻合。種族並非本質性的物種差異，而是同一人種在不同環境中適應性發展的結果。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">挪亞的咒詛與祝福：預言還是人類自選的道路？</h4>
              <p className="text-gray-700 leading-relaxed">
                有人誤解「含族作雅弗族的奴僕」是神許可種族奴隸制的依據，這是嚴重的誤讀。挪亞的話是預言性的觀察，而非道德命令——含族的後裔因其先祖在父親困難時落井下石、不敬重父母的罪的傾向，而容易走向不蒙神祝福的路。歷史的應驗是人類自選罪惡道路的後果，而非神認可剝削。基督的救贖打破了一切「屬肉體的咒詛」，在新約中「並不分猶太人、希臘人，並不分為奴的、自主的」（加拉太書三章28節）。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">巴別塔與全球金字塔現象</h4>
              <p className="text-gray-700 leading-relaxed">
                考古學在巴比倫地區發現的「金字神塔」（Ziggurat）遺址，如烏爾的「月神塔」，與聖經中巴別塔的描述驚人吻合——多層台階式建築、塔頂祭壇、通天之意象。值得注意的是，相似的金字塔型建築出現在全球：埃及（法老金字塔）、墨西哥（馬雅金字塔）、南美洲（秘魯印加建築）、東南亞（吳哥窟式廟宇）。這種全球性的建築「記憶」，與聖經所說人類從巴別塔散開的說法高度一致，暗示各民族的宗教建築傳統有共同起源。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">閃族後裔在亞洲的足跡：聖經與中國文化的連結</h4>
              <p className="text-gray-700 leading-relaxed">
                許多學者注意到中國古代文字中，有多個漢字似乎隱藏著創世記的記憶。例如「船」字包含「八口人」（挪亞方舟八人），「義」字（羔羊下面加我），以及「禁」字（兩棵樹加「示」）等，暗示中華文化的早期先民可能也曾接觸過洪水前的神學傳統。雖然這仍是學術討論議題，但閃族後裔向東亞遷徙，帶去共同的文化記憶，是本章提供給我們深思的方向。
              </p>
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
              '聖經說所有種族都有良心、宗教觀念和共同的起源故事。這個觀點如何幫助你看待不同族裔或文化的人？你曾有過哪些帶著文化偏見的眼光需要更新？',
              '挪亞對三個兒子的預言在歷史中都應驗了。這對你理解「神在歷史中掌權」有什麼啟發？你有沒有在個人生命中見過類似的「預言應驗」？',
              '巴別塔的人類想「為自己立名」，神卻使他們分散。今天你生命中有哪些地方是在「為自己立名」而不是榮耀神？這讓你有什麼感想？',
              '17-19世紀黑奴貿易是人類歷史上極大的不義，而基督教最終在廢除奴隸制中扮演了重要角色。福音對社會公義有什麼責任？你個人如何在日常生活中回應不公義？',
              '本章結尾的「和樂歌」說「我們是一家人，來自同一位祖先」。在你的生活圈子中，你與哪些不同文化背景的人有接觸？你如何在實際生活中體現「四海之內皆兄弟」？',
              '神命令人類「生養眾多，遍滿了地」，這個使命在歷史中透過各種方式（甚至包括苦難和流亡）而成就。你如何理解神的旨意會透過複雜甚至痛苦的歷史過程來實現？',
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
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🌍 打破種族偏見的具體行動</h4>
              <p className="text-gray-700 mb-2">「四海之內皆兄弟」不只是知識，需要主動踏出第一步。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>本週主動向一位不同文化背景的人微笑打招呼或分享食物。</li>
                <li>閱讀或觀看一部關於你不熟悉的族裔文化的書籍或紀錄片。</li>
                <li>若你曾有過種族偏見的言語或態度，在禱告中認罪，並求神更新你的眼光。</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 以聖經來理解歷史</h4>
              <p className="text-gray-700 mb-2">歷史不是偶然的，是神旨意展開的畫卷。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>閱讀創世記九章20-27節（挪亞的預言）及十一章1-9節（巴別塔），以本章為解說框架重新默想。</li>
                <li>找一份世界民族遷徙地圖（或搜尋「挪亞後裔分佈圖」），對照本章描述加深印象。</li>
                <li>記錄一件你在歷史或新聞中看到的「神旨意成就」的事例，分享給家人或小組。</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 為全球各族禱告</h4>
              <p className="text-gray-700 mb-2">既然萬族同源，也當同擔福音的使命。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>選擇一個你鮮少代禱的國家或族群（可使用《普世代禱手冊》或 Operation World 等工具），每天為他們禱告一週。</li>
                <li>了解你所在的城市或社區有哪些外籍人士，思考教會是否有接待他們的事工。</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 本章禱告詞</h4>
              <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                <p className="text-gray-700 leading-relaxed italic">
                  「親愛的天父，感謝祢創造了如此豐富多元的人類大家庭，閃、含、雅弗的後裔都是我們的弟兄姊妹。求祢除去我心中隱藏的種族偏見和文化驕傲，讓我能夠真正用祢的眼光看待每一個人——他們都是祢所愛、基督所捨命拯救的。求祢也讓各民族在這個世代都能聽見福音，使所有人都能歸入那大家庭，一起在祢的愛裏合而為一。奉耶穌基督的名禱告，阿們。」
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
