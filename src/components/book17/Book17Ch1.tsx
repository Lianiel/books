import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Search, HelpCircle, Check } from 'lucide-react';

export default function Book17Ch1() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">第一章</h1>
        <h2 className="text-xl font-semibold text-gray-700">從神的角度看教會與恩賜</h2>
        <p className="text-sm text-gray-500 mt-1">哥林多前書 一1-9</p>
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
              <h4 className="font-semibold text-purple-700 mb-2">一、收信人：哥林多教會（一1-3）</h4>
              <p className="text-gray-700 leading-relaxed">保羅在書信開頭就指出，哥林多教會是「神的教會」。這些信徒「已經成聖」，是「蒙召作聖徒的」。教會最基本的特性是一群信耶穌基督的人，他們是屬神的人，是尊耶穌基督為主的人，也因耶穌基督的緣故是聖潔的人。保羅看哥林多教會時，是從神的角度來看，而不是從人的角度。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">二、為教會感恩（一4-9）</h4>
              <p className="text-gray-700 leading-relaxed">面對這個充滿問題的教會，保羅竟然獻上感恩！他感恩的原因是神在哥林多人身上所賜的恩典。保羅看見神在哥林多人身上的工作——他們「在恩賜上沒有一樣不及人的」。一個充滿諸多問題的教會，竟也是一個非常富足的教會，這實在是神的恩典。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">三、恩賜的末世意義</h4>
              <p className="text-gray-700 leading-relaxed">保羅從末世的角度看恩賜。他說哥林多信徒是在「等候主耶穌基督顯現的時候」不缺乏恩賜，但主耶穌「要堅固你們到底，叫你們在主耶穌基督的日子無可責備」。恩賜雖好，卻不是信徒的終極目的；在主再來的日子聖潔無瑕，才是信徒得救恩的真正高峰。神是信實的，必然成就祂呼召我們的目的。</p>
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
              <h4 className="font-semibold text-indigo-700 mb-2">教會的神學定義</h4>
              <p className="text-gray-700 leading-relaxed">保羅用三個詞描述教會：「神的教會」、「已成聖」、「蒙召作聖徒」。這三個詞都強調教會的身分來自神，而非人的努力或成就。「聖徒」（hagios）原意是「被分別出來歸神的人」，並非指道德完全。這提醒我們：教會的本質不由成員的道德水準決定，而由神的揀選決定。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">恩賜（charismata）的神學意義</h4>
              <p className="text-gray-700 leading-relaxed">希臘文 charismata 來自 charis（恩典），表明恩賜的本質是恩典，不是功勞。保羅把哥林多人的口才、知識等恩賜，視為神在他們身上救恩的印證。有恩賜，就證明聖靈的同在；有聖靈的同在，就是福音得救之明證。因此恩賜的目的在於見證救恩的真實，而非誇耀個人的屬靈地位。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">末世論的視角</h4>
              <p className="text-gray-700 leading-relaxed">保羅特別從末世角度看待教會的處境。「主的顯現」和「主的日子」這些用語，表明信徒的現在生活與未來終局緊密相連。信徒現今豐富的恩賜，只是「等候」主再來的裝備，而非終極的成就。這個末世觀念提供了一個謙卑的視角：不管今日有多少恩賜，都是暫時的預備，而非最終的榮耀。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「與神同得分」（koinonia）的含義</h4>
              <p className="text-gray-700 leading-relaxed">第9節的「一同得分」（koinonia），是哥林多前書重要的神學詞彙。與基督聯合意味著：與主一起死、一起復活、一起受苦、一起得榮耀。這不只是將來的盼望，更是現今生活的準則——既然與基督聯合，就應當以基督的心為心，以基督的生命為依歸，而不以恩賜的多寡來衡量屬靈的成熟度。</p>
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
              <p className="text-gray-700">你通常從什麼角度看待你所屬的教會——是人的角度（看問題和不足），還是神的角度（看恩典和工作）？這兩種視角如何影響你對教會的態度？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">保羅面對充滿問題的哥林多教會，第一反應是「感謝神」。你在面對教會問題時，第一反應通常是什麼？是批評、退出、還是禱告感恩？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">神賜給你哪些恩賜或屬靈資源？你是否曾把這些恩賜視為自己努力的成果，而非神的恩典？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">保羅說「恩賜是神救恩的印證」，而非信仰的終點。你是否曾有過誤把擁有恩賜或屬靈經歷當作信仰成熟標誌的傾向？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">「在主再來的日子無可責備」——這個末世的盼望如何改變你對今日生活方式的選擇？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">你如何在個人生活中「正當地運用神所賜下的屬靈財富」？哪些恩賜你可能尚未充分發揮？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 換個角度看你的教會</h4>
              <p className="text-gray-700 mb-2">這週選一件讓你對教會感到不滿的事，試著從「神在做什麼工作」的角度重新思考：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>問：「神在這位弟兄/姊妹身上做了什麼工作？」</li>
                <li>問：「神藉著這個不完美的情況，想教導我什麼？」</li>
                <li>把你的觀察寫下來，看看視角轉換後有何不同</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 恩賜盤點</h4>
              <p className="text-gray-700 mb-2">花15分鐘列出神賜給你的屬靈恩賜和資源：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>哪些恩賜你已在使用？哪些尚未發揮？</li>
                <li>這些恩賜如何可以更多造就他人？</li>
                <li>為每項恩賜向神獻上感謝</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 為教會獻感謝禱告</h4>
              <p className="text-gray-700 mb-2">效法保羅，每天花五分鐘為你的教會感恩禱告，而不只是代禱：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>感謝神把你安置在這教會中</li>
                <li>感謝神在會友身上所做的工作</li>
                <li>求神開你的眼，讓你看見祂的恩典</li>
              </ul>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-sm text-green-800 font-medium mb-1">本週禱告</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">
                「主啊，求祢開我的眼，讓我從祢的角度看我的教會。幫助我在不完美中看見祢的工作，在問題中看見祢的恩典。讓我的第一反應是感謝，而非批評。求祢的靈堅固我和我的教會，直到主再來的日子，我們都能無可責備地站在祢面前。奉主耶穌基督的名禱告，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
