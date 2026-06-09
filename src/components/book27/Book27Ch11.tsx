import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book27Ch11() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">第十一課</h1>
        <h2 className="text-xl font-semibold text-gray-700">內心真實的改變（果實篇上）</h2>
        <p className="text-sm text-gray-500 mt-2">腓立比書 4:4–9；馬太福音 7:15–20</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-emerald-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-emerald-700 mb-3">「從心中所流露出來的」</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們來到了HEAT模式的最後一個字母：果實（Fruit）。前面我們看了炎熱（處境）、荊棘藪（罪性回應）、十字架（基督恩典）。現在要問的是：當一個人持續倚靠十字架，持續操練信心悔改，他的生命會結出什麼樣的果子？
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                馬太福音7:15-20是這個主題的核心圖像：「憑著他們的果子，可以認出他們來……凡好樹都結好果子，惟獨壞樹結壞果子。」耶穌這裡說的「樹」指的是人的心——樹是什麼，果子就是什麼。荊棘藪的樹結荊棘的果，好果樹的樹結好的果。改變的標誌不是行為的外在遵守，而是從心裡自然流露的生命品質。
              </p>
              <p className="text-gray-700 leading-relaxed">
                這個比喻的關鍵在「自然流露」四個字。好樹結好果，不是努力裝出來的，而是因為樹的本質改變了。當一個人的心真正被福音改變，好果子是自然的流露，而非表演。這也是HEAT模式最終要帶我們到的地方：不只是行為的修正，而是心的更新，使改變成為從裡到外的真實轉化。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-emerald-700 mb-3">腓立比書研習：喜樂從何而來</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                腓立比書是本課的主要研習材料。保羅在獄中寫了這封信，卻全書充滿「喜樂」（腓立比書出現「喜樂」超過16次）。這是一個最真實的「果實」範例：在極端困難的「炎熱」中，心仍然能結出喜樂的果子。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                腓立比書4:4-9給了我們一份「好果樹的清單」，是從心中自然流露的果子：
              </p>

              <div className="space-y-3">
                <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                  <h4 className="font-semibold text-emerald-700 text-sm mb-1">喜樂（腓4:4）</h4>
                  <p className="text-gray-600 text-sm">「你們要靠主常常喜樂；我再說，你們要喜樂。」注意「靠主」——喜樂的根源是主，不是環境。保羅在監獄裡仍能喜樂，是因為他的喜樂不依賴於處境，而依賴於「主近了」（腓4:5）這個事實。</p>
                </div>

                <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                  <h4 className="font-semibold text-emerald-700 text-sm mb-1">溫和謙讓（腓4:5）</h4>
                  <p className="text-gray-600 text-sm">「當叫眾人知道你們謙讓的心。」謙讓（epieikēs）包含了不過分堅持自己的權利，甚至在被不公平對待時仍能溫和回應。這是荊棘藪「以惡報惡」的正面對照。</p>
                </div>

                <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                  <h4 className="font-semibold text-emerald-700 text-sm mb-1">禱告中的平安（腓4:6-7）</h4>
                  <p className="text-gray-600 text-sm">「應當一無掛慮，只要凡事藉著禱告、祈求和感謝，將你們所要的告訴神。神所賜出人意外的平安……」平安不是沒有問題，而是在問題中禱告、感謝、把重擔交給神，然後那「出人意外的平安」就來保守心懷意念。</p>
                </div>

                <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                  <h4 className="font-semibold text-emerald-700 text-sm mb-1">思念美善（腓4:8）</h4>
                  <p className="text-gray-600 text-sm">「凡是真實的、可敬的、公義的、清潔的、可愛的、有美名的事；若有什麼德行，若有什麼稱讚，這些事你們都要思念。」思念的內容影響心的狀態，心的狀態影響生命的果子。</p>
                </div>

                <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                  <h4 className="font-semibold text-emerald-700 text-sm mb-1">知足的秘訣（腓4:11-12）</h4>
                  <p className="text-gray-600 text-sm">「我學會了，無論在什麼狀態可以知足，這是很要緊的。」知足是「學會的」，不是天生的，也不是強迫自己的。保羅說他「靠著那加給我力量的，凡事都能做」（腓4:13）——知足是靠基督的力量學會的果子。</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-emerald-700 mb-3">果實不是努力的結果，是根的結果</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                本課一個重要的神學釐清：果實（好果子）不是信徒努力的結果，而是根（心被基督更新）的自然流露。這不是說信徒不需要努力，而是說努力的方向是更新根，而非貼上假果子。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                腓立比書2:12-13說得很清楚：「這樣看來，我親愛的弟兄，你們既是常順服的……就當恐懼戰兢地做成你們得救的工夫；因為你們立志行事，都是神在你們心裡運行，為要成就他的美意。」神在裡面運行，信徒在外面順服——這是內外合一的改變，不是外在努力遮蓋內在荊棘。
              </p>
              <p className="text-gray-700 leading-relaxed">
                這也是為什麼本書叫做《人如何改變》，而非《人如何管理自己的行為》。真正的改變是從心的根本更新開始，是神的工作，信徒是在神的工作中配合行動，而非靠自己的意志力生產出「屬靈果子」。
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
            <ul className="space-y-2">
              {[
                '「果實」是HEAT模式的最後一個字母，指信徒在持續倚靠十字架中，心所自然結出的生命品質，不是表演，而是真實的內在更新。',
                '馬太福音7:15-20：樹是什麼，果子就是什麼。真正的改變標誌是從心裡自然流露，而非外在行為的管理。',
                '腓立比書4:4-9提供了好果樹的清單：喜樂、謙讓、禱告中的平安、思念美善、知足。這些不是道德努力的目標，而是倚靠基督的心所結的果子。',
                '保羅「在監獄裡喜樂」是最真實的果實範例——在最艱難的炎熱中，喜樂仍然可能，因為喜樂的根源是主，不是環境。',
                '果實是根（心被基督更新）的結果，不是努力的結果。腓立比書2:12-13：神在裡面運行，信徒在外面順服——這是內外合一的真實改變。',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-gray-700">{point}</p>
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
              <h4 className="font-semibold text-indigo-700 mb-2">喜樂與快樂的神學區別</h4>
              <p className="text-gray-700 leading-relaxed text-sm">
                腓立比書4:4的「喜樂」（chairō）與世俗的「快樂」（happiness）有根本的區別。「快樂」依賴於外在環境——事情順利就快樂，事情不順就不快樂。「喜樂」是一種深層的、以神為根源的滿足感，可以在痛苦中共存。這正是保羅在監獄裡能寫下腓立比書的原因。喜樂不是情感上的強迫（「我要假裝快樂」），而是一種對神信實性的信心回應（「即使現在這樣，神仍然是好的」）。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「思念」的力量：心理與屬靈的交叉點</h4>
              <p className="text-gray-700 leading-relaxed text-sm">
                腓立比書4:8的「思念」（logizomai）在現代心理學中也有對應的洞見：我們習慣性地思念什麼，就塑造了我們的情緒和行為模式。若我們習慣性地思念「我的困難、我的傷害、我的失去」，心就會被塑造成荊棘藪的模式；若我們習慣性地思念「真實的、可敬的、公義的」，心就被塑造成好果樹的模式。這不是「正向思考」的自我欺騙，而是選擇把我們的思念錨定在真實的神學現實上。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「知足」是學習，不是天賦</h4>
              <p className="text-gray-700 leading-relaxed text-sm">
                腓立比書4:11的「我學會了」（emathon）是一個關鍵的動詞——「學會」意味著這是一個過程，需要時間、嘗試、失敗和再嘗試。知足不是突然頓悟，而是在每一次炎熱中練習選擇信靠神而非追求偶像所積累的智慧。保羅說他「在各事上並在一切事上，我都得了秘訣」（腓4:12）——「秘訣」（mueomai）原意是「被引入奧秘」，指一個漸進的學習過程。知足是在十字架恩典中一步步學習的生命功課。
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
              '腓立比書5種好果子（喜樂、謙讓、禱告中的平安、思念美善、知足），哪一種在你的生命中目前最稀缺？你覺得這是什麼原因？',
              '你有沒有某些「屬靈行為」（如禱告、讀經、服事）是出於對人的表演，而非出於心對神的愛？這種表演和真實的果子有什麼不同？',
              '「我學會了知足」——在你生命中，什麼「炎熱」的處境最難讓你知足？你在這個領域「學習知足」的進展如何？',
              '腓立比書4:8說要思念「凡是真實的、可敬的、公義的」——你日常習慣性思念的，更多是這些，還是你的困難、傷害、和失去？',
              '你如何區分「真實的果子」（心的更新所流露）和「貼上的假果子」（行為上的努力表演）？這個區別對你的自我評估有什麼影響？',
              '如果你知道神「在你心裡運行」（腓2:13），這對你看待自己的成長和失敗有什麼不同？',
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
              <h4 className="font-semibold text-green-700 mb-2">🌱 果實日記</h4>
              <p className="text-gray-700 text-sm mb-2">本週每天記錄一個「好果樹的時刻」——一個你的回應更像好果樹而非荊棘藪的具體例子：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>處境是什麼（炎熱）？</li>
                <li>我的回應是什麼（果子）？</li>
                <li>是什麼讓這個回應成為可能？（是靠自己的努力，還是靠了神的恩典？）</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 腓立比書通讀</h4>
              <p className="text-gray-700 text-sm mb-2">本週一次讀完腓立比書，留意：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>保羅提到了哪些「炎熱」（試煉、困難）？</li>
                <li>他的心如何回應這些炎熱（好果樹還是荊棘藪）？</li>
                <li>他靠什麼力量結出這些果子？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 思念美善的練習</h4>
              <p className="text-gray-700 text-sm mb-2">每天早晨花5分鐘，根據腓立比書4:8做「思念更新」：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>列出今天值得感謝的3件事（真實的）</li>
                <li>想一個你欽佩的人的一個美好品質（可敬的）</li>
                <li>想一個神為你已成就的事（公義的、可愛的）</li>
                <li>用一句禱告把這些帶到神面前</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-600 text-sm italic">
                「主啊，我渴望我的生命結出真實的好果子——不是表演給人看的，而是從心裡自然流露的。但我知道這不是靠我的努力，而是靠祢在我心裡的運行。求祢繼續更新我心的根——讓我越來越以祢為喜樂、以謙讓待人、以禱告代替憂慮、以感謝代替抱怨。讓我在每一個炎熱中都能像保羅一樣，說：『我靠著那加給我力量的，凡事都能做。』奉主名，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
