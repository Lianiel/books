import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Compass, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book30Ch5() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">第五章</h1>
        <h2 className="text-xl font-semibold text-gray-700">古今一致說呢？還是大天災說？</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            {/* 一 */}
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">一、化石的證據</h3>
              <p className="text-gray-700 leading-relaxed mb-3">在前面幾章，我們已討論過，化石記錄所顯示有規律、有系統的缺環 (Gaps)，與進化模式的地球演進史不相符合。如果化石記錄不能支持進化論，究竟它告訴我們什麼呢？這些蘊含化石的層層疊疊的沉積岩床，究竟是何時形成，又如何形成的呢？</p>
              <p className="text-gray-700 leading-relaxed mb-3">這些問題立刻涉及到「古今一致」(Uniformitarianism) 及「大天災」(Catastrophism) 兩學說。有一派學說主張化石、岩石及其它地殼上的特徵是經億萬年緩慢形成的，其形成之方式和今日地球上正在進行的方式相同——這就是「古今一致說」。另一學說則認為很多（或大部份）的沉積岩石是在極短時間內形成的，這派學說稱為「大天災說」。大體而言，進化模式與古今一致說不可分；創造模式與大天災說不可分。這並不表示進化論不容許地球歷史上任何局部性天災的發生；同樣的，大天災說也不否定地球歷史上正規、恆不變的自然律。</p>
              <p className="text-gray-700 leading-relaxed mb-3">蘇格蘭地質學家 James Hutton 氏主張：「今日所有乃探究過去之鑰 (The present is the key to the past.)，現存的各種變化過程，只要時間夠長，足能造成地球上的一切地質現象。」這套哲學稱為古今一致說。然而今日許多地質學家卻對此提出質疑：</p>

              <div className="bg-blue-50 rounded-lg p-4 mb-4 space-y-3">
                <h4 className="font-semibold text-blue-800">六大質疑古今一致說的聲音</h4>
                {[
                  { title: '(一)古今一致說與實際數據不合', body: '「傳統的古今一致說或漸進說 (Gradualism) 主張在無劇變中逐漸演演。這種說法與所有寒武紀以後 (Post-Cambrian) 的沉積岩的證據及有關的地殼結構史不相符合。」（註2）' },
                  { title: '(二)自然律的恒久不變與某一過程之速率恒久不變，不可混為一談', body: '「實質性的古今一致說 (Substantive uniformitarianism) 是可以測試的一種地質變化的學說，此說認為物質之狀態及變化速率恒久不變）是不正確的，它僅是一種假說而已；方法性的古今一致說 (Methodological uniformitarianism) 是屬於程序性的學說，主張自然律不因時、地改變）適用於一切自然科學，不限於地質學。……實質性的古今一致說是一般述性的理論，與新近發現的數據不合。嚴格地說來，它已難以為繼了。」（註3）' },
                  { title: '(三)近世許多地質學家已放棄古今一致說', body: '「近年來，古今一致說的教條曾遭猛烈抨擊，許多作家，雖從不同角度研討此說，卻一致認為其教條中有一些毫無意義，而且是錯課的。也有些人建議不再把它列為地質學上之基本假設。……很不幸的是，在地質學歷史上佔有重要地位的「古今一致說」，到如今仍然在教科書及課程中以「今日所有乃探究過去之鑰」這句不實之言出現。」（註4）' },
                  { title: '(四)地質學教師錯誤的引用古今一致說', body: '「我常常擔心地質學之傳授很膚淺，我們常用 Geikie 氏的名言「今日所有乃探究過去之鑰」為主要教條，用古今一致說為障眼法，以掩飾師生對地質學之一知半解。」（註5）' },
                  { title: '(五)不尋常的地質現象亦應置於考慮之列', body: '「如果我們接受不尋常事件可能發生的看法，「古今一致說」就應該被置之高閣。倘若進一步的研究能證實某些重要的不尋常事件的確發生過，「古今一致」一詞，就越發顯得錯誤不當了。」（註6）' },
                  { title: '(六)許多不尋常事件的確影響地層之形成', body: '「還有許多理由，使我們不能盲目地接受古今一致說。至少在認清它的基本觀念前，不宜盲從……地質年代柱 (Geological column) 中有幾種岩石在今日地球上已不復形成，至少絕非大量形成。」（註7）' },
                ].map((item, i) => (
                  <div key={i} className="border border-blue-100 rounded p-3 bg-white">
                    <p className="font-semibold text-blue-700 text-sm mb-1">{item.title}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-3">既然有如此多的權威性意見為依據，我們可以當仁不讓地提出大天災說以取代古今一致說。我們將可發現，地質層是急遽形成 (Rapid formation) 的觀點，不僅可解釋一切地質現象，而且對許多地質現象而言，用這種觀點來解釋是唯一可行之途。以上的結論，可從化石遺跡上找到證據。</p>

              <div className="bg-indigo-50 rounded-lg p-4 mb-4 space-y-3">
                <h4 className="font-semibold text-indigo-800">化石年代判定的循環論證</h4>
                <p className="text-gray-700 text-sm leading-relaxed">「化石是地質史上唯一的年代尺度，它可用來區分岩石種類及測定地質事件的發生年代。」（註8）「每一沉積層中，某些化石的蘊藏量特豐，這些化石被稱為指標化石 (Index fossils)。如果在一個奇特的地層中發現了某種指標化石，那麼測定該岩層的年齡就很容易了。」（註9）然而，「觀察地殼岩層中之化石遺跡，根據進化論生物進化的先後，我們可以把史前時期 (Pre-historic time) 分成不同的時期。」（註11）這就造成了一個循環論證：化石所以支持進化論，乃是因為有人使得它支持進化論；而地層的年代又反過來用化石（以進化論為準）來斷定。</p>
                <p className="text-gray-700 text-sm leading-relaxed">「支持進化論最重要的證據來自化石之研究。雖然與動物學有關的諸科學，如比較解剖學及胚胎學，也會使人想到所有的動物都互相關連，但是化石的發現以及其在不同年代的地質層出現的事實才是支持進化論最主要的證據！」（註13）但化石本身卻又立足於進化論的假設上，這實在只是一種繞圈子的自說自話。</p>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-blue-800 mb-2">化石的形成必須急遽——全球恐龍埋場的震撼</h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">化石之形成及存留可藉好幾種方式完成，每一種都必須是快速的，否則腐化、細菌及氣候變化之侵蝕、以及自行分解都足以毀壞生物體，而阻止化石之形成。化石形成之方式有(1)硬化 (Induration)；(2)模化 (Formation of casts or molds)；(3)火石化 (Petrifaction)；(4)石化 (Cementation)；(5)凍化 (Freezing)；(6)碳化 (Carbonization)。雖然有些學者認為化石的形成係經漫長的加壓、加熱及化學變化等步驟，但很顯然的在這些加工步驟之前，生物體必須很快、很結實地埋入地層，這有賴於大天災 (Catastrophism) 使然。</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">加州中新世頁岩區的鯡魚化石：「化石的數目甚巨，顯然成形時之環境特殊，很可能是由於大天災造成的……極大量的鯡魚（學名 Xyne grex）聚集在「蒙特里頁岩」(Monterey Shale) 的岩床層。Jordan 氏估計其數超過十億，每條魚長約六至八吋，這些魚羣死于四平方哩的河底。」（註16）</p>
                <div className="space-y-2">
                  {[
                    { place: '在新墨西哥州 (New Mexico)', content: '「當工作人員剷除山邊的褶層，暴露內層時，發現一個難得一見的恐龍填場，數十具恐龍遺骸重疊交錯的堆聚在一起，看起來曾有一場局部性天災襲擊這些恐龍，使得它們葬身一處。」（註17）' },
                    { place: '在懷俄明州 (Wyoming)', content: '「在此處，化石搜尋家發現整個山邊覆蓋着無數巨形恐龍的骨體。……簡言之，它是一個標準的恐龍骨礦。……化石如木材一般被河水沖在一處層層疊疊，密度之大，令人歎為觀止。」（註18）' },
                    { place: '在阿伯俯特 (Alberta)', content: '「從這些荒地中，發掘出許多恐龍及同類爬蟲的骨架，以及無數骨頭。在 Steveville（地名）以東的一條河，沿河上下15哩那一段，更是充滿了這些遺骸，真可謂恐龍填場。」（註19）' },
                    { place: '在比利時 (Belgium)', content: '「這樣看來，化石骨場佔了很廣大的地區，最值得注意的是它的縱斷面深達一百呎以上。」（註20）' },
                  ].map((item, i) => (
                    <div key={i} className="bg-white rounded p-2 border border-blue-100">
                      <p className="text-blue-700 text-xs font-semibold">{item.place}</p>
                      <p className="text-gray-700 text-sm">{item.content}</p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mt-2">含有水生無脊椎動物的岩石，在全球各處都是，且貯量甚豐。然而今日我們卻很難（甚至可以說是不可能）找到正在形成化石的岩石。有些時候，偶而也會發現一些含有化石的岩石，由於石化及埋藏過程極其迅速，其中生物之軟體部份仍保存完整。Stuermer 氏說：「在古生代化石 (Paleozoic fossils) 中，生物之軟體部份是難得見到的。西德有名的低層及中層泥盆紀地區（指西德 Bundenbach 及 Wissenbach 兩地）發掘出的化石，經過多次的X光分析，學者發現在很多未經處理過之粘板岩 (Slates) 中含有生物之軟體部份，其中極細微之結構也完整如初。」（註21）</p>
                <p className="text-gray-700 text-sm leading-relaxed">化石之所以存在，特別是羣集一處，實在已經就是大天災（至少是地區性的）發生的證據。然而，因為含化石的地層遍及全球，而且事實上它們組成了整個地質年代柱，這顯示世界各地都有過大天災！「我們不需要再為化石紀錄之貧乏不全抱憾。從某些角度看來，化石紀錄已異常豐富。它們的發現遠超過地質學家所能提供的有系統的解釋。」（註22）</p>
              </div>
            </div>

            {/* 二 */}
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">二、地質沉積的快速形成</h3>
              <p className="text-gray-700 leading-relaxed mb-3">儘管地質學家們衆口一致推崇「古今一致說」的教條，令人奇怪的是地球的地質特徵及各類岩層的形成卻沒有一樣能用這種學說來解釋。也就是說，以往的地質演變，若是照現有地質演變的模式及速度，萬不能造成我們所看到的遺蹟。「現在」不能作為探究「過去」之鑰。讓我們先討論地殼上幾種重要的岩石以及它們的形成：</p>

              <div className="space-y-3 mb-4">
                {[
                  { title: '(一)火成岩 (Igneous rocks)', content: '火成岩（花崗石 Granites、玄武石 Basalts 等）顯然都是快速形成的。地的深處高溫岩漿迸出地殼，岩漿冷卻後，或是沒入地層內，或是堆積在地面，就形成我們所熟知的堅硬之岩石。岩漿達到溫度較低的地殼後，會很快冷卻凝結，因此可知這些岩石是快速形成的。每一個火成岩層（包括巨大的岩基 Batholiths，岩株 Laccoliths 以及壁狀疊塊 Dikes、sills 等），必然都是快速形成的。近代的火山現象與這些巨大岩層相較，可說是微不足道。' },
                  { title: '(二)變成岩 (Metamorphic rocks)', content: '變成作用 (Metamorphism)——即沉積岩轉變為變成岩的過程（例如石灰岩變為大理石）——很令人費解，主要因為這種地質變化現代似乎已不存在。有些地質學家甚至將一些花崗岩的形成歸因於一種變成過程，稱之為「花崗岩變成作用」(Granitization，由沉積岩變成花崗岩)。總之，「變成過程」一定包括了巨大的熱能及壓力，這些狀況（高溫、高壓），若與近代的沉積形成之過程相較，是屬於不正常的情況。' },
                  { title: '(三)沉積岩、水成岩 (Sedimentary rocks)', content: '按地質歷史來講，沉積岩是最重要的岩石。不但因為這種岩層佔了地球表面的大部份，而且因為它包藏了豐富的化石。照理來說，「古今一致說」應用在這一類岩層應該是最合適的了，因為我們可以看到今日所有的沉積現象，從而推想過去沉積岩層之形成。然而事實並非如此！Dott 及 Batten 二氏就說：「我們一向認為保存下來的沉積岩記載了過去世代中「正常」或「一般」的狀況，但是這個「古今一致」的假設是有問題的。」（註23）' },
                  { title: '(四)沙岩 (Sandstones)', content: '沙岩是散沙由流水載運，然後沉積而形成的（註24）。形成沙岩之首要條件是必須要有黏合劑 (Cementing agent)，而這黏合劑要靠流水侵蝕、溶解含有此劑的物質而來。一旦有了黏合劑，將沙變沙岩，只需數小時的時間（就像混合沙、水及水泥，鋪造人行道一般），絕不需要一百萬年！還有一點值得注意的，沙岩岩層，多半是佔地極廣。所謂的「聖彼得沙岩層」(St. Peter sandstone) 及其相連的岩層，由加州到佛蒙 (Vermont) 州，由加拿大到田納西州，幾乎覆蓋了全美國。近世從沒有這樣大的岩層形成，可想見只有全球性的洪水泛濫，才可能造成這種巨大岩層。' },
                  { title: '(五)頁岩 (Shales)', content: '由淤泥或黏土等微粒所形成的岩石叫頁岩，泥岩或沙泥岩。在地質年代柱中，此類岩層非常普遍，而且多半含有化石。像沙岩一般，頁岩的形成也需要黏合劑；同時頁岩也總是綿延相接，佔地極廣，不能看作是普通的三角洲或是湖沼沉積。它們的形成必然是藉洶湧的流水，由遠處夾帶來大量的泥土，而當水慢慢減速以至靜止的時候，泥土乃聚積在廣大的區域中。頁岩常發現在沙岩的上層，大量的流水夾帶不同大小的顆粒時，大的顆粒如碎石等會在最下層，次而沙粒，次而淤泥，含鹽類的溶液通常在最上層。這種層次常常在廣大的地區中發現。' },
                  { title: '(六)礫石 (Conglomerates)', content: '礫石是鵝卵石及巨大石塊黏合而成的，中間夾有沙粒及鵝卵石。顯然，這種水力沉積作用需要極大的流速，絕不會小於洪水的狀況。因此，如果發現整個地區覆蓋着礫石岩層，那只有由該地區發生過洪水才能解釋。Colorado 高原上的 Shinarump 礫石層，綿延十二萬五千平方哩之廣；中新世 (Miocene) 的地層中也有覆蓋甚廣的礫岩層，北自阿伯爾特 (Alberta)，南至新墨西哥州，西起猶他州，東至堪薩斯州，其泥床中夾有大塊的花崗岩塊及石炭岩塊。（註25）' },
                  { title: '(七)石灰岩 (Limestones) 及白雲岩 (Dolostones)', content: '石灰岩的主要化學成分是碳酸鈣 (CaCO₃)，白雲岩的主要成分是碳酸鈣鎂〔CaMg (CO₃)₂〕。許多海洋生物能夠分泌產生方解石 (Calcite) 及霰石 (Arganite)，兩者的化學成分都是碳酸鈣。但是，在地質層中卻有很多極大的石灰岩層，它們佔地之廣以及組成之一致，在現代地質現象中卻無可比擬。它們的成因只可能是蘊含豐富鹽類的巨量流水，當溫度或鹼度急遽改變時，鹽類沉澱而成。這種現象除了用大水災 (Hydraulic cataclysm) 之外，難以解釋。白雲岩的形成用「古今一致說」更難解釋，因為現今已沒有白雲岩的沉積產生，地層學 (Stratigraphy) 的一本標準教科書中如此記載：「雖然白雲岩在地質層中不是罕見的一種沉積岩，但是它的來源卻仍不能確定。也許不能確定的主要原因是，不像其他的沉積岩，這種岩石今日已不再形成，因此「現在」不能作為探究「過去」之鑰。」（註26）' },
                  { title: '(八)燧石 (黑硅石 Chert)', content: '燧石是一種主要成份為二氧化矽 (SiO₂) 的沉積岩。由於近世似乎沒有燧石的形成，因此，「古今一致說」在此又不能成立。Petijohn 氏說：「燧石的起源是一個眾說紛紜的題目，……大部份研究燧石的學者都認為它是由二氧化矽的稠液 (Silica gel) 沉澱而來。」（註27）這種現象，今日見不到其發生，顯然需要如火山爆發加上洪水泛濫的大天災，才能將這些物質分佈到廣大的地區。' },
                  { title: '(九)蒸發岩 (Evaporite)', content: '「古今一致說」的學者常用蒸發岩作為長久年代的證據。這類岩層中含有食鹽、石膏或無水石膏。「蒸發岩」這字的本身就容易使人有偏見，因為這個字暗示岩床是由含鹽的內海或湖，經長時間蒸發而形成的。事實上，現代沒有一個湖或海形成像以往那樣厚的蒸發岩岩床。古代的蒸發岩岩床，不但極厚，而且純度也太高，不像是海洋經過百萬年蒸發殘存下來的。俄國地質物理學家 Sozansky 氏的研究更具價值，他很明確地指出，多數的蒸發岩其地質年齡均甚輕，乃是地殼結構變動的產物：「由於這些古老的鹽中不含任何海洋生物，這表示這些含鹽的岩盤並非由海水蒸乾而來。」（註29）因此蒸發岩岩床的存在，不但不能支持「古今一致說」的形成期甚古老的論點，而且成為「古今一致」模式的一大困擾，蒸發岩所支持的是「大天災說」的模式。' },
                ].map((item, i) => (
                  <div key={i} className="border border-blue-100 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2 text-sm">{item.title}</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.content}</p>
                  </div>
                ))}
              </div>

              <div className="bg-indigo-50 rounded-lg p-4 mb-4 space-y-3">
                <h4 className="font-semibold text-indigo-800">具特殊經濟價值的地質沉積：煤、石油、金屬</h4>
                <div className="border border-indigo-100 rounded p-3 bg-white">
                  <p className="font-semibold text-indigo-700 text-sm mb-2">(一)煤 (Coal)</p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-2">大家都知道煤是由大量植物遺體炭化而來的，但是煤層常常與油頁岩層、石灰岩層及沙岩互相交錯，而且煤層有時很厚，在一個垂直線上有時可以重疊疊地有幾十層。煤床是快速形成的事實有一非常明顯的證據，即是多地層的 (Polystrate) 化石樹，以及其他多地層的化石（即化石延伸過數層煤層及岩層）的存在。</p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-2">「1959年，Broadhurst 氏及 Magraw 氏記述在英國 Lancashire Wigan 附近的 Blackrod 煤礦中有一株化石樹，是直立的……證據顯示，該樹的高度約有38呎。原來的樹必定是先被沉積物掩埋起來，沉積物硬化之後樹幹漸腐朽，之後，新的沉積物又佔據了樹幹腐蝕中空的位置，而形成了一個鑄造模型的化石。由這個事實可以推測到最先沉澱在樹身上的沉積一定是急遽形成的。」（註31）Broadhurst 氏也曾說：「在 Lancashire 境內直立的化石樹屢見不鮮……由此可以推測它們的形成都是藉快速的沉積而成。」（註33）</p>
                  <p className="text-gray-700 text-sm leading-relaxed">六大反證：(1)煤層中的化石樹常呈傾斜甚至倒立狀；(2)煤層常常被外來的海洋沉積分裂成兩脈煤層；(3)海洋生物化石——腔腸動物 (Tubeworm)、海綿、珊瑚、軟體動物等等，常常被發現於煤床中；(4)許多煤層下沒有含化石的泥土，「底層泥」(Underclay) 其實是由水運輸而來的物質；(5)煤床中常含有大石塊；(6)Rupke 氏曾指出所謂的柱頭 (Stigmaria) 其實不是這些樹的根，而是一些樹的裂片，從別處被水流沖積到這個位置。（註35）</p>
                </div>
                <div className="border border-indigo-100 rounded p-3 bg-white">
                  <p className="font-semibold text-indigo-700 text-sm mb-2">(二)石油 (Oil)</p>
                  <p className="text-gray-700 text-sm leading-relaxed">大多數地質學家相信石油是無數被埋葬的海洋生物的遺體變成的，多半是無脊椎動物的軟組織的部份。在今日沒有石油形成，在更新世「冰河時期」的沉積層中也未發現過石油，我們幾乎可以斷定，石油是由於大天災埋了巨量的海洋生物而成的。被埋的有機物質變為碳氫化合物，進而變為石油的過程中，溫度及壓力的因素較之時間的因素更為重要。近年來在實驗室中已成功地用垃圾製造出石油，確切地證實了石油的形成並不一定需要很長久的時間！「用「廢物變成石油」的方法 (Waste-to-oil process)，每年可由八億八千萬噸的有機廢物中提煉十一億桶的油……」（註37）</p>
                </div>
                <div className="border border-indigo-100 rounded p-3 bg-white">
                  <p className="font-semibold text-indigo-700 text-sm mb-2">(三)金屬 (Metals)</p>
                  <p className="text-gray-700 text-sm leading-relaxed">金屬沉積物的形成同樣也不能用「古今一致說」的緩慢過程來解釋。Heylmun 氏就說：「我們看到近代很多類地質層柱中的岩石都不復生成，至少不是大量生成。花崗岩的形成何處可見？大量白雲石及燧石的生成又在何處可見？但是在地殼中這些岩石卻分佈甚廣，其量達幾千立方哩……」（註38）大天災說雖然較為可能，但是「大天災說」對這方面也仍然沒有確切的解釋。既然「古今一致說」對金屬礦物的分佈及成因都無法自圓其說，根據「大天災論」的過程來分析研判，應該值得一試。</p>
                </div>
              </div>
            </div>

            {/* 三 */}
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">三、化石的同時代性 (Contemporaneity of The Fossil World)</h3>
              <p className="text-gray-700 leading-relaxed mb-3">在前段，我們已說明了化石之沉積端賴急遽埋葬，岩石的構成亦是極其迅速的。既然每一層岩石是在短時間內形成的，我們的下一個問題是「究竟整個地質年代柱的各岩層，是否在同一短時間內形成的？」</p>
              <p className="text-gray-700 leading-relaxed mb-3">創造模式則必須解釋年代柱是在短期內（短期並非指瞬時，亦非指數百萬年，乃是指數月或數年）連續沉積而成，化石遺跡所代表的生物應是同時存活的，而非存活在時隔千百萬年的不同的世界中。換言之，化石世界類似今日世界。今日世界中有單細胞生物、水生無脊椎動物、魚類、爬蟲類、鳥類及哺乳類，在過去的化石世界中亦然。只有根據進化論的假設才認定這些生物不是生存在同一時代。除了接受這個假設之外，沒有理由不相信人類與恐龍及三葉蟲昔日是存活在同一個時代中的。</p>
              <p className="text-gray-700 leading-relaxed mb-3">創造模式主張起初造物主在同一時期內創造一切化石生物，因此他們存活於同一世界，就如今日的動植物同時存活一樣，但是也就像今日生物一樣，他們活在不同的生態環境 (Ecological communities) 中，今日人不與鱷魚、海星住在一起，同樣的，在古時，人也不與恐龍及三葉蟲混居一處。</p>

              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-blue-800 mb-2">大天災模式如何解釋化石次序（十三條推論）</h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">讓我們假設今日有一巨大水災發生：滾滾水浪不絕地由天而降，由地殼湧出，遍及各地，直至全球完全淹沒，隨之而起的是地殼內層岩漿爆發，地大震動，山崩，海嘯及爆炸。在此情形下，大天災模式對化石次序的推論是：</p>
                <div className="space-y-1 text-sm text-gray-700">
                  {[
                    '(一)水生無脊椎動物由於生養衆多，而且活動力較弱，遇災難時不易倖免；因此可以斷言，較多的水生無脊椎動物的遺體會深陷並埋葬在沉澱物中。',
                    '(二)羣居的動物，其遺體通常應該被埋在一處，不同組合的化石羣代表了大天災之前各種各樣的生態環境。',
                    '(三)一般而言，住在最低處的動物會被埋在最低處，較高者次之，因此地層的高度就代表了各類動物棲息及生態環境之相對高度。',
                    '(四)水生無脊椎動物通常是在地質年代柱的最低層被發現，因為他們原來棲息在海底。',
                    '(五)水生脊椎動物（魚類）所在的岩層比居於海底的無脊椎動物要高，因為牠們棲息較高處，而且在遇難逃生時，得以存活較久。',
                    '(六)兩棲類和爬蟲類所在的岩層更高，牠們被發現在水陸交界的沉澱物中。',
                    '(七)內陸動植物及陸地上的沉積，很少發現牠們埋葬在年代柱的底層。',
                    '(八)地質年代柱中，陸上植物最初被發現的地方應該和兩棲類及爬蟲類的化石同在一處，這是較低處的植物被泛濫的河水沖激到海岸邊時形成的。',
                    '(九)在水生動物地層中，形狀、體積相似的無脊椎動物受水力的作用，易聚一處，形成化石。構造較簡單的動物，圓形或流線型的，在水中的滯力較小，會先沉澱下來，是以構造最簡的水生無脊椎動物出現在最底層，較複雜者次之。',
                    '(十)一般說來，哺乳類和鳥類，由於棲息高處且活動迅速，因此，其化石之地層會高於兩棲類和爬蟲類。鳥類很難被發現，因為只是偶而會有體力不繼的鳥會陷入並葬身於沉積岩中。',
                    '(十一)由於高等動物有羣居之本能，在遭遇危險時，更是如此，因此高等動物的化石，通常都是成羣的出現。',
                    '(十二)高等動物（陸生脊椎動物）亦按著身體構造的繁簡及體積的大小分佈在年代柱中，愈複雜者愈上層，因為這些動物活動力強，能逃避災害的時期較長。',
                    '(十三)人類化石或所持器械很難被發現。人類逃生期長，當水退去後，陳屍於地，漸漸分解腐化。身體軟質部分及所用器皿也同樣地分解腐化，較重金屬物品則沉入水底，深藏於沉積岩中，恐將永不見天日。',
                  ].map((item, i) => (
                    <p key={i} className="py-0.5">{item}</p>
                  ))}
                </div>
              </div>

              <div className="bg-indigo-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-indigo-800 mb-2">地質年代柱是連續不斷急遽形成的七大總結</h4>
                <div className="space-y-1 text-sm text-gray-700">
                  {[
                    '(一)每一岩層 (Stratum) 之形成必定是急遽性的，因為每層的形成是由於某一類型的水力作用，而這每一種水力作用都不是長久持續不變的。',
                    '(二)緊接於上的岩層亦必然是急遽形成的，因為底層之表面看不出有久露於外而被切掉一塊 (Truncated) 的腐蝕現象。',
                    '(三)由於上述兩點，由岩層重疊而成的大岩層 (Formation) 亦必然是急遽形成的。從岩石的型態判斷，它們也必然是急遽形成的；從大岩層所含的化石遺跡，更證明了它是急遽形成的，因為化石必須藉快速埋葬及經久不加移動才能形成。',
                    '(四)雖然大岩層間偶可發現「不相合」(Unconformity) 現象，但它不是全球性的，只要追蹤這種大岩層的痕跡，最後必可發現此岩層與另一岩層完全密合，在該處岩層之形成是連續而無時間間隔的。',
                    '(五)同理可推，緊接於上的大岩層亦是急遽而連續形成的，再上一層之大岩層亦然。',
                    '(六)由是觀之，由岩層至岩層，由大岩層至大岩層，以至整個地質年代柱，都是急遽形成的。',
                    '(七)大家所公認的事實——當一個大岩層與另一大岩層相會合時，很難找到外形上顯著之界線——也支持上述的說法。',
                  ].map((item, i) => (
                    <p key={i} className="py-0.5">{item}</p>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">巴魯克西河足印——人類與恐龍共存的驚人證據</h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">最奇特的莫過於衆所周知的「巴魯克西河足印」(Paluxy River footprints)，這些不尋常的化石是在德州中部克倫斯白堊紀大岩層 (Cretaceous Glen Rose formation) 中發現的，在石灰岩中同時含有許多人類及恐龍的足印。這些足跡是一步一趨成串成徑的。在兩三個地方，人類足跡與恐龍足跡的徑道且互相交錯，還有二處，人類與恐龍的足印重疊在一起。</p>
                <p className="text-gray-700 text-sm leading-relaxed">這項發現，自然不能解釋為由於兩個不同岩層「重新排列」而成，它也不能被視為近代雕刻之工，因為它們是在過去幾年，大隊工作人員及觀測員挖掘掉覆于其上的地層後，才使得這些足跡重見天日的。由是觀之，人類與恐龍應是同時存活的。（註45）</p>
              </div>
            </div>

            {/* 四 */}
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">四、大天災後的餘災 (Residual Catastrophism)</h3>
              <p className="text-gray-700 leading-relaxed mb-3">創造論的學者認為用大天災的模式來解釋化石地層是恰當無比的，地質年代柱的大部分必然是在不久前一次大天災中快速而連續形成的。雖然火山及地殼的變動也有關連，但大體說來，地層的形成仍是水力的作用，因此這個天災應當是全球性的大洪水！毫無疑問的，許多表淺的岩層及目前地球表面的地質特徵，是源於大洪水以後的餘災，而不是大洪水水本身。從大洪水之後到今天曾有過相當多地殼結構及火山的變動，冰河的異動，以及地區性的（而非全球性的）風暴水災。</p>

              <div className="space-y-3">
                {[
                  {
                    title: '(一)山的形成',
                    content: '山的形成是「古今一致說」所不能解釋的幾個問題之一。Dott 氏及 Batten 氏兩位學者承認：「我們仍未尋到一個令人滿意的山脈形成的理論。」（註48）更進一步來說，今日世界上主要的山脈系統，就地質學而言，其年齡都相當輕。Flint 氏是耶魯大學的一位冰河地質學家，他甚至認為更新世 (Pleistocene Epoch) 的冰河時期是由於冰河期前的全球性的山脈形成 (Orogenies) 所引發的。他在一篇論文中寫道：「在新生代 (Cenozoic era) 的整個後半期中，漸次而連續的地殼隆起所造成的結果是陸地的平均高度從一千呎增高到目前的二千五百呎。」（註49）最高的山脈——喜馬拉雅山——是地球上有人類之後才隆起的：「喜馬拉雅山的大部分是在第三紀 (Tertiary) 後期和更新世時才隆起的。」（註50）在大洪水之後，地殼需要大幅度的調整，地球上漂蕩、相撞的陸地也可能促成此調整作用，這可說是山脈形成的最佳解釋。',
                  },
                  {
                    title: '(二)冰河 (Glaciation)',
                    content: '在大天災之前，地球上有溫室般的氣候，因此不會形成冰河或冰帽。但是水氣層一旦消失，地球上立刻就有因緯度不同以致氣候不同的現象。大洪水時期所帶來的能量使新生海洋的表層海水化為水蒸氣，其中大部分在極區凝降為雪，這種現象即產生了更新世大陸上的冰頁 (Ice-sheets)。值得注意的是，「古今一致說」的模式無法解釋更新世的大冰河，Gilluly 氏等曾說：「一世紀以來，地質學家和氣象學家一直想解釋覆蓋整個陸地的冰河重現的原因。有許多理論，或太繁或太簡，直到現在還沒有一個是令人滿意的。」（註51）但是，上文所述天災的理論卻可使這個問題得到完滿的解答。',
                  },
                  {
                    title: '(三)多雨性 (Pluviation)',
                    content: '大家都承認，當高緯度地帶形成冰河的那段期間及其後，低緯度地帶的雨量甚多。即使如撒哈拉沙漠也是雨水豐沛，所有的湖泊、內海及河流水位均升高，水量都大增。這些雨水都來自狂風暴雨，由地理學及考古學的證據以及古代民間的傳說，都顯示該區曾有破壞性極大的地區性水災。這些都是全球性大水災的自然結果，因為當時地球正在達成新的水平衡。',
                  },
                  {
                    title: '(四)火山 (Volcanism)',
                    content: '當地殼迸裂、洪水發生時，大量的熔岩也自地心流出，這由地質年代柱中含有豐富的火成岩及火山岩層可以看出。當洪水退落，平衡重建之時，必定有許多裂縫沒有填滿，因此在洪水之後許久，偶而仍有火山爆發的現象。這從更新世及後更新世 (Post-Pleistocene) 各地仍有大火山岩羣可得到證明。此外，今日也仍有許多活火山的存在，也有為數更多的火山到近期才停止活動。',
                  },
                  {
                    title: '(五)大陸漂移 (Continental drift)',
                    content: '在1960年之前，大陸漂移的觀念仍被地質學家們所摒棄。最近，情勢有一百八十度的轉變，地殼板面結構學 (Plate tectonics)、海洋地面擴張學 (Sea-floor spreading) 以及大陸漂移的觀念，又成為多數地質學家所接受的學說。創造模式無法推測陸地漂流是否發生過，所以它不受上述兩派理論的影響。然而「古今一致說」一直不能解釋陸地移動所需巨大能量的來源。唯有用大天災的模式解釋，地底的大量能源在水災時猛然釋出，才足以移動陸地。大陸漂移就如同地殼變動、火山活動一樣，是大洪水造成的另一後果。',
                  },
                ].map((item, i) => (
                  <div key={i} className="border border-blue-100 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2 text-sm">{item.title}</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.content}</p>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <h4 className="font-semibold text-blue-800 mb-3">地質年代柱的「大天災模式」對照表</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="border border-blue-200 p-2 text-left text-blue-800">標準系統（古今一致說）</th>
                        <th className="border border-blue-200 p-2 text-left text-blue-800">以洪水為準的時期</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      {[
                        ['近代 (Recent)', '洪水之後發展成現今世界之一段時期。'],
                        ['更新世 (Pleistocene)', '洪水之後，冰河及豪雨期內，火山活動及地殼變動漸漸減少。'],
                        ['第三紀 (Tertiary)', '洪水末期，以及洪水後重新調節之初。'],
                        ['中生代 (Mesozoic)', '洪水中期，陸地及海洋都有沉積物形成。'],
                        ['古生代 (Paleozoic)', '洪水早期在海洋深處及沿岸已形成之沉積。'],
                        ['原生代 (Proterozoic)', '洪水初期，沉積開始形成。'],
                        ['太古代 (Archaeozoic)', '創造時期之地殼，也可能在大天災時受溫度及地殼之變動影響而改變。'],
                      ].map(([era, flood], i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                          <td className="border border-blue-200 p-2 font-medium">{era}</td>
                          <td className="border border-blue-200 p-2">{flood}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mt-3">這個新的地質年代柱仍然需要許多研究工作加以補充、校正和改進。我們預測，用創造論及大天災論等較符合事實的模式來研判地球的構造及歷史，才能使我們更正確地了解並運用地球的資源。</p>
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
            <ul className="space-y-3">
              {[
                '「古今一致說」（現在是探究過去之鑰）正在被越來越多地質學家所質疑甚至放棄。化石記錄的橫向缺環（前章）加上化石形成方式（本章）都指向「大天災說」。地層的形成是「急遽的、大量的」而非「緩慢的、漸進的」，這是觀察事實，而非宗教預設。',
                '化石的形成需要急速埋葬——否則腐化、細菌和環境侵蝕會摧毀生物體。全球各地的恐龍埋場（新墨西哥、懷俄明、阿伯俯特、比利時）、加州的十億鯡魚化石、三葉蟲保存完好的軟體部份，都是急遽性大規模埋葬的明證。世界各地均有大規模化石床，表示世界各地都曾經歷過大天災。',
                '九種主要岩石類型（火成岩、變成岩、沉積岩、沙岩、頁岩、礫石、石灰岩、燧石、蒸發岩）以及煤、石油、金屬礦物，沒有一種能用「古今一致說」的緩慢過程圓滿解釋。每一種都指向快速、大規模、非常態條件下的形成過程。特別是：聖彼得沙岩層覆蓋全美國、Shinarump 礫石層綿延十二萬五千平方哩、白雲岩今日完全不再形成。',
                '地質年代柱是連續急遽形成的（七大總結）：每一層岩層急速形成→上層緊接著急速形成→整個大岩層急遽形成→「不相合」現象是局部而非全球的→整個地質年代柱是急遽連續形成的。Jeletzky 氏：「很多界限分明的岩層常常很不規律地穿越數千年地質層，有時且在極短距離內進行。」',
                '創造模式預測所有化石生物是同時代的，只是來自不同生態群落（如同今日海洋生物與陸地生物同時存在）。大天災模式能精確預測化石次序：底層→水生無脊椎動物→魚類→兩棲爬蟲→哺乳鳥類→人類（最難被發現）。德州巴魯克西河的人類足印與恐龍足印在同一白堊紀岩層中共存，且有重疊，顯示人類與恐龍曾同時存活。',
                '大洪水之後，「餘災」（Residual Catastrophism）解釋了許多現代地質現象：山脈形成（喜馬拉雅山在人類存在後才隆起）、更新世冰河期（水蒸氣層消失後溫差劇增）、多雨期（撒哈拉曾是綠洲）、火山活動持續、大陸漂移（洪水能量移動陸地）。這些現象從洪水後就在強度上逐漸遞減，直至今日相對穩定。',
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
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">地質學的哲學轉變：從Hutton到板塊構造</h4>
              <p className="text-gray-700 leading-relaxed">18世紀蘇格蘭地質學家 James Hutton 建立了「古今一致說」，這不只是地質假說，更是一套哲學宣言：自然過程本身足以解釋一切，不需要任何「超自然」的介入。這使它成為啟蒙時代反宗教思潮的重要工具。然而到了20世紀下半葉，兩件事同時動搖了它：(1)板塊構造論的興起，證明地球歷史上曾有過巨大的構造事件，遠非今日溫和地殼活動可比；(2)路易斯·阿爾瓦雷斯（Walter Alvarez）在1980年代提出「小行星撞擊導致恐龍滅絕」——一個純粹的「天災式」事件——並獲廣泛接受。今日地質學已不再純粹信奉古今一致說，本書在1970年代就已預言此趨勢。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">煤和石油的形成時間——這是真的可以很快嗎？</h4>
              <p className="text-gray-700 leading-relaxed">本章指出石油和煤的形成不需要很長時間。這已被現代科學所證實。2003年，美國農業部的研究人員利用高溫高壓技術，在30分鐘內將農業廢棄物轉化成原油，與地下石油的化學成分幾乎相同。煤的形成也類似——2019年澳洲科學家在實驗室中用高壓技術在數小時內將植物材料轉化為類煤物質。時間本身不是必要條件，溫度和壓力才是關鍵。這恰好與大天災模式吻合：洪水帶來的巨大壓力和地熱，在短時間內創造了這些礦物資源。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">巴魯克西河足印的爭議與後續</h4>
              <p className="text-gray-700 leading-relaxed">本書提到的巴魯克西河（Paluxy River）足印是創造論者長期引用的重要證據。然而1980年代，創造研究學會（ICR）的 John D. Morris 在深入研究後，發現部份「人類足印」實際上是三趾恐龍足印的侵蝕形態，部份的確仍不明確。這事件在創造論界值得深思：真正的科學誠信要求我們在面對反面證據時，也能誠實調整立場，而不是為了護衛信仰立場而曲解數據。Morris 本人在1986年公開承認這點，並建議創造論者暫緩引用此例——這是一個難得的榜樣，說明信仰誠實與科學誠實可以並行。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「喜馬拉雅山是人類出現後才隆起」——創世記洪水的地質呼應？</h4>
              <p className="text-gray-700 leading-relaxed">本章引用 Flint 氏的研究：喜馬拉雅山在第三紀後期和更新世才大幅隆起。這意味著在全球史上相當「最近」的時期，地球地形發生了巨大變化。現代地質學確認，喜馬拉雅山脈是印度板塊與歐亞板塊碰撞的結果，而板塊運動本身需要巨大能量。問題是：這股能量從何而來？創造論的大天災模式提供了一個框架——大洪水時期地殼劇烈活動，提供了板塊移動的能量。值得注意的是，全球各地文明（巴比倫、希臘、中國、美洲原住民等）都有洪水傳說，這種文化普遍性本身也是值得深思的現象。</p>
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
              'James Hutton 的名言「今日所有乃探究過去之鑰」在教科書中流傳超過兩百年，卻被本書引用的多位地質學家質疑。你認為一個「教科書公理」是否也可能有錯？你在其他領域有沒有見過類似的情況——某個被廣泛接受的「真理」後來被推翻？',
              '化石的形成需要快速埋葬，否則生物體會腐化。本章列舉了全球各地的大型化石埋場。如果你站在一個「只相信自然過程」的立場，你會如何解釋這些現象？如果你接受「大洪水」的框架，又會有什麼不同的理解？',
              '九種主要岩石類型，幾乎沒有一種能用「今天正在發生的地質過程」完整解釋。聖彼得沙岩覆蓋全美國，白雲岩今天完全不再形成。你認為，用「今日過程無法解釋」作為推論「曾有大天災」的依據，這個邏輯強不強？有沒有其他可能的解釋？',
              '本章提出的「大天災模式的化石次序推論」（十三條）能相當精確地預測我們在地層中看到的次序：底層是水生無脊椎動物，往上是魚類、兩棲爬蟲、哺乳類，人類化石最難找。你認為這個解釋比「億萬年進化次序」更合理嗎？還是兩者都難以完全排除？',
              '延伸探討提到，巴魯克西河足印事件後來有部分被發現可能解釋為恐龍侵蝕形態，創造研究學會的 John Morris 公開承認並建議暫緩引用這個例子。你認為一個信仰者在面對「支持自己信仰的證據出現問題」時，應該如何回應？這個回應方式對你的信仰有什麼啟示？',
              '喜馬拉雅山在人類出現後才大幅隆起，更新世冰河期難以用「古今一致說」解釋，撒哈拉曾經是雨水豐沛之地。這些現象如果用「大洪水後遺症」來理解，是否更容易解釋？你覺得這些現象本身（不論用哪種框架解釋）說明了什麼關於地球歷史的事？',
              '全球各地文明（巴比倫、希臘、中國、美洲原住民、台灣原住民）都有洪水傳說。你認為這種文化的普遍性只是巧合，還是反映了一個共同的歷史記憶？這對你理解聖經中的洪水記載有什麼影響？',
            ].map((q, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0 min-w-[20px]">{i + 1}.</span>
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
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🪨 觀察你周圍的岩石</h4>
              <p className="text-gray-700 mb-2">本章詳細描述了各種岩石的形成。這週找機會觀察你生活環境中的石頭（建築用石、路邊岩石、海邊礁石）：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>它是哪一種岩石？（火成岩、變成岩、沉積岩？）</li>
                <li>它是怎麼形成的？需要多長時間？</li>
                <li>如果是沉積岩，裡面有沒有化石或貝殼的痕跡？</li>
                <li>默想：「這塊石頭見證了什麼？」讓創造之工的宏偉感動你。</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🌊 研究一個洪水傳說</h4>
              <p className="text-gray-700 mb-2">本週花20分鐘查閱一個非聖經文化的洪水傳說（如巴比倫的吉爾伽美什史詩、中國的女媧補天/大禹治水、台灣原住民的洪水傳說）：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>它和創世記的諾亞洪水有哪些相似之處？</li>
                <li>有哪些不同？</li>
                <li>這些相似性說明了什麼？你認為是文化借用，還是共同記憶？</li>
                <li>把你的發現寫成2-3句話分享給家人或朋友</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 寫下「你會怎麼回答」</h4>
              <p className="text-gray-700 mb-2">假設有人問你：「地質學不是說地層需要幾億年才能形成嗎？怎麼可能有全球性洪水？」根據本章，寫下你自己版本的回應（150字以內）：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>不需要反駁所有地質學，只需要分享一個讓你印象最深的事實</li>
                <li>語氣溫和，承認「這是個複雜的問題」，但也誠實說出你的看法</li>
                <li>寫完後大聲讀一遍，看看聽起來是否自然誠懇</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 閱讀創世記6-9章</h4>
              <p className="text-gray-700 mb-2">帶著本章的科學眼光重讀諾亞洪水的記載：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>注意「深淵的泉源都裂開了，天上的窗戶也敞開了」（創7:11）——這不只是雨水，還有地下水湧出</li>
                <li>洪水維持了多久？（大約一年）——這足以造成本章所說的地質沉積嗎？</li>
                <li>洪水之後地球有什麼變化？（8:21-22 神說「我不再咒詛地」——世界改變了）</li>
                <li>閱讀後靜默五分鐘，讓這段歷史的宏偉與神的憐憫同時在心中迴響</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic text-sm leading-relaxed">「主啊，感謝祢讓我看見岩石中的見證——那每一層頁岩、每一塊礫石，都是祢歷史行動的印記。我不禁敬畏：當洪水掩蓋全地，山嶺被淹沒，祢已在計劃著挪亞方舟，計劃著彩虹，計劃著新的開始。今天，我在祢所造的地球上行走，腳下踩著曾經歷滄海桑田的大地，我的心因此對創造之主充滿敬拜。求祢幫助我，在面對那些看似複雜、難以解釋的問題時，既有謙遜的心（承認我的有限），也有信心（相信祢的話是真的）。讓我的信仰是誠實的、有根基的，讓我能在愛中、在理性中，向這個尋找答案的世代分享我所知道的。奉主耶穌的名，阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
