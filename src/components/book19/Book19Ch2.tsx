import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Search, HelpCircle, Check, Star } from 'lucide-react';

export default function Book19Ch2() {
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
        <div className="text-sm font-medium text-red-500 mb-1">主題二</div>
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">⚔️ 勝過罪與世界</h1>
        <p className="text-gray-500 text-sm">第9-13、18、24-25、27-28章</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <div>
              <h3 className="font-bold text-purple-700 text-lg mb-3">第9章：將自己交托給神</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                慕安德列在本章探討一個核心問題：信徒如何將自己完全交托給神？他指出，這種交托不是一次性的決志，而是「不住地堅定交托」——每天、每時每刻都需要重新將自己放在神的手中。許多信徒在剛得救時有熱情的獻身，但因生活的重擔而漸漸鬆懈，靈命也隨之萎縮。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                真正的交托需要「專心一意奉獻」——不是部分的奉獻，而是全人的奉獻：將理性、意志、感情、時間、才能和財物都獻給神。慕安德列說：「神渴望得著你的全人，就如同一個丈夫渴望得著他妻子的全心一樣。」半心半意的奉獻不能帶來真實的得勝生命。
              </p>
              <p className="text-gray-700 leading-relaxed">
                這種交托必須「憑信心」進行。信心不是一種感覺，而是相信神真的接受我們的交托，並且有能力保守我們所交托的一切。正如保羅說：「因為我知道我所信的是誰，也深信他能保全我所交付他的」（提後1:12）。信心使交托成為真實而有效的行動。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 text-lg mb-3">第10章：從罪本身得救</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                許多信徒以為得救只是罪的赦免——過去的罪被赦免，將來的罪繼續發生、繼續認罪、繼續赦免，如此循環不已。慕安德列指出這是對救恩的錯誤理解。神的救恩不僅要救我們脫離罪的刑罰，更要救我們脫離罪的權勢本身。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                得勝罪惡的方法是「把罪帶到耶穌那裡」。這不僅是認罪，更是在每一次罪的試探或失敗時，立刻轉向耶穌，讓他來處理這個罪。我們不能靠自己的決心和努力勝過罪，但耶穌能夠。問題在於我們是否真的相信他有這個能力，並且願意在試探的當下就向他求助。
              </p>
              <p className="text-gray-700 leading-relaxed">
                更深的得勝之道是「住在耶穌裡」——與他保持持續的生命聯合，使罪沒有機可乘。慕安德列引用約翰壹書3:6：「凡住在他裡面的，就不犯罪。」這不是說住在耶穌裡的人永不會犯罪，而是說持續的生命交通使罪惡的權勢被阻斷。就如同枝子住在葡萄樹上，自然結出果子；住在耶穌裡的信徒，自然在罪的爭戰中得勝。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 text-lg mb-3">第11章：認罪</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                認罪是恢復與神相交的必要途徑，但許多信徒的認罪流於形式，缺乏真實的效果。慕安德列指出真正的認罪需要三個特質：徹底、具體、出於正直之心。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「徹底」的認罪意味著不為自己的罪辯護、不找藉口，不說「環境使然」或「別人也這樣」。「具體」的認罪意味著說出具體的罪行，不是籠統地說「我是個罪人」，而是能夠面對神說：「主啊，我昨天說謊了，我的驕傲心傷害了弟兄，我浪費了寶貴的時間……」具體的認罪才能帶來具體的潔淨。
              </p>
              <p className="text-gray-700 leading-relaxed">
                「正直之心」的認罪意味著認罪時真心痛恨這個罪，而不只是害怕刑罰。「誠實之心」的認罪意味著認罪後真的立志離開這個罪，而不是認罪後繼續犯同樣的罪。慕安德列說：「假若你認了罪卻沒有真心想要離開它，那你的認罪就不過是一種儀式，無法帶來真實的潔淨。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 text-lg mb-3">第12章：赦免</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                認罪之後，神的赦免是完全而確定的。慕安德列強調，信徒必須學習真正地接受並享受神的赦免，不再為已認悔的罪而持續自責。「完全的赦免」意味著神不再記念我們的罪，就如同詩篇說：「他使我們的過犯，與我們相離，如東離西那樣遠。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                真正接受赦免的結果是感恩和奉獻的加深。當我們真正明白自己的罪有多深，神的赦免有多廣，我們就自然地被感恩充滿。路加福音7章的那個用眼淚洗耶穌腳的女人，「她許多的罪都赦免了，因為她的愛多。」赦免的深度與愛的深度成正比。
              </p>
              <p className="text-gray-700 leading-relaxed">
                慕安德列特別指出，信徒應當「活在赦免相交中」——不是偶爾跌倒後才去尋求赦免，而是日日活在被赦免、被恩待的意識中。這種持續的相交使我們有能力迅速認罪、迅速恢復，不讓罪惡在我們心中積累，阻斷與神的相交。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 text-lg mb-3">第13章：潔淨</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                慕安德列在此區分赦免與潔淨的不同：赦免處理罪的刑罰和罪責，使我們得以稱義；潔淨則處理罪的污染，使我們在性情和行為上得以更新。兩者都是必要的，都需要倚靠耶穌的寶血。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                潔淨「靠寶血」——約翰壹書1:7說：「他兒子耶穌的血也洗淨我們一切的罪。」這不只是一次性的潔淨，而是持續的工作。正如祭司每次進入聖所前都需要洗滌，信徒也需要持續地在耶穌的血中尋求潔淨，使靈魂保持潔淨，好能進入神的同在。
              </p>
              <p className="text-gray-700 leading-relaxed">
                潔淨「憑信心」接受——我們無法靠自己的努力使自己潔淨，但可以憑信心接受神已預備的潔淨。慕安德列說，信徒需要「強烈地渴望被潔淨」。這種渴望本身就是神工作的跡象，是聖靈在我們心中感動我們厭惡罪惡、渴慕聖潔。有了這種渴望，加上對神赦免潔淨之恩的信心，我們就能在聖潔的道路上穩步前進。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 text-lg mb-3">第18章：信仰中的軟弱與跌倒</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                慕安德列以溫柔的牧者心腸面對信徒在靈命路途上的跌倒和失敗。他說：「不要因跌倒而灰心——因為灰心本身就是撒但的計謀，它使你離開耶穌，而不是轉向耶穌。」跌倒後最危險的不是跌倒本身，而是跌倒後的反應：若是灰心退縮，就讓撒但得了便宜。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                正確的回應是「讓過失引向耶穌」。每一次的失敗都可以成為認識自己軟弱、更深倚靠耶穌的機會。保羅說：「我靠著那加給我力量的，凡事都能做。」這個宣言不是在他從未跌倒時說的，而是在他深知自己的軟弱、完全倚靠基督之後說的。
              </p>
              <p className="text-gray-700 leading-relaxed">
                跌倒「使更有智慧」——每一次跌倒後，若我們謙卑地檢視原因，就能更了解自己的軟弱點，知道在哪些情況下特別需要警醒。慕安德列說：「神有時容許我們跌倒，不是要懲罰我們，而是要使我們謙卑，不再倚靠自己，學習更深地倚靠他。」跌倒後謙卑悔改的信徒，往往比從未跌倒的人更成熟、更有力量。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 text-lg mb-3">第24章：不要叫聖靈擔憂</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                以弗所書4:30告誡信徒：「不要叫神的聖靈擔憂。」慕安德列詳述了哪些行為會傷害聖靈——這些都是聖靈特別敏感的領域：說謊（包括誇大、欺騙、不誠實的沉默）、惱怒（失去自制、傷害弟兄）、偷盜（對他人財物不誠實，包括偷竊時間和機會）、污穢的言語（敗壞人心的話語）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                聖靈是位格的神，有他自己的感情和回應。當我們犯罪時，他不是一個機械式的程序，而是一位真實的同伴，感到傷痛和憂愁。了解這一點應當使信徒更加謹慎——不只是害怕犯罪的後果，更是因愛聖靈而不願傷害他。慕安德列說：「讓對聖靈的愛成為你聖潔生活的動力，這比對懲罰的恐懼更有效、更持久。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 text-lg mb-3">第25章：肉體與聖靈的爭戰</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                加拉太書5章詳細描述了肉體的私慾和聖靈果子之間的根本衝突。慕安德列指出，「肉體」不只是身體的感官慾望，而是整個舊人的傾向——自我中心、驕傲、不信神、依靠自己。肉體的特徵包括：淫亂、污穢、邪蕩、拜偶像、仇恨、爭競、忌恨、惱怒等（加5:19-21）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖靈的工作是在信徒心中產生完全相反的品格：仁愛、喜樂、和平、忍耐、恩慈、良善、信實、溫柔、節制。這些不是信徒努力培養的美德，而是聖靈在裡面工作的自然結果。
              </p>
              <p className="text-gray-700 leading-relaxed">
                「根本的轉變」是慕安德列強調的：得勝肉體不是壓制它，而是讓聖靈充滿，使肉體的力量被新生命的力量所取代。就如光進入黑暗的房間，黑暗自然消散；聖靈充滿的信徒，肉體的私慾自然失去其控制力。這需要信徒不斷「靠著聖靈行事」（加5:16），每日在聖靈的引領下生活。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 text-lg mb-3">第27章：撒但的能力與信徒的保障</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                撒但是真實的仇敵，他的作為包括：試探信徒犯罪、在心中放置懷疑的念頭、控告信徒、敗壞神的工作。慕安德列不誇大撒但的能力，但也不輕視他：「撒但是一個被征服的仇敵，但他仍然是一個危險的仇敵。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                信徒的保障不在於自己的屬靈能力，而在於基督的得勝。耶穌在十字架上已經「廢掉那掌死權的，就是魔鬼」（來2:14）。信徒需要的是知道這個得勝，並且在信心中支取這個得勝。就如一個繼承了遺產的人，需要知道自己的遺產在哪裡，才能去領取。
              </p>
              <p className="text-gray-700 leading-relaxed">
                「得勝的方法」是倚靠耶穌的名和能力，穿戴神所賜的全副軍裝（弗6:10-18）。慕安德列特別強調「倚靠耶穌的血」——每當撒但控告信徒時，血的功效能夠沉默一切控告，因為基督的血已經了結了罪的一切刑罰和控訴。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 text-lg mb-3">第28章：基督徒的爭戰</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                真正的基督徒生命是一場持續的屬靈爭戰。慕安德列說：「你要「佔據堅固的堡壘」——這意味著信徒不只是被動地防守，而是主動地前進，奪取撒但手中的陣地，為基督的國度擴展領土。」新約的比喻是勇士、士兵、跑步的競賽者——這些都是積極進取的意象。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                爭戰的策略是「住在基督裡」。這不是消極的等待，而是積極地讓基督的生命充滿每一個角落——思想、感情、意志、行為——使撒但沒有落腳的地方。耶穌說：「這世界的王要來，他在我裡面是毫無所有」（約14:30）。住在基督裡的信徒，撒但在他裡面找不到任何可以利用的地方。
              </p>
              <p className="text-gray-700 leading-relaxed">
                「信心帶來勝利」——約翰壹書5:4說：「叫我們勝了世界的，就是我們的信心。」勝利不在於情感的高漲或意志的堅強，而在於對神話語的信靠。當試探來臨時，信徒以信心拿起「聖靈的寶劍，就是神的道」（弗6:17），就能在每一場爭戰中得勝。
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
            <p className="text-gray-700">得勝罪惡的根本是將自己不住地交托神，並住在基督裡，不是靠自己的努力和決心。</p>
          </div>
          <div className="flex gap-3">
            <span className="text-teal-600 font-bold flex-shrink-0">2.</span>
            <p className="text-gray-700">認罪必須徹底、具體、出於真心，才能帶來真實的潔淨和恢復；神的赦免是完全的，信徒應活在被赦免的喜樂中。</p>
          </div>
          <div className="flex gap-3">
            <span className="text-teal-600 font-bold flex-shrink-0">3.</span>
            <p className="text-gray-700">跌倒後不要灰心，要讓每次失敗成為更深認識自己軟弱、更倚靠耶穌的機會——這是成熟信仰的標誌。</p>
          </div>
          <div className="flex gap-3">
            <span className="text-teal-600 font-bold flex-shrink-0">4.</span>
            <p className="text-gray-700">肉體與聖靈之間有根本的衝突，得勝不在於壓制肉體，而在於讓聖靈充滿，以新生命的力量取代肉體的力量。</p>
          </div>
          <div className="flex gap-3">
            <span className="text-teal-600 font-bold flex-shrink-0">5.</span>
            <p className="text-gray-700">撒但是被征服的仇敵，信徒的保障在於基督十字架的得勝；倚靠耶穌的名和血，在信心中支取已有的勝利。</p>
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
              <h4 className="font-semibold text-indigo-700 mb-2">赦免與潔淨的神學區分</h4>
              <p className="text-gray-700 leading-relaxed">
                改革宗神學區分「稱義」與「成聖」：稱義是法律性的宣告，神宣判我們無罪，是一次性的事件；成聖是實際的改變，使我們的性情和行為變得更像基督，是持續的過程。赦免屬於稱義的範疇，潔淨屬於成聖的範疇。慕安德列的貢獻是幫助信徒明白：這兩者都需要持續地倚靠耶穌的血，都是信心的回應，而非個人的努力。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「住在基督裡」的奧秘</h4>
              <p className="text-gray-700 leading-relaxed">
                約翰福音15章的葡萄樹比喻是慕安德列最喜歡的聖經段落之一。「住在我裡面，我也住在你們裡面」（約15:4）描述了一種雙向的生命聯合。枝子本身不需要努力長出果子，只需要保持與樹幹的連接。同樣，信徒得勝罪惡的關鍵不是更努力地爭戰，而是保持與基督的靈性聯合——通過禱告、讀經、默想和信靠。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">肉體的神學理解</h4>
              <p className="text-gray-700 leading-relaxed">
                新約中「肉體」（sarx）一詞有多個意義：有時指身體，有時指人的有限性，有時指罪性的本質。保羅在加拉太書5章使用的「肉體」主要指後者——未更新的人性，傾向於離開神、倚靠自己。這不等同於身體本身（身體是中性的，可以「榮耀神」，林前6:20），而是指脫離聖靈控制的人的整體傾向。明白這點，信徒就不會陷入一種錯誤的「靈肉二元論」，以為所有感官需求都是罪惡的。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">基督教對撒但的平衡觀點</h4>
              <p className="text-gray-700 leading-relaxed">
                聖經對撒但的描述要求信徒保持兩方面的平衡：一方面，不要小看他（彼前5:8，「如同吼叫的獅子」）；另一方面，不要高估他（約壹4:4，「那在你們裡面的，比那在世界上的更大」）。歷史上有些基督徒過度強調撒但的能力，導致恐懼和被動；另一些人完全忽略屬靈爭戰，導致疏於防備。慕安德列的平衡立場是：撒但是真實且危險的，但基督的勝利是更真實、更大的。
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
              <p className="text-gray-700">你的認罪習慣是具體的還是籠統的？有沒有一些你一直「知道」但不願意具體認罪的事？為什麼會這樣？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">當你在靈命上跌倒後，你通常的第一反應是什麼？是轉向耶穌，還是灰心退縮、迴避神？你認為可以怎樣改變這種反應模式？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">你有沒有長期「住在耶穌裡」的意識？還是基督對你來說主要是偶爾去求助的對象？這兩種關係的質感有何不同？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">在你的生命中，哪些行為或習慣最容易叫聖靈擔憂？你對這些行為目前的態度是什麼？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">慕安德列說跌倒可以使信徒「更有智慧」——你有過這樣的經驗嗎？哪一次的失敗讓你對自己的軟弱有更深的認識，並使你更依靠神？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">你在屬靈爭戰中更偏向哪個極端——過度害怕撒但的能力，或是完全忽略屬靈爭戰？這對你的信仰生活有什麼影響？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">✍️ 具體認罪的練習</h4>
              <p className="text-gray-700 mb-2">本週每天晚上花五分鐘回顧當天：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>我說了什麼不誠實的話？</li>
                <li>我有沒有傷害他人（言語、態度、疏忽）？</li>
                <li>我的時間和注意力有沒有用在榮耀神的事上？</li>
                <li>對每件具體的事，向神認罪並接受他的赦免。</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🛡️ 屬靈爭戰的裝備</h4>
              <p className="text-gray-700 mb-2">每天早晨宣告並禱告：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>宣告基督在十字架上已勝過撒但（西2:15）</li>
                <li>為今天可能遇到的試探具體禱告，求神保守</li>
                <li>穿戴神的全副軍裝（弗6:14-18），逐一宣告</li>
                <li>在心中存著「我今天是基督的士兵」的意識</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 快速恢復的習慣</h4>
              <p className="text-gray-700 mb-2">當你在某件事上失敗時，練習以下步驟，而不是陷入灰心：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>立刻轉向耶穌：「主，我又跌倒了，我需要你。」</li>
                <li>具體認罪，接受赦免。</li>
                <li>問自己：這次失敗讓我看到自己的什麼軟弱？</li>
                <li>求神填補這個軟弱，繼續前行，不反覆自責。</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4 mt-2">
              <p className="text-green-800 italic text-sm leading-relaxed">
                「主耶穌，謝謝你不只赦免我的罪，更要從罪的權勢中拯救我。我承認我靠自己無法得勝，但你已經在十字架上征服了一切的仇敵。今天我選擇住在你裡面，每當試探來臨，我就轉向你。讓你的生命充滿我，使肉體的力量失去控制。阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
