import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book22Ch8() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    exploration: true,
    questions: true,
    practice: true,
  });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">第八章</h1>
        <h2 className="text-xl font-semibold text-gray-700">聖靈大能</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">一、聖靈的工作</h3>
              <p className="text-gray-700 leading-relaxed">
                聖靈的工作廣泛而深刻，包括對個人和對群體的工作：在知性方面（使人更加認識真理，使徒行傳五旬節的口才）、在感性方面（開啟喜樂熱切之情，使人能感受上帝的愛）、在行動方面（帶出決定和行動，從理論進入實踐）。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                聖靈不只做工在個人層面，也做工在群體層面。哥林多前書6章指出，基督徒的身體是「聖靈的殿」；哥林多前書3章則指出，整個教會群體是「上帝的殿，聖靈住在你們裡頭」。因此，追求個人靈恩之外，還需要追求聖靈在群體中的同在。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">二、聖靈恩賜與聖靈果子</h3>
              <p className="text-gray-700 leading-relaxed">
                聖靈恩賜（charismata）是上帝按著祂的心意分配給信徒的服事能力（林前12章：先知、教師、行異能、醫病、說方言等）。聖靈果子（加5:22-23）是在聖靈感動下，基督徒生命長期凝聚而成的品格：仁愛、喜樂、和平、忍耐、恩慈、良善、信實、溫柔、節制。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                恩賜與果子的關鍵差別：恩賜是功能性的（服事能力），可以短效；果子是生命性的（品格），需要長期培育。追求聖靈的「更大恩賜」（林前12:31），要同時配合追求所有的聖靈果子——特別是愛（林前13章）。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">三、靈恩運動：三波的省思</h3>
              <p className="text-gray-700 leading-relaxed">
                廿世紀發生了三波靈恩運動：1900年代的五旬節運動（強調說方言）、1960年代的聖靈更新運動（在各宗派內部）、1980年代的第三波靈恩運動（福音派教會）。這些運動見證了聖靈在當代的工作，帶領許多人得到豐盛的靈恩體驗。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                兩個重要提醒：（1）不要害怕恐懼——不要因為一些過激現象就拒絕聖靈的工作；（2）不要狂熱追求——不要強迫所有人有相同的靈恩體驗，也不應以某種恩賜作為屬靈成熟的唯一標準。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">四、辨別聖靈感動的標準</h3>
              <p className="text-gray-700 leading-relaxed">
                愛德華滋（Jonathan Edwards）提出辨別真實聖靈感動的四個標準：（1）愈來愈能愛上帝；（2）愈來愈喜愛真理；（3）愈來愈信守諾言；（4）增加對罪的敏感。真正的聖靈感動帶來對上帝更深的愛、對人際關係的成熟、以及對罪更敏銳的感知，而非只是激動的情緒或特殊的現象。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 延伸探討 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('exploration')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">延伸探討</span>
          </div>
          {expanded['exploration'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['exploration'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">加爾文：「上帝的話」與「上帝的靈」必須一起做工</h4>
              <p className="text-gray-700 leading-relaxed">加爾文是最重視聖靈工作的宗教改革家之一，被稱為「聖靈神學家」。他強調聖靈的工作必須與上帝的話語同工，並提出兩個原則：（1）一切來自聖靈的體驗，都必須透過上帝的話印證；（2）一切對聖經的理解，都必須靠聖靈的感動。這兩個原則排除了兩種偏差：一是只追求靈恩體驗而忽略聖經；二是只做學術研究聖經而缺乏聖靈的感動。加爾文的平衡觀點，對當代華人教會處理靈恩與聖經的關係，有重要的參考價值。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">聖靈在創造與文化中的工作</h4>
              <p className="text-gray-700 leading-relaxed">聖靈的工作不限於教會和個人的靈命，也在整個創造中運行。加爾文指出，人類一切美好的知識、智慧和創造力，都是聖靈的恩典，不應輕視或拒絕。因此，優秀的音樂、文學、藝術、醫學、科學，都可以是聖靈做工的領域。這個洞見鼓勵基督徒積極參與文化的各個領域，尋找聖靈的工作蹤跡；同時，也要有辨別力，不是所有文化都是聖靈做工的結果。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">聖靈的「憑據」：終末盼望的確保</h4>
              <p className="text-gray-700 leading-relaxed">以弗所書1:14說聖靈是「我們得基業的憑據」（arrabon，頭期款）。這個比喻極富意義：頭期款是承諾未來完整付款的第一筆付款，保證了後續的完成。聖靈的工作在我們今天的生命中，是上帝應許最終實現的「第一筆付款」——我們現在在聖靈中所體驗的一切（愛、喜樂、和平、醫治），都是未來榮耀完全實現的預嘗。哥林多後書5:5也說，上帝賜聖靈給我們作「憑據」，使我們相信祂的應許必定成就。這個「憑據」神學給了我們在苦難中持守盼望的根基。</p>
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
              '你如何認識聖靈？祂在你的信仰生命中主要以哪種方式做工（知性的理解、感性的喜樂、行動的力量）？',
              '你目前生命中最明顯的「聖靈果子」是什麼？最薄弱的是什麼？你如何在這個薄弱之處尋求成長？',
              '你對靈恩運動的態度是恐懼、狂熱，還是平衡的接受？是什麼塑造了這個態度？',
              '如何分辨一個靈性體驗是否來自聖靈？愛德華滋的四個標準對你有何幫助？',
              '「聖靈是我們的憑據」——這個概念如何幫助你在苦難或疑惑中持守盼望？',
              '加爾文說聖靈也做工在文化和知識中——這如何改變你看待世俗學問和藝術的方式？',
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 培育「聖靈果子」的有意識操練</h4>
              <p className="text-gray-700 mb-2">選一個你最需要成長的聖靈果子（如忍耐、溫柔、節制），制定一個具體的一週操練計劃：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>識別一個特定的情境，在那裡這個果子最難表現</li>
                <li>每天早晨禱告，請求聖靈在那個情境中幫助你</li>
                <li>每天晚上回顧：聖靈如何幫助你？你如何回應？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 用愛德華滋標準評估你的屬靈體驗</h4>
              <p className="text-gray-700 mb-2">回想一個你認為是聖靈感動的體驗，用以下四個標準評估：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>這個體驗之後，我是否更愛上帝？</li>
                <li>這個體驗是否使我更喜愛真理（聖經）？</li>
                <li>這個體驗是否使我更信守承諾和關係？</li>
                <li>這個體驗是否增加了我對罪的敏感？</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-green-800 font-medium text-sm mb-2">禱告詞</p>
              <p className="text-green-700 text-sm italic leading-relaxed">
                聖靈，感謝祢居住在我心中，是上帝應許完全實現的憑據。求祢在我身上做工——更新我的心思，更新我的情感，更新我的意志。使我不只在特別的體驗中感受祢，更在日常生活的每一個決定中活在祢的引導下。培育我生命中的聖靈果子，使我活出愛、喜樂、和平。求祢也在我所在的教會群體中做工，使我們成為真實彼此相愛的群體。奉主耶穌基督的名，阿們。
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
