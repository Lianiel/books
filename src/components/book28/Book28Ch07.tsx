import React from 'react';
import { BookOpen, Users, MessageCircle, Lightbulb, AlertCircle, Clock } from 'lucide-react';

export default function Book28Ch07() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-emerald-700 mb-2">第7課：什麼事情纏累著你——荊棘篇（上）</h1>
      <p className="text-gray-500 text-sm">教師本 · 帶領指南 · 《人如何改變》保羅·區普</p>

      {/* 帶領簡介 */}
      <section className="border-l-4 border-purple-400 bg-purple-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-purple-600" />
          <h2 className="text-xl font-bold text-purple-700">帶領簡介</h2>
        </div>
        <div className="space-y-3 text-gray-700">
          <p><strong>課程目標：</strong>幫助學員深入辨識「荊棘」——他們在炎熱中的罪性回應模式。以弗所書4-6章的「舊人/新人」對比提供了一個完整的荊棘目錄，幫助學員超越泛泛的「我是個罪人」，到具體的「我的具體荊棘模式是___」。</p>
          <p><strong>帶領重點：</strong>這是課程中最需要誠實的一課。帶領者的任務是創造一個足夠安全的空間，讓學員能夠承認具體的荊棘，而不是停留在抽象和防衛。帶領者需要先自我準備：我自己最主要的荊棘是什麼？我願意在適度的程度上分享嗎？</p>
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
            <h3 className="font-bold text-indigo-700 mb-2">1. 荊棘記錄分享（10分鐘）</h3>
            <p className="text-gray-700 mb-2">邀請2-3位學員分享上週的「荊棘記錄」——不是故事細節，而是：「我記錄了3次荊棘反應，最常見的模式是___。」</p>
            <p className="text-sm text-gray-600 bg-indigo-50 p-3 rounded border-l-2 border-indigo-300">帶領提示：學員可能很難準確辨識自己的荊棘，可能說「我有時候很生氣」而不是具體的模式。帶領者可以溫和地幫助他們使用六種荊棘的語言（否認、逃避、誇大、以惡報惡、自甘墮落、自以為義）來更準確地描述。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">2. DVD觀看（35分鐘）</h3>
            <p className="text-gray-700">播放第7課DVD。重點：以弗所書4-6章的「舊人/新人」對比、六種荊棘反應的詳細分析、四種「好果樹」的回應。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">3. 以弗所書4章的帶領閱讀（10分鐘）</h3>
            <p className="text-gray-700 mb-2">帶領者帶學員一起讀以弗所書4章25-32節，每讀一個「舊人行為」，就停下來問：「這個在你的日常生活中看起來是什麼樣子？」</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">4. 小組討論（30分鐘）</h3>
            <p className="text-gray-700">圍繞本課主要問題：「現今，對於神給我的處境和人際關係，我通常是如何回應的？」邀請學員更新他們的自我成長方案（荊棘欄位）。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">5. 作業說明（5分鐘）</h3>
            <p className="text-gray-700">下週進入「荊棘篇下」，探討荊棘的根源（偶像）。作業：本週讀以弗所書整本，並嘗試用「自我成長方案」分析一個具體的荊棘事件。</p>
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
            <h3 className="font-bold text-blue-700 mb-2">核心概念一：以弗所書的「舊人/新人」不是兩個不同的人</h3>
            <p>保羅在以弗所書4章22-24節說：「脫去你們從前行為上的舊人……穿上新人。」這不是說有一個「舊的我」和一個「新的我」，而是說我有能力選擇活在哪個向度——舊人的腐敗，或新人的義。帶領者要幫助學員理解：荊棘和果實，都可能出現在同一個基督徒身上；成長是增加「活在新人」的時間，減少「活在舊人」的時間。</p>
          </div>
          <div>
            <h3 className="font-bold text-blue-700 mb-2">核心概念二：六種荊棘的詳細說明</h3>
            <p className="mb-1">帶領者需要清楚掌握六種荊棘，才能幫助學員準確辨識：</p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
              <li><strong>否認：</strong>拒絕承認問題的存在（「我沒有問題」）</li>
              <li><strong>逃避：</strong>透過各種活動迴避面對困難（工作成癮、媒體沉迷）</li>
              <li><strong>誇大：</strong>把困難放大為災難（「永遠不會好了」）</li>
              <li><strong>以惡報惡：</strong>把痛苦轉嫁給別人（憤怒、冷戰、言語傷害）</li>
              <li><strong>自甘墮落：</strong>在壓力下放棄掙扎（靈命枯萎、放縱）</li>
              <li><strong>自以為義：</strong>外在正確但內心怨恨（「我做了一切正確的事」）</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-blue-700 mb-2">核心概念三：四種好果樹回應的帶領</h3>
            <p>好果樹的四種回應（面對現實、適當程度、時刻警醒、建設性行動）不應該被解讀為「只要努力就能做到的技巧」，而應該被連結到「以十字架為中心的身分」。當我不再需要靠炎熱的解除來定義自己的安全感，我才能真正地「面對現實」；當我知道我被神完全接納，我才能不誇大問題。</p>
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
            <p className="font-bold text-cyan-700 mb-2">問題1（以弗所書）：最難的指令</p>
            <p className="text-gray-700 mb-2">問：「在以弗所書4-5章的所有指令中，哪一個對你個人最困難？在什麼情況下它最難做到？」</p>
            <p className="text-sm text-gray-600 bg-cyan-50 p-2 rounded">帶領提示：讓學員給出具體的情境（如「在和配偶爭吵後要說造就人的話，我完全做不到」），而不是泛泛的答案（「愛人如己這點很難」）。具體的答案揭示更多的荊棘信息。</p>
          </div>
          <div className="bg-white p-4 rounded border border-cyan-200">
            <p className="font-bold text-cyan-700 mb-2">問題2（主要問題）：辨識你的主要荊棘</p>
            <p className="text-gray-700 mb-2">請學員從六種荊棘中選出他們最主要的1-2種，並給出一個具體的最近例子（不需要很多細節，但要具體，不要泛泛）。</p>
            <p className="text-sm text-gray-600 bg-cyan-50 p-2 rounded">參考答案：沒有標準答案，但帶領者要幫助學員區分「這是荊棘」（如：「我在被批評時沉默三天作為報復」=以惡報惡）和「這是炎熱」（如：「我被同事批評了」）。荊棘是我的回應，不是情況本身。</p>
          </div>
          <div className="bg-white p-4 rounded border border-cyan-200">
            <p className="font-bold text-cyan-700 mb-2">問題3：荊棘對關係的影響</p>
            <p className="text-gray-700 mb-2">問：「你的主要荊棘如何影響你的家人或最親近的人？他們怎麼看你的荊棘反應？」</p>
            <p className="text-sm text-gray-600 bg-cyan-50 p-2 rounded">帶領提示：這是一個需要很多謙卑的問題。鼓勵學員換位思考：「如果你的配偶/孩子/朋友在這裡，他們會怎麼描述你的荊棘反應？」這個視角轉換常常帶來很深的洞察。</p>
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
            <h3 className="font-bold text-teal-700 mb-2">重要提醒：荊棘與恩典</h3>
            <p>帶領者在這課結束時，要特別強調恩典：「今天我們看見了很多我們生命中的醜陋，但這正是為什麼我們需要十字架。我們的荊棘揭示了我們的需要，而十字架滿足了這個需要。辨識荊棘不是讓我們定罪自己，而是為了把它帶到神面前，接受改變。」不讓學員帶著沉重的定罪感離開這堂課。</p>
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
            <p><strong>挑戰：</strong>學員把荊棘定義為「別人的行為」（「我的荊棘是同事一直排擠我」）。</p>
            <p className="text-sm text-orange-700 mt-2"><strong>技巧：</strong>溫和地澄清：「同事排擠你是炎熱（別人的行為），而你面對這個炎熱的反應（如：憤怒？自閉？散播謠言？）才是你的荊棘。荊棘永遠是我的回應，不是別人的行為。」</p>
          </div>
          <div className="bg-white p-4 rounded border border-orange-200">
            <p><strong>挑戰：</strong>學員感到被定罪，陷入過度的自責和沮喪。</p>
            <p className="text-sm text-orange-700 mt-2"><strong>技巧：</strong>立刻把焦點引向恩典：「辨識荊棘是好事，因為這讓我們知道需要帶什麼到十字架前。不要停留在定罪，而要往前走到第三步——十字架。」可以帶學員讀約翰一書1章9節：「我們若認自己的罪，神是信實的、是公義的，必要赦免我們的罪，洗淨我們一切的不義。」</p>
          </div>
        </div>
      </section>

      {/* 帶領禱告 */}
      <section className="bg-gray-100 p-6 rounded">
        <h3 className="font-bold text-gray-800 mb-3">帶領禱告建議</h3>
        <p className="text-gray-700 text-sm italic">「主耶穌，今天我們看見了自己的荊棘——那些在炎熱中出現的罪性反應。我們承認這些是我們自己的選擇和責任，不是別人造成的。感謝祢，即使看見這些，我們也不需要絕望，因為祢的血已經為我們的一切罪付上了代價。求祢幫助我們，不是定罪自己，而是帶著這些荊棘來到十字架前，讓祢的恩典改變我們。奉耶穌的名求，阿們。」</p>
      </section>
    </div>
  );
}
