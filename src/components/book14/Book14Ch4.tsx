import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Search, HelpCircle, Check } from 'lucide-react';

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

          
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">聖潔之道的本質：不是道德主義，而是關係</h4>
              <p className="text-gray-700 leading-relaxed">巴刻強調，聖潔之道的核心不是遵守道德規條，而是一個與聖靈的活潑關係。許多基督徒把成聖理解為「努力做好人」，但聖靈引導的成聖是從內而外的改變——先改變心志，再影響行為。這是保羅在羅馬書8章所說「按聖靈行事」的真義：不是靠自力壓制罪性，而是讓聖靈從內部更新我們的動機和渴望。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">罪的兩面：「罪的行為」與「罪的體質」</h4>
              <p className="text-gray-700 leading-relaxed">成聖處理兩個層面的問題：(1)個別罪行的悔改與赦免；(2)罪的傾向（本性）的持續更新。信徒在成聖過程中會發現，即使個別罪行得赦，罪的傾向仍然存在，需要聖靈持續的更新工作。這正是為什麼成聖是一生的旅程，而非一次性的事件。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">十字架與成聖：「老我」的釘死</h4>
              <p className="text-gray-700 leading-relaxed">保羅在加拉太書5章說：「凡屬基督耶穌的人，是已經把肉體連肉體的邪情私欲同釘在十字架上了。」這不是自我折磨或苦修，而是一種身份的認同——認同自己的「老我」已在基督裡被釘死。每當罪的誘惑來臨，信徒的回應是「記起」這個已成就的事實，而非靠意志力抵抗。</p>
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
              <p className="text-gray-700">你對「成聖」的理解，更偏向「努力遵守道德規條」還是「與聖靈建立關係」？這兩種理解在實踐上有什麼不同？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">巴刻說成聖的核心是「渴望」的改變，而非只是行為的改變。你能識別聖靈在你生命中改變了哪些渴望嗎？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">你生命中有哪些「根深蒂固的罪性」（不只是個別罪行），是你意識到需要聖靈持續更新的？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">「把老我釘死」這個圖像對你有什麼共鳴？你在面對罪的試探時，如何「記起」自己已在基督裡的身份？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">成聖是一個緩慢的過程，有時甚至看不見進展。你如何在這個過程中保持盼望和不放棄？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">📋 每日的「罪情意識」操練</h4>
              <p className="text-gray-700">每晚花5分鐘，問自己三個問題：(1)今天哪些行為反映了我還未更新的罪性？(2)我是靠意志力壓制，還是靠求聖靈的幫助？(3)我今天有沒有「按肉體行事」而非「按聖靈行事」的時刻？不是要自責，而是要培養對罪的敏銳。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 成聖導向的禱告</h4>
              <p className="text-gray-700">改變你的晨禱模式。不要只求神「今天幫助我做好人」，而是求：「聖靈啊，今天請你更新我的渴望，使我渴望你所渴望的，厭惡你所厭惡的。願基督的形象在我身上成形。」</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 羅馬書8章默想計劃</h4>
              <p className="text-gray-700">用兩週時間，每天默想羅馬書8章的兩到三節，特別關注聖靈在成聖中的角色。記下聖靈的工作清單：他做了什麼？他要求信徒做什麼？哪些是你已經經歷的，哪些是你還需要成長的？</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">⚔️ 「治死」一個具體的罪</h4>
              <p className="text-gray-700">選一個你意識到在你生命中持續出現的罪（可能是憤怒、嫉妒、貪婪、驕傲等），用一個月時間，有意識地：(a)每次出現時認罪；(b)求聖靈更新這個渴望；(c)記錄任何微小的改變。</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
