import React, { useState } from 'react';
import { ChevronDown, ChevronUp, KeyRound, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;
const quote = "border-l-4 border-emerald-300 bg-emerald-50 pl-4 py-3 mb-3";
const quoteText = "text-emerald-800 leading-relaxed italic";

export default function Book39Ch6() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-slate-800 to-blue-900 bg-clip-text text-transparent">第六章</h1>
        <h2 className="text-xl font-semibold text-gray-700">活出自由——路德倫理學</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          「我雖是自由的，無人轄管；然而我甘心作了眾人的僕人，為要多得人。」（林前9:19）<br />
          「基督釋放了我們，叫我們得以自由。所以要站立得穩，不要再被奴僕的軛挾制。」（加5:1）
        </p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-slate-50 to-blue-50 hover:from-slate-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <KeyRound className="w-5 h-5 text-slate-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <p className="text-gray-700 leading-relaxed">
              路德的神學一向建立在「信」的基礎，而他的倫理學則建立在由信上帝而發出的愛人基礎上，因為信上帝產生極大之愛人的力量，這樣的愛是純然出於自由，焦點集中在「因信而愛」——藉由信領受基督恩典而得著愛人的自由。他的倫理學基礎全在於神學，神學始終優先於倫理學。
            </p>
            <p className="text-gray-700 leading-relaxed">
              論到路德的倫理學是有困難的，因他關切的主要焦點是神人關係，美國路德學者喬治．霍萊（George W. Forell, 1919-2011）說：「登山寶訓和十誡都不是路德社會倫理的中心，只有因著赦罪而建立的神人關係才是路德倫理觀的關鍵所在。」<sup>1</sup><span style={cite}>（喬治．霍萊（George W. Forell），《信與愛：路德的社會倫理觀》，祖運輝譯〔香港：道聲，1984〕，25。）</span>並非路德的信仰傳承不重視登山寶訓和十誡，而是他強調正確的神人關係為登山寶訓和十誡的基礎，神學先於倫理學，因信稱義先於道德行為。「路德的倫理原則：信徒的生命乃是有愛人表現的信心生活。」<sup>2</sup><span style={cite}>（喬治．霍萊，《信與愛：路德的社會倫理觀》，48。）</span>既然「信」在「愛」之先，那麼「愛人表現」究竟與「信心生活」有什麼關係呢？
            </p>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">一、從「愛形成信」到「信發動愛」</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                奧古斯丁以拉丁文的愛（<em>caritas</em>）綜合了基督教思想與希臘思想，主張追求上帝帶來最大的幸福，而愛上帝則是最高層次的愛自己。<sup>3</sup><span style={cite}>（參見虞格仁（A. Nygren），《歷代基督教愛觀的研究（上冊）》，韓迪厚等譯〔香港：中華信義會書報社，1950〕，205-307。）</span>他期盼把希臘思想的「愛自己」提升至基督教信仰的「愛上帝」，不過他選擇從「愛自己」出發則易於與由下而上的愛結合，亦即由人而上帝的愛，因此給人的主動性留下一個比較大的發展空間。
              </p>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 愛形成信——追求善功</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  中世紀經院哲學以「愛形成信」（faith formed by love）形容人主動參與拯救的信仰過程，<sup>4</sup><span style={cite}>（C. Lindberg, Love: A Brief History through Western Christianity (Oxford: Blackwell, 2008), 103-117.）</span>多瑪斯即主張唯有愛所成就的信才能得救，而無法得救的信就缺乏愛的信，「因此，就信是藉由愛來成形與完成而言，愛被稱為信的形成」。<sup>5</sup><span style={cite}>（Thomas Aquinas, ST II-II, q. 4, a. 3: "Therefore charity is called the form of faith in so far as the act of faith is perfected and formed by charity."）</span>結果全心修道成為最有價值的生活，勝過世上其他的生活，這種鼓勵人修道的價值觀形成以奉獻、購買贖罪券取代慈善行動的背景，以致人的作為介入上帝的拯救。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  中世紀教會座落於一個基督教世界，人人從出生、受洗、成年、結婚、生子到去世的告別禮拜，全都在教會裡面，長久下去，教會成了社會體制不可區分的一部分。教會與社會過度密切的結合，使得社會特質逐漸影響教會信仰，比如社會上一般人嚮往的都是那些看得見的，於是看得見的行為漸漸地比看不見的信心位居上風，經院哲學發展出配套的觀點「愛形成信」，主張信是藉由愛的行為塑造成形，愛的行動引導人參與得著拯救的信仰過程。據此，中世紀教會發展出冊封聖人的風氣，一開始只是尊敬聖人，到後來演變成崇拜聖人，人與上帝之間需要聖人作為中間者。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">2. 信發動愛——邁向自由</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  如果以愛為優先，得救的主權操之於人自己手中，就容易造成競爭的心理，從好行為的競賽到宗教行為的競賽——包括聖地朝聖、聖人崇拜、瞻仰聖物等，有如一種民俗宗教。在奧古斯丁修會裡成長的路德顛覆了這些中世紀教會傳統，他強調上帝的恩典是一種由上而下的愛，是道成肉身的愛，人只能由信靠上帝出發，「相信倚靠」就是人從主動轉成被動，如此才能結出超越人性限制之愛的果子，因此主張「信發動愛」（faith acting in love）。<sup>6</sup><span style={cite}>（加拉太書五章6節。）</span>愛起源於信，信上帝有如果樹，而後結出愛人的果子。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「信發動愛」與宗教改革追求的「人人皆祭司」相互呼應，因為「信發動愛」直接適用於每一位信徒，人人都可從教會體制與傳統權威的束縛下得釋放，藉由信心親自與上帝建立關係，這是一種豐盛無比的自由。一五二〇年，路德的「宗教改革三大文獻」之一——《基督徒的自由》——就是詮釋這因信而來的自由，<sup>7</sup><span style={cite}>（宗教改革三大文獻是《致德意志基督教貴族公開書》、《教會被擄於巴比倫》和《基督徒的自由》。）</span>這種自由建立在因信稱義的基礎——人人可以藉著信領受上帝的恩典而被稱為義。「基督釋放了我們，叫我們得以自由。所以要站立得穩，不要再被奴僕的軛挾制。」（加5:1）基督已經釋放我們——這是加拉太書的重要信息。因此，路德熱愛加拉太書，甚至稱之為「我的凱蒂（路德夫人）」，<sup>8</sup><span style={cite}>（路德，《加拉太書註釋》，李漫波譯〔北京：三聯，2011〕，II。）</span>「自由」正是路德倫理學的重要特徵。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">3. 「愛人如己」或「愛人無己」？</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  奧古斯丁主張正當地「愛自己」，因此把羅馬書十三章9節的「愛人（原文：鄰舍）如己」詮釋成，以愛自己作為愛鄰舍的典範。但路德卻深深體會，人若愛自己，必定無法真正信靠上帝，也無法愛鄰舍，因此應當是「愛人無己」。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  奧古斯丁修會出身的路德漸漸與奧古斯丁「愛自己」的思想切割，因他看見信靠上帝就是要遠離愛自己。路德主張從無私、無我的信出發，才能脫離出於人性的自我中心，生出有如耶穌基督道成肉身由上而下的愛，因為愛是「不求自己的益處」（林前13:5），乃是追求徹底以上帝為中心，剷除一切以人為中心的念頭。以「愛人無己」取代「愛人如己」是路德神學的骨幹，從這基礎出發才能進入「愛人無己」的倫理學。
                </p>
              </div>

              <div>
                <span className="font-semibold text-slate-700">4. 小結</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  根據德國著名路德學者賀爾（Karl Holl, 1866-1926）的研究，路德在發展宗教改革思想的時期，並未追隨奧古斯丁追求以至善為幸福的倫理觀，也不認同經院哲學的德行倫理學，乃主張義務論才是道德應有的形式。<sup>9</sup><span style={cite}>（賀爾（Karl Holl），《路德的倫理觀》，潘主聞＆鄧肇明譯〔香港：道聲，1964〕，22。）</span>路德把「上帝絕對的要求和人意志的甘心樂意互相結連起來」，<sup>10</sup><span style={cite}>（賀爾，《路德的倫理觀》，23。）</span>亦即主張唯有因信稱義者才能甘心樂意遵行上帝絕對的要求。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  如今來到二十一世紀，有些基督徒把宗教改革當作分裂教會，或聲稱如果沒有宗教改革的話，至今教會還是合一的；但其實若了解宗教改革的重要性，就會明白，倘若沒有宗教改革，今日的基督教恐怕早已變成民俗宗教了。宗教改革不只改變了中世紀後期的教會，形成各種基督教會，而且也影響了二十世紀天主教會的革新。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">二、基督徒的自由<sup>11</sup><span style={cite}>（參見：林鴻信，《覺醒中的自由》〔新北：校園，2004〕，63-74。）</span></h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                對路德而言，律法並非行為的最高規範。「在《詩篇講義》中，路德已經強調說：『信徒是沒有律法的』。因為信徒所作的一切事都出於自由，他所作的甚至超過律法的要求。」<sup>12</sup><span style={cite}>（賀爾，《路德的倫理觀》，27。）</span>重點在於出於自由，甚至超過律法條文的要求，「律法的要求必須涉及心意，不僅是關乎外表的行為罷了」。<sup>13</sup><span style={cite}>（賀爾，《路德的倫理觀》，3。）</span>路德對自由的精闢討論，集中於《基督徒的自由》一書。
              </p>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 歷史背景</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  一五一七年十月三十一日，路德在威登堡教堂門上張貼《九十五條》；一五二〇年六月十五日，教廷頒布教諭（<em>Exurge Domine</em>），宣布焚毀路德的著作，並且要求路德六十天內撤回其主張，十月十日路德收到了這道教諭，十月十二日教宗特使米勒次與路德會面，極力尋求挽回的可能性。因此，十月中下旬，路德寫信給教宗利歐十世，為了避免直接決裂，標定日期為九月六日如尚未收到教諭，隨信寄贈《基督徒的自由》給教宗。<sup>14</sup><span style={cite}>（路德，〈基督徒的自由〉，《路德選集（上冊）》，徐慶譽＆湯清譯〔香港：基文，1968〕，352；E. G. Schwiebert, Luther and His Times (St. Louis: Concordia, 1950), 477-481.）</span>路德在信中表達致贈此著作的善意，稱之為靈性的禮物，期待此文可以作為和平與盼望的記號；又表示無意攻擊教宗本人，只是對教義和教廷體制有不同意見，期待教宗據此了解他的研究意願為何；最後路德宣稱，儘管此文篇幅短小，卻包含了所有的基督徒生活。<sup>15</sup><span style={cite}>（此信內容參見Martin Luther's Basic Theological Writings, T. F. Lull ed. (Minneapolis: Fortress, 1989), 586-595. 關於發表此信的處境，請參考S. H. Hendrix, Luther and the Papacy. Stages in a Reformation Conflict (Philadelphia: Fortress, 1981), 95-121.）</span>
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">2. 萬人之上與萬人之下的自由</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  根據哥林多前書九章19節：「我雖是自由的，無人轄管；然而我甘心作了眾人的僕人，為要多得人。」保羅認為自己擁有無「人」轄管的自由，卻暗示著他唯有在「基督」之下才有這種自由；又說為要多得人，甘心作眾人的僕人，這是另外一種自由，因能自由地放下無人轄管的自由，而自由地去作眾人的僕人。從無人轄管到成為眾人的僕人，呈現一種幅度極其廣闊的自由，既能高升又能卑下的自由。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  保羅何以甘心作眾人的僕人，是為了作外邦人使徒的使命——要多得人，其核心思想仍是為了基督的緣故。路德討論的是藉由信所發出的自由，他引用上述經文作為根據，主張基督徒的自由有無人管轄而高升的一面，亦有甘心成為眾人之僕而卑微的一面，他用這兩部分合組一個「基督徒的自由」的論題：
                </p>
                <div className={quote}>
                  <p className={quoteText}>
                    基督徒是全然自由的眾人之主，不受任何人的管轄。<br />
                    基督徒是全然順服的眾人之僕，受任何人管轄。<sup>16</sup><span style={cite}>（《路德選集（上冊）》，360。）</span><br />
                    <span style={{ fontStyle: 'normal' }}>A Christian is a perfectly free lord of all, subject to none.</span><br />
                    <span style={{ fontStyle: 'normal' }}>A Christian is a perfectly dutiful servant of all, subject to all.</span><sup>17</sup><span style={cite}>（E. G. Schwiebert, Luther and His Times, 480.）</span>
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  這個論題有一個中心就是基督，亦即「基督之下，萬人之上」（第一部分），以及「為了基督，萬人之下」（第二部分），合起來就是：「基督之下，萬人之上。為了基督，萬人之下。」
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  第一部分是在「信」裡才能達到，那是一種看不見的自由，是內在的人經歷到高居萬人之上的自由，唯有在信的體驗中才感受到「基督之下，萬人之上」，從一切基督以外的權勢下得著釋放（free from），這是高升的自由，也是體驗到自由地被高舉。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  第二部分「為了基督，萬人之下」則是願居萬人之下的自由，路德把這一種自由當作是「愛」的表現，因為是外面的人藉由可見之愛的行為表達。這種自由是為了基督的緣故，放下萬人之上的自由，而自由地轉向（free for）屈居萬人之下，這是自由地成為卑微，也是降卑的自由。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  如此，又高升又降卑，其高升如同君王般光榮，降卑則如同祭司般謙卑。高升的自由，唯有在上帝面前，為人所看不見；降卑的自由，則是在人面前，有目共睹。
                </p>
                <div className="overflow-x-auto mb-3">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="border border-gray-300 px-3 py-2">基督之下，萬人之上</th>
                        <th className="border border-gray-300 px-3 py-2">為了基督，萬人之下</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="border border-gray-300 px-3 py-2 text-center">高居萬人之上的自由</td><td className="border border-gray-300 px-3 py-2 text-center">願居萬人之下的自由</td></tr>
                      <tr><td className="border border-gray-300 px-3 py-2 text-center">「內心的人」，唯有「信」可達</td><td className="border border-gray-300 px-3 py-2 text-center">「外表的人」，藉著「愛」才能<sup>18</sup></td></tr>
                      <tr><td className="border border-gray-300 px-3 py-2 text-center">如同「君王」的職分一般光榮</td><td className="border border-gray-300 px-3 py-2 text-center">如同「祭司」的職分一般謙卑<sup>19</sup></td></tr>
                      <tr><td className="border border-gray-300 px-3 py-2 text-center">「在上帝面前」（coram Deo）</td><td className="border border-gray-300 px-3 py-2 text-center">「在人面前」（coram hominibus）<sup>20</sup></td></tr>
                    </tbody>
                  </table>
                </div>
                <span style={cite}>（18. 《路德選集（上冊）》，353-369。19. 《路德選集（上冊）》，363-364。20. 有關《基督徒的自由》神學思想的摘要，請參照林鴻信，《覺醒中的自由》〔台北：禮記，1997〕，52-62。）</span>
                <p className="text-gray-700 leading-relaxed mt-3 mb-3">
                  這個圖表呈現「基督之下，萬人之上的自由」是「為了基督，萬人之下的自由」的基礎，「信上帝」是「愛人」的基礎，宗教信仰是倫理道德的基礎。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  路德引述馬太福音七章17節，「好樹結好果子；壞樹結壞果子」，主張信上帝為好樹，愛人則為好果子。好樹能保證結好果子，然而好果子卻未必能保證是好樹；亦即若信上帝則愛人，然而若愛人則未必信上帝。<sup>21</sup><span style={cite}>（《路德選集（上冊）》，369-371。）</span>路德甚至模仿中世紀喜歡用的「功德」概念，主張「諸般善功以相信基督為第一，最高，最寶貴」，<sup>22</sup><span style={cite}>（《路德選集（上冊）》，20。）</span>唯有信是最大的功德。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  從另外一個角度來看好樹結好果子，藉由信使我們與基督連結，在這連結中承繼基督的一切好處，且讓基督承擔我們的一切壞處，路德稱之為「喜樂的交換」（joyful exchange）。<sup>23</sup><span style={cite}>（H. A. Oberman, Luther: Man between God and the Devil (N.Y.: Double, 1992), 78 &amp; 183-184.）</span>藉由人與基督連結而來的交換，人得以被徹底更新，自然成為能夠結好果子的好樹，路德把這連結比擬成婚姻關係：
                </p>
                <div className={quote}>
                  <p className={quoteText}>
                    信將心靈與基督聯合，有如新婦與新郎聯合。……基督滿有恩典，生命，救恩；心靈卻滿有罪惡，死亡，咒詛。讓信來到他們中間，於是罪惡，死亡，地獄就屬了基督，而恩典，生命，救恩卻屬了心靈。因為基督既是新郎，就將祂的新婦所有的都歸於自己，而將自己所有的都賜給祂的新婦。<sup>24</sup><span style={cite}>（《路德選集（上冊）》，360。）</span>
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  有如藉由婚姻，新郎與新娘交換財產，罪人從基督領受稱義，而基督為罪人承擔罪，於是被稱義的罪人開始具備行善的能力。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「同時是義人與罪人」是路德神學最精采的摘要：信靠上帝恩典的人，在上帝看來是義人，在人看來卻是罪人，因此同時是義人與罪人，儘管眾人看為不完美的罪人，上帝卻看為祂所接納的義人。因此，「信」是在上帝面前的表現，「愛」是在人面前的表現：藉由信被上帝稱義的罪人是我們在上帝面前的身分；在人面前卻仍只是學習結出愛人果子的罪人。路德並沒有排除人的好行為，不過若是太多強調愛人的果子，勢必忽略信上帝的果樹才是源頭。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  人並非藉由善行，而是藉由信領受上帝恩典，「善行並不幫助不信的人，也不使他稱義，或得救。反之，惡行既不使人惡，也不能定他的罪，但那使人和樹壞的不信，才行邪惡的，該被定罪的事。因此人的善與不善，不是由於行為，乃是由於信與不信。」<sup>25</sup><span style={cite}>（《路德選集（上冊）》，371。）</span>因為人做的功德不能改變自己，這對當時普遍存在的功德心態是最有力的批判。善行不能造就義人，義人卻能夠行善事，路德甚至認為惡行也不能造成惡人，而是「不信」使人行惡事，因此「不信」是最大的罪，也是一切罪的根源。因此，當人面對上帝時，重點並非行善或作惡，而是信或不信。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  在先後次序上，路德反覆申論「信心」是「好行為」的前提，意即「信」是「愛」的前提。就理論而言，路德神學注定不能直接論及倫理學，因為一講倫理學就進入人的行為層次，而忽略上帝施行恩典的層次。路德反對的是從人的行為出發，因此他不直接論及行為，但卻並非主張行為無法改變，對他而言，改變行為只有一條路，就是放棄自我中心來信靠上帝。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  基督徒若有好行為，完全是出於基督的恩典。路德並非否定好行為的必要，而是強調：「我們對基督的信並不是教我們脫離行為，只是教我們脫離行為的謬見，就是脫離以稱義必靠行為的謬見。」<sup>26</sup><span style={cite}>（《路德選集（下冊）》，327。）</span>如此一來，基督徒得到的自由是「出於自身意願去做」（<em>want</em> to do），而不再是由於外加指示「應當如何去做」（<em>ought</em> to do）。<sup>27</sup><span style={cite}>（賀爾，《路德的倫理觀》，136。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  路德神學排除對人倚靠自己做好行為的可能，然而還是可以觀察那些出於信的行為究竟是什麼樣的行為，描述那些行為並不與因信稱義衝突。根據歐伯曼的研究，就在發表《基督徒的自由》兩個月之前，路德對德國人演說《國王，王子，貴族，城市，團體》，主張社會改革，杜絕奢侈浪費，建立商業規範，反對高利貸，抑制壟斷，掃除色情，這正是「基督徒是全然順服的眾人之僕」在社會層面的表現。<sup>28</sup><span style={cite}>（H. A. Oberman, Luther: Man between God and the Devil, 78-79.）</span>路德所關切的不只是教義的辨正，而且是教義的應用，尤其是「基督徒的自由」的實際應用。
                </p>
              </div>

              <div>
                <span className="font-semibold text-slate-700">3. 從基督徒的自由出發</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  路德從基督徒的自由發展出具有人性化而視野寬廣的神學，使人能安然接受自己是「快樂的蒙恩罪人」，因為目標並非如何成為更好的人，而是如何領受上帝的恩典。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  基於因信稱義的基礎，路德勇於享受世上生活的樂趣。他有一個啤酒杯，由下而上有三圈，最下圈代表十誡，中間一圈代表使徒信經，最上面一圈則代表主禱文。<sup>29</sup><span style={cite}>（羅倫培登，《這是我的立場》，361。）</span>最下圈的十誡是舊約的標準，中間一圈的使徒信經是新舊約的信仰告白，最上面一圈的主禱文則是新約的最高標準，他以飲到主禱文為極大的樂趣，喝不到那一圈則意味功力不足，這是路德在生活上非常風趣的一面。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  由於罪的問題已被上帝的恩典解決了，蒙恩的罪人應當留心注意孤單導致的試探，他說：「當我受極大苦難攻擊時，我寧願跑到我的豬群裡去，而不願一個人獨處。」<sup>30</sup><span style={cite}>（《路德選集（下冊）》，327。）</span>當然這是很誇張的講法，路德常用戲劇性的表達方式，他認為孤單是魔鬼施展誘惑的機會，內心的空白讓魔鬼有機會把不好的東西帶進來，因此落單者最容易陷入試探。孤單是魔鬼施展誘惑的機會，這種認知形成路德勸慰人的主要方法。如果有精神病、憂鬱、失眠者去找他協助，他並不直接禱告或進行輔導，而是關心生活是否正常，先幫助來訪者吃得好、睡得好，而後才進入處理靈性問題的階段。路德具有優秀的牧養恩賜，擅長在日常生活中運用智慧，然而他未留下具體的牧養或生活導引，以免落入因行為稱義的窠臼。賀爾對路德倫理觀的評價很高，認為路德證明了「只有在宗教的基礎上，倫理觀方能達到最高的形式」。<sup>31</sup><span style={cite}>（賀爾，《路德的倫理觀》，136。）</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">三、居中之道——反律法主義與律法主義之間<sup>32</sup><span style={cite}>（林鴻信，〈路德的法律觀——反律法主義（antinomianism）與律法主義（legalism）之間〉，《台灣神學論刊》，2010/32，43-61，本文採用其中資料。）</span></h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                路德主張因信稱義，反對的是高舉功德——因好行為稱義，然而一般人認為好行為的指標是律法，這也多少帶來他反對律法的印象。儘管這樣的印象並不正確，事實上他的主張是反對「律法主義」而非「律法」（law），由於他強烈批判「律法主義」，以致被人貼上「反律法主義」（antinomianism）標籤，其實他的立場是在這兩者當中，同時也對兩者都有適度的批判。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                路德批判反律法主義說：「許多人一聽見這信的自由，立刻就要把它當作放縱情欲的機會，以為無論什麼他們都可任意而行。」<sup>33</sup><span style={cite}>（路德，〈基督徒的自由〉，381。）</span>又批判律法主義說：「還有與這些人極端相反的，就是那些以得救專在於拘守禮儀的人，彷彿他們得救，乃因他們在規定的日期禁食或不吃肉，或用某種禱文禱告；他們只誇耀教會與教父的戒律，但對那些屬乎我們信心要素的事卻毫不介意。」<sup>34</sup><span style={cite}>（路德，〈基督徒的自由〉，381-382。）</span>基於批判反律法主義，他的思想呈現出強調秩序的一面；而基於批判律法主義，他的思想則呈現出重視自由的一面；因此路德宣稱要走出「一條適中的路」。<sup>35</sup><span style={cite}>（路德，〈基督徒的自由〉，382。）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                路德藉由主張「自然秩序」與「兩個國度」來批判反律法主義，又藉由分辨「律法與福音」來批判律法主義。
              </p>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 批判反律法主義——「自然秩序」與「兩個國度」</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  因信稱義是論及得救的事，於是路德主張「自然秩序」與「兩個國度」來處理在世的生活，他認為在得救之外，人在世上過日子需有秩序、規範，就此意義而言，他批判反律法主義。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「路德心目中的自然秩序是基於自然律和理性。」<sup>36</sup><span style={cite}>（喬治．霍萊，《信與愛：路德的社會倫理觀》，62。）</span>令人好奇的是，既然路德認為自然秩序無法使人得救，為何還要主張自然秩序？「答案是：他相信人是同時活在兩個世界裡，屬靈的和屬世的。」<sup>37</sup><span style={cite}>（喬治．霍萊，《信與愛：路德的社會倫理觀》，53。）</span>自然秩序是生活在屬世的世界裡必須遵守的法則，而非任意妄為。不過，必須區分清楚屬靈的和屬世的世界，不可混淆，由於這兩個世界都是從上帝而來且歸屬於上帝，他據此發展出「兩個國度」的主張。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  一五二三年，路德出版〈論俗世的權力〉一文，清楚呈現「兩個國度」的主張。他把「上帝的國」與「世界的國」二分，「凡屬於上帝的國的人，是真正相信基督的人，而且順從基督。因為基督是上帝的國的君王，正如詩篇二篇和全部聖經所說的。祂為此來到世間，以便在世上開始建立上帝的國」。<sup>38</sup><span style={cite}>（《路德選集（上冊）》，444。）</span>路德認為在上帝的國裡不需要武力與法律，「因為基督徒心中有聖靈使他們愛人，而不加害於人，也使他們甘心情願忍受任何人所加的不公道，甚至死亡」。<sup>39</sup><span style={cite}>（《路德選集（上冊）》，444。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  論及世界的國，「所有的非基督徒是屬於世界的國，並且是處在法律之下」。<sup>40</sup><span style={cite}>（《路德選集（上冊）》，446。）</span>這裡很明確地提到法律對於世界的國的必要，並且使用武力來支持法律。既然並非世上所有人都是基督徒，「因此上帝設立了兩種政府：一種是屬靈的政府，它藉著聖靈在基督之下使人成為基督徒和虔敬的人；一種是俗世的政府，它控制非基督徒和惡人，使他們雖不甘願，也不得不保持治安」。<sup>41</sup><span style={cite}>（《路德選集（上冊）》，446。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  簡言之，在上帝的國裡不需要武力與法律，而在世界的國裡則由政府管理，運用武力與法律以維持秩序，這絕非反律法主義者所主張的任意妄為。「兩個國度」主張雖然有靈活的優點，但卻有容易避重就輕的弱點，比如在現實生活中的抉擇，屬靈國度可能成為向屬世國度妥協的藉口，使得不食人間煙火的選擇被合理化。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">2. 批判律法主義——律法與福音</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  「路德曾經說過，他願意把那擅長於識別律法與福音的人，置於萬民之首，並稱他為聖經博士。」<sup>42</sup><span style={cite}>（華達（C. F. W. Walther），《律法與福音》〔香港：卓越，1989〕，12。）</span>從這話可見路德對區別福音與律法的重視，他把福音和律法的觀念運用得很廣，幾乎在任何經文，都可以區分什麼是律法、什麼是福音，而非狹隘地以摩西五經才是律法。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  路德主張律法與福音是上帝的話的兩種表現形式：律法告訴我們應當做的，福音則宣告上帝做了什麼。他把「你要為自己做什麼——律法」和「上帝為你做什麼——福音」的對照用來解讀整本聖經。律法和福音的對照並非建立在新約與舊約的對立，因為在新約中也有律法，在舊約中也有福音。新約中最明顯的律法是登山寶訓，路德認為一個不知罪的人讀了登山寶訓就會知罪，而耶穌說：「莫想我來要廢掉律法和先知。我來不是要廢掉，乃是要成全。」（太5:17）其中，「成全」是指全然實現律法，可見耶穌肯定律法，而且以登山寶訓為律法的全然實現。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  路德把律法和福音當作是互相對立且不可分割的一組觀念，兩者缺一不可。「沒有律法的福音」，並非真正的「福音」；而「沒有福音的律法」，則只有審判卻沒有恩典。人在律法之下被審判定罪，卻在福音裡蒙拯救。「福音的恩典」是在「律法的審判」裡才能夠彰顯，而「律法的審判」只有在「福音的恩典」裡才能被免除。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  因此，「律法與福音」成為路德做神學判斷的重要準則。他藉由分辨「律法與福音」來批判律法主義，認為「沒有福音的律法」往往指向律法主義，亦即人想要藉由靠自己的能力遵守律法條文來得救。不過，反對律法主義並非要擺向「沒有律法的福音」，那是反律法主義所主張的。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  由於路德主張因信稱義，看似忽略行為的要求，並且他也確實喜歡批判「律法主義」——把律法當條文來遵守——因此被人貼上「反律法主義」的標籤。當時中世紀的教會有定出許多瑣碎的規矩，比如教宗規定禮拜五必須以魚代肉，大齋節不可吃雞蛋、奶油，路德不但強烈譴責批判，而且語帶戲謔地說：「你倒要行相反的事，去煩惱他，對他說：因為你禁止我吃肉，妄想將我的自由變為法規，我就不顧你，偏要吃肉。」<sup>43</sup><span style={cite}>（《路德選集（上冊）》，422。）</span>路德極力挑戰這種律法主義，稱之為「那些頑梗固執的儀式派」，甚至使用非常極端的口氣說：「基督徒必須拒絕這等人，與他們相抗，大膽觸犯他們，免得他們用不敬虔的道理牽引許多人一同陷入歧途。在這等人面前，倒不如吃肉，偏不禁食，並為信的自由的緣故，反要行他們看為大罪的事。」<sup>44</sup><span style={cite}>（路德，〈基督徒的自由〉，383。）</span>
                </p>
              </div>

              <div>
                <span className="font-semibold text-slate-700">3. 小結</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  路德在律法主義與反律法主義之間追求平衡，前者是過度強調秩序而帶來束縛，後者則是過度追求自由而帶來混亂。他一方面反對反律法主義的失序而重視秩序，另一方面又反對律法主義的束縛而追求自由。許多人談到路德時幾乎把他當作一個現代人，卻忘了其實他成長於中世紀末期，對中世紀重視秩序的特質並未全然忘懷，只因投入宗教改革又對基督徒自由全心嚮往，因此在他的主張裡呈現追求「自由中的秩序」與「秩序中的自由」的畫面，這是他的平衡之道。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">四、社會秩序</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                中世紀傳統下的階級制度歷史久遠，人們之間有明顯的階級之分，而且是一個由上而下領導的社會與教會階層體系。從文藝復興以來發生一連串的變動，不斷衝擊中世紀傳統社會秩序，宗教改革又帶來重大的轉變力量，使傳統社會架構已難以維繫。宗教改革雖然追求信仰的革新，然而卻牽動社會變遷，如「萬民皆祭司」形同挑戰傳統的階級制度，有人擔心在階級制度瓦解之後的秩序何在，這是路德宗教改革必須回答的質疑。
              </p>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 三層秩序</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  路德主張上帝造宇宙萬物帶來了「三層秩序」（the Three Orders）：教會、家庭、國家，這三層秩序彼此之間相互交織，這是面對中世紀傳統的階級制度瓦解而來的秩序建構。<sup>45</sup><span style={cite}>（拜爾（Oswald Bayer），《路德神學：當代解讀》，鄧肇明譯〔香港：道聲，2011〕，147-187。）</span>前兩者為天賦狀態：在教會裡，人得以因著敬拜上帝而活出人的樣子；在家庭裡，信仰得以融入生活的場所，有些外邦人精打細算而難以接受婚姻，身為信仰者卻心懷感恩地接受。<sup>46</sup><span style={cite}>（拜爾，《路德神學：當代解讀》，176-177。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  在這三層秩序中，教會最早設立，路德如此詮釋創世記二章16至17節並寫道：「這是教會的設立，是在家庭和國家之前。……教會設立之後，家庭也建立起來了。……在犯罪之前是沒有國家的，因為那時還沒有這種需要。換言之，國家是醫治敗壞的人性必備的解藥。」<sup>47</sup><span style={cite}>（轉引自：拜爾，《路德神學：當代解讀》，150。）</span>教會和家庭都是出於天賦狀態、創造秩序，然而國家卻是在人犯罪墮落之後的應急措施。<sup>48</sup><span style={cite}>（拜爾，《路德神學：當代解讀》，150-151。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  教會被追溯到創造之始，這帶來寬闊的視域，把教會論與創造論連結；與教會同為天賦狀態的家庭則為國家的基礎，其中包括父母和子女、丈夫和妻子、人和田野（工作）的關係。<sup>49</sup><span style={cite}>（拜爾，《路德神學：當代解讀》，150。）</span>至於起始於犯罪墮落後的國家，一方面是「醫治敗壞的人性必備的解藥」，另一方面則主張「所有其他的權柄都源於父母的尊位」，亦即把家庭當作公共事務的源頭。<sup>50</sup><span style={cite}>（拜爾，《路德神學：當代解讀》，182。）</span>按此思考方式，國家也間接出自天賦狀態。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  從三層秩序的角度來看，不再明確區分哪一層秩序為屬靈或屬世，而是在每一層秩序當中都有屬靈或屬世的發展。德國學者拜爾（Oswald Beyer, 1939-）認為，路德神學思想朝著「屬靈的事係構建在屬世的事當中」發展，因此「一切世事都有正面的屬靈意義之方向」，<sup>51</sup><span style={cite}>（拜爾，《路德神學：當代解讀》，172。）</span>這是一個重要的神學觀察建議。由於三層秩序當中，有關教會的部分涉及龐大的教會論，以下只討論家庭與國家。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">2. 家庭婚姻</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  中世紀教會信徒中流傳著聖人傳奇、聖地崇拜等，人們對修道非常尊敬，於是漸漸地傾向認為不結婚比結婚靈性更高。路德認為，外邦人遵循天賦理性，聰明者必定拒絕婚姻生活，因為那將帶來許多勞苦折磨，然而基督教信仰者卻對繁雜瑣碎的家庭工作心懷感恩而樂意參與，因為深信婚姻生活是來自上帝的創造與託付。<sup>52</sup><span style={cite}>（拜爾，《路德神學：當代解讀》，176-177。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  儘管路德反對神職人員獨身制，但關於結婚與否的事，他說：「我的忠告就是婚姻應該重新自由，每個人結婚或不結婚都可自擇。」<sup>53</sup><span style={cite}>（《路德選集（上冊）》，203。）</span>然而他本人畢竟傾向接受這是一項天賦狀態，而且進一步地發現，婚姻比修道院帶來更多有益的學習。路德和修女凱蒂（Katharina von Bora, 1499-1552）結婚，生了六個孩子，從親戚中收養了四個孤兒！路德稱婚姻為「品格學校」（Marriage as a School of Character），教會歷史學者培登（Roland H. Bainton, 1894-1984）說：「但他自己結婚之後，他開始描繪婚姻為陶冶德行的學校。按這種意義，婚姻取代了修道院，因修道院曾被教會視為德行訓練的場地和上天堂最可靠的途徑。」<sup>54</sup><span style={cite}>（羅倫培登（Roland Bainton），《這是我的立場》，古樂人＆陸中石譯〔香港：道聲，1987〕，363。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  路德對人需要婚姻之事，毫不懷疑，他反對中世紀守獨身的修道制度，因為往往非出自志願，只是成為良心的困擾。維持婚姻固然不是易事，但以獨身來證明對肉體的克服與超越，卻有主張因行為稱義的可能。路德質疑為何問及是否可以婚姻，而不問及是否可以吃喝，因為婚姻對他而言，就像吃喝一樣自然。<sup>55</sup><span style={cite}>（Luther: Letters of Spiritual Counsel, LCC Vol.18, (Philadelphia: Westminster), 283.）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  路德在結婚之後，認為婚姻的功能與中世紀的修道院一樣，是一個人德行成長必要的學校，在此意義之下，人人都需要婚姻。婚姻是與最親密的人相處之處，當意見不同時，既不能分開，又不能當作外人，往往只有以接納、了解的態度學習相處，事實上在這當中經歷改變與學習最多。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  然而婚姻帶來的操練，絕對不是容易的學習，其中最難的是在爭吵當中學習：「結婚是沉重的十字架，因為偌多的配偶爭吵。」<sup>56</sup><span style={cite}>（羅倫培登，《這是我的立場》，432。）</span>路德感慨地說：
                </p>
                <div className={quote}>
                  <p className={quoteText}>
                    上帝啊！這些婚姻的事是何等的困擾！必須付出極大的努力才能撮合一對，然後又需要更多的痛苦，才能讓他們不分開。亞當的墮落毀壞了人性，使其變化無常，正如水銀一般不穩定。然而當夫婦一起用餐或同枕而眠，是何等地美妙，即使他們有時互有牢騷怨言，也是婚姻在所難免的。亞當與夏娃在他們大約九百年的婚姻生活當中，必定時常互相責備，夏娃指責說：『你吃了蘋果。』亞當一定會回嘴說：『為什麼你把蘋果給我呢？』毫無疑問地，在如此漫長的時間裏，每當為墮落而嘆息時，他們遭遇著數不清的罪惡，這實在是非常特殊的情況！可見創世記是何等值得注意的一本有關智慧與理性的書。<sup>57</sup><span style={cite}>（Luther: Letters of Spiritual Counsel, 283.）</span>
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  婚姻生活一點一滴培養、塑造了基督徒性格，路德說：「我一生都忍耐。我要忍耐教皇，傳異端者，我家人，和凱蒂。」<sup>58</sup><span style={cite}>（羅倫培登，《這是我的立場》，365。）</span>在開玩笑的語氣當中，路德呈現其家庭生活對其耐性的操練，功效不亞於教皇與異端。培登提到，路德稱他的妻子為「我主」，有時甚至將凱蒂（Katie）改成諧音「鎖鏈」（Kette），在戲謔中充分傳達家庭是陶冶德行的學校。<sup>59</sup><span style={cite}>（羅倫培登，《這是我的立場》，352。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  由於「婚姻學校」是如此的困難，也必是魔鬼所討厭的，相形之下，中世紀的修道制度有「走捷徑」的嫌疑。路德說：
                </p>
                <div className={quote}>
                  <p className={quoteText}>
                    沒有身份比已婚是魔鬼更加反對的。教牧人員不想被工作和憂慮煩擾。他們怕嘮叨的妻子，背逆的兒女，難應付的親戚，或死豬死牛。他們想睡到日上三竿。我們的祖先熟知這種情形，並且會說：「親愛的孩子，去做祭司或修女吧，願你快樂。」<sup>60</sup><span style={cite}>（羅倫培登，《這是我的立場》，432。）</span>
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  婚姻不只是兩人的事，很快地就成為三人以上的互相學習。許多人在為人父母之後，方知父母難為與偉大，因為當兒女年幼時，無法溝通，往往必須放棄自己而不斷調整與學習，在兒女長大之後，開始有意見，又必須學習接納不同的價值觀。這樣的學校，顯然一點都不亞於修道院的訓練。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  有人欣賞神職人員獨身制，他們永遠不會需要半夜起來餵孩子，起居處總是乾淨清幽而脫離俗世。人受造、被託付管理大自然，路德認為婚姻是一個自然過程，有如其他地上生活，心存對創造者上帝的感恩。當時路德率先和修女凱蒂結婚，神父和修女結婚必定是一件轟動的大事。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">3. 面對俗世權力</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  路德基於「兩個國度」的主張，認為屬靈國度比屬世國度重要，也因此當屬靈國度發生錯誤時為禍更大，他說：「所以屬靈的權威行不義時，我們必須抵拒，但世上掌權的，雖行不義，我們也不應抵抗。」<sup>61</sup><span style={cite}>（《路德選集（上冊）》，85。）</span>基督徒必須以關心屬靈國度為主，而且只有在屬靈權威偏差時起而反抗；當屬世權威多行不義時，基督徒不得反抗。因此，路德對暴動的農民說：「統治者的邪惡和不公義，不能成為你們叛亂的藉口，因為懲治惡人不是每一個人的責任，而是由屬世掌權的統治者。」<sup>62</sup><span style={cite}>（路德，〈和平訓誡〉，《路德文集——信仰與社會》〔香港：協同福利及教育協會，1992〕，33。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  然而，路德似乎無視於，當最高統治者本身不公義時，基督徒應當如何自處，他對於政治現實有非常理想化的看法：「順服是受治者的責任，體諒是治人者的責任。」<sup>63</sup><span style={cite}>（《路德選集（上冊）》，90。）</span>當治人者不施行體諒時，受治者是否還應當順服，若是主張仍應當順服，其根據何在？顯然路德還是會主張順服，唯有聲明在這種情況下例外：「但照屢次所發生的，若號稱為世上掌權者，命令一個百姓行那違背上帝誡命的事，或阻止他遵守上帝的誡命，那麼順從就可終止了，責任也就作廢了。」<sup>64</sup><span style={cite}>（《路德選集（上冊）》，446。）</span>亦即，當屬世的權柄強制百姓違反上帝的誡命時，就不再有服從的義務了。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  況且，「倘若君主錯了，他的人民也應該跟從他嗎？我答覆說，否，因為任何人都沒有做錯事的義務；我們應該順從那喜歡公道的上帝，過於順從人。」<sup>65</sup><span style={cite}>（《路德選集（上冊）》，476。）</span>然而，「不順從人」究竟可以到何等地步？是否可以反抗呢？這是一個難題。事實上宗教改革者，包括路德在內，都必須面對這個問題。由於路德受到強大的諸侯智者腓利支持，在這方面並未遭遇許多困難，或許因而有把困難問題簡單化的傾向，而且也似乎未見他從信仰觀點提及對智者腓利的監督。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  就整體而言，路德對世事傾向消極，他在《小教理問答》解釋主禱文裡的「願你的國降臨」，說：「上帝的國確是自己降臨，並不在乎我們的禱告，但我們藉這禱告，乃是求祂的國也降臨在我們中間。」<sup>66</sup><span style={cite}>（路德，《小教理問答》，《聖道精華》〔台北：中華福音道路德會，1991〕，163。）</span>上帝國的來臨，並不需要人的參與和合作，甚至不是因著人的禱告而成就，因為上帝國並非人手可以推動的，以致路德往往在許多世事上態度消極。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  路德認為屬世的國度不應越界在屬靈的國度之上，「若俗世的權力要擅自為靈魂制定法律，它就侵犯了上帝的統治，只足以將靈魂引入迷途，加以毀滅」。<sup>67</sup><span style={cite}>（《路德選集（上冊）》，459。）</span>即使運用俗世的權力立法而拯救靈魂也是不恰當的，「把人為的法律加到人的靈魂上，叫人信這信那，這當然沒有上帝的話為根據」。<sup>68</sup><span style={cite}>（《路德選集（上冊）》，459。）</span>於是路德主張俗世權力不應當介入信仰的事，即使有異端出現，也是信仰的事，而非俗世權力掌管，因為「異端決不是武力所能防止的」，在此情況下，他期待「上帝的道要爭戰」，「異端是一個心靈的問題，不是鐵打火燒和水淹所能克服的。只有上帝的道才是有效的」。<sup>69</sup><span style={cite}>（《路德選集（上冊）》，466。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  按照路德的觀點，俗世之事並非與上帝無關，而是在上帝的統治之下，只是其管理原則與屬靈之事不同。比如，在論及「賠償」時，路德明白主張在人的法律之上還有自然律，而自然律的內涵就是愛，「因為自然像愛一樣，教訓我願意人怎樣待我，我也要怎樣待人」。<sup>70</sup><span style={cite}>（《路德選集（上冊）》，478。）</span>可見路德期待俗世的法律必須遵照自然律，於是他主張「妥善和公平的判決，必須是得自自由的內心」，亦即必須根據愛和理性的自然律，或稱「自由的理性」，認為一切法律都應當由其出發而受其控制。<sup>71</sup><span style={cite}>（《路德選集（上冊）》，478-9。）</span>上帝透過自然律的愛與理性來藉由俗世權力統治俗世之事，但卻不是藉由信仰團體來做。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  基於對等的原則，路德主張教會神職人員——教皇與主教——也不應當介入俗世之事，比如參與政治、管理財產等，「他們應該在內心方面，以上帝的話治理靈魂，他們卻在外表方面，用無以言形的暴虐管轄堡壘，城市，土地和人民」。<sup>72</sup><span style={cite}>（《路德選集（上冊）》，462。）</span>當教皇與主教不以宣揚上帝的話為業而參與俗事，這與俗世君王介入信仰的事，同樣都是錯亂的。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  路德在論及基督徒是否可佩劍來懲罰惡人時，主張基督徒只有在為別人服務、為了別人的利益時，才可佩劍懲罰惡人。「基督徒不應該為自己和自己的事使用或乞援於刀劍，但為別人，他能夠而且應當使用或乞援於刀劍，藉以防止邪惡，保護良善。」<sup>73</sup><span style={cite}>（《路德選集（上冊）》，457。）</span>然而，「若是涉及到你們自己，你們就應該遵照福音，以基督的教訓自約，將你們的左臉也轉過來由人打，也讓外衣連同裡衣由人一同拿去」。<sup>74</sup><span style={cite}>（《路德選集（上冊）》，451。）</span>若是涉及別人，應當遵照俗世的法律；若是涉及自己，則應努力遵照基督徒的律法。
                </p>
                <div className={quote}>
                  <p className={quoteText}>
                    你們一面在內心上對上帝的國盡了責任，同時在外表上對世界的國也盡了責任；……凡關於你們自己方面的，你們就照著福音去行，忍受一切的不義，做一個真基督徒；凡關於別人方面的，你們就照著愛心去行，不容許任何不義加在他身上。<sup>75</sup><span style={cite}>（《路德選集（上冊）》，451。）</span>
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  路德主張，內心應當持守上帝的國規則，外表則盡力遵守世界國的規則，不過這還是留下了一個難題：如果政府要求一位基督徒參與他自己良心所不容許的戰爭時，面對內在上帝國的良心與外在世界國的要求衝突時，究竟應當如何回應？
                </p>
              </div>

              <div>
                <span className="font-semibold text-slate-700">4. 小結</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  路德對三層秩序的主張，使得他在現實生活有更多彈性，也更願意守世上的規矩，因為在與拯救無關的事上，自然秩序非常重要，甚至帶來一種傾向，在非拯救意義的事上高舉世上法則。路德認為人在世上都應當被世上法則約束，這恐將還是陷入一種屬靈與屬世二分，並未用同一信仰價值觀檢視這兩個領域。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  從上帝主權的角度來看，唯有上帝應當被人絕對服從，連世上法則也在上帝的主權之下。信仰者若是過於順從世上的法則，很可能會失去對信仰價值觀的堅持。畢竟世上法則大都隱藏在世界潮流中，唯有藉由信心才能跳脫世界潮流的影響，也才能堅持信仰價值觀。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  潘霍華主張聖經對人有四項以基督為中心的委託：「上帝要在世界中有工作、婚姻、政權（國家）、教會，上帝要靠基督、為基督、在基督裡面有這一切，各按其方式。」<sup>76</sup><span style={cite}>（朋霍費爾，《倫理學》，胡其鼎譯〔香港：漢語基督教文化研究所，2000〕，176。）</span>由於上帝並非把每一個人個別放在其中一種委託之下，而是把所有的人皆放在四種委託之下，所以都必須以基督為中心。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  潘霍華把路德的三層秩序加了一項「工作」，這項原本被路德放在「家庭」裡頭。而且潘霍華稱之為「四種委託」（mandate），意指從上帝而來的四項任務，強調上帝的託付。相形之下，路德的用語是「秩序」，秩序只是形同一種規則，委託則更加重視上帝的主權。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  潘霍華與路德的三層秩序相同之處在於，他認為上帝並非把每一個人個別放在一個委託之下，這「四種委託」都同時存在於每一個人身上，只是分配比重不一；潘霍華與路德的不同，在於他強調以基督為中心來看待四種委託，於是他把上帝的主權帶進世上生活，這一點則比較接近加爾文神學。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">五、理想與現實之間</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                整體而言，路德一方面把「基督之下，萬人之上」的信仰理想講得很高，但另一方面卻又接受位階不高的自然秩序，以及世上君王所設定的法律規條，這彷彿帶出回到現實世界時就要少談理想的論點特色，讓理想與現實之間有明顯的張力。
              </p>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 靈活或妥協</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  「兩個國度」的主張雖然有靈活的優點，但也容易有避重就輕的弱點。比如在現實生活中的抉擇，屬靈國度可能成為向屬世國度妥協的藉口，而合理化不食人間煙火的選擇。主張兩個國度，使路德可生活在一個既受世界國之現實影響、又存有上帝國之理想的複雜局勢中，在屈從現實與追求理想之間靈活運用。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  不過，靈活與妥協只是一線之隔，從過去的歷史可見，路德的信仰傳承在遇到壓力時，容易有退讓而與世俗政權妥協的特色。其原因可能在於，一開始就主張兩個國度，給自己留下退路，以致在現實生活中做抉擇時，屬靈國度可能向屬世國度妥協，不食人間煙火者可能向俗世權威投誠；反過來，屬世國度也可能假借屬靈國度的名義，如統治者當局以屬靈名義合理化世俗的統治。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  具體而言，當基督徒在世上逃避面對俗世的挑戰時，就強調自己具有上帝國的子民身分而不問世事，理由是專心注重屬靈之事，甚至可誇口人雖在世生活，但內在世界卻屬於另外一個國度；反之，當基督徒沉浸於俗世生活時，就用屬世國度仍在上帝主權之下為由，推諉自己仍歸於屬靈的國度。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  屬靈、屬世二分可能造成副作用，亦即因應現實挑戰而遊走於兩端之間。在對抗納粹政權的時代，當時德國基督教分成改革宗與路德宗，路德宗牧者是改革宗牧者的三倍，可是由雙方共同組成對抗希特勒的認信教會中，大部分卻是改革宗牧者，畢竟具有靈活性的神學其弱點就在於難以堅守原則。
                </p>
              </div>

              <div>
                <span className="font-semibold text-slate-700">2. 關鍵抉擇</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  一五二一年，路德避居瓦特堡，威登堡的宗教改革因教堂圖像問題爭議而動盪不安，奮進派勝過溫和派，一五二二年，路德回到威登堡，以《威登堡八篇講道詞》穩定局勢，把奮進派逐出威登堡。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  那些主張廢除教堂圖像的奮進派，出於改革務必徹底的期待，同時主張廢除彌撒儀式，路德在講章中則顯得有些搖擺不定：「凡贊同並幫助將彌撒廢除的人都作錯了，事情本身是好的，但沒有按秩序做出來。」<sup>77</sup><span style={cite}>（路德，《路德選集（下冊）》，湯清等譯〔香港：基文，1968〕，409。）</span>儘管路德知道這些反對彌撒的人是對的，而且是根據聖經的，但他卻不提「唯獨聖經」原則，只加上一個但書：「你們說這事按照聖經，是對的。我同意這一點，但從秩序上說，如何呢？因為這事是任性作的，沒有顧及適當的秩序，而且觸犯了你們的鄰舍。」<sup>78</sup><span style={cite}>（《路德選集（下冊）》〔香港：基文，1968〕，409。）</span>高舉「唯獨聖經」的路德竟然談起「秩序」來，這實在令人錯愕，若以秩序為最高原則，宗教改革根本不可能發生，也是不必要的。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  緊接著，路德的建議令人更加錯愕：「假如你們事先誠懇向上帝祈禱了，而且取得了當局的援助，你們就可以確知這事是出於上帝的了。」<sup>79</sup><span style={cite}>（《路德選集》〔下冊〕〔香港：基文，1968〕，409。）</span>路德雖然強調祈禱，但卻大剌剌地以取得「當局的援助」為出於上帝的憑據（「當局」的原文，<em>Obrigkeit</em>指統治當局），<sup>80</sup><span style={cite}>（Martin Luther, Luther Deutsch, vol. 4 (Göttingen: Vandenhoeck &amp; Ruprecht, 1974), 64.）</span>路德所說的秩序，就是統治當局所容許的「適當的秩序」，然而這造成一個矛盾，在做關鍵抉擇時，價值判斷雖以信仰起始，卻以現實政治為終結，儘管起先認同那些反對彌撒者的主張是根據聖經，後來卻以寄望「當局的援助」之政治現實為終結。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  再論到有關教堂裡的神像（圖像）是否應當廢除時，路德也是顯得搖擺不定，他一方面主張：「如果有人敬拜它們，它們就應該被廢除，否則就不必被廢除。」<sup>81</sup><span style={cite}>（《路德選集（下冊）》〔香港：基文，1968〕，419。）</span>那麼，事實上究竟是否有人敬拜神像呢？路德坦承：「不過，因為神像都被濫用（這是毋庸否認的），所以我願各處的神像都被廢除。」但他又考慮到那些對於神像並沒有錯誤觀念的人，因此態度又軟化說：「但這不是廢除，破壞，焚燒神像的充足理由。」<sup>82</sup><span style={cite}>（《路德選集（下冊）》〔香港：基文，1968〕，420。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  儘管路德仍不得不承認濫用神像的問題確實存在：「神像是一種邪惡，因為它們被人濫用了。雖然這是真的，而且沒有人能否認，但是我們不能因此就拒絕它們，也不能因一事被濫用就非難那事，那樣行，要產生大混亂。」<sup>83</sup><span style={cite}>（《路德選集（下冊）》〔香港：基文，1968〕，420。）</span>既是「被人濫用的邪惡」，卻又「不能因一事被濫用就非難那事」，原因竟然是「那樣行，要產生大混亂」，關鍵抉擇的理由不過就是現實考量而已，實在令人感慨！
                </p>
                <p className="text-gray-700 leading-relaxed">
                  路德做了許多信仰論述，但在做關鍵抉擇的那一剎那，卻選擇向現實靠攏，難免令人質疑，若是信仰並非最高的判斷基準，又何必在開頭唱信仰的高調呢？這對於基督徒而言是一個警惕，許多基督徒熱心追求信仰、談論信仰且念念不忘信仰，但在最重要的抉擇關鍵時刻，卻採用信仰以外的根據做了決定，豈非枉然呢？
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">六、總結</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                路德主要的貢獻在神學方面，尤其是對信仰的深度了解，然而他仍是一位吸取中世紀養分，且受中世紀社會影響的知識分子，他對自然律、兩個國度、創造秩序的認識難免帶有中世紀的特徵，不過他也盡力提出不少具有創意的突破。比如他並未把特殊啟示放在自然律之外，從上帝創造萬物的角度來看，「自然」與「神聖」或者「自然的」與「啟示的」，並無區別，都是來自創造者上帝，這也意味屬世的國度與屬靈的國度，同樣出自上帝的創造；路德若能更加強調上帝的主權，應當能夠整合兩個國度的主張，進而整合律法的雙重作用。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                一般而言，在「屬靈國度」和「屬世國度」的水平二分之外，尚有「上帝國度」與「魔鬼國度」的垂直二分，由於路德的世界觀是「上帝國度」與「魔鬼國度」交戰不停，因此留下一個上帝與魔鬼在兩個國度持續交戰的印象，以致兩個國度仍處於分而未合的狀態，後來加爾文就高舉上帝主權，鮮少論及魔鬼，以上帝的國度整合了兩個國度。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                不可諱言，路德的「兩個國度」的主張，若未能整合「屬靈國度」和「屬世國度」的話，往往會造成一個極大的副作用——為「屬世國度」留下極大空間——以致發展成世俗化的基督徒，亦即禮拜一到禮拜六活在世界的價值觀裡，唯有禮拜天活在上帝國的價值觀裡。後來，潘霍華強烈抨擊「廉價恩典」，認為那是一種表面相信但並未改變自己的信仰，亦即「不需悔改的赦免」，「沒有教會管教的洗禮」，「不用認罪的聖餐」，「不必本人親身認罪的宣赦」，「不付作門徒代價的恩典」，「沒有十字架的恩典」，「沒有道成肉身的和永遠活著的耶穌基督的恩典」。<sup>84</sup><span style={cite}>（潘霍華，《追隨基督》，鄧肇明＆古樂人譯〔香港：道聲，1980〕，34。）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                另外一個副作用是在福音與律法的對照思考之下，認為律法對「屬靈國度」的貢獻僅僅在於使人自知無法遵行律法，這使得律法比較缺少積極意義，彷彿其主要目的就是使人知罪而轉向福音，而使得律法對於基督徒的意義並不明顯，這仍有待宗教改革第二代的加爾文及後世神學家，繼續發掘律法的正面意義。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                畢竟宗教改革第一代的路德成長於中世紀社會，而且曾在修道院擔任修士，受教於中世紀學者，讀過許多中世紀著作。宗教改革第二代的加爾文，在其成長時期已漸漸遠離中世紀傳統，十四歲時他前往巴黎就讀九年，學習的環境以文藝復興的人文主義為主，他沒有在任何修道院裡面待過一天。用今天的話來說，路德是舊人類，而加爾文則屬新世代。路德寫作時經常與中世紀思想家對話、辯論，雖然加爾文也批判中世紀思想家，但相對來說不需要有那麼多牽掛，因為他並不是在那樣的環境中成長。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                路德從事宗教改革時，他的周遭仍是封建體制社會，由支持宗教改革的封建諸侯智者腓利統治。加爾文宗教改革的處境則截然不同，他所在的日內瓦是神聖羅馬帝國直屬皇帝的帝國城市，日內瓦本身就是一個城市國家，當時已經實施三級議會的民主政治。路德從來沒有經歷過議會，卻受到總管一切的智者腓利保護，他的宗教改革一路順利；然而加爾文卻經常被議會牽制，教會總是受制於議會，這是加爾文長期在日內瓦宗教改革中受苦的主要因素，但這也使得加爾文的著作相當有現代感，因為他的處境與現代社會、政治的結構相似。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                路德的敵人對他的威脅有限，主要原因是有強大的諸侯在撐腰，實力並不亞於皇帝，挑戰路德需要足夠的實力與特別的勇氣。相形之下，許多人成為加爾文的論戰對手，因為他是住在日內瓦的法國人，直到晚年才取得半個公民權。
              </p>
              <p className="text-gray-700 leading-relaxed">
                身為宗教改革第一代的路德，面對信仰議題時，非常具有革命性，寸土不讓；然而在面對現實議題時，卻傾向維護秩序的保守觀點，亦即對待傳統、強權時態度溫和，時有妥協；第二代的加爾文就更加堅定主張單一的上帝主權，他的教導與勸告總是——絕不妥協。<sup>85</sup><span style={cite}>（帕爾克（T. H. L. Parker），《加爾文傳》，王怡方＆林鴻信譯〔台北：禮記，2001〕，288。）</span>
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
                '路德以「信發動愛」取代中世紀「愛形成信」，愛不再是人主動累積功德以得救的手段，而是因信稱義後自然結出的果子——先信靠上帝（好樹），才能結出愛人的果子，順序不可顛倒。',
                '「基督徒是全然自由的眾人之主，不受任何人的管轄；基督徒是全然順服的眾人之僕，受任何人管轄」——高升的自由唯獨在信裡經歷、在上帝面前；降卑的自由則藉著愛的行動、在人面前彰顯。',
                '路德在「反律法主義」（放縱情欲的自由）與「律法主義」（拘守禮儀的得救）兩極之間走一條適中的路，藉「兩個國度」批判前者、藉「律法與福音」的分辨批判後者。',
                '路德主張教會、家庭、國家三層秩序都出自上帝的創造與治理，婚姻被他稱為「品格學校」，其操練功效不亞於修道院的訓練，這徹底翻轉了中世紀「獨身比婚姻更靈性」的價值觀。',
                '「兩個國度」的主張雖有靈活運用信仰與現實的優點，卻也留下屬靈國度向屬世國度妥協的空間——威登堡圖像廢除爭議中，路德最終以「當局的援助」而非單純信仰立場作關鍵抉擇，是值得警惕的案例。',
                '路德是承先啟後的宗教改革第一代，仍帶有中世紀秩序觀的痕跡，面對信仰議題毫不妥協，面對現實政治議題卻時有讓步；第二代的加爾文處境不同、立場也更為堅定不移。',
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
              <h4 className="font-semibold text-gray-800 mb-2">路德威登堡圖像事件中「先信仰、後現實」的轉折，對今日教會決策有何提醒？</h4>
              <p className="text-gray-700 leading-relaxed">
                本章詳細分析路德在教堂圖像廢除爭議中，起初承認反對者「是對的，而且是根據聖經的」，最終卻以「當局的援助」作為出於上帝的憑據，價值判斷從信仰起始、以現實政治為終結。這對今日教會面對重大決策（建堂、人事、體制改革）極具警示意義——許多教會領袖同樣以神學語言開場，卻在最終拍板時悄悄換成現實考量（財務壓力、人情關係、多數意見）作為真正的依據，路德的案例提醒我們誠實檢視：我們的關鍵抉擇，到底是被信仰驅動，還是被信仰包裝？
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">路德稱婚姻為「品格學校」，對今日教會的婚姻觀有何挑戰？</h4>
              <p className="text-gray-700 leading-relaxed">
                路德徹底翻轉中世紀「獨身比婚姻更靈性」的價值觀，主張婚姻的操練功效不亞於修道院，甚至戲稱自己「一生都忍耐」教皇、異端、家人和妻子凱蒂。這對今日教會存在的兩極傾向都是提醒——一種是把單身生活浪漫化成「更蒙上帝使用」，另一種則是把婚姻窄化成情感滿足或社會期待，卻忽略了路德所看見的：婚姻本身就是磨練品格、學習捨己與接納差異的道場，其屬靈價值不亞於任何宗教操練。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「兩個國度」留下的副作用，與今日基督徒「主日基督徒」現象有何關連？</h4>
              <p className="text-gray-700 leading-relaxed">
                本章指出路德「兩個國度」若未能被上帝主權整合，容易導致「禮拜一到禮拜六活在世界的價值觀裡，唯有禮拜天活在上帝國的價值觀裡」的世俗化基督徒，這正是潘霍華後來猛烈抨擊「廉價恩典」的背景。今日教會常見的信仰與職場、信仰與政治立場「兩不相干」的切割現象，某種程度正是「兩個國度」副作用的當代版本，值得每個基督徒反思：我的信仰是否也被我自己劃分成「教會裡的信仰」與「教會外的生活」兩個互不相干的國度？
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
              '路德說「同時是義人與罪人」——在上帝看來是義人，在人看來卻是罪人。你如何理解並活出這種「雙重身分」而不至於自我放縱或自我論斷？',
              '路德主張「愛人無己」（徹底剷除自我中心）而非奧古斯丁的「愛人如己」。你認為這兩種進路對你目前的生命階段，哪一個更貼近你需要的提醒？',
              '路德說「內在的人」高居萬人之上的自由唯有信裡經歷，「外表的人」則願居萬人之下服事眾人。你的信仰生活中，這兩種自由是否都活出來了，還是只偏重其中一種？',
              '回想你自己曾做過的重大決策——是否也曾像路德在圖像事件中一樣，起初訴諸信仰原則，最終卻以現實考量拍板？',
              '路德稱婚姻為「品格學校」，如果你已婚，這學校教會你什麼？如果尚未結婚，你如何看待婚姻作為「操練德行」的可能性？',
              '面對「屬靈國度」與「屬世國度」的張力，你觀察自己的生活，是否也存在「禮拜天基督徒」與「平日生活」脫節的狀況？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 默想《基督徒的自由》核心論題</h4>
              <p className="text-gray-700 mb-2">找時間讀《路德選集》裡的〈基督徒的自由〉全文（或摘要），對照本章的圖表，寫下你對「基督之下，萬人之上；為了基督，萬人之下」的體會。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 檢視自己的「關鍵抉擇」模式</h4>
              <p className="text-gray-700 mb-2">
                回想一個你正在猶豫的重大決定，誠實寫下你目前傾向的理由——是信仰原則，還是現實考量（人情、面子、財務、方便）？參照路德的教訓，重新檢視這個決定。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🏠 把家庭當作「品格學校」來經營</h4>
              <p className="text-gray-700 mb-2">
                本週找一次與家人（配偶、父母、兒女）意見不合的時刻，練習把它看作路德所說的「德行操練」，而非單純的衝突，事後省察自己在其中學到了什麼。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「上帝啊，求祢幫助我因信祢而得著愛人的自由，而非靠自己的功德討祢喜悅。求祢使我在祢面前經歷高升的自由，也在人面前活出降卑服事的自由。求祢在我面對關鍵抉擇時，賜給我勇氣單單以祢的話為根據，而不向現實妥協。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
