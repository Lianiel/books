import React from 'react';
import { BookOpen, Star, MessageCircle, Lightbulb, Heart, Flame, Target, Users } from 'lucide-react';

export default function Book27Ch5() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-emerald-700 mb-2">第5課：現實世界中真實的你——炎熱篇（上）</h1>
      <p className="text-gray-500 text-sm">學員本 · 《人如何改變》保羅·區普</p>

      {/* 複習/作業討論 */}
      <section className="border-l-4 border-emerald-400 bg-emerald-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-emerald-600" />
          <h2 className="text-xl font-bold text-emerald-700">複習與作業討論</h2>
        </div>
        <div className="bg-white p-4 rounded border border-emerald-200 space-y-3 text-gray-700">
          <p><strong>複習：</strong>上一課我們學習了「神眼中的生活」和「改變的大圖畫」——炎熱→荊棘→十字架→果實。神使用生命中的「炎熱」作為祂改變我們的工具。今天我們要更深入地看：當「炎熱」臨到時，我們的真實反應是什麼？</p>
          <p><strong>作業討論：</strong>分享你本週閱讀作業的一個重要洞見。你有沒有發現自己生命中目前正面對的一個「炎熱」情境？你起初的反應是什麼？</p>
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
            <p>神刻意安排炎熱（困難、試煉、壓力）進入我們的生命，不是要懲罰我們，而是要揭露我們心中真實的狀態，並藉此將我們帶向祂。炎熱是神精心設計的屬靈處方，用來驅散我們的自滿，讓我們看見自己真正的需要。</p>
          </div>
          <div className="bg-white p-4 rounded border border-teal-200">
            <p className="font-bold text-teal-700 mb-1">個人應用（Personal）</p>
            <p>本週，當你面對生活中的困難時，試著停下來問：「神正在揭示我心中的什麼？」不要急著解決問題，先讓問題對你說話。</p>
          </div>
          <div className="bg-white p-4 rounded border border-teal-200">
            <p className="font-bold text-teal-700 mb-1">人際應用（Relational）</p>
            <p>想一想你生命中最令你困擾的一段關係。這段關係像一面鏡子，映照出你心中什麼樣的態度或反應模式？</p>
          </div>
        </div>
      </section>

      {/* 主要問題 */}
      <section className="text-center bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 p-8 rounded-xl">
        <Flame className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
        <h2 className="text-xl font-bold text-emerald-800 mb-3">本課主要問題</h2>
        <p className="text-2xl font-bold text-emerald-700 leading-relaxed">
          「當炎熱臨到你的生命時，<br />它揭示了你心中什麼樣的真實狀況？」
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
            <h3 className="font-bold text-cyan-700 mb-2">一、「炎熱」的定義與特性</h3>
            <p className="mb-2">「炎熱」（Heat）是指生命中各種使我們感到不舒服、受壓、失控的處境——可能是疾病、失業、婚姻衝突、孩子的問題、財務危機、或人際關係的破裂。這些「炎熱」的處境有幾個共同特性：</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong>超出我們掌控：</strong>炎熱通常發生在我們控制不了的領域，讓我們感到無力</li>
              <li><strong>讓我們暴露：</strong>炎熱使我們平時隱藏的態度和反應模式浮現出來</li>
              <li><strong>是試金石：</strong>我們在炎熱中的反應，反映了我們真正信靠的是什麼</li>
              <li><strong>是神的工具：</strong>神主權地使用炎熱，達成祂在我們生命中的目的</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-cyan-700 mb-2">二、詩篇88篇——最黑暗的哀歌</h3>
            <p className="mb-2">詩篇88篇是整本詩篇中最黑暗的一首詩，沒有任何讚美或轉機——它以黑暗開始，也以黑暗結束。這首詩的作者以斯拉罕（可拉的子孫）在極深的炎熱中吶喊：</p>
            <div className="bg-white p-4 rounded border border-cyan-200 italic text-sm">
              <p>「耶和華拯救我的神啊，我晝夜在你面前呼籲。願我的禱告達到你面前，求你側耳聽我的呼求。」（詩篇88篇1-2節）</p>
              <p className="mt-2">「你的忿怒重壓我身，你的驚濤，每時每刻淹沒我。……你使我所認識的離我遠遠而去，你使我在他們面前成了可憎惡的。我被關閉，不能出來。」（詩篇88篇7-8節）</p>
              <p className="mt-2">「耶和華啊，為何丟棄我的靈魂，為何掩面不顧我？……你的忿怒已經把我淹沒，你的驚嚇將我剪除……我所親愛的和我的朋友都因我的災病離我遠避，我所相識的也躲開我。」（詩篇88篇14-18節）</p>
            </div>
            <p className="mt-2">這首詩篇被收錄在聖經中，是因為它誠實地表達了我們在深度炎熱中的真實感受。神並不要求我們假裝一切都好。然而，即使在最黑暗的時刻，作者仍然向神呼求——這本身就是信心的表現。</p>
          </div>
          <div>
            <h3 className="font-bold text-cyan-700 mb-2">三、雅各書1章1-18節——試煉的目的</h3>
            <p className="mb-2">雅各書給了我們一個完全不同的角度來看待炎熱：</p>
            <div className="bg-white p-4 rounded border border-cyan-200 italic text-sm">
              <p>「我的弟兄們，你們落在百般試煉中，都要以為大喜樂；因為知道你們的信心經過試驗，就生忍耐。但忍耐也當成功，使你們成全、完備，毫無缺欠。」（雅各書1章2-4節）</p>
            </div>
            <p className="mt-2">注意幾個關鍵點：</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong>「百般試煉」：</strong>雅各不是說「如果你碰到試煉」，而是「當你落在試煉中」——試煉是生命中必然的部分</li>
              <li><strong>「以為大喜樂」：</strong>這不是虛假的快樂，而是因為看見試煉背後的目的而產生的深層喜樂</li>
              <li><strong>「信心的試驗」：</strong>炎熱的目的是測試並強化我們的信心，不是摧毀我們</li>
              <li><strong>「成全、完備」：</strong>神的最終目標是使我們完全，炎熱是達成這個目標的工具</li>
            </ul>
            <p className="mt-2">雅各書第1章繼續說：「人被試探，不可說『我是被神試探』，因為神不能被惡試探，他也不試探人。但各人被試探，乃是被自己的私慾牽引誘惑的。」（雅各書1章13-14節）——神使用外在的炎熱，卻不會引誘我們犯罪；問題在於我們內心的私慾如何回應炎熱。</p>
          </div>
          <div>
            <h3 className="font-bold text-cyan-700 mb-2">四、「炎熱揭示什麼」——8個自我診斷問題</h3>
            <p className="mb-2">當炎熱來臨時，它會揭示我們心中隱藏的東西。以下8個問題幫助我們做誠實的自我診斷：</p>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border border-cyan-200">
                <p><strong>1. 關於信靠：</strong>當這個困難來臨時，你真正信靠的是什麼？你的安全感建立在哪裡？你是信靠神，還是信靠自己的能力、別人的幫助、或環境的順利？</p>
              </div>
              <div className="bg-white p-3 rounded border border-cyan-200">
                <p><strong>2. 關於盼望：</strong>你的盼望放在哪裡？是放在問題的解決上，還是放在神的信實上？當情況沒有改善，你的盼望是否動搖？</p>
              </div>
              <div className="bg-white p-3 rounded border border-cyan-200">
                <p><strong>3. 關於身分：</strong>當你的角色、地位、或能力受到挑戰時，你是否感到存在的威脅？你的身分是建立在你的成就上，還是建立在基督裡？</p>
              </div>
              <div className="bg-white p-3 rounded border border-cyan-200">
                <p><strong>4. 關於控制：</strong>你是否拼命想要掌控局面？當情況超出你的控制時，你的反應是什麼？焦慮？憤怒？崩潰？</p>
              </div>
              <div className="bg-white p-3 rounded border border-cyan-200">
                <p><strong>5. 關於慾望：</strong>在這個困難中，你最渴望的是什麼？是逃脫痛苦？是恢復舒適？是讓別人認錯？還是更深地認識神？</p>
              </div>
              <div className="bg-white p-3 rounded border border-cyan-200">
                <p><strong>6. 關於關係：</strong>這個炎熱如何影響你的人際關係？你是否變得更孤僻、更易怒、更要求別人？還是更加倚賴群體？</p>
              </div>
              <div className="bg-white p-3 rounded border border-cyan-200">
                <p><strong>7. 關於神的觀念：</strong>這個困難如何影響你對神的看法？你是否開始懷疑神的良善？或者你更加認識神的主權和信實？</p>
              </div>
              <div className="bg-white p-3 rounded border border-cyan-200">
                <p><strong>8. 關於恩典：</strong>在這個困難中，你是否看見自己需要神的恩典？你是否因此更加謙卑地來到神面前，還是更加自力更生？</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 作業：深度研讀 */}
      <section className="border-l-4 border-green-400 bg-green-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <Heart className="w-6 h-6 text-green-600" />
          <h2 className="text-xl font-bold text-green-700">作業：詩篇88篇與雅各書的反思</h2>
        </div>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border border-green-200">
            <h3 className="font-bold text-green-700 mb-2">慢讀詩篇88篇</h3>
            <p className="text-gray-700 mb-2">細讀整篇詩篇88篇，並回答：</p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-gray-700">
              <li>這位詩人在哪些方面的炎熱最讓你感同身受？</li>
              <li>即使在黑暗中，他持續做的一件事是什麼？（注意：他不斷地向神說話）</li>
              <li>你是否曾有過類似的經歷——感覺神掩面不顧，卻仍繼續呼求？</li>
              <li>這首詩篇如何改變你對「誠實表達黑暗情感」的看法？</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded border border-green-200">
            <h3 className="font-bold text-green-700 mb-2">深度研讀雅各書1章1-18節</h3>
            <p className="text-gray-700 mb-2">仔細閱讀這段經文，並回答：</p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-gray-700">
              <li>雅各說的「大喜樂」是什麼意思？這和表面的快樂有什麼不同？</li>
              <li>「忍耐」（第3節）如何在試煉中得以發展？這個過程是什麼樣子的？</li>
              <li>第5節說：「你們中間若有缺少智慧的，應當求那厚賜與眾人、也不斥責人的神。」——在你目前的炎熱中，你最需要的智慧是什麼？</li>
              <li>第12節說：「忍受試探的人是有福的。」你如何理解這裡的「有福」？</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded border border-green-200">
            <h3 className="font-bold text-green-700 mb-2">個人炎熱清單</h3>
            <p className="text-gray-700 mb-2">誠實地列出你目前生命中的「炎熱」：</p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-gray-700">
              <li><strong>處境的炎熱：</strong>什麼樣的外在情況讓你感到壓力和困難？（如：工作、健康、財務）</li>
              <li><strong>關係的炎熱：</strong>哪段人際關係讓你感到消耗、挫折、或痛苦？</li>
              <li><strong>內心的炎熱：</strong>哪些內在掙扎（如：罪的誘惑、恐懼、疑惑）讓你感到疲憊？</li>
              <li>在這些炎熱中，你目前的主要回應模式是什麼？（逃避？憤怒？認命？信靠？）</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded border border-green-200">
            <h3 className="font-bold text-green-700 mb-2">「炎熱揭示的真相」</h3>
            <p className="text-gray-700 mb-2">選擇一個目前最大的炎熱，誠實地回答8個自我診斷問題中的3個，並分享：</p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-gray-700">
              <li>這個炎熱揭示了你心中哪些之前沒有意識到的東西？</li>
              <li>你對這些揭示的回應是什麼？（否認？感謝？求神幫助？）</li>
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
            '炎熱是神主權安排的工具，目的是揭露我們內心的真實狀態，並將我們帶向基督',
            '詩篇88篇告訴我們：在深度炎熱中誠實地向神呼求，本身就是信心的表現，神接受我們的黑暗禱告',
            '雅各書教導我們：試煉經過信心的試驗，生出忍耐，忍耐成功，使我們成全完備——這是神精心設計的成長路徑',
            '炎熱最重要的功能是「揭示」：它讓我們看見自己真正信靠的是什麼、盼望放在哪裡、和神的關係究竟有多深',
            '我們對炎熱的回應，比炎熱本身更能決定屬靈成長的方向——向神呼求是最重要的第一步',
            '神不是用炎熱來懲罰我們，而是用炎熱來完成祂在我們生命中的美好計畫（羅馬書8:28）',
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
          <h2 className="text-xl font-bold text-indigo-700">延伸反思與應用（CPR進階版）</h2>
        </div>
        <div className="space-y-3 text-gray-700">
          <div className="bg-white p-4 rounded border border-indigo-200">
            <p className="font-bold text-indigo-700 mb-2">深度反思：「你的炎熱在哪裡？」</p>
            <p>保羅·區普問了一個尖銳的問題：「如果我告訴你，生命中最大的問題不是你所面對的困難，而是你面對困難時內心的回應，你有什麼感受？」誠實地思考：你是否曾把自己所有的問題都歸咎於外在環境，而從未問過「這個困難在我心中揭示了什麼？」</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <p className="font-bold text-indigo-700 mb-2">行動挑戰：「炎熱日記」</p>
            <p>本週每天花5分鐘寫「炎熱日記」：記錄今天遇到的最大壓力或困難，然後誠實地問：「這個炎熱揭示了我心中什麼？」不要急著解決問題，先讓問題說話。週末回顧：你在這5天的記錄中，看到哪些重複出現的模式？</p>
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
            { label: 'a. 每遇困難先暫停', desc: '當炎熱來臨時，在反應之前先暫停30秒，默默問：「神，你要藉此告訴我什麼？」' },
            { label: 'b. 誠實的禱告', desc: '學習詩篇88篇，向神誠實表達你在炎熱中的感受，不用假裝平靜或屬靈' },
            { label: 'c. 尋求群體支持', desc: '找一位信任的弟兄姐妹，分享你目前的炎熱，並請他們與你同行禱告' },
            { label: 'd. 閱讀雅各書1章', desc: '本週每天早晨重讀雅各書1章1-18節，讓這些話語更新你對炎熱的看法' },
            { label: 'e. 辨識信靠的對象', desc: '在今天的困難中，誠實問自己：「我實際上在信靠什麼？」把答案寫下來' },
            { label: 'f. 記住神的大圖畫', desc: '在最困難的時刻，提醒自己：神的目標是讓你像基督，這個炎熱是服務這個目標的' },
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
