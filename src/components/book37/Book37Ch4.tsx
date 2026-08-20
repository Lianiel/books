import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book37Ch4() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-fuchsia-700 to-purple-700 bg-clip-text text-transparent">第四講</h1>
        <h2 className="text-xl font-semibold text-gray-700">存謙卑的心與神同行</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-fuchsia-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-fuchsia-50 to-purple-50 hover:from-fuchsia-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-fuchsia-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <p className="text-gray-700 leading-relaxed">
              妮塔坦言，這一講要談的「謙卑」是個老生常談的題目，也是江秀琴牧師常常教導的內容——如同馬太福音十三章52節所說「凡文士受教作天國的門徒，就像一個家主從他庫裡拿出新舊的東西來」，是舊歌新唱。她說，在決定要不要講這個題目時，心裡有過掙扎，後來神安慰她，這是重要的，可以印證江牧師一直以來所說的話。她引歌羅西書三章12-14節：「你們既是神的選民，聖潔蒙愛的人，就要存憐憫、恩慈、謙虛、溫柔、忍耐的心……在這一切之外，要存著愛心，愛心就是聯絡全德的」，並補充擴大版聖經的譯文，強調這正是神在末世要在祂百姓身上尋找的特質；她也提醒，神對一個人的要求，會按祂使用這人的程度而有所不同——神越想大大使用一個人，這人就越需要進到這樣的性格與品格裡。
            </p>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">一、彌迦書六章8節——存謙卑的心，與神同行</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔引彌迦書六章8節：「世人哪，耶和華已指示你何為善。他向你所要的是什麼呢？只要你行公義，好憐憫，存謙卑的心，與你的神同行」，說這是她在聖經裡最喜愛的經文之一，每次讀到「存謙卑的心，與你的神同行」這半句，都會情不自禁地流淚。她指出，這不是保羅給人的建議，而是實實在在的要求。她分享一次在西雅圖服事時，牧師讓她看一個基督徒脫口秀節目，來賓正激烈討論耶穌本性中「好的和壞的」層面——她認為，今天許多教會整天都在做這樣的事：抽出經文來分析、爭辯，彷彿教會有權決定是否要接受、順服神的話，而不是單純遵行祂的話。她強調，「存謙卑的心，與祂同行」正是神給教會最美的呼召，如同披上一件謙卑的外袍。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">二、世界都被驕傲所擄掠</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔指出，整個世界都被驕傲所擄掠——為自己的成就、財富、住處、座車、認識的人脈驕傲，甚至為「沒有」某些東西而慶倖驕傲，為自己的牧者領袖驕傲，或在議論領袖時感到一種優越感，每件事的根源都指向驕傲。她提醒，神從未要人去分析、評判自己的領袖，而是要人謙卑自己、為領袖禱告；教會之所以不斷墜落，正是因著這一切驕傲把真理卡住，使人失去遵行神話語的自由。她說，面對這一切，神向教會發出一個邀請：謙卑，在謙卑中與神同行——她坦言，生命中沒有任何一件事，值得用與耶穌同行的時間去交換。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">三、天堂的異象——與耶穌同行的美麗</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔分享一次被主帶到天堂的經歷：前一刻還在地上禱告，下一刻已置身天堂，耶穌帶她在花園裡漫步，經過一條極美的溪流。她形容天堂裡每樣東西都完美、都披戴著神的榮耀，但沒有一樣比耶穌本身更美；空中總回蕩著一首無法用言語形容的歌，比天使的聲音、比天上一切美妙的聲音都更美的，仍是耶穌的聲音——甜美到能觸及全人全心。她說，彌迦書「存謙卑的心，與你的神同行」對她而言，是她能想到最美的呼召，沒有任何試煉、苦難或享樂，值得使她抽離哪怕一刻與耶穌同行的時光。她描述耶穌是那樣榮耀、聖潔、仁慈、有智慧、充滿愛、謙和溫柔，甚至提到耶穌臉上有笑紋——祂會深深注視人心，帶出人裡面一切的喜樂；她坦言，若繼續說下去，自己會忍不住哭出來，耶穌實在配得人在謙卑中與祂同行，也配得人因祂的緣故去愛、去尊敬周圍每一個人。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">四、世界對「自我」的塑造，與神眼中真正的成功</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔批評世界的價值觀教導人抬舉自己、自我歡愉、凡事以自己為中心——媒體透過各種形象告訴人什麼叫美麗、什麼叫成功，向人販賣「你是配得的」這樣的訊息，讓人以為特定的穿著、髮型、行業能決定一個人的價值，但這一切其實都是虛假的謊言。她質問，身為教會，為何要讓世界的靈來定義我們是誰、什麼叫成功或失敗？她提出神眼中對成功的定義只有兩件事：第一，你與基督合而為一；第二，達成神創造你的目的。她說，若神呼召一個人影響十個人，這人達成了，在神眼中就是成功；反過來，若一個人的事工看似極其成功，本性品格卻不像基督，那就是落在極大的失敗中——神看人的方式，與世界看人的方式截然不同。她指出，唯一能明白神價值觀的方法，就是謙卑、學習與神同行；若一個人重生了卻沒有真正與神同行，心裡仍然被世界的價值觀主導，就會一直活在困擾裡。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">五、約瑟的先知性異象——謙卑的僕人衣袍保護財寶</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔分享一個先知性經歷：她在異象中看見舊約的約瑟騎著唯有富人才能擁有的駱駝，身穿父親所賜、彰顯王子般尊貴風采的彩衣進入宮殿；他的哥哥們在山丘上看著他，滿心嫉妒。約瑟在殿裡待了很久，哥哥們閒聊時用殘忍的話語議論他。異象接著轉到殿的後方：約瑟從後門出來時，身上已換成僕人的衣袍，彩衣不見了，看起來蒼老許多，騎著一頭驢子繞到殿的前方；哥哥們看見這個「僕人」經過，完全認不出那就是約瑟，只當他是個普通的游商。神藉這個異象告訴妮塔：當一個人身上披戴著謙卑——僕人的衣袍——仇敵就無法搶奪他的財寶。她指出，教會的財寶正是與神同行、服事主、達成神的呼召這三項特權。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">六、驕傲與謙卑——教會合一或支離破碎的關鍵</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔指出，驕傲會使人嫉妒他人的呼召、嫉妒他人與神的關係、嫉妒他人擁有的事工——這種嫉妒不是出於低自我形象，而是驕傲本身造成的；相反地，真正謙卑的人會單單因著神呼召自己所做的事而喜樂，也會因神呼召別人所做的事而喜樂，裡面完全沒有嫉妒。她說，在謙卑裡，教會就會合一；在驕傲裡，教會就會支離破碎——一個人越謙卑，就越清楚明白自己的呼召與神造他的目的；反過來，當心被驕傲掌管，人甚至不知道自己被造的目的是什麼。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她分享一次極為深刻、多年未曾公開分享過的經歷：她在房間禱告時，感受到謙卑的靈越來越強烈地降臨，她從坐著到跪下，再到整個人俯伏在地，一邊哭泣一邊說：「主啊，你是那麼美麗、那麼奇妙、那麼謙卑……如果我從地板往下挖六米深，還是覺得比祢的謙卑要高，我怎麼敬拜祢？」突然間，謙卑的同在離開，另一個截然不同的同在——驕傲——進入房間；隨著這個同在增強，她形容自己裡面湧出一種對權力的渴望，越來越強烈，甚至萌生想除掉任何阻擋自己的人、想撕毀聖經、想除掉神的念頭。她驚恐地向神呼求：「主，這不是我的心，求祢把它拿走，這太可怕了！」神便把這個同在挪走，謙卑再次充滿房間，她也漸漸平靜下來。神告訴她：「我剛才向你顯現的，就是貪愛權勢和驕傲所做的事——這正是曾經在歷史上一些極端追求權力者身上發生的過程。當你越謙卑在我面前，我就越能使用你，你要一直在謙卑中，絕不要讓喜愛權勢或讚美進入你的心。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                妮塔以此提出反思：若神要藉一個人去觸摸許多人和國家，這人應當渴望成為什麼樣的人——是臉面朝下、謙卑與神同行的人嗎？這一講的結尾，她帶領會眾起立、方言禱告，特別求神用祂自己的謙卑覆庇眾人，坦言人天然的謙卑毫無用處，總是挑肥揀瘦、只做自己願意付的代價，唯有神的謙卑、極大的恩典，才能使人真正持守與主同行的道路。
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
                '彌迦書六章8節「存謙卑的心，與你的神同行」是神向人所要的核心：不是分析或評判神的話，而是單純遵行、謙卑跟隨。',
                '世界的價值觀教人凡事以自我為中心，但神眼中真正的成功只有兩件事：與基督合而為一、達成神創造你的目的。',
                '約瑟「披上僕人衣袍」的異象說明：謙卑是一種屬靈的保護——仇敵無法搶奪一個披戴謙卑之人所擁有的屬靈財寶。',
                '驕傲會使人嫉妒他人的呼召與關係，導致教會支離破碎；真正的謙卑則使人為他人的呼召喜樂，帶來教會的合一。',
                '妮塔親身經歷「謙卑同在」與「驕傲同在」的強烈對比，說明喜愛權勢與讚美對人心的腐蝕力極其真實，唯有持守謙卑，才能被神持續使用。',
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
              <h4 className="font-semibold text-gray-800 mb-2">妮塔將自己「驕傲同在」的異象經歷與歷史上極端的權力慾連結，該如何理解？</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔用這段強烈的個人異象經歷，來說明「貪愛權勢」這種心態在極端狀態下可能導致的黑暗，她借用歷史上一個廣為人知的極端例子，作為一種戲劇化的警示語言，用意是提醒人警惕自己心中對權力的渴望——而不是對那段歷史提出任何學術性或歷史因果的具體主張。讀者可以把這段內容理解成一種屬靈教訓的比喻性表達：驕傲與貪愛權勢若不加約束，可能把人帶向毀滅性的方向，箴言十六章18節「驕傲在敗壞以先，狂心在跌倒之前」正是這個原則的經文根據，重點在提醒人謹守自己的心，而非糾結於異象細節的歷史準確性。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「不分析、只遵行神的話」，是否意味著不應該用理性查考聖經？</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔對「基督徒脫口秀節目激烈辯論經文」提出的批評，重點其實是針對一種把神的話當作辯論素材、卻不落實遵行的態度，而非否定認真查考聖經本身的價值。使徒行傳十七章11節稱讚庇哩亞人「甘心領受這道，天天考查聖經，要曉得這道是與不是」，顯示認真查考經文本身是聖經肯定的美德。健康的平衡是：查考聖經、追求對真理更深的理解，與謙卑順服、願意被神的話塑造生命，兩者並不矛盾，真正需要警惕的是把神的話變成滿足知性辯論慾望、卻沒有生命回應的工具。
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
              '妮塔列舉了各種形式的驕傲——為擁有的、為沒有的、為認識的人、為不需要認識的人。你發現自己最容易落入哪一種？',
              '世界透過媒體與雜誌形塑「成功」與「美麗」的標準——你在哪些具體的生活選擇上，曾不自覺地被這些標準左右？',
              '神眼中的成功是「與基督合一」和「達成祂造你的目的」。你目前是否清楚知道，神造你的目的是什麼？',
              '約瑟披上僕人衣袍反而保護了自己的財寶——你生命中是否也有一段「隱藏起來」反而更蒙保守的經歷？',
              '妮塔坦承自己曾經歷「驕傲同在」的可怕，並學會謹守自己的心。你如何具體地在日常生活中操練「謹守自己的心，勝過保守一切」（箴言四章23節）？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 默想彌迦書六章8節</h4>
              <p className="text-gray-700 mb-2">連續一週，每天用這節經文開始你的靈修：「行公義，好憐憫，存謙卑的心，與你的神同行」，寫下這三件事在你今天具體會如何實踐。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙅 停止一項「分析／評判」的習慣</h4>
              <p className="text-gray-700 mb-2">
                若你發現自己習慣性地評論、分析教會領袖或他人的服事，本週練習改為單純的代禱——把原本要說出口的評論，轉化為一句為對方求智慧、求祝福的禱告。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎉 為他人的呼召喜樂</h4>
              <p className="text-gray-700 mb-2">
                想一位你曾暗自嫉妒或比較的對象，這一週具體為他的呼召與事工獻上一個真誠的祝福禱告，觀察這樣的操練如何鬆動你心裡的比較心態。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，祢是那樣美麗、那樣謙卑，我願意存謙卑的心與祢同行。求祢挪去我心裡一切的驕傲、比較與嫉妒，用祢自己的謙卑覆庇我。求祢幫助我單單因著祢所量給我的而喜樂，也因著祢所量給他人的而喜樂。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
