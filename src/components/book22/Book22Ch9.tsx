import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Compass, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book22Ch9() {
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
          <div className="p-5 bg-white space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">一、盼望的優先性與能動性</h3>
              <p className="text-gray-700 leading-relaxed">
                希伯來書11:1的定義是對盼望最精簡的描述：「信就是所望之事的實底，是未見之事的確據。」盼望在聖經中不是被動的等待，而是主動塑造現在的力量。林鴻信引用一個深刻的觀察：傳統的因果觀認為「過去決定現在」——我的過去（家庭背景、教育、創傷）決定了我現在是誰；但基督教的盼望觀提出了另一種時間觀：「未來的盼望塑造現在」——我盼望成為什麼樣的人，今天就朝著那個方向生活和選擇。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                這種「盼望塑造現在」的力量，在歷史上有許多見證。農夫種樹是因為盼望後代能乘涼——他不會在有生之年看到大樹，但盼望的現實使他今天就行動。清教徒移民新大陸，是因為盼望建立一個更接近上帝國的社會。美國黑人在奴役和苦難中透過黑人靈歌和末世盼望維持尊嚴。台灣在歷史傷痛中需要這種「活潑的盼望」——既不否認過去的苦難，又不被苦難困住，在上帝國的盼望中繼續前行。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">二、基督教的死亡觀：死人復活</h3>
              <p className="text-gray-700 leading-relaxed">
                許多基督徒（甚至教牧）持有一種隱性的希臘式靈魂不死論：人死後，靈魂離開身體「上天堂」，身體腐朽無關緊要。但聖經的死亡觀與此根本不同。聖經視人為身體與靈魂的整合體，死亡是整個人的暫時停止——路德甚至用「如睡了」來形容死亡的狀態。舊約的「陰間」（Sheol）是遠離上帝生命之源的黑暗之地，死亡在聖經中是一個嚴肅的敵人（「死是末了所要廢去的仇敵」，林前15:26），而非靈魂的解放。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                基督的復活改變了一切。保羅宣告基督是「死人復活的初熟果子」（林前15:20）——祂的復活不只是個人的神蹟，而是對所有信徒將來復活的保證和預示。「身體的復活」不是舊身體的簡單修復，而是全新的生命形式。保羅用種子與植物的比喻說明：種下的是必死的、軟弱的、屬血氣的，復活的卻是不朽的、強壯的、屬靈的（林前15:42-44）。這個盼望意味著：基督徒不是期待「靈魂永遠漂浮在天上」，而是期待在最終的新天新地中，以新的身體繼續在上帝的同在中生活。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">三、苦難中的活潑盼望</h3>
              <p className="text-gray-700 leading-relaxed">
                「活潑的盼望」（彼前1:3，living hope）這個詞的力量，在苦難的處境中最能彰顯。林鴻信特別引用馬丁·路德·金恩博士（Martin Luther King Jr.）的〈我有一個夢〉演講作為苦難中活潑盼望的最佳見證。金恩博士不是在安全舒適的環境中做夢，而是在長期的種族歧視、暴力威脅和持續的苦難中，仍然宣告一個根植於聖經（以賽亞書40:4-5）的終末期盼。他的盼望不是逃避現實，而是在現實中積極抗爭的動力。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                黑人靈歌《沒有人知道我的苦惱》把苦難與「榮耀哈利路亞」奇妙地交織在一起——苦難不被否認，但也不是最後的話。這種在苦難中保持盼望的能力，正是「活潑的盼望」的真義：不是否認苦難的真實，而是在苦難中確信上帝的公義必然實現、祂的應許必然成就。羅馬書14:7-8宣告：「無論活著死去，都是主的人。」這是基督徒盼望的底線——在任何境況中，我們都在主的手中，這是不能被奪去的確信。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">四、盼望的根基：跟隨耶穌基督</h3>
              <p className="text-gray-700 leading-relaxed">
                基督徒的盼望不是對特定末日日期的預測，也不是對烏托邦社會的幻想，而是根植於耶穌基督的歷史事件——祂的道成肉身、受死、復活，以及祂所應許的再來。這三個「基督事件」（啟示、復活、再臨）構成了歷史的中心點，也是盼望的根基：上帝已經在基督裡行動了（過去），上帝現在透過聖靈繼續工作（現在），上帝將在基督再來時完全成就祂的應許（未來）。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                這種盼望的實際意義，是在今天就開始活出盼望所描繪的生命形式。「前人種樹，後人乘涼」的精神，是基督徒盼望最美的比喻之一：我們可能不會看到我們的努力在今生結出完全的果子，但我們相信後代將在我們今天種下的種子所長成的樹下乘涼。在種族和解、環境保護、教育、醫療、社會公義等議題上，基督徒的盼望不是等待上帝從天降下神蹟解決問題，而是在盼望的激勵下，今天就積極地參與上帝在世界中的更新工作。
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
          <div className="p-5 bg-white space-y-3">
            {[
              '基督教的時間觀顛覆了傳統因果論：不是「過去決定現在」，而是「未來的盼望塑造現在」——我盼望成為什麼樣的人，今天就朝那個方向生活和選擇。',
              '聖經的死亡觀是「死人復活」而非「靈魂不死」：死亡是整個人的停止（非靈魂的解放），基督復活是「初熟果子」，保證信徒將以全新身體形式（非靈魂漂浮）在新天新地中復活。',
              '「活潑的盼望」（彼前1:3）在苦難中最有力：金恩博士在種族歧視的苦難中仍宣告根植於聖經的夢想，黑人靈歌把苦難與讚美交織——盼望不否認苦難，但確信上帝的公義必然實現。',
              '「無論活著死去，都是主的人」（羅14:8）是基督徒盼望的底線：在任何境況中，我們都在主的手中，這是不能被奪去的確信，是苦難中持守的根基。',
              '盼望的實踐：「前人種樹，後人乘涼」的精神——今天就積極參與社會更新，不等待神蹟從天降臨，因為上帝的更新工作需要信徒作為祂在世界的手腳。',
            ].map((point, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-sky-600 font-bold flex-shrink-0">{i + 1}.</span>
                <p className="text-gray-700 leading-relaxed">{point}</p>
              </div>
            ))}
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
