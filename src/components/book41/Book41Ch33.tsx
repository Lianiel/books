import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ClipboardList, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book41Ch33() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    exploration: true,
    questions: true,
    practice: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  const stats = [
    { label: '總計故事數', value: '48 處', desc: '福音書中提及耶穌和不潔淨/羞辱狀況的記載總數。' },
    { label: '重大不潔淨', value: '28 個故事', desc: '涉及摩西五經中所有適用於猶太人的不潔淨條例。' },
    { label: '次要不潔淨', value: '15 個故事', desc: '針對利未人祭司的特別規範——身體畸形者不能進聖殿，以免「褻瀆庇護所」（利廿一23）。' },
    { label: '教導性質故事', value: '2 個故事', desc: '關於不潔淨的教導本身，如「甚麼會玷汙人」（太十五10-20；可七14-23），以星號另列，不計入前兩類。' },
    { label: '與男性有關', value: '34 則故事', desc: '性別分類統計，說明男女在不潔淨規範上經歷不同。' },
    { label: '與女性有關', value: '15 則故事', desc: '女性另有分娩、月經等特別潔淨條例，因而與男性經歷不同。' },
    { label: '涉及觸摸', value: '28 個故事', desc: '耶穌觸摸不潔的人、或被不潔的人觸摸——耶穌自己從未因此變得不潔淨，反而使人蒙醫治、得潔淨。' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-800 to-cyan-900 bg-clip-text text-transparent">附錄三</h1>
        <h2 className="text-xl font-semibold text-gray-700">「耶穌生平」涉及不潔／羞辱的故事</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <ClipboardList className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">一份細膩的統計整理</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                附錄三整理了福音書中，耶穌生平涉及不潔淨與羞辱處境的所有記載，以圖表方式呈現，並附上四項統計說明的判準：「出現次數」是指福音書中故事或記載出現的次數；「男性或女性」是關於男性和/或女性的故事，發生次數有所不同，因為女性有特別的潔淨條例，加上分娩、月經等情況，與男性不同；「觸摸」計算耶穌被不潔的人觸摸、或接觸不潔淨的人的次數，因為不潔通常是透過接觸而產生的（利未記中，接觸或觸摸這類詞彙出現了二十七次，都是呈現潔淨與不潔淨的對比情況）；「重大的」是指根據摩西五經，所有適用於猶太人的不潔淨條例；「次要的」則是針對利未人祭司的特別規範——利未記二十一章16到23節記載，若祭司有身體畸形，就不能進入聖殿，因為會「褻瀆我的庇護所」（23節），患有疾病或畸形的猶太人也因此知道，自己不如祭司「潔淨」，榮耀地位也相對較低。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">統計數字一覽</h3>
              <div className="grid gap-3">
                {stats.map((s, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-teal-50/50 rounded-lg border border-teal-100">
                    <div>
                      <p className="font-semibold text-gray-800">{s.label}</p>
                      <p className="text-gray-600 text-sm leading-relaxed mt-1">{s.desc}</p>
                    </div>
                    <span className="text-teal-700 font-bold text-lg whitespace-nowrap ml-4">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">總結：蒙羞的基督</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者特別說明計算方式的細節：耶穌造訪長大痲瘋的西門家中（太廿六6-13；可十四3-9），這個故事中有男有女，因此男、女出現次數各計一次；而「甚麼會玷汙人」的教導故事（太十五10-20；可七14-23）性別中立，因此未列入性別統計。作者總結：這二十八個涉及觸摸的故事顯示，耶穌自己並沒有因觸摸就變得不潔淨，相反地，耶穌能醫治，使原先不潔淨的人身變為潔淨，耶穌使他們蒙醫治、得完全——這正是第二部2-9章（潔淨）反覆強調的核心：耶穌「改寫了潔淨概念圖」。
              </p>
              <p className="text-gray-700 leading-relaxed">
                最後，作者提出一個發人深省的觀察：在這張整理耶穌生平不潔/羞辱事件的圖表中，耶穌被釘十字架、承受羞辱，只是福音書中眾多相關事件中的「一個」，並沒有被刻意凸顯成唯一的重點。基督為世人贖罪，忍受奇恥大辱，祂透過釘十字架、復活，勝過汙穢、羞辱，這救贖之大工，值得進一步廣泛探討——這個統計視角，具體地印證了全書的核心論點：耶穌一生與不潔、羞辱處境的互動，是貫穿祂整個公開傳道生涯（而不僅止於十字架事件本身）的持續主題。
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
                '福音書中共有48處記載，涉及耶穌與不潔淨/羞辱狀況的互動，這個數字遠超過一般讀者印象中「耶穌只在少數幾個著名神蹟中處理不潔淨議題」的直覺認知。',
                '48處記載中，28個涉及「重大不潔淨」（摩西五經規範），15個涉及「次要不潔淨」（利未祭司規範），另有2個是關於不潔淨本身的教導，分類細緻地反映了猶太潔淨體系的層次。',
                '性別統計顯示34則與男性相關、15則與女性相關，這個差異部分反映了女性因分娩、月經等生理狀況，在猶太潔淨體系中承受比男性更頻繁的不潔淨規範與相應的社會污名。',
                '28個涉及「觸摸」的故事，是全書第二部2-9章核心論點最集中的統計佐證：耶穌一貫地觸摸不潔之人卻不被玷汙，反而使對方得潔淨——這種模式在耶穌公開傳道生涯中反覆出現，並非單一事件。',
                '作者的結論意味深長：十字架的羞辱只是耶穌一生處理不潔/羞辱處境「眾多事件中的一個」，這個統計視角提醒讀者，理解基督的救贖工作，不能只聚焦於十字架這一個時間點，而應看見祂整個公開傳道生涯，都是持續向不潔、蒙羞之人彰顯醫治大能的過程。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「十字架只是眾多事件中的一個」，這個統計角度會不會削弱十字架在基督教信仰中的核心地位？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者的用意並非要降低十字架的重要性——十字架事件在神學意義上，仍然是耶穌生平的巔峰與救贖工作的核心。這個統計角度真正要指出的是：十字架所彰顯的「耶穌親身承擔羞辱、使人得潔淨」的模式，並非孤立的、突發的單一事件，而是祂一生行事風格的延續與極致展現。理解這一點，能幫助讀者更完整地把「十字架神學」與「耶穌公開傳道生涯」連結起來，而非把兩者割裂成互不相關的兩個階段。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">女性在潔淨規範中承受比男性更頻繁的污名，這對今日教會思考性別與牧養的議題有何提醒？</h4>
              <p className="text-gray-700 leading-relaxed">
                這個統計細節提醒我們，耶穌對血漏婦人（可五21-34）等女性的醫治與接納，在當時的文化脈絡中具有格外深刻的意義——祂主動觸及、醫治、尊榮那些因生理狀況而承受更頻繁污名化的女性群體。這對今日教會思考如何牧養、尊榮女性信徒（尤其是在某些文化中仍對女性身體帶有污名化眼光的處境），提供了具體的聖經榜樣：耶穌從不迴避、也不歧視這些處境，而是主動靠近、醫治、恢復她們的尊嚴。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">這份統計資料，可以如何具體應用在向醫療、社福領域的專業人士傳福音時的切入點？</h4>
              <p className="text-gray-700 leading-relaxed">
                對於在醫療、公共衛生、社會工作等領域服事、經常接觸疾病、身心障礙、污名化處境的專業人士而言，這份統計資料提供了一個貼近他們專業經驗的切入角度：耶穌一生有近五十次記載，具體地處理「不潔淨」「被污名化」的處境，祂不是迴避這些議題的宗教人物，而是持續、主動地介入、醫治、恢復尊嚴的實踐者。這個角度可能比抽象的教義討論，更容易引起這類專業人士的共鳴與興趣。
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
              '「福音書中有48處記載耶穌與不潔淨/羞辱處境互動」——這個數字，是否超乎你原先的想像？',
              '你能否從記憶中，回想並列舉出三個福音書中耶穌觸摸不潔之人、卻使對方得潔淨的具體故事？',
              '女性在潔淨規範中承受更多污名，這對你理解耶穌接觸、醫治血漏婦人的意義，帶來什麼新的體會？',
              '「十字架是耶穌一生持續模式的極致展現，而非孤立事件」——這個角度，如何幫助你更完整地理解基督的救贖工作？',
              '如果你認識從事醫療、社工或身心障礙服務的朋友，你會如何運用這份統計資料，向他們介紹耶穌的生平與福音？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 用一週時間搜尋福音書中的不潔/羞辱故事</h4>
              <p className="text-gray-700 mb-2">
                挑選一卷福音書，仔細搜尋、列出你能找到的耶穌與不潔淨/羞辱處境互動的故事，看看能找到多少個，並與附錄三的統計數字對照。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💙 主動關懷一位承受污名化處境的人</h4>
              <p className="text-gray-700 mb-2">
                想一位你認識、因疾病、身心狀況或社會處境而承受某種污名的人，效法耶穌的樣式，本週主動關懷、尊榮這位朋友。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，感謝祢一生持續不斷地靠近、觸摸、醫治那些被視為不潔、蒙羞的人。求祢幫助我效法祢的樣式，不迴避、不歧視身邊承受污名化處境的人，而是像祢一樣，主動靠近、帶去醫治與尊嚴的恢復。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
