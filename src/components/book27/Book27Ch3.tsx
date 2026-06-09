import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book27Ch3() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true, summary: true, exploration: true, questions: true, practice: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">第3課</h1>
        <h2 className="text-xl font-semibold text-gray-700">改變需要群體的生活</h2>
        <p className="text-sm text-gray-500 mt-1">教會是神改變我們的場所</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-emerald-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-emerald-700 mb-2">神自己是群體：三位一體的啟示</h3>
              <p className="text-gray-700 leading-relaxed">本課以一個震撼人心的事實開始：神自己就是群體。三位一體的神——聖父、聖子、聖靈——在永恆中就活在完美的關係和相互給予之中。祂從來不是孤獨的。以弗所書4:4-6描述了這個群體的合一：「只有一個身體，一個聖靈……只有一主，一信，一洗，一神」。</p>
              <p className="text-gray-700 leading-relaxed mt-2">這個神學事實有深刻的實踐含義：當神用祂的形象創造人類時（創1:26-27），祂創造了一個關係性的存在，本就設計在群體中活著。孤獨不是我們真實的本質，而是罪的後果。救恩不只是恢復個人與神的關係，也是恢復人與人之間那個原本設計好的群體關係。</p>
            </div>
            <div>
              <h3 className="font-bold text-emerald-700 mb-2">以弗所書：教會是改變的場所</h3>
              <p className="text-gray-700 leading-relaxed">以弗所書2:14-22描述基督如何拆毀了猶太人和外邦人之間的「隔斷的牆」，使兩者在祂裡面成為一個新人，「建在使徒和先知的根基上，有基督耶穌自己為房角石」（弗2:20）。這個描述告訴我們，教會是一個超越所有人為界限的新群體。</p>
              <p className="text-gray-700 leading-relaxed mt-2">以弗所書3:14-21是保羅為教會的禱告，揭示了群體生活如何成為改變的場所：「你們眾聖徒一同明白基督的愛是何等長闊高深，並知道這愛是過於人所能測度的，便叫神一切所充滿的，充滿了你們」（弗3:18-19）。注意這裡的「你們眾聖徒一同」——我們對基督之愛的認識，是在群體中一起加深的，不是孤獨地發生的。</p>
            </div>
            <div>
              <h3 className="font-bold text-emerald-700 mb-2">哥林多前書12：各有不同，互相需要</h3>
              <p className="text-gray-700 leading-relaxed">哥林多前書12章用身體的比喻描述教會的多樣性：身體有眼睛、耳朵、手、腳，各有功能，彼此不可缺少。這個比喻有一個常被忽視的神學意涵：我的成長需要你的恩賜，你的成長需要我的恩賜。沒有哪個信徒可以自給自足地成長。</p>
              <p className="text-gray-700 leading-relaxed mt-2">更深層的是，保羅說神故意把我們放在彼此的生命中，成為互相服事的管道：「各人所受的恩賜，當彼此服事，作神百般恩賜的好管家」（彼前4:10）。在群體中服事別人，本身就是改變我們的過程——它迫使我們面對自己的自私、驕傲和恐懼。</p>
            </div>
            <div>
              <h3 className="font-bold text-emerald-700 mb-2">群體在改變中的具體功能</h3>
              <p className="text-gray-700 leading-relaxed">本課具體描述了群體在改變過程中的幾個關鍵角色：</p>
              <ul className="mt-2 space-y-2">
                <li className="flex gap-2">
                  <span className="text-emerald-600 flex-shrink-0">•</span>
                  <p className="text-gray-700"><strong>鏡子</strong>：身邊的弟兄姊妹可以看見我們看不見自己的盲點，幫助我們認識真實的自己（「你面上有刺」——太7:3-5）。</p>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600 flex-shrink-0">•</span>
                  <p className="text-gray-700"><strong>支持</strong>：在我們軟弱的時候，群體的禱告和鼓勵成為我們繼續前行的力量（「我實在告訴你們，若是你們中間有兩個人在地上同心合意地求甚麼事，我在天上的父必為他們成全」——太18:19）。</p>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600 flex-shrink-0">•</span>
                  <p className="text-gray-700"><strong>真話</strong>：真正的群體有能力在愛中說難聽但必要的話（「用愛心說誠實話」——弗4:15），幫助我們面對自欺的傾向。</p>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-600 flex-shrink-0">•</span>
                  <p className="text-gray-700"><strong>恩典的彰顯</strong>：當我犯錯、失敗時，群體的接納和寬恕，讓我親身體驗到神的恩典，從而更深地理解福音。</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-emerald-700 mb-2">為何我們抗拒群體？</h3>
              <p className="text-gray-700 leading-relaxed">儘管神設計讓我們在群體中改變，但我們往往抗拒這種連結。原因是多方面的：我們擔心暴露真實的自己；我們不想被人評判；我們習慣了獨立自主；或者我們曾在群體中受過傷。這些抗拒是真實且需要承認的。但我們也需要承認：孤立自己，是讓我們停滯不前的最大策略之一。我們需要勇氣，去選擇在群體中的脆弱。</p>
            </div>
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
                '神自己就是群體（三位一體），祂按照祂的形象創造人類，本就設計我們在關係中活著和成長。',
                '教會是神設計讓改變發生的場所；群體生活使我們能夠「一同明白」基督的愛（以弗所書3:18）。',
                '群體在改變中扮演四個關鍵角色：鏡子（照出盲點）、支持（力量來源）、真話（愛中的誠實）、恩典彰顯（福音的活見證）。',
                '每個信徒的恩賜都是為了群體的益處，沒有人可以孤立地完全成長，我們互相需要。',
                '我們對群體的抗拒（擔心被評判、過去的傷害）是真實的，但孤立自己是阻礙改變的最大策略，需要勇氣選擇脆弱。',
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
              <h4 className="font-semibold text-gray-800 mb-2">個人主義文化與聖經群體觀的衝突</h4>
              <p className="text-gray-700 leading-relaxed">現代文化（尤其是西方和受西方影響的亞洲文化）高度強調個人的自主、隱私和獨立。「我的信仰是我個人的事」這種觀點雖然有一定的正確性（信仰確實是個人的抉擇），卻也可能成為阻礙我們進入真實群體的借口。聖經的觀點是：我們的個人信仰在群體中才能真正深化和成熟；孤立主義的靈命成長在聖經中找不到支持。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">真實的群體 vs. 表面的群體</h4>
              <p className="text-gray-700 leading-relaxed">許多人參加教會，但體驗的只是表面的群體：見面說「你好嗎？」「挺好的，謝謝」，然後各自散去。這種「表面的群體」無法成為改變的場所。真實的群體需要人們願意說真實的話、分享真實的掙扎、進入彼此的生命。這需要個人的冒險、群體的承諾，以及牧師和領袖的刻意建造。問一個診斷性問題：在你的教會群體中，有沒有人知道你真實的掙扎？</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">教會群體中的傷害與修復</h4>
              <p className="text-gray-700 leading-relaxed">許多人在教會群體中受過傷，這種傷害可能讓人對群體產生根深蒂固的不信任。這是真實且需要被認真對待的。重要的是：受過傷不代表群體本身是錯的，只代表我們都是需要繼續改變的罪人。修復之路不是否認傷害，而是在安全的環境中逐步重建信任。尋找一個成熟、以恩典為中心的群體，是這個過程的重要一步。</p>
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
              '在你目前的生活中，有沒有真正了解你的人（包括你的掙扎和失敗）？如果沒有，是什麼阻礙了這種關係的建立？',
              '你曾在教會群體中受過傷嗎？這個傷害如何影響了你對群體的態度？你現在的態度是什麼？',
              '你認為自己在群體中扮演什麼角色？你通常是給予的人、接受的人，還是兩者都有？',
              '「用愛心說誠實話」（弗4:15）對你來說，哪一部分更困難：說誠實話，還是用愛心說？',
              '在你的教會生活中，有沒有哪個關係是你一直在迴避深入的？是什麼讓你迴避？',
              '你認為你目前所在的群體是否是一個真實的群體（人們分享真實的掙扎）？什麼可以使它變得更真實？',
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
              <h4 className="font-semibold text-green-700 mb-2">🤝 建立一段更深的關係</h4>
              <p className="text-gray-700 mb-2">這週主動聯繫一位你想更深認識的弟兄或姊妹，約一個非正式的見面（喝咖啡、散步等）。在見面時，嘗試分享一個你正在掙扎的事情，而不只是聊表面的話題。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📝 評估你的群體生活</h4>
              <p className="text-gray-700 mb-2">誠實地評估：在你目前的群體中，你有多「真實」？在1-10的量表上，1是完全表面，10是完全真實——你打幾分？是什麼讓你給出這個分數？寫下一個你可以做的小步驟，讓你的群體生活更真實。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙌 互相代禱</h4>
              <p className="text-gray-700 mb-2">找一位或兩位弟兄姊妹，建立一個定期互相代禱的習慣（可以是每週一次的簡短訊息或電話）。分享彼此的禱告事項，並承諾為對方禱告。</p>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告詞</h4>
              <p className="text-gray-700 italic leading-relaxed text-sm">「天父，感謝祢不是一個孤獨的神，而是在愛的群體中永遠活著的神。求祢幫助我打破孤立自己的習慣，勇敢地讓身邊的弟兄姊妹進入我的生命。原諒我用「信仰是個人的事」來保護自己不受他人影響。求祢賜我一個真實的群體，也讓我成為別人真實群體的一部分。阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
