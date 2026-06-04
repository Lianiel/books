import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book25Ch5() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true, summary: true, exploration: true, questions: true, practice: true
  });
  const toggle = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">第五章</h1>
        <h2 className="text-xl font-semibold text-gray-700">領袖的角色</h2>
        <p className="text-gray-500 mt-1">領袖在門徒訓練的過程扮演甚麼角色？</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('content')} className="w-full px-5 py-3 bg-gradient-to-r from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-blue-700 mb-2">卜冀曼的事奉起點：作自己</h3>
              <p className="text-gray-700 leading-relaxed">第一次感受到上帝呼召成為牧師時，卜冀曼百般不願地踏上教牧事奉，因為他不想成為那種傳統的「完美牧師形象」。他曾在藥物成癮中掙扎，去過戒酒機構；在那裡，他見到當人們彼此坦誠、互相分享內心掙扎時所帶來的力量；也看到一個保證人（門徒帶領者）對生命的改變力量有多大。於是他選擇以有缺點的、真實的、不造作的方式進入教牧事奉。</p>
              <p className="text-gray-700 leading-relaxed mt-3">然而有件事不斷讓他驚訝——許多牧師到如今都未經歷坦誠作自己（一個蒙恩得救的罪人）所帶來的自由。工作帶來的壓力讓他們戴著面具生活，成為屬靈機器人，最終瀕臨崩潰邊緣——精疲力盡、沒有朋友、孤單寂寞，成為惡者攻擊的首要目標。</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-700 mb-2">真實的力量：卜冀曼兒子的故事</h3>
              <p className="text-gray-700 leading-relaxed">卜冀曼牧會多年後，他正值青年期的兒子決定讓毒品與酒精逐步毀滅他，好幾次瀕臨死亡及身陷囹圄。惡者立即以此羞辱他，讓他想將這一切隱藏起來，不和教會任何人分享。但他最終選擇了另一個方法——向教會長老、同工和家庭小組坦承所發生的事。</p>
              <p className="text-gray-700 leading-relaxed mt-3">教會小組的人給他和妻子承擔重擔：他們為兒子住勒戒所的費用悄悄籌款；當卜冀曼出外宣教期間，兒子被踢出勒戒所，妻子羅以發簡訊給小組姐妹求助，所有姐妹都趕來陪伴，她甚至說：「拜託，拿走我的鑰匙，不然我真的會去把兒子接回來。」這個故事有個快樂結局——兒子克勳如今幾乎兩年沒碰毒品，投身教會事工，父子倆公開分享這段經歷。</p>
              <p className="text-gray-700 leading-relaxed mt-3">這使他們看見：坦承自己軟弱所帶來的力量是巨大的。若他決定靠自己、將一切隱藏起來，很可能到最後支離破碎。他選擇示範坦承軟弱，結果在他的小組裡樹立了新的文化，弟兄姐妹願意彼此認罪，許多人從多年的綑綁中得到靈里的醫治。</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-700 mb-2">聖經對領袖品格的要求</h3>
              <p className="text-gray-700 leading-relaxed">提摩太前書三章和提多書一章列出了敬虔領袖應有的特質——無可指責、自守、端正、只作一個婦人的丈夫、不因酒滋事等。這個清單反映的是一個人的品格，而非技術能力或聰明才智。這為什麼重要？因為當生命中的挑戰與壓力讓人難以招架時，一個牧師的品格將會決定他的行為。</p>
              <p className="text-gray-700 leading-relaxed mt-3">然而，這些要求很容易讓人產生完美主義的幻覺——認為只要在任何事上有掙扎，就代表不符合資格。這種想法讓教會產生了一種文化：成員覺得自我價值感低落，不願服事，因為他們看到的「示範」似乎都沒有罪的問題或掙扎。非基督徒看到這樣的教會，更是覺得充滿了虛偽。</p>
              <p className="text-gray-700 leading-relaxed mt-3">聖經所呈現的典範，是一個真實且健康透明坦誠的群體，不斷地把人帶回福音的核心——不是掩飾罪惡，而是在恩典中面對罪惡。聖潔不是我們憑一己之力達到的完美，而是「當我們在基督裡被稱為義、脫離罪的權勢時所經歷到的自由」，是我們往神的道上直奔時，內心所充滿的喜樂（詩一百一十九32）。</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-700 mb-2">四種關係環境：耶穌的門徒帶領模式</h3>
              <p className="text-gray-700 leading-relaxed">耶穌在不同的關係情境裡訓練教導人，有智慧的植堂者與領袖，應以這些模式為藍圖：</p>
              <div className="space-y-3 mt-3">
                {[
                  { num: 1, name: '親密的門徒帶領關係（1對2-3人）', desc: '耶穌和彼得、雅各和約翰的關係最親近，這三人所得到的資訊與經歷的情境，是其他門徒沒有的。耶穌刻意培育、挑戰他們。同樣地，有智慧的教會植堂者通常透過帶領兩三個主要領袖來輔導人作門徒，是最有果效的方法。' },
                  { num: 2, name: '個人的門徒帶領關係（1對10-12人）', desc: '耶穌與十二門徒保持個人關係，有優質的時間相處。他認識他們，知道他們個人的生活與掙扎，幫助他們在真實生活中跟隨耶穌。這相當於教會裡的小組——門徒帶領者與約十二個人保有個人關係。' },
                  { num: 3, name: '社交的門徒帶領關係（1對最多120人）', desc: '耶穌與七十二個門徒有良好關係，差派他們奉主之名服事。在這層關係中，人們通常知道彼此的名字，知道一些個人情況。大部分的教會大概都是這個規模。' },
                  { num: 4, name: '公眾的門徒帶領關係（1對大群人）', desc: '耶穌公開地與大群人互動，如登山寶訓。在這個層級，領袖確立異象，傳授跟隨耶穌的基本DNA。牧師在講台上的信息，能讓未信者首次學到作耶穌門徒的意義。' },
                ].map(r => (
                  <div key={r.num} className="bg-blue-50 border border-blue-100 rounded-lg p-3">
                    <p className="font-semibold text-blue-800 mb-1">類型{r.num}：{r.name}</p>
                    <p className="text-gray-700">{r.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-blue-700 mb-2">如何開始活出真實</h3>
              <p className="text-gray-700 leading-relaxed">活出真實，最容易的方法是從最親密的關係層次開始，不是從講台上開始。先在你最親密的朋友、互相守望的伙伴面前分享困擾，逐步營造出坦然並誠實接納罪與掙扎的文化。當你周圍的人能夠支持並理解你時，你便能向更大的人際圈擴展。</p>
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
                '教會的領袖必須以有缺點的、真實的方式事奉，坦承自己是蒙恩得救的罪人，而不是假裝完美——這是健康文化的根源。',
                '當領袖坦承軟弱並尋求他人幫助時，這會在教會中創造透明、恩典、和真實關係的文化，使人敢於分享自己的掙扎。',
                '聖潔不是憑人自己的力量達到的完美，而是在基督裡的自由——在恩典中面對失敗，並在聖靈的幫助下繼續成長。',
                '耶穌在四種不同規模的關係環境中帶領門徒（1對3、1對12、1對120、1對大眾），每種環境都有其不可取代的作用。',
                '領袖必須在親密關係中示範真實，不需要向每個人坦承每件事，但至少在最親近的圈子裡，必須活出真實和脆弱。',
                '「你不能帶人去你不去的地方，你不能教人你所不知道的事」——領袖的品格是一切事工的根基。',
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
              <h4 className="font-semibold text-indigo-700 mb-2">完美主義文化如何摧毀教會</h4>
              <p className="text-gray-700 leading-relaxed">當領袖企圖維持完美形象時，他無意中建立了一套系統，讓教會成員覺得「若有任何掙扎就不合格」。這導致在小組裡沒有人敢說真心話；當有人遭遇問題時就停止聚會，直到問題解決後才回到「人人都很完美」的小組。結果是：那些最需要幫助的人，反而是最不敢尋求幫助的人。這是一個惡性循環，也是魔鬼攻擊教會的有效策略。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">為什麼牧師難以在自己的教會有真實的朋友？</h4>
              <p className="text-gray-700 leading-relaxed">在訓練研討會中，卜冀曼問牧師們是否有能定期彼此告誡的好朋友（希伯來書三章12-13節的定義）。大多數人舉手，但當他追問後，他們承認這個人是妻子，或住在別州的大學同窗。他們說，若真的分享自己的感受，別人會驚訝，就不再敬重他們了——魔鬼已將這些牧師逼到情緒的牆角，讓他們孤立無援，成為攻擊的目標。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">十二步驟課程與教會的關係</h4>
              <p className="text-gray-700 leading-relaxed">作者發現，要讓植堂者或牧師經歷坦承軟弱力量的最佳方式之一，是讓他們參與十二步驟課程。早期的教會不需要這樣的課程，因為彼此之間夠坦誠，不需要。今天，大部分的教會領袖若考慮透過「歡慶更新」事工改變教會文化，會較容易轉化為門徒訓練的教會——因為這種課程的文化就是坦承、接納、和同行。</p>
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
              '你在服事或領導的角色中，是否有戴著「完美」面具的傾向？這來自於什麼樣的恐懼或壓力？',
              '你生命中有沒有一個人，是你可以真正坦承掙扎、弱點和罪的？若沒有，為什麼？',
              '卜冀曼公開分享兒子的事情，在你看來是勇敢還是魯莽？你認為一個領袖應該在哪些情境下坦承個人掙扎？',
              '你的教會文化是鼓勵透明和真實，還是（無意中）鼓勵了表面的完美主義？你如何從自己開始改變這個文化？',
              '在四種關係環境中，你目前在哪個層次上有最深入的門徒帶領關係？哪個層次是你需要更刻意投資的？',
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 建立你的問責關係</h4>
              <p className="text-gray-700 mb-2">根據希伯來書三章12-13節，尋找一個人與你定期碰面，彼此勸勉告誡，以致你們的心不被罪迷惑而剛硬。這個人需要：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>比你對聖經有更深的理解</li>
                <li>願意對你說真話，即使讓你不舒服</li>
                <li>能夠為你的秘密保密</li>
                <li>定期面對面（不只是文字通訊）</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 在你最親近的圈子中練習坦承</h4>
              <p className="text-gray-700">這週，選擇在你最信任的一個人面前，分享一件你通常不會說出口的掙扎或失敗。觀察這種坦承如何影響你們的關係和你自己的心理。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 繪製你的四層關係圖</h4>
              <p className="text-gray-700">畫出你目前在四種關係環境中各自有哪些人：（1）2-3個最親密的門徒帶領關係；（2）你帶領的小組（10-12人）；（3）你的社交圈（最多120人）；（4）你公開接觸的人群。評估哪個層次最薄弱，制定一個加強的計畫。</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="font-semibold text-green-700 mb-2">🙏 禱告詞</p>
              <p className="text-gray-700 italic">「主耶穌，求你幫助我不再戴著面具，而是以真實的、有缺點的方式跟從你。謝謝你接納我本來的樣子，同時又呼召我向更好的方向成長。求你在我身邊放一個可以彼此坦誠的朋友，並求你使用我的軟弱，成為鼓勵其他人也敢坦承自己需要幫助的力量。阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
