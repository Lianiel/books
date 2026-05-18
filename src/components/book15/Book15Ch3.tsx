import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Search, HelpCircle, Check } from 'lucide-react';

export default function Book15Ch3() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ content: true, exploration: true, questions: true, practice: true });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">第三章</h1>
        <h2 className="text-xl font-semibold text-gray-700">界定神學</h2>
      </div>

      <div className="mb-6 border border-red-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-red-50 to-pink-50 hover:from-red-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2"><BookOpen className="w-5 h-5 text-red-600 flex-shrink-0" /><span className="font-semibold text-gray-800">主要內容</span></div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <p className="text-gray-700 leading-relaxed">「神學」一詞來自希臘文 theos（神）和 logos（理性、話語），字面意思是「關於神的言論」。但作為一個學科，神學意指對關於神和世界的基本信念的有條理的反思和表達。</p>
            <p className="text-gray-700 leading-relaxed">基督教神學特別關注聖經所啟示的神的本質和作為，以及信徒應如何回應神。它涉及對信條的辯護、不同教導的比較、以及信念在生活中的應用。</p>
            <p className="text-gray-700 leading-relaxed">一個完整的神學定義應包括：對信念的有意識的反思、對聖經真理的忠實、邏輯的一致性，以及對信徒生活的實踐意義。</p>
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
              <h4 className="font-semibold text-gray-800 mb-2">神學的批判性功能</h4>
              <p className="text-gray-700">神學需要批判性地審視我們的信念，確保它們符合聖經真理。這不是為了拆毀信仰，而是為了確保我們建立在堅實的基礎之上。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">神學的建設性功能</h4>
              <p className="text-gray-700">神學也有建設性的任務，即以當代語言和概念系統地闡述基督教真理，使其對現代人有意義和相關性。</p>
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
              <p className="text-gray-700">用你自己的話語定義神學。你的定義包括哪些關鍵要素？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">神學如何在你的信仰生活中發揮作用？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">反思聖經對神的描述。這些不同的描述如何幫助我們建立一個完整的神學理解？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 反思你的神學處境</h4>
              <p className="text-gray-700 mb-3">思考在你的特定文化和歷史環境中，什麼樣的神學議題對信徒最重要？現代基督徒面臨哪些神學挑戰？</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 聖經研究</h4>
              <p className="text-gray-700">選擇聖經中關於神的一個重要教導（如神的愛、神的聖潔、救恩等），進行深入的經文研究，並思考它在今日的應用。</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
