import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Waves, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;
const quote = "border-l-4 border-emerald-300 bg-emerald-50 pl-4 py-3 mb-3";
const quoteText = "text-emerald-800 leading-relaxed italic";

export default function Book39Ch17() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-slate-800 to-blue-900 bg-clip-text text-transparent">第十七章</h1>
        <h2 className="text-xl font-semibold text-gray-700">生命倫理</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          「我今日呼天喚地向你作見證；我將生死禍福陳明在你面前，所以你要揀選生命，使你和你的後裔都得存活。」（申30:19-20）
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
              申命記的核心概念「揀選生命」（choose life），宣稱唯有上帝能把生命的道路帶給以色列人，也帶給我們今日的基督徒。從摩西慎重地呼天喚地作見證，可見這件事的嚴重性——或生或死、或福或禍全擺在以色列人面前，並且對他們呼籲說：「要揀選生命，使你和你的後裔都得存活。」這是選擇一條愛耶和華上帝、聽從祂的話、倚靠（原意：緊緊跟隨）祂的道路，這條道路可使他們經歷到祂是他們的生命。基督教信仰的基本立場是選擇生命——站在生命這一邊而非死亡那一邊。以下討論一些與生命有關的倫理道德議題：
            </p>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">一、從上帝的形像看生命</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                為何必須選擇生命？這涉及「人是什麼」的問題，這問題不只是一個事實問題，也是一個價值問題，亦即當回答這個問題時，也同時提出了價值觀。<sup>1</sup><span style={cite}>（請參照：《系統神學（上）》，188-211。）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記一章26～28節首先指出，人是按照上帝的形像受造，帶有「上帝的形像」（Image of God，<em>Imago Dei</em>），這意味著人分享「像上帝」且在地上「代表上帝」的榮耀，具有尊貴的身分，而且「受託治理全地」，擔任上帝的管家。其次，上帝「造男造女」，這蘊含著上帝造人乃公平地涵蓋性別與群體，人人在上帝面前都是平等的；而且人受造於群體當中，乃是群體中的個體，而群體則是由個體組成的群體。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                人擔任上帝的代表的方式是「要生養眾多，遍滿地面，治理這地，也要管理海裡的魚、空中的鳥，和地上各樣行動的活物」。重點在於，「治理與管理」究竟意味著擔任「管家」或是「君王」，而治理與管理的方式究竟是「共存共榮」或是「征服宰制」呢？由於人的受造是在第六天，當時宇宙萬物已經受造完成，可見人受造在大自然當中而同屬一生態圈，生態保育是受造之人的天職之一，因此「管家」的「共存共榮」比起「君王」的「征服宰制」更加適合人有上帝形像的身分。因此，莫特曼即主張：「人統治上帝所創造的一切，不應使用剝削與摧毀的方式，而應使用創造的方式。」<sup>2</sup><span style={cite}>（莫爾特曼，〈人子的國度〉，《道風基督教文化評論》，2004/21，31。）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                帶有上帝形像的人是貴重的，因此生命也是尊貴的。上帝在大洪水過後與人立約，宣布植物與動物都可作為食物，同時頒布禁令說：「凡流人血的，他的血也必被人所流，因為上帝造人是照自己的形像造的。」<sup>3</sup><span style={cite}>（創世記九章6節。）</span>不可取人生命的理由很明確，由於人因上帝形像而具有尊貴的身分，殺人者是破壞了帶有上帝形像的生命，不只得罪了上帝，而且使自己因犯罪墮落而失去上帝形像。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                既然具有上帝形像的人享有生命權，自然也延伸到享有基本人權、尊嚴與尊重。西方思想文化受到基督教信仰的影響，重視人的尊嚴，最具代表性的如康德的呼籲：「請把無論在你的人格，或他人的人格裡的『人』，絕不只當作工具來使用，而始終同時當作目的。」<sup>4</sup><span style={cite}>（I. Kant, Kant Werke, vol 6 (Darmstadt: Wissenschaftliche Buchgesellschaft, 1983), 61.）</span>康德呼籲尊重人，人本身應當被視為目的，而不僅僅是工具，這是尊重具有上帝形像之人的一般說法。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在主張人具有上帝形像的同時，基督教信仰也極力主張應當維持創造者與受造者的分際——人是人，而上帝是上帝；儘管人有上帝形像，但畢竟人只是形像，而不是上帝本身，亦即人只是受造者，而絕不是創造者。當人逾越了受造者的身分而想要扮演上帝時，就陷入了犯罪墮落的狀況，亦即失去了原有的貴重身分，以致生命的尊貴也被破壞了。若要恢復這悲慘狀態的話，人是無能為力的，唯有來自上帝的大能才能更新一切。
              </p>
              <div className={quote}>
                <p className={quoteText}>
                  誰若認識到自己的悲慘、貧困、一無所有，以及羞辱，誰就最清楚地認識自己。人不可能過於藐視自己，只要人明白他所缺乏的一切必須從上帝那裡重新獲得。然而，人一旦以為他有絲毫可誇的，他便得意忘形，因而竊取上帝的榮耀，至終犯下褻瀆上帝的大罪。<sup>5</sup><span style={cite}>（Institutes, 2.2.10.）</span>
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                人身為「管家」而追求「共存共榮」，不只指向人與大自然彼此相屬共存的關係，同樣也適用在人與人的關係。不過歷史上卻經常可見相反方向的發展，人往往藉由征服宰制宣告自己對萬物的絕對主權，結果使得人不像「人」而像「獸」了，許多超強帝國的豐功偉業其實都是建立在征服宰制與剝削摧毀。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                莫特曼把難解的但以理書第七章視為「人性」與「獸性」的對照，但以理在夢中看見世界歷史的演變，四巨獸的出現代表巴比倫、瑪代、波斯和希臘四個帝國的崛起，它們紛紛以殺人流血建立地上強權，這是人性墮落成為獸性的象徵，然而這四巨獸終必衰亡且遭審判。<sup>6</sup><span style={cite}>（莫爾特曼，〈人子的國度〉，32。）</span>如但以理所說：「我在夜間的異象中觀看，見有一位像人子的，駕著天雲而來，被領到亙古常在者面前，得了權柄、榮耀、國度，使各方、各國、各族的人都事奉他。他的權柄是永遠的，不能廢去；他的國必不敗壞。」（但7:13-14）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在世界的歷史舞台上，一個又一個光鮮亮麗的偉大帝國，在上帝眼裡全成了充滿獸性的可怕巨獸，必得直到人子——「真正的人」出現，才能終結這些盤據各處的怪物。「在人子的人的國度裡，人的人性才得以真正成形，人的上帝形像才能充分實現。最後，上帝藉著這種真正是人的人，宣告祂自己對一切創造的主權。」<sup>7</sup><span style={cite}>（莫爾特曼，〈人子的國度〉，33。）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                新約聖經以耶穌基督為完美的上帝形像，亦即但以理書七章13節那位人子——真正的人。因此，基督是人效法的對象，亦即是恢復上帝形像的榜樣，<sup>8</sup><span style={cite}>（羅馬書八章29節：「因為他預先所知道的人，就預先定下效法他兒子的模樣（形像），使他兒子在許多弟兄中作長子。」）</span>應當期盼扭曲變形的上帝形像被全然更新，有如再度按照上帝形像受造。<sup>9</sup><span style={cite}>（以弗所書四章23~24節：「又要將你們的心志改換一新，並且穿上新人；這新人是照著上帝的形像造的，有真理的仁義和聖潔。」歌羅西書三章10節：「穿上了新人。這新人在知識上漸漸更新，正如造他主的形像。」）</span>總之，基督教信仰重視生命的價值，以具有上帝形像的人為寶貴，但並不把人絕對化，乃正視人的生命處於犯罪墮落中，而上帝形像被毀壞的事實，期盼犯罪墮落的人得以生命更新且恢復上帝形像。主張人有上帝形像，就是帶著宗教情懷去尊重人，尊重人就是尊重上帝，而凡尊重上帝者必定尊重人。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                西方政治思想的重要概念「天賦人權」，不只在理論上論及人權的起源，而且呈現基督教思想對人的基本看法。天賦人權的思想家如洛克，主張人生而自由平等，人的「自然狀態」（Nature State）是一種具有自由平等且懂得使用理性的狀態。<sup>10</sup><span style={cite}>（John Locke, Second Treatise of Government (Indianapolis: Hackett, 1980), 8-9.）</span>這可視為「上帝形像」這信仰概念的通俗化，宣稱具有上帝形像的人天生有上帝賦予的尊嚴與權利，不應被任何權力剝奪，成為推動民主自由的基礎。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">二、從聖經看生命倫理</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「生命倫理學」（Bio-ethics）是二十世紀七〇年代初范倫塞勒・波德（Van Rensselaer Potter）教授在其《生命倫理學：通往未來的橋樑》一書中創造出來的組合字。這字的原始涵義與今日使用的「生命倫理學」並不相同，原本指向運用生命科學來改善生命質量以追求生存，又稱「生存科學」（science of survival），屬於自然科學用語。然而，由於Bio-ethics是由兩個來自希臘文的字<em>bio</em>（生命）和<em>ethics</em>（倫理學）所組成，其中「生命」主要是指人類生命，同時也涉及動植物的生命；「倫理學」則是研究倫理道德的學門。時至今日，「生命倫理學」也指向一切與生命科學、醫學相關的倫理學。當探討基督教倫理學時，同樣涉及生命倫理學所探討的各種議題。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                至於與生命倫理學相關的「生命科學」（Life Sciences）則指向一切與生命有關的科學研究，包括探討動物、植物、微生物等以及相關領域。生命科學原本始於「生物學」（Biology），但後來基於生命的繁複多元，逐漸演變至以更加專精兼具跨科際視野的「生命科學」作為統稱。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                從聖經觀點來看，「生命」到底是什麼呢？首先，今生今世的生命，亦即身體的生命，這是使人們及其後裔得以在地上存活延續的生命。其次，在申命記三十章20節說，「愛耶和華——你的上帝，聽從他的話，專靠他；因為他是你的生命」，這節經文呼籲大家選擇生命，亦即選擇站在上帝這一邊，讓祂成為我們的生命，這是具有更深涵義的生命——緊緊跟隨上帝的生命。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                希伯來人並未把靈性生命與身體生命分開，選擇站在上帝這一邊既是靈性的決定——讓耶和華上帝成為自己的生命，又與身體的生命連結在一起，亦即「你的日子長久也在乎他」以及「這樣，你就可以在耶和華向你列祖亞伯拉罕、以撒、雅各起誓應許所賜的地上居住」。長長久久居住在應許之地，既指向今世身體的生命，又指向永世靈性的生命，這是由於相信跟隨耶和華上帝而得著身體的生命及靈性的生命。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當基督教信仰被世俗化之後，對生命的認識就只剩下身體的生命了。一般人對於尊重今世的生命、愛惜身體的生命，往往有很高的嚮往和敬意，比如史懷哲（Albert Schweitzer, 1875-1965）就是一位親身實踐這種理念的思想家，他主張尊重生命的倫理，且親身前往非洲救助生命，投入這倫理理念的落實，影響感動了許多人，他說：「善是保存和促進生命，惡是阻礙和毀滅生命。……敬畏生命、生命的休戚與共是世界中的大事。」<sup>11</sup><span style={cite}>（阿爾貝特・施偉澤〔Albert Schweitzer〕，《敬畏生命》，陳澤環譯〔上海：上海社科，1992〕，19。）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                然而，申命記進一步強調，人應當追求與上帝緊密連結，不可脫離與上帝的關係，唯有上帝是生命的源頭，親近上帝就是身體的生命和靈性的生命都豐盛，而遠離上帝則是死亡——身體的死亡和靈性的死亡。從永活上帝的角度來看，親近上帝就是「生」，遠離上帝就是「死」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                因此，基督教倫理學務必要心存申命記的提醒——選擇生命、尊重生命，但卻不可把身體、今世的生命絕對化。由於歐盟主張廢死，加上人文主義的潮流，台灣受到很大的衝擊影響，在二〇〇九年批准了一九六六年聯合國大會通過的兩項人權公約：《公民與政治權利國際公約》以及《經濟社會文化權利國際公約》，宣示願意遵守兩公約的內容，而這兩公約主張生命權且傾向廢除死刑。當討論有關廢死的議題時，有些基督徒主張廢死，他們通常直接引用一些要選擇生命的經文，然而這些引用常見有斷章取義之嫌，因為迴避了選擇生命的基礎在於服從上帝的誡命以及順從上帝的心意，不當脫離這生命的基礎而抽離上下文來引用。若是以順從上帝旨意為基礎，應當同時也必須重視神聖禁令：「凡流人血的，他的血也必被人所流，因為上帝造人是照自己的形像造的。」<sup>12</sup><span style={cite}>（創世記九章6節。）</span>
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">三、莫特曼生命倫理</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                莫特曼自一九六四年出版《盼望神學》以來，心中一直念念不忘的就是想要完成「盼望倫理」，<sup>13</sup><span style={cite}>（Jürgen Moltmann, "Vorwort," Ethik der Hoffnung (Gütersloh: Gütersloher Verlagshaus, 2010), 13.）</span>這個夢想終於在二〇一〇年實現。<sup>14</sup><span style={cite}>（英文本於二〇一二年五月正式出版：Jürgen Moltmann, Ethics of Hope (Minneapolis: Fortress, 2012)；中文本：莫爾特曼，《盼望倫理》，王玉靜譯〔香港：道風書社，2015〕。中譯本書名《盼望倫理》並不準確，書名應當是《盼望倫理學》比較恰當。）</span>此書在《盼望神學》出版四十六年之後問世，可以說是《盼望神學》的應用版，其中第二章〈一種生命倫理學〉內容精闢，反映作者與時俱進的科學知識以及深刻的神學洞察力，簡要介紹如下：
              </p>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">1. 理想</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  莫特曼追求一種倫理道德理想，就是兼具保守和進步的特質，他說：「我相信，每一倫理學都必須是防禦的（<em>defensiv</em>）同時又是進取的（<em>progressiv</em>），因為倫理學都應保全生命而又促進生命。」<sup>15</sup><span style={cite}>（Jürgen Moltmann, Ethik der Hoffnung, 103.）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  以生命為核心概念的倫理學，從防禦的角度來看，應當全力防範任何破壞性的力量而追求保全生命；從進取的角度來看，則又要積極開放以面對生命的多樣性，並且提供生命的各種可能發展。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">2. 評量</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  若要追求又保守又進步的生命倫理觀點，莫特曼提出三個評量標準：
                </p>
                <div>
                  <h5 className="font-semibold text-slate-600 mb-2">▲ 人的自由</h5>
                  <div className={quote}>
                    <p className={quoteText}>
                      人的本性是一種自由的本性，在所是（being）與所有（having）之間追求平衡的自由本性。<sup>16</sup><span style={cite}>（Jürgen Moltmann, Ethics of Hope, 72.）</span>
                    </p>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    莫特曼相信上帝給人的本性是自由的，這自由並非任意追求所欲，而是在所是（being，德文<em>sein</em>）與所有（having，德文<em>haben</em>）之間追求平衡，在我們所要擁有與我們本真存在之間平衡發展。我們所是（who we are）包括我們的極限，因此我們追求所有（what we have）絕不可超過我們所是，以免失去平衡。這亦即意味著，人的自由是處於人的可改變和不可改變之間的平衡狀態。
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-slate-600 mb-2">▲ 尊重上帝形像</h5>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    人按照上帝形像受造，一方面這指向上帝與人的關係，另一方面則是人與上帝的關係。<sup>17</sup><span style={cite}>（Jürgen Moltmann, Ethics of Hope, 72.）</span>莫特曼認為倫理道德判斷的首要根據是，尊重乃按照上帝形像受造，因此需要從關係的角度來詮釋人的上帝形像，上帝形像首要出現在上帝與人的關係，從這關係作為基礎出發，上帝形像也顯現在人與人的關係中。因此，尊重上帝形像，就是要在上帝與人的關係、人與人的關係中落實對上帝的尊重。
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-slate-600 mb-2">▲「不要求人做其所不能」<sup>18</sup><span style={cite}>（莫爾特曼，《盼望倫理》，92-93。）</span></h5>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    莫特曼有一種比較合乎人性的主張，這主張同時可作為評量合適與否的原則：不要求人做其能力所不及之事，既然做不到，就意味著沒有能力負責。若在這種情況下，仍然提出不切實際的苛求，往往帶有如誇耀自己或貶抑人的其他用意。若把這主張擴大理解，也應可包括不強求別人做連自己都做不到的事，既然自己做不到的事，就不當過度期待別人來完成，因為我們也不願意被別人期待去完成他們做不到的事，正是合乎黃金律：「你們願意人怎樣待你們，你們也要怎樣待人。」
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">3. 五個議題</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  當落實上述的理想與評量原則時，究竟該如何看待具體議題，莫特曼展開了以下的討論：
                </p>
                <div>
                  <h5 className="font-semibold text-slate-600 mb-2">▲ 優生議題</h5>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    莫特曼認為優生學是錯誤的選項，「必須改善的並不是人類的基因狀況，而是社會狀況」。<sup>19</sup><span style={cite}>（莫爾特曼，《盼望倫理》，100-101。）</span>基因科技的發展已經具有能力做基因的重新組合和改進，於是優生學在理想上有可能藉由基因科技落實在人身上，莫特曼卻發出了警訊，因為德國曾在納粹時代主張優生原則而除掉有瑕疵的生命，包括莫特曼智力不足的哥哥，他在少年時期就被強制性安樂死，<sup>20</sup><span style={cite}>（Jürgen Moltmann, Weiter Raum: Eine Lebensgeschichte (Gütersloh: Gütersloher Verlagshaus, 2006), 20f.）</span>送到醫院後就再也沒有回來了，之後父母也不願再談論此事，因為當時的納粹德國推行強國強種，手段之一就是淘汰低端人口。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    因此，莫特曼對於涉及選擇基因的議題，提出高度質疑；而且他進一步推演到應當廣義地尊重生命，基於尊重創造生命的創造者，必須非常注重受造生命成長的環境，而改善社會狀況並不需要尖端科技就可進行，何況社會狀況對生命的破壞力量經常遠遠大於基因狀況。在一個人生命的形成過程中，基因固然是重要因素，但環境卻是基因能否順利發展的決定性因素。
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-slate-600 mb-2">▲ 墮胎議題</h5>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    莫特曼和巴特都認為墮胎是一種「殺害」，但是為了保護生命，有時卻又是必要的。<sup>21</sup><span style={cite}>（莫爾特曼，《盼望倫理》，102。）</span>這議題確實涉及殺害生命，經常讓人聯想到戰爭議題，然而許多神學家對戰爭的看法不一，有人直率地徹底反戰，如重洗派；有人則容許為了正義緣故的戰爭，如奧古斯丁。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    許多國家的法律規定在某種情況下容許墮胎，比如當胎兒威脅到孕婦的生命，或者孕婦非自願懷孕的情況，儘管這些在法律中有明文規定，但莫特曼仍期盼有超越法律規範的視野——「出於自由而在愛中決定」。<sup>22</sup><span style={cite}>（Jürgen Moltmann, Ethik der Hoffnung, 102.）</span>畢竟愛與自由的原則高過法律規範，比較具體的應用是：「一種基督教的倫理學的出發點是相關人員的現實力量和可能性，並且說：『在疑惑中選擇生命』。」<sup>23</sup><span style={cite}>（莫爾特曼，《盼望倫理》，106。）</span>莫特曼並未全面反對墮胎，但希望儘量不要墮胎，在談論這議題的上下文中，他甚至舉出當孕婦可能危急自己生命時，有可能做出犧牲自己、保存小孩的決定，不過這樣的決定並非出於律法，乃是出於自由而在愛中決定，也是一種在疑惑中選擇生命。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    莫特曼並未站在絕不可墮胎的保守派立場，但也不鼓勵墮胎的自由，如自由派立場所容許，而主張追求出於自由而在愛中決定。
                  </p>
                  <div className={quote}>
                    <p className={quoteText}>
                      可惜基要主義者和現代人經常在一種軍事般嚴苛的道德層面達成一致：凡不被懲罰的，就是被允許的。因此有些人懲罰他們不同意的一切，另也有一些人則允許他們想要的一切。兩者都是錯的：倫理學並非刑法法典，而刑法也無法代替倫理學。<sup>24</sup><span style={cite}>（Jürgen Moltmann, Ethik der Hoffnung, 102.）</span>
                    </p>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    基要派代表一種徹底的保守派，習慣作負面的嚴格思維，認為絕大多數的行為都應當被懲罰，只有少數才不會被懲罰，經常可聽到的慣用語是「你不可」；反觀現代人的思維則是無止境的開放思維，主張絕大多數都是允許的，只有少數才不被允許，隨處可見「我就要」的口號。然而，前者禁戒人們不同意的一切，後者則允許人們想要的一切，兩者的思維都傾向僵化定型，缺乏生命所需要的彈性空間。
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-slate-600 mb-2">▲ 生命科技</h5>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    莫特曼認為在神學上已有一個共識：人有上帝的形像並不能被等同於人的某種生存狀態，而是指向擁有上帝對人的關係，因此從受精卵、胚胎、胎兒到各式各樣的人都不可被視為具有不同的價值，而應該被當作同樣具有尊嚴。<sup>25</sup><span style={cite}>（莫爾特曼，《盼望倫理》，111。）</span>
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    上帝形像意味著人具有上帝對人的關係，而非指向人具有某種生存狀態。錯誤的理解就是把後者等同為前者：比如主張只有健康的人才有上帝形像，而有缺陷的人就不具備上帝形像。莫特曼從上帝對人的關係來看上帝形像，這關係絕不隨著人的生活狀況而有所變化，因此從受精卵一直到成人都有上帝對人的關係，也都具有同樣尊嚴。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    可以想像的是，莫特曼對於一些生命倫理議題的可能立場，比如胚胎基因檢測技術愈來愈先進，如果提前檢驗出有遺傳缺陷的胚胎是否可墮胎？若是在人工受精的情況下，檢驗出有遺傳缺陷的胚胎是否可銷毀？從上帝形像的角度來看，答案都是傾向否定的。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    基因科技的發展非常迅速，目前已可能從一個人的幹細胞培養出他所需要的任何組織，甚至可能用體細胞去複製另一個一樣的生命體作為儲備使用，一旦肝壞死時就去拿肝、肺壞掉時就去取肺等。這些在科幻小說中已經屢見不鮮，問題是生命科技是否應當走那麼遠，是否應當在發展過程中設下某些規範與限制，這已涉及價值判斷的層級，而非關於科學是否應該有禁區的問題。從莫特曼的神學來看，連受精卵都具有上帝形像，顯然應當落實尊重生命，然而這並非出於法律條文規範，而是涉及尊重生命的原則。
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-slate-600 mb-2">▲ 自殺議題</h5>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    有人說自殺也是一種殺害生命，因此用殺害生命的角度來反對自殺，畢竟是殺害了一個人——自己；有人則認為自殺是一種自由，人可以自由選擇死亡。前者把自殺直接當作殺人，這種觀點主張殺害生命絕不可，有如一個不可改變的公理。如果把自殺當作自由選擇死亡，通常就是那些主張尊重人一切選擇的人文主義者。前者可能出現在教條化的基要主義者當中，後者則在世俗社會裡經常可見諸於前衛的知識分子當中，認為人的意願——包括死亡的意願都應當被尊重。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    莫特曼則認為有些情況應當從「緊急防衛」來思考如何抉擇：為了外在「防範」，如保護家人安全（暗殺希特勒失敗者），或者為了內在「防禦」，避免自己陷溺於心理困境（重度憂鬱），以自殺為緊急防衛是可同情的。「但是在大多數情況下，我們必須考慮到『個人最後決斷的隱密』，不帶指責和控告地尊重一個人自殺的決定，如果這已經是一個『決定』而不只是如大多數情況下結束生命所患的重病。」<sup>26</sup><span style={cite}>（莫爾特曼，《盼望倫理》，123。）</span>他舉例說，有一位將軍在暗殺希特勒行動失敗後自殺，這個舉動是為了保護家人，因為自殺後比較不易牽連到他的親人；另外有些憂鬱患者自殺，是為了保護內心不受憂鬱困境的轄制，也是在進行一種防禦。這兩個例子都屬於面對緊急情況下的防衛性自殺，然而究竟怎麼判斷呢？會不會那位將軍其實是因為害怕自己將要面對難熬的痛苦而自殺？而那位憂鬱患者事實上是出於軟弱、拒絕承擔生命而自殺呢？這屬於「個人最後決斷的隱密」，只有上帝才能判斷，我們只能尊重人所看不透的隱密而交託上帝，不要急著指責控告，亦即以尊重的態度面對我們所不知道的真相。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    簡而言之，關於自殺，有人認為是殺害生命，主張「你不可」；有人則認為是自由選擇，基礎在於「我就要」。莫特曼對這議題的立場有如對墮胎議題的看法，既非「你不可」，亦非「我就要」，而是承認「看不透」。
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-slate-600 mb-2">▲ 安樂死議題</h5>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    莫特曼支持消極的安樂死，因為那是在<strong>服務生命</strong>，不過他反對積極的安樂死，因為那則是在<strong>服務死亡</strong>；至於預先立遺囑而囑託接受安樂死，他仍不確定。<sup>27</sup><span style={cite}>（莫爾特曼，《盼望倫理》，123-127。）</span>先前引文的最後這一句，「如果這已經是一個『決定』而不只是如大多數情況下結束生命所患的重病」，這句話只適用於當事者能做決定的狀況，安樂死議題面對的情況不同，許多重病患者已經無法自己做決定了。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    莫特曼大致上贊同消極的安樂死，當一個人來到醫學已經無法治療的地步，只能勉強做些緩和照護，比如使用止痛藥緩解疼痛，或使用呼吸器幫助呼吸，這些非治療性的作為只是勉強使病者維持活下去，在這種情況下放棄醫療（俗稱拔管）是消極的安樂死，其實是尊重大自然有生有死的秩序，就此意義而言是服務生命。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    莫特曼反對積極的安樂死，認為那是醫師介入下的協助自殺，或者是由醫師來執行的自殺。什麼叫作協助自殺？並非由醫師來執行，而是協助病人做最後的選擇，比如設定最後一個按鈕由病人自己按下，如果病人不能按才由醫師處理。莫特曼看待積極的安樂死是一種殺人，因為是藉由當事者以外的引導與協助。至於由病人預立遺囑來囑託安樂死，莫特曼則不確定，因為許多決定是在過程中形成或改變，我們無法知道當事者的最後意願。
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">四、與醫學倫理學對話</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                醫學倫理學是當生命倫理議題涉及臨床醫學處境時，如何藉由價值判斷、事實認定、思考順序做出關於醫療行動的最佳判斷。生命倫理學與醫學倫理學有相當的交集，只是醫學倫理學通常以臨床醫學處境以及接受醫療的病人為中心。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                簡而言之，醫學處理身體的問題，而神學處理靈魂的問題，兩者在相異中有許多相似與共通之處。以下藉由澳大利亞哲學家彼得・辛格（Peter Singer, 1946-）編著的《臨床生命倫理學》（<em>Bioethics at the Bedside</em>），<sup>28</sup><span style={cite}>（辛格〔Peter Singer〕編著，《臨床生命倫理學》〔Bioethics at the Bedside〕，蔡昌甫編譯〔新北：財團法人醫院評鑑暨醫療品質策進會，2004〕。〔加拿大醫學會Canadian Medical Association發行〕）</span>嘗試讓醫學倫理學與基督教倫理學對話交流。此書是來自加拿大醫學會在共識形成過程中一些文章的集結，反映當前醫界對醫學倫理的大致觀點，雖然比較接近法律與一般社會共識，但可作為基督教倫理學的參考，藉此對真實生活處境增加了解，以下摘要一些重要原則而嘗試做應用性對話：
              </p>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">1. 自主原則</h4>
                <div className={quote}>
                  <p className={quoteText}>
                    在西方，「自主原則」意味著每個人都有自我決定的權利；在醫療照護的情境中，那意指病人自己是做醫療決定的最佳人選。然而在中華文化中，個人被視為「活在關係中的自我」（relational self），他們認為道德判斷的基礎在社會關係，而非理性與個人主義。<sup>29</sup><span style={cite}>（辛格編著，《臨床生命倫理學》，202。）</span>……傳統中華文化並不注重「尊重個人自主權利」的觀念。……具有社會及道德意義的是人際間的相互依賴（interdependence），比自主更重要、更具意義。<sup>30</sup><span style={cite}>（辛格編著，《臨床生命倫理學》，205。）</span>
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  這是對西方醫師的提醒，當遇到華人病患時，不能完全按照西方人通常的理解。這篇文章並沒有提出積極性的主張，只是說到東、西文化的主要不同，一般而言，西方文化尊重個體而連帶地重視個人意見，東方文化則注重關係而看重周遭群體的看法。不過，西方的尊重病人自我決定的潮流已愈來愈普及，尤其年輕人不分東西都傾向個體主義，並不注重傳統思維，畢竟在教育過程中往往接觸個人主義文化；反倒東方人若對西方個人主義有些認識，有助於將來進入醫院就醫時所需的溝通。教會裡文化因素的重要性從保羅書信就可以看到，當面對文化多元的處境時，基督徒特別需要對文化的相異處敏感，才能順利地宣揚福音並牧養信徒。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">2. 知之權利</h4>
                <div className={quote}>
                  <p className={quoteText}>
                    患者有權利對自身所受醫療照護方式作決定，也有權利要求獲得做此決定所需的相關資訊。<sup>31</sup><span style={cite}>（辛格編著，《臨床生命倫理學》，1。）</span>
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  院方必須尊重患者決定自身所受醫療照護方式的權利，不過前提是提供患者做決定所需的一切相關資訊。這意味著，不可對患者隱瞞病情真相以及醫療照護方式的資訊；也不可由醫護人員替患者做決定，因為醫師倘若沒有告知所有的真相，特別是關乎患者做決定需要知道的資訊，卻讓患者自己去做無知的決定，這是不負責任的。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  這一點同樣可以用在教會，提醒傳道人必須傳講全備的真理，讓信徒在充分被告知的情況下去做決定。如果一味傳講符合人性需要的「成功神學」，卻不傳講冒犯人性的「十架神學」，以致信徒並未得到充分資訊，自然無法做出恰當的判斷。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">3. 告知之必要</h4>
                <div className={quote}>
                  <p className={quoteText}>
                    在徵求病人同意（consent）的過程中，告知（disclosure）指的是臨床醫師提供病人相關訊息、並使病人充分了解這些資訊，這兩個條件對有效的同意都是必要的。<sup>32</sup><span style={cite}>（辛格編著，《臨床生命倫理學》，11。）</span>
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  不只需要告知病人充分資訊，而且需要確認病人能夠了解資訊。這不只是告知真相即可，而且需要確認病人有充分了解。假若使用過多專業語言告知病人，表面上提供了病人資訊，但事實上病人並沒有真正明白相關訊息，因此必須確認病人充分了解。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  講者充分告知資訊，必須達到聽者充分了解資訊，才能算是有效的傳達。有時傳道人講道時會運用許多屬靈術語或學術語言，以致聽者無法充分完整理解信息，這其實與未充分告知資訊的情況並無兩樣。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">4. 決定能力</h4>
                <div className={quote}>
                  <p className={quoteText}>
                    在取得病患同意的過程中，「決定能力」（capacity）指的是病人理解有關治療決定之相關訊息及作某一決定或不作決定時其合理地預見結果的能力。<sup>33</sup><span style={cite}>（辛格編著，《臨床生命倫理學》，24。）</span>
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  病人需要具備理解相關訊息而合理預見結果的能力，若是沒有這種能力，其同意不能算是真正的同意。社會在發展過程中，這種對待病人的態度愈來愈嚴謹，若把場景換到教會時，難免有些感慨：醫師和病人的關係規範得這麼清楚，請問牧者和會眾的關係有無如此明確的規範？
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  一般而言，受洗前必須在慕道班學習，並且回答教會同工的提問。由於現代人不喜歡背誦，許多人無法記住《使徒信經》、《十誡》，甚至連《主禱文》也記不完整，因而預備受洗者在慕道班漸漸地不敢提問，以避免面對回答不出來的窘境，結果就隨意進行對話，以致不清楚教會是否充分告知預備受洗者所需的資訊，也未確認預備受洗者是否具有預見結果的能力。教會與醫院對照之下，這些現象令人汗顏，教會應當慎重地帶領預備受洗者，使其「具備理解相關訊息而合理預見結果的能力」。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">5. 尊重原則</h4>
                <div className={quote}>
                  <p className={quoteText}>
                    在徵得病患同意的過程中，「自願」（voluntariness）指的是病人得以不受任何不當影響而選擇健康照護的權利。<sup>34</sup><span style={cite}>（辛格編著，《臨床生命倫理學》，33。）</span>
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  由於病人在知識上居弱勢，所以如果醫護人員仗著知識的優勢，很容易就會引導病人做出某些健康照護的選擇，然而醫療照護的決定是要尊重病人本身的意願，不可有意地因勢利導，也不可暗示施壓，使病人不得不選擇某種醫療照護。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  由於傳道人與信徒在資訊上不對等，除了傳道人具有專業知識之外，基於服事角色而知道許多人的隱私，這使得傳道人居於優勢地位，很容易造成權力的濫用，這是傳道人必須謹慎面對的誘惑。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">6. 代理決定</h4>
                <div className={quote}>
                  <p className={quoteText}>
                    「代理決定」（substitute decision-making）是一種「替無法為自己做醫療照護決定者做決定」的方式。<sup>35</sup><span style={cite}>（辛格編著，《臨床生命倫理學》，43。）</span>
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  當遇到另外一種極端的情況，就是病人沒有辦法自己做決定時，必須確認病人情況是否確實如此，若是如此的話，則需要有一個能夠在道德上被接受的代理決定者，經過法律上合法的代理決定過程來做決定。這種情況類似施行幼兒洗禮的教會，由父母代理幼兒做受洗的決定，並且承諾會以信仰教導幼兒，直到他們成年明白信仰且接受成人洗禮。重要的是，受託付的父母是否負責地教導幼兒信仰，直到長大成熟。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">7. 預立醫囑</h4>
                <div className={quote}>
                  <p className={quoteText}>
                    「預立醫囑」（advance care planning）是病患諮詢醫護人員、家庭成員及其餘重要人等之意見，以對自己將來所將接受之醫療照護方式預作決定的過程。<sup>36</sup><span style={cite}>（辛格編著，《臨床生命倫理學》，51。）</span>
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「預立醫囑」的重點在於預先寫定交代、計畫，比如不接受心肺復甦術、不接受插管超過一個月，預先寫定具有法律效力的文件，這樣的過程需要得到充分的諮詢和照會。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  如果「預立醫囑」涉及安樂死，事情恐會更為嚴重，因為結果無可挽回。因此，莫特曼的看法是不確定，好比儘管病患雖已完成預立醫囑，但當進入最後的緊急狀況時，難保病患在那一剎那會不會改變想法？畢竟人在健康狀態與陷入生命危急狀態時，情況不同，想法也可能不同。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  這裡產生的問題不只是法律問題，也是道德問題，而且是神學問題。這個人在生命危急時是否仍按預立醫囑時的抉擇來判斷接受醫治與否，難以確定的原因是，事實上有可能是讓那個比較健康者（預立醫囑時的病人），殺害在病危中無法做決定者（緊急狀況下的病人）。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  醫學在面對生死攸關的關鍵，所有考慮都必須謹慎而細心。相形之下，教會傳講得救的福音，面對永生或永死的關鍵抉擇，有時卻不大容易讓人感受到對生命的嚴肅重視與認真思考。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">8. 告知實情</h4>
                <div className={quote}>
                  <p className={quoteText}>
                    告知實情（truth telling）的目的不僅是為了使病人在健康照護及生命中其他方面能做出知情抉擇，也是為了讓他們了解自己的狀況。<sup>37</sup><span style={cite}>（辛格編著，《臨床生命倫理學》，61。）</span>
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  告知實情，包括必要的相關資訊以及雖不直接相關卻重要的資訊，因為這些知識與做出決定密切相關，不完全的告知往往意味著引導病人做出某種決定，這其實並未尊重病人的主體性。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  告知實情在華人文化中不被重視，尤其若與死亡有關，傳統上通常只會告訴家屬，有時連一般家屬也要求醫師不要讓病人知道真相，擔心會因此引發更多憂慮。當然這在現代社會中已經漸漸傾向不再如此處理了，而且若要告知實情的話，就必須提供必要的相關資訊以及重要資訊，因為若是告知不完整，其結果與刻意隱瞞並無差別。以上這些發展，可提供傳道人探訪病人參考，亦可應用在傳道人與信徒之間面對重大事件時的處置。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">9. 保密與保護</h4>
                <div className={quote}>
                  <p className={quoteText}>
                    醫師有義務對有關病人的訊息保密。……而即使沒有適用的特定法規，警告第三者的義務也經常勝過尊重隱私的義務。醫師應該只透露防止傷害所需的資訊，也應該只告訴為避免傷害有必要知情的人士。醫師應盡可能事先和病患討論其將違反守密義務一事。<sup>38</sup><span style={cite}>（辛格編著，《臨床生命倫理學》，71。）</span>
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  這段引文指出，醫師有義務對有關病人的訊息保密，而後說明只在一種情況下例外，就是病人會傷害到別人，縱使沒有明確的法規指示，保護第三者的義務經常勝過尊重病人隱私的義務。比如，病人是愛滋病帶原者，醫師是否應當絕對守密？如果病人已婚且不想告訴配偶，這種時刻，醫師必須適度介入，不能為了保守病人的祕密而導致傷害他人。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  要求醫師保密這件事，其實與牧者有密切關係。醫師有義務對有關病人的訊息保密，牧者當然也有義務對有關信徒的訊息保密，延伸下去，輔導有義務對有關團契成員的訊息保密，小組長有義務對有關小組成員的訊息保密。令人驚訝的是許多教會沒有明文規範，然而能夠保密的小組長、輔導、牧者卻如此的重要。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  不過醫師只應透露防止傷害所需的資訊，不能透露太多無關的細節，而且儘量縮小範圍，只告訴那些為避免傷害而需要知情的人，一方面要照顧病人的隱私，另一方面要避免造成病人的傷害，在這兩者之間取得平衡點，牧者與羊群的關係也理當如此。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  當保密的要求涉及傷害別人時，自然要以保護可能受到傷害者優先。比如一位傳道人出了問題，教會在了解期間還四處掩蓋消息，結果形同繼續縱容傷害事件。遇到有危險性的可能應當立刻注意防護，防護在了解之先，然而防護卻經常被忽略。牧者還應當留心一種情況，有些狡猾的人明白先向牧者告白是最安全的，因為牧者不會說出去，也不可說出去，如此就有如建立保護網，牧者應當有智慧分辨，不要成為這種人的工具。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「醫師應盡可能事先和病患討論其將違反守密義務一事」，對應而言，牧者也應當有這樣的心理預備。曾經陪人去見臨床心理諮商師，當這人提到他有做過性騷擾的事時，諮商師隨即示警：「你可繼續講下去，但是基於我的職責必須通報性騷擾的事。」這話並不是聽完再講，而是應當在聽的當下就事先提醒，並非要四處宣揚，而是必須進行正常通報，以免傷害繼續擴大。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  然而，反觀一般牧者似乎大多缺乏警戒意識，既未事前告知在某些情況下將違反守密義務，亦未以保護可能受到傷害者優先於守密，通常都一律選擇不說出去，卻讓造成傷害者四處遊走，形同保護其繼續犯罪。試想看看，牧者對於主動來尋找協助的人總是發出惻隱之心，想要特別去保護，但如果面對一隻披著羊皮的狼，還是以同樣的態度面對嗎？
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">10. 自主性</h4>
                <div className={quote}>
                  <p className={quoteText}>
                    雖然傳統上多半由家長和醫師為孩童做出醫療決定，但在進行孩子的醫療決定時，他們日漸發展的自主性也越來越受到重視。<sup>39</sup><span style={cite}>（辛格編著，《臨床生命倫理學》，81。）</span>
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  現代社會發展的趨勢是，愈來愈多人覺得不需嚴格界定成人與孩童的界限。小孩子在能夠理解的範圍內，應當儘量告知他應當要知道的醫療決定，並且鼓勵做出他所能做的決定。這提醒我們不要過度把小孩子當作無知或需要保護，若是應用在教會，許多教會沒有明確規定成人洗禮與幼兒洗禮的年紀界限，比如，十歲小孩若是非常明白自己的信仰，是否就可施行成人洗禮？
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  然而，這個問題其實真正困難之處在於，受洗往往就意味著成為正式的教會成員，亦即有權參加投票決定一些教會的重大事情，除非受洗與成為會員可藉由設定後者年齡門檻而脫鉤。若是教會對受洗年齡、會員年齡無明文規定，大部分情況都是基於刻板印象來決定一個小孩可否受洗，以致很可能因此剝奪了一些小孩接受洗禮的福分。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">11. 安樂死</h4>
                <div className={quote}>
                  <p className={quoteText}>
                    關於安樂死：「尊重有行為能力者『放棄醫療』的決定」、「給予適切的緩和照護」、「同意安樂死或協助自殺之請求」。<sup>40</sup><span style={cite}>（辛格編著，《臨床生命倫理學》，101。）</span>
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  安樂死可分成三種：第一種立場是本人放棄醫療，特別指緊急時放棄侵入性治療（拔管），相當於不再進行醫療。第二種是近年來開始興起的安寧照護，藉由適切的緩和照護，陪同病人走完人生最後一程，通常安排入住安寧病房。第三種則是一般所謂的「安樂死」，協助自殺是交由本人於最後時刻施行，同意安樂死卻可能暗示醫師也參與其中。<sup>41</sup><span style={cite}>（台灣安寧緩和醫學學會〔Taiwan Academy of Hospice Palliative Medicine〕反對第三項，不過有發表一個聲明〈『安樂死及醫師協助自殺立場聲明書』〉。）</span>對教會而言，臨終受洗也可能會遇到類似的問題，當無法明白確認病人的意願，卻又面對死亡的緊迫性，是否決定在病人臨時施洗，實難有定論。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">五、今日的挑戰</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                現今社會醫師正從昔日病人的參謀、朋友、心腹等角色逐漸轉變成供應方：「醫師變為健康服務的供應人，病人成為消費者。所有費用都由第三者支付，而這第三者便是決定何種治療該包括在內和何種不該在內的人。」<sup>42</sup><span style={cite}>（鄂爾〔Robert D. Orr〕等，《認識生命倫理學》，章福卿譯〔台北：校園，1997〕，185。）</span>基於供應方與消費者之間的張力，導致醫師開始做防禦性醫療，避免日後來自病人方面的訴訟，結果就有過度診斷之類的狀況，不只提高醫療費用（第三者的損失），也增加病人的痛苦。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                防禦性醫療即過量地做各種不一定必要的診斷試驗，因為儘管不會為過度診斷而被告，卻可能因未能查出病情而被告。究竟過度診斷的代價是誰來承擔呢？其中不只包括病人的痛苦，而且還有費用的問題，其中有些來自保險給付，此外的就必須由病人自付費用，結果造成大醫院的醫師習慣性地拿著檢驗項目單一直勾下去，如此的發展導致醫師和病人的關係漸漸地趨向對立。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                醫師和病人的關係不斷演變至今，以前病人可信任、託付醫師代做決定，甚至相信醫師會站在病人的立場來做判斷。由於現代醫療費用愈來愈龐大，大部分費用都由第三者支付——保險給付，於是保險給付讓醫師漸漸成為有如醫藥販售者或健康服務供應者，甚至介入醫療判斷——某些治療包括在內、某些治療不包括在內。這對於那些經濟條件不足的病人，形同由保險給付決定了他將面對什麼治療。當醫師面對最佳決定將無法得到保險給付時，最後就是由保險公司通過醫師來做決定。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                醫師和病人之間的張力逐漸上升，一邊是醫師所代表的醫院體系希望能夠更多獲益，另一邊則是病人希望能夠得到更多醫療照護，張力上升到一個地步，也就意味著醫療官司愈來愈多。以前常見到美國有許多賠償金龐大的醫療官司，在美國當醫師最大壓力經常就是被病人控告，在龐大賠償金的誘因之下，有些律師主動找病人協助其打官司，這些現象已經漸漸地在世界各地發生。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這些演變都是我們今天必須面對的問題，如果經常在醫院出入，對於下列現象應當不陌生。筆者曾經咳嗽很久無法治癒，有人介紹我去找一位名醫，光是掛號就掛到一百多號，等了幾小時，看診不到一分鐘就結束，只問了幾句：「咳嗽多久了？」「六個月。」「有沒有痰？」「大部分是乾咳。」「痰裡有沒有血？」「沒有。」名醫不悅地說：「這只是過敏而已。」當時非常困窘，好像我浪費了他的寶貴時間，也沒能提供他有興趣研究的疑難雜症。當醫師愈來愈被明星化，病人就是粉絲，明星和粉絲的距離其實是很遠的！
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">六、婚姻與家庭</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                婚姻議題與家庭議題是連在一起的，兩者互相牽動，是生命倫理的核心。根據聖經的價值觀，倘若論及婚姻與家庭，必定參照創世記二章24節：「因此，人要離開父母，與妻子連合，二人成為一體。」當法利賽人來試探耶穌，問到有關休妻的事，耶穌就重申創世記的教導：「那起初造人的，是造男造女，並且說：『因此，人要離開父母，與妻子連合，二人成為一體。』這經你們沒有念過嗎？既然如此，夫妻不再是兩個人，乃是一體的了。所以，上帝配合的，人不可分開。」（太19:4-6）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                長老教會牧師公認的信仰告白《韋斯敏斯德信條》（<em>The Westminster Confession of Faith</em>）第二十四章〈論結婚與離婚〉：
              </p>
              <div className={quote}>
                <p className={quoteText}>
                  一、婚姻只存在於一個男人和一個女人之間；若同一時期一個男人有一個以上妻子，或一個女人有一個以上的丈夫，都是非法的（創2:24；太19:5-6；箴2:17〔林前7:2；可10:6-9〕）。<br />
                  二、婚姻是為著夫妻間彼此幫助（創2:18），增加人類的合法子孫和教會的聖潔後裔（瑪2:15），並為防止淫亂（林前7:2、9）而設立的。<sup>43</sup><span style={cite}>（尼科斯，湯清編譯，《歷代基督教信條》〔香港：輔僑，1957〕，361。）</span>
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                論及婚姻開宗明義宣稱，「婚姻只存在於一個男人和一個女人之間」，由此引申出一夫多妻、一妻多夫的不當，同時也強調了婚姻唯獨存在於「一男一女」之間，接下去論及三個婚姻的目的：彼此幫助、子孫後裔、防止淫亂，其中第二項關於繁衍子孫，也再次間接強調「一男一女」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                二〇一四年六月十日，台灣基督長老教會發出的牧函說：「我們相信上帝按自己形像造男造女，性別乃是上帝的創造與攝理；在一男一女婚姻內的性關係才是上帝所喜悅及賜福。」<sup>44</sup><span style={cite}>（參見：http://www.pct.org.tw/ab_doc.aspx?DocID=118）</span>
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">七、人、動物、環境</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                世界人權宣言第三條：「人人有權享有生命、自由和人身安全。」基督教信仰則認為人受造且帶有上帝形像，因此人的可貴不只在於自身，更是在於有上帝的形像。生命權的來源就是根據聖經：「凡流人血的，他的血也必被人所流，因為上帝造人是照自己的形像造的。」（創9:6）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                從論及人與人關係的倫理學，可延伸到動物倫理學、環境倫理學，<sup>45</sup><span style={cite}>（彼得・辛格以關注動物倫理學與環境倫理學著稱。）</span>論及人與動物、人與環境的關係。從基督教倫理學的角度來看，創世記不只告訴我們人受造要管理萬物，而且人受造在環境生態中，與萬物、環境都有共生共存的關係。另外，人與動物的關係還有一種特別關係，一般而言，一隻惡犬的背後往往也有一個惡人，一隻好狗的背後往往也有一個好人。這意味著，當人和動物有緊密的關係時，那隻動物的意義已經不再是一般的野生動物，而是帶有主人的特質。比如說，有人家裡養雞當寵物，最後就很難當食用雞來吃。被馴養的動物和一般野生動物很不一樣，一般人說牠們已有靈性而殺不下去。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                根據路易斯的觀察，上帝造人，人帶有上帝的形像；人養動物，動物也帶有人的形象。人的形象使被馴養的動物特別可貴，尊重這種動物的緣由在於人的形象背後之上帝的形像。<sup>46</sup><span style={cite}>（魯益師，《痛苦的奧祕——一場思辨之旅》，宋偉航譯〔新北：校園，2015〕，221-246。）</span>一般維護動物權益、環境權益者，往往把動物、環境視為本身具有權益，基督教倫理學則認為動物與人的關係，是上帝與人關係的延伸。基督教倫理學認為環境的可貴在於上帝的創造，破壞環境不只傷害人所需的生態環境，也破壞上帝的作品而得罪上帝。一般的動物倫理學、環境倫理學僅僅在哲學與自然科學領域思考，當基督教倫理學論及動物與環境時，則整合前者與信仰價值觀。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                總而言之，生命倫理學與環境倫理學無法脫節，而廣義的生命不應當以人為中心，因此勢必與動物倫理學關連在一起，基督教倫理學從上帝領受啟示而應用在人、動物、環境三者，及其相互的關係。
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
                '人按上帝形像受造，使生命具有尊貴的身分與生命權；「管家」的共存共榮優於「君王」的征服宰制，殺人得罪上帝正是因為破壞了帶有上帝形像的生命，人絕不可逾越受造者身分去扮演上帝。',
                '申命記「揀選生命」意味著站在上帝這一邊、緊緊跟隨上帝，生命兼具靈性與身體兩個層次；基督教倫理學務必尊重生命，卻不可把身體、今世的生命絕對化，引用經文支持廢死不可斷章取義而脫離順服上帝誡命的基礎。',
                '莫特曼的生命倫理主張倫理學應「既防禦又進取」，以人的自由（所是與所有之間的平衡）、尊重上帝形像、「不要求人做其所不能」三個標準評量優生、墮胎、生命科技、自殺、安樂死五大議題，一貫立場是拒絕「你不可」與「我就要」兩極化，而承認「在疑惑中選擇生命」與誠實面對「看不透」。',
                '莫特曼支持消極安樂死（放棄無效醫療＝服務生命）而反對積極安樂死（醫師介入致死＝服務死亡），對預立遺囑安樂死則保持不確定，因為人在健康與病危時的意願可能不同。',
                '借鏡辛格《臨床生命倫理學》的自主原則、知情同意、決定能力、保密義務等醫學倫理準則，可類比應用在教會牧養場域——傳道人對信徒的全備告知、保護受傷害者優先於保密義務、對孩童受洗自主性的尊重，都值得教會借鏡醫療體系的嚴謹規範。',
                '婚姻議題根植於創世記「二人成為一體」與《韋斯敏斯德信條》「一男一女」的教導；生命倫理不應以人為中心而忽略動物與環境，人與動物的特殊連結、對受造環境的破壞，最終都關乎對上帝創造主權的尊重與得罪。',
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
              <h4 className="font-semibold text-gray-800 mb-2">莫特曼「不要求人做其所不能」的原則，對今日教會的服事期待有何反思？</h4>
              <p className="text-gray-700 leading-relaxed">
                教會有時會不自覺地用高標準要求同工、信徒「應該」做到某些屬靈操練或服事，卻忽略了個人能力與處境的限制。莫特曼這條原則提醒教會，健康的期待應建立在誠實評估能力所及的範圍，而非用不切實際的苛求來誇耀自己的屬靈成就或貶抑他人。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">醫學倫理的「保密與保護」原則，對教會處理性騷擾或不當行為投訴有何具體啟發？</h4>
              <p className="text-gray-700 leading-relaxed">
                辛格編著書中強調「警告第三者的義務經常勝過尊重隱私的義務」，這對教會處理敏感投訴案件極具參考價值——牧者不應以「保密」為由縱容持續的傷害行為，而應在了解之初就以保護可能受害者為優先，並事先告知當事人在特定情況下保密義務的界限。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">莫特曼「在疑惑中選擇生命」的中道立場，對今日基督徒討論墮胎、安樂死等爭議議題有何幫助？</h4>
              <p className="text-gray-700 leading-relaxed">
                面對墮胎、安樂死等高度爭議的倫理議題，教會內部常出現「你不可」的教條式禁絕或「我就要」的自由派放任兩極立場。莫特曼拒絕把倫理學等同於刑法法典的做法，主張誠實承認人性處境的複雜與「看不透」，同時仍然堅定選擇生命的價值，這種既不簡化又不迴避的態度，值得作為教會牧養實際案例時的參考框架。
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
              '人按上帝形像受造，因此生命尊貴、不可殺害。你如何把這個信念實際應用在對待他人（包括陌生人、敵對者）的態度上？',
              '莫特曼的哥哥在納粹時代因智力不足而被強制安樂死。這段個人經歷如何形塑他對優生議題的堅定反對？你自己是否也有類似「因切身經歷而形成倫理立場」的例子？',
              '莫特曼拒絕「你不可」與「我就要」兩種極端，主張「在疑惑中選擇生命」。你如何看待這種不簡化、承認「看不透」的倫理立場？這與你原本習慣的是非分明思維有何張力？',
              '文中提出「醫師和病人的關係規範得這麼清楚，牧者和會眾的關係有無如此明確的規範？」你觀察自己的信仰群體，在知情同意、保密義務、代理決定等方面，是否也需要更明確的界線？',
              '你如何看待「消極安樂死（服務生命）」與「積極安樂死（服務死亡）」的區分？這個區分對你原本對安樂死的理解有何調整？',
              '文中提到被馴養的動物「已有靈性而殺不下去」，路易斯認為這是因為動物帶有主人的形象。你如何理解人與受造萬物之間，因著上帝形像而產生的特殊連結與責任？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 讀莫特曼《盼望倫理》第二章或辛格《臨床生命倫理學》節選</h4>
              <p className="text-gray-700 mb-2">找時間讀莫特曼討論優生、墮胎、安樂死議題的段落，或辛格編著書中關於知情同意、保密義務的原則，體會神學倫理與臨床倫理如何互相對話。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 檢視教會的「知情同意」與「保密」機制</h4>
              <p className="text-gray-700 mb-2">
                誠實檢視自己所屬的信仰群體，是否對受洗年齡、會員資格、輔導保密義務有明確且合理的規範，並思考若遇到需要優先保護受害者而打破保密的情況，教會是否有清楚的應對流程。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🕊️ 練習「不要求人做其所不能」</h4>
              <p className="text-gray-700 mb-2">
                本週檢視自己對他人（家人、同工、下屬）的期待，是否曾提出對方能力所不及的要求，並嘗試調整成合乎對方實際處境與能力的合理期待。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「上帝啊，求祢幫助我真實看見自己與他人身上都帶有祢的形像，使我在任何處境中都不敢輕看生命。求祢賜給我智慧，在面對墮胎、安樂死等艱難的倫理抉擇時，不落入教條式的論斷，也不隨意向世俗妥協，而是誠實面對人性的複雜，仍然堅定選擇生命。求祢也幫助我在關係中謹守分寸、保護軟弱者，讓祢的形像在我與人相處的每個細節中被尊重。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
