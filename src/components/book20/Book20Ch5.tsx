import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Search, HelpCircle, Check } from 'lucide-react';

export default function Book20Ch5() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">第5章</h1>
        <h2 className="text-xl font-semibold text-gray-700">研究結果</h2>
        <p className="text-gray-500 text-sm mt-1">兩位靈性關懷師的靈性觀與末期病人個別化照顧</p>
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
          <div className="p-5 bg-white space-y-6">
            <div>
              <h3 className="font-bold text-gray-800 mb-3">一、靈性是從上帝而來的內在力量</h3>
              <div className="space-y-3">
                <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-400">
                  <p className="font-semibold text-purple-800 text-sm mb-1">關懷師 L 的靈性定義</p>
                  <p className="text-gray-700 text-sm leading-relaxed">「靈性……就是由神而來的，賦予人一口氣，那這口氣，他就是在人的內在那個最深的動力，那個動力也是幫助人去追尋人存在的價值跟意義……或者是能夠幫他們滿足他們內在心靈的那種滿足感。」</p>
                  <p className="text-gray-600 text-xs mt-1">靈啟動了身體、心理、社會，即靈涵蓋人的整個全部。</p>
                </div>
                <div className="p-4 bg-pink-50 rounded-lg border-l-4 border-pink-400">
                  <p className="font-semibold text-pink-800 text-sm mb-1">關懷師 G 的靈性定義</p>
                  <p className="text-gray-700 text-sm leading-relaxed">「靈性是一個正面的，一個善的方向，跟一個引導人平安的，他是一個非常有生命力的……我覺得靈性存在我們的裡面，那在聖經上講就是神的靈嘛，就從我們的鼻孔吹進一個靈，我們就成了一個屬靈的活人，所以靈性是活的，是活躍的，是跟神連結的。」</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3">二、靈性需求涵蓋全人的需求</h3>
              <p className="text-gray-700 leading-relaxed mb-3">兩位關懷師都強調：靈性需求不只是「信仰問題」，而是全人五面向的需求——身體安適、人際互動、人跟神、人跟環境、人跟自己。</p>
              <div className="p-4 bg-indigo-50 rounded-lg">
                <p className="font-semibold text-indigo-800 text-sm mb-2">關懷師 L 的全人 Shalom 框架：</p>
                <p className="text-gray-700 text-sm leading-relaxed">「基督信仰裡面很重要的 shalom……就是身體的安適，然後另外就是人際的互動，人跟神，人跟環境，跟自己，我們說如果能夠達到一個平衡，或者是讓他的靈能夠可以得到平靜、安穩，那這樣子的一個 shalom，平安，確實就能夠帶給他一種心裡的安定。」</p>
              </div>
              <p className="text-gray-700 leading-relaxed mt-3">從全人五面向衍生出末期病人的靈性需求清單：意義感與存在感的探索、關係和好修復、宗教信仰需求、心願完成、醫囑遺囑清楚交代，以及靈魂歸處有把握。</p>
              <p className="text-gray-700 leading-relaxed mt-2 text-sm italic border-l-4 border-gray-200 pl-3">實務提醒：病人表達的需求可能先是身體（疼痛），再是心理（情緒），最後才到靈性（意義與信仰）。關懷師要能辨別優先順序，適時轉介醫師、護理師、心理師、社工師，而非所有需求都靠靈性關懷師一人承擔。</p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3">三、靈性照顧是全人照顧</h3>
              <p className="text-gray-700 leading-relaxed mb-3">關懷師 G 說：「幫助人靈性平安就是靈性照顧。一個人他生老病死，被尊嚴的照顧，被尊重、被愛和扶持，我覺得這都是靈性照顧。」</p>
              <p className="text-gray-700 leading-relaxed">關懷師 L 以一個真實案例說明：一位因相信另類療法而舉債的病人家庭，安寧團隊的社工師、心理師、靈性關懷師各司其職，共同協助這個家庭得到全人的支持。當病人知道家人不因負債而怨恨他，當靈性困擾（內疚、咎責自己）被關懷師承接，病人才能放心踏上最後的旅程。</p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3">四、末期病人的靈性需求有其獨特性</h3>
              <p className="text-gray-700 leading-relaxed mb-3">研究歸納出五類末期病人常見的個別化靈性需求（研究者根據文獻整理，對照兩位關懷師的實務案例驗證）：</p>
              <div className="space-y-2">
                {[
                  { cat: '生命意義與目的', desc: '「我的人生有沒有意義？我是誰？我為何在這裡？」這種存在性困擾，是最核心的靈性議題。' },
                  { cat: '和好修復', desc: '渴望在死前修復重要關係——向家人道謝、道歉、道愛，「四道人生」的完成對病人靈性平安至關重要。' },
                  { cat: '宗教信仰支持', desc: '對有信仰的病人，宗教儀式（禱告、抹油、讀經）和信仰群體的陪伴，往往帶來深刻的安慰。' },
                  { cat: '心願與托付', desc: '確保遺願有人執行、至親有人照顧——只有解決了現實的牽掛，靈性才能安息。' },
                  { cat: '靈魂歸處的盼望', desc: '「我死後去哪裡？」這個問題對末期病人往往最迫切，需要誠實面對，而非迴避。' },
                ].map((item, i) => (
                  <div key={i} className="p-3 bg-purple-50 rounded-lg">
                    <span className="font-semibold text-purple-800 text-sm">{item.cat}：</span>
                    <span className="text-gray-700 text-sm">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3">五、靈性照顧的實務流程</h3>
              <p className="text-gray-700 leading-relaxed">兩位關懷師的實務原則可歸納為：深入了解病人→以病人需求為中心→循著病人步調前進→不以自己的定義解釋病人的靈性困擾→坦然接受病人拒絕被關懷→堅守崗位陪伴到最後。這個流程充分反映對生命的尊重——「你是重要的，因為你是你。」</p>
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
              <h4 className="font-semibold text-gray-800 mb-2">當病人拒絕靈性關懷</h4>
              <p className="text-gray-700 leading-relaxed">兩位關懷師都提到，有些末期病人拒絕被靈性照顧——可能是因為還沒準備好面對死亡，也可能是文化或個性的因素。研究者的理解是：接受被拒絕，本身就是對病人自主性的尊重，也是靈性照顧的一部分。關懷師的工作不是「打開每一扇心門」，而是讓每一個人知道「那扇門永遠是敞開的」。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「此時此刻」的優先次序</h4>
              <p className="text-gray-700 leading-relaxed">關懷師 L 特別強調「此時此刻」病人需求的優先次序。一個有靈性困擾的病人，在身體疼痛沒有控制之前，根本無法進行靈性會談。靈性關懷師因此需要有醫療常識，能辨別何時應先協助轉介緩和症狀，何時才是進行靈性照顧的時機。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">末期病人的譫妄與靈性照顧</h4>
              <p className="text-gray-700 leading-relaxed">關懷師 L 提到，末期病人常會有譫妄（Delirium）現象，靈性關懷師需要先跟醫療團隊確認是醫學性的譫妄還是靈性現象（如死前幻視），才能做出適當的回應。這提醒靈性關懷師：靈性照顧需要與醫療知識整合，而非在「宗教」與「醫學」之間畫一條清晰的線。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">跨團隊合作的重要性</h4>
              <p className="text-gray-700 leading-relaxed">研究中清楚呈現：沒有任何一個專業可以單獨滿足末期病人的全人需求。靈性關懷師在安寧團隊中，如同一個「整合者」——她需要知道何時轉介，何時接手，何時深入靈性核心，何時退出讓其他專業介入。這種謙遜和團隊意識，是高品質靈性照顧的關鍵。</p>
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
              '五類末期病人的靈性需求（意義、和好、信仰支持、心願托付、靈魂歸處）中，你覺得哪一個最難被滿足？為什麼？',
              '「循著病人步調前進」——在你的服事或生活中，你有沒有曾因為太想「幫助」對方而走得比對方快？結果如何？',
              '「接受被拒絕是靈性照顧的一部分」——這句話對你有挑戰嗎？你如何面對服事中被拒絕或被忽視的時刻？',
              '如果你今天突然被告知只剩三個月，你的「五類靈性需求」各自處於什麼狀態？',
              '你覺得在你的教會或服事群體中，靈性關懷師的角色是被重視的嗎？有沒有可以更好的地方？',
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
              <h4 className="font-semibold text-green-700 mb-2">💚 練習「全人評估」問句</h4>
              <p className="text-gray-700 mb-2">下次探訪病人或陪伴有困難的朋友時，試著在心中對照全人五面向，問自己：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>身體層面：對方身體舒不舒服？有沒有立即的需求？</li>
                <li>心理層面：對方情緒如何？有沒有未說出口的悲傷或憤怒？</li>
                <li>社會層面：對方的家庭關係、經濟、人際有沒有壓力？</li>
                <li>靈性層面：對方對意義、連結、超越和盼望的需求如何？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 完成你自己的「五類靈性需求清單」</h4>
              <p className="text-gray-700 mb-2">誠實回答以下問題（不需要公開分享）：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>意義感：我知道自己為什麼而活嗎？</li>
                <li>關係和好：我有沒有未解的關係心結需要修復？</li>
                <li>信仰：我的信仰在困難中是支撐還是困惑？</li>
                <li>心願：我有沒有想做但一直未做的重要事情？</li>
                <li>來生：我對死後的去處有確據嗎？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">⏰ 在「對的時機」陪伴</h4>
              <p className="text-gray-700 text-sm leading-relaxed">記住：靈性照顧需要等待「對的時機」。不是每次探訪都要進行深刻的靈性對話，有時安靜坐在旁邊，或者只是幫對方倒一杯水，就是最深刻的靈性照顧。</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-green-800 font-medium text-sm">禱告：</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">「主，在我服事的人中，求祢讓我能看見他們全人的需要。教我在對的時機說對的話，在需要安靜的時候安靜，在需要說話的時候勇敢說出祢的愛。讓每一個與我相遇的人，都知道他們是重要的。阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
