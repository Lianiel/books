import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch5() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第五章</h1>
        <h2 className="text-xl font-semibold text-gray-700">天空上的水</h2>
      </div>

      {/* 正文 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">正文</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、רָקִיעַ（raqiya）——空氣或穹蒼？</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記一章6至8節：「神說：諸水之間要有空氣，將水分為上下。神就造出空氣，將空氣以下的水、空氣以上的水分開了，事就這樣成了。神稱空氣為天，有晚上、有早晨，是第二日。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這裡的「空氣」，希伯來文是「רָקִיעַ」（raqiya），字根是「רָקַע」（raqa），意為「打薄、延伸、展開」，如同金匠把金屬打薄成薄片。這個字在不同翻譯中有很大分歧：
              </p>
              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200 mb-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-indigo-200">
                      <th className="text-left text-indigo-800 pb-2 pr-4">譯本</th>
                      <th className="text-left text-indigo-800 pb-2">翻譯</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-1">
                    {[
                      ['和合本（1919）', '空氣'],
                      ['新標點和合本（1988）', '空氣'],
                      ['現代中文譯本', '穹蒼'],
                      ['七十士譯本（希臘文）', 'στερέωμα（固體的延展物）'],
                      ['武加大本（拉丁文）', 'firmamentum（堅固的穹蒼）'],
                      ['英文NIV', 'expanse（延伸的空間）'],
                      ['英文KJV', 'firmament（穹蒼）'],
                    ].map(([tr, word], i) => (
                      <tr key={i} className="border-b border-indigo-100">
                        <td className="py-1 pr-4 text-gray-600">{tr}</td>
                        <td className="py-1 text-gray-800 font-medium">{word}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                翻譯的分歧反映了解釋上的根本差異：若翻為「穹蒼」（firmament），暗示一個固體的圓頂結構（如古代近東宇宙觀），水在固體圓頂之上；若翻為「空氣」或「空間」（expanse），則指大氣層，水以氣態（水蒸氣）存在於大氣層中。
              </p>
              <p className="text-gray-700 leading-relaxed">
                現代福音派學者多傾向採用「空間/大氣層」的解釋，認為創世記的描述與大氣層（其中確實含有大量水分）相符，而非描述一個固體圓頂結構。無論哪種解釋，核心神學要點是：神將水分為「上下」，在大氣層中和地表之下分別存儲了大量的水——這是生命的根本支持系統。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、天上水層的五大功能</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                無論如何理解「天上的水」，這些水分對地球生命系統有不可或缺的功能：
              </p>
              <div className="space-y-3">
                {[
                  { title: '調節氣候溫度', desc: '大氣層中的水蒸氣和雲層是地球溫室效應的主要貢獻者（佔溫室效應的50%以上），使地球維持適合生命存在的溫度。沒有大氣水分，地球的溫差將超過100度（如月球表面）。' },
                  { title: '過濾有害輻射', desc: '大氣層中的水分子和臭氧層（O₃，氧氣的一種形態）共同過濾太陽的紫外線和其他有害輻射，保護地表生命不受傷害。' },
                  { title: '提供降水灌溉', desc: '水循環（水蒸發、雲形成、降雨）是地表淡水的唯一來源，也是所有陸生生命的生存基礎。神在第二日建立的水循環系統，是第三日植物生命和第六日人類生命的先決條件。' },
                  { title: '維繫生態平衡', desc: '大氣層的水分分布影響全球的生態系統分布（熱帶雨林、溫帶草原、極地凍土），維繫了地球生命多樣性的物質基礎。' },
                  { title: '預備末世更新', desc: '洪水（創六至九章）是「天窗開了，地的泉源裂了」（創七11）——「天上的水」大量降落。這表明創世記第二日所存儲的水，在神的末世計劃中也發揮了審判和更新的作用。正如末世的更新包括「新天新地」（啟廿一），第二日的水也預表末世的更新。' },
                ].map((item, i) => (
                  <div key={i} className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                    <span className="font-semibold text-blue-800">{i + 1}. {item.title}</span>
                    <p className="text-gray-700 text-sm mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、第二日的三度空間</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記一章6至10節描述了神在第二日（水的分別）和第三日前半段（陸地出現）所建立的三度空間結構：
              </p>
              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                <div className="space-y-2 text-sm">
                  {[
                    { zone: '天上的水（大氣層以上）', role: '水蒸氣、雲層、大氣水循環' },
                    { zone: '中間的空間（大氣層）', role: 'raqiya所指的「天」，生命呼吸的空氣' },
                    { zone: '地下的水（地表水和地下水）', role: '海洋、河流、泉源、地下水脈' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 border-b border-indigo-100 pb-2">
                      <span className="font-semibold text-indigo-700 flex-shrink-0 w-6">{['↑', '↔', '↓'][i]}</span>
                      <div>
                        <span className="font-semibold text-indigo-800">{item.zone}</span>
                        <p className="text-gray-600 mt-0.5">{item.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mt-3">
                這個三層水的結構建立了地球獨特的「水圈」（hydrosphere），使地球成為太陽系中唯一已知的液態水星球，也是目前已知唯一孕育生命的星球。這個精密的安排指向一個有智慧的設計者，而非偶然的機率事件。
              </p>
            </div>

          </div>
        )}
      </div>

      {/* 重點整理 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-sky-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">重點整理</span>
          </div>
          {expanded['summary'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['summary'] && (
          <div className="p-5 bg-white">
            <ul className="space-y-3">
              {[
                '「raqiya」（天空/穹蒼）的翻譯分歧：「穹蒼」指固體圓頂（傳統解釋），「空間/大氣層」是現代福音派的多數理解，兩種解釋均需承認神將水分為上下。',
                '天上水層的五大功能：調節氣候溫度、過濾有害輻射、提供降水灌溉、維繫生態平衡、在末世審判（洪水）和更新（新天新地）中發揮作用。',
                '第二日神建立了三層水圈結構（大氣層上、大氣層、地表/地下），使地球成為太陽系中唯一的液態水星球，也是生命誕生的物質基礎。',
                '洪水（創七11「天窗開了，地的泉源裂了」）是對第二日水圈的末世性動用，審判與更新同時發生，預表末世的最終更新。',
                '水的精細調校（三態轉換、比熱容量、冰的密度低於液態水等物理特性）指向有智慧的設計者，科學研究可以加深對創造主的敬拜。',
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

      {/* 分享題目 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-yellow-50 hover:from-amber-100 hover:to-yellow-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">分享題目</span>
          </div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && (
          <div className="p-5 bg-white space-y-4">
            {[
              '洗禮使用水，出埃及過紅海用水，約書亞過約旦河用水，耶穌受洗在約旦河——水在聖經神學中有豐富的象徵意涵。本章對「天上的水」的討論，如何加深你對洗禮等聖禮的理解？',
              '地球是太陽系中唯一已知有液態水的星球，科學家認為這是生命存在的必要條件。你認為這是偶然巧合，還是設計的證據？這個認識如何影響你的信仰？',
              '神在第二日建立水圈，預備第三日植物和第六日人類生命的基礎。你在自己的生命中，是否也有神「預備」的時期，讓你在不知情的情況下，他正在為下一步做準備？',
            ].map((q, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0 text-lg">{i + 1}.</span>
                <p className="text-gray-700 leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
