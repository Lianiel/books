import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star } from 'lucide-react';
import PageTag from './PageTag';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book32Ch2() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <PageTag page={31} />
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-700 to-amber-700 bg-clip-text text-transparent">第二章</h1>
        <h2 className="text-xl font-semibold text-gray-700">人的特性</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          <sup>7</sup>耶和華上帝用地上的塵土造人，將生氣吹在他鼻孔裡，他就成了有靈的活人，名叫亞當。<sup>8</sup>耶和華上帝在東方的伊甸立了一個園子，把所造的人安置在那裡。<sup>9</sup>耶和華上帝使各樣的樹從地裡長出來，可以悅人的眼目，其上的果子好作食物。園子當中又有生命樹和分別善惡的樹。<br />
          <sup>16</sup>耶和華上帝吩咐他說：『園中各樣樹上的果子，你可以隨意吃，<sup>17</sup>只是分別善惡樹上的果子，你不可吃，因為你吃的日子必定死！』<sup>18</sup>耶和華上帝說：『那人獨居不好，我要為他造一個配偶幫助他。』<br />
          <sup>21</sup>耶和華上帝使他沉睡，他就睡了；於是取下他的一條肋骨，又把肉合起來。<sup>22</sup>耶和華上帝就用那人身上所取的肋骨造成一個女人，領他到那人跟前。<sup>23</sup>那人說：這是我骨中的骨，肉中的肉，可以稱她為『女人』，因為她是從『男人』身上取出來的。<sup>24</sup>因此，人要離開父母，與妻子連合，二人成為一體。<br />
          創世記二7-9、16-18、21-24
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

            <PageTag page={32} />
            <p className="text-gray-700 leading-relaxed">
              在神的創造裡，最後、最高的受造者乃是人。第一章已說到，創世記一26-27記載神按著祂的形像造人，而華人經典中意義最相近的經文就是《詩經‧大雅‧烝民》所說的：「天生烝民，有物有則。民之秉彝，好是懿德。」本章要進一步集中探討「人的特性」，包含「人的本分」與「人的使命」，也就是「人與上帝的關係~天人合一」及「人對世界的使命~內聖外王」兩方面。藉由中國古文、經典與聖經經文的比較，可看出古代華人這方面的觀點與聖經有其一致性；並且可看出，華人數千年來「天人合一」、「內聖外王」的理想，靠自己不能成就，但倚靠基督可以成就。
            </p>

            <div>
              <h3 className="font-bold text-amber-800 text-lg mb-3">第一節　人與上帝的關係~天人合一</h3>

              <PageTag page={33} />
              <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                創世記講到「人與上帝的關係」，除了說到神按著祂的形像造人、要人守安息日之外，也說到神用塵土造人，神吹氣使人成為有靈的活人，並藉著伊甸園所立的兩棵樹（生命樹與分別善惡樹）來說明神與人之間的生命關係。而在神從男人身上取肋骨造女人以設立婚姻的這件事上，除了表明婚姻的神聖性，也隱含了「人從神而出，需要與神合一」的意思。關於「人與上帝的關係」及「婚姻」，以下分別從「中國字」、「甲骨文」、「金文」、《詩經》幾方面來分享。
              </p>

              <div className="mb-4">
                <span className="font-semibold text-amber-700">壹、中國字</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  「印」是象形及會意字，由「手」與「人」合成，表明上帝的手照祂的形像造人（創一26），將祂的形像「印」在人身上。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「妥」是象形及會意字，由「手」與「女」合成，表明上帝的手為人預備女人，從「那人獨居不好」成為「一切都甚好」（創二18，一31）。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「安」是會意字，《說文解字》對「安」字的解釋是：「靜也。从女在宀下。」「宀」代表家，家下面有個「女」字，代表家中有女人就「安」，沒有女人就「不安」。這與「妥」的意義有異曲同工之妙。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「宮」是會意字，代表兩個人在屋內，是最早美好的家（創二22-25）。
                </p>

                <PageTag page={34} />
                <p className="text-gray-700 leading-relaxed mb-3">
                  「宅」是會意字，由「房子」與「七」合成，代表第七日在家休息。<sup>1</sup><span style={cite}>（李美基等，《上帝給中國人的應許》，頁30-35）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「禁」是會意字，《說文》：吉凶之忌也。這正是對「兩棵樹」的「指示」，一吉一凶，而最主要的是不可吃禁果。<sup>2</sup><span style={cite}>（王貴元，《說文解字校箋》，頁7。朱天民，《從聖經看甲骨文》，頁14-15）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「栗」是會意字，甲骨文是三個火在樹上，是發出榮光的樹，可能表生命樹。「桑」是會意字，甲骨文是三隻類似樹枝的手在樹上，可能代表分別善惡樹。因為「喪」的甲骨文是「桑」加上兩個口，代表始祖兩人吃了帶來喪亡。<sup>3</sup><span style={cite}>（李美基等，《上帝給中國人的應許》，頁41-42）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「喪」有雙重涵義，代表死亡與迷失，與人吃禁果的結果完全相合（創二17，三6-7）。用「喪」這個字說明吃禁果的後果，可能比所有其他語言的「死」都更傳神、準確，這可以成為華人對普世神學界的貢獻。中國的《山海經》保存許多上古時代資料，其中說到眾多寶樹之間有「不死樹」，又稱「壽木」，食其實者不死；又有「聖木」，食之令人智聖也（《山海經》第十一〈海內西經〉）。<sup>4</sup><span style={cite}>（袁珂校注，《山海經校注》，頁350-352）</span>這與聖經所說的生命樹與分別善惡樹，甚為相似。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  這些中國字很可能是按照挪亞所傳給華人祖先的故事來造的。抽取單獨一個字來說明，可能會有穿鑿附會之感，但把所有的字擺列出來，就能看出至少其中一部分與聖經的確有關。
                </p>
              </div>

              <PageTag page={35} />
              <div className="mb-4">
                <span className="font-semibold text-amber-700">貳、甲骨文</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  甲骨文是寫或刻在龜的腹甲、背甲和牛、羊肩胛骨上的文字，用於占卜。商朝以前，專用牛、羊的肩胛骨，商朝後期，盤庚遷殷以後稱為殷代，這時兼用牛骨及龜骨。<sup>5</sup><span style={cite}>（董作賓，《甲骨學六十年》，頁2）</span>中國古人後來也把紀念文字鑄在銅器上，放在宗廟或作為貴族的陪葬品。古人把「銅」叫「金」，因此，這些銅器上的文字叫「金文」。<sup>6</sup><span style={cite}>（周金聲，《基督教與中國文化》，頁371）</span>甲骨文與金文皆多方講到人與上帝的關係，以下舉例，按性質分別說明。
                </p>
                <p className="text-gray-700 leading-relaxed mb-1 font-semibold">一、上帝有賜福降災之權柄</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「上帝若，王有又。」<sup>7</sup><span style={cite}>（董作賓，《殷虛文字甲編》第1164版，中央研究院，1948）</span>譯文：「上帝承諾，王會受到保祐。」「上帝降艱。」<sup>8</sup><span style={cite}>（胡厚宣編，《甲骨續存》，第一卷168版，1955）</span>譯文：「上帝降艱難給人民。」「既繫於上帝。」「豦」即「繫」；譯文：「這一切都連接於上帝。」<sup>9</sup><span style={cite}>（黃濬編，《鄴中片羽》，卷三上第32版，1942）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  從以上數例可知，殷代人深信上帝有賜福降災之權柄，祂掌管君王與人民的福禍艱難，他們的生活、命運連結於上帝。這些都與生命樹及分別善惡樹所表達的屬靈原則相關，也與使徒行傳十七28所說的相符：「我們生活、動作、存留都在乎他。」
                </p>

                <PageTag page={36} />
                <p className="text-gray-700 leading-relaxed mb-1 font-semibold">二、上帝以命令掌管天氣風雨</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「帝令雨足年，帝令雨弗其足年。」譯文：「上帝令這一年雨水充足，上帝令這一年雨水不充足。」「今三月，帝令多雨。」<sup>10</sup><span style={cite}>（羅振玉編，《殷墟書契前編》，卷三18頁第五塊）</span>「今二月，帝不令雨。」<sup>11</sup><span style={cite}>（劉鶚，《鐵雲藏龜》，123頁第一塊，台北：藝文印書館，1904）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  由以上數例可知，殷代人深信上帝有權柄掌管天氣。文中的「令」字很傳神，正如聖經的表達：「（他）以風為使者，以火焰為僕役。」（詩一〇四4）「因他一吩咐，狂風就起來，海中的波浪也揚起。……他使狂風止息，波浪就平靜。」（詩一〇七25、29）「耶穌……斥責風和海，風和海就大大地平靜了。」（太八26）
                </p>

                <PageTag page={37} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">三、好君王或義人死後到上帝那裡</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「下乙賓于帝，咸不賓于帝。」<sup>12</sup><span style={cite}>（董作賓，《殷虛文字乙編》，第7197塊）</span>譯文：「下乙死後可到上帝那裡，咸死後不能到上帝那裡。」
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「下乙不賓于帝，大甲賓于帝。」<sup>13</sup><span style={cite}>（董作賓，《殷虛文字乙編》，第7434塊）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  從以上二例，可看出古代華人相信人有永存的靈魂，不是一死百了。這正是創世記第二章所顯示的，神將生氣吹到亞當裡面，使人成為有靈的活人，而非只是物質的存在。
                </p>
              </div>

              <PageTag page={38} />
              <div className="mb-4">
                <span className="font-semibold text-amber-700">參、金文</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">一、上帝保護求告祂的人</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  宗周鐘：「惟皇上帝百神，保余小子。」譯文：「偉大的上帝及眾神（天使），保護我這個小子。」「小子」是周代君王在上帝面前的謙稱，意為「上帝的小兒子」。<sup>14</sup><span style={cite}>（周金聲，《基督教與中國文化》，頁371-372）</span>百神並非假神偶像，而是眾天使，如聖經所說：祂差遣「眾使者」四圍安營保護敬畏神的人（詩三十四7）。「他在萬神之上，當受敬畏。」（代上十六25）
                </p>
                <p className="text-gray-700 leading-relaxed mb-1 font-semibold">二、君王死後在天上監視百姓</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  大豐簋：「事喜上帝，文王監在上。」譯文：「事奉我們喜愛的上帝，文王在天上看著我們。」猶鐘：「先王其嚴，在帝左右。」叔人鐘：「虩虩成唐，有嚴在帝所。」譯文：「我們對成唐有畏懼，因為他莊嚴地與上帝同在。」<sup>15</sup><span style={cite}>（周金聲，《基督教與中國文化》，頁272-373）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  上帝自稱：「（我）是亞伯拉罕的上帝、以撒的上帝、雅各的上帝。」（出三15）耶穌藉此說明復活的真理，指出：「上帝不是死人的上帝，乃是活人的上帝。」意思是先祖雖然死了，但他們活在上帝那裡（太二十二29-32）。古代華人有類似的信
                </p>

                <PageTag page={39} />
                <p className="text-gray-700 leading-relaxed mt-2">
                  仰，可能來自挪亞。因為華人與現存人類都是挪亞的後代，而挪亞知道以諾與上帝同行三百年，上帝將他取去，永遠與上帝同在（創五24），也知道曾在伊甸園有生命樹，能使人永遠與上帝在一起。因此有這種對永生的盼望。
                </p>
              </div>

              <div className="mb-4">
                <span className="font-semibold text-amber-700">肆、《詩經》</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  《詩經》講到人與上帝的關係，有非常豐富的篇章，前書《跨越鴻溝——在華人文化處境中詮釋罪》二章三節〈五經中的上帝觀〉有詳盡說明，不在此贅述，僅節錄二例如下：
                </p>
                <p className="text-gray-700 leading-relaxed mb-1 font-semibold">一、敬畏上帝君王蒙福</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「維此文王，小心翼翼，昭事上帝，聿懷多福。」（〈大明〉）譯文：「由於文王小心翼翼，恭敬順服，以明德事奉上帝，所以得到很多福氣。」<sup>16</sup><span style={cite}>（雒江生，《詩經通詁》，頁683-685。馬持盈，《詩經今註今譯》，頁440-441）</span>以敬畏的心服事上帝，作上帝忠心僕人，乃是君王、領袖蒙福的祕訣。這是約書亞所領受的：「這律法書不可離開你的口，總要晝夜思想，好使你謹守遵行這書上所寫的一切話。如此你的道路就可以亨通，凡事順利。」（書一8）周文王的態度正是如此，〈大明〉這詩句表明，中國曾有一個時代，她的君王因敬畏上帝而蒙福。
                </p>

                <PageTag page={40} />
                <p className="text-gray-700 leading-relaxed mb-1 font-semibold">二、牛羊為祭得天福祐</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  《周頌》：「我將我享，維羊維牛，維天其右之，儀式刑文王之典，日靖四方。」將：奉也。享：獻也。譯文：「我以羊與牛向上帝獻祭，祈求上帝保佑，儀式效法文王之典章，以安定天下四方。」<sup>17</sup><span style={cite}>（馬持盈，《詩經今註今譯》，頁556-557）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  中國古時獻祭使用牛、羊，藉著獻祭除去人與神的隔閡，以得著上帝的福祐。這也是亞伯、挪亞、亞伯拉罕、以撒、雅各、摩西、大衛同樣做的，因為這關乎基督贖罪的預表。如聖經所說：「若山羊和公牛的血……尚且叫人成聖，身體潔淨，何況基督藉著永遠的靈，將自己無瑕無疵獻給上帝，他的血豈不更能洗淨你們的心，除去你們的死行，使你們事奉那永生上帝嗎？」（來九13-14）
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  另提《詩經》有關婚姻的數篇。《詩經‧國風‧周南》第一篇〈關雎〉，大意是講君子愛上淑女，渴望結為夫妻：「關關雎鳩，在河之洲。窈窕淑女，君子好逑。」第二篇〈葛覃〉，講到女子歸寧，回娘家探望父母的心情，寫她的勤、儉、孝、敬。第三篇〈卷耳〉，講到丈夫遠役，妻子思念。第五篇〈螽斯〉，祝賀人多生子女。第六篇〈桃夭〉，講女子出嫁，夫妻和睦：「桃之夭夭，灼灼其華；之子于
                </p>

                <PageTag page={41} />
                <p className="text-gray-700 leading-relaxed mb-3">
                  歸，宜其室家！」
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  以上是《詩經》頭六篇當中的五篇，它們寫了戀愛、結婚、夫妻離別的思念、渴望多子、回娘家探親等，把婚姻生活中的主要問題都談到了。《詩經》三百零五篇，頭幾篇幾乎全部是寫婚姻家庭的事，豈不令人深思！不論孔子是刪詩還是整理詩，都說明了他十分重視婚姻家庭。這也與聖經一開頭就介紹婚姻有異曲同工之妙，尤其《詩經》第六篇說女人出嫁是「于歸」，更與神用男人肋骨造女人的典故相合。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  從上列古文資料來看，華人所理解的人與上帝的關係，與創世記所啟示的相當一致，我們可以合理地推測：古代華人相信，人不僅被神所造，並且繼續在神的賜福、治理之下，死後靈魂還能與神在一起，這些都是華人所盼「天人合一」的內涵。華人後來拜偶像離棄真神，以自我為中心，已無法體驗「天人合一」，但若信靠從天上來到地上尋找迷羊的基督耶穌，則能與神恢復生命的關係，得著「天人合一」的實際。這種「天人合一」，聖經以婚姻來比喻，在《詩經》當中，也對婚姻有相當程度的重視，這與「天人合一」的精神是相合的。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-amber-800 text-lg mb-3">第二節　人對世界的使命~內聖外王</h3>
              <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                創世記講「人對世界的使命」，主要是「從神的形像到治理全地」，這也是華人「內聖外王」的概念。耶穌升天前頒布的大
              </p>

              <PageTag page={42} />
              <p className="text-gray-700 leading-relaxed mb-3">
                使命「使萬民作主門徒」，與「內聖外王」也是相通的，因為成為基督的門徒，恢復神的形像，是內聖；使萬民成為主的門徒，而能治理全地，是外王。華人「內聖外王」的思想，特別呈現在孔子所講述的《大學》裡面。另外，孟子的言論，以及明末清初黃宗羲所寫的《明夷待訪錄》，關於人對世界的使命，也有重要的論述。以下分別陳述。
              </p>

              <div className="mb-4">
                <span className="font-semibold text-amber-700">壹、大學之道</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  《大學》有經一章和傳十章，經是主文，傳是解釋。《大學》所闡述的內容，可概括為「三綱領」和「八條目」兩部分。三綱領是「明明德、親民、止於至善」。八條目在修己方面是「格物、致知、誠意、正心、修身」，在治人方面是「齊家、治國、平天下」。<sup>18</sup><span style={cite}>（賴明德等注釋，《新注新譯四書讀本》，頁5）</span>「明明德」與前五條目關乎內聖，「親民」與後三條目關乎外王，「止於至善」則與內聖外王都有關。<sup>19</sup><span style={cite}>（劉述先，〈論儒家「內聖外王」之理想〉，《哲學與文化》15卷2期，1988.2，頁26）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  傳一章「釋明明德」，內文說道：「康誥曰：『克明德。』大甲曰：『顧諟天之明命。』帝典曰：『克明峻德。』皆自明也。」意思是：「《尚書‧康誥》說：『能彰明德性。』〈大甲〉說：『審視天所賦予的德性。』〈堯典〉說：『能彰明大德。』這都是告訴人要自己來彰明天賦德性。」<sup>20</sup><span style={cite}>（謝冰瑩等編譯，《新譯四書讀本》，頁6-7）</span>這段話指明，德性是
                </p>

                <PageTag page={43} />
                <p className="text-gray-700 leading-relaxed mb-3">
                  天所賦予的，是與生俱來的，人有責任要去彰明之。對照創世記一26-27，可以歸納說，「明德」是「天賦德性」，也是「神的形像」。而「明明德」則是「彰明天賦德性」，也是「彰顯神的形像」。神將祂的形像放在人裡面，人應當將這形像彰顯出來，這就是「明明德」。如何明明德？方法就是「格物、致知、誠意、正心、修身」。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  朱熹認為，「格物」是「即物而窮其理」，「致知」即「成知識也」，是認知意義的格物窮理以致知，這是以知識講道德。<sup>21</sup><span style={cite}>（牟宗三，《從陸象山到劉蕺山》，頁484-485）</span>朱子註《論語》「獲罪於天，無所禱也」，曾以「理」詮釋「天」：「天，即理也。……逆理，則獲罪於天矣。」<sup>22</sup><span style={cite}>（朱熹，《四書集注》，頁65）</span>清朝錢大昕反對朱子的詮釋，指出天不同於理。在他的《十駕齋養新錄》卷三，有如下的批評：「宋儒謂性即理，是也；謂天即理，恐未然。獲罪於天，無所禱。謂禱於天，豈禱於理乎？詩云，敬天之怒，畏天之威，理豈有怒與威乎？」<sup>23</sup><span style={cite}>（錢大昕，《十駕齋養新錄》(一)，頁49）</span>朱子以理說天，與孔子所說天的原意並不符合。孔子所說的天，乃是神義性的天，是有位格的上帝。細察《禮記》，可清楚看出，孔子相當敬畏上帝，並以祭天、敬天為一切之本，如所記：「祀帝於郊，敬之至也。」（《禮器》）「孔子曰：夫禮，先王以承天之道，以治人之情。故失之者必死，得之者必生。」「故先王患禮之不達於下也，故祭帝於郊，所以定天位也。」（《禮運》）「郊社之禮，所以事上帝也……。明乎郊社之禮，禘嘗之義，治國其如示諸掌乎。」（《中庸》）
                </p>

                <PageTag page={44} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  因此，對朱子而言，「格物」只是「窮其理」，與上帝無關；但對孔子而言，「格物」則是對神所創造萬物的探討，與上帝有關。近代科學的研究開始於基督徒科學家，其動機是想藉此更認識神，因為這世界是神所創造的（羅一20）。這個角度，與孔子的本意相近，因為孔子相信萬物本於神，如「天生烝民，有物有則」這句話所表明的。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  對於基督徒而言，最基本的「格物」更是要認識神本身。人本來只能藉著自然啟示認識神，但神樂意啟示祂自己，所以我們藉著羔羊基督與神恢復關係，就能在聖經、聖靈裡更清楚認識神，這樣才能達到「致知」——有真知識，進而可以「誠意、正心、修身」。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  「明明德」是內聖，這是起點，接著要「親民」，也就是外王，包括「齊家、治國、平天下」，這相似於創世記所說的治理全地（創一28）。人有神的形像，才能治理全地。同理，人修己、內聖之後，才能治人、外王。最後，這一切都要「止於至善」，這正是創世記一、二章之中，上帝對亞當原有的期待，也是耶穌對門徒的期待：「你們要完全，像你們的天父完全一樣。」（太五48）
                </p>
              </div>

              <div>
                <PageTag page={45} />
                <span className="font-semibold text-amber-700">貳、天下的所有權</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  關於天下的所有權，創世記一、二章清楚表明，天下是屬於上帝的。中國歷代為爭奪天下，殺人無數，主因在於忘了天下是屬於上帝的，以為天下可奪取而任憑己意使用。孟子與黃宗羲對此有清楚而正確的觀點，值得政治家借鏡實行。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  《孟子‧梁惠王下》：「以大事小，樂天者也；以小事大，畏天者也。樂天者保天下，畏天者保其國。」〈萬章上〉第五：「萬章曰：『堯以天下與舜，有諸？』孟子曰：『否。天子不能以天下與人。』『然則舜有天下也，孰與之？』曰：『天與之。』」孟子認為，天下是屬於上帝的，以上帝為樂者可以保有天下，敬畏上帝者可以保有國家。與萬章的談話，更進一步說，堯不把天下當作是自己的，所以謹慎地尋求上帝，上帝藉客觀事實顯明舜是合神心意的人，堯才把天下交給舜。中國古代的禪讓政治被傳為美談，其主因乃在於君王看自己是僕人而不是主人，這正是創世記一、二章的精義。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  黃宗羲《明夷待訪錄》在這方面也有精闢的見解，擇要如下：
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  〈原君〉：「古者以天下為主，君為客，凡君之所畢世而經營者，為天下也。今也以君為主，天下為客；凡天下之無地而得安寧者，為君也。是以其未得
                </p>

                <PageTag page={46} />
                <p className="text-gray-700 leading-relaxed mb-3">
                  之也，荼毒天下之肝腦，離散天下之子女，以博我一人之產業。曾不慘然，曰『我固為子孫創業也』。其既得之也，敲剝天下之骨髓，離散天下之子女，以奉我一人之淫樂，視為當然，曰：『此我產業之花息也。』然則為天下之大害者，君而已矣！」<sup>24</sup><span style={cite}>（黃宗羲，《明夷待訪錄》，頁1-2）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  黃宗羲追溯幾千年來中國歷史的演變，得出結論：後代的人君，特別是秦漢以來的君王，為了奪天下作為私人產業，傳諸子孫，不惜「荼毒天下之肝腦，離散天下之子女」。既奪得天下後，又不惜「敲剝天下之骨髓，離散天下之子女，以奉我一人之淫樂」。他歸結說：「然則為天下之大害者，君而已矣！」對黃宗羲來說，自秦始皇以下，所有開朝皇帝都是屠夫、劊子手、天下禍害。<sup>25</sup><span style={cite}>（謝昌淦，〈時代先驅黃宗羲〉，《黃梨洲三百年祭》，頁31）</span>
                </p>
                <div className="flex flex-col items-center my-4">
                  <img src="/images/book32/ch2-huangzongxi.png" alt="黃宗羲像及《明夷待訪錄》書名題字" className="max-w-full h-auto rounded-lg shadow-md" style={{ maxWidth: 220 }} loading="lazy" />
                  <p className="text-sm text-gray-500 mt-2 italic">圖：黃宗羲像及其著作《明夷待訪錄》書名題字。</p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  黃宗羲的理想是恢復堯舜時代的「公天下」，與秦漢之後的「家天下」形成尖銳對比。因此黃宗羲在〈原法〉中指出「天下之法」與「一家之法」之不同：
                </p>

                <PageTag page={47} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  天下之法：「三代之法，藏天下於天下者也：山澤之利不必其盡取，刑賞之權不疑其旁落，貴不在朝廷也，賤不在草莽也。」一家之法：「後世之法，藏天下於筐篋者也；利不欲其遺於下，福必欲其斂於上。」<sup>26</sup><span style={cite}>（黃宗羲，《明夷待訪錄》，頁6）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  為了避免「王」的獨裁，黃宗羲對「王」與「師」做了清楚的區隔。他認為為王者不必然為「聖」，為師者不需為「王」。所以他提出「公其非是于學校」：「天子之所是未必是，天子之所非未必非，天子亦遂不敢自為非是，而公其非是于學校。」<sup>27</sup><span style={cite}>（黃宗羲，《明夷待訪錄》，頁10）</span>這種作法，否定君主決定天下是非的傳統，而肯定學者的公信力，蘊含著政治決策民主化的因素。<sup>28</sup><span style={cite}>（朱義祿，《黃宗羲與中國文化》，頁3、85-93）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  黃宗羲否定偏差了數千年的君王制度，而提出民主化的治國方式，這在中國古代與西方近代，都有成功之例。觀察其相同點，成功原因不單在「民主制度」，更在「敬畏上帝」的基調。「天下為公」是孔子懷古的理想，也是黃宗羲期待的未來。「天下為公」這個命題所根據的是什麼？其實就是「上帝的主權」。堯、舜、禹、湯、文、武、孔、孟，都承認天下屬於上帝，且認為君王應敬畏天、作僕人。這是華人先祖與聖經真理的共通處，是內聖外王、治理全地惟一可行之道。
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
                '中國字「印」「妥」「安」「宮」「宅」「禁」「栗」「桑」「喪」等，分別對應神按形像造人、神為人預備配偶、安息日、伊甸園兩棵樹、禁果，以及吃禁果帶來喪亡的結果，與創世記二至三章的記載呼應。',
                '甲骨文與金文多處記載殷周人相信上帝有賜福降災、掌管天氣風雨的權柄，好君王或義人死後可到上帝那裡，且君王死後仍在天上監視百姓，與聖經「我們生活、動作、存留都在乎他」（徒十七28）及「上帝不是死人的上帝，乃是活人的上帝」（太二十二32）的信息相合。',
                '《詩經》〈大明〉篇記載文王敬畏上帝而蒙福，《周頌》記載以牛羊向上帝獻祭；《詩經》開篇多篇講述婚姻家庭，與創世記一開始即介紹婚姻、神用男人肋骨造女人的記載有異曲同工之妙。',
                '孔子在《大學》所述「明明德、親民、止於至善」與「格物致知、誠意正心修身、齊家治國平天下」，可對應創世記中「神的形像」與「治理全地」的內聖外王架構；然而朱子以「理」釋「天」，偏離了孔子原本敬畏有位格上帝的本意。',
                '孟子與黃宗羲皆認為天下屬於上帝、君王當存敬畏之心；黃宗羲在《明夷待訪錄》中痛陳秦漢以來君王「以天下為私產」之害，主張恢復「天下為公」，其思想根基仍在於「上帝的主權」，與創世記一、二章的精義相合。',
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
