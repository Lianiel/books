import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Search, HelpCircle, Check } from 'lucide-react';

export default function Book15Ch8() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ content: true, exploration: true, questions: true, practice: true });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">第八章</h1>
        <h2 className="text-xl font-semibold text-gray-700">神學生活化</h2>
      </div>

      <div className="mb-6 border border-cyan-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-cyan-50 to-blue-50 hover:from-cyan-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2"><Heart className="w-5 h-5 text-cyan-600 flex-shrink-0" /><span className="font-semibold text-gray-800">主要內容</span></div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <p className="text-gray-700 leading-relaxed">神學的最終目的不是為了滿足理性，而是為了深化我們對神的認識，進而改變我們的生活。理論性的神學必須轉化為實踐的信仰。</p>
            <p className="text-gray-700 leading-relaxed">認識神應該導致敬畏、感謝、順從和愛。當我們更深入地思考神的聖潔，我們應該更加渴望聖潔。當我們思考神的愛，我們應該更加願意彼此相愛。當我們思考救贖，我們應該更加感激並願意與他人分享這好信息。</p>
            <p className="text-gray-700 leading-relaxed">最好的神學不是存在於精心編制的系統中，而是體現在信徒的生命見證中——他們的誠實、慷慨、正義和對神的忠心。</p>
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
              <h4 className="font-semibold text-gray-800 mb-2">理論與實踐的連結</h4>
              <p className="text-gray-700">好的神學思考應該引導實踐的改變。我們研究聖經不是為了知識本身，而是為了認識神並順服祂。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">品格的塑造</h4>
              <p className="text-gray-700">深入的信仰必然塑造我們的品格。真正的神學家應該體現他們所相信的美德。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">社會責任</h4>
              <p className="text-gray-700">對神的認識也應該激發我們對社會正義的關心。信仰不應該是單純個人性的，而應該導向關懷他人和建造更公正的社會。</p>
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
              <p className="text-gray-700">你的信仰理解如何影響你的日常選擇和行為？是否有某些信念尚未轉化為實際生活改變？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">在你認識的人中，誰最好地體現了他們所聲稱相信的信仰？他們如何做到的？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">你認為基督徒在社會中應該如何見證他們的信仰？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 信念到行為</h4>
              <p className="text-gray-700 mb-3">選擇一個你最近思考過的神學真理。思考它應該如何改變你的態度、決定或行為。制定一個具體的行動計劃。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">👥 見證他人</h4>
              <p className="text-gray-700">尋找機會與他人分享你如何通過信仰經歷了改變。你的生命見證往往比神學論述更有說服力。</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
