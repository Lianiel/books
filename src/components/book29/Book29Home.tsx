import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Map, Star, Search, Users } from 'lucide-react';

export default function Book29Home() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    title: true,
    author: true,
    structure: true,
    parts: true,
    features: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">指向終末的創世記</h1>
        <h2 className="text-lg font-semibold text-gray-600">Genesis Pointing towards the End</h2>
        <p className="text-gray-500 mt-1">終末論視角的創世記詮釋</p>
      </div>

      {/* 壹、創世記卷名 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('title')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">壹、創世記卷名</span>
          </div>
          {expanded['title'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['title'] && (
          <div className="p-5 bg-white space-y-3">
            <p className="text-gray-700 leading-relaxed">
              本卷中文稱「創世記」，其實稱為「創始記」更好，因為希伯來聖經本卷的卷名是用第一個字「起初」命名的，全書敘述萬物的起源及以色列國的起源，並非只講創造<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（賴建國，《五經導論》，頁83。紀博遜，《創世記注釋上冊》，頁1。葉基利等，《威克里夫聖經註釋（卷一）摩西五經》，頁1）</span>。本卷是整本聖經的「種籽書」，聖經中所有的重要主題都發源於本書，包括神、三位一體、人、罪、救恩、信心、稱義、成聖、婚姻、家庭、選民、先知、祭司、君王、國度、末世、審判……等等。
            </p>
            <p className="text-gray-700 leading-relaxed">
              若將聖經比擬為一棵大樹，創世記就是最早的那粒種籽；若將聖經比擬為河流，創世記就是整個河流的源頭，因它具有其他書卷一切論題的基因<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（史諾·巴斯德，《聖經研究》，頁36）</span>。「創世記」看起來不太像舊約的其他篇章，反而更接近新約；其中一些主題，與新約有更多的相合，包括設立婚姻、犯罪墮落、洪水滅世（指向末日審判）、因信稱義……等等。並且，創世記頭幾章的景象與人物，對稱地出現於啟示錄中，巴別（巴比倫）和那古蛇（撒但）終必敗亡，而蒙救贖者再度行在有生命河與生命樹的樂園中<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（柯德納，《創世記》，頁9）</span>。新約福音書、使徒行傳、書信、啟示錄皆引用創世記，除了顯明創世記為源頭，也間接肯定創世記記載的可靠性<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（賴建國，《五經導論》，頁84-86）</span>。譚博爾列出一些具體的例子，讓我們看見創世記是整本聖經的種籽：<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（譚博爾，《創世記自習指導》，頁4）</span>
            </p>
            <ul className="space-y-1.5 text-gray-700 leading-relaxed">
              <li>◎馬太從什麼地方開始寫馬太福音？是由創世記開始的。（太一1）</li>
              <li>◎耶穌如何說明婚姻的真理？是用創世記。（太十九3-6）</li>
              <li>◎耶穌用什麼證明復活的真理？跟創世記有關。（太廿二32）</li>
              <li>◎耶穌如何說明他的再來？是用創世記。（太廿四37-39）</li>
              <li>◎耶穌怎樣向猶太人證明他的神性？是藉著創世記。（約八56-58）</li>
              <li>◎保羅如何證明因信稱義的基本要道？是根據創世記。（羅四、加三6-22）</li>
              <li>◎保羅如何證明揀選的要道？是根據創世記。（羅九6-13）</li>
              <li>◎希伯來書的作者如何證明耶穌有超乎亞倫的祭司職份？根據創世記。（來七1-10）</li>
              <li>◎雅各如何證明得救信心的本質？是用創世記來證明的。（雅十四-26）</li>
            </ul>
          </div>
        )}
      </div>

      {/* 貳、創世記作者 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('author')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-indigo-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">貳、創世記作者</span>
          </div>
          {expanded['author'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['author'] && (
          <div className="p-5 bg-white space-y-3">
            <p className="text-gray-700 leading-relaxed">
              創世記是五經的第一本，「五經」猶太人稱之為「TORAH」，有律法、法度、條例、訓誨的意思，從創世記廿六 5 中「法度」一詞而來。創世記廿六 5：「都因亞伯拉罕聽從我的話，遵守我的吩咐和我的命令、律例、法度（תּוֹרָה，towrah）。」這字在舊約聖經出現219次，大多翻譯為律法，但在以賽亞書則較多翻譯為訓誨。
            </p>
            <p className="text-gray-700 leading-relaxed">
              以傳統來說，五經是摩西在曠野中從神直接所領受的啟示。一方面記錄他們在曠野的經過，用以教導以色列人如何生活、如何敬畏神；一方面又提醒他們遵守所立的約。無疑的這是摩西的託付，自自然然的看出，他就是「作者」。<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（陳勝全，《五經典考》，頁25-27）</span>
            </p>
            <p className="text-gray-700 leading-relaxed">五經中許多的事、許多的話可以證明摩西是五經的作者：</p>
            <ul className="space-y-1.5 text-gray-700 leading-relaxed">
              <li>出埃及記十七14：「耶和華對摩西說：我要將亞瑪力的名號從天下全然塗抹了；你要將這話寫在書上作紀念，又念給約書亞聽。」</li>
              <li>出埃及記廿四4：「摩西將耶和華的命令都寫上。……」</li>
              <li>出埃及記卅四27：「耶和華吩咐摩西說：你要將這些話寫上，因為我是按這話與你和以色列人立約。」</li>
              <li>民數記卅三1：「摩西遵著耶和華的吩咐記載他們所行的路程……」</li>
              <li>申命記卅一9：「摩西將這律法寫出來，交給抬耶和華約櫃的祭司利未子孫和以色列的眾長老。」</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">五經之外的書卷亦證明是摩西寫的：</p>
            <ul className="space-y-1.5 text-gray-700 leading-relaxed">
              <li>約書亞記一7-8：「7只要剛強，大大壯膽，謹守遵行我僕人摩西所吩咐你的一切律法，不可偏離左右，使你無論往那裡去，都可以順利。8這律法書不可離開你的口，總要晝夜思想，好使你謹守遵行這書上所寫的一切話。如此，你的道路就可以亨通，凡事順利。」</li>
              <li>約書亞記八32：「約書亞在那裡，當著以色列人面前，將摩西所寫的律法抄寫在石頭上。」</li>
              <li>約書亞記廿三6：「所以，你們要大大壯膽，謹守遵行寫在摩西律法書上的一切話，不可偏離左右。」</li>
              <li>列王記上二3：「遵守耶和華你神所吩咐的，照著摩西律法上所寫的行主的道，謹守他的律例、誡命、典章、法度。這樣，你無論做甚麼事，不拘往何處去，盡都亨通。」</li>
              <li>列王記下十四6：「卻沒有治死殺王之人的兒子，是照摩西律法書上耶和華所吩咐的說：不可因子殺父，也不可因父殺子，各人要為本身的罪而死。」</li>
              <li>以斯拉記六18：「且派祭司和利未人按著班次在耶路撒冷事奉神，是照摩西律法書上所寫的。」</li>
              <li>但以理書九11-13：「11以色列眾人都犯了你的律法，偏行，不聽從你的話；因此，在你僕人摩西律法上所寫的咒詛和誓言都傾在我們身上，因我們得罪了神。……13這一切災禍臨到我們身上是照摩西律法上所寫的，我們卻沒有求耶和華我們神的恩典，使我們回頭離開罪孽，明白你的真理。」</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">新約作者，及基督自己的引用，也說明摩西是「作者」：</p>
            <ul className="space-y-1.5 text-gray-700 leading-relaxed">
              <li>馬可福音十二26：「論到死人復活，你們沒有念過摩西的書荊棘篇上所載的麼？神對摩西說：我是亞伯拉罕的神，以撒的神，雅各的神。」</li>
              <li>約翰福音五46-47：「46你們如果信摩西，也必信我，因為他書上有指著我寫的話。你們若不信他的書，怎能信我的話呢？」羅馬書十5：「摩西寫著說：人若行那出於律法的義，就必因此活著。」</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              五經所記述的內容、風俗、詞句、宗教、政治、地理……都說明是一位生活在當地的人所寫的，使讀的人沒有「隔靴搔癢」的感覺<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（鄺炳釗，《創世記（卷一）》，頁28-31。陳勝全，《五經典考》，頁38-39）</span>。然而像申命記卅四章的內容，講到摩西之死，這應該是後人的補述。所以，當我們說，摩西是五經的作者，應是指摩西為主要作者，容許有後人的加添，但在聖靈的保守中，使它成為神所默示的正典。<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（朗文、狄拉德，《21世紀舊約導論》，頁34-35）</span>
            </p>
            <p className="text-gray-700 leading-relaxed">
              五經及創世記的作者問題，自十八世紀以來，是學者們爭論的焦點，特別是有關底本學說的探討。關於底本學說的起源與發展，可參看朗文、狄拉德的《21世紀舊約導論》<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（朗文、狄拉德，《21世紀舊約導論》，頁33-45）</span>、鄺炳釗的《創世記（卷一）》<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（鄺炳釗，《創世記（卷一）》，頁4-27）</span>，及賴建國所寫的《五經導論》，這些書除了介紹底本學說，也介紹聖經批判學各個階段的發展，並指出底本學說的問題<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（賴建國，《五經導論》，頁49-75）</span>，有興趣的讀者可以從其中得到完整的了解，本書不多花功夫介紹。
            </p>
            <p className="text-gray-700 leading-relaxed">
              綜合來說，在以色列人的歷史裏，最適合撰寫創世記的莫過於摩西；雖然所記載的史實不是摩西親身經歷的，但他在聖靈的感動下，可以把當時已有的材料提煉整編，將真實的經過闡明<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（陳勝全，《五經典考》，頁25-39。柯德納，《創世記》，頁9-21）</span>。福音派傳統認為摩西是五經的作者，有很多聖經的內證。反對這傳統的人從經文中找到一些證據，發現有些晚期寫作的線索，例如：創世記十四14提到「但」這個地方，「但」是在士師時代才被命名的，這地原先的名字是拉億（士十八29）。因此，我們可以說，摩西是創世記的主要作者，摩西死後，還有人加添內容，但篇幅不多。<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（謝挺，《創世記（上）從創造到揀選》，頁4-5。鄺炳釗，《創世記（卷一）》，頁28-35）</span>
            </p>
          </div>
        )}
      </div>

      {/* 參、創世記的結構與大綱 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('structure')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Map className="w-5 h-5 text-indigo-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">參、創世記的結構與大綱</span>
          </div>
          {expanded['structure'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['structure'] && (
          <div className="p-5 bg-white space-y-4">
            <p className="text-gray-700 leading-relaxed">創世記的結構有兩種比較重要的分析法：</p>
            <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
              <h4 className="font-semibold text-indigo-800 mb-2">一、多利達特公式（希伯來片語 אֵלֶּה תוֹלְדוֹת，elleh toledot）</h4>
              <p className="text-gray-700 leading-relaxed text-sm">
                出現11次（二4、五1、六9、十1、十一10、十一27、廿五12、廿五19、卅六1、卅六9、卅七2）。這個片語有來歷、後代、兒子、記略等各種翻譯。這片語通常接著一個人名，只有第一處例外，不是人名，而是「天地」。從第二處開始，記載：1. 亞當的後代、2. 挪亞的後代、3. 閃含雅弗的後代、4. 閃的後代、5. 他拉的後代、6. 以實瑪利的後代、7. 以撒的後代、8. 以掃的後代、9. 雅各的後代。<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（朗文、狄拉德，《21世紀舊約導論》，頁47-48）</span>
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <h4 className="font-semibold text-blue-800 mb-2">二、按內容與文學形式的分法</h4>
              <p className="text-gray-700 leading-relaxed text-sm mb-3">
                創世記結構的第二種分析法，以內容與文學形式作為考慮。可分為兩大部分：創世記一至十一章，和十二至五十章。前者為人類的歷史／太古時期，包含創造、墮落、洪水、巴別等四個重要事件；後者為族長的歷史／先祖時期，包含亞伯拉罕、以撒、雅各、約瑟等四個重要人物。<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（馬有藻，《舊約概論》，頁34-35）</span>相關章次對應如下：
              </p>
              <div className="border border-blue-200 rounded-lg overflow-hidden" style={{ fontSize: 'calc(1em - 8px)' }}>
                <div className="text-center font-semibold bg-blue-100 text-blue-900 py-2">表一：創世記的結構與大綱</div>
                <div className="grid grid-cols-2 text-center font-semibold text-blue-800 bg-blue-50 border-t border-blue-200">
                  <div className="py-2 border-r border-blue-200">人類的歷史<br />四個重要事件</div>
                  <div className="py-2">族長的歷史<br />四個重要人物</div>
                </div>
                <div className="grid grid-cols-8 text-center text-gray-700 border-t border-blue-200">
                  <div className="py-2 border-r border-blue-100 font-semibold">創造</div>
                  <div className="py-2 border-r border-blue-200 font-semibold">墮落</div>
                  <div className="py-2 border-r border-blue-100 font-semibold">洪水</div>
                  <div className="py-2 border-r border-blue-200 font-semibold">巴別</div>
                  <div className="py-2 border-r border-blue-100 font-semibold">亞伯拉罕</div>
                  <div className="py-2 border-r border-blue-200 font-semibold">以撒</div>
                  <div className="py-2 border-r border-blue-100 font-semibold">雅各</div>
                  <div className="py-2 font-semibold">約瑟</div>
                </div>
                <div className="grid grid-cols-8 text-center text-gray-600 border-t border-blue-200 bg-white">
                  <div className="py-2 border-r border-blue-100">1~2章</div>
                  <div className="py-2 border-r border-blue-200">3~6章</div>
                  <div className="py-2 border-r border-blue-100">7~9章</div>
                  <div className="py-2 border-r border-blue-200">10-11章</div>
                  <div className="py-2 border-r border-blue-100">12~23章</div>
                  <div className="py-2 border-r border-blue-200">24~26章</div>
                  <div className="py-2 border-r border-blue-100">27~36章</div>
                  <div className="py-2">37~50章</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 肆、本書五大部 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('parts')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-indigo-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">肆、本書的內容</span>
          </div>
          {expanded['parts'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['parts'] && (
          <div className="p-5 bg-white space-y-3">
            <p className="text-gray-700 leading-relaxed">
              本書書名是《指向終末的創世記》，其內容包含五大部，也是創世記的五個段落，這五部可簡稱為創造、伊甸、方舟、選召、掌權，分別講到神、羔羊、拯救、稱義、得勝。兩兩相對應如下：<strong>創造──神、伊甸──羔羊、方舟──拯救、選召──稱義、掌權──得勝</strong>。每部各有十二章。既然是指向終末，因此各部都包含有關基督的預言與預表，關聯到基督的降生、成長、傳道、救贖、復活、升天、再來、禧年國度、新天新地等。
            </p>
            <div className="space-y-2">
              {[
                { num: '第一部', title: '從創造到安息', desc: '經文範圍在創世記一章至二章3節，主要講神的創造與安息，包含起初與終末、神創造天地、聖靈的工作，生命的真光、天空上的水、陸地與植物、日月與眾星、安息的生命、豐盛的生命、我們的形像、掌權的生命、神與人安息等十二章。' },
                { num: '第二部', title: '從伊甸到救贖', desc: '經文範圍在創世記二章4節至三章，主要講伊甸園裡發生的事，包含神精心造人、伊甸園與河、設立生命樹、分別善惡樹、單身的亞當、神設立婚姻、蛇魔鬼撒但、撒但的謊言、人犯罪墮落、神審判撒但、長遠的爭戰、咒詛與救贖等十二章。' },
                { num: '第三部', title: '從羔羊到方舟', desc: '經文範圍在創世記四章至七章，主要講離開伊甸園到大洪水來臨的故事，包含該隱與亞伯、失去根的人、該隱的後裔、塞特的後裔、以諾的一生、神的兒子們、人與神的心、完全人挪亞、傳道者挪亞、挪亞造方舟、你和你全家、洪水與方舟等十二章。' },
                { num: '第四部', title: '從紀念到選召', desc: '經文範圍在創世記八章至廿三章，主要講離開方舟到信心之父亞伯拉罕的故事，包含紀念與獻祭、賜福與立約、咒詛與祝福、三個大族群、巴別亂口音、生養與離開、呼召與拯救、寄居與不爭、爭戰與奉獻、肉體的拆毀、屬靈的新造、獻上獨生子等十二章。' },
                { num: '第五部', title: '從安息到掌權', desc: '經文範圍在創世記廿四章至五十章，主要講以撒、雅各至猶大、約瑟的事情，包含以撒的一生、神堅定立約、抓取到分享、生命的豐盛、為父的雅各、雅各與約瑟、神寬廣的愛、約瑟的一生、猶大的故事、約瑟的人格、豐年與荒年、基督的預表等十二章。' },
              ].map((part, i) => (
                <div key={i} className="bg-indigo-50 rounded-lg p-3 border border-indigo-100">
                  <span className="font-semibold text-indigo-800">{part.num}「{part.title}」</span>
                  <p className="text-gray-700 text-sm mt-1">{part.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 伍、本書六大特色 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('features')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-indigo-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">伍、本書的特色</span>
          </div>
          {expanded['features'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['features'] && (
          <div className="p-5 bg-white space-y-3">
            <p className="text-gray-700 leading-relaxed">
              許多人寫創世記的書，有些比較學術性，有些比較靈修性，這些對理解創世記都是重要的。有需要再多寫一本有關創世記的書嗎？答案是肯定的。本書的五個特色是其他有關創世記的書比較沒有特別著重的，這些能幫助眾同工、信徒，對創世記有一個更寬廣、細膩的理解，而有助於靈命、生活、事奉更大的提升。
            </p>
            {[
              { num: '一', title: '與基督及終末相關', desc: '本書各章內容幾乎都包含基督的預表及福音的內容，關聯到基督的降生、成長、傳道、救贖、復活、升天、再來等。基督的降生已經開啟了終末，使整個世界進入末世，因為基督的受死與復活帶來拯救，這拯救關乎以色列，也關乎萬國萬民。福音傳遍全地後，基督還要再來，在全地掌權，實現創世記一28神給人的使命。創世記內容所預表的包括基督第一次來與第二次來。' },
              { num: '二', title: '與律法及福音相關', desc: '分別善惡樹與生命樹在創世記二章出現，本書指出，這兩棵樹分別標示了律法與福音的道路。人吃分別善惡樹的果子，就走在律法的道路上；人吃生命樹的果子，就走在福音的道路上。雖然生命樹要到新天新地時才會再出現，但羔羊的救恩早已及時臨到，使亞伯、以諾、挪亞、亞伯拉罕都能走在福音與生命的道路，而非律法與死亡的道路。這是兩條有關生死禍福的道路，從創世記連貫到啟示錄。' },
              { num: '三', title: '與科學的辯證相關', desc: '福音派學者，多數對進化論採取接納的態度，認為既然是科學界的共識，就不要製造對立。筆者本科所學是物理學，比較了解真科學與假科學的分野，也了解已驗證的事實與尚未取得驗證的假說之間的分野。因此本書有部分篇幅，會指出進化論的問題，也稍微探討地球年齡及宇宙年齡的問題；並以聖經為本，提供創造論詮釋的合理視角。這方面對我們解讀創世記也是很重要的。' },
              { num: '四', title: '與靈命及教牧相關', desc: '本書沒有很深的學術討論，比較著重在以經解經及靈命、教牧的應用。舉例來說，第二、三章生命樹與分別善惡樹的意義，固然跟自由意志有關，更重要是跟靈命及教牧相關，本書有深入的分享。第六章神的兒子是誰，不同的解釋帶出不同的應用，本書提供有別於一般福音派的見解，可有更切合實際的應用。第九章挪亞咒詛的小兒子是誰，本書有深入的分析，提供更切合靈命與教牧的應用。本書也多次從不同經文帶出這世代肉身生養、屬靈生養、牧養宣教的呼召與實踐。' },
              { num: '五', title: '與華人的信仰相關', desc: '創世記一至九章內容的主要見證人及上古歷史的主要傳承者，乃是挪亞。全世界的人都是挪亞的後裔，挪亞兒子閃的後代主要是亞洲人，佔世界人口二分之一，而華人佔全世界人口近四分之一，因此閃的後代幾乎一半是華人。可推知，華人最早的祖先與挪亞、閃在世的時間有重疊。中國字所留存的見證及華人古代信仰的內涵必皆來自挪亞與閃。因此本書內容除了以解釋聖經為主之外，有些篇章也會引用華人古代文化中的信仰素材。' },
              { num: '六', title: '人稱代名詞的使用', desc: '本書提到神／上帝、基督，需要使用代名詞時，基本上是用「祂」，而不是「他」，這種用法與和合本聖經一致。講神／上帝固然可以用「祂」，講基督卻不能只用「他」，因為用「他」就否定了基督的神性，用「她」就否定了基督的人性，因此一律用「祂」，這個「祂」可包含神性與人性，這是和合本與本書使用「祂」的共同原因。此外，和合本聖經有「神」版與「上帝」版兩種，本書多數用「神」，但為了詞句的感覺或字數的配合，有時也用「上帝」。' },
            ].map((f, i) => (
              <div key={i} className="border-l-4 border-indigo-400 pl-4 py-1">
                <span className="font-semibold text-indigo-800">{f.num}、{f.title}</span>
                <p className="text-gray-700 text-sm mt-1 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
