import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Search, HelpCircle, Check } from 'lucide-react';

export default function Book17Ch8() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    exploration: true,
    questions: true,
    practice: true,
  });

  const toggleSection = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">第八章</h1>
        <h2 className="text-xl font-semibold text-gray-700">面對信仰與處境的張力</h2>
        <p className="text-sm text-gray-500 mt-1">哥林多前書 七1-40</p>
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
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">一、婚姻、性生活與禁欲的問題（七1-9）</h4>
              <p className="text-gray-700 leading-relaxed">七章1節「人不近女為妙」很可能是哥林多人來信中的一句口號，反映了當時教會中部分靈恩派信徒對身體和性的鄙視態度——他們認為靈性越高的人，越應該克制肉體欲望，甚至在婚姻內也應禁欲。保羅對這種極端禁欲主義給予務實的糾正：婚姻是應對性欲的正當、神聖管道，夫妻雙方在性生活上彼此負有義務，不應單方面決定禁欲，除非雙方同意、且是為了禱告的特殊時期。</p>
              <p className="text-gray-700 leading-relaxed mt-2">保羅同時表明個人偏好獨身（「我願意眾人像我一樣」），但立刻補充：「只是各人領受神的恩賜，一個是這樣，一個是那樣。」獨身和婚姻都是恩賜，沒有哪一種更屬靈。給那些未婚卻「沒有節制的恩賜」的人，保羅的建議非常直接：嫁娶比「慾火攻心」更好。這是極為人性化的牧養智慧，拒絕把屬靈境界建立在對身體需要的否定上。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">二、婚姻中的離婚與混合婚姻（七10-16）</h4>
              <p className="text-gray-700 leading-relaxed">保羅在這裡刻意區分兩種情況，並標明不同的權威來源。對於兩個信徒之間的婚姻，他引用「主的命令」：不可離婚，若已分開，要保持獨身或復合。這是有聖經根基的直接指令（參考馬太十九3-9）。</p>
              <p className="text-gray-700 leading-relaxed mt-2">對於混合婚姻（一方信主、一方未信），保羅坦言這是「我的話，不是主的命令」——耶穌沒有明確處理這個新興問題。他的原則是：若不信的配偶願意同住，信主的一方不應主動離婚，因為「不信的丈夫就因著妻子成了聖潔，不信的妻子就因著丈夫成了聖潔」——信主的一方是家庭的祝福管道，不是污染源。若不信的配偶堅持要離開，信主的一方就讓他/她離去，「在這種情形蒙召的，神是召他們和睦」。這個原則在今日仍有深刻的牧養意義，既保護了婚姻的神聖性，也尊重了個人的自由意志。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">三、在現有的呼召中安然居住（七17-24）</h4>
              <p className="text-gray-700 leading-relaxed">這段看似討論割禮與奴隸制度的文字，實際上提出了七章的神學核心原則：「各人蒙召的時候是什麼身份，仍要守住這身份。」割禮或未受割禮，都不是問題所在；奴隸或自由人，在基督裡都已得到最根本的自由或身份。蒙召時的外在處境，不能定義你在神眼中的價值，也不是需要立即改變的障礙。</p>
              <p className="text-gray-700 leading-relaxed mt-2">然而保羅並非倡導對不公義的宿命論接受：「你若能得以自由，就求自由更好。」這句話留下了主動尋求改善的空間，但改善的動力不應是「逃離現有的呼召」，而應是「在任何處境中都以基督為主，以服事神為目的」。最深刻的自由不是改變外在環境，而是無論在什麼環境都能安然服事神——「在主裡蒙召為奴僕的，就是主所釋放的人；在主裡蒙召為自由人的，就是基督的奴僕」（七22）。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">四、末世關懷：對今世事物保持內心自由（七25-35）</h4>
              <p className="text-gray-700 leading-relaxed">保羅建議未嫁的人保持現狀，主要依據是「現今的艱難」和「時候的緊迫」——他相信主再來的時間不遠，在此緊迫的末世背景下，未婚者在事奉上有更大的自由度。七章29-31節是整段文字中最具神學衝擊力的部分：「有妻子的，要像沒有妻子；哀哭的，要像不哀哭；快樂的，要像不快樂；置買的，要像無有所得；用世物的，要像不用世物。因為這世界的樣子將要過去了。」</p>
              <p className="text-gray-700 leading-relaxed mt-2">這不是否定婚姻、情感或現實生活的意義，而是呼籲信徒在一切現實參與中保持內心的「非黏附性」（non-attachment）——全情投入，卻不被捆綁；負責任地使用，卻不以之為終極安全感。這是一種末世的靈魂自由，使人能在任何處境中保持對神的專心。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">五、對未婚者和寡婦的具體建議（七36-40）</h4>
              <p className="text-gray-700 leading-relaxed">保羅最後針對兩個具體情況給出牧養建議：若父親覺得女兒應該出嫁，這是可以的；若有人決定讓女兒守貞，也是更好的。寡婦若再嫁，必須嫁給「在主裡的人」（即信主的弟兄），這是不可讓步的原則；但若選擇獨身，保羅認為這更有福氣。</p>
              <p className="text-gray-700 leading-relaxed mt-2">整章的精神是：保羅不為任何一種生命狀態立下強制的律法，而是在「保護婚姻的神聖」與「肯定獨身的價值」之間，給出充滿牧者智慧的靈活建議，讓信徒在各自的具體處境中做出最有利於事奉神的選擇。</p>
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
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「不近女為妙」——哥林多的靈性禁欲主義是從哪裡來的？</h4>
              <p className="text-gray-700 leading-relaxed">多數學者認為七章1節的「人不近女為妙」是哥林多人來信中的原話，而非保羅自己的主張。這種禁欲思想可能來自希臘的柏拉圖主義（靈魂是高貴的，身體是監獄），也可能來自早期諾斯底主義的影響（物質世界是惡的，屬靈人應超越身體）。部分信徒在受聖靈洗之後，誤以為自己已進入「屬靈人」的境界，不再需要婚姻中的肉身聯合。這種「過度靈化」的傾向在教會史上一再出現，從早期的諾斯底派、中世紀的修道院主義，到今日某些五旬節運動的聖潔標準，都有類似的軌跡。保羅的回應是徹底反對這種二元論：身體是聖靈的殿（六19），婚姻中的身體結合也是神所設立的美好制度，不是屬靈人需要克服的低層次需要。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">婚姻中的「互惠義務」：革命性的平等神學</h4>
              <p className="text-gray-700 leading-relaxed">七章3-4節在古代世界是極為革命性的宣告：「丈夫當給妻子所應得的，妻子待丈夫也要如此。妻子沒有自己身子的主權，乃在丈夫；丈夫也沒有自己身子的主權，乃在妻子。」在當時羅馬文化中，妻子的身體在法律上屬於丈夫，但先生的身體完全是自己的財產。保羅在這裡確立了完全對等的婚姻義務：不只妻子對丈夫有義務，丈夫對妻子也同等有義務。這種雙向、互惠的婚姻神學，在古代社會背景下幾乎是聞所未聞的，深刻反映了「在基督裡無男女之分」（加三28）的精神。今日我們習以為常的婚姻平等觀念，在兩千年前曾是保羅帶來的激進神學。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「不信的配偶因信主的一方成為聖潔」——這句話的神學意涵</h4>
              <p className="text-gray-700 leading-relaxed">七章14節是整段最容易被誤解的一節。保羅說不信的配偶「因著」（en）信主的配偶成了聖潔，孩子也是聖潔的。這不是說不信的配偶自動得救，也不是說婚姻本身有救贖功效，而是說：在婚姻關係中，神的聖潔透過信主的一方「蔓延」到整個家庭，使整個家庭處於神的恩典影響之下（而非污染之中）。這是「祝福媒介」的神學：信主的一方不是被不信的配偶「污染」，反而是家庭中神恩典的管道。這也解釋了為何保羅不鼓勵信主者主動離開不信的配偶——離開，是斷絕了那個家庭接觸福音最自然的橋樑。今日許多「拯救另一半」的禱告和見證，正是這個神學的現代印證。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「在被召之處安然居住」：處境神學還是宿命論？</h4>
              <p className="text-gray-700 leading-relaxed">七章17-24節是保羅書信中最被誤用的段落之一。廢奴主義者批評說，這段話被用來論證奴隸制度是神所定的秩序，信徒應安心接受。然而仔細閱讀，保羅的重點並非要奴僕接受不義的制度，而是說：你的靈性地位和神的呼召，不被外在社會身份所定義。奴隸在基督裡是自由人，自由人在基督裡是奴僕——這是一種「身份的翻轉」，而非對現實的消極接受。「若能得以自由，就求自由更好」（七21），清楚說明保羅並不反對改善外在處境。這段話的神學要點是：改變處境的動力應來自「在此處更好地服事神」，而不是「逃離不舒適的現實」。真正的問題不是「我在哪裡」，而是「我在哪裡以基督為主」。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">末世觀下的「非黏附性」：與世界全情相遇，卻不被捆綁</h4>
              <p className="text-gray-700 leading-relaxed">七章29-31節所描述的靈性態度，與佛教的「無執」（non-attachment）看似相似，實則有根本的神學差異。佛教的無執是因為一切都是幻象，無值得執著者；保羅的「非黏附性」卻是因為更美好的實相正在來臨——基督的再來和神國的完成，才是終極的實在。因此信徒可以全情投入婚姻、悲喜、事業，因為這些都是真實的；但對它們的依附不能超越對神國的盼望，因為這些都是「今世的形狀」，是暫時的。這種末世觀塑造了一種特別的人生態度：充分活在當下，卻不以當下為永恆；全力投入現實，卻不讓現實成為靈魂的枷鎖。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「我的意見，不是主的命令」：使徒的謙遜與啟示的邊界</h4>
              <p className="text-gray-700 leading-relaxed">第七章中保羅至少五次明確標示他在說「我的意見」或「這是我說的，不是主說的」（七6、10、12、25、40）。這種細緻的區分，展示了一種屬靈的謙遜：即使是蒙神特別揀選的使徒，在某些沒有直接啟示的問題上，也只能以蒙聖靈的人的「判斷」來作回應，而不是以「主如此說」的命令口吻說話。這對今日教會有深刻的挑戰：許多領袖習慣以「神的話」或「聖靈感動我說」來包裝自己的判斷，甚至利用這種語言壓制問題和質疑。保羅的謙遜表明：忠心傳道，包括誠實說出「這是我的判斷，不是神的命令」——這種謙遜反而更能建立人對聖靈真實工作的信任。</p>
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
              <p className="text-gray-700">你的教會文化對婚姻和獨身的態度是什麼？是否存在「已婚才算完整」或「單身才能更屬靈」的隱性壓力？這種文化氛圍對你個人或你身邊的人造成了什麼影響？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">保羅說婚姻中的性是夫妻「應盡的義務」，且是雙向對等的。這個觀點如何挑戰或確認你對婚姻中身體關係的理解？你是否曾因「屬靈」的理由，或因各種繁忙，而忽視了這份義務？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">若你或你身邊有人處於混合婚姻（一方信主、一方未信），你如何理解「不信的配偶因著信主的一方成為聖潔」這句話？這句話對於如何在婚姻中活出信仰有何實際指導意義？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">「在現有的呼召中安然居住」——誠實面對自己：你目前的處境（工作、婚姻、生活環境、身體狀況）中，有哪些是你強烈想要逃離的？保羅的話是否讓你省察，這種逃離衝動的根源是什麼？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">七章29-31節的末世觀讓保羅說出「有妻子的要像沒有妻子，哀哭的要像不哀哭」。你認為這種「非黏附性」的生命態度在今日如何實踐？有沒有你正在「執著得太緊」的事，以至於它開始牽制你對神國的優先次序？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">保羅說「我願意你們沒有掛慮」，指出已婚者的注意力必然要分給配偶和家庭。你如何在婚姻的責任與對神的專心之間取得平衡？你目前的生命節奏是否讓這兩者都有足夠的空間？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">7.</span>
              <p className="text-gray-700">保羅多次說「這是我的意見，不是主的命令」。你是否在信仰生活中遇過領袖或同伴，用「神的話」或「聖靈感動」來表達他們個人的判斷？你如何辨別？這讓你對自己在傳遞信仰時的說話方式有何反省？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">8.</span>
              <p className="text-gray-700">整章的主題是「信仰與處境的張力」。你目前生命中最大的「張力」是什麼——即信仰的理想與現實處境之間最難調和的一個點？保羅七章的哪一段話對你最有幫助？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 「在被召之處榮耀神」的宣告與行動</h4>
              <p className="text-gray-700 mb-2">找一個你目前最想逃離、最不滿意的處境（工作環境、婚姻關係、家庭責任、身體限制），做以下的練習：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>把這個處境帶到神面前，誠實說出你的不滿和逃離的渴望</li>
                <li>然後問神：「祢呼召我在這裡，是要讓我在這裡做什麼？」</li>
                <li>寫下一個具體的行動：在這個處境中，你本週可以做的一件「在被召之處榮耀神」的事</li>
                <li>若確實有改變處境的機會，也可以禱告問神：「這是祢給我的自由嗎？」而不是出於逃避就貿然行動</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💑 婚姻中的「互惠盤點」（已婚者適用）</h4>
              <p className="text-gray-700 mb-2">保羅說婚姻是雙向的義務關係。這週誠實地做一個自我盤點：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>我在婚姻中有沒有長期忽視配偶的某些需要（情感連結、陪伴時間、身體關係）？</li>
                <li>我是否曾以「忙碌」、「屬靈事務」或「身體疲憊」為由，單方面在某個層面「退出」婚姻？</li>
                <li>與配偶有一次坦誠的對話：「我希望我們在哪個層面可以更靠近？」不是指責，而是邀請</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">⏰ 「末世眼光」的一週練習</h4>
              <p className="text-gray-700 mb-2">選擇一件你正在過度執著或憂慮的事（人際關係、財務狀況、工作前景、子女未來），進行為期一週的靈性練習：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>每天早晨默想：「這件事在永恆的維度中，有多重要？今世的形狀是會過去的。」</li>
                <li>每當對這件事的焦慮升起，就對神說：「主，我把它放在祢手裡。我選擇以神國為優先。」</li>
                <li>一週後，記錄這個練習帶來了什麼變化：是內心更自由了，還是焦慮反而更深？把這個觀察帶到禱告中與神分享</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 辨別「神的命令」與「人的意見」的練習</h4>
              <p className="text-gray-700 mb-2">保羅謹慎區分啟示與個人判斷，這對我們傳遞信仰的方式是挑戰。這週做以下的反省：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>回想你最近傳達給別人的一個信仰建議或立場，誠實評估：這是聖經的明確教導，還是我的個人詮釋？</li>
                <li>練習在表達個人見解時，加上「我個人認為」或「我的理解是」，而不是「神說」或「聖靈感動我告訴你」</li>
                <li>若你是小組長或事奉同工，思考：在你的帶領中，有沒有你「以神的名義」說出的話，其實是你的偏好或文化觀念？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 給單身弟兄姊妹的具體鼓勵（適用於有此感召的人）</h4>
              <p className="text-gray-700 mb-2">若你身邊有單身的弟兄姊妹，教會文化是否讓他們感到被邊緣化或被催婚？這週嘗試：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>主動關心他們，詢問的重點不是「有沒有對象」，而是「最近在哪方面服事神？有什麼挑戰？」</li>
                <li>若你自己是單身者，這週用一段時間感謝神在你此刻的身份中給你的自由和可能性，而不只是盼望改變現狀</li>
                <li>思考：你的教會是否有空間讓單身信徒的恩賜充分發揮，而不是等他們「成家」後才被委以重任？</li>
              </ul>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-sm text-green-800 font-medium mb-1">本週禱告</p>
              <p className="text-gray-700 text-lg leading-relaxed italic">
                「主啊，謝謝祢在我具體的處境中呼召了我——不是等我的處境完美才呼召，而是就在這裡、就在現在。讓我不只是渴望逃離，而是有勇氣問：祢要我在這裡做什麼？讓我在婚姻中以愛負責任，在獨身中以自由事奉祢。讓末世的盼望鬆開我對今世事物的過度執著，讓我用祢的眼光看待我的選擇和處境。讓我在傳遞信仰時有保羅的謙遜：知道什麼是祢的命令，什麼是我的判斷，不以自己的聲音冒充祢的聲音。奉主耶穌基督的名禱告，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
