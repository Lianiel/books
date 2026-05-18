import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Wrench, Search, HelpCircle, Check } from 'lucide-react';

export default function Book15Ch6() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ content: true, exploration: true, questions: true, practice: true });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">第六章</h1>
        <h2 className="text-xl font-semibold text-gray-700">神學家的工具</h2>
      </div>

      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2"><Wrench className="w-5 h-5 text-indigo-600 flex-shrink-0" /><span className="font-semibold text-gray-800">主要內容</span></div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <p className="text-gray-700 leading-relaxed">進行神學思考需要特定的工具和資源。最首要的是聖經，它是基督教信仰的終極權威。但神學家也需要其他工具：神學傳統、歷史背景知識、邏輯思維和文化理解。</p>
            <p className="text-gray-700 leading-relaxed">聖經注釋、信仰宣言、教會歷史、原文研究、以及與其他信徒的對話，都是神學工作中不可或缺的資源。這些工具幫助我們更準確地理解聖經的本意，並適切地應用於當代。</p>
            <p className="text-gray-700 leading-relaxed">對於平信徒神學家而言，了解這些工具的存在和如何使用它們，可以大大提升他們的神學思考能力和辨別力。</p>
          </div>
        )}
      </div>

      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('exploration')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2"><Search className="w-5 h-5 text-indigo-600 flex-shrink-0" /><span className="font-semibold text-gray-800">延伸探討</span></div>
          {expanded['exploration'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['exploration'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">聖經作為神學的基礎</h4>
              <p className="text-gray-700">對聖經的深入理解是所有良好神學的基礎。這包括理解聖經原文、歷史背景、文學形式和整體的救贖史敘事。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">傳統和信條</h4>
              <p className="text-gray-700">教會信條（如尼西亞信經）提供了關鍵教義的簡潔總結。研究信條歷史幫助我們理解教會如何應對過去的挑戰。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">邏輯和理性</h4>
              <p className="text-gray-700">清晰的思維和邏輯一致性是神學論述的必要條件。自相矛盾的信念會導致混亂和虛弱的見證。</p>
            </div>
          </div>
        )}
      </div>

      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2"><HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" /><span className="font-semibold text-gray-800">反思問題</span></div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && (
          <div className="p-5 bg-white space-y-3">
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">1.</span>
              <p className="text-gray-700">你目前使用哪些資源來幫助你理解聖經和發展你的信仰？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">你對教會信條或信仰宣言的了解有多少？它們對你的信仰有什麼幫助？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">在你的神學思考中，你如何區分聖經的教導和個人的解釋？</p>
            </div>
          </div>
        )}
      </div>

      <div className="mb-6 border border-green-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('practice')} className="w-full px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2"><Check className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="font-semibold text-gray-800">具體實踐方針</span></div>
          {expanded['practice'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['practice'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📚 拓展資源</h4>
              <p className="text-gray-700 mb-3">查閱一本好的聖經注釋或神學詞典。選擇一個你感興趣的聖經人物或觀念，深入研究它。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 邏輯練習</h4>
              <p className="text-gray-700">選擇一個信仰議題，嘗試以有條理和邏輯一致的方式陳述你的位置。檢查是否存在矛盾。</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
