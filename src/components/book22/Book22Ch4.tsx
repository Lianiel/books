import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book22Ch4() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    exploration: true,
    questions: true,
    practice: true,
  });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">第四章</h1>
        <h2 className="text-xl font-semibold text-gray-700">敬拜上帝</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">一、崇拜的本質：用心靈和真理</h3>
              <p className="text-gray-700 leading-relaxed">
                約翰福音4章記載了耶穌與撒馬利亞婦人的對話。這位婦人提出了一個宗教爭議：「我們的祖宗在這山上禮拜，你們倒說，應當禮拜的地方是在耶路撒冷。」這是關於敬拜「地點」的問題。耶穌的回答卻把問題提升到另一個層次：「時候將到，你們拜父，也不在這山上，也不在耶路撒冷……時候將到，如今就是了，那真正拜父的，要用心靈和真理拜祂」（約4:21-23）。耶穌宣告了一個劃時代的轉變：真正的敬拜不被地點和儀式所限定，而在乎敬拜的本質。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                「心靈」（pneuma）在原文可指人的靈，也可指聖靈。多數學者認為這裡指在聖靈的感動和引導下敬拜——真正的敬拜需要聖靈的參與，不是人的宗教努力或情緒激動，而是聖靈引導人進入與上帝的真實相遇。「真理」（aletheia）在約翰福音中與耶穌基督緊密相連（「我就是真理」，14:6），因此「在真理中敬拜」可以理解為「在基督裡敬拜」——唯有透過基督，我們才能真實地進入父上帝的面前。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">二、崇拜的結構：十字架的形狀</h3>
              <p className="text-gray-700 leading-relaxed">
                林鴻信以十字架的形狀來描述崇拜的結構，這個比喻極為深刻。十字架的垂直線代表人與上帝之間的關係——向上的崇拜、禱告、頌讚、聆聽上帝的話。水平線代表人與人之間的關係——團契、彼此代禱、相互扶持。真正的崇拜必須同時包含這兩個維度，缺一則失衡。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                只有垂直而無水平：崇拜就變成個人主義式的靈修，人躲進自己與上帝的私密空間，忽視了上帝呼召我們進入群體生命這個事實。只有水平而無垂直：聚會就淪為人際社交活動，雖然熱鬧，卻失去了敬拜上帝的核心目的。真正的崇拜，是在聖靈的引導下，以基督為中心，垂直地朝向上帝、水平地彼此連結——這正是十字架所象徵的生命形狀。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">三、崇拜是慶祝而非責任</h3>
              <p className="text-gray-700 leading-relaxed">
                德文「feiern」（慶祝）與英文「celebrate」有相通的意思，都帶有喜樂、紀念重要事件的意味。林鴻信提醒我們，崇拜的性質本是喜樂的慶祝——慶祝基督的復活勝過死亡，慶祝上帝的恩典拯救罪人，慶祝上帝國的到來。主日禮拜的英文名稱「Sunday worship」也反映這一點：主日（Sunday）是基督復活的日子，每週的禮拜是對復活的週期性慶祝。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                然而，對許多基督徒而言，去禮拜更像是履行宗教義務，帶著「應該去」的沉重感，而非「迫不及待要慶祝」的喜樂。這種心態的轉變，需要我們重新思考：我去禮拜，是為了「盡責任」（我應該做的），還是因為我真的渴望與上帝相遇、與弟兄姊妹一同慶祝基督已成就的救恩？崇拜的心態，往往反映了我們對上帝恩典的真實感受。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">四、三個禮拜傳統與聖禮</h3>
              <p className="text-gray-700 leading-relaxed">
                基督教的禮拜傳統主要有三種形式，各有其神學重點。以聖禮為中心（天主教、聖公會傳統）：強調物質性的聖禮（洗禮、聖餐）作為恩典的媒介，禮拜的高潮是領受聖餐。以講道為中心（更正教傳統）：強調上帝的話語透過講道向會眾說話，禮拜的核心是聆聽聖經的宣講和詮釋。以屬靈體驗為中心（靈恩派傳統）：強調聖靈的即時感動和信徒的靈性體驗，禮拜注重敬拜音樂和聖靈的運動。每個傳統各有其聖經根基，也各有其偏差的危險。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                洗禮和聖餐是基督所設立的兩個核心聖禮。洗禮象徵信徒與基督同死同活（羅6:3-4），是進入基督身體（教會）的記號。聖餐（Eucharist，希臘文「感謝」）是記念基督在十架上的受難，宣告基督的死直到祂再來（林前11:26）。聖餐不只是個人的靈修行動，更是整個信仰群體的共同行動——一同紀念、一同期待、一同在基督裡相連。
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
          <div className="p-5 bg-white space-y-3">
            {[
              '耶穌宣告真正的敬拜超越地點和儀式，在乎「心靈和真理」：在聖靈的感動下，在基督裡進入與父上帝的真實相遇。',
              '崇拜的結構如十字架：垂直線（人與上帝）和水平線（人與人）缺一不可——只有垂直就成個人主義靈修，只有水平就淪為社交活動。',
              '崇拜的本質是喜樂的慶祝，而非沉重的義務：每次主日禮拜是慶祝基督復活的週期性行動，心態的差別反映對上帝恩典的真實感受。',
              '三個禮拜傳統各有貢獻：聖禮中心（天主教）、講道中心（更正教）、體驗中心（靈恩派），健全的敬拜需要整合，不偏廢任何一個維度。',
              '洗禮象徵與基督同死同活、進入教會；聖餐（Eucharist）是感恩的群體行動，記念基督受難、宣告祂的死直到再來——二者是基督親自設立的核心聖禮。',
            ].map((point, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-sky-600 font-bold flex-shrink-0">{i + 1}.</span>
                <p className="text-gray-700 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 延伸探討 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('exploration')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">延伸探討</span>
          </div>
          {expanded['exploration'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['exploration'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「心靈與真理」的神學爭議</h4>
              <p className="text-gray-700 leading-relaxed">約翰福音4:24的詮釋歷來有爭議。「心靈」（pneuma）是指人的靈，還是聖靈？多數現代學者認為是指在聖靈的感動下敬拜，這與保羅在哥林多前書12-14章談論聖靈與敬拜的關係一致。「真理」（aletheia）在約翰福音中常指耶穌基督本身（「我就是真理」，約14:6），因此「在真理中敬拜」可以理解為「在基督裡的敬拜」——唯有透過基督，我們才能真實地認識和敬拜父上帝。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">聖餐的神學：記念還是真實同在？</h4>
              <p className="text-gray-700 leading-relaxed">聖餐神學是宗教改革時代最激烈的爭論之一。天主教的「化質說」（transubstantiation）主張餅和酒在本質上變成基督的身體和血。路德主張「共質說」：基督真實地同在於餅酒之中（in, with, under the bread）。慈運理主張純粹的記念說：聖餐只是記念基督受難的象徵。加爾文則取中道：基督在聖餐中「屬靈地真實同在」——不是物理層面的身體，而是透過聖靈的能力，信徒真實地與基督相交。台灣大多數教會持記念說，但加爾文的立場值得深思。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">當代華人教會的敬拜文化省思</h4>
              <p className="text-gray-700 leading-relaxed">當代許多華人教會的敬拜越來越偏向靈恩式的情緒體驗，以音樂感動作為衡量敬拜質量的標準。這值得省思：真正的敬拜是否必然帶來特定的情緒感受？靈恩式的敬拜有其豐富之處，但若敬拜的目標是感動自己而非朝向上帝，就偏離了崇拜的本質。另一極端是完全機械化的禮拜程序，沒有真實的心靈投入。真正的敬拜需要在「聖靈的感動」與「真實的心靈」之間維持張力。</p>
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
              '你通常如何衡量一場禮拜是否「好」？是音樂感人？講道精彩？人數多少？還是別的標準？',
              '十字架「垂直」（神人關係）與「水平」（人際關係）這個比喻，如何幫助你理解真正的崇拜？你的教會禮拜如何兼顧這兩個維度？',
              '「慶祝」而非「盡責任」——你參加主日禮拜的心態更靠近哪一邊？這種心態如何影響你的敬拜體驗？',
              '你的教會屬於哪個禮拜傳統（聖禮中心、講道中心、體驗中心）？你認為這個傳統有哪些優點和盲點？',
              '你如何理解洗禮和聖餐的意義？這些聖禮在你個人信仰生命中扮演什麼角色？',
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 帶著「慶祝」的心態去敬拜</h4>
              <p className="text-gray-700 mb-2">下週主日禮拜前，做一個小小的準備：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>週六晚上，閱讀明天禮拜的主題相關聖經段落</li>
                <li>想一件本週值得感謝上帝的事，準備在心中帶到禮拜中獻上</li>
                <li>思考：今天這場禮拜，我要從上帝那裡領受什麼，也要向上帝獻上什麼？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">⏰ 下次聖餐時的深度記念</h4>
              <p className="text-gray-700 mb-2">下次領聖餐時，有意識地進行以下默想：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>拿起餅時：默想基督為我捨命的意義</li>
                <li>喝杯時：感謝基督的血洗去我的罪</li>
                <li>完成後：安靜30秒，讓感謝和更新的心充滿</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-green-800 font-medium text-sm mb-2">禱告詞</p>
              <p className="text-green-700 text-sm italic leading-relaxed">
                天父上帝，感謝祢邀請我進入祢的同在，讓我能在祢面前敬拜。求祢幫助我，在每一次的禮拜中，不只是走過程序，而是真實地用心靈和真理朝向祢。當我唱詩時，讓我真心讚美；當我禱告時，讓我真誠傾訴；當我聆聽講道時，讓我有聆聽祢說話的耳朵。願崇拜成為我生命的喜樂，而非重擔。奉主耶穌基督的名，阿們。
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
