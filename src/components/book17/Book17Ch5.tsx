import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Users, Search, HelpCircle, Check } from 'lucide-react';

export default function Book17Ch5() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    application: true,
    exploration: true,
    questions: true,
    practice: true,
  });

  const toggleSection = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">第五章</h1>
        <h2 className="text-xl font-semibold text-gray-700">信徒與傳道人的關係</h2>
        <p className="text-sm text-gray-500 mt-1">哥林多前書 四1-21</p>
      </div>

      {/* 經文要義 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">經文要義</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">一、傳道人是管家（四1-5）</h4>
              <p className="text-gray-700 leading-relaxed">保羅定義傳道人的身份：「基督的執事，神奧秘事的管家」。管家最要緊的是「忠心」。管家不是主人，沒有資格自訂標準，而是對主人負責。因此，哥林多人批評保羅是越位之舉——連保羅自己也不論斷自己，因為「論斷我的乃是主」。末日的審判才是唯一客觀的評審，到時主必顯明各人隱藏在暗中的事。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">二、先受苦、後得榮的倒置（四6-13）</h4>
              <p className="text-gray-700 leading-relaxed">保羅以諷刺的語氣對比使徒的遭遇與哥林多人的自大：「你們已經飽足了……你們作王了……」而使徒卻是被判死刑、成為表演場中的罪犯，是世界的糞土。這個對比揭示：真正使徒生涯的特徵不是榮耀，而是受苦。哥林多人追求「即時得榮」，恰恰是違背了十架的邏輯。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">三、父親的愛與屬靈的效法（四14-21）</h4>
              <p className="text-gray-700 leading-relaxed">保羅不是以嘲諷口吻羞辱他們，而是以「父親的愛」勸戒。他是哥林多教會的屬靈父親，就算他們有萬名的師傅，屬靈的生命卻是保羅在基督裡藉福音生下來的。因此保羅呼籲：「你們該效法我」——效法的是使徒受苦事奉的生命模式，不是外在形式。</p>
            </div>
          </div>
        )}
      </div>

      {/* 省思與應用 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('application')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-teal-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">省思與應用</span>
          </div>
          {expanded['application'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['application'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-teal-700 mb-2">傳道人的評估</h4>
              <p className="text-gray-700 leading-relaxed mb-3">今日華人教會頗為盛行「排名文化」——宋尚節第一、王明道第二、倪柝聲第三。這種評比本身並非完全無益，卻危險地把傳道人「商品化」。作者想起有一次學生課後給他的評估反饋，對他畢生影響深遠；而另一種評估就完全不同——以業績量化。忠心的傳道人，和看業績的傳道人，差距懸殊。</p>
              <p className="text-gray-700 leading-relaxed">保羅在此為傳道人樹立了唯一標準：忠心。不是人數多少，不是口才好壞，不是出書多少，而是對神的託付是否忠心。這標準在末日的審判才能最後確認。在此之前，信徒和傳道人都應當把評估留給神。</p>
            </div>
            <div>
              <h4 className="font-semibold text-teal-700 mb-2">傳道人的榜樣</h4>
              <p className="text-gray-700 leading-relaxed mb-3">「效法我」的呼籲，核心是身教重於言傳。宣教工場上有一個現象值得反思：西方宣教士把自己文化帶到工場，在青島建哥德式建築，在廈門建英美式禮拜堂——把文化誤以為是福音。但身教帶來的影響更深：在某宣教特會上，一位宣教士的受苦見證感動了在場許多人，但他的太太卻因為自己從未被充分諮詢，裹足不前，無法呼應呼召。</p>
              <p className="text-gray-700 leading-relaxed">另一個現象：傳道者的後代往往不肯再作傳道者。這或許說明，在家庭中所看見的「傳道人的生活」，並非總是令人嚮往的榜樣。保羅說「效法我」——那麼傳道人的家庭生活、應對苦難的方式、待人的態度，都是「效法」的內容，不只是台上的講道。</p>
            </div>
            <div>
              <h4 className="font-semibold text-teal-700 mb-2">向傳道人看齊</h4>
              <p className="text-gray-700 leading-relaxed mb-3">作者講述一個真實故事：某教會的執事主張給牧師二萬元台幣月薪，理由是「夠生活就好了」。這種心態反映了什麼？一個願意與傳道人「同甘共苦」的教會，和一個把傳道人視為「雇員」的教會，在信仰上是截然不同的。</p>
              <p className="text-gray-700 leading-relaxed">保羅強調「先受苦、後作王」的次序。傳道者先受苦，是信徒的榜樣——不是榜樣他受苦，而是榜樣他在苦中仍然忠心。作者有一位好友，每當聽說傳道者需要某樣東西，就主動去買一個同等的贈送——不是給廉價品，而是與傳道者一同享有。這才是「向傳道人看齊」的真義。</p>
            </div>
            <div className="mt-2 p-4 bg-teal-50 rounded-lg border border-teal-100">
              <p className="font-medium text-teal-800 mb-2">默想</p>
              <p className="text-gray-700 leading-relaxed italic">「傳道人是管家，不是老闆；是父親，不是偶像；是先受苦的人，不是即時得榮的人。他的生命，是信徒可以效法的榜樣——不是效法他的成功，而是效法他在十架下的忠心。」</p>
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
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">管家神學的意義</h4>
              <p className="text-gray-700 leading-relaxed">「管家」（oikonomos）在古代是負責管理主人家業的奴隸，對主人絕對忠心，對家中的人有責任。保羅以此比喻，指出傳道人不是靠成果評估，而是靠忠心評估。這讓傳道人從「成功學」的壓力中得釋放，也讓信徒明白：評斷傳道人是否屬靈成熟，不能以世俗標準衡量。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「先受苦、後得榮」的末世邏輯</h4>
              <p className="text-gray-700 leading-relaxed">哥林多人想在主再來之前就「作王」，這是把末世的榮耀提前到現在。保羅卻說，在主未再來之前，使徒（和信徒）的命運是與主同受苦。「效法基督」在十字架時代意味著受苦，在復活時代才是得榮耀。誤解這個次序，就會用成功神學代替十架神學。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">屬靈父親的角色</h4>
              <p className="text-gray-700 leading-relaxed">保羅區分「萬名的師傅」和「一位父親」。師傅（paidagogos）是帶著孩子上學的奴隸，是監督者；父親是生命的傳遞者。保羅宣稱自己是哥林多信徒的「屬靈父親」，不是因為他比別人更厲害，而是因為他是藉福音把生命傳給他們的人。這定義了牧養最本質的責任：不只傳授知識，而是傳遞生命。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「效法我」與謙卑的示範</h4>
              <p className="text-gray-700 leading-relaxed">保羅說「效法我」是否自大？其實不然——他所說的效法，是效法他的生命模式：願意受苦、願意被看為愚拙、願意成為世界的糞土。這不是邀請人崇拜他，而是邀請人進入十架的道路。他效法基督，因此他可以說「效法我」。這是教會領袖最深刻的邀請：我的生命可以被模仿嗎？</p>
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
              <p className="text-gray-700">你用什麼標準評估一位傳道人？是口才、成效、人氣，還是忠心和生命的品格？你認為神用什麼標準評估？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">保羅說連自己也不論斷自己，只有主才是評判者。這個態度對你在服事和生活中如何接受批評或稱讚有何意義？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">哥林多人追求「即時得榮」，拒絕「先受苦」的道路。你在信仰中是否也有逃避苦難、追求即時成果的傾向？這反映了怎樣的神學預設？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">作者提到傳道者的後代往往不肯再作傳道者。你認為這反映了什麼問題？若你是傳道者，你希望子女如何看待你的事奉？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">你教會對傳道人的支持，是「雇主對雇員」的模式，還是「家人對家人」的模式？這種差異在具體行動上如何呈現？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">你生命中有沒有「屬靈父親/母親」——一個生命影響了你屬靈成長的人？你如何感謝和珍惜這段關係？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">7.</span>
              <p className="text-gray-700">「你們該效法我」——在你目前所影響的人（家人、朋友、小組成員）中，你的生命是否是可效法的榜樣？哪些方面你希望他們效法？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 忠心而非成功的服事觀</h4>
              <p className="text-gray-700 mb-2">這週在你參與的服事中，刻意問自己：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>我今天的服事動機是「讓主喜悅」還是「讓人讚賞」？</li>
                <li>即使沒有人看見或稱讚，我仍然願意忠心去做嗎？</li>
                <li>把自己的服事交在神手裡，不為末後的審判以外的評價掛慮</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 感謝你的屬靈父母</h4>
              <p className="text-gray-700 mb-2">本週花時間：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>想想誰在你的屬靈旅程中扮演了「父親/母親」的角色</li>
                <li>以文字（訊息或手寫信）表達你的感謝，具體說明他/她如何影響了你的生命</li>
                <li>為他/她的屬靈生命獻上禱告</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 具體支持你的傳道人</h4>
              <p className="text-gray-700 mb-2">思考你的教會對傳道人的支持是否充分，本週做一件具體的事：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>為傳道人的家庭需要代禱，或主動詢問有何可以幫忙的地方</li>
                <li>鼓勵長執會思考：傳道人的薪資是否讓他可以專心服事，無後顧之憂？</li>
                <li>若傳道人有某樣需要，考慮成為那個主動回應的人</li>
              </ul>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-sm text-green-800 font-medium mb-1">本週禱告</p>
              <p className="text-gray-700 text-lg leading-relaxed italic">
                「主啊，讓我明白，服事祢不是靠成就，而是靠忠心。幫助我不受人的稱讚或批評所左右，只求在祢面前問心無愧。讓我的生命成為他人可以效法的榜樣——不是因為我完全，而是因為我真誠地走在十架的道路上。感謝祢賜給我生命中的屬靈父母，讓我也有機會成為他人的屬靈父母。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
