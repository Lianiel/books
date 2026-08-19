import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book36Ch11() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-fuchsia-700 to-purple-700 bg-clip-text text-transparent">第十一講</h1>
        <h2 className="text-xl font-semibold text-gray-700">願人都尊你的名為聖</h2>
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
              妮塔請大家翻到彼得前書一章15-16節：「那召你們的既是聖潔，你們在一切所行的事上也要聖潔……你們要聖潔，因為我是聖潔的。」她說，耶穌教導我們禱告時說「願你的名為聖」，這提醒我們，禱告不僅是認出神是慈愛的父，更要學習把神的聖潔帶入我們所代禱的每個境況中。
            </p>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">一、神聖潔的浩瀚與不可承受</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說，神的聖潔由許多部分組成——祂的完美、極端的公正、完全的能力與權柄，都居住在祂的聖潔裡，這種聖潔超乎人所能明白，甚至天使與天上的聖徒也無法完全領略。她說，沒有一個受造物能承受神聖潔全然的彰顯，就連天上一些高大威嚴的活物，在神聖潔的同在中也要把自己遮蓋起來。她指出，一個人能進入神聖潔的深度，取決於他生命的純淨程度——重生的幼兒往往比成年人更容易進入神聖潔的同在，正因心的純淨；「清心的人必得見神」正是這個道理。她說，神對每個基督徒的心意，是把人帶入一個純淨的地步，使人今生就能注視、甚至活出祂高層次的聖潔。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她分享大約二十六年前的一次經歷：她在客廳裡唱《聖潔歸於祢》敬拜神，神的聖潔逐漸加增彰顯在房間裡，質與量持續增加，直到她無法站立、唱不出聲，甚至覺得「聖潔」這個詞本身變得太過神聖，她說不出口，只能在心裡默默敬拜。當她繼續繞圈行走時，耶穌帶著全然的聖潔進入房間，她整個人俯伏在地、從頭到腳劇烈顫抖，甚至用靈裡的話對主說：「我愛你，我願意你留下來，可是我很害怕，如果你繼續留下來，我會死，請你現在離開。」她引出埃及記西奈山下百姓對摩西說「求你和我們說話，不要神和我們說話，恐怕我們死亡」，以及啟示錄中使徒約翰見到榮耀基督時「就仆倒在祂腳前，像死了一樣」的記載，說明神的聖潔本質上是令人懼怕敬畏的，人在基督裡成長的過程，其實就是逐漸增加自己能站立在神同在中的容量。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">二、如何與聖潔的神同行——禱告是唯一途徑</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔提出一個問題：我們得救並不代表立刻就聖潔了，那麼一個不聖潔的人，要如何與聖潔的神同行？她的答案是：唯有透過禱告，人才能逐漸與世界分別，才能開始盛裝神所分賜的聖潔。她引用「非聖潔沒有人能見主」，強調禱告是唯一能使人變聖潔、得以瞻仰神榮面的途徑。她說，當一個人越來越愛慕神的聖潔，禱告中會自然生出一種渴望：要在每個代求的處境中尊祂的名為聖。她以自己曾在異象中面對「憤怒的靈」為例：激動神饒恕她所代求的人，其實正是一種尊神名為聖的表現——因為神聖潔的一部分正是祂的憐憫；若聖潔只等於震怒審判，人類早就被滅絕了，神的恆久忍耐、愛與熱情，同樣是祂聖潔不可分割的部分。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">三、阿摩司的代求與神最高的旨意</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔以先知阿摩司為例，說明代禱者的職責是把神的聖潔帶入所禱告的境況，而不是自行決定神該做什麼。阿摩司看到神要用蝗災毀滅以色列的異象，向神哀求「以色列這麼小，怎能承受這樣的災難」，神的心因此受安慰，說「這事不會發生」；第二次異象中他再次激動神的憐憫求饒恕，神再次收回審判；但到了第三次異象，神的最高旨意是要藉審判達到更大的果效，於是這次神說「這是一定會發生的」。妮塔藉此提醒：代禱者要學習在禱告中護衛神的聖潔，但這樣的護衛必須以神對該境況的最高旨意為根基——通常神的最高旨意很少是毀滅一個靈魂，祂幾乎總是喜愛憐恤；但在極少數情況下（她舉了希特勒這樣的歷史人物為例），神的最高旨意可能是在惡人毀滅世界之前先除滅他。她坦言，辨識神最高旨意並不總是容易的事，唯有透過研讀神的話、在神的同在中花時間、順服聖靈帶領，在謙卑、順服、愛的生活形態中才能漸漸明白。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">四、活祭的呼召與辨識神完美的旨意</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔引羅馬書十二章1-3節：「將身體獻上，當作活祭，是聖潔的，是神所喜悅的……叫你們察驗何為神的善良、純全可喜悅的旨意」，指出這節經文其實包含幾層意思：第一，我們被呼召將身體獻上當作活祭；第二，這祭必須是聖潔的——若沒有過聖潔的生活，就談不上任何獻祭；第三，這樣的分別為聖，會使人有能力分辨神「善良的、可喜悅的、純全的」旨意這三個層次。她說，神渴望把人帶到一個地步，能辨識出什麼是祂看為好的旨意、什麼是更好或可接受的旨意，以及什麼是祂完美純全的旨意，並將祂的聖潔帶入所面對的境況——但這一切唯有透過禱告生活才能達成。
              </p>
              <p className="text-gray-700 leading-relaxed">
                她總結，「願你的名為聖」意味著要先潔淨自己，才能明白神完美純全的旨意，並將祂的聖潔帶入所代禱的境況；經由這樣的禱告生活，一個人在地上可以某種意義上成為公義的代言人。她鼓勵學員常常這樣禱告：「神啊，求祢指教我祢的道路，使我一切所行所講的事上都尊祢的名為聖」，並以摩西「求你將你的道路指示我」、大衛同樣的祈求作結，鼓勵大家透過持續禱告，從聖經的整全啟示認識神的性格，而不僅僅是逐字閱讀經文。
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
                '「願你的名為聖」提醒代禱者，禱告的目標不只是求神做事，更是把神的聖潔——包括祂的公義、憐憫、恆久忍耐——帶進所代求的境況中。',
                '沒有受造物能承受神聖潔全然的彰顯；一個人能進入神聖潔同在的深度，與他生命的純淨程度成正比。',
                '禱告是使人逐漸與世界分別、盛裝神聖潔的唯一途徑——「非聖潔沒有人能見主」。',
                '阿摩司三次代求以色列的故事說明：代禱者要學會辨識神當下的最高旨意，而非單憑自己的意願要求神饒恕或審判。',
                '羅馬書十二章1-3節指出，將身體獻為聖潔的活祭，能使人漸漸分辨出神善良、可喜悅、純全這三個層次的旨意。',
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
              <h4 className="font-semibold text-gray-800 mb-2">將特定歷史人物（如希特勒）直接歸類為「神必要除滅的例外」，需要留意什麼？</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔用歷史上公認的極端邪惡例子，說明神的最高旨意有時是審判而非單純的憐憫，這個原則本身有聖經根據（如創世記十五章16節「亞摩利人的罪孽還沒有滿盈」）。但讀者需留意，這類判斷屬於事後、對已成定論歷史人物的回顧性神學反思，而非用來在當下對任何一個人或群體宣告「神要除滅他」的依據——聖經反覆強調，只有神自己知道人心，人不應僭越去斷定誰是「神必要除滅的人」。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「進入神聖潔同在時身體劇烈反應」的經歷，是否是衡量屬靈深度的標準？</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔分享的顫抖、俯伏、甚至恐懼到請耶穌離開的經歷，讓人聯想到但以理十章、啟示錄一章等經文中先知面對神聖榮耀時的反應。這類強烈的身體反應在聖經中確有先例，但並非每個追求聖潔、渴慕神同在的人都會經歷同樣激烈的外顯現象。讀者不必以「是否有過如此劇烈的屬靈經歷」來衡量自己與神關係的深淺，聖潔生活的核心終究在於彼得前書所說的「凡事聖潔」的日常操練，而非某次戲劇性的體驗。
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
              '「清心的人必得見神」——你認為自己目前生命中，哪些部分最需要被神潔淨，好使你更能經歷祂？',
              '你過去對「神的聖潔」的理解，是否偏重審判與公義的一面，而忽略了祂憐憫與恆久忍耐的一面？',
              '阿摩司三次為以色列代求，前兩次蒙應允、第三次卻沒有——你如何理解「代禱不保證每次都能改變神的心意」這件事？',
              '羅馬書十二章提到辨識神善良、可喜悅、純全三個層次的旨意，你覺得自己目前的禱告生活，最容易停留在哪一個層次？',
              '「將身體獻上當作活祭」對你而言，具體會體現在生活中的哪個層面？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 默想彼得前書一章15-16節與羅馬書十二章1-3節</h4>
              <p className="text-gray-700 mb-2">找一段安靜時間，通讀這兩段經文，寫下神向你顯明「聖潔」這個詞在你生活中具體的意義。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙇 為一件事禱告求神顯明祂的最高旨意</h4>
              <p className="text-gray-700 mb-2">
                挑一個你目前正在代禱、卻不確定神心意的處境，這一週持續禱告求神向你顯明祂善良、可喜悅、純全的旨意，而非只求你自己想要的結果。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🕯️ 每天一句「求祢指教我祢的道路」</h4>
              <p className="text-gray-700 mb-2">
                參考摩西與大衛的禱告，每天用這句話開始你的禱告時間，持續一週，觀察這樣的禱告如何塑造你看待日常決定的方式。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「聖潔的主，願你的名在我一切所行所言的事上都被尊為聖。求你潔淨我的心，使我能更深經歷你的同在。求你教導我在每一個代禱的境況中，分辨出你善良、可喜悅、純全的旨意，並將你的聖潔帶進其中。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
