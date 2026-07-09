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
                當挪亞一家走出方舟，他們發現大地貌變了，就連天氣也改變了：赤道變成炎熱，兩極成了冰天雪地，地球開始產生冰河時期。那層一度可以攔住宇宙輻射線的「水氣層」不在了，有害的輻射線使人的細胞老化，再加上各種其他的因素，人的壽命就開始向下跌落，一直到一個新的壽命期才穩定下來。聖經裏有四點可以清楚看見這些環境改變的明證：
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
                大洪水審判以後，地球上的氣候確實不一樣了。　神在挪亞出方舟後第一次說到了「節令」，用希伯來文原文說：「地還存留的時候，稼種和收割、寒暑、冬夏、晝夜就永不停息了。」（創世記八章22節）。這「節令」的希伯來文 עֵת（eit）原文意思是眾節季的分別，就像日子分成七天一樣，並沒有直接指出「春暖、夏炎、秋爽、冬寒」的明顯分別。神這句話所要表示的是——地球的氣候要開始出現循環性的變化了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">水氣層消失的後果，我們從下列圖表可以比較出大洪水審判前後氣候的不同：</p>
              <div className="overflow-x-auto mb-3">
                <table className="w-full border-collapse" style={{ fontSize: 'calc(1em - 8px)' }}>
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
                這些氣候、地理、地形顯著的改變，再加上多度火山爆發的灰塵遮蔽了陽光，這樣就使得地球的溫度更加寒冷。水在華氏32度或攝氏零度的時候結成冰，於是大地帶來了「冰河時期」Ice Age。有人誤解這個冰河時期遍蓋了全球而且是期「兩百萬年」，這完全是一個錯誤的觀念。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                要造成「雪」，一定要有許多潮濕，可是在冷天空氣裏是乾的，怎麼會有大量的潮濕呢？而地球唯一可能在冷天產生潮濕的時候，就是在大洪水剛結束的這段時間，因為那時的海洋仍然是溫暖的。兩極的海水就在冷空氣下變成冰雪，再加上大洪水之後，冷空氣和熱空氣對流造成的風暴，更又將雪吹到暖度較低的陸地上去。這樣，兩極的冷空氣、赤道溫暖的海洋、火山爆發的灰塵、地理地形的改變，這些因素加起來就造成冬天冰雪多、夏天氣溫較冷的現象——於是「冰河時期」就開始了。
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

            {/* 南極和北極的奧秘 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">南極和北極的奧秘</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                為了能深討前述這些問題，我曾仔細研究南、北兩極：發現南極大陸平均有 6,600 呎的冰層，有些地方冰雪甚至積到 14,000 呎的厚度，這就是全世界 90% 左右的冰雪所在。至於北極方面，因為該區主要是由北極海所構成，北極海平均深度只有 4,365 呎左右，雖然在北極附近近可以找到浮冰飄，但這些浮冰受到海洋溫度的影響，最多只有 300 呎的厚度。反而在北極海周圍的陸地（如西伯利亞、阿拉斯加、加拿大、冰島、芬蘭及挪威北部等地），冰層的厚度積累得比較多。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在人類還沒進入北極及南極研究以前，誰能知道　神有關冰雪的奧秘呢？冰山 Iceberg 脫離冰河漂流入海面上，科學家估計冰山的年齡不會超過五千歲，實際上它們的年齡應該最多只有 4,469 歲左右才對。就是在今天，人對大自然的許多現象都知道得很少。　神回答約伯的話語：
              </p>
              <div className="bg-teal-50 border-l-4 border-teal-400 p-4 rounded-r-lg mb-3">
                <p className="text-gray-700 leading-relaxed italic text-sm">
                  「你曾進入雪庫，或見過我為困難和爭戰之日所藏的冰雹嗎？光在何處分開，東風由何處分散在地上呢？誰為大雨開了河道，為雷電開了道路？使雨降在無人之地、無人居住的荒野，使荒廢淒涼之地得以滋潤，使青草生長出來呢？雨有父嗎？露水珠是誰生的呢？冰出於誰的胎？天上的霜是誰生的呢？諸水濃結、堅硬如石，深淵之面也凝結成冰了。」
                </p>
                <p className="text-sm text-teal-700 mt-2 font-medium">——約伯記三十八章22至30節</p>
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
                二十世紀末解謎其中一個就是長毛象了。這種長毛象至今已經絕跡，但是估計有 5,000,000 隻左右的長毛象掩埋在北西伯利亞的海岸線及阿拉斯加 Alaska 的千年冰層裏。這些長毛象有的仍然站立，嘴裏有的仍舊沒有消化，有的肉仍然很新鮮，甚至在緊急的時候，探險者的狗也可以吃這些肉維生。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                動物學家伊凡山德生 Ivan Sanderson 對長毛象所作的第一手實驗報告告訴我們：（一）長毛象是站立的，但牠的腰骨都是折斷的。（二）牠外表完整無缺，兩旁長長的毛沒有一點損傷。（三）牠的嘴裏的食物是新鮮的，好像不久前還是活著的，當火碰到肉的時候開始發現腐爛的跡象，牠嘴裏的東西還沒有開始消化分解。（四）牠的嘴裏還有毛茸茸的奶油色嫩草，而且正在咀嚼一半。根據伊凡自己的記錄，他說：「我幾乎完全改變我原來的看法。」他認為是有某種突然的災變造成這些動物立即死亡。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                由長毛象胃中植物的分析，我們知道這些植物只有在溫帶氣候才有。像長毛象這麼巨大的動物，每天至少需要幾百磅的食物，而發現這五百萬隻長毛象的地方，幾乎找不著什麼稱得上植物可以吃的，可見牠們西伯利亞、北極附近原是溫帶植物茂盛的地方。此外，長毛象也不是寒帶的動物，因為動物在寒帶不是因為毛的長短，而是有沒有「脂肪層」禦寒。長毛象像今天大象一樣，沒有「脂肪層」，所以長毛也不代表牠就是生活在寒冷的地方了。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch8-fig81-mammoth.jpg" alt="圖81 長毛象" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 81 — 長毛象雖然長了長毛，但是身上卻沒有禦寒的「脂肪腺」，由牠們胃中的植物可以知道長毛象是在氣候溫暖的地區裏活動。</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                要把這麼大型的動物在幾小時之內就急速冷凍，必須要在攝氏零下 150 度的溫度才可能到達。不但如此，這種冰凍必須是在牠們毫無防備的情況下發生，才可以保持食物不腐化。唯一可能發生這種現象的時期，就只有大洪水時「天上的窗戶也敞開了」的那段時期。
              </p>
            </div>

            {/* 幾個可能的理論 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">幾個可能的理論</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                科學家湯姆巴恩斯 Thomas Barnes 曾證明地球磁場每 1,400 年就遞減一半的磁場強度，那麼距離今天大約有 4,470 年的大洪水時期，地球磁場應該是今天磁場的八倍以上。地球本身之所以會有磁場，很可能是因為地心液態金屬流轉產生電流的原故。這個磁氣圈 Magnetosphere 伸展到太空大約 37,000 哩左右的範圍，它能為地球攔住太陽散發出來帶電的粒子流——太陽風。即使有些太陽風會穿過磁氣圈，磁氣圈裏面的范艾倫輻射帶可以完全阻擋它們來到地球上（見圖82）。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch8-fig82-magnetic-field.jpg" alt="圖82 地球磁場與范艾倫輻射帶" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 82 — 磁場為地球形成磁氣圈來阻擋太陽風侵害到地面上，圖中黃色代表太陽風 Van Allen 輻射帶，橘色為磁氣圈，藍色為太陽風的方向。</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                此外目前地球的南北極偏離垂直太陽運轉 23.5 度，按照物理學的原則，地球本應該是和太陽垂直的，也就是說，地球很可能遭受某種外力撞擊而使傾斜到今天的樣子。綜合以上幾點，再加上本書第六章討論過的彗星撞擊地球可能性，我們可以提出問題：　神憑著祂全能的主權，使得彗星雨落在「水氣層」上，大型彗星冰球碎在「水氣層」，使得兩極磁場被大量氣體灌吹到南、北兩極，造成北極附近華氏零下 150 度的冰雪，幾分鐘內冰凍了幾百萬頭長毛象？
              </p>
              <p className="text-gray-700 leading-relaxed">
                但是我們也必須指出另一種可能：或許　神在創世的時候，就故意使得地球旋轉軸心傾斜 23.5 度，如此使世界各地都能得到陽光照射，或者在大洪水審判之時，　神用絕全能的能力，只用一句話就改變了地球旋轉的方式。至今我們仍可確定的有五點：（一）　神確實曾使用祂全能的方式施行大洪水審判。（二）聖經上有關大洪水審判的記錄完全是正確的。（三）大洪水之後由於地球環境改變就生了冰河時期。（四）這冰河時期很可能是在大洪水審判之後 487 年至 700 年就結束了。（五）長毛象並不是在「冰河時期」死亡的，牠們很可能是在大洪水審判前「大淵的泉源裂開了，天上的窗戶也敞開了」的那段時期被冰凍起來的。
              </p>
            </div>

            {/* 神全能的主權從未改變 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">神全能的主權從未改變</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                　神在歷史中改變地球旋轉方式的例子有很多：以色列隊在迦南南五王聯軍爭戰的時候，　神垂聽約書亞的禱告，使得太陽停止在基遍，月亮止在亞雅崙谷，「日頭在天當中停住，不急速下落，約有一日之久」（約書亞記十章8至14節）。　神又重顯以色列王希西家的禱告「叫亞哈斯的日晷，向前進的日影往後退十度」（以賽亞書三十八章8節）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                還有各有些聖經學者在爭執約書亞記這節記述的意義，企圖將這段聖經改成別的意思。但是他們無論怎樣去牽強解釋，從上、下文來看，這段希伯來文並沒有任何其不可能的含義。在我看來，　神確實曾使地球停住一日之久，又曾在希西家王時使日影倒轉回去十度。誰能說　神不可能這樣作呢？
              </p>
              <p className="text-gray-700 leading-relaxed">
                大哉！　神的奧秘能潤透嗎？誰能限定　神的作為？我只能像約伯一樣回答：「我知道你萬事都能作，你的旨意不能攔阻。誰用無知的言語使你的旨意隱藏呢？這些事太奇妙，是我不知道的，求你指示我。」（約伯記四十二章2至4節）。
              </p>
            </div>

            {/* 複製長毛象不能解決問題 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">複製長毛象不能解決問題</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                1997 年，一位牧場農家的九歲男孩，在西伯利亞的冰原發現一隻保存「異常完好」的長毛象。1999 年 10 月，美國的科學家與荷蘭、法國和俄國的科學家合作，計劃獲取這隻長毛象的基因複製成一隻活的長毛象——先把長毛象的 DNA 植入一顆已經去除原有基因的亞洲象卵子裏，然後以現代大象方式孕育再生出來。
              </p>
              <p className="text-gray-700 leading-relaxed">
                我相信使用這項實驗即使成功，人們對長毛象集體死亡的真正原因仍然是一知半解。人類如果習慣認為長毛象是生活在所謂「兩萬三千年前的遠古生物」，否認大洪水審判的史實，就無法在 21 世紀被糾正過來。我們祈禱　神使人們的眼睛打開，能看清楚這些事情的真實面目。
              </p>
            </div>

            {/* 中國遼寧省有羽恐龍解謎 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">中國遼寧省「有羽恐龍」解謎</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                既然討論到長毛象，我覺得有必要再來研究中國遼寧省的一批所謂「有羽恐龍」。陸續從 1994 年到 1999 年出土的這些矽化石，一直在學術界引起很大的爭議，這些化石在某些地方和「史祖鳥」Archaeopteryx 類似，但是翅膀長度和羽毛組織與一般的鳥類有所分別。這些沉積層涵蓋達二十平方哩左右，厚度大約是一百哩，老古考學家估計是所謂「一億兩千萬年前」的地層。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在這些被稱為「孔夫子鳥」Confuciusornis 的化石（見圖83）中，牠與「史祖鳥」不同的地方是在牠的嘴裏完全沒有齒，尾骨短小，牠的身體大小像麻雀或喜鵲，又因為牠們是群居的生物，我根據各種資料上觀察，我認為牠們實際上就是鳥類，根本不是進化來的恐龍類。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch8-fig83-confuciusornis.jpg" alt="圖83 孔夫子鳥化石" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 83 — 這是兩隻被命名為「孔夫子鳥」的化石，左邊的大概是雄鳥，有兩隻長尾羽毛，右邊的大概是雌鳥，體積比較小。</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                接著我們看 1996 年在同一沉積層發掘出來的「中國有羽恐龍」Sinosauropteryx，從化石來看，牠有強而有力的腿部，大小像隻雞，尾巴幾乎有身體的兩倍長，尾巴骨節有 64 個椎骨比一般 Theropod 類的恐龍還要多，牠沒有翅膀，只有兩隻很小的前腿，但化石上牠的外表有些像野獸的絨毛（見圖84）。雖然牠被命名為「有羽恐龍」，可是牠身上的絨毛只是一般動物的毛髮，並不是鳥類那種可以承受氣體流動的羽毛，而且牠的手及腰骨仍然是恐龍的前爪，並沒有鳥類的任何特徵，所以我判斷牠仍然是隻恐龍，並不是鳥類。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch8-fig84.jpg" alt="圖84 中國有羽恐龍 Sinosauropteryx 化石" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 84 — 這是被命名為「中國有羽恐龍」的化石，從各種資料顯示牠是隻恐龍，是鳥類和恐龍之間「失落的鎖環」。</p>
              </div>
            </div>

            {/* 恐龍仍是恐龍而鳥仍是鳥 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">恐龍仍是恐龍而鳥仍是鳥</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                我相信還會有更多的所謂「有羽恐龍」被不斷挖掘出來，所以我們必須在此對這些化石作進一步的討論。我的研究後發現有七個理由可以說明這些化石仍是恐龍而非鳥類：
              </p>
              <div className="space-y-3 mb-4">
                {[
                  { num: '（一）', text: '大自然中有許多會飛的或是會滑翔的生物，如一般的飛蝙蝠、在雨林中滑翔的飛鼠、海中的飛魚、花叢中的蝴蝶及會飛的昆蟲等等，從來沒有任何現象顯示牠們是「鳥類的祖先」。所述這些生物都不是由演化而來的，原來是　神在創造牠們的時候，就賦與了這樣的形狀。' },
                  { num: '（二）', text: '　神所創造的鳥類中，很多並不會飛。紐西蘭的無翼鳥 Kiwi，在十八世紀就被水手捕殺絕跡的古代巨鳥 Dodo 等等。說腳部強壯就是恐龍演化成鳥的論據，那麼腳部強壯的鴕鳥、企鵝也是從恐龍演化來的嗎？' },
                  { num: '（三）', text: '這些被挖掘出化石的地層是比「史祖鳥」晚所謂的「三千萬年」——如果這些化石代表早期鳥類的祖先，為何會比「史祖鳥」更晚的「三千萬年」呢？這種說法豈不自相矛盾？' },
                  { num: '（四）', text: '在這些被挖掘出化石的地層裏，同時也出土了許多哺乳類，如烏龜、青蛙、鱷魚、魚類、哺乳類等等各種生物，牠們都是同時一起死亡的。在所謂「一億兩千萬年前」的地層裏，為何也有哺乳類呢？按進化論說哺乳類是在恐龍之後才演化出來的，難道「一億兩千萬年前」時哺乳類就已經存在了嗎？' },
                  { num: '（五）', text: '有的學者說腳部強壯就是恐龍演化成鳥的論據，但這些化石太過多種多樣性，只使用「神的創造各從其類」的觀念，就可以將各種類別解釋得清楚而符合事實。這些生物埋在那裏是大洪水審判所造成的，並不是按照進化的時間序列排列的。' },
                  { num: '（六）', text: '有人認為這些化石的翅膀前端有爪子，所以就是和恐龍有關係。實際上，有些鳥類的翅膀前端也有爪子，如非洲的 Touraco、南美洲的 Hoatzin（其幼年期翅膀前端有兩隻指爪），牠們是百分之二的鳥類。甚至還有的鳥類長著好像爪子的骨骼暗藏在翅膀裡面，難道牠們也是「恐龍演化成鳥類最有力的論據」嗎？' },
                  { num: '（七）', text: '有的人看到今天許多鳥沒有牙齒，就認為凡是化石中嘴裏有牙齒的，就一定和恐龍有關係。然而　神創造的各類生物都有其多樣性，如鴨嘴獸 Platypus 和食蟻獸 Anteater 是「沒有牙齒」的哺乳類，難道牠們比那些同類有牙齒的哺乳類「還更進化」嗎？' },
                ].map(({ num, text }, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-teal-600 font-bold flex-shrink-0">{num}</span>
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch8-fig85.jpg" alt="圖85 飛鼠 Flying Squirrel" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 85 — 在熱帶雨林中生活的飛鼠 Flying Squirrel 可以在樹林中間滑翔，但是牠是飛鼠和鳥類沒有任何關係，是　神起初就賦與牠們這樣的形狀。</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                我本身對於老古考學家的毅力和辛勞充滿敬意，很遺憾至今大多數推測矽化石的年代都受到進化論的影響。盼望考古學家能按本書第二章的建議，重新鑑定中國遼寧省的化石，使歷史恢復應有的面目。
              </p>
            </div>

            {/* 何以有些動物在洪水後絕跡 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">何以有些動物在洪水後絕跡</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                在大洪水審判之後，　神告訴挪亞一家宣告：「凡地上的走獸，和空中的飛鳥，都必驚恐、懼怕你們；連地上一切的昆蟲，並海裏一切的魚，都交付你們的手。」（創世記九章2節）。大洪水以後過了這四千多年以來，人類竟使無數的物種絕滅，乃至於進化論的學者竟以為這些是「物種天擇」的結果。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                生物學家曾作過調查，發現目前頻臨絕種的生物非常多：細目來看，今天乳類有 500 種快要絕跡，其他物種的目中鳥類 880 種、魚類 270 種、昆蟲類 170 種、兩棲類 60 種、無脊椎 510 種左右面臨絕跡的邊緣。人類有時候為了肉食大量屠殺反抗能力弱的動物（如 Dodo 鳥等），有的人甚至為了獲取動物的毛皮、牙齒（如老虎、大象、犀牛等）而大量獵殺。很可能無數已經絕跡的生物也曾進了方舟，但是後來因為這些因素被徹底殺絕了。在十九世紀末推進化論以前，人類歷史文獻中提到太多我們今天認為是所謂「幾億萬年的遠古生物」，這些生物充其量不過是絕種而已，並不是其他生物的祖先。
              </p>
            </div>

            {/* 恐龍體積與年齡的關係 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">恐龍體積與年齡的關係</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                生物體積大小並不是造成牠們絕滅的主要因素。但是大洪水審判以前，有些生物的體積確實是很大，這是為什麼呢？如果人類在大洪水審判之前，可以活到九百多歲，那麼動物也同樣會有比較長的年齡。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                目前在東非島上有一種被叫做「象島巨龜」的 Aldabra Giant Tortoise，可以隨著牠們的年齡增長，體積不斷地增長，大型的可以長到六點五呎長，重達 1,000 磅。一般認為這種巨龜可以活到三百歲以上。如果恐龍生長的速度和爬蟲類的鱷魚一樣，大型恐龍至少需要活到三百歲才可能達到化石上那樣大的體積。　神在牠們的基因中限定了牠們的成長速度和年齡，大型蜥蜴可以活到 23 呎（即 7 公尺）左右。是不是恐龍牠們曾經在人類歷史中被殺盡了呢？還是今天仍有些隱藏在原始森林或是深海裏面，人類所不知道的呢？
              </p>
            </div>

            {/* 並不是冷血或是溫血的問題 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">並不是冷血或是溫血的問題</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                近年來學術界因為堅持恐龍是冷血 Cold-blooded 或是溫血 Warm-blooded 的動物而爭執不下。冷血動物需要靠太陽或是類似的方式獲得溫度（如蛇、蜥蜴等），溫血動物是靠攝取食物中的養分而轉化成體內的能量（如哺乳類動物）。1987 年以來，因為發現許多恐龍的骨骼構造在顯微鏡底下和溫血動物類似，同時又在澳洲南部近南極冰天雪地的地帶發現恐龍的化石，很多生物學家開始推測恐龍有的可能是溫血動物，並不是都是冷血動物。不論牠們是溫血或是冷血，如果牠們仍然活在今天，都會發現地球上的環境越來越難適應（見圖86）。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch8-fig86.jpg" alt="圖86 恐龍骨骼內部結構" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 86 — 左圖是顯微鏡底下一般冷血及乾燥骨頭的內部結構，它和右圖一般哺乳類及鳥類的骨骼結構有許多差異，二者和恐龍骨骼結構有許多相異之處。</p>
              </div>
            </div>

            {/* 第二個臭氧層破洞 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">第二個臭氧層破洞</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                1999 年 10 月 8 日雪梨農廳報導，南極上空的臭氧層 Ozone 流失已達頂峰，9 月 19 日當天在紐西蘭和澳洲之間，出現了第二個臭氧層破洞，其後在南極上空兩個破洞結合後又消失。1995 年科學家證實在北極也有臭氧層穿孔的現象。
              </p>
              <p className="text-gray-700 leading-relaxed">
                這所謂的臭氧層「破洞」，實際上多半是人類工業產品及氟化物所造成臭氧層破壞引起的。在地球九至三哩圍圍的臭氧層，原來是唯一能阻止太陽紫外線直射到地面的氣體。臭氧層減少，人類和動物罹患皮膚癌的機率升高，其他農作物也相對地減少。1999 年 9 月 15 日的人造衛星資料顯示，南極上空臭氧層的大破洞涵蓋 2,680 萬平方哩左右，其面積相當於歐洲版圖的 2.4 倍大！
              </p>
            </div>

            {/* 大地的森林在萎縮與暴風災害 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">大地的森林在萎縮</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                不僅空氣在被工業產品污染，1998 年生態學家曾作統計，發現目前地球上的森林已經消失了三分之二，近來巴西亞馬遜熱帶森林的濫墾、印尼叢林火災、許多國家濫伐森林和土壤流失，如果繼續惡化下去，地球上的生物就會減少一百種物種。大自然有如地球生物的糧倉，過去取之不盡，用之不竭，近年來世界人口急速地增加，在跨入21世紀之前，人類增加的數量已經超過六十億！甚至連那些有兩千年以上的紅木 Red Woods（Sequoia Sempervirens）也將面臨消滅的命運。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們知道目前地球以365天5小時48分46秒的速度環繞太陽一週，而每天地球由西向東自轉的時候，各地的風向也因緯度的不同而有所分別（見圖87）。所羅門王看到大自然的現象，他也說：「風往南颳，又向北轉，不住地旋轉，而且返回原道。」（傳道書一章6節）。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch8-fig87-wind-map.jpg" alt="圖87 全球風向地圖" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 87 — 橘色代表大自然的風向，它們大致上分成赤道到緯度30°、緯度30°到60°、緯度60°到南北極等六個區域，赤道附近有時候會成無風地帶。</p>
              </div>
            </div>

            {/* 二十世紀暴風的災害 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">二十世紀暴風的災害</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                大洪水審判以後，全球各地緯度的氣溫有了顯著的不同，於是冷空氣下沉變成高氣壓，溫暖的空氣上升造成低氣壓，這就造成大洪水以後人類前所未見的天氣變化，特別是在太平洋西北區域的颱風 Typhoons（發生在 4 月至12月）、在澳洲以北的暴風 Cyclones（發生在 12 月至 4 月）、大西洋的颶風 Hurricanes（發生在 8 月至 10 月）、太平洋東區的颶風 Hurricanes（發生在 6 月至 10 月）。它們的直徑通常達 400 哩（即 644 公里）長，風速有時候可達每小時 125 哩左右（見圖88）。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch8-fig88.jpg" alt="圖88 颶風路徑分佈地圖" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 88 — 颱風、颶風或暴風因為區域不同而稱為不同的名字，橘色代表它們在海面上沿著海岸線蜿蜒前進的方向。</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                此外，有時候陸地上或海上的氣流改變，也會產生可怕的龍捲風 Tornado，它們通常直徑長達 300 呎（91公尺）左右，風速可達每小時 220 哩（354公里），它們一路掃過地面的時候，常常將建築物的四角房屋倒塌，產生爆炸性的破壞！在二十世紀因為暴風或洪水造成嚴重的損失並不比從前少：1906年9月颶風擊中香港造成大約一萬人不幸死亡；1911年9月中國大陸長江氾濫造成十萬餘人不幸死亡；1970年11月12日颶風擊孟加拉 Bangladesh 造成三十萬到五十萬人不幸死亡；1989年4月26日孟加拉又發生龍捲風而造成一千三百餘人不幸死亡，另有大約五百萬人無家可歸；1998年颶風擊中美洲造成 9,745 人不幸死亡，大約有兩百五十萬餘人無家可歸。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch8-fig89-hurricane.jpg" alt="圖89 颶風衛星圖" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 89 — 颱風、颶風或暴風它們都是熱帶性的快速旋轉氣流，它們從上往下看都看來是這樣的形狀，在中間風速較小，其餘部分為暴風所遮蓋。</p>
              </div>
            </div>

            {/* 聖經中清楚的警告 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">聖經中清楚的警告</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                主耶穌曾警告我們祂再回來審判世界的預兆，其中幾項和天文及地球上的環境有關。祂說：「日月星辰要顯出異兆，地上的邦國也有因海洋中的波濤聲浪，就茫然不知所措，天象都嚇得魂不附體，那時，他們要看見人子，有能力、有大榮耀，駕著降臨。一有這些事，你們就當昂首挺胸，因為你們得救的日子近了。」（路加福音二十一章25至28節）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                　神有時候也允許一些大自然的災害發生，有時候是有祂旨意的目的，有時候我們並不明白為什麼這些災害發生。而且，　神允許這些事情發生，並不表示祂已失去主權，實際上祂仍全權掌握一切，只是我們並不瞭解　神掌管宇宙的目的而已。正如在聖經約伯記裏，撒但在　神允許之下以惡行以害約伯，神卻仍全能的主權。約伯的三個朋友，勸約伯一分別來把約伯的牲畜、駱駝掠奪去，又「從天上降下火來，將群羊、和僕人，都燒滅了」；甚至「狂風從曠野刮來，擊打房屋的四角，房屋倒塌」，三個兒子全都死了（約伯記一章13至19節）。撒但又使約伯全身長毒瘡；雖然如此，約伯的信心仍然完全正直，因為約伯後來所得的是以前的倍加，最後使約伯又活了140年，並且得見他的兒孫，直到四代（約伯記四十二章10至16節）。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch8-fig90.jpg" alt="圖90 冬季雪崩" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 90 — 冬季山嶺要防雪崩，有時積雪會從山上飛瀉下來造成房屋倒塌，過去阿爾卑斯山的雪崩曾普遍造成許多人不幸死亡。</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                在　神允許下，也曾用暴風災以考於人，可是在撒但行動以前，　神限制他危害的範圍，神脫：「凡他所有的都在你手中，只是不可伸手加害於他。」（約伯記一章12節）。於是示巴人和迦勒底人分別來把約伯的牲畜掠奪去，　神後來拯救了約伯。
              </p>
              <p className="text-gray-700 leading-relaxed">
                詩篇九十一篇記著：「你必不怕黑夜的驚嚇，或是白日飛的箭，或是午間的災害，雖有千人仆倒在你旁邊，萬人仆倒在你右邊，這災卻不得臨近你。」（詩篇九十一篇5至7節）。
              </p>
            </div>

            {/* 信　神的人無所畏懼 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">信　神的人無所畏懼</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                對於一位投靠　神旨意行事的人，在這末世不應該懼怕。主耶穌親口應許說：「那殺身體、不能殺靈魂的，不要怕他們（指那些懲罰我們的）；惟有能把身體和靈魂都滅在地獄裏的，正要怕他。兩個麻雀不是賣一分銀子嗎？若是你們的父不許，一個也不能落在地上。你們的頭髮，也都被數過了。所以不要懼怕，你們比許多麻雀還貴重。」（馬太福音十章28至31節）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                　神在祂的話語裏，不斷地藉著聖經來提醒我們祂的同在與保守。詩篇二十三篇大衛說：「我雖然行過死蔭的幽谷，也不怕遭害，因為你與我同在；你的杖，你的竿，都安慰我。」（詩篇二十三篇4節）。既然天上地下所有的權柄都是屬於主耶穌基督的，我們還害怕什麼呢？祂說：「所以你們要去，使萬民作我的門徒，奉父子聖靈的名，給他們施洗，凡我所吩咐你們的，都教訓他們遵守，我就常與你們同在，直到世界的末了。」（馬太福音二十八章18至20節）。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch8-fig91.jpg" alt="圖91 深谷" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 91 — 有時候我們極然經過危急和孤獨過，又不知道在前面會有什麼樣事情發生，但是我們行過危稽的幽谷也不怕遭害，因為　神與我們同在。</p>
              </div>
              <div className="bg-teal-50 border-l-4 border-teal-400 p-4 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed italic">
                  「世人哪！耶和華已指示你何為善，祂向你所要的是什麼呢？只要你行公義，好憐憫，存謙卑的心，與你的　神同行。」
                </p>
                <p className="text-sm text-teal-700 mt-2 font-medium">——彌迦書六章8節</p>
              </div>
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
                '冰河時期是大洪水的直接後果：溫暖的大洪水後海洋 + 火山灰塵阻擋陽光 = 大量降雪 → 冰河時期（約始於4,469年前，歷時487-700年），海平面下降600呎，今天的大陸棚就是當時的海岸線，各大洲曾藉此相連。南極冰層平均6,600呎，部分積達14,000呎，約伯記三十八章早已描述這些冰雪的奧秘。',
                '長毛象之謎指向大洪水：500萬頭站立冷凍的長毛象、胃中未消化的溫帶植物、無禦寒脂肪層卻出現在西伯利亞——唯一合理的解釋是大洪水時「天上的窗戶敞開」之際，超低溫氣流在幾小時內急速冷凍了牠們。複製長毛象無法解決謎題，因為問題的根源是大洪水，而非遠古時代。',
                '中國遼寧「有羽恐龍」並非鳥類祖先：七個理由說明孔夫子鳥是真正鳥類、中國有羽恐龍 Sinosauropteryx 仍是恐龍；這些化石所在地層同時含有哺乳類，揭示這是大洪水同時埋葬不同生物的結果，而非進化的時間序列。恐龍體積巨大是因為大洪水前動物壽命極長，Aldabra 巨龜至今仍終生持續成長。',
                '地球大環境持續惡化：第二個臭氧層破洞（面積相當於歐洲2.4倍）、全球三分之二的森林消失、颱風颶風龍捲風不斷造成巨大傷亡——這些是大洪水後水氣層消失和地球環境改變的長期後果，也是主耶穌預言的末世徵兆（路加福音二十一章25-28節）。',
                '神全能的主權從未改變：祂曾使太陽停止運行（約書亞記十章）、使日晷倒退十度（以賽亞書三十八章）、在約伯的苦難中仍全權掌管。面對地球環境的惡化，信神的人不必懼怕，因為「一有這些事，你們就當昂首挺胸，因為你們得救的日子近了」。',
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
              <p className="text-gray-700 leading-relaxed">進化論將恐龍絕滅定於6,500萬年前，但人類歷史文獻卻記載了大量「龍」的目擊：中國數千年的龍文化、歐洲中世紀的屠龍故事、聖經約伯記描述的 Behemoth 和 Leviathan，其描述細節（尾巴像香柏樹）遠超一般動物。大量古代壁畫、雕刻也描繪了酷似恐龍的生物。如果恐龍在6,500萬年前就已絕滅，這些記載又該如何解釋？更合理的推斷是：許多恐龍進入了方舟，大洪水後與人類共存了一段時期，才逐漸因環境改變和人類獵殺而滅絕。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">全球暖化——大洪水遺留的長期效應</h4>
              <p className="text-gray-700 leading-relaxed">今天科學界熱烈討論的全球暖化，其實可以從大洪水後的環境演變來理解：水氣層消失→太陽熱量直接到達地表→地球逐漸升溫→冰河融化→海平面上升。這個趨勢是大洪水後環境演變的延續，而非純粹由人類的工業活動引起（雖然人類活動確實加速了這個過程）。今日環境危機的根源，是在伊甸園的墮落和大洪水審判所留下的雙重遺產——這呼喚人類以管家的責任看待地球，而非以主人的態度濫用資源。</p>
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
              '彩虹是大洪水審判後「水氣層消失」的證據，同時也是神與人立約的記號。神的審判與神的恩典在同一個符號裏共存，這對你意味著什麼？',
              '長毛象的謎題（500萬頭急速冷凍的溫帶動物出現在北極）至今仍無進化論的合理解釋，但大洪水模型可以解釋。當科學發現和進化論假設相衝突時，你會如何分辨哪一個更接近真相？',
              '本章提到人類濫殺動物、砍伐森林，導致大量物種絕滅——這是神賜下「管理地球」使命的失職。你認為基督徒應該如何看待環保議題？信仰和環保責任有什麼關係？',
              '約伯在苦難中，神並未解釋原因，只問他：「你在哪裏？」面對颶風、暴風等無法控制的自然災害，你如何在「神有旨意」和「自然的殘酷」之間找到平衡？',
              '「神全能的主權從未改變」——歷史上神曾使太陽停止運行（約書亞記十章）、使日晷倒退十度（以賽亞書三十八章）。這些神蹟讓你對今天面臨的難題有什麼新的看見？',
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
                  「主啊，感謝祢讓我看見大洪水後地球環境改變的全貌——祢的審判是真實的，祢的恩典也是真實的。感謝祢在彩虹中留下祢的記號，提醒每一代人祢信實的約。面對今日的環境危機、自然災害和世界的動盪，求祢幫助我不要懼怕，要仰望祢全能的主權。提醒我作忠心的地球管家，珍惜祢所創造的萬物。當這世界向下滑落的時候，求祢幫助我「昂首挺胸，因為我得救的日子近了」。奉主耶穌的名禱告，阿們。」
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
