import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch14() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第十四章</h1>
        <h2 className="text-xl font-semibold text-gray-700">伊甸園與河</h2>
        <p className="text-gray-500 mt-1">耶和華神在東方的伊甸立了一個園子，把所造的人安置在那裡。耶和華神使各樣的樹從地裡長出來，可以悅人的眼目，其上的果子好作食物。園子當中又有生命樹和分別善惡的樹。有河從伊甸流出來，滋潤那園子，從那裡分為四道：第一道名叫比遜，就是環繞哈腓拉全地的。在那裡有金子，並且那地的金子是好的；在那裡又有珍珠和紅瑪瑙。第二道河名叫基訓，就是環繞古實全地的。第三道河名叫底格里斯，流在亞述的東邊。第四道河就是幼發拉底河　創世記二8-14</p>
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
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、伊甸園</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記二8：「耶和華神在東方的伊甸立了一個園子。」伊甸園在何處，基本上不可考，因為已經被大洪水毀掉了。不過從四條河的描述，可推知大約就在現今歐亞非三大洲交界之處。那裡是全球陸地的質量中心，也是盤古大陸的中央地區。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                東方這個字希伯來文是 קֶדֶם（qedem），這字有兩個意思，一個是指地點的東方或前面，一個是指時間的遠古或開始。在聖經中，這兩種翻譯都出現多次，可看上下文而定。在創世記二8這句話裡面，譯作「東方」，不太能確定其意義，今天以色列所在地被稱為中東，可算是東方，但在摩西的時代，阿拉伯半島、印度等地才算是東方。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                另一個翻譯是「遠古」或「開始」，箴言八22-23：「在耶和華造化的起頭，在太初創造萬物之先，就有了我。從亙古，從太初，未有世界以前，我已被立。」22節的「之先」和23節的「以前」，都是用 קֶדֶם（qedem）這個字。我們講故事的時候可以這樣講：「耶和華在遠古（或很久以前）的伊甸立了一個園子。」若選用這個翻譯，也是很有意義的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                因為在伊甸立了一個園子（原文 גַּן，gan），所以我們將那園子稱為伊甸園。但從文意來看，伊甸乃是一個比較大的地區，而園子只是其中一個比較小的地方，因為後面繼續說到：「有河從伊甸流出來，滋潤那園子」（創二10），這也說明伊甸這個地方與園子是有區別的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                伊甸的原文是 עֵדֶן（Eden），有「快樂」的意思，在聖經中出現15次，有兩次是人的名字，其餘13次都是用來講一個美好的地方。舉例如下：約珥書二3：「牠們前面如火燒滅，後面如火焰燒盡。未到以前，地如伊甸園；過去以後，成了荒涼的曠野；沒有一樣能躲避牠們的。」以西結卅一16：「……伊甸的一切樹——就是利巴嫩得水滋潤、最佳最美的樹……」以西結卅六35：「他們必說：這先前為荒廢之地，現在成如伊甸園；這荒廢淒涼、毀壞的城邑現在堅固有人居住。」以賽亞書五十一3：「耶和華已經安慰錫安和錫安一切的荒場，使曠野像伊甸，使沙漠像耶和華的園；在其中必有歡喜、快樂、感謝，和歌唱的聲音。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                還有一處是說「耶和華的園子」，意思也是伊甸園。創世記十三10：「羅得舉目看見約但河的全平原，直到瑣珥，都是滋潤的，那地在耶和華未滅所多瑪、蛾摩拉以先如同耶和華的園子，也像埃及地。」伊甸園一直在神的心中、話語中，也一直在以色列人的心中，作為懷念也作為盼望。神有一天將為他的子民恢復伊甸園，先在禧年國度，後在新天新地。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、四道河</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                古時這美好的地方可能沒有很大，但從這地分出的四條大河則去到全地。「四」常象徵全世界，創世記的作者提到「四道」，暗示全世界都通過伊甸園流出來的河水得滋潤。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記二10-14：「有河從伊甸流出來，滋潤那園子，從那裡分為四道：第一道名叫比遜，就是環繞哈腓拉全地的。在那裡有金子，並且那地的金子是好的；在那裡又有珍珠和紅瑪瑙。第二道河名叫基訓，就是環繞古實全地的。第三道河名叫希底結，流在亞述的東邊。第四道河就是伯拉河。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                仔細看創世記二10-14，是說先有一個主流，從伊甸流出來，滋潤了那園子，以後從那園子分為四個支流，延伸到全世界。洪水前的陸地是一整塊的，不是像現在的五大洲。所以沒有中國的長江、美國的密西西比河、南美的亞馬遜河等。整塊大陸有四道河，合理是往四個方向流去，才能讓全地都得滋潤。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記二11-12：「第一道名叫比遜，就是環繞哈腓拉全地的。在那裡有金子，並且那地的金子是好的；在那裡又有珍珠和紅瑪瑙。」「比遜」意為「跳耀」或「增加」，可能流往東南邊，往今日的阿拉伯與印度這個方向。哈腓拉意為沙地。可能在今日的阿拉伯半島，此地出產12節提到的各種寶物——金子、珍珠、紅瑪瑙。可以聯想啟示錄的新耶路撒冷城，城是精金，十二城門是珍珠，城牆的十二個根基是各種寶石，其中一個是紅瑪瑙（啟廿一20）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記二13：「第二道河名叫基訓，就是環繞古實全地的。」「基訓」意為「打開、衝破、爆發」，約伯記八8講海水衝出，四十23講河水氾濫，都用這個字。古實是黑的意思，在舊約是指非洲的衣索比亞。基訓河可能流向西南，往今日的非洲這個方向。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記二14：「第三道河名叫希底結，流在亞述的東邊。……」「希底結」音譯自希伯來文 חִדֶּקֶל（Chiddeqel），意為「迅速的」，翻譯為希臘文就是底格里斯河 Τίγρις（Tigris），洪水後它從土耳其東邊山區流經亞述、巴比倫，流入波斯灣。但在洪水之前，明講是流在亞述的東邊，所以有可能往東北流向今日的中國這邊。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記二14：「……第四道河就是伯拉河。」「伯拉河」音譯自希伯來文 פְּרָת（Perath），意為「豐收」，翻譯為希臘文就是幼發拉底河 Εὐφράτη（Euphrates），洪水後從亞美尼亞山流經亞述、巴比倫，流入波斯灣。但在洪水之前，可能是流向西北邊，往今日歐洲的方向。
              </p>
              <p className="text-gray-700 leading-relaxed">
                這四道河供應了全世界的人，可以想像在洪水之前，世界各地的大城在這四道河的週圍一個個建立起來，如同今日的上海建立在長江旁邊、台北在淡水河邊、高雄在愛河邊。可惜人們雖然飲用這些支流的水，卻不懂得飲水思源，已經忘記了有一個主流出自伊甸園，神是供應者。到了挪亞的時代，他們喜歡城市的繁華，在其中滿了強暴（創六11），不喜歡和諧無爭的田園生活，正如今日世界的寫照。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、中央泉源</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                從這四道河的走向，可看出他們共同的發源地，就在今日的中東。如果遠古的伊甸與今日的聖地（應許之地）是相同的地方，應該很合理。因為神樂意從這地將祝福分給全地。
              </p>

              <div className="flex flex-col items-center my-4">
                <img
                  src="/images/book29/ch14-four-rivers.png"
                  alt="圖六：中央泉源與四條河，插畫呈現伊甸園中央泉源分出四條河流的地形"
                  className="max-w-full h-auto rounded-lg shadow-md border border-gray-200"
                />
                <p className="text-sm text-gray-500 mt-2 italic">圖六：中央泉源與四條河</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-3">
                一個水的源頭，它的分支往四個不同的方向流去，那源頭乃是一個中央泉源，水的來源很可能是從地下湧出來的，目前所知道的河流，其水源都不是這樣。但未來會有一個中央泉源從耶路撒冷湧流出來，並且產生分叉，流向東邊的死海，與西邊的地中海，帶來豐盛的生命。未來發生的事，會幫助我們了解，原來神曾經就是這樣做的，以下看這四處相關的經文。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                撒迦利亞書十四4-9：「那日，他的腳必站在耶路撒冷前面朝東的橄欖山上。這山必從中間分裂，自東至西成為極大的谷。山的一半向北挪移，一半向南挪移。……耶和華我的神必降臨，有一切聖者同來。……那日，必有活水從耶路撒冷出來，一半往東海流，一半往西海流；冬夏都是如此。耶和華必作全地的王。那日耶和華必為獨一無二的，他的名也是獨一無二的。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                詩篇四十六4-11：「有一道河，這河的分汊使神的城歡喜；這城就是至高者居住的聖所。神在其中，城必不動搖；到天一亮，神必幫助這城。外邦喧嚷，列國動搖；神發聲，地便鎔化。萬軍之耶和華與我們同在；雅各的神是我們的避難所！你們來看耶和華的作為，看他使地怎樣荒涼。他止息刀兵，直到地極；他折弓、斷槍，把戰車焚燒在火中。你們要休息，要知道我是神！我必在外邦中被尊崇，在遍地上也被尊崇。萬軍之耶和華與我們同在；雅各的神是我們的避難所！」耶路撒冷本來沒有河，在七年大災難的末了，大地震之後，才有了河，這河產生分汊，就是往東流向死海，往西流向地中海。為何使城歡喜，因為祝福了死海，也祝福了地中海及全世界海域，使海水都得醫治。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                以西結四十七1-12：他帶我回到殿門，見殿的門檻下有水往東流出（原來殿面朝東）。這水從檻下，由殿的右邊，在祭壇的南邊往下流。他帶我出北門，又領我從外邊轉到朝東的外門，見水從右邊流出。他手拿準繩往東出去的時候，量了一千肘，使我趟過水，水到踝子骨。他又量了一千肘，使我趟過水，水就到膝；再量了一千肘，使我趟過水，水便到腰；又量了一千肘，水便成了河，使我不能趟過。因為水勢漲起，成為可洑的水，不可趟的河。他對我說：「人子啊，你看見了甚麼？」他就帶我回到河邊。我回到河邊的時候，見在河這邊與那邊的岸上有極多的樹木。他對我說：「這水往東方流去，必下到亞拉巴，直到海。所發出來的水必流入鹽海，使水變甜。這河水所到之處，凡滋生的動物都必生活，並且因這流來的水必有極多的魚，海水也變甜了。這河水所到之處，百物都必生活。必有漁夫站在河邊，從隱．基底直到隱．以革蓮，都作曬網之處。那魚各從其類，好像大海的魚甚多。只是泥濘之地與窪濕之處不得治好，必為鹽地。在河這邊與那邊的岸上必生長各類的樹木；其果可作食物，葉子不枯乾，果子不斷絕。每月必結新果子，因為這水是從聖所流出來的。樹上的果子必作食物，葉子乃為治病。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                從大災難末了進入到千禧年國度的時候，這事將會發生，並且這泉源將持續湧流一千年。從聖殿之下湧流出來的活水，有可能與最早伊甸園的中央泉源是同一個，在大洪水時大大打開，聖經說是「大淵的泉源」（創七11），這泉源在大洪水之後封閉了。直到將進入禧年國度，才又重新開啟，使禧年國度的耶路撒冷如同伊甸園，有活水湧流，作列國的祝福。千禧年之後將有新天新地。新天新地裡有新耶路撒冷城，在那城我們會看到如同伊甸園的重現，有河流、有生命樹、有各樣果子。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                啟示錄廿二1-2：「天使又指示我在城內街道當中一道生命水的河，明亮如水晶，從神和羔羊的寶座流出來。在河這邊與那邊有生命樹，結十二樣（或作：回）果子，每月都結果子；樹上的葉子乃為醫治萬民。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                在啟示錄，我們看到生命水的河，是從神和羔羊的寶座流出來的，在創世記的伊甸園，我們沒有看到寶座，只看到行走在伊甸園的耶和華神。現在我們知道，那四道流向全地的河流乃是從神無形寶座湧出來的泉源所供應的。這也預表將來聖靈在全地的工作，聖靈的活水將流向全地。正如啟示錄五6所說：「……神的七靈，奉差遣往普天下去的。」這事藉著基督的死而復活、五旬節聖靈降臨，已正在實現中。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                神是起初的，也是末後的，他從起頭到末了，都是我們的生命河，是我們生命的供應，是我們的醫治。我們要天天飲於活水的泉源，使生命豐盛，但不僅領受生命，也要去分享生命，讓我們的生命如同豐沛潔淨的河流，流出去供應乾渴的人心，醫治如死海的心靈，使它們變甜，也結出豐盛的果子。
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
                '伊甸（עֵדֶן，Eden，快樂之意）是比園子（gan）更大的地區，位置雖不可考（已被洪水毀掉），但從四條河推知約在今日歐亞非交界，是盤古大陸的中央地區；伊甸園一直是以色列人懷念與盼望的意象。',
                '四道河比遜、基訓、希底結、伯拉河從一個中央泉源分出，象徵全世界都藉伊甸的活水得滋潤；洪水後這些河名沿用給底格里斯河、幼發拉底河，但洪水前的流向可能大不相同。',
                '未來的中央泉源將從耶路撒冷湧出，分流往死海與地中海（亞十四4-9、詩四十六、結四十七），這與伊甸園「大淵的泉源」（創七11）可能是同一個泉源，在洪水後封閉，千禧年將重新開啟。',
                '啟示錄廿二1-2的生命水河從神和羔羊的寶座流出，是伊甸園河流的終極實現，也預表聖靈在全地的工作（啟五6），透過基督死而復活、五旬節聖靈降臨正在實現中。',
                '結語呼籲信徒天天飲於活水泉源，不僅領受生命也要分享生命，使生命如河流般供應乾渴的人心，醫治破碎的心靈，結出豐盛的果子。',
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
              '根據聖經的描述，伊甸園有可能是在什麼地方？這事對你有何意義？',
              '伊甸園流出來四道河，這四道河跟全世界的關係是甚麼？',
              '有哪些經文提到一個末後從耶路撒冷湧出來的泉源可以祝福列國？這事的意義與我們的屬靈生命有何關係？',
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
