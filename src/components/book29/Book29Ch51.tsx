import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch51() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第51章</h1>
        <h2 className="text-xl font-semibold text-gray-700">抓取到分享</h2>
        <p className="text-gray-500 mt-1">你的名不要再叫雅各，要叫以色列；因為你與神與人較力，都得了勝。　創世記卅二28</p>
      </div>

      {/* 正文 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">正文</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <p className="text-gray-700 leading-relaxed">
              雅各的父親以撒是「應許之子」，他的生命是安息的生命；雅各是「揀選之子」，他的生命是豐盛的生命。雅各的人生可以分成兩大段，第一大段包含個人與家庭，個人：從出生到結婚，家庭：從生子到子累（被兒子連累）。這些過程使雅各從抓取的人改變成為分享的人，這是本章要分享的。第二大段偏重國度：從築壇到祝福，在許多剝奪的過程中，雅各逐漸磨練成為有豐盛生命的人，這是下一章要分享的。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、從出生到結婚</h3>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">一、相爭出生——神有揀選（創廿五19-26）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  創世記廿五22-26：「22孩子們在他腹中彼此相爭，他就說：若是這樣，我為甚麼活著呢（或作我為甚麼如此呢）？他就去求問耶和華。23耶和華對他說：兩國在你腹內；兩族要從你身上出來。這族必強於那族；將來大的要服事小的。24生產的日子到了，腹中果然是雙子。25先產的身體發紅，渾身有毛，如同皮衣，他們就給他起名叫以掃（就是有毛的意思）。26隨後又生了以掃的兄弟，手抓住以掃的腳跟，因此給他起名叫雅各（就是抓住的意思）。利百加生下兩個兒子的時候，以撒年正六十歲。」當雅各還在母腹時，神早已揀選雅各，並向他的父母顯明神的心意。雅各是小的，但將來卻要成為大的。到了新約時代，保羅也引用神對雅各的揀選，來說明揀選的主權在神：「10不但如此，還有利百加，既從一個人，就是從我們的祖宗以撒懷了孕，11雙子還沒有生下來，善惡還沒有做出來，只因要顯明神揀選人的旨意，不在乎人的行為，乃在乎召人的主。12神就對利百加說：將來大的要服事小的。13正如經上所記：雅各是我所愛的；以掃是我所惡的。」（羅九10-13）
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">二、長子名分——紅湯代價（創廿五27-34）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  創世記廿五27-28：「27兩個孩子漸漸長大，以掃善於打獵，常在田野；雅各為人安靜，常住在帳棚裡。28以撒愛以掃，因為常吃他的野味；利百加卻愛雅各。」兩個孩子的個性截然不同，一個外向，一個內向。聖經說，雅各為人安靜，安靜的原文是תָּם（tam），大部分翻譯為「完全」，約伯記七次用這字來形容約伯的完全，且大部分與另一個字「正直」並列。詩篇、箴言、雅歌共有五次用到這字，都翻譯為完全人，只有創世記這裡翻譯為安靜。翻譯者可能不太認同雅各有何完全，所以就譯為安靜，其實「完全」並非沒有瑕疵，乃是成熟的意思。比較之下，雅各真的比以掃成熟，以掃有吃的就滿足了，但雅各更多思想長遠的事，所以會想要得長子的名分。以掃喜歡打獵並非不好，但若讓食物來主導生命就會本末倒置。以撒愛以掃，是因為常吃他的野味，這樣正是讓食物來主導生命，是以撒的弱點之一。這是羅馬書十四17所提醒的：「神的國不在乎吃喝，只在乎公義、和平，並聖靈中的喜樂。」
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  以掃的表現真的是讓食物來主導生命：「29有一天，雅各熬湯，以掃從田野回來累昏了。30以掃對雅各說：我累昏了，求你把這紅湯給我喝。因此以掃又叫以東（就是紅的意思）。31雅各說：你今日把長子的名分賣給我罷。32以掃說：我將要死，這長子的名分於我有甚麼益處呢？33雅各說：你今日對我起誓罷。以掃就對他起了誓，把長子的名分賣給雅各。34於是雅各將餅和紅豆湯給了以掃，以掃吃了喝了，便起來走了。這就是以掃輕看了他長子的名分。」（創廿五29-34）雅各以餅跟紅豆湯，跟哥哥以掃交換長子名分，此時雅各光明正大，並未欺騙哥哥，乃是一個正式的交易。以掃輕看長子名份，只為了一碗紅豆湯，就賣了長子名份；雅各則是看重長子名份，寧願暫時忍耐不吃，願付代價去得到長子名份。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  一般解經喜歡強調雅各的詭詐，但新約聖經對這件事的解釋，則偏重以掃的貪戀世俗：「16恐怕有淫亂的，有貪戀世俗如以掃的，他因一點食物把自己長子的名分賣了。17後來想要承受父所祝的福，竟被棄絕，雖然號哭切求，卻得不著門路使他父親的心意回轉。這是你們知道的。」（來十二16-17）
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">三、得父祝福——母親安排（創廿七1-29）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  利百加得知以撒即將為以掃祝福時，對雅各說：「現在，我兒，你要照著我所吩咐你的，聽從我的話。……你拿到你父親那裡給他吃，使他在未死之先給你祝福。」（創廿七8，10）在母親的安排、主導下，雅各欺騙父親。母親事先為雅各烹調美食，並幫他打扮成哥哥以掃的樣子（創廿七6-10、13-17）。雅各本來不願意欺騙父親，他說：「12倘若我父親摸著我，必以我為欺哄人的，我就招咒詛，不得祝福。13他母親對他說：我兒，你招的咒詛歸到我身上；你只管聽我的話，去把羊羔給我拿來。」（創廿七12-13）過程中有雅各的掙扎與母親的堅持。這樣看來，並不是雅各自己很詭詐，而是母親堅持要他這樣做，使他不得不配合。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  其實利百加應該以正當的方式跟以撒說：「兩個孩子在我腹中時，神就已啟示將來大的要服事小的（創廿五23），因此應是雅各得長子的祝福。」妻子原可以按照神的心意，好好與丈夫溝通才對，但她選擇欺騙。但這件事，不能完全怪罪利百加，以撒也有責任。以撒曾經知道神揀選雅各作屬靈的長子，但他將這事忘記了。或許利百加在以撒逐漸年老的過程中，嘗試跟以撒溝通，但以撒基於喜歡以掃的美味，不願意改變想法，利百加只好用欺騙的方法。這只是一種可能，聖經沒有講這些細節。但這件事提醒我們，即使是屬神的人，也會夫妻溝通不良，也可能會有欺騙的事。欺騙當然不對，但作頭的丈夫，或團隊中作領導的人，也要善於傾聽，樂意溝通，才不會間接造成妻子或下屬虛假以對。這件事導致哥哥想要殺弟弟，弟弟只好流亡在外受苦二十年。由於神的慈愛與大能，神分別改造了雅各與以掃，最終讓兩兄弟和好了（創卅三4）。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">四、衝突避難——父親差遣（創廿七41-廿八5）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  以撒為了使雅各不被生氣中的以掃所殺，並為了使他能娶敬畏神的女子為妻（創廿八1-5），於是差遣他前往巴旦亞蘭母舅拉班那裡，因他的本族本家是認識、敬畏耶和華的。從此開啟了雅各磨難的日子，這也是他更加成長、成熟的過程。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">五、天梯之夢——神賜應許（創廿八10-17）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  在雅各前往巴旦亞蘭的路上，神透過天梯之夢給他應許：「我也與你同在。你無論往那裡去，我必保佑你，領你歸回這地，總不離棄你，直到我成全了向你所應許的。」（創廿八15）雅各的異夢，顯明了神的真實，並且使雅各知道神一直在看顧著他。同樣地，神也沒有撇下我們成為孤兒，我們是他的兒女，他與我們同在，一直看顧著我們。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  創世記廿八16-19：「16雅各睡醒了，說：耶和華真在這裡，我竟不知道！17就懼怕，說：這地方何等可畏！這不是別的，乃是神的殿，也是天的門。18雅各清早起來，把所枕的石頭立作柱子，澆油在上面。19他就給那地方起名叫伯特利（就是神殿的意思）；但那地方起先名叫路斯。」伯特利是很重要的地方，神首次對雅各顯現，就是在這裡，所以雅各將這地取名為伯特利בֵּית אֵל（Beyth-'El），意思是神的殿、神的家、神的居所。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">六、向神許願——奉獻心志（創廿八18-22）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  雅各向神許願：「20……神若與我同在，……21使我平平安安地回到我父親的家，……22……凡你所賜給我的，我必將十分之一獻給你。」（創廿八20-22）雅各願意將從神所得的，獻上十分之一給神。基督徒獻上什一並非只根據摩西的律法，更重要是有律法時代之前的榜樣。亞伯拉罕早已作了榜樣，雅各也傳承了這個榜樣，他們都謹記神的恩惠，存著感恩的心，甘心樂意地獻上十分之一。
                </p>
              </div>

              <div>
                <span className="font-semibold text-indigo-700">七、連娶二妻——服事代價（創廿九1-30）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  雅各愛拉結，為了能娶拉結，忠心為拉班工作，視七年如一日。七年滿了，結婚的時候，娶到的是拉結的姊姊利亞。拉班說，姊姊要先嫁，妹妹才能嫁。七天之後，雅各娶了拉結，但必須再工作七年。他為婚姻付代價，共服事拉班十四年。另得到兩個婢女為妾。從這四位妻妾，他得到十二個兒子。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、第二階段——家庭：從生子到子累</h3>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">一、生子——神的揀選（創廿九31-卅24）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  雅各的妻子利亞、拉結與兩個婢女，一共為雅各生了十二個兒子，其中姊姊利亞生了六個兒子一個女兒，兩個婢女各生了兩個兒子，拉結生了最後兩個兒子。過程中，有兩姊妹的爭寵，雖然人有軟弱，但神接納包容人的缺點。神有主導權，按合適的時候讓她們生出兒子，每個兒子都有神的揀選與安排。如詩篇一二七3所說：「兒女是耶和華所賜的產業；所懷的胎是他所給的賞賜。」
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">二、工價——神的供應（創卅25-43、卅一11-12）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  雅各服事舅舅拉班共二十年，但拉班虧負雅各，沒有給他當得的工價。神幫助雅各，親自供應他、賜福給他，使他得到公平的工價，帶走許多的羊群。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">三、歸回——神的指示（創卅一1-21）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  「3耶和華對雅各說，你要回你祖、你父之地，到你親族那裡去，我必與你同在。……現今你起來，離開這地，回你本地去吧！」（創卅一3、13）神指示雅各，可以回家鄉了。雅各中年離家，經過二十年，準備要回去，如同到國外留學與工作共二十年，已在僑居地落地生根，此時要再回國是很不容易的。但雅各有神的指示，並應許與他同在，使他有動力起行。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">四、立約——神的保守（創卅一22-55）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  雅各不告而別，因為他評估，拉班不會輕易讓他離開。拉班得到通報後，火速追趕雅各，追到後對雅各說：「我手中原有能力害你，只是你父親的神昨夜對我說：你要小心，不可與雅各說好說歹。」（創卅一29）在這裡看到神的保守，因為神在前一晚親自對拉班說話，阻止了拉班任何加害的行動。於是拉班選擇以立約作為這事的了結：「51拉班又說：你看我在你我中間所立的這石堆和柱子。52這石堆作證據，這柱子也作證據。我必不過這石堆去害你；你也不可過這石堆和柱子來害我。53但願亞伯拉罕的神和拿鶴的神，就是他們父親的神，在你我中間判斷。雅各就指著他父親以撒所敬畏的神起誓，54又在山上獻祭，請眾弟兄來吃飯。他們吃了飯，便在山上住宿。55拉班清早起來，與他外孫和女兒親嘴，給他們祝福，回往自己的地方去了。」（創卅一51-55）
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">五、與神摔跤——神的祝福（創卅二22-32）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  雅各返鄉，準備迎見哥哥以掃，他安排僕人走在前面，期望藉著禮物消解以掃的恨（創卅二13-21）。返程途中，他讓妻子、使女、孩子及所有人畜先過了雅博渡口後（創卅二22-23），他遇見一個人，與那人摔跤，並請求那人給他祝福（創卅二24、26）。那人可能是神的兒子、舊約的基督（創卅二30）。雅各得到神的祝福，並改變了他的生命。那人也為雅各改名：「那人說：你的名不要再叫雅各，要叫以色列；因為你與神與人較力，都得了勝。」（創卅二28）「以色列יִשְׂרָאֵל（Yisrael）」的意思是（與）神較力，或（與）神摔跤<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（聖經公會，《創世記研讀本》，頁267）</span>，這個摔跤是代表雅各奮力抓住神，求神祝福。雅各從出生的抓人到現在的抓神，是重大的改變。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">六、弟兄相見——與人和好（創卅三1-17）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  雅各在雅博渡口與人摔跤，「25那人見自己勝不過他，就將他的大腿窩摸了一把，雅各的大腿窩正在摔跤的時候就扭了。……31日頭剛出來的時候，雅各經過毘努伊勒，他的大腿就瘸了。」（創卅二25、31）雅各瘸了腿，無法逃走，但最重要是他的心境改變了，願意主動去與哥哥和好。因著神所給的動力，雅各以一連七次俯伏在地的方式，謙卑地就近他哥哥，以掃也盡釋前嫌，與雅各擁抱和好（卅三3-4）。
                </p>
              </div>

              <div>
                <span className="font-semibold text-indigo-700">七、示劍子累——人的罪惡（創卅四1-31）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  在示劍那裡，雅各的女兒底拿要出去跟那地的女子交朋友，結果卻被強暴（卅四1-2）。她的兩個哥哥西緬與利未幫妹妹報仇，殺光全城的男丁。之後雅各對這兩個兒子說，你們連累我，使我在這地的居民中有了臭名。（創卅四25-30）雅各的兒子們各有不同性情，雅各養育這十二個兒子的過程，有很多煎熬。從上列這段故事看起來，示劍的父親哈抹的後裔都死了。但士師記九28記載：「以別的兒子迦勒說：亞比米勒是誰？示劍是誰？使我們服事他呢？他不是耶路巴力的兒子麼？他的幫手不是西布勒麼？你們可以服事示劍的父親哈抹的後裔。我們為何服事亞比米勒呢？」這表示哈抹的後裔在士師時代仍然留存。可能在雅各的時代，示劍城裡的男丁都被殺了，但有些不在城裡的男子繼續生養發展。無論哈抹的兒子示劍，或雅各的兒子西緬與利未，他們的行徑都顯示人類淫亂、殘暴的罪性。雅各的長子原是流便，但他與雅各的妾犯了淫亂罪，失去長子的資格；老二西緬與老三利未，因為在示劍兇殘殺人，也不能得長子的名份；最後由老四猶大得著長子的名分。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                雅各的生命本不完全，但他有渴慕的心，並願意付出代價，也不斷順服神的帶領，因此能夠從為己抓取的雅各改變成為分享祝福的以色列。願我們的人生也能由抓取的人生轉變為分享的人生。
              </p>
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
                '雅各在母腹中已被神揀選（「大的要服事小的」），出生時抓住以掃的腳跟得名雅各，這預表他一生「抓取」的性情。',
                '雅各以一餐飯換取以掃輕看的長子名分，新約強調的重點在於以掃貪戀世俗，而非雅各的詭詐；後來雅各在母親利百加安排下騙取父親祝福，暴露出全家溝通與信任的問題。',
                '雅各在伯特利築石為柱、澆油立志，起名「伯特利」（神的殿、神的家），並首次向神許願獻上十分之一，這是他信心旅程的起點。',
                '雅各在雅博渡口與神摔跤整夜，被改名為「以色列」（意思是與神較力/與神摔跤），這是他從「抓取的雅各」轉變為「與神相交的以色列」的關鍵轉捩點。',
                '雅各從出生到與哥哥以掃和好，共經歷相爭出生、長子名分、得父祝福、衝突避難、天梯之夢、向神許願、連娶二妻等七件事；家庭階段又經歷生子、工價、歸回、立約、摔跤、和好、示劍子累七件事，都是塑造他生命的歷程。',
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

      {/* 分享題目 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-yellow-50 hover:from-amber-100 hover:to-yellow-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">分享題目</span>
          </div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && (
          <div className="p-5 bg-white space-y-4">
            {[
              '雅各從出生到結婚經歷了哪七件事？請分享你最有感受的一件。',
              '雅各從生子到子累（被兒子連累）也經歷七件事，請分享你自己養育兒女的過程與雅各相似的經歷。',
              '雅各的生命從抓取轉變為分享，這事對你有何啟發？你個人的生命是否在信主後產生這種轉變？每人都有些分享。',
            ].map((q, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0 text-lg">{i + 1}.</span>
                <p className="text-gray-700 leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
