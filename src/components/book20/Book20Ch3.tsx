import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Search, HelpCircle, Check } from 'lucide-react';

export default function Book20Ch3() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">第3章</h1>
        <h2 className="text-xl font-semibold text-gray-700">靈性關懷師與基督教靈性照顧</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-gray-800 mb-2">靈性關懷師的定義與起源</h3>
              <p className="text-gray-700 leading-relaxed">靈性關懷（Spiritual Care）的概念起源於基督教的信仰傳統。作家 Kerry Egan 描述靈性關懷師的核心工作是：在病人感到最赤裸、最孤弱的時刻，以真實的同在陪伴他們。靈性關懷師不是佈道者，不是心理師，也不是道德顧問；她是一個「願意進入他人靈性空間」的同行者。</p>
              <p className="text-gray-700 leading-relaxed mt-2">在台灣，「靈性關懷師」（Spiritual Caregiver）是近年安寧照顧體系中逐漸成形的專業角色，通常須完成臨床牧關教育（CPE, Clinical Pastoral Education）的訓練，並取得認證。史懷哲宣道會是台灣主要的 CPE 培訓機構之一，提供系統性的臨床督導和靈性培育。</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">台灣靈性關懷師的發展歷程</h3>
              <p className="text-gray-700 leading-relaxed">安寧療護在台灣的發展，從 1990 年代馬偕醫院設立第一個安寧病房開始，靈性照顧的重要性逐漸被認識。2019 年台灣首版《安寧緩和療護的靈性關懷實務指引》的發行，是靈性照顧制度化的重要里程碑，為靈性關懷師的角色和職責提供了具體的參照框架。</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">基督教靈性照顧的神學基礎</h3>
              <p className="text-gray-700 leading-relaxed">從創世記到新約，聖經對人的靈性存有有豐富的教導。人和動物最大的不同，在於人從上帝領受了靈性生命，具有社群性（和諧相愛）和超越性（與上帝連結、以智慧治理萬物）。罪的進入破壞了人與上帝、他人、自我的關係，死亡（在聖經意涵中是疏遠、分開）也隨之而來。</p>
              <p className="text-gray-700 leading-relaxed mt-2">因此，基督教靈性照顧的核心是關係的修復，以基督的救恩為終極盼望，幫助末期病人在生命關口重新找到與上帝、與人的和好，以及靈魂有歸處的平安。</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">耶穌的死亡：末期病人靈性困擾的縮影</h3>
              <p className="text-gray-700 leading-relaxed">研究探討耶穌被釘十字架時說的七句話，作為理解末期病人靈性需求的神學鏡鑑：</p>
              <div className="space-y-2 mt-2">
                {[
                  { verse: '父啊！赦免他們（路廿三 34）', insight: '寬恕的議題：不帶怨恨離世' },
                  { verse: '今日你要同我在樂園裡了（路廿三 43）', insight: '死後靈魂歸處的盼望與確信' },
                  { verse: '看，你的兒子…看，你的母親！（約十九 26-27）', insight: '至親的托付：放心自己最愛的人' },
                  { verse: '我的上帝！為什麼離棄我？（馬廿七 46）', insight: '靈性困擾：被最信任者遺棄的痛' },
                  { verse: '我渴了（約十九 28）', insight: '身體舒適需要：靈性會談的前提' },
                  { verse: '成了（約十九 30）', insight: '人生使命的完成：意義感的確立' },
                  { verse: '我將我的靈魂交在祢手裡（路廿三 46）', insight: '最終的信靠：生命交託給賜生命的主' },
                ].map((item, i) => (
                  <div key={i} className="p-3 bg-purple-50 rounded-lg">
                    <p className="text-purple-800 font-medium text-sm">「{item.verse}」</p>
                    <p className="text-gray-600 text-sm mt-1">→ {item.insight}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mt-3">耶穌的七言揭示：人在面對死亡時的需要——被理解、被愛、被陪伴、寬恕、有盼望、完成使命——正是靈性關懷師在病房中最常遇見的靈性議題。</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">基督教靈性照顧的實務原則</h3>
              <p className="text-gray-700 leading-relaxed">在與末期病人交談時要避免：否認（禁止討論死亡）、無法「同在」（人在心不在）、轉移話題（把焦點移到自己身上）。適合探討的主題包括：身體舒適、深度情緒同理、處理懸而未決的恩怨、死後歸處、至親托付、以及最終的信仰選擇。</p>
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
              <h4 className="font-semibold text-gray-800 mb-2">CPE（臨床牧關教育）：從神學到臨床的橋樑</h4>
              <p className="text-gray-700 leading-relaxed">CPE 是在醫院或安寧機構中進行的實務培訓課程，讓神學背景的人在真實臨床情境中學習如何陪伴病人。其核心不在傳授技巧，而是通過反思記錄（Verbatim）和小組督導，幫助學員認識自己的反應模式，發展真實的「同在」能力。CPE 的哲學是：一位靈性關懷師首先需要自己的靈魂被牧養，才能牧養他人。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">基督教靈性照顧中的「信仰抉擇機會」</h4>
              <p className="text-gray-700 leading-relaxed">耶穌對臨死的死刑犯說「今日你要同我在樂園裡了」，提醒我們：在生命末期，人仍然可以接受恩典、做出信仰抉擇。靈性關懷師的角色，是適時提供這個機會，而不是強迫或操控。尊重病人的自主性和靈性旅程，是基督教靈性照顧的倫理前提。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">多元文化中的靈性照顧挑戰</h4>
              <p className="text-gray-700 leading-relaxed">台灣社會有基督教、佛教、道教、民間信仰等多元宗教背景。基督信仰靈性關懷師在面對不同信仰背景的病人時，如何保持真誠而不失去自身信仰立場？研究中兩位關懷師的做法是：聚焦在靈性的共同語言（連結、意義、盼望），以尊重為前提，讓病人自由描述他們的信仰世界，然後在對方願意的時候，自然分享基督信仰的盼望。</p>
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
              '耶穌的七句話中，哪一句最讓你感動，或與你自己生命的某個時刻最有共鳴？為什麼？',
              '你覺得「同在」（Presence）與「給建議」最大的差別是什麼？你個人更傾向哪一種？',
              '如果你有機會接受 CPE 訓練，你最想在自己哪個層面得到成長或挑戰？',
              '當陪伴一個不信基督教的病人時，你如何在尊重對方信仰的同時，保持自己的信仰誠信？',
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
              <h4 className="font-semibold text-green-700 mb-2">✝️ 默想耶穌的七句話</h4>
              <p className="text-gray-700 mb-2">找一個安靜的時間，慢慢讀完耶穌在十架上的七句話（路廿三 34, 43; 約十九 26-27, 28, 30; 馬廿七 46; 路廿三 46）。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>對每句話問：這句話顯示出耶穌有什麼靈性需求？</li>
                <li>問：這句話與我見過的病人（或自己）有什麼連結？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🤝 練習「同在的藝術」</h4>
              <p className="text-gray-700 mb-2">在一次探訪（病人、長者、朋友）中，刻意避免以下行為：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>否認對方的感受（「你應該要想開」）</li>
                <li>急著轉移話題</li>
                <li>說「我知道你的感覺」（除非真的有相同經歷）</li>
              </ul>
              <p className="text-gray-700 text-sm mt-2">反之，練習說：「謝謝你告訴我這些」、「這聽起來很難」、「我在這裡陪你」。</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-green-800 font-medium text-sm">禱告：</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">「主耶穌，感謝祢在十架上示範了真實的靈性需求——被愛、被陪伴、寬恕、完成使命、靈魂有所歸。求祢讓我成為能與人真實同在的人，不因對方的軟弱而退縮，也不因自己的有限而失去盼望。阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
