import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Eye, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book31Ch1() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">第一章</h1>
        <h2 className="text-xl font-semibold text-gray-700">進化論是對是錯</h2>
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
              <h3 className="font-bold text-teal-700 text-lg mb-3">一、化石證明生命不是來自進化</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                達爾文的進化論主張，生命是由低等生物逐步演化至高等生物的，若此理論正確，化石中必然找得到生物演化過渡時期的記錄。但事實是怎樣的呢？進化論學者花了兩百年時間，在世界各地尋找過渡時期化石，至今仍找不到。化石的紀錄顯示，各物種都是突然出現於地球上，而非逐漸演化而來。各物種之間並沒有任何過渡的化石記錄。更令人注意的是，地球上先出現的化石，不少竟然比後來的化石更為複雜，這種現象根本無法用進化論來解釋。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                進化論為了自圓其說，搬出各種所謂「猿人」化石來支撐理論，但這些「證據」卻一一被揭穿是偽造或誤判：
              </p>
              <ul className="list-none space-y-3 ml-2">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold flex-shrink-0 mt-0.5">▸</span>
                  <p className="text-gray-700"><strong>內布拉斯加人（Nebraska Man）</strong>：1922 年，進化論學者根據一顆牙齒，聲稱發現了一位距今約一百萬年的猿人，並廣泛宣傳。後來發現，這顆牙齒根本是一隻豬的牙齒，這個鬧劇說明了進化論學者急於尋找「證據」的心態。</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold flex-shrink-0 mt-0.5">▸</span>
                  <p className="text-gray-700"><strong>爪哇人（Java Man）</strong>：1891 年尤金·杜布斯（Eugene Dubois）在爪哇島發現一個頭骨頂部和一根大腿骨，宣稱是「猿人」化石。後來發現這兩件骨骼分別屬於不同個體，頭骨屬猿類，大腿骨屬人類。杜布斯本人晚年也承認了這個錯誤。</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold flex-shrink-0 mt-0.5">▸</span>
                  <p className="text-gray-700"><strong>北京人（Peking Man）</strong>：所有北京人骨骼化石在二次大戰期間神秘失蹤。僅存的照片顯示，頭骨底部全被打碎——這是人類用來吸取腦漿的典型做法。換言之，北京人可能只是被人類當食物的猿類，而非人類的祖先。</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold flex-shrink-0 mt-0.5">▸</span>
                  <p className="text-gray-700"><strong>辟爾當人（Piltdown Man）</strong>：曾被鑑定為五十萬年前的猿人，直至 1953 年才被揭發是根本偽造的——原來有人將某些現代猿猴的頭骨及牙齒加工上色，這是件愚弄世人的惡作劇。</p>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                所以化石證明物種是突然出現的，並且物種彼此之間沒有任何突變時期；這豈不是神當初創造萬物使所有物種「各從其類」（創世記一章 25 節）的明證嗎？
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">二、基因證明物競天擇是錯的</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                達爾文以為「長頸鹿的進化」是長久伸脖子吃樹葉的結果，這犯了嚴重的生物學錯誤。生物是藉著基因（Genes）的 DNA 來遺傳其特性，而不是靠身體運動改變遺傳；遺傳要改變，非要基因突變不可。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                基因可以藉著自然突變的方式產生新品種嗎？不可以。在遺傳科學家長達九十多年的努力研究下，證明基因具備奇妙而複雜的組合，絕不輕易改變；即使少數例外，這種自然突變只會使物種機能減弱，易於早期死亡。也就是說，自然突變只會使物種退化而非進化，而且對原物種的數量無實質的影響；他們證明，想用基因自然突變來造成新品種是「根本無法成功的事」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                不但如此，一些基因物質也不是像進化論所想像的「生命形態愈複雜，基因就愈多」。其實，有些無脊椎生物（Invertebrates）的染色體比人類還多，此外，蟾蜍（Toad）的基因物質就比人類多得多，你想進化論還是對的嗎？
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch1-fig6-peppered-moth.jpg" alt="胡椒蛾有淺色的和黑色的" className="max-w-full h-auto rounded-lg shadow-md" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 6 — 胡椒蛾有淺色的和黑色的，進化論以為這是「物競天擇」就錯了。</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                「物競天擇」究竟錯在什麼地方？在許多年以前，英國有一種胡椒蛾（Peppered Moth），這蛾黑色的數量遠超過淺色的蛾。直到 1950 年代，英國發生一次大霧造成嚴重災害，英國人為了改善環境，就開始清掃煙囪、整理樹幹，使得環境的顏色變淺了許多。這樣，黑色的蛾就無法像淺色的偽裝在環境裏，大量的黑蛾就被鳥吃去。於是黑蛾減少，淺色蛾的數量大增，進化論以為這是「物競天擇」就錯了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                原來，蛾體內本來就有黑色、白色及灰色的基因（遺傳因子）。不錯，環境使得黑蛾減少，但這並不是進化或基因改變。倘若這種使黑蛾減少的環境因素不除去，黑蛾固然會瀕臨絕種，這只證明所謂「物競天擇」只會使得擁有某種基因的物種死亡，卻絕對不會因此基因改變，發展出更複雜的生命形態出來。所以，以為物種是可以藉「物競天擇」達到進化的目的，這種想法是根本錯誤的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                就基因而言，一百年前的胡椒蛾和今天的蛾還是一樣，未曾改變。1966 年 12 月科學雜誌 Science 報導，考古發現一個被認為有所謂「五千萬年」歷史的蝙蝠化石，生物學家說牠與今天的蝙蝠根本一樣。原來，神在創造各種生物時，不但「各從其類」，而且將多樣的特性放在基因中，使其多方適應環境的變化，這就是何以同類的物種（Species）卻有多樣的形態。譬如狗有牧羊犬、狐狸狗、臘腸狗與大丹狗等等，人也分黃種人、白種人與黑種人等等。所以，根據基因證明，物種的特徵加強，只是基因某部分特性增強的結果，絕非進化變種使然。
              </p>
              <div className="flex flex-col items-center my-4 gap-4">
                <div className="flex flex-col items-center">
                  <img src="/images/book31/ch1-fig7-butterflies.jpg" alt="各種形態的蝴蝶" className="max-w-full h-auto rounded-lg shadow-md" />
                </div>
                <div className="flex flex-col items-center">
                  <img src="/images/book31/ch1-fig8-shells.jpg" alt="各種形態的貝殼" className="max-w-full h-auto rounded-lg shadow-md" />
                </div>
                <p className="text-sm text-gray-500 italic text-center">圖 7 及 8 — 神在創造各種生物時，不但「各從其類」，而且將多樣的特性放在基因中，使其多方適應環境的變化，這就是何以同類的物種卻有多樣的形態。譬如上方的蝴蝶和貝殼都有各種的形態，絕非進化使然。</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">三、生物學證明物種沒有進化</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                進化論學者海寇（Haeckel）曾提出胚胎（Embryos）類同的理論，他以動物胚胎的成長情形來證明進化論，這在科學史上稱為生源論（Biogenic Law），就連達爾文也讚揚這是「對進化論最佳的證據」。當時，有人揭穿他的偽證，學院法庭也宣判他「偽造實驗證據」。當時海寇在庭上承認，他為了「彌補無法發現的胚胎類似證據，就蓄意改變所發現的結果，以成全進化論的假設」。他的理論直到 1930 年代，生物學家確實在實驗中找不到海寇所謂的胚胎類同處，這理論就為人廢棄。至今，尚有人將這偽證放在教科書上，實在令人費解。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                另外，有人教導別人說，人體內有許多器官逐漸退化——這也是進化論的證據。他們指出盲腸、扁桃腺、副甲狀腺、尾骶骨等都在退化中。但是，現今醫學已逐步澄清這項誤會，證明所謂的退化器官，其實都在人體上扮演與其他器官同等重要的角色：
              </p>
              <ul className="list-none space-y-2 ml-2">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold flex-shrink-0 mt-0.5">▸</span>
                  <p className="text-gray-700"><strong>盲腸（Appendix）</strong>控制腸內一部分的植物纖維，並擔任大腸組織的抗菌工作。</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold flex-shrink-0 mt-0.5">▸</span>
                  <p className="text-gray-700"><strong>扁桃腺（Tonsils）</strong>提供白血球細胞到咽頭去消滅對人體有害的細菌。</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold flex-shrink-0 mt-0.5">▸</span>
                  <p className="text-gray-700"><strong>副甲狀腺（Parathyroid Glands）</strong>負責調節鈣和磷酸鹽在血漿中的平衡作用。</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold flex-shrink-0 mt-0.5">▸</span>
                  <p className="text-gray-700"><strong>尾骶骨（Coccyx Bone）</strong>也在人體內輔助肛門括約肌（Sphincter），幫助大腸排泄。</p>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                既然證明沒有退化器官，按照進化論，那麼也應該有未成熟的進化器官（Nascent Organ）被人發現才對啊？事實證明，現今科學沒有發現這種進化器官，就連化石裏也找不著進化的證據，朋友，你還相信進化論嗎？
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">四、數學證明進化概率不可能</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                進化論聲稱，有機物最初由無機物經由機會碰撞而自然產生，他們假設最初無機物碰巧生成氨基酸（Amino Acids），那氨基酸又碰巧生成蛋白質（Protein），蛋白質又碰巧生成細胞（Cell）。一切都是那麼自然，碰巧產生新品種。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                其實，氨基酸很容易就被自然界毀滅，它被紫外線或電擊毀滅的概率，就遠超過它形成的概率，所以無法多量生產。此外，氨基酸若要形成蛋白質，必須要能排列成一定組織的次序才行，假使一個只有 50 個氨基酸的蛋白質，若要自然地排列成有系統的組織，它形成蛋白質的概率是 1 比 1 後面加 65 個零。1 後面加 4 個零是一萬，1 後面加 8 個零是一億，你可以算算它的概率是幾億萬兆分之一。請不要忘記，一般的蛋白質大都需要更多倍的氨基酸呢。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch1-fig9-dna.jpg" alt="DNA分子放大的圖形" className="max-w-full h-auto rounded-lg shadow-md" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 9 — 這僅僅是 DNA 分子放大的圖形，圖中各種顏色的球體分別代表磷、碳、氫、氧、氮等各種原子，如此組成一種複雜的螺旋形結構。</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                好吧，你若不服氣，我們就來研究一下最簡單的細胞吧。最簡單的細胞，也是由數千個各樣的蛋白質，和數百萬的各種 DNA 和 RNA、複雜分子等，組成一種複雜的結構系統。若是藉著概率自然組成，每秒重新組合，就早已超過進化論所謂的 150 億宇宙年齡。再者，細胞中間，蛋白酵素（Protein Enzymes）需要 DNA 和 RNA 才能產生，但是，若要產生 DNA 和 RNA 又要靠蛋白酵素，彼此相生，不能單獨作業，這樣進化論就無法解釋這種現象了。是先有雞呢？還是先有蛋呢？是先有 DNA 呢？還是先有蛋白酵素呢？如此，進化論的弱點，在現今科學驗證下，就愈顯得暴露無遺了。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">五、邏輯證明進化論自相矛盾</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們若仔細觀察，再用邏輯來分析地球上的許多生物構造，就會發現實際上科學是和進化論相抵觸的。就以人的頭腦構造來說吧！人腦內部的功能十分複雜，至今人類尚無法完全明白頭腦的真正構造，而人腦是無法用電腦去取代的。人腦內部的腦中子（Brain Neutron）可以在一秒之內連結 20,000,000,000,000,000 多次，科學家實在無法解釋人腦何以能在一秒之內作如此驚人的連結。難怪科學家統計一般人最多只使用到頭腦 10% 的部分，為何其他 90% 以上的部分沒有使用到，科學家至今仍無法完全解答這個問題。光由這一點，就可以推翻進化論的邏輯。人若是進化而來，頭腦應該是被充分使用才對，人腦如何能「自然演進」超過環境需要功能的十倍以上呢？
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                看來人腦不是在「進化」，似乎是在「退化」其使用的功能。現代人有太多的電子媒體、電影、電視、電腦等提供資訊，乃至於頭腦不再去仔細思索、推理、分析事理，許多人太輕易就追逐潮流，相信別人的理論。人徒然有許多知識，卻失去了判斷真理的智慧。難怪自 19 世紀以來，許多人被未經科學證實的進化論所蒙蔽，以至造成近代人類文明史上的種種後遺症。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                人類的祖先比我們現代人聰明嗎？且看聖經上記載的人類始祖亞當時代，那時神把「野地各樣走獸，和空中各樣飛鳥，都帶到那人面前看他叫什麼。那人怎樣叫各樣的活物，那就是牠的名字。那人便給一切牲畜，和空中飛鳥，野地走獸都起了名……。」（創世記二章 19 至 20 節）。亞當的頭腦可以為「一切牲畜，和空中飛鳥，野地走獸」取名字。人類初期的生物物種比今天多得多，而亞當有知識、智慧及記憶為這一切動物取名，這是何等的腦力！如今有多少現代人能記得世界上 1/10 生物的名稱？難怪現代人的頭腦只使用不到 10% 的部分。
              </p>
              <p className="text-gray-700 leading-relaxed">
                想一想人的眼睛構造是多麼的複雜，人的手指骨頭、關節是多麼的巧妙。搖搖你的手，用你的眼睛東張西望一下，這些器官是多麼神奇的創造！如果我們的眼睛無法分辨顏色，也無法欣賞神所創造的大自然美麗景象，那將是多麼的遺憾！如果人的手如同章魚的手，那將有多少物品人無法去製作？像這樣一個複雜的人體構造怎麼可能是進化而來呢？是誰賦與人類生命的能力？是誰給生命的邏輯和程式？是誰賜下生命的目的和方向呢？
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">六、進化論無法解釋的現象太多</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                地球上有許多生物的生活習慣，實際上是和進化論背道而馳的。進化論無法解釋的現象太多，在理論上一直無法自圓其說。譬如在深海中生活的章魚及烏賊，他們的生活環境一片漆黑。在深海裏有許多魚類是盲目的，但是章魚及烏賊的眼睛卻和人類的眼睛構造類似，而他們在深海中為何需要一對明亮的眼睛呢？如果進化論是正確的，章魚及烏賊不應該有類似人類的眼睛才對。按照進化論所謂的「適者生存」原理，章魚及烏賊應該根本無法在深海環境中「演化」而成，牠們也不應該現今仍然存活在深海中才對。事實證明，進化論的理論是錯誤的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                不僅海裏，陸地上也有許多動物的生活習慣是進化論無法解釋的：譬如在澳洲樹上生活的樹獺，這是一種行動很緩慢的動物，排泄時卻需要爬到地面上來。因為行動緩慢，地面上的野獸可以輕易的趁樹獺下樹時捕捉到牠們。樹獺為了排泄，甘冒生命的危險爬下樹來，像這樣違反常理的動物怎麼可能是進化而來的呢？
              </p>
              <p className="text-gray-700 leading-relaxed">
                此外，1998 年法國生物學家雷米沙文也提出肝吸蟲違反進化論的實例：肝吸蟲寄生在羊的肝中，母蟲每次產卵約 15,000,000 粒，該卵隨著羊的糞便排出到地面。這時必須有一種蝸牛爬過這些卵，卵才能依附蝸牛，再經由蝸牛移到植物上，然後羊「碰巧」吃下這個植物，肝吸蟲才能回到羊肝中繁殖。在這種複雜的繁殖過程中，幸運的卵大約只有十多粒能存活下來。若進化論是正確的，這種繁殖法早就被物競天擇所淘汰了，但是肝吸蟲一直是用這種方法代代相傳。對於這樣的現象，進化論就無法解釋了。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">七、現今實例證明進化論是錯的</h3>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch1-fig10-wollemi.jpg" alt="古杉樹葉子和侏羅紀化石" className="max-w-full h-auto rounded-lg shadow-md" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 10 — 1994 年在澳洲發現的古杉樹葉子（右邊）和石版上侏羅紀杉樹葉子的化石（左邊）完全相同，這種古杉樹至今仍在生長著。</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                1994 年 8 月，植物學家在澳洲雪梨市郊渥勒米公園（Wollemi National Park）內發現 39 棵曾是「侏羅紀恐龍時代」的杉樹。這渥勒米公園原是在雪梨市西方大約 200 公里的藍山山脈雨林中，所發現的 39 棵古杉樹，其中最大的一棵高達 40 公尺，直徑 3 公尺，樹齡至少有 150 多年，被發現的時候整棵樹覆蓋著綠油油的葉子。澳洲皇家植物園園長說：「這就好像發現一隻活生生的小恐龍一樣。」而這種古杉樹據說早在「一億五千萬年前就已經絕跡了」。1994 年 12 月澳洲科學家再次宣布這種侏羅紀時期的杉樹，已成功的被他們培育出幼苗，目前正在計劃大量繁殖成為盆景。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch1-fig11-coelacanth.jpg" alt="腔棘魚" className="max-w-full h-auto rounded-lg shadow-md" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 11 — 這隻在非洲東岸印度洋深海中捕獲到的魚，竟和進化論所謂「三億五千萬年前在淺水」中生存的腔棘魚化石構造相同。</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                另外還有一種名叫腔棘魚（Coelacanth）的著名化石。根據進化論學者聲稱，這種曾在「三億五千萬年前」一度生活在「淺水」環境裏的魚類，因為其滑鰭突顯，就臆測牠是魚類演化至兩棲類的最好證據。進化論學者原估計這種中生代魚類早就在「七千萬年前」絕跡了。但是 1938 年，腔棘魚卻在非洲馬達加斯加（Madagascar）附近的印度洋深海中被人捕獲，證明現今該魚類仍生存在海裏。被捕獲的魚骨骼構造和「遠古腔棘魚化石」相同。既然牠是活在深海中，而不是在「淺水」裏，進化論稱牠為「兩棲類祖先」的說法就錯了。腔棘魚化石曾被用來當作「指標化石」（Index Fossil），過去以這種「指標化石」所訂的化石年代大都因此發生問題。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                至於恐龍這種進化論認為早在「億萬年前」絕跡的生物，真的「在人類出現以前」已被大自然淘汰了嗎？事實上證明並不如此，因為有關恐龍與人類並存的記錄在歷史上就有很多。見證恐龍出沒的故事曾在希臘、巴比倫、歐洲的史料中都有記載，其中包括著名的英國聖喬治（Saint George）屠龍的故事，及巴比倫的英雄基格瑪斯（Gilgamesh）屠殺一隻巨大的「吃樹及蘆葦」恐龍的故事。主後第二世紀的羅馬賽克上也有兩隻長頸恐龍在水邊的圖案。也就是說，在十九世紀進化論發展之前，史料記載有關恐龍的故事並沒有把牠當作十分奇特的生物看待。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch1-fig12-roman-mosaic.jpg" alt="羅馬賽克上的長頸恐龍" className="max-w-full h-auto rounded-lg shadow-md" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 12 — 主後第二世紀的羅馬賽克上也有兩隻長頸恐龍在水邊的圖案，羅馬人若不知道這種生物，怎麼會放在這裏呢？（原圖尾部已損壞）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                恐龍不僅曾出現在人類過去的歷史故事裏，就是現今也有許多目擊者的見證。就像近代在非洲剛果（Congo）的叢林裏，當地原住民曾目睹一種像雷龍（Brontosaurus）的恐龍出沒其中。甚至 1959 年有一群非洲原住民殺死了一隻類似小恐龍的生物。再有就是北蘇格蘭尼斯湖（Loch Ness）著名的「海怪」了，根據三千多次目擊者的描述，這種生物大約身長 20 呎，有一個像蛇的頸項，並且有一個巨大的身體及四隻鰭，生物學家推測這可能是一種蛇頸龍類（Plesiosaur）的恐龍。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch1-fig13-plesiosaur.jpg" alt="蛇頸龍遺體" className="max-w-full h-auto rounded-lg shadow-md" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 13 — 這隻可能是蛇頸龍的遺體曾經在這種姿勢下被人攝影留作記錄，我只繪出牠形體的樣式，無須把牠腐化的情形也畫出來。</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                1977 年，日本漁船 Zuiyo Maru 號在紐西蘭（New Zealand）附近的海裏，用漁網拉上了一隻身長 30 呎、體重達 4,000 磅的生物遺體。這隻生物的頭是長在 5 呎長的頸項上，牠有巨大的身軀，兩側有四隻長達 3 呎的鰭。由於該遺體已經開始腐化，水手們只好用攝影及文字記錄詳情。根據其所記載的資料，有些學者認為這是一種屬於蛇頸龍類（Plesiosaur）的恐龍。在歷史文獻中，還有就是「次經」（Apocrypha）裏面一卷名叫「比勒與大龍」（Bel and Dragon）的書，書中說到波斯王古列和巴比倫人拜一隻巨大的活恐龍，並且叫人拜牠。先知但以理用智慧將瀝青、脂油和頭髮煮成餅送給恐龍吃，那隻大龍吃後肚子發脹就死了。大多數學者認為前述這卷書至少是在距離今天兩千一百年以前所寫的，如果恐龍在該書作者的時代早已絕跡，他不會無知到叙述這種故事讓人一看即知該書是後人偽造的。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">八、聖經曾提到恐龍存在的證據</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                所以恐龍並不是像進化論所提出的理論早已絕跡，萬物並不是隨著演化而來。實際上，聖經裏也有提到有關恐龍的經文。在約伯記四十章 15 至 24 節，神提到一種希伯來文叫作「בְּהֵמוֹת」的生物，英文 KJV 譯本及 NIV 譯本都忠實的照原文翻譯成 Behemoth，我們中文和合本聖經卻將之翻譯成河馬。這種生物很明顯並不是河馬，有人又說這可能是大象，但是希伯來原文在這裏並不解釋作河馬或大象，更何況河馬及大象都無法符合「搖動尾巴如香柏樹，牠大腿的筋互相聯絡。牠的骨頭好像銅管，牠的肢體仿佛鐵棍」（約伯記四十章 17 至 18 節）的描述。神絕對不說謊，也不誇張事實，祂只說真理和事實。河馬或大象的尾巴很小，香柏樹樹幹粗壯，地球上有哪種生物能「搖動尾巴如香柏樹」？顯然神在這裏是指祂所創造的雷龍（Brontosaurus）或是其他種類的恐龍。因為只有恐龍才能符合以上的描述，也只有牠才是「在神所造的物中為首，創造牠的給牠刀劍。……在牠防備的時候誰能捉拿牠？誰能牢籠牠穿牠的鼻子呢？」（約伯記四十章 19 及 24 節）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                另外，在約伯記四十一章神也提到一種希伯來文叫作「לִוְיָתָן」的生物，英文 KJV 譯本及 NIV 譯本都忠實的照原文翻譯成 Leviathan，我們中文和合本聖經卻將之翻譯成鱷魚。實際上這希伯來原文並不是鱷魚的意思，而且鱷魚並不「在驕傲的水族上作王」（約伯記四十一章 34 節），屬於水族的生物中還有許多都比鱷魚強壯。另一方面，鱷魚也無法「口中發出燒著的火把，與飛迸的火星。從牠鼻孔冒出煙來，如燒開的鍋，和點著的蘆葦。牠的氣點著煤炭，有火焰從牠口中發出」（約伯記四十一章 19 至 21 節）。實際上，生物中也只有恐龍才符合這些經文的描述。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                那麼，有的恐龍真的可以像前述聖經描寫的「有火焰從牠口中發出」嗎？神所創造的生物中有一些會發電（如電鰻），有些會照明（如螢火蟲），又有一種名叫炮兵蟲（Bombardier Beetle）的昆蟲，當被動物攻擊的時候，它會從尾部噴出高達華氏 212 度的煙霧嚇走敵人。光從這些不可思議的特殊功能來看，以上生物就不可能自己靠進化法演變成這種型態了。如果神創造了上述這些生物，那麼神使某種恐龍「口中發出燒著的火把，鼻孔冒出煙來」又有何困難？
              </p>
              <p className="text-gray-700 leading-relaxed">
                進化論以先入為主的觀念，訂出物種演化的過程，但是這種學說只是紙上談兵，與所發現的生物實例完全不符。如今許多被進化論認為已絕跡的生物，卻被證明曾和人類「同時期生存」在「同一種大環境」裏，這一切都根本違反進化論的原則。我們不曾見一隻猴子變成人，也不曾見腔棘魚變成兩棲類，而恐龍仍然還是恐龍。生物代代相傳，物種並未改變，這更證明是神創造萬物，物種絕非由演化而成。聰明如你，怎麼還會再被進化論欺騙愚弄呢？
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">九、物理證明進化論違反自然</h3>
              <p className="text-gray-700 leading-relaxed">
                也許你還有藉口，你懷疑我引用的資料，那麼我用一個大家都懂的事來問你好了。你知道生物會衰老，水果會腐爛，這是大自然一般的現象。記不記得當我們在中學讀物理的時候，課本上有一個叫做「熱力學第二定律」的原理，這個定律證明，一切自然界的物質都由複雜朝向簡單衰退，也由有組織向沒有組織擴散，這個基本定律到今天還十分正確。你想，進化論獨想要和這個定律相反，企圖要由沒組織變成有組織，而且要由簡單變成複雜，這怎麼是自然進化呢？豈不正違反自然現象嗎？
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">十、宇宙必有一位創造者</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                這樣說來，地球上的這一切生命形成，既是違反自然而產生，前面又證明物種絕不能自己進化而成，那麼，在這一切生命形成的後面，必有一位全能的創造者了，祂是誰呢？祂絕對不會局限於你我有限的空間和知識裏面，而是無所不在、無所不能、無所不知的全能者。祂無始無終，絕不是那謠傳的外星球人，我們應該知道，若是地球以外還有別的生命，那也是祂所創造的，因為整個宇宙都不是進化而來，都是祂所創造的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者親自說：我觀察祂那創造地球的美妙，享受祂藉著耶穌基督洗淨罪惡的慈愛，親自又由祂施恩的聖手接受各樣的恩惠。我尋找祂，祂就讓我尋見，叩門祂就開門，祈求就必得著。祂是要用心靈和誠實敬拜的靈，聖潔公義。我們的靈本來自祂，在祂裏面，得到無比的喜樂和滿足，我竟別無所需了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我曾用知識，在世界上到處尋找祂，又在其他理論中探索祂，卻都見不著祂的面。終於祂帶領我，親自告訴我，祂才是全宇宙的創造者，祂就是耶和華上帝，唯一宇宙的真神。我才像約伯一樣慚愧的說：「我從前風聞有你，現在親眼看見你。因此我厭惡自己，在塵土和爐灰中懊悔。」我親自經歷了祂，才知道祂是多麼奇妙，世間竟無任何可比。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                是的，神的旨意太奧妙，祂的創造也太神奇，我回想才明瞭：「神的事情，人所能知道的，原顯明在人心裏，因為神已經給他們顯明。自從造天地以來，神的永能和神性是明明可知的，雖是眼不能見，但藉著所造之物，就可以曉得，叫人無可推諉」（羅馬書一章 19 至 20 節）。可不是嗎？即使人不能目睹神的大能和公義的神性，但是藉著祂所創造的天地和支配宇宙的自然定律，沒有人可以託辭說他不知道神的存在。朋友，你可曾認識那創造你的造物主——慈愛的天父、主耶穌基督和聖靈保惠師嗎？
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch1-fig14-landscape.jpg" alt="大自然山景" className="max-w-full h-auto rounded-lg shadow-md" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 14 — 即使人不能目睹神的大能和公義的神性，但是藉著祂所創造的天地和支配宇宙的自然定律，沒有人可以託辭說他不知道神的存在。</p>
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
            <ul className="space-y-3">
              {[
                '化石紀錄顯示物種是突然出現的，找不到任何過渡時期化石；Nebraska Man、Piltdown Man 等所謂「猿人化石」更被一一揭穿為偽造或誤判，推翻了進化論的漸變假說。',
                '基因科學證明，自然突變只會使物種機能減弱、退化，而非產生新物種；物競天擇只會使某種基因的物種死亡，絕不能因此產生更複雜的新生命形態。',
                '數學計算顯示，最簡單的蛋白質自然形成的概率是 1 比 10 的 65 次方，最簡單的細胞自然組成所需時間遠超進化論所謂的 150 億宇宙年齡，進化論在數字上根本不可能。',
                '熱力學第二定律指出自然界一切物質由有組織向無組織退化，進化論主張由簡單到複雜，完全違反這個不可推翻的物理定律。',
                '聖經中的 Behemoth（約伯記 40 章）和 Leviathan（約伯記 41 章）的描述符合恐龍特徵；歷史文獻、目擊者記錄和現今仍存活的「活化石」（腔棘魚、渥勒米杉樹）都證明許多所謂「億萬年前絕跡」的生物其實與人類並存。',
                '宇宙萬物的複雜性、生命的精密設計，以及自然定律的存在，都指向一位全能的創造者——即聖經所啟示的耶和華上帝。羅馬書一章 19-20 節宣告，沒有人可以託辭說不知道神的存在。',
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
              <h4 className="font-semibold text-gray-800 mb-2">進化論的歷史背景與社會影響</h4>
              <p className="text-gray-700 leading-relaxed">達爾文 1859 年出版《物種起源》，其理論在 19 世紀工業革命後的社會中迅速傳播。進化論不僅是一個生物學假說，更深刻影響了近代哲學、倫理學、社會學甚至政治思想——「弱肉強食」的社會達爾文主義、種族優越論等思想均以此為根基。本章作者指出，這種未經充分科學驗證的理論，造成了近代人類文明史上諸多後遺症，值得每一位現代人認真思考。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">DNA「資訊論」與生命起源的困境</h4>
              <p className="text-gray-700 leading-relaxed">現代資訊科學為創造論提供了新的論據。DNA 是一種高度精密的「資訊儲存系統」，儲存著建構生命所需的完整「程式碼」。資訊論的基本原理指出，資訊不能自然地從無序中產生，它必然來自有智慧的「編碼者」。人類最先進的電腦程式也需要程式設計師；那麼比任何電腦都精密億萬倍的 DNA，又豈能從無到有地自然產生呢？這個問題至今進化論仍無法解答。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「智慧設計論」的崛起</h4>
              <p className="text-gray-700 leading-relaxed">20 世紀末以來，「智慧設計論」（Intelligent Design）在科學界逐漸引起重視。越來越多的科學家（包括許多非基督徒）指出，生物體中存在「不可化約的複雜性」（Irreducible Complexity）——例如細菌的鞭毛馬達，它由 40 種不同蛋白質組成，任何一種缺少都無法運作，這樣的系統不可能由漸進的進化產生。這些科學論據正不斷挑戰主流進化論的根基。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">羅馬書 1:19-20 的宣告</h4>
              <p className="text-gray-700 leading-relaxed">本章末尾引用的羅馬書一章 19 至 20 節是聖經中一段極為重要的話：「神的事情，人所能知道的，原顯明在人心裏，因為神已經給他們顯明。自從造天地以來，神的永能和神性是明明可知的，雖是眼不能見，但藉著所造之物，就可以曉得，叫人無可推諉。」這段經文表明，大自然本身就是神存在的見證，沒有任何人可以聲稱完全不知道神的存在。受造物的精密設計正是這見證的核心。</p>
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
              '在你的成長過程中，你曾在哪些場合接觸到「進化論」？那時你對這個理論的態度如何？讀完本章後，你的想法有什麼改變？',
              '本章從化石、基因、生物學、數學、邏輯、物理等多個角度挑戰進化論，哪個論點對你個人最具說服力？為什麼？',
              '作者說「人腦似乎不是在進化，而是在退化其使用的功能」，並指出現代人失去了判斷真理的智慧。你認為這個觀察有道理嗎？在你的生活中，你如何分辨真理與流行觀念？',
              '聖經描述的 Behemoth 和 Leviathan 很可能是恐龍，這個觀點挑戰了「恐龍早於人類出現」的主流看法。你如何看待聖經作為歷史資料的可信度？',
              '作者分享了他個人尋找創造者的經歷——從知識理性的探索，最終遇見了耶和華上帝。你有沒有類似的「尋找生命意義」的經歷？你目前的探索狀態如何？',
              '「宇宙必有一位創造者」這個結論，對你的人生觀和世界觀有什麼影響？如果真的有一位創造你的神，你想對祂說什麼？',
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
              <h4 className="font-semibold text-green-700 mb-2">🔍 深入研究一個論據</h4>
              <p className="text-gray-700 mb-2">選擇本章中最讓你印象深刻的一個論點（化石、基因、數學概率、腔棘魚、恐龍與人類並存等），花 30 分鐘查閱相關資料，用自己的話整理成一段話，與家人或朋友分享。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-2 text-sm">
                <li>選定一個主題（例如：腔棘魚的故事）</li>
                <li>用網路或圖書館查找補充資料</li>
                <li>用自己的話寫下心得（100 字以內）</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🌿 默想受造之物的精妙</h4>
              <p className="text-gray-700 mb-2">找一個安靜的地方，花 10 分鐘觀察大自然中任何一種生物（花草、昆蟲、鳥類……），思考它的構造有多精密、多美麗，然後向創造這一切的神表達感謝。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 查閱聖經恐龍經文</h4>
              <p className="text-gray-700 mb-2">打開聖經，讀約伯記四十章 15-24 節（Behemoth）和四十一章 1-34 節（Leviathan），邊讀邊思考那是什麼生物，並想像神為何要向約伯提及這些生物。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 尋找創造者的禱告</h4>
              <p className="text-gray-700 mb-2">若你從未認識這位創造你的神，可以真誠地向祂禱告：</p>
              <div className="bg-green-50 rounded-lg p-4 text-gray-700 italic text-sm leading-relaxed">
                「神啊，如果你真的存在，如果你真的是創造宇宙萬物的那一位，請你向我顯明自己。我願意放下先入為主的觀念，以開放的心尋找你。求你帶領我認識你，讓我能夠親眼看見你、親身經歷你。阿門。」
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
