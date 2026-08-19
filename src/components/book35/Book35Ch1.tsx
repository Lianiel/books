import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book35Ch1() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-violet-700 to-purple-700 bg-clip-text text-transparent">第一講</h1>
        <h2 className="text-xl font-semibold text-gray-700">認識神就是經歷神</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-violet-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-violet-50 to-purple-50 hover:from-violet-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-violet-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <p className="text-gray-700 leading-relaxed">
              這一次聚集，妮塔牧師說她想跟大家講講有關禱告最基本最基礎的內容。她請大家不要覺得被冒犯了，因為她自己在禱告最基礎的事上也花了很多時間。預備這次聚會前，她打電話給女兒瑞琪，問她：「我不知道怎麼跟弟兄姐妹講禱告最基礎的內容，我也不懂那些剛開始禱告的人可能會有哪些問題。你有沒有看過那種『傻瓜手冊』式的書，就像《笨人烹飪技巧》那樣，專門寫給剛起步的人？」瑞琪回答：「媽咪，你需要的是不是一本說明剛開始學習禱告的人的書？」妮塔說：「其實對我來說，這應該是很簡單的事，但我卻不知道該怎麼辦，所以我覺得現在好像就是那個愚笨的人。所以請你來幫忙，幫我列出開始學習禱告的人需要知道的內容。」瑞琪後來告訴她：「任何人想要開始學習禱告，這些內容都是他們需要知道的。」帶領這次聚會的江牧師也一再提醒妮塔，要儘量講得簡單些。於是這六堂課，就是這樣一步步整理出來的。
            </p>
            <p className="text-gray-700 leading-relaxed">
              妮塔請大家翻到約翰福音十七章3節。她說，這是幾乎每一次講到禱告都必須先講的題目——認識神。如果一個人開始禱告，卻不明白這一講所說的內容，幾乎就錯失了整個禱告的重點，因此在進入任何有關禱告的話題之前，都需要先聽聽這個主題。經文說：「認識你獨一的真神，並認識你所差來的耶穌基督，就是永生。」（約十七：3）
            </p>
            <div className="border-l-4 border-violet-200 bg-violet-50/50 pl-4 py-3 my-3 space-y-2">
              <p className="text-gray-700 font-semibold">妮塔禱告：</p>
              <p className="text-gray-700 italic leading-relaxed">
                「親愛的天父，對於在地上生活行走的我們，在人的思想裡把禰講清楚並不容易，禰是那麼奇妙，那麼偉大，是遠遠超過我們的語言所能描述的。今天晚上聚會結束之前，我渴望這裡的百姓對禰的渴慕比以往更加增。所以我呼求禰降下聖靈，在我們靈裡釋放禰活的道，使我們不是在頭腦裡，而是在靈裡明白關於禰的事。父啊，請禰來建造他們，為了禰國度的榮耀，訓練他們成為偉大的代禱者。今天晚上，當我們分享信息的時候，讓禰道的生命進入到他們的靈裡，為著禰的榮耀把他們建造起來。幫助我，讓我知道如何來教導他們，幫助我來做我原本做不到的。我們為著今晚離開的時候所領受的一切，將榮耀單單歸給禰。奉禰寶貴的名禱告。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-violet-800 text-lg mb-3">一、什麼是認識神——不是知道，而是經歷</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經說：這就是永生，就是認識神——獨一的真神。在希臘原文裡，這個「認識」是在經驗上（Experience）來認識祂，並不是知道有關祂的事的那種認識，而是要經歷到祂。妮塔特別強調：任何一個人都能知道有關神的事，甚至不需要重生就能夠知道。有許許多多的神學家，不論在美國還是世界各地，寫了許多最美麗最流暢關於神的書，但他們甚至還沒有重生。所以，你甚至不需要重生，就能夠知道有關神的事。她說，有時候孩子因擁有單純的心，反而更認識神，甚至比那些看起來非常有學問、好像很屬靈的人知道得還要更多。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                想要知道有關神的事，甚至不需要非常聰明——可以讀聖經、看書、聽講道、看講道DVD，也可以去基督教書店買一些書或有關耶穌的錄影帶。你好像得著一切有關神的知識，以為這就是一切，其實並不認識祂。許多人能夠引用成百上千的經文，同樣可以教導你一切有關神的事，教導他們頭腦裡所知道有關耶穌、有關神的事，但他們自己並不認識神。妮塔說，只有一條路可以認識神，那就是通過禱告。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-violet-800 text-lg mb-3">二、認識神唯一的路——禱告</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔特別澄清，她現在講的並不是屬靈爭戰式的禱告，而是親密中的禱告，是與神相交團契的禱告，是唯一能讓人認識神的方法。她指出，有些傳道人在全美國各地講臺傳講有關神的事，但這些傳道人並不是真的認識神；美國許多教會的會眾也不認識神，雖然他們知道很多有關神的事。「知道有關神的事」和「認識祂」之間，有極大的差別。耶穌向我們說：這才是永生——你通過親身經歷來認識祂，在你一切所說所做的事上，你認得祂，這才是永生。認識神，同時也可以說就是禱告，通過禱告來認識神。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她說，你花時間禱告，卻不去親身經歷神，對她來說你是在浪費時間。雖然有許許多多的人在禱告，但他們沒有花時間嘗試去認識神——進入神的同在裡面，就開始叨叨叨講個不停，有上百件事要向神說，講完起身就離開。神在那裡說：「這是在幹嘛呢？」神好像剛剛經歷了一個小型的話語龍捲風，但祂只是微笑，因為祂知道你還不成熟，還沒有學會認識神的法則。妮塔用一個生動的比喻：就像一個五歲的孩子從學校回到家，像一個講話機器一樣講學校的事，講很快很多，如果不留意，大概一半以上你都不知道他在講什麼；但當這個五歲的孩子長大，從大學回家，也許他會更多傾聽而不是一直說。禱告也是這樣，如果我們學習認識神，就需要學習聆聽，學習來到寶座前，讓神支配、掌管我們的時間。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔接著分享了約翰·雷克（John G. Lake）的一段經歷。她說她並不是要講他有多了不得，而是他是一位跟神非常親密同行的人，親密到裡面再也沒有罪性，基督完全佔有他。在記載他某次經歷的文章裡，他描述自己跟一位造訪他的天使的對話：「我現在跟天使再次回到這個道路的路口，他往前走了一兩步，我的心是那樣的沉重，我呼喊說：『天使啊，今晚我看到的這一切，好像對我來說是一個掙扎，是什麼組成一個真正的五旬節？我們需要先有什麼樣的想法，經由這樣的運動，神要呈現在人的裡面呢？』」約翰·雷克當時手裡一直拿著聖經，他翻到使徒行傳第二章，那段講到神的靈從天降下，帶來極大的啟示和異象。天使對他說：「這就是神放在耶穌心裡的五旬節，你要為這個來爭戰，為這個來努力，教導人要為這個禱告，為這個，而且單單只有這個能滿足人心的需要，單單依靠這個就有能力來勝過黑暗的勢力。」天使正要離開時，轉身對他說：「禱告，禱告，禱告，你要教導百姓禱告。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔請大家非常仔細地聽：禱告，單單禱告，更多的禱告，持續性的禱告，是進入神心的門。你不可能只是讀有關神的事，就能夠認得祂；即使僅僅靠讀聖經，也不能認識神。認識神唯一的方式，就是禱告。在禱告的密室裡所學到的、在神寶座前所學的一切，都會與聖經裡讀到的完全一致——禱告永遠會將神的話帶出生命，讓神的話活在你裡面。她見證自己與神同行27年之久，神給她許多啟示，都是先在禱告中給她，然後再帶領她去讀經文，幫助她明白神在話語裡要表達的意思。所以，在禱告中經歷一些事情，會通過神的話進一步確認；但若只想明白聖經，卻沒有禱告的生活，那領受的就只是聖經最基本的意思，卻永遠沒辦法明白神的心。妮塔強調：如果不明白神的心，就沒有辦法成為一個大有功效的代禱者。若是代禱的初學者，要把「明白神的心」當成目標。她請大家翻到詩篇八十六篇11節。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-violet-800 text-lg mb-3">三、經歷到神就是愛</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔接著分享自己信主前的經歷。在她把心交給耶穌之前，有兩天之久她躲起來，一邊讀聖經一邊流淚，因為她很渴望能夠得救，心裡想：「我這樣讀聖經，我肯定知道怎麼樣能得救。」但神卻一直不向她開啟，她讀一會聖經就哭一會，讀聖經就像讀希臘文一樣，完全看不懂。她感到非常沮喪和困惑，就跟神說：「神啊，我只是想認識禰，我渴望能夠得救，但整頁聖經我卻一個字也不認得。神啊，我知道在我的生命當中，我應該愛我的家人，但我卻不愛他們。我也知道按道理我應該愛禰，但我也不愛禰。實際上，我還有點生禰的氣，我不喜歡禰，但是我渴望能夠得救。神啊，禰如果要我愛我生命當中的這些人，禰要我也來愛禰，那禰必須在我生命當中做一些工作。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她這樣說之後，神開始用像液體般的電流為她施洗——那是神的愛，充滿電能又好像膏油一樣的液體，從她的頭頂往下流，流經她的心，流到她的腳底。她當時跪著，這愛流一到腳底以後，又從頭再來一次，就這樣一波一波神的愛澆灌她，大概持續了10分鐘之久。這個過程結束之後，她對神有著前所未有的認識——她知道神就是愛。她對神說：「如果這就是神，如果這是愛，那我願意花我餘生來認識禰。要去做什麼呢？就是要去認識禰。」她說要花盡餘生追逐這樣的愛，渴望進入神的最深處，就是除了天堂，地上的人所能進入神的最深處。27年之後，她說這句話比那時更加認真。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                是什麼帶領她一直進到神面前呢？就是神的愛，不是頭腦裡面的知識，而是她經歷到那愛。那次之後，她對神說：「我知道耶穌已經在我裡面了。」雖然她還沒有做一個非常宗教式的禱告（如「耶穌，我邀請禰進到我裡面」），但她卻已確知耶穌已經在她裡面。從那時開始，她每天早上醒來就說：「神啊，我要認識禰。」每天下午也說：「神啊，我要認識禰。」晚上上床前，她說：「神啊，我要認識禰！向我彰顯禰自己。」27年以來，她一直這樣禱告。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-violet-800 text-lg mb-3">四、讓耶穌來帶領你的禱告</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔提醒：如果渴望成為一個禱告的人，就需要認識帶領你禱告的那一位。其他人也可以帶領你禱告，但你所能成就的就只是那麼一點點；若你認識耶穌，讓耶穌來帶領你的禱告，你甚至可以影響列國。這在乎你的選擇。她引用詩篇八十六篇11節：「耶和華啊，求你將你的道指教我，我要照你的真理行；求你使我專心敬畏你的名。」她說，對於那些渴望成為有果效的代禱勇士，這段經文應該成為目標：神啊，求你將你的道指教我，以至於我可以如此行，活在你的真理裡面。指教我，使我的心與你連接，使我能夠專心敬畏禰的名。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她鼓勵大家，這就如跟隨耶穌進行一個長時間的禱告旅行，要從某一點開始，就是從今天開始——喜歡跪著禱告就跪著，喜歡坐在安樂椅上禱告也可以，或整個人臉伏於地在神面前禱告，都可以，跟神說：「我渴望認識禰，我要明白禰的法則，我要禰來教導我，能夠一直活在和行走在禰的真理裡面。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔接著談到「活在真理中」與「只是按律法而活」的差別。她說，回到摩西的時代，律法是從摩西來的，律法是好的，到如今都是好的，但卻不代表神一切所要做的事。成百萬的猶太人是按著律法而活，但他們卻不是活在真理裡，因為聖經說，恩典和真理是從耶穌來的，所以神的律法與活在神的真理裡是不同的。一個人想要成為有果效的代禱者，需要在神的恩典和真理裡面成長，讓真理成為他裡面的實質。她建議大家可以打開聖經，跟神說：「神啊，求你來指教我你的道」，然後拿出聖經其中一章，例如詩篇86篇，邊讀邊默想，問神：「這篇在講什麼？當禰說對我有恩典有憐憫，這是什麼意思呢？向你呼求憐憫，這句話是什麼意思呢？神啊，我想明白禰的道，需要我做什麼？對於代禱者，為什麼禰的恩典如此重要？」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔提醒：如果沒有一個憐憫的心腸，那在禱告蒙應允之前，很早就會放棄禱告了。一顆憐憫的心會激動你來禱告，會幫助你在代禱上變得信實，直到神把答案告訴你。所以，明白神的道是非常重要的，這段經文所講的就是神憐憫之道——「神啊，憐憫我。」她也鼓勵大家可以直接問耶穌：「神啊，叫我行在禰的恩典中是什麼意思？我在禱告上需要禰的恩典嗎？我在禱告上的成長需要禰的恩典嗎？我是不是也需要恩典來討禰的喜悅呢？」她強調，今天要強調的重點是：努力讓自己變得非常熟悉神，以至於祂能夠來引導你的禱告，而不是你自己，也不是別人。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-violet-800 text-lg mb-3">五、經歷神活的道——摩西在山頂的異象</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔分享了一次特別的異象經歷。有天半夜大約清晨2、3點，她正跟秘書一起禱告、敬拜，突然間神向她顯現，把她抓起來帶進祂裡面，說：「今天晚上，我要讓你經歷當年摩西在山頂上所經歷的。」於是神就帶她經歷這全過程。她說，當神這樣經過摩西的時候，主站在摩西旁邊，說：「主啊，主啊，恩典。」然後開始講出神各樣的特質——祂不只是單單向摩西說話而已，每一句說出來的話，就是從神的裡面出來，通過空氣像氣球一樣進入摩西裡面的靈人，進入他裡面然後炸開。當神說「神是有憐憫的」，憐憫這個本質、特質，就從祂的裡面出來，穿過空氣撞進摩西的體內，在摩西裡面炸開，直到摩西整個人浸泡在神的憐憫當中，過了很久才逐漸平靜下來。接下來下一個詞「恩典」，恩典就從神裡面出來，穿過空氣像球一樣直接進到摩西的體內炸開，直到他全人被神的恩典完全浸透。所以，摩西不是只聽說神是有恩典的，他是經歷到神活生生的恩典；他也不只是聽到說神是有憐憫的，是經歷到活生生的憐憫；他也不是聽說神是真理，他乃是經歷到活生生的真理。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說：「神哪，求禰指教我禰的道。主啊，指教我禰的道。」這就是神指教祂道的方式，就是祂把祂的話活化在我們心裡面，在我們的靈裡，甚至在我們的身體裡。之後當神給你一個禱告的任務時，你就會記得神的道。如果神讓你禱告的事項是很難的，就如當中涉及很嚴重的罪，當你進入禱告內室的時候，你的心就不是充滿論斷，而是充滿憐憫，因為你學了神的法則。這就是神的方法——祂引導我們的心，讓我們能夠明白祂的法則，因此我們能夠禱告出祂的旨意。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-violet-800 text-lg mb-3">六、代禱是宣告神的心意，不是自己的意思</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說，聽起來還沒有講到代禱的事——但一個真正的代禱者，不見得要花很多時間代禱，他大部分時間是在聆聽、學習。因為一個真正的代禱者，是在神裡面受過很好的訓練，一旦明白神的旨意，然後把神的旨意禱告出來，代禱就是這麼簡單。很多人進到禱告的內室代禱，卻是按著自己的心意在禱告，不斷禱告，幾個月過去了，因為神沒有成就什麼事，就非常沮喪——但由於那不是神的旨意，其實是浪費了很多精力。她舉例，在禱告室裡經常看到這樣的情況：「撒旦啊，我要捆綁你，我斥責你，我把你綁起來，丟到地獄去！」神卻說：「你在做什麼呢？我有告訴你這樣做嗎？我哪裡有讓你把撒但送到地獄去呢？」很多人這樣又叫又跳又踩腳之後，覺得自己成就了一件很棒的事，洗洗手就離開了，然後說：「噢，我是一位何等有能耐的戰士。」保羅稱這個叫做「打空氣」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔引用歷代志下七章14至15節：「這稱為我名下的子民，若是自卑、禱告，尋求我的面，轉離他們的惡行，我必從天上垂聽，赦免他們的罪，醫治他們的地。我必睜眼看、側耳聽在此處所獻的禱告。」她指出，這段經文講到的第一件事是：那些愛神的人應當先自卑、禱告、尋求渴望見祂的面。她說，如果沒有做到這第一步，即便花很多時間禱告，也成就不了什麼事。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔分享了她的事工在奈及利亞的觀察：他們的事工遍佈非洲、印度、亞洲、中東以及歐洲，而在奈及利亞，每年一度可以招聚上百萬的代禱者，到一片很大的場地一起禱告。妮塔曾問神：「這個國家有這麼多代禱者，為什麼這個國家的情況這麼混亂？」她說，世界上很少有像奈及利亞那樣混亂的國家——政府充滿賄賂敗壞，腐敗充斥整個社會。她再次問神：「每一年都有一百萬的代禱者來這裡聚集一起禱告，為什麼這國家這麼混亂呢？」神馬上給她一個異象：她看到好像成千上萬隻雞。雞會做什麼呢？就是呱呱叫、一會在地上啄東西。神說：「他們就在做像雞那樣的事。」妮塔問：「神哪，你是不是跟我說，這上百萬的代禱者就像這麼多雞一樣在這裡呱呱叫？」神說：「是的。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說，這就是為什麼這個國家處在這麼嚴重的麻煩裡——這些人在神面前又吼又叫又跳，一整夜、整個週末都如此，然後回家休息，對神而言，就好像一大群雞在那兒叫。她強調，這不是她個人的看法，而是神的看法：在禱告的密室裡，最重要的是神怎麼看，不是人怎麼看。神要拿這一百萬隻不停叫的雞怎麼辦呢？祂對他們就是憐憫，經過很長一段時間，當神明白從這一堆雞裡面沒辦法得到太多，就差遣一些真正的代禱者，進去做一些他們原本做不到的事。妮塔解釋：為什麼一個代禱者會變成一隻雞呢？就是當你按著自己的意思禱告，而不是按神的旨意禱告的時候——進入禱告內室，開始不停禱告，四處捆綁撒但，拿杖擊打邪靈，很多人就是這樣做的，這時候，你就是一隻呱呱叫的雞。神有時仍會回應這樣的禱告，是因祂的憐憫，為了增加你的信心，幫助你能夠長大；但你若真希望在禱告上大有功效，就需要自卑，來到神的面前，不是在驕傲裡乃是在謙卑裡，等候神，讓神的喜樂充滿你，讓平安的靈充滿你的心，讓神的聰明充滿你的心，在謙卑裡等候祂。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">妮塔以一段禱告示範作為這一講的結束：</p>
              <div className="border-l-4 border-violet-200 bg-violet-50/50 pl-4 py-3 my-3">
                <p className="text-gray-700 italic leading-relaxed">
                  「親愛的父，我們在天上親愛的父，禰的名字是何等的榮耀美麗！禰的尊貴超越一切！禰是那樣的愛憐我們，疼惜我們！禰眷顧謙卑的人，禰在乎柔和的人！禰對有需要的人伸出禰的雙手幫助他們！禰是那麼的偉大，那麼的奇妙！禰差遣禰榮耀的獨生愛子成為我們的救主！禰是何等的奇妙！親愛的天父……我們所要作的，是高舉禰榮耀的名，高舉祂奇妙的道路。」
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                妮塔說，她甚至還沒開始祈求什麼，全心已充滿這樣的熱情，告訴神說禰是何等奇妙——她站在那個地方，因著神的大能在顫抖，她並沒有邀請神來，她所做的就是一直尊榮祂，然後祂就做祂喜歡做的事，祂在人的讚美聲中降臨。相反地，如果我們進入禱告室中抱怨、喃喃自語、呻吟，或告訴神祂做的事很糟——說祂在你家人中、教會中、牧師身上，或在國家做得也不好——那你就沒辦法經歷到神的同在，因為你沒有討祂的喜悅，沒有稱頌祂的偉大，反倒像是個被寵壞的、沒有信心的嬰孩一樣。
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
                '認識神（約十七：3）在原文裡是「經歷」而非「知道」——博學的神學家可能未重生仍能寫神學書，單純的孩子反而可能比有學問的人更認識神；認識神唯一的路徑就是禱告，不是頭腦裡的知識累積。',
                '妮塔區分「屬靈爭戰式的禱告」與「親密團契式的禱告」：只有後者能帶人真正認識神。像五歲孩子講不停、卻不懂得傾聽一樣，許多人進入神的同在只顧著訴說，而不學習聆聽、被神的道帶領。',
                '妮塔自己得救前經歷神的愛如電流般澆灌全身十分鐘之久，從此她確知「神就是愛」，並立志用一生「不斷認識祂」——這正是經歷神、而非只知道神的真實寫照。',
                '真正的代禱不是靠自己的意思拼命呼喊、捆綁斥責（保羅稱之為「打空氣」），而是先明白神的心意，再把神的旨意禱告出來；歷代志下七14-15強調「自卑、禱告、尋求祂的面」是蒙應允的第一步。',
                '奈及利亞「百萬隻雞在呱呱叫」的異象是全書極具震撼力的提醒：代禱者若只按自己的意思禱告、缺乏謙卑等候神，再多的禱告聚會也可能對國家毫無實質幫助；唯有謙卑受訓、明白神心意的代禱者才能帶來真實改變。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「知道有關神的事」與「認識神」的差別，如何具體分辨？</h4>
              <p className="text-gray-700 leading-relaxed">
                本講最核心的提醒，是聖經知識與屬靈認識並非同一件事。一個人可以精通神學、能引經據典，卻在生命中從未真正與神相遇；反過來，一個信仰知識有限的初信者，也可能因為單純的心而更深經歷神的同在。這不是要貶低裝備與讀經的重要，而是提醒讀者：知識若沒有經由禱告內化為與神的實際關係，就只是「頭腦裡的資訊」。分辨的具體方式，或許可以問自己：我對神的認識，多少是從書本、講道聽來的「關於祂」，多少是自己在禱告中親身「經歷到」的？
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">奈及利亞「雞群禱告」的比喻，對群體性禱告運動有何提醒？</h4>
              <p className="text-gray-700 leading-relaxed">
                近代教會歷史上不乏大規模的集體禱告、禁食、屬靈爭戰運動，妮塔藉著奈及利亞的例子提出一個尖銳的反思：代禱者的「數量」與「熱度」，不必然等同於「果效」。她指出問題的根源在於「按自己的意思禱告」而非「明白神旨意後禱告」——這提醒教會在推動大型代禱運動時，除了動員人數與熱情，更需要投入時間裝備代禱者聆聽神、明白神心意的能力，否則熱鬧的聚集也可能只是「打空氣」。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「讚美先於祈求」的禱告次序，有何屬靈根據？</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔在結尾示範的禱告，全篇幾乎都在尊榮、讚美神的屬性，還沒有進入具體祈求。她說「我並沒有邀請祂來，我所做的就是一直尊榮祂，然後祂做祂喜歡做的事」，這與詩篇中「你是用以色列的讚美為寶座的」（詩二二：3）的屬靈原則相呼應。這提示讀者：禱告若總是從抱怨、訴苦、列清單開始，容易停留在「向神要東西」的層次；若能先用時間單單讚美、尊榮神的本質，反而更容易進入神的同在，聽見祂的心意。
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
              '回想你信主至今，你對神的認識，有多少是「知道有關祂的事」，有多少是親身「經歷到」祂？可以舉一個具體經歷神的時刻嗎？',
              '妮塔說禱告時「進入神的同在就叨叨叨講個不停」是不成熟的表現。你的禱告習慣裡，聆聽與訴說的比例大概是多少？',
              '約翰·雷克得到的提醒是「禱告，禱告，禱告」。在你目前的服事或生活節奏裡，禱告的優先順序排在第幾位？',
              '妮塔形容神的愛如電流般澆灌她十分鐘之久，這是很戲劇化的經歷；但不是每個人都有這樣的經驗。你如何看待「經歷神」不一定要有強烈感受這件事？',
              '「打空氣」式的禱告（不停捆綁斥責，卻不是出於明白神的旨意）你是否曾經歷過？當時的結果如何？',
              '奈及利亞「百萬隻雞呱呱叫」的異象很震撼。如果神今天給你一個類似的異象，來形容你自己或你所屬群體的禱告方式，你猜會是什麼畫面？',
              '本講最後提到，抱怨式的禱告會使人無法經歷神的同在。你這一週的禱告中，讚美與抱怨的比例大概是多少？',
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
              <h4 className="font-semibold text-green-700 mb-2">🙏 每日三次「我要認識禰」禱告操練</h4>
              <p className="text-gray-700 mb-2">效法妮塔27年來的習慣，連續一週，每天早、午、晚各花一分鐘，安靜對神說：「神啊，我要認識禰，向我彰顯禰自己。」不急著加上任何祈求，單單這樣說，然後安靜聆聽1-2分鐘。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 用詩篇86篇操練「邊讀邊求問」</h4>
              <p className="text-gray-700 mb-2">
                打開詩篇86篇，一節一節慢慢讀，讀到每一個描述神屬性的詞（如恩典、憐憫、真理），停下來問神：「神啊，這句話對我來說是什麼意思？」把神給你的感動或亮光寫下來。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🕊️ 練習「先讚美、後祈求」的禱告次序</h4>
              <p className="text-gray-700 mb-2">
                本週找一次個人禱告時間，前五分鐘完全不提任何需要，單單數算、宣告神的屬性與作為（例如：禰是信實的、禰是憐憫的、禰眷顧謙卑人），再進入代求或祈求的部分，留意這個次序對你禱告品質的影響。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 自我檢視：我是不是在「打空氣」？</h4>
              <p className="text-gray-700 mb-2">
                挑一件你近來持續在禱告、卻遲遲不見果效的事，誠實問自己：我是按著自己的意思在禱告，還是先花時間安靜、求問神的心意？試著先停止不斷重複同樣的禱告詞，改用一段時間單單安靜等候，求神先告訴你祂的旨意是什麼。
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
