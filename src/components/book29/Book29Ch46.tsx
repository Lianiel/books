import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch46() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第46章</h1>
        <h2 className="text-xl font-semibold text-gray-700">肉體的拆毀</h2>
        <p className="text-gray-500 mt-1">亞伯蘭信耶和華，耶和華就以此為他的義。　創世記十五6</p>
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
              亞伯蘭的信心從離父家、築祭壇、搭帳棚、不爭地、救侄兒、獻什一等事情顯明出來，那是信心的開啟時期。但神要幫助亞伯蘭信心繼續成長擴張，就要藉著肉體的拆毀來改造他，所要拆毀的包括人所有、人所做、人所能。過程中，也將未來要成就的事更多顯明給亞伯拉罕。本書前面每一章最多分享一章聖經的範圍，從本章開始，有時會跨越到兩章聖經以上。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、不要以利以謝——人所有（創十五1~19）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記十五1：「這事以後，耶和華在異象中有話對亞伯蘭說：亞伯蘭，你不要懼怕！我是你的盾牌，必大大的賞賜你。」所謂「這事以後」，就是亞伯蘭為羅得爭戰，且不貪戀財物、主動什一奉獻之後。神在天上觀看，就主動來對亞伯蘭說，我是你的盾牌，必大大賞賜你。這樣的應許恰好回應了亞伯蘭爭戰的信心與奉獻的信心。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                亞伯蘭覺得已經得到滿滿的祝福，只差還沒有兒子這件事，亞伯蘭那時原本已有一位僕人叫以利以謝，他很忠心，跟亞伯蘭的關係也很好。所以亞伯蘭對神說：「2……主耶和華啊，我既無子，你還賜我甚麼呢？並且要承受我家業的是大馬色人以利以謝。3亞伯蘭又說：你沒有給我兒子；那生在我家中的人就是我的後嗣。」（創十五2-3）按照當時的慣例，若沒有兒子，僕人可以成為兒子，所以亞伯蘭如此提議。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                一般來講，我們未信主之前已有的才幹和資產，都可以被主所用。有錢人信耶穌，可以奉獻金錢被主使用；有學問的人信耶穌，他的知識可以被主使用；一個企業家信耶穌，他的才幹可以被主使用。但要留意，神有一個更高的法則，就是人一定要倚靠神。神可能會說：「你原本所有的，包括你的錢財、才幹、學歷、知識、口才，我不一定能用，必須先來支取我要給你的恩典，然後這些才會變得有用。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神對亞伯蘭說：「你本身所生的才成為你的後嗣。」（創十五4）耶和華清楚地告訴亞伯蘭，要賜給他福氣，並繼續賜福他的後裔，但那後裔並不是原來就有的僕人以利以謝，而是他後來要親生的那一位。為了增加亞伯蘭的信心，神就領他到外邊去觀看，說：「你向天觀看，數算眾星，能數得過來嗎？你的後裔將要如此。」（創十五5）這就是神給亞伯蘭的異象，看到他的後裔要像眾星那樣的多。眾星的特色是有幾乎無窮的層次，一、兩顆行星最亮，因為距離最近，在太陽系裡面；再來是比較亮的恆星，因為比較接近太陽系，用肉眼看可以看到。若用天文望遠鏡，則能看到比較遠的許多恆星，數量呈等比級數增加。亞伯蘭的後裔也會如此，起初只有一、兩位，但每一代成等比級數增加，愈來愈多，到最後幾乎數不盡。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                不僅古代的亞伯蘭可以擁有眾星的異象，他有數千年可以繁衍後裔。其實近代的人也可以有眾星的異象，戴德生宣教士有華人歸主的異象，因此1854年來到中國，起初領人歸主從個位數開始，以後逐漸增加。本來內地沒有宣教士進去，他就成立內地會，將宣教士差往比較艱難的內地，帶領數萬人信主。經過幾代，1950年前後，華人信主已有八十多萬。之後歷經戰亂與逼迫，教會轉入地下，至2000年，竟有八千多萬中國人信主，且以內地農村居多，其中大半可說是戴德生的屬靈後裔。目前已增長到一億多，這不像是天上的星那麼多嗎？有時我們沒有信心，神就給我們看異象，來增加我們的信心。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                看完天上眾星的異象後，「亞伯蘭信耶和華，耶和華就以此為他的義」（創十五6）。保羅在羅馬書講因信稱義，就是以此為例，說：「亞伯拉罕信神，這就算為他的義。」（羅四3）神呼召亞伯蘭的整個過程中，亞伯蘭並沒有做任何事，只是一直被神調整觀念，讓他知道不是靠自己擁有的，而是神要賜下全新的祝福。他願意改變自己的觀念，因著相信神的話就被稱義了。所以不是我們有什麼可以給神使用，也不是我們原來擁有的一定不能給神使用，而是神要我們改變觀念，要將自己所有的全部獻在神的祭壇上，告訴神說：「我有的這一切算不得什麼，需要你的賜福。」因此，同樣的金錢、才幹、知識、口才、智慧、能力、學歷，有神賜福和沒有神賜福差別很大。如此我們才不會驕傲，以為自己對教會、對神的國度有多麼大的貢獻；而是知道自己所擁有的一切全是神所賞賜的，若不是他的賜福，這一切都算不得什麼。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神可以使用學歷高的人，也可以使用沒有學歷的人；神可以使用有口才的人，也可以使用拙口笨舌的人；神可以使用有錢的人，也可以使用貧窮的人。當我們願意將自己的一切獻在神的祭壇上被神更新後，他就能使我們成為他貴重的器皿，更多被他所使用。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記十五7-9：「7耶和華又對他說：我是耶和華，曾領你出了迦勒底的吾珥，為要將這地賜你為業。8亞伯蘭說：主耶和華啊，我怎能知道必得這地為業呢？9他說：你為我取一隻三年的母牛，一隻三年的母山羊，一隻三年的公綿羊，一隻斑鳩，一隻雛鴿。……」神除了要賜下後裔，還要賜下這片地土。亞伯蘭對此不太明白，因為這地已有許多先住民。因此神要亞伯拉罕預備祭物，在獻祭過程中與亞伯蘭立約（創十五17-18），並啟示有關如何得這地的過程。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記十五12-16：「12日頭正落的時候，亞伯蘭沉沉地睡了；忽然有驚人的大黑暗落在他身上。13耶和華對亞伯蘭說：你要的確知道，你的後裔必寄居別人的地，又服事那地的人；那地的人要苦待他們四百年。14並且他們所要服事的那國，我要懲罰，後來他們必帶著許多財物從那裡出來。15但你要享大壽數，平平安安地歸到你列祖那裡，被人埋葬。16到了第四代，他們必回到此地，因為亞摩利人的罪孽還沒有滿盈。」那驚人的黑暗代表亞伯蘭的後裔將在埃及受苦四百年，亞伯蘭這時八十五歲，一百歲生以撒，以撒六十歲生雅各，雅各一百三十歲帶全家進埃及，進埃及之前這段時間共二百零五年。算一算，神告訴亞伯蘭的是關於六百多年以後的事，那時亞摩利人罪惡才滿盈，神才會審判消滅他們，換成以色列人在此居住。
              </p>
              <p className="text-gray-700 leading-relaxed">
                為了使亞伯蘭信心堅定，神做了三件事，一是給他看眾星的異象，二是在獻祭中與他立約，祭物的血表明神與他有生死盟的關係，三是預告後裔將如何發展，還包括有時間表。藉此事我們看到神何等有耐心、有智慧、有計畫地引領著亞伯蘭，預備他的後裔成為選民，成為全世界的見證，以便祝福萬國萬民。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、不要以實瑪利——人所做（創十六1~4，7~13，廿一12）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                信心需要考驗、成長。撒萊逐漸年老，實在生不出孩子，神又不要僕人以利以謝，於是撒萊跟丈夫亞伯蘭建議，你可以納我的婢女埃及人夏甲為妾，跟她同房，好叫我能因她得兒子。亞伯蘭聽從撒萊的建議，納夏甲為妾，與夏甲同房（創十六2~4）。這卻產生了問題，當婢女夏甲懷孕後，就小看她的主母撒萊（創十六4）。夏甲的身份是婢女，原本撒萊只想透過她得兒子，所以夏甲應該有的觀念是：「我的成功乃是主母的成功，若非主母提議，我一輩子也不可能成為亞伯蘭的妾，為他生兒子。」她本應說：「我現在所懷的是主母的孩子。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這樣的倫理觀念也當運用在教會、公司當中，一個小組長或基層主管若因自己在某些方面比較優秀，就小看他的權柄或上司，認為是自己的功勞，而不知是權柄遮蓋與分工合作的結果，那就錯了。結局很可能會像夏甲一樣被趕出去（創十六6），因為不懂得感恩、不思想權柄所給的好處、將功勞佔為己有，甚至想取代在上者的位份。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神在此給亞伯蘭的功課是：不要人所做的。當神應許要讓亞伯蘭有後嗣，且是像天上的眾星那麼多時（創十五4~5），他相信神所說的話（創十五6），就應當相信神必做成這事。神的應許並非靠人想盡辦法，做各種嘗試而成，乃是神要親自成就，也可能藉著神蹟而做成。因此神強調：「不然，你妻子撒拉要給你生一個兒子，你要給他起名叫以撒。我要與他堅定所立的約，作他後裔永遠的約。」（創十七19）又說：「從以撒生的，才要稱為你的後裔。」（創廿一12）當時亞伯蘭並沒有分辨妻子建議的好壞對錯，也沒有求問神；他當時若求問神，神應會回答說：「撒萊生的才算，你不要靠自己做，這樣會衍生許多問題。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                使女夏甲是年輕女性，比較容易懷孕生子，以人的角度，這個建議看似不錯，但其實夏甲會驕傲，甚至會想取代主母的地位。這樣怎能合適成為神選民的祖先？後來的歷史發展，夏甲所生的以實瑪利成為多數阿拉伯人的祖先（創十六15），以實瑪利生了十二個兒子，分成十二族長，有很大的發展（創廿五12-16）。現在阿拉伯人是以色列人最大的敵人，古時阿拉伯人的祖先被趕出去，現在阿拉伯人要將以色列人推入地中海。當初撒萊的建議幫了倒忙。不是做得越多越好，若沒有先求問神，人所做的將會造成更大的困擾。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                從另一個角度說，人雖有軟弱失敗，但神有憐憫包容，當夏甲從撒萊面前逃走後，「7耶和華的使者在曠野書珥路上的水泉旁遇見他，8對他說：撒萊的使女夏甲，你從那裡來？要往那裡去？夏甲說：我從我的主母撒萊面前逃出來。9耶和華的使者對他說：你回到你主母那裡，服在他手下；10又說：我必使你的後裔極其繁多，甚至不可勝數；11並說：你如今懷孕要生一個兒子，可以給他起名叫以實瑪利，因為耶和華聽見了你的苦情。（以實瑪利就是神聽見的意思）12他為人必像野驢。他的手要攻打人，人的手也要攻打他；他必住在眾弟兄的東邊。13夏甲就稱那對他說話的耶和華為看顧人的神。因而說：在這裡我也看見那看顧我的麼？」（創十六7-13）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神並沒有撇棄夏甲與以實瑪利，神應允夏甲：「我必使你的後裔極其繁多，甚至不可勝數。」（創十七10）但要先做一件事：「你回到你主母那裡，服在他手下。」（創十七9）人即使有錯，只要接受神的校正，仍然可以修補。今日的阿拉伯人有兩條蒙福的路可以走，一個是與以色列建立友好關係，將從以色列得到現代科技、醫療等好處；一個是來信靠耶穌基督，因耶穌是亞伯拉罕的後裔當中真正能使萬國萬民蒙恩得救的人。感謝主，目前已有些阿拉伯國家陸續開啟了與以色列的友好關係，也有許多阿拉伯人信了耶穌，其中不少人是在夢中遇見耶穌。他們大部分是非公開的，在地下教會聚會。也有些人保持去清真寺禮拜，因為所拜的也是亞伯拉罕的神，但他們清楚知道，是耶穌基督拯救了他們，使他們能真認識神。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、不要生育能力——人所能（創十七1，16~19）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記十六16說：「夏甲給亞伯蘭生以實瑪利的時候，亞伯蘭年八十六歲。」創世記十七1則說：「亞伯蘭年九十九歲的時候，耶和華向他顯現，……」聖經原沒有分章節，這兩節經文是相連的，但時間相隔十三年，神都沒有說話。一方面，神可能因亞伯蘭做錯事而生氣，所以靜默不語；另一方面，神可能要讓亞伯蘭跟撒萊更老，超過生育年齡。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當神跟亞伯拉罕說要使他從撒拉得兒子時（創十七16，十八10），亞伯拉罕俯伏在地喜笑，心裡說：「一百歲的人還能得孩子嗎？撒拉已經九十歲了，還能生養嗎？」（創十七17）撒拉也心裡暗笑說：「我既已衰敗，我主也老邁，豈能有這喜事呢？」（創十八12）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                十三年前還可以靠自己娶妾生子，神靜默了十三年，使他們老得不能生育，再對他們說話。使他們認清，這孩子不是靠人自己生的，而是神給的。保羅在羅馬書四17~25提到，這是復活的大能，亞伯拉罕和撒拉的身體如同已死，神使他們的身體復活過來，能夠懷孕生子。保羅在加拉太書也說以撒是憑著應許生的，有別於以實瑪利是從肉體生的（加四22-23）。並說：「弟兄們，我們是憑著應許作兒女，如同以撒一樣。」（加四28）
              </p>
              <p className="text-gray-700 leading-relaxed">
                許多時候，我們自認為有能力可以做這個、做那個，但往往神會等，等我們都忙完、做完，或超過我們能力的極限，證明自己沒辦法了，神才出手做事。這就是人的盡頭、神的起頭。一方面，我們自己得救，成為神的兒女，完全是神的工作，人不可能做甚麼善事來救自己；另一方面，我們帶領人信主，也是神的工作，一定要藉著禱告與聖靈同工，才可能有人經歷重生。力克・胡哲（Nick Vujicic）出生時沒有手、沒有腳，在人看來什麼都沒有，但後來被神大大的使用，在世界各地影響著無數的人。神能夠在看來軟弱無能的人身上做奇妙的工作。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                跟隨主的過程，剛開始跟亞伯蘭第一階段信心開啟時期一樣，有什麼就奉獻什麼，緊緊跟隨神就好。第二階段，神會開始剝奪我們的肉體，在人所有、人所做，以及人所能三方面進行拆毀。這樣的功課，大部分是在跟隨耶穌一段時間後學習的。不是我們有什麼，而是神要什麼；不是我們能做什麼，而是神要做什麼。盡可能讓神來做，免得我們驕傲。這是一個被神使用的人要學習的功課。讓我們再一次把自己全然獻上，順服神的帶領，觀看神的作為。天天藉著親近主、禱告主，來與聖靈同工。我們自己靈命的成長及所做的事奉，都必須有聖靈的工作。願一切榮耀歸給神！
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
                '神拆毀亞伯蘭「人所有」——不要僕人以利以謝作後嗣，而讓他看眾星的異象，教導他不是靠自己原有的一切，乃要全然倚靠神的賜福。',
                '神拆毀「人所做」——撒萊建議納夏甲為妾生子，是靠人的方法而非神的應許，結果衍生出以實瑪利與撒萊、後來與以撒的長期對立，神應許的後裔只能從以撒而出。',
                '神拆毀「人所能」——刻意靜默十三年使亞伯蘭與撒萊超過生育年齡才應許生子，讓他們明白以撒是「憑應許生」而非「憑肉體生」，這是人的盡頭、神的起頭。',
                '亞伯蘭因信神的應許而被稱為義（創十五6），這是因信稱義的重要根據，保羅在羅馬書、加拉太書都引用此例說明因信稱義與憑應許生的屬靈原則。',
                '神藉著三件事堅定亞伯蘭的信心：眾星的異象、獻祭立約、預告後裔四百年寄居埃及的時間表，顯明神有耐心、有智慧、有計畫地引領救恩歷史。',
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
              '神為什麼不要僕人以利以謝作為亞伯蘭的兒子？這事給我們什麼省思與應用？',
              '亞伯蘭接受妻子的建議，與使女夏甲同房，懷孕生了以實瑪利。這整件事的過程出了哪些問題？請每人分享其中一項，並應用在自己的生活。',
              '為什麼相隔十三年，神才再次對亞伯拉罕說話？神要亞伯蘭得到超越肉體能力的應許之子，對他的信心成長有何好處？對新約時代的救恩工作，有何重要的預表？',
              '神藉著拆毀人所有、人所做、人所能，來幫助亞伯蘭的信心成長。請分享自己曾經被神拆毀而得益處的經驗。',
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
