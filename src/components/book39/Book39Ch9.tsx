import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Flame, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;
const quote = "border-l-4 border-emerald-300 bg-emerald-50 pl-4 py-3 mb-3";
const quoteText = "text-emerald-800 leading-relaxed italic";

export default function Book39Ch9() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-slate-800 to-blue-900 bg-clip-text text-transparent">第九章</h1>
        <h2 className="text-xl font-semibold text-gray-700">追求成聖——衛斯理倫理學</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          「因此，他已將又寶貴又極大的應許賜給我們，叫我們既脫離世上從情慾來的敗壞，就得與上帝的性情有分。」（彼後1:4）
        </p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-slate-50 to-blue-50 hover:from-slate-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-slate-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <p className="text-gray-700 leading-relaxed">
              上帝賞賜的神聖應許，使人們得以盼望脫離世上從情欲來的敗壞，而「得與上帝的性情有分」，原文直譯是「得以成為與上帝性情相通共融者」，「有分」就是「相通共融」（<em>koinonia</em>），意即密切無比的相通——你中有我、我中有你——這應許被衛斯理（John Wesley, 1703-1791）發揚光大，影響深遠。
            </p>
            <p className="text-gray-700 leading-relaxed">
              基督教信仰的進程大約可分成兩個階段，前段為信仰的入口，後段則為信仰的發展狀態。宗教改革時，路德強調前段——因信稱義，他並非反對後段的發展，而是把焦點單單集中在入口，全力主張必得好樹才能結好果子，一心一意地宣揚要成為好樹，卻避談如何結好果子；加爾文做了調整修正，在強調因信稱義的同時，也重視重生、聖化的好果子；衛斯理則進一步在因信稱義後主張追求成聖——與上帝性情相通共融。
            </p>
            <p className="text-gray-700 leading-relaxed">
              當加爾文提到<em>sanctification</em>時，重點在於上帝的作為使人成聖，強調上帝的主權，本書譯為「聖化」；而衛斯理提到<em>sanctification</em>時，重點則在於人的改變，本書譯為「成聖」，突顯人的自由。
            </p>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">一、衛斯理的異象——基督徒生活</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                對路德而言，成為好樹，意即放手信靠上帝，必須放下自己，然而結出好果子卻需要督促自己行出來；這兩者的方向相反且有張力，前者要放下自己、倚靠上帝，人最好什麼都不做而讓上帝來做；後者則要努力結好果子，這需要人的參與、行動。路德強調信仰進程的前段，主張若信上帝則愛人，把信上帝而後結出愛人的好果子視為水到渠成，並未提倡信上帝者應當有好行為，這是由於他所面對的時代四處流行追求好行為、積聚功德，以致他選擇避談後段。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                加爾文則同時重視信仰進程的前段與後段，他認為稱義與好行為不應二分，應從地上與天上兩個角度來觀察。在地上，人經歷悔改、重生、聖化，當人進入信仰就徹底轉身歸向上帝——悔改，並經歷舊生命死亡及新生命興起——重生，而且體驗到自己被分別出來歸屬上帝——聖化；在天上，上帝赦罪、稱義、復和，赦免人的罪，稱罪人為義，使疏離者與上帝和好。這兩者為一體之兩面，天上上帝的作為使人在地上進入信仰，前者為信仰的動力源頭，後者則為信仰的經歷表現。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在加爾文看來，信仰是一個整體，信仰的入口與信仰的狀態不可二分，果子畢竟是連在果樹上，一旦人信靠上帝就進入生命的改變，然而這些改變是來自天上的上帝，悔改、重生、聖化的人是被上帝稱義、被上帝赦罪、被帶領與上帝和好者。不過，從功德陰影下走出來的路德，一心宣揚因信稱義，而避談悔改、重生、聖化。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                衛斯理同樣把信仰的前段與後段做了整合，在早期講章〈新生命〉（New Birth）裡，宣稱「因信稱義」是上帝為人做的寬恕和赦罪，「新生命」則是上帝在人裡面做的更新重生，前者是「上帝為我們做的」（God for us），後者則是「上帝在我們裡面做的」（God in us），兩者並沒有先後之分，乃同時發生。<sup>1</sup><span style={cite}>（John Wesley, "The New Birth", The Works of John Wesley, vol.6 (Grand Rapids: Baker, 1991, 1998), 65-66.）</span>這與路德所主張的若信上帝則愛人，以及加爾文所主張的信仰不應二分為前後階段，並無差異。不過，衛斯理的神學思想有其階段性發展，他愈來愈多重視上帝在我們裡面所做的——新生命這一端，亦即強調被稱義者應當具有新生命的表現。他把焦點從「上帝為我們做的」（God for us）逐漸轉成「上帝在我們裡面做的」（God in us），尤其是後期衛斯理常常宣揚「成聖」且強調「完全」（perfection）——完全成聖，有如把天平法碼往人的改變那一端移動。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                若以果樹與果子的合一為基礎來做觀察，路德單單強調因信稱義，呈現果樹自然生出果子；加爾文以天上與地上同時發生，呈現果樹與果子同時並存。早期衛斯理把因信稱義與新生命連結一起，與路德、加爾文沒有差異，但後期則傾向把稱義當作初階，新生命則為進階，走上初階者未必會達到進階，因此應當強調追求進階才算完全。衛斯理的教導與神學，帶給基督徒終身追求成長的動機，也使得復興運動帶有強大的動力，不過卻可能造成一些副作用，就是對因信稱義打折扣，認為單單信靠還不夠，仍須不斷努力爬升，追求完全。
              </p>
              <p className="text-gray-700 leading-relaxed">
                畢竟衛斯理所面對的時代與路德、加爾文不同，一方面當時的英國處於新舊衝突、階級矛盾、社會瀕臨解組的情況，有如一七八九年爆發法國大革命之前的狀態；另一方面，重視理性的啟蒙運動普遍興起，帶來啟發人們追求理性、批判傳統、嚮往自由的動力。衛斯理針對當時社會的混亂失序宣揚耶穌基督的福音，同時又有重建社會秩序的異象，他巧妙地把追求自由的動力與追求完全成聖的動力結合。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">二、從追尋到大復興</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                衛斯理的曾祖父與祖父都是「非國教者」（Dissenters），亦即聖公會體制外的異議者。由於伊莉莎白女王統治時採用單一國教制度，僅存一種合法的教會體制——聖公會，而那些抗議不從者就被稱為「持異議者」，亦即「非國教者」，如浸信會、長老會、公理會等。後來衛斯理的父親回歸聖公會，至於他自己也終身都在聖公會裡。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                衛斯理的父親在聖公會體制內抑鬱不得志，脾氣嚴苛而不可捉摸。母親蘇撒拿（Susanna Wesley, 1669-1742）則為非國教牧師的女兒，<sup>2</sup><span style={cite}>（參見黃玉麟，《蘇撒拿傳》〔香港：基督教循道聯合衛理教會，1998〕。）</span>生了十九個孩子，存留三個兒子和七個女兒。<sup>3</sup><span style={cite}>（黃玉麟，《蘇撒拿傳》，58。）</span>她才華洋溢，具有牧養恩賜，擅長管教子女。衛斯理一生都非常勤奮，因受母親認真管教且培育信仰，從小就被培養要建立好習慣。儘管蘇撒拿子女眾多，衛斯理小時候卻在火災中神奇逃生，因此母親對他有特別的負擔，堅信上帝要用這個孩子。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                衛斯理的學習與成長，與牛津大學有密切關係，古老的牛津大學在英國傳統中有特別的地位，是聖公會培育人才的重鎮，若是非國教者想要學習神學必須另圖發展。衛斯理與弟弟查理．衛斯理（Charles Wesley, 1707-1788）一起在牛津大學讀書，當時國教體制下的牧師薪資充足，他們兄弟經濟上並不缺乏，找了一個年輕人作隨身書僮。這位書僮就是大名鼎鼎的懷特腓德（George Whitefield, 1714-1770），由於出身窮苦家庭，所以先到大學作書僮，而後才漸漸轉成學生，隨著他與衛斯理兄弟原有的主僕關係，這多少影響到後來衛斯理與懷特腓德的關係。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                一七二五年，衛斯理在父親的勉強下受按立成為會吏，會吏是處於預備成為正式傳道人的階段，通常擔任主教的助手，他即在一七二七年返鄉協助父親牧會。一七三五年，他在父親去世後，前往美國傳道，在美期間遭遇很大的挫折。由於剛剛起步、參與服事的經驗不足，只是按照規則嚴格執行聖公會規矩而受挫，坦承自己有許多缺點：不信、驕傲、嚴重的健忘、精神輕浮浪漫。<sup>4</sup><span style={cite}>（衛斯理，《衛斯理約翰日記》，許碧端譯〔香港：基文，1956〕，33。）</span>最嚴重的是，他醒悟到自己根本未曾真正體驗到福音，卻在傳揚福音，於是感慨地反省說：「我到美洲想叫別人得救，而自己卻還沒有得救，我這樣說並不是瘋狂，而是莊嚴地說誠實話。」<sup>5</sup><span style={cite}>（衛斯理，《衛斯理約翰日記》，35。）</span>這樣的反省引發了他熱心追求信仰的動機。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                一七三八年，他在返國的船上經歷第一次危及生命的衝擊，遇到狂風大浪，船身有傾覆的危險，所有人都驚慌失措，卻有一群基督徒非常平和地唱詩禱告，令人感受到他們具有堅定的信仰，那必定出於其親身體驗，那群人屬於莫拉維亞弟兄會。這件事給衛斯理留下極其深刻的印象。返回英國後，一七三八年五月二十四日，衛斯理參加一個在雅德門街（Aldersgate）的莫拉維亞弟兄會聚會，親身體驗到悔改重生，他在日記裡記載說：
              </p>
              <div className={quote}>
                <p className={quoteText}>
                  晚上我很勉強地去參加一個在亞得門街（雅德門街）的聚會，會中有人宣讀路德為羅馬書所寫的序文，八點四十五分左右，當他講論到藉著對基督的信，上帝在人心裡所施行的那種改變，我覺得心裡異樣溫暖，覺得自己確已信靠基督，唯靠基督得救；並且得到一個保證，祂已洗清我一切的罪，且已拯救我脫離罪與死之律。<sup>6</sup><span style={cite}>（衛斯理，《衛斯理約翰日記》，46。）</span>
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                從這段文字可見，衛斯理經歷到進入信的關鍵，亦即路德所宣揚的因信稱義，這個體驗使他熱心追求新生命，當時似乎從稱義到成聖並無太大區別。在此之前，他似未曾親身體驗過信仰，那天他在雅德門聚會中則確實進入了信仰，這個經歷清楚標誌出他生命前後處於不同的狀態，從原本在信之外，轉成在信裡面。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                學者後來對這段經歷的詮釋不一，因衛斯理在這次體驗之後，早期還經常回溯這段經歷，後期就完全沉默了，似乎對此經歷有不同的了解。<sup>7</sup><span style={cite}>（何威達，《思主所思、行主所行：衛斯理的救恩教牧神學》〔香港：德慧，2017〕，18-45。）</span>何威達嘗試從不同重生模式的角度來詮釋，主張衛斯理並非經歷一般福音派所教導的「徹底轉向之瞬間模式」，而是另外一種「生命成長之漸進模式」。<sup>8</sup><span style={cite}>（何威達，《思主所思、行主所行》，44。）</span>這種觀點有助於說明他的後續發展，因為特殊經歷有如瞬間的頓悟，焦點集中在生命啟蒙的那一刻，衛斯理的生命卻是在不斷成長中漸漸成熟，他對雅德門經歷的了解也隨著生命成長而改變。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                畢竟雅德門經歷只是衛斯理長期追求成聖的起站，愈到後期他的生命歷程離雅德門經歷愈遠。當他後來發展出追求完全成聖的教導，從這架構回顧起來，雅德門經歷只是追求成聖過程的一小段，儘管當時有很大的突破性成長，就整體而言畢竟只是一小部分而已。
              </p>
              <p className="text-gray-700 leading-relaxed">
                從因信稱義的角度來看，雅德門經歷使衛斯理體驗到從上帝而來的力量，有如找到問題的解答一般，讓他從門外進入門內，這經歷勢必是決定性的事件；再從追求成聖的角度來看，信仰的成長一直向前邁進，還有很長的成長歷程，以致雅德門經歷這出發點就變得沒有那麼決定性了。對衛斯理雅德門經歷的詮釋畢竟難有終極答案，如果從衛理宗傳統的角度來看，傾向不認同因信稱義角度的詮釋，因為太像路德傳統了；寧可突顯追求成聖的角度，而與路德傳統有別。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">三、倫理道德思想</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                以下從背景、特色、關懷三方面說明衛斯理的基督教倫理道德思想：
              </p>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 背景</span>
                <p className="font-semibold text-slate-800 mb-2 mt-3">▲衛斯理的四柱論（Wesleyan Quadrilateral）</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  傳統衛斯理神學主張四個基礎，稱為「衛斯理的四根柱子」：聖經、傳統、理性、經驗。聖經最高，其次是傳統；與一般教會所主張不同，在於把理性和經驗列入其中，這應當與啟蒙運動有關。然而由於衛斯理不斷傳講追求成聖，並未陷入過度尊崇理性的問題，加上經驗被正式收納進來，不但可平衡理性，而且使衛斯理傳統的行動力一向非常旺盛。
                </p>
                <p className="font-semibold text-slate-800 mb-2">▲反對預定論</p>
                <p className="text-gray-700 leading-relaxed">
                  衛斯理反對加爾文的預定論，自認為是亞米紐斯主義者，極力強調自由意志，發行了《亞米紐斯雜誌》。不過，並未見過衛斯理研讀或引述亞米紐斯（Jacobus Arminius, 1560-1609），很有可能他宣稱的亞米紐斯主義，只是隨著當時對「反對預定論」的通俗概稱，而非嚴格的學術用法。重點是他極力強調自由意志在得救過程中所扮演的角色，這使他能極力鼓吹教會大復興所需要的許多行動，呈現勇於行動的特質。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">2. 特色</span>
                <p className="font-semibold text-slate-800 mb-2 mt-3">▲積極行動的人生</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  衛斯理著名講章〈錢財的利用〉中的三段主題，可作為他對基督徒生活看法的總結：<sup>9</sup><span style={cite}>（《衛斯理講道集》，225-242。）</span>
                </p>
                <div className="border-l-4 border-slate-300 pl-4 py-2 mb-3 bg-slate-50">
                  <p className="text-gray-700">(1) Gain all you can　盡力去獲得</p>
                  <p className="text-gray-700">(2) Save all you can　盡力去儲存</p>
                  <p className="text-gray-700">(3) Give all you can　盡力去付出</p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  這三個主題，從獲得、儲存到付出，生動地傳達他一生奉獻自己、服事上帝的熱情。另外，他寫了一段「基督徒生活指導」（Rule for Christian Living）：
                </p>
                <div className="border-l-4 border-emerald-300 bg-emerald-50 pl-4 py-3 mb-3 space-y-1">
                  <p className="text-emerald-800">Do all the good you can　盡心盡力行善</p>
                  <p className="text-emerald-800">By all the means you can　用所有的管道</p>
                  <p className="text-emerald-800">In all the ways you can　以所有的方式</p>
                  <p className="text-emerald-800">In all the places you can　於所有的地方</p>
                  <p className="text-emerald-800">At all the times you can　在所有的時間</p>
                  <p className="text-emerald-800">To all the people you can　對所有的人們</p>
                  <p className="text-emerald-800">As long as ever you can　終生不改其志</p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  任何人見到這般積極的生活態度，必定讚嘆這是何等勤快的生活動力，一切都追求盡其所能！衛斯理表達過他對錢財更加明確的態度：
                </p>
                <div className={quote}>
                  <p className={quoteText}>
                    因為我看金或銀像糞土和渣滓一樣；我把它踐踏在腳底下，我（不是我，而是上帝在我裡面的恩典）當它是街上的汙泥。我不愛慕它，不尋求它，惟恐它要來黏著我，使我在靈魂歸到上帝那裡之前，不能擺脫。誠然，金錢必須經過我的手；但我必小心（上帝是我的幫助）使不義的錢財只是經過而已；而不是停留下來。當上帝召我時，但願在我這帳棚裡不發現一點點那個可咒罵的東西。你們這些自以為已發現了我所要留給繼承人的財寶的人請聽：如果我死後留下了十鎊（在還債以後；在我的書籍以外），你和眾人都可以作證攻擊我，說我生前死後是賊是強盜。<sup>10</sup><span style={cite}>（衛斯理，〈幾句誠懇的話〉，《衛斯理約翰日記》，633。）</span>
                  </p>
                </div>
                <p className="font-semibold text-slate-800 mb-2">▲追求完全成聖</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  衛斯理喜歡引用彼得後書一章4節，主張在今生今世追求成聖，這不但是可能的，而且是必要的，他說：
                </p>
                <div className={quote}>
                  <p className={quoteText}>
                    這樣你每個時刻都可以達到成聖；以上述的方法追求；以善行，就是你們「在基督耶穌裡被新造所要行的」追求。這並沒有什麼危險，由於這個盼望，你縱使不更好，也不至更壞。即使你對你所盼望的失望，你仍然無所損失。因信而盼望，盼望成聖，現在就要有此成聖的盼望，即使此盼望讓人失望，其結果也不會太差。<sup>11</sup><span style={cite}>（衛斯理，《衛斯理約翰日記》，648-649。）</span>
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  身為英國人的衛斯理很務實地說：「由於這個盼望，你縱使不更好，也不至更壞。即使你對你所盼望的失望，你仍然無所損失。」一方面他的期待非常高遠，愈到後來卻愈務實：「因信而盼望，盼望成聖，現在就要有此成聖的盼望，即使此盼望讓人失望，其結果也不會太差。」衛斯理其實沒有那麼嚴格要求，他並未把話說滿，鼓勵大家懷著完全成聖的盼望，就是做不到也會比現在的情況好，結果必定是有所進步。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  有時衛斯理宣講完全成聖非常積極，給人的感覺是一定能夠做到，或許是出於講道修辭，他確實強調一定做得到，而且「每個時刻都可以達到成聖」，然而又說「由於這個盼望，你縱使不更好，也不至更壞」、「即使此盼望讓人失望，其結果也不會太差」。大致上，衛斯理把「完全」當作「一種過程」，而非「一種已經完成的狀態」。<sup>12</sup><span style={cite}>（Theodore Runyon，《新的創造——當代衛斯理神學》，林瑜琳＆曾念粵譯〔新北：聖經資源中心，2014〕，313。）</span>「完全」並非「一種絕對的完全」，乃是一種「由聖靈所激勵的完全的愛」，而且是「一種關係」，「使得關係完全的乃是一種盟約的承諾」。<sup>13</sup><span style={cite}>（Theodore Runyon，《新的創造——當代衛斯理神學》，336-337。）</span>如此一來，就立約者上帝的承諾而言確實是完全，然而就現實中領受承諾的人而言，則是邁向完全的過程。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  衛斯理於一七七七年完成《基督徒完全的簡要說明》（<em>A Plain Account of Christian Perfection</em>）且定稿，回顧自一七二五至一七六五年這四十年以來，對「完全」的看法大致如下：<sup>14</sup><span style={cite}>（John Wesley, A Plain Account of Christian Perfection (London: Epworth, 1983). 中譯參照：衛斯理，《基督徒的完全》，毛衛東譯〔台北：大光，1994〕。）</span>
                </p>
                <div className="border-l-4 border-slate-300 pl-4 py-2 mb-3 bg-slate-50 space-y-2">
                  <p className="text-gray-700">(1) 全心全意愛上帝與愛人。<sup>15</sup><span style={cite}>（John Wesley, A Plain Account of Christian Perfection, 12.）</span></p>
                  <p className="text-gray-700">(2) 不犯罪，免除惡念與脾氣，在基督裡藉著信，潔淨內心，好樹結好果子。<sup>16</sup><span style={cite}>（John Wesley, A Plain Account of Christian Perfection, 19.）</span></p>
                  <p className="text-gray-700">(3) 基督內住，以基督的心為心，免於驕傲、欲望、憤怒，不再追尋己意，乃尋上帝的旨意，為罪人憂傷。<sup>17</sup><span style={cite}>（John Wesley, A Plain Account of Christian Perfection, 20.）</span></p>
                  <p className="text-gray-700">(4) 完全的拯救可能是瞬間的（instantaneous），也可能是漸進的（gradual）。<sup>18</sup><span style={cite}>（John Wesley, A Plain Account of Christian Perfection, 24.）</span></p>
                </div>
              </div>

              <div>
                <span className="font-semibold text-slate-700">3. 關懷</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  衛斯理對「成聖」有一個簡單的詮釋，就是愛上帝、愛人。他把追求成聖的方向引導到服事方面：「基督的福音唯獨關懷社會，在社會成聖之外，別無其他成聖。」（The Gospel of Christ knows of no religion but social. There is no holiness but social holiness.）<sup>19</sup><span style={cite}>（Gordon S. Wakefield, Methodist Spirituality (Peterborough: Epworth Press, 1999), 16.）</span>一切的成聖都是社會性的，必須在人群當中實現成聖。這句話有如說，基督信仰不容許脫離社會，一切成聖都是藉由在人群中的服事而展現。由於非常強調參與服事，他對當時的基督徒帶來極大的挑戰。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  在衛斯理大復興時，信徒除了被鼓勵傳福音之外，還衝進酒吧把酗酒的人拉出來，要他們不再喝酒；到貧民區去把小孩子拉出來，藉由安排上課教育他們，使他們不至於因不識字造成社會問題。他鼓勵信徒四處做慈善工作，為行在人群當中實踐成聖，反對神祕主義退到曠野的呼籲而把基督教當作個人的宗教，這並不是說他不主張內在靈修操練，而是強調一切靈修操練都必定指向社會性服事。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">四、生命經歷</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                以下從一生見證、組織天分、生活挫折三方面，呈現衛斯理實踐其倫理道德思想的生命經歷。
              </p>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 一生見證</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  衛斯理的一生見證非常人所能及，付出的代價十分高昂。騎馬講道四十年來從不間斷，總共走了二十萬英里（三十二萬公里），講道四萬次，平均每年騎馬一萬公里，每天大約講道三次。經常清晨四點起床，一小時靈修，五點主持禱告會，用過早餐後就騎馬上路，邊騎邊讀書，逢人就下馬傳福音。晚上先照顧馬之後才吃飯，參加聚會，聚會完後再寫書，直到就寢。衛斯理出版的大小著作共計二百三十種，其中除神學之外，還包括許多希臘文及醫學方面的書，他的研究興趣廣泛，這部分受到啟蒙運動影響，對於追求知識一直都非常熱切。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">2. 進入人群</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  衛斯理成功地把基督教信仰帶入群眾生活裡，這是由於他率先進入普羅大眾當中，「從牛津大學講師、正規聖職人員的身分，徹底地變成一個與英國低下階層憂戚與共的人物」。<sup>20</sup><span style={cite}>（歐德來（Albert C. Outler），《衛斯理約翰講章：緒論與導讀》，鄭尚恩譯〔香港：世界循道衛理宗華人教會聯會，2010〕，15。）</span>在尚未推動教會復興之前，他就說：「我看全世界是我的牧區；我的意思是說，無論在什麼地方，我都覺得自己責無旁貸，要向所有聽的人宣講救恩好消息。我知道，這是上帝呼召我去完成的任務。我也深信上帝的福氣隨之而來。」<sup>21</sup><span style={cite}>（歐德來（Albert C. Outler），《衛斯理約翰講章：緒論與導讀》，17。）</span>這個「全世界是我的牧區」的願望，必然使他向全世界各種人都願意開放自己，有如保羅的自述：「向什麼樣的人，我就作什麼樣的人。無論如何，總要救些人。」（林前9:22）這樣的願望是衛斯理放下身分、地位、身段，進入低層社會群眾的重大推動力量。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">3. 組織能力</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  衛斯理本人非常擅長組織，以致復興運動發展成為全面性的復興運動，在英國甚至影響了政治、道德與社會層面。他設十二人為一班，有一位班長領導，層層而上，定時聚集，並且召開年會，以軍隊的組織方式，編排和訓練信徒。「班」亦即小組，每一位小組員都有識別記號，分區劃分清楚，發揮極其可觀的動員力量。
                </p>
              </div>

              <div>
                <span className="font-semibold text-slate-700">4. 挫折中成長</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  衛斯理呈現幾近完美的一生見證，但他仍有生活的失敗挫折。任何人的生命都難免有弱點，衛斯理的婚姻問題也不例外。他曾經歷一段幾乎論及婚嫁的交往，不過對方在衛斯理與一位同工之間猶豫不決，最後衛斯理未能如願與愛慕的對象結婚。<sup>22</sup><span style={cite}>（杜羅伯（Robert G. Tuttle, Jr.），《吞噬黑暗的烈焰——成聖使徒衛斯理（下）》，蔡捷安譯〔台北：橄欖，1994〕，135-140。）</span>此後衛斯理似乎無意再經過漫長的等待過程，他的結婚決定有些匆促，許多人甚至不知道。一七五一年，衛斯理與茉莉．凡瑟里（Molly Vazeille）結婚，婚後夫婦關係不睦，一七七一年（婚後二十年），夫人離開他，衛斯理說：「我並沒有離棄她，也沒有將她送走，但也永不會喚她回來。」<sup>23</sup><span style={cite}>（衛斯理，《衛斯理約翰日記》，294；參見杜羅伯，《吞噬黑暗的烈焰——成聖使徒衛斯理（下）》，153。）</span>再過十年之後，夫人去世，衛斯理並未前往參加葬禮。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  原本衛斯理相信傳道人應當單身，但後來這個看法驟然轉變，在一七五一年二月二日的日記，這麼寫著：
                </p>
                <div className={quote}>
                  <p className={quoteText}>
                    許多年來我保持獨身，因為我相信獨身比有家室更能有效地為上帝工作。感謝上帝幫助我做到這點。現在我卻同樣深切地相信依目前的情形說，我若結婚，將比獨身生活更能為上帝工作。在這一清楚的信念下，再加友人的勸告，幾天之後，我就進入結婚的生活了。
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  兩週過後——二月十八日，他就結婚了，似未有足夠的心理預備就進入婚姻。當時的衛斯理四十八歲，凡瑟里則是四十一歲的寡婦，雙方都到了不容易調整自己的年齡，彼此之間的了解與溝通發生困難。加上衛斯理長年旅行傳道的生活不定，對於一位家庭主婦而言，實在難以容忍，以致他在服事中與別的女性同工旅行或通信，都成為婚姻衝突的來源。<sup>24</sup><span style={cite}>（有一位友人見證說，曾見到凡瑟里拉著衛斯理的頭髮走過地板。John Pollock, John Wesley (Wheaton: Victor Books, 1989), 240.）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  這場婚姻對於欣賞衛斯理的人而言，很難接受且不願多談，其實連衛斯理自己都對這段婚姻後悔：「有時候我真是希望我們從沒有相遇過，而我確定她一定也有相同的感覺。」又說：「我並沒有多少可後悔的事，若是有，或許就是關乎我那可憐的妻子了。她很不幸地與一個人結了婚，而這人或許已與一個目標結婚了。」<sup>25</sup><span style={cite}>（杜羅伯，《吞噬黑暗的烈焰——成聖使徒衛斯理（下）》，153。）</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">五、後續發展</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                衛斯理領導的復興運動不只在教會史上重要，在一般歷史上也影響深遠，因為這場復興運動不只是靈性復興運動，而且也是社會改革運動。正如他本人的信仰特質裡外兼具，既有內在的靈修操練，亦有外在的服事和愛人的行動力，兩者匯聚成整合靈性更新與社會福音的復興運動。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                哲學家懷海德（Alfred North Whitehead, 1861-1947）以過程哲學聞名於世，他並非基督徒，原本是英國學者，後來大部分時間都在美國哈佛大學任教。基於他的英國背景以及對英國歷史的熟悉，他曾經談到這段歷史，認為十八世紀的英國社會動盪不安，如果不是衛斯理復興運動帶來社會改革和心靈更新的力量，一定會發生像法國大革命般的悲劇。<sup>26</sup><span style={cite}>（懷海德（Alfred North Whitehead），《懷海德對話錄》〔台北：志文，1974〕，113。）</span>法國大革命最後的成果被劊子手——羅伯斯比爾接收，為人民爭取權利的革命運動轉成了殺害貴族、國王與反對者的大屠殺，可見懷海德從世俗歷史的角度給衛斯理極高的評價。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                衛斯理的最大貢獻是開發使人在信心上不斷成長的動力，藉由服事與靈修追求完全成聖。衛斯理給基督徒普遍帶來一種追求成長的熱切，信主只是來到起跑點，接著就要全力奔跑；信主不是結束，而是開始。這股動力極其強大，以下介紹其後續影響。
              </p>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 形成宗派</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  衛理斯本人並不想從聖公會分離出來，他一直都是聖公會的傳道人。不過在他去世那年（1791），有一群追隨者從聖公會出走，成立了衛斯理傳統下的教會（或稱循道會、循理會），其中最大的是「聯合衛理公會」，比較保守的「自由循理會」（Free Methodist），在台灣稱為「中華循理會」。聯合衛理公會有很長一段時間是美國最大的基督教宗派，原有四千多萬信徒，不過近年來與許多基督教宗派同樣走下坡。在台灣，中台神學院屬於聖教會，聖光神學院屬於中華循理會，衛理神學院則屬於衛理公會，都是代表衛斯理傳統的神學院。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">2. 復興運動的發展</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  觀察美國兩次的教會復興運動，頭一次以加爾文神學為主導，第二次以衛斯理神學為主導，第二次大復興的主要人物芬尼（Charles Finney, 1792-1875）原本是長老教會的牧師，後來放棄加爾文神學而接受衛斯理神學。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  一般談論教會復興史都會提到衛斯理的貢獻，然而對於這段復興歷史的解讀不應單單集中在他一人身上，因為還有神學立場與他不同的懷特腓德。路德和加爾文都非常重視上帝的主權，懷特腓德承襲這個神學傳統；衛斯理則把焦點轉向人的自由，後來與主張預定論的懷特腓德發生衝突。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  在發生預定論爭論之後，懷特腓德把復興運動領導權完全讓給衛斯理，自己則前往美國服事，與愛德華滋（Jonathan Edwards, 1703-1758）共同帶動了美國第一次大復興運動，亦即把英國的復興運動火種帶到美國。這兩位優秀的神學家，愛德華滋是美國內戰前最偉大的神學家，無人能取代他的地位；懷特腓德則是講道史上公認最會講道的人，講道的感染力十足，雖然年輕時有些口吃，為了矯正去學戲劇，因此他的講道不只內容豐富，表達力道強勁，講道時自己完全融入，掏心掏肺、耗盡心神的傳講，他的講道力量有加爾文強勁的神學思想支撐。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  芬尼的第二次大復興在深度上不若第一次大復興，不過在廣度上十分成功。當時正值美國西部開拓時期，衛理公會使用開創性方法，差派信徒前往建立教會，讓信徒有可能當傳道人，得以建立大量的教會。一般對芬尼的神學評價不一，因為他談論帶領聚會、講道的實務技巧，勇於採用新方法，比如聚會時在台前擺一張「焦慮長椅」（Anxious Bench），呼召人走出來，讓那些為了得救問題感到焦慮的人可以被代禱，<sup>27</sup><span style={cite}>（貝米勒（Basil Miller），《芬尼傳》，徐亞蘭譯〔台北：以琳，1988〕，148-149。）</span>有些人擔心這些做法是否有過度重視技巧之嫌。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">3. 聖潔運動與靈恩運動</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  衛斯理追求完全成聖的動力不只發生在十八世紀的衛斯理大復興，來到十九世紀衛斯理傳統在美國又爆發了聖潔運動，繼續不斷地追求聖化，這聖潔運動形成的教會如拿撒勒人會，還有一些以「聖潔會」、「聖教會」為名的教會也與聖潔運動有關。在台灣比較有名的是聖教會，是日本遠東宣教會在台灣所形成的教會。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  十九世紀的聖潔運動埋下了二十世紀靈恩運動的種子，最早的五旬節運動以及隨後參與靈恩運動的教會，大多比較偏向衛斯理傳統。一般以為聖潔運動是靈恩運動的前身，而衛斯理所傳承的教會確實比較傾向靈恩運動，通常以因信稱義為入門，需要不斷地追求成聖，因而容易轉成熱切追求靈恩。由於衛斯理本身是實踐者，並非神學理論的奠基者，因此衛斯理的信仰傳承，比較容易呼應擅長行動的靈恩運動。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  衛斯理極力追求「完全」，開發了後來在這傳承影響下，基督徒繼續追求成長的動機，比如追求Christian holiness（基督徒聖潔）、entire sanctification（全然聖化）、perfect love（完全的愛）、the baptism with the Holy Spirit（聖靈的洗）、the second work of grace（二度恩典）、the second blessing（二度祝福）。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  然而，這些語言很可能造成上帝恩典有分階段的印象，比如「二度恩典」和「二度祝福」暗示著進升的階段，導致在神學上開始與因信稱義分道揚鑣，因為主張上帝的恩典與祝福是由低階到高階、初等到高等，以致造成一種應當力求完美的壓力。其實宗教改革只傳講一種恩典——得救的恩典，一種祝福——得救的祝福，藉由信領受這恩典和祝福，卻不必言及高低、上下之分。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  衛斯理帶來強大的追求動力在歷史中繼續發展，推動了十九世紀美國的聖潔運動，以及二十世紀世界各地的靈恩運動。靈恩運動開始運用新的語言，把「完全成聖」稱為「二度祝福」，主張基督徒必須經過兩個階段，因信稱義只是「一度祝福」，應當繼續追求「二度祝福」，以致得救好像成了一種無止境的追求。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  關於「二度祝福」，五旬節教會以「方言禱告」、「舌音禱告」，作為聖靈充滿、聖靈澆灌的憑據，視之為「第二祝福」的記號。但如此一來，卻把得救恩典複雜化了，只有「一度祝福」者不過是初階信徒，單有信心仍然不夠，還要追求「二度祝福」，好成為進階的信徒，結果人必須主動追求成為信仰的主導因素。事實上，聖經把「方言」列在聖靈恩賜當中，既然是聖靈的賞賜（原意「禮物」），就無法強求。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  有些基督徒追求許久也未得著方言恩賜，若是未能得著這「二度祝福」，就被當作初階基督徒的話，這就帶來新的問題——以初階者為不完全的基督徒，甚至可能被視為尚未得救，為了得救起見必須不斷努力追求。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  第一波靈恩運動——五旬節運動，其中形成最大的教會是神召會（Assemblies of God）。神召會在發展過程中有內部爭議，亦即是否應當把追求聖靈當作第二祝福？早期五旬節運動領袖之一的杜罕（William Howard Durham, 1873-1912）具有浸信會（加爾文神學）背景，經歷方言後參與五旬節運動，不過杜罕對衛斯理所傳承的「三階段拯救過程」（a three-stage salvation process）難以適應，亦即認定因信稱義之後的第二階段是追求成聖，而且還有第三階段領受聖靈的洗。杜罕在大部分帶有衛斯理神學色彩的靈恩運動領袖當中，發出比較接近宗教改革的聲音，強力主張信就得救，追求聖靈則是「額外的祝福」，而非得救的先決條件。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  杜罕發展「拯救完成教義」（the Finished Work doctrine），主張成聖在歸信時就已開始且在恩典裡成長，亦即得救與成聖在加略山的十架上已一次完成了，於是主張把聖靈的洗僅僅當作得救後額外的祝福，這已回到宗教改革唯獨恩典的基本立場。<sup>29</sup><span style={cite}>（賴瑞．馬汀（Martin, Larry），《艾蘇薩街之火：威廉．西蒙的一生與事奉》〔台北：天恩，2004〕，282-285。）</span>後來神召會主張聖靈做工在所有基督徒裡面，聖靈的洗是從上帝而來的禮物，不以人的努力行善或追求完全為前提，<sup>30</sup><span style={cite}>（The Spirit Already Indwells All Believers. It is important to stress that the Holy Spirit is not external to a believer not yet baptized in the Spirit. The Spirit works internally in a repentant and believing person to effect the new birth; He does not then depart, to come back at the time of the infilling. Spirit-baptism is an overwhelming experience of the already indwelling Spirit; it is called by some a "release" of the Spirit. Baptism in the Spirit is a Gift. By definition, a gift is not earned. If it were on the basis of the person's merit, the unanswerable question would be, "What should be the extent of the person's worthiness?" Or, "How 'perfect' must one be before qualifying for the experience?" It is possible for a sincere seeker to be so preoccupied with a sense of personal unworthiness that the Spirit cannot flow freely through that person.（https://ag.org/Beliefs/Position-Papers/Baptism-in-the-Holy-Spirit）</span>這使得神召會與其他宗教改革後的基督教會沒有太多隔閡。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  不過杜罕卻被當時五旬節運動的領導者逐出教會，後來因病去世，又被說成遭受天譴咒詛。就長遠發展而言，杜罕成了一位無名英雄，他使神召會回到宗教改革的立場，而與其他基督教會相通，而且還是當今發展迅速的教會。
                </p>
              </div>

              <div>
                <span className="font-semibold text-slate-700">4. 勤儉致富</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  美國最大的基督教會是聯合衛理公會，經濟力量雄厚，包括幾所著名的大學，如：杜克大學（Duke University）、埃默里大學（Emory University）、南方衛理會大學（Southern Methodist University）、波士頓大學（Boston University）與德魯大學（Drew University），這些輝煌成果與衛斯理的勤儉精神有關。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  衛斯理的動力——盡力去獲得、盡力去儲存，若能發揮得淋漓盡致，必定造成極大的影響力。不過，畢竟獲得與儲存比起付出更加合乎人的本性，一旦失落「付出」的精神，累積財富而不再付出時，整個方向就偏差了。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">五、結論：因信稱義為樞紐</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                宗教改革神學的焦點在於「因信稱義」，主要藉由路德的宣揚發揮影響力，加爾文接續發揚光大，稱這教義為基督教的樞紐。<sup>28</sup><span style={cite}>（Institutes, 3.11.1.）</span>基督教會主張因信稱義，人在成長過程中，縱使信主後的人生仍有起落，但「相信」是一個被上帝提升的轉捩點，得救則建立在上帝的義，因為在相信的那一剎那，得救就已經歸與相信者並使其成為上帝的兒女；縱使生命仍有起起落落，上帝的恩典卻始終不改變，並不需要有太多焦慮，得救的確據在於上帝而不在於自己。
              </p>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 路德</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  路德把所有得救的確據都交在上帝那一邊，這是放下人的自由的信靠。當人面對律法時，明白自己不合乎上帝的標準，只能全心全意投靠上帝，恩典的力量足以稱罪人為義人，釋放人得以自由自在地去做好行為，如同好樹結出好果子。路德也談自由，然而是在信的前提之下，有「基督之下，萬人之上」的自由，卻並非來自人的自由意志，因為那只能處理日常生活的層次，有關得救的層次唯有出於上帝恩典的賞賜，這恩典所激發出來的力量可以達到「為了基督，萬人之下」的服事精神。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">2. 加爾文</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  加爾文與路德同為宗教改革者，但是神學發展方向有所不同。路德的因信稱義並不改變原有的生活架構，只是經歷到罪人被稱義——成為蒙恩的罪人，亦即堅守原有的位置，不論做任何工作都是上帝的呼召。由於路德觀點缺少積極性，只是被動承接外界環境給予的位置，加爾文則把因信稱義積極化，他相信上帝對每個人都有不同的呼召，因此經歷因信稱義者必須尋找呼召，追求在短短的一生中回應呼召且榮耀上帝。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">3. 衛斯理</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  衛斯理開發出強大的追求動力，不論推動靈修，或者入世服務，都要一生追求完全。衛斯理有強大的動機要繼續成長直到完全，一方面他投入許多服事行動，另一方面他維持靈修操練，乃至體驗神祕經驗，可說是裡外兼顧。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  衛斯理期待的靈修操練，是追求內在進路與外在進路裡外合一，儘管這並不容易。在現實生活中可見，每一個人的恩賜和呼召都不一樣，比較偏向外在進路者的內在靈修操練往往不充實，而比較沉浸於內在進路者通常缺乏做社會關懷的意願。衛斯理卻期待裡外兼顧，從靈修操練到從事教育、消滅文盲、探訪囚犯、照顧病人、幫助窮人，甚至包括反對奴隸制度。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  裡外兩條路原本就有張力，同時並行很不容易，一般人總有所偏，有人偏向外顯一點，有人傾向內在一些。就有如有人作馬大，有人作馬利亞，需要藉由群體中各個肢體互相配合，才比較有可能呈現平衡，亦即馬大需要馬利亞配搭，而馬利亞也需要馬大幫忙。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  在不同的教會當中亦可期待發展出平衡的教會整體，有些教會對社會關懷陌生，長老教會卻擅長社會關懷；有些教會很會做內在靈修、心靈醫治，可成為眾教會靈修的學習榜樣。只要有聖徒相通的關係，既有靈恩教會的靈性體驗，亦有衛理公會、長老教會的服務見證，讓整體教會具有更寬大的視野、更豐富的多元見證，才能跨越一般常見狹隘的堂會主義。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">4. 衛斯理之後</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  衛斯理從未主張單單因信稱義不能得救，但是他不斷呼籲追求完全成聖，再加上鼓勵人善用自由意志的時代氛圍，普遍認為信主是出於自由意志，而追求進階也是如此，若不努力的話，不但進不了第二階段，可能連第一階段也失落了，進階的推動力固然很強，但壓力也很大。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  衛斯理極力追求「完全」，開發了後來在這傳承影響下，基督徒繼續追求成長的動機，比如追求Christian holiness（基督徒聖潔）、entire sanctification（全然聖化）、perfect love（完全的愛）、the baptism with the Holy Spirit（聖靈的洗）、the second work of grace（二度恩典）、the second blessing（二度祝福）。這些語言很可能造成上帝恩典有分階段的印象，導致在神學上開始與因信稱義分道揚鑣，以致造成一種應當力求完美的壓力。
                </p>
              </div>

              <div>
                <span className="font-semibold text-slate-700">5. 評估</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  早期衛斯理與宗教改革的因信稱義充分接軌，後來則愈來愈重視完全成聖。回顧路德和加爾文的立場，言及上帝的恩典臨到人，所使用的動詞是「歸予」（imputation），亦即上帝施恩把祂的義歸給藉著信而領受的人；天主教會的立場始終都是「注入」（infusion），主張上帝的恩典在於把祂的義灌注到人裡面，這意味著上帝的義成為人的一部分，亦即人的改變和提升，天主教會據此發展出冊封聖人的傳統，就是肯定那些特別擁有上帝的義的聖人，與一般人並不相同。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  至於衛斯理的立場則折衷於前兩者，通常描述其立場使用「分有」（impartation）——亦即「有分於」，就是得以分享領受一部分，這個理解介於歸予和注入之間，一方面強調人的實質參與，所領受的是屬於人的；另一方面則強調只是領受部分而非全部，所分享的仍然是屬上帝的，這立場居於宗教改革與天主教會之間。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  近年來，「神化」（Theosis／Deification）的神學討論開始受到矚目，天主教會的神學傾向支持「神化」，宗教改革則傾向與「神化」保持距離。衛斯理來自聖公會，聖公會在神學光譜上位於宗教改革和天主教會之間，並且衛斯理也與東正教會有所接觸，他所使用的「分有（有分於）」，在概念上與東正教會的「神化」（theosis）、「上帝化」（Deification）相似。因此，衛斯理連同查理．衛斯理在神學上都有些傾向「神化」，如查理．衛斯理所作的聖詩歌詞裡，有很多部分呈現對神人之間緊密關係的嚮往，似亦可用「神化」來形容。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  不同的神學路線經常反映不同的靈性體驗與平衡智慧，有人隨著宗教體驗而調整其神學路線，有人則是受到思想潮流影響而變換其追求體驗的方向，無論如何，一旦缺乏平衡感，就很可能會偏向某一端而失控。衛斯理的「分有」概念，為追求完全成聖留下發展空間，但這概念與「神化」的親和力卻又導致讓完全成聖與神化相似，問題焦點在於當信仰成長的努力歸於人的一方，信徒就有可能離開強調上帝主權的因信稱義，甚至造成被催促成長的壓力。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  儘管衛斯理自己能夠始終維持主動追求的動力，不過他卻開啟了追求完全之門，一旦過度強調，就會把稱義視為初階而已，完全成聖才是進階，因此信仰者的靈性需要不斷往上爬升直到完全成聖。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  加爾文的立場是追求平衡，他在《基督教要義》裡並未主張神化，卻有非常多次提到「與基督連結」，很明顯他有意在神人分際上踩煞車、劃定界限，藉由與神人中保基督的連結，一方面突顯上帝主動就近人，另一方面則仍強調神人有別。上述有關上帝主權的神學立場，勢必影響對基督教倫理道德的看法，究竟是上帝主導下之人的倫理道德判斷，或者是人主動追尋過程中的倫理道德判斷，下一章討論天主教倫理學將有助於釐清這些討論。
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
                '衛斯理接續路德「因信稱義」、加爾文「同時發生的稱義與聖化」，進一步在因信稱義之後主張追求「成聖」——與上帝性情相通共融，把神學重心逐漸從「上帝為我們做的」移向「上帝在我們裡面做的」。',
                '衛斯理的「基督徒生活指導」（盡心盡力行善、用所有方式、在所有地方、對所有的人、終生不改其志）與「錢財三律」（盡力獲得、盡力儲存、盡力付出）呈現他一生積極行動、奉獻服事的熱情典範。',
                '衛斯理主張「基督的福音唯獨關懷社會，在社會成聖之外，別無其他成聖」——一切成聖都必須在人群當中實現，這使得衛理宗傳統的靈修操練始終與社會服事緊密相連。',
                '衛斯理雖有近乎完美的服事見證，卻也有真實的生命挫折——婚姻關係長期不睦，這提醒我們屬靈偉人同樣是有血有肉的軟弱人，不必因偶像化而迴避誠實面對他們的失敗。',
                '衛斯理追求「完全成聖」的動力後來在聖潔運動、靈恩運動中演變成「二度祝福」「二度恩典」等分階段語言，可能使因信稱義的恩典蒙上「必須不斷努力才夠格」的壓力，杜罕「拯救完成教義」則試圖把靈恩運動導回宗教改革唯獨恩典的立場。',
                '路德「歸予」、天主教「注入」、衛斯理「分有」三種對上帝恩典臨到人的理解方式，反映不同的神人關係立場，也直接影響各傳統對「人在成聖過程中扮演何種角色」的倫理道德判斷。',
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
              <h4 className="font-semibold text-gray-800 mb-2">衛斯理婚姻的失敗，對今日教會如何看待屬靈領袖的軟弱有何提醒？</h4>
              <p className="text-gray-700 leading-relaxed">
                本章誠實記錄了衛斯理近乎完美的服事見證之外，長期不睦的婚姻關係——他自己也坦承「有時候我真是希望我們從沒有相遇過」。這種不迴避偉人軟弱的寫作方式，對今日教會習慣把屬靈領袖神格化、迴避討論其真實掙扎的傾向是重要提醒：一個人在公眾服事上的果效與其私領域的破口可以並存，教會不需要靠塑造完人形象來肯定神所使用的僕人，反而誠實面對軟弱更能幫助信徒建立健康的信仰觀。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「二度祝福」語言帶來的分階段壓力，對今日靈恩教會的牧養有何反思？</h4>
              <p className="text-gray-700 leading-relaxed">
                本章指出杜罕發展「拯救完成教義」，正是為了回應「二度祝福」語言可能製造的「初階信徒不完全」焦慮。這對今日仍強調方言、聖靈充滿經歷作為「進深信徒」標記的教會是重要參照——當某種屬靈經歷被塑造成信仰進階的門檻時，容易讓未曾經歷者背負不必要的自卑與焦慮，杜罕的立場提醒我們：因信稱義的恩典本身已經完全，任何屬靈經歷都應是恩典的延伸與祝福，而非得救確據的必要條件。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「馬大與馬利亞需要互相配搭」的比喻，對今日教會不同事奉恩賜的整合有何應用？</h4>
              <p className="text-gray-700 leading-relaxed">
                本章觀察到偏向外在服事者內在靈修常不充實，偏向內在靈修者常缺乏社會關懷，並以馬大與馬利亞的配搭作比喻，主張健康的信仰群體需要不同氣質的肢體互補。這提醒教會在栽培同工、規劃事工時，不宜用單一標準（如「愛主就要多服事」或「愛主就要多靈修」）要求所有信徒，而應鼓勵不同恩賜的肢體彼此欣賞、互相補足，讓整體教會呈現裡外兼顧的成熟見證。
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
              '衛斯理說「由於這個盼望，你縱使不更好，也不至更壞」。你如何看待這種務實而不苛求的成聖態度，這對你追求信仰成長的心態有何提醒？',
              '衛斯理的「基督徒生活指導」要求「盡心盡力行善、用所有方式、在所有地方、對所有的人」，你認為這種近乎無止境的行動呼召，會不會反而帶來屬靈的疲乏與壓力？如何平衡？',
              '衛斯理對錢財的態度是「盡力去獲得、盡力去儲存、盡力去付出」，你觀察自己的財務習慣，這三者的比例是否平衡？',
              '衛斯理主張「基督的福音唯獨關懷社會，在社會成聖之外，別無其他成聖」。你是否也曾把靈修操練與社會服事切割成兩件不相干的事？',
              '本章誠實呈現衛斯理婚姻的失敗，你如何看待屬靈偉人的軟弱？這對你評價教會領袖或自己失敗經驗的態度有何影響？',
              '「二度祝福」「進階信徒」等語言可能帶來屬靈階級的壓力，你是否也曾因為沒有某種特定經歷（方言、異象、神蹟）而懷疑自己的信仰不夠格？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 背誦「基督徒生活指導」</h4>
              <p className="text-gray-700 mb-2">找時間熟讀甚至背誦衛斯理的七句「基督徒生活指導」，本週選一句具體落實在生活中的一個場合。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💰 檢視「獲得、儲存、付出」的比例</h4>
              <p className="text-gray-700 mb-2">
                誠實記錄這個月的收支，分析獲得、儲存、付出三者的實際比例，對照衛斯理的教導，思考是否需要調整。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🫂 練習「社會性成聖」</h4>
              <p className="text-gray-700 mb-2">
                本週找一個具體機會，把個人靈修的體會轉化為服事人群的具體行動（探訪、幫助有需要的人），操練「成聖必須在人群中實現」的精神。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「上帝啊，求祢使我因信稱義的確據始終建立在祢的恩典上，而不在於自己是否已經完全。求祢賜給我像衛斯理一樣熱切追求成長的心志，也求祢幫助我裡外兼顧，讓靈修操練自然結出服事人群的果子。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
