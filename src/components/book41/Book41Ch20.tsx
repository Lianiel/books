import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book41Ch20() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    exploration: true,
    questions: true,
    practice: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-800 to-cyan-900 bg-clip-text text-transparent">第三部 3-4</h1>
        <h2 className="text-xl font-semibold text-gray-700">福音為「挑戰與反擊」所形塑？</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">「衝突－得勝」：基督救贖的核心主題之一</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者的答案是肯定的：福音與「挑戰和反擊」的動力密切相關。尼瑞稱「挑戰和反擊」為「推擠遊戲」<sup>1</sup><span style={cite}>（Neyrey, Honor and Shame in the Gospel of Matthew, 20.）</span>——有時只是無傷大雅的較量，但出現在家庭衝突、種族對立或國際互動中，往往為了榮耀訴諸暴力，造成流血。聖經以更宏觀的角度，把這種「推擠」放進黑暗國度與神國度之間的宇宙性衝突：「我們並不是與屬血氣的爭戰，乃是與那些執政的、掌權的、管轄這幽暗世界的，以及天空屬靈氣的惡魔爭戰」（弗六12）。德艾弗指出：「新約聖經中，基督的事工主要的進行方式，多半是『衝突－得勝』……新約中有許多經文，對基督勝過邪惡勢力，做了具體描述」<sup>2</sup><span style={cite}>（John Driver, Understanding the Atonement for the Mission of the Church, 71.）</span>（加四3-9；弗一19-22，二14-16；腓二9-11；西一13-14，二8-15；彼前三18-22）。使徒約翰更直言道成肉身的目的：「神的兒子顯現出來，為要除滅魔鬼的作為」（約壹三8）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                這與基督十字架的救贖工作直接相關：「神赦免了我們一切過犯，便叫我們與基督一同活過來……既將一切執政的、掌權的擄來，明顯給眾人看，就仗著十字架誇勝」（西二13-15）。貝克和格林在《十字架的醫治之路》中指出，初代教會正是透過「得勝」這個主題理解十字架的救贖工作，二世紀後期教會領袖愛任紐等人，開始在羅馬帝國壓迫的處境中，把十字架與復活理解為神和邪惡勢力之間的抗衡——「復活應證耶穌基督勝過罪惡、魔鬼和邪惡勢力」<sup>3</sup><span style={cite}>（Mark Baker and Joel Green, Recovering the Scandal of the Cross.）</span>。以人的角度看，十字架似乎帶給基督毀滅；然而，上帝之子受難乃是神所命定的（賽五三10；徒二23；弗一7-10），而且帶出全面的反擊力量，征服了罪與死亡、地獄和撒但——這正是神國度和全人類最大的敵人。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">對穆斯林世界與部落民族的特殊共鳴</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者特別指出，「衝突－得勝」的贖罪主題，對穆斯林群體格外具有意義：由於耶穌（伊薩）是可蘭經中第二位最受尊敬的先知，穆斯林相信神永遠不會允許祂被釘十字架、在眾人面前遭受可怕的羞辱；然而聖經透過基督的死亡、復活和最終升高，恰好證明了基督的尊貴與榮耀——祂的死非但不是失敗，反而是全面反擊、征服仇敵的勝利宣告。此外，榮耀競爭和榮耀驅動的暴力衝突，在穆斯林世界中司空見慣，因此聚焦於基督面對挑戰、發動反擊的福音敘事，格外容易引起共鳴。但作者也提醒，聚焦基督勝過敵人的福音論述，必須以個人悔改、罪得赦免的訴求取得平衡：「日期滿了，神的國近了。你們當悔改，信福音！」（可一15）——信徒不僅認同一位偉大征服者，更是在敬拜、仰望、委身一位善良、滿有憐憫的救主。
              </p>
              <p className="text-gray-700 leading-relaxed">
                對於守民間信仰、對靈界充滿畏懼的部落民族而言，這個主題同樣關鍵。弗萊明分析歌羅西書的處境——當地教會同時面對羅馬帝國的皇帝崇拜、希臘羅馬哲學和萬物有靈的文化，他指出：「除非我們宣告基督可以勝過黑暗權勢、能使人免於恐懼，否則……他們尋找民間慣用的解決之道——護身符、祭祀儀式、巫師通靈、神祕法術。」<sup>4</sup><span style={cite}>（Flemming, "Colossians: The Gospel and Syncretism."）</span>保羅．赫伯特在其代表作中，探討「排除靈界問題的缺陷」——許多西方受訓的宣教士對靈界問題無解，當部落人民談及對邪靈的害怕時，他們選擇否認靈的存在，而不是宣告基督的能力可以勝過他們。<sup>5</sup><span style={cite}>（Paul Hiebert, "The Flaw of the Excluded Middle."）</span>在古代聖經世界，榮耀和威權密不可分，這正是榮/辱價值觀與威權/恐懼動力的重疊之處——保羅宣告基督「向我們這信的人所顯的能力是何等浩大……遠超過一切執政的、掌權的、有能的、主治的」（弗一19-21），這樣的福音，自然能滿足思想由榮/辱、威權/恐懼所形塑之人內心深處的需要。
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
                '初代教會理解基督救贖的核心主題之一是「衝突－得勝」：十字架看似是徹底的失敗與羞辱，實則是神命定的全面反擊，征服了罪、死亡、撒但和黑暗國度這些終極敵人。',
                '對穆斯林而言，十字架的羞辱曾是他們拒絕基督受死說法的主要障礙（因可蘭經視耶穌為尊貴先知）；但「衝突-得勝」的敘事框架，恰好能把十字架重新詮釋為勝利而非失敗，可能有助化解這個神學障礙。',
                '保羅．赫伯特提出的「排除靈界問題的缺陷」提醒西方宣教士：面對部落民族真實的靈界恐懼，若選擇否認靈界的存在而非宣告基督得勝的能力，福音將顯得軟弱無力、與生活現實脫節。',
                '歌羅西書的處境（羅馬帝國崇拜、希臘哲學、萬物有靈文化並存）顯示，缺乏對抗黑暗權勢向度的福音，容易導致信徒轉而尋求護身符、巫術等民間解決之道，使福音摻雜混合主義。',
                '聚焦「基督勝過仇敵」的福音論述，必須與「個人悔改、罪得赦免」的訴求取得平衡，避免信徒只把基督當作抽象的征服者，卻忽略了祂同時是滿有憐憫、值得個人委身信靠的救主。',
                '榮耀與威權在古代（及今日許多）文化中密不可分，保羅描述基督「遠超過一切執政的、掌權的」（弗一21），正是同時回應了榮辱動力與威權恐懼動力兩種文化心理需求的福音宣告。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「衝突-得勝」的贖罪觀，與傳統西方教會熟悉的「刑罰代贖」觀，兩者是互斥還是互補的？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者並未主張用「衝突-得勝」取代「刑罰代贖」（基督替罪人承擔刑罰），而是指出初代教會同時持守多種贖罪觀的向度，只是後來西方神學逐漸窄化，過度聚焦於法庭式的刑罰代贖，而淡化了「得勝」這個同樣根植於聖經（如西二15）的向度。兩者其實互補：刑罰代贖回答「罪的公義代價如何被滿足」，衝突得勝回答「基督如何勝過轄制人的黑暗權勢」——完整的福音信息，理當同時涵蓋這兩個向度，而非二選一。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">華人民間信仰中普遍存在的「祭改」「收驚」等習俗，如何與本章「排除靈界問題的缺陷」的警告產生對話？</h4>
              <p className="text-gray-700 leading-relaxed">
                許多華人信徒即使信主多年，遇到「卡到陰」「運勢不順」等處境時，仍可能因教會從未清楚宣告「基督得勝一切黑暗權勢」，而私下求助民間解方或感到深層的不安。這提醒華人教會，不能簡單地把這類文化現象斥為「迷信」而不予理會，而應正面、清楚地用聖經教導信徒：基督的十字架與復活，已經徹底勝過一切轄制人的黑暗權勢，幫助信徒帶著確據面對這些真實的文化焦慮。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「聚焦基督勝過敵人，須與個人悔改的訴求取得平衡」，這句提醒對於容易把福音簡化成「靈力對決」的處境有何重要性？</h4>
              <p className="text-gray-700 leading-relaxed">
                若福音信息只強調「基督的能力比你原本信靠的靈更強大」，很容易讓歸信者把基督信仰理解成換一個更厲害的「靠山」，卻沒有真正經歷悔改、與基督建立委身的愛的關係，這樣的信仰根基是脆弱的，遇到試探或困難時容易動搖。這提醒傳福音者，展示基督得勝大能的同時，務必清楚邀請聽眾個人悔改、委身跟隨這位得勝的救主，而非止步於「換一個更強的保護力量」的交易式信仰。
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
              '你過去理解的十字架，比較偏向「刑罰代贖」（赦免罪疚），還是「衝突得勝」（勝過黑暗權勢）？讀完本章後，這個理解有何擴展？',
              '你是否認識或聽過對靈界、邪靈、運勢感到恐懼焦慮的朋友？你會如何用「基督已得勝一切執政掌權的」這個真理，向他們分享福音？',
              '「除非我們宣告基督可以勝過黑暗權勢，否則人們會尋找民間慣用的解決之道」——這句話，如何反思你自己教會的牧養是否足夠正視這類議題？',
              '對於認為「神不可能讓耶穌被釘十字架蒙羞」的穆斯林朋友，你會如何用「衝突-得勝」的角度，重新介紹十字架的意義？',
              '思考你今日所宣告的基督福音，有多少比例涵蓋耶穌醫治、傳道、釋放、勝過黑暗權勢的超自然事跡？',
              '「聚焦基督勝過仇敵，須與個人悔改的訴求取得平衡」——你認為自己教會的講道，這兩者是否平衡？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 精讀歌羅西書二章8-15節</h4>
              <p className="text-gray-700 mb-2">
                標記出經文中「衝突得勝」的語彙（擄來、明顯給眾人看、仗著十字架誇勝），並思考這段經文如何同時處理罪的赦免與黑暗權勢的征服。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🛡️ 練習用「得勝」角度分享福音</h4>
              <p className="text-gray-700 mb-2">
                找一個機會，用「耶穌基督已經勝過一切轄制人的黑暗權勢」這個角度，向一位對靈界或運勢感到焦慮的朋友分享福音，觀察這個切入點帶來的反應。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，感謝祢在十字架上，看似承受了終極的羞辱，實際上卻贏得了對罪、死亡和一切黑暗權勢的全面勝利。求祢幫助我，不僅認識祢是滿有憐憫的救主，也堅定相信祢是掌權得勝的君王，並幫助我把這份確據，傳給仍活在恐懼捆綁中的人。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
