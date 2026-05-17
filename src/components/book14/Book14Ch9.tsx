import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Search, HelpCircle, Check } from 'lucide-react';

export default function Book14Ch9() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ content: true, exploration: true, questions: true, practice: true });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">第9章</h1>
        <h2 className="text-xl font-semibold text-gray-700">附錄：羅馬書第七章的『苦中人』</h2>
      </div>

      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2"><BookOpen className="w-5 h-5 text-purple-600 flex-shrink-0" /><span className="font-semibold text-gray-800">主要內容</span></div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <p className="text-gray-700 leading-relaxed">第9章作為附錄，深入解析羅馬書第七章中『苦中人』的身份和處境。保羅在這一章描述了一個內在的靈性掙扎——我想要行善卻無法完全成就。這反映了所有信徒的經驗：我們被重生在靈裡，卻仍然在肉體中與罪爭戰。</p>
            <p className="text-gray-700 leading-relaxed">聖靈在我們與罪的戰爭中提供力量。我們不是孤獨地對抗罪惡，而是藉著聖靈的幫助，逐漸獲得勝利。認識聖靈的同在和幫助，是基督徒得勝生活的關鍵。</p>
          </div>
        )}
      </div>

      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('scripture')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2"><BookOpen className="w-5 h-5 text-indigo-600 flex-shrink-0" /><span className="font-semibold text-gray-800">核心經文</span></div>
          {expanded['scripture'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['scripture'] && (
          <div className="p-5 bg-white space-y-4">
            <div className="mt-3 p-3 bg-emerald-50 border-l-4 border-emerald-500 rounded">
              <p style={{color: '#059669', fontWeight: 'bold'}} className="text-sm leading-relaxed">
                <strong>羅馬書 7:14-25</strong> - 「我們知道律法是屬乎靈的，但我是屬乎肉體的，是已經賣給罪了。因為我所做的，我自己不明白；我所願意的，我並沒有去做；我所恨惡的，我倒去做。若我所做的是我所不願意的，我就同意律法是善的。既是這樣，就不是我做的，乃是住在我裡頭的罪做的...我真是苦啊！誰能救我脫離這取死的身體呢？感謝神，藉著我們的主耶穌基督就能救我。」
              </p>
            </div>
            <div className="mt-3 p-3 bg-emerald-50 border-l-4 border-emerald-500 rounded">
              <p style={{color: '#059669', fontWeight: 'bold'}} className="text-sm leading-relaxed">
                <strong>羅馬書 8:1-2</strong> - 「如今，那些在基督耶穌裡的就不定罪了。因為賜生命聖靈的律，在基督耶穌裡釋放了我，使我脫離罪和死的律了。」
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
        {expanded['exploration'] && <div className="p-5 bg-white space-y-4"><p className="text-gray-700">羅馬書第七章的解經內容。</p></div>}
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
