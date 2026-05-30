import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Search, HelpCircle, Check } from 'lucide-react';

export default function Book18Ch10() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    exploration: true,
    questions: true,
    practice: true
  });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-600 to-rose-700 bg-clip-text text-transparent">第十章</h1>
        <h2 className="text-xl font-semibold text-gray-700">直面撒但的四大策略</h2>
        <p className="text-sm text-gray-500 mt-2">第三部分：認識撒但的策略</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">四大策略的概覽</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                上一章我們從清教徒傳統學習了撒但如何「設置裝置」的一般原則。本章更加聚焦，根據清教徒的分析，特別是理查·吉爾平的《論撒但的試探》，識別撒但在信徒生命中使用的四個主要、可辨識的策略領域：
              </p>
              <div className="grid grid-cols-1 gap-3 mt-3">
                <div className="flex items-center gap-3 bg-red-50 rounded-lg px-4 py-3">
                  <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                  <span className="font-semibold text-gray-800">誘惑犯罪——用試探引入罪</span>
                </div>
                <div className="flex items-center gap-3 bg-red-50 rounded-lg px-4 py-3">
                  <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                  <span className="font-semibold text-gray-800">攔阻靈修——使屬靈操練失效</span>
                </div>
                <div className="flex items-center gap-3 bg-red-50 rounded-lg px-4 py-3">
                  <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                  <span className="font-semibold text-gray-800">歪曲真理——用謊言腐蝕信仰</span>
                </div>
                <div className="flex items-center gap-3 bg-red-50 rounded-lg px-4 py-3">
                  <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                  <span className="font-semibold text-gray-800">阻礙成聖——使靈命成長停滯</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">策略一：誘惑犯罪</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                這是撒但最基本、最直接的策略——通過試探，引導信徒犯下具體的罪。吉爾平識別了撒但在這個策略上的幾種常用手段：
              </p>
              <div className="space-y-3">
                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-1">利用身體的需要</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    撒但在最基本的身體需要（饑餓、疲勞、性慾、舒適）最迫切時出手試探，就像他試探禁食四十天後的耶穌（馬太福音4:3）。身體的需要本身不是罪，但撒但試圖將合理的需要引向罪的滿足。
                  </p>
                </div>
                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-1">利用機會和環境</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    撒但製造或利用環境機會，使罪看起來容易又低風險。大衛在王宮屋頂看見拔示巴洗澡（撒母耳記下11:2）——這個機會是撒但的精心安排嗎？清教徒提醒我們：「把自己放在試探的場合中，就是在試探神。」（哥林多前書6:18的「逃跑」原則）
                  </p>
                </div>
                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-1">連結性的試探鏈</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    撒但很少用孤立的試探，而是建立一個「試探鏈」——每一個小的讓步都使下一個更大的試探更容易屈服。雅各書1:14-15說：「但各人被試探，乃是被自己的私慾牽引誘惑的。私慾既懷了胎，就生出罪來；罪既長成，就生出死來。」罪的滑坡是真實的。
                  </p>
                </div>
              </div>

              <div className="mt-4 bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">應對辦法</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• 預防性地避開試探的場合（「逃離邪情私慾」提摩太後書2:22）</li>
                  <li>• 在試探出現的第一刻就拒絕，不讓私慾「懷胎」</li>
                  <li>• 用神的話直接回應（如耶穌的「經上記著說」）</li>
                  <li>• 藉禱告尋求出路（哥林多前書10:13）</li>
                  <li>• 對信任的肢體承擔問責（雅各書5:16「彼此認罪」）</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">策略二：攔阻靈修</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                撒但深知，一個有強健靈修生活的基督徒是他難以撼動的；因此，他積極攔阻讀經、禱告、崇拜和其他屬靈操練。吉爾平說：「撒但知道，若他能使信徒忽略私下的靈修，公開的事奉就容易被攻破。」
              </p>
              <div className="space-y-3">
                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-1">使屬靈操練感覺枯燥無味</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    撒但使讀經感覺機械、毫無生氣；使禱告感覺是對著牆壁說話；使崇拜感覺空洞。他的目標是使信徒失去對神話語和禱告的渴慕。當這些操練失去甜蜜，撒但就成功地削弱了我們的屬靈武裝。
                  </p>
                </div>
                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-1">用世俗的忙碌排擠屬靈空間</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    撒但不需要讓我們做明顯的惡事，只需讓我們的生活塞滿「緊急但不重要」的事，使讀經和禱告被一再推遲。路加福音10:41-42「馬大，馬大，你為許多的事思慮煩擾，但是不可少的只有一件」——繁忙本身可以成為撒但使信徒靈命飢餓的工具。
                  </p>
                </div>
                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-1">用分心打斷讀經和禱告</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    許多信徒報告，在試圖讀經或禱告時，腦中突然湧現各種念頭和計劃；剛坐下來讀經，手機就響了；剛開始禱告，就想起一件「緊急的事」。清教徒認為這些不全是巧合——撒但積極地引入分心以打斷靈修。
                  </p>
                </div>
              </div>

              <div className="mt-4 bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">應對辦法</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• 將靈修固定在每天特定的時間，建立不易被打斷的習慣</li>
                  <li>• 即使在枯燥無感的時期，也持守靈修的紀律——情感會跟隨意志，而非相反</li>
                  <li>• 在靈修前做短暫的靜默準備，排除分心</li>
                  <li>• 記住：讀經禱告是屬靈爭戰的預備，不是選項——不讀經禱告就上戰場，是赤手空拳的士兵</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">策略三：歪曲真理</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                第九章第三章說撒但是謊言之父（約翰福音8:44）；他試圖歪曲關於神、關於自我和關於救恩的真理。他的謊言有時是公然的否定，更多時候是對真理的微妙扭曲。
              </p>
              <div className="space-y-3">
                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-1">歪曲神的性情</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    撒但試圖使我們對神的認識出現偏差：或是只看見神的慈愛而忽略祂的公義（導致道德鬆懈），或是只看見神的公義而忽略祂的慈愛（導致恐懼和絕望）。他可能使我們把神想像成一個遙遠冷漠的審判者，而非一個近在咫尺的愛父。
                  </p>
                </div>
                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-1">歪曲救恩的確據</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    撒但試圖使信徒懷疑自己的得救——「你真的是基督徒嗎？你的信心是真實的嗎？看你這樣的生活，你真的得救了嗎？」他的目標是使信徒生活在不確定性中，缺乏能夠行動的信心。
                  </p>
                </div>
                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-1">引入神學錯誤</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    哥林多後書11:3說保羅擔心信徒「的心或偏於邪，失去那向基督所存純一清潔的心」。撒但透過虛假的教師、混合的教義、或將世俗智慧滲入教會，使信仰失去其純正。
                  </p>
                </div>
              </div>

              <div className="mt-4 bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">應對辦法</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• 建立對聖經全本的整體認識，使謊言一進入就能被識別</li>
                  <li>• 對新奇的「屬靈教導」保持辨別力，以聖經為最終標準</li>
                  <li>• 用神的話語主動更新思想（羅馬書12:2）</li>
                  <li>• 在一個有穩固神學基礎的教會群體中紮根</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">策略四：阻礙成聖</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                撒但的最終目標之一，是阻止信徒在基督的形象上成長——因為一個越來越像基督的信徒，對撒但的策略越來越有辨識力和抵抗力。吉爾平說：「撒但憎恨信徒的成聖，因為它是神形象在地上的恢復。」
              </p>
              <div className="space-y-3">
                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-1">製造屬靈的自滿</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    撒但說：「你已經做得足夠好了，你不需要再成長了。」啟示錄3:17老底嘉教會「說：我是富足，已經發了財，一樣都不缺」，卻不知道自己其實「是那困苦、可憐、貧窮、瞎眼、赤身的」——這是撒但製造屬靈自滿最成功的例子。
                  </p>
                </div>
                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-1">使人把屬靈事奉與成聖混淆</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    撒但使信徒忙於「做屬靈的事」（講道、服事、做見證），卻忽略了內心的成聖——靈命內在的更新與改變。結果是外表活躍但內心枯竭的「無花果樹」（馬可福音11:13）。
                  </p>
                </div>
                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-1">使人放棄對罪的爭戰</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    在長期爭戰一個慣性的罪之後，撒但試圖使人放棄：「你已經試過這麼多次，你改不了了，乾脆放棄吧。」他將靈命的疲乏轉化為對罪的接受，使人把「難以改變」變成「不需要改變」。
                  </p>
                </div>
              </div>

              <div className="mt-4 bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">應對辦法</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• 保持對自己靈命誠實的自我評估，不允許自滿（腓立比書3:12-14「向著標竿直跑」）</li>
                  <li>• 以基督的形象作為成聖的標準，而非與他人比較</li>
                  <li>• 記住成聖是神的工作，不只是自己的努力——倚靠聖靈（加拉太書5:16）</li>
                  <li>• 在跌倒後立即悔改並重新站起，不讓失敗成為放棄的理由</li>
                </ul>
              </div>
            </div>

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
          <div className="p-5 bg-white space-y-5">

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「屬靈操練」與「律法主義」的區分</h4>
              <p className="text-gray-700 leading-relaxed">
                有人可能質疑：強調讀經、禱告、成聖的紀律，是否會滑向律法主義——靠自己的努力「賺取」神的悅納？改革宗神學的回答是清晰的：屬靈操練（spiritual disciplines）和律法主義的本質區別在於動機和信靠的對象。律法主義靠自己的努力來取悅神或使神接納我；屬靈操練是信徒回應神已給予的恩典，在神的能力中成長。就像一個孩子學習語言不是為了「賺取」父母的愛，而是回應父母的愛並與他們更深地交通；基督徒讀經禱告不是為了「賺取」神的悅納，而是在已有的關係中成長和倚靠。達拉斯·威拉德（Dallas Willard）的洞見很有幫助：「恩典不是反對努力，恩典是反對賺取（Grace is not opposed to effort; grace is opposed to earning）。」紀律和努力的目標是開放我們的心，使聖靈能工作；紀律本身不能帶來成聖，但忽略紀律則關上了聖靈工作的管道。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「罪的滑坡」：連結性試探的心理機制</h4>
              <p className="text-gray-700 leading-relaxed">
                現代心理學對「罪的滑坡」（slippery slope of sin）的解釋，印證了清教徒的觀察。心理學研究顯示，每一次的道德妥協都會降低下一次妥協的門檻——這個機制被稱為「道德許可效應」（moral licensing）和「認知失調的合理化」。當一個人第一次說謊，他的道德標準受到挫傷；若他不處理這個失敗，下一次說謊就更容易；若繼續，謊言就成為習慣性的應對機制。這正是雅各書1:15所描述的：「私慾既懷了胎，就生出罪來；罪既長成，就生出死來」。應對罪的滑坡，不是在底部（罪已成習慣時）才干預，而是在頂部（第一個念頭出現時）就攔截。基督徒的成聖訓練，從某種意義上就是訓練在試探的早期階段就做出正確選擇的能力。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「屬靈的黑夜」：靈修枯燥是信心的試驗</h4>
              <p className="text-gray-700 leading-relaxed">
                十六世紀西班牙神秘主義者十字架的若望（John of the Cross）描述了「靈魂的黑夜」（Dark Night of the Soul）——一種靈修中深刻的乾枯和感覺上與神距離的時期。改革宗神學家雖然不完全接受其神秘主義框架，但承認信徒確實有靈命的低谷期——禱告毫無感覺，讀經枯燥，神似乎遠離。這種枯燥可能有幾種來源：撒但的攻擊（使靈修感覺徒勞）、神的試煉（建造在感覺以外的信心）、身體的疲乏（影響屬靈敏感性）、未認罪的罪（造成與神的隔閡）。清教徒提供的洞見是：在這種時期，紀律性的持守靈修（即使毫無感覺）本身就是信心的行動，是對「神的話是真實的，不依賴我的感受」的宣告。約伯在最深的苦難中說「他雖殺我，我仍信靠他」（約伯記13:15）——這是在感受死去時，信心仍然存活的樣本。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">成聖的「神聖—人道」合作：聖靈的工作與人的努力</h4>
              <p className="text-gray-700 leading-relaxed">
                腓立比書2:12-13提供了成聖神學的最佳概述：「你們要恐懼戰兢，做成你們得救的工夫；因為你們立志行事，都是神在你們心裡運行，為要成就他的美意。」這兩節經文同時說「你們要…做成」（人的努力）和「神在你們心裡運行」（神的工作）——兩者不是矛盾，而是合作。清教徒神學將此稱為「神聖的合作」（divine synergy）：神的恩典使我們有意願和能力，我們在那意願和能力中積極行動。這個神學平衡既避免了「一切靠神，人不需做什麼」的被動主義，也避免了「一切靠自己努力」的律法主義。成聖是神真實的工作，同時也需要信徒真實的努力——就像植物的生長需要陽光和雨水（神的恩典），但農夫也需要澆水和除草（人的努力）。撒但攻擊這個平衡的兩個方向：或使人依賴自己的努力而疲憊（律法主義），或使人依賴被動等待神的感動而懶散（被動主義）。
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
          <div className="p-5 bg-white space-y-4">
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">1.</span>
              <p className="text-gray-700">四大策略中，哪一個目前對你的屬靈生命影響最大——誘惑犯罪、攔阻靈修、歪曲真理，還是阻礙成聖？你有什麼具體的跡象讓你這樣判斷？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">策略二（攔阻靈修）——誠實評估：過去一個月你的讀經和禱告的質量和規律性如何？撒但是通過哪種方式最有效地打斷你的靈修（忙碌、枯燥感、分心或其他）？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">策略三（歪曲真理）——你對神的認識中，有哪些可能被撒但歪曲的地方？你對神的形象主要是父親、審判者、還是其他？這個形象是否符合聖經的全貌？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">策略四（阻礙成聖）——你是否在某些罪上已經「停止爭戰」，接受它為「自己改不了的」？什麼使你放棄爭戰？腓立比書2:12-13的應許（神在你裡面運行）如何重新點燃爭戰的動力？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">「屬靈自滿」（老底嘉教會）——你在靈命上是否有「我已經做得夠好了」的感覺？這種自滿是如何悄悄產生的？以基督的形象為標準，你看見自己哪方面仍然有很大的成長空間？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">完成了第三部分「認識撒但的策略」的兩章後，你認識了撒但的許多具體手段。這些認識讓你感到更加謹慎和警醒，還是感到沉重和疲憊？你如何在認識敵人的同時，仍然保持在基督裡的喜樂和平安？</p>
            </div>
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
          <div className="p-5 bg-white space-y-5">

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 針對四大策略的個人防禦計劃</h4>
              <p className="text-gray-700 mb-2">根據你的自我評估，為你最脆弱的策略領域制定具體的防禦計劃。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>選擇你認為目前受到最大攻擊的一個策略領域</li>
                <li>列出三個具體的防禦行動（例如：若是「攔阻靈修」→ 每天固定時間讀經、關閉手機通知、找靈修夥伴問責）</li>
                <li>為每個行動設定可衡量的具體指標（「每天早晨六點讀經30分鐘」比「多讀聖經」更具體）</li>
                <li>與一位肢體分享這個計劃，邀請對方問責</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 「罪的滑坡地圖」練習</h4>
              <p className="text-gray-700 mb-2">針對你一個慣性的罪，畫出它的「滑坡地圖」——從第一個念頭到最終行動的全過程。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>識別「觸發點」：什麼情境、情緒或念頭通常出現在罪之前？</li>
                <li>識別「妥協步驟」：你通常是如何一步步走向最終的行為？</li>
                <li>識別「最佳攔截點」：在哪個早期步驟，若你做出不同的選擇，就能打斷整個鏈條？</li>
                <li>在「最佳攔截點」設置具體的替代行動（如：若觸發點是「孤單時瀏覽不當網站」→ 孤單時立即給朋友發信息或打開一本書）</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🛡️ 重新點燃靈修渴慕的練習</h4>
              <p className="text-gray-700 mb-2">若你的靈修生活已變得枯燥，嘗試以下方法重新點燃渴慕。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>換一個讀經方式：若你習慣默讀，嘗試大聲朗讀；若你習慣讀完整章節，嘗試深讀一節並慢慢默想</li>
                <li>以詩篇禱告：選擇詩篇中的一首，用它的語言向神禱告，使禱告不再只是你自己的話</li>
                <li>在大自然中靈修：換一個靈修環境，讓神的創造激發你對創造主的渴慕</li>
                <li>閱讀一個信徒的靈命故事（如奥古斯丁的《懺悔錄》摘段），讓他人的真實靈命旅程激勵你</li>
                <li>給神寫一封信，誠實地說出你靈修的掙扎和渴望</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">✝️ 成聖的里程碑評估</h4>
              <p className="text-gray-700 mb-2">花時間誠實地評估你過去一年靈命成長的具體面向。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>與一年前相比，你在哪些具體的性情或行為上有明顯的成長？（愛心更多？耐心更強？更少憤怒？）</li>
                <li>哪些方面你感到幾乎沒有成長，甚至可能退步了？</li>
                <li>這種自我評估讓你感到什麼？（謙卑？感恩？憂愁？）</li>
                <li>根據這個評估，為接下來三個月設定一個具體的成聖目標（針對一個你希望在基督形象上成長的特定領域）</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-4 mt-2">
              <h4 className="font-semibold text-green-800 mb-2">🙏 禱告詞</h4>
              <p className="text-gray-700 leading-relaxed italic text-sm">
                「天父，謝謝祢在祢的話語中揭示了仇敵的策略，使我不至被他的計謀所愚弄。我承認，我在四個領域都有軟弱：有時被試探引入罪，有時讓靈修生活被忙碌擠走，有時接受了關於祢的謊言，有時停止了對成聖的追求。求聖靈更新我——不是靠我自己的努力，而是靠祢在我裡面運行的大能。讓我每天以戰士的眼光醒來，知道爭戰是真實的，但基督的得勝更加真實。奉得勝主的名，阿們。」
              </p>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
