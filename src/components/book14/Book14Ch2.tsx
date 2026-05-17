import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Eye, Search, HelpCircle, Check } from 'lucide-react';

export default function Book14Ch2() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ content: true, exploration: true, questions: true, practice: true });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">第2章</h1>
        <h2 className="text-xl font-semibold text-gray-700">看清楚聖靈</h2>
      </div>
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2"><Eye className="w-5 h-5 text-blue-600 flex-shrink-0" /><span className="font-semibold text-gray-800">主要內容</span></div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && <div className="p-5 bg-white space-y-4"><p className="text-gray-700 leading-relaxed">本章幫助我們更清楚地認識聖靈的本質與特性。</p></div>}
      </div>
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('exploration')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2"><Search className="w-5 h-5 text-indigo-600 flex-shrink-0" /><span className="font-semibold text-gray-800">延伸探討</span></div>
          {expanded['exploration'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['exploration'] && <div className="p-5 bg-white space-y-4"><div><h4 className="font-semibold text-gray-800 mb-2">聖靈的屬性</h4><p className="text-gray-700">聖靈具有神的所有屬性。</p></div></div>}
      </div>
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2"><HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" /><span className="font-semibold text-gray-800">反思問題</span></div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && <div className="p-5 bg-white space-y-3"><div className="flex gap-3"><span className="text-amber-600 font-bold flex-shrink-0">1.</span><p className="text-gray-700">你如何理解聖靈的位格？</p></div></div>}
      </div>
      <div className="mb-6 border border-green-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('practice')} className="w-full px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2"><Check className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="font-semibold text-gray-800">具體實踐方針</span></div>
          {expanded['practice'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['practice'] && <div className="p-5 bg-white space-y-4"><div><h4 className="font-semibold text-green-700 mb-2">🎯 觀察聖靈的工作</h4><p className="text-gray-700">在生活中觀察聖靈如何向你說話、引導你。</p></div></div>}
      </div>
    </div>
  );
}
