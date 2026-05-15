import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Search, HelpCircle, Check } from 'lucide-react';

export default function Book14Ch3() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">第3章</h1>
        <h2 className="text-xl font-semibold text-gray-700">聖經裡的聖靈</h2>
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
            <p className="text-gray-700 leading-relaxed">聖經啟示我們，聖靈從舊約時代就開始工作。他在創世時翱翔於眾水之上，也借著先知向人類歷史說話。聖靈不是新約才出現的角色，而是自創世以來就在執行神的旨意。</p>
            <p className="text-gray-700 leading-relaxed">舊約中，聖靈的工作表現在：賦予人特殊能力（如士師），啟示神的道（先知），引導神的百姓（如雲柱火柱）。但舊約聖靈的工作還是片段的、時間性的。</p>
            <p className="text-gray-700 leading-relaxed">五旬節成為歷史的轉折點。耶穌應許門徒：「聖靈要來」——這不是第一次聖靈出現，而是聖靈新的職事開始。聖靈的工作從曾經的片段式變成常駐式，從向少數人變成向眾多信徒，從外在的能力變成內住的聖靈。</p>
            <p className="text-gray-700 leading-relaxed">新約啟示聖靈的核心工作是：見證基督、榮耀基督、內住信徒、成聖信徒。聖靈的每一項工作都指向基督，都服務於基督救贖計畫的完成。</p>
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
              <h4 className="font-semibold text-gray-800 mb-2">舊約聖靈工作的局限性</h4>
              <p className="text-gray-700 leading-relaxed">舊約聖靈的工作是預備性的——他預備以色列民族接納彌賽亞，但聖靈本身還沒有與信徒建立永恆的內住關係。聖靈賦予力量、啟示真理，但這些工作是選擇性的，面向特定的人物（士師、先知、君王）。普遍的、永久的聖靈內住要等到五旬節才成為現實。</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">五旬節：聖靈工作的重大轉變</h4>
              <p className="text-gray-700 leading-relaxed">五旬節不是聖靈第一次出現，而是聖靈新職事的開始。路加福音和使徒行傳將其描述為「應許的聖靈」（應許已久的新工作開始）。這一刻，聖靈從「臨時造訪」變成「永遠內住」，從「賦予能力」變成「進駐心靈」。</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">聖靈見證基督的雙重模式</h4>
              <p className="text-gray-700 leading-relaxed">聖靈見證基督有兩個層面：(1)直接見證——透過聖經、奇跡、悔改；(2)間接見證——透過信徒的品格、行為、生命改變。兩個見證方式都無言地指向基督是誰、他做了什麼。</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">聖靈的工作與基督的關係</h4>
              <p className="text-gray-700 leading-relaxed">聖靈從不爭奪焦點，而是將焦點聚向基督。聖靈不說「相信我」，而是「相信他」（基督）。聖靈的成聖工作是將信徒變成基督的樣式；聖靈的引導是按基督的旨意引導。這是聖靈工作的內在邏輯——完全的謙遜和自我隱沒。</p>
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
              <p className="text-gray-700">你對舊約聖靈的工作有什麼認識？聖靈在舊約中的角色與新約有什麼不同？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">五旬節對你的屬靈生活意味著什麼？聖靈內住這個事實如何改變你對信仰的理解？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">你曾經經歷過聖靈「直接見證基督」（聖經、神蹟、悔改）的時刻嗎？也經歷過「間接見證」（透過他人的改變）嗎？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">聖靈在你生命中的工作是否都指向基督？有沒有時候你被某種「聖靈經歷」所吸引，而偏離了基督本身？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">聖靈「謙遜地隱沒」這一特質如何挑戰你對屬靈成長或屬靈經歷的看法？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">📚 聖經對比研讀</h4>
              <p className="text-gray-700 mb-2">選擇聖靈在舊約中的一次工作事例（如：士師、先知蒙召），對比新約中聖靈內住信徒的描述。記錄：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>舊約聖靈工作的特點</li>
                <li>新約聖靈工作的特點</li>
                <li>兩者如何都指向基督</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔎 五旬節反思</h4>
              <p className="text-gray-700 mb-2">花時間沉思五旬節這個轉折點的意義：</p>
              <div className="bg-green-50 p-3 rounded text-gray-700 text-sm">
                <p className="mb-2">「聖靈永遠內住在我裡面，這改變了什麼？」</p>
                <p>思考並記錄你的回答，特別是在日常生活中如何活出這個現實。</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">👁️ 見證評估</h4>
              <p className="text-gray-700 mb-2">檢查你生命中的見證：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>你如何藉著言語見證基督？（直接見證）</li>
                <li>你的生命品格見證基督嗎？（間接見證）</li>
                <li>這兩個見證是否和諧一致？</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">✝️ 聖靈充滿的禱告</h4>
              <p className="text-gray-700 mb-2">基於聖經教導，為聖靈充滿禱告：</p>
              <div className="bg-green-50 p-3 rounded text-gray-700 text-sm">
                <p>「主聖靈啊，請充滿我，使我成為基督的活見證。讓我的言行都指向基督，讓你在我身上謙遜而有效地工作，直到人看見的不是我，而是你所見證的基督。」</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
