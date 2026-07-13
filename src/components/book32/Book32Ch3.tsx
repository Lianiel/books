import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book32Ch3() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-700 to-amber-700 bg-clip-text text-transparent">第三章</h1>
        <h2 className="text-xl font-semibold text-gray-700">墮落與拯救</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          <sup>1</sup>耶和華上帝所造的，惟有蛇比田野一切的活物更狡猾。蛇對女人說：『上帝豈是真說，不許你們吃園中所有樹上的果子嗎？』<sup>2</sup>女人對蛇說：『園中樹上的果子，我們可以吃，<sup>3</sup>惟有園當中那棵樹上的果子，上帝曾說：「你們不可吃，也不可摸，免得你們死。」』<sup>4</sup>蛇對女人說：『你們不一定死；<sup>5</sup>因為上帝知道，你們吃的日子眼睛就明亮了，你們便如上帝能知道善惡。』<sup>6</sup>於是女人見那棵樹的果子好作食物，也悅人的眼目，且是可喜愛的，能使人有智慧，就摘下果子來吃了，又給她丈夫，她丈夫也吃了。<br />
          <sup>21</sup>耶和華上帝為亞當和他妻子用皮子做衣服給他們穿。<sup>22</sup>耶和華上帝說：『那人已經與我們相似，能知道善惡；現在恐怕他伸手又摘生命樹的果子吃，就永遠活著。』<sup>23</sup>耶和華上帝便打發他出伊甸園去，耕種他所自出之土。<sup>24</sup>於是把他趕出去了；又在伊甸園的東邊安設基路伯和四面轉動發火焰的劍，要把守生命樹的道路。<br />
          <sup>4</sup>亞伯也將他羊群中頭生的和羊的脂油獻上。耶和華看中了亞伯和他的供物。<br />
          創世記三1-6、21-24，四4
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

            <p className="text-gray-700 leading-relaxed">
              第二章〈人的特性〉提到，亞當、夏娃受造後，被命定當活在「人與上帝的關係~天人合一」及「人對世界的使命~內聖外王」兩大主軸裡面，古代華人這方面的觀點與聖經有其一致性。本章將接著分享，亞當、夏娃犯罪墮落，破壞了人與上帝的關係，也失落了人對世界的使命，掉入罪與死的光景當中。然而因著神的慈愛、憐憫，提供羊羔獻祭的救恩之路，使人的罪可以得到赦免。神的第一個拯救行動是殺了動物為亞當、夏娃做皮衣，接著亞伯也獻羊羔為祭，蒙神悅納，得了稱義的見證（來十一4）。這個救恩之道，一直傳承到挪亞，因此挪亞下方舟所做的第一件事就是築壇獻祭。獻祭贖罪這件事，藉由挪亞傳給閃，以及閃的後裔。華人祖先乃是閃的後裔，因此知道人在罪中的事實，以及獻祭贖罪的方法，並且傳承執行。人犯罪墮落又蒙神拯救赦罪的事實，不僅記載於聖經，也呈現在中國的造字，以及華人先祖的著作當中。以下分別從「中國字」、「五經」兩方面來陳述。
            </p>

            <div>
              <h3 className="font-bold text-amber-800 text-lg mb-3">第一節　中國字的救恩意義<sup>1</sup></h3>
              <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                中國字有不少與罪和救贖相關，至於這些字是如何造出的，有不同的理論或說法，其中之一是關連於創世記的故事，這有可能最接近事實。
              </p>

              <div className="mb-4">
                <span className="font-semibold text-amber-700">壹、關於犯罪的字</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  「弗」是指事字，顯示「蛇」纏繞在「樹」上，很可能是表達古蛇在分別善惡樹上。查考辭典，弗表「不、不正、不通、矯、違背」之意。正是蛇（魔鬼）在分別善惡樹上以謊言引人犯罪的情況。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「蛇」的古字是「它」，由「止」（腳跟）與「一條蛇」組成，代表傷人腳跟的蛇（創三15）。後來加上「虫」邊，成為「蛇」這個字。古人見面問安說「別來無它」，表「未遭蛇害」。亦見證了始祖與古蛇的事。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「婪」是會意字，當初伊甸園有生命樹和分別善惡樹，「女」在「二木」之下，代表夏娃貪婪吃了禁果（創三）。「禁」與「喪」前文已介紹，不再贅述。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「死」是會意字，由「歺」與「人」組成，表明死不是消失，而是遠離上帝，成為有問題的人；將來永死，也不是消失，而是永遠受苦（創二17，三23；啟二十一8）。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「男」由「田」與「力」組成，《說文》：言男用力於田也。<sup>2</sup>這正是來自上帝給犯罪之男人的定規：「你必終身勞苦才能從地裡得吃的。」（創三17）
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「罪」由「网」（罒）與「非」組成，意為罔羅所有的非。《詩經‧大雅》：「天之降罔。」「箋」解說：「天下羅罔，以取有罪。」《說文通訓定聲》：罔，假借為「辠」。非：違也，不善也，惡也，無恥過。「罪」的古字「辠」，由「自」、「辛」上下組成。「自」表鼻子、臉面，這刻劃了亞當犯罪後「汗流滿面才得糊口」（創三19）。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「宰」，《說文》：罪人在屋下執事者。辛，罪也。<sup>3</sup>不管是家宰，或是國宰，只要為人僕，就是辛苦的罪人。<sup>4</sup>可知，罪人非作奸犯科者，乃背離神而落於辛勞苦痛之人，這正是聖經謂罪人之意。創三17說其緣由：「地必為你的緣故受咒詛。」羅八22說其現象：「一切受造之物一同歎息，勞苦，直到如今。」
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「兇」，甲骨文「兇」字，是「兄」抓住一個「人」，且頭上有一個記號。這正與人類第一個殺人事件吻合——該隱為兄，殺了亞伯，上帝在他身上立記號，免得別人殺他，這記號表明他是第一位「兇手」（創四8-15）。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  「禍」，《說文》：禍，害也。神不福也。<sup>5</sup>當神不賜福，那就是禍害的開始，該隱所受的懲罰正是如此（創四10-16）。
                </p>
              </div>

              <div>
                <span className="font-semibold text-amber-700">貳、關於救贖的字</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  「初」是會意字，由「衣」與「刀」所組成。代表起初第一個救恩，是上帝拿刀將動物殺死，取其皮做衣，給亞當、夏娃穿（創三21）。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「義」是會意字，由「羊」與「我」所組成。羔羊的死及羔羊的血，覆蓋在我身上，使我成為無罪的義人（創四4；約一29）。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「美」是會意字，由「羊」與「大」（表人）所組成。羔羊的血遮蓋在人身上，使他成為聖潔美麗。贖罪的公羊本身亦為美，預表最美的基督。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「犧」是會意字，由「牛」、「羊」與「秀」、「戈」所組成。代表拿刀將秀美無瑕疵的牛羊殺了獻祭，代替我死。中國古代與聖經相同，先以羊，後加上牛，作為祭物。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「祥」是會意字，表示將羊帶到神前，為人贖罪，使人得到吉祥平安。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「祭」，《說文》：從示，以手持肉。用「手」將犧牲擺在祭壇上或上帝面前。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  「祝」，《說文》：祭主贊詞者。在壇前的主祭禱告者，是為「祝」。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-amber-800 text-lg mb-3">第二節　五經的救恩內涵</h3>
              <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                從五經（詩、書、禮、易、春秋），特別是尚書，可看見華人自夏、商、周時代就有「天討有罪」的思想，並知道「罪的後果」，及「上帝樂意赦免人的罪」，且知道赦罪與獻祭有關。
              </p>

              <div className="mb-4">
                <span className="font-semibold text-amber-700">壹、天討有罪</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  「天討有罪」語出《尚書‧皋陶謨》<sup>6</sup>。華人自古有敬天、畏天的思想，相信上帝會罪罰地上的君王、百姓。而當人受到罪罰，則當誠心悔罪、獻祭贖罪，可重新得到平安。其思想與行動，與聖經舊約極其相似。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  最明顯有商湯罪己求雨之例：「昔者湯克夏而正天下，天大旱，五年不收。湯乃以身禱於桑林，曰：『余一人有罪，無及萬夫；萬夫有罪，在余一人。無以一人之不敏，使上帝鬼神傷民之命。』於是剪其髮，磨其手，以身為犧牲，用祈福於上帝。民乃甚說，雨乃大至。」（《呂氏春秋》卷九）<sup>7</sup>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  這正像大衛的禱告與行動：「大衛禱告上帝說：『吩咐數點百姓的不是我嗎？我犯了罪，行了惡，但這群羊做了什麼呢？願耶和華——我上帝的手攻擊我和我的父家，不要攻擊你的民，降瘟疫與他們。』……大衛在那裡為耶和華築了一座壇，獻燔祭和平安祭，求告耶和華。耶和華就應允他，使火從天降在燔祭壇上。耶和華吩咐使者，他就收刀入鞘。」（代上二十一17、26-27）
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  華人用「罪」字，多指作奸犯科，平常人不願意承認自己有罪。然而古代華人似乎是更謙卑的，商湯所承認的罪，不是指作奸犯科，而是指「得罪」上帝；他也承認萬夫有罪，他願意一人承擔，這罪必也是指「得罪」上帝，或道德上的罪，而不是指須坐監牢的罪。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  關於「罪」字類似的用法，還有其他例子。例如：「有夏多罪，天命殛之……夏氏有罪，予畏上帝，不敢不正。」（《商書‧湯誓》）<sup>8</sup>這話表明：不僅地上審判官能判人有罪，上帝更能判人有罪；不僅犯法的百姓有罪，失德的君王更是有罪。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  《商書‧湯誓》另有一句話，以「罪」字表「罪罰」：「非天夭民，民中絕命；民有不若德，不聽罪。」意思是：「並非上帝無故使人夭折，使人中途斷絕生命；乃因人沒有德行，又不聽從上帝的罪罰。」<sup>9</sup>這話表明：人民的「罪」是由上帝來定義的，不僅作奸犯科是罪，連缺乏德行也是罪，而且上帝會施行罪罰，顯明在人的短命上。聖經也有相同的原則：「你若不聽從耶和華——你上帝的話……耶和華因你行惡離棄他，必在你手裡所辦的一切事上，使咒詛、擾亂、責罰臨到你，直到你被毀滅，速速地滅亡。」（申二十八15、20）
                </p>
                <p className="text-gray-700 leading-relaxed">
                  古代華人因有對上帝的信仰，而有符合聖經思想的罪觀，以下二例亦可表明。商紂時：「王曰：『嗚呼！我生不有命在天？』祖伊反曰：『嗚呼！乃罪多參在上，乃能責命于天？』」最後一句的意思是：「你的罪多多擺列在天上，豈能期望上帝給你好命？」商末年，太師形容國家情況：「天毒降災荒殷邦……罪合于一，多瘠罔詔。」（《商書‧湯誓》）意思是：「上帝重重地降下災難來滅亡殷國……君民同陷罪惡，多貧病而無處申告。」<sup>10</sup>
                </p>
              </div>

              <div className="mb-4">
                <span className="font-semibold text-amber-700">貳、罪的後果</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  關於罪的後果，除了有天災人禍之外，有一處的記載是比較特別而具體的，《周書‧呂刑》說到：「皇帝哀矜庶戮之不辜，報虐以威，遏絕苗民，無世在下。乃命重、黎，絕地天通，罔有降格。」意思是：「偉大的上帝憐憫受害民眾的無辜，用威嚴的懲罰來報復殘暴之人，滅絕苗民，使他們沒有後代。於是命令重、黎二位，斷絕地與天的相通，以後上帝就不再降臨下來了。」<sup>11</sup>這話同樣表明「天討有罪」，較特別的是實際給兩種懲罰。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  第一是「遏絕苗民」。滅商只是轉移政權而已，滅苗民則是使他們沒有後代。這在聖經有相似的例子：「約書亞用刀殺了亞瑪力王和他的百姓。耶和華對摩西說：『我要將亞瑪力的名號從天下全然塗抹了……』」（出十七13-14）「只要照耶和華——你上帝所吩咐的將這赫人、亞摩利人、迦南人、比利洗人、希未人、耶布斯人都滅絕淨盡。」（申二十17）為什麼要這樣做呢？最重要是避免後來更大的禍患，特別是避免跟他們學習憎惡的事：「免得他們教導你們學習一切可憎惡的事，就是他們向自己神所行的，以致你們得罪耶和華——你們的上帝。」（申二十18）
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  第二是「乃命重、黎，絕地天通，罔有降格」。從字面上看，是斷絕地與天的相通，上帝不再降臨。《國語》記載，觀射父另有其解釋：
                </p>
                <p className="text-gray-700 leading-relaxed mb-1">
                  昭王問於觀射父，曰：「周書所謂重、黎寔使天地不通者，何也？若無然，民將能登天乎？」對曰：「非此之謂也。古者民神不雜。……有天地神民類物之官，是謂五官，各司其序，不相亂也。……及少皞之衰也，九黎亂德，民神雜糅……民神同位。民瀆齊盟，無有嚴威。神狎民則，不蠲其為。嘉生不降，無物以享。禍災薦臻，莫盡其氣。顓頊受之，乃命南正重司天以屬神，命北正黎司地以屬民，使復舊常，無相侵瀆，是謂絕地天通。」
                </p>
                <p className="text-gray-700 leading-relaxed text-right mb-3">《國語》卷第十八《楚語下》</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  照此解釋，乃指「祭司」職分的整頓、安排，使司天、司地者互不侵瀆，而帶來好的結果。但這解釋，沒有處理「罔有降格」這句話。自古來，「降格」一直都是指「神降臨、同在，降福之意」。如「惟帝降格，饗于時夏」（〈多士〉）；「惟帝格於夏。」（〈多方〉）。<sup>12</sup>「罔有降格」是上帝不再降臨、賜福。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  再者，從上下文看，「乃命重、黎」的主詞應是「皇帝」，也就是上帝，而不是當時地上的君王。因此，人犯罪的結果，不僅有當時的災禍，也造成上帝不再降臨的結果。遠志明採取類似的解釋：「人犯了罪，天帝命重黎堵絕天路，使上下不相來往。」<sup>13</sup>在聖經也有相同的原則與處置，因為上帝是聖潔的，祂不能與罪惡共存。例如：
                </p>
                <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-1 mb-3">
                  <li>上帝打發始祖離開伊甸園，派天使把守生命樹的道路（創三24）。</li>
                  <li>該隱殺亞伯，上帝趕逐該隱離開，不能再見上帝的面（創四14）。</li>
                  <li>人犯罪益加嚴重，上帝說，我的靈不永遠住在他裡面（創六3）。</li>
                  <li>以色列人悖逆上帝，上帝不與他們同在（民十四41-43）。</li>
                  <li>大衛犯罪後，求上帝不要丟棄他，使他離開上帝的面（詩五十一11）。</li>
                </ol>
                <div className="flex flex-col items-center my-4">
                  <img src="/images/book32/ch3-ancient-city.png" alt="中國古代城市集市風貌畫作" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                  <p className="text-sm text-gray-500 mt-2 italic">圖：中國古代城市集市風貌畫作，描繪華人先祖世代生活的景象。</p>
                </div>
              </div>

              <div>
                <span className="font-semibold text-amber-700">參、上帝赦罪</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  古代華人相信上帝會罪罰地上的君王、百姓，也相信上帝會赦免君王、百姓的罪。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  商湯的禱告，孔子如此引述：「予小子履，敢用玄牡，敢昭告於皇皇后帝：有罪不敢赦，帝臣不蔽，簡在帝心。朕躬有罪，無以萬方；萬方有罪，罪在朕躬。」（《論語‧堯曰》第二十）「用玄牡」就是以公牛為贖罪祭。<sup>14</sup>商湯一人，站在有罪的百姓與上帝之間，將贖罪祭獻上，得到上帝的赦免。他所做的，正像聖經中大祭司的工作。在以色列君王中，最明顯預表基督的是大衛，因他打敗仇敵，獻祭贖罪，帶給百姓平安。商湯很像大衛，他也打敗仇敵，獻祭贖罪，帶給百姓平安，並且與大衛一樣敬畏上帝。商湯雖不能預表基督，但至少能幫助華人明白上帝赦罪之道。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  《禮記》是孔子講解《禮經》時弟子所做的筆記，其中有許多關於祭天的記載。論到獻祭給上帝的重要性，孔子說：「祀帝於郊，敬之至也。」（〈禮器〉）又說：「夫禮，先王以成天之道，以治人之情。故失之者必死，得之者必生。」（〈禮運〉）論到祭物的品質，孔子說：「是月也，乃命宰祝循行犧牲，視全具，案芻豢。瞻肥瘠，察物色，必比類，量大小，視長短，皆中度，五者備當，上帝其饗。」（〈月令〉）論到實施方式則說：「乃命太史次諸侯之列，賦之犧牲，以供皇天上帝社稷之饗。」（〈月令〉）<sup>15</sup>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  獻祭必須用沒有瑕疵的牛羊；獻祭所需之犧牲，有時由中央預備，有時由諸侯按其次序等級提供。這些與以色列人的作法相似，如經上所記：「凡從牛群或是羊群中，將平安祭獻給耶和華……所獻的必純全無殘疾的才蒙悅納。」（利二十二21）「當天，以色列的眾首領，就是各族的族長，都來奉獻。他們是各支派的首領，管理那些被數的人。他們把自己的供物送到耶和華面前，就是六輛篷子車和十二隻公牛。……」（民七2-3）<sup>16</sup>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  中國古時藉著獻祭除去人與神的隔閡，以得著上帝的福祐。其完整意義，一方面是承認上帝的主權，表達對上帝的感恩，另一方面是承認自己與百姓的罪，藉獻祭以得赦罪，如商湯所做的一樣。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  中國的禮記與希伯來聖經，都同樣要求祭物必須完全沒有瑕疵，因為這關乎羔羊基督贖罪的預表。如聖經所說：「若山羊和公牛的血……尚且叫人成聖，身體潔淨，何況基督藉著永遠的靈，將自己無瑕無疵獻給上帝，他的血豈不更能洗淨你們的心，除去你們的死行，使你們事奉那永生上帝嗎？」（來九13-14）這真理華人可能不明白，其實大部分以色列人也不明白。但歷代以來就是如此實行，將所隱含的救恩真理用獻牛羊給上帝的行動傳遞下來。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  《易經》也有赦罪的思想：「象曰：雷雨作，解，君子以赦過宥罪。」譯文：「象辭上說，雷雨交作，陰陽和暢，百物鬆懈潤澤，這是解卦的象徵，君子見天地之鬆解，則效法它，以赦免有過之人，寬恕有罪之士。」（《周易》下經）<sup>17</sup>「象曰，風雷益，君子以見善則遷，有過則改。」（《周易》下經）<sup>18</sup>這些經文的意義包含上帝赦免人，人當赦免人，以及人當悔改遷善。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  聖經中，耶穌與使徒多次教導：基於上帝赦免人，門徒要饒恕人。舉例如下：「『你們要慈悲，像你們的父慈悲一樣。』『你們不要論斷人，就不被論斷；你們不要定人的罪，就不被定罪；你們要饒恕人，就必蒙饒恕。』」（路六36-37）「並要以恩慈相待，存憐憫的心，彼此饒恕，正如上帝在基督裡饒恕了你們一樣。」（弗四32）「倘若這人與那人有嫌隙，總要彼此包容，彼此饒恕；主怎樣饒恕了你們，你們也要怎樣饒恕人。」（西三13）
                </p>
                <p className="text-gray-700 leading-relaxed">
                  上帝本性慈愛，樂意赦免有罪的人，這是先知、使徒們所知道的，也是主耶穌在十字架上親自說的：「父啊！赦免他們；因為他們所做的，他們不曉得。……」（路二十三34）古代華人也知道上帝樂意赦免有罪的人，只要人誠心到祂面前來認罪悔改；今世華人豈能不知？
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
                '中國字「弗」「蛇」「婪」「死」「男」「罪」「宰」「兇」「禍」等字，分別描繪蛇纏繞禁樹、貪婪吃禁果、遠離上帝、終身勞苦、罔羅有罪、該隱殺亞伯等情節，與創世記三、四章始祖犯罪墮落的記載緊密呼應。',
                '「初」「義」「美」「犧」「祥」「祭」「祝」等字則指向救贖：上帝以皮衣遮蓋亞當夏娃、羔羊的血使人成為義人美麗，及獻祭贖罪的行動，與創世記三21、四4及新約羔羊贖罪的教導相合。',
                '《尚書》多處記載「天討有罪」的思想，如商湯「萬夫有罪，在余一人」的認罪禱告，與大衛在代上二十一章的認罪獻祭極其相似，顯明古代華人相信上帝有審判君王百姓之罪的權柄。',
                '《周書‧呂刑》「絕地天通，罔有降格」記載了人犯罪後上帝不再降臨的懲罰，與聖經中上帝因罪離開始祖、該隱、以色列人、大衛的多次記載相合，顯明上帝的聖潔不能與罪惡共存。',
                '商湯罪己求雨、《禮記》祭天獻祭的記載，顯示古代華人相信獻祭無瑕疵的牛羊可得上帝赦罪，這預表了羔羊基督完全的贖罪祭；《易經》「赦過宥罪」的思想也與聖經饒恕人的教導相呼應。',
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
