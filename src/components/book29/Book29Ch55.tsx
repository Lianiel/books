import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch55() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第55章</h1>
        <h2 className="text-xl font-semibold text-gray-700">神寬廣的愛</h2>
        <p className="text-gray-500 mt-1">埃及我的百姓，亞述我手的工作，以色列我的產業，都有福了！　以賽亞書十九25</p>
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
              創世記當中有一些家譜，不屬於彌賽亞譜系，通常沒有附帶甚麼故事，似乎不太重要，也容易被讀者忽略。但那家譜本身是詳細的，神將這些流傳給我們，有他的用意。一方面是提供背景，讓我們看到神的選民在甚麼大環境裡面發展；一方面是預留線索，讓我們看到非選民也在後來的歷史中得到神的眷顧。本章先介紹亞伯拉罕的其他後裔，然後介紹東方人約伯的淵源，主要是幫助我們看見神寬廣的愛。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、亞伯拉罕的其他後裔</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                亞伯拉罕在撒拉去世後，「1……又娶了一妻，名叫基土拉。2基土拉給他生了心蘭、約珊、米但、米甸、伊施巴，和書亞。」（創廿五1-2）亞伯拉罕本來已經年紀老邁，難以生育，但在生了以撒之後似乎又返老還童，以致能再生這麼多兒子。基土拉的第四個兒子米甸發展出米甸族，摩西四十歲逃離埃及時去到米甸，娶了米甸祭司的女兒西波拉（出二15-21），西波拉有很好的靈性，陪伴摩西前往埃及時，幫兒子行割禮，使摩西免受神的憤怒（出四24-26），後來西波拉回到父親那裏。等到摩西帶領百姓出埃及之後，摩西的岳父米甸祭司葉羅帶著女兒、孫子回到摩西這邊，同時給了摩西有關設立千夫長、百夫長、五十夫長、十夫長的建議，為摩西及以色列人帶來很大的幫助。（出十八1-27）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                亞述國有很古老的歷史，根源是亞述這個人，他是閃的兒子（創十22），後來亞伯拉罕從基土拉所生的後裔也融入在亞述這個大族裡面。以賽亞書十九章有一個很重要的預言：「23當那日，必有從埃及通亞述去的大道。亞述人要進入埃及，埃及人也進入亞述；埃及人要與亞述人一同敬拜耶和華。24當那日，以色列必與埃及、亞述三國一律，使地上的人得福；25因為萬軍之耶和華賜福給他們，說：埃及我的百姓，亞述我手的工作，以色列我的產業，都有福了！」（賽十九23-25）為何在末後的日子有這樣的結局，主要原因之一是神眷顧亞伯拉罕的後裔。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                亞伯拉罕總共有三個妻妾，短時間神比較多眷顧撒拉的後裔，但最後，三位妻妾的後裔，神都眷顧。撒拉的後裔產生以色列民族；埃及人夏甲的後裔是阿拉伯民族，因此阿拉伯人也算是廣義的埃及人；基土拉的後裔融入亞述民族。所以在末後的日子，這三個民族神都眷顧。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                埃及的角色地位很特別，她曾經兩次收留了神的兒子，一次是以色列全家族（何十一1），一次是幼年的耶穌基督（太二13-15）。亞伯拉罕肉身的長子以實瑪利是他與埃及人夏甲所生，他的後裔在迦南地的東邊發展，是目前阿拉伯民族的主體：「他子孫的住處在他眾弟兄東邊，從哈腓拉直到埃及前的書珥，正在亞述的道上。」（創廿五18）廣義的埃及人可包括阿拉伯人，他們在末後的日子都會受到神的眷顧。目前阿拉伯人信主的比例不斷在提升，雖然不能公開，但都很火熱愛主。這個趨勢，一方面是由於全世界的基督徒都在為穆斯林（回教徒）歸主禱告，一方面也是由於神超越的揀選，包含對信心之父亞伯拉罕獨特的愛。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在前巴比倫的整個大環境中，無人記念耶和華神，神把亞伯拉罕從迦勒底的吾珥呼召出來。亞伯拉罕不是完美的人，他也有各種軟弱，他會一時忽略求問神，他會因為怕死而害妻子被帶去給法老為妾。但是他盡可能地信靠神，走神引導他的路，在整片的黑暗中，顯出一點亮光。因此神眷顧他，賜福他所有的後裔，先是撒拉的後裔，後是夏甲、基土拉的後裔，這是神寬廣的愛。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們原都是外邦人，在以色列之約以外（弗二12），但由於神寬廣的愛，保羅說，這福音本是神的大能，要救一切相信的，先是猶太人，後是希利尼人，也就是外邦人（羅一16）。我們都是挪亞的後裔，在挪亞之約有份，挪亞在他的世代，也是無人記念耶和華神，唯獨他信靠神，所以神會眷顧他及他的後裔。直到今日，已有千千萬萬閃、含、雅弗的後裔歸向耶和華神了。
              </p>
              <p className="text-gray-700 leading-relaxed">
                閃在他的世代比較特別，可能當含與雅弗漸漸把神忘記時，當寧錄王施行極權統治、建造巴別塔時，閃仍然堅守信仰，甚至可能一直擔任神的祭司<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（威明頓，《威明頓聖經輔讀》，頁76）</span>。他的後代有一大支離開巴別，分別為聖去到遙遠的黃河流域，建立信靠真神的信仰與文化<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（莊東傑，《跨越鴻溝——在華人文化處境中詮釋罪》，頁110-112）</span>，使那地稱為神州<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（遠志明，《神州懺悔錄——上帝與五千年中國》，頁17）</span>。中華民族古老的君王都獻祭給上帝真神，而第一個朝代稱為夏，幾乎與閃同音，用閩南語（古漢音）唸閃，就是夏的音，很可能是紀念閃。到了末了的世代，一個國族有最多基督徒的，就是神州大地這群閃的後代。這是神何等長闊高深的愛啊！
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、神對約伯的揀選</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                約伯記是全本聖經最古老的一卷書，約伯記沒有提及以色列人的歷史，沒有摩西律法，沒有出埃及、過紅海……等等，因為約伯的年代與創世記同期，比以色列成國更早。但約伯是實存的人物，因為以西結書（結十四14、20）及雅各書（雅五11）都有提及他。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                以西結書十四12-14：「12耶和華的話臨到我說：13人子啊，若有一國犯罪干犯我，我也向他伸手折斷他們的杖，就是斷絕他們的糧，使饑荒臨到那地，將人與牲畜從其中剪除；其中雖有挪亞、但以理、約伯這三人，他們只能因他們的義救自己的性命。這是主耶和華說的。」這是在說審判的真實性與嚴重性，但同時提到約伯，他是虔誠正直的人，是因信稱義的人，是有力的代禱者。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                雅各書五10-11：「10弟兄們，你們要把那先前奉主名說話的眾先知當作能受苦能忍耐的榜樣。11那先前忍耐的人，我們稱他們是有福的。你們聽見過約伯的忍耐，也知道主給他的結局，明顯主是滿心憐憫，大有慈悲。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                約伯肯定不是以色列人，他的家世來源是甚麼？約伯記一1有一個線索，這裡說，約伯是烏斯地的人。烏斯是拿鶴的長子：「20這事以後，有人告訴亞伯拉罕說：密迦給你兄弟拿鶴生了幾個兒子，21長子是烏斯，……。」（創廿二20-21）更早期，閃的孫子也有一位叫烏斯（創十23）。可能拿鶴的長子烏斯或閃的孫子烏斯來這裡發展，以致這地稱為烏斯地。烏斯地大概位於加利利海東北之處，一直延伸向幼發拉底河<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（威明頓，《威明頓聖經輔讀》，頁97）</span>。若約伯是烏斯的後裔，就不是亞伯拉罕的後裔，但至少是閃的後裔，甚至是他拉、拿鶴的後裔，這一支有傳承耶和華神的信仰。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                舊約的希臘文譯本，也就是七十士譯本，將約伯等同於以東第二任王約巴（創卅六33）<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（威明頓，《威明頓聖經輔讀》，頁97）</span>，這是猶太人對約伯家世的理解。若是如此，則約伯是亞伯拉罕、以撒的後裔；並且顯明，耶和華神的信仰在以掃的後裔也有所傳承。約伯受苦時，有三個朋友來看望他，這三個朋友是提幔人以利法、書亞人比勒達、拿瑪人瑣法（伯二11），其中的比勒達是書亞人，書亞人就是書亞的後裔，而書亞乃是亞伯拉罕與基土拉的第六個兒子，記在創世記廿五1-2：「1亞伯拉罕又娶了一妻，名叫基土拉。2基土拉給他生了心蘭、約珊、米但、米甸、伊施巴，和書亞。」藉此看出，耶和華神的信仰，也在亞伯拉罕其他妻妾的後代傳承。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                而提幔人以利法則是以掃的後裔：「10以掃眾子的名字如下。以掃的妻子亞大生以利法；以掃的妻子巴實抹生流珥。11以利法的兒子是提幔、阿抹、洗玻、迦坦、基納斯。……15以掃子孫中作族長的記在下面。以掃的長子以利法的子孫中，有提幔族長、阿抹族長、洗玻族長、基納斯族長、可拉族長、迦坦族長、亞瑪力族長。這是在以東地從以利法所出的族長，都是亞大的子孫。」（創卅六10-16）以掃的長子是以利法，以利法的長子是提幔，提幔成為一族，在提幔的後裔中有一位以利法，他用了祖先以利法的名字。這裡也看出，耶和華神的信仰，在以撒兒子以掃的後代傳承。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                約伯還有一位比較年輕的朋友是布西人蘭族巴拉迦的兒子以利戶（伯卅二2），蘭族可能出自閃的兒子亞蘭（創十22）<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（李馨基，《活潑的生命》月刊，2021年12月，頁68）</span>，或拿鶴的兒子亞蘭（創廿二21）。以利戶說到：「神的靈造我；全能者的氣使我得生。……我在神面前與你一樣，也是用土造成。」（伯卅三4,6）這樣的內容顯示出，他知道創世記二章所見證的事。以利戶還說：「14神說一次、兩次，世人卻不理會。15人躺在床上沉睡的時候，神就用夢和夜間的異象，16開通他們的耳朵，將當受的教訓印在他們心上，好叫人不從自己的謀算，不行驕傲的事（原文是將驕傲向人隱藏），18攔阻人不陷於坑裡，不死在刀下。……神救贖我的靈魂免入深坑，我的生命也必得見光。」（伯卅三14-18,28）這些內容說到神是啟示者、救贖者。以利戶又說：「神審判人，神是造我的主、知識全備者、全能者。」（伯卅四23，卅六3，卅七16,23）歸納起來，以利戶對神的認識是很全備的。這些不是人能夠從普通啟示推測出來的，乃是來自神的特殊啟示。也就是說，約伯那時代，有些人清楚知道創世記中不少的內容，有對真神的信仰。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                因此，不是只有以色列的後裔，才有神的啟示與眷顧。在以色列未成國之前，也就是以色列住在埃及的時候，神在東方人中，在烏斯地，揀選了約伯這個人。這人本來就是「完全正直、敬畏神、遠離惡事」的人（伯一1）。並且他是獻祭、求告神的人，經常為兒女守望禱告：「筵宴的日子過了，約伯打發人去叫他們自潔。他清早起來，按著他們眾人的數目獻燔祭；因為他說：恐怕我兒子犯了罪，心中棄掉神。約伯常常這樣行。」（伯一5）約伯的經歷可以跟以諾與神同行並列，也可以跟亞伯拉罕一生的信心之旅並列。並且擁有相似於雅各、約瑟的超自然經歷，因為在極大的苦難之後，神親自向他顯現，與約伯對話（伯卅八至四十一章）。結束對話前，約伯說：「我從前風聞有你，今日親眼見你。」（伯四十二5）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                約伯記四十二7-9：「7耶和華對約伯說話以後，就對提幔人以利法說：我的怒氣向你和你兩個朋友發作，因為你們議論我不如我的僕人約伯說的是。8現在你們要取七隻公牛，七隻公羊，到我僕人約伯那裡去，為自己獻上燔祭，我的僕人約伯就為你們祈禱。我因悅納他，就不按你們的愚妄辦你們。你們議論我，不如我的僕人約伯說的是。9於是提幔人以利法、書亞人比勒達、拿瑪人瑣法照著耶和華所吩咐的去行；耶和華就悅納約伯。」這三位朋友，經歷了神對他們說話。並且在神的吩咐下，獻祭給神，而後讓約伯來為他們禱告。在那時代，神與人是有互動的。
              </p>
              <p className="text-gray-700 leading-relaxed">
                約伯記四十二10-17：「10約伯為他的朋友祈禱。耶和華就使約伯從苦境（原文是擄掠）轉回，並且耶和華賜給他的比他從前所有的加倍。11約伯的弟兄、姊妹，和以先所認識的人都來見他，在他家裡一同吃飯；又論到耶和華所降與他的一切災禍，都為他悲傷安慰他。每人也送他一塊銀子和一個金環。12這樣，耶和華後來賜福給約伯比先前更多。他有一萬四千羊，六千駱駝，一千對牛，一千母驢。13他也有七個兒子，三個女兒。14他給長女起名叫耶米瑪，次女叫基洗亞，三女叫基連哈樸。15在那全地的婦女中找不著像約伯的女兒那樣美貌。他們的父親使他們在弟兄中得產業。16此後，約伯又活了一百四十年，得見他的兒孫，直到四代。17這樣，約伯年紀老邁，日子滿足而死。」從這段經文可看出來，約伯的兄弟姊妹及許多朋友，都知道了耶和華神與約伯的互動關係，而且約伯最終的蒙福見證是廣為人知的。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                不僅在近處的東方，也在遙遠的東方，神向人有啟示與引導。周書呂刑篇說到：「皇帝哀矜庶戮之不辜，報虐以威，遏絕苗民，無世在下。乃命重黎，絕地天通，罔有降格。」意思是：「偉大的上帝憐憫受害民眾的無辜，用威嚴的懲罰來報復殘暴之人，滅絕苗民，使他們沒有後代。於是命令重、黎二位，斷絕地與天的相通，以後上帝就不再降臨下來了。」<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（屈萬里註釋，《尚書今註今譯》，頁177-178）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「乃命重黎，絕地天通，罔有降格」，從字面上看，是斷絕地與天的相通，上帝不再降臨。《國語》記載，觀射父另有其解釋，認為這段話是指「祭司」職分的整頓、安排，使司天、司地者互不侵瀆，而帶來好的結果。但這解釋，沒有處理「罔有降格」這句話。自古來，「降格」一直都是指「神降臨、同在，降福之意」，如「惟帝降格，嚮于時夏」（多士）；「惟帝降格於夏。」（多方）<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（屈萬里註釋，《尚書今註今譯》，頁132,149）</span>。「罔有降格」是上帝不再降臨、賜福。從上下文看，「乃命重黎」的主詞應是「皇帝」，也就是上帝，而不是當時地上的君王。因此，人犯罪的結果，不僅有當時的災禍，也造成上帝不再降臨的結果<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（莊東傑，《跨越鴻溝——在華人文化處境中詮釋罪》，頁191）</span>。遠志明採取類似的解釋：「人犯了罪，天帝命重黎堵絕天路，使上下不相來往。」<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（遠志明，《神州懺悔錄——上帝與五千年中國》，頁6）</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                可推論，神曾經在堯、舜、禹，夏、商、周的時候常有降格，但當人嚴重悖逆神之後，神就不再降格了。夏、商、周是神眷顧華人的時代，後來華人悖逆離開神，神不再降格。神愛我們，我們何時轉向他，他就會轉向我們，我們親近他，他就會親近我們。神的愛何等寬廣！
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
                '亞伯拉罕晚年續娶基土拉，所生後裔發展出米甸族並融入亞述民族；連同撒拉的以色列後裔、夏甲的阿拉伯後裔，三支後裔在末後的日子都蒙神眷顧，應驗以賽亞書十九23-25「埃及、亞述、以色列」三國一律蒙福的預言。',
                '埃及曾兩次收留神的兒子——雅各全家族與幼年耶穌，角色地位特別；廣義的埃及人（含阿拉伯人）在末後也蒙神眷顧。',
                '閃在巴別塔悖逆的世代仍堅守對真神的信仰，其後裔遷至黃河流域建立敬拜真神的文化，中華民族第一個朝代「夏」與「閃」音近，可能是紀念閃；如今神州大地成為擁有最多基督徒的地區之一。',
                '約伯記是聖經最古老的書卷，約伯雖非以色列人（可能是拿鶴或閃的後裔，來自烏斯地），卻是「完全正直、敬畏神、遠離惡事」的人，證明在以色列成國以前，神已在東方人中施行啟示與揀選。',
                '中國古籍《尚書》呂刑篇記載「乃命重黎，絕地天通，罔有降格」，暗示上古華人曾蒙神降臨賜福，後因悖逆而失去，顯明神向普世萬民都有寬廣長闊的愛，人何時轉向他，他就轉向人。',
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
              '亞伯拉罕除了有以撒、雅各這支主要的後裔之外，還有哪些後裔？亞伯拉罕所有的肉身後裔，現在屬於哪些族裔？跟以賽亞書十九23-25的預言有何相關？',
              '約伯的身世有哪些可能？約伯與神的互動，顯示神在以色列民族之外也有啟示與救恩，這事與華人有何關聯？我們當如何回應神？',
              '約伯的朋友們可能都知道創世記的一些重要內容，顯出神寬廣的愛，這事對你傳福音有何啟發？',
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
