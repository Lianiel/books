import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Target, Search, HelpCircle, Check } from 'lucide-react';

export default function Book17Ch15() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    exploration: true,
    questions: true,
    practice: true,
  });

  const toggleSection = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">第十五章</h1>
        <h2 className="text-xl font-semibold text-gray-700">造就自己或造就他人</h2>
        <p className="text-sm text-gray-500 mt-1">哥林多前書 十四1-40</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">一、方言與先知講道的比較（十四1-25）</h4>
              <p className="text-gray-700 leading-relaxed">保羅要求信徒「追求愛，切慕恩賜，尤其是先知講道」。方言是對神說話（奧秘），先知講道是對人說話（造就、安慰、勸勉）。若要追求恩賜，應以能造就他人的先知講道為優先。方言只造就自己，先知講道建立教會；方言只益於靈性，先知講道兼益悟性；方言可能讓不信者誤以為人發瘋，先知講道可讓不信者認識神。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">二、聚會的基本原則（十四26-40）</h4>
              <p className="text-gray-700 leading-relaxed">保羅定下實際的聚會規則：方言必須有翻譯，否則不說；先知最多兩三人講，其餘人慎思明辨；先知的靈順服先知（不失控）。對於女性在聚會中的沉默指示，保羅的意思是不要自以為是地主導討論，而非全面禁止她們開口。最終原則：「凡事都要按著次序，照規矩行。」</p>
            </div>
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
              <h4 className="font-semibold text-indigo-700 mb-2">方言問題的三種立場</h4>
              <p className="text-gray-700 leading-relaxed">對於今日教會中說方言的問題，保羅的立場是：既不禁止（「我也願意你們都說方言」），也不鼓勵，而是「有條件地開放」——方言必須有翻譯才能在聚會中使用。保羅關心的不是方言本身，而是方言對在場的人是否有益；追求個人靈性而忽略群體益處，違背了「愛不求自己的益處」的原則。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">先知講道的本質</h4>
              <p className="text-gray-700 leading-relaxed">保羅在十四章指出先知講道有幾個特點：對人說（造就、安慰、勸勉）、用人聽懂的語言、可以讓人悔改、讓人看見「神在你們中間」，以及先知的靈順服先知（不失控）。這讓「先知講道」更接近今日的講道或宣揚神的話，而不是一個神秘不可測的恩賜。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「聖靈的感動」與「秩序」並行</h4>
              <p className="text-gray-700 leading-relaxed">保羅一方面相信聖靈在聚會中真實運作，另一方面也定下秩序規則。許多人把二者對立：「若有聖靈感動，就不需要秩序。」保羅卻說「先知的靈原是順服先知的」（十四32）——真正聖靈的工作不會使人失控，而是帶來清醒和秩序。失控的「屬靈感動」，往往是人的血氣，不是聖靈。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「造就他人」作為追求恩賜的準則</h4>
              <p className="text-gray-700 leading-relaxed">「凡事都當造就人」（十四26）是整章的總原則。這個原則徹底轉換了「追求恩賜」的動機：不是為了自我提升或靈性感覺，而是為了造就他人。這讓每一個恩賜的使用都成為「愛的行動」——我用這個恩賜，是為了誰的益處？若答案只是「為了自己」，那就需要重新思考。</p>
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
              <p className="text-gray-700">你在服事或使用恩賜時，主要是以「造就自己」還是「造就他人」為出發點？若是誠實回答，比例大概是多少？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">「凡事都當造就人」——這個原則如何應用到你目前參與的服事？有沒有你目前做的某件事，若以「造就他人」衡量是不必要的？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">你對於聚會中的秩序和自發的屬靈表達，有什麼感受？你的教會在這兩端中處於哪裡？你認為應如何保持平衡？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">保羅說「聖靈的感動帶來秩序，而非失控」——你是否曾把情緒激動或失控誤解為聖靈的工作？這對你如何辨別真正的聖靈感動有何幫助？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">在你的教會聚會中，不信者或初來者進來時，他/她能夠感受到「神在你們中間」嗎？有沒有什麼做法讓外人感到困惑或排斥？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 以「造就他人」重新評估服事</h4>
              <p className="text-gray-700 mb-2">這週在你的主要服事項目中，問以下問題：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>這服事的最終受益者是誰？</li>
                <li>有沒有調整的空間，讓它更有效地造就他人？</li>
                <li>把你的發現與同工分享，一起思考如何改進</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 「讓不信者看見神」的敬拜思考</h4>
              <p className="text-gray-700 mb-2">下次主日聚會時，用初來者的眼光觀察：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>若一位對信仰陌生的朋友今天坐在你旁邊，他/她能感受到什麼？</li>
                <li>整個聚會有沒有讓人感到「神在這裡」的時刻？</li>
                <li>把觀察帶回小組或教會，一起討論如何讓敬拜更有歡迎性</li>
              </ul>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-sm text-green-800 font-medium mb-1">本週禱告</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">
                「主，讓我在使用恩賜時，不是為了造就自己，而是為了造就祢的身體。讓我的服事以「他人的益處」為準則，不以「我的靈性感覺」為目標。讓我的教會聚會成為一個讓不信者能遇見祢的地方。凡事都按著次序、照規矩行，讓聖靈的工作真實臨到。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
