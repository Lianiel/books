import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Search, HelpCircle, Check } from 'lucide-react';

export default function Book18Ch2() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-600 to-rose-700 bg-clip-text text-transparent">第二章</h1>
        <h2 className="text-xl font-semibold text-gray-700">舊約中的撒但</h2>
        <p className="text-sm text-gray-500 mt-1">第一部分：認識敵人——撒但及其歷史</p>
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
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">撒但學（Satanology）的重要性</h3>
              <p className="text-gray-700 leading-relaxed">
                撒但及其歷史是撒但論的基礎。關於撒但的教義有時被稱為「撒但學」（Satanology），再加上那些幫助撒但的墮落天使，此類考察也被稱為「魔鬼學」（demonology）。撒但的事業在人類受造之前就已經開始了（約38：7），並且會一直延續到遙遠的未來，因此，撒但論是聖經中一個重要教義。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                聖經中很多次提到撒但。因此，如果不相信魔鬼確實存在，就不可能持守基督教信仰。舊約中九本書（《創世記》、《利未記》、《申命記》、《歷代志上》、《約伯記》、《詩篇》、《以賽亞書》、《以西結書》、《撒迦利亞書》）以及新約中每一位作者都證明了魔鬼的存在。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">一、撒但的名字與起源</h3>
              <p className="text-gray-700 leading-relaxed">
                「撒但」（Satan）一詞出自希伯來語，意思是「控告者、敵人、抵擋者」。舊約中十九次用到這個詞，其中十四次在《約伯記》第1和2章中。《歷代志上》第21章1節、《詩篇》第109篇6節和《撒迦利亞書》第3章1-2節中也提到「撒但」。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                學者一直在爭論「撒但」這個詞到底是一個專有名稱，還是一個頭銜。在《約伯記》和《撒迦利亞書》中，「撒但」這個名詞之前有定冠詞，所以它的字面翻譯是「撒但」或「控告者」。然而，在《歷代志上》第21章1節和《詩篇》第109篇6節中，「撒但」之前沒有定冠詞，一些學者認為這時是作為專有名稱使用的。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">撒但在受造之初的尊貴</h3>
              <p className="text-gray-700 leading-relaxed">
                撒但以及其他所有天使都是上帝所造的靈（詩148：2，5；來1：7，14）。《約伯記》第1章表明撒但可能曾經是上帝所造的天使中地位最高、最聰明的一個，他在侍奉上帝的工作中有特別卓越的地位。《以西結書》第28章12至15節告訴我們撒但在犯罪之前是什麼樣子。這段話雖然是跟推羅王說的，但先知以西結實際上是藉著推羅王向撒但發話。他把撒但描述為「受膏遮掩約櫃的基路伯」（第14節），「智慧充足，全然美麗」（12節），「所行的都完全」（15節）。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                唐納德·格雷·巴恩豪斯（Donald Gray Barnhouse）寫道：「撒但最初存在時全然美麗，身居尊位，大有權勢，被上帝所賜的華美環繞。」巴恩豪斯總結說，撒但在墮落前「擔任上帝的首相，可能治理整個宇宙，肯定管理這個世界」（《無形的爭戰》，26-27頁）。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">二、撒但在伊甸園中的墮落及活動</h3>
              <p className="text-gray-700 leading-relaxed">
                《以西結書》第28章15至19節繼續告訴我們撒但從其尊位墮落，因為他關注的只是自己的美麗和榮耀，因為他有愚蠢的野心，要取代榮耀的上帝。撒但之罪源於驕傲，在自欺中發展，最終所導致的就是叛逆的野心。他的叛逆致使他誘惑一大群天使與他一起背叛上帝（啟12：4）。於是上帝把撒但和所有叛逆天使逐出天堂，摔到地上（結28：16-17）。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                撒但不再能從天上直接攻擊上帝，他就竭盡一切惡毒來攻擊人，因為人是上帝創造的顛峰。撒但在歷史中的行動最早記錄在《創世記》第3章中。他變成蛇來到伊甸園，從那裡接近夏娃。撒但今天仍然在使用當初他用來誘惑夏娃的一些詭計：
              </p>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li className="flex gap-2"><span className="text-red-600 font-semibold flex-shrink-0">（1）</span><span><strong>撒但歪曲上帝的誡命</strong>：他問夏娃：「上帝豈是真說，不許你們吃園中所有樹上的果子嗎？」（創3：1）。上帝實際上說的是，除了一棵樹上的果子之外，亞當和夏娃可以吃園中幾乎所有果子。撒但故意把禁止誇大，使上帝的命令顯得苛刻。</span></li>
                <li className="flex gap-2"><span className="text-red-600 font-semibold flex-shrink-0">（2）</span><span><strong>撒但質疑上帝的動機和品格</strong>：他告訴夏娃：「你們不一定死，因為上帝知道，你們吃的日子眼睛就明亮了」（創3：4-5）。撒但暗示夏娃，上帝並不是公平良善的，因為上帝限制他們的自由，禁止他們吃分別善惡樹上的果子。</span></li>
                <li className="flex gap-2"><span className="text-red-600 font-semibold flex-shrink-0">（3）</span><span><strong>撒但說人可以像上帝一樣</strong>：撒但試圖把自己的目標強加給人類，他說：「你們便如上帝能知道善惡」（創3：5）。換言之，亞當和夏娃可以自行判斷對錯，不必聽從上帝的話。但撒但所說的話只有一半是真的——他沒有告訴他們，離開了上帝的恩典，他們根本沒有能力離惡行善。</span></li>
                <li className="flex gap-2"><span className="text-red-600 font-semibold flex-shrink-0">（4）</span><span><strong>撒但使罪看起來是美善的</strong>：《創世記》第3章6節告訴我們：「於是女人見那棵樹的果子好作食物，也悅人眼目，且是可喜愛的，能使人有智慧，就摘下果子來吃了。」撒但擅於美化罪的外表，隱藏其致命的後果。</span></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">三、儘管撒但不斷攻擊，但仍處在上帝的掌管之下</h3>
              <p className="text-gray-700 leading-relaxed">
                儘管撒但成功地誘惑亞當和夏娃，使他們背叛上帝，違背與上帝所立的聖約，使全人類都陷入罪中，但在整個舊約時代，撒但一直處在上帝的掌管之下。《撒母耳上》16章14至23節中撒但與掃羅的關係以及《約伯記》第1章中撒但對待約伯的方式都證明了這一點。撒但的行為不能超越造物主上帝出於自己的至高無上的權能為他限定的界限。上帝如果不允許，他「動也不能動」（參《海德堡教理問答》第28問）。馬丁·路德說「就連魔鬼也是上帝的魔鬼」，正是這個意思。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                撒但激動大衛數點以色列人（代上21：1）。撒但控告大祭司約書亞犯了罪（撒3：1）。撒但誘使上帝的選民參與外邦人邪淫的儀式、邪術、交鬼活動，以及各種佔卜。撒但試圖通過這些手段來滅絕他們。然而撒但的邪惡活動無論計畫多麼周密，都經常遭到失敗，因為上帝使用撒但的詭計來幫助實現自己的目的，它們絲毫不能妨礙上帝實現自己的目的。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                明白我們最大的敵人那些惡謀完全處在我們最好的朋友的掌控之下，從而「曉得萬事都互相效力，叫愛上帝的人得益處，就是按他旨意被召的人」（羅8：28），這是多麼大的安慰啊！所以，加爾文總結說：「有時魔鬼甚至也可以當我們的醫生。」
              </p>
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
              <h4 className="font-semibold text-gray-800 mb-2">撒但之罪的本質：驕傲與自欺</h4>
              <p className="text-gray-700 leading-relaxed">
                撒但的墮落根源於驕傲（timidity）——他因著自己的美麗和能力而自我高舉，最終試圖篡奪上帝的地位。《以賽亞書》14章13至14節所描述的「貝西孟」（Lucifer）的五個「我要」，揭示了驕傲罪的本質：不願在上帝的主權下生活，要成為自己命運的主人。這與亞當夏娃的試探完全一致——撒但引誘他們去做「如上帝能知道善惡」的人，實質上是呼召他們重複他自己的罪。驕傲是一切罪的根源，也是撒但最愛在信徒中種植的種子。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">約伯記中的撒但：主權與允許的神學</h4>
              <p className="text-gray-700 leading-relaxed">
                《約伯記》第1-2章為我們提供了一個關於屬靈爭戰最深刻的神學視角。撒但在上帝面前控告約伯，說他的敬虔是有條件的（「禰豈是無故敬畏上帝嗎？」）。上帝允許撒但試煉約伯，但設定了嚴格的界限（「只是不可害他的性命」）。這段記載告訴我們：第一，撒但必須先得上帝的許可才能攻擊信徒；第二，上帝的許可都有明確的限制；第三，試煉的最終目的是精煉信徒的信心，榮耀上帝。這並不消除試煉的痛苦，但它確立了一個令人安慰的真理：每一次屬靈攻擊背後，都有上帝主權的手在掌管。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">伊甸園的四種試探模式：永恆的撒但策略</h4>
              <p className="text-gray-700 leading-relaxed">
                本章所分析的撒但在伊甸園中使用的四種詭計，實際上是他至今仍在使用的基本模式。歪曲上帝的話語、質疑上帝的良善、許諾人可以自主如神、美化罪的外表——這四種模式在今天的各種試探中仍然清晰可見。歪曲神的話語出現在各種異端的詮釋中；質疑神的良善出現在苦難中的信心危機；自主如神出現在當代個人主義；美化罪則出現在媒體和文化中對罪的美化與正常化。認識這四種模式，對於辨識當代的試探具有直接的實踐意義。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「上帝的魔鬼」：加爾文與路德的主權神學</h4>
              <p className="text-gray-700 leading-relaxed">
                加爾文和路德都強調撒但的活動在上帝主權的掌管之下。加爾文說撒但「像被迫服侍上帝一樣」（《基督徒敬虔學》1：14：17），路德說「就連魔鬼也是上帝的魔鬼」。這個神學立場不是要淡化撒但的真實危險，而是要確立信徒的終極安全感。如果撒但的一切活動都必須在上帝的允許下進行，那麼沒有一次試煉會真正超出上帝的主權計畫。這不是宿命論，而是在改革宗神學框架中對上帝護理（Providence）教義的具體應用：上帝不是惡的作者，但惡在他的主權下服務於他最終的善。
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
              <p className="text-gray-700">撒但使用的四種試探模式（歪曲神的話、質疑神的動機、誘惑自主、美化罪惡），你在自己的生命中最容易受哪一種影響？為什麼？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">撒但的墮落根源於驕傲。你如何在自己的生命中識別和對付那些微妙的驕傲——不一定是明顯的自大，而是那種不願在上帝主權下臣服的獨立意識？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">「萬事都互相效力，叫愛上帝的人得益處」——你在面對屬靈攻擊或試煉時，如何真實地相信並依靠這個應許？有沒有哪些時候很難相信？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">約伯的故事顯示撒但必須先得上帝的允許才能攻擊信徒。這個真理如何改變你面對苦難和試煉的視角？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">舊約中的選民以色列在撒但的攻擊下多次失敗（陷入偶像崇拜、邪術等），但神保留了「不曾向巴力屈膝的七千人」（王上19：18）。這對你的教會生活有什麼意義？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">加爾文說「有時魔鬼甚至也可以當我們的醫生」。你有沒有經歷過類似的情況——某次試煉或試探反而幫助你在屬靈上成長？如何理解這個說法？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">📖 研讀舊約中的撒但</h4>
              <p className="text-gray-700 mb-2">本週精讀以下舊約段落，深化對撒但的聖經認識：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>《創世記》3：1-15（伊甸園的試探與原始福音）</li>
                <li>《約伯記》1-2章（撒但的控告與上帝的主權）</li>
                <li>《撒迦利亞書》3：1-5（撒但控告約書亞，天使辯護）</li>
                <li>《以西結書》28：12-19（撒但的尊榮與墮落）</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 辨識四種試探模式</h4>
              <p className="text-gray-700 mb-2">本週留意生活中的試探，嘗試辨識它屬於哪種模式：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>歪曲神的話（「神真的這樣說嗎？」）</li>
                <li>質疑神的動機（「神是不是不愛我？」）</li>
                <li>誘惑自主（「我自己決定就好，不需要神」）</li>
                <li>美化罪惡（「這只是小事，不要緊的」）</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 在苦難中信靠神的主權</h4>
              <p className="text-gray-700 mb-2">每當面對難以理解的苦難或試煉時，操練以下禱告回應：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>先向神誠實表達你的感受（不要假裝沒有痛苦）</li>
                <li>然後宣告約伯式的信心：「祂雖殺我，我仍要信靠祂」（伯13：15）</li>
                <li>相信即使撒但的攻擊，在神手中也能成為你屬靈成長的工具</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 本章禱告</h4>
              <p className="text-gray-700 italic leading-relaxed">
                「全能的主上帝，感謝禰讓我從舊約聖經中看見撒但的起源、詭計和限制。感謝禰讓我知道，就連魔鬼的一切活動，都在禰全能的掌管之中。求禰幫助我辨識撒但在我生命中所使用的各種試探模式，特別是那些歪曲禰話語、質疑禰良善的詭計。在一切苦難和試煉中，讓我緊緊抓住萬事互相效力的應許，信靠禰奇妙的護理。奉耶穌的名，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
