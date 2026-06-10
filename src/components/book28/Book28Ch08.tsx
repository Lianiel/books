import React from 'react';
import { BookOpen, Users, MessageCircle, Lightbulb, AlertCircle, Clock } from 'lucide-react';

export default function Book28Ch08() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-emerald-700 mb-2">第8課：為什麼你會被纏累——荊棘篇（下）</h1>
      <p className="text-gray-500 text-sm">教師本 · 帶領指南 · 《人如何改變》保羅·區普</p>

      {/* 帶領簡介 */}
      <section className="border-l-4 border-purple-400 bg-purple-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-purple-600" />
          <h2 className="text-xl font-bold text-purple-700">帶領簡介</h2>
        </div>
        <div className="space-y-3 text-gray-700">
          <p><strong>課程目標：</strong>深入荊棘的根源——心中的「偶像」。從辨識荊棘（上課）深入到辨識驅動荊棘的慾望和偶像。使用「X光問題」作為實踐工具，幫助學員透過行為的表象，看見內心的渴望和信靠的對象。本課是整個課程中最需要自我反省深度的一課。</p>
          <p><strong>帶領重點：</strong>「X光問題」是強有力的工具，但也可能讓學員感到不舒服或被挑戰。帶領者需要在「幫助學員看見」和「避免他們感到被審問」之間拿捏好分寸。最好的方法是帶領者先用自己的例子示範X光問題的應用，讓學員看見這是一個自我認識的工具，而非定罪的武器。</p>
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
            <h3 className="font-bold text-indigo-700 mb-2">1. 自我成長方案分享（15分鐘）</h3>
            <p className="text-gray-700 mb-2">邀請2-3位學員分享他們更新的自我成長方案（炎熱+荊棘部分）。重點是荊棘的辨識，和荊棘如何影響他們最重要的關係。</p>
            <p className="text-sm text-gray-600 bg-indigo-50 p-3 rounded border-l-2 border-indigo-300">帶領提示：在學員分享荊棘時，帶領者可以輕輕問一個引導性的問題：「在這個荊棘出現的時候，你最渴望的是什麼？」這個問題自然地把學員引向下面的「偶像」分析。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">2. DVD觀看（35分鐘）</h3>
            <p className="text-gray-700">播放第8課DVD。重點：申命記5章十誡的心理層面（偶像的模式）、羅馬書1章25節（偶像的定義）、雅各書4章1-4節（私慾的戰爭）、X光問題。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">3. X光問題的帶領示範（10分鐘）</h3>
            <p className="text-gray-700 mb-2">帶領者用自己的一個例子（適度的、不過於私密的），帶著學員走過3-4個X光問題，示範如何用問題挖掘背後的偶像：「我的炎熱是___，我的荊棘是___，透過X光問題我看見：我最深的渴望是___，這說明我可能有一個偶像是___。」</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">4. 小組討論（25分鐘）</h3>
            <p className="text-gray-700">使用X光問題引導小組討論：選擇2-3個最適合小組的X光問題，邀請願意的學員回答，並幫助他們辨識背後的偶像。更新自我成長方案（加入「我的偶像是___」）。</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <h3 className="font-bold text-indigo-700 mb-2">5. 作業說明（5分鐘）</h3>
            <p className="text-gray-700">作業：完成X光問題的個人練習（從學員本的問題清單中選5個），並更新自我成長方案，加入偶像的分析。下週開始進入改變的核心——十字架篇。</p>
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
            <h3 className="font-bold text-blue-700 mb-2">核心概念一：申命記十誡的結構——第1條和第10條的關係</h3>
            <p>十誡的第1條（「除我以外，你不可有別的神」）和第10條（「不可貪戀」）不是兩個獨立的誡命，而是整個十誡結構的「書端」——第1條是所有外在行為的根基，第10條是所有外在罪行的根源。貪戀（第10條）是所有罪的心理根源，而貪戀的根源是沒有讓神作第一（第1條）。帶領者可以問：「如果神真的是你的第一，還有什麼是你需要貪戀的？」</p>
          </div>
          <div>
            <h3 className="font-bold text-blue-700 mb-2">核心概念二：偶像的識別——現代偶像的四種類型</h3>
            <p className="mb-1">提摩太·凱勒識別的四種主要偶像類型（適合帶領者幫助學員辨識）：</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong>舒適偶像：</strong>渴望不受打擾、安逸、不被要求</li>
              <li><strong>認可偶像：</strong>渴望被接受、被欣賞、被尊重</li>
              <li><strong>掌控偶像：</strong>渴望一切在掌控中、可預測、有秩序</li>
              <li><strong>力量偶像：</strong>渴望影響力、成就、地位</li>
            </ul>
            <p className="mt-1">每種偶像在被威脅時，產生特定的荊棘反應（如：認可偶像被威脅→以惡報惡；掌控偶像被威脅→焦慮或憤怒）。</p>
          </div>
          <div>
            <h3 className="font-bold text-blue-700 mb-2">核心概念三：「塞車比喻」的帶領應用</h3>
            <p>「塞車比喻」是幫助學員理解偶像如何在日常衝突中運作的最有效工具。帶領者可以引導學員用這個比喻分析他們自己的衝突：「上週你最大的一次人際衝突中，你最渴望得到的是什麼（那個『準時』）？那個渴望如何引發了你的荊棘反應？」</p>
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
            <p className="font-bold text-cyan-700 mb-2">X光問題示範（帶領者先示範）</p>
            <p className="text-gray-700 mb-2">帶領者選擇一個X光問題（如：「你花最多時間擔心的是什麼？」），先用自己的例子回答，然後說出這個問題揭示了什麼偶像。</p>
            <p className="text-sm text-gray-600 bg-cyan-50 p-2 rounded">示範例子：「我花最多時間擔心的是我的孩子的成績和表現。這揭示了什麼？我的平安感很大程度上建立在孩子的成功上——孩子成功=我是好父母=我有價值。這是一個偶像：我用孩子的成就來定義自己的價值，而不是靠在基督裡的身分。」</p>
          </div>
          <div className="bg-white p-4 rounded border border-cyan-200">
            <p className="font-bold text-cyan-700 mb-2">主要問題：「是什麼事物擄獲了你的心？」</p>
            <p className="text-gray-700 mb-2">引導學員用四種偶像類型（舒適、認可、掌控、力量）來辨識他們的主要偶像，並解釋：這個偶像如何驅動了他們最常見的荊棘反應？</p>
            <p className="text-sm text-gray-600 bg-cyan-50 p-2 rounded">帶領提示：「偶像」這個詞可能讓學員感到很沉重。帶領者可以說：「偶像就是我們放在神的位置上的東西——通常是好事物（家庭、工作、健康），只是被放在了錯誤的位置。辨識偶像不是說那些事物是壞的，而是看見我們對它們的依賴是否超出了對神的依賴。」</p>
          </div>
          <div className="bg-white p-4 rounded border border-cyan-200">
            <p className="font-bold text-cyan-700 mb-2">藉口辨識</p>
            <p className="text-gray-700 mb-2">問：「你通常用什麼藉口來解釋你的荊棘反應？（從六種典型藉口中選）」引導學員認識藉口如何阻礙成長。</p>
            <p className="text-sm text-gray-600 bg-cyan-50 p-2 rounded">參考答案：最常見的藉口通常是「我就是這種人」和「要不是因為那個人」。帶領者可以問：「如果這個藉口是真的，那改變就永遠不可能了。你相信改變是可能的嗎？為什麼？」把話題引向下課要討論的十字架。</p>
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
            <h3 className="font-bold text-teal-700 mb-2">轉向期待：「這是我們為什麼需要十字架」</h3>
            <p>這課結束時，帶領者要種下期待的種子：「我們現在看見了荊棘的根源——偶像。問題是：我們能靠自己改變這些偶像嗎？我們能靠意志力讓神重新作我們的第一嗎？答案是：不能。這正是為什麼我們需要十字架——下兩課我們會看見，十字架如何是偶像的唯一解藥。」讓學員帶著期待，而非定罪進入下週。</p>
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
            <p><strong>挑戰：</strong>學員對「偶像」這個詞有文化上的阻力（覺得是貶義或太宗教性）。</p>
            <p className="text-sm text-orange-700 mt-2"><strong>技巧：</strong>可以用「最深的渴望」或「給你安全感的事物」來代替「偶像」這個詞。重要的是概念，不是詞語：「是什麼給你最深的安全感和意義感？當那個東西受威脅時，你的反應是什麼？」這個描述讓「偶像」概念更容易被接受。</p>
          </div>
          <div className="bg-white p-4 rounded border border-orange-200">
            <p><strong>挑戰：</strong>學員感到被X光問題「審問」，感到不舒服。</p>
            <p className="text-sm text-orange-700 mt-2"><strong>技巧：</strong>強調X光問題是「自我診斷的工具」，而不是「別人審問你的工具」。「這些問題不是用來互相審查的，而是幫助我們各自在神面前誠實看見自己。你可以選擇私下回答，不需要在小組中分享所有細節。」給予足夠的選擇空間。</p>
          </div>
        </div>
      </section>

      {/* 帶領禱告 */}
      <section className="bg-gray-100 p-6 rounded">
        <h3 className="font-bold text-gray-800 mb-3">帶領禱告建議</h3>
        <p className="text-gray-700 text-sm italic">「主啊，今天我們看見了荊棘的根源——我們心中的偶像，那些被我們放在祢位置上的事物。我們承認，我們太容易把安全感和意義感建立在可朽壞的事物上，而不是在祢身上。求祢幫助我們，透過這週的反思，更清楚地看見我們的偶像，並把它們帶到祢面前，讓祢成為那個空缺的填滿。我們盼望下週看見十字架如何改變這一切。奉耶穌的名求，阿們。」</p>
      </section>
    </div>
  );
}
