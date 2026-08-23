import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Waves, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;
const quote = "border-l-4 border-emerald-300 bg-emerald-50 pl-4 py-3 mb-3";
const quoteText = "text-emerald-800 leading-relaxed italic";

export default function Book39Ch14() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-slate-800 to-blue-900 bg-clip-text text-transparent">第十四章</h1>
        <h2 className="text-xl font-semibold text-gray-700">為主抉擇——潘霍華倫理學</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          「耶穌聽見了，就說：『你還缺少一件：要變賣你一切所有的，分給窮人，就必有財寶在天上；你還要來跟從我。』他聽見這話，就甚憂愁，因為他很富足。」（路18:22-23）
        </p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-slate-50 to-blue-50 hover:from-slate-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Waves className="w-5 h-5 text-slate-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <p className="text-gray-700 leading-relaxed">
              「順從或反抗？」這是一個重要的倫理道德判斷。一九四四年二月二十一日，潘霍華在獄中寫信給貝特格說：「我們何時才會向命運認輸，才會放棄對命運的反抗呢？在不同的時候，反抗和屈服都是同樣必須的。」<sup>1</sup><span style={cite}>（朋霍費爾，《獄中書簡》，高師寧譯〔成都：四川人民，1992〕，116；Dietrich Bonhoeffer, Letters and Papers from Prison (Minneapolis: Fortress, 2010), 303 (DBWE8: 303)）</span>緊接著，他提到經典文學作品中的堂吉訶德是反抗到荒謬又瘋狂，而他的僕人桑丘卻是狡猾又自滿地順從，然而潘霍華自己則認為，堅定地反抗命運是必要的，不過一旦時候到了，卻又要以同樣的決心向命運順從——如果那是上帝旨意，因此，重點在於如何明白上帝旨意。「我們應該如何在這個『它』（命運）中尋到『你』（上帝）。換言之，命運如何變為天意？」<sup>2</sup><span style={cite}>（朋霍費爾，《獄中書簡》，116。）</span>後來，「反抗與順從」這話成為潘霍華去世後編輯出版的《獄中書簡》的德文書名：<em>Widerstand und Ergebung</em>。
            </p>
            <p className="text-gray-700 leading-relaxed">
              其實有關反抗與順從的想法也出現在一九三七年出版的《追隨基督》：「當耶穌要求青年財主自願貧窮時，他就明白面臨唯一的抉擇：順從或不順從。」<sup>3</sup><span style={cite}>（Dietrich Bonhoeffer, Discipleship (Minneapolis: Fortress, 2003), 77 (DBWE4: 77). 參見潘霍華，《追隨基督》，鄧肇明＆古樂人譯〔香港：道聲，1980〕，70。）</span>基督徒都知道應當順從上帝而反抗世界，然而卻有可能至終變成選擇順從世界而反抗上帝，這必是由於忘了基督的呼召是要用生命全力以赴，一如潘霍華所說：「當基督呼召一個人時，祂是叫他來死。」<sup>4</sup><span style={cite}>（潘霍華，《追隨基督》，80。）</span>以上這些想法出現在一九三七年，彷彿當時潘霍華在對自己發預言，下一次出現在一九四四年——去世前一年，他終於來到面對順從或反抗這一個人生重大抉擇的時刻！
            </p>
            <p className="text-gray-700 leading-relaxed">
              潘霍華並不認同教條式的答案，而期待在不同處境下做出具有生命力的判斷，他說：「想要原則性地在反抗和順從之間劃定一條界限，那是不可能的。信仰要求彈性的、有生命力的行動方式。只有這樣，我們才能堅忍當下的情勢，並且充分利用它。」<sup>5</sup><span style={cite}>（Dietrich Bonhoeffer, Letters and Papers from Prison, 304 (DBWE8: 304).）</span>他追尋在信仰裡具有彈性與生命力地明白上帝的旨意，究竟何時應當反抗什麼，而何時應當順從什麼。
            </p>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">一、危機處境下的倫理學</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                很多人對潘霍華的印象，只停留在他是一位令人感動的殉道者，卻未曾真正了解他的神學思想。事實上，他是一位才華洋溢的神學家，可惜在三十九歲那年就去世了，未能充分發展其神學天分。他所留下的神學著作雖然不多，甚至有的也不完整，然而他每本著作都具有非凡的洞察力，精采反映出他對整個時代思潮的觀察與理解。不過，他的神學思想有許多方面超越所處的時代，因此在當時不太能夠被理解。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                潘霍華尚未完成的倫理學稿件，在他去世後於一九四九年出版——《倫理學》。學者葛林（Clifford J. Green）主張此書的寫作不早於一九四〇年三月，<sup>6</sup><span style={cite}>（Ann L. Nickson, Bonhoeffer on Freedom: Courageously Grasping Reality (Aldershot: Ashgate, 2002), 118.）</span>這意味著寫作此書應當與一九四〇年前後的一連串事件有關。一九三九年，尼布爾支持潘霍華前往美國，本來的用意是期待潘霍華從愈來愈艱難的處境脫身，藉此訪問而留在美國。一九三九年六月四日，潘霍華啟程前往美國，卻僅僅待了二十六天就返回德國。離開美國前，他寫信給尼布爾說：「我得到的結論是，來到美國是一個錯誤，我應當與主內弟兄姊妹一起度過我們國家歷史上這段艱辛時期，如果我此時不能與我的肢體一同承擔這段時期的考驗，未來我將沒有資格參與戰後德國基督徒生活的重建。」<sup>7</sup><span style={cite}>（Eric Metaxas, Bonhoeffer: Pastor, Martyr, Prophet, Spy (Nashville: Thomas Nelson, 2010), 321.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                既然是一個錯誤，就應當儘快改正，於是潘霍華決定儘快回去德國。這一個返回德國的決定，不只使他重回險境，而且使得納粹政權對他更加注意。返國途中，他特別路過倫敦探望雙胞胎妹妹，亦即嫁給猶太人而流亡倫敦的莎賓娜（Sabina），他應當心裡已有預感這是最後一次會面，因為回到德國後，恐怕就不會有機會再出來了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                一九四〇年九月二十七日，希特勒宣布在西線發動戰爭，全面引發世界大戰。<sup>8</sup><span style={cite}>（艾瑞克．梅塔薩斯（Eric Metaxas），《潘霍華》，顧華德譯〔台北：道聲，2013〕，443。）</span>一九四〇年十月，潘霍華的二姊夫邀請他加入國家情報組織「防衛軍」（Abwehr）作為替代役，藉由參與這個組織，他逐漸參與反抗活動乃至暗殺希特勒的計畫。由於他經常參加普世教會活動，熟悉許多國際友人，因此他在組織中負責的是國際聯繫。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                一九四〇年十二月至一九四一年一月間，潘霍華在慕尼黑附近山中村莊埃塔爾（Ettal）開始寫作《倫理學》，在戰爭砲火的陰影與修道院的寧靜強烈對比下，<sup>9</sup><span style={cite}>（查爾斯．馬什（Charles Marsh），《陌生的榮耀：朋霍費爾的一生》，徐震宇譯〔上海：上海文藝出版社，2016〕，430-435。）</span>有如處於光明與陰暗交織下，寫作這本面對困難的倫理道德判斷實況中的思想論述，可惜並未完稿，仍留下一些不完整的片段，以下主要介紹此書中的基督教倫理道德思想。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                此書的核心概念在於高舉上帝主權，強調耶穌基督單單帶來一種真實（實在），跟隨耶穌基督的人也應當只生活在一種真實裡，而無屬靈、屬世之分。追隨基督應當自由地回應神聖呼召，有必要時甚至必須承擔罪責、負起責任。他反對以抽象概念作為倫理道德的判斷依據，亦反對以孤立個體的立場來做脫離真實群體生活的倫理道德判斷。基於人的有限，世上並無絕對的判準可言，必須在變動的處境中，根據與耶穌基督的關係，靈活地做出合宜的判斷，因為善惡並非以純粹的形式向我們彰顯，而是必須在處境中親身經歷並去做判斷。<sup>10</sup><span style={cite}>（Dietrich Bonhoeffer, Ethics (Minneapolis: Fortress, 2009), 219 (DBWE6: 219). 參見：朋霍費爾《倫理學》，胡其鼎譯〔香港：漢語基督教文化研究所，2000〕，184-185。）</span>
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">二、「基督教倫理學」</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                一般倫理學關心的焦點是「我」，探討「我如何變得良善」以及「我如何做善事」，這些反映了人想要知善惡的心理，背後潛藏著人想要自己決定善惡而不讓上帝決定善惡，亦即人想要替代上帝。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                潘霍華非常清楚指出「基督教倫理學」並非一般倫理學，因為一般倫理學關心的焦點從「我」出發，探討對我而言什麼是恰當的行為，反映了人想要倚靠自己分別善惡，自行決定善惡而不願讓上帝決定，亦即人想要扮演上帝。如創世記第二至三章所呈現的，人類史上第一個犯罪事件，就是吃了上帝所不許可的那分別善惡樹的果子。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「知善惡看來是每一種倫理學思考的目標。基督教倫理學的首要任務就是揚棄這種知。」<sup>11</sup><span style={cite}>（朋霍費爾，《倫理學》，12。）</span>因為這種「知」是建立在人自己，當人面對上帝時，這樣的「知」事實上是一無所知。單單「知善惡」這件事，就意味著人想要「脫離本源」，因為「在本源中，人只知道上帝」，不料脫離本源的結果是人只知道自己。<sup>12</sup><span style={cite}>（朋霍費爾，《倫理學》，12。）</span>想跳脫本源的心理把人帶到一個只知道自己的地步，以致違反吃分別善惡樹果子的禁令，人不再順從上帝而想要如同上帝一般。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「知善惡的人最終擺脫了生命，亦即擺脫了源自上帝的挑選的永恆的生命。」<sup>13</sup><span style={cite}>（朋霍費爾，《倫理學》，14。）</span>當人選擇善惡樹，亦即離開了上帝沒有下禁令的生命樹，結局就是與生命隔絕。既然不能享用生命樹的果子，就意味著失去上帝所提供的永恆生命。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                基督教倫理學關切的焦點並不是「我」，而是「上帝」，因此應當探討何為上帝的旨意。<sup>14</sup><span style={cite}>（朋霍費爾，《倫理學》，160。）</span>從上帝所喜悅的角度來看，基督教倫理學探討人在上帝面前應當具有什麼身分認同，亦即探討「認識身分」（know who）的問題，而不只是「認識技能」（know how）的問題。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在科技的世代中，大家不斷追求有關技能的知識，甚至認為這樣的知識本身就是金錢，這也是很多人樂於追求的原因；但基督教倫理學卻更關心「到底具有什麼身分」、「究竟應當成為什麼人」的問題。人若要認識自己是誰，就應當先認識上帝及上帝的旨意，因為人是受造者，而上帝是創造者。據此，潘霍華批判說，一般倫理學根本不是基督教倫理學。
              </p>
              <p className="text-gray-700 leading-relaxed">
                潘霍華從一開始就否定基督教倫理學與一般倫理學的交集，他區分兩者的論述非常徹底，彷彿再度響起特土良（Tertullian, 160-225）的呼籲：「雅典與耶路撒冷究竟有何相干？學院與教會到底有何一致？異端與基督徒又有何關連呢？」<sup>15</sup><span style={cite}>（Tertullian, On Prescription against Heretics, in: The Ante-Nicene Fathers, vol.3, 246.）</span>
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">三、自由回應的責任</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                潘霍華倫理學的核心是自由回應的責任，他的倫理學也被列入廣義的責任倫理學，不過他對「責任」的詮釋，卻與哲學的責任倫理學或其他神學的責任倫理學有別。他主張耶穌基督是我們的「一切生命和我們生命的本源、本質和目標」，<sup>16</sup><span style={cite}>（朋霍費爾，《倫理學》，188。）</span>因此所謂自由的回應，就是以生命來回應耶穌基督而經歷的自由。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                既然責任是取決於耶穌基督對我們的呼召而發出的回應，<sup>17</sup><span style={cite}>（朋霍費爾，《倫理學》，221。）</span>因此，人身為回應者，必須按照耶穌基督的心意，徹底以行動追隨基督。潘霍華所說的責任（responsibility）是出於主動的回應，並非「職責」（duty），因職責是來自外在的要求、期許，比如接受一個工作就有遵守職責的義務——工人對工作有義務、老師對教學生有義務。德文的<em>Antworten</em>是「回答」而兼有「回應」之意，而<em>Verantworten</em>則是「承擔、負責」，潘霍華使用這字的名詞<em>Verantwortung</em>表達「責任」——出於甘心樂意、自由承擔的責任。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                回應耶穌基督的呼召並非出於約束，而是出於自由，表面上神聖呼召成為人的約束，但是當人自發地做出回應時卻經歷自由，因為這是人的自主決定——活出具有承擔的生命。由於回應耶穌基督的呼召是全然出於自由，人唯有在這承擔負責中才能經歷真正的自由。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                回應呼召是必須用整體生命來回應，任何僅有部分生命的回應都不充足。「因此，責任意味著，投入生命的整體，行為事關生死。」<sup>18</sup><span style={cite}>（朋霍費爾，《倫理學》，192。）</span>這回應經常是做出攸關生死的重大抉擇——肯定生命或否定生命，卻完全出於心甘情願的自由，有如經歷一場冒險：「冒險去做一個完全出於自己責任的自由行動，這是唯一能夠面對邪惡的中心，並且勝過邪惡的行動。」<sup>19</sup><span style={cite}>（Dietrich Bonhoeffer, Ethics, 79 (DBWE6: 79).）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「以耶穌基督對我們生命的肯定與否定，作為對耶穌基督的生命之回應的生命。」<sup>20</sup><span style={cite}>（朋霍費爾，《倫理學》，引文略有修改，出自p.191：「作為對（作為對我們的生命肯定與否定的）耶穌基督生命之回答的生命，我們稱之為『責任』（Verantwortung）。」）</span>亦即遵照耶穌基督的心意，對自己的生命做出肯定與否定，藉此來回應耶穌基督的呼召。由於他主動而堅決地回應耶穌基督的呼召，他所做的肯定包括在最困難的時候決定預備結婚，呈現在黑暗中迎向光明的信心；他所做的否定則包括願意犧牲自己生命來參與反抗希特勒的行動。他親身經歷這兩者都是出於自由的決定，而且他也在這決定中更加體會自由。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                自由地回應責任不只是面對上帝，也是面對人：「責任認識到另一個人也是負有責任的人，還讓另一個人意識到他的負責能力。」<sup>21</sup><span style={cite}>（朋霍費爾，《倫理學》，202。）</span>比如父母要對子女負責，就要對子女負責的能力負責，使子女負責的能力能夠成長而成為負責任的人，這就使得子女在負責能力上的限制，同樣也會成為父母的限制，甚至要讓子女知道自己負責的能力是有限的，也會成為父母的限制，因為父母不能把自己當作上帝，要知道子女負責能力的限制，那也是父母所不能逾越的，亦即不得強迫子女去做他們做不到的事。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                由於人本身負責的能力就有限，潘霍華如此說：「我們就是這樣認識到了負責任的行動的界限在於行為的盡頭是上帝的恩典與審判，也在於鄰舍的負責能力，這同時也表明，恰恰是這種界限使行動成為負責任的行動。」<sup>22</sup><span style={cite}>（朋霍費爾，《倫理學》，202。）</span>因此，我們要能意識到自己有不能逾越的極限，這是負責任行動的界限，一方面，我們需要交託上帝的恩典與審判；另一方面，我們也需要有交託別人的負責的能力，亦即學習在別人能夠負責的部分放手。反之，不負責的行動就是「蔑視這種界限，蔑視上帝和鄰舍」。<sup>23</sup><span style={cite}>（朋霍費爾，《倫理學》，202。）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                由於人負責的能力有限，這使得人在限制之下仍然盡力負責顯得特別可貴。對於上帝交託給我們的人，不論是父母對子女負責，老師對學生負責，牧師對信徒負責，這負責還要幫助他們成為負責的人，並且明白我們的負責是有極限的，在超過我們能力之處放手信靠上帝，也放手信任別人的負責能力，期盼我們所負責的對象被啟發，能夠知道他們負責的能力也是有極限的。
              </p>
              <p className="text-gray-700 leading-relaxed">
                按照一般的說法，老師要對學生負責，就是指老師要把學生教好，但潘霍華卻提醒老師要意識到自己負責的能力有限，因此要使學生也意識到自己的負責能力，亦即使被關照者也能成為對別人負責的人，這其中必定包括使學生明白那些關照他們的老師其負責能力也是有限的，因此必須自己讓成為能夠負責的人。如果一個人不知自己負責的能力有限，很有可能會耗盡心力來為別人負責，以致更讓他們無法學習為自己負責。不知自己負責能力有限之人，必定無法讓被關照者明白自己要學習負責，連帶必須加重自己負責的重擔到無法承擔，甚至也導致被關照者無法明白自己負責能力有限，以致使這樣的悲劇不斷重演下去。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">四、處境倫理學</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                本書第二章提及潘霍華的倫理學有時會被視為處境倫理學，不過這處境並非生存處境，而是信仰處境——人與基督的關係、與信仰群體的關係，在這關係中以基督為中心來因應不斷變化的時空處境。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                潘霍華的處境倫理學具有三個特徵：其一，拒絕抽象概念，既不做抽象討論，也沒有想要建立倫理學理論；其二，拒絕孤立的個體，因為道德倫理抉擇並非個人的決定，而是在信仰群體裡回應上帝的決定，在與上帝互動的信仰群體裡，面對具體生活的挑戰；其三，拒絕絕對原則，當面對真實生活挑戰時，若要在信仰群體裡根據與上帝的關係、與人的關係做道德倫理決定，並沒有一個絕對原則可循，而是一種生命的決定。<sup>24</sup><span style={cite}>（朋霍費爾，《倫理學》，184-185。）</span>以下是進一步的說明：
              </p>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 生命的約束</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  自由地回應責任是對生命的約束，有所為而有所不為，有所生而有所死，有所肯定而有所否定，其中有三個層面。
                </p>
                <p className="font-semibold text-slate-800 mb-2">▲「責任的基礎是代表（<em>Stellvertretung</em>）。」<sup>25</sup><span style={cite}>（朋霍費爾，《倫理學》，193。）</span></p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  代表是責任的基礎，責任建立在代表他人，代表者必須做到不顧自己的利益，因而經常必須做群體性的代表，甚至以自己的生命負起責任，比如在現實生活中，傳道人要代表教會，父親要代表家庭，朋友要代表夥伴來負起責任，接受自己生命的約束。
                </p>
                <p className="font-semibold text-slate-800 mb-2">▲「同基督一致的行動是符合實在（<em>Wirklichkeitsgemässheit</em>）的行動。」<sup>26</sup><span style={cite}>（朋霍費爾，《倫理學》，198。）</span></p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「實在」（<em>Wirklichkeit</em>）翻成「真實」比較容易理解，「符合實在」就意味著「作真實的人」，不是僅存於抽象理論中的概念，而是有如道成肉身的見證一般，那是進入真實的世界而成為真實的人。受造的人原本受到限制，符合真實的行動意味著只能承擔有限的責任，接受生命的約束。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  人在自由地回應責任上，若有與基督一致的行動，就會發現自己正在作真實的人；但如果不選擇與基督一致的行動，比如選擇追求利益，那麼就會經歷走向不真實的狀況，而若選擇追求任何原則、公式也不會使生命真實，因為真實只有一種——就是與基督同行。因此追求與基督一致，接受生命的約束，絕非追隨任何抽象理論、絕對原則或物質利益。
                </p>
                <p className="font-semibold text-slate-800 mb-2">▲承擔罪責（<em>Schuldübernahme</em>, willingness to become guilty）</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  承擔罪責必須付出代價，耶穌基督以無罪成為有罪來承擔眾人的罪惡，義者代替不義者受苦，這成為承擔罪責的典範。潘霍華深深體會耶穌基督替我們承擔罪責，也願意為別人承擔罪責。以「說謊」為例，他認為不可說謊本身不應當作為絕對原則，假若當我們有必要為了救人而說謊時，這並非使得說謊成為正當，而是自己付出代價成為有罪的說謊者，為了救人而願意承擔說謊的錯誤。然而，人究竟如何能夠承擔罪責呢？答案是：在人面前，因著救人的緊迫性而被視為正當；在自己面前，因著良知而宣告無罪；但在上帝面前，唯獨盼望恩典。<sup>27</sup><span style={cite}>（Dietrich Bonhoeffer, Ethics, 282-283 (DBWE6: 79).）</span>終極而言，救人的緊迫性與良知的宣告都不足以使人稱義，唯有信靠上帝領受恩典才能真正被稱義。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  在決定與基督同行中，經常要學習基督代替別人付出代價，他對承擔罪責的認識之深是極其少見的，他參與暗殺希特勒的計畫，應當也是如此。殺人是錯誤的，但總要有人去做這件事，避免更多人受到傷害，這是為了更多生命的緣故而承擔自己犯錯的罪責。然而人自己如何有能力承擔罪責呢？潘霍華畢竟是熟悉路德的神學家，他指出出路在於「唯獨盼望恩典」，亦即因信稱義。路德說：「確定的是，只有當人對自己全然失望時，才能夠真正接受基督的恩典。」<sup>28</sup><span style={cite}>（林鴻信，《覺醒中的自由》〔新北市：校園，2004〕，140。）</span>
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">2. 生命的自由——自我檢驗與冒險<sup>29</sup><span style={cite}>（朋霍費爾，《倫理學》，193。）</span></span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  從生命的約束出發，進而談到生命的自由，因論及「責任」就必須論及「自由」。表面上兩者似乎對立，但「責任事實上——雖然不是時間上——以自由為前提，而自由只能存在於責任之中」。<sup>30</sup><span style={cite}>（朋霍費爾，《倫理學》，214。）</span>責任以自由為前提，並非論及時間先後，而是指實際情況，從自由而發出意願負起責任，而這種責任就是一種自由的展現。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  由於「負責任的行動完全發生在相對性的區域內」，人的視野所見原本就有限；加以「不是要在對與錯、善與惡之間做出決定，而是要在對與對、錯與錯之間做出決定」，經常面對的並非對錯分明的抉擇，而是在對與對、錯與錯之間的模糊地帶做決定，因此判斷非常困難，有如一場冒險，必須放棄倚靠自己而交託給上帝。<sup>31</sup><span style={cite}>（朋霍費爾，《倫理學》，214。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  可見如此的判斷已非人所能及，乃是體會到原本一切都出自上帝的主權，「自由的行為最後認識到自身是上帝的行為，決斷認識到自身是上帝的引領，冒險認識到自身是神聖的必然」。<sup>32</sup><span style={cite}>（朋霍費爾，《倫理學》，215。）</span>表面看來自由的行為，卻是出於上帝主權的行為；貌似自由的決斷，卻是出於上帝的引導與帶領；好像是人的冒險投入，卻明白這是出於上帝的命定。總之，「當自由地放棄對於我們自己是良善的認識，上帝的善就彰顯了」。<sup>33</sup><span style={cite}>（Dietrich Bonhoeffer, Ethics, 284-285 (DBWE6: 284-285).）</span>當來到人一切能力盡頭之處，最能彰顯上帝的性情。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  畢竟負責任的行動發生在有限的時空下，有限的人無法做出絕對的裁決，加上倫理道德判斷所要面對的問題，經常不是黑白分明，有如在對與錯、善與惡之間做決定，而經常要在對與對、錯與錯之間做出決定，判斷起來特別困難。當我們要做這種負責任的行動時，就是要運用我們的自由，有如經歷一場冒險，因此必須放棄倚靠自己而交託上帝。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">3. 小結</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  潘霍華的處境倫理學不做抽象討論，也不追求倫理學理論；他拒絕孤立的個體做道德倫理抉擇，乃必須在信仰群體裡做出回應上帝的決定；因此並沒有一種固定的公式，而是追求與基督一致，來負起代表性的責任，甚至願意親身承擔罪責，衡量各種層面後，自由地做出一種願意付出代價的決定。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  一般倫理學大多在討論或對或錯、或善或惡，但是潘霍華的思考非常細膩，他注意到在真實生活中經常於對與對之間、錯與錯之間、善與善之間、惡與惡之間抉擇，也要做出恰當的判斷。一般倫理學的討論通常談論極端的案例，但若極端到大家都知道對錯、善惡，似乎沒有太多參考價值，因為更難判斷的情況是問到哪一個更對、更錯、更善或更惡，那才是日常生活中經常面對的實況！
                </p>
                <p className="text-gray-700 leading-relaxed">
                  真實人生也是如此，比如大家都知道吸毒是錯的，那還需要討論嗎？但在讀神學或讀企管之間，在全職事奉或帶職事奉之間，則大有討論空間，在這些看來都不錯的選項中，決定哪一個最好才是最難的。其實若是選擇次好的或是其他的好事，似乎也不錯，畢竟我們都心裡明白，無論何者選擇皆非壞事，可是倘若我們總是只停留於此，無法做出最好的決定，也有可能使有限的人生在點點滴滴的遺憾中流失，事實將證明，縱使把幾樣次好的東西全加起來，仍然比不過單單一樣最好的東西。自由地回應責任有可能發生在最微妙、最困難的抉擇中，必須在那些對與對之間、錯與錯之間做出智慧的辨識，難度確實很高，因此，若是做出了恰當的抉擇，我們也就同時深深地經歷自由了。
                </p>
              </div>

              <div>
                <span className="font-semibold text-slate-700">4. 討論說謊</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  潘霍華主張處境倫理，對於可否說謊的倫理議題，立場比較具有彈性。他舉了一個例子：當老師問小孩，其父親是否醉酒時，小孩回答沒有，但其實父親時常醉酒，所以這是謊言。可是小孩這番謊言，卻說出比真話更多的真理，因他保護了上帝所設立家庭的尊嚴。上帝的真話出於愛，而撒但的真話卻出於恨，因此真正的謊言在於拒絕上帝。<sup>34</sup><span style={cite}>（朋霍費爾，《倫理學》，314-316。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  潘霍華反對康德把不可說謊設為絕對法則，因康德主張道德規範的普遍性，行為抉擇的任何後果都不應當成為道德判斷的動機，這導致失去面對變動處境中自由抉擇的能力。潘霍華評論康德曾經舉過的例子：當殺人兇手追殺一位逃到我家的朋友時，問我那位朋友到哪裡去了，誠實的回答表面看來是無罪的，但卻必然導致那位朋友被殺，可見這是出於片面思考的結果，其根源則是出於律法導向和自以為是的良知，事實上忽略了「愛鄰舍」那完整一致的呼召，也就是拒絕以負責任承擔罪責，來保護朋友的生命。在此意義下，潘霍華反對康德對於誠實的絕對堅持。<sup>35</sup><span style={cite}>（朋霍費爾，《倫理學》，211。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  倘若我們生活在納粹德國時代，一位被蓋世太保追緝的猶太朋友藏匿在自己家中，蓋世太保正上門來打聽他的下落，我們是否還有可能如康德一樣，大談不可說謊的絕對規則呢？因此，潘霍華選擇一條更加困難的道路，他從未主張說謊是對的，只是主張當有必要說謊時，我們是為了別人而自己承擔罪責。在他看來，康德的主張是比較容易的，那只是堅持遵守律法，也是堅持自以為是的良知，亦即為了自己表面上良心清白，卻讓朋友置身於生命危險之中；當拒絕負起責任以承擔罪責的方式來保護朋友的生命，其實也就拒絕了「愛鄰舍」的呼召，因此潘霍華對康德關於誠實與謊言的倫理判斷不以為然。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">五、一種真實</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                德文的<em>Wirklichkeit</em>，對應於英文reality，有人譯成「現實」，在神學裡譯成「真實」或「實在」比較恰當，因為「現實」容易指向物質性的現況或追求物質性的好處，以致凡「現實」的不一定「真實」。潘霍華認為真實只有一種，亦即在真實之外別無其他真實，他的倫理道德思想非常重視單單追求一種真實。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                潘霍華認為聖經對人有四項委託：「上帝要在世界中有工作、婚姻、政權、教會，上帝要靠基督、為基督、在基督裡面有這一切，各按其方式。」<sup>36</sup><span style={cite}>（朋霍費爾，《倫理學》，176。）</span>這比路德的三層秩序多了一項「工作」，潘霍華主張所有人都在這四項委託之下，這四項委託相互交織而無屬靈、屬世之別。因此，一位基督徒不但是教會信徒，也同時是一位工作者、配偶與公民，而且只有一種真實——以基督為中心，亦即靠基督、為基督、在基督裡而有這四項委託。他反對把屬靈、屬世二分，兩者都整合在以基督為中心的一種真實。「不是從『世俗』的領域撤回到『屬靈』的領域，而只是在上帝的這四項委託之下練習並學會基督徒的生活。」<sup>37</sup><span style={cite}>（朋霍費爾，《倫理學》，176。）</span>從另外一個角度來看，人活在世上的這四項委託，就是要在這四個領域中體驗如何自由地回應責任，同時經歷生命的約束與生命的自由。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                潘霍華反對路德神學傳統傾向屬靈、屬世二分——「兩個國度」，他堅決主張「只有一種實在」，「就是在世界實在中顯示於基督之中的上帝的實在」，亦即在世界的現實裡顯示屬在基督裡之上帝的真實，「只有一個基督實現的領域，在這個領域裡，上帝的實在和世界的實在合為一體」。<sup>38</sup><span style={cite}>（朋霍費爾，《倫理學》，168。）</span>基於真實的不可分割，人不再以自己為中心，而是以基督為中心，高舉上帝主權。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                就人的本性而言，「人看到的不是上帝，而是自己」；<sup>39</sup><span style={cite}>（朋霍費爾，《倫理學》，14。）</span>然而，一個存在於上帝面前的人是不同的，他開始看見上帝過於看見自己，他甚至必須領受從上帝來的愛，才有能力去愛，也就是必須由上帝主動，才有力量去愛，人的愛畢竟是被動的。潘霍華對於「人的被動」有很深的理解，人在神聖上帝面前只能居於被動方，「人的愛始終是純粹被動的。愛上帝，僅僅是被上帝所愛的另一面。被上帝所愛包含著愛上帝，愛上帝和被上帝所愛不可分離」。<sup>40</sup><span style={cite}>（朋霍費爾，《倫理學》，43。）</span>上帝愛我們，這是我們一切愛的能力來源，只有在被上帝所愛之中經歷了上帝的恩典，我們才有可能去愛。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                縱使有四項委託，卻只有一種在基督裡的真實，那是上帝的真實和世界的真實合而為一的真實，亦即世界儘管重視現實，卻必須展現上帝的真實。路德的三層秩序中沒有「工作」這一項，以致路德倫理學留下一道缺口；在路德的時代裡，他努力打破屬靈、屬世二分，強調只要活在因信稱義中，工作沒有屬靈、屬世，或高貴、低賤之分。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                路德畢竟並未論及在因信稱義中工作究竟是什麼情況，以致他對「工作」的看法比較被動，忽略了「工作」也包括主動選擇，對於因信稱義的蒙恩者究竟要選擇哪一種工作的說詞有些含糊，只強調當因信稱義時你在哪裡工作，那裡就是你被上帝呼召的崗位，並未發展比較健全的工作神學。由於單單重視恩典，工作對路德而言沒有太多積極性，這使得他的神學還是帶有屬靈、屬世二分的色彩，彷彿屬世的工作不是那麼重要，屬靈的世界則應當認真追求，因為與得救與否有關。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                儘管承襲路德宗神學傳統，潘霍華卻把工作帶進上帝的委託：「工作始於伊甸園，工作關係到人參與創造的行為。工作創造了一個物和價值的世界，旨在頌揚和侍奉耶穌基督。這不是像上帝的創世那樣的從虛無中的創造，而是在上帝最初創世的基礎上創造新事物。任何人都不能擺脫這項委託。」<sup>41</sup><span style={cite}>（朋霍費爾，《倫理學》，177。）</span>他談論工作來自上帝委託的積極意義，同樣期待在工作這項委託裡有在基督裡唯一的真實。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">六、界限與中心</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                潘霍華呼籲凡生活在真實處境裡的人，必須辨識何為生命的中心、何為生命的邊緣，也辨識何為生命的界限、何為容許的空間。他描述人在樂園裡的經歷，上帝禁止人採食分別善惡樹的果子（簡稱「知識果子」），有如為人樹立了界限，亦即設立人的極限：人的「界限」（the limit）（不可逾越之限制）在於人「生存存在」（<em>Dasein</em>，此在）的「生命中心」（the middle，中間），而不是「生命邊緣」（the edge）。<sup>42</sup><span style={cite}>（請參照：朋霍費爾，《第一亞當與第二亞當》，王彤＆朱雁冰譯〔香港：漢語基督教文化研究所，2001〕，157。）</span>人不可逾越之界限，在於生命存在的中心，而非生命的邊陲地帶，亦即生命存在的中心在上帝主權之下，而人不得在這中心逾越上帝主權。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這提醒我們，若只把生命的邊陲地帶放在上帝主權之下，能夠算是尊重上帝主權嗎？這也提醒我們，倫理道德判斷的優先順序應當有輕重之別，比如追問基督徒一天可玩電腦遊戲多久，這只能算是生命邊陲地帶的問題；至於基督徒一生的方向是什麼，這才是生命中心地帶的問題。在大事未解決之前，如果一直處理小事，那真是本末倒置了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「在對處於中間的界限的認識中，界定了整個此在、任何可能態勢的人之存在的範圍。在存在著界限的地方——認識之樹——也存在著生命之樹，即賜予生命的主自己。他是界限而同時又是我們的此在之中間。」<sup>43</sup><span style={cite}>（朋霍費爾，《第一亞當與第二亞當》，157。）</span>對於人的界限在於生命存在中心的認識，亦即對我們生命中心有上帝所界定不得逾越之處的認識，這就界定了生命的存在以及任何情況下生命存在的範圍。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                樂園中心有兩棵樹——認識之樹與生命之樹；前者是我們生命中心不可逾越之限制，後者則來自上帝——賜予生命的主，祂是我們生命的界限，也是我們生命的中心。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當亞當夏娃犯罪，吃了分別善惡樹果子之後：首先是生命中心被冒犯，生命界限被逾越，人自居於生命中心不再受限制，他完全靠自己本身而活，不再倚靠原本的生命中心（now he lives out of his own resources and no longer from the middle）。<sup>44</sup><span style={cite}>（Dietrich Bonhoeffer, Creation and Fall. Temptation (London: SCM, 1959), 72.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                亞當夏娃吃了知識果子，想要主導自己的生命，逾越了上帝所設定的界限，不願受到任何限制。因為人自己想要作上帝，不願讓上帝居於生命的中心，不甘於身為受造者，想要自己作自己的主人。然而，當人離開賜予生命的主時，也就意味著遠離了生命樹的生命果子。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">七、個體與群體</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                潘霍華非常強調人不只是個體，而且是群體中的存在，因為人並非孤立存在於世。他主張人與人必須互相負起倫理責任，因為負責就是回應上帝、回應他人，那是出於自由的回應。他把人與人之間的相互性擴充到信仰以及倫理道德層面，主張人應當負責——自由地回應上帝、回應他人，建造理想的信仰群體，見證其中有彼此自由回應的關係。
              </p>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 上帝委託，互相代表</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  人與人之間的關係是有責任的，「責任的基礎是代表（<em>Stellvertretung</em>，代理）。」<sup>45</sup><span style={cite}>（朋霍費爾，《倫理學》，193。）</span>工作、婚姻、政權與教會四種委託交織，並無屬靈、屬世之分。<sup>46</sup><span style={cite}>（朋霍費爾，《倫理學》，176。）</span>出於上帝的委託，人與人「彼此相伴」（with）、「彼此相應」（for）、「彼此相對」（over against）。<sup>47</sup><span style={cite}>（朋霍費爾，《倫理學》，251。）</span>在理想群體中，責任意味著代表、代理，替代對方來承擔，不分屬靈、屬世，藉由工作、婚姻、政權與教會經歷，互相代表、代理，都是出於上帝的委託，彼此相互伴隨、彼此相互承擔、彼此平等相對。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">2. 上帝的形像與自由</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  上帝的形像並非表現在個人身上，而是呈現在人與人之間的關係當中，由此產生「自由」的概念，因為「人與上帝相像之處在於他是自由的」。<sup>48</sup><span style={cite}>（朋霍費爾，《第一亞當與第二亞當》，138。）</span>人具有上帝的形像，因上帝是自由的，人也是自由的。潘霍華進一步詮釋自由的概念：「因為自由在《聖經》並非人為了自己而擁有的東西，而是人為了他人而擁有的東西。」<sup>49</sup><span style={cite}>（朋霍費爾，《第一亞當與第二亞當》，138。）</span>唯有人經歷到能為他人負責時，才會真正體會到自由，那是完全出於自由的決定，並非受欲望或其他動機所驅使。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  「自由意味著『為了他人而自由』，因為他人將我與他自己聯繫了起來。只有通過與他人的關係我才是自由的。」<sup>50</sup><span style={cite}>（朋霍費爾，《第一亞當與第二亞當》，138。）</span>一般人常把個體的自由與同他人的關係對立，似乎關係帶來束縛，唯有孤立才有自由，但潘霍華卻認為唯有在群體中負責的關係之下，才能使人經歷自由。真正的負責是出於自由的決定，那種自由是純淨、無雜質的，與一般人所謂的自由有別，因為許多表面的自由其實是被欲望驅使，被自我中心、不良習慣等轄制，事實上是有其不得已之處。
                </p>
              </div>

              <div>
                <span className="font-semibold text-slate-700">3. 愛上帝、愛人</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  聖經對愛的詮釋則正是出於自由，如「人為朋友捨命，人的愛心沒有比這個大的。你們若遵行我所吩咐的，就是我的朋友了。」（約15:13-14）約翰福音描述耶穌基督與門徒的關係是朋友的關係，朋友之間最大的特色就是出於自由、心甘情願的關係，而「人為朋友捨命」的愛，更是摒除了任何無可推辭的必然，乃出於自由的抉擇，不同於血緣、利害或報恩關係，而是出於純淨的自由。羅馬書明指這種心甘情願為罪人而死的愛，是來自上帝的愛：「為義人死，是少有的；為仁人死，或者有敢做的。惟有基督在我們還作罪人的時候為我們死，上帝的愛就在此向我們顯明了。」（羅5:7-8）
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  人是藉由面對別人而面對上帝，因為當人面對上帝時，必須藉由面對別人而負起責任。在此意義之下，我既不是屬於別人的，別人亦不是屬於我的，我與別人都是屬於基督的。因此，「我」與「你」都必須透過基督間接地相交，「我」與「你」都是屬基督的，因此你不會是「我的你」，我也不會是「你的我」。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  一九二七年，潘霍華在博士論文《聖徒相通》（<em>Communio Sanctorum</em>）的副標題是「對教會社會學的神學探究」，他想要建立社群神學同時又保存個體，主張「基督作為群體的存在」（Christ Existing as Community）。一方面，他反對「自我中心化」的趨勢，注重「他者」的優先性，因而強調「關係中的他者」；另一方面，又要避免他者被「同化」的傾向，必須「確立他者優先性的界限原則」。<sup>51</sup><span style={cite}>（鄧紹光，《界限與倫理——潘霍華的倫理學》〔香港：浸信會神學院，2006〕，36。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  由於「上帝是人的倫理界限，是『你』，自身是絕對的」。<sup>52</sup><span style={cite}>（鄧紹光，《界限與倫理——潘霍華的倫理學》，38。）</span>這當應用在人與人的關係之中，「於『我』而言，每一人都是『你』，都具有不可侵犯、約化的界限」。<sup>53</sup><span style={cite}>（鄧紹光，《界限與倫理——潘霍華的倫理學》，38。）</span>這是由於每一個人的你，都有來自上帝的你的性格，因為人有上帝的形像。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  如前所述，奧古斯丁主張同樣的關係結構，<sup>54</sup><span style={cite}>（見本書第五章第四節。）</span>人應當在愛上帝裡面去愛人，由於愛上帝不至於經歷破碎傷心，因此在愛上帝裡去愛人絕對不會失望。由於上帝極大而人極小，當人愛上帝時自然會被朝向非自我中心的那端牽動，亦即愛上帝勢必會排除自私自利的自我中心。不過潘霍華的相關論述講得更加透徹，並且賦予現代社會處境，甚至延伸應用到信仰群體。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  潘霍華進一步主張基督作為聖徒團契的中心，基督就在於「我」與「你」的中間。<sup>55</sup><span style={cite}>（Cf. Dietrich Bonhoeffer, Sanctorum Communio: A Theological Study of the Sociology of the Church (Minneapolis: Fortress, 1998), 51-52 (DBWE4: 51-52).）</span>由於「開放」是一種使得我能與你建立關係的條件，「封閉」則是一種使得我仍然是我的條件，在邁向開放建立關係的過程，基督應當居於群體的中心位置：人與人的關係都奠基於人與基督的關係，亦即我與你的關係是透過基督來連結相通，我與你同屬基督；如果人與人的關係是直接連結，難免會有誰上誰下之爭，因此在同屬基督的前提之下，人與人的關係才有可能真正對等，避免因人天性中的占有欲，若非你是我的你，就是我是你的我。當你我同屬基督時，你是基督的你，我也是基督的我，在我們的關係之中，彼此不會逾越自己的限制。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  然而，現實中的教會卻有可能以「小我」（教會自己）取代「大我」（上帝國）。根據一九三〇年出版的《聖徒相通》，其中有一段表達了潘霍華對中產階級教會的憂心。他期待的是建立在福音基礎上的教會，而非一種專屬普羅大眾或中產階級的教會，然而現實中的教會卻往往是中產階級的教會，以致普羅大眾轉身離開教會，因為講道成了服務中產階級在悠閒禮拜天的需要，一味追求美妙的、有學問的、優雅的生活方式，於是教會不再是全民自願參與的教會。因此，潘霍華大聲疾呼，教會應當推動針對普羅大眾的服事，不要讓教會成了中產階級的教會。<sup>56</sup><span style={cite}>（Dietrich Bonhoeffer, Sanctorum Communio, 272-273 (DBWE4: 272-273).）</span>現今的都市教會，常有發展「客製化」來服務中產階級的傾向，潘霍華對教會理想的堅持成為必要的提醒。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">八、總結：基督中心的倫理學</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                潘霍華的倫理神學，建立在把上帝與人的關係落實於時空處境下的考量，見識不凡且格局恢弘。其倫理道德的抉擇，一方面顧及道德原則的完整性，另一方面兼顧時空處境下的彈性應用；一方面尊重上帝的旨意與主權，另一方面呈現人的自由意志。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                處於現代社會潮流中，科技文明逐漸取代聖經的地位，潘霍華卻始終堅持基督中心，即使面對心理學全面的影響也不改變：
              </p>
              <div className={quote}>
                <p className={quoteText}>
                  對於人心的認識，最有經驗的心理學家永遠不如一位生活在十架底下的最單純的信徒。對於什麼是罪，即使是最偉大的心理學家，根據他的洞見、才幹和經驗都不能瞭解。屬世的智慧明白什麼是困難、軟弱和失敗，卻不知道人們的邪惡而遠離上帝。他們也不知道，唯有罪叫人沉淪，也唯有藉著赦罪，人才能得到治療。這些事只有信徒才明白。所以在心理學家面前，我只可以是個病人，但在信徒弟兄面前，我卻敢於承認自己是個罪人。心理學家必須首先探研我的心臟（心），可是卻永遠探研不到內心最深之處。反之，信徒弟兄知道：來這像我一樣，是個罪人；不敬拜上帝；他現在要認罪，要得到上帝的赦免。心理學家看見我，好像沒有上帝一樣；弟兄看見我，是站在耶穌基督的十架下，看出上帝的審判和憐憫。所以在弟兄的認罪中，我們如果覺得自己是那麼的可憐無助，問題不在我們缺少心理學的知識，而是缺少了對釘在十字架上的耶穌基督的愛。<sup>57</sup><span style={cite}>（潘霍華，《團契生活》〔香港：基文，2006〕，132-133。）</span>
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                潘霍華面對心理學潮流高漲的局勢，始終如一地高舉基督中心，認為十字架使基督徒認識屬靈的智慧，明白罪的可怕與影響，遠超過心理學對人的認識，而十架上耶穌基督的愛才能解決罪所帶來的問題。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                以基督為中心的生命，就是以上帝主權為主旋律的生命。一九四四年五月二十日，潘霍華寫信給好友貝特格，潘霍華用「複調音樂」形容理想的生活：「上帝要求我們全心全意地永遠地愛祂，然而這並不是為了損害或減少我們此世的情感，而是作為一種定旋律，而生活的其他旋律則為之提供對應音。」<sup>58</sup><span style={cite}>（朋霍費爾，《獄中書簡》，150。）</span>他甚至把定旋律與其他旋律的關係，套用在迦克敦信經告白中耶穌神人兩性的「不分不合、亦分亦合」，<sup>59</sup><span style={cite}>（朋霍費爾，《獄中書簡》，150-151。）</span>重點是只要定旋律不跑掉或走音，其他旋律就能和諧地配合，呈現美妙的音樂。
              </p>
              <div className={quote}>
                <p className={quoteText}>
                  我們必須有一種良好的、清晰的定旋律。沒有它，就不可能有飽滿的或完美的聲音，有了它，對位聲部就有了堅定的支柱，就不會跑掉或消失，就其本身而言，它就永遠成了一個完美的整體。只有這種複調能夠賦予生活以完整性，同時也向我們保證，只要定旋律保持不斷，就沒有什麼東西會出大錯。……如果分離定要來臨，且伴隨著各種危險，請你不要害怕它或者仇視它，你要把你的信念固定在定旋律上。<sup>60</sup><span style={cite}>（朋霍費爾，《獄中書簡》，151。）</span>
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                上帝主權之下的生命是一個包括不同旋律的整體，眾多旋律圍繞著定旋律，發出美妙和諧的樂聲。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這信是寫給好友貝特格，隨著反抗希特勒的行動愈來愈激烈（一九四四年七月二十日的暗殺事件），潘霍華的危機感也愈來愈強，他設想未來可能的發展，如此說：「如果分離定要來臨，且伴隨著各種危險，請你不要害怕它或者仇視它，你要把你的信念固定在定旋律上。」<sup>61</sup><span style={cite}>（朋霍費爾，《獄中書簡》，151。）</span>這是提醒當面對未來的分離時，逃避或敵視都無法讓人真正免於分離的來臨，唯有全心全意專注於定旋律！
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                潘霍華倫理學的定旋律就圍繞在耶穌基督身上，他主張耶穌基督的形像是倫理道德的理想典範，藉由基督的形像落實在教會裡，而後教會把這形像帶給全世界。潘霍華期待教會呈現基督的形像，要有宣揚福音的心志，把基督的形像帶給全世界，因為基督不只是為了教會，更是為了世界而道成肉身，藉著教會把基督的福音帶給世界。耶穌基督是為人犧牲付出的真實榜樣（腓2:3-11），潘霍華重返德國乃至反抗希特勒，也是如此。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                基督教倫理學是以基督為中心，基督是我的界限，也是我的中心，是我與我之間以及我與上帝之間的中心。<sup>62</sup><span style={cite}>（朋霍費爾，《第一亞當與第二亞當》，45。）</span>基督也是我與你之間的中間者與界限，「我」不能直接達到「你」那裡，從而把你化約成為「我的你」；你我藉著基督互相連結，我們彼此不能逾越基督，因而所有人際關係的中心就是基督。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                以基督為中心的倫理學，就是始終追問耶穌基督到底是誰？今日在世上，耶穌基督是誰？怎樣找到基督？怎樣經歷到基督的真實彰顯？以基督為中心的倫理學，勢必是選擇生命的倫理學。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                潘霍華主張肉體的生命來自上帝的賞賜，人們應當全力維護生命的權利，<sup>63</sup><span style={cite}>（朋霍費爾，《倫理學》，132-133。）</span>他說：「上帝，生命的創造者和主宰，唯有他（祂）掌握著生命的權利。人不需要以自殺來使他的生命稱義。因為他不需要這樣做，因此他也不可以這樣做。」<sup>64</sup><span style={cite}>（朋霍費爾，《倫理學》，144。）</span>據此，他完全無法認同安樂死，因為「毀滅生命就是濫殺，就是謀殺」，「殺死和讓人活命永遠不是等值的決定」，<sup>65</sup><span style={cite}>（朋霍費爾，《倫理學》，136。）</span>他稱自殺行動為「違背良知」，乃至「對良知施暴」。<sup>66</sup><span style={cite}>（朋霍費爾，《倫理學》，209。）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                雖然以基督為中心的倫理學勢必選擇生命，潘霍華卻面對一個兩難的抉擇，他暗示著當社會全面失序，有如車子飛奔衝向人群時，「教會只是聚攏那些為車輪所碾者，還是必須去阻止車輪碾碎他們？」<sup>67</sup><span style={cite}>（朋霍費爾，《倫理學》，277。）</span>潘霍華最終選擇後者——暗殺希特勒的計畫，這似乎與選擇生命相違背，但卻是為了使更多生命得以存活的選擇，而且他自己願意承擔罪責，有如耶穌基督以無罪成為有罪而承擔眾人的罪。他付上了雙重的代價，一方面是這倫理抉擇本身的代價——自己的生命；另一方面則是承擔殺人的罪責——面對上帝審判。這雙重的代價何其沉重啊！唯有耶穌基督的恩典是唯一的盼望。
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
                '潘霍華主張基督教倫理學的核心是「認識身分」（know who）而非「認識技能」（know how）——先問「我在上帝面前是誰」，而非「我如何把事情做好」；「知善惡」本身就是想脫離本源、自己扮演上帝的表現。',
                '責任（Verantwortung）是出於甘心樂意、自由承擔的回應，而非外在職責（duty）；「責任事實上以自由為前提，而自由只能存在於責任之中」，兩者並非對立。',
                '真實的倫理抉擇經常不是在對與錯、善與惡之間，而是在「對與對、錯與錯之間」做決定，這需要冒險與交託，並非人憑己力所能完全掌握，最終仍需交託上帝的恩典與審判。',
                '潘霍華反對康德「不可說謊」的絕對規則，主張在必要時為了承擔對鄰舍的責任而說謊，是自己承擔罪責、而非使說謊正當化，終極的稱義唯獨仰望上帝的恩典。',
                '潘霍華拒絕路德神學的「屬靈屬世二分」（兩個國度），主張「只有一種實在」——上帝的真實與世界的真實在基督裡合而為一，工作、婚姻、政權、教會四項委託都應以基督為中心。',
                '潘霍華選擇參與暗殺希特勒的計畫，是「對而悲愴」的抉擇典型——他自己也承認這與「選擇生命」的倫理立場相違背，卻為了使更多生命存活而甘願承擔殺人的罪責，付出生命與面對上帝審判的雙重代價，唯有仰望基督的恩典。',
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
              <h4 className="font-semibold text-gray-800 mb-2">潘霍華對「負責能力有限」的提醒，對教牧與親職關係有何實務啟發？</h4>
              <p className="text-gray-700 leading-relaxed">
                潘霍華指出，父母、老師、牧者對他人負責時，也必須意識到自己負責的能力是有限的，並且要幫助被關照者明白這一點，否則容易「耗盡心力來為別人負責」，導致悲劇不斷重演。這對今日容易陷入過勞、耗竭的教牧工作者與家長極具參考價值——健康的負責不是無限承擔一切，而是誠實承認界限，同時交託上帝的恩典與對方自身的負責能力。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">潘霍華「中產階級教會」的批判，對今日都市教會的服事型態有何反思？</h4>
              <p className="text-gray-700 leading-relaxed">
                潘霍華在近一百年前就警告，教會若只服務「悠閒禮拜天」的中產階級需要，追求優雅美妙的生活方式，就會把普羅大眾排除在外，不再是全民自願參與的教會。這對今日許多強調精緻化敬拜、客製化牧養服務的都市教會是重要的自我檢視——教會事工的規劃，究竟是真正向所有階層的人敞開，還是不自覺地只服務特定社經背景的群體？
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">潘霍華「對而悲愴」的暗殺抉擇，對今日基督徒面對政治暴力議題的思考有何幫助？</h4>
              <p className="text-gray-700 leading-relaxed">
                潘霍華沒有把參與暗殺希特勒的決定合理化成「絕對正確」，而是誠實承認這是他甘願承擔罪責、面對上帝審判的沉重代價。這種不迴避道德複雜性、不美化暴力抉擇的態度，對今日基督徒討論以武力對抗暴政、極端政權等議題極具參考價值——真正嚴肅的倫理判斷，往往需要在「拒絕簡化答案」與「仍然勇敢做出抉擇」之間找到平衡，而非用簡單的口號取代誠實的掙扎。
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
              '潘霍華主張基督教倫理學問的是「我在上帝面前是誰」而非「我如何做善事」。你如何理解這種從「身分」出發、而非從「行為」出發的倫理思考？',
              '回想你生命中一次「在對與對、錯與錯之間」的艱難抉擇（而非單純的對錯分明），你當時如何做決定？潘霍華的「冒險交託」對你有何提醒？',
              '潘霍華說「不知自己負責能力有限之人，必無法讓被關照者學習負責」。你自己在關心、照顧他人時，是否也曾因為不願承認自己的界限，而讓對方無法真正成長？',
              '潘霍華反對康德「絕對不可說謊」，主張在必要時可以為了保護他人而說謊、自己承擔罪責。你如何看待這種立場？這與你原本對「誠實」的理解有何張力？',
              '潘霍華批判教會可能淪為「中產階級教會」，只服務特定階層的需要。你觀察自己的信仰群體，是否也存在類似不自覺排除某些群體的現象？',
              '潘霍華選擇參與暗殺希特勒，同時承認這是「對而悲愴」的抉擇，需要承擔罪責、仰望恩典。你是否曾面對過類似「必須做卻讓良心沉重」的重大決定？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 讀《獄中書簡》或《倫理學》節選</h4>
              <p className="text-gray-700 mb-2">找時間讀潘霍華《獄中書簡》關於「複調音樂」的那封信，或《倫理學》中「界限與中心」的段落，體會他在極端處境中活出的信仰深度。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 檢視自己「負責能力的界限」</h4>
              <p className="text-gray-700 mb-2">
                誠實列出你目前正在為某人（子女、學生、屬靈跟進對象）承擔的責任，思考哪些部分已經超過你能力所及，需要交託上帝、也放手讓對方學習自己負責。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎵 練習「定旋律」的生活操練</h4>
              <p className="text-gray-700 mb-2">
                本週用潘霍華「複調音樂」的比喻檢視自己的生活——愛上帝是否真正是你生命的「定旋律」，其他一切（工作、關係、休閒）是否作為對應音而不喧賓奪主？
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「上帝啊，求祢幫助我先認識自己在祢面前的身分，而非只汲汲於做對的事。求祢賜給我自由回應的心志，使我在對與對、錯與錯之間的艱難抉擇中，仍願意冒險交託給祢。求祢使我的生命以基督為定旋律，無論順境逆境都不偏離。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
