import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Search, HelpCircle, Check } from 'lucide-react';

export default function Book15Ch1() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ content: true, exploration: true, questions: true, practice: true });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">第一章</h1>
        <h2 className="text-xl font-semibold text-gray-700">人人都是神學家</h2>
      </div>

      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2"><Users className="w-5 h-5 text-amber-600 flex-shrink-0" /><span className="font-semibold text-gray-800">主要內容</span></div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <p className="text-gray-700 leading-relaxed">本章的核心觀點是：基督徒都是神學家。無論是平信徒、牧師還是學者，每個信徒都在進行神學思考和表達，無論他們是否意識到或承認這一點。</p>
            <p className="text-gray-700 leading-relaxed">當我們說「人人都是神學家」時，我們指的是每個人都持有關於神的信念，並在日常生活中根據這些信念來思考和行動。無論我們是否正式學習過神學，我們都在用各種方式表達和辯護我們對神的理解。</p>
            <p className="text-gray-700 leading-relaxed">區別在於：有些人以無意識和隨意的方式進行神學思考，而有些人則以有意識和系統的方式進行。優質的神學就是通過認真、批判和建設性的思考，幫助我們更準確地表達和驗證我們對神的信念。</p>
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
              <h4 className="font-semibold text-gray-800 mb-2">神學的普遍性</h4>
              <p className="text-gray-700">神學思考並不是少數專家或牧師的專利。每個基督徒都需要思考和回答關於信仰的基本問題：誰是神？神如何救贖我們？我應該如何生活？</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">有意識 vs 無意識的神學</h4>
              <p className="text-gray-700">許多信徒進行神學思考而不自知。他們在做出人生決定、應對挑戰或教導他人時，實際上都在表達他們的神學信念。認識到這一點是學習有意識神學思考的第一步。</p>
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
              <p className="text-gray-700">你認為自己的關於神的信念是從何而來？聖經教導、教會傳統、個人經歷，還是文化影響？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">你是否曾有意識地思考過自己的神學信念？還是大多時候是無意識地根據這些信念行動？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">你如何回應有人質疑你的信仰觀點？這些回應反映了什麼樣的神學思考？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 識別你的神學</h4>
              <p className="text-gray-700 mb-3">選擇一個你最近做出的重要決定或對他人的一個教導。反思在這個決定或教導背後的神學假設和信念是什麼。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📝 記錄你的信念</h4>
              <p className="text-gray-700">寫下五個你認為關於神和信仰的核心信念。然後思考：這些信念是否一致？它們是否經得起聖經的檢驗？</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
