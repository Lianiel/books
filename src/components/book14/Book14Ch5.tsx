import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book14Ch5() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">第5章</h1>
        <h2 className="text-xl font-semibold text-gray-700">聖靈的路徑：成聖面面觀</h2>
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
            <p className="text-gray-700 leading-relaxed">成聖不是單一的經驗或瞬間，而是一個複雜、多面的過程。聖靈的成聖工作涉及信徒生命的各個層面——屬靈的、道德的、心理的、社會的。</p>
            <p className="text-gray-700 leading-relaxed">首先是地位上的成聖——我們在基督裡已經被宣告為聖。這是一個法律上的、瞬間的改變，不是基於我們的行為，而是基於基督的完美。</p>
            <p className="text-gray-700 leading-relaxed">其次是實踐上的成聖——聖靈在日常生活中漸進地改變我們的品格、思想和行為。這是一個進行式的工作，需要信徒與聖靈合作，主動選擇聖潔。</p>
            <p className="text-gray-700 leading-relaxed">最後是終極的成聖——當我們在基督裡最終完成時，我們的成聖將會完全。這涉及身體的復活、性情的完全改變，完全進入神的同在。</p>
            <p className="text-gray-700 leading-relaxed">聖靈在所有這些層面上工作，使用各種工具——神的道、試煉、他人的見證、內在的光照——來塑造我們變成基督的樣式。</p>
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
              <h4 className="font-semibold text-gray-800 mb-2">三個成聖層次的統一</h4>
              <p className="text-gray-700 leading-relaxed">地位成聖是實踐成聖的基礎——我們能夠追求聖潔，因為我們已經在基督裡被宣告為聖。實踐成聖是我們對地位成聖的回應——我們活出我們已經成為的樣子。終極成聖是這個過程的完成——當神最終會完成他在我們身上開始的美好工作。三者形成一個統一的救贖敘事。</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">成聖中的人的責任</h4>
              <p className="text-gray-700 leading-relaxed">成聖既是神的工作，也需要人的回應。「你們得救是本乎恩，也因著信」——這個原則同樣適用於成聖。聖靈供應力量，但信徒必須選擇；聖靈光照，但信徒必須悔改；聖靈引導，但信徒必須服從。這是一個合作的過程，不是被動的。</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">聖靈使用的工具</h4>
              <p className="text-gray-700 leading-relaxed">聖靈成聖的工具多元化：神的道（真理光照）、禱告（內在對齊）、試煉（品格塑造）、他人見證（外在示範）、困難（謙遜化）、成功（感恩化）。聖靈能夠在生活的任何層面工作，將所有經歷轉化為成聖的機會。</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">成聖的節奏與平衡</h4>
              <p className="text-gray-700 leading-relaxed">許多信徒陷入兩個極端：一是期望完全成聖而陷入失望；二是放棄成聖的追求而陷入妥協。健康的成聖是有張力的——完全承諾但不完美，主動進取但不自我掙扎，喜樂於進步但不被進度綑綁。</p>
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
              <p className="text-gray-700">你是否曾意識到自己在基督裡「已經被聖化」這個真理？這如何影響你對成聖的追求？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">在實踐成聖的過程中，你是傾向於等待神工作，還是主動付出努力？兩者應該如何平衡？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">聖靈在你生命中用過哪些「工具」來幫助你成聖？經歷最深的是什麼？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">你對成聖的期待是現實的嗎？有沒有陷入追求完全而導致的失望或自我控告？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">你對「終極成聖」（在基督再來時得以完成）有多少的渴望和盼望？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 成聖三層次的自評</h4>
              <p className="text-gray-700 mb-2">針對自己的信仰旅程，評估每個層次：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li><strong>地位：</strong>我確信自己在基督裡已被聖化嗎？</li>
                <li><strong>實踐：</strong>我在哪些方面有明顯的屬靈成長？哪些方面仍在掙扎？</li>
                <li><strong>終極：</strong>對終極成聖的盼望如何激勵我今天的生活？</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">📋 聖靈工具清點</h4>
              <p className="text-gray-700 mb-2">在過去一月，聖靈透過哪些工具在你生命中工作？</p>
              <div className="bg-green-50 p-3 rounded text-gray-700 text-sm">
                <p>神的道 / 禱告 / 試煉 / 他人見證 / 困難 / 成就 / 其他</p>
                <p className="mt-2">選擇其中一個最有深度的經歷，深入思考聖靈想教你什麼。</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔄 合作模式的重塑</h4>
              <p className="text-gray-700 mb-2">在某個具體的成聖領域（如誠實、耐心、愛心），重新設定你與聖靈的合作：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>神的部分：我祈求聖靈做什麼？</li>
                <li>我的部分：我具體要做什麼？</li>
                <li>合作的方式：每日如何實踐？</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 成聖的禱告與盼望</h4>
              <div className="bg-green-50 p-3 rounded text-gray-700 text-sm">
                <p>「親愛的聖靈，感謝你已經宣告我為聖。幫助我每一天實踐這個身份。使用生活中的每一個環境來塑造我，使我更像基督。同時，請提醒我終極成聖的盼望，這個盼望使我今天的努力充滿盼望和喜樂。」</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
