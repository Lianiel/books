import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book36Ch10() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-fuchsia-700 to-purple-700 bg-clip-text text-transparent">第十講</h1>
        <h2 className="text-xl font-semibold text-gray-700">我們在天上的父</h2>
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

            <p className="text-gray-700 leading-relaxed">
              妮塔開場提到，神對華人教會有極大的呼召——要成為地上一支極大的代禱軍隊，她很慶倖能在這件事上盡一點力。她請大家翻回馬太福音六章9-13節的主禱文，這一講要專注在開頭這句「我們在天上的父」。
            </p>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">一、耶穌禱告中的熱情</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔回顧前一講的內容：門徒聽見耶穌禱告時充滿驚異，因為耶穌的禱告全然投入、充滿熱情——不是靠著背誦或記憶，而是出於真正認識父神的熱情。她說，不是父神需要被提醒祂的屬性，而是因著父神裡面那爆炸性的榮耀，耶穌情不自禁地用這樣的方式回應；聽見耶穌禱告時，聖經彷彿變成一本活生生打開的書。她說，這正是門徒請求「教導我們禱告」背後真正渴望的——渴望像耶穌那樣認識父、討父喜悅。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">二、像孩子一樣來到父面前</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔解釋，耶穌教導「我們在天上的父」，首先提醒我們，這位超越一切受造物、萬有都藉著祂存活的神，竟然是我們的父，且比世上任何父親都更溫柔地愛我們。她用一個三歲孩子的比喻：在孩子眼中，父親無所不能，不管問題多大，孩子都相信父親能處理，因此可以毫無懼怕地玩耍奔跑。她說，這正是為什麼耶穌說天國屬於像小孩子的人——我們蒙召放下自我滿足、放下憑自己理解的執著，帶著孩子般的天真來到父面前，篤信父親會處理好一切；越單純地來到神面前，神能為我們的需要動工的空間就越大。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她分享一次自己在靈裡被提到神寶座前的經歷：她發現自己在神面前全然無能，如同一個三歲孩子，裡面沒有什麼有價值的東西可以獻給神，只能空手來到寶座前；但正是這樣的無能與空手，讓她心裡充滿感恩——僅僅能坐在父神榮耀的同在裡，就已心滿意足。她說，當父神突然低頭看她、兩人四目相對時，她心裡爆發出難以言表的喜樂，因為她不只是仰望父的面，父也在注視著她。她強調，神所要的正是這樣的天真無邪，不是我們謀劃著要如何解決問題來到祂面前。
              </p>
              <p className="text-gray-700 leading-relaxed">
                她也提醒，我們見重要人物前會精心打扮、準備得體的言辭，想留下好印象；但來到父神面前完全不需要這樣做，因為祂正是創造我們容貌、思維方式、成長環境的那一位，我們無需讓祂印象深刻——祂已經完全認識我們、深愛我們。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">三、何西阿書中神训練百姓的心腸</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔引何西阿書十一章1-4節：「我教導以法蓮行走，用膀臂抱著他們……我用慈繩愛索牽引他們」，指出許多人以為失敗、跌倒時神會生氣、嚴厲管教甚至厭棄自己，但經文描繪的卻是另一幅圖像——如同父親牽著剛學步的孩子，孩子跌倒時，父親不會責罵「你怎麼這麼笨」，而是充滿鼓勵地說「做得很好」。她說，這正是天父教導我們與祂同行的方式：我們會跌倒、會犯錯，但祂會把我們拉起來、抱在懷中，加給我們力量重新起步；即便是管教，對父神來說也是心痛的事，祂仍是緊緊擁抱著我們，讓我們明白管教本身也是出於愛。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">四、天堂如何回應禱告——三個異象見證</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔分享三個關於禱告在天上如何被回應的異象經歷。第一個：她曾為一件極其看重的事迫切禱告，主向她打開天堂的門，她看見自己的禱告如香升上天，天使接住禱告放進香爐、與香料混合，帶到父神面前；父神看過後點頭同意，交回給天使，一隻美麗的鴿子隨即飛來，帶著禱告的回應飛回她身邊——這個禱告大約花了六個月才完全得著回應，讓她看見神是何等細緻溫柔地照看每一個禱告。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                第二個：她為幾位嚴重得罪神的親近之人代求赦免時，被提到天上一個房間，看見父神與耶穌分別坐在兩個寶座上；耶穌起身俯伏在父面前，帶著強烈的哭泣、哭嚎與呻吟，不斷懇求「紀念我所流的血，饒恕這些人」，持續了很長時間，父神最終說「可以了」，耶穌才起身、點頭、坐回寶座。她藉此說明，天堂回應禱告從不是靠人腦精心策劃的言辭技巧，只因我們有一位慈愛的天父，以及一位深知如何激動天父心意的智慧救主。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                第三個：她曾為三位嚴重犯罪得罪神的人（其中一位是牧師）迫切代求時，被提到主耶穌寶座前，看見一個憤怒的靈站在她與主之間，她能感受到那審判即將被釋放、要奪去這三人的性命，因此極其恐懼戰兢，字字句句都謹慎斟酌，整段代求所說的話加起來不超過三十個詞。最後她對主說：「這些人配得這樣的震怒，但我不能讓你釋放這審判臨到他們——如果這憤怒的靈要因他們的罪臨到他們身上，必須先經過我。」主回答：「這就是我想要的，他們被赦免了。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                妮塔總結，這些經歷讓她認識到：神總是渴望饒恕、渴望祝福、渴望將公義的憤怒轉為憐憫，因為祂是我們慈愛的父；神所尋找的，正是那些願意站在破口中為人代求、願意改變神心意的人（她引用以西結書中「神的眼目遍查全地，尋找一個人站在破口上」的意象）。她相信在末世，神要前所未有地向全地彰顯祂為父的心，並要興起一群深深認識父心、願意付代價分別為聖的人，成為神憐憫（有時也是審判）的器皿。她以「願人都尊你的名為聖」這句禱文作結，預告下一講將深入探討神聖潔的不同面向。
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
                '「我們在天上的父」不只是禱告開頭的稱謂，而是提醒我們可以像孩子一樣，帶著天真的信靠來到一位全能又慈愛的父面前。',
                '來到神面前不需要精心準備、留下好印象——祂是創造我們的那一位，早已完全認識並深愛我們本來的樣子。',
                '何西阿書描繪的天父，是耐心教導孩子學步、跌倒時鼓勵而非責罵的父親——即便管教，也出於愛，並非厭棄。',
                '三個異象見證共同指向一個核心信念：神總是渴望饒恕、渴望將審判轉為憐憫，祂尋找的是願意站在破口中代求的人。',
                '妮塔相信末世神要興起一群深深認識父心的人，成為祂向世界彰顯父性、施行憐憫（有時也是審判）的器皿。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「憤怒的靈」與「站在破口中代求」的意象，如何與神的性情協調？</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔描述的異象中出現「憤怒的靈站在她與主之間」，這類意象在聖經中確實有對應（如撒母耳記下二十四章16節的滅命天使，出埃及記三十二章摩西的代求），但讀者需留意：這類異象是妮塔個人的屬靈經歷分享，屬於見證性質，不是所有代禱者都會經歷同樣具體的畫面。這段內容真正要傳遞的核心真理——神的心始終傾向憐憫而非審判、祂尋找願意代求的人——才是普遍適用的聖經教導（參以西結書十八章23節「主耶和華說，惡人死亡，豈是我喜悅的嗎？不是喜悅他回頭離開所行的道存活嗎？」），異象的細節本身不必成為信仰教義的核心。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">耶穌在天上「俯伏哭嚎代求」的畫面，與希伯來書的教導如何對照？</h4>
              <p className="text-gray-700 leading-relaxed">
                希伯來書七章25節確實教導耶穌「長遠活著，替他們祈求」，羅馬書八章34節也提到基督在神右邊為我們代求。妮塔將這代求描繪為戲劇化的哭嚎場景，是一種形象化的表達方式，幫助聽者感受代求的迫切與耶穌流血捨命的分量，讀者可以把重點放在「耶穌至今仍在為我們代求」這個核心真理上，而不必糾結於天上實際場景是否確實如此具象。
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
              '你在禱告中，更常帶著「必須表現好、說對的話」的緊張，還是帶著孩子般的天真信靠？',
              '何西阿書中父親教孩子學步、跌倒了仍鼓勵的畫面，與你過去對「神的管教」的印象有什麼不同？',
              '「神總是渴望將審判轉為憐憫」——這句話對你如何看待自己過去的失敗或軟弱，帶來什麼安慰？',
              '「神尋找一個人站在破口上」——你生命中是否有一個人、一個家庭或群體，是你被感動要為他們站在破口中代求的？',
              '你曾經歷過「不需要表現、只需要單純同在」的禱告時刻嗎？那種經歷帶給你什麼樣的感受？',
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
              <h4 className="font-semibold text-green-700 mb-2">🙆 操練「孩子般」來到神面前</h4>
              <p className="text-gray-700 mb-2">下次禱告前，先花一分鐘卸下「我需要說得體、想得清楚」的壓力，單純想像自己是個孩子坐在父親膝上，帶著這樣的心境開始禱告。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💌 讀何西阿書十一章1-4節並默想</h4>
              <p className="text-gray-700 mb-2">
                找一段安靜時間讀這段經文，回想自己人生中一次「跌倒被扶起」的經歷，寫下神在那次經歷中如何鼓勵、而非責備你。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🕊️ 為一位需要憐憫勝過審判的人代求</h4>
              <p className="text-gray-700 mb-2">
                想一位你認為「罪有應得」、很難為他求憐憫的人，這一週嘗試為他禱告，求神的憐憫臨到，而非站在論斷的位置上。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「親愛的天父，謝謝你是這樣一位溫柔又全能的父。求你除去我心中『必須表現好才能親近你』的重擔，讓我學會像孩子一樣單純地信靠你。求你使用我，成為在這世代站在破口中，為他人懇求你憐憫的人。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
