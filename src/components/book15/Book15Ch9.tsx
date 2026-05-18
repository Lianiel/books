import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Compass, Search, HelpCircle, Check } from 'lucide-react';

export default function Book15Ch9() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ content: true, exploration: true, questions: true, practice: true });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">第九章</h1>
        <h2 className="text-xl font-semibold text-gray-700">神學研究入門</h2>
      </div>

      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2"><Compass className="w-5 h-5 text-teal-600 flex-shrink-0" /><span className="font-semibold text-gray-800">主要內容</span></div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <p className="text-gray-700 leading-relaxed">本章總結前面的內容，並為那些有志於進一步追求神學學習的人提供實踐性的指引。神學研究不需要正式的神學院教育，但確實需要紀律、開放的心態和與他人的對話。</p>
            <p className="text-gray-700 leading-relaxed">開始神學研究的第一步是選擇一個具體的主題或經文進行深入研究。不要試圖一次性解決所有的神學問題，而應該專注於特定領域，逐步建立更完整的認識。</p>
            <p className="text-gray-700 leading-relaxed">與他人進行神學對話是成長的關鍵。加入查經小組、參加講座、閱讀各種觀點的著作，都能幫助我們更全面地思考神學問題。最重要的是始終讓聖經引導我們的思考，並時刻記住神學的目標是認識神、事奉神。</p>
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
              <h4 className="font-semibold text-gray-800 mb-2">有效的神學學習方法</h4>
              <p className="text-gray-700">選擇一個主題、深入聖經研究、查閱評論和不同觀點、記錄你的發現和疑問、與他人分享和討論，這是一個系統的神學學習循環。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">避免的陷阱</h4>
              <p className="text-gray-700">試圖學習所有東西而忽視深度、固執於一個來源而拒絕其他觀點、將神學與靈命分離、失去謙虛和開放的態度。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">持續的成長</h4>
              <p className="text-gray-700">神學學習是終身的旅程。每個階段都會帶來新的洞見和挑戰。最重要的是保持對真理的追求和對神的敬畏。</p>
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
              <p className="text-gray-700">你最想更深入理解的信仰主題是什麼？為什麼這個主題對你重要？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">誰在你的信仰旅程中扮演了重要的神學導師或同伴的角色？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">你認為自己在神學上還需要成長的領域有哪些？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 制定學習計劃</h4>
              <p className="text-gray-700 mb-3">選擇一個你想研究的主題。列出相關的聖經章節、查找相關的注釋和書籍、計劃在一定時間內完成深入研究。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">👥 尋求同伴</h4>
              <p className="text-gray-700 mb-3">加入或發起一個查經或神學討論小組。與志同道合的信徒進行定期的對話和分享。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📚 持續閱讀</h4>
              <p className="text-gray-700">建立一個個人的神學參考圖書館。包括聖經注釋、系統神學、屬靈傳記和當代應用著作。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📝 記錄反思</h4>
              <p className="text-gray-700">養成記載你的學習心得、疑問和應用的習慣。這幫助你整理思路並追蹤自己的屬靈成長。</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
