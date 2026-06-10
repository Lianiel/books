import React from 'react';
import { BookOpen, Star, MessageCircle, Lightbulb, Heart, Sprout, Target, Users } from 'lucide-react';

export default function Book27Ch11() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-emerald-700 mb-2">第11課：內心真實的改變——果實篇（上）</h1>
      <p className="text-gray-500 text-sm">學員本 · 《人如何改變》保羅·區普</p>

      {/* 複習/作業討論 */}
      <section className="border-l-4 border-emerald-400 bg-emerald-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-emerald-600" />
          <h2 className="text-xl font-bold text-emerald-700">複習與整體回顧</h2>
        </div>
        <div className="bg-white p-4 rounded border border-emerald-200 space-y-3 text-gray-700">
          <p><strong>整體複習：</strong>我們已經走過了整個改變的大圖畫——炎熱（神的工具）、荊棘（我們的罪性回應）、十字架（改變的樞紐）。現在我們到達最後一站：果實。果實是真實改變的結果，但今天我們要先問：什麼樣的「心」才會結出好果實？</p>
          <p><strong>作業討論：</strong>分享你完整的「自我成長方案」——四個部分都填好了嗎？在填寫「果實」那一欄時，你最渴望在自己身上看到的改變是什麼？</p>
        </div>
      </section>

      {/* CPR */}
      <section className="border-l-4 border-teal-400 bg-teal-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <Target className="w-6 h-6 text-teal-600" />
          <h2 className="text-xl font-bold text-teal-700">重點與應用（CPR）</h2>
        </div>
        <div className="space-y-3 text-gray-700">
          <div className="bg-white p-4 rounded border border-teal-200">
            <p className="font-bold text-teal-700 mb-1">核心要點（Central Point）</p>
            <p>馬可福音12章29-31節（愛神、愛人的大誡命）和耶利米書31章、以西結書36章（新心的應許）告訴我們：真正的果實不是靠意志力外在地做出正確行為，而是來自一顆被神改變的心——一顆愛神、愛人的心。神的應許是把「新心」放在我們裡面，使我們從內而外地改變。</p>
          </div>
          <div className="bg-white p-4 rounded border border-teal-200">
            <p className="font-bold text-teal-700 mb-1">個人應用（Personal）</p>
            <p>你的「好行為」主要是出於什麼動機？是對神的愛和感恩？是對人的真實關心？還是為了維持形象、避免麻煩、或尋求認可？誠實地面對這個問題。</p>
          </div>
          <div className="bg-white p-4 rounded border border-teal-200">
            <p className="font-bold text-teal-700 mb-1">人際應用（Relational）</p>
            <p>在你最重要的關係中，你的服事和付出是出於真實的愛，還是出於責任感、愧疚感、或害怕後果？這個動機上的差別如何影響你的關係品質？</p>
          </div>
        </div>
      </section>

      {/* 主要問題 */}
      <section className="text-center bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 p-8 rounded-xl">
        <Sprout className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
        <h2 className="text-xl font-bold text-emerald-800 mb-3">本課主要問題</h2>
        <p className="text-2xl font-bold text-emerald-700 leading-relaxed">
          「什麼樣的心，<br />會產生好果實？」
        </p>
      </section>

      {/* 課程內容 */}
      <section className="border-l-4 border-cyan-400 bg-cyan-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <Lightbulb className="w-6 h-6 text-cyan-600" />
          <h2 className="text-xl font-bold text-cyan-700">課程內容</h2>
        </div>
        <div className="space-y-5 text-gray-700">
          <div>
            <h3 className="font-bold text-cyan-700 mb-2">一、「婚姻比喻」的延伸——單身女員工和老闆</h3>
            <div className="bg-white p-4 rounded border border-cyan-200">
              <p className="font-bold text-sm text-cyan-700 mb-2">比喻場景</p>
              <p className="text-sm text-gray-700 mb-2">有一位工作盡責的單身女員工，她的老闆對她非常好——不只付她優厚的薪水，還在她生病時探望，在她有難時幫助，把她當作寶貴的夥伴而不只是員工。</p>
              <p className="font-bold text-sm text-cyan-700 mb-2">兩種服事的動機</p>
              <p className="text-sm text-gray-700 mb-2">假設這個女員工有兩個朋友：</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 ml-2 mb-2">
                <li><strong>朋友甲：</strong>「我也想在那裡工作——聽說薪水很高，還有很多福利。我要讓老闆覺得我很有用，這樣我就能得到那些好處了。」</li>
                <li><strong>朋友乙（後來和老闆結婚了）：</strong>「我做這一切是因為我愛他，我知道他愛我。不是因為薪水，也不是因為福利，而是因為他是誰，以及他為我做了什麼。」</li>
              </ul>
              <p className="font-bold text-sm text-cyan-700 mb-2">應用</p>
              <p className="text-sm text-gray-700">朋友甲代表「宗教性」的服事——用努力換取好處；朋友乙代表「福音性」的服事——出於愛和感恩。我們對神的服事，更像哪一種？真正的果實只能從「乙型」的心中生長出來。</p>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-cyan-700 mb-2">二、腓立比書研習——保羅在腓立比監獄的信心</h3>
            <p className="mb-2">保羅寫腓立比書時身在監獄，這是他的「炎熱」。然而這封信充滿了喜樂和感謝。這就是「果實」在最艱難的炎熱中的表現：</p>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border border-cyan-200">
                <p className="font-bold text-sm">問題1：喜樂的根源（腓立比書4章4-7節）</p>
                <p className="text-sm text-gray-700 mt-1">「你們要靠主常常喜樂；我再說，你們要喜樂。」（4節）——保羅不是說「等到情況好了你就會喜樂」，而是說「靠主常常喜樂」。他的喜樂不取決於環境，而取決於他的信靠對象。在你的炎熱中，你的喜樂建立在什麼基礎上？</p>
              </div>
              <div className="bg-white p-3 rounded border border-cyan-200">
                <p className="font-bold text-sm">問題2：滿足的秘訣（腓立比書4章11-13節）</p>
                <p className="text-sm text-gray-700 mt-1">「我學會了，無論在什麼狀態可以知足，這是極大的益處。我知道怎樣處卑賤，也知道怎樣處豐富；或飽足、或飢餓、或有餘、或缺乏，在各事上並在一切事上，我都得了秘訣。」（11-12節）——這個「秘訣」是「學會」的，不是天生的。你在你的炎熱中正在學什麼？</p>
              </div>
              <div className="bg-white p-3 rounded border border-cyan-200">
                <p className="font-bold text-sm">問題3：思想的管理（腓立比書4章8節）</p>
                <p className="text-sm text-gray-700 mt-1">「弟兄們，那些真實的、可敬的、公義的、清潔的、可愛的、有美名的事，若有什麼德行，若有什麼稱讚，這些事你們都要思念。」——保羅的「心理健康」秘訣就是管理思想的焦點。你在炎熱中的思想主要在哪裡？如何應用這節經文？</p>
              </div>
              <div className="bg-white p-3 rounded border border-cyan-200">
                <p className="font-bold text-sm">問題4：感謝的操練（腓立比書4章6節）</p>
                <p className="text-sm text-gray-700 mt-1">「應當一無掛慮，只要凡事藉著禱告、祈求和感謝，將你們所要的告訴神。」——感謝是禱告的一部分，不是情緒好的時候才有的。在你的炎熱中，你現在可以感謝什麼？（即使很小也算）</p>
              </div>
              <div className="bg-white p-3 rounded border border-cyan-200">
                <p className="font-bold text-sm">問題5：群體中的喜樂（腓立比書1章3-11節）</p>
                <p className="text-sm text-gray-700 mt-1">「我每逢想念你們，就感謝我的神……我為你們眾人有這樣的意念，是應當的。」（3-7節）——保羅在炎熱中的喜樂部分來自他對腓立比信徒的愛和連結。你的炎熱中，群體（教會、小組）如何成為你喜樂的來源？</p>
              </div>
              <div className="bg-white p-3 rounded border border-cyan-200">
                <p className="font-bold text-sm">問題6：果實的外顯（腓立比書2章3-4節）</p>
                <p className="text-sm text-gray-700 mt-1">「凡事不可結黨，不可貪圖虛浮的榮耀；只要存心謙卑，各人看別人比自己強。各人不要單顧自己的事，也要顧別人的事。」——這是「心的改變」在具體行動上的表現。在你的關係中，哪個方面你最難做到「看別人比自己強」？</p>
              </div>
              <div className="bg-white p-3 rounded border border-cyan-200">
                <p className="font-bold text-sm">問題7：以基督的心為心（腓立比書2章5-8節）</p>
                <p className="text-sm text-gray-700 mt-1">「你們當以基督耶穌的心為心：他本有神的形像，不以自己與神同等為強奪的……反倒虛己，取了奴僕的形像……自己卑微，存心順服，以至於死，且死在十字架上。」——這是果實最高的標準：基督自己的樣式。在你的炎熱中，你如何可以更接近這個樣式？</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-cyan-700 mb-2">三、申命記6章4-6節與馬可福音12章28-31節：愛的大誡命</h3>
            <div className="bg-white p-4 rounded border border-cyan-200 italic text-sm mb-2">
              <p>「以色列啊，你要聽！耶和華我們神是獨一的主。你要盡心、盡性、盡力愛耶和華你的神。」（申命記6章4-6節）</p>
              <p className="mt-2">「你要盡心、盡性、盡意、盡力愛主你的神。……愛人如己。再沒有比這兩條誡命更大的了。」（馬可福音12章30-31節）</p>
            </div>
            <p className="mb-2">保羅·區普指出，一切「果實」的最終標準就是這兩條誡命：<strong>愛神，愛人</strong>。所有外在的好行為，如果不是從這兩個愛出發，都只是「宗教行為」，不是真正的果實。</p>
            <p>真正的果實的特徵：不是表現的完美，而是動機的純正；不是外在的正確，而是內心的愛。當我們的荊棘反應減少，當我們更快地悔改，當我們在炎熱中更多地信靠，當我們的關係更多地流露出愛和忍耐——這些就是果實的跡象。</p>
          </div>
          <div>
            <h3 className="font-bold text-cyan-700 mb-2">四、耶利米書31章31-34節與以西結書36章24-28節：新心的應許</h3>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded border border-cyan-200 italic text-sm">
                <p>「耶和華說：那些日子以後，我與以色列家所立的約乃是這樣：我要將我的律法放在他們裡面，寫在他們心上……他們各人不再教導自己的鄰舍和自己的弟兄說：你該認識耶和華，因為他們從最小的到至大的都必認識我……」（耶利米書31章33-34節）</p>
              </div>
              <div className="bg-white p-4 rounded border border-cyan-200 italic text-sm">
                <p>「我也要賜給你們一個新心，將新靈放在你們裡面；又從你們的肉體中除掉石心，賜給你們肉心。我必將我的靈放在你們裡面，使你們順從我的律例，謹守遵行我的典章。」（以西結書36章26-27節）</p>
              </div>
            </div>
            <p className="mt-2">這兩段舊約的應許都指向同一件事：真正的改變是從內而外的——不是外在的規則約束，而是內心的更新。神的應許是：「我要把我自己（我的律法、我的靈）放在你裡面。」果實的根源是「神住在我們裡面」，這是聖靈的工作。</p>
            <p className="mt-2">這意味著：我們的責任不是「努力結果實」，而是「讓聖靈充滿和引導我們」（以弗所書5章18節）——農夫不能讓果實生長，但他可以澆水、施肥、除草，提供生長的最佳條件。</p>
          </div>
        </div>
      </section>

      {/* 作業 */}
      <section className="border-l-4 border-green-400 bg-green-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <Heart className="w-6 h-6 text-green-600" />
          <h2 className="text-xl font-bold text-green-700">作業：果實的根源與腓立比書的研習</h2>
        </div>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border border-green-200">
            <h3 className="font-bold text-green-700 mb-2">完整閱讀腓立比書</h3>
            <p className="text-gray-700 mb-2">這週讀完整本腓立比書（4章），並回答：</p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-gray-700">
              <li>在保羅的生命中，你看到了哪些具體的「果實」？（以具體的行為、態度、或話語為證據）</li>
              <li>保羅的「炎熱」（監獄、迫害、死亡的威脅）如何使他的果實顯得更加真實和有力？</li>
              <li>3章12-14節中保羅說：「這不是說我已經得著了，已經完全了……向著標竿直跑，要得神在基督耶穌裡從上面召我來得的獎賞。」這如何平衡「果實已有」和「仍在成長」這兩個真理？</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded border border-green-200">
            <h3 className="font-bold text-green-700 mb-2">辨識自己的果實跡象</h3>
            <p className="text-gray-700 mb-2">誠實地回顧過去幾個月（從開始這個課程到現在），回答：</p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-gray-700">
              <li>你在哪個關係中，看到了自己態度或行為的改變？（給出具體的例子）</li>
              <li>在你最大的炎熱中，你的回應是否有所不同？哪些地方有改進，哪些仍然掙扎？</li>
              <li>你的禱告生活是否有變化？你如何在炎熱中更多地依靠神？</li>
              <li>你對別人的愛（包括難以愛的人）是否有任何增長的跡象？</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded border border-green-200">
            <h3 className="font-bold text-green-700 mb-2">研讀耶利米書31章31-34節</h3>
            <p className="text-gray-700 mb-2">這是「新約」的預言，在基督裡完全應驗了。回答：</p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-gray-700">
              <li>「我要將我的律法放在他們裡面，寫在他們心上」——這和「外在的規條約束」有什麼根本的不同？在你的生活中，你更像哪一種？</li>
              <li>「他們各人不再教導自己的鄰舍……因為他們都必認識我」——直接認識神是什麼樣的？你有沒有這種直接和神同在的經歷？</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 重點總結 */}
      <section className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 p-6 rounded-xl">
        <div className="flex items-center gap-3 mb-4">
          <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
          <h2 className="text-xl font-bold text-sky-800">重點總結</h2>
        </div>
        <div className="space-y-3">
          {[
            '真正的果實不是外在的好行為，而是從一顆被神改變的心中自然流露的生命表現——動機的純正比表現的完美更重要',
            '「婚姻比喻」說明：以「換取好處」為動機的服事（宗教型），和以「愛和感恩」為動機的服事（福音型），在外表上可能相同，但本質完全不同',
            '腓立比書是保羅在炎熱中結出果實的最佳示範：在監獄裡，他擁有喜樂、知足、感謝、和對人的愛——這些都是「炎熱中的果實」',
            '愛神、愛人（大誡命）是一切果實的最終標準——不是完美的表現，而是從愛出發的服事和生活',
            '耶利米書和以西結書的「新心應許」指向聖靈的工作：真正的改變是從內而外的，是神把自己的靈放在我們裡面的結果',
            '我們的責任是「讓聖靈充滿」（提供成長的條件），不是「努力結果實」（靠意志力製造外在的表現）',
          ].map((point, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="bg-sky-600 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 延伸CPR */}
      <section className="border-l-4 border-indigo-400 bg-indigo-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <MessageCircle className="w-6 h-6 text-indigo-600" />
          <h2 className="text-xl font-bold text-indigo-700">延伸反思</h2>
        </div>
        <div className="space-y-3 text-gray-700">
          <div className="bg-white p-4 rounded border border-indigo-200">
            <p className="font-bold text-indigo-700 mb-2">「我學會了」——保羅的成長觀</p>
            <p>腓立比書4章11節說：「我學會了，無論在什麼狀態可以知足。」「學會了」是一個過去式，意思是保羅不是天生就知足的——他是在炎熱的過程中，一步步學習的。你目前在生命的「學校」裡，正在學習的最主要的功課是什麼？</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <p className="font-bold text-indigo-700 mb-2">果實是給別人看的</p>
            <p>果實的意義在於它是給別人吃的，不是給自己欣賞的。馬太福音5章16節說：「你們的光也當這樣照在人前，叫他們看見你們的好行為，便將榮耀歸給你們在天上的父。」你的「果實」讓誰得到了益處？你的改變對你身邊的人有什麼具體的正面影響？</p>
          </div>
        </div>
      </section>

      {/* 生活實踐 */}
      <section className="border-l-4 border-lime-400 bg-lime-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <Users className="w-6 h-6 text-lime-600" />
          <h2 className="text-xl font-bold text-lime-700">生活實踐方針</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: 'a. 每日的感謝禱告', desc: '每天找出三件可以感謝神的事（即使是在炎熱中），讓感謝成為心的訓練，而不只是形式' },
            { label: 'b. 動機的自我審視', desc: '本週每次服事或幫助別人之後，誠實問自己：「我這樣做的主要動機是什麼？」這個練習幫助你辨識是福音型還是宗教型的服事' },
            { label: 'c. 讀腓立比書2章', desc: '每天早上讀腓立比書2章1-11節，讓「以基督的心為心」成為你這一天的目標，並注意你在哪裡最難做到' },
            { label: 'd. 在炎熱中數算祝福', desc: '針對你目前最大的炎熱，列出至少5件神透過這個炎熱已經給你帶來或教導你的事（果實的跡象）' },
            { label: 'e. 向別人說出他們的果實', desc: '本週主動告訴小組的一位成員，你在他/她身上看見的一個屬靈成長的跡象——彼此鼓勵是群體生命的重要功能' },
            { label: 'f. 祈求聖靈充滿', desc: '每天早晨以以弗所書5章18節禱告：「主，求祢今天用聖靈充滿我，使我的生命結出祢的果實。」' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-4 rounded border border-lime-200">
              <p className="font-bold text-lime-700 mb-1">{item.label}</p>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
