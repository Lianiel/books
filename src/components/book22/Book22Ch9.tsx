import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Compass, Search, HelpCircle, Check } from 'lucide-react';

export default function Book22Ch9() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">第九章</h1>
        <h2 className="text-xl font-semibold text-gray-700">活潑的盼望</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">一、盼望的優先性</h3>
              <p className="text-gray-700 leading-relaxed">
                希伯來書11:1說：「信就是所望之事的實底，是未見之事的確據。」盼望不是被動等待，而是主動的力量——人因盼望什麼，就朝什麼方向發展。農夫種樹是因為盼望後代能乘涼；清教徒移民新大陸是因為盼望建立更接近上帝國的社會。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                傳統的因果觀是「過去決定現在」，但基督教的盼望觀是「未來的盼望塑造現在」。我們今天怎麼生活，取決於我們盼望將來成為什麼樣的人。信仰本身就是一種盼望——對上帝和上帝國的盼望。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">二、信仰與盼望的歷史見證</h3>
              <p className="text-gray-700 leading-relaxed">
                歷史上有許多信仰與盼望的見證：初代教會在末日盼望中過著對主再來的期待生活；清教徒懷著上帝國的盼望，移民北美建立「新英格蘭」（雖然未完全成功，但盼望的精神值得學習）；美國非裔在奴役和苦難中，透過聖經的終末期盼維持盼望（黑人靈歌的「將來有人在樹下乘涼」）；台灣在二二八等歷史傷痛中，呼召基督徒以上帝國的盼望回應，而非以迎合或逃避來面對。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">三、死後的盼望：基督教死亡觀</h3>
              <p className="text-gray-700 leading-relaxed">
                聖經的死亡觀不是靈魂不死（希臘哲學）而是「死人復活」。舊約的「陰間」（Sheol）是死者所在之處，是遠離生命和上帝的地方；肉體和靈魂是生命共同體，人死後並非靈魂繼續活動而是「如睡了」（路德的觀點）。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                基督的復活是「死人復活的初熟果子」（林前15:20），是對信徒復活的保證。「身體的復活」不是舊身體的翻新，而是全新的生命形式（如種子與植物的關係，林前15:42-44）。基督徒的終末盼望是：死亡暫時得勝，但在主再來時，死亡被永遠勝過（林前15:55）。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">四至五、苦難中的盼望與跟隨耶穌</h3>
              <p className="text-gray-700 leading-relaxed">
                金恩博士（Martin Luther King Jr.）的〈我有一個夢〉演講，是苦難中活潑盼望的最佳見證。他不逃避苦難，卻在盼望中繼續抗爭。黑人靈歌《沒有人知道我的苦惱》把苦難與「榮耀哈利路亞」交織，表達了基督徒在苦難中的盼望。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                盼望的根基是跟隨耶穌基督：耶穌是歷史的中心（啟示、復活、再臨），基督徒的盼望必須以耶穌為中心，而非只是對特定日期的預測。羅馬書14:7-8：「無論活著死去，都是主的人。」這是基督徒盼望的底線——我們在一切境況中，都在主的手中。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 延伸探討 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('exploration')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">延伸探討</span>
          </div>
          {expanded['exploration'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['exploration'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">莫特曼的「盼望神學」</h4>
              <p className="text-gray-700 leading-relaxed">德國神學家莫特曼（Jürgen Moltmann）在1964年出版《盼望神學》（Theology of Hope），是二十世紀最重要的神學著作之一。莫特曼強調：基督信仰的本質是末世性的盼望——基督的復活是上帝對現有世界秩序的根本抗議，是對新創造的應許。這意味著基督徒不應接受現狀為理所當然，而應在盼望中積極投入社會轉化。盼望不是逃世的藉口，而是參與世界的動力。台灣基督徒的處境，正需要這種「活潑的盼望」。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「靈魂不死」與「死人復活」的根本差異</h4>
              <p className="text-gray-700 leading-relaxed">瑞士神學家庫爾曼（Oscar Cullmann）在《靈魂不死或死人復活》一書中，有力地論證了這兩個概念的根本差異。希臘哲學的靈魂不死論，把身體視為靈魂的監獄，死亡是靈魂的解放；因此死亡本身是好事，蘇格拉底可以平靜地飲鴆而死。聖經的死人復活觀則視死亡為敵人（林前15:26），死亡是不好的（遠離上帝生命之源）；但基督已勝過這個敵人，信徒將在復活中得到勝利。這個區分對我們理解基督信仰中的死亡、葬禮和對死者的態度有重要影響。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">金恩博士的盼望與台灣的歷史傷痛</h4>
              <p className="text-gray-700 leading-relaxed">金恩博士的「我有一個夢」演講，是苦難中活潑盼望的政治與屬靈宣言。他的盼望不是烏托邦式的幻想，而是根植於聖經（以賽亞書40:4-5）的終末期盼——上帝公義的最終實現。台灣二二八事件與白色恐怖的受難者及其後代，也需要這種活潑的盼望：既正視歷史的傷痛，又不被復仇或苦澀所困，而是在上帝公義必然實現的盼望中，尋求真實的和解。尼莫勒牧師（Niemöller）的故事（從潛艇軍官到天庭牧者）是另一個在苦難中活潑盼望的見證。</p>
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
              '你目前最深的盼望是什麼？這個盼望如何影響你今天的生活方式和選擇？',
              '「盼望塑造現在」——你能想到哪個具體例子，說明你的終末盼望（或缺乏盼望）如何影響了你的日常決定？',
              '你如何理解「身體的復活」？這與「靈魂不死、上天堂」的流行觀念有何不同？這個差異對你有什麼實際意義？',
              '你在苦難或困難中如何維持盼望？有沒有一個歷史人物或聖徒的故事，幫助你在苦難中持守盼望？',
              '金恩博士「我有一個夢」的盼望，是對社會不義的積極抗爭。你所在的社會有哪些不義，需要基督徒以「活潑的盼望」來回應？',
              '「無論活著死去，都是主的人」——這句話如何改變你對死亡的態度？',
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 為苦難中的人帶去盼望</h4>
              <p className="text-gray-700 mb-2">思考你周圍有哪位正在苦難或絕望中的人：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>主動探望或聯絡他/她</li>
                <li>先聆聽，不急著給答案或安慰</li>
                <li>在適當的時候，分享你自己的盼望故事</li>
                <li>一起禱告，把他/她的處境帶到上帝面前</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 寫下你的「盼望書信」</h4>
              <p className="text-gray-700 mb-2">給未來的自己（或你的子女、後代）寫一封信，說明你的基督信仰盼望：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>我盼望成為什麼樣的人（在上帝面前）？</li>
                <li>我盼望留下什麼樣的生命影響（「前人種樹」的精神）？</li>
                <li>我盼望我的教會和社會在上帝的帶領下成為什麼樣子？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">⏰ 閱讀尼莫勒牧師的故事</h4>
              <p className="text-gray-700 mb-2">尋找尼莫勒（Martin Niemöller）的傳記或文章，特別閱讀他抵抗納粹、被囚八年的經歷。思考：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>是什麼信念使他在壓力下仍堅持？</li>
                <li>他的著名詩句「首先他們來抓共產黨員……」對今天的基督徒有何警示？</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-green-800 font-medium text-sm mb-2">禱告詞</p>
              <p className="text-green-700 text-sm italic leading-relaxed">
                主啊，感謝祢賜給我活潑的盼望。這盼望不是建立在我的力量或環境的好轉上，而是建立在基督從死裡復活的歷史事實上。在我面對苦難、面對失去、面對死亡的陰影時，求祢使我記住：「無論活著死去，我都是主的人。」使這個盼望成為我生命的動力，使我成為那個在黑暗中種樹的人，相信將來必有人在樹下乘涼。願我的盼望不是逃避現實，而是在現實中更積極地活出祢國度的價值。奉主耶穌基督的名，阿們。
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
