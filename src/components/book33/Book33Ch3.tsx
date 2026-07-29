import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import PageTag from './PageTag';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book33Ch3() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <PageTag page={187} />
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-700 to-amber-700 bg-clip-text text-transparent">第三章</h1>
        <h2 className="text-xl font-semibold text-gray-700">儒家的人性觀與罪觀</h2>
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

            <div>
              <p className="text-gray-700 leading-relaxed">
                「罪」的探討，除了與「上帝觀」有關之外，也與「人性觀」有關，因為罪是人性的一部份。華人對「罪」直接的探討不多，但也有不少間接的線索，本章的探討期能進一步澄清華人對「罪」的瞭解。華人文化以儒家為主流，因此本章討論「儒家的人性觀與罪觀」。首先探討五經中的「罪」觀，因五經乃孔子整理，其中所包含的罪觀，亦屬儒家思想。接著探討孔子的人性觀與罪觀，孔子雖對人性直接討論不多，只簡單說到「性相近也，習相遠也。」（論語陽貨第十七）但有不少言論談到人的「無能」或「罪過」。儒家對人性討論較多的是孟子與荀子。孟子具體提出他的性善論：「人性之善也，猶水之就下也。」（孟子告子篇第六）荀子則主張「性惡論」：「今人之性，生而有好利焉，順是，故爭奪生而辭讓亡焉。」（荀子性惡篇）<sup>1</sup><span style={cite}>（熊公哲註釋，《荀子今註今譯》，頁482。夏維東，〈性善，性惡與原罪〉，《海外校園》40期，頁24。）</span>這是本章第三、四節要探討的。最後第五節討論《大學》、《中庸》，從其中可看見儒家人性觀與罪觀更多的內涵。
              </p>
            </div>

            <div>
              <PageTag page={188} />
              <h3 className="font-bold text-amber-800 text-lg mb-3">第一節　五經中的「罪」觀</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                本節說明中國人自夏、商、周時代就有「天討有罪」的思想，並知道「罪的後果」，及「上帝樂意赦免人的罪」，且知道這赦罪與獻祭有關。
              </p>

              <div className="mb-4">
                <span className="font-semibold text-amber-700 block">壹、天討有罪</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  「天討有罪」語出《尚書皋陶謨》<sup>2</sup><span style={cite}>（屈萬里註釋，《尚書今註今譯》，頁22。）</span>。中國自古有敬天、畏天的思想，相信上帝會罪罰地上的君王、百姓。而當人受到罪罰，則當誠心悔罪、獻祭贖罪，可重新得到平安。其思想與行動，與聖經舊約極其相似。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  最明顯有商湯罪己求雨之例：「昔者湯克夏而王天下，天大旱，五年不收。湯乃以身禱於桑林，曰，余一人有罪，無及萬夫；萬夫有罪，在余一人，無以一人之不敏，使上帝鬼神傷民之命。於是剪其髮，磨其手，以身為犧牲，用祈福於上帝。民乃甚語，雨乃大至。」（呂氏春秋卷九）<sup>3</sup><span style={cite}>（林品石註釋，《呂氏春秋今註今譯》，頁225。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  這正像大衛的禱告與行動：「大衛禱告神說，吩咐數點百姓的不是我嗎？我犯了罪，行了惡，但這群羊做了甚麼呢？願耶和華我神的手攻擊我和我的父家，不要攻擊你的民，降瘟疫與他們。……大衛在那裏為耶和華築了一座壇，獻燔祭和平安祭，求告耶和華。耶和華就應允他，使火從天降在燔祭壇上。耶和華吩咐使者，他就收刀入鞘。」（代上廿一17，26-27）
                </p>
                <p className="text-gray-700 leading-relaxed">
                  古代中國人用「罪」字，多指作奸犯科，平常人不願意承認自己有罪。然而古代中國人似乎是更謙卑的，商湯所承認的罪，必不
                </p>

                <PageTag page={189} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  是指作奸犯科，而是指「得罪」上帝；他也承認「萬夫有罪」，他願意一人承擔。這罪必也是指「得罪」上帝，或道德上的罪，而不是指需坐監牢的罪。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  關於「罪」字類似的用法，還有其他例子。例如：「有夏多罪，天命殛之，……夏氏有罪，予畏上帝，不敢不正。」（商書湯誓）<sup>4</sup><span style={cite}>（朱廷獻，《尚書研究》，頁451-452。屈萬里註釋，《尚書今註今譯》，頁49。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  這話表明：不僅地上的審判官能判人有罪，天上的上帝也能判人有罪；不僅犯法的百姓有罪，失德的君王更是有罪。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  商書湯誓另有一句話，以「罪」字表「罪罰」：「非天夭民，民中絶命；民有不若德，不聽罪。」意思是：「並非上帝無故使人夭折，使人中途斷絕生命；乃因人沒有德行，又不聽從上帝的罪罰。」<sup>5</sup><span style={cite}>（屈萬里註釋，《尚書今註今譯》，頁65。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  這話表明：人民的「罪」是由上帝來定義的，不僅作奸犯科是罪，連缺乏德行也是罪，而且上帝會施行罪罰，顯明在人的短命上。聖經也有相同的原則：「你若不聽從耶和華你上帝的話，……耶和華因你行惡離棄他，必在你手裡所辦的一切事上，使咒詛、擾亂、責罰臨到你，直到你被毀滅，速速的滅亡。」（申廿八15，20）
                </p>
                <p className="text-gray-700 leading-relaxed">
                  中國古人有類似聖經的罪的意識，乃因有對上帝的信仰，以下二例亦可表明。商紂時：「王曰，嗚呼！我生不有命在天？祖伊反曰，嗚呼！乃罪多參在上，乃能責命于天？」最後一句的意思是：「你的罪多擺列在天上，豈能期望上帝給你好命？」<sup>6</sup><span style={cite}>（屈萬里註釋，《尚書今註今譯》，頁67。）</span>商末年，太師形容國家情況：「天毒降災荒殷邦，……罪合于一，多瘠
                </p>

                <PageTag page={190} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  周詔。」（商書湯誓）意思是：「上帝重重地降下災難來滅亡殷國，……君民同陷罪惡，多貧病而無處申告。」<sup>7</sup><span style={cite}>（屈萬里註釋，《尚書今註今譯》，頁69。）</span>
                </p>
              </div>

              <div className="mb-4">
                <span className="font-semibold text-amber-700 block">貳、罪的後果</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  關於罪的後果，除了有天災人禍之外，有一處的記載是比較特別而具體的，周書呂刑篇說到：「皇帝哀矜庶戮之不辜，報虐以威，遏絕苗民，無世在下。乃命重黎，絕地天通，罔有降格。」意思是：「偉大的上帝憐憫受害庶民眾的無辜，用威嚴的懲罰來報復暴虐之人，滅絕苗民，使他們沒有後代。於是命令重、黎二位，斷絕地與天的相通，以後天神就不再降臨下來了。」<sup>8</sup><span style={cite}>（屈萬里註釋，《尚書今註今譯》，頁177-178。）</span>這話同樣表明「天討有罪」，較特別的是實際給兩種懲罰：
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  第一是使苗民沒有後代。這與滅商不同，滅商只是轉移政權而已，並未使他們沒有後代。這在聖經有相似的例子，例如：「約書亞用刀殺了亞瑪力王和他的百姓。耶和華對摩西說，我要將亞瑪力的名號從天下全然塗抹了。」（出十七13~14）「只要照耶和華你上帝所吩咐的將這赫人、亞摩利人、迦南人、比利洗人、希未人、耶布斯人都滅絕淨盡。」（申二十17）為什麼要這樣做呢？除了是懲罰外，最重要是避免後來更大的禍患。例如，避免苗民興起殘暴的惡勢力。在聖經，則提到：「免得他們教導你們學習一切可憎惡的事，就是他們向自己神所行的，以致你們得罪耶和華你們的神。」（申二十17-18）是避免跟他們學習憎惡的事。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  第二是「乃命重黎，絕地天通，罔有降格」。從字面上看，是斷絕地與天的相通，上帝不再降臨。《國語》記載，觀射父另有其解釋：
                </p>

                <PageTag page={191} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  昭王問於觀射父，曰：「周書所謂重、黎定使天地不通者，何也？若無然，民將能登天乎？」對曰：「非此之謂也。古者民神不雜，……有天地神民類物之官，是謂五官，各司其序，不相亂也。……及少皞之衰也，九黎亂德，民神雜糅，……民神同位，民瀆齊盟，無有嚴威，神狎民則，不蠲其為，嘉生不降，無物以享，禍災薦臻，莫盡其氣。顓頊受之，乃命南正重司天以屬神，命北正黎司地以屬民，使復舊常，無相侵瀆，是謂絕地天通。」（國語卷第十八楚語下）<sup>9</sup><span style={cite}>（《國語》，網路資料http://www.chinapage.com/big5/history/koyo3.htm）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  照此解釋，乃指「祭司」職分的整頓、安排，使司天、司地者互不侵瀆，而帶來好的結果。但這解釋，沒有處理「罔有降格」這句話。自古來，「降格」一直都是指「神降臨、同在，降福之意」。如「惟帝降格，嚮于時夏」（多士）；「惟帝降格於文王」（多方）。<sup>10</sup><span style={cite}>（屈萬里註釋，《尚書今註今譯》，頁132,149。）</span>「罔有降格」是上帝不再降臨、賜福。再者，從上下文看，「乃命重黎」的主詞應是「皇帝」，也就是上帝，而不是當時地上的君王。因此，人犯罪的結果，不僅有當時的災禍，也造成上帝不再降臨的結果。遠志明採取類似的解釋：「人犯了罪，天帝命重黎堵絕天路，使上下不相來往。」<sup>11</sup><span style={cite}>（遠志明，《神州懺悔錄─上帝與五千年中國》，頁6。）</span>在聖經也有相同的原則與處置，因為上帝是聖潔的，祂不能與罪惡共存。例如：
                </p>
                <p className="text-gray-700 leading-relaxed mt-2 mb-1">（1）上帝打發祖先離開伊甸園，派天使把守生命樹的道路。（創三24）</p>
                <p className="text-gray-700 leading-relaxed mb-1">（2）該隱殺亞伯，上帝趕逐該隱離開，不能再見上帝的面。（創四14）</p>
                <p className="text-gray-700 leading-relaxed">（3）人犯罪益加嚴重，上帝說，我的靈不永遠住在他裡面。</p>

                <PageTag page={192} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-1">（創六3）</p>
                <p className="text-gray-700 leading-relaxed mb-1">（4）以色列人悖逆上帝，上帝不與他們同在。（民十四41~43）</p>
                <p className="text-gray-700 leading-relaxed">（5）大衛犯罪後，求上帝不要丟棄他，使他離開上帝的面。（詩五一11）</p>
              </div>

              <div className="mb-4">
                <span className="font-semibold text-amber-700 block">參、上帝赦罪</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  中國古人相信上帝會罪罰地上的君王、百姓，也相信上帝會赦免君王、百姓的罪。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  商湯的禱告，孔子如此引述：「予小子履，敢用玄牡，敢昭告於皇皇后帝：有罪不敢赦，帝臣不蔽，簡在帝心。朕躬有罪，無以萬方；萬方有罪，罪在朕躬。」（論語‧堯曰第二十）「用玄牡」就是以公牛為贖罪祭。<sup>12</sup><span style={cite}>（謝冰瑩等編譯，《新譯四書讀本》，頁306。毛子水註釋，《論語今註今譯》，頁300。）</span>商湯一人，站在有罪的百姓與上帝之間，將贖罪祭獻上，得到上帝的赦免。他所做的，正像聖經中大祭司的工作。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  在以色列君王中，最明顯預表基督的是大衛，因他打敗仇敵，獻祭贖罪，帶給百姓平安。在中國歷史中，商湯的事蹟最像大衛，他也打敗仇敵，獻祭贖罪，帶給百姓平安，並且與大衛一樣敬畏上帝。中國歷史人物談不上預表基督，但在闡述救恩真理時，若以商湯為例，實可幫助華人知道「認罪、贖罪」中國自古就有，且能加深體會基督「勝罪、贖罪」的救恩。<sup>13</sup><span style={cite}>（張人海，《遺統‧基督‧福音》，頁97-98。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  易經也有赦罪的思想：「象曰：雷雨作，解，君子以赦過宥罪。」譯文：「象辭上說：雷雨交作，陰陽和暢，百物鬆懈潤澤，這是解卦的象徵，君子見天地之鬆解，則效法它，以赦免有過之
                </p>

                <PageTag page={193} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  人，寬恕有罪之士。」（周易下經）<sup>14</sup><span style={cite}>（南懷瑾、徐芹庭註釋，《周易今註今譯》，頁257。）</span>「象曰：風雷益，君子以見善則遷，有過則改。」（周易下經）<sup>15</sup><span style={cite}>（南懷瑾、徐芹庭註釋，《周易今註今譯》，頁268。）</span>這包含上帝赦免人，人赦免人，以及人悔改還善。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  聖經中，耶穌與使徒多次教導：基於上帝赦免人，門徒要饒恕人。舉例如下：「你們饒恕人的過犯，你們的天父也必饒恕你們的過犯；你們不饒恕人的過犯，你們的天父也必不饒恕你們的過犯。」（太六14~15）「你們要慈悲，像你們的父慈悲一樣。你們不要論斷人，就不被論斷；你們不要定人的罪，就不被定罪；你們要饒恕人，就必蒙饒恕。」（路六36-37）「並要以恩慈相待，存憐憫的心，彼此饒恕，正如上帝在基督裡饒恕了你們一樣。」（弗四32）「倘若這人與那人有嫌隙，總要彼此包容，彼此饒恕；主怎樣饒恕了你們，你們也要怎樣饒恕人。」（西三13）
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  孟子肯定周武王所做：「書曰，天降下民，作之君，作之師。惟曰，其助上帝，寵之四方，有罪無罪惟我在，天下曷敢有越厥志。一人橫行于天下，武王恥之；此武王之勇也。而武王亦一怒而安天下之民。」（梁惠王章句下）表明上天將定罪、赦罪的權柄給予祂所揀選的人。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  主耶穌也將定罪、赦罪的權柄給了教會。經文如下：
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  「倘若你的弟兄得罪你，你就去，趁著只有他和你在一處的時候，指出他的錯來。他若聽你，你便得了你的弟兄；他若不聽，你就另外帶一兩個人同去，要憑兩三個人的口作見證，句句都可定準。若是不聽他們，就告訴教會；若是不聽教會，就看他像外邦人和稅吏一樣。我實在告訴你們，凡你們在地上所捆綁的，在天上也
                </p>

                <PageTag page={194} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  要捆綁；凡你們在地上所釋放的，在天上也要釋放。」（太十八15-18）「你們赦免誰的罪，誰的罪就赦免了；你們留下誰的罪，誰的罪就留下了。」（約二十23）
                </p>
                <p className="text-gray-700 leading-relaxed">
                  上帝本性慈愛，樂意赦免有罪的人，這是先知、使徒們所知道的，也是主耶穌在十字架上親自說的：「父啊！赦免他們；因為他們所做的，他們不曉得。」（路廿三34）古代華人也知道上帝樂意赦免有罪的人，只要人誠心到祂面前來認罪悔改；今世華人豈能不知？
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-amber-800 text-lg mb-3">第二節　孔子的人性觀與罪觀</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「仁」為孔子之道的中樞，為君子之道的主要德目。<sup>16</sup><span style={cite}>（陳幸雄，《從基督教人性觀對孟荀人性論的觀點賞析》，頁12）</span>他說：「君子道者三，我無能焉：仁者不憂，知者不惑，勇者不懼。」（憲問第十四）孔子以「仁」自勉、勉人，但他承認「我無能焉」，他對人性的看法其實是偏向悲觀的。以下從孔子之言分別討論「人皆有過的描述」、「個人當如何面對罪過」、「個人當如何勝過罪過」、「社會性的罪過」等主題。
              </p>

              <div className="mb-4">
                <span className="font-semibold text-amber-700 block">壹、人皆有「過」的描述</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  孔子少用「罪」，而多用「過」，來形容人的不正常、不正確行為。但孔子所說的「過」，其實也都屬於聖經所說的「罪行」。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  子曰：「人之過也，各於其黨。觀過，斯知仁矣。」（里仁第四）這話表明：人都有過犯，但所犯的過各有不同。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  「子曰，吾未見有好德如好色者也。」（子罕第九）這話表
                </p>

                <PageTag page={195} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  明：好色之人很多，但好德之人則可說是不存在的。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「子曰：善人，無不得而見之矣！得見有恆者斯可矣！」（述而第七）這話表明：世上看不見善人（無罪過之人），能看見有恆心的人就不錯了。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  上列言詞是說明「人皆有過」，下面另有言詞是強調「沒有聖人、善人、仁人」，例如：
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「子曰：聖人，無不得而見之矣！得見君子者，斯可矣。子曰：善人，無不得而見之矣！得見有恆者，斯可矣。」（述而第七）
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「子曰：民之於仁也，甚於水火。水火，吾見蹈而死者矣；未見蹈仁而死者也。」（衛靈公第十五）這正如聖經所說：「沒有義人，一個也沒有。……沒有行善的，一個也沒有。」（詩十四1~3，羅三11~12）
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  孔子承認：「德之不修，學之不講，聞義不能徙，不善不能改，是吾憂也。」（述而第七）至聖先師尚且憂愁自己「不善不能改」，一般人如何呢？又說：「文莫，吾猶人也，躬行君子，則吾未之有得！」（述而）意思是：「學文之事，尚可及人；作身體力行的君子，我還沒能做到。」<sup>17</sup><span style={cite}>（謝冰瑩等編譯，《新譯四書讀本》，頁150）</span>又說：「若聖與仁，則吾豈敢？抑為之不厭，誨人不倦，則可謂云爾已矣！」（述而）<sup>18</sup><span style={cite}>（謝冰瑩等編譯，《新譯四書讀本》，頁150）</span>從這些話可看到孔子的謙卑，也看到人性普遍敗壞的事實。<sup>19</sup><span style={cite}>（鄭國治，《中華文化與聖經教訓的對比》，頁138）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  還有「禮記」中孔子的話：「子曰：無欲而好仁者，無畏而惡不仁者，天下一人而已矣。」（禮記表記）<sup>20</sup><span style={cite}>（王夢鷗註譯，《禮記今註今譯下冊》，頁849）</span>「子曰：中心安仁
                </p>

                <PageTag page={196} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  者，天下一人而已矣。」（禮記表記）<sup>21</sup><span style={cite}>（王夢鷗註譯，《禮記今註今譯下冊》，頁852）</span>這話相似於耶穌所說：「只有一位是你們的師尊，就是基督。」（太廿三10）「你為什麼以善事問我呢？只有一位是善的。」（太十九17）孔子說的一人原意當不是指耶穌（但在真理上的確只有耶穌一人符合），孔子強調的是仁人難尋。這就印證了罪的普遍性，與聖經的基調是相合的。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  由這些言論可看出，孔子及其學生都相當清楚聖經中「人皆是人，皆常有過」的事實，只是所用詞句與聖經不同。這種不同，部分原因是翻譯的問題，聖經中所說的「罪」，有不少地方更適合翻譯作「過」，若這樣翻譯，即可看見孔子與聖經的說法是一致的。
                </p>
              </div>

              <div className="mb-4">
                <span className="font-semibold text-amber-700 block">貳、個人當如何面對「過」</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  基本上，孔子並不花時間討論人有沒有過錯，而是直接認定人都有過錯，並進一步說明應當如何面對過錯。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  他說：「過，則勿憚改。」（學而第一，子罕第九）意思是：「有過錯，不要畏難去改。」<sup>22</sup><span style={cite}>（毛子水註釋，《論語今註今譯》，頁6-7,139）</span>又說：「過而不改，是謂過矣。」（衛靈公第十五）意思是：「有過錯而不去改，那就真是過錯了。」<sup>23</sup><span style={cite}>（毛子水註釋，《論語今註今譯》，頁248）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「子貢曰，君子之過也，如日月之食焉；過也，人皆見之；更也，人皆仰之。」（子張第十九）孔子的學生子貢所言，基本上也合於孔子的思想。強調「知過、改過」的重要。有過，可原諒；最重要是能改過。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  「子曰，已矣乎！吾未見能見其過而內自訟者也。」（公冶長第五）內自訟乃內心自責悔悟改過之意，此為面對過犯的正確態
                </p>

                <PageTag page={197} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  度。孔子說，這樣的人他沒見到。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  孔子也引用先賢湯王的話，表明謙卑承認罪的重要性：「湯曰，予小子履，敢用玄牡，敢昭告于皇皇后帝：有罪不敢赦；帝臣不蔽。簡在帝心。朕躬有罪，無以萬方。萬方有罪，罪在朕躬。」（論語堯曰第二十）就像大衛王犯罪，先知指出他的罪過，他立即認罪悔改。（撒下十二13）
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  孔子說：「德之不修，學之不講，聞義不能徙，不善不能改，是吾憂也。」（述而第七）這也是對於「過」的正確態度，憂愁自己「不善不能改」，才可能改過遷善。正如保羅所說：「依著神的意思憂愁，就生出沒有後悔的懊悔來，以致得救。」（林後七9）
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  孔子說：「人之過也，各於其黨。觀過，斯知仁矣。」（里仁第四）「觀過」就是看見、承認、觀察、省思自己的過犯，這樣做之後才能知道「仁」。這話正如約翰所說：「我們若認自己的罪，神是信實的，是公義的，必要赦免我們的罪，洗淨我們一切的不義。」（約壹一9）
                </p>
                <p className="text-gray-700 leading-relaxed">
                  聖經強調「認罪、悔改」的重要性，這與「論語」中孔子對於「知過、改過」的教訓彼此之間有很強的呼應。孔子不否認人都會犯過，但強調「知過能改，善莫大焉。」正如耶穌對有罪之人所說：「你已經痊癒了，不要再犯罪。」（約五14）「我也不定你的罪。去吧！從此不要再犯罪了。」（約八11）並且在講悔改的比喻時說：「一個罪人悔改，在天上也要這樣為他歡喜。」〈路十五7〉
                </p>
              </div>

              <div className="mb-4">
                <span className="font-semibold text-amber-700 block">參、個人當如何勝過「罪過」</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  如何勝過「罪」，是聖經與孔子都關心的主題。「子曰，非禮勿視，非禮勿聽，非禮勿言，非禮勿動。」（顏淵第十二）這與耶穌的登山寶訓，採取了幾乎相同的高標準。正如耶穌所說：「凡
                </p>

                <PageTag page={198} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  看見婦女就動淫念的，這人心裡已經與他犯姦淫了。」（太五28）
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「凡人所說的閒話，當審判的日子，必要句句供出來。」（太十二36）孔子也說：「君子有三戒，少之時，血氣未定，戒之在色；及其壯也，血氣方剛，戒之在鬥；及其老也，血氣既衰，戒之在得。」（季氏第十六）這正如約翰所說：「不要愛世界和世界上的事。人若愛世界，愛父的心就不在他裡面了。因為凡世界上的事，就像肉體的情慾、眼目的情慾，並今生的驕傲，都不是從父來的，乃是從世界來的。」（約壹二15~16）
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  勝過「罪」的第一個秘訣，就是把心思、意念、言語等一般人看為輕的「罪過」，看為嚴重，謹慎地防範與處理。而能避免引發後續行動上更明顯的「罪過」及傷害性更大的「罪過」。
                </p>
                <p className="text-gray-700 leading-relaxed mb-1">
                  對上帝的信仰能否幫助一個人減少過犯呢？孔子的經驗與教導都給予正面的答案。例如他說：
                </p>
                <p className="text-gray-700 leading-relaxed mb-1">
                  「君子有三畏：畏天命，畏大人，畏聖人之言。」（季氏第十六）
                </p>
                <p className="text-gray-700 leading-relaxed mb-1">
                  「神莫大於道化，福莫長於無咎。」（勸學第六十四）
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「獲罪於天，無所禱也。」（八佾第三）
                </p>
                <p className="text-gray-700 leading-relaxed mb-1">
                  這三句話正如以下三處聖經所說：
                </p>
                <p className="text-gray-700 leading-relaxed mb-1">
                  「敬畏耶和華，甚喜愛他命令的，這人便為有福。」（詩一一一2）
                </p>
                <p className="text-gray-700 leading-relaxed mb-1">
                  「不從惡人的計謀，不站罪人的道路，不坐褻慢人的座位，唯喜愛耶和華的律法，晝夜思想，這人便為有福。」（詩一1~2）
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「耶和華啊！早晨你必聽我的聲音，早晨我必向你陳明我的心意，並要儆醒。因為你不是喜悅惡事的神，惡人不能與你同居。」（詩五3~4）
                </p>
                <p className="text-gray-700 leading-relaxed">
                  此外，子貢欲去告朔之餼羊，子曰：「賜也！爾愛其羊，我愛其禮。」（論語八佾第三）<sup>24</sup><span style={cite}>（謝冰瑩等編譯，《新譯四書讀本》，頁94。毛子水註釋，《論語今註今譯》，頁35-36）</span>這也表達了孔子敬天的信仰，使他因
                </p>

                <PageTag page={199} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  此更能過討神喜悅的生活。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  孔子沒有講原罪，也沒有說信上帝得救贖；但他對人性的觀察瞭解與聖經是相和的，他對上帝的敬畏也幫助了他的德行。孔子對上帝的信仰，以及實際應用到生活，雖與新約時代的聖徒不能相比，但比起舊約的以色列百姓，並不稍遜。
                </p>
              </div>

              <div className="mb-4">
                <span className="font-semibold text-amber-700 block">肆、社會性的「罪過」</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-1">
                  有一次，孔子參加了年末的祭天儀式，登高遠望，不禁感慨萬千，對弟子說：
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「大道之行也，與三代之英，丘未之逮也，而有志焉。大道之行也，天下為公，選賢與能，講信修睦。故人不獨親其親，不獨子其子，使老有所終，壯有所用，幼有所長，矜寡孤獨癈疾者，皆有所養。男有分，女有歸。貨惡其棄於地也，不必藏於己；力惡其不出於身也，不必為己。是故，謀閉而不興，盜竊亂賊而不作，故外戶而不閉，是謂大同。今大道既隱，天下為家，各親其親，各子其子，貨力為己，大人世及以為禮。城郭溝池以為固，禮義以為紀；以正君臣，以篤父子，以睦兄弟，以和夫婦，以設制度，以立田里，以賢勇知，以功為己。故謀用是作，而兵由此起。禹湯文武成王周公，由此其選也。此六君子者，未有不謹於禮者也。以著其義，以考其信。著有過，刑仁講讓，示民有常。如有不由此者，在勢者去，眾以為殃，是謂小康。」<sup>25</sup><span style={cite}>（王夢鷗註譯，《禮記今註今譯上冊》，頁362-364）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  孔子用思慕的心情，回想過去堯、舜時代的光榮，那是一個充滿智慧、仁愛的黃金時代。<sup>26</sup><span style={cite}>（羅理，《中國及以色列古先知的訓言與宗教》，胡曾聖譯，頁77）</span>如同以色列人回想大衛時代一樣（王下十四3，詩一三二10~18）。按照孔子的觀察，「大道之行」與
                </p>

                <PageTag page={200} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  「大道既隱」的差別，主要在於「天下為公」與「天下為家」。「天下為公」的特色可歸納為耶穌所教導的「愛人如己」（太廿39），「天下為家」的特色可歸納為「人人為己」。社會性的「罪過」因「愛人如己」而減少，因「人人為己」而增多。因應之道乃是「城郭溝池以為固，禮義以為紀」，但守禮者少，就難免「謀而作，而兵由此起」。由此可見，當人離開神之後，罪惡就入了世界，而若能「盡心、盡性、盡意愛神」（太廿二37），使大道實行，產生「愛人如己」的果效，社會可免於罪惡氾濫。但若不愛神、敬神，則人人為己，就難免罪惡氾濫了。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  孔子作春秋，也表明社會性的罪。孟子寫：「世衰道微，邪說暴行有作。臣弒其君者有之，子弒其父者有之。孔子懼，作春秋。」<sup>27</sup><span style={cite}>（謝冰瑩等編譯，《新譯四書讀本》，頁451）</span>孔子懼怕什麼？孔子懼怕如此一個淫亂敗壞的世代，罪行邪惡遍地流行，甚至還有繼續氾濫下去的趨勢；孔子懼怕整個中國將被罪行氾濫所吞噬、淹沒。<sup>28</sup><span style={cite}>（張人海，《護統‧基督‧福音》，頁103）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  司馬遷在《史記‧孔子世家》中說：「作春秋……以繩當世，貶損之義，後有王者舉而開之，春秋之義行，則天下亂臣賊子懼焉。」<sup>29</sup><span style={cite}>（馬持盈註，《史記今註》，頁1994）</span>但他又在&lt;自序&gt;中引董仲舒的話說，《春秋》之旨在於「貶天子，退諸侯，討大夫」<sup>30</sup><span style={cite}>（馬持盈註，《史記今註》，頁3355）</span>。可以說明《春秋》批判對象並不限於「亂臣賊子」，「無道」的「天子」也同樣在孔子「口誅筆伐」的範圍之內。歷代皇帝對於史官的畏憚便是《春秋》確曾為中國人維護正義的顯證，而歷代中國人其實也同樣要按著「春秋之義」受審判。<sup>31</sup><span style={cite}>（張人海，《護統‧基督‧福音》，p.128）</span>
                </p>
              </div>

              <div>
                <PageTag page={201} />
                <p className="text-gray-700 leading-relaxed mt-2">
                  孔子逝世之前歎而歌曰：「太山壞乎，梁柱摧乎，哲人萎乎。」又接著說：「天下無道久矣，莫能宗子。」（史記孔子世家）意思是：「泰山崩塌了，梁柱摧毀了，哲人倒了。……天下失去常道已經很久了，世人都不能遵循我的治平理想。」<sup>32</sup><span style={cite}>（馬持盈註，《史記今註》，頁1995-1996）</span>孔子的哀嘆，發自「大道既隱」之後。中國往後二千多年則更加困頓，因為連「大道既隱」的事實都無人知曉了。近代的中國，想要藉由「民主」與「科學」改變中國、提升中國，卻不知唯一藥方乃是孔子求之而不可得的「大道之行」。於今之計，唯有接受「太初有道」「道成肉身」的那位耶穌基督，作我們的救主，才能扭轉乾坤，轉敗為勝，使孔子的理想有實現的可能。
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-700">
              本章第三節「孟子的人性觀與罪觀」及後續章節尚在建置中，將陸續更新。
            </div>

          </div>
        )}
      </div>

    </div>
  );
}
