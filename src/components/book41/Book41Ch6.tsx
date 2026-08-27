import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Flame, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book41Ch6() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-800 to-cyan-900 bg-clip-text text-transparent">第一部　1-6</h1>
        <h2 className="text-xl font-semibold text-gray-700">人間羞辱的殺傷力</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <p className="text-gray-700 leading-relaxed mb-3">
              上一章我們瞭解：羞辱可能導致傷害，罪疚則能帶來醫治，個人和家庭的羞恥感會影響好幾世代；而當羞辱的病態影響整體社會、國家時，後果將不堪設想。瓊斯（James W. Jones）寫道：今世兩大族群的羞辱感，導致種族滅絕和恐怖主義，衍生兩個大事件：一是鄂圖曼帝國崩潰、歐洲殖民主義強加給阿拉伯世界，導致聖戰崛起；二是第一次世界大戰結束時的凡爾賽條約，讓納粹主義在德國獨領風騷。<sup>1</sup><span style={cite}>（James W. Jones, "Shame, Humiliation, and Religious Violence," 41.）</span>
            </p>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">羞辱在納粹德國點燃種族滅絕政策</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                關於第一次世界大戰後德國的卑微與羞辱，瓊斯寫道：「凡爾賽條約」將德國掌控的殖民地全部拿掉，對德國施行嚴厲制裁，造成經濟崩盤，並解除其武力，這些都曾是德國人所自豪的，一旦失去，對他們而言是莫大的恥辱。加上弱小的威瑪政府、經濟實質崩潰，為希特勒的崛起鋪路。一位德國退伍軍人的自白足以說明這種心境：「身為一名前線戰士，一九一八年十一月祖國的崩潰，對我而言是完全難以理解的……我只能看到自己的國家陷入最深的屈辱——整個世界都瓦解了。」<sup>2</sup><span style={cite}>（引自David Redles, "Ordering Chaos," 2010.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                懷著這種失落情緒的人，成為納粹運動的中堅分子。由於軍事失利、內部政治疲軟、加上經濟崩潰導致國家受辱，需要為這些痛楚找出口，尋找代罪羔羊來洩憤——希特勒把矛頭指向猶太人和其他「非雅利安人」，趁勢而為，透過軍事手段圖謀恢復日耳曼人的優秀地位。<sup>3</sup><span style={cite}>（Jones, 41.）</span>就這樣，因著德國所受的屈辱，引發了第二次世界大戰和屠猶，這個國家所用的手段，成了文明世界中最野蠻的一個，也讓德國人因傳承這惡名，世世代代感到羞辱。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">羞辱在穆斯林世界點燃恐怖主義</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                上一個世紀，穆斯林世界同樣陷入集體羞辱的窘境：從一二九九到一九二二年，延續六百多年的鄂圖曼帝國被西方列強征服時，歐洲殖民主義蠻橫入侵，羞辱了阿拉伯和穆斯林世界；一九四八年以色列建國，猶太人統治大部分巴勒斯坦地區，加上阿拉伯聯盟對新成立的以色列的軍事行動失敗，都令阿拉伯人抬不起頭；一九六七年以阿戰爭，以色列擊潰埃及的軍事行動，至今依舊令阿拉伯人感到顏面掃地。這樣的集體式羞辱，讓穆斯林世界蒙上一層陰影，直到今日——為了尋求恢復古代哈里發以及穆斯林文明的尊榮和強大，成了激進伊斯蘭暴力團體興起的主要因素。<sup>4</sup><span style={cite}>（Jones, 41；另參Marc Aronson, Unsettled, 2008；Allis and Ronald Radosh, A Safe Haven, 2009。）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者引用賓拉登（Osama bin Laden）二○○二年所寫的文章，說明蓋達組織挾持飛機衝撞紐約世貿中心和五角大廈的心理動因（作者特別提醒：引用賓拉登的話，並非對蓋達組織或任何恐怖組織表達同情，而是要讓讀者清楚理解榮耀和羞辱的力量如何助長暴力）。賓拉登在文中寫道：「伊斯蘭國能夠像西方國家一樣，瓦解、摧毀過去的頑強帝國；伊斯蘭國要反擊、除滅罪惡；我們準備好了，要與你們對抗。你們應當清楚：伊斯蘭國打從靈魂深處，鄙視你們的傲慢和自大。」<sup>5</sup><span style={cite}>（"Full text: bin Laden's 'letter to America'." The Guardian, 2002.）</span>作者提醒讀者留意其中的關鍵詞——「靈魂深處」「鄙視」「傲慢和自大」——榮耀競爭正是二○○一年九一一事件的觸媒。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                但榮耀競爭不僅是「伊斯蘭大家族」與「西方帝國」衝突的關鍵，也是「伊斯蘭大家族」內部流血衝突延續數世紀的主因：敘利亞內戰中，超過十五萬人遇害<sup>6</sup><span style={cite}>（"Death toll in Syria's civil war above 150,000," Reuters, 2014.）</span>——遜尼派叛亂分子與什葉派或阿拉維特為主的政府部隊對峙。作者也提醒讀者，要用明智的態度看待這些歷程：只有少數穆斯林真的相信可蘭經支持使用暴力，極少數人會實際參與暴力活動；伊斯蘭教擁有超過十六億人口，約佔世界人口的26%，教徒間的觀點差異相當大。事實上，早在伊斯蘭教先知穆罕默德誕生之前，榮辱文化早就盛行於阿拉伯地區了，這叫做「榮辱階級意識」，源自該地區古時候的部落主義。<sup>7</sup><span style={cite}>（Pryce-Jones, 34.）</span>
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">家庭中的榮耀暴力</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                自二○○○年以來，西方人對「榮耀暴力」的認知顯著提高。作者引述維基百科上關於備受爭議的電影製作人西奧梵谷（Theo van Gogh，畫家梵谷的曾姪孫）二○○四年十一月二日在阿姆斯特丹遇刺身亡的事件：兇手穆罕默德布耶里連開八槍，重傷的西奧奮力跑到路的另一邊卻不支倒地，據目擊者稱，他哀求著「主憐憫，主憐憫！我們來談談，好嗎？」布耶里卻走向癱軟於地的西奧，近距離連射數槍，割斷他的喉嚨、將其斬首，再用刀刺入胸部、深入脊骨，最後用小刀將一張便條紙戳在他身上。<sup>8</sup><span style={cite}>（"Theo van Gogh," Wikipedia, 2013.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                那張便條紙是兇手布耶里寫給另一位穆斯林出身、後來成為荷蘭政府官員、直言批評伊斯蘭激進教派的艾莉（Ayaan Hirsi Ali）的警告信，內容充滿對她「敵對伊斯蘭教」的控訴，並揚言真主會使她「永遠閉嘴」。<sup>9</sup><span style={cite}>（Militant Islam Monitor, 2013.）</span>艾莉在西奧遇害後一度消聲匿跡，後轉往美國，二○○七年創立AHA基金會，宗旨在保護美國婦女權利，使她們免於受到宗教或文化的壓抑、迫害。<sup>10</sup><span style={cite}>（AHA Foundation.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                AHA基金會對「榮耀暴力」的定義是：女性應順從聽命，以維護家庭或群體的榮耀為前提，恪守本分；加害者為了維護家族榮耀使出暴力手段，受害者則被指控做了可恥的事，或行徑違反文化、宗教規範，諸如拒絕父母安排的婚姻、試圖離婚、生活方式西化、穿著不符合傳統、或結交不當的異性朋友，這些都催生了榮耀暴力，手段包括口頭或情緒虐待、威脅、跟蹤、騷擾、非法監禁、體罰、性虐待和殺戮等，估計每年全世界約有五千起榮耀殺戮事件。<sup>11</sup><span style={cite}>（"Honor Violence," AHA Foundation.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                作者列舉美國本土發生的多起真實案例：亞利桑那州十九歲的艾亞，因與男孩說話被父母毆打，父親甚至以刀抵著她的喉嚨威脅；德州的莎拉和阿密娜姊妹因交男友而遭父親槍殺；亞利桑那州的艾諾兒因拒絕包辦婚姻、被認為過於西化而遭父親殺害；紐約的莫華潔因準備搬家與家人發生爭執，被兄長認為使家人蒙羞而刺傷。<sup>12</sup><span style={cite}>（案例整理自AHA Foundation及相關報導。）</span>作者的團隊也針對「榮耀殺戮」搜索《紐約時報》所有相關文章，彙集成統計圖表，目的在於澄清：這種在西方社會中原本陌生的犯罪現象，如今已隨文化多元趨勢持續蔓延到我們的城市和社區中。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">所有的羞辱都不好嗎？——羞辱量表</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                探討這些源自榮耀暴力的偏激例子，容易讓人以為所有羞辱都是有害的、不好的。但斯梅茲（Lewis Smedes）提醒我們，並非所有羞辱都會造成傷害：「羞辱中帶著某種諷刺：我們的自卑感是我們優越感的明顯標誌；我們的無價值感表明了我們懷著對自我的崇高期待。只有高尚的靈魂才會自覺羞辱……如果我們從來不感到羞辱，我們可能與最真實的自我脫節。」<sup>13</sup><span style={cite}>（Lewis B. Smedes, Shame and Grace, 1993, 38.）</span>弗雷斯特也區分「健康的羞辱」（可轉化的羞辱）與「糟糕的羞辱」（不光榮的羞辱）<sup>14</sup><span style={cite}>（Forrester, 23.）</span>，本書所提及的羞辱，通常是指後一種不健康、有害的恥辱。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                學者拿單汛（Donald Nathansan）透過「羞辱量表」，闡述羞辱的病理效應：每個端點都有一個反應機制或腳本資料庫，提供羞辱發生時當說的話和當做的事，偏偏我們不知道如何誠實面對。<sup>15</sup><span style={cite}>（Dr. Donald Nathansan, The Compass of Shame.）</span>作者歸納，在不同文化中，這四個端點——退縮、迴避、攻擊他人、攻擊自我——展現出不同的偏重：東亞文化重視社會和諧，「害怕失去面子」的心理，容易導向「攻擊自我」（曼谷郵報曾報導泰國北部因害怕失去面子而自殺率居全泰之首）<sup>16</sup><span style={cite}>（Bangkok Post, 2013.）</span>；地中海盆地和中東地區則傾向「攻擊他人」，馬利納形容這類文化「往往矛頭指向別人，缺乏內省」，他分享一位地中海地區友人的真心話：「當我感到羞愧、有自殺的衝動時，我會想動手殺人。」<sup>17</sup><span style={cite}>（Malina, "Anachronism, Ethnocentrism, and Shame," 149-50.）</span>而西方世界則同時面臨家庭社區功能惡化、孤獨感增加、酗酒毒品濫用、存在意義感喪失、物質主義貪婪蔓延、對社會制度信心危機等現象，羞辱量表的四個端點，也有可能節節上升。
              </p>
              <p className="text-gray-700 leading-relaxed">
                作者總結：從本書第一部的內容來看，我們不得不面對一個問題——「針對今日世界的罪惡與病態，耶穌基督的福音是否能在普世中提供強而有力的解決之道？」撰寫本書的目的，就是要斬釘截鐵地回答讀者：「是的！」但若不先理解聖經中各種榮辱感，我們就不能理解基督的福音如何處理羞辱的罪惡病態。我們需要以聖經的宏觀角度處理這些問題——誠然，聖經中有榮耀、羞恥的黑暗面，但我們也當掌握廣泛的、榮耀的光明面。接下來進入第二部，我們將發現：聖經中所陳述的榮辱感，其實隱藏於我們明顯可見的地方。
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
                '二十世紀兩大集體式羞辱事件——凡爾賽條約帶給德國的屈辱、鄂圖曼帝國崩解與西方殖民帶給阿拉伯世界的屈辱——分別點燃了納粹種族滅絕政策與當代伊斯蘭恐怖主義，說明未被處理的集體羞辱，可能演變成毀滅性的暴力。',
                '賓拉登「letter to America」中反覆出現的「靈魂深處」「鄙視」「傲慢和自大」等用語，印證榮耀競爭是九一一事件背後的重要心理動因，但作者也提醒：絕大多數穆斯林並不支持暴力，不可以偏概全。',
                '「榮耀暴力」是發生在家庭內部、為維護家族名譽而對成員（多為女性）施加的暴力，包括威脅、監禁、體罰乃至殺戮，AHA基金會估計全球每年約五千起榮耀殺戮事件，且已在西方社會實際發生。',
                '拿單汛的「羞辱量表」提出退縮、迴避、攻擊他人、攻擊自我四種反應模式，不同文化呈現不同偏重：東亞文化偏向攻擊自我（如泰北因怕丟臉而自殺率高），中東地中海文化偏向攻擊他人，西方社會則四種端點皆可能因社會結構鬆動而上升。',
                '斯梅茲提醒我們，並非所有羞辱都是有害的——「只有高尚的靈魂才會自覺羞辱」，健康的羞辱（可轉化的羞辱）與糟糕的羞辱（不光榮的羞辱）需要區分，本書聚焦處理的是後者。',
                '本章作結時提出全書的核心大哉問：「耶穌基督的福音，是否能為今日世界的羞辱病態提供強而有力的解決之道？」作者的答案斬釘截鐵是「是的」，但前提是教會必須先理解聖經中隱藏卻無所不在的榮辱感——這正是第二部要展開的內容。',
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
              <h4 className="font-semibold text-gray-800 mb-2">作者為何要特別提醒「引用賓拉登不代表同情恐怖主義」？這種謹慎的論述方式，對我們討論敏感的宗教暴力議題有何示範？</h4>
              <p className="text-gray-700 leading-relaxed">
                討論恐怖主義的心理成因，很容易被誤解為替暴力行為找藉口。作者刻意加上但書，區分「理解暴力的文化心理動因」與「認同或合理化暴力」是兩件完全不同的事——前者是為了幫助教會和宣教士更有效地以福音回應仇恨的根源，後者則是危險的縱容。這種嚴謹區分的論述態度，值得我們在討論任何涉及宗教、種族的敏感暴力議題時效法。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「羞辱量表」在不同文化呈現不同端點偏重，這對跨文化宣教士的心理健康評估與陪伴，有什麼實務上的提醒？</h4>
              <p className="text-gray-700 leading-relaxed">
                若宣教士不了解自己服事的文化在羞辱量表上的偏重，可能會誤判當地信徒的情緒反應——例如把東亞文化中因怕丟臉而自我封閉的信徒，誤解為「不夠積極」；或把中東文化中因羞辱而爆發衝突的信徒，簡單貼上「性格暴躁」的標籤。理解文化差異背後的羞辱動力機制，能幫助跨文化工作者更準確地辨識問題根源，給予更貼切的牧養回應。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">本章列舉的美國本土榮耀暴力案例，對華人教會處理類似的「維護家族顏面」壓力（如反對子女婚姻、逼婚等），有何借鏡？</h4>
              <p className="text-gray-700 leading-relaxed">
                雖然華人文化中的「顏面」壓力，程度上遠不及本章列舉的極端暴力案例，但背後的心理機制——為了維護家族名譽而對成員施加控制、甚至傷害——其實是同一種羞辱動力的不同強度表現。教會在牧養面臨父母以「家族顏面」施壓、干涉婚姻或人生選擇的信徒時，可以借鏡本章的分析框架，幫助當事人辨識這是「羞辱動力」在起作用，而非單純的家庭衝突，進而更精準地提供牧養支持。
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
              '讀完納粹德國與穆斯林世界的集體羞辱案例後，你對「未被處理的羞辱可能演變成暴力」這個現象，有什麼新的理解？',
              '「羞辱量表」的四種反應——退縮、迴避、攻擊他人、攻擊自我——你觀察自己面對羞辱時，最常出現哪一種反應模式？',
              '你是否認識或聽過身邊有人，正因「家族顏面」而承受來自家人的壓力甚至傷害？教會可以如何更敏銳地陪伴這樣的處境？',
              '「並非所有羞辱都是有害的，只有高尚的靈魂才會自覺羞辱」——這句話，如何幫助你重新理解「健康的羞辱感」（如做錯事後的愧疚）和「有害的羞辱」之間的分別？',
              '面對世界上因集體羞辱而生的仇恨與暴力（如恐怖主義），身為基督徒，你認為禱告與福音可以在其中扮演什麼角色？',
              '本章結尾提出的大哉問——「耶穌基督的福音是否能為今日世界的罪惡與病態提供解決之道？」——讀完第一部六章後，你自己對這個問題的答案是什麼？',
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
              <h4 className="font-semibold text-green-700 mb-2">🌍 為一個因集體羞辱陷入衝突的地區代禱</h4>
              <p className="text-gray-700 mb-2">
                選一個本章提及、或你在新聞中看見因歷史屈辱而持續衝突的地區（如中東），本週為當地人民、也為福音能突破仇恨的循環，具體代禱。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🧭 檢視自己的「羞辱反應模式」</h4>
              <p className="text-gray-700 mb-2">
                回想最近一次你感到羞辱的經驗，誠實記錄自己當時的反應是退縮、迴避、攻擊他人還是攻擊自己，並思考福音如何能在下一次類似情境中，幫助你走向更健康的回應。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，世上因著未被醫治的集體羞辱，滋生了太多的仇恨與暴力。求祢憐憫這破碎的世界，也求祢光照我自己內心因羞辱而生的防衛與傷害。願祢的福音，不僅赦免世人的罪疚，也醫治世代相傳的羞辱，使仇恨的循環在基督裡被打破。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
