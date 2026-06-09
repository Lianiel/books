import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book27Ch7() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    exploration: true,
    questions: true,
    practice: true,
  });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">第七課</h1>
        <h2 className="text-xl font-semibold text-gray-700">什麼事情纏累著你（荊棘篇上）</h2>
        <p className="text-sm text-gray-500 mt-2">以弗所書 4:17–6:18</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-emerald-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-emerald-700 mb-3">荊棘藪：心的罪性回應</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                在HEAT模式中，當炎熱（處境試煉）臨到我們，心的第一個反應決定了一切。這個反應被稱為「荊棘藪」——出自耶利米書17:5-8的比喻。倚靠人、以肉身為膀臂的人，像「沙漠的杜松」，落在乾旱之地，嚐不到好處的來到。這正是我們罪性的心遇到壓力時，往往會走上的路。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                以弗所書4章到6章，保羅詳細描繪了一幅「在基督裡」的生命圖景，以及它的對立面——在「無益的心思」中行事。保羅說外邦人「心地昏暗，與神所賜的生命隔絕了」（弗4:18），他們「縱慾，貪行種種的污穢」。這是荊棘藪的本質：心遠離神，就在各樣情慾中打轉。
              </p>
              <p className="text-gray-700 leading-relaxed">
                本課的核心問題是：當你遭遇炎熱時，你的心是怎樣回應的？你是靠向那位把你植在溪水旁的神，還是退縮到荊棘藪的罪性回應？
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-emerald-700 mb-3">五種荊棘藪回應模式</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                當炎熱臨到，罪性的心會走向以下幾種典型的荊棘藪模式。這些模式並非彼此排斥，一個人可能在不同場合展現不同的模式，甚至同時出現多種。
              </p>

              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                  <h4 className="font-semibold text-red-700 mb-2">① 否認與逃避（Denial/Avoidance）</h4>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    面對問題，有些人的第一反應是否認它的存在，或設法逃離它。他們可能沉浸在娛樂、工作、甚至屬靈活動中，以免面對真正的困難。逃避並不能解決問題，只是把荊棘壓在心裡，讓它默默生長。否認的背後往往是恐懼——恐懼面對真相太痛苦，或恐懼承認自己不能掌控局面。
                  </p>
                </div>

                <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-400">
                  <h4 className="font-semibold text-orange-700 mb-2">② 誇大與膨脹（Exaggeration）</h4>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    另一些人走向另一個極端——把問題誇大，讓自己陷在絕望的深淵。「這是有史以來最壞的情況」、「我永遠無法從中走出來」、「每個人都針對我」。誇大是心把自己放在宇宙中心的表現：好像這個世界的運行都圍繞著「我」的苦難。誇大使人癱瘓，無法採取任何建設性的行動。
                  </p>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-400">
                  <h4 className="font-semibold text-yellow-700 mb-2">③ 以惡報惡（Returning Evil for Evil）</h4>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    當別人對我們不好，我們罪性的第一衝動是「以牙還牙」。保羅在以弗所書4:31-32明確指出，要「除掉一切的苦毒、惱恨、忿怒、嚷鬧、毀謗」，而代之以恩慈、憐憫、饒恕。以惡報惡的人，實際上把自己的心交給了傷害他們的人——讓對方的罪支配自己的反應。這是一個惡性循環，荊棘越長越茂。
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-400">
                  <h4 className="font-semibold text-purple-700 mb-2">④ 自甘墮落（Self-Pity/Wallowing）</h4>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    有些人在苦難中選擇沉湎在自憐中。他們反覆咀嚼自己的傷痛，向所有人訴說自己有多可憐，卻拒絕任何改變的可能性。自憐看起來是柔弱的，但實際上是一種隱藏的驕傲——相信自己不應該承受這樣的苦難，相信神虧欠自己更好的待遇。自憐使人停在原地，無法前進。
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                  <h4 className="font-semibold text-blue-700 mb-2">⑤ 自我推託與自以為義（Self-Justification）</h4>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    這是最難被人察覺的荊棘模式。自以為義的人總是找理由說明自己的罪性回應是合理的：「換了任何人都會這樣反應」、「是他先惹我的」、「在那種情況下，我還能怎樣？」自我推託的本質是拒絕承認自己的心有問題，把責任完全外推。這種人往往比較「屬靈」，會用神學語言包裝自己的罪性反應。
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-emerald-700 mb-3">好果樹的四種回應</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                以弗所書的另一面，是「在基督裡」新人的生命特質。當炎熱臨到，靠近神的心會展現截然不同的回應。這四種回應不是自然人的本能，而是聖靈在信徒心中所結的果實。
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                  <h4 className="font-semibold text-emerald-700 text-sm mb-1">🌿 面對現實</h4>
                  <p className="text-gray-600 text-sm">不否認、不逃避，勇敢承認問題的存在。「是的，這件事很困難，而且它在我心裡引起了這樣的反應。」誠實是屬靈成長的起點。</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                  <h4 className="font-semibold text-emerald-700 text-sm mb-1">⚖️ 以適當程度回應</h4>
                  <p className="text-gray-600 text-sm">既不否認也不誇大，以符合現實的程度回應處境。「這件事確實令人難過，但它不是世界末日；神仍然掌管一切。」</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                  <h4 className="font-semibold text-emerald-700 text-sm mb-1">👁️ 時刻警醒</h4>
                  <p className="text-gray-600 text-sm">保羅在弗6章談到屬靈爭戰，要「謹守警醒，常常禱告」（弗6:18）。警醒就是留意自己的心在炎熱中走向何方，及時向神求助。</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                  <h4 className="font-semibold text-emerald-700 text-sm mb-1">🔨 建設性行動</h4>
                  <p className="text-gray-600 text-sm">「不要為魔鬼留地步」（弗4:27）。好果樹的人在炎熱中不癱瘓，而是採取符合神心意的行動——可能是認罪、和好、禱告、尋求幫助。</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-emerald-700 mb-3">以弗所書的荊棘藪清單</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                以弗所書4:17-6:18提供了一份詳細的「荊棘藪行為清單」，這些行為都是心遠離神時的自然結果：虛謊（4:25）、含怒（4:26）、偷竊（4:28）、污穢言語（4:29）、苦毒、惱恨、忿怒、嚷鬧、毀謗（4:31）、淫亂、各樣污穢（5:3）、戲笑（5:4）、醉酒放蕩（5:18）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這些都是「荊棘藪的果子」，是心走錯方向的外在表現。但保羅緊接著給出了「好果樹的清單」：說誠實話（4:25）、有益的話（4:29）、恩慈、憐憫（4:32）、感恩（5:4、5:20）、順服（5:21-6:9）、穿上神的全副軍裝（6:10-18）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                關鍵在於：保羅不是在給我們一份「行為守則」，讓我們靠自己努力做到。他是在描繪一個在基督裡新生命的人所展現的模樣。改變從心開始，而心的改變來自認識並倚靠基督。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 重點總結 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-sky-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">重點總結</span>
          </div>
          {expanded['summary'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['summary'] && (
          <div className="p-5 bg-white">
            <ul className="space-y-2">
              {[
                '「荊棘藪」是心在炎熱（試煉處境）中罪性反應的比喻，出自耶利米書17:5-8的「沙漠杜松」形象——倚靠人的肉身，遠離神的活水。',
                '五種荊棘藪模式：否認/逃避、誇大/膨脹、以惡報惡、自甘墮落、自我推託/自以為義。這些都是心遠離神時的自然結果。',
                '以弗所書4-6章提供了荊棘藪行為的具體清單，也給出了好果樹的對照清單，兩者都根植於心的狀態。',
                '好果樹的四種回應是：面對現實、以適當程度回應、時刻警醒、建設性行動。這些是聖靈的果子，非人力所能強求。',
                '荊棘藪的問題不在行為本身，而在行為背後的心——拒絕神、倚靠自己。改變必須從心的更新開始，而非行為的糾正。',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-gray-700">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* 延伸探討 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('exploration')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">延伸探討</span>
          </div>
          {expanded['exploration'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['exploration'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">荊棘藪與心的偶像</h4>
              <p className="text-gray-700 leading-relaxed text-sm">
                五種荊棘藪模式表面上看起來不同，但都有一個共同根源：心把某樣東西（安全感、被人接納、掌控感、舒適、自我形象）看得比神更重。否認/逃避是因為不願失去「舒適」；以惡報惡是因為心的「公義感」（實為驕傲）被冒犯；自甘墮落是因為心相信自己「值得更好的」。識別荊棘藪背後的心的偶像，是屬靈診斷的關鍵一步。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">以弗所書的「穿上脫下」神學</h4>
              <p className="text-gray-700 leading-relaxed text-sm">
                保羅在以弗所書4:22-24用了「脫去舊人、穿上新人」的比喻。這個比喻不是說信徒應該「努力改變行為」，而是說信徒已經在基督裡有了新身分（「新人」），但需要在日常生活中實際「穿戴」這個新身分。荊棘藪是「舊人的衣服」，好果樹是「新人的衣服」。改變是讓行為與已然確立的身分相符，而非試圖建立一個新的身分。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">屬靈爭戰與荊棘藪</h4>
              <p className="text-gray-700 leading-relaxed text-sm">
                以弗所書6:10-18的「全副軍裝」段落不是偶然放在這裡的。保羅在詳細討論了各種人際關係中的荊棘藪與好果樹之後，提醒讀者：我們的爭戰「不是與屬血氣的爭戰」（弗6:12）。我們面對的不只是人的難處或自己的軟弱，而是一個試圖讓我們的心遠離神的仇敵。警醒禱告（弗6:18）因此不只是敬虔操練，而是屬靈爭戰的武器。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 反思問題 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">反思問題</span>
          </div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && (
          <div className="p-5 bg-white space-y-3">
            {[
              '在五種荊棘藪模式中，哪一種是你最常落入的？你通常在什麼樣的炎熱（處境）下最容易出現這種反應？',
              '想一個你最近遭遇的困難處境。你的第一個反應是荊棘藪式的，還是好果樹式的？這個反應透露了你心裡看重什麼？',
              '你有沒有某種荊棘藪模式，是你很難承認是「問題」的？（例如：你覺得自己的憤怒是「合理的義憤」，或你的逃避是「智慧地保護自己」）',
              '以弗所書4:26說「含怒不可到日落」——有哪些你的荊棘藪反應，已經「過了日落」，甚至積累了多年？',
              '保羅說「不要為魔鬼留地步」（弗4:27）。在你的生命中，哪些荊棘藪模式可能在你不知情的情況下，給了仇敵某種影響力？',
              '四種好果樹回應中，哪一種對你來說最困難？你認為這背後有什麼攔阻？',
            ].map((q, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0">{i + 1}.</span>
                <p className="text-gray-700">{q}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 具體實踐方針 */}
      <div className="mb-6 border border-green-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('practice')} className="w-full px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">具體實踐方針</span>
          </div>
          {expanded['practice'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['practice'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 個人荊棘藪診斷</h4>
              <p className="text-gray-700 text-sm mb-2">選擇一個近期你感到困難的處境，對照五種荊棘藪模式做自我診斷：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>我是否在否認/逃避這個問題？</li>
                <li>我是否在誇大它的嚴重性？</li>
                <li>我是否有「以惡報惡」的念頭或行動？</li>
                <li>我是否在自憐中打轉，不願前進？</li>
                <li>我是否在為自己的反應找理由合理化？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 以弗所書默想功課</h4>
              <p className="text-gray-700 text-sm mb-2">本週每天讀以弗所書4-6章的一個段落，找出：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>保羅提到的一個「舊人行為」（荊棘藪）</li>
                <li>對應的「新人行為」（好果樹）</li>
                <li>保羅給出的「動機」——為什麼要做新人的選擇</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🤝 群體裡的操練</h4>
              <p className="text-gray-700 text-sm mb-2">找一個你信任的弟兄或姊妹，分享：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>你最常落入的荊棘藪模式是什麼</li>
                <li>你希望他/她如何幫助你留意這個模式</li>
                <li>當你下次落入這個模式時，你們可以一起怎樣禱告</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-600 text-sm italic">
                「主啊，我承認我的心很容易走向荊棘藪——否認、逃避、抱怨、以惡報惡。求祢讓我看清楚，當炎熱臨到時，我的心是轉向祢，還是轉向自己。願聖靈的力量在我裡面動工，讓我能穿上新人的衣服，以好果樹的方式回應。奉主耶穌的名，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
