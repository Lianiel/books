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

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-700">
              本章第二節「孔子的人性觀與罪觀」及後續章節尚在建置中，將陸續更新。
            </div>

          </div>
        )}
      </div>

    </div>
  );
}
