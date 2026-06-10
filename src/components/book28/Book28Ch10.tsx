import React from 'react';
import { BookOpen, Users, MessageCircle, Lightbulb, AlertCircle, Clock } from 'lucide-react';

export default function Book28Ch10() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-emerald-700 mb-2">第10課：十字架與日常生活——十架篇（下）</h1>
      <p className="text-gray-500 text-sm">教師本 · 帶領指南 · 《人如何改變》保羅·區普</p>

      {/* 帶領簡介 */}
      <section className="border-l-4 border-purple-400 bg-purple-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-purple-600" />
          <h2 className="text-xl font-bold text-purple-700">帶領簡介</h2>
        </div>
        <div className="space-y-3 text-gray-700">
          <p><strong>課程目標：</strong>把十字架的神學帶入日常生活的具體操練。以「信心」和「悔改」作為每天實踐的兩個核心動作；用路加福音15章浪子的三步驟（覺醒、正視真相、改變重心）作為悔改的具體指引；用「喬的案例」示範改變模式的完整運作。</p>
          <p><strong>帶領重點：</strong>這一課的重點是幫助學員看見：十字架不是「一次性的決定」，而是「每天、甚至每小時的生活方式」。悔改不是軟弱的表現，而是屬靈力量的表現；每次帶著荊棘回到十字架，都是屬靈成長。帶領者要讚美誠實的悔改，使小組文化充滿恩典。</p>
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
            <h3 className="font-bold text-indigo-700 mb-2">1. 上週自我成長方案分享（15分鐘）</h3>
            <p className="text-gray-700 mb-2">邀請2-3位學員分享他們完成的「十字架在哪裡」欄位。帶領者幫助學員把十字架的應用說得更具體——如果學員說「相信神的恩典」，引導他們進一步說：「在這個具體的情況中，相信神的恩典如何改變你的回應？」</p>
            <p className="text-sm text-gray-600 bg-indigo-50 p-3 rounded border-l-2 border-indigo-300">帶領提示：讚揚學員在自我成長方案上的努力，即使他們填寫不完整。「你能夠開始思考十字架如何應用，這本身已經是成長的跡象。」</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">2. DVD觀看（35分鐘）</h3>
            <p className="text-gray-700">播放第10課DVD。重點：「喬的案例」示範、信心和悔改的日常實踐、路加福音15章浪子的三步驟、約翰一書的稱義和收納。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">3. 路加福音15章的帶領讀（10分鐘）</h3>
            <p className="text-gray-700 mb-2">帶領者帶著學員讀路加福音15章11-24節（浪子的悔改），特別強調三個步驟：第17節（覺醒）、第18節（正視）、第18-20節（起身回去）。</p>
            <p className="text-sm text-gray-600 bg-indigo-50 p-3 rounded border-l-2 border-indigo-300">帶領提示：也花時間讀父親的回應（第20節）——強調「他離得還遠，父親看見，就動了慈心，跑去」。父親的主動、快速、和不問原因的迎接，是神對我們悔改的回應的最美圖像。這個確信是悔改能夠重複發生的基礎。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">4. 小組討論（25分鐘）</h3>
            <p className="text-gray-700">使用主要問題「你是誰？你在基督裡的新身分是什麼？」和路加福音15章的討論問題，幫助學員完成自我成長方案的全部四欄。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">5. 作業說明（5分鐘）</h3>
            <p className="text-gray-700">作業：完整填寫自我成長方案的所有四欄（炎熱、荊棘、十字架、果實），準備下週在小組中分享。讀約翰一書1-3章。</p>
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
            <h3 className="font-bold text-blue-700 mb-2">核心概念一：「喬的案例」——帶領者的使用指南</h3>
            <p className="mb-2">「喬的案例」（婚姻冷漠的丈夫）是本課最重要的教學工具。帶領者要確保學員理解案例的完整分析：</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>炎熱：妻子的批評</li>
              <li>荊棘：憤怒和防衛（以惡報惡）</li>
              <li>偶像：控制感（需要維護「好丈夫」的自我形象）</li>
              <li>十字架：在基督裡被完全接納，不需要靠形象來得安全感</li>
              <li>果實：放下防衛，真正聽妻子的感受，並主動悔改改變</li>
            </ul>
            <p className="mt-1">帶領者可以引導學員把這個模式套用到他們自己的情境中。</p>
          </div>
          <div>
            <h3 className="font-bold text-blue-700 mb-2">核心概念二：浪子三步驟的帶領應用</h3>
            <p className="mb-1">帶領者要幫助學員把浪子的三步驟應用到他們的具體荊棘：</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong>覺醒：</strong>「我真的有荊棘問題，這是真實的，我需要面對它」——不再否認或找藉口</li>
              <li><strong>正視：</strong>「我的荊棘傷害了神和別人，不只是不方便——這是罪，我對此負責」</li>
              <li><strong>改變重心：</strong>「我選擇起身行動，不只是後悔——具體的行動包括：向神認罪、向人道歉、改變行為」</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-blue-700 mb-2">核心概念三：霍雷修斯·博納的引語——帶領者的反思</h3>
            <p>「給我看你如何看待罪，我就告訴你你對十字架的理解有多深。」帶領者可以先讓這句話停留在空氣中，然後問學員：「你對荊棘/罪的看法，說明了你對十字架的理解程度。你是否認為你的荊棘真的很嚴重——嚴重到需要基督死在十字架上？還是你把荊棘主要看作『問題』而非『罪』？」這個問題幫助學員重新評估罪和恩典的關係。</p>
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
            <p className="font-bold text-cyan-700 mb-2">問題1（路加福音15章）：大兒子的問題</p>
            <p className="text-gray-700 mb-2">問：「大兒子（路加福音15章28-30節）的問題和小兒子的問題有什麼根本的相同之處？」</p>
            <p className="text-sm text-gray-600 bg-cyan-50 p-2 rounded">參考答案：兩個兒子的問題都是「把父親當作資源來源，而不是關係的對象」。小兒子要了財產就走；大兒子在家裡服事，但也是為了贏得自己的那份。兩個人都沒有因為愛父親而在父親家裡。這是「宗教型」（大兒子）和「放蕩型」（小兒子）的對比，但根源相同。</p>
          </div>
          <div className="bg-white p-4 rounded border border-cyan-200">
            <p className="font-bold text-cyan-700 mb-2">問題2（主要問題）：你是誰？</p>
            <p className="text-gray-700 mb-2">邀請學員用5個「在基督裡，我是___」的句子回答「你是誰？」（以約翰一書的語言為基礎），然後問：「這些句子中哪一個最難讓你真正相信？為什麼？」</p>
            <p className="text-sm text-gray-600 bg-cyan-50 p-2 rounded">帶領提示：學員最難相信的身分語句，往往揭示了他們最主要的偶像。如果學員最難相信「我是被神完全接納的」，可能揭示的偶像是「認可」；如果最難相信「我有神給我的一切所需」，可能揭示的偶像是「物質保障」。</p>
          </div>
          <div className="bg-white p-4 rounded border border-cyan-200">
            <p className="font-bold text-cyan-700 mb-2">問題3：悔改的實踐</p>
            <p className="text-gray-700 mb-2">用浪子三步驟，引導學員思考他們需要悔改的具體荊棘：「在你目前最大的荊棘中，你已經到哪個步驟了？（還是否認？還是後悔沒有行動？還是已經改變方向？）」</p>
            <p className="text-sm text-gray-600 bg-cyan-50 p-2 rounded">帶領提示：這個問題很個人，給予學員充分的空間選擇分享的深度。重要的是讓每個人都在心裡誠實地回答，即使不在小組中說出來。</p>
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
            <h3 className="font-bold text-teal-700 mb-2">創造悔改的文化</h3>
            <p>帶領者要在這課刻意地創造一個「悔改是受歡迎的」文化。當學員分享他們的荊棘和悔改時，帶領者的回應不是「你真的很差」，也不是「沒關係，每個人都這樣」，而是「謝謝你的誠實。你帶著這個來到神面前，這是信心的行動。神歡迎這樣的回來。」</p>
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
            <p><strong>挑戰：</strong>學員在悔改時感到過度的羞愧和自責，無法繼續前進。</p>
            <p className="text-sm text-orange-700 mt-2"><strong>技巧：</strong>區分「真實的悔恨」（承認罪的嚴重性）和「過度的自責」（停留在羞愧中，無法接受恩典）。哥林多後書7章10節說：「世俗的憂愁是叫人死。」過度的自責不是敬虔，而是另一種形式的驕傲（「我的罪嚴重到連神也不能饒恕」）。帶著學員讀約翰一書2章1-2節，強調：「我們有一位中保」——站在中保那一邊，不要讓羞愧高過中保的功效。</p>
          </div>
          <div className="bg-white p-4 rounded border border-orange-200">
            <p><strong>挑戰：</strong>學員一直悔改同樣的罪，開始懷疑自己是否真的改變了。</p>
            <p className="text-sm text-orange-700 mt-2"><strong>技巧：</strong>這是一個非常常見的掙扎。提醒學員：（1）重複的悔改不是失敗的証明，而是持續依靠神的証明；（2）成長是漸進的——注意荊棘發生的頻率是否降低了、發生後你是否更快地悔改了？這些都是成長的跡象；（3）「直到耶穌基督的日子」（腓立比書1章6節）——神還在工作，不要因為緩慢而放棄。</p>
          </div>
        </div>
      </section>

      {/* 帶領禱告 */}
      <section className="bg-gray-100 p-6 rounded">
        <h3 className="font-bold text-gray-800 mb-3">帶領禱告建議</h3>
        <p className="text-gray-700 text-sm italic">「父神，謝謝祢，就像那位父親看見浪子離得還遠就跑去迎接，祢也是這樣迎接我們每一次的悔改回轉。我們帶著各自的荊棘和偶像來到祢面前，相信祢的恩典夠用。求祢幫助我們，在這週，每當發現荊棘，就選擇三個步驟：覺醒、正視、改變重心。不讓羞愧阻止我們回到祢面前。感謝祢，我們的中保耶穌基督已經為我們做了一切。阿們。」</p>
      </section>
    </div>
  );
}
