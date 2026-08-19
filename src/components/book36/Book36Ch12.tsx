import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book36Ch12() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    exploration: true,
    questions: true,
    practice: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-fuchsia-700 to-purple-700 bg-clip-text text-transparent">第十二講</h1>
        <h2 className="text-xl font-semibold text-gray-700">人的門徒和基督的門徒</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-fuchsia-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-fuchsia-50 to-purple-50 hover:from-fuchsia-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-fuchsia-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">一、鷹的聚集六年來的見證</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔開場強調，高階的屬靈爭戰必須出於神的任命，有任命才有權柄。她回顧「鷹的聚集」六年來的歷程：為原住民悔改代禱後，破除了嚴重旱災（南北原住民保留區冒雨跳舞的見證，詳見第七講）；在佛羅里達傑克遜維爾、阿拉巴馬伯明罕為美國黑人與奴隸暴行悔改代禱後，她說收到至少十四、十五件相關法律被改變、司法委員會成立、部分過去被判無罪的謀殺案重新審理定罪的回應紀錄。她也分享波特蘭州一次她稱為「代禱者高峰會議」的聚集，眾人合一為布希總統與以色列的關係代禱；聚集結束後，她開車途中聽聞阿拉斯加發生地震，她說神向她啟示，這場地震正是印證他們代求已蒙應允的自然界記號。她也提到，她相信神親自向她啟示，儘管布希總統在任內參與了以色列部分領土的分割協議，這其實是神揀選他來完成的心意，為要藉此帶下以色列的復興。她說，主也在華盛頓DC、傑克遜維爾等聚集中彰顯神跡奇事與復興的初熟果子，並預告當年八月、十月即將舉行的鷹的聚集會迎來更大的榮耀傾倒，這一切都是為預備美國迎接即將到來的復興；她引述一次三小時的異象造訪中耶穌對她說的話：若他們忠實完成神的託付，美國將迎來復興，若未能達到完全順服，美國本土將迎來的不是復興而是戰爭。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">二、循序漸進的教導——為何不直接講「高層次」的代禱</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔坦言，她其實更習慣直接分享高層次、多數基督徒不熟悉的代禱經歷，但與她同工的江秀琴牧師堅持循序漸進的教導原則——從嬰孩帶到少年、青年、再到成年，一步步建造，而不是「大躍進」。她說，這對她而言其實是一種約束，但她認同這是有智慧的做法：唯有雙翼能從山腳直飛山頂的人是少數，大多數人需要學習如何一步步爬山。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">三、禱告是神聖的，不是一場屬天的西洋棋</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔分享她寫第一本禱告書時，走訪基督教書店收集所有禱告相關書籍，卻發現大多是「如何做」的公式書——教人只要這樣禱告，事情就會發生。她認為這類教導把禱告變成了一種猜測神心意的遊戲，彷彿人可以移動自己的棋子將神的軍，逼迫神做祂不願做的事。她鄭重地說：「禱告是神聖的，是人類所能從事最神聖的事情」，不該被輕忽對待。她解釋，神回應初信者「聽起來可笑」的禱告，是出於父親對孩子單純的愛；但隨著信徒成長，神期待人學習明白祂的法則，而不是停留在孩童式討價還價的禱告方式，也不該用抱怨、喃喃自語或整夜與神爭辯的態度來禱告。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">四、人的門徒 vs. 基督的門徒</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔提出一個重要的區分：有些基督徒是「人的門徒」，而非「基督的門徒」。她描述「人的門徒」的特徵：主日到教會、聽牧師講道，週一起就過自己的生活；他們熟悉如何在對的場合說對的話，讓人以為自己是裝備完整的信徒；他們常以跟隨的教會、教派、講員作為自我認同（例如刻意模仿某位知名講員的說話方式）。她說，這樣的人對十字架、捨己、愛與信心的成長一無所知；若他們自認領受了醫治的恩賜，就急著到處按手禱告，卻不是出於愛的信心運行，而是出於人的熱情，也不活在聖靈的管束之下，只活在牧師「你很棒、你很重要」的鼓勵之下。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                相對地，妮塔描述「基督的門徒」：他們背起十字架跟隨耶穌，不怕受苦，每天與耶穌同行，學習謙卑，性格與品德持續被更新改變，對神有極深的渴慕。她用一連串對比描述：當其他基督徒因新教義而驕傲時，他們在尋求更深的謙卑；當其他人在談論禱告時，他們正躲在禱告室裡真正禱告；當其他人追求財富時，他們仔細計算如何多多奉獻；當其他人熟悉最新的影劇文化、生活方式越來越世俗化時，他們躲藏在耶穌裡學習基督。她強調，耶穌明確警告門徒，若世界拒絕了老師，也必拒絕學生——基督的門徒必須經歷被誤解、忍受羞辱，這是認識神唯一的道路，沒有任何捷徑。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">五、神的聖潔——道德上的完全</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說，若必須用一句話形容神的聖潔，那就是「祂道德上的完美」，並用「十分錢硬幣相對於千元美鈔」的比喻（雖不完全貼切）來形容神的完美遠超人的想像。她引「義人的禱告是大有功效的」（雅各書五章16節），指出聖經從未教導不義之人能靠不義的行為蒙神悅納，這與她所理解的《可蘭經》教導形成對比。她強調，若渴望禱告持續蒙應允，就必須活在彰顯神聖潔的正直生活中，也必須教導他人在愛中行事、從論斷中得釋放——這是在神裡面取得更高禱告權柄的唯一途徑。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">六、約翰·雷克與天使的造訪——「禱告是通向神心的門」</h3>
              <p className="text-gray-700 leading-relaxed">
                妮塔分享二十世紀初大有能力的醫治佈道家約翰·雷克（John G. Lake）的一段見證：他在絕望中呼求，思考何為真正的五旬節運動、神要藉此在人裡面成就什麼，這時一位天使與他同行，翻開他手中聖經的使徒行傳，神的靈隨即降下極大的啟示與異象。天使臨走前轉身對他說：「禱告！禱告！禱告！教導人來禱告！禱告，更多的禱告，持續地禱告。」妮塔以此作結：這就是通向神心的門——禱告。
              </p>
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
            <ul className="space-y-3">
              {[
                '「禱告是人類所能從事最神聖的事情」——禱告不是用來操控神的公式或屬天西洋棋，不該被輕慢隨便地對待。',
                '「人的門徒」以人物、教派、講員為認同標籤，主日敬拜與平日生活脫節；「基督的門徒」則每天與耶穌同行，性格持續被更新，甘願為此付上捨己的代價。',
                '基督的門徒常在別人追求驕傲、財富、世俗文化時，選擇謙卑、奉獻、躲藏在禱告室裡——這種「反其道而行」正是門徒生命的標記。',
                '神的聖潔可以概括為「道德上的完美」；「義人的禱告是大有功效的」，正直與聖潔的生活是取得更高禱告權柄的唯一途徑。',
                '約翰·雷克天使造訪的見證，把整個系列課程的核心信息濃縮成一句話：禱告是通向神心的門。',
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
              <h4 className="font-semibold text-gray-800 mb-2">將天災（地震）解讀為特定禱告蒙應允的「印記」，該如何看待？</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔將阿拉斯加地震理解為神給她的個人印記，這是她本人與神之間主觀的屬靈溝通經歷，聖經中確實有神以特定記號回應個人禱告的先例（如士師記六章基甸的羊毛）。但讀者需謹慎，不宜將任何自然災害的發生，普遍地解讀為對特定禱告或政治立場的「印證」——這類詮釋帶有強烈的個人性和事後回溯性，套用在自己的處境時，應避免把「巧合的時間點」直接等同於神明確的旨意宣告，也不宜以此評斷受災者的屬靈狀況。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">將特定政治人物或外交決策視為神「揀選」的心意，需要什麼樣的判斷力？</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔提到相信神揀選了某位美國總統來促成以色列領土分割的協議，這涉及高度複雜且具爭議性的中東政治議題，不同基督徒群體（包括支持巴勒斯坦權益的基督徒）對此類外交決策可能有截然不同的神學與政治判斷。讀者應留意，這是講者個人在特定神學傳統（親以色列末世論）下的信念表達，不宜當作普遍適用的政治立場依據，公共政策的評斷本身涉及多元價值，基督徒對同一議題持不同看法是完全可能且合理的。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「人的門徒 vs. 基督的門徒」的區分，是否有論斷他人的風險？</h4>
              <p className="text-gray-700 leading-relaxed">
                這個區分本身有聖經根據（如加拉太書一章10節「我現在是討人的喜歡，還是討神的喜歡呢？」），提醒信徒警惕表面化、隨波逐流的信仰。但在實際應用時，應避免僅憑外在行為（如是否追劇、是否談論知名講員）快速給他人貼上「人的門徒」的標籤——每個人屬靈成長的階段不同，健康的自我省察應著重在自己與神的關係，而非成為評斷他人的量尺。
              </p>
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
              '誠實自省：你的信仰認同，更多建立在「跟隨哪位講員或教派」，還是「每天與耶穌同行的關係」？',
              '「禱告不是屬天的西洋棋」——你過去是否曾把禱告當成一種可以操作、換取結果的公式？這句話對你有什麼提醒？',
              '本講列出一連串「當別人……你卻……」的對比，哪一句最刺痛你、也最讓你有共鳴？',
              '面對本講涉及的政治與天災解讀，你會如何在「相信神掌管歷史」與「避免把個人政治立場神聖化」之間拿捏？',
              '「禱告是通向神心的門」——這句簡單卻分量十足的話，如何影響你接下來安排時間的優先次序？',
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
              <h4 className="font-semibold text-green-700 mb-2">🔍 檢視自己的「信仰標籤」</h4>
              <p className="text-gray-700 mb-2">誠實列出你目前用來描述自己信仰身分的詞語（教派、講員、事工名稱），問自己：這些標籤底下，我與耶穌本人的關係有多真實、多每天更新？</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✝️ 選一件需要捨己的小事去實踐</h4>
              <p className="text-gray-700 mb-2">
                這一週選一件你原本會為自己爭取、卻可以選擇讓步或謙卑退讓的小事，刻意去實踐它，並在禱告中把這個經歷帶到神面前。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，求你光照我，我的信仰是否只是跟隨人的教導、卻沒有真正跟隨你。求你使我不滿足於做人的門徒，而甘心背起十字架，成為真正與你同行的門徒。教導我禱告，教導我更多禱告，因為這是通向你心的門。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
