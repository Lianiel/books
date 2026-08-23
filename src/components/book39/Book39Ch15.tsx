import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Waves, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;
const quote = "border-l-4 border-emerald-300 bg-emerald-50 pl-4 py-3 mb-3";
const quoteText = "text-emerald-800 leading-relaxed italic";

export default function Book39Ch15() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-slate-800 to-blue-900 bg-clip-text text-transparent">第十五章</h1>
        <h2 className="text-xl font-semibold text-gray-700">文學家的視域——路易斯倫理學</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          「一個人若是掉落水中時，他知道自己是溼的，因為人不是生活在水中，但魚在水中並不知道自己是溼的。」（C. S. Lewis, <em>Mere Christianity</em>）
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

            <div className={quote}>
              <p className={quoteText}>
                一個人若是掉落水中時，他知道自己是溼的，因為人不是生活在水中，但魚在水中並不知道自己是溼的。<sup>1</sup><span style={cite}>（C. S. Lewis, Mere Christianity (Glasgow: Collins, 1979), 42.）</span>
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              作為文學家的路易斯<sup>2</sup><span style={cite}>（本章多處參考林鴻信，《納尼亞神學：路易斯的心靈與悸動》〔新北：校園，2011〕，59-72，93-113。C. S. Lewis 的中文譯名各有不同，本書一律採用「路易斯」。）</span>經常給人情感細膩、溫文儒雅的印象，而作為基督教思想家的路易斯卻經常提出一針見血、振聾發聵的觀點，本章的討論主要以後者為主。
            </p>
            <p className="text-gray-700 leading-relaxed">
              路易斯的神學思想帶有深刻嚮往、追尋靈性的特質，他認定宗教信仰優先於倫理道德，而缺少靈性視野的世俗價值觀為禍則更甚於一般基督徒經常譴責的罪惡。他的倫理學建立在事實世界（實然）與價值世界（應然）兩者層次的不同，實然不等同應然；實然根據經驗，應然則基於信念；應然導引實然的方向，實然則無法自己找到方向。
            </p>
            <p className="text-gray-700 leading-relaxed">
              這種主張對應於哲學倫理學的「自然主義的謬誤」（the naturalistic fallacy）<sup>3</sup><span style={cite}>（首先正式提出這個詞為英國哲學家摩爾〔G. E. Moore, 1873-1958〕。）</span>——誤以為從「那是什麼」（is）可以推出「該做什麼」（ought），其實「那是什麼」和「該做什麼」是兩個不可混淆的層面，就如同數學研究無法推出道德價值，而道德信念也無法解決數學問題。那些經常可見對道德價值是什麼的分析，不過是屬於說明事實的層次，也就是實然的層次而已；而其分析的結果根本未能回答應當做什麼，亦即關於價值判斷的問題，也就是應然層次的考量。
            </p>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">一、普遍的客觀價值共識</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                《人之廢除》是英國作家路易斯於一九四三年在杜倫大學的演講稿，<sup>4</sup><span style={cite}>（路易斯，《人之廢》，鄧軍海譯〔上海：華東師範大學出版社，2015〕。）</span>並在同年出版，此書副標題是「從高中英語教學出發反思教育」。他批判當時的一本高中英語教科書（綠皮書），把最基本的道德價值觀判為主觀而不可靠，卻片面而狹隘地強調所謂客觀理性的原則，以致失去對於普遍、絕對價值的信念，走向價值相對化之路。問題核心在於那些批判道德價值者，其實還是預設了某些價值，不論稱為必然（necessary）、進步（progressive）或效用（efficient），他們高舉這些價值信念，主觀地認定倫理道德建立在合乎自然狀態的實用、本能等，以為只要探討事實就可得出價值判斷，<sup>5</sup><span style={cite}>（路易斯，《人之廢》，36-42。）</span>而這正是犯了「自然主義的謬誤」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                綠皮書主張「美」在於心而不在於物的主觀論，人感受到崇高的美好不過是一種內心創造出來的感覺，猶如「我有卑微感」，進而主張文句中的述語不過是在陳述自己的感覺，那是無足輕重的主觀情感狀態，因無關理性而不重要。事實上，自古以來絕大多數人相信，主觀情感只是對應客觀的存在，「客體不只是接受，而且也值得我們的認可或非難，崇敬或鄙夷」。<sup>6</sup><span style={cite}>（路易斯，《人之廢》，20。）</span>就好比若無客觀的崇高瀑布存在，人就沒有崇高的感受對應而生。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                綠皮書強調主觀感覺，否定感覺的客觀依據，把情感相對化而貶抑其價值，進一步地把價值相對化，摧毀了對於普遍、絕對價值的信念。路易斯批判綠皮書原本想要製造「知識人」，結果卻造出了「無胸之人」，「使他們與眾不同的，不是其思想之過度，而是其豐富又大度的情感之殘缺。他們的頭腦之所以看上去比常人大，乃是因為其心胸之萎縮。」<sup>7</sup><span style={cite}>（路易斯，《人之廢》，34。）</span>這些沒有情感的無胸之人，也失去了對價值的尊重，他批判說：「我們製造無胸之人，卻期望他有德性和進取心。我們嘲笑榮譽，卻震驚於在我們中間發現叛徒。我們閹割他人，卻要求此閹人生育。」<sup>8</sup><span style={cite}>（路易斯，《人之廢》，34-35。）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                路易斯為絕對而普遍的客觀價值正名為「道」（the Tao），主張世界各地經典共同呈現的「道」為普世價值的來源。「道」是一種信念，「即就宇宙之所是及我們之所是而言，某些態度著實是對的，另一些則著實是錯的」。<sup>9</sup><span style={cite}>（路易斯，《人之廢》，27。）</span>「道」是通往真理與品格的道路，它並非許多可能的價值體系當中的一種，而是所有價值判斷的唯一來源。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                由於「道」是客觀存在於歷世歷代的普世價值共識，傳統教育的目的是傳承這些價值，而當時流行的新式教育卻要推廣價值的主觀化與相對化：「老教育是一種傳承（propagation），新教育則只是宣傳（propaganda）。」<sup>10</sup><span style={cite}>（路易斯，《人之廢》，31。）</span>《人之廢除》的附錄〈道之例證〉（Illustration of the Tao），提供讀者普世價值的經典格言清單，證明自古迄今各地皆有普世價值。<sup>11</sup><span style={cite}>（路易斯，《人之廢》，96-140。）</span>
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">二、道德律真實存在</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                路易斯認為道德律具有普遍性，放諸四海皆準，這是客觀存在的事實，如羅馬書二章14～15節所說：「沒有律法的外邦人若順著本性行律法上的事，他們雖然沒有律法，自己就是自己的律法。這是顯出律法的功用刻在他們心裡，他們是非之心同作見證，並且他們的思念互相較量，或以為是，或以為非。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                路易斯從人類共同的是非判斷標準出發，比如「說謊」、「殺人」在各個時代、不同文化裡都是錯誤的，大家對「什麼樣的人是好人或壞人」有高度共識，因而看電影的了解與判斷也是相通的，據此推斷有一放諸普世皆準的道德律。儘管時代的轉移及文化的不同，甚至政治意識型態的不同，多少會造成道德價值判斷的差異，但是那些差異若比起相同之處，只不過算是十分細微的差異。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                就如大自然中有「自然的規律」，在人們當中也有「人性的規律」（道德律）；其差別在於，物體無法自己決定是否遵照自然規律，但人卻可以決定是否遵行人性規律。自然規律只論及大自然實際的樣子（實然），人性規律則指向人應當有的樣子（應然），若把自然規律套用在人身上的話，就只剩下生物性的本能反應，唯有人性規律才能導引人進入價值世界。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                道德律並非由人自行製造出來，因為它具有驅策人的力量；它也不是人類行為的一部分，因為它指導人們的行為。人類行為是處於實然（事實）的層次，而人性規律則處於應然（規範）的層次，兩者相形之下，就如作曲者藉著樂譜引導演奏者彈琴演奏音樂，又如裁判藉著球賽規則引導場上球員進行有秩序的球賽。假若撤銷一切應然的規範，只剩下實然的事實，一切演奏必然只剩下嘈雜刺耳的噪音，一切球賽只成了混亂的推擠打鬥。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                路易斯藉由《人之廢除》批判當時英國教育，一面倒地接受唯有科學實證為客觀真理，只承認事實卻批判價值為主觀，結果把文化規範都還原成本能反應。這種觀點也被當時英國教育套用在對道德律的理解，認為道德也來自人類本能諸如合作共存、互蒙其利，基於合乎本能的需求，結果就發展出道德法則。然而，這樣的說法卻無法說明，為何有些倫理道德判斷是違反本能的，並非所有判斷都是選擇弱肉強食，有些乃是決定自我讓步，甚至進而同情、幫助弱者。因此，並非所有倫理道德判斷都是為了圖利自己，也有願意犧牲自己、成全別人的判斷。這是由於道德律建立在道德價值屬於應然層次，不應當使用自然規律的實然層次強加說明。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                道德律普遍存在人人心裡，這反映了人具有超越本能反應的潛力，因為人並不全然根據本能反應行事，反而經常受到道德律的指引。人們活在良心規範中並非出於自己的選擇，對此最合理的解釋就是道德律來自創造者上帝：「從客觀的道德律，根據邏輯而推論出一位神聖的立律者。」<sup>12</sup><span style={cite}>（約翰・希克，《宗教哲學》，錢永祥譯〔台北：三民，1972〕，45。）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                既然有這難以反駁的道德律，為何現實世界仍舊經常混亂失序呢？簡言之，因為人人都知所當行，卻不願照著去行，這是人類的困境。創造者上帝把道德律放入人心裡，人人理當活在道德律規範下，然而卻都無法達到此規範的要求。正是由於道德律的失敗，人們必須轉向宗教信仰：
              </p>
              <div className={quote}>
                <p className={quoteText}>
                  基督教告訴人們必須悔改，並應許人得到赦免。因此，對那些不知道自己作了多少需要悔改的事，也不覺得需要任何赦免的人而言，我想那就無話可說了。只有當你認識清楚有一個真正的道德律，並在此律的背後有一力量，而你卻破壞了那個律，又把自己放在與那力量的錯誤關係當中，當你有了這樣的認識以後，基督教就開始對你說話了。<sup>13</sup><span style={cite}>（C. S. Lewis, Mere Christianity, 37.）</span>
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                縱使轉向宗教信仰，有些人仍不知自己需要悔改，也不覺得需要赦免，關鍵在於是否有參照對錯的標準存在——公義，人們經常忘掉公義，甚至以為並無公義可言。路易斯主張公義始終存在，即使當我們抱怨這世界不公義時，其實我們已預先知道什麼才是公義，假如沒有更高準則來衡量世上發生的一切，就不會批評說不公義。若是完全不知道什麼是公義的話，也就不會知道什麼是不公義。「一個人若是掉落水中時，他知道自己是溼的，因為人不是生活在水中，但魚在水中並不知道自己是溼的。」<sup>14</sup><span style={cite}>（C. S. Lewis, Mere Christianity, 42.）</span>人原本是乾的，掉落水中時自知濕了，這意味著人原本明白公義是什麼，才會對周遭環境的不公義有所察覺；一生都活在水裡的魚，則從來不知什麼是乾的，也從未察覺自己身上是濕的。把路易斯的觀察套用在人世，好比有些人浸泡在不公義的環境長久之後，對於環境中的不公義早已習以為常、麻木不仁。路易斯的觀察呈現一個令人擔心的真相，當人經年累月處在不公義的環境中，逐漸對周遭的不公義不再敏感，最終就宛如一條生活在水裡的魚，不再覺得身邊的環境濕透了。<sup>15</sup><span style={cite}>（林鴻信，《納尼亞神學：路易斯的心靈與悸動》，97-98。）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                無論如何，我們都知道善是好的而惡卻是不好的，然而這兩樣並非對等且可供隨意選擇。事實上，我們一直都知道應當追求合乎那個好的，這就證明了有一個更高的準則使我們知所當行，這準則必定高過我們的存在，亦即來自創造我們的上帝。善就是合乎這準則而與上帝有正確的關係，惡則是遠離這準則而與上帝沒有正確的關係。路易斯觀察在現實生活裡的人們，多半活在後者當中。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                值得注意的是，道德律是判斷和行為的「前提」而非「結論」，有如數學推演的出發點公設，人也是從道德律的要求出發去做判斷和行為，而非從判斷和行為的結果得到道德律存在的結論。<sup>16</sup><span style={cite}>（Gilbert Meilaender, "On Moral Knowledge," The Companion to C. S. Lewis, R. MacSwain &amp; M. Ward eds. (Grand Rapids: Eerdmans, 1998), 120.）</span>事實上，道德律的前提並沒有使人走向道德的判斷和行為，實際情況反而是——人人都知所當行卻不願照著去行。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                因此，基督教信仰直指那些使我們深感難堪的真相，而後提出解答，因為必須先經歷失望，之後才有安慰可言：
              </p>
              <div className={quote}>
                <p className={quoteText}>
                  當然我很同意基督教信仰終究是難以言喻的安慰，不過它卻不是從安慰本身開始的，而是從我所形容過的失望開始的，若非先經過失望就想要直接進入那安慰的話，是徒勞無功的。宗教與戰爭等等一樣，你無法藉由指望而找到安慰。假如你指望真理，最終你可能找到安慰；假如你指望安慰，你既無法找到安慰，也無法找到真理，不過是從甜言蜜語與一廂情願開始，最終必定導致徹底的失望。<sup>17</sup><span style={cite}>（C. S. Lewis, Mere Christianity, 38.）</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">三、改變人之必要</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                路德在《基督徒的自由》主張只有「信」可以使人成為「對的人」，好比一棵好樹，而活出「愛」，就好比在樹上結出「好的果子」。<sup>18</sup><span style={cite}>（路德，〈論基督徒的自由〉，《路德選集（上）》〔香港：基文，1968〕，349-386。有關《基督徒的自由》神學思想的摘要，請參照：林鴻信，《覺醒中的自由》〔新北：校園，2004〕，61-80。）</span>路易斯同樣強調，基督教信仰重視的是從「對的人」產生「對的行為」，基督徒應當先追求成為「好球員」，而非只是「打出好球」。<sup>19</sup><span style={cite}>（C. S. Lewis, Mere Christianity, 73-74.）</span>因此，「改變人」是最優先的目標，而後才是「改變行為」。
              </p>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">1. 人或體制</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  針對「先改變人或改變社會」這個常見的問題，路易斯顯然主張以改變人為優先。在一個「體制罪惡」朗朗上口的現代社會，只要有犯罪行為發生，就會有人跳出來為嫌犯說話求情，認為那人犯罪是不得已的，真正的問題完全在於惡劣的體制，其實是體制殺人犯罪，那人不過是體制的無辜受害者等等。這些論述把人的責任轉嫁給體制，雖然並非沒有道理，但卻忽略了人的主體性所應當承擔的責任。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  路易斯主張基督教社會必須建立在人身上，亦即社會理想必須建立在信仰者的基礎上，個人的改變應當優先於制度的改變。這是他與馬克斯主義者最大的不同，他認為人的上層結構決定下層結構，而非下層結構決定上層結構，這也是為何他非常重視「每個人的內在世界」的原因。<sup>20</sup><span style={cite}>（參阿曼德・尼科利〔Armand Nicholi〕，《終極之問：永恆、愛、性、快樂——C. S. 路易斯「對辯」弗洛伊德》，盧筱芸譯〔南昌：江西人民，2009〕。此書由哈佛大學臨床心理學教授執筆，源自其熱門課程「終極之問」〔The Question of God〕，作者設想路易斯與弗洛伊德的對話辯論，恰好這也是《這就是基督教》第三篇第四章「道德與精神分析」的主題。）</span>況且，當人做出什麼樣的行為抉擇，意味著做抉擇之人會隨著抉擇的內涵而有所改變：善良的抉擇使人更傾向善良，而邪惡的抉擇卻會使人更加邪惡；與他者和諧的抉擇，會帶動做抉擇之人成為與他者相處和諧的人，而與他者衝突的抉擇，則促使做抉擇之人成為經常與別人衝突的人；與自我和諧的抉擇，也會引導自己成為與自己相處和諧的人，而與自己衝突的抉擇，則會塑造自己成為與自己衝突的人。<sup>21</sup><span style={cite}>（C. S. Lewis, Mere Christianity, 83.）</span>
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">2. 出發點</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  路易斯區分道德與精神病症的不同：道德與罪有關，「罪」的部分需要悔改；「病」的部分則需要醫治。他認為「不好的心理素質並不是一種罪，而是一種病。它並不需要悔改，而是需要醫治」。<sup>22</sup><span style={cite}>（C. S. Lewis, Mere Christianity, 82.）</span>先天的心理素質是人們的出發點，出發點好壞不同，自然也會造成不同的結果。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  但路易斯相信上帝不以外表成果評判人，「人們按照別人的外表行為來判斷他；而上帝卻以人們的道德抉擇來判斷他們」。<sup>23</sup><span style={cite}>（C. S. Lewis, Mere Christianity, 82.）</span>一位心理素質原本就比較好的人，可能在沒有經歷什麼改變的情況下，他的行為表現就超越了另外一位原本心理素質不良的人，但後者卻很有可能在信仰裡經歷了極大的改變，儘管十分努力卻還是不及前者。然而，路易斯卻認為上帝的評判與人不同，「我們都只看見人如何從他的先天素質出發所做的抉擇，可是上帝卻根本不是按照人的先天素質來判斷人，乃是按照人如何運用這些素質來做判斷」。<sup>24</sup><span style={cite}>（C. S. Lewis, Mere Christianity, 83.）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  上帝按照在生命中改變多少來評判人：有些在人看來分數高者，上帝看來並非如此，因為改變很少；而另有些人看來分數低者，上帝看來亦非如此，因為改變很多。這意味著，天堂裡可能有許多在世上從不被看好的人們，這也是為什麼在每一次的道德抉擇中，有人愈來愈接近天堂，有人卻愈來愈接近地獄，而這正是路易斯寫作《開往天堂的巴士》的重要主題。<sup>25</sup><span style={cite}>（魯益師，《開往天堂的巴士》，魏啟源譯〔新北，校園，2014〕。）</span>
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">3. 認識自己</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  路易斯認為，愈好的人愈了解自己的不好；而愈壞的人愈以為自己很好。一個還不是很壞的人，還知道自己不好；然而一個道地的壞人，卻看自己是道地的好人，「好人了解善與惡，壞人則兩者都不了解」。<sup>26</sup><span style={cite}>（C. S. Lewis, Mere Christianity, 84.）</span>壞人需要悔改，卻無能力悔改；好人不需要悔改，但卻有能力悔改。唯有耶穌基督能夠解決這個困境，祂站在需要悔改之人的立場，又站在具有能力悔改之上帝的立場。耶穌基督順服降卑成為人，與我們在一起，但同時祂又具有完全且能拯救人之上帝的能力，「基督曾經歷過完全的順服與降卑：祂是上帝，因此是完全的；祂也是人，因此順服並降卑」。<sup>27</sup><span style={cite}>（C. S. Lewis, Mere Christianity, 58.）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  唯有真正認識自己的人，才能明白需要悔改且領受上帝的恩典。強調悔改之必要，不只確信人需要改變，而且深知人無能為力改變自己，需要信靠耶穌基督而經歷被改變。其實「宗教都是勸人為善的」並不適用於基督教，因為基督教信仰並不追求成為「為善的好人」，乃是追求成為具有來自基督生命的「新人」。基督教信仰並非直接關心好行為，而是先關注行為者是否成為新人，唯有新人能結出好行為的生命果實。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  行為表現是非常表面的，而什麼樣的人才是深層的。比如當人受到刺激而暴跳如雷時，其實不能怪那刺激的因素，因為「刺激」不會使人成為暴躁的人，只不過是「暴露」出自己原本是什麼樣的人。當我們情緒失控而冒犯別人時，總是為自己開脫說：「抱歉，我這麼失態，是因為最近常常吃不下、睡不飽才會情緒失控，其實我平常不是這個樣子。」這是經常可見的說詞，不過當別人讚賞我們的溫和表現時，卻從不回答說：「對不起，我會有這麼好的表現，是因為最近飲食正常、睡眠充足，其實我平常是十分暴躁而難以相處的人。」
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">4. 裝扮——培養習慣</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  上帝真正關切的是人，而不只是行為表現。由於路易斯認為人的裡外互相牽動，人可從外在的學習而增強內在的轉換，亦即從積極改變外表行為，而去印證內在的改變。因此，路易斯認為信仰就是「裝扮」（pretend）——當作自己已經相信而按照所信的去行，一開始可能會有些不適應，但漸漸會從外面到裡頭都改變，直到裡外一致。比如當禱告說「我們在天上的父」時，就是把自己放在「上帝兒女的地位」來裝扮。<sup>28</sup><span style={cite}>（C. S. Lewis, Mere Christianity, 157-159.）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  應當注意的是，「裝扮」只能應用在那些經歷悔改且領受上帝恩典的人，鼓勵這樣的人積極地活出與自己身分相稱的行為，如此更能印證自己的身分。就此意義而言，路易斯的論述與德行倫理學相似，裝扮就是培養好習慣，讓好習慣呈現出內在的信仰，也讓好習慣內化成為人的一部分。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">5. 全人改變</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  現代社會經常歌頌進步、改善、改良與進化等，路易斯認為那些都不夠徹底，人所需要的是藉由救贖而來的改造。「不是進步改善，而是改造轉換」（not mere improvement but Transformation）；<sup>29</sup><span style={cite}>（C. S. Lewis, Mere Christianity, 181.）</span>不是進化，而是進化的超越。基督教信仰不追求成為「好人」，而是成為「新人」。新人是被改造的人，任何新人都會比原先的舊人還要好，但好人則不一定經歷過被改造，有可能只是出於天生的特質。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  基督教信仰不只要求行為的改變，而是要求全人的改變。由於必須完全改變，即使今生尚未完成，仍要繼續下去直到終末。既然，改變是不可停下來的，基督徒就必須一直處於「改變中」，信總要比不信時情況好，現在也要比過去的情況好。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  當改變自己的力量從自己而來時，很容易就會造成一個假象——自以為「好」，以致心生自滿而停止改變，當不再追求改變時，卻又使自己無法處於「好」的狀況，以致這惡性循環難以遏止。因此，基督教信仰認為唯有從上帝而來的力量才能真正改變人，而且當人開始變好時，就會更加察覺自己的不好，直到上帝徹底做工、改造自己。「人在變好時越來越清楚地認識到自身殘留的惡，在變壞時越來越認識不到自己的惡。」<sup>30</sup><span style={cite}>（路易士，《反璞歸真——純粹的基督教》，汪詠梅譯〔台北：五南，2016〕，124。）</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">四、論道德</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                路易斯認為論及道德時，必須考慮三個部分：一、人與人的關係——人與人之間如何做到公平協調；二、個人內在世界——每個人的內在世界裡如何整全協調；三、人生總體目標——有如一支艦隊應當行駛哪條路線，或是一支樂隊應當演奏什麼曲調。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                現代人往往只關心第一部分，從個人與個人一直到階級與階級、國家與國家之間的關係，相關消息充斥媒體版面，也是眾人的興趣與關注所在；不過現代人卻經常忽略第二部分，人們多半不關心個人內在世界的問題；至於第三部分，人類整體方向究竟應當往哪裡發展的問題，則歧見更大且難以一致，這涉及人與創造者的關係，亦即基督教與非基督教道德觀主要的分歧所在。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                路易斯的思想架構以第三部分為基礎，第二部分則為出發點，最後才應用在第一部分。路易斯倫理道德觀一直都是與信仰密切連結，不論人生總體目標或個人內在世界都必須在信仰裡找答案，而後才有應用可言。由於第三部分通常在系統神學裡探討，以下只概略討論與第一、第二部分有關者，且只介紹路易斯對四種基本德行的看法。<sup>31</sup><span style={cite}>（C. S. Lewis, Mere Christianity, 71.）</span>
              </p>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">1. 基本德行</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  現代人經常忽略個人內在世界的問題，聖經卻提醒內在世界的重要：「你要保守你心，勝過保守一切，因為一生的果效是由心發出。」（箴4:23）和合本修訂版本把後半句翻成：「因為生命的泉源由心發出」（for from it flow the springs of life），亦即有什麼樣的內在生命，就有什麼樣的外在生命，人應當好好地守護、培育、灌溉、滋潤自己的內在生命。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  內心是行為的源頭，內心若是敗壞的話，行為必定難以正直。論及德行，既涵蓋內心的部分，亦包括行為的部分。當論及四種基本德行與三種信仰德行時，前者是凡一般有教養者都了解，而後者則是只有基督徒才能明白。<sup>32</sup><span style={cite}>（C. S. Lewis, Mere Christianity, 71-73.）</span>四種基本德行關係到每一個人的內在世界，而三種信仰德行則關係到人與上帝的關係，此處只介紹路易斯對四種基本德行的看法。
                </p>
                <div>
                  <h5 className="font-semibold text-slate-600 mb-2">▲ 個人內在世界</h5>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    在個人內在世界的四種基本德行中，路易斯強調「謹慎」在於清楚明白自己正在做什麼，以及將有什麼結果，而非如同孩提階段天真無知，「上帝不喜歡人在智力方面懶惰」，而作基督徒就是接受一種教育；<sup>33</sup><span style={cite}>（路易士，《反璞歸真》，108-109。）</span>「節制」在於凡事適可而止，沉迷於高爾夫球、高級服飾並沒有比酗酒、宴樂在道德上更加高尚，都是失去節制，並無高下之分；「公義」並非指向法庭上的正義，而是「公正」，涵蓋誠實、互讓、真誠、守信等美德；「堅毅」則強調面對危險時的勇敢及堅持到底的勇氣，「堅毅」也是長期實行其他美德的共同基礎。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    路易斯主張，成為有美德的人比表現有美德的行為更加重要，就像成為優秀的運動員比打出好球更有價值，可見美德並非指向具體的行為，而是指向具有美德特質的人。追求美德意味著，手段必須與目的一致，為了達到目的而不擇手段並不被容許；美德亦非指向一套生活準則，而是要成為具有美德特質的人；美德從今生持續到彼岸，因為美德本身具有營造天堂的價值。<sup>34</sup><span style={cite}>（路易士，《反璞歸真》，107-111。）</span>
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-slate-600 mb-2">▲ 愛心的考驗</h5>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    基督教教導我們應當賙濟窮人，路易斯說：「我想，最恰當的原則是，施捨應當多於我們所能結餘的。」（I am afraid the only safe rule is to give more than we can spare）<sup>35</sup><span style={cite}>（C. S. Lewis, Mere Christianity, 78.）</span>當施捨不超過結餘時，其實只是把有餘的拿出來，這對我們的生活一點影響都沒有；一旦施捨超過結餘時，必定會造成生活所需的費用不足，亦即給我們帶來一些不便與痛苦，這才是體驗到犧牲奉獻的施捨。由於人性總是想要有更多生活的保障，把結餘的收藏起來就是最佳保險，然而這種退縮的心理卻可能使我們愈來愈吝嗇，以致付出的心志愈來愈低落。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    這一個原則不只可應用在奉獻金錢，亦可應用在奉獻時間：其一，當我們只把有餘的時間用來服事，有如只是運用閒暇時間，其實還是保有非常舒適的生活，這種付出恐怕仍愛心有限；一旦自己時間不足，卻願意拿出來服事，那種放棄舒適生活的愛心才禁得起考驗。其二，許多人常說退休之後要做什麼好事，可是退休之後不就只是有餘的時間嗎？不只如此，那些時間的品質已非年富力強的時期，假若那些好事那麼有價值的話，為何不用人生最好的時期去做呢？
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    耶穌在耶路撒冷冷觀看眾人奉獻，看見一個窮寡婦投了兩個小錢，就叫門徒來說：「我實在告訴你們，這窮寡婦投入庫裡的，比眾人所投的更多。因為，他們都是自己有餘，拿出來投在裡頭；但這寡婦是自己不足，把她一切養生的（原意：生命）都投上了。」（可12:43-44）眾人都是奉獻有餘的，唯有那寡婦奉獻一切養生的，形同奉獻自己的生命。
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">2. 檢視道德議題</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  路易斯對於道德議題的檢視，既不教條或過度嚴肅，但也不會因放鬆而失去了原則，總是在幽默中呈現重點所在。
                </p>
                <div>
                  <h5 className="font-semibold text-slate-600 mb-2">▲ 孰輕孰重？</h5>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    路易斯曾經就讀校風崇尚浮華的瑪爾文學院（Malvern College），處處可見追求名利與弱肉強食的現象，大家卻不以為意。當時同性戀行為不只在道德上驚世駭俗，而且在法律上被定罪，被眾人普遍關切。路易斯在其自傳卻挑這個敏感議題加以反諷議論：「殘酷遠比情慾邪惡多了，『世俗價值觀』至少與『肉體』一樣地危險。……世俗價值觀只不過將帶你下地獄，而同性戀卻能讓你下監、醜聞纏身且失去工作，說句公道話，世俗價值觀幾乎無絲毫能力造成這些後果。」<sup>36</sup><span style={cite}>（C. S. Lewis, Surprised by Joy (N.Y.: Harcourt Brace Jovanovich, 1955), 109.）</span>
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    下監或下地獄哪一樣嚴重呢？這應當是不辯自明的，然而大家卻重重地提起前者而輕輕地放下後者，把信仰價值觀丟在一邊，無視於世俗價值觀正在摧毀靈魂的完整。路易斯批判的是，對於世俗價值觀蠶食鯨吞基督徒的精神靈性，大家竟然視而不見，而單單對情欲之罪嚴加譴責，就後果的嚴重程度而言，到底孰輕孰重呢？
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    一般而言，我們不會為基督徒有世俗價值觀而覺得震驚，儘管那有使得基督徒下地獄的嚴重性，我們卻當作稀鬆平常；然而我們卻經常為了耶穌基督願意赦免的情欲之罪而大驚小怪，緊緊咬住不肯放手，從一般常見的講台信息就可知實際情況。<sup>37</sup><span style={cite}>（林鴻信，《納尼亞神學：路易斯的心靈與悸動》，52-55。）</span>
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-slate-600 mb-2">▲ 性與婚姻</h5>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    論及性與婚姻，基督教信仰主張貞潔，結婚者必須對配偶忠實，未婚者則必須潔身自愛。性與生殖有直接的關連，因此性的放縱就等於放縱生殖一般地荒唐，因為人需要的生殖並不像性的放縱那麼多。現代社會卻經常鼓勵人對於性的態度必須開放，不要悶燒生病，不要壓抑成疾，但卻忽視了節制的重要，這麼一來，實質上形同鼓勵放縱。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    論及婚姻，基督教主張婚姻是兩人成為一體，因此必須持守給予對方的承諾。遵守承諾比羅曼蒂克的感覺更加重要，因為「在愛中」只是一種感覺而已，不可能單靠此長久持續下去，必須透過婚姻建立的承諾才有可能長長久久。<sup>38</sup><span style={cite}>（林鴻信，《納尼亞神學：路易斯的心靈與悸動》，107-108。）</span>
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-slate-600 mb-2">▲ 寬恕赦免</h5>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    路易斯認為寬恕是可以學習的，應當由輕而重，由簡單而複雜，就像學數學是從加減法而非從微積分開始。學習寬恕也應當從比較容易的開始，比如從原諒朋友開始，直到有一天或許能夠做到寬恕敵人。我們可能聽過，應當要恨惡罪而不要恨惡犯罪的人，這聽來非常不容易，但路易斯卻觀察深刻，他發現我們其實常常用這種態度去對待一個人——自己，人人對待自己時都能夠做得到——愛那個人而恨他的罪。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    路易斯認為，愛你的敵人並不必然代表放棄懲罰，愛與懲罰所代表的公義是並存的。即使愛自己也不等同必須縱容自己，比如說當犯了殺人罪，應當自首接受刑罰，甚至包括死刑。路易斯認為十誡裡不可殺人的禁令是指謀殺，因此法官宣判死刑或軍人在戰場上殺敵都是正當的，在這些不得已的情況下可以殺人，但絕對不可以恨人，因為人的生命是長存的，若生活在恨裡，就是一直活在地獄裡。<sup>39</sup><span style={cite}>（林鴻信，《納尼亞神學：路易斯的心靈與悸動》，109。）</span>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">五、最大的罪</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                奧古斯丁提醒精神與靈性的罪的可怕：「大部分的驕傲，並不見於邪惡的行為裡，乃在善的行為裡。」<sup>40</sup><span style={cite}>（奧古斯丁，〈論本性與恩典〉，356-357。）</span>循此思路，路易斯觀察所見，「最有害的快樂都是純精神性的」，包括陷害、控制、支配、掠奪、毀謗、權力與憎恨等，他認為在人的「動物性自我」（Animal self）與「魔性自我」（Diabolic self）之間，後者更壞，「因此一個冷酷、自以為義、經常上教會的偽君子可能比一位娼妓更加靠近地獄」。<sup>41</sup><span style={cite}>（C. S. Lewis, Mere Christianity, 92.）</span>這一段話看似聳人聽聞，其實不然，因為耶穌基督經常與那些罪人在一起，卻與法利賽人保持距離！確實如此，被尊敬的高貴人遠比被輕視的罪人更有可能陷入驕傲與自我中心。

              </p>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">1. 靈性的癌</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  在福音書裡常見耶穌基督譴責誰呢？有罪的人嗎？稅吏嗎？事實上，他譴責最多的是那些陷入驕傲與自我中心的文士與法利賽人，他們陷入了最有害的純精神性快樂。耶穌基督常常和罪人在一起，這並非罪人沒有問題，而是還有更糟糕的高尚人——文士與法利賽人，這豈非也提醒神學人與傳道人應引以為鑑？如果研究與罪有關的資料，馬上就想到別人，這恐怕就證明了自己的問題——太少想到自己的罪，而太多想到別人的罪。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  路易斯認為「驕傲」是最大的罪，他甚至稱呼驕傲為「靈性的癌」。<sup>42</sup><span style={cite}>（C. S. Lewis, Mere Christianity, 110.）</span>因此，「謙卑」的德行顯得特別可貴，然而學習謙卑的第一步，就是了解自己是驕傲的，「假若你以為自己一點都不自負，那就足以證明你真的很自負」。<sup>43</sup><span style={cite}>（C. S. Lewis, Mere Christianity, 112.）</span>反之，當我們不以為自己驕傲時就擺到驕傲的那一端了，他說：「當我們覺得自己的信仰使我們變得很好時，尤其是比別人更好時，我們可以確定說不是被上帝影響而是受魔鬼影響了。」<sup>44</sup><span style={cite}>（C. S. Lewis, Mere Christianity, 109.）</span>自己覺得自己很好，往往是看輕別人的開始。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">2. 友愛的誘惑</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  路易斯的《四種愛》對「友愛」的評估極其崇高，因此也最常陷入誘惑：「由於朋友之愛是人類愛中最不屬世的一種，所以它所會陷入的，也是最精神層面的陷阱。」<sup>45</sup><span style={cite}>（魯易斯，《四種愛》，梁永安譯〔台北：立緒，1998〕，101。）</span>一群朋友可能只看見彼此認同的世界，而形成一個緊密的內圈，自然衍生出圈內與圈外之分，「於是，對朋友的謙卑很容易就會引申出對外人的驕傲」。<sup>46</sup><span style={cite}>（魯易斯，《四種愛》，97。）</span>「對朋友的謙卑」無異於「對外人的驕傲」，乃至自命不凡，孤芳自賞，再來就是退化成結黨營私了。<sup>47</sup><span style={cite}>（魯易斯，《四種愛》，95-100。）</span>
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">3. 內圈外圈</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  一九四四年，路易斯在倫敦大學國王學院演講〈內圈〉（The Inner Ring），對劃分內圈外圈的現象做出批判。<sup>48</sup><span style={cite}>（C. S. Lewis, "The Inner Ring," The Weight of Glory (N.Y.: Macmillan, 1980), 93-105. 中譯：魯益師，〈話「圈內」〉，陳毓華譯，《校園》，1997/39-3，42-45；魯益師，《極重無比的榮耀》，鄧軍海譯〔新北：校園，2019〕，161-182。）</span>雖然路易斯對這種隨處可見、追求進入圈內的現象視為自然天性，而且認為圈子的形成可以使共事者培養友誼。理想的朋友與理想的圈子應當是並存的，然而不可否認追求進入圈內這件事卻常造成嚴重的問題。內圈的現象本身並非罪惡，然而極度渴望進入內圈卻帶來許多傷害。
                </p>
                <div className={quote}>
                  <p className={quoteText}>
                    內圈本身或許是中性的，然而催促我們進入內圈的欲望卻不是這樣，渴望進入這件事卻可能非常危險。……儘管內圈並非很美好的事，不過是生命中不可避免而無害的特質，然而我們一心要進入圈內的期盼是什麼呢？當我們被排除在外的痛苦是什麼呢？當我們進入圈內的快樂又是什麼呢？<sup>49</sup><span style={cite}>（C. S. Lewis, "The Inner Ring," 99.）</span>
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  路易斯嚴厲提醒說，追求進入圈內的渴望欲求極其強烈且難以控制，這不只是為了有利可圖，而且更是為了「一份隱私的親密感」。<sup>50</sup><span style={cite}>（魯益師，〈話「圈內」〉，43。）</span>這種渴望欲求形成人世間一股巨大的潮流，「而且也是構成我們現在所認知的世俗世界很重要的因素——也就是世界為什麼充斥著掙扎、競賽、混亂、貪賄、失望、自吹自擂的各種手腕」。<sup>51</sup><span style={cite}>（魯易師，〈話「圈內」〉，44。）</span>世俗價值觀的力量是難以抵擋的，從進入職場的第一天到最後一天，我們都會在這種渴望欲求的主宰之下，「假若你想要以任何其他方式生活的話，只有透過有意識地而且繼續不斷地努力。假若你什麼代價都沒有付出，而且任其隨波逐流的話，你將成為貨真價實的『圈內追逐者』」。<sup>52</sup><span style={cite}>（C. S. Lewis, "The Inner Ring," 101.）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  路易斯提出兩個理由反對追逐進入圈內，其一，「在所有熱情當中，成為圈內人的熱情最擅長讓本質還不壞的人做出很壞的事情來」。<sup>53</sup><span style={cite}>（C. S. Lewis, "The Inner Ring," 103.）</span>為了追求成為圈內人，可以使得一個人不計代價而且無所不為，乃至無惡不作。其二，「追求不應擁有的事物，這就是一種扭曲的欲望最大的特徵」。<sup>54</sup><span style={cite}>（C. S. Lewis, "The Inner Ring," 103.）</span>有如使用篩子取水一般，邊取邊漏，永遠無法取到水，卻又不停被這欲望驅使下去，追求成為圈內者也是如此，真正問題的源頭在於害怕成為圈外人，只要這害怕不除去，就會永無止境地追求成為圈內人，卻始終無法擺脫身為圈外人的感覺。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  路易斯分析追求進入圈內的動機，經常不是為了比圈子本身更高的目標，而只是為了想成為圈內人而努力進入圈內，結果總是發現圈內有圈，有如洋蔥層層包裹一般，而最裡面根本是空的，以致那些追逐成為圈內者處於一種不斷追求的焦慮當中。而且，路易斯還注意到，對圈內人而言，那些站在圈外而一心想要進入圈內者則是圈內人的主要樂趣所在，這會使得圈子本身強化其排他性，形成一幅荒謬的圖像：圈內人團結齊心地排擠圈外人，而圈外人則爭先恐後地想要擠入圈內。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  從圈內的誘惑可知，即使友愛也可能因自我膨脹而淪為經營圈子，「朋友之愛就像其他人類愛一樣，是無法自我救贖的」。<sup>55</sup><span style={cite}>（魯易斯，《四種愛》，梁永安譯〔台北：立緒，1998〕，101。）</span>縱使友愛是最屬靈而不屬世的，但就像其他出於人的愛一樣，也無法靠著己力而免於沉淪。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">六、總結</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                路易斯並非一位倫理學家，而是文學家與基督教思想家，然而他的論述性作品和文學性作品多少都反映出基督教倫理思想。他並不信任哲學家和神學家的倫理學系統，認為那不過是建立在已有事實的推理，從實踐中建構理論，而且又藉由理論增強其實踐。<sup>56</sup><span style={cite}>（C. S. Lewis, Christian Reflections (Grand Rapids: Eerdmans, 1978), 45.）</span>路易斯則高舉上帝主權，主張宗教信仰優先於倫理道德，亦即倫理道德應當建立在宗教信仰的基礎之上，唯有宗教信仰能夠改變人，並且賦予人力量。
              </p>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">1. 人的成長優先於道德行為</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  路易斯的《人之廢除》，書名反映他對「人」的重視，基督教信仰重視的是從「對的人」產生「對的行為」，在改變人或改變體制之間，他選擇人的改變優先於體制，他也看見行為的表現只是表象，真正決定性的則是人的出發點，這才會深深影響行為表現，他一再強調「認識自己」的重要性遠超過「行為表現」，這一切都指向倫理道德議題的討論，應當以「人」而非「行為」為主要焦點。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  米連德教授（Gilbert Meilaender）認為路易斯主張道德應當被宗教超越，亦即道德的充分實現在於它本身被超越，道德律真正要求的是要我們停止倚靠自己的能力去遵守它，而我們自己應當經歷重生。<sup>57</sup><span style={cite}>（Gilbert Meilaender, The Taste for the Other: The Social and Ethical Thought of C. S. Lewis (Grand Rapids: Eerdmans, 1998), 232-233.）</span>這「重生」意味著，必須捨棄自我中心，積極而言，就是被自我犧牲的愛驅動，從願意成為道德人，轉變成愛好上帝良善的人，<sup>58</sup><span style={cite}>（Gilbert Meilaender, The Taste for the Other, 234.）</span>畢竟人的成長優先於道德行為的表現！
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">2. 不被馴服的獅子</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  《納尼亞傳奇》系列中的獅王阿司能，相當引人注目，路易斯想要呈現那一隻不被馴服的獅子。阿司能往往在大家興高采烈中，就靜悄悄地溜走了：
                </p>
                <div className={quote}>
                  <p className={quoteText}>
                    水獺先生就提醒他們說：「他說來就來，說去就去，他要來，你擋也擋不住，要去，留也留不住，今天你看見他，明天他也許就發現不到他的蹤跡。他不喜歡被人逼著留下來。再說，他當然還要到別的國土裡去看看。沒有關係，他會常常來的，你就是不能強迫他，他是野性的，這點你明白，他並不像一隻馴服的獅子（Not like a tame lion）。」<sup>59</sup><span style={cite}>（魯益師，《獅王、女巫、衣櫥》，王文恕譯〔香港：基文，1965〕，159。）</span>
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  人們常夢想著馴服野獸、天氣、水災、旱災等，可能也會夢想著要馴服上帝，但在路易斯的小說裡，獅王阿司能是不可被馴服的，自然上帝也是不可被馴服的。<sup>60</sup><span style={cite}>（Cf. Bruce L. Edwards, Not a Tame Lion: Unveil Narnia through the Eyes of Lucy, Peter, and Other Characters Created by C. S. Lewis (Wheaton: Tyndale House Publishers, 2005).）</span>當蘇珊首度聽到關於獅王阿司能的事時，她非常好奇，問說：「他安全嗎？」（Is he - quite safe?）露西也問：「那麼，在他面前是否不安全？」（Then he isn't safe?）<sup>61</sup><span style={cite}>（C. S. Lewis, The Complete Chronicles of Narnia (N.Y.: HarperCollins, 2000), 99.）</span>人天生關心自己的安全，自己設定安全的舒適區，自然也希望上帝在這舒適區裡活動，而以此成為可以預測安全與否的重要因素，這即是希望至少上帝是可預測的。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  然而，路易斯用「不被馴服的獅子」投射到他對上帝的認識，上帝也是不可被馴服的，這是用文學語言描述上帝的主權，祂既不可預測，亦不可控制，這意味著路易斯的倫理道德思想總是尊上帝為大，人儘可能地探索合乎上帝心意的倫理道德，但必須留下上帝主權的空間，而非把倫理道德法則化，反過來企圖把上帝放進受這法則約束的束縛裡。不被馴服的獅子形象有助於我們認識上帝令人敬畏的神性，有限的受造者迎見無限的創造者必然恐懼戰兢，上帝國的價值觀顛覆俗世價值觀與人間秩序，上帝的恩典挑戰人性的傾向，上帝的良善意味著真理、真實，來自上帝的一切對我們而言都不安全，挑戰著我們的舒適區。至於「不被馴服的獅子」是否就直指上帝，路易斯應當會語帶保留，因為故事歸故事，他並不是寫寓意小說，不如說「不被馴服的獅子」是個類型，藉此類型可增加我們對上帝的認識，然而我們亦可在雄心壯志、特立獨行、笑傲江湖、勇於探險的路易斯身上看見那隻「不被馴服的獅子」，這並不意外，因為人受造原本就帶有上帝的形像。<sup>62</sup><span style={cite}>（C. S. Lewis, Christian Reflections, 46-47.）</span>
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">3. 經典之必要</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  從上帝主權的角度來看，由於所有人都是按照上帝的形像受造，「基督教倫理學」並未帶來全新的道德準則，其重要內容亦出現在其他偉大的文化之中，如埃及、尼尼微、巴比倫、中國的經典。路易斯十分注重古老的經典，他認為這些經典可以幫助我們跳脫所處時代的盲點：
                </p>
                <div className={quote}>
                  <p className={quoteText}>
                    每一個時代的人都有其特有觀點，擅長看見某些真理，也容易犯下某些錯誤，因此我們都需要一些能改正自己的世代之典型錯誤的書——古老的書。一切當代作者多少都分享了當代觀點，甚至連我這種看來最反對當代觀點的人也無法跳脫當代觀點。最令我震驚的是，當我讀到一些過去世代的爭論時，發現正反雙方都有大量當今人們絕對無法接受的觀點，儘管當時雙方都自以為壁壘分明地互相對立，但事實上雙方卻都常暗暗地站在同一戰線——分享一大堆當時通行的看法，而一起反對先前以及以後的世代。……沒有一人能全然倖免於時代盲點，如果我們只讀現代書的話，必然會增強盲點而減弱防範它的能力。<sup>63</sup><span style={cite}>（C. S. Lewis, "Preface from the First Edition," On the Incarnation: Saint Athanasius (Yonkers, N.Y.: St. Vladimir's Seminary Press, 2014).）</span>
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  推崇古老經典的主要原因，是為了掙脫當今世代視野的轄制，這應用在倫理道德思想上特別有益，因為倫理道德容易受時代變遷的影響，唯有古老經典提醒我們那些流傳長久且寶貴的價值共識。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">4. 走出孤立的個體</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  米連德教授研究路易斯的社會、倫理思想的著作——《對他者的喜愛》（The Taste for the Other），主張路易斯思想中心在於「人是為了與上帝相通共融而被造」，<sup>64</sup><span style={cite}>（Gilbert Meilaender, The Taste for the Other, 117.）</span>因為上帝為人設計的幸福——「自由、自發地在忘我的愛和喜悅中與上帝連結，並且與其他人連結」。<sup>65</sup><span style={cite}>（C. S. Lewis, Mere Christianity, 49.）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「我們希望超越自己。每個人的本性都是從一個獨特的視角和選擇來看待整個世界。」<sup>66</sup><span style={cite}>（路易斯，《文學評論的實驗》，徐文曉譯〔上海：華東師範大學出版社，2008〕，155。）</span>人人都受到自己個人視野的限制，然而，「我們並不滿足成為萊布尼茨的單子，我們需要窗口，文學作為言說（Literature as Logos）就是一系列的窗口，甚至是一系列的門」。<sup>67</sup><span style={cite}>（C. S. Lewis, An Experiment in Criticism (Cambridge: Cambridge University Press, 1961), 138.）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  路易斯對於孤獨危害生命的體驗很深，形容孤立的個體為「萊布尼茨的單子」，只能從自己「獨特的視角和選擇來看待整個世界」，因此這樣的個體需要藉助別人的眼睛與想像來感受別人的心，以超越自己的侷限，文學就是提供這樣出路的「窗口」與「門」。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  文學的功能在於提供讀者進入作者視角的途徑，「閱讀一部偉大作品之後，我們的感受之一是『我走出來了』。從另一個人的眼光『我走進去了』；刺破了另一個單子的外殼，發現了裡面的究竟」。<sup>68</sup><span style={cite}>（路易斯，《文學評論的實驗》，155。）</span>「走出來了」是從讀者自己視角的侷限走出來，而「走進去了」則是向作者藉由作品提供更寬闊的視角走進去。
                </p>
                <div className={quote}>
                  <p className={quoteText}>
                    但是閱讀偉大的文學作品使我成為千百人，卻仍然保存自己。就像希臘詩歌裡的夜空，我用無數的眼在看，但卻仍然是我自己在看。在此刻，就像在敬拜裡、在愛裡、在道德行為裡、在認知裡，我超越了自己；不過同時我並未高過我自己。<sup>69</sup><span style={cite}>（C. S. Lewis, An Experiment in Criticism, 141.）</span>
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  經常成為被孤立個體之試煉所困的路易斯，急切地想要走出自己而進入別人，然而他又不願失去自己，所以他體驗到唯有在文學裡確實能夠如此。「上帝只能向真正的人啟示祂真實的自己。」<sup>70</sup><span style={cite}>（路易士，《反璞歸真——純粹的基督教》，202。）</span>真正的人不只是好的個體，而且是能夠在群體中互相連結、彼此幫助的人，有如不同的隊員組成一個樂隊，不同的器官組成一個身體，這是何以教會、信仰群體最為合適作為認識上帝之處。<sup>71</sup><span style={cite}>（C. S. Lewis, Mere Christianity, 141.）</span>
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">5. 勇於對抗時代潮流</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  路易斯在《給孩子們的信》中寫道，人們只有三件事需要去做：應該做的、不得不做的、喜歡做的，然而許多人卻把時間用在這三件事以外的事上，「比如，僅僅因為別人讀過，所以他們便去讀那些他們並不喜歡的書」。<sup>72</sup><span style={cite}>（路易斯，《給孩子們的信》，余沖譯〔上海：華東師範大學出版社，2009〕，29。）</span>路易斯認為時代潮流使人跟隨大眾而失去判斷力，這也同樣發生在倫理道德判斷方面。不要盲從時代潮流，也不要盲從時代潮流所設定的議題，而應當按照信仰所設定的議程順序，根據信仰價值觀來做判斷。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  時代潮流高舉人文主義，路易斯則明確反對順從時代潮流的自由神學。自由神學有意避談人的罪惡，他則認為「光靠時間不能清洗罪狀。清洗罪狀的不是時間，乃是悔改及基督的寶血」，所有的罪惡都永遠在上帝眼前，那些真正藉由悔改與基督的恩典而得到赦免的人，必定會謙卑記住這赦罪的代價。<sup>73</sup><span style={cite}>（魯益師，《痛苦的奧秘》，鄧肇明譯〔香港：基文，2007〕，53。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  奉行自由神學者反對天堂與地獄的信念，認為超自然的色彩導致現代人不願相信基督教。他們想要把基督教改造成沒有神祕色彩的宗教，主張唯有按照理性行事並尊重自然規律。路易斯觀察自由神學，看見其否定天堂的動機在於追求安全，因為在這種沒有天堂的基督教裡，他們絕對不會「受騙」或「下錯了注」，然而「最安全的」往往也是「最呆板的」，這意味著他們不再具有冒險精神而展開探索之旅，寧可滿足於「沒有事實可以推翻」，背後則是與時代潮流合流。<sup>74</sup><span style={cite}>（魯益師，《飛鴻22帖——魯益師論禱告》，黃元林等譯〔台北：校園，1999〕，203-204。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  有些奉行自由神學者接受天堂但否認有地獄，因他們相信的是安全又馴良的神，唯獨慈愛且不會懲罰人。傳統基督教信仰對地獄的主張特別冒犯現代人的理性思維，然而路易斯卻說：「我從未遇過一個完全不相信地獄的人，會活潑和有生命力地相信天堂的存在。」<sup>75</sup><span style={cite}>（魯益師，《飛鴻22帖——魯益師論禱告》，128。）</span>這意味著：「如果我們真正相信天堂的話，自然也就會相信有地獄。」同時這也意味著：「一個人若不相信有地獄的話，就不會相信天堂。」如果一個人相信親近上帝是極其美好的，他就會同時相信遠離上帝是極其可怕的；如果一個人不相信遠離上帝是極其可怕的，他就不會相信親近上帝是極其美好的。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  對於倫理道德判斷而言，自由神學避談罪惡，也反對天堂與地獄，這必然導致善惡判斷標準的動搖。康德主張靈魂不朽的公設是建立在，最終的審判所呈現對是非對錯的終極標準，一旦撤除了這標準，就無從判斷善惡了。基督教信仰以上帝為一切美善的終極源頭，善在於親近上帝，而惡則在於遠離上帝，這是是非對錯的終極標準。因此，路易斯勇於對抗時代潮流，並且這麼說：「靈魂一旦為切慕神的思想所喚醒、激勵或提昇，（我想）一定也會同時醒覺到失去神的可悲可怕。」<sup>76</sup><span style={cite}>（魯益師，《飛鴻22帖——魯益師論禱告》，129。）</span>
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
                '路易斯以「道」（the Tao）主張存在普遍而客觀的道德價值共識，批判把一切道德價值化約為主觀感覺、本能或效用的「自然主義的謬誤」——從「那是什麼」推不出「該做什麼」，事實與價值是兩個不可混淆的層面。',
                '道德律真實存在於人心，是判斷與行為的「前提」而非「結論」；道德律的失敗（人人知所當行卻不願照著行）正是基督教信仰指向悔改與恩典的起點，唯有先經歷失望，才有真安慰可言。',
                '路易斯主張「改變人」優先於「改變體制」，因為行為只是表象，出發點才是關鍵；上帝按人改變的幅度而非外顯成果評判人，基督教信仰要求的不是「進步改善」而是「改造轉換」——從好人變成新人。',
                '論及道德必須兼顧人與人的關係、個人內在世界、人生總體目標三個層次；四種基本德行（謹慎、節制、公義、堅毅）指向具有美德特質的人，而非一套外在的行為準則，愛心的考驗在於施捨與服事是否超過自己的「有餘」。',
                '路易斯稱驕傲為「靈性的癌」，是最大的罪，且往往隱藏在自以為義的宗教熱心之中；他透過〈內圈〉的分析指出，渴望進入圈內的欲望是難以饜足、永無止境的扭曲欲望，其解方在於誠實面對自己害怕成為圈外人的恐懼。',
                '路易斯用「不被馴服的獅子」阿司能描繪上帝主權——祂良善卻不可預測、不可控制，倫理道德不應被法則化到把上帝關進規範裡；他也主張古老經典能矯正時代盲點，人需要藉由文學、群體走出孤立的自我，並勇於對抗高舉人文主義、避談罪與地獄的自由神學時代潮流。',
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
              <h4 className="font-semibold text-gray-800 mb-2">路易斯「孰輕孰重」的提醒，對今日教會的道德焦點有何反思？</h4>
              <p className="text-gray-700 leading-relaxed">
                路易斯尖銳指出，教會往往對情慾之罪大驚小怪，卻對驕傲、自義、世俗價值觀的入侵視而不見，儘管後者按耶穌基督責備法利賽人的力道來看更加嚴重。這提醒今日教牧與信徒群體，在設計講台信息、推動門徒培育時，不應只鎖定容易辨識、容易論斷他人的道德議題，而應同樣正視驕傲、論斷、名利爭逐等更隱微卻更具毀滅性的靈性問題。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">〈內圈〉一文對教會小組文化、事奉團隊經營有何具體啟發？</h4>
              <p className="text-gray-700 leading-relaxed">
                路易斯分析追求進入圈內的心理，用在教會生態上格外貼切——核心同工圈、資深小組、熟人網絡都可能在不知不覺間形成排他的「內圈」，讓新人或邊緣者感受到被排擠的孤單。健康的教會群體應當有意識地檢視：我們的團隊文化是出於服事託付，還是暗中滿足「隱私的親密感」與歸屬優越感？
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「不被馴服的獅子」對今日習慣把上帝「馴化」為滿足需要之神明的信仰型態，有何挑戰？</h4>
              <p className="text-gray-700 leading-relaxed">
                當代消費主義式的靈性文化，容易期待上帝按照人的需求與舒適區運作，成為一位可預測、隨傳隨到的「服務型」神明。路易斯藉阿司能提醒，上帝的良善並不等於安全馴良，祂的主權與恩典經常挑戰人既定的舒適區，這對今日過度強調「上帝一定會照我的方式祝福我」的信仰教導，是重要的糾偏。
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
              '路易斯主張「改變人」優先於「改變體制」。你如何看待這種立場？在面對結構性的社會不公義時，個人改變與制度改變應當如何互相配合？',
              '路易斯說：「假若你以為自己一點都不自負，那就足以證明你真的很自負。」回想你自己，是否也曾在自認謙卑、屬靈的時刻，其實正落入驕傲而不自知？',
              '你是否曾經歷過（或觀察到）路易斯所描述的「內圈」現象——渴望進入某個圈子、害怕被排除在外？他對這種欲望源頭的分析，對你有何提醒？',
              '路易斯的「愛心的考驗」主張施捨與服事應當超過自己的「有餘」才算真正的犧牲奉獻。你如何評估自己目前奉獻金錢與時間的方式，是否還停留在「有餘」的舒適範圍內？',
              '路易斯用「不被馴服的獅子」描述上帝的主權——良善卻不可預測。你心目中的上帝形像，是否也曾不自覺地被「馴化」成只會照你所願行事的神明？',
              '路易斯呼籲基督徒閱讀古老經典以跳脫時代盲點，並勇於對抗高舉人文主義而避談罪與地獄的時代潮流。你觀察自己所處的信仰群體，是否也存在不自覺順應時代潮流而弱化罪與審判信息的傾向？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 讀路易斯《人之廢除》或《返璞歸真》節選</h4>
              <p className="text-gray-700 mb-2">找時間讀路易斯《人之廢除》關於「道」（the Tao）的段落，或《返璞歸真》討論道德律的篇章，體會他如何從日常生活的例子推展出深刻的倫理道德論證。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 檢視自己是否活在「內圈」渴望之中</h4>
              <p className="text-gray-700 mb-2">
                誠實反省自己在職場、教會、社群媒體上，是否曾為了進入某個「圈子」而妥協原則、討好他人，或是不自覺地用圈內圈外劃分身邊的人，並嘗試辨認自己真正害怕的是什麼。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📚 挑戰自己讀一本「古老的書」</h4>
              <p className="text-gray-700 mb-2">
                本週刻意挑選一本超過五十年、甚至上百年的信仰經典來閱讀，讓古老經典的視角矯正自己不自覺受時代潮流塑造的盲點。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「上帝啊，求祢幫助我不要只看重外在的行為表現，而是求祢改變我這個人的本相。求祢光照我心中隱藏的驕傲，使我不再論斷比我更明顯犯錯的人，卻忽略自己靈性的癌。求祢使我不追逐世俗的內圈，也不把祢馴化成滿足我需要的神明，讓我在祢的主權面前存謙卑敬畏的心，勇敢活出與時代潮流不同的信仰。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
