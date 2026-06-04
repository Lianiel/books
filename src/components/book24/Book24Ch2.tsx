import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Star, Search, Check } from 'lucide-react';

export default function Book24Ch2() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    exploration: true,
    questions: true,
    practice: true,
  });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const qaItems = [
    {
      num: '3.1',
      q: '關於末世的時間表：我們到底還有多少時間？',
      a: '主在書中指出「剩下的時間只有七年」，這七年將分為兩段：前三年半相對穩定，後三年半（大災難）則會出現空前的黑暗與混亂。然而主也強調，對個人而言，「現在正是你接受和相信的時候」，不要等待，因為沒有多少時間做這個決定了。',
    },
    {
      num: '3.2',
      q: '被提之後，留下來的人能得救嗎？',
      a: '根據書中的教導，在大復興中接受耶穌的靈魂仍然有得救的機會，但代價將非常巨大。主說：「如果你是在被提事件之後，第一批聽說耶穌救恩的人（聽人講耶穌救恩的話），你就有福了。如果你是在這次大復興中，接受了我（耶穌）的靈，你確實有福了！這是我在地上最後一次收割屬我的靈魂。」',
    },
    {
      num: '3.3',
      q: '那些「外星人」到底是什麼？',
      a: '書中明確回答：所有聲稱是「外星人」的存在都是墮落天使，即魔鬼。主說：「我必須告訴你，使你完全相信這個事實。這些外星人，沒有一個是善良的，都是墮落的天使，專門攻擊我和全人類的。」牠們與聖經中所描述的邪靈完全一致，只是以現代人更容易接受的形式出現。',
    },
    {
      num: '3.4',
      q: '為什麼神要允許大災難發生？',
      a: '主在書中解釋：「對我（耶穌）來說，知道自己必須做一件不得不為之的事情是很痛苦的。其實，我不希望啟示錄的預言應驗。但是，所有的內容必須應驗，這樣我好來統治地球。這是天父的旨意。」此外，主也指出，大災難是讓那些驕傲自大、靠自己而活的人看見他們選擇的後果，是最後一次讓人類悔改的機會。',
    },
    {
      num: '3.5',
      q: '「獸印」（默印）真的存在嗎？它是什麼？',
      a: '書中鄭重警告：「我今晚提醒你們：誓絕默印。有人會覺得可笑，政府會在這件事情上欺騙大家。但是我告訴你們事實的真相：一旦接受了印記，你的DNA就變成了撒旦的DNA，就沒有救贖脫離的辦法了。」主將其描述為一種包含生物成分的電子芯片，植入後不可逆轉地改變人的DNA，使人成為撒旦後代。',
    },
    {
      num: '3.6',
      q: '如何在大災難中保持信心而不崩潰？',
      a: '主的回答非常具體：「禱告就是最強大的武器。你們需要高品質的禱告時間。禱告比你們的生命更重要。」主強調禱告要「傾聽，認真地聽」，等待祂的回應，並「做好領受的準備」。此外，主也說好的睡眠是「最重要的生存技巧」，因為「情緒將是最大的敵人」，疲憊會降低屬靈的分辨力。',
    },
    {
      num: '3.7',
      q: '那些從未聽聞福音的人將有什麼結局？',
      a: '書中並未直接回答這個問題，但主強調祂知道每個靈魂的狀況。主說：「在我神聖的計畫中，我對每個人要經歷什麼，不經歷什麼，都有一個明確的界限。」祂也反覆表示對「那些將要失去他們的孩子的人，以及那些尚未認識我的靈魂」感到極大的憐憫，暗示祂在每個可能的機會中都在努力拯救靈魂。',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent">第二章</h1>
        <h2 className="text-xl font-semibold text-gray-700">你可能會問的問題</h2>
        <p className="text-gray-500 mt-1">七個關於末世的重要問題與解答（第三部分 3.1-3.7）</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <p className="text-gray-700 leading-relaxed">
              本章整理了書中第三部分「你可能會問的問題」，共七個主要問題，這些都是讀者在面對末世教導時
              自然會提出的疑問。主耶穌透過作者珂萊爾，對這些問題給出了直接而深刻的回答。
            </p>
            {qaItems.map((item) => (
              <div key={item.num} className="bg-indigo-50 border border-indigo-100 rounded-lg p-4">
                <div className="flex items-start gap-2 mb-2">
                  <span className="text-indigo-700 font-bold text-sm flex-shrink-0 mt-0.5">{item.num}</span>
                  <h4 className="font-bold text-indigo-800">{item.q}</h4>
                </div>
                <p className="text-gray-700 leading-relaxed ml-7">{item.a}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 重點總結 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-sky-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">重點總結</span>
          </div>
          {expanded['summary'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['summary'] && (
          <div className="p-5 bg-white">
            <ul className="space-y-2">
              {[
                '末世時間表按啟示錄展開，前後七年，後三年半是最嚴峻的大災難時期。',
                '被提後仍有得救機會，但代價極大；獸印（默印）一旦接受則永遠無法得救。',
                '所謂「外星人」全是墮落天使，沒有一個是善良的，其本質是攻擊人類的魔鬼。',
                '大災難是神允許發生的，目的是讓人類在最後關頭悔改，並實現啟示錄的完整預言。',
                '禱告是最強武器，保持禱告習慣、充足休息和屬靈分辨力是末世存活的關鍵。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「獸印」的神學辯論</h4>
              <p className="text-gray-700 leading-relaxed">
                啟示錄13:16-18描述的「獸印」是末世神學中最具爭議的主題之一。
                傳統釋義認為這是對撒旦的委身標誌；當代解釋則多與技術進步聯繫，
                如生物芯片植入等。本書採取強烈的立場，認為一旦接受即無法逆轉，
                強調在任何情況下都不應接受。這個觀點促使讀者在壓力到來之前就做好心理和屬靈預備。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">末世的「七年」與大災難的時間框架</h4>
              <p className="text-gray-700 leading-relaxed">
                但以理書9:24-27提到七十個七（490年）的預言，其中最後一個七（七年）
                被許多末世論學者解讀為大災難時期。本書描述的七年框架與此吻合，
                分為前後兩段各三年半。耶穌在馬太福音24:21提到「那時必有大災難，
                從世界的起頭直到如今沒有這樣的災難，後來也必沒有」，這個時期的嚴峻性
                在本書中得到了詳細的描繪。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">禱告作為屬靈軍備</h4>
              <p className="text-gray-700 leading-relaxed">
                本書對禱告的強調與以弗所書6:18「靠著聖靈，隨時多方禱告祈求」高度一致。
                書中將禱告描述為「最強大的武器」，勝過任何物質準備，
                這反映了在屬靈爭戰中信心行動的首要性。禱告不僅是與神溝通的管道，
                更是在末世混亂中獲得指引、保護和供應的關鍵。
              </p>
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
              '面對「只剩七年」的說法，你的第一反應是什麼？是信服、懷疑、還是恐懼？這個反應揭示了你內心什麼樣的靈命狀態？',
              '「獸印一旦接受就無法逆轉」——你認為在什麼樣的壓力下，一個基督徒可能被迫或被誘惑接受它？你現在能做什麼預備？',
              '如果所謂的「外星人」真的是墮落天使，這個真相對你理解現代文化（科幻電影、UFO報告等）有什麼影響？',
              '禱告是最強武器——你現在的禱告生活是否足以應對極端壓力的情況？有什麼需要改變或加強的地方？',
              '「大災難是神許可發生的，目的是讓人悔改」——你如何接受苦難中有神美好目的這個真相？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 研讀啟示錄</h4>
              <p className="text-gray-700 mb-2">以本章問答為引，系統研讀啟示錄相關段落。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>閱讀啟示錄13章（關於獸印）並記下你的疑問</li>
                <li>研讀但以理書9:24-27（七十個七的預言）</li>
                <li>找一位可信賴的屬靈導師討論你對末世的疑惑</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 建立深度禱告習慣</h4>
              <p className="text-gray-700 mb-2">從今天開始提升禱告的質量和深度。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>每天至少有15分鐘的安靜等候禱告（不只是說話，也要聆聽）</li>
                <li>學習用聖靈感動的禱告為自己和家人代禱</li>
                <li>記錄禱告中的感動和主的回應</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">⏰ 末世立場的決定</h4>
              <p className="text-gray-700 mb-2">在壓力來臨之前，現在就做好明確的靈性立場。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>在禱告中清楚宣告：「我拒絕一切形式的獸印/默印」</li>
                <li>告訴你信任的信仰同伴你的立場，讓彼此負責</li>
                <li>思考在什麼情況下你可能面臨壓力，預先想好如何回應</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-2">
              <h4 className="font-semibold text-green-700 mb-2">🙏 本章禱告</h4>
              <p className="text-gray-700 italic leading-relaxed">
                「主耶穌，我有很多問題和疑惑，但我選擇信靠你的話語。求你賜我辨別是非的智慧，
                幫助我在末世的迷霧中認清真相。堅固我的信心，使我在任何壓力下都不偏離你。
                讓我的禱告成為最強大的武器，保護我和我所愛的人。阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
