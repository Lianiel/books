import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Search, HelpCircle, Check } from 'lucide-react';

export default function Book22Ch7() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">第七章</h1>
        <h2 className="text-xl font-semibold text-gray-700">耶穌基督</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">一、耶穌基督與基督教信仰</h3>
              <p className="text-gray-700 leading-relaxed">
                基督教信仰的核心是耶穌基督這個歷史人物。認識耶穌可以從四個角度：
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 mt-2">
                <li><span className="font-medium">上帝的角度</span>：耶穌是「上帝的道成肉身」（約1:14），是上帝主動進入人類歷史的行動</li>
                <li><span className="font-medium">人的角度</span>：耶穌是完全的人，代表理想的人性，活出了上帝形象的完全</li>
                <li><span className="font-medium">對個人的意義</span>：耶穌是個人的救主，使每個人與上帝和好成為可能</li>
                <li><span className="font-medium">對群體的意義</span>：基督是教會的頭，把分散的人聚合為新群體</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">二、歷史的耶穌與上帝國</h3>
              <p className="text-gray-700 leading-relaxed">
                耶穌的宣教核心是「上帝國」（Kingdom of God）。上帝國不只是死後的天堂，而是上帝的統治和管治——已經在耶穌的降臨中開始（「上帝國就在你們中間」，路17:21），卻還未完全實現，等待基督再來時的完全成就（「已然」與「未然」的張力）。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                耶穌的教導和行動——醫病、趕鬼、與罪人同席、宣揚貧窮人有福——都是上帝國進入歷史的具體表現。十字架是上帝國最深刻的矛盾：上帝的王，卻以受苦和死亡來征服罪和死亡。復活則是上帝對十字架的肯定，是上帝國最終勝利的頭期款。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">三、基督論的核心：真神真人</h3>
              <p className="text-gray-700 leading-relaxed">
                教會傳統確立了基督的本質：祂是完全的神，也是完全的人（chalcedon 信條，451年）。這兩個「完全」都不能減損。若基督不是完全的神，祂就沒有能力拯救我們；若基督不是完全的人，祂就沒有資格代替我們。「耶穌」是祂的人名（意思是「上帝拯救」），「基督」是祂的職分（彌賽亞，受膏者）。
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
              <h4 className="font-semibold text-gray-800 mb-2">「歷史的耶穌」研究：危機與機遇</h4>
              <p className="text-gray-700 leading-relaxed">十九世紀以來，新約學者開始系統性地研究「歷史的耶穌」——試圖從福音書中剝離神話成分，找出「真實的」歷史人物。這個研究浪潮帶來了挑戰，也帶來了豐富。挑戰是：若歷史研究的耶穌與教會宣告的基督有差距，信仰要站在哪裡？機遇是：對耶穌的歷史研究使我們更深地了解祂的第一世紀猶太背景，幫助我們更準確地詮釋祂的教導。改革宗傳統強調：信仰的基礎不是歷史批判的重建，而是聖靈見證的聖經。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">十字架神學：「愚拙」的智慧</h4>
              <p className="text-gray-700 leading-relaxed">保羅說十字架對猶太人是「絆腳石」，對外邦人是「愚拙」（林前1:23）。在強調成功和勝利的文化中，一個被釘死的救主確實是弔詭的。但保羅接著說：「上帝的愚拙總比人智慧，上帝的軟弱總比人強壯」（林前1:25）。十字架神學顛覆了人類關於權力和救贖的觀念：上帝不是用壓倒性的武力征服罪惡，而是用犧牲的愛來轉化它。路德的「十字架神學」（theologia crucis）強調：我們只能在軟弱和苦難中認識上帝，而非在榮耀和成功中。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「上帝國」的政治與社會意涵</h4>
              <p className="text-gray-700 leading-relaxed">耶穌宣告「上帝國」是一個充滿社會和政治張力的宣告。在羅馬帝國的背景下，宣告另一個「王」和另一個「國」，本身就是挑戰性的。解放神學（Liberation Theology）強調上帝國對窮人和受壓迫者的優先關懷，引用路4:18（宣告貧窮人有福音）。另一方面，強調個人救贖的傳統則認為上帝國首先是屬靈的領域。較全面的理解是：上帝國既是個人的（改變心靈），也是社群的（建立公義的關係），也是宇宙性的（更新萬有）。</p>
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
              '「耶穌」對你個人意味著什麼？祂對你的意義與你剛信主時相比有何深化？',
              '如果耶穌不是完全的神，基督信仰會有何根本改變？如果祂不是完全的人呢？',
              '「上帝國」不只是死後的天堂，而是現在就在進入歷史——這個理解如何影響你今天的生活方式和選擇？',
              '十字架的「愚拙」在你所處的文化中如何表現？你在哪些情況下覺得基督信仰是「愚拙」或「軟弱」的？',
              '耶穌對貧窮人、邊緣人、病人的特別關注，對今天的基督徒有什麼呼召？',
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 一週「上帝國」生活實踐</h4>
              <p className="text-gray-700 mb-2">本週嘗試在日常生活中活出上帝國的價值觀：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>識別一個你可以為「弱勢」發聲或服務的機會</li>
                <li>在一個競爭或追求成功的場合，練習「謙卑服事」而非「爭勝」</li>
                <li>在一個關係緊張的情境中，選擇「饒恕」而非「報復」</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 四福音書中的耶穌</h4>
              <p className="text-gray-700 mb-2">選一個你不熟悉的福音書（馬太、馬可、路加、約翰），用一個月的時間慢慢讀完，每天閱讀一段，特別留意：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>耶穌與哪些人互動？祂如何對待他們？</li>
                <li>耶穌最在意的是什麼？</li>
                <li>這個福音書對我今天的生命有什麼具體的挑戰？</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-green-800 font-medium text-sm mb-2">禱告詞</p>
              <p className="text-green-700 text-sm italic leading-relaxed">
                主耶穌基督，感謝祢道成肉身，進入人類的歷史和苦難之中。感謝祢在十字架上為我承擔罪的刑罰，又從死裡復活，勝過了死亡和罪惡。求祢幫助我，不只知道關於祢的知識，更真實地認識祢、跟隨祢。讓我的生命成為上帝國的見證，從我的家庭、工作、到所接觸的每一個人。求祢統管我的生命，使我活在祢的國度中。阿們。
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
