import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Waves, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book40Ch18() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-800 to-orange-900 bg-clip-text text-transparent">第十八章</h1>
        <h2 className="text-xl font-semibold text-gray-700">第九誡：不可作假見證陷害人</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          「不可作假見證陷害人。」（出20:16）
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

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">一、第九誡的精神</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                出埃及記二十章16節：「不可作假見證陷害人」，狹義的範圍是指在法庭上，不可以用假見證使人受到損失，或使人陷入他沒犯的罪名。作假見證可以毀掉一個人，所謂的「名譽殺人」，是非常不道德的事。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                但廣義的範圍是指任何不實在的話語，因此，「不可作假見證害人」這條誡命裡也包含「不可說謊」。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">二、不可說謊（詭詐）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                是否有任何可以說謊的情況？有人說出埃及記第一章收生婆說了謊；約書亞記第二章中，喇合也說了謊，為何上帝仍然賜福給她們呢？我們必須明白，上帝賜福給她們，並不一定表明上帝認同她們說謊的行為。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                也有人認為收生婆和喇合說謊是對的，因為若她們不說謊就會危及別人的生命。是否我們可以為了別人的好處而說謊呢？這是一個很有爭議的問題。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者主張，我們應盡量先選擇「不說」，而不是「說謊」。從聖經來看，隱瞞並不是說謊。撒母耳記上十六章1-2節記載，耶和華吩咐撒母耳去膏立以色列的新王時，撒母耳說：「我怎能去呢？掃羅若聽見，必要殺我。」耶和華說：「你可以帶一隻牛犢去，就說：我來是要向耶和華獻祭。」上帝教導撒母耳很有智慧的說法，就是對於會危害自己或別人的時刻，我們可以選擇只說出部分的事實而隱瞞部分的事實。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                另一個問題是面對病人時的實話和真誠的問題。如果醫生無情地直接告訴病人，他可能只能再活三個禮拜的時間，這樣做會深深地刺傷他；但如果告訴他一切都很好，也同樣會傷害他，因為這樣做會剝奪他的機會，去深入瞭解他疾病的嚴重性，及做面對死亡的準備，而且對家屬來說也是欺騙。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                要將事情的真相傳達給別人知道，不只需要一種謹慎的態度，還需要技巧，既告訴他實話，又不會讓他失去希望。只有這樣，真相才能使他自由，並振作起來。「希望」並不都意味著他會恢復健康，而是把握上帝給他的時間，積極地生活，在他心裡產生新的力量。只有當我們準備好跟他一同面對真相，支持他、陪伴他的時候，我們才能告訴他真相。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                第九誡提醒我們，要管教我們口出的言語，反省我們在談論自己和別人時，是不是經常會用一些不確實的用語或是用空洞的言語來應付。言語誠實對我們的談話是一種挑戰，而且我們必須一再地重新面對這樣的挑戰，因為在我們的談話中必定會不斷出現不準確、不真實、不清楚的情況。耶穌要我們說清楚明白及可靠的話，這是人與人之間和諧相處的基礎。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">三、不可佈散謠言</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                出埃及記廿三章1節：「不可隨夥佈散謠言；不可與惡人連手妄作見證」。神要求我們，聽話要小心，也不可隨便聽信傳說，更不可隨便傳說！
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                謠言具有一種毀滅的力量。而有些人卻真的很愛到處散播謠言，他們引述從別人那兒聽來的話，因此，大家也無法對他們追究責任。他們從某處聽來一些事，再去說給別人聽。謠言會使人的尊嚴掃地！
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                不實的指控會造成很大的不幸，有些人不開誠布公地與人討論，而到處散佈流言蜚語，隱藏在這些流言背後的詭祕和陰險便會破壞人與人的關係。當有人心懷嫉妒或是意見不同，他只需要傳出一個對對方不利的謠言，對方就會受到傷害。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在這個通訊發達的社會裡，話語能夠在幾秒內就傳到世界另一端的某個人耳中，因此，更需要第九誡來作為督促的力量，幫助大家多多注意自己說出來的話；讓我們所說的都是真話，而不是謊言；讓我們口中所出的話是鼓勵人的話，而不是壓制人的話。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們也應該要思考：我們說出來的話是不是刺傷了別人？話語可以鼓勵人、安慰人，可以成為人與人之間聯繫的橋樑，帶給人溫暖，但也可能會傷害人、侮辱人。傷了我們尊嚴的話語即使過了好幾年，還是會深深刻印在我們心裡，成為無法抹滅的傷痕，而說這些話的人，可能早就忘了他曾說過這些話了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                第九條誡命提醒我們要誠實，一個不說謊的人，我們稱他是誠實的人。誠實的人會尊敬別人，不會散播謠言，人們會信任他，在他的周遭會覺得自己受到尊重，感覺自己是個有價值的人。而且誠實的人清白正直，不會扭曲事實的真相，會坦率說出內心的想法，不會暗地裡論人是非。他會營造出一種坦誠開放的氣氛，並讓人自然而然地產生信任，進而使人也成為一個誠實的人。只有在這種誠實無偽、坦誠開放、充滿信任與自尊的氛圍中，人與人之間才能和諧相處。
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
                '第九誡「不可作假見證陷害人」，狹義是指法庭上不可用假見證使人受損或蒙冤，即所謂「名譽殺人」；廣義則涵蓋一切不實的話語，包括不可說謊、不可誹謗、不可散播謠言。',
                '面對「是否可以為了保護別人而說謊」（如收生婆、喇合的例子）這個有爭議的問題，作者主張應盡量先選擇「不說」而非「說謊」——聖經中撒母耳隱瞞部分事實的例子顯示，隱瞞不等於說謊，這是危害時刻的智慧作法。',
                '面對病人的真相告知也是一種挑戰——既不能無情地直接宣告噩耗刺傷病人，也不能欺瞞剝奪病人準備面對現實的機會，而是需要謹慎的態度與技巧，在陪伴支持中傳達真相，使真相帶來的是振作而非絕望。',
                '謠言具有毀滅性的力量，尤其在通訊發達的時代，話語能瞬間傳遍世界，更需要第九誡的督促——讓我們所說的是真話而非謊言，是鼓勵人的話而非壓制人的話，因為傷人的話語即使多年後仍會留下無法抹滅的傷痕。',
                '誠實的人清白正直、坦率真誠、不論人是非，會營造出信任與自尊的氛圍，使人與人之間得以和諧相處——這正是第九誡最終指向的美好人際關係。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「隱瞞不等於說謊」這個區分，在實際生活中如何拿捏分寸？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者以撒母耳膏立大衛為例，說明在危害生命的處境下，選擇只說出部分事實而隱瞞部分事實，是一種智慧而非欺騙。但這個區分若運用不當，也可能被用來合理化逃避誠實面對的責任。關鍵的判準或許在於動機——隱瞞是為了保護他人免於不必要的傷害，還是為了自己的利益或逃避責任？前者接近撒母耳的智慧，後者則已滑向詭詐。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">社群媒體時代，第九誡對「轉發」與「按讚」這類行為有何新的應用意義？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者提到「在這個通訊發達的社會裡，話語能夠在幾秒內就傳到世界另一端」，這個觀察在社群媒體高度發達的今日更加真實。轉發未經查證的訊息、對聳動但可能失實的內容按讚推廣，本質上都可能構成「隨夥佈散謠言」——第九誡提醒我們，在轉發或評論任何內容之前，都當謹慎查核，不做謠言的助力。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">向病人告知病情真相的兩難，對牧養關懷的事工有何啟發？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者指出，真正的誠實不只是說出事實，更需要謹慎的態度與技巧，並且必須以陪伴和支持作為前提——「只有當我準備好跟他一同面對真相，支持他、陪伴他的時候，我才能告訴他真相。」這對探訪病人、傳達壞消息的牧養事工是重要的提醒：誠實若沒有愛與陪伴同在，可能只是殘忍；愛若沒有誠實同在，則可能淪為欺哄。
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
              '你如何看待「應盡量選擇不說，而不是說謊」這個原則？在你的生活經驗中，是否曾遇過需要拿捏「隱瞞」與「說謊」界線的處境？',
              '你是否曾經因為聽信或轉述未經查證的謠言，而傷害了他人的名譽？讀完這一章後，你會如何調整自己聽話、傳話的態度？',
              '「傷了我們尊嚴的話語即使過了好幾年，還是會深深刻印在我們心裡」，這句話是否讓你想起自己曾被某句話傷害的經驗？你如何面對並釋放這樣的傷痕？',
              '面對社群媒體上大量未經查證的訊息，你平常在轉發或評論前，會做哪些查核的功課？讀完這一章，你會做出什麼改變？',
              '「誠實的人會尊敬別人……人們會信任他」，你身邊是否有這樣誠實可信的人？他們的言語風格對你有何影響？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 讀以弗所書四章25-32節</h4>
              <p className="text-gray-700 mb-2">找時間讀保羅對言語的教導：「所以你們要棄絕謊言，各人與鄰舍說實話……不可出口污穢的言語，只要隨事說造就人的好話」。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 檢視自己說話與轉述的習慣</h4>
              <p className="text-gray-700 mb-2">
                回想過去一週自己在言語上，是否有誇大其詞、未經查證便轉述傳聞、或不經意說了刺傷人的話。若有，主動向對方道歉並澄清。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，求祢看守我的口，塞住我嘴唇的門。求祢使我成為一個誠實的人，不說謊言，不隨夥散佈謠言，不用言語傷害他人。求祢賜給我智慧，在需要傳達真相時，也懂得用愛心與陪伴來承接對方。願我口中所出的話，都能成為造就人、鼓勵人的話。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
