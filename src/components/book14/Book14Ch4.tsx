import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Search, HelpCircle, Check } from 'lucide-react';

export default function Book14Ch4() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ content: true, exploration: true, questions: true, practice: true });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">第4章</h1>
        <h2 className="text-xl font-semibold text-gray-700">聖靈的路徑－聖潔之道</h2>
      </div>
      <div className="mb-6 border border-green-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-green-50 to-teal-50 hover:from-green-100 hover:to-teal-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="font-semibold text-gray-800">主要內容</span></div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <p className="text-gray-700 leading-relaxed">本章探討聖靈如何帶領信徒進入聖潔的生活。聖潔不是自我折磨或禁慾主義，而是對神的聖愛的回應，將自己完全獻上為活祭。聖靈的工作是使我們與神的聖潔性情相交，逐漸轉變成基督的形象。</p>
            <p className="text-gray-700 leading-relaxed">成聖是聖靈的核心工作。他喚醒我們的良心，使我們認識罪的污穢，同時賜予我們力量去克服試探，過聖潔的生活。這是一個進行的過程，不是一次完成的經驗。</p>
          </div>
        )}
      </div>

      <div className="mb-6 border border-green-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('scripture1')} className="w-full px-5 py-3 bg-gradient-to-r from-green-50 to-teal-50 hover:from-green-100 hover:to-teal-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="font-semibold text-gray-800">聖潔的呼召</span></div>
          {expanded['scripture1'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['scripture1'] && (
          <div className="p-5 bg-white space-y-4">
            <div className="mt-3 p-3 bg-teal-50 border-l-4 border-teal-500 rounded">
              <p style={{color: '#059669', fontWeight: 'bold'}} className="text-sm leading-relaxed">
                <strong>希伯來書 12:14</strong> - 「你們要追求與眾人和睦，並要追求聖潔；非聖潔沒有人能見主。」
              </p>
            </div>
            <div className="mt-3 p-3 bg-teal-50 border-l-4 border-teal-500 rounded">
              <p style={{color: '#059669', fontWeight: 'bold'}} className="text-sm leading-relaxed">
                <strong>彼得前書 1:15-16</strong> - 「那召你們的既是聖潔，你們在一切所行的事上也要聖潔；因為經上記著說：『你們要聖潔，因為我是聖潔的。』」
              </p>
            </div>
            <div className="mt-3 p-3 bg-teal-50 border-l-4 border-teal-500 rounded">
              <p style={{color: '#059669', fontWeight: 'bold'}} className="text-sm leading-relaxed">
                <strong>馬太福音 5:8</strong> - 「清心的人有福了！因為他們必得見神。」
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('exploration')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2"><Search className="w-5 h-5 text-indigo-600 flex-shrink-0" /><span className="font-semibold text-gray-800">延伸探討</span></div>
          {expanded['exploration'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['exploration'] && <div className="p-5 bg-white space-y-4"><p className="text-gray-700">延伸內容將補充。</p></div>}
      </div>
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2"><HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" /><span className="font-semibold text-gray-800">反思問題</span></div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && <div className="p-5 bg-white space-y-3"><p className="text-gray-700">反思問題將補充。</p></div>}
      </div>
      <div className="mb-6 border border-green-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('practice')} className="w-full px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2"><Check className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="font-semibold text-gray-800">具體實踐方針</span></div>
          {expanded['practice'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['practice'] && <div className="p-5 bg-white space-y-4"><p className="text-gray-700">實踐方針將補充。</p></div>}
      </div>
    </div>
  );
}
