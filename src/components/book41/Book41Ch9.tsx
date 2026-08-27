import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Scale, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book41Ch9() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-800 to-cyan-900 bg-clip-text text-transparent">第二部 2-3</h1>
        <h2 className="text-xl font-semibold text-gray-700">榮辱感第三項：資源有限的概念</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">定義：一場「零和遊戲」</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                本章強調榮辱價值觀深植於聖經的社會文化當中，與西方文化觀點截然不同；有助理解為何榮耀競爭在聖經故事中一直是持續的動力，也有助理解榮辱社會（如中東地區）為何陷入無止盡的循環衝突與暴力。「資源有限的概念」是指「相信社會、經濟、自然世界中的一切……生活中所需的一切：土地、財富、尊榮和地位、權力和影響力……都是有限的，而且不敷所求」<sup>1</sup><span style={cite}>（Neyrey, Honor and Shame in the Gospel of Matthew, 18.）</span>——當你獲得，我就失去，這是一場「零和遊戲」。
              </p>
              <p className="text-gray-700 leading-relaxed">
                並非所有人都用相同觀點看世界。西方受工業化影響，認為世界是無限擴增的經濟體，擁有無限資源；但研究現代和古代文化差異的人類學家告訴我們：一般人看待世界的資源是有限的，一如糧食、水、生產能力和榮耀。對西方世界之外的人而言，物質或資源供應不會無止盡擴增，利益是在眾人之間被瓜分的——因此，個人或團體獲取量增加時，代表其他人的分量被剝奪。當我們出生在一個財富、糧食、人數和利益都有限的家庭，又察覺有人顯然得到較多好處時，自然會引發衝突。<sup>2</sup><span style={cite}>（Neyrey and Stewart, 235.）</span>
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">掃羅和大衛：致命的嫉妒</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                大衛打敗非利士人歌利亞之後，「婦女們從以色列各城裏出來，歡歡喜喜，打鼓擊磬，歌唱跳舞，迎接掃羅王。眾婦女舞蹈唱和，說：『掃羅殺死千千，大衛殺死萬萬。』掃羅甚發怒，不喜悅這話，就說：『將萬萬歸大衛，千千歸我，只剩下王位沒有給他了。』從這日起，掃羅就怒視大衛」（撒上十八6-9）。以榮辱價值觀來看這個故事，就不難理解掃羅的嫉妒——榮耀是一種「有限的資源」（零和遊戲），當大衛的榮耀地位在以色列人心中提升時，掃羅的榮耀光環相對下降，即使他依舊是王。
              </p>
              <p className="text-gray-700 leading-relaxed">
                作者指出：掃羅的行徑，並非精神異常，而是相當合理的反應，出自「資源有限」觀念——因此，他根本不可能與民眾站在同一立場，一起慶祝大衛的勝利。大衛的榮耀迅速提升，對掃羅而言簡直是致命的威脅，難怪掃羅處心積慮，找機會殺大衛。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">保羅在獄中：顛覆「資源有限」</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                腓立比書一章可以看到保羅如何澈底顛覆「資源有限」：「照著我所切慕、所盼望的，沒有一事叫我羞愧。只要凡事放膽，無論是生是死，總叫基督在我身上照常顯大。因我活著就是基督，我死了就有益處」（腓一20-21）。保羅既是耶穌基督的使徒，也是羅馬公民，擁有很大的榮耀光環，然而他在獄中寫這封信——一般人會認定坐牢是羞辱、不光彩的事，但保羅信心滿滿，絲毫沒有羞愧感。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這種戲劇性的轉變，關鍵在於保羅「在基督裡的生命」：他所期望的是不以監禁或死亡為恥，單單全心信靠基督——「因我活著就是基督，我死了就有益處」。保羅原本被監禁、甚至可能面臨處決的悲劇，卻轉變成耶穌基督最終得勝的光榮宣言，這顛覆了傳統輸/贏的定義，也翻轉了「資源有限」觀念：保羅不是在他的成就、家庭、頭銜或環境中找到榮耀，而是將榮耀歸給耶穌基督。
              </p>
              <p className="text-gray-700 leading-relaxed">
                這封信的後半部，保羅更直接挑戰「資源有限」這個眾人視為理所當然的信念：「我的神必照他榮耀的豐富，在基督耶穌裏，使你們一切所需用的都充足」（腓四19）。在基督裡，「資源有限」是不存在的，相反地，在基督裡有無限的供應——保羅稱此為「在基督耶穌裡榮耀的豐富」，透過信仰，所有跟隨耶穌、認定祂是生命救主的人，都可以支取這份恩典。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">貧困循環：封閉系統與開放系統</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                米勒和吉孚列在《使萬民作門徒：以真理的大能改變文化》一書中，比較了三種基本世界觀——泛靈論、有神論和世俗論，對自然界有截然不同的看法。<sup>3</sup><span style={cite}>（Miller and Guthrie, 243-79.）</span>來自聖經的轉化社會思想之一，被稱為「開放系統」的自然觀。在「封閉的系統」中，每個人為得到相同的資源而競爭，生活中所需的一切都是有限的、不敷所求；但相信「開放系統」的人並不受「資源有限」這個觀點所捆綁。米勒寫道：「發展是關於創造新資源，而不是重新分配稀少的資源；不只是幫助人類圖生存，而是更多地發現和探索神的世界。」<sup>4</sup><span style={cite}>（Miller and Guthrie, 148.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                世俗主義者以及受其影響的人，在這方面會碰壁——他們陷在象牙塔式的世界觀中，一如信仰的教條，認為「地球這艘太空飛船」正走向滅亡，他們的生態玻璃罐總是半空的。但相信世界是由神所創造的人，卻有截然不同的觀點：他們透過自己的創造力和合乎中道的管理，看見潛力不受限的世界。<sup>5</sup><span style={cite}>（Miller and Guthrie, 148.）</span>前哈佛大學經濟學和歷史學教授蘭德斯在《新國富論：人類窮與富的命運》書中總結：「在經濟發展歷史中，若說我們有學到任何東西，那就是文化有相當大的影響力。」<sup>6</sup><span style={cite}>（David S. Landes, The Wealth and Poverty of Nations, 1999, 516.）</span>不同的內部張力中，「資源有限」這種世界觀，正是導致長期貧困的內在張力之一。
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
                '「資源有限的概念」相信榮耀、地位、財富等一切好處都是零和遊戲——你獲得，我就失去，這與西方工業化世界「經濟可無限擴增」的直覺截然不同，卻是許多非西方社會（也是聖經世界）的普遍世界觀。',
                '掃羅對大衛的嫉妒並非精神異常，而是「資源有限」世界觀下完全合理的反應：大衛的榮耀提升，在掃羅眼中意味著自己的榮耀被剝奪，這解釋了為何他不惜致力於除掉大衛。',
                '保羅在監獄中「沒有一事叫我羞愧」，是因為他澈底顛覆了「資源有限」的邏輯——他不從成就、環境中找榮耀，而是將自己完全獻給基督，活出「因我活著就是基督，我死了就有益處」的雙贏生命。',
                '腓立比書四章19節「我的神必照他榮耀的豐富，使你們一切所需用的都充足」，直接挑戰資源有限的世界觀，宣告在基督裡是無限供應而非零和競爭。',
                '米勒的「封閉系統」與「開放系統」對比說明：相信資源有限的世界觀（無論是泛靈論或世俗主義），容易導致貧困循環延續；而相信神創造、可持續發現探索的「開放系統」世界觀，則能帶出真實的發展與盼望。',
                '本章提醒讀者：「資源有限」不僅是古代榮辱社會的價值觀，也持續形塑今日許多地區的貧困文化與衝突循環，而福音正提供了一個徹底翻轉此一世界觀的盼望根基。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「資源有限」的世界觀，如何解釋教會內部常見的嫉妒與比較文化？</h4>
              <p className="text-gray-700 leading-relaxed">
                掃羅嫉妒大衛的心理機制，其實在今日教會中也屢見不鮮——當某位同工的服事、恩賜特別被稱讚、被看見時，其他同工若不自覺地認為「他得的榮耀多了，我的就相對變少了」，就是落入了「資源有限」的思維陷阱。這提醒教會領袖，需要主動教導「在基督裡榮耀是豐富無限的」這個真理，才能從根源化解同工間因比較、嫉妒而生的張力。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">米勒對「封閉系統」與「開放系統」的區分，對教會思考貧窮與宣教策略有何啟發？</h4>
              <p className="text-gray-700 leading-relaxed">
                若宣教工作者不自覺帶著「資源有限」的封閉系統思維去服事貧困地區，很容易落入「他們無法幫助自己，我們必須為他們做些事」的施捨心態，忽略了當地群體本身擁有的資產、智慧與潛力。「開放系統」的視角提醒宣教工作者，應更多聚焦於幫助當地群體發現、開發神已賜給他們的資源與創造力，而非單純的物資援助，這對長期、可持續的宣教策略至關重要。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">保羅「因我活著就是基督，我死了就有益處」，如何示範一種超越「資源有限」的終極自由？</h4>
              <p className="text-gray-700 leading-relaxed">
                當一個人的價值感完全建立在「資源有限」的世界（財富、地位、自由）上時，失去這些就等同於失去一切。但保羅將自己的生命完全交託給基督後，無論生死、無論處境好壞，他都「贏」——因為他真正的財富（基督自己）從未被剝奪。這種生命觀，讓保羅能夠在監獄中依然喜樂，這正是福音提供給活在稀缺焦慮中的現代人最深刻的解方。
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
              '神以哪一種方式「照祂榮耀的豐富」（腓四19）幫助你克服軟弱不足的感覺，或滿足你對榮耀的渴望？',
              '回想一次你像掃羅一樣，因為別人的成就或被看見，而感到自己「相對被剝奪」的經驗，這對你有什麼提醒？',
              '你觀察自己或身邊的人，面對財務、資源、機會時，是傾向「零和遊戲」的稀缺思維，還是「在基督裡豐富無限」的信心思維？',
              '保羅在監獄中依然能說「沒有一事叫我羞愧」，你認為是什麼讓他能夠如此？這對你面對自己人生中的低谷處境，有什麼啟發？',
              '「發展是關於創造新資源，而不是重新分配稀少的資源」——這句話對你理解貧窮議題、參與服事窮人，帶來什麼樣的思維轉變？',
              '在服事窮人和受迫害者時，你會如何避免「資源有限」的思維（他們無法幫助自己），轉而聚焦在他們所繼承的資產和祝福？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 一口氣讀完馬可福音</h4>
              <p className="text-gray-700 mb-2">
                留意榮辱如何在宗教和政治權力的微妙對稱中一起發揮作用，滋生暴力，並且將神的兒子釘上十字架，記下你觀察到的線索。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🍞 默想耶穌餵飽五千人的故事</h4>
              <p className="text-gray-700 mb-2">
                讀路加福音九章10-17節，思考耶穌所行的奇蹟如何顛覆「資源有限」的觀念，並在你自己面對「不夠用」的焦慮時，把這個故事當作信心的提醒。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，求祢釋放我脫離『資源有限』的焦慮與嫉妒，讓我真正相信，在祢裡面有取之不盡的豐富恩典。求祢幫助我不再與人比較、爭競，而是為他人的蒙福由衷歡喜，因為我知道，祢的祝福從不因給了別人而在我身上減少。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
