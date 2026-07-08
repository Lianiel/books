import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch25() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第二十五章</h1>
        <h2 className="text-xl font-semibold text-gray-700">該隱與亞伯</h2>
        <p className="text-gray-500 mt-1">有一日，那人和他妻子夏娃同房，夏娃就懷孕，生了該隱（就是得的意思），便說：「耶和華使我得了一個男子。」又生了該隱的兄弟亞伯。亞伯是牧羊的；該隱是種地的。創世記四1-2</p>
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

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">前言：同房──親密的認識</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「同房」的原文是 יָדַע（yada），有知道、認識、顯明、指示的意思。包括人與人之間的親密關係、神與人之間的親密關係；不僅是知識上的認識，也是經歷上的認識。這字在舊約聖經中出現874次，可見這件事的重要性，其中最多出現在以西結書（97次）及詩篇（91次），大多是在講神與人之間的關係。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                以西結書17次講到「你們就知道我是耶和華」，最後一次說：「我的民哪，我開你們的墳墓，使你們從墳墓中出來，你們就知道我是耶和華。」（結卅七13）這是死而復活的經歷，是以色列人與神關係中一個最深刻的經歷。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                詩篇方面舉數例如下：詩篇一6：「因為耶和華知道義人的道路；惡人的道路卻必滅亡。」詩篇九10：「耶和華啊，認識你名的人要倚靠你，因你沒有離棄尋求你的人。」詩篇九16：「耶和華已將自己顯明了，……」詩篇十六11：「你必將生命的道路指示我。在你面前有滿足的喜樂；在你右手中有永遠的福樂。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神造人，預備與人有親密的關係，而這關係的深度，最早顯明在第一對夫妻「同房」這件事上。「同房」所代表的，正是神設立婚姻時所說的「二人成為一體」（創二24），不僅有身體的合一，也有心靈的合一。所以何西阿先知這樣呼喚邀請：「我們務要認識耶和華，竭力追求認識他。他出現確如晨光，他必臨到我們像甘雨，像滋潤田地的春雨。」（何六3）
              </p>
              <p className="text-gray-700 leading-relaxed">
                亞當與夏娃同房，先後生了該隱與亞伯，亞當、夏娃還繼續生其他許多的兒子和女兒。在該隱成人之後，地上已有許多人，所以該隱殺亞伯後，怕有人殺他，而且該隱也很容易娶了妻子，這些人都是亞當、夏娃所生的。但因為該隱、亞伯所做的事有重要的代表性，所以特別記載生了該隱與亞伯。他們兩人分別代表了撒旦的後裔與女人的後裔這兩個群體。以下分別討論他們兩人的事情。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、首位殺人犯──該隱</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                亞當、夏娃同房之後，夏娃就懷孕生了該隱。這是人類歷史上的第一次懷孕，這裡沒有描述神所預言的「生產之苦」，而是強調夏娃在興奮中所說的話：「耶和華使我得了一個男子。」（創四1）不是強調得了一個嬰孩，而是強調得到一個男人。亞當、夏娃被撒旦誘惑去吃了禁果，明顯是被撒旦打敗了。之後神說，女人的後裔要傷蛇的頭（創三15）。後裔與兒子是同一個字，以夏娃的認知來說，就是她要生出兒子來傷蛇的頭，因為那時全世界只有她自己一個女人而已。所以第一個兒子出生，就幫他取名為該隱（得的意思），意思是得到這個兒子，可以去傷蛇的頭。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                但沒想到該隱在長大成人的過程中，被撒旦欺騙、利用，不信神的話、不理神的指示，按自己喜好的獻祭，甚至成為第一個殺人犯。可想像撒旦得意地跟神說：「你說夏娃生的兒子要來打敗我，結果他沒有聽你的話，反而聽我的話，應該讓我來當神還比較合適。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">一、該隱獻供物，是獻地的土產，代表天然的、人本的宗教</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記四3-5：「3有一日，該隱拿地裡的出產為供物獻給耶和華；4亞伯也將他羊群中頭生的和羊的脂油獻上。耶和華看中了亞伯和他的供物，5只是看不中該隱和他的供物。……」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                多數福音派教會，強調該隱獻祭的態度比較隨便，亞伯獻祭的態度比較真誠，因為亞伯獻上頭生的羊和上好的脂油，而該隱只是獻上地裡的出產，而非初熟的果子。而且聖經說，神看中亞伯和他的供物，看不中該隱和他的供物，所以獻祭者這個人本身的生命也是很重要的。這樣的角度有其價值，聖經其他地方也有強調。但還有兩個重要的角度被忽略了，就是神所要的是能贖罪的羔羊，並且獻祭的人要知道所獻的是神所賞賜的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們獻祭，最重要不是我們給了神什麼，乃是在過程經驗到且知道神給了我們什麼恩典。若獻上羔羊，神所給我們的是贖罪的恩典；獻上植物，則沒有贖罪的功效，因為若不流血，罪就不得赦免（來九22）。而且必須知道，我們所獻上的乃是神所賞賜的，獻祭並非有何功勞，乃是與神建立生命連結的關係。正如神曾對以色列人說：「17……恐怕你心裡說：這貨財是我力量、我能力得來的。18你要紀念耶和華你的神，因為得貨財的力量是他給你的，為要堅定他向你列祖起誓所立的約，像今日一樣。」（申八17-18）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神曾經殺了羊，為亞當、夏娃贖罪，做皮衣給他們穿，就是示範要獻羊羔才能贖罪。但該隱不領受神的啟示，自以為是地獻上土產。該隱獻土產是一種行善的心態，跟贖罪無關。所以該隱可說是天然、人本宗教的代表。除了基督信仰以外，其他宗教都是天然、人本的宗教，都會想要藉著行善、捐獻、積功德來取得神的悅納。但行善只是人的本份，而且人行善的同時，每天都還會犯罪，所以神為人開了一條路，是藉著獻羊羔來得到贖罪。那贖罪的羔羊乃是代表釘十架的耶穌基督。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                佛教跟該隱一樣，努力地去做自己所認為的好事，但沒有贖罪祭。佛教強調不殺生，因為不懂有關贖罪的真理。人有向善的心，也想討神的喜悅，但這些都不能為自己贖罪，唯有羔羊的血（耶穌基督的寶血）才能贖罪。不接受從神而來的啟示，就無法明白贖罪的事，也就不能解決罪的問題。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                以童子軍的日行一善來說，就算有人真的可以日行一善，但同時還會日行多惡，那怎麼可能將功贖罪呢？佛教也承認一生行善絕對不夠，所以認為需要輪迴一億次以上，藉著輪迴產生道德的進化，期待有些人越輪迴品質越好。然而事實上是人心不古，現代人比古人更會犯罪，輪迴的辦法根本行不通。實情是，每個人都只有一個今生、一個來生，來生就要面對審判，承受今生的後果，不會再有輪迴的機會。所以，若要得救，一定要靠羔羊的血，也就是基督的十架救恩。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">二、該隱殺亞伯，是逼迫義人的首例，顯明是魔鬼的後裔</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記四5-8：「5……該隱就大大的發怒，變了臉色。6耶和華對該隱說：你為甚麼發怒呢？你為甚麼變了臉色呢？7你若行得好，豈不蒙悅納？你若行得不好，罪就伏在門前。它必戀慕你，你卻要制伏它。8該隱與他兄弟亞伯說話；二人正在田間。該隱起來打他兄弟亞伯，把他殺了。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                該隱原本有改變的機會，因為神明顯表示，我悅納亞伯的羔羊，不悅納該隱的田產。那時該隱應該問神，當如何做才能得到悅納，而不是向神發怒，那麼神就會告訴他：「需要獻羊羔，因為若不流血，罪就不得赦免了。」（來九22）他若說：「我沒有羊。」神也會教他說：「你可以拿地裡的土產跟亞伯的羊交換。」但他沒有謙卑如此做，反倒自我為中心地對神生氣，所以罪就停留在他身上。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記四7：「它（罪）必戀慕你（該隱），你卻要制伏它。」創世記三16：「妳（女人）必戀慕妳丈夫，妳丈夫必管轄妳。」這兩句的句法一樣，用字也一樣。戀慕有轄制的負面含意；制伏與管轄，原文是同一個字。所以，罪會來轄制人，人要想辦法來制伏罪；正如女人會以戀慕來轄制男人，男人則要想辦法來管理制伏女人。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                然而，罪是很難被制伏的，就像女人很難被管轄一樣。這說明，該隱一生將活在與罪、與律法的爭鬥之中；正如同丈夫與妻子也會有許多衝突，甚至鬥爭。該隱最終沒有用正確的方法（神的救贖）來解決罪的問題，只靠自己與罪對抗，因此就掉入更大的罪中，以致去殺了亞伯。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                魔鬼是首先殺人的，耶穌曾對猶太人說：「你們是出於你們的父魔鬼，你們父的私慾你們偏要行。他從起初是殺人的……。」（約八44）那時猶太人自認為亞伯拉罕是他們的父，但耶穌說魔鬼是他們的父，這不是指血源的關係，而是指他們的心思意念和行為模式與魔鬼一樣。他們若按照亞伯拉罕的榜樣而行，就會信靠真神、走神的道，可是他們卻跟魔鬼一樣要來殺人，所以他們是魔鬼的後裔。凡聽從魔鬼、跟隨魔鬼的人就是牠的後裔，魔鬼的後裔不是墮落的天使，乃是背離神的人。祭司長、部分猶太人、巡撫彼拉多、羅馬兵丁等，他們與魔鬼合作，一起殺害耶穌，所以也都是魔鬼的後裔。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                該隱是魔鬼的後裔，因此成為人類首位殺人犯。耶穌說：「魔鬼從起初是殺人的。」就是指該隱殺亞伯這件事。但魔鬼每次策動人殺基督徒，若基督徒至死忠心，魔鬼的權勢就被擊打。因此初代教父特土良（150-230AD）說：「教會建立在殉道者的血上面。」或者說：「殉道者的血是教會的種子。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                魔鬼直到如今，仍然不斷在引誘人、拉攏人成為牠的後裔，所用的方法，仍然是提供肉體的情慾、眼目的情慾、今生的驕傲（約壹二16）。不僅那些掉落在情慾試探中的人會成為魔鬼的後裔，那些有理性、道德卻以驕傲態度來拒絕聖經啟示的人，也一樣會成為魔鬼的後裔。甚至後者比前者更強烈地來逼迫、殺害基督徒，尚未信主前的法利賽人掃羅（後來為使徒保羅）是一個鮮明的例子。現今許多正統猶太教徒也是如此，他們在宗教上行禮如儀，卻不知道耶穌基督是贖罪羔羊，就會來逼迫基督徒，表現的像該隱一樣，都是魔鬼的後裔。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、首位殉道者──亞伯</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                亞當、夏娃生的第二個兒子亞伯聽神的話，拒絕撒旦的謊言，他獻祭是照著神的吩咐，成了第一位信心英雄。所以亞伯真正應驗了神的預言：「女人的後裔要傷蛇的頭」，後半句「蛇要傷他的腳跟」也應驗了，因為亞伯寧可殉道也不聽從撒旦的話。亞伯打擊了撒旦的權勢，但自己殉道了，如同耶穌基督釘十字架殉道一樣。殉道者雖然被殺，但殉道者是得勝的，因為撒旦的權勢被擊打削弱，而殉道者還會跟耶穌一樣復活。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">一、亞伯的獻祭：將羊群中頭生的與羊的脂油獻上（創四4）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                1. 代表由神啟示而來的信仰：如同希伯來書九22所說的：「若不流血，罪就不得赦免了。」這是神所定的原則，要贖罪一定要流血，但人自己無法付出這樣的代價，所以神讓他的兒子耶穌基督來代替我們付上流血捨命的代價。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                希伯來書十一4說：「亞伯因著信，獻祭與神，……得了稱義的見證，就是神指他禮物作的見證。」亞伯的「信」，就是正確回應神的道，若神沒有向他啟示，亞伯就不會有「信或不信」的回應；一定是神有啟示，叫亞伯獻羊羔，然後亞伯順服神的話就宰羊羔獻祭給神。不是他自己想出來要如此獻祭，也不是因他牧羊，自然獻羊羔；他的稱義是因他正確回應神的啟示。所以，若說亞伯拉罕是信心之父，亞伯可說是信心之祖。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                2. 表明完全順服甘心的奉獻：亞伯因著神的啟示，神怎麼說就怎麼做，是完全的順服，並且甘心的將他羊羔中頭生的及羊的脂油獻給神。頭生的是品質最好的，羊的脂油也是羊身上最好的一部分（申卅二14，詩六十三5）。這代表亞伯樂意把上好的獻給神，是真誠的奉獻，因為他知道這一切都是神所賞賜的，他只是把從神所得的獻給神。並且他不是獻羊羔的時候才奉獻，乃是每天全人都奉獻，如同羅馬書十二1所說的獻上自己為活祭。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">二、亞伯的殉道</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                1. 應驗神的預言，成為基督十架預表：神的預言是女人的後裔要傷蛇（撒旦）的頭，蛇（撒旦）要傷女人後裔的腳跟（創三15）。這樣的預言首先在亞伯身上應驗，但未來還要在基督身上應驗，也要在許多得勝者、殉道者身上應驗。
              </p>
              <p className="text-gray-700 leading-relaxed">
                2. 表明生命價值，成為第一位得勝者：生命不在乎長短。一個人活得很久，若沒有活在神的旨意之中，那就是浪費的生命；但一個比較短暫的生命，若完全照神的旨意而活，那就是有價值的生命。例如亞伯，或許他只活到三十歲，如今全世界的基督徒都認識他，他成為信心與殉道的榜樣。他的生命雖短，卻產生極大的影響力。耶穌基督也只活卅三年半，但他是全世界最重要的一個人。讓我們效法亞伯，效法耶穌基督，將生命的價值表明出來。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                願我們都成為像亞伯、像耶穌這樣的人。每一天來親近神，並將自己獻給神，成為神所能使用的器皿。神藉著該隱與亞伯的實例，讓我們看得非常清楚，我們要脫離自我中心，不要以為自己能獻上甚麼，我們所能獻的都是神賜給我們的；不要以為我們的行善能換得甚麼，我們都是罪人，需要在神的啟示裡面獻上羊羔，在新約時代，就是接受耶穌基督的十架救恩。唯有這樣的贖罪祭，才是神所悅納的，能解決我們與神之間的問題。我們看到，亞當與夏娃同房，是親密的認識，是神所期待與人建立的一種關係。讓我們藉著耶穌基督的救恩，回到神面前，在基督裡建立與神親密的關係。
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
                '「同房」的原文 יָדַע（yada）是親密的認識，舊約出現874次，代表神期待與人建立知識上且經歷上的親密關係；婚姻中「二人成為一體」正是這關係最早的顯明。',
                '該隱與亞伯分別代表撒旦的後裔與女人的後裔兩個群體：該隱獻地的土產，是天然、人本宗教的代表；亞伯獻頭生羔羊，是領受神啟示、因信稱義的信仰。',
                '獻祭最重要的不是人給了神什麼，而是經歷並知道神給了人什麼恩典——若不流血罪就不得赦免（來九22），行善、積功德都不能替代贖罪羔羊。',
                '該隱面對神的提醒（罪伏在門前，它必戀慕你，你卻要制伏它）不肯謙卑求問，只靠自己與罪對抗，終致殺弟；凡聽從魔鬼、跟隨魔鬼的人就是魔鬼的後裔——不論是掉入情慾的人，或以理性驕傲拒絕啟示的人。',
                '亞伯是首位殉道者、第一位得勝者，應驗「女人的後裔要傷蛇的頭、蛇要傷他的腳跟」，預表基督的十架；殉道者雖被殺卻是得勝的，因撒旦的權勢被擊打，殉道者還要復活。',
                '生命的價值不在乎長短，而在乎是否活在神的旨意中；亞伯與耶穌的生命雖短，卻產生極大的影響力。',
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
              '該隱與亞伯的獻祭有何不同？神看中亞伯的供物、看不中該隱的供物，除了獻祭的態度之外，還有哪兩個重要的角度？',
              '該隱原本有改變的機會，他錯過了什麼？「罪伏在門前，它必戀慕你，你卻要制伏它」這句話對你有何提醒？',
              '亞伯的生命雖短，卻成為信心與殉道的榜樣。從亞伯與耶穌的例子來看，你認為什麼才是有價值的生命？你願意如何回應？',
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
