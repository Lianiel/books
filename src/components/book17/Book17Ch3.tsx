import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star, Users, Search, HelpCircle, Check } from 'lucide-react';

export default function Book17Ch3() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    application: true,
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">第三章</h1>
        <h2 className="text-xl font-semibold text-gray-700">十字架的資訊與屬靈的智慧</h2>
        <p className="text-sm text-gray-500 mt-1">哥林多前書 二1-16</p>
      </div>

      {/* 經文要義 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">經文要義</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">一、保羅傳道的方式（二1-5）</h4>
              <p className="text-gray-700 leading-relaxed">保羅到哥林多時，不是用高言大智，乃是決定不知道別的，只知道耶穌基督，並祂釘十字架。他在軟弱、恐懼、戰兢中傳道，刻意不用「智慧委婉的言語」。原因是：信仰的根基必須建立在「神的大能」上，而非人的說服力。若靠口才制勝，信仰就隨著傳道者的魅力起伏，無法持久。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">二、神的智慧與世人的智慧（二6-9）</h4>
              <p className="text-gray-700 leading-relaxed">保羅並非反對智慧，他在成熟的人中也講智慧——但這智慧不是本世界的智慧，也不是將要廢去的掌權者的智慧，而是「神在萬古以前預定」的奧秘智慧，即基督的救恩計畫。這智慧使人蒙福，是眼未曾見、耳未曾聽、心未曾想過的事。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">三、聖靈的啟示與教導（二10-16）</h4>
              <p className="text-gray-700 leading-relaxed">神的智慧只能藉聖靈啟示。聖靈搜尋神的深奧事，就如一個人的靈知道自己的事。保羅對比兩種人：屬肉體的人不領受神的事，以為愚拙；屬靈的人卻能看透萬事。信徒「有基督的心」——這是一個令人震驚的宣告，表明我們可以藉聖靈的教導，認識並接受神的心意。</p>
            </div>
          </div>
        )}
      </div>

      {/* 省思與應用 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('application')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-teal-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">省思與應用</span>
          </div>
          {expanded['application'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['application'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-teal-700 mb-2">傳道者、十架與智慧</h4>
              <p className="text-gray-700 leading-relaxed mb-3">作者年輕時聽過許多奮興佈道家，也接觸過伯特利佈道團成員的講道訓練。這些都有一個共同預設：傳道者若要有效，需要「靠聖靈大能」，而不是靠技巧。然而保羅不是在作這種對比。他並非說「有學問、有技巧是錯的」——事實上，他在哥林多之前在雅典作的那篇佈道，就充分運用了智識能力，那次演講值得我們學習。</p>
              <p className="text-gray-700 leading-relaxed mb-3">保羅真正想說的是：資訊比方法更重要。現今有人把「屬靈四律」當作百分百有效的福音工具，但其背後其實是商場促銷的方法論——把人引導到一個決定點。方法本身不一定壞，但若以為掌握了方法就能保證果效，就錯了。有傳道者在街頭向一位婦女佈道，用了全套方法卻毫無果效；也有在創啟地區（限制性地區）宣教的例子，在完全無法公開傳福音的情況下，神仍然建立了教會。</p>
              <p className="text-gray-700 leading-relaxed">對亞波羅，保羅的態度值得注意：他從不貶低亞波羅的口才。亞波羅有口才是好的，問題不在他有口才，而在信徒把他偶像化。衡量傳道者是否成功，不能只看在世時的數字，更要看他死後還有多少人繼續活出所聽到的信息。</p>
            </div>
            <div>
              <h4 className="font-semibold text-teal-700 mb-2">傳道者、聖靈與智慧</h4>
              <p className="text-gray-700 leading-relaxed mb-3">聖靈在傳福音的過程中有五個環節的工作：第一，測透神深奧事（10節）——聖靈知道神一切的心意；第二，啟示傳道者（10節）——把神的心意告訴傳道者；第三，讓傳道者明白（12節）——不只知道，更要真正理解；第四，教導傳道者用適當的語言表達（13節）；第五，使信徒能夠領悟（14-15節）。這五個環節環環相扣，缺一不可。</p>
              <p className="text-gray-700 leading-relaxed mb-3">這告訴我們：聖道不能離開聖靈，聖靈不能離開聖道。單強調聖靈而忽視聖道，會流於情感主義；單強調聖道而不求聖靈，會流於理智主義。在福音本色化（contextualization）的工作中，要注意底線：可以用文化的語言和形式，但不能改變福音的內容。</p>
              <p className="text-gray-700 leading-relaxed">整章最後以一句令人振奮的話作結：「我們是現在有基督的心意了！」這個「現在」充滿末世意義——不是將來，是現在！信徒在聖靈裡已經有了認識神旨意的管道，這是何等的特權與責任。</p>
            </div>
            <div className="mt-2 p-4 bg-teal-50 rounded-lg border border-teal-100">
              <p className="font-medium text-teal-800 mb-2">默想</p>
              <p className="text-gray-700 leading-relaxed italic">「傳福音的效果，不在方法的高明，乃在資訊的純正，以及聖靈在整個過程中的工作。傳道者的責任，是忠心地把基督和十架交託給人，其餘的交給聖靈。」</p>
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
              <h4 className="font-semibold text-indigo-700 mb-2">保羅在雅典的演講與哥林多的策略差異</h4>
              <p className="text-gray-700 leading-relaxed">使徒行傳17章記載保羅在雅典亞略巴古的演講，充分引用希臘詩人，運用哲學語言，是「本色化」傳福音的典範。然而在哥林多，保羅選擇「只知道耶穌基督，並祂釘十字架」。學者辯論這是否是「在雅典失敗後的路線修正」，但更可能的解釋是：保羅根據受眾的需要調整進路。哥林多人的問題不是缺乏哲學，而是過度迷信口才和說服力，因此保羅刻意示弱以矯正偏差。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「神奧秘的智慧」的末世論背景</h4>
              <p className="text-gray-700 leading-relaxed">保羅說這智慧是「神在萬古以前預定、為了使我們得榮耀」的。這個末世論框架表明：十字架不是歷史的意外，而是神在創世前就制定的宇宙計畫的高峰。「本世界的掌權者」（6節）不只指政治人物，也指末世論意義上的黑暗勢力。他們釘十字架的行動，反而執行了神的旨意，是悖論性的失敗之中的勝利。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">聖靈啟示與聖經正典的關係</h4>
              <p className="text-gray-700 leading-relaxed">保羅在此描述聖靈啟示的過程（10-13節），神學史上對這段文字有不同詮釋。改革宗傳統強調：保羅這裡說的是使徒性的啟示，即新約正典形成的過程，而非個別信徒的私人感動。Gordon Fee等學者則認為這指向所有信徒都可以有的屬靈領悟。重要的共識是：無論如何詮釋，聖靈的工作始終與聖道緊密相連，而非脫離聖道的神秘主義。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「有基督的心」與以賽亞書的對話</h4>
              <p className="text-gray-700 leading-relaxed">第16節引用以賽亞書40章13節：「誰曾指示耶和華的靈？」——原文是修辭性反問，答案是「沒有人」。保羅卻宣告：「我們有基督的心！」這是一個驚人的聲明，意思是信徒藉著聖靈，可以進入神的心思。這不是說信徒無所不知，而是說信徒有獨特的進入管道，可以認識神的旨意。在基督教倫理和靈修中，這個真理既是莫大的特權，也是嚴肅的責任。</p>
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
              <p className="text-gray-700">你在服事或分享信仰時，有多大程度是倚靠「方法」，多大程度是倚靠「資訊（福音本身）的能力」？這兩者在你生命中如何取得平衡？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">作者說「資訊比方法重要」。你是否曾遇過某種傳福音「方法」讓你覺得不自然，或某次看似不成功的分享，後來卻產生了果效？那次經歷讓你學到什麼？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">保羅描述聖靈在傳福音中的五個環節。在你的信仰成長中，哪一個環節你感受最深——聖靈的啟示、理解、表達，還是領悟？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">「聖道不能離聖靈，聖靈不能離聖道。」你所在的教會或信仰群體，在這兩者之間是否有失衡？如果有，是偏向哪一邊？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">作者說評估傳道者的成功，要看他死後還有多少人繼續活出信息。你認為這個標準合理嗎？這對你如何看待自己所尊敬的傳道人有何影響？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">「我們是現在有基督的心意了！」——這句話對你是激勵、挑戰，還是有點難以置信？你在日常生活中，如何有意識地「活出有基督心意的人」？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">7.</span>
              <p className="text-gray-700">在福音本色化（用文化語言表達福音）與保持福音內容純正之間，你認為底線在哪裡？你所在的教會是否有需要警惕的地方？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 「只傳基督十架」的聚焦練習</h4>
              <p className="text-gray-700 mb-2">本週找一個分享信仰的機會，有意識地把重心放在基督為我們所做的事（而非技巧或個人見證的精彩程度）：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>分享前先禱告，邀請聖靈工作</li>
                <li>讓十字架成為核心，不是你的改變故事</li>
                <li>事後省察：自己是否有想「說服對方」的衝動？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 聖靈引導的讀經操練</h4>
              <p className="text-gray-700 mb-2">每天讀一段聖經前，先做一個簡短的邀請禱告，然後記錄所得：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>「聖靈，請測透這段話，讓我明白神的心意」</li>
                <li>讀完後問：「神今天向我說了什麼？」</li>
                <li>把領受簡短記錄，一週後回顧，看聖靈是否在某個方向持續教導你</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💬 評估服事的標準重整</h4>
              <p className="text-gray-700 mb-2">回顧你目前參與的服事，用以下問題重新評估：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>這個服事的果效，主要依靠人的能力，還是神的工作？</li>
                <li>若傳道者離開，信徒的信仰是否仍然站立？</li>
                <li>「多少年後還有果效」是否是你衡量成功的標準之一？</li>
              </ul>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-sm text-green-800 font-medium mb-1">本週禱告</p>
              <p className="text-gray-700 text-lg leading-relaxed italic">
                「主耶穌，感謝祢讓我們有基督的心意。求聖靈繼續教導我，讓我認識神深奧的事，並有智慧把祢的話語忠心地傳講出去。提醒我不倚靠口才和技巧，乃倚靠十字架本身的大能。讓我所傳的信息在人心中結出長久的果子，以至於我去世後，仍有人繼續活出所聽到的福音。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
