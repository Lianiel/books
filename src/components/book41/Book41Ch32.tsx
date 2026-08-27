import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ListOrdered, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book41Ch32() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    exploration: true,
    questions: true,
    practice: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  const levels = [
    { level: 'H/S-1', name: '無意識', tone: 'bg-gray-100 text-gray-700', desc: '缺乏對榮/辱動力的理解，也就是毫無感覺——這是大多數西方基督徒的起點。' },
    { level: 'H/S-2', name: '道德的', tone: 'bg-orange-100 text-orange-700', desc: '對榮/辱有意識，但態度完全是消極的，只看到榮辱文化不符合道德倫理的一面。' },
    { level: 'H/S-3', name: '功能的', tone: 'bg-yellow-100 text-yellow-700', desc: '明白榮/辱動力是釋經很實際的切入點，是理解聖經、與多數世界建立關係的好用資源。' },
    { level: 'H/S-4', name: '宣教的', tone: 'bg-sky-100 text-sky-700', desc: '看見福音可以運用聖經中的榮辱語言傳講，促使榮/辱力量在宣教事工中發揮更積極的功用。' },
    { level: 'H/S-5', name: '神學的', tone: 'bg-teal-100 text-teal-700', desc: '了解神從各族各民中聚集信徒的最終目標，就是要彰顯、榮耀基督，同時榮耀世界上各族各民——這是最高層次。' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-800 to-cyan-900 bg-clip-text text-transparent">附錄二</h1>
        <h2 className="text-xl font-semibold text-gray-700">從 H/S-1 到 H/S-5：跨文化宣教中對榮/辱動力的認知層次</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <ListOrdered className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-amber-900 leading-relaxed text-sm">
                <span className="font-semibold">說明：</span>原書附錄二本身僅以完整圖表呈現這套五層分級架構，並無額外的文字說明——因為這套架構的完整論述，作者已分別在第二部2-1章（首次提出）與第四部4-1章（作為第四部的開篇框架）詳細展開。以下依據書中這兩處的論述，將完整的五層架構整理成獨立、易於查閱的參考表格，方便讀者對照全書其他章節時快速回顧。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">五個認知層次一覽</h3>
              <div className="space-y-3">
                {levels.map((l, i) => (
                  <div key={i} className="p-4 bg-white border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${l.tone}`}>{l.level}</span>
                      <span className="font-semibold text-gray-800">{l.name}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{l.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">這套架構在全書中的作用</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                這套五層架構，是貫穿全書結構的隱形骨架：第一部帶領讀者從「無意識」（H/S-1）走向「道德的」（H/S-2）層次，正視榮辱文化黑暗面的同時，也開始察覺其光明面；第二部進一步帶領讀者，建構「功能的」（H/S-3）意識——理解榮/辱動力是釋經很實際的切入點；第三部提升到「宣教的」（H/S-4）層次——運用榮辱語言重新表達福音信息；第四部則觸及最高層次「神學的」（H/S-5）——了解神從各族各民中聚集信徒，最終要彰顯、榮耀基督，同時榮耀世界上各族各民，這是神救贖計畫的終極目標（telos）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                換言之，讀者如果從第一章讀到最後一章，本身就是在親身經歷這五個層次的遞升旅程——這正是作者精心設計全書架構的用意所在：不只是傳遞知識，更是引導讀者的認知意識，一步步地提升。
              </p>
            </div>

          </div>
        )}
      </div>

      {/* 重點總結 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-sky-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">重點總結</span>
          </div>
          {expanded['summary'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['summary'] && (
          <div className="p-5 bg-white">
            <ul className="space-y-3">
              {[
                '五層架構（無意識→道德的→功能的→宣教的→神學的）是全書隱形的骨架，第一至四部的順序，恰好對應這五個層次由低到高的遞升過程。',
                '「道德的」層次雖然已經意識到榮辱文化，卻只看到其負面、不符合道德的一面，這是許多初次接觸這個主題的基督徒容易停留的階段，全書反覆提醒不要止步於此。',
                '「功能的」層次是理解聖經釋經的關鍵轉折——把榮辱動力當作幫助理解聖經原文原意的工具，而不只是評判其他文化的道德標準。',
                '「宣教的」層次是第三部的核心，把榮辱動力從「理解聖經的工具」進一步轉化為「傳講福音的資源」，這是從認知走向實踐的關鍵一步。',
                '「神學的」層次是最終、也是最高的層次——不再停留於方法或策略，而是回到神救贖計畫的終極目的：萬族萬民同心敬拜、彰顯基督的榮耀，這也是第四部4-1章的核心主題。',
                '這套分級架構本身具有自我應用的性質：讀者閱讀全書的過程，本身就是一趟從H/S-1走向H/S-5的親身旅程，這正是作者刻意設計全書結構的用意。',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-gray-700 leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
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
              <h4 className="font-semibold text-gray-800 mb-2">一個人是否可能同時處於不同的層次，因應不同的主題或處境？</h4>
              <p className="text-gray-700 leading-relaxed">
                完全有可能。這套分級架構並非要求所有人必須線性、一致地從一個層次走到下一個層次，而更像是一種光譜式的描述——同一個人在「理解聖經文本」這件事上，可能已經到達「功能的」層次，但在「向未得之民傳福音」的具體實踐上，仍停留在「道德的」層次，尚未真正把榮辱動力轉化為傳福音的資源。認識到這種不均衡的可能性，能幫助讀者更誠實地評估自己在不同面向上的成長空間。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">為什麼「道德的」層次會被視為一個需要跨越、而非停留的階段？</h4>
              <p className="text-gray-700 leading-relaxed">
                停留在「道德的」層次的人，雖然已經注意到榮辱文化的存在，卻容易帶著居高臨下的批判態度，把榮辱文化簡化為「落後」「不理性」的負面現象，這種態度反而會阻礙與榮辱文化背景的人建立真誠的關係與理解。全書反覆強調榮辱文化同時存在黑暗面與光明面，唯有超越單純的道德評判，才能進一步看見榮辱動力如何被神使用、成為傳講福音的橋樑。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">這套五層架構，對評估一個教會或機構的宣教裝備現況，可以如何具體應用？</h4>
              <p className="text-gray-700 leading-relaxed">
                教會或機構可以用這套架構作為自我評估的工具：檢視現有的神學教育、宣教訓練材料，整體而言落在哪個層次？如果大部分裝備仍停留在「無意識」或「道德的」層次，就意味著有明確的成長空間，可以參考第四部4-2章「融入榮辱感於訓練中」的具體建議，逐步把「解析聖經文化」（步驟A）納入既有的訓練架構中，帶領裝備對象往「功能的」甚至「宣教的」層次邁進。
              </p>
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
            {[
              '在讀這本書之前，你認為自己處於這五個層次中的哪一個？讀完全書後，你認為自己現在到了哪個層次？',
              '你能否舉出自己生命中一個具體的例子，說明從「道德的」層次（單純批判）轉變為「功能的」層次（理解並運用）的經歷？',
              '對你所屬的教會或機構而言，整體的宣教裝備現況，落在這五層架構中的哪個位置？',
              '「神學的」層次強調神最終要「榮耀世界上各族各民」，這對你理解自己文化的價值，帶來什麼樣的提升？',
              '如果要用這套五層架構，設計一份簡單的自我評估問卷，你會如何為每個層次設計對應的問題？',
            ].map((q, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0">{i + 1}.</span>
                <p className="text-gray-700">{q}</p>
              </div>
            ))}
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
              <h4 className="font-semibold text-green-700 mb-2">📊 為自己標記目前所在的層次</h4>
              <p className="text-gray-700 mb-2">
                誠實地在這五個層次中，為自己標記目前的位置，並寫下一到兩個具體行動，幫助自己往下一個層次邁進。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📋 用這套架構評估你的教會或團隊</h4>
              <p className="text-gray-700 mb-2">
                如果你在教會或機構中有裝備、訓練的角色，用這套五層架構檢視現有的訓練內容，找出一個可以具體強化的層次。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，求祢帶領我不斷向前，從對榮辱動力的無意識，一步步走向真正明白祢榮耀終極心意的神學層次。求祢也興起更多願意在這條路上同行、彼此裝備的肢體，一起把這樣的認識，轉化為傳揚祢全球福音的實際行動。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
