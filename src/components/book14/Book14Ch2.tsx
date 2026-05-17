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
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <p className="text-gray-700 leading-relaxed">本章幫助我們更清楚地認識聖靈的本質與特性。巴刻使用眼鏡的比喻，說明我們如同近視眼一樣，需要聖經真理的「鏡片」來看清楚神。聖靈的風隨著意思吹，我們需要藉著聖經的教導來認識他的位格、工作與能力。</p>
            <p className="text-gray-700 leading-relaxed">聖靈在聖經中以多種方式被描述。他既是神的靈，又是活著的位格；他見證基督，榮耀基督，在信徒的生命中彰顯基督的品格與能力。認識聖靈的關鍵不在於尋求某種神秘體驗，而在於明白聖經對聖靈的啟示。</p>
          </div>
        )}
      </div>

      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('scripture1')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2"><Search className="w-5 h-5 text-indigo-600 flex-shrink-0" /><span className="font-semibold text-gray-800">經文引導：聖靈如風</span></div>
          {expanded['scripture1'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['scripture1'] && (
          <div className="p-5 bg-white space-y-4">
            <p className="text-gray-700 mb-3">聖靈被描述為風，無所不在，卻又難以捉摸。</p>
            <div className="mt-3 p-3 bg-cyan-50 border-l-4 border-cyan-500 rounded">
              <p style={{color: '#059669', fontWeight: 'bold'}} className="text-sm leading-relaxed">
                <strong>約翰福音 3:8</strong> - 「風隨著意思吹，你聽見風的聲音，卻不曉得它從哪裡來，往哪裡去；凡從聖靈生的，也是如此。」
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('scripture2')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2"><Search className="w-5 h-5 text-indigo-600 flex-shrink-0" /><span className="font-semibold text-gray-800">聖靈是真理的靈</span></div>
          {expanded['scripture2'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['scripture2'] && (
          <div className="p-5 bg-white space-y-4">
            <p className="text-gray-700 mb-3">聖靈是真理的靈，他引導信徒進入一切真理，並見證基督。</p>
            <div className="mt-3 p-3 bg-cyan-50 border-l-4 border-cyan-500 rounded">
              <p style={{color: '#059669', fontWeight: 'bold'}} className="text-sm leading-relaxed">
                <strong>約翰福音 14:17</strong> - 「就是真理的靈，乃世人不能接受的；因為不見他，也不認識他。你們卻認識他，因為他常與你們同在，也要在你們裡面。」
              </p>
            </div>
            <div className="mt-3 p-3 bg-cyan-50 border-l-4 border-cyan-500 rounded">
              <p style={{color: '#059669', fontWeight: 'bold'}} className="text-sm leading-relaxed">
                <strong>約翰福音 16:13</strong> - 「只等真理的聖靈來了，他要引導你們進入一切的真理；因為他不是憑自己說的，乃是把他所聽見的都說出來，並要把將來的事告訴你們。」
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
              <p className="text-gray-700">你對聖靈的認識主要來自哪些途徑？聖經教導、教會信息、個人經歷，還是其他？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">你是否有時感到對聖靈的認識模糊不清？是什麼原因導致這種含糊？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">聖靈如何在你的生活中見證基督、榮耀基督？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 察看聖靈在聖經中的啟示</h4>
              <p className="text-gray-700 mb-3">本周，花時間研讀以下經文，觀察聖靈的位格與工作：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>約翰福音 14:16-17 - 聖靈是保惠師</li>
                <li>約翰福音 16:8-11 - 聖靈使人為罪為義為審判自己責備自己</li>
                <li>羅馬書 8:9-11 - 聖靈內住與生命</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 禱告實踐</h4>
              <p className="text-gray-700 italic">「聖靈啊，求你開我的眼睛，讓我透過聖經真理更清楚地認識你。幫助我不被錯誤的觀念所迷，而是建立在聖經堅實的基礎上。阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
