import React from 'react';
import { BookOpen, Users, MessageCircle, Lightbulb, AlertCircle, Clock } from 'lucide-react';

export default function Book28Ch12() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-emerald-700 mb-2">第12課：令人耳目一新的善果——果實篇（下）</h1>
      <p className="text-gray-500 text-sm">教師本 · 帶領指南 · 《人如何改變》保羅·區普</p>

      {/* 帶領簡介 */}
      <section className="border-l-4 border-purple-400 bg-purple-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-purple-600" />
          <h2 className="text-xl font-bold text-purple-700">帶領簡介</h2>
        </div>
        <div className="space-y-3 text-gray-700">
          <p><strong>課程目標：</strong>以詩篇4篇（大衛在危機中的信靠）、以賽亞書58章（真正的敬虔）、以賽亞書55章（神白白的邀請）、和何西阿書14章（復興後的善果圖景）完整結束整個課程。幫助學員看見：真正的果實不只是個人靈命的改善，更是成為神在世界中恩典的管道。最後的時間用來回顧整個課程、分享成長的見證，並彼此禱告和祝福。</p>
          <p><strong>帶領重點：</strong>這是最後一課，帶領者要在「結束整個課程內容」和「給學員空間回顧和見証」之間做好平衡。建議把更多時間給見証分享，因為這是整個課程的果實展現，也是群體中最強大的鼓勵力量。帶領者要帶著喜樂和感謝來到這堂課。</p>
          <p><strong>預期時間：</strong>100-110分鐘（最後一課，適當延長）</p>
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
            <h3 className="font-bold text-indigo-700 mb-2">1. 課程整體回顧（10分鐘）</h3>
            <p className="text-gray-700 mb-2">帶領者在白板上寫出整個課程的架構：神的終極目標（第1課）→資源：新婦（第2課）→環境：群體（第3課）→大圖畫：炎熱→荊棘→十字架→果實（第4課）→炎熱篇（第5-6課）→荊棘篇（第7-8課）→十字架篇（第9-10課）→果實篇（第11-12課）。說明：「今天我們完成這個旅程，但這個旅程在你的生命中繼續。」</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">2. DVD觀看（30分鐘）</h3>
            <p className="text-gray-700">播放第12課DVD。重點：詩篇4篇的三個回應、以賽亞書58章的真正敬虔、以賽亞書55章的白白邀請、何西阿書14章的善果圖景、腓立比書1章6節的永恆保證。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">3. 課程見証分享（35分鐘）</h3>
            <p className="text-gray-700 mb-2">這是本課最重要的部分。邀請每位學員分享（每人3-4分鐘）：</p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-gray-700">
              <li>這個課程對你最大的一個影響（對神的認識、對自己的認識、或對關係的影響）</li>
              <li>你在自己身上看見的一個最具體的改變跡象</li>
              <li>你最渴望繼續成長的一個方向</li>
            </ul>
            <p className="text-sm text-gray-600 bg-indigo-50 p-3 rounded border-l-2 border-indigo-300">帶領提示：帶領者先分享，並且分享得真實而具體（不只是「這個課程很棒」，而是一個具體的改變）。在每位學員分享後，帶領者可以說：「謝謝你的分享，我在你這段時間看見了___（具體的果實跡象）。」這種具體的確認是最有力的結束祝福。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">4. 彼此禱告（15分鐘）</h3>
            <p className="text-gray-700 mb-2">分成2-3人的小組，每組互相為對方禱告：「為他/她在課程中看見的成長感謝神，並為他/她繼續成長的渴望禱告。」整個小組在禱告後一起再次宣告腓立比書1章6節作為結束。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">5. 課程後的持續同行建議（10分鐘）</h3>
            <p className="text-gray-700">帶領者提供具體的建議，幫助學員在課程結束後繼續成長：閱讀原著、持續使用自我成長方案、尋找問責夥伴、考慮加入下一個小組或帶領一個小組。</p>
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
            <h3 className="font-bold text-blue-700 mb-2">核心概念一：詩篇4篇——果實在最深炎熱中的最終展現</h3>
            <p>大衛在兒子押沙龍叛變時寫下詩篇4篇，卻以「我必安然躺下睡覺，因為獨有你耶和華使我安然居住」結束。這是果實最真實的樣子——不是環境安全之後的平安，而是在危機中仍然有「獨有你耶和華」的安息。帶領者要幫助學員看見：這個平安不是天生的，而是走過炎熱、荊棘、十字架這條路之後，在心裡逐漸建立起來的對神的信靠。</p>
          </div>
          <div>
            <h3 className="font-bold text-blue-700 mb-2">核心概念二：以賽亞書58章——果實面向社會的維度</h3>
            <p>以賽亞書58章批評「宗教性敬虔」（禁食、宗教行為）而讚揚「真正的敬虔」（解放被壓迫的、分享資源、接待無家可歸的）。帶領者要幫助學員看見：以十字架為中心的生活，最終一定會擴展到對社會和鄰舍的關愛。改變不只是個人的靈命成就，而是使我們成為神在世界中恩典的管道。這也為學員提供了課程結束後繼續活出果實的方向。</p>
          </div>
          <div>
            <h3 className="font-bold text-blue-700 mb-2">核心概念三：腓立比書1章6節——帶領者最後要傳遞的保證</h3>
            <p>「我深信那在你們心裡動了善工的，必成全這工，直到耶穌基督的日子。」這節經文是整個課程最有力的保證，也是帶領者在課程結束時要傳遞給每位學員的禮物。改變是神的工作——他開始了，他必成全。這給學員信心：即使成長緩慢，即使荊棘仍然出現，神的工作不會中途放棄。</p>
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
            <p className="font-bold text-cyan-700 mb-2">課程見証討論引導問題</p>
            <p className="text-gray-700 mb-2">帶領者可以使用這些問題引導最後的分享：</p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-gray-700 text-sm">
              <li>「在這12課中，哪一個概念（炎熱/荊棘/十字架/果實）對你個人最有突破？」</li>
              <li>「你的自我成長方案，最讓你感到誠實或吃驚的一個發現是什麼？」</li>
              <li>「在你最重要的一段關係中，你看見了什麼樣的改變跡象（即使很小）？」</li>
              <li>「課程結束後，你最想繼續做的一件事是什麼？（如：繼續使用自我成長方案、找問責夥伴、讀原著）」</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded border border-cyan-200">
            <p className="font-bold text-cyan-700 mb-2">主要問題：「神在何處呼召你活出你身為神兒女的潛力？」</p>
            <p className="text-gray-700 mb-2">這個問題把整個課程引向未來：不只是「你改變了什麼」，而是「你將要在哪裡繼續結果實」。引導學員思考一個具體的領域（家庭？職場？社區？教會？），並說出一個具體的行動計畫。</p>
            <p className="text-sm text-gray-600 bg-cyan-50 p-2 rounded">帶領提示：最後的問題要充滿盼望和期待——不是讓學員感到壓力，而是讓他們帶著使命感結束這個課程。「你的炎熱是神給你的訓練場，你的荊棘是你需要不斷帶到十字架的提醒，你的果實是神在你生命中的見証。繼續走這條路——它通向完全像基督的樣式。」</p>
          </div>
        </div>
      </section>

      {/* 討論與應用引導 */}
      <section className="border-l-4 border-teal-400 bg-teal-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <MessageCircle className="w-6 h-6 text-teal-600" />
          <h2 className="text-xl font-bold text-teal-700">帶領者的最後任務：傳遞盼望</h2>
        </div>
        <div className="space-y-4 text-gray-700">
          <div>
            <h3 className="font-bold text-teal-700 mb-2">給每位學員的個人話語</h3>
            <p className="mb-2">在課程結束前，帶領者可以準備給每位學員一句個人的話語——基於你在整個課程中觀察到的他/她的成長和潛力。這不需要很長，但要真實和具體：</p>
            <div className="bg-white p-4 rounded border border-teal-200">
              <p className="text-sm italic">例如：「___，我在這12週中看見你從開始時的保守和防衛，到今天能夠誠實地分享你的掙扎。這是很大的成長。我相信神還要繼續在你的婚姻關係中做美好的事——不要放棄繼續走這條路。」</p>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-teal-700 mb-2">課程後的問責建議</h3>
            <p>鼓勵學員在課程結束後，每隔2-4週與一位課程夥伴聯繫，使用以下問題彼此問責：</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>「你目前最大的炎熱是什麼？」</li>
              <li>「你最常出現的荊棘反應是什麼？」</li>
              <li>「你最近一次帶著荊棘回到十字架是什麼時候？」</li>
              <li>「你在哪個方面看見了果實的跡象？」</li>
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
            <p><strong>挑戰：</strong>有學員在最後一課感到沮喪：「我覺得我這12課沒有什麼改變。」</p>
            <p className="text-sm text-orange-700 mt-2"><strong>技巧：</strong>首先，帶領者要指出這位學員在整個課程中的具體成長（即使很小）。其次，溫和地提醒：（1）改變不是一條直線，過程中會有倒退；（2）就算只是「更認識自己的荊棘」，這也是屬靈成長；（3）腓立比書1章6節的應許是給他/她的——神還在工作，「感覺不到」不等於「沒有發生」。最重要的是不要讓這個學員帶著沮喪離開，讓他/她看見一個真實的改變跡象。</p>
          </div>
          <div className="bg-white p-4 rounded border border-orange-200">
            <p><strong>挑戰：</strong>小組成員表達不捨，希望課程繼續。</p>
            <p className="text-sm text-orange-700 mt-2"><strong>技巧：</strong>這是一個非常好的跡象！把這個情感轉化為行動：「我們對彼此的這種依戀，正是群體生命的果實。讓我們把這個群體的連結延續下去——可以繼續定期見面，或者一起讀下一本書，或者其中有人可以帶領另一組新的學員走過這個課程。」把結束轉化為更大的使命的起點。</p>
          </div>
          <div className="bg-white p-4 rounded border border-orange-200">
            <p><strong>挑戰：</strong>時間不夠，無法讓所有人完整分享見証。</p>
            <p className="text-sm text-orange-700 mt-2"><strong>技巧：</strong>如果人數較多（6人以上），可以把見証分享分成小組進行（2-3人一組），而不是全體大組分享。這讓每個人都有足夠的時間說話，也讓分享更親密。帶領者最後再邀請1-2位願意的人在全組面前分享最亮點的一句話。</p>
          </div>
        </div>
      </section>

      {/* 帶領禱告 */}
      <section className="bg-gray-100 p-6 rounded">
        <h3 className="font-bold text-gray-800 mb-3">課程結束的帶領禱告</h3>
        <p className="text-gray-700 text-sm italic">「主啊，感謝祢帶領我們走完這12課的旅程。感謝祢讓我們看見炎熱是祢的工具，荊棘是我們需要誠實面對的，十字架是唯一的樞紐，果實是祢在我們裡面工作的結果。今天我們感謝祢在每一位弟兄姐妹身上已經動了善工。我們相信那在他們心裡動了善工的，必成全這工，直到耶穌基督的日子。帶領他們繼續走這條路——在炎熱中信靠，在荊棘中悔改，在十字架前更新，在果實中榮耀祢。願我們的生命成為祢恩典的香氣，吸引身邊的人歸向祢。奉耶穌的名，感謝讚美，阿們。」</p>
      </section>
    </div>
  );
}
