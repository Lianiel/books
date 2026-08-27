import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Infinity, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book41Ch19() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    exploration: true,
    questions: true,
    practice: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-800 to-cyan-900 bg-clip-text text-transparent">第三部 3-3</h1>
        <h2 className="text-xl font-semibold text-gray-700">福音為「資源有限的概念」所形塑？</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Infinity className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">從「資源有限」到「資源無限」</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                這一章的答案與前幾章略有不同：「資源有限」的概念，其實並不適用於耶穌基督的福音；相對地，福音的概念是「資源無限」。資源有限的概念根植於榮辱社會的感受，並不符合基督的福音觀點，因為聖經清楚揭示：神的榮耀和恩典是無限的（約三16；腓四19）。作者從耶穌餵飽五千人的故事切入（太十四13-21；可六32-44；路九10-17；約六1-13）：門徒面對缺乏，立即發現人的有限和不足，但耶穌接受了一個孩童的「五餅二魚」並祝禱，結果「他們都吃，並且吃飽了；把剩下的零碎收拾起來，裝滿了十二個籃子」（太十四20-21）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                作者特別留意「他們都吃，並且吃飽了」這句話在四卷福音書中都一致出現——在一個物質缺乏司空見慣的社會中，人們通常會爭先恐後、彼此比較誰拿得多，這攸關有限資源的分配，是一場你輸我贏的競爭；但這次不一樣，根本不需要爭「誰得到最多」，因為藉著耶穌，每個人所拿到的都綽綽有餘。耶穌能翻轉門徒手上有限的資源，祂的供應超乎所需——榮耀競爭即使沒有消除，也退居次要地位，因為在耶穌基督裡，有一種新的可能：不僅僅是一些人，而是所有人都能經歷豐盛的供應。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">生命的糧：與救贖的關聯</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                耶穌教導餵飽五千人奇蹟的屬靈意義：「我就是生命的糧……我是從天上降下來生命的糧；人若吃這糧，就必永遠活著。我所要賜的糧就是我的肉，為世人之生命所賜的」（約六48-51）——耶穌把自己給眾人吃的糧食，比擬為神從天上賜下的嗎哪，而祂在十字架上捨身，正是「為世人之生命」而賜下。「我就是生命的糧。到我這裏來的，必定不餓；信我的，永遠不渴」（約六35）——在基督裡帶來新的豐盛：豐盛的生命、豐盛的榮耀、豐盛的祝福，那些以耶穌基督為生命之糧的人，透過委身和信心，可以獲得一切的豐盛。這正是福音之所以被稱為「好消息」的本質：「神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，反得永生」（約三16-18）——救恩不受限制，好處不受限。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">「在亞當裡眾人都死了」，「在基督裡眾人也都要復活」</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅把「資源的無限」寫得簡潔巧妙：「死既是因一人而來，死人復活也是因一人而來。在亞當裏眾人都死了；照樣，在基督裏眾人也都要復活」（林前十五21-22）。作者指出一個耐人尋味的對比：持世俗個人主義想法的人，很難接受「一個人犯罪竟會影響全人類」的觀念，這種思想以自我為中心，無法認同人類共有的敗壞傾向；但習慣集體主義、在榮辱社會中長大的人，反而更容易接受這樣的聖經真理——因為他們知道自己置身群體之中。田奈特寫道：「以羞恥為基礎的二元文化，對於接受亞當帶來的集體定罪，不會有太大的困難……我們同在一艘船上，是同夥人，因為亞當竊取了神的榮耀、得罪了神。」<sup>1</sup><span style={cite}>（Tennent, Theology in the Context of World Christianity, 96.）</span>作者提出一個深具啟發性的觀察：過去這一百年來，基督信仰在南半球的大復興，會不會正是因為這個因素——榮辱社會的群體導向特質，反而使人更容易接受「在基督裡眾人都要復活」這樣的集體性救恩真理？
              </p>
              <p className="text-gray-700 leading-relaxed">
                這帶出一個有趣的矛盾：一方面，「資源有限」的世界觀是榮辱社會自身文化價值觀的一部分，可能被視為相信基督福音「資源無限」的障礙；另一方面，榮辱社會的群體導向特質，卻使他們更容易接受「耶穌基督帶來無限好處」這樣的信仰。作者提醒，在掌握聖經榮辱感和基督福音真諦後，面對以榮/辱為主要文化價值的群眾，我們是否可以成為神恩典的好管家，更適切地分享福音？
              </p>
            </div>

          </div>
        )}
      </div>

      {/* 重點總結 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
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
                '與其他九種動力不同，「資源有限」的世界觀本身並不符合福音——福音宣告的恰恰是「資源無限」：耶穌餵飽五千人的神蹟中，四卷福音書都一致強調「他們都吃，並且吃飽了」，且還剩下十二籃子。',
                '耶穌自稱「生命的糧」，把餵飽五千人的神蹟與十字架的犧牲連結：祂的身體「為世人之生命所賜」，吃這糧的人「必永遠活著」——物質的飽足預表了屬靈生命無限的豐盛供應。',
                '保羅在哥林多前書十五章的宣告「在亞當裡眾人都死了，在基督裡眾人也都要復活」，本質上是一種集體性、群體性的救恩觀，這與個人主義的世俗思維格格不入，卻與榮辱社會的集體主義文化直覺相通。',
                '南半球基督信仰過去一百年的大復興，或許正因集體主義文化背景的人，比個人主義的西方世俗思維，更容易接受「因一人的罪、眾人被定罪；因一人的義、眾人得稱義」這種聯合性的救恩邏輯。',
                '「資源有限」既可能被榮辱文化的人視為信靠福音「資源無限」的障礙，卻也可能因群體導向的思維特質，成為他們更容易接納集體性救恩真理的優勢——這是一體兩面的張力，值得跨文化工作者細膩拿捏。',
                '本章呼籲信徒不落入「成功神學」的消費主義試探，也不陷入過度屬靈化、脫離生活實際的兩極，而是踏實地在教會群體生活中，具體活出「在基督裡富足有餘」的見證。',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-gray-700 leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
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
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「福音宣告資源無限」與「教會實際資源常常有限」之間的落差，教會該如何誠實面對？</h4>
              <p className="text-gray-700 leading-relaxed">
                神學上宣告在基督裡資源無限，不代表教會在財務、人力等具體資源上不會經歷真實的匱乏與掙扎。作者提醒的重點不在否認現實的限制，而在於指出：即使在有限的處境中，信靠基督的群體不需要落入「你贏我輸」的零和競爭心態，因為屬靈生命的豐盛（平安、盼望、彼此相顧的愛）本質上不是稀缺資源。教會可以誠實承認資源的限制，同時活出一種不被稀缺焦慮綁架的群體文化。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">集體主義文化更容易接受「在亞當裡都死、在基督裡都復活」的觀念，這對華人教會的講道與護教策略有何啟發？</h4>
              <p className="text-gray-700 leading-relaxed">
                西方護教學常花費大量篇幅解釋「原罪為何公平」，因為要說服個人主義的聽眾接受集體連帶責任確實不易。但對於本就熟悉家族連帶、集體榮辱觀念的華人聽眾而言，這個教義障礙相對較小，反而可以直接透過「同在一艘船上」的類比，快速建立起對福音核心邏輯的理解，把更多篇幅留給說明「基督如何成為第二個亞當」這個福音的核心好消息。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「不落入成功神學，也不脫離生活實際」——教會該如何具體拿捏這個平衡？</h4>
              <p className="text-gray-700 leading-relaxed">
                成功神學的危險，在於把「資源無限」簡化、扭曲成「信耶穌就會發財順利」的物質應許；而過度屬靈化的危險，則是完全迴避討論金錢、資源等現實議題，彷彿談論這些是不夠屬靈的。健康的平衡，或許在於教會既誠實教導管家職分、勤奮工作的重要，也持續見證「在基督裡的豐盛」主要體現在群體彼此供應、患難與共、以及對永恆盼望的滿足上，而非個人財富的累積。
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
          <div className="p-5 bg-white space-y-3">
            {[
              '「我的神必照他榮耀的豐富，使你們一切所需用的都充足」（腓四19）——在面對競爭或匱乏時，這句話如何幫助你脫離「資源有限」的焦慮感？',
              '你能否用耶穌餵飽五千人的故事，向人講述「基督福音有無限好處」這樣的信息？試著練習講一次。',
              '「在亞當裡眾人都死了，在基督裡眾人也都要復活」——這種集體性的救恩觀，對你理解自己與全人類的關係，帶來什麼新的體會？',
              '你觀察自己身處的文化，是偏向個人主義還是集體主義？這對你接受「因一人的罪、眾人受影響」這個教義，有何幫助或挑戰？',
              '你的教會傳達在基督裡的富足有餘時，是彰顯基督的榮耀，還是有時反而顯得捉襟見肘、窮困缺乏？',
              '你如何避免落入「成功神學」的試探，同時又能真實地經歷、見證「在基督裡的豐富」？',
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
        <button onClick={() => toggleSection('practice')} className="w-full px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">具體實踐方針</span>
          </div>
          {expanded['practice'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['practice'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🍞 對照四卷福音書中「餵飽五千人」的記載</h4>
              <p className="text-gray-700 mb-2">
                並排閱讀太十四13-21、可六32-44、路九10-17、約六1-13，圈出四處都一致出現的「他們都吃，並且吃飽了」，體會這句話對原始讀者的分量。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 檢視自己是否活在「資源有限」的焦慮中</h4>
              <p className="text-gray-700 mb-2">
                誠實記錄本週生活中，哪些時刻你因為「怕不夠、怕被比下去」而感到焦慮或與人競爭，並用腓立比書四章19節的應許，具體為這個處境禱告。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，感謝祢是那位五餅二魚也能使眾人吃飽有餘的神。求祢釋放我脫離『資源有限』的焦慮與比較之心，讓我真實相信，在祢裡面的豐盛，足夠供應我一切所需，也足以與人分享，而不減少。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
