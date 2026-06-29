import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Compass, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book31Ch7() {
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
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">第七章</h1>
        <h2 className="text-xl font-semibold text-gray-700">探尋挪亞的方舟</h2>
        <p className="text-sm text-gray-500 mt-2">書頁 149–182</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-teal-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            {/* 全世界有關方舟的傳說 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">全世界有關方舟的傳說</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                古代全世界有將近兩百個以上關於大洪水和方舟的傳說，有的因為開始時沒有用文字記載下來，所以在口傳過程中造成很多的出入。巴比倫歷史書曾經提到「洪水」和「大船」，甚至連這些有關洪水和大船的事件竟和聖經裏的記載十分相似。埃及及的歷史也記載著大洪水使世人被淹沒，只有幾個人最後到高山上得救的故事。希臘的史料中曾經提到地上的罪惡太多，所以大洪水淹沒了世界，最後方舟停在山上。印度記載一位義人造了一隻船在大洪水氾濫時存活下來。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                美洲的印地安人有一百多族，幾乎每一族都有傳說人漂流在大洪水中，最後船停在高山上才得救的故事。居住在「科羅拉多高原」上的印地安人還傳說大峽谷是大洪水造成的結果。夏威夷的原住民傳說由於世界上充滿罪惡，只有一位義人帶著他的全家和動物藉著船在大洪水中存活下來。墨西哥古代瑪雅地卡印地安人 Toltec Indians 的史料記載：第一個人類的世界維持了 1,716 年，但是大洪水來淹沒了最高的山，只有少數人藉著「封閉的大箱子」Topltipetlocali 生存下來。大洪水後，人生養眾多又造了「高大的塔」Zacuali，但是言語變亂，不同言語的人就分散各地居住。
              </p>
              <p className="text-gray-700 leading-relaxed">
                中華民族使用的是象形文字，當倉頡造字的時候特意用「船」這個字紀念挪亞方舟的歷史事件。譬如「船」這個字，左邊是「方舟」，右邊是「八口」，意思是那一家八個人搭乘在方舟上就是「船」的開始。另外還有組成漢語的「泛」字，這個字還是「水」，右邊仍舊是「八口」，影射人類僅存的八個人在大洪水中存活下來。在本書第六章我曾討論過大洪水審判末期，大量的水由陸地退到海谷盆地的情形。從中國大陸的地形分析來說，大洪水水位消退時，有可能造成圖65（見左圖）這種在中國廣西壯族自治區桂林山水的奇景。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch7-fig65-guilin.jpg" alt="圖65 桂林山水" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 65 — 有多少人在欣賞「桂林山水甲天下」的良辰美景時，思想到此地非常可能是　神用來證明大洪水曾經淹沒過全世界，藉此鞭策我們的。</p>
              </div>
            </div>

            {/* 方舟停在亞拉臘山上 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">方舟停在亞拉臘山上</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                既然全世界各民族都有關於大洪水和方舟的傳說，很明顯這個歷史事件在人類各民族的祖先分佈以前，已深深地記錄在他們的腦海裏面。根據聖經的記載，挪亞進方舟是在　神開始降雨的前七日，之後降雨四十晝夜，水勢浩大，在地上共一百五十日，後來才慢慢地退了。方舟有五個月在水上漂流，有七個月停留在亞拉臘山上等待大洪水完全退去。從　神吩咐挪亞進方舟到從地面乾了，共有一年又十七日；也就是說，從大洪水開始到地面乾了一年又十七日。聖經告訴我們方舟是停在亞拉臘山上（創世記八章4節）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這亞拉臘山的希伯來文 אֲרָרָט 是指亞美尼亞區域的山。在摩西五經裏，耶利米書五十一章27節、列王記下十九章37節、以賽亞書三十七章38節都曾提到「亞拉臘」這名字。目前在亞美尼亞境內，只有座落在土耳其和亞美尼亞邊界的亞拉臘山最高，也最符合創世記八章5節的描述。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這座亞拉臘山，土耳其人稱它為「阿利達」（意思是方舟的山），附近的亞美尼亞人稱它為「忘克伊努亞」（意思是挪亞從這山下來），目前山頂高海拔一萬七千呎，山頂經常積雪，草木不生。由於這座山是座火山，所以在這 4,470 年以來，有時候會發生地震及噴出類似火山灰的物質出來（見圖66）。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch7-fig66-ararat.jpg" alt="圖66 亞拉臘山" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 66 — 亞拉臘山位於土耳其和亞美尼亞的邊界，山頂高達海拔 17,000 呎，經常積雪。歷史上有許多證據顯示方舟至今仍然停在山上。</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                在這座山峰的山腳下確實有一座城市名叫「拿克蘇安娜」Naxuana，有的人叫它作「拿克西基亞」Nakhichevan，意思是挪亞在此居住，當地人說挪亞就埋葬在此處。這座亞拉臘山從許多歷史的角度去考察，方舟停泊的地方，我基本上查遍土耳其各方面搜集的資料分析，方舟目前應該是停在海拔 14,000 呎的一個名叫阿何拉山峽 Ahora Gorge 上方附近（見圖67）。很可能因為 1840 年的強烈地震，使得方舟由原來山上的位置滑到山腰的附近。甚至有可能方舟在地震的時候裂為兩部分，一處在前述的地點，一處在其附近。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch7-fig67-ahora-gorge.jpg" alt="圖67 阿何拉山峽附近" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 67 — 根據許多目擊方舟的人描述，方舟應該仍然停在亞拉臘山一處名叫阿何拉山峽的上方附近，圖片所示就是這一個環境。</p>
              </div>
            </div>

            {/* 目睹方舟的歷史記錄 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">目睹方舟的歷史記錄</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                在人類歷史中，過去每當亞拉臘山上的雪融化，就有許多關於方舟被人看見的記載。最早的記錄寫在主前第三世紀的巴比倫文書中，其後也在主前三十年代的埃及史料中提到目睹方舟事件。另外，為了訪方舟，主後380年和主後1254年都有文獻記載目睹方舟之事，甚至連著名的馬可波羅也在十三世紀記載方舟「在天氣晴朗的時候，仍然可以在亞拉臘山上看見」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                主後1829年德國的一位醫生名叫帕羅特 Friedrich Parrot 寫了一本書——《亞拉臘山之旅》Journey to Ararat，內中詳細記載他在亞美尼亞修道院找到一根一個12呎長、9呎寬、1呎厚的十字架，說這十字架是用方舟裏的木頭製作的。他又說他找到亞拉臘山古七世紀建造的修道院文本，博物館化驗木塊的年代在4,484年以上。1869年，弗南德帶了幾個實驗室科學家，再度上亞拉臘山尋找方舟，他們一起又在山上找到幾根木塊。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                1916年兩位俄國的飛行員從高空中看到雪地裏的方舟，他們就把這個消息報告政府當局。於是俄國沙皇政府派遣了兩個探險隊在山上為期兩個週期的測量、拍照及記錄。但是探險隊還沒返回莫斯科幾天之內，沙皇政府就被革命政黨推翻了，所有方舟的資料也全部失蹤，只留下亞歷山大花校個人的見證。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch7-fig69-ark-top.jpg" alt="圖69 從方舟上方看其頂部" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 69 — 這是從方舟上方看其頂部的圖片，喬治依描述方舟頂部有有部分被雪和凝結石塊覆蓋，方舟表面像是像石頭一樣的堅壁。</p>
              </div>
            </div>

            {/* 更清楚的方舟描述 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">更清楚的方舟描述</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                在十九世紀的時候，亞拉臘山附近有許多居民經常帶著他們的孩子到山上去看方舟。其中一位亞美尼亞人名叫喬治依 Georgie，當他住在土耳其北部的時候，他父親經常帶他到亞拉臘山上。1902年及1904年左右他的叔父帶他到方舟附近，進出石頭幫助他爬到方舟的頂上。他在頂上行走發現上面有個破口，和聖經上記載的「挪亞搬去方舟的蓋觀看，便見地面乾了」（創世記八章13節）符合。方舟頂上是一排長長的通氣窗，方舟表面堅硬的像石頭一樣。憑著他的記憶，在畫家協助下描繪出他小時候目睹方舟的外貌。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch7-fig68-ark-model.jpg" alt="圖68 方舟外觀模型圖" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 68 — 亞美尼亞人喬治依，憑著他的記憶，在畫家協助下描繪出他小時候目睹方舟的外貌。我又重新繪製更正其原屬方形的錯誤。</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                1915年一位名叫哈吉阿倫的老人告訴海主威廉牧師一個驚人的故事。在哈吉年輕的時候，三位自稱是基督徒的英國人來找哈吉的父親帶路尋訪方舟，於是哈吉的父親不疑有他，就和哈吉一起爬山帶這些英國人找到了方舟。據哈吉的描述，這方舟甚高大，船身有一個破洞，推測是那麼遠就能望見。到方舟裏面後，這些英國人才承認他們並沒有神論者，於是就開始破壞方舟，由因木頭都已石化而出口的就罷。這些英國人原想殺掉哈吉父子滅口，但根據後五人都不准向人透露方舟存在的秘密而離去。幾年以後，一位英國人在臨終前也宣稱哈吉同樣的故事，原來那人就是三名英國人其中的一位。
              </p>
            </div>

            {/* 方舟不斷被尋找 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">方舟不斷被尋找</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                第二次世界大戰的時候，美國飛行員幾次飛過亞拉臘山上空時，都曾看到方舟在山上的遺蹤，這件事曾刊在1943年《星與紅條》的軍方刊物中。俄國的空軍也在1937年到1948年之間不斷不報導目睹方舟在亞拉臘山上的見證。1952年一位名叫舒治格林的油管技師，曾搭乘直昇機在亞拉臘山上空拍攝到許多方舟的照片，但是不久他卻被人謀殺，目擊者描述這巨大方舟的樣子是一個黑色的大箱子。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                1955年一位名叫弗南德 Fernand 的法國人和他的兒子攜帶攝影機登去找方舟，他們在亞拉臘山上將近14,000呎高度的地方找到了五呎長的木塊。最後他們交給各地博物館化驗，博物館化驗木塊的年代在 4,484 年以上。1969年，弗南德帶了幾個實驗室科學家，再度上亞拉臘山尋找方舟，他們一起又在山上找到幾根木塊。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                1974年，一位名叫艾伯特蕭貝兒 Albert Shappell 的海軍飛行員從飛機上拍到方舟的照片，之後奉命命令要將這些照片交回軍方，他他後來憑記憶畫了一個簡圖貢獻本書圖70（見下圖）。1974年，一位名叫艾德百林各爺 Ed Behling 的牧被當地一老牧羊人帶到方舟附近，由於他事前沒有預備繩子，所以只能距離到山崖下距離 50 呎到方舟上面。據他描述，這方舟有一部分是建在山崖上面的，方舟頭部是自形長排的通氣窗口。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch7-fig70-shappell-sketch.jpg" alt="圖70 艾伯特的飛行員記憶草圖" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 70 — 這是 1974 年一位名叫艾伯特蕭貝兒的飛行員憑記憶所畫的簡圖，由於原圖有些錯誤，我又重新繪製並更正其箱形的錯誤。</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                像這樣的見證數不勝收，甚至在 1980 年代和 1990 年代都有許多人嘗試去尋找方舟，但是方舟為積雪掩埋而不知去向。相信歷代以來，　神絕對意保存了方舟，每次當某些人心懷不軌，或是有利可圖的時候，　神又將它隱藏起來。我相信　神不時在人類歷史中，用方舟來提醒世人大洪水審判的史實。這道好像當方舟達成它拯救生命的任務之後，就象徵主耶穌基督道成肉身，為世人被釘十字架，受死，埋葬，陷落陰間；第三天從死人中復活，升天，坐在全能父神的右邊，將來必從那裏降臨，審判活人死人。
              </p>
            </div>

            {/* 方舟的結構和尺寸 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">方舟的結構和尺寸</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                現在讓我們來研究方舟的構造和尺寸，這方舟真的可以在大洪水潮流中達成它的任務嗎？首先，「方舟」的希伯來來文 תֵּבָה（tevah）意思是箱子的意思。同樣的字也在摩西嬰兒時期逃生用的蒲草「箱」這個字出現過（出埃及記二章3節）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                根據聖經，　神吩咐造方舟是這樣的結構和尺寸：「你要用歌斐木造一方舟，分一間一間的造，裏外抹上松香。方舟的造法乃是這樣：要長三百肘，寬五十肘，高三十肘。方舟上邊要留透光處，高一肘，方舟的門要開在旁邊，方舟要分上、中、下三層。」（創世記六章14至16節）。方舟的長度是按尺指尖到指尖底（以西結書四十章5節）。古人較為高大，若換算成今天的尺寸，一肘大約是18吋至22吋（即45.7公分至55.9公分）的長度。我們若採取最短距離，以18吋為一肘的算法，方舟大約是長450呎（即137.1公尺），寬75呎（即22.9公尺），高45呎（即13.7公尺）。舟身與舟身的比例是6:1，這是人類歷史上最大的木造船隻，由此可見挪亞時代的工程技術有多麼先進！
              </p>
              <p className="text-gray-700 leading-relaxed">
                方舟的船身比例非常特殊，不同尋常船隻，所以許多人就曾懷疑其真實性。他曾嘗試慣聖經上方舟的尺寸，比照圖68及圖69的描述作了一個模型。這個模型經過南加州「海洋實驗所」的波浪衝擊實驗，發現即使強度大到到兩百呎的波浪高度，這模型竟可以平穩到甚至可以承受波浪以 90° 的角度，方舟仍然可以在巨浪過後回返原來平穩的位置。大東號輪船 Great Britain 也採用這種 6:1 的船身比例，這才使得很多科學家相信方舟存在的可能性。大東號輪船的長度是322呎，寬51呎，高32½呎，其船身與輪船的比例是 6.3 比 1，非常接近方舟船身的比例。另外美國海軍在二十世紀初期服役的奧利根戰艦，它的船身也是採取接近 6 比 1 的比例。
              </p>
            </div>

            {/* 方舟的體積與容量 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">方舟的體積與容量</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                有人問：「方舟真的可以裝得下那麼多的動物嗎？」為了查實方舟的真實性，讓我們做一個基本的估計。聖經告訴我們方舟內部共有三層，我們若扣除船厚及其他不能使用的面積，方舟每層平均約有 32,000 平方呎，其內的總面積大約是 96,000 平方呎，這就相當於 21 個籃球場的面積。若論其總容量，方舟應該有 1,440,000 立方呎以上，總排水量可以高達 43,000 噸。如果用火車的貨櫃箱來比，這就相當於 539 節貨運箱。通常一般的貨運箱每節有 2,670 立方呎，每節大概可以裝載 240 隻羊。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們若假設方舟裏裝載的都是羊的話，那麼總共共會有 129,360 隻羊在方舟裏面：<br />
                <span className="font-semibold text-teal-700">240 隻羊 × 539 = 129,360 隻羊</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                根據「遺傳學與物種起源」一書裏梅爾 Ernst Mayr 的統計：目前地球上存在的物種 Species，哺乳類有 3,500 種，鳥類有 8,600 種，爬蟲類和兩棲類共有 5,500 種，所以方舟裏一共有 17,600 種動物。請注意：雖然地球上還有其他的物種，例如魚類有 18,000 種，被囊類 Tunicates（海生脊索動物）有 1,700 種，棘皮類 Echinoderms（海星、海參、海膽等等）有 4,700 種，軟體類 Mollusks（蚌、蛤、蝸等等）有 88,000 種，腔腸類 Coelenterates（水螅、水母、珊瑚等）有 10,000 種，海綿類 Sponges 有 5,000 種，原生類 Protozoans（單細胞微生物）有 15,000 種，它們都需要靠水生存，所以不需要帶到方舟上去。此外，節肢類 Arthropods 有 815,000 種，此類中的蝦蟹、蜈蚣、海蜘蛛等等都可以在大洪水中存故，不在水中生存的節肢類，如蜘蛛、蚊子、昆蟲等等，它們的身體積微小，它們所需要的空間，應該不會超過幾隻羊所需要的面積。另外，蚯蚓 Worms 有 25,000 種，其中水蛭必須活在水中，故不包括在方舟中，所以甚至相信許多軟蟲類都可以隨著蟲卵在大自然中保存下來，可能不需要進入方舟上。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch7-fig71-animals.jpg" alt="圖71 全球動物種類統計" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 71 — 根據梅爾的統計，目前地球上存在的動物約有 17,600 種。今天每種動物都是各從其類。從　神起初創造牠們到現在，牠們並沒有改變。</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                方舟內共有三層甲板，方舟的底層甲板全部都是用來堆積糧草和食物的，這一層的空氣不佳，種草糧好可以堆到頭頂增加地底穩定。最上層及中層的甲板，挪亞可按各類動物的替代而分配置置，其中部分中層的甲板也可作儲糧草的用途。隨著糧草消耗，空出的空間可以給新生下來的動物使用。動物的廢物當然就是處理或是丟到方舟通氣的外面，如此可以經常保持內部環境的清潔。有人可以議論動物的大小問題，我相信方舟上的動物都是「可以生育」的年輕動物，體積雖然比較小，大家一般在方舟的時候或並不比羊羔大多少，數目很少，聖經裏未記只帶了三十種公一公母，方舟方舟之大，帶著常規動物數目的名廚達到方舟裏容量許多都可以補給體積比羊大的動物。
              </p>
            </div>

            {/* 動物上方舟 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">動物上方舟</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經告訴我們，　神吩咐挪亞說：「凡有血肉的活物，每樣兩個，一公一母，你要帶進方舟，好在你那裏保全生命。飛鳥各從其類，牲畜各從其類，地上的爬蟲各從其類，每樣兩個，要到你那裏，好保全生命。」（創世記六章19至20節）。接著，　神又強調說：「凡潔淨的畜類，你要帶七公七母；不潔淨的畜類，你要帶一公一母。空中的飛鳥，也要帶七公七母，可以留種，活在全地上。」（創世記七章2至3節）。那時地面上就被分別為「潔淨的畜類」，數目很少，聖經裏未記只帶了三十種一公一母；牠們之中絕大多數的動物都是算為「不潔淨的畜類」，只能帶一公一母。另外，空中的飛鳥雖然帶七公七母，但是牠們大多數的身體積微小，所以許多可以合體積來計算。因此，我們估計方舟上的動物大約是 43,120 隻羊的體積，這個數字字只是方舟容量總數的三分之一，也就是說，這 43,120 隻動物物都算是羊的話，牠們只佔方舟其中一層甲板的面積而已。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch7-fig72-clean-bird.jpg" alt="圖72 潔淨的鳥類" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 72 — 鴿子是潔淨的鳥類，牠很可能是藉著地球磁場的關係而辨別飛行方向，從大洪水後挪亞放出鴿子找到陸地還了大洪水之後。</p>
              </div>
            </div>

            {/* 方舟建造了多少年 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">方舟建造了多少年</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                這麼大的方舟，大概花了多少年的時間呢？有的人憑著創世記六章3節就不加思索的回答：「一百二十年。」實際上，如果我們仔細研究這段經節上下的意思，就會發現這樣的答案是不正確的。創世記第六章記載：「當人在世上多起來，又生女兒的時候」（第一節），　神才吩咐挪亞造方舟，按照時日曆，共有一年又十七日；也就是說，從大洪水開始到地面乾了一年又十七日。聖經告訴我們方舟是停在亞拉臘山上（創世記八章4節）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                亞當當在伊甸園裏的日子，很可能不到一百年，甚至只有幾十年的時間。亞當生塞特的時候，我計算那日子距離大洪水審判的日子大概只有 1,526 年，也就是說大洪水發生在亞當被造之後 1,526 年。亞當的兒子塞特生諾士的時候是 105 歲。諾士生瑪勒勒兒的時候是 70 歲。瑪勒勒列生亞列的時候是 65 歲。雅列生以諾的時候是 162 歲。以諾生瑪土撒拉時的時候是 65 歲。瑪土撒拉生拉麥時的時候是 187 歲。拉麥生挪亞的時候是 182 歲。挪亞生閃、含、雅弗是 500 歲。由創世記第五章的家譜，我計算出他們和大洪水發生年代之間的關係是這樣的：
              </p>
              <div className="space-y-1 ml-4 mb-3">
                {[
                  '亞當活到 930 歲，在大洪水前 726 年去世。',
                  '塞特活到 912 歲，在大洪水前 614 年去世。',
                  '以挪士活到 905 歲，在大洪水前 516 年去世。',
                  '該南活到 910 歲，在大洪水前 421 年去世。',
                  '瑪勒勒列活到 895 歲，在大洪水前 366 年去世。',
                  '亞列活到 962 歲，在大洪水前 234 年去世。',
                  '以諾活在世上 365 歲，在大洪水前 669 年被提昇。',
                  '瑪土撒拉活到 969 歲，在大洪水那年去世。',
                  '拉麥活到 777 歲，在大洪水前五年去世。',
                  '挪亞活到 950 歲，在大洪水之後 350 年去世。',
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 text-gray-700">
                    <span className="text-teal-600 font-bold flex-shrink-0">（{['一','二','三','四','五','六','七','八','九','十'][i]}）</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">
                以上以上的年代中，亞當的八世孫瑪土撒拉活的最長，只差31歲就可以活到一千歲，但他　神同同日的命讓他活至接近一千年，他的名字希伯來文 מְתוּשֶׁלַח，希伯來文有兩重意思，一是「標槍的人」，一是「將命發出」。由於瑪土撒拉在大洪水那年一年去世，所以創世記五章32節意思是挪亞五百歲才開始生了閃、含、雅弗。閃、含、雅弗並不是三胞胎，所以創世記五章32節意思是挪亞五百歲才開始生第一個兒子。大洪水是挪亞六百歲二月十七日發生的。從聖經來分析，我不認為挪亞造方舟花了一百二十年，因為等到挪亞生了三個兒子，　神才吩咐挪亞造方舟（創世記六章10至13節）。
              </p>
            </div>

            {/* 大洪水年代與人類歷史 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">大洪水年代與人類歷史</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                為了確定大洪水在人類歷史中的確切年代，作者從多方聖經記錄和歷史文獻交叉比對，找到了可靠的錨點。聖經記錄王上六章1節：「以色列人出埃及後四百八十年，所羅門登基為王的年代。」摩西帶以色列人出埃及後第四百四十年加上480年，按照時日曆，以色列人在埃及住了430年（出埃及記十二章40至41節），亞伯拉罕活到75歲才能離開哈蘭到迦南，按照聖經的算法，從亞伯拉罕出生到以色列人出埃及共有720年。由前一段算出的以色列人出埃及約是1,446年，我們再一起計算如下：<br />
                <span className="font-semibold text-teal-700">1,446 年 + 720 年 = 2,166 年</span><br />
                如此，我們就算出亞伯拉罕大約是在主前2,166年出生的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記第十一章又告訴我們大洪水發生到亞伯拉罕出生的年代：閃活到600歲，才生下兒子亞法撒。亞法撒活到438歲。亞法撒的兒子沙拉活到433歲。希伯活到464歲。法勒活到239歲。拉吳活到239歲。西鹿活到230歲。拿鶴活到148歲。他拉活到205歲。亞伯拉罕的兒子以撒活到180歲，以色列活到147歲，約瑟活到110歲，足見人的壽命確實是在遞減中。把以上所有年代數全部加起來，我計算出大洪水發生到亞伯拉罕出生一共有292年。大洪水的年代 = 亞伯拉罕出生年代 2,166年 + 292年 = <span className="font-semibold text-teal-700">主前 2,458 年</span>。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在最後，我已經計算出大洪水是在亞當被造之後的1,656年，所以我們再加上2,458就成為以下的數字：<br />
                <span className="font-semibold text-teal-700">2,458 年 + 1,656 年 = 4,114 年</span><br />
                也就是說，人類的歷史（即亞當被創造的年代）大約是開始於主前4,114年，距離今天大約有6,126年。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch7-fig73-pyramids.jpg" alt="圖73 埃及金字塔" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 73 — 在今天埃及及閒附近的金字塔 Pyramids，最大的一座至少有兩百萬塊每塊重 2.5 噸的石頭，足見人類早期文明工程技術很先進。</p>
              </div>
            </div>

            {/* 挪亞方舟在大洪水中的經歷 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">挪亞方舟在大洪水中的經歷</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                根據聖經創世記第七章至第八章的記載，挪亞方舟在大洪水中的經歷是這樣的：
              </p>
              <div className="overflow-x-auto mb-3">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-teal-50">
                      <th className="border border-teal-200 px-3 py-2 text-left font-semibold text-teal-700">時間</th>
                      <th className="border border-teal-200 px-3 py-2 text-left font-semibold text-teal-700">事件</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['大洪水前 7 天', '挪亞全家和動物進入方舟。'],
                      ['大洪水開始', '大淵的泉源，都裂開了；天上的窗戶，也敞開了。四十晝夜降大雨在地上。'],
                      ['大洪水第 40 天', '雨停了，但是水勢叢叢上漲，淹沒天下的高山，水勢浩大，在地上共一百五十天。'],
                      ['大洪水第 150 天', '神叫風吹地，水勢漸落；淵源和天上的窗戶，都關閉了，天上的大雨也止住了。'],
                      ['大洪水 5 個月過去以後', '水從地退去，過了一百五十天，水勢漸消；方舟停在亞拉臘山上。水繼已經退到山谷和近海谷底處。'],
                      ['大洪水 7 個月又 14 天', '水又漸消，山頂都現出來了。'],
                      ['大洪水 8 個月又 24 天', '距前者四十天後，挪亞開了方舟的窗戶，放出一隻烏鴉去，那烏鴉飛來飛去，直到地上的水乾了。'],
                      ['大洪水約 9 個月又 1 天', '他又放出一隻鴿子去，要看看水從地上退了沒有。但遍地上仍是水，鴿子找不著落腳之地，就回到方舟挪亞那裡。'],
                      ['大洪水約 9 個月又 8 天', '挪亞再將鴿子從方舟放出去，到了晚上，鴿子回到他那裡，嘴裡叼著一個新擰下來的橄欖葉，挪亞就知道地上的水退了。'],
                      ['大洪水約 9 月又 15 天', '放出鴿子去，鴿子就不再回來了。'],
                      ['大洪水 10 個月又 14 天', '地上的水都幹了。挪亞移去方舟的蓋觀看，便見地面乾了。挪亞在等地上的植物完全長好，地殼也都穩定下來。'],
                      ['大洪水一年又 10 天', '地都幹了。　神吩咐挪亞和動物都離開了方舟。'],
                    ].map(([time, event], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-teal-50/30'}>
                        <td className="border border-teal-100 px-3 py-2 text-teal-700 font-medium whitespace-nowrap">{time}</td>
                        <td className="border border-teal-100 px-3 py-2 text-gray-700">{event}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-gray-500 text-xs italic ml-1">注：挪亞時代很可能是以每一年360天為計算月份的標準，為避免和今天的日子算法混淆，我在此特別採用月份作為計算單位的標準。</p>
            </div>

            {/* 遠方的動物如何前來 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">遠方的動物如何前來</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                有人會問說：「遠方的動物是怎麼來到方舟那裏的？澳洲的袋鼠是怎麼從澳洲橫渡海洋來到挪亞居住的地方？」為回答這個問題，我在下述幾點說明中作概略的分析：
              </p>
              <div className="space-y-3 mb-3">
                <div className="flex gap-3">
                  <span className="text-teal-600 font-bold flex-shrink-0">（一）</span>
                  <p className="text-gray-700">從本書第六章，我們知道大洪水以前地球的地理環境和今天完全不同：各洲大陸很可能是連在一起的，火山沒有爆發，地貌也沒有特殊的「高山」及「峽谷」等運動，所以以人類的腳步行走，動物都不需要「跋涉水域、翻山越嶺」的辛苦旅行。相信在挪亞造方舟的期間，動物們有充分的時間可以來到方舟那裏。</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-teal-600 font-bold flex-shrink-0">（二）</span>
                  <p className="text-gray-700">聖經記載：「潔淨的畜類、和不潔淨的畜類、飛鳥並地上一切的昆蟲，都是一對對到挪亞那裏進入方舟，有公有母，到挪亞那裏進入方舟的。」（創世記七章8至9節）。許多動物是　神帶領的，一路上　神會保護牠們。想想看，方舟內大約有17,600種動物，如果那麼一家去尋找牠們，大概他們很難完成建造方舟的工作。</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-teal-600 font-bold flex-shrink-0">（三）</span>
                  <p className="text-gray-700">今天我們在各大洲所看到的特種動物，並不是原先就在那裏的。動物在大洪水之後分散到全世界各地去，有的可能是由人類遷徙時帶來的牲畜，如南美洲的駱馬（或稱美洲駝）Llama；有的可能是自己過去的，如澳洲的袋鼠。在大洪水以後的冰河時期，海洋水位相對較低，澳洲、印尼和亞洲可以藉著大陸棚（或稱大陸棚）Continental Shelf 連在一起，後來冰河時期結束，才使各島嶼被海洋相隔離，袋鼠很可能就在那個時候來到澳洲，或許牠們還是被遷往澳洲的原住民帶去的呢！據說，今天還有很多人仍在吃袋鼠肉。</p>
                </div>
              </div>
            </div>

            {/* 方舟內和平相處 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">方舟內和平相處</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                前面我們證明了方舟內的食物和糧草是足夠的，而且　神早就吩咐挪亞要「拿各樣食物積蓄起來，好作你和他們的食物」（創世記六章21節）。更何況大洪水審判的時候，天氣變冷，方舟內的光線很暗，外面又是常常有規律的搖晃，相信很多動物都呈現睡眠狀態，甚至有的乾脆冬眠起來。在這種情況下，牠們的食量小，又安靜，挪亞一家人就容易照顧這些動物。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                有的人懷疑方舟內的動物如何能夠和平相處？其實，聖經上已有四個明確答案：（一）方舟內部是「分一間一間的造」（創世記六章14節），彼此隔開，不是混雜一處，和平相處應該不是問題。（二）這些動物有些是自己到挪亞那裏去的（創世記七章8至9節），顯然地球上動物種繁多，許多動物由　神挑選，又由天使帶領到挪亞面前，既是　神的安排，和平相處有何困難？我相信這些動物也都明白挪亞是他們的朋友，牠們大概都曉得地球上將有一大的災難發生。（三）大洪水氾濫時，聖經告訴我們，那時「耶和草坐著為王」（詩篇二十九篇10節），一切既然掌握在　神的權柄之下，又何嘗不能使牠們彼此和平相處？（四）動物的性情是可以被　神改變的，如但以理平安地在獅子坑中，「　神差遣使者，封了獅子的口」（但以理書六章22節），巴蘭的驢子曾說話（民數記二十二章28節），　神吩咐烏鴉為先知以利亞帶來早餐和晚餐（列王記上十七章6節）。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch7-fig74-andes.jpg" alt="圖74 安底斯山脈" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 74 — 南美洲的安底斯 Andes 山脈全長 4,500 哩（即 7,242 公里），是陸地上最長的山脈，它們是大洪水時期形成的，山上一些地區盡藏著駱馬。</p>
              </div>
            </div>

            {/* 大洪水來臨的前夕 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">大洪水來臨的前夕</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                　神吩咐挪亞建造方舟，挪亞就帶領他的家人，開始動工了。龐大的骨架，吸引了很多人圍觀。「挪亞，你在幹什麼？」有人問。「　神說要滅絕地上的生命，要我建造方舟，朋友，你也來和我作工吧！」「哈哈……」群眾鬨笑著，許多人把這件事當作笑話相互傳告。日子久了，全地上的人都知道這事，新聞開始注意挪亞的動靜。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                挪亞不理睬他們，繼續建造方舟，工作了很多年，直到方舟快完成了，圍觀的人多了。「這是什麼東西，不像船、能行駛嗎？」有個船夫問。「這是　神指示我建造方舟的尺寸，要裝滿地面上的生命，朋友，你也來和我作工，逃避　神的審判吧！」挪亞回答。「與你作工？這個大箱子能浮起來嗎？」群眾哄堂大笑，四散而去。一天，挪亞方舟前面，擠滿了3個群，大家爭看各種牲畜、飛鳥、爬蟲、還有從來沒有見過的走獸，都一對一對地進入方舟，有的甚至還有七對。一切就緒，挪亞站在方舟門口向眾人道別。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「挪亞，你要組馬戲團嗎？什麼時候開演嗎？」群眾大笑。「各位鄰舍朋友們，　神昨天告訴我，再過七天就要降雨在地上四十晝夜，地上所造的各種活物都要滅絕；把你們的家人帶來，逃避　神的審判吧！這裡還有一些空位。」挪亞大聲宣告。「呸！下雨？發滅生命？你講了這麼多年，不見有絲毫的影子，　神在哪裏？你才被滅掉！」眾人丟鞋鞋，扔石頭，叫罵聲沸騰，直到挪亞把門半掩上。「朋友們！進來吧！這扇門已決定封死，不能再打開，趁著還沒有關閉，進來吧！」挪亞聲嘶力竭地呼喊著。「我們的事，與你何干？跑吧！打爬還看你出來。」眾人鼓鬧，嘲笑地離去。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                一天，兩天，三天過去，天上沒有一點下雨的跡象，外面閒露露露的。挪亞一家人，卻在方舟中靜靜等著著，他的兒子含說：「父親，你確定　神一定會在第七天降雨嗎？」「我兒，是的，　神絕不食言。」閃接著說：「曾祖父也這樣說過。」第六天翻過去，第七天，大地起了涼風，天雲開始變色，整個天空突然變得黑暗無比，閃電交加，地殼開始強烈的震動！這處也傳來爆炸的聲音！許多人為這些從來沒有發生過的現象驚呆了，停止了喧嘩，吃喝嫁娶時放下手中的食物，結婚進行曲也不知不覺停止。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「大家鎮定，這不是什麼了不起的事，以後就好了，要相信專家！」但是，官僚蓋不過了眾人的哭叫聲。剎那時，地殼裂開，地底的泉源滾沸而出，天空中突然從從來沒有見到過的傾盤大雨，方舟開始緩緩移動。方舟裏面，安靜了一陣子，挪亞一家人開始唱聖歌，因為他們知道這位聖手，必會托住他們。「救命啊！挪亞，開門讓我進來！」有的人大聲叫喊叫。挪亞不知道對方能不能聽見見他的聲音，因為遠近震降隆的聲音蓋過了人群的呼喊……
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch7-fig75-endtimes.jpg" alt="圖75 末世警告" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 75 — 主耶穌說：「天地廢去，我的話都不能廢去。但那日子、那時辰，沒有人知道，連天上的使者也不知道，子也不知道，惟獨父知道。」</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                　神也沒有寬容上古的世代，曾叫洪水臨到那不敬虔的世代，卻保護了傳義道的挪亞一家八口；又判定所多瑪、蛾摩拉，將二城傾覆，焚燒成灰，作為後世不敬虔人的鑒戒；只搭救了那常為惡人淫行憂傷的義人羅得。<br />
                <span className="text-gray-500 text-sm italic">—— 彼得後書二章5至7節 ——</span>
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
                '全球約兩百個民族都有大洪水和方舟的傳說，從巴比倫、埃及、印地安人到中華民族的「船」字（方舟 + 八口）與「泛」字，都是大洪水真實性的人文佐證，不可能是巧合。',
                '聖經明確記載方舟停在亞拉臘山（希伯來文 אֲרָרָט），即今土耳其與亞美尼亞邊界、海拔17,000呎的火山，歷史上從主前三世紀至二十世紀，有大量文字記錄和目擊者見證方舟仍存於山上。',
                '方舟尺寸（長450呎、寬75呎、高45呎，比例6:1）經科學驗證極為先進，波浪實驗證明可承受200呎巨浪仍平穩，與大東號輪船（1844年）及奧利根戰艦同比例，印證了聖經設計之精確。',
                '方舟容量足以容納全球陸地動物：方舟共96,000平方呎三層甲板、43,000噸排水量，相當於539節貨運箱，可容納43,120隻羊體積的動物，只佔一層甲板，全球17,600種動物完全可以安排妥當。',
                '潔淨的動物帶七對，不潔淨的帶一對，空中飛鳥帶七對——方舟上的動物都是年輕可生育的個體，體積相對小，三層甲板中底層儲糧草食物，中上層安置各類動物，設計合理可行。',
                '挪亞造方舟的時間並非一百二十年：聖經顯示是等到閃、含、雅弗出生之後，神才吩咐造方舟，從大洪水前約十年至十六年，三個兒子輕壯的年紀正可以幫助挪亞高效建造。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「船」字的神學密碼——漢字中的洪水記憶</h4>
              <p className="text-gray-700 leading-relaxed">中文「船」字由「舟」+「八」+「口」組成，「八口人在舟上」正是挪亞全家八人的寫照（彼得前書三章20節）。另外「泛」字（氾濫）由「水」+「八口」構成，也指向八人在洪水中漂流的記憶。而「禁」字（禁止）由兩木加「示」（神明）組成，可解讀為「神以兩塊木頭（十字架）示人禁令」。倉頡造字的時代（約公元前2600年）接近大洪水後不久，挪亞後裔散居各地之後，這段共同記憶仍深深刻印在早期漢字的結構之中。這些不是牽強的巧合，而是全球各民族對同一歷史事件的集體銘記。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">方舟木料的特性——歌斐木（Gopher wood）之謎</h4>
              <p className="text-gray-700 leading-relaxed">聖經記載方舟是用「歌斐木」（希伯來文 עֲצֵי־גֹפֶר，gopher wood）建造，這是聖經中唯一提到此木種的地方，學者至今仍不確定這是哪種木材。一說是柏木（cypress），富含天然防腐油脂，耐水性強；另一說是層壓木（laminated wood），即多層木材交叉壓合，強度極高。方舟木材在4,470年後仍有目擊者描述「像石頭一般堅硬」，除了礦化作用外，也可能是歌斐木本身的特殊材質使然。今日已滅絕的樹種很多，創世前那個世界的植物種類遠比今天豐富，歌斐木是否也是大洪水後滅絕的物種，至今仍是未解之謎。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">方舟與救恩的預表——挪亞與基督</h4>
              <p className="text-gray-700 leading-relaxed">方舟在神學上是耶穌基督救恩的預表（typology）。方舟有一扇門（創世記六章16節），耶穌說「我就是門」（約翰福音十章9節）；方舟是神親自關門的（創世記七章16節），正如救恩的門是神主權的開啟與關閉；在方舟裏的人完全得保護，在基督裏的人「永不滅亡」（約翰福音十章28節）。方舟不是豪華郵輪，它沒有風帆、沒有槳，完全依靠神的引領漂流——信仰也不是靠人的努力，而是完全依靠神的恩典。彼得前書三章20-21節直接將方舟連結於洗禮與救恩：「方舟裏，藉著水得救的不多，只有八個人。這水所表明的洗禮，現在借著耶穌基督復活也拯救你們。」</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">尋找方舟的政治困境——土耳其的軍事禁區</h4>
              <p className="text-gray-700 leading-relaxed">亞拉臘山位於土耳其、亞美尼亞、伊朗三國邊界交匯處，長期以來是土耳其的軍事敏感地帶。外國探險隊在許多年份都被拒絕入境或中途被驅逐。1974年美國海軍飛行員艾伯特拍攝的方舟照片被軍方沒收，就是政治障礙的一個縮影。1990年代後土耳其偶爾開放學術探索許可，但往往受到嚴格限制。此外，亞美尼亞種族滅絕（1915年）的歷史創傷使土耳其-亞美尼亞關係長期緊張，亞拉臘山對亞美尼亞人具有極深的民族和宗教象徵意義，這也使該地區的考古探索更加政治敏感。神或許在時機成熟之前，藉著這些人為障礙繼續保護方舟的秘密。</p>
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
              '全球兩百個民族的洪水傳說，以及「船」字的漢字結構，對你的信仰有什麼衝擊？你認為這些人文證據和科學證據相比，哪一種對你更具說服力？為什麼？',
              '方舟被神保存了4,470年，卻至今仍未被完整展示於世人面前。你認為神為什麼要繼續隱藏方舟？如果方舟被完整挖掘出土，對今天的教會和世界會有什麼影響？',
              '挪亞在那個世代是「唯一」與神同行的義人（創世記六章9節）。你認為在今天的社會中，「唯一」忠心於神的代價是什麼？你有沒有過被孤立的信仰經歷？',
              '方舟是救恩的預表——只有一扇門，神親自關閉，裏外都抹松香（防腐兼象徵血的保護）。這些細節讓你對耶穌救恩有什麼新的領悟？',
              '本章提到神「神不時在人類歷史中，用方舟來提醒世人大洪水審判的史實」。你覺得神今天用什麼方式提醒這一代的人？你個人有沒有接收到過這樣的提醒？',
              '挪亞造方舟估計只花了十年左右，這意味著他在方舟尚未完成前已經相信神必實現承諾。你有沒有過在「看不見結果」的情況下仍然順服神的經歷？',
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
              <h4 className="font-semibold text-green-700 mb-2">🧭 用「方舟的眼光」重看救恩</h4>
              <p className="text-gray-700 mb-2">本週花十分鐘默想方舟的設計細節對應救恩的預表：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>一扇門（約翰福音十章9節：「我就是門」）</li>
                <li>神親自關門（約翰福音十章28-29節：「沒有人能從我父手裏把他們奪去」）</li>
                <li>裏外抹松香（彼得前書一章18-19節：「寶血如同沒有瑕疵、污點的羔羊之血」）</li>
                <li>把你目前的信仰狀態與「進入方舟」作比較：你今天站在方舟裏面還是外面？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 讀創世記六至八章——感受挪亞的順服</h4>
              <p className="text-gray-700 mb-2">本週一口氣讀完創世記六至八章，帶著以下問題閱讀：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>神吩咐挪亞做的每一件事，挪亞的回應是什麼？（六章22節：「挪亞就這樣行了」）</li>
                <li>挪亞在方舟裏等待了多少天才出來？他如何在「看不見盡頭」時仍然忍耐？</li>
                <li>讀完後寫下一件你目前正在等候神回應的事，祈求挪亞式的忍耐與信任。</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🌏 向身邊的人分享「船字的秘密」</h4>
              <p className="text-gray-700 mb-2">「船」字的構造是一個絕佳的福音橋樑，本週嘗試：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>找一位非基督徒朋友，用「船」字（舟 + 八口）和「泛」字開啟對話。</li>
                <li>不必強迫對方接受，只是分享這個有趣的發現，讓對方思考。</li>
                <li>如果對方感興趣，可以介紹《創世以來的奧秘》這本書。</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 禱告</h4>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-gray-700 leading-relaxed italic text-sm">
                  「主啊，感謝祢保存了方舟這個審判與救恩並存的記號。感謝祢全球各民族心中都有大洪水的記憶，那是祢給每個人心中留下的印記。求祢幫助我像挪亞一樣，在眾人都不信的時代，仍然「與祢同行」、順服祢的話語行事。感謝祢為我預備了耶穌基督這艘「方舟」，使我不在審判中沉淪，而是在祢的恩典中得救。求祢也讓我成為向身邊人開啟這扇門的工人，讓更多人進入祢所預備的方舟之中。奉主耶穌的名禱告，阿們。」
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
