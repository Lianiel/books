import React from 'react';
import { BookOpen, Users, MessageCircle, Lightbulb, AlertCircle, Target, Clock } from 'lucide-react';

export default function Book28Ch01() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-emerald-700 mb-2">第1課：這是神要帶領你去的地方</h1>
      <p className="text-gray-500 text-sm">教師本 · 帶領指南 · 《人如何改變》保羅·區普</p>

      {/* 帶領簡介 */}
      <section className="border-l-4 border-purple-400 bg-purple-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-purple-600" />
          <h2 className="text-xl font-bold text-purple-700">帶領簡介</h2>
        </div>
        <div className="space-y-3 text-gray-700">
          <p><strong>課程目標：</strong>幫助學員理解神對他們生命的終極計畫——讓他們完全像基督的樣式。建立學員以永恆眼光看待今生的心態，使他們能夠在困難中仍持守盼望。</p>
          <p><strong>帶領重點：</strong>此課是整個課程的基礎，至關重要。學員需要明白：改變不是靠自己的努力，而是神在他們心中動工的結果。帶領時，要幫助他們在「今生的挑戰」和「永恆的目的地」之間建立清晰的連結。</p>
          <p><strong>預期時間：</strong>90分鐘（包括破冰）</p>
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
            <h3 className="font-bold text-indigo-700 mb-2">1. 開場與破冰（15分鐘）</h3>
            <p className="text-gray-700 mb-2">歡迎所有成員，簡要介紹課程的整體架構。請成員分享：「你加入這個課程最大的期待是什麼？」</p>
            <p className="text-sm text-gray-600 bg-indigo-50 p-3 rounded border-l-2 border-indigo-300">帶領提示：強調這是一個安全的學習空間，目的不是評判，而是一起成長。課程的核心不是「如何改變」的技巧，而是認識「誰在改變我們」和「往哪裡改變」。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">2. 閱讀複習與CPR（10分鐘）</h3>
            <p className="text-gray-700">請學員一起讀學員本的「複習」和「重點與應用（CPR）」部分。帶領者用2-3分鐘補充說明：神的大圖畫是什麼，以及為何「終極目標」如此重要。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">3. DVD觀看（40分鐘）</h3>
            <p className="text-gray-700">播放第1課DVD。此段落介紹改變的核心模式（炎熱→荊棘→十字架→果實），並強調真正改變的終極目標是成為基督的樣式。</p>
            <p className="text-sm text-gray-600 mt-2 bg-indigo-50 p-3 rounded border-l-2 border-indigo-300">帶領提示：鼓勵學員記筆記，特別留意DVD中讓他們感到驚訝或有共鳴的內容。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">4. 小組討論（20分鐘）</h3>
            <p className="text-gray-700 mb-2">使用學員本的小組活動問題，重點圍繞啟示錄七章9至17節和腓立比書一章3至11節。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">5. 布置作業（5分鐘）</h3>
            <p className="text-gray-700">介紹學員本「作業」部分的閱讀和問題，說明「自我成長方案」的使用方式（第四課開始引入）。強調每週完成作業對學習的重要性。</p>
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
            <h3 className="font-bold text-blue-700 mb-2">核心概念一：神的終極目標</h3>
            <p className="mb-2">羅馬書八章29節說：「因為他預先所知道的人，就預先定下效法他兒子的模樣。」神的目標不是讓我們感覺良好，也不是讓我們的生活順利，而是讓我們像基督。這個目標：</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>比我們能想到的任何目標都更宏大</li>
              <li>不能靠我們自己達到，必須靠神的工作</li>
              <li>是一個今生持續的過程，也是將來完全實現的盼望</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-blue-700 mb-2">核心概念二：改變的方向</h3>
            <p>改變的方向是從內而外：先是心的改變，才有行為的改變。許多人嘗試改變行為卻一再失敗，是因為他們沒有從心開始。神藉著祂的話語、聖靈和生命中的炎熱，改變我們內心的慾望和動機，才能帶來持久的改變。</p>
          </div>
          <div>
            <h3 className="font-bold text-blue-700 mb-2">核心概念三：腓立比書一章6節的保證</h3>
            <p>「我深信那在你們心裡動了善工的，必成全這工，直到耶穌基督的日子。」這節經文是整個課程的神學基礎。帶領時要幫助學員看見：他們的改變不是他們的責任，而是神的承諾。他們的責任是順服和配合，神的工作是使它成就。</p>
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
            <p className="font-bold text-cyan-700 mb-2">問題1（啟示錄七章）：神的終極目標圖景</p>
            <p className="text-gray-700 mb-2">帶領學員注意：這段經文不是描述我們「努力進天堂」的圖畫，而是神完全成就祂心意後的結果。</p>
            <p className="text-sm text-gray-600 bg-cyan-50 p-2 rounded">參考答案：不飢不渴、無淚、被神牧養（17節）——這些都指向完全的救贖和與神同在。神的終極目標是把我們帶到完全榮耀的地步，消除一切因罪帶來的痛苦和分離。</p>
          </div>
          <div className="bg-white p-4 rounded border border-cyan-200">
            <p className="font-bold text-cyan-700 mb-2">問題2（腓立比書一章）：改變的保證與動力</p>
            <p className="text-gray-700 mb-2">注意：保羅寫這封信時身在監獄，這本身就是一個「炎熱」的環境。但他不是在抱怨，而是在感謝和期待。</p>
            <p className="text-sm text-gray-600 bg-cyan-50 p-2 rounded">參考答案：改變的動力來自神自己——祂是「那在你們心裡動了善工的」。改變的保證也在神——「必成全這工」。學員需要從「我必須努力改變」轉向「我配合神的工作」。</p>
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
            <h3 className="font-bold text-teal-700 mb-2">主要問題：「是什麼樣的盼望與目標決定你的人生方向？」</h3>
            <p className="mb-2">帶領提示：引導學員誠實地反思，他們日常生活的真正驅動力是什麼。常見的答案包括：家庭幸福、事業成功、被人尊重、避免失敗等。這些都不是壞事，但關鍵問題是：這些目標是否能夠在永恆的維度上撐起他們的人生？</p>
            <p>進一步引導：如果這些目標落空了（孩子出了問題、事業失敗、健康惡化），他們的人生還有盼望嗎？神的目標（讓我們像基督）如何提供一個不受環境影響的盼望？</p>
          </div>
          <div>
            <h3 className="font-bold text-teal-700 mb-2">應用建議</h3>
            <p>鼓勵學員本週花時間閱讀作業內容，並誠實地回答問題。特別是問題3：回顧一個困難時期，神是否曾藉著那段「炎熱」讓他們有所成長？這個分享將為下週的討論打下基礎。</p>
          </div>
        </div>
      </section>

      {/* 常見挑戰與帶領技巧 */}
      <section className="border-l-4 border-orange-400 bg-orange-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <AlertCircle className="w-6 h-6 text-orange-600" />
          <h2 className="text-xl font-bold text-orange-700">常見挑戰與帶領技巧</h2>
        </div>
        <div className="space-y-3">
          <div className="bg-white p-4 rounded border border-orange-200">
            <p><strong>挑戰：</strong>學員可能認為「像基督」只是一個空洞的宗教口號，和實際生活脫節。</p>
            <p className="text-sm text-orange-700 mt-2"><strong>技巧：</strong>舉具體例子：像基督就是在面對批評時能夠寬恕；在面對誘惑時能夠說不；在面對苦難時能夠感恩——這些都是非常實際的生活改變。</p>
          </div>
          <div className="bg-white p-4 rounded border border-orange-200">
            <p><strong>挑戰：</strong>部分學員可能對課程感到不安，特別是被要求分享個人的掙扎和問題。</p>
            <p className="text-sm text-orange-700 mt-2"><strong>技巧：</strong>在第一課就建立「安全文化」——明確說明：這裡分享的內容保密；沒有人會被評判；我們都是在學習的旅途中，沒有人已經「到了」。</p>
          </div>
          <div className="bg-white p-4 rounded border border-orange-200">
            <p><strong>挑戰：</strong>有人可能把「神的工作」理解為被動——「那神來做就好，我什麼都不用做。」</p>
            <p className="text-sm text-orange-700 mt-2"><strong>技巧：</strong>用農夫比喻：農夫不能讓植物生長，但他可以澆水、鬆土、除草。我們配合神工作，而不是替代神工作，更不是等待神工作。</p>
          </div>
        </div>
      </section>

      {/* 帶領禱告 */}
      <section className="bg-gray-100 p-6 rounded">
        <h3 className="font-bold text-gray-800 mb-3">帶領禱告建議</h3>
        <p className="text-gray-700 text-sm italic">「主啊，我們感謝祢，因為祢對我們每一個人都有一個美好的計畫。感謝祢應許要使我們像耶穌基督的樣式。在我們開始這個課程的旅程時，求祢幫助我們誠實地看見自己的心，也幫助我們信靠祢的工作，而不是靠自己的努力。求祢的聖靈在我們的學習中做主，讓這課程成為每個人生命中真實改變的開始。奉耶穌的名求，阿們。」</p>
      </section>
    </div>
  );
}
