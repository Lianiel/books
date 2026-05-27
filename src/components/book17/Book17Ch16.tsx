import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book17Ch16() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    exploration: true,
    questions: true,
    practice: true,
  });

  const toggleSection = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">第十六章</h1>
        <h2 className="text-xl font-semibold text-gray-700">帶著復活的盼望而活著</h2>
        <p className="text-sm text-gray-500 mt-1">哥林多前書 十五1-58</p>
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
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">一、基督復活的歷史事實（十五1-11）</h4>
              <p className="text-gray-700 leading-relaxed">保羅追溯他所傳的福音：基督照聖經所說為我們的罪死了，被埋葬，第三天復活了，然後向許多人顯現——磯法、十二使徒、五百多弟兄、雅各，最後向保羅自己顯現。這是初代教會共同的信經，也是可以查驗的歷史記錄（五百多人中多數還活著）。復活不是神話，而是歷史事實，是整個基督教信仰的根基。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">二、若沒有復活的後果（十五12-34）</h4>
              <p className="text-gray-700 leading-relaxed">保羅以邏輯推論：若死人不復活，基督也沒有復活；若基督沒有復活，使徒的傳道是枉然，信仰是虛空，信徒仍在罪中，亡者永遠消失。「我們若靠基督只在今生有指望，就算比眾人更可憐。」但「基督已經從死裡復活，作了睡了之人初熟的果子」——因此信徒必復活，苦難和受死才有意義。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">三、復活身體的性質與末世盼望（十五35-58）</h4>
              <p className="text-gray-700 leading-relaxed">復活的身體與今日的血肉身體不同，如種子與植物——有連續性，卻有本質的改變：從必朽壞的變成不朽壞的，從軟弱的變成剛強的，從血氣的變成屬靈的。「死啊，你得勝的權勢在哪裡？死啊，你的毒鉤在哪裡？」最後呼籲：「所以你們務要堅固，不可搖動，常常竭力多做主工；因為知道，你們的勞苦在主裡面不是徒然的。」</p>
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
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">復活：歷史中最有力的文獻</h4>
              <p className="text-gray-700 leading-relaxed">哥林多前書15章是新約中最早關於基督復活的文字記錄（約主後54-56年），比福音書更早。保羅提到五百多見證人，多數仍活著——這是邀請人查驗，而非要人盲目信仰。這段文字讓復活信仰牢固地建立在歷史的可查驗性上，不是宗教神話或主觀靈性體驗。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">復活信仰與今世生活的關係</h4>
              <p className="text-gray-700 leading-relaxed">保羅在29-34節說，如果死人不復活，那他天天冒生命危險傳福音、「天天死」，都是無意義的。復活的盼望是他受苦和服事的動力。這讓復活不只是末世的教義，而是今世道德和服事的根基。若沒有復活，「我們就吃吃喝喝吧，因為明天要死了」——反之，有復活，一切受苦就有永恆的意義。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">復活身體的神學</h4>
              <p className="text-gray-700 leading-relaxed">保羅用種子的比喻說明：復活的身體與今日的身體既有連續性（同一個「我」），又有本質的改變（屬靈的身體）。這駁斥了兩個極端：一是希臘式的「靈魂不朽，身體無所謂」（因為保羅強調身體也復活）；二是字面性的「同樣的血肉身體回來」（因為種子和植物有本質的差異）。復活是全人的轉化，不只是靈魂的存續。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「勞苦不是徒然的」的宣告</h4>
              <p className="text-gray-700 leading-relaxed">十五章58節是整章的落地應用：正因為有復活，「你們的勞苦在主裡面不是徒然的」。這賦予了所有看似微小、不被人注意的忠心服事以永恆的重量。在一個獎賞短暫、成果難以評估的服事中，這個宣告給了信徒最深的鼓勵：在神眼中，你的每一個忠心的行動都有永恆的記錄。</p>
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
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">1.</span>
              <p className="text-gray-700">對你而言，基督的復活是一個歷史事實，還是一個信仰的象徵？這個問題的答案如何影響你整個信仰體系的根基？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">保羅說「若沒有復活，就吃吃喝喝吧」——這說明復活信仰對道德和服事的動力有決定性影響。你的復活信仰如何具體影響你今天的生活選擇？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">「你們的勞苦在主裡面不是徒然的」——在你的生命中，有沒有一段時間，你感到服事或信仰的努力是徒然的、無意義的？這個真理如何回應那種感受？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">「死啊，你得勝的權勢在哪裡？」——你對死亡有恐懼嗎？復活的盼望如何改變了你對死亡的看法？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">復活身體是「同一個我」的轉化。這讓你如何看待今世的身體生活（健康、倫理、性）？若身體也有永恆的延續，這對你如何對待自己的身體有何影響？</p>
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
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 「勞苦不是徒然的」的鼓勵行動</h4>
              <p className="text-gray-700 mb-2">想想你目前覺得最沒有果效、最讓你疲倦的服事或屬靈操練：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>把十五章58節大聲讀出來：「你的勞苦在主裡面不是徒然的」</li>
                <li>把這件事帶到神面前，感謝神記念你的每一份忠心</li>
                <li>繼續做它一週，把持守本身當作對復活信仰的宣告</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 每日復活宣告</h4>
              <p className="text-gray-700 mb-2">建立一個每早晨的短宣告習慣：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>每天早上起床，說或默想：「基督已復活，我的盼望是真實的。今天的生活有永恆的意義。」</li>
                <li>讓這個宣告成為你面對一天挑戰的根基</li>
                <li>一週後，觀察這個習慣如何改變你的心境</li>
              </ul>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-sm text-green-800 font-medium mb-1">本週禱告</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">
                「復活的主，謝謝祢讓死亡失去了勝利的權勢。讓復活的盼望不只是一個教義，而是我每天的力量和方向。讓我知道，我的每一份忠心、每一個受苦、每一次選擇愛，都在主裡面有永恆的重量，不是徒然的。讓我堅固，不可搖動，竭力多做主工。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
