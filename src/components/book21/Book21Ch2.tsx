import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Search, HelpCircle, Check } from 'lucide-react';

export default function Book21Ch2() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    exploration: true,
    questions: true,
    practice: true,
  });
  const toggle = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">第二章</h1>
        <h2 className="text-xl font-semibold text-gray-700">加入教會——洗禮和歸正</h2>
        <p className="text-gray-500 text-sm mt-1">洗禮的意義、歸正的要素、與基督聯合，14個主題</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">

            <div>
              <h3 className="font-bold text-purple-700 mb-2">1. 洗禮的命令與象徵意義</h3>
              <p className="text-gray-700 leading-relaxed">耶穌吩咐門徒去使萬民作祂的門徒，「奉父、子、聖靈的名給他們施洗」（馬太28:19）。洗禮不只是一個傳統或可選擇的習俗，而是主的命令。作為象徵，洗禮的水代表：罪的洗淨（藉基督的血）、新生命的開始（從舊我死亡到新生）、歸入基督身體（教會）。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">2. 洗禮與歸正的關係</h3>
              <p className="text-gray-700 leading-relaxed">歸正（conversion）包含兩個不可分割的面向：悔改（從罪轉向神）和信心（相信基督的救恩）。洗禮是歸正的外在公開確認——它是神的標記，也是個人信仰的公開宣告。「奉耶穌的名受洗」意味著承認耶穌為主、接受祂的洗罪、委身跟隨祂作牧羊人和主人。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">3. 與基督聯合——洗禮最深的意義</h3>
              <p className="text-gray-700 leading-relaxed">保羅說我們「受洗歸入基督」（羅馬書6:3），這有兩個層面：一是個人與基督的親密關係（成為祂的肢體），二是聯入基督的死亡和復活。受洗象徵我們在靈裡「與基督同死、同葬、同復活」——舊我的罪性已被釘死，新我在復活的力量中行事為人（羅馬書6:4-6）。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">4. 洗禮與聖靈、教會肢體生活</h3>
              <p className="text-gray-700 leading-relaxed">洗禮與聖靈密不可分：神在新約中賜聖靈給歸正的人，聖靈的內住是基督徒新生命的標誌。洗禮也象徵我們進入基督的身體——教會。「你們受洗歸入基督的，都是披戴基督了。並不分猶太人、希利尼人……你們都是基督耶穌裡的一了。」（加拉太書3:27-28）在身體裡，沒有等級，只有彼此服事。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">5. 洗禮的七重意義——「利用洗禮的好處」</h3>
              <p className="text-gray-700 leading-relaxed">巴刻列出七個我們可以「利用」洗禮的角度：（1）福音的禮儀——確認神的大能會拯救信靠的人；（2）結婚儀式——委身給主耶穌；（3）葬禮——宣告舊我已死；（4）復活節——宣告新我復活；（5）生日紀念——每次想起都應有全新的喜樂；（6）確認儀式——被神和教會接納；（7）奉獻儀式——獻身服事基督。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">6. 第三個生日——洗禮與死亡的連結</h3>
              <p className="text-gray-700 leading-relaxed">巴刻稱死亡為基督徒的「第三個生日」：第一個是從母腹出生，第二個是靈裡重生（歸正），第三個是肉體死亡——進入與基督同在的更豐盛境界。洗禮是神給我們的應許，這應許一直延伸到我們死亡的那一天，甚至過了死亡。因此，基督徒面對死亡時有不同的盼望——死亡不是終結，而是進入新創造的入口。</p>
            </div>

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
              <h4 className="font-semibold text-gray-800 mb-2">嬰兒洗禮與信徒洗禮的神學爭議</h4>
              <p className="text-gray-700 leading-relaxed">基督教歷史上，嬰兒洗禮（天主教、路德宗、長老教會等）和信徒洗禮（浸信會等）之間的爭論持續至今。嬰兒洗禮的支持者認為：洗禮是新約的「割禮」，代表神對這個家庭和孩子的恩典之約；信徒洗禮的支持者則強調：聖經中洗禮總是跟隨個人的悔改與信心。這兩個立場各有聖經依據，是許多真誠信徒之間的分歧，而非異端。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「與基督聯合」——基督徒身分的根基</h4>
              <p className="text-gray-700 leading-relaxed">「在基督裡」是新約最核心的概念之一，出現超過160次。這不只是一個法律地位的改變，而是一個存在的轉化：你的生命現在是隱藏在基督裡的（歌羅西書3:3）。這意味著：神看你如同看祂自己的兒子；基督的義成為你的義；基督的死是你的死；基督的復活是你的復活。洗禮是這個奧秘真實的可見記號。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">坦誠信仰的重要性</h4>
              <p className="text-gray-700 leading-relaxed">巴刻強調，加入教會不只是一個私人靈性事件，而是公開的口頭承認。羅馬書10:9-10說：「你若口裡認耶穌為主，心裡信神叫他從死裡復活，就必得救。」口頭的承認不是形式，而是讓他人可以認識我們、支持我們，也讓自己負起責任。這是為什麼公開受洗和加入教會對信仰成長如此重要。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">基督徒死亡觀的獨特性</h4>
              <p className="text-gray-700 leading-relaxed">世界對死亡的反應往往是否認（不談論）、恐懼（逃避）或絕望（失去意義）。基督教的死亡觀根植於復活：死亡不是滅亡，而是「離世與基督同在」（腓立比書1:23）；不是終止，而是更豐盛生命的開始。布道家慕迪（D. L. Moody）說：「如果有一天你告訴我慕迪死了，不要相信！因為那天我將比現在更加活躍。」這種盼望是每個基督徒靈性成熟的標誌。</p>
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
          <div className="p-5 bg-white space-y-3">
            {[
              '你受洗了嗎？受洗對你來說是什麼意義？如果你還沒受洗，是什麼阻礙了你？',
              '「歸正」包含悔改和信心。回想你信仰的起點，這兩個要素各自在你生命中是怎樣發生的？',
              '「與基督聯合」這個概念讓你有什麼感受？你的日常生活有多少是「在基督裡」的意識？',
              '洗禮的七重意義中，哪一個對你最有意義？哪一個是你以前沒有想到的？',
              '你如何看待死亡？「第三個生日」的概念如何改變你對死亡的態度？',
              '教會肢體生活對你意味著什麼？你在教會中如何經歷「彼此服事」？',
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
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💧 重新思想你的洗禮</h4>
              <p className="text-gray-700 mb-2">找出你受洗的日期（如果有的話），把它記在日曆上，每年這一天都把它作為「第二個生日」來慶祝。用這一天重新委身，感謝神的救恩，並思想：「我今年在基督裡有什麼成長？」</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🤝 在教會中主動服事一個弟兄姊妹</h4>
              <p className="text-gray-700 mb-2">肢體生活不是被動的，本週選擇主動關心一位你不太熟悉的教會成員。可以是一句鼓勵的話、幫助一個需要的人、或邀請某人一起禱告。「互為肢體」是洗禮給我們的呼召。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 寫一封給自己的信</h4>
              <p className="text-gray-700 mb-2">寫一封信給「舊我」——那個在受洗（或歸正）之前的你，感謝神的改變，也誠實地承認你還在成長的地方。然後再寫一封信給「未來的自己」，說明你對基督徒身分的盼望。這個練習能幫助你更清楚地看到「與基督聯合」在你生命中的現實。</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 mt-2">
              <p className="text-green-800 font-medium mb-1">🕊️ 禱告詞</p>
              <p className="text-green-700 italic leading-relaxed">「主耶穌，謝謝祢召喚我加入祢的家。我承認我有時忘記了洗禮的意義——我是屬祢的，我的舊我已死，我的新生命是在祢裡面。今天我重新委身：祢是我的主，我是祢身體的一部分。幫助我真實地與弟兄姊妹相愛，在教會中服事，直到那第三個生日的到來。阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
