import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch49() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第49章</h1>
        <h2 className="text-xl font-semibold text-gray-700">以撒的一生</h2>
        <p className="text-gray-500 mt-1">以撒就在那裏築了一座壇，求告耶和華的名，並且支搭帳棚。　創世記廿六25</p>
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
              以撒是應許之子，因亞伯拉罕生以撒是出於神的應許。亞伯拉罕的記號是祭壇，所到之處都築壇獻祭。以撒的記號是活水井，所到之處都挖井，神大大賜福，使他成功挖了許多井。從亞伯拉罕到以撒，預表十字架之後有聖靈活水。設祭壇獻羊羔，代表基督的十字架；活水井代表聖靈的活水。耶穌曾對門徒說，他還沒釘十字架，聖靈還不能來；等他被釘十字架、復活、升天，就賜下聖靈。
            </p>
            <p className="text-gray-700 leading-relaxed">
              以撒也是安息之子，他的人生滿有安息，在獻祭、娶妻、收成、挖井等各方面，神都親自供應與祝福。以撒多方面預表基督，尤其在被獻為祭的事上，預表基督被獻為贖罪祭，拯救了世人。
            </p>
            <p className="text-gray-700 leading-relaxed">
              以撒是亞伯拉罕的獨生兒子，有很多與父親一對一相處的機會，在其中領受了對神單純的信心。一對一的帶領是很有價值的事奉，能帶出榜樣的影響，並使信心有很好的傳承。
            </p>
            <p className="text-gray-700 leading-relaxed">
              以下從「以撒經歷恩典」與「以撒預表基督」兩大段來分享。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、以撒經歷恩典</h3>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">一、出生——神的應許（創廿1~7）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  神應許、預言撒拉會生一個兒子。當時撒拉年紀老邁、月經斷絕、心裡絕望，若還能有孩子，必定是神的賞賜。當撒拉生下以撒，她因為無法生育的羞愧被除去，於是她喜笑，以撒的名字有「喜笑」的意思，因以撒的出生，帶給撒拉極大的喜樂。以撒是憑著應許所生的，而不是憑血氣、肉體生的，因肉體已無法生育。保羅在加拉太書四29說到：「弟兄們，我們是憑著應許作兒女，如同以撒一樣。」當時保羅用以撒為例來說明，一般猶太人從肉身的血源作亞伯拉罕的後裔，但身為外邦人的加拉太人，並非因肉身的血源，乃是藉著信心，接受神的應許，而成為亞伯拉罕的後裔。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  以撒有雙重身份，他的確是亞伯拉罕肉身的孩子，但聖經特別強調神蹟、應許的成分，因亞伯拉罕與撒拉都已年老，能生孩子乃是神蹟，且是出於應許。約翰福音一12~13告訴我們：「凡接待他的就是信他名的人，他就賜他們權柄，作神的兒女。這等人不是從血氣生的，不是從情慾生的，也不是從人意生的，乃是從神生的。」新約時代的基督徒類似以撒，是藉著神的應許，從神的靈而生，而成為亞伯拉罕的後裔。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">二、獻祭——神的預備（創廿二1~14）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  創世記廿二13~14告訴我們獻祭當時的情況：「亞伯拉罕舉目觀看，不料，有一隻公羊，兩角扣在稠密的小樹中，亞伯拉罕就取了那隻公羊來，獻為燔祭，代替他的兒子。亞伯拉罕給那地方起名叫耶和華以勒，直到今日人還說，在耶和華的山上必有預備。」亞伯拉罕通過神的試驗，但以撒也扮演重要的角色。當神要亞伯拉罕獻以撒時，以撒能扛木柴，至少是青少年，有自由意志，能獨自行走，不像嬰孩或小孩完全由父母作主。以撒可以拒絕並逃跑，但因著對父親亞伯拉罕的信任，他全然順服。為何以撒如此信任亞伯拉罕，即使面臨死亡的危險也不退縮？因為以撒從小備受父親疼愛，滿足的愛帶來信任與順服。以撒相信，不管發生什麼事，父親一定是為他好。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  以撒順服的行為，正預表耶穌。耶穌是神的獨生子，他全然順服神的旨意。在客西馬尼園，耶穌向神禱告：「我父啊，倘若可行，求你叫這杯離開我，然而不要照我的意思，只要照你的意思。」（太廿六39）意思是，如果天父認為被釘十字架是應該要行的，他就完全配合。耶穌被釘十字架的過程，表達出對天父百分之百的信任和順服。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  當亞伯拉罕和以撒都順服神，神預備公羊代替以撒獻為燔祭。以撒只是預表耶穌，沒有真的被殺，但公羊一定要被獻上。從亞伯到挪亞，從閃到華人，從亞伯拉罕到摩西，從舊約時代到新約時代，歷代以來有許多羊被殺，都指向神親自為我們預備的公羊——耶穌基督，他成為拯救世人的贖罪祭。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">三、娶妻——神的安排（創廿四1~67）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  亞伯拉罕吩咐他的老僕人：「你要往我本地本族去，為我的兒子以撒娶一個妻子。」（創廿四4）老僕人向上帝禱告：「耶和華我主人亞伯拉罕的神啊，求你施恩給我主人亞伯拉罕，使我今日遇見好機會。」（創廿四12）老僕人知道為以撒找妻子的困難，他倚靠上帝，求上帝施恩，給予好機會。老僕人的禱告，值得每個期待婚姻者效法。尋求對象時，我們可以禱告：「主啊！求祢向我施恩，讓我得著好機會。求神將適合我的伴侶帶到我面前，也使我能認出他（她），他（她）也能認出我。」
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  不僅禱告，老僕人還向神提出具體的條件：「我向哪一個女子說，請妳拿下水瓶來，給我水喝。她若說，請喝！我也給你的駱駝喝。願那女子就作祢所預定給祢僕人以撒的妻。這樣，我便知道祢施恩給我主人了。」（創廿四14）老僕人禱告的條件不是一般人容易符合的。駱駝經過長途跋涉，每匹駱駝大概要喝十桶水，老僕人帶了十匹駱駝，表示女子大概要提一百桶水，所以女子必須有愛心、勤勞、健康等特質，平常有在做家事，鍛鍊身體。當我們尋求婚姻、向神禱告，也要提出適當條件，才能分辨所遇見或認識的異性是不是神所預備的。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  我們應該為自己列合適的條件，基督徒第一個條件就是同樣信上帝、信耶穌。人的愛心、智慧很有限，婚姻中若沒有上帝、沒有耶穌基督，會遇到很多無法解決的困難。所以老僕人前往主人兄弟的家鄉，在主人兄弟家中找尋女子，就是為了符合信仰的條件。這個條件很快符合：「話還沒有說完，不料，利百加肩頭上扛著水瓶出來，利百加是彼土利所生的，彼土利是亞伯拉罕兄弟拿鶴妻子密迦的兒子」（創廿四15）。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  第二個條件是愛心、健康，是看似簡單卻重要的條件。利百加真的照著老僕人的禱告，願意打水給駱駝，有積極的行動，急忙往返駱駝與水井。老僕人的條件不太容易符合，但他禱告完，首先遇見的就符合以上兩個條件，代表利百加真是神為以撒所預備的女子。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  我們尋求伴侶要明快，既然符合條件，就不要三心二意。有些姊妹大學畢業不久就認識了可能適合的對象，但覺得自己還年輕，還可以等更好的；等到三十歲有點想結婚，那位合適的對象卻早已成家了。所謂合適的對象，並不是完美的對象，只要符合基本條件，就當把握機會，好好禱告尋求。現今尋求婚姻的人，花許多時間和精力去約會談戀愛，不願太快進入婚姻，常演變成婚前性關係、同居等，這樣很難成就美好的婚姻。在以撒娶妻的事上，父親和老僕人都幫他預備妥當，他只是親近神、在田間默想禱告，就看見老僕人將他要娶的女子帶回來（創廿四63~67）。我們也應當效法以撒，好好親近神、預備自己，當合適的對象出現了，就可以很快進入婚姻。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">四、生子——神的揀選（創廿五19~26）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  創世記廿五21~23：「21以撒因他妻子不生育，就為他祈求耶和華；耶和華應允他的祈求，他的妻子利百加就懷了孕。22孩子們在他腹中彼此相爭，他就說，若是這樣，我為什麼活著呢？他就去求問耶和華。23耶和華對他說：兩國在你腹內；兩族要從你身上出來。這族必強於那族；將來大的要服事小的。」孩子是神所賞賜的，是神的產業，有神的預定與揀選。除了求神預備婚姻，我們也求神賞賜孩子。當我們禱告，神就會給予，並且神已經看到孩子的未來。如同神賜給以撒的兩個孩子是兩國、兩族，神賜給我們的也是國度人才，我們要信靠神、與神同工、養育孩子，不要只看重孩子能對父母有何幫助，應更看重孩子能對國家社會及神的國度有何貢獻與祝福。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  以撒生以掃、雅各，以掃發展為以東國，而神特別揀選雅各，從雅各的十二個兒子產生十二支派，成為以色列民族，以色列民族產生救主耶穌基督，成為全世界的祝福。以色列民族分散全地，遍傳耶和華獨一上帝的信仰，特別在羅馬帝國版圖所及範圍內，許多人信耶穌以前，已經透過猶太人，知道有一位創造宇宙萬有的耶和華上帝。不少外邦人認同摩西五經，也到各會堂聽道，為保羅預備了傳講耶穌基督救恩的沃土。因此以色列民族與耶穌基督都成為全世界的祝福。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">五、挖井——神的供應（創廿六12~33）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  神賜福以撒，使他的耕種有百倍的收成，且挖井都順利（創廿六12~33）。創世記廿六18：「當他父親亞伯拉罕在世之日所挖的水井，因非利士人在亞伯拉罕死後塞住了，以撒就重新挖出來，仍照他父親所叫的，叫那些井的名字。」這是傳承，以撒不僅傳承父親的井，更繼續挖新的井。我們可以繼承祖先或屬靈的前輩給我們的聖靈活水，但我們的生命還要繼續追求與主親密，繼續挖井。當我們願意盡本份，神會不斷賜福，使我們有更多的活水井。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  創世記廿六20~21提到當非利士人與以撒爭井，以撒沒有跟他們相爭，反而將井一個一個讓給他們，自己再去挖新的井，神就繼續賜福，使他寬闊，直到非利士人不再跟他爭井，可能是因井夠了。以撒為那井起名叫利河伯，就是寬闊的意思，他說：「耶和華現在給我們寬闊之地，我們必在這地昌盛。」（創廿六22）當我們效法以撒，不與人爭競、不怕挫敗，人有需要就分享給人，繼續向外開展，我們就能得著安息，並持續經歷神的供應。不要吝惜將現有的資源分享給人，當我們成為流通的管道，神會繼續注入新的活水。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">六、祝福——神的權柄（創廿七27~29、39~40）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  以撒祝福雅各，他對雅各說：「27……我兒的香氣如同耶和華賜福之田地的香氣一樣。28願神賜你天上的甘露，地上的肥土，並許多五穀新酒，29願多民事奉你、多國跪拜你，願你作你弟兄的主，你母親的兒子向你跪拜。凡咒詛你的，願他受咒詛，為你祝福的，願他蒙福。」（創廿七27~29）以撒將長子的祝福給了次子雅各，只給長子以掃普通的祝福：「地上的肥土必為你所住，天上的甘露必為你所得。你必倚靠刀劍度日，又必事奉你的兄弟，到你強盛的時候，必從你頸項上掙開他的軛。」（創廿七39~40）雖然人有判斷上的失誤，但以撒從神領受而給出的祝福還是非常準確的，兩國、兩族後來都按著所領受的祝福來發展。後來雅各也分別為十二個孩子祝福（創四九1~28），這些祝福在未來一一應驗。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  父親對孩子的祝福很重要，我們要祝福每個孩子，但不是用自己的意思。孩子的個性、能力具有多樣性，需要不同的祝福，我們要先尋求神，透過讀經、禱告、默想，領受神的啟示，按照所領受的，分別祝福每個孩子。從神而來的祝福，有別於一般世俗對孩子的期待，例如：期待孩子長大能作醫生、律師、建築師、音樂家、老師等。這些期待不一定是神的心意，往往是父母自己的心意、想法，甚至是想要讓孩子替我們完成自己未完成的願望。父母必須觀察孩子的興趣、特質、個性，禱告尋求神，按著神在每個孩子生命中的命定來祝福，並讓孩子按照神的心意去操練、發展，如此的祝福才有權柄，才能得到加乘的果效。
                </p>
              </div>

              <div>
                <span className="font-semibold text-indigo-700">七、差遣——神的心意（創廿八1~4）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  以撒祝福雅各，並囑咐他說：「1以撒叫了雅各來，給他祝福，並囑咐他說：你不要娶迦南的女子為妻。2你起身往巴旦・亞蘭去，到你外祖彼土利家裡，在你母舅拉班的女兒中娶一女為妻。3願全能的神賜福給你，使你生養眾多，成為多族，4將應許亞伯拉罕的福賜給你和你的後裔，使你承受你所寄居的地為業，就是神賜給亞伯拉罕的地。」（創廿八1~4）以撒給予雅各的祝福，含有差遣的成分，他差遣雅各前往母舅的家，並祝福他找到信靠神的配偶。雖然以撒沒有去過外祖父那裡，但從以撒能說出彼土利和拉班的名字，表示他們仍有連繫，並且亞伯拉罕本家都是信靠神的人。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  亞伯拉罕的兄弟拿鶴原本居住在迦勒底的吾珥，位於現今以色列東邊巴比倫一帶。從以撒差遣雅各前往巴旦亞蘭的母舅家，可推測，拿鶴一家已遷移至巴旦亞蘭，也就是哈蘭，是亞伯拉罕與父親他拉離開迦勒底的吾珥後，所停留的第一個地方（創十一31），約在現今以色列北方敘利亞一帶，距離以撒居住的迦南地比較近。當時雅各得罪了兄長以掃，並有生命的危險。為了保護雅各，也為了使他能找到同樣信靠神的伴侶，以撒就差遣雅各前往巴旦亞蘭的母舅家娶妻，將來再回來，這是消極面。另從積極面來看，這項差遣使雅各在母舅那邊的生活與工作都為神作了美好的見證，使人知道神的真實（創三十27，卅一53）。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、以撒預表基督</h3>

              <div className="mb-2">
                <span className="font-semibold text-indigo-700">一、應許之子</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  「所應許的原是向亞伯拉罕和他子孫說的。神並不是說眾子孫，指著許多人，乃是說你那一個子孫，指著一個人，就是基督。」（加三16）以撒是神在亞伯拉罕和撒拉肉體已無法生育時，所應許給他們的兒子，預表了未來的應許之子——耶穌基督，非一般婚姻、肉體所生，乃由童女所生，為世人捨命贖罪，成為世人的祝福。
                </p>
              </div>

              <div className="mb-2">
                <span className="font-semibold text-indigo-700">二、獨生愛子</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  以撒是亞伯拉罕的獨生愛子，預表耶穌基督是神的獨生愛子：「道成了肉身，住在我們中間，充充滿滿的有恩典有真理。我們也見過祂的榮光，正是父獨生子的榮光。」（約一14）「從來沒有人看見神，只有在父懷裡的獨生子將他表明出來。」（約一18）。
                </p>
              </div>

              <div className="mb-2">
                <span className="font-semibold text-indigo-700">三、獻祭復活</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  亞伯拉罕「彷彿從死中得回他的兒子來」（來十一19），以撒沒有真的被獻上為祭，但過程如同經歷死而復活，預表耶穌要真正被獻為祭，並且復活。「他為我們的罪作了挽回祭，不是單為我們的罪，也是為普天下人的罪。」（約壹二2）「我們藉著洗禮歸入死，和他一同埋葬，原是叫我們一舉一動有新生的樣式，像基督藉著父的榮耀從死裡復活一樣。」（羅六4）耶穌的死與復活都很重要，他的死，帶著我們的罪埋葬了；他的復活，使一切相信他的人，能與他一同復活，有新的生命。
                </p>
              </div>

              <div className="mb-2">
                <span className="font-semibold text-indigo-700">四、與妻聯合</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  在以撒娶妻的事上，亞伯拉罕好像天父、老僕人好像聖靈，以撒代表基督，利百加則代表教會。以撒娶妻，如同透過聖父的差遣，聖靈的成就，為基督找到了教會為新婦。因此以撒與利百加的聯合，以及他們恩愛的關係、親密的舉動（創廿六8~9），預表了基督與教會的聯合，以及恩愛親密的關係。雅歌書肯定婚姻與愛情，並預表基督與新婦（教會）間親密恩愛的關係。保羅也說：「你們作丈夫的，要愛你們的妻子，正如基督愛教會，為教會捨己。要用水藉著道把教會洗淨，成為聖潔，可以獻給自己，作個榮耀的教會，毫無玷污、皺紋等類的病，乃是聖潔沒有瑕疵的。」（弗五25~27）世上的婚姻，預表在永恆中基督與教會的婚姻。耶穌用他的寶血將教會洗淨，使教會成為聖潔無瑕疵的妻子。
                </p>
              </div>

              <div className="mb-2">
                <span className="font-semibold text-indigo-700">五、挖活水井</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  以撒挖了許多活水井，預表耶穌就是活水的供應者。耶穌在與撒瑪利亞婦人的談話中對婦人說：「10……你若知道神的恩賜，和對你說給我水喝的是誰，你必早求他，他也必早給了你活水。……14人若喝我所賜的水就永遠不渴。我所賜的水要在他裡頭成為泉源，直湧到永生。」（約四10、14）耶穌所賜的活水就是聖靈（約七38~39）。活水的供應，使以撒的人生滿有安息，成為安息之子。我們每位基督徒也要透過耶穌，活在聖靈活水的供應中，成為安息之子。
                </p>
              </div>

              <div className="mb-2">
                <span className="font-semibold text-indigo-700">六、祝福門徒</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  以撒祝福雅各在應許地蒙福發展，甚至說到「多民事奉你，多國跪拜你」（創廿七29）。耶穌也祝福門徒們成為世上的光與鹽（太五13-16），建立教會勝過陰間的門（太十六18-19，十八18-20），且將來可與主一同治理全地（路十九16-19，啟二26-27，二十4-6）。
                </p>
              </div>

              <div>
                <span className="font-semibold text-indigo-700">七、差遣門徒</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  以撒差遣雅各回去本家娶妻。雅各生了十二個孩子，發展出十二支派，預表耶穌差遣十二個門徒，去使萬民作主的門徒（太廿八18~19），在屬靈上生養眾多。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                以撒是應許之子，也是安息之子，他繼承父親的產業，並靠主得力，有許多開展，特別是挖出許多活水井。以撒的順服，使亞伯拉罕在獻祭的事上通過試驗，開啟屬靈的泉源。以撒與世無爭，他凡事順服、交託，蒙神親自賜福，使他一生豐富，這是在聖靈活水裡的生活樣式。我們也是照應許成為神的兒女，理當凡事順服，倚靠聖靈，忠心事奉，而能大大蒙福，活出應許之子美好的樣式。
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
                '以撒是應許之子、安息之子，一生在出生、獻祭、娶妻、生子、挖井、祝福、差遣七方面經歷神的恩典，也在這七方面預表耶穌基督。',
                '以撒被獻與順服父親一同上摩利亞山，出於對父親完全的信任，正預表耶穌在客西馬尼園完全順服天父的旨意走向十字架。',
                '老僕人為以撒求妻子的禱告樹立了尋求配偶的榜樣：先禱告求神施恩，再提出具體可驗證的條件（信仰、愛心健康），遇見合適對象就當明快把握。',
                '以撒不與非利士人爭井，反倒一再退讓、繼續挖新井，最終神使他寬闊（利河伯），這是願意分享而非爭競所帶來的安息與供應。',
                '以撒代表基督，利百加代表教會，父親亞伯拉罕好像天父、老僕人好像聖靈，以撒娶妻的整個過程完整預表了基督迎娶教會為新婦的屬靈圖畫。',
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
              '以撒從出生到年老經歷了神許多的恩典，試著分享你與以撒相似的一、二項經歷，向神獻上感謝。',
              '以撒在七方面預表耶穌基督，請每人描述其中兩項，並分享與自己的關係。',
              '從以撒的生命榜樣，你個人可以有什麼樣的學習？',
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
