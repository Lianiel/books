import React, { useState } from 'react';
import { ChevronDown, ChevronUp, GraduationCap, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book41Ch28() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    exploration: true,
    questions: true,
    practice: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-800 to-cyan-900 bg-clip-text text-transparent">第四部 4-2</h1>
        <h2 className="text-xl font-semibold text-gray-700">融入榮辱感於訓練中</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">赫伯特的「循序式情境化」四步驟</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                本章探討如何運用聖經和多數世界社會普遍共有的榮辱感，幫助基督教信仰情境化，使更多人能理解、接受基督教信仰——聚焦於「訓練」這個層面。作者從宣教學家保羅．赫伯特著名的「循序式情境化」（critical contextualization）模式出發，這個模式包含四個步驟：第一步「解析宿主文化」——跨文化工作者採取客觀立場，收集宿主文化的信仰習俗資料，不批判、不草率下結論；第二步「解析聖經」——當地領袖和跨文化工作者一起尋找聖經與宿主文化間的「釋經之橋」；第三步「評估群體信仰和習俗的相容性」——群體可以選擇保留未與聖經衝突的舊有習俗、屏棄不符聖經原則的部分、或透過適當儀式將習俗適度改造融入基督教教導；第四步「社群發展出符合福音情境的新習俗」——領導者幫助信仰群體，將選定的習俗安排融入表達基督信仰意義的活動中。
              </p>
              <p className="text-gray-700 leading-relaxed">
                作者指出，赫伯特的模式相當有價值，但往往忽略了西方人對榮辱文化的盲點——大多數西方宣教士，以及受教於西方體制的非西方基督徒，並不清楚榮辱文化是聖經文化的重要價值觀，因此「臆測福音，不夠嚴謹」。作者特別澄清，這絕非影射赫伯特本人忽略跨文化宣教的重要考量，而是指出：在赫伯特的著作中，關於西方神學教育對榮辱價值觀的盲點，確實隻字未提。<sup>1</sup><span style={cite}>（Paul Hiebert, Transforming Worldviews.）</span>基於這樣的省思，作者提出建議：在赫伯特四步驟之前，增加一個「基礎步驟A：解析聖經文化」。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">「基礎步驟A」：解析聖經文化</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                為什麼要加上步驟A？作者解釋：這不是說一般宣教工作者完全不了解聖經文化，而是因為西方神學教育多半缺乏榮辱概念，忽略它是聖經中的關鍵價值觀，因此有必要在情境化過程開頭，明確加上這個基礎步驟。作者提出四項理由說明步驟A的重要性：它是進入禾場前培訓不可或缺的一部分，讓宣教工作者能透過正式（聖經學校、神學院）或非正式（小組、自學）管道，在出發前就裝備好聖經榮辱動力的知識；它有紮實的學術依據，透過基督教學者的研究，榮辱感已被確認是聖經詮釋學和跨文化宣教的一部分；它把上帝的話語列為第一優先，顯示跨文化工作者看重宿主文化的詮釋，至少和詮釋聖經文化一樣看重；最後，它凸顯古代聖經社會的文化價值觀，與今日跨文化事工及普世福音廣傳息息相關。
              </p>
              <p className="text-gray-700 leading-relaxed">
                作者歸納這個調整後模式的四項優點：第一，積極去除西方神學對榮辱價值觀的長期盲點；第二，有助跨文化事工建立健康關係，讓西方對福音「律法框架」的偏見，可以透過君王（國度）福音取得平衡；第三，使基督教不再被貼上「專屬西方人的宗教」標籤——越理解榮辱價值觀，越明白「聖經不是西方的著作，而是東方的書籍」；第四，凸顯文化與情境理解在研經過程的重要性，這與「唯獨聖經」（Sola Scriptura）的原則相呼應——這個原則提醒跨文化工作者，面對聖經所揭露的文化價值觀，要有謙沖的態度。學者威利斯（Avery Willis）強調：「我們必須理解聖經文化以及掌握文化對聖經真理的影響」<sup>2</sup><span style={cite}>（Avery T. Willis Jr., "Response to Hiebert's Article".）</span>，作者也回應了柯氏（Andreas Köstenberger）對「社會科學融入宣教策略」的疑慮：只要社會科學被用於「闡明聖經世界社會歷史的研究」（而非「將現代人類行為理論應用於聖經文本」），就不會削弱神話語的權威，反而能幫助我們更真實地讀懂聖經，正如先知耶利米所言：「你們當站在路上察看，訪問古道，哪是善道，便行在其間」（耶六16）——理解聖經中的榮辱關鍵文化價值，正是探訪「古道」的方式之一。
              </p>
            </div>

          </div>
        )}
      </div>

      {/* 重點總結 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
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
                '赫伯特的「循序式情境化」四步驟（解析宿主文化→解析聖經→評估相容性→發展新習俗）是廣為人知的宣教訓練模式，但作者指出其潛在盲點：默認宣教士本身已充分理解聖經的榮辱文化，而這在西方神學教育中往往並非事實。',
                '作者建議在四步驟之前增加「基礎步驟A：解析聖經文化」，讓跨文化工作者在出發禾場之前，先透過正式或非正式管道，扎實裝備聖經榮辱動力的知識，而非假設這已是既有常識。',
                '這個調整後的模式帶來四項具體益處：消除西方神學的榮辱盲點、幫助建立更健康的跨文化關係、去除「基督教是西方宗教」的錯誤標籤、以及凸顯文化與情境理解在研經中的重要性。',
                '「越理解榮辱價值觀，越明白聖經不是西方的著作，而是東方的書籍」——這句話濃縮了整本書的核心關懷，也是訓練跨文化工作者時最需要傳達的認知轉變。',
                '作者謹慎回應了「社會科學是否會削弱聖經權威」的疑慮：關鍵在於區分社會科學的兩種用法——用於「闡明聖經世界的歷史文化背景」是恰當的，用於「把現代理論強加在聖經文本上」才是危險的。',
                '本章雖聚焦「正規神學教育」的訓練模式，但作者特別強調，這套原則同樣適用於數百萬在正規高等教育機構之外、透過非正式管道接受跨文化宣教訓練的基督徒。',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-gray-700 leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
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
              <h4 className="font-semibold text-gray-800 mb-2">為什麼作者特別強調「這不是在批評赫伯特本人」，這種謹慎的論述方式對學術對話的健康有何示範？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者刻意區分「指出某個模式的結構性盲點」與「否定該學者的整體貢獻」，這種論述方式值得學習——批判性的補充與建設性的致敬可以並存。這提醒我們在進行任何學術或神學對話時，指出前人論述的局限，不代表全盤否定其貢獻，反而是站在巨人肩膀上，透過誠實的補充讓整個學術傳統更加完整。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「基礎步驟A」的建議，如何具體應用在神學院或教會的宣教訓練課程設計上？</h4>
              <p className="text-gray-700 leading-relaxed">
                具體而言，這意味著神學院的跨文化宣教課程，不應該把「文化研究方法」直接跳到「如何研究宣教工場的當地文化」，而應該先花時間帶學生重新認識聖經本身誕生的榮辱文化背景——例如開設「聖經中的榮辱動力」這類基礎課程，作為宣教學、跨文化研究課程的先修或並行課程，讓學生先建立起「聖經本身就是跨文化文本」這個認知基礎，再進一步學習如何與當代不同文化對話。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「唯獨聖經」原則如何同時支持「重視聖經權威」與「重視文化情境理解」這兩件事，而不互相矛盾？</h4>
              <p className="text-gray-700 leading-relaxed">
                有人可能誤以為強調「文化情境」會削弱「唯獨聖經」的權威，但作者的論點恰恰相反：正因為聖經是最高權威，我們才更需要正確理解它原本要表達的意思，而不是把自己文化的預設讀進經文裡。忽略聖經的原始文化情境、用現代西方框架讀經，其實才是對聖經權威的一種（不自覺的）削弱——因為讀者可能讀到的不是聖經真正要說的話，而是自己文化投射的回音。
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
            {[
              '在你接受過的神學或宣教訓練中，是否曾有專門的課程或單元，教導聖經中的榮辱文化？如果沒有，這對你的裝備留下了什麼樣的空白？',
              '「聖經不是西方的著作，而是東方的書籍」——這句話，如何挑戰你過去對基督教文化屬性的既有印象？',
              '如果你要為所屬教會或機構設計一堂「基礎步驟A」的課程，你會如何規劃內容與教學方式？',
              '威利斯提醒「文化在聖經中扮演舉足輕重的地位」，你認為初任宣教工作者或短宣參與者，最容易在哪些地方忽略這一點？',
              '你如何理解「唯獨聖經」原則與「理解聖經文化情境」之間相輔相成、而非互相衝突的關係？',
              '耶利米書六章16節「站在路上察看，訪問古道」，如何幫助你重新理解「研究古代榮辱文化」這件事，對今日宣教事工的意義？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 繪製赫伯特四步驟＋步驟A的完整流程圖</h4>
              <p className="text-gray-700 mb-2">
                動手畫出「解析聖經文化→解析宿主文化→解析聖經→評估相容性→發展新習俗」的完整五步驟流程圖，並想一個具體的跨文化情境（如向某個未得族群傳福音）套用這個流程。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎓 為自己規劃一份「步驟A」自學計畫</h4>
              <p className="text-gray-700 mb-2">
                若你有志參與跨文化事工，或單純渴望更深理解聖經，列出一份為期數週的讀經與研習計畫，聚焦於認識聖經中的榮辱動力，可從路加福音開始。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，感謝祢的話語本是東方的書卷，卻要傳給全地萬民。求祢除去我讀經、裝備、訓練過程中不自覺的文化盲點，幫助我謙卑地『訪問古道』，更真實地明白祢的心意，也求祢興起更多願意在訓練中融入榮辱文化裝備的教師與領袖。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
