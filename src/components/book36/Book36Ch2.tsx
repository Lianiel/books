import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book36Ch2() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-fuchsia-700 to-purple-700 bg-clip-text text-transparent">第二講</h1>
        <h2 className="text-xl font-semibold text-gray-700">成為神的朋友</h2>
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
              妮塔以一段與三歲外孫女的對話開場：她跟外孫女說「我愛你比你愛我更多」，外孫女卻堅持反過來說「我愛你比你愛我更多」；兩人一路比喻，從手比劃的大小、全世界、太陽、宇宙，一路加碼，最後妮塔說「我愛你就像神愛你一樣大」，外孫女仍回答「我也一樣」。她說：神對華人的愛，就像神自己一樣大。
            </p>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">一、鷹的聚集——為美國認同性悔改的事工</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔簡介她所屬的WFJM事工在美國推動的「鷹的聚集」——這個名字來自神給她的異象，目的是召集代禱者和牧師一起為美國代禱。四年來，他們一直為美國代禱悔改，最初是為流美國原住民無辜血的罪悔改，接著是為虐待非洲黑人的罪悔改。她說，聚集中曾播放美國虐待非洲黑人的歷史紀錄片，會眾在聖靈強烈的同在中為此哭泣悔改。她提到，神曾幾次向她顯明：如果這些聚集沒有達到神的要求，復興不會臨到美國，取而代之的將是戰爭；他們必須先透過悔改清除四百年來留在這片土地上流無辜人血的不潔，這樣才能迎來復興。她分享上一次聚集後30天內，美國發生的幾件她認為是神跡的事，包括一宗四十年前3K黨成員涉嫌謀殺案的重新審理定罪，以及美國參議院首次為「吉姆·克羅時代」（約1860s-1960s）未能阻止私刑而正式向非洲裔美國人道歉。她也提到為原住民代禱悔改後，數十億美元的原住民保留區資金被釋放；他們也曾為媒體公義代禱。她強調，分享這些不是要吹噓「鷹的聚集」，而是要說明這四年的代禱完全是為了滿足父神的心。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說，這樣的悔改代禱觸動了父神的心，使祂願意介入，給美國一段時間透過復興帶來靈魂收割；她也提到，上一次聚集中，他們也特別為在美國經歷苦難的華人代禱，相信神同樣會砍斷壓制的軛，讓華人身上的美善被彰顯，民族間的溝壑被填平。她邀請大家一同關注下一次在伯明罕舉行的聚集，神應許要在其中傾倒極大的榮耀，回應過去五年的幕後代禱。她形容鷹的聚集是基督身體重要的祭司性服侍——正如大祭司年復一年進入至聖所為以色列人代禱，確保神不毀滅以色列，鷹的聚集也在為美國做同樣的事。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">二、大祭司的服侍——站在破口上</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔請大家翻到以賽亞書四十章，並分享敬拜時看見的一個異象：主耶穌站在全能父的右邊，穿著大祭司的袍子，身後長出天使般的翅膀升起，醫治從翅膀中流出來——她立刻想到瑪拉基書四章2節「公義的日頭升起，它的翅膀帶著醫治大能」。她說，接下來要講的主題，其實不只是如何成為好的代禱者，而是在神的家中如何成為祭司——今天教會之所以缺乏、低效，正是因為祭司這個職分沒有正常運作，而沒有任何一個角色比代禱者更能刻畫大祭司的心與服侍。她說，大祭司真正的服侍，是讓人與神和好、神與人和好，這正是代禱者的工作：當神因一個國家犯了大罪想要擊打它，聖經一再告訴我們，神的眼目遍察全地，尋求一個人能站在破口上——如果有人願意站在那裡，神就能饒恕赦免這個國家。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔分享，就在2006年印尼爪哇島南部海嘯發生後，主給她一個很大的異象：她看到神在哭泣，為亞洲的緣故心都碎了，亞洲上空黑壓壓一片，連土地都在哀哭。她問神：為什麼這些國家沒有受到保護、會遭遇這樣的毀滅？神回答：「因為在這些地方，我只有極少數的朋友。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">三、神的朋友和代禱者的區別——亞伯拉罕與羅得</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔解釋，神所說的「朋友」，指的正是代禱者——但代禱者與被稱為「神的朋友」之間，有極大的差別。她以亞伯拉罕的故事為例：當亞伯拉罕觀看索多瑪和蛾摩拉時，神站在他旁邊，說：「我所要做的事豈可瞞著亞伯拉罕呢？」（創十八：17）神在跟亞伯拉罕交談中，垂聽了亞伯拉罕一再為這兩座城市的代禱，雖然祂很憂傷，最終仍不得不讓兩城被毀，但她指出：當時除了亞伯拉罕，全地上沒有任何一個人能夠扭轉神的心意。神在地上找到一個與祂同行到某種程度的人，稱他為「我的朋友」——如果有人能改變這兩座城市的命運，那就只有亞伯拉罕。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔對比另一個人物羅得：他住在索多瑪和蛾摩拉，聖經稱他為義人，過著沒有太多罪纏累的生活，也因這兩座城的敗壞而憂傷——她相信羅得一定也為這兩座城做了很多禱告。但羅得並沒有達到被稱為「神的朋友」的層次，他的代禱沒有帶出神所要的份量來拯救這兩座城；神需要越過他，去到別處找到亞伯拉罕。妮塔說：羅得是代禱者，而亞伯拉罕是神的朋友——這兩者之間有極大的不同。她說，神特別要在華人中尋找能成為神朋友的人，也向世上任何一個種族、任何願意付代價的人敞開，此刻神特別把注意力放在華人當中，正在尋找那些願意付代價、成為神朋友（或稱祭司型代禱者）的人。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">四、預備耶和華的路——代禱者的呼召</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔請大家翻到以賽亞書四十章3-5節：「有人聲喊著說：『在曠野預備耶和華的路，在沙漠地修平我們神的道。一切山窪都要填滿，大小山岡都要削平。高高低低的要改為平坦，崎崎嶇嶇的必成為平原。耶和華的榮耀必然顯現，凡有血氣的必一同看見。因為這是耶和華親口說的。』」她解釋，這段經文主要是預言施洗約翰的服侍，但同時也讓我們一窺代禱者的生活形態——代禱者的工作就是清除路障，在沙漠中修直修平神的路，把山窪填滿、山岡削平，迎接耶和華的榮耀彰顯。她強調：沒有代禱，神的榮耀從來都不會降下——每次看到某地區有復興掃過，之前一定會有代禱者跪在那裡代求，「鷹的聚集」正是在幾十個世代代禱者為美國代禱的基礎上，繼續做這一部分的工作。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她接著引用耶利米書一章10節：「看哪！我今日立你在列邦列國之上，為要施行拔出、拆毀、毀壞、傾覆，又要建立、栽植。」妮塔說，這也是對代禱者的呼召——如果你被呼召為家庭禱告，就是在為家庭做拆除堅固營壘的工作；但神也在尋找一些成熟到可以為一個州、一個國家禱告的人，教導他們如何拔出、拆毀、傾覆，然後重建、栽植。她問：如果你預先知道有海嘯會臨到亞洲，你會不會跪下來為這事禱告？她說，神正在尋找這樣敏銳的代禱者——祂會告訴他們毀壞將臨到某地，如果他們現在禱告，就能攔阻它；海嘯、地震、颶風、龍捲風這些災害，都是被毀壞的靈激發的，神在尋找可以把權柄賜給他們、藉禱告把成千上萬人從死亡中救拔出來的人。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">五、成為高階代禱者的要求——為智慧啟示的靈禱告</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說，並不是每個人都能成為高階代禱者，這是有要求的——其中之一是信心，另一個是聖潔，再一個是分別為聖。她引用以弗所書一章17-23節：「求我們主耶穌基督的神，榮耀的父，將那賜人智慧和啟示的靈賞給你們，使你們真知道他。並且照明你們心中的眼睛，使你們知道他的恩召有何等指望；他在聖徒中得的基業有何等豐盛的榮耀；並知道他向我們這信的人所顯的能力是何等浩大……」她指出，保羅首先為以弗所信徒求的，是智慧和啟示的靈——為了能從神領受深奧、與神親密同行的知識，也為了心中的眼睛被打開和照亮，能明白神的恩召有何等指望。她說，神的教會兩千年來一直行走在比原本被造要行走的層次低很多的地方——教會被造要行走在屬天的領域，卻常常連靈體能行走在天上都做不到，原因部分是缺乏信心、缺乏洞察力，部分是貪愛世界，人心中的罪，使得教會行走在比神心意低得多的領域。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔解釋，保羅提到神向信徒所顯的能力「是何等浩大」，意即「沒有限制的」——神要我們把對祂認識的框框都拿掉，把祂移到一個沒有限制的領域，也要我們自己進到一個沒有限制的領域。她引用耶穌所說「你若有信心像一粒芥菜種，就是對這座山說『你從這邊挪到那邊』，它也必挪去」，反問：耶穌自己其實沒有真的把山丟進海裡，為什麼？她解釋，不是耶穌沒有這樣的信心，而是如果祂真對加利利海旁的山這麼做，全以色列人都會親眼看到那座山跳進海裡，那不是祂當時要做的事。她說，神要把我們帶到一個地步，能相信祂是無限的、經歷神跡是稀鬆平常的事，神希望藉著異夢、異象、經文直接對我們的心說話，讓我們對祂所說的話連一絲懷疑都沒有。她強調：這樣的信心，神最先要興起的，不是祂的牧師，而是祂的代禱者——地上一切被孕育出來的事，都是透過神的代禱者孕育出來的，代禱者在神家中的功用是最重要的部分。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔繼續解釋，神的大能就是那創造日月星辰、宇宙萬物的大能，是那透過祂話語創造、托住我們的大能——祂渴望透過我們使用這個大能：祂創造風，也能阻擋風；創造地，也能攔阻地震；創造海，也能對它說「靜了吧、住了吧」。她說，神並沒有改變，問題在於教會不再相信神願意做這些事——如果神有一個準備好相信祂的教會，會發生怎樣的事呢？她相信神不僅能，而且還會像摩西的日子一樣再次使海分開。她也解釋以弗所書提到「使基督從死裡復活，叫他在天上坐在自己的右邊」，神要教會明白並相信，自己也能運行在同樣的復活大能裡，遠超過一切執政的、掌權的、有能的、主治的。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">六、神成年的兒子——從王子到君王的比喻</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說，神在這個時刻想在教會中做的事，就是呼出祂「成年的兒子」——神成年兒子的形象，就是耶穌基督自己，另一個典範是以利亞。她以一個生來是王子的孩子作比喻：他從小學習如何治理國家，可以開生日派對、玩耍，但當他慢慢成熟，就要明白自己有一天要接管治理國家的責任；在他還沒被訓練好之前，他可能知道如何做各種決定，卻沒有多少權柄去執行——他甚至可能不認同父王的某些決定，卻只能躲進房間沮喪，因為他還沒有改變事情的權柄。但當父親把王位傳給他成為國王，全國就必須聽他的話。她說：「當你進到神成年兒子的成熟度，你就被擺到一個位置，可以治理一切有能的、主治的、有名的，不僅是在今世，連來世也都超過了，並要來教導神的教會。」這些屬靈產業都是我們所擁有的，耶穌已經把這樣的權柄賜給教會，但她指出，其實沒有多少人真正行走在那樣的權柄中。
              </p>
              <p className="text-gray-700 leading-relaxed">
                妮塔認為，如果教會能行走在保羅所描述的權柄之下，過去七十年就不會有共產主義的興起，也不會有像伊朗精神領袖霍梅尼這樣的人物——她澄清這不是說可以用武力去除掉某個人，而是當教會能運行在保羅所描述的能力和權柄中，就能對抗釋放這些執政掌權者背後的靈，將他們在地上釋放的毒素完全沖洗掉。她說，神已經把對自然界管理的能力和權柄賜給了教會，但能夠行走在這樣權柄中的，是那些不只明白、更是活在復活大能裡的人，就像一個神成年的兒子；在達到保羅所描述的權柄高度之前，還有許多不同層次的權柄，代禱者透過顯明自己的信實，在這些層次中逐漸成長。
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
                '亞伯拉罕與羅得的對比是全講核心：羅得是義人、也為索多瑪蛾摩拉憂傷代求，卻只是「代禱者」；亞伯拉罕與神同行到被稱為「我的朋友」的地步，是唯一能扭轉神心意的人——代禱者與神的朋友之間，有極大的差別。',
                '神在亞洲海嘯後告訴妮塔「因為在這些地方，我只有極少數的朋友」，點出全講的核心提醒：災難與缺乏保護，往往與缺少「站在破口上」的代禱者有關；神在尋找的不只是為國家禱告的人，更是與祂親密同行、能扭轉祂心意的朋友。',
                '大祭司的核心服侍是「讓人與神和好，也讓神與人和好」，這正是代禱者的工作——站在破口上，使神能饒恕赦免一個原本要被擊打的國家、城市或家庭。',
                '成為高階代禱者需要信心、聖潔、分別為聖；保羅在以弗所書為信徒求「智慧和啟示的靈」與「心中眼睛被照亮」，正是要教會明白自己被召有何等浩大、無限的能力與指望，而不是活在自我設限的信心裡。',
                '「神成年的兒子」以王子成長為君王的比喻，說明權柄需要透過成熟與被訓練才能承接；神渴望興起明白且活在復活大能裡的成熟代禱者，使教會能真正治理、對抗地上執政掌權的黑暗勢力。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「認同性悔改」代禱運動的神學討論</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔所描述的「鷹的聚集」，代表一群基督徒為國家歷史上的集體罪責（如對原住民、非洲裔的不公）向神認罪悔改，這種「認同性悔改」（Identificational Repentance）在近代靈恩派代禱運動中相當常見（《初級代禱學》第四講也提到類似操練）。這類代禱運動背後的動機——正視歷史不義、以謙卑的心代替沉默或迴避——本身有其正面價值；但將特定歷史事件（如某案件重審、參議院道歉）直接歸因為某次禱告聚會的果效，涉及因果關係的判斷，不同讀者可能有不同看法，閱讀時可將其視為信心見證的分享，而非需要驗證的歷史因果論證。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「山挪到海裡」的信心教導如何避免被誤用？</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔用耶穌從未真的把山丟進海裡的觀察，說明信心的重點不在於「證明給人看」，而在於單純相信神的話、按神的心意行事。這個提醒相當重要，因為「移山倒海」式的信心教導，若脫離了對神心意的順服，很容易被扭曲成一種「只要信心夠、什麼都能靠自己求得」的功利式信心觀。健康的操練應如妮塔所強調的：先明白神的心意（透過異夢異象或經文的印證），再憑信心宣告，而不是先決定自己想要什麼，再用「信心」去要求神成就。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「神成年的兒子」與健康的權柄觀</h4>
              <p className="text-gray-700 leading-relaxed">
                「神成年的兒子」這個詞彙在某些靈恩派神學脈絡中曾引發討論（有時與「兒子的顯現」教導相關聯），讀者可以將妮塔此處的用法，理解為呼籲信徒從屬靈嬰孩成長為成熟門徒的一種比喻性表達，重點在於「權柄伴隨著責任與訓練」，而不是鼓吹某種特殊菁英階層。真正健康的權柄觀，應當始終與謙卑、服事他人、順服神的心意連結在一起，而不是與屬靈優越感掛鉤。
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
              '亞伯拉罕與羅得都關心索多瑪蛾摩拉的命運，但只有亞伯拉罕被稱為「神的朋友」。你覺得自己目前的禱告，比較像羅得的「憂傷代求」，還是亞伯拉罕的「與神親密同行、能與神對話商議」？',
              '神說「在這些地方，我只有極少數的朋友」。你所在的城市、國家，你認為神能找到多少像亞伯拉罕這樣的朋友？你願意成為其中一位嗎？',
              '「沒有代禱，神的榮耀從來都不會降下」——你目前為你的家庭、教會、國家，投入了多少禱告的時間？',
              '你如何理解「信心不在於做給人看，而在於明白神的心意再宣告」這個原則？回想你曾經歷過的一次信心禱告，是出於明白神心意，還是出於自己的渴望？',
              '「神成年的兒子」的比喻提醒我們，權柄需要透過被訓練、成熟才能承接。你覺得自己在屬靈生命裡，目前處於「小王子」還是「已經預備好接掌治理」的階段？',
              '本講提到的歷史性、群體性悔改代禱，對你而言是陌生還是熟悉的操練方式？你會如何在自己的處境中操練類似的悔改代求？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 用以弗所書一章17-23節為自己禱告</h4>
              <p className="text-gray-700 mb-2">連續一週，每天用這段經文為自己禱告，求神賜下智慧和啟示的靈，開你心中的眼睛，明白祂恩召的指望與能力的浩大，並留意這樣的禱告如何一點一點改變你的信心與眼界。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🌍 為你所在的地方站在破口上</h4>
              <p className="text-gray-700 mb-2">
                挑選一個你所在的城市或國家，本週固定花時間為它代禱悔改，像亞伯拉罕一樣，不是隨口帶過，而是持續、認真地與神對話、求問祂的心意。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🕊️ 操練「先明白心意、再憑信宣告」</h4>
              <p className="text-gray-700 mb-2">
                下一次為一件難處禱告時，先安靜求問神的心意，而不是急著宣告自己想要的結果，等清楚領受後，再憑信心禱告出來。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，求你將智慧和啟示的靈賞給我，照明我心中的眼睛，使我知道你恩召我的指望是何等浩大。求你使我不只是憂傷代求的羅得，更成為與你親密同行、能與你對話商議的亞伯拉罕。願我成為站在破口上的人，使你的赦免與復興臨到我所在的地方。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
