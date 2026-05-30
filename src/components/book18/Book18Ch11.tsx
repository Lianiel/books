import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Search, HelpCircle, Check } from 'lucide-react';

export default function Book18Ch11() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-600 to-rose-700 bg-clip-text text-transparent">第十一章</h1>
        <h2 className="text-xl font-semibold text-gray-700">我們作為信徒的挑戰</h2>
        <p className="text-sm text-gray-500 mt-2">第四部分：撒但的失敗</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">進入第四部分：撒但的失敗</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                本書的前三部分幫助我們認識了撒但——他的本質與歷史（第一部分），他的弱點和我們的軍裝（第二部分），以及他的策略（第三部分）。現在，第四部分「撒但的失敗」提供了最實際的應用：在個人信仰生活、教會群體，以及作為社會公民這三個不同維度，信徒具體應當如何行，使撒但的計謀歸於失敗。
              </p>
              <p className="text-gray-700 leading-relaxed">
                本章聚焦於個人維度——作為信徒，我們面對的五個挑戰，以及如何在這些挑戰中得勝，使撒但的工作在我們個人生命中歸於失敗。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">挑戰一：按照在基督裡的身份認同而活</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                撒但的首要攻擊目標，是信徒對自己「在基督裡」的身份認同。若他能使你忘記或懷疑你真正的身份，他就佔了很大的優勢——就像彼得忘記了自己是彼得（磐石）時，走在水上就沉下去了（馬太福音14:30）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                新約描述信徒在基督裡的豐富身份：神的兒女（約翰福音1:12），被揀選的（以弗所書1:4），蒙愛的（以弗所書5:1），新造的人（哥林多後書5:17），聖靈的殿（哥林多前書6:19），有君尊的祭司職份（彼得前書2:9），天上公民（腓立比書3:20），與基督同死同活同復活（羅馬書6:4-11）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                羅馬書6章提供了對付罪的核心原則：信徒應當「向罪死、向神活」（v.11），「不要讓罪在你們必死的身上作王」（v.12），「把自己獻給神，當作活人，從死裡復活」（v.13）。這個命令是建立在事實之上的——我們已經在基督裡向罪死了（v.2）；命令的根基是已成就的事實，不是我們努力去達成的目標。
              </p>
              <p className="text-gray-700 leading-relaxed">
                實踐的挑戰：每天以神話語所說的身份看待自己，而非以感受、他人的評價或過去的失敗看待自己。當撒但試圖用舊我的身份定義你時，宣告新我的現實。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">挑戰二：用信心勝過世界</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                約翰一書5:4說：「因為凡從神生的，就勝過世界；使我們勝了世界的，就是我們的信心。」「世界」（kosmos）在約翰的神學中，不是物質世界，而是以撒但為王的那個價值體系和倫理體系——以自我為中心，以世俗成功為終極目標，以享樂主義為生活哲學。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                信徒面對的挑戰，是活在世界中而不被世界同化（羅馬書12:2「不要效法這個世界」）。這不是呼召我們逃避世界（約翰福音17:15說耶穌求父「不是求你叫他們離開世界」），而是呼召我們在世界中保持不同的價值觀、優先次序和生活方式。
              </p>
              <p className="text-gray-700 leading-relaxed">
                「使我們勝了世界的，就是我們的信心」——信心是關鍵。不是道德努力，不是屬靈技巧，而是對基督的信靠和對神話語的依附。信心抓住永恆的現實，勝過世界眼前的吸引力；信心使人能夠為了更大的喜樂（基督）而放棄較小的喜樂（世俗的引誘）。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">挑戰三：倚靠神的恩典抵擋魔鬼</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                雅各書4:7說：「你們要順服神，務要抵擋魔鬼，魔鬼就必離開你們逃跑了。」這節經文有兩個部分，順序很重要：先「順服神」，然後才能有效地「抵擋魔鬼」。沒有對神的順服和倚靠，單獨的「抵擋」是沒有力量的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                彼得前書5:9說「要用堅固的信心抵擋他」——「堅固的信心」是力量的來源，不是自己的意志力或道德決心。許多信徒試圖用自己的力量抵擋撒但，結果筋疲力竭而失敗；正確的方式是「靠著那加給我力量的」（腓立比書4:13）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                「魔鬼就必離開你們逃跑了」——這是神的應許，不是我們努力才能達到的成就。當我們正確地（倚靠神地）抵擋，撒但的離開是應許的結果。馬丁·路德說：「我一人力薄，很快就落敗；但是代我爭戰者，神自己揀選了。」
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">挑戰四：結出聖靈的果子</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                加拉太書5:16-25提供了一個對付罪慾的根本方法：「你們當順著聖靈而行，就不放縱肉體的情慾了。」最有效的對付肉體慾望的方法，不只是壓制它，而是用聖靈的果子取代它。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖靈的果子（加拉太書5:22-23）——仁愛、喜樂、和平、忍耐、恩慈、良善、信實、溫柔、節制——是基督性情的展現，每一個都直接對抗肉體的情慾（v.19-21的清單）。培育聖靈的果子，就是在撒但試圖建立陣地的地方，建立神的國度。
              </p>
              <p className="text-gray-700 leading-relaxed">
                「結果子」的比喻很重要：果子不是強迫長出來的，而是在健康的關係中自然結出的。約翰福音15:4說「常在我裡面的，我也常在他裡面，這人就多結果子」——聖靈的果子是與基督聯合的自然結果，而非只是道德努力的產品。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">挑戰五：不要成為撒但的工具</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                這個挑戰也許是最令人警醒的——不要讓撒但利用我們去傷害他人或阻礙神的工作。耶穌對彼得說「撒但，退我後面去吧！」（馬太福音16:23）——彼得是基督最親密的門徒之一，卻在那一刻成了撒但的工具。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                撒但如何利用基督徒成為他的工具？通過驕傲和論斷傷害肢體，通過不饒恕製造教會分裂，通過不謹慎的言語絆倒軟弱的信徒（羅馬書14:21），通過不誠實的行為使福音蒙羞，通過爭競和紛爭使教會失去見證。
              </p>
              <p className="text-gray-700 leading-relaxed">
                保羅在哥林多前書10:32說：「不管是猶太人，是希利尼人，是神的教會，你們都不要使他跌倒。」這個呼召要求我們對自己行為的屬靈後果有清醒的認識——我的每一個行為，是在幫助神的國度，還是在幫助撒但的計謀？
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
              <h4 className="font-semibold text-gray-800 mb-2">「在基督裡」的身份：改革宗聯合神學</h4>
              <p className="text-gray-700 leading-relaxed">
                「在基督裡的身份認同」根植於改革宗神學中的「與基督聯合」（union with Christ）教義——也許是整個救贖論的核心概念。加爾文稱它為「無限的恩典，一切恩典的根基」。與基督的聯合不是神秘的合一（我們不會成為神），而是一種真實的法律聯合（律法地位）和有機聯合（生命的分享）。法律聯合意味著：基督的義歸算給我們，我們的罪歸算給基督（哥林多後書5:21）。有機聯合意味著：我們通過信心和聖靈，真實地分享基督的生命——祂的死是我們的死，祂的復活是我們的復活（羅馬書6:3-11）。因此，「在基督裡」不只是一個身份標籤，而是一個存在的現實，是我們所有屬靈資源的根源。每次撒但試圖用「你是一個失敗者/罪人/不值得被愛的人」來定義我們，正確的回應是在這個聯合的現實中找到答案：「在基督裡，我是神的兒女，是基督同繼後嗣，是被接納的、被揀選的、被愛的。」
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">聖潔與喜樂：反對苦行主義的改革宗視角</h4>
              <p className="text-gray-700 leading-relaxed">
                一些信徒錯誤地認為聖潔和成聖必然是憂傷、嚴肅和苦行的。改革宗傳統（特別是清教徒）雖然強調嚴肅的成聖，但同時也強調基督徒喜樂的必要性。腓立比書4:4「你們要靠主常常喜樂；我再說，你們要喜樂」——這不是建議，而是命令。清教徒理查·白斯特（Richard Baxter）說：「不快樂的基督徒是一個矛盾詞語；真正的聖潔必然帶來深層的喜樂。」基督徒的喜樂不是表面的快樂，而是建立在基督得勝的確信上的深層滿足——即使在試煉中，知道神在掌控，最終的結局是美好的。這種喜樂對屬靈爭戰有實際意義：尼希米記8:10說「靠耶和華而得的喜樂是你們的力量」。一個沉浸在真實喜樂中的基督徒，對世界的引誘有更強的抵抗力——因為他已經擁有比世界所能給予的更好的東西。撒但用世俗的快樂引誘信徒，是因為他們基督徒的喜樂不夠真實或深刻。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「肉體的情慾」與「聖靈而行」：加拉太書的成聖觀</h4>
              <p className="text-gray-700 leading-relaxed">
                加拉太書5:16-25提供了一個獨特的成聖視角：不是通過強烈的道德努力壓制肉體，而是通過「順著聖靈而行」使肉體不得放縱。這個「行」（walk）的比喻很重要：走路是一個持續的、日常的活動，不是單次的道德決定，而是生活方式和傾向。「順著聖靈而行」的具體含義是：讓聖靈的感動和引導主導你的日常選擇——在具體情境中問「聖靈在這個情況下引導我做什麼？」，然後順從這個引導。保羅在v.25進一步說「我們靠聖靈得生，就當靠聖靈行事」——中文「行事」的希臘文是stoicheo，意為「按照正軌行走」，暗示有秩序和方向的生活方式。實踐上，這意味著：通過讀經禱告敏銳於聖靈的聲音，通過與神同行培養對罪的靈敏，通過在肢體中的問責關係保持行走的方向。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">不做「絆腳石」：信徒對弱小肢體的責任</h4>
              <p className="text-gray-700 leading-relaxed">
                羅馬書14-15章和哥林多前書8-10章深入討論了基督徒對「軟弱」肢體的責任——不使他們「絆跌」（skandalizo，skandal的根源）。耶穌在馬太福音18:6-7用非常嚴厲的語言說到絆倒小子的人：「凡使這信我的一個小子跌倒的，倒不如把大磨石拴在這人的頸項上，沉在深海裡。」這個嚴厲性顯示，基督的肢體彼此之間有真實的相互影響和責任。「不要成為撒但的工具」的挑戰包括具體地問：我的哪些行為（即使對我自己是自由的）可能絆倒別人？我使用社交媒體的方式是否在引發他人的嫉妒或比較？我對他人的批評是否使他們更難回到教會？我的生活方式是否讓人看見信仰的吸引力，還是使人對基督徒反感？這些不是要我們活在他人的轄制下，而是要我們以愛為最高原則，考慮我們的自由如何影響他人。
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
              <p className="text-gray-700">「在基督裡的身份認同」——在你日常生活中，你主要是以什麼定義自己？（職業、外貌、他人的評價、過去的失敗、還是「在基督裡是神的兒女」？）這個主要身份認同如何影響你面對試探和失敗時的回應？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">「用信心勝過世界」——在你目前的生活環境中，「世界的模樣」（世俗的價值觀和優先次序）最具體地在哪些方面影響你？你的信心在哪方面最難抵抗這些影響？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">雅各書4:7的順序：「先順服神，然後抵擋魔鬼」——在你抵擋試探的嘗試中，你是先尋求神的同在和力量，還是先靠自己的意志力？這個順序的差異在你的經驗中有多大的實際意義？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">聖靈的九個果子（加拉太書5:22-23）中，哪個最清楚地反映了你目前的靈命狀況（你最有的）？哪個是你最缺乏、最需要成長的？這個缺乏指向什麼更深層的屬靈問題？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">「不要成為撒但的工具」——誠實回顧過去一段時間，你是否有過無意間成為撒但工具的時刻（用言語傷害了肢體、通過不饒恕製造了隔閡、或讓自己的行為成為別人信仰的攔阻）？這個反思讓你感到什麼？如何修復？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">五個挑戰都圍繞著一個核心——活在基督裡已成就的得勝中，而非靠自己的力量爭戰。這個「倚靠基督」的得勝姿態，在你的實際生活中有多真實？是一個神學命題，還是你每天的生活現實？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 建立「在基督裡的身份宣言」</h4>
              <p className="text-gray-700 mb-2">根據聖經，為自己寫一份「在基督裡我是誰」的身份宣言。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>每句以「在基督裡，我是……」開始</li>
                <li>包括：神的兒女、被揀選的、蒙愛的、新造的人、聖靈的殿、君尊的祭司、天上的公民</li>
                <li>每句後面加上聖經引用（如：「神的兒女——約翰福音1:12」）</li>
                <li>每天早晨宣讀這份宣言，作為一天屬靈爭戰的裝備</li>
                <li>當撒但帶來定罪或懷疑時，重讀這份宣言</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 深讀羅馬書6章：向罪死的神學</h4>
              <p className="text-gray-700 mb-2">花一周時間深入研讀羅馬書6:1-14，讓「向罪死」的真理改變你的屬靈爭戰方式。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>第1-4節：我們在洗禮（信心的象徵）中已與基督同死同葬同復活——這是事實，不只是呼召</li>
                <li>第5-10節：我們已經向罪死了，向神活著——以此為真（v.11「也要如此看自己」）</li>
                <li>第12-14節：基於這個事實的命令：「不要讓罪在你們必死的身上作王」</li>
                <li>問自己：當面對一個慣性的罪時，你是說「我不能」（能力問題），還是說「在基督裡我已向這個罪死了，我選擇以此為真」？這個區別如何改變你的應對方式？</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🌱 培育一個聖靈果子的具體計劃</h4>
              <p className="text-gray-700 mb-2">選擇你最需要成長的一個聖靈果子，制定一個具體的「培育計劃」。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>例如：若選擇「忍耐/長久忍受」——識別你最容易失去耐心的情境，在那個情境前禱告，設立具體的暫停和回應策略</li>
                <li>每天結束時評估：今天在這個果子上，我有沒有讓聖靈工作？還是走了自己的路？</li>
                <li>記下進步的跡象，感謝神聖靈的工作</li>
                <li>記下失敗，認罪，但不讓失敗成為放棄的理由</li>
                <li>堅持一個月，然後評估是否有可見的成長</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">✝️ 「使撒但計謀失敗」的日記</h4>
              <p className="text-gray-700 mb-2">開始記錄你在屬靈爭戰中的具體得勝，以增強信心並感謝神。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>每天結束前，問：「今天我有沒有成功地抵擋了某個試探？神如何幫助了我？」</li>
                <li>記下具體的得勝：「今天我沒有對孩子發脾氣，雖然很累——我事先禱告了」</li>
                <li>也記下失敗和從失敗中學到的功課</li>
                <li>定期回顧這個日記，看見長期的成長和神的保守——這會增強你的信心和感恩</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-4 mt-2">
              <h4 className="font-semibold text-green-800 mb-2">🙏 禱告詞</h4>
              <p className="text-gray-700 leading-relaxed italic text-sm">
                「天父，感謝祢，我在基督裡的身份是確定的——不依賴我的感受，也不依賴我的表現。今天，我選擇以神的話語而非感受來看待自己：我是祢的兒女，被揀選、蒙愛、被基督的血贖回。在這個身份的基礎上，我今天順服祢，抵擋那仇敵，知道他必逃跑。讓聖靈的果子在我生命中真實生長——不靠我自己的努力，而靠著那在我裡面運行的祢。使我的每一言每一行，都成為撒但計謀的失敗和基督得勝的見證。奉耶穌名，阿們。」
              </p>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
