import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Users, Target, Lightbulb } from 'lucide-react';

export default function Book15Home() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    intro: true,
    structure: true,
    authors: true,
    chapters: true
  });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">誰需要神學？</h1>
        <p className="text-lg text-gray-600 mb-2">神學研究入門</p>
        <p className="text-sm text-gray-500">Who Needs Theology?: An Invitation to the Study of God</p>
      </div>

      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('intro')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2"><BookOpen className="w-5 h-5 text-amber-600 flex-shrink-0" /><span className="font-semibold text-gray-800">本書簡介</span></div>
          {expanded['intro'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['intro'] && (
          <div className="p-5 bg-white space-y-4">
            <p className="text-gray-700 leading-relaxed">《誰需要神學？》是一部經典的神學入門著作，旨在幫助普通基督徒和平信徒認識神學的重要性。本書由著名神學家史丹尼格蘭茲和羅傑奧遜合著，以親切易懂的方式介紹神學研究的基礎概念。</p>
            <p className="text-gray-700 leading-relaxed">本書針對許多基督徒對神學存有的誤解和不信任的態度進行深入探討，幫助讀者明白優質神學對於基督教信仰的意義和價值，以及神學如何幫助我們更深入地認識神和回應當代信仰課題。</p>
          </div>
        )}
      </div>

      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('authors')} className="w-full px-5 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2"><Users className="w-5 h-5 text-blue-600 flex-shrink-0" /><span className="font-semibold text-gray-800">作者介紹</span></div>
          {expanded['authors'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['authors'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">史丹尼格蘭茲（Stanley J. Grenz）</h4>
              <p className="text-gray-700">美國著名改革宗神學家，長期在大學和神學院教授神學科目超過十年以上。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">羅傑奧遜（Roger E. Olson）</h4>
              <p className="text-gray-700">美國資深神學家，同樣具有豐富的神學教學經驗和對基督教信仰的深入研究。</p>
            </div>
          </div>
        )}
      </div>

      <div className="mb-6 border border-green-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('structure')} className="w-full px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2"><Target className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="font-semibold text-gray-800">本書特色</span></div>
          {expanded['structure'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['structure'] && (
          <div className="p-5 bg-white space-y-3">
            <div className="flex gap-3">
              <span className="text-green-600 font-bold flex-shrink-0">•</span>
              <p className="text-gray-700">系統介紹神學定義、任務和傳統，幫助平信徒理解神學的真正含義</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-600 font-bold flex-shrink-0">•</span>
              <p className="text-gray-700">針對常見的對神學的誤解進行辯護，消除讀者心中的疑慮</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-600 font-bold flex-shrink-0">•</span>
              <p className="text-gray-700">強調基督教信仰需要有思想性和說服力的神學基礎</p>
            </div>
            <div className="flex gap-3">
              <span className="text-green-600 font-bold flex-shrink-0">•</span>
              <p className="text-gray-700">展現優質神學如何幫助信徒分辨異端邪說和回應當代課題</p>
            </div>
          </div>
        )}
      </div>

      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('chapters')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2"><Lightbulb className="w-5 h-5 text-purple-600 flex-shrink-0" /><span className="font-semibold text-gray-800">章節內容</span></div>
          {expanded['chapters'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['chapters'] && (
          <div className="p-5 bg-white space-y-2">
            <p className="text-gray-700 font-semibold">全書共九章，涵蓋以下主題：</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
              <li>第一章：人人都是神學家</li>
              <li>第二章：不是所有神學都一律平等</li>
              <li>第三章：界定神學</li>
              <li>第四章：為神學辯護</li>
              <li>第五章：神學的任務和傳統</li>
              <li>第六章：神學家的工具</li>
              <li>第七章：建立神學的脈絡</li>
              <li>第八章：神學生活化</li>
              <li>第九章：神學研究入門</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
