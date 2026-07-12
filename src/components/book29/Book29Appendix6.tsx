import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Appendix6() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">附錄六</h1>
        <h2 className="text-xl font-semibold text-gray-700">創造論與進化論</h2>
        <p className="text-gray-500 mt-1 text-sm">本文曾刊登於基督教論壇報，由筆者本人撰寫，現在稍作修改登錄於此。</p>
        <p className="text-gray-500 mt-1">經文：創世記一20-27，彼得後書三3-13</p>
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
              自從筆者就讀台大物理系初信主時，即注意創造論與進化論（正確翻譯是演化論）的問題。四十多年來不斷發現進化論的許多錯謬，也看見許多人受到進化論學說的殘害，而拒絕來信靠創造宇宙及人類的真神。論壇報言論版曾刊出一位教授所寫「創造論和進化論之我見」，這文章似乎想幫助國人對真神的信仰不受進化論的負面影響，其動機可敬，但某些內容卻有待商議，因此筆者覺得有需要也針對這主題提出分享。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、創造論與進化論的定位</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                這位教授認為神學是絕對的，科學是相對的，神學不需要跟著科學走，因為科學是會改變的。這觀念有其實用上的價值，但不能一概而論。因為只有神本身是絕對的，神學與科學都是幫助我們認識神的工具，都是相對的，至於彼此是否能互相佐證，應該是按實際情況而定。羅馬書一章20節清楚說道：「自從造天地以來，上帝的永能和神性是明明可知的，雖是眼不能見，但藉著所造之物，就可以曉得，叫人無可推諉。」因此，科學屬於自然啟示，神學屬於特別啟示，二者都是要叫我們認識上帝及祂的創造，二者相輔相成，差別點只在於，特別啟示比自然啟示有更高的權威。這位教授進一步將創造論與進化論的領域作了二分法，認為「創造論屬於哲學與神學的範疇，而進化論屬科學的領域。兩者分屬兩個不同的研究範疇，無法互相驗證」。這論點其實是不對的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                十九世紀有一種偏差的敬虔主義，只專注對神的信心，將事物作了信仰與非信仰的劃分，使宗教與科學各自獨立。其動機原是好的，結果卻是錯的。這種信仰方式後來導致了新派神學的產生，新派神學認為聖經中的神蹟就像寓言，目的是為教導某種道德或信念，不需要有客觀的正確性。比方他們認為五餅二魚使五千人吃飽的神蹟，是要教導我們「分享」，至於是否真有其事，則不重要。因此，當科學容不下神蹟時，人們從聖經就只得到倫理的教導，而看不見神創造能力的彰顯。這種錯誤的信仰方式，在本世紀為進化論提供了溫床，使西方的基督教會陷入低潮。亞洲的宣教工作也因受到進化論侵襲而難以發展。一直到兩次世界大戰後，許多人從進化的美夢中驚醒，知道人不可能藉進化來建立地上天國，教會才重新回到神的面前，並有大批的人在各地歸主。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                正確的講法應該是創造論與進化論同樣都有哲學（信仰）與科學的成份，並且創造論的科學成份比進化論更多，而相信進化所需付出的信心則遠比相信創造所需的信心更多。
              </p>
              <p className="text-gray-700 leading-relaxed">
                進化論基本上「相信」萬物是進化而來的（這是一項信仰），其進化的可能在於「機率」，進化的主要證據是化石與突變。創造論基本上「相信」萬物是創造而來的（這也是一項信仰），其創造的能力來自「上帝」，創造的證據包括了幾乎所有最基本的科學原理，以及化石、突變等事實的研究。科學有趣之處在於，我們可以作各種不同的假設，然後尋找證據。看那一種假設或信念比較符合證據，那就是比較好的模型，也就是常人所說的比較符合科學。以下先討論四種領域（宇宙、生命、物種、人類）的起源，以比較出二種理論的優劣；而後再針對化石與二種理論的關係作進一步的探討。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、四種基本領域的起源</h3>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">一、宇宙的起源</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  進化論對宇宙的起源沒有提供任何答案，因為「機率」無法「無中生有」，然而物理學的「質能守恆定律」（現存宇宙所有的質能總量是不變的）卻告訴我們必定有一個巨大質能的起點。現代天文學家認為，宇宙是經由大爆炸而形成的。不管是否有大爆炸，最重要是，宇宙起初必須具有與今日同等的質能，這質能如何存在？最合理的推論是，在宇宙的起點有一個超自然創造的事實。
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  一般進化論學者相信（雖然他們不作這方面研究）星體有其演化過程，逐漸形成今日的宇宙，而後在地球（可能還有其他星球）上演化出生命。但「熱力學第二定律」告訴我們，物質系統必定從低亂度走向高亂度，高位能走向低位能。我們可用一個例子來了解亂度：一個房子擺在那裡，若無人管它，經過上百年，必然毀損無法使用，再更久，將變成散沙，數百年後甚至連沙也找不到了。由整齊變成凌亂，這是物質必然的特性。位能的意義也類似，原本可利用的東西，經過一段時間後，將變成無法利用。正如水的特性是由高處往低處流，它在高處時可用來發電，那時有高位能；流到低處後，就難以利用了，因它的位能變低了。所謂的進化乃是由低位能變成高位能，高亂度變成低亂度，這是不可能的。因此宇宙不能自行演化出星體，也不能自行演化出生命，其機率是零。唯有藉著創造，才能產生一個高位能、低亂度的世界，也就是目前井然有序的宇宙星體及地球上的花花世界。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">二、生命的起源</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  古代生物學認為「生命可能來自無生命」，因為水會滋生植物或小蟲。近代生物學藉由嚴密的實驗，知道那生命是由水中或空氣中原有的生命長出的，因此確立了「生命來自生命」的生物學定律。雖有科學家提出一些理論與實驗，來說明無機物變成有機物的可能性，但客觀地計算其發生機率，則連形成最簡單的生物分子所需的時間都超過三百億年，比天文學家相信的宇宙年齡還長，若要出現生命，時間又更長了。所以我們確信，生命的起源乃是來自永活上帝的創造。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">三、物種的起源</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  進化論學者認為，藉由突變的累積可以產生新物種。但根據事實觀察，生物為適應環境所作的良性變化，全部限定在一個固定的範圍內，並不能產生新物種。而且一般的突變其實都是有害的，所有的證據皆顯示，突變只會使生物減低生存能力（人類的唐氏症即為一例），而不會產生新物種。
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  於是進化論學者提出「良性的微突變」，這些微突變的累積造成了今日的所有物種。但我們要指出，這種進化並沒有任何實驗上及「化石」上的證據。其次，這種進化要求地球必須有極古老的歷史，但地球並沒有那麼老。由此可見，各物種的起源應當是來自創造，而不是由於進化。創世記一章的經文中，「各從其類」反覆出現，表明每個物種都有其界限，它能在自己的範圍內作某些改變，以適應環境，但絕不會從一個物種演變成另一個物種。
                </p>
              </div>

              <div>
                <span className="font-semibold text-indigo-700">四、人類的起源</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  人有靈魂，有上帝的形象，這是人類與其他物種最大相異之處。人的靈魂當然是上帝創造而來的，完全無法進化而來。人的靈與動物的魂差別之大是無限的。但有些人同時相信進化與創造，以為就在某種猿人的身體演化為人的身體時，上帝將靈魂放入第一個人或第一對夫妻裡面。然而就如前段所述，不可能藉演化產生新物種。所以人的身體與靈魂都是來自神的創造，當我們說上帝創造人時，乃是指創造了人的身體與靈魂，而不是只創造人的靈魂。
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  人類不會從別的物種進化而來，也不會進化成另一種超人。人類的文化在累積，文明在發展，但人的本質並沒有進步。埃及金字塔的建成，說明古代人的高智慧甚至是今人所不及的。從前以為黑人是尚未進化的人，如今黑人的成就已不輸白人。
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  人類的歷史記錄及人口增長的事實，都是很科學的。進化論說，人類有幾百萬年歷史；但幾千年前的古代人類自己告訴我們，在他們不久之前人類才開始，並且是來自一對夫妻（所有民族的傳說都是一致的）。難道演化會使人類喪失記憶或製造錯誤記憶嗎？人口增長率是另一個佐證，20世紀初全球人口只有十億，最新的人口統計資料顯示，1960年人口有30億，1987年時有50億，20世紀末達到60億，電腦計算到2150年時，人類人口會有110億。整個二十世紀的人口年增長率約2%，最近幾年減為1.3%。考慮疾病、戰爭等因素，以二十世紀人口增長率的四分之一（即0.5%）來計算，可算出人類從二人開始，乃在數千年前，而各時代歷史文獻所提供的人口資料，也大致符合這增長曲線。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  若照進化論的說法，人類有幾百萬年，則今天的人口根本就是一個無法想像的天文數字，人類屍體的量早已覆蓋地球不只幾億次了。但我們在任何化石及人類遺跡上，根本看不到這種情形。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、化石支持創造否定進化</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                進化論學者認為，化石是地質史的年代尺度，可用來測定地質事件的發生年代。他們在每一沉積層中，找出含量特豐的化石，稱之為「指標化石」，用以說明所在岩層的年代。至於指標化石屬於什麼年代，則完全是以進化理論去估算的。但進化論學者又說，化石在不同年代的地質層出現，是進化論的最主要證據。這其實是一種繞圈子的自說自話。真實情況如何呢？我們可從化石的分佈、化石的形成、化石的年代等幾方面來探討。
              </p>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">一、化石的分佈</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  進化論認為化石的存在提供了進化的證據，因為現存化石在地層中的次序基本上是由簡而繁的。最底層是水生無脊椎動物，然後是水生脊椎動物（魚類），接著是兩棲類與爬蟲類，再來是內陸的動植物，人類與鳥類的化石則很少。這種次序固然與所謂的進化次序相合，但一場洪水大災難所造成的化石次序也必然是如此。因為水生無脊椎動物生存在海底，且活動力弱，所以被埋在最底層；而水生脊椎動物（魚類）在較高處活動，所以埋在無脊椎動物之上；接著是兩棲類與爬蟲類，因牠們在水陸交界處活動；再來是內陸的動物，因牠們在更高處活動，且行動較迅速；鳥類化石很少，因為只有少數體力不濟的鳥會葬身於沉積岩中；人類逃生期長，最後死在洪水最上層，自然分解腐化，所以很少有人類化石。
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  雖然進化與洪水都同樣會造成這種次序，但創造論模式的洪水所能提供的解釋是更清楚的。而且，若進一步審視化石與地層的情況，會發現有不少例外。所有的化石，不全都由簡而繁。有些較簡單的生物化石，是在較複雜的生物化石之上。這種例外情形對於創造論模式很容易理解，水流的沖擊就可以造成這種情形。但在進化論模式裡，這卻是嚴重的問題，因為這代表「老岩層」被掀起覆蓋在「新岩層」之上，而這是很不可能的。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">二、化石的形成</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  進化論假設地層與化石是經過漫長的時間形成的，而創造論則認為地層與化石是快速形成的。事實上在一般情況下，任何動物死亡，其屍體都會被其他動物吃掉，或自然腐化，而不會形成化石。可以想像在森林裡的一隻動物死亡後，其結果如何，當然是變成其他動物的食物，就算沒被吃掉，也會被細菌腐蝕掉。化石的存在，已說明了其形成過程是急遽的，因化石無法由緩慢的沉積作用形成。所以進化論想以地層中的化石來說明進化，本身已自相矛盾。煤與石油的起源也是同理，進化論告訴我們那是動植物屍體長期累積而成的，其實緩慢的過程並不會形成煤與石油。必須有一次大災難，將大量的動植物快速埋葬，才可能形成煤與石油。
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  再者，化石記錄顯示了有系統的「缺環」，亦即沒有中間型生物。這些生物化石基本上與現存的生物是一樣的，另有少部份已絕種的生物化石，但其中完全沒有中間型生物的化石。如果現存的萬物是進化來的，為何在如此大量的化石中，看不到中間型生物？這也是進化論與化石證據矛盾之處。若以創造論來審視，則這「缺環」是非常合理的，也是可預測的，因所有的生物都該「各從其類」，而類與類之間是不能演化的。
                </p>
              </div>

              <div>
                <span className="font-semibold text-indigo-700">三、化石的年代</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  代表地質年代的主體岩層是由「成層岩」構成的，它們由流水所帶沉澱物沉積而成。不同的化石存在於不同的岩層之中，到底上下岩層彼此是同時代的，還是不同時代的？進化論認為是不同時代的，而且彼此相隔很久。然而根據實際的辨識，下岩層表面並沒有久露於外的腐蝕現象，可看出兩者的形成在時間上是連續的，而更上一層的岩層也是如此。所以，整個地質系統其實是在同時期內急劇形成的。若這樣，則各種化石其實都成形於相同的時期。所以，化石不是演化的記錄；化石真正告訴我們的是，地球曾在一個短時期內，經歷過一場大災難，各種類的大量生物快速被埋葬。這與聖經上洪水的記載是完全相合的。
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  一般人皆相信「放射性測年代法」已經證明了地球年齡或地層形成時的年代已有幾十億年之久，然而這是有待商榷的。「放射性測年代法」假設放射性元素衰變後的子元素原是不存在的，因此可以根據目前所存母元素與子元素的比例來計算其年齡。然而這項假設無法得到客觀的證實，因為上帝創造地球時，絕對可以同時創造母元素及子元素。若如此，現存母、子元素的比例，實在不能幫助我們知道地球的年齡或地層的年代。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  從同一岩層取出不同的放射性元素來測其年代，所得答案往往是不一致的，有些很老，有些很年輕。這種情形更加證明了「放射性測年代法」的不可靠。其實，岩層年代的所謂標準答案通常是由「指標化石」所決定的，而「指標化石」屬於什麼年代，則是由進化出那生物所需的時間來決定的。同樣是「放射性測年代法」，許多元素不能提供給進化論學者「滿意」的答案，他們就放棄那些數據，他們只取用他們滿意的數據。所以「放射性測年代法」其實只是被利用來附和指標化石的既定年代而已。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">肆、地球是年輕的</h3>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">一、科學的證據</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">很多證據顯示，地球的年齡是短的，部份探測方法簡介如下：</p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  第一、放射性同位素蛻變時會產生氣體，據此可計算地球年齡。例如放射性鉀會產生氬氣與放射性鉛，放射性鉛的量固然不少，令人誤以為地球很老，然而目前大氣中氬氣的含量卻很低，反而顯示地球年齡是短的。若假設大氣層起初無氬氣，則算出的大氣層年齡，最多也不過是十幾萬年而已。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  第二、河水每年帶進海中約7.5億磅的鈉，而海洋中鈉的總含量約為七萬億磅，若海洋中原來沒有鈉，且無其他方式使海洋增加鈉，則海洋的年齡最多也不過是九千年。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  第三、全球每年約有275億噸的沉積物被沖入海中，已有的海底沉積物總量約為82億億噸，可算出最高年齡只有三千萬年。目前海平面以上的岩石總量只有38億噸，按目前的沖積率，只要再一千四百萬年，整個陸地就全部沖入海中了。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  第四、因火山爆發等活動，現在地表每年會增加10立方公里的新火成岩。但目前地殼的總體積也不過是50億立方公里而已，所以地殼已存在的時間應少於五億年。事實上，過去的火山爆發比現在多得多，如此地殼存在時間就更短了。但進化論認為地殼早在幾十億年前就已形成了，這是矛盾的。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  第五、地球磁場強度正在衰變中，藉過去一百多年的測量，算出其半衰期約為一千四百年。這表示地球磁場在一千四百年前比現在強二倍，二千八百年前強四倍，依此類推，七千年前的地球磁場有現在的32倍。地球的磁場不可太強，否則會影響生物的生存。照這觀點，一萬年已是地球年齡的最高極限。
                </p>
              </div>

              <div>
                <span className="font-semibold text-indigo-700">二、上帝的慈愛</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  我們並不需要故意將地球年齡算短，以反對進化論。因為就算地球年齡有數百億年，也不足以使進化論成為事實。物理學的定律、生物學的定律、突變的限制、化石的本質與實況等，已足夠否定進化論。唯一似乎能令進化論起死回生的，只剩下所謂的「有神進化論」——超自然的神提供進化的動力與方向，讓一切不可能發生的事，照著進化論學者所期待的發生。然而我們要強調，問題不僅在於能不能發生，也在於實際有沒有發生。化石遺跡已清楚顯示，物種是各從其類的，沒有進化；聖經也清楚說明，物種是各從其類的，沒有進化。在這件事上，科學與神學既能各自獨立宣告，也能互相呼應。所以連「有神進化論」也無法在科學上或聖經真理上取得立足之地。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  在這一切結論之後，再來思想地球年輕的證據，會顯得更有意義。地球是年輕的！這事實固然可以否定進化，更重要的是牽引我們去認識、感謝、讚美那位創造、救贖、差遣我們，且快要再來的主。從祂創造地上萬物，到他來救贖我們，以及再來接我們，都沒有相隔很久的時間。這也是彼得後書的信息，主耶穌就快要再來，因祂深愛他所造的人，要使永恆的計劃速速完成！
                </p>
                <p className="text-gray-700 leading-relaxed">
                  筆者曾與道聲出版社的職員分享這信息，有位職員聽了之後非常激動，並願意來信耶穌。她哭著說，她能感受到基督徒的愛心，也相信聖經的一些真理，但進化論的觀念一直攔阻她信耶穌。她想，人是進化而來，聖經卻說人是被創造的，如此怎能信聖經呢？但當我講這信息後，她全然清楚了，並願意禱告接受耶穌作她的救主。盼望弟兄姊妹將這信息傳給更多人，真知道我們的神是創造並掌管萬有的神，神學與科學都要幫助我們來認識他。我們要在這世代傳揚福音，讓大批的人歸向耶穌，因他就快要再來。
                </p>
              </div>
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
                '創造論與進化論同樣都含有信仰（哲學）與科學的成分，並非「神學絕對、科學相對」的簡單二分；相信進化其實需要付出比相信創造更多的信心。',
                '宇宙、生命、物種、人類四種起源，進化論皆無法以機率、熱力學定律等科學原理合理解釋，唯有超自然的創造才能說明現有的高秩序狀態。',
                '化石的分佈、形成過程與年代測定，都更符合一次大洪水快速掩埋的創造論模式，而非進化論所需的漫長沉積時間；化石記錄中系統性的「缺環」正印證「各從其類」。',
                '放射性同位素氣體累積、海洋鈉含量、沉積物總量、地殼火成岩體積、地球磁場衰減率等多項科學證據，都指向地球年齡遠短於進化論所需的數十億年。',
                '認識地球是年輕的，不只是為了否定進化論，更重要的是引導人認識、感謝那位創造、救贖、快要再來的主——這正是彼得後書所傳講的信息核心。',
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
              '你過去相信進化論嗎？聽完或看完這信息之後，觀念有何調整？',
              '從宇宙、生命、物種、人類四種起源來探討，創造論比進化論有何優勢？以客觀的科學來分析，化石告訴了我們什麼事實？',
              '如果地球是年輕的，你對神的屬性有何新的體會？對於基督快要再來的事實，我們要配合什麼行動？你的決定是什麼？',
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
