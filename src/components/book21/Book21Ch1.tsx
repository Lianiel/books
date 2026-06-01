import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book21Ch1() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    exploration: true,
    questions: true,
    practice: true,
  });
  const toggle = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">第一章</h1>
        <h2 className="text-xl font-semibold text-gray-700">聖父、聖子、聖靈——使徒信經</h2>
        <p className="text-gray-500 text-sm mt-1">從「我信神」到「永生」，17個主題</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">

            <div>
              <h3 className="font-bold text-purple-700 mb-2">1. 我信神——信仰的本質</h3>
              <p className="text-gray-700 leading-relaxed">「我信神」這句話，不只是知識上的認同，而是希臘文 pistis——信靠與委身。真正的信仰是把自己整個人都交托給神，不只是頭腦上相信祂存在。巴刻指出：懷疑不代表沒有信心，只要你仍繼續把自己委身於神，懷疑可以與信仰並存。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">2. 三位一體的神</h3>
              <p className="text-gray-700 leading-relaxed">聖經啟示我們所信的神是三位一體：聖父是創造主和救贖主；聖子耶穌是神的獨生子，道成肉身的救主（先知、祭司、君王三重職分）；聖靈是重生之靈，住在信徒心中。三位格、同一本體，這是基督信仰與其他宗教的根本區別。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">3. 全能的父——神的主權與護理</h3>
              <p className="text-gray-700 leading-relaxed">神是全能的父，這意味著：祂藉著在基督裡的救贖，收納我們成為祂的兒女；祂的全能不排除人的自由意志；苦難和惡的存在不否定神的主權，因「萬事都互相效力，叫愛神的人得益處」（羅馬書8:28）。這個盼望讓信徒面對苦難時仍能站立。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">4. 創造與道成肉身</h3>
              <p className="text-gray-700 leading-relaxed">神是「創造天地的主」，創世記1-2章介紹的是造物主，而非創造方法。耶穌基督是「神獨生之子」，迦克墩信條（451年）確立：祂是完全的神，又是完全的人，兩性合一。童貞女生子確保了耶穌的無罪性，成為代替我們的完全救主。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">5. 受苦、死亡與復活</h3>
              <p className="text-gray-700 leading-relaxed">耶穌「在本丟彼拉多手下受難」是歷史事實。十字架的意義是：代替贖罪（propitiation）、替代刑罰（penal substitution）、贖回釋放（redemption）。「降在陰間」指祂進入死亡的領域，征服死亡；「第三日從死人中復活」是有史可查的歷史事件，奠定了基督徒信仰的基礎。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">6. 升天、再來與教會</h3>
              <p className="text-gray-700 leading-relaxed">耶穌「升了天」，坐在父神右邊，現在為信徒代求。「祂必再來」是基督徒的確定盼望，也是警醒生活的動力。「聖而公之教會」是由真信徒組成的基督身體，跨越時間和種族。「我信聖徒相通」意味著所有信徒在基督裡共享一切屬靈福分。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">7. 赦免、復活與永生</h3>
              <p className="text-gray-700 leading-relaxed">「罪得赦免」是神對悔改、信靠基督之人白白的恩典。「身體復活」確認人格的完整性——靈魂和身體都將得救。「永生」不只是量的延伸（無限長），更是質的飛躍——在基督裡與神同在，享受祂無盡的榮耀和愛。</p>
            </div>

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
              <h4 className="font-semibold text-gray-800 mb-2">信仰與懷疑的關係</h4>
              <p className="text-gray-700 leading-relaxed">許多人以為懷疑與信仰是對立的，但巴刻指出：真正的信仰（pistis）是持續的委身行動，不等同於永遠沒有疑問。馬丁路德說：「你的神在哪裡，你的心在哪裡。」信心的關鍵是：即使有疑問，你是否仍繼續把自己委身於神？懷疑可以成為信仰深化的入口，而非出口。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">三位一體神學的歷史意義</h4>
              <p className="text-gray-700 leading-relaxed">三位一體不是人發明的哲學概念，而是聖經啟示的必要結論。早期教會在第四世紀的尼西亞大公會議（325年）明確確立了這個教義，對抗否認基督神性的亞流異端。這個教義保護了兩個關鍵真理：神的本質唯一性，以及基督徒得救的確實性——唯有真神才能救贖人類。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">苦難與神的主權——「萬事互相效力」的真實意義</h4>
              <p className="text-gray-700 leading-relaxed">羅馬書8:28的「萬事互相效力」不是說每件事本身是好的，而是神有能力把一切——包括苦難、失敗、甚至罪的後果——都轉化為信徒的益處和祂自己的榮耀。這不是廉價的安慰，而是建立在復活的基礎上：如果神能從最大的惡（十字架）帶出最大的善（救贖），祂就能在我們的苦難中同工。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">身體復活的神學意義</h4>
              <p className="text-gray-700 leading-relaxed">基督教的「身體復活」與希臘哲學的「靈魂不死」根本不同。前者肯定了物質世界和人的身體的尊貴；後者貶低身體為靈魂的監獄。復活的身體不是靈體，而是真實、有物質性的，但已被榮耀化——就像耶穌復活後的身體，可以被觸摸，也可以穿牆而過。這意味著新創造的物質性，神的救贖計劃是更新而非廢棄受造世界。</p>
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
          <div className="p-5 bg-white space-y-3">
            {[
              '你對「信仰」的理解是什麼？你認為懷疑與信心可以並存嗎？你自己有過這樣的掙扎嗎？',
              '三位一體的教義說明神是「愛的共同體」——父、子、靈之間永恆的愛。這對你理解「神是愛」有什麼新的啟示？',
              '面對生命中的苦難，你如何理解「萬事互相效力」？有沒有哪一件你以前認為是壞事的，後來發現神有更深的旨意？',
              '耶穌的十字架對你個人意味著什麼？「代替」的概念（祂代替你受刑）讓你有什麼感受？',
              '「身體復活」比「靈魂上天堂」更完整地描述了基督徒的盼望。這個理解如何改變你對今生和今世的態度？',
              '使徒信經中哪個部分對你最有意義？哪個部分你覺得最難理解或相信？',
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
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 背誦使徒信經並默想其意義</h4>
              <p className="text-gray-700 mb-2">每天早上背誦使徒信經，但不只是機械地念，而是逐句停下來問：「這對我今天的生活意味著什麼？」例如：「我信全能的父」——今天有什麼事讓我覺得失控，我如何把它交托給這位全能的神？</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 每週閱讀一個主題的經文研讀</h4>
              <p className="text-gray-700 mb-2">本章每個主題都配有聖經研讀，選一個你感興趣或有疑問的主題，認真閱讀相關經文並寫下你的觀察。例如：關於復活的主題，可以讀哥林多前書15章。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 寫下你的「信仰故事」</h4>
              <p className="text-gray-700 mb-2">用幾段話寫下：你是如何開始相信的？你的信仰在哪些關鍵時刻被加深或被挑戰？把你的「委身之旅」具體記錄下來，這能幫助你更清楚地看到神在你生命中的工作。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 面對一個你的信仰疑問</h4>
              <p className="text-gray-700 mb-2">誠實地列出你對使徒信經中最有疑問的一個命題，然後：查找一本護教學書籍（如C.S.路易斯的《返璞歸真》）、和牧師或導師交談，或加入查經小組，認真面對這個疑問，而不是假裝它不存在。</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 mt-2">
              <p className="text-green-800 font-medium mb-1">🕊️ 禱告詞</p>
              <p className="text-green-700 italic leading-relaxed">「天父，謝謝祢藉著使徒信經，給我一個清晰的信仰框架。我承認我有疑問和軟弱，但我選擇把自己委身於祢。幫助我不只是頭腦認同，而是從心深處相信：祢是我的神，耶穌是我的救主，聖靈是我的保惠師。在今天的生活中，讓這個信仰成為我真實的力量。奉耶穌基督的名求，阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
