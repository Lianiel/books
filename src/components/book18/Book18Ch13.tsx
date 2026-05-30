import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book18Ch13() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">第十三章</h1>
        <h2 className="text-xl font-semibold text-gray-700">我們作為國家公民的挑戰</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <div>
              <p className="text-gray-700 leading-relaxed mb-3">
                作為各自國家的基督徒公民，我們所面對的挑戰同樣是打敗撒但。我們應當憑著信心，藉著基督的力量，在以下四個方面下定決心。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">決心一：在一切可能的時候傳播真理、傳揚福音</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                撒但是謊言之父，他既是說謊者，也是謊言。上帝的本質是真理：聖父宣告真理（約1:18），聖子把真理顯明出來（約1:17；14:6），聖靈帶領我們認識真理（約17:17；16:13）。湯瑪斯·古德溫說：「對上帝來說，這個世界上只有三樣寶貴的東西——他的聖徒、他的敬拜和他的真理；很難說這三者當中哪一樣對他來說最寶貴。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者分享了他的兩個見證。他每次乘電梯時都利用機會與人交談；他在飛機上也總是主動與陌生人分享福音，隨身攜帶改革宗的書籍。其中有一次，他把書籍送給了一位需要每天開車九十英里的女管家，幾個禮拜後她寄來了感謝信。《傳道書》11章1節說：「當將你的糧食撒在水面，因為日久必能得著。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                布魯克斯說：「每一條真理都像金子一樣寶貴；我們必須靠真理而活，或者為真理而死。」約翰·赫斯的建議：「要尋求真理，聆聽真理，學習真理，愛慕真理，傳講真理，堅守真理，至死方休。」
              </p>
              <p className="text-gray-700 leading-relaxed italic border-l-4 border-purple-200 pl-4">
                「保守真理，真理就會保守你。」——威廉·布裡奇
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">決心二：把基督的愛給予窮人和有需要的人</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                基督徒如果對社會需要閉目不看，充耳不聞，撒但的事業就會變得更加強大。雅各鄭重地警告我們，不關心有需要的人將會受到上帝的嚴厲審判：「若是弟兄或是姐妹，赤身露體，又缺了日用的飲食；你們中間有人對他們說：平平安安的去吧！願你們穿得暖，吃得飽；卻不給他們身體所需用的，這有什麼益處呢？這樣，信心若沒有行為就是死的」（雅2:15-17）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                約翰·斯托特解釋說，基督徒對世界有兩種可能的態度：「逃避」（背對世界，棄絕非信徒）或「參與」（滿懷愛心地面向世界，不怕勞苦愁煩）。他總結說：「如果我們真的愛鄰舍，並渴望服侍他們，我們就會關心他們的全部福益——他們靈魂的狀況，身體的狀況和社群的狀況。我們的關心將會帶來實際的計畫。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                荷蘭改革宗的結婚儀式挑戰新婚的丈夫，要求他忠心地工作，誠實地供養家庭，「並有餘力周濟窮人」。我們投入時間和金錢來幫助窮人了嗎？
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">決心三：大膽宣講關於聖經和道德的事</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                很多基督徒避免參與政治，但政治腐化的一個重要原因，可能就是因為上帝的子民往往不再參與其中。上帝設立了國家政權來在社會中施行公義，建立秩序和正義，謀求公共利益（羅13:1-7）——這提供使福音、敬虔和誠實可以興盛的和睦環境（提前2:1-2）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                基督徒如何參與政治？作者提出四個原則：
              </p>
              <div className="space-y-2 ml-4">
                <p className="text-gray-700"><span className="font-semibold">（1）研讀聖經尋求帶領：</span>瞭解聖經對道德問題的觀點，並向家人、朋友、工作夥伴談論這些問題。</p>
                <p className="text-gray-700"><span className="font-semibold">（2）每天為國民政府禱告：</span>為那些在位掌權的禱告（提前2:1-2），為未得救之人歸正、基督徒被堅固而禱告。把自己包括在為國家而做的禱告中（參但以理書第9章）。</p>
                <p className="text-gray-700"><span className="font-semibold">（3）瞭解國民政府如何運作：</span>如果基督徒像鴕鳥一樣把頭埋在沙子裡，國家當然就會墮落得更快。但要注意：教會不應當是政治機構，教會的使命是把人帶到基督面前。</p>
                <p className="text-gray-700"><span className="font-semibold">（4）積極參政：</span>寫信給國家領導人，給報社編輯寫信，參加支援基督教道德觀的組織。如上帝呼召，競選公共職務；如上帝沒有呼召，支持那些持守聖經觀點的競選者。</p>
              </div>
              <p className="text-gray-700 leading-relaxed mt-3 italic border-l-4 border-purple-200 pl-4">
                路德名言：「無論我多麼勇敢，用最洪亮的聲音，用最清晰的表述，宣告上帝所啟示的真理的每一部分，如果在那一時刻世界和撒但沒有攻擊我，我就不是在宣告基督。在激烈的戰場上，才能證明士兵的忠誠。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">決心四：為基督而活——全書的終結</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅在《以弗所書》4章27節說：「不可給魔鬼留地步。」不要給魔鬼留任何通路。要忙於自己當盡的愛的本分，就不會留時間給撒但。他是非法佔領者，在這個世界上沒有任何合法的權利。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                《哥林多後書》2章16節問：「這事誰能當得起呢？」有很多年，作者以為那是個反問句，回答是「我肯定不能」。然而保羅在六節經文之後回答了：「並不是我們憑自己能承擔什麼事，我們所能承擔的，乃是出於上帝」（林後3:5）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                藉著基督的能力，我們可以為上帝的榮耀而活，過打敗撒但的得勝生活——不管是在個人生命中，在教會生活中，還是在國家生活中，都是如此。
              </p>
              <div className="bg-purple-50 rounded-lg p-4">
                <p className="text-gray-700 italic leading-relaxed">
                  「全能的上帝啊！願禰每日都向我們施恩，把你確定不移的旨意擺在我們的面前，不僅使我們可以耳聞目睹，思想你向我們啟示的真理，而且使我們心裡清清楚楚，大有確信，以便我們可以在真宗教的事業中繼續前進，無論撒但及其邪靈如何誘騙我們，我們都永不偏離，而是立場明確，堅忍不移，直到爭戰結束，使我們最終享受我們的主耶穌基督早已在天上為我們預備好的蒙福的安息。阿們。」
                </p>
                <p className="text-right text-gray-600 text-sm mt-2">——約翰·加爾文禱告</p>
              </div>
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
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「傳播真理」的日常神學——普通對話也是宣教</h4>
              <p className="text-gray-700 leading-relaxed">
                作者在電梯和飛機上傳福音的故事，體現了改革宗傳統中一個重要的宣教理念：「日常生活即宣教」（everyday evangelism）。這與一些人認為「福音傳講應當留給牧師」的觀念形成了對比。加爾文認為，每個基督徒都是在自己所在的「呼召」（vocation）中侍奉上帝的祭司。一個電梯裡的善意話語、一本送出去的書、一次真誠的傾聽，都可以是上帝拯救靈魂的管道。《傳道書》說「撒在水面的糧食」必能得著，意味著我們不必計算投資回報率，只需忠心地撒種，把收成交給上帝。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">基督徒的社會責任——不是「社會福音」，而是「道成肉身的愛」</h4>
              <p className="text-gray-700 leading-relaxed">
                本章關於關心窮人的呼召，需要與二十世紀初「社會福音」（social gospel）的錯誤區分開來。「社會福音」以社會改革取代個人救恩，最終失去了基督信仰的核心。但這並不意味著基督徒應當只關心靈魂救恩而不關心社會需要。約翰·斯托特的「整全宣教」（holistic mission）強調：真正的愛心關懷整個人——靈魂和身體，個人救恩和社會公義。基督「道成肉身」的模式啟示我們：上帝關心的真實是道成的肉身，而不只是抽象的靈魂。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">基督徒與政治——「屬天的公民身份」與「屬地的公民責任」</h4>
              <p className="text-gray-700 leading-relaxed">
                本章對基督徒政治參與的立場，體現了改革宗「文化使命」（cultural mandate）的神學。加爾文的日內瓦不只是一個教會社區，也是一個試圖在城市生活各方面體現上帝主權的實驗。但這與「基督教神權政治」（theocracy）不同——教會和國家各有其功能，教會不應成為政治機構，但基督徒個人可以也應當以鹽和光的方式影響政治。保羅本人使用他的羅馬公民身份反對不公（徒16:35-39），展示了利用合法的公民權利來追求公義的榜樣。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">全書總結：「為基督而活」——屬靈爭戰的最終目的</h4>
              <p className="text-gray-700 leading-relaxed">
                本書從第一章講到了屬靈爭戰的激烈性、必要性，歷述撒但的歷史、策略和詭計，討論了防禦和進攻的武器，最後以「為基督而活」作為全書的頂點。這個結構本身就是一個神學宣言：屬靈爭戰不是目的，基督才是目的。我們認識撒但的策略，不是為了迷戀屬靈爭戰，而是為了更加自由地愛基督、服侍基督。加爾文的那篇禱告以「我們最終享受……蒙福的安息」結尾，提醒我們：戰爭終將結束，安息必然來臨。在那安息中，再也沒有撒但，只有與基督永恆的相交。
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
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">1.</span>
              <p className="text-gray-700">作者在電梯和飛機上主動傳福音——這對你來說感覺如何？你有沒有類似的「日常傳福音」的機會？是什麼使你猶豫或鼓起勇氣？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">「關心窮人和有需要的人」——你目前在這方面的實踐如何？你認為你最應當改進的是什麼？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">你對基督徒參與政治的態度是什麼？你認為你所在的文化背景下，基督徒的政治參與最大的危險是什麼（過度政治化？還是完全退出？）？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">本章說「生命是短暫的，短得令人難以置信」。這個現實如何影響你今天的優先順序和選擇？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">讀完這整本書，你對撒但的認識有哪些最重要的改變或加深？這些認識如何具體地改變了你的屬靈生活？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">加爾文以禱告結束這本書的思想——「使我們最終享受……蒙福的安息」。天堂的盼望如何幫助你在今生的屬靈爭戰中持守？</p>
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
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📢 開始一個「福音傳播習慣」</h4>
              <p className="text-gray-700 mb-2">「撒種在水面」——選擇一個你可以持之以恆的傳福音方式：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>準備一兩本適合送給非信徒的福音書籍或小冊子，隨身攜帶</li>
                <li>決定每週至少主動與一個非信徒深入交談，詢問他們的生命和信仰</li>
                <li>禱告列出三個你要特別為之傳福音的人，每天為他們禱告</li>
                <li>如果對方表示有興趣，邀請他們參加主日敬拜或讀書小組</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 尋找一個具體服侍窮人的機會</h4>
              <p className="text-gray-700 mb-2">「言語和行為上都關心有需要的鄰舍」——本週採取一個具體行動：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>詢問你的教會是否有關懷弱勢的事工，如果有，考慮參與一次</li>
                <li>查看你居住的社區是否有需要幫助的家庭或個人</li>
                <li>重新審視你的消費和奉獻習慣：你有沒有「有餘力周濟窮人」？</li>
                <li>記住：不只是金錢，時間和陪伴有時更寶貴</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">⏰ 讀完整本書後的整合反思</h4>
              <p className="text-gray-700 mb-2">花一個小時做讀書後的整合反思：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>回顧全書13章：哪一章對你的影響最深？為什麼？</li>
                <li>在你的屬靈爭戰中，最需要加強哪一種武器（聖道、禱告、信心、謙卑……）？</li>
                <li>寫下你讀完這本書後想要改變的三件具體的事</li>
                <li>把這三件事帶入禱告，邀請上帝在其中做工</li>
                <li>考慮把這本書分享給一位正在屬靈爭戰中的弟兄姊妹</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4 mt-4">
              <h4 className="font-semibold text-green-700 mb-2">🙏 全書結束禱告——以加爾文的禱告為藍本</h4>
              <p className="text-gray-700 italic leading-relaxed">
                全能的上帝啊，感謝你讓我有機會認識撒但的詭計，更深地認識你的得勝。願你每日向我施恩，使你確定不移的旨意成為我生命的定向。無論撒但及其邪靈如何誘騙，使我永不偏離，而是立場明確，堅忍不移，直到爭戰結束。使我在個人生命中、在教會中、在國家中都能為你的榮耀而活，傳播你的真理，直到我最終享受你早已在天上為我預備好的蒙福的安息。奉主耶穌基督的名，阿們。
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
