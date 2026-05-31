import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Award, Search, HelpCircle, Check } from 'lucide-react';

export default function Book20Ch6() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    exploration: true,
    questions: true,
    practice: true,
  });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">第6章</h1>
        <h2 className="text-xl font-semibold text-gray-700">結論與建議</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">
            <div>
              <h3 className="font-bold text-gray-800 mb-3">五大研究結論</h3>
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-800 mb-2">結論一：靈性是從上帝而來的內在力量</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">兩位關懷師的靈性觀都植根於基督信仰：靈性出自上帝創造，是人與生俱來內在最深的動力，啟動身體、心理、社會，使人追尋意義、愛和與上帝的連結。研究者強調：靈性是整個靈性照顧實務歷程的起點，有了對靈性的清晰理解，才能開展適切的靈性照顧。</p>
                </div>
                <div className="p-4 bg-pink-50 rounded-lg border-l-4 border-pink-500">
                  <h4 className="font-bold text-pink-800 mb-2">結論二：靈性需求涵蓋全人的需求</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">兩位關懷師都從全人五面向（身體、人際、神、環境、自我）理解靈性需求，而非只著重「宗教信仰」的部分。實務意涵是：靈性關懷師需要有全人觀，能辨別不同層面的需求，適時轉介，而不是把所有問題都定義為「靈性問題」。</p>
                </div>
                <div className="p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-500">
                  <h4 className="font-bold text-indigo-800 mb-2">結論三：靈性照顧是全人照顧</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">靈性照顧不是在「信仰議題」出現時才介入，而是從病人進入安寧病房開始，以全人的角度持續陪伴。靈性照顧者以愛為出發點，無條件尊重病人，透過深度傾聽和同理，協助病人在生命末期整合身心社靈的需求，達到靈性安適。</p>
                </div>
                <div className="p-4 bg-teal-50 rounded-lg border-l-4 border-teal-500">
                  <h4 className="font-bold text-teal-800 mb-2">結論四：末期病人的靈性需求有其獨特性</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">每一位末期病人的靈性需求都是個別化的。研究中的案例清楚顯示，沒有一個標準化的靈性照顧方案可以套用於所有病人。靈性關懷師必須有能力聆聽每個人獨特的生命故事，才能提供真正切合需要的照顧。</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-green-800 mb-2">結論五：靈性照顧實務歷程反映對生命的尊重</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">兩位關懷師的實務原則——深入了解病人、以病人需求為中心、循病人步調前進、不強加自己的定義、接受拒絕、堅守崗位到最後——構成了一個充滿尊嚴的照顧框架。這個框架最深的神學根基，是西西里．桑德斯的話：「你是重要的，因為你是你。即使活到最後一刻，你仍然是那麼重要。」</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3">研究限制</h3>
              <div className="space-y-2">
                {[
                  '樣本只有兩位關懷師，且均為女性基督徒，研究結果無法直接推論至其他背景的靈性關懷師',
                  '作者本身即是靈性關懷師，雖努力做到「存而不論」，仍可能有主觀詮釋的影響',
                  '研究場域限於台灣北部醫療院所，不同地區、不同機構的靈性照顧文化可能有差異',
                ].map((l, i) => (
                  <div key={i} className="flex gap-2 text-sm text-gray-600">
                    <span className="text-gray-400 flex-shrink-0">•</span>
                    <p>{l}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3">未來研究建議</h3>
              <div className="space-y-2">
                {[
                  '研究「什麼樣的人格特質適合被培訓為照顧末期病人的靈性關懷師」',
                  '探討「靈性關懷師如何做醫院員工關懷」——關懷師本身也需要被關懷',
                  '比較不同信仰背景靈性關懷師的實務歷程差異',
                  '探討靈性照顧介入的長期成效評估方式',
                ].map((s, i) => (
                  <div key={i} className="flex gap-2 text-sm text-gray-700">
                    <span className="text-teal-500 flex-shrink-0">→</span>
                    <p>{s}</p>
                  </div>
                ))}
              </div>
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
              <h4 className="font-semibold text-gray-800 mb-2">靈性關懷師的「人格特質」問題</h4>
              <p className="text-gray-700 leading-relaxed">研究建議探討靈性關懷師的人格特質，這是一個極有價值的問題。從研究者和兩位受訪者的分享可以推論：良好的靈性關懷師可能需要高度的同理心、情緒穩定性、對不確定性的容忍、自我覺察能力、以及深厚的靈性生命作為底氣。然而「人格特質是否可以培訓」這個問題本身，也值得深入探討。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">靈性關懷師也需要被關懷：「誰來牧養牧人？」</h4>
              <p className="text-gray-700 leading-relaxed">長期面對死亡、苦難和靈性困擾，靈性關懷師本身的靈性健康是一個重要卻常被忽視的議題。「誰來牧養牧人？」（Who cares for the caregiver?）在安寧照顧圈內是一個嚴肅的問題。督導制度、同儕支持、個人靈性操練、以及教會群體的支撐，是關懷師靈性健康的關鍵支柱。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「死者善終、生者善別」：家屬的靈性照顧</h4>
              <p className="text-gray-700 leading-relaxed">研究雖聚焦在末期病人，但兩位關懷師的分享也多次提到家屬的需求。家屬在陪伴親人臨終的過程中，同樣面臨靈性困擾：無力感、罪惡感、預期性哀傷，以及失去至親後的「善別」。安寧照顧的目標是「死者善終、生者善別」——靈性關懷師的工作延伸至病人離世後的哀傷陪伴，同樣重要。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">這份研究對教會服事的啟示</h4>
              <p className="text-gray-700 leading-relaxed">這份研究不只是給醫療專業人員看的。對教會牧者、小組長、關懷同工來說，同樣有深刻的啟示：每一個有困難的肢體，都有全人五面向的需求；靈性照顧不是「說教」，而是「同在」；照顧者本身的靈性健康，是最重要的服事基礎。基督教信仰的核心——愛上帝、愛人——在靈性照顧的實踐中，找到了最真實的表達。</p>
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
              '五大結論中，哪一個最讓你感到「是的，這正是我在服事中學到或想學到的」？',
              '「你是重要的，因為你是你」——這句話，你最想對生命中哪一個人說？你願意今天就說嗎？',
              '讀完這份研究，你對「善終」的理解有沒有改變？你理想中的「善終」是什麼樣的？',
              '你覺得在你目前的生命階段，你自己有沒有在做「靈性照顧」的工作（不論是否在醫療場域）？',
              '如果你有機會對作者范銀絲說一句話，你會說什麼？',
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
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🌱 制定個人靈性成長計畫</h4>
              <p className="text-gray-700 mb-2">靈性關懷師的首要工具是自己的靈性生命。這個月承諾一件具體的靈性操練：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>每天固定的安靜時間（禱告、讀經、默想）</li>
                <li>找一位可以彼此靈性扶持的同伴或導師</li>
                <li>加入一個安全的小組或督導圈</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🤲 學習「關懷者的自我照顧」</h4>
              <p className="text-gray-700 mb-2">在你的服事清單中，加入「自我照顧」這一項。定期問自己：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>我的靈性枯竭了嗎？需要補充？</li>
                <li>我有沒有把他人的痛苦帶回家卻無處放下？</li>
                <li>我自己的靈性五需求（意義、和好、信仰、心願、來生）各處於什麼狀態？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📝 立下一份個人「預立靈性關懷計畫」</h4>
              <p className="text-gray-700 mb-2">受這份研究啟發，為自己的生命末期做一個靈性預備（可以與最信任的人分享）：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>我最在乎的三件事是什麼？</li>
                <li>我有哪些關係需要修復？</li>
                <li>我希望在生命末期有誰陪伴？</li>
                <li>我對死後去處的信仰立場是什麼？</li>
              </ul>
            </div>
            <div className="p-4 bg-teal-50 rounded-lg border border-teal-100 mt-2">
              <p className="text-teal-800 font-medium text-sm">結束禱告：</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">「天父，感謝祢在末期病人的靈魂裡仍然工作，也感謝祢呼召范銀絲弟兄姊妹用九年的生命服事，並寫下這份研究。求祢讓我從這份研究中得到力量和方向，在我生命所到之處，成為一個能安慰人靈魂的人。不因別人的痛苦而逃跑，不因自己的有限而放棄，因為祢就是安慰者，祢先安慰了我們。阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
