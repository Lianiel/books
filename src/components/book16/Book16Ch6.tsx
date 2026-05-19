import React from 'react';
import { Award, Search, HelpCircle, Check } from 'lucide-react';

export default function Book16Ch6() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* 標題 */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">第五章</h1>
        <h2 className="text-xl font-semibold text-gray-700">靈修觀歷史概覽與選讀</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-violet-100 rounded-lg overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-violet-50 to-purple-50 flex items-center gap-2">
          <Award className="w-5 h-5 text-violet-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">主要內容</span>
        </div>
        <div className="p-5 bg-white space-y-4">

          {/* 早期教父 */}
          <h3 className="font-bold text-gray-900 text-lg">一、早期教父的靈修觀</h3>
          <div className="space-y-3">
            <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-400">
              <h4 className="font-semibold text-amber-900 mb-2">尼撒的格列高利（Gregory of Nyssa, ~335-394）</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                在卡帕多西亞三教父中，格列高利在神秘神學方面最有影響力，通常被視為默觀傳統的早期開創者之一。他的名著《摩西的生平》以摩西的屬靈歷程為框架，描述靈魂從光明到黑暗的「神秘上升」——走進「澄明之黑暗」，才能真正認識超越人理解的上帝。
              </p>
              <p className="text-gray-700 text-sm mt-2 italic border-l-2 border-amber-300 pl-3">
                思考問題：文中所說的「黑暗」是什麼意思？為什麼作者會用「澄明之黑暗」來描述這種黑暗，並且認為當中呈現吸引人靈魂的美？
              </p>
            </div>
            <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-400">
              <h4 className="font-semibold text-amber-900 mb-2">希波的奧古斯丁（Augustine of Hippo, 354-430）</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                《懺悔錄》的主題就是他的名言：「你造出我們是為了你，我們的心不安息在你的裡面便不會有安寧。」奧古斯丁以向內省察的方式，談到靈魂向上帝提升時，更多談到上帝的智慧——他相信靈魂有可能體悟到上帝的智慧。通常把奧古斯丁歸入福音派傳統，因他強調恩典的優先性。
              </p>
            </div>
          </div>

          {/* 天主教靈修觀 */}
          <h3 className="font-bold text-gray-900 text-lg mt-4">二、天主教的靈修觀</h3>
          <div className="space-y-3">
            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-900 mb-2">伊格納修（Ignatius of Loyola, 1491-1556）</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                耶穌會創始人，著有《神操》（Spiritual Exercises）。神操以四周為結構，帶領信徒系統性地默想基督的生平、受難與復活。第一周的重點是罪的認識和悔改：詳細回顧自己一生所犯的罪，「思考每一條大罪本身的醜惡和邪惡」，並「把天主的屬性與在我內心反天主的傾向作比較」。
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-900 mb-2">阿維拉的特雷莎（Teresa of Ávila, 1515-1582）</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                名著《七寶樓臺》（The Interior Castle）把人的靈魂比作一個七層的城堡，靈修的目標是從外層進入最深的第七層，在那裡與上帝神秘地合一。她稱這種最深的合一為「神婚」，描述靈魂與基督完全聯合的境界。這種靈修觀強調靈修的目的不只是服事，而是與上帝自身的合一。
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-400">
              <h4 className="font-semibold text-purple-900 mb-2">十架約翰（John of the Cross, 1542-1591）</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                他描述的「靈魂的黑夜」（Dark Night of the Soul）是靈修傳統中最著名的概念之一，描述靈修者在邁向與上帝更深聯合的路上所必須經歷的痛苦淨化。他的詩歌充滿對基督的渴慕，以及因感到被上帝「遺忘」而產生的痛苦——這種痛苦本身是愛的記號。
              </p>
            </div>
          </div>

          {/* 基督新教靈修觀 */}
          <h3 className="font-bold text-gray-900 text-lg mt-4">三、基督新教的靈修觀</h3>
          <p className="text-gray-700 leading-relaxed text-sm mb-3">
            改教家的靈修觀有一個根本的轉向：靈修回到日常生活之中，屬於每個基督徒，不是少數修道士的特權。信徒皆祭司的原則得以充分體現。
          </p>
          <div className="space-y-3">
            <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-teal-400">
              <h4 className="font-semibold text-teal-900 mb-2">馬丁·路德（Martin Luther, 1483-1546）</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                路德的靈修觀以「因信稱義」為核心。他把信徒與基督的關係比作婚約：信徒的罪都歸給基督，基督的義都歸給信徒。這種位格性的聯合是靈修的基礎，不是成就，而是恩賜。他的《基督徒的自由》（1520）闡明：基督徒是最自由的主人，不受任何人管轄；又是最盡責的僕人，甘心服事每個人。
              </p>
            </div>
            <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-teal-400">
              <h4 className="font-semibold text-teal-900 mb-2">約翰·加爾文（John Calvin, 1509-1564）</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                加爾文定義敬虔為「我們經歷神的恩惠，並因這知識產生我們心裡對神的敬畏和愛」。他的靈修觀更側重信徒作為兒女與父的關係——一種父子關係中對父的敬畏。《基督教要義》三卷六至十章論「基督徒生活」，強調：否定自己、背負十架、默想永生，是基督徒生活的三個核心要素。
              </p>
            </div>
            <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-teal-400">
              <h4 className="font-semibold text-teal-900 mb-2">勞威廉（William Law, 1686-1761）</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                清教徒傳統中的靈修家，著有《敬虔與聖潔生活的嚴肅呼召》。他特別關注靈魂與身體的關係：「靈魂與身體乃是聯合的，它們相互影響。靈魂裡的思想情緒會讓身體產生作用；反過來，身體的某些行為也能對心靈產生影響，激發思想和情緒。」他強調唱詩對靈修的重要性，正是基於這種靈體合一的觀點。
              </p>
            </div>
            <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-teal-400">
              <h4 className="font-semibold text-teal-900 mb-2">約翰·衛斯理（John Wesley, 1703-1791）</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                衛斯理強調靈裡重生的確據和「聖潔的完全」。他說自己要做一個「讀一本書的人」——那本書就是聖經，聖經在他的靈修觀中佔據核心地位。他的聖潔運動影響了中國近代教會中對靈修的理解，並間接引入了勞倫斯修士（Brother Lawrence）和蓋恩夫人（Madame Guyon）的靈修傳統。
              </p>
            </div>
          </div>

          {/* 靈修與位格生命的合一 */}
          <h3 className="font-bold text-gray-900 text-lg mt-4">靈修與位格生命的合一</h3>
          <p className="text-gray-700 leading-relaxed">
            作者最後總結靈修的目標：不是達到某種神秘狀態，而是與上帝的位格生命的合一。這種合一要求「知行與裡外的合一」——心靈的直覺要通過思想呈現，並透過行為表達出來。當「心靈、思想、行動」三點貫通一體的時候，生命就通暢了。
          </p>
          <p className="text-gray-700 leading-relaxed">
            孫毅認為，基於特定身位（信徒的具體處境）的靈修觀，更接近清教運動的傳統——強調靈修與信徒日常生活實踐的結合，使靈修不只是屬靈精英的追求，而是每一個委身跟隨基督的信徒的生命道路。
          </p>
        </div>
      </div>

      {/* 延伸探討 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 flex items-center gap-2">
          <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">延伸探討</span>
        </div>
        <div className="p-5 bg-white space-y-5">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">天主教與新教靈修觀的主要差異</h4>
            <p className="text-gray-700 leading-relaxed">
              天主教靈修傳統（特別是默觀傳統）傾向於把靈修的高點設定為「與上帝的神秘合一」（unio mystica），而這通常被視為少數特殊蒙召者的追求。新教（特別是改革宗）強調靈修是每個信徒通過信心與基督聯合的日常生活，不存在「平信徒靈修」和「修士靈修」的兩個等級。這個差異深刻地影響了各自對靈修目標和方法的理解。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">中國教會的靈修傳統</h4>
            <p className="text-gray-700 leading-relaxed">
              作者特別指出，敬虔派靈修傳統對中國近代教會有深遠影響，特別是通過衛斯理運動傳入的勞倫斯修士的《練習上帝的同在》和蓋恩夫人的著作。這些作品強調一種個人化的、內在的靈修操練。作者對這種傾向既有肯定，也指出它可能帶來的「個人完全被動」的神秘主義傾向的問題，需要以改革宗的聖言中心加以平衡。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">靈修史對今日信徒的意義</h4>
            <p className="text-gray-700 leading-relaxed">
              了解靈修歷史的意義在於：（1）我們不是第一批嘗試與上帝深交的人，前人的智慧和教訓對我們有寶貴的參考價值；（2）不同傳統的洞見各有側重，可以互相補足；（3）靈修傳統的歷史告訴我們，對上帝的渴慕是普世性的，超越文化和時代。
            </p>
          </div>
        </div>
      </div>

      {/* 反思問題 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">反思問題</span>
        </div>
        <div className="p-5 bg-white space-y-3">
          {[
            '在本章介紹的靈修家中，哪一位的靈修觀最讓你感到共鳴？哪一位最讓你感到陌生或挑戰？',
            '奧古斯丁說「我們的心不安息在你的裡面便不會有安寧」。這句話如何描述你目前的靈命狀態？',
            '天主教的靈修傳統（如默觀、神秘合一）對你有吸引力嗎？你覺得這些傳統有哪些地方是值得新教信徒學習的？',
            '加爾文的三個生命要素（否定自己、背負十架、默想永生）對你來說，哪一個是你最難實踐的？',
            '勞威廉強調靈魂與身體的相互影響，這讓你想到你可以如何通過身體的操練（如唱詩、守靜、禁食）來影響你的靈魂？',
            '了解了靈修的歷史之後，你覺得你個人的靈修觀最受哪個傳統的影響？你希望有什麼改變？',
          ].map((q, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">{i + 1}.</span>
              <p className="text-gray-700">{q}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 具體實踐方針 */}
      <div className="mb-6 border border-green-100 rounded-lg overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 flex items-center gap-2">
          <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">具體實踐方針</span>
        </div>
        <div className="p-5 bg-white space-y-4">
          <div>
            <h4 className="font-semibold text-green-700 mb-2">📚 選讀靈修經典</h4>
            <p className="text-gray-700 mb-2">根據你對本章的感受，選讀以下任何一本書（各取一章即可，不需全讀）：</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
              <li>奧古斯丁《懺悔錄》第一卷（關於心靈的渴望）</li>
              <li>加爾文《基督教要義》三卷六至八章（基督徒生活）</li>
              <li>勞倫斯修士《練習上帝的同在》（簡短易讀）</li>
              <li>勞威廉《敬虔與聖潔生活的嚴肅呼召》第一至三章</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">🎵 操練唱詩作為靈修</h4>
            <p className="text-gray-700 mb-2">按照勞威廉關於靈魂與身體相互影響的觀點，這週嘗試在靈修時加入唱詩：選一首你熟悉的讚美詩，用心唱三遍（而不只是用嘴唱），留意它如何影響你的心靈狀態。</p>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">✍️ 寫下你的靈修觀</h4>
            <p className="text-gray-700 mb-2">讀完全書後，用一段話寫下：「我的靈修觀是……」這不是考試，而是一個整合你所學習的機會，幫助你把本書的教導內化為自己的信念。</p>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">🙏 禱告詞</h4>
            <p className="text-gray-700 italic border-l-4 border-green-300 pl-4">
              「主啊，感謝你在歷世歷代中有許多忠心的人，用他們的生命和著作告訴我如何更深地認識你。求你讓他們的智慧成為我靈修的養分，而不只是知識的積累。幫助我把所學到的一切化為實際的行動：否定自己、背負十架、默想永生。讓我的靈修不只停留在「關於你的知識」，而是真實地遇見你、認識你、愛你。奉主耶穌基督的名，阿們。」
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
