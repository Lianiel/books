import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Search, HelpCircle, Check } from 'lucide-react';

export default function Book17Ch9() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">第九章</h1>
        <h2 className="text-xl font-semibold text-gray-700">愛與理性</h2>
        <p className="text-sm text-gray-500 mt-1">哥林多前書 八1-13</p>
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
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">一、知識使人自高，愛心造就人（八1-3）</h4>
              <p className="text-gray-700 leading-relaxed">保羅一開篇就設立了本章的核心對比：「知識叫人自高自大，惟有愛心能造就人。」知識（關於偶像食物毫無意義的神學知識）本身沒有問題，但若知識沒有愛心伴隨，就會讓人驕傲。「若有人以為自己知道什麼，按他所當知道的，他仍是不知道。」真正的知識應帶來謙卑，而非自大。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">二、祭偶像之物的神學（八4-8）</h4>
              <p className="text-gray-700 leading-relaxed">保羅確認：偶像在世上算不得什麼，只有一位神——父神，萬物都本於祂；也只有一位主——耶穌基督，萬物都藉著祂。從這個神學出發，祭偶像的食物本身沒有「被污染」，因為偶像並不存在。吃或不吃，在神面前都沒有差別，「我們也不因此有益，也不因此有虧」。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">三、軟弱的弟兄的價值（八9-13）</h4>
              <p className="text-gray-700 leading-relaxed">但知識不足以決定行為，愛才是更高的原則。若有良心軟弱的弟兄看見你坐在偶像廟裡吃東西，他的良心受虧損，「這軟弱的弟兄，基督就是為他死的」。傷害軟弱的弟兄，就是干犯基督。保羅宣告：「我若叫我弟兄跌倒，我就永遠不吃肉了」——這是愛勝過自由的宣告。</p>
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
              <h4 className="font-semibold text-indigo-700 mb-2">知識的謙卑：真知識的特徵</h4>
              <p className="text-gray-700 leading-relaxed">「若有人以為自己知道什麼，按他所當知道的，他仍是不知道。」這句話揭示了知識的弔詭：愈是以為自己全知，愈是顯出自己的無知。真正的知識帶來對神的敬畏和對人的謙卑，而非自信地「指導」別人。這個原則適用於神學、文化、倫理等各種爭論——我們所知的總是片面的。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">軟弱弟兄的神學地位</h4>
              <p className="text-gray-700 leading-relaxed">保羅說的「軟弱弟兄」不是指靈性差、不成熟的人，而是指在某些文化和宗教背景下，良心特別敏感的人。他特意指出：「這軟弱的弟兄，基督就是為他死的」——這賦予每個「軟弱」成員在教會中不可褻瀆的神聖地位。輕視或傷害他，等於不尊重基督的犧牲。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「自由」vs「愛人」的倫理架構</h4>
              <p className="text-gray-700 leading-relaxed">第八章建立了一個重要的倫理架構：我的自由是真實的，但不是絕對的；在「我的自由」和「他人的益處」之間，後者有更高的優先權。這不是說永遠要犧牲自己的自由，而是說當行使自由可能傷害到「基督為他死」的人時，愛心召喚我們自我約束。這是一種積極選擇的謙卑，而非被動的屈服。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">文化適應與底線的張力</h4>
              <p className="text-gray-700 leading-relaxed">祭偶像食物的問題在今日可能對應各種文化敏感議題：某些節慶、禮儀、娛樂形式。保羅的原則不是「凡有文化爭議的都要迴避」，而是「知識使你知道可行，愛使你知道何時當行」。辨別的關鍵是：我的選擇會導致旁觀者照著良心違背行事嗎？若是，愛要求我暫緩行使自由。</p>
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
              <p className="text-gray-700">你是否曾因為擁有較多的神學知識，而不知不覺地輕看「知識較少」的弟兄姊妹？知識的驕傲如何表現在你的態度和言語中？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">在你的生活中，有沒有「我知道可行，但可能讓他人跌倒」的事？你如何平衡自己的自由與對他人的責任？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">「這軟弱的弟兄，基督就是為他死的」——這句話如何改變你對教會中「比較保守」或「比較敏感」的成員的態度？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">保羅說「我就永遠不吃肉了」——這種絕對的自我約束讓你感到欽佩，還是感到不現實？你認為這反映了什麼樣的對人的愛？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">在教會的爭論（敬拜風格、飲食習慣、節慶參與）中，你更容易成為「倚仗知識的強壯者」，還是「良心敏感的軟弱者」？這讓你如何理解彼此？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 知識謙卑的練習</h4>
              <p className="text-gray-700 mb-2">這週在教會的討論或對話中，刻意練習：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>在表達意見前，先問自己：「我的立場有沒有限制或盲點？」</li>
                <li>主動詢問對方的看法，以傾聽代替糾正</li>
                <li>若對方的立場讓你不舒服，先問「為什麼他/她這樣想」，再問「他/她是否錯了」</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 為「軟弱弟兄」的緣故而自我約束</h4>
              <p className="text-gray-700 mb-2">思考你生活中有沒有一個「可行但可能傷害某人」的行為：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>具體識別那個人是誰，他/她在什麼情況下可能被影響</li>
                <li>這週主動選擇不做那件事，把它當作對那人的愛的表示</li>
                <li>不必解釋，也不必期望對方感謝，只是因為愛而做</li>
              </ul>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-sm text-green-800 font-medium mb-1">本週禱告</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">
                「主，讓我不以知識自高，而是以愛造就人。讓我記住：我身邊每一個「軟弱」的弟兄姊妹，都是祢寶血買來、值得我用愛心保護的人。若為了他/她的益處需要我放棄自己的自由，讓我甘心樂意地這樣做。讓愛心超越知識，成為我行事的主導原則。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
