import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HeartHandshake, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book41Ch24() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-800 to-cyan-900 bg-clip-text text-transparent">第三部 3-8</h1>
        <h2 className="text-xl font-semibold text-gray-700">福音為「名字／親屬關係／血統」的動力所形塑？</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">早已存在的動力，一個尚待探索的層面</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者的答案是肯定的：聖經中有許多內容，結合了「名字/親屬關係/血統」的動力與耶穌基督的福音。作者指出，這個動力其實早已貫穿前面幾章的討論：在「臉面觀念」一章，探討了基督的贖罪如何「保存神的面子」，耶穌禱告「父啊，願你榮耀你的名！」（約十二28）正是明證；在「兩種榮耀來源」一章，探討了贖罪和信徒獲得作神兒女的榮耀（約一12；約壹三1）之間的關聯，信徒成為神家庭的「親屬團體」；在後面探討「潔淨」的一章，將探索透過基督的血贖罪（來九11-12），信徒如何從罪中得潔淨。本章要探索的，是救贖如何成為傳福音的另一個層面——全球福音的表達方式，與人與人之間自古以來的衝突、流血問題，息息相關。
              </p>
              <p className="text-gray-700 leading-relaxed">
                保羅在以弗所書中，總結了十字架如何化解猶太人和外邦人之間長達兩千年的衝突與分裂：「你們從前遠離神的人，如今卻在基督耶穌裏，靠著他的血，已經得親近了。因他使我們和睦，將兩下合而為一，拆毀了中間隔斷的牆……既在十字架上滅了冤仇，便藉這十字架使兩下歸為一體，與神和好了」（弗二13-16）。作者指出：耶穌基督的血與十字架的力量足以改變世界，因為透過基督的血與十字架，家庭、血統、族群、國家之間，種種根源於榮耀的暴力，會被神無限的愛與憐憫所消弭——這就是「藉這十字架使兩下歸為一體」，福音為身處衝突當中的人帶來和好的恩典。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">薩威族的「和平之子」：跨部落和好的真實見證</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者引述唐．理查生（Don Richardson）的經典著作《和平之子》——記錄他在印尼新幾內亞薩威族（一九五○年代仍有食人風俗的部落）的宣教經歷。薩威族有一個古老的習俗：部落之間為求和平，會彼此交換自己的孩子作為「和平之子」，象徵停戰的誓約。理查生借用這個文化習俗，向薩威人這樣介紹福音：「你們的祖先為了和平，一再犧牲自己的孩子……不知道Myao Kodon（薩威族語，意為至高神）早就把最棒的『和平之子』——祂自己的兒子，給了世人。你們所獻的孩子，能力根本不夠、不足以維持永遠的和平；所以，這些孩子即使犧牲了，你們還是一再陷入戰爭……有了祂，就有永遠的和平！從現在開始，薩威族的母親們可以安心，把自己的孩子摟在懷裡——上帝已經為你們獻出祂的兒子！」<sup>1</sup><span style={cite}>（Don Richardson, Peace Child.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                這個真實的宣教案例，生動示範了以弗所書二章13-16節如何在真實的部落衝突處境中發揮果效：在世界的國度中，衝突戰爭頻傳的部落、種族和民族之間，血與榮耀是仇恨和種族滅絕的催化劑；相對地，基督的血和榮耀卻是彼此接納的催化劑，甚至能使各族、各民同來歡慶，「造成一個新人……歸為一體」，成為神永遠的家人！作者也提醒讀者回顧第二部提及的「榮耀/羞辱結合，產生暴力」圖表——榮耀之愛、挑戰反擊、資源有限這幾種動力交織，正是暴力衍生的根源；而本章探討的內容，正是要說明：透過基督的救贖，這些根深柢固的暴力循環，能為人與人之間帶來真實的和平。
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
                '「名字/親屬關係/血統」這項動力，其實早已隱含在前面幾章討論的臉面概念、兩種榮耀來源、以及即將探討的潔淨主題中，本章專門聚焦於：基督的血如何化解人類自古以來因血統、族群而生的衝突與流血。',
                '以弗所書二章13-16節是本章核心經文：基督的血「拆毀了中間隔斷的牆」，把猶太人和外邦人這兩個長期對立的群體，「造成一個新人」——這是理解福音如何處理族群衝突的關鍵經文。',
                '唐．理查生在薩威族的宣教見證，是把「血統/親屬/名字」動力應用於實際傳福音的經典範例：借用當地「和平之子」的部落習俗，讓聽眾直覺地理解「神獻出自己兒子帶來永遠和平」的福音核心。',
                '在世界的國度中，血統與榮耀往往是暴力、世仇、種族滅絕的催化劑；但基督的寶血與榮耀，恰恰相反地成為接納、和解、跨族群合一的催化劑——這是全書反覆強調的核心翻轉。',
                '本章提醒讀者：面對至今仍深陷部落、種族、國家衝突的地區，教會需要誠實反思，自己所傳遞的信息，究竟更多助長了復仇與對立的氣焰，還是真正見證了十字架帶來和解與和平的大能。',
                '福音處理族群衝突的方式，不是要求人先放下自己的族群身分認同，而是邀請不同群體「藉這十字架歸為一體」——在基督裡找到一個超越、卻不否定各自文化身分的更大合一。',
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
              <h4 className="font-semibold text-gray-800 mb-2">理查生借用薩威族「和平之子」的部落習俗來傳福音，這種宣教方法對其他文化處境的宣教士有何啟發與限制？</h4>
              <p className="text-gray-700 leading-relaxed">
                理查生的方法之所以奏效，是因為他花了大量時間深入理解薩威族的文化邏輯，找到一個真正能與福音核心真理「無縫接軌」的文化橋樑，而不是隨意套用一個表面相似的習俗。這提醒宣教工作者：尋找文化橋樑需要謹慎的神學判斷與長期的文化浸潤，並非每個文化習俗都能像「和平之子」一樣，如此精確地對應福音真理；草率或表面化的類比，反而可能扭曲或稀釋福音信息。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「藉這十字架使兩下歸為一體」是否意味著信徒應該完全放下自己的族群、文化身分認同？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者的論述並非要求抹除文化差異，而是強調在基督裡，不同族群之間「隔斷的牆」被拆毀——猶太人不需要變成外邦人、外邦人也不需要變成猶太人，而是雙方都被「造成一個新人」，在保有各自文化身分的同時，找到一個超越族群對立的更高合一。這與全書第二部強調「神看重不同文化的多元性、在天堂中以某種方式持續著」的觀點是一致的：合一不等於同化。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">對於今日仍深陷世仇、種族衝突的地區（如中東、非洲部分區域），教會可以如何具體活出「十字架帶來和解」的信息，而非流於口號？</h4>
              <p className="text-gray-700 leading-relaxed">
                理查生的案例提醒我們，福音帶來的和解，往往需要具體、看得見的行動配合，而非僅止於抽象的宣講——例如促成敵對族群基督徒之間實際的接觸、共同崇拜、彼此服事的機會，讓「合而為一」成為可被觀察到的現實見證，而不只是神學教義。教會若能在衝突地區具體示範跨族群的接納與合作，其說服力往往遠超過單純的言語宣告。
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
              '面對人與人之間幾乎無止盡的榮耀競爭和流血衝突，你相信耶穌基督的福音真的是解決之道嗎？為什麼？',
              '讀完薩威族「和平之子」的故事後，你能否想到自己文化中，某個可以類比福音核心真理的習俗或故事？',
              '你的教會或群體，在跨族群、跨文化的合一與和解上，做到怎樣的程度？',
              '當今世界上，哪些民族和國家正處在無止息的暴力衝突中？他們目前從「基督教世界」接收到的信息，是助長復仇，還是帶來和解？',
              '「拆毀了中間隔斷的牆」對你而言，是否有具體的個人意義——例如你與某個群體、某個人之間存在的隔閡？',
              '你可以做些什麼，為建立更和平、和解的教會文化盡一份心力？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 精讀以弗所書二章11-22節</h4>
              <p className="text-gray-700 mb-2">
                標記出經文中「隔斷的牆」「冤仇」「一個新人」「一體」等詞彙，並默想這段經文如何具體回應你所知道的某個真實族群衝突處境。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🕊️ 為一個仍在衝突中的地區代禱</h4>
              <p className="text-gray-700 mb-2">
                選一個至今仍深陷種族或部落衝突的地區，本週具體為當地能透過基督的十字架經歷真實和解代禱，並查找是否有可以實際支持的和解事工。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，感謝祢用自己的寶血，拆毀了人與人之間因血統、族群而生的隔斷之牆。求祢光照我心中是否也存留著對某個群體或個人的隔閡與敵意，並幫助我成為祢和解恩典的見證人，把『藉十字架歸為一體』的好消息，傳給仍活在衝突與世仇中的人。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
