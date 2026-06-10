import React from 'react';
import { BookOpen, Users, MessageCircle, Lightbulb, AlertCircle, Clock } from 'lucide-react';

export default function Book28Ch11() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-emerald-700 mb-2">第11課：內心真實的改變——果實篇（上）</h1>
      <p className="text-gray-500 text-sm">教師本 · 帶領指南 · 《人如何改變》保羅·區普</p>

      {/* 帶領簡介 */}
      <section className="border-l-4 border-purple-400 bg-purple-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-purple-600" />
          <h2 className="text-xl font-bold text-purple-700">帶領簡介</h2>
        </div>
        <div className="space-y-3 text-gray-700">
          <p><strong>課程目標：</strong>進入改變模式的最終一站——果實。本課聚焦「什麼樣的心才能結出真實的果實」，以腓立比書（保羅在監獄中的喜樂和感謝）作為果實的最生動示範，以大誡命（愛神愛人）作為果實的最終標準，以耶利米書和以西結書的新心應許作為果實的神學基礎。</p>
          <p><strong>帶領重點：</strong>這一課的危險是讓「果實」變成另一個宗教性的表現標準（「你的果實夠多嗎？」）。帶領者要持續強調：果實是從被愛的心自然流露出來的，不是靠意志力製造出來的。帶領者也要幫助學員看見他們已有的果實跡象——這是很重要的鼓勵。</p>
          <p><strong>預期時間：</strong>90分鐘</p>
        </div>
      </section>

      {/* 帶領流程 */}
      <section className="border-l-4 border-indigo-400 bg-indigo-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <Clock className="w-6 h-6 text-indigo-600" />
          <h2 className="text-xl font-bold text-indigo-700">帶領流程</h2>
        </div>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">1. 完整自我成長方案分享（20分鐘）</h3>
            <p className="text-gray-700 mb-2">這是本課最重要的部分。邀請3-4位願意的學員完整分享他們的自我成長方案（全部四欄），特別是「果實」那欄——他們期望的改變是什麼？帶領者在每個分享後，幫助學員辨識他們已有的果實跡象。</p>
            <p className="text-sm text-gray-600 bg-indigo-50 p-3 rounded border-l-2 border-indigo-300">帶領提示：這個分享時段需要帶領者的細心引導——確保所有分享的人得到回應和鼓勵，同時控制時間，讓每個人的分享不要太長。帶領者可以準備：「謝謝你的分享。我在你的故事中看見了___的果實跡象——你有沒有注意到這個？」具體地指出果實的跡象是最有力的鼓勵。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">2. DVD觀看（35分鐘）</h3>
            <p className="text-gray-700">播放第11課DVD。重點：「婚姻比喻」（服事動機）、腓立比書研習、申命記6章大誡命、新心的應許（耶利米書、以西結書）。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">3. 小組討論（25分鐘）</h3>
            <p className="text-gray-700">重點圍繞腓立比書的7個研習問題（可選3-4個最適合小組的），特別是問題1（喜樂的根源）、問題2（滿足的秘訣）、和問題6（果實的外顯）。本課主要問題：「什麼樣的心，會產生好果實？」</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">4. 彼此辨識果實（10分鐘）</h3>
            <p className="text-gray-700 mb-2">這是一個特別的活動：帶領者請每位學員對他們右邊的人說出一句話：「在整個課程中，我在你身上看見了___的成長跡象。」這個活動幫助學員看見自己可能沒有注意到的果實，並建立群體中的鼓勵文化。</p>
            <p className="text-sm text-gray-600 bg-indigo-50 p-3 rounded border-l-2 border-indigo-300">帶領提示：準備一個例子：「在整個課程中，我在你身上看見你更願意誠實地分享你的掙扎——這是謙卑的果實，也是信任群體的果實。」鼓勵具體而真實的分享，不要空洞的讚美。</p>
          </div>
        </div>
      </section>

      {/* 關鍵內容說明 */}
      <section className="border-l-4 border-blue-400 bg-blue-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <Lightbulb className="w-6 h-6 text-blue-600" />
          <h2 className="text-xl font-bold text-blue-700">關鍵內容說明</h2>
        </div>
        <div className="space-y-4 text-gray-700">
          <div>
            <h3 className="font-bold text-blue-700 mb-2">核心概念一：果實的根源是動機，不是行為</h3>
            <p>「婚姻比喻」（單身女員工和老闆）清楚地說明：外表相同的行為，可以有完全不同的動機。帶領者要幫助學員做誠實的動機審視——不是停留在「我做了好事嗎？」而是「我這樣做，主要是為了什麼？」當動機從「宗教性」（換取好處）轉向「福音性」（出於愛和感恩），果實才是真正的果實。</p>
          </div>
          <div>
            <h3 className="font-bold text-blue-700 mb-2">核心概念二：腓立比書——在炎熱中結果實的最佳示範</h3>
            <p className="mb-1">帶領者要特別強調：保羅寫腓立比書時身在監獄——他的「炎熱」是非常真實的。這封充滿喜樂和感謝的信，是從真實的炎熱中結出來的果實，不是從舒適的環境中產生的。這對學員的鼓勵非常重要：「果實不是在炎熱消除之後才結出來的，而是在炎熱中結出來的。」</p>
          </div>
          <div>
            <h3 className="font-bold text-blue-700 mb-2">核心概念三：「新心」的應許是果實的神學保證</h3>
            <p>耶利米書和以西結書的「新心」應許（律法寫在心裡、神的靈放在裡面）指向一個重要的神學事實：真正的果實不是我努力做出來的，而是神的靈在我裡面工作的結果。這不是讓我們被動等待，而是讓我們以信心和順服配合聖靈的工作（如農夫給土地創造生長的條件，但不能讓植物生長）。</p>
          </div>
        </div>
      </section>

      {/* 小組活動 */}
      <section className="border-l-4 border-cyan-400 bg-cyan-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <Users className="w-6 h-6 text-cyan-600" />
          <h2 className="text-xl font-bold text-cyan-700">小組活動帶領說明與參考答案</h2>
        </div>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border border-cyan-200">
            <p className="font-bold text-cyan-700 mb-2">問題1（腓立比書4章4-7節）：喜樂的根源</p>
            <p className="text-gray-700 mb-2">問：「保羅說『靠主常常喜樂』——在你最大的炎熱中，你的喜樂建立在什麼基礎上？是建立在情況的解決，還是建立在神的信實？有什麼具體的方式，讓你可以在炎熱中仍然靠主喜樂？」</p>
            <p className="text-sm text-gray-600 bg-cyan-50 p-2 rounded">參考答案：「靠主喜樂」的具體操練：每天感謝神的供應（腓立比書4章6節）；把思想主動轉向「真實的、可敬的」事物（4章8節）；在群體中分享喜樂（第1-2章）；記念神的大圖畫（像基督）。帶領者可以問：「本週你可以做哪一件具體的事，幫助你更靠主喜樂？」</p>
          </div>
          <div className="bg-white p-4 rounded border border-cyan-200">
            <p className="font-bold text-cyan-700 mb-2">問題2：辨識你的果實跡象</p>
            <p className="text-gray-700 mb-2">問：「回顧整個課程（11課），你在自己身上看見了什麼樣的改變跡象？即使是很小的改變，也算。」</p>
            <p className="text-sm text-gray-600 bg-cyan-50 p-2 rounded">帶領提示：幫助學員辨識他們可能沒有注意到的改變：「你是否在某個衝突中，比以前更快地悔改了？你是否發現你在某個情境中，有了一個不一樣的反應？你是否對某人更有耐心了？你是否在禱告中更誠實了？」這些都是果實的跡象，哪怕它們看起來很小。</p>
          </div>
          <div className="bg-white p-4 rounded border border-cyan-200">
            <p className="font-bold text-cyan-700 mb-2">主要問題（帶領核心）：「什麼樣的心，會產生好果實？」</p>
            <p className="text-gray-700 mb-2">這個問題把今天的討論整合起來：帶領學員總結一句話：「一顆___的心，會產生好果實。」（如：被愛的、謙卑的、信靠的、感恩的）</p>
            <p className="text-sm text-gray-600 bg-cyan-50 p-2 rounded">參考答案：綜合各課的教導：一顆「真正相信自己被神在基督裡完全接納、因此不再需要靠偶像得到安全感、並且每天以信心和悔改活出新身分」的心，會產生好果實。這個心是神給的，不是我努力做到的。</p>
          </div>
        </div>
      </section>

      {/* 討論與應用引導 */}
      <section className="border-l-4 border-teal-400 bg-teal-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <MessageCircle className="w-6 h-6 text-teal-600" />
          <h2 className="text-xl font-bold text-teal-700">討論與應用引導</h2>
        </div>
        <div className="space-y-3 text-gray-700">
          <div>
            <h3 className="font-bold text-teal-700 mb-2">為下一課（最後一課）做準備</h3>
            <p>告訴學員：下週是最後一課，我們會一起回顧整個旅程，分享整個課程的最大收穫，並且為彼此禱告和祝福。請學員本週思考：「這個課程對我最大的影響是什麼？我想繼續成長的一個方向是什麼？」這個問題幫助學員以期待的心進入最後一課。</p>
          </div>
        </div>
      </section>

      {/* 常見挑戰 */}
      <section className="border-l-4 border-orange-400 bg-orange-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <AlertCircle className="w-6 h-6 text-orange-600" />
          <h2 className="text-xl font-bold text-orange-700">常見挑戰與帶領技巧</h2>
        </div>
        <div className="space-y-3">
          <div className="bg-white p-4 rounded border border-orange-200">
            <p><strong>挑戰：</strong>學員說：「我做了很久了，但什麼果實都沒有。」感到沮喪。</p>
            <p className="text-sm text-orange-700 mt-2"><strong>技巧：</strong>幫助學員重新定義果實：果實不只是「外在的好行為」，也包括：「你是否比以前更快地意識到自己的荊棘？」「你是否比以前更誠實地向神認罪？」「你是否比以前更願意接受幫助？」這些都是果實，雖然很安靜。另外，帶領者也可以直接指出他/她在小組中顯示的果實跡象（如：誠實分享、尋求成長、堅持來到小組）。</p>
          </div>
          <div className="bg-white p-4 rounded border border-orange-200">
            <p><strong>挑戰：</strong>「彼此辨識果實」的活動令某些學員感到不適（不習慣接受讚美）。</p>
            <p className="text-sm text-orange-700 mt-2"><strong>技巧：</strong>在活動開始前，提醒學員：「接受別人對你果實的觀察，是謙卑的一部分——謙卑不只是低估自己，也包括接受真實的感謝和鼓勵。當有人指出你的果實時，練習說：『謝謝你，這是神恩典的工作。』而不是急著否認。」</p>
          </div>
        </div>
      </section>

      {/* 帶領禱告 */}
      <section className="bg-gray-100 p-6 rounded">
        <h3 className="font-bold text-gray-800 mb-3">帶領禱告建議</h3>
        <p className="text-gray-700 text-sm italic">「神啊，感謝祢，祢應許把律法寫在我們的心裡，把祢的靈放在我們裡面。感謝祢，果實不是我們努力做出來的，而是祢在我們裡面工作的結果。今天我們看見了彼此身上的果實跡象，這是祢工作的証明。求祢幫助我們在這課程的最後一週，繼續以感恩的心配合祢的工作，讓炎熱、荊棘和十字架的旅程，在我們身上結出豐盛的果實。奉耶穌的名求，阿們。」</p>
      </section>
    </div>
  );
}
