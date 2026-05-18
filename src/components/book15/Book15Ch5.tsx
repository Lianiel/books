import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Target, Search, HelpCircle, Check } from 'lucide-react';

export default function Book15Ch5() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ content: true, exploration: true, questions: true, practice: true });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">第五章</h1>
        <h2 className="text-xl font-semibold text-gray-700">神學的任務和傳統</h2>
      </div>

      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-indigo-50 hover:from-purple-100 hover:to-indigo-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2"><Target className="w-5 h-5 text-purple-600 flex-shrink-0" /><span className="font-semibold text-gray-800">主要內容</span></div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <p className="text-gray-700 leading-relaxed">神學有兩個主要任務：批判性和建設性。批判性任務涉及審視現有的信念，以確保它們符合聖經和基督教傳統。建設性任務則是將信仰以當代方式重新表達，使其對現代人有意義。</p>
            <p className="text-gray-700 leading-relaxed">神學傳統提供了一個寶貴的資源。與教會的歷史對話，我們可以學到過去信徒如何應對神學挑戰，避免重複過去的錯誤，同時也被他們的信心和智慧所鼓勵。</p>
            <p className="text-gray-700 leading-relaxed">然而，傳統並非一成不變的。每一代信徒都需要在其特定的文化和歷史處境中重新思考和表達信仰，同時保持對聖經真理的忠實。</p>
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
              <h4 className="font-semibold text-gray-800 mb-2">神學的批判性任務</h4>
              <p className="text-gray-700">這涉及檢驗教導是否與聖經一致，邏輯是否清晰，是否遺漏了重要的聖經真理。批判不是為了摧毀，而是為了建立更堅實的信仰基礎。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">神學的建設性任務</h4>
              <p className="text-gray-700">這要求我們用現代人能理解的語言和概念來表達古老的真理，回應時代的新問題，同時不改變信仰的本質。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">與傳統對話</h4>
              <p className="text-gray-700">學習教會傳統不是盲目跟從，而是與過去信徒的對話。我們接受他們的智慧，但也在當代脈絡中評估和應用。</p>
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
              <p className="text-gray-700">你認為教會傳統的作用是什麼？它應該如何指導現代信仰實踐？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">在你的信仰中，有哪些地方需要批判性檢驗？有哪些需要以新方式重新表達？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">你認識的有信仰智慧的人，他們如何在當代應用古老的真理？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">📚 研究傳統</h4>
              <p className="text-gray-700 mb-3">選擇一個神學議題（如救恩、聖靈的工作、末世論等），研究教會歷史上不同傳統如何理解它。思考你能從他們身上學到什麼。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 當代應用</h4>
              <p className="text-gray-700">選擇一個古老的神學真理。思考如何用你自己時代的語言和概念來表達它，使其對非基督徒朋友有説服力。</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
