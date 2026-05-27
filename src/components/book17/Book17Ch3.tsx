import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book17Ch3() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">第三章</h1>
        <h2 className="text-xl font-semibold text-gray-700">十字架的資訊與屬靈的智慧</h2>
        <p className="text-sm text-gray-500 mt-1">哥林多前書 二1-16</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">一、保羅傳道的方式（二1-5）</h4>
              <p className="text-gray-700 leading-relaxed">保羅到哥林多時，不是用高言大智，乃是決定不知道別的，只知道耶穌基督，並祂釘十字架。他在軟弱、恐懼、戰兢中傳道，刻意不用「智慧委婉的言語」。原因是：信仰的根基必須建立在「神的大能」上，而非人的說服力。若靠口才制勝，信仰就隨著傳道者的魅力起伏，無法持久。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">二、神的智慧與世人的智慧（二6-9）</h4>
              <p className="text-gray-700 leading-relaxed">保羅並非反對智慧，他在成熟的人中也講智慧——但這智慧不是本世界的智慧，也不是將要廢去的掌權者的智慧，而是「神在萬古以前預定」的奧秘智慧，即基督的救恩計畫。這智慧使人蒙福，是眼未曾見、耳未曾聽、心未曾想過的事。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">三、聖靈的啟示與教導（二10-16）</h4>
              <p className="text-gray-700 leading-relaxed">神的智慧只能藉聖靈啟示。聖靈搜尋神的深奧事，就如一個人的靈知道自己的事。保羅對比兩種人：屬肉體的人不領受神的事，以為愚拙；屬靈的人卻能看透萬事。信徒「有基督的心」——這是一個令人震驚的宣告，表明我們可以藉聖靈的教導，認識並接受神的心意。</p>
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
              <h4 className="font-semibold text-indigo-700 mb-2">保羅的「示弱」策略</h4>
              <p className="text-gray-700 leading-relaxed">保羅到哥林多時的「軟弱、恐懼、戰兢」，並非表示他沒有能力，而是刻意的神學選擇。他深知若用技巧說服人，信仰就建立在說服力上。這個選擇與第一章「不用智慧的言語」呼應：傳道者要刻意減少自己的吸引力，讓聽者的眼光轉向基督，而非轉向傳道者本身。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「神的奧秘智慧」的末世性質</h4>
              <p className="text-gray-700 leading-relaxed">保羅說這智慧是「神在萬古以前預定」的。這個末世論視角表明：十字架不是偶然的悲劇，而是神在創世之前就計畫好的救恩方案。世上的掌權者若明白，就不會把主釘十字架——因為他們只能看見眼前，無法理解神在永恆中的謀算。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">三一神在傳福音中的角色</h4>
              <p className="text-gray-700 leading-relaxed">第二章清楚呈現三一神在救恩中各自的工作：聖父在萬古以前計畫救恩（6-9節）；聖子耶穌基督在十字架上執行救恩（1-2節）；聖靈向信徒啟示和教導這救恩（10-16節）。傳福音從來不是傳道人的個人事業，而是三一神在歷史中繼續工作的管道。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「有基督的心」的意義</h4>
              <p className="text-gray-700 leading-relaxed">第16節「我們有基督的心」是對比以賽亞書40章13節「誰曾指示耶和華的靈」而說的。保羅宣告：信徒藉著聖靈，可以了解神的心意和計畫，不再活在無知中。這不是說信徒全知無誤，而是說信徒有接觸神旨意的管道——聖靈的教導和聖經的啟示。</p>
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
              <p className="text-gray-700">你在分享信仰或服事時，有沒有倚賴「高言大智」或技巧來說服人的傾向？這種做法與保羅的策略有何不同？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">保羅決定「只知道耶穌基督，並祂釘十字架」。在你的信仰重心中，十字架佔有多核心的位置？還是它常被其他重要的神學議題所淡化？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">你怎麼理解「屬靈的人能看透萬事」？這是否意味著屬靈成熟的人永遠正確？如何避免以此為藉口而不接受批評？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">聖靈是神的智慧與知識的賜予者。你的靈命成長中，聖靈的教導（通過讀經、禱告、群體）在多大程度上塑造了你的思想和價值觀？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">「我們有基督的心」——這個宣告對你而言是激勵，還是有點令你感到惶恐？為什麼？這個真理應該如何具體影響你每天的決定？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 「只知道基督十架」的聚焦練習</h4>
              <p className="text-gray-700 mb-2">本週找一個機會分享信仰（在家人、朋友或小組中），有意識地：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>把重心放在基督為你所做的事，而不是你的屬靈經歷或成就</li>
                <li>不刻意展示神學知識，讓十字架本身說話</li>
                <li>事後省察：自己是否有「用技巧說服人」的衝動？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 每日聖靈引導的讀經</h4>
              <p className="text-gray-700 mb-2">這週每天讀一段聖經前，先做這個禱告：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>「聖靈，請你教導我，讓我看見你要讓我看見的事」</li>
                <li>讀完後問：「今天神向我說了什麼？這對我的生命有何意義？」</li>
                <li>把領受寫下來，培養聆聽聖靈的習慣</li>
              </ul>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-sm text-green-800 font-medium mb-1">本週禱告</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">
                「聖靈，求祢教導我，讓我有屬靈的眼光認識神的深奧事。讓我在服事和分享中不倚賴自己的口才和智慧，而是讓基督和祂的十字架成為一切的中心。幫助我真正擁有基督的心，用祂的眼光看世界、看人、看自己的處境。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
