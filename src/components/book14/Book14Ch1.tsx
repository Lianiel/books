import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Search, HelpCircle, Check } from 'lucide-react';

export default function Book14Ch1() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    exploration: true,
    questions: true,
    practice: true
  });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">第1章</h1>
        <h2 className="text-xl font-semibold text-gray-700">序言及前言</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <p className="text-gray-700 leading-relaxed">《活在聖靈中》是一部經典的屬靈著作，幫助基督徒深入認識聖靈的位格、工作與能力。透過系統的聖經教導，巴刻牧師引領我們進入與聖靈親密同行的靈命經驗。</p>
            <p className="text-gray-700 leading-relaxed">本序言部分介紹了本書的核心內容、閱讀本書所需的準備，以及對讀者靈命增長的期待。</p>
          </div>
        )}
      </div>

      {/* 延伸探討 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('exploration')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">延伸探討</span>
          </div>
          {expanded['exploration'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['exploration'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">1. 聖靈在聖經中的位置</h4>
              <p className="text-gray-700">探討聖靈在舊約與新約中的角色與啟示。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">2. 聖靈與基督的關係</h4>
              <p className="text-gray-700">聖靈如何見證基督，如何將基督的工作應用在信徒身上。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">3. 聖靈與信徒的關係</h4>
              <p className="text-gray-700">聖靈內住的意義，以及聖靈在信徒生命中的工作。</p>
            </div>
          </div>
        )}
      </div>

      {/* 反思問題 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">反思問題</span>
          </div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && (
          <div className="p-5 bg-white space-y-3">
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">1.</span>
              <p className="text-gray-700">你對聖靈的認識來自哪些途徑？教會、靈修書籍、個人經歷？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">在你的信仰生活中，聖靈如何向你顯明基督？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">你是否經歷過聖靈內住的實際感受？那是什麼樣的經驗？</p>
            </div>
          </div>
        )}
      </div>

      {/* 具體實踐方針 */}
      <div className="mb-6 border border-green-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('practice')} className="w-full px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">具體實踐方針</span>
          </div>
          {expanded['practice'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['practice'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 認識聖靈屬性</h4>
              <p className="text-gray-700 mb-2">這一週，在禱告中重點思考聖靈的三個屬性：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>聖靈是神（神聖性）</li>
                <li>聖靈是位格（有意志、理性、情感）</li>
                <li>聖靈是內住的（與我們同在）</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 經文閱讀</h4>
              <p className="text-gray-700">讀約翰福音14:15-31，注意耶穌對聖靈的承諾。</p>
              <div className="mt-3 p-3 bg-emerald-50 border-l-4 border-emerald-500 rounded">
                <p style={{color: '#059669', fontWeight: 'bold'}} className="text-sm leading-relaxed">
                  <strong>約翰福音 14:15-31</strong> - 「你們若愛我，就要遵守我的命令。我要求父，父就另外賜給你們一位保惠師，叫他永遠與你們同在，就是真理的靈。乃世人不能接受他，因為不見他，也不認識他；你們卻認識他，因為他常與你們同在，也要在你們裡面。我不撇下你們為孤兒，我必到你們這裡來。還有不多的時候，世人不再看見我，你們卻看見我；因為我活著，你們也要活著。到那日，你們就知道我在父裡面，你們在我裡面，我也在你們裡面。有了我的命令又遵守的，這人就是愛我的；愛我的，我父也必愛他，我也要愛他，並且要向他顯現。猶大（不是加略人的那個）問耶穌說：『主啊，為甚麼要向我們顯現，不向世人顯現呢？』耶穌回答說：『人若愛我，就必遵守我的道；我父也必愛他，並且我們要到他那裡去，與他同住。不愛我的人就不遵守我的道。你們所聽見的道不是我的，乃是差我來之父的道。我還有許多事要告訴你們，但你們現在擔當不了；只等真理的聖靈來了，他要引導你們進入一切的真理；因為他不是憑自己說的，乃是把他所聽見的都說出來，並要把將來的事告訴你們。他要榮耀我，因為他要將受於我的告訴你們。凡父所有的，都是我的；所以我說，他要將受於我的告訴你們。等不多時，你們就不得看見我；再等不多時，你們還要看見我。』」
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 禱告</h4>
              <p className="text-gray-700 italic">「聖靈啊，我渴望更認識你。求你向我顯明你的位格，幫助我經歷你的內住。阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
