import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Target, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book41Ch27() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-800 to-cyan-900 bg-clip-text text-transparent">第四部 4-1</h1>
        <h2 className="text-xl font-semibold text-gray-700">融入榮辱感於目標中</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">第四部：世界基督教運動中的榮辱感</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                本書進入最後一部：遍傳——世界基督教運動中的榮辱感，共有四章：融入榮辱感於目標中、訓練中、實踐中，以及全書結論。第一章探討在世界基督教運動中，榮辱意識可能被視為最高層次——「神學的榮耀國度」，這是終末的（Teleological，源自希臘文telos，意為「終結、目標」）。作者要探索：在神的故事中，什麼是神百姓的終極目標？聖經的telos，如何影響今日世界基督教運動中的宣教事工？
              </p>
              <p className="text-gray-700 leading-relaxed">
                榮辱感是神故事的終極目標，也是世界基督教運動的核心價值觀：「神歡喜世人歸榮耀於祂」，各國各民理當把榮耀、讚美獻給神——彰顯神榮耀，正是普世宣教的關鍵和原動力。詩篇九十六篇1-5節宣告：「你們要向耶和華唱新歌！全地都要向耶和華歌唱！……天天傳揚他的救恩！在列邦中述說他的榮耀！」霍桑在〈神榮耀的故事〉一文中精闢總結：「為了獲得榮耀，神向萬國彰顯祂的榮耀；透過萬民的敬拜，祂得到了榮耀。」<sup>1</sup><span style={cite}>（Steve Hawthorne, "The Story of His Glory".）</span>派博在《讓萬國歡喜！》開頭寫道：「教會的終極目標不是宣教，而是敬拜；人們不知要敬拜，所以需要宣教；敬拜才是終極目標，並非宣教……宣教的需要，只是暫時的，但敬拜永遠長存。」<sup>2</sup><span style={cite}>（John Piper, Let the Nations Be Glad!）</span>保羅在以弗所書一章三次強調讚美神、彰顯神榮耀這個終極目標（弗一6、12、14）。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">在神裡面得榮耀，是為了分享神的榮耀</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「外邦的神都屬虛無；惟獨耶和華創造諸天」（詩九六5）——不敬拜真神、反而敬拜偶像，必然導致羞辱、壓迫和汙穢，拜假神的人會變得像偶像一樣毫無生氣；相對地，透過耶穌基督敬拜神，我們變得像耶穌有活潑生命，「敞著臉得以看見主的榮光……就變成主的形狀，榮上加榮」（林後三18）。鮑卡克、瑞納和麥克康奈在《改變中的世界宣教面貌》中，把哥林多後書三章7節到四章18節視為一個段落，說明「這種轉變是透過仰望基督，展現出神的形象所產生的；自然而然，衍生宣教的機會。」<sup>3</sup><span style={cite}>（Pocock, Van Rheenan, McConnell.）</span>作者特別留意，保羅在這段經文中反覆使用複數與單數並置的語法（「我們眾人〈複數〉既然敞著臉〈單數〉……就變成主的形狀〈單數〉」），揭示神的榮耀同時是個人的、也是群體共享的——這對成長於西方個人主義的作者而言，是特別的提醒：良心不僅是個人的體驗，也可以是群體的經驗（來九13-14），正如二戰後德國人集體承擔的罪疚感。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">但以理書七章：國度與榮耀的交換</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者透過但以理書七章，展示神與個人、群體分享榮耀的驚人程度：「亙古常在者」坐寶座審判（但七9-10），「人子」（耶穌）「得了權柄、榮耀、國度，使各方、各國、各族的人都事奉他」（但七14）；而聖民同樣「必要得國享受，直到永永遠遠」（七18），「國度、權柄，和天下諸國的大權必賜給至高者的聖民」（七27）。作者提出一個深刻的問題：神的國度究竟賜給誰？是基督將國交給父（林前十五24）？是亙古常在者把國交給人子（但七13-14）？還是神賜給聖徒（但七18、22、27；路十二32「你們的父樂意把國賜給你們」）？答案都是肯定的——這是神與祂百姓之間的「榮耀交換」，父神、主耶穌和聖徒一起擁有、共享國度。曾經汙穢、蒙羞、與神為敵的罪人（弗二1-3），如今竟能擁有這個國度，這幾乎是好到難以形容——難怪彼得說「信的人就得榮耀」（彼前二7），保羅說「現在的苦楚若比起將來要顯於我們的榮耀就不足介意了」（羅八18）。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">啟示錄：萬族萬民的榮耀盛宴</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                啟示錄五章描繪被殺的羔羊「用自己的血從各族、各方、各民、各國中買了人來……又叫他們成為國民，作祭司歸於神，在地上執掌王權」（啟五9-10）；聖徒與基督君王同坐寶座（啟三21），如新郎與新娘同享筵席（啟十九7-9）；新耶路撒冷中，「地上的君王必將自己的榮耀歸與那城」（啟廿一24-26）。學者穆尤（Richard Mouw）連結以賽亞書六十章與啟示錄二十一章，指出萬國帶來的文化、藝術、科學與智慧，將被基督潔淨、改變，成為敬拜的一部分——「族群的競爭消失，取而代之的是：各個族群的榮耀彰顯」，任何文化或人民都不再因身為「非主流」感到不安，種姓、階級、種族的分野所造成的自卑感將永遠消失。萊特形容這個異象「不會是民族大熔爐方式……而是一個沙拉拼盤（裡面所有成分都能保有自己獨特的顏色、質地和味道）」<sup>4</sup><span style={cite}>（Christopher Wright.）</span>。霍桑稱這整個故事為「以基督為中心的故事」（Christotelic drama）——一切都因著祂，故事的高潮不僅向前移動，也向基督移動。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">三種宣教動機：以神為本，卻涵蓋以人為本的消極與積極面向</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者提出一個整合性的框架，把宣教動機歸納為三類，全部統攝在「榮耀神」這個終極目標之下：（一）榮耀神——以神為本的首要動機，鮑卡克等人樂見教會回歸「以神為中心」的宣教動機，「強調彰顯神榮耀的講道，回歸福音的核心」；（二）地獄和拯救失喪——以人為本的「消極」動機（消極不等於負面或虛假，而是指嚴肅、真實、令人警醒的真理）：中世紀教會曾濫用地獄恐懼斂財操控人心，但這不代表要否定耶穌關於地獄的真實教導（可九43-48）；「拯救失喪」呼應耶穌的話：「人子來，為要尋找、拯救失喪的人」（路十九10），路加十五章三個比喻（迷失的羊、遺失的硬幣、失喪的兒子）凸顯了神尋找失喪者的心；（三）個人榮耀和族群榮耀——以人為本的「積極」動機：「基督是我們的榮耀」，「一切都是恩典，無人可自誇」（弗二9），保羅示範了正確面對榮耀渴望的方式——「誇口的，當指著主誇口」（林前一31；耶九23-24）；渴望個人與族群榮耀本是人心固有的渴望，罪雖然阻攔了這個渴望的實現，但宣揚成為神家庭成員所享有的榮耀，正是宣教「積極」的目標。
              </p>
              <p className="text-gray-700 leading-relaxed">
                作者總結：無論動機是「以神為本」（首要），還是「以人為本」的消極面（地獄、失喪）或積極面（個人、族群榮耀），最終都會聚集、一起敬拜神——正如派博所言：「神以無比的熱情，從各族、各方、各國中，召聚敬拜者，這是祂的普世目標。」<sup>5</sup><span style={cite}>（John Piper.）</span>本章末了提出多項「末了叮嚀」，包括：如何避免落入榮耀自己的驕傲試探？如何把「我對榮耀的渴望，如何得到滿足？」這類問題，轉化為向未得未觸之民傳福音、教會植堂的切入點？在基督裡擁有豐盛榮耀、面對羞辱時展現韌性的信徒，會有什麼樣的行為？強調神榮耀的積極路徑，是否會比拯救靈魂的消極動機，帶來更強的說服力？
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
                '第四部是全書終章，共四章：目標、訓練、實踐與結論；「融入榮辱感於目標中」開篇即宣告：普世宣教的終極目標不是拯救靈魂本身，而是萬族萬民同心敬拜、歸榮耀給獨一真神——敬拜才是永恆長存的，宣教只是暫時的手段。',
                '神的榮耀既是個人的，也是群體共享的——保羅在哥林多後書中巧妙運用複數與單數並置的語法，揭示這種張力並存的真理，提醒習慣個人主義思維的西方讀者，重新看見聖經中群體性的救贖向度。',
                '但以理書七章展現一場驚人的「榮耀交換」：亙古常在者、人子、以及聖徒，三方共同擁有並分享同一個國度的權柄與榮耀——曾經汙穢蒙羞的罪人，竟能與造物主和救贖主一同執掌王權，這是好到令人難以置信的恩典。',
                '啟示錄描繪的終極異象不是文化的抹平統一，而是「沙拉拼盤」式的保留與提升：各民族、各文化的獨特性被基督潔淨、改變後，帶著自己的色彩共同敬拜羔羊，種族與階級造成的自卑感將永遠消失。',
                '作者提出整合性框架，把宣教動機分為三層並統攝於「榮耀神」之下：以神為本（首要）、以人為本的消極動機（地獄、拯救失喪）、以人為本的積極動機（個人與族群的榮耀渴望）——三者並不互斥，而是同一終極目標的不同面向。',
                '「基督是我們的榮耀」是化解「渴望榮耀」與「驕傲試探」之間張力的關鍵：一切榮耀都繫於基督、出於恩典，「誇口的，當指著主誇口」，這使信徒既能坦然渴望神所應許的榮耀，又不至陷入自我中心的驕傲。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「宣教是暫時的，敬拜是永恆的」，這句話對今日以「事工果效」衡量成功的宣教機構文化，有何提醒？</h4>
              <p className="text-gray-700 leading-relaxed">
                許多機構習慣用歸信人數、植堂數量等可量化指標來評估宣教「成功」與否，這無可厚非，卻可能不自覺讓「完成任務」本身成了終極目標。派博的提醒重新校準了焦點：宣教的一切努力，最終是為了讓更多人能夠敬拜、經歷神，而非任務清單的完成本身。這提醒機構在設計評估機制時，除了外顯的果效數字，也應該持續追問：這些歸信者是否真正進入了敬拜神、以神為樂的生命，而不只是統計數字上的一筆。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">啟示錄「族群的獨特性被保留」的異象，對今日教會在跨文化宣教中處理「文化適應 vs. 文化保留」的張力，有何具體指引？</h4>
              <p className="text-gray-700 leading-relaxed">
                萊特「沙拉拼盤」的比喻提醒宣教工作者，福音的目標從來不是把不同民族的文化「同化」成單一（通常是宣教士自身）的文化模板，而是讓福音潔淨、更新各文化中與神旨意相悖的部分，同時保留、甚至提升該文化獨特而美好的元素。這對今日教會反思自己的宣教方法論極具意義：是否曾不自覺地要求歸信者放棄自己文化中中性、甚至美好的元素，換上宣教士自身文化的外衣？
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「地獄」作為消極宣教動機曾被中世紀教會濫用斂財操控，今日教會如何在「忠於聖經教導」與「避免重蹈屬靈操控覆轍」之間取得平衡？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者的處理方式提供了一個範本：不因歷史上的濫用就否定聖經本身的教導（地獄的真實性），但同時誠實正視這段濫權的歷史教訓。今日教會傳講地獄真理時，應當避免操縱恐懼、情緒勒索式的講道方式，而是把這個真理放在神完整的愛與公義框架中誠實陳明，並始終指向福音的好消息（神差基督拯救我們脫離審判），而非停留在恐懼本身。
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
              '「教會的終極目標不是宣教，而是敬拜」——這句話，如何調整你過去對「宣教」這個詞的理解？',
              '你觀察自己或所屬教會的宣教動機，比較偏向哪一種：以神為本（榮耀神）、以人為本消極面（拯救失喪）、還是以人為本積極面（個人／族群榮耀）？',
              '「哪些做法或規範，有助我們忠心向主、避免落入榮耀自己的試探？」試著具體回答這個問題。',
              '啟示錄中「族群的競爭消失，取而代之的是各個族群的榮耀彰顯」——這個異象，對你理解自己文化的獨特價值，帶來什麼提醒？',
              '「地獄」和「族群榮耀」這兩種截然不同的宣教動機，你認為哪一種對你認識的未信朋友更具說服力？為什麼？',
              '你和你的宣教夥伴，可以研發什麼樣的傳福音資源，把「我對榮耀的渴望如何得到滿足？」這個問題，作為向未得未觸之民傳福音的切入點？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 精讀但以理書七章、啟示錄五章與二十一章</h4>
              <p className="text-gray-700 mb-2">
                對照三處經文中「國度」「榮耀」語彙的交織出現，體會神如何把至高的統治權柄，慷慨地與祂的百姓分享，並用一段禱告回應這份恩典。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎨 為自己的文化尋找一個「獻給主的禮物」</h4>
              <p className="text-gray-700 mb-2">
                思考你自己文化中，有哪些獨特而美好的元素（藝術、智慧、傳統），可以想像成以賽亞書六十章、啟示錄二十一章中「萬國的榮耀歸與那城」的具體例子，並為此獻上感恩。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，願一切榮耀都歸給祢，直到永遠。感謝祢不僅拯救我脫離滅亡，更慷慨地把祢的榮耀分享給我，使我成為祢家庭、祢國度的一份子。求祢幫助我持守謙卑，一切誇口都指著祢的十字架，也求祢使用我，把這榮耀的盼望傳給萬族萬民。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
