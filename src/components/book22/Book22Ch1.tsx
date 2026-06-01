import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Compass, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book22Ch1() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">第一章</h1>
        <h2 className="text-xl font-semibold text-gray-700">認識人與認識上帝</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">加爾文的核心洞見</h3>
              <p className="text-gray-700 leading-relaxed">
                加爾文（John Calvin）在其巨著《基督教要義》（Institutio Christianae Religionis）的開篇第一句話便道出了整本書的靈魂：「我們的智慧，若值得以智慧為名，幾乎完全包含在兩項認識之中：對上帝的認識，以及對我們自己的認識。」這不是偶然的寫作技巧，而是加爾文深思熟慮後所確立的神學框架。對他而言，神學不是關於宇宙奧秘的抽象思辨，而是人與上帝相遇、人認識自己的具體過程。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                這兩種認識之所以密不可分，是因為它們構成了一個相互深化的認識循環：認識人使人仰望上帝，認識上帝使人更清楚地看見自己。如果我們從認識自己出發，誠實地面對自己的有限、罪惡與需要，我們便不得不承認，人需要一個比自己更大的參照點——這個參照點就是上帝。反過來，當我們站在上帝的榮耀與聖潔面前，我們對自己卑微和墮落的認識便更加深刻。先知以賽亞見到上帝的榮耀後立即呼喊「禍哉！我滅亡了！」（賽6:5），正是這種互動的生動寫照。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">創造性認識與救贖性認識</h3>
              <p className="text-gray-700 leading-relaxed">
                加爾文進一步區分了兩種認識上帝的途徑。第一種是「創造性的認識」（cognitio Dei creatoris），透過自然界、歷史和人類良知來認識上帝為創造主。羅馬書1章指出，上帝的「永能和神性」從創世以來已清楚可見，以至人「沒有可推諉的」（羅1:20）。第二種是「救贖性的認識」（cognitio Dei redemptoris），透過聖經和耶穌基督來認識上帝為救贖主。這種認識不只知道上帝存在，更認識上帝的心意和救恩計劃。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                然而，加爾文指出一個嚴峻的問題：由於人的罪，原本透過自然界認識上帝的能力已受損。罪不只是道德行為的失敗，更是認識論的扭曲——人的眼睛模糊了，看不清楚上帝的真實面貌。因此，加爾文提出了著名的「眼鏡」比喻：聖經就像一副矯正視力的眼鏡，幫助那些因罪而眼目模糊的人，能夠清楚地看見上帝。這個比喻深刻地說明了聖經的功用：不是帶給我們全新的上帝，而是幫助我們正確地認識本來就在那裡的上帝。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">認識自己的謙卑</h3>
              <p className="text-gray-700 leading-relaxed">
                真正的自我認識，需要在上帝面前的省察。這與世俗的自我認識有根本的不同。世俗的自我認識往往從比較中得出——我比別人更優秀或更差勁——這種以人為參照的認識，帶來的不是真實，而是驕傲或自卑。加爾文指出，人天性傾向誇大自己的優點，用各種方式粉飾自己的真實狀態。我們習慣用玫瑰色的眼鏡看自己，而用放大鏡看別人的缺點。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                真正的自我認識，必須在上帝的光照下進行。在上帝面前，人認識到自己是按上帝形象所造的尊貴存在（創1:26-27），這賦予了每個人不可剝奪的尊嚴；同時，人也認識到自己是墮落有罪、需要救贖的存在，這帶來謙卑而非自我貶低。這種雙重認識——既尊貴又卑微、既被愛又有罪——是基督信仰特有的人觀，也是健康人格的基礎。奧古斯丁曾說：「我們的心是不安的，直到安息在祢懷中」，正是這種在上帝面前尋求自我認識的渴望。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">九個探險的框架</h3>
              <p className="text-gray-700 leading-relaxed">
                林鴻信以「九個探險」來描述本書的架構，這個選詞意味深長。「探險」意味著認識上帝和認識人不是一個一次完成的學習，而是一個持續進行的旅程。每一個神學議題（人、上帝、敬拜、教會、三一、基督、聖靈、盼望）都是一個需要不斷深入的探索，沒有人可以宣稱已完全掌握了真理。這種「探索式」的態度，既保持了神學的嚴謹，又保留了信仰的謙卑。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                全書的九個探險涵蓋了基督教神學的核心議題：從認識上帝的基礎（第一、二章）、到人論（第三章）、禮拜論（第四章）、教會論（第五章）、三一論（第六章）、基督論（第七章）、聖靈論（第八章），以及終末論（第九章）。這個結構既遵循傳統系統神學的分類，又融入了台灣本地的文化處境，體現了作者林鴻信「在台灣做神學」的用心。
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
          <div className="p-5 bg-white space-y-3">
            {[
              '加爾文在《基督教要義》開卷即宣告：認識上帝與認識人是一切智慧的兩個根本，二者不可分割。',
              '認識上帝與認識人形成相互深化的循環：誠實面對自己的有限驅使人仰望上帝；站在上帝的聖潔前，人更清楚地看見自己的真實狀態。',
              '加爾文區分兩種認識上帝的途徑：透過自然界的「創造性認識」，以及透過聖經和基督的「救贖性認識」，後者是前者的矯正與補全。',
              '因為罪扭曲了人的認識能力，聖經如同「眼鏡」，幫助眼目模糊的人重新看清上帝的真實面貌，這是閱讀聖經的根本目的。',
              '真正的自我認識需在上帝面前進行：人既是按上帝形象所造的尊貴存在，也是墮落有罪需要救贖的人，這雙重認識帶來謙卑而非自我貶低。',
              '本書以「九個探險」為框架，強調神學認識是持續進行的旅程，謙卑的探索比自以為完全掌握真理更符合基督信仰的精神。',
            ].map((point, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-sky-600 font-bold flex-shrink-0">{i + 1}.</span>
                <p className="text-gray-700 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 延伸探討 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('exploration')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">延伸探討</span>
          </div>
          {expanded['exploration'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['exploration'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">加爾文《基督教要義》的重要性</h4>
              <p className="text-gray-700 leading-relaxed">加爾文的《基督教要義》（Institutio Christianae Religionis）是宗教改革時代最重要的系統神學著作之一。初版於1536年，加爾文去世前（1564年）已擴充至最終版本。這部著作不僅奠定了改革宗神學的基礎，也對後世基督教思想產生了深遠影響。「認識上帝與認識人」作為開篇命題，奠定了整部著作的神學框架。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">循環關係的神學意義</h4>
              <p className="text-gray-700 leading-relaxed">認識上帝和認識人的循環關係，在神學上被稱為「神學認識論的循環」。這不是邏輯上的惡性循環，而是一種相互深化的認識運動：更深地認識上帝使我們更深地認識自己，而更深地認識自己（包括自己的罪和需要）反過來驅使我們更深地尋求上帝。奧古斯丁的名言「我們的心是不安的，直到它安息在祢懷中」正是這種認識論的生命寫照。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「聖經是眼鏡」的比喻</h4>
              <p className="text-gray-700 leading-relaxed">加爾文提出聖經是「眼鏡」的比喻意義深遠。人的眼睛因罪而模糊，在沒有眼鏡的情況下，看見的上帝形象是扭曲的——可能把上帝當作心想事成的許願機，或當作嚴厲審判的暴君。聖經如同矯正視力的眼鏡，使我們能夠看清上帝的真實面貌。這個比喻也提醒我們：讀聖經的目的不只是獲得知識，而是使我們的「屬靈眼睛」更清晰地看見上帝。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">現代心理學與神學自我認識的對話</h4>
              <p className="text-gray-700 leading-relaxed">現代心理學強調自我了解（self-awareness）的重要性，提供了認識自我的多種工具，如MBTI、九型人格等。這些工具有其實用價值，但神學的自我認識有更深的維度：它不只看性格傾向，更追問人存在的意義、人與上帝的關係、以及罪和救贖如何塑造人的本質。神學與心理學在自我認識上可以互補，但神學認識的基礎是在上帝面前的省察，而非單純的自我分析。</p>
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
              '你認識自己嗎？你對自己的認識主要來自哪裡——別人的評價、自我觀察，還是在禱告中的省察？',
              '你曾否有過一種「認識上帝讓我更認識自己」或「認識自己讓我更需要上帝」的經驗？能否分享？',
              '為什麼加爾文說「認識上帝」和「認識人」這兩種認識是不可分割的？你認為若只有其中一種認識，會帶來什麼問題？',
              '你在讀聖經時，是否有過「眼睛被打開」的經驗，看見了之前未曾看見的上帝或自己？',
              '在華人文化中，「認識自己」常被理解為了解自己的優缺點以便改進。基督教的自我認識有何不同？',
              '如果今天有人問你：「你了解自己嗎？」你會如何回答？這個答案在你信主前後有何不同？',
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 每日在上帝面前的省察</h4>
              <p className="text-gray-700 mb-2">每天睡前花5分鐘，在上帝面前安靜省察：今天有哪些時刻我活在自己的計劃中而忘了上帝？有哪些時刻我真實地感受到上帝的同在？</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>不是痛苦的自責，而是在恩典中誠實地看見自己</li>
                <li>記下一個感謝和一個需要悔改的地方</li>
                <li>以禱告作為結束：讓上帝的眼光成為你認識自己的標準</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 讀《基督教要義》開篇</h4>
              <p className="text-gray-700 mb-2">找一本《基督教要義》（或網上資源），閱讀第一卷第一章「認識上帝與認識自己的關係」。思考這個問題：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>加爾文如何描述這兩種認識的相互關係？</li>
                <li>他的說法如何挑戰了你目前對「認識自己」的理解？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 與人分享你的「認識之旅」</h4>
              <p className="text-gray-700 mb-2">找一位信任的基督徒朋友，分享你信主以來對上帝和對自己的認識有何改變。特別思考：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>哪個認識（對上帝還是對自己）先發生轉變？</li>
                <li>這兩種認識如何相互影響、互相深化？</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-green-800 font-medium text-sm mb-2">禱告詞</p>
              <p className="text-green-700 text-sm italic leading-relaxed">
                主啊，我承認我對自己和對祢的認識都是有限和扭曲的。求祢開我的眼睛，使我能透過祢的話語，更真實地認識祢，也更誠實地認識自己。在這認識之旅中，使我不害怕看見自己的不足，因為在祢面前，我既是祢用愛所造的，又是祢用恩典所救贖的。願這認識帶來謙卑，也帶來感恩。奉耶穌基督的名，阿們。
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
