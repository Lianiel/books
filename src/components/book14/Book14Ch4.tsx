import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Search, HelpCircle, Check } from 'lucide-react';

export default function Book14Ch4() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    exploration: true,
    questions: true,
    practice: true
  });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">第4章</h1>
        <h2 className="text-xl font-semibold text-gray-700">聖靈的路徑：聖潔之道</h2>
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
            <p className="text-gray-700 leading-relaxed mb-3">不論是好是壞，我們大多數人一聽見「性」這詞都會產生觸電的感覺。我的意思是他迫使我們注意，使我們驚醒，抓住本來勿勿掠過的眼神和輕忽的耳朵；他帶有情感的電荷，給予我們一種情感的衝擊。</p>
            <p className="text-gray-700 leading-relaxed mb-3">為何會這樣？因為對於正常的成人來說，性是一個有無窮興味的主題。（你發現自己閱讀這段文章時特別加倍留心，是嗎？這就是我的意思。）基督徒的優先選擇</p>
            <p className="text-gray-700 leading-relaxed mb-3">對於健康的基督徒來說，聖潔一詞也同樣令人加倍留神。為什麼？因為神已經在每一個重生的心靈裡，深深種植一份對成聖趨之若渴的情感。成聖意指接近神、像神、委身給神和取悅神，是信徒在世上最希望達到的。他們對聖靈感興趣的一個原因，是因為知道聖靈的主要工作之一是使我們聖潔。</p>
            <p className="text-gray-700 leading-relaxed mb-3">基督徒想瞭解和證明聖靈使人成聖的能力，是十分正常和自然的；任何信徒若然對追求聖潔漠不關心，他的信仰很可能出了問題。本章是向一切有心追求聖潔的正常基督徒進言。</p>
            <p className="text-gray-700 leading-relaxed mb-3">我們應該知道，「聖潔」是聖經中一個重要的辭彙。他的字根包含分離或隔開的意思；首先，這個詞意味著神跟人分別開來，其次，他標誌著基督徒為神分別出來。這裡，我們所關心的是第二個含義。</p>
            <p className="text-gray-700 leading-relaxed mb-3">那召你們的既是聖潔，你們在一切所行的事上也要聖潔；因為經上記著說：「你們要聖潔，因為我是聖潔的。」（彼前一 15、 16，引利—一 44、45）</p>
            <p className="text-gray-700 leading-relaxed mb-3">神的旨意就是要你們成為聖潔，„„神召我們，本不是要我們沾染污穢，乃是要我們成為聖潔。„„ 願賜平安的神親自使你們全然成聖。又願你們的靈與魂與身子得蒙保守，在我主耶穌基督降臨的時候，完全無可指摘。（帖前四 3、7，五 23）</p>
            <p className="text-gray-700 leading-relaxed mb-3">„„神從創立世界以前，在基督裡揀選了我們，使我們在他面前成為聖潔，無有瑕疵；„„基督愛教會，為教會舍己，要用水借著道把教會洗淨，成為聖潔，可以獻給自己，作個榮耀的教會，毫無玷污、皺紋等類的病，乃是聖潔沒有瑕疵的。„„我們原是他的工作，在基督耶穌裡造成的，為要叫我們行善，就是神所預備叫我們行的。（弗一 4，五 25—27，二 10）     所以弟兄們，我以神的慈悲勸你們，將身體獻上，當作活祭，是聖潔的，是神所喜悅的；你們如此事奉乃是理所當然的。（羅一二 1）</p>
            <p className="text-gray-700 leading-relaxed mb-3">„„就當潔淨自己，除去身體、靈魂一切的污穢，敬畏神，得以成聖。（林後七 1）</p>
            <p className="text-gray-700 leading-relaxed mb-3">這些經文立刻顯示出聖潔同時是神的禮物和命令；所以，我們應該祈求聖潔，並且每天竭力尋求實踐聖潔的生活。聖潔是我們蒙神揀選與救贖的目標，是神對我們的基本要求，也是神與我們一切交往的目標。</p>
            <p className="text-gray-700 leading-relaxed mb-3">我們應該如何界定信徒的聖潔呢？我們也許可以說，一個聖人的聖潔，在於他的生活特質，這特質是他為神的緣故分別為聖，也是他仰賴神的恩典心靈得著更新的外在表現。清教徒歐文（John Owen）以其滔滔雄辯，聲壯氣沉地闡釋這方面的主題，他界定成聖是神改變人的工作，而聖潔就是被神改變了的人的生活方式。以下是一些對我們有幫助的定義，所以我將之全部引錄。歐文這樣寫道：</p>
            <p className="text-gray-700 leading-relaxed mb-3">成聖是神的靈直接在信徒的靈裡動工，潔淨他們本來被罪污染的性情，使他們重新恢復神的形象，因而幫助他們能夠按照新約的要旨和條件，借著耶穌基督的生和死，在神不變的屬靈恩典下，向神投靠順服。„„故此，聖潔就是這項工作的果效；這工作本來就定意在我們內裡完成，要在我們內心鑄造出更新的原則或神的形象。所以，依據恩典的約，又因著那新的性情，這工作也包括倚靠耶穌基督，在聖潔生活中順服神。1</p>
            <p className="text-gray-700 leading-relaxed mb-3">由此觀之，聖潔是聖靈的果子，基督徒順著聖靈而行，就有聖潔表現（加五 16、22、25）。聖潔就是與神神聖的親近。聖潔本質上是順服神，向神活著，為神而活，效法神，遵行他的誡命，與他一起對抗罪惡，實踐公義，行各樣善事，追隨耶穌的榜樣和教訓，在聖靈裡敬拜神，因著對基督的尊崇而愛神、愛人、事奉神和人。就與神的關係來說，聖潔是憑著愛、忠誠、摯情和讚美，以專一的熱誠來取悅神；就與罪的關係來說，聖潔是抵擋罪，過著自律的生活，不但不放縱肉體的情欲，更要治死身體的惡行（加五 16；羅八 13）。簡言之，聖潔是受神教導、被聖靈冶煉出酷似基督的氣質；是委身的門徒生命的內涵和總和；是由愛產生信心的表現；是重生者心靈裡的回應，湧流出超然生命的義。這樣的聖潔就是本章的主旨。</p>
            <p className="text-gray-700 leading-relaxed mb-3">很明顯，追求聖潔理應是基督徒優先考慮的事，但今天這個課題卻普遍被信徒所忽略。噢，這真是太顯而易見了。</p>
            <p className="text-gray-700 leading-relaxed mb-3">舉例說，試看看我們那種以人為中心的虔敬觀念。</p>
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

          </div>
        )}
      </div>
    </div>
  );
}
