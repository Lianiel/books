import React from 'react';
import { ChevronDown, ChevronUp, Users, Search, HelpCircle, Check } from 'lucide-react';

export default function Book16Ch3() {
  const [expanded, setExpanded] = React.useState<Record<string, boolean>>({
    content: true,
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">第二章</h1>
        <h2 className="text-xl font-semibold text-gray-700">二階：日常生活中的靈修</h2>
        <p className="text-gray-500 mt-2 text-sm">委身教會 · 日常敬虔 · 清心致志</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <div>
              <h3 className="text-lg font-bold text-purple-700 mb-3">二階操練的框架</h3>
              <p className="text-gray-700 leading-relaxed">
                如果說一階操練的重點在於心靈在基督裡的呼吸和自由，那麼二階操練就集中在心靈作為位格生命核心所發揮的作用，即心靈帶動心智（思想）、意志（情感），最終達到行為。要做到這種透過心靈達到行為的引導秩序，涉及三方面形成的背景框架：（1）人際關係的更新，在愛人如己中經歷上帝；（2）內在的時間框架，在什麼時間做什麼事；（3）專心地投入日常生活事務，在做每件事的過程中經歷上帝的同在。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-purple-700 mb-3">一、委身教會的生活</h3>

              <h4 className="font-semibold text-gray-800 mb-2">對委身的理解</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                中世紀對修道運動最有影響的《本篤會規》（Rule of St. Benedict）在開篇就強調修道生活的兩個關鍵因素：委身與順服。委身就是委身於所加入的群體，願意終生留在那裡。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經為我們指出一條重要途徑：「持定元首。全身既然靠著他，筋節得以相助聯絡，就因上帝大得長進。」（西2:19）在基督裡就是在教會裡——教會是基督的身體，委身教會就是持定元首最基本的做法。不少信徒以為聖靈只在個人生命裡工作，不委身教會聖靈也自然內住。其實，聖靈進入我們個人生命裡工作，乃是因為我們對教會的委身，成為基督身體的一部分。
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">委身的四個層面</h4>
              <div className="bg-purple-50 rounded-lg p-4 space-y-2 mb-3">
                <div className="flex gap-2"><span className="text-purple-600 font-bold">①</span><p className="text-gray-700">規律地參加教會的活動（主日敬拜、周間小組等）</p></div>
                <div className="flex gap-2"><span className="text-purple-600 font-bold">②</span><p className="text-gray-700">比較委身地參與教會某一項服侍</p></div>
                <div className="flex gap-2"><span className="text-purple-600 font-bold">③</span><p className="text-gray-700">蒙召在教會做某個層面的帶領性服侍</p></div>
                <div className="flex gap-2"><span className="text-purple-600 font-bold">④</span><p className="text-gray-700">不僅在服侍上，同時自覺地在信約或教會理念上委身教會</p></div>
              </div>

              <h4 className="font-semibold text-gray-800 mb-2">委身教會的四個操練</h4>
              <div className="space-y-3">
                <div className="border-l-4 border-purple-400 pl-3">
                  <p className="font-medium text-gray-800">在教會操練順服</p>
                  <p className="text-gray-700 text-sm leading-relaxed">只有透過教會的福音宣講，我們才能認識到上帝話語的力量與權柄。有教會秩序才有彼此成為肢體的關係。順服，是在新生命成長過程中需要學習的重要功課。</p>
                </div>
                <div className="border-l-4 border-pink-400 pl-3">
                  <p className="font-medium text-gray-800">在教會學習承擔責任</p>
                  <p className="text-gray-700 text-sm leading-relaxed">把自己擺在基督的手上，在他擺放我們的位置，忠心地承擔託付於我們的責任。如果我們勇於承擔，那麼就會被上帝使用，在永恆中蒙他的紀念。</p>
                </div>
                <div className="border-l-4 border-indigo-400 pl-3">
                  <p className="font-medium text-gray-800">從服侍他人學習舍己的愛</p>
                  <p className="text-gray-700 text-sm leading-relaxed">加爾文曾將教會比喻為學校——每個信徒都需要在這所學校裡學習，接受操練，才能過與基督信仰相稱的生活。在團契關係中學習服侍他人、在愛中接納他人，同時學習舍己、寬恕和接納。</p>
                </div>
                <div className="border-l-4 border-amber-400 pl-3">
                  <p className="font-medium text-gray-800">當教會遇到危機，挑戰我們是否真認識基督</p>
                  <p className="text-gray-700 text-sm leading-relaxed">在委身教會後，當教會發生危機，過去所信任的帶領者或同伴的問題顯露出來，這將挑戰我們對教會的神聖性、對基督作為教會元首的認識。繼續委身，是開始相信：無論教會的問題有多大，基督仍在這裡掌權。</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-purple-700 mb-3">二、日常生活中的敬虔</h3>

              <h4 className="font-semibold text-gray-800 mb-2">勞威廉的挑戰</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                英國清教思想家勞威廉（William Law）在《敬虔與聖潔生活的嚴肅呼召》一書中，向讀者提出一個重要問題：何謂真正的敬虔？他描述了一幅令人警醒的景象：「您看見他們在靈修禱告的時間和地點遵守規矩，而教會崇拜一結束，他們就與那些鮮於踏足教會的人毫無二致。他們的生活方式、花錢度日的方式，他們的情感、娛樂、工作和消遣全都與世人無異。」在他看來，這不是基督信仰中的敬虔，而是「一個異教徒的人生以基督徒的禱告為點綴」。
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">凡事討上帝喜悅的意願</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                敬虔是一種禱告生活與日常事務完全一致的體現：「除非我們生活中一切日常行為都向上帝而活，否則就不能說我們向上帝而活。」勞威廉直指原因：人不願意凡事都討上帝的喜悅。用加爾文的話來說，就是人的生命中還沒有那種對上帝的敬畏或愛紮根於其中。保羅的話在此很有意義：「我們並不是欠肉體的債，去順從肉體活著。」（羅8:12）問題不在於軟弱，而在於是否願意。
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">建立裡外一致的生活秩序</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                加爾文論敬虔說：「我所說的『敬虔』是，我們經歷神的恩惠，並因這知識產生我們心裡對神的敬畏和愛。」敬畏，是即便人還不夠甘心樂意，但出於敬畏仍會有順服的態度；愛，是人甘心樂意地按他的美意，在任何事上榮耀他。勞威廉的結論：「敬虔意味著擺上整個生命，全然獻給上帝……凡事都服侍上帝，凡事都奉上帝的名，凡事都榮耀上帝，平時生活盡都成為敬虔。」
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-purple-700 mb-3">三、生活中的靈修操練</h3>

              <h4 className="font-semibold text-gray-800 mb-2">敬虔地使用時間：三個禱告時段</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                要養成在時間上的敬虔習慣，需要操練每天騰出固定的三個時段來禱告：早上靈修時的禱告（三四十分鐘），中午或下午的默想和禱告（二三十分鐘），晚上睡覺之前的讀經和禱告（二十分鐘）。這三個時段的禱告就會撐起我們每天生活的時間秩序。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                與上帝相遇是我們使用時間的最高價值取向。「有一件事，我曾求耶和華，我仍要尋求：就是一生一世住在耶和華的殿中，瞻仰他的榮美。」（詩27:4）作者曾在2004年芬蘭進修時，有三天與主相處的美好時光。雖然工作計畫安排得很滿，但聖靈感動他放下手上的工作，借著唱詩、默想來經歷與神相處的美好。這一小段時光對隨後幾年教會服侍而言極為重要，無論遭遇多少艱難，每一次回想起當時的相遇，都是極大的鼓勵。
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">職場生活與靈修：西3:22-24的三個視角</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅說：「你們作僕人的，要凡事聽從你們肉身的主人，不要只在眼前侍奉，像是討人喜歡的，總要存心誠實敬畏主。無論作什麼，都要從心裡作，像是給主作的，不是給人作的。」（西3:22-24）從這段經文可以看到三個層面：
              </p>
              <div className="bg-blue-50 rounded-lg p-4 space-y-3">
                <div>
                  <p className="font-medium text-blue-800">① 工作的首要目標是服侍人</p>
                  <p className="text-gray-700 text-sm">「像是給主作的，不是給人作的」——意思是把每個人都當作主人一樣去服侍。這話在當時是何等革命性的言論，從根本上改變了人以往對工作的看法：工作不再是咒詛，而是對主基督的服侍。</p>
                </div>
                <div>
                  <p className="font-medium text-blue-800">② 全心全意地投入工作</p>
                  <p className="text-gray-700 text-sm">工作的首要態度是要從心裡做，全身心地投入，不是為了討人的喜歡，或只為了得到某種報償。能夠從內心行出來，是因為有來自上帝的呼召。</p>
                </div>
                <div>
                  <p className="font-medium text-blue-800">③ 全時間的工作觀</p>
                  <p className="text-gray-700 text-sm">工作是我們從上帝那裡領受的三份全職工作，即團契、建立群體與共同創造。把信徒在家庭、教會和職場中的服侍，都視為對主基督的服侍，需要相互協調，在日常生活中變為一體。</p>
                </div>
              </div>

              <h4 className="font-semibold text-gray-800 mt-4 mb-2">業餘生活與靈修：對付自義之心</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                當我們感到疲乏、壓力大的時候，只要還沒到走投無路的地步，就不會主動地、自然地來到耶穌面前，而是下意識地轉向那些看似更輕鬆的事情上。越疲乏、壓力越大，就越想沉浸於手機、遊戲或影視之中——這形成惡性循環。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                各種娛樂活動可能讓疲勞的身體得到休息，卻無法讓我們的心靈得到安息。從靈修生活的角度來看，重要的不是應否看電影，而是在於我們當時的心態——我們裡面是否有一顆自義的心。主耶穌基督說「我心裡柔和謙卑」（太11:29），這是我們要向他學習的樣式。
              </p>
              <p className="text-gray-700 leading-relaxed">
                最好的放鬆方法：先克服打遊戲、看手機的衝動，讓自己安靜下來，若條件允許，放聲唱兩三首詩歌，最好是那種不用看詩歌本就可以背唱下來的短詩歌，因為這些詩歌能特別反映當時的心聲。在唱詩和禱告後，再看自己可以做些什麼事放鬆自己。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-purple-700 mb-3">四、清心致力於一事</h3>

              <h4 className="font-semibold text-gray-800 mb-2">生命的活力來自基督的呼召</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                「殷勤不可懶惰。要心裡火熱，常常服侍主。」（羅12:11）保羅這句話中的懶惰不是指時間表排得不滿，而是我們裡面缺少火熱。「忙碌的懶惰」表現為：生命缺少激情，沒有生命的活力；活在被他人安排的生活中，追逐著各種「最後期限」；活在哲學家所說的「常人」模式中，他人怎樣生活，我就怎樣生活。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                加爾文這樣描述上帝呼召人的意義：「神安排每一個人在自己的崗位上有其當盡的本分，也為了避免任何人越過自己所當盡的本分，神稱這些不同的生活方式為『呼召』。因此，每一個人都有神吩咐他的生活方式。這生活方式是某種哨崗，免得人一生漫無目的地度日。」
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">向著人生的標竿直跑</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                「忘記背後，努力面前的」（腓3:13），「努力面前」的意思是「好像在比賽時全力伸展」。在賽跑時，我們確實顧不了兩邊和背後，一心向著終點直跑；特別是快到終點時，會全身竭力向前傾。「標竿」（腓3:14）是指「認識基督，曉得他復活的大能……得以從死裡復活」，是具有終末意義的目標。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                做事的根本動力並非來自達到事工目標的本身，而是在於整個做事的過程，「要得上帝在基督耶穌裡從上面召我來得的獎賞」（腓3:14）。事情的成敗固然重要，但在基督裡的安慰與獎賞才是最根本的動力。
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">專注一事的具體操練</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們時常參與太多事務，但成長的秘訣卻在於全神貫注於一件事上。耶穌對馬大說：「你為許多的事思慮煩擾，但是不可少的只有一件。」（路10:41-42）我們可以在日常生活中所做的每一件事上操練清心致力於一事：吃飯時單單吃飯，擦地板時全神貫注地擦地板，走路時專心一意地走路。
              </p>
              <p className="text-gray-700 leading-relaxed">
                基督問彼得：「你愛我比這些更深嗎？」（約21:15）如果應用在今天，主的意思就是：「你若愛我，就去做我喜悅你做的事。」這種對基督的愛是我們心靈火熱的源頭。具體的靈修操練方法就是：專心地完成生活中的每一件事。做飯時專心做飯，吃飯時專心吃飯，走路時專心走路，工作時全心地工作。
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
              <h4 className="font-semibold text-gray-800 mb-2">教會作為基督身體——教外沒有救恩？</h4>
              <p className="text-gray-700 leading-relaxed">
                「教會傳統指出，教會之外沒有拯救。」這句話在當代語境下可以理解為：在教會之外沒有生命的成長，不會讓人經歷生命根基的轉變，凡事持定元首基督。這並非說不屬教會的人不可能得救，而是說生命的成長需要在基督的有形身體（教會）中發生。聖靈在這身體裡按照自己的意思使用各肢體，首先在這身體中運行工作（相對個人而言），因為這身體是他的殿。這一教義洞見深刻揭示了個人主義靈修的局限。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">加爾文論教會是學校：靈修操練的場所</h4>
              <p className="text-gray-700 leading-relaxed">
                加爾文在《基督教要義》（IV, 1, 4）中將教會比喻為學校，每個信徒都需要在這所學校裡學習，接受操練，才能在世上過與基督信仰相稱的生活。這個比喻今天仍然深刻：教會不是一群「已經完全的人」的集合，而是一所「操練」的場所。在那裡我們學習順服（對難相處的人學習謙遜）、承擔責任（不只做我喜歡的事）、舍己的愛（在愛中接納我不喜歡的人）。真正的靈命成長不能離開這個群體環境。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">勞威廉的「裡外一致」——現代敬虔觀的分裂問題</h4>
              <p className="text-gray-700 leading-relaxed">
                勞威廉在18世紀就已觀察到現代敬虔觀的核心問題：靈修的「裡」（個人內在靈性）與「外」（日常生活行為）出現分裂。在啟蒙運動的影響下，靈性成了個人私事，公共行為則按社會規範而活。結果就是：人可以禱告中痛哭流涕，轉眼又做同樣的事；可以在教會崇拜中熱情敬拜，出了教會就與世人無異。這種「人格分裂」不是基督信仰應有的面貌。真正的敬虔是「禱告即生活，生活即禱告」。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「忙碌的懶惰」——現代人的屬靈危機</h4>
              <p className="text-gray-700 leading-relaxed">
                中世紀將懶惰（Acedia）視為七宗大罪之一，其定義包括做「太多」工作和做「太少」工作兩種情況。在今天城市生活中，「忙碌的懶惰」特別顯著：人的時間確實被工作塞滿，但卻沒有多少主動性，不清楚是為主而做還是為自己或老闆做的；沒有生命的呼召，沒有服侍的目標，人亦會變得越來越懶惰——即使外在上看起來極為忙碌。有了服侍主的目標，才能表現出在基督裡的新生命之活力。
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
            {[
              '當你思考自己對教會的「委身」，目前處於四個層次的哪個層面？是什麼原因讓你停留在這個層面，而沒有更深入地委身？',
              '你在教會中有沒有遇過令你失望的事（帶領者出問題、教會紛爭等）？那次經歷如何挑戰或加深了你對「基督仍在教會中掌權」的認識？',
              '勞威廉說：「真正的問題不在於我們雖願意成為良善卻由於軟弱達不到，而是我們不夠敬虔，不願意凡事都討上帝喜悅。」你覺得這句話在你生命中有多少真實性？哪件具體的事是你「知道但不願意做」的？',
              '你每天花多少時間在手機、娛樂、工作上？與花在禱告、靈修、與上帝同在的時間相比，這個比例反映出什麼？',
              '你在職場中是否能做到「凡事像是給主作的」？你覺得最大的挑戰是什麼——是工作本身的性質，還是內心的態度？',
              '「吃飯時單單吃飯」——你有多久沒有放下手機、不邊看東西邊吃飯了？「清心致志」這個操練對你來說感覺如何？',
              '你目前生命中有沒有一個「服侍的呼召」或「工作的呼召」——一個讓你感到是上帝放在你心裡的目標？如果有，你是否在向著那個目標直跑？如果沒有，你是否在尋求？',
            ].map((q, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0">{i + 1}.</span>
                <p className="text-gray-700 leading-relaxed">{q}</p>
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
          <div className="p-5 bg-white space-y-5">

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🏠 委身教會的具體步驟</h4>
              <p className="text-gray-700 mb-2">本週評估並加深你在教會中的委身：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>對照四個委身層次，判斷自己目前在哪個層次</li>
                <li>主動接觸教會中你不熟悉的肢體，嘗試建立真實的關係</li>
                <li>如果還沒有參與服侍，本週向傳道人或小組長詢問一個可以參與的服侍機會</li>
                <li>如果有過讓你失望或傷害的教會經歷，花時間禱告，把那個傷口交給基督</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">⏰ 建立三個固定禱告時段</h4>
              <p className="text-gray-700 mb-2">本週開始在日記或手機日程中設定三個固定禱告時段：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>早晨（起床後）：15-40分鐘靈修讀經與禱告</li>
                <li>中午（午休時）：10-20分鐘默想和短禱</li>
                <li>晚上（睡前）：10-20分鐘感恩與省察禱告</li>
                <li>堅持一週，觀察這三個時段如何影響你那天的心態與行事</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">💼 職場靈修實驗</h4>
              <p className="text-gray-700 mb-2">本週在職場選擇一項具體的操練：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>上班前花5分鐘禱告，把當天的工作「交」給主，請求他讓你以服侍人的心工作</li>
                <li>在與某個同事互動時，有意識地把對方當作「主人」一樣服侍</li>
                <li>在工作中遇到不情願做的事時，默禱：「主，我把這件事作為服侍你的禮物」</li>
                <li>下班後記下：今天哪一刻感受到「從心裡作」？哪一刻仍是「表面功夫」？</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 「清心致志」挑戰——一週的專注操練</h4>
              <p className="text-gray-700 mb-2">本週嘗試以下具體操練：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>吃一頓飯時完全放下手機，單單吃飯，注意食物的味道</li>
                <li>做一件家務（洗碗、打掃）時，全神貫注，把它當作禱告的時間</li>
                <li>散步時不帶耳機，讓心靈有空間「呼吸」</li>
                <li>每天晚上問自己：「今天哪件事我真的全心投入了？哪件事我只是機械地做完？」</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告詞</h4>
              <p className="text-gray-700 leading-relaxed italic text-sm">
                「主耶穌，我承認我常常把靈修與生活分開——在禱告中你是我的主，但在辦公室、廚房、手機前，我忘了你。我願意讓你的主權延伸到每一個角落。求你讓我在委身教會中真實地遇見你；求你讓我在每天的工作中，真的是為你而做；求你讓我在業餘時光中，先來到你面前，而不是先拿起手機。你的軛是容易的，你的擔子是輕省的。我願意與你同負一軛。阿們。」
              </p>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
