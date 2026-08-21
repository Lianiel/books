import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book38Ch7() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">第七章</h1>
        <h2 className="text-xl font-semibold text-gray-700">如何聆聽神的聲音</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">一、《生命之旅》桌遊——「我認識這款遊戲的製作者」</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸以朋友熱愛的桌遊《生命之旅》（Game of Life）開場：圖板上畫著人生之路和一系列方格，玩家轉盤決定前進格數，方格則要求玩家做出選擇——就業或讀大學、借貸或買賣、吃漢堡還是義大利麵。朋友一本正經地說：「一切都與我們的選擇和隨之而來的後果有關。」陸可鐸打斷他：「我今天早上才剛和製作這款遊戲的祂說話呢——我在禱告中與祂交談。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                他說，按照上帝的計劃，我們的人生由一連串決定組成：要搬家還是留下？要堅持還是放手？該結婚嗎？無論是攸關人生的大事還是雞毛蒜皮的小事，抉擇無所不在——做決定的過程不僅消耗能量，還會激起我們心中的焦慮：做錯選擇怎麼辦？他引詩篇二十三篇3節：「他為自己的名引導我走義路」，說明上帝是好牧人，不只餵飽我們，也帶領我們，糾正我們，為我們指明前方的路，賜下聖靈引導我們穿越曲折的路。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">二、雲柱與火柱——以色列人出埃及的引導</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸講述以色列人的故事：他們世世代代困在埃及，從未跨過邊界，然而法老釋放了他們，紅海分開，應許之地正向他們招手——但他們缺乏旅行的經驗，光靠自己無法生存，因此「日間，耶和華在雲柱中領他們的路；夜間，在火柱中光照他們」（出埃及記十三章21節）。他描述：每一天神都告訴他們前行的方向，摩西和領袖們停下腳步，直等到巨大的雲柱轉向，跟隨雲柱而行，做決定的壓力限縮到只需朝天仰望。他引以賽亞書六十三章11-14節，指出蘊藏在雲柱和火柱之中的力量正是聖靈：「將他的聖靈降在他們中間的在哪裡呢……」他總結：帶領那些曾經為奴的人穿越紅海和曠野的是聖靈，如今引導神兒女的，同樣還是聖靈！我們擁有與希伯來人同樣的祝福，只差沒有從天供應的嗎哪。他引耶穌的應許：「只等真理的聖靈來了，他要引導你們明白一切的真理」（約翰福音十六章13節）。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">三、不要效法這個世界——土耳其牧羊跳崖的故事</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸問：我們該如何學會跟隨聖靈？為什麼有時候無法察覺祂的同在？他引羅馬書十二章2節：「不要效法這個世界，只要心意更新而變化，叫你們察驗何為神的善良、純全、可喜悅的旨意。」他解釋，神希望我們分別為聖，不是要標新立異，而是要明白活著的目標不是融入這個世界，而是抬頭仰望上帝——正如出埃及記二十三章2節所說：「不可隨眾行惡。」他分享一個真實的悲劇：土耳其牧羊人目睹近1,500隻羊跳下懸崖——一隻羊不知怎麼跳了，第二隻也跟著跳，接著好幾十隻批量跳下，牧羊人無能為力，1,500隻羊中有450隻死亡，其餘僥倖落在先跳崖的羊屍體上而存活。他評論：那些羊完全沒有思考，若有的話，牠們可能會想「跳崖確實很蠢，但總不會同時幾百隻羊一起犯蠢吧」——結果完全有可能。他提醒：如果你和愚蠢的羊群一同奔跑，就無法像老鷹一樣翱翔；想聽到神的聲音，首先要問的不是「我該怎麼做？」而是「我該聽誰的？誰有權柄？誰在我生命中做主？」——若答案是人、電視名人、星座算命塔羅牌，就無法辨別神的旨意，正如羅馬書八章14節：「凡被神的靈引導的，都是神的兒子。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">四、會幕與聖靈內住——「神在這裡」</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸描述，在曠野顛沛流離期間發生一件美妙的事：神指示摩西建造一座帳幕，祂將住在其中——完工後，雄偉的雲從天上降下，進入聖所，「耶和華的榮光就充滿了帳幕」（出埃及記四十章34節）。從那時起，上帝不再遙不可及，而是與百姓同住，每個以色列人都可以指著會幕說：「神就在那裡。」陸可鐸說：現在，請你想著這個場景，按著自己的心說：「神在這裡。」在你決定跟隨耶穌的那天，無形的奇蹟就發生了——聖靈從天而降，像旋風般席捲而來，直到停留在你身上，祂內住在你裡面，你就是祂的居所，正如耶穌所應許：「真理的聖靈……與你們同在，也要在你們裡面」（約翰福音十四章17節），以及哥林多前書三章16節：「豈不知你們是神的殿，神的靈住在你們裡頭嗎？」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">五、聖靈藉著聖經說話——南美洲繳稅的例子</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸說，神的靈住在我們裡面，透過經文和聲音來引導我們——「並戴上救恩的頭盔，拿著聖靈的寶劍，就是神的道」（以弗所書六章17節），聖靈主要透過神的話語與我們溝通，「你的話是我腳前的燈，是我路上的光」（詩篇一百十九篇105節）。他對比世俗與聖經的說法：人們說「淨資產決定你的價值」，聖經說「你之所以重要，是因為你是神的創造」；人們說「隨心所欲吧」，聖經說「有一條路，人以為正，至終成為死亡之路」（箴言十四章12節）；人們說「神也不在乎我們」，聖經說「神愛世人，甚至將他的獨生子賜給他們」（約翰福音三章16節）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                他分享自己在南美洲服事時，宣教士們不確定是否該向巴西政府繳納所得稅——收入來自美國、技術上免稅，但住在巴西、使用當地公共服務。他查考聖經時發現，耶穌曾告訴彼得，猶太人並不真的有義務向羅馬人納稅，卻仍吩咐彼得去釣魚拿魚口中的錢繳稅，「但恐怕觸犯他們……可以拿去給他們，作你我的稅銀」（馬太福音十七章27節）。他打趣說：神的靈用神的話語給了他答案——先去讀聖經吧。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">六、聖靈藉聲音與異象說話——保羅的馬其頓異象、安提阿教會的差派</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸說，接著要傾聽聖靈的聲音——祂的聲音可能來自內心的感覺、是讀經時的「領悟」，也可能來自明智的建議、夢境或異象。他舉使徒行傳的例子：保羅和同伴打算前往一座城市，「耶穌的靈卻不許」，不久「在夜間有異象現與保羅」，一個馬其頓人求他過去幫助他們（使徒行傳十六章7、9節），保羅順服了，呂底亞因此受洗，成為歐洲第一個基督徒。他也舉安提阿教會的例子：領袖們事奉主、禁食時，「聖靈說：『要為我分派巴拿巴和掃羅，去做我召他們所做的工』」（使徒行傳十三章2-3節）。陸可鐸坦言：他們聽到的聖靈聲音是什麼樣的，我不知道；是聽得見的聲音嗎？是透過某位領袖傳話，還是天上雲朵拼出文字？這些我都不知道——我知道的是：聖靈對他們說話，而祂依然在說話。他鼓勵讀者開始和聖靈對話，請求祂的指引、聆聽等待祂的回應——聖靈經常透過我們的意念說話，這並不奇怪，因為聖靈掌管我們的思想，我們的身體是祂的殿。
              </p>
              <p className="text-gray-700 leading-relaxed">
                他強調：「被神的靈引導」是多麼令人喜悅的事——聖靈不像牛仔驅趕牛群那樣鞭策我們，而是像牧羊人引導羊群般溫柔地引導我們；聖經超過兩百次說「神是我們的牧者」，神帶領我們的意志，比我們跟隨祂的決心更堅定，所以放輕鬆吧！他引箴言三章5節：「你要專心仰賴耶和華，不可倚靠自己的聰明。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">七、甜甜圈店的糗事——不要操縱環境當作神的印證</h3>
              <p className="text-gray-700 leading-relaxed">
                陸可鐸分享一個引以為誡的故事：有個人跟妻子說他決定不再每天買甜甜圈，結果當天回家卻帶了一打新鮮出爐的甜甜圈——他解釋，開車經過麵包店時感覺有人催促他進去買，於是禱告：「主啊，我應該買甜甜圈嗎？我會繞麵包店一圈，如果是的話，就給我一個空停車位吧。」結果他繞了麵包店十圈，終於找到了空位。陸可鐸提醒：不要試圖操縱環境，直到你希望的結果出現。他鼓勵讀者，先去研讀聖經，因為神的旨意永不與祂的話語相抵觸——尋求指引、需要引導、處在人生十字路口，就打開聖經；只要打開聖經，神就會開口說話。他總結：聖靈藉著聖經和祂的聲音，引導我們前往應許之地，神在呼召我們，繼續留心聽吧——祂創造了人生這場遊戲，且樂於教我們如何玩下去。
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
                '正如雲柱火柱引導以色列人出埃及，如今引導神兒女的同樣是聖靈——我們擁有與希伯來人一樣的祝福，甚至比他們更近，因為聖靈直接內住在我們裡面。',
                '「不要效法這個世界」是聽見神聲音的前提——土耳其跳崖羊群的故事提醒我們，盲目從眾往往導致毀滅性的後果。',
                '想聽見神的聲音，關鍵問題不是「我該怎麼做」，而是「我該聽誰的、誰在我生命中做主」——若答案不是神，就無法辨別祂的方向。',
                '聖靈住在信徒裡面，主要透過聖經話語與我們溝通——「先去讀聖經吧」是陸可鐸給所有尋求引導之人最基本也最重要的建議。',
                '聖靈也可能藉著內心的感覺、明智的建議、夢境或異象說話（如保羅的馬其頓異象），但這些都應與聖經真理相符、彼此印證。',
                '「甜甜圈店」的糗事提醒我們：不要用操縱環境的方式（如刻意設計條件）來「測試」神的心意，這容易淪為自我合理化的手段。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「擺放羊毛」（求印證）的禱告方式，聖經根據與限制在哪裡？</h4>
              <p className="text-gray-700 leading-relaxed">
                陸可鐸提到甜甜圈店的例子，這與士師記六章36-40節基甸「擺放羊毛」求印證的故事有相似之處——基甸兩次求神用羊毛沾露或不沾露來確認祂的旨意，神也回應了。但值得留意的是，基甸求印證的背景，是他已經清楚領受了神的呼召（要拯救以色列），只是對自己的軟弱信心不足，才進一步求證；這與「刻意設計一個條件、讓環境替自己做決定」的心態並不完全相同。健康的分辨方式，應以聖經清楚的教導為主要依據，個人化的「求印證」可以作為軟弱時的輔助，但不宜成為逃避運用智慧、獨立思考的替代品。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「神不再用雲柱火柱引導我們」，這個變化反映了怎樣的救恩史進程？</h4>
              <p className="text-gray-700 leading-relaxed">
                舊約時代神透過外在、可見的方式（雲柱、火柱、會幕、先知）向百姓啟示旨意，新約時代則因五旬節聖靈澆灌，神的同在從「外在可見的引導」轉變為「內住信徒心中的引導」（約珥書二章28-29節「以後，我要將我的靈澆灌凡有血氣的」在使徒行傳二章應驗）。這個轉變的神學意義是：不再需要透過特定的聖所、特定的中介者才能親近神，每一個信徒都能直接被聖靈引導——這其實是一種更親密、更直接的引導方式，而非「降級」的引導。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">如何分辨「聖靈的聲音」與「自己內心的想望」？</h4>
              <p className="text-gray-700 leading-relaxed">
                這是操練聆聽聖靈時最實際的挑戰之一。陸可鐸強調「先去讀聖經」的優先次序，正是提供了一個重要的檢驗標準：任何聲稱出於聖靈的感動，都不應與聖經明確的教導相抵觸（約翰壹書四章1節「一切的靈，你們不可都信，總要試驗那些靈是出於神的不是」）。此外，健康的分辨過程通常也包括：與屬靈成熟的同伴或牧者核對、觀察這個感動是否帶出聖靈的果子（加拉太書五章22-23節）、以及願意耐心等候而非急於用單一感動作出重大決定。
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
              '你上次需要做出重大抉擇是什麼時候？你最終是如何做出這個決定的——禱告、與朋友討論、列出利弊，還是其他方式？',
              '「想要聽到神的聲音，首先你要問的不是我該怎麼做，而是我該聽誰的？」現在誰在你生命中掌權？這個聲音是否引導你前往神所期望的方向？',
              '你是否曾因為「從眾」而走錯方向？如果有，後果是什麼？你是否曾抵抗過隨波逐流的誘惑？神當時是如何引導你的？',
              '你相信聖靈內住在你裡面嗎？如果是，你怎麼知道的？這個信念對你的日常生活有什麼實際影響？',
              '聖經曾經幫助你做決定嗎？如果有，是如何幫助的？你覺得聖靈的聲音是什麼樣子？又不該是什麼樣子？',
              '你是否曾試圖用「求環境印證」的方式來確認神的心意（像甜甜圈店的故事）？回顧那次經歷，你會怎麼評估這樣的做法？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 為一個具體決定查考聖經</h4>
              <p className="text-gray-700 mb-2">挑一個你目前正在猶豫的決定，花時間打開聖經（而非先問人或滑手機找答案），看看神的話語對這件事有什麼原則性的教導。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🐑 檢視「我在聽誰的」</h4>
              <p className="text-gray-700 mb-2">
                誠實列出你生命中影響你做決定的幾個聲音來源（社群媒體、特定的人、過去的習慣），逐一問自己：這個聲音是否引導我更靠近神？
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🤫 操練安靜聆聽</h4>
              <p className="text-gray-700 mb-2">
                每天找五分鐘安靜的時間，不說話、不列清單，單純問神：「祢今天要對我說什麼？」把浮現的意念、經文或感動記錄下來，觀察一段時間後是否有一致的引導。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「聖靈，求祢像雲柱火柱引導以色列人一樣引導我。幫助我不隨從世界的聲音，也不隨波逐流。求祢讓我在聖經中清楚聽見祢的心意，也讓我學會分辨祢在我心裡的聲音。我專心仰賴祢，不倚靠自己的聰明。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
