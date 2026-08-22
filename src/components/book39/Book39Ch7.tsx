import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Link2, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;
const quote = "border-l-4 border-emerald-300 bg-emerald-50 pl-4 py-3 mb-3";
const quoteText = "text-emerald-800 leading-relaxed italic";

export default function Book39Ch7() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-slate-800 to-blue-900 bg-clip-text text-transparent">第七章</h1>
        <h2 className="text-xl font-semibold text-gray-700">與基督連結——加爾文倫理學</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          「我已經與基督同釘十字架，現在活著的不再是我，乃是基督在我裡面活著；並且我如今在肉身活著，是因信上帝的兒子而活；他是愛我，為我捨己。」（加2:20）
        </p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-slate-50 to-blue-50 hover:from-slate-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Link2 className="w-5 h-5 text-slate-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <p className="text-gray-700 leading-relaxed">
              這節經文清楚描述基督徒與基督的連結程度——「不再是我，乃是基督」、「我因信上帝的兒子而活」，如此的連結是生命的連結，也是生活的連結，因此加爾文倫理學最大特色就是強調藉由信與基督連結，這連結使基督的「義」成為我們的「義」，基督的「聖」成為我們的「聖」。
            </p>
            <p className="text-gray-700 leading-relaxed">
              加爾文倫理學接續路德的倫理原則——從信上帝、愛人的基礎出發，不過他繼續教導因信稱義的基督徒生活，在基督的主權下應當如何與基督連結而在世上生活。
            </p>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">一、路德的結束——加爾文的開始</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                回顧宗教改革神學，路德主張信上帝是果樹，愛人是果子，兩者有先後關係——先信上帝而後結出愛人的果子，可見他非常強調信上帝是作基督徒的入口，至於愛人部分的細節卻大致略過，以致造成一個印象，只談如何成為果樹而不談如何結出果子，如此還是留下一段空白，於是加爾文全力填補這片空白。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                由於路德面對許多主張「愛形成信」的經院神學家，如果他也論及結好果子——愛人的好行為時，似乎他就與其論戰對手一樣了，基於這樣的歷史背景，路德所做的神學有其特別的針對性，而非完整一致的神學，巴特就稱路德神學為「不規則型神學」。<sup>1</sup><span style={cite}>（CD, 1/1, 277-278.）</span>路德的神學思想有時前後並不一致，他從未寫過一本比較全面而完整的著作，而且大部分寫作都是處於在論戰中或在不同時期的註釋聖經中形成，以致其思想出自不同的時空處境背景。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                有人為路德思想的不一致辯解說：「其思想是『存在的』，是由實際生活出發，不是體系，因此不能用這種方法來研究。」<sup>2</sup><span style={cite}>（喬治．霍萊（George W. Forell），《信與愛：路德的社會倫理觀》，祖運輝譯〔香港：道聲，1984〕，21。）</span>然而，路德才智過人，寫作對他而言並不困難，亦即把存在的神學思想完整地寫下來也沒有問題，關鍵是在他忙於宗教改革的一生中沒有機會完成系統性著作。相形之下，加爾文是宗教改革的第二代，已經逐漸脫離第一代所面對的激烈論戰，於是他的《基督教要義》寫了二十三年，前後修訂四次，其神學思想比較具有一致性與整體性。
              </p>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 天上／地上</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  如前所述，路德倫理學為世俗留下極大的空間，以致可能走向屬靈與屬世二分；加爾文並不接受屬靈與屬世二分的架構，而期待把信仰與道德做更好的整合。以婚姻為例，中世紀天主教會把婚姻當作聖禮之一；路德反對把婚姻當作聖禮而大膽地把婚姻拉到民法層次，認為只需符合地上法律；加爾文則對前兩者都做了修正，他以「約」（covenant）詮釋婚姻，「約」是上帝對人不帶條件、永不改變的承諾應許，婚姻一方面具有從上帝而來神聖不變的理想特質，另一方面則是丈夫與妻子落實這理想的努力，<sup>3</sup><span style={cite}>（John Witte, Jr., From Sacrament to Contract, Second Edition: Marriage, Religion, and Law in the Western Tradition (Atlanta: Westminster John Knox, 2012). 中譯：約翰．維特（John Witte, Jr.），《從聖禮到契約：西方傳統中宗教、婚姻和法律》〔北京：中國法制，2014〕。）</span>可見他所追求的是神聖落實在人間的整合。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  路德把地上生活歸給自然法則，認為人性部分只需按照天然秩序發展，而加爾文則一向持守在地如在天的理想，追求在地上落實天上的理想。就婚姻而言，天主教會過於強調婚姻之天上的一面，路德過於強調婚姻之地上的一面，加爾文則追求天地相連的整合，亦即在地如在天。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">2. 先後／同時</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  路德主張如同先成為好果樹而後才能結出好果子，人也要先進入信仰而後才能行出道德行為，這造成有「先後」時間差的印象；加爾文則不認為這裡有先後之別，他認為因信稱義與生命改變是同時發生，只是因信靠上帝領受被稱義的恩典發生在天上，而藉由基督恩典被稱義者的生命改變則發生在地上，根基在天上的好樹「同時」在地上結好果子，這種觀點使他可以詳細談論基督徒生活的經歷，而沒有淪為「因行為稱義」的顧忌。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">3. 上帝主權的整合</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  在《基督教要義》裡，基於先論及看得見的，而後才論及看不見的之教導原則，加爾文先論及信心所結的果子——基督徒生活，而後才論及作為果子源頭的果樹——因信稱義。亦即在《基督教要義》卷三6至10章論及「基督徒生活」，這部分後來就以《基督徒生活黃金手冊》為名出版單行本，而後11至16章才論及「因信稱義」。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  加爾文說明，他先論及基督徒生活的原因，「是因為我要讀者先明白，神出於他的憐憫所賞賜使我們白白稱義的信心必定伴隨善行」。<sup>4</sup><span style={cite}>（《要義》，3.11.1。）</span>先介紹看得見的好行為，提醒憑那看不見的信心領受被上帝稱義的基督徒，應當結出看得見的信心果子來，這並沒有把因信稱義視為次要之意，他說：「我們討論因信稱義時應當記住，這教義是基督教信仰的主要樞紐，以致我們專心致志地關注它。」<sup>5</sup><span style={cite}>（Institutes, 3.11.1: "And we must so discuss them as to bear in mind that this is the main hinge on which religion turns, so that we devote the greater attention and care to it."）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  既然天上與地上同時發生，天上指向上帝居住之處，地上則是領受上帝工作的人被改變之處，那麼加爾文論及與人的改變密切相關的倫理學就沒有障礙，因為既然一切都是出於上帝發動的恩典，承受恩典的人如何改變也可說明清楚。凡經歷因信稱義的人，如加拉太書二章20節所說，「現在活著的不再是我，乃是基督在我裡面活著」，那是一種不再是我的狀態，也就是基督在我裡面的狀態，加爾文常用「與基督連結」形容這新身分，他說：「藉由分享基督，我們原則上領受了雙重恩典」，<sup>6</sup><span style={cite}>（Institutes, 3.11.1: "By partaking of him, we principally receive a double grace."）</span>這雙重恩典「即我們藉基督毫無玷汙的義與神和好之後，我們在天上所有的不是法官，而是慈悲的天父；其次，靠基督的靈使我們成聖，就能培養毫無指責和純潔的生命」。<sup>7</sup><span style={cite}>（《要義》，3.11.1。）</span>基督的雙重恩典，一方面給人赦罪稱義，另一方面則使人重生聖化（成聖），<sup>8</sup><span style={cite}>（一般常見sanctification被譯成「成聖」，由於這詞容易被理解為人主動，筆者則採用「聖化」，突顯上帝主動而人被動。）</span>兩者為一體的兩面。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  加爾文把赦罪、稱義、復和放在天上，乃唯有上帝才能成就的一面，而把悔改、重生、聖化放在地上，則為人親身經歷的另一面，也是被稱義者在世上活出來的見證，<sup>9</sup><span style={cite}>（加爾文所說的「悔改」是時時刻刻轉身歸向上帝，而非一時一地的宗教體驗。）</span>兩者同時發生。人的得救是來自上帝，因此赦罪、稱義、復和都發生在天上；相對應的人之改變，如悔改、重生、聖化則發生在地上。動力來自天上，效果卻及於地上，縱使兩者不可分，卻有所分別。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  加爾文非常重視上帝的主權，天與地都在上帝的主權之下，既然是單一主權，天地就不應二分，乃是在地如在天，信靠上帝得蒙赦罪、稱義，且同時經歷重生、聖化，如此一來，加爾文把屬靈與屬世結合在一起。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  加爾文高舉上帝的主權，主張信徒屬靈、屬世生活都在上帝的掌管之下，上帝在天上成就赦罪、稱義、復和，同時人在地上見證悔改、重生、聖化。對加爾文而言，路德的好樹結好果子所隱含的「先後」被修正為「同時」——天上的好樹與地上的好果子同時發生。在天上發生的是上帝稱人為義、赦免人的罪、與人和好；同時在地上發生的則是人不斷經歷悔改、重生、聖化。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">4. 分合之間</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  加爾文的整合神學概念的方式與迦克敦基督論有關，就是基督的神性與人性不分不合、亦分亦合，既不能完全拆開，也不能完全合在一起，一定要保持一個若即若離的適度區隔，但不能離得太遠，又不能混合在一起。以此類推，稱義與聖化的關係也應不分不合、亦分亦合，分離清楚或混合在一起都不恰當，而是分中有合、合中有分。不分不合、亦分亦合——有如基督的神人二性，得救過程中，在天上發生的與地上發生的也是如此，藉著與基督連結而維持分合之平衡。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  路德強調信上帝是愛人的動力來源，加爾文則認為兩者同時發生。由於路德比較強調信上帝與愛人關係的「不可逆轉」，這使得他對信上帝與愛人關係的「不能分開」有些疑懼，以致拒談人的改變，只說好樹結好果子，卻不談好果子究竟如何從好樹生出、應當如何長成。後來路德沒有做的部分，加爾文在《基督教要義》先論重生而詳細說明人的改變，接著才論稱義，其實他與路德同樣主張愛人並非得救的原因，然而他在教導上先談看得見的人的改變，亦即信心的果子——基督徒生活，而後才論及人的改變的動力來源——稱義。這種寫作方式顯然有補足路德的用意，原因「是因為我要讀者先明白，神出於他的憐憫所賞賜使我們白白稱義的信心必定伴隨善行」。<sup>10</sup><span style={cite}>（《要義》，3.11.1。）</span>
                </p>
              </div>

              <div>
                <span className="font-semibold text-slate-700">5. 愛與信</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  路德主張若信上帝則愛人，加爾文則進一步論述這種從信發出的愛，他說：「進而言之，好的管家是符合愛的原則的管家。」<sup>11</sup><span style={cite}>（Institutes, 3.7.5.）</span>加爾文解釋何為「愛的原則」：「我們這樣做不但使我們對別人熱心的幫助與自己的利益聯合，也是更看重別人的利益超過自己的利益。」<sup>12</sup><span style={cite}>（《要義》，3.7.5。）</span>從信發出的愛，並非互相得利的愛，而是不計較自己利益的愛，亦即「不求自己的益處」的愛（林前13:5）。「每一個人都應當承認，連他最豐盛之處也不過還虧欠鄰舍，他應當在善待別人時，隨時預備奉獻自己所有的，唯一限制他的唯有愛的原則。」<sup>13</sup><span style={cite}>（Institutes, 3.7.7: "Rather, each man will so consider with himself that in all his greatness he is a debtor to his neighbors, and that he ought in exercising kindness toward them to set no other limit than the end of his resources; these, as widely as they are extended, ought to have their limits set according to the rule of love."）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  然而，在裡面的愛心與外在的行為之間，加爾文寧可擇取發自內心之愛的行為：「唯有出於真誠的愛心去履行愛的責任，才是盡愛的本分。因或許有人在外表的確在盡他一切愛人的責任，內心卻離真正愛人如己的距離仍舊遙遠。」<sup>14</sup><span style={cite}>（《要義》，3.7.7。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  另外，在本章稍後論及自由可知，加爾文還主張「自由必須伏在愛心之下」，亦即為了愛的緣故必須節制自己的自由，如同「愛也應當伏在純潔的信心之下」，信是產生愛的源頭，愛則必須遵從信，因若無信就沒有愛可言。<sup>15</sup><span style={cite}>（《要義》，3.19.13。）</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">二、擁抱創造、恩典、上帝形像</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                當代美國作家瑪麗蓮（Marilynne Robinson, 1943-）對加爾文神學的詮釋深受矚目，她以文學的形式呈現加爾文神學的精華。她的小說《遺愛基列》，藉由一位老牧師的故事，呈現加爾文對上帝創造萬物極其美好的信念。書中有許多人與自然在一起的精采美妙畫面，如老牧師見到幼子與師母在院子裡對貓咪吹泡泡，貓咪看到滿天飛舞的泡泡，跳向空中：
              </p>
              <div className={quote}>
                <p className={quoteText}>
                  有些泡泡飄過樹梢，越過樹木，但你們母子只專注在貓咪，沒看到你們地上的努力在天上造成的波動，實在太美妙了！……啊！不虛此生，這個世界！<sup>16</sup><span style={cite}>（Marilynne Robinson, Gilead (N. Y.: Picador, 2005), 8.）</span>
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                故事中七十六歲的老牧師給七歲的兒子留下生平自敘，覺得自己來日不多了，只要一想到家裡的嫩妻幼子，難免百感雜陳，儘管與幼子相處的時間有限，老牧師仍心存感恩，他寫給兒子說：「這些都無所謂，只因你活在世上，我就鍾愛著你。對目前的我而言，活著似乎是最不可思議之事，我即將邁向永生，可能就在剎那之間、眨眼之際。」<sup>17</sup><span style={cite}>（瑪莉蓮．羅賓遜，施清真譯〔新北市：漫步文化，2014〕，《基列系列I：遺愛基列》，73。）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                縱使被造的一切都屬有限，老牧師畢竟還是相信上帝創造的美好，說：
              </p>
              <div className={quote}>
                <p className={quoteText}>
                  我知道相較於永生，世間一切不過是幻象，但世間卻因此變得更可愛。世間存有凡人之美，我真不敢相信人們踏入永生之後，竟會忘了肉體的奇妙；肉體雖非永恆，但延續生命、年華老去，卻是最奇妙、最有意義的過程。<sup>18</sup><span style={cite}>（瑪莉蓮．羅賓遜，《基列系列I：遺愛基列》，77-78。）</span>
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                上帝創造的美妙，不但使有限的肉體活在上帝的祝福裡，而且活在上帝赦免的恩典裡：
              </p>
              <div className={quote}>
                <p className={quoteText}>
                  活著是最根本的，而且是神聖的。如果上帝認為我們的罪過算不了什麼，那就真的不算什麼。縱使那些罪過有什麼份量，當與活著的美好無比相形之下，也就微不足道了。當然那些罪過都會被上帝擦掉，就好像我從你臉上抹掉灰塵或淚珠。畢竟，上帝何必在意那些原本非祂所造的汙點呢？<sup>19</sup><span style={cite}>（Marilynne Robinson, Gilead, 224-225: "Existence is the essential thing and the holy thing. If the Lord chooses to make nothing of our transgressions, then they are nothing. Or whatever reality they have is trivial and conditional beside the exquisite primary fact of existence. Of course the Lord would wipe them away, just as I wipe dirt from your face, or tears. After all, why should the Lord bother much over these smirches that are no part of His Creation?"）</span>
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                罪過分量之輕與活著美好之重，兩者完全不成比例，創造與寬恕都來自上帝，上帝創造的美妙不可能被人為罪過玷汙，上帝的寬恕遮掩罪過如同船過水無痕，上帝既然不在意罪過，人又何必在意呢？神聖恩典遮蔽一切罪過瑕疵！
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                既然上帝在祂美好創造中施行恩典，祂也喜悅人們彼此施行恩典。瑪麗蓮．羅賓遜提醒，縱使被原諒的一方領受了恩典，心中卻不見得有恩典。「所以光是被原諒還不夠，我們還必須原諒、釋放他人，這樣我們才能完全感受到上帝的旨意通過我們而展現，而這正是我們使自己得享的最偉大的恩典。」<sup>20</sup><span style={cite}>（瑪莉蓮．羅賓遜，《基列系列I：遺愛基列》，187。）</span>她同時引用上述加爾文的話：「每一個人都應當承認，連他最豐盛之處也不過還虧欠鄰舍。」<sup>21</sup><span style={cite}>（Institutes, 3.7.7.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                《家園》裡有一個動人的場景：老牧師回想起二十幾年前的往事，他出於心結並未給浪子傑克的嬰孩施洗，他面對傑克誠懇地回憶每一個細節，向傑克真心認錯，他說：「身為侍奉主的牧師，我就在那裡，把那個嬰孩抱在懷裡不知道多少次。為什麼我沒有去做那件顯而易見的事！只要幾滴水就夠了！而屋子旁邊就有一個裝雨水的桶子——誰會阻止我呢——這件事我想過多次。」<sup>22</sup><span style={cite}>（瑪莉蓮．羅賓遜，《家園》，姬健梅譯〔新北市：漫步文化，2014〕，181。）</span>老牧師對晚輩的認錯悔改，反映了「連他最豐盛之處也不過還虧欠鄰舍」，我們仍須彼此原諒，才能更多感受到上帝的恩典。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「世人都犯了罪，虧缺了上帝的榮耀」（羅3:23），而經歷上帝恩典者更是虧欠上帝的愛，這使我們有足夠的動力去愛人。瑪麗蓮的小說寫到，當人克服陰暗展現人性光輝時，常常呈現神聖感，比如在心懷敵意的老牧師克服心魔為浪子傑克祝福時——光明勝過黑暗，瞬間有如進入神聖氛圍一般，不論傑克能夠領會多少，老牧師說：「唉，不管如何，我告訴他，為他祈福是我的榮幸。這話百分之百屬實，我這些年來研讀神學、為人祝禱，其實期待的就是這一刻。」<sup>23</sup><span style={cite}>（Marilynne Robinson, Gilead, 285. 參見：瑪莉蓮．羅賓遜，《基列系列I：遺愛基列》，274。）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                瑪麗蓮與一般人文主義者不同，她並非把人本身視為尊貴，而是從上帝形像的角度看到，上帝使人得以尊貴。瑪麗蓮引述《基督教要義》的觀點來表達她的信念：
              </p>
              <div className={quote}>
                <p className={quoteText}>
                  因此，不管你遇到什麼樣的需要幫助的人，你都沒有任何的理由拒絕幫助他。你或許會說：「他是陌生人」，但神已在他身上刻上你應當很熟悉的記號，因同樣的緣故，神也禁止你恨惡自己的骨肉（賽58:7，Vg.）。你不能說：「他是可惡、無用的人。」因為神喜悅這人帶著他光榮的形像。你若說你沒有因他曾經對你怎樣而欠他什麼，但神卻將他擺在你眼前，好讓你在他身上因神賜給你的一切福分還清你所欠他的債。你若說他本身不值得你任何幫助，然而你當留意在他身上之神的形像，卻值得你付出你自己和一切的財產。他若不但不值得你任何的幫助，甚至以不公義的行為和咒詛激怒你，這也不是你拒絕用行為愛他的正當理由（太6:14，18:35；路17:3）。你或許會說：「他所應得的與愛截然不同。」然而，神所應得的是什麼呢？神吩咐你原諒這人對你一切的冒犯，也要你視這些冒犯的代價為神自己已經付出的。顯然，我們若想成就這困難、甚至與我們的本性相反的事，即愛那些恨惡我們的人，以善報惡、以祝福報辱罵（太5:44），只有一個方法。這方法就是要留意神不要我們考慮人對我們的惡意，而是要在他們身上看到神的形像，這樣的考慮將使我們不再記念他們的過犯，而且這形像的光榮和威嚴將會吸引我們愛並擁抱他們。<sup>24</sup><span style={cite}>（Marilynne Robinson, The Death of Adam (N. Y.: Picador, 1998), 130-131.）</span>
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                這段文字中「上帝形像」出現四次、暗示一次，看見人身上的上帝形像，確實可幫助我們克服無法愛人的障礙，縱使人們並不可愛，若要愛這些不可愛的人則需額外的力量，究竟如何領受這樣的力量呢？
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                其一，「你或許會說：『他所應得的與愛截然不同。』然而，神所應得的是什麼呢？神吩咐你原諒這人對你一切的冒犯，也要你視這些冒犯的代價為神自己已經付出的」。上帝赦免我們的冒犯，這已經包括別人對我的一切冒犯。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                其二，若要做到愛仇敵、為逼迫我們的禱告，只有一個方法：「這方法就是要留意神不要我們考慮人對我們的惡意，而是要在他們身上看到神的形像，這樣的考慮將使我們不再記念他們的過犯，而且這形像的光榮和威嚴將會吸引我們愛並擁抱他們。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「然而，若以人有多少功德來評判，大多數人都不值得人向他們行善。聖經對此的教導給我們很大的幫助。它教導我們不要考慮人本身所應得的，乃要思考神在眾人身上的形像，因我們欠神一切的尊榮和愛。」<sup>25</sup><span style={cite}>（《要義》，3.7.6。）</span>當我們在人身上辨識出上帝的形像，儘管面對討厭的人、可惡的人，畢竟那是上帝的形像，基於尊榮上帝和愛上帝，必能補足我們的愛心。
              </p>
              <p className="text-gray-700 leading-relaxed">
                瑪麗蓮認同加爾文，重點不在於人是否值得我們幫助，而在於人身上的上帝形像提醒我們，要愛上帝連同祂的形像——人。若要能愛不可愛的人，就要忘記自己，注目在上帝形像。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">三、榮耀上帝的倫理道德</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                加爾文對倫理道德的看法離不開「榮耀上帝」，由於明確主張十誡第一法版（敬神）是第二法版（愛人）的基礎，人間的倫理道德全都建立在上帝與人的關係，其目的就是追求榮耀上帝。榮耀上帝的第一步是拒絕自己（又稱為「捨棄自己」，或「捨己」），當人不再注目自己時，才有可能專注地榮耀上帝。
              </p>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 拒絕自己</span>
                <div className={quote}>
                  <p className={quoteText}>
                    那麼，作基督徒的第一個步驟就是人要離棄自己，為了使自己能用一切的才能服事神。我所說的服事不單是人對神真道的順服，也是人心靈的轉向，在否定肉體的私慾之後，完全聽從神的靈。……然而，基督教的哲學卻吩咐人的理智降服於聖靈的引領，使人不再是自己活，乃是基督在他裡面活並統治他（加2:20）。<sup>26</sup><span style={cite}>（《要義》，3.7.6。）</span>
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  加爾文在《基督教要義》論及基督徒生活的核心是「拒絕自己」，作基督徒的第一個步驟就是要離棄自我中心，才能全心全意服事上帝。榮耀上帝的服事需要全然的改變，不只是聽道而已，乃是實質上改變自己，拒絕肉體私欲，完全聽從上帝的靈。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  一般哲學鼓勵人運用理性認識自己，藉此讓人成為自己的主人，加爾文則宣稱基督教哲學截然不同，乃是要人的理性順服聖靈的引導，經歷不再為自己而活，乃為基督而活。若要經歷不再是我，亦即體驗基督在我裡面活著，首先要拒絕自己，不再以自己為中心。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  加爾文與路德在拒絕自己這一點並無不同，路德極力反對愛自己，以致他選擇「愛人無己」，而與其修會師祖奧古斯丁的「愛人如己」分道揚鑣。加爾文則直接把拒絕自己列為作基督徒的首要，雖然他非常愛好奧古斯丁的思想，在《基督教要義》裡引述最多的就是奧古斯丁，但他仍在必要時選擇與奧古斯丁不同的觀點。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">2. 積極榮耀上帝</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  作基督徒的第二個步驟，就是凡事積極榮耀上帝。「第二個步驟就是我們不再尋求自己的事，而是尋求神的旨意和一切將榮耀歸給他的事。這也能證明人有極大的長進，即當人幾乎忘記自己，並否定自己的自我關心，而儘量忠心熱烈地服事神和遵守他的誡命。」<sup>27</sup><span style={cite}>（《要義》，3.7.2。）</span>其實追求榮耀上帝，最能夠讓我們忘記自己，並非努力去忘記，而是一心轉向追求榮耀上帝，忠心服事上帝並遵守祂的誡命，這就把自己放在背後，不再把自己當作中心。加爾文始終強調追求榮耀上帝與高舉上帝主權，他一生只為上帝的榮耀而活，呈現了徹底拒絕自己的見證。
                </p>
              </div>

              <div>
                <span className="font-semibold text-slate-700">3. 雙重應用</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  「以上的教導告訴我們，自我否定一方面在乎我們與人的關係，另一方面（也是主要的方面）在乎的是我們與神的關係。」<sup>28</sup><span style={cite}>（《要義》，3.7.2。）</span>「拒絕自己」不只應用在人與上帝的關係，也應用在人與人的關係。「當我們想要幫助鄰舍時，盡這本分是很艱難的！除非你能忘記自己，並在某種程度上離棄自己，否則你將一無所得。」<sup>29</sup><span style={cite}>（《要義》，3.7.4。）</span>一個人若不能在人與人的關係中拒絕自己，往往因著自我中心、自私自利而無法真心幫助別人。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  加爾文這兩個論點令人印象深刻，其一，當我們想要幫助鄰舍時，由於大部分的人都不可愛，除非能夠做到拒絕自己，而不順從天然的好惡意願，才有可能克服人的不可愛。其二，愛人這件事往往是基督徒真實生命的考驗，除非我們用特殊角度去看人有上帝形像，經歷到彷彿面對上帝，才能發出愛心的行動。若非如此，縱使勉強行善，那種愛必定無法持久。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">四、重視律法</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                加爾文主張只有一個約，新約與舊約原本是同一個約，因此他在律法中也看到福音，甚至肯定律法對基督徒的意義，於是主張律法的正面功能，不若路德認為律法功能主要是負面的——使人知罪而投向福音。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                路德基本上把律法當作藉由定罪驅使人轉向福音的途徑，不過他也主張律法蘊含上帝給世人生活依據的自然法、自然律；加爾文卻因高舉上帝主權，同樣肯定來自上帝的福音和律法。加爾文對律法的正面觀點導致改革宗神學一向重視舊約，講道經文常採用一處舊約經文與一處新約經文並列的方式。
              </p>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 律法的三種功用</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  律法的第一種功用是使人知罪，「既然它表明神的義，即神唯獨悅納的義，它就警告、教導、使人知罪，並定每一個人的罪」。<sup>30</sup><span style={cite}>（《要義》，2.7.6。）</span>藉由律法我們得以認識上帝的義，亦即上帝所喜悅的神人關係、人與人的關係。律法呈現上帝的義，帶來警告、教導、使人知罪，每一個人在律法下都不完全而被定罪，有如一面鏡子，照出我們的一切瑕疵，在這一點上加爾文與路德相同。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  律法的第二種功用是使人知所警惕，「至少藉對受刑罰的恐懼而約束某些不在乎正直和公義的人」。<sup>31</sup><span style={cite}>（《要義》，2.7.10。）</span>上帝的法律宣告了祂的公義，這公義將伴隨著審判，懲罰一切的不公義，約束那些心中不在乎正直和公義的人。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「律法的第三種功用（也是主要的功用，它與律法主要的目的有更密切的關連）是針對那些聖靈已經在他們心裡居住和作王的信徒。」<sup>32</sup><span style={cite}>（《要義》，2.7.12。）</span>律法在兩方面使基督徒受益：其一，「律法是神教導他們最恰當的工具，使他們在日常生活中更明白並因而更確定他們所渴慕的神的旨意。」<sup>33</sup><span style={cite}>（《要義》，2.7.12。）</span>其二，律法對基督徒發出勸戒：「律法於肉體就如鞭子於懶惰和頑固的驢，鞭策驢做工，就連未曾脫去肉體重擔的屬靈的人，仍需律法不斷地鞭策以便他不至裹足不前。」<sup>34</sup><span style={cite}>（《要義》，2.7.12。）</span>
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">2. 正面看待律法</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  保羅把律法與福音對照，可能造成一個印象——律法是負面的，儘管他是把律法主義與福音對比。加爾文極力糾正任何可能對律法的誤解，強調律法出於上帝的旨意，從頭到尾都是正面的。他主張，律法教導信徒行善，雖然善行與稱義無關，然而「基督徒一生都應當操練行善，因神呼召我們成為聖潔」。<sup>35</sup><span style={cite}>（《要義》，2.7.12。）</span>兩個層級需要區分清楚，其一是因信稱義使信徒面對上帝的審判卻得以存活；其二是因信稱義的信徒應當操練行善，亦即追求聖化，「律法的功用是教導信徒盡自己的本分和激勵他們熱心追求聖潔」。<sup>36</sup><span style={cite}>（《要義》，3.19.2。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  改革宗重要的信仰告白《海德堡教理問答》（1563）包含三大部分，分別介紹三個主題：罪惡（律法）、恩典（福音）、感恩（聖化）<sup>37</sup><span style={cite}>（《要義》，3.19.2。）</span>。令人驚訝地，第三部分的開頭如下，之後緊接著就詳細說明十誡，很明顯把律法當作基督徒的生活規範指引：
                </p>
                <div className={quote}>
                  <p className={quoteText}>
                    八十六問：我們既是靠基督因恩典，而非自己的功德，從禍患中得救贖，那麼為何我們還須行善呢？<br />
                    回答：因為基督既用祂的血救贖了我們，便也照祂自己的形像用聖靈更新我們，好使我們對祂可用整個生命去表示感謝上帝所賜的福，而祂自己也可因我們得榮耀；更且我們自己也因有了信心的果子而確知自己有信心，並且我們可用好行為引領鄰舍歸向基督。<sup>38</sup><span style={cite}>（Guilt (Law), Grace (Gospel), and Gratitude (Sanctification).）</span>
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  此處說明行善的目的是表示感謝上帝並使祂得榮耀，以及確認信心而引領鄰舍歸主，遵行律法的代表——十誡。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">五、基督徒的自由</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                談到基督教倫理學，不可略過「自由」，加爾文對自由十分關切，從第一版《基督教要義》起就有討論這個主題。
              </p>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 自由三部曲</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  首先，信徒的良心在尋求稱義的確據時，應當在律法之外尋求，完全棄絕律法上的義。
                </p>
                <div className={quote}>
                  <p className={quoteText}>
                    首先，信徒的良心在尋求稱義的確據時，應當在律法之外尋求，完全棄絕律法上的義。就如我們以上證明過，在律法下無人能稱義，或者我們對稱義完全絕望，或者我們應當從律法的轄制下得釋放，並接受稱義與善行無關。……因為稱義的問題不是我們如何成為義人，而是既然我們是不義和不配的，如何才能被算為義。人的良心若想在稱義上獲得確據，就應當完全棄絕律法。<sup>39</sup><span style={cite}>（尼科斯（James H. Nichols），湯新編譯，《歷代基督教信條》〔香港：基文，1970〕，199。）</span>
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  因信稱義的確據在於上帝的恩典，不在於人的善行符合律法的要求，因而可從律法的挾制下得到釋放，加爾文形容這是一種基督徒的自由。嚴格來說，應當是從律法主義的挾制之下得到釋放，不用藉著追求善行或自己的表現來符合律法條文規定的標準。當棄絕靠自己成為義人的念頭時，接受自己的不義、不配，也就能自由地承受上帝的恩典，不再被律法控訴，如此一來，因信稱義的信仰途徑就是通往自由之路。這種自由對應於路德所說的「基督徒的自由」。
                </p>
                <div className={quote}>
                  <p className={quoteText}>
                    第二部分是根據第一部分，就是人的良心遵守律法，並不是因受律法的約束，而是因從律法的軛下得釋放，就甘心樂意地順服神的旨意。既然一切仍在律法轄制下的人都生活在恐懼中，所以，除非神釋放他們，使他們自由，否則他們就不會樂意順服神。<sup>40</sup><span style={cite}>（《要義》，3.19.2。）</span>
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  第二部分指向因信稱義的基督徒所得到的自由——甘心樂意地遵守律法，絕非因受律法約束而不得不如此。既然已從律法的軛下得釋放，就能自由自在地順服上帝旨意。這個自由的內涵是甘心樂意地順服上帝旨意，看似簡單，卻大有學問。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  人如果從律法主義的束縛下得到釋放，進一步經歷甘心樂意順服上帝的旨意，這裡面有強烈的對比：「從律法的軛下得釋放，心甘情願地被上帝旨意捆綁」，從被律法束縛的「不得不」到進入「自動自發」被上帝旨意捆綁的「自由」。加爾文的論述主要根據聖經，原本人處於犯罪墮落中，上帝與人是主僕關係，現在則是父親和兒女的關係，兒女甘心樂意地做父親喜悅的事，僕人卻是被要求、受職責限制去做主人喜悅的事，前者是出於自由，後者則非自由。
                </p>
                <div className={quote}>
                  <p className={quoteText}>
                    基督徒自由的第三部分是指：至於外在「中性之物（無關緊要）」，在神面前我們沒有任何信仰上的限制攔阻我們隨意使用它們。而且我們確信這自由對我們而言是必需的，因若不相信這一點，自己的良心就得不到安息，並且迷信會多到無可限量的地步。<sup>41</sup><span style={cite}>（《要義》，3.19.4。）</span>
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  加爾文主張，活在上帝恩典中的基督徒，可自由地面對與救恩無關的事——「無關緊要」（<em>adiaphora</em>）之事，<sup>42</sup><span style={cite}>（《要義》，3.19.7。）</span>在上帝面前良心平安，而且沒有任何理由攔阻這種自由。加爾文主要指的是當時常見的迷信禁忌，若轉換至今日的處境，就好比買到日期是黑色星期五的機票，是否能安心去搭機？住在一座大樓的四（諧音「死」）樓，會不會使人不安？若能確認此事與得救無關，即應勇敢地做信仰宣告：「無關緊要」！
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  中世紀是一個到處有迷信禁忌的世代，只要開始相信一個迷信，就會推演出許多禁忌，而且往往愈演愈烈、愈來愈多，只要生活在世上就處處被束縛。比如若是相信相命的事，往往不會只去一次，總是接連好幾次，每一次都帶回來更強烈的動機繼續再去。身處於迷信盛行的環境中，基督徒應當勇於對迷信禁忌宣告「無關緊要」。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  加爾文對第三部分的自由運用很廣，「無關緊要」的原則帶來包容性、開放性，打破許多迷信禁忌，他在那個時代顯然會被另眼看待——視為激進分子！他對於長期以來有關女性講道的議題，雖尚未進入實施階段，但從未在理論上排除。<sup>43</sup><span style={cite}>（中譯「中性之物」並不恰當，應當強調與救恩無關。）</span><sup>44</sup><span style={cite}>（Jane Dempsey Douglass, Women, Freedom, &amp; Calvin (Philadelphia: Westminster Press, 1985), 82.）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  一般而言，關於什麼是無關緊要的，大家不一定有共識。比如，教會的敬拜讚美團上台時應當穿什麼服裝，有人覺得無關緊要，有人卻覺得非常重要。若是刻意或過度重視服裝本身，彷彿與信仰有關，則太過沉重了。如果出於禮儀規範而適度有所堅持，則應當勸導，卻不宜過度嚴厲。教會禮儀規範的分寸拿捏不易掌握，有些部分需要藉由教育形成共識，互相配合是必要的，不過如果使用威脅性、破壞性的條文規矩時，結果通常並不理想。當共識尚未形成時，重點應當先強調內心的態度——與基督連結，因為由內而外比較可能形成共識。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  加爾文提到無關緊要之事的生活實例，大都是迷信禁忌所形成的習俗，當生活在迷信禁忌的懼怕裡時，就是受到捆綁束縛。當事者是否成熟到能主動宣告哪些是無關緊要之事，這才是重點，因為這宣告不可由別人代勞，加爾文亦未設下無關緊要的事項名單，否則就違反自由的精神了。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  在論及第三部分的自由時，加爾文做了一個特別的提醒，主張這種自由要以愛為它的限制，就是運用時不要傷害別人的良心。<sup>45</sup><span style={cite}>（《要義》，3.19.9。）</span>其實不難理解，既然無關緊要，也就沒有必要「非做不可」！
                </p>
              </div>

              <div>
                <span className="font-semibold text-slate-700">2. 自由受愛支配，愛受信支配</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  「我以上所教導的避免得罪（絆倒）他人的事，是專門關於在神吩咐之外的中性之事。因神不允許我們因為怕得罪人就不遵守他的吩咐，因就如我們的自由必須伏在愛心之下，同樣地，愛也應當伏在純潔的信心之下。」<sup>46</sup><span style={cite}>（《要義》，3.19.13。）</span>以保羅為例，當時很多城市有祭拜偶像的習俗，因此販售的肉都是祭拜過的。吃祭拜過的肉這件事，有些基督徒在良心上無法接受，有些基督徒則在良心方面沒有問題。按照加爾文的觀點，可宣告此事為「無關緊要」，但有例外，如保羅提醒為了避免傷害這些不吃肉的基督徒，他自己寧可不吃，倘若因吃肉而使人跌倒，那麼就不是「無關緊要」了。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  加爾文承襲路德的主張，若信上帝則愛人，在信的前提之下才有愛可言，這愛不是憑空而來，一定是接在信的根源裡，而後有「基督之下，萬人之上」之高升的自由，以及「為了基督，萬人之下」之降卑的自由。顯然前者並非濫用無拘束的自由，而是與為愛而降卑的自由互相配合；既然為了基督的緣故可在眾人之下服事眾人，自我限制吃肉的自由又何嘗不可。應當避免把「無關緊要」的吃肉變成「非吃不可」，就這觀點而言，為著愛雖然自我限制，卻因此活出更高層次的自由。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  總之，即使無關緊要的事仍要受愛的支配，而這愛必須受信的支配，受信所支配的愛來運用無關緊要的自由，如此的倫理道德思考十分嚴謹，在從信所發出的愛的容許之下，有決定何者可為或不可為的自由，這與現代人所追求的為所欲為的自由，相距非常遙遠。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">六、從個人倫理到群體倫理</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                在改革宗神學傳統高舉上帝主權的神學思想影響下，神學反思的關心從教會延伸至社會，從個人倫理到群體倫理，期盼建立群體的見證。
              </p>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 走向公共生活——社會關懷</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  改革宗一向高舉上帝主權，許多神學家開始關心超過傳統教會所關心的範圍，比如蘇黎世的慈運理（Ulrich Zwingli, 1484-1531）反對當時的傭兵制度，因貴族驅使農民到其他國家從軍打仗，沒有顧及按照四季節期播種收割的農業生活，破壞農忙期的人力需求，導致農民社會瓦解，況且軍人又是一種高風險的行業，慈運理極力反對這種不良制度對社會造成傷害。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  布塞珥在施塔斯堡關注窮人，加爾文則在日內瓦講道中提到有關運用財富的原則。長期以來，中世紀教會都反對借錢取利，但加爾文的宗教改革卻期盼上帝主權從教會延伸至社會，他相信一切主權都在於上帝，所以有關財產的處理與運用也應當彰顯上帝主權，人受上帝交託管理大地，於是加爾文認定為了生產的緣故容許合理的借貸，但是反對借方藉由高利牟取錢財。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  加爾文對窮人的關切超過他的老師布塞珥，在一五三六年出版的第一版《基督教要義》就主張執事並非崇拜禮儀的助手，而應專任教會的慈善工作。根據對聖經的解讀，他進一步把負責慈善工作的執事分成兩種，一種是管理、分配財物，另一種是負責關懷人，因為他已看見慈善工作的規模龐大，需要足夠而專業的行政支援。<sup>47</sup><span style={cite}>（Elsie Anne McKee, Diakonia in the Classical Reformed Tradition and Today (Grand Rapids: Eerdmans, 1989), 64-66.）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  改革宗神學強調上帝的主權不只在教會內，也及於社會。當教會開始參與社會關懷，如果沒有適當地配合教會應有的其他特質，很可能使得教會形同社會工作團體，以致失落教會本身具有的獨特功能，應當追求一條平衡的道路。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">2. 時間是榮耀上帝的場域<sup>48</sup><span style={cite}>（以下取材自：Max Engammare, On Time, Punctuality, and Discipline in Early Modern Calvinism (Cambridge: Cambridge University Press, 2009).）</span></span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  天主教會重視空間、禮儀節期循環式的時間，熱衷於神聖節日；基督教會則重視時間、日常生活直線式的時間，認為天天都同樣歸屬上帝。對改革宗傳統而言，時間是榮耀上帝的場域，也是呈現信仰群體秩序之處，因此重視禮拜準時，生活節奏有序，藉由時間秩序表現出理想的信仰群體。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  中世紀以來，天主教會重視神聖的空間，建造了許多宏偉的大教堂，另外也重視神聖的節日，許多節日被設計得多采多姿，配合運用大教堂呈現對神聖的渴慕，不過節期禮儀屬於一種循環式時間觀，有如四季循環運轉不息。基督教會在加爾文以後，把注意力轉向時間，主張每天都在上帝主權之下，而且時間又被視為榮耀上帝的場域，據此發展出兩個主張：其一，舉行禮拜與起居作息都要求準時；其二，重視以生命過程的一切時間來榮耀上帝，這些主張都帶來生活節奏與思維方式的重大改變。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  由於時間是眾人可以一起分享的，而加爾文又把時間當作榮耀上帝的場域，因此開始建立群體禮拜與起居作息的秩序。在歐洲日內瓦市政大廳率先掛起大鐘，成為第一個要求禮拜準時的城市，而且在給牧師的聘約裡清楚說明講道應當多少時間，不可太長或過短。在此之前，每當主日教堂鐘聲響起，只是含混地提示禮拜就要開始了，並無明確要求何時準時開始。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  時間觀受加爾文神學的影響所及，準時成為由宗教信仰而來的生活習慣，因為上帝把時間託付給人，有如主人把財產託付給僕人，僕人應當努力做忠心的管家；再就群體而言，準時是嚴謹地建立生活和信仰合一的團體所需。這讓人聯想到，瑞士人迄今工作準時認真，也自然聯想到瑞士鐘錶業的發達。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  當每個人以自身生命中的一切時間榮耀上帝時，就意味著群體的歷史也是榮耀上帝的場域，因此改革宗神學一向重視歷史的發展，期盼上帝的榮耀在歷史上彰顯。總之，改革宗神學主張藉由時間的場域榮耀上帝，亦即藉由時間來榮耀上帝——讓時間歸屬上帝而被聖化。
                </p>
              </div>

              <div>
                <span className="font-semibold text-slate-700">3. 一切只為上帝的榮耀</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  由於追求在世上榮耀上帝，而且重視信仰群體見證，對社會習俗、世界價值觀有許多冒犯，加爾文的神學路線並不盡然討喜。比如，形象化的事物總是比較容易吸引人眼目，改革宗神學卻反對形象化，並認為那會造成偶像。許多人到歐洲旅遊看到宏偉的大教堂，心生羨慕，其實從信仰角度來看，並不見得具有特別的價值，建築外觀雖然壯觀，背後卻有不少令人難過的故事。比如，很多人在梵蒂岡看到聖彼得大教堂大受感動，卻不知那建築物的背後有販售贖罪券的醜聞——成為點燃宗教改革的導火線。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  潘霍華少年時去過羅馬，內心非常感動，看到全世界從各地前來的人們群集，見識到教會有這麼大，不過當他離開羅馬前，看到群眾隨著教宗而行，只見到那些非人性化、冰冷的禮儀，教宗的高高在上使人留下漠不相關的印象，<sup>49</sup><span style={cite}>（Eberhard Bethge, Dietrich Bonhoeffer: A Biography (Revised Edition) (Minneapolis: Fortress, 2000), 60.）</span>敏銳的少年潘霍華嗅到這是徒有儀式的人治，而非肉眼難以看見的上帝主權下之神治。相形之下，在加爾文傳承下改革宗或長老教會的禮拜堂，總是簡單樸素，視覺焦點以講台為中心，經常在明顯處擺設一本打開的聖經，呈現群體以尊重上帝話語為最高價值。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  因信稱義只是一個出發點，伴隨而來的是聖化——與世有別而歸屬上帝，從個體到群體都是榮耀上帝之處。改革宗的基本信念是期盼教會能進入世界而改變世界，期待教會的理念能夠成為社會的理念，這積極的態度背後有一個非常清楚的確信——上帝掌權作王。加爾文認為上帝不只掌管教會，也掌管世上國度，所以基督徒期盼上帝在教會裡掌權作王，也期盼上帝在世間掌權作王。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">七、預定論的後續影響</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                德國思想家韋伯（Max Weber, 1864-1920）在其名著《新教倫理與資本主義精神》中提出論題：「在構成近代資本主義精神，乃至整個近代文化精神的諸基本要素之中，以『職業』概念為基礎的理性行為這一要素，正是從基督教禁欲主義中產生出來的。」<sup>50</sup><span style={cite}>（韋伯，《新教倫理與資本主義精神》，于曉等譯〔台北：左岸，2001〕，114。）</span>加爾文的預定論可能導致的副作用是，人們想要確定活在上帝的預定裡面，以勤奮工作、節制欲望、累積財富作為被揀選者的特徵。其實連韋伯也深知這些發展並非宗教改革者的本意，而且相去甚遠。<sup>51</sup><span style={cite}>（韋伯，《新教倫理與資本主義精神》，52。）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                韋伯發現歐洲資本主義發展最好之處都是具有加爾文信仰傳承的區域，如英國、荷蘭、瑞士等地；路德影響比較大的日耳曼地區、北歐地區，資本主義就沒有那麼興盛；天主教地區則幾乎一直停留在以農業為主的生活方式。韋伯發現加爾文的預定論造成了一種特別的副作用，人們想要活在上帝的拯救裡，加爾文卻明言唯有上帝預定誰得救或不得救，而上帝預定的內容卻又無人知悉，以致產生一種焦慮，這焦慮導致加倍勤奮工作、節制欲望、累積財富，一心要活出那種被上帝揀選者的特徵。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                韋伯採用的研究方法，一方面排斥下層決定上層的觀點，另一方面排斥上層決定下層的觀點，他主張「選擇性親近」，亦即由宗教理念形成的世界圖像，為以利益為動力的火車設下軌道轉轍器。根據韋伯的觀察，加爾文的預定論帶來「一股前所未有的孤寂感受」，人們非常需要處於上帝揀選裡的確據。<sup>52</sup><span style={cite}>（韋伯，《新教倫理與資本主義精神》，62-66。）</span>儘管加爾文的回應是：「只要我們知道上帝已經選定了，那麼，我們就應該感到滿足了。下一步就只能依靠那種出自真正的信仰的、對上帝的無言信賴了。」<sup>53</sup><span style={cite}>（韋伯，《新教倫理與資本主義精神》，66。）</span>這種答案卻無法令人滿意，以致把宗教性焦慮轉化成為外在的努力，亦即「憑藉一種有助於增添上帝的榮耀的基督徒行為」。<sup>54</sup><span style={cite}>（韋伯，《新教倫理與資本主義精神》，69。）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                因此，全心全意追求一種榮耀上帝的生活，既非零星好行為的累積，亦非神聖禮儀等宗教活動，而是一種整體的系統性生活，韋伯以此形容這樣的人：「他在現世的生活是徹底理性化的，完全受增添上帝的榮耀這個目的的支配。」<sup>55</sup><span style={cite}>（韋伯，《新教倫理與資本主義精神》，71。）</span>整體而言，追求一種理性化的、入世的禁欲生活。於是資本逐漸地累積起來，這是當時歐洲資本主義興起的背景，縱使這背景並不直接等同資本主義，卻是資本主義所需的精神力量，而加爾文預定論適時地提供了這樣的力量。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這種資本主義精神所追求的賺錢目標，與倫理道德乃至宗教信仰結合在一起，而非指向追求享樂、奢侈浪費，以致帶來大量財富累積，結果形成了資本主義。這不禁使人想起加爾文的警告，人若想要靠自己的力量了解上帝揀選的奧祕，恐將陷入各種危險，其中應當包括為後來腐化奢糜的財團式資本主義鋪路。
              </p>
              <p className="text-gray-700 leading-relaxed">
                從預定論造成的影響可以看到，學習神學的目的是為了做神學反思，但是學習者確有可能誤用神學，比如人竟然想要猜測上帝預定的內涵，然後又藉著努力工作的生活方式來表現自己是被上帝預定的得救者，凡是受造者想要掌控創造者的一切努力，必定是徒勞無功！
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">八、倫理學的基礎——與基督連結</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                加爾文開展與路德不一樣的神學思想，他把天上的一切和地上的一切整合在一起，不再有屬靈、屬世二分，只有一種在上帝主權之下的生活，然而這種神學思想如何引導人經歷在地如在天呢？於是，加爾文建構一個重要的神學主題——「與基督連結」，這也是加爾文靈修神學的核心，而多次出現「與基督連結」概念的約翰福音正是加爾文喜愛的福音書。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                基督徒如果在靈性上多方體驗與基督連結，才有可能經歷到天上上帝的恩典如何成就在地上的人間生活中，人不可能靠自己來完成這件事，而天與地的差距又無法有交集，唯有耶穌基督道成肉身（從天而地）且復活升天（由地而天），見證了天與地的連結。我們需要與基督連結，才能領會在地如在天；「與基督連結」（union with Christ）的概念在最近加爾文的研究裡很受關注，有許多學者投入研究。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                至於核心概念如何譯成中文，有人翻成「與基督聯合」、「與基督合一」，筆者則採用「與基督連結」。中文的「連結」、「聯合」、「合一」分別有相通、接合、融入到混合成為一體的輕重程度之分，改革宗神學一向重視創造者與受造者不同的分際，拒絕徹底融入的選項，選用「連結」在概念上有如聯結車只是把不同車子掛在一起，「連結」至少比「聯合」多留下一些距離，「聯合」則往「合一」的方向傾斜。<sup>56</sup><span style={cite}>（中文用語比較模糊，照理說聯合國只是許多國家的連結組織，這些國家並沒有合在一起，不過中文並未稱為連結國，卻把這組織稱為聯合國，大家也不以為意。）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                加爾文在他的時代與路德宗神學家奧西安德爾（Andreas Osiander, 1498-1552）辯論，<sup>57</sup><span style={cite}>（《要義》，3.11.5-12。）</span>這場辯論起源於路德傳統下有人開始主張神祕主義，強調人得以參與上帝的神聖，如奧西安德爾主張因信稱義就是基督住在人裡面——神聖的內住使人稱義而聖化，加爾文批判說：「他說我們與基督聯合，我們也同意，但我們卻否認基督的本質與我們的混合。」<sup>58</sup><span style={cite}>（Institutes, 3.11.5: "He says that we are one with Christ. We agree. But we deny that Christ's essence is mixed with our own."）</span>加爾文可以接受的表達方式，是「穿上基督」、「嫁接（接枝）在基督」。<sup>59</sup><span style={cite}>（參《要義》，3.11.10。）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                加爾文拒絕人與上帝合一的主張，然而「與神聯合」（union with God）卻是靈修神學常見的主題，有大量文獻說到「與神聯合」，或者使用希臘文<em>Theosis</em>，亦即英文Deification，最近中文常見譯成「神化」，這是東正教會最喜歡的信仰理想，再加上天主教會有大量神祕靈修主義者，都使用相同或近似的語言，而加爾文卻顯然與他們有別。加爾文經常採用「與基督連結」（union with Christ），在《基督教要義》裡大約只有「五次」提到「與神聯合」，不過其上下文並非出於加爾文的主張或教導；至於「與基督連結」以及類似的表達方式，最少在《基督教要義》裡有上百處，加上類似概念的表達更是難以計數。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                強調「與基督連結」是出於改革宗敬畏創造者的一貫精神，亦即小心翼翼唯恐冒犯上帝主權。不過卻留下一個課題，照理說，「與基督連結」對基督徒並不陌生，然而在靈修方面的應用卻長期被忽略，而宗教改革的時代只有加爾文經常論述，看來他有如一位寂寞的先知，常傳講大家似乎很熟悉卻又陌生的想法。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在靈修學的歷史中並不常見「與基督連結」的神學主題，難以找到相關的靈修操練。最常見的是以煉路（Purgative Way）、明路（Illuminative Way）、合路（Unitive Way）來描述靈命的成長，這是一種下而上的進路，終極目標就是與上帝合一。靈修傳統裡也有些部分是以效法基督為主題，比如兩種名著：其一，中世紀肯培的多馬（Thomas à Kempis, 1380-1471）的《效法基督》（<em>Imitation of Christ</em>，又譯為《模擬基督》或《遵主聖範》），對於中世紀末期信徒期盼的靈性生活做了美好的總結。「你若要領略基督言論的真趣，就必須努力，使你整個的生活順從主。」<sup>60</sup><span style={cite}>（肯培斯（Thomas A Kempis），《遵主聖範》，於：《中世紀靈修文學選集》〔香港：輔僑，1964〕，139。）</span>如果要認識耶穌基督的話，就要以在生活上順服基督來認識，只是「效法」與「連結」尚有程度之分。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                其二，依納爵．羅耀拉是耶穌會的創始者，以《神操》（<em>Spiritual Exercises</em>）提供一套四週的靈修操練，藉由默想、禱告徹底操練靈性，其中要求以圖畫式想像瞻仰耶穌的生平言行，直到更加認識、愛慕並跟隨耶穌。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                以上二種著作，仍帶有中世紀傳統，採用下而上的進路，呈現愈來愈趨近神聖的進程，仍傾向追求與上帝聯合。對加爾文而言，人想要接近上帝應有一個極限，這個極限區分了創造者與受造者的分際，如果逾越了界限是褻瀆神聖。縱使靈修途徑是藉由耶穌基督，但只要終點是跨過耶穌基督進入終極神聖的話，這便是加爾文所不贊同的。耶穌基督是通往天父上帝的道路，我們若能與這道路連結，不代表它只是手段，因為耶穌基督也是目的——真理與生命。改革宗神學承襲加爾文對上帝的敬畏，處處尊重上帝的主權，對於任何偶像化或自我神聖化的傾向都比較謹慎。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                加爾文神學帶有強烈的入世傾向，如果這一點被過度強調，單單以進入世界來彰顯上帝主權為主要任務，必定要面臨被世界同化的危險。現代社會的生活與加爾文「與基督連結」的理想漸行漸遠，靈修被行動取代，默想被忙碌取代，榮耀上帝被追求成功取代。
              </p>
              <p className="text-gray-700 leading-relaxed">
                理想的情況應該是以「與基督連結」為教會最重要的使命，教會的宣講應當以「與基督連結」為中心；據此，信徒各有不同的呼召，有政治呼召的就參與政治，有社會呼召的就關懷社會，有經濟呼召的就從事經濟，各行各業都有其神聖呼召。講道時需要提醒信徒與基督連結，信徒則在世上生活做與基督連結的見證。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">九、總結</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                加爾文神學追求在世上榮耀上帝，在進入世界的過程中，應當以彰顯上帝的榮耀為目標。然而進入世界也意味著融入世界，必須面對世俗化的誘惑，亦即被世俗價值觀主導。比如基督徒都認同在世上作一位盡職的老師，但究竟是在工作上順從世俗價值觀而只是把學生帶到教會，或者藉由入世工作而呈現上帝國價值觀，這是兩種不同的方向。唯有一心追求彰顯上帝的榮耀，才能做到雖進入世界，卻始終以上帝國的價值觀為念。基督徒規畫人生以彰顯上帝的榮耀，然而許多忙碌費心的工作卻難以追求這樣的目標，除非在有限的人生中做好整體規畫，包括工作之外的生活、退休後的人生等。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                加爾文神學對於人性的怠惰有極其深刻的認知，他推動宗教改革面對最大的困難並非來自外在的攔阻，而是出自人心內在的怠惰。因此，他描述律法的一個重要功能是鞭策基督徒這隻頑固的懶驢以討主喜悅。加爾文神學的優點是讓基督徒生活有律法作為具體規範，其缺點則是可能回到律法主義。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在律法主義的僵化教條與反律法主義的放縱脫序兩端之間，路德從強調上帝的恩典而抗拒律法主義出發，當面對反律法主義的指控時，才漸漸朝向重視律法的自然法則回擺；加爾文卻從重視上帝恩典而批判律法主義出發，積極追求榮耀上帝與上帝的喜悅，給予律法新的詮釋，成為基督徒的規範指引。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                路德面對的批判以指責他持反律法主義為多，認為他對律法的敬意不足；加爾文面對的批判則以被貼上律法主義的標籤居多，認為他對律法的重視有回到律法主義之嫌。路德不斷宣揚上帝的恩典，極力強調信之重要，不過卻避談生活規範，因而面對反律法主義的誘惑；加爾文把信上帝得恩典者帶往律法那一端，面對的是律法主義的誘惑，儘管律法並不等同律法主義，然而出於人性的軟弱，對律法的了解容易滑向律法主義。
              </p>
              <p className="text-gray-700 leading-relaxed">
                其實連路德也沒有放棄給年輕人規範作為訓練，他認為在年輕人成長的過程中，需要禮儀規範作為訓練，儘管與得救無關，但卻對他們有好處。就像蓋房子需要藍圖，只是空有藍圖本身並不會使房子自動出現，蓋房子需要額外的力量，藍圖的規範僅僅指向目標，但卻無法達到目標。<sup>61</sup><span style={cite}>（路德，〈基督徒的自由〉，《路德選集（上冊）》，徐慶譽＆湯清譯〔香港：基文，1968〕，385。）</span>路德的用心不難理解，然而有時他戲劇性十足的激烈用語，究竟是出於論戰處境下的修辭語法，或是他的具體行動主張，經常使人覺得模糊不清。事實上，一條平衡的神學道路有許多複雜的因素需要細心處理，加爾文身為宗教改革的第二代，接續路德努力把未能釐清之處說明清楚。
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
            <ul className="space-y-3">
              {[
                '加爾文填補了路德「只談如何成為果樹、不談如何結果子」的空白——他主張稱義（天上）與聖化（地上）是「同時」而非「先後」發生，兩者不分不合、亦分亦合，如同基督的神人二性。',
                '加爾文倫理學的起點是「拒絕自己」，第二步是「積極榮耀上帝」，兩者雙重應用在人與上帝、人與人的關係上——唯有看見人身上的上帝形像，才有力量去愛那些不可愛的人。',
                '不同於路德視律法為主要負面（使人知罪而轉向福音），加爾文肯定律法的三種正面功用，尤其第三種「教導並勸戒已重生的信徒」，使基督徒生活有具體規範可循。',
                '加爾文的「自由三部曲」——從律法轄制下釋放、甘心樂意順服上帝旨意、以及在「無關緊要之事」上的自由——最終都指向「自由受愛支配，愛受信支配」，與現代人「為所欲為」的自由觀截然不同。',
                '加爾文把上帝主權從教會延伸至社會與時間，主張時間是榮耀上帝的場域（禮拜準時、生命全時段榮耀上帝），也影響後來韋伯所描述的「新教倫理與資本主義精神」，雖然這並非宗教改革者的本意。',
                '加爾文倫理學的基礎是「與基督連結」——不同於神祕主義追求「與神合一」，加爾文始終謹守創造者與受造者的分際，主張基督既是道路也是目的，這連結應當落實在信徒各按呼召活出的日常見證中。',
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
              <h4 className="font-semibold text-gray-800 mb-2">瑪麗蓮．羅賓遜引述加爾文「看見人身上的上帝形像」，對愛難以愛的人有何實際幫助？</h4>
              <p className="text-gray-700 leading-relaxed">
                本章大篇幅引用瑪麗蓮．羅賓遜小說《遺愛基列》，說明加爾文神學如何在文學中活化——老牧師對浪子傑克的祝福，正是「不考慮人對我們的惡意，而是在他們身上看到神的形像」的具體示範。這對今日教牧輔導處理難以和解的人際衝突極具啟發：與其要求當事人「靠意志力原諒」，不如引導他們練習「在對方身上找到上帝的形像」這個具體的注目焦點，這比抽象地要求「要有愛心」更容易操作。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">韋伯「新教倫理與資本主義精神」的副作用，對今日教會的「成功神學」傾向有何警示？</h4>
              <p className="text-gray-700 leading-relaxed">
                加爾文的預定論本意是讓人在上帝主權面前謙卑安息，卻意外催生了以勤奮工作、累積財富證明自己是「蒙揀選者」的焦慮心理，最終為資本主義提供了精神動力——這絕非加爾文的本意。這個歷史教訓對今日教會傳講「敬虔帶來財富」「信心決定富足」的成功神學是重要提醒：神學一旦脫離原初的謙卑敬畏，很容易被人的焦慮和欲望重新工具化，服務於與信仰初衷相反的目的。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">加爾文「無關緊要之事」的自由原則，對今日教會處理文化爭議（服裝、音樂風格、社群媒體使用）有何應用？</h4>
              <p className="text-gray-700 leading-relaxed">
                加爾文主張凡與救恩無關的事都屬「無關緊要」，基督徒有自由面對，但這自由必須受愛的節制——不可用來絆倒弟兄姊妹的良心，也不可被轉化成「非做不可」的新律法。這個五百年前的原則，對今日教會內部常見的敬拜風格之爭、服裝規範、3C產品使用等議題極具參考價值：與其用威脅性的規條強制統一，不如先在群體中建立「與基督連結」的內在共識，讓外在行為的共識自然由內而外形成。
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
              '加爾文說作基督徒的第一步是「拒絕自己」。回想你最近一次難以幫助或愛某個人的經驗，是否正是因為自我中心攔阻了你？',
              '本章引用瑪麗蓮．羅賓遜「連他最豐盛之處也不過還虧欠鄰舍」，你如何理解這句話？這對你看待自己「已經做得夠多」的心態有何挑戰？',
              '加爾文的「自由三部曲」最終指向「自由受愛支配，愛受信支配」。你如何理解這種自由，與你原本以為的「自由」有何不同？',
              '回顧你生活中「無關緊要之事」（迷信禁忌、風俗習慣），你是否也曾把某些「無關緊要」的事變成了「非如此不可」的新律法？',
              '加爾文主張「時間是榮耀上帝的場域」，重視準時與生活秩序。你如何看待自己使用時間的方式，是否也把時間當作榮耀上帝的具體場域？',
              '「與基督連結」被加爾文視為倫理學的基礎，卻在今日常被行動、忙碌、追求成功取代。你的信仰生活中，「與基督連結」目前占據什麼樣的位置？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 找時間讀《遺愛基列》或《家園》片段</h4>
              <p className="text-gray-700 mb-2">找機會讀瑪麗蓮．羅賓遜《遺愛基列》或《家園》的中譯本節選，體會加爾文神學如何活在具體的家庭與人際處境中，寫下你的體會。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🪞 練習「看見上帝形像」</h4>
              <p className="text-gray-700 mb-2">
                本週遇到一位讓你感到difficult（難以相處）的人時，刻意練習提醒自己：這人身上帶著上帝的形像。觀察這個提醒是否真的改變了你當下的態度與行動。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">⏰ 檢視自己「時間榮耀上帝」的實踐</h4>
              <p className="text-gray-700 mb-2">
                記錄一週的時間分配，誠實檢視有多少時間是刻意用來榮耀上帝的，並非只指教會活動時間，而是整體生命節奏是否呈現對上帝的敬畏與感恩。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「上帝啊，求祢幫助我拒絕自己，使我不再是我，乃是基督在我裡面活著。求祢幫助我在難以愛的人身上看見祢的形像，使我的愛心得著補足。求祢使我全部的時間都成為榮耀祢的場域，也求祢幫助我在無關緊要的事上有智慧的自由，在緊要的事上有堅定的信心。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
