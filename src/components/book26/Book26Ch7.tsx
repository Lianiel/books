import React, { useState } from 'react';
import { Users, ChevronDown, ChevronUp, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book26Ch7() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true, summary: true, exploration: true, questions: true, practice: true
  });
  const toggle = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-rose-600 to-red-700 bg-clip-text text-transparent">第 7 章</h1>
        <h2 className="text-xl font-semibold text-gray-700">講者對談</h2>
        <p className="text-base text-gray-500">從不同角度反思言語的力量</p>
        <p className="text-sm text-gray-400 mt-1">約翰・派博、馬克・德里斯科爾、辛克萊・弗格森等</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-rose-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('content')} className="w-full px-5 py-3 bg-gradient-to-r from-rose-50 to-red-50 hover:from-rose-100 hover:to-red-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-rose-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-rose-700 mb-2">一、弗格森的講道評析：從雅各書傳講基督</h3>
              <p className="text-gray-700 leading-relaxed">對談以講者之間互相評論彼此的講道開始。弗格森在評析辛克萊的講道時，指出一個精彩的結構性觀察：辛克萊從二十條決志（設置了律法主義的框架）出發，然後透過雅各書 1:18 回到福音，再回到以賽亞書展開救主的角色。弗格森特別讚賞這種「先律法、後福音」的結構在雅各書這種智慧文學中的運用——雅各書很少直接說福音，卻能以這種方式讓福音通透整卷書。</p>
              <p className="text-gray-700 leading-relaxed mt-2">這個討論揭示了一個重要的講道原則：每一卷聖經都應該指向基督，即使它不直接說基督。智慧文學（如雅各書、箴言、傳道書）在這方面有獨特的挑戰，需要講道者更深入地尋找基督在每段經文中的位置。</p>
            </div>
            <div>
              <h3 className="font-bold text-rose-700 mb-2">二、派博論「選擇寫作和傳道主題」的五個準則</h3>
              <p className="text-gray-700 leading-relaxed">派博在對談中分享了他選擇寫作和傳道主題的五個個人準則，這些準則對於任何教師和傳道人都有參考價值：</p>
              <p className="text-gray-700 leading-relaxed mt-2">第一，「這個問題的答案已知嗎？」——派博傾向於深入那些他認為聖經還沒有被充分解讀的議題，而非重複已被說了千遍的。第二，「它與我的神學傳統如何關聯？」——他明白自己不可能對所有議題都有足夠的學術深度，所以他依賴其他學者在他不擅長的領域的工作，而專注在他有深度的地方。第三，「它是否符合我的處境？」——身為牧師，他更傾向於處理他的會眾正在面對的議題，而非純學術性的論題。</p>
              <p className="text-gray-700 leading-relaxed mt-2">第四，「它是否讓我在睡覺和起床時都魂牽夢繫？」——派博認為，傳道人應該只傳講讓自己無法釋懷的主題。如果一個主題不讓他在凌晨三點也思念，那大概就不應該成為他的傳道主題。第五，「它是否是我的家人、教會、同工正在面對的？」——越切身的議題，傳講的負擔越真實，影響也越深入。</p>
            </div>
            <div>
              <h3 className="font-bold text-rose-700 mb-2">三、德里斯科爾論如何回應批評——比利・葛培理的模式</h3>
              <p className="text-gray-700 leading-relaxed">德里斯科爾在對談中詳細分享了他從比利・葛培理傳記中學到的功課。葛培理的原則是：主動接觸他最激烈的批評者，帶著一個真誠的問題：「即使你的態度是對抗性的，你的動機可能是惡意的，你引用的事實可能是錯誤的——但其中有沒有哪怕一粒真理的種子，是我需要認真考慮的？」</p>
              <p className="text-gray-700 leading-relaxed mt-2">德里斯科爾說，在他自己成為領袖之後，這個模式對他有深遠的影響。他也開始區分兩種批評：一種是來自「有盼望和愛」的人的批評——像派博和 C.J. 馬哈尼這樣的朋友的批評，他願意放在心上；另一種是「狙擊手式」的批評——那些在網路上攻擊他、根本不認識他、也不真正關心他的人的話，雖然令人痛苦，但在屬靈上的份量是不同的。</p>
            </div>
            <div>
              <h3 className="font-bold text-rose-700 mb-2">四、弗格森論以基督為詮釋詩篇的透鏡</h3>
              <p className="text-gray-700 leading-relaxed">弗格森在對談末尾分享了他對詩篇詮釋的基本立場。他說，雖然他不是舊約或新約學者，也沒有在詮釋學上做過最深入的研究，但他學到了一個基本本能：「以基督為詩篇詮釋的透鏡」。他嘗試從多個維度閱讀詩篇：這首詩告訴我關於基督的什麼？它如何讓我更像基督？它帶我進入哪個讓我靠近基督的模式？</p>
              <p className="text-gray-700 leading-relaxed mt-2">弗格森坦誠地說：「這對我來說是一個根本性的直覺，而不是系統性的學術框架。」這種謙遜的承認，反映了真正的神學家的氣質：他明白自己的限制，同時不放棄尋求的方向。他的核心問題永遠是：「這段聖經如何讓我更像基督？」</p>
            </div>
            <div>
              <h3 className="font-bold text-rose-700 mb-2">五、言語與神的奇妙——整合性反思</h3>
              <p className="text-gray-700 leading-relaxed">這本書的標題「言語的力量與神的奇妙」在整個對談中得到了最深刻的詮釋。所有參與者都同意：基督徒言語生活的最大問題，不是技巧問題，而是神學問題和靈命問題。我們說什麼話，反映了我們對神是誰、對我們是誰、對他人是誰的最深理解。</p>
              <p className="text-gray-700 leading-relaxed mt-2">「神的奇妙」在言語問題上，體現在這個矛盾中：神選擇以言語來創造（「神說，要有光」），以言語來救贖（「道成肉身」），以言語來更新（「神的道……活潑有力，……能辨明心中的思念和意念」，來 4:12）。這個神選擇透過言語工作的事實，賦予了人類一切言語行為最深刻的神學意義。</p>
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
                '每卷聖經都應該指向基督，即使不直接說基督；講道者的任務是在每段經文中尋找基督的位置。',
                '派博的五個選題準則：尚未被充分解答的問題、符合個人神學傳統、適合處境、令人魂牽夢繫、切身相關。',
                '真正的友誼批評（有盼望和愛）與狙擊手式批評（只有傷害的慾望）有本質上的不同，應該區別對待。',
                '以基督為詮釋透鏡的基本直覺：每段聖經的問題都可以是「這如何讓我更像基督？」',
                '基督徒言語問題的根本不是技巧問題，而是神學和靈命問題——我們的話反映我們對神和人的最深信念。',
                '神自己透過言語創造、救贖和更新，這賦予了人類所有言語行為最深刻的神學重量。',
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
              <h4 className="font-semibold text-gray-800 mb-2">從詩篇讀基督——改革宗的詮釋傳統</h4>
              <p className="text-gray-700 leading-relaxed">弗格森的「以基督為詩篇透鏡」，根植於改革宗的詮釋傳統。奧古斯丁相信詩篇是基督祈禱的書，因此每篇詩篇都有一個「說話者」的問題——有些是信徒對基督說話，有些是基督對父神說話，有些是教會對基督說話。加爾文也在詩篇注釋中系統性地尋找每篇的基督指向。這個傳統不是強加意思於文本，而是承認舊約聖經的設計本就指向彌賽亞。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「魂牽夢繫」的主題才值得傳講</h4>
              <p className="text-gray-700 leading-relaxed">派博「凌晨三點也思念的主題」這個準則，反映了他對傳道事工的深層理解。他相信，講道者首先要被自己所傳的信息燃燒，聽眾才能被點燃。這與司布真的名言有呼應：「如果你自己的薪柴不燃燒，你又怎麼點燃別人？」這個準則也隱含一個警告：職業性的傳道（為了完成任務而傳道）和燃燒性的傳道（被信息所驅動而傳道）之間有著根本性的靈命差異。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「道成肉身」作為言語神學的終極根基</h4>
              <p className="text-gray-700 leading-relaxed">整本書的核心張力，在對談中得到最深刻的解決：言語為何如此重要，是因為言語是神選擇與人相遇的方式。創世記 1 章，神說話，世界被造。約翰福音 1 章，神的言語（道）本身成了肉身。希伯來書 4:12，神的道是活潑有力的。啟示錄，神的最後話語說「成了」。言語不是人類的發明，而是神的本性的延伸——在這個意義上，所有的言語都帶有神學的重量，都是在神的言語行動的大框架中進行的。</p>
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
              '在你的信仰群體中，目前有沒有讓你「魂牽夢繫」的屬靈課題——那些你無法停止思考的問題？那是什麼？',
              '弗格森的問題「這段聖經如何讓我更像基督？」作為詮釋聖經的第一問題，你認為這個問題是否能應用在你的讀經和查經中？',
              '在你的生命中，誰是那個「有盼望和愛」的人，讓你能夠接受他/她的批評，而不是立即防衛？',
              '回顧整本書的六個主題（言語與心、舌頭的控制、基督徒的雄辯、尖銳言語、故事、歌唱），哪一章對你的挑戰最大？',
              '「神用言語創造，用言語救贖，用言語更新」——這個事實如何改變你看待自己每天的言語的方式？',
              '讀完這本書，你認為在你的言語生活中，最需要在接下來一個月改變的一件事是什麼？',
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 全書的一個行動決定</h4>
              <p className="text-gray-700 mb-2">讀完整本書後，寫下一個具體、可執行的行動決定：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>這個決定針對你言語生活中最需要改變的一個領域</li>
                <li>要具體到「我每天/每週/每月要做什麼」的程度</li>
                <li>找一個人分享這個決定，讓他幫助你負責</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">👥 分享閱讀</h4>
              <p className="text-gray-700 mb-2">向一位朋友或小組成員推薦這本書中對你最有衝擊的一章，並說明原因。信仰的傳遞本身也需要「言語的力量」。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔑 以基督為透鏡讀一篇詩篇</h4>
              <p className="text-gray-700 mb-2">選詩篇中的任何一篇，以「這如何讓我更像基督？」和「這如何指向基督？」為問題，安靜默想 10 分鐘，寫下你的觀察。</p>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm font-semibold text-green-700 mb-1">🙏 全書總結禱告</p>
              <p className="text-sm text-gray-700 italic">「主啊，在這本書的學習中，我看見了自己言語的真實狀況。我的話有時出於自私的心，有時傷害了人，有時也讓祢的榮耀蒙羞。求祢更新我的心，因為從心裡發出的才是我所說的。求祢讓我的話成為恩典，讓我的沉默成為智慧，讓我的辯護成為護衛，讓我的故事成為傳遞，讓我的歌唱成為永恆詩班的一部分。感謝祢選擇透過言語與我們相遇——透過那成了肉身的永恆之道。阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
