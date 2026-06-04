import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Compass, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book25Ch9() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true, summary: true, exploration: true, questions: true, practice: true
  });
  const toggle = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">第九章</h1>
        <h2 className="text-xl font-semibold text-gray-700">重新思考我們的事工</h2>
        <p className="text-gray-500 mt-1">如何建立門徒訓練的教會架構？</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('content')} className="w-full px-5 py-3 bg-gradient-to-r from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-blue-700 mb-2">事工架構的根本問題</h3>
              <p className="text-gray-700 leading-relaxed">許多教會的事工架構是為了「服務」而設計的——兒童事工照顧兒童、敬拜事工提供敬拜體驗、關懷事工處理危機……每個事工都有自己的目標和衡量標準，但這些事工加在一起，卻不一定能培育出成熟的門徒。問題不在於這些事工本身，而在於它們彼此孤立，沒有被整合在一個共同的門徒訓練使命下。</p>
              <p className="text-gray-700 leading-relaxed mt-3">重新思考事工，意味著問：「我們的每一個事工，是在幫助人成為更成熟的耶穌門徒嗎？若是，如何？若否，需要如何調整？」這不是要廢除現有的事工，而是要重新對齊它們的方向，使它們成為門徒訓練系統的有機部分。</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-700 mb-2">有果效的事工 vs. 無果效的事工實踐</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <h4 className="font-bold text-red-700 mb-2">❌ 無果效的事工實踐</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• 事工各自為政，沒有共同目標</li>
                    <li>• 以出席人數和奉獻金額為成功標準</li>
                    <li>• 牧師是主要的服事者，會眾是被服事者</li>
                    <li>• 事工的目的是提供服務，不是培育門徒</li>
                    <li>• 沒有系統性的方式把人從一個事工連接到下一個成長階段</li>
                    <li>• 事工領袖不知道他們帶領的人在哪個屬靈成長階段</li>
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <h4 className="font-bold text-green-700 mb-2">✅ 有果效的事工實踐</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• 每個事工都與教會的門徒訓練使命對齊</li>
                    <li>• 以門徒的成熟度和帶人的能力為成功標準</li>
                    <li>• 牧師裝備會眾成為服事者</li>
                    <li>• 事工的目的是在服事中建造門徒</li>
                    <li>• 事工之間有清晰的「下一步」把人連接起來</li>
                    <li>• 事工領袖知道並刻意幫助所帶領的人成長</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-blue-700 mb-2">重新設計事工的五個問題</h3>
              <p className="text-gray-700 leading-relaxed mb-3">在評估和重新設計每個事工時，可以問以下五個問題：</p>
              <div className="space-y-3">
                {[
                  { q: '這個事工如何幫助人在與神的關係中成長？', desc: '有沒有在事工中帶入聖經的查考和禱告？' },
                  { q: '這個事工如何建立真實的關係環境？', desc: '有沒有創造空間讓參與者彼此認識和支持？' },
                  { q: '這個事工如何幫助參與者發展服事能力？', desc: '有沒有讓參與者從「被服事者」變成「服事者」？' },
                  { q: '這個事工是否幫助人向外延伸，接觸未信者？', desc: '有沒有鼓勵參與者帶未信朋友進入這個環境？' },
                  { q: '這個事工如何連接到教會整體的門徒訓練路徑？', desc: '從這個事工，人可以進入什麼樣的下一個成長步驟？' },
                ].map((item, i) => (
                  <div key={i} className="bg-blue-50 border border-blue-100 rounded-lg p-3">
                    <p className="font-semibold text-blue-800">問題{i+1}：{item.q}</p>
                    <p className="text-gray-600 text-sm mt-1">評估重點：{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-blue-700 mb-2">從計畫到帶人：第四個轉化</h3>
              <p className="text-gray-700 leading-relaxed">教會常常有很多很棒的計畫——培訓課程、研討會、工作坊——但這些計畫能帶出成熟的門徒嗎？第四個轉化是從「計畫」轉向「帶人」：不只是設計好課程讓人來上，而是刻意地在課程之外，在個人關係中持續陪伴和帶領他們。</p>
              <p className="text-gray-700 leading-relaxed mt-3">這意味著每個事工、每個課程，都需要有負責任的帶領者——不只是主持聚會的人，而是真實地認識參與者，知道他們的屬靈狀況，並在他們的生命中持續投資的人。</p>
            </div>
          </div>
        )}
      </div>

      {/* 重點總結 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
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
                '重新思考事工不是廢除現有的事工，而是重新對齊它們的方向，使它們都服務於門徒訓練的核心使命。',
                '有果效的事工以門徒成熟度為成功指標，而非出席人數；以裝備會眾服事為目標，而非提供服務。',
                '每個事工都需要回答：「這個事工如何幫助人成為更成熟的耶穌門徒？」沒有答案的事工需要調整或廢除。',
                '事工之間需要有清晰的「下一步」連接，幫助人在教會的門徒訓練路徑中逐步成長。',
                '第四個轉化是從「計畫」到「帶人」：不只是設計課程，而是在課程之外，在個人關係中持續陪伴人。',
                '每個事工都需要負責任的帶領者，不只主持聚會，而是真實認識參與者並在他們生命中持續投資。',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-gray-700">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* 延伸探討 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('exploration')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">延伸探討</span>
          </div>
          {expanded['exploration'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['exploration'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">為什麼「服務型」事工難以帶出成熟的門徒？</h4>
              <p className="text-gray-700 leading-relaxed">許多教會事工設計的出發點是「服務會眾」，這本身沒有問題，但若這是主要目標，就會產生一種「消費者文化」——會眾把教會當作一個提供靈性服務的機構。在這種文化中，人們問的是「這個事工能給我什麼？」而不是「這個事工能幫我成為更好的門徒嗎？」真正的門徒訓練需要人走出舒適圈，承擔責任，這與「消費者文化」是根本對立的。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">事工評估的實際挑戰</h4>
              <p className="text-gray-700 leading-relaxed">重新評估事工往往面臨很大的阻力——特別是那些存在很久、有忠誠支持者的事工。領袖可能會聽到：「這個事工很多人喜歡，你為什麼要改變它？」關鍵是不要把問題定位為「廢除」，而是「如何使這個事工更有果效」。同時，任何改變都需要時間和耐心，以及大量的溝通和異象分享。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「下一步」的重要性</h4>
              <p className="text-gray-700 leading-relaxed">當一個人參加了某個事工或課程後，如果沒有清晰的「下一步」，他很可能在那個點停止成長。「下一步」是門徒訓練系統中連接不同環境的橋梁。例如：崇拜後的「下一步」是加入小組；基礎課程後的「下一步」是加入服事隊伍；服事一段時間後的「下一步」是帶領自己的小組。每個「下一步」都應該清晰地指向更深的委身和成熟。</p>
            </div>
          </div>
        )}
      </div>

      {/* 反思問題 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">反思問題</span>
          </div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && (
          <div className="p-5 bg-white space-y-4">
            {[
              '你的教會目前有哪些事工？對每個事工，你能清楚說明它如何幫助人成為更成熟的門徒嗎？',
              '你的教會各事工之間有清晰的「下一步」連接嗎？若一個新人今天第一次來參加崇拜，他的「下一步」是什麼？',
              '你認為你的教會更偏向「服務型」文化還是「門徒訓練型」文化？哪些跡象讓你這樣判斷？',
              '若你要重新設計你教會的某個事工，使它更對齊門徒訓練的使命，你會從哪個事工開始？你會做什麼改變？',
              '在你參與的事工或小組中，帶領者是否真實認識你的屬靈狀況，並刻意幫助你成長？如果沒有，這代表什麼？',
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
        <button onClick={() => toggle('practice')} className="w-full px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">具體實踐方針</span>
          </div>
          {expanded['practice'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['practice'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 事工健康評估</h4>
              <p className="text-gray-700 mb-2">選擇你參與的一個事工，用以下五個問題評估它的門徒訓練果效：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>這個事工如何幫助人在與神的關係中成長？</li>
                <li>這個事工如何建立真實的關係環境？</li>
                <li>這個事工如何幫助參與者發展服事能力？</li>
                <li>這個事工是否幫助人接觸未信者？</li>
                <li>從這個事工，人可以進入什麼樣的下一個成長步驟？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 設計你事工的「下一步」</h4>
              <p className="text-gray-700">思考你目前參與的事工，參與者完成這個事工後，他們的「下一步」是什麼？若目前沒有清晰的「下一步」，你能提出一個建議嗎？</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 從「服務」到「帶人」</h4>
              <p className="text-gray-700">在你參與的一個事工中，選擇一個你正在服事的人，這個月不只是提供服務，而是主動了解他的屬靈狀況，問他在信仰上的掙扎和成長。</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="font-semibold text-green-700 mb-2">🙏 禱告詞</p>
              <p className="text-gray-700 italic">「主耶穌，求你賜給我和我的教會智慧，能夠重新評估我們所做的一切，問自己是否在幫助人成為更成熟的門徒。求你引導我們做出需要的改變，不怕困難，不回避挑戰，因為我們相信你呼召我們的使命是帶出能帶人的門徒。阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
