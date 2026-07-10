import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch44() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第44章</h1>
        <h2 className="text-xl font-semibold text-gray-700">寄居與不爭</h2>
        <p className="text-gray-500 mt-1">你我不可相爭……遍地不都在你眼前嗎？請你離開我：你向左，我就向右；你向右，我就向左。　創世記十三8-9</p>
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
              亞伯蘭從埃及回到南地，再從南地回到伯特利，在這個曾經建立祭壇的地方再次向神獻祭、求告神的名。他的獻祭至少包含三種意義，一是代表感恩的平安祭，因為神在埃及拯救他，也豐盛地供應他；二是贖罪祭，因自己犯罪，造成妻子落入險境，需要向神獻祭認罪；三是燔祭，因為不能倚靠自己，當每天把自己獻給神，跟隨主而行。這章的開頭與這章的結尾，都講到亞伯蘭為耶和華築壇獻祭，神要亞伯蘭走遍迦南全地之後，亞伯蘭在一個新的地點——希伯崙幔利的橡樹那裏築壇獻祭（創十三18）。這代表建立祭壇是亞伯蘭慣常做的事，過去如何在伯特利築壇獻祭，此時在希伯崙幔利的橡樹這裏，也築壇獻祭。亞伯拉罕是信心之父，上一章看到他的信心表現在離開父家、本族，這一章接著看到他的信心表現在寄居的生活，以及土地的禮讓。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、寄居的信心——祭壇與帳棚</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                亞伯拉罕的記號，除了祭壇以外，還有帳棚，而且這二者經常同時出現。他去埃及之前在伯特利東邊支搭帳棚，也建立祭壇（創十二8）。他從埃及回來後，也在同一個地方支搭帳棚、建立祭壇（創十三3），最後在希伯崙幔利的橡樹那裡，築壇獻祭之前，聖經也說他搬了帳棚，來到那裏居住（創十三18），這是寄居生活的樣式，是信心的表現。祭壇的意義與重要性，上一章已談過，這一章就多一點談帳棚。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                新約描寫亞伯拉罕，特別提到他是住帳棚的：「8亞伯拉罕因著信，蒙召的時候就遵命出去，往將來要得為業的地方去；出去的時候，還不知往那裡去。9他因著信，就在所應許之地作客，好像在異地居住帳棚，與那同蒙一個應許的以撒、雅各一樣。10因為他等候那座有根基的城，就是神所經營所建造的。」（來十一8~10）這段話提到以下三個重點：
              </p>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">一、應許地作客</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  應許地是將來子孫要得到的地，但目前在那裡沒有親戚、朋友，之前從未去過，要住在哪裡也還不知道。雖然那地是神應許要給亞伯拉罕的，但他來到這個應許地時只能是客人，不是主人。如同現今的宣教士，被神呼召去到外地宣教，就是在應許地作客。戴德生到中國宣教，是一個作客的人；馬偕到台灣宣教，也是一個作客的人，但慢慢的，他們的肉身後裔及屬靈後裔，會成為這地的主人。亞伯拉罕是洪水後舊約時代的第一位宣教士，而耶穌是新約時代的第一位宣教士。聖經說，道成了肉身，住在我們中間（約一14），住這個字，原文是搭棚，耶穌搭帳棚在我們中間。耶穌來到世界上，沒有人接待他，連客房都沒有為他預留，耶穌只好被生在放牲畜飼料的地方。耶穌來到世上是來作客的，三十歲以後出來傳道，他自己說：「人子沒有枕頭的地方」（太八20），但有一天，耶穌的屬靈後裔要成為全世界的主人。亞伯拉罕帶著一顆寄居的信心去到神應許之地作客，為要得著那地，有一天他的後裔會成為那地的主人。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">二、搭帳篷居住</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  搭帳棚的方式是一種信心，因為是在不穩定的狀況下。但是信心不是自信，乃是相信神。所以亞伯拉罕每到一個地方就建立祭壇，與神保持親近的關係，並搭帳棚，保持機動。搭帳棚是游牧民族的生活方式，因他們要牧養羊。由於當地的雨水不多，草不易快速生長，每當羊將一處的草吃完後，他們就要將羊帶到另一處吃草，因此他們不住一般的房子，只搭帳棚居住，以便隨時可以遷移，現在的貝都因人就是這種生活方式。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  亞伯拉罕以牧養牛羊維生，後來的以撒、雅各也都牧養牛羊，所以都住帳棚。迦南地饑荒時，雅各跟家人共七十人到埃及，法老問他們是做什麼的？他們回答說，是牧羊的。（創四六27、四七3）神說所應許的迦南地是流奶與蜜之地，事實上以色列的土地乾燥，怎麼會有奶和蜜流出呢？原來神的意思是他們能在那裡牧羊，而羊就會產生羊奶。蜜呢？就是那裡有許多的花卉和蜜蜂，會生產蜂蜜；也出產椰棗，香甜如蜜。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  亞伯拉罕有很多羊群和牛群，他隨時準備好要換地方居住。使徒保羅的宣教模式，也像搭帳棚，因為他到一個地方停留的時間都不久，常常只有幾個星期或幾個月就到另一處去了，只在少數的地方待久一些，例如：哥林多一年半、以弗所三年。現在的宣教士也是如此，需要有搭帳棚的信心，所以通常不會買房子定居，乃隨時準備好跟隨聖靈的帶領到另一處宣教，是屬靈的游牧民族。
                </p>
              </div>

              <div>
                <span className="font-semibold text-indigo-700">三、等候神的城</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  等候神的城，就是等候天上那座有根有基、有一天會降下的新耶路撒冷城（啟廿一2，10）。亞伯拉罕願意為神而不是為自己，忠心地過一個寄居的生活，所以神為他預備那座由黃金、碧玉、瑪瑙、珍珠以及各樣寶石建造而成的新耶路撒冷城。神也將這樣的應許給每一位基督徒，關鍵在於我們是否憑著信心來領受神的應許。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  我在華神讀書時的院長林道亮牧師每天辛勤工作，總是神學院中最晚睡覺、最早起來的人。每當有人問他：「你怎麼不多休息？」他總會回答：「到天家的時候，我就會有很多時間可以休息了。」他如此盡心竭力的事奉，人可能擔心他的身體健康，但神一直使用他在世上的事奉，九十九歲才回天家休息。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  筆者當學習亞伯拉罕、戴德生、馬偕、林院長，過寄居的生活，除了忠心事奉外，也要放下一些纏累的東西，預備隨時可以移動帳棚。移動帳棚有兩種情況，一種是宣教拓展的移動，一種是去天家的移動，如彼得所說：「13我以為應當趁我還在這帳棚的時候提醒你們，激發你們。14因為知道我脫離這帳棚的時候快到了，正如我們主耶穌基督所指示我的。15並且，我要盡心竭力，使你們在我去世以後時常紀念這些事。」（彼後一13-15）保持可移動的彈性並憑信心等候神的城，將會在世上活出更精彩的生命，在永恆裡也會有美好的地方為我們存留。我們為那永恆的城，忠心過每一天，可讓自己在凡事上——夫妻、親子、服事、工作等各方面，都沒有遺憾。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、不爭的信心——禮讓羅得（創十三5~15）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                在亞伯蘭回到伯特利不久，亞伯蘭的牧人與羅得的牧人相爭，亞伯蘭讓羅得先選地方，而後分開發展，接著神應許亞伯蘭有廣大的地與眾多的後裔。亞伯蘭的禮讓不爭，也是信心的表現，因此神賞賜他更好的地方。
              </p>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">一、竭力追求和睦</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  人際互動本來就不是容易的事，教會中的肢體也不例外。亞伯拉罕跟羅得的相處沒有問題，但他們的牧人彼此相爭。這件事的解決，固然可以把牧人找來做品格訓練，但長久解決之道乃是分開發展。那裡的空間確實不夠大，無法容納那麼多的人（創十三6），所以分開是比較好的方法。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  雖然亞伯拉罕跟羅得是叔姪關係，但聖經原文中提到他們是兄弟（創十三8），沒有強調輩份。亞伯拉罕禮讓羅得先選擇地方，這是亞伯拉罕的謙卑，也是不爭的信心，這樣能保守彼此和睦的關係，正如以弗所書四1~3所說的：「1我為主被囚的勸你們，既然蒙召，行事為人就當與蒙召的恩相稱。2凡事謙虛、溫柔、忍耐，3用愛心互相寬容，用和平彼此聯絡，竭力保守聖靈所賜合而為一的心。」
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  亞伯拉罕身為長輩，羅得的產業原也是他的產業，但為了和睦，他願意割捨，願意讓羅得出去。反觀華人社會，很多長輩希望二代、三代、四代同堂，不願意讓年輕的家庭獨立出去。但讓兒女獨立，是讓他們成熟發展的必要過程。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  父母投注在孩子的時間，主要應該是在他十二歲以前，孩子越小，花在他們身上的時間要越長。十二歲以後，花在他們身上的時間可逐年遞減，十八歲或二十歲以上，就要讓他們獨立，這是符合孩子身心發展的模式。但我們卻往往相反對待，孩子到三歲需要全時間陪伴，父母沒有陪伴，卻將他們交給保姆；孩子三到六歲，把他交給幼兒園，甚至下課後再加鐘點；孩子六到十二歲，除了上小學，課後還安排安親班、補習班、才藝班。十二歲以前，孩子正需要父母時，父母陪伴的時間卻不多；十二歲以後，孩子漸漸學習獨立，父母卻想把他們緊緊抓住，留在自己身邊；直到十八歲、二十歲還不讓他們獨立。最後雖然留在身邊，卻因為缺乏獨立能力，只好當個宅男、宅女，甚至不願意結婚，只想作啃老族。這就是現今華人社會普遍的不正常現象——該在一起的時候，父母不願將時間給孩子，陪伴他們成長；不該在一起的時候，孩子卻在父母身邊不離開。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  教會或小組，不是人越多越好，當人多到某種程度後，人與人之間的關係就會變得很複雜。十二個人以下的小組，關係會比較好，且能照顧得較周全；超過十二個人以上的小組，相處的複雜度高，且容易有人被忽略，此時就當分出去，成立另一個小組。雖然對組長和組員都是個割捨，但這樣組員關係才不會太複雜，每個人都會被關懷照顧到，並且會再成長。否則當人數成長到一定的數量，小組就會停止成長。無論在小組或教會，我們都要竭力追求和睦，追求合一，但這樣的和睦，有時候需要藉著分植來成就，包括小組的分植與教會的拓植。因為合一不是統一、不是掌控，乃是能有各自的發展空間，且保持彼此守望相助。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">二、可得寧不得</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  亞伯拉罕是長輩，有權利先選擇好的地方來居住，他卻讓晚輩羅得先選，這就是亞伯拉罕的信心。他相信上帝會給他最好的，不用靠自己去爭取。羅得選擇了東邊那塊很肥沃的土地：「10羅得舉目看見約但河的全平原，直到瑣珥，都是滋潤的，那地在耶和華未滅所多瑪、蛾摩拉以先如同耶和華的園子，也像埃及地。11於是羅得選擇約但河的全平原，往東遷移；他們就彼此分離了。」（創十三10~11）亞伯拉罕選擇西邊這塊土地，也就是迦南地，而這塊土地正是神要賞賜給他的：「12亞伯蘭住在迦南地，……14羅得離別亞伯蘭以後，耶和華對亞伯蘭說：從你所在的地方，你舉目向東西南北觀看：15凡你所看見的一切地，我都要賜給你和你的後裔，直到永遠。」（創十三12，14~15）。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  約旦河東邊的那塊土地，優點是有肥沃的大平原，缺點是沒有屏障，若有敵人要來攻打，容易身陷危險。約旦河西邊的迦南地，山地較多，雨水較少，看起來雖沒有那麼肥沃，可是比較安全，因為它有屏障。我們面臨選擇，不要自己作決定，因為神的觀點和人的觀點不一樣。我們走人生道路時，也類似亞伯拉罕與羅得選擇土地，大部分的人希望能走一條平順的道路，但走這種道路的人，生存力不佳；若選擇走困苦艱難的道路，生存力會比較高，有能力解決各樣的難題。孟子也明白這道理，他提到：「天將降大任於斯人也，必先苦其心志，勞其筋骨，餓其體膚，空乏其身，行拂亂其所為，所以動心忍性，增益其所不能。」（孟子・告子下）
                </p>
                <p className="text-gray-700 leading-relaxed">
                  若要讓孩子能夠對自己負責任、對國家有貢獻、能被上帝所使用，就要讓他們在缺乏、困難當中成長，熬練他們的心志，將來才有競爭力、創造力、生存力。孩子若在平順、富裕中成長，不但將來較沒有生存力，抗壓性不好，且不懂得知足和感恩。王永慶的孩子出國留學，父親不給他們錢，他們必須靠自己打工賺錢。如今，這些孩子各個成為有能力的企業家。
                </p>
              </div>

              <div>
                <span className="font-semibold text-indigo-700">三、神親自賞賜</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  亞伯拉罕得到的迦南地看似不好，但他能在艱困中生存。那地雨水少，栽種不易，他能因此得著謀生的智慧。如今以色列有全世界最好的澆灌技術——地下水管一出來的水剛好在植物的根部，水被植物完全吸收，一滴水都不會浪費。雖然以色列的水量不到台灣的十分之一，他們的引水技術，卻為他們帶來豐富的花卉、水果等農產品，並能外銷國外，這也是神的賞賜。所以，我們要學習亞伯拉罕，有追求和睦的信心、可得寧不得的信心，並相信神會親自賞賜。神吩咐亞伯蘭向東、西、南、北舉目觀看，並縱橫走遍這地。同時應許將他所看到、所走到之地都賜給他和他的後裔，神也應許賜亞伯蘭後裔如同地上的塵沙那樣多（創十三16）。亞伯蘭的後裔，狹義來說是現在的猶太人、以色列人，最多加上阿拉伯民族（以實瑪利的後裔）；廣義來說還包括所有基督徒，因為神說那些按應許生的也是亞伯拉罕的後裔，如同以撒一樣。以撒的出生，表面上看是肉體生的，但聖經中說撒拉已沒有月經了（創十八11），因此以撒不是憑肉體生的，乃是憑應許生的，預表將來憑應許而生的基督徒都是亞伯拉罕的後裔（加四28）。如今全世界已知的猶太人（以色列後裔）約有一千五百萬人，而基督徒則有二十幾億，正應驗神對亞伯拉罕的應許，像海邊的沙、天上的星那樣多。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                我們為此要來向神獻上讚美和感謝。神帶領亞伯蘭去到應許之地，他有寄居的信心，也有不爭的信心，因此他會得到將來那榮美的城；他的後裔也會得到那應許之地，在其中發展。他的後裔包括以色列人，以及全世界效法亞伯蘭信心的人。讓我們同樣地來走亞伯蘭的信心道路，也同樣地能得著那永恆的聖城新耶路撒冷。我們還要看到地上肉身的後裔、屬靈的後裔都有美好的發展，在世界各地為主傳福音、作見證，擴展神的國度。願一切榮耀都歸給神！
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
                '亞伯蘭回到伯特利後獻祭，包含感恩的平安祭、贖罪祭、燔祭三重意義；祭壇與帳棚是亞伯拉罕一生的兩大記號，經常同時出現。',
                '希伯來書十一8-10描述亞伯拉罕「在應許之地作客」、「居住帳棚」、「等候神的城」三個重點，如同現今宣教士在異地作客，最終等候那座天上有根有基的新耶路撒冷城。',
                '亞伯拉罕禮讓姪兒羅得先選地方，展現不爭的信心與竭力追求和睦，這原則同樣適用於家庭兩代關係、教會小組分植與教會拓植。',
                '羅得選擇看似肥沃卻無屏障的約但河平原，亞伯拉罕選擇看似貧瘠卻安全的迦南地；神的觀點常與人的觀點不同，越艱困的環境反而磨練出更強的生存力。',
                '神應許亞伯蘭的後裔如同地上的塵沙，這應許狹義指猶太人、以實瑪利的後裔，廣義則包括所有憑應許而生（非憑肉體）的基督徒，如今已應驗成千千萬萬。',
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
              '亞伯蘭從埃及返回伯特利之後的獻祭可包含哪三種意義？如何應用在我們禱告生活中？',
              '亞伯蘭寄居的信心，可從哪三方面來說明？我們可以有甚麼具體的行動來表達寄居的信心，以致於能跟得上神的帶領？',
              '亞伯蘭看重和睦，樂意做出割捨，神也因此給他美好的賞賜。這個原則如何應用在家庭的兩代關係、教會的同工關係、小組的分植、教會的拓植？',
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
