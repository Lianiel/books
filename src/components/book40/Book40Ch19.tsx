import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Waves, Star, Search, HelpCircle, Check } from 'lucide-react';

const quote = "border-l-4 border-emerald-300 bg-emerald-50 pl-4 py-3 mb-3";
const quoteText = "text-emerald-800 leading-relaxed italic";

export default function Book40Ch19() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-800 to-orange-900 bg-clip-text text-transparent">第十九章</h1>
        <h2 className="text-xl font-semibold text-gray-700">第十誡：不可貪心（全書結語）</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          「不可貪戀人的房屋；也不可貪戀人的妻子、僕婢、牛驢，並他一切所有的。」（出20:17）
        </p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Waves className="w-5 h-5 text-amber-800 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">一、第十誡的精神——貪心是萬罪之源</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                出埃及記二十章17節：「不可貪戀人的房屋；也不可貪戀人的妻子、僕婢、牛驢，並他一切所有的。」「貪心」也可以稱為「貪婪」，指一種攫取超過自身需求的金錢、物質財富或肉體滿足等的強烈欲望。貪心的人為貪而貪，從不考慮自己是不是真的需要這些東西，也不理會其他個體的需要，常忽視其他人的福利。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                第十誡指出「貪心是人犯罪的本源」。從始祖亞當、夏娃開始就是如此。人因為貪戀別人的財產（房屋、僕婢、牛驢，並他一切所有的），導致謀財害命（犯第六誡），也導致說謊（犯了第九誡）；人也因貪戀別人的妻子導致淫亂（犯第七誡）。可見，第十誡雖然排在十誡之末，卻是其他多條誡命之所以會被破壞的根源。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">二、聖潔生活的秘訣——知足與感謝</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                因此，過聖潔的生活的秘訣，在於相信並學習滿足神所給我們的一切，以自己所有的為滿足，也以神為樂！
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                第十誡的意義就是要我們對所擁有的一切，心存感謝。若我會為上帝給我的賞賜感謝的話，就不會貪婪地覬覦別人的財富。會感謝的人一定是個知足的人，跟他生活在一起是件愉快的事。跟一個不會感謝的人是無法和睦相處的，他們一直都不滿足，不管是薪水、配偶，還是生活，沒有一樣合他們的意，貪得無厭。會感謝的人則滿足於他所擁有的，他的心思意念不會繞著別人的東西打轉，而會思考上帝所給他的賞賜。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「會感謝」讓我不會不由自主地去跟別人比較，把事業和能力看得比其他事物更重要。它讓我能夠跟別人一起為他的成就感到高興，我既不必貶抑他，也不會看輕我自己。「會感謝」讓我們可以和諧相處，能夠從不斷的對立和無止盡的比較中解放出來。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                每個人都有足夠的理由去感謝，不只對上帝所賞賜給我的事物感謝，還應該為他賜給我的親朋好友感謝，也為那些擁有我所沒有的恩賜的人感謝。我不需要擁有一切，能夠讚賞別人擁有我所沒有的恩賜，是件很美的事，這樣一來，我就不會嫉妒，也能夠為他人所擁有的高興。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">三、不可貪戀別人的妻子——欣賞與佔有的分際</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「不可貪戀別人的妻子」的意思並不是說，我不應欣賞別人妻子的優點。若我欣賞朋友的妻子，並告訴我的朋友和他的妻子這件事，我的朋友甚至還會引以自豪。但是我不應該採取任何行動去佔有她，因為她並不屬於我，而是別人的妻子。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我看重他們之間的愛情，並且不以任何可能的手段破壞他們之間的愛，去佔有那個女人。我能夠尊重我所喜歡的那個女人去愛她的丈夫、屬於她的丈夫。我尊重她的生活領域，我不會試著去跟她調情、用送禮物或是誇大的讚美，來贏得她的心。今天許多人之所以會外遇，就是因為沒有持守這樣的界限，以致愈陷愈深！我們當引以為戒！
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">四、結語——十誡是使人自由的話語</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                走完十誡的旅程，作者引用古倫神父的話來作全書的總結：
              </p>
              <div className={quote}>
                <p className={quoteText}>
                  「上帝頒佈十誡並不是出於專斷的意志，只是為了要向人類展現祂的權力；而是要藉著十誡對我們說話，那是生命的話語，是帶領我們進入自由的話語。上帝在西乃山上向祂的子民所說的這十句話充滿智慧。在今天這個充斥著空洞話語的時代，我們需要清楚明確的話語，需要能指引我們得到有意義人生的話語。我們感受到『只要我喜歡有什麼不可以？』的時代已經過去了。『什麼都可以』、『一切都是可能的』，這些後現代的口號已經落伍了，這些口號不會幫助人得到生命，反而讓人太過隨便。一旦過於隨便，就完全跟愛沒有關係了，甚至，還會扼殺愛。上帝在十誡裡所賜給我們這些明確的話語，護衛了我們的生命和愛，保守我們的愛不被濫用與猜疑。」
                </p>
              </div>
              <div className={quote}>
                <p className={quoteText}>
                  「十誡給予我們每個人生命該走的方向——即使這些誡命已經流傳了三千年，仍絲毫未減其現實意義。相反地，在這個全球化的時代裡，對我們更具有另一層新的意義：它們為這個世界指引了一個方向，使我們擁有一個更有人性，更加充滿希望的未來！」
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                十誡看似古老，卻是使人得自由的話語。從「除了耶和華以外不可有別的神」到「不可貪心」，十條誡命共同編織出一幅完整的圖畫：敬拜獨一真神、尊重權柄與生命、守護婚姻與家庭、誠實使用言語與財富、知足感恩地面對所擁有的一切。這不是捆綁人的重擔，而是引導人活出真自由、真幸福的生命指引。
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
                '第十誡「不可貪心」指向一種攫取超過自身需求的強烈欲望，貪心的人只顧自己不理會他人福利；第十誡雖排在十誡之末，卻被指出是「人犯罪的本源」——從亞當夏娃開始，貪戀別人的財產導致謀財害命與說謊，貪戀別人的妻子導致淫亂，可見貪心是其他誡命被破壞的根源。',
                '過聖潔生活的秘訣在於知足與感謝——會感謝的人滿足於自己所擁有的，不會不由自主地跟別人比較；不會感謝的人則永遠不滿足，貪得無厭，難以與人和睦相處。感謝讓我們從對立和無止盡的比較中解放出來，也能為他人的成就與恩賜由衷高興。',
                '「不可貪戀別人的妻子」並非禁止欣賞他人的優點，而是禁止採取任何行動去佔有不屬於自己的人——尊重對方的生活領域與婚姻關係，不以調情、送禮或誇大讚美越界，才是持守這條誡命的分際；許多外遇正是從未能持守這樣的界限開始。',
                '全書以古倫神父的話作結：十誡不是上帝專斷權力的展現，而是帶領人進入自由的生命話語，在「什麼都可以」的後現代空洞口號中，十誡為世界指引了方向，護衛了生命與愛，使人活出更有人性、更充滿希望的未來。',
                '從第一誡「除了耶和華以外不可有別的神」到第十誡「不可貪心」，十條誡命共同編織出完整的倫理圖畫——敬拜獨一真神、尊重權柄與生命、守護婚姻家庭、誠實使用言語財富、知足感恩——十誡不是捆綁人的重擔，而是使人得著真自由、活出幸福人生的美好指引。',
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
              <h4 className="font-semibold text-gray-800 mb-2">為何「貪心」被安排在十誡的最後一條，卻被稱為「人犯罪的本源」？</h4>
              <p className="text-gray-700 leading-relaxed">
                前九誡大多針對外顯的行為（拜偶像、殺人、姦淫、偷盜、作假見證），第十誡卻直指內心深處的欲念。這個安排極具智慧——它提醒我們，外在的犯罪行為往往源自內心尚未被察覺的貪戀。十誡從外在行為規範，一路收束到內心動機的省察，正呼應了耶穌在登山寶訓中「動怒等於殺人、動淫念等於姦淫」的教導，顯示舊約與新約在倫理精神上一脈相承。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「會感謝的人」與「不會感謝的人」的對比，對現代人的心理健康有何啟發？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者描述不會感謝的人「一直都不滿足，不管是薪水、配偶，還是生活，沒有一樣合他們的意」，這個描寫精準刻畫了現代人常見的慢性不滿足感。當代正向心理學也印證：感恩的操練能顯著提升幸福感與人際關係品質。第十誡從屬靈的角度，比心理學研究更早指出了感謝與知足是對抗貪婪、活出和諧生命的核心秘訣。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">全書以古倫神父「十誡是使人自由的話語」作結，這個框架對理解整本十誡倫理學有何統整意義？</h4>
              <p className="text-gray-700 leading-relaxed">
                全書開篇（前言）便已提出「十誡——使人自由的律法」這個核心命題，全書結尾又再次呼應這個主題，形成完整的首尾呼應。這提醒讀者，十誡不應被誤解為一套限制自由的規條清單，而是上帝出於愛，為要保護人類免於自我毀滅（謀財害命、淫亂、貪婪的網羅）所賜下的生命指引——遵守十誡不是失去自由，而是活出更豐盛、更自由的生命。
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
              '回顧自己的生活，你是否曾因貪戀別人所擁有的（財富、地位、婚姻、恩賜），而讓自己陷入不滿足、甚至犯罪的網羅中？',
              '「會感謝的人」與「不會感謝的人」，你認為自己比較接近哪一種？你願意做出什麼具體的改變，來操練感謝的心？',
              '「不可貪戀別人的妻子」提醒我們要持守欣賞與佔有之間的界限，你認為在人際關係中，還有哪些類似的界限需要留意？',
              '讀完整本《原來十誡這麼重要》，哪一誡對你個人的生命最有觸動？為什麼？',
              '古倫神父說十誡是「帶領我們進入自由的話語」，讀完全書後，你對「十誡使人自由」這句話的理解，跟一開始讀這本書之前相比，有什麼改變？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 讀腓立比書四章11-13節</h4>
              <p className="text-gray-700 mb-2">找時間讀保羅的知足之道：「我無論在什麼景況都可以知足，這是我已經學會了……我靠著那加給我力量的，凡事都能做」，作為對第十誡「知足感恩」精神的呼應。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 寫一份感恩清單，回顧十誡的全書旅程</h4>
              <p className="text-gray-700 mb-2">
                寫下十件你目前所擁有、值得感謝的事物（不限於物質），並且花一點時間回顧整本書，寫下對你觸動最深的一條誡命，以及你願意付諸行動改變的地方。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告（全書總結禱告）</h4>
              <p className="text-gray-700 italic">
                「主啊，感謝祢賜下十誡，不是要捆綁我，而是要引導我活出真自由、真幸福的生命。求祢赦免我心中一切的貪戀與不知足，教導我學會感謝祢所賜給我的一切。求祢的話語繼續光照我，使我在敬拜、尊重生命、守護婚姻、誠實言語與財富、知足感恩的每一個層面，都活出討祢喜悅的生命。願祢的話語成為我腳前的燈、路上的光，引導我走完信仰的道路，直到見主面的那一天。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
