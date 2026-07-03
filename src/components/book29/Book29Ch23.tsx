import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch23() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第二十三章</h1>
        <h2 className="text-xl font-semibold text-gray-700">長遠的爭戰</h2>
        <p className="text-gray-500 mt-1">我又要叫你和女人彼此為仇；你的後裔和女人的後裔也彼此為仇。女人的後裔要傷你的頭；你要傷他的腳跟　創世記三15</p>
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
              神對魔鬼撒旦的咒詛有兩方面：第一是「用肚子行走，終身吃土」（創三14），第二是「叫你和女人彼此為仇；你的後裔和女人的後裔也彼此為仇。女人的後裔要傷你的頭；你要傷他的腳跟」（創三15）。前一章分享第一方面，這一章要分享第二方面。第二方面不僅是對魔鬼撒旦的咒詛，同時也是對整個人類史的預言，將會有一場長遠的爭戰，綿延不息，從創世記的起頭，到啟示錄的末了；從人類的第一代子孫，到人類的最後一代子孫；從第一隻羊被殺，到基督被釘十架，到基督第二次再來，這場戰爭都持續進行。然而這不是二元論的善惡之戰，分不出勝負；這乃是神絕對掌權的爭戰，最後的勝利一定是在神這邊。所以，從亞當的時候開始，神宣告這項預言，就是在呼召人選邊站。人一定要選擇神這邊，才會有美好豐盛的生命，以及成聖得勝的生活。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、累代彼此為仇</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記三15a：「叫你和女人彼此為仇；你的後裔和女人的後裔也彼此為仇。」這裡強調女人，以及女人的後裔，我們很容易就聯想到基督耶穌，因為耶穌基督的母親是以童貞之身生了他，耶穌沒有肉身的父親。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                但其實我們每個人都是女人的後裔，一方面我們都從母親（女人）生出來的，另一方面整個人類也是處在女人的地位上。從永恆婚姻的角度，基督是新郎，教會是新婦。在舊約時代，耶和華神稱以色列為他的妻子。啟示錄的末了看到有兩個女人，一個是大淫婦，這裡面男男女女都有，只要是背離神的，都屬於這個大淫婦；另一個是新婦，不管男女，凡歸屬於神的，就在新婦裡面。所以神對撒旦說「叫你和女人彼此為仇，你的後裔和女人的後裔也彼此為仇」，有可能是指「叫你與整個人類或神的子民為仇」，撒旦與人或神子民的敵對關係將會歷世歷代延續下去。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這裡有一個問題：撒旦的後裔是誰？撒旦原來是天使，天使不會生育，不能像人生出後裔。耶穌的話給了我們答案：「你們是出於你們的父魔鬼，你們父的私慾你們偏要行。他從起初是殺人的，不守真理，因他心裡沒有真理。他說謊是出於自己；因他本來是說謊的，也是說謊之人的父。」（約八44）魔鬼誘惑人來聽牠的話，影響人來跟隨牠，使喚人來為牠做事，這些人就成為魔鬼的後裔。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                從亞當、夏娃的第一代子孫開始，就分出撒旦的後裔與女人的後裔了。該隱聽從撒旦、不聽從神，成為撒旦的後裔；亞伯聽從神、不聽從撒旦，是女人的後裔。有了這樣的分別，女人及女人的後裔更準確的意思是指神的子民，在舊約是亞伯拉罕的後裔、以色列百姓，在新約是教會、基督徒，而撒旦的後裔則是不信神、敵擋神的人。所以這場長遠的爭戰，就是神的子民與撒旦及其跟隨者的爭戰。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                女人這個字希伯來文是 אִשָּׁה（ishshah），在舊約出現780次，大部分翻譯作女人、妻子，具有重要的角色、地位。起初，女人是亞當的妻子，以後女人是神的妻子，所以屬神的人與屬撒旦的人會有長遠的爭戰。在詩篇的經文裡，給這兩大陣營有鮮明的標示。僅舉兩例如下：
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                詩篇一1-6：「不從惡人的計謀，不站罪人的道路，不坐傲慢人的座位，惟喜愛耶和華的律法，晝夜思想他的律法；這人便為有福！他要像一棵樹栽在溪水旁，按時候結果子，葉子也不枯乾。凡他所做的盡都順利。惡人並不是這樣，卻像糠粃被風吹散。因此，當審判的時候惡人必站立不住，罪人在義人的會眾中也是如此。因為耶和華知道義人的道路，惡人的道路卻必滅亡。」詩篇第一篇是全部詩篇的引言、濃縮版，清楚說出惡人、義人的樣式，也說出他們不同的結局。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                詩篇九1-10：「我要一心稱謝耶和華，傳揚你一切奇妙的作為。我要因你歡喜快樂；至高者啊，我要歌頌你的名！我的仇敵回轉撤退的時候，他們在你面前跌倒滅亡。因你已經為我伸冤，為我辯護；你坐在寶座上，按公義審判。你曾斥責列國，滅絕惡人；你曾塗去他們的名，直到永永遠遠。仇敵到了盡頭；他們遭毀壞，直到永遠。你拆毀他們的城鎮，連他們的名字也都消滅！惟耶和華坐在王位上，直到永遠；他已經為審判擺設寶座。他要按公義審判世界，按正直判斷萬民。耶和華要作受欺壓者的庇護所，在患難時的庇護所。耶和華啊，認識你名的人要倚靠你，因你沒有離棄尋求你的人。」從這詩篇，更清楚看到惡人與義人這兩種人的敵對關係，也稱惡人為「仇敵」，仇敵的概念是從創世記三15延續來的。惡人、仇敵的結局基本上就是被神審判、歸於滅亡。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在新約是否有所不同？我們可以分別來看施洗約翰的信息、耶穌的信息、保羅的信息。
              </p>
              <div className="space-y-3 mb-3">
                <div className="bg-indigo-50 rounded-lg p-3 border border-indigo-100">
                  <span className="font-semibold text-indigo-800">施洗約翰的信息</span>
                  <p className="text-gray-700 text-sm mt-1 leading-relaxed">
                    馬太福音三7-10：「約翰看見許多法利賽人和撒都該人也來受洗，就對他們說：毒蛇的種類！誰指示你們逃避將來的忿怒呢？你們要結出果子來，與悔改的心相稱。不要自己心裡說：有亞伯拉罕為我們的祖宗。我告訴你們，神能從這些石頭中給亞伯拉罕興起子孫來。現在斧子已經放在樹根上，凡不結好果子的樹就砍下來，丟在火裡。」約翰稱惡人為毒蛇的種類，這呼應創世記三15有關蛇的後裔的預言。
                  </p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-3 border border-indigo-100">
                  <span className="font-semibold text-indigo-800">耶穌基督的信息</span>
                  <p className="text-gray-700 text-sm mt-1 leading-relaxed">
                    馬太福音廿三29-33：「你們這假冒為善的文士和法利賽人有禍了！因為你們建造先知的墳，修飾義人的墓，說：若是我們在我們祖宗的時候，必不和他們同流先知的血。這就是你們自己證明是殺害先知者的子孫了。你們去充滿你們祖宗的惡貫罷！你們這些蛇類、毒蛇之種啊，怎能逃脫地獄的刑罰呢？」耶穌稱惡人為蛇類、毒蛇之種，這也應驗創世記三15有關蛇的後裔的預言。
                  </p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-3 border border-indigo-100">
                  <span className="font-semibold text-indigo-800">使徒保羅的信息</span>
                  <p className="text-gray-700 text-sm mt-1 leading-relaxed">
                    帖撒羅尼迦後書二9-12：「這不法的人來，是照撒但的運動，行各樣的異能、神蹟，和一切虛假的奇事，並且在那沉淪的人身上行各樣出於不義的詭詐；因他們不領受愛真理的心，使他們得救。故此，神就給他們一個生發錯誤的心，叫他們信從虛謊，使一切不信真理、倒喜愛不義的人都被定罪。」
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                所以新約時代一樣是善惡分明的，惡人乃是毒蛇的種類，是信從撒旦謊言的人，結局是丟在火裡、受地獄的刑罰、被定罪。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、傷頭與傷腳跟</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記三15b：「女人的後裔要傷你的頭；你要傷他的腳跟。」這不僅是對撒旦的咒詛，也是關於基督救贖的預言。「頭」代表權勢，「腳跟」代表身體，「腳跟」並非指微小的部位，乃是指關鍵的部位，因蛇咬了人的腳跟，就能致人於死。同理，蛇的「頭」也是關鍵部位，傷蛇的身不會致命，傷蛇的頭才會致命。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                歷史上基督的救贖工作完全符合這個預言，女人的後裔是耶穌，女人的後裔傷蛇的頭就是耶穌擊打敗壞撒旦的權勢；而蛇傷他的腳跟就是撒旦藉惡人將耶穌釘十字架。這事情表面上是撒旦勝利，因為耶穌死了。但最終是耶穌得勝，解除撒旦的死亡威脅，因為耶穌復活了，並且使凡信他的人，也都能復活，活到永遠。正如希伯來書二14-15所說：「兒女既同有血肉之體，他也照樣親自成了血肉之體，特要藉著死敗壞那掌死權的，就是魔鬼，並要釋放那些一生因怕死而為奴僕的人。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                魔鬼能夠綑綁人是因人怕死，所以人會聽牠；人能夠勝過魔鬼乃是因為不怕死，就不需要聽魔鬼了。初代教會許多聖徒被控告、定罪，被各種刑罰苦待、殺害，包括被丟到鬥獸場、綁在木樁上用火燒死、被釘十字架……等等，但他們有基督的生命，有復活的盼望，所以能至死忠心，全然得勝。這也符合耶穌所說：「那殺身體，不能殺靈魂的，不要怕他們；唯有能把身體和靈魂都滅在地獄裡的，正要怕他。」（太十28）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                人除了怕死，還衍伸出很多種懼怕，包括怕餓、怕苦、怕窮、怕考試、怕結婚、怕麻煩……等等。我們時常因為不必要的懼怕，而作出錯誤的選擇。例如主日不來參加聚會，是因怕考試考不好，所以在家讀書或去補習，結果或許一時過關，但沒有養成正確的讀書習慣，屬靈生命也產生破口。一次考不好不代表失敗，也不是因為來聚會才考不好，乃是因為平常沒有做好時間管理。有這樣的認知，就不會怕考試而不來敬拜神了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們常常也會怕被罵而不承認自己的錯誤，而以說謊來掩蓋。但我們若不怕承認錯誤，接受該有的責罵或懲罰，就會有改進成長的機會，而不會一錯再錯。夫妻之間也是如此，若得罪了對方，就坦誠道歉，彼此原諒，才不會傷害了彼此之間的感情和關係。所以「怕」一定要從我們身上拿走，基督徒若連死都不怕，也就什麼都不怕了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「後裔」的希伯來文是 זֶרַע（zera），是種子、子孫、兒子的意思，在舊約出現229次，這字是單數型態，也是集合名詞。既可以指一個兒子，也可以指歷代許多子孫，類似人在亞當裡是一而多的概念。所以女人的後裔不只是預言耶穌基督一個人，同時也是預言許多的得勝者。啟示錄十二5說到：「婦人生了一個男孩子，是將來要用鐵杖轄管萬國的。」這經文與創世記三15有很好的呼應，這婦人是神的子民，神的妻子，男孩子是單數，代表一個一個的得勝者。啟示錄二、三章的得勝者也都是單數，這不是說男孩子只有一個，或得勝者只有一個，乃是說每個聖徒是否能成為得勝者，都必須自己向神負責。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                女人最早是指夏娃，夏娃所生的兒子、子孫能被神使用，來打敗撒旦。第一個應驗的是亞伯，如希伯來書十一4所說：「亞伯因著信，獻祭與神，比該隱所獻的更美，因此便得了稱義的見證，就是神指著他禮物作的見證。他雖然死了，卻因這信，仍舊說話。」亞伯雖然被蛇傷了腳跟，殉道了，但同時也傷了蛇的頭，打擊了撒旦的權勢。撒旦以為人都會怕死，但亞伯不怕死，就傷了蛇的頭，打擊了撒旦的權勢。
              </p>
              <p className="text-gray-700 leading-relaxed">
                希伯來書十一章繼續列出許多信心英雄，他們都是得勝者，包括以諾、挪亞、亞伯拉罕、以撒、雅各、約瑟、摩西……等等，這些人都應驗了女人的後裔要傷蛇的頭的預言，因為他們都以信心跟隨神，不懼怕撒旦，就打擊了撒旦的權勢。啟示錄十二11對得勝者的條件有詳細的描述：「弟兄勝過他，是因羔羊的血和自己所見證的道。他們雖至於死，也不愛惜性命。」歷代以來不斷有得勝者產生，他們能得勝都是因羔羊的血（基督的救恩）、自己所見證的道，還有不怕死的決心。包括舊約許多先知，新約許多使徒、聖徒，近代許多宣教士、佈道者。他們因為不怕死，就能勇敢做出偉大的事，將許多的靈魂從撒旦手下救出來。藉此傷了蛇的頭，打擊了撒旦的權勢。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                我們若勇敢見證神的道，不怕困難、不怕嘲笑，把人帶到神面前，也能加入得勝者的行列。年輕人若勇敢結婚，在艱難中把許多兒女生養出來，栽培為神國人才，也能加入得勝者的行列。撒旦要吞吃人、殺害人，也包括用欺騙、嚇人的手段，讓人不敢結婚生子，不敢去傳福音、帶門徒。但這是一場長遠的戰爭，我們一定要堅持生養肉身的兒女，也生養屬靈的兒女，不斷栽培出得勝者，最終贏得這場跨越全人類歷史的爭戰。使撒旦羞愧，使神得完全的榮耀。
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
                '「女人」（אִשָּׁה，ishshah）與「後裔」（זֶרַע，zera）分別指向神的子民與撒旦跟隨者兩大陣營的長遠爭戰，該隱是撒旦的後裔、亞伯是女人的後裔，這場爭戰從創世記延續到啟示錄。',
                '施洗約翰、耶穌、保羅在新約時代都延續創世記三15的蛇後裔預言，稱惡人為毒蛇之種，顯示善惡分明、跨越舊新約的一致性。',
                '「頭」代表權勢、「腳跟」代表關鍵部位而非微小部位；耶穌傷蛇的頭是擊敗撒旦權勢，蛇傷耶穌的腳跟是十架受死，但耶穌復活得勝（來二14-15）。',
                '魔鬼綑綁人是因人怕死，人勝過魔鬼是因不怕死；除了怕死，人還有怕餓、怕苦、怕考試等各種懼怕，都需要被基督的生命除去。',
                '女人的後裔（zera，單數兼集合名詞）不只預言耶穌一人，也預言歷代得勝者，如亞伯、希伯來書十一章信心英雄；得勝的條件是羔羊的血、自己所見證的道、不愛惜性命（啟十二11）。',
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
              '女人的後裔代表甚麼？跟我有甚麼關係？',
              '「女人後裔要傷蛇的頭」與「蛇要傷他的腳跟」預言了哪些事？有甚麼重要性？',
              '我們如何可以勝過魔鬼？有哪三方面的條件？自己需要加強的是甚麼？',
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
