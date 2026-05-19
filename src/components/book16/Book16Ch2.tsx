import React from 'react';
import { BookOpen, Search, HelpCircle, Check } from 'lucide-react';

export default function Book16Ch2() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">第一章</h1>
        <h2 className="text-xl font-semibold text-gray-700">一階：靈修方法初階</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-violet-100 rounded-lg overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-violet-50 to-purple-50 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-violet-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">主要內容</span>
        </div>
        <div className="p-5 bg-white space-y-4">
          <p className="text-gray-700 leading-relaxed bg-violet-50 rounded-lg p-4 border-l-4 border-violet-400">
            在今天這個「忙碌」的時代，尋求內心的安靜和靈修更顯得必要。如果我們不能在上帝面前安靜下來，在靈修中讓自己站立得穩，得到前行的力量，我們就無可避免地被這個忙碌的世界裹挾，陷入身不由己的焦躁之中。
          </p>

          <h3 className="font-bold text-gray-900 text-lg">一、靈修的意義——為何需要靈修？</h3>
          <p className="text-gray-700 leading-relaxed">
            當一個人接受耶穌基督作為自己的救主時，他就擁有了永生，成為上帝的兒女，有了來自上帝的新身份（約一5:11-12，約1:12）。這個新生命是永生的生命，不是說我們離開這個世界後才得到，而是在重生的那一刻，裡面就已得到這新生命。
          </p>
          <p className="text-gray-700 leading-relaxed">
            信仰基督之後，我們展開以基督為中心的生活。這種生活的特徵，就是我們要跟主耶穌保持親密的關係，時時以他的同在作為最大的滿足。正如手機電池需要及時充電，否則就會「自動關機」，我們也需要天天及時與主相交，才能應付忙碌的生活與事務。
          </p>
          <div className="space-y-3">
            <div className="bg-violet-50 rounded-lg p-4">
              <h4 className="font-semibold text-violet-800 mb-2">上帝要向我們顯現自己</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                在《詩篇》27:8，大衛聽到上帝說「你們當尋求我的面」，他的回應是：「耶和華啊，你的面我正要尋求。」《約翰福音》14:21也說：「有了我的命令又遵守的，這人就是愛我的；愛我的必蒙我父愛他，我也要愛他，並且要向他顯現。」上帝樂意並希望見到他的兒女，他用自己的話語來邀請、呼召，甚至命令他的兒女天天與他相見。
              </p>
            </div>
            <div className="bg-violet-50 rounded-lg p-4">
              <h4 className="font-semibold text-violet-800 mb-2">生命的成長需要與上帝相連接</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                《約翰福音》15:5：「我是葡萄樹，你們是枝子；常在我裡面的，我也常在他裡面，這人就多結果子；因為離了我，你們就不能作什麼。」奧古斯丁說：「你造我們是為了你自己，我們的心若不在你的裡面就不會得著安息。」在夜更的時候思想他，我們的心就像飽足了骨髓肥油（詩63:5），上帝的話語在我們的心中「比蜜甘甜，且比蜂房下滴的蜜甘甜」（詩19:10）。
              </p>
            </div>
          </div>

          <h3 className="font-bold text-gray-900 text-lg mt-4">二、靈修的方法</h3>
          <p className="text-gray-700 leading-relaxed">
            靈修的核心要素是從自己的心思意念，進入在靈裡與上帝的相交之中。靈修有兩方面的要素：聆聽上帝向我們說話，以及向上帝傾心吐意——這是一個雙向互動的過程。
          </p>

          <div className="space-y-4">
            <div className="border border-violet-200 rounded-lg overflow-hidden">
              <div className="px-4 py-2 bg-violet-100 font-semibold text-violet-800">安靜的方法</div>
              <div className="p-4 space-y-3">
                <p className="text-gray-700 text-sm leading-relaxed">
                  操練內室裡的靈修，首要環節是花時間預備好心，讓心靈安靜下來。「安靜」的意思是能夠放下其他事情，專注於當下準備要默想的經文；「放下」更深層的意思就是「舍己」。
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  當人嘗試安靜時，就會發現自己很難安靜下來。作者用兩個比喻說明：一是裹挾的意識流——平時想不起來的事，現在都湧現出來，宛如一道鎖鏈將靈魂淹沒，讓其沒有喘息的空間；二是閉眼時出現的模糊景象，如冰河上相互碰撞的冰塊，阻止人進入心靈深處。
                </p>
                <p className="text-gray-700 text-sm leading-relaxed font-medium">
                  具體安靜的方法：
                </p>
                <ul className="text-gray-700 text-sm space-y-1 ml-4 list-disc">
                  <li>發自內心的預備禱告：感謝上帝賜給新的一天，求聖靈感動開啟，讓心靈安靜</li>
                  <li>唱一首能背唱的短詩歌：讓心靈沉浸其中，被帶到上帝面前</li>
                  <li>若想起某件要處理的事，記在筆記本上，放到禱告中，暫時放下</li>
                </ul>
              </div>
            </div>

            <div className="border border-violet-200 rounded-lg overflow-hidden">
              <div className="px-4 py-2 bg-violet-100 font-semibold text-violet-800">默想的方法——靈修默想式讀經</div>
              <div className="p-4 space-y-3">
                <p className="text-gray-700 text-sm leading-relaxed">
                  靈修時的默想不是「打坐」或排除意念，也不是空洞的冥想。靈修默想式讀經既有別於每日通讀聖經，也不同於小組式查經——它的特點是邊慢讀邊默想，不在於讀多少，也不需要查考歷史背景或語法結構，而是側重對話語的思考。
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>默想的關鍵：</strong>找到感動你的那節經文，或某個關鍵字詞，就如一道門的縫隙——不注意的話一下就過去了，但借著默想把這道門的縫隙逐步推開，就能走進經文的上下文脈絡，看到聖經展現出的奇妙世界，「就如C.S.路易士筆下的那個納尼亞王國一樣」。
                </p>
                <p className="text-gray-700 text-sm leading-relaxed font-medium">
                  默想話語的五個方向：
                </p>
                <ul className="text-gray-700 text-sm space-y-1 ml-4 list-disc">
                  <li>有什麼罪是上帝今天要提醒我的？</li>
                  <li>有什麼應許是我應當抓住的？</li>
                  <li>有什麼榜樣我可以效法？</li>
                  <li>有什麼命令我需要遵守？</li>
                  <li>上帝讓我對他有怎樣的新認識？</li>
                </ul>
                <p className="text-gray-700 text-sm leading-relaxed">
                  上帝真的瞭解每個人每天的需要。所以在讀經默想時，可以帶著這樣的期待：今天，上帝要借著這段經文向我說話，向我當下的處境和問題說話。「我坐下，我起來，你都曉得，你從遠處知道我的意念」（詩139:2-3）。
                </p>
              </div>
            </div>

            <div className="border border-violet-200 rounded-lg overflow-hidden">
              <div className="px-4 py-2 bg-violet-100 font-semibold text-violet-800">對禱的方法（回應禱告）</div>
              <div className="p-4 space-y-2">
                <p className="text-gray-700 text-sm leading-relaxed">
                  「對禱」強調針對默想上帝話語所帶給我們內心的感動，從而作出回應。如果默想是上帝向我們說話，那麼回應禱告就是我們向上帝說話。回應禱告主要圍繞著你默想的經文，按照你默想時領受到的內容向上帝禱告——或認罪、或讚美、或感恩、或立志。
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>重要原則：</strong>我們的心意要先在傾聽與默想上帝的話語中有一個回轉（悔改），使我們能夠從自我中心走出來。若我們在默想中真實地經歷心意的調轉，上帝的話通常會成為我們生命和行動的激勵，直接在生活與行為中落實。
                </p>
              </div>
            </div>

            <div className="border border-violet-200 rounded-lg overflow-hidden">
              <div className="px-4 py-2 bg-violet-100 font-semibold text-violet-800">寫靈修筆記</div>
              <div className="p-4 space-y-2">
                <p className="text-gray-700 text-sm leading-relaxed">
                  靈修筆記總結靈修時所得到的感受，既包括你默想上帝話語的感受，亦包括你對上帝的回應禱告。具體內容包括：今天感動你的那節經文（金句）、你對經文的領會及應用。
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>寫筆記的價值：</strong>把可能很模糊的感受，以明晰的方式表達出來，讓默想和回應進入更深的層次。有些領受，在仍未記下來的時候還未透徹，只有在書寫時才會發現更豐富的領受。<strong>應用方面應盡量具體</strong>——「我決定今天聯繫那個得罪我的人，盡快與他和好」，而非模糊的「我要更愛人」。
                </p>
              </div>
            </div>
          </div>

          <h3 className="font-bold text-gray-900 text-lg mt-4">三、內室的靈修過程</h3>
          <p className="text-gray-700 leading-relaxed">
            操練靈修前，需要預備好三個條件：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="font-bold text-purple-800 mb-1">每天固定的靈修時間</div>
              <div className="text-sm text-purple-700">建議早晨，讓一天的開始獻給上帝。若需要，可比平時早起三十分鐘（相應早睡三十分鐘）。靈修時間應成為一天作息的「基石」。</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="font-bold text-purple-800 mb-1">固定的靈修地點</div>
              <div className="text-sm text-purple-700">你的「會幕」——一個不受打擾的空間，讓你能安靜面對上帝。熟悉的環境有助於儘快安靜下來進入靈修狀態。</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="font-bold text-purple-800 mb-1">靈修用的聖經</div>
              <div className="text-sm text-purple-700">建議不用有注釋的研讀本聖經，也不用畫了太多記號的聖經——上帝的話語「每早晨都是新的」，靈修需要新鮮的領受。</div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mt-4">
            每天靈修的過程（建議20-30分鐘）：
          </p>
          <div className="space-y-2">
            {[
              { step: '1', title: '預備你的心（3～5分鐘）', desc: '用安靜的禱告或詩歌，告訴上帝你願意來到他面前，求聖靈安靜你的心，開啟你對話語的思想與回應。' },
              { step: '2', title: '默想（10～15分鐘）', desc: '翻開聖經，按卷逐章逐節慢讀。注意感動你的那節經文，集中默想，可帶著五個方向的問題思考。' },
              { step: '3', title: '回應禱告及寫靈修筆記（5～10分鐘）', desc: '以禱告回應默想所得的感動——認罪、讚美、感恩、立志。寫下今天的金句、感受和具體應用行動。' },
            ].map(item => (
              <div key={item.step} className="flex gap-3 items-start">
                <span className="bg-violet-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">{item.step}</span>
                <div>
                  <span className="font-semibold text-gray-800">{item.title}</span>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="font-bold text-gray-900 text-lg mt-4">四、靈修習慣的操練</h3>
          <p className="text-gray-700 leading-relaxed">
            操練靈修最大的困難，就是如何讓靈修成為日常生活的基本部分。要養成靈修的習慣，可能需要兩三年時間。引導你操練靈修的真正老師是聖靈——靈修不單挑戰你是否願意順服，更挑戰你是否願意開始，並願意一直堅持。
          </p>
          <p className="text-gray-700 leading-relaxed">
            堅持靈修本身就是一場屬靈爭戰：魔鬼會設立各種障礙使你放棄與上帝見面。從開始靈修到讓它成為生活中必不可少的習慣，可能要歷時好幾年。屬靈生命與生活方式的改變是相對應的，而後者首先體現在日常作息時間的改變上——若生活方式沒有改變，就很難說屬靈的生命有改變。
          </p>
          <div className="bg-violet-50 rounded-lg p-4 mt-2">
            <p className="text-gray-700 text-sm font-semibold mb-2">初學靈修的常見問題：</p>
            <ul className="text-gray-700 text-sm space-y-2">
              <li><strong>難以全神貫注：</strong>找安靜不受幹擾的地方，洗漱後做些深呼吸，開聲讀經和禱告，想起要做的事先記下再放下。</li>
              <li><strong>感覺沒有收穫：</strong>不要關注收穫的多少，享受與上帝相交的安靜和向他傾訴的釋放。相信以渴慕的心堅持，這種狀態不會持續太長時間。</li>
              <li><strong>想用其他靈修資料代替聖經：</strong>靈修書籍只是他人的靈修心得，沒有任何靈修書能代替聖經。</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 延伸探討 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 flex items-center gap-2">
          <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">延伸探討</span>
        </div>
        <div className="p-5 bg-white space-y-5">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">靈修默想與查經的本質區別</h4>
            <p className="text-gray-700 leading-relaxed">
              許多人把靈修和查經混淆。查經強調知識的獲取——理解文法結構、歷史背景、神學意涵；而靈修默想的目的是在上帝面前安靜，讓話語在心靈中產生迴響，強調與上帝的相交。作者提醒：靈修時不要用有注釋的研讀本聖經，因為注釋會把注意力引導到歷史知識上，反而偏離了自己對上帝話語的思考默想。兩者都重要，但靈修更注重「心靈與主的相遇」。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">靈修是一場屬靈爭戰</h4>
            <p className="text-gray-700 leading-relaxed">
              作者指出，靈修的困難不只是時間管理的問題，而是屬靈爭戰的問題。舊有的習慣、世俗的拉力、老我的抵制，都使人難以持守靈修。特別是信徒「經歷了開始靈修的一段甜蜜期後，可能會有所懈怠，靈修顯得好像不再帶來那麼多收穫；工作、生活似乎又有很多事務讓你無法靈修」。這不是方法問題，而是心志問題——魔鬼善於在靈修的事上設立障礙。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">摩西的「會幕」和耶穌的「曠野」</h4>
            <p className="text-gray-700 leading-relaxed">
              《馬可福音》記載耶穌「次日早晨，天未亮的時候，起來到曠野地方去，在那裡禱告」（可1:35）。摩西「素常將帳棚支搭在營外……耶和華與摩西面對面說話，好像人與朋友說話一般」（出33:7-11）。這兩個聖經榜樣說明：不只是「最忙的人」（耶穌）也需要固定的靈修時間和地點，而且這種習慣是帶領他們完成使命的力量來源。你的靈修「會幕」在哪裡？
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">一個具體的靈修範例：約翰福音1:1-5</h4>
            <p className="text-gray-700 leading-relaxed">
              書中給出了一個完整的靈修示例。以《約翰福音》1:1-5為例，逐節慢讀——「太初有道，道與上帝同在，道就是上帝」（1-2節），默想後禱告：「主啊，我知道你是永恆的上帝，超越時間……」；「萬物是借著他造的」（3節），默想後禱告：「主啊，從浩瀚的宇宙到微小的DNA都是你美妙的設計……」這種逐節默想-禱告的交替進行，正是「對禱」的實際操作。
            </p>
          </div>
        </div>
      </div>

      {/* 反思問題 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">反思問題</span>
        </div>
        <div className="p-5 bg-white space-y-3">
          {[
            '你目前有規律的靈修習慣嗎？如果有，是什麼幫助你建立並維持它？如果沒有，你覺得最大的阻礙是什麼？',
            '「靈修默想式讀經」和你平時讀聖經的方式有什麼不同？哪個方式讓你覺得與上帝更親近？',
            '在靈修時，你最難克服的困難是什麼（思緒飄散、難以安靜、感覺沒有收穫……）？',
            '默想聖經話語的五個方向中，哪一個是你最容易忽略的？那個方向為何對你特別困難？',
            '你有寫靈修筆記的習慣嗎？你覺得把靈修感受寫下來對你有什麼幫助？',
            '作者說靈修時間應成為一天二十四小時作息的「基石或參考點」。這個原則對你的時間安排有什麼挑戰？',
            '「引導你操練靈修的真正老師是聖靈」——這句話對你來說意味著什麼？這如何改變你看待靈修困難的方式？',
          ].map((q, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">{i + 1}.</span>
              <p className="text-gray-700">{q}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 具體實踐方針 */}
      <div className="mb-6 border border-green-100 rounded-lg overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 flex items-center gap-2">
          <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">具體實踐方針</span>
        </div>
        <div className="p-5 bg-white space-y-4">
          <div>
            <h4 className="font-semibold text-green-700 mb-2">📅 建立你的靈修三要素</h4>
            <p className="text-gray-700 mb-2">這週做一個決定，確定你的靈修三個條件：</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
              <li>選一個固定的時間（早晨？睡前？——建議早晨）</li>
              <li>選一個固定的地點（書房？陽臺？——你的「會幕」）</li>
              <li>準備好你的聖經（不帶太多注釋的版本）和一本靈修筆記本</li>
              <li>如果選早晨，今晚就把鬧鐘調早三十分鐘</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">📖 三十天靈修計畫——《約翰福音》</h4>
            <p className="text-gray-700 mb-2">書中建議初學者從新約開始，按照三步驟（預備心→默想→回應禱告）操練。這週先從《約翰福音》1:1-18開始，每天選3-5節，用15-20分鐘進行靈修式默想。</p>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">✍️ 開始你的靈修筆記</h4>
            <p className="text-gray-700 mb-2">每天靈修後，在筆記本上寫下：①日期和經文範圍 ②今天最感動你的一節（金句）③你從中得到的感受或提醒 ④一個具體可行的應用行動（可操作、可驗證）</p>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">🎵 收集幾首能背唱的短詩歌</h4>
            <p className="text-gray-700 mb-2">這週有意識地挑選2-3首短小、曾感動過你的詩歌，嘗試把它們背唱下來。在靈修開始時，可以用這些詩歌幫助你安靜下來、預備你的心。</p>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">🙏 靈修前的預備禱告</h4>
            <p className="text-gray-700 italic border-l-4 border-green-300 pl-4">
              「主啊，感謝你賜給我新的一天。我把這一天放在你的手上，特別把這一天的開始放在你的手上。我願意來到你的面前與你相交，求你幫助我、安靜我的心。求你在下面的時間，讓我能夠聚精會神地讀你的話語，並帶領我思想你的話。求你用你的話語來感動我，並引導我向你傾訴和禱告。我渴望多認識你，明白你的心意。奉耶穌基督的名求。阿們。」
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
