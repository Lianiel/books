import React from 'react';
import { BookOpen, Users, MessageCircle, Lightbulb, AlertCircle, Clock } from 'lucide-react';

export default function Book28Ch04() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-emerald-700 mb-2">第4課：神眼中的生活，神手中的改變</h1>
      <p className="text-gray-500 text-sm">教師本 · 帶領指南 · 《人如何改變》保羅·區普</p>

      {/* 帶領簡介 */}
      <section className="border-l-4 border-purple-400 bg-purple-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-purple-600" />
          <h2 className="text-xl font-bold text-purple-700">帶領簡介</h2>
        </div>
        <div className="space-y-3 text-gray-700">
          <p><strong>課程目標：</strong>這是整個課程最核心的概念課——介紹完整的改變模式：炎熱→荊棘→十字架→果實。學員需要充分理解這個「大圖畫」，才能在後續課程中有效地應用到自己的生命中。同時，本課也引入「自我成長方案」，一個貫穿整個課程其餘部分的實踐工具。</p>
          <p><strong>帶領重點：</strong>帶領者需要確保學員真正理解（而不只是聽懂）炎熱→荊棘→十字架→果實的架構。最好的方法是用一個具體的例子（可以是帶領者自己的生命故事）來示範這個模式的運作方式。</p>
          <p><strong>預期時間：</strong>90-100分鐘（這課內容最豐富，可能需要稍多時間）</p>
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
            <h3 className="font-bold text-indigo-700 mb-2">1. 複習前三課的架構（10分鐘）</h3>
            <p className="text-gray-700 mb-2">在白板上畫出前三課的核心概念：（1）神的終極目標：像基督；（2）資源：基督是新郎；（3）環境：群體。說明：今天我們要看「神如何達成這個目標」——改變的具體模式。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">2. DVD觀看（40分鐘）</h3>
            <p className="text-gray-700">播放第4課DVD。這是整個課程最關鍵的DVD，介紹炎熱→荊棘→十字架→果實的完整模式，以及「自我成長方案」工具。</p>
            <p className="text-sm text-gray-600 mt-2 bg-indigo-50 p-3 rounded border-l-2 border-indigo-300">帶領提示：播放前，在白板寫上「炎熱→荊棘→十字架→果實」四個詞，請學員在觀看時，把DVD的內容填入這個架構。這個主動的學習方式幫助學員記住核心概念。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">3. 概念確認與Q&A（10分鐘）</h3>
            <p className="text-gray-700 mb-2">DVD之後，確認學員理解這四個概念。問：「對你來說，哪個概念最清楚？哪個最模糊？」這個步驟很重要，確保所有人都在同一個基礎上，才能進入後面的討論。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">4. 「自我成長方案」介紹（10分鐘）</h3>
            <p className="text-gray-700 mb-2">介紹「自我成長方案」的四個欄位，用一個簡單的例子示範如何填寫（帶領者自己的例子最有說服力）。強調：這個工具不是測試，而是幫助。</p>
            <p className="text-sm text-gray-600 bg-indigo-50 p-3 rounded border-l-2 border-indigo-300">帶領者的示範例子可以是：炎熱=工作壓力；荊棘=對家人暴躁；十字架=我的身分不建立在工作成效上；果實=我希望回家時能先謝謝家人的等待。這個平凡的例子讓學員感到：「我也可以這樣做！」</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">5. 小組討論（20分鐘）</h3>
            <p className="text-gray-700">使用學員本的討論問題，引導學員把改變模式應用到自己目前的具體炎熱中。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">6. 作業說明（5分鐘）</h3>
            <p className="text-gray-700">本週作業的重點是完成第一份「自我成長方案」。說明：這份方案將在下週小組中分享，請學員誠實填寫。</p>
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
            <h3 className="font-bold text-blue-700 mb-2">核心概念一：炎熱（Heat）——神的主動工具</h3>
            <p className="mb-2">「炎熱」不是意外，也不是懲罰，而是神刻意安排的屬靈成長工具。炎熱的特徵：（1）超出我們的掌控；（2）揭示我們內心的真實狀態；（3）是神主權的安排。帶領者要幫助學員看見：他們目前生命中最讓他們感到不舒服的情況，正是神最有力地工作的地方。</p>
          </div>
          <div>
            <h3 className="font-bold text-blue-700 mb-2">核心概念二：荊棘（Thorns）——我們的罪性回應</h3>
            <p className="mb-2">「荊棘」是我們在炎熱中以罪性方式回應的總稱。荊棘的六種主要形式：否認、逃避、誇大、以惡報惡、自甘墮落、自以為義。重要提示：荊棘的根源是心中的偶像（我們把對神的渴望轉移到受造之物上）。帶領者要強調：辨識荊棘不是為了定罪，而是為了帶到十字架前。</p>
          </div>
          <div>
            <h3 className="font-bold text-blue-700 mb-2">核心概念三：十字架（Cross）——改變唯一的樞紐</h3>
            <p className="mb-2">十字架是從荊棘到果實唯一的通道。以十字架為中心的生活包含：（1）信心——相信並活出「在基督裡的身分」；（2）悔改——真實的轉向，不只是後悔。這不是一次性的決定，而是每天、每個情境的選擇。</p>
          </div>
          <div>
            <h3 className="font-bold text-blue-700 mb-2">核心概念四：果實（Fruit）——真實改變的結果</h3>
            <p>「果實」是從愛神、愛人的心中自然流露的生命表現，不是靠意志力外在製造的好行為。果實的特徵：動機的純正（出於愛）、內心的改變（不只是行為）、關係的滋潤（為別人帶來益處）。</p>
          </div>
        </div>
      </section>

      {/* 小組活動帶領說明與答案 */}
      <section className="border-l-4 border-cyan-400 bg-cyan-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <Users className="w-6 h-6 text-cyan-600" />
          <h2 className="text-xl font-bold text-cyan-700">小組活動帶領說明與參考答案</h2>
        </div>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border border-cyan-200">
            <p className="font-bold text-cyan-700 mb-2">問題1：辨識你的炎熱</p>
            <p className="text-gray-700 mb-2">請每位學員說出目前生命中一個最大的「炎熱」（處境上的、關係上的、或內心的）。帶領者先分享自己的，創造安全的氛圍。</p>
            <p className="text-sm text-gray-600 bg-cyan-50 p-2 rounded">帶領提示：學員可能會說出很不同程度的炎熱——有人說「工作壓力」，有人說「婚姻破裂」。不要評判哪個更「嚴重」，所有真實的炎熱都值得認真對待。</p>
          </div>
          <div className="bg-white p-4 rounded border border-cyan-200">
            <p className="font-bold text-cyan-700 mb-2">問題2：在炎熱中，神的大圖畫如何帶來不同的眼光？（本課主要問題）</p>
            <p className="text-gray-700 mb-2">引導學員思考：「如果你真的相信神正在這個炎熱中塑造你更像基督，這個相信如何改變你看待這個炎熱的方式？」</p>
            <p className="text-sm text-gray-600 bg-cyan-50 p-2 rounded">參考答案：相信神的大圖畫會讓我們從「為什麼是我？」轉向「神在這裡要完成什麼？」從「這是懲罰」轉向「這是神的工具」。這不是否認炎熱的痛苦，而是在痛苦中看見目的。</p>
          </div>
          <div className="bg-white p-4 rounded border border-cyan-200">
            <p className="font-bold text-cyan-700 mb-2">問題3：「自我成長方案」示範填寫</p>
            <p className="text-gray-700 mb-2">帶領者用一個真實（或虛構）的例子，帶著學員一起嘗試填寫「自我成長方案」的四個欄位。</p>
            <p className="text-sm text-gray-600 bg-cyan-50 p-2 rounded">帶領提示：如果時間允許，邀請一位願意的學員分享他/她目前的炎熱，幫助他/她當場填寫前兩欄（炎熱和荊棘）。這個即時的示範是最有力的教學方式。</p>
          </div>
        </div>
      </section>

      {/* 討論與應用引導 */}
      <section className="border-l-4 border-teal-400 bg-teal-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <MessageCircle className="w-6 h-6 text-teal-600" />
          <h2 className="text-xl font-bold text-teal-700">討論與應用引導</h2>
        </div>
        <div className="space-y-4 text-gray-700">
          <div>
            <h3 className="font-bold text-teal-700 mb-2">「兩個購屋者」比喻的應用</h3>
            <p className="mb-2">學員本第1課的「兩個購屋者」比喻（用今生的炎熱眼光 vs. 永恆目標的眼光看困難）可以在這裡重新提起：「如果你是那個買了有永恆價值房子的人，你目前的炎熱在永恆目標的背景下，意味著什麼？」</p>
          </div>
          <div>
            <h3 className="font-bold text-teal-700 mb-2">應用建議</h3>
            <p>本週最重要的功課是完成「自我成長方案」。鼓勵學員把方案填在一張紙上，貼在每天能看到的地方（冰箱、書桌），讓它提醒他們本週的屬靈焦點。</p>
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
            <p><strong>挑戰：</strong>學員認為「自我成長方案」太複雜，抗拒填寫。</p>
            <p className="text-sm text-orange-700 mt-2"><strong>技巧：</strong>強調「不需要完美」——哪怕只填完前兩欄（炎熱和荊棘），本週也是進步。帶領者可以說：「我第一次填這個方案時，也覺得很難，但越填越習慣了。先從你最大的一個炎熱開始，只填兩行就好。」</p>
          </div>
          <div className="bg-white p-4 rounded border border-orange-200">
            <p><strong>挑戰：</strong>學員對整個改變模式（炎熱→荊棘→十字架→果實）感到混淆。</p>
            <p className="text-sm text-orange-700 mt-2"><strong>技巧：</strong>用一個非常簡單的日常例子反復練習：「你的孩子頂嘴（炎熱）→你大聲吼叫（荊棘）→十字架告訴你：你是被愛的父母，不需要靠孩子的服從來確認自己的價值（十字架）→你可以以平靜的態度重新和孩子對話（果實）。」這個普通的例子比抽象的解說更有效。</p>
          </div>
          <div className="bg-white p-4 rounded border border-orange-200">
            <p><strong>挑戰：</strong>學員抱怨炎熱是外在情況造成的，自己沒有責任。</p>
            <p className="text-sm text-orange-700 mt-2"><strong>技巧：</strong>確認炎熱可能確實不是他們的錯，但荊棘（回應方式）則是他們的責任。「你不能選擇這個炎熱是否臨到你，但你可以選擇你如何回應它。」這是一個重要的區分，讓學員從受害者心態轉向行動主體。</p>
          </div>
        </div>
      </section>

      {/* 帶領禱告 */}
      <section className="bg-gray-100 p-6 rounded">
        <h3 className="font-bold text-gray-800 mb-3">帶領禱告建議</h3>
        <p className="text-gray-700 text-sm italic">「主啊，感謝祢給我們這個大圖畫——炎熱→荊棘→十字架→果實。感謝祢讓我們明白，我們生命中的每一個困難，都在祢大計畫的眼光之下。求祢幫助我們這週，在我們各自的炎熱中，不被荊棘困住，而是把每一個挑戰帶到十字架面前，讓祢的恩典在我們身上結出真實的果實。奉耶穌的名求，阿們。」</p>
      </section>
    </div>
  );
}
