import React from 'react';
import { BookOpen, Star, Heart, Lightbulb } from 'lucide-react';

export default function Chapter8() {
  return (
    <div className="max-w-4xl mx-auto pb-12">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-2 border-b-2 border-rose-100 pb-4">
        第 8 章：進一步建立生活規約
      </h1>
      <p className="text-slate-500 italic mb-8">愛基督勝於一切</p>
      <div className="space-y-8">

        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="bg-rose-50 border-l-4 border-rose-400 p-4 mb-6 rounded-r-lg">
            <p className="text-rose-900 font-medium m-0">但以理的秘訣只有一個：他有一套計畫，一套生活規約。他知道「週日上教會、每天靈修十五分鐘」是不夠的。<span className="text-rose-500 text-sm ml-2">(p.232)</span></p>
          </div>
          <div className="flex items-center mb-4 text-rose-700">
            <BookOpen className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">但以理的「生活規約」</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>尼布甲尼撒率領巴比倫大軍，帶著他們膜拜的神明攻占耶路撒冷，將多數居民擄回為奴。在這群被擄的人當中，有一個青年名叫但以理。但以理離開家人、老師、朋友，熟悉的食物、文化和語言，被帶到巴比倫皇宮，送進一流大學，學習一種全然陌生、充斥異教思維的世界觀。<span className="text-slate-400 text-sm ml-1">(p.232)</span></p>
            <p>巴比倫的目的只有一個：消弭但以理這個跟隨神的人與他們之間的差異，讓他融入他們的文化。但以理如何抵擋巴比倫強大的影響力？他並非成為離群索居的隱居修士，而是負起執行命令的重責大任。他有的，只是一個計畫，一套生活規約。<span className="text-slate-400 text-sm ml-1">(p.232)</span></p>
            <p>但以理並沒有放任內在生命隨意發展。他知道他在對抗的是非常強大的敵人。他明顯只有一個目標：愛神。為了愛神，他必須有所犧牲，譬如不吃被玷汙的王膳（但一），以及規律操練「日課」（但六）。但以理利用這個方法，讓自己的靈性在惡劣環境下不致餓死。<span className="text-slate-400 text-sm ml-1">(p.232)</span></p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-rose-700">
            <Star className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">生活規約的四大領域</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>作者建議將生活規約分成四大類：禱告、休息、工作/活動、關係。以下是具體內容：<span className="text-slate-400 text-sm ml-1">(p.235)</span></p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {[
                {
                  cat: '禱告',
                  color: 'bg-purple-50 border-purple-200',
                  titleColor: 'text-purple-700',
                  items: ['1. 日課（固定時段的禱告）', '2. 靜默與獨處', '3. 讀聖經', '4. 聖餐'],
                },
                {
                  cat: '休息',
                  color: 'bg-blue-50 border-blue-200',
                  titleColor: 'text-blue-700',
                  items: ['5. 守安息日', '6. 過簡樸生活', '7. 玩樂與休閒'],
                },
                {
                  cat: '工作/活動',
                  color: 'bg-green-50 border-green-200',
                  titleColor: 'text-green-700',
                  items: ['8. 服事與宣教', '9. 照顧身體'],
                },
                {
                  cat: '關係',
                  color: 'bg-rose-50 border-rose-200',
                  titleColor: 'text-rose-700',
                  items: ['10. 情感健康', '11. 家庭', '12. 群體（一同守規約的夥伴）'],
                },
              ].map((cat, i) => (
                <div key={i} className={`p-4 rounded-lg border ${cat.color}`}>
                  <h3 className={`font-bold mb-2 ${cat.titleColor}`}>{cat.cat}</h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {cat.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-1">
                        <span className="text-slate-400">•</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-4">你可以隨意加入新的元素（譬如殷勤接待人），刪減（或不刪減）其他元素。你或許會想要將閱讀歸在休息或工作的項目之下，或是把照顧身體歸於休息；要如何安排，由你決定。<span className="text-slate-400 text-sm ml-1">(p.235)</span></p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-rose-700">
            <Heart className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">日課、閱讀與靜默的實踐</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>魏樂德說的：「靜默是很嚇人的，因為相較之下，靜默最能把我們剝得精光，逼著我們去面對生命中最赤裸的一面。靜默會讓我們聯想到死亡，死亡就是與這個世界隔絕，只剩下我們和神。」<span className="text-slate-400 text-sm ml-1">(p.238)</span></p>
            <p>我通常會在每天的日課用一點時間靜默，時間五到二十分鐘不等，一週數次。「你當默然倚靠耶和華，耐性等候他」（詩三十七7），靜默一直是我在基督裡成長的重要因素。<span className="text-slate-400 text-sm ml-1">(p.238)</span></p>
            <p>我喜歡每天的日課有清楚的架構、有感動、有變化。譬如，我會參考蒂克爾的《神聖時光》安排早禱、午禱和晚禱，另外也經常會使用《公禱書》（Book of Common Prayer）。我主要會以舊約中的詩篇禱告，作為日課的內容。<span className="text-slate-400 text-sm ml-1">(p.238)</span></p>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 mt-4">
              <h3 className="font-bold text-slate-800 mb-3">建立生活規約的步驟</h3>
              <ol className="text-sm text-slate-600 space-y-2">
                {[
                  '認識自己：哪些靈性的操練能使你更親近神？哪些會適得其反？',
                  '從小開始：先選擇一兩個你能持守的操練，不要貪多嚼不爛。',
                  '勇於嘗試：不怕失敗，從嘗試中找出正確的組合。',
                  '尋找夥伴：找一個或幾個一同守規約的夥伴，互相提醒和鼓勵。',
                  '定期檢視：每隔一段時間檢視規約，根據生命季節調整。',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="bg-rose-100 text-rose-700 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-rose-700">
            <Lightbulb className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">結語：情感健康的靈性</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>操練日課與守安息日，是現代基督徒不可或缺的革命性操練。這兩種操練都彷彿是在向世人強力宣告：神、我們自己、我們與他人的關係、我們的信仰、我們的價值觀都是非常重要的。<span className="text-slate-400 text-sm ml-1">(p.177)</span></p>
            <p>暫停生活的腳步，練習日課與守安息日，目的並不是要在已經非常忙碌的生活裡多加一些東西，而是要重新調整生活，重新以神為目標。換言之，那是一種全新的生活方式。<span className="text-slate-400 text-sm ml-1">(p.177)</span></p>
            <div className="bg-rose-50 border-l-4 border-rose-400 p-4 rounded-r-lg mt-4">
              <p className="text-rose-800 font-medium m-0">情感健康的靈性，不是一個我們能夠達到的終點，而是一段不斷學習、成長、與神同行的旅程。願我們都能在這條路上，一步一步地走向更深的自知、更真實的愛，以及更豐盛的生命。</p>
            </div>
          </div>
        </section>

        <section className="bg-amber-50 p-6 rounded-xl shadow-sm border border-amber-200">
          <div className="flex items-center mb-4 text-amber-700">
            <span className="mr-2 text-lg">ℹ</span>
            <h2 className="text-xl font-bold">【延伸探討：生活規約的現代意義】</h2>
          </div>
          <div className="text-slate-700 space-y-4">
            <p>「生活規約」（Rule of Life）這個概念源自早期修道院傳統，聖本篤的《會規》是最著名的例子。但它並不是修道士的專利，而是每個基督徒都可以實踐的靈性框架。</p>
            <p>在現代高速運轉的社會中，沒有刻意的規約，我們的靈性生命就會被各種緊急但不重要的事情淹沒。生活規約的目的，是幫助我們主動選擇那些「好的部分」，而不是被動地被生活的洪流沖走。</p>
            <p>就像但以理一樣，我們每個人都活在自己的「巴比倫」中——充斥著各種世俗價值和誘惑的環境。而我們的「生活規約」，就是我們抵擋這些影響、保持屬靈清醒的核心策略。</p>
            <p className="text-sm text-amber-700 font-medium">📚 延伸參考：蒂克爾《神聖時光》、托曲《靈性塑造》</p>
          </div>
        </section>

      </div>
    </div>

      {/* 反思與實踐 */}
      <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-lg text-white mt-4">
        <h3 className="text-2xl font-bold text-indigo-300 mb-6 flex items-center gap-3">
          <span>🧠</span>
          深度反思與行動指南
          <span className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded-full font-normal border border-slate-600">延伸應用（非原書內容）</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="text-lg font-bold text-indigo-200 mb-4">💭 反思問題</h4>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li className="flex items-start gap-2"><span className="text-indigo-400 font-bold flex-shrink-0">1.</span>我目前的生活有「規約」嗎？還是我的屬靈生命是隨機、被動的？</li>
              <li className="flex items-start gap-2"><span className="text-indigo-400 font-bold flex-shrink-0">2.</span>在禱告、休息、工作、關係這四個領域中，哪一個最被我忽略？</li>
              <li className="flex items-start gap-2"><span className="text-indigo-400 font-bold flex-shrink-0">3.</span>我的生活節奏是否反映了我真正的價值觀？還是我的時間都被「緊急」的事佔據？</li>
              <li className="flex items-start gap-2"><span className="text-indigo-400 font-bold flex-shrink-0">4.</span>如果但以理生活在我目前的處境中，他會如何建立他的「生活規約」？</li>
              <li className="flex items-start gap-2"><span className="text-indigo-400 font-bold flex-shrink-0">5.</span>什麼樣的靈性操練讓我感到更親近神？什麼樣的反而讓我感到更遠？</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="text-lg font-bold text-emerald-300 mb-4">🎯 生活實踐</h4>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li className="flex items-start gap-2"><span className="text-emerald-400 font-bold flex-shrink-0">1.</span>本週為自己草擬一份簡單的「生活規約」：在禱告、休息、工作、關係各選一項你想要加強的操練。</li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 font-bold flex-shrink-0">2.</span>找一個「守規約的夥伴」：找一位朋友，互相分享你們的生活規約，每月見面檢視。</li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 font-bold flex-shrink-0">3.</span>把你的「生活規約」寫下來，貼在你每天都能看到的地方，作為每日的提醒。</li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 font-bold flex-shrink-0">4.</span>給自己三個月的時間試行這份規約，三個月後重新評估和調整。</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}
