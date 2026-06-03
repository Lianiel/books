import React from 'react';
import { Crown, Star, Search, HelpCircle, Check, Flame, Brain, BookOpen, Scroll } from 'lucide-react';

export default function Book23Nebuchadnezzar() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">

      {/* ===== 人物標題卡 ===== */}
      <div className="mb-8 rounded-2xl overflow-hidden shadow-lg border border-amber-200">
        <div className="bg-gradient-to-r from-amber-600 to-red-700 px-5 py-3 flex flex-wrap gap-2">
          {['列王記下', '歷代誌下', '以斯拉記', '但以理書'].map(tag => (
            <span key={tag} className="bg-white/20 text-white text-xs font-semibold px-2 py-0.5 rounded-full">{tag}</span>
          ))}
          <span className="ml-auto text-white/80 text-xs font-medium">新巴比倫帝國的君主</span>
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6">
          <p className="text-sm text-amber-700 font-medium mb-1">Nebuchadnezzar</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-1">尼布甲尼撒</h1>
          <p className="text-base text-amber-700 font-semibold mb-4">新巴比倫帝國的君主</p>
          <div className="relative bg-white border-2 border-amber-300 rounded-2xl px-5 py-4 shadow-sm inline-block max-w-sm">
            <div className="absolute -left-3 top-5 w-0 h-0 border-t-8 border-t-transparent border-r-[12px] border-r-amber-300 border-b-8 border-b-transparent" />
            <p className="text-gray-800 font-medium text-sm leading-relaxed">
              我是攻陷南方猶大王國，舉世無雙的巴比倫王
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <BookOpen className="w-4 h-4 text-amber-500" />
              <span>列王記下 24–25章 · 但以理書 1–4章</span>
            </div>
            <div className="flex items-center gap-1">
              <Crown className="w-4 h-4 text-amber-500" />
              <span>統治時期：約西元前605–562年</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== 背景知識：新巴比倫帝國是指…… ===== */}
      <div className="mb-6 border border-red-200 rounded-xl overflow-hidden shadow-sm">
        <div className="bg-gradient-to-r from-red-50 to-orange-50 px-5 py-3 flex items-center gap-2">
          <div className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">Let's read</div>
          <span className="font-semibold text-red-800 text-sm">讀讀聖書 — 新巴比倫帝國是指……</span>
        </div>
        <div className="p-5 bg-white">
          <p className="text-gray-700 leading-relaxed text-sm">
            由迦勒底人（挪亞兒子閃世系中的一支）建立的國家。西元前六二二年滅了亞述帝國，遷都至巴比倫，成為「新巴比倫帝國」。西元前五八六年，尼布甲尼撒王滅掉南方猶大王國，再度把猶太人擄往巴比倫（第二次巴比倫之囚）。尼布甲尼撒去世後，巴比倫亞發生內亂，西元前五三九年被波斯阿契美尼德王朝的居魯士二世所滅。
          </p>
        </div>
      </div>

      {/* ===== 第一層：主要內容 ===== */}
      <div className="mb-6 border border-amber-100 rounded-xl overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 flex items-center gap-2">
          <Crown className="w-5 h-5 text-amber-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">主要內容</span>
        </div>
        <div className="p-5 bg-white space-y-6">

          <div>
            <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
              巴比倫帝國的偉大建設者
            </h3>
            <p className="text-gray-700 leading-relaxed">
              尼布甲尼撒是新巴比倫帝國的大王，也是位優秀的建築家，建造了宏偉的伊什塔爾城門（Ishtar Gate）以及宮殿、廟宇等大型建築群，讓新巴比倫之名響徹天下。當時的巴比倫城被認為是古代世界最壯麗的城市之一。
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              根據傳說，尼布甲尼撒為了安慰他思念故鄉山地的妻子，命人在平原上建造了著名的「空中花園」——一座層層疊疊、種滿樹木花草、重現故鄉青翠山景的梯形花園，被後世列為古代世界七大奇觀之一。
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
              兩度攻破耶路撒冷，擄走猶大人民
            </h3>
            <p className="text-gray-700 leading-relaxed">
              南方猶大大王國第十八任的雅斤王（→約雅斤，p.184）、第十九任西底家王（→西底家，p.184）時代，尼布甲尼撒先後兩度攻破南方猶大王國首都耶路撒冷，將耶路撒冷的居民擄往巴比倫（列王記下 24–25章）。
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              攻破聖城後，尼布甲尼撒把耶路撒冷聖殿裡珍藏的寶物和器皿全部運往巴比倫，並挑選貴族、先知等的優秀人才留在身邊為己所用。
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">3</span>
              欣賞但以理，要求跪拜金像
            </h3>
            <p className="text-gray-700 leading-relaxed">
              尼布甲尼撒在被俘的猶大才俊中，尤其欣賞跟約瑟（→約瑟，p.72）一樣會解夢的先知但以理（→但以理，p.214），任命他作顧問（但以理書 1章）。
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              但以理的三名友人同樣擔任高官，但他們不願跪拜尼布甲尼撒王用黃金打造的神像，差點被尼布甲尼撒王用繩子綁起扔進火裡燒死。幸好受上帝保佑的三人在火中解開繩索，平安脫逃（但以理書 1–3章）。
            </p>
          </div>

          {/* Episode 21 */}
          <div className="border-l-4 border-red-400 bg-red-50 rounded-r-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">episode 21</span>
              <h3 className="font-semibold text-red-800">囚虜但以理的解夢</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm mb-2">
              尼布甲尼撒帶回來的俘虜中，有一位是先知但以理。有天晚上尼布甲尼撒做了一個夢，他找來幾位賢者，要他們猜自己夢到的內容並且解夢。
            </p>
            <p className="text-gray-700 leading-relaxed text-sm mb-2">
              「你們既然服事上帝，應該知道那是什麼夢。如果猜不出來，我就殺光所有賢者和巴比倫的智者」——尼布甲尼撒的威脅讓宮廷上下人心惶惶。
            </p>
            <p className="text-gray-700 leading-relaxed text-sm">
              上帝把尼布甲尼撒夢到的告訴但以理。多虧如此，但以理才成功為尼布甲尼撒解夢，獲得他的感謝，在巴比倫宮廷中地位大增（但以理書 2章）。
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">4</span>
              晚年精神失常，四肢爬行七年
            </h3>
            <p className="text-gray-700 leading-relaxed">
              晚年有段時間精神失常，像牛一樣用四肢在原野上爬行。據說在皈依猶太教的七年後病癒（但以理書 4章）。
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              尼布甲尼撒王去世後，兒子之一的以未米羅達（→以未米羅達，p.185）繼承王位，繁華傲世的巴比倫逐漸衰微，後來被波斯帝國所滅。
            </p>
            <div className="mt-3 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-800">
              <span className="font-semibold">📌 小知識：</span>據說他用四肢爬行過生活時，指甲一直長長，像鳥爪一樣。
            </div>
          </div>

        </div>
      </div>

      {/* ===== 第二層：重點總結 ===== */}
      <div className="mb-6 border border-sky-100 rounded-xl overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 flex items-center gap-2">
          <Star className="w-5 h-5 text-sky-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">重點總結</span>
        </div>
        <div className="p-5 bg-white space-y-3">
          {[
            '尼布甲尼撒是新巴比倫帝國最強大的君主，先後兩度攻破耶路撒冷，南方猶大王國滅亡，猶太人被擄往巴比倫，史稱「巴比倫之囚」。',
            '他是才智兼備的統治者：既是無情的征服者，也是偉大的建築家，傳說中的「空中花園」便是他為思鄉妻子所建，成為古代世界七大奇觀之一。',
            '他欣賞被俘猶大人才，尤其信任先知但以理——如同古代約瑟在埃及宮廷得到法老重用，但以理也因解夢的恩賜在巴比倫宮廷獲得重用。',
            '但以理三友拒拜金像遭扔入火窯，上帝保護他們安然無恙，這一事件見證了信仰的力量超越世上最強君王的權威。',
            '尼布甲尼撒晚年精神失常、四肢爬行七年，聖經解讀為上帝對驕傲君王的管教，暗示人的尊榮最終來自上帝的賜予，而非自身能力。',
            '他的故事橫跨歷史書（列王記）與先知書（但以理書），是舊約時代「外邦強權與上帝子民」最具代表性的歷史交匯點。',
          ].map((point, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-sky-600 font-bold flex-shrink-0 mt-0.5">{i + 1}.</span>
              <p className="text-gray-700 leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== 第三層：延伸探討 ===== */}
      <div className="mb-6 border border-indigo-100 rounded-xl overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 flex items-center gap-2">
          <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">延伸探討</span>
        </div>
        <div className="p-5 bg-white space-y-5">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">「巴比倫之囚」的神學意涵</h4>
            <p className="text-gray-700 leading-relaxed">
              「巴比倫之囚」（Babylonian Captivity）在猶太歷史上是一次極大的信仰衝擊。被擄的以色列人失去了聖殿、失去了土地、甚至開始懷疑：上帝是否也被巴比倫的神「打敗」了？然而，先知書（耶利米書、以西結書、以賽亞書40–55章）一致指出：這並非上帝失敗，而是上帝藉尼布甲尼撒的手管教不忠的以色列民。尼布甲尼撒成為上帝手中的「器皿」，這一詮釋深刻說明上帝的主權不受地理和政治的限制。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">驕傲的毀滅與悔改的可能</h4>
            <p className="text-gray-700 leading-relaxed">
              但以理書第4章記載尼布甲尼撒精神失常的奇事，是聖經中對「驕傲之惡」最生動的描繪。當他正在為自己的宏偉建設自鳴得意時——「這大巴比倫不是我用大能大力建為京都、要彰顯我威嚴的榮耀嗎？」——話還沒說完，審判就臨到了。從驕傲走向悔改，他最後承認「天上的上帝，他的統治是永遠的」（但4:34），成為聖經中少見的「外邦君王悔改」案例。考古文獻也顯示，尼布甲尼撒在晚年確曾長期從公眾視野中消失，與聖經記載相互印證。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">但以理的忠誠：身處異文化中持守信仰</h4>
            <p className="text-gray-700 leading-relaxed">
              尼布甲尼撒的故事也是但以理信仰忠誠的大舞台。在異邦宮廷中，但以理和三友面對飲食規定、拜像命令等多方壓力，始終持守信仰，不以環境轉移立場。這與約瑟在埃及的處境形成呼應——兩人都在強敵環境中，因信仰的堅守而反被重用，甚至影響了外邦君王。對流亡異鄉的猶太人而言，但以理的故事是一個有力的信仰激勵。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">歷史考古的印證</h4>
            <p className="text-gray-700 leading-relaxed">
              尼布甲尼撒是古代近東歷史上有大量考古文獻印證的君主之一。巴比倫年代記（Babylonian Chronicle）清楚記載了他攻打耶路撒冷的軍事遠征。出土的泥板文書中並發現記錄約雅斤王在巴比倫領取糧食配給的行政文書，與列王記下25:27–30「約雅斤在巴比倫宮廷受到款待」的記載完全吻合，是聖經歷史可信度的重要外部佐證。
            </p>
          </div>
        </div>
      </div>

      {/* ===== 第四層：反思問題 ===== */}
      <div className="mb-6 border border-amber-100 rounded-xl overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">反思問題</span>
        </div>
        <div className="p-5 bg-white space-y-3">
          {[
            '尼布甲尼撒是個征服者，但也被但以理書描述為最終承認上帝主權的人。你認為他的悔改是否真實？一個人需要到什麼程度才算真正「悔改」？',
            '但以理的三個朋友面對「跪拜或死亡」的選擇時說：「即使上帝不拯救我們，我們也不跪拜。」在你生活中，有沒有類似「沒有退路的信仰選擇」？你如何回應？',
            '尼布甲尼撒的狂傲讓他落得精神失常、四肢爬行。聖經對人的驕傲有一貫的警告。你認為現代人最容易陷入哪種形式的驕傲？',
            '上帝使用一位外邦的強敵君王來管教自己的子民，這對你理解上帝的主權和工作方式有何挑戰或啟示？',
            '但以理身在異邦宮廷，卻沒有同化於其中，保持了信仰的核心。你在非基督徒環境中（職場、家庭、社會），如何保持信仰的真實而不只是表面形式？',
            '尼布甲尼撒為妻子建空中花園，可見他也有柔情的一面。看見一個歷史上「反派」人物的人性，對你認識人性有什麼影響？',
          ].map((q, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0 mt-0.5">{i + 1}.</span>
              <p className="text-gray-700 leading-relaxed">{q}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== 第五層：具體實踐方針 ===== */}
      <div className="mb-6 border border-green-100 rounded-xl overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 flex items-center gap-2">
          <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">具體實踐方針</span>
        </div>
        <div className="p-5 bg-white space-y-5">
          <div>
            <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
              <Flame className="w-4 h-4" />
              在壓力下持守的操練
            </h4>
            <p className="text-gray-700 mb-2 text-sm">但以理三友的故事提醒我們：信仰的試驗往往來得突然，平時的操練決定臨場的回應。</p>
            <ul className="space-y-1.5 text-sm text-gray-700 ml-1">
              <li className="flex gap-2"><span className="text-green-500 flex-shrink-0 mt-0.5">•</span>識別出你生活中一個「隨波逐流比較容易、但與信仰不符」的場景</li>
              <li className="flex gap-2"><span className="text-green-500 flex-shrink-0 mt-0.5">•</span>事先在心裡演練你的回應，也可以找弟兄姊妹一起分享彼此面對的處境</li>
              <li className="flex gap-2"><span className="text-green-500 flex-shrink-0 mt-0.5">•</span>養成每天一個小的信仰堅持，讓信仰成為習慣，而非只在危機時才啟動</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
              <Brain className="w-4 h-4" />
              對抗驕傲的每日提醒
            </h4>
            <p className="text-gray-700 mb-2 text-sm">尼布甲尼撒的狂傲提醒我們：成就與能力越大，越需要謙卑的操練。</p>
            <ul className="space-y-1.5 text-sm text-gray-700 ml-1">
              <li className="flex gap-2"><span className="text-green-500 flex-shrink-0 mt-0.5">•</span>每天早上提醒自己：「今天所有的能力和機會都是上帝所賜的，不是我自己掙來的。」</li>
              <li className="flex gap-2"><span className="text-green-500 flex-shrink-0 mt-0.5">•</span>在取得成就後，有意識地感謝上帝和身邊幫助你的人，而非只歸功於自己</li>
              <li className="flex gap-2"><span className="text-green-500 flex-shrink-0 mt-0.5">•</span>學習尼布甲尼撒最後的話：「祂的統治是永遠的」，讓這句話成為你每週默想的核心</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
              <Scroll className="w-4 h-4" />
              本週聖經閱讀建議
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {[
                { ref: '但以理書 1–2章', desc: '被擄的但以理，解夢得重用' },
                { ref: '但以理書 3章', desc: '三友拒拜金像，火中得保護' },
                { ref: '但以理書 4章', desc: '尼布甲尼撒的驕傲與管教' },
                { ref: '列王記下 24–25章', desc: '巴比倫之囚的歷史敘述' },
              ].map(item => (
                <div key={item.ref} className="bg-green-50 border border-green-100 rounded-lg px-3 py-2">
                  <p className="font-semibold text-green-700">{item.ref}</p>
                  <p className="text-gray-600 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===== 相關人物 ===== */}
      <div className="mt-4 border border-gray-200 rounded-xl p-5 bg-gray-50">
        <h4 className="font-semibold text-gray-700 mb-3 text-sm">相關人物</h4>
        <div className="flex flex-wrap gap-2 text-xs">
          {[
            { name: '但以理', desc: '寵臣與先知' },
            { name: '約雅斤', desc: '第一次被擄的猶大王' },
            { name: '西底家', desc: '亡國時的最後猶大王' },
            { name: '以未米羅達', desc: '繼承王位之子' },
            { name: '約瑟', desc: '解夢的先祖原型' },
          ].map(p => (
            <span key={p.name} className="bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">
              <span className="font-semibold text-amber-700">{p.name}</span>
              <span className="mx-1 text-gray-300">·</span>{p.desc}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
