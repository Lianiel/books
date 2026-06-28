import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Compass, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book30Ch6() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">第六章</h1>
        <h2 className="text-xl font-semibold text-gray-700">年老呢？還是年輕？</h2>
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
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">一、如何鑑定岩石年齡</h3>
              <p className="text-gray-700 leading-relaxed mb-3">反對創造論的一個主要原因是因創造論所認定的地球史太短，而現代人都相信地球的年齡至少有幾十億年之久。然而，在十九世紀初，當古今一致說被接受前，大多數科學家都持年代較短的看法。進化論的假說必須要有很長的年代。然而正如前面所述，就連最簡單的生物分子，若要按機遇偶然進化而成，其所需的時間三百億年都還不夠，但是持進化論者仍舊相信進化論。</p>
              <p className="text-gray-700 leading-relaxed mb-3">然而我們要知道，人類有案可稽的歷史只不過幾千年而已。最早的、比較可信的歷史記載要推埃及第一個王朝（公元前2200至3500年間）。我們該記住，在人類觀察及記錄之前，沒有人能知道以往發生過的事。而科學的本意是知識；科學方法的本質乃實驗性的觀察。由於地質地層柱形成時並無人在場，所以不可能有這些岩石年齡的直接證據，因此，除了在歷史上火山爆發所形成的岩石之外，任何年代的測定都是間接的，而且無法肯定的。</p>

              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-blue-800 mb-3">九種不能決定岩石年齡的方法</h4>
                <div className="space-y-3">
                  {[
                    { title: '(一)岩石年齡不按其外觀而定', body: '「年老」的岩石看起來不一定老，而「年輕」的看起來也不一定年輕。換句話說，一個推算出來相當老的岩石可能質地很鬆，而一個推算起來很年輕的岩石，卻可能很緊密，很堅硬。' },
                    { title: '(二)岩石年齡不按其岩石學上的特性而定', body: '各種各類的岩石——如頁岩，花崗岩，石灰岩，礫岩等等，都可能出現於各種不同的「年齡」之中。' },
                    { title: '(三)岩石年齡不按其所含礦物而定', body: '岩石內的礦物質或金屬與該岩石的「年齡」無關，油礦可以在任何「年齡」的岩石中發現。' },
                    { title: '(四)岩石年齡不按其結構上的特徵而定', body: '如前章所述，不同年齡的岩石之間，在外表上不一定有任何不連續的現象。斷層或摺層，以及其它結構上的特徵，與岩石的年齡均無關。Jeletzsky氏說：「一個眾所公認的事實是，常有一界限分明的岩盤，其結構相似，卻經常以非常不規則的方式穿越好幾個年齡的地層面，有時這種穿越且在很短距離內完成。」（註1）' },
                    { title: '(五)岩石年齡不按其鄰近之岩石而定', body: '任何「年齡」之岩石都可能疊在任何其它年齡岩石的上層，「最老」的岩石也可以在任何其它年齡岩石的正下方。' },
                    { title: '(六)岩石年齡不按其深淺位置而定', body: '「古老」的岩石經常停在「年輕」的岩石的上層，甚至銜接得極好。Spieker氏說：「究竟有多少地質學家曾進一步考慮到一個事實，就是在最基層的結晶層之上並非僅僅見到寒武紀的岩層，而是到處都可見到各種不同年齡的岩石？」（註2）' },
                    { title: '(七)岩石年齡不按放射性方法而定', body: '最明顯的證明就是含化石的地層，其年齡早在放射性元素測年代法被發現前就已認定了。並且稍後我們會看到，由於放射性推定年代法有很多可能的誤差，或錯誤的解釋，所以，很多依此方法推算出之年齡不被採用，尤其當推算出來的年齡與以前認定的不符合時，就更不被採用。' },
                    { title: '(八)岩石年齡完全不按任何物理特性而定', body: '在推定岩石年齡上，沒有任何一個物理特徵是被用上的。Jeletzsky氏說：「人們一直試圖依物理性地層學上的標準建立一些很實際又很有用的尺度來測定前寒武紀石的年代，但卻沒有成功。這個眾所公認的事實足以說明岩石的物理特徵在決定岩石年代上是無用的。」（註3）' },
                    { title: '(九)岩石年齡並非按其所含之全部化石而定', body: '前面我們已經看到，很多化石其實是今天仍活著的生物，因此這些化石對推定岩石年齡來說是毫無用處的。例如海綿就在任何「年齡」的岩石中都有。' },
                  ].map((item, i) => (
                    <div key={i} className="border border-blue-100 rounded p-3 bg-white">
                      <p className="font-semibold text-blue-700 text-sm mb-1">{item.title}</p>
                      <p className="text-gray-700 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-indigo-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-indigo-800 mb-2">「指標化石」——決定岩石年齡的唯一方法及其循環論證</h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">那麼究竟岩石年齡是如何推定的呢？答案是「指標化石」。Ransom氏說：「在每一沖積層中似乎有些化石特別多，這些化石就稱為指標化石。若在某一奇怪的地層中發現到某種指標化石，那麼便很容易決定該地層的年代，並且可以認定與其它遠處含有相同化石的地層同期。」（註4）</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">指標化石是生物的殘骸（通常是海中的無脊推動物），這些生物被認為曾經只存留在地上一段很短暫的時間，但卻又廣佈於全世界所有地區。Hedberg氏（說這段話時是美國地質學會的主席）說：「我們目前對地層次序的知識主要來自化石證據，這是眾所公認的。岩石中所含有的某種化石足以表示地球上生物進化過程的記錄，也給世上各處的地層提供了一個最奇妙而有效的鑰匙，可以找到石層的先後次序及相對位置。」（註5）</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">地層的次序是如何決定的？「化石……給地層提供了一個最奇妙而有效的鑰匙。」但化石如何作成此奇妙的事的？答案是：「因為它們是進化過程的記錄。」</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">Schindelwolf氏說：「地質史上岩層之分類以及地層年代之推定，化石是唯一準確的計時方法。由於進化是單向的，不能回頭的，因此，化石對年代之測定乃提供了一個明確的尺度，並且能把全球的岩石互相連繫起來。」（註6）</p>
                <p className="text-gray-700 text-sm leading-relaxed">從這裏我們見到一個很強橫的繞廻推理 (Circular reasoning)。化石是唯一推定岩石年齡之鑰，而化石之可以指示岩石年齡卻又是依據進化論的假設，而進化論的假設卻又是依據化石的記錄而建立。如此反覆互證，支持進化論的證據竟然是進化論的假設！Dunbar氏說：「化石提供唯一一歷史記錄上的證據，證明生命是由簡單進化到愈來愈複雜的形態。」（註8）因此，既然化石並不能提供滿意的答案，而我們已經看見岩石年齡的推算最主要的還是依化石而定，因此進化論所說地球已有很長久的歷史實在是毫無實際的證據。</p>
              </div>
            </div>

            {/* 二 */}
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">二、放射性測年代法</h3>
              <p className="text-gray-700 leading-relaxed mb-3">要想駁斥放射性測定年代法，乍看起來似乎是太膽大妄為了。半世紀以來，為人師者自己所相信且傳授給學生的就是放射性鈾已經證明了地球年齡有幾十億年之久，因此有足夠的時間讓進化的過程演發。其實正如前面所述，即使千千萬萬億年也不足以使進化發生。</p>
              <p className="text-gray-700 leading-relaxed mb-3">為了測定史前時間，我們就當用一些緩慢而又穩定的物理變化來測定。我們可以先作一些假設，然後從這些變化中估算出一個年齡，至於這年齡是否真確，則將取決於這些假設是否正確。由於這些假設無法加以實驗，所以我們永遠無法確知任何地層實際形成的年代。在考慮地層形成的年代這件事上，今天進化論者只認為放射性測定法有用。放射性之年代測定法有好幾種，最主要的是：(1)各種鈾-鈮-鉛法；(2)鉀-氬法；(3)銣-鍶法。</p>

              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-blue-800 mb-3">三個基本假設——及其無法成立的原因</h4>
                <div className="space-y-2 mb-3">
                  {[
                    { title: '(一)密閉系統', body: '它必須是密閉的系統，也就是說，在長時間的變化過程中絕不可有外來的因素干涉這個系統。這系統中沒有任何東西流失或加添。' },
                    { title: '(二)一開始不包含子元素', body: '若是一開始時就包含子元素，則此因素必須經過校正，然後所計算出來的數目才有意義。' },
                    { title: '(三)變化速率必須一直保持不變', body: '同樣的，若是在過去，變化速率曾發生過變化，我們也必須知道並加以校正，所求得的年齡才有意義。' },
                  ].map((item, i) => (
                    <div key={i} className="bg-white border border-blue-100 rounded p-2">
                      <p className="font-semibold text-blue-700 text-sm">{item.title}</p>
                      <p className="text-gray-700 text-sm">{item.body}</p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">以上三點是各方法所共有，且是最重要的三個假設。由此看來，地質學上測定年代的方法牽涉太多臆測是顯然可見的，因為我們知道以上三個假設沒有一個是真確的，沒有一個能被證明，也沒有一個能被試驗，甚至沒有一個是合情合理的。</p>
                <div className="space-y-1 text-sm text-gray-700">
                  <p><span className="font-semibold text-blue-700">(一)大自然中並無密閉系統：</span>密閉系統只是為了方便分析而有的一個理想化的觀念，在地球上並不存在。而一個密閉系統經過幾百萬年仍是密閉的更是不可思議。</p>
                  <p><span className="font-semibold text-blue-700">(二)初始成份無由得知：</span>顯然的，當地層形成時並無任何人在場。由創造論來看，地層一開始被造成時，已有一些子元素與母元素同時被創造出來是極可能的，或不然，在形成之時子元素也有辦法經由很多途徑摻雜到母元素之中。</p>
                  <p><span className="font-semibold text-blue-700">(三)速率並非一成不變：</span>大自然中任何變化過程的速率都會受一些因素影響，若這些因素改變，則變化速率也就改變。速率是統計的平均值而非絕對的常數。</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border border-blue-100 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">(一)鈾法</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-2">鈾法包含一整系列的方法，皆根源於鈾以及它的姊妹元素釷，經過一系列變化最後衰蛻為鉛及氦。三個衰蛻路徑：(a)鈾238衰蛻為鉛206及八個氦原子，半衰期為四十五億年；(b)鈾235衰蛻為鉛207及七個氦原子，半衰期為七億年；(c)釷232衰蛻為鉛208及七個氦原子，半衰期為一百四十一億年。</p>
                  <div className="space-y-2 text-sm">
                    {[
                      { n: '1', title: '鈾礦一直存在於開放系統而非密閉系統中', body: '鈾很容易被地下水沖洗掉；其中間產物氦氣也很容易逸出或進入鈾系統。一位在放射性測定年代法上相當有權威的Faul氏說：「鈾及鉛在地質時代中都曾在頁岩中位移過，詳細的分析顯示，鈾及鉛不能測出準確的年齡。」（註9）Driscoll氏說：「如果所有測定年代法（鉤-鎘法，鈾-鉛法及鉀-氬法）所得的年代都是一致的那就好了，但是實際情形並不然。」（註10）' },
                      { n: '2', title: '鈾的衰蛻率很可能不穩定', body: 'Cook博士指出游離中子的吸收 (Free neutron capture) 的問題嚴重性（註11）。他指出鉛208不可能是鈾蛻變而來，故必然是鉛207經由吸收中子而來。根據Cook博士計算，若用中子吸收來說明鉛208的形成，則一切所謂放射而得的鉛同位素都可以解釋為這種反應之產品，因此，它們無須經由長久的放射性衰蛻而成，故所以這些礦石的年齡可能是很短的，甚至等於零！Jueneman博士說：「由於和地球那麼靠近，新星爆炸所產生的不等向微中子流對原子放射測定的時間一定會有相當不尋常的影響，這影響會使碳十四法，鉀-氬法及鈾-鉛法產生誤差，以致於所算出的物品的年齡，地球的年齡，以及宇宙的年齡，都將值得懷疑了。」（註12）' },
                      { n: '3', title: '放射性產物的子元素可能從一開始就存在', body: '我們無法確知這些放射性鈾及釷元素所產生的子元素絕不是在礦石形成時就存在的。英國工程師Clementson氏的詳細研究指出鈾-鉛年齡的算法比實際年齡老得太多，雖然這些火山岩都是近代才形成的，但是推算出的年齡大多數都在十億年以上，這就讓我們清楚看到：「如此計算出來的岩石年齡並不表示是該岩石真正的年齡。」（註13-14）' },
                      { n: '4', title: '鈾法推算出的年齡不一致，必須以古生物化石加以修正', body: '用鈾-釙-鉛同位素法所得的岩石年齡經常自相矛盾，或與整個地層的年齡不相符合，因此它們必須加以修正，以便和所認定的「實際」年齡相符，或是由於差得太遠而根本不採納。Stieff氏等人說：「要得到真正合理的岩石年齡只能根據各種不同的地質年代資料加上地層和古生物學上的證據，以及岩石分類學和共生關係等資料加以仔細分析選擇後才能得到。」（註15）Spieker氏說：「如果我們以糠皮和穀粒為例，將會發現古生物化石的記錄相當於有價值的穀粒，而其它那些物理的定年代法很可能是那不值一顧的糠皮。」（註16）' },
                    ].map((item) => (
                      <div key={item.n} className="bg-blue-50 rounded p-2">
                        <p className="font-semibold text-blue-700">{item.n}. {item.title}</p>
                        <p className="text-gray-700 mt-1">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border border-blue-100 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">(二)鉀-氬法</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-2">測定岩石年齡最被廣泛使用的方法就是鉀-氬法。鉀存在於大部份火成岩及沉積岩中，其用途也不如鈾那麼受限制。鉀四十是以電子吸收方式而變為氬四十的（即軌道上的電子被原子核的中子所吸收），其半衰期是十三億年。</p>
                  <div className="space-y-2 text-sm">
                    {[
                      { n: '1', title: '需藉鈾-鉛法加以校正', body: '鉀蛻化變氬而不變鈣的「變氬率」(Branching ratio) 是無法確定的，其值可能有百分之五十的誤差。其衰蛻率也無法確定，因此這些常數的選擇就以與鈾法定年代最接近的值為準。因此，鉀法頂多也只能達到鈾法的精確度，而鈾法，我們在前面已經看到它是一點也不精確的。' },
                      { n: '2', title: '鉀-氬是個開放系統', body: '因為氬四十是氣體，所以它可以很輕易地進出於鉀礦中。Evernden氏等說：「火山岩石變化的過程可以使鉀-氬法測年代法無用武之地。我們已經分析了一些已知年齡的混濁化了的玻璃，所得的年齡都比實際年齡輕得多，有些甚至等於零。」（註17）Rancitelli氏及Fisher氏說：「鉀-氬法測定隕石的年齡約在5×10⁹至15.6×10⁹年之間。在一小塊含鐵的隕石中，百分之八十的鉀可以在四個半小時之內被蒸餾水洗去。」（註18）' },
                      { n: '3', title: '鉀的衰蛻率也會改變', body: '正如同鈾的衰蛻率可藉一些因素而變快（像過去宇宙線的增加可使地球表面微中子量增加），同樣，鉀的衰蛻率在過去也可能比現在快。' },
                      { n: '4', title: '氬可能在岩石形成時已經與鈣同時存在', body: 'Cook氏曾計算過，即使照進化論的說法，地球有五十億年的歷史，其中所有的氬四十也頂多只有百分之一是來自鉀的蛻變。（註19）夏威夷Kilauea火山爆發後所產生的玄武岩，較深處的岩石其年齡長達二千二百萬年，然而這些玄武岩的真正年齡連二百年都不到！（Nobble氏及Naughton氏，註20）類似的新近形成的岩石（1801年在夏威夷Hualalei形成的），以鉀-氬法所推算出的年齡竟長達一億六千萬年到三十億年。（註21）另一組夏威夷玄武岩研究，共測出了七個「年齡」，從零年到三百三十四萬年不等。（註22）' },
                      { n: '5', title: '鉀法測定之年齡誤差極大', body: 'Engels氏說：「這已是眾所週知的事，就是當用鉀-氬法測年齡時，即使是對同一塊岩石中不同的礦物，所測得的也可能有極大的出入。」（註23）如此看來，鉀法測定年齡的唯一好處就是它常常得到億萬年的年齡，而這正好符合進化論的模式。' },
                    ].map((item) => (
                      <div key={item.n} className="bg-blue-50 rounded p-2">
                        <p className="font-semibold text-blue-700">{item.n}. {item.title}</p>
                        <p className="text-gray-700 mt-1">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border border-blue-100 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">(三)銣-鍶法</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-2">第三種測定岩石年齡最重要的方法是銣八七經由貝他 (Beta) 蛻變而成鍶八七，其半衰期約四七○億年（有的認為是六百億年，有的認為是一千二百億年）。同樣的，這方法也要用鈾法加以校正，因此它最多也只能像鈾法一樣準確。</p>
                  <div className="space-y-1 text-sm text-gray-700">
                    <p>1. 其蛻變速率也可增快，原因與前述鈾法，鉀法相同。</p>
                    <p>2. 外來的銣八七也可以很容易由周圍的岩石中摻入銣八七。Cook氏說：「即使地球果真有五十億年，其中由放射性蛻變而得的鍶八七頂多也只有目前岩石中所含總鍶八七量的百分之五。」（註24）</p>
                    <p>3. 銣八七很容易由銣-鍶系統中流失。</p>
                    <p>4. 鍶八七也可由鍶八六經由中子吸收而成，正如鉛二○八可以由鉛二○七形成一般。</p>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mt-2">以上的定年代法沒有一個提供了很好的證據，也沒有一個證明了地球的年代確實那麼古老。目前的全部資料，同樣可以適用於創造論所提的地球年齡可能極年輕的理論，甚或比地球古老說更妥貼更恰當。</p>
                </div>
              </div>
            </div>

            {/* 三 */}
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">三、地球年齡年輕的證據</h3>
              <p className="text-gray-700 leading-relaxed mb-3">創造論不同於進化論，它容許我們嚴肅地考慮到地球年齡尚年輕的各種證據。我們必須記住，純從科學角度來說，沒有人能證明在有記錄的歷史（頂多不超過四千到六千年）之前的年代或日期。史前時代年代的推算必須根據古今一致說的三個假設：(1)最初的地質組成，各成分的比例是已知的；(2)從某成分變為另一成分的速率，從古至今恒常不變；(3)必須是個密閉系統，其內部各成分不會受到外界影響。這些假設是無法被驗證的，所以在科學上永遠是個不能確定的假設。</p>

              <div className="space-y-4">
                {[
                  {
                    title: '(一)氦氣流入大氣層之量',
                    content: '有些放射性元素蛻變時產生氣體，如鈾產生氦四，鉀產生氬四十，這些氣體從岩石中向上升移，最後逸逸散到大氣中。根據Cook氏的計算，目前所含氦的總量，比起由鉀蛻變所能產生的氦量（即使是五十億年之久）多得多。（註25）\n\nCook氏計算大氣層最老的年齡是：3.5×10¹⁵ / 10²⁰ × (5×10⁹) = 1.75×10⁵年。事實上，Faul氏曾引一些資料說明氦氣逸散入大氣層的速率每年大於3×10¹¹克（註26），這數目約為Cook氏所說的一百倍，如果用這個數字，所求得之大氣層的年齡將減至幾千年而已！'
                  },
                  {
                    title: '(二)太空中隕石物質進入地表',
                    content: '我們已知宇宙落塵以相當穩定的速率從外太空進入大氣層，而後沉落到地球表面。Pettersson氏算出的數字是每年一千四百萬噸（註27）。以五十億年計，就有14×10¹⁹磅。如果假設這落塵的密度是每立方呎140磅，那麼落塵的總體積將是10¹⁸立方呎。地球的表面積約為5.5×10¹⁵平方呎，因此在過去五十億年間，地球表面就應該平均累積了182呎厚的外太空落塵！\n\n然而整個地表上，從來沒有見過任何外太空落塵層的跡象。在月球表面，照理也應該有同樣厚度的外太空落塵，但太空人發現並非如此。（在發射太空人上月球時，人們曾擔心太空人登陸月球時會深陷這些落塵中，但有關單位卻未解釋為何後來發現那兒並無此種落塵。）即使地球的年齡只有五百萬年，地殼表面至少也應積了二吋厚的落塵。\n\n鎳在地殼表面，尤其在海洋中，是稀有物質，而Pettersson氏卻計算出落塵中鎳之含量為2.5%，相當於現有地殼含鎳量的三百倍。因此，如果這些落塵曾平均地混入地殼內，則地殼厚度（假設一開始地殼中並不含鎳）應該是182×300呎，亦即厚達10哩！河水每年帶進海中約7.5億磅的鎳，而海洋中鎳的總含量約為七萬億磅，如此，從河水帶入海中的鎳則僅需九千年就可達到目前的總含量。唯一可以說明地殼含鎳量那麼少的理由，是地球年齡只有幾千年之久。'
                  },
                  {
                    title: '(三)物質流入海洋',
                    content: '單從河水帶入海中的鎳量和海中的總鎳量來看，海洋的壽命頂多只有九千年。類似的計算法可以應用於海中其他溶解物，也就是將任何海洋中的物質總量除以每年河流所攜之量，即可得到積存該總量所需經歷的年數。Riley氏及Skirrow氏根據多種化學元素的計算（鈉2.6億年，鎂4500萬年，矽8千年，鉀1100萬年，銅5萬年，金56萬年，銀211萬年，汞4.2萬年，鉛2千年，錫10萬年，鎳1.8萬年，鈾50萬年），他們還列舉了許多其他元素的計算結果，幾乎全部少於十億年，許多甚至不到一千年（如鋁，只需一百年！）（註29）\n\nNevins氏明白地指出：每年約有二百七十五億噸的沉積物沖入海中，已有的海底沉積物總量約為八十二億億噸，以每年沖積量來除，得到的最高年齡是三千萬年（即使用進化論的說法）。（註31）海洋最高年齡（根據海水來源推算）也只是三億四千萬年。（註32）這在照進化論的說法，這時期只到志留紀（亦即魚的時代）。'
                  },
                  {
                    title: '(四)地涵 (Mantle) 中的物質進入地殼',
                    content: '不但水份會從地涵流到地面，其火成岩的原料也是由地涵來的。目前每年平均至少有十二個火山爆發，每個都噴出相當數量的岩漿。若把墨西哥的Paricutin火山當做一個典型來看，它每年噴出0.2立方公里的岩漿（註33）。十二個活火山每一年所增加的火成岩就有2.4立方公里。在地殼表層下的大量火成岩中，隱藏深處的火成岩比存於表層的多得多，因此我們可以合理的推論，地殼每年至少有十立方公里的新火成岩是由地涵來的。\n\n地殼的總體積約為5×10⁹立方公里。因此依照目前火山爆發的頻率來推算，整個地殼只需五億年即可形成，而五億年只追溯到寒武紀而已。然而所有的地質學家都相信，地殼早在寒武紀前幾十億年就已形成了。在此，「古今一致說」再一次要面對嚴重的問題與矛盾。'
                  },
                  {
                    title: '(五)地球磁場的衰變',
                    content: '另一個較難卻極重要的測定地質年代的方法是根據地球磁場的強度而定的。這方面的證據是德州大學EL Paso校區的物理教授Barnes博士所提出的（註34）。他指出，過去一百三十五年來，磁場強度（磁場動量Magnetic moment）曾經用統計分析的方法，仔細地測量過，他發現磁場強度正在衰變之中，其衰變率符合指數率 (Exponentially)，其半衰期約為一千四百年。\n\n這個數字表示地球的磁場在一千四百年前要比今天強二倍。在二千八百年前則強四倍，以此類推，在七千年前的強度就有現在的三十二倍，我們幾乎無法想像此這個再強的磁場。如果推到一萬年前，地球磁場強度就相當於一個磁星！這是極不可能的。磁星有熱核反應來保持它強大的磁場強度，但地球沒有。Barnes氏指出地球磁唯一的可能來源是地心中鐵礦軸上電子運轉時所產生的電流。這些電流通過電阻時一定產生熱，這些熱經由四周媒介物而消失。由於熱的消失，電流也會慢慢減弱，於是磁場強度也就跟著衰減。\n\n因此，根據目前地球磁場強度來推算，一萬年似乎是地球年齡最高的極限。若不贊成這結論，則必須推翻「古今一致說」，而此說正是進化論者持以為正，而且在推演地球長齡的過程中所引用的。'
                  },
                  {
                    title: '(六)其他方法及評估準則',
                    content: '我們也只討論了地球上的一些現象，另外還有許多太空現象指出太陽系的發生是不久以前的事。（例如太陽系中一直存在的短期彗星，根據估計，它們的壽命不超過一萬年。太陽系中星際間也一直存在一些小粒子，按Poynting-Robertson效應，它們的壽命不會超過十萬年。）\n\n評估各種測年代方法，以下原則相當合理：(1)古今一致說應用於短時期較應用於長時期準確——求得較年輕的方法較求得較古老的方法可能更準確些；(2)能應用於全球的方法要比只能用於地區性的方法來得準確——古今一致說若只用於某些特定地區其誤差會很大，但是用在較廣大地區甚至全球時，則誤差可以減少；(3)經過長時間測量過的變化率（用來定年代用）要比僅經過短時間所測得的來得準確。\n\n由此看來，鉀-氬法極不可靠；相反地，地球磁場強度法可能較正確。最後我們願意再指出，指證地球年紀相當年輕的定年代法比指證其年老的多得多。唯一可以真正證明地球有幾十億年歷史的證據是因為進化論非要有很長的年代不可，而大多數的科學家又是相信進化論。科學真理從來不是靠投票表決的，事實上大多數人所贊成的常常也可能是錯誤的。'
                  },
                ].map((item, i) => (
                  <div key={i} className="border border-blue-100 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2 text-sm">{item.title}</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 四 */}
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">四、人的年代</h3>
              <p className="text-gray-700 leading-relaxed mb-3">前面我們所討論的主要是地球的年齡，及地質形成的年代，而這些都是在有人類之前發生的。雖然最早有文字記載的人類史只是幾千年前的事，但進化論者相信人與猿從他們共同的祖先分開時，約在三千萬年至七千萬年前，而真正現代人至少是在一百萬年前甚至是在三百萬年前出現的。創造模式定出的年代是以地球磁場的蛻變等方法所求得的為骨架，也就是說整個歷史是在過去六千年至一萬年前才開始的。</p>

              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-blue-800 mb-2">(一)放射性碳定年代法</h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">同位素碳十四通稱為放射性碳，而一般中性碳是碳十二。放射性碳是大氣層上層氮十四與宇宙線經過一連串複雜反應所產生的。碳十四一旦形成，立即就開始放射出具他粒子而變回氮十四，其半衰期是5730年。碳與氧形成二氧化碳，這二氧化碳是動植物生命中重要的成分。碳十四與碳十二之比在生物體中也應當是一個常數。當動植物死掉時，它就不再與外界交換碳，而體內的碳十四仍繼續的蛻變，使碳十四與碳十二之比漸漸減少。從生物死後任何時刻所測得這比率就可導入公式而計算出該生物死了多久，也就是該標本的「年齡」。放射性碳定年代法看起來是很有用，發明此法的Libby氏也因此得了諾貝爾獎。</p>

                <div className="space-y-2 text-sm text-gray-700">
                  {[
                    { title: '1. 許多生物體並不與碳14維持平衡狀態', body: '碳十四法假設碳十四與碳十二的標準比率適用於所有活著的生物，一直到它死的時候。例如，現在仍活著的軟體動物，它們的甲殼 (Shell) 按此法測定就有兩千三百年之老的報告（註35），表示此軟體動物一定和含碳十四極少的碳酸鹽進行了碳的交換，若放射性碳所測出的年齡當然就比實際的年齡不知會老多少了。Anderson氏的實驗顯示碳十四的衰蛻率在過去可能曾經很不穩定，以致於許多現在放射性碳所測出的年代並不正確。（註36）' },
                    { title: '2. 自然碳（非放射性碳）的總量在過去可能曾有變化', body: '在大天災之前，整個地球皆屬亞熱帶氣候，並且陸地與海洋面積之比也比現在的大得多，因此地面上必有大量的植物，這從全球蘊藏有大量的煤礦就可以看出。因此，當時活著的生物其碳十四及碳十二的比率必定很小，即使它們年齡只有六千多年，其蛻變後所剩餘的放射性碳恐怕也已所剩無幾了。另一方面，從大天災之後幾世紀以來，地球上的植物銳減，而海洋面積超過陸地（估總面積百分之七十點八），南北極的冰山又蓋住三分之一的地面，所以碳十二的量比大天災前（甚至比現在的量）少，因此碳十四與碳十二的比率就大，那麼放射性碳法測出當時的生物年代可能就比實際的來得短。' },
                    { title: '3. 放射性碳與普通碳的比率可能尚未達平衡狀態', body: 'Libby博士在他發明這種方法時就已經注意到這個假設的嚴重性。他說：「如果我們假想宇宙射線曾中斷過一段時期，直到最近才恢復，則達到平衡狀態所需之大量的放射性碳無法形成，而生物體中的放射性碳將比用中子強度所計算的少得多。」（註39）Lingenfelter氏在1963年指出：「雖然測量上的誤差相當大，但實驗已充分顯示放射性碳生成率超過衰蛻率百分之二十五，這表示碳十四的產生與蛻變恐怕不能達到平衡。」（註40）近年Switzer氏說：「這些結果……顯示，碳十四的濃度至少在過去一萬年中是不停的在增加。」（註42）' },
                  ].map((item, i) => (
                    <div key={i} className="bg-white border border-blue-100 rounded p-2 mb-2">
                      <p className="font-semibold text-blue-700">{item.title}</p>
                      <p className="text-gray-700 mt-1">{item.body}</p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mt-2">Cook氏綜合有關資料得到的結論是，現今碳十四之生成率是每克每分鐘18.4個原子，而其衰蛻率則是每克每分鐘13.3個原子，因此放射性的碳仍在增加中。Cook氏導出一個不平衡反應的方程式，推算出起初放射性碳等於零的時間(To)，結果To約只在一萬年之前。這是用放射性碳法所得之大氣年齡，也可能就是地球的年齡。Whitelaw氏指出，碳的生成率應修正到每克每分鐘27個原子，而不是18.4個原子，如此則To就減至五千年了。（註44）很值得注意的一點是，最近三千年的歷史與放射性碳所測定的年代互相一致。如果用修正後不平衡狀態來計算，所測算出的較早的年代與聖經及其它歷史記錄是相吻合的。</p>
              </div>

              <div className="bg-indigo-50 rounded-lg p-4">
                <h4 className="font-semibold text-indigo-800 mb-2">(二)人口統計</h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">對於人類年代另一個有趣的計算法是根據人口的增長。若人類在地球上真的活了幾百萬年，而卻只在最近才發生人口問題，那真是件怪事。全世界的總平均，每家有3.6個孩子，而且每年人口增加率是百分之二。</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">假設一開始只有兩個人，就是最早的一對父母。假設他們有兩C個孩子，C男孩C女孩。這些孩子後來成立C個家庭，每個家庭又有兩C個孩子，這樣在第二代就有2C²個孩子。到第n代就應有2Cⁿ個人。現在將世界現有總人數代入公式得：2Cⁿ = 3.5×10⁹。</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">若假設從第一對始祖到現在共有一百代（每代四十年共四千年），則平均每個家庭的孩子數是2C = 2(3.5×10⁹/2)^(1/100) = 2.46。換句話說，平均每個家庭的孩子數是小於一又四分之一個男孩及一又四分之一個女孩時，在四千年中世界總人口就會達到三十五億人。若用百分比來算，每年人口增加之百分數G = 1/2，也就是說，每年人口增加百分之0.5的話，在四千年內總人口就會達到現在的數目。而這只是現在人口增加率的四分之一。</p>
                <p className="text-gray-700 text-sm leading-relaxed">相反的，進化模式認為人類歷史有一百萬年就會非常勉強。若人類已有二萬五千代而人口總數只有三十五億那真是不可思議之事。若人口增加率在過去一百萬年中每年只百分之0.5，或平均每家只有二個半孩子，則二萬五千年後地球人類應該超過10²¹⁰⁰，這根本是個無法想像的數目（在已知宇宙中只能擠得下10¹³¹個電子）。雖然進化模式可以經由許多續加的假設以符合現在已知的人口數字，但是創造論卻不需要任何修正就能與實際數字吻合。在本章末我們只要指出一點，那就是人類史僅數千年的話法是與已知的人口資料相吻合的。</p>
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
                '岩石年齡的推定既不按外觀、岩石類型、礦物成分、結構特徵、深淺位置、放射性方法，也不按所有化石——這九個「不按」指向一個事實：決定岩石年齡的唯一方法是「指標化石」，而指標化石的年代判定又依據進化論，進化論又依據化石——這是一個強橫的循環論證，毫無獨立證據。',
                '放射性測年代法（鈾-鉛、鉀-氬、銣-鍶）必須預設三個無法驗證的假設：密閉系統、已知初始成份、速率恒定不變。三個假設沒有一個能被實驗證明，大自然中也沒有密閉系統。夏威夷1801年形成的玄武岩被鉀-氬法測出1.6億至30億年的年齡——現代已知年齡岩石尚且如此錯誤，古代岩石的測定更無從可信。',
                '六個顯示地球年輕的證據：(1)大氣層中氦氣積累計算→最多17.5萬年；(2)宇宙落塵應積182呎但完全不存在→地球年輕；(3)海洋化學元素積累（鎳9千年、矽8千年、鉛2千年）→遠小於50億年；(4)地殼形成速率→5億年即足夠；(5)地球磁場半衰期1400年→1萬年前已達磁星強度，不可能更老；(6)短期彗星、星際粒子壽命均在萬年以內。',
                '放射性碳法四大問題：生物體並不全與碳14維持平衡；衰蛻率可能不穩定；大天災前植物大量存在導致碳14/碳12比率極小（測出年代偏老）；碳14生成量超過衰蛻量25%，尚未達平衡（Lingenfelter 1963）。最合理結論：碳14形成的起點To約在1萬年至5千年前，與大天災時間吻合，也與聖經歷史吻合。',
                '人口統計強烈支持創造論：從兩人開始，每年增長0.5%（現實增長率的四分之一），只需4000年就達35億人口。進化論若要解釋100萬年人類歷史，若以每年0.5%增長，人口將超過10²¹⁰⁰（宇宙中只容得下10¹³¹個電子）——完全不可能。創造論無需任何修正即吻合現實數字，這是科學與歷史的雙重支持。',
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
              <h4 className="font-semibold text-indigo-700 mb-2">碳14定年法的現代發展：樹輪校正曲線</h4>
              <p className="text-gray-700 leading-relaxed">本書寫作於1970年代，當時碳14法的問題正在被科學界討論。此後，科學家發展出了樹輪年代學（Dendrochronology）來校正碳14法，用古老長壽樹木（如北美刺果松Bristlecone Pine，可活超過5000年）的年輪與碳14測定值對比，建立校正曲線。目前的校正曲線已延伸至約5萬年前。本書指出的碳14尚未達平衡的問題，現代研究確認碳14生成確實超過衰蛻，但樹輪法提供了獨立的校正基準，使碳14法在1萬年以內的範圍更精確。這不代表碳14法是全然可靠的，但也說明科學工具在誠實應用下會不斷修正自身。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">地球磁場的真相：不只是衰變，還有逆轉</h4>
              <p className="text-gray-700 leading-relaxed">本書引用Barnes博士關於地球磁場持續衰變的論點。然而後來的地質研究發現，地球磁場在歷史上曾多次逆轉（南北磁極互換），在海底岩石中留有清晰記錄。這對Barnes的單純衰減模型形成挑戰——如果磁場只是衰減，就不會有多次逆轉的記錄。創造論的回應是：磁場逆轉可能在大洪水期間急速發生（Humphreys的渦流模型），並不代表地球有幾億年歷史。這場爭論至今未有定論。對讀者而言，此事提醒我們：每一個科學論證，包括創造論者引用的，都需要誠實面對反面證據。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「大多數科學家相信」並不等於真理</h4>
              <p className="text-gray-700 leading-relaxed">本章末尾說：「科學真理從來不是靠投票表決的，事實上大多數人所贊成的常常也可能是錯誤的。」這句話具有深刻的認識論意義。科學史上充滿了「主流共識被推翻」的案例：大陸漂移（1960年代前被主流地質學家拒絕）、胃潰瘍由幽門螺旋桿菌引起（發現者Barry Marshall 1984年被全體醫界嘲笑，後獲諾貝爾獎）、天圓地方等。這不是說少數派一定對，而是提醒我們：科學的精神是跟從證據，而不是跟從人數。在信仰上，這個原則同樣適用——真理不由多數決定。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">人口增長計算：一個被輕忽的論證</h4>
              <p className="text-gray-700 leading-relaxed">本章的人口統計論證在創造論文獻中是相對罕見但很有說服力的論點。如果人類確實有100萬年歷史，即使以非常低的增長率（每年0.001%），人口也會達到難以置信的數字。反對者通常主張史前的高死亡率（疾病、戰爭、飢荒）足以抵消人口增長——但即使接受這個假設，那麼在100萬年間死去的大量人類所留下的骸骨、工具、文化遺跡應該遍布地球，然而考古學所能找到的「現代人」遺跡只在數萬年內。人口統計的邏輯是簡單有力的：若人類歷史只有幾千年，現在的人口規模完全可以解釋；若有百萬年，則完全無法自洽。</p>
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
              '本章揭示岩石年齡的推定歸根究底靠的是「指標化石」，而指標化石的年代又依據進化論——這是一個循環論證。你認為一個「循環論證」是否就是無效的？在日常生活或信仰中，你有沒有見過其他循環論證的例子？',
              '放射性鉀-氬法將夏威夷1801年形成的岩石測定為1.6億至30億年——誤差如此巨大。如果你是一個地質學教授，你會如何向你的學生解釋這個現象？這個事實對你理解「科學測定」的可靠性有什麼影響？',
              '本章列舉了六個顯示地球年輕的科學測量（氦氣、落塵、海洋礦物、地殼形成速率、磁場衰變、彗星壽命），每一個指向的年齡都遠小於50億年。你認為為什麼這些證據通常不在主流教育中被提及？「不被提及」本身說明了什麼？',
              '碳14尚未達到平衡的現象（生成量超過衰蛻量25%），如果真實，意味著地球的碳14歷史可能在萬年以內。你認為這個論證和聖經所記載的創造及洪水時間框架是否吻合？有哪些還需要進一步了解的地方？',
              '人口統計論證非常直觀：若人類有100萬年歷史，以任何合理的增長率計算，人口都會是天文數字。你的第一反應是什麼？你認為進化論者對這個論證會提出什麼樣的反對意見？這些反對意見有說服力嗎？',
              '本書說：「老師應該告訴學生科學真理從來不是靠投票表決的，事實上大多數人所贊成的常常也可能是錯誤的。」這句話如果應用在你的信仰上，你有什麼感受？你的信仰是因為「多數人相信」，還是因為你找到了讓你信服的理由？',
              '這一章包含大量的科學數字和技術細節。閱讀完之後，你感到更有把握，還是更困惑？你認為對於沒有理科背景的基督徒，這類「科學護教學」（Apologetics）有沒有價值？其局限在哪裡？',
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
              <h4 className="font-semibold text-green-700 mb-2">📊 親手計算人口統計</h4>
              <p className="text-gray-700 mb-2">用計算機做一個簡單的計算，親身體驗本章的論證：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>若今天地球人口35億，從兩人開始，每家2.5個孩子（保守估計），每代40年</li>
                <li>計算：需要幾代才能達到35億？（大約100代=4000年）</li>
                <li>再算：若人類有1百萬年（25000代），每家只需2.001個孩子，人口會是多少？</li>
                <li>把計算結果寫下來，默想這個數字的意義</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 認識「循環論證」</h4>
              <p className="text-gray-700 mb-2">本章揭示的核心問題是「循環論證」。這週練習識別循環論證：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>找出日常生活中3個循環論證的例子（可以是廣告、政治、或日常討論）</li>
                <li>例如：「這個產品很好，因為很多人買；很多人買，因為它很好。」</li>
                <li>思考：一個論證是否是循環的，和它是否正確，有必然關係嗎？</li>
                <li>帶著你的例子和家人或朋友討論</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 寫一封信給「懷疑的朋友」</h4>
              <p className="text-gray-700 mb-2">假設你有一位朋友說：「科學已經證明地球有46億年，基督教的地球只有幾千年的說法是無稽之談。」根據本章，寫一封200字以內的回信：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>不需要否定所有科學，只需要指出一個具體的疑問或論點</li>
                <li>語氣要謙遜（承認有些事你也不完全確定）但誠實</li>
                <li>不需要說服對方，只需要打開一個對話的空間</li>
                <li>寫完後請另一個人讀，看看他們的反應</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 閱讀詩篇90篇</h4>
              <p className="text-gray-700 mb-2">「主啊，你世世代代作我們的居所。諸山未曾生出，地與世界你未曾造成，從亙古到永遠，你是神……」帶著本章的科學問題重讀詩篇90篇：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>神的時間觀與人的時間觀有什麼不同？（90:4）</li>
                <li>人類年代的短暫（草的比喻）讓你感受到什麼？</li>
                <li>「求你指教我們怎樣數算自己的日子，好叫我們得著智慧的心」（90:12）——什麼是「數算日子」的智慧？</li>
                <li>默想完後，把一句印象最深的話抄下來</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic text-sm leading-relaxed">「主啊，感謝祢讓我看見，在那些看似鐵板釘釘的科學數字背後，其實有許多未被說出的假設、未被討論的循環，和未被承認的不確定性。我不是要否定科學，而是學習帶著清醒的眼光看待一切知識——包括我自己信仰的根基。求祢賜我智慧，讓我在面對懷疑和挑戰時，既不盲目退縮，也不傲慢反擊；而是帶著誠實、溫柔和尊重，與人同尋真理。主，無論地球年齡是多少，我知道一件事：從起初到永遠，祢都是神，祢是我的根基和我的家。奉主耶穌的名，阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
