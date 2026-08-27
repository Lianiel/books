import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book41Ch2() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-800 to-cyan-900 bg-clip-text text-transparent">第一部　1-2</h1>
        <h2 className="text-xl font-semibold text-gray-700">聖經，非獨佔之書！</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          「我們很容易忘記聖經描繪異國土地，閱讀聖經是一種跨文化的體驗。」
        </p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">陌生感和差異性</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                一般人對聖經中的風俗、名稱、地理環境感到相當陌生。對西方人而言，聖經充滿了源自古中東文化的陌生價值觀：美索不達米亞、埃及、巴勒斯坦、阿拉伯、敘利亞——聖經中的「亞洲」其實是指地中海附近地區。但這些地區文化的意義和重要性，大部分價值觀是隱藏的，就像一座冰山，百分之九十在水面下，隱含的價值不是顯而易見的，聖經文化的差異性正如同隱藏在水面下的那百分之九十。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                馬利納（Bruce Malina）在其經典作品《新約世界：文化人類學的見解》中寫道：「我們所說和所講的話，實際上都具有意義，但是意義不是來自話語本身；進一步推敲，這些意義源自說話者所置身的社會脈絡中。」<sup>1</sup><span style={cite}>（Bruce Malina, The New Testament World, rev. ed. 1993, 2.）</span>理查茲（Randolph Richards）和歐布萊恩（Brandon O'Brien）在《西方觀點誤讀聖經：除去文化盲點，有助理解聖經》一書中提醒讀者：讀者容易誤解聖經，原因在於聖經中的社會文化價值觀，與現代西方基督徒所熟悉的大相逕庭；「較適當的方式是說明這段經文對當時聖經原始聽眾的意義，然後進一步探討今日我們可以如何運用。」<sup>2</sup><span style={cite}>（Richards and O'Brien, Misreading Scripture with Western Eyes, 2012.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                他們進一步指出，讀經的挑戰往往比我們想像的還複雜：「強勢的文化價值觀，模糊了很多事實原貌，我們很難理解另一種文化中沒有解釋清楚的部分。其實，我們往往連自己的文化中沒有解釋清楚的部分都沒有意識到，這就是我們錯解聖經的原因。當一段經文因為有一部分沒說清楚，像拼圖少了一片，我們本能地用自己文化概念去填補這缺少的部分。」<sup>3</sup><span style={cite}>（同上。黑體字為作者所強調。）</span>
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">羅馬帝國的榮辱價值觀</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                在詮釋新約時，若想認真看待其文化內涵，就須先了解羅馬帝國的社會價值觀。藍頓（J. E. Lendon）在《榮耀帝國：羅馬世界的統治藝術》這本學術著作中，探討羅馬帝國的社會、政治動態，指出百姓生活各層面都交織著榮辱價值觀。耶穌基督出生在羅馬帝國統治時期，新約聖經正是在這樣的政治與社會氛圍裡寫成。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                藍頓評論羅馬帝國中「尊榮感」勝過「服從」的處境：臣民、官員和皇帝各主體間，並非以服從的條件彼此互動，相反地，各主體向自己的統治者呈現「尊榮」，作為個人得榮譽的獎賞，統治者也被視為透過「尊重」臣民以建立關聯；主體和官員之間，透過一個巨大的尊榮網絡聯繫在一起，服從只是該網絡的一個面向；羅馬皇帝正處在這個網絡的中心，不斷接受人民和城邦對他絕對的尊榮，但皇帝也頻繁地以尊榮回報臣民；這種聚焦於尊榮的關注，並非基於任何特殊政治手段所促成，而是早已深入人心的日常社會價值觀。<sup>4</sup><span style={cite}>（J. E. Lendon, Empire of Honour, 1997.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                新約學者尼瑞（Jerome Neyrey）強調，理解古代文化的社會系統，對解釋當時的文獻非常重要：「賦予文字定義的，是社會系統，而不是詞典。字典翻譯了諸如父親、母親和家庭等詞語，但字典無法告訴我們，在希臘羅馬文化中這些字詞的含義……社會科學閱讀概念提醒我們，正確的閱讀方式是：我們需要瞭解古代的文化體系，方能讀出這些字詞的獨特意義。」<sup>5</sup><span style={cite}>（Neyrey and Stewart, eds., The Social World of the New Testament, 2008, xxi.）</span>《英文標準版聖經研讀本》也做了很好的歸納：「合宜的解經途徑，從斟酌每處經文的語境著手，同時探討原始讀者如何理解經文。」問題是，大多數「現代研讀聖經的人並不關注聖經寫成的年代，當時有截然不同的社會體系和世界觀。」<sup>6</sup><span style={cite}>（The ESV Study Bible, 2007, 2564；Klein, Blomberg and Hubbard, 79.）</span>
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">社會科學有助於詮釋聖經嗎？</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                應用榮辱觀點來解釋聖經，屬於「社會科學方法研經」的領域。許多基督徒和研經人士並不熟悉如何運用社會科學作為解經工具，這種謹慎的態度並沒有錯。克蘭（Klein）、布倫伯格（Blomberg）和赫伯德（Hubbard）指出，社會科學研究分為兩大類：一是闡明聖經世界社會歷史的研究，二是將現代人類行為理論應用於聖經文本。<sup>7</sup><span style={cite}>（Klein, Blomberg, Hubbard, Introduction to Biblical Interpretation, 2004, 78-79.）</span>本書的論述主要依據第一類，即忠實詮釋神的話語，目標是以聖經原有的文化背景來理解神的話。作者也認同三位學者對「詮釋應以何種『意義』為目標」的看法：「聖經應該像窗戶，引領讀者走進作者的世界，以及當時氛圍下所寫成的文本……作者把歷史意義寫入這些文本，這才是釋經學的核心目標。」<sup>8</sup><span style={cite}>（Klein, Blomberg and Hubbard, 184, 186。黑體字為原文所強調。）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者也特別說明：社會科學對古代聖經文化的研究雖具深遠影響，但有時神學自由主義確實與涉及聖經研究的社會科學研究相關聯——例如「聖經文本社群」（The Context Group）雖是研究榮辱動力的先驅，卻被部分福音派人士認為過於自由開放。儘管如此，德西瓦、田奈特和吳榮這三位保守派學者，都認為社會科學研究為理解和應用聖經做出了寶貴貢獻；作者提醒讀者，引用某位學者的研究，不代表全盤同意其一切論述，若想從對方身上學到一些東西，需要對一些曖昧不明的部分持有一定的容忍度。<sup>9</sup><span style={cite}>（參見 The Context Group 相關討論。）</span>
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">定義：榮耀和羞辱</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                本書採用的榮耀定義，來自聖母大學新約研究榮譽教授尼瑞；對羞辱的定義，則採用休斯敦大學社工研究所教授、自稱「羞辱研究者」的布朗（Brené Brown）的說法：<sup>10</sup><span style={cite}>（Brené Brown, Daring Greatly, 2012, 59.）</span>
              </p>
              <div className="pl-4 border-l-2 border-teal-200 space-y-2 mb-3">
                <p className="text-gray-700 leading-relaxed">
                  • 榮耀是「人們在他們自己以及鄰里村落或社會一般人的眼中，是有價值的、值得珍惜的」……「尊榮和名望，關鍵在於：要有眾人的認同，具有大眾屬性。」<sup>11</sup><span style={cite}>（Jerome H. Neyrey, Honor and Shame in the Gospel of Matthew, 1998, 15.）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  • 羞辱是「相信我們有缺點，因此不配得到愛和歸屬感，一種很痛苦的感覺或體驗」……「害怕失去關係」。<sup>12</sup><span style={cite}>（Brown, 69.）</span>
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                這兩個定義都顯示：榮耀與羞辱涉及社會的、關係上的或群眾的層面。從一世紀羅馬哲學家塞內卡的觀點，可以清楚看出古羅馬世界的榮耀價值觀具有公共屬性：「對好人的好評；正如名聲好或壞，不是一個人的言論就足以造成……一個人的榮耀乃是透過公眾審視其人品和地位的過程而獲得、需眾所公認……無論在哪裡見面，即便是在澡堂或喝酒的地方，名譽法庭一天開庭好幾次。」<sup>13</sup><span style={cite}>（引自 Lendon.）</span>克魯克（Zeba Crook）進一步區別：「榮耀是眾所公認的價值，是一個人的聲譽；相對地，羞辱是個人聲譽的貶低。因此，對重視榮耀的男性而言，羞辱並不是一種情緒，而是一種貶抑。」<sup>14</sup><span style={cite}>（Zeba A. Crook, Reconceptualizing Conversion, 2004, 45.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在以榮辱為文化關鍵價值的文化中，「自我」概念主要是由家庭和社區形塑而成，這與西方人以個人主義切入看待世界完全不同。馬利納提及：「什麼人幾乎完全以榮耀來看人生？初涉世事者總往往以別人的眼光來看待自己。」<sup>15</sup><span style={cite}>（Malina, 63.）</span>非洲神學家穆布維（Andrew Mbuvi）套用笛卡爾「我思故我在」的名言，改寫為描述榮/辱文化中的人們：「我是，因為我們是；因為我們是如此，所以我就是如此。」<sup>16</sup><span style={cite}>（引自 Jackson Wu, Saving God's Face, 2012, 190.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                個人主義與罪疚息息相關，更甚於羞辱。罪疚是關乎個人良知的自我反思情緒，一個人不需置身社會情境中就會感到罪疚；但羞辱不一樣，福音派學者田奈特（Timothy Tennent）寫道：「羞辱讓人感到蒙羞、失敗、被嘲笑，並且牽扯著複雜情境……羞辱本質上不是個體或私人的，而是全體和公眾的，離開社會這個大情境，便無從體驗。」<sup>17</sup><span style={cite}>（Timothy C. Tennent, Theology in the Context of World Christianity, 2007, 79.）</span>
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">地理和價值觀：西方對比多數世界</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                本書中，「西方」通常指北美、北歐、澳大利亞和紐西蘭的文化，相對的是「東方」或「中東」；有時也將西方世界與「多數世界」或「南半球」（指非洲、亞洲、中東和拉丁美洲）做對比。這些概念出自「五種基本文化量表」<sup>18</sup><span style={cite}>（Cf. Brooks Peterson, Cultural Intelligence, 2004.）</span>，讓我們看見文化之間生動有趣卻不易察覺的差異：所有文化、社會都受到羞愧、內疚以及恐懼感的影響，區別不在於這些情緒是否存在，而在於它們出現的程度以及對行為的影響有多深遠<sup>19</sup><span style={cite}>（Tennent, 80.）</span>；而榮辱作為關鍵所在，在聖經和許多社會中扮演舉足輕重的地位。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                由於榮辱的關鍵價值是中東地區的文化特徵，加上聖經書寫的背景源自中東文化，因此聖經的關鍵文化價值正是：榮與辱，這個等號並不難畫。作者呼籲：如果你來自北美（或北歐、澳洲等地）的基督徒，請思考：就文化角度而言，聖經並不「屬於」你，這不是一本獨佔之書。作者接著提出四點觀察：古代中東地區人們的價值觀，是以群體為導向的榮辱價值觀，而非當代北歐、北美以罪疚為基礎的個人價值觀；古代中東文化不像現在西方世界以平等為主，而是以榮/辱的階級觀念為主，被聖靈啟示的人們正是在這種氛圍下寫成聖經六十六卷書；古代中東地區以榮/辱文化的間接溝通方式為特徵，而非美國、北歐的直接溝通風格，神在這樣文化底蘊中揀選亞伯拉罕，透過他的後裔祝福全世界；羅馬帝國高峰時期的希臘羅馬文化，持守以家族為基礎的榮辱階級價值觀，而非西方的個人主義，耶穌基督正是在這樣的文化氛圍裡出生、成長、工作、生活、宣告祂的天國福音。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                藍頓描述當代文化與羅馬帝國文化中榮耀價值觀的巨大落差：「對我們來說，一個政府既能勢力無遠弗屆，又有系統地以尊榮做訴求，這似乎奇怪、而且匪夷所思……從歷史角度看來，以尊榮與共的觀念來領導是常見的；若我們以此為奇怪，那是我們的西洋鏡片在作祟。」<sup>20</sup><span style={cite}>（Lendon.）</span>由此，作者提出以下結論：從創世記到啟示錄，榮辱感交織在整個聖經脈絡中；榮辱感也貫穿在耶穌許多生平經歷和教導中；新約有許多信息，特別針對某些人和社群，他們的動機是為了獲得或維持榮耀、避免受辱；以聖經所論之榮辱感對人的影響來傳達耶穌基督的福音，是可能的。
              </p>
              <p className="text-gray-700 leading-relaxed">
                作者最後呼籲：教會的牧師、長執同工或跨文化工作者，應該下功夫探索聖經中的榮辱感，察覺與我們自身文化的差異性，如此一來，推展宣教事工會更有成效。榮耀與羞辱，也許你從來沒有想過這類詞彙與聖經有關連，如果是這樣，你並不孤單——事實上，西方的教會對此也存在著盲點，這正是下一章的內容。
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
                '聖經的社會文化價值觀，如同一座百分之九十都藏在水面下的冰山，讀者若不自覺地用自己的文化概念去填補經文沒說清楚的部分，就很容易誤讀聖經——閱讀聖經本質上是一種跨文化的體驗。',
                '羅馬帝國的社會運作核心是「尊榮」而非「服從」：從皇帝到平民，整個社會都透過一個巨大的尊榮網絡彼此聯繫，新約聖經正是在這樣的文化氛圍下寫成的。',
                '本章為全書核心詞彙下了操作型定義：榮耀是「在他人眼中有價值、值得珍惜」，具有公眾、社會性的本質；羞辱是「相信自己有缺點、不配得到愛與歸屬」，本質上不是私人的，而是全體和公眾的。',
                '個人主義文化下的「罪疚」是私密、自發的良心反應，不需要社會情境就能產生；而榮辱文化下的「羞辱」則本質上是關係性、公共性的，脫離群體便無從體驗——這是理解多數世界文化的關鍵分野。',
                '聖經寫成的古代中東文化，在群體導向、階級觀念、間接溝通、家族為本四個面向上，都更貼近「榮/辱」價值觀，而非當代西方以個人主義、平等、直接溝通為特徵的「罪疚/清白」價值觀。',
                '本章的核心論點是：聖經不是西方文化的獨佔之書——它誕生於一個以榮辱為核心價值的古代中東世界，因此，理解榮辱動力是正確詮釋聖經、並向多數世界傳講福音的重要鑰匙。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「罪疚」與「羞辱」的區分，會不會流於過度簡化？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者在原書的附註中其實坦承，把文化簡單劃分為「罪疚文化」或「羞辱文化」的二分法，容易顯得天真——因為每種文化都同時存在羞恥和罪疚的元素，差別只在於何者佔主導地位。閱讀本章時，讀者應避免把「西方＝罪疚」「東方＝羞辱」當成僵化的標籤，而應理解為一種「文化中何種動力較具主導性」的光譜式描述，這樣才不會落入以文化刻板印象取代個別群體真實處境的陷阱。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">社會科學方法研經，會不會削弱聖經的權威性？</h4>
              <p className="text-gray-700 leading-relaxed">
                這是許多福音派信徒讀到本章時，心中很自然浮現的疑慮。作者的回應是區分兩種社會科學研究的用法：一種是用來「闡明聖經世界的社會歷史背景」，幫助我們更準確理解經文原意；另一種則是把現代的人類行為理論強行套用在聖經文本上，可能扭曲經文原意。本書採用的是前者——用社會科學做為理解古代文化脈絡的工具，而不是用來取代或凌駕聖經權威。這個區分，對於教會領袖評估任何「處境化」神學方法時，都是重要的檢驗標準。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「羅馬帝國以尊榮而非服從運作」的觀察，如何幫助我們重新理解新約中的權柄經文？</h4>
              <p className="text-gray-700 leading-relaxed">
                當我們知道羅馬帝國的社會秩序，本質上是靠著一個龐大的「尊榮網絡」維繫，而非單純的強制服從，就更能理解為何新約作者在論及順服掌權者、彼此相待時，經常訴諸於「尊榮」「羞辱」的語言，而非現代人熟悉的「權利」「義務」框架。這提醒我們，讀新約書信中關於權柄、順服的教導時，需要先進入當時讀者所熟悉的榮辱框架，才能掌握經文原本要傳達的張力與重點。
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
              '回想你讀經時，是否曾不自覺地用自己現代、個人主義的文化框架，去填補經文中沒說清楚的文化背景？能舉一個具體的例子嗎？',
              '「榮耀是社會性、公共性的，羞辱同樣如此」——這個定義，和你過去理解的「面子」「丟臉」有何異同？',
              '身為華人，你覺得自己的文化，在「罪疚／清白」與「榮辱」這個光譜上，更靠近哪一端？教會的講道和輔導方式，是否有跟上這個文化現實？',
              '「聖經並不『屬於』西方文化，這不是一本獨佔之書」——這句話對你過去接觸的神學教材、講道方式，帶來什麼樣的反思？',
              '你能否想到一段新約經文，若用「尊榮／羞辱」的角度重新閱讀，會讀出與過去不同的意義？',
              '如果聖經寫成的古代中東文化，比現代西方文化更接近你自己的文化處境，這對你「讀懂聖經」這件事，是一種優勢還是挑戰？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 重讀一段熟悉的經文，換上「榮辱」的眼鏡</h4>
              <p className="text-gray-700 mb-2">
                挑一段你讀過很多次的新約經文（例如浪子回頭、登山寶訓），這次刻意留意其中「榮耀」「羞辱」「臉面」「尊重」相關的詞彙與情境，記下你發現了哪些過去沒注意到的細節。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🗣️ 與一位年長者聊聊「面子」</h4>
              <p className="text-gray-700 mb-2">
                找家中或教會中一位長輩，聊聊他們成長過程中「面子」「丟臉」「光宗耀祖」這些觀念如何影響他們的人生決定，並思考這些經驗如何幫助你理解聖經中的榮辱動力。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，感謝祢的話語超越一切文化，卻又如此貼近每一個文化中的人。求祢除去我讀經時不自覺戴上的文化眼鏡，讓我能更貼近祢話語原本要傳達的心意。也求祢幫助我，在傳講福音時，能看見身邊每一個朋友獨特的文化處境。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
