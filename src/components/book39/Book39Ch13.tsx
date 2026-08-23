import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageSquareReply, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;
const quote = "border-l-4 border-emerald-300 bg-emerald-50 pl-4 py-3 mb-3";
const quoteText = "text-emerald-800 leading-relaxed italic";

export default function Book39Ch13() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-slate-800 to-blue-900 bg-clip-text text-transparent">第十三章</h1>
        <h2 className="text-xl font-semibold text-gray-700">自發性回應責任——責任倫理學</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          「我若甘心做這事，就有賞賜；若不甘心，責任卻已經託付我了。」（林前9:17）
        </p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-slate-50 to-blue-50 hover:from-slate-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <MessageSquareReply className="w-5 h-5 text-slate-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <p className="text-gray-700 leading-relaxed">
              論及責任倫理學的典型，通常會提到韋伯（Max Weber, 1864-1920）和約納斯，至於基督教責任倫理學則最常提到理查．尼布爾（H. Richard Niebuhr, 1894-1962），他主張自發性責任建立在相信上帝的基礎。本章首先討論由基督教信仰出發的理查．尼布爾的責任倫理學，而後論及從哲學、社會學、政治學出發的韋伯和約納斯的責任倫理學，藉由後者與前者的比較呈現前者的特色。另外，潘霍華也可被視為主張責任倫理學的神學家，不過由於其思想獨樹一格，他所說的責任與基督論的關係十分密切，並且重視倫理道德判斷所面對的是變化中的處境，關於他的倫理學將在下一章介紹討論。
            </p>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">一、三種類型的基督教倫理學</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                理查．尼布爾的基督教倫理學，主要出自他去世後於一九六三年出版的《回應的人》，<sup>1</sup><span style={cite}>（H. Richard Niebuhr, The Responsible Self (S. F.: Harper &amp; Row, 1978).）</span>這只是一本摘要，原本他計畫寫成更加完整的著作。從書名可知，他主張「責任倫理學」（the ethics of responsibility），英文responsibility的動詞respond，有「回應」的意思，因此他說的「責任」是一種回應性的責任，也是一種出於自動自發的回應性責任，而非被要求的職責或不得拒絕的義務。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                理查．尼布爾把基督教倫理學分成下列1-3等三種類型：
              </p>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 製造者（Man-the-maker）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  「製造者的形象是追求目的，使事物成形，根據遠程目標用途不斷精鍊、批判，不論那是來自理想主義者、效益主義者，快樂主義者或追求自我實現者。」<sup>2</sup><span style={cite}>（H. Richard Niebuhr, The Responsible Self, 49.）</span>這種類型重視以行動來追求目的——善良（the good）或其他重要價值，令人聯想到主張目的論的亞里斯多德與多瑪斯，<sup>3</sup><span style={cite}>（H. Richard Niebuhr, The Responsible Self, 49.）</span>亦即優先追求生活目的，認為目的重於手段，「好或不好」是這種類型分辨價值的依據。理查．尼布爾的「製造者」涵蓋對象比較廣泛，包括凡設定目的的理想主義、效益主義、快樂主義、追求自我實現者，且竭盡所能去追求實現目的，都屬於製造者類型的倫理學。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">2. 公民（Citizen）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  公民類型最重要的特質在於遵守公正（the right）準則，「若是應用在知性行動上，這種人不只把思想、探究導向一套系統真理的實現，那有助於追求其他目的或本身即產生愉悅，而且根據邏輯法則或科學方法法則實踐其觀察、概念化、比較和關係。」<sup>4</sup><span style={cite}>（H. Richard Niebuhr, The Responsible Self, 53.）</span>公民類型重視法則而追求公正，令人聯想到主張義務論的康德，優先遵照對行動者具有約束力的法則，主張只有對的生活才能算是好的生活，因此重要分辨價值的依據在於對或不對。這種類型特徵在於有一套法則，追求如同公民般務必守法，通常在義務論之外也涵蓋重視律法或具有律法主義傾向的基督徒，都屬於公民類型的倫理學。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">3. 回應者（Man-the-answer）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  這是一種投入對話中的類型，其特徵是根據外在行動做出回應，理查．尼布爾主張的責任倫理學正是屬於這種類型。<sup>5</sup><span style={cite}>（H. Richard Niebuhr, The Responsible Self, 56.）</span>最重要的分辨價值依據在於是否「恰當」（fitting），經常自問：「現在情況如何？」從互相影響的角度來看，唯有最恰當地回應，並期盼未來對此回應的回應，可以指引何者為善良和公正。<sup>6</sup><span style={cite}>（H. Richard Niebuhr, The Responsible Self, 60-61.）</span>簡言之，優先追求回應外來的行動，只有恰當地做出回應的生活，才是好的生活和對的生活。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  當論及「回應」，在「我」這一端，儘管也有多元、眾多的特質，但卻由「我自己」（self）負責回應；在「上帝」那一端，儘管有許多行動臨到我自己身上，但卻只有那「唯一神聖的行動者」（the One）是我回應的對象；因此，這種類型的兩端是不可分離的。<sup>7</sup><span style={cite}>（H. Richard Niebuhr, The Responsible Self, 126.）</span>緊接著理查．尼布爾提出三種主張：
                </p>
                <div className={quote}>
                  <p className={quoteText}>
                    獨一神論的理想主義說：「請記住上帝為你一生安排的計畫。」一元的義務論下達命令說：「在遵守限定的法則中順從上帝的律法。」回應性責任倫理學則確認說：「上帝藉由許多動作而作用在你身上，因此請回應所有加諸於你的動作，如同回應祂的動作。」<sup>8</sup><span style={cite}>（H. Richard Niebuhr, The Responsible Self, 126.）</span>
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  製造者、公民、回應者這三種類型，按照順序對應於獨一神論的觀念主義、一元的義務論、回應性責任倫理學，很明顯地，前兩者都受到「獨一」、「一元」的格局限制，唯有第三者卻具有「回應」上帝作為的寬廣豐富，而且又具有獨特之「上帝與我」的關係。人在犯罪墮落中處於不信任的狀態，以致無法信任在眾多（many）當中的「那一位」（the One），只能表現出不信任的「一致性」（unity），唯有在某些狀況下，我們從「不信任」轉成「信任」，<sup>9</sup><span style={cite}>（H. Richard Niebuhr, The Responsible Self, 126.）</span>那必是恩典臨到時。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  回應者類型的倫理學，即理查．尼布爾所主張的責任倫理學，人作為回應者，回應上帝對我們的行動，而回應的終極對象就是上帝。這種類型亦可涵蓋潘霍華的處境倫理學，尋求在處境中做出最恰當的回應行動。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">4. 以回應為中心的倫理學</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  理查．尼布爾說明回應性責任的定義是：「處於一個具有持久延續性的社群中，人根據『那作用在自己身上之行動』的詮釋來做出回應，並且根據對『自己回應所引發之回應』的期盼來做出回應。」<sup>10</sup><span style={cite}>（H. Richard Niebuhr, The Responsible Self, 65: "...the idea of an agent's action as response to an action upon him in accordance with his interpretation of the latter action and with his expectation of response to his response; and all of this is in a continuing community of agents."）</span>這個定義相當抽象，並未明確指出「那作用在自己身上之行動」的來源為何，固然終極來源是上帝，但也可能來自上帝藉由他者、群體、自然法則、歷史進程等做工。他的用語簡單卻意義深刻，以下把信仰語言套用在回應性責任的定義：我身為信仰者，處於信仰群體中，根據詮釋上帝如何做工在我身上而做出回應，又根據期盼上帝將如何回應我所做的回應而做出回應。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  信仰者處於信仰群體中，詮釋上帝如何做工在自己身上，因而做出回應，又從期盼上帝將如何回應自己的回應，而又做出回應。可見人的回應分成兩層：首先，回應上帝在我們身上做工；其次，回應上帝將如何回應我們對祂的回應。第一層的回應，出自對上帝做工在我們身上的詮釋；第二層的回應，則出自對上帝將如何繼續回應我們的期盼。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  舉例而言，一位基督徒根據詮釋上帝對他的呼召，做出獻身的回應，這是屬於第一層次的回應；他又根據期盼上帝如何引導他獻身而做出另外一個回應，比如他期盼上帝引導他看見神學教育的重要，於是他的回應就是決定去讀神學院，這是屬於第二層次的回應。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  與核心概念「回應」（response）相關的有四要素，其一，做出第一層回應前需要「詮釋」（interpretation）那作用在自己身上的行動，唯有恰當地詮釋上帝在我們身上的作為，才有可能帶出有益的自發性回應，反之，錯誤的詮釋則導致不正確的回應；其二，進到第二層回應前需要「期盼」（anticipation），究竟如何期盼上帝回應我們的回應作為是決定性的，期盼的品質自然影響到回應的品質，不恰當的盼望導致偏差的回應；其三，就整體回應而言，需要「承擔」（accountability），這承擔表現在回應不只是針對過去而且期盼未來，呈現出一種不論順利與否都願意承擔的決心；其四，這一切都繼續發生在一個具有持久延續性的「休戚與共的群體」（social solidarity）中。<sup>11</sup><span style={cite}>（H. Richard Niebuhr, The Responsible Self, 61-65.）</span>理查．尼布爾把倫理抉擇描述成在持續不斷的對話中做出信仰抉擇的聲明與行動，因此「回應」也是不斷進行下去，唯有不停抉擇與行動的人，才是肩負起回應性責任的人。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  理查．尼布爾畢竟在耶魯大學教書，似乎有意避免直接使用信仰語言；他用「承擔」（accountability）來強調負起責任，事實上就是「信實」（faithfulness）——縱使看不見未來仍憑著信心堅持下去，承擔責任的抉擇建立在堅定的期盼未來因而做出回應；至於處於具有持久延續性的「休戚與共的群體」（social solidarity）中，不外乎就是「信仰群體——教會」。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  生活在信仰群體中的人們，不只回應上帝的作為，而且相信上帝是施行承諾、應許守約的上帝，人也應當學習對上帝信實而盼望上帝的承諾應許，並基於這樣的盼望而繼續回應上帝。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  再以基督徒回應上帝的呼召為例：首先，需要「詮釋」上帝在自己身上的作為——上帝的呼召——並據此做出獻身的回應。其次，「期盼」上帝如何引導他的獻身繼續做出讀神學院的回應。第三，每次回應都具有承擔到底的決心，尤其是當面對無法預知的未來時，堅定信靠上帝的承諾應許，儘管遇到逆境仍然不變。第四，一切的回應過程，都是在具有代代傳承、休戚與共的信仰群體中，而非處於孤立狀態的個體。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">5. 如何做出回應？</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  理查．尼布爾主張信仰群體藉由在群體中說故事來回應上帝的啟示與呼召，因他認為初代教會的主要信息既非上帝存在的論證，亦非道德的訓戒，而是有關耶穌基督歷史事件的故事之反覆敘述；信仰對初代教會而言，是指向歷史並且在歷史中形成的故事。<sup>12</sup><span style={cite}>（H. Richard Niebuhr, The Meaning of Revelation (N.Y.: Macmillan, 1960), 32.）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  信仰的啟示來源是出自歷史，這並非旁觀者所見的歷史，而是信仰者參與且生活在其中的歷史。<sup>13</sup><span style={cite}>（H. Richard Niebuhr, The Meaning of Revelation, 53.）</span>信仰意味著擁有歷史，藉由信仰群體生活看見歷史的意義，進而在歷史中參與實踐。<sup>14</sup><span style={cite}>（H. Richard Niebuhr, The Meaning of Revelation, 59-65.）</span>信仰並不是一種抽象的概念，而是以歷史故事形式在不斷傳誦之下形成，並在信仰群體中繼續傳承下去；信仰群體藉由不斷傳誦故事形成內在價值觀，據此參與外在的歷史，並且繼續把親身體驗化成故事而傳承下去。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  然而，座落在俗世中的教會很難抗拒俗世的價值觀，那些價值觀可能會混入教會所傳講的故事裡，而與原先傳講的信仰故事爭鬥不息。有什麼樣的信仰，就會形成什麼樣的價值觀，建造什麼樣的教會，發揮什麼樣的社會影響；有什麼樣的社會影響，就會建造什麼樣的教會，形成什麼樣的價值觀，塑造什麼樣的信仰。可見這兩個互為反向的運動，相互競爭不息。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">6. 小結</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  總結來說，理查．尼布爾強調上帝的行動在先，人的回應在後，這符合聖經的原則，是上帝發問而人回答，上帝呼召而人回應。每一個回應上帝的回應，都會進入一個期盼上帝的再回應，又進入下一個回應上帝的回應，又進入下一個期盼上帝的再回應，如此一直延續下去。簡言之，每一次人的回應都會重新經歷到上帝的回應，因此每一次的回應都會引發一連串的回應，這是一幅非常生動的畫面，呈現創造者上帝與受造者人類之間充滿生命力的關係，有如不斷發生的連鎖反應。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  在理查．尼布爾倫理學中，非常重要的步驟是「詮釋」，亦即「了解」（understanding），連他所說的「期盼」其實也是一種對未來的「詮釋」、「了解」，若了解的步驟發生關鍵性錯誤，必定會導致一連串的錯誤判斷。因此，他特別提到處於信仰群體中的必要性，唯有在群體中傳誦故事可以形成群體共識，而濾除一切偏差與錯誤的了解。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  其實理查．尼布爾是一位早期故事神學的推展者，他認為信仰群體是藉由不斷傳誦故事來形成內在價值觀，並據此參與外在的歷史，而他晚期所建構的倫理神學，正是生動又傳神地描述從形成內在價值觀到參與外在歷史的「回應」的過程。<sup>15</sup><span style={cite}>（H. Richard Niebuhr, The Meaning of Revelation, 59-65.）</span>
                </p>
              </div>

              <div>
                <span className="font-semibold text-slate-700">7. 評論</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  理查．尼布爾的類型分類很有意思，表面看似是在提出基督教倫理學類型，實則隱含著兩個批判：
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  第一，製造者（Man-the-maker）這用語突顯了人的主權，他暗暗批判人追求自己所設定的目標，包括效益主義、快樂主義、追求自我實現等，雖然目標各有不同，卻都出自人的設定，理查．尼布爾卻主張以上帝主權為出發點。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  第二，公民（Citizen）的用語也帶有批判的涵義，暗示一種呆板地奉公守法、以法則規矩為上的心態，其實其背後就是以人為主，因為遵循的還是那些由人的信念而來的準則。不論是法則規矩、行為規範或整套教義，其實真正作主的還是人自己，這全都是出於人的選擇，真正的上帝絕對不可能被這些人為規定限制。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  至於回應者（Man-the-answer）類型的用語，突顯人並非主導者，而是被動的回應者，身為回應者的人應當有兩個層級的回應：
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  第一層級的回應，應當以上帝是發動者作為人回應上帝的基礎，上帝先在人身上做工，人只是做出回應。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  第二層級的回應，應當以上帝將如何回應人的回應作為回應上帝的基礎。相較於第一層級的回應根據已經發生過的事實，這一層級的回應則是根據對未來的盼望，這盼望出於信心而非眼見。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  對理查．尼布爾而言，人只有一種責任——回應上帝，其中包括回應上帝的作為以及回應對上帝的盼望，這使得他在基督教倫理學家中獨具一格。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  由於責任倫理學的焦點很容易轉向關切責任的效應，亦即如何做判斷取決於責任的效應如何，其實成為一種變形的效益倫理學，縱使使用「責任」這個名稱，其實只是作為「效益」的代稱，仍然想要根據如何發揮最大效益而做判斷。理查．尼布爾極力清除這些混雜的成分。
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  簡言之，理查．尼布爾呈現一種尊重上帝的主權、以上帝為優先的倫理學。基督教倫理學如果不是以上帝為優先，而是以人的意見或世上的法則為優先的話，就誤入歧途了。基督教倫理學不應過度注重報紙怎麼說、學者怎麼主張、世界潮流如何等，那些可以是倫理學的題材，但卻並非基督教倫理學的主要關注所在。基督教倫理學首先要追求明白從上帝角度所見之人的位置，理查．尼布爾的基督教倫理學尤其重視純粹的上帝主權。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">二、與韋伯倫理學對話</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                一般論及責任倫理學，經常提到德國社會學家韋伯，由於他對基督教信仰對西方學術的影響認識極深，他的責任倫理學呈現與基督教倫理學的關連。他在一封一九〇九年二月九日寫給社會學家滕尼斯（Ferdinand Toennies）的信中說道：「的確，我在宗教方面徹底地不合拍，並且沒有讓動機或能力在我裡面築造具有宗教特質的心靈雄偉建築，不過卻徹底使我自我省察、明白，我既不反宗教，也不是非宗教的。」<sup>16</sup><span style={cite}>（William H. Swatos, Jr. and Peter Kivisto, "Max Weber as 'Christian Sociologist,'" Journal for the Scientific Study of Religion, 1991/30-4, 347: "It is true that I am absolutely unmusical religiously and have no need or ability to erect any psychic edifices of a religious character within me. But a thorough self-examination has told me that I am neither antireligious nor irreligious."）</span>

              </p>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 責任倫理學</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  「心志倫理」（<em>Gesinnungsethik</em>, Ethics of Conviction）和「責任倫理」（<em>Verantwortungsethik</em>, Ethic of Responsibility）是韋伯所使用的一組重要概念，前者代表理想面，後者則指向務實面。這兩者並非互相排除，若是只有前者而無後者，很有可能好高騖遠卻不切實際，因而腳踏實地的後者也不可缺，才能堅持理想且務實地面對挑戰、處理問題。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  韋伯以〈政治作為一種志業〉與〈學術作為一種志業〉作為他告別學術界之作，傳達出他無論對政治或學術，都懷抱崇高而務實的理念，主張身為行動者不能單單重視行動的意圖動機是否高貴，而必須關注行動者如何承擔其行為的後果——「責任倫理」，作為其終身行事作業的規範。
                </p>
                <div className={quote}>
                  <p className={quoteText}>
                    一切具有倫理意義的行動，都可以歸屬到兩種準則中的某一個之下；而這兩種準則，在根本上互異，同時有著不可調和的衝突。這兩種為人類行動提供倫理意義的準則，分別是心志倫理和責任倫理。這不是說心志倫理就是不負責任，也不是說責任倫理便無視于心志和信念。這自然不在話下。不過，一個人是按照心志倫理的準則行動（在宗教的說法上，就是「基督徒的行為是正當的，後果則委諸上帝」），或者是按照責任倫理的準則行動（當事人對自己行動〔可預見〕的後果負有責任），其間有著深邃的對立。<sup>17</sup><span style={cite}>（韋伯，〈政治作為一種志業〉，《學術與政治：韋伯選集（I）》，錢永祥編譯〔台北：遠流，1991〕，227-228。）</span>
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「心志倫理」以倫理行動本身具有內在價值，不需外在的證明，而是源自內心的確信，如「以前人們稱之為『純粹意志』或者良知」、「基督徒的行為是正當的，後果則委諸上帝」。<sup>18</sup><span style={cite}>（韋伯，《學術與政治：韋伯選集（I）》，n.84, 332。）</span>韋伯面對許多內心純潔，卻對現實生活一無所知的人們，認為他們雖堅信一些內在價值，並且不顧一切地奉行，但卻往往導致災難性後果。這是由於他們不但缺乏反思，而且把災難的發生歸咎於別人，儘管他們存心良善，卻帶來邪惡的後果，稱之為奉行心志倫理者。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  與上述這些人立場相對者，韋伯稱之為「按照責任倫理行動的人」，他們認真考慮：「這些結果，都應該歸因於我的行動。」<sup>19</sup><span style={cite}>（韋伯，〈政治作為一種志業〉，228。）</span>這些人勇於負責，而不會把責任歸給他人，因此他們必須慎重考慮，既不以好的目的就正當化一切手段，亦不以道德上模糊的手段就必不能達到好的目的，奉行責任倫理者往往在這兩難之間認真權衡。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  韋伯並未否定心志倫理的重要，他說：「不錯，政治確實要靠頭腦，但絕對不是僅以頭腦為已足。在這一點上，提倡心志倫理的人絕對正確。」<sup>20</sup><span style={cite}>（韋伯，〈政治作為一種志業〉，236。）</span>因為政治並不只是用盡心機、交鋒鬥智，同時也是實現自己的確信之路，然而問題在於對「責任」一無所知：
                </p>
                <div className={quote}>
                  <p className={quoteText}>
                    當整批的心志政治家突然如雨後春筍般地蹦出來，異口同聲地複誦著：「愚蠢而庸俗的是這個世界，而不是我；對後果應負什麼責任，與我無關；這個責任，是那些受我辛勞服務、並有待我來掃除其愚蠢和庸俗的其他人的事」。……我的印象是，我碰到的十中有九，都是大言炎炎之輩；他們並沒有真正認識到，他們想承擔的事是什麼樣一回事，而只是陶醉在浪漫的感動之中。<sup>21</sup><span style={cite}>（韋伯，〈政治作為一種志業〉，237。）</span>
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  奉行心志倫理者，往往失之天真幼稚，想要一步登天，韋伯對這樣的人不寄予厚望，然而他也不主張陷入政治的權謀鬥爭，他心目中理想的典範是：
                </p>
                <div className={quote}>
                  <p className={quoteText}>
                    真正能讓人無限感動的，是一個成熟的人（無論年紀大小），真誠而全心地對後果感到責任，按照責任倫理行事，然後在某一情況來臨時說：「我再無旁顧；這就是我的立場」。這才是人性的極致表現，能使人為之動容。只要我們的心尚未死，我們中間每一個人，都會在某時某刻，處身在這種情況中。在這意義上，心志倫理和責任倫理不是兩極對立，而是互補相成：這兩種倫理合起來構成了真正的人，一個能夠有「從事政治之使命」的人。<sup>22</sup><span style={cite}>（韋伯，〈政治作為一種志業〉，237。）</span>
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  他期待真正的政治家，經常以自己的呼召為念，因此心中對心志倫理有其確信，但在落實行動時，能夠主動勇於承擔責任，從而走向責任倫理。合乎他心目中的典範者，應當包括說出「這就是我的立場」的路德，路德的心志倫理無庸置疑，但他與其他理想主義者不同之處在於，他不會自我陷溺於空中樓閣，而是勇於承擔責任，這些責任包括可能危及他內心信念的各種外在衝突、誘惑、攻擊等，但他並不選擇停留在修道院裡，而是勇敢地走向塵世，提出宗教改革的呼籲。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">2. 呼召之必要</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  韋伯於一九一八至一九一九年的冬季學期，發表了一場著名的演講，主題論及「學術作為內在呼召」（von dem inneren Berufe zur Wissenschaft），<sup>23</sup><span style={cite}>（Max Weber, Gesammelte Aufsaetze zur Wissenschaftslehre (Tübingen: J. C. B. Mohr, 1988), 588. 韋伯，〈學術作為一種志業〉，《學術與政治：韋伯選集（I）》，錢永祥等譯〔台北：遠流，1991〕，138。另外可參考：韋伯，〈以學術為業〉，《學術與政治》〔北京：新華，1998〕，17-53；韋伯，〈以學術為志業〉，《韋伯論大學》〔南京：江蘇人民新華，2006〕，90-102，全文八段僅僅翻譯前兩段。）</span>把畢生所學的精華在大學講堂傳授給學生。德語<em>Beruf</em>意指「職業」，原有「呼召」的意思，因職業概念是從呼召概念而來，出自宗教用語——上帝對人的呼召，起先單單指向從事聖職的呼召，後來在宗教改革時代發展成，各行各業都是從上帝呼召而來，從此語的起源可知，從事各種職業都是在回應上帝的呼召，韋伯這場演講就是呈現他如何體驗學術成為他的呼召。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  德國猶太裔哲學家卡爾．洛維特（Karl Löwith, 1897-1973）見證這場演講，譽之為「一種救贖」：
                </p>
                <div className={quote}>
                  <p className={quoteText}>
                    他的臉龐與下巴長滿了濃密的大鬍子，令人想起班貝克大教堂的先知雕像深沉而熾熱的神情。這場演說從頭到尾都沒有看稿子，也沒有停頓索詞之處——有人用速記把演說記錄下來，後來出版時，一字一句都照他當日所說，全無修改。這演說帶給我們的印象是極其震撼的，他的話語之中濃縮了畢生的經驗與見識，所有的話都從內心毫無轉折地傾掬而出，都經過他批判的理解徹頭徹尾地斟酌過，都由於他的富於人性的凝重氣質而顯得強勁而有穿透力——而正是這種人性的凝重氣質彰表了他出眾的人格。他提問題之犀利，一如他拒絕訴諸任何方便的解答。他撕裂一切美好憧憬所穿戴著的面紗，但是每一個人一定都感受得到，他清明的心智深處，有著深刻而真誠的人文理想。<sup>24</sup><span style={cite}>（卡爾．洛維特，《一九三三：一個猶太哲學家的德國回憶》〔台北：行人，2007〕，32。）</span>
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  韋伯把學術當作內在的呼召，「因為凡是不能讓人懷著熱情（Leidenschaft）去從事的事，就人作為人來說，都是不值得的事」。<sup>25</sup><span style={cite}>（韋伯，〈學術作為一種志業〉，139。）</span>他使用強烈的語言描述這種熱情，有如「帶起遮眼罩，認定他的靈魂的命運就取決於他能否在這篇草稿的這一段裡做出正確的推測」，「個人體驗」，「圈外人嗤之以鼻的奇特的陶醉感」，「這種『你來之前數千年悠悠歲月已逝，未來數千年在靜默中等待』的壯志」；若是沒有這種熱情，「你將永遠沒有從事學術工作的召喚；那麼你應該去作別的事」。<sup>26</sup><span style={cite}>（韋伯，〈學術作為一種志業〉，139。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  韋伯藉由學術論及責任倫理的動機，關鍵在於「呼召」。由於人是站在被呼召的這一方，因此人是被比自己更高的存在、更大的目標、更深的意義呼召。就基督教信仰而言，呼召者就是上帝。由於人的存在極其渺小，具有基督教文化背景的韋伯並未用信仰語言論及人的處境，但卻呈現濃厚的宗教意識，他知道人單靠己力無法成就大事，他使用一般語言的「呼召」，論及渺小的人若想要脫離各種限制，顯然需要比他本身更偉大的力量才有可能。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">3. 多神競爭</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  既然韋伯還是肯定心志倫理，為何他仍不放心，一直強調責任倫理之必要呢？主要原因是為了追求務實且不存幻想，這反映他對時代的危機感。根據韋伯的觀察，曾經主導西方社會千年之久的基督教倫理價值觀，有如獨尊一神而擊潰眾神的勢力，因著時代改變與社會變遷，必須面對多元價值，有如再次面對多神競爭。<sup>27</sup><span style={cite}>（韋伯，〈學術作為一種志業〉，155。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  韋伯使用「多神」形容價值多元且彼此激烈競爭，「各個領域、各種價值的主宰神互相爭鬥」；他又使用諸神互相爭鬥來形容價值的衝突，因為「主宰這些神祇及其鬥爭的，自然不是『學問』，而是命運」。<sup>28</sup><span style={cite}>（韋伯，〈學術作為一種志業〉，156。）</span>價值的衝突並非理與理的競賽，而是力與力的對決。<sup>29</sup><span style={cite}>（韋伯，〈學術作為一種志業〉，156。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「對生命採取的各種終極而一般性的可能立場，是不可能相容的，因此其間的爭鬥，永遠不可能有結論。」<sup>30</sup><span style={cite}>（韋伯，〈學術作為一種志業〉，162。）</span>這是不可能相容而且不可能有結論的價值觀爭鬥，關鍵在於做決定、下判斷。<sup>31</sup><span style={cite}>（韋伯，〈學術作為一種志業〉，162。）</span>「相對於個人的終極立場，這兩種倫理，一個是魔鬼，另一個是上帝。個人必須自己決定，對他來說，哪一個是上帝，哪一個是魔鬼。」<sup>32</sup><span style={cite}>（韋伯，〈學術作為一種志業〉，157。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  信仰者必須面對許多價值判斷的衝突，也必須面對如何把信仰價值觀化成行動，一旦涉及價值觀的抉擇時，往往是力量的對決，需要有充分的預備。韋伯認為心志倫理陳義過高，根本無法面對現實生活中殘酷又激烈的價值觀戰爭，因此務實的責任倫理學是必要的。
                </p>
              </div>

              <div>
                <span className="font-semibold text-slate-700">4. 小結</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  根據理查．尼布爾回應性責任的定義，毫無疑義地，人是被動者，必先經歷到上帝在自己身上的作為，藉由恰當地詮釋而做出回應，並且在期盼中繼續回應。可見人始終都是「回應者」，既不是「製造者」，也不是遵守刻板教條的「公民」。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  韋伯說的「心志」，有如高懸天邊的理想，若缺乏落實步驟的話就不過是「空談」；而他所說的「責任」，就是把理想落實在人間的努力，但同樣若無心志理想的提醒，也很容易「墜入」現實的漩渦中。基於對所處時代的評估，顯然他看見高談闊論而無能實踐者甚多，並不亞於媚世隨俗而同流合汙者，因此他呼籲務實的責任倫理而不唱理想的高調。這豈不正如基督教信仰裡耶穌所傳講的「天國福音」，一方面有如天籟在俗世中難以聽聞，但另一方面卻又在地如在天而觸手可及。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">三、與約納斯倫理學對話</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                約納斯出生在德國，是一位才華洋溢的猶太裔哲學家，歷經顛沛流離後落腳於美國，當他面對二十世紀處處高舉自由的世界潮流，察覺到缺乏責任意識的自由正在帶來無止境的災難，於是他開始呼籲人們應當對自己的行為負責。
              </p>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 責任倫理學</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  約納斯於一九七九年出版《責任原理》（<em>Das Prinzip Verantwortung</em>），<sup>33</sup><span style={cite}>（Hans Jonas, Das Prinzip Verantwortung: Versuch einer Ethik für die technologische Zivilisation (Frankfurt/M.: Insel-Verlag, 1979)，英譯書名：The Imperative of Responsibility。）</span>書名的副標題是「為科技文明的一種倫理學嘗試」，表明他想要提醒這些處於科技文明中的人們，面對愈來愈多科技全面統治所帶來的災難——包括奧斯威辛事件、生態危機等，勢必不可逃避承擔責任倫理，他的主張導致八〇年代在德國引起廣泛關注生態問題的討論。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  約納斯的責任倫理主張有如義務論，強調為所當為，而不追求效益。他的思想獨特之處，在於主張把自然涵蓋在內，非如傳統的以人為中心的倫理學。他把自然視同人，同樣是世界的一部分，從世界是一個整體的角度來看，自然連同人作為生命就是責任的基礎——傷害了自然就如傷害了人，因此人們有義務要保護自然、保護生命。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  約納斯的責任概念是一種「非相互性的關係」——不可逆的單向關係，有如父母對子女的操心是不求回報的，絕非「養兒防老」之類的關係。父母對子女的責任是一切責任的典範，不只是基於責任的非相互性，而且是由於責任涵蓋著未來性，包括人類的未來以及自然的未來。<sup>34</sup><span style={cite}>（Hans Jonas, Das Prinzip Verantwortung, 177-178.）</span>因此，效益主義若主張保護自然的責任，必定是為了對人有好處的動機，這種責任是交換性、互惠式的責任，以某種好處為條件，骨子裡仍是「以人為中心」的思維。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  約納斯曾經做過海德格的學生，他的責任倫理學建立在人的存在是處於被「拋入」此世的狀態，生存是無法逃脫的現實，承擔責任也是沒得選擇的承擔，因此他主張積極主動承擔並非交換、互惠式的責任，甚至追溯到此責任的信仰基礎。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  約納斯在一九八四年出版的一本小書《奧斯威辛之後的上帝概念》中，<sup>35</sup><span style={cite}>（Hans Jonas, Der Gottesbegriff nach Auschwitz (Frankfurt/M.: Suhrkmp, 1984, 1987).）</span>主張在奧斯威辛事件之後，人們面對不再全能的上帝，這是他責任概念的神學基礎。上帝已不再是全能的上帝，而是參與苦難的上帝，上帝不再全能是一種自我放棄，祂把主動權讓渡給人來承擔，這就是上帝對人的呼召，而回應上帝的呼召則是人的責任，因此肩負責任之人的最深動機在於回應上帝的託付，若非如此，人無法獨自負起責任。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  約納斯在一九八五年出版《技術、醫學與倫理學——責任原理的實踐》，<sup>36</sup><span style={cite}>（約納斯，《技術、醫學與倫理學——責任原理的實踐》，張榮譯〔上海：上海譯文，2008〕。）</span>持續關注如何把倫理學的第一原則——責任原理，落實在科技和醫學高度發展的處境中，他觀察傳統德行觀普遍被人揚棄是一個很大的錯誤，因此重新提及古老德行的重要性，而且應當從個人的實踐轉向公共領域，包括慈善和勇敢應當如何應用在承擔責任，而簡樸所涵蓋的節制和適度更是實踐責任倫理所不可缺的一環。<sup>37</sup><span style={cite}>（約納斯，《技術、醫學與倫理學——責任原理的實踐》，40-48。）</span>他也注意到科技研究總是標榜價值中立，卻完全忽略在研究過程中的冷漠、破壞、傷害已實質關連到道德判斷，科技研究本身就帶有價值與責任，研究者應當誠實地自我檢視。<sup>38</sup><span style={cite}>（約納斯，《技術、醫學與倫理學——責任原理的實踐》，53-65。）</span>
                </p>
              </div>

              <div>
                <span className="font-semibold text-slate-700">2. 評論</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  約納斯在二十世紀倫理學的潮流中獨樹一格，面對舉世追求解放自由、進步發展的潮流，他卻大談以責任為核心的倫理學，這與他身為猶太人歷經大屠殺的衝擊，而且承襲長遠的猶太宗教文化傳統有關，他的責任倫理學有不少與基督教倫理學呼應之處。其中包括責任概念是一種「非相互性的關係」，這思想源自耶和華上帝與百姓的立約，而約就是單方面、無條件的承諾應許，沒有任何互惠性的利益動機。參與苦難的上帝把主動權讓渡給人承擔，祂呼召人們擔負起責任，如此的呼召概念把責任的託付歸給神聖上帝，這是對生態危機下的現代人極其重要的提醒。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  莫特曼批判約納斯藉由《責任原理》呈現出一種恐懼的倫理，帶動對科技發達所導致不可預期之後果的恐懼，以致「對可能不再存在之事的恐懼代替了對將來能夠成就之事的盼望」。<sup>39</sup><span style={cite}>（莫爾特曼，《盼望倫理》，王玉靜譯〔香港：道風書社，2015〕，11。）</span>約納斯想要藉由恐懼喚醒責任的倫理，這反映出恐懼是盼望的對立面，因此莫特曼認為應當以盼望為優先，主張「盼望在恐懼之前：沒有盼望就沒有恐懼，沒有對福祉的預言就沒有對厄運的預言」。<sup>40</sup><span style={cite}>（莫爾特曼，《盼望倫理》，12。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  莫特曼應用猶太教神祕哲學（Cabbalism）原意為「收縮」的<em>Zimzum</em>來描述上帝的創造，主張創造是上帝的「自我限制」（self-limitation），神聖者原無任何外力能夠限制祂自己，唯有神聖者自己能夠限制自己——「神聖自限」。<sup>41</sup><span style={cite}>（莫特曼，《創造中的上帝》，隗仁蓮等譯〔香港：漢語基督教文化研究所，1999〕，124-126。）</span>因此，他指出約納斯是第一位藉由「神聖自限」概念來結合創造的信仰與進化論。<sup>42</sup><span style={cite}>（莫特曼，《俗世中的上帝》，曾念粵譯〔台北：雅歌，1999〕，216。）</span>莫特曼繼續申論上帝的自我設限，上帝創造世界就是尊重這世界的空間、時間和運動，必須騰讓出世界所需的空間、時間和運動的可能，然而唯有上帝才能限制祂自己的無所不在、無所不能，正是因著上帝自我設限的愛，使得世界的受造成為可能。<sup>43</sup><span style={cite}>（Jürgen Moltmann, The Living God and the Fullness of Life (Geneva: WCC, 2016), 45.）</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">四、結論</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                責任倫理學類型涵蓋廣泛，這是對於「責任」的詮釋各有不同所致。理查．尼布爾的責任倫理學主張人的責任是回應，而且人只是回應者，回應的對象是上帝——過去上帝在我身上做工以及未來上帝將如何回應我對祂的回應，這種主張充分高舉上帝的主權，人只是回應上帝主權的一方。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                韋伯的責任倫理學並不是基督教倫理學，然而他對「心志」與「責任」的看法，對於基督教倫理學有重要的啟發。他主張「心志」若未能落實不過是空談而已，而「責任」則是把理想落實在人間的努力，然而一方面不可放棄心志的理想，另一方面亦不可讓責任被現實同化。對基督徒而言，上帝國既有已經開始實現的一面，亦有尚未完全實現的另一面，前者在現實中已可藉由「責任」來回應而落實，後者則有如「心志」需要在盼望中積極期盼與實現。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                約納斯的責任倫理學也不是基督教倫理學，卻與基督教倫理學有交集，因他詮釋「責任」回溯到舊約聖經中上帝與人立約之單方面、無條件的承諾應許，強調責任概念是建立在「非相互性的關係」，而非交換、互惠式關係。他不贊同以效益為倫理學的優先考量，亦即把交換與互惠的關係帶入倫理道德思維之中，因為他認為這是現代社會許多災難的來源，必須重建單方面、無條件的責任，這些論述都與基督教倫理學的方向一致。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                回顧三種基督教倫理學類型，現代人處於一個過度捍衛自身權利而產生許多弊病的世代，主張德行倫理學的麥金太爾見到同樣的弊病，因此呼籲要回歸被忽略已久的「德行」，他與侯活士都重視在群體生活中藉由說故事來活出德行；主張務實倫理學的大尼布爾強調以「公正」來處理現實的權利問題，尤其是團體性的議題不應輕易就跳到「愛」這種簡單的答案；主張責任倫理學的理查．尼布爾突顯人擔任回應者的角色，避開爭奪權利的誘惑，把焦點集中在回應上帝的作為以及回應對上帝的盼望；至於韋伯追求「心志」與「責任」的平衡，亦為一種勇於面對權利問題的務實倫理；約納斯則呼籲不以追求自身權利為出發點的責任倫理。
              </p>
              <p className="text-gray-700 leading-relaxed">
                以上三種基督教倫理學類型從不同方面精采地發揮創意、針砭時弊，呈現基督教倫理學豐富的內涵以及回應時代挑戰的能力。然而隨著現代倫理道德議題的複雜化，三種類型畢竟無法涵蓋愈來愈多元的基督教倫理學思潮，而且也愈來愈多難以描述不同類型之間的組合發展，這已成為現代基督教倫理學的特徵。
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
                '理查．尼布爾把倫理學分成「製造者」（追求自訂目的）、「公民」（遵守法則規範）、「回應者」（回應上帝作為）三種類型，主張唯有「回應者」類型才真正把上帝置於主權地位，其餘兩者骨子裡仍以人的設定為主導。',
                '「回應」包含兩層：回應上帝已在我身上做的工（根據詮釋），以及回應上帝將如何回應我的回應（根據期盼），兩者都發生在具有持久延續性、休戚與共的信仰群體——教會——之中。',
                '韋伯區分「心志倫理」（重動機、後果委諸上帝）與「責任倫理」（重承擔行動的可預見後果），主張兩者「合起來構成了真正的人」，路德正是心志倫理與責任倫理兼備的典範。',
                '韋伯用「多神競爭」描述現代社會的價值多元與激烈衝突，「相對於個人的終極立場，這兩種倫理，一個是魔鬼，另一個是上帝，個人必須自己決定」，點出價值判斷經常是力量而非單純道理的對決。',
                '約納斯主張責任是一種「非相互性的關係」——如父母對子女的操心不求回報，並且擴及對自然、對未來世代的責任；他在《奧斯威辛之後的上帝概念》中提出「上帝不再全能」、把主動權讓渡給人承擔的神學基礎。',
                '莫特曼批判約納斯的責任倫理學建立在「恐懼」之上，主張「盼望應優先於恐懼」，並以「神聖自限」（Zimzum）詮釋上帝創造世界是自我限制以騰讓空間，為約納斯的責任概念提供更積極的神學根基。',
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
              <h4 className="font-semibold text-gray-800 mb-2">韋伯批判「心志政治家」的話，對今日網路上的道德表態文化有何診斷意義？</h4>
              <p className="text-gray-700 leading-relaxed">
                韋伯尖銳地形容那些只顧宣稱「愚蠢而庸俗的是這個世界，而不是我」的人「大言炎炎」「陶醉在浪漫的感動之中」，卻從未真正承擔後果。這段一百年前的觀察，精準預示了今日社群媒體上常見的道德表態現象——許多人熱衷於公開站隊、譴責他人，卻鮮少為自己主張的政策或立場承擔任何可預見的實際後果。這提醒基督徒在公共議題上發言前，先誠實自問：我是否願意像韋伯所說的責任倫理者一樣，為這個立場的具體後果負責？
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">理查．尼布爾「信仰是不斷傳誦故事而形成」的主張，對教會的下一代信仰傳承有何啟發？</h4>
              <p className="text-gray-700 leading-relaxed">
                理查．尼布爾認為初代教會的核心不是抽象教義論證，而是耶穌基督歷史事件的故事被反覆傳誦，藉此形成信仰群體的內在價值觀。這對今日教會的主日學、青年牧養有重要提醒——與其急於灌輸系統化的教義條目，不如優先確保下一代真實地「聽見」並「參與」信仰的故事（包括教會自身的歷史、見證者的生命故事），因為價值觀正是透過故事的傳誦與參與而非單純的知識傳遞而形成的。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">約納斯「非相互性責任」的概念，對基督徒的環境倫理與代際正義有何應用？</h4>
              <p className="text-gray-700 leading-relaxed">
                約納斯主張責任的典範是父母對子女不求回報的操心，並將此邏輯延伸到對自然環境與未來世代的責任——這種責任不是因為「保護環境對我有好處」的交換邏輯，而是單方面、無條件的承擔。這對今日教會參與環境保護、氣候變遷等議題提供了一個扎實的倫理基礎：基督徒關心受造界，不必也不應該只因為「對人類有實際好處」才行動，而是效法上帝立約的無條件之愛，對下一代與整個受造界承擔起不求回報的責任。
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
              '回想你最近一次重大的人生抉擇，你比較像「製造者」（追求自訂目標）、「公民」（遵守既有規範），還是「回應者」（回應上帝的作為與呼召）？',
              '理查．尼布爾主張回應分兩層——回應上帝已做的工、回應上帝將如何回應。你的信仰生活中，是否也常忽略了第二層「懷著期盼繼續回應」的部分，而只停留在第一層？',
              '韋伯說「心志倫理和責任倫理不是兩極對立，而是互補相成」。回想你自己，是比較容易陷入「陳義過高卻不落實」，還是「務實過頭卻失去理想」的一端？',
              '你是否也曾像韋伯所批判的「心志政治家」一樣，公開表態某個立場，卻從未認真考慮這個立場若真的實現會帶來什麼後果？',
              '約納斯主張對下一代、對自然的責任是「非相互性」、不求回報的。你如何看待自己在環境保護、資源使用上的態度，是否也存在「對我有好處才做」的交換心態？',
              '莫特曼主張「盼望應優先於恐懼」。你觀察自己面對生態危機、科技風險等議題時，驅動你行動的主要是恐懼還是盼望？這帶來什麼樣不同的生命品質？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 練習「兩層回應」的禱告操練</h4>
              <p className="text-gray-700 mb-2">本週每天禱告時，先具體回顧上帝當天在你身上做的一件工（第一層回應），再具體寫下你對上帝接下來會如何引導的期盼（第二層回應）。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🗣️ 檢視自己表態的「責任倫理」含量</h4>
              <p className="text-gray-700 mb-2">
                回想本週你在社群媒體或群體討論中表達過的一個立場，誠實評估：如果這個立場真的被採納實行，我是否願意承擔隨之而來的具體後果？
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🌍 操練一項「非相互性」的責任行動</h4>
              <p className="text-gray-700 mb-2">
                本週選擇一項對環境或對未來世代有益、但對你自己沒有直接好處的具體行動（如減少浪費、支持環保措施），操練約納斯所說不求回報的責任。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「上帝啊，求祢幫助我成為忠心的回應者，而非自行設定目標的製造者，也非徒守教條的公民。求祢賜給我恰當詮釋祢作為的智慧，也賜給我懷抱盼望繼續回應的信心。求祢幫助我在心志與責任之間找到平衡，既不空談理想，也不向現實妥協。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
