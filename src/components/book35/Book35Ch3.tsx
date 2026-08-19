import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book35Ch3() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-violet-700 to-purple-700 bg-clip-text text-transparent">第三講</h1>
        <h2 className="text-xl font-semibold text-gray-700">禱告是關乎神自己</h2>
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
              妮塔開場提到，她到華人基督徒中服事的真正原因，是神要在華人中興起一支大有能力的代禱軍隊，是這個世代最偉大的事，這是神的旨意，她也渴望與這事工有份。神呼召她參與，教導華人如何有效地代禱。
            </p>

            <div>
              <h3 className="font-bold text-violet-800 text-lg mb-3">一、代禱是與神合一的自然流露，不是身份的誇耀</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔指出，教會裡對代禱有個很畸形的認識：人們說「我要成為代禱者」、「我要成為代禱勇士」，卻沒有認識到所有代禱的根基是「你與神要合二為一」。重點並不是要花多少時間成為一個代禱者，也不是要怎麼樣成為代禱勇士，那應該是從你跟神的親密關係中自然流露出來的。如果你專注在最重要的事上——認識神，神會負責剩餘的事。她說，她不覺得教會中有哪個職分比代禱者更高：教會中最高的職分是使徒、君王、先知、牧師、教師，這些職分是要來幫助教會建造的；但在這些職分之上，是神最高呼召的代禱者，也就是祭司的職分。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔進一步說明，代禱者也有不同的階級：有的代禱者被神使用為個人禱告；有的在更高階級，為一個教會禱告；再高一等，為一個城市代禱；更高，為一個州禱告；再高，為一個國家禱告。她強調，為你的城市禱告，與你「成為這個城市禱告的祭司」，是兩件不同的事。她也分享一個有趣的觀察：教會中最高層次的代禱者，99%以上並不是很出名，甚至教會裡的人都不認識他們，有的年紀很輕，有的非常老，甚至一百多歲。神一直存留他們的性命，把他們隱藏在一些地方，為整個世界禱告——這是其他人所不能明白的。她坦言今天所講的是初級代禱的基礎，但鼓勵大家要一直努力進到更深，讓神在代禱上培育、教導，越來越進深，在地上為神成就更多的事。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-violet-800 text-lg mb-3">二、真正的禱告完全關乎神，不關乎自己</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔強調，真正的禱告完全不關乎我們，完全是關乎神，關乎祂的旨意、祂的目的、祂的榮耀。一旦禱告成為關乎我們個人的榮耀，禱告的果效就大大降低。當我們吹捧自己的代禱生活，或吹噓自己是多麼大有能力的代禱勇士，就進入了驕傲，禱告的功效就開始持續下降——因為禱告不是要榮耀我們，乃是要榮耀祂。她指出，在禱告上想要有果效，心需要充滿信心；耶穌說「你的信心哪怕只有像芥菜種那麼小」，說的是信心不在於量，而在於質——是純淨的信，是沒有敗壞的信心。這信心不是從你我而來，而是單單從神而來。有時候神故意讓你感覺軟弱——不管是體力上、情感上，甚至靈裡——好使透過你運行的信心完完全全是從祂而來，成就非常偉大的事。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-violet-800 text-lg mb-3">三、奈及利亞總統大選的代禱見證</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔分享第一次去奈及利亞的經歷。當時該國即將舉行總統大選，領先的候選人是一位非常暴力、勢力龐大的回教激進份子；現任總統則是基督徒，接手時國家政治極度脆弱，短短40年內，奈及利亞從富裕國家變成幾乎是貧窮的第三世界國家。這位基督徒總統面臨許多重大困難，加上資歷尚淺，也犯了不少錯誤。相較之下，回教候選人勢力強大，幾乎所有非基督徒都覺得換一個強勢的人當總統會比較穩定，因此當時只有25%或更少的人支持這位基督徒總統，回教候選人的支持率卻高達75%。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神卻對妮塔說：「你如果把『鷹的聚集』帶到奈及利亞，為這個國家禱告，我會把現任基督徒總統繼續留在位上，然後把穩定帶到這個國家，並預備奈及利亞領受下一波的復興。」於是他們順服前往。聚會中他們遭遇極大的屬靈攔阻：那些高階執政掌權的邪靈知道他們的來意，極力攔阻。一位巫師甚至對妮塔下咒，使她變得非常軟弱、患上嚴重痢疾，中場休息時她必須回房躺著，連頭都無法從枕頭上抬起，一抬起來就會暈眩失去知覺，但神每次都賜給她足夠的力氣繼續帶領聚會。在聚集中，他們向神做了許多悔改；神也指示妮塔，聚會中出現一個「魔君」，必須先處理這個魔君，才能處理更大的聖戰之靈。他們照做了，但妮塔卻病得越來越重，到最後一場聚會，她病到幾乎說不出話，只能小聲耳語，也無法站立。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                然而在那次聚會中，他們已經做了一切能做的事，去攔阻那聖戰的靈。他們敬拜了很長時間後，妮塔扶著桌子站起來，告訴會眾：「我們已經完成了我們的工作，剩下要做的就是捆綁這個聖戰的靈。」她說，當她奉主的名要制服那仇敵時，因為身體極度軟弱，聲音只能氣若遊絲，完全不是大聲宣告出來的。但從後來歷史發生的事情來看，他們是成功了！進入大選初選階段，回教候選人擁有75%的選票，所有基督徒都覺得已經失敗了，妮塔卻告訴他們：「你們要堅強站立，神知道祂在做什麼，我們做了我們該做的，神成就祂自己的應許。」結果，初選之後，這位回教候選人竟走進基督徒總統的辦公室，說：「我要退出這次選舉，因為阿拉對我說，他要我支持你，我將我那75%的選票給你，使你能贏得這次大選。」妮塔形容，這件事的荒謬程度，就像巴勒斯坦總理走進以色列總理辦公室說「我們發現我們其實很喜歡你們，我會支持以色列不斷擴張，我們也不再跟你們打仗」一樣不可思議——但它真的發生了。這位基督徒總統因此得到連任，繼續帶領奈及利亞政府。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                不僅如此，那個在聚集中顯現、掌管聯邦或地方政府官員的次要邪靈，長年以巫術控制當地政府高官——有的甚至在高位上長達50年，這些官員若想晉升或連任，必須敬拜這個邪靈。但那次選舉中，除了唯一一位願意把榮耀歸給真神的官員之外，這些高官全部落選。妮塔說，她講這個故事，是要讓大家明白：權柄和你的身量無關，信心和你外面的行為無關，禱告的成功與否也和你無關，而是完全在乎於神。如果你禱告出神要你禱告的，不管你當時的光景如何、感覺自己何等軟弱或不配，只要信心完全在於神，就會看到神的應許成就。她總結道：「信心是天堂的貨幣，而禱告是貨幣流通的管道。若不是經由禱告，神在地上就不做什麼——這就是禱告的重要性。一切地上發生的事，都是禱告的結果。如果在某件事上沒有禱告，撒旦就完全有自由按著牠的意願來成就。」她問大家：是什麼決定事情按神的意思或撒旦的意思成就呢？答案就是禱告。她說，很多時候我們會問神為什麼允許某些事情發生，答案常常都是因為沒有禱告。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-violet-800 text-lg mb-3">四、基督徒團體蒙保守的見證——天使阻擋暴徒</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔再分享一個例子：南美洲一個國家發生暴動，全國各地都有基督徒團體聚集傳福音，暴徒把很多這樣的聚會場所毀掉，翻過圍牆沖進大門，把裡面的人屠殺掉。當暴徒來到某個特別的基督徒聚會場所，翻過圍牆正要沖進大門時，這些基督徒並不驚慌，仍邊禱告、邊讚美神。門外的激進暴徒手持槍枝正要衝進門，卻看見門前站著好幾個非常巨大的天使——神讓這些邪惡的人親眼看見這些天使，他們大大驚嚇，轉身就逃跑了，連踹門都沒有嘗試。這個特別的基督徒團體所有人的性命因此得以保全。妮塔問：這個團體和其他團體有什麼區別呢？就是因為他們禱告。其實很簡單，因為神應允祂子民的禱告。
              </p>
              <p className="text-gray-700 leading-relaxed">
                她再次強調：信心是天堂的貨幣，禱告就是使這貨幣流通的管道，沒有禱告神就不做什麼。所以不管一件事情多大或多小，禱告了，神就會介入；但如果沒有人邀請祂——不管是你或其他禱告的人——神就不會介入。她也解釋，如果一個國家有人禱告，哪怕只有一小群基督徒，神就可以在一個不信主的國家行很驚人的事；如果一個國家完全沒有基督徒，神就會使用她先前提到那些行走在很高層次、教會都不知道的代禱者來為這國家禱告。她形容，有一種「神商議決策的聚會」——參與商議的基督徒能夠在聚會中獲得神的一些洞見，知道神心中隱秘的事，那裡就像一個立約的地方，你可以在那裡享受神的同在、聽到神的決策，然後遵照去做。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-violet-800 text-lg mb-3">五、懇求式的禱告（Supplication）——甘願軟弱，為他人代求</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔開始介紹聖經裡不同種類的禱告，第一種是「懇求式的禱告」（supplication）。這種禱告使自己處在一個軟弱的地位，為另一個人代求——當我們必須到一個更高的權柄面前禱告，或為了另一個人去懇求這更高的權柄，那是一個謙卑的地方，你要自卑在神面前，因為你知道自己無法解決這個問題，必須靠神來解決；你自己沒有辦法成為禱告的回應，是神要來成就，因此在軟弱中來到神面前代禱。有時候，你甚至要真實地變得軟弱。她以自己的醫治恩賜為例：當神在聚會中施行醫治時，這恩賜讓她能感受到弟兄姐妹的軟弱在自己身上——如果有人頭痛，她也會頭痛；如果有人背痛，她也會背痛。這使她處於一種軟弱中，以至於別人可以得著醫治，這其實就是祭司服侍的一部分。她也分享，有時在公共交通工具上，鄰座的人正在淫亂或懼怕的光景中，她能感受到，就一路默默為對方禱告，求神釋放對方、賜下平安。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔講述一次到某教會服事的經歷：她一踏入教會的門，整個魂就好像支離破碎一樣，一部分往這個方向、一部分往那個方向，心煩意亂，想要逃跑。上台前，牧師過來坐在她身旁，問她昨天休息得好嗎、今天感覺如何，她如實回答：「我好像整個人支離破碎一樣，我感覺心煩意亂，迷失方向，我其中一部分很想逃離這個地方。」牧師問：「你今天還能服事我們嗎？」她說：「我現在所感覺的並不是從我而來的，是有關你教會的，你馬上就要經歷這個教會的分裂。」牧師驚訝地問是不是神告訴她的，她說：「我感受到了。」牧師承認：「你說的是真的，我已經為這事禱告好幾個禮拜了，我不知道該怎麼辦？如果神不介入，我的教會將經歷巨大的分裂，一分為二。」神藉著妮塔給了他一些忠告：「我跟你講的跟你一切自然感覺的是完全相反的，但是如果你遵照我今天跟你說的，你的教會就會免於分裂。」牧師照做了，當教會的重大會議召開時，帶下了和平，分裂並沒有發生。妮塔說，她成為軟弱，使得這個牧師成為剛強，這是在神的智慧當中——禱告的一部分，就是我成為軟弱，使得神能成為解決整個問題的資源。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔另分享一位朋友的見證：她是約翰·雷克（John G. Lake）的女兒，跟先生都是神面前非常棒的代禱者。有一次她陷入很深的憂鬱長達三天之久，要盡全力擺脫想自殺的念頭，三天之久從早到晚不停地禱告。三天之後，神對她說：「你是在為某某人禱告，她一直有自殺的傾向，陷在很深的抑鬱裡面，現在你完成禱告了，可以打電話給她，釋放她從這個憂鬱裡出來。」妮塔說，她的朋友成了軟弱，以至於另一個人可以得著醫治，這正是懇求式代求禱告的意義。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-violet-800 text-lg mb-3">六、所羅門獻殿的禱告——大祭司的禱告典範</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔請大家翻到列王紀上八章22節，介紹所羅門獻殿的禱告，她說這是「一個真正明白神祭司職分的人」的禱告，甚至覺得這是聖經中最美的一段有關禱告的經文。從22節開始，所羅門跪在神面前，雙手舉起，向全能的神敬拜讚美，一直到24節，他為著神應許成就大衛的事來讚美神；到28節，他開始為以色列人代求——雖然是為獻殿禱告，但內容不只是為獻殿而發，而是代表整個以色列百姓在禱告，所以這是一個真正大祭司的禱告，也是一個代求的禱告。他這樣懇求神，因著以色列的緣故在神面前變得軟弱，為以色列向神求憐憫。到31節，他開始說：「神啊，求你饒恕以色列民，請你在這個國中做事，使他們能夠跟禰和好。」並向神陳明各種情境：「神啊，如果以色列人做了這些事，你就做這些事；如果他們做了那樣的事，求你來行這些事。」這裡所講的，都是在說：「神啊，你要來饒恕赦免以色列民，也幫助以色列民能彼此饒恕。」到38節，他開始向神懇求：「當百姓禱告的時候，神啊，請你回應。」這一章其餘的部分都是這方面的禱告，末了他再次回到開頭所禱告的，為著神的所是敬拜祂，為著神過去所做的稱謝祂。妮塔強調，這段經文非常值得反復研讀——在整本聖經中，這是最美的一段有關禱告的經文，如果想要知道怎麼樣禱告，就來研讀這一段，因為這種類型的禱告，神始終都會垂聽。
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
                '代禱不是一個要去「努力達成」的身份標籤，而是與神親密關係自然流露的結果——專注認識神，代禱的生命自然會被神的心驅使產生。',
                '真正有果效的禱告完全關乎神的榮耀，不關乎個人；一旦禱告變成炫耀自己屬靈能力，功效便開始下降。信心的重點在「質」不在「量」，且完全從神而來，有時神刻意讓人軟弱，好叫成就的能力清楚顯明出於祂。',
                '奈及利亞總統大選的見證是全講最戲劇性的例子：妮塔在身體病重、聲音氣若遊絲的軟弱光景中憑信心捆綁「聖戰的靈」，最終看見神應許以超乎常理的方式成就——證明「權柄和你的身量無關，禱告的成功與否完全在乎於神」。',
                '「信心是天堂的貨幣，禱告是貨幣流通的管道」——地上發生的一切都與是否有人禱告直接相關；沒有禱告，撒但就有自由按自己的意願行事；南美洲基督徒團體蒙天使保護的見證正說明了這一點。',
                '「懇求式的禱告」（supplication）是甘願在神面前變得軟弱、為他人代求的禱告，是祭司服侍的核心之一；所羅門獻殿禱告（王上八：22起）是聖經中最完整的示範：先敬拜稱謝，再代人求赦免與和好，最後再次回到敬拜。',
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
              <h4 className="font-semibold text-gray-800 mb-2">代禱者的「隱藏性」對教會事工觀有何提醒？</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔提到，教會中最高層次的代禱者絕大多數並不出名，甚至連自己教會的人都不認識他們。這與現代教會文化中常見對「知名度」「事工規模」的重視形成強烈對比，提醒教會群體：真正在屬靈爭戰前線、托住一個地方或國家的代禱者，可能一輩子都不會站上講台被表彰。這對教會如何看待、牧養、扶持那些默默禱告卻沒有「亮眼服事」的肢體，是值得深思的提醒。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">屬靈爭戰中的「軟弱」與「得勝」如何並存？</h4>
              <p className="text-gray-700 leading-relaxed">
                奈及利亞的見證中，妮塔是在身體病重、幾乎無法站立、聲音氣若遊絲的狀態下宣告得勝的話，而不是在剛強壯膽的狀態下大聲宣告。這與一般對屬靈爭戰「大有能力、聲音宏亮」的想像形成對比，呼應了保羅所說「我什麼時候軟弱，什麼時候就剛強了」（林後十二：10）。這提醒讀者：代禱的果效不是取決於外在展現的氣勢或情緒的高昂，而是取決於是否真實地憑信心、按神的心意宣告出神的話。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「懇求式禱告」與情緒界限的健康拿捏</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔描述自己能實際感受到別人的頭痛、背痛，甚至懼怕、淫亂等光景的軟弱，這是一種相當深度、甚至帶著特殊恩賜色彩的代求方式，不是每位讀者都能或需要複製的經驗。對一般代禱者而言，「懇求式禱告」更普遍的操練，或許在於願意放下「我可以幫你解決」的姿態，承認「我沒有辦法解決這個問題，只有神能」，在謙卑與誠實地承認自己的有限中，把問題完全交託給神——這才是這種禱告類型對大多數人真正可操練、可持續的核心精神。
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
              '妮塔說「代禱是與神合一的自然流露」，而不是刻意追求的身份。你過去對「成為代禱勇士」的渴望裡，有沒有摻雜想要被看見、被肯定的成分？',
              '「一旦禱告成為關乎我們個人的榮耀，功效就大大降低」——回想你最近的禱告，有沒有不自覺地在向人（甚至向自己）證明你多會禱告？',
              '奈及利亞見證中，妮塔在極度軟弱的身體狀況下仍憑信心宣告得勝。你是否曾在自己覺得最沒有力量、最不配的時刻，仍選擇憑信心禱告？結果如何？',
              '「沒有禱告，神就不做什麼」這句話帶著張力——你如何理解神主權與人代求責任之間的關係？',
              '教會免於分裂的見證中，牧師願意「按著跟自己感覺完全相反」的忠告去做。你是否曾經歷過神給的引導與你自己的直覺完全相反的情況？你當時如何抉擇？',
              '所羅門獻殿禱告的次序是：敬拜稱謝→代求赦免→再次敬拜。對照你自己的代禱習慣，你的禱告通常從哪裡開始、在哪裡結束？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 研讀所羅門獻殿禱告（王上八：22-53）</h4>
              <p className="text-gray-700 mb-2">用一週的時間，每天讀一小段這段經文，按照「敬拜稱謝→代求赦免與和好→再次敬拜」的結構，用自己的話仿寫一段代求禱告，練習大祭司禱告的模式。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🕊️ 為一件「與己無關」的事代求</h4>
              <p className="text-gray-700 mb-2">
                本週挑選一件與你個人利益完全無關的事（例如某個國家的政局、某個素未謀面之人的難處），單純因為神的心意去為它禱告，操練「禱告不關乎自己」的功課。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🤲 練習「承認自己的有限」式禱告</h4>
              <p className="text-gray-700 mb-2">
                為一件你一直想靠自己力量解決、卻遲遲無解的難處，練習向神誠實禱告：「神啊，我沒有辦法解決這件事，只有禰能。」放下自己「應該要有辦法」的壓力，把問題真正交託出去。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「我的父，禰是何等奇妙，禰全然良善，充滿智慧。禰的意念非同我的意念，禰的道路非同我的道路。求禰教導我，讓我的禱告不是關乎自己，而是關乎禰的旨意、禰的目的、禰的榮耀。當我軟弱的時候，求禰使我知道，那正是禰的能力要顯明的時刻。奉主寶貴的名禱告，阿們！」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
