import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Scale, Search, HelpCircle, Check } from 'lucide-react';

export default function Book15Ch2() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ content: true, exploration: true, questions: true, practice: true });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">第二章</h1>
        <h2 className="text-xl font-semibold text-gray-700">不是所有神學都一律平等</h2>
      </div>

      <div className="mb-6 border border-orange-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2"><Scale className="w-5 h-5 text-orange-600 flex-shrink-0" /><span className="font-semibold text-gray-800">主要內容</span></div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <p className="text-gray-700 leading-relaxed">雖然人人都是神學家，但並非所有的神學都具有相同的質量和準確性。本章探討不同層次的神學思考：平信徒神學、教牧神學和專業神學。</p>
            <p className="text-gray-700 leading-relaxed">平信徒神學是信徒在日常生活中應對信仰和實踐問題所進行的反思。教牧神學是牧師在牧養和教導過程中發展的思考。專業神學是經過系統訓練的神學家所進行的深度研究。</p>
            <p className="text-gray-700 leading-relaxed">這些不同層次的神學互相補充和影響。然而，並非所有神學都同樣有效或正確。我們需要學會分辨優質神學和劣質神學，這需要適當的知識和判斷力。</p>
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
              <h4 className="font-semibold text-gray-800 mb-2">三層次的神學</h4>
              <p className="text-gray-700">平信徒神學在於應對日常信仰問題；教牧神學著重於群體的牧養；專業神學進行深度的系統研究。每一層都重要，但各有其角色和責任。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">神學品質的標準</h4>
              <p className="text-gray-700">評估神學品質的關鍵在於它是否符合聖經真理、邏輯一致、對信徒的靈命有益，以及是否能幫助人們正確地認識神和實踐信仰。</p>
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
              <p className="text-gray-700">在你的信仰群體中，哪些神學觀點是被廣泛接受的？這些觀點是否經得起聖經的檢驗？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">你如何區分優質神學和可能有問題的神學教導？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">你是否曾改變過某個神學立場？是什麼使你重新考慮？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 評估神學聲稱</h4>
              <p className="text-gray-700 mb-3">選擇一個你最近聽到的關於信仰的聲稱。檢視它是否符合聖經、是否邏輯一致，以及是否有聖經根據。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📚 深入學習</h4>
              <p className="text-gray-700">對於你認為重要的神學議題，尋求不同的觀點。比較不同的闡釋，思考它們的優缺點。</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
