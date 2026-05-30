import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Target, Search, HelpCircle, Check } from 'lucide-react';

export default function Book18Ch8() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">第八章</h1>
        <h2 className="text-xl font-semibold text-gray-700">主動發起進攻</h2>
        <p className="text-sm text-gray-500 mt-2">以弗所書6：17下-18</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">
            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">屬靈的黑手黨</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                2002年1月，作者在東歐做了救恩論講座之後回到公寓時，遭到了兩個人的襲擊，他們把他打倒在地，捆住他並塞上了他的嘴，用一把刀在他的背後上下摩擦，一直在喊「黑手黨，黑手黨！」在那45分鐘的嚴酷考驗裡，上帝恩慈地搭救了他。
              </p>
              <p className="text-gray-700 leading-relaxed">
                然而，黑手黨並不總是這麼明目張膽地公開挑釁。更多時候，他們像撒但一樣，總是利用偽裝的組織行事。撒但屬靈的黑手黨控制著民眾和國家——有時公開地行事，但更多時候是以偽裝的方式達到目的。我們需要智慧和力量，不僅保護自己免受他的攻擊，而且要主動尋找他，靠著上帝的力量攻擊他。保羅在《以弗所書》第6章17至18節中為我們指出了三件很有威力的進攻武器。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">1. 聖靈的寶劍——上帝的道</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖靈的寶劍，就是上帝的道（弗6：17下），是與撒但爭戰中所使用的一件獨特的軍事裝備，因為它不僅能夠攻擊敵人，而且能夠擊退敵人。上帝的道大有能力，上帝把它用作兩刃的劍（來4：12）。聖靈「默示」了上帝的道，並使我們能夠明白並使用這道。
              </p>
              <div className="ml-4 space-y-4 mb-3">
                <div className="border-l-4 border-red-300 pl-4">
                  <p className="font-semibold text-gray-800 mb-1">（1）聖道是抵擋撒但的防衛裝備</p>
                  <p className="text-gray-700 leading-relaxed">耶穌在曠野裡用「經上記著說」來回答撒但的每一個誘惑（太4：1-11）。他從聖經上引用的話像鋼刀一樣插進撒但心臟。我們也應當這樣回擊撒但。撒但不能打敗憑著信心使用聖經應許的信徒。當撒但說：「有一天你將會落入我的手中」，信心舉起聖道寶劍說：「我深信那在我心裡動了善工的，必成全這工，直到耶穌基督的日子」（腓1：6）。加爾文寫道：「戰勝撒但的惟一辦法，是完全持守上帝的聖道。」</p>
                </div>
                <div className="border-l-4 border-red-300 pl-4">
                  <p className="font-semibold text-gray-800 mb-1">（2）聖道是攻擊撒但的武器</p>
                  <p className="text-gray-700 leading-relaxed">聖靈的寶劍，就是上帝的道，給了我們清晰的指導、大能的動機、豐富的鼓勵和有益的榜樣，為我們提供了精良的裝備，使我們能夠勇敢而冷靜地面對撒但。要通過每日學習和背誦聖經，使自己非常熟悉聖經。藉著恒切的禱告使寶劍時刻準備好投入戰鬥。大膽地說話，勇敢地為聖經真理作見證。把上帝的聖道之光帶到黑暗的世界，在每個黑暗的角落發光。</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                班揚在《天路歷程》中生動描述了基督徒在屈辱穀中的經歷：「但是，仿佛出於天意，正當魔王要給他最後的一擊時，基督徒敏捷地伸手抓起他的利劍，一面說：『我的仇敵啊，不要向我誇耀；我雖跌倒，卻要起來。』說著他向對方狠狠地刺了一下，魔王像一個受到致命創傷的人那樣往後倒退。基督徒接著再刺一下，說：『然而靠著愛我們的主，在這一切的事上，已經得勝有餘了。』正說著的時候，魔王倏地展開他的翅膀，逃之夭夭，基督徒再也看不見他了。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">2. 靠著聖靈禱告</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「靠著聖靈隨時多方禱告祈求」（弗6：18上）。禱告是第二件主動攻擊撒但的武器。馬丁·路德說：「禱告是教會堅固的圍牆和堡壘，是敬虔基督徒的武器。」約翰·班揚說：「上帝寶庫中最強大的武器就是禱告。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                禱告是非常關鍵的，因為離開禱告，基督徒其他軍事裝備都毫無用處。禱告就像油一樣。沒有油，發動機各個部件都毫無用處；沒有禱告，基督徒戰鬥中所使用的各種裝備也都徒然無益。關於藉著禱告抵擋撒但，保羅告訴我們要做到以下幾點：
              </p>
              <div className="ml-4 space-y-4">
                <div className="border-l-4 border-indigo-300 pl-4">
                  <p className="font-semibold text-gray-800 mb-1">（1）隨時禱告</p>
                  <p className="text-gray-700 leading-relaxed">幾個世紀以前，一個牧師問一個年輕的使女是否知道「不住禱告」（帖前5：17）的含義。使女回答說：「我早上起床的時候，禱告祈求公義的太陽今天帶著醫治的翅膀在我頭上升起。我穿衣服的時候，禱告祈求自己可以披上基督的公義……先生，我每天都這樣不住地禱告，因為禱告是我的呼吸，我的生命。」不住的禱告是指既要有定時性的禱告，也要在一天中隨時向上帝發出簡短的祈求。</p>
                </div>
                <div className="border-l-4 border-indigo-300 pl-4">
                  <p className="font-semibold text-gray-800 mb-1">（2）懇切的禱告祈求</p>
                  <p className="text-gray-700 leading-relaxed">保羅是在說：「由衷地禱告，帶著祈求禱告。懇切地禱告。」不幸的是，我們經常沒能成功地使用禱告這件武器，撒但可以在我們空洞的禱告旁邊打瞌睡。撒母耳·魯瑟福說，禱告時心靈的狀態比我們所說的話更重要。他寫道：「啞巴乞丐比會說話的乞丐得到的施捨更多。眼淚有舌頭、語法和語言，這些在上帝面前比話語更有意義。」</p>
                </div>
                <div className="border-l-4 border-indigo-300 pl-4">
                  <p className="font-semibold text-gray-800 mb-1">（3）多方禱告</p>
                  <p className="text-gray-700 leading-relaxed">這是指把你的一切需要帶到上帝面前，無論大小。就像瑪麗·溫斯洛告訴她兒子的：「把你的一切都告訴上帝，仿佛他對你一無所知一樣，但心裡卻要明白他無所不知。」如果你想在大大小小的事情上都打敗撒但，就要把你自己和你的一切需要都交托在上帝全備的手中。</p>
                </div>
                <div className="border-l-4 border-indigo-300 pl-4">
                  <p className="font-semibold text-gray-800 mb-1">（4）靠著聖靈禱告</p>
                  <p className="text-gray-700 leading-relaxed">《羅馬書》第8章26節說，聖靈幫助我們的軟弱，親自用說不出來的歎息替我們禱告。就像父親手把手教兒子駕船一樣，聖靈在我們禱告中抓住我們的心，帶領我們的心思意念，幫助我們行駛在他為我們制定的航海路線上。沒有聖靈的幫助，我們不能正確地禱告。讓我們信靠聖靈，追求被聖靈充滿（弗5：18）。</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">3. 警醒不倦</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「並要在此警醒不倦，為眾聖徒祈求」（弗6：18下）。真正的戰士必須在自己的崗位上保持警醒；他必須時刻警惕，小心提防。同樣，基督的精兵也必須警醒禱告，抵擋撒但的攻擊。保羅把禱告和警醒聯繫在一起，因為這二者的確是密不可分的。耶穌說：「警醒禱告」（太26：41）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                魔鬼喜歡攻擊昏昏欲睡的基督徒。愚拙的童女錯過了迎接新郎的機會，因為她們的燈裡沒有油了。在《天路歷程》中，班揚的基督徒在睡著時丟失了象徵信心確據的那本小冊子。我們只有警醒禱告才能打敗撒但，為此我們必須做到以下幾點：
              </p>
              <div className="ml-4 space-y-3">
                <div className="flex gap-3">
                  <span className="text-red-600 font-bold flex-shrink-0">（1）</span>
                  <p className="text-gray-700">保持警醒——清楚地知道自己心裡在想什麼以及我們家人、教會、國家的需要。</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-red-600 font-bold flex-shrink-0">（2）</span>
                  <p className="text-gray-700">為別人代禱——應當為牧師和福音的進展禱告，並「為眾聖徒祈求」（18節）。T.J.巴赫說，我們當中的很多人的腳不能親自踏入宣道領域，但我們可以藉著跪下禱告到達那裡。</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-red-600 font-bold flex-shrink-0">（3）</span>
                  <p className="text-gray-700">堅忍——「不懈地追求，直到你得到了你的獵物」。要堅持一直敲上帝的恩典之門。要像班揚《天路歷程》中的那位憐憫那樣，堅持敲門到暈倒的那一刻，直到上帝回應了她。</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-red-600 font-bold flex-shrink-0">（4）</span>
                  <p className="text-gray-700">凡事謹慎——E.M.邦茲寫道：「我們不僅要在看到他的行動、懼怕他的存在時保持高度警醒，而且還要在看不見他時保持高度警醒，無論他以任何偽裝或掩飾出現，都毫不留情地擊退他。」</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">4. 為耶穌而爭戰</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                撒母耳·魯瑟福說：「撒但只是上帝用來教導我們如何使用武器的高超的擊劍者。」司提反·查諾克寫道，當魔鬼「想要成為你的毀滅者」時，上帝使魔鬼成為你的「磨練者」。上帝應許要在兇惡的日子裡幫助你，並確保你會取得最後的勝利。你在勝利的一方，最終，如威廉·格諾爾所寫的：「上帝讓魔鬼作繭自縛。」
              </p>
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed italic">
                  「爭戰，為耶穌爭戰，惟獨靠他的力量爭戰。屬血氣的軍裝只能帶給你失敗，你不要依靠自己的力量。穿戴福音的軍裝，藉著禱告披戴整齊。那裡有天召，那裡有危險，但那裡必不致缺乏。」
                </p>
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
              <h4 className="font-semibold text-gray-800 mb-2">寶劍作為唯一「雙向武器」的意義</h4>
              <p className="text-gray-700 leading-relaxed">
                在全副軍裝的八件裝備中，前七件都是防禦性的，只有聖靈的寶劍（上帝的道）和禱告具有攻擊性。值得注意的是，寶劍是唯一可以「兩刃」同時作用的武器——既能防守又能進攻。這說明聖道不只是讓我們被動承受撒但的攻擊，更是主動出擊、奪回失地的力量。傳福音本身就是一種屬靈進攻行動——把人從撒但的管轄下帶到基督的國度。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">禱告作為「油」的比喻</h4>
              <p className="text-gray-700 leading-relaxed">
                作者說禱告如油——沒有它，所有其他裝備都失靈。這比喻有多重意義：（1）油是潤滑劑，使機器各部件協調運作——沒有禱告，聖言的操練、信心的堅守、盼望的仰望都會變得乾澀、僵硬；（2）油是能量來源——禱告是信徒與力量之源（上帝）連結的管道；（3）油無法積存使用——我們無法提前儲備禱告，而是需要每日持續的連結。班揚的觀察深刻：「在禱告之後，你不僅僅可以禱告；但在禱告之前，你只能禱告。」
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">班揚《天路歷程》中屈辱穀之戰的神學意義</h4>
              <p className="text-gray-700 leading-relaxed">
                基督徒在屈辱穀中與魔王亞玻倫的激戰，是基督教文學中最生動的屬靈爭戰描繪。特別值得注意的是：基督徒幾乎被打倒，但當他「敏捷地伸手抓起他的利劍」時，局勢立刻扭轉。這說明屬靈爭戰不是被動的靈修，而是主動的、積極的抵抗。他使用的聖經話語（「我雖跌倒，卻要起來」來自彌7：8；「得勝有餘」來自羅8：37）是精準的屬靈武器，而非一般性的安慰話語。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">代禱作為反抗撒但的行動</h4>
              <p className="text-gray-700 leading-relaxed">
                作者特別強調「為眾聖徒祈求」是警醒不倦的一部分。代禱不只是個人靈修，更是屬靈爭戰的策略。當信徒為別人代禱時，他直接對抗了撒但「使人孤立和自私」的目標。撒但希望每個信徒只關心自己的掙扎，而代禱打破了這種孤立，在整個教會建立了互相守護的屬靈防線。E.M.邦茲的著作《禱告的能力》（Power Through Prayer）專門論述這一主題，是代禱神學的經典。
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
              <p className="text-gray-700">耶穌用聖經話語回應撒但的每一個試探。你有沒有在被試探時，具體地使用聖經話語來抵擋？效果如何？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">作者說「禱告是油，沒有它，其他裝備都失靈。」在你的生命中，禱告生活的品質如何影響了你整體的屬靈爭戰能力？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">那位使女說「禱告是我的呼吸，我的生命」。禱告對你來說是「呼吸」（自然、持續、無需刻意）還是「特殊活動」（有意識地安排）？你希望禱告成為什麼？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">魯瑟福說「心靈的狀態比我們所說的話更重要」。你在禱告時，心靈通常是什麼狀態？你如何在禱告前讓自己的心靈進入真誠的狀態？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">魔鬼喜歡攻擊昏昏欲睡的基督徒。你認為你的屬靈警醒程度如何？哪些習慣或模式讓你容易「屬靈睡著」？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">撒母耳·魯瑟福說「撒但只是上帝用來教導我們如何使用武器的高超的擊劍者。」你能否從自己的屬靈爭戰經歷中，舉出一個試探或攻擊反而幫助你在信仰上成長的例子？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">📖 建立「聖道武器庫」</h4>
              <p className="text-gray-700 mb-2">針對你最常遭受的試探，建立專屬的聖經應對庫：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>選出3-5個最常困擾你的試探類型</li>
                <li>為每個試探找出1-2節聖經話語（最好背誦）</li>
                <li>把這些「聖道劍法」寫在小卡片上，隨身攜帶</li>
                <li>每次遭受那個試探時，大聲（或心裡）說出那節經文</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 升級你的禱告生活</h4>
              <p className="text-gray-700 mb-2">選擇以下一項具體改變，在接下來兩週堅持：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>每天增加15分鐘的「懇切禱告」時間（不只是例行的），為具體的事情代禱</li>
                <li>建立「隨時禱告」習慣：每次換場合（如進辦公室、上車、吃飯前）發出簡短的祈求</li>
                <li>每週為一個非信徒的朋友或家人每天代禱，為他/她的屬靈眼睛被開啟</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">⏰ 培養警醒的日常操練</h4>
              <p className="text-gray-700 mb-2">為自己建立一個每日「屬靈警醒清單」，每晚回顧：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>今天我有沒有感到靈命「昏昏欲睡」？</li>
                <li>今天有什麼試探讓我措手不及？我用什麼回應了？</li>
                <li>今天我有沒有積極地為別人代禱？</li>
                <li>明天我需要在哪些地方更加警醒？</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">🙏 本章禱告（引用清教徒禱告文）</h4>
              <p className="text-gray-700 leading-relaxed italic">
                「哦，禰的每個應許都是香膏，求禰用生命的觸摸，靠近禰疲憊的戰士，求禰更新我，使我能夠重新起來投入爭戰，永不疲憊，直到我的仇敵被踩在腳下。求禰使我與禰親密相契，使我能夠抵擋撒但、疑惑、肉體和世界……那麼，我的手就永遠不會軟弱，我的腳就永遠不會絆倒，我的劍永遠不會停息，因為我的力量在於禰無限的大能。阿們。」
              </p>
              <p className="text-right text-gray-500 text-sm mt-2">——《異象穀》（Valley of Vision）</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
