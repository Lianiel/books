import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Search, HelpCircle, Check } from 'lucide-react';

export default function Book20Ch1() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">第1章</h1>
        <h2 className="text-xl font-semibold text-gray-700">緒論</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-gray-800 mb-2">研究動機：從九年的臨床陪伴說起</h3>
              <p className="text-gray-700 leading-relaxed">「每個人都需要愛的理解與回饋、和靈性的需求與滿足。」這句話出自衛生福利部國民健康署推動靈性關懷計畫的主持人邱仲峯醫師，是台灣首版《安寧緩和療護的靈性關懷實務指引》的開篇宣言。</p>
              <p className="text-gray-700 leading-relaxed mt-2">作者范銀絲自 2014 年起在北醫擔任靈性關懷師，至論文撰寫時已累積九年的末期病人陪伴經驗。實務中她深刻感受到，要分辨末期病人的「靈性困擾」，不是靠病歷表就能找到答案——需要靠不斷累積的敏感度和判讀能力。她常問自己：「我能更好地陪伴他們嗎？」這份未完成感，成為這份研究的起點。</p>
              <p className="text-gray-700 leading-relaxed mt-2">有一次，一位長期扮演領導者角色的病人告訴她：「妳是關懷師，所以我敢跟妳說內心話。」談完之後，他說心中感到很釋放。這樣的對話，讓作者更相信：「聽」與「回應」之間，是一門深刻的學問，更是藝術。</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">三個研究目的</h3>
              <div className="space-y-2">
                {[
                  '探討照顧末期病人的基督信仰靈性關懷師所定義的靈性、靈性需求及靈性照顧內涵',
                  '探討末期病人需要被靈性照顧的靈性需求',
                  '探討基督信仰靈性關懷師進行末期病人靈性照顧的歷程',
                ].map((p, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="text-purple-600 font-bold flex-shrink-0">{i + 1}.</span>
                    <p className="text-gray-700 leading-relaxed">{p}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">核心名詞解釋</h3>
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-1">靈性照顧（Spiritual Care）</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">一種助人的行為，重在關注人生命中的靈性議題，例如生命意義與價值，以及神、人、物、我關係，苦難與生死的反思。</p>
                </div>
                <div className="p-3 bg-pink-50 rounded-lg">
                  <h4 className="font-semibold text-pink-800 mb-1">末期病人</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">根據安寧緩和醫療條例，指罹患嚴重傷病，經醫師診斷認為不可治癒，且有醫學上之證據，近期內病程進行至死亡已不可避免者。末期病人除了身體症狀外，常面臨失落、分離、死亡恐懼等強烈心理狀態，也會出現靈性困擾，例如探尋受苦的意義、尋求關係和解或信仰安慰。</p>
                </div>
                <div className="p-3 bg-indigo-50 rounded-lg">
                  <h4 className="font-semibold text-indigo-800 mb-1">靈性關懷師</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">受過專業培訓，在臨床環境中為病人及家屬提供靈性照顧的人員。在台灣，通常須完成臨床牧關教育（CPE）訓練，並取得相關認證。</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">末期病人的靈性處境</h3>
              <p className="text-gray-700 leading-relaxed">面對死亡，末期病人的反應千變萬化：有人憤怒（「為什麼是我？」），有人沉默封閉，有人拼命尋求各種治療，有人則把握時間完成未竟心願、修復關係。有些病人會有「臨死覺知」（death awareness），清楚感知死亡將近，主動尋求道別、和好與安慰。這些多樣的心理和靈性狀態，正是靈性關懷師需要深刻理解的對象。</p>
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
              <h4 className="font-semibold text-gray-800 mb-2">台灣靈性關懷的制度化進程</h4>
              <p className="text-gray-700 leading-relaxed">台灣靈性關懷的制度化起步較晚，但發展迅速。衛福部的「安寧靈性關懷人員培訓計畫」與台灣首版《安寧緩和療護的靈性關懷實務指引》的發行，標誌著靈性照顧從教會關懷走向正規醫療體系的重要轉折。這份指引讓靈性照顧有了可操作的實務框架，使靈性關懷師能在醫療團隊中有更清晰的角色定位。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「善終」的多層意涵</h4>
              <p className="text-gray-700 leading-relaxed">「善終」在中文文化中往往被理解為平靜、有尊嚴地離世，但靈性關懷視角下的善終更豐富：包括靈性平安（對死後歸處有把握）、關係和好（與重要他人道謝、致歉、道別）、心願完成（未了之事有交代）、以及被愛與尊重（即使最軟弱時仍被尊嚴對待）。安寧創始人西西里．桑德斯（Cicely Saunders）的名言說得深刻：「你是重要的，因為你是你。即使活到最後一刻，你仍然是那麼重要。」</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">研究者即工具：質性研究的主體性</h4>
              <p className="text-gray-700 leading-relaxed">作者選擇研究自己長期服務的領域，意味著她自身的臨床經驗是研究的重要資源，但也帶來挑戰——如何「存而不論」，暫時懸置個人的主觀判斷，以開放的姿態真正聆聽受訪者的世界？這是質性現象學研究的核心功夫。作者坦然面對這個張力，反而使研究更加真實可信。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「靈性困擾」vs「心理困擾」：如何分辨？</h4>
              <p className="text-gray-700 leading-relaxed">靈性困擾與心理困擾常常交織，難以截然劃分。一般而言，靈性困擾涉及意義、目的、超越和關係（與上帝、他人、自我）；心理困擾則更聚焦於情緒調節和認知模式。臨床上常見的靈性困擾包括：對上帝感到憤怒（「神為何讓我受苦？」）、感覺被遺棄、失去生命意義感，以及對死後去處的恐懼與不確定。</p>
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
              '當你聽到一位末期病人說「我不知道為什麼神要讓我受苦」，你的第一反應是什麼？你想要「解釋」，還是「陪伴」？',
              '回想你曾陪伴過的人（或自己）面對重大失落時，什麼樣的回應讓你感到被理解？什麼讓你感到更孤單？',
              '「聽」與「回應」是一門藝術——你覺得自己在「深度傾聽」這件事上，最需要成長的是什麼？',
              '你如何定義一個人的「善終」？這個定義與你的信仰有什麼關係？',
              '靈性困擾有時比身體疼痛更難被發現。在你的服事或生活中，你曾如何察覺到別人的靈性需要？',
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
              <h4 className="font-semibold text-green-700 mb-2">🎧 練習「存而不論」的聆聽</h4>
              <p className="text-gray-700 mb-2">本週找一次機會，讓對方說完整的故事，在過程中不給建議、不轉移話題、不急著分享自己的故事。練習純粹的陪伴。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>結束後問自己：我有幾次想打斷？我在哪裡感到不舒服？</li>
                <li>這種不舒服，可能就是靈性關懷師需要內在操練的地方</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 認識「四道人生」</h4>
              <p className="text-gray-700 mb-2">「四道人生」是安寧照顧中幫助臨終者完成心願的重要框架：謝謝你、我愛你、對不起、再見。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>思考：在你重要的關係中，哪一道還沒說出口？</li>
                <li>如果你今天就是末期病人，你最想對誰說哪句話？</li>
                <li>不要等到生命末期，今天就可以練習表達</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 個人靈性自我評估</h4>
              <p className="text-gray-700 mb-2">一位靈性關懷師首先需要認識自己的靈性狀態。用5分鐘回答這些問題：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>我目前與上帝的關係如何？是疏離還是親近？</li>
                <li>我對自己生命的意義感如何？</li>
                <li>我在哪些關係中有未解的心結？</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-100 mt-2">
              <p className="text-green-800 font-medium text-sm">禱告：</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">「主，謝謝祢創造了每一個有靈性的生命。求祢讓我成為能真正『同在』的人，不急於解答，不害怕沉默，只是以愛陪伴。讓我先學會被祢安慰，才能去安慰人的靈魂。阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
