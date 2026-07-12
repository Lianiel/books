import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch45() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第45章</h1>
        <h2 className="text-xl font-semibold text-gray-700">爭戰與奉獻</h2>
        <p className="text-gray-500 mt-1">亞伯蘭也將自己所得來的，取十分之一給他。　創世記十四20</p>
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
              亞伯蘭的信心不斷成長，先有離開本族本家的信心、築壇的信心，接著有寄居的信心、不爭的信心，本章要繼續看到亞伯蘭有爭戰的信心和奉獻的信心。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、爭戰的信心（創十四13~16）</h3>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">一、付生命代價拯救骨肉</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  羅得原先住在大平原，慢慢往大城市所多瑪遷移，從遊牧的人變為城市的人：「12亞伯蘭住在迦南地，羅得住在平原的城邑，漸漸挪移帳棚，直到所多瑪。13所多瑪人在耶和華面前罪大惡極。」（創十三12-13）羅得往看似比較容易發展的城市移動，正如現今社會，畜牧業、農業的人也慢慢遷移至都市。年輕人不願意從事勞力粗重的工作，而是交給外勞。年輕人往往投入服務業，但服務業可工作的年齡有限，年齡越大，越容易被淘汰。而且都市中的引誘、罪惡也較多，如同所多瑪城，可能終將經歷神的審判與毀滅。所多瑪被毀滅前，神給他們一次警告性的刑罰——神使所多瑪被別的王攻擊，並被打敗。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  亞伯蘭雖沒有跟羅得同住，但他視羅得為骨肉之親，羅得有需要，他就去幫助他，這是信心的表現。當羅得所住的城被攻破，羅得被擄去後，亞伯蘭沒有猶豫，馬上動身去救他。保羅在羅馬書九2~3提到：「2我是大有憂愁，心裡時常傷痛；為我弟兄，我骨肉之親，就是自己被咒詛，與基督分離，我也願意。」保羅為著尚未信耶穌的以色列人憂傷，他說若能救以色列同胞，甚至願意犧牲自己與基督分離。亞伯拉罕同樣也帶著哀痛的心情、冒著生命的危險，偕同自己家裡精煉生養的壯丁三百一十八人（這些壯丁主要就是僕人們的孩子），前去攻打四王的軍隊並救回羅得，這是出於愛而激發出來的爭戰信心（創十四14）。今日的基督徒，是否也為同胞有這樣的心志？是否願意為使他人得著福音的好處，而犧牲自己的時間、金錢、名利、工作，甚至生命？
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">二、靠生養壯丁同心得勝</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  亞伯蘭靠自己家裡生養的壯丁，同心打贏勝仗。同時也有在地與亞伯蘭聯盟的人來協助。從創世記十四13，24可以看出來：「13有一個逃出來的人告訴希伯來人亞伯蘭；亞伯蘭正住在亞摩利人幔利的橡樹那裡。幔利和以實各並亞乃都是弟兄，曾與亞伯蘭聯盟。……24只有僕人所吃的，並與我同行的亞乃、以實各、幔利所應得的分，可以任憑他們拿去。」既說應得的分，表示他們有參與這場戰事。藉此我們可歸納出屬靈爭戰的兩種部隊，一種是自己家裡的壯丁，一種是在地的聯盟。前者就是自己生養的兒女、自己栽培的門徒、教會內培養的同工等；後者是地區性合一的教會，牧者同工常在一起禱告，有需要時就能並肩作戰，彼此幫助。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  現今社會的家庭教育，很多孩子交給祖父母或保姆扶養。通常孩子會與照顧者比較親近，並受其價值觀及生活習慣影響。我們若不親自撫養小孩，不僅會弱化親子關係，也會難以管教。有些國家的軍隊是靠買來的（就是傭兵），打起仗來，軍隊能否聽命都沒把握。唯有靠自己生養，從小就付出愛養大的，才比較能夠同心，也才能打仗，甚至能以寡擊眾。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  不僅家庭與國家要學習亞伯拉罕，教會也要學習亞伯拉罕，在自己家裡生養。有同樣的價值觀與屬靈基因，才能同心、委身，一起事奉才有優勢。所以基督徒不能只參加主日崇拜，還要加入小組，與其他組員一同成長，並接受教會的系列裝備，參與教會的福音行動。每個小組成長到十二人需分組時，小組長和組員也要學習亞伯拉罕的雅量，為著每個人能有更多的成長空間和牧養操練而割捨、祝福。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  羅得獲救後，並沒有因此而儆醒。他繼續住在所多瑪，結果遭遇天火滅城的事件。如同所多瑪最先遭到神的審判與毀滅，末後的審判也會先臨到罪惡滿盈的城市。紐約、倫敦、東京、上海、曼谷、台北等，是世界知名的大城市，生活在其中，有種種方便，但罪惡的試探也比較多。我們需要為此儆醒禱告，也可以審慎考慮回歸鄉村從事農業。目前台灣農產品的自給率偏低，農業人口比例也偏低。雖然農村生活比較辛苦，但日出而作、日落而息是神設計的生活方式，對身體健康、靈命成長、社會秩序都有幫助。反觀在大城市裡，日出而息、日落而作的夜生活型態越來越普遍，不僅與神的設計背道而馳，也衍生出許多罪惡與誘惑。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、奉獻的信心（創十四17~20）</h3>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">一、神的祭司麥基洗德</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  亞伯拉罕將打勝仗所得到財物的十分之一獻給麥基洗德，因為麥基洗德是神的祭司（創十四18）。希伯來書一共十次提到麥基洗德，其中最主要的一段在希伯來書七1-6：「1這麥基洗德就是撒冷王，又是至高神的祭司，本是長遠為祭司的。他當亞伯拉罕殺敗四王回來的時候，就迎接他，給他祝福。2亞伯拉罕也將自己所得來的，取十分之一給他。他頭一個名翻出來就是仁義王，他又名撒冷王，就是平安王的意思。3他無父，無母，無族譜，無生之始，無命之終，乃是與神的兒子相似。4你們想一想，先祖亞伯拉罕將自己所擄來上等之物取十分之一給他，這人是何等尊貴呢！5那得祭司職任的利未子孫，領命照例向百姓取十分之一，這百姓是自己的弟兄，雖是從亞伯拉罕身（原文是腰）中生的，還是照例取十分之一；6獨有麥基洗德，不與他們同譜，倒收納亞伯拉罕的十分之一，為那蒙應許的亞伯拉罕祝福。7從來位分大的給位分小的祝福，這是駁不倒的理。在這裡收十分之一的都是必死的人；但在那裡收十分之一的，有為他作見證的說，他是活的；」
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  麥基洗德這名字本身有清楚的意思，「麥基」直譯是我的王，「洗德」直譯是公義的<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（聖經公會，《創世記研讀本》，頁131）</span>。整個名字的意思就是「公義的王」。他又是撒冷王，是平安王的意思。這位麥基洗德，預表耶穌基督，因為他無父，無母，無族譜，無生之始，無命之終，乃是與神的兒子相似（來七3），又說利未人都是必死的，而麥基洗德是活的（來七8）。同時，希伯來書六次說耶穌基督是按著麥基洗德的等次作祭司（來五6，10，六20，七11，15，17）。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  麥基洗德是誰，有不同的答案。猶太傳統認為麥基洗德就是閃，因為閃出方舟後還活了五百多年，而按各代生孩子的時間計算，到亞伯拉罕這代才290年，閃與亞伯拉罕重疊是可能的，以閃的身分與靈性，作為神的祭司，應當是恰如其分，當之無愧。由於閃是從洪水前的世界過來的，許多人不知其來歷，因此說他「無父，無母，無族譜，無生之始，無命之終」（來七3）。基督教沒有提供統一答案，僅照聖經所說，他就是預表基督的一位祭司。另有人認為，麥基洗德是神的兒子基督耶穌在那時代的顯現，所以他怎麼來無人知道，怎麼走也無人知道。他在那關鍵時刻出現一小段時間，是為了祝福亞伯拉罕，也建立祭司收十一奉獻的典範，最重要是預告將來的基督耶穌乃是一位超越時空的祭司<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（威明頓，《威明頓聖經輔讀》，頁76）</span>。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">二、知道所得從神而來</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  亞伯拉罕願意奉獻十分之一，因為他知道，這些所得都是從神而來的，若非神的幫助，他不可能打贏四王的軍隊。他承認神的主權，沒有將所得的財物據為己有。我們現今的奉獻也是表明承認神的主權，因我們知道，我們所得的一切都是來自神的幫助和賜福。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  神的祭司祝福亞伯拉罕，代表屬靈的供應。神規定以色列十二支派中的利未支派不從事農工商業，只做屬靈的事，因此領受百姓所納的十分之一，成為他們的生活供應。而祭司是從利未支派出來的，除了領受十分之一，也分享祭壇的供物。新約時代也有一批蒙神揀選全職事奉神的人，像舊約時代的利未人。他們透過牧會、宣教、敬拜禱告等事奉，為神的百姓提供屬靈的供應和祝福，是神在地上的代表者，也當領受敬奉（提前五17-18）。
                </p>
              </div>

              <div>
                <span className="font-semibold text-indigo-700">三、獻上所得十分之一</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  亞伯拉罕透過麥基洗德，將打勝仗所得財物的十分之一獻給神。什一奉獻並非摩西律法規定才開始的，早在亞伯拉罕時代，什一奉獻就是敬畏神的人自然而然會做的事，它反映人與神之間正確的關係，這個作法超越律法的精神。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  瑪拉基書三8~10進一步告訴我們，要將神之物歸給上帝，就是當納的十分之一，以及當獻的供物。當納的十分之一用來支持、供養服事神的利未人（瑪三10、民十八21~24），使他們能專心做屬靈的工作。大衛時代，有廿四小時輪班的敬拜禱告者，他們的服事帶下神的同在、賜福與保守，使以色列物產豐富，仇敵無法侵略，且使大衛與所羅門作王的八十年期間，成為以色列最鼎盛的時期。應用在新約時代，當納的十分之一，不僅支持牧會的傳道人，也當供應宣教士、守班的禱告敬拜者、福音機構同工、行政同工等全職事奉神的人。所以現今教會所收的什一奉獻，應將其中一部份供應宣教士，使他們為福音的擴展而效力；一部份供應牧會的傳道人，使他們為本地的裝備聖徒而效力；一部份供應禱告敬拜者，使他們能為城市的平安來守望；還有一部份要供應行政同工，他們的事奉使其他三種事奉無後顧之憂。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  另有當獻的供物，總數也是十分之一，神規定猶太人每年三次到神面前獻祭吃喝快樂，記載在申命記十四22~23，十六1-17，這是眾聖徒在神面前共同使用的花費。應用在今日的教會，可包括教會建築、空調、音響、設備、樂器、水電費、備餐、聯誼佈道、各種雜支……等等。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  此外還有第三種十分之一，是三年一次，用於愛心的幫補（申十四28~29），可幫助窮人或有需要的人，包含寄居的、孤兒寡婦、利未人、貧窮人、失業者等。所以十分之一不是奉獻的總數，而是奉獻的單位。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  無論是支持全職事奉神的人，眾聖徒共同使用的花費，或是關懷幫補有需要的人，都需要人人實行奉獻。至少先有一個什一奉獻，進而有二個什一奉獻、三個什一奉獻。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  當我們如此行，神說他會打開天上的窗戶傾福於我們（瑪三8~10），因此奉獻是蒙福的途徑，也是脫離貧窮的捷徑。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                亞伯拉罕的信心可以成為我們的榜樣，他的信心使他戰勝仇敵，救回兄弟；他的信心使他樂於奉獻，建立典範，也因此持續領受神的恩典。願我們都來學習亞伯拉罕的信心，走信心的道路，付出信心的行動，而經歷神更大的恩典。
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
                '亞伯蘭視羅得為骨肉，羅得被擄後立即率三百一十八名家中壯丁前去爭戰救回，這是出於愛而激發的爭戰信心；屬靈爭戰的部隊有二種——自家生養的壯丁與在地的聯盟。',
                '麥基洗德是撒冷王、至高神的祭司，「公義的王」「平安王」，無父無母無族譜，預表耶穌基督；亞伯拉罕將戰利品的十分之一獻給他，這是什一奉獻最早的榜樣，早於摩西律法。',
                '什一奉獻反映人與神正確的關係，並非出於律法而是出於信心與感恩；瑪拉基書提到當納的十分之一（供養全職事奉者）與當獻的供物（眾聖徒共用花費），還有三年一次用於愛心幫補的十分之一。',
                '羅得獲救後未儆醒仍住在所多瑪，最終遭天火滅城；越有引誘與罪惡的大城市，越容易先遭神審判，基督徒當為此儆醒禱告。',
                '奉獻是承認神的主權、蒙福的途徑；神應許打開天上的窗戶傾福給願意什一奉獻的人（瑪三8-10）。',
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
              '亞伯蘭有爭戰的信心，願意付代價去打戰，以拯救姪兒羅得。今日為拯救親友的靈魂，也需要付代價進行屬靈爭戰。請分享你個人這方面的感動，以及可能的具體行動。',
              '亞伯蘭帶著自家生養的精煉壯丁去打仗，也有當地朋友協同作戰，以致大獲全勝。這件事對你有何啟發？當如何培養自家的精兵，來進行屬靈爭戰？當如何與同地區其他教會建立關係，以致能在城市裡作聯合性的福音事工？',
              '亞伯蘭有什一奉獻的榜樣，不是出於律法，乃是出於信心與感恩。聖經教導哪幾種什一奉獻？試想自己如何實行奉獻？可以怎樣更有信心來奉獻？',
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
