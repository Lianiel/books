import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch33() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第三十三章</h1>
        <h2 className="text-xl font-semibold text-gray-700">傳道者挪亞</h2>
        <p className="text-gray-500 mt-1">世界在神面前敗壞，地上滿了強暴。神觀看世界，見是敗壞了；凡有血氣的人在地上都敗壞了行為。神就對挪亞說：「凡有血氣的人，他的盡頭已經來到我面前；因為地上滿了他們的強暴，我要把他們和地一併毀滅。你要用歌斐木造一隻方舟……」創世記六11-14</p>
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
              <h3 className="font-bold text-indigo-800 text-lg mb-3">前言</h3>
              <p className="text-gray-700 leading-relaxed">
                挪亞的完全與世界的敗壞，成為一個鮮明的對比。當審判時，一方面有神揀選的人成為完全人，作為對照；一方面神會等到罪惡滿盈，才進行刑罰審判。因為神是慈愛的，他忍耐等候人悔改，如彼得後書三9所說：「主所應許的尚未成就，有人以為他是耽延，其實不是耽延，乃是寬容你們，不願有一人沉淪，乃願人人都悔改。」末後審判前的日子，一方面罪惡不斷高漲，一方面神使用挪亞傳道，為了讓人有悔改的機會。本章分這兩段來分享：一、敗壞與毀滅，二、末世的傳道。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、敗壞與毀滅</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                本段經文三次講到敗壞：「1.世界在神面前敗壞，2.神觀看世界，見是敗壞了，3.人在地上都敗壞了行為。」（創六11-12）又有兩次講到「地上滿了強暴」（創六11、13），整個世界來到一個非常嚴重崩壞的地步，以至於神說：「凡有血氣的人，他的盡頭已經來到我面前。」又說：「我要把他們和地一併毀滅。」（創六13）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「敗壞」這個字可指物的腐壞、建物的瓦解、道德的敗壞等。同一個字另一個文法型式，意思是「促使毀壞」，可翻譯作「毀滅」，本段經文最後一小句「把他們和地一併毀滅」，正是用這個字。這字在舊約出現147次，大多就是這兩種意義：「敗壞」與「毀滅」。可以這樣說，因為人與地已經自己先毀壞了，所以神就促使它毀壞，也就是毀滅它。神所做的審判工作，其實都是照著這個原則──人先自毀，神再毀之。（謝挺，《始於神──創世記靈修日引》，2月14日）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神除了以洪水毀滅全地、審判當時的全人類以外，後來又有幾次審判。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">一、審判所多瑪、蛾摩拉</span>──創世記十八20-21：「20耶和華說：所多瑪和蛾摩拉的罪惡甚重，聲聞於我。21我現在要下去，察看他們所行的，果然盡像那達到我耳中的聲音一樣麼？若是不然，我也必知道。」這裡的「下去察看」，與創世記六12的「神觀看」，意思相似，都代表神會鑒察、追究。為了這城市是否要毀滅，亞伯拉罕向神禱告、與神討論，從五十個義人減少到十個義人。神答應，只要有十個義人在城裡，就不毀滅那城（創十八23-32）。這也看出神的恩慈、忍耐，然而事實是，那城裡只有一個義人羅得，因此神的做法就是把羅得帶出來，然後毀滅那城（創十九23-25）。這樣的做法，相似於讓挪亞一家八口進方舟之後，才啟動大洪水。那時全世界可能有百億人（洪水前的陸地比現在大，且平原居多，所以洪水前的人口應比目前的全世界人口更多），但只有八個人信靠神，且在挪亞到世界各地傳道之後，人們仍不悔改，神只好讓洪水臨到當時的世界。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">二、審判迦南地</span>──迦南地拜偶像、交鬼，都很嚴重，甚至生出許多巨人。起初神讓亞伯拉罕去住在迦南地，以生活見證影響他們來認識真神，接著有以撒、雅各繼續為神作見證。這些過程都是神的恩慈、忍耐、等候，但人若不悔改，最後神會審判。神事先對亞伯拉罕說：「13……你的後裔必寄居別人的地，又服事那地的人；那地的人要苦待他們四百年。……16到了第四代，他們必回到此地，因為亞摩利人的罪孽還沒有滿盈。」（創十五13-16）等到六百多年後，他們的罪惡滿盈了，神才開始進行審判，吩咐以色列人攻打佔領迦南地。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">三、審判埃及</span>──埃及法老為壓制以色列民族人口的增長，殺了許多以色列男嬰，並且拜各種偶像假神。時候到了，神使用摩西帶領以色列百姓出埃及，過程中有十災，災情由小逐漸變大，這段時間是給法老悔改的機會。但法老心硬，堅持不讓以色列百姓離開，最後才有殺長子之災，那時法老終於讓以色列離開埃及。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">四、審判以色列</span>──以色列在迦南地安定後，開始拜假神偶像，且行淫亂，殺人流人血，欺詐偷盜等，十誡的每一誡都犯了。但神沒有馬上施行審判，而是差遣先知，前仆後繼地去勸勉以色列人悔改，離棄偶像，歸回真神。過程中也給一些管教，但他們殺先知，不理會管教，最後神只好施行審判，讓他們亡國。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">五、審判列國</span>──列國的罪跟以色列一樣多，神先審判以色列，作為給列國的鑑戒，但列國終不悔改，最後神也一一審判，受審判者包括亞述、巴比倫、波斯、希臘、羅馬等帝國，還有許多小國。現代版的羅馬帝國目前正在興起，不久之後也會遭受審判。整個世界的罪惡更加猖狂，如同洪水前的日子，盡頭將要來到，結局是毀滅，七年大災難期間，大多數世人將會滅亡。
              </p>
              <p className="text-gray-700 leading-relaxed">
                但審判不是唯一的答案，過去神使用挪亞傳道、建方舟，今天神也使用我們傳道、建造屬靈的方舟。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、末世的傳道</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                在創世記的記載裡面，只有說到挪亞建造方舟，沒有說到挪亞的傳道工作。但在彼得後書裡面，說到挪亞是傳義道的人（彼後二5），在彼得前書裡面，說到當世代的人都聽到了福音（彼前三19-20），這是很重要的一個拼圖。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記本身的線索，主要就是挪亞「與神同行」這句話。所謂與神同行，除了有靈性的操練、親近神、遵行主道之外，最主要就是去傳道。彼得後書二5說：「神也沒有寬容上古的世代，曾叫洪水臨到那不敬虔的世代，卻保護了傳義道的挪亞一家八口。」主耶穌告訴門徒說：「你們要去，使萬民作我的門徒，……我就與你們同在，直到世界的末了。」（太廿八19-20）當我們傳福音、帶門徒時，主耶穌就與我們同在，正如挪亞與神同行一般。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記五32提到，挪亞500歲生閃、含、雅弗；但挪亞的父親拉麥是在182歲時生他，他的祖父瑪土撒拉是在187歲生拉麥，之前更多是幾十歲就生孩子了，沒有人超過200歲才開始生孩子。為何挪亞500歲才開始生孩子？合理推測，他活在最末後的世代。他看到整個世界滿了強暴，只有他緊緊跟隨神，是唯一敬虔正直的人，連他的伯叔、兄弟、姊妹後來都沒有進方舟，可見他們都離開上帝，行在罪惡中。挪亞本來不想生孩子，可能擔心生了孩子，他們會被這罪惡的世界拉走，或者會受很多苦，這也類似我們現在一些人不生孩子的考量。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                但挪亞為什麼500歲時改變主意，願意生孩子？很可能是因為神要他建方舟（創六13-22），這件事讓他有了使命，有了生孩子的需要，若沒有生出足夠的孩子，成為團隊，沒辦法建造出那麼大的方舟。挪亞生孩子，是為了要被主使用，可以跟他一起建造方舟，完成神的使命。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                合理推論，挪亞大約花20年時間陪伴孩子成長，並教導屬靈的事，傳達神的計畫。當三個孩子都長大成人後，挪亞就將設計圖交給孩子們，自己則去世界各地傳道。許多人以為挪亞傳道120年，或者傳道100年，但若看清楚挪亞是500歲的時候生孩子，他必須先花約20年時間將三個孩子培育起來，這樣他到世界各地傳道的時間就是約80年。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這段時間他的三個兒子按挪亞從神所得的藍圖同心合力建造方舟。根據科學研究分析，這麼大的方舟大約需要三位木工花80年時間建造方可完成，恰好吻合。由此可見，挪亞的家庭教育是成功的，所生養的三個孩子都跟著他一起同心完成神所吩咐的使命。如今我們生孩子也是為了要完成末後的大使命，如同挪亞建方舟；為要使孩子成為一起完成大使命的國度人才，我們會盡心培育所生的孩子。我們若沒有這種使命託付，會覺得生孩子只會帶來麻煩，壓力、負擔更重，就會像得啟示前的挪亞，選擇不要生孩子。我們已經是得到啟示的人，因此就勇敢來生養孩子，一起投入大使命的最後一棒。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                挪亞的傳道是末世的傳道，更貼切說，是末日前的傳道，這跟我們今天的傳道工作是一樣的。有兩個共通的原則：聖靈同工、傳遍全地。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">一、聖靈同工</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                彼得前書三19-20間接提到挪亞的傳道工作：「他（耶穌基督）藉這靈曾去傳道給那些在監獄裡的靈聽，就是那從前在挪亞預備方舟、神容忍等待的時候，不信從的人。」有些人將這經文誤解為耶穌曾去監獄（陰間）傳福音，但這經文乃是說耶穌曾去傳道給那些目前在監獄（陰間）裡的靈，而不是說他去監獄（陰間）傳道。耶穌傳道的對象是誰呢？乃是挪亞時代的人，而非所有舊約時代的人。所以這段經文是在強調，挪亞的傳道工作有聖靈的幫助，先存的基督藉著聖靈與挪亞同工，一起傳道給挪亞時代的人，但那些人拒絕救恩，因此如今都在陰間裡了。彼得在這裡講這話，絕非要增加一個教義，說基督去陰間傳道或宣告得勝。從上下文來看，乃是鼓勵當時遭受苦難的聖徒，於艱困的環境中，仍要靠聖靈的能力去傳道，如同挪亞一樣。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                關於基督的靈在舊約時代的工作，使徒彼得比其他使徒更加著墨，這應是聖靈給他的啟示。彼得前書一10-11：「10論到這救恩，那預先說你們要得恩典的眾先知早已詳細的尋求考察，11就是考察在他們心裡基督的靈，預先證明基督受苦難，後來得榮耀，是指著甚麼時候，並怎樣的時候。」這項啟示為後面彼得前書三19的表達做了預備，那裡進一步說，洪水前基督的靈已經在工作了，而那時地上的傳道者唯一只有挪亞，這也是彼得後書二5所說的。因此，就是挪亞與基督的靈同工，去世界各地傳道。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這件事跟新約時代的傳道原則一樣，包括聖靈同工與傳遍全地。我們現在去傳道也是耶穌基督藉著聖靈與我們同工，並且要傳遍天下。正如使徒行傳一8所說：「但聖靈降臨在你們身上，你們就必得著能力，並要在耶路撒冷、猶太全地，和撒瑪利亞，直到地極，作我的見證。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">二、傳遍全地</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                挪亞約花了八十年的時間去傳道，傳遍了全世界，但幾乎全世界的人都沒有人願意相信，最後只有挪亞一家八口進方舟。彼得明說，洪水前的那些人都聽過挪亞所傳的道，因為他這樣形容那些人：「就是那從前在挪亞預備方舟、神容忍等待的時候，不信從的人。」（彼前三20）既說不信從，就表示都已經聽了道，聽了道才會有信與不信的反應。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                希伯來書也有很好的佐證：「挪亞因著信，既蒙神指示他未見的事，動了敬畏的心，預備了一隻方舟，使他全家得救。因此就定了那世代的罪，自己也承受了那從信而來的義。」（來十一7）這裡說到，挪亞所預備的方舟，定了那世代的罪。這表示，當世代所有的人都知道有這個方舟正在建造，但他們不相信挪亞所說的會有大洪水審判。挪亞時代的世界地理，不是現在的三大洋五大洲，乃是一個盤古大陸，外圍是海洋。挪亞的方舟不是造在海邊，而是造在盤古大陸的正中央，完全不是為了航海捕魚或者去遊歷，只有一個目的，是為了躲避大洪水。這件事其實很容易成為大新聞，一傳十、十傳百，很快全世界就都知道了：「有一個瘋子挪亞，及他的全家，在大陸的中央建造方舟。」過了幾個月或幾年，他們親眼看到挪亞，親耳聽到挪亞所傳的道，就當面來羞辱挪亞，嘲笑他是一個瘋子，精神有問題。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                挪亞到全世界宣教，不用飄洋過海。而且那時的地理環境相對單純，沒有太高的山，沒有崎嶇的低谷（目前世界各地的高山乃是洪水後才推擠出來的）。因此可以在大約五年內，慢慢地走完整個陸地世界。（地球赤道周長約四萬公里，每天走40公里，1000天可以走完，而盤古大陸的直徑最多只是赤道直徑的一半。）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                挪亞到世界各地傳道，不是一次而已，而是隨著方舟建造的進度，多次往返兒子們這邊，及世界各地，去告訴當世代的人，要悔改、信靠神，與我一同進到方舟，逃避洪水的災難。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                為什麼那世代傳福音這麼困難？因那時全世界的人都是同一個語言和文化，使得沒有人敢去對抗一個這麼大的群體，去作一個不一樣的決定。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                華人是很難信主的族群，因為族群龐大，且有傳統文化，若有人信主，整個族群都會起來反對。比較早期，當馬禮遜在沿岸宣教，戴德生在內地宣教，馬雅各、馬偕在台灣宣教的時候，都是這種情況。台灣客家庄的客家族群直到今日仍是如此，因為他們凝聚力強大，所以個人就很難信主。但是當華人離開原來的族群，包括到海外留學，或到城市發展，信主的可能性就增大了，因為群體的阻礙除去了。回教徒也很難信主，因為回教世界很龐大，也很堅強，許多國家奉行回教法律，在那些國家若放棄回教信仰，改信基督耶穌，是會被殺害的。這些實例可幫助我們了解，挪亞當時宣教傳道的艱鉅。
              </p>
              <p className="text-gray-700 leading-relaxed">
                然而在洪水毀滅全世界之後，神做了一件事使後來福音比較容易傳，就是變亂口音。族群越小，阻力也越少，信主機會就大。如今我們是這世代的挪亞，傳福音的對象跟挪亞那世代合一的大族群已不同，要比挪亞那時代更容易傳福音，因我們所面對的族群跟挪亞那世代的族群相較之下都是比較小的族群。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                現今的方舟乃是基督的救恩，神要我們去告訴世人，他為每個人預備了方舟，也就是基督的救恩，願意相信的人都可以進入這方舟得著拯救。時候到了，神就要毀滅這世界。這世界的末期會有七年大災難，類似洪水大災難，留在地上的人大部分會遭難。但我們信耶穌的人，將蒙神特別保守，可能被提，或者殉道，但靈魂一定得救。我們已在基督裡成為新造的人，神要我們將福音傳到地極，而且我們自己一個人不夠，還要生養兒女一起投入大使命，這樣才能將福音傳遍全地，預備迎見基督再來。
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
                '神審判的原則是「人先自毀，神再毀之」——敗壞與毀滅是同一字的兩個型式；神必等到罪惡滿盈、忍耐等候人悔改後才審判（彼後三9）。',
                '洪水之後神的歷次審判都遵循同一模式：所多瑪蛾摩拉（先救出義人羅得）、迦南地（等亞摩利人罪孽滿盈）、埃及（十災給法老悔改機會）、以色列（先差遣眾先知）、列國（先以以色列為鑑戒）。',
                '挪亞500歲才生孩子，是因為得到建方舟的啟示而有了使命；先花約20年培育三個兒子，之後約80年往返世界各地傳道，兒子們同心建造方舟——家庭教育與使命託付緊密結合。',
                '挪亞傳道的兩個原則與今日相同：聖靈同工（彼前三19-20——先存的基督藉聖靈與挪亞同工，向如今在陰間的洪水世代之人傳道）、傳遍全地（方舟造在盤古大陸中央成為「定那世代的罪」的見證，人人都聽過道）。',
                '那世代傳福音困難是因全人類同一語言文化、群體龐大（類似華人族群、回教世界難以信主）；洪水後神變亂口音，族群變小，福音反而更容易傳。',
                '現今的方舟是基督的救恩；末期將有七年大災難，我們當傳福音到地極，並生養兒女（肉身與屬靈）一起投入大使命的最後一棒。',
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
              '神在什麼狀況下會審判一個地區？神的目的是什麼？',
              '洪水時代的人都有聽過挪亞所傳的道嗎？有哪些經文根據？試解釋之。',
              '挪亞傳道的原則和我們今天傳福音的原則有何相同之處？你會如何應用在自己身上？',
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
