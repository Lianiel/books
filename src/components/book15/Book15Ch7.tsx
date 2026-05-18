import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Map, Search, HelpCircle, Check } from 'lucide-react';

export default function Book15Ch7() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ content: true, exploration: true, questions: true, practice: true });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">第七章</h1>
        <h2 className="text-xl font-semibold text-gray-700">建立神學的脈絡</h2>
      </div>

      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2"><Map className="w-5 h-5 text-blue-600 flex-shrink-0" /><span className="font-semibold text-gray-800">主要內容</span></div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <p className="text-gray-700 leading-relaxed">神學不是在真空中進行的。每個時代的神學思考都受到其特定的歷史、文化和社會脈絡的影響。理解這個脈絡對於解讀古代神學著作和發展當代神學都很重要。</p>
            <p className="text-gray-700 leading-relaxed">早期教父們面對的是異教哲學的挑戰和異端邪說的威脅。中世紀神學家們關注教會權力和救恩論。宗教改革時期強調聖經權威和因信稱義。現代神學則面對科學、理性主義和世俗化的挑戰。</p>
            <p className="text-gray-700 leading-relaxed">理解這些歷史脈絡不僅幫助我們欣賞過去信徒的貢獻，也幫助我們識別當代神學需要回應的獨特挑戰。</p>
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
              <h4 className="font-semibold text-gray-800 mb-2">歷史脈絡的重要性</h4>
              <p className="text-gray-700">了解奧古斯丁的處境（面對摩尼教）幫助我們理解他的神學。同樣，理解馬丁路德的時代背景使他的改革主張更有意義。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">文化脈絡的影響</h4>
              <p className="text-gray-700">神學語言往往借用其文化的概念。希臘教父用希臘哲學的語言，中世紀神學家用經院哲學，現代神學則面對科學和理性主義。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">當代脈絡的識別</h4>
              <p className="text-gray-700">今日的神學家需要識別21世紀特有的挑戰：多元主義、世俗化、科技變革、全球化，以及對權力和正義的新關注。</p>
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
              <p className="text-gray-700">你認識到自己的信仰在多大程度上受到你所處文化的影響？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">21世紀的基督徒面臨哪些獨特的神學挑戰？過去的神學對這些挑戰有幫助嗎？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">你認為什麼樣的神學能最有效地與你的文化對話？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">📖 歷史研究</h4>
              <p className="text-gray-700 mb-3">選擇一位重要的神學家（如奧古斯丁、阿奎那、路德等），研究他所處的時代背景，並思考這如何塑造了他的神學。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🌍 文化對話</h4>
              <p className="text-gray-700">思考你的社會中哪些價值觀可能與基督教信仰相衝突？神學應該如何回應這些衝突？</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
