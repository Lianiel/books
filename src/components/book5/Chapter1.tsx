export default function Chapter1() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-bold text-emerald-800">第一周</h2>
      <p className="text-sm text-slate-500">經文範圍：以弗所書一 1-8</p>

      {/* 本周主題 */}
      <div className="bg-emerald-50 rounded-xl p-5 space-y-3">
        <h3 className="text-lg font-bold text-emerald-700">📌 本周主題：從神的角度認識自己</h3>
        <p className="text-slate-700 leading-relaxed">你大概聽過「說一套，做一套」這句話。本周的核心問題是：作為基督徒，我們是否言行一致？透過歸納式研經法查考以弗所書，我們要親自從神的話語中發現真理，而非單靠聽別人的講述。</p>
      </div>

      {/* 重點整理 */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-slate-800">📖 重點整理</h3>

        <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-4">
          <h4 className="font-bold text-emerald-700">一、歸納式研經法的基礎</h4>
          <p className="text-slate-700 leading-relaxed">歸納式研經法是一種親自查考聖經的方法，不依賴他人的講述，而是透過「六何」問題來觀察經文：</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="bg-emerald-50 rounded-lg p-3 text-center">
              <p className="font-bold text-emerald-700">何人</p>
              <p className="text-xs text-slate-500">Who - 誰？</p>
            </div>
            <div className="bg-emerald-50 rounded-lg p-3 text-center">
              <p className="font-bold text-emerald-700">何事</p>
              <p className="text-xs text-slate-500">What - 什麼？</p>
            </div>
            <div className="bg-emerald-50 rounded-lg p-3 text-center">
              <p className="font-bold text-emerald-700">何時</p>
              <p className="text-xs text-slate-500">When - 何時？</p>
            </div>
            <div className="bg-emerald-50 rounded-lg p-3 text-center">
              <p className="font-bold text-emerald-700">何地</p>
              <p className="text-xs text-slate-500">Where - 哪裏？</p>
            </div>
            <div className="bg-emerald-50 rounded-lg p-3 text-center">
              <p className="font-bold text-emerald-700">為何</p>
              <p className="text-xs text-slate-500">Why - 為什麼？</p>
            </div>
            <div className="bg-emerald-50 rounded-lg p-3 text-center">
              <p className="font-bold text-emerald-700">如何</p>
              <p className="text-xs text-slate-500">How - 怎樣？</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-4">
          <h4 className="font-bold text-emerald-700">二、以弗所書一 1 的觀察</h4>
          <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-400">
            <p className="text-slate-700 italic">「奉神旨意，作基督耶穌使徒的保羅，寫信給在以弗所的聖徒，就是在基督耶穌裏有忠心的人。」</p>
          </div>
          <div className="space-y-2 text-slate-700">
            <p><span className="font-semibold text-emerald-700">寫信的人：</span>保羅——奉神旨意作基督耶穌的使徒，不是自封的，是神親自呼召的。</p>
            <p><span className="font-semibold text-emerald-700">收信的人：</span>在以弗所的聖徒——被稱為「聖徒」，意味著被分別出來歸給神的人。</p>
            <p><span className="font-semibold text-emerald-700">收信人的特質：</span>在基督耶穌裏有忠心的人——不只是掛名基督徒，而是忠心跟隨的人。</p>
            <p><span className="font-semibold text-emerald-700">他們在哪裏：</span>以弗所——當時羅馬帝國亞細亞省的首府，異教文化盛行的城市。</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-4">
          <h4 className="font-bold text-emerald-700">三、信徒在基督裏的七大福氣（弗一 3-8）</h4>
          <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-400 space-y-1">
            <p className="text-slate-700"><sup className="text-amber-600 font-bold">3</sup> 願頌讚歸與我們主耶穌基督的父神！他在基督裏曾賜給我們天上各樣屬靈的福氣：</p>
            <p className="text-slate-700"><sup className="text-amber-600 font-bold">4</sup> 就如神從創立世界以前，在基督裏揀選了我們，使我們在他面前成為聖潔，無有瑕疵；</p>
            <p className="text-slate-700"><sup className="text-amber-600 font-bold">5</sup> 又因愛我們，就按著自己意旨所喜悅的，預定我們藉著耶穌基督得兒子的名分，</p>
            <p className="text-slate-700"><sup className="text-amber-600 font-bold">6</sup> 使他榮耀的恩典得著稱讚；這恩典是他在愛子裏所賜給我們的。</p>
            <p className="text-slate-700"><sup className="text-amber-600 font-bold">7</sup> 我們藉這愛子的血得蒙救贖，過犯得以赦免，乃是照他豐富的恩典。</p>
            <p className="text-slate-700"><sup className="text-amber-600 font-bold">8</sup> ……充充足足賞給我們的。</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3 bg-slate-50 rounded-lg p-3">
              <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
              <div>
                <p className="font-semibold text-slate-800">天上各樣屬靈的福氣（v.3）</p>
                <p className="text-sm text-slate-600">不是地上物質的祝福，而是天上屬靈的福氣，而且是「各樣」——完全、全面的。</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-slate-50 rounded-lg p-3">
              <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
              <div>
                <p className="font-semibold text-slate-800">從創世以前被揀選（v.4）</p>
                <p className="text-sm text-slate-600">神的揀選不是事後的決定，是在創立世界以前就已預定——這顯出神永恆的計畫和主權。</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-slate-50 rounded-lg p-3">
              <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
              <div>
                <p className="font-semibold text-slate-800">成為聖潔、無有瑕疵（v.4）</p>
                <p className="text-sm text-slate-600">這是神揀選我們的目的——不是讓我們繼續活在罪中，而是在祂面前成為聖潔。</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-slate-50 rounded-lg p-3">
              <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
              <div>
                <p className="font-semibold text-slate-800">預定得兒子的名分（v.5）</p>
                <p className="text-sm text-slate-600">「預定」（希臘文 <em>proorizo</em>）意為預先決定。神預先決定讓信徒藉著耶穌基督得到兒子的身分，這是出於愛，按著祂自己的旨意。</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-slate-50 rounded-lg p-3">
              <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">5</span>
              <div>
                <p className="font-semibold text-slate-800">榮耀的恩典得著稱讚（v.6）</p>
                <p className="text-sm text-slate-600">一切的目的是為了讓神的恩典得著榮耀和稱讚——救恩的最終目的不是以人為中心，而是以神為中心。</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-slate-50 rounded-lg p-3">
              <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">6</span>
              <div>
                <p className="font-semibold text-slate-800">藉愛子的血得蒙救贖（v.7）</p>
                <p className="text-sm text-slate-600">「救贖」（希臘文 <em>apolutrosis</em>）指付上贖價而得到釋放。贖價就是耶穌基督的血——不是金銀，不是善行，而是神兒子的生命。</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-slate-50 rounded-lg p-3">
              <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0">7</span>
              <div>
                <p className="font-semibold text-slate-800">過犯得以赦免（v.7）</p>
                <p className="text-sm text-slate-600">赦免是照神豐富的恩典——不是勉強的，而是豐豐富富、充充足足賞賜給我們。</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-4">
          <h4 className="font-bold text-emerald-700">四、關鍵重複片語</h4>
          <p className="text-slate-700 leading-relaxed">在這段經文中反覆出現兩組重要的片語：</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="font-bold text-blue-700">「在基督裏」「在愛子裏」</p>
              <p className="text-sm text-slate-600 mt-1">表示所有的福氣都是在基督裏面才有的。離開基督，這些福氣就不存在。我們的身分、地位、祝福都建立在與基督的聯合之上。</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <p className="font-bold text-purple-700">「按著」「照」</p>
              <p className="text-sm text-slate-600 mt-1">表示一切都是按照神的旨意、神的計畫、神的恩典——不是按照我們的功勞或配不配得。一切出於神的主動。</p>
            </div>
          </div>
        </div>
      </div>

      {/* 核心真理 */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-5 border border-emerald-200 space-y-3">
        <h3 className="text-lg font-bold text-emerald-800">💎 核心真理</h3>
        <p className="text-slate-700 leading-relaxed font-medium">我們對自己所存的形象、觀念，往往支配我們的行為。我們認為自己是怎樣，決定我們「行事」的方式。</p>
        <p className="text-slate-700 leading-relaxed">如果你不知道自己在神眼中的身分和價值，你就無法活出應有的生活。認識自己在基督裏的身分，是活出基督樣式的起點。</p>
      </div>

      {/* 討論問題 */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-800">💬 討論問題</h3>
        <div className="space-y-3">
          <div className="bg-white rounded-lg p-4 border border-slate-100">
            <p className="text-slate-700">1. 你是否認識一些人，他們空談信仰卻沒有實際行動？是甚麼讓你這樣認為？</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-slate-100">
            <p className="text-slate-700">2. 你認為基督徒應怎樣活出與神、與家人、與他人、與仇敵的關係？</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-slate-100">
            <p className="text-slate-700">3. 從七大福氣中，哪一個對你最有意義？為什麼？</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-slate-100">
            <p className="text-slate-700">4. 若你真的相信這些都是真實的，你的生活會有什麼改變？</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-slate-100">
            <p className="text-slate-700">5. 「在基督裏」這個片語反覆出現，這對你的信仰理解有什麼影響？</p>
          </div>
        </div>
      </div>

      {/* 延伸思考 */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-800">🔍 延伸思考</h3>

        <div className="bg-indigo-50 rounded-xl p-5 space-y-4">
          <h4 className="font-bold text-indigo-700">延伸一：身分認同與行為的關係</h4>
          <p className="text-slate-700 leading-relaxed">心理學研究證實，一個人如何看待自己，直接影響他的行為模式。保羅在談論信徒行為之前，先花了三章的篇幅確立信徒的身分。這不是偶然的——改變行為必須從改變身分認知開始。</p>
          <p className="text-slate-700 leading-relaxed">現代社會中，很多人的身分認同建立在成就、外貌、財富或他人評價上。但保羅告訴我們，真正的身分是建立在「在基督裏」這個事實上。這是穩固的、不會改變的、不受環境影響的。</p>
        </div>

        <div className="bg-indigo-50 rounded-xl p-5 space-y-4">
          <h4 className="font-bold text-indigo-700">延伸二：「預定」的意義與安慰</h4>
          <p className="text-slate-700 leading-relaxed">「預定」（proorizo）在神學上是一個深刻的概念。它不是說人沒有選擇的自由，而是說神在永恆中就已經有了拯救的計畫。這個真理帶來極大的安慰：你的得救不是偶然的，不是碰巧的，而是神從創世以前就計劃好的。</p>
          <p className="text-slate-700 leading-relaxed">這意味著當你感到渺小、不被重視的時候，你可以記住：在宇宙被創造之前，神就已經想到你了。</p>
        </div>

        <div className="bg-indigo-50 rounded-xl p-5 space-y-4">
          <h4 className="font-bold text-indigo-700">延伸三：恩典 vs. 功德</h4>
          <p className="text-slate-700 leading-relaxed">以弗所書一再強調「恩典」——不配得的恩惠。這與世界的價值觀形成鮮明對比。世界告訴我們要靠努力賺取一切，但神說：「我白白給你。」這不是鼓勵懶惰，而是建立一個正確的起點：我們不是為了被接納而努力，而是因為已被接納才有力量去活出該有的生命。</p>
        </div>
      </div>

      {/* 實踐應用 */}
      <div className="bg-emerald-50 rounded-xl p-5 border-t-4 border-emerald-500 space-y-3">
        <h3 className="text-lg font-bold text-emerald-800">✅ 本周實踐</h3>
        <div className="space-y-2 text-slate-700">
          <p>1. 把以弗所書一章 3-8 節寫在卡片上，每天清晨、中午、睡前各大聲朗讀三次。</p>
          <p>2. 每天花 5 分鐘默想「在基督裏」你所擁有的一個福氣。</p>
          <p>3. 寫下你過去對自己的看法 vs. 神對你的看法，比較兩者的差異。</p>
          <p>4. 為神的揀選和恩典向祂獻上感恩禱告。</p>
        </div>
      </div>

      {/* 相關經文 */}
      <div className="bg-slate-50 rounded-xl p-5 space-y-2">
        <h3 className="text-lg font-bold text-slate-700">📚 延伸閱讀經文</h3>
        <p className="text-slate-600 text-sm">• 羅馬書八 28-30 — 神預定的計畫</p>
        <p className="text-slate-600 text-sm">• 彼得前書二 9 — 被揀選的族類</p>
        <p className="text-slate-600 text-sm">• 約翰福音十五 16 — 「不是你們揀選了我，是我揀選了你們」</p>
        <p className="text-slate-600 text-sm">• 哥林多後書五 17 — 在基督裏的新造的人</p>
      </div>
    </section>
  );
}
