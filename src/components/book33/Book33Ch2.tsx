import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import PageTag from './PageTag';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book33Ch2() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <PageTag page={105} />
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-700 to-amber-700 bg-clip-text text-transparent">第二章</h1>
        <h2 className="text-xl font-semibold text-gray-700">中國古代的「上帝觀」</h2>
      </div>

      {/* 正文 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-red-50 hover:from-amber-100 hover:to-red-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">正文</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <div>
              <p className="text-gray-700 leading-relaxed">
                上一章結論，華人的「罪」，就是華人的「迷失、失落」。此種「迷失、失落」，乃是離開生命的本源──造物主上帝。如果沒有上帝，就沒辦法談論聖經意義的「罪」。因此本章接著要從中國古代的文字、言論來探討古時華人的「上帝觀」，藉由中國古籍內容與聖經的相似性，幫助中國人知道，中國曾經也在「上帝」的治理之內。但後來華人失去對「上帝」的信仰，因而更加迷失。所謂「古代」，涵蓋自伏羲、黃帝，以至春秋、戰國之前。本章先討論兩個前提，而後即從具代表性的古文、五經、諸子分別來探討。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-800 text-lg mb-3">第一節　兩個前提</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                探討中國古代對「上帝」的信仰，有兩個前提：第一個前提是人類古時對「上帝」可能有真實的信仰。如果人類古時對「上帝」的信仰是可能的，我們探討中國古代對「上帝」的信仰才有意義，因為中國人不能與其他人類相異，而單獨擁有對「上帝」的信仰。第二個前提是中國人與「上帝」有真實的關係是可能的。如果從聖經真理看，或從一些已知的資料看，中國人不可能跟「上帝」有關係，那我們就不需討論此題目了。
              </p>

              <div className="mb-4">
                <PageTag page={106} />
                <span className="font-semibold text-amber-700 block">壹、人類對「上帝」的信仰</span>

                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">一、進化演變的假說──先多神後一神</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  十八、九世紀西方教會發展自由神學，對創造、復活等神蹟給予精神性、道德性的詮釋，又有達爾文提出演化論假說，得到普遍性的支持。<sup>1</sup><span style={cite}>（瓦爾文於1859年發表其力作《物種起源》，提出其理論〔假說〕認為，在地球的地質史上存在幾大時期，生命歷經數千萬年以上，從最簡單的形式向最複雜的形式〔人類〕緩慢進化。參看加里‧特朗普，《宗教起源探索》，頁31）</span>在這種大環境下，不少學者，如加里‧特朗普等，提出「自然神話論」、「宗教演化論」，認為人類信仰的「上帝」是進化出來的，從「自然的宗教」演變為「精神的宗教」，再從「多神」演變出「一神」，宗教中的神是自然物的人格化或先王先祖的神明化。<sup>2</sup><span style={cite}>（參考下列諸書：何星亮，《中國自然神與自然崇拜》，頁11-29。李杜，《中西哲學思想中的天道與上帝》，頁12-15。麥克斯‧穆勒，《宗教的起源與發展》，頁115-152。加里‧特朗普，《宗教起源探索》，頁23-71。布萊恩莫里斯〔Brian Morris〕，《宗教人類學導讀》，頁101,123-124。施密特，《比較宗教史》，頁39-53。夏普，《比較宗教學》，頁35-43）</span>人類學家施密特指出，進化學說當時佔據了歐洲人的心靈，在一種唯物論的態度下發展，否認「上帝」的年代久遠。此思潮相當強大，結果幾乎沒有人敢反對這種思潮，指證在真實原始民族中，人早已認識上帝。<sup>3</sup><span style={cite}>（施密特，《比較宗教史》，頁213）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  然而進化論直到如今仍是「假說」，在化石證據、基因突變兩個主要領域不僅得不到更好的證據，反而有許多相反的證據，諸如「寒武記大爆炸」、「突變有害」、「智慧設計」等。威爾斯在《進化論的聖像──課本教的錯在哪裡？》一書中，以相當客觀的論述，指出進化論所根據的一些實驗，都不能真正證明進化論，例如突變的果蠅多了一對翅膀，使牠減低生存能力，而非增加生存能
                </p>

                <PageTag page={107} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  力。<sup>4</sup><span style={cite}>（孫大程，《創世以來的奧秘》，頁3-6。威爾斯，《進化論的聖像─課本教的錯在哪裡？》，頁179-191。唐理明，〈是誰偷梳换柱？－我對進化論的認識〉，《海外校園46期》，2001.04。劉良淑，〈智設論的邏進〉，《恩福》五卷四期，總17，2005年10月，頁4-5。麥格夫，《科學與宗教引論》，頁24-29）</span>此外，自由神學在兩次世界大戰後已不再佔有優勢地位，西方教會重新回到福音信仰，接受超自然創造、啟示與救贖<sup>5</sup><span style={cite}>（Alister McGrath, Evangelicalism &amp; the Future of Christianity, 17,36,94-97. 麥格夫，《福音派與基督教的未來》，頁9,32,102-105。Donald Bloesch, The Evangelical Renaissance, 13-18）</span>。華人教會也大都相信創造、啟示與救贖。<sup>6</sup><span style={cite}>（容保羅，《世界華人福音會議實錄》，頁16-27）</span>
                </p>

                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">二、人類學的研究──先一神後多神</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  維也納大學原始人種學、語言學教授施密特（史密德）博士（Dr. Wilhelm Schmidt）曾對人類歷史精深研究，不受限近代宗教理論，也不訴諸聖經，直接從人類學的資料著手研究。得一重要特徵，即各民族都有一位有道德的至上神，超越在其他神明之上。例如，印歐民族的「上帝」，散佈在整個印歐區域各民族中，可知「上帝」在太古時候已存在，並且在那時就開始接受崇拜。許多最原始的民族，如澳洲原住民、南安達曼人、小黑人、矮人等，有一神信仰，而沒有崇拜精靈或祖先亡靈，其一神信仰斷非從多神教而來。<sup>7</sup><span style={cite}>（施密特，《比較宗教史》，頁3,55-60。在印度，天帝Dyaupsitar的古名字是Dyaus Asura，意為〈天的主宰〉，在吠陀時代，以Varuna代替，是創造、安排、維護、及統治世界者，並有純潔、判罰惡人的聖怒，及矜憫慈者的慈受。義大利的朱比特是道德與公眾秩序的維護者，被稱為Optimus Maximus〔最好最大者〕，具有最高的權力，美善及光榮。祂的〈父〉性非常重要，〈父〉的頭銜與祂的名字永不分離）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  多數民族兼有一神及多神，其一神的特質是「道德的、父性的、創造者」，其多神的特質是「詼諧的、淫穢的、低劣的」，二種特質的相關就如「愛」與「慾」一般，好像很近，其實很遠。<sup>8</sup><span style={cite}>（施密特，《比較宗教史》，頁218-222,238-239）</span>
                </p>

                <PageTag page={108} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  因此可知，人類乃是從一神信仰開始，後來增添多神乃至邪靈的迷信，但二者又常並存。舊約時期，以色列人信上帝後又有偶像崇拜，新約時期天主教發展出聖徒崇拜，也是類似的現象。
                </p>

                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">三、原始民族的信仰──獨一至上神</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  施密特博士對現存原始民族作深入廣泛的研究，他們是民族學上有最高年代的民族，其主要特徵有四：（1）地理：所居住的地方是最邊遠的、被隔絕的、最難進去的。（2）經濟：他們採集食物為生，處在經濟發展的創始階段。（3）社會：房屋、衣服、工具、社會組織，都是最原始的。（4）文化：沒有圖騰崇拜、農業、母權、紡織等最初期的文化或工業。由以上四方面，可知他們沒有受到後起文化的影響，他們的宗教乃是最接近於宗教起源的。結果發現：在任何後期文化中，至上神的形式皆不如在原始文化中那樣清晰、確定、生動、直接；而且這位至上神不只在一、兩個原始民族中，乃在所有原始民族中都可以找到。<sup>9</sup><span style={cite}>（施密特，《比較宗教史》，頁312-320）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  包括非洲東部、西部的小矮黑人、亞洲的矮人、菲律賓群島的小黑人、南澳洲、北極、北美的原始文化，都在其宗教中找到這位至上神。其分佈環繞了世界，並達到各洲的盡頭。假如在這個龐大區域中原始民族的殘餘，都有至上神的信仰，那麼這種信仰顯然是人類最古文化的主要成分。這種信仰必然是最古時代的黎明，在個別的民族彼此沒有分開之前，就已根深蒂固的生長在這文化中了。<sup>10</sup><span style={cite}>（施密特，《比較宗教史》，頁320-325）</span>
                </p>

                <PageTag page={109} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">四、原始民族對至上神的信仰內容<sup>11</sup><span style={cite}>（本項整理自施密特著《比較宗教史》，頁329-352）</span></p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  原始民族所信的至上神，其住處、形象、名稱、屬性，與演變宗教的推論不合，而與聖經創世記相合。多數原始民族都說神從前與人常在一起，教世人一切的善，與人有密切的關係，但因人犯罪，祂離開地升到天上。雖然至上神與天有關係，但祂是一位有獨立人格的神，與物質的天空大有分別。<sup>12</sup><span style={cite}>（施密特，《比較宗教史》，頁329；麥克斯‧穆勒，《宗教的起源與發展》，頁116）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  關於至上神的形象，分為兩類，一類是沒有型態、不能看見的，其中有的說能聽見或感覺到，有的說像風。另一類是「像一個人」，有長髮，潔白像棉花，或像發光的白色。或說，至上神全身像太陽發光，但臉部蓋著，從沒有人看過。或說，坐在天上的水晶寶座上，四圍發出彩虹的光芒。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  關於至上神的稱呼，「父、我（們）的父」是最通用的，表達出人對至上神的尊敬、愛戴、完全信靠。<sup>13</sup><span style={cite}>（施密特，《比較宗教史》，頁333；麥克斯‧穆勒，《宗教的起源與發展》，頁151）</span>部分原始民族也稱至上神為「造物者」、「造世界者」，或「造生命者」。一個比較普遍的稱呼與住處有關，不同民族有「在上的祂、住在上面的祂、在天空的祂、在上的老者、在上者、在上的主」等不同稱呼。另有一些個別民族使用的稱呼：如神聖的天君、賜予者、（宇宙的）維持者、（嬰兒的）搖籃、啟示者及保護者、人格、至高者、最有權能者、監察者、力量等。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  從至上神的稱呼已能看出其屬性，但還有更多材料顯示出其他屬性，包括永活、全知、全在、仁慈、聖潔、全能、創造力。他們也相信，至上神制訂道德律，賞罰善惡（死後審判，善者去天
                </p>

                <PageTag page={110} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  堂，惡者受苦刑）。<sup>14</sup><span style={cite}>（東南澳洲的庫林人相信人的身體是用泥土形成的，至上神將生命由泥人的鼻孔、嘴、肚臍吹進去。加藤堡人相信至上神用濕泥形成了第一個人，然後以祂萬能的語言，使泥人變成了活人。見施密特，《比較宗教史》，頁341）</span>至上神不是遠離人的，乃是繼續以其德行、能力影響這世界與居民，接受人的祈禱與供獻。原始民族最主要的供獻是「薦新」，所獲取或採集的食物，未吃以前先將以一小份供獻給神，表明地上所有都是屬於神的。<sup>15</sup><span style={cite}>（神明是從供養死者而來的那種理論，乃是錯誤的，因為在任何原始文化的部族中，都沒有奉死者的禮節。施密特，《比較宗教史》，頁351）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  從埃及、亞述、伊朗、希伯來、巴比倫、腓尼基、希臘、羅馬、印度、非洲、美洲、中國的古史中，都可看到具共通性的一神信仰。<sup>16</sup><span style={cite}>（童力生，《聖道論》，頁60-61,76）</span>相信進化演變的人說，這是人類文明發展的結果，然而若將今日原始民族的單純一神信仰納入研討，則這些文明古國具共通性的一神信仰就可作為全人類先有一神信仰的強力佐證。由此可知，人類最初是接近上帝的，後因驕傲自義，逐漸與上帝遠離。回顧中華民族的歷史，也可得到同樣的結論，這是本章要進一步討論的。<sup>17</sup><span style={cite}>（童力生，《聖道論》，頁62-64）</span>
                </p>
              </div>

              <div className="mb-4">
                <span className="font-semibold text-amber-700 block">貳、中國人與「上帝」的關係</span>

                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">一、從聖經看上帝與中國的關係</p>
                <p className="text-gray-700 leading-relaxed">
                  按照聖經的上帝觀，上帝從來不僅僅是以色列人的上帝，乃是萬族之本（徒十七26）、人類之光（約一4）、普世之王（詩四七2,8）。祂不只是猶太人的上帝，也是外邦人的上帝（羅三29）。祂是創造天地的主宰，也是全人類的父親。<sup>18</sup><span style={cite}>（何世明，《中國文化中之有神論與無神論》，頁19-20）</span>按照聖經的啟示觀，
                </p>

                <PageTag page={111} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  上帝的一般啟示遍及宇宙（詩十九），進入文化（徒十七23），廣佈人心（羅一19，徒十七27）按照聖經的歷史觀，上帝是全人類歷史的主宰（徒十四16~17；詩廿九10；耶十10）；現今人類都是挪亞的後代；創世記前十一章記載的人類共同史，有可能在任何一個足夠古老的文明中找到痕跡。<sup>19</sup><span style={cite}>（遠志明，〈上帝與中國〉，《舉目》一期。美國加州：海外校園雜誌社。2001.03）</span>因此，上帝自古也是中國人的上帝，在中國有主權作為；中國文化中也有上帝的一般啟示；中國人也是挪亞的後代；所以，中國古經可能有創世記前十一章的痕跡。
                </p>

                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">二、中國古籍中「天」的意義</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  有些學者認為中國古籍中的「天」是無位格的，但細察上下文，可看出其意義很多是有位格的，且「天」與「帝、上帝」經常交互使用。何星亮認為「天」和「上帝」都是古代中國至上神的稱號，「上帝」是殷人對至上神的稱呼，「天」則於夏、周都被用於稱呼至上神。周代以後，「天」與「上帝」並用，延續了幾千年。<sup>20</sup><span style={cite}>（何星亮，《中國自然神與自然崇拜》，頁53-56）</span>勞思光論述中國之宗教，談到「意志之天與祭祀」時，也指出：「殷周以前，人們普遍相信一個『有意志之天』，能主宰人世的禍福。……正式祭祀雖為貴族所專有，但求神的舉動，一度似乎非常風行。」<sup>21</sup><span style={cite}>（勞思光，《中國文化要義新編》，頁173）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  唐君毅討論「中國古代宗教精神之特質」時，雖然強調中西方的宗教思想有所不同，但亦說明天神之具人格、道德，乃東西方宗教思想之常軌，中國亦未嘗例外。<sup>22</sup><span style={cite}>（唐君毅，《中國文化之精神價值》，頁28）</span>唐君毅指出中國古代之天帝富仁愛體恤之德，並引用詩、書中「天矜於四方民」、「唯天惠民」
                </p>

                <PageTag page={112} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  等說明之。<sup>23</sup><span style={cite}>（唐君毅，《中國文化之精神價值》，頁34-35）</span>顯示中國古籍之「天」，按其上下文，可看出有些是神義性、意志性的「天帝」。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  李杜分析詩、書中「天」的涵義有四種：1.神義性的天──連著「命」字（天命），作為自動詞的主詞（天生蒸民），作為介詞的受詞（受祿於天），或作為賓詞（畏天之威），而顯示為一位「意志者」。2.主宰性的天──「天」字前面加上相關的形容字詞（明明上天）。3.自然義的天（有鳥高飛，亦傅於天）。4.天堂義的天（三后在天）。<sup>24</sup><span style={cite}>（李杜，《中西哲學思想中的天道與上帝》，頁30-34）</span>
                </p>

                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">三、跨文本的閱讀方法</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  李熾昌以《詩篇》與《詩經》為例，提出跨文本的閱讀方法。他指出，《詩經》中的哀歌，常以「上帝」和「天」作為人民困惑及投訴的指涉。許多註釋書視這兩個字乃對有權勢者──如君主和官員──的反諷，以免觸怒君主而遭刑罰。<sup>25</sup><span style={cite}>（許志偉、趙敦華主編，《衝突與互補：基督教哲學在中國》，頁32）</span>李熾昌把《詩篇》引入《詩經》的閱讀裡，目的是要開顯隱含於《詩經》文本中的深層意義，特別是被中國知識傳統否定及化約為非宗教哲學概念的豐富宗教元素。他以《詩經》288篇作為說明的例子：<sup>26</sup><span style={cite}>（許志偉、趙敦華主編，《衝突與互補：基督教哲學在中國》，頁46）</span>
                </p>
                <p className="text-gray-700 leading-relaxed italic mb-3">
                  敬之敬之，天維顯思，命不易哉！無曰高高在上，陟降厥士，日監在茲。維予小子，不聰敬止。日就月將，學有緝熙於光明。佛時仔肩，示我顯德行。
                </p>

                <PageTag page={113} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  上引這首詩，朱熹將之分為兩部分，假定前一部分是成王對朝廷官吏之諫言的重述，後一部分是成王對諫言的回應。大部分中國學者對這首詩歌的解釋，基本上追隨朱熹的進路，視這首詩歌為成王的自我反省、檢視及警戒。然而，當李熾昌將《詩篇》139篇與《詩經》288篇作平行閱讀時，便立即被這兩首詩所表達的相同宗教經驗所震撼，特別是其中詩人被神所認識及圍繞的表述：<sup>27</sup><span style={cite}>（許志偉、趙敦華主編，《衝突與互補：基督教哲學在中國》，頁47-48）</span>
                </p>
                <p className="text-gray-700 leading-relaxed italic mb-3">
                  耶和華啊，你已經鑒察我，認識我。我坐下，我起來，你都曉得；你從遠處知道我的意念。我行路，我躺臥，你都細察；你也深知我一切所行的。（詩一三九1~3）
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  經過對耶和華的臨在及細察的讚嘆後，詩人在詩歌的結束前祈求上帝的引領及幫助：
                </p>
                <p className="text-gray-700 leading-relaxed italic mb-3">
                  神啊，求你鑒察我，知道我的心思，試煉我，知道我的意念，看在我裡面有什麼惡行沒有，引導我走永生的道路。（詩一三九23~24）
                </p>
                <p className="text-gray-700 leading-relaxed">
                  藉此比較，可看出《詩經》288篇乃是表達了上天與地上君王的緊密關係及恆常交流，而《詩經》288篇的最後兩句，乃是一種祈求上天幫助的宗教表達，而非君主對朝臣的回答。李熾昌認為，此種宗教態度應當是詩歌開首要求敬畏上天（敬之敬之）的核心意義，並且是構成往後整首詩歌的主要因素。<sup>28</sup><span style={cite}>（許志偉、趙敦華主編，《衝突與互補：基督教哲學在中國》，頁48-49）</span>本章直接引證中國各種古籍之原文，使用跨文本的閱讀方法，
                </p>

                <PageTag page={114} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  除了可看出有位格的天，更進一步可分析其不同屬性及作為。
                </p>

                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">四、中國少數民族的至上神<sup>29</sup><span style={cite}>（本項整理自何星亮著，《中國自然神與自然崇拜》，頁59-62）</span></p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  何星亮認為天神觀念是隨著人類社會發展而形成的，他的看法屬「自然神話論」<sup>30</sup><span style={cite}>（何星亮，《中國自然神與自然崇拜》，頁47）</span>，但他所提供的資料有其參考價值，能幫助我們更清楚看到普世人類與中國人信仰「上帝」的共通性。他指出，中國不少民族都曾崇拜過至上神：
                </p>
                <p className="text-gray-700 leading-relaxed">
                  匈奴人的至上神為「天」，祂是至高無上、主宰一切的。冒頓單于在至漢朝皇帝的書信中自稱「天所立匈奴大單于」。匈奴人還認為天是執法者、司法者，故他們會對天發誓。突厥人的天神既統轄天上氣象諸神，也主宰人間福禍。他們的一切成就和勝利，都認為是上天所賜。古代蒙古人相信只有一個神，他們相信祂是一切可見和不可見的事物的創造者，祂是世界上的美好事物也是種種艱難困苦的賜予者。這位神就是「天」，「天是至高無上的神，是生命的泉源，是慈悲仁愛的父親。」古代柯爾克孜人的心目中，天神「騰格里」是高於一切的神。他們發誓時常說：「騰格里在上。」哈薩克族未信回教前，十分崇拜天神「騰格爾」，稱天神為世界和人類的創造者，主生殺予奪，司禍福吉凶。古代契丹人認為天是最高主宰，生死禍福均由天賜，凡大小事均告天或祭天。女真人也奉天神為至上神，並有固定的拜天日期和拜天儀式。
                </p>

                <p className="text-gray-700 leading-relaxed mt-3 mb-1 font-semibold">五、普通啟示的功能與限度</p>
                <p className="text-gray-700 leading-relaxed">
                  基督福音進入中國，一直面臨中國文化的考驗，許多人認為
                </p>

                <PageTag page={115} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  中國文化是基督信仰的死敵。然而細察中國古籍，可發現尚書、詩經裡的上帝和聖經裡的上帝非常相似。差別在於，聖經完備，而中國古籍所表達的有限。張人海指出，中國古籍並不能補充任何真理，但其內容與聖經的相似性能幫助中國人知道，中國不在上帝的治理之外。<sup>31</sup><span style={cite}>（張人海，《護統‧基督‧福音》，頁17）</span>誠如保羅所說：「上帝在從前的世代，任憑萬國各行其道，然而為自己未嘗不留出證據來。」（徒十四16~17）「上帝的事情，人所能知道的，原顯明在人心裡，因為上帝已經給他們顯明。自從造天地以來，上帝的永能和神性是明明可知的，雖是眼不能見，但藉著所造之物，就可以曉得，叫人無可推諉。」（羅一19~20）
                </p>
                <p className="text-gray-700 leading-relaxed">
                  罪的本義就是離開真神，不信真神。所以我們要從中華民族最早曾經敬拜獨一真神的歷史開始探討。章力生認為，中華民族原始的一神信仰，屬於普通啟示。這種知識不會加增聖經的啟示，但能幫助華人看見兩件事：第一、華人過去如何離開一神信仰，背道墮落；第二、基督教並非洋教，乃與中國舊有的信仰相近；華人信奉上帝，並非忘本，而是回歸。以致現在能謙卑來尋求真神。<sup>32</sup><span style={cite}>（童力生，《原道》，頁30）</span>普通啟示接受特殊啟示的光照，可效力於福音的傳揚。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-amber-800 text-lg mb-3">第二節　古文中的「上帝觀」</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                據考古學者考證從中國發掘出來的甲骨文，中外學者幾乎一致承認，中華民族最初便有「昭事上帝」的信仰。中國先民早就相信
              </p>

              <PageTag page={116} />
              <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                一位創造天地、主宰萬物、賞善罰惡、聰明正直的上帝，並敬畏而崇拜之。<sup>33</sup><span style={cite}>（童力生，《原道》，頁9；李獵生，《聖經與中國文化》，頁47）</span>這種宗教思想可證諸數量極多的甲骨卜辭及中國各種古籍。<sup>34</sup><span style={cite}>（童力生，《原道》，頁10-11）</span>本節所謂「古文」，主要包括「甲骨文」及「金文」。甲骨文是寫或刻在龜的腹甲、背甲和牛羊肩胛骨上的文字，用於占卜。商朝以前，專用牛羊的肩胛骨，商朝後期，盤庚遷殷以後稱為殷代，這時兼用牛骨及龜骨。<sup>35</sup><span style={cite}>（董作賓，《甲骨學六十年》，頁2）</span>1899年起，從殷代都邑故墟（今河南省安陽縣小屯村）陸續出土十幾萬片<sup>36</sup><span style={cite}>（董作賓，《甲骨學六十年》，頁14,20,135-137）</span>，經多年研究可識別之字，累計約兩千。<sup>37</sup><span style={cite}>（董作賓，《甲骨學六十年》，頁11）</span>中國古人後來也把紀念文字鑄在銅器上，放在宗廟或作為貴族的陪葬品。古人把「銅」叫「金」，因此，這些銅器上的文字叫「金文」。<sup>38</sup><span style={cite}>（周金聲，《基督教與中國文化》，頁371）</span>以下舉例有「上帝、帝」之卜辭、文字，按性質分別說明。
              </p>

              <div className="mb-4">
                <span className="font-semibold text-amber-700 block">壹、甲骨文中的「上帝」</span>

                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">一、上帝有賜福降災之權柄</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「上帝若，王有又。」<sup>39</sup><span style={cite}>（董作賓，《殷虛文字甲編》第1164塊。中央研究院。1948）</span>「若」同「諾」，「又」即「祐」；譯文：「上帝承諾，王會受到保祐。」
                </p>
                <p className="text-gray-700 leading-relaxed">
                  「帝其福王。」<sup>40</sup><span style={cite}>（羅振玉編，《殷虛書契後編》，卷下24頁第12塊。1916）</span>「帝其作王禍，帝弗及作王禍。」<sup>41</sup><span style={cite}>（董作賓，《殷虛文字乙編》第1707&amp;4861塊）</span>
                </p>

                <PageTag page={117} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  「上帝降艱。」<sup>42</sup><span style={cite}>（胡厚宣編，《甲骨續存》，第一卷168塊。1955）</span>譯文：「上帝要降艱難給人民了。」在其他甲骨文又有：「帝其降艱。」<sup>43</sup><span style={cite}>（羅振玉編，《殷虛書契前編》，卷三24頁第四塊）</span>「帝其降我艱。」<sup>44</sup><span style={cite}>（董作賓，《殷虛文字甲編》第766塊）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「既繫於上帝。」「繫」即「繫」；譯文：「這一切都連接於上帝。」<sup>45</sup><span style={cite}>（黃濬編，《鄴中片語》，卷三上第32塊。1942）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  從以上數例可知，殷代人深信上帝有賜福降災之權柄，祂掌管君王與人民的福禍艱難，他們的生活、命運乃是連結於上帝的。這相似於摩西向以色列百姓所宣告的：上帝能賜福，也能降災，在乎百姓是否遵行神的誡命。（申廿八1，15）也像保羅所說：「我們生活、動作、存留都在乎祂。」（徒十七28）並由第一例可看出，當時的君王在上帝前有特殊蒙福的地位，好像以色列王是上帝的受膏者，蒙上帝特別保護：「現在我知道耶和華救護祂的受膏者，必從祂的聖天上應允他，用右手的能力救護他。」（詩二十6）
                </p>

                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">二、上帝以命令掌管天氣風雨</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「帝令雨足年，帝令雨弗及年。」<sup>46</sup><span style={cite}>（羅振玉編，《殷虛書契前編》，卷一50頁第一塊。1931）</span>譯文：「上帝令這一年雨水充足；上帝令這一年雨水不充足。」
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「今三月，帝令多雨。」<sup>47</sup><span style={cite}>（羅振玉編，《殷虛書契前編》，卷三18頁第五塊）</span>「今二月，帝不令雨。」<sup>48</sup><span style={cite}>（劉鶚，《鐵雲藏龜》，123頁第一塊。台北：藝文印書館。1904）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  「翼癸卯，帝其令風；翼癸卯，帝不其令風。」<sup>49</sup><span style={cite}>（董作賓，《殷虛文字乙編》第2452&amp;3094塊。1943）</span>「翼」同「翌」，指「明天、後天、大後天」。<sup>50</sup><span style={cite}>（周金聲，《基督教與中國文化》，頁368）</span>
                </p>

                <PageTag page={118} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  「帝其于今十三月，令雨；帝其于今一月令雨。」<sup>51</sup><span style={cite}>（董作賓，《殷虛文字乙編》第3283塊）</span>十三月為閏月，「雩」同「啟」，天晴之意。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  由以上數例可知，殷代人深信上帝有權柄掌管天氣。文中的「令」字是很傳神的，相似於聖經中的表達方式：「祂以風為使者，以火焰為僕役。」（詩一〇四4）「因祂一吩咐，狂風就起來，海中的波浪也揚起；……祂使狂風止息，波浪就平靜。」（詩一〇七25，29）「祂擲下冰雹如碎渣，祂發出寒冷，誰能當得起呢。祂一出令，這些就都消化；祂使風颳起，水便流動。」（詩一四七17~18）「耶穌斥責風和海，風和海就大大的平靜了。眾人希奇說，這是怎樣的人，連風和海也聽從他了。」（太八26~27）
                </p>

                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">三、好君王或義人死後到上帝那裡</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「下乙賓于帝，咸不賓于帝。」<sup>52</sup><span style={cite}>（董作賓，《殷虛文字乙編》第7197塊）</span>譯文：「下乙死後可到上帝那裡，咸死後不能到上帝那裡。」
                </p>
                <p className="text-gray-700 leading-relaxed">
                  「下乙不賓于帝，大甲賓于帝。」<sup>53</sup><span style={cite}>（董作賓，《殷虛文字乙編》第7434塊）</span>譯文：「下乙死後不能到上帝那裡，大甲死後可到上帝那裡。」上帝自稱：「我是亞伯拉罕的上帝、以撒的上帝、雅各的上帝。」（出三15）耶穌根據此說明復活的真理，指出：「上帝是活人的上帝，不是死人的上帝。」意思是亞伯拉罕、以撒、雅各雖然死了，但他們在上帝那裡是活著的（太廿二29~32）。這是以色列人自古所相信的。古時中國人有這種信仰，是巧合，還是有其古老的淵源，來自挪亞？根據聖經，中國人必是（現存人類都是）挪亞的
                </p>

                <PageTag page={119} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  後代，而挪亞知道以諾與上帝同行三百年，上帝將他取去，永遠與上帝同在（創五24）；也知道曾在伊甸園有生命樹，能使人永遠與上帝在一起。這種對永生的盼望，應是人類共通的，因為都是亞當、挪亞的後裔。他們傳遞生命、信仰，並傳說古史給後代。以色列人有亞伯拉罕起始的眾先知，有多次多方的特殊啟示（來一1），中國人沒有這種先知，所以中國的記載比較不清晰，但仍可看出先祖的同源性。
                </p>
              </div>

              <div className="mb-4">
                <span className="font-semibold text-amber-700 block">貳、金文中的「上帝」</span>

                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">一、上帝保護求告祂的人</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  宗周鐘：「惟皇上帝百神，保余小子。」譯文：「偉大的上帝及眾神（眾天使天軍），保護我這個小子。」「小子」是周代帝王在上帝面前的謙稱，意為「上帝的小兒子」。<sup>54</sup><span style={cite}>（周金聲，《基督教與中國文化》，頁371-372）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  中國有「百神」，並不等於是多神信仰，因上帝在「百神」之上，差遣使用「百神」，所以仍屬一神信仰。正如聖經中的上帝，乃是「萬軍之耶和華」（賽一24）。祂差遣「眾使者」四圍安營保護敬畏神的人（詩三四7）。又說：「耶和華比萬神都大。」（出十八11）「祂在萬神之上當受敬畏。」（代上十六25）又稱上帝為「萬神之神」（但十一36）。
                </p>

                <p className="text-gray-700 leading-relaxed mt-3 mb-1 font-semibold">二、君王死後在天上監視百姓</p>
                <p className="text-gray-700 leading-relaxed">
                  大豐簋：「事喜上帝，文王監在上。」譯文：「事奉我們喜愛的上帝，文王也在天上看著我們。」猶鐘：「先王其嚴，在帝左右。」叔人鐘：「號號成唐，有嚴在帝所。」譯文：「我們對成湯
                </p>

                <PageTag page={120} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  有畏懼，因為他莊嚴地與上帝同在。」<sup>55</sup><span style={cite}>（周金聲，《基督教與中國文化》，頁272-373）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  中國古人相信好君王在上帝那裡活著，相似於以色列人相信亞伯拉罕、以撒、雅各在上帝那裡活著。然而以色列人雖相信先祖在上帝那裡，卻沒有像中國人那樣，以為先王在看著後代人民。這是中國人的一個偏差──從崇拜上帝延伸至崇拜先王、先祖。但我們看羅馬天主教的發展，即使原是一神信仰，而且有救主耶穌基督的啟示，卻也掉入聖徒崇拜的錯誤裡面，在敬拜、禱告上帝的同時，也敬拜、禱告馬利亞、保羅、彼得……等徒。這與中國人從敬拜上帝延伸至敬拜先王、先祖，何其相似！
                </p>

                <p className="font-bold text-amber-700 mb-2">小　結</p>
                <p className="text-gray-700 leading-relaxed">
                  從以上古文來看，中國人所相信的上帝，可歸納為三方面：（1）上帝的權柄與工作包括賜福降災、掌管天氣、保護屬祂的人；（2）上帝做事的方式是發號施令及差遣使者；（3）上帝所在的地方是實在的，人離開世界可到祂那裡去。<sup>56</sup><span style={cite}>（何星亮著，《中國自然神與自然崇拜》，頁56有相似的歸納）</span>這些特點與聖經所啟示的上帝相當地一致。可幫助我們合理地推測，中國古人相信一位治理世界的上帝。
                </p>
              </div>
            </div>

          </div>
        )}
      </div>

    </div>
  );
}
