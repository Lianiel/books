import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book36Ch1() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-fuchsia-700 to-purple-700 bg-clip-text text-transparent">第一講</h1>
        <h2 className="text-xl font-semibold text-gray-700">與神親密的關係</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-fuchsia-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-fuchsia-50 to-purple-50 hover:from-fuchsia-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-fuchsia-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <p className="text-gray-700 leading-relaxed">
              妮塔請大家翻到雅歌，說明接下來四場聚會要教導有關禱告的事，但她總是先講與主親密的關係，之後才教導代禱的屬靈深度和廣度，因為這是神國度的法則。她說，在整個基督徒的生命中，生命的交換一直不斷進行著——我們與主一點一點地交換，與祂更深地聯合，就擁有更高的權柄；祂越多地擁有我們，就可以更多地使用我們。她引用雅歌一章2-4節：「願他用口與我親嘴，因你的愛情比酒更美。你的膏油馨香，你的名如同倒出來的香膏，所以眾童女都愛你。願你吸引我，我們就快跑跟隨你。王帶我進了內室。我們必因你歡喜快樂；我們要稱贊你的愛情，勝似稱讚美酒。她們愛你是理所當然的！」她在開場禱告後，分享了一個小插曲：來聚會的路上，她瞥見路邊一位老人在賣水果，再看一眼時，人和水果攤都不見了。她問主是不是自己看錯了，主回答：「從這次聚會中，這些弟兄姐妹要帶很多聖靈的果子回家。不只是你和我，而是參加聚會的所有人。」
            </p>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">一、與主的親密關係——生命交換的法則</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說，吸引她去禱告的，是神奇妙同在的感覺——她剛信主時就經歷這種特別的方式，因此決定要用餘生追求它。她回憶自己第一次長時間禱告，共花了兩天兩夜，不吃不睡，只是不停用簡單的話語禱告，不知道該用什麼話對神說，就按自己的方式禱告，相信聖靈會明白。那兩天很艱難，神並沒有用特別的方式向她顯現，就像經歷產難一樣，但她堅持挺住。兩天兩夜之後，主開始透過異象和異夢對她說話，跟她講了有關美國未來的事，這個經歷帶領她進入更深、更經常的禱告與禁食。她發現自己對神越來越渴慕，甚至除了禱告和讀神的話以外，別的都不想做——早期她常常持續禱告六到十二、甚至二十幾個小時；如果有人請她代禱，她就會一直持續禱告，直到對方告訴她主已經成就為止。她說，過一個禱告生活實在令人興奮，是一個與神同行、認識神的旅程——如果我們單單為了代禱而代禱，就會錯失整個禱告生活最重要的部分，也會錯過神要帶領我們進入的屬靈高度。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她分享一次特別的經歷：幾年前，她在靈裡被提到一位已經歸主的聖徒面前，這位聖徒提醒她，神在末世最重要的服侍之一就是禱告的服侍——禱告將遍滿全地，是未曾有過的；神將要興起和恩膏祂的代禱者，人數與所要成就的事，都是未曾有過的。她說，在末後的日子，神所要興起的代禱者，在靈裡行走是如此之深，行走在天上就如同行走在地上一樣，他們的生命將被賦予許多權柄和能力，透過禱告成就別人所不能成就的事。她提醒：不要滿足於你目前生命所達到的程度，不管你是否與主有很深的同行，都要更深地尋求祂的面。她說，禱告是雙方面的事——一邊是主，祂的心充滿愛、憐憫、熱情、渴望、智慧、旨意與計畫；另一邊是饑渴的代禱者，兩邊聯合才能讓偉大的事情發生。但當一個代禱者裡面滿了個人的計畫，他在地上的成就將非常小——如果你到神面前卻滿了自己，就沒辦法成就祂在地上的計畫和旨意，你需要清楚自己在許多方面真的非常脆弱，需要完全依靠祂。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">二、學會等候，聆聽神的心</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說，如果要成為一名禱告者，有件非常重要的事，就是要學會在神的旨意前靜默。她描述：教會中大部分人，帶著滿袋子的禱告來到父面前，在禱告室中裝滿自己的計畫和意圖，喋喋不休地告訴神要做什麼、該怎麼做，好像有很棒的主意來「掌控」神，防止神沒想到這些主意——然後帶著未蒙應允的禱告離開，因為還沒有學會怎麼聆聽神的心。她說，我們的很多禱告，其實是要用來尋求祂奇妙的同在、尋求知識和認識——在神面前安靜等候，不需要說什麼話，在祂的同在中從靈裡敬拜祂，跪在祂面前靜默不語，單單等候祂，直到清楚祂要什麼、祂的計畫、祂的旨意，以及祂將以何種方式成就，否則就不要開始代禱。她形容：你可能等候兩個小時，即使神只說了五個詞，但根據這五個詞，你就能做簡短卻充滿權柄的禱告——兩小時十五分，禱告就完成了。她再次強調：「明白神的心意是非常重要的。除非你真認識神，除非你與祂有親密的關係，除非對你來說神的啟示如同馨香之氣、如同香膏傾倒，否則你就無法明白祂的心意。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔特別提醒：要讓神來吸引你，而不是自己擠進去。她描述自己見過的一些人，在禱告中大喊大叫、手舞足蹈，對神喊叫、也對魔鬼喊叫，流了很多汗，自我感覺非常英勇，相信已經抓住了神也抓住了魔鬼——神卻在一旁笑著觀看，因為祂知道他們除了浪費精力，沒做成任何事情；魔鬼也感到困惑，因為這樣充滿熱情的聖徒，卻沒成就任何事，牠的國度還是蠻安全的。她說：你學會等候祂，就能明白神的心意；一旦聖靈開始把你禱告的火點起來，永恆都要被震動，國家被改變，原本不可能的事，對你就變成了可能。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">三、老我必須死去——降服帶來權柄</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說，正如權柄總是伴隨著降服，神的同在也總是要求降服：「你想要擁有神的權柄，你就必須明白神的旨意；你想要明白神的旨意，你就必須要有神的心；你想要有神的心，你就必須要有神的同在；你想要有神的同在，你就必須學會降服。」這意味著，你越深地進到神的維度裡，你的老我就必須更多地死掉。她說，如果我們渴望擁有神的同在，老我必須死去、必須降服於祂；如果想行使能夠改變列國的權柄，老我必須死掉——因為神不會把這樣的權柄放在一個仍然嬰孩、充滿自我的人手中，那樣的人會成為對神國度非常危險的人，所以神不會這麼做。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">四、神的啟示改變生命</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說，神的啟示改變了她、激發了她、改變了世界——祂裡面的生命單單就是一件事：神的啟示，如此偉大、如此威嚴，就是祂美麗的面容、祂榮耀的所是。她說，許多人用一生的時間，僅僅認識到祂啟示的表面；神的啟示向我們的心開啟，我們就會被改變，不由自主地被改變——她坦言，許多人說自己常在異象中見到耶穌，卻不能愛人也不能熱切愛神，她很難相信他們真的見過神那麼多次，因為每一次進到神內室的新層面，人一定會被改變，沒有辦法一直隱藏神給的啟示。她說，神將自己啟示出來，不單是為了與我們有更深的關係，還要將我們製作成一個在世上極有價值的器皿。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">五、摩西與以色列民——明白神的法則，還是只看見神的作為</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔描繪一幅畫面：站在山腳下往上看，遠遠望見一位長長白髮白鬍鬚的老人在火焰中爬上山頂——那正是摩西，他將經過這火焰見到神。而站在山腳下的百姓，看到的只是火，見不到神；摩西見到的是神的面，明白神的法則，而百姓只能看見神的作為。摩西改變了歷史，百姓只是看著歷史被改變。她問：神只要一個摩西嗎？以色列人是一個被荒廢的部落，自我形象低下，覺得自己不配、不被神所愛——摩西並不覺得自己比山腳下的人有更大的價值，那麼不同之處在哪裡？因為摩西聽見了他們聽不見的——神說：「來，來，摩西來。」摩西就起來跟隨；山腳下的人卻說：「摩西，你到山上去，我們不想去，我們不想聽到祂的聲音，因為我們害怕再聽到祂的聲音，我們都會死掉。」摩西與其餘以色列人最大的區別，就是摩西不怕死，其餘的人都怕死。她說：親密意味著降服，意味著老我必須死掉，讓祂從裡面活出來；也意味著你人性中一切的熱情必須死掉，使祂的熱情可以代替你的熱情——摩西經過那火，他的老我死了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔提到，聖經告訴我們，摩西每日在會幕中與神相遇，是面對面的對話；以色列人從帳篷出來，臉轉向會幕，看著神的同在臨到摩西，因為害怕死，摩西卻不怕。因此，摩西能明白神的法則，以色列人卻只能觀看神的作為。她說：能成為神有價值的代禱者，必定是那些明白神法則的人；只看見神作為的代禱者，只能成就極小的事。這兩者的差別，除了與神的親密關係，還有降服——在神裡的生命成長，權柄也會加增，因為你更明白神的旨意，也知道要讓神的旨意行在地上，必須擁有這樣的權柄。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">六、進到幔內——十字架是神最大的痛苦</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔邀請大家想像自己站在會幕的幔子前，成為古時的希伯來人：幔子後面就是至聖所，神的榮耀如此浩大威嚴，人幾乎無法站立；你見過祂的大能，見過祂使埃及向祂下拜，見過祂行的大奇跡——神這樣做，是因為祂愛你，要將你從奴隸中救拔出來。她問：你只站在幔子外面，會滿足嗎？神想要你自由地進到幔內，注視祂的尊榮、祂愛的榮美、祂的能力，而不是一輩子只從別人口中聽說幔內的故事。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔分享了自己在長島會幕服侍時的一次經歷：她正在跟會眾分享信息，盼望激發他們進到幔內的渴慕，突然神闖進她的心，一束像閃電一樣的光從天堂射下來穿透她的心。神對她說：「妮塔，我要你知道，對神來說最痛苦的，不是十字架。」她跪下俯伏在地上哭泣，會眾不知道發生了什麼事。神的愛充滿她裡面，她想到主耶穌釘十字架所經歷的一切痛苦，一幕比一幕可怕，卻無法理解主為何說十字架不是祂所經歷最大的痛苦。她說：「主啊，我不明白。」主回答：「神所經歷最大的痛苦，是那日當幔子從我和我所愛的人們中間降下來的時候，是那日當我不得不與人的心用幔子隔開的時候，這是神所經歷的最大的痛苦。」神又說：「妮塔，十字架醫治了我的心，因為它挪去了那讓我無法再向地上的人啟示我自己的那層幔子。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔總結：我們站在幔外，神在幔內；在神和人中間，是十字架，是主耶穌基督流血的心，渴望帶領我們穿越那些幔子，進到神的內室，使我們能夠像耶穌一樣認識神，看見耶穌與父神同在的榮耀。父神就在幔子這邊，祂的心是如此渴慕帶領我們穿越幔子，透過十字架進到祂的內室，在那裡一層一層地向我們啟示祂自己，就像祂對耶穌所做的一樣。她說：「祂並不是要藏在幔內不想把它挪移，祂也不是要躲在幔內，製造隔閡使我們無法與祂親密。祂渴望帶你穿過幔子，來經歷祂內室一切的奇妙，讓你能夠認識祂，更多地明白祂。明白祂的旨意，幫助祂在地上成就祂的旨意。這就是神對代禱者的呼召。」她強調，關鍵的差別在於：不是進到神的內室讓祂滿足自己的渴望，而是要進到神的內室，來明白祂的心、祂的旨意，並在地上把祂的旨意禱告出來使它成就。她邀請所有渴望這樣呼召的人起立，一同禱告：「我們寶貴的天父，許多事情吸引我遠離禰……今晚，求賜給我們恩典，使得我可以把這些東西都交給你，幫助我們釋放不饒恕、苦毒、論斷、懼怕、焦慮、忙碌和那些屬世界的東西……」
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
                '與主的親密關係是一切代禱事奉的根基，先於代禱本身——妮塔以雅歌的愛情語言，形容禱告是與主之間生命不斷交換、聯合的過程，而非單方面向神提出請求的清單。',
                '真正有功效的禱告始於安靜等候、聆聽神的心，而非帶著滿袋子計畫喋喋不休；等候兩小時換來神五個字的回應，勝過憑血氣大喊大叫卻毫無果效的禱告。',
                '進入更深的神同在，必然要求老我死去、完全降服——權柄與降服是一體兩面：越明白神的旨意就越有權柄，而明白神的旨意又建立在與神親密、降服的關係之上。',
                '摩西與以色列百姓的對比是全講核心比喻：摩西「聽見了他們聽不見的」，因不怕死而進到火中明白神的法則；百姓因懼怕只能遠遠觀看神的作為——真正有價值的代禱者，是明白神法則的人，而不只是旁觀神作為的人。',
                '神向妮塔啟示：十字架真正醫治的，是那道把神與所愛之人隔開的幔子；神渴望的不是與人保持距離，而是透過十字架不斷邀請人穿越幔子、進入祂的內室，親自認識祂的心意。',
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
              <h4 className="font-semibold text-gray-800 mb-2">雅歌作為禱告靈修文本的傳統</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔用雅歌作為與主親密關係的核心文本，這在基督教靈修傳統中其實由來已久——從教父時代的俄利根、中世紀的伯爾納鐸，到近代不少靈修作家，都曾以雅歌的新郎新婦意象來描繪信徒與基督的親密關係。這種詮釋方式不是要否定雅歌作為情詩的原始文學脈絡，而是將它視為神人之愛最生動的類比語言。讀者可以留意：這種親密語言容易流於情感化、抽象化，妮塔在本講的可貴之處，是把它與「降服」「老我死去」「明白神的法則」緊密扣連，避免親密關係淪為單純追求情感體驗。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「安靜等候」與教會文化中「積極禱告」的張力</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔對禱告室中喋喋不休、大喊大叫的批評相當直接，這與部分強調屬靈爭戰、宣告式禱告的教會文化形成張力。健康的理解或許不是全盤否定熱切、宣告式的禱告（聖經中也有大衛式的呼喊禱告），而是妮塔提醒的次序問題：先安靜等候明白神的心意，再按著所領受的去禱告宣告，而不是把宣告禱告當作禱告的全部或起點。這也呼應了《初級代禱學》第二講中「神的話比兩刃的劍更快」的教導。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「十字架的最大痛苦是隔絕」帶來的神學反思</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔領受的啟示——十字架真正醫治的是神與人之間的隔絕，而非受苦本身——是一個相當獨特且有神學深度的切入角度，呼應了聖殿幔子在耶穌斷氣時裂開（太二十七：51）的記載，象徵神人相交的道路重新打開。這提醒讀者，十字架的意義不只在於為罪付上代價，更在於恢復神與人面對面的關係——這也是為什麼妮塔把「認識神」而非「處理罪疚感」，作為代禱者最根本的呼召起點。
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
              '妮塔說「單單為了代禱而代禱，將錯失整個禱告生活最重要的部分」。你目前的禱告，有多少比例是與神親密相處，多少比例是為了完成代禱清單？',
              '「讓祂來吸引你，而不是你自己擠進去」——你是否曾有過用力氣、用情緒去「抓住神」的禱告經驗？後來的果效如何？',
              '摩西「聽見了他們聽不見的」，因為他不怕死；以色列百姓卻因懼怕死亡而留在山腳下。你生命中有沒有類似「不敢靠近神更深處」的懼怕？',
              '「老我必須死去」是這一講反覆出現的主題。最近有沒有一件事，是你明知該降服卻遲遲不肯放下自我的？',
              '神告訴妮塔「十字架真正醫治的是隔絕」。這個角度如果應用在你與神的關係上，會讓你對十字架有什麼新的感受？',
              '你曾經歷過安靜等候神、只得到極少幾句話卻能帶出極有能力的禱告嗎？可以描述一下那次的經驗嗎？',
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
              <h4 className="font-semibold text-green-700 mb-2">🤫 操練「安靜等候」的禱告</h4>
              <p className="text-gray-700 mb-2">本週找一次十五到二十分鐘的時間，不帶任何代求清單進入禱告，單單安靜敬拜、等候，記下神在這段時間給你的任何一句話、一個感動或一節經文。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 用雅歌一章2-4節默想禱告</h4>
              <p className="text-gray-700 mb-2">
                連續三天，每天用幾分鐘反覆讀誦雅歌一章2-4節，把「願你吸引我，我們就快跑跟隨你」當作自己的禱告，留意這句話如何改變你禱告時的姿態。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🪞 誠實檢視「老我」不肯降服之處</h4>
              <p className="text-gray-700 mb-2">
                安靜寫下一件你明知神要你放下、卻遲遲抓著不放的事（可能是計畫、關係、情緒模式），求神赦免並賜下降服的恩典。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「父啊，願你吸引我，我就快跑跟隨你。求你挪去我裡面的不饒恕、苦毒、論斷、懼怕、焦慮和忙碌，那些攔阻我到你面前的東西。求你使我的老我死去，讓你的心從我裡面活出來。帶我穿過幔子，進到你的內室，讓我明白你的心意，並在地上把你的旨意禱告出來。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
