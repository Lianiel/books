import React from 'react';
import { BookOpen, Star, MessageCircle, Lightbulb, Heart, Shield, Target, Users } from 'lucide-react';

export default function Book27Ch7() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-emerald-700 mb-2">第7課：什麼事情纏累著你——荊棘篇（上）</h1>
      <p className="text-gray-500 text-sm">學員本 · 《人如何改變》保羅·區普</p>

      {/* 複習/作業討論 */}
      <section className="border-l-4 border-emerald-400 bg-emerald-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-emerald-600" />
          <h2 className="text-xl font-bold text-emerald-700">複習與作業討論</h2>
        </div>
        <div className="bg-white p-4 rounded border border-emerald-200 space-y-3 text-gray-700">
          <p><strong>複習：</strong>前兩課我們深入了解了「炎熱」——神使用困難來揭示我們內心的真實狀態，以及我們在炎熱中常見的罪性反應模式。今天我們進入改變模式的第二個部分：「荊棘」。荊棘是我們對炎熱的有罪回應，也是在我們與果實之間最大的障礙。</p>
          <p><strong>作業討論：</strong>分享你完成的第一份「自我成長方案」。在辨識自己的荊棘反應時，有什麼讓你感到不舒服或意外的發現？</p>
        </div>
      </section>

      {/* CPR */}
      <section className="border-l-4 border-teal-400 bg-teal-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <Target className="w-6 h-6 text-teal-600" />
          <h2 className="text-xl font-bold text-teal-700">重點與應用（CPR）</h2>
        </div>
        <div className="space-y-3 text-gray-700">
          <div className="bg-white p-4 rounded border border-teal-200">
            <p className="font-bold text-teal-700 mb-1">核心要點（Central Point）</p>
            <p>以弗所書4-6章用詳細的語言描述了兩種截然不同的生活方式：「舊人的生活」（充滿荊棘）和「新人的生活」（結出果實）。荊棘不只是外在的壞行為，更是內心腐敗動機的外在表現。當我們在炎熱中以罪性的方式回應，我們就是在叢生荊棘；當我們以信心回應，我們就在結出果實。</p>
          </div>
          <div className="bg-white p-4 rounded border border-teal-200">
            <p className="font-bold text-teal-700 mb-1">個人應用（Personal）</p>
            <p>辨識在你目前的炎熱中，你最常顯出的「荊棘叢」是哪幾種？（參考下方的6種荊棘反應）哪一種最讓你難以承認？</p>
          </div>
          <div className="bg-white p-4 rounded border border-teal-200">
            <p className="font-bold text-teal-700 mb-1">人際應用（Relational）</p>
            <p>你的荊棘反應如何影響你的關係？具體說出一個例子：你的某種荊棘行為如何傷害或消耗了你身邊的人？</p>
          </div>
        </div>
      </section>

      {/* 主要問題 */}
      <section className="text-center bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 p-8 rounded-xl">
        <Shield className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
        <h2 className="text-xl font-bold text-emerald-800 mb-3">本課主要問題</h2>
        <p className="text-2xl font-bold text-emerald-700 leading-relaxed">
          「現今，對於神給我的處境和人際關係，<br />我通常是如何回應的呢？」
        </p>
      </section>

      {/* 課程內容 */}
      <section className="border-l-4 border-cyan-400 bg-cyan-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <Lightbulb className="w-6 h-6 text-cyan-600" />
          <h2 className="text-xl font-bold text-cyan-700">課程內容</h2>
        </div>
        <div className="space-y-5 text-gray-700">
          <div>
            <h3 className="font-bold text-cyan-700 mb-2">一、以弗所書4:17-6:18——舊人與新人的對比</h3>
            <p className="mb-2">保羅在以弗所書4-6章提供了基督徒生活最詳細的實踐指南。這段經文的核心是一個對比：</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded border border-red-200">
                <p className="font-bold text-red-700 mb-2">舊人的生活（荊棘）</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>心思虛妄，無知，心地剛硬（4:17-18）</li>
                  <li>放縱情慾、污穢、貪婪（4:19）</li>
                  <li>說謊（4:25）</li>
                  <li>輕易發怒（4:26-27）</li>
                  <li>偷竊（4:28）</li>
                  <li>說污穢的話（4:29）</li>
                  <li>苦毒、惱恨、忿怒、嚷鬧、毀謗（4:31）</li>
                  <li>行淫亂、污穢、貪婪（5:3）</li>
                  <li>喝酒放蕩（5:18）</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded border border-green-200">
                <p className="font-bold text-green-700 mb-2">新人的生活（果實）</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>在心志上更新（4:23）</li>
                  <li>穿上新人（4:24）</li>
                  <li>說真實話（4:25）</li>
                  <li>生氣不犯罪（4:26）</li>
                  <li>做正當工作（4:28）</li>
                  <li>說造就人的話（4:29）</li>
                  <li>以恩慈、憐憫、饒恕相待（4:32）</li>
                  <li>行愛的事（5:2）</li>
                  <li>被聖靈充滿（5:18）</li>
                </ul>
              </div>
            </div>
            <p className="mt-3">注意：保羅不是在描述「好人」和「壞人」的差別，而是在描述同一個基督徒在「靠著聖靈」和「靠著肉體」這兩種狀態下的不同表現。我們每個人內心都有這兩種可能性。</p>
          </div>
          <div>
            <h3 className="font-bold text-cyan-700 mb-2">二、六種主要的「荊棘叢」反應</h3>
            <p className="mb-2">保羅·區普根據以弗所書的分析，整理出人在面對炎熱時最常出現的六種荊棘叢反應：</p>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded border border-cyan-200">
                <p className="font-bold text-rose-700 mb-1">1. 否認（Denial）</p>
                <p className="text-sm text-gray-700">拒絕承認問題的存在，或把問題的嚴重性最小化。「我沒有問題，是別人有問題。」「事情沒有那麼嚴重。」否認讓我們暫時避開痛苦，但問題卻在地下滋長，最終以更嚴重的方式爆發。</p>
                <p className="text-sm text-orange-700 mt-1">聖經對照：箴言28章13節「遮掩自己罪過的，必不亨通；承認離棄罪過的，必蒙憐恤。」</p>
              </div>
              <div className="bg-white p-4 rounded border border-cyan-200">
                <p className="font-bold text-rose-700 mb-1">2. 逃避（Flight）</p>
                <p className="text-sm text-gray-700">試圖透過各種方式逃離困難的現實：沉迷於工作、媒體、購物、食物、酒精、或宗教活動（是的，宗教活動也可以成為逃避的工具！）。逃避的人表面上在「努力」，實際上只是在換地點。</p>
                <p className="text-sm text-orange-700 mt-1">聖經對照：約拿書1章3節（約拿逃往他施）——逃避不能解決問題，因為問題隨著我們走。</p>
              </div>
              <div className="bg-white p-4 rounded border border-cyan-200">
                <p className="font-bold text-rose-700 mb-1">3. 誇大（Exaggeration）</p>
                <p className="text-sm text-gray-700">把困難放大到災難性的程度，失去正確的透視。「這是最糟糕的事！」「我永遠無法從這裡走出來！」「沒有人能理解我的痛苦！」誇大的情緒讓我們失去判斷力，也讓周圍的人感到疲憊。</p>
                <p className="text-sm text-orange-700 mt-1">聖經對照：民數記13章33節（探子的誇大）——「我們看自己就如蚱蜢一樣」。</p>
              </div>
              <div className="bg-white p-4 rounded border border-cyan-200">
                <p className="font-bold text-rose-700 mb-1">4. 以惡報惡（Retaliation）</p>
                <p className="text-sm text-gray-700">在痛苦中把傷害轉嫁給別人：憤怒爆發、言語攻擊、冷戰報復、或消極的懲罰。人在炎熱中最直覺的反應之一就是讓別人也感受到痛苦。「你讓我痛，我也要讓你痛。」</p>
                <p className="text-sm text-orange-700 mt-1">聖經對照：以弗所書4章31-32節「苦毒、惱恨……都當從你們中間除掉……要以恩慈相待」。</p>
              </div>
              <div className="bg-white p-4 rounded border border-cyan-200">
                <p className="font-bold text-rose-700 mb-1">5. 自甘墮落（Giving up）</p>
                <p className="text-sm text-gray-700">在長期的炎熱中放棄掙扎，進入麻木、放縱、或靈命的枯萎。「我已經盡力了，但沒有用。」這不僅僅是外在的放棄，更是靈命深層的投降——不再掙扎，不再禱告，不再尋求改變。</p>
                <p className="text-sm text-orange-700 mt-1">聖經對照：以弗所書4章19節「他們既然良心喪盡，就放縱私慾，貪行種種的污穢。」</p>
              </div>
              <div className="bg-white p-4 rounded border border-cyan-200">
                <p className="font-bold text-rose-700 mb-1">6. 自以為義（Self-righteousness）</p>
                <p className="text-sm text-gray-700">表面上保持正確的宗教行為，但內心充滿對神和他人的苦毒。「我已經做了一切正確的事，為什麼神還讓這事發生？」這是最難被辨識的荊棘，因為它偽裝成「屬靈」的樣子。</p>
                <p className="text-sm text-orange-700 mt-1">聖經對照：路加福音15章28-30節（大兒子的憤怒）——他一直在做「對的事」，但他的心從未真正在父親那裡。</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-cyan-700 mb-2">三、好果樹的回應——以弗所書的另一面</h3>
            <p className="mb-2">以弗所書不只診斷問題，也提供解方。以下是面對炎熱時，屬靈成熟者的四種回應：</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { title: '面對現實', desc: '誠實承認困難的存在，不否認，也不逃避。「這是真實的問題，我需要面對它。」（以弗所書4:15「用愛心說誠實話」）' },
                { title: '適當程度', desc: '以正確的比例看問題——既不否認它的存在，也不誇大它的程度。「這很困難，但神更大。」' },
                { title: '時刻警醒', desc: '在炎熱中保持靈性的警覺，認識自己罪性反應的誘惑，並主動尋求神的幫助。（以弗所書6:18「靠著聖靈……禱告」）' },
                { title: '建設性行動', desc: '在炎熱中採取有益的行動——不是逃避，也不是報復，而是積極地做有益於自己和別人的事。（以弗所書4:28「倒要勞力……好分給那缺少的人」）' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-3 rounded border border-green-200">
                  <p className="font-bold text-green-700 mb-1">{item.title}</p>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 作業 */}
      <section className="border-l-4 border-green-400 bg-green-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <Heart className="w-6 h-6 text-green-600" />
          <h2 className="text-xl font-bold text-green-700">作業：以弗所書研讀與荊棘辨識</h2>
        </div>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border border-green-200">
            <h3 className="font-bold text-green-700 mb-2">細讀以弗所書4章17節至5章21節</h3>
            <p className="text-gray-700 mb-2">從這段經文中選出3個最讓你感到被挑戰的具體指令（如「生氣不犯罪」「說造就人的話」），並回答：</p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-gray-700">
              <li>為什麼這個指令對你特別困難？</li>
              <li>在哪些具體情況下，你最難遵守這個指令？</li>
              <li>如果你能做到這個指令，你最親近的關係會有什麼不同？</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded border border-green-200">
            <h3 className="font-bold text-green-700 mb-2">更新「自我成長方案」</h3>
            <p className="text-gray-700 mb-2">針對你目前最大的炎熱，更新你的自我成長方案：</p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-gray-700">
              <li>從六種荊棘反應中，選出你最主要的1-2種，並給出具體的例子</li>
              <li>這些荊棘如何影響你的關係（請給出一個具體的事件）？</li>
              <li>你希望用「好果樹的四種回應」中的哪一種取代你的荊棘反應？</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded border border-green-200">
            <h3 className="font-bold text-green-700 mb-2">「舊人/新人」的日常觀察</h3>
            <p className="text-gray-700 mb-2">本週每天記錄：</p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-gray-700">
              <li>今天我最明顯的「舊人」行為是什麼？（來自以弗所書的具體描述）</li>
              <li>我在哪個時刻最接近「新人」的樣式？是什麼讓那一刻成為可能？</li>
              <li>明天我想在哪一個具體的方面做得更好？</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 重點總結 */}
      <section className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 p-6 rounded-xl">
        <div className="flex items-center gap-3 mb-4">
          <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
          <h2 className="text-xl font-bold text-sky-800">重點總結</h2>
        </div>
        <div className="space-y-3">
          {[
            '「荊棘」是我們對炎熱的有罪回應，它不只是外在的壞行為，更是內心腐敗動機的外在表現',
            '以弗所書4-6章描述了「舊人」（荊棘）和「新人」（果實）的對比，這兩種可能性都存在於每一個基督徒心中',
            '六種主要荊棘反應（否認、逃避、誇大、以惡報惡、自甘墮落、自以為義）都有一個共同特點：以自我為中心，而非以神為中心',
            '好果樹的四種回應（面對現實、適當程度、時刻警醒、建設性行動）需要靠聖靈的能力，不是靠意志力',
            '辨識自己的荊棘比知道荊棘的定義更重要——這需要誠實和謙卑，往往也需要別人的幫助',
            '我們的荊棘反應總是在傷害關係——辨識它是愛護我們的家人、朋友和弟兄姐妹的第一步',
          ].map((point, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="bg-sky-600 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 延伸CPR */}
      <section className="border-l-4 border-indigo-400 bg-indigo-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <MessageCircle className="w-6 h-6 text-indigo-600" />
          <h2 className="text-xl font-bold text-indigo-700">延伸反思</h2>
        </div>
        <div className="space-y-3 text-gray-700">
          <div className="bg-white p-4 rounded border border-indigo-200">
            <p className="font-bold text-indigo-700 mb-2">最難承認的荊棘</p>
            <p>保羅·區普指出，最危險的荊棘往往是「自以為義」——因為它穿著宗教的外衣，讓我們很難認出來。你是否曾有過這樣的時刻：你做了「正確的事」，卻懷著苦毒的心？你是否曾在屬靈的行為背後，藏著對神的憤怒或不滿？</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <p className="font-bold text-indigo-700 mb-2">荊棘與恩典</p>
            <p>認識自己的荊棘，不是為了讓自己陷入定罪感，而是為了更深地領受恩典。正因為我們有荊棘，我們才需要十字架。以弗所書2章8節說：「你們得救是本乎恩，也因著信。」我們的荊棘揭示了我們的需要，而十字架滿足了這個需要。</p>
          </div>
        </div>
      </section>

      {/* 生活實踐 */}
      <section className="border-l-4 border-lime-400 bg-lime-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <Users className="w-6 h-6 text-lime-600" />
          <h2 className="text-xl font-bold text-lime-700">生活實踐方針</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: 'a. 每日荊棘偵測', desc: '每晚睡前問：「今天我的荊棘在哪裡出現？」不要急著辯解，先誠實地承認' },
            { label: 'b. 以弗所書的實踐', desc: '選擇一個本週要刻意實踐的以弗所書指令，並每天向神禱告求祂幫助你做到' },
            { label: 'c. 向關係中的人道歉', desc: '如果你的荊棘傷害了某人，鼓起勇氣去道歉，不要辯解或找理由' },
            { label: 'd. 讀以弗所書整本', desc: '這週花時間讀完整本以弗所書，感受保羅在「神的恩典」和「實際生活」之間的連結' },
            { label: 'e. 辨識最脆弱的時刻', desc: '你在哪些具體時刻（如：疲憊、被批評、事情不順）最容易出現荊棘反應？做好預備' },
            { label: 'f. 更新自我成長方案', desc: '把本課的荊棘分析加入你的自我成長方案，讓它更具體和誠實' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-4 rounded border border-lime-200">
              <p className="font-bold text-lime-700 mb-1">{item.label}</p>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
