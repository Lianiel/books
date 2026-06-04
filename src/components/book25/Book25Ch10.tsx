import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book25Ch10() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true, summary: true, exploration: true, questions: true, practice: true
  });
  const toggle = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">第十章</h1>
        <h2 className="text-xl font-semibold text-gray-700">關係導向的小組</h2>
        <p className="text-gray-500 mt-1">小組如何成為門徒帶領的核心環境？</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('content')} className="w-full px-5 py-3 bg-gradient-to-r from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-blue-700 mb-2">小組是帶領門徒的核心環境</h3>
              <p className="text-gray-700 leading-relaxed">真生命教會有超過八百個小組，卜冀曼曾說：「如果要作選擇，我會寧願大家參加小組，而不是崇拜。」這聽起來很激進，但背後的原因是清楚的：崇拜聚會能給人資訊和靈感，但真正的門徒成長發生在持續的關係中，而小組正是提供這種關係環境的最有效結構。</p>
              <p className="text-gray-700 leading-relaxed mt-3">但問題是：大多數教會的小組是「聚會型」的小組——大家定期聚在一起，查查聖經、分享禱告，然後各回各家。這種小組不是不好，但若止步於此，就沒有充分發揮小組作為門徒帶領環境的潛力。</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-700 mb-2">一個門徒訓練小組的特質</h3>
              <p className="text-gray-700 leading-relaxed">一個真正以門徒訓練為目的的小組，需要具備以下特質：</p>
              <div className="space-y-3 mt-3">
                {[
                  { title: '以聖經為中心', desc: '每次聚會認真查考聖經，不只是讀一讀，而是深入研究、應用，問「這段話今天對我說了什麼？我要如何回應？」' },
                  { title: '刻意引導人向成熟', desc: '小組長清楚知道每個組員在哪個屬靈成長階段，並刻意地幫助他們移向下一個階段。不是放任大家自己成長，而是有目的地帶領。' },
                  { title: '坦誠的生命分享', desc: '小組是一個可以真實分享掙扎、錯誤和勝利的地方。沒有表演，沒有完美主義，只有真實的生命分享和彼此的接納。' },
                  { title: '超越聚會時間的關係', desc: '小組裡的關係不只限於每週的聚會時間，組員之間在日常生活中也有聯繫、相互幫助、共同生活的時刻。' },
                  { title: '向外開放', desc: '小組有意識地為新人保留空間，組員們積極邀請未信的朋友進入這個溫暖的環境。適時的倍增也是小組健康的標誌。' },
                ].map((c, i) => (
                  <div key={i} className="bg-blue-50 border border-blue-100 rounded-xl p-3">
                    <p className="font-semibold text-blue-800 mb-1">{i+1}. {c.title}</p>
                    <p className="text-gray-700">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-blue-700 mb-2">小組長的角色與責任</h3>
              <p className="text-gray-700 leading-relaxed">小組長不只是主持聚會的司儀，而是一個門徒帶領者。他的職責包括：</p>
              <div className="space-y-2 mt-3">
                {[
                  '知道每位組員的名字和基本狀況，定期主動問候和關心',
                  '了解每個組員的屬靈成長階段，刻意幫助他們移向下一個階段',
                  '在小組中創造透明和真實的文化，自己先做出示範',
                  '幫助比較成熟的組員，多陪伴那些剛信主或在信仰上面臨掙扎的組員',
                  '留意哪些組員有小組長的潛力，開始刻意培育他們',
                  '在合適的時機帶領小組倍增，使更多人能被納入關係性的門徒帶領環境',
                  '不試圖成為所有人所有問題的解答，而是幫助組員建立與神和彼此的關係',
                ].map((r, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-teal-600 flex-shrink-0 mt-1">•</span>
                    <p className="text-gray-700">{r}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-blue-700 mb-2">教會與小組的關係：兩者都重要</h3>
              <p className="text-gray-700 leading-relaxed">真生命教會不輕視主日崇拜，他們非常重視以聖經為基礎的高品質主日信息。但他們不倚賴主日崇拜來完成教會想完成的主要工作。崇拜聚會的功能是確立異象、傳授DNA、帶來靈感和教導；而真正深入的門徒成長，則發生在小組這樣的關係環境中。</p>
              <p className="text-gray-700 leading-relaxed mt-3">兩者是相輔相成的：崇拜讓人看見教會的整體異象和神的工作；小組讓人在親密關係中彼此砥礪成長。缺少任何一個，門徒訓練都是不完整的。</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-700 mb-2">小組長和組員的相互責任</h3>
              <p className="text-gray-700 leading-relaxed">彼得前書五章2節說牧師（也可應用到小組長）要「牧養在你們中間神的群羊」；希伯來書十三章17節說信徒要「依從那些引導你們的，且要順服」。這兩段經文共同構成了一個健康的小組動態——小組長有責任照看組員的屬靈狀況，組員有責任向小組長的帶領開放和順服。</p>
              <p className="text-gray-700 leading-relaxed mt-3">這種相互的責任關係，創造出一個安全、互動的成長環境。組員可以信任小組長會對他們的成長負責；小組長也在組員的支持和反饋中繼續成長。</p>
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
                '小組是帶領門徒最有效的結構，因為它提供了真實的關係環境，而門徒成長必須在關係中發生。',
                '一個有果效的門徒訓練小組需要：以聖經為中心、刻意引導人向成熟、坦誠的生命分享、超越聚會時間的關係、以及向外開放。',
                '小組長是門徒帶領者，不只是主持聚會的司儀；他需要了解每個組員的屬靈狀況，並刻意幫助他們成長。',
                '崇拜和小組是相輔相成的：崇拜確立異象，小組在關係中深化成長；不應以任何一個取代另一個。',
                '小組長和組員有相互的責任：小組長照看屬靈狀況，組員向帶領開放——這創造出健康的成長環境。',
                '健康的小組應該適時倍增，使更多人能被納入關係性的門徒帶領環境，這是教會增長的健康方式。',
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
              <h4 className="font-semibold text-indigo-700 mb-2">小組倍增的神學和實踐</h4>
              <p className="text-gray-700 leading-relaxed">小組倍增不只是一個增長策略，而是門徒訓練的自然結果。當小組裡的成員成熟到能夠帶領自己的小組時，倍增就應該發生。這個過程鏡照了耶穌帶領門徒的方式——祂培育了十二個人，然後差派他們去建立更多的門徒群體。倍增是健康小組的標誌，而不是分裂或失敗。作者指出，真生命教會的八百多個小組，就是這樣一個一個增長出來的。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「牧師應該加入普通人的小組」的意義</h4>
              <p className="text-gray-700 leading-relaxed">作者強調，牧師應該參加由普通信徒組成的小組，而不只是與其他牧師的同伴小組。這是因為：（1）牧師需要在真實的生活場景中實踐他所教導的；（2）牧師在小組中的透明坦誠，是建立教會真實文化最有力的示範；（3）牧師需要被普通信徒所牧養，不能只是付出而不接受。這種謙卑的姿態，正是耶穌「成為所有人的僕人」的精神。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">小組牧養與整個教會牧養的平衡</h4>
              <p className="text-gray-700 leading-relaxed">一個健康的小組系統，可以讓整個教會的牧養變得更有效率和更有深度。當每個人都在小組中被認識和照顧時，牧師不再需要獨自承擔所有人的屬靈需要，而是把這個責任分享給訓練有素的小組長。這正是第六章所說的「裝備者」模式的具體實踐——牧師裝備小組長，小組長牧養組員，形成一個自我複製的門徒訓練系統。</p>
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
              '你目前的小組有本章描述的五個特質嗎（以聖經為中心、引導成熟、坦誠分享、超越聚會的關係、向外開放）？哪個最強？哪個最弱？',
              '你的小組長（或你自己作為小組長）知道每個組員的屬靈狀況嗎？是否有刻意地幫助他們成長？',
              '你的小組有沒有可能倍增的組員？倍增對你和你的小組來說，是讓人興奮的機會，還是讓人不捨的損失？',
              '若你是小組長，你對自己的小組有什麼異象？六個月後，你希望這個小組和每個組員有怎樣的成長？',
              '你願意讓你的小組成為一個你可以真實分享掙扎的地方嗎？你目前在小組中的透明度如何？',
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 本月加強你的小組</h4>
              <p className="text-gray-700 mb-2">選擇以下一個行動，這個月實踐它：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>在下次小組前，為每個組員禱告，求神告訴你他們最大的屬靈需要</li>
                <li>在下次小組聚會中，主動分享你自己的一個掙扎，帶動更坦誠的分享文化</li>
                <li>邀請一個未信的朋友參加你下次的小組聚會（告訴他這是一個輕鬆的聚會）</li>
                <li>與你小組中最成熟的組員討論，他是否已準備好帶領自己的小組</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 小組健康評估</h4>
              <p className="text-gray-700">用1-5分評估你的小組在五個特質上的表現（以聖經為中心、引導成熟、坦誠分享、超越聚會的關係、向外開放），然後和小組長或其他組員分享你的評估，一起討論如何改善最低分的那個特質。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 成為更好的組員</h4>
              <p className="text-gray-700">根據希伯來書十三章17節，決定這個月更積極地配合小組長的帶領，主動分享你的生命狀況，讓小組長真正認識你，並且在他需要的時候給予支持和鼓勵。</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="font-semibold text-green-700 mb-2">🙏 禱告詞</p>
              <p className="text-gray-700 italic">「主耶穌，求你使我的小組成為一個真實的門徒帶領環境——有你話語的光照，有聖靈的能力，有你百姓的真實同行。求你讓我在小組中敢於坦誠，也敢於接受關心。讓我的小組成為你國度增長的地方，最終能夠倍增，使更多人能夠認識你、跟隨你。阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
