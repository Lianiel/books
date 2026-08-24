import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Waves, Star, Search, HelpCircle, Check } from 'lucide-react';

const quote = "border-l-4 border-emerald-300 bg-emerald-50 pl-4 py-3 mb-3";
const quoteText = "text-emerald-800 leading-relaxed italic";

export default function Book40Ch3() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-800 to-orange-900 bg-clip-text text-transparent">第三章</h1>
        <h2 className="text-xl font-semibold text-gray-700">從十誡看倫理（一）——十誡緒論</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          「我是耶和華你的神，曾將你從埃及地為奴之家領出來。」（出20:2）
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
              <h3 className="font-bold text-amber-900 text-lg mb-3">一、十誡總覽</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                出埃及記廿章記載，上帝在西乃山上，藉著摩西頒佈了十條誡命：
              </p>
              <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 mb-3">
                <ol className="space-y-2 text-gray-700 leading-relaxed">
                  <li><span className="font-semibold text-amber-800">一、</span>除了耶和華以外，你不可有別的神。（廿3）</li>
                  <li><span className="font-semibold text-amber-800">二、</span>不可跪拜偶像（廿5）</li>
                  <li><span className="font-semibold text-amber-800">三、</span>不可妄稱耶和華的名（廿7）</li>
                  <li><span className="font-semibold text-amber-800">四、</span>當守安息日（廿8）</li>
                  <li><span className="font-semibold text-amber-800">五、</span>當孝敬父母（廿12）</li>
                  <li><span className="font-semibold text-amber-800">六、</span>不可殺人（廿13）</li>
                  <li><span className="font-semibold text-amber-800">七、</span>不可姦淫（廿14）</li>
                  <li><span className="font-semibold text-amber-800">八、</span>不可偷盜（廿15）</li>
                  <li><span className="font-semibold text-amber-800">九、</span>不可作假見證陷害人（廿16）</li>
                  <li><span className="font-semibold text-amber-800">十、</span>不可貪心（廿17）</li>
                </ol>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                這十條誡命是基督教倫理學的總綱，所有基督徒會遇見的倫理問題都包含在這十條誡命中。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">二、十誡的開場白</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                出埃及記廿章1-2節記載，上帝以「我是耶和華你的神，曾將你從埃及地為奴之家領出來」，作為十誡的開場白。這樣的開場白非常的重要，有兩方面的意義：
              </p>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">1. 十誡使人脫離為奴得自由</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  當上帝將十誡做為「指示」賜給他們時，上帝想要將他們從逼迫壓榨中解救出來，祂希望他們能在自由的國度裡好好生活。
                </p>
                <div className={quote}>
                  <p className={quoteText}>
                    祂並不只是以一個偉大的拯救者的形像出現，祂還是一個充滿母性溫柔的上帝；就像一隻母鷹將牠還不會飛的孩子背著，飛在空中，讓他們呼吸自由的空氣，學習自己飛翔。祂就像一個母親照顧她的孩子一樣，是一個關心人的上帝，祂要用十誡繼續如父母般地照顧祂的子民。這些誡命彷彿就像老鷹的翅膀，上帝藉著它們不斷地帶領我們，從奴役之地走出來，進入自由的國度。（參考古倫神父「活出十誡的真自由」第29頁）
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">2. 遵行十誡的動力：拯救的恩典</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「上帝拯救我們」是我們行善的動機、動力及能力。也就是：「愛」是我們遵行神命令的動力與能力，因此，耶穌把律法的總綱歸納為「愛神和愛人」。因著經歷神愛的拯救，以致我們以遵行神的命令來回應我們對神的愛；也因著經歷神愛的拯救，我們願意如同神一樣去愛人。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  所以，在申命記中，神不斷地提到：「你也要記念你在埃及作過奴僕。你要謹守遵行這些律例——守節的時候，你和你兒女、僕婢，並住在你城裡的利未人，以及寄居的與孤兒寡婦，都要歡樂」（申16:12-14）；「你不可向寄居的和孤兒屈枉正直，也不可拿寡婦的衣裳作當頭。要記念你在埃及作過奴僕，耶和華你的神從那裡將你救贖，所以我吩咐你這樣行」（申24:17-18）。當我們愈體會神的愛，我們就會更有動力和能力去愛神和愛人。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">三、對十誡的基本認識——十誡是「基本性」的律法而非「啟示性」的律法</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                舊約的律法分為三類：
              </p>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">第一類律法：「禮儀性的律法」（或稱為「預表性」或「啟示性」律法）</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  這類的律法包括舊約的獻祭條例、飲食規定、當守的節期等。保羅說：「所以，不拘在飲食上，或節期、月朔、安息日，都不可讓人論斷你們。這些原是後事的影兒；那形體卻是基督」（西2:16-17）。這類的律法，都是預表基督的救贖事工，因此，當基督來到世上，成就救恩之後，我們新約的聖徒就不需要遵守這些禮儀性的律法了。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">第二類律法：「社會性律法」</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  這類的律法包括神為以色列百姓訂下的一些生活規範，例如，牛在場上踹穀的時候，不可攏住牠的嘴；又如，割麥子時不可割盡麥角等。這些律法是針對以色列國民而設立的，因此，不是我們國家的法律，我們不需要遵守，只需要了解這些律法的精神，並且遵守這些精神。例如，保羅把「牛在場上踹穀的時候，不可攏住牠的嘴」這條律法的精神，運用在「做工的得工價是應當的」；又如，「不可割盡麥角」的律例，雖然我們不需要遵守了，但這條律法的精神在於「看顧窮人，並給他們尊嚴」，這是我們仍然需要遵守的原則。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">第三類律法：「道德性律法」（或稱「基本性」律法）</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  十誡就是這類律法的總綱。這些律法的原則放諸四海皆準，是歷世歷代的信徒都當遵守的。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">四、十誡的三種分類</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                十誡的內容有三種分類法：
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-amber-700">第一種分類：</span>第一～四誡是「人與神應有的規範」；而第五～十誡為「人與人應有的規範」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-amber-700">第二種分類：</span>第一～五誡是「人與神應有的規範」，第六～十誡為「人與人應有的規範」。第五誡是「孝敬父母」，理應歸入「人與人應有的規範」，為何歸入「人與神應有的規範」呢？因為「孝敬父母」的精神在於順服「神所立的權柄」，因此，當我們順服父母時，就是順服神。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-amber-700">第三種分類：</span>第一～三誡是「人與神應有的規範」；第四誡是「人與工作應有的規範」；第五～十誡為「人與人應有的規範」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                不管那一種分類都讓我們看見，我們必須與神有好的關係，我們才可能與人及工作有好的關係。
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
                '十誡出自出埃及記廿章，是上帝在西乃山藉摩西頒佈的十條誡命，涵蓋人與神、人與人的關係，是基督教倫理學的總綱，所有基督徒會遇見的倫理問題都包含在這十條誡命中。',
                '十誡的開場白「我是耶和華你的神，曾將你從埃及地為奴之家領出來」極其重要：十誡的目的是使人脫離為奴得自由，而非增添捆綁，上帝像老鷹背著雛鷹學飛一樣，用十誡持續照顧祂的子民。',
                '遵行十誡的真正動力不是恐懼懲罰，而是「拯救的恩典」——因著經歷神愛的拯救，我們才有動力與能力去回應神、去愛人，這也是耶穌把律法總綱歸納為「愛神和愛人」的原因。',
                '舊約律法分為三類：禮儀性律法（獻祭、飲食、節期，預表基督，新約信徒不必遵守形式）、社會性律法（針對以色列國民的生活規範，不必守形式但要守其精神）、道德性律法（十誡為總綱，放諸四海皆準，歷世歷代都當遵守）。',
                '十誡有三種常見分類法，分別把「人與神」「人與人」「人與工作」的規範劃分在不同誡命，但不論哪一種分類都指向同一個真理：必須先與神有好的關係，才可能與人及工作有好的關係。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「開場白優先於誡命」的頒佈順序，對我們理解「先蒙恩、後守誡」有何提醒？</h4>
              <p className="text-gray-700 leading-relaxed">
                上帝不是先給誡命、通過考核後才拯救以色列人出埃及，而是先施行拯救，才在西乃山頒佈十誡。這個順序本身就是重要的神學宣告：守誡命是回應恩典的感恩之舉，不是換取恩典的交易條件。這提醒我們，無論是傳講十誡或教導任何聖經誡命，都應先清楚傳達神的拯救恩典，才不會把福音扭曲成靠行為得救的律法主義。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">舊約律法三分類（禮儀性/社會性/道德性），對今日教會處理舊約經文的實用價值是什麼？</h4>
              <p className="text-gray-700 leading-relaxed">
                許多信徒面對舊約律法時常感到困惑：為什麼有些律法（如獻祭、飲食規定）不用遵守，有些（如十誡）卻仍然適用？這個三分類架構提供了清楚的判準：禮儀性律法已在基督裡成就、社會性律法需脫除文化形式抓住精神、道德性律法則歷久彌新。教導信徒這個架構，能有效減少「選擇性引用舊約」的困擾與爭議。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">十誡三種分類法都把「與神的關係」放在優先位置，這對今日信徒的生活次序有何啟發？</h4>
              <p className="text-gray-700 leading-relaxed">
                無論哪一種分類，前面幾誡都是關於敬拜獨一真神；作者特別指出第五誡「孝敬父母」本質上也是「順服神所立的權柄」，本質仍歸屬「與神的關係」。這提醒信徒，人際關係、工作倫理的根基，其實都建立在與神的關係之上——與神關係若不健康，人際和工作的關係也難以真正健康。
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
              '在你原本的印象中，十誡是「使人自由」還是「限制人」的？讀完本章後，這個印象有什麼調整？',
              '古倫神父用「母鷹背雛鷹學飛」比喻上帝頒佈十誡的心情。這個意象對你認識上帝的性情有何幫助？',
              '「遵行十誡的動力是拯救的恩典」——回想你自己遵守某些信仰教導時，動力比較偏向「害怕受罰」還是「回應恩典的愛」？',
              '舊約律法三分類（禮儀性/社會性/道德性）對你過去閱讀舊約律法書卷時的困惑，有沒有帶來新的理解角度？',
              '十誡三種分類法都把「孝敬父母」與「與神的關係」連結起來。你如何理解「順服父母就是順服神所立的權柄」這個原則？',
              '你認為十誡在今日社會（家庭、職場、公共生活）仍然「放諸四海皆準」嗎？哪一條誡命對你個人最具挑戰？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 完整背誦或抄寫一遍十誡（出埃及記廿章）</h4>
              <p className="text-gray-700 mb-2">找時間把出埃及記廿章1-17節完整讀一遍，甚至手抄一次，感受上帝先宣告「我是耶和華你的神，曾將你從埃及地為奴之家領出來」，再頒佈誡命的順序與心意。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 檢視自己遵行誡命的動力來源</h4>
              <p className="text-gray-700 mb-2">
                誠實反省，自己持守某些信仰教導（例如主日聚會、什一奉獻、誠實不欺）時，內心真正的驅動力是恐懼被神懲罰，還是感恩回應神的拯救之愛？本週試著把其中一項操練，重新用「感恩回應」的心態去實踐。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，感謝祢先拯救我脫離罪的捆綁，然後才把祢的誡命賜給我，讓我知道當走的路。求祢幫助我不是出於懼怕，而是出於對祢拯救之愛的感恩，甘心樂意遵行祢的話語。求祢也幫助我在與人、與工作的關係中，都先尋求與祢有正確親密的關係。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
