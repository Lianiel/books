import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Search, HelpCircle, Check, Star } from 'lucide-react';

export default function Book19Ch1() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">主題一</h1>
        <h2 className="text-xl font-semibold text-gray-700">🌱 新生命的基礎</h2>
        <p className="text-gray-500 text-sm mt-1">第1-8章、第26、38、52章</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">第1章：新生命的本質</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                所有相信主耶穌的人，都從神那裡領受了一個全新的、屬神的生命，即「永生」。這個新生命不是今生肉體的不死，而是神亙古以來就有的、在基督裡彰顯出來的神聖生命。它具有驚人的內在能力，如同植物的種子一樣，擁有茁壯成長的力量。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                有兩個主要障礙阻礙新生命成長：其一是<span className="font-semibold">對新生命的無知</span>——許多基督徒雖已重生，卻仍用屬世的眼光看待屬神的事，不理解新生命的法則和運作方式；其二是<span className="font-semibold">憑感覺不憑信心</span>——新生命的能力是看不見、也常常感覺不到的，年輕的基督徒因此容易灰心。我們必須學會完全依賴那在基督裡為我們預備好的生命，相信基督就是我們的生命。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">第2章：靈奶——成長的四個功課</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                重生得救的基督徒如同初生的嬰兒，需要愛慕那純淨的靈奶——神的話語——才能漸漸長大、變得強壯。成長的四個關鍵功課：
              </p>
              <div className="space-y-2 ml-4">
                <p className="text-gray-700"><span className="font-semibold">（1）認識自己的身份：</span>確信自己是神的兒女，這是你敢於享用靈糧、有勇氣成長的基礎。</p>
                <p className="text-gray-700"><span className="font-semibold">（2）認識自己的軟弱：</span>承認自己像嬰孩一樣幼小軟弱，這種謙卑使你完全依靠主。</p>
                <p className="text-gray-700"><span className="font-semibold">（3）成長的必然性：</span>你不應該始終軟弱，神的話命令並應許你會成長。</p>
                <p className="text-gray-700"><span className="font-semibold">（4）成長的方法：</span>成長唯一的途徑是靠靈奶——神的話語。神的話如同母親的乳汁，將祂的生命和能力傳遞給我們。</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">第3章：神的道在我們心裡</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                要讓神的話語成為生命的滋養，就必須將它「存在心內，留在意中」。人的內心如同神的殿，有外院和至聖所。我們通過「理解力」這扇門，將神的話迎入外院；通過「記憶和深思」讓它留在那裡；但要讓它真正進入至聖所，則必須通過「信心」這道門。
              </p>
              <p className="text-gray-700 leading-relaxed">
                三個具體步驟：<span className="font-semibold">用心領會</span>（努力理解所讀的經文）、<span className="font-semibold">常常思想</span>（將神的話像種子一樣給予充足時間在心裡紮根）、<span className="font-semibold">全心獻上</span>（將愛、期盼和意志都完全服從於神的話）。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">第4-5章：信心與神話語的功效</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                信心就是全然確信神所說的話都是真實無誤的。信心始終與神所說的話或應許緊密相連——神說話，就必然照著去行。信心使我們能夠因神的話而喜悅，即便我們還沒有親眼看見或感覺到。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                一個常見的錯誤是以為需要憑自己強大的信心才能讓神的話語應驗。事實上，神的話語本身是活潑的、有功效的，它如同種子，本身就蘊含著屬神的生命力。「通道是從聽道來的」——當你憑著內心的渴望說「祂的話是真實的，我要相信」，神活潑的話語就會在你裡面造就出活潑的信心。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">第6-8章：完全擁有耶穌</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                神愛我們，不是賜下某個福分，而是將一個有靈的活人——祂獨生的愛子耶穌——賜給了我們。在耶穌基督裡，我們便擁有了一切。「人有了神的兒子就有生命。」我們所需要作的，就是接納這個恩賜，把耶穌當作屬於我們自己的來享用。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                耶穌為我們捨己，祂捨己的目的是要洗淨我們，使我們成為聖潔。這種捨己的行動具有相互吸引的能力：祂為我們捨己是為了得著我們；當我們領會祂的捨己，便將自己獻上。「凡接待祂的，就是信祂名的人，祂就賜他們權柄，作神的兒女。」這句話適用於我們每一天——我們要每天不斷地重新接納神的兒子耶穌，讓內心和生命完全被祂所充滿。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">第26、38、52章：信心生命的確據</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「義人必因信得生」這句話不僅指歸正時的稱義，更指義人生命的每一刻都必須依靠信心。真正從信心得來的生命，就是保羅所說的：「我已經與基督同釘十字架，現在活著的，不再是我，乃是基督在我裡面活著。」我們不再靠自己活，而是基督藉著聖靈在我們裡面活，成為我們的能力。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                信心的保障有三個憑據：<span className="font-semibold">相信神的話</span>（神的道本身就是最堅固的保障）、<span className="font-semibold">付諸實際的行動</span>（信心會因著行為才得以成全）、<span className="font-semibold">聖靈的見證</span>（「我們所以知道神住在我們裡面，是因祂所賜給我們的聖靈」）。
              </p>
              <p className="text-gray-700 leading-relaxed italic border-l-4 border-purple-200 pl-4">
                「神是那位為我成全諸事的神。」祂既已在我們身上動工，祂的信實、慈愛和能力都保證了祂必會成全，直到耶穌基督的日子。我們唯一的條件就是相信祂，並憑信心宣告：「耶和華必成全關乎我的事。」
              </p>
            </div>

          </div>
        )}
      </div>

      {/* 重點總結 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 flex items-center gap-2">
          <Star className="w-5 h-5 text-teal-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">重點總結</span>
        </div>
        <div className="p-5 bg-white space-y-3">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold">1</span>
            <p className="text-gray-700 leading-relaxed"><span className="font-semibold">新生命是神聖的種子：</span>信徒所領受的不只是一種道德改善，而是神亙古以來就有的神聖生命，這個生命在基督裡彰顯，擁有本質上的能力和成長潛能。認識這個生命的榮耀本質，是一切屬靈成長的起點。</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold">2</span>
            <p className="text-gray-700 leading-relaxed"><span className="font-semibold">靈奶（神的話）是新生命的糧食：</span>新生命的成長有固定的養料——神的話語。不是靠感覺、不是靠努力、不是靠行善，而是藉著謙卑地愛慕並接納神的話，讓它從外院（理解）進入至聖所（信心和意志）。</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold">3</span>
            <p className="text-gray-700 leading-relaxed"><span className="font-semibold">信心是新生命的呼吸：</span>信心不是強迫自己相信，而是全然確信神的話是真實的。神的話語本身就是活潑的種子，它會在聆聽和接納的心裡造就出真實的信心。「通道是從聽道來的」——信心不是我們製造出來的，而是神的話語在我們裡面動工的結果。</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold">4</span>
            <p className="text-gray-700 leading-relaxed"><span className="font-semibold">耶穌本人就是新生命的全部：</span>神賜給我們的不是某些福分，而是耶穌基督本人。「人有了神的兒子就有生命」——我們需要的不是更多的宗教活動，而是每天重新接納和經歷這位活著的主，讓祂成為我們的智慧、公義、聖潔和救贖。</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold">5</span>
            <p className="text-gray-700 leading-relaxed"><span className="font-semibold">「我已與基督同釘十字架」是信心生命的核心：</span>義人因信得生，不只是稱義一刻，而是每一天的生命都必須依靠信心。與基督同死、與基督同活——這是保羅描述的信心生命：不再靠自己活，乃是基督在裡面活。神必成全祂所開始的工作。</p>
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
              <h4 className="font-semibold text-gray-800 mb-2">「永生」究竟是什麼？——新生命的神學深度</h4>
              <p className="text-gray-700 leading-relaxed">
                慕安德列所說的「新生命」是指參與神自己的生命性質（2彼1:4「與神的性情有份」）。這不是指肉體的永遠存在，而是一種本質上屬於神的存在方式。約翰福音17:3說「認識你獨一的真神，並且認識你所差來的耶穌基督，這就是永生」——永生的本質是與神的關係，而非僅僅時間上的延伸。這個神學理解說明了為什麼慕安德列如此強調「接納耶穌本人」而非尋求某些屬靈體驗或道德改善。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">感覺與信心的辯證——慕安德列的核心洞見</h4>
              <p className="text-gray-700 leading-relaxed">
                慕安德列特別警告「憑感覺生活」的危險。在19世紀的靈恩復興背景下，許多信徒追求情感上的確據（熱淚、激動、顫抖）作為得救的憑據。慕安德列指出這是本末倒置的：感覺是不穩定的，神的話語才是永恆的。信心的方向是從神的話到確信，而非從感覺到確信。然而他也說明，當信心成熟時，感覺自然會跟隨——「你若信，就必看見神的榮耀」（約11:40）。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「內院/至聖所」的比喻——神話語如何進入心靈深處</h4>
              <p className="text-gray-700 leading-relaxed">
                慕安德列用聖殿的結構來描述神話語進入人心的過程，這是一個深刻的神學意象。外院代表頭腦的理解，至聖所代表意志和愛的核心。許多信徒博學多識，卻不見生命改變，原因是神的話只在「外院」打轉，從未真正進入心靈最深處。要讓神的話進入至聖所，需要的不是更多的知識，而是信心（相信這話是真的）、愛（渴望順服這話）和意志（甘願讓這話改變我）。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「與基督同釘十字架」的生命意義</h4>
              <p className="text-gray-700 leading-relaxed">
                加拉太書2:20「我已與基督同釘十字架，現在活著的不再是我，乃是基督在我裡面活著」，是慕安德列整本書的核心神學命題。這個「同釘十字架」不是指神秘主義的自我消除，而是指法律地位的改變和生命方向的轉換——舊的自我（以自我為中心的生命）已在十字架上與基督同死，新的生命是以基督為中心的、由聖靈賦能的新生命。這個「交換」每天都需要憑信心來承認和活出。
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
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">1.</span>
              <p className="text-gray-700">你認為自己信仰生命中的主要障礙是「對新生命的無知」還是「憑感覺不憑信心」？這個障礙在你生命中具體表現在哪裡？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">神的話語對你來說目前停留在「外院」（頭腦的理解）還是已經進入「至聖所」（意志和愛的核心）？有沒有一節聖經是你「知道」但還沒有「活出來」的？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">「人有了神的兒子就有生命」——你日常的信仰生活是以「擁有耶穌」為核心，還是以「做好基督徒應做的事」為核心？這兩種取向有何實際差異？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">你有多少時候是因為「感覺不到神」而靈命陷入低谷？慕安德列的教導「不憑感覺，憑信心」對你是否有幫助？如何在實際生活中操練這一點？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">「我已與基督同釘十字架」這個神學事實，在你日常面對試探、軟弱或失敗時，是否曾成為你站立的依據？如果還沒有，是什麼阻礙了這個真理在你生命中發揮力量？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">「耶和華必成全關乎我的事」（詩138:8）——你對神在你生命中「成全工作」有多少確信？這個確信是基於什麼基礎？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">📖 建立「愛慕靈奶」的讀經習慣</h4>
              <p className="text-gray-700 mb-2">把讀經從「完成任務」轉變為「接受餵養」的操練：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>每天讀經前先禱告：「主啊，我如同嬰孩，求你用你的話語餵養我。」</li>
                <li>讀完後問自己：「這節經文神要告訴我什麼？我信這話嗎？我願意活出這話嗎？」</li>
                <li>選一節讓你感到困難去相信的經文，每天對主說：「我相信這話是真實的，我選擇依靠它。」</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 每天「接納耶穌」的操練</h4>
              <p className="text-gray-700 mb-2">把「接納耶穌」從一次性的決志變成每日的生命態度：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>每天早晨用一句話向主表達：「主耶穌，你是我今天的生命，我今天接納你。」</li>
                <li>在面對挑戰時，先停一下問：「這件事我是要靠自己處理，還是先把它帶到耶穌面前？」</li>
                <li>睡前回顧今天：什麼時候你是「靠自己活」？什麼時候你是「靠基督活」？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 「與基督同釘十字架」的默想操練</h4>
              <p className="text-gray-700 mb-2">把加拉太書2:20作為本週的默想經文：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>早晨背誦：「我已與基督同釘十字架，現在活著的不再是我，乃是基督在我裡面活著。」</li>
                <li>每當遇到試探、灰心或軟弱，用這句話向自己宣告你的真實身份。</li>
                <li>寫下這週你嘗試「憑信心而非感覺」生活的具體經歷。</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4 mt-4">
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告詞</h4>
              <p className="text-gray-700 italic leading-relaxed">
                天父，感謝你將你獨生的愛子耶穌賜給我，使我擁有真實的新生命。我承認自己常常憑感覺生活，忽視了你話語的能力。求你幫助我每天謙卑地愛慕靈奶，讓你的話語從我的頭腦進入我的心靈深處，讓我活出「不再是我，乃是基督在我裡面活著」的生命。你既已在我裡面開始了這工作，我相信你必成全。奉主耶穌基督的名，阿們。
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
