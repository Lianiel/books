import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Award, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book25Ch6() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true, summary: true, exploration: true, questions: true, practice: true
  });
  const toggle = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">第六章</h1>
        <h2 className="text-xl font-semibold text-gray-700">新的職稱：裝備者</h2>
        <p className="text-gray-500 mt-1">作門徒訓練的牧師要扮演哪些角色？</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('content')} className="w-full px-5 py-3 bg-gradient-to-r from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-blue-700 mb-2">兩種教練的比較：職業運動員 vs. 教練</h3>
              <p className="text-gray-700 leading-relaxed">作者在大學時是摔角選手，有個備受崇拜的教練，曾參加奧運比賽。但令人訝異的是，作者從他身上學到的摔角技術很少。這位教練把工作視為個人訓練場，用來炫技的舞台——他所關心的是自己的成長，而非學生的成長。</p>
              <p className="text-gray-700 leading-relaxed mt-3">反之，作者也遇過視教導學生為己任的教練，從這些教練身上獲益良多。他們的工作不在於展現自己的能力，而是教導別人，結果大不相同。對牧師而言，這個對比正是「職業運動員型牧師」與「教練型牧師」的核心差異。</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-700 mb-2">以弗所書四章11-13節的核心使命</h3>
              <div className="bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 rounded-r-lg">
                <p className="text-blue-800 font-semibold">「祂所賜的，有使徒，有先知，有傳福音的，有牧師和教師，為要成全聖徒，各盡其職，建立基督的身體，直等到我們眾人在真道上同歸於一，認識神的兒子，得以長大成人，滿有基督長成的身量。」</p>
              </div>
              <p className="text-gray-700 leading-relaxed mt-3">這段經文告訴我們：教會領袖的目標，是裝備人承接服事，以建立基督的身體，使眾人能夠同歸於一，靈命成熟。有些教會領袖看自己如明星運動員，想透過個人成就帶動團隊表現，其他隊員的存在只是為了實現他們個人的重要性。但教會領袖應該更像優秀的教練——引導與裝備聖徒，使整個教會成為一個成熟的社群。</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-700 mb-2">明星球員型牧師的危機</h3>
              <p className="text-gray-700 leading-relaxed">作者分享了一個令他心痛的案例：一間大教會的主任牧師心臟病發住院，在他休養的六個月期間，教會的聚會人數竟掉了一半——不誇張，數千人就這麼不來了。這位牧師承認他是以娛樂模式建立教會，藉著音樂、科技、以及個人魅力和教導能力吸引會眾，結果當明星不在了，人們也鳥獸散。</p>
              <p className="text-gray-700 leading-relaxed mt-3">這是最糟糕的情況之一——一個教會完全依賴一個人，而不是一個裝備好的群體。若你把全部資源和注意力放在週末崇拜的精彩演出上，你是在建造一台精緻的機器，但機器沒有了操作者就停止運作。</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-700 mb-2">職業運動員 vs. 教練：兩種牧師的比較</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <h4 className="font-bold text-red-700 mb-2">❌ 職業運動員型牧師</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 讓全部人的眼光都在自己身上</li>
                    <li>• 用表演來娛樂和激勵會眾</li>
                    <li>• 全部壓力都在自己身上</li>
                    <li>• 一人包辦主要的服事和決策</li>
                    <li>• 當他不在，教會就癱瘓</li>
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <h4 className="font-bold text-green-700 mb-2">✅ 教練型牧師</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 使其他人有能力一起團隊合作</li>
                    <li>• 裝備、培育、規勸、訓練他人</li>
                    <li>• 差派其他人去第一線帶領門徒</li>
                    <li>• 建立系統讓教會能自我複製</li>
                    <li>• 即使他不在，教會仍然運作</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-blue-700 mb-2">作門徒訓練的牧師四個主要角色</h3>
              <div className="space-y-3">
                {[
                  { num: 1, role: '一個真實的門徒', desc: '你的為人遠勝於你的言語。牧師必須學著每日與神同行——重視禱告、讀經、及內在生活，當我們真實地與神同行時，教導與領導也能讓人信服。在家庭中活出真實的門徒生活更是重要：教會領袖最重要的宣教禾場是自己的家。' },
                  { num: 2, role: '一個門徒訓練系統的建立者', desc: '牧師的工作不只是帶領門徒，而是在教會裡建立一套教導人們如何帶領門徒的系統，讓門徒訓練能代代相傳。他受召去領導並發展一個全教會的系統——一個讓人能為了作主門徒而參與其中的關係環境。' },
                  { num: 3, role: '一個領袖的培育者', desc: '找出新崛起有恩賜的領袖，幫助他們成長。不要找「已成熟的領袖」，而要像高中教練一樣從自己的教會裡培育人才。尋找靈命成熟（至少在走向屬靈青年的人），有行政領導恩賜的人，訓練他們承擔更多責任。' },
                  { num: 4, role: '一個異象傳遞者', desc: '牧師必須持續傳遞同一個異象——教會的使命是帶出能帶領其他人成為門徒的門徒。在他覺得大家都聽膩的時候，還需要繼續重申。透過慶祝活動來強化異象：慶祝多少人開始與人連結、多少人開始服事、多少人開始帶領門徒。' },
                ].map(r => (
                  <div key={r.num} className="bg-teal-50 border border-teal-100 rounded-xl p-4">
                    <p className="font-bold text-teal-800 mb-1">角色{r.num}：{r.role}</p>
                    <p className="text-gray-700">{r.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-blue-700 mb-2">培育領袖的五步驟學徒模式</h3>
              <p className="text-gray-700 leading-relaxed mb-2">根據傅德福和傳約翰在《指數》中所推崇的公式，這個領袖學徒模式能應用於教會裡的每項事工：</p>
              <div className="bg-blue-50 rounded-xl p-4 space-y-2">
                {[
                  '我做。你看。我們討論。',
                  '我做。你幫忙。我們討論。',
                  '你做。我幫忙。我們討論。',
                  '你做。我看。我們討論。',
                  '你做。別人看。',
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
                    <p className="text-gray-700 font-medium">{step}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mt-3">耶穌在與門徒同工時便示範了類似的原則，保羅對提摩太與提多也做了類似的事。這是一個有果效的領袖培育循環，從完全帶領到完全放手，確保每一步都有討論和反思。</p>
            </div>
          </div>
        )}
      </div>

      {/* 重點總結 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
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
                '以弗所書四章11-13節告訴我們：教會領袖的職責是裝備聖徒各盡其職，建立基督的身體——而非自己包辦一切。',
                '「職業運動員型」牧師用個人魅力和表演吸引人；「教練型」牧師裝備他人，建立一個即使他不在仍能運作的系統。',
                '作門徒訓練的牧師有四個主要角色：真實的門徒、系統建立者、領袖培育者、異象傳遞者。',
                '培育領袖的五步驟模式（我做你看→你做我看→你做別人看）是耶穌和保羅都曾使用的有效方法。',
                '找出教會裡已有的潛力領袖，用系統化的方式培育他們，而不是等待「完美的領袖」從外面出現。',
                '牧師需要持續傳遞同一個異象，並透過慶祝門徒訓練的果效來強化這個異象——你所推崇的，信徒自然就看重。',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-gray-700">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* 延伸探討 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('exploration')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">延伸探討</span>
          </div>
          {expanded['exploration'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['exploration'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">為什麼主日講道不夠用？</h4>
              <p className="text-gray-700 leading-relaxed">影響主日崇拜果效的主要限制之一，是它一週只有一次，而許多基督徒一個月參加不到兩次。試想一個八十人的大學課堂，若某個學生每兩個禮拜才來上一次課，你如何教會他代數？若我們把大量資源投注在主日崇拜上，這也難怪現今有那麼多基督徒沒有合乎聖經的世界觀——他們每天不斷從電視、電影和朋友身上接收世界的價值觀。主日講道和崇拜很重要，但不能倚賴它來完成教會全部的門徒訓練使命。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">高中教練 vs. 大學教練的領袖培育哲學</h4>
              <p className="text-gray-700 leading-relaxed">大學教練會踏遍全國尋找已開發的優秀球員，提供獎學金吸引他們加入。但高中教練必須從自己的學區找球員，從小開始培育。同樣地，大部分的牧師像大學教練，等著「已成熟的領袖」出現，但卻沒有意識到最好的方法是從自己的教會中發掘潛力，系統性地培育他們。多數時候，上帝已經把所需的人才放在教會裡，只是還沒有被發掘和裝備。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「慶祝你所推崇的」的文化塑造力量</h4>
              <p className="text-gray-700 leading-relaxed">許多教會慶祝出席人數、奉獻金額、建堂進度——這些是他們所推崇的。作者建議教會開始慶祝門徒訓練的果效：多少人開始連結在關係中、多少人開始服事、多少人開始帶領門徒。若牧師只推崇講員和傳道人，大家就會想成為這樣的人；若牧師定義並讚揚帶領門徒的門徒，教會就能建立一個帶領門徒的文化。</p>
            </div>
          </div>
        )}
      </div>

      {/* 反思問題 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">反思問題</span>
          </div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && (
          <div className="p-5 bg-white space-y-4">
            {[
              '你目前在事奉角色中，比較像「職業運動員型」還是「教練型」？有什麼證據支持你的答案？',
              '你的教會有多依賴你（或某個主要領袖）的個人魅力和能力？若那個人突然離開，會發生什麼事？',
              '你目前在四個主要角色中（真實的門徒、系統建立者、領袖培育者、異象傳遞者），哪個是最強的？哪個最需要加強？',
              '你有沒有在用五步驟學徒模式培育人？你目前在刻意培育的人是誰？',
              '你的教會或事工目前最常慶祝什麼？這個慶祝方式傳遞了什麼樣的異象？',
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
        <button onClick={() => toggle('practice')} className="w-full px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">具體實踐方針</span>
          </div>
          {expanded['practice'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['practice'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 識別你的潛在領袖</h4>
              <p className="text-gray-700 mb-2">列出你教會中5個你認為有領導潛力、且靈命正在成長（屬靈青年或父母階段）的人。針對每個人，思考：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>我如何開始更多地投資在他們的生命中？</li>
                <li>我可以用五步驟學徒模式的哪個階段來帶領他們？</li>
                <li>六個月後，我希望他們能夠承擔哪些責任？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">⏰ 重新評估你的時間分配</h4>
              <p className="text-gray-700">計算你過去一個月花在「講台準備」的時間，與花在「一對一培育領袖」的時間比例。若前者遠大於後者，思考如何重新調整，讓培育領袖成為你固定投入的優先事項。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 下個月開始慶祝門徒帶領</h4>
              <p className="text-gray-700">在你的小組或教會聚會中，刻意分享一個門徒帶門徒的真實故事（可以是本書中的故事，或你自己知道的故事），讓大家明白：帶出門徒的門徒，是教會最值得慶祝的事。</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="font-semibold text-green-700 mb-2">🙏 禱告詞</p>
              <p className="text-gray-700 italic">「主耶穌，求你改變我對事奉的看法——不是要我在台上閃耀，而是要我裝備更多人走上服事的路。求你讓我看見身邊已有的潛力領袖，賜給我智慧和耐心來培育他們。幫助我以異象和榜樣帶領教會，使帶出門徒的門徒成為我們最大的驕傲。阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
