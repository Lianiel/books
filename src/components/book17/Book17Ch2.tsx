import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Search, HelpCircle, Check } from 'lucide-react';

export default function Book17Ch2() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">第二章</h1>
        <h2 className="text-xl font-semibold text-gray-700">在十架陰影下合一</h2>
        <p className="text-sm text-gray-500 mt-1">哥林多前書 一10-31</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">一、哥林多教會的結黨問題（一10-17）</h4>
              <p className="text-gray-700 leading-relaxed">哥林多信徒分裂為「屬保羅的」、「屬亞波羅的」、「屬磯法的」、「屬基督的」四派。保羅以四個反問回應：「基督是分開的嗎？保羅為你們釘十字架嗎？你們是奉保羅的名受洗嗎？」這四問揭示了分黨的根本錯誤——把人放在基督的位置上，以人代替基督作為信仰的核心。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">二、十字架與智慧（一18-25）</h4>
              <p className="text-gray-700 leading-relaxed">十字架的道對滅亡的人是愚拙，對得救的人卻是神的大能。世人的智慧（希臘哲學的辯才與思辨）和世人的符號（猶太人的神跡要求）都無法認識神。神藉著「傳道的愚拙」拯救信徒，把世上的愚拙和軟弱，揀選來對比智慧人和剛強的人。神的愚拙比人的智慧更有智慧，神的軟弱比人的剛強更有力量。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">三、十字架與價值觀（一26-31）</h4>
              <p className="text-gray-700 leading-relaxed">保羅指出哥林多信徒大多出身卑微——不多有智慧、不多有能力、不多有尊貴。神故意揀選世上愚拙、軟弱、卑賤的事物，使有智慧有能力的人無可誇口。一切結果，都是出於神，基督成了我們的智慧、公義、聖潔、救贖。因此「誇口的，當指著主誇口」。</p>
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
              <h4 className="font-semibold text-indigo-700 mb-2">偶像化傳道人的文化根源</h4>
              <p className="text-gray-700 leading-relaxed">哥林多是希臘文化中心，希臘傳統崇尚修辭學與哲學辯論，老師與門徒形成緊密的黨派。信徒以崇拜名師的方式移植到教會，用欣賞哲學家的眼光評估傳道人。保羅揭示此舉是以人代替基督，是把群體合一的基礎換成了「人」，從而摧毀了教會的本質。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">十字架的「末世傾覆」</h4>
              <p className="text-gray-700 leading-relaxed">保羅在一章18節用的動詞是現在進行式：十字架的道「正在拯救」與「正在毀滅」。十字架不只是一個過去的歷史事件，而是一個持續顛覆人類價值觀的力量。神的救恩智慧在十字架中完全顯明，而世人所崇尚的才華、辯才、地位，在這道光照之下統統被推翻。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「在基督裡」的社會含義</h4>
              <p className="text-gray-700 leading-relaxed">保羅在一章26-29節的論述有深刻的社會含義：神揀選卑賤的人，乃是要使強大的人「歸於無有」。這不只是個人屬靈的論述，更是對羅馬帝國社會階級制度的神學批判。教會應是一個顛覆了世界地位排序的群體，在基督裡人人平等、彼此相屬。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">合一的神學基礎</h4>
              <p className="text-gray-700 leading-relaxed">保羅不是呼籲哥林多人靠意志力或管理技巧達成合一，而是把合一建立在神學真理上：只有一位為我們釘十架的基督、只有一個奉以祂為名的洗禮。合一的基礎不是人際和諧，而是共同承認基督的主權。這種合一比任何組織架構都更深刻，也更堅固。</p>
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
              <p className="text-gray-700">你是否曾因某位傳道人或神學家給你深刻影響，而在無意中把他/她的立場等同於信仰本身？這種情況如何影響你看待教會中意見不同的人？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">保羅說結黨是把人放在基督的位置上。在你的教會或小組生活中，有沒有類似「誰人派」的現象？這對群體的合一有什麼影響？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">世人的智慧強調才能、成就、地位。你是否承認，自己有時也用這種世俗的標準評估傳道人或判斷教會的「好壞」？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">「神揀選世上愚拙的來折服有智慧的」——這個真理在你的生命中有沒有具體的印證？神曾藉著什麼「愚拙」的方式讓你認識祂的大能？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">「誇口的，當指著主誇口」——在你的信仰生活和服事中，你的誇口是指向自己的恩賜成就，還是指向主的恩典？如何在日常中活出這個差異？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">十字架的道對你的人生價值觀帶來了哪些具體的改變？有沒有你仍在掙扎、尚未完全向十架真理臣服的領域？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 識別心中的「黨派」</h4>
              <p className="text-gray-700 mb-2">這週花時間安靜自省，問自己：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>我對哪位傳道人、神學家或教會領袖有特別的認同？</li>
                <li>這認同是否曾讓我對持不同立場的弟兄姊妹有輕視或疏遠？</li>
                <li>把這些發現帶到神面前，求祂幫助你回到以基督為中心的合一。</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 十字架價值觀清單</h4>
              <p className="text-gray-700 mb-2">列出3件你在生活中傾向以「世人智慧」（才能、成就、地位）來衡量的事，然後：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>思考十字架的真理如何重新詮釋這些事的價值</li>
                <li>寫下一個今週可以採取的具體改變</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 向對立者主動示好</h4>
              <p className="text-gray-700 mb-2">如果你知道教會中有人與你的意見或立場不同，本週主動：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>以禱告為他/她的屬靈生命代禱</li>
                <li>以實際行動表達關心（問候、鼓勵、一起吃飯）</li>
                <li>提醒自己：你們是奉同一位基督的名受洗的</li>
              </ul>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-sm text-green-800 font-medium mb-1">本週禱告</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">
                「主耶穌，謝謝祢為我釘十字架。求祢讓我不再以人的才幹或地位來評斷祢的教會，也不讓任何人的名字佔據只屬於祢的位置。幫助我從十架的角度看自己的軟弱，也以同樣的眼光看待弟兄姊妹。讓我的誇口永遠指向祢，而非指向自己。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
