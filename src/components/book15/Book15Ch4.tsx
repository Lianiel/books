import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Search, HelpCircle, Check } from 'lucide-react';

export default function Book15Ch4() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ content: true, exploration: true, questions: true, practice: true });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">第四章</h1>
        <h2 className="text-xl font-semibold text-gray-700">為神學辯護</h2>
      </div>

      <div className="mb-6 border border-pink-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-pink-50 to-purple-50 hover:from-pink-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-pink-600 flex-shrink-0" /><span className="font-semibold text-gray-800">主要內容</span></div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <p className="text-gray-700 leading-relaxed">許多基督徒對神學心存疑慮。他們擔心深入的神學思考會使信仰過度理性化，或導致教條化。本章針對這些常見的反對意見進行回應和辯護。</p>
            <p className="text-gray-700 leading-relaxed">神學並非要取代信仰，而是要加深和澄清信仰。優質的神學實際上幫助信徒更好地明白聖經、認識神，並在複雜的現代世界中應用信仰。</p>
            <p className="text-gray-700 leading-relaxed">專業神學之所以必要，是因為它為平信徒神學和教牧神學提供了基礎和資源。沒有深層的神學思考，教會容易被異端邪說所迷惑，或被世俗文化所同化。</p>
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
              <h4 className="font-semibold text-gray-800 mb-2">信仰與理性的關係</h4>
              <p className="text-gray-700">基督教信仰並非盲目的。聖經鼓勵信徒用心思去愛神，並要求他們對自己的信仰有充分的理由。神學就是這種有理由信仰的表現。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">歷史見證</h4>
              <p className="text-gray-700">教會歷史上許多關鍵的神學反思（如三位一體論、基督論等）都是在面對異端挑戰時發展出來的。優質的神學幫助教會保持純正的信仰。</p>
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
              <p className="text-gray-700">你認為信仰需要理性的基礎嗎？為什麼或為什麼不需要？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">你曾因為對信仰缺乏充分的理解而感到困惑或不確定嗎？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">在你看來，神學思考如何幫助信徒應對現代社會的挑戰？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 辨別異端</h4>
              <p className="text-gray-700 mb-3">思考你所知道的異端或錯誤的教導。分析它們偏離聖經真理的具體之處。這如何幫助你認識到好神學的重要性？</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💬 神學對話</h4>
              <p className="text-gray-700">與他人進行關於信仰的有意義的對話。練習用清晰的理由來表達和捍衛你的信念。</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
