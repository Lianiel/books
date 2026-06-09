import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertCircle, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book27Ch5() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true, summary: true, exploration: true, questions: true, practice: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">第5課</h1>
        <h2 className="text-xl font-semibold text-gray-700">現實世界中的真神</h2>
        <p className="text-sm text-gray-500 mt-1">炎熱篇（上）｜詩篇88篇 & 雅各書1:1-18</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-emerald-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-emerald-700 mb-2">炎熱篇的核心問題：神在哪裡？</h3>
              <p className="text-gray-700 leading-relaxed">本課開始進入「人如何改變」模式的第一個元素——炎熱（HEAT）。炎熱指的是我們所處的環境：生活中的困難、壓力、試煉、關係衝突、疾病、失落、失敗等。這些是我們每天真實面對的現實，無法迴避。</p>
              <p className="text-gray-700 leading-relaxed mt-2">本課的主要問題是：在這些炎熱的困境中，我們相信什麼樣的神？我們對神的認識，直接決定了我們如何回應困境。如果我們相信的神是「只在一切順利時才在身邊」的神，那麼困難來臨時，我們就會感到被遺棄。但如果我們相信的神是「完全了解我們的處境，並且主動在其中與我們同在」的神，困難就有了截然不同的意義。</p>
            </div>
            <div>
              <h3 className="font-bold text-emerald-700 mb-2">詩篇88篇：在黑暗中對神呼喊</h3>
              <p className="text-gray-700 leading-relaxed">詩篇88篇是整本詩篇中最黑暗的一篇。詩人何幔人希幔從「救恩」的「神」（88:1）開始呼喊，描述了極度的苦難：「我的生命近於陰間……我被壓在深坑裡，在黑暗地方，在深處」（88:6）。整篇詩沒有明顯的解決，以「幽暗成了我最熟識的朋友」結束（88:18，直譯）。</p>
              <p className="text-gray-700 leading-relaxed mt-2">為什麼聖靈允許這樣一篇詩進入聖經正典？因為它為那些在最深黑暗中的人提供了語言和許可。它告訴我們：在最絕望的時刻，向神呼喊是真實的信仰，不是信心失敗。詩人沒有假裝一切都好，但他仍然在向神說話——這本身就是一種信靠。</p>
              <p className="text-gray-700 leading-relaxed mt-2">詩篇88篇也揭示了一個重要的神學事實：信仰不保護我們免於黑暗和痛苦；但信仰讓我們在黑暗中仍有一位可以呼喊的對象。神是夠大的，可以承接我們所有的控訴、困惑和絕望。</p>
            </div>
            <div>
              <h3 className="font-bold text-emerald-700 mb-2">雅各書1:1-18：試煉是禮物</h3>
              <p className="text-gray-700 leading-relaxed">雅各書以一個令人震驚的命令開始：「你們遭遇各種試煉，都要以為大喜樂」（雅1:2）。這不是要我們假裝試煉不痛苦，而是要我們用一個更大的視角來看試煉。雅各的理由是：「因為知道你們的信心經過試驗，就生忍耐；但忍耐也當成功，使你們成全完備，毫無缺欠」（雅1:3-4）。</p>
              <p className="text-gray-700 leading-relaxed mt-2">試煉的目的是磨練信心，使信心生出忍耐，使忍耐成就完全。這是一個轉化的過程。神不是無緣無故讓困難進入我們的生命；祂有一個目的——使我們「成全完備，毫無缺欠」。這個目的不是讓我們舒適，而是讓我們成熟。</p>
              <p className="text-gray-700 leading-relaxed mt-2">雅各書1:5-8接著說，如果在困難中需要智慧，應當「向神求，神是厚賜眾人、也不斥責人的」。但求的時候要有信心，「不疑惑」（雅1:6）。這裡的不疑惑不是指對結果的確定，而是對神性格的信任——相信神是好的，祂的計劃是好的，即使現在看起來不像。</p>
              <p className="text-gray-700 leading-relaxed mt-2">雅各書1:12-18進一步揭示了試煉與試探的區別：試煉來自外在環境，是神允許的成長機會；試探來自「各人私慾的牽引誘惑」（雅1:14）。外在的困難本身不導致罪；是我們心中私慾如何回應困難，才產生了罪。「各樣美善的恩賜和各樣全備的賞賜都是從上頭來的，從眾光之父那裡降下來的」（雅1:17）——神是給予者，不是奪取者。</p>
            </div>
            <div>
              <h3 className="font-bold text-emerald-700 mb-2">神完全了解我們的炎熱</h3>
              <p className="text-gray-700 leading-relaxed">本課的神學核心是：神不是坐在天上冷眼旁觀我們受苦的神，而是完全了解我們每一個掙扎的神。耶穌在地上的生命（希伯來書4:15：「我們的大祭司並非不能體恤我們的軟弱，祂也曾凡事受過試探，與我們一樣，只是祂沒有犯罪」）告訴我們，神透過道成肉身進入了人類最真實的苦難。祂不是從遠處同情我們，而是從近處，以親身經歷，陪伴我們。</p>
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
            <ul className="space-y-2">
              {[
                '炎熱（困難、試煉）是我們日常生活中真實的現實，無法迴避；我們對神的認識決定了我們如何回應它。',
                '詩篇88篇顯示，在最深的黑暗中向神呼喊是真信仰的表達，聖靈允許這種誠實的掙扎進入聖經正典。',
                '雅各書1章說試煉是磨練信心的機會，目的是使我們「成全完備，毫無缺欠」（雅1:4）；這是成熟，不只是舒適。',
                '外在困難（試煉）不導致罪；是心中的私慾如何回應困難，才產生了罪（雅1:14）——區分試煉與試探很重要。',
                '神透過道成肉身（希伯來書4:15），親身進入人類的苦難，祂完全了解我們的炎熱，與我們同在其中。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「哀歌」在信仰中的神聖地位</h4>
              <p className="text-gray-700 leading-relaxed">詩篇中有大量的哀歌（約三分之一的詩篇），這顯示了哀歌在聖經信仰中有其正當和重要的位置。哀歌不是信心的失敗，而是在痛苦中仍然面對神、呼求神的信仰姿態。當代教會文化有時不允許人們公開表達哀傷和困惑，這可能使人們感到孤立，甚至把他們的真實情感埋藏起來。讀詩篇88篇提醒我們：神的子民在歷史上一直都在哀哭呼求，這是完全合法的。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「以為大喜樂」：誤解與正解</h4>
              <p className="text-gray-700 leading-relaxed">雅各書1:2「都要以為大喜樂」這句話常被誤解為要求基督徒假裝痛苦不存在，表現出一種強迫性的快樂。這是對文本的錯誤詮釋。原文「以為喜樂」（ἡγήσασθε πᾶσαν χαράν）更準確的翻譯是「把它算作喜樂」或「在計算上視之為喜樂」——這是一種刻意的重新詮釋和框架轉換，不是情感上的否認。我仍然感到痛苦，但我選擇以神的目的來詮釋這個痛苦，因此在更大的意義上有喜樂。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「惡從哪裡來」（神義論）的問題</h4>
              <p className="text-gray-700 leading-relaxed">「如果神是好的、全能的，為什麼有苦難？」這是一個古老而深刻的問題，也是許多人信仰掙扎的根源。聖經沒有給出一個簡單的理論答案，而是指向一位親身進入苦難的神（十字架）和一個最終萬事更新的盼望（啟示錄21-22章）。在苦難中，我們不是要找到一個讓苦難有意義的解釋，而是要找到一位在苦難中與我們同在、並且掌管未來的神。</p>
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
              '你有沒有曾經有過詩篇88篇詩人那樣的感受——感到被神遺棄、黑暗無出口？那時你如何回應？你現在如何看那段經歷？',
              '當你面對困難時，你傾向於相信什麼樣的神——是一個好的、了解你的神，還是一個冷漠的、或懲罰性的神？',
              '「試煉是禮物」這個觀念，在你的感受上有多真實？你對它有抗拒嗎？是什麼讓你抗拒？',
              '在你目前的炎熱中，你相信神在其中嗎？你認為神可能想在這個困境中成就什麼？',
              '你有沒有把「信心」等同於「一切都會好轉」？這種想法在困難來臨時，會有什麼影響？',
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
              <h4 className="font-semibold text-green-700 mb-2">📜 用詩篇88篇禱告</h4>
              <p className="text-gray-700 mb-2">如果你正在經歷深深的苦難或困惑，試著大聲讀詩篇88篇，把它當作你自己的禱告。允許自己說出真實的感受，而不是表演一種你沒有的喜樂。記住：向神呼喊——即使是在黑暗中——本身就是信仰的表達。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 辨識當前的「炎熱」</h4>
              <p className="text-gray-700 mb-2">寫下你目前生活中最主要的三個「炎熱」。對每一個，問：（1）這個炎熱讓我感到什麼情緒？（2）我相信神在這個炎熱中嗎？（3）如果神在這個炎熱中想成就一些事，可能是什麼？</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">⏰ 每日「重新框架」操練</h4>
              <p className="text-gray-700 mb-2">每天選擇一個你面對的困難，用雅各書1:2-4的視角重新詮釋它：「這個困難可以如何磨練我的信心？神可能想通過它讓我『成全完備，毫無缺欠』在哪方面？」不要強迫自己感到快樂，但要刻意選擇一個更大的視角。</p>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告詞</h4>
              <p className="text-gray-700 italic leading-relaxed text-sm">「主啊，我感謝祢，因為祢是夠大的、能夠承受我所有誠實的呼喊的神。感謝祢在基督裡進入了人類最深的苦難，使我知道祢不是冷漠的旁觀者。在我的炎熱中，幫助我相信祢在其中、祢了解我的痛苦，並且祢有美好的計劃。即使我現在不明白，我仍選擇信靠祢的性格——祢是好的。阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
