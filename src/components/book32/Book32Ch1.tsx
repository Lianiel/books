import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star } from 'lucide-react';
import PageTag from './PageTag';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book32Ch1() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <PageTag page={15} />
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-700 to-amber-700 bg-clip-text text-transparent">第一章</h1>
        <h2 className="text-xl font-semibold text-gray-700">神與創造</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          「起初，上帝創造天地。地是空虛混沌，淵面黑暗；上帝的靈運行在水面上。上帝說：『要有光』，就有了光。……」創世記一1-5<br />
          「上帝說：『我們要照著我們的形像、按著我們的樣式造人……』上帝就照著自己的形像造人，乃是照著他的形像造男造女。」創世記一26-27<br />
          「耶和華上帝用地上的塵土造人……」創世記二7
        </p>
      </div>

      {/* 正文 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-red-50 hover:from-amber-100 hover:to-red-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">正文</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <PageTag page={16} />
            <p className="text-gray-700 leading-relaxed">
              基督徒通常知道聖經中的上帝有幾個不同的名字，但一般華人比較不留意其實中國字裡面也有不同的字是用來代表上帝的，且其內涵與聖經有相關之處。認識神從神的名字開始，了解華人祖先所認識的上帝，也可以從認識這些名字開始。而人類學的研究，也佐證華人祖先對神的名字的認知，很可能都是從挪亞而來，或是從神自己而來。神的創造是聖經最開頭的主題，中國古籍在這分面也有豐富的見證，值得我們深入了解。因此本章首先探討「神的名字」與「神的創造」。
            </p>

            <div>
              <h3 className="font-bold text-amber-800 text-lg mb-3">第一節　神的名字</h3>

              <div className="mb-4">
                <span className="font-semibold text-amber-700">壹、中國字</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  聖經中的神或上帝在原文中有「Elhim」、「YHWH」、「El Shaddai」等不同的名稱，也各有其強調點。創世記第一章使用「Elhim」這個名字，強調祂是創造者，是普世人類的源頭。創世記第二章使用「YHWH Elhim」這個名字，強調祂與人之間有位格性（理智、情感、意志）的交往，以及人身為受託管家有當盡的本分。創世記第十七章開始使用「El Shaddai」這個
                </p>

                <PageTag page={17} />
                <p className="text-gray-700 leading-relaxed mb-3">
                  名字，強調神的權能與治理。跟神的名字有關的中國字則包括「示」、「神」、「天」、「元」、「帝」等，各有其重要意義，並與聖經中神的名字或屬性有所對應。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  明代王鏊在所著《震澤長語》中說到：「梵人別音，在音不在字；華人別字，在字不在音：故梵有無窮之音，華有無窮之字。梵則音有妙義，而字無文采；華則字有變通，而音無鎡銖。梵人長於音，所得從聞入；華人從見入，故以識字為賢知。」<sup>1</sup><span style={cite}>（王鏊，《震澤長語》卷下〈音韻〉。嚴一萍選輯，《百部叢書集成》138冊，台北：藝文印書館）</span>黃帝的史官倉頡，按照象形、指事、會意的方式造字，後人再用形聲、轉注、假借的辦法來擴增。指事與會意之別，前者單一字元，後者二字元以上組成。<sup>2</sup><span style={cite}>（（漢）許慎，《說文解字》，頁314）</span>中國字是世上僅存活用的圖形文字，能以文字本身的形狀表達清楚完整的意思。這特性能減少歷史長廊對文字的改變，而保有造字時最初的意思。上帝是挪亞的上帝，挪亞又與華人祖先相隔不久，因此中國文字保留呈現早期人類與信仰相關的史實，乃是很自然的事。以下分別介紹與上帝名字有關的字。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「示」的本意是「光照、啟示」，引申代表啟示者上帝。根據《辭海》查知：「示，神祇也。」<sup>3</sup><span style={cite}>（熊純生，《辭海》最新增訂本，台灣中華書局，1981，頁3232）</span>在造字的意義上，「示」字的上半最早原只有一橫，表示「天」；後來有「二」橫，為古代
                </p>

                <PageTag page={18} />
                <p className="text-gray-700 leading-relaxed mb-3">
                  的「上」字，表示「天上」。三直劃，表天上的光照射下來。《說文解字》（簡稱《說文》）這樣解釋：「示，天垂象，見吉凶，所以示人也，從二。三垂，日月星也。觀乎天文，以察時變。示，神事也。」<sup>4</sup><span style={cite}>（王貴元，《說文解字校箋》，頁2）</span>所以這個字是以神的彰顯來表達神自己。「示」部的字，都有與上帝相關的意義。例如，禮：所以事神致福也。禛：以真受福也。祿：福也。禎：祥也。祐：助也。祺：吉也。禔：安福也。<sup>5</sup><span style={cite}>（王貴元，《說文解字校箋》，頁2-3；雷漢卿，《〈說文〉「示部」字與神靈祭祀考》，頁6）</span>這些都是吉福之事，其根源來自上帝。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「神」由「示」與「申」所組成。《說文解字》：「神，天神，引出萬物者也。」<sup>6</sup><span style={cite}>（王貴元，《說文解字校箋》，頁3）</span>《易經‧說卦》：「神也者，妙萬物而為言者也。」徐灝箋：「天地生萬物，物有主之者曰神。」《說苑‧修文》：「神者，天地之本，而為萬物之始也，故曰天神引出萬物。」<sup>7</sup><span style={cite}>（熊純生，《辭海》最新增訂本，頁3244）</span>由以上註解，可以看出中文的「神」就是創造者或造物主，與聖經的「Elhim」相似。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「天」是象形及會意字，由「二」與「人」組成，原意是指天上獨一的那一位，既使用「人」這個字，就是強調他的位格：理智、情感、意志。《說文》：「天，至高無上。」<sup>8</sup><span style={cite}>（王貴元，《說文解字校箋》，頁1；朱天民，《從聖經看甲骨文》，頁82）</span>按殷代卜辭，「天」原表人之顛頂，為人體的最高位置，含有至上的意思。<sup>9</sup><span style={cite}>（劉翔，《中國傳統價值觀詮釋學》，頁19）</span>
                </p>

                <PageTag page={19} />
                <p className="text-gray-700 leading-relaxed mb-3">
                  唐君毅指出中國古代之天帝富仁愛體恤之德，並引用詩、書中「天矜於民」、「惟天惠民」等說明之。<sup>10</sup><span style={cite}>（唐君毅，《中國文化之精神價值》，頁34-35）</span>這表明中國古籍之「天」，與聖經中的「YHWH」或「天父」相似，是有知情意且與人有親近的關係，正如《詩經》所說：「天生烝民。」（《大雅‧烝民》）
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「元」是象形及會意字，由「一」與「人」組成，表天上第一人、萬有之元首、萬物之本源。正如上帝說：「……我是阿拉法……」（啟一8）基督說：「……我是首先的……」（啟一17）《易經》的上經如此陳述：「大哉乾元，萬物資始，乃統天。雲行雨施，品物流行，大明終始……首出庶物，萬國咸寧。」乾卦代表天，元為萬有本源。可翻譯如下：「偉大的天是萬有本源，萬物靠祂作資本，才有原始生命，祂統領天地萬有。祂使雲運行、雨布施，使各種物體演變、各類生物繁衍，祂是宇宙光明的起始和終結。……祂首先生出萬物，並給予萬國平安康寧。」<sup>11</sup><span style={cite}>（南懷瑾、徐芹庭註釋，《周易今註今譯》，頁12-13）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  若以「乾」代表「上帝」，則《易經》這段經文與聖經的記載可說非常相合：「起初，上帝創造天地。……上帝說：『要有光』，就有了光。……上帝說：『地要發生青草和結果子的菜蔬……各從其類，果子都包著核。』事就這樣成了。……上帝說：『地要生出活物來，各從其類；牲畜、昆蟲、野獸，各
                </p>

                <PageTag page={20} />
                <p className="text-gray-700 leading-relaxed mb-3">
                  從其類。』事就這樣成了。」（創一1、3、11、24）「耶和華使泉源湧在山谷，流在山間。使野地的走獸有水喝，野驢得解其渴。……耶和華啊，你所造的何其多！都是你用智慧造成的；遍地滿了你的豐富。」（詩一〇四10-11、24）「不再有黑夜；他們也不用燈光、日光，因為主上帝要光照他們。」（啟二十二5）
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「帝」是指事字，最大的祭台就是「帝」，帝是上帝及祂在世上的權能。<sup>12</sup><span style={cite}>（遠志明，《神州懺悔錄——上帝與五千年中國》，頁30）</span>《說文》：「帝……。王天下之號也。」<sup>13</sup><span style={cite}>（王貴元，《說文解字校箋》，頁2）</span>
                </p>
                <div className="flex flex-col items-center my-4">
                  <img src="/images/book32/ch1-di-glyph.png" alt="「帝」字古文字形" className="max-w-full h-auto rounded-lg shadow-md" style={{ maxWidth: 160 }} loading="lazy" />
                  <p className="text-sm text-gray-500 mt-2 italic">圖：「帝」字的古文字形，象最大祭台之形，本書用以說明「帝」字與上帝在世上權能的關聯。</p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  人若沒有犯罪，就不需要獻牛羊的祭台，人與上帝的關係也比較像家人之間愛的關係。但因為人犯了罪，人需要獻流血的祭，以除去罪的咒詛；在關係上，人也更需要敬畏、遵從神，因此「帝」這個字更多表達出神的權能與管理，與「El Shaddai」的意思相似。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  以上的探討並非純為基督徒的觀點，人文學者勞思光論述中國之宗教，談到「意志之天與祭祀」時指出：「殷周以前，人們普遍相信一個『有意志的天』，能主宰人世的禍福。……正式祭祀雖為貴族所專有，但求神的舉動，一度似乎非常風行。」<sup>14</sup><span style={cite}>（勞思光，《中國文化要義新編》，頁173）</span>贊成自然神話論的何星亮也指出「天」和「上帝」都是古代中國至上神的稱號，「上帝」是殷人對至上神的稱呼，「天」則於夏、周代被用於稱呼至上神。周代以後，「天」與「上帝」並
                </p>

                <PageTag page={21} />
                <p className="text-gray-700 leading-relaxed mb-3">
                  用，延續了幾千年。<sup>15</sup><span style={cite}>（何星亮，《中國自然神與自然崇拜》，頁53-56）</span>
                </p>
              </div>

              <div className="mb-4">
                <span className="font-semibold text-amber-700">貳、人類學的研究</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  維也納大學原始人種學、語言學教授施密特（史密德）博士（Dr. Wilhelm Schmidt）曾對人類歷史作精深研究，不受近代宗教理論所限，也不訴諸聖經，直接從人類學的資料著手研究。得一重要特徵，即各民族都有一位有道德的至上神，超越在其他神明之上。例如，印歐民族的「上帝」，散布在整個印歐區域各民族中，可知「上帝」在太古時候已存在，並且在那時就開始接受崇拜了。許多最原始的民族，如澳洲原住民、南安達曼人、小黑人、矮人等，有一神信仰，而沒有崇拜精靈或祖先亡靈，其一神信仰斷非從多神教而來。<sup>16</sup><span style={cite}>（施密特，《比較宗教史》，頁3、55-60。在印度，天帝Dyauspitar的古名字是Dyaus Asura，意為「天的主宰」，在吠陀時代，以Varuna代替祂，是創造、安排、維護與統治世界者，並有純潔、刑罰惡人的聖怒，及祝禱懇待者的慈愛。義大利的朱比特是道德與公眾秩序的維護者，被稱為Optimus Maximus〔最好、最大者〕，具有最高的權力，美善及光榮。祂的「父」性非常重要，「父」的頭銜與祂的名字不分離）</span>
                </p>

                <PageTag page={22} />
                <p className="text-gray-700 leading-relaxed mb-3">
                  施密特博士對現存原始民族作深入廣泛的研究，他們是民族學上最高年代的民族，其主要特徵有四：（1）地理：所居住的地方是最邊遠的、被隔絕的、最進去的。（2）經濟：他們採集食物為生，處在經濟發展的創始階段。（3）社會：房屋、衣服、工具、社會組織，都是最原始的。（4）文化：沒有圖騰崇拜、農業、母權、紡織等最初期的文化或工業。由以上四方面，可知他們沒有受到後起文化的影響，他們的宗教乃是最接近於宗教起源的。結果發現：在任何後期文化中，至上神的形式皆不如在原始文化中那樣清晰、確定、生動、直接；而且這位至上神不只在一、兩個原始民族中，乃在所有原始民族中都可以找到。<sup>17</sup><span style={cite}>（施密特，《比較宗教史》，頁312-320）</span>包括非洲東部、西部的小黑人、亞洲的矮人、菲律賓群島的小黑人、南澳洲、北極、北美的原始文化，都在其宗教中找到這位至上神。其分布環繞了世界，並達到各洲的盡頭。假如在這個龐大區域中原始民族的殘餘，都有至上神的信仰，那麼這種信仰顯然是人類最古文化的主要成分。這種信仰必然是最古時代的黎明，在個別的民族彼此沒有分開之前，就已根深柢固地生長在這文化中了。<sup>18</sup><span style={cite}>（施密特，《比較宗教史》，頁320-325）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  原始民族所信的至上神，其住處、形像、名稱、屬性，與演變宗教的推論不合，而與聖經創世記相合。多數原始民族都說神從前與人常在一起，教世人一切的善，與人有密切的關係，但因人犯罪，祂離開地升到天上。雖然至上神與天有關係，但祂是一位有獨立人格的神，與物質的天空大有分別。<sup>19</sup><span style={cite}>（施密特，《比較宗教史》，頁329；麥克斯‧穆勒，《宗教的起源與發展》，頁116）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  關於至上神的形像，分為兩類，一類是沒有形態、不能看見的，其中有的說能聽見或感覺到，有的說像風。另一類是「像
                </p>

                <PageTag page={23} />
                <p className="text-gray-700 leading-relaxed mb-3">
                  一個人」，有長鬚，潔白像棉花，或像發光的白色。或說，至上神全身像太陽發光，但臉部蓋著，從沒有人看過。或說，坐在天上的水晶寶座上，四圍發出彩虹的光芒。關於至上神的稱呼，「父、我（們）的父」是最通用的，表達出人對至上神的尊敬、愛戴、完全信靠。<sup>20</sup><span style={cite}>（施密特，《比較宗教史》，頁333；麥克斯‧穆勒，《宗教的起源與發展》，頁151）</span>部分原始民族也稱至上神為「造物者」，「造世界者」或「造生命者」。一個比較普遍的稱呼與住處有關，不同民族有「在上的祂、住在上面的祂、在天空的祂、在上的老者、在上者、在上的主」等不同稱呼。另有一些個別民族使用的稱呼：如神聖的天君、賜予者、（宇宙的）維持者、（嬰兒的）搖籃、啟示者及保護者、人格、至高者、最有權能者、監察者、力量等。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  從至上神的稱呼已能看出其屬性，但還有更多材料顯示出其他屬性，包括永恆、全知、全在、仁慈、聖潔、全能、創造力。<sup>21</sup><span style={cite}>（東南澳洲的庫林人相信人的身體是用泥土形成的，至上神將生命由泥人的鼻孔、嘴、肚臍裡吹進去。加蓬矮人相信至上神用濕泥形成了第一個人，然後以祂萬能的語言，使泥人變成了活人。見施密特，《比較宗教史》，頁341）</span>他們也相信，至上神制訂道德律，賞罰善惡（死後審判，善者去天堂，惡者受苦刑）。至上神不是遠離人的，乃是繼續以其德行、能力影響這世界與居民，接受人的祈禱與供獻。原始民族最主要的供獻是「薦新」，所獵取或採集的食物，未吃以前先
                </p>

                <PageTag page={24} />
                <p className="text-gray-700 leading-relaxed mb-3">
                  將以一小份供獻給神，表明地上所有都是屬於神的。<sup>22</sup><span style={cite}>（神明是從供養死者而來的那種理論，乃是謬誤的，因為在任何原始文化的祖裔中，都沒有供奉死者的禮節。施密特，《比較宗教史》，頁351）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  從埃及、亞述、伊朗、希伯來、巴比倫、腓尼基、希臘、羅馬、印度、非洲、美洲、中國的古史中，都可看到具共通性的一神信仰。<sup>23</sup><span style={cite}>（章力生，《聖道論》，頁60-61、76）</span>相信進化演變的人說，這是人類文明發展的結果，然而若將今日原始民族的單純一神信仰納入研討，則這些文明古國具共通性的一神信仰就可作為全人類先有一神信仰的強力佐證。由此可知，人類最初是接近上帝的，後因驕傲自義，逐漸與上帝遠離。回顧中華民族的歷史，也可得到同樣的結論，這是本書要繼續討論的。<sup>24</sup><span style={cite}>（章力生，《聖道論》，頁62-64）</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-amber-800 text-lg mb-3">第二節　神的創造</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                在中國古籍中，關於創造過程的記載，前述《易經》乾卦有隱含的表達，更明顯的表達則是在《大明會典》裡面，其禱文所敘述的內涵與創世記第一章的記載如出一轍，令人驚嘆：他們如何知道神創造的情節？應是從挪亞傳下來的間接特殊啟示。另外，《詩經》的記載及老莊的言說，也與神的創造有關。
              </p>

              <div className="mb-4">
                <PageTag page={25} />
                <span className="font-semibold text-amber-700">壹、大明會典</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  《大明會典》成書於明朝，但其內容則是黃帝、堯、舜、禹、湯在郊祀祭天時都共同使用過的禱告文。孔子說：「郊社之禮，所以事上帝也。……明乎郊社之禮，禘嘗之義，治國其如示諸掌乎。」（《中庸》）<sup>25</sup><span style={cite}>（宋天正註釋，《中庸今註今譯》，頁32）</span>可見郊社之禮的重要。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  《史記》卷二十八〈封禪書〉第六詳細記載古時天子封禪之處<sup>26</sup><span style={cite}>（泰山築土為壇祭天，報天之功，故曰「封」；泰山下，小山上，除地，報地之功，故曰「禪」，言禪者，神之也。見馬持盈註，《史記今註》，頁1368）</span>：「管仲曰，古時封泰山禪梁父<sup>27</sup><span style={cite}>（梁父山在袞州汶水縣北八十里。見馬持盈註，《史記今註》，頁1376）</span>者七十二家，而夷吾所記者十有二焉。昔無懷氏<sup>28</sup><span style={cite}>（無懷氏：古之王者，在伏羲前。云云：山名。見馬持盈註，《史記今註》，頁1376）</span>封泰山，禪云云；虙羲封泰山，禪云云；神農封泰山，禪云云；炎帝封泰山，禪云云；黃帝封泰山，禪亭亭；顓頊封泰山，禪云云；帝嚳封泰山，禪云云；堯封泰山，禪云云；舜封泰山，禪云云；禹封泰山，禪會稽；湯封泰山，禪云云；周成王封泰山，禪社首。」<sup>29</sup><span style={cite}>（馬持盈註，《史記今註》，頁1374-1375）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  西元十五世紀時，舉行郊祀的場所，由原來的邊界遷到了京城南方，也就是今日的天壇所在。那裡有一個大園子，園內有三個建築物：祈年殿、皇穹宇、圜丘壇。皇穹宇內沒有供奉任何偶像，只在朝北的牆壁上刻了四個大字：「皇天上帝」，顯
                </p>

                <PageTag page={26} />
                <p className="text-gray-700 leading-relaxed mb-3">
                  然郊祀的對象就是那位看不見的造物主上帝。而圜丘壇的獻祭儀式、所用犧牲等幾乎與舊約利未記所記是一致的。<sup>30</sup><span style={cite}>（李美基等，《上帝給中國人的應許》，頁3。筆者親自參觀過北京的天壇，了解其獻祭過程）</span>
                </p>
                <div className="flex flex-col items-center my-4">
                  <img src="/images/book32/ch1-tiantan.jpg" alt="北京天壇圜丘壇空拍照" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                  <p className="text-sm text-gray-500 mt-2 italic">圖：北京天壇圜丘壇空拍照，歷代君王每年冬至在此舉行郊祀祭天大典。</p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  歷代君王一直持守這重要的祭禮，直到一九一一年清朝被推翻，郊祀——祭天大典——才停止。因為郊祀是帝王在儀式中擔任大祭司的角色來主祭，清朝被推翻，君主制度消失，郊祀也就停止了。但天壇仍在北京見證著中國的郊祀。每年冬至，天子率王公貴族來到皇穹宇朝見上帝，再往圜丘壇去舉行獻祭儀式。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  《大明會典》記載其「迎帝神」樂曲之詞，其中一式如下：「於昔洪荒之初兮，混濛，五行未運兮，兩曜未明，其中挺立兮，有無容聲，神皇出御兮，始判濁清，立天立地人兮，群物生生。」獻祭過程中，又如此吟唱：「群生總總兮，悉蒙恩，
                </p>

                <PageTag page={27} />
                <p className="text-gray-700 leading-relaxed mb-3">
                  人物盡圍兮，於帝仁，群生荷德兮，誰識所從來，於惟皇兮，億兆物之祖真。……皇德無京，陶此群生。」<sup>31</sup><span style={cite}>（李東陽等撰，申時行等重修，《大明會典》，頁1294-1295。申時行等修，《明會典》，頁471-472）</span>
                </p>
                <div className="flex flex-col items-center my-4">
                  <img src="/images/book32/ch1-earth.jpg" alt="地球與日光示意照" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                  <p className="text-sm text-gray-500 mt-2 italic">圖：從太空所見的地球與日光，呼應《大明會典》禱文中「洪荒之初」天地未判、神皇出御創造萬物的描述。</p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  以上兩段話的語譯如下：「在天地初創的時候，到處都是混沌不明，沒有自然界金、木、水、火、土等星的運作，也沒有太陽、月亮的出現，這時候整個世界靜得連一點聲音也沒有，更看不到任何有形的物質。然而一旦神皇出來統管，就有了黑暗與光明的分別，祂創造了天地萬物和人類，使萬物世世代代不斷地延續下去。」「萬物的開始，都是因為祂施恩的緣故；整個天地人類，都蒙受上帝祂的大愛；萬物都虧欠了祂的美德，誰知道這些祝福是從哪裡來的呢？哦！上帝，惟有祢才是天地萬物真正的始祖啊！……上帝，祢的美善是永無止盡的，祢像陶匠一樣塑造了天地萬物。」
                </p>
              </div>

              <div>
                <PageTag page={28} />
                <span className="font-semibold text-amber-700">貳、詩經與老莊</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  創世記一26記載：「上帝說：『我們要照著我們的形像、按著我們的樣式造人……』」《詩經‧大雅‧烝民》記載：「天生烝民，有物有則。民之秉彝，好是懿德。」彝：常也，常規、常道、天性。懿：美善的。可翻譯如下：「上帝生（造）萬民，受造萬物各有其法則。人民所擁有的天性，是喜好這美善之德。」<sup>32</sup><span style={cite}>（雒江生，《詩經通詁》，頁807）</span>這段話與創世記一26有其一致性，指出人被上帝所生（造），且具有喜好美德的天性。被造是事實，被生是說法，隱含著人有神的形像之意；而「喜好美德的天性」也相當程度地表明人是按神的形像造的。《孟子》在講「性善論」時，所根據的就是《詩經‧大雅‧烝民》這段話，與聖經不謀而合。<sup>33</sup><span style={cite}>（李杜，《中西哲學思想中的天道與上帝》，頁21。陳幸雄，《從基督教人性觀對孟荀人性論的數點質疑》，頁16）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  老莊以「道」為萬有本源，相關論述與創造有關，舉數例如下：
                </p>
                <p className="text-gray-700 leading-relaxed mb-1">
                  「有物混成，先天地生。寂兮寥兮，獨立而不改，周行而不殆，可以為天下母。吾不知其名，字之曰道，強為之名曰大。……人法地，地法天
                </p>

                <PageTag page={29} />
                <p className="text-gray-700 leading-relaxed mb-1">
                  天法道，道法自然。」
                </p>
                <p className="text-gray-700 leading-relaxed text-right mb-3">《老子》二十五章</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「自然」一詞在《老子》中共出現五次，皆指「自在本相」，而非指「大自然」。道在天地之先，同於天地的「大自然」還未存在。因此「道法自然」可譯為：「道純任自然」或「道以自身為法度」。<sup>34</sup><span style={cite}>（陳鼓應註釋，《老子今註今譯》，頁145-150）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-1">
                  「道生一，一生二，二生三，三生萬物。」
                </p>
                <p className="text-gray-700 leading-relaxed text-right mb-3">《老子》四十二章</p>
                <p className="text-gray-700 leading-relaxed mb-1">
                  「夫道有情有信，無為無形，可傳而不可受，可得而不可見。自本自根，未有天地，自古以固存。神鬼神帝，生天生地。在太極之先而不為高，在六極之下而不為深，先天地生而不為久，長於上古而不為老。」
                </p>
                <p className="text-gray-700 leading-relaxed text-right mb-3">《莊子‧大宗師》</p>
                <p className="text-gray-700 leading-relaxed">
                  老莊所說的「道」，與箴言八章的「智慧工師」及約翰福音一章的「道」都有相似之處。我們不能斷定老莊所說的「道」是否等於聖經的「道」，但至少看到古人對創造的理解與聖經的記載相似。
                </p>

                <PageTag page={30} />
                <p className="text-gray-700 leading-relaxed">
                  今日我們能認識那位參與創造的「道」：「太初有道，道與上帝同在，道就是上帝。……萬物是藉著他造的……」（約一1、3），乃是由於新約聖經清楚地見證：「道成了肉身，住在我們中間，充充滿滿地有恩典有真理。我們也見過他的榮光，正是父獨生子的榮光。」（約一14）這「道」也是我們生命救恩的來源。
                </p>
              </div>
            </div>

          </div>
        )}
      </div>

      {/* 重點整理 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-sky-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">重點整理</span>
          </div>
          {expanded['summary'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['summary'] && (
          <div className="p-5 bg-white">
            <ul className="space-y-3">
              {[
                '聖經中神的名字（Elhim、YHWH、El Shaddai）各有強調重點；中國字「示」、「神」、「天」、「元」、「帝」則分別對應啟示、創造者、有位格的至上者、萬有本源、權能治理者等意涵，與聖經神觀有密切呼應。「帝」字古文字形象最大祭台之形，與「El Shaddai」的權能意涵相似。',
                '「示」字本意為神藉光照啟示自己，「示」部諸字（禮、禛、祿、禎、祐、祺、禔）皆與神所賜的吉福有關；「神」字由「示」與「申」組成，意為「引出萬物者」，與「Elhim」相似。',
                '維也納大學施密特博士對現存最原始民族（地理最偏遠、經濟最初階、社會文化最原始）的研究發現：幾乎所有原始民族都共同持有一位超越、有道德的「至上神」信仰，且此信仰不是從多神演變而來，反而是最古老、最根深柢固的信仰核心。',
                '《大明會典》所載歷代祭天禱文，內容與創世記第一章的創造記載幾乎完全相合，包括「起初混沌黑暗、神施恩創造天地萬物」等表達，天壇圜丘壇的獻祭儀式也與利未記記載相近，郊祀傳統直到1911年清朝被推翻才停止。',
                '《詩經‧大雅‧烝民》「天生烝民，有物有則，民之秉彝，好是懿德」與創世記一26人按神形像所造、具美善天性的教導相合；老莊以「道」為萬有本源、先天地而生、無形而生天生地的論述，也與約翰福音一章的「道」有相似之處。',
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
    </div>
  );
}
