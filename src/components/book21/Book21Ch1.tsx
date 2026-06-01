import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book21Ch1() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    exploration: true,
    questions: true,
    practice: true,
  });
  const toggle = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">第一章</h1>
        <h2 className="text-xl font-semibold text-gray-700">聖父、聖子、聖靈——使徒信經</h2>
        <p className="text-gray-500 text-sm mt-1">從「我信神」到「永生」，17個主題</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <div>
              <h3 className="font-bold text-purple-700 mb-2">一、信仰的本質——「我信神」不只是頭腦上同意</h3>
              <p className="text-gray-700 leading-relaxed">使徒信經開門見山：「我信神」。但「信」這個字，在原文希臘文是 pistis，它的含義遠超過「我認為神存在」這樣知識上的判斷。pistis 代表的是信靠（trust）、委身（commitment）和依靠——把整個人交托出去。巴刻指出，很多人相信神的存在，卻從來沒有真正「信靠」過神。就如一個人相信飛機可以飛，但從未踏上飛機，他的「相信」是沒有功效的。</p>
              <p className="text-gray-700 leading-relaxed mt-2">巴刻進一步澄清：真正的信仰並不排除懷疑。懷疑是信仰旅程中正常的伴侶，不少偉大的信仰前輩——包括詩篇的作者、約伯、甚至施洗約翰在獄中——都有過懷疑的時刻。關鍵不在於你有沒有疑問，而在於面對疑問時，你是否仍繼續把自己委身於神。只要你仍繼續信靠，懷疑便不能摧毀信仰。馬丁路德說：「你的神在哪裡，你的心就在哪裡。」信心的本質是方向，不是感覺的強度。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">二、三位一體的神——父、子、聖靈</h3>
              <p className="text-gray-700 leading-relaxed">使徒信經分三段，分別論聖父、聖子、聖靈，結構本身就揭示了基督教所信的是三位一體的神。三位一體不是人發明的複雜哲學，而是讓聖經啟示自己說話的必然結論：聖經既清楚說明神是唯一的（申命記6:4），又呈現出父、子、靈各有其獨立的位格（太28:19；約14-16章）。三位格（persons）擁有同一神聖本質（essence），這是信仰的核心奧秘。</p>
              <p className="text-gray-700 leading-relaxed mt-2">三一論的實踐意義在於：我們所信靠的神，本質上就是愛的共同體。父永遠愛子，子永遠愛父，聖靈是兩者之間愛的流通（約17:24）。這意味著神在創造之前已存在於愛的關係中，祂創造人類，是要邀請受造物進入這個愛的圓圈。這是基督教「神是愛」的最深基礎——愛不只是神的屬性，而是神的本質。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">三、全能的父——神的主權與護理</h3>
              <p className="text-gray-700 leading-relaxed">信經稱神為「全能的父」，這兩個詞加在一起格外意義深遠。「全能」代表神的能力沒有限制，祂掌管萬物的命運；「父」則代表這個全能的神是慈愛的、親密的、關顧個人的。這不是抽象的哲學命題，而是巴刻所說的「基督信仰最難以置信卻最美麗的核心」：宇宙的創造者，同時是我的天父。</p>
              <p className="text-gray-700 leading-relaxed mt-2">然而「全能的父」立刻帶出最大的信仰難題：如果神是全能的，為什麼世界上有那麼多苦難？巴刻誠實面對這個問題，他指出：神的全能並不等於神在任何時刻都繞過人的自由意志和自然規律。但神有能力在最壞的處境中帶出最好的結果。羅馬書8:28說「萬事都互相效力，叫愛神的人得益處」，這不是說每件事本身是好的，而是說神有能力把一切——包括苦難、失敗、甚至罪的後果——都轉化為祂旨意的成就。十字架是這個信念最有力的論據：歷史上最大的惡（殺害神的兒子），竟成就了最大的善（全人類的救贖）。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">四、創造天地與道成肉身</h3>
              <p className="text-gray-700 leading-relaxed">「我信全能的父，創造天地的主」——這個「創造」的宣告，確立了世界的本質：世界不是自己出現的，也不是永恆的，而是有位格的神自由地創造的。創世記1-2章的重心不是在回答「世界是怎麼造的」（具體的物理過程），而是在回答「世界是誰造的，為什麼造」。神是創造者，人是受造者，這個關係界定了人生的意義和方向。</p>
              <p className="text-gray-700 leading-relaxed mt-2">信經接著宣告：「我信……祂的獨生子、我們的主耶穌基督。」耶穌是「神的獨生子」——這個稱號在原文（monogenes）意味著獨一無二的、本質上屬於父的。公元451年迦克墩大公會議明確界定：耶穌基督是完全的神，又是完全的人，兩性（divine nature and human nature）在一位格（person）中聯合，「不相混合、不相改變、不相分離、不相分割」。這四個「不」保護了信仰的完整性：若耶穌不是完全的神，祂就沒有資格救贖全人類；若祂不是完全的人，祂就無法代替我們受苦受死。童女生子不只是神蹟，更有神學意義：確保耶穌進入人性而沒有承受亞當罪性的遺傳，成為完全潔淨的代罪羔羊。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">五、受苦、死亡與復活——歷史事件的神學意義</h3>
              <p className="text-gray-700 leading-relaxed">「在本丟彼拉多手下受難，被釘於十字架，受死，埋葬」——信經特意點名了一個歷史人物，把耶穌的死固定在真實的時間和地點中。這不是神話，是歷史。十字架的意義是多面向的：巴刻列出了幾個重要的面向——代替贖罪（propitiation，平息神公義的憤怒）、替代刑罰（penal substitution，基督代替我們承擔罪的刑罰）、贖回（redemption，把我們從罪的奴役中買回來）、和好（reconciliation，恢復人與神破裂的關係）。沒有一個比喻能完整描述十架的意義，這幾個面向共同構成救恩的完整圖像。</p>
              <p className="text-gray-700 leading-relaxed mt-2">「第三日從死人中復活」是基督信仰的核心事件。保羅在哥林多前書15:14說：「若基督沒有復活，我們所傳的便是枉然，你們所信的也是枉然。」復活不只是耶穌個人的勝利，更是整個新創造的開端。復活的基督是「睡了之人初熟的果子」（林前15:20）——祂的復活是所有信徒將來復活的預告和保證。復活更是神對十字架的蓋印：宣告耶穌的獻祭被接受了，罪的刑罰確實被承擔了，死亡的權勢確實被打破了。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">六、升天、再來與教會的群體</h3>
              <p className="text-gray-700 leading-relaxed">「祂升天，坐在全能父神的右邊」——升天常被忽略，卻是信仰中不可缺少的一環。升天的耶穌不是離開了，而是以新的方式同在：祂現在坐在父的右邊（象徵最高的權柄和榮耀），並且在那裡為我們代求（羅8:34；來7:25）。每一次基督徒禱告，他/她不是獨自向神呼求，而是有大祭司耶穌在神面前代表我們。「坐在神右邊」也宣告：耶穌的救贖工作已完成，祂「坐下」表示工作已就緒，不需要再次獻祭（來10:12-14）。</p>
              <p className="text-gray-700 leading-relaxed mt-2">「祂必再來，審判活人死人」是基督徒確定的盼望，也是敬畏的動力。再來意味著歷史有一個目的地：神的計劃將在基督再來時完全成就。「聖而公之教會」是由真信徒組成的基督身體，跨越時間、種族和宗派；「聖徒相通」則是說所有信徒在基督裡共享一切屬靈福分——這不只是地上教會的相交，也包括與已死去的聖徒的靈性連結，因為他們也活在神裡面（路20:38）。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">七、赦免、身體復活與永生</h3>
              <p className="text-gray-700 leading-relaxed">「我信罪得赦免」——赦免是神白白的恩典，不是憑人的功德賺取的。重要的是，赦免不只是神忽略我們的罪，而是基督承擔了罪的刑罰，使神能以「義者身分」赦免我們（羅3:26）。真正的赦免有改變的力量：被完全赦免的人，不會繼續在罪中打滾，而是會因感恩而想要活出配得赦免的生命。</p>
              <p className="text-gray-700 leading-relaxed mt-2">信經以「身體復活，並永生」作結。「身體復活」這個宣告，在古希臘文化中幾乎是無法接受的——希臘思想認為身體是靈魂的監牢，靈魂的最終解放是脫離身體。基督教卻完全相反：身體是神的創造，是好的，將在末日被復活更新。復活的身體不是靈體，而是真實、有物質性的、但已被榮耀化——就像耶穌復活後的身體可以被摸（約20:27），又可以穿牆而過（約20:19）。「永生」也不只是時間的無限延長，而是質的轉化——在基督裡與神同在、充分認識並享受祂的榮耀和愛，那才是真正的「生命」。</p>
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
            <ul className="space-y-3">
              {[
                '信仰（pistis）是整個人的委身和信靠，不只是頭腦認同神的存在；懷疑可以與信仰並存，關鍵是方向——你是否仍繼續把自己交托給神。',
                '三位一體揭示神的本質是愛的共同體（父子靈永恆相愛），這是「神是愛」的最深根基，也是基督徒得救的保障（唯有真神才能救贖）。',
                '耶穌是完全的神也是完全的人（迦克墩信條）——兩者缺一不可：不是真神則無力救贖，不是真人則無資格代替受死。',
                '十字架的意義多面向：代替贖罪、替代刑罰、贖回釋放、與神和好——共同構成完整的救恩圖像；復活是神對十架的蓋印，也是一切信徒將來復活的保證。',
                '升天的基督現在坐在父右邊為我們代求；再來時將審判萬有，完成歷史的目的。',
                '「身體復活」肯定了身體的尊貴，新創造不是廢棄物質世界而是更新它；「永生」是在基督裡與神同在的新質生命，不只是無限延長的時間。',
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
              <h4 className="font-semibold text-gray-800 mb-2">信仰與懷疑的關係</h4>
              <p className="text-gray-700 leading-relaxed">許多人以為懷疑與信仰是對立的，但巴刻指出：真正的信仰（pistis）是持續的委身行動，不等同於永遠沒有疑問。馬丁路德說：「你的神在哪裡，你的心在哪裡。」信心的關鍵是：即使有疑問，你是否仍繼續把自己委身於神？懷疑可以成為信仰深化的入口，而非出口。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">三位一體神學的歷史意義</h4>
              <p className="text-gray-700 leading-relaxed">三位一體不是人發明的哲學概念，而是聖經啟示的必要結論。早期教會在第四世紀的尼西亞大公會議（325年）明確確立了這個教義，對抗否認基督神性的亞流異端。這個教義保護了兩個關鍵真理：神的本質唯一性，以及基督徒得救的確實性——唯有真神才能救贖人類。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">苦難與神的主權——「萬事互相效力」的真實意義</h4>
              <p className="text-gray-700 leading-relaxed">羅馬書8:28的「萬事互相效力」不是說每件事本身是好的，而是神有能力把一切——包括苦難、失敗、甚至罪的後果——都轉化為信徒的益處和祂自己的榮耀。這不是廉價的安慰，而是建立在復活的基礎上：如果神能從最大的惡（十字架）帶出最大的善（救贖），祂就能在我們的苦難中同工。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">身體復活的神學意義</h4>
              <p className="text-gray-700 leading-relaxed">基督教的「身體復活」與希臘哲學的「靈魂不死」根本不同。前者肯定了物質世界和人的身體的尊貴；後者貶低身體為靈魂的監獄。復活的身體不是靈體，而是真實、有物質性的，但已被榮耀化——就像耶穌復活後的身體，可以被觸摸，也可以穿牆而過。這意味著新創造的物質性，神的救贖計劃是更新而非廢棄受造世界。</p>
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
              '你對「信仰」的理解是什麼？你認為懷疑與信心可以並存嗎？你自己有過這樣的掙扎嗎？',
              '三位一體的教義說明神是「愛的共同體」——父、子、靈之間永恆的愛。這對你理解「神是愛」有什麼新的啟示？',
              '面對生命中的苦難，你如何理解「萬事互相效力」？有沒有哪一件你以前認為是壞事的，後來發現神有更深的旨意？',
              '耶穌的十字架對你個人意味著什麼？「代替」的概念（祂代替你受刑）讓你有什麼感受？',
              '「身體復活」比「靈魂上天堂」更完整地描述了基督徒的盼望。這個理解如何改變你對今生和今世的態度？',
              '使徒信經中哪個部分對你最有意義？哪個部分你覺得最難理解或相信？',
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
              <h4 className="font-semibold text-green-700 mb-2">🙏 背誦使徒信經並默想其意義</h4>
              <p className="text-gray-700 mb-2">每天早上背誦使徒信經，但不只是機械地念，而是逐句停下來問：「這對我今天的生活意味著什麼？」例如：「我信全能的父」——今天有什麼事讓我覺得失控，我如何把它交托給這位全能的神？</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 每週閱讀一個主題的經文研讀</h4>
              <p className="text-gray-700 mb-2">本章每個主題都配有聖經研讀，選一個你感興趣或有疑問的主題，認真閱讀相關經文並寫下你的觀察。例如：關於復活的主題，可以讀哥林多前書15章。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 寫下你的「信仰故事」</h4>
              <p className="text-gray-700 mb-2">用幾段話寫下：你是如何開始相信的？你的信仰在哪些關鍵時刻被加深或被挑戰？把你的「委身之旅」具體記錄下來，這能幫助你更清楚地看到神在你生命中的工作。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 面對一個你的信仰疑問</h4>
              <p className="text-gray-700 mb-2">誠實地列出你對使徒信經中最有疑問的一個命題，然後：查找一本護教學書籍（如C.S.路易斯的《返璞歸真》）、和牧師或導師交談，或加入查經小組，認真面對這個疑問，而不是假裝它不存在。</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 mt-2">
              <p className="text-green-800 font-medium mb-1">🕊️ 禱告詞</p>
              <p className="text-green-700 italic leading-relaxed">「天父，謝謝祢藉著使徒信經，給我一個清晰的信仰框架。我承認我有疑問和軟弱，但我選擇把自己委身於祢。幫助我不只是頭腦認同，而是從心深處相信：祢是我的神，耶穌是我的救主，聖靈是我的保惠師。在今天的生活中，讓這個信仰成為我真實的力量。奉耶穌基督的名求，阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
