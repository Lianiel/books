import React from 'react';
import { BookOpen, Users, MessageCircle, Lightbulb, AlertCircle, Clock } from 'lucide-react';

export default function Book28Ch06() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-emerald-700 mb-2">第6課：現實世界中真實的你——炎熱篇（下）</h1>
      <p className="text-gray-500 text-sm">教師本 · 帶領指南 · 《人如何改變》保羅·區普</p>

      {/* 帶領簡介 */}
      <section className="border-l-4 border-purple-400 bg-purple-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-purple-600" />
          <h2 className="text-xl font-bold text-purple-700">帶領簡介</h2>
        </div>
        <div className="space-y-3 text-gray-700">
          <p><strong>課程目標：</strong>從詩篇88篇和雅各書（上課）深入到民數記的歷史故事，幫助學員辨識自己在炎熱中罪性的回應模式。介紹「自我成長方案」的完整使用，以羅馬書8章20-22節建立世界觀的基礎（服在虛空、盼望榮耀）。</p>
          <p><strong>帶領重點：</strong>以色列人在曠野的故事是一面鏡子，帶領者要幫助學員認同這個故事（不是「他們犯了那麼愚蠢的罪」，而是「我也可能如此回應」）。本課的核心挑戰是讓學員從「炎熱是別人的錯」轉向「我的回應是我的責任」。</p>
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
            <h3 className="font-bold text-indigo-700 mb-2">1. 炎熱日記分享（10分鐘）</h3>
            <p className="text-gray-700 mb-2">邀請2-3位學員分享他們的「炎熱日記」中最重要的一個發現——特別是：「這個炎熱揭示了你心中什麼？」</p>
            <p className="text-sm text-gray-600 bg-indigo-50 p-3 rounded border-l-2 border-indigo-300">帶領提示：重點不是分享炎熱的細節，而是分享「揭示」——「我發現炎熱讓我看見，我最害怕的是___。」這個焦點轉換從外在情況轉向內心狀態，是這課最重要的屬靈操練。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">2. DVD觀看（35分鐘）</h3>
            <p className="text-gray-700">播放第6課DVD。重點：羅馬書8章20-22節（世界的現實）、民數記11-14章（以色列人的罪性模式）、六種罪性回應、自我成長方案的完整介紹。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">3. 民數記故事研讀（15分鐘）</h3>
            <p className="text-gray-700 mb-2">帶領者帶著學員快速看民數記11章（埋怨）→12章（米利暗和亞倫的驕傲）→13-14章（探子的不信），每段問：「你在這裡看見自己的哪個反應模式？」</p>
            <p className="text-sm text-gray-600 bg-indigo-50 p-3 rounded border-l-2 border-indigo-300">帶領提示：避免讓討論變成「批評以色列人」，而要持續引導回到：「這個故事如何成為我的鏡子？」哥林多前書10章11節可以在這裡引用：「他們遭遇這些事，都要作為鑑戒，並且寫在經上，正是警戒我們這末世的人。」</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">4. 小組討論（25分鐘）</h3>
            <p className="text-gray-700">重點圍繞本課的主要問題：「今天，在你所處的景況和人際關係中，你的回應主要是什麼模式？」和「自我成長方案」的分享（炎熱+荊棘部分）。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">5. 作業說明（5分鐘）</h3>
            <p className="text-gray-700">下週開始的荊棘篇（第7課）需要學員提前辨識自己的主要荊棘模式。作業：本週誠實記錄3次你的荊棘反應（什麼觸發？你的反應？回顧：那個反應揭示了什麼？）。</p>
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
            <h3 className="font-bold text-blue-700 mb-2">核心概念一：羅馬書8章20-22節的世界觀</h3>
            <p>這個世界「服在虛空之下」——炎熱是這個現實的一部分，不是神出錯了。但同時，受造之物「仍然指望脫離敗壞的轄制」——盼望是真實的。帶領者要幫助學員持守這個張力：承認現實的黑暗，同時持守永恆的盼望。「一同嘆息」（第22節）是正常的，嘆息中有盼望（第23-25節）。</p>
          </div>
          <div>
            <h3 className="font-bold text-blue-700 mb-2">核心概念二：民數記——六種罪性回應的歷史示範</h3>
            <p>以色列人在曠野的故事是「六種荊棘反應」的生動示範：民數記11章=埋怨；12章=驕傲和嫉妒（自以為義）；13-14章=不信和誇大絕望。帶領者要特別強調：以色列人的問題不是炎熱太大，而是他們的心不信靠神。迦勒和約書亞面對同樣的挑戰，卻有不同的心——這是信心 vs. 不信的對比。</p>
          </div>
          <div>
            <h3 className="font-bold text-blue-700 mb-2">核心概念三：「自我成長方案」的炎熱辨識</h3>
            <p>到這課，學員應該已經在自我成長方案的「炎熱」欄填入了更具體的內容。帶領者可以在小組時引導學員把炎熱分類：是處境的炎熱（環境問題）？關係的炎熱（人際衝突）？還是內心的炎熱（罪的掙扎）？這個分類有助於後來的荊棘辨識。</p>
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
            <p className="font-bold text-cyan-700 mb-2">問題（民數記）：你的「曠野模式」</p>
            <p className="text-gray-700 mb-2">問：「在民數記11-14章的故事中，你最容易認同哪個反應？（埋怨的百姓、驕傲的米利暗、不信的十個探子？還是信心的迦勒？）」</p>
            <p className="text-sm text-gray-600 bg-cyan-50 p-2 rounded">帶領提示：多數人會說「都有一點」。這是誠實的。更重要的問題是：「在你目前最大的炎熱中，你更像哪一個？」具體的情境幫助學員從泛泛的自我認識，到具體的自我辨識。</p>
          </div>
          <div className="bg-white p-4 rounded border border-cyan-200">
            <p className="font-bold text-cyan-700 mb-2">主要問題討論：「你的回應主要是什麼模式？」</p>
            <p className="text-gray-700 mb-2">邀請學員選出他們在炎熱中最常見的1-2種罪性回應（埋怨、逃避、誇大、以惡報惡、自甘墮落、自以為義），並給出一個具體的最近例子。</p>
            <p className="text-sm text-gray-600 bg-cyan-50 p-2 rounded">參考答案：沒有「正確答案」——每個人的主要模式不同。帶領者要幫助學員辨識的是「模式」而不是孤立的事件：「這種反應在你的生命中是否重複出現？在什麼情況下特別容易發生？」</p>
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
            <h3 className="font-bold text-teal-700 mb-2">帶領者的誠實示範</h3>
            <p>這課帶領者需要特別的誠實：分享自己在炎熱中的罪性模式（適度，不需要過多細節）。「我在壓力下最常見的荊棘反應是___，最近一次發生是___。」帶領者的誠實是學員誠實的許可。</p>
          </div>
          <div>
            <h3 className="font-bold text-teal-700 mb-2">應用建議：不抱怨24小時</h3>
            <p>鼓勵學員這週嘗試「24小時不抱怨的挑戰」。不是壓抑感受，而是把想要抱怨的能量轉向向神禱告。下週分享：這有多難？它揭示了什麼？</p>
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
            <p><strong>挑戰：</strong>學員認同六種荊棘模式，卻感到很沮喪：「我全都有。」</p>
            <p className="text-sm text-orange-700 mt-2"><strong>技巧：</strong>「認識自己的罪性模式，不是讓你定罪自己，而是幫助你知道你需要帶什麼到十字架前。後面幾課我們會學習十字架如何改變這些模式。現在的誠實，是改變的第一步。」</p>
          </div>
          <div className="bg-white p-4 rounded border border-orange-200">
            <p><strong>挑戰：</strong>學員說：「如果我不埋怨，我就需要接受不公平的對待。」</p>
            <p className="text-sm text-orange-700 mt-2"><strong>技巧：</strong>區分「誠實表達感受」和「埋怨的心態」。詩篇88篇作者誠實地表達了他的痛苦——這不是埋怨，而是禱告。埋怨的問題不在於表達感受，而在於向人（或在心裡）持續抱怨，卻不把它帶到神面前。「把痛苦帶到神面前」和「一直抱怨」是根本不同的。</p>
          </div>
        </div>
      </section>

      {/* 帶領禱告 */}
      <section className="bg-gray-100 p-6 rounded">
        <h3 className="font-bold text-gray-800 mb-3">帶領禱告建議</h3>
        <p className="text-gray-700 text-sm italic">「主啊，謝謝祢讓我們看見以色列人的故事——它成為我們的鏡子。我們承認，我們的炎熱中也有埋怨、逃避、和不信。但我們也謝謝祢，即使是在這些罪性的回應中，祢仍然沒有放棄我們。求祢在我們各自的炎熱中，幫助我們做一個迦勒——在大問題面前仍然說：『我們足能得勝，因為耶和華與我們同在。』奉耶穌的名求，阿們。」</p>
      </section>
    </div>
  );
}
