import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Search, HelpCircle, Check } from 'lucide-react';

export default function Book17Ch5() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
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

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
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
              <p className="text-gray-700">你用什麼標準評估一位傳道人的屬靈價值？是口才、成效、人氣，還是忠心和生命的品格？你認為神用什麼標準評估？</p>
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
              <p className="text-gray-700">你生命中有沒有「屬靈父親/母親」——一個生命影響了你的屬靈成長的人？你如何感謝和珍惜這段關係？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">「你們該效法我」——在你目前所影響的人（家人、朋友、小組成員）中，你的生命是否是可效法的榜樣？哪些方面你希望他們效法？哪些方面你希望他們不要效法？</p>
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
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-sm text-green-800 font-medium mb-1">本週禱告</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">
                「主啊，讓我明白，服事祢不是靠成就，而是靠忠心。幫助我不受人的稱讚或批評所左右，只求在祢面前問心無愧。讓我的生命成為他人可以效法的榜樣——不是因為我完全，而是因為我真誠地走在十架的道路上。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
