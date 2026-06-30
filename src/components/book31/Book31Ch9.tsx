import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book31Ch9() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    exploration: true,
    questions: true,
    practice: true,
  });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">第九章</h1>
        <h2 className="text-xl font-semibold text-gray-700">人類制度的建立</h2>
        <p className="text-sm text-gray-500 mt-2">書頁 219–234</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-teal-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            {/* 神吩咐人類的命令 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">神吩咐人類的命令</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                大洪水審判以後，除了地球環境改變以外，影響人類歷史最大的，莫過於就是人類立法制度的建立了。人類立法制度的建立，再加上各民族分散全地的結果，這就造成世界各地不同的文明、歷史和文化。在我們詳細討論這部分的歷史以前，我們必須瞭解　神在大洪水以後吩咐挪亞和他的兒子們的命令。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                　神在挪亞向　神獻祭的時候，祂曾吩咐他們說：「凡活著的動物，都可以作你們的食物，這一切我都賜給你們，如同菜蔬一樣。惟獨肉帶著血，那就是牠的生命，你們不可吃。流你們血害你們命的，無論是獸、是人，我必討他的罪，就是向各人的弟兄也是如此。凡流人血的，他的血也必被人所流，因為　神造人，是照自己的形像造的。你們要生養眾多，在地上昌盛繁茂。」（創世記九章3至7節）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                有很多人忽略這段非常重要的經節，但是這段　神交付人類的命令一直在影響大洪水以後人類歷史的方向。即使在新約中，聖經也曾重覆這幾句話：
              </p>
              <div className="space-y-3 mb-4">
                {[
                  { num: '（一）', text: '使徒保羅告提摩太：「聖靈明說，在後來的時候，必有人離棄真道，聽從那引誘人的邪靈，和鬼魔的道理。這是因為說謊之人的假冒，這等人的良心，如同被熱鐵烙慣了一般。他們禁止嫁娶，又禁戒食物（或作又叫人戒葷），就是　神所造叫那信而明白真道的人感謝領受的。凡　神所造的都是好的，若感謝著領受，就沒有一樣可棄的；都因　神的道和人的祈求，成為聖潔了。」（提摩太前書四章1至5節）。' },
                  { num: '（二）', text: '使徒行傳記載長老和使徒說：「因為聖靈和我們，定意不將重擔放在你們身上；惟有幾件事是不可少的，就是禁戒祭偶像的物、和血、並勒死的牲畜、和淫邪。你們若能自己禁戒不犯，就好了。願你們平安。」（使徒行傳十五章28至29節）。' },
                  { num: '（三）', text: '新約記載耶穌基督說：「收刀入鞘吧！凡動刀的，必死在刀下。」（馬太福音二十六章52節）。使徒保羅也說：「在上有權柄的，人人當順服他。因為沒有權柄不是出於　神的，凡掌權的都是　神所命的。所以抗拒掌權的，就是抗拒　神的命；抗拒的必自取刑罰。作官的原是叫你行善的，你若行善，何懼他呢？你若作惡，卻要懼怕，因為他不是空空地佩劍，他是　神的用人，是伸冤罰惡的。」（羅馬書十三章1至4節）。' },
                ].map(({ num, text }, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-teal-600 font-bold flex-shrink-0">{num}</span>
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 流人血的必被報應 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">流人血的必被報應</h3>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch9-fig92-stadium.jpg" alt="圖92 大洪水後神使人類建立法制度" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 92 — 大洪水審判以後，神允許人類建立立法制度，用意是在遏制罪惡，使人類不至於像大洪水以前那樣墮落到無復救藥的地步。</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                前一章討論過了，至於血的重要性，我們也曾在第五章討論過。所以現在我們就針對「凡流人血的，他的血也必被人所流」進一步的分析。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在聖靈感動下，我特別注意到創世記九章5節中，　神一連三次重複希伯來原文 אֶדְרֹשׁ 這個是法律用詞，這是「我將追討」的意思。也就是說，　神站在審判者的立場，下達這道重要的命令。中文和合本聖經在許多地方翻譯都很好，但可能為了方便遷就，在這裏是這樣翻譯的：「流你們血害你們命的，無論是獸、是人，我必討他的罪，就是向各人的弟兄也是如此」（創世記九章5節）。如果按照希伯來原文翻譯：
              </p>
              <div className="bg-gradient-to-r from-teal-600 to-cyan-700 rounded-lg p-5 mb-3 text-center shadow-md" dir="rtl">
                <p className="text-white font-mono leading-loose tracking-wide" style={{ fontSize: '26px' }}>
                  וְאַךְ אֶת-דִּמְכֶם לְנַפְשֹׁתֵיכֶם אֶדְרֹשׁ מִיַּד
                </p>
                <p className="text-white font-mono leading-loose tracking-wide" style={{ fontSize: '26px' }}>
                  כָּל-חַיָּה אֶדְרְשֶׁנּוּ וּמִיַּד הָאָדָם מִיַּד
                </p>
                <p className="text-white font-mono leading-loose tracking-wide" style={{ fontSize: '26px' }}>
                  אָחִיו אֶדְרֹשׁ אֶת-נֶפֶשׁ הָאָדָם׃
                </p>
              </div>
              <div className="bg-teal-50 border-l-4 border-teal-400 p-4 rounded-r-lg mb-3">
                <p className="text-gray-700 leading-relaxed font-medium">
                  「流你們血害你們命的，我必將追討他的罪；害人命的任何一隻獸，我將追討牠的罪，害人命的人也是如此。害弟兄命的人，從他手中我將追討他的罪。」
                </p>
                <p className="text-sm text-teal-700 mt-2">　神在此強調三次「我將追討」他的罪，這和大洪水審判以前的立法制度有很大的不同。</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                　神因此將執行死刑的命令交付人類，　神吩咐說：「凡流人血的，他的血也必被人所流。因為　神造人，是照自己的形像造的。」（創世記九章6節）。在這裏，「流人血」的「流」這個動詞，希伯來文原文的文法結構是「分詞」，意思有「成習慣或重複流人血」的含意。為了這個詞字的解釋，經常有學者對死刑持不同的看法。
              </p>
            </div>

            {/* 大洪水以前的社會狀態 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">大洪水以前的社會狀態</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                大洪水以前，該隱隨殺了亞伯，　神並沒有立刻刺殺死。亞伯以前人類充滿罪惡，像是一個「無政府、無人立法管轄」的社會狀態。　神也沒有立刻報應那些作惡的人，只是等到大洪水審判的時候，將這些人滅盡。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                可是大洪水審判以後，　神定下死刑及償命的法則要人來執行了。譬如聖經記載　神吩咐：「打人以至打死的，必要把他治死。人若不是埋伏著殺人，乃是　神交在他手中，我就設一個地方，他可以逃到那裏去。人若任意用詭計殺了他的鄰居，就是逃到我的壇那裏，你也要捉去把他治死。」（出埃及記二十一章12至14節）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                有關獸類殺人的罪，　神也說：「牛若觸死男人或是女人，總要用石頭打死那牛，卻不可吃牠的肉；牛的主人可算無罪。倘若那牛素來是觸傷人的，有人報告牛的主人，他卻不把牛關起來，以致把男人或是女人觸死了，就要用石頭打死那牛，牛的主人也必治死。若罰他贖命的價銀，他就要捐出所罰的贖命之銀。牛無論觸了人的兒子，或是女兒，必照這例辦理。牛若觸了奴僕，或是婢女，必將銀子三十舍客勒，給他們的主人，也要用石頭打死那牛。」（出埃及記二十一章28至32節）。另外民數記第三十章及命記十九章第1至13節都有詳述這些事。
              </p>
              <p className="text-gray-700 leading-relaxed">
                相信大洪水審判以後，許多巨猛獸類的野獸後來都因此而走向減絕的途徑。不是這也就是這一些巨猛獸類絕跡的主要原因？我的心裏一直有個疑問：如果歷史裏曾哪個善人「周處除三害」的故事裏的「龍」，周處遇到的究竟是什麼樣的生物？是些類還留下來的水陸龍類？然而不管牠們是哪一種生物，因為牠們害人，所以以才被人屠殺致死。
              </p>
            </div>

            {/* 人犯罪使獸的性情改變 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">人犯罪使獸的性情改變</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                人類犯罪以後，「一切受造之物，一同歎息勞苦，直到如今；而且「受造之物仍然指望脫離敗壞的轄制，得享　神兒女自由的榮耀」。就是因為人類的墮落，使得許多動物的性情也改變了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們不知道有些野獸從什麼時候開始把別的動物為食，但是有很多跡象顯示人類的犯罪也影響整個地球生態的行為。相信　神從起初創造動物的時候，牠們並不是以肉食為生的。有的人爭執說恐龍有牙齒和利爪，必是「肉食類的猛獸」，但是有很多證據顯示生物有牙齒和利爪不一定是肉食的：在中國四川附近的大熊貓 Giant Panda 有利齒，但是牠們只吃竹類的植物；非洲的大猩猩 Gorilla 有利爪，但是並不吃肉類的食物，並不吃肉，而且還吃素樹和植物。另外有些植物，如鐵樹，則只是吃水果和植物。所以　神當初創造生物給與牙齒和利爪，是為了磨碎和咬開果實，磨碎植物，或者是打開堅硬果實實用的，並不是為摧殘或是傷害動物的用途；即便動物的性情是因此改變了。
              </p>
              <p className="text-gray-700 leading-relaxed">
                但是　神指明：任何一隻野獸若不得　神允許而殺了人，必要償命。在過去的歷史裏，從主後 64 年到 305 年之間，羅馬帝國皇帝曾對基督徒作過十次的大逼迫，其中甚至將基督徒拉到門獸場中餵獅子娛樂羅馬市民，這種殘酷的行為完全違反神的命令。西羅馬帝國最後在主後 476 年被鄰族攻陷滅亡。
              </p>
            </div>

            {/* 神允許政府制度的原因 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">神允許政府制度的原因</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                大洪水審判以前，人的壽命都活很長，所以社會的制度是以「家長」為主要軸心的。但是像拉麥（該隱後裔，詳見後面）這樣的家長，甚至還選自己的意好、意見和利益虐殺大罪犯的範疇。他說：「壯年人傷我，我把他殺了；少年人損我，我把他害了。若殺死拉麥，必遭報七十七倍。」（創世記四章23至24節）。於是道德每況愈下，是非善惡混淆不清，到最後有些「家長」的命令沒有任何宗族成員的效力，各人隨意行事，這就是罪惡增長、暴力充斥全地的主要因素之一。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                大洪水審判以後，　神允許政府制度的開始建立，其目的是為了施行立法的公義、賞罰的公平，其功能特別是為了遏制暴力，使人類執行死刑的條例，　神從此將執行死刑的命令交付人類，　神吩咐說：「凡流人血的，他的血也必被人所流。因為　神造人，是照自己的形像造的。」（創世記九章6節）。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch9-fig93-colosseum.jpg" alt="圖93 羅馬競技場 Colosseum" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 93 — 在這個羅馬競技場 Colosseum 裏面，許多基督徒曾被在此被屠殺或是被獅子吃死，它的地面已經破爛，地底下的牢房都露了出來。</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                神也允許人類有選擇政治治體系的自由，在　神公義公平的大原則之下，四千多年以來人類產生不同的政治治體系：有中國發源的「禪讓制度」、希臘雅典的「民主制度」、羅馬的「共和制度」，等等。大洪水審判以後，無論是「君主專制」、「代議行政」、「民主表決」、「民主立憲」等等各種行政方式，它們的基本精神仍在於立法公正、施行合乎　神心意的政治方案。各種不同的政治體系成或制度的產生，主要是因為環境、因地、因人、因勢而有所變化，然而正如因為人類墮落罪犯的天性，加上各種法律制度上的漏洞，許多政者反而而作出種種違法和違背　神旨意的事情。我們翻開過去到今天的歷史，很遺憾地就看到這種悲慘的救訓經常發生。
              </p>
            </div>

            {/* 執政者用人的建議 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">執政者用人的建議</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                歷史上證明，「上樑不正，下樑歪」。然而有時候，執政者雖然求好心切，但是並不用人，用錯了人，乃至引進小人，最後功虧一簣。這種不幸的例子，在古今中外歷史裏都有過。摩西的岳父葉忒羅對他提出了很好的用人建議，他對摩西說：「現在你要聽我的話，我為你出個主意，願　神與你同在。你要替百姓到　神面前，將案件奏告　神；又要將律例和法度教訓他們，指示他們當行的道，當做的事。並要從百姓中揀選有才能的人，就是敬畏　神，誠實無妄、恨不義之財的人，派他們作千夫長、百夫長、五十夫長、十夫長，管理百姓，叫他們隨時審判百姓，大事都要呈到你這裏，小事他們自己可以審判。這樣，你就輕省些，他們也可以同當此任。你若這樣行，　神也這樣吩咐你，你就能受得住，這百姓也都平平安安回他們的住處。」（出埃及記十八章19至23節）。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch9-fig94-constantinople.jpg" alt="圖94 東羅馬帝國首都 Constantinople" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 94 — 東羅馬帝國因為敬畏　神，被　神保守了一千一百多年，這是百都君士坦丁堡 Constantinople 的市景，該城後來被改名為伊斯坦堡。</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                一個人「有才能」就會用智慧來處理政務；「敬畏　神」就會行事正直；「誠實無妄」才會言出必行；「恨不義之財」就會廉潔自守。聖經接著告訴我們摩西聽從他岳父的話，按著他所說的去行，如此就能在其後的四十年裏，治理好曠野中兩、三百萬以色列的群眾。我覺得這是一個執政者用人很好的原則。
              </p>
            </div>

            {/* 以　神為主的那國是有福的 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">以　神為主的那國是有福的</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經上明記著說：「以耶和華　為　神的，那國是有福的。祂所揀選為自己產業的，那民是有福的。耶和華從天上觀看，祂看見一切的世人。從祂的居所，往外察看地上一切的居民。祂是那造成他們眾人心臟之的，留意他們一切作為的。君王不能因兵多得救，勇士不能因力大得救。靠馬得救是枉然的，馬也不能因大力救人。耶和華的眼目，看顧那敬畏祂的人和那仰望祂慈愛的人，要救他們的命脫離死亡，並使他們在飢荒中存活。」（詩篇三十三篇12至19節）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在歷史上，自從主後 312 年康士坦丁 Constantine 以十字架為軍旗贏得勝成為羅馬皇帝之後，在東方建立康士坦丁堡 Constantinople 成為東羅馬帝國的首都（有別於以義大利羅馬城為中心的西羅馬帝國），這個東羅馬帝國一直持續了一千一百多年，直到主後 1453 年才被鄂圖曼帝國 Ottoman 征服。類似這樣的例子在歷史上還有很多。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch9-fig95-ephesus.jpg" alt="圖95 以弗所 Ephesus 大劇院" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 95 — 這是以弗所城 Ephesus 的大劇院和附近的市集，逼迫保羅的人在此曾引起大騷亂，如今一切制度已逝去，只留下廢墟任人憑弔。</p>
              </div>
            </div>

            {/* 神的恩典大過制度 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">神的恩典大過制度</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們討論前述這些事情，並不是因此而下結論說執政者不應該制度改變，而死刑也絕不可能被免除。聖經上　神的憤怒和恩典往往超過一切制度的範疇，這就好像「宇宙定律」為　神所設，　神也可以超越「宇宙定律」施行神蹟顯現出來。照樣「立法制度」為　神所允，　神也可以以祂永恆的慈愛寬恕而且超越「立法制度」施行神蹟顯現出來。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                譬如大衛，他的罪行完全是按照法律觀點，他犯了在聖經上訂明的死刑之罪，包括奪人妻子（撒母耳記下十二章13至14節）。先知拿單告訴他：「耶和華已經除掉你的罪，你必不至於死；只是你行這事，叫耶和華的仇敵大得褻瀆的機會，故此，你所得的孩子，必定要死。」（撒母耳記下十二章13至14節）。　神的恩典大過制度，反而使大衛更深刻地悔改自己的罪行與錯誤，留下了許多感人的詩篇。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                此外，還有那行淫時被捉拿到的婦人，按照利未記二十章22節的規定，她犯了死罪，應當被刺死。但是主耶穌基督卻免她的罪，對她說：「我也不定你的罪，去吧，從此不要再犯罪了。」（約翰福音八章11節）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                可見當人有心悔改改變自己的態度和行為的時候，制度、法律和恩典，往往也會定出特定案情的判定，網開一面。制度是為人而設立的，人不是為制度而存在的。所以　神也是制度的主，制度應該服從於　神的權柄之下。這就像主耶穌基督所說的：「安息日是為人設立的，人不是為安息日設立的，所以人子也是安息日的主。」（馬可福音二章27至28節）。如果制度擺棄了　神的主權，制度就會失去原來存在的意義。
              </p>
            </div>

            {/* 神是制度最高的主宰 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">神是制度最高的主宰</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                所以無論是哪一種人類的制度都必須服於　神的權柄之下。　神既然是宇宙的創造主，祂當真正是真正正主之主，萬王之王。祂說有就有，命立就立，誰能和祂相比呢？
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經上時時也以立法制度最高的主宰來稱呼主耶穌，就像先知以賽亞在主耶穌誕生以前就預言說：「因有一嬰孩為我們而生，有一子賜給我們，政權必擔在他的肩頭上，他名稱為奇妙、謀士、全能的　神、永在的父、和平的君。他的政權與平安必加增無窮，祂必在大衛的寶座上，治理他的國，以公平公義使國堅定穩固，從今直到永遠。萬軍之耶和華的熱心，必成就這事。」（以賽亞書九章6至7節）。使徒保羅在寫給以弗所人的書信裏，也提到主耶穌基督是「遠超過一切執政的、掌權的、有能的、主治的、和一切有名的，不但是今世的，連來世的也都超過了」（以弗所書一章21節）。
              </p>
              <div className="bg-teal-50 border-l-4 border-teal-400 p-4 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed italic">
                  「祂從一本造出萬族的人，住在全地上，並且預先定準他們的年限，和所住的疆界；要叫他們尋求　神，或者可以揣摩而得，其實祂離我們各人不遠。」
                </p>
                <p className="text-sm text-teal-700 mt-2 font-medium">——使徒行傳十七章26至27節</p>
              </div>
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
            <ul className="space-y-2">
              {[
                '大洪水後神頒布三項新命令（創世記九章3-7節）：可食肉類、禁食帶血的肉、流人血者必被追討——最後一項直接奠定人類立法制度的神學根基，並在新約中三次被確認（提摩太前書四章、使徒行傳十五章、馬太福音二十六章/羅馬書十三章）。',
                '「我將追討」在希伯來原文中重複了三次（創世記九章5節）：這是神站在審判者立場，確立政府執行死刑的法律授權。大洪水前是「無政府、無人立法管制」的狀態；大洪水後神允許政府制度建立，其根本目的是遏制暴力、施行公義。',
                '人類犯罪導致動物性情改變：大熊貓有利齒卻只吃竹子、大猩猩有利爪卻不吃肉——這些動物的設計本是為了磨碎植物，並非為了捕殺。羅馬帝國以基督徒餵獅子正是違反神命令的典型，西羅馬帝國最終滅亡印證了神的公義。',
                '好的執政者需要四種品格（葉忒羅給摩西的建議，出埃及記十八章）：有才能、敬畏神、誠實無妄、恨不義之財。以神為主的國家蒙福（詩篇三十三篇12-19節）——東羅馬帝國因此持續一千一百年；反之，濫用制度壓迫義人的帝國則相繼滅亡。',
                '神的恩典大過制度：大衛犯了死罪卻因悔改蒙恩（撒母耳記下十二章）、行淫婦人因主耶穌的赦免得自由（約翰福音八章）——制度是神為人設立的工具，神的恩典和主權凌駕於制度之上。制度若擺棄神的主權，就失去其存在的意義。',
                '神是一切制度最高的主宰：以賽亞書九章6-7節預言彌賽亞的政權「必加增無窮」、以弗所書一章21節說主耶穌「遠超過一切執政的、掌權的」——這是今日面對各種人類政制時的最高參照點。使徒行傳十七章26-27節提醒：祂「離我們各人不遠」。',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-gray-700">{point}</p>
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
              <h4 className="font-semibold text-gray-800 mb-2">死刑的聖經根據與現代爭議</h4>
              <p className="text-gray-700 leading-relaxed">創世記九章6節是聖經中最清晰的死刑授權：「凡流人血的，他的血也必被人所流，因為神造人，是照自己的形象造的。」根基不在「以眼還眼」的報復主義，而在人命具有神形象的神聖性——正因人是按神的形象所造，蓄意奪取人命是對神形象的侵犯，必須有相應的後果。現代廢除死刑的論點常基於「生命的神聖性」，但弔詭的是，這一論點本身正是來自同一個聖經根基。這個張力在神學上至今仍是認真討論的議題。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">政教關係——神的子民在不完美制度下的張力</h4>
              <p className="text-gray-700 leading-relaxed">羅馬書十三章「順服掌權者」是在尼祿皇帝迫害基督徒的背景下寫成的，卻說「掌權的是神的用人」。啟示錄十三章則稱同一個羅馬為「獸」。兩者並不矛盾：神允許政府存在，是為了遏制更大的混亂（創世記九章）；但當政府僭越神的主權（要求人放棄對神的忠誠）時，「順從神不順從人，是應當的」（使徒行傳五章29節）。這個張力貫穿了教會歷史，也是今日基督徒在各種政治體制下面對的永恆問題。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">東羅馬帝國千年——以神為主的國家蒙福的歷史印證</h4>
              <p className="text-gray-700 leading-relaxed">312年君士坦丁在米爾維安橋戰役前異象中看見十字架，此後建立東羅馬帝國（拜占庭帝國），以基督信仰為立國根基。這個帝國在西羅馬帝國476年滅亡後，仍持續近一千年，直到1453年才亡於鄂圖曼帝國。在此期間，它保存了古代文明、基督教神學傳統和希臘哲學，成為日後歐洲文藝復興的重要基礎。這是詩篇三十三篇「以耶和華為神的那國是有福的」的歷史性印證。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">恩典與律法——保羅神學的核心張力</h4>
              <p className="text-gray-700 leading-relaxed">本章提到神的恩典「大過」制度（大衛、行淫婦人），這正是保羅在加拉太書和羅馬書中奮力論證的核心：「律法使人知罪，而恩典使人得救」（羅馬書三章20節）。這並非說律法無用，而是律法的功能是讓人看見自己的破碎，從而轉向恩典；恩典不廢棄律法，而是在更高的層次上成全律法（馬太福音五章17節）。大衛因恩典得赦，卻仍承擔了自然後果（孩子死去）——這說明恩典不是逃避責任的方式，而是在責任中得到新生的力量。</p>
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
              '神在大洪水後頒布「流人血者必被追討」，將執行死刑的責任交付人類。你對死刑的個人立場是什麼？你的立場主要是基於什麼（聖經、情感、社會考量）？',
              '羅馬書十三章說「掌權的是神的用人」，但歷史上有許多殘暴的政府。你認為基督徒在不公義的政府下應該如何平衡「順服」與「抗拒」？',
              '葉忒羅建議摩西選用「有才能、敬畏神、誠實、恨不義之財」的人。以這四個標準來看，你周圍有這樣的人嗎？你自己符合這個標準嗎？',
              '本章說人類犯罪使動物的性情改變（大熊貓有利齒卻只吃竹子）。如果伊甸園的秩序恢復了，你認為世界會變成什麼樣子（以賽亞書十一章6-9節「豺狼與羊羔同居」）？',
              '大衛犯了死罪，神因他悔改而赦免，但仍承擔了自然後果（孩子死去）。你曾有過「罪被赦免但仍承擔後果」的經歷嗎？這讓你對神的公義和恩典有什麼新的體會？',
              '本章以「制度是為人設立的，人不是為制度而存在的」作為論點，你在生活中有沒有因為「制度」而感到受困？你如何在尊重制度的同時，保持對神主權的信靠？',
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
              <h4 className="font-semibold text-green-700 mb-2">🏛️ 為政府和執政者禱告</h4>
              <p className="text-gray-700 mb-2">本週為你所在地的政府領袖禱告（提摩太前書二章1-2節）：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>求神賜給他們葉忒羅建議的四種品格：才能、敬畏神、誠實、不貪財。</li>
                <li>求神保守政府制度能夠公平公義地運作。</li>
                <li>為那些在不公義制度下受苦的人禱告。</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 默想大衛的悔改詩篇</h4>
              <p className="text-gray-700 mb-2">讀詩篇五十一篇（大衛犯罪後的悔改禱告）：</p>
              <div className="bg-green-50 p-3 rounded-lg mb-2">
                <p className="text-gray-700 text-sm italic leading-relaxed">「神啊，求你按你的慈愛憐恤我，按你豐盛的慈悲塗抹我的過犯。求你將我的罪孽洗除淨盡，並潔除我的罪。」（詩篇五十一篇1-2節）</p>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>有沒有你一直未向神承認的罪？今天誠實地帶到神面前。</li>
                <li>記住：神的恩典大過任何制度，但悔改必須是真實的。</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">⚖️ 自我評估葉忒羅的四個標準</h4>
              <p className="text-gray-700 mb-2">把自己放在葉忒羅建議的四個標準下評估（1-5分）：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>才能：我在自己的崗位上是否盡力發揮能力？</li>
                <li>敬畏神：我做決定時有沒有以神的旨意為優先？</li>
                <li>誠實無妄：我的言行是否一致？有沒有言不由衷的時候？</li>
                <li>恨不義之財：面對金錢誘惑，我的底線在哪裏？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 禱告</h4>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-gray-700 leading-relaxed italic text-sm">
                  「主啊，感謝祢設立了人類的制度，讓地球在大洪水後有了秩序和公義的根基。求祢幫助我尊重祢所設立的制度，同時記得祢才是一切制度最高的主宰。在我面對不公義的時候，給我智慧知道何時順從、何時抗拒；在我有機會影響制度的時候，給我勇氣追求公平公義。最重要的是，提醒我祢的恩典大過一切——無論我犯了多大的錯，只要誠心悔改，祢仍然在等待著我。奉主耶穌的名禱告，阿們。」
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
