import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Bell, Search, HelpCircle, Check } from 'lucide-react';

export default function Book14Ch8() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">第8章</h1>
        <h2 className="text-xl font-semibold text-gray-700">聖靈，請來！</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>

        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <p className="text-gray-700 leading-relaxed">聖靈，請來！這是一個呼召，是一個祈禱，是對聖靈工作最誠摯的邀請。但這個呼召是基於對聖靈位格和工作的正確理解。</p>
            <p className="text-gray-700 leading-relaxed">首先，聖靈已經來了——他在五旬節降臨，已經內住在每個信徒心中。所以「聖靈，請來」不是求聖靈第一次到來，而是求他更充分地運行他的工作，更完全地控制我們的生命。</p>
            <p className="text-gray-700 leading-relaxed">其次，這個呼召承認聖靈的主權。我們不能強制聖靈按照我們的計畫工作，而是求他按照他的旨意和他的時間工作。這是一個謙遜的姿態，承認神的智慧高於我們的智慧。</p>
            <p className="text-gray-700 leading-relaxed">第三，這個呼召是一個生活的方向。信徒的生活應該是對聖靈工作的持續邀請——通過禱告、順服、信心、愛心。當聖靈充滿一個人時，那人的生命會自然地流露出聖靈果子：愛、喜樂、和平、忍耐、恩慈、良善、信實、溫柔、節制。</p>
            <p className="text-gray-700 leading-relaxed">「聖靈，請來」最後意味著什麼？它意味著我放棄自我的控制，邀請聖靈完全掌管我的生命——我的思想、情感、意志、行為。這是一個徹底的委身，一個完全的轉變。</p>
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
              <h4 className="font-semibold text-gray-800 mb-2">聖靈的主權與人的邀請</h4>
              <p className="text-gray-700 leading-relaxed">這裡有一個張力：聖靈已經內住，已經開始工作，但人仍然需要邀請他，甚至求他充滿。這不是矛盾，而是表達神給人類的尊重。聖靈不會強制進入一個關閉的心門，而是敲門等待人的邀請。人的開放和邀請是聖靈充分工作的必要條件。</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">聖靈果子的自然流露</h4>
              <p className="text-gray-700 leading-relaxed">加拉太書5:22-23列舉的聖靈果子不是道德成就，而是聖靈內住時的自然結果。正如一棵蘋果樹不是「努力」結出蘋果而是本性如此，被聖靈充滿的信徒會自然地結出愛、喜樂、和平。這提醒我們，屬靈成長不是自我提升或道德完美化，而是允許聖靈用他的性情代替我們的自我。</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">控制的轉移</h4>
              <p className="text-gray-700 leading-relaxed">許多信徒害怕邀請聖靈完全控制，因為害怕失去自我。但聖靈不會消滅人格，而是淨化它、提升它、改造它。被聖靈引導的生活不是失去自由，而是獲得真正的自由——從罪的奴役中解放，從自我欺騙中清醒，從虛偽中得真實。</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">持續的邀請</h4>
              <p className="text-gray-700 leading-relaxed">「聖靈，請來」不是一次禱告就完成的事，而是信仰生活的重複樂章。每一天、每一個決定、每一個挑戰、每一個機會，信徒都需要重新邀請聖靈掌管。這是一個持續的過程，不是一次終極的經驗。</p>
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
              <p className="text-gray-700">你對「聖靈，請來」這個呼召的理解是什麼？它在你的屬靈生活中扮演什麼角色？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">你有沒有害怕邀請聖靈完全掌管你的生命？為什麼？那個恐懼是什麼？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">在你生命中，聖靈果子最明顯的是哪一個？最缺乏的是哪一個？為什麼？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">聖靈完全掌管你的生活會是什麼樣子？你的優先順序、決策、人際關係會如何改變？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">在日常生活中，你有多經常邀請聖靈掌管？這個邀請對你的日常決策有多少影響？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🙏 每日的邀請禱告</h4>
              <p className="text-gray-700 mb-2">建立一個習慣，每天開始時都邀請聖靈：</p>
              <div className="bg-green-50 p-3 rounded text-gray-700 text-sm">
                <p>「聖靈，我邀請你今天充滿我、掌管我。我將我的思想、情感、意志、行為都交給你。請帶領我的每一個決定，引導我的每一句話，掌管我的每一個行動。願我今天的生活完全反映你的旨意，而不是我的私慾。」</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🍎 聖靈果子的自評與培養</h4>
              <p className="text-gray-700 mb-2">加拉太書5:22-23列舉的九個果子，逐一評估自己：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>愛 / 喜樂 / 和平 / 忍耐 / 恩慈 / 良善 / 信實 / 溫柔 / 節制</li>
                <li>最強的是哪一個？最弱的是哪一個？</li>
                <li>為最弱的果子禱告，邀請聖靈在這方面工作</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔐 控制權的交付</h4>
              <p className="text-gray-700 mb-2">在一個你仍然握住的領域（金錢、人際關係、職業選擇、身體、時間等），決定將其交給聖靈掌管。具體步驟：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>承認你目前仍在控制這個領域</li>
                <li>認識到你的掌控往往導致內疚、焦慮或失敗</li>
                <li>決定完全交給聖靈，相信他的智慧高於你</li>
                <li>每當誘惑回到自我控制時，重新交付給聖靈</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">⏰ 整日的認知</h4>
              <p className="text-gray-700 mb-2">全天與聖靈保持對話：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>面臨選擇時：「聖靈啊，請指引」</li>
                <li>遇到衝突時：「聖靈啊，幫我用愛回應」</li>
                <li>感到軟弱時：「聖靈啊，填滿我」</li>
                <li>經歷成功時：「聖靈啊，願榮耀歸你」</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 承諾的宣言</h4>
              <div className="bg-green-50 p-3 rounded text-gray-700 text-sm">
                <p>寫下你對聖靈掌管的承諾，並在困難時重新讀它：</p>
                <p className="mt-2">「我，[名字]，決定邀請聖靈完全掌管我的生命。我承認我的自我中心、我的失敗、我的軟弱。我願意放下我的掌控，完全信靠聖靈的智慧和愛。願聖靈的果子在我身上自然流露。願我的生命見證聖靈的大能。」</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
