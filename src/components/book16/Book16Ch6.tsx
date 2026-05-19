import React from 'react';
import { ChevronDown, ChevronUp, Award, Search, HelpCircle, Check } from 'lucide-react';

export default function Book16Ch6() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">第五章</h1>
        <h2 className="text-xl font-semibold text-gray-700">靈修觀歷史概覽與選讀</h2>
        <p className="text-gray-500 mt-2 text-sm">早期教父 · 天主教傳統 · 基督新教</p>
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
              <h3 className="text-lg font-bold text-purple-700 mb-3">一、早期教父的靈修觀</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                對於早期教父來說，由於他們的生活受到希臘文化影響，所以他們十分關心靈魂的提升。人的靈魂向著上帝的歸回與提升，構成他們靈修觀的主要方向。不過，在他們的靈修作品中，還是可以清楚地看到他們的靈修思想與希臘思想的區別，顯明出基督信仰在他們生命中的根基。
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">尼撒的格列高利（Gregory of Nyssa）</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                在卡帕多西亞三教父中，尼撒的格列高利通常被認為在思辨神學方面是最好的，同時在神秘神學領域也是最有影響力的。格列高利把人的靈性成長過程大致分為三個階段，認為分別跟《箴言》（幼兒期）、《傳道書》（青年期）與《雅歌》（成熟期）對應。這三個時刻分別是：
              </p>
              <div className="bg-purple-50 rounded-lg p-4 space-y-3 mb-3">
                <div>
                  <p className="font-medium text-purple-800">① 光照（phos）</p>
                  <p className="text-gray-700 text-sm">人在被光照中，從虛假的實在轉向真實的實在——上帝。這其中跟淨化與沉思這兩個因素相關。經歷這個時刻最典型的場景就是教會洗禮。</p>
                </div>
                <div>
                  <p className="font-medium text-purple-800">② 雲霧（nephele）</p>
                  <p className="text-gray-700 text-sm">靈魂在日常生活中認識到被造世界的虛空，開始有對真實的實在的沉思，由此在被造世界中看到上帝顯明出來的榮耀，從而具有對理智實在的知識。</p>
                </div>
                <div>
                  <p className="font-medium text-purple-800">③ 黑暗（gnophos）</p>
                  <p className="text-gray-700 text-sm">進入黑暗之中，即面對上帝時，人的沉思已經不再可能。這種「黑暗」並非消極，而是格列高利獨特的「澄明之黑暗」——在那裡人以越來越深的渴望朝向那無法完全認識的上帝前行。</p>
                </div>
              </div>

              <h4 className="font-semibold text-gray-800 mb-2">格列高利論摩西進入密雲（選讀）</h4>
              <div className="bg-gray-50 rounded-lg p-4 mb-3">
                <p className="text-gray-700 text-sm leading-relaxed italic">
                  「確實所有與虔敬對立的都被看作黑暗，躲避黑暗即享有光明。但當靈魂進一步前行，以更大和更完美之注意力關注真理之所是，那麼它越接近於這景象，神性便越顯得其不可見。於是所有表面的現象皆被拋開，其中不僅包括被感覺所把握的，同時還有被心靈自身所看到的，而它則越進越深直到在靈的作用下深入到那不可見和不可認識的，正是在那裡它見到上帝……在朝向那美的路途中引導著我們的願望會隨著靈魂的不斷接近而愈加得到加強。而這就是看見上帝的真實含義：永遠不會讓這個願望得到滿足。」
                </p>
                <p className="text-gray-500 text-xs mt-2">——尼撒的格列高利，《摩西的生平》II, 162-164</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                這裡顯示出，由於格列高利所持的基督信仰對其神秘神學思想的影響，而將他的神秘神學思想與希臘哲學的神秘思想區別開來。受到《尼西亞信經》代表的正統思想影響，他將創造者與被造世界看成兩個截然不同的領域，因此處於被造世界中的靈魂絕無可能越過當中的鴻溝，達到對上帝的清楚認識。這反映出格列高利的神秘主義思想與希臘柏拉圖派的根本不同。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-purple-700 mb-3">希波的奥古斯丁（Augustine of Hippo）</h3>

              <h4 className="font-semibold text-gray-800 mb-2">《懺悔錄》的主題與靈修觀</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們對希波的奥古斯丁的生平和生命成長的瞭解，主要來自他所寫的《懺悔錄》（Confessions）。這本書是以奥古斯丁向上帝禱告的方式寫成的，寫作文體開創了一種向內省察的思考和描述方式。《懺悔錄》的主題就是他這句名言：「你造出我們是為了你，我們的心不安息在你的裡面便不會有安寧。」
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">奥斯提亞神秘時刻（選讀）</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                奥古斯丁在《懺悔錄》第九卷描述了他和母親莫尼加在奥斯提亞（梯伯河口）憑窗對話的神秘時刻，那是在他母親去世前幾天：
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-3">
                <p className="text-gray-700 text-sm leading-relaxed italic">
                  「那天我們兩人在深沉的喜樂中交談著，'忘記背後，而努力面前的'，在你這真理本體的照耀下，我們談到了聖徒的永生之所能是的，那是'眼睛未曾看見，耳朵未曾聽見，人心也未曾想到的'。不過，我們還是貪婪地張開了心靈之口，渴望那'源自於你的生命之泉'的噴湧，力所能及地盡情暢吸，好讓我們在某些方面也能沉思這極為玄奧之問題……被熱烈之愛推動著，我們向著那自有永有者上升，神遊於各層次的事物之上，直達到日月星辰自那裡照耀著這個星球的諸天……我們就這樣談論著他的智慧，渴慕著它，盡著我們所有的心力，刹那間多少悟及到它。然後我們歎息著，離開了'聖靈所結初熟的果子'，回到我們自己言語的語音中。」
                </p>
                <p className="text-gray-500 text-xs mt-2">——奥古斯丁，《懺悔錄》IX, X, 23-25</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-purple-700 mb-3">二、天主教的靈修觀</h3>

              <h4 className="font-semibold text-gray-800 mb-2">伊格納修（Ignatius of Loyola）與《靈性的操練》</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                伊格納修本是一名職業軍人，1521年因腿部受傷而退役。在養傷期間，他讀到聖徒的傳記，開始意識到以軍隊為其典範的那種嚴格紀律對於信仰生活的必要性。1534年，他成立耶穌會，其最重要的著作《靈性的操練》（Spiritual Exercises，又譯作《神操》）提供了一套四周的禱告、冥想和反思操練，旨在深化對基督的委身。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                伊格納修的操練特別引人注意的是對人的想像力的運用——讓靈修操練者通過想像，看到有形的場景，讓抽象的屬靈真理變得具體可感。第一週操練以反省罪惡開始，讓人在上帝面前全面省察自己的生命：「借著使自己謙抑自下的例子反省自己……我看我自己，有如膿瘡，流出如此重大的罪過和令人厭惡的毒物。」
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">阿維拉的特雷莎（Teresa of Ávila）</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                阿維拉的特雷莎（1515-1582，亦稱大德蘭）是加爾默羅修會的修女，她最有名的靈修神學著作是《七寶樓臺》，其中把人的靈魂描述為一個七層的樓臺，以此比喻人在心靈中與上帝相交的七層境界。在第七層樓臺中，作者以神婚的比喻描述靈魂直接經歷上帝，與上帝完全合一的神秘經歷。
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-3">
                <p className="text-gray-700 text-sm leading-relaxed italic">
                  「天主那時在一刹那間便與靈魂交融的這個恩惠，是一個很深湛的秘密，是崇高的聖寵，很強烈的喜慶。我覺得，我主願意在這時光，使用一個超越一切神見與神味的方式，來給靈魂表現天上的光榮……那裡，生命即那萬物得以被造的智慧……我要說這種結合，好比是一隻蠟臺的兩隻蠟燭的結合：它們結合得非常密切，讓我們看到只是一個燭光。然而在以後，人們又能清楚地將這一隻蠟燭與那一隻蠟燭分別開來。」
                </p>
                <p className="text-gray-500 text-xs mt-2">——阿維拉的特雷莎，《七寶樓臺》第七樓臺，第二章</p>
              </div>

              <h4 className="font-semibold text-gray-800 mb-2">十架約翰（John of the Cross）</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                十架約翰（1542-1591）強調，我們從自己內在的體驗，尋求與上帝神秘聯合的過程中，會經歷到主動與被動的黑夜。他最有影響的作品是幾首深深觸及人心靈的詩歌，其中這首默想《雅歌》5:2所寫的詩歌，描述一位孤獨的牧羊人（即基督）因被所愛的人遺忘而痛苦的心境：
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-3">
                <p className="text-gray-700 text-sm leading-relaxed italic">
                  「一位孤單的年輕牧羊人，感到很痛苦；<br />
                  他沒有歡愉，也沒有快慰；<br />
                  因為他時常記掛著那牧羊女，<br />
                  他的心被愛傷透。<br /><br />
                  他哭泣，因為他想到自己已被遺忘。<br />
                  就是那個念頭：本來屬於他、充滿陽光的那一位，已經遺忘他了。<br /><br />
                  過了一段時間，<br />
                  牧羊人爬上一棵樹，展開他光亮的兩臂，被他們掛上去；<br />
                  然後，他死了。他的心被愛傷透。」
                </p>
                <p className="text-gray-500 text-xs mt-2">——十架約翰，《孤獨的牧羊人》</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-purple-700 mb-3">三、基督新教的靈修觀</h3>

              <h4 className="font-semibold text-gray-800 mb-2">新教靈修觀的四個特點</h4>
              <div className="space-y-3">
                <div className="border-l-4 border-purple-400 pl-3">
                  <p className="font-medium text-gray-800">① 重生是靈修的基本前提</p>
                  <p className="text-gray-700 text-sm">作為因信稱義原則的體現，靈修的基本前提是重生，或者從靈修者角度說，已經有某種重生得救的確據。一般意義上的重生（以受洗為標誌，對重生的看重與渴望）是靈修的基本前提。</p>
                </div>
                <div className="border-l-4 border-pink-400 pl-3">
                  <p className="font-medium text-gray-800">② 上帝永遠是主動者</p>
                  <p className="text-gray-700 text-sm">在人與上帝之間在靈性層面上發生位格生命的相交時，雖然有人的責任以及可以預備的方面，涉及靈修方法或各種修道的功夫等，但上帝永遠是主動者。靈修是聖靈（上帝）對人（屬靈）生命的更新、熬煉與修理過程（參約15:2），並非時常在人的內室主動展開，而是上帝借著讓人在日常生活中遭遇到意想不到的事情所發生的。</p>
                </div>
                <div className="border-l-4 border-indigo-400 pl-3">
                  <p className="font-medium text-gray-800">③ 聖經話語是仲介</p>
                  <p className="text-gray-700 text-sm">作為「唯有聖經」原則的體現，人與上帝之間位格生命的相交，乃是以上帝的道或話語作其仲介，至少在默想這個基本階段上明確是對上帝話語的默想。聖靈透過上帝的話語在我們的心靈中工作。</p>
                </div>
                <div className="border-l-4 border-amber-400 pl-3">
                  <p className="font-medium text-gray-800">④ 靈修屬於所有信徒</p>
                  <p className="text-gray-700 text-sm">回到日常生活之中，靈修與每個基督徒有關，屬於人在屬靈生命成長中不能不面對的成聖過程，而非某些人為追求更完全的生命而操練的功夫。改教家的信徒皆祭司原則得以充分地體現出來。</p>
                </div>
              </div>

              <h4 className="font-semibold text-gray-800 mt-4 mb-2">馬丁·路德的信心婚約比喻（選讀）</h4>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 text-sm leading-relaxed italic">
                  「信的意思並非單單指靈魂認識到上帝的話是充滿了一切恩典、自由和聖潔那麼簡單，信還將靈魂與基督聯合，猶如新娘與她的新郎聯合一樣。這樣的婚姻的結果，就是基督與人的靈魂成為一體，因此無論一切事物，是好是壞，他們都共同擁有。凡是基督所擁有的，同時也屬於那相信者的靈魂所擁有；反過來說，凡是人的靈魂所擁有的，同時也屬於基督所擁有。故此，基督所擁有的一切美好和聖潔，現在都歸於人的靈魂。靈魂所擁有的很多邪惡和罪孽，現在都歸於基督。於此我們經歷了愉快的互相交換與掙紮。」
                </p>
                <p className="text-gray-500 text-xs mt-2">——馬丁·路德，《基督徒的自由》（1520）</p>
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
              <h4 className="font-semibold text-gray-800 mb-2">格列高利的「澄明之黑暗」——負面神學（apophatic theology）</h4>
              <p className="text-gray-700 leading-relaxed">
                格列高利發展了所謂的「負面神學」（apophatic theology，又稱否定神學）：即關於上帝，我們只能說祂不是什麼，而無法說祂是什麼，因為人的語言和概念在上帝無限的奧秘面前都是不夠用的。他的「澄明之黑暗」意象表達了一個深刻的洞見：真正的靈性認識不是越來越清晰的理解，而是越來越深的渴望。這與柏拉圖主義的靈魂「歸回理念世界」有根本的不同：格列高利認為靈魂永遠在上帝的美中前行，永不停止——因為上帝是無限的，而被造的靈魂永遠不會「到達」，只會永遠渴望、永遠被吸引前行。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">奥古斯丁的「裡面的人」與奥斯提亞神秘時刻的神學意義</h4>
              <p className="text-gray-700 leading-relaxed">
                奥斯提亞的神秘時刻是基督教靈修神學史上最著名的描述之一。它發生在死亡的前夕（奥古斯丁的母親即將去世），在一個普通的窗邊，通過一場關於永生的談話。這個描述的神學意義在於：（1）神秘時刻不需要特殊的地點或宗教儀式，可以在日常生活中發生；（2）它涉及的是「刹那間」的接觸——不是永久的狀態，人仍需回到日常語言和生活中；（3）它是「與他人一同」發生的（母子共同），而非純粹個人的體驗，提示群體對靈性經驗的重要性。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">天主教與新教靈修觀的關鍵差異</h4>
              <p className="text-gray-700 leading-relaxed">
                天主教傳統（特別是阿維拉的特雷莎和十架約翰）把靈魂與基督的「神婚」（靈婚）當成靈修能夠達到的最高目標，強調人的靈魂向著這個目標不斷上升。宗教改革的修正是：（1）將靈修從「精英信徒的追求」擴展為「所有信徒的成聖過程」；（2）強調上帝的主導性，而非人的功夫；（3）強調以話語（聖經）為仲介，而非直接的神秘體驗。但這不意味著改教家否認靈性經驗的可能，而是將其置於話語和群體的框架下。路德用婚約比喻描述稱義，其實與特雷莎的神婚比喻有深刻的呼應，只是路德將重點放在信心（而非靈修過程）上。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">十架約翰的「孤獨牧羊人」——基督受苦之愛的靈修詩</h4>
              <p className="text-gray-700 leading-relaxed">
                十架約翰的這首詩是以基督的視角寫的：祂是那個「心被愛傷透」的牧羊人，因被所愛的人遺忘而痛苦。最後一幅圖景——牧羊人爬上樹、展開雙臂、被掛上去、死去——顯然是十字架的意象。這首詩的神學洞見是：基督的死不只是法律意義上「代替我們受刑罰」，更是愛者因所愛的人棄絕祂而受苦——是愛的痛苦，而非僅是刑罰的痛苦。這種對受苦之愛的靈性沉思，對今天的信徒仍有深刻的感動力：當我們冷漠、忙碌、忘記祂時，那位牧羊人仍在那棵樹上，心被愛傷透。
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
              '格列高利描述靈魂在黑暗中越走越深、永遠向著上帝前行——這個圖景對你有什麼吸引力？或者有什麼讓你感到不安或難以理解的地方？',
              '奥古斯丁說：「你造出我們是為了你，我們的心不安息在你的裡面便不會有安寧。」你在自己的生命中，有沒有深刻感受到這種「心靈的不安寧」？那種不安寧最終把你帶向了什麼地方？',
              '奥斯提亞神秘時刻發生在日常生活的窗邊，與母親的交談中，在母親即將去世的時候。這個情境讓你對「遇見上帝的方式」有什麼新的思考？',
              '特雷莎用蠟燭、水流、光明來比喻靈魂與上帝的合一。你覺得哪個比喻最能打動你？為什麼？',
              '十架約翰的詩中，那位牧羊人「因被所愛的人遺忘而心被愛傷透」——這幅圖景讓你想到什麼？你有沒有過一段時間，你幾乎忘記了基督，但後來意識到祂一直在那裡等候你？',
              '新教靈修觀的特點之一是：「靈修屬於所有信徒，而非精英的追求。」這個原則如何改變了你對靈修的理解？你有沒有覺得靈修是「特別虔誠的人」才做的事，而不是普通信徒的日常？',
              '在閱讀了這些歷史上的靈修大師之後，哪一位最能觸動你？是格列高利的「黑暗中的渴望」，奥古斯丁的「不安的心靈」，特雷莎的「神婚」，十架約翰的「受苦的愛」，還是路德的「婚約的信心」？為什麼？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 閱讀與默想靈修大師選文</h4>
              <p className="text-gray-700 mb-2">本週選讀一位歷史靈修大師的選文，並進行深度默想：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>選擇本章中你最感興趣的一段選文（格列高利/奥古斯丁/特雷莎/十架約翰/路德）</li>
                <li>慢讀兩遍，第一遍理解，第二遍讓哪句話「停」在你心裡</li>
                <li>把那句話帶入禱告，在安靜中讓它在心中迴響</li>
                <li>在日記中記下：這段選文如何讓你對上帝有新的認識，或對自己的靈修有新的呼召？</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🕯️ 嘗試伊格納修式的「定像」默想</h4>
              <p className="text-gray-700 mb-2">伊格納修的操練強調運用想像力，讓聖經場景變得具體：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>選取約翰福音21:1-19（耶穌在加利利海邊向門徒顯現）</li>
                <li>慢慢讀一遍，然後閉上眼睛，用想像力「進入」那個場景</li>
                <li>想像清晨加利利海邊的景色，炭火的氣味，魚被烤的聲音</li>
                <li>讓復活的耶穌問你「你愛我嗎？」，在那一刻停留，誠實地回答</li>
                <li>記下這次「定像」默想帶給你的感受和感動</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 為自己寫一首靈修詩</h4>
              <p className="text-gray-700 mb-2">受十架約翰的啟發，嘗試用詩歌表達你與基督的關係：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>不需要很精緻，只需要誠實</li>
                <li>你可以從「祂對我」的視角寫（像十架約翰那樣，描述基督的等待或受苦的愛）</li>
                <li>也可以從「我對祂」的視角寫（像奥古斯丁的懺悔錄，描述自己的追尋或逃離）</li>
                <li>寫完後，把它作為一首禱告讀給上帝聽</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🌟 回顧整本書：靈程三階的自我評估</h4>
              <p className="text-gray-700 mb-2">讀完《拾級靈程三階》，花時間做一個整體的靈修評估：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>一階（內室靈修）：你目前的靈修習慣如何？有哪些需要加強的地方？</li>
                <li>二階（日常生活）：你的靈修和日常生活有多大程度的整合？最大的挑戰是什麼？</li>
                <li>三階（終末維度）：你對死亡和將來有多大的真實盼望？這盼望如何影響你的日常態度？</li>
                <li>寫下一個具體的委身：「在接下來的三個月，我願意在________方面更深入地靈修。」</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-green-700 mb-2">🙏 結束禱告詞</h4>
              <p className="text-gray-700 leading-relaxed italic text-sm">
                「主啊，我讀完了這本書，我感謝你在歷史中給了我們如此多的靈修前輩——格列高利、奥古斯丁、特雷莎、十架約翰、路德，他們以不同的方式，都在尋求你、遇見你、渴望你。我也渴望認識你。求你不要讓這本書只停在我的頭腦裡，讓它進入我的生活、我的習慣、我的日常。讓我在內室靈修中遇見你，在日常生活中活出你，在終末盼望中仰望你。讓我這顆不安的心，真正安息在你裡面。因你是良人，又是我主。阿們。」
              </p>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
