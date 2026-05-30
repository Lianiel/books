import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Target, Search, HelpCircle, Check } from 'lucide-react';

export default function Book18Ch5() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-600 to-rose-700 bg-clip-text text-transparent">第五章</h1>
        <h2 className="text-xl font-semibold text-gray-700">今天的撒但</h2>
        <p className="text-sm text-gray-500 mt-2">第一部分：認識敵人</p>
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
              <h3 className="text-lg font-bold text-gray-800 mb-3">今天的撒但：真實而活躍</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                許多人對撒但的看法走向兩個極端：一端是視撒但為民間神話或心理象徵，另一端是對撒但過度著迷，在一切困難中都看見邪靈的直接干預。聖經和正確的神學在這兩個極端之間保持平衡：撒但是真實的個人存在，在今天仍然積極活躍，但他完全在神的主權之下，藉著基督的十字架已被擊敗。
              </p>
              <p className="text-gray-700 leading-relaxed">
                彼得前書5:8的警告是給今天的信徒的：「務要謹守，警醒。你們的仇敵魔鬼，如同吼叫的獅子，遍地遊行，尋找可吞吃的人。」這不是一個過時的比喻，而是今天仍然有效的屬靈現實。撒但今天攻擊信徒的方式，與他在新約時代攻擊的方式並無本質差異，雖然在形式和包裝上有所變化。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">附鬼現象在今天</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                真實的附鬼（demon possession）現象今天是否仍然存在？從牧養和宣教的實際經驗來看，答案是肯定的，尤其在非洲、亞洲、拉丁美洲等地，傳道人和宣教士報告了他們目睹的真實案例。這些案例通常出現在剛從拜偶像或巫術背景中出來的人身上。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                然而，在評估任何可能的附鬼案例時，牧師和基督徒輔導者都必須非常謹慎。許多被認為是「附鬼」的情況，實際上可能是嚴重的精神疾病（如精神分裂症、解離性身份障礙等），需要專業的心理醫療介入，而非驅魔儀式。混淆這兩者不僅對受苦者無益，還可能造成傷害。
              </p>
              <p className="text-gray-700 leading-relaxed">
                清教徒傳統的智慧在此仍然適用：與其糾結於某種現象是否「附鬼」，不如專注於向那個人傳揚基督，呼召他/她悔改信主，尋求聖靈的充滿。聖靈的同在和基督的權能是應對任何形式邪靈攻擊的最終答案。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">撒但對基督徒的七種攻擊</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                撒但雖然不能附在真正的信徒身上，但他對基督徒的攻擊是真實和多樣的。以下七個方面概括了他常用的攻擊模式：
              </p>

              <div className="space-y-4 mt-3">
                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-1">1. 試探犯罪</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    這是最基本的攻擊方式。撒但引誘信徒犯罪，破壞與神的關係，削弱靈命的活力。他利用我們天然的慾望（食慾、性慾、對舒適和成功的渴望），將其引向罪的方向。保羅在哥林多前書10:13提醒我們：「你們所遇見的試探，無非是人所能受的；神是信實的，必不叫你們受試探過於所能受的，在受試探的時候，總要給你們開一條出路，叫你們能忍受得住。」
                  </p>
                </div>

                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-1">2. 製造驕傲</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    驕傲是撒但自己的原罪（以賽亞書14:12-14），也是他對信徒最成功的攻擊之一。他使信徒以屬靈的成就自誇，輕看他人，依賴自己的力量而非神的恩典。保羅在提摩太前書3:6提到監督不可是初入教的，「恐怕他自高自大，就落在魔鬼所受的刑罰裡」——驕傲使人走上與撒但相同的道路。
                  </p>
                </div>

                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-1">3. 製造絕望和定罪感</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    在成功引誘信徒犯罪之後，撒但往往轉變策略，從誘惑者變成控告者，使信徒陷入過深的定罪感和絕望。他低語：「你犯了這樣的罪，神不可能饒恕你」、「你不值得被愛」。這是一種謊言——約翰一書1:9明確說：「我們若認自己的罪，神是信實的，是公義的，必要赦免我們的罪。」認識撒但的控告和聖靈的扎心之間的區別，是屬靈健康的關鍵。
                  </p>
                </div>

                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-1">4. 在信徒之間製造紛爭</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    以弗所書4:26-27說「不可含怒到日落，也不可給魔鬼留地步」——怒氣和不饒恕為撒但在教會中製造分裂提供了機會。教會歷史上許多嚴重的分裂，其根源不是神學差異，而是未解決的人際衝突、驕傲和不願饒恕。撒但深知，分裂的教會是無力的教會。
                  </p>
                </div>

                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-1">5. 攪擾屬靈操練</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    撒但積極阻礙信徒的禱告、讀經、參加敬拜和教會生活。他使讀經枯燥無味，使禱告感覺像是對著牆壁說話，在崇拜時引入分心的念頭。清教徒托馬斯·曼頓說：「撒但的策略之一，是使信徒忽略私下的靈修，因為他知道若信徒在密室中得到力量，他就更難在公開場合擊敗他們。」
                  </p>
                </div>

                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-1">6. 試圖動搖信心的確據</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    撒但試圖使信徒懷疑自己是否真正得救，懷疑神是否真正愛他們，懷疑神的應許是否可靠。這種「靈魂的黑夜」（dark night of the soul）是許多信徒的真實經歷。認識這是撒但的攻擊，並緊緊抓住神客觀的應許（而不是依靠自己的感覺），是得勝的關鍵。
                  </p>
                </div>

                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-1">7. 透過文化和媒體的影響</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    今天的撒但大量使用文化媒介——大眾傳媒、社交網絡、娛樂產業——來傳播與聖經真理相悖的世界觀。他不需要公開地宣傳無神論，只需讓信徒每天浸泡在世俗主義的價值觀中，使他們的思想漸漸被「這世界的模樣」塑造（羅馬書12:2）。數位時代使這種影響比以往任何時代都更廣泛、更深入。
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">今天撒但教和神秘主義的興起</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                在一個宣稱「世俗化」的時代，一個明顯的矛盾現象是：公開的撒但崇拜和各種神秘主義、占星術、靈媒正在廣泛復興。在美國，撒但教會（Church of Satan）1966年由安東·拉維（Anton LaVey）創立；各種新異教（Wicca, Neo-paganism）在年輕人中快速增長；占星術、塔羅牌、靈媒諮詢在主流文化中被接受為娛樂甚至「靈性探索」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經對這些做法的立場是清晰的：申命記18:10-12列出各種占卜、巫術、降靈的做法，稱之為神「所憎惡的」。這些做法的危險不只是表面的「迷信」，而是它們實際上涉及與邪靈的接觸，使人進入撒但的影響範圍。
              </p>
              <p className="text-gray-700 leading-relaxed">
                對基督徒的警示：這種文化趨勢意味著我們的朋友、家人或同事中，可能有人正在試驗這些做法。我們需要清楚地知道聖經的立場，能夠溫和但清楚地指出這些做法的屬靈危險，並以基督的福音作為真正的回應。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">面對今天的撒但：正確的態度</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                認識了今天撒但的真實攻擊後，信徒應當持什麼樣的態度？
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>不過度恐懼</strong>：若林多前書10:13確保我們「神是信實的，必不叫你們受試探過於所能受的」，約翰一書4:4說「那在你們裡面的，比那在世界上的更大」——聖靈的能力大過撒但的能力。恐懼是撒但希望在信徒心中產生的反應，它使我們癱瘓，失去信心和行動力。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>不輕敵</strong>：彼得前書5:8說要「謹守，警醒」——這表示需要主動的靈性覺知，不能掉以輕心。許多信徒在屬靈爭戰中受傷，是因為他們不相信有爭戰，沒有準備好防衛。
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>倚靠基督的得勝</strong>：最終的答案是以弗所書6:10「你們要靠著主，倚賴他的大能大力作剛強的人」。我們的力量不是自己的，我們的信心是基於基督已成就的得勝，而非我們自己的屬靈表現。
              </p>
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
              <h4 className="font-semibold text-gray-800 mb-2">如何分辨撒但的控告與聖靈的扎心</h4>
              <p className="text-gray-700 leading-relaxed">
                這個辨別能力對信徒的屬靈健康至關重要，因為混淆兩者會導致兩種錯誤：要麼壓制聖靈的真實扎心（導致繼續在罪中），要麼陷入撒但製造的無根據定罪感（導致絕望和失去得救確據）。清教徒和改革宗神學家提供了幾個辨別原則：第一，聖靈的扎心是針對具體罪行的，清楚指出哪裡錯了，並指向認罪和悔改的出路；撒但的控告是模糊的、全面否定性的（「你整個人都是失敗的」），沒有具體的出路。第二，聖靈扎心後有平安（認罪後得赦免的確據）；撒但的控告即使在認罪後仍不停止，繼續壓迫。第三，聖靈的扎心使人轉向基督；撒但的控告使人轉向自己（自我譴責、絕望、想放棄信仰）。記住這些區分，能幫助信徒在面對定罪感時做出正確的回應。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">數位時代的屬靈爭戰：新挑戰</h4>
              <p className="text-gray-700 leading-relaxed">
                互聯網和社交媒體的出現，為撒但提供了前所未有的工具。色情內容比以往任何時代都更容易獲取，引發廣泛的性慾罪和婚姻破壞；社交媒體的設計本身激發嫉妒、比較和表演性虔誠；演算法推薦的內容越來越多地強化偏見和憤怒；網絡社群使人更容易匿名地中傷他人。特別值得注意的是：研究顯示，智能手機使用與憂鬱、焦慮的增加有顯著關聯，而這些正是撒但攻擊信徒的有效切入點。數字時代的基督徒需要發展特定的屬靈實踐：有意識地限制媒體消費、練習數字齋戒、在網絡互動中保持基督徒的見證、以及認識到每次拿起手機都是一個對靈命可能有影響的選擇。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">精神健康與屬靈戰爭：整合的視角</h4>
              <p className="text-gray-700 leading-relaxed">
                一個重要但常被誤處理的問題是：憂鬱症、焦慮症等精神健康問題，是屬靈問題還是醫療問題？過於簡化的答案（「都是屬靈問題，只需禱告」或「都是大腦化學問題，只需藥物」）都不夠準確。聖經顯示，先知以利亞在靈命高峰後陷入嚴重的情緒崩潰（列王記上19章），神的回應是先照顧他的身體需要（睡眠和食物），然後才是屬靈的重建。心理學研究也顯示，長期的罪（如色情成癮、憤怒）確實影響大腦迴路；反過來，大腦化學失衡也確實影響人的屬靈狀態。健康的整合視角是：在尋求屬靈幫助的同時，不排除必要時的專業心理/精神醫療協助，認識到神可以通過醫療工具施行祂的醫治。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">新時代運動：當代的宗教混合主義</h4>
              <p className="text-gray-700 leading-relaxed">
                「新時代」（New Age）運動是二十世紀末以來對西方文化影響最廣泛的偽靈性現象之一。它吸收了東方宗教（佛教、印度教的元素）、古代神秘主義和西方心理學，創造出一個以「自我實現」和「靈性探索」為中心的宗教混合體。它的吸引力在於：不要求對任何權威（包括神或聖經）的服從，只要「向自己的高我連結」，強調個人體驗超過客觀真理。從基督教的視角看，新時代運動的核心問題是：它以「你就是神」（或「神就在你裡面」）取代了聖經的「你是被造物，神是創造主」，這是對伊甸園最初謊言的現代包裝：「你們便如神能知道善惡」（創世記3:5）。面對新時代思想，基督徒需要能夠清楚地解釋為何聖經的世界觀（創造-墮落-救贖-更新）比新時代的「靈性探索」更能回答人生的根本問題。
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
              <p className="text-gray-700">本章列出撒但對基督徒的七種攻擊。哪一種目前對你最具挑戰？你有什麼具體的跡象使你認識到他正從這個方向攻擊你？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">你如何分辨一個內心的定罪感是來自聖靈的扎心，還是來自撒但的控告？在過去，你是否曾把聖靈的扎心當成撒但的攻擊（因而壓制了悔改），或把撒但的控告當成聖靈的聲音（因而陷入不必要的絕望）？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">今天的媒體和數字文化在多大程度上影響著你的思維模式、價值觀和屬靈狀態？若要誠實評估，社交媒體或娛樂平台對你的靈命是「喂養」還是「消耗」？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">你周圍的人（非基督徒朋友、家人、同事）是否有接觸占星、塔羅、靈媒或其他神秘主義做法的？面對這種情況，你的回應通常是什麼？你如何在不製造距離的同時，清楚地傳達聖經的立場？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">「不過度恐懼，也不輕敵」——在這個平衡上，你目前更傾向哪一邊？過度恐懼撒但，還是輕視了屬靈爭戰的真實性？這種傾向對你的信仰生活有什麼具體影響？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">約翰一書4:4說「那在你們裡面的，比那在世界上的更大」——這個確據在你面對實際的誘惑或撒但攻擊時，有多真實？你如何使這個神學真理成為你實際的屬靈資源，而不只是一句口號？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 識別你的「弱點區域」</h4>
              <p className="text-gray-700 mb-2">花一段時間認真自我評估，撒但最常透過哪些「門」進入你的生命。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>回顧過去一個月，你最常在哪方面向試探屈服（性慾、憤怒、驕傲、貪心、懶惰、憂慮）？</li>
                <li>識別「觸發點」：什麼情況、場合、情緒狀態最容易使你犯罪？</li>
                <li>思考：你是否在某些關係、某些媒體消費或某些習慣上「給撒但留了地步」？</li>
                <li>為你識別出的弱點寫下具體的防衛策略（例如：若某類網站是試探，安裝過濾軟件）</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">⏰ 一周的數字齋戒</h4>
              <p className="text-gray-700 mb-2">嘗試一次有意識的數字媒體限制實驗，觀察它對你靈命的影響。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>選擇一天（如主日），完全不使用社交媒體和娛樂性媒體</li>
                <li>將原本刷手機的時間改為讀經、禱告、或與家人深度交流</li>
                <li>一周後，評估這個實踐對你的心境、屬靈狀態和人際關係的影響</li>
                <li>考慮是否可以將某種形式的「數字安息日」納入常規生活</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 對抗控告的聖經武庫</h4>
              <p className="text-gray-700 mb-2">建立一個個人的「回應撒但控告」聖經經文清單，在被攻擊時使用。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li><strong>羅馬書8:1</strong>——「如今，那些在基督耶穌裡的，就不定罪了」</li>
                <li><strong>羅馬書8:33-34</strong>——「誰能控告神所揀選的人呢？有神稱他們為義了」</li>
                <li><strong>約翰一書1:9</strong>——「我們若認自己的罪，神是信實的，是公義的，必要赦免我們的罪」</li>
                <li><strong>約翰一書4:4</strong>——「那在你們裡面的，比那在世界上的更大」</li>
                <li>把這些經文寫在小卡片上，放在容易看到的地方；當感到被定罪攻擊時，大聲宣讀</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🛡️ 建立代禱夥伴關係</h4>
              <p className="text-gray-700 mb-2">找一位可信任的同性肢體，建立定期的互相代禱和問責關係。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>每隔一到兩週，分享彼此在屬靈爭戰中的掙扎和得勝</li>
                <li>互相提問：「這週在哪方面你需要抵抗撒但？」</li>
                <li>為對方的弱點區域代禱，也接受對方為你的代禱</li>
                <li>記住：孤立是撒但最希望你處於的狀態；屬靈夥伴關係削弱了他的攻擊效果</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-4 mt-2">
              <h4 className="font-semibold text-green-800 mb-2">🙏 禱告詞</h4>
              <p className="text-gray-700 leading-relaxed italic text-sm">
                「天父，我承認今天撒但仍然是真實的、活躍的仇敵。我感謝祢，祢已在基督裡給我得勝的應許。在我的弱點之處——那些我最容易被試探的地方——求祢的靈特別保守我。當我面對他的控告時，讓我的眼目不在自己的失敗上，而在十字架上基督已完成的救贖上。願我今日的生命，靠著祢的恩典，成為撒但計謀失敗的見證。奉主耶穌得勝的名，阿們。」
              </p>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
