import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Repeat, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;
const quote = "border-l-4 border-emerald-300 bg-emerald-50 pl-4 py-3 mb-3";
const quoteText = "text-emerald-800 leading-relaxed italic";

export default function Book39Ch11() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-slate-800 to-blue-900 bg-clip-text text-transparent">第十一章</h1>
        <h2 className="text-xl font-semibold text-gray-700">培養倫理道德習慣——德行倫理學</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          「這不是說我已經得著了，已經完全了；我乃是竭力追求，或者可以得著基督耶穌所以得著我的。」（腓3:12）
        </p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-slate-50 to-blue-50 hover:from-slate-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Repeat className="w-5 h-5 text-slate-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <p className="text-gray-700 leading-relaxed">
              上述這節經文強調要「竭力追求」，這是為了「耶穌基督得著我的目標（自譯）」，然而祕訣在於人要先被耶穌基督得著，才能具備竭力追求的動力。緊接在這節經文後說：「我只有一件事，就是忘記背後，努力面前的，向著標竿直跑，要得上帝在基督耶穌裡從上面召我來得的獎賞。」（腓3:13-14）「向著標竿直跑」描述如何「竭力追求」，而其標竿就是得著「獎賞」。
            </p>
            <p className="text-gray-700 leading-relaxed">
              奔向標竿是出於上帝的呼召，上帝呼召人以行動回應，人必須先領受「上帝在基督耶穌裡的呼召」，亦即被耶穌基督得著，才有能力以「向著標竿直跑」回應呼召。兩處經文的關鍵都指向人要先被改變，而後其行為才能隨之改變，然而並不意味著很快就能抵達目標，「竭力追求」已經暗示「向著標竿直跑」是一個漫長的歷程，需要經年累月的學習與訓練，而且必得建立習慣才能恆常持久。
            </p>
            <p className="text-gray-700 leading-relaxed">
              保羅書信在結束前常有落實在各種人際關係的德行教導，如以弗所書五章22節至六章9節提到夫妻、父母兒女、主僕關係，接著六章10～11節又呼籲「作剛強的人」，而且「要穿戴上帝所賜的全副軍裝」。基督徒需要建立德行習慣，藉此生活在健康的人際關係中，在這基礎上作剛強的人，且穿戴全副軍裝投入屬靈的爭戰，否則的話不過眼高手低。
            </p>
            <p className="text-gray-700 leading-relaxed">
              按照一般習慣用語，「德性」指向內在的道德心性，「德行」則指向具有外在行為的品德，由內而外原本不易區分，因此常見兩者交互使用。本書使用「德行」為主，因為倫理學不可缺少實踐層面，不過顧及引文出處，有時也使用「德性」，並未嚴格區分兩者。
            </p>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">一、德行倫理學的起源</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                亞里斯多德認為若要成為有德行的人，首先，行為者必須具備知識；其次，行為者必須選擇行動，而且單單為那行動本身做這選擇；最後，他的行動必須出自一種堅定不移的品格。<sup>1</sup><span style={cite}>（Aristotle, "Nichomachean Ethics," The Complete Works of Aristotle, 2 vols (Princeton: Princeton University Press, 1984), 1105a30-1105b5: "...in the first place he must have knowledge, secondly he must choose the acts, and choose them for their own sakes, and thirdly his action must proceed from a firm and unchangeable character."）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                亞里斯多德的哲學非常重視德行，主張唯有德行可以給人帶來幸福。其倫理學屬於目的論類型，追求終極目標（<em>telos</em>），德行行為導向目標的途徑。為了建立德行，需要藉由理性學習知識，而後才能做出決定與行動，整個過程逐漸塑造出堅定不移的品格。他是倫理學目的論最重要的理論奠基者，不過也應當注意其目的論的另外一面，就是追求目的者需要接受德行的裝備，因此亞里斯多德同時是德行倫理學的源頭，要先建造自己成為具有德行者，才能向著終極目標直跑。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                亞里斯多德所說的目標必得是具有德行者才能辨識，從品格出發，運用理性來做判斷，追求合乎道德的目標。若要成為有德行的人，首先必須具備知識，因為德行和知識是一體的兩面，不可能光有德行卻沒有知識，或者只有知識卻沒有德行；其次，行為者必須選擇行動，而且做抉擇時必須只為了所選擇的行動本身來選擇，亦即排除做決定之外的其他動機，不可夾帶利益或附屬動機。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                亞里斯多德主張「道德品格與道德人的循環性」：正義和節制的人根據正義和節制之人的榜樣來做出正義和節制的行動；反之，正義和節制的行動也使人成為正義和節制的人，因為若沒有任何正義和節制的作為，根本不可能讓人看見有成為良善之人的可能。<sup>2</sup><span style={cite}>（Aristotle, "Nichomachean Ethics," 1105b5-10: "Actions, then, are called just and temperate when they are such as the just or the temperate man would do; but it is not the man who does these that is just and temperate, but the man who also does them as just and temperate men do them. It is well said, then, that it is by doing just acts that the just man is produced, and by doing temperate acts the temperate man; without doing these no one would have even a prospect of becoming good."）</span>正義和節制之人做出正義和節制的行動；而正義和節制的行動又使人成為正義和節制的人。也就是說，有這種德行的人會做出這種道德行動，而這種道德行動又會使行動者成為具有這種德行的人，如此不斷循環下去。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                如果一個人做出正義、節制的行動，行為者必須以所選擇的正義、節制行動其本身為價值所在，而不應當有其他的動機。行為者的行動必須出自堅定不移的品格，亦即行為者必須是有品格之人。這又回到為何成為德行之人需要具備知識，因為唯有如此才能使他辨識目標與德行，而且堅定地確信所做的選擇就是價值本身所在。
              </p>
              <p className="text-gray-700 leading-relaxed">
                雖然亞里斯多德認為德行導向目標，不過他的倫理學卻把焦點拉回到人的身上，主張人應該成為道德之人，才能做出道德行動。目標畢竟座落於遠端，而人這一方才是近端，亦即必須從培養德行開始。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">二、德行倫理學的演進</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                亞里斯多德採用當時希臘人共同認定的四種主要德行，中世紀多瑪斯則根據亞里斯多德所主張的「四樞德」（cardinal virtues，出自拉丁文<em>cardo</em>的「樞紐」，<em>cardinalis</em>的「首要的」）：智德、義德、勇德、節德（Prudence, Justice, Fortitude, Temperance），從基督教信仰的角度來詮釋這四種德行，認為是四種重要的核心德行。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                多瑪斯主張，當我們有意願時，日積月累形成的習慣成為那促使我們行動的關鍵因素。<sup>3</sup><span style={cite}>（Thomas Aquinas, ST II-1, 50, 1: "A habit is that whereby we act when will."）</span>多瑪斯把「習慣」稱為「第二天性」，「第一天性」乃世人天生具有的特質，如理性思考、感官察覺，這是天生而有的；第二天性則需要後天的建立，並非來自天然，乃需要長期培養。這第二天性也有可能是來自上帝的注入，而非出自天然和長期努力，乃是朝向人性之外的目的而去，<sup>4</sup><span style={cite}>（Thomas Aquinas, ST II-1, 51, 4: "...there are some habits by which man is disposed to an end which exceeds the proportion of human nature..."）</span>信德就是如此。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                多瑪斯主張德行的建立來自習慣，因此德行倫理學不只主張行為者本身要具有德行，而且主張德行是藉由習慣建立起來的。當我們有意願時，基於長期培養出來的習慣，就能使我們進入行動。不過在第二天性中有一部分是人力無法培養出來的，需要從上帝那邊得著恩典的幫助——信、望、愛，這三樣被稱為「超性」——超越本性的德行，幫助我們朝向人性之外的目的前進，然而這並非人自己能夠培養出來的。
              </p>
              <p className="text-gray-700 leading-relaxed">
                總之，第一天性是天生具備，第二天性則需長期努力鍛鍊培養，超性德行卻需要上帝恩典才有可能得到。這些基本的概念辨識，構成了德行倫理學類型的基礎。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">三、德行倫理學的復興</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                麥金太爾（Alasdair MacIntyre, 1929-）是美國當代哲學家，為生於蘇格蘭的天主教學者。一九八一年，他出版名著《德行之後》（<em>After Virtue</em>，又譯「追尋美德」，下文多以後者稱呼），<sup>5</sup><span style={cite}>（A. MacIntyre, After Virtue (Notre Dame: University of Notre Dame, 1981)，中譯本：A．麥金太爾，《德行之後》，龔群、戴揚毅等譯〔北京：中國社科，1995〕；A．麥金太爾，《追尋美德》，宋繼杰譯〔南京：譯林，2003〕。）</span>批判啟蒙運動所造成歷史傳統的斷裂，以致現代社會變成一個沒有美德的社會，而喪失美德的原因是由於失落了傳統。
              </p>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 追尋德行</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  麥金太爾的名著之書名不易中譯，全書好像在質問那放棄德行之後的社會，究竟成了什麼樣的社會，因此書名譯為「德行之後」；但從另外一個角度來看，美式英語中的after有「追尋」的意思，這反映作者在一個沒有美德的世代中追尋美德，書名則譯成「追尋美德」。無論如何，兩者都呈現出此書對現代性提出深刻的質疑，在一開始就說了一個寓言：「人類歷史發展到一段時期，群眾在騷動中破壞了一切科學的設備與建築物，連科學書籍也不放過，甚至開始殺害科學家，把所有的科學教育徹底地剷除，在一切迫害平息之後，有一些明智的人開始追尋復興科學，但是僅僅剩下斷簡殘篇，比如片段的幾何書，以及殘缺不全的化學元素週期表。」麥金太爾認為在那種環境之下，這些人雖然努力復興科學，但是已經無法真正再從事科學了，因為整個科學的傳承已經斷裂了，不可能用片斷的幾何來構築數學，也無法用殘缺的化學元素週期表來了解化學，況且所能使用的這些零碎片斷的科學名詞，已經完全失去其情境。<sup>6</sup><span style={cite}>（A. MacIntyre, After Virtue (Notre Dame: University of Notre Dame, 1981), 1.）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  這個寓言呈現麥金太爾對西方社會的整體印象——社會道德倫理規範已經徹底瓦解，這是由於西方歷史傳統在啟蒙運動後開始四分五裂，以致失去了社會倫理道德的理想和規範，再也見不到完整的傳統，同時也意味著再也沒有美德了，或許還有人傳講一些美德的片斷，比如偶而聽到有人說勤勞是好事，但是已經喪失完整的倫理道德觀，既無四樞德與三超德，亦無七宗罪了。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  論及德行倫理學的復興，往往會以麥金太爾為代表，因為他深刻檢視當代由於傳統斷裂所造成的種種混亂現象，積極提倡德行倫理學，引發德行倫理學在二十世紀再度被注意。他提到倫理道德在歷史中的發展，第一階段是以亞里斯多德倫理學為中心之道德傳統支配的歷史時期，道德理論和實踐體現了真正客觀合理而非個人主觀的標準。這個階段是道德傳統主導的時期，道德理論和實踐並非出自個人主觀，乃追求客觀合理，這意味著追求德行並非基於個人標準，而是來自群體共識。這一階段的倫理學重點是應當做什麼，這是一個「應然」具有規範與引導力量的世代。<sup>7</sup><span style={cite}>（A. MacIntyre, After Virtue, 8-9.）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  第二階段則是受了啟蒙運動影響，倫理道德發展至以效益論為道德論述卻論證失敗的歷史時期，這階段為維護客觀合理而非主觀判斷的努力並沒有成功，以致道德標準失去正當的理由，為人類社會道德大災變的時期。<sup>8</sup><span style={cite}>（A. MacIntyre, After Virtue, 9-10.）</span>啟蒙運動單單高舉人的理性，人運用理性思考往往以利益為最大的動機，這導致追求利益的效益論成為倫理思考的主流，加上過度高舉理性往往造成與傳統決裂，以致客觀標準失去規範的力量，個人判斷轉向主觀選擇，以致道德標準失去正當合理的基礎。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  康德也是啟蒙運動時期的哲學家，不過他卻以義務論批判效益論的道德論述，因他認為這種論述不過是降低道德水平，以利益層次替代道德理性判斷的層次。儘管康德倫理學也有其擁護者，其理論雖然完備卻未得到大多數的認同，事實上普遍流行的仍是理論並不完備的效益論。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  在麥金太爾描述啟蒙運動影響所造成的宏觀畫面中，傳統上維護客觀合理標準的共識已成過去，人們漸漸疏離傳統，強調個人理性判斷，不過卻以利益或效益為最佳判斷，當效益論的主張——「追求最大多數人的最大利益」四處流行時，原本道德的理想面已退化成現實面，「應然」轉變成「實然」，應該如何已不再重要，而喜歡什麼才具有決定性，道德理想對於現實世界就不再具有引導的力量了。<sup>9</sup><span style={cite}>（A. MacIntyre, After Virtue, 10-12.）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  啟蒙運動為破壞傳統的始作俑者，來到十九世紀，尼采的個體主義又加深了與傳統的斷裂，形同為第三階段鋪路。尼采的生命哲學大力鼓吹生命本身的力量就是真理，他想要更加徹底地把所有的「應然」都改成「實然」，人是什麼就是什麼，強調生命的天然力量，直白而言，生物性的力量就是人的原貌。<sup>10</sup><span style={cite}>（A. MacIntyre, After Virtue, 11-12.）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  在尼采生命哲學視野下所見的人是個體，而且是單單作生命本身所要作的個體，人不過湊巧是什麼樣子，所以就是那個樣子；「人應當成為人」（man-as-he-should-be）變成「人恰巧成為人」（man-as-he-happens-to-be），於是主觀法則興起。尼采的主張很容易接到各式各樣以個人主觀判斷為中心的思想，不論是強調個人直覺的直覺論或鼓勵個人情緒的情緒論，甚至連希特勒的獨裁，都可從尼采的思想中找到資源。這並非說尼采哲學要對這些破壞性災難的結果負責，但無可避免正是由於受到他的啟發，很容易導向人人都可從他的思想取材來合理化自己的所作所為。<sup>11</sup><span style={cite}>（A. MacIntyre, After Virtue, 22.）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  第三階段從二十世紀初直到如今，以直覺論（intuitionism）為代表，客觀而非個人性標準已不再適用，情緒論（emotivism）則被通俗社會普遍接受，以致當代社會處於嚴重失序中。第三階段複雜矛盾之處在於，一方面承繼啟蒙運動，另一方面卻同時揚棄理性，單單主張直覺與情緒，全然推翻傳統那種客觀的、群體的、傳承的標準。情緒論主張，個人的喜好與否就是道德判斷標準，這種聲音愈來愈普遍，當討論倫理道德議題時，情緒認同與否成為唯一的道德基礎，只要人自己喜歡去做就可以被接受，放棄理性驗證之必要。<sup>12</sup><span style={cite}>（A. MacIntyre, After Virtue, 31.）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  對麥金太爾而言，現代社會正處於嚴重失序的狀態中，現代人已經與歷史傳統徹底斷裂，儘管有些人還想要再恢復過去，然而再怎麼努力也已不是原來的樣子了，整個大傳統已經徹底消失。於是隨著目標而來的美德習慣已不再重要，亞里斯多德所見整合社會不可缺少的道德失去了權威，群體性目標被重視個體性徹底取代。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  原本亞里斯多德以「城邦」為理想社會，其中整合眾人的要素就是道德，因為城邦政治時代需要群體的倫理道德，每個城邦就是一個生活群體，這群體必須藉由建立具有共識的德行來維繫，如此才能追求群體生活的理想。然而，如今這樣的理想已經凋零，把大家維繫在一起的傳統權威式微，客觀的群體目標被主觀的個體感受全然取代。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  麥金太爾是一位重視傳統的天主教徒，整本《追尋美德》都在強調一個重點，了解自己的歷史傳統十分重要，必先了解傳統，才能明白自己是誰。這傳統不一定是物質性的，而且是精神或靈性層面的；不一定是短期的過去，而可能是源遠流長的過去。無論如何，歷史傳統總是群體生命意義的源頭，並且是價值判斷的客觀基準。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  總之，人必須具有活在傳統裡的意識，有如元素週期表所代表的一種傳統，唯有當傳統不斷被遵循、傳承下去，才能建立生活秩序與道德共識，呈現世世代代的歷史當中有價值觀的連續性。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">2. 對話</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  這本書寫得有些凌亂，並不易理解，然而對現代基督教倫理思潮帶來很大的影響。麥金太爾認為啟蒙運動與傳統斷裂所造成的災難，是來自極端的個人主義，這種主義僅僅肯定個人感覺，他稱之為「情緒論」：「所有價值判斷中的道德判斷，只不過是表達喜好、態度或感受。」<sup>13</sup><span style={cite}>（A. MacIntyre, After Virtue, 68-72.）</span>現代人已經普遍生活在自己的感覺裡，而認為倫理道德不過是一種情感的流露而已，對於情緒優先、感覺最重要、情感居首位的世代而言，不但理性判斷逐漸退場，而且造成倫理道德傳承的失落。「只要我喜歡有什麼不可以」，此一廣告用語彷彿成為時代的箴言，整個時代都往主觀方向位移，而且瘋狂地加速中。<sup>14</sup><span style={cite}>（A. MacIntyre, After Virtue, 216。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  換言之，主張做這件事情或贊成做那件事情，無非是表達感受而已。在這種情況下，道德判斷沒有客觀規範可言，把倫理道德放在歷史傳統架構下來了解且形成判斷的時代，已然漸漸遠去。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  麥金太爾認為，「情緒論」原是為了解決現代社會愈來愈分歧所產生的，但事實上卻造成極端的個人主義，缺乏任何客觀的道德範疇依據，也因而未能有明確的道德主張與立場。人人可任意選取主觀觀點批判一切，乃至自己否定自己的觀點，<sup>15</sup><span style={cite}>（A. MacIntyre, After Virtue, 221。）</span>這反而造成更加分歧的社會，因為人人的感覺不盡相同。關於「情緒論」如何深深地進入現代人的生活，麥金太爾舉了三個例子：<sup>16</sup><span style={cite}>（A. MacIntyre, After Virtue, 263。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  其一，現代人傾向以「權利」（rights）為中心來做價值判斷，然而現代人所講的「權利」與中世紀的人所講的「權利」不同，中世紀的「權利」比較消極，所謂的擁有「權利」，往往用一種消極方式來表達，比如權利意味著不可有什麼限制。然而，現代人講到「權利」時，常常用積極方式來表達，突顯「我要什麼」或者「我主張什麼」。語言的轉變反映從中世紀到現代的改變，從原本消極性規定轉向積極性要求，以致個體的權利意識不斷被強化，人人大聲疾呼要求權利，老師爭取教師權，學生也要求受教權。總之，現代人的權利來自自己的判斷，而判斷基礎則在於自己的感覺和情緒，以致無止境地外延、擴大而造成更多衝突。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  其二，現代人常常愛用抗議（protest）一語，麥金太爾從字源發現這字原本有正面意義，字首（pro-）帶有支持的意味，原意是正面地為某件事來作見證，然而現代人卻把此字當作負面意義，意指徹底反對或決裂，藉此傳達尖銳突兀的情緒，好比「我要抗議」的呼籲就是在劃清敵我界限。假如麥金太爾來到一個網路世界如此發達的世代，恐將發現網路把情緒論所帶來的效應，藉由網路迅速傳播而擴大千百萬倍，到處可見網路酸民尖銳地叫囂責罵，互相把人的邪惡本性不斷地激發出來，而且用赤裸裸的語言尖銳表達，卻可匿名而不用負責。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  其三，麥金太爾也分析「揭發」（Unmasking），他形容現代人常常用揭發別人的專斷來保護自己的專斷，當自己有什麼錯誤時，就率先攻擊別人，就如經常可見的黑函文化。他在八〇年代已經看到媒體以揭發人隱密的罪惡、錯誤為榮，並且以正義使者自居；而且引述佛洛伊德對原我的揭發，據此肯定原始獸性欲望，甚至把毫無節制地揭發隱私或傷害人正當化。當今社會可見，這些現象進而擴大成狗仔文化、網路揭私、灑狗血放話等，當形成風潮四處流行時，不但人們不再運用理性，也不再有美德可言。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">3. 說故事</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  針對傳統的失落，麥金太爾具體提出正面期待：「在人的行動、實踐與幻想當中，人本質上是說故事的動物，並非人天生就是如此，而是透過其歷史來成為熱愛真理的說故事者。」<sup>17</sup><span style={cite}>（《等待果陀》是一九六九年諾貝爾文學獎得主山繆．貝克特的代表作，這是一齣荒謬劇，兩個流浪漢徒勞無功地等著一位不知道是誰的人出現。）</span>人的歷史有其延續性，並且是透過說故事來延續。人聽了故事，在行動、實踐與幻想當中繼續說故事，透過歷史成為熱愛真理的說故事者，也同時把故事在歷史中傳承下去。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  由於起源於啟蒙運動的現代社會是一個破碎的社會，麥金太爾期待藉由說故事來重建，這與故事神學有一個類似的脈絡——延續歷史傳統需要不斷說故事。從古老的時代以來，承載傳統的方式主要就是說故事和聽故事，特別是在群體中說故事和聽故事。很多人一生懷念在家鄉聽聞過祖父母長輩所說的故事，雖然不一定帶來豐富的知識，但卻帶來長久的記憶和感染力。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  麥金太爾觀察「自我」是被歷史傳統形塑說：「我是什麼？我是我自己所承繼的主要部分，特定的過去多少出現於我自己的現在。我發現我是歷史的一部分，概括而言，不論喜歡或承認與否，我是一位傳統的承載者。」<sup>18</sup><span style={cite}>（A. MacIntyre, Whose Justice? Which Rationality? (London: Duckworth, 1988).）</span>「自我」不但被傳統形塑，而且繼續承載傳統，承載的方式就是透過說故事。人是生活在群體裡，藉由說故事與聽故事而傳承歷史傳統，這些歷史傳統進入群體生活，在群體裡面又繼續被傳述下去。從聽故事和說故事之間，可以見到人是並非完全獨立且與歷史傳統斷裂的主體，乃是過去的延續，亦即當今的傳統承載者。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">4. 等待聖本篤</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  《追尋美德》的結論是，當今歐美有如處於羅馬帝國面對蠻族入侵的黑暗時代，過往的有志之士被迫放棄延續舊的群體生活，開始營造新的群體生活，使道德與文明可在來臨的黑暗中存續。如今我們已經來到歷史的轉折點，需要建造各種區域的群體生活形式，好讓文明、智性、道德生活得以繼續維繫。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  最後，麥金太爾說：「我們並非在等待果陀（Godot），而是另外一位無疑截然不同的聖本篤（Benedict of Nursia, 480-550）。」<sup>19</sup><span style={cite}>（侯活士（Stanley Hauerwas），《和平的國度——基督教倫理學獻議》，紀榮智譯〔香港：基道，2010〕，149。）</span>果陀典故出自劇作《等待果陀》，這劇其實描述人活在世上荒謬而無意義，劇中有兩個人在等待一位始終不會出現的朋友——果陀，其實暗指上帝（God），因為現代人也在等待一位永遠都不會出現的上帝，生命就是這麼荒謬。麥金太爾有如預言的一席話，指出我們並非漫無目標等著不知是誰的到來，而是等待那位藉著重建修道院群體生活，在黑暗來臨的世代中延續文明、智性、道德生活的聖本篤。麥金太爾並未失去盼望，他不等待果陀，而等待聖本篤。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  為何提到聖本篤呢？羅馬帝國最終被毀滅、進入中世紀，其中有一段動盪不安的時期，聖本篤生活在混亂失序的世代——羅馬帝國末期，當時基督教被當作羅馬帝國的國教，羅馬帝國還是被自身道德腐敗的風氣拖垮，無法抵禦北方民族入侵，西方文明即將毀於一旦。面對文明被摧毀的危機，聖本篤建立群體性的修道制度，以群體性修道生活作為對抗失序的力量，力挽狂瀾。因此，聖本篤最有名的著作並非靈修作品而是會規，在他所設立的修會規矩中，呈現理想的群體生活秩序——這也是麥金太爾的期盼。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">5. 後續</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  麥金太爾重視傳統價值的思考方式，這繼續在一九八八年其寫作的《誰的公義？哪一種合理性？》中出現，討論公義和合理性隨著歷史傳統而演變。歷世歷代的「公義」都有其歷史傳統背景，而歷世歷代的「合理性」也有其歷史傳統背景。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  《追尋美德》只是一個麥金太爾反思現代社會的起點，接著他就要就細部分析那破碎的狀態如何，檢視現代社會對公義及理性的了解，結果他發現原來兩者並沒有現代人想像的那麼客觀。中世紀的公義至少有一個長遠的傳統在支撐，一旦轉向情緒論時，公義就變成宛如人人手中的一把號，各吹各的調。而且他發現，現代人凡事都要求理性，然而理性的涵義在各世代中卻各有不同，因此他用合理性（rationality）指向運用理性（reason）的方式，畢竟無法找到一個客觀不變的理性，每一個時代都各有其追求合理的方式，這樣的合理性受到各時代背景、歷史處境的影響，而非百分之百「客觀」，反而有其相對性，在這個時代人們所看為合理，很可能對別時代的人們而言卻不合理。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  麥金太爾摧毀了科學實證論最喜歡高舉的理性之絕對性，批判他們所謂的理性是時代背景下追求合理的產物，事實上只有分屬不同世代的合理性，而沒有絕對客觀的理性。因此，麥金太爾呼籲，與其追求絕對理性，不如回復歷史傳統，藉由在群體中說故事來延續傳統以及其共識規範。
                </p>
              </div>

              <div>
                <span className="font-semibold text-slate-700">6. 評論</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  在群體當中說故事來傳承歷史，這本是台灣原住民最強的一塊，但隨著原住民移居都市而逐漸瓦解，說故事的傳統逐漸消失了，只剩下破碎的都市生活畫面，以及零零碎碎的網路知識傳播。其實網路世界難以增加多少知識或德行，比如人無法藉由凌亂破碎的網路知識來培養智德，使人明智地認識是非對錯及其後果，然後做出恰當的處境應用，反倒網上流行的一切正是使整個大傳統崩塌以及德行邊緣化的原因。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  麥金太爾不只是啟蒙運動的批判者，同時也提出正面的呼籲，希望回復歷史傳統的地位，主張人是傳統的承載者，而且以在群體中說故事的方式延續傳統，盼望以此重建社會價值並傳承歷史。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">四、德行倫理學的發揚</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                德行倫理學原本與天主教倫理神學密切相關，其實重洗派的教會論也傾向德行倫理學，現代基督教倫理學家侯活士則帶動重洗派神學的復興，使得德行倫理學再次受到基督教倫理學界的矚目。
              </p>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 侯活士</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  侯活士以主張「讓教會成為教會」聞名，提醒教會應當不斷追求教會存在的目的與意義，並且努力成為教會應有的樣式。教會應當回憶且講述在耶穌裡的上帝故事，其首要任務就是成為教會，幫助世界明白自身是世界。<sup>20</sup><span style={cite}>（侯活士，《品格的群體》，申美倫、施多加譯〔新北：校園，2020〕，19。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  教會最重要的使命，「就是要成為一個群體，能夠聆聽聖經中上帝的故事並在生活上忠於這個故事」。<sup>21</sup><span style={cite}>（Stanley Hauerwas, Hannah's Child—A Theological Memoir (Grand Rapids: Eerdmans, 2012), x-xi.）</span>由於教會本身就是群體，應當活出合乎教會身分的群體見證，呈現與世界有別的價值觀，讓世界知道自己不過是受造、有限、墮落的世界而已。然而，當基督徒群體要讓世界知道自己是世界，絕不能輕忽一件事——自己就是世界的一部分，而非站在世界外面指責世界。<sup>22</sup><span style={cite}>（侯活士，《品格的群體》，158。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  教會面臨的最大挑戰，就是要對不認識上帝的群體成為一個「對比典範」，<sup>23</sup><span style={cite}>（侯活士，《品格的群體》，156-160。）</span>這意味著教會是相信上帝故事的群體，教會不只傳講這個故事，而且還要親身參與這個故事。就此意義而言，教會本身就是美德的學校，而且應當作為呈現信仰價值觀的社會倫理學的群體見證，如此的社會倫理學勢必也就是神學；基督徒生活並非追求擁有抽象的普遍真理原則，而在於學習活出對上帝及對人的真實，可見神學與倫理學緊密相連且無法二分。<sup>24</sup><span style={cite}>（Stanley Hauerwas, Sanctify Them in the Truth: Holiness Exemplified (Nashville: Abingdon Press, 1998), 21-79.）</span>
                </p>

                <p className="font-semibold text-slate-800 mb-2 mt-3">▲從品格出發</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  侯活士是當代基督教倫理學最重要的德行倫理學呼籲者，他早期從倫理學的角度來定義「品格」：品格是行為者的自我判斷，藉由行為者確定的信念（belief）、意向（intention）和行動（action）所組成，透過該信念、意向和行動，行為者進入了道德歷史，而符合行為者作為自我決定（self-determining）之存在者的本質。<sup>25</sup><span style={cite}>（Stanley Hauerwas, Character and the Christian Life: A Study in Theological Ethics (Notre Dame: University of Notre Dame Press, 1975, 1994), xx: "by the idea of character I mean the form of man's self-agency through his beliefs, intentions, and actions, by which a man acquires a moral history befitting his nature as a self-determining being."）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  這早期的品格定義特別重視德行主體——行為者，品格是行為者執行行動的判斷，據此做出應當去做的行為，亦即合乎道德的行動。品格三要素包括信念、意向和行動，信念可評量何者為合乎正義或合乎規範的行為，意向是願意付出代價來讓這件事情成就，行動更是把評量與意願都化成行為，這三者使得行動者活出道德的生活，而進入一種道德傳承，呈現他是一個自己可以做決定的存在者，具有這樣的自由判斷能力。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  根據韋爾斯（Samuel Wells, 1965-）的觀察，把焦點集中在行動者只是侯活士倫理學的早期想法，後來他逐漸增添故事與群體的成分，於是韋爾斯把他的思想分成三階段：從困惑到品格、從品格到故事、從故事到群體。<sup>26</sup><span style={cite}>（Samuel Wells, Transforming Fate into Destiny (Eugene: Cascade Books, 1998).）</span>首先，侯活士從傳統倫理學出發，強調行為者做決定的中立位置，雖然開始重視品格的主導因素，然而在品格的背後仍有抽象原則；其次，轉而強調品格是在故事中被塑造成形，而非附屬於個體；其三，在故事中形塑品格的轉向是出於說故事的群體——教會。總之，一切行動的終末目標在於，呈現藉由耶穌基督的降生、受死與復活而彰顯出來的品格。<sup>27</sup><span style={cite}>（Samuel Wells, Transforming Fate into Destiny, 38-39。）</span>
                </p>

                <p className="font-semibold text-slate-800 mb-2 mt-3">▲教會作為信仰群體見證</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  來到成熟期，侯活士認為教會的最高使命應當不只是「說出所信」，而且是「活出所信」，也就是以行動落實生活來呈現所信，事實上就是以行動講述教會的故事。侯活士主張基督教倫理學的特色不在於其理論、規則或責任，而在於信仰群體生活的敘事特質，主張教會應當作信仰群體的見證來具體呈現所信，如此一幅視野恢弘的教會圖像引發不少迴響。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  教會是一個德行的群體，「教會要成為（to be）一社會／社群倫理，而不只是擁有（to have）一社會／社群倫理，就意味著必須要由某種人來維繫教會，叫教會作為一跨時代的建制」。<sup>28</sup><span style={cite}>（侯活士，《和平的國度》，151。）</span>那些人必須是「一群德性的人」，而其德性必須是「那些憶起和講述那位被釘十字架的救主的故事時必不可少的德性」。<sup>29</sup><span style={cite}>（侯活士，《和平的國度》，48。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  侯活士的主張來自聖經，「因聖經在根本上是一個群體與他們的上帝一同踏上旅程的故事」，<sup>30</sup><span style={cite}>（侯活士＆韋利蒙（Stanley Hauerwas &amp; William H. Willimon），《異類僑居者——有別於世界的信仰群體》，曾景恆譯〔香港：基道，2012〕，58。）</span>信仰群體不只用說故事的方式傳達信仰，而且用行動親身參與信仰的故事，也就是以行動來講述教會的故事。「拯救是受洗歸入一個群體，這群體有如一個如此真實的故事，以致我們忘記了自身及所有焦慮，好成為這個故事的一部分；那也是一個上帝藉著聖經不斷告訴以色列和教會的故事。」<sup>31</sup><span style={cite}>（侯活士＆韋利蒙，《異類僑居者》，285。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  教會應當成為具有教育功能的信仰群體，家庭也必須成為這樣的信仰群體，否則無法期待下一代能夠有同樣的信仰。作為世上對照群體的教會，在信仰群體的實踐當中整合信仰價值觀，形成整體的見證，並且在信仰群體成員的互動當中，透過參與式的學習來傳承信仰。從作為與世對照群體的角度來看，教會的信仰價值觀面臨強大的社會價值觀挑戰，於是信仰的傳承有如面對一場群體性的戰爭。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  儘管人們有許多軟弱，由人所組成的教會也有許多軟弱：
                </p>
                <div className={quote}>
                  <p className={quoteText}>
                    當人敬拜上帝，上帝就會以不尋常的方式來使用我們。我的盼望最終不在於那遷就文化的教會，而是在於上帝——祂會使用那遷就文化的教會，使它可以為祂作見證，這是我們無法想像的。上帝總找到方法，迫使我們成為忠心的人。<sup>32</sup><span style={cite}>（侯活士＆韋利蒙，《異類僑居者》，18。）</span>
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  縱使處於世上的教會往往必須遷就世界的文化，但目的卻是為上帝作見證，教會應當忠於上帝而非世界。侯活士的話有時帶有強烈的顛覆性，比如他說：「神學家的工作，並不是要令現代世界認為福音是可信的，而是要令福音認為世界是可信的。」<sup>33</sup><span style={cite}>（侯活士＆韋利蒙，《異類僑居者》，34。）</span>這話聽起來有些怪異，但其實是主張教會應當對福音有信心，不必讓福音遷就世界，而是應當叫世界遷就福音！
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  因此，侯活士直率地說：「基督徒的政治責任是要成為教會，而非改變世界。」<sup>34</sup><span style={cite}>（侯活士＆韋利蒙，《異類僑居者》，45。）</span>成為見證上帝的信仰群體是基督徒對於政治最好的貢獻，而非投入改變世界，換言之：「教會最重要的政治任務，就是要成為十字架的群體。」<sup>35</sup><span style={cite}>（侯活士＆韋利蒙，《異類僑居者》，45。）</span>
                </p>

                <p className="font-semibold text-slate-800 mb-2 mt-3">▲盼望之必要</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  侯活士認為終末論對做神學而言非常重要，而且是對教會世俗化潮流的重要提醒，終末論可使教會辨明自己與世界的關係。當他主張教會的使命是使世界知道自己是世界時，這是從終末視野的角度來思考，教會與世界在今世何以不同。<sup>36</sup><span style={cite}>（Stanley Hauerwas, Approaching the End. Eschatological Reflections on Church, Politics, and Life (Grand Rapids: Eerdmans, 2013), xi.）</span>而且，侯活士主張非暴力和平主義，也是從終末論角度來看創造，因為上帝的創造如同終末異象是以和平為目的。<sup>37</sup><span style={cite}>（Stanley Hauerwas, Approaching the End, 21。）</span>他自己對《和平的國度》做了一個摘要：「如果我們想要正確理解基督教信仰的終末論的性質，盼望與忍耐都是極重要的德性。」<sup>38</sup><span style={cite}>（侯活士，《和平的國度》，222。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  由於這世界仍然是上帝的世界，只不過這世界不把上帝的故事當作自己的故事。<sup>39</sup><span style={cite}>（侯活士，《和平的國度》，149。）</span>既然是故事就需要有開始、延續與結局，這意味著必須從終末論的角度來看世界，「因耶穌來，是要宣布一個結局，儘管這結局仍未到最後，但卻可向我們在世延續的生命，提供一個必須的視角」。<sup>40</sup><span style={cite}>（侯活士，《和平的國度》，126。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  因此，與「終末」對應的「盼望」，是一個非常重要的德行，盼望的美德使我們察覺一個事實：我們身處的世界，本身擁有一個故事；若有故事存在，也就有說故事者存在，而上帝就是這個說故事者，祂將我們放在創造的故事中，從而賜予我們盼望。<sup>41</sup><span style={cite}>（侯活士，《美德摩天輪》，黃大業譯〔香港：基督教文藝出版社，2019〕，82。）</span>
                </p>
              </div>

              <div>
                <span className="font-semibold text-slate-700">2. 韋爾斯</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  韋爾斯是一位經常與侯活士合作的英國學者，後來長住美國的聖公會神學家。他看見在養成品格之前，需要培養習慣，「習慣是為使人養成把正確的事當成理當如此，技能是為使人能把視為理當如此的事付諸實行」。<sup>42</sup><span style={cite}>（韋爾斯（Samuel Wells），《現編倫理：從戲劇角度再思基督教倫理觀》（Improvisation: The Drama of Christian Ethics），鄧紹光、紀榮智譯〔香港：基道，2018〕，70。）</span>習慣就是當你做正確的事情時，只不過就是在做最平常的事，技能則是付諸行動。因此，習慣還要加上技能，若有好習慣卻沒有技能還是不夠，比如說每天都有刷牙的習慣，但問題在於不明白怎麼刷，最怕只是亂刷一通，所以習慣還要加上技能的配合。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  韋爾斯主張想像可養成習慣，「要形塑正確的直覺，其實和發展想像有關」。<sup>43</sup><span style={cite}>（韋爾斯，《現編倫理》，71。）</span>創意的想像則是「這種『能同時看出事物實況和事物可能變成的狀況』的能力，是訓練人活出美善人生——即道德形塑（moral formation）——的創意力量」。<sup>44</sup><span style={cite}>（韋爾斯，《現編倫理》，71。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  一個人如果能夠養成習慣，需要創意，這創意被歸為一種直覺，因為創意是一種瞬間的呈現。如果要形塑正確的直覺，亦即合乎道德的當下直覺，能夠做的就是發展想像來養成習慣。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  平時各種想像所形成的習慣不一定與道德有直接關連，創意的想像卻是訓練人活出美善人生——即道德形塑——的創意力量。韋爾斯把創意想像當作形塑品格最重要的來源，平常不斷想像所帶出來的習慣是細水長流，因為不可能在遇到緊要關頭時才開始培養，培養是在平常時就必須進行。創意的想像帶來我們品格的形塑，品格的形塑則使我們在遇到危機時會有一種立即的反應，因為很多時候我們在做判斷時，沒有太多的時間考慮，然而藉由平常的想像卻可以養成習慣來應付緊要關頭的時刻。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  韋爾斯追隨侯活士的德行倫理學，只是在對敘事的重視加上戲劇性的創意。侯活士論及德行的培養時，經常提到要做一個信仰群體，就需要不斷說故事來傳講信息，每個個體都應當加入群體，不斷說故事、聽故事，而後進入社會且帶出行動，把故事落實在現實生命中，以承接道德傳統。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  韋爾斯則把德行習慣的培養套用至與舞台、戲劇有關的場景裡，其中最關鍵的一章叫做〈形塑習慣〉，此章有一個基本主張：習慣帶出品格，什麼樣的品格決定什麼樣的人生，亦即習慣塑造品格使人能夠戰勝各種軟弱且避免誤入歧途。他採用一個前提，相信整個人生的勝負關鍵在於品格，這裡的勝負顯然不是指物質觀點，而是在價值觀勝負中的決勝，品格則是由習慣養成的。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  若以舞台為處境，需要放鬆式警覺（relaxed awareness），<sup>45</sup><span style={cite}>（韋爾斯，《現編倫理》，76-79。）</span>演員在舞台上最有創意的時候也是最放鬆的時候。韋爾斯把這個現象應用到禱告之中，主張默觀式的禱告也要學習放鬆式的警覺，讓它成為本能、直覺，經歷恩典自然流露的回應。這種放鬆式的警覺是培養德行的重要進路，他進一步把整個禮拜都當作舞台，每一個參加禮拜者都是演員，在禮拜中我們被形塑品格，基於聖公會的注重禮儀，他以禮儀為演出，觀眾則是廣義的參與者，一切服事、同工、團隊亦可形塑品格，上課也在形塑品格。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  「教會的信仰，在於相信上帝藉著故事、聖禮和聖靈，已把上帝子民與祂同活所需用的一切賜給他們。」<sup>46</sup><span style={cite}>（韋爾斯，《現編倫理》，73。）</span>這樣的一種信仰讓我們珍惜每一個說故事、聽故事的場合，每一場聖餐、每一場洗禮，都珍惜聖靈的帶領。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">五、總結</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                表面看來，德行倫理學似乎離我們常見的現代社會距離相當遙遠，由於現代人長期處於繁忙的生活中，有關建立德行習慣的事似乎很難實現，只依稀記得小學時還經常被提醒要建立好習慣，但在成長過程中卻都被漸漸遺忘了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                事實上，德行倫理學的主張源遠流長，一如奧古斯丁曾深受不良習慣纏累，以致他無法親近上帝，他說：「我訝異地發現自己已經愛上了祢，而非那種冒充祢的幻像；但我還不能堅定享受我的上帝，我被祢的美好吸引，卻又旋即被自身的重擔拖著下墜，在呻吟中往下墮落：這重擔就是我肉體的習慣。」<sup>47</sup><span style={cite}>（Augustine, Saint Augustine Confessions (Oxford: Oxford University Press, 1992), 7.17, 127.）</span>既然不良習慣使人往下沉淪、遠離上帝，好習慣也自然能使人向上提升、親近上帝。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經中聖靈的九種果子（加5:22-23）都與德行有關，那是聖靈做工使基督徒長期凝聚而成的生命特質。九種果子的第一種就是「愛」，德行倫理學堅持「愛的理想」，只是主張實現這理想需要建立內在的德行習慣，也需要建立從德行習慣發出之愛的行動。相形之下，務實倫理學也堅持愛的理想，但卻傾向把這理想放置在終末的信念，只是作為今生今世的一種期許而已，並未想要積極實踐這理想。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                整體觀之，許多不好的習慣是因日積月累乃積久成習，並不待主動的學習；而建立好習慣也可循此途徑，經常操練終必有成，重點在於是否具有充分建立德行的動機。德行倫理學提供追求德行習慣的動機，提醒人們品格的好壞決定人生的成敗，而品格即來自習慣的養成。好習慣能夠塑造人的品格，並促使其有具體的行動，增加其奔向目標的能力，以免淪為空談，況且德行倫理學所主張的見證群體，更可為建立好習慣提供重要的幫助。
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
                '亞里斯多德主張德行需要知識、單純為行動本身而選擇、以及出自堅定不移的品格三要素，「道德品格與道德人的循環性」意味著正義的人做出正義的行動，而正義的行動又使人成為正義的人。',
                '麥金太爾《追尋美德》以「復興科學卻已失去情境」的寓言，指出啟蒙運動使西方社會與歷史傳統徹底斷裂，情緒論主張「道德判斷只是表達喜好」，最終導致當代社會陷入嚴重的價值失序。',
                '麥金太爾主張以「說故事」重建傳統——人的「自我」是被歷史傳統形塑、又繼續承載傳統的存在，「我們並非等待果陀，而是等待聖本篤」，呼籲藉由重建群體生活來延續文明與道德。',
                '侯活士主張「教會要成為（to be）而非只是擁有（to have）一種社會倫理」，教會最重要的政治任務是「成為十字架的群體」，而非致力於改變世界——這句話常被誤解為消極避世，實則是對福音信心的堅持。',
                '侯活士的德行倫理學經歷「從品格到故事、從故事到群體」三階段發展，強調品格是在信仰群體不斷說故事、聽故事、活出故事的過程中被形塑，而非單靠個體抽象的道德判斷。',
                '韋爾斯進一步指出「習慣要加上技能才夠」，並主張創意的想像力是形塑品格最重要的來源——培養必須在平常持續進行，才能在危機時刻自然流露出合乎道德的直覺反應。',
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
              <h4 className="font-semibold text-gray-800 mb-2">麥金太爾對「情緒論」的批判，對今日網路社群文化有何診斷意義？</h4>
              <p className="text-gray-700 leading-relaxed">
                本章特別分析麥金太爾早在八〇年代就觀察到的「權利語言積極化」「抗議變質」「揭發文化」三個現象，並延伸指出這些現象在網路時代被放大千百萬倍——酸民文化、網路肉搜、匿名霸凌，正是情緒論脫離理性驗證、只憑主觀好惡論斷是非的極致展現。這對今日教會思考如何在網路上表達立場、參與公共討論極具參考價值：情緒宣洩式的表態縱使痛快，卻可能正是加速道德傳統崩解的推手。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">侯活士「基督徒的政治責任是成為教會，而非改變世界」，如何與積極社會參與的呼召平衡？</h4>
              <p className="text-gray-700 leading-relaxed">
                這句話常被誤解為鼓吹教會消極避世，但本章脈絡顯示，侯活士真正反對的是教會為了討好世界而失去自身獨特性的「君士坦丁主義」妥協路線。教會若能先扎實地「成為教會」——活出與世界有別的德行見證——反而更有能力真實地影響世界，而非淪為世界的翻版卻毫無改變力量。這對今日教會在社會參與與信仰純正之間的張力，提供了一個「先扎根再結果」的思考順序。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">韋爾斯「創意想像」培養習慣的主張，對基督徒靈修操練的日常實踐有何啟發？</h4>
              <p className="text-gray-700 leading-relaxed">
                韋爾斯指出品格的形塑必須在平常持續進行，不可能臨到危機時才臨時培養，這與許多人期待「關鍵時刻靠意志力做對的事」的直覺想法相反。這提醒基督徒，靈修操練（讀經、禱告、服事）的價值不在於帶來立即的屬靈亢奮，而在於日復一日地培養出遇到誘惑或危機時能夠自然而然、不假思索就流露出來的合神心意的直覺反應——這正是「習慣」與「品格」之間的深刻連結。
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
              '亞里斯多德說「正義的人做出正義的行動，正義的行動又使人成為正義的人」。你能否想到自己生命中一個「行動塑造品格」的具體例子？',
              '麥金太爾說「只要我喜歡有什麼不可以」成了時代的箴言。你觀察自己做道德判斷時，有多少比例是出於「理性驗證」、多少比例是出於「單純的喜好或感受」？',
              '你的家族或信仰群體中，是否有值得被「說出來、傳承下去」的重要故事？你上一次向下一代講述這樣的故事是什麼時候？',
              '侯活士主張教會的政治責任是「成為教會」而非「改變世界」。你認為自己所屬的信仰群體，目前更傾向哪一種取向？這帶來什麼樣的果效或代價？',
              '韋爾斯說習慣要加上技能才夠，如同「每天刷牙卻不明白怎麼刷」。回想你的靈修習慣（讀經、禱告），是否也存在「有習慣卻缺乏技能」的情況？',
              '面對「等待聖本篤」的呼籲，你認為自己的信仰群體，是否也需要類似的「重建群體生活」來對抗當代的失序與破碎？具體可以從哪裡開始？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 建立一項具體的德行習慣</h4>
              <p className="text-gray-700 mb-2">選定一項你想要培養的德行（如節制、忍耐、慷慨），設計一個具體、每天可執行的微小習慣，持續操練至少三週，記錄變化。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📜 向下一代說一個信仰傳承的故事</h4>
              <p className="text-gray-700 mb-2">
                本週找機會向家人或信仰群體中的年輕一代，講述一個你自己或家族信仰傳承中重要的故事，操練「成為傳統的承載者」。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 檢視自己判斷的依據</h4>
              <p className="text-gray-700 mb-2">
                回想本週一個你做出的道德判斷或立場表態，誠實分析：這個判斷主要是出於理性思考、群體傳統，還是單純的情緒好惡？
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「上帝啊，求祢幫助我不只停留在知道對錯，而是真實地被塑造成有德行的人。求祢使我的信仰群體成為活出祢故事的群體，而非只是說出所信卻不活出所信。求祢幫助我在平常持續操練德行的習慣，使我在危機時刻能夠自然流露出合祢心意的反應。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
