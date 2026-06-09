import React, { useState } from 'react';
import { Target, ChevronDown, ChevronUp, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book26Ch4() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true, summary: true, exploration: true, questions: true, practice: true
  });
  const toggle = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-rose-600 to-red-700 bg-clip-text text-transparent">第 4 章</h1>
        <h2 className="text-xl font-semibold text-gray-700">刀刃有多鋒利？</h2>
        <p className="text-base text-gray-500">基督、爭議與尖銳的言語</p>
        <p className="text-sm text-gray-400 mt-1">馬克・德里斯科爾（Mark Driscoll）著</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-rose-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('content')} className="w-full px-5 py-3 bg-gradient-to-r from-rose-50 to-red-50 hover:from-rose-100 hover:to-red-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-rose-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-rose-700 mb-2">一、牧者的四種角色</h3>
              <p className="text-gray-700 leading-relaxed">德里斯科爾從以西結書 34 章——聖經中最全面論述牧養職責的段落之一——提煉出牧者的四種角色。首先，牧者要「餵養羊群」（領導並照料耶穌好牧人的羊群）。其次，要「射殺狼」（異端、假教師及一切掠奪、傷害羊群的人）。第三，要「管住狗」（那些向神的百姓狂吠、恐嚇、操控、虐待的人）。第四，神的百姓在回應上，應該跟從好牧者，並幫助牧者辨別狼和狗。</p>
              <p className="text-gray-700 leading-relaxed mt-2">這四種角色中，「餵養羊群」是最廣為人接受的；但「射殺狼」和「管住狗」，在今天的教會文化中卻往往受到抵制，被認為是「不基督徒」的行為。德里斯科爾在本章的核心論點是：尖銳的言語，在聖經的框架中是合法的、必要的，只要目的是護衛真理和保護羊群。</p>
            </div>
            <div>
              <h3 className="font-bold text-rose-700 mb-2">二、耶穌是最鋒利的舌頭</h3>
              <p className="text-gray-700 leading-relaxed">馬太福音 23 章是耶穌言語中最尖銳的記錄。他面對法利賽人和文士，連續說了八個「禍哉！」（Woe to you!），稱他們為「假冒為善的人」、「瞎眼的嚮導」、「粉飾的墳墓」、「蛇類、毒蛇之種」。這不是憤怒的失控，而是有計劃的、神學性的言語行動。耶穌是在護衛神的百姓，免受宗教表演和虛偽的毒害。</p>
              <p className="text-gray-700 leading-relaxed mt-2">德里斯科爾也引用 D.A. 卡森的研究，指出耶穌在馬太福音 23 章所抨擊的，是那些「從保衛聖經而戰，最後卻變為只為捍衛非聖經的宗教傳統而戰」的人。今天的教會同樣需要這種辨別力：知道何時要溫柔牧養，何時要挺身護衛。</p>
            </div>
            <div>
              <h3 className="font-bold text-rose-700 mb-2">三、舊約先知的諷刺傳統</h3>
              <p className="text-gray-700 leading-relaxed">聖經對「諷刺」（satire）有明確的使用。以利亞在迦密山嘲弄巴力的先知：「你們大聲求告吧！因為他是神，他或默想，或走到一邊，或行路，或睡覺，你們當叫醒他！」（列王紀上 18:27）這是典型的諷刺——用荒謬的誇大暴露偶像崇拜的荒謬。以賽亞在 44 章描述一個人砍木頭，用一半燒火煮飯，用另一半雕刻神像來敬拜：「他把剩下的做成神，就是雕刻的偶像……他說：我的神啊，救我吧！他不想一想，也沒有知識和聰明可以說：我手所做的，其中一半我曾用以燒火……其餘的豈能造可憎之物呢？」</p>
              <p className="text-gray-700 leading-relaxed mt-2">德里斯科爾區分兩種諷刺傳統：霍拉斯式（Horatian）諷刺——輕柔、城市化、以笑聲驅逐愚行；朱文納式（Juvenalian）諷刺——尖銳、憤怒、試圖將惡行「趕出存在」。聖經兩者都使用，視對象和目的而定。</p>
            </div>
            <div>
              <h3 className="font-bold text-rose-700 mb-2">四、路德的犀利言語傳統</h3>
              <p className="text-gray-700 leading-relaxed">馬丁・路德是基督教歷史上言語最犀利的神學家之一。他為自己的嘲諷語氣辯護，引用先知以利亞嘲弄巴力先知的例子：「我相信我有理由嘲弄那些嘲弄我的神和祂話語的人。」路德對伊拉斯謨的評論是著名的：「伊拉斯謨是有史以來玷污地球的最卑劣的惡棍。」他認為對神學對手的警告語氣，是神學責任的一部分，而非個人攻擊。</p>
              <p className="text-gray-700 leading-relaxed mt-2">斯珀金（Spurgeon）也說：「我不明白為什麼嘲諷要讓給撒但作武器攻擊我們，而我們不能用它作武器攻擊撒但。」當然，這種言語需要謹慎使用，因為它也可能淪為純粹的刻薄或個人攻擊。</p>
            </div>
            <div>
              <h3 className="font-bold text-rose-700 mb-2">五、腓立比書 3:8 的「狗糞」爭議</h3>
              <p className="text-gray-700 leading-relaxed">德里斯科爾探討了新約中最具爭議性的一個詞。保羅在腓立比書 3:8 說，他視萬事為「糞土」（skubalon），以便得著基督。各英文譯本用詞不同：「rubbish」、「garbage」、「filth」、「dung」，甚至學者認為最貼切的翻譯是「crap」或「s**t」。這個詞在希臘文中兼有「糞便」和「令人厭惡的廢物」的含義。</p>
              <p className="text-gray-700 leading-relaxed mt-2">這說明了一個重要原則：聖經在需要的時候，會使用令人不舒服的強烈語言，因為有些壞事需要壞詞，而不是溫和的委婉語。當以賽亞 64:6 說我們的義行「如污穢的衣服」（原文直譯是「月經布」），他不是在冒犯，而是在以最強烈的方式讓人感受到人類自義的可憎。</p>
            </div>
            <div>
              <h3 className="font-bold text-rose-700 mb-2">六、如何回應批評者——以比利・葛培理為例</h3>
              <p className="text-gray-700 leading-relaxed">德里斯科爾分享了他從比利・葛培理傳記中學到的功課：葛培理將批評者變成教練。他主動追尋最激烈的批評者，帶著謙卑問：「即使態度是錯的、動機是惡的、事實是曲解的，其中有沒有任何一點真理是我需要聆聽的？」這種謙遜，使葛培理能夠建立橋梁，而不是豎立圍牆。德里斯科爾說，真正的朋友的批評與「狙擊手式的批評」有本質上的不同：前者有盼望和愛，後者只有傷害的慾望。</p>
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
                '牧者有四種角色：餵養羊群、射殺狼、管住狗、讓羊群跟從——後三者都需要在某些場合使用尖銳的言語。',
                '耶穌在馬太福音 23 章使用的強烈言語，是有神學目的的：護衛神的百姓免受宗教虛偽的毒害。',
                '聖經有「諷刺」的傳統——以利亞、以賽亞、耶穌都曾使用諷刺，以最強烈的方式暴露謊言和愚行。',
                '強烈的言語在聖經中是合法的，但標準是：目的是護衛真理和人，而非自我發洩或個人攻擊。',
                '聖經有時使用令人不舒服的強烈詞語（如 skubalon），因為有些壞事需要壞詞才能傳達其可憎的程度。',
                '面對批評，基督徒的回應模式不是防衛，而是像比利・葛培理那樣謙卑地從中尋找真理的成分。',
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
              <h4 className="font-semibold text-gray-800 mb-2">耶穌的幽默與笑聲</h4>
              <p className="text-gray-700 leading-relaxed">本章提到 G.K. 切斯特頓（Chesterton）在其名著《正統》結語中說，耶穌唯一隱藏的是祂的快樂。埃爾頓・崔布拉德（Elton Trueblood）在《基督的幽默》中反駁切斯特頓，認為「一個被誤導的虔誠，使我們害怕承認耶穌明顯的機智和幽默」。耶穌說的許多話其實帶有幽默：把駱駝從針眼穿過、用眼中的樑木去挑別人眼中的刺——這些都是引人發笑的意象。明白耶穌也有幽默，有助我們更完整地理解祂的言語。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">以賽亞的「自我詛咒」時刻</h4>
              <p className="text-gray-700 leading-relaxed">德里斯科爾引用以賽亞書 6 章：先知連續對六種人說「禍哉！」，然後在神的寶座前宣告「禍哉！我滅亡了！我是嘴唇不潔的人」。這是一個深刻的神學時刻——在說出最犀利的審判之言後，先知意識到最後一個「禍哉」必須落在自己身上。這告訴我們：說出尖銳言語的人，自己必須首先站在謙卑和自我審視的地方，否則就成了單純的審判者，而非先知。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">數位時代的批評文化</h4>
              <p className="text-gray-700 leading-relaxed">德里斯科爾說：「我們生活在一個溝通是即時的、持續的、全球性的、永久性的世界。」網路時代讓言語的傷害能夠在瞬間傳播到全球，並且永遠留存。「狙擊手式的批評者」（snipers for Christ）——那些只是尋找對象攻擊的人——在數位時代找到了前所未有的傳播渠道。面對這種文化，基督徒更需要培養辨別批評的能力：有盼望和愛的批評，與只有傷害的批評，其本質是截然不同的。</p>
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
              '你認為教會今天在「餵養羊群」和「射殺狼」之間，哪一方面更為薄弱？為什麼？',
              '耶穌在馬太福音 23 章的強烈言語，讓你感到不舒服嗎？你認為在什麼情況下，今天的基督徒應該使用類似的語氣？',
              '你曾經因為說了或寫了太強烈的言語而後悔嗎？那次的動機是什麼？與護衛真理的動機有何不同？',
              '「以賽亞在說出六個禍哉之後，把最後一個禍哉給了自己」——這個模式對你有什麼挑戰？',
              '當你在網路上看到批評基督信仰或誤導信徒的言論時，你通常的第一反應是什麼？你認為聖經指引的回應應該是什麼？',
              '比利・葛培理「將批評者變成教練」的模式，對你最難的部分是什麼？是謙卑聆聽，還是辨別什麼值得接受？',
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 批評前的三個自問</h4>
              <p className="text-gray-700 mb-2">在你說出或寫下批評性的言語之前，問自己：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>我這樣說，是為了護衛真理和保護人，還是只是為了發洩？</li>
                <li>我對這個人有盼望和愛嗎？還是我只是個「狙擊手」？</li>
                <li>我自己有沒有資格說這話——我先把「禍哉」給了自己嗎？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🤝 主動聆聽一位批評者</h4>
              <p className="text-gray-700 mb-2">這週，找一位曾批評過你（或你的教會）的人，帶著開放的心主動聆聽他的意見，只問一個問題：「你認為我需要改變什麼？」不辯解，只聽。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📱 網路言語的自我審查</h4>
              <p className="text-gray-700 mb-2">設定一個規則：在網路上回應任何令你憤怒的言論之前，先等 24 小時，再重新評估是否值得回應，以及如何回應。</p>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm font-semibold text-green-700 mb-1">🙏 本章禱告</p>
              <p className="text-sm text-gray-700 italic">「主啊，求祢給我智慧，知道何時該如羊羔般溫柔，何時該如先知般剛強。讓我的尖銳來自愛，而非憤怒；來自護衛真理，而非保護自我。先讓我在自己身上說出『禍哉』，才讓我開口說別人的問題。阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
