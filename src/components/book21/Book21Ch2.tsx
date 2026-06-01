import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book21Ch2() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
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
          <div className="p-5 bg-white space-y-6">

            <div>
              <h3 className="font-bold text-purple-700 mb-2">一、洗禮的命令與象徵意義</h3>
              <p className="text-gray-700 leading-relaxed">耶穌在升天前吩咐門徒：「你們要去，使萬民作我的門徒，奉父子聖靈的名給他們施洗」（馬太28:19）。這是主的命令，不是建議，不是可選擇的文化習俗。洗禮因此是基督徒進入教會生活的入口儀式，是基督徒公開承認信仰身分的必要行動。巴刻強調：輕忽洗禮的人，往往也輕忽了信仰公開承認的重要性。</p>
              <p className="text-gray-700 leading-relaxed mt-2">洗禮使用水這個元素，具有豐富的象徵意義。水在聖經中有三重含義：一是潔淨（洗去污穢），象徵基督寶血洗淨罪污；二是生命（乾渴得水），象徵聖靈帶來的新生命；三是死亡與新生（水能淹沒，也能滋養），象徵我們在基督裡的死與復活。洗禮把這三個層面同時呈現，是神給我們的可見、可感受的恩典記號。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">二、歸正的要素——悔改與信心不可分割</h3>
              <p className="text-gray-700 leading-relaxed">歸正（conversion）這個字在希臘文原意是「轉向」——轉離罪，轉向神。巴刻指出，真正的歸正包含兩個密不可分的要素：悔改（repentance）和信心（faith）。悔改不只是感到遺憾或後悔，而是心意的改變——對罪的認識從「這是我喜歡的」轉向「這是我厭惡的」；對神的態度從漠視或逃避，轉向渴望和尋求。信心則是積極地信靠基督，把自己的過去（罪的赦免）、現在（生命的引導）和未來（永生的盼望）都交托給祂。</p>
              <p className="text-gray-700 leading-relaxed mt-2">洗禮是歸正的外在公開確認。「奉耶穌的名受洗」有三重含義：（1）承認耶穌是主——祂有我生命的所有權；（2）接受祂洗淨罪污的恩典；（3）委身跟隨祂作牧羊人和主人。這三重委身在洗禮那一刻公開宣告，使個人的靈性決定成為有人見證的社群事件。正如婚姻需要公開的誓言而不只是私下的感情，加入基督的身體也需要公開的行動。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">三、與基督聯合——洗禮最深刻的意義</h3>
              <p className="text-gray-700 leading-relaxed">保羅在羅馬書6章給洗禮一個最深刻的解釋：「我們藉著洗禮歸入死，和祂一同埋葬，原是叫我們一舉一動有新生的樣式，像基督藉著父的榮耀從死裡復活一樣。」（6:4）這段經文揭示了「與基督聯合」的兩個層面：第一是靈性的聯合——我們的舊我已與基督同釘十字架，罪的本性在屬靈意義上被處死；第二是生命的聯合——我們在復活的基督的力量中行事為人，得到勝過罪的新能力。</p>
              <p className="text-gray-700 leading-relaxed mt-2">「在基督裡」這個片語在保羅書信中出現超過160次，是新約神學的核心概念。它不只是一個法律地位的改變（雖然包括這一點），更是一個存在性的轉化：你的生命現在是「隱藏在基督裡的」（歌羅西書3:3）。這意味著：神看你如同看祂自己的兒子；基督的義成為你的義；基督的死是你的死；基督的復活是你的復活。洗禮是這個奧妙真實的可見記號。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">四、洗禮、聖靈與教會肢體生活</h3>
              <p className="text-gray-700 leading-relaxed">洗禮在新約中與聖靈的工作密不可分。使徒行傳2:38記載彼得說：「你們各人要悔改，奉耶穌基督的名受洗，叫你們的罪得赦，就必領受所賜的聖靈。」聖靈的內住是新生命的標誌，也是「與基督聯合」在個人生命中的實現。沒有聖靈，「與基督聯合」只是外在的標籤；有了聖靈，這個聯合才成為活的關係。</p>
              <p className="text-gray-700 leading-relaxed mt-2">洗禮也是進入教會群體的儀式。加拉太書3:27-28說：「你們受洗歸入基督的，都是披戴基督了。並不分猶太人、希利尼人，自主的、為奴的，或男或女，因為你們在基督耶穌裡都成為一了。」這個宣告在當時的社會背景中是革命性的：種族、階級、性別的分隔，在基督的身體裡被超越。教會不是因興趣相投而聚集的社交團體，而是被同一位主召聚、被同一位聖靈內住的屬靈家庭，彼此服事是洗禮的呼召。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">五、洗禮的七重意義——「利用洗禮的好處」</h3>
              <p className="text-gray-700 leading-relaxed">巴刻有一個獨特的建議：我們應當「利用洗禮的好處」——把洗禮的記憶當作信仰困難時的支柱。他列出七個可以「利用」的角度：（1）福音的禮儀——確認神的大能會拯救信靠的人；（2）結婚儀式——象徵我委身給主耶穌作我的夫君；（3）葬禮——宣告舊我已死，那個與神為敵的本性已被埋葬；（4）復活節——宣告新我在基督的復活中甦醒，每天都活在復活的力量中；（5）生日紀念——每次想起都應有全新的喜樂，因為那是我「第二個生日」；（6）確認儀式——被神和教會正式接納為家庭的一員；（7）奉獻儀式——獻身服事基督和祂的教會。</p>
              <p className="text-gray-700 leading-relaxed mt-2">巴刻建議：每當信仰動搖、罪惡感壓垮你、或感覺神離你很遠時，回想你的洗禮：「那一天，神公開宣告我是祂的，基督是我的救主，聖靈住在我裡面。這些事實不因我的感覺而改變。」洗禮的記憶是信仰的錨，讓我們在風浪中不至於漂流。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">六、第三個生日——洗禮延伸到死亡與永生</h3>
              <p className="text-gray-700 leading-relaxed">巴刻用一個令人難忘的比喻：每個人都有兩個生日——肉身出生，和靈裡重生（歸正）。但他說，基督徒還有「第三個生日」——肉體的死亡。死亡對基督徒不是終結，而是進入更豐盛生命的大門，是「離世與基督同在」（腓立比書1:23）。洗禮的承諾——我們與基督聯合，分享祂的死與復活——一直延伸到我們死亡的那一刻，甚至過了死亡。</p>
              <p className="text-gray-700 leading-relaxed mt-2">這個觀點徹底改變基督徒對死亡的態度。布道家慕迪（D. L. Moody）說：「如果有一天你聽到消息說慕迪死了，不要相信！因為那一天我將比現在更加活躍。」這種坦然面對死亡的能力，不是因為基督徒沒有情感或不怕，而是因為洗禮給了我們一個超過死亡的盼望。死亡是第三個生日的開始，而非全部故事的終結。</p>
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
                '洗禮是主的命令，不是可選的習俗；水的象徵含有潔淨、新生命、死亡與復活三重意義，是神給我們可見可感的恩典記號。',
                '真正的歸正包含悔改（從罪轉向神，心意的改變）和信心（積極信靠基督）兩個不可分割的要素；洗禮是歸正的公開確認和社群見證。',
                '洗禮最深的意義是「與基督聯合」——靈性上我們與基督同死同葬，生命上我們在復活的力量中行走；「在基督裡」是新約神學的核心。',
                '洗禮具七重意義（福音禮儀、結婚、葬禮、復活節、生日、確認、奉獻），可以在信仰動搖時作為「錨」——那些事實不因感覺而改變。',
                '死亡是基督徒的「第三個生日」，洗禮的承諾延伸過死亡，進入與基督同在的豐盛永生。',
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
              <p className="text-gray-700 leading-relaxed">世界對死亡的反應往往是否認（不談論）、恐懼（逃避）或絕望（失去意義）。基督教的死亡觀根植於復活：死亡不是滅亡，而是「離世與基督同在」（腓立比書1:23）；不是終止，而是更豐盛生命的開始。布道家慕迪說：「如果有一天你告訴我慕迪死了，不要相信！因為那天我將比現在更加活躍。」這種盼望是每個基督徒靈性成熟的標誌。</p>
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
