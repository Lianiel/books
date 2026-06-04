import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star, Search, HelpCircle, Check, AlertCircle } from 'lucide-react';

export default function Book24Ch3() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent">第三章</h1>
        <h2 className="text-xl font-semibold text-gray-700">尼比魯、外星人與屬靈爭戰</h2>
        <p className="text-gray-500 mt-1">末世徵兆：第十顆行星與神的供應（4.1-4.3）</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-blue-50 to-violet-50 hover:from-blue-100 hover:to-violet-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-violet-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-violet-700 text-base mb-2">4.1-4.2 尼比魯行星——末日的宇宙徵兆</h3>
              <p className="text-gray-700 leading-relaxed">
                書中記載，作者珂萊爾向主詢問關於末日徵兆的事，主給她看了一個異象：
                「我看見一顆紅色的星球像一團火，靠近地球，降落在耶路撒冷。化身為撒基督的撒但，
                無所畏懼地站在至聖所裡，用手中的杖擊打地面。頓時，火焰從那裡噴射出去，覆蓋全球。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主解釋說：「這是大毀滅的最後一個場面，即大災難結束的時候。」
                書中提到尼比魯（Nibiru）行星——又稱第十顆行星——其出現被描述為末世的重要徵兆。
                主說：「當尼比魯行星來視察地球的時候，也就是撒旦被釋放到地球上的時候，對嗎？」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                這個「兩個組成部分」的說法令作者不解，但主向她解釋，末世的某些事件雖然從外表看像
                自然現象，實際上卻是屬靈世界正在發生的事件的外在顯現。尼比魯行星的出現與地球上的屬靈
                活動是相關聯的。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-violet-700 text-base mb-2">外星人的真相：墮落天使的偽裝</h3>
              <p className="text-gray-700 leading-relaxed">
                主在書中明確揭露了所謂「外星人」的真實身份。主說：
                「我必須告訴你，使你完全相信這個事實。這些外星人，沒有一個是善良的，
                都是墮落的天使，專門攻擊我和全人類的。有的表面上，看上去挺好的，
                但實際上，用心非常險惡，所以不要上當受騙。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主進一步說明：「他們比小灰人（灰色外星人）更可怕危險。我不喜歡談論這個話題。
                但是我不希望你對此一無所知。」這些被稱為外星人的存在，其實是撒旦用來欺騙人類、
                引誘人類上鉤、除掉他們的戒備心理的工具。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                書中描述牠們的策略：「他們想方設法，更深入地，參與到人類的日常活動中，
                使人類放鬆對他們的警惕性和戒備心理。」主還警告說，這些存在能在多維空間互相轉換，
                以不同形式出現，但本質不變——都是撒旦的附庸。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-violet-700 text-base mb-2">克隆人：撒旦製造混亂的工具</h3>
              <p className="text-gray-700 leading-relaxed">
                書中也提到克隆人（clones）的問題。主警告說：「如果各種不同類型的克隆人再一問世，
                全球將陷入一片混亂。」這些克隆人被描述為政府未來用來搜查、追捕和破壞抵抗者的工具，
                他們隨時待命，一旦接到命令就立即起身搜捕和毀滅抵抗者。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                關於克隆人的製造，書中描述了一個令人不安的過程——利用不正當方式獲取精子和卵子，
                製造沒有靈魂的身體，然後由魔鬼進入其中。主說：「他們只需要種子。
                魔鬼的存在模式跟天使和人類差不多。」而成千上萬的魔鬼就在等待機會進入這些「空殼身體」。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-violet-700 text-base mb-2">4.3 第十顆行星出現時的神的供應</h3>
              <p className="text-gray-700 leading-relaxed">
                面對如此嚴峻的末世景象，主緊接著給出了充滿盼望的應許：
                「那些藏在磐石裡，巨石縫裡和山谷裡的人，我必以超自然的方式保護他們，
                供應他們的需要。因為他們堅心依靠我的供應，他們的靈命也必以超自然的速度成長起來。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主進一步描述這種超自然的供應：「凡全心歸向我的人，會經歷很多的醫治和各種形式的保護，
                同時也會有豐富的食物和水源供應他們。在我來之前，他們這批人定要經過煅煉，
                經受試煉，成為聖徒；他們將如同煉過的金銀一樣，在我的國度裡發出耀眼的光芒。
                是我揀選了他們，迎接這個特殊時期的挑戰。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主也提到，等到等主顯現時，情況將發生戲劇性的轉變：「等人們看見第十顆行星的時候，
                就來不及採取應對措施了。那時，一切都來不及了！」這是最後的呼召。
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
                '尼比魯（第十顆行星）的出現是末世的宇宙徵兆，與屬靈世界的重大事件相關聯。',
                '所謂「外星人」全是墮落天使，用欺騙、偽裝來迷惑人類，沒有任何例外。',
                '克隆人是撒旦政府用來搜查追捕抵抗者的工具，其身體由魔鬼居住。',
                '藏在磐石山谷中、完全倚靠神的人，將得到超自然的供應、保護和醫治。',
                '末世的煅煉是必要的，讓信徒如精金般發出光芒，並加速靈命成長。',
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
              <h4 className="font-semibold text-gray-800 mb-2">聖經中的「神的兒子」與墮落天使</h4>
              <p className="text-gray-700 leading-relaxed">
                創世記6:1-4提到「神的兒子」與人類女子結合，生下偉人（拿非利人），
                這段經文長期以來被解讀為天使墮落、與人類混合的記錄。
                彼得後書2:4和猶大書1:6也提到有些天使離開了本位，被神用鎖鏈捆綁在黑暗裡。
                本書的觀點與這種解釋框架一致，將所謂「外星人」納入聖經啟示的範疇來理解。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">非被造光體（Uncreated Light）的概念</h4>
              <p className="text-gray-700 leading-relaxed">
                書中提到「非被造光體（the Uncreated Light）」這個概念，來自俄羅斯和希臘東正教傳統。
                這個概念指的是神本身的光，不是被造的光，是在神的身上看到的永恆光輝。
                書中指出，真正的天使和聖徒都具有這種「非被造光體」的特徵，
                可以用來區別真正的屬天存在和偽裝的邪靈。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「藏在磐石中」——末世的實際逃避</h4>
              <p className="text-gray-700 leading-relaxed">
                啟示錄12:6提到那女人（代表神的子民）「逃到曠野，在那裡有神給她預備的地方」。
                本書描述的「藏在磐石縫裡和山谷裡」與這個意象高度呼應。
                書中提到神將超自然地供應食物和水（像在曠野中供應嗎哪一樣），
                說明這不只是物質性的逃避計畫，更是一種屬靈的「躲避神翅膀蔭下」的生命狀態。
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
              '如果「外星人」的真實身份是墮落天使，這個真相如何改變你對當代UFO現象和流行文化的看法？',
              '主說末世中「完全信靠祂的人」才能得到超自然保護。你認為「完全信靠」在實際生活中是什麼樣子？',
              '「煅煉如精金」的過程必然涉及痛苦和試煉。你願意為了靈命的深度成長而接受這樣的過程嗎？',
              '如果知道末世要來，你是否願意放棄城市舒適的生活，去到偏遠的地方「藏在磐石中」？這對你意味著什麼？',
              '書中警告「等看見第十顆行星時就來不及了」——在屬靈生命上，你是否也有「等到壓力來了才準備」的傾向？',
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 屬靈辨別力的培養</h4>
              <p className="text-gray-700 mb-2">培養分辨真假靈的能力，不被迷惑。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>閱讀約翰一書4:1-3，學習如何試驗各樣的靈</li>
                <li>遇到任何聲稱是屬靈異象或神跡的事，先禱告求主驗證</li>
                <li>以「耶穌基督已成肉身來」為試驗標準</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 倚靠神而非物質預備</h4>
              <p className="text-gray-700 mb-2">訓練自己在日常生活中倚靠神的供應。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>每天練習「交出控制權」的禱告，將當天的需要交給神</li>
                <li>記錄神超自然供應的時刻，建立信心的「記念碑」</li>
                <li>減少對物質保障的過度依賴，增加對神的信心</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 末世靈媒預備清單</h4>
              <p className="text-gray-700 mb-2">做一個個人的末世靈命預備評估。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>我與神的關係深到能在黑暗中聽到祂的聲音嗎？</li>
                <li>我是否認識其他有同樣信仰的人，能在末世中同行？</li>
                <li>我對撒旦的策略和欺騙方式是否有足夠的了解和辨別力？</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-2">
              <h4 className="font-semibold text-green-700 mb-2">🙏 本章禱告</h4>
              <p className="text-gray-700 italic leading-relaxed">
                「主耶穌，求你賜我屬靈的眼睛，能看透那些用各樣偽裝迷惑人的邪靈。
                讓我完全倚靠你，而不是倚靠自己的聰明和計畫。我願意成為藏在你磐石裡的人，
                在末世的黑暗中仍然找到你的光和供應。阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
