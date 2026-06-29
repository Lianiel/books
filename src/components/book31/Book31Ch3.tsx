import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Eye, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book31Ch3() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true, summary: true, exploration: true, questions: true, practice: true,
  });
  const toggle = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">第三章</h1>
        <h2 className="text-xl font-semibold text-gray-700">宇宙論問題所在</h2>
        <p className="text-sm text-gray-500 mt-2">書頁 40–63</p>
      </div>

      {/* 章節引言 */}
      <div className="mb-6 bg-gradient-to-r from-teal-900 to-cyan-900 rounded-lg p-6 text-center">
        <p className="text-teal-100 leading-relaxed italic text-sm">
          諸天述說　神的榮耀，穹蒼傳揚祂的手段。這日到那日發出言語，這夜到那夜傳出知識。無言無語，也無聲音可聽。祂的量帶通遍天下，祂的言語傳到地極。　神在其間為太陽安設帳幕……。
        </p>
        <p className="text-teal-300 text-xs mt-2">—— 詩篇十九章 1 至 4 節 ——</p>
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

            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">一、哈伯與宇宙大爆炸學說</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                1999 年時代雜誌 Time 選了 100 位對 20 世紀最有影響的人，其中一位就是天文學家哈伯 Hubble，他不僅發現我們銀河系 Milky Way Galaxy 以外尚有百萬以上的星河，他也是第一位提供「宇宙大爆炸學說」Big Bang Theory 證據的學者。他於 1929 年證明宇宙正在向外擴張，於是就發展出「宇宙論」Cosmology 的理論。由於他的發現，愛因斯坦 Einstein 才能肯定宇宙原是有一個開始。因為雖然愛因斯坦根據他自己「相對論」的推測，宇宙應該正在擴張，同時也在減速當中，可是他一直苦無證據。很遺憾，哈伯早於 1953 年逝世，如果他今天仍活在世上，他必定會修正「宇宙大爆炸學說」及其他宇宙論的錯誤。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch3-fig19-eagle-nebula.jpg" alt="老鷹星雲 Eagle Nebula" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 19 — 這張照片是距離地球所謂「七千光年」的老鷹星雲 Eagle Nebula，不論科學家再怎樣推論，一切都只是臆測，無人能去實地觀察。</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">二、宇宙大爆炸學說的錯誤</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「宇宙大爆炸學說」被進化論學者推波逐浪，變本加厲地認為生命起源來自 150 億年前的一場大爆炸。他們認為宇宙各星球是由一團巨大的星雲經由大爆炸而成許多熔岩，再冷卻藉萬有引力凝結成個體，太陽就是這種原始星雲保留的部分等等。然而最近科學家經由現代化的天文儀器、太空船探測回來的資料，研究結果發現宇宙深處巨大的星河系統至今仍在發展；同時，星球凝結的因素並非來自萬有引力，乃是由於電子和磁力所造成的。於是，宇宙起源於大爆炸的說法，疑點重重，不足採信。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                堅持「宇宙大爆炸學說」的學者犯了許多錯誤，譬如說他們觀察到星河系統擴張的現象，但是這並不代表就來自爆炸的結果，因為他們根本忘記宇宙後面的創造者——神在其中統管萬有。這些人也忘記了物理的一項重要定律：大爆炸的結果是混亂而不是秩序，就像火山爆發會帶來毀壞的結局一樣。
              </p>
              <p className="text-gray-700 leading-relaxed">
                宇宙擴張成今天這樣的幅度，若不是有十分精確的某種力量在背後調控，必會造成碰撞、毀滅與脫軌。一位芝加哥的物理學家曾計算靠「宇宙大爆炸」來達成今天宇宙現狀的概率，他說那就等於擲一枚顯微鏡才能看到的標槍，橫跨宇宙到距離地球最遠的「類星球體」Quasar 上，並且剛好射中那裏一公厘直徑的紅心。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">三、宇宙年齡比想像的年輕</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                1995 年，科學家根據新觀測到的宇宙擴張速率（也就是哈伯常數）發現宇宙是比原來想像的年輕，他們用新的測量方法來估計宇宙年齡，一切數據都顯現宇宙年齡可能只有 80 億至 120 億年，在這之前，他們以為宇宙至少有 150 億年的歷史。實際上，宇宙的年齡應該比他們所觀測到的還要年輕更多。天文學家只是用距離地球三百哩上空的「哈伯太空望遠鏡」Hubble Space Telescope 探測，就發現過去作了不少錯誤數據的估計，他們若能更進一步在銀河系外邊觀測，那時他們將會驚訝地發現宇宙原是這麼年輕。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch3-fig20-hubble-telescope.jpg" alt="哈伯太空望遠鏡" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 20 — 哈伯太空望遠鏡於 1990 年被太空梭送到地球上空去服役，雖然幾度發生問題，終於在 1994 年及 1999 年被修復，後來就發揮功效。</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">四、哈伯常數大有問題</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                說來這「哈伯太空望遠鏡」的建立也是一波三折，倍經辛苦。雖然 1990 年「探險號太空梭」Discovery Space Shuttle 送它到地球上空去服役，但是因為種種設計上的問題，無法發揮功效。一直到 1994 年，七位太空人乘坐「奮進號太空梭」到太空十一天為望遠鏡更換零件，否則這個望遠鏡至今送回地球的相片依舊模糊不清（見圖 20）。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch3-fig21-black-hole.jpg" alt="黑洞" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 21 — 經由哈伯太空望遠鏡傳回地球的影像，天文學家才能觀測到這個「黑洞」，並且確定它在宇宙中存在，過去只是臆測而已。</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                根據天文學家用來估計宇宙年齡的「哈伯常數」來看，這原理本身就有許多漏洞。宇宙論學者認為，宇宙正在有規則的向外擴張，其他星河因為遠離我們，我們所看到它的光線就會產生一種「移動紅光」。科學家認為這些星河「移動的基本速率」是和「星河對地球的距離」成一個常數，他們就稱之為「哈伯常數」Hubble Constant。這「哈伯常數」一般被訂為每一百萬光年的距離每秒就有 17 公里的移動（一般寫成 17 公里/秒/百萬光年）。然後他們根據所觀測到某星河「移動紅光」的速率，再用這「哈伯常數」來除，藉此推測這星河和地球之間的距離。公式為：
              </p>
              <div className="bg-gray-50 rounded-lg p-4 my-3 text-center">
                <p className="text-gray-700 font-medium">移動紅光速率 ÷ 哈伯常數 = 該星球和地球間距離</p>
                <p className="text-gray-500 text-sm mt-2">例：180,000 公里/秒 ÷ 17 公里/秒/百萬光年 = <strong>10,588 百萬光年距離（約 106 億光年）</strong></p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">以上這個哈伯常數公式，實際就有許多原理上的錯誤：</p>
              <ul className="space-y-3 ml-2">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold flex-shrink-0">（一）</span>
                  <p className="text-gray-700">宇宙並不是一開始就呈穩定而統一地擴張，沒有任何科學家能在所謂宇宙「開始爆炸」時去觀測。其擴張實情，個中究竟仍不甚清楚，假設為常數是不合理的。</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold flex-shrink-0">（二）</span>
                  <p className="text-gray-700">哈伯常數是「相對」的速率，不是「絕對」的速率。地球在動，所測量的星河也在移動，是如何的動法？是以什麼原則運行？是以哪一個宇宙中心為基準？這就好像哥白尼 Copernicus（1473-1543）證明太陽是太陽系中心之前，當時一般大眾以為地球才是太陽系的中心一樣——以不同的宇宙中心來觀測，所得到的結果會因解釋而完全不同。</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold flex-shrink-0">（三）</span>
                  <p className="text-gray-700">人類對宇宙所知有限，觀測儀器的準確度更是有限。如 1920 年代以前，人們不相信我們所居住的銀河系外邊還有別的星河，一直等到哈伯使用威爾遜山上那 100 吋的望遠鏡，仔細觀測才看到銀河系以外的星河。1995 年該太空望遠鏡對二十個星球進行測量，都發現其哈伯常數有問題，進而研究出最新擴張速率。推論之下，除非望遠鏡能置於銀河系之外，在此之前所計算出來的常數，都有十分大的問題。</p>
                </li>
              </ul>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch3-fig22-young-galaxies.jpg" alt="年輕的星河" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 22 — 天文學家最近發現十八個很年輕的星河在我們銀河系和安德米達星河 Andromeda Galaxy 之間，這張照片是其中幾個年輕的星河。</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                除此之外，銀河系的那一端到底是受什麼樣的力量牽引？又是以什麼樣的原則運行？是何時開始的？為什麼它們會在那裏運行？是以什麼樣的基準為中心？沒有人能真正看得清楚。以這樣的相對測量法，是根本無法計算出絕對真理的。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">五、光年計算法原理的錯誤</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                有人認為宇宙有 150 億年的年齡，其中一個因素是發生在其光年計算原理上的錯誤。他們的理論簡化而言是這樣的：（一）前面我們用哈伯常數算出距離地球最遠的一個星河有 106 億光年；（二）我們現在在看見這星河所發的光線；（三）這星河現在被我們看到，是因為 106 億年以前它的光線就開始由那裏發射出來；（四）所以這星河至少在宇宙中有 106 億年的歲數，所以宇宙至少有 106 億年的年齡。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                持這種說法的人，實際是因為他們在邏輯上被誤導而產生的結果。這些人多半是受了進化論先入為主的觀念所影響，以致於根本沒有看見宇宙後面創造的主宰。創世記一章 16 節及 17 節告訴我們，神「又造眾星；就把這些光擺列在天空，普照在地上」。在這一切創造發生的時候，那些眾星的光早「已經到達了地球」，這些現象都是發生在神創造天地的過程當中（詳情見本書第四章的討論）。所以，這些眾星並不是早在 106 億年以前才開始發光的，在神創造宇宙時，神就使我們能看到這些光線了。
              </p>
              <p className="text-gray-700 leading-relaxed">
                宇宙的奧秘和奇妙是人所不能測透的，科學家至今仍無法完全明白光線在宇宙中運行的情況。光每秒進行 186,000 哩，若光線在真空裏行走一年（又稱為一光年 Light-Year）其距離是 5,880,000,000,000 哩。用這種光年的方法來計算宇宙年齡和距離實在很不合宜，因為光線受引力、能量、磁場、黑洞等因素影響，至今仍無人能瞭解其真實情況。更何況神在創造宇宙的時候，祂所用的神蹟和大能，都可以使光速超過我們的想像，祂甚至可以使光速不受時間範疇的限制，就像耶穌在迦拿婚席上變水為酒的例子（約翰福音二章 1 至 11 節），一霎時、眨眼即成。神的作為是可以根本超出時間、光速及空間的範疇。所以，這種認為光年自始至終不改變的假設，怎麼可能會對呢？
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">六、太陽系本身證明宇宙非源自爆炸</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                雖然目前我們無法飛到銀河系外邊尋求真實的數據和資料，但是至少在我們所居住的太陽系本身，據科學家已獲得的資料就都顯示宇宙並非來自大爆炸：
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch3-fig23-solar-system.jpg" alt="太陽系各行星位置示意圖" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 23 — 太陽系各行星相關位置示意圖。這些行星和它們的衛星都顯示宇宙絕對不是源自大爆炸。</p>
              </div>
              <ul className="space-y-3 ml-2">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold flex-shrink-0">（一）</span>
                  <p className="text-gray-700">如果宇宙源自爆炸，接近太陽的行星，如水星、金星、地球，其構造應該大部分是氫和氦的組合，但事實證明，地球的結構只有 1% 是這些元素。</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold flex-shrink-0">（二）</span>
                  <p className="text-gray-700">如果宇宙源自爆炸，所有太陽系的行星應該朝向同一方向自轉。但事實證明，金星和天王星都是朝向相反方向自轉的。</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold flex-shrink-0">（三）</span>
                  <p className="text-gray-700">如果宇宙大爆炸的學說是正確的，太陽系所有 50 個月球（即衛星）應該朝同一方向圍繞自己軌道所在的行星才對。但事實證明，其中至少有 11 個月球（即衛星）正朝反方向在軌道上運行。</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold flex-shrink-0">（四）</span>
                  <p className="text-gray-700">有的太陽系行星及有些環繞行星運轉的衛星，其本身運行脫離正常軌道。譬如太陽系最外邊的一個行星——冥王星偏斜運轉，平均每 248 年會比它前面一個星球——海王星要更接近太陽（見圖 23）。</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold flex-shrink-0">（五）</span>
                  <p className="text-gray-700">較重的元素反而在太陽系比較小的行星上發現。同時，有的星球密度不一，譬如月球本身的密度就比地球的密度小。</p>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">像這樣矛盾的地方還有很多，足見宇宙並非源自大爆炸。進化論學者企圖用「宇宙大爆炸學說」向世人灌輸「宇宙源自偶然」的觀念。為了自圓其說，就把宇宙年齡臆測為 150 億年，以為年代愈長久就愈有可能自然演化，但如今在真理的亮光下便發現有很大的錯誤。</p>
            </div>

            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">七、彗星證明太陽系不超過一萬年</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                天文學是一門很不容易懂的學問，但是如果提到彗星，我想你一定知道，其中最有名的可能是哈雷彗星 Halley's Comet 了（見圖 24）。哈雷彗星平均每 76 年會出現一次，上次出現是 1986 年，下次應該是 2062 年才會在地球上看見。它出現的時候，曾造成許多人的觀測風潮。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch3-fig24-halleys-comet.jpg" alt="哈雷彗星" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 24 — 哈雷彗星於 1986 年經過地球時，科學家曾發射太空探測火箭到其附近六百哩去觀測，發現彗星外殼之內大部分是由冰塊所組成的。</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                每次彗星環繞太陽一圈的時候，彗星都要被強力的太陽風 Solar Wind 擊打，所以每次它們經過太陽的時候，其彗星表面就有一部分被焚燒而成為彗星的尾巴。照此推理，年久下去，彗星最終將被徹底解體。就根據目前所知彗星解體的速度，科學家相信一個彗星可以在一萬年之內徹底解體，也就是說彗星的存在年齡應該只有一萬年。但是如今，倘仍有五百萬個彗星環繞著我們的太陽系，他們並沒有解體；歷史上的天文學史料中，也沒有發現任何有關彗星解體的傳聞。太陽系之外又沒有發現可以製造新彗星的來源，足見太陽系的年齡在一萬年之內，否則所有彗星早就解體消失了。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">八、太陽正在縮小</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                如果要探測太陽系的年齡，那麼太陽就是一個最明顯的實例了。因為太陽是太陽系中間最巨大的星球，如果太陽的直徑好比我們的身高長度，那麼太陽系最大的行星——木星就像是我們頭的大小，地球就只有我們眼睛一般大。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                自從 1836 年起，一百多位以上的天文學家在英國皇家格林威治天文台 Royal Greenwich Observatory 和美國海軍天文台 U.S. Naval Observatory 一直在密切觀測太陽的變化。經由一百多年來的記錄和對比，科學家在 1980 年代公佈了一項令人震驚的大事——太陽正在縮小，而且是以每 100 年縮小 1/1000 的比例正在進行。此外，搜集距今四百年的日蝕記錄，對照之下，都顯現太陽是在迅速的縮小。
              </p>
              <p className="text-gray-700 leading-relaxed">
                有人以為太陽直徑長達 865,400 哩，是地球直徑 7,926 哩的 109 倍大，這麼大的體積，每小時只縮小 5 吋算不了什麼。但是如果反推回去，太陽至今若已有十萬年的年齡，太陽在十萬年前就有今天的兩倍大。目前太陽距離地球只有 93,000,000 哩，如果太陽至今有兩千萬年的年齡，它的表面就快碰到地球了。實際上，如果太陽起初真有這麼巨大，它縮小的比例會更為迅速，而且在不到一百萬年前，它的熱度早已徹底毀滅所有地球上的生命了。還有我必須提醒你，在地球和太陽中間，還有水星和金星比地球更靠近太陽。足見太陽不可能有幾萬的年歲，否則水星和金星就早已銷毀不見了。所以太陽的年齡應該不會超過一萬年左右。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">九、月球正在遠離</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                由於近代科學儀器比以前精確，科學家也注意到海洋潮水及其他的因素都使地球的自轉速度每年減慢（見圖 25）。這個因素也間接造成月球每年正以 2 吋的速度脫離兩者之間的引力範圍，也就是說月球距離地球愈來愈遠了。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch3-fig25-tidal-diagram.jpg" alt="月球地球潮汐示意圖" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 25 — 月球和地球之間的引力會造成海洋潮水現象，每天會有兩次漲潮和兩次退潮發生在同一區域（同時請見本章註釋 4）。</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                目前月球和地球之間的距離是 238,000 哩，而月球本身直徑有 2,160 哩。若以上述這種遠離的比例反推回去，不到幾萬年以前，月球和地球中間的距離因為太近了，兩者之間所造成的引力和潮水現象可能會毀滅所有陸地上的生物。所以月球也不可能有幾萬歲的年齡。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">十、獵戶星雲四個星球的實例</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                既然我們從太陽系所測量到的資料，一切都顯示太陽系像地球的年齡類似——保守的估計，是介於 12,000 年與 6,126 年中間。那麼我們應該以什麼測量方法來探測太陽系以外宇宙的年齡呢？有哪位科學家能夠到我們銀河系以外去實地觀測宇宙呢？
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                天文學家斯勒書爾 Slusher 曾對獵戶星雲 Orion Nebula 其中的一組四個星球作研究，這四個星球組成一個不等邊的四方形，而他們原是由同一點向四方快速分散的。由它們目前的速度推算，應該在距離今天至多一萬年以前就由同一點向外擴散。宇宙論臆測這星雲有百萬年的歲數，但許多天文學家相信，獵戶星雲不可能大於上述所說這四個星球的年齡；也就是說，獵戶星雲大約只有一萬年左右的歲數。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">十一、巨無霸超能量星球與宇宙論無法解釋的現象</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                天文學家根據星球的放射能量設定了一些代號名稱，不同的星球就根據它的顏色、形態訂下一些英文字母的代號。我們太陽系的太陽是一般放射能量的星球，代號是「G 型」，因為它的表面溫度約有華氏 10,800 度，星球是黃色的。宇宙中測量到有一種代號叫「O 型」的超能量星球，它發出紫光，體積是太陽的一萬倍大，表面溫度大約有華氏 90,000 度。又有另一種巨大的超能量星球代號是「B 型」，也是巨大無比。這些「O 型」及「B 型」超能量星球都發出比太陽大十萬倍以上的能量。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                科學家推論，如果按今天這些星球存在的現象反推回去，不要說一百萬年前，幾萬年以前宇宙就充滿這些巨無霸的火球。果真如此，宇宙中就不可能有生物能在眾火球吞噬下僥倖生存。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">在這裏有兩個宇宙論無法解釋的現象：</p>
              <ul className="space-y-3 ml-2 mb-3">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold flex-shrink-0">（一）</span>
                  <p className="text-gray-700">這種「O 型」或「B 型」的超能量星球，居然也和一些「顏色暗而又很年輕」放射能量的星球在一起，顯示它們是同時產生的。「O 型」或「B 型」的超能量星球早應該在宇宙論所謂的「百萬年以前就死亡」了，但為什麼卻和年輕的能量星球在一起呢？</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold flex-shrink-0">（二）</span>
                  <p className="text-gray-700">一般星球的磁場都會把它附近的塵粒、隕石、瓦斯等等吸到其上。這些巨無霸「O 型」或「B 型」超能量星球，既然可以放射出大過太陽十萬倍又快速的能量，應該會造成一種螺旋型的吸塵效果，把周圍塵粒拉到它那裏去。如果這些巨無霸星球真有百萬年齡，它早就把周圍吸得乾淨。然而，根據天文台的觀測報告，這些「O 型」或「B 型」超能量星球周圍還有大量的塵粒圍繞著它們，這些都顯示宇宙是年輕的。</p>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                太陽目前每天會吞噬 100,000 噸的塵粒及隕石到它裡面去，若以這樣的速度倒推回去，不到一萬年左右，太陽早把周圍的塵粒吸光了。可是目前太陽周圍仍有一大批的塵粒環繞著它，而這些塵粒又沒有別的補充來源。這裏說明了一件事：宇宙的許多區域也可能像太陽系一樣，年齡不會超過一萬年。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">十二、神必然統管這浩瀚宇宙</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                前面我提到，除非有一天人類能到銀河系外邊去實地探測，才能更進一步的瞭解這浩瀚宇宙。我在這裏不能單憑目前有限而不完全的科學資料，斷定宇宙一定和太陽系同齡，但從目前所搜集的已知資料顯示，宇宙並沒有像宇宙論的學者所估計的那麼古老。二十世紀所發展的宇宙論，泰半都是臆測和假設，若也當成科學定理看待，只怕又要被它蒙蔽了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                反觀我們所居住的銀河系，其內約有一百億顆星球，我們夜晚用肉眼觀察天空所見的眾星，多半就是他們。據目前資料顯示，它具有螺旋形狀，從側面看起來像是一片中央突起的光碟。它直徑約有十萬光年，上下平均的厚度約有一千光年，中心厚度約有兩萬光年，每秒約以 200 公里的速度在向前推進；太陽系在其半徑外側約 2/5 的部分（見圖 26）。除此之外，在我們所居住的銀河系外邊，科學家臆測還有百萬至一億以上的星河系！
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch3-fig26-milky-way.jpg" alt="銀河系平面圖" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 26 — 這是由上往下看銀河系的平面圖，我們所居住的太陽系是其中的一部分。人們夜晚用肉眼觀察天空所見的眾星，多半就是他們。</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                像這樣一個幅度廣大、浩瀚的宇宙，必然有一個開始。而它的開始前面證明不是源自大爆炸，也不是源於自然，只有神才能啟動它。神既然是這個廣大宇宙的創造者，祂必然有以下的特性：
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch3-fig27-deep-space.jpg" alt="浩瀚宇宙" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 27 — 像這樣一個浩瀚的宇宙，天外有天，星外有星，銀河系外又有星河系，統管宇宙的這位　神，是何等的偉大！</p>
              </div>
              <ul className="space-y-4 ml-2 mb-4">
                {[
                  { num: '（一）', title: '祂必然無所不知', body: '從宇宙有組織、又和諧的自然定律，人體 DNA 複雜卻又奇妙的結構，到物理原子最小物質夸克的各種形態，一切顯現　神是全知的創造者。聖經：「我們的主為大，最有能力，祂的智慧，無法測度。」（詩篇一百四十七篇 5 節）' },
                  { num: '（二）', title: '祂必然無所不在', body: '神必遠超過祂所創造的宇宙，並且在這被造宇宙系統的空間之上。神既然超過這宇宙的物質世界，所以沒有任何宇宙空間能限制祂的存在，而且祂必是超越物體的一位靈體。世界上沒有任何物體、形像或雕像可以代表祂。聖經耶穌說：「神是靈，所以拜祂的，必須用心靈和誠實拜祂。」（約翰福音四章 24 節）' },
                  { num: '（三）', title: '祂必然無所不能', body: '神必然有無限的大能，因為祂可以從無生有，連「無」也沒有辦法限制祂的作為。邏輯告訴我們「果」不可能大過「因」，神是啟動這被造宇宙的「因」，宇宙萬物是被啟動生出的「果」，所以神的能力必大過一切萬物的能力總和。聖經：「耶和華豈有難成的事麼？」（創世記十八章 14 節）' },
                  { num: '（四）', title: '祂必然永恆存在', body: '創造者必在宇宙時間範疇之外，祂必不受宇宙時間的限制。神既是啟動這宇宙的創造者，祂必能超越時間到創世之前去啟動一切。從我們的眼光看，祂是無始無終的。祂是自有永有，祂是永恆。聖經：神對摩西說「我是自有永有的。」又說：「你要對以色列人這樣說：『那自有的打發我到你們這裏來。』」（出埃及記三章 14 節）' },
                  { num: '（五）', title: '祂必然遠超宇宙', body: '神必然在所有受造之物之上，神的存在必不因宇宙存在而存在。即使沒有今天這個宇宙，祂也可以獨立存在，祂遠超過這被造宇宙的一切範疇。聖經：「諸山未曾生出，地與世界你未曾造成，從亙古到永遠，你是　神。」（詩篇九十篇 2 節）' },
                  { num: '（六）', title: '祂必然自有位格', body: '這浩瀚的宇宙，從起初以來，就有目的、有方向、有選擇的被造出生命。一切顯示創造者擁有大智慧、意志、慈愛的位格。絕對不是新世紀運動 New Age Movement 所渲染的某種無位格的力量。聖經：「耶和華，耶和華，是有憐憫、有恩典的　神，不輕易發怒，並有豐盛的慈愛和誠實……」（出埃及記三十四章 6 至 7 節）' },
                  { num: '（七）', title: '祂必然至善至美', body: '創造者必然沒有瑕疵，因為祂是一切宇宙被造物的標準。萬物因祂而立，也因祂而生。所以，祂必是一切智慧、能力、真理、生命、良善、聖潔、誠實、絕對、完全、公義、公平、慈愛的源頭。聖經：「各樣美善的恩賜，和各樣全備的賞賜，都是從上頭來的，從眾光之父那裏降下來的；在祂並沒有改變，也沒有轉動的影兒。」（雅各書一章 17 節）' },
                ].map((item) => (
                  <li key={item.num} className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold flex-shrink-0">{item.num}</span>
                    <p className="text-gray-700"><strong>{item.title}</strong>——{item.body}</p>
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 leading-relaxed mb-3">
                如愛因斯坦在他相信宇宙原是有一個開始之後，他寫道：「我要知道　神是如何創造這世界的。我對這個或那個現象，對這種或那種元素分析並沒有興趣。我要知道祂的想法，而其他只是細節而已。」這裏使我想起聖經大衛所寫的詩，他說：「耶和華我們的主啊，你的名在全地何其美！你將你的榮耀彰顯於天。你因敵人的緣故，從嬰孩和吃奶的口中，建立了能力，使仇敵和報仇的，閉口無言。我觀看你指頭所造的天，並你所陳設的月亮星宿，便說：『人算什麼，你竟顧念他？世人算什麼，你竟眷顧他？』」（詩篇八篇 1 至 4 節）
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch3-fig28-galaxy.jpg" alt="遠方星河" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 28 — 在這位無所不知、無所不在、無所不能、永恆存在、遠超宇宙、自有位格、至善至美的創造主面前，我真是無法去形容　神的偉大。</p>
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
                '宇宙大爆炸學說的根本矛盾：爆炸只會帶來混亂，不會產生宇宙中精密有序的結構；達到今天宇宙現狀的概率等同於擲一枚顯微鏡才看到的標槍橫跨宇宙射中一公厘的靶心。',
                '哈伯常數大有問題：它是相對速率而非絕對速率，無法考慮不同宇宙中心的視角差異，且觀測儀器尚無法置於銀河系之外，所有計算都存在根本誤差。',
                '光年計算法的邏輯謬誤：假設光速自始至終不變，卻忽略了神在創造宇宙時可使光速超越一切物理限制——就如變水為酒，一霎時即成。',
                '太陽系本身推翻大爆炸：行星自轉方向相反、衛星逆行、元素分布矛盾、冥王星偏斜軌道——這五大矛盾宇宙論無法解釋。',
                '彗星、太陽縮小、月球遠離三大物理計時器一致指向：太陽系年齡在一萬年以內，遠小於進化論所宣稱的 46 億年。',
                '宇宙的浩瀚與精密必然指向一位創造主，祂必然無所不知、無所不在、無所不能、永恆存在、遠超宇宙、自有位格、至善至美——這就是聖經所啟示的神。',
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
              <h4 className="font-semibold text-gray-800 mb-2">愛因斯坦為何說「我要知道神的想法」？</h4>
              <p className="text-gray-700 leading-relaxed">愛因斯坦晚年確信宇宙有一個開始，但他一生未明確信奉基督教。他所說的「神」（Gott）更接近斯賓諾莎式的宇宙理性秩序，而非位格的神。然而本章作者指出，若宇宙必有開始、必有創造者，那麼這位創造者必然具備七個特性——其中「自有位格」是關鍵：一個無位格的宇宙力量無法設計出有目的、有道德的生命。聖經的神恰恰符合這七個必然特性，這不是巧合，而是啟示。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">光的速度與神的創造——「星光問題」的神學思考</h4>
              <p className="text-gray-700 leading-relaxed">「星光問題」（Starlight Problem）是年輕地球創造論者面對的最大挑戰：如果宇宙只有幾千歲，遠方星球的光線怎麼可能到達地球？本章提出兩個回應：（1）創世記一章 17 節明確指出神「把光擺列在天空，普照在地上」，創造過程中光已到達地球；（2）神的大能可超越物理定律的限制，就如耶穌在迦拿的神蹟一樣。這並非反科學，而是承認科學定律本身是神所設立的，神有能力在其之外行事。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">神的七個必然特性與系統神學的呼應</h4>
              <p className="text-gray-700 leading-relaxed">本章末從宇宙論出發，推導出神的七個必然特性，這與系統神學中論述神的屬性高度一致：無所不知（全知）、無所不在（遍在）、無所不能（全能）、永恆存在（永恆性）、遠超宇宙（超越性）、自有位格（位格性）、至善至美（聖善性）。本章的特別之處是從純科學邏輯推導而至，不先引聖經，讓科學本身為神的存在和屬性作見證，然後才用聖經印證——這是護教學（Apologetics）的經典進路。</p>
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
              '本章列舉了大量科學證據指向宇宙的年輕與精密設計，其中哪一個讓你最感震撼？為什麼這個論據對你特別有說服力？',
              '愛因斯坦說「我要知道神的想法，其他只是細節而已」。你在自己的生命中，有沒有過類似的渴望——想要知道宇宙背後那個更深的真理和意義？',
              '神的「七個必然特性」中，哪一個對你最難理解或最難相信？試著說明你的困難所在。',
              '宇宙論的核心問題是：宇宙有沒有一個「開始」？如果宇宙有開始，你個人認為這個事實對人生的意義有什麼影響？',
              '大衛在詩篇八篇仰望星空後說「人算什麼，你竟顧念他？」仰望浩瀚宇宙卻被神所顧念——這兩者的對比在你心裏引起了什麼感受？',
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
              <h4 className="font-semibold text-green-700 mb-2">🌌 仰望星空的禱告操練</h4>
              <p className="text-gray-700 mb-2">本週找一個晴朗的夜晚，抬頭仰望星空至少五分鐘，默念詩篇八篇 1-4 節或詩篇十九篇 1-4 節，讓宇宙的浩瀚在你心中激起對創造者的敬畏與感謝。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📝 記錄神的七個特性</h4>
              <p className="text-gray-700 mb-2">將神的七個必然特性寫在一張紙上，每天早晨花兩分鐘默想其中一個特性，思考這個特性在你今天的生活中具體意味著什麼。七天後你將過完一個完整的循環。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔭 與一位朋友分享宇宙論的科學發現</h4>
              <p className="text-gray-700 mb-2">從本章中選出最令你印象深刻的一個科學論點（如：彗星、太陽縮小、月球遠離），用自己的話向一位尚未信主的朋友分享這個論點，看看他們的回應，並以此作為一個自然的對話開始。</p>
              <p className="text-sm text-gray-500 italic">「諸天述說　神的榮耀，穹蒼傳揚祂的手段。」——詩篇十九篇 1 節</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
