import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Compass, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book42Ch1() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-800 to-orange-900 bg-clip-text text-transparent">緒論</h1>
        <h2 className="text-xl font-semibold text-gray-700">台灣宣教策略之再思</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-amber-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">研究的動機與目的</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                耶穌說：「人子來，為要尋找拯救失喪的人。」（路十九10）祂更賦予門徒大使命：「你們要去使萬民作我的門徒，奉父子聖靈的名給他們施洗，凡我所吩咐你們的，都教訓他們遵守，我就常與你們同在，直到世界的末了。」（太廿八19～20）教會增長之父馬蓋文博士（Donald A. McGavran）說：「神不會喜悅祂的僕人不去尋找失喪的羊，而作些『屬靈』的工作。事實上，尋找失喪的人，使他們與神和好的事，是最屬靈的事。」<sup>1</sup><span style={cite}>（McGavran, Understanding Church Growth, p.33）</span>那麼我們當如何尋找失喪的人，使他們作主耶穌的門徒呢？
              </p>
              <p className="text-gray-700 leading-relaxed">
                台灣教會自一八六五年英國長老宣教師馬雅各醫生（James Laidlaw Maxwell, 1836—1921）來到台南開始宣教，到今日一九九五年已經一百三十年，其間有許多轟轟烈烈的宣教史蹟，早期前輩拓荒、奉獻、犧牲、忍受逼迫的精神更是可歌可泣，令人感動；然而回顧台灣一百三十年的宣教，所得成效卻是相當有限。根據台灣政府統計，自一九七八年以來，台灣的寺廟密度已高居世界第一位，每二‧二平方公里，每千人就有一座廟，遠超過佛教國家泰國，而這幾年異教廟宇之快速成長更超過任何一個時代。反觀教會之發展真是相形見絀，依據「華人宣教中心」與「基督福音」一九八三、八四年的初步調查，全台灣的三百五十六個鄉鎮當中，將近一半的鄉鎮，是處在「幾無福音」的狀態中，其中有二十個鄉鎮全無教會，有八十二個鄉鎮僅有一間教會，有六十二個鄉鎮只有兩間教會，這一百六十四個鄉鎮的基督徒佔其對應人口的比例是百分之零點一八。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">台灣宣教策略之再思</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「基督教歸主協會」一九九二年「台灣地區教會的趨勢調查報告」指出，至一九九一年底，台閩地區共有基督教會二千九百二十七所，全部會友人數四十四萬三千九百六十人，佔總人口數的二‧一八％，比一九八九年的二‧二五％略為降低，趕不上人口成長的比例。為何台灣基督徒的比例逐年下降呢？難道教會沒有在傳福音嗎？自從七十年代開始，「教會增長」的口號響徹雲霄，九十年代「公元二千年福音運動」在台灣各地如火如荼展開，台灣教會並且共同擬訂公元二千年要達到「二百萬信徒，一萬間教會，二百位海外宣教士」的目標。根據資料顯示，自八三年到十年之間，台灣教會共舉行了四十四場大型聯合性的佈道會，尤其一九九二年一年內就有十二場。特別最近這幾年，世界知名講員更是輪流到台灣主領聚會，顯然，台灣教會並非沒有致力於宣教工作，然而為何成效仍舊那麼有限呢？
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                傳統大型佈道會有其特殊效果，例如：喚起基督徒對佈道的關心，叫教會中未得救的人得著救恩，許多屬靈的團體因籌備佈道會而成立，為佈道會的需要開辦實際的訓練課程等。然而大型佈道會亦有其不足、欠缺的地方，例如常是知名講員名度的宣傳，遠多於對福音信息及耶穌基督的介紹；偏重五光十色的節目，而真正的福音信息卻只點綴其中。且不可否認的，大型佈道會有日漸式微的趨勢，連葛理翰都有這種看法，那麼，什麼是引人歸主的最佳途徑呢？繼葛理翰之後的國際知名大佈道家，有「南美洲葛理翰」之稱的阿根廷籍牧師路易士包樂（Luis Palau）認為大型佈道會用的是「散彈槍」佈道法，但在小組個人談道中用的卻是「來福槍」，可以針對成員的需要，傳講信息。英國教會團結研究者（Researchers for Churches Together in England）調查報告顯示，只有百分之四的人是藉著佈道會信主，其餘大都經由和友人個人談道的結果。事實上，好的佈道策略上，最實際有效的方法莫過於個人談道，因為基督徒的福音若沒有通過基督徒直接接觸到人的需要，那麼一切的運動都將歸於徒勞。很遺憾，由於這個最有效的福音策略一直被忽略，很少教會看重個人談道的栽培訓練，以致少有人能上福音戰場，如此福音怎能廣傳，教會如何增長呢？
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">本土化個人談道的必要</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                個人佈道是初代教會增長的途徑，據歷史學家亞米他之（Armitage）估計，第一世紀末期，信徒已經從一百二十人增至約五十萬人。教會快速地增長，並非賴於宏偉大狀麗的建築物及多姿多彩的大型佈道會；他們快速增長的原因，是信徒各盡其職，「往各處去傳道」（徒八4）。此外，眾信「心裡尊主為聖」，有人問及心中盼望的緣由，就「常作準備，以溫柔敬畏的心回答人」（彼前三15）。的確，不是太多基督徒有潛質和機會參與個人佈道，但所有基督徒都應成為耶穌基督的門徒（Evangelist），但卻必須要成為「佈道人」（Evangelizer）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                如何進行個人談道呢？佈道的方法因人而異，絕非一成不變，但無論何人，總要有一個適合的方法。英國牛津阿爾德提斯教牧師邁可格林（Michael Green）在一九八三年荷蘭阿姆斯特丹旅行佈道者會議的演講中說：「脫下基督徒的固有心態，去跟世俗人做朋友吧！每個人的需要不一樣，但不管他是那一種人，我們都可以找到耶穌跟他有關聯的地方。」針對需要，對症下藥，才能達到病除。前印尼聖道神學院院長黃彼得牧師說：「宣教的方法是會變的，宣教的原則是不變的；宣教士的膚色是會變的，宣教士的信息是不變的。我們華人教會要負起向普世傳的使命，對宣教與文化的各個問題，實要有具體深刻的認識，然後靠聖靈的指導，訂出有效的方法，將福音紮根在各個不同的文化中，而引導該文化的人民歸信基督，得著永生。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                然而，很遺憾，福音傳入中國、台灣已一百多年，至今仍舊缺少一套有系統的本土化個人談道方法，以致曾在中國宣教多年的內地會宣教師賈禮榮博士很慨嘆地說：「在第三世界所教導的個人佈道課程，幾乎都是西方神學院所用的，很少宣教士按著當地文化和國民真正的需要而編寫個人佈道法。」目前華人教會的談道資料大都還是來自西方教會、且常是灌輸一套既定內容，而非針對談道對象的需要、問題與興趣，因此，談道者與談道對象常無接觸點，以致無法達到福音的預期效果。教會不是為存在而存在，教會之存在是為向外宣教，教會的福音只有一個，「因為天下人間，沒有賜下別的名，我們可以靠著得救。」（徒四12）然而在向外傳揚這永不改變的信息時，卻需要方法。今天華人教會所要努力的，不應再是西方的移植（transplant），而是要尋求本土的根植（indigenization）。在這道切需要廣傳福音資料的情況下，本文乃試圖根據台灣背景的華人心理、需要、觀念、文化，整理出一套本土化的談道方法與內容，來幫助有志於個人談道的基督徒達到更有效的談道效果；而個人談道的目的不只在於引人決志歸主，更重要的是，帶進教會栽培造就，使之成為門徒、進而在世界各地、各種文化中繼續建堂立教會，完成主耶穌所託負的大使命。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">研究的定義與範圍</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                本土化談道是就「本色化神學」對個人談道做一探討。本色化神學顧名思義，就是把神學的思考方向植根在本土——斯土斯民。宋泉盛牧師認為，一個對時代因其特殊性，而宣揚信息的福音，便是福音的本土化，努力從事這個表現的神學，便是「本色化神學」。王憲治牧師說：「情境神學（Contextual Theology）有別於本色神學（Indigenous Theology），前者考慮整個情境，包括政治、歷史、社會、文化、宗教之整體性；後者則偏重文化象徵與宗教的關係。」王崇堯牧師亦認為：「本色化神學是較傾向文化傳統的層面去應答福音，實況化神學（亦名情境神學）它不只是考慮某一脈絡的文化傳統問題，而且是深入世俗、科技、經濟、政治、人權、公義等問題，重估各情況的特殊性和先知性；並通過紮根和參與於歷史的情境，來和不帶有真正的面遇、相對。」本文所要探討的乃是屬於本色化神學的範疇。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                有一代表華人教會本色化運動的立場：本色化不是復古，效法傳統的風俗習慣；亦不是拒絕與西方合作的仇外主義，盲目地拋棄西方基督教悠長的屬靈傳統，勉強把基督教和中國文化結合起來，圖謀建立一種非驢非馬的新宗教信仰。基督教信仰必須在一定的文化環境中表達出來，但它並不能脫離文化而獨立。而神學是教會將上帝的啟示活現於時代處境的一種活動；是教會與一具體的時代處境相遇時，履行上帝的使命而在這時代作出的反應之活動。當教會使用語言來表達上帝的啟示時，教會便立刻與那語言所蘊涵的文化生命體系——其意義的意識結構（Logic-Meaningful Structure）相遇。過去我們所接受的基督教信仰，可以說全然建立在西方傳統神學的認識上，並沒有植根在本土上；早期宣教士把他們自己的信仰的外衣，強加給我們，我們就以此外衣為信仰的依據，卻從未思及此外衣是否合身。本色化神學就是要脫去此外衣，改製一套合身舒適的新衣，但不要求全脫去原有的新衣蔽滿足，而更要把文化的本質，與耶穌基督的救恩結合，而產生一個新的合適我們的信仰與文化背景的神學來。換言之，本色化神學不但是一種表現，也是一種更新，是要以耶穌基督為信仰生活之核心。因此，本色化神學，不但要固持基督教信仰，更以本有的文化為媒介，來反應時代的需要。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                本文所探討的「本土化談道法」，不是要與文化妥協，遷就文化來改變福音的本質，而是要藉著與中國文化、台灣民間信仰的相遇對話，堅持基督的信仰，以台灣背景的華人所能理解的語言來闡揚不變的真理，這也正是保羅談道策略「向什麼樣的人，我就作什麼樣的人」的真義。我們所努力的不是「基督中國化」或「基督台灣化」，而是「台灣福音化」、「中國福音化」。本文是針對在台灣環境背景下成長的百姓，包括從台灣移民海外的華人，所作的研究。本文題目「台灣本土化談道的探討」（An Inquiry into the Indigenized Approach for Personal Evangelism in the Taiwanese Context），在這裡「本土化」與「本色化」的原文Indigenization直譯成中文為「土產的」、「土生的」，所以本色化即本土化之意。本文採用通俗的「本土化」，但引用資料除外，且為使文章實質的本土化，本文力求口語化，避免使用艱深的神學術語與概念，以期人人看得懂。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">研究的方法與內容</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                本文所要探討的主題有：一、本土化談道的神學基礎；二、本土化談道的福音內容；三、本土化談道的屬靈爭戰。唐崇榮牧師說：「只有一時的火熱，或是只致力於佈道、宣道，卻沒有神學教義基礎的教會，一定是脆弱落伍的；反之，只有神學而沒有傳福音的教會，也是死的。」本文乃根據聖經神學的基礎、中國文化的傳統、台灣百姓的家的宗教心理、民間信仰的背景、除異教的因素、以及筆者個人實際談道的經驗，力求理論與實際的平衡，俾使教會在實際引人歸主上有所幫助。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                本文係以約翰福音一章14節，哥林多前書九20至23節，使徒行傳一章8節為方法論的經文依據，並參以富勒神學院魏格納教授（C. Peter Wagner）的三P佈道；同在式佈道（Presence Evangelism）、宣告式佈道（Proclamation Evangelism）、說服式佈道（Persuasion Evangelism）為架構來闡述這三個主題（三P佈道的理論詳見第三篇第七章）。第一篇「本土化談道的神學基礎」，所探討的是屬同在式佈道的範疇。約翰福音一章14節：「道成了肉身，住在我們中間，充充滿滿的有恩典有真理。我們也見過他的榮光，正是父獨生子的榮光。」羅馬書九章2至3節保羅說：「我是大有憂愁，心裡時常傷痛，為我弟兄，骨肉之親，就是自己被咒詛與基督分離，我也願意。」本篇特從道成肉身的宣教原理以及為骨肉之親的心志來探討本土化談道的神學基礎，思考如何進入人羣，針對需要，滿足需要，並從四福音書和使徒行傳來分析耶穌和初代教會成功的談道方法以及成功要素，然後歸納運用在台灣本土的談道，並促使福音紮根於本土文化中。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                第二篇「本土化談道的福音內容」，所探討的是屬宣告式佈道的範疇。哥林多前書九章22至23節：「……向什麼樣的人，我就作什麼樣的人，無論如何，總要救些人。凡我所行的，都是為福音的緣故，為要與人同得這福音的好處」。使徒行傳八章29至35節：「聖靈對腓利說，你去貼近那車走，腓利就跑到太監那裡，聽見他念先知以賽亞的書，他說，你所念的你明白麼？他說沒有人指教我，怎能明白呢？於是請腓利上車，與他同坐……腓利就開口從這經上起，對他傳講耶穌。」今天有許多人，他信什麼他也並不明白，我們應該學習腓利的個人談道，以對方所興趣但卻不明白的鄰接觸點與差異點來傳講福音。本篇特以保羅的談道策略和腓利的個人談道方法，首先分析、瞭解台灣百姓的信仰心理、文化傳統、宗教觀念，進而以這些背景和需要為橋樑，隨時作好準備，帶入福音的內容，介紹啟示的神、復和之道、耶穌是神，以達「知己知彼，百戰百勝」。本篇係屬理性的講述，盼藉著與其他宗教信仰之對話來幫助人認識耶穌基督救贖的福音。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                第三篇「本土化談道的屬靈爭戰」，所探討的是屬說服式佈道的範疇。使徒行傳一章8節：「聖靈降臨在你們身上，你們就必得著能力，並要在耶路撒冷、猶太全地和撒瑪利亞，直到地極，作我的見證。」哥林多前書二章4至5節：「我說的話，講的道，不是用智慧委婉的言語，乃是用聖靈和大能的明證，叫你們的信不在乎人的智慧，只在乎上帝的大能。」信仰不是非理性，但卻超越理性，許多超越理性範圍的信仰問題亦非單純的理性說明可以解決，因為它牽涉到靈界爭戰、心靈捆綁的層面。面對台灣本土很強的偶像崇拜、邪靈勢力，本土化談道一定要觸摸到靈力事奉的領域，才能使人降服在上帝面前。本篇將從主耶穌所應許的聖靈能力來探討權能佈道的必要；如何領受聖靈，過一滿有聖靈的生活；並進而接受內在心靈的醫治，經歷完全的救贖。如此，才能面對台灣上空屬靈氣惡魔的爭戰，並且帶出福音大有能力的見證。
              </p>
              <p className="text-gray-700 leading-relaxed">
                總結全書，本土化談道法乃是依靠聖靈能力（徒一8），有道成肉身愛的基礎，認同百姓，進入人羣（約一14），以斯土斯民所能理解的語言、方式，針對需要，積極傳講耶穌基督救贖的福音（林前九22～23），在激烈的屬靈爭戰中，經歷聖靈不斷的充滿，祈求上帝彰顯大能（林前二4～5），以神蹟印證所傳的道（可十六20），使人體會罪得赦免與創傷得醫治的完整救贖，而降服在主前，成為耶穌基督的門徒，完成主耶穌所託付的大使命（太廿八19）。
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
                '台灣宣教一百三十年，教會增長卻不如寺廟數量成長快速；統計顯示大型佈道會的果效有限，個人談道（來福槍式）遠比大型佈道會（散彈槍式）更能有效引人歸主，卻是教會最被忽略的福音策略。',
                '個人談道是初代教會快速增長的關鍵途徑——第一世紀信徒從一百二十人增至約五十萬人，靠的不是宏偉建築或大型聚會，而是每一位信徒各按其職、隨時準備見證的生活方式。',
                '台灣教會長期缺乏一套針對本土文化、心理、觀念設計的個人談道方法，多半直接移植西方教材，與談道對象缺乏真正的接觸點，因此福音效果有限；真正需要的是「本土的根植」而非「西方的移植」。',
                '本文採「本色化神學」（情境神學）的立場：不是要與文化妥協改變福音本質，而是藉著與台灣文化、民間信仰的相遇對話，用斯土斯民能理解的語言闡揚不變的真理——目標是「台灣福音化」而非「基督台灣化」。',
                '全書以約翰福音一章14節、哥林多前書九章22至23節、使徒行傳一章8節為方法論依據，並借用魏格納教授的「三P佈道」架構（同在式、宣告式、說服式）分為三大篇：神學基礎、福音內容、屬靈爭戰。',
                '本土化談道法的核心精神是：依靠聖靈能力，以道成肉身的愛認同百姓、進入人羣，用斯土斯民能懂的語言針對需要傳講福音，在屬靈爭戰中經歷神蹟印證，使人罪得赦免、創傷得醫治，完整降服在主前成為門徒。',
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
              <h4 className="font-semibold text-gray-800 mb-2">為什麼寺廟密度持續攀升，教會增長卻停滯不前？這兩個現象之間有什麼關聯？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者提出的統計對比極具警示性：台灣寺廟密度高居世界第一，異教廟宇成長速度更超過任何一個時代，反觀教會發展卻相形見絀。這不只是單純的「宗教市場競爭」問題，更反映出民間信仰能提供台灣百姓熟悉、貼近生活的語言與儀式，而教會若只是機械式移植西方福音資料，就難以真正碰觸台灣百姓內心深處的宗教心理與文化認同。本土化談道正是要回應這個落差——不是要教會辦更多活動，而是要學會用百姓聽得懂、感受得到的方式傳講福音。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「本色化」與「情境神學」有何不同？作者為何選擇通俗的「本土化」一詞？</h4>
              <p className="text-gray-700 leading-relaxed">
                王憲治牧師區分「本色神學」偏重文化象徵與宗教的關係，而「情境神學」則考慮政治、歷史、社會、文化、宗教的整體性；王崇堯牧師進一步指出情境神學需深入世俗、科技、經濟、政治、人權、公義等議題。作者選擇「本土化」一詞，是因為它口語化、易懂，且與「本色化」原文Indigenization同義（「土產的」、「土生的」），符合本文力求人人看得懂的寫作策略，避免讀者被艱深的神學術語隔絕在外。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「三P佈道」（同在式、宣告式、說服式）如何對應本書三篇架構？為何缺一不可？</h4>
              <p className="text-gray-700 leading-relaxed">
                魏格納教授提出的三層佈道分別對應本書三篇：第一篇「神學基礎」對應「同在式佈道」——道成肉身，進入人羣，建立關係；第二篇「福音內容」對應「宣告式佈道」——清楚宣講福音信息；第三篇「屬靈爭戰」對應「說服式佈道」——靠聖靈能力使人真正降服、成為門徒。三者層層遞進，缺一不可：只有同在沒有宣告，是有愛心無真理；只有宣告沒有同在，是機械式傳福音；若沒有屬靈爭戰的得勝，人聽了道卻仍被撒但捆綁，難以真正降服在主前。</p>
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
              '回想你自己如何信主，是透過大型佈道會，還是透過一位朋友或家人的個人談道？這段經歷如何印證作者「個人談道遠比佈道會更有效」的論點？',
              '你身邊有沒有「熟悉的語言卻聽不懂的福音」的例子？你覺得問題出在對方聽不懂，還是我們傳講的方式沒有貼近他的生活與文化？',
              '「向什麼樣的人，我就作什麼樣的人」（林前九22）這句話，在你實際與非基督徒朋友相處時，具體可以如何應用？',
              '作者說「教會不是為存在而存在，教會之存在是為向外宣教」，你所屬的教會目前把多少資源、時間投注在個人談道的裝備與訓練上？',
              '你是否曾經因為對方的宗教背景（拜拜、祭祖、算命等）而感到不知如何開口傳福音？讀完本章，你對「本土化」的談道方式有什麼新的期待？',
              '「本土化」不是要與文化妥協，而是堅持真理、用本土語言表達，你認為這條界線該如何拿捏，才不會既失去福音的本質，又不至於讓人聽不懂？',
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
              <h4 className="font-semibold text-green-700 mb-2">📋 列出你的「耶路撒冷」名單</h4>
              <p className="text-gray-700 mb-2">
                使徒行傳一章8節提醒我們，見證是從耶路撒冷開始的，那是我們最熟識的人。本週寫下五位你尚未信主的家人、親戚、鄰居、同學或同事的名字，為他們個別代禱，並思考：他們最近生活中有什麼需要，是福音可以回應的？
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🗣️ 練習「按對方需要」開口</h4>
              <p className="text-gray-700 mb-2">
                這一週找一次機會，與一位非基督徒朋友聊天時，不急著講「四律」或整套福音，而是先傾聽對方目前的處境與需要，練習用他熟悉的語言、貼近他生活經驗的方式，自然帶入信仰的話題。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「親愛的天父，求祢光照台灣這塊土地，讓教會不再滿足於熱鬧的活動，而是願意學習道成肉身的愛，走進每一個人的生命中。求祢賜給我智慧與勇氣，用本土的語言、貼近人心的方式，向我身邊的親人朋友傳講耶穌基督救贖的福音，並靠著聖靈的大能，使福音的果效顯明出來。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
