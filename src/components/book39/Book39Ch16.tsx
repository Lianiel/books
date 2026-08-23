import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Waves, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;
const quote = "border-l-4 border-emerald-300 bg-emerald-50 pl-4 py-3 mb-3";
const quoteText = "text-emerald-800 leading-relaxed italic";

export default function Book39Ch16() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-slate-800 to-blue-900 bg-clip-text text-transparent">第十六章</h1>
        <h2 className="text-xl font-semibold text-gray-700">現代基督教倫理學——從巴特到莫特曼</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          「你在上帝面前不可冒失開口，也不可心急發言；因為上帝在天上，你在地下，所以你的言語要寡少。」（傳5:2）
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
              現代社會的起源可追溯到十七、十八世紀的啟蒙運動，這是一個強調重視理性的運動，對於基督教信仰帶來許多衝擊，諸如「以理性檢視信仰」、「信仰的理性化」之挑戰。然而，在從傳統社會進入現代社會的歷程，基督教神學面對變動多端的處境有不少發展的轉折，這些轉折也反映在現代基督教倫理學的發展。
            </p>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">一、現代神學的起源與發展</h3>
              <div>
                <h4 className="font-semibold text-slate-700 mb-2">1. 十九世紀神學大師士來馬赫</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  十八世紀末至十九世紀初，由於啟蒙運動過度單方面地重視理性，受到重視情感的浪漫主義（Romantic Movement, 1780-1830）批判，不過啟蒙運動只是做了部分修正而基調不變。來到十九世紀神學大師士來馬赫綜合啟蒙運動、浪漫主義以及其敬虔主義的背景，做了一次重大的神學整合，他推動重視經驗且「從人出發」的神學方法，這導致隨後十九世紀直到二十世紀初德國自由神學的蓬勃發展。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  最具代表性的啟蒙運動哲學家康德，於一七九三年出版《單純理性限度內的宗教》，從書名可知他追求合乎理性之宗教的用心；僅僅相隔六年，一七九九年沉浸在浪漫主義的士來馬赫，隨即出版《論宗教》，主張宗教的核心在於「情感」，只是這本著作仍以理性論述為主，呈現受啟蒙運動影響的痕跡。前者是啟蒙運動用理性主義來詮釋宗教的範例，後者則是用浪漫主義加上啟蒙運動來詮釋宗教的代表，各具指標性意義。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  士來馬赫做神學，面對的是啟蒙運動對宗教信仰的挑戰，他以宗教的本質為情感作為因應。由於情感的主體在於人，於是逐漸發展出「從人出發」的神學方法，推動以人論為進路的神學，結果促成以主張人的文化即為上帝啟示的自由神學，雖然士來馬赫並未主張自由神學，卻為人文主義化的自由神學提供發展空間。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">2. 二十世紀神學大師巴特</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  巴特在大學學習神學時的教授，大多主張自由神學；當他開始牧會時，就發現自由神學無法回應人內心對上帝的需要，這使他發展出以上帝啟示為中心的神學，強調客觀教義而排除主觀信仰所帶來的副作用，他以「從上帝出發」的神學方法對抗士來馬赫「從人出發」的神學方法；就現實生活而言，巴特做神學面對希特勒專權且發動戰爭的危機，因此特別重視「基督的勝利」，強調光明必定勝過黑暗，真理必定勝過謊言。巴特重申上帝的主權及人的渺小，一如傳道書五章2節所說：「你在上帝面前不可冒失開口，也不可心急發言；因為上帝在天上，你在地下，所以你的言語要寡少。」
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">3. 獨樹一格的潘霍華</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  潘霍華倫理學已在本書第十四章討論過，以下只是簡述其神學思想形成的脈絡。巴特與小他二十歲的潘霍華，都在自由神學主導的學習環境中成長，二人有密切的互動，皆對自由神學不滿。巴特率先於一九一九年與一九二二年分別出版了兩個版本的《羅馬書釋義》批判自由神學，潘霍華則藉由博士論文（1927）與講師升等論文（1930）努力在自由神學之外尋找出路。如莫特曼所見：「潘霍華熟悉自由神學的領袖哈拿克和特洛爾奇的作品，但是他卻獻身於一種新的教會神學，這種新的教會神學是受到巴特刺激而產生的。」<sup>1</sup><span style={cite}>（莫爾特曼，〈朋霍費爾與神學〉，《朋霍費爾與漢語神學》，曾慶豹編〔香港：漢語基督教文化研究所，2006〕，24。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  潘霍華與巴特同樣面對希特勒獨裁的危機，不過前者是留在德國面對極權統治危險的德國人，巴特則是在壓力來臨時已離開德國的瑞士人。潘霍華一心一意想在自由神學之外找出路，根據莫特曼的觀察：「1932年，他以無比的激情發表了關於『你的國度降臨』演說。『只有將大地和上帝當作一體來愛的人才能相信上帝國。』」<sup>2</sup><span style={cite}>（莫爾特曼，〈朋霍費爾與神學〉，31-32。）</span>潘霍華主張，凡愛創造者上帝的人，也應當愛受造的大地，這種愛是確信上帝國的基礎。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  潘霍華的主張具有濃厚的入世性，這成為莫特曼做神學的動機，他說：「這種對大地的忠實乃是他對基督教信仰『真實的現世性』的新見解的神學基礎：基督的十字架樹立於大地之上，基督的復活發生於大地之上，大地有一天將成為上帝之義的居所。」<sup>3</sup><span style={cite}>（莫爾特曼，〈朋霍費爾與神學〉，32。）</span>他把對大地忠實與對上帝確信連結起來，而期盼以基督為中心的秩序則為更新過的創造秩序，亦即合乎上帝之義的秩序，潘霍華主張這種神學形同挑戰納粹。一九三三年，希特勒全面掌權，成為潘霍華人生的轉捩點，他以生命投入歷史危機中來見證對上帝的確信，而他對現代神學最大的影響就在於他的神學與生命一致：「從1933年起，神學和他的生平對他來說，成了一種『經歷的神學』而不能分開。」<sup>4</sup><span style={cite}>（莫爾特曼，〈朋霍費爾與神學〉，25。）</span>最後，他參與了反抗希特勒的活動而被囚禁處決。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">4. 後巴特神學——莫特曼</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  莫特曼年輕時經歷過戰爭的痛苦，十九歲成為戰俘，他在集中營裡被拘禁三年。他是在德國戰敗之後才知道納粹屠殺猶太人，這使他深深地感受羞辱，在獄中的痛苦使他成為基督徒，並且開始接觸神學。按照莫特曼對潘霍華著作的歸類：《追隨基督》與《團契生活》是為傳道人預備的教會神學，《倫理學》是致力於反抗活動的政治神學，《獄中書簡》則是監獄神學。<sup>5</sup><span style={cite}>（莫爾特曼，〈朋霍費爾與神學〉，27。）</span>潘霍華的神學有血有肉，不但重視教會，且關切政治，並願意為之受苦，這些都給學術性質濃厚的德語神學界帶來新鮮的空氣，尤其對莫特曼的啟蒙非常深刻。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  莫特曼的弟子洪亮認為，坊間常用「後巴特」神學家形容莫特曼並不準確，因為這僅僅在編年史上有意義，「這個概念既低估了巴特神學影響至今的思想力度，也低估了莫特曼的洞見與創造力，兩者之間的思想連續性被一個簡單的『後』字一筆勾銷。」<sup>6</sup><span style={cite}>（洪亮，《巴特與莫特曼管窺》〔香港：德慧文化，2020〕，147。）</span>不過，莫特曼卻曾自稱「後巴特」神學家，或許是出於「謙稱」吧！
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  莫特曼做神學時，面對戰爭浩劫後裡外都已殘破的世界，這種經驗與士來馬赫、巴特、潘霍華截然不相同，他親身經歷大戰的生死浩劫，在戰俘營裡成為基督徒又體驗了新生命並找到盼望，這盼望使他能夠面對納粹的黑暗歷史以及揮之不去的罪惡感與羞恥感，他也因著盼望神學而開出前所未有的終末論思考維度，他最喜歡的經文如下：
                </p>
                <div className={quote}>
                  <p className={quoteText}>
                    但願使人有盼望的上帝，因信將諸般的喜樂、平安充滿你們的心，使你們藉著聖靈的能力大有盼望！（羅15:13）
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">5. 小結</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  以上從士來馬赫、巴特到莫特曼，簡單勾勒現代神學的起源，這是促成現代基督教倫理學思想脈絡的發展來源。以下追溯布魯姆哈德父子對現代基督教倫理學的影響，以及對巴特思想的影響；接著介紹其主張與社會福音和自由神學有關的饒申布士（Walter Rauschenbusch, 1861-1918），他的思想影響了解放神學及普世教會協會（WCC, World Council of Churches）的發展，這兩者帶動隨後的神學潮流，藉由對上帝國的新詮釋提供倫理學視域的擴大與應用；而後介紹批判自由神學的巴特之倫理學觀點；最後刻畫莫特曼具有終末論視野的倫理學特色。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">二、布魯姆哈德父子</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                現代基督教倫理學思想面對兩組張力，其一，到底要照顧實際生活，還是要照顧信仰靈修？有人傾向強調身體的需要，有人則傾向重視靈性的需要。其二，一方面上帝國是已經開始（already）實現，另外一方面則是尚未（not yet）全然實現。究竟在這兩組張力之間如何取得平衡？如何避免單方面倒向其中一方？這是基督教倫理學的掙扎與挑戰。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                符騰堡敬虔主義布魯姆哈德（Johann Blumhardt, 1805-1880），一八四二年經歷趕鬼，宣揚「耶穌是得勝者」，主張上帝國來臨的神學，帶動教會復興：醫治、悔改、重生、復和及熱切傳福音。一八五三年，他在溫泉勝地巴特博爾（Bad Boll）成立退修中心，許多人蜂擁前往尋求醫治。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                布魯姆哈德是德國敬虔主義傳承下的牧師，他原本未曾經歷真實的屬靈爭戰，後來教會中有一位年輕女性遭遇鬼附，他領導同工盡心竭力長達一兩年之久，才把鬼趕走，此後那位姊妹成為他們重要的同工，曾經一起組成佈道團四處作見證。於是布魯姆哈德發展「耶穌是得勝者」的神學，主張耶穌全面勝利，強調上帝國已經實現的部分。藉由趕鬼的經歷，他見識了邪惡的多方面影響，注意到許多心靈破口導致邪惡入侵。於是他開始投入更廣泛的醫治、悔改、重生、復和及福音工作，帶動教會復興，而且從靈性的趕鬼服事進入心靈醫治的層面，又進一步看到身體與心靈的交互影響，也開始重視身體的醫治。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                整體而言，布魯姆哈德還是比較偏重靈性的醫治。小布魯姆哈德（Christoph Blumhardt, 1842-1919）雖然追隨父親做醫治服事，但他卻漸漸發現，儘管醫治涵蓋心靈的醫治與身體的醫治，然而醫治的主軸還是在靈性方面——追求經歷耶穌的得勝與上帝國的權柄，但同時他卻看到現實生活中有許多嚴重的社會問題，這些問題不只需要從靈性這一端去做醫治服事，那些受制於社會問題而被罪惡捆綁者也需要被潔淨，甚至「潔淨」比「醫治」還重要——儘管這兩者都是上帝國的記號。於是，他開始主張基督教社會主義，甚至加入社會民主黨，一心想要改革社會而解決社會問題。當時教會的態度保守，為了他參與政治的決定，解除了他的牧職，於是他專心投入政治。不過，後來他在政治場上看到許多人根本無法掙脫人性的軟弱，他在失望中退出政治圈且不再參與政治，開始往父親的神學思想方向回擺到中間地帶，因此他的神學帶有居中特質。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                小布魯姆哈德在對現實政治的失望中，仍然相信上帝已在這世上留下終必實現的兆頭，主張基督徒應該「等待與催促」（Waiting &amp; Hastening, <em>Warten und Eilen</em>）。<sup>7</sup><span style={cite}>（Jürgen Moltmann, Ethics of Hope (Minneapolis: Fortress, 2012), 6-8.）</span>由於我們處於已經開始與尚未完成之間，需要兩種態度，其一是繼續等待那尚未來臨的，其二是必須有所動作來催促上帝國的來到，這意味著「抵抗與預視（預先看見，預先參與）」（Resisting &amp; Anticipating, <em>Wiederstehen und Vorwegnehmen</em>）。<sup>8</sup><span style={cite}>（Jürgen Moltmann, Ethics of Hope, 6-8.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                一方面，必須在上帝國尚未完全來臨時，抵抗這世上的敵對力量；另一方面，則必須遠遠地預先看見且參與那尚未來臨的上帝國。等待和抵抗是一組，而催促與預視則是另外一組：當我們堅定等待上帝國，就是抵抗此世敵對上帝國的力量，可見等待其實就是一種抵抗；當我們以催促的行動期盼上帝國全然來臨，亦即預先看見上帝國來臨而預先參與。這意味著，心懷熱切地期盼上帝國而正視現實的不完美，以等待來抵抗敵對上帝國的一切；藉由催促與預視回應終將成就的上帝應許——催促應許的成就並預見應許的實現。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                小布魯姆哈德的兩組概念呈現神學的居中立場，反映他自己曾經投入心靈醫治而後追求社會公義，最後又擺回中間地帶的生命經歷。等待亦即抵抗是一個非常有創意的想法，因一般人常以為等待是消極的，但是小布魯姆哈德卻主張積極的等待，亦即抗拒世俗潮流，有如不但表達抗議而且不放棄行動。至於尚未實現的部分，一旦有上帝國的兆頭出現，就應當投入參與以加碼催促，從預先看見轉成預先參與。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                大布魯姆哈德的醫治服事停留在個人層面，並未進入社會層面；小布魯姆哈德則開始重視社會層面，看見在社會上有許多罪惡需要被潔淨，他無法宣稱上帝國已經全然實現，於是在已經開始和尚未成就之間尋找平衡，在靈性體驗和現實生活之間擺盪。大布魯姆哈德其「耶穌是得勝者」的神學思想對巴特有重大的影響，而小布魯姆哈德的掙扎，也成為巴特神學追求落實「耶穌是得勝者」的參照，他們父子成為巴特神學的先驅。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">三、饒申布士的社會福音</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                自由神學（liberal theology）起源於十九世紀的德國，最主要的形成力量來自兩位神學家：立敕爾（Albrecht Ritschl, 1822-1889）與哈拿克（C. G. Adolf von Harnack, 1851-1930），他們都認為基督教的價值在於高貴的道德，哈拿克甚至以登山寶訓作為人類倫理道德理想的極致。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                饒申布士身為德國移民後裔的美國神學家，具有德國思想文化的淵源，其神學受到自由神學影響。後來他在紐約牧會時，見到資本家壓榨工人所造成的社會問題，開始把自由神學從學術性角度理解的「上帝國」落實到現實生活中，成為最早公開明確主張「社會福音」（Social Gospel）的神學家。他主張上帝國要落實於今生今世，因此必須強調基督福音對實際生活的影響，正視美國迅速工業化帶來的許多社會問題，主張上帝的愛勢必帶來改變與行動。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                饒申布士的《社會福音神學》（<em>A Theology for the Social Gospel</em>, 1917），主張上帝國的社會性、整體性、現實性，社會性是指生活面，整體性反對單單追求靈性世界，而現實性則強調落實人間。教會存在的目的是為了實現上帝國，離棄自私的罪惡，轉向上帝與上帝國，追求人類的幸福。<sup>9</sup><span style={cite}>（饒申布士，《饒申布士社會福音集》，趙真頌譯〔香港：輔僑，1956〕。）</span>饒申布士有如先知般呼籲基督教信仰者應當關心社會問題，成為自由神學在新大陸的美國版，只不過把原先重視文化的焦點轉而集中在關注社會議題。不過，饒申布士也帶來一個可能的問題，一旦單單強調社會福音路線，教會就逐漸與社會工作組織沒有分別，以致所追求的上帝國不過是追求提高物質生活而已。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                WCC是全世界最大的教會聯合組織，長期受到社會福音神學的影響，發展普世教會社會倫理（ecumenical social ethic），關心焦點集中在社會議題，而其社會福音的「上帝國導向」逐漸地強調「人是向上帝負責的自由受造者」，倡導「負責任的社會」，追求自由普及與公義伸張。<sup>10</sup><span style={cite}>（葛倫斯〔Grenz, S. J.〕，《基督教倫理學導論》，江淑敏譯〔台北：華神，2004〕，189-190。）</span>這些發展方向如果過度單一，可能使得教會的關注從「上帝國」轉向「人」，形同與以人為中心的人文主義沒有分別。從WCC所發出的討論、信息、報導等，可見其宣導重點在於追求社會秩序的基督教化，至於靈性形成、靈修神學、教會成長的關注只是附屬在社會關懷之下。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                WCC倡導「負責任的社會」，主張人要負起社會責任，不論面對環保議題或難民議題都應當如此，追求自由的普及與公義的伸張，其背後也有解放神學（liberation theology）的影響，這種神學起源於拉丁美洲嚴重的社會問題處境，一些神學家追求打造以解放窮人為志業的神學。<sup>11</sup><span style={cite}>（葛倫斯，《基督教倫理學導論》，189-190。）</span>二十世紀的拉丁美洲面對貧富懸殊、政商勾結的社會環境，造成源源不絕的社會問題，解放神學家把信仰與實際生活連結，主張基督福音落實在現實生活當中的解放意義，這些都成為WCC經常可見的論述基礎。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                其實拉丁美洲的神學發展相當多元，解放神學只是風行一時，在現實生活中的影響力相當有限，真正普遍流行的反而是解放神學的對立面——靈恩運動、靈恩教會。在解放神學家的想像中，窮人最需要改善物質生活、經濟上有更大的安全感，然而在現實生活中人們始終有強烈的靈性需要，因此解放不應忽略靈性的需求，單單物質與財富不見得有吸引力，乃當追求靈性需要與物質生活兼顧。不可否認地，基督教信仰具有超越現實的力量，倘若連這一塊也被拿走的話，還是一種宗教信仰嗎？其實連饒申布士的社會福音神學也主張「上帝國導向」，若是這種敬虔的信念也被放棄的話，單單強調「人是向上帝負責的自由受造者」：從上帝國超越物質的靈性理想，轉向以人為中心而追求物質需求的滿足；不再追求上帝主權，轉而單單強調人的自由；人文主義色彩壓倒宗教信仰特質，那麼信仰群體與政治組織、社工機構的區別何在？
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">四、基督勝利宣告</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                巴特生長在一個人文主義蓬勃發展的世代，當時自由神學蓬勃地興起：主張多談人的主權、少談上帝主權，多重視人的文化而避免強調上帝啟示，亦即主張一種把上帝置於遠方的人文主義式神學。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                自由神學排斥一切突顯上帝主權的神學思想，尤其反對主張預定論。傳統的預定論主張「雙重預定」，亦即主張上帝預先決定揀選某些人而棄絕某些人，這對主張自由神學者而言是嚴重侵犯人的主權。巴特卻對「雙重預定」做了一個巧妙的詮釋，他引用「就如上帝從創立世界以前，在基督裡揀選了我們，使我們在他面前成為聖潔，無有瑕疵」（弗1:4），說明上帝在基督裡的預定揀選，是揀選人而棄絕自己。<sup>12</sup><span style={cite}>（CD, 2/2, Ch. 32-35.）</span>出於上帝主權的決斷，藉由基督的見證，揀選的上帝與被揀選的人合而為一。<sup>13</sup><span style={cite}>（CD, 2/2, 3.）</span>這種詮釋呈現上帝無比的慈愛——宣稱所有的人都被揀選了，這樣的揀選是出於上帝的自我犧牲，也是布魯姆哈德父子「耶穌是得勝者」神學的迴響。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這種強力的基督勝利的宣告，一方面是給自由神學帶來重擊，因為藉由上帝犧牲的愛而高度肯定人的價值；另一方面也給予人文主義最高的肯定，認為那是建立在上帝對所有人的揀選上。巴特的神學在上帝的主權方面，使他與自由神學保持距離；在人的主權方面，則使他與人文主義者通暢交流。然而，對無神論的人文主義者，勢必仍然認為巴特所言及的上帝的揀選完全不必要；對巴特神學的追隨者而言，也有可能因此忘本——上帝的主權是人主權的基礎，以至與世俗的人文主義者無異。因此，巴特神學經常呈現天真、樂觀的氛圍，似乎只要朝向光明，一切陰影都會消失不見。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                上述的矛盾在於，巴特神學把上帝國終末的美景直接帶到此世，有如基督福音已經遍及大地，卻忽略了人們仍然活在歷史中，上帝國的美景仍在基督徒的盼望裡，而基督福音仍尚未臨到許多未曾聽見福音的人。但無論如何，巴特神學具有撼動自由神學基礎的指標性意義，他反對中世紀以來的自然神學，反對近代以來的世俗化和人文化，認為人和上帝之間有著永遠無法填補的深淵。據此他強調超越性的倫理，亦即倫理是在唯有上帝啟示祂自己的前提之下。倫理的論述不應當是描述主體的道德意識，而是對在上帝啟示光照下人類世界的描述；這個世界是在基督裡，由創造、和好、救贖的上帝所主導，這是一種沒有任何部分可以脫離神學的倫理學。
              </p>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">1. 巴特神學的倫理學涵義</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  巴特雖然寫過一本《倫理學》，<sup>14</sup><span style={cite}>（Karl Barth, Ethics (N.Y.: Seabury, 1981).）</span>是早期一九二八至一九二九年間在大學授課的講稿，而且在《教會教義學》裡也嘗試寫過與基督徒生活有關的部分，<sup>15</sup><span style={cite}>（CD, 2/2, § 36 "Ethics as a Task of the Doctrine of God"; CD, 3/4, § 52 "Ethics as a Task of the Doctrine of Creation"; CD, 4/4, The Christian Life (Fragment).）</span>但終究未能完成。其實巴特並非不重視倫理學，而是他認為教義學本身就帶有濃厚的倫理學性質。巴特主張，教義學就是倫理學，而倫理學就是教義學，因為人需要藉由上帝的話，才得以認定正確的生存——教義學——而後也才會有正確的行動——倫理學。所以，教義學勢必指向倫理學，反之倫理學也必定追尋教義學。<sup>16</sup><span style={cite}>（CD, 1/2, 793.）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  身為基督徒應當「在基督裡」生活，不只聽到福音，而且活在福音之中。基督徒的責任就是根據上帝在基督裡所實現的一切去做決定，而成為新造的人。因此，巴特並未寫下倫理規範，而單單強調「在基督裡」的原則。他一向主張，只有上帝才能啟示祂自己，上帝的啟示——上帝的話——總是先於人的生存，而且上帝的話引領人從生存到行動。以下首先討論早期巴特與倫理學有關的兩篇專文，<sup>17</sup><span style={cite}>（以下參考莫特曼的整理：莫爾特曼，《盼望倫理》，王玉靜譯〔香港：道風書社，2015〕，31-34。此書原名 Ethik der Hoffnung，應當譯為「盼望倫理學」，本書暫且從俗按照中譯本稱呼「盼望倫理」。）</span>其次討論巴特復和神學的倫理學意義：
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">2. 〈稱義與公義〉</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  一九三八年，巴特發表〈稱義與公義〉，強調新約並非用宗教想像，而是用政治想像來描述終末的景象，因而期盼「現實的世俗教會不是在對自己實存的神聖鏡像中，而是在現實的神聖國家中看到自己的將來和盼望」，教會的將來不只是教會，而是上帝萬有之國，「在天上和在塵世都是一樣」。<sup>18</sup><span style={cite}>（莫爾特曼，《盼望倫理》，32。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  巴特注意到，當新約聖經描述終末景象時，其中所說的並非教會，而是國家，比如使用萬國萬民之類的語言而非單單信徒而已。就這意義而言，巴特相信上帝的掌權不只是在教會中，而且是針對全世界。這與WCC「追求社會秩序的基督教化」看來相似，但其實不同之處在於，巴特的終末期盼奠基在上帝啟示的福音信息。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">3. 〈信仰群體和公民群體〉</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  一九五四年，巴特發表〈信仰群體和公民群體〉，<sup>19</sup><span style={cite}>（Karl Barth, "The Christian Community and the Civil Community," Karl Barth: Theologian of Freedom, C. Green ed. (London: Collins, 1989), 265-296.）</span>認為教會和國家不可混同，兩者有如同心圓，教會是內圈，國家為外圈，圓心則是上帝國。教會與國家都應尊重上帝的主權，國家是教會的「比喻」（parable），「比喻」的德文 <em>Gleichnis</em> 不易翻譯，直譯則是「同比」，國家與教會都指向相同的中心，只是前者在外圈，而後者在內圈。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  國家與教會的關係是分中有同、同中有分，而國家是教會的比喻，就如同耶穌所說的故事是上帝國的比喻，故事雖指向上帝國，國家又指向教會，但國家不等同於教會，就如同故事並不等同於上帝國。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  舉例來說，教會宣揚道成肉身，而道成肉身在國家政治上做比喻性的應用，就是不可只關心抽象原則，也應當關心具有肉體的人，有如道成肉身對肉身的肯定；教會傳講因信稱義，主張人人都可到上帝面前支取恩典，在政治上則是指必須照顧所有的人；教會呼籲說上帝在尋找拯救失喪的人，在政治上則是指必須關懷弱勢者；教會主張只有一位主，基督徒享有自由且要對上帝負責，在政治上則是指人人都有自由也必須彼此負責；教會主張基督徒應當加入信仰團體，但是尊重個別的信仰良心，在政治上則反對極端的個體主義，因為人有群體性，但也反對集體主義，因為應當尊重個別的良心。<sup>20</sup><span style={cite}>（Karl Barth, "The Christian Community and the Civil Community," 280-281.）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  總之，政治只是信仰的比喻性轉換應用，亦即國家是教會的比喻性轉換應用。巴特神學不走偏鋒而往中間地帶發展，既維持國家和教會的分際，畢竟內圈、外圈有別，教會要作教會，國家要作國家社會；他同時又強調兩者的相近，國家需要教會信仰原則的比喻性來轉換應用，並且國家是教會信仰落實的見證之處。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  巴特將國家和教會適度區隔，既不願犧牲教會的信仰原則，亦不贊成教會主導政治，教會只是敦促政治的走向與信仰一致的方向。從內外有別來看，內圈不當強行要作外圈，而外圈也不應企圖替代內圈。巴特認為神學不應該政治化，政治也不應該神學化；神學只有維持單純的神學，才能對政治有所貢獻；相對來說，政治也必須維持政治的純度，才能對神學有貢獻。<sup>21</sup><span style={cite}>（Karl Barth, Karl Barth and Radical Politics, ed. &amp; tr. G. Hunsinger (Philadelphia: Westminster, 1976), 181.）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  若無內圈的話，談何外圈呢？如此繼續推演下去，教會如果不作教會的話，國家的盼望何在呢？牧師如果不像牧師而投入政治的話，教會還能像教會，而讓國家得以遵循內圈原則嗎？牧師要像牧師，做政治的人要像做政治的人。一邊要遵守內圈的原則，另一邊則遵守外圈的原則，這是巴特的理想。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  在實行方面，巴特年輕時非常狂熱地關懷政治，但後來他發現唯有好好作一個神學人，才能對大局有所貢獻。這是非常及時的提醒，因為當傳道人投入必須選邊站的政治時，還能對所有人傳福音嗎？當熱衷政治的傳道人面對政治立場相異者，究竟是要展開辯論說服對方，或者宣揚耶穌基督的上帝國福音呢？一旦參與了政治，究竟還能容許傳道人有多少空間呢？傳道人若失去超越性的話，所傳的福音仍然是寬廣國度的福音嗎？
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">4. 復和神學</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  《教會教義學》的核心——復和神學，呈現基督作為人之優越的最完美典範，以及作為人之墮落的最鮮明對照，思想結構十分宏偉，如下方，其中涵蓋豐富的倫理道德思想：<sup>22</sup><span style={cite}>（《系統神學（下）》，997。）</span>
                </p>
                <div className="overflow-x-auto mb-3">
                  <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-gray-100 text-gray-800">
                        <th className="p-2 border border-gray-200">基督論</th>
                        <th className="p-2 border border-gray-200">人論／罪論</th>
                        <th className="p-2 border border-gray-200">拯救論</th>
                        <th className="p-2 border border-gray-200">教會論——聖靈的工作</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700 text-center">
                      <tr>
                        <td className="p-2 border border-gray-200">神子・順服</td>
                        <td className="p-2 border border-gray-200">驕傲、墮落</td>
                        <td className="p-2 border border-gray-200">稱義</td>
                        <td className="p-2 border border-gray-200">聚集・信</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-gray-200">人子・高升</td>
                        <td className="p-2 border border-gray-200">怠惰、悲慘</td>
                        <td className="p-2 border border-gray-200">聖化</td>
                        <td className="p-2 border border-gray-200">建造・愛</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-gray-200">神人中保・榮耀</td>
                        <td className="p-2 border border-gray-200">錯謬、定罪</td>
                        <td className="p-2 border border-gray-200">蒙召</td>
                        <td className="p-2 border border-gray-200">宣教使命・望</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  巴特的復和神學洋洋灑灑就四鉅冊（另外有一本殘篇），以基督論為中心，反映出相形之下對人論與罪論的了解而進入拯救論，接著落實於教會論——聖靈的工作，其實已展開基督教倫理學的視野——在上帝聖約處境下的神學倫理學。主張唯有上帝才能啟示上帝自己的巴特，把倫理學奠基在上帝的命令、上帝在耶穌基督裡的啟示，不過上帝命令的要求並非強制或義務，而是容許人得以自由地回應上帝的恩典——上帝自由地轉向人，而使人也可自由地轉向上帝。<sup>23</sup><span style={cite}>（Daniel L. Migliore, "Commanding Grace: Karl Barth's Theological Ethics," 12.）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  巴特復和神學對「人」的重視，使他被質疑是否回歸自由神學太多——「有如老獅子終於學吃草」，巴特卻回應說，他自己始終如一，不但離開自由神學而且更加一致地繼續發展下去。<sup>24</sup><span style={cite}>（CD, 4/2, x.）</span>重點在於，巴特以基督論為中心的主張，使他從耶穌基督的神子、人子、中保身分學到如何成為更真實的人。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">5. 評論</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  如麥格里奧（Daniel L. Migliore）所見：「從一起頭，《教會教義學》這寫作計畫，就同時是重建基督教倫理學的寫作計畫。」<sup>25</sup><span style={cite}>（Daniel L. Migliore, "Commanding Grace: Karl Barth's Theological Ethics," Commanding Grace. Studies in Karl Barth's Ethics, D. L. Migliore ed. (Grand Rapids: Eerdmans, 2010), 1.）</span>至於巴特倫理學是否具有公共神學的關懷，基於巴特對上帝國的確信，基督徒應當身體力行上帝國的價值觀，見證上帝主權即將來臨的盼望，在此意義之下，基督徒被呼召積極參與關懷公共事務，<sup>26</sup><span style={cite}>（Daniel L. Migliore, "Commanding Grace: Karl Barth's Theological Ethics," 16.）</span>如〈信仰群體和公民群體〉以國家為教會的「比喻」，基督徒不只應當參與教會，而且應當關懷國家相關事務，有如藉由比喻來指向上帝國一般。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  韋伯斯特（John Webster, 1955–2016）檢視早期巴特倫理學的文本，發現與《教會教義學》一致，巴特堅決反對人的意願與神聖啟示混合，這並非由於上帝與人全然相異，而是我們已經在上帝所建立的關係裡面。<sup>27</sup><span style={cite}>（John Webster, Barth's Moral Theology: Human Action in Barth's Thought (Grand Rapids: Eerdmans, 1998), 37-38.）</span>換言之，人與上帝的關係並非建立在人能夠參與神聖的能力，而是上帝成為了人，並且賦予人參與神聖的可能，甚至上帝已把這種可能性賞賜給人。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  整體而言，巴特主張以基督論為中心的終末論，基督主權已徹底擊敗了邪惡權勢，善惡之戰已經結束，一切都「成了」。莫特曼認為巴特的觀點雖然強調縱向的上帝主權，不過卻缺乏終末引導歷史的橫向發展，於是莫特曼主張「轉化的倫理學」，期盼上帝國的倫理終將在地上完全實現，那是跟隨耶穌基督腳蹤的倫理，也是期盼耶穌基督的終末倫理。<sup>28</sup><span style={cite}>（莫爾特曼，《盼望倫理》，52。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  巴特經常言及「自由」，如上帝自由地轉向我們，使我們也自由地轉向祂。巴特相信基督得勝已經成全，這一點使他與大布魯姆哈德相同。不過，巴特並未完全解決面對已經開始而尚未完全實現之上帝國的張力，他一再強調基督主權的得勝，其實與現況並不相符，因此，這就有待莫特曼的盼望神學，繼續追尋出路。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">五、莫特曼的盼望倫理學</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                莫特曼自我標定為後巴特神學家，亦即在巴特之後從事神學，兩者都強調上帝的主權，只是巴特重視垂直面的超越，莫特曼則強調水平面的盼望。相形之下，莫特曼呈現更多歷史的現實面以及在歷史中盼望終末的理想面，雙方立場簡單標示如下：
              </p>
              <div className="overflow-x-auto mb-3">
                <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gray-100 text-gray-800">
                      <th className="p-2 border border-gray-200">巴特</th>
                      <th className="p-2 border border-gray-200">莫特曼</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 text-center">
                    <tr>
                      <td className="p-2 border border-gray-200">基督全然勝過一切邪惡權勢</td>
                      <td className="p-2 border border-gray-200">基督尚未於榮耀中再臨</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-gray-200">「已經成就」</td>
                      <td className="p-2 border border-gray-200">「仍在盼望」</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-gray-200">上帝主權隨時可展現的垂直向度</td>
                      <td className="p-2 border border-gray-200">在歷史中期盼上帝的水平向度</td>
                    </tr>
                    <tr>
                      <td className="p-2 border border-gray-200">隨時轉向基督可見大光照耀</td>
                      <td className="p-2 border border-gray-200">盼望上帝國來臨而經歷上帝信實</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                莫特曼在一九六四年出版《盼望神學》，徹底從未來盼望的角度詮釋基督教信仰。巴特讀過《盼望神學》並於出版當年寫信給莫特曼：「你的著作並未從那因著終末而塑造成形的領域，帶給我們具體的倫理道德指引。……很明顯你並未想要寫終末論，而是僅僅是寫一個關於終末論及與其相應之倫理學的緒論。」<sup>29</sup><span style={cite}>（Karl Barth, Letters 1961-1968 (Grand Rapids: Eerdmans, 1981), 175.）</span>這使得莫特曼一直念念不忘想要完成「盼望倫理學」，<sup>30</sup><span style={cite}>（Jürgen Moltmann, "Vorwort," Ethik der Hoffnung (Gütersloh: Gütersloher Verlagshaus, 2010), 13.）</span>這個夢想終於在二〇一〇年實現，他的《盼望倫理》出版了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這本書第一章藉由與三個神學傳統對話——路德派、改革宗、重洗派——而推出了「上帝國倫理學」，藉此從「轉化的終末論」出發而至「轉化的倫理學」，主張從終末論出發的倫理學。<sup>31</sup><span style={cite}>（莫爾特曼，《盼望倫理》，9-56。）</span>莫特曼的轉化的終末論（Transformative Eschatology），有別於天啟式的終末論（Apocalyptic Eschatology）、基督論式的終末論（Christological Eschatology）、分離心態的終末論（Separatist Eschatology）：
              </p>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">1. 路德的兩國論——天啟式的終末論</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  此論述預設了在這世上存在上帝與邪惡對立的鬥爭（延伸為屬靈／肉體、公義／罪惡等二元對立），非正即邪，政教分離，以消極的態度面對邪惡。因此，主張此種論述往往會期待哈米吉多頓（Harmagedon）之戰（啟16:14、16），在國際上親以色列以對抗邪惡的軸心國。然而，莫特曼批判此種觀點：基督不是勝利了嗎？基督不是主嗎？
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">2. 巴特基督論式的終末論</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  此論述以加爾文的觀點出發，預設基督已在這世上的各個領域掌權，高舉上帝的主權；巴特則以兩個同心圓來解釋基督徒群體與公民群體的關係。但莫特曼卻如此批判：為何從未見過在歷史上的教會，成為公民社會和政府的榜樣？另外，既然主張復活的基督已經全面性掌權，那麼用現在的終末論即可，這導致終末視野沒有未來的向度；基督教倫理學應當以基督論為前提，亦即以「彌賽亞的維度中」所見之終末論式的基督論，據此發展一種彌賽亞倫理。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">3. 分離心態的終末論</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  此論述之代表者，有如重洗派、門諾會、後自由神學的侯活士，侯活士批判君士坦丁主義——不區分國家與教會的主張——以致他認同世俗社會特質就是暴力的預設，而基督徒作為跟隨基督的新人應當顯示出非暴力特質。莫特曼雖認同非暴力，不過他卻批判：由於此論述傾向遺世獨立，雖然主張基督徒群體應當活出屬天的特徵，卻與屬地的世界無法建立聯繫，如美國胡特派（重洗派）從未抗議過任何戰爭、種族主義、貧窮和無家可歸，這是由於他們徹底「反戰」使然，然而他們卻不明白就算是抗議戰爭的發動，也需要在「正義戰爭」的原則之下，才能揭發不義的戰爭。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">4. 轉化的終末論帶來轉化的倫理學</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  莫特曼主張轉化的終末論帶來轉化的倫理學，他說：「基督教的倫理學既不是順應下的世界責任，也不是分離派的避世，而是對世界改變的引導。」<sup>32</sup><span style={cite}>（莫爾特曼，《盼望倫理》，55。）</span>他的盼望倫理源自受馬丁・路德・金恩於一九六三年八月二十八日在華盛頓的「夢想」宣言所激發，<sup>33</sup><span style={cite}>（莫爾特曼，《盼望倫理》，47。）</span>基於此世隨處可見的不公正，基督徒群體要藉著終末的視野，對世界懷抱終將被轉化的盼望，因而主張「轉化的倫理學」，期盼上帝國倫理將在地上實現，那是追隨耶穌基督的倫理，也是期盼耶穌基督所傳講的終將在未來完全實現的彌賽亞倫理。<sup>34</sup><span style={cite}>（莫爾特曼，《盼望倫理》，52。）</span>
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">5. 盼望倫理學的視野</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  莫特曼在《盼望倫理》第二章接著論述一種生命倫理，這是注重生命的整體性而強調肉體之必要的倫理；在第三章論述一種重視整全創造而特別涵蓋生態的地球倫理；在第四章論及公義和平的倫理，特別強調具有拯救性正義的公義性和平；最後第五章標題「以上帝為樂——審美的對位」，一開始就強調「我們不是為了改變世界而需要上帝，而是為了享有上帝而改變世界」，<sup>35</sup><span style={cite}>（莫爾特曼，《盼望倫理》，279。）</span>其中論及「安息日——創造的節日」、「歡呼基督復活」、「鬥爭之中的安寧」，涵蓋禮拜六享受創造的安息、禮拜天為基督復活的歡呼及在世界衝突中對和平的盼望。莫特曼相信，「上帝的安寧已經存在於造成癱瘓並經常是致命的各國衝突深處」，<sup>36</sup><span style={cite}>（莫爾特曼，《盼望倫理》，290。）</span>「如上帝的和平已經寓居於世界中心一樣，其也已存在於人類存在的內部」。<sup>37</sup><span style={cite}>（莫爾特曼，《盼望倫理》，290。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  莫特曼常給人帶來一種印象，就是強調具有外在行動特質的期盼（anticipation），但令人驚訝的是，他在《盼望倫理》的最後一章竟然回頭往中間回擺，他提到我們還是活在衝突、爭執之中，亦即在現在和未來盼望之間有許多張力，唯有期盼一種內在的平安，他開始說到內在世界。一九六四年，他所寫的《盼望神學》比較像是革命宣言，呼籲基督徒要期盼上帝國臨到，而且以行動來盼望——成為出埃及的教會——不過，當來到《盼望倫理》的最後，他卻呼籲基督徒要在內心世界尋找平安；在「已經開始」和「尚未成就」的動盪張力之間，尋找衝突、爭執中的平安。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  莫特曼在外在的行動與內在的平安之間，其年輕時比較傾向前者，但年長之後則向後者調整。他經常提到「生命」；「生命」的英文Life或德文<em>Leben</em>，都涵蓋生活與生命，但在中文裡的「生命」通常比較指向靈性方面，然而也可指向整全且包括肉體的生命，至於身體的生命則通常稱為「性命」，性命並不指向靈性層次，然生命則可兼具靈性與身體層次。很明顯地，莫特曼是期待一種整全的生命。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  從《盼望倫理》可以看到，《盼望神學》一路走來始終如一地重視未來盼望的神學線索，莫特曼一路走來都強調未來盼望的視域，而與巴特強調上帝超越性的主權、奧古斯丁重視內心世界有所區隔，比較意外的是，他卻在「鬥爭之中的安寧」裡讓人看到巴特強調上帝主權的影子，甚至還有奧古斯丁重視內心的影子。或許對於漸趨成熟的生命而言，歷史過程的蜿蜒曲折已非主要的關注所在，毋寧導向歷史終點的上帝的主權，才是真正的終極關懷，而內心世界的進路則尤勝於喧囂外界的進路！
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">六、總結</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                巴特面對一個自由神學當道而神學全面人文化的世代，他批判基督教神學對世界開放過度，把周遭環境視為典範，失落神學的主要目標——服事教會——卻一味追求關連當時代的哲學，缺乏神學本身的確信，強烈主張唯有當神學作為神學時，才能面對世上的各種問題。<sup>38</sup><span style={cite}>（Karl Barth, "Evangelical Theology in the 19th Century," The Humanity of God (Atlanta: John Knox, 1982), 19-20.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                巴特在晚年一篇於一九六八年十一月十七日廣播電台的訪問裡，表示他終其一生研究的神學不過是預備性的，儘管我們仍必須學習活在此世，而且投入其中的一切，但我們也要有越過它們的視野；連「恩典」一語也只是暫時的，最終極的仍是耶穌基督。<sup>39</sup><span style={cite}>（Karl Barth, Final Testimonies (Grand Rapids: Eerdmans, 1977), 29.）</span>巴特雖然強調上帝國的超越性，不過也深深了解我們仍然活在此世，亦即在歷史中仰望終極的耶穌基督。巴特在電台訪問後大約一個月，於同年的十二月十日去世。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                基本上，巴特主張天父在基督裡與人立約，藉由基督「作為揀選的上帝」，同時「成為被揀選的人」連結天上人間，強調基督得勝來高舉上帝的主權。然而，托倫斯（T. F. Torrance, 1913-2007）長期鑽研巴特，卻在後期著作中把巴特得勝的觀點蛻變成神化教義，進一步認為上帝已經成就一切，整個世界都在走向神聖化，甚至開始追求人的神化，但這想法似乎只見到終末的遠景，卻未看見眼前的殘破。來到蘇格蘭首府愛丁堡，可以感受到蘇格蘭長老教會急速地走下坡，一般教堂裡的信徒稀疏零落，甚至有教堂建築轉作票櫃中心、酒吧，至於英國其他地區，也有教堂建築被賣給伊斯蘭教作清真寺、賣給錫克教作聖殿。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                莫特曼批判巴特缺少終末期盼的水平歷史觀點，卻不斷宣稱上帝的主權隨時可介入人間，以致「全面神聖」與「全面世俗」只在一念之間，容易導致以世俗即為神聖，而塵世即為天國。因此，莫特曼重視終末盼望，強調儘管如今仍處於歷史處境中，但要盼望在地如在天——期盼終末的全然實現；他的神學具有濃厚的歷史感與終末意識。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                莫特曼從《盼望倫理》到《盼望神學》始終如一地重視未來的盼望，只是從六〇年代舉世在熾烈追尋盼望的氛圍之下熱切期待變革，轉換到至今二十一世紀初，科技、商業蓬勃發展而吞噬文化和自然環境、恐怖主義日趨野蠻的時代氛圍，儘管《盼望倫理》仍舊堅持朝向未來的盼望，但關鍵在於能夠「預嚐」來自上帝的平安，既住在世界之中，也出現在人的生命之中，這與「舊的、離世內在的基督教神祕主義」不同，並不是關上感官之門，而是以「新的、面向未來的基督教神祕主義」來喚醒感官面對未來上帝的世界。<sup>40</sup><span style={cite}>（Jürgen Moltmann, Ethics of Hope, 239.）</span>莫特曼一開始選擇以未來為主軸，後來卻主張「新的、面向未來的基督教神祕主義」，這不同於過往神祕主義只追求內在世界，莫特曼所主張的神祕主義卻是藉著期盼未來，預嚐來自上帝的平安，而非無止境地探索內在世界。
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
                '士來馬赫「從人出發」開啟自由神學的道路，巴特則以「從上帝出發」對抗自由神學，重申上帝主權與人的渺小；布魯姆哈德父子「耶穌是得勝者」的神學及饒申布士的社會福音，分別從醫治復興與社會關懷兩端，成為現代基督教倫理學的重要源頭。',
                '巴特把「雙重預定」重新詮釋為上帝揀選人而棄絕自己，藉此把自由神學對上帝主權的排斥轉化為對人之價值的最高肯定，然而此一「基督勝利宣告」也隱含把終末美景直接帶到此世、忽略歷史仍在進行中的張力。',
                '巴特主張教義學即倫理學，倫理只能建立在「唯有上帝啟示自己」的前提之下；他以〈信仰群體和公民群體〉的同心圓比喻，主張國家是教會的「比喻」，神學不應政治化，政治也不應神學化，各自守住內圈外圈的分際才能彼此貢獻。',
                '莫特曼自居「後巴特」神學家，以水平面的終末盼望補充巴特垂直面的上帝主權；他提出「轉化的終末論」，有別於天啟式（哈米吉多頓對決）、基督論式（現在即終末）、分離心態（遺世獨立）三種終末論立場，主張基督徒應以盼望引導世界的轉化。',
                '莫特曼受馬丁・路德・金恩「夢想」宣言激發，主張基督教倫理學既不是順應世界，也不是分離避世，而是對世界改變的引導；他的盼望倫理涵蓋生命、地球生態、公義和平、以上帝為樂等面向，展現整全的生命觀。',
                '莫特曼晚年在《盼望倫理》最後一章回擺向內在世界，主張唯有「預嚐」來自上帝的平安才能安頓「已經開始」與「尚未成就」之間的張力，這種「新的、面向未來的基督教神祕主義」，讓人意外地看見巴特上帝主權與奧古斯丁內心世界的影子。',
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
              <h4 className="font-semibold text-gray-800 mb-2">小布魯姆哈德「等待與催促」的兩組張力，對今日教會參與社會議題有何啟發？</h4>
              <p className="text-gray-700 leading-relaxed">
                小布魯姆哈德最終在「靈性醫治」與「社會公義」之間擺盪回中間地帶，這提醒今日教會在面對環保、貧富差距等社會議題時，既不宜完全消極等待、也不宜將教會等同於社工機構，而應學習「積極的等待」——不放棄行動，也不失去對上帝最終成就的信靠。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">巴特「內圈外圈」的比喻，對今日教會與政治的關係有何具體提醒？</h4>
              <p className="text-gray-700 leading-relaxed">
                巴特主張神學不應政治化、政治也不應神學化，牧者應當先做好神學人的本分，才能對政治有真正貢獻。這對今日教牧同工在公共議題上是否過度介入政治操作、或傳道人是否因選邊站而失去向所有立場之人傳福音的空間，都是重要的自我檢視角度。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">莫特曼對三種終末論立場的批判，對今日基督徒面對社會不公義的態度有何幫助？</h4>
              <p className="text-gray-700 leading-relaxed">
                莫特曼分別批判「政教對立式」的天啟終末論、「現狀已完美」的基督論式終末論，以及「遺世獨立」的分離終末論，主張基督徒應以盼望引導世界轉化。這對今日基督徒思考該以何種姿態面對政治極化、戰爭、社會不公，提供了兼顧盼望與行動、既不消極避世也不簡化對錯的中道視野。
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
              '巴特以「從上帝出發」對抗士來馬赫「從人出發」的神學方法。你觀察自己的信仰群體，是偏向哪一種出發點？這對倫理道德判斷的方式有何不同影響？',
              '小布魯姆哈德在靈性醫治與社會公義之間掙扎多年，最終回到「等待與催促」的中間地帶。你自己面對信仰生活中「屬靈」與「入世」的張力時，如何找到平衡？',
              '巴特主張「神學不應該政治化，政治也不應該神學化」。你如何看待今日教會與傳道人涉入政治議題的界線？',
              '莫特曼批判巴特神學把終末美景直接帶到此世，卻忽略歷史仍在進行、許多人尚未聽見福音的現實。你認為「已經成就」與「仍在盼望」之間，哪一種張力更貼近你自己的信仰經驗？',
              '莫特曼批判分離心態的終末論「雖活出屬天特徵，卻與屬地世界無法建立聯繫」。你觀察自己的信仰群體，是否也曾有類似遺世獨立、對社會不公義保持沉默的傾向？',
              '莫特曼晚年強調唯有「預嚐」上帝的平安才能安頓內心的張力。你如何理解「預嚐平安」與單純消極等待或一味向外行動之間的不同？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 讀巴特〈信仰群體和公民群體〉或莫特曼《盼望倫理》節選</h4>
              <p className="text-gray-700 mb-2">找時間讀巴特「內圈外圈」比喻的段落，或莫特曼《盼望倫理》討論「轉化的倫理學」的章節，體會兩人如何從各自的神學立場回應信仰與公共生活的關係。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 檢視自己「等待與催促」的平衡</h4>
              <p className="text-gray-700 mb-2">
                誠實反省自己面對社會不公義或教會內部問題時，是傾向消極等待上帝介入，還是傾向單靠己力催促改變，並嘗試學習小布魯姆哈德「積極等待」的中道立場。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🕊️ 練習「預嚐上帝平安」的操練</h4>
              <p className="text-gray-700 mb-2">
                本週在面對「已經開始」與「尚未成就」之間的焦慮處境時，刻意安靜片刻，練習莫特曼所說「預嚐」上帝的平安，而非只靠外在行動來化解內心的張力。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「上帝啊，求祢幫助我認識祢的主權遠超過我的想像，也求祢賜給我盼望的眼光，使我在已經開始與尚未成就之間，仍願意積極等待且甘心催促。求祢使我在信仰與公共生活之間找到合宜的分際，既不隨波逐流，也不遺世獨立，讓祢的平安在爭戰紛擾中先安頓我的內心。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
