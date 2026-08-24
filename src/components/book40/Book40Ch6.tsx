import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Waves, Star, Search, HelpCircle, Check } from 'lucide-react';

const quote = "border-l-4 border-emerald-300 bg-emerald-50 pl-4 py-3 mb-3";
const quoteText = "text-emerald-800 leading-relaxed italic";

export default function Book40Ch6() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    exploration: true,
    questions: true,
    practice: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-800 to-orange-900 bg-clip-text text-transparent">第六章</h1>
        <h2 className="text-xl font-semibold text-gray-700">第三誡：不可妄稱耶和華的名</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          「你們的話，是，就說是；不是，就說不是；若再多說，就是出於那惡者。」（太5:37）
        </p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Waves className="w-5 h-5 text-amber-800 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <p className="text-gray-700 leading-relaxed">
              出埃及記廿章7節：「不可妄稱耶和華你神的名；因為妄稱耶和華名的，耶和華必不以他為無罪」。
            </p>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">一、第三誡的核心——用心靈敬拜神</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「神的名」就是代表神，所以敬畏神的名就是敬畏神。第一誡強調的是「敬拜的對象」，我們唯一的敬拜對象就是耶和華；第二誡強調我們要「按照真理敬拜神」，第三誡強調我們要「用心靈敬拜神」，不要有口無心。我們常常敬拜時不專心，有口無心。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">二、妄稱耶和華名的具體樣態</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                古倫神父認為：「人為了達到政治上的目的而濫用上帝的名，他們用上帝的名義對所謂『邪惡的勢力』發動戰爭；用上帝的名義進行暗殺的行動，使無辜的人受害。為了維護自己的政治立場，上帝的名遭到濫用，而這些事卻跟上帝完全沒有關係」，這就是妄稱耶和華的名！
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當人不聽從指示時，利用上帝來脅迫他：「如果你不聽從上帝的旨意，就遭受懲罰；我知道上帝要給你的旨意，如果你順服上帝的話，就會聽從我的話，因為這些是上帝要告訴你的話」。這也是妄稱耶和華的名！
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                用上帝名義對人有一種威嚇的作用，濫用這種方式所造成的影響很嚴重——人們相信這些牧長跟上帝有一種特別親密的關係。那些牧長濫用上帝之名的方式，會使得人們失去依靠，他們失去了根，內心更在他們對信仰的渴慕及傷人的經歷之間掙扎。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">三、耶穌的解釋——禁止不虔誠、不必要的起誓</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                耶穌解釋「不可妄稱耶和華的名」時，祂教導我們要「禁止一切不虔誠，不必要和不誠懇的誓言」。耶穌說：
              </p>
              <div className={quote}>
                <p className={quoteText}>
                  你們又聽見有吩咐古人的話，說：不可背誓，所起的誓總要向主謹守。只是我告訴你們，什麼誓都不可起。不可指著天起誓，因為天是神的座位；不可指著地起誓，因為地是他的腳凳；也不可指著耶路撒冷起誓，因為耶路撒冷是大君的京城；又不可指著你的頭起誓，因為你不能使一根頭髮變黑變白了。你們的話，是，就說是；不是，就說不是；若再多說，就是出於那惡者。（太5:33-37）
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                第三誡的基本精神在「尊重誠實」，一個真正誠實的人，不只是不會背誓，甚至不需要發誓，我們應當讓人信任我們，「我們的話，是就說是，不是就說不是」。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">四、問題思想：基督徒是否可以立誓約？例如，宣誓就職或在婚禮中立誓約</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                馬太福音廿六章63-64記載：「耶穌卻不言語。大祭司對祂說：我指著永生神叫你起誓告訴我們，你是神的兒子基督不是？耶穌對他說：你說的是」，可見耶穌並不拒絕起誓。保羅在哥林多後書一章23節說：「我呼籲神給我的心作見證，我沒有往哥林多去是為要寬容你們」，這也是一種起誓。因此，我們當明白，耶穌禁止的是沒有必要的、不敬虔的起誓，也反對以起誓來達到獲得利益的目的。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">五、不可心中沒有真正目的、理由地使用主的名</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                第三誡還有一個精神就是勸誡我們「不可以心中沒有真正目的、理由的使用主的名」，例如虛假的敬拜、虛假的禱告、或填補的禱告，及沒有意義的屬靈口頭禪（例：常把「感謝主」和「讚美主」掛在嘴上）。
              </p>
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
            <ul className="space-y-3">
              {[
                '第一誡是「敬拜的對象」，第二誡是「按照真理敬拜神」，第三誡則是「用心靈敬拜神」——不要有口無心，「神的名」代表神本身，敬畏神的名就是敬畏神。',
                '妄稱耶和華名的具體樣態包括：為政治目的濫用上帝之名（發動戰爭、暗殺行動）、用上帝旨意脅迫他人聽從自己的意見、以及牧長濫用「跟上帝特別親密」的形象來威嚇、操控信徒，使人失去信仰的根基。',
                '耶穌解釋第三誡的精神在於「尊重誠實」，祂禁止的是不虔誠、不必要、不誠懇的起誓，而非所有起誓本身——真正誠實的人不需要靠發誓才能取信於人，「是就說是，不是就說不是」才是核心。',
                '基督徒可以立誓約（如宣誓就職、婚禮誓約），因為耶穌本人和保羅都有起誓的例子；耶穌真正禁止的，是沒有必要的、不敬虔的、或為了獲得利益而起的誓。',
                '第三誡也提醒我們不可心中沒有真正目的、理由就使用主的名——包括虛假的敬拜、虛假或填補式的禱告，以及沒有實質意義、只是掛在嘴邊的屬靈口頭禪（如「感謝主」「讚美主」）。',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-gray-700 leading-relaxed">{point}</p>
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
              <h4 className="font-semibold text-gray-800 mb-2">「牧長濫用上帝之名威嚇信徒」的提醒，對教會的權柄運作有何重要警戒？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者特別指出，牧長利用「跟上帝有特別親密關係」的形象來要求信徒順服，本質上就是妄稱耶和華的名。這對教會領導文化是嚴肅的提醒——健康的屬靈權柄應當透過清楚教導聖經真理來說服人，而不是訴諸「這是上帝告訴我的，你必須聽」這種難以查核、容易被濫用的個人權威話語，這種模式一旦形成，容易演變成靈性操控。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">沒有意義的屬靈口頭禪，如何在不知不覺中「妄稱主名」？</h4>
              <p className="text-gray-700 leading-relaxed">
                「感謝主」「讚美主」這類用語本身是美好的敬拜表達，但作者提醒，若只是當作口頭禪，心中並沒有真正的感謝或讚美內容，就落入了「心中沒有真正目的、理由地使用主的名」。這提醒信徒定期檢視自己的禱告與言語習慣，是否仍保有真誠的內容，而非流於形式化的宗教慣用語。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">耶穌區分「敬虔的起誓」與「不必要的起誓」，對今日基督徒的言語誠信有何實務指引？</h4>
              <p className="text-gray-700 leading-relaxed">
                現代人常用「我對天發誓」「我對神起誓」來強調自己說的是真話，這種習慣其實正是耶穌所警戒的——真正誠實的人，話語本身就該具有可信度，不需要靠加碼起誓來說服別人。這對基督徒在日常對話、商業往來、甚至社群媒體發言中的誠信原則，都提供了具體可行的準則：讓「是」就是「是」，不需要靠誇大的誓言來包裝。
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
              '在讀這一章之前，你認為「不可妄稱耶和華的名」只是「不可以口出穢言、拿神的名字咒罵」嗎？讀完後這個理解有什麼調整？',
              '你是否曾聽過、或不自覺說過「這是上帝告訴我的，你必須聽從」這類話語？如何分辨這是真實的屬靈帶領，還是妄稱主名的操控？',
              '你自己的禱告和敬拜中，有沒有變成「有口無心」的部分，包括沒有實質內容的屬靈口頭禪？',
              '耶穌說「是就說是，不是就說不是」，你在日常生活與工作中的誠信度如何？是否常需要靠額外的保證或誓言才能讓人相信你的話？',
              '你如何看待宣誓就職、婚禮誓約這類正式場合的起誓？與耶穌所禁止的「不必要的起誓」有何不同？',
              '面對政治或社會議題時，你是否曾看過有人打著「上帝的名義」去支持某個立場？你會如何分辨這是否合乎聖經真理？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 讀馬太福音五章33-37節</h4>
              <p className="text-gray-700 mb-2">找時間讀耶穌關於起誓的教導，思想「你們的話，是就說是，不是就說不是」這句話，對自己的言語誠信有何實際挑戰。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 檢視自己的禱告與屬靈用語</h4>
              <p className="text-gray-700 mb-2">
                本週留意自己禱告和日常對話中，是否有變成口頭禪、失去真實內容的屬靈用語（如「感謝主」「讚美主」），練習每次說出這些詞時，都真正停下來想一想具體感謝或讚美的內容是什麼。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，求祢幫助我用心靈敬畏祢的名，不要讓祢的名成為我口中隨意使用的工具。求祢光照我，是否曾用祢的名來威嚇、操控他人，或曾說出沒有真心的敬拜與禱告。求祢使我成為一個誠實的人，讓我的話是就是是、不是就是不是，不需要靠發誓來讓人信任。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
