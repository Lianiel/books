import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book18Ch6() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-600 to-rose-700 bg-clip-text text-transparent">第六章</h1>
        <h2 className="text-xl font-semibold text-gray-700">撒但的將來</h2>
        <p className="text-sm text-gray-500 mt-2">第一部分：認識敵人</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">撒但的故事有一個確定的結局</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                在深入研究了撒但的本質、歷史和今天的工作之後，我們必須以撒但故事的最終結局作為這一部分的總結。這個結局不是懸念，不是開放式的——聖經明確地告訴我們撒但的命運，這個確定的知識對我們今天的屬靈爭戰具有根本性的重要。
              </p>
              <p className="text-gray-700 leading-relaxed">
                知道戰爭的最終結果，對士兵的士氣有決定性影響。我們不是在一場勝負未定的戰爭中掙扎——我們是在一場已定勝局的戰爭中，追上那個確定的得勝。這個認識改變了一切。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">撒但的被捆綁：千禧年期間</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                啟示錄20:1-3描述一個天使「拿著無底坑的鑰匙，並一條大鎖鏈，從天降下。他捉住那龍，就是古蛇，又叫魔鬼，也叫撒但，把它捆綁一千年，扔在無底坑裡，將無底坑關閉，用印封上，使它不得再迷惑列國。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                對於這個捆綁的解釋，不同的千禧年神學立場有不同的理解。無千禧年立場（改革宗傳統的主流）認為，「一千年」是象徵性的數字，代表從基督第一次降臨到第二次降臨的整個教會時代。在這段時期，撒但在「迷惑萬國」（阻止福音廣傳）的能力上被「捆綁」，這正是為何大使命能夠在所有民族中得到成就——如果撒但沒有被某種程度地限制，這是不可能的。
              </p>
              <p className="text-gray-700 leading-relaxed">
                前千禧年立場則認為，撒但的捆綁是字面意義上的，將發生在基督實際統治地上的一千年期間。儘管在解釋上存在差異，所有正統的基督徒都同意最終的審判和撒但永遠的刑罰是確定的。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">撒但短暫的釋放與最後的反叛</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                啟示錄20:7-9記載，在「一千年」完結後，撒但將「從監牢裡被釋放出來，出來要迷惑地上四方的列國，就是歌革和瑪各，叫他們聚集爭戰，他們的人數多如海沙。」他們圍攻神所愛的城（聖徒的營），但「有火從天降下，燒滅了他們」。
              </p>
              <p className="text-gray-700 leading-relaxed">
                這段記載顯示，即使在長期的約束之後，撒但的本質不會改變——他仍然是惡的，仍然要反叛神。這對我們理解惡的本質有深刻意義：罪和惡不是因為環境造成的，可以通過改善環境而消除；它是存在於人（和撒但）的內心深處的根本性問題，只有神的救贖和重生能夠解決。撒但的最後反叛也是如此，顯示惡的存在是自願的選擇，而非被迫的。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">撒但的最終審判：火湖</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                啟示錄20:10是撒但故事的結局：「那迷惑他們的魔鬼被扔在硫磺的火湖裡，就是獸和假先知所在的地方。他們必晝夜受苦，直到永永遠遠。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這個結局有幾個關鍵特徵：第一，它是確定的——「被扔在」（被動語態）表示神的主動審判，沒有商量的餘地。第二，它是永遠的——「直到永永遠遠」排除了任何復和或救贖的可能性。第三，它是痛苦的——「晝夜受苦」是對撒但在整個人類歷史中所製造的無盡苦難的公義回應。
              </p>
              <p className="text-gray-700 leading-relaxed">
                有些神學家（如奧利根）試圖淡化甚至否定永刑的教義，認為最終一切都會得到恢復（普救論）。但聖經的語言是清晰的，而且我們必須承認：對那些因撒但的工作而受苦的無數受害者，永恆的公義是一個真實的安慰，不是殘忍的。沒有公義就沒有真正的憐憫。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">撒但最終失敗對信徒的安慰</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                撒但的最終命運對今天處於試煉中的信徒有巨大的安慰和意義：
              </p>

              <div className="space-y-3">
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-1">安慰一：你今天的受苦是暫時的</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    無論撒但今天如何攻擊你，這一切都有終點。羅馬書8:18說：「我想現在的苦楚，若比起將來要顯於我們的榮耀，就不足介意了。」撒但最終的刑罰是確定的，你最終的榮耀也是確定的——這兩個確定性一起組成了「今天一切都有意義」的根基。
                  </p>
                </div>

                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-1">安慰二：神的公義必得伸張</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    在這個世界上，惡似乎常常得勝——邪惡的人繁榮，無辜的人受苦，謊言廣傳，真理被壓制。啟示錄20:10告訴我們，這不是最終的故事。每一個因撒但的工作而受苦的人——每一個被謊言欺騙的靈魂，每一個被迫害的信徒，每一個在邪惡中受苦的孩子——他們的遭遇都會得到神公義的回應。這不是復仇心態，而是對神公義性情的信靠。
                  </p>
                </div>

                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-1">安慰三：基督的得勝是完全的</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    哥林多前書15:24-26說：「此後末期到了，那時基督既將一切執政的、掌權的、有能的都毀滅了，就把國交與父神……因為基督必要作王，等神把一切仇敵都放在他的腳下。所毀滅的末了的仇敵就是死。」撒但的最終失敗，是基督「一切仇敵都放在腳下」這個完全得勝的一部分。我們今天為之爭戰，是在等候那個已確定的最終得勝顯明出來。
                  </p>
                </div>

                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-1">安慰四：「神的德能可以擊退一切仇敵」</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    路德的偉大詩歌《上主是我的堅固保障》（A Mighty Fortress Is Our God）最後一節唱道：「但你問誰是得勝者？基督是大主宰。他必爭戰得勝，因他是萬軍之主。」在認識了撒但的力量和狡猾之後，我們不是更加懼怕，而是更加緊抓基督——因為祂已得勝，而我們是在祂裡面。
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">撒但的結局如何改變我們今天的生活</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                知道撒但的最終命運，應當改變我們今天的屬靈生活方式。首先，它給了我們進行屬靈爭戰的動力：我們不是在打一場前途未卜的戰爭，而是在執行一個確定的得勝計劃。就像二次大戰中的諾曼底登陸之後，德國的最終失敗已成定局，雖然戰鬥仍在繼續，但方向是確定的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                其次，它使我們謙卑：不是我們有能力打敗撒但，而是基督已打敗了他，我們是在基督的得勝中分享。保羅說「我靠著那加給我力量的，凡事都能做」（腓立比書4:13）——不是靠著我自己的能力，而是靠著基督。
              </p>
              <p className="text-gray-700 leading-relaxed">
                最後，它使我們有永恆的盼望：啟示錄21:4描述的那個沒有眼淚、沒有死亡、沒有悲哀、沒有哭號、沒有疼痛的新天新地，正是撒但的工作被完全消除之後的景象。我們為那個日子努力，也在那個確定的盼望中今天爭戰。
              </p>
            </div>

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
          <div className="p-5 bg-white space-y-5">

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">啟示錄20章的千禧年爭議：不同立場的牧養意義</h4>
              <p className="text-gray-700 leading-relaxed">
                千禧年問題（前千禧年、無千禧年、後千禧年）是教會歷史上一個持續的神學爭議。對末世論立場不同的基督徒，仍然可以共同持守幾個核心信念：基督必要再來；撒但必被最終審判；信徒必在基督裡得完全救贖。這些共同的確信，是屬靈爭戰的基礎，不應被千禧年的分歧所削弱。無千禧年立場（奧古斯丁、加爾文、改革宗傳統）認為啟示錄20章的「一千年」是象徵性的，代表整個教會時代——這與我們現在正處於那個時代的經歷相符：福音在全球廣傳（撒但在「迷惑萬國」上被限制），但苦難和爭戰仍然存在。無論持哪種立場，末世論的學習目的應是增加盼望、催促事奉、強化對基督的倚靠，而不是助長「末日癡迷」或引發教會內不必要的分裂。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">永刑的神學：一個艱難但必要的教義</h4>
              <p className="text-gray-700 leading-relaxed">
                永恆的刑罰是基督教最難被現代人接受的教義之一。許多人對「永遠受苦」感到道德上的反感，這是真實的情感反應，不應被輕易駁回。但我們需要從聖經的整體架構來理解這個教義：首先，神的公義是絕對的，罪的嚴重性與被得罪者（神）的偉大成正比——得罪無限聖潔的神，其後果也是無限的。其次，永刑不是復仇心態的表達，而是宇宙道德秩序的必要組成部分；如果惡最終沒有公正的回應，那麼歷史上所有受苦的無辜者就沒有得到應有的公義。第三，耶穌自己使用了最強烈的語言來警告地獄的實在（馬太福音25:46），因為祂愛人，不願有人落在那裡——正是這份愛促使祂降世為我們承受審判。拒絕永刑教義，往往也削弱了十字架的必要性：若最終一切都會好起來，耶穌為何要受那麼大的苦？
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">路德的《上主是我的堅固保障》：末世盼望的神學詩歌</h4>
              <p className="text-gray-700 leading-relaxed">
                馬丁路德在1529年（宗教改革最艱難的時期之一）寫作《上主是我的堅固保障》（A Mighty Fortress Is Our God），以詩篇46篇為基礎。這首詩歌是對撒但最終失敗的神學宣告：第一節描述神是「堅固保障，精兵利器」；第二節承認「我們憑己力必陷於敗亡」——謙卑地承認人的有限；第三節直接對抗撒但：「這惡魔——你問他是誰？他是古時仇敵……今日終必傾倒！」；第四節宣告基督的得勝：「神的國必永存，我們站在那一方。」這首詩歌的神學力量在於，它同時承認了屬靈爭戰的真實嚴酷（不天真），也宣告了基督得勝的確定性（不絕望）。對今天的信徒而言，把這首詩歌背誦或歌唱，是一種強大的屬靈操練。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「已然-未然」：末世論的現在意義</h4>
              <p className="text-gray-700 leading-relaxed">
                新約神學中有一個關鍵的末世論張力，神學家稱為「已然—未然」（Already-Not Yet）。基督已經打敗了撒但（十字架和復活），但撒但的最終審判尚未完全執行（等待末日的審判）。我們活在這個張力之間：在神的國度「已然」臨到的意義上，撒但已被擊敗，他的控告對信徒無效；在「未然」的意義上，撒但仍然活躍，爭戰仍在繼續，我們還需要穿戴全副軍裝。這個神學框架幫助我們避免兩種極端：過度樂觀主義（「基督已得勝，所以現在沒有爭戰，我只需宣告得勝」）和悲觀主義（「撒但太強大了，我們只能苦苦撐持」）。真實的基督徒屬靈生命是在這個張力中的——帶著確據爭戰，知道我們是在一個已定勝局的戰場上。
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
              <p className="text-gray-700">知道撒但的結局是確定的最終失敗，在你實際面對試探或屬靈攻擊時，這個知識是否真的改變了你的感受和回應？還是它只是一個理論上你相信，但情感上沒有真正「活出來」的真理？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">永恆的刑罰是許多人對基督信仰最大的抗拒點之一。你如何在心中整合「神是愛」和「神是公義的審判者」這兩個看似衝突的屬性？在面對朋友對這個問題的質疑時，你有什麼回應？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">本章說「撒但在最後釋放後仍然反叛，顯示惡的本質不因環境改變而改變」。這個洞察如何改變你對罪、人性和改革的看法？對你在教育、社會改革或自我改進上的方式有什麼影響？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">「已然—未然」的末世論張力——基督已得勝但末日尚未完全——如何幫助你理解為何基督徒仍然受苦、為何禱告有時似乎沒有回應、為何惡人在世上似乎繁榮？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">新天新地（啟示錄21-22章）的盼望——一個撒但的工作被完全消除的世界——如何影響你今天的優先次序和生活方式？你是否感受到「公民身份在天上」這個真理帶來的自由和動力？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">完成了第一部分「認識敵人」的六章後，你對撒但的認識有什麼最重要的改變或深化？你如何會用不同的方式來面對接下來的屬靈爭戰？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">📖 默想啟示錄21-22章的新天新地</h4>
              <p className="text-gray-700 mb-2">花時間慢慢閱讀啟示錄21:1-22:5，讓這個盼望的異象深入你的心。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>特別注意21:4「神要擦去他們一切的眼淚，不再有死亡，也不再有悲哀、哭號、疼痛，因為以前的事都過去了」</li>
                <li>思考：在那個世界裡，撒但的所有工作——所有的謊言、破壞、試探、控告——都將消失</li>
                <li>問自己：這個盼望如何改變你今天面對困難和試煉的方式？</li>
                <li>寫下一段個人的「末世盼望宣言」，在困難時可以誦讀</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎵 學唱路德的《上主是我的堅固保障》</h4>
              <p className="text-gray-700 mb-2">找到這首詩歌的中文版，背誦或熟悉它，讓它成為你在屬靈爭戰中的宣告。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>特別關注第三節對撒但的直接宣告和第四節對基督得勝的確信</li>
                <li>在一個你感到被攻擊或失去盼望的時刻，唱出（或宣讀）這首詩歌</li>
                <li>思考路德在怎樣艱難的環境中寫作這首詩歌，他的信心從何而來</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 第一部分總結：認識你的敵人</h4>
              <p className="text-gray-700 mb-2">完成本書第一部分「認識敵人」後，花時間整理你的學習。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>寫下三到五個你在前六章中學到的最重要洞見</li>
                <li>識別：你對撒但的認識中，哪方面以前有誤解或不足，現在得到了糾正？</li>
                <li>評估：你之前對屬靈爭戰的態度是否太過輕鬆，或太過恐懼？</li>
                <li>預備：帶著第一部分的知識，你進入第二部分「認識撒但的弱點」時，最希望學習什麼？</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">✝️ 以末世盼望轉化現在的擔憂</h4>
              <p className="text-gray-700 mb-2">把你目前最大的擔憂或恐懼放在末世的盼望視角中。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>寫下你目前最大的三個擔憂（關係、工作、健康、家庭等）</li>
                <li>在每個擔憂旁邊，寫下一個相關的末世盼望聖經應許</li>
                <li>例如：「我擔心家人的得救」→ 「神是信實的，祂的救恩計劃不會失敗」（腓立比書1:6）</li>
                <li>每天禱告時，有意識地從「擔憂框架」轉換到「末世盼望框架」</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-4 mt-2">
              <h4 className="font-semibold text-green-800 mb-2">🙏 禱告詞</h4>
              <p className="text-gray-700 leading-relaxed italic text-sm">
                「主耶穌，感謝祢讓我們知道故事的結局——撒但必被扔在火湖中，而我們必在祢的榮耀中永遠與祢同在。這個確定的結局，是我今天爭戰的動力和安慰。當試煉沉重，當黑暗似乎得勝，讓末世的盼望在我心中燃燒。讓我帶著得勝者的確據去面對每一天，知道我是在一場已定勝局的戰場上爭戰。直到那日，就在今天，讓我忠心持守，不失所望。奉祢得勝的名，阿們。」
              </p>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
