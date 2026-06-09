import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Award, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book27Ch9() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">第九課</h1>
        <h2 className="text-xl font-semibold text-gray-700">全新的身分，全新的潛能（十架篇上）</h2>
        <p className="text-sm text-gray-500 mt-2">加拉太書 2:20</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-emerald-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-emerald-700 mb-3">十字架：改變的核心</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                前幾課我們詳細探討了HEAT模式中的「炎熱」（H）和「荊棘藪」（T）——我們所面對的處境，以及我們罪性的心如何回應。現在我們來到了模式的轉折點：十字架（Cross）。這是整個改變模式的核心，也是基督教福音區別於所有其他「自我改善」系統的關鍵所在。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                加拉太書2:20是本課的核心經文：「我已經與基督同釘十字架，現在活著的不再是我，乃是基督在我裡面活著；並且我如今在肉身活著，是因信神的兒子而活；他是愛我，為我捨己。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                這節經文是一個爆炸性的宣告：基督徒的身分已經從根本上被改變了。「我已經與基督同釘十字架」——舊有的「自我」，那個以自己為中心、追逐偶像的「我」，已經死了。「現在活著的不再是我，乃是基督在我裡面活著」——新的生命力量是基督自己在信徒裡面活著。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-emerald-700 mb-3">三要素：救贖事實、現今光景、每日結果</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者把加拉太書2:20解析為三個彼此相連的要素，構成了基督徒生命改變的完整圖景：
              </p>

              <div className="space-y-4">
                <div className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-500">
                  <h4 className="font-semibold text-emerald-700 mb-2">① 救贖事實（已成就的現實）</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-2">
                    「我已經與基督同釘十字架」——這是一個過去式，指向一個已成就、不可撤銷的現實。在神的眼中，信徒已經在基督裡死了，也已經在基督裡復活了（羅馬書6:4-5）。這個「救贖事實」不是一個道德目標，而是一個靈性事實：信徒已經在基督裡有了全新的身分。
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    這個事實意味著：信徒不需要通過努力去「獲得」神的接納——他已經被完全接納了。信徒不需要靠其他東西來建立自我價值——他的價值已經被基督的死所確立。這個基礎是改變的起點，而非終點。
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-700 mb-2">② 現今光景（當下的掙扎與潛能）</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-2">
                    「現在活著的不再是我，乃是基督在我裡面活著」——這是一個現在進行式。信徒雖然已經有了新身分，但仍活在罪性的肉身中，仍面對炎熱，仍會落入荊棘藪。這是「已然而未然」（already but not yet）的張力：已然在基督裡死而復活，未然完全成聖榮耀化。
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    然而，「基督在我裡面活著」也是當下的現實。聖靈住在信徒心裡，使信徒有能力做出與舊人不同的選擇。改變是真實可能的，不是靠自己的努力，而是靠基督在裡面活著的力量。
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                  <h4 className="font-semibold text-purple-700 mb-2">③ 每日結果（信心帶來的生命改變）</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-2">
                    「我如今在肉身活著，是因信神的兒子而活；他是愛我，為我捨己」——這是日常生活的層面。信徒每天在各種炎熱中，靠著信心活出基督的生命。「信心」不是一種情感，而是一種持續的選擇：選擇相信「他是愛我、為我捨己的」，而非相信其他的偶像能給我所需要的。
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    每日的結果不是完美的行為，而是越來越多的時刻，信徒的回應從荊棘藪轉向好果樹，因為他在那個時刻選擇相信：基督已為我成就了一切，我不需要靠自己去搶奪、保護、或逃避。
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-emerald-700 mb-3">「他是愛我的」：改變的動力</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                加拉太書2:20最後一句話特別值得注意：「他是愛我，為我捨己」。保羅把這個宇宙性的救贖事件個人化：不只是「基督為世人而死」，而是「他是愛我、為我捨己」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這種個人性的愛的確信，是改變最深的動力。當一個人真正相信自己被這樣愛著，荊棘藪的邏輯就失去了它的吸引力。為什麼還要逃避現實？因為你相信神愛你，祂會陪你面對。為什麼還要以惡報惡？因為你相信你已經被完全接納，不需要靠報復來恢復自尊。為什麼還要自憐？因為你知道有一位比你更愛你的神在掌管這一切。
              </p>
              <p className="text-gray-700 leading-relaxed">
                十字架不只是一個神學命題，而是一個活生生的關係現實：「祂是愛我的神」——這個信念，每天在炎熱中被選擇相信，就是改變發生的地方。
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
                '十字架是HEAT模式的轉折點，也是基督教改變觀與一切「自我改善」系統最根本的區別：改變的動力來自基督已成就的救贖，而非自己的努力。',
                '加拉太書2:20的三要素：救贖事實（「我已與基督同釘十字架」——已成就的身分）、現今光景（「基督在我裡面活著」——當下的能力）、每日結果（「因信而活」——日常的選擇）。',
                '信徒的「新身分」不是道德上的努力目標，而是在神眼中已然確立的靈性現實。改變的出發點是「我已經被接納」，而非「我努力去配得上」。',
                '「已然而未然」的張力：信徒已在基督裡死而復活（已然），卻仍在肉身中掙扎成長（未然）。這個張力是正常的屬靈生命，不是失敗的標誌。',
                '「他是愛我、為我捨己」的個人性確信，是改變最深的動力。當炎熱來臨，相信這個愛，荊棘藪的邏輯就失去其吸引力。',
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
              <h4 className="font-semibold text-indigo-700 mb-2">「與基督同釘十字架」的羅馬書背景</h4>
              <p className="text-gray-700 leading-relaxed text-sm">
                加拉太書2:20與羅馬書6章是平行的神學洞見。羅馬書6:4說：「我們藉著洗禮歸入死，和他一同埋葬，原是叫我們一舉一動有新生的樣式，像基督藉著父的榮耀從死裡復活一樣。」「同釘十字架」和「同埋葬」都是說：信徒與基督在一切的代價意義上是聯合的。基督的死算作信徒的死，基督的義算作信徒的義，基督的復活算作信徒的新生命。這個「算賬」（imputation）是基督教身分觀的核心。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">改變觀的三種錯誤</h4>
              <p className="text-gray-700 leading-relaxed text-sm">
                理解加拉太書2:20能幫助我們辨識三種常見的錯誤改變觀：①「道德主義」——只強調行為改變，忽略了身分的轉變，容易產生外在合規但內心乾枯的基督徒；②「反律法主義」——只強調恩典，忽略了「每日因信而活」的責任，容易以恩典為放縱的藉口（羅馬書6:1）；③「情感主義」——只強調「感覺被神愛」，缺乏紮根在救贖事實中的神學基礎，情感起伏就使信仰動搖。真正的改變需要三要素的整合。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">身分與改變：「是」先於「做」</h4>
              <p className="text-gray-700 leading-relaxed text-sm">
                本課最重要的神學洞見是：屬靈的改變從「是」（being）開始，而非從「做」（doing）開始。我們不是因為「做得更好」才成為神的兒女，而是因為「我們已然是神的兒女」才有動力和能力做得更好。這與世俗的道德倫理截然不同：世俗說「你努力做個好人，你才值得被尊重」；福音說「你已經在基督裡被神完全接納，現在活出這個身分吧」。身分先於行為，恩典先於責任。
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
              '「我已經與基督同釘十字架」——這個事實對你來說是一個「生命現實」，還是一個你知道但沒有真實感受的神學命題？這個差距，你覺得是什麼原因造成的？',
              '你的日常生活更像「道德主義」（努力做好行為）、「反律法主義」（以恩典為不改變的藉口）、「情感主義」（靠感覺來評估自己的屬靈狀態），還是加拉太書2:20所描述的「因信而活」？',
              '「他是愛我、為我捨己」——你有沒有一個時刻，這個真理突破了你的理性，深深觸動了你的心？那是在什麼情況下發生的？',
              '「已然而未然」的張力在你生命中如何表現？你是否曾因為「還沒有完全改變」而感到沮喪，懷疑自己是否真的是神的兒女？',
              '「救贖事實、現今光景、每日結果」三個要素，哪一個在你的信仰生活中最薄弱？這對你的屬靈成長有什麼影響？',
              '如果你今天能真正相信「基督在我裡面活著，我有祂的能力」，你面對哪個具體困難的方式會有所不同？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 加拉太書2:20 默想操練</h4>
              <p className="text-gray-700 text-sm mb-2">本週把加拉太書2:20分成三段，每天默想其中一段：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li><strong>前三天</strong>：「我已與基督同釘十字架」——靜思：舊的我已死，這意味著我不再需要靠什麼來確立自己的價值？</li>
                <li><strong>中間兩天</strong>：「現在活著的不再是我，乃是基督在我裡面活著」——靜思：今天我遇到的哪個困難，是我需要讓基督在裡面活著來應對的？</li>
                <li><strong>後兩天</strong>：「他是愛我，為我捨己」——靜思：此刻我相信這個愛的程度是幾分？是什麼在阻礙我相信？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 身分宣告練習</h4>
              <p className="text-gray-700 text-sm mb-2">每天早晨，在禱告中大聲宣告：</p>
              <div className="bg-emerald-50 rounded p-3 text-sm text-gray-700 italic">
                「主啊，今天我選擇相信：我已在基督裡死而復活。我不是靠自己的努力站立，而是靠祢在我裡面活著的力量。無論今天遭遇什麼炎熱，我選擇記住：祢是愛我的，祢為我捨了祢自己。」
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">⏰ 炎熱中的十字架暫停</h4>
              <p className="text-gray-700 text-sm mb-2">當你感到壓力、憤怒、或想要走向荊棘藪時，練習一個「十字架暫停」：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>停下來，深呼吸一次</li>
                <li>默默說：「他是愛我的」</li>
                <li>問自己：「如果我真的相信這個，我現在會怎樣回應？」</li>
                <li>選擇那個回應，靠祢的恩典去做</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-600 text-sm italic">
                「主耶穌，感謝祢不只是為我的罪而死，更是讓我在祢裡面有了全新的身分。我承認我時常忘記這個真實，活得好像仍需要靠自己的努力來得到祢的接納，或靠其他東西來填滿內心。求祢讓加拉太書2:20成為我每日生命的現實，讓我在每一個炎熱中都記得：祢是愛我的，祢在我裡面活著，我有能力活出與荊棘藪不同的生命。奉祢的名，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
