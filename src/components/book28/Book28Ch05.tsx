import React from 'react';
import { BookOpen, Users, MessageCircle, Lightbulb, AlertCircle, Clock } from 'lucide-react';

export default function Book28Ch05() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-emerald-700 mb-2">第5課：現實世界中真實的你——炎熱篇（上）</h1>
      <p className="text-gray-500 text-sm">教師本 · 帶領指南 · 《人如何改變》保羅·區普</p>

      {/* 帶領簡介 */}
      <section className="border-l-4 border-purple-400 bg-purple-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-purple-600" />
          <h2 className="text-xl font-bold text-purple-700">帶領簡介</h2>
        </div>
        <div className="space-y-3 text-gray-700">
          <p><strong>課程目標：</strong>從理論進入現實。這是第一課真正把改變模式應用到具體生命經歷的課——聚焦「炎熱」的深度探討。幫助學員從詩篇88篇和雅各書1章了解：炎熱是神的工具，揭示我們內心的真實，帶我們到神面前。</p>
          <p><strong>帶領重點：</strong>這一課帶領者需要特別注意學員可能帶來的真實情感重量。詩篇88篇是黑暗的哀歌，帶領者要幫助學員在「誠實面對黑暗」和「持守對神的信靠」之間找到平衡，不要把信仰變成「必須永遠積極」的壓力。</p>
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
            <h3 className="font-bold text-indigo-700 mb-2">1. 作業分享：第一份自我成長方案（15分鐘）</h3>
            <p className="text-gray-700 mb-2">邀請2-3位願意的學員分享他們的「自我成長方案」（炎熱和荊棘部分）。帶領者要在分享後表達肯定，並幫助學員看見：「能夠誠實寫出這些，本身就是屬靈成長的跡象！」</p>
            <p className="text-sm text-gray-600 bg-indigo-50 p-3 rounded border-l-2 border-indigo-300">帶領提示：第一次分享自我成長方案可能令人緊張。帶領者可以先分享自己的方案，降低學員的焦慮。在學員分享時，不要急著給建議，先給予接納和感謝。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">2. DVD觀看（35分鐘）</h3>
            <p className="text-gray-700">播放第5課DVD。重點：炎熱的性質（揭示、工具、主權）、詩篇88篇的誠實哀歌、雅各書1章的試煉觀，以及8個自我診斷問題。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">3. 詩篇88篇的帶領讀（10分鐘）</h3>
            <p className="text-gray-700 mb-2">帶領者帶領學員緩慢地讀詩篇88篇，特別是第14-18節。讀後問：「這位詩人的感受，讓你想到自己生命中哪個時刻？」給學員30秒安靜默想，然後邀請2-3人分享。</p>
            <p className="text-sm text-gray-600 bg-indigo-50 p-3 rounded border-l-2 border-indigo-300">帶領提示：如果有學員說出他們目前正在的極深黑暗（如抑鬱、家人去世），帶領者要先給予接納和同理，不要急著「修正」他們的感受。同時，如果感覺某人需要個別關懷，私下後續聯繫。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">4. 小組討論（25分鐘）</h3>
            <p className="text-gray-700">使用8個自我診斷問題（炎熱揭示什麼？）的其中2-3個作為討論問題。帶領者可以從第1個（信靠）和第5個（慾望）開始，這兩個最容易引出具體的分享。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">5. 布置作業（5分鐘）</h3>
            <p className="text-gray-700">說明本週作業：每天寫「炎熱日記」，並更新自我成長方案的「炎熱」那欄，加入更多具體的細節。</p>
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
            <h3 className="font-bold text-blue-700 mb-2">核心概念一：詩篇88篇——神接受黑暗的禱告</h3>
            <p>詩篇88篇被收錄在聖經中的事實本身就是一個神學宣告：神不只接受我們在光明中的讚美，也接受我們在黑暗中的哀嘆。帶領者要幫助學員突破「信徒必須永遠積極」的謊言——詩篇88篇給我們許可，在黑暗中誠實地向神呼喊，不需要假裝平靜。</p>
          </div>
          <div>
            <h3 className="font-bold text-blue-700 mb-2">核心概念二：雅各書1章——試煉的神聖目的</h3>
            <p>「以為大喜樂」（雅各書1章2節）的關鍵是「知道」（第3節）——因為知道試煉的目的（成全我們），所以才能以此為喜樂。這不是逃避痛苦，而是在痛苦中看見目的。帶領者的工作是幫助學員把注意力從「炎熱的痛苦」轉向「炎熱的目的」。</p>
          </div>
          <div>
            <h3 className="font-bold text-blue-700 mb-2">核心概念三：8個自我診斷問題——炎熱的X光</h3>
            <p>這8個問題（關於信靠、盼望、身分、控制、慾望、關係、神的觀念、恩典）幫助學員「讀懂」他們的炎熱——不是把炎熱只看作需要解決的問題，而是看作揭示他們內心的X光機。帶領者可以選擇其中2-3個最能引發對話的問題用於小組討論。</p>
          </div>
        </div>
      </section>

      {/* 小組活動帶領說明 */}
      <section className="border-l-4 border-cyan-400 bg-cyan-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <Users className="w-6 h-6 text-cyan-600" />
          <h2 className="text-xl font-bold text-cyan-700">小組活動帶領說明與參考答案</h2>
        </div>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border border-cyan-200">
            <p className="font-bold text-cyan-700 mb-2">問題（詩篇88篇）：誠實的哀哭</p>
            <p className="text-gray-700 mb-2">問：「詩篇88篇有沒有任何一節讓你感到共鳴？詩人在最黑暗中持續做的一件事是什麼？」</p>
            <p className="text-sm text-gray-600 bg-cyan-50 p-2 rounded">參考答案：即使在第18節「我的親愛……躲開我」這個最黑暗的句子中，詩人仍然是在「向神說話」——整首詩都是禱告。在最深的黑暗中，向神說話（無論說什麼）本身就是信心。這與「假裝一切都好的讚美」有本質的不同——這是「真實的禱告」。</p>
          </div>
          <div className="bg-white p-4 rounded border border-cyan-200">
            <p className="font-bold text-cyan-700 mb-2">問題（雅各書1章）：試煉中的大喜樂</p>
            <p className="text-gray-700 mb-2">問：「雅各書說的『以為大喜樂』是建立在什麼基礎上的？這和表面的快樂有什麼不同？」</p>
            <p className="text-sm text-gray-600 bg-cyan-50 p-2 rounded">參考答案：「大喜樂」建立在「知道」（第3節）——知道試煉的目的。這不是情緒上的喜悅，而是對神計畫的信心。表面的快樂需要好環境；這種「喜樂」即使在苦難中也能有，因為它不依賴環境，而依賴對神的認識。</p>
          </div>
          <div className="bg-white p-4 rounded border border-cyan-200">
            <p className="font-bold text-cyan-700 mb-2">主要問題：「當炎熱臨到你的生命時，它揭示了你心中什麼樣的真實狀況？」</p>
            <p className="text-gray-700 mb-2">用8個問題中的1-2個（如「信靠」或「慾望」）幫助學員具體回答。</p>
            <p className="text-sm text-gray-600 bg-cyan-50 p-2 rounded">帶領提示：這個問題要求的是誠實的自我揭示，而不是「標準答案」。帶領者要確認學員的分享（「謝謝你的誠實」），不評判，不給建議（除非被問），而是讓分享的空間繼續安全。</p>
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
            <h3 className="font-bold text-teal-700 mb-2">注意：處理深度情感的技巧</h3>
            <p className="mb-2">這課的主題（炎熱）可能引發學員分享很深的痛苦或黑暗經歷。帶領者需要具備以下能力：</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong>接納：</strong>「謝謝你願意分享這些。這聽起來非常不容易。」</li>
              <li><strong>同理：</strong>不急著解釋或安慰，先讓學員感到被理解</li>
              <li><strong>邊界：</strong>如果某人需要個別輔導（而非小組支持），在課後私下安排</li>
              <li><strong>重定向：</strong>適度地從「傾訴」引回到「神如何在其中工作」</li>
            </ul>
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
            <p><strong>挑戰：</strong>學員認為炎熱是神的懲罰，而不是神的工具。</p>
            <p className="text-sm text-orange-700 mt-2"><strong>技巧：</strong>區分「懲罰」和「管教」——羅馬書8章1節說「如今那些在基督耶穌裡的，就不定罪了」，所以神的作為不是法律意義上的懲罰。但希伯來書12章說神「管教」我們，如同父親管教兒女——不是為了傷害，而是為了益處。炎熱更像是「父親的管教」，而非「法官的懲罰」。</p>
          </div>
          <div className="bg-white p-4 rounded border border-orange-200">
            <p><strong>挑戰：</strong>有學員長期面對無法改變的炎熱（如慢性病、失去親人），感到看不見盡頭的沮喪。</p>
            <p className="text-sm text-orange-700 mt-2"><strong>技巧：</strong>不要輕率地用「神有計畫」來回應這樣的痛苦——先給予同理。同時，可以溫和地指出：詩篇88篇描述的是持續的黑暗，但神仍然接受它。改變模式不保證外在炎熱的解除，但它改變我們在炎熱中的內心狀態。有些炎熱是今生不會解除的；在這種情況下，果實是「在炎熱中仍然信靠和順服」。</p>
          </div>
        </div>
      </section>

      {/* 帶領禱告 */}
      <section className="bg-gray-100 p-6 rounded">
        <h3 className="font-bold text-gray-800 mb-3">帶領禱告建議</h3>
        <p className="text-gray-700 text-sm italic">「主啊，我們帶著各自的炎熱來到祢面前。謝謝祢接受詩篇88篇作者那樣的禱告，讓我們知道，在黑暗中誠實向祢呼求是被允許的。求祢幫助我們在各自的炎熱中，不逃避，不否認，而是讓炎熱說出祢要它說的話。願我們的炎熱，成為祢在我們生命中更深工作的入口。奉耶穌的名求，阿們。」</p>
      </section>
    </div>
  );
}
