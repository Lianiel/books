import React from 'react';
import { BookOpen, Users, MessageCircle, Lightbulb, AlertCircle, Clock } from 'lucide-react';

export default function Book28Ch09() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-emerald-700 mb-2">第9課：全新的身分，全新的潛能——十架篇（上）</h1>
      <p className="text-gray-500 text-sm">教師本 · 帶領指南 · 《人如何改變》保羅·區普</p>

      {/* 帶領簡介 */}
      <section className="border-l-4 border-purple-400 bg-purple-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-purple-600" />
          <h2 className="text-xl font-bold text-purple-700">帶領簡介</h2>
        </div>
        <div className="space-y-3 text-gray-700">
          <p><strong>課程目標：</strong>這是整個課程最關鍵的轉折點——從「診斷」（炎熱和荊棘）到「解方」（十字架）。幫助學員理解加拉太書2章20節的三個維度（救贖的事實、現今的實際、每日的結果），並開始把「在基督裡的身分」應用到他們的具體炎熱和荊棘中。</p>
          <p><strong>帶領重點：</strong>這一課的危險是讓十字架停留在「神學頭腦知識」而不是「改變生命的真理」。帶領者需要持續地把神學連結到具體的生活情境：「如果這個福音真理是真的，那麼在___的情況下，你怎麼會有不同的回應？」這種連結幫助學員從頭腦知道到心靈相信。</p>
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
            <h3 className="font-bold text-indigo-700 mb-2">1. 過渡段：從荊棘到十字架（5分鐘）</h3>
            <p className="text-gray-700 mb-2">帶領者用一段過渡語言把前兩課（荊棘篇）和今天（十字架篇）連結起來：「我們已經誠實地看見了自己的荊棘和荊棘的根源。今天，我們要看見唯一能真正改變這些荊棘的力量——十字架。」</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">2. X光問題分享（10分鐘）</h3>
            <p className="text-gray-700 mb-2">邀請2-3位學員分享他們上週的X光問題練習的一個洞見，特別是：「你辨識出了什麼偶像？」不需要分享所有問題，只需一個最重要的發現。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">3. DVD觀看（40分鐘）</h3>
            <p className="text-gray-700">播放第9課DVD。重點：加拉太書2章20節的三個維度、以十字架為中心的生活的三種果實、「在基督裡的身分」的實際意義。</p>
            <p className="text-sm text-gray-600 mt-2 bg-indigo-50 p-3 rounded border-l-2 border-indigo-300">帶領提示：播放前，問學員：「我們上兩課看見了我們的荊棘和偶像。今天觀看時，留意：十字架如何直接回應我最主要的荊棘和偶像？」這個問題讓DVD的觀看更有針對性和個人意義。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">4. 加拉太書2章20節的帶領默想（10分鐘）</h3>
            <p className="text-gray-700 mb-2">帶領者帶著學員把加拉太書2章20節的三個部分（已經同死、基督在我裡面活著、因信而活）應用到他們各自的主要荊棘：「如果你的荊棘是『以惡報惡』，十字架的哪個真理最直接地應對這個荊棘？」</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">5. 小組討論（20分鐘）</h3>
            <p className="text-gray-700">圍繞本課主要問題：「在哪些具體的地方，你沒有讓十字架引導與塑造你的處境和人際關係？」開始更新自我成長方案的「十字架在哪裡」欄位。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">6. 作業說明（5分鐘）</h3>
            <p className="text-gray-700">作業：閱讀加拉太書2章15-21節，完成自我成長方案的「十字架在哪裡」欄位（要具體，不要泛泛而言）。</p>
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
            <h3 className="font-bold text-blue-700 mb-2">核心概念一：「宗教型」vs「福音型」的生活</h3>
            <p className="mb-2">帶領者需要清楚地描述這兩種截然不同的動機：</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-white p-3 rounded border border-red-200">
                <p className="font-bold text-red-700 mb-1">宗教型（荊棘的根源）</p>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-0.5">
                  <li>「如果我夠好，神就愛我」</li>
                  <li>服事為了贏得接納</li>
                  <li>失敗導致絕望或防衛</li>
                  <li>成功導致驕傲</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded border border-green-200">
                <p className="font-bold text-green-700 mb-1">福音型（果實的根源）</p>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-0.5">
                  <li>「因為神已愛我，我服事祂」</li>
                  <li>服事出於感恩和愛</li>
                  <li>失敗帶我回到恩典</li>
                  <li>成功歸榮耀給神</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-blue-700 mb-2">核心概念二：加拉太書2章20節的應用方式</h3>
            <p className="mb-2">帶領者要幫助學員把加拉太書2章20節的三個維度應用到具體情境：</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong>第一維度（已同死）：</strong>「那個靠自己的力量解決問題的老我，在十字架上已經死了。我不需要再靠控制和努力來得到安全感。」</li>
              <li><strong>第二維度（基督在我裡面）：</strong>「我不是靠自己的力量去面對這個炎熱——基督住在我裡面，祂的力量和智慧可以在我裡面運作。」</li>
              <li><strong>第三維度（因信而活）：</strong>「今天，在這個具體的情況中，我選擇相信福音是真的，而不是靠感覺或看見作決定。」</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-blue-700 mb-2">核心概念三：在基督裡的身分改變期待</h3>
            <p>帶領者要幫助學員看見：偶像之所以對我們有這麼大的掌控，是因為我們需要它們來得到安全感、認可、和意義。但如果我們的安全感已在基督裡得到滿足（我是被神完全接納的），我們的認可感已在基督裡得到滿足（我是神所愛的），那麼偶像的吸引力就會大大降低——不是因為我們更努力，而是因為我們更深地相信了福音。</p>
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
            <p className="font-bold text-cyan-700 mb-2">問題1（加拉太書2章20節）：「基督在我裡面活著」的具體意義</p>
            <p className="text-gray-700 mb-2">問：「在你目前最大的炎熱中，『基督在我裡面活著』意味著什麼？如果真的相信這個，你的回應會有什麼不同？」</p>
            <p className="text-sm text-gray-600 bg-cyan-50 p-2 rounded">帶領提示：這個問題需要學員從抽象神學到具體情境。幫助他們說出：「如果基督在我裡面，當我的同事批評我時，我不需要用憤怒來保護自己的形象，因為我的身分不建立在同事的評價上，而建立在神的接納上。所以我可以開放地聽批評，甚至承認對的部分。」</p>
          </div>
          <div className="bg-white p-4 rounded border border-cyan-200">
            <p className="font-bold text-cyan-700 mb-2">問題2：「我沒有讓十字架引導的地方」</p>
            <p className="text-gray-700 mb-2">邀請學員誠實地回答：「在你的生活中，哪個具體的方面，你最明顯地活得好像沒有基督一樣？（不信靠他？靠自己的力量？把別人當作偶像？）」</p>
            <p className="text-sm text-gray-600 bg-cyan-50 p-2 rounded">帶領提示：這個問題要求的是誠實和謙卑，而不是表演性的靈命展示。帶領者先示範：「我自己在___這個方面，最容易活得好像沒有基督一樣。」給予學員許可和安全感去誠實回答。</p>
          </div>
          <div className="bg-white p-4 rounded border border-cyan-200">
            <p className="font-bold text-cyan-700 mb-2">問題3：自我成長方案的「十字架」欄位</p>
            <p className="text-gray-700 mb-2">邀請1-2位學員分享他們開始填寫的「十字架在哪裡」欄位。帶領者幫助他們把十字架的真理說得更具體（不是「相信耶穌」，而是「相信我在基督裡被完全接納這個事實，使我不需要用___來換取___」）。</p>
            <p className="text-sm text-gray-600 bg-cyan-50 p-2 rounded">參考答案示例：「我的炎熱是婚姻衝突，我的荊棘是冷戰和憤怒，我的偶像是需要被尊重。十字架在哪裡？——在基督裡，我的尊嚴和價值已被神確認，我不需要靠配偶的尊重來感到有價值。所以我可以放下冷戰，主動去修復關係，即使我認為我是對的。」</p>
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
            <h3 className="font-bold text-teal-700 mb-2">「每日身分提醒」的帶領示範</h3>
            <p>在課程結束前，帶領者和所有學員一起大聲說出加拉太書2章20節：「我已經與基督同釘十字架，現在活著的不再是我，乃是基督在我裡面活著；並且我如今在肉身活著，是因信神的兒子而活；他是愛我，為我捨己。」然後說：「這是你每天早晨可以做的事——宣告你的身分，然後在這個身分下開始新的一天。」</p>
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
            <p><strong>挑戰：</strong>學員說：「我知道這些真理，但感覺不到它。」</p>
            <p className="text-sm text-orange-700 mt-2"><strong>技巧：</strong>「『因信而活』（加拉太書2章20節）的意思就是：即使感覺不到，我仍然選擇相信。信心的行動常常走在感覺的前面——我先選擇按真理行動，感覺有時候（不總是）會跟上來。但即使感覺沒有跟上，按真理行動仍然是對的。」</p>
          </div>
          <div className="bg-white p-4 rounded border border-orange-200">
            <p><strong>挑戰：</strong>學員對「新身分」的理解停留在頭腦，無法內化。</p>
            <p className="text-sm text-orange-700 mt-2"><strong>技巧：</strong>用具體的問題幫助他們：「你的配偶（或父母、或孩子）最常讓你感到不安全的是什麼？（如：批評、忽視、否定）現在，如果你真的相信神已完全接納了你，他/她的___（批評/忽視/否定）對你的『安全感』還有那麼大的影響嗎？」把抽象的身分連結到具體的人際脆弱點，幫助學員感受到身分的真實力量。</p>
          </div>
        </div>
      </section>

      {/* 帶領禱告 */}
      <section className="bg-gray-100 p-6 rounded">
        <h3 className="font-bold text-gray-800 mb-3">帶領禱告建議</h3>
        <p className="text-gray-700 text-sm italic">「主耶穌，感謝祢，在十字架上祢為我們做了一切——我們的罪已被赦免，我們的身分已被確立，我們的偶像已被揭露和處理。求祢幫助我們，不只是頭腦知道這些真理，而是每天、在每個炎熱中，真正相信並活出『基督在我裡面活著』的現實。讓我們的生活，因著更深地相信十字架，而逐漸從荊棘轉向果實。奉耶穌的名求，阿們。」</p>
      </section>
    </div>
  );
}
