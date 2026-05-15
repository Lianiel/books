import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Eye, Search, HelpCircle, Check } from 'lucide-react';

export default function Book14Ch2() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">第2章</h1>
        <h2 className="text-xl font-semibold text-gray-700">看清楚聖靈</h2>
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
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-bold text-purple-600 mb-3">近視需要眼鏡的比喻</h4>
              <p className="text-gray-700 leading-relaxed mb-3">市面上不是已經有許多關於聖靈的著作嗎？為什麼還要多添一本？本章從作者的「近視」說起：如果除下眼鏡來看，物象便蒙朧不清，線條不是清晰可辨，容貌變得模糊不清。</p>
              <p className="text-gray-700 leading-relaxed">加爾文有一個很特別的比喻，他說像近視眼的人，需要配戴眼鏡，去將物象對焦，同樣，我們所有人都需要聖經的裝備，説明我們體會神的實在。看清楚神是指對他的性格、他的主權、他的救贖、他的慈愛、他的兒子、他的聖靈和他的作為有正確的認識。</p>
            </div>

            <div className="border-t pt-4">
              <h4 className="font-bold text-purple-600 mb-3">聖靈認識上的模糊現象</h4>
              <p className="text-gray-700 leading-relaxed mb-3">今天聖靈大受注目，眾人所關注的，是他的身分，以及他在個人、教會及社群中做些什麼工作。團契、肢體生活、總動員事奉、聖靈的洗、恩賜、神的引導、預言、神跡等題目，都常常掛在許多人的嘴邊。</p>
              <p className="text-gray-700 leading-relaxed">然而我們雖然經常頌揚聖靈的工作，但往往未能按聖經認識聖靈。對屬靈的事物，我們真個是濛濛眼，大受自己的偏見左右，以致我們沒法看得清楚。</p>
            </div>

            <div className="border-t pt-4">
              <h4 className="font-bold text-purple-600 mb-3">經歷與知識的平衡</h4>
              <p className="text-gray-700 leading-relaxed mb-3">屬靈經驗可以走在概念知識的前頭。耶穌門徒的經驗就是很好的例子——他們追隨耶穌，但對屬靈事物的理解常有錯漏，經常對耶穌有許多誤解。</p>
              <p className="text-gray-700 leading-relaxed">我們可以肯定地說，神賜給信徒的福氣，是絕對而不變地按著他的真理賜下的；錯誤的信仰意味著屬靈的貧乏，對靈性更會造成嚴重損害。若對聖靈有較清晰的觀念，就更能欣賞聖靈的工作，以及避免墮入一些錯謬的陷阱。</p>
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
              <h4 className="font-semibold text-gray-800 mb-2">認識論的陷阱</h4>
              <p className="text-gray-700 leading-relaxed">許多基督徒認為「既然我經歷了聖靈的工作，我就完全認識聖靈」——這是一個邏輯陷阱。經驗是片段的、個人化的，而聖經啟示是全面的、歷史的。一個人可能經歷過聖靈的安慰卻不理解他的聖潔工作；可能有過靈恩的經驗卻誤解他與基督的關係。</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">文化與信仰理解的互動</h4>
              <p className="text-gray-700 leading-relaxed">我們對聖靈的理解深深受到文化、時代背景的影響。西方理性主義傳統可能導致人們否認聖靈的工作；神祕主義傳統可能導致人們過度強調經歷；亞洲靈魂觀可能影響人們對聖靈個格性的理解。自覺地認識這些文化濾鏡，是更清晰看見聖靈的必要步驟。</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">聖經作為「聚焦鏡片」的角色</h4>
              <p className="text-gray-700 leading-relaxed">加爾文的眼鏡比喻指出聖經不是額外的知識，而是幫助我們正確解讀現實的工具。聖經提供的不是抽象的神學，而是一個框架，讓我們能夠辨別何為聖靈工作，何為自己的幻想；何為真正的屬靈成長，何為属靈的虛假。</p>
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
              <p className="text-gray-700">你對聖靈的認識主要來自於哪些來源？—— 個人經歷、講道、書籍、聖經、傳統？每個來源的可靠性如何？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">你有沒有發現自己因為經歷了某些屬靈現象，就以為完全認識聖靈的工作？實際上你還有哪些盲點？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">你的文化背景（東方、西方、科學、傳統信仰等）如何影響了你對聖靈工作的理解？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">聖經在你的屬靈追求中扮演什麼角色？你有沒有遇過聖經與經歷相衝突的情況？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">哪些關於聖靈的「常見觀念」可能是錯誤或片面的？你願意重新檢視哪些觀點？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🔍 自我覺察清單</h4>
              <p className="text-gray-700 mb-2">識別你對聖靈認識的潛在盲點：</p>
              <div className="bg-green-50 p-3 rounded text-gray-700 text-sm space-y-2">
                <p>✓ 我是否過度強調某些聖靈的工作，而忽視其他？</p>
                <p>✓ 我是否有一些關於聖靈的「未經檢驗的假設」？</p>
                <p>✓ 我的文化或背景如何形塑了我對聖靈的期望？</p>
                <p>✓ 我是否將個人經歷絕對化為聖經真理？</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 聖經導向的學習計畫</h4>
              <p className="text-gray-700 mb-2">建立系統化的聖經閱讀：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>按主題研讀聖靈的教導（如：聖靈的洗、聖靈的恩賜、聖靈的果子）</li>
                <li>對比不同書卷對聖靈的描述，注意是否有落差</li>
                <li>記錄聖經如何定義「聖靈充滿」、「聖靈工作」等關鍵概念</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">💬 反思式禱告</h4>
              <p className="text-gray-700 mb-2">在禱告中誠實面對自己的盲點：</p>
              <div className="bg-green-50 p-3 rounded text-gray-700 text-sm">
                <p className="mb-2">「主啊，幫我看清楚我對聖靈認識的盲點。我願意放下我的預設，按照聖經重新認識你的靈。」</p>
                <p>靜默中，讓聖靈光照你需要調整的觀念。</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">👥 屬靈同伴查經</h4>
              <p className="text-gray-700 mb-2">找一位屬靈同伴，共同：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>討論彼此對聖靈的不同理解</li>
                <li>互相問責，是否有傾斜的偏差</li>
                <li>一起用聖經光照自己的觀念，發現及糾正誤差</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">📝 認識論反思日誌</h4>
              <p className="text-gray-700 mb-2">每週記錄：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>本週我發現的關於聖靈的誤解是什麼？</li>
                <li>聖經如何糾正我的理解？</li>
                <li>我需要調整什麼信念或行為？</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
