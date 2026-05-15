import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Search, HelpCircle, Check } from 'lucide-react';

export default function Book14Ch1() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">第1章</h1>
        <h2 className="text-xl font-semibold text-gray-700">序言及前言</h2>
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
          <div className="p-5 bg-white space-y-4">
            <p className="text-gray-700 leading-relaxed mb-3">對二十世紀的普世教會而言，影響最深，而爭論性又最大的，莫過於世紀初在美國產生的靈恩運動。</p>
            <p className="text-gray-700 leading-relaxed mb-3">從歷史角度看，六十年代開始的稱靈恩運動（Charismatic Movement），六十年代之前的稱為五旬節運動。</p>
            <p className="text-gray-700 leading-relaxed mb-3">由於這兩個運動的神學思想和強調點都大同小異，因此把他們通稱為靈恩運動亦無可厚非。</p>
            <p className="text-gray-700 leading-relaxed mb-3">靈恩運動的出發點在於覺察到現今教會中很多缺乏事奉的熱誠，與使徒行傳的教會比較之下，發現問題的癥結在於初期教會滿有聖靈的能力，而現今的教會所以冷漠和停滯不前，就因為沒有追求聖靈的充滿和運用恩賜去事奉。</p>
            <p className="text-gray-700 leading-relaxed mb-3">就靈恩運動追求聖靈能力在教會中彰顯而言，是一點也沒有錯的，眾教會都應該認同這方面的看法，努力去追求。可惜在追求的過程中，靈恩運動中出現了一些富有爭論性的教義和表現，以致很多教會對這運動望而卻步。雖然如此，靈恩之火卻仍如燎原之火，迅速向全世界蔓延。六十年代之前的靈恩運動，大致上盛行於社會的低下階層，但六十年代開始的新靈恩運動，卻打破了所有社會階層、宗派、神學觀點和國家種族等的界線，甚至在天主教中間亦有不少靈恩派的成員。從教會增長的角度看，靈恩派教會在世界很多地方的增長，都遠遠超越其他教派和信仰的教會；從教會合一的角度看，靈恩運動更成為連結不同背景和信仰的信徒和教會的一種凝聚力。</p>
            <p className="text-gray-700 leading-relaxed mb-3">對近代的靈恩運動，有很多不同形式的回應，有的取敵視的態度，對此運動中一切超自然的現象，如講方言、說預言。被視為人為或心理作用所產生的。</p>
            <p className="text-gray-700 leading-relaxed mb-3">另一種回應是彼此的分離。很多得著靈恩的信徒，有一種使命感，覺得應該留在教會影響其他信徒也得著更新，但也有得著靈恩而離開教會，在別的地方開始聚會或設立教會的。這種對聖靈的真理意見分歧而導致教會分裂的情況很多時候是難以避免的，分裂的責任也難以歸咎於任何一方面。     也有不少的情況是整個教會或整個宗派都受感染而投入了靈恩運動的；這往往是教會的牧師或宗派的領袖先受影響，進而帶領教會積極的追求靈恩。在這過程中，也難免有反對而離開的信徒。</p>
            <p className="text-gray-700 leading-relaxed mb-3">還有一種對靈恩運動採取漠視和避而不談的態度。一般信徒的漠視，主要因為沒有接觸這運動，或不明白靈恩派的獨特信仰，但當教會的傳道人和信徒領袖採取這種態度時，往往因為相信，如果不加理會，這種運動便會遲早自然消失。這實在是極錯誤的態度，因有了這種假設，牧者便不會刻意地去教導信徒有關靈恩的正確看法，一旦靈恩觀念在教會出現，牧者再來教導，往往已經太遲了。在這靈恩信仰迅速蔓延的世代，教會必須清楚教導信徒有關聖靈和靈恩的真理，纔能避免靈恩運動的衝擊。</p>
            <p className="text-gray-700 leading-relaxed mb-3">最後要提出的一種回應，就是觀念的重整，這也是本書作者巴刻所嘗試去回應近代靈恩運動的方式。在「真理」與「經歷」兩者的關係中，巴刻顯然以真理為大前提，先確定了聖經對聖靈工作的教訓，再把這教訓用以評估靈恩派所高舉的一些屬靈經歷。</p>
            <p className="text-gray-700 leading-relaxed mb-3">近代靈恩運動是一個非常複雜的現象，一方面我們不能排除一些非從聖靈而來的超自然表現；另一方面，就如巴刻提出，當信徒積極追求聖靈的大能時，神往往藉聖靈帶給他們生命的更新和復興，事奉的得力和心中的喜樂和平安。雖然有時人循不合聖經的途徑或用不合聖經真理的理論去解釋聖靈在他們身上所彰顯的大能，神仍然是心胸廣闊的神，不會因此而收回他的工作，故此靈恩派必須在真理上多下工夫，重整他們一些基本的觀念。</p>
            <p className="text-gray-700 leading-relaxed mb-3">巴刻在書中強調聖靈的一切工作都以基督為中心，他來世為要見證基督，榮耀基督，引導信徒過一個以基督為中心的生活（約一五 26，一六 14）。也就如宣信指出，聖靈是活水，而我們的生命是田地，基督是落在這田地中的一粒種子；聖靈活水的灌溉，叫基督在我們生命中開花結果，榮耀父神。</p>
            <p className="text-gray-700 leading-relaxed mb-3">巴刻又提醒今天的靈恩派，不要過分強調聖靈大能彰顯在信徒身上所可能帶來的一切「祝福」，如生活的亨通，脫離苦難和病患；以為一信了主便每時刻過一種無憂無慮在地若天的生活；聖靈隨時為我們施展權能，擊退一切仇敵，醫治一切疾病。這種信念引進另一種思想，就是苦難和缺乏並非蒙恩的義人所應該承受的，因為這是不正常的遭遇。</p>
            <p className="text-gray-700 leading-relaxed mb-3">不錯，一個蒙恩的人有時會像亞伯拉罕和所羅門一樣，在物質生活方面得到神的賜福。但一個沒有逆境和苦難的信徒並不一定過著一種高層次的生活。苦難最終為約伯帶來更大的祝福。基督在世時沒有枕首的地方，受盡一切的憂患，最後，死在最殘酷的十字架上。神的兒子，還需要「因所受的苦難學了順從」（來五 8），何況平凡的我們，豈不更需要在苦難中經歷更高層次的屬靈功課嗎？</p>
            <p className="text-gray-700 leading-relaxed mb-3">巴刻是一位有深度的神學家，對聖經、神學和教會歷史，都有真知灼見，在本書中以和平的心情，同情和欣賞的態度，客觀地從真理和教會歷史的角度，去分析今日靈恩運動的一些獨特信仰，同時，作者絕不妥協地指出今日靈恩連動的一些錯誤和偏差。書中作出的一切結論，給我們看見作者在治學上一貫的穩重、謹慎和可靠。這確是一本關心今日靈恩運動的教會人士必讀的書。                                                               張慕皚謹識                                                           一九八九年七月</p>
            <p className="text-gray-700 leading-relaxed mb-3">中學時代，念使徒行傳，發現其中四個經常出現的字就是「聖靈充滿」，殉道的司提反被「聖靈充滿」，初信主的外邦人被「聖靈充滿」，彼得講道大有能力也是被「聖靈充滿」„„     那時候，我很希望深入瞭解何謂「聖靈充滿」，而我也很想得著「聖靈充滿」。</p>
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
              <h4 className="font-semibold text-gray-800 mb-2">靈恩運動的歷史背景</h4>
              <p className="text-gray-700 leading-relaxed">靈恩運動起於二十世紀初，反映了基督教會對聖靈工作實踐化的渴望。它質疑現代教會為何缺乏初代教會那樣的能力和熱誠，提出了一個重要問題：聖靈的能力是否真的應該在當代教會中彰顯？這個運動的興起不是偶然的，而是對於機械化宗教、制度化信仰的一種屬靈反動。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">焦點矯正的必要性</h4>
              <p className="text-gray-700 leading-relaxed">本書的核心貢獻在於提出一個重要的神學矯正：聖靈的焦點不在於超自然現象的彰顯，而在於基督的彰顯。這是一個paradigm shift —— 從『聖靈能做什麼』轉向『聖靈體現誰』。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">以基督為中心的聖靈論</h4>
              <p className="text-gray-700 leading-relaxed">『泛光燈』的比喻深刻地表達了聖靈的本質角色。正如舞台上的泛光燈不會吸引觀眾的注目，而是將焦點投向舞台中央的演員一樣，聖靈的工作就是指向、彰顯、見證基督。</p>
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
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">1.</span>
              <p className="text-gray-700">你對舊約聖靈的工作有什麼認識？聖靈在舊約中的角色與新約有什麼不同？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">五旬節對你的屬靈生活意味著什麼？聖靈內住這個事實如何改變你對信仰的理解？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">你曾經經歷過聖靈『直接見證基督』（聖經、神蹟、悔改）的時刻嗎？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">聖靈在你生命中的工作是否都指向基督？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">聖靈『謙遜地隱沒』這一特質如何挑戰你對屬靈成長的看法？</p>
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
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 自我覺察清單</h4>
              <p className="text-gray-700">識別你對聖靈認識的潛在盲點：✓ 我是否過度強調某些聖靈的工作？✓ 我是否有一些『未經檢驗的假設』？✓ 我的文化背景如何影響我對聖靈的期望？</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 聖經導向的學習計畫</h4>
              <p className="text-gray-700">建立系統化的聖經閱讀：按主題研讀聖靈的教導；對比不同書卷的描述；記錄聖經如何定義關鍵概念。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💬 反思式禱告</h4>
              <p className="text-gray-700">『主啊，幫我看清楚我對聖靈認識的盲點。我願意放下我的預設，按照聖經重新認識你的靈。』</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">👥 屬靈同伴查經</h4>
              <p className="text-gray-700">找一位屬靈同伴，共同討論彼此對聖靈的不同理解，互相問責。</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
