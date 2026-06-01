import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book22Ch8() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
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
          <div className="p-5 bg-white space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">一、聖靈的位格與工作</h3>
              <p className="text-gray-700 leading-relaxed">
                聖靈（希伯來文 ruach，希臘文 pneuma，原意「風」、「氣息」、「靈」）在聖經中不是一種非人格化的力量或能量，而是三一上帝的第三位格。耶穌在約翰福音14-16章詳細描述聖靈的位格性：聖靈被稱為「保惠師」（Paraclete，保護者、倡導者、安慰者），「祂要引導你們明白一切的真理」（16:13），並且能「使世人因罪、因義、因審判，自己責備自己」（16:8）。這些描述都是人格性的行為，不是力量或能量所能做到的。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                聖靈的工作廣泛而深刻，並且同時作用於個人和群體兩個層面。在個人層面：聖靈使人重生（約3:5）、引導人認罪悔改、使人確信上帝是父（羅8:15-16）、在禱告中幫助我們代禱（羅8:26-27）、使人明白聖經的真理、培育生命的果子（加5:22-23）。在群體層面：哥林多前書3章說整個教會群體是「上帝的殿，聖靈住在你們裡頭」（3:16），聖靈不只居住在個人心中，更居住在信徒的群體中。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">二、聖靈恩賜與聖靈果子</h3>
              <p className="text-gray-700 leading-relaxed">
                新約聖經區分了兩種聖靈工作的表現，它們有重要的差別。聖靈恩賜（charismata，林前12章）是上帝按著祂的心意分配給信徒的服事能力：先知講道、教導、行異能、醫病、說方言、翻方言等。這些恩賜是功能性的——為了建立教會、服事他人，是上帝白白給予的工具，不是屬靈成熟的標誌。聖靈果子（加5:22-23）則是不同性質的：仁愛、喜樂、和平、忍耐、恩慈、良善、信實、溫柔、節制，這九種品格是在聖靈感動下、在基督徒生命中長期凝聚而成的品格特質。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                恩賜與果子的關鍵差別在於：恩賜是功能性的、可以短效；果子是生命性的、需要長期培育。保羅特別指出，在哥林多教會中，恩賜（尤其是說方言）被高度追求，但果子（尤其是愛）卻貧乏（林前13章）。他的結論極有震撼力：「我若能說萬人的方言，並天使的話語，卻沒有愛，我就成了鳴的鑼，響的鈸一般。」恩賜若沒有果子，就淪為宗教表演；果子的培育，比追求特別恩賜更是屬靈成熟的核心。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">三、靈恩運動：三波的省思</h3>
              <p className="text-gray-700 leading-relaxed">
                二十世紀見證了三波大型靈恩運動。第一波（1900年代起）是五旬節運動：以1906年加州阿蘇薩街復興為象徵，強調說方言（glossolalia）作為受洗在聖靈的初期憑據，形成了五旬節宗派（如神召會）。第二波（1960年代起）是聖靈更新運動（Charismatic Renewal）：靈恩運動進入傳統宗派（天主教、聖公會、更正教），不脫離原有宗派而注入靈恩體驗。第三波（1980年代起）是在福音派教會中的靈恩運動，強調神蹟奇事和先知性的服事。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                面對靈恩運動，林鴻信提出兩個重要提醒。不要因為一些過激現象就全面拒絕聖靈的工作——聖靈是真實的，靈恩體驗可以是真實的聖靈同在的表現。但也不要狂熱追求特定恩賜——不應強迫所有人有相同的靈恩體驗，也不應以某種恩賜（如說方言）作為衡量屬靈成熟的唯一標準。正如加爾文所強調：聖靈的工作必須透過上帝的話語來檢驗，一切靈性體驗都需要在聖經的光照下被辨別。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">四、辨別聖靈感動的標準</h3>
              <p className="text-gray-700 leading-relaxed">
                美國清教徒神學家愛德華滋（Jonathan Edwards，1703-1758）在親身經歷大覺醒運動之後，深思如何辨別真實的聖靈感動與人的激動或鬼靈的作為。他提出了四個辨別標準，至今仍有深刻的參考價值：（1）愈來愈能愛上帝——真正的聖靈感動加深人對上帝的愛，而非只是對宗教體驗的迷戀；（2）愈來愈喜愛真理——真正的聖靈感動使人更渴望讀聖經、更渴望真理；（3）愈來愈信守諾言——真正的聖靈感動在人際關係中表現為更大的忠信；（4）增加對罪的敏感——真正的聖靈感動使人對罪更有警覺，而非自以為已超越罪的領域。
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
          <div className="p-5 bg-white space-y-3">
            {[
              '聖靈是三一上帝的第三位格，不是非人格化的力量：耶穌稱祂為「保惠師」，祂能引導、責備、代禱——這些都是人格性的行為。',
              '聖靈恩賜（charismata）是功能性的服事能力（先知、教導、醫病等），聖靈果子（加5:22-23）是生命性的品格（愛、喜樂、忍耐等）——保羅警告：沒有愛的恩賜只是鳴鑼，果子比恩賜更是成熟的核心。',
              '三波靈恩運動見證了聖靈在當代的工作：五旬節運動（說方言）、聖靈更新（進入傳統宗派）、第三波（福音派）——每次運動都有真實的聖靈工作，也有過激和偏差的危險。',
              '加爾文的平衡：聖靈與上帝的話語必須同工——靈恩體驗需要聖經檢驗（避免狂熱），聖經也需要聖靈感動才能真實理解（避免純學術式研究）。',
              '愛德華滋的四個辨別標準：真正的聖靈感動使人（1）更愛上帝、（2）更喜愛真理、（3）更信守承諾、（4）對罪更敏感——而非只是情緒激動。',
            ].map((point, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-sky-600 font-bold flex-shrink-0">{i + 1}.</span>
                <p className="text-gray-700 leading-relaxed">{point}</p>
              </div>
            ))}
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
