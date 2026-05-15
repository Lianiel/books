import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp, Shield } from 'lucide-react';

export default function Book14Ch4() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ sec0: true });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          第4章
        </h1>
        <h2 className="text-xl font-semibold text-gray-700">聖靈的路徑：聖潔之道</h2>
      </div>

      <div className="mb-4 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => toggleSection('sec0')}
          className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800 text-left text-sm">04 聖靈的路徑：聖潔之道</span>
          </div>
          {expanded['sec0'] ? <ChevronUp className="w-4 h-4 text-gray-500 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />}
        </button>
        {expanded['sec0'] && (
          <div className="p-5 bg-white">
              <p className="text-gray-700 leading-relaxed mb-3">不論是好是壞，我們大多數人一聽見「性」這詞都會產生觸電的感覺。我的意思是他迫使我們注意，使我們驚醒，抓住本來勿勿掠過的眼神和輕忽的耳朵；他帶有情感的電荷，給予我們一種情感的衝擊。</p>
              <p className="text-gray-700 leading-relaxed mb-3">為何會這樣？因為對於正常的成人來說，性是一個有無窮興味的主題。（你發現自己閱讀這段文章時特別加倍留心，是嗎？這就是我的意思。）基督徒的優先選擇</p>
              <p className="text-gray-700 leading-relaxed mb-3">對於健康的基督徒來說，聖潔一詞也同樣令人加倍留神。為什麼？因為神已經在每一個重生的心靈裡，深深種植一份對成聖趨之若渴的情感。成聖意指接近神、像神、委身給神和取悅神，是信徒在世上最希望達到的。他們對聖靈感興趣的一個原因，是因為知道聖靈的主要工作之一是使我們聖潔。</p>
              <p className="text-gray-700 leading-relaxed mb-3">基督徒想瞭解和證明聖靈使人成聖的能力，是十分正常和自然的；任何信徒若然對追求聖潔漠不關心，他的信仰很可能出了問題。本章是向一切有心追求聖潔的正常基督徒進言。</p>
              <p className="text-gray-700 leading-relaxed mb-3">我們應該知道，「聖潔」是聖經中一個重要的辭彙。他的字根包含分離或隔開的意思；首先，這個詞意味著神跟人分別開來，其次，他標誌著基督徒為神分別出來。這裡，我們所關心的是第二個含義。</p>
              <p className="text-gray-700 leading-relaxed mb-3">那召你們的既是聖潔，你們在一切所行的事上也要聖潔；因為經上記著說：「你們要聖潔，因為我是聖潔的。」（彼前一 15、 16，引利—一 44、45）</p>
              <p className="text-gray-700 leading-relaxed mb-3">神的旨意就是要你們成為聖潔，„„神召我們，本不是要我們沾染污穢，乃是要我們成為聖潔。„„ 願賜平安的神親自使你們全然成聖。又願你們的靈與魂與身子得蒙保守，在我主耶穌基督降臨的時候，完全無可指摘。（帖前四 3、7，五 23）</p>
              <p className="text-gray-700 leading-relaxed mb-3">„„神從創立世界以前，在基督裡揀選了我們，使我們在他面前成為聖潔，無有瑕疵；„„基督愛教會，為教會舍己，要用水借著道把教會洗淨，成為聖潔，可以獻給自己，作個榮耀的教會，毫無玷污、皺紋等類的病，乃是聖潔沒有瑕疵的。„„我們原是他的工作，在基督耶穌裡造成的，為要叫我們行善，就是神所預備叫我們行的。（弗一 4，五 25—27，二 10）     所以弟兄們，我以神的慈悲勸你們，將身體獻上，當作活祭，是聖潔的，是神所喜悅的；你們如此事奉乃是理所當然的。（羅一二 1）</p>
          </div>
        )}
      </div>
    </div>
  );
}
