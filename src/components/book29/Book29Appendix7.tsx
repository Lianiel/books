import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Appendix7() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">附錄七</h1>
        <h2 className="text-xl font-semibold text-gray-700">解開恐龍滅絕之謎</h2>
        <p className="text-gray-500 mt-1 text-sm">本文曾刊登於基督教論壇報，由筆者本人撰寫，現在稍作修改登錄於此。</p>
        <p className="text-gray-500 mt-1">經文：創世記七1-12，彼得後書三3-9</p>
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

            <p className="text-gray-700 leading-relaxed">
              某一年七月至八月在高雄科工館有中華恐龍大展，可看到廿五隻真正的恐龍化石及同時代其他生物的化石。大多數觀賞者對恐龍滅絕的原因相當有興趣。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、恐龍滅絕的理論</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                一些科學家推測大概在六千五百萬年前，所有的恐龍都滅絕了。究竟是漸進式的消失匿跡，還是瞬間發生大滅絕呢？科學家在尋找這個謎題的答案，迄今有六十種以上的推論，只有十多種較為人所接受，在展覽的地方展出最為人接受的其中三、四種。
              </p>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">一、小行星撞擊理論</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  推測有一顆大約直徑十公里左右的隕石，猛力撞擊地球，引爆出來的威力就好像幾萬顆原子彈大爆炸一樣。於是整個地球籠罩在灰濛之中，陽光無法照到地面，植物沒有辦法行光合作用，開始大量的枯萎死亡，使草食性的恐龍面對斷糧，相繼死亡，漸漸的肉食性恐龍也因飢餓而走向滅絕。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  這種說法，好像可以解釋恐龍滅絕的原因，但是卻無法解釋其他動物為什麼會活下來，並演化出後來的哺乳類動物，難道牠們不需要植物來供應食物嗎？如果六千五百萬年前之後，重新有另一波演化，這是非常不合理的。幾十億年都很難演化出複雜的生命，只剩下六千五百萬年及少量殘存的生物，竟然能繁衍出現在這麼豐富的生物，這是相當矛盾的。這個理論也不能解釋當時海底生物瞬間大量滅絕的現象，因為同時間有許多海底生物大量滅絕，並且是瞬間被掩埋的。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">二、氣候環境變遷理論</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  這理論是指在六千五百萬年前地球氣候產生變化，溫度忽然升高，有些散熱能力較弱的恐龍無法適應，內分泌失調而死亡。也有科學家發現，鱷魚在攝氏34~36度所孵化的小鱷魚是雄性的，攝氏26~30度之間孵化出來都是雌性的，只有在30~34度之間才會雌雄機率平均。因此天氣太熱或太冷，都會導致只有一種性別，而無法繁衍，他們推論恐龍可能有類似現象因此而滅絕。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  然而我們發現，這些恐龍並不是在長時間慢慢死去，而是在更短時間內死亡。因無法繁衍而滅絕，需要一段長時間，可能要幾十年或幾百年，然而我們所看見的卻是大量的、瞬間的死亡，才會有這麼多的化石存留下來。一個動物在任何一個地方死亡後，會被其他動物吃掉，或被細菌分解掉，基本上不會留下化石；只有在短時間內被掩蓋，才會留下化石。因此這項理論其實不足以解釋留下大量化石的原因，也不能夠解釋恐龍的死亡。
                </p>
              </div>

              <div>
                <span className="font-semibold text-indigo-700">三、超新星爆炸理論</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  有科學家認為有一顆距離地球比較近的超新星爆炸，其強烈的宇宙線足以引起臭氧層的破壞，使得紫外線和放射性輻射增強，足以直接殺死地球上的生物，而其中以當時形體最大的恐龍所受的影響最大，因而造成恐龍大量滅絕。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  令人質疑的是，同時有許多海洋浮游生物及部分海底生物死亡，又是受什麼影響呢？而其他生物能夠未受紫外線、輻射線影響，而繼續演化出現今各種生物嗎？六千五百萬年肯定無法完成！
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、更好的解答——大洪水</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                上述的理論，有一些不足以成立的理由，我們可運用科學方法，重新解釋現有的資料，得到更好的解答。
              </p>

              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-indigo-700">一、恐龍的分佈</span>
                  <p className="text-gray-700 leading-relaxed mt-1">在展覽中，可知恐龍分布各大洲。原以為恐龍並不生存於中國，如今卻發現，曾有大量的恐龍生活在中國，且與其他地區的恐龍相似，其他地區彼此也幾乎一樣。這事實印證了聖經的記載：就在短時間中，大洪水衝裂了盤古大陸，地底下也發生了類似火山爆發的作用，使得陸塊分開，且影響到現在，也就是現在我們能觀察到的板塊移動。為何相隔遙遠兩地仍發現形態相同的恐龍，因為牠們原本就是生存在同一個大陸地上。</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">二、各種活化石</span>
                  <p className="text-gray-700 leading-relaxed mt-1">在展覽中，看見一塊美麗的魚化石，寬70公分，長104公分，內含524條小魚，彷彿還在游泳一般。我們可肯定的說，這是在近陸地的海洋中瞬間發生的，大量的泥沙快速翻轉，覆蓋住正在游泳中的魚群，才產生了這樣的化石。這化石與恐龍化石一起被發現，是同一個毀滅事件。所以我們看見，海中、地上、空中的生物同時間大量死亡，包含了在展覽中所見的蝦、銀杏、海百合、魚、烏龜、羚羊等化石，這些都是洪水所造成的。有人將這些與恐龍同時代卻仍然存活在現代的生物稱為活化石，其實我們可以反過來講，這些是現代的生物，所以恐龍也是現代的，所謂「現代」是指大約五千年前至今。</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">三、大量瞬間死亡</span>
                  <p className="text-gray-700 leading-relaxed mt-1">在另一角所展覽的原角龍化石，有著痛苦掙扎的模樣，而且所出土的不是一隻，而是大量原角龍彼此堆積著，有些張大嘴巴，有的四肢在掙扎，有的身軀不正常地扭曲，顯示牠們在大災難中集體死亡。這些化石足以證明恐龍的滅絕並非因紫外線、輻射線所造成的逐漸死亡，而是大洪水所造成的大量瞬間死亡。不僅瞬間死亡，而且立刻被泥沙掩蓋，才會留下這種化石，這正是洪水的明證。</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">四、兩極的溫帶動物</span>
                  <p className="text-gray-700 leading-relaxed mt-1">在南北極也發現不少恐龍化石，在加拿大的魁北克省也有恐龍，這是一個令人吃驚的發現，因為恐龍是溫帶的動物，照理說不可能在寒帶、甚至極帶生存。有人將之解釋成板塊移動所造成的，但這樣的說法則不能解釋為何有些長毛象在北極被發現，但卻不是化石，而是屍體直接被冰凍起來，彷彿還能把肉切下來上菜，這如何解釋呢？板塊移動是緩慢的，溫帶死亡的動物屍體必被細菌腐蝕掉，不可能保存。除非是像聖經所說，有大洪水發生，那時地球外圍的水層瞬間破壞，原為溫帶的南北極瞬間急速冷凍，導致長毛象整個被冰凍起來，身體被完整保存；恐龍原來也生存在南北極，因有水氣層調節，南北極都是溫帶氣候，但在洪水時，天氣驟變，同時被泥沙掩蓋，所以在那裡形成化石。</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">五、化石與骨骼</span>
                  <p className="text-gray-700 leading-relaxed mt-1">在所挖掘的恐龍遺骸當中，雖有許多是化石，但其中有少部分卻是骨頭，化石與骨頭是不相同的；化石是恐龍被埋藏後，其骨骼所佔據的空間慢慢被其他的元素侵入、取代，產生石化作用而形成的。若恐龍死於六千五百萬年前，其骨頭不可能尚未石化；若是在五千年前死亡，就有可能。就人而言，當人被埋葬幾十年後，有的只剩骸骨，有的是整個屍體被保存，因為地質環境不同。恐龍也一樣，經過五千年，有的形成化石，有的存留骸骨，這是進化論科學家不願公開的事實，但這卻印證了恐龍的近代性。</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">六、恐龍的腳印與圖畫</span>
                  <p className="text-gray-700 leading-relaxed mt-1">此次展覽中也展出恐龍的腳印。事實上，有些恐龍腳印上面居然有人的腳印，並形成化石。這間接證明人與恐龍曾經生活在同一時代及地土上。在洞穴裡面亦發現人所畫的恐龍圖畫，若說恐龍滅於六千五百萬年前，人類始於二、三百萬年前，這圖畫怎可能產生呢？因此也證實，人與恐龍活在相同的時代。</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">七、大量的恐龍化石</span>
                  <p className="text-gray-700 leading-relaxed mt-1">因為恐龍的比重較重，而人類及其他哺乳類的比重較輕，所以當大洪水來的時候，羚羊、獅子、人類等動物會往高地跑，被淹沒的時候大部分漂浮在水上，大部分沒有變成化石。而笨重的恐龍，大部分被埋在下面，所以化石很多。比恐龍更下面的是海中的魚，海洋底棲生物，它們的化石也大量被發現。至於鳥類，它們在大洪水時，大部分漂在水面腐化掉，因此只有極少量被掩蓋形成化石。</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-3">
                用自然科學的方法，可以合理推論恐龍的滅絕是因著洪水的緣故，另外用人文科學的方法，也可以得到相同的結論，那就是有關洪水的傳說。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、洪水的傳說</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                在有關各民族古老傳說的調查中，最令人驚異的是：幾乎各民族都有洪水毀滅大地的傳說。依據人類學家的統計，全世界有超過兩百個民族曾留傳下來這種傳說，其地理位置遍佈在各大洲，如中東、歐洲、太平洋各島嶼、北美的印地安人及愛斯基摩人、亞洲各國（當然包括中國）及中南美洲。由於分布如此廣泛，似乎各民族都曾「記得」這次毀滅性的大洪水，因此，洪水是普世性（而非地區性）的可能性大為增加。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                同時，在分析各民族有關洪水的傳說時，發現離希伯來文化愈遠的地區，其內容與聖經的記載出入也愈大。但即使是與聖經記載最相似的巴比倫傳說，其內容也有許多荒誕、不近人情之處。例如，所傳說的方舟是正方體，而不是聖經所說的高三十肘、寬五十肘、長三百肘的完美比例。真正的方舟不會亂轉、非常穩定，這是科學家所證實的。因此，最合理的推論乃是：所有的洪水傳說都是由挪亞的後裔流傳下來的，可是隨著民族的遷徙，這些傳說也逐漸因代代相傳而失真了，只有聖經的記載才保留了最原始、最正確的「原版」資料！另一項有力的佐證是：在詳細分析這兩百多種傳說的內容之後，以下列十五項問題予以統計，發現這些傳說之內容雷同的比例如下：
              </p>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-2 mb-3">
                <li>大災難只是因洪水而引起的（95%）</li>
                <li>洪水是普世性的（95%）</li>
                <li>有一家人得救（88%）</li>
                <li>他們藉著一艘船得救（70%）</li>
                <li>這事件發生在各民族所在之當地（82%）</li>
                <li>洪水是因人類的罪惡而引起的（60%）</li>
                <li>動物也同時被拯救（67%）</li>
                <li>動物在洪水故事中扮演很重要的角色（73%）</li>
                <li>那些被拯救的人事先曾被警告過（66%）</li>
                <li>那些獲救的人最後停靠在一座山上（57%）</li>
                <li>最後曾放出鳥類（35%）</li>
                <li>有偶發事件（37%）</li>
                <li>在獲救之後有獻祭的行動（13%）</li>
                <li>獲救的人數正好八個人（9%）</li>
                <li>曾提到彩虹（7%）</li>
              </ol>
              <p className="text-gray-700 leading-relaxed mb-3">
                這些傳說的相似程度是令人驚異的。甚至在某些細節上（如彩虹及一家八口得救等）雖然有相同說法的不多，但是絕非偶然。同時，絕大部份的傳說都以當地的山脈為背景，只有聖經的記載卻在以色列北方遙遠的亞拉臘山為方舟停靠處，也間接證明了聖經的客觀性。亞拉臘山的地理位置很特殊，由此處到歐、亞、非三洲任何一處都沒有困難。而以世界地圖來看，全世界各大洲的質量重心位於土耳其的首都安卡拉，距亞拉臘山約600哩。亞拉臘山的雪水也正是幼發拉底河的源頭，由此到富饒的兩河流域只有700哩，那裏正是人類古文明的發源地！這些事實顯明了聖經中有關洪水的記載是可信的，其可靠性超過我們所想像。
              </p>
              <p className="text-gray-700 leading-relaxed">
                如果照聖經所說每一種動物都一對，照理說應有少數恐龍存留下來。但需要說明的是，恐龍並不適合生存在現在的地球，因為環繞地球的整個水氣層已經破壞，大氣層的氧氣壓力大大減少，這造成人類壽命快速下降。洪水以前人類可活九百多歲，洪水以後人類的壽命下降到一百二十歲甚至七十歲左右。恐龍也因為這樣而無法生存下去，因為大型動物需要較高的氧氣壓。就像人如果到高山上去，因為氧氣壓小，就會缺氧窒息。並不是沒有氧氣，而是氧氣壓不夠。所以恐龍就算有進方舟，也會因為洪水後氧氣壓太小，而無法長久繁衍生存。所以我們在電影「侏羅紀公園」中所看見的情節是很虛幻的；第一、能不能重新培育是一個大問題，第二、就算真的培育出來，牠也很難存活在今天的地球，因為目前的氧氣壓並不足以讓大型恐龍生存。這就是為何在洪水之後，其他動物都存留下來，恐龍卻沒有活下來的原因之一。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">肆、地球年輕的證據</h3>
              <p className="text-gray-700 leading-relaxed mb-3">地球是年輕的，所以恐龍也是近代的。相關證據如下：</p>

              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-indigo-700">一、南北極磁場衰減</span>
                  <p className="text-gray-700 leading-relaxed mt-1">地球南北極的磁場，以一定的衰減率逐年衰減，以這衰減率倒推回去，只要一萬年前，就會因磁力過大而不適合人居住。所以就磁場的衰減現象來看，地球的年齡應不超過一萬年。推論地心裡有一電流造成磁場，如果換算成電流，則二萬年前的電流已經足以融化這地球。</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">二、沖刷沉積物</span>
                  <p className="text-gray-700 leading-relaxed mt-1">就海洋中從陸地河流沖刷下來的沉積物來看，地球也是年輕的。以現在的沖刷速率作基準，最多只有三千萬年。但現在的河流比以前小，現在的沖積量是歷代以來最少的，所以實際時間小於三千萬年，絕對不是進化論所說的數十億年。並且因為大多數的沉積物是在大洪水時沖積的，所以只有一萬年左右是很有可能的。</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">三、太陽縮小的速度</span>
                  <p className="text-gray-700 leading-relaxed mt-1">太陽縮小的速度也可證明太陽系及地球的年輕，太陽以每百年千分之一的比例在縮小，反推回去，十萬年前的太陽就是現在的二倍大，地球會熱得沒有生物生存。如果給太陽二千萬年，它會大到碰到地球。因此可知太陽系並不是古老的星系，它只能夠是一、二萬年左右的年齡。而地球跟太陽之間還有金星和水星，所以我們更可以相信太陽系的存在絕對沒有幾千萬年。合理的推論，近一萬年前太陽比較大，但有天上的水層使熱度散開，所以適合各種生物居住。約五千年前，天上的水下到地上成為洪水，水層消失，人開始承受太熱（熱帶）及太冷（寒帶）的天氣。</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">四、月球在遠離</span>
                  <p className="text-gray-700 leading-relaxed mt-1">月球以每年兩吋的速度離開地球。月球會造成潮汐，如果倒推回去，超過一萬年以前，月球離地球太近，潮汐太大，地球很難有生物生存。藉此也可推知月球與地球都是年輕的。以上都是科學的推論，可能有別的理論反駁，所以不一定百分之百正確，但我們可以選擇接受比較合理的理論；而真正百分之百正確的是聖經。</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">伍、聖經的真理</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                彼得後書三5-7清楚告訴我們：「他們故意忘記，從太古憑神的命有了天，並從水而出藉水而成的地，當時的世界被水淹沒就消滅了。但現在的天地還是憑著那命存留，直留到不敬虔之人受審判遭沈淪的日子，用火焚燒。」為什麼今天我們會看到這麼大量的恐龍？神要我們看到這些，就是在告訴我們，他曾經在不久前施行了大審判，神用恐龍化石在向我們說話。很多基督徒看到恐龍化石，怕跟信仰有衝突，其實聖經早已預告了答案，大量恐龍化石正是大洪水審判的明證，將來第二次審判是火的審判，這日子將要臨近。
              </p>
              <p className="text-gray-700 leading-relaxed">
                聖經告訴我們說：「主所應許的，尚未成就，有人以為祂是躭延，其實不是躭延，乃是寬容你們，不願有一人沈淪，乃願人人都悔改。」（彼後三9）神等候我們每一個人都悔改，曾經在方舟裡挪亞一家八口得救，今日的方舟是耶穌基督，只要進入基督就能得救，且能開始過一個敬虔的生活，並能逃避將來的大災難。你願意接受基督耶穌的救恩嗎？
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
                '小行星撞擊、氣候環境變遷、超新星爆炸等三種主流恐龍滅絕理論，都無法解釋同時期海底生物瞬間大量死亡、以及化石形成所需的瞬間掩埋條件。',
                '恐龍化石廣泛分布各大洲且形態相似，與大洪水衝裂盤古大陸、板塊瞬間分離的聖經記載相符；南北極發現恐龍與長毛象屍體，也支持洪水前地球曾有均溫的水氣層。',
                '恐龍化石與人類腳印同時出現、洞穴壁畫繪有恐龍圖像，以及部分恐龍遺骸仍是未石化的骨頭而非化石，都指向恐龍與人類同活在數千年前的近代，而非六千五百萬年前。',
                '全球超過兩百個民族都有洪水滅世的傳說，內容雷同度極高（如一家人靠船得救、動物同時獲救等），且以聖經記載的亞拉臘山地理位置最合理，印證洪水記載的普世性與可信度。',
                '南北極磁場衰減率、海洋沉積物總量、太陽縮小速度、月球遠離速度等多項獨立的科學證據，都指向地球年齡遠短於進化論所需的數十億年，恐龍滅絕的最合理解釋正是聖經所記載的大洪水審判。',
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
              '恐龍如何滅絕？你所接受的答案是什麼，有何根據理由？',
              '關於洪水的真實性，從自然科學及人文科學分別有何根據？',
              '地球是年輕的，還是年老的？有何間接可信的證據？',
              '關於洪水、地球結局、人類結局，聖經的真理告訴我們什麼？你會如何回應這真理？',
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
