import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Search, HelpCircle, Check } from 'lucide-react';

export default function Book14Ch9() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">第9章（附錄）</h1>
        <h2 className="text-xl font-semibold text-gray-700">羅馬書第七章的苦中人</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>

        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-bold text-purple-600 mb-3">羅馬書第七章的困境</h4>
              <p className="text-gray-700 leading-relaxed mb-3">羅馬書7:14-25表達了一個基督徒內在的掙扎：「我所願意的善，我沒有作；我所不願意的惡，我倒去做。」這段經文引發了一個重要的神學問題：這是誰的經歷？是未信主的人，還是信了主但在成聖過程中掙扎的信徒？</p>
              <p className="text-gray-700 leading-relaxed">傳統上有兩種解釋：第一種認為這是保羅在信主前，在律法下掙扎的經歷；第二種認為這是保羅當下作為一個信徒仍然面對的靈肉之爭。</p>
            </div>

            <div className="border-t pt-4">
              <h4 className="font-bold text-purple-600 mb-3">苦中人的身份</h4>
              <p className="text-gray-700 leading-relaxed mb-3">詳細的文本分析表明，「苦中人」很可能是一個已經信主的基督徒。第7:25a的結論「感謝神，靠著我們的主耶穌基督」表明講話者已經經歷了救恩。但這不意味著基督徒不再掙扎——相反，信主後的基督徒面臨一個新的層面的掙扎：對罪的真實認識、對聖潔的真實渴望、對肉體本性的真實戰爭。</p>
              <p className="text-gray-700 leading-relaxed">這個掙扎不是失敗或背離，而是屬靈生命中的正常狀態。聖靈使人對罪變得敏感，使人對聖潔產生飢渴，這導致了內在的張力。但這個張力本身就是聖靈工作的證據。</p>
            </div>

            <div className="border-t pt-4">
              <h4 className="font-bold text-purple-600 mb-3">從掙扎到得勝</h4>
              <p className="text-gray-700 leading-relaxed">第7章以困境結尾，但第8章以得勝開始：「如今，那些在基督耶穌裡的就不定罪了。」這不是說基督徒不再掙扎，而是說掙扎不再構成定罪。聖靈提供的不是一個無掙扎的生命，而是一個即使在掙扎中仍然蒙愛、被接納、有盼望的生命。</p>
              <p className="text-gray-700 leading-relaxed">對於許多經歷內在掙扎的信徒來說，這是一個好消息：你的掙扎不意味著你不是真正的信徒，也不意味著你的信仰失敗了。你的掙扎可能正是聖靈在你身上工作的證據。真正的屬靈成熟不是無掙扎，而是在掙扎中依靠聖靈，在失敗中再次悔改和回轉。</p>
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
              <h4 className="font-semibold text-gray-800 mb-2">罪的認識的深化</h4>
              <p className="text-gray-700 leading-relaxed">有趣的是，信主前的人往往對罪不夠敏感，反而信主後對罪變得極其敏感。未信主的人可能為惡而無羞恥，但重生的人對自己的罪感到悲傷。這個轉變是聖靈光照的結果，也是成聖過程的開始。</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">肉體與聖靈的爭戰</h4>
              <p className="text-gray-700 leading-relaxed">羅馬書7章的掙扎根本上是肉體（舊我的傾向、罪性）與聖靈（新我的渴望、聖潔之心）的爭戰。加拉太書5:17說「情慾和聖靈相爭，聖靈和情慾相爭，這兩個是彼此相敵」——這種爭戰是信徒生命中的普遍現象，不是個別的困境。</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">定罪與自責的區別</h4>
              <p className="text-gray-700 leading-relaxed">許多信徒無法區別「來自聖靈的自責」和「來自撒但的定罪」。聖靈的自責指向悔改和恢復，給予希望；撒但的定罪只帶來羞恥和絕望。第8:1說「如今，那些在基督耶穌裡的就不定罪了」，但這不意味著沒有自責，而是說自責不再是最終的判決。</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">對完美主義的解放</h4>
              <p className="text-gray-700 leading-relaxed">許多信徒陷入完美主義，期待信主後無罪的生活。羅馬書7章打破這個幻想，表明即使是保羅這樣的屬靈巨人仍然在掙扎。真正的屬靈成熟是承認自己的軟弱，在軟弱中依靠聖靈，而不是自欺欺人地宣稱已經達到完全。</p>
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
              <p className="text-gray-700">你能否同意「苦中人」是一個信了主的信徒？為什麼或為什麼不？這改變了什麼？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">你在自己的信仰經歷中是否經歷過羅馬書7:15所描述的內在掙扎？具體是什麼？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">你如何區別「聖靈的自責」與「撒但的定罪」？有時候很難分辨對嗎？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">「真正的屬靈成熟是承認軟弱」——這對你的自我評估有什麼影響？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">羅馬書8:1「如今，那些在基督耶穌裡的就不定罪了」——這個應許如何安慰你當前的掙扎？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">📖 深入閱讀羅馬書7-8章</h4>
              <p className="text-gray-700 mb-2">仔細閱讀這兩章，注意：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>7章中誰在說話？講話者的身份有什麼線索？</li>
                <li>7:25a如何提示講話者已經信主？</li>
                <li>8:1如何將掙扎轉化為盼望？</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 掙扎的認可與回應</h4>
              <p className="text-gray-700 mb-2">識別並承認你自己的掙扎：</p>
              <div className="bg-green-50 p-3 rounded text-gray-700 text-sm space-y-2">
                <p><strong>你最常掙扎的是什麼？</strong>（例如：貪心、驕傲、情慾、謊言等）</p>
                <p><strong>在這個掙扎中你感受到什麼？</strong>（羞恥、失敗、絕望、自責等）</p>
                <p><strong>你如何回應？</strong>（否認、逃避、沉溺、禱告、悔改）</p>
                <p><strong>現在的回應是什麼？</strong>（承認、尋求幫助、相信聖靈的力量、繼續前進）</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 定罪與自責的區分練習</h4>
              <p className="text-gray-700 mb-2">當你感受到內在的指責時，問自己：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>這是否指向悔改和改變？（聖靈）還是只有羞恥和絕望？（撒但）</li>
                <li>這是否給我盼望和力量改變？還是只讓我感到無力？</li>
                <li>我是否相信聖靈在引導我向著聖潔？還是聽見了對我的永恆定罪？</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">💪 肉體與聖靈的合作</h4>
              <p className="text-gray-700 mb-2">在你目前的掙扎中，建立一個實踐計畫：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>承認你無法靠自己得勝</li>
                <li>每日邀請聖靈在這個領域工作</li>
                <li>運用具體的工具（禱告、逃避誘惑、尋求幫助、更新思想）</li>
                <li>當失敗時，立即悔改而不是自責，然後重新開始</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 羅馬書8:1的默想與禱告</h4>
              <div className="bg-green-50 p-3 rounded text-gray-700 text-sm">
                <p>每當自責來臨時，念誦並默想：「如今，那些在基督耶穌裡的就不定罪了」</p>
                <p className="mt-2">禱告：「天父，感謝你透過耶穌基督赦免了我的罪。雖然我仍在掙扎和失敗中，但我在基督裡不再被定罪。請用聖靈的平安充滿我，幫助我在掙扎中繼續向前，不被絕望所勝。」</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">👥 尋求屬靈同伴</h4>
              <p className="text-gray-700 mb-2">與一位信任的屬靈導師或同伴分享你的掙扎，允許他們在你的成聖過程中陪伴你。這表明：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>你不是孤獨的，其他信徒也在掙扎</li>
                <li>掙扎是正常的屬靈生活的一部分</li>
                <li>你不需要在完美主義中虛偽，可以誠實和透明</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
