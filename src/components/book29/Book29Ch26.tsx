import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch26() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第二十六章</h1>
        <h2 className="text-xl font-semibold text-gray-700">失去根的人</h2>
        <p className="text-gray-500 mt-1">耶和華說：「你作了甚麼事呢？你兄弟的血有聲音從地裡向我哀告。地開了口，從你手裡接受你兄弟的血。現在你必從這地受咒詛。你種地，地不再給你效力；你必流離飄蕩在地上。」……於是該隱離開耶和華的面，去住在伊甸東邊挪得之地。創世記四10-16</p>
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
              <p className="text-gray-700 leading-relaxed mb-3">
                始祖被造在伊甸園裡，以家園來講，伊甸園是人類的根。但神是伊甸園的主人，人是神所造的，所以神是更重要的根。人被趕逐離開伊甸園，還能尋求神，接受神的救恩，這時候只剩下神是人的根。然而當該隱連神的救恩都不要了，他就失去這個最重要的根。過程中，他本來與亞伯有彼此幫助、互相看守的責任，但他完全否認，甚至因忌妒而將亞伯殺死，所以家庭的根也失去了。他與亞伯本來生活在距離伊甸園比較近的地方，地也能為他效力，但現在地開了口，接受亞伯的血，這地就不再為他效力了，他失去了另一個原可替代伊甸園的根。
              </p>
              <p className="text-gray-700 leading-relaxed">
                他最終成為流離飄盪的人，像無根的浮萍一般。世人以該隱為代表，都是失去根的人，失去神的根，失去家的根，失去地的根。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、失去神的根</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                這段聖經兩次說到該隱離開神的面，創世記四14：「你如今趕逐我離開這地，以致不見你面；……」創世記四16：「於是該隱離開耶和華的面，去住在伊甸東邊挪得之地。」信神與不信神的差別，不在於是否知道或相信神存在，乃在於是否信靠神的話、遵行神的話。因此，該隱乃是不信神的人。正如雅各所說：「19你信神只有一位，你信的不錯；鬼魔也信，卻是戰驚。20虛浮的人哪，你願意知道沒有行為的信心是死的麼？」（雅二19-20）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                該隱不信靠神、不聽從神，卻還能見神的面，但這次見神的面只是最後聽神的審判而已。這成為末日白色大寶座審判的預表，那時所有不信的人都要復活站立在神面前，那是他們最後一次見神的面，從此以後就要被丟到硫磺火湖裡，再也不能見神的面了。（啟二十11-15）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神是人生命的根源，人犯罪後無法得到神屬靈生命的供應，但至少還有空氣、雨水、陽光、肉體的生命氣息，這些都是神所供應的。這是普遍性的恩典，如同馬太福音五45所說：「……他叫日頭照好人，也照歹人；降雨給義人，也給不義的人。」這些普遍性的恩典是有階段性、時效性的，在人活著的這個階段，趁著還有普遍性恩典，務必來尋求羔羊的贖罪救恩。人若在贖罪福音臨到時予以拒絕，有可能就不再有機會了，因為人生命的長短不在自己手中。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記四16：「……去住在伊甸東邊挪得之地。」第廿四章說過，亞當、夏娃是被放逐到伊甸園的東邊，因為神派基路伯在伊甸園的東邊把守道路。現在該隱是往更東邊的地方去，那地方叫作挪得。「挪得」有飄盪、流亡的意思，一個逃犯去到飄盪之地，可算是流亡。
              </p>
              <p className="text-gray-700 leading-relaxed">
                該隱腦海裡有著亞伯獻頭生羊羔蒙神悅納、自己獻土產不蒙神悅納的這段故事。這個故事乃是一個最古老的福音，若他願意反思、認罪、悔改，並效法亞伯獻羊羔，即使在挪得之地，仍然可以重新尋找到神，因為神是無所不在的。他若願意將這故事告訴後代子孫，他的子孫仍可以來尋求神。但如果他不願意反思、悔改，也不傳遞神的啟示給後代子孫，那他的後裔就繼續成為失去根的人，沒有得救的希望。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、失去家的根</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記四9a：「耶和華對該隱說：你兄弟亞伯在那裡？」在創世記裡面，神對人共發出兩個問題，第一個問題是問亞當：「你在那裡？」第二個問題是問該隱：「你兄弟在那裡？」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                第一個問題是關於神與人的關係。人離棄神，失喪了，不知道自己在哪裡，所以神要問他：「你在那裡？」第二個問題是關於人與兄弟的關係。人不顧念兄弟情誼，殺了兄弟，與家人關係斷絕了，所以神要問：「你兄弟在那裡？」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                該隱回答：「我不知道！我豈是看守我兄弟的麼？」（創四9）這個回答顯示出，該隱完全沒有兄弟之間的愛，沒有任何責任感。神剛造人時，就說人有看守的責任（創二15），所用的字與這裡是同一個字，人要看守園子裡的物，也要看守園子裡的人。亞當沒有把妻子看守好，結果妻子去吃了禁果，該隱不知道有看守兄弟的責任，結果殺了兄弟。該隱殺了亞伯，所做的跟看守完全相反。我們有看守家人的責任，雖沒有殺任何人，只是缺乏警醒看守，也可能會發生家人遭害的事。新聞報導時有所聞，嬰兒沒看好，爬窗摔落；老人沒看好，跌倒重傷；夫妻沒守望好，感情出軌；兄弟不和睦，產生家庭紛爭，甚至互相殘殺。我們對家人有看守的責任，使全家人得蒙保守，這是神設立家庭的目的之一。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                提摩太前書五8：「人若不看顧親屬，就是背了真道，比不信的人還不好，不看顧自己家裡的人，更是如此。」看顧的對象可以從家人延伸到親屬，再延伸至沒有血緣關係的孤兒寡婦，如雅各書一27所說：「在神我們的父面前，那清潔沒有玷污的虔誠，就是看顧在患難中的孤兒寡婦，並且保守自己不沾染世俗。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們所面對的危險，不僅來自看得見的世界，也來自看不見的世界，如彼得前書五8所說：「務要謹守，儆醒。因為你們的仇敵魔鬼，如同吼叫的獅子，遍地游行，尋找可吞吃的人。」使徒彼得詳細說到如何看守：「7萬物的結局近了。所以，你們要謹慎自守，儆醒禱告。8最要緊的是彼此切實相愛，因為愛能遮掩許多的罪。」（彼前四7-8）持續的同心禱告與彼此相愛是最好的看守，若不能禱告與相愛，難免會發生忌妒紛爭、相咬相吞的事。因為有三仇敵（撒旦、世俗、私慾）一直想要使我們去犯罪。現在台灣眾教會在推動的復興禱告小組（RPG），能有效幫助我們同心禱告、彼此相愛。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                使徒約翰把如何彼此相愛講得更詳細：「14我們因為愛弟兄，就曉得是已經出死入生了。沒有愛心的，仍住在死中。15凡恨他弟兄的，就是殺人的；你們曉得凡殺人的，沒有永生存在他裡面。16主為我們捨命，我們從此就知道何為愛；我們也當為弟兄捨命。17凡有世上財物的，看見弟兄窮乏，卻塞住憐恤的心，愛神的心怎能存在他裡面呢？18小子們哪，我們相愛，不要只在言語和舌頭上，總要在行為和誠實上。」（約壹三14-18）耶穌曾說，亂罵弟兄就是殺人（太五21-22）；使徒約翰說，恨弟兄就是殺人（約壹三15）；馬丁路德以愛來解釋十誡，他說，不夠愛人就是殺人了。該隱殺亞伯，也是先從不夠愛開始的。
              </p>
              <p className="text-gray-700 leading-relaxed">
                關於看守弟兄，主耶穌在馬太福音廿五章有更深刻的表達：當人子在他榮耀裡、同著眾天使降臨的時候，要坐在他榮耀的寶座上，把萬民分別出來，好像牧羊的分別綿羊山羊一般。王要向那右邊的說：「你們這蒙我父賜福的，可來承受那創世以來為你們所預備的國；因為我餓了，你們給我吃，渴了，你們給我喝；我作客旅，你們留我住；我赤身露體，你們給我穿；我病了，你們看顧我；我在監裡，你們來看我。……這些事你們既做在我這弟兄中一個最小的身上，就是做在我身上了。」王又要向那左邊的說：「你們這被咒詛的人，離開我！進入那為魔鬼和他的使者所預備的永火裡去！……這些事你們既不做在我這弟兄中一個最小的身上，就是不做在我身上了。」這些人要往永刑裡去；那些義人要往永生裡去。（太廿五31-46）最後的審判，不僅看你跟神的關係，也看你跟弟兄的關係，因為你跟弟兄的關係會反映你跟神的關係。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、失去地的根</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記四10：「耶和華說：你作了甚麼事呢？你兄弟的血有聲音從地裡向我哀告。」「哀告」這個字在舊約中出現多次，少部分講向人哀求，大部分都是講向神哀求、呼求。這裡我們看見，地也能跟人一樣向神哀告，而且創四11-12繼續說到：「地開了口，從你手裡接受你兄弟的血。現在你必從這地受咒詛。你種地，地不再給你效力；」所以地好像是活的，是有生命的，它會對住在上面的人做出回應。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                民數記卅五33：「……血是污穢地的；若有在地上流人血的，非流那殺人者的血，那地就不得潔淨（潔淨原文作贖）。」撒母耳記下廿一1：「大衛年間有饑荒，一連三年，大衛就求問耶和華。耶和華說：這饑荒是因掃羅和他流人血之家殺死基遍人。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                所以我們不可流人血，以致玷污這地。有時我們遭遇旱災、有饑荒、有瘟疫，不是單單來求神下雨、解除旱象、除去瘟疫，乃是要為流人血的罪來認罪悔改，轉離惡行，神才會垂聽。如歷代志下七13-14所說：「13我若使天閉塞不下雨，或使蝗蟲吃這地的出產，或使瘟疫流行在我民中，14這稱為我名下的子民，若是自卑、禱告，尋求我的面，轉離他們的惡行，我必從天上垂聽，赦免他們的罪，醫治他們的地。」目前台灣流人血的罪蠻嚴重的，尤其是大量的墮胎。我們需要有禱告及行動，改變立法，使墮胎有所限制及減少，也要扭轉放縱情慾的社會風氣，才能減少流人血的罪。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記四12-16：「12你種地，地不再給你效力；你必流離飄蕩在地上。13該隱對耶和華說：我的刑罰太重，過於我所能當的。14你如今趕逐我離開這地，以致不見你面；我必流離飄蕩在地上，凡遇見我的必殺我。15耶和華對他說：凡殺該隱的，必遭報七倍。耶和華就給該隱立一個記號，免得人遇見他就殺他。16於是該隱離開耶和華的面，去住在伊甸東邊挪得之地。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神對該隱殺兄弟的處罰，不是死刑，而是放逐、流亡。相似於箴言廿八17所說：「背負流人血之罪的，必往坑裡奔跑，誰也不可攔阻他。」神對該隱是寬容的，而且還給該隱立一個記號，免得人遇見他就殺他。會遇見的人，其實也是該隱、亞伯的兄弟，那些人可能會想為亞伯報仇，而來殺該隱。神立記號，是有功效的，因為是在亞當之後的第一代，人們對於神多少有一點敬畏之心。這件事也在中國字當中留下一個記錄，甲骨文「兇」字，是「兄」抓住一個「人」，且頭上有一個記號。這正與人類第一個殺人事件吻合──該隱為兄，殺了亞伯，神在他身上立記號，免得別人殺他。這記號表明他是第一位「兇手」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                不過該隱相對於亞當，真的是每況愈下，亞當犯罪使地受咒詛，並被趕出伊甸園，必須終身勞苦才能從地裡得吃的。該隱犯罪是從地受咒詛，地不再為他效力，且被放逐到更遠的挪得之地。兩次咒詛可比較如下：
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記三17：「又對亞當說……地必為你的緣故受咒詛；你必終身勞苦才能從地裡得吃的。」創世記四11-12：「地開了口，從你手裡接受你兄弟的血。現在你必從這地受咒詛。你種地，地不再給你效力……」
              </p>
              <p className="text-gray-700 leading-relaxed">
                我們也當警醒，恐怕地不再為我們效力，我們會像該隱被地吐出去。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                關於流人血的罪，在挪亞出方舟之後，神立了一個律法，就是創世記九6所說：「凡流人血的，他的血也必被人所流，因為神造人是照自己的形像造的。」基本上，歷代以來對於殺人罪的處理，一個是處死，一個是長期監禁或放逐，分別都有聖經的原則與先例。但二者的效果不同，對於第一個世代的人類，神比較寬容，使得罪惡的蔓延比較快，僅大約一千五百年，全地就滿了強暴，而遭致大洪水的審判。對於第二世代的人類，神比較嚴格，規定殺人者死，所以約束力比較強，第二代人類已延續約四千五百年。目前有廢死刑的風潮，這樣做的結果，就是會加速整體社會的強暴、殺戮、崩壞，使第二次的審判更快來到。基督徒所能做的，除了禱告，就是愛人關心人、傳福音給人、帶領人作主門徒，好預備迎接主再來。
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
                '該隱是世人的代表，失去三個根：失去神的根（離開耶和華的面）、失去家的根（殺了兄弟、否認看守責任）、失去地的根（地不再效力、流離飄蕩）。',
                '信與不信的差別不在於是否知道神存在，乃在於是否信靠、遵行神的話；該隱最後一次見神的面只是聽審判，預表末日白色大寶座的審判（啟二十11-15）。',
                '普遍性恩典（空氣、雨水、陽光）有階段性、時效性，人當趁還有機會尋求羔羊的贖罪救恩。',
                '神設立家庭的目的之一是彼此看守：不夠愛人就是殺人（太五21-22、約壹三15）；持續同心禱告與彼此相愛是最好的看守；最後的審判不僅看人跟神的關係，也看人跟弟兄的關係。',
                '地是有回應的：流人血玷污地，地會向神哀告；遭遇天災瘟疫時，當為流人血的罪認罪悔改、轉離惡行（代下七13-14），神才醫治地。',
                '神對該隱的處罰是放逐而非死刑，並立記號保護他，顯出神的寬容；甲骨文「兇」字正留下該隱事件的記錄。洪水後神則立「凡流人血的，他的血也必被人所流」的律法（創九6）。',
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
              '該隱被神審判，成為失去根的人。他失去了哪些根？我是否有何相似之處？',
              '馬丁路德說不夠愛人就是殺人，為落實看守弟兄、彼此相愛，我們當做哪些事？請每人分享一項。',
              '地也像人一樣，會對地上居民所做的事有所回應。這樣的事，有甚麼聖經實例？我們今天如何應用？',
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
