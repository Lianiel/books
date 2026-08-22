import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Scale3d, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book39Ch12() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    exploration: true,
    questions: true,
    practice: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-slate-800 to-blue-900 bg-clip-text text-transparent">第十二章</h1>
        <h2 className="text-xl font-semibold text-gray-700">尼布爾式理想主義——務實倫理學</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          「主人就誇獎這不義的管家做事聰明；因為今世之子，在世事之上，較比光明之子更加聰明。」（路16:8）
        </p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-slate-50 to-blue-50 hover:from-slate-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Scale3d className="w-5 h-5 text-slate-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <p className="text-gray-700 leading-relaxed">
              一般而言，尼布爾（或譯：雷茵霍爾德．尼布爾，Reinhold Niebuhr, 1892-1971，下文有時稱「大尼布爾」）的神學思想被稱為「基督教現實主義」（Christian Realism），<sup>1</sup><span style={cite}>（Cf. Dennis McCann, Christian Realism and Liberation Theology (NY: Orbis Books, 1982).）</span>他則認為自己的關懷視野更廣而不願使用這個名詞，寧可使用「基督教的現實主義」（Christian realism）作為描述性的說法。<sup>2</sup><span style={cite}>（Robin W. Lovin, Reinhold Niebuhr and Christian Realism (Cambridge: Cambridge University Press, 1995), 2.）</span>由於「現實」一詞在中文帶有負面涵義，筆者認為稱呼尼布爾的思想為「務實」更貼近本意，況且他始終未曾放棄追求理想的另外一端，若稱其倫理學思想為「現實主義」則會造成錯誤的聯想。
            </p>
            <p className="text-gray-700 leading-relaxed">
              從現實角度來看，理想主義者所追求的倫理道德理想是遠離社會現實的海市蜃樓，最大問題在於徹底低估影響重大的自我利益要素。<sup>3</sup><span style={cite}>（Reinhold Niebuhr, "Augustine's Political Realism," Christian Realism and Political Problems (New York: Charles Scribner's Sons, 1953), 119-120.）</span>尼布爾感慨說：「人是一種奇特的受造者，對於同伴有強烈的義務感，以致在追求自我利益時，不得不裝作是在服務別人。」<sup>4</sup><span style={cite}>（Reinhold Niebuhr, "Augustine's Political Realism," 120.）</span>當人們被利益吸引時，「為了眾人利益的理想」往往成為遮掩「追求自我利益實現」的最佳工具，他認為應當面對人性的現實來談倫理道德，不過他仍然堅持追求基督教信仰的理想，因此本書稱他的主張為「務實的理想主義」。由於尼布爾的弟弟理查．尼布爾（H. Richard Niebuhr, 1894-1962，下文中有時又稱「小尼布爾」）也是基督教倫理學家，如果文中同時出現兩人之處，簡稱哥哥為「大尼布爾」，弟弟則為「小尼布爾」。
            </p>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">一、尼布爾的倫理學</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                尼布爾始終關切兩個主題。其一，「愛」與「公義」，兩者在社會裡各有不同的角色，「公義」為現實生活的基礎，「愛」則為理想中的追尋與盼望。其二，個體倫理道德與群體倫理道德各有不同層次，往往在個體倫理道德層次尚可言及「愛」，但在群體倫理道德層次則無須侈言「愛」，而應當追求「公義」的落實；在現實生活當中落實的「公義」，終將被超越現實生活的「愛」充分完成，並且徹底超越。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                《道德的人與不道德的社會》有如先知般指出人類群體性的罪惡傾向，個體道德或者尚可期待，而期待群體道德則如緣木求魚。尼布爾看見人類團體建立在利益與強制的基礎，只是團體往往藉著包裝掩飾其暴力與野心，他說：「國家最顯著的道德特質，或許就是它的偽善（hypocrisy）。」<sup>17</sup><span style={cite}>（Reinhold Niebuhr, Moral Man and Immoral Society (N. Y.: Charles Scibner's Sons, 1960), 95.）</span>身為美國人的尼布爾批判美國對西班牙的戰爭呈現出「政府的偽善」與「知識分子的自欺」，美國人自稱發動戰爭是為墨西哥清除土匪，為他們建造衛生設備；是為了解放古巴人，為被征服者謀利益；是為了教育菲律賓人，把文化帶給他們。<sup>18</sup><span style={cite}>（Reinhold Niebuhr, Moral Man and Immoral Society, 99-102.）</span>在尼布爾的指責當中，不難聞到一般如同先知對於悔改的殷切期盼而發出的呼籲。
              </p>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 基本立場</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  尼布爾是第一位明確指出，個體的倫理道德與群體的倫理道德分屬不同層次的神學家，他的神學思想對當時過度樂觀的自由神學潮流是一個重擊，揭穿了人類包藏在團體體制內的陰暗面，這並非用教育手段或文化方式就能改變，更不是可以輕易解決的問題，乃需要務實且堅持理想的信仰力量。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  尼布爾認為「驕傲」是最基本的罪，在「個體性的驕傲」之外，還有「群體性的驕傲」。群體性的驕傲雖然源自個體性的驕傲，實際上卻達到了一種凌駕個人之上的權威，對個人有無上的要求，經常以「國家」的形象出現，「偶像崇拜的誘惑潛藏在國家的威嚴之下」。<sup>6</sup><span style={cite}>（Reinhold Niebuhr, The Nature and Destiny of Man, vol. 1 (New York: Charles Scribner's Sons, 1941, 1964), 212.）</span>尼布爾批判國家必然表現驕傲的罪性與偶像崇拜，這不只呈現在物質層次的競相追求生存，而且呈現在國家自我主義的精神特徵：權力欲望、驕傲自負、輕視他國、假冒為善，「最後，宣稱道德自主——藉由社會群體的自我神化，乾脆把自己當作一切生命的源頭與目標」。<sup>7</sup><span style={cite}>（Reinhold Niebuhr, The Nature and Destiny of Man, vol. 1, 210-211.）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  尼布爾最具創見之處，在於指出從群體觀點來看，道德理想是「公義」；儘管從個人觀點來看，最高標準則是「愛」。公義是現實生活中論及群體倫理道德最起碼的要求，愛則是任何人為制度的終極目標；公義多少還隱藏著自利的陰暗面或追求某些利益的誘因，但公義是因著愛才有可能完全實現，人為制度也因著愛終將被否定，因為愛能終止一切斤斤計較的制度。<sup>8</sup><span style={cite}>（尼布爾，《人的本性與命運》，謝秉德譯〔香港：基督教文藝，1981〕，285。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  尼布爾對於人性既不過分悲觀，也不過分樂觀。他期盼改教運動與文藝復興的辯證式綜合：前者對人過分的悲觀，導致在現世當中無力；後者對人過分的樂觀，導致輕忽了人性的陰暗面。<sup>9</sup><span style={cite}>（Reinhold Niebuhr, The Nature and Destiny of Man, vol. 2 (New York: Charles Scribner's Sons, 1943, 1964), 204-212.）</span>尼布爾既反對樂觀主義，亦反對悲觀主義。一方面，樂觀主義者過於肯定人們追求公義的能力，以致天真地支持民主政治，無法看到根源於人性陰暗的弊病正在腐蝕民主政治。另一方面，悲觀主義者認為人們不公義的傾向難以挽回，因而反對民主政治理論，寧可為了追求社會秩序，賦予統治者不受節制的權力，卻忘掉了連統治者本身也有不公義的傾向，況且「擁有權力正是加速這不公義傾向的惡化，因此不必負責與不受節制的權力是不公義最大的來源」。<sup>10</sup><span style={cite}>（Reinhold Niebuhr, The Children of Light and the Children of Darkness (New York: Charles Scribner's Sons, 1960), xiii-xiv.）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  尼布爾說出一句名言：「人追求公義的能力，使民主政治成為可能；而人對不公義的傾向，使得民主政治成為必須。」<sup>11</sup><span style={cite}>（Reinhold Niebuhr, The Children of Light and the Children of Darkness, xiii.）</span>這句話深刻洞察人性的優點與缺點，一語道破民主政治的基礎及民主政治的必要：一方面看到人具有追求公義的能力來實施民主政治的治理，另一方面則指出人不公義的傾向，所以更需要民主政治的制衡。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  在現實生活當中落實的「公義」，終將被超越現實生活的「愛」充分完成，並且徹底超越。這是由於群體為惡經常遠遠超過個人所思所為，高談「愛」往往無濟於事，乃應務實地要求落實「公義」——公平正義。為惡的群體經常假借善良的理由、虛假的外貌，他就曾如此一針見血地說：「國家把自己打扮成上帝。」（The nation pretends to be God.）<sup>5</sup><span style={cite}>（Reinhold Niebuhr, "Augustine's Political Realism," Christian Realism and Political Problems, 122.）</span>
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">2. 《道德的人與不道德的社會》（1932）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  尼布爾曾在汽車製造業重鎮底特律牧會十三年，因關心工人生活而體驗到工業社會的弊病，親身經歷大企業無情的剝削利用勞工，於是開始批判社會體制。他於一九三二年出版《道德的人與不道德的社會》（<em>Moral Man and Immoral Society</em>），如書名所示，個體道德尚可期待，而群體道德則無可期待，亦即「集體的道德比個人的道德更薄弱」。<sup>12</sup><span style={cite}>（尼布爾，《道德的人與不道德的社會》，楊繽譯〔台北：永望，1982〕，1。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  尼布爾說：「從社會的觀點看來，最高道德理想是公理（公義，justice）。從個人的觀點，那最高標準則是不自私（unselfishness）。」<sup>13</sup><span style={cite}>（尼布爾，《道德的人與不道德的社會》，210。）</span>「不自私」在別處又稱為「愛」，於是「公義」與「愛」成為倫理道德思想的兩大主題。公義的道德理想主要針對現實生活中的群體，而愛的最高標準則可期待個體追尋，儘管「這兩種道德觀點並不是兩不相容的。它們的衝突也不是絕對的。但是它們也不能很容易相協調」。<sup>14</sup><span style={cite}>（尼布爾，《道德的人與不道德的社會》，210。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  整體而言，公義與愛的關係是辯證關係，亦即正反並立且共存；能夠落實於現實生活的公義相當於「自然」，而超越現實生活的愛則相當於「恩典」，自然與恩典的關係正是辯證關係。「『自然』所代表的乃是正義在歷史中的可能性，而『恩典』則等於完全之愛的理想可能。」<sup>15</sup><span style={cite}>（尼布爾，《人的本性與命運》，530。）</span>可見「恩典」是「自然」的完成，就超越「自然」的意義而言，也是對「自然」的否定與提升。同樣地，「對那在歷史中所成就的一切正義（公義），愛是它的完成，也是它的否定」。<sup>16</sup><span style={cite}>（尼布爾，《人的本性與命運》，530。）</span>這意味著，「愛」是「公義」的完成，由於超越「公義」，亦即對「公義」的否定與提升。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  《道德的人與不道德的社會》有如先知般指出人類群體性的罪惡傾向，個體道德或者尚可期待，而期待群體道德則如緣木求魚。尼布爾在此書主張個體與群體分別具有不同的道德理想，個體的最高道德理想是愛與不自私，而群體的最高道德理想則是公義。<sup>19</sup><span style={cite}>（Reinhold Niebuhr, Moral Man and Immoral Society, 257.）</span>「愛」與「公義」這兩大主題，前者為理想，後者則為現實，應當先落實現實生活中的公義而期盼理想中的愛，但由於兩者難以協調，在現實生活中愚蠢的善者往往唱愛的高調，卻是眼高手低，而讓熟悉團體運作規律之利益與暴力因素的惡者得逞。然而，尼布爾並未因洞察現實而成為現實主義者，他仍堅持基督教信仰的理想——愛，只不過界定公義為走向愛的終極理想之必要通道。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  尼布爾大膽宣稱：「人們不可能用純粹愛的理想來建立某種社會倫理學，因為此一理想雖聲稱要解決人與人之間的衝突，但這一點卻是法則（律法，law）要緩解和限制這範圍的內容。」<sup>20</sup><span style={cite}>（尼布爾，《基督教倫理學詮釋》〔台北：桂冠，1992〕，97。）</span>愛是超越的，也是終末的，只能在信仰與盼望裡期盼愛的終極落實；追求公義的律法則是現實的，也是此世的。因此唯有在今生今世落實公義，才能向愛的理想邁進。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">3. 《基督教倫理學詮釋》（1935）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  尼布爾在一九三五年出版的《基督教倫理學詮釋》（<em>An Interpretation of Christian Ethics</em>），提出從基督教信仰所見對群體倫理的看法，一方面批判保守派，持守空洞的宗教教條，無法與現實生活發生關連，只是高唱愛的理想，卻沒有能力落實；另一方面批判自由派，把信仰與文化等同，未能看到人性的陰暗面，誤以為道德可取代宗教，低估了實踐愛的理想之障礙。簡言之，保守派高談宗教而與現實生活脫節，自由派則高估道德而與真實人性脫節，於是尼布爾想要找出一條超越兩者之路，主張以愛為終極目標，公義則為實踐愛的過程。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  尼布爾認為，愛與公義都是基督教信仰重要的概念，但兩者層次高低不同，因此在實踐上有優先順序之分。他批判保守派不應高歌空洞的宗教性的愛，而應注意公義在現實生活中的落實；他批判自由派不應空談文化裡愛的道德實踐，而應看到藉由信仰改變人性的必要。《基督教倫理學詮釋》出版二十一年後，他在新版的序言裡說：「正如當初，我仍然相信，愛可以成為社會行動的動機，然而在一個自我利益四處侵蝕愛之聖律的真實世界裡，公義必須成為愛的工具。」<sup>21</sup><span style={cite}>（Charles C. Brown, Niebuhr and His Age: Reinhold Niebuhr's Prophetic Role in the Twentieth Century (Harrisburg: Trinity Press International, 2002), 56.）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  尼布爾坦承，建立基督教社會倫理學非常不容易，因為基督教信仰對於愛的理想使其趨向完美主義而遠離人間現實，然而基督教社會倫理學卻必須建立在對整體人類情況的了解。<sup>22</sup><span style={cite}>（尼布爾，《基督教倫理學詮釋》，關勝渝＆徐文博譯〔台北：桂冠，1992〕，67；參Reinhold Niebuhr, An Interpretation of Christian Ethics (New York: Seabury, 1979), 60-61。）</span>簡言之，倫理學必須建立在人學，當論及社會倫理時，不只需要對個別的人有充分認識，也需要對整體的人有足夠的認識。人學若是沒有與其相稱的倫理學，必定無法實踐；然而脫離了人學的倫理學，則游談無根。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  公義與愛的關係既有積極的部分，藉由公義途徑可望追求愛的完全；然而公義與愛的關係也有消極的部分，因為公義多少隱藏自利的陰暗面，以致「一切歷史中的正義觀都不免含著一些與『愛之律』相反的成分」，諸如「一個階級的利益，一個民族的觀點，一個時代的成見，一個文化的錯覺」，這些潛入公義裡面的觀點其實是為了追求某些利益，縱使不直接為了利益，也間接得到有好處的結果。<sup>23</sup><span style={cite}>（尼布爾，《人的本性與命運》，538。）</span>因此，公義需要不斷地用愛來檢視，愛則需要持續地藉著公義來落實。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  尼布爾的基督教倫理思考以務實來兼顧理想的立場，帶動了公領域與私領域的區分，這是建造現代公民社會所必備的。就公領域而言，應當優先論及法理，追求公義；就私領域而言，在公義的前提下才可言及情理，期盼愛與寬容。傳統的中國文化往往有些公私不分的傾向，最常見的弊病，就是在公領域論及人情世故，而非法律規範；空談仁義道德理想，而非務實政治。尼布爾的觀點對於這些傳統弊病有所提醒，就私領域而言，仁義道德仍是道德理想；但就公領域而言，法律規範所追求的公正，才是主要的行為依據，這並非放棄把仁義道德視為終極理想，而是務實地踩在通往終極理想的道路上。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  尼布爾批判理想主義，反對空洞不實的理想，但並非放棄理想，而是追求從現實出發的理想。若在理想的現實主義與現實的理想主義當中，非得做一抉擇不可的話，寧可取後者而捨前者，因為後者畢竟還是一種理想主義。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">4. 《光明之子與黑暗之子》（1944）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  耶穌基督說過一個不義管家的比喻，最後以主人的立場「誇獎這不義的管家做事聰明；因為今世之子，在世事之上，較比光明之子更加聰明」。<sup>24</sup><span style={cite}>（路加福音十六章8節。）</span>財產被不義管家移轉和竊取的主人，深切感慨不義管家的「聰明」，因為屬於今世國度的「今世之子」在今世事務上，總是比屬於上帝國度的「光明之子」更加聰明，顯然這帶有強烈的反諷涵義。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  尼布爾於一九四四年寫成的《光明之子與黑暗之子》，以「黑暗之子」與「光明之子」對照，相較於光明之子樂觀善良地以為自我利益可用更高的善來約束，<sup>25</sup><span style={cite}>（Reinhold Niebuhr, The Children of Light and the Children of Darkness, 10.）</span>黑暗之子毫不猶豫只認得自我利益的決定性影響力。<sup>26</sup><span style={cite}>（Reinhold Niebuhr, The Children of Light and the Children of Darkness, 9.）</span>簡言之，光明之子善良卻愚蠢，黑暗之子邪惡卻聰明。甚至原書的副標題就如此指出，雖要為民主政治辯護，但也批判傳統為民主政治辯護的方式，暗指納粹獨裁政權邪惡卻聰明，反觀那些維護自由的民主政治支持者卻是善良而愚蠢。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  在現實生活中，明白利益左右人性的黑暗之子絕不會被理想矇蔽，往往能夠徹底務實而勝過空想的光明之子。相較於黑暗之子對於人性的深刻體認，光明之子卻顯得過於天真無知，這個強烈對比含有尼布爾恨鐵不成鋼的情懷。他認同光明之子的理想，卻反對光明之子的無知，而他反對黑暗之子的意圖，卻是基於自己贊同黑暗之子對於人性的理解。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  尼布爾認為現代民主政治是由光明之子建造而成的，帶有光明正大的理想，但卻對於人性陰暗面缺乏洞察力，不論世俗的理想主義者或者基督教的自由神學家，對於政治的道德本質有過分善良的估計。<sup>27</sup><span style={cite}>（Reinhold Niebuhr, The Children of Light and the Children of Darkness, 12.）</span>關鍵之處在於，光明之子未能看見處於團體體制之下的人們追求利益的強大傾向，這不是單單空言倫理道德就可以因應的事。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  尼布爾使用從《聖經》而來的兩個名詞「光明之子」與「黑暗之子」分別稱呼兩種人。<sup>28</sup><span style={cite}>（路加福音十六章8節：「主人就誇獎這不義的管家做事聰明；因為今世之子，在世事之上，較比光明之子更加聰明。」尼布爾用「黑暗之子」代替了「今世之子」，更加突顯兩者的強烈對照。）</span>尼布爾為「光明之子」下的定義是：「那些追求把自己的利益放在更高普世規範的紀律之下，而與普世的善和諧一致的人們。」<sup>29</sup><span style={cite}>（Reinhold Niebuhr, The Children of Light and the Children of Darkness, 10.）</span>這是善良而樂觀的人們，以為自我利益是可以用更高的善來約束的。與這種觀點對立的「黑暗之子」，是道德上的犬儒主義者（cynics），他們只認得自我的意願與利益。<sup>30</sup><span style={cite}>（Reinhold Niebuhr, The Children of Light and the Children of Darkness, 9.）</span>「黑暗之子是邪惡的，因為他們認定自我利益是最高價值所在；<sup>31</sup><span style={cite}>（Reinhold Niebuhr, The Children of Light and the Children of Darkness, 9.）</span>儘管邪惡，他們卻是聰明的，因為他們了解自我利益的力量有多大。」<sup>32</sup><span style={cite}>（Reinhold Niebuhr, The Children of Light and the Children of Darkness, 10.）</span>相形之下，「光明之子是有德行的，因為他們認為在自我意願之上還有更高的規範；然而他們通常是愚蠢的，因為他們不認識自我利益的力量有多大」。<sup>33</sup><span style={cite}>（Reinhold Niebuhr, The Children of Light and the Children of Darkness, 10-11.）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  善良的光明之子呈現一種道德的「多愁善感」（sentimental）且天真無知，邪惡的黑暗之子卻呈現一種道德的「憤世嫉俗」（cynical）且冷酷現實。尼布爾進一步批判說：「光明之子的愚蠢不只低估了黑暗之子當中自我利益的力量，而且低估了自己身上自我利益的力量。」<sup>34</sup><span style={cite}>（Reinhold Niebuhr, The Children of Light and the Children of Darkness, 11.）</span>光明之子的善良，不只使其無視於別人身上的邪惡，而且使其對自身的邪惡也視而不見。相較於黑暗之子對於人性被利益因素左右的洞見，光明之子顯得笨拙無能。在現實生活中，憤世嫉俗的黑暗之子，絕對不會被理想與口號蒙蔽，往往能夠務實且比多愁善感的光明之子更有效率。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  尼布爾認為現代民主政治是由光明之子所建造的，對於人性的陰暗面缺乏洞察力而過於天真。所謂的光明之子主要是指世俗的理想主義者，然而基督教的自由神學也犯了類似的錯誤，兩者對於政治的道德本質有過分善良的估計。<sup>35</sup><span style={cite}>（Reinhold Niebuhr, The Children of Light and the Children of Darkness, 12.）</span>關鍵之處尤其在於，光明之子未能看到在群體體制之下的人們追求利益的強大傾向，這並非單單強調個體的倫理道德就可以因應的。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  光明之子空懷愛的理想，卻缺乏落實正義的實踐步驟。當邁向愛的終極理想時，在過程中需要看來與愛矛盾的正義之落實，才能使愛的理想不致落空。樂觀主義者過於肯定人們追求正義的能力，以致在天真支持民主政治當中，無法看到根源於人性陰暗的弊病正在腐蝕著民主政治。悲觀主義者認為人們不公義的傾向難以挽回，因此反對民主政治，寧可為了追求社會的秩序與一致，而賦予統治者不受節制的權力。尼布爾既不過分樂觀，亦不過分悲觀，儘管正視人性的黑暗面，卻仍堅持信仰的理想，認為力量與力量的對決正是需要「正義」的約束，並且藉由落實正義來期盼超越權利與正義的愛。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  關鍵在於理論無法與現實整合，在理論層面善良而愚蠢的光明之子，在實踐層面就轉為邪惡而聰明的黑暗之子；儘管在理論上持有光明之子的理想，在生活中卻屈從黑暗之子的現實。儒家有如善良的光明之子，因此處處碰壁而難以行道，只能乘桴浮於海。<sup>36</sup><span style={cite}>（《論語》，〈公冶長〉。）</span>法家有如現實的黑暗之子，左右逢源，卻成為強權的幫凶。嚴格來說，儒家的理，仍帶有濃厚的情，而法家的法，說穿了無非就是統御術。漢語神學應當努力分辨光明之子與黑暗之子，在極端天真善良的儒家與極端世故現實的法家之間尋找出路。針對緊迫的現實需要，落實正義法治，而針對長遠的未來理想，需要栽培教化人心；不能相反地以教化人心的道德訴求來回應團體性邪惡的蠶食鯨吞。尼布爾至少帶來一個啟發，與其奢言仁義而空談理想，不如心存仁義而落實法治。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">5. 《人的本性與命運》（1941）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  此處對尼布爾名著《人的本性與命運》做一簡要的觀察，他不只論及「原罪」（original sin），而且也論及「原義」（original righteousness），<sup>37</sup><span style={cite}>（尼布爾，《人的本性與命運》，238-294。）</span>因他沒有想要二選一，而是期盼「文藝復興」與「宗教改革」的整合，前者重視人性的可能性並發現其歷史意義，後者則透視罪的持久性而且對人性不過於樂觀，重新認識福音及倚靠上帝憐憫的必要。<sup>38</sup><span style={cite}>（尼布爾，《人的本性與命運》，445，470。）</span>這一個整合兩者的努力，反映他的倫理學主張始終追求理想與現實的整合，朝向務實的理想主義路線發展。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  基督教信仰的終極理想在於主再來的盼望，如果尼布爾堅決不棄守理想主義時，勢必需要終末論的支持。在《人的本性與命運》最後一章，他即藉由新約終末論：基督再來、最後審判、死人復活，呈現從受限於時空下之人的角度所見，嚮往歷史的終局在於那與永恆連結的盼望。<sup>39</sup><span style={cite}>（尼布爾，《人的本性與命運》，568-593。）</span>不過相對於尼布爾對歷史過程的濃厚興趣，他談到終末論視野的分量顯得過於淡薄，藍登．吉爾基（Langdon Gilkey, 1919-2004）即感嘆尼布爾的終末論太過簡短且不充分，只是從整體神學來看，畢竟他還是有意識到終末論的必要：「儘管尼布爾是個現實主義者，他還是認識到並表達了一種確定無虞的盼望，以及對上帝之應許的確信。」<sup>40</sup><span style={cite}>（藍登．吉爾基，《論尼布爾：一項神學研究》，黃路蘋譯〔新北：台灣基督文藝，2020〕，276。）</span>
                </p>
              </div>

              <div>
                <span className="font-semibold text-slate-700">6. 小結</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  美國黑人民權運動領袖金恩博士（Martin Luther King Jr., 1929-1968）在早期寫過一篇文章〈尼布爾的倫理學二元論〉，表達他儘管同意尼布爾對理想主義的批判，卻不認同尼布爾對於愛其轉化力量的悲觀估計。這意味著，金恩博士雖然同意尼布爾的務實評估，在現實生活中做倫理道德選擇有其相對性；但他卻不同意尼布爾把這愛的實現推移到終末，仍然主張來自上帝的愛是基督教信仰的基本確信。<sup>41</sup><span style={cite}>（Martin Luther King Jr., "Reinhold Niebuhr's Ethical Dualism," The Martin Luther King, Jr. Research and Education Institute, Stanford University. (https://kinginstitute.stanford.edu/king-papers/documents/reinhold-niebuhrs-ethical-dualism)）</span>從早期金恩對尼布爾的評論，更令人感受到他身為純粹的理想主義者將如何在黑暗的塵世中大放光芒！
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">二、大尼布爾 vs. 小尼布爾</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                大尼布爾閱歷廣闊，具有先知的公義性格，在觀察社會發展、國際形勢上具有洞察力；小尼布爾則是學者型的人物，大部分時間都在大學裡教書。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                一九三一年，日本侵略中國東北，呈現軍國主義的野心，當舉國沸騰認為應當壓制日本的軍國主義時，一九三二年，大尼布爾和小尼布爾在《基督教世紀》（<em>The Christian Century</em>）發表了三篇文章公開辯論。首先是平常不太公開表達意見的小尼布爾發言了，三月二十三日他發表一篇引起軒然大波的文章——〈不作為的恩典〉（The Grace of Doing Nothing），主張什麼都不要做，若說一定要做些什麼，那就是什麼都不要做（Doing Nothing, It's the only thing that we could do），亦即不做什麼是唯一能做的選擇。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                三月三十日，大尼布爾應編輯的請求，寫了一篇文章〈我們豈是什麼都不可做嗎？〉（Must We Do Nothing?）與小尼布爾辯論；四月六日，小尼布爾提出一篇文來回應——〈溝通：進入上帝國唯一的一條路〉（A Communication: The Only Way into the Kingdom of God）。<sup>42</sup><span style={cite}>（資料引自John D. Barbour, "Niebuhr Versus Niebuhr: The Tragic Nature of History," The Christian Century, 1984/November 21, 1096–1099. (https://www.religion-online.org/article/niebuhr-versus-niebuhr-the-tragic-nature-of-history/)）</span>侯活士在《和平的國度——基督教倫理學獻議》裡引述過這場辯論，他支持小尼布爾的不作為的恩典，作為其和平主義論點的例證。<sup>43</sup><span style={cite}>（侯活士，《和平的國度：基督教倫理學獻議》，紀榮智譯〔香港：基道，2010〕，第八章〈悲劇和喜樂：締造和平的靈性生活〉討論這個辯論。）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                小尼布爾為什麼有這樣的主張呢？從改革宗傳統來看，人都是有罪的，當有罪的人要介入暴力事件來制裁暴力時是危險的，因為這樣的介入也會展現暴力的傾向，既然暴力會帶來傷害，倘若為了制裁暴力就展現暴力的話，豈不更加給這世界增添不幸嗎？所以，他認為什麼都不要做，應該只相信上帝最終會改變這世界，而在信靠上帝且帶著終末盼望的前提下什麼都不做，只是擔任守望的角色，持續關心但不急著介入。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                小尼布爾對終末來臨具有樂觀的信心，他認為「什麼都不做」有兩個涵義。第一，表達我們的懺悔認罪，當看到別人犯罪時，我們必須先做到自己悔改，因為我們與別人一樣有罪。第二，相信上帝將在終末時帶來美好的結果，不做什麼就是一種等待、盼望，也就是把歷史的主權交給上帝，而不是交給人。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                總之，小尼布爾相信，如果我們真正希望世界和平的話，我們本身就要生活在這和平的價值觀裡，並且養成和平的習慣，連同自己的生命氣質、道德抉擇都要合乎和平的典範。尼布爾兄弟都是改革宗神學家，他們的先人來自德國，家族是路德宗背景，兩人在美國漸漸轉向改革宗，但不論是路德宗或改革宗都沒有這麼強烈的和平主義傾向，其實小尼布爾的文章反映了典型的重洗派和平主義理想。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                大尼布爾把基督教信仰的兩個核心主張分置不同層面：公義放在群體層面，愛則放在個體層面。在現實中，大部分情況是必須面對群體，如現代社會已經進入群體主導的世代，群體的影響遠遠大過以往的世紀，比如政治、媒體、財團、跨國公司等的運作法則，使人們身不由己被捲入群體影響的範圍之內。既然要維持對群體性罪惡的敏感，大尼布爾認為不要空談愛的口號，在群體層次不可能完全實踐愛，只要規規矩矩維持公平正義即可，小尼布爾所說的愛過於純淨而無法落實於人間。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當日本開始有軍國主義侵略行動時，大尼布爾極力主張美國介入，認為應當擺出強硬的姿態，包括施予圍堵的壓力、經濟制裁等，不過可以想像的是，無論何種制裁都是一種形式的暴力，這意味著大尼布爾認為可以「以暴制暴」，但凡是「以暴制暴」都有可能變成「以暴易暴」。由於日本軍國主義的暴力行動，許多人血脈賁張地反對，卻也隨之起舞而傾向暴力。小尼布爾則對於任何暴力的負面效應較為敏感，在舉國沸騰時，他嗅到導向罪惡的暴力氣氛，他寫這篇文章顯然是一種政治不正確的逆流而行。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                大尼布爾批評小尼布爾，認為他把一切在歷史中發生的災難都等同於來自上帝的忠告，他不認為這樣的觀察是正確的，反而應當提醒大家一起來阻止悲劇的發生，需要盡其所能來阻止它，包括使用強制的手段。兩兄弟的觀點南轅北轍，不過至少小尼布爾注意到一件事，我們如果期待和平的話，就應當身體力行和平的價值觀。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在最後一篇文章中，小尼布爾認為他們兄弟之間的爭論焦點其實不在於究竟應當作為或不作為，而是反映基督徒應當慎重思考在這處境下究竟什麼作為最為恰當。他不認為人類歷史是永遠的悲劇，唯有從一個超越歷史的目標可以獲得歷史的意義——這一點連大尼布爾也認同，基督徒應當把悲劇當作歷史完全實現的前奏。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                相形之下，大尼布爾對歷史的看法較為務實，既然人無法在歷史上克制自己的罪性，就應當盡力阻止罪惡蔓延，而非袖手旁觀。這並不意味著他主張人具有勝過罪的能力，真正解決罪的問題唯有透過悔改，儘管在悲劇中人們為了維護自己靈魂的完整而抗拒邪惡力量，但在這高貴表象之下始終藏有罪惡的腐化影響，只有透過悔改才能得到救贖。<sup>44</sup><span style={cite}>（Reinhold Niebuhr, Beyond Tragedy (N. Y.: Charles Scribner's Sons, 1937), ch.8.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                這對兄弟的辯論展現一種務實的理想主義者與理想主義者之間的不同，大尼布爾傾向前者而小尼布爾則主張後者。大、小尼布爾的爭論非常值得注意，因為這個議題指向理想主義究竟應當接受多少務實的成分。小尼布爾與侯活士的主張相近，當他主張什麼都不做時，其實期盼基督徒能夠聚集成為見證的群體，當舉世滔滔帶有暴力傾向時，這樣的群體本身就是和平的見證，當四處都陸續出現這種群體時，就會成為推動和平的力量。不過，大尼布爾無法接受這種主張，對他而言，陳意過高且有脫離現實的傾向。一九三一年，日本侵略中國東北，這個事件在歷史上，被後來一九四一年日本偷襲珍珠港事件蓋過去，演變成美國正式參戰，最後是現實主義者全面性占上風。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">三、評論</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                一般來說，東方文化在情、理、法三者之中以「情」為至上，這不只反映在人情至上的民情風俗，也反映在關係至上的社會現實，以致「理」所代表的理性社會與「法」所代表的法治社會，遲遲難以落實。從尼布爾的觀點來看，與公義相關的應當先是「法」而後是「理」，而與愛相關的則是「情」而兼及「理」，因此實踐順序應當是法、理、情。應當優先論及法理，追求正義；在正義的前提下才可言及情理，期盼愛的落實。面對緊迫的現實需要，需要落實正義法治；但針對長遠未來理想，則可栽培教化人心。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                東方文化裡常見的弊病是空談道德理想，卻無法落實於生活當中。「仁義道德」的理想需要務實的實踐步驟，否則不過是空談而已。光明之子的善良不只使其無視於別人身上的邪惡，而且可能使其對自身的邪惡也視而不見，就這一個意義而言，其實也是一種人性的陰暗面。縱使我們在理論層面是善良卻愚蠢的光明之子，在實踐層面卻很有可能轉為邪惡卻聰明的黑暗之子；儘管在理論上持有光明之子的理想，但在生活中卻屈從黑暗之子的現實。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                然而，尼布爾的論述大量使用一般性的語言，如公道正義、平等合理等，這些訴求使得他的思想與政治理論、政治哲學難以區分，而不全是純粹的基督教倫理學，這個特質使他容易進入不同的論述領域，而且也使他與信仰群體保持相當的距離，以下從神學角度討論兩種評價：
              </p>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 新正統派的角度</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  美國神學家藍登．吉爾基從小就認識尼布爾，其父為自由神學家，不過他卻受到新正統神學家田立克、尼布爾的影響，尤其在歷經第二次世界大戰的野蠻殘酷之後，他認為新正統派尼布爾的思想特徵為「超越性與關連性之辯證法」（the dialectic of transcendence and relatedness），兼具投入歷史的務實態度，以及超越歷史的神聖信念。<sup>45</sup><span style={cite}>（藍登．吉爾基，《論尼布爾：一項神學研究》，21-23。）</span>吉爾基認同新正統派神學，主張上帝既超越於世又參與於世，反對自由神學一面倒地認為上帝參與於世。自由神學反映一心追求進步主義、自由主義的現代人，輕忽了人的犯罪傾向，出於以自己為世界中心的驕傲心態，使得偶像崇拜成為現代文化的特徵。<sup>46</sup><span style={cite}>（藍登．吉爾基，《論尼布爾：一項神學研究》，31，38-41。）</span>根據吉爾基的評價，尼布爾對於罪惡——尤其是群體性罪惡的深入觀察，當時無人能出其右，然而他並沒有成為一個悲觀主義者，因而主張罪對人而言是「被束縛卻又自由，不可避免但並非必然」，<sup>47</sup><span style={cite}>（藍登．吉爾基，《論尼布爾：一項神學研究》，153。）</span>務實的理想主義者應當是十分恰當的定位。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">2. 侯活士的批判</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  侯活士在二〇〇〇至二〇〇一年吉福德講座的講稿，後來被出版成《偕同宇宙子粒：教會見證與自然神學》，<sup>48</sup><span style={cite}>（Stanley Hauerwas, With the Grain of the Universe—The Church's Witness and Natural Theology (Grand Rapids: Brazos, 2001).）</span>其中教會見證的部分指向巴特的倫理學模式，而自然神學則指向尼布爾的倫理學模式。侯活士追隨巴特，強調上帝特殊啟示優先的思維方式，反對重視宇宙普遍啟示的自然神學思維方式。藉由比較尼布爾與巴特，侯活士得以對尼布爾展開深入的批判。
                </p>

                <p className="font-semibold text-slate-800 mb-2 mt-3">▲比較尼布爾與巴特</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  根據侯活士的觀察，尼布爾主張「基督教必須合乎當時知識菁英普遍接受的準則」，<sup>49</sup><span style={cite}>（Stanley Hauerwas, With the Grain of the Universe, 87.）</span>這種主張容易遷就世界潮流；而巴特卻不斷挑戰當時的知識菁英，這使得巴特比較能批判世界潮流。巴特把「教會」視為主要的神學主題，他的系統神學鉅著就被命名為《教會教義學》；尼布爾雖然把教會當作基督教的社會學存在，卻不大從神學角度論及教會，以致「教會」在其神學思想中特別薄弱。<sup>50</sup><span style={cite}>（Stanley Hauerwas, With the Grain of the Universe, 137.）</span>由於尼布爾神學不重視教會，這使得他無法為世界提出另外的選項，只能談談改變自我了解與態度，因此侯活士批評尼布爾的上帝只是被馴化的上帝，充其量只能安撫中產階級焦躁不安的良心。<sup>51</sup><span style={cite}>（Stanley Hauerwas, With the Grain of the Universe, 138.）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  侯活士認為尼布爾倫理學原本就設定是為每一個人所寫的，而不是為基督徒寫的，因此滲入了自然神學的因素，<sup>52</sup><span style={cite}>（Stanley Hauerwas, With the Grain of the Universe, 133.）</span>這與巴特神學截然不同，因巴特是為了認識上帝啟示的人來寫作，自然會強烈排除任何自然神學的痕跡。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  整體來說，尼布爾想要把倫理自然法則關連到聖經的想法，訴諸一切具有普遍理性的人，有如建立自然神學；巴特卻把倫理學建立在聖經的基礎上，單單訴諸具有共同信仰之人。尼布爾的強項是對群體罪惡的敏銳觀察，而這也使他關心公共領域的社會政治議題，並且促成公共神學的興起、與社會接軌；巴特卻關注教會是否有別於世界潮流的價值觀，而能在社會上作信仰群體的見證。巴特重視教會，提醒我們，信仰者與信仰群體不可二分；然而，我們也不當忘記尼布爾所提出的警告：「教會有如國家一般，也有可能成為集體自我主義（collective egotism）的工具。」<sup>53</sup><span style={cite}>（Reinhold Niebuhr, The Nature and Destiny of Man, vol. 1, 217.）</span>
                </p>

                <p className="font-semibold text-slate-800 mb-2">▲保守基督教與世俗主義</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  尼布爾的文章〈一個不可能的倫理理想的關連性〉，<sup>54</sup><span style={cite}>（Reinhold Niebuhr, An Interpretation of Christian Ethics (New York: Seabury, 1979), 62-83.）</span>主張「不可能的倫理理想」就是「愛的理想」，他指出兩種極端：其一，保守基督教否認愛的理想與真實生活的關連性，主張克服這樣的困境必須期待超越道德的力量；其二，現代的世俗主義則藉由歷世歷代人們的常識所形塑的行為規則，證明愛的理想與日常生活的關連。<sup>55</sup><span style={cite}>（Reinhold Niebuhr, An Interpretation of Christian Ethics, 63.）</span>他批判保守基督教的盼望在於來世，而與今世無關；他也批判世俗主義忽略了人的罪性，高估了在今世落實愛的可能。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  尼布爾宣稱自己認同先知傳統，認為應當在人們的真實生活與神聖超越者之間建立有機的關係（organic relation），<sup>56</sup><span style={cite}>（Reinhold Niebuhr, An Interpretation of Christian Ethics, 63.）</span>亦即永不放棄理想而勇於面對現實。這意味著，必須認識清楚有限的人根本無法實行妥的法則，當人們對此一無所知而想要跨越人的極限時，不只帶來悲劇而且帶來災難；人們應當辨識何者是不可能達到的道德要求，而何者是可能達到的道德要求，對於前者心存盼望，而對後者則力圖實踐。<sup>57</sup><span style={cite}>（Reinhold Niebuhr, An Interpretation of Christian Ethics, 82-83.）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  從侯活士的角度來看，尼布爾偏向批判保守基督教而同情世俗主義。<sup>58</sup><span style={cite}>（Stanley Hauerwas, With the Grain of the Universe, 87-140.）</span>當尼布爾批判保守基督教時，他顯然低估藉由信仰實踐愛的理想之可能性，以致忽略基督教信仰落實於群體生活的見證，這卻正是侯活士所主張的觀點；尼布爾對世俗主義的同情，則表現在他只不過期盼世俗主義略為修正對人過度樂觀的看法，這是基督教信仰遷就人文主義的例證。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  基於與人文主義的親和性，尼布爾把因信稱義等同為人人都有同樣價值的人文理念，侯活士認為這已脫離基督十架的脈絡，只是一種人文主義觀點，而且為自由主義的容忍原則背書，把教會當作一種社會群體，而非信仰與倫理的群體，更非追求活出「愛的理想」的見證群體，尼布爾的這些主張使得他的倫理學與神學中見不到教會論。<sup>59</sup><span style={cite}>（Stanley Hauerwas, With the Grain of the Universe, 136-137.）</span>
                </p>
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
                '尼布爾主張個體倫理道德與群體倫理道德分屬不同層次——個體或可期待「愛」的實踐，群體卻只能務實追求「公義」，因群體之惡遠遠超過個人所思所為，「國家把自己打扮成上帝」正是他對群體驕傲最尖銳的批判。',
                '尼布爾對民主政治的名言「人追求公義的能力，使民主政治成為可能；而人對不公義的傾向，使得民主政治成為必須」，一語道破民主制度既需要人性中的善、也需要制衡人性中的惡。',
                '《光明之子與黑暗之子》以「善良卻愚蠢」的光明之子與「邪惡卻聰明」的黑暗之子對照，指出光明之子的最大盲點在於低估自我利益在自己與他人身上的驅動力量，這正是空談理想卻缺乏落實步驟的危險。',
                '大尼布爾與小尼布爾兄弟就「該不該介入」日本侵華一事公開辯論，呈現「務實的理想主義」（大尼布爾）與「純粹的理想主義／和平主義」（小尼布爾）兩種立場的深刻張力，兩者都值得被聽見。',
                '尼布爾主張「愛是公義的完成，也是對公義的否定與提升」——公義與愛之間是辯證關係，公義因愛而不斷被檢視修正，愛也需要藉著公義才能落實在現實世界中。',
                '侯活士批判尼布爾的倫理學因訴諸普世理性而非聖經啟示，導致其神學「見不到教會論」，上帝淪為「馴化的上帝」——這提醒務實倫理學若失去信仰群體的具體見證作為根基，容易滑向純粹的人文主義。',
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
              <h4 className="font-semibold text-gray-800 mb-2">尼布爾「法、理、情」的優先順序，對華人教會處理紛爭有何提醒？</h4>
              <p className="text-gray-700 leading-relaxed">
                本章指出東方文化常見「情」凌駕於「理」「法」之上，導致公領域的是非被人情世故淹沒。尼布爾的架構主張公領域應優先論及法理、私領域才言及情理，這對華人教會處理財務糾紛、同工衝突等公共事務極具參考價值——許多教會習慣用「愛」與「和諧」壓下對公義與程序正義的追求，結果反而讓真正的問題被掩蓋，累積成更大的傷害。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">大、小尼布爾的辯論，對今日教會面對國際政治議題（戰爭、人道危機）的立場選擇有何啟發？</h4>
              <p className="text-gray-700 leading-relaxed">
                大尼布爾主張介入制衡侵略，小尼布爾主張以群體見證的和平生活方式回應。兩種立場都源自認真的信仰反思，而非簡單的鴿派鷹派之分。這提醒今日教會面對戰爭、難民、人道危機等議題時，「該不該支持武力介入」並非只有一個「屬靈正確答案」，重要的是誠實面對務實考量與理想堅持之間的真實張力，而非急於用單一立場定義誰更屬靈。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">侯活士對尼布爾「見不到教會論」的批判，對今日跨宗派合一運動有何反思？</h4>
              <p className="text-gray-700 leading-relaxed">
                尼布爾傾向以普世理性語言論述倫理道德，使他的思想容易與非信仰群體對話，卻也讓教會的獨特身分變得模糊。這對今日教會參與跨宗教、跨信仰的公共對話（如環保運動、人權倡議）是重要提醒：為了尋求最大公約數而使用「人人都能懂」的世俗化語言固然有助溝通，但若因此完全抽離了教會作為信仰見證群體的獨特身分，恐怕正是侯活士所警示的危險。
              </p>
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
              '尼布爾說「人是一種奇特的受造者……追求自我利益時，不得不裝作是在服務別人」。回想你曾參與的團體決策，是否也曾見過自利被包裝成「為大家好」的例子？',
              '你認為自己在做道德判斷時，比較接近「光明之子」（善良卻可能天真）還是「黑暗之子」（務實卻可能冷酷）？這個傾向帶來什麼樣的優點與盲點？',
              '面對大、小尼布爾的辯論，你認為在面對重大不義（如戰爭、迫害）時，「積極介入制衡」與「活出和平見證、堅持不作為」，哪一種回應更貼近你的信仰理解？',
              '尼布爾主張公義需要不斷被愛檢視，愛也需要藉公義落實。回想你生活中一個「用愛包裝自私」或「用公義掩蓋冷漠」的經驗，兩者你更容易陷入哪一種？',
              '本章提到華人文化常見「空談仁義道德理想，卻無法落實於生活」的弊病，你觀察自己的信仰群體，是否也存在類似「高談理想卻缺乏務實步驟」的現象？',
              '侯活士批評尼布爾的上帝「只是被馴化的上帝，充其量只能安撫中產階級焦躁不安的良心」。你如何看待這個批判？你觀察自己的信仰，是否也曾把上帝馴化成安撫良心的工具？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 讀《道德的人與不道德的社會》或《光明之子與黑暗之子》節選</h4>
              <p className="text-gray-700 mb-2">找時間讀尼布爾這兩本經典的中譯節選，特別留意他分析群體性罪惡的段落，對照今日社會的實際案例做筆記。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 練習「法、理、情」優先順序</h4>
              <p className="text-gray-700 mb-2">
                下次遇到公領域的紛爭（教會財務、公共事務）時，練習先問「合乎規範與程序嗎」，其次才問「合乎人情嗎」，記錄這個順序調整帶來的差異。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🪞 檢視自己的「光明之子」盲點</h4>
              <p className="text-gray-700 mb-2">
                誠實列出一件你曾經因為「相信人性本善」而吃虧或誤判的經驗，思考如何在保持理想的同時，也培養對人性陰暗面的合理警覺。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「上帝啊，求祢幫助我既不天真樂觀，也不憤世嫉俗，使我能務實地面對人性的陰暗，卻不放棄祢愛的理想。求祢賜給我智慧，在群體中追求公義，在關係中活出愛，也求祢光照我心中偽裝成服務他人的自我利益。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
