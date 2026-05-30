import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Search, HelpCircle, Check, Star } from 'lucide-react';

export default function Book19Ch6() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    exploration: true,
    questions: true,
    practice: true
  });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="text-sm font-medium text-teal-500 mb-1">主題六</div>
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">📈 生命的持續長進</h1>
        <p className="text-gray-500 text-sm">第39、50-51章</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <div>
              <h3 className="font-bold text-purple-700 text-lg mb-3">第39章：效法基督</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                慕安德列以「效法基督」作為靈命成長的總目標。效法基督不是模仿他的外在行為，而是讓他的思想、感情、意志、動機逐漸成為我們的思想、感情、意志和動機。保羅在腓立比書2:5說：「你們當以基督耶穌的心為心。」這是一個深刻的呼召——讓基督的心思充滿我們的心思。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                效法基督需要「清楚地覺察」——我們需要真正地認識基督是誰：他如何禱告，他如何對待窮人和罪人，他如何回應試探，他如何面對苦難。讀福音書不只是學習歷史事件，而是認識一個活著的主，讓他的生命成為我們效法的榜樣和渴望的目標。
              </p>
              <p className="text-gray-700 leading-relaxed">
                「堅信能夠得著」——效法基督不是一個遙不可及的理想，而是一個可以持續進展的現實。保羅說：「那在你們心裡動了善工的，必成全這工，直到耶穌基督的日子」（腓1:6）。神自己承諾要在信徒裡面完成這個成聖的工作。我們的責任是相信這個應許，並且配合聖靈的工作前進，每天都比昨天更像基督。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 text-lg mb-3">第50章：生命的成長</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                慕安德列在此章用有機生長的比喻來描述屬靈生命的成長。「長進是自然的」——就如同健康的植物自然生長，健康的屬靈生命也自然成長。問題不是我們需要更努力地推動成長，而是我們需要除去阻礙成長的障礙（罪、不信、驕傲），讓神的生命自然在我們裡面運作。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「我們的責任」——然而，自然成長並不等於被動等待。農夫不是強迫莊稼生長，但他需要耕地、播種、澆水、除草——提供生長的條件。同樣，信徒需要在靈命上盡職：規律的禱告、讀經、敬拜、團契、服事——這些不是成長本身，而是成長的條件和通道。
              </p>
              <p className="text-gray-700 leading-relaxed">
                「長進是漸進的——先發苗後長穗」——馬可福音4:28描述莊稼的成長：「先發苗，後長穗，再後穗上結成飽滿的子粒。」屬靈的成長是循序漸進的，不能躐等。慕安德列說：「不要因為成長緩慢而灰心——橡樹的生長比雜草慢得多，但橡樹能立於千年的風雨。屬靈的深度成長往往比我們感覺的更深、更廣、更持久。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 text-lg mb-3">第51章：如何使用神的話語持續長進</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                這是《新生命》全書最後一章，慕安德列以神的話語作為靈命成長的核心工具，提出六個原則，使聖經閱讀真正滋養屬靈生命：
              </p>

              <div className="space-y-4 mt-2">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-700 mb-2">🔑 原則一：用心讀，非用腦</h4>
                  <p className="text-gray-700 leading-relaxed">
                    讀聖經不只是知識的積累，而是讓神的話語進入心靈最深處。許多人讀聖經如同讀教科書——追求記住內容和掌握知識。慕安德列說：「要讓聖經讀進你的心，而不只是讀進你的腦。帶著柔和受教的心坐在神的話語前，讓它說話，讓它感動，讓它改變。」詩篇119:11說：「我將你的話藏在心裡，免得我得罪你。」
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-700 mb-2">🔑 原則二：與賜生命的神相交</h4>
                  <p className="text-gray-700 leading-relaxed">
                    聖經不是一本普通的書，而是活神的話語（來4:12）。讀聖經應當是一種相交——我們在這位話語的神面前，聆聽他向我們說話。每次打開聖經前，先禱告：「主，請向我說話。」這種態度把讀經從智識活動轉變為靈性相交，使讀者真正遇見神。
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-700 mb-2">🔑 原則三：看作生命的話語</h4>
                  <p className="text-gray-700 leading-relaxed">
                    耶穌說：「人活著不是單靠食物，乃是靠神口裡所出的一切話。」（太4:4）神的話語是靈魂的食物。當我們讀聖經時，要有這種意識：這是維持我屬靈生命的食物，我需要它，就如同我的身體需要食物一樣。這種對聖經的飢渴，是靈命健康的標誌。
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-700 mb-2">🔑 原則四：聽道且行道</h4>
                  <p className="text-gray-700 leading-relaxed">
                    雅各書1:22說：「只是你們要行道，不要單單聽道，自己欺哄自己。」知道神的話但不行出來，不會帶來屬靈的成長——反而可能帶來屬靈的麻木（頭腦充滿了真理但生命沒有改變）。每次讀聖經後問自己：「這段話要我今天做什麼？有什麼具體的改變或行動？」
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-700 mb-2">🔑 原則五：花時間</h4>
                  <p className="text-gray-700 leading-relaxed">
                    草草讀過的聖經不會帶來深刻的改變。慕安德列說：「給神的話語足夠的時間進入你的靈魂。讀一段、慢想、禱告、再讀，讓每個字都有機會打動你。與其每天快速讀完大量章節，不如花時間在少量的段落上，讓它們真正滲透進去。」深度的讀經培養深度的靈命。
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-700 mb-2">🔑 原則六：以經解經</h4>
                  <p className="text-gray-700 leading-relaxed">
                    聖經的最好解釋者是聖經本身。當遇到一段不明白的經文，先尋找其他相關的經文，讓聖經的整體教導來照亮個別段落。同時，要相信聖靈是最好的教師（約14:26），在禱告中求他開啟理解，勝過單純地依賴人的注釋和解釋。
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4">
                慕安德列以激勵的話語結束全書：「神賜給我們這本書，是要讓我們認識他，愛他，信靠他，更像他的兒子耶穌基督。願神的話語在你生命中，不是一本文字的書，而是使你越來越認識那位活著的、愛你的、托住你的神——直到你在永恆中面見他。」
              </p>
            </div>

          </div>
        )}
      </div>

      {/* 重點總結 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <div className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 flex items-center gap-2">
          <Star className="w-5 h-5 text-teal-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">重點總結</span>
        </div>
        <div className="p-5 bg-white space-y-3">
          <div className="flex gap-3">
            <span className="text-teal-600 font-bold flex-shrink-0">1.</span>
            <p className="text-gray-700">效法基督是靈命成長的最終目標；這需要清楚地認識基督，並堅信聖靈有能力在我們裡面完成這個工作。</p>
          </div>
          <div className="flex gap-3">
            <span className="text-teal-600 font-bold flex-shrink-0">2.</span>
            <p className="text-gray-700">屬靈的成長是自然的（靠聖靈的工作），但需要信徒盡責地創造條件——禱告、讀經、敬拜、團契是成長的土壤，而非成長本身。</p>
          </div>
          <div className="flex gap-3">
            <span className="text-teal-600 font-bold flex-shrink-0">3.</span>
            <p className="text-gray-700">靈命的成長是漸進的，不能急於求成；正如橡樹比雜草長得慢卻更為深根，深度的靈命成長比表面的改變更為持久。</p>
          </div>
          <div className="flex gap-3">
            <span className="text-teal-600 font-bold flex-shrink-0">4.</span>
            <p className="text-gray-700">神的話語是靈命成長最核心的工具；用心而非只用腦讀聖經，在相交中讀而非只在學習中讀，才能讓聖經真正改變生命。</p>
          </div>
          <div className="flex gap-3">
            <span className="text-teal-600 font-bold flex-shrink-0">5.</span>
            <p className="text-gray-700">聽道後必須行道；知識若沒有行動就帶來驕傲而非成長——每次讀經都問「我今天需要做什麼？」，使真理轉化為生命。</p>
          </div>
        </div>
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
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">成聖的兩種模式：進步主義與停滯主義</h4>
              <p className="text-gray-700 leading-relaxed">
                在基督教歷史中，對成聖的理解有兩個極端：一些人認為信徒在今生可以達到幾乎完全的聖潔境界（衛理公會的整體聖化論、凱錫克運動）；另一些人則過於強調人的罪性，認為任何實質性的成聖進步都是幻覺（某些極端的喀爾文主義傾向）。慕安德列的立場是溫和的進步主義：成聖是真實且持續的，但在今生永遠不會完成；每一步的進步都是真實的，但前面永遠還有更多的可能。這種立場既防止了驕傲（「我已經很聖潔了」），又防止了絕望（「反正成長不可能」）。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">效法基督：模仿的危險與靈命的深化</h4>
              <p className="text-gray-700 leading-relaxed">
                「效法基督」的書籍最著名的是湯姆斯·肯培（Thomas à Kempis）的《效法基督》（約1418年），強調內在的謙卑和捨棄世俗。這本書影響了許多信徒，包括伊拉斯謨和路德。然而，若把效法理解為純粹的外在模仿，就容易陷入律法主義。慕安德列的進路更深：效法基督需要與基督的生命聯合，是由內而外的改變，而非由外而內的強制。這個區分至關重要：前者帶來自由，後者帶來疲憊。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">聖經閱讀的歷史與當代挑戰</h4>
              <p className="text-gray-700 leading-relaxed">
                宗教改革的一大貢獻是把聖經帶回普通信徒手中，打破了神職人員對聖經解釋的壟斷。然而，在當代，聖經的可及性從未如此高（手機裡就有多個版本），閱讀率卻每況愈下。信徒面臨的不再是「無法得到聖經」的問題，而是「缺乏動力和習慣閱讀」的問題。慕安德列的讀經原則在這個時代尤其重要：不是提供更多讀經計劃，而是重新點燃對神話語的飢渴——因為認識到聖經是神向我們說的話，是靈魂的食物。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">漸進成長與屬靈操練</h4>
              <p className="text-gray-700 leading-relaxed">
                近代屬靈方向學（spiritual direction）和靈命操練（spiritual disciplines）的復興（如達拉斯·威拉德的《靈命操練》），強調靈命成長需要刻意的操練。這與慕安德列「農夫預備土地」的比喻相呼應：成長本身是神的工作，但信徒需要負責預備條件。禱告、禁食、默想、獨處、服事、慷慨——這些操練不能帶來成長，但它們打開了讓神的成長之工發生的空間。慕安德列的教導幫助信徒明白：操練是手段而非目的，目的是與基督更深的相交。
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
          <div className="p-5 bg-white space-y-4">
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">1.</span>
              <p className="text-gray-700">若有人問你「基督的哪個特質你最希望在自己身上看到更多？」你會怎麼回答？這個渴望如何影響你的實際生活？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">回顧你信主至今，你的靈命有哪些方面有實質的成長？這些成長是怎麼發生的——通過哪些人、事、或操練？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">你目前讀聖經的習慣是「用心」的還是「用腦」的？你能描述一次聖經真正進入你心裡、改變了你某個態度或行為的經歷嗎？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">「聽道且行道」——你知道哪些神的命令，但在生活中還沒有真正做到？你認為最大的阻礙是什麼——理解不夠、動機不夠，還是習慣未養成？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">讀完這本書（《新生命》的六個主題），你認為在哪個主題上你最需要成長？你打算具體採取什麼行動來回應？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">慕安德列說「長進是漸進的」——你對自己靈命成長的速度是否感到焦慮或不耐煩？你覺得神對你的成長速度有什麼看法？</p>
            </div>
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
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 改變讀經方式的操練</h4>
              <p className="text-gray-700 mb-2">嘗試「慢讀」聖經一個月：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>每天只讀一段（5-10節），但花20分鐘默想</li>
                <li>讀前禱告：「主，請向我說話。」</li>
                <li>讀後問：「這段話讓我看到神什麼特質？它挑戰了我什麼？我今天要怎麼回應？」</li>
                <li>把回應寫在日記中，一個月後回顧有什麼改變</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📈 靈命成長的回顧與計劃</h4>
              <p className="text-gray-700 mb-2">做一次靈命的年度回顧：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>列出過去一年中靈命最大的三個進步</li>
                <li>列出三個仍然需要成長的領域</li>
                <li>為每個需要成長的領域設定一個具體的操練計劃</li>
                <li>尋找一位屬靈朋友，互相分享並彼此問責</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 效法基督的焦點操練</h4>
              <p className="text-gray-700 mb-2">選擇基督的一個特質，本月專注效法：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>例如：謙卑——每天有意識地讓他人先，不搶話頭</li>
                <li>或：憐憫——每天留意周圍有誰需要關心，主動回應</li>
                <li>或：禱告——效法耶穌退到獨處地方禱告的習慣</li>
                <li>月底反思：這一個月有哪些具體的改變？</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4 mt-2">
              <p className="text-green-800 italic text-sm leading-relaxed">
                「主耶穌，感謝你用《新生命》這本書，再一次讓我看見你所賜新生命的豐盛。求你繼續在我裡面完成那善工，使我一天比一天更像你。讓你的話語成為我靈魂的糧食，讓你的聖靈成為我生命的動力，讓你的愛成為我一切服事的源頭。直到我面見你的那一天。阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
