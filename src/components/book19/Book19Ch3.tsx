import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book19Ch3() {
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
        <div className="text-sm font-medium text-violet-500 mb-1">主題三</div>
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">💎 聖潔生活的品格</h1>
        <p className="text-gray-500 text-sm">第14-17、36、44-46章</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <div>
              <h3 className="font-bold text-purple-700 text-lg mb-3">第14章：聖潔</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖潔是神最基本的屬性，也是他對信徒最根本的呼召：「那召你們的既是聖潔，你們在一切所行的事上也要聖潔。因為經上記著說：你們要聖潔，因為我是聖潔的。」（彼前1:15-16）。但聖潔究竟是什麼？慕安德列指出一個根本真理：「基督是我們的聖潔。」聖潔不是信徒努力達到的道德標準，而是基督自己的生命在信徒裡面的展現。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖潔「超越潔淨」——潔淨是從罪中被清除，是消極的；聖潔是被分別歸給神、被神充滿，是積極的。一個潔淨的器皿可能是空的；一個聖潔的器皿是為神用的、裝滿神的。信徒的目標不只是「沒有罪」，而是「充滿神」。
              </p>
              <p className="text-gray-700 leading-relaxed">
                聖潔「藉聖靈和信心」成就。聖靈在信徒心中工作，漸漸改變我們的思想、感情和意志，使我們越來越像基督。信心是接受這個工作的通道——我們相信神正在我們裡面工作，並配合聖靈的引導行事。慕安德列說：「你若是等待自己感覺聖潔才去行動，你永遠不會行動。要憑信心行出聖潔，感覺自然隨之而來。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 text-lg mb-3">第15章：公義</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                慕安德列指出稱義與行義之間不可分割的關係。神在基督裡稱我們為義（稱義），這必然帶來我們在生活中行義（成聖）。「行義是成聖的道路」——一個真正被稱義的人，必然渴望在日常生活中行出公義，因為神已把新的心和新的靈放在他裡面。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                公義的標準是「以神的旨意為準則」，而非社會習俗或個人感覺。什麼是公義的？就是符合神本性和神命令的事。這涉及我們對待他人的方式：誠實、公平、慷慨、關懷——在每一個日常關係中活出神的公義。
              </p>
              <p className="text-gray-700 leading-relaxed">
                行義不是因為害怕刑罰，也不是為了賺取恩典，而是因為新生命的本質就是公義的。就如同蘋果樹自然結蘋果，一個在基督裡有新生命的人，自然地傾向公義、厭惡不義。這種公義是從內而外的，不是外在規則的強迫服從，而是內在生命的自然流露。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 text-lg mb-3">第16章：愛</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「愛源於神的愛」——約翰壹書4:19說：「我們愛，因為神先愛我們。」信徒的愛不是自我產生的，而是對神之愛的回應和流露。在得救的那一刻，聖靈就將「神的愛澆灌在我們心裡」（羅5:5）。這是愛的源頭，我們能愛神和愛人，都是因為先被愛了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                愛「憑信心」去愛——有時我們並不感覺有愛，特別是對那些得罪過我們的人。慕安德列說，在感覺不到愛的時候，要憑信心行愛：選擇善待那個人，為他禱告，尋找幫助他的機會。這種信心的行動往往會帶來真實的感情跟隨。愛的標準是「耶穌的愛」——他為仇敵禱告，他洗門徒的腳，他為罪人死。這就是我們被呼召去效法的愛。
              </p>
              <p className="text-gray-700 leading-relaxed">
                「愛必須有行為」——雅各書2:17說：「信心若沒有行為就是死的。」同樣，沒有行為的愛也是死的。慕安德列挑戰信徒：你對教會弟兄姊妹的愛有沒有具體的行動？你有沒有定期地尋求機會幫助有需要的人？你有沒有讓你周圍的人感受到基督的愛？「弟兄們，我們相愛，不要只在言語和舌頭上，總要在行為和誠實上。」（約壹3:18）
              </p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 text-lg mb-3">第17章：謙卑</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                謙卑是一切恩典的土壤。慕安德列說：「沒有謙卑，所有其他的美德都會變質——愛會變成控制，公義會變成自義，熱心會變成驕傲。」謙卑的本質是「忘我舍己」——不是低自尊或自我貶抑，而是真正地從自我中解放出來，以神的榮耀和他人的益處為中心。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「耶穌是謙卑的榜樣」——腓立比書2:5-8描述基督的謙卑：他本有神的形象，卻虛己取了奴僕的形象，順服至死。這種謙卑不是假裝，而是真實的自我捨棄。信徒被呼召效法這種謙卑，視他人比自己重要，不求自己的榮耀。
              </p>
              <p className="text-gray-700 leading-relaxed">
                「信心是謙卑的根基」——真正的謙卑與信心有深刻的聯繫。當信徒真正認識神的偉大和自己的微小，就自然謙卑；當信徒真正信靠神的能力而非自己的能力，就自然謙卑。慕安德列說：「謙卑的人知道神在做工，不需要別人的讚美來確認自己的價值。謙卑和信心的關係：越謙卑，越容易信靠；越信靠，越謙卑。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 text-lg mb-3">第36章：敬畏主</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「敬畏主」是聖經中一個豐富的概念。慕安德列指出有「兩種敬畏」：一種是奴僕對嚴厲主人的恐懼，這種敬畏因完全的愛而被驅逐（約壹4:18）；另一種是兒女對慈愛父親的聖潔崇敬，這種敬畏是智慧的開端，是信仰成熟的標誌。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                敬畏主包含六個向度：「聖潔的崇敬」——對神的偉大和聖潔有真實的感動；「謙卑」——因認識神而認識自己的有限；「警醒」——知道神全知全能，因而在暗處也謹慎行事；「聖潔的勇氣」——因敬畏神而不畏懼人；「深沉的喜樂」——真正認識神的美善而充滿喜樂。
              </p>
              <p className="text-gray-700 leading-relaxed">
                慕安德列說：「敬畏神的人在神面前是謙卑的，但在人面前是有膽量的。」這種敬畏保護信徒不被世俗的恐懼所奴役——不怕失去人的認可，不怕世俗的壓力，不怕死亡——因為他只怕那個值得敬畏的神。箴言14:26說：「敬畏耶和華的，大有倚靠，他的兒女也有避難所。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 text-lg mb-3">第44章：順服</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                順服是基督徒品格的核心之一。「耶穌是順服的榜樣」——他在客西馬尼園禱告：「然而不要照我的意思，只要照你的意思」（太26:39）。這種順服不是被動的屈服，而是在充分理解且有選擇的情況下，主動地選擇神的旨意勝過自己的意願。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                順服「出於信心」——我們順服神，是因為相信他的旨意是最好的，他的計劃是智慧和慈愛的。這種信心使順服變成自願的、喜樂的，而不是勉強的、悲苦的。沒有信心的順服只是外表的服從；有信心的順服是心甘情願地配合神的旨意。
              </p>
              <p className="text-gray-700 leading-relaxed">
                順服「需要聽話」——不只是在大事上順服，也在日常的小事上聽從聖靈的引導。慕安德列指出，很多信徒在大事上能夠順服，但在小事上卻任性而行。真正的順服是在每一個細節上都問：「主，你要我怎樣做？」然後照著去行。這種日常的順服習慣，塑造了一個真正謙遜、可被神使用的器皿。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 text-lg mb-3">第45章：神的旨意</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                神的旨意是「愛與祝福」的表達，不是一系列難以承受的規定。慕安德列挑戰一種常見的誤解——認為神的旨意通常是與我們的喜好相反的。他說：「神的旨意對信徒來說，是他在基督裡預備的最好禮物；拒絕神的旨意，就是拒絕了自己最大的幸福。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「認識神的旨意」需要謙卑、禱告和讀經。神通過聖靈、聖經、環境和弟兄姊妹來引導我們。沒有一個通道是完全充足的，但這四者一起印證，往往能帶給信徒清晰的方向。謙卑是認識旨意的前提——一個已有定見的人，不容易聽到神的聲音。
              </p>
              <p className="text-gray-700 leading-relaxed">
                「愛慕神的旨意」是屬靈成熟的標誌。初信者往往問：「神的旨意是什麼？」成熟的信徒漸漸問：「我如何愛慕並渴望神的旨意？」當我們與神的關係深化，我們的意願就越來越與神的旨意吻合——不是因為我們壓制自己的意願，而是因為我們的心被改變了，我們的喜好和神的旨意越來越一致。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 text-lg mb-3">第46章：捨己</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                耶穌說：「若有人要跟從我，就當捨己，背起他的十字架來跟從我。」（太16:24）慕安德列詳細分析了捨己包含的五個層面：
              </p>
              <ul className="space-y-2 text-gray-700 ml-4 mb-3">
                <li><span className="font-semibold text-purple-700">捨棄自己的聰明：</span>不倚靠自己的理性和判斷，在一切事上尋求神的智慧。</li>
                <li><span className="font-semibold text-purple-700">捨棄自己的意願：</span>不堅持「我的方式」，學習說「照你的旨意」。</li>
                <li><span className="font-semibold text-purple-700">捨棄對榮耀的追求：</span>不尋求人的讚美和認可，只尋求神的喜悅。</li>
                <li><span className="font-semibold text-purple-700">捨棄對能力的倚靠：</span>承認自己的無能，讓神的能力在軟弱中顯得完全。</li>
                <li><span className="font-semibold text-purple-700">捨棄自己的嗜好：</span>不讓娛樂、享受、安逸成為優先，而以事奉神為人生中心。</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                捨己不是自我毀滅，而是自我轉化——舊我消退，基督的生命增長。慕安德列引用施洗約翰的話：「他必興旺，我必衰微。」（約3:30）這是每一個真正跟隨基督的人心中的方向。
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
            <p className="text-gray-700">聖潔不是達到的道德標準，而是基督生命的展現；信徒的聖潔是由內而外的，源於與基督的生命聯合。</p>
          </div>
          <div className="flex gap-3">
            <span className="text-teal-600 font-bold flex-shrink-0">2.</span>
            <p className="text-gray-700">公義、愛、謙卑都是新生命的自然流露，而非外在規則的服從；真實的品格改變是從心裡開始的。</p>
          </div>
          <div className="flex gap-3">
            <span className="text-teal-600 font-bold flex-shrink-0">3.</span>
            <p className="text-gray-700">敬畏主不是奴役式的恐懼，而是兒女式的崇敬——這種敬畏使信徒謙卑、警醒，同時充滿喜樂和勇氣。</p>
          </div>
          <div className="flex gap-3">
            <span className="text-teal-600 font-bold flex-shrink-0">4.</span>
            <p className="text-gray-700">順服和捨己不是無奈的屈服，而是因信心和愛而主動選擇神的旨意；隨著信仰成熟，我們的意願越來越與神同步。</p>
          </div>
          <div className="flex gap-3">
            <span className="text-teal-600 font-bold flex-shrink-0">5.</span>
            <p className="text-gray-700">捨己包含五個向度（聰明、意願、榮耀、能力、嗜好），是基督徒生命最深刻的轉化——「他必興旺，我必衰微」。</p>
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
              <h4 className="font-semibold text-indigo-700 mb-2">聖潔的兩種誤解</h4>
              <p className="text-gray-700 leading-relaxed">
                歷史上對聖潔有兩種主要誤解：一是「完美主義」，認為信徒可以在今生達到完全無罪的境界；另一是「實用主義」，認為聖潔只是道德行為的改進，靠努力和紀律即可達到。慕安德列的立場介於兩者之間：他相信在今生可以有實質性的聖潔成長，但也承認信徒在今生不會達到完全；他強調聖潔是神的工作，但也要求信徒的積極配合。真正的聖潔是靠神的恩典、透過信心接受的，同時信徒也需要努力操練。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">謙卑：基督教最獨特的美德</h4>
              <p className="text-gray-700 leading-relaxed">
                C.S.路易斯在《返璞歸真》中說：「謙卑不是低估自己，而是少想自己。」這與慕安德列的教導相呼應。在古希臘文化中，謙卑（tapeinophrosyne）是一個貶義詞，意思是低賤、卑微。是基督教把謙卑提升為最高的美德，因為基督自己的捨己成了最偉大的榜樣。在一個強調自我表現和自我推銷的現代文化中，慕安德列的謙卑教導尤其具有挑戰性和反文化的意義。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">順服與自由的關係</h4>
              <p className="text-gray-700 leading-relaxed">
                表面上看，順服和自由似乎是矛盾的。但慕安德列（以及聖奧古斯丁、加爾文等神學家）指出：真正的自由不是「可以做任何事」，而是「能夠做自己真正應當做的事」。一個吸毒成癮的人在形式上是「自由」的，但實際上是被成癮所奴役。一個順服神的信徒，在形式上放棄了自主，但實際上獲得了真正的自由——從罪的奴役、從恐懼、從自我中心中得釋放。順服神的旨意，反而帶來最深刻的自由和滿足。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">捨己的現代意涵</h4>
              <p className="text-gray-700 leading-relaxed">
                在自我實現和個人主義盛行的當代，「捨己」的呼召聽起來尤其反文化。心理學常常強調自我接納、自我實現、自我邊界，這些本身並無問題，但如果成為信仰的核心，就會產生問題。慕安德列的捨己不是心理健康的對立面，而是指在心理上健康的基礎上，進一步選擇以神和他人的益處為中心。真正捨己的人，往往有最強健的心理——因為他們不再為自我防衛消耗能量，可以全力投入愛神愛人的使命。
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
              <p className="text-gray-700">你對「聖潔」的理解更偏向道德層面（不做壞事）還是關係層面（被分別歸神）？這兩種理解如何影響你追求聖潔的動力和方式？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">謙卑對你來說最困難的是哪個方面——接受批評、讓他人得榮耀，還是承認自己的錯誤？你認為背後的原因是什麼？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">你有沒有感受過「敬畏主」和「世俗恐懼」之間的衝突？在什麼情況下，敬畏主給了你勇氣去抵抗社會壓力？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">在捨己的五個層面中（聰明、意願、榮耀、能力、嗜好），你認為自己最難捨棄的是哪一個？這反映了你最深層的依靠是什麼？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">你對神旨意的態度是「勉強接受」還是「主動渴望」？有什麼具體的事例顯示這種態度正在改變或需要改變？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">慕安德列說愛必須有行為——你對身邊有需要的人最近有什麼具體的愛的行動？若沒有，是什麼阻礙了你？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">💎 謙卑操練</h4>
              <p className="text-gray-700 mb-2">這週選擇三個具體的謙卑行動：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>主動讓別人得到你本可以得到的讚美</li>
                <li>在某個爭論中，先承認對方有道理的部分</li>
                <li>向一個你不習慣道謝的人表達感謝</li>
                <li>在禱告中感謝神讓你看到自己的不足</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 敬畏主的默想</h4>
              <p className="text-gray-700 mb-2">每天選一段描述神偉大的聖經段落，用十分鐘默想：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>以賽亞書6章（先知的異象：「聖哉，聖哉，聖哉！」）</li>
                <li>約伯記38-39章（神的創造大能）</li>
                <li>詩篇139篇（神的全知全在）</li>
                <li>默想後寫下：這讓我如何看待自己和今天的困難？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 愛的行動計劃</h4>
              <p className="text-gray-700 mb-2">選定一個具體的對象（家人、同事、鄰居），本週為他/她做一件具體的愛的事：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>主動問候並真心傾聽他/她的需要</li>
                <li>提供具體的幫助（時間、技能、物資）</li>
                <li>每天為他/她禱告，求神祝福他/她</li>
                <li>行動後，注意自己在這個過程中心情的變化</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4 mt-2">
              <p className="text-green-800 italic text-sm leading-relaxed">
                「主耶穌，你是聖潔、公義、愛和謙卑的完美榜樣。我承認自己在這些品格上的缺乏，也承認靠自己無法達到你的標準。求你藉著聖靈在我裡面工作，使你的品格在我生命中逐漸彰顯。讓我學習捨己，說『他必興旺，我必衰微』。阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
