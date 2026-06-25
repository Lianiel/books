import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch1() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第一章</h1>
        <h2 className="text-xl font-semibold text-gray-700">起初與終末</h2>
      </div>

      {/* 正文 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">正文</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、創造的「開始」與「完成」</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記是全本聖經的種籽書，而創世記一章（至二章3節）也是全卷創世記的種籽。一章1節至二章3節的範圍最為合理，因為這個範圍是滿完整的七日，包含「從創造到安息」的完整內容。不僅符合創造的過程，也符合整本聖經的架構——因為創世記的內容正是從創造到安息，而安息就是結束，是神一切工作的完成。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記一章至二章3節包含八個小段，是與創造過程相關的八個階段，其中第一階段的「起初」，與最後階段的「安息」相對應。神創造的前三日展開了廣闊的舞台，創造在空間位置層面及後來要有的居所（光、水、空氣、陸地、植物）；神創造的後三日則是完整地填充這個舞台，創造居住者和管理者（日月星、魚、鳥、陸上活物、人）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神在創造過程中不斷評鑑增加確認「看著是好的」，如同啟示錄中最明顯的畫面是神創造的主角，但更深層的其實是天上的敬拜。神創造有清楚的對應次序：第一日與第四日相連，分別是創造時間（光）與創造管理時間的主體（日月星）；第二、三日與第五、六日相連，分別是創造空間（水域、天空、陸地）與創造填充空間的生命（魚鳥、陸上活物與人）。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、聖經的「起初」與「終末」</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記的第一個字是「起初」，希伯來文、英文、希臘文（七十士譯本）前面還有介係詞，完整翻譯是「在起初」，分別是：
              </p>
              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200 mb-4">
                <div className="space-y-2 text-sm">
                  <div className="flex gap-3"><span className="font-semibold text-indigo-700 w-20 flex-shrink-0">希伯來文：</span><span className="text-gray-700">בְּרֵאשִׁית（Be reshiyth）</span></div>
                  <div className="flex gap-3"><span className="font-semibold text-indigo-700 w-20 flex-shrink-0">英文：</span><span className="text-gray-700">In the beginning</span></div>
                  <div className="flex gap-3"><span className="font-semibold text-indigo-700 w-20 flex-shrink-0">希臘文：</span><span className="text-gray-700">Ἐν ἀρχή（En arche）</span></div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                「起初」（רֵאשִׁית，reshiyth）神創造天地，希伯來文這個字可以翻作「起初」或「首先」，這個字有兩個特點：其一，往往指著一段時候，但不確定其具體長短；其二，意涵「最初、第一」的優先性。「起初」這個語言特性在聖經中呈現一個重要的語境結構：若找到了「起初」，就會有上下相對應的「終末」，這個語境凸顯出創造有其明確的開始與結束。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神在「起初」創造宇宙，讓信徒明白宇宙有其開始和「終末」。聖經作者藉此彰顯神在歷史中的主權，引導讀者謹記：創世記一章描述的，都會在末日以更榮耀的形式重現——正如啟示錄廿一至廿二章所描述的新天新地，正是創世記一至二章原初創造的圓滿完成與終極超越。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、創世記中的終末</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                在創世記的太古歷史中，有兩個明顯的「終末性」事件：洪水與巴別。洪水是神對第一個世界的審判與終結，同時也是新世界的開始；巴別是人類語言的分散與文明的終結，同時也是各民族分布的起始。這兩個事件都呈現出「一個時代的終末」與「另一個時代的起初」相互交織的模式。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                洪水特別具有「末世性」的意涵。彼得後書第三章將洪水與末世的審判並列，指出「那時的世界」被水淹沒而滅亡，但「現在的天地……是存留到受火的審判」（彼後三7）。創世記的洪水因此成為末世審判的預表，同時挪亞方舟也成為救恩的預表——神在毀滅中保存餘民，正如末世時神的選民將得拯救。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">肆、上帝的起初與終末</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「起初」不僅是創世記的主題，也是整本聖經的神學張力所在。以賽亞書四十一章4節：「誰成就了這事，誰創造並行這事呢？就是那從起初召各代的，我耶和華是首先的，我與末後的人同在，我是一樣的。」（直譯：我是首先的，我也是末後的。）神自稱「Aleph（א）和 Tav（ת）」，即希伯來字母的第一個和最後一個——對應希臘文的 Alpha 和 Omega（啟一8）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這個「首先與末後」的宣告揭示：創世記的「起初」並非一個孤立的歷史事件，而是神永恆計劃的第一個啟示。神作為歷史的起點（Creator）也是歷史的終點（Consummator），祂的創造工作從一開始就是指向終末的——指向那完全的安息、完全的治理、完全的人神同在。
              </p>
              <p className="text-gray-700 leading-relaxed">
                因此，研讀創世記不能只是考古式地了解古代的起源故事，而必須以末世論的眼光來閱讀：每一個創造的細節都指向那最終的榮耀，每一個墮落的悲劇都指向那最終的救贖，每一個審判都指向那最終的更新。創世記是一本從第一頁就開始指向終末的書。
              </p>
            </div>

          </div>
        )}
      </div>

      {/* 重點整理 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-sky-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">重點整理</span>
          </div>
          {expanded['summary'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['summary'] && (
          <div className="p-5 bg-white">
            <ul className="space-y-3">
              {[
                '創世記一章至二章3節是一個完整單元，包含七日從「起初」到「安息」的完整創造過程，也是全卷創世記的縮影。',
                '神創造的前三日開展舞台（光、天空、陸地與植物），後三日填充舞台（日月星、魚鳥、陸上活物與人），七日結構呈現完美的對應設計。',
                '希伯來文「起初」（רֵאשִׁית, reshiyth）有兩個特性：指一段不確定長短的時間，以及「第一優先」的意涵；語境中「起初」必有對應的「終末」。',
                '創世記中的洪水和巴別塔是太古時期的「終末性」事件，成為聖經末世審判的預表，洪水中的方舟也成為救恩的預表。',
                '神自稱「首先的、末後的」（以賽亞書四十一章4節）及「Alpha 和 Omega」（啟示錄一章8節），表明神是歷史的起點與終點，創世記的「起初」指向啟示錄的「終末」。',
                '正確閱讀創世記需要末世論眼光：每個創造細節指向終末的榮耀，每個墮落悲劇指向終末的救贖，每個審判指向終末的更新。',
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

      {/* 分享題目 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-yellow-50 hover:from-amber-100 hover:to-yellow-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">分享題目</span>
          </div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && (
          <div className="p-5 bg-white space-y-4">
            {[
              '閱讀啟示錄二十一至二十二章，你看到哪些與創世記一至二章相對應的元素？這樣的對應對你理解神的創造和救贖計劃有什麼幫助？',
              '「起初，神創造天地」——這句話對你的信仰最大的意義是什麼？在你的日常生活中，這個「起初」如何影響你對現在和未來的看法？',
              '本章提到創世記中的洪水是末世審判的預表，挪亞方舟是救恩的預表。你如何將這個預表應用在今日的屬靈生活和傳福音的工作上？',
            ].map((q, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0 text-lg">{i + 1}.</span>
                <p className="text-gray-700 leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
