import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book27Ch12() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">第十二課</h1>
        <h2 className="text-xl font-semibold text-gray-700">令人耳目一新的善果（果實篇下）</h2>
        <p className="text-sm text-gray-500 mt-2">詩篇 4篇；以賽亞書 58:1–12；何西阿書 14:1–9</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-emerald-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-emerald-700 mb-3">詩篇4篇：在炎熱中結出平安的果子</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                詩篇4篇是大衛在一個嚴峻炎熱中所寫的詩：他被誣告，被仇敵圍攻，可能正是押沙龍叛亂的時期。但這首詩展示了一個在極度炎熱中，心仍然倚靠神所結出的「令人耳目一新的善果」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                詩篇4:1-5：「神啊，你是我公義的神，我呼求的時候，求你應允我……你們愛虛榮……你們親近謊言……要知道耶和華已經分別虔誠人歸他自己；我呼求耶和華，他必聽我。你們應當畏懼，不可犯罪；在床上的時候，要心裡思想，並要肅靜。你們當以公義獻祭，且當倚靠耶和華。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                大衛的心路歷程是HEAT模式的完整示範：炎熱（被誣告，仇敵攻擊）→ 他選擇的不是荊棘藪（報復、逃避、自憐），而是→ 轉向神呼求（十字架式的信靠）→ 結出平安的果子（詩篇4:8：「我必安然躺下睡覺，因為獨有你耶和華使我安然居住」）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                詩篇4:7-8是果實的最終描述：「你使我心裡快樂，勝過那豐收五穀新酒的人。我必安然躺下睡覺，因為獨有你耶和華使我安然居住。」這種在炎熱中的「安然」，不是環境的安然，而是心倚靠神的安然。這就是「令人耳目一新的善果」。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-emerald-700 mb-3">大衛與押沙龍：果實的真實考驗</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                如果說詩篇4篇是屬靈果實的詩歌描述，那麼大衛與押沙龍的故事（撒母耳記下15-18章）就是它最嚴峻的現實考驗。押沙龍，大衛自己的兒子，陰謀奪取他的王位，迫使他在人生最低谷逃離耶路撒冷。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在這個炎熱中，大衛的回應令人驚訝：當示每咒罵他、丟石頭，亞比篩說「讓我去砍下他的頭」，大衛說：「由他咒罵，因為耶和華吩咐他咒罵大衛。」（撒下16:11）這是好果樹的回應——不以惡報惡，相信神的主權在最屈辱的炎熱中仍然運行。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當押沙龍戰死，大衛的回應又令人意外：他不是勝利慶祝，而是哭泣（撒下18:33：「我兒押沙龍啊，我兒，我兒押沙龍啊！我恨不得替你死」）。這是一顆被神愛感化的心——即使仇敵是傷害他最深的人，他仍然愛他。這就是最令人耳目一新的善果：愛仇敵，愛那傷害你最深的人。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-emerald-700 mb-3">以賽亞書58：真實的果子，不是宗教表演</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                以賽亞書58章是先知對以色列人發出的嚴肅批評：他們禁食禱告，但卻是為了「使人看見」的表演（賽58:3-4）。神說：「你們禁食的日子，仍求利益，勒索你們的工人。你們禁食，卻彼此爭鬧，用惡拳打人。」（賽58:3-4）這是「假果子」——宗教外表，荊棘內心。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神所要的「真禁食」（賽58:6-7）是：「鬆開兇惡的繩，解下軛上的索，使被欺壓的得自由，折斷一切的軛；要把你的餅分給飢餓的人，將漂流的窮人接到你家中；見赤身的給他衣服遮體，顧恤自己的骨肉而不掩面。」這是真果實——從被神的愛感化的心中流露出來的公義、憐憫和慷慨。
              </p>
              <p className="text-gray-700 leading-relaxed">
                神接著應許（賽58:8-11）：「這樣，你的光就必發現如早晨……你必像澆灌的園子，又像水流不絕的發源之地。」這是「好果樹」的圖像——不是偶爾結出一兩個果子，而是持續「像澆灌的園子」，源源不絕。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-emerald-700 mb-3">何西阿書14：悔改之後的豐盛果實</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                何西阿書14章是全書的高潮，也是整個《人如何改變》的結語。神呼召以色列悔改（何14:1-3），然後應許悔改後的豐盛更新（何14:4-8）：
              </p>
              <p className="text-gray-700 leading-relaxed mb-3 italic border-l-4 border-emerald-300 pl-4">
                「我必醫治他們背道的病，甘心愛他們，因為我的怒氣向他們轉消了。我必向以色列如甘露，他必如百合花開放，如黎巴嫩的樹木扎根……他的枝條必延伸，他的榮華如橄欖樹，他的香氣如黎巴嫩的香柏木。」（何14:4-6）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這是對HEAT模式最美麗的總結：當一個人真正悔改，從荊棘藪轉向十字架，神的恩典就「如甘露」澆灌，使他像「百合花開放」，像「黎巴嫩的樹木扎根」，結出「如橄欖樹」的榮華果實。
              </p>
              <p className="text-gray-700 leading-relaxed">
                何西阿書14:9是全書最後的智慧呼召：「誰是智慧人，可以明白這些事；誰是通達人，可以知道這一切。因為耶和華的道是正直的；義人必在其上行走，罪人卻在其上跌倒。」這是一個邀請：走在神的道上，是義人（好果樹）的道路；拒絕這條路，是罪人（荊棘藪）的跌倒。《人如何改變》的答案，最終是：靠著神的恩典，一步步走在這條道路上。
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
                '詩篇4篇：大衛在政治危機（押沙龍叛亂）中，選擇倚靠神而非荊棘藪，結出「安然躺下睡覺」的平安果子——這是在炎熱中最令人驚訝的善果。',
                '大衛對押沙龍的愛（撒下18:33）是最高的果實示範：愛那傷害你最深的人。這種愛不是情感的強迫，而是被神的愛感化後自然流露的結果。',
                '以賽亞書58章區分了「假果子」（宗教表演）和「真果實」（從被神愛感化的心流露的公義、憐憫、慷慨）。神要的是真果實，不是屬靈的排場。',
                '何西阿書14章是HEAT模式的最終圖景：悔改的人，神的恩典「如甘露」澆灌，使他像百合花開放、如橄欖樹結果，「像澆灌的園子」持續豐盛。',
                '《人如何改變》的最終答案：靠著神的恩典，在炎熱中一次次選擇轉向十字架而非荊棘藪，漸漸成為一棵結果豐盛的好果樹——這是一生的旅程，也是神對每位信徒的心意。',
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
              <h4 className="font-semibold text-indigo-700 mb-2">大衛的失敗與果實：不是道德英雄</h4>
              <p className="text-gray-700 leading-relaxed text-sm">
                大衛是聖經中「按照神心意的人」（使徒行傳13:22），但他也犯下了姦淫和謀殺（拔示巴/烏利亞的故事）。他的押沙龍問題部分也是他自己不當家庭管理的後果。然而神仍然在他生命中工作，讓他結出詩篇4篇那樣的果子。這告訴我們：「果實」不是完美主義的成就，而是一個有失敗歷史的人，持續悔改、持續倚靠神所漸漸結出的真實成長。大衛的生命是《人如何改變》最真實的活教材。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">以賽亞書58與社會公義</h4>
              <p className="text-gray-700 leading-relaxed text-sm">
                以賽亞書58的「真禁食」呼召信徒關注社會公義——「使被欺壓的得自由、把餅分給飢餓的人、接漂流的窮人到家」。這揭示了一個重要的屬靈事實：真正的屬靈果實必然有社會向度。一個生命真的被福音改變的人，不只是在個人靈修上有所成長，也必然在對社會最弱勢的人的態度上有所改變。屬靈的更新與社會的憐憫，在聖經中從來不是分離的。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">何西阿書的終末盼望</h4>
              <p className="text-gray-700 leading-relaxed text-sm">
                何西阿書14章「百合花開放、黎巴嫩扎根、橄欖樹榮華」的圖像，不只是個人改變的描述，也指向末世的盼望——神國完全實現時的豐盛景象。《人如何改變》所描述的HEAT模式改變，是這個終末盼望的「預嘗」（foretaste）：當信徒在炎熱中倚靠十字架結出果實，他們的生命成為了「已然而未然」神國的活見證。每一次真實的改變，都是末世盼望在現今時代的一道閃光。
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
              '詩篇4:8「我必安然躺下睡覺」——你的睡眠反映了你的心靈狀態嗎？你能坦然把重擔交給神，安然入睡，還是你的心在夜裡仍然為炎熱憂愁翻騰？',
              '大衛對傷害他最深的人（仇敵示每、甚至逆子押沙龍）的回應，讓你看到了什麼？在你生命中，有沒有一個「押沙龍」——一個傷害你最深的人？你的回應更像荊棘藪還是大衛的果實？',
              '以賽亞書58章的「假果子與真果實」對照，讓你看到自己屬靈生命的哪些部分是表演給人看的？',
              '「像澆灌的園子，像水流不絕的發源之地」（賽58:11）——這個圖像描述了一種持續豐盛的生命。你的生命更像這個圖像，還是更像一棵偶爾結果、大多時候乾枯的樹？是什麼造成這個差異？',
              '回顧整本《人如何改變》（HEAT模式），哪一個字母（炎熱、荊棘藪、十字架、果實）對你最有啟發，或最有挑戰？',
              '何西阿書14:9說「誰是智慧人，可以明白這些事」——經過這十二課的學習，你認識到的「神的道」是什麼？你打算如何把它應用在你接下來的生命旅程中？',
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
              <h4 className="font-semibold text-green-700 mb-2">🌿 HEAT模式回顧</h4>
              <p className="text-gray-700 text-sm mb-2">完成這個課程後，選擇你目前生命中最重要的一個「炎熱」，用HEAT完整框架分析：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li><strong>H（炎熱）</strong>：具體的處境是什麼？神在其中可能的旨意是什麼？</li>
                <li><strong>T（荊棘藪）</strong>：我目前最常落入的回應模式是哪種？背後的偶像是什麼？</li>
                <li><strong>C（十字架）</strong>：加拉太書2:20的哪個要素，是我在這個炎熱中最需要抓住的？</li>
                <li><strong>F（果實）</strong>：如果我真的靠十字架回應這個炎熱，我的生命會結出什麼樣的果實？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 詩篇4篇與何西阿書14章背誦</h4>
              <p className="text-gray-700 text-sm mb-2">嘗試背誦以下兩節經文，作為果實生命的提醒：</p>
              <div className="space-y-2">
                <div className="bg-emerald-50 rounded p-3 text-sm text-gray-700 italic">
                  「我必安然躺下睡覺，因為獨有你耶和華使我安然居住。」（詩篇4:8）
                </div>
                <div className="bg-emerald-50 rounded p-3 text-sm text-gray-700 italic">
                  「我必醫治他們背道的病，甘心愛他們，因為我的怒氣向他們轉消了。」（何西阿書14:4）
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🤝 與群體分享成長故事</h4>
              <p className="text-gray-700 text-sm mb-2">在小組或與一位信任的弟兄/姊妹分享：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>在這十二課中，神如何使用某一個炎熱，讓你看見自己的荊棘藪？</li>
                <li>你有沒有一個「令你耳目一新」的成長時刻——一個你驚訝地發現自己不一樣了的時刻？</li>
                <li>未來你最想繼續操練HEAT模式的哪個部分？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 給未來的自己的信</h4>
              <p className="text-gray-700 text-sm mb-2">寫一封短信給一年後的自己，包含：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>你希望一年後在哪個領域，你的生命更像好果樹？</li>
                <li>你打算做什麼讓這個改變發生（記得：靠神的恩典，不是靠意志力）？</li>
                <li>一句你想一年後仍然相信的關於神的真理</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">🙏 課程結束禱告</h4>
              <p className="text-gray-600 text-sm italic">
                「父神啊，感謝祢透過這十二課，讓我看見自己的心——那些荊棘藪的部分，也讓我看見祢的心——那無盡的恩典和甘願愛我們的神。我承認我無法靠自己改變，但我相信祢是那位說『我必醫治他們背道的病，甘心愛他們』的神。求祢繼續在我裡面動工，在每一個炎熱中提醒我轉向十字架，讓我一步步成為那棵靠近祢活水、結果豐盛的好樹。感謝祢，這是祢的工作，不是我的。奉主耶穌基督的名，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
