import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Search, HelpCircle, Check } from 'lucide-react';

export default function Book14Ch3() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ content: true, exploration: true, questions: true, practice: true });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">第3章</h1>
        <h2 className="text-xl font-semibold text-gray-700">第 3 章內容</h2>
      </div>

      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2"><BookOpen className="w-5 h-5 text-purple-600 flex-shrink-0" /><span className="font-semibold text-gray-800">主要內容</span></div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && <div className="p-5 bg-white space-y-4"><p className="text-gray-700 leading-relaxed">第 3 章的內容將在此處補充。</p></div>}
      </div>

      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('exploration')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2"><Search className="w-5 h-5 text-indigo-600 flex-shrink-0" /><span className="font-semibold text-gray-800">延伸探討</span></div>
          {expanded['exploration'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['exploration'] && <div className="p-5 bg-white space-y-4"><p className="text-gray-700">延伸內容將在此處補充。</p></div>}
      </div>

      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2"><HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" /><span className="font-semibold text-gray-800">反思問題</span></div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && <div className="p-5 bg-white space-y-3"><p className="text-gray-700">反思問題將在此處補充。</p></div>}
      </div>

      <div className="mb-6 border border-green-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('practice')} className="w-full px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2"><Check className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="font-semibold text-gray-800">具體實踐方針</span></div>
          {expanded['practice'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['practice'] && <div className="p-5 bg-white space-y-4"><p className="text-gray-700">實踐方針將在此處補充。</p></div>}
      </div>
    </div>
  );
}
