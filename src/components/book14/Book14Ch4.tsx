import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Search, HelpCircle, Check } from 'lucide-react';

export default function Book14Ch4() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    exploration: false,
    questions: false,
    practice: false
  });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">第4章</h1>
        <h2 className="text-xl font-semibold text-gray-700">聖靈的路徑：聖潔之道</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>

        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <p className="text-gray-700 leading-relaxed">不論是好是壞，我們大多數人一聽見「性」這詞都會產生觸電的感覺——他迫使我們注意，給予我們一種情感的衝擊。對於正常的成人來說，性是一個有無窮興味的主題。</p>
            <p className="text-gray-700 leading-relaxed">對於健康的基督徒來說，聖潔一詞也同樣令人加倍留神。為什麼？因為神已經在每一個重生的心靈裡，深深種植一份對成聖趨之若渴的情感。成聖意指接近神、像神、委身給神和取悅神，是信徒在世上最希望達到的。</p>
            <p className="text-gray-700 leading-relaxed">聖潔是聖經中一個重要的辭彙。他的字根包含分離或隔開的意思；首先，這個詞意味著神跟人分別開來，其次，他標誌著基督徒為神分別出來。</p>
            <p className="text-gray-700 leading-relaxed">「那召你們的既是聖潔，你們在一切所行的事上也要聖潔；因為經上記著說：『你們要聖潔，因為我是聖潔的。』」（彼前一15、16）神的旨意就是要你們成為聖潔。願賜平安的神親自使你們全然成聖，願你們的靈與魂與身子得蒙保守。</p>
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
              <h4 className="font-semibold text-gray-800 mb-2">聖潔的雙重含義</h4>
              <p className="text-gray-700 leading-relaxed">聖潔（holiness）的字根carry著「分別」「隔離」的含義。宗教層面上，它首先指出神的獨特性（神的聖潔——他與人類分別開來）；其次，它指出信徒的身分（被分別出來歸給神）。兩個層次缺一不可——我們追求聖潔，因為我們已經被神分別為聖。</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">聖潔不是道德完美主義</h4>
              <p className="text-gray-700 leading-relaxed">許多基督徒將聖潔理解為「完全無罪」——這是一個誤解。聖經中的聖潔是指「分別歸神的生活」，强調的是方向和委身，而不是絕對完美。聖潔的成長是漸進的，同時也是絕對的承諾。信徒可以在不完全中追求聖潔。</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">聖潔與實踐的張力</h4>
              <p className="text-gray-700 leading-relaxed">聖潔涉及消極的層面（分別出來，遠離污穢）和積極的層面（委身於神，追求像神）。許多信徒停留在消極層面，強調避免罪惡；但真正的聖潔追求需要同時擁抱積極層面——主動地選擇像神，服侍神，思想神的事。</p>
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
              <p className="text-gray-700">聖潔這個詞在你心中激發了什麼情感？吸引還是抗拒？為什麼？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">你對「成聖」的理解是什麼？它是逐漸的過程還是一瞬間的決定？兩者如何統一？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">在你的生活中，哪些方面你已經「分別為聖」，哪些方面你還在掙扎？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">聖潔是消極地遠離罪，還是積極地追求像神？在你的信仰中，這兩者的比例如何？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">「不完全中的聖潔追求」這個概念對你有什麼啟示？它如何改變你對成聖的期待？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🔄 分別與委身的操練</h4>
              <p className="text-gray-700 mb-2">在一週內，為聖潔做兩個對應的操練：</p>
              <div className="bg-green-50 p-3 rounded text-gray-700 text-sm space-y-2">
                <p><strong>消極層面（分別）：</strong>選擇一個你需要遠離的習慣或思想，制定具體的避免計畫。</p>
                <p><strong>積極層面（委身）：</strong>選擇一個你需要追求的品格（如愛心、誠實），制定具體的發展計畫。</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 聖潔經文默想</h4>
              <p className="text-gray-700 mb-2">每日默想一節關於聖潔的經文（如彼前一15-16、帖前四3、以弗所書五25-27），問自己：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>神在這段經文中如何呼召我追求聖潔？</li>
                <li>這對我今天的決定有什麼影響？</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">✋ 選擇聖潔的日常決策</h4>
              <p className="text-gray-700 mb-2">在日常生活中，進行小的「聖潔選擇」：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>說話時選擇真誠而非冷漠</li>
                <li>思想時選擇潔淨而非污穢</li>
                <li>時間上選擇優先順序是神而非世俗</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 成聖的禱告</h4>
              <div className="bg-green-50 p-3 rounded text-gray-700 text-sm">
                <p>「主啊，我承認我還不完全，但我選擇為聖潔而活。幫助我分別出來，遠離污穢；也幫助我主動追求像你的品格。讓我的生活成為分別為聖的見證。」</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
