import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book22Ch6() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">第六章</h1>
        <h2 className="text-xl font-semibold text-gray-700">三一上帝</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">誰是偶像？</h3>
              <p className="text-gray-700 leading-relaxed">
                路德說：「你所信任的，你所寄託的，就是你的上帝。」這個定義揭示了偶像的本質——偶像不一定是神像或宗教物品，可以是任何我們寄予終極信任的事物。蒂利希（Paul Tillich）進一步深化這個定義：「偶像是終極關切的扭曲——將一個有限的事物當作終極。」金錢、地位、成功、健康、甚至家庭，都可能成為偶像。偶像的識別方式是：當它被奪去時，你是否覺得生命失去意義？
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                真正的上帝與偶像的根本差別在於：真正的上帝是主宰，不受我們操控，祂按著祂的旨意行事；而偶像是我們設計來服務自己需要的工具，我們通過儀式、行為或奉獻來「管理」偶像，使它為我們工作。認識真正的三一上帝，必然要求我們放棄操控上帝的企圖，學習在祂的主權下臣服。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">三一上帝的教義</h3>
              <p className="text-gray-700 leading-relaxed">
                三一論是基督教最獨特、也最難理解的教義：上帝是三位一體——「三中有一，一中有三」。父、子、聖靈是三個位格（persons，希臘文 hypostaseis），但只有一個本質（essence，希臘文 ousia）。這不是說有三個上帝（三神論），也不是說同一個上帝以三種方式顯現（形態論），而是說上帝的存在本來就是關係性的、群體性的。三個位格在永恆中彼此相愛、相交、相互內住（perichoresis），這是上帝本質的描述。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                三一論有紮實的聖經根基，不只是教義傳統的推論。耶穌在約翰福音14-16章詳述了祂與父的關係，以及聖靈的工作；馬太28:19命令門徒「奉父子聖靈的名」為人施洗；哥林多後書13:13的「三一式祝福」（主耶穌基督的恩惠、上帝的慈愛、聖靈的感動）見證了初代教會的三一信仰。這些聖經資料促使教會在幾百年的神學討論中，逐步形成了我們今天的三一論教義。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">認識上帝：擬人法與上帝的真實</h3>
              <p className="text-gray-700 leading-relaxed">
                聖經用擬人的方式描述上帝（如「上帝的手」、「上帝的眼」、「上帝後悔了」）。這種描述方式不是說上帝真的有手或情緒，而是用人類能理解的語言類比性地描述無限上帝與人的互動。加爾文稱此為上帝的「屈尊俯就」（accommodatio）——上帝像慈愛的父母對幼兒說話一樣，用孩子能理解的語言來溝通，而不是用超越孩子理解力的方式說話。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                這個原則對讀聖經有重要意義：我們一方面需要認真對待聖經的描述（這確實是上帝向我們說的話），另一方面需要謙卑地認識到這些描述是類比性的，不能推到極端（例如因為聖經說「上帝後悔了」就認為上帝對未來一無所知）。在無限的上帝與有限的人之間，語言本身有其局限；正確的神學需要在「誠實接受聖經的話」和「謙卑承認我們的理解有限」之間保持張力。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">避免兩種扭曲的上帝觀</h3>
              <p className="text-gray-700 leading-relaxed">
                人們對上帝常有兩種典型的扭曲。第一種是「絕對強者」的上帝觀：遙遠、威嚴、冷酷的審判官，人只能在恐懼中接近祂，關係是義務性的而非親密的。這種上帝觀往往產生律法主義的信仰——努力做好才能得到上帝的接納，稍有失敗就充滿罪咎。第二種是「有求必應者」的上帝觀：上帝像自動販賣機，投入祈禱、奉獻或行為就應當得到想要的結果，否則就懷疑上帝的存在或良善。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                真正的三一上帝既不是嚴厲的審判官，也不是服務我們需求的自動販賣機。祂是全能的創造主，也是慈愛的天父（以父子關係為比喻）；祂是公義的審判者（罪不能在祂面前通過），也是憐憫的救主（差派聖子代替我們承擔審判）。三一論宣告：上帝的本質是愛的群體——父愛子，子順服父，聖靈在這愛的關係中同在。信徒進入三一上帝的關係，就是進入這永恆的愛的群體。
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
              '偶像的本質（路德/蒂利希）：你所終極信任、寄託生命意義的就是你的上帝；偶像是將有限的事物當作終極的扭曲——識別方式是：失去它是否生命失去意義？',
              '三一論的核心：父、子、聖靈是三個位格（hypostaseis）但同一本質（ousia）——不是三個上帝（三神論），也不是同一上帝的三種面貌（形態論），而是關係性的、群體性的上帝存在。',
              '三一論有聖經根基：約翰福音14-16章（父、子、靈的關係）、太28:19（奉父子聖靈的名）、林後13:13（三一式祝福）——不只是推論，而是初代教會的實際信仰。',
              '加爾文「屈尊俯就」原則：上帝用人類能理解的語言（擬人法）向我們說話，我們需認真對待聖經的描述，同時謙卑地承認這些描述是類比性的，不可推到極端。',
              '避免兩種扭曲：「嚴厲審判官」（產生律法主義）和「有求必應機」（產生消費主義信仰）——真正的三一上帝是全能的創造主、慈愛的天父、公義的審判者，也是憐憫的救主。',
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
              <h4 className="font-semibold text-gray-800 mb-2">三一論的歷史發展：尼西亞信經的意義</h4>
              <p className="text-gray-700 leading-relaxed">三一論不是一開始就明確的教義，而是教會在幾百年中面對不同異端挑戰而逐漸澄清的。主要的爭論包括：阿里烏派（Arianism）主張基督是被創造的，不是與父同質的；薩伯利烏派（Sabellianism）主張父子靈只是同一上帝的三種顯現方式。325年的尼西亞大公會議確立了正統三一論：子與父「同質」（homoousios）。這個教義的意義在於：若子不是真神，祂就不能真正地救贖我們；若子不是真人，祂就不能真正代替我們。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「關係性的上帝」對人際關係的啟示</h4>
              <p className="text-gray-700 leading-relaxed">三一論揭示上帝的本質是關係性的——父、子、靈在永恆中彼此相愛、相交。神學家莫特曼（Moltmann）特別發展了這個洞見：上帝不是孤立的個體，而是愛的群體（perichoresis，循環相交）。這對人際關係有深刻的意義：人類作為上帝形象被造，也是為關係而存在的。孤立不是人的正常狀態；真實的群體生命，反映了三一上帝的本質。教會作為被呼召相愛的群體，正是三一論在歷史中的見證。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">加爾文的「屈尊俯就」（Accommodation）神學</h4>
              <p className="text-gray-700 leading-relaxed">加爾文「屈尊俯就」的概念解決了一個神學難題：無限的上帝如何向有限的人說話？加爾文的答案是：上帝像慈愛的父母對小孩說話一樣，用孩子能理解的語言來表達。聖經中的擬人描述不是上帝的本質，而是上帝為了讓我們能理解而調適自己的表達方式。這個洞見幫助我們：（1）認真對待聖經的描述（這是上帝對我們說的話）；（2）謙卑地認識到我們對上帝的認識是有限的，不能把聖經的類比性描述推到極端。</p>
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
              '你生命中是否有「偶像」——你所信任和倚靠的，比倚靠上帝更多的事物？你如何識別它們？',
              '三一論對你來說是難以理解的教義，還是你個人信仰的一部分？「三中有一，一中有三」如何影響你的禱告生活？',
              '你的上帝觀更靠近「絕對強者」（嚴厲審判）還是「有求必應」（服務我需求）？這兩種偏差如何在你身上表現？',
              '上帝是「關係性的」——這個洞見如何改變你對人際關係的看法？',
              '聖經用擬人語言描述上帝（如「上帝的手」），你如何在「認真對待聖經的描述」和「不把類比推到極端」之間取得平衡？',
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 識別生命中的偶像</h4>
              <p className="text-gray-700 mb-2">根據路德的定義（你信任的就是你的上帝），問自己以下問題：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>當我焦慮時，我最先轉向什麼（人、物、習慣）？</li>
                <li>我花最多時間和精力在什麼上面？</li>
                <li>如果失去什麼，我會覺得生命失去意義？</li>
              </ul>
              <p className="text-gray-600 text-sm mt-2">誠實地回答這些問題，可以幫助你識別隱藏的偶像，然後帶到上帝面前。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 三一禱告的練習</h4>
              <p className="text-gray-700 mb-2">嘗試以三一論的意識禱告：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>向父禱告：感謝創造、感謝供應，尋求祂的旨意</li>
                <li>透過子禱告：承認自己的不配，但藉著基督的功勞進入父的面前</li>
                <li>在靈裡禱告：邀請聖靈幫助你禱告，特別在你不知道如何禱告時</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-green-800 font-medium text-sm mb-2">禱告詞</p>
              <p className="text-green-700 text-sm italic leading-relaxed">
                三一上帝——慈愛的天父、救贖的聖子、同在的聖靈——我俯伏在祢面前。我承認我對祢的認識是有限和扭曲的。有時我把祢當作嚴厲的審判官而恐懼；有時我把祢當作服務我的工具而失望。求祢讓我認識真實的祢：全能卻又慈愛，公義卻又憐憫，超越卻又臨近。願我對三一上帝的認識不只停留在頭腦，而是進入生命和禱告。奉父、子、聖靈的名，阿們。
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
