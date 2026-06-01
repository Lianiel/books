import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book21Ch4() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    exploration: true,
    questions: true,
    practice: true,
  });
  const toggle = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">第四章</h1>
        <h2 className="text-xl font-semibold text-gray-700">生活的準則——十誡</h2>
        <p className="text-gray-500 text-sm mt-1">神給人生的行為藍圖，16個主題</p>
      </div>

      {/* 十誡文本 */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-6 mb-6">
        <h3 className="font-bold text-amber-800 mb-3 text-center">十誡（出埃及記20:1-17）</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
          {[
            '第一誡：除我以外，你不可有別的神',
            '第二誡：不可為自己雕刻偶像',
            '第三誡：不可妄稱耶和華你神的名',
            '第四誡：當記念安息日，守為聖日',
            '第五誡：當孝敬父母',
            '第六誡：不可殺人',
            '第七誡：不可姦淫',
            '第八誡：不可偷盜',
            '第九誡：不可作假見證陷害人',
            '第十誡：不可貪戀人的房屋、妻子及財物',
          ].map((c, i) => (
            <div key={i} className="bg-white rounded px-3 py-2 border border-amber-100">{c}</div>
          ))}
        </div>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <div>
              <h3 className="font-bold text-purple-700 mb-2">一、十誡：行為的藍圖，不是生命的枷鎖</h3>
              <p className="text-gray-700 leading-relaxed">許多人聽到十誡，第一個反應是「限制」和「禁止」——一串不能做的事。巴刻用一個生動的比喻糾正了這個誤解：他把十誡比作汽車的使用說明書。如果你按照製造商的指示駕駛和保養汽車，汽車就能充分發揮性能，帶你安全地到達目的地；如果你忽視說明書，強行按自己的方式操作，汽車就會出問題，甚至造成危險。十誡是神作為我們生命「製造商」給我們的使用說明：如此生活，你才能充分發揮人的潛能，建立最豐盛的人生。</p>
              <p className="text-gray-700 leading-relaxed mt-2">更重要的是，十誡的前言是：「我是耶和華你的神，曾將你從埃及地、為奴之家領出來」（出20:2）。神頒佈十誡，不是為了讓以色列人賺取祂的喜愛，而是在救贖的恩典已成就之後，告訴得救的人如何活出自由的生命。順序很重要：先是救贖，然後是誡命。十誡不是得救的條件，而是得救者的生活指引。這個理解徹底改變了人對律法的態度——從「我必須遵守才能得救」到「我因感恩而樂意遵守」。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">二、「我和你」——位格關係的基礎</h3>
              <p className="text-gray-700 leading-relaxed">十誡在結構上是一個「我—你」的對話：「我是耶和華你的神……你不可……」。這不是法典，不是抽象的道德哲學，而是位格的神向位格的人說話。神用「你」稱呼每一個以色列人，表示祂知道每一個人，祂對每一個人都有個人性的呼召。這種「我—你」的關係，是猶太哲學家布伯（Martin Buber）所強調的：真正的人際關係不是「我—它」（把對方當物件使用），而是「我—你」（真實地認識和被認識）。十誡建立的，是神與人之間最深的「我—你」關係。</p>
              <p className="text-gray-700 leading-relaxed mt-2">當我們遵守十誡，不是在博取神的喜愛，而是在回應祂對我們的愛——就像兒女因愛父母而願意遵守家規。一個真正愛父親的孩子，不需要父親說「你不可以打你的兄弟」，因為愛本身已排除了這種行為的可能性。然而對於愛尚未完全的人（我們都是如此），誡命提供了清楚的界限，提醒我們哪些行為與愛的關係相符、哪些不符。誡命是愛的具體形狀。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">三、律法與愛——不是對立，而是盟友</h3>
              <p className="text-gray-700 leading-relaxed">1960年代，神學家弗萊徹（Joseph Fletcher）提出「處境倫理」（situational ethics）：認為在任何處境下，只要動機是愛，就沒有絕對的對錯，情況決定一切。這個觀點表面上充滿溫情，實際上卻移除了道德的客觀根基。巴刻指出：愛是盲目的，需要律法作眼睛。在沒有客觀標準的情況下，「愛」很容易被自我欺騙所操縱——人可以用「我是出於愛」來為各種不道德的行為辯護。</p>
              <p className="text-gray-700 leading-relaxed mt-2">另一方面，遵行律法也需要愛作動力，否則就成了冷酷的法利賽主義。耶穌把十誡濃縮在兩條誡命中：「你要盡心、盡性、盡意愛主你的神」（對神）和「要愛鄰舍如同自己」（對人）（馬太22:37-39）。祂說：「這兩條誡命是律法和先知一切道理的總綱。」愛和律法不是對立的，而是互相需要的盟友：愛提供動力，律法提供方向；律法說明愛的具體表現，愛賦予律法生命和意義。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">四、前四誡：關乎對神的責任</h3>
              <p className="text-gray-700 leading-relaxed">第一誡（只敬拜神）直接面對人心最根本的問題：誰是你生命的中心？神要的不是儀式上的崇拜，而是整個人的委身和信靠——「除我以外，不可有別的神」。這個「別的神」不只是其他宗教的神明，而是任何與神競爭我們忠誠的事物。第二誡（不拜偶像）是第一誡的延伸：不只禁止崇拜假神，也禁止用我們自己製造的形像來「代表」真神。因為人造的形像只能是神的一部分，不能捕捉祂的全部——任何對神的圖像化都會扭曲我們對祂的認識，最終我們敬拜的其實是我們的想像，而非真實的神。</p>
              <p className="text-gray-700 leading-relaxed mt-2">第三誡（不妄稱神名）的深度超過許多人的理解。「妄稱」不只是發誓或罵人時用神的名字，而是一切「把神的名掛在嘴邊卻不真誠」的行為——包括虛偽的禱告（說的話跟心裡想的不一樣）、借用神的名字說謊、用宗教外衣掩蓋惡行。第四誡（守安息日）的核心是：時間屬於神，我們每週用一天的停息承認我們的生命不靠自己的努力維持，而是倚靠神的供應。安息日也是對受造物的肯定：連神在創造完成後也「停下來享受」（創2:2-3），我們被造的人更需要這樣的節奏。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">五、後六誡：關乎對人的責任</h3>
              <p className="text-gray-700 leading-relaxed">第五誡（孝敬父母）不只是對孩子的命令，而是對一切人際關係中「權柄」的承認。孝敬父母意味著承認父母帶給我們生命，承認我們是在他人的扶持下成長的——這個謙遜的心態是所有健康人際關係的基礎。新約中保羅延伸這個誡命，指僱主、老師、政府官員也在一定程度上代表著應當被尊重的「父母型」權柄。第六誡（不可殺人）根基在創世記1:27：人是按神的形像被造的，因此每一條生命都有神聖的尊嚴，不可被隨意奪取。耶穌在登山寶訓中把這誡命的範圍擴大到心裡的仇恨和輕蔑（太5:21-22）——謀殺往往始於心中長期的憤怒。</p>
              <p className="text-gray-700 leading-relaxed mt-2">第七誡（不可姦淫）肯定了婚姻作為神設立的性親密唯一正當場所。性不只是生物本能，而是神賦予人類最深刻的「成為一體」的方式（創2:24）——靈魂與身體的全人合一。婚外的性關係破壞了這個神聖的設計，不只是道德問題，更是對人本身的傷害。第八誡（不可偷盜）確立了財產所有權受神保護，包括工資的公平、不剝削窮人。第九誡（不可作假見證）肯定「真話是神聖的」，謊言破壞信任、破壞關係、最終破壞社會結構。第十誡（不可貪戀）是十誡中唯一完全針對內心態度的誡命——你的念頭和慾望，神也關注。這提醒我們：神的律法不只是外在行為的規範，而是要改變我們的內心。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">六、現代偶像——今天的第一二誡</h3>
              <p className="text-gray-700 leading-relaxed">很少有現代人會跪在木頭或石頭前面，但偶像崇拜從未消失。馬丁路德說：「你最愛的是什麼，那就是你的神。」按這個定義，現代人最常見的偶像是：金錢和財富（提摩太前書6:10說「貪財是萬惡之根」）、社會地位和他人的認可（活在別人的眼光中）、個人安全感和舒適（把神的位置讓給保險和儲蓄）、甚至美好的家庭（若對家庭的渴望超過對神的愛，家庭也成了偶像）。</p>
              <p className="text-gray-700 leading-relaxed mt-2">識別偶像的三個問題（巴刻式）：（1）你最害怕失去什麼？（2）你覺得得到什麼才能真正快樂？（3）你最多的時間、金錢和精力投在哪裡？這些問題的答案往往揭示真正控制你生命的是什麼。打破偶像不是靠更多自律，而是靠更深地認識和愛那位真神——當真神的美麗和榮耀充滿我們的心，偶像自然就失去了吸引力。</p>
            </div>

          </div>
        )}
      </div>

      {/* 重點總結 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-sky-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">重點總結</span>
          </div>
          {expanded['summary'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['summary'] && (
          <div className="p-5 bg-white">
            <ul className="space-y-3">
              {[
                '十誡是神給蒙救贖之人的生活藍圖，不是得救的條件——順序是「先救贖，後誡命」；遵守十誡的動力是感恩的愛，而非恐懼或功績。',
                '十誡建立在「我—你」的位格關係上：神以個人方式向每個人說話，誡命是愛的具體形狀，描繪愛神愛人的實際樣貌。',
                '愛與律法不對立而是盟友：愛需要律法作方向和眼睛（防止「以愛之名」的自欺），律法需要愛作動力（否則成為法利賽主義）。',
                '前四誡關乎對神：獨一敬拜（第一）、不造偶像（第二）、尊重神名的真誠性（第三）、安息日的節奏（第四）。',
                '後六誡關乎對人：孝敬父母（尊重權柄）、不殺人（生命神聖）、不姦淫（婚姻神聖）、不偷盜（財產受保護）、不假見證（真話神聖）、不貪戀（內心的態度神也關注）。',
                '現代偶像不是雕像，而是任何取代神在我們心中首位的事物——金錢、地位、認可、安全感；識別偶像的關鍵：你最怕失去什麼？你相信得到什麼才能真正快樂？',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-gray-700">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* 延伸探討 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('exploration')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">延伸探討</span>
          </div>
          {expanded['exploration'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['exploration'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">十誡在新約時代仍有效嗎？</h4>
              <p className="text-gray-700 leading-relaxed">有些人認為基督徒在恩典下，不再需要遵守十誡。但耶穌說：「我來不是要廢掉律法，乃是要成全。」（太5:17）祂一方面確認了十誡的道德精神，另一方面更深化了其要求（如憤怒等同謀殺）。保羅也說：「律法是聖潔的……律法原是好的。」（羅7:12）十誡的精神在新約中全部保留，只是第四誡（守日）在基督復活後轉移到主日。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">現代偶像崇拜的形態</h4>
              <p className="text-gray-700 leading-relaxed">今天很少有人跪拜木頭或石頭，但偶像崇拜從未消失。提摩太前書6:10「貪財是萬惡之根」——金錢是最常見的現代偶像。此外：對成功的過度渴求、對他人認可的依賴、對安全感的執著（超過對神的信靠）、甚至對美好家庭生活的追求若凌駕於神之上，都是偶像。「你所愛的是什麼，那就是你的神。」（馬丁路德）</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">生命的神聖性——第六誡的現代應用</h4>
              <p className="text-gray-700 leading-relaxed">「不可殺人」的原則在現代有廣泛的應用：墮胎（從受孕開始生命即已形成）、安樂死（即使出於憐憫，也涉及對生命主權的取奪）、自殺（是生命秩序的違反）。這些議題都複雜而充滿張力，但十誡給我們一個核心原則：人的生命因承載神的形像而神聖，不能被輕易取奪。在面對具體處境時，我們需要在尊重生命這個前提下謹慎、謙遜地思考。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「處境倫理」的問題</h4>
              <p className="text-gray-700 leading-relaxed">1960年代流行「處境倫理」（situational ethics）：認為在任何處境下，只要動機是愛，就沒有絕對的對錯。表面上聽起來充滿愛，實際上卻讓人失去道德的錨點。巴刻指出：沒有神的律法指引，「愛」是盲目的，容易被自我欺騙所操縱。真正的愛不是「隨機應變」，而是以神的啟示和律法為指南，在其框架內靈活地服事他人。</p>
            </div>
          </div>
        )}
      </div>

      {/* 反思問題 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">反思問題</span>
          </div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && (
          <div className="p-5 bg-white space-y-3">
            {[
              '你的生命中有沒有「偶像」——什麼東西佔據了本應屬於神的首位？你如何辨認它？',
              '「不可妄稱耶和華的名」在日常生活中（不只是用髒話）意味著什麼？你怎樣用自己的生活尊崇神的名？',
              '你如何守安息日？在現代快節奏的生活中，你如何實踐每週一天的停息？',
              '「不可殺人」包括仇恨和憤怒（太5:21-22）。你生命中有沒有需要處理的仇恨或憤怒？',
              '第十誡（不可貪戀）是唯一針對內心動機的誡命。你最容易貪戀的是什麼？這怎樣影響你與神的關係？',
              '巴刻說遵守十誡應該是對神之愛的回應，不是要賺取神的接納。這兩種動機在你的信仰生活中各佔多少比例？',
            ].map((q, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0">{i + 1}.</span>
                <p className="text-gray-700">{q}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 具體實踐方針 */}
      <div className="mb-6 border border-green-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('practice')} className="w-full px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">具體實踐方針</span>
          </div>
          {expanded['practice'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['practice'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 十誡個人檢視</h4>
              <p className="text-gray-700 mb-2">花30分鐘，逐條讀十誡，並誠實地問自己：「我在這一條上做得如何？」不是要定罪自己，而是讓聖靈光照，帶來悔改和更新。寫下三條你認為最需要在生活中改進的誡命，並想出具體的改變步驟。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">⏰ 建立安息日的操練</h4>
              <p className="text-gray-700 mb-2">這週選擇一天（或半天），真正地停下來：不工作、不刷手機（工作相關）、不生產——只是敬拜、休息、享受神的創造和人際關係。安息不是懶惰，而是宣告：我的生命不靠自己的努力維持，而是靠神的恩典。記錄這次安息的體驗。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 識別並面對你的「現代偶像」</h4>
              <p className="text-gray-700 mb-2">問自己三個問題：（1）失去什麼會讓我最恐懼？（2）得到什麼能讓我最快樂？（3）我把最多的時間、金錢和精力投在哪裡？這些答案往往揭示你的「偶像」。選擇一個具體的行動來重新排列優先順序——例如把本來花在某個偶像上的時間，用來與神同在或服事他人。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 「真話是神聖的」——誠實的操練</h4>
              <p className="text-gray-700 mb-2">本週刻意留意你的言語：有沒有誇大、半真半假、不必要的謊言？每天晚上回顧：今天我有沒有說謊？包括「善意的謊言」。如果有，向神認罪，並在適當時向相關的人道歉。神是「真實（阿們）的神」，我們的言語應反映祂的性格。</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 mt-2">
              <p className="text-green-800 font-medium mb-1">🕊️ 禱告詞</p>
              <p className="text-green-700 italic leading-relaxed">「神啊，感謝祢藉著十誡給我一個清晰的生活藍圖。我承認我常常偏離這個藍圖——我有我的偶像，我說謊，我貪戀，我不休息。今天我不是靠遵守律法來賺得祢的愛，而是因為接受了祢的愛，所以願意從愛的動機出發遵行祢的命令。幫助我在每一個關係中、每一個決定中、每一個念頭中，真實地活出『愛神愛人』的精神。奉耶穌基督的名，阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
