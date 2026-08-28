import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book42Ch11() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-800 to-orange-900 bg-clip-text text-transparent">總結</h1>
        <h2 className="text-xl font-semibold text-gray-700">台灣宣教策略之再思</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">三種偏差的佈道，三種缺一不可的支柱</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                在台灣宣教策略之探討中，針對本土的個人談道法是迫切需要的，本文「本土化談道的探討」乃是根據台灣百姓的背景，結合同在式佈道、宣告式佈道和說服式佈道等三種佈道方式，並加以應用，所作的研究。根據筆者實際個人談道的經驗，教會或個人的談道事工，若偏廢了三P佈道中的任何一環，都會落入以下三種偏差：
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                一是只有強調道成肉身的同在來關懷人，而沒有任何福音的宣講，也不在乎屬靈爭戰的層面，更無意引人悔改認罪接受耶穌基督為生命的主，那只是社會福音，與耶穌基督救贖的福音有很大的差距。二是只有一味機械式地傳講福音，而沒有讓人感受到愛心關懷，更無視福音對象的需要，以及屬靈能力的追求，這樣的福音無法吸引人，也很難在激烈的屬靈爭戰中將人從撒但的權勢下奪回。三是只看重神蹟奇事，上帝的話語卻沒有進入人的心中，也沒有道成肉身愛的基礎，那是本末倒置、拾本逐末的作法，福音的果效不大，因為沒有上帝的道在人心中，人即使看見神蹟也不見得會信耶穌。
              </p>
              <p className="text-gray-700 leading-relaxed">
                本土化談道法乃是依靠聖靈能力（徒一8），有道成肉身愛的基礎，認同百姓，進入人羣（約一14），以斯土斯民所能理解的語言、方式，針對需要，積極傳講耶穌基督救贖的福音（林前九22～23），在激烈的屬靈爭戰中，經歷聖靈不斷的充滿，祈求上帝彰顯大能（林前二4～5），以神蹟印證所傳的道（可十六20），使人體會罪得赦免與創傷得醫治的完整救贖，而降服在主前，成為耶穌基督的門徒，完成主耶穌所託付的大使命（太廿八19）。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">回顧全書三篇架構</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                本書第一篇「本土化談道的神學基礎」，從道成肉身的宣教原理出發，探討上帝主動臨在、先認同再說服的宣教策略，以及針對需要、對症下藥的宣教方式；再從四福音書和使徒行傳的談道範例，歸納出瞭解背景、引起興趣、針對需要三大談道技巧，以及經歷福音大能、為骨肉的心志、實際生活見證、迫切代禱、順從聖靈引導、邀請決志、栽培造就七大成功要素；最後探討如何將福音紮根於台灣本土文化，轉化民間宗教、祭祖傳統與民俗節期，同時堅守福音絕對的真理核心。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                第二篇「本土化談道的福音內容」，從台灣百姓懼怕、功利、求靈驗三種信仰心理出發，指出真正認識這位獨一真神，是「認祖歸宗」而非「背祖叛教」；接著探討神人關係如何因罪破裂、人為宗教如何無法解決罪的問題，唯有耶穌基督流血捨命的救贖才是根本的復和之道；最後從耶穌的話語與復活的歷史證據，論證耶穌基督是唯一的拯救者，除祂以外別無拯救。
              </p>
              <p className="text-gray-700 leading-relaxed">
                第三篇「本土化談道的屬靈爭戰」，指出福音是兩個國度之間的爭戰，唯靠聖靈能力才能使人真正降服、成為門徒；接著澄清聖靈重生、聖靈的洗與聖靈充滿的意義區別，強調信徒當持續追求被聖靈充滿，且恩賜能力與生命果子必須平衡並重；最後從心靈醫治的角度，指出罪得赦免與創傷得醫治是完整救贖不可分割的兩面，而饒恕正是通往醫治最關鍵的鑰匙。全書最終在附錄以九二一大地震的實際牧養經歷，具體示範本土化宣教如何落實在苦難處境中，成為福音大能的見證。
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
                '只有同在關懷而沒有福音宣講，容易淪為「社會福音」；只有機械式宣講而沒有愛心關懷，福音難以吸引人；只看重神蹟而沒有上帝的道進入人心，是本末倒置——三P佈道（同在、宣告、說服）缺一不可。',
                '本土化談道法的完整定義：依靠聖靈能力，有道成肉身愛的基礎，認同百姓進入人羣，用本土能理解的語言方式針對需要傳講福音，經歷聖靈充滿與神蹟印證，使人罪得赦免、創傷得醫治，完整降服於主前成為門徒。',
                '第一篇神學基礎的核心是「先認同再說服」的道成肉身原理，以及如何在保留文化正面價值的同時，堅持福音真理不被文化同化的絕對底線。',
                '第二篇福音內容的核心是澄清台灣百姓的信仰心理（懼怕、功利、求靈驗），並論證認識真神是「認祖歸宗」，耶穌基督的復活與救贖是唯一能解決罪的復和之道。',
                '第三篇屬靈爭戰的核心是唯有依靠聖靈能力才能使人真正降服，且恩賜能力與生命果子、罪得赦免與創傷醫治，都必須兩兩平衡並重，缺一不可。',
                '全書從理論到實踐，最終在附錄以九二一大地震的實際見證作結，示範本土化宣教不是抽象的神學理論，而是能在真實苦難處境中具體落實、帶出福音大能的活生生行動。',
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
              <h4 className="font-semibold text-gray-800 mb-2">全書三篇分別對應三P佈道的哪一層？這個對應關係如何幫助讀者掌握全書的整體架構？</h4>
              <p className="text-gray-700 leading-relaxed">
                第一篇「神學基礎」對應「同在式佈道」——道成肉身、認同百姓、進入人羣；第二篇「福音內容」對應「宣告式佈道」——清楚宣講啟示的神、復和之道、耶穌是神；第三篇「屬靈爭戰」對應「說服式佈道」——依靠聖靈能力使人真正降服成為門徒。這個三合一的架構提醒讀者，全書不是三個獨立的主題並列，而是一個完整談道歷程的三個遞進階段：先用愛建立關係，再用真理宣講福音，最後靠聖靈能力使人真正委身——三者環環相扣，缺一則整個談道歷程就不完整。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">作者歸納的三種佈道偏差（只有同在、只有宣告、只有神蹟），在你所認識的教會或宣教機構中，是否能找到對應的實例？</h4>
              <p className="text-gray-700 leading-relaxed">
                這三種偏差其實對應著福音派內部長期存在的張力：強調社會關懷的教會可能弱化了福音宣講的迫切性；強調傳統佈道法的教會可能忽略了關係建立與愛心關懷；強調靈恩醫治聚會的教會則可能過度倚賴神蹟展示，卻缺乏扎實的真理教導。作者的三P整合架構提醒我們，健康的教會不必在這三者中選邊站，而是要學習像使徒行傳「美門教會」一樣，讓社會關懷、真理宣講、聖靈能力三者互相配搭、缺一不可。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">本書寫於一九九五年（增訂版含九二一地震後的附錄），距今已超過二十年，書中對台灣宣教處境的觀察，在今天是否仍然適用？</h4>
              <p className="text-gray-700 leading-relaxed">
                書中對台灣民間信仰的懼怕、功利、求靈驗心理，以及祭祖、民俗節期的文化分析，至今仍相當貼近台灣社會的實際處境，這也是本書歷久彌新的價值所在。不過，隨著時代變遷，台灣社會的宗教型態也在轉變（如民間信仰的世俗化、無宗教信仰人口的增加、多元價值觀的興起），讀者在應用本書的本土化談道原則時，仍需要留意當代處境的新變化，例如如何向對一切宗教都持懷疑態度的年輕世代，或向深受西方個人主義影響的都會人群，進行同樣「先認同、再宣告、後說服」的本土化談道。</p>
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
              '回顧全書十二章的內容，哪一章對你的觸動最深？為什麼？',
              '對照三種佈道偏差（只有同在、只有宣告、只有神蹟），你認為自己過去的談道經驗比較容易落入哪一種偏差？',
              '「本土化談道法」的完整定義涵蓋了認同、宣講、聖靈能力、罪得赦免、創傷醫治五個層面，你認為自己最需要加強裝備的是哪一個層面？',
              '讀完全書，你對「向台灣百姓傳福音」這件事，最大的心態或觀念改變是什麼？',
              '如果要用一句話向朋友推薦這本書，你會怎麼說？',
              '接下來的一個月，你願意具體實踐書中哪一項教導（例如家庭追思愛餐、饒恕的八個步驟、迫切代禱清單等）？',
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
              <h4 className="font-semibold text-green-700 mb-2">📋 制定個人的「本土化談道行動計畫」</h4>
              <p className="text-gray-700 mb-2">
                整理全書所學，為你正在關心的一位親友，制定一份具體的談道計畫，涵蓋同在關懷、福音宣講、代禱支取聖靈能力三個步驟，並設定未來一個月的具體行動時程。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔄 重新檢視教會的福音策略</h4>
              <p className="text-gray-700 mb-2">
                若你在教會服事，找機會與同工分享本書三P佈道的架構，一同檢視教會目前的福音事工，是否在同在、宣告、說服三個層面達到平衡，並提出具體調整建議。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「天父上帝，感謝祢藉著這本書，重新提醒我本土化談道的完整意義——道成肉身的愛、清楚宣講的真理，以及聖靈大能的彰顯，三者缺一不可。求祢幫助我不再滿足於單一層面的努力，而是願意全人委身，用祢所賜的智慧與能力，將福音帶給身邊的親友，使他們也能經歷罪得赦免、創傷得醫治的完整救贖，成為耶穌基督忠心的門徒。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
