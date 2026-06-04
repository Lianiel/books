import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Target, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book24Ch7() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent">第七章</h1>
        <h2 className="text-xl font-semibold text-gray-700">如何渡過大災難</h2>
        <p className="text-gray-500 mt-1">靠神的能力存活，不靠肉體（4.16-4.18）</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-yellow-50 hover:from-amber-100 hover:to-yellow-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-amber-700 text-base mb-2">4.16 如何渡過即將來臨的大災難</h3>
              <p className="text-gray-700 leading-relaxed">
                主說：「這將是人類歷史上，一個史無前例，空前絕後的時期。因為人們已經完全無計可施，
                走投無路，不知如何應對。一切都不可思議，不可理喻。我現在要為留下來的人做些準備工作。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主首先指出物質預備的無效性：「積攢財富，追求功名利祿，已經沒有任何意義了！
                因為所有的部門單位都要按照你對世界新秩序的忠心程度重新定位組合。
                凡是想在那個時候，被提事件發生之後，謀求高位的基督徒一定會碰釘子的。
                那時，你生活的重點不是如何賺大錢，而是如何求生存。大家用不著大驚小怪，
                這是事實。不單是物質上的生存，更是屬靈上的生存，就是必須明白聖靈運行的每一個步驟。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主強調只有祂才是真正的保護：「只有靠著我的靈，你們被留下來的人才能得到保護。
                任何人的計畫和想法都不能給你和家人帶來平安。只有我的拯救和我的保護是大有功效的。
                親愛的子民，你們絕不能靠刀劍保護自己。你們必須全心仰望和依靠我的護庇。
                如果你們認為我是你們唯一的幫助，我必以超自然的方式保護你們。
                凡靠刀劍的，必死在刀劍下。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主也提供了具體的生存指引：大災難來臨時，「最重要的一點就是要誠實」，
                其次要「保持清醒保守自己不犯罪」，還要有愛心、謙卑和忍耐。
                這些都是得到保護的必要條件。主說：「失敗跌倒了，就馬上到我這裡來。
                別拖延時間。真誠地棄絕罪，認罪悔改，我即刻恢復對你的遮蓋和保護，
                並給你恩典使你不再犯罪。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-700 text-base mb-2">4.17 不靠肉體</h3>
              <p className="text-gray-700 leading-relaxed">
                主說：「不要靠肉體。不要以為沒有我的介入，確切地說，沒有我完全的掌控，
                你能供應自己的需要，保護好自己。千萬不要有這樣的念頭！如果你靠肉體，
                靠你的自衛能力和自我生存能力，你注定要失敗。你們當中，有一些人進入大災難的時候，
                雖然兩手空空，口袋空空，走投無路，沒吃沒喝，毫無準備，但是，他們走一步，
                我供應一步。我會完全滿足他們的需求。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主提醒，靠肉體的危險：「如果你迫不及待地儲備著備用需要物資，
                那說明你對我就缺乏認識和瞭解。如果你真的認識我，你就應該早就為你預備好出路。
                所有你需要的食物，藥物和保護早就準備好了。我還會讓你們在仇敵面前隱身，消失不見。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主強調禱告是最重要的武器：「如果你把禱告當做頭等大事來對待，我就及時提醒你們
                要發生的事。禱告比你們的生命更重要，你們需要高品質的禱告時間。
                圓隊小組裡，每個人都要禱告，不禱告的，就是圓隊裡最軟弱的；到關鍵時刻，
                壓力大的時候，就會做出不正確的選擇，從而背叛隊友。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-700 text-base mb-2">4.18 地獄的大軍已經被釋放出來</h3>
              <p className="text-gray-700 leading-relaxed">
                主說：「地獄的大軍已經被釋放出來。魔鬼已從地獄裡出來，進入地球，爆動叛亂，
                讓人類低頭上。這是核心中心一手造成的。這些人盲目無知，根本不知道即將為混亂
                會產生什麼樣的後果。等他們發現問題的時候，已來不及了，因為他們已經摧毀了大半個地球。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主描述地獄的作用：「地獄就在地球的中心。有一股超強的推動引力推動了我設置的一個
                防護罩。這個防護罩是用來阻止大批的魔鬼群湧入地上，毀滅地球的。」
                在異象中，作者看見了「一個比無比大的魚鱗板粒子被加速器的運作移動了位置」，
                這就是魔鬼大軍被釋放的象徵。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主說：「我希望你們明白，從今天開始你們會目睹邪惡將迅速在地上橫行蔓延，
                吞吃人類，影響人類，最後摧毀人類。剛開始的時候，蔓延速度緩慢，然後勢力會越來越強大。」
                但主也給出盼望：「地球會遭到嚴重的破壞，但是不會滅掉。我會賜給地球一個嶄新美麗的春天，
                一個重新被造的地球。我要恢復地球原有的樣式。」
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
            <ul className="space-y-2">
              {[
                '物質預備在末世中是無效的——唯有全心倚靠神才能得到超自然的保護和供應。',
                '禱告是末世的頭號武器，勝過任何物質準備；禱告品質差的人是群體中最脆弱的一環。',
                '謙卑、誠實、有愛心、忍耐是得到神保護的必要條件；驕傲和靠自己是失去保護的原因。',
                '地獄的大軍已經被釋放，末世的邪惡將急速蔓延，但神有防護罩限制其破壞程度。',
                '地球不會被滅掉，主承諾將在末世後賜給地球嶄新美麗的春天和重新被造的秩序。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「靠刀劍的必死在刀劍下」——非暴力信仰的根基</h4>
              <p className="text-gray-700 leading-relaxed">
                馬太福音26:52耶穌對彼得說的這句話，在本書中被賦予了末世生存策略的意涵。
                主的意思不是信徒毫無防衛，而是信徒的最終依靠不能是暴力。
                歷史上，許多信徒在迫害中選擇了和平的見證而非武力反抗，
                結果往往反而帶來更大的靈性果效。這種「屬靈武裝」的策略需要極大的信心和屬靈的成熟。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">曠野供應的神蹟模式</h4>
              <p className="text-gray-700 leading-relaxed">
                主承諾「我走一步，你供應一步」呼應了以色列人在曠野四十年的經歷（出埃及記16章）：
                每天的嗎哪夠當天用，不能囤積超過一天的份量。這個模式訓練了以色列人每天依靠神，
                而不是依靠自己的積蓄。本書的教導延續了這個「每日仰望」的信仰原則，
                在末世的極端情況下，這種完全倚靠可能是唯一可行的生存方式。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">末世後的新地球——「萬物的復興」</h4>
              <p className="text-gray-700 leading-relaxed">
                使徒行傳3:21提到「那萬物復興的時候」，啟示錄21:1說「我又看見一個新天新地」。
                本書中主承諾末世後的「嶄新美麗的春天」與這些經文一致，
                說明末世的目的不是毀滅，而是更新和恢復。
                這給了信徒末世盼望的正確方向——不是一切終結，而是進入一個更美好的永恆創造。
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
              '「凡靠刀劍的，必死在刀劍下」——你如何理解這個原則在末世生存中的實際應用？你是否能真正接受這種信仰立場？',
              '主說「迫不及待地囤積物資說明你對我缺乏認識」——你目前的備災心態是「信靠為主、物質預備為輔」還是顛倒了？',
              '禱告是末世最重要的武器——回顧你現在的禱告生活，你認為自己是「禱告的強者」還是「禱告的弱者」？',
              '「誠實是最重要的一點」——在壓力和生死關頭，你認為誠實是容易還是困難的？有什麼可能讓你妥協？',
              '地獄的大軍已被釋放，邪惡將急速蔓延——這個現實如何影響你看待當代文化、媒體和社會趨勢的眼光？',
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 提升禱告品質</h4>
              <p className="text-gray-700 mb-2">讓禱告真正成為你日常生活中最重要的事。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>評估你目前每天花在禱告上的時間和品質</li>
                <li>設定一個比現在多30分鐘的安靜禱告時間</li>
                <li>學習「聆聽式禱告」——不只說話，也等候神的回應</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 每日依靠訓練</h4>
              <p className="text-gray-700 mb-2">訓練「每步倚靠，每步供應」的信心。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>今天遇到的每個需要，先禱告交給神，看祂如何回應</li>
                <li>記錄神「走一步，供應一步」的實際經歷</li>
                <li>刻意在一件事上放棄自己的控制，單純信靠神</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">⏰ 屬靈品格的日常操練</h4>
              <p className="text-gray-700 mb-2">從現在就開始培養在末世中保護自己的品格。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>誠實：這一週在每個場合都選擇說真話，即使代價很高</li>
                <li>謙卑：主動為一個讓你感到不快的人做一件善事</li>
                <li>愛心：對周圍的人表達關心，特別是你不太親近的人</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-2">
              <h4 className="font-semibold text-green-700 mb-2">🙏 本章禱告</h4>
              <p className="text-gray-700 italic leading-relaxed">
                「主耶穌，我承認我太依靠自己的計畫和能力了。求你幫助我真正放下倚靠肉體的習慣，
                學習每一步都等候你的帶領和供應。讓我的禱告生命更深、更強。在末世的黑暗中，
                讓我成為一個完全依靠你的人。阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
