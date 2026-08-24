import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Waves, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book40Ch5() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-800 to-orange-900 bg-clip-text text-transparent">第五章</h1>
        <h2 className="text-xl font-semibold text-gray-700">第二誡：不可跪拜偶像</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          「神是個靈，所以拜祂的，必須用心靈和誠實拜祂。」（約4:24）
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

            <p className="text-gray-700 leading-relaxed">
              出埃及記廿章4-5節：「不可為自己雕刻偶像，也不可做甚麼形像彷彿上天、下地，和地底下、水中的百物。不可跪拜那些像，也不可事奉它，因為我耶和華你的神是忌邪的神」。我們相信，真正重生得救的基督徒，應該不會再去為自己雕刻偶像，也不會再敬拜偶像，所以基督徒是否不會犯第二誡呢？
            </p>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">一、金牛犢事件——第二誡的真實案例</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                也許我們可以先思想一個問題：「以色列人在西乃山下，鑄造金牛犢，並且敬拜金牛犢，是犯了第幾誡呢？」其實，他們沒有犯第一誡，因為他們把金牛犢取名為「耶和華」，所以，他們沒有敬拜別的神，但是，他們雖然敬拜耶和華，卻降低了神的位格，用自己的方式來敬拜耶和華，這就是犯了「第二誡」。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">二、第二誡的精神——按真理敬拜神</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                約翰說：「神是個靈，所以拜祂的，必須用心靈和誠實拜祂」（約4:24），這裡的誠實可以繙譯為「真理」，所以「第二誡」的精神在於我們需要「按真理」來敬拜神。許多宗教強調「心誠則靈」，但基督徒除了用「心靈」來敬拜神之外，我們必須「明白真理」，「按照真理」來敬拜神。以色列人的錯誤在於他們「按照對上帝錯誤的認識」來敬拜祂，他們竟然認為上帝就是金牛犢！
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「第二誡」的基本精神在於，上帝要求我們「按照真理」來敬拜祂，「按照對上帝正確的認識」來敬拜祂。如果我們對上帝的認識錯誤，以致我們用錯誤的方式來敬拜上帝，就是犯了「第二誡」。保羅曾說以色列人是「有熱心而沒有真知識」（羅10:2），我們敬拜神不只要用「心靈」，也要用「真理」，有很多基督徒很熱心敬拜神、服事神，卻沒有「真知識」，這樣的敬拜不但神不喜悅，甚至可能變成「宗教狂」，更嚴重則變成「異端邪教」！
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">三、跳脫自己心裡的上帝圖像</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們要提醒自己，跳脫自己心裡所描繪的上帝圖像，我們常會把上帝「納為己有」，我們必須「讓上帝就是上帝」，不要把上帝簡化成你的想像。例如，當我們刻畫出一個不會讓我們遭受痛苦的上帝形像時，我們正是想將上帝塞進我們的思考方式裡。又或者我們把上帝塑造成使我們飛黃騰達、「有求必應」的上帝時，我們也是犯了第二誡。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">四、問題思想：基督徒可否拜耶穌像或十字架？可否擺列耶穌像？</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                有人認為有些信徒，上帝對他們而言變成了空洞的字眼，因此，需要一些圖像，幫助他們開啟心靈的眼睛，感受到上帝的存在。但筆者認為這是聖經禁止我們做的事，那些耶穌像都不是耶穌本人，因此，拜耶穌的像，就是拜偶像。上帝要我們用「心靈」，而不是憑圖像來敬拜祂。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                至於在家中客廳擺列耶穌的像，作為記念而沒有敬拜它，則沒有違反真理。
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
                '第二誡「不可跪拜偶像」不等於「不去雕刻明顯的異教神像」就沒犯——以色列人鑄造金牛犢時，仍稱它為「耶和華」，並未敬拜別神（未犯第一誡），卻用自己想像的方式降低神的位格來敬拜祂，這正是犯了第二誡。',
                '第二誡的精神在於「按真理敬拜神」：敬拜不能只憑「心誠則靈」的心靈熱忱，還必須「明白真理」「按照對上帝正確的認識」來敬拜；「有熱心而沒有真知識」的敬拜，可能演變成宗教狂甚至異端邪教。',
                '我們常不自覺把上帝「納為己有」，按自己的想像來描繪、簡化上帝——例如塑造一位「不會讓我痛苦」或「有求必應」的上帝，這種把上帝塞進自己思考框架裡的行為，同樣是犯了第二誡的精神。',
                '關於是否可拜耶穌像或十字架：作者認為敬拜任何圖像（包括耶穌像）都是拜偶像，因為那些圖像都不是本人，敬拜必須用「心靈」而非憑圖像；但單純把耶穌像擺在家中作紀念、不加以敬拜，則不算違反真理。',
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
              <h4 className="font-semibold text-gray-800 mb-2">金牛犢事件「用耶和華之名，行拜偶像之實」，對今日教會敬拜文化有何警惕？</h4>
              <p className="text-gray-700 leading-relaxed">
                以色列人鑄造金牛犢仍稱它為「耶和華」，說明第二誡最危險的不是明目張膽拜別神，而是「打著敬拜真神的名號，卻用自己想像出來的方式和形像來敬拜」。這提醒今日教會，敬拜形式的熱鬧、音樂的感染力、聚會的氣氛，若沒有以真理為根基，同樣可能不自覺地陷入用「自己想要的上帝」取代「真實的上帝」。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「把上帝塑造成有求必應的神」與今日「成功神學」的流行有何呼應？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者提到把上帝塑造成「使我們飛黃騰達、有求必應」也是犯第二誡，這與當代教會界常被討論的「成功神學」現象直接相關——當講台只強調神必賜下健康、財富、成功，卻迴避苦難、十字架、捨己的信息時，其實正在把上帝塑造成迎合信徒需求的偶像，而非讓「上帝就是上帝」。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「擺列耶穌像作紀念但不敬拜」與「拜耶穌像」的界線，實務上如何拿捏？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者對這個問題的立場提供了清楚但不失彈性的判準——差別不在物品本身，而在「有沒有敬拜的心態與行為」。這個原則同樣可以延伸思考其他類似的信仰物品議題（如十字架項鍊、聖經封面圖案等），關鍵永遠是使用者的內心態度，而非物品的外在形式。
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
              '在讀這一章之前，你認為「不雕刻偶像、不拜異教神明」就等於沒有犯第二誡嗎？讀完後這個理解有什麼調整？',
              '金牛犢事件提醒我們，可能「用真神之名，行自己想像之實」。你觀察自己的敬拜生活，是否也曾用自己想像的方式去敬拜神，而非按照聖經真理？',
              '「有熱心而沒有真知識」是保羅對以色列人的評語。你如何在自己的信仰生活中，平衡「心靈的熱忱」與「真理的追求」？',
              '你心裡描繪的上帝形像，是否曾不自覺地被簡化成「不會讓我受苦」或「有求必應」的神？這對你認識真實的上帝有何影響？',
              '你如何看待「成功神學」這類強調神必賜下健康財富、卻迴避苦難十字架信息的講台教導？',
              '對於「基督徒可否擺列耶穌像作紀念」，你自己的立場是什麼？與作者的看法有何異同？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 讀出埃及記三十二章金牛犢事件</h4>
              <p className="text-gray-700 mb-2">找時間完整讀一次出埃及記卅二章，留意以色列人如何一邊稱金牛犢為「耶和華」、一邊向它獻祭跳舞，體會「打著真神之名卻拜偶像」的具體情境。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 檢視自己心中的「上帝圖像」</h4>
              <p className="text-gray-700 mb-2">
                誠實寫下你心中對上帝的想像：祂是否只會賜福、不會讓你受苦？祂是否只按你想要的方式回應禱告？對照聖經中上帝完整的性情（公義、慈愛、主權、超越），調整自己對上帝過於簡化或一廂情願的認識。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，求祢幫助我不要把祢簡化成我想像中的樣子，也不要用自己喜歡的方式來敬拜祢，而是求祢的靈與真理引導我，讓我用心靈和誠實敬拜祢。求祢光照我心中對祢錯誤或片面的認識，使我真正認識祢是誰。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
