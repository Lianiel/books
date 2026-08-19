import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book35Ch2() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-violet-700 to-purple-700 bg-clip-text text-transparent">第二講</h1>
        <h2 className="text-xl font-semibold text-gray-700">需要神兩刃的利劍</h2>
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
              妮塔開場就說：如果我們渴望神回應我們的禱告，我們需要祂的同在；如果我們希望藉著禱告影響一些事，我們需要祂的能力和權柄。如果我們只是抱怨，就得不到。她提醒大家，要謙卑在神面前，不要高舉自己的意思，要高舉神的旨意，尋求祂的面，渴慕祂。當你得著神的心、得著祂的注意，祂就能夠對你的心說話，你就知道神要你做什麼，並且知道如何去做。尋求神的面，是非常重要、需要學會的功課。
            </p>

            <div>
              <h3 className="font-bold text-violet-800 text-lg mb-3">一、謙卑等候，尋求神的面——不要只是陳述事項</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔再次強調，今天代禱者最大的問題是：進到禱告室，只待幾分鐘，把自己的事一項項念下去，要求神來成就，卻忘了要先謙卑，忘了要尋求神的面、渴慕祂。他們一直不斷講自己的事項，卻錯失了一件最重要的事——他們錯失了神自己，而神是禱告中最重要的。除非神顯現，否則你成就不了什麼事。她問：那你該如何讓神來降臨在你們中間呢？如何激動神向你顯現呢？就是要讚美、敬拜——為祂所作的事來讚美祂，為了祂的所是來敬拜祂。她提醒，需要有一顆非常純淨的心，不能玩弄祂；一顆像小孩子那樣快樂、單純地想到祂是良善的神的心，神很喜悅這樣的敬拜；或是靜靜地因著祂的所是，安靜敬拜祂。
              </p>
              <div className="border-l-4 border-violet-200 bg-violet-50/50 pl-4 py-3 my-3">
                <p className="text-gray-700 italic leading-relaxed">
                  「全能偉大的神，禰的名何等榮耀！禰是那麼聖潔、純潔！禰是真理、憐憫！我們在天上的父，我要來敬拜禰榮耀的名！神哪，禰是配得的！神哪，禰的聖潔是配得的！神哪，禰是配得的！禰的聖名是配得的！神哪，我們敬拜禰！在天上地下，除了禰還能有誰呢？父啊，禰的聖潔如此美麗，充滿了憐憫，充滿了恩典！神哪，禰熱情裡的烈焰，永不失敗的杖。羔羊，救贖我的羔羊。神哪，禰是配得的！禰聖潔的道是配得的！神哪，禰是聖潔的！禰的智慧何其廣大，誰能盛裝認識禰，誰能站立在禰面前呢？」
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-violet-800 text-lg mb-3">二、學習等候、聆聽神的聲音</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔問大家：你的心有感受到神的同在嗎？如果有，那就已經預備好聆聽祂的聲音、遵行祂的旨意了。神說：「如果我的百姓他們愛我，他們就會自卑，渴慕尋求我，就一定得見我的面。」當神的同在降臨、充滿我們的心，我們就可以跟神說：「神啊，我在這個領域是軟弱的，我在那裡犯罪了，在這個地方我不夠信任禰。主啊，求禰饒恕我。神哪，求禰赦免禰的僕人，給我這樣一個恩典，幫助我從惡行中轉離。讓我的生命能夠討禰這位聖潔主的喜悅。」然後就等候神……讓神可以輕柔地向你說話——也許祂會給你提示一節經文、一篇詩篇或一首詩歌，或用很慈柔的話語向你說話，或在你裡面釋放一個特別的平安，那你就跟神連接了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔強調：直到你跟神連接上，否則禱告不能稱為禱告。你自己沒辦法跟神連接上，除非你花時間，讓祂按照祂的方式來運行：「親愛的天父，我心中有許多事要來向你陳述，但在我心裡，我想要來禱告禰心中認為重要的事，所以我將我的禱告呈到禰面前，按著禰所喜悅的來指引我的禱告，用禰的智慧、禰的聰明來充滿我的心，讓我的心充滿禰的負擔，和禰對這件事情的瞭解，那我就按著禱告。」然後再等候、聆聽……如果神沒做什麼也沒說什麼，就把要禱告的事情跟神的話連接起來——例如為某人得救禱告，就用神的話提醒神：「神，這一個人對禰是那麼重要，父神，我記得禰是差遣禰的獨生愛子死在十字架上，就是為了我這位弟兄，他的救恩對你來說，比對我更重要。我禱告，禰要釋放他所需要的，使他能夠看見禰。」再等候，再等待……然後看看神要說什麼。她引用先知哈巴谷的話：「我要站在守望所，立在望樓上觀看，看他對我說什麼話，當我被責備時，可用什麼話回答。」（哈二：1）這就是我們要做的事——充滿等候，然後再禱告。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說，如果能學會怎樣等候，然後聆聽神的聲音——不是那種可聽見的聲音，而是好像心裡的一個催促、一個感動，是經由聖靈出來、指教你這樣禱告或那樣禱告——你就能成就很多事，勝過按自己的能力來做。因為神應許，如果按著這樣的方式禱告，祂必要垂聽：「我必睜眼看，側耳聽在此處所獻的禱告。」（代下七：15）如果只是進到禱告室弄出很多噪音，然後把抱怨在神面前傾訴，那可以隨便按自己的方式禱告；但如果渴望與神合作，把心跟祂的心連接，把一切的努力跟神的旨意聯合，你可以禱告不多，卻能成就很多事，因為神的靈在你的禱告裡面——但你需要花時間來等候祂的顯現。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-violet-800 text-lg mb-3">三、神的話比兩刃的劍更快——按神的話禱告才有功效</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說，如果渴望明白神對某件事的旨意，而不是自己的意思，就要花時間在神面前等候，讓心反復思想這些經文，直到祂把你的心思和神的話連接起來。她引用希伯來書四章12節：「神的道是活潑的，是有功效的，比一切兩刃的劍更快，甚至魂與靈、骨節與骨髓，都能刺入、剖開，連心中的思念和主意都能辨明。」所以在神面前沒有一件事情能夠被隱瞞，所有的事都赤露敞開。有誰比神更知道我們人心深處的事？她舉例：你可以為幾百件事情充滿熱情地禱告，說「神啊，禰叫這個人不要再幹這事，禰來對付他懶惰的問題，禰來處理他們相咬相吞的問題，神哪，你來處理他們的頑固，這樣他們才能得救」——神坐在寶座上卻可能想：「你講的這些，都不是攔阻他們進入天國的事。」那這樣的禱告到底有什麼價值呢？沒有任何人比神更知道人心的光景。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說，當神釋放祂的話進入你的心，也許祂會說：「你要來禱告，斥退那個懼怕的靈。」也許那才是這人不能得救的真正原因。這時你有了神的話，這話比任何兩刃的刀還要鋒利，能夠把靈與魂分開，你就向這個人心中的懼怕說話：「我奉主的名，我捆綁你裡面的懼怕，我釋放神的平安，我釋放信心，我釋放愛進入這個人的心中。」為什麼這樣做有功效？因為這是神對你所說關於這個人的話，神知道這個人的心，也知道攔阻在哪裡。如果不是神準備要挪去的，你其實是在浪費時間；但如果去處理神真正要處理的問題，就比兩刃的刀還利，能進入那個人的心，釋放他裡面的意志，使他能夠認識耶穌。妮塔特別以以色列人為例：有時攔阻他們的不是懼怕被拒絕，而是傳統——耶穌在地上時就一直在處理傳統這件事，因為以色列人很愛自己的傳統勝過神的道。她提醒，在許多不同的文化服事中，遇到的最大攔阻常常也在於人太愛自己的傳統；如果只是為許多其他原因禱告，卻不去處理傳統的靈，這些人就沒辦法得釋放。「神的話，比任何兩刃的刀更鋒利」——聖經沒有說是我們的話、別人的話，而是神的話，禱告時要非常準確地把神的話禱告出來。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們怎樣能得到神的話呢？妮塔說，就是等候，在祂的同在裡，歡迎、邀請祂的同在，領受祂話裡面的啟示，啟示我們怎樣按著祂的心意來禱告。這樣的禱告就會大有功效。也許神是在生產式的禱告中向你顯現，或者是哭泣式的禱告，或許你一句話都說不出來——重點不關乎你說了什麼，而是關乎神的話，然後藉著禱告把祂的話宣告出來。當神釋放祂的話，祂的靈向我們彰顯，禱告就會大有功效，你也會在恩典中成長。她也提醒，如果是真正的代禱者，就要活在神的時間表裡，不是自己的——如果剛開始學習禱告，神不會這樣要求；可以自信地每天留半小時或一小時、或一週兩三次，信實地按照自己的決定去禱告。但若是真正的代禱者，就像醫生一樣24小時待命——想睡覺的時候可能需要去禱告，想吃東西的時候也要去禱告。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-violet-800 text-lg mb-3">四、隨時待命的代禱者——毒販得救的見證</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔分享一個多年前的見證。她正沉睡的時候，神搖醒她，讓她看到一個異象：一個男人在一架私人飛機裡低空飛行，四周探照燈不斷掃過，那個男人臉上充滿驚恐。她問神：「這個人在做什麼？」神說：「他在販賣毒品，你現在如果不禱告，他今天就會死。」妮塔一開始還想：「也許這個想法不錯啊」（意即毒販死了也罷），但神說：「我想要救這個人，你要為他禱告，否則他今夜就會死。」她說自己其實很享受睡眠，但當你手上握著另一個人的性命時，就是在雪地裡也必須起床，於是她坐起來持續不停地禱告，直到那個負擔離開她。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                幾天之後，她被邀請到一個朋友家吃晚飯，到了之後，赫然發現坐在她面前的，正是異象中飛機上的那個人！她非常吃驚，什麼都沒說，只問邀請她的朋友：「這位是誰呢？」朋友說這是他的親戚，今晚一起吃飯。妮塔心想：「哇，不得了，這是個陷阱啊」——她說神常常這樣做事。主人特意把這位親戚安排坐在她旁邊。晚餐間，這位親戚切好牛排、準備吃下第一口的時候，妮塔說：「你知道嗎，我如果沒有禱告，如果不是在幾天之前的那個夜晚我禱告的話」，她告訴他具體時間：「今天你就已經死了。」這位男士張大嘴巴、把牛排放回盤子裡，非常不安地問：「你在說什麼呢？」妮塔說：「你在販賣毒品，我看到探照燈在你的飛機周圍不停搜索，你那時非常害怕，而且你知道你就要死了，如果我當時沒有為你禱告，你今天已經死了。」他驚奇地問：「你怎麼知道的呢？」妮塔說：「因為神向我顯示一個異象，然後我就花幾個小時沒睡覺，一直為你禱告。」他看看其他親戚，親戚也回頭瞪著他，主人證實：「是的，你說的是真的。」妮塔接著告訴他：「因為耶穌對你的靈魂充滿憐憫，祂要在你死以前給你一個機會，能夠接受祂成為救主。」她說完，這位男士就當場把生命交給了神。妮塔說，這就是她所說「隨時待命的代禱者」的意思——你需要讓神能夠隨時呼召你。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-violet-800 text-lg mb-3">五、神打斷時間的代禱——教會的異象與天主教徒丟棄偶像</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說神很喜歡打斷她的時間，她好幾次問神：「神，我蠻享受我的睡眠，這事不能等到早上嗎？」有一次她正準備在餐廳享用美食，主卻說：「離開這個主人（Host），我現在需要你單獨到一個地方禱告。」她抗議：「你不能在我來參加晚餐之前就告訴我這件事嗎？耶穌，飯菜熱騰騰，好香啊！」神仍說：「你去禱告。」她只好離開，讓主人感覺被冒犯。她一回到家，一個很深很深的生產式負擔臨到她身上，幾乎無法走路，一個極深的哭嚎式禱告在她裡面，她幾乎是爬著進門的。接著她看見一個異象：基督的身體——神的教會——在沙漠裡行走，走走停停，就像當年以色列人在沙漠裡行走一樣，神把他們停下來的每個地名都告訴她；而這些「教會的嬰孩」不斷發怨言、唉聲歎氣、抱怨、發牢騷，正如當年以色列民一樣。她問神：「你向我顯現這個的目的是什麼？」神說：「這就是我的教會將要經歷的，而且是馬上就開始經歷。所以，我要你來為我的教會禱告。」接下來一整天，她都沉重地為教會禱告，她說：「我之所以知道如何去禱告，因為神把祂的話給我了。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                另一次，妮塔去夏威夷一個95%會友都是天主教徒的教會服事，之前她完全不知道這個情況。牧師把她從機場接到家，一跨進門檻，她就被神摔入一個哭嚎式的靈裡，負擔極其沉重，她幾乎要扶著牆走才能進到房間，爬著到床邊，一碰到床，就在靈裡被神提上去，看到一隻巨獸，名叫「阿雷各」——這是掌管全世界天主教的靈，額上寫著「獸」，頭上戴的寫著「妥協之靈」。這只獸看起來像喜馬拉雅山的大腳巨人，忙碌地指示許多人和事：它從地的四極招來許多人，這些人手上都拿著一個偶像，往一個洞走過去，把偶像丟進去，靈魂也跟著偶像進到洞裡——那個洞下面就是地獄，燃燒著地獄的火，成百萬的人就這樣要進入地獄。妮塔立刻抽身回來，不假思索地大喊那只獸的名字：「阿雷各，你要釋放你所擄的這些人！」她與這個靈摔跤般爭戰了大約四十五分鐘。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                戰爭結束後，她走出臥室，把剛才發生的一切告訴牧師，牧師只是盯著她看，什麼都沒說。妮塔說：「牧師，我今天晚上就要分享這個經歷。」牧師只答：「哦，這樣嗎？好吧！」那天晚上聚會中，正當她分享異象時，聖靈對她說：「今天會場中每一個人家裡的壁爐上，都有一個偶像，如果他們不丟棄這些偶像，都要進入地獄。」妮塔說，對一個從未服事過的教會講這樣沉重的話非常困難，但她知道神給她這些經歷正是為了這些人，所以照實說了：「你們需要丟棄你們的偶像，因為這些偶像要帶著你們的靈魂進到地獄裡，這不是在開玩笑的！」當時每一位在場的人，站起來，一句話都不說，陸續離開，妮塔心想：「哇，我就是這樣交朋友的，我幾乎把所有的人都變成敵人了。」但她當時並不知道，這些人都是回家把偶像拿出來，帶到教會丟在地上。牧師事後非常吃驚地說：「你知道嗎？我們教會每個會友的家我都去過，我流淚懇求他們丟棄偶像，他們都不聽，今天他們居然把偶像都帶來丟在地上，是因為你分享的那個異象嗎？」妮塔回答：「不是，那是因為我今天下午捆綁了那些控制他們的靈。」她總結說：那些忠實的代禱者，會經歷各樣非常奇妙的事，可以親眼看見神做奇妙的事。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-violet-800 text-lg mb-3">六、代禱帶下關鍵時刻——為雷根總統代禱與清理路障</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔分享，許多年前她跟一個朋友開車，忽然對她說：「雷根總統現在正參加一個非常關鍵的會議，他正和許多其他國家的總理、總統商談很多重大事項，他們需要按著神的旨意做決定。所以，我現在不能再跟你說話了，我要馬上禱告了。」她開始禱告，神告訴她他們正在做的重大決定是什麼，她就把這些事向著雷根總統的心說話：「主，你要把智慧賜給雷根總統，使他知道怎樣把這些事向這些重要的人說明白。」她這樣連續禱告了幾個小時。大約第二天，同車的朋友看了新聞後對她說：「妮塔，我真不敢相信，他們公佈事項的清單，就是按你昨天禱告的順序！神幫助你為這些非常重要的決定逐一禱告，我昨天聽到你禱告的每個事項，今天新聞都提到了。」妮塔說：順服能帶下非常關鍵的時刻，有時甚至是關乎生死的事，有時是關乎許多人的里程碑式的事，有時甚至關乎你自己！
              </p>
              <p className="text-gray-700 leading-relaxed">
                另一次，妮塔在山路上開車，神突然抓住她要她禱告。禱告當中，她在異象裡看見高速路轉彎處中間有一灘黑東西——如果照原本的路線轉彎，就會遭遇一場車禍。她不知該怎麼辦，就向神大叫：「神哪，把它移開。」這是她唯一知道該做的事。約幾分鐘後，車子轉了個彎，她在路邊看到了異象中那灘黑東西。她說：對禱告的呼召和對順服的敏感度，也許就救了你的命！這一講最後，妮塔起立帶大家禱告：「父啊，我幾乎沒講到我原來預備想要講的內容，但我按著禰放在我心中的感動，講了禰要我講的。神啊，求禰催促他們的心來尋求禰的面，更勝過要來學習禰的道……在他們禱告的時候尋求禰的同在，使他們可以為神國大有功效地禱告……主啊，我們讚美禰！」
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
                '禱告最重要的不是把事項一項項念完，而是先謙卑、尋求神的面、渴慕祂的同在；讚美與敬拜是激動神向我們顯現的方式。',
                '真正有功效的禱告，是先等候、聆聽，直到心思與神的話連接起來，再把神的負擔禱告出來，而不是自己單方面向神陳述一堆事項後就結束。',
                '希伯來書四章12節「神的道比兩刃的劍更快」提醒我們：唯有神知道人心深處真正的攔阻（如懼怕、如對傳統的捆綁），按著神啟示的話禱告，才能真正刺入問題核心，而不是憑自己的猜測禱告一大堆卻毫無功效。',
                '真正的代禱者活在神的時間表裡，隨時待命——妮塔半夜被神搖醒為毒販禱告、在餐廳被神打斷去單獨禱告，都說明代禱有時需要犧牲自己的休息與計劃，回應神突如其來的呼召。',
                '忠實的代禱順服帶下的果效可能超乎想像：從拯救一條生命（毒販得救）、鬆綁一整座教會的偶像捆綁（阿雷各異象），到影響國家級的重大決策（為雷根總統代禱）、甚至救自己一命（清理路障異象），都證明「按神的心意禱告」比「按自己的意思拼命禱告」更有能力。',
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
              <h4 className="font-semibold text-gray-800 mb-2">如何分辨「神的負擔」與「自己的焦慮」？</h4>
              <p className="text-gray-700 leading-relaxed">
                本講多次提到妮塔在深夜、餐廳、開車途中被神突然「抓住」去禱告，這對一般讀者可能是難以複製的經驗，也容易讓人混淆：這究竟是神的感動，還是自己的焦慮不安？分辨的一個線索或許在於：神的負擔往往帶著清楚的方向與對象（如異象中特定的人、事、地名），並且在禱告完成後，那個沉重感會明顯離開；而焦慮通常是模糊、持續、禱告後也未必減輕的。這提醒讀者操練代禱時，需要同時培養對神聲音的敏銳，也要有屬靈同伴可以核對、印證。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「傳統的靈」攔阻福音的觀察，對跨文化宣教有何提醒？</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔以以色列民族為例，指出攔阻他們認識神的核心並非懼怕被拒絕，而是「太愛自己的傳統」，這個洞察其實適用在許多文化處境的宣教工場——當地文化中根深蒂固的風俗、家族觀念、宗教傳統，往往比表面的排斥更難鬆動。這提醒代禱者與宣教工作者：為福音工作代禱時，不能只停留在「求神軟化人心」這種籠統的祈求，更需要花時間求問神，具體攔阻某個群體歸主的深層文化因素究竟是什麼。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「阿雷各」異象與屬靈爭戰的界線在哪裡？</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔描述與掌管天主教的靈「阿雷各」摔跤爭戰四十五分鐘的經歷，是本書中屬靈爭戰色彩最濃厚的一段。這類經歷在不同神學傳統中會有不同的理解與詮釋方式，讀者不必以此作為評判天主教信仰群體的標準答案，而更適合看作妮塔個人蒙召的獨特服事經歷。她自己在故事結尾也強調，真正帶下改變的不是講道的內容，而是「今天下午捆綁了那些控制他們的靈」——這提醒讀者，代禱服事中看得見的講道與看不見的屬靈爭戰禱告，往往是同時並行、缺一不可的。
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
              '你禱告時，通常是「陳述事項後就結束」，還是會刻意留時間「等候、聆聽」神的回應？可以描述一次具體的經驗嗎？',
              '妮塔說，若不是神要挪去的事，一直為它禱告就是在浪費時間。你如何分辨你正在為之禱告的事，是不是神當下真正要處理的？',
              '毒販得救的見證裡，妮塔在半夜被搖醒、犧牲了睡眠去代禱。你曾經歷過「神打斷你的計劃去禱告」的時刻嗎？你當時如何回應？',
              '「傳統的靈」攔阻以色列人認識神的例子，讓你聯想到你自己生命或你所在文化中，有哪些「傳統」可能正攔阻著人更深認識神？',
              '為雷根總統代禱與清理路障這兩個見證，規模一大一小，卻同樣強調「順服帶下關鍵時刻」。在你生活中，有沒有一次小小的順服禱告，後來帶來意想不到的果效？',
              '如果神今天半夜把你搖醒，要你立刻為一個陌生人的性命禱告，你覺得自己會有什麼反應？',
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
              <h4 className="font-semibold text-green-700 mb-2">🕰️ 操練「等候三分鐘」再禱告</h4>
              <p className="text-gray-700 mb-2">下次代禱前，先安靜三分鐘，單單敬拜、讚美神的屬性，不急著開口祈求。留意這三分鐘的等候，如何改變了你接下來禱告的內容與方向。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📝 記錄一份「代禱印證日記」</h4>
              <p className="text-gray-700 mb-2">
                為某一件持續在禱告的事，寫下你覺得神給你的感動或亮光（一句話、一節經文、一個畫面都可以），之後留意事情發展是否與這個印證相符，藉此練習分辨神的聲音。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 為「攔阻」而非「表面問題」代禱</h4>
              <p className="text-gray-700 mb-2">
                挑一位你正在為他信主或突破掙扎代禱的人，先安靜求問神：「攔阻他的真正原因是什麼？」而不是憑自己猜測列出一堆問題逐項禱告，練習「先問神、再禱告」的次序。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，求禰催促我的心來尋求禰的面，更勝過要來學習禰的道。讓禱告成為與禰的靈相交的美好時光，而不只是完成一份代禱清單。求禰把禰的話放在我心中，使我能明白禰心中的意念，也求禰在我願意順服卻感到不便的時刻，賜給我一顆願意起來禱告的心。奉耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
