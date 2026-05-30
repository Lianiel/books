import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Award, Search, HelpCircle, Check, Star } from 'lucide-react';

export default function Book19Ch4() {
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
        <div className="text-sm font-medium text-orange-500 mb-1">主題四</div>
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">🔥 在聖靈裡的能力</h1>
        <p className="text-gray-500 text-sm">第19-23、32、49章</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <div>
              <h3 className="font-bold text-purple-700 text-lg mb-3">第19章：耶穌保守我們</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                基督徒的安全感不建立在自己的努力上，而建立在耶穌的保守能力上。慕安德列說：「你的任務不是保守自己，而是將自己交托給那位能保守你的主。」彼得前書1:5說：「你們這因信蒙神能力保守的人。」保守是神的工作，信心是我們與這份保守相連的通道。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「交托一切給耶穌」——不只是靈魂的得救，還包括每天的生活、每個難處、每個試探。很多信徒在大事上相信耶穌，但在日常的小事上卻試圖靠自己應付。慕安德列說：「耶穌願意管理你生命的每一個細節，包括你認為太小的事。把小事也交托他，你就會發現他的恩典遠比你想像的更廣闊。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                「相信耶穌大能，認識你所信的是誰」——這句話非常重要。許多信徒的信心軟弱，不是因為他們不相信神的存在，而是因為他們對神的能力和性情的認識不夠深。越認識耶穌，信心就越堅定。慕安德列鼓勵信徒持續研讀福音書，看耶穌如何一次又一次地展示他的能力和慈愛，讓這些記錄深化我們對他的信任。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 text-lg mb-3">第20章：在軟弱中得著能力</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅在哥林多後書12章有一段極其深刻的陳述：他的肉體有一根刺，他三次求主拿去，神卻說：「我的恩典夠你用的，因為我的能力是在人的軟弱上顯得完全。」保羅的回應震撼人心：「所以，我更喜歡誇自己的軟弱，好叫基督的能力覆庇我。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                慕安德列解釋這一弔詭：神刻意讓信徒保留某些軟弱，因為軟弱使我們謙卑，謙卑使我們倚靠，倚靠使神的能力得以發揮。一個感覺自己很強壯的信徒，容易在自己的能力中行事；一個深知自己軟弱的信徒，不得不呼求神的幫助。「誇自己的軟弱」不是消極主義，而是承認真實的狀況，並在這承認中向神開放。
              </p>
              <p className="text-gray-700 leading-relaxed">
                「剛強是神的命令」——以弗所書6:10說：「要靠著主，倚賴他的大能大力，作剛強的人。」這裡的剛強是「靠主」的剛強，不是靠自己的力量。慕安德列說：「你可以同時軟弱和剛強——在自己面前軟弱，在主裡面剛強。這正是保羅的秘訣：『我靠著那加給我力量的，凡事都能做。』（腓4:13）」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 text-lg mb-3">第21章：不憑感覺，憑信心</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                這是慕安德列在此書中最常強調的主題之一。基督徒的生命中，感覺（feelings）扮演著一個微妙而危險的角色。感覺是真實的，但感覺是不可靠的。今天感覺離神很遠，不代表神真的遠離了你；今天感覺靈裡乾燥，不代表聖靈已離開；今天感覺禱告沒有功效，不代表神沒有回應。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「在沒有感覺時依然相信」——這就是信心的本質。希伯來書11:1說信心是「所望之事的實底，未見之事的確據」。信心不是相信你能感覺到的事，而是相信神所說的話，無論感覺如何。當屬靈乾燥期來臨，當禱告感覺是在對著牆說話，當讀聖經毫無感動——這正是信心最需要、也最有機會增長的時刻。
              </p>
              <p className="text-gray-700 leading-relaxed">
                「信心的獎賞」——堅持憑信心行事的信徒，往往會在某個時刻發現感覺跟上來了——但那時，他們已不再需要感覺來支持他們的信仰。這是屬靈成熟的標誌：一個靠感覺生活的信徒，是嬰孩期的信徒；一個能在沒有感覺時仍然信靠的信徒，是成熟的信徒。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 text-lg mb-3">第22章：聖靈的工作</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖靈在信徒生命中有兩個核心工作，慕安德列在此章特別強調：「使認識罪」和「榮耀基督使我們得安慰」。這兩者看起來相反，實際上是一枚硬幣的兩面。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「使認識罪」——約翰16:8說聖靈要「叫世人自己知道罪」。聖靈讓人看見自己的罪，不是要讓人沉淪在自責中，而是要帶領人來到基督面前尋求赦免。沒有對罪的真正認識，就不會有真正的悔改；沒有真正的悔改，就無法深入地認識救恩的豐富。
              </p>
              <p className="text-gray-700 leading-relaxed">
                「榮耀基督使我們得安慰」——約翰16:14說聖靈「要榮耀我（基督），因為他要將受於我的告訴你們。」聖靈的主要工作不是彰顯自己，而是彰顯基督。當聖靈在我們心中工作，我們就越來越清楚地看見基督的美善、能力和慈愛，並在這看見中得著深刻的安慰和喜樂。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 text-lg mb-3">第23章：聖靈的引領</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                羅馬書8:14說：「因為凡被神的靈引導的，都是神的兒子。」聖靈的引領是基督徒生命的標誌，也是基督徒生活的實際需要。慕安德列指出，聖靈的引領通過三個通道運作：信心、安靜、順服。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「信心」——相信聖靈真的在引領自己。許多信徒在禱告中求引導，但心裡卻充滿懷疑：「神真的會引導我這樣普通的人嗎？」這種懷疑本身就阻礙了引導的發生。相信神會引導是接受引導的第一步。「安靜」——在嘈雜的生活中培養安靜等候的空間。詩篇46:10說：「你們要休息，要知道我是神。」安靜不是無所事事，而是讓心靈進入一種聆聽的狀態。
              </p>
              <p className="text-gray-700 leading-relaxed">
                「順服」——聖靈不會繼續引領一個不願意順服的人。每一次的順服都使信徒更有能力聽到下一次的引導；每一次的抵制都使心靈變得更硬，更難聽到聖靈的聲音。慕安德列說：「對聖靈的引導，要在小事上忠心——那些你心裡感到『我應該這樣做』的輕柔感動。不要忽視它，要在它新鮮的時候就行動。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 text-lg mb-3">第32章：光明與喜樂</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                慕安德列指出：光明和喜樂在屬靈生命中是相連的，有光明的地方就有喜樂，失去了光明就失去了喜樂。這裡的光明不是指知識或資訊，而是指與神同在的光明——活在神的面光中，心中明亮、有方向。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「黑暗的兩個原因」：一是罪——當信徒故意犯罪，就離開了光明進入黑暗；二是不信——當信徒對神的應許缺乏信心，就看不見神的光，陷入屬靈的黑暗。這兩種黑暗的解決方案都是轉向神：對罪的黑暗，需要認罪悔改；對不信的黑暗，需要在神的話語中重新確認神的信實。
              </p>
              <p className="text-gray-700 leading-relaxed">
                「得著喜樂的方法」——喜樂不是努力「高興起來」的結果，而是活在神的面光中的自然結果。尼希米記8:10說「靠耶和華而得的喜樂是你們的力量」——喜樂是力量的來源，不是力量的獎勵。在信仰路途中保持喜樂，是一種靈命的維護，而不是可有可無的附加品。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 text-lg mb-3">第49章：基督徒的自由</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                自由是新約聖經中最重要的主題之一。慕安德列在此章探討三層的基督徒自由：「從罪得釋放」、「從律法下得釋放」、「從罪的律法下得釋放」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「從罪得釋放」——約翰8:36說：「所以天父的兒子若叫你們自由，你們就真自由了。」這是最基本的自由：我們不再是罪的奴隸，可以自由地選擇善，可以拒絕罪的邀請。「從律法下得釋放」——加拉太書4-5章說信徒不再在律法的監管下，而是在恩典的關係中。我們不是靠守律法得救，也不是靠守律法在神面前站立得住；我們靠基督的功德得稱義，靠聖靈的力量行義。
              </p>
              <p className="text-gray-700 leading-relaxed">
                「從罪的律法下得釋放」——羅馬書7-8章描述了一個信徒內心的掙扎：「立志為善由得我，只是行出來由不得我。」保羅的結論是：「靠著我們的主耶穌基督就能脫離了。感謝神！」（羅7:25）「如今，那些在基督耶穌裡的，就不定罪了。因為賜生命聖靈的律，在基督耶穌裡釋放了我，使我脫離罪和死的律了。」（羅8:1-2）這是最深層的自由：從內心罪性傾向的控制中得釋放，在聖靈的能力下活出自由的生命。
              </p>
            </div>

          </div>
        )}
      </div>

      {/* 重點總結 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <div className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 flex items-center gap-2">
          <Star className="w-5 h-5 text-teal-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">重點總結</span>
        </div>
        <div className="p-5 bg-white space-y-3">
          <div className="flex gap-3">
            <span className="text-teal-600 font-bold flex-shrink-0">1.</span>
            <p className="text-gray-700">在聖靈裡的能力不是靠自己的努力獲得的，而是透過交托、倚靠和信心從神領受的——軟弱反而是這種能力的入口。</p>
          </div>
          <div className="flex gap-3">
            <span className="text-teal-600 font-bold flex-shrink-0">2.</span>
            <p className="text-gray-700">信心與感覺的區別是屬靈成熟的關鍵：成熟的信徒能在沒有感覺的時候仍然信靠神的應許，這種信心帶來最持久的力量。</p>
          </div>
          <div className="flex gap-3">
            <span className="text-teal-600 font-bold flex-shrink-0">3.</span>
            <p className="text-gray-700">聖靈的雙重工作——使人認識罪和榮耀基督——是一枚硬幣的兩面，共同將信徒引向更深的悔改和更豐富的恩典體驗。</p>
          </div>
          <div className="flex gap-3">
            <span className="text-teal-600 font-bold flex-shrink-0">4.</span>
            <p className="text-gray-700">聖靈的引領需要三個條件：信心（相信他在引領）、安靜（培養聆聽的空間）、順服（在小事上忠心回應）。</p>
          </div>
          <div className="flex gap-3">
            <span className="text-teal-600 font-bold flex-shrink-0">5.</span>
            <p className="text-gray-700">基督徒的真自由包含三層：從罪的行為、從律法的重軛、從罪性傾向中得釋放——這一切都建立在基督的得勝和聖靈的能力上。</p>
          </div>
        </div>
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
              <h4 className="font-semibold text-indigo-700 mb-2">軟弱神學的悖論</h4>
              <p className="text-gray-700 leading-relaxed">
                基督教信仰中有一個根本的悖論：神選擇通過軟弱彰顯力量。這不只是慕安德列的個人觀點，而是聖經中反覆出現的主題。神選擇了最小的以色列民族；神選擇了伯利恆一個馬槽；神選擇了十字架這個最羞辱的死法來完成最偉大的救恩。哥林多前書1:27說：「神揀選了世上軟弱的，叫那強壯的羞愧。」這種「以弱勝強」的邏輯是基督教信仰的核心，與世界的成功學截然相反。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">感覺與信心：歷史上的辯論</h4>
              <p className="text-gray-700 leading-relaxed">
                宗教改革中，路德強調「sola fide」（唯獨信心），這在很大程度上是對當時羅馬天主教「靠行為和感覺確認自己在恩典中」的回應。清教徒神學家進一步探討信心與確據的關係。慕安德列在此繼承了改教傳統，但他的獨特貢獻是強調「以信心行動」——不是等待感覺，而是在沒有感覺的情況下仍然按神的話語行動，讓行動帶出感覺。這與現代心理學中「以行動改變感覺」的研究不謀而合。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">聖靈引領的辨別</h4>
              <p className="text-gray-700 leading-relaxed">
                如何辨別一個念頭是聖靈的引導、自己的想法，還是撒但的試探？歷代神學家提出了多種辨別標準，包括：是否符合聖經（聖靈絕不引導違背聖經的事）；是否帶來謙卑還是驕傲；是否在時間中被印證；是否有弟兄姊妹的確認。慕安德列特別強調第一條：聖靈的引導永遠不會與神的話語相矛盾。當一個「感覺」符合聖經，帶來謙卑和愛，又有其他印證，我們就可以有較大的確信。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">律法與自由：保羅的緊張關係</h4>
              <p className="text-gray-700 leading-relaxed">
                保羅的書信中有一個神學上的緊張關係：一方面，信徒脫離了律法的轄制（加拉太書）；另一方面，信徒不應濫用自由放縱肉體（加5:13）。這個緊張關係的解決在於理解：律法作為救恩途徑已被廢除，但律法所代表的神的聖潔標準仍然有效，並在信徒心中由聖靈完成（羅8:4）。自由不是許可犯罪，而是在聖靈的能力下，出於愛地活出神的旨意——這種自由比律法主義更高，也更深。
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
              <p className="text-gray-700">你的屬靈生命中有沒有一些長期的「軟弱」？你目前是如何看待這些軟弱的——是羞愧地藏著，還是謙卑地將它們帶到神面前？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">你的信仰生活在多大程度上依靠感覺？當你感覺距離神很遠或禱告沒有用時，你的實際回應是什麼？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">你能想到一次明確感受到聖靈引導的經歷嗎？那次引導是如何辨認出來的？你回應了嗎？結果如何？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">喜樂在你的信仰生活中是常態還是例外？你認為你生命中的屬靈黑暗（喜樂缺失）更多是因為罪，還是因為不信？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">你在哪個層面的基督徒自由上最需要成長——從罪的行為得釋放、從律法主義得釋放，還是從內在罪性傾向得釋放？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">「培養安靜」對你的生活環境來說是否困難？你有什麼具體的安排或習慣，使你能在繁忙中有聆聽神的空間？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🔥 不憑感覺的信心操練</h4>
              <p className="text-gray-700 mb-2">當你感覺屬靈乾燥時，試行以下步驟：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>不管感覺如何，仍然打開聖經讀五分鐘</li>
                <li>大聲宣告一個神的應許（例如：「神說他永不撇棄我」）</li>
                <li>做一件愛神或愛人的具體行動</li>
                <li>記錄今天憑信心而非感覺所做的事</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🌙 安靜操練</h4>
              <p className="text-gray-700 mb-2">每天設立一個「安靜時刻」（即使只有十分鐘）：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>關掉所有電子設備</li>
                <li>先不說話，只是在神面前安靜坐著</li>
                <li>讀一段聖經，再安靜等候</li>
                <li>把心中出現的念頭寫下來，問：這是聖靈的引導嗎？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">⚡ 交托軟弱的禱告</h4>
              <p className="text-gray-700 mb-2">面對你長期的軟弱，做一個「交托禱告」：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>具體說出你的軟弱：「主，我在___方面很軟弱。」</li>
                <li>感謝神讓你看見這軟弱：「謝謝你使我看清自己。」</li>
                <li>宣告信心：「我相信你的恩典在這軟弱上夠我用。」</li>
                <li>每週重複這個禱告，觀察你對這軟弱的態度如何改變。</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4 mt-2">
              <p className="text-green-800 italic text-sm leading-relaxed">
                「聖靈，感謝你在我心中工作。當我感覺不到你的同在時，幫助我記住你的話是真實的，你的同在不依賴我的感覺。在我最軟弱的時候，請你的能力在我裡面完全彰顯。引導我的步伐，使我在信心和順服中跟隨你。阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
