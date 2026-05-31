import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, Eye, HelpCircle, Check } from 'lucide-react';

export default function Book20Ch4() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    exploration: true,
    questions: false,
    practice: false,
  });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">第4章</h1>
        <h2 className="text-xl font-semibold text-gray-700">研究方法</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-gray-800 mb-2">研究設計：質性現象學方法</h3>
              <p className="text-gray-700 leading-relaxed">本研究採用質性研究（Qualitative Research），以現象學（Phenomenology）為方法論，深度訪談（In-depth Interviewing）為資料收集方式。質性研究不以統計數字，而以豐富的文字描述來理解社會現象——研究者本身即是主要的「研究工具」，帶著對研究場域的熟悉度進入，但也必須學會「存而不論」（Epoché），懸置個人的主觀判斷。</p>
              <p className="text-gray-700 leading-relaxed mt-2">現象學的核心問題是：「這個經驗對這個人來說是什麼意思？」研究者努力進入受訪者的生活世界，理解她們在實務中所見所感，而非驗證預設的假設。</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">研究步驟</h3>
              <div className="space-y-2">
                {[
                  { step: '一', desc: '研究問題形成：從模糊概念到清晰具體的研究方向（像漏斗過濾）' },
                  { step: '二', desc: '進入研究場域：研究者本身在醫院擔任靈性關懷師，具天然的場域優勢' },
                  { step: '三', desc: '抽樣策略：目的性抽樣，以資料飽和為標準，最終訪談兩位關懷師' },
                  { step: '四', desc: '資料收集：深度訪談，每次 70-90 分鐘，在醫院會議室進行' },
                  { step: '五', desc: '資料分析：逐字稿轉譯、備忘錄撰寫、編碼分析、發展核心概念' },
                  { step: '六', desc: '研究報告撰寫：根據實際經驗資料，整合理論與實務貢獻' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-3 p-2 border-l-4 border-purple-300">
                    <span className="text-purple-600 font-bold flex-shrink-0">{item.step}.</span>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">兩位研究參與者</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-purple-50">
                      <th className="text-left p-3 border border-purple-100 text-purple-800">化名</th>
                      <th className="text-left p-3 border border-purple-100 text-purple-800">訪談日期</th>
                      <th className="text-left p-3 border border-purple-100 text-purple-800">時長</th>
                      <th className="text-left p-3 border border-purple-100 text-purple-800">臨床年資</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-gray-100">L</td>
                      <td className="p-3 border border-gray-100">2022/04/06</td>
                      <td className="p-3 border border-gray-100">90 分鐘</td>
                      <td className="p-3 border border-gray-100">約 15 年</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="p-3 border border-gray-100">G</td>
                      <td className="p-3 border border-gray-100">2022/03/08</td>
                      <td className="p-3 border border-gray-100">70 分鐘</td>
                      <td className="p-3 border border-gray-100">約 5 年</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 text-sm mt-2">兩位均為基督信仰靈性關懷師，具豐富的末期病人臨床照顧經驗，且完成 CPE 訓練。研究結束時，研究者與兩位受訪者進行關係的適當結束（適時告知研究即將結束、注意對方感受）。</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">研究嚴謹度與倫理</h3>
              <p className="text-gray-700 leading-relaxed">為確保研究的可信度，研究者以「成員核查」（Member Check）請受訪者確認訪談記錄，並以「同儕審視」確保分析的客觀性。研究倫理方面，兩位受訪者均簽署知情同意書，化名保護隱私，研究結束時也適切處理研究關係的結束。</p>
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
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">為什麼只訪談兩個人？</h4>
              <p className="text-gray-700 leading-relaxed">質性研究的「飽和」（Saturation）原則：當新的訪談資料不再帶來新的概念或主題，即達到飽和，不需要更多樣本。本研究的問題具有深度而非廣度，兩位具豐富臨床年資的關懷師所提供的材料，已足以回答三個核心研究問題。這與量化研究的「統計代表性」邏輯完全不同。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「存而不論」（Epoché）的困難與重要性</h4>
              <p className="text-gray-700 leading-relaxed">現象學的核心功夫是暫時懸置研究者自身的理解和判斷，讓受訪者的世界真實呈現。對作者而言，這格外具有挑戰性——因為她本身就是靈性關懷師，有很強的「自己的答案」。然而正是這種刻意的謙遜，使她能真正聽見受訪者如何理解自己的工作，而非讓訪談淪為確認自己想法的工具。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">深度訪談的藝術：如何問出「真實」？</h4>
              <p className="text-gray-700 leading-relaxed">深度訪談不是問卷調查，而是一種有目的的對話，需要研究者具備高度的情境敏感度。好的問句是開放式的（「告訴我，當你進入病房時……」），能誘發受訪者的故事和細節，而不是引導出「正確答案」。有趣的是，深度訪談技巧與靈性照顧的「靈性評估問句」非常類似——兩者都在尋求了解對方的內在世界，而非解決問題。</p>
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
              '「研究者即工具」——如果你要研究自己熟悉的領域，你最難「存而不論」的是什麼？',
              '質性研究強調「意義」而非「數字」。你覺得什麼樣的問題更適合質性研究？什麼樣的問題適合量化研究？',
              '深度訪談和靈性評估問句有相似之處。你覺得在你的服事中，哪些時候你可以更主動問開放式問題？',
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
              <h4 className="font-semibold text-green-700 mb-2">🔬 把「存而不論」帶入日常對話</h4>
              <p className="text-gray-700 mb-2">本週在任何一次重要對話中，刻意練習：先完整聽完對方說的話，在心中默數三秒，再開口。在這三秒中，問自己：「我是真的在聽他的世界，還是在準備我的回答？」</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📋 學習「現象學的問句」</h4>
              <p className="text-gray-700 mb-2">試著將以下問句加入你的關懷工具箱：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>「能告訴我這對你來說是什麼感覺嗎？」</li>
                <li>「在這段經歷中，什麼最讓你難受？」</li>
                <li>「你覺得這件事對你意味著什麼？」</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-green-800 font-medium text-sm">禱告：</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">「主，幫助我學習真正的謙遜——不帶著「我的答案」去進入別人的世界，而是帶著「我想了解你」的好奇和愛。讓我成為一個能讓人安心說出真實感受的人。阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
