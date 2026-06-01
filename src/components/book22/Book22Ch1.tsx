import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Compass, Search, HelpCircle, Check } from 'lucide-react';

export default function Book22Ch1() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
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
          <div className="p-5 bg-white space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">加爾文的核心洞見</h3>
              <p className="text-gray-700 leading-relaxed">
                加爾文在《基督教要義》的開卷第一句話說：「我們的智慧，若值得以智慧為名，幾乎完全包含在兩項認識之中：對上帝的認識，以及對我們自己的認識。」這兩種認識彼此交織，密不可分。認識人離不開認識上帝；認識上帝也離不開認識人。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                只有真正認識人的人，才能真正認識上帝；也只有真正認識上帝的人，才能真正認識人。這看似矛盾，實則深刻——我們若從認識人出發，必然發現人的侷限與罪，從而仰望上帝；若從認識上帝出發，上帝的榮耀與聖潔，使我們更清楚看見自己的卑微。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">創造性認識與救贖性認識</h3>
              <p className="text-gray-700 leading-relaxed">
                認識上帝有兩條途徑：創造性的認識（透過自然界、歷史、良知）和救贖性的認識（透過聖經和耶穌基督）。加爾文指出，由於人的罪，創造性認識的眼睛已經模糊，需要聖經這副「眼鏡」來幫助我們正確認識上帝。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                因此，認識上帝的第一步，不是哲學思辨，而是謙卑地讀聖經，讓上帝的話語來塑造我們對上帝和對自己的認識。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">認識自己的謙卑</h3>
              <p className="text-gray-700 leading-relaxed">
                真正認識自己，會帶來謙卑。許多人自以為了解自己，但往往只看見自己的優點，或只從自己的角度出發。真正的自我認識，需要在上帝面前的省察——不是痛苦的自我批判，而是在上帝的慈愛中看見自己的真實狀況：既是照上帝形象所造的尊貴存在，又是墮落有罪需要救贖的人。
              </p>
            </div>
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
