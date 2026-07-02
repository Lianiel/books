import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch22() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第二十二章</h1>
        <h2 className="text-xl font-semibold text-gray-700">神審判撒旦</h2>
        <p className="text-gray-500 mt-1">那人說：你所賜給我與我同居的女人，她把那樹上的果子給我，我就吃了。耶和華神對女人說：你作的是甚麼事呢？女人說：那蛇引誘我，我就吃了。耶和華神對蛇說：你既作了這事，就必受咒詛，比一切的牲畜野獸更甚。你必用肚子行走，終身吃土。我又要叫你和女人彼此為仇；你的後裔和女人的後裔也彼此為仇。女人的後裔要傷你的頭；你要傷他的腳跟　創世記三12-15</p>
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
              亞當回答神關於吃禁果的緣由，將責任推卸給女人和神：是女人把果子拿給我的，而這女人是你賜給我的。這成為罪人慣常的模式：不承認自己的過犯，將犯錯的責任推給別人。亞當不承認自己應該保護夏娃、制止夏娃。亞當不僅完全失職，又與夏娃犯同樣的罪。女人的回答也採取推卸責任的模式：「那蛇引誘我，我就吃了。」（創三13）完全沒有想到神的話是不能打折扣的，也不知道自己有拒絕撒旦誘惑的權柄。兩人都犯了罪，發現狀況不對之後，不來找神認罪、求神幫助，反而自己找掩飾，逃避神的面。這真是今日世人犯罪後的樣式。表面上，神先接受了亞當、夏娃的理由，所以先來審判撒旦。但等到對撒旦的審判處理完之後，接著會來處理夏娃與亞當。
            </p>
            <p className="text-gray-700 leading-relaxed">
              雖然聖經的記載，是寫對蛇審判，但根據啟示錄的啟示，那蛇就是撒旦，所以神並不是審判自然界的蛇，乃是審判魔鬼撒旦，那個靈界的蛇。神對撒旦的咒詛有兩方面：第一是「用肚子行走，終身吃土」（創三14），第二是「叫你和女人彼此為仇；你的後裔和女人的後裔也彼此為仇。女人的後裔要傷你的頭；你要傷他的腳跟」（創三15）。本章先講第一方面，下一章再講第二方面。以下從「用肚子行走」與「終身吃土」這兩個重點來分享。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、用肚子行走</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                基於神對蛇的咒詛，有人認為，蛇可能原本有四條腿或很多條腿，因犯了罪，才被除掉改用肚子行走；還有，牠原本以其他東西為食，後來才改為吃土。然而真正受審判的不是蛇，乃是撒旦（第十九章有詳細說明）。我們可以合理推論，自然界的蛇被造時本來就沒有腳，且是吃土的。因為蛇有這個特色，所以神就對撒旦說，你會像蛇一樣只能用肚子行走，且像蛇一樣終身吃土。神真正咒詛的對象乃是魔鬼撒旦──那個墮落的天使長。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                啟示錄十二9告訴我們，那古蛇，就是魔鬼撒但，是迷惑普天下的。還說到，牠和牠的使者都被摔下去地上。以賽亞書十四12-15提供線索，幫助我們知道，撒旦墮落之前可能是天使長，並且說到，牠「從天墜落」（賽十四12），將來還要「墜落陰間，到坑中極深之處。」（賽十四15）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                由此可推論，用肚子行走的意思可能是，這個墮落的天使摔落於地，如動物的蛇一般，從屬天變為屬地；而終身吃土的意思是，不再以屬天的糧食為食物，改為以屬地土的糧食為食物。啟示錄記載，魔鬼撒旦帶著三分之一的天使一起背叛墮落，而後一起被摔在地上（啟十二4），這意思跟創世記三14的咒詛是一致的：「你必用肚子行走。」啟示錄十二3-4所記的，是對魔鬼撒旦的介紹，時間上可以包括創世記那時候。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神宣判魔鬼不再屬天，乃屬地。在這宣判之後，魔鬼仍可以在天上地下來回，就如約伯記一、二章所顯示的。約伯記一6-7：「有一天，神的眾子來侍立在耶和華面前，撒但也來在其中。耶和華問撒但說，你從那裡來？撒但回答說，我從地上走來走去，往返而來。」約伯記二1-2：「又有一天，神的眾子來侍立在耶和華面前，撒但也來在其中。耶和華問撒但說：你從那裡來？撒但回答說：我從地上走來走去，往返而來。」雖然如此，牠並不敬拜神，也不是在神面前侍立，乃是來控告地上的聖徒。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                自從被神咒詛以後，撒旦慣常的活動範圍是在地上，而不是在天上神的寶座前。所謂地上，有包括地球的上空，那是創世第二天所造出來的天空。為何第二天沒有寫：「神看著是好的」，除了天上的水後來會用來審判，還有一個原因——那個天空將會是魔鬼撒旦活動的範圍，有兩處經文描述魔鬼撒旦在這領域的活動：
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                但以理書十12-14：「你的言語已蒙應允；我是因你的言語而來。但波斯國的魔君攔阻我二十一日。忽然有大君（就是天使長；二十一節同）中的一位米迦勒來幫助我，我就停留在波斯諸王那裡。現在我來，要使你明白本國之民日後必遭遇的事，因為這異象關乎後來許多的日子。」筆者所著《啟示錄的4個旋律》有分析說明，指出這位與但以理說話的乃是舊約的基督，這裡不細談。主要是要看到，有一個天空上的屬靈爭戰在發生，這爭戰與但以理的禱告相關，爭戰的雙方包括魔君（墮落的天使長）與大君（天使長）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                以弗所書六11-12：「要穿戴神所賜的全副軍裝，就能抵擋魔鬼的詭計。因我們並不是與屬血氣的爭戰（原文作摔跤；下同），乃是與那些執政的、掌權的、管轄這幽暗世界的，以及天空屬靈氣的惡魔爭戰。」希臘原文，「在天空中」這個副詞擺在整句的最後，是要說明前面那些執政的、掌權的……都在天空中，管轄著地上屬魔鬼的人。人歸回神之後，不再臣服於魔鬼，就與魔鬼有持續的爭戰，包括要活出聖潔的生命，以及要拯救被魔鬼綑綁的人，這兩方面都需要爭戰。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                啟示錄十二7-9說到，魔鬼與所有墮落天使，被天使長米迦勒與聖潔的天使打敗而摔落地上。但以理書十章記載，米迦勒曾跟魔鬼打仗，但那時他只是助手，與舊約的基督聯手，將魔鬼打跑，魔鬼仍在天空掌控這世界。到了七年大災難時，神派天使長米迦勒帶領眾使者在天空跟魔鬼爭戰，最終米迦勒與聖潔的天使打敗了龍與墮落的天使，使得天上不再有魔鬼撒旦存在之處。有人認為這事發生在基督升天之後，這樣整個新約時代魔鬼就都不在天空，但以弗所書六章清楚說到魔鬼在天空中掌權，所以比較合理的時間應該是發生在七年大災難時，而不是基督升天後。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                所以如今魔鬼仍在空中掌控世界，但七年大災難一開始就有一場米迦勒帶頭的天上戰爭，將魔鬼打落在地上。魔鬼在地上非常氣忿，那時地和海就有禍了（啟十二12），因為所有的大鬼、小鬼都在地上，牠們的專長是帶來紛爭、戰爭，使得七年大災難期間戰爭、災難特別多，也特別嚴重。
              </p>
              <p className="text-gray-700 leading-relaxed">
                魔鬼被審判，是每況愈下，先被驅逐離開天上神寶座前，後來被米迦勒打敗，連地球的空中也不能活動。再後來，被天使綑綁關在無底坑裡（啟二十1-3），最後將被丟到硫磺火湖之中，永遠受痛苦（啟二十10）。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、終身吃土</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                關於終身吃土，不僅人的靈活著是靠神口裡所說的話（太四4），天使也是一樣，牠們不需要吃地上的食物，乃靠著敬拜神、聽神的話就可以得著飽足。但墮落的天使不能敬拜神，不再能以神的話、神的光為食物，只好以地上塵土為食物。之前談過，人有兩個本體，屬天的本體要吃屬靈的食物，就是神的話、神的靈，屬地的本體要吃屬地的食物，就是五穀、蔬果等，洪水後增加了動物可作為食物。所以魔鬼吃土的意思，應該可以理解為像墮落的人一樣，只吃地上的食物。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                墮落的天使不能在神面前敬拜神，也不能以神的話來使自己飽足。牠會感覺飢渴，神定規牠終身吃土，就是吃屬地的食物。但牠們又沒有身體怎能吃呢？故此，邪靈魔鬼（墮落的天使）需要附在人或不潔淨的動物身上，才能透過人或動物來吃東西，所以貪吃鬼、酒鬼、色鬼，都是真有其鬼。但牠們吃了也無法得到飽足，因為這食物與神的話無法相比。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                人為什麼會貪食、好酒、好色，有些是因為邪靈附身，一起做這事。例如：一個喜歡喝酒的人，當他過度喝酒而醉倒時，自己失去防護，就向邪靈敞開，使邪靈進入他裡面。當他酒醒後再去喝酒，就會喝更多，因為邪靈在他裡面跟他一起喝，直到人的身體壞掉，病重死亡，之後邪靈會去尋找下一個人附身。放縱情慾淫亂的人，會向色鬼敞開，使淫亂的鬼附身，於是常常縱慾，直到自己精力耗竭而死，之後邪靈會去尋找下一個人附身。不管是同性戀或異性戀，只要有不合法的性關係管道，都會開放給邪靈進入到人裡面，邪靈與人一起享受那不正常的關係。可是每次吃喝宴樂、縱慾濫交之後的感覺都是空虛的。墮落的天使無法藉此得到真正的滿足，人的心也不能藉此得到真正的滿足。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                土的原文是 עָפָר（aphar），這字在創世記出現九次，其中七次都跟人有關，第一次講神用「塵土」造人，第二次出現講神要蛇終身吃「土」，第三、四次講人本是「塵土」，仍要歸於「塵土」，後面有三次講後裔要像「塵沙」那麼多，一次講我本是「塵土」。所以「土」跟人有強烈的連結，蛇（撒旦）吃「土」似乎也暗示撒旦會想要吃人。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                撒旦吃人的事，啟示錄十二4有清楚講出來：「龍就站在那將要生產的婦人面前，等她生產之後，要吞吃她的孩子。」婦人代表神的子民，孩子代表神國度的人才。這樣的事最早發生是亞當的兒子亞伯被殺，如同被魔鬼吞吃。後來在出埃及記看到許多以色列的男嬰被法老殺死，其背後都有撒旦的工作。魔鬼總是在那裡預備，想要先下手為強，像摩西出生前，法老已殺死不少以色列剛出生的男孩子。但神特別保守摩西，使得他不僅存活，而且在埃及皇宮長大，得到很好的教育訓練，又經過曠野學校，至終被神呼召成為神拯救以色列百姓的領袖。新約時代，當希律聽說有人出生在伯利恆，將來要作王，就下令將伯利恆的男嬰殺死，這也是撒旦吃人的情況。但神保守了耶穌，使耶穌能長大成人，完成神拯救全人類的救贖計劃（太二1-16）。在舊約，摩西是拯救者；在新約，耶穌是拯救者。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                今天魔鬼吃人的事，最大宗是用墮胎的方法。當人懷孕時，神所賜的生命就開始了，然而現今普遍的婚前性行為，以及婚後不願付代價生養較多的孩子，造成墮胎比例不斷上升，台灣每年生出不到20萬人，但卻墮胎40萬人。墮胎背後是魔鬼的作為，不但使人犯謀殺罪，也是殺害那些以後可以成為神國人才的人。有不少見證說到，母親曾經掙扎是否墮胎，後來決定讓孩子生出來，結果孩子長大後成為神所重用的人。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                魔鬼的手段不只一個，生養孩子的過程，魔鬼還會不斷想盡辦法要奪走孩子的性命，包括引誘孩子犯罪、叛逆逃家、吸食毒品、偷盜賭博、躁鬱症、憂鬱症、讓他想要自殺等。所以養孩子不簡單，而要培養他們成為神國人才更是不容易。因此身為父母親的要與神同工，一起來養育孩子，時常藉著禱告將孩子交託給上帝，讓神親自保守看顧，並用神的話引導孩子走在合神心意的道路中。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                美國每年墮胎近百萬，但比例比台灣低，因為他們的人口是台灣的十幾倍。中國大陸在一胎化政策時期，墮胎無數。這些都是撒旦在吃人，因為撒旦不想讓人出生，被培養成為國度人才，來與牠爭戰。
              </p>
              <p className="text-gray-700 leading-relaxed">
                歷世歷代，有許多殉道者，包括舊約的先知、新約的使徒、十五、六世紀反對羅馬教皇的人、近代的宣教士、極權國家的基督徒等，從十位數、百位數，到成千上萬，都是被魔鬼所吃的人。在神的計畫裡面，這些至死忠心的人，都要得著生命的冠冕（啟二10）、公義的冠冕（提後四6-8）。啟示錄二10：「你將要受的苦你不用怕。魔鬼要把你們中間幾個人下在監裡，叫你們被試煉，你們必受患難十日。你務要至死忠心，我就賜給你那生命的冠冕。」提摩太後書四6-8：「我現在被澆奠，我離世的時候到了。那美好的仗我已經打過了，當跑的路我已經跑盡了，所信的道我已經守住了。從此以後，有公義的冠冕為我存留，就是按著公義審判的主到了那日要賜給我的；不但賜給我，也賜給凡愛慕他顯現的人。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                神的計畫何等奇妙，雖然魔鬼以捆綁人、殺人為樂，但牠至終要被綑綁關在無底坑，並要被丟到硫磺火湖之中。而且神藉基督的救恩，使我們可以脫離魔鬼撒旦的綑綁，開始能與魔鬼爭戰，並且靠著主能勝過魔鬼撒旦。進一步，不僅我們自己成為得勝者，也要帶領更多人歸向主，加入得勝者的行列。
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
                '亞當、夏娃都採取推卸責任的模式犯罪；神先審判撒旦（用肚子行走、終身吃土），咒詛的真正對象是魔鬼撒旦而非自然界的蛇，蛇本來被造就沒有腳、以土為食。',
                '「用肚子行走」意指墮落天使從屬天變為屬地；撒旦被審判是每況愈下的過程：先離開神寶座前、被米迦勒逐出天空（七年大災難時）、被綑綁在無底坑、最終丟入硫磺火湖。',
                '「終身吃土」指墮落天使不能再以神的話為食，只能靠附身在人或動物身上吃屬地食物，這是貪食、好酒、好色等成癮行為背後的邪靈附身現象。',
                '「土」（עָפָר，aphar）在創世記九次出現中七次跟人有關，暗示撒旦吃土即是想要吃人；撒旦吃人的具體手段包括殺嬰（法老、希律）、墮胎、引誘孩子犯罪叛逆等。',
                '殉道者是被魔鬼所吃的人，但神應許他們得著生命的冠冕（啟二10）與公義的冠冕（提後四6-8）；信徒靠著基督的救恩能與魔鬼爭戰並得勝，也要帶領更多人加入得勝者的行列。',
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
              '神咒詛蛇「用肚子行走」，是指撒旦墮落後的什麼情況？與我有何關係？',
              '蛇「終身吃土」，是指撒旦墮落後的什麼情況？跟鬼附有甚麼關係？',
              '蛇吃土似乎跟魔鬼撒旦吃人有關，魔鬼會如何吃人？我們當如何防備？',
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
