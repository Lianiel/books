import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Search, HelpCircle, Check } from 'lucide-react';

export default function Book14Ch3() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ content: true, exploration: true, questions: true, practice: true });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">第3章</h1>
        <h2 className="text-xl font-semibold text-gray-700">聖經裡的聖靈</h2>
      </div>

      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2"><BookOpen className="w-5 h-5 text-purple-600 flex-shrink-0" /><span className="font-semibold text-gray-800">主要內容</span></div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <p className="text-gray-700 leading-relaxed">本章查考聖經中有關聖靈的完整啟示，從舊約到新約，追溯聖靈工作的連貫性。聖靈在創造的時刻就已參與，在以色列的歷史中引導先知和領袖，並在五旬節的關鍵時刻澆灌在初代教會身上。</p>
            <p className="text-gray-700 leading-relaxed">聖經記錄了聖靈如何感動人心，賜予能力，引導真理，見證基督。從舊約的靈魂充滿到新約的內住同在，聖靈的工作構成了神救贖計畫的核心。</p>
          </div>
        )}
      </div>

      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('scripture1')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2"><Search className="w-5 h-5 text-purple-600 flex-shrink-0" /><span className="font-semibold text-gray-800">舊約中的聖靈</span></div>
          {expanded['scripture1'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['scripture1'] && (
          <div className="p-5 bg-white space-y-4">
            <div className="mt-3 p-3 bg-emerald-50 border-l-4 border-emerald-500 rounded">
              <p style={{color: '#059669', fontWeight: 'bold'}} className="text-sm leading-relaxed">
                <strong>創世記 1:2</strong> - 「地是空虛混沌，淵面黑暗；神的靈運行在水面上。」
              </p>
            </div>
            <div className="mt-3 p-3 bg-emerald-50 border-l-4 border-emerald-500 rounded">
              <p style={{color: '#059669', fontWeight: 'bold'}} className="text-sm leading-relaxed">
                <strong>撒母耳記上 16:13</strong> - 「撒母耳就用角裡的膏油，在他諸兄中膏了他。從這日起，耶和華的靈就大大感動大衛。」
              </p>
            </div>
            <div className="mt-3 p-3 bg-emerald-50 border-l-4 border-emerald-500 rounded">
              <p style={{color: '#059669', fontWeight: 'bold'}} className="text-sm leading-relaxed">
                <strong>以賽亞書 11:2</strong> - 「耶和華的靈必住在他身上，就是使他有智慧和聰明的靈，謀略和能力的靈，知識和敬畏耶和華的靈。」
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('scripture2')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2"><Search className="w-5 h-5 text-purple-600 flex-shrink-0" /><span className="font-semibold text-gray-800">新約中聖靈的澆灌</span></div>
          {expanded['scripture2'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['scripture2'] && (
          <div className="p-5 bg-white space-y-4">
            <div className="mt-3 p-3 bg-emerald-50 border-l-4 border-emerald-500 rounded">
              <p style={{color: '#059669', fontWeight: 'bold'}} className="text-sm leading-relaxed">
                <strong>使徒行傳 2:4</strong> - 「他們就都被聖靈充滿，按著聖靈所賜的口才說起別國的話來。」
              </p>
            </div>
            <div className="mt-3 p-3 bg-emerald-50 border-l-4 border-emerald-500 rounded">
              <p style={{color: '#059669', fontWeight: 'bold'}} className="text-sm leading-relaxed">
                <strong>路加福音 4:18</strong> - 「主的靈在我身上，因為他用膏油膏我，叫我傳福音給貧窮的人；差遣我去宣傳被擄的得釋放，瞎眼的得看見，叫那受壓制的得自由。」
              </p>
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
              <p className="text-gray-700">從舊約到新約，聖靈的工作有什麼一致性和變化？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">聖靈在五旬節澆灌的事件有什麼重要意義？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">📖 經文研讀計畫</h4>
              <p className="text-gray-700 mb-2">本周研讀以下經文，追溯聖靈在聖經中的啟示：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>創世記 1:1-2（創造中的聖靈）</li>
                <li>以賽亞書 61:1-2（彌賽亞的聖靈）</li>
                <li>使徒行傳 1:8, 2:1-4（五旬節事件）</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
