import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book31Ch8() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">第八章</h1>
        <h2 className="text-xl font-semibold text-gray-700">地球大環境改變</h2>
        <p className="text-sm text-gray-500 mt-2">書頁 183–218</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-teal-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            {/* 聖經裏的明證 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">聖經裏的明證</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                當挪亞一家走出方舟，他們發現大地貌變了，就連天氣也改變了：赤道變成炎熱，兩極成了冰天雪地，地球開始產生冰河時期。聖經裏有四點可以在挪亞築壇獻祭時，　神所說的話語中清楚看見這些環境改變的明證：
              </p>
              <div className="space-y-3 mb-4">
                {[
                  { num: '（一）', text: '神允許人類開始吃肉，一改人昔日以蔬菜、水果為食的習慣；飲食方式的改變，暗示新環境需要獲取新的養分。果樹生長不易，足見地球氣候變差，人類需要宰殺生物為食。（創世記九章2至3節）' },
                  { num: '（二）', text: '神與人立虹為記，作為洪水不再滅全地的約定，這道虹在大洪水之前沒有出現過，現在卻突然在大洪水以後產生。這顯然是地球大氣層物理現象的改變——那層一度可以攔住宇宙輻射線的「水氣層」不在了，才能使光譜有反映對比的機會，如此彩虹才能顯現出來。（創世記九章12至17節）' },
                  { num: '（三）', text: '神賜福給人類繁殖多，遍滿全地，兩極以外冰層逐漸融化，海水高漲，將原來連接各島嶼的路徑逐漸淹沒，各大洲相繼被海洋分隔，人類和動物從此各守一方。（創世記九章1節）' },
                  { num: '（四）', text: '大洪水以後，挪亞活到950歲，其子閃活到600歲。閃的兒子亞法撒活了438歲，亞法撒的兒子沙拉活了433歲，希伯464歲，法勒239歲，拉吳239歲，西鹿230歲，拿鶴148歲，他拉205歲，亞伯拉罕175歲，以撒180歲，雅各147歲，約瑟110歲，足見人的壽命確實是在遞減中（見圖77）。' },
                ].map(({ num, text }, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-teal-600 font-bold flex-shrink-0">{num}</span>
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch8-fig76-rainbow.jpg" alt="圖76 彩虹光譜折射" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 76 — 當陽光由上方照射到雨珠裏，光線就會在水滴中折射分開成不同波長的顏色，於是光譜就顯現出來。</p>
              </div>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch8-fig77-lifespan.jpg" alt="圖77 大洪水前後壽命遞減圖" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 77 — 大洪水審判之前，人類可以活到九百多歲，但是在大洪水以後，人的壽命開始向下跌落，一直到一個新的壽命期才穩定下來。</p>
              </div>
            </div>

            {/* 地球的氣候改變 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">地球的氣候改變</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                大洪水審判以後，地球上的氣候確實不一樣了。　神在挪亞出方舟後第一次說到了「節令」這個詞字，並用希伯來文原文說：「地還存留的時候，稼種和收割、寒暑、冬夏、晝夜就永不停息了。」（創世記八章22節）。這「節令」的希伯來文 עֵת（eit）原文意思是眾節季的分別，就像日子分成七天一樣，並沒有直接指出「春暖、夏炎、秋爽、冬寒」的明顯分別。神這句話所要表示的是——地球的氣候要開始出現循環性的變化了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                今天我們目睹全球氣候的變化和季節性的風景，都是這些冷、熱空氣對流轉換所形成的結果。我們從下列圖表可以比較出大洪水審判前後氣候的不同：
              </p>
              <div className="overflow-x-auto mb-3">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr>
                      <th className="border border-teal-200 px-3 py-2 bg-teal-50 text-teal-700 font-semibold">大洪水審判以前</th>
                      <th className="border border-teal-200 px-3 py-2 bg-teal-50 text-teal-700 font-semibold">大洪水審判以後</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['全球氣候溫暖一致', '赤道炎熱、南極及高山頂冷'],
                      ['春、夏、秋、冬氣候變化不大', '春、夏、秋、冬氣候差異大'],
                      ['沒有颱風、颶風、龍捲風', '有颱風、颶風、龍捲風'],
                      ['沒有沙漠、也沒有冰雪', '有沙漠，也有冰雪'],
                      ['植物茂盛，樹木欣欣向榮', '植物面積減少，生長被抑制'],
                      ['果實產量很多', '果實產量減少'],
                    ].map(([before, after], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-teal-50/30'}>
                        <td className="border border-teal-100 px-3 py-2 text-gray-700">{before}</td>
                        <td className="border border-teal-100 px-3 py-2 text-gray-700">{after}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 冰河時期的開始 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">冰河時期的開始</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                這些氣候、地理、地形顯著的改變，再加上多度火山爆發的灰塵遮蔽了陽光，這樣就使得地球的溫度更加寒冷。水在華氏32度或攝氏零度的時候檢查成冰，於是大地帶來了「冰河時期」Ice Age。有人誤解這個冰河時期遍蓋了全球而且是期「兩百萬年」，這完全是一個錯誤的觀念。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                要造成「雪」，一定要有許多潮濕，可是在冷天空氣裏是乾的，怎麼會有大量的潮濕呢？而地球唯一可能在冷天產生潮濕的時候，就是在大洪水剛結束的這段時間，因為那時的海洋仍然是溫暖的。由大洪水第三章第25節的分析，我們知道大洪水時候的「大淵的泉源」所湧出的水經過地熱是溫暖的，海洋在大洪水以後一度是溫暖的。兩極的海水就在冷空氣下變成冰雪，再加上大洪水之後，冷空氣和熱空氣對流造成的風暴，更又將雪吹到過暖度較低的陸地上去。這樣，兩極的冷空氣、赤道溫暖的海洋、火山爆發的灰塵、地理地形的改變，這些因素加起來就造成冬天冰雪多、夏天氣溫較冷的現象——於是「冰河時期」就開始了。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch8-fig78-ocean-currents.jpg" alt="圖78 世界洋流地圖" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 78 — 地球上超過三分之二的面積為海水所遮蓋，紅線代表溫暖的潮流，藍線代表較冷的潮流，它們今天多半是沿著海岸線蜿蜒流動。</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                地球上現在有將近十分之一的地區被冰雪遮蓋，甚至赤道區域的高山上有的仍是冰雪所佔據。今天陸地上有將近 6,020,000 平方哩（即 15,600,000 平方公里）的面積為冰雪所遮蓋，面積相當於歐洲版圖的 1.48 倍左右。在積雪地區中，其中又以兩極大陸的冰雪最多，其積雪量佔全世界總雪量的 90% 左右。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch8-fig79-ice-coverage.jpg" alt="圖79 全球冰雪覆蓋地圖" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 79 — 今天全世界陸地上有將近 6,020,000 平方哩的面積為冰雪所遮蓋，圖中橘紅色的部分就是常年積雪的地帶。</p>
              </div>
            </div>

            {/* 冰河時期有多久 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">冰河時期有多久</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                前述討論的這個冰河時期它的日子到底有多久呢？我們從海洋冷卻的速度及地球上的物理現象推測，相信它是逐漸結束的。根據我的推測，冰河時期大約開始於距離今天 4,469 年前左右，又逐漸結束於距今大約 3,982 年前至 3,769 年前左右才全部結束，為期時間大約是 487 年至 700 年左右。由於這個冰河時期，海面大約下降 600 呎，今天的海底大陸棚應該就是昔日冰河時期的海岸線（見圖80）。這些大陸棚曾經把全世界各大洲連結在一起，人類及動物從上面經過毫不困難。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch8-fig80-continental-shelf.jpg" alt="圖80 冰河時期大陸棚海岸線地圖" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 80 — 在各大洲陸地的周圍，有一種海深較淺的「大陸棚」，它們非常可能是昔日冰河時期的海岸線，橘色的部分就是今天大陸棚的位置。</p>
              </div>
            </div>

            {/* 長毛象的千年之謎 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">長毛象的千年之謎</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                二十世紀末解謎其中一個就是長毛象了。這種長毛象至今已經絕跡，但是估計有 5,000,000 隻左右的長毛象掩埋在北西伯利亞的海岸線及阿拉斯加 Alaska 的千年冰層裏。這些長毛象有的仍然站立，嘴裏有的仍舊沒有消化，有的肉仍然很新鮮，甚至在緊急的時候，探險者的狗也可以吃這些內維生。長毛象的象牙完整無缺，所以人類很早就知道此地來挖掘象牙製作成藝術品了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                動物學家伊凡山德生 Ivan Sanderson 對長毛象所作的第一手實驗報告告訴我們：（一）長毛象是站立的，但牠的腰骨都是折斷的。（二）牠外表完整無缺，兩旁長長的毛沒有一點損傷。（三）牠的嘴裏的食物是新鮮的，好像不久前還是活著的，當火碰到肉的時候開始發現腐爛的跡象，牠嘴裏的東西還沒有開始消化分解。（四）牠的嘴裏還有毛茸茸的奶油色嫩草，而且還在正在咀嚼一半。根據伊凡自己的記錄，他說：「我幾乎完全改變我原來的看法。」他認為是有某種突然的災變造成這些動物立即死亡。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                由長毛象胃中植物的分析，我們知道這些植物只有在溫帶或氣候才有。長毛象的周圍也發現楊柳的枝葉，更證明這些長毛象居住的地區原是溫帶氣候。像長毛象這麼巨大的動物，每天至少需要幾百磅的食物，而發現這五百萬隻長毛象的地方，幾乎找不著什麼稱得上植物可以吃的，可見牠們西伯利亞、北極附近原是溫帶植物茂盛的地方。此外，長毛象也不是寒帶的動物，因為動物在寒帶不是因為毛的長短，而是有沒有「脂肪層」禦寒。長毛象像今天大象一樣，沒有「脂肪層」，所以長毛也不代表牠就是生活在寒冷的地方了。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch8-fig81-mammoth.jpg" alt="圖81 長毛象" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 81 — 長毛象雖然長了長毛，但是身上卻沒有禦寒的「脂肪腺」，由牠們胃中的植物可以知道長毛象是在氣候溫暖的地區裏活動。</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                要把這麼大型的動物在幾小時之內就急速冷凍，必須要在幾小時之內「冰凍」一隻象並不是簡單的事情，一般的大冰庫要冰凍這麼大的生物至少需要幾天的時間，如果要在幾小時之內，必須要在攝氏零下 150 度的溫度才可能到達。不但如此，這種氣候必須是在未防備的情況下死亡，才可以保持食物不腐化。也就是說，在這數數萬隻長毛象同時活著的時候，一旦天氣突然急驟在幾小時內就冰凍起來，才有可能解釋如此的現象。唯一可能發生這種現象的時期，就只有大洪水前「天上的窗戶也敞開了 3」的那段時期被冰凍起來的。
              </p>
            </div>

            {/* 幾個可能的理論 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">幾個可能的理論</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                在幾年以前，我就聽過幾位科學家講論地球旋轉太陽運轉的問題，他們說覺得目前地球的南北極偏離垂直太陽運轉 23.5 度運轉，可是按照物理學的原則推測，地球本應該是和太陽垂直的，也就是說，地球很可能遭受某種外力撞擊而使傾斜到今天的樣子。我們在本書第二章也討論過地球磁場的問題，科學家湯姆巴恩斯 Thomas Barnes 曾證明地球磁場每 1,400 年就遞減一半的磁場強度，也就是說 1,400 年前磁強度是今天的兩倍，2,800 年前就是今天磁場的四倍，那麼距離今天大約有 4,470 年的大洪水時期，地球磁場應該是今天磁場的八倍以上。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch8-fig82-magnetic-field.jpg" alt="圖82 地球磁場與范艾倫輻射帶" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 82 — 磁場為地球形成磁氣圈來阻擋太陽風侵害到地面上，圖中黃色代表太陽風 Van Allen 輻射帶，橘色為磁氣圈，藍色為太陽風的方向。</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                地球本身之所以會有磁場，很可能是因為地心液態金屬流轉產生電流的原故。這個磁場使得地球成為一個巨大的磁鐵，因此北極成為北磁極，南極就成為南磁極。這種磁氣圈 Magnetosphere 伸展到太空大約 37,000 哩（即 59,544 公里）左右的範圍，它能為地球攔住太陽散發出來帶電的粒子流——太陽風。即使有些太陽風會穿過磁氣圈，磁氣圈裏面的范艾倫輻射帶可以完全阻擋它們來到地球上（見圖82）。這個「水氣層」的保護已被大洪水撞碎後，而地球的磁場仍然可以攔截很大一部分宇宙射線，保護地球上的生命。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                綜合以上幾點，再加上本書第六章討論過的彗星撞擊地球可能性，我們可以提出一個問題：會不會在大洪水審判的同時，某些效應曾經發生一起呢？也就是說，　神憑著祂全能的主權，使得彗星雨落在「水氣層」上，大洪水時期的大型彗星冰球碎在「水氣層」，使得兩極磁場被大量吸收下來的氣體灌吹到南、北兩極，造成北極附近華氏零下 150 度的冰雪，幾分鐘內冰凍了幾百萬頭長毛象及一些動物？同時，因為彗星冰球碎在兩極磁場附近，也造成地球旋轉軸的傾斜由直角傾斜到今天的樣子？
              </p>
              <p className="text-gray-700 leading-relaxed">
                但是我們也必須指出另一種可能：以上這些假設都不是事情發生的真相，或許　神在創世的時候，就故意使得地球旋轉軸心傾斜 23.5 度，如此使世界各地都能得到陽光照射到，或者在大洪水審判之時，　神用絕全能的能力，只用一句話就改變了地球旋轉的方式。大洪水審判的真相究竟如何，我們現在在無法用目前所知的資料去完全知道，　神既然全在、全知、全能，神所使用的方法可能是遠遠超過我們所能想像得到的。
              </p>
            </div>

            {/* 中國遼寧省有羽恐龍解謎 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">中國遼寧省「有羽恐龍」解謎</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                既然討論到長毛象，我覺得有必要再來研究中國遼寧省的一批所謂「有羽恐龍」。陸續從 1994 年到 1999 年出土的這些矽化石，一直在學術界引起很大的爭議，這些化石在某些地方和「史祖鳥」Archaeopteryx 類似（比較本書第一章圖3），但是翅膀長度和羽毛組織與一般的鳥類有所分別，於是考古學家就給牠們取了各種不同的名字。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在這些被稱為「孔夫子鳥」Confuciusornis 的化石（見圖83）中，牠與「史祖鳥」不同的地方是在牠的嘴裏完全沒有齒，尾骨短小，牠的身體大小像麻雀般喜鵲，又因為牠們是群居的生物，我根據各種資料上觀察，我認為牠們實際上就是鳥類，根本不是進化來的恐龍類。接著我們看 1996 年在同一沉積層發掘出來的「中國有羽恐龍」Sinosauropteryx，從化石來看，牠有強而有力的腿部，大小像雙雞，尾巴幾乎有身體的兩倍長，尾巴骨節有 64 個椎骨比一般 Theropod 類的恐龍還要多，牠沒有翅膀，只有兩隻很小的前腿，但化石上上牠的外表有些像野獸的絨毛（見圖84）。雖然牠被稱命名為「有羽恐龍」，可是牠身上的絨毛只是一般動物的毛髮，並不是鳥類那種可以承受氣體流動的羽毛，而且牠的手及腰骨仍然是恐龍的前爪，並沒有鳥類的任何特徵，所以我根據各種角度研究，判斷牠仍然是隻恐龍，並不是鳥類。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch8-fig83-confuciusornis.jpg" alt="圖83 孔夫子鳥化石" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 83 — 這是兩隻被命名為「孔夫子鳥」的化石，左邊的大概是雄鳥，有兩隻長尾羽毛，右邊的大概是雌鳥，體積比較小。</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                我相信還會有更多的所謂「有羽恐龍」被不斷挖掘出來，所以我們必須在此對這些化石作進一步的討論。我的研究後發現有七個理由可以說明這些化石仍是恐龍而非鳥類：（一）這些化石所在的地層是比「史祖鳥」晚所謂的「三千萬年」——如果這些化石代表早期鳥類的祖先，為何會比「史祖鳥」更晚的「三千萬年」呢？這種說法豈不自相矛盾？（二）在這些被挖掘出化石的地層裏，同時也出土了許多哺乳類，如烏龜、青蛙、鱷魚、魚類、哺乳類等等各種生物，牠們都是同時一起死亡的，在所謂「一億兩千萬年前」的地層裏，為何也有哺乳類呢？（三）這些化石太過多種多樣性，只使用「神的創造各從其類」的觀念，就可以將各種類類類別解釋得清楚而符合事實。
              </p>
            </div>

            {/* 何以有些動物在洪水後絕跡 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">何以有些動物在洪水後絕跡</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                在大洪水審判之後挪亞一家宣告：「凡地上的走獸，和空中的飛鳥，都必驚恐、懼怕你們；連地上一切的昆蟲，並海裏一切的魚，都交付你們的手。」（創世記九章2節）。人正常的管理地上的動物，然而大洪水以後過了這四千多年以來，人類竟使用無數的物種絕滅，乃至於進化論的學者竟以為這些是「物種天擇」的結果。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                人類有時候為了肉食大量屠殺反抗能力的動物（如 Dodo 鳥等），有的人甚至為了獲取動物的毛皮、牙齒（如老虎、大象、犀牛等），很可能無數已經絕跡的生物也曾進了方舟，但是後來因為這些因素被徹底殺絕了。在十九世紀末來推進化論以前，人類歷史文獻中提到太多我們今天認為是所謂「幾億萬年的遠古生物」，這些生物充其量不過是絕種而已，並不是其他生物的祖先。
              </p>
            </div>

            {/* 大地的森林在萎縮與暴風災害 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">大地的森林在萎縮與二十世紀暴風的災害</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                不僅空氣在被工業產品污染，1998 年生態學家曾作統計，發現目前地球上的森林已經消失了三分之二，近來巴西亞馬遜熱帶森林的濫墾、印尼叢林火災、許多國家濫伐森林和土壤流失，如果繼續惡化下去，地球上的生物就會減少一百種物種。大自然有如地球生物的糧倉，過去取之不盡，用之不竭，近年來世界人口急速地增加，在跨入21世紀之前，人類增加的數量已經超過六十億！
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們知道目前地球以365天5小時48分46秒的速度環繞太陽一週，而每天地球由西向東自轉的時候，各地的風向也因緯度的不同而有所分別（見圖87）。不僅如此，大洪水審判以後，全球各地緯度的氣溫有了顯著的不同，於是冷空氣下沉變成高氣壓，溫暖的空氣上升造成低氣壓，這就造成大洪水以後人類前所未見的天氣變化，特別是在太平洋西北區域的颱風 Typhoons（發生在 4 月至12月）、在澳洲以北的暴風 Cyclones（發生在 12 月至 4 月）、大西洋的颶風 Hurricanes（發生在 8 月至 10 月）、太平洋東區的颶風 Hurricanes（發生在 6 月至 10 月）。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch8-fig87-wind-map.jpg" alt="圖87 全球風向地圖" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 87 — 橘色代表大自然的風向，它們大致上分成赤道到緯度30°、緯度30°到60°、緯度60°到南北極等六個區域，赤道附近有時候會成無風地帶。</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                在二十世紀因為暴風或洪水造成嚴重的損失並不比從前少：1906年9月颶風擊中香港造成大約一萬人不幸死亡；1911年9月中國大陸長江氾濫造成十萬餘人不幸死亡；1970年11月12日颶風擊孟加拉 Bangladesh 暴風造成三十萬到五十萬人不幸死亡；1989年4月26日孟加拉又發生龍捲風而造成一千三百餘人不幸死亡，另有大約五百萬人無家可歸；1998年颶風擊中美洲造成 9,745 人不幸死亡，大約有兩百五十萬餘人無家可歸。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch8-fig89-hurricane.jpg" alt="圖89 颶風衛星圖" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 89 — 颶風、颶風或暴風它們都是熱帶性的快速旋轉氣流，它們從上往下看都看來是這樣的形狀，在中間風速較小，其餘部分為暴風所遮蓋。</p>
              </div>
            </div>

            {/* 聖經中清楚的警告 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">聖經中清楚的警告與信　神的人無所畏懼</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                主耶穌曾警告我們祂再回來審判世界的預兆，其中幾項和天文及地球上的環境有關。祂說：「日月星辰要顯出異兆，地上的邦國也有因海洋中的波濤聲浪，就茫然不知所措，天象都嚇得魂不附體，那時，他們要看見人子，有能力、有大榮耀，駕著降臨。一有這些事，你們就當昂首挺胸，因為你們得救的日子近了。」（路加福音二十一章25至28節）。詩篇九十一篇記著：「你必不怕黑夜的驚嚇，或是白日飛的箭，或是午間的災害。雖有千人仆倒在你旁邊，萬人僕倒在你右邊，這災卻不得臨近你。」（詩篇九十一篇5至7節）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                　神在祂的話語裏，不斷地藉著聖經來提醒我們祂的同在與保守。詩篇二十三篇大衛說：「我雖然行過死蔭的幽谷，也不怕遭害，因為你與我同在；你的杖，你的竿，都安慰我。」（詩篇二十三篇3至4節）。詩篇九十一篇記著：「你必不怕黑夜的驚嚇，或是白日飛的箭，或是午間滅人的瘟疫，或是午間的災害，雖有千人仆倒在你旁邊，萬人仆倒在你右邊，這災卻不得臨近你。」（詩篇九十一篇5至7節）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                既然天上地下所有的權柄都是屬於主耶穌基督的，我們還害怕什麼呢？我們選擇來服侍　神，奉父子聖靈的名，給他們施洗，凡我所吩咐你們的，都教訓他們遵守，我就常與你們同在，直到世界的末了（馬太福音二十八章18至20節）。面對這個世界各地的自然災害，我們仍然不要害怕，因為主耶穌說：「那殺身體、不能殺靈魂的，不要怕他們。」（馬太福音十章28節）。
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
                '大洪水後地球環境發生四大改變（聖經明證）：飲食從素食轉為可食肉、彩虹第一次出現（水氣層消失）、人口分散各洲（冰河後陸橋斷裂）、壽命急劇遞減——從挪亞950歲到約瑟110歲，直接印證了水氣層保護的喪失。',
                '水氣層消失是最根本的環境改變：大洪水前溫暖均一的全球氣候，大洪水後變成赤道炎熱、兩極嚴寒、出現沙漠、季節分明；水氣層不僅維持氣候，更阻擋宇宙射線——失去這層保護，人體細胞加速老化，壽命直線下降。',
                '冰河時期是大洪水的直接後果：溫暖的大洪水後海洋 + 火山灰塵阻擋陽光 = 大量降雪 → 冰河時期（約始於4,469年前，歷時487-700年），海平面下降600呎，今天的大陸棚就是當時的海岸線，各大洲曾藉此相連。',
                '長毛象之謎指向大洪水：500萬頭站立冷凍的長毛象、胃中未消化的溫帶植物、無禦寒脂肪層卻出現在西伯利亞——唯一合理的解釋是大洪水時期「天上的窗戶敞開」之際，超低溫氣流在幾小時內急速冷凍了牠們。',
                '中國遼寧「有羽恐龍」並非鳥類祖先：七個理由說明孔夫子鳥是真正鳥類、中國有羽恐龍仍是恐龍；這些化石所在地層同時含有哺乳類（應比恐龍「晚演化」），反而揭示這是大洪水同時埋葬不同生物的結果，而非進化的時間序列。',
                '面對地球大環境的惡化，信神的人不必懼怕：颶風、暴風等自然災害是大洪水後地球環境改變的結果，但詩篇二十三篇和九十一篇宣告神的保守，主耶穌應許「我就常與你們同在，直到世界的末了」——這是今日環境危機中最穩固的錨。',
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
              <h4 className="font-semibold text-gray-800 mb-2">壽命遞減與科學——端粒、輻射與老化</h4>
              <p className="text-gray-700 leading-relaxed">現代科學已知端粒（Telomere）是染色體末端的保護結構，每次細胞分裂後端粒就縮短一些，縮短到極限後細胞便停止分裂、進入老化。宇宙射線（包括太陽風中的高能粒子）會加速 DNA 損傷和端粒縮短。水氣層作為「電磁保護盾」消失後，地表宇宙射線輻射量大幅增加，直接加速了人體細胞老化的速率，這在生物物理學上是完全合理的機制。大洪水後壽命從950歲到幾百歲再到100歲左右的曲線，與「輻射劑量累積效應」的數學模型驚人吻合。這不只是聖經的記載，更是可以從科學角度解讀的歷史現象。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">地球磁場衰減——年輕地球的科學證據</h4>
              <p className="text-gray-700 leading-relaxed">湯姆巴恩斯（Thomas Barnes）的研究顯示地球磁場每1,400年遞減一半。若地球如進化論所說有46億年歷史，那磁場早就應該消失了——事實上，以目前衰減速率反推，地球不可能超過數萬年。今日地球磁場已比1835年（人類首次精確測量）衰減了約10%，按此速率推算，地球磁場只能再維持數千年。這與年輕地球模型（約6,000年）完全吻合，卻使46億年的假設面臨嚴重困難。這是從物理學角度對進化論時間表的直接挑戰。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「恐龍」在人類歷史記載中——聖經中的「海怪」與各地龍的傳說</h4>
              <p className="text-gray-700 leading-relaxed">進化論將恐龍絕滅定於6,500萬年前，但人類歷史文獻卻記載了大量「龍」的目擊：中國數千年的龍文化、歐洲中世紀的屠龍故事、聖經約伯記四十章描述的「河馬」和「鱷魚」（希伯來文為 בְּהֵמוֹת Behemoth 和 לִוְיָתָן Leviathan），其描述細節（尾巴像香柏樹、口中噴火）遠超一般動物。大量古代壁畫、雕刻也描繪了酷似恐龍的生物。如果恐龍在6,500萬年前就已絕滅，這些記載又該如何解釋？更合理的推斷是：許多恐龍進入了方舟，大洪水後與人類共存了一段時期，才逐漸因環境改變和人類獵殺而滅絕。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">全球暖化——大洪水遺留的長期效應</h4>
              <p className="text-gray-700 leading-relaxed">今天科學界熱烈討論的全球暖化，其實可以從大洪水後的環境演變來理解：水氣層消失→太陽熱量直接到達地表→地球逐漸升溫→冰河融化→海平面上升。這個趨勢是大洪水後環境演變的延續，而非純粹由人類的工業活動引起（雖然人類活動確實加速了這個過程）。聖經在創世記九章說神不再用洪水滅地，但沒有說地球環境不會繼續惡化。今日環境危機的根源，是在伊甸園的墮落和大洪水審判所留下的雙重遺產——這呼喚人類以管家的責任看待地球，而非以主人的態度濫用資源。</p>
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
              '大洪水後人的壽命從900多歲直線下滑到100歲左右，這告訴我們什麼？如果你知道自己只有100年的生命，你會怎樣重新分配時間和精力？',
              '彩虹是大洪水審判後「水氣層消失」的證據，同時也是神與人立約的記號。下次看到彩虹時，你會想到什麼？神的審判與神的恩典在同一個符號裏共存，這對你意味著什麼？',
              '長毛象的謎題（500萬頭急速冷凍的溫帶動物出現在北極）至今仍無進化論的合理解釋，但大洪水模型可以解釋。當科學發現和進化論假設相衝突時，你會如何分辨哪一個更接近真相？',
              '本章提到人類濫殺動物、砍伐森林，導致大量物種絕滅——這是神賜下「管理地球」使命的失職。你認為基督徒應該如何看待環保議題？信仰和環保責任有什麼關係？',
              '面對颶風、暴風、地震等自然災害，你通常的第一反應是什麼？本章引用詩篇九十一篇的應許，這些應許對你的恐懼有實際的幫助嗎？為什麼有或為什麼沒有？',
              '「神全能的主權從未改變」——歷史上神曾使太陽停止運行（約書亞記十章13節）、使日晷倒退十度（以賽亞書三十八章8節）。這些神蹟讓你對今天面臨的難題有什麼新的看見？',
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
              <h4 className="font-semibold text-green-700 mb-2">🌈 用彩虹默想神的約</h4>
              <p className="text-gray-700 mb-2">本週若看見彩虹（或刻意尋找彩虹的圖片），花一分鐘默想：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>彩虹提醒神的審判已過（大洪水），也提醒神的恩典長存（不再用洪水滅地）。</li>
                <li>耶穌十字架是「終極的彩虹」——神的審判與神的憐憫在十字架上同時彰顯。</li>
                <li>把這個思考寫下來，與家人或朋友分享。</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 背誦詩篇九十一篇1-4節</h4>
              <p className="text-gray-700 mb-2">在充滿環境危機和自然災害的時代，把神的應許存入心中：</p>
              <div className="bg-green-50 p-3 rounded-lg mb-2">
                <p className="text-gray-700 text-sm italic leading-relaxed">「住在至高者隱密處的，必住在全能者的蔭下。我要論到耶和華說：他是我的避難所，是我的山寨，是我的神，是我所倚靠的。他必救你脫離捕鳥人的網羅，和毒害的瘟疫。他必用自己的翎毛遮蔽你，你也可以投靠在他的翅膀底下，他的誠實是大小的盾牌。」（詩篇九十一篇1-4節）</p>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>每天早晨大聲朗讀一遍，持續一週。</li>
                <li>遇到恐懼或焦慮的時候，默念這段話。</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🌿 一個具體的環保行動</h4>
              <p className="text-gray-700 mb-2">本章提到地球森林萎縮、物種絕滅是人類管理失職的結果。本週選擇一個具體行動：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>減少一次性塑料使用（帶環保袋、自備水杯）</li>
                <li>種一棵植物或澆灌一棵樹</li>
                <li>與家人討論「基督徒的環保責任」，從創世記一章28節出發</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 禱告</h4>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-gray-700 leading-relaxed italic text-sm">
                  「主啊，感謝祢讓我看見大洪水後地球環境改變的全貌——祢的審判是真實的，祢的恩典也是真實的。感謝祢在彩虹中留下祢的記號，提醒每一代人祢信實的約。面對今日的環境危機、自然災害和世界的動盪，求祢幫助我不要懼怕，要仰望祢全能的主權。提醒我作忠心的地球管家，珍惜祢所創造的萬物，不以己私心濫用祢的恩賜。當這世界向下滑落的時候，求祢幫助我「昂首挺胸，因為我得救的日子近了」。奉主耶穌的名禱告，阿們。」
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
