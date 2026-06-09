import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp, Search, HelpCircle, Check } from 'lucide-react';

export default function Book26Ch3() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true, summary: true, exploration: true, questions: true, practice: true
  });
  const toggle = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-rose-600 to-red-700 bg-clip-text text-transparent">第 3 章</h1>
        <h2 className="text-xl font-semibold text-gray-700">是否存在基督徒的雄辯？</h2>
        <p className="text-base text-gray-500">清晰的言語與十字架的奇妙</p>
        <p className="text-sm text-gray-400 mt-1">約翰・派博（John Piper）著</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-rose-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('content')} className="w-full px-5 py-3 bg-gradient-to-r from-rose-50 to-red-50 hover:from-rose-100 hover:to-red-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-rose-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-rose-700 mb-2">一、問題的迫切性：保羅的否定</h3>
              <p className="text-gray-700 leading-relaxed">派博以哥林多前書 1:17 開篇：「基督差遣我……乃是傳福音，並非用智慧的言語，免得基督的十字架落了空。」這句話讓派博感到迫切：基督差我傳福音，不是靠「智慧的言語」（eloquence of speech）——否則十字架就「落了空」（emptied of its power）。那麼，基督徒是否可以追求雄辯？是否應該刻意雕琢言語的技巧和風格？</p>
              <p className="text-gray-700 leading-relaxed mt-2">這個問題的歷史背景很重要。哥林多教會受到「詭辯家」（Sophists）的影響。詭辯家是古希臘一派以「言語風格本身為目的」的修辭學家，他們認為精妙的表達本身就是智慧的標誌。保羅面對的哥林多教會，有一群人崇尚這種詭辯式的雄辯，他們喜愛亞波羅（一位來自亞歷山大港、以雄辯著稱的宣教士），並以此衡量傳道人的價值。</p>
            </div>
            <div>
              <h3 className="font-bold text-rose-700 mb-2">二、詭辯家的哲學：風格即目的</h3>
              <p className="text-gray-700 leading-relaxed">歷史學家布魯斯・溫特（Bruce Winter）的研究指出，哥林多的詭辯家把風格視為「本身的目的」（a goal in itself）——他們重視形式超過內容，重視表達的技藝超過所要表達的真理。保羅在哥林多採取了「反詭辯」的立場，刻意不採用他本可以使用的修辭技巧，原因只有一個：十字架的信息必須以十字架的方式傳遞——以軟弱、謙卑、不依賴人的技巧，而只依賴聖靈的能力。</p>
              <p className="text-gray-700 leading-relaxed mt-2">哥林多前書 2:1–2 說：「我從前與你們同在的時候，心裡戰兢，甚覺軟弱，我說的話講的道，不是用智慧委婉的言語，乃是用聖靈和大能的明證，叫你們的信不在乎人的智慧，只在乎神的大能。」保羅的「軟弱」不是表演，而是真實——他明白自己的傳道能力不能依賴人的技巧。</p>
            </div>
            <div>
              <h3 className="font-bold text-rose-700 mb-2">三、白腓德與愛德華茲——兩種截然不同的雄辯</h3>
              <p className="text-gray-700 leading-relaxed">派博以兩位第一次大覺醒的巨人——喬治・白腓德（George Whitefield）和喬納森・愛德華茲（Jonathan Edwards）——做了精彩的對比。白腓德以戲劇性的雄辯著稱，本傑明・富蘭克林形容他的每一個語調、每一個停頓都達到了近乎完美的效果；愛德華茲則通常把講章稿紙放在眼前，幾乎不抬頭，以極其平靜的語調宣讀。然而，兩者都在第一次大覺醒中成為神大能使用的器皿。</p>
              <p className="text-gray-700 leading-relaxed mt-2">這說明「好的雄辯」和「壞的雄辯」的分別，不在於風格本身，而在於目的和動機。白腓德的雄辯服務於基督的榮耀；詭辯家的雄辯服務於演說者自身的榮耀。前者是好的雄辯，後者是壞的雄辯。</p>
            </div>
            <div>
              <h3 className="font-bold text-rose-700 mb-2">四、好雄辯的兩個判準</h3>
              <p className="text-gray-700 leading-relaxed">派博從哥林多前書 1:17 和 1:29 提煉出兩個判斷雄辯好壞的標準：第一，這種雄辯是否使說話者自我誇耀？「使一切有血氣的，在神面前一個也不能自誇」（林前 1:29）。任何使演說者本身的才華成為焦點的雄辯，就是「壞的雄辯」，因為它竊取了本應屬於基督的榮耀。</p>
              <p className="text-gray-700 leading-relaxed mt-2">第二，這種雄辯是否高舉基督——特別是被釘十字架的基督？「誇口的，當指著主夸口」（林前 1:31）。真正的基督徒雄辯，其最終目的是讓聽者的心轉向那位被釘死、復活的基督，而不是被演說者的才華折服。符合這兩個判準的，就是好的雄辯；違反任一者的，就是壞的雄辯。</p>
            </div>
            <div>
              <h3 className="font-bold text-rose-700 mb-2">五、文學美感與神的榮耀</h3>
              <p className="text-gray-700 leading-relaxed">派博以這本書的書名做例子說明他的觀點。「言語的力量與神的奇妙」（The Power of Words and the Wonder of God）這個標題，比起「語言的力量與神的威嚴」（The Power of Language and the Majesty of God），在節奏上更好、在頭韻（W）上更美、「Wonder」這個詞也更出乎意料、更吸引人。派博說，這種刻意追求文字之美，不是多餘的裝飾，而是為了讓信息傳遞得更好——這本身就是服事真理、服事讀者的行為，而非炫耀。</p>
              <p className="text-gray-700 leading-relaxed mt-2">他引用箴言 25:11：「一句話說得合宜，就如金蘋果在銀網子裡。」「合宜」（fitly spoken）意味著話語的形式和內容都到位——這是神自己對「好言語」的評價。神的話語本身也有文學美感：詩篇 119 是 22 段藏頭詩，每段 8 節，每節開頭都以同一個希伯來字母開始。神自己也重視言語的形式，因為好的形式幫助好的內容被記住和傳遞。</p>
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
            <ul className="space-y-2">
              {[
                '保羅拒絕「智慧的言語」不是反對清晰或有力的表達，而是反對以風格為目的、讓演說者而非基督成為焦點的詭辯式雄辯。',
                '詭辯家的問題在於「風格即目的」——他們追求表達的藝術本身，而非用藝術服務真理。',
                '白腓德與愛德華茲的對比說明：好的雄辯可以有不同的風格，關鍵是服事者的動機和目的。',
                '好雄辯的兩個判準：（1）不自我誇耀；（2）高舉被釘十字架的基督——兩者缺一不可。',
                '追求文字之美本身不是罪，只要其目的是更清晰、更有力地傳遞真理，就是服事神和服事人的行為。',
                '神的話語本身也有文學美感（如詩篇的藏頭詩結構），說明神認可形式服務內容的努力。',
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
              <h4 className="font-semibold text-gray-800 mb-2">詭辯家與亞波羅：哥林多教會的文化背景</h4>
              <p className="text-gray-700 leading-relaxed">亞波羅來自亞歷山大港——古代著名的學術中心，以詭辯學傳統聞名。使徒行傳 18:24 稱他「口才很好（eloquent）」。哥林多教會中有一批人特別欣賞他，甚至將他與保羅、磯法對立（林前 1:12）。這種崇拜雄辯者的文化，使保羅不得不明確地劃清界線：十字架的能力不依賴人的口才，而依賴聖靈的同在。這不是輕視學問或清晰表達，而是拒絕讓「風格成為目的」。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">路德的「聖靈的雄辯」</h4>
              <p className="text-gray-700 leading-relaxed">馬丁・路德說，聖靈有時也引導我們達到一種雄辯——甚至在禱告中。他的意思不是說我們追求雄辯就能獲得聖靈的祝福，而是說當我們真正被真理感動、被聖靈充滿時，語言自然會有一種超越技巧的力量和清晰。這種「聖靈的雄辯」，不是訓練的結果，而是與神同行的溢出。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">十字架如何顛覆驕傲</h4>
              <p className="text-gray-700 leading-relaxed">派博指出，十字架在哥林多教會是「愚拙」（foolishness）的，原因有二：第一，十字架揭示罪的可怕，使人無法自誇；第二，十字架呈現的是神白白的恩典，使人在神面前無地自容。詭辯式雄辯與十字架信息之間存在根本性的張力：雄辯傾向於高舉說話者的智慧和技藝，而十字架卻要求說話者消失於信息之中。因此，保羅的「軟弱傳道」，是刻意以言語的形式本身來傳遞十字架的神學。</p>
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
              '你欣賞哪些人的說話或寫作風格？你欣賞的是他們的「清晰服事真理」，還是他們的「技巧令人欽佩」？這兩者有何不同？',
              '在你的教會或信仰群體中，是否存在過度崇拜某位「雄辯」傳道人的傾向？這對教會的信仰有什麼影響？',
              '保羅說他在哥林多「心裡戰兢，甚覺軟弱」。你認為這種「軟弱的傳道」在今天的教會文化中會受到怎樣的評價？',
              '你在說話或寫作時，是否有時追求「好聽」或「令人印象深刻」的表達，多於追求「真實」和「清晰」？',
              '派博的兩個判準（不自我誇耀、高舉十字架）——如果用這兩個標準衡量你平常的說話習慣，你認為結果如何？',
              '「形式服事內容」與「形式成為目的」——在你的日常生活中，這兩者的界線在哪裡？',
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 動機自我檢視</h4>
              <p className="text-gray-700 mb-2">下次你準備在教會、小組或公開場合說話前，問自己以下問題：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>我希望聽眾在聽完後，記住的是我的話，還是基督的話？</li>
                <li>我在準備時，花更多時間在「如何說」還是「說什麼」？</li>
                <li>如果沒有人稱讚我說得好，我還會認為這次說話是成功的嗎？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 重寫一段話的練習</h4>
              <p className="text-gray-700 mb-2">找一段你最近說過或寫過、你認為「說得不錯」的話，重新以「清晰服事聽者」為目標改寫它。比較兩個版本：哪個更清晰？哪個更真實？哪個更高舉基督？</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 每日背誦哥林多前書 1:17</h4>
              <p className="text-gray-700">「基督差遣我……乃是傳福音，並非用智慧的言語，免得基督的十字架落了空。」讓這節經文成為你言語生活的過濾器。</p>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm font-semibold text-green-700 mb-1">🙏 本章禱告</p>
              <p className="text-sm text-gray-700 italic">「主耶穌，求祢讓我的話語始終服事十字架的信息，而不是我自己的形象。當我說話時，讓人記住的是祢，不是我。給我清晰傳達真理的能力，也給我謙卑讓自己消失在信息中的意願。願我的雄辯是聖靈的雄辯，而非技巧的雄辯。阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
