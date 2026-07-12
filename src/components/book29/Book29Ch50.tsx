import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch50() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第50章</h1>
        <h2 className="text-xl font-semibold text-gray-700">神堅定立約</h2>
        <p className="text-gray-500 mt-1">我要與你並你世世代代的後裔堅立我的約，作永遠的約。　創世記十七7</p>
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
              神是立約的神，在基督新約之前，有亞當之約、挪亞之約、亞伯拉罕之約、摩西之約、大衛之約。
            </p>
            <p className="text-gray-700 leading-relaxed">
              神最早與亞當立約，吩咐人生養眾多，遍滿地面，管理活物、治理全地。指示人吃生命樹，可得永遠的福分，但不可吃分別善惡樹，若吃分別善惡樹會死。
            </p>
            <p className="text-gray-700 leading-relaxed">
              洪水後神與挪亞立約，以虹為記號，應許不再有滅世大洪水，人要生養眾多，遍滿全地，動物都交付人手。指示人可吃動物的肉，但不可吃血，也不可流人血，若流人血需償付生命的代價。
            </p>
            <p className="text-gray-700 leading-relaxed">
              人分散全地之後神呼召亞伯拉罕，與他立約，應許因信得福，後裔要生養眾多，如天上的星、海邊的沙那樣多，且要得福；後裔必得迦南全地，萬國要因他的後裔得福。君王從他而立，國度從他而出，且要得著仇敵的城門。
            </p>
            <p className="text-gray-700 leading-relaxed">
              以上諸約，都包含後裔眾多、得著地土、擁有權柄，這三者與國家的要素——人民、土地、主權——是一致的。神藉著亞當要在這世界建立神的國，人多次失敗後，神揀選亞伯拉罕，從迦南地開始，要建立神的國。這個計畫在大衛王、所羅門王的時代，暫時成功了，但只是預表將來的神國，因為之後的王愈來愈偏離神，最終亡國，百姓被虜，分散全地。神國在地上的建立，最終要靠基督再來，才會完全成就。我們現在的佈道宣教都在預備這個國度，神最早與亞伯拉罕、以撒、雅各的立約，也是在預備這個國度。
            </p>
            <p className="text-gray-700 leading-relaxed">
              亞伯拉罕之約的內容，既然包含後裔得福，因此亞伯拉罕的兒子以撒，孫子雅各，就繼承這約，也經歷這約。他們不單是從父親聽聞，而且是神親自再向他們顯現，述說這約，堅定這約。
            </p>
            <p className="text-gray-700 leading-relaxed">
              後來的摩西之約，透過以色列人每年守逾越節，神不斷述說，不斷堅立這約。
            </p>
            <p className="text-gray-700 leading-relaxed">
              基督的新約是十架救恩，透過基督徒每週、每日領受真道，每月、每週領受聖餐，神也不斷述說這約、堅立這約。
            </p>
            <p className="text-gray-700 leading-relaxed">
              以下整理神向亞伯拉罕、以撒、雅各的顯現與應許，包括時機與內容。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、神對亞伯拉罕的顯現與應許</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                本書第四十三章簡單提到，神至少有五次呼召亞伯拉罕，分別記在十二1-7，十三14-17，十五1-21，十七1-22，廿二15-18。神每次都會重複及更新加添約的內容，每一次都會應許本人得福，後裔得福。唯有第一次與最後一次提到萬族得福或萬國得福（創十二7，創廿二18）。
              </p>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">第一次（創十二1-7）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  神第一次呼召亞伯蘭時，給他多重的應許，共有七項：「1.我必叫你成為大國。2.我必賜福給你。3.叫你的名為大。4.你也要叫別人得福。5.為你祝福的，我必賜福與他；6.那咒詛你的，我必咒詛他。7.地上的萬族都要因你得福。」可歸納為三類：1.本人得福，2.後裔得福，3.萬族得福。之後的應許大體都在這範圍內。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">第二次（創十三14-17）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  創世記十三14-17：「14羅得離別亞伯蘭以後，耶和華對亞伯蘭說：從你所在的地方，你舉目向東西南北觀看；15凡你所看見的一切地，我都要賜給你和你的後裔，直到永遠。16我也要使你的後裔如同地上的塵沙那樣多，人若能數算地上的塵沙才能數算你的後裔。17你起來，縱橫走遍這地，因為我必把這地賜給你。」神第二次給亞伯拉罕應許，是在羅得選擇約旦河平原而離開之後，亞伯拉罕有可得寧不得的信心，因此這次的應許偏重在土地，一方面是用看的，所看見的就是要賜給你和你後裔的；一方面是用走的，所走到的都是你的。這地並非無限大，它有天然的疆界與屏障，西邊是地中海，東邊是約旦河，所以可以縱橫走遍。另外神也強調，後裔的數量會像海邊的沙那麼多。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">第三次（創十五5，13-21）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  神第三次給亞伯拉罕應許，是在亞伯拉罕打敗四王、拯救羅得之後，算是對亞伯拉罕信心成長的肯定，因此對亞伯拉罕發出更多預言與應許。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  創世記十五5：「……你向天觀看，數算眾星，能數得過來麼。又對他說，你的後裔將要如此。」上次的顯現說到，後裔要像海邊的沙那麼多，已經是非常多了。這次說，後裔要像天上的星那麼多。客觀來說，天上的星要比海邊的沙還要多得多，所以神所應許後裔的數量是多而又多，數之不盡的。這都在未來應驗了，因為不僅有肉身的後裔，還有屬靈的後裔。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  接著在創世記十五13-16，神預先告知亞伯拉罕，他的後裔未來數百年將會有何遭遇與發展，後來都一一應驗，顯明神是掌管歷史的神。創世記十五17：「日落天黑，不料有冒煙的爐並燒著的火把從那些肉塊中經過。」這代表神收納了亞伯拉罕所獻的祭。接著記載：「18當那日，耶和華與亞伯蘭立約，說：我已賜給你的後裔，從埃及河直到伯拉大河之地，19就是基尼人、基尼洗人、甲摩尼人、20赫人、比利洗人、利乏音人、21亞摩利人、迦南人、革迦撒人、耶布斯人之地。」（創十五18-21）這次的應許不僅把後裔形容的更多，也把應許的土地講得更大，南邊從埃及河開始，北邊直到伯拉大河。後來以色列國的版圖從來沒有這麼大，但神既然說了，基督再來時，將會實現這預言。一般提到迦南七族（申七1，書三10，王上九20），但這裡列出十族，其中的基尼人、基尼洗人、甲摩尼人等三族，只在這裡出現<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（聖經公會，《創世記研讀本》，頁139）</span>。可能他們在亞伯拉罕時代是存在的，但到摩西時代已被淘汰。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">第四次（創十七1-22）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  這次顯現與上次顯現相隔十三年（創十六3），可能因為亞伯拉罕娶夏甲為妾，神不喜悅。這次顯現，神要亞伯蘭作完全人，這是立約的條件，並且將亞伯蘭的名字改為亞伯拉罕，立他作多國的父。神的呼召與應許是不斷加深的，接著還應許「國度從你而立，君王從你而出」。之後設立割禮，作為立約的記號或證據。不受割禮的男子必從民中剪除，因他背了神的約。這段經文共有十三次提到「約」，包括立約、守約、我的約、永遠的約等，特別有三次說到堅定所立的約，三次講這約是永遠的約，可見神何等看重這約。
                </p>
              </div>

              <div>
                <span className="font-semibold text-indigo-700">第五次（創廿二16-18）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  創世記廿二16-18：「16耶和華說：你既行了這事，不留下你的兒子，就是你獨生的兒子，我便指著自己起誓說：『論福，我必賜大福給你；論子孫，我必叫你的子孫多起來，如同天上的星，海邊的沙。你子孫必得著仇敵的城門，並且地上萬國都必因你的後裔得福，因為你聽從了我的話。』」
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  亞伯拉罕獻以撒通過試驗之後，神給了最高的啟示，講到子孫必得著仇敵的城門，這不單預言到以色列人要打敗迦南七族，得著迦南地，也預言到耶穌基督將要藉著死敗壞掌死權的魔鬼，將人從魔鬼權勢之下拯救出來。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  神與亞伯拉罕所立的約是永遠的約，將延續至兒子、孫子、子孫，並藉著一位獨特的子孫基督耶穌，使這約的內容完全成就。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、神對以撒的顯現與應許</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                神向以撒顯現有兩次，一次在基拉耳，一次在別是巴。
              </p>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">一、在基拉耳（創廿六1~5）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  這次的顯現跟饑荒有關，創世記廿六1-2：「1在亞伯拉罕的日子，那地有一次饑荒；這時又有饑荒，以撒就往基拉耳去，到非利士人的王亞比米勒那裡。2耶和華向以撒顯現，說：你不要下埃及去，要住在我所指示你的地。」上一次發生饑荒，亞伯拉罕下埃及，發生妻子被奪的事情。這次神特別提前指示，吩咐以撒不要下埃及。前人的榜樣與鑒誡，我們可以從聖經得到，可以從長輩得到，也可以從聖靈說話得到，這是重要的，能讓我們不重蹈覆轍。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  神接著說：「3你寄居在這地，我必與你同在，賜福給你，因為我要將這些地都賜給你和你的後裔。我必堅定我向你父亞伯拉罕所起的誓。4我要加增你的後裔，像天上的星那樣多，又要將這些地都賜給你的後裔。並且地上萬國必因你的後裔得福，都因亞伯拉罕聽從我的話，遵守我的吩咐和我的命令、律例、法度。5以撒就住在基拉耳。」（創廿六3-6）神應許在這地與以撒同在，這是最寶貴的。神的同在，使以撒能勝過饑荒，因為神會供應。這是我們可以學習及經歷的，饑荒或其他災難來臨，最好的方法不一定是逃去別地方，乃是尋求神的同在，有神同在的地方就是最好的地方。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  在基拉耳，神對以撒說了四件事，正是神對亞伯拉罕曾經應許過的完整內容，以撒繼續予以承接：
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-2 ml-2">
                  <li>你寄居在這地，我必與你同在，賜福給你。（3節）</li>
                  <li>將這地賜給你和你的後裔。（3節）</li>
                  <li>加增你的後裔像天上的星那樣多。（4節）</li>
                  <li>地上萬國因你的後裔得福。（4節）</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-2">
                  這四件事同樣包含了本人得福、後裔得福、萬國得福三方面。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  神為什麼給與亞伯拉罕這些應許，第五節說，因為亞伯拉罕聽從神的話，遵守神的吩咐、命令、律例、法度。許多人誤以為因信稱義的意思是只要頭腦相信了，各樣福氣就會臨到，其實不是。因信稱義當然是出於神的恩典，同時聖靈賜下重生的靈，這靈使我們能順服神去做神所吩咐的事，接著在生命中就會發生許多美好的事。這過程仍然是出於神的恩典，但人要願意順服遵行主道，這樣的順服仍然在信的範圍內，如同使徒雅各所說，信心沒有行為是死的。因此以撒遵照神的指示，住在本地，而繼續蒙福。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  因信稱義且以信心繼續走成聖道路的人，並非完全不會犯錯。以撒在基拉耳接著也遇到與亞伯拉罕相似的挑戰，因為妻子美貌，怕惹來殺身之禍，就對問的人說她是我的妹子（創廿六7）。以撒與父親亞伯拉罕有相同的軟弱，犯了相同的錯誤。但這次的狀況比較好一些，因為亞比米勒提前看到以撒與妻子戲耍（創廿六8），是親密的動作，可看出他們是夫妻，於是找以撒來澄清，因此免除了妻子被奪的事。雖然人有軟弱，但至少是照神吩咐住在神所指示的地方，萬一出了問題會比較容易解決。
                </p>
              </div>

              <div>
                <span className="font-semibold text-indigo-700">二、在別是巴（創廿六23~25）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  在基拉耳那邊，以撒不斷禮讓當地人活水井，後來以撒遷移去到別是巴，這裡仍然在應許之地的範圍，這地過去沒有迦南人的勢力，比較空曠。神再次向他顯現：「23以撒從那裡上別是巴去。24當夜耶和華向他顯現，說：我是你父親亞伯拉罕的神，不要懼怕！因為我與你同在，要賜福給你，並要為我僕人亞伯拉罕的緣故，使你的後裔繁多。25以撒就在那裡築了一座壇，求告耶和華的名，並且支搭帳棚；他的僕人便在那裡挖了一口井。」（創廿六23-25）這裡特別說：「不要懼怕！因為我與你同在。」（24節）身為在迦南地作客的人，人丁少，資源少，難免會懼怕。但神的同在，讓以撒可以不必懼怕。當耶穌吩咐門徒要去使萬民作主的門徒，就是要門徒去足以令人懼怕的陌生地方。但是主說，我必與你們同在直到世界的末了（太廿八20）。因此門徒可以不用懼怕地去各地傳福音作見證，今日的我們也一樣。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  這次神的應許主要有兩項，包含了本人得福與後裔得福。
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-2 ml-2">
                  <li>不要懼怕！因為我與你同在，要賜福給你。</li>
                  <li>我要為我僕人亞伯拉罕的緣故，使你的後裔繁多。</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-2">
                  領受應許後，以撒在那裡築壇獻祭、求告神的名，並且支搭帳棚，又挖了一口井。他知道這裡是神喜悅的地方，因此預備在那裡長久居住。果然亞比米勒從基拉耳來見以撒，與他立和平的約，他也就繼續住在那裡，直到年老（創廿八7）。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  以撒是應許之子，我們也憑著應許作神的兒女（約一12），因此我們也一同領受神給以撒的應許與祝福。我們可以如此宣告：「神必與我同在，賜福給我，要將地賜給我和我的後裔，並加增我的後裔像天上的星那麼多，地上的萬國都要因我的後裔得福。」
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、神對雅各的顯現與應許（創廿八）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                雅各的一生，能經歷苦難而得勝，最主要是因為有神的同在。聖經中記載，神五次向他顯現，並對他發出應許。
              </p>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">一、在伯特利的天梯之夢（創廿八14-15）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  雅各離開了父母，苦難正要開始。在他獨自前往母舅拉班家的路上，神給他天梯的異夢，並站在梯子上對他說：「你的後裔必像地上的塵沙那樣多，必向東南西北展開。地上萬族必因你和你的後裔得福。我也與你同在，你無論往那裡去，我必保佑你，領你歸回這地。總不離棄你，直到我成全了向你所應許的。」（創廿八14-15）雅各在異夢中領受神的應許，使他勇敢前往母舅拉班家，並在那裡待了二十年。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  耶穌對門徒說：「我實實在在的告訴你們，你們將要看見天開了，神的使者上去下來在人子身上。」（約一51）猶太人知道先祖雅各的天梯之夢，耶穌引用雅各的經歷，幫助門徒明白神與他同在，正如神與雅各同在一樣。雅各天梯之夢的經歷，預表耶穌基督是有神同在的那一位。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">二、在巴旦亞蘭的指示（創卅一3、13）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  雅各在巴旦亞蘭，為了兩個妻子，共服事母舅拉班十四年，又為了工價服事六年；二十年之後，神再次向雅各顯現，指示他回迦南地，並應許必與他同在，於是雅各就有勇氣返回迦南地。曾經戴德生前往中國、德蕾莎修女前往印度，都有神同在的應許，他們就帶著神的同在，前往神所指示的地方。我們能有豐盛的生命，不在乎外在有什麼，而是裡面有神的同在。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">三、在雅博渡口摔跤（創卅二22-32）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  當雅各從舅舅拉班那裡要回迦南地時，只要一過雅博渡口，就要面對哥哥以掃；二十年前以掃說要殺他，此時以掃已帶著四百人迎面而來（創卅三1），所以雅各在雅博渡口與神的會面非常重要。雅各在雅博渡口與神摔跤直到黎明，神說：「容我去吧！」雅各說：「你不給我祝福，我就不容祢去。」（創卅二26）神就在那裡給雅各祝福（創卅二29）。有了神的祝福與同在，就不用擔心害怕了。因此接著他能用正確合宜的態度去面對哥哥以掃，並且有了完滿的結果。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">四、上伯特利築壇（創卅五1-15）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  神指示雅各在伯特利築壇，並在那裡向雅各顯現，對他說：「你要生養眾多，將來有一族和多國的民從你而生，又有君王從你而出。」（創卅五11）這裡增加了有關君王的啟示，之前神對亞伯拉罕有講過，但這裡是第一次跟雅各講。神對亞伯拉罕的啟示與應許，是逐漸加深的；神對雅各的啟示與應許也是這樣。我們成為基督徒，不單享受神的同在，還要遵循神的指示與應許，除了生養眾多，還要培養如同君王一般能被神重用的國度人才。
                </p>
              </div>

              <div>
                <span className="font-semibold text-indigo-700">五、赴埃及途中，在別是巴獻祭（創四六1-4）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  當迦南地面臨飢荒，雅各得知愛子約瑟失而復得，他決定前往埃及，途中在別是巴獻祭，夜間神在異象中對他說：「你下埃及不要害怕，因我必使你在那裡成為大族。我要和你同下埃及，也必帶你上來，約瑟必給你送終。」（創四六3-4）於是雅各憑著神的同在，帶著愛子約瑟仍活著的盼望，前往埃及。有許多宣教士、傳道人，他們也憑著神的同在，前往未得之地，贏回屬神的百姓。雅各的一生雖然不斷搬遷，但每個階段神始終跟他說：「我與你同在。」使他能倚靠神的同在與應許，前往神吩咐他去的地方。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  雅各有神的同在，預表耶穌基督有天父的同在。耶穌在卅三年半的人生，能夠面對許多苦難，甚至迎向十字架，都因有天父的同在。耶穌說：「不是我獨自在這裡，還有差我來的父與我同在。那差我來的，是與我同在。他沒有撇下我獨自在這裡，因為我常作祂所喜悅的事。」（約八16、29）
                </p>
                <p className="text-gray-700 leading-relaxed">
                  希伯來書十一25提到摩西「寧可和神的百姓同受苦害，也不願暫時享受罪中之樂」。我們也要放下罪中之樂，追求神的同在。神的同在，使我們無論往何處去，都能夠坦然面對眼前的一切。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                神樂意與我們立約，也會繼續堅定與我們所立的約，這是我們在亞伯拉罕、以撒、雅各身上所看到的。現在神已經藉著主耶穌基督與我們立了新約，這個新約會繼續堅定。神也會藉著聖經與聖靈繼續對我們說話，不斷地堅定這約，讓我們能夠靠著主的恩典、能力去完成主的大使命。
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
                '神先後與亞當、挪亞、亞伯拉罕、摩西、大衛立約，各約都包含後裔眾多、得著地土、擁有權柄三要素，對應國家的人民、土地、主權；神國最終要靠基督再來才完全成就。',
                '神向亞伯拉罕至少五次重申並加深應許（創十二、十三、十五、十七、廿二章），唯有第一次與最後一次特別提到萬族/萬國得福，內容逐次從個人擴展到土地、後裔數量、君王國度。',
                '神向以撒兩次顯現（基拉耳、別是巴），都強調「我必與你同在」，並重申給亞伯拉罕的應許；以撒因遵行神的吩咐而繼續蒙福，但也曾犯與父親相似的軟弱錯誤。',
                '神向雅各五次顯現（天梯之夢、巴旦亞蘭指示、雅博渡口摔跤、伯特利築壇、別是巴獻祭），每次都以「我與你同在」貫穿，使他能勝過苦難、勇敢前行。',
                '神向亞伯拉罕、以撒、雅各堅定立約的模式，預表神藉基督與教會立永遠的新約，並持續藉聖經與聖靈向後世堅立這約。',
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
              '神是與人立約的神，從亞當開始，有哪些約？這些約對我們有甚麼意義？請分享其中一個約。',
              '神對亞伯拉罕有至少五次的顯現與應許，分別是在什麼時機？有哪些重要內容？這些內容跟後來的以色列民有何關係？跟今天的我們有何關係？',
              '神對以撒有至少兩次的顯現與應許，分別在甚麼地方？主要內容是甚麼？',
              '神對雅各有多次的顯現，給他鼓勵與幫助，讓他能勝過苦難。可分享你靠主勝過苦難的見證。',
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
