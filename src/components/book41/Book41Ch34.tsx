import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Infinity, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book41Ch34() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    exploration: true,
    questions: true,
    practice: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  const verses = [
    { ref: '約三16', text: '神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，反得永生。' },
    { ref: '約六35', text: '我就是生命的糧。到我這裏來的，必定不餓；信我的，永遠不渴。' },
    { ref: '約六48-51', text: '我是從天上降下來生命的糧；人若吃這糧，就必永遠活著。我所要賜的糧就是我的肉，為世人之生命所賜的。' },
    { ref: '羅四16', text: '所以人得為後嗣是本乎信，因此就屬乎恩，叫應許定然歸給一切後裔——不但歸給那屬乎律法的，也歸給那效法亞伯拉罕之信的。' },
    { ref: '林前十五21-22', text: '死既是因一人而來，死人復活也是因一人而來。在亞當裏眾人都死了；照樣，在基督裏眾人也都要復活。' },
    { ref: '弗一3', text: '願頌讚歸與我們主耶穌基督的父神！他在基督裏曾賜給我們天上各樣屬靈的福氣。' },
    { ref: '腓四19', text: '我的神必照他榮耀的豐富，在基督耶穌裏，使你們一切所需用的都充足。' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-800 to-cyan-900 bg-clip-text text-transparent">附錄四</h1>
        <h2 className="text-xl font-semibold text-gray-700">從基督救贖的相關經文中發現「無限資源」的動力</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Infinity className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-amber-900 leading-relaxed text-sm">
                <span className="font-semibold">說明：</span>原書附錄四本身僅以圖表形式列出相關經文，並無額外的文字論述——因為這個主題「資源有限vs.資源無限」的完整神學論證，作者已分別在第二部2-3章與第三部3-3章詳細展開（包括耶穌餵飽五千人的神蹟、生命的糧論述、以及「在亞當裡眾人都死了，在基督裡眾人也都要復活」的集體救恩觀）。以下依據書中這兩處的論述，將相關經文整理成獨立的參考清單，方便讀者查閱、默想與引用。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">「資源無限」主題經文清單</h3>
              <div className="space-y-3">
                {verses.map((v, i) => (
                  <div key={i} className="p-4 bg-teal-50/50 rounded-lg border border-teal-100">
                    <p className="font-semibold text-teal-800 mb-1">{v.ref}</p>
                    <p className="text-gray-700 leading-relaxed">「{v.text}」</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">回顧核心論證</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                這份清單所整理的經文，共同支持全書第二部2-3章與第三部3-3章的核心論點：「資源有限」的世界觀（相信榮耀、地位、財富都是零和遊戲，你獲得、我就失去）根植於許多榮辱社會的文化直覺，卻並不符合聖經對神恩典本質的教導。耶穌餵飽五千人的神蹟中，四卷福音書一致強調「他們都吃，並且吃飽了」，且還剩下十二個籃子——這預表了在基督裡「資源無限」的屬靈真實。保羅在哥林多前書十五章的宣告，更把這個真理擴展到救恩本身的集體性：正如死亡透過一人（亞當）臨到眾人，生命也透過一人（基督）臨到眾人——這種聯合性的救恩邏輯，對習慣集體主義思維的榮辱文化群體而言，往往比個人主義的西方世俗思維更容易被接受。
              </p>
              <p className="text-gray-700 leading-relaxed">
                腓立比書四章19節「祂必照祂榮耀的豐富……使你們一切所需用的都充足」，是這個主題最精煉的總結：在基督裡，沒有「你贏我輸」的競爭焦慮，只有取之不盡的豐盛供應。這份清單可作為信徒個人默想、或牧養他人走出「資源有限」焦慮心態時，隨時查閱引用的經文資源。
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
                '這份經文清單橫跨約翰福音、羅馬書、哥林多前書、以弗所書、腓立比書，共同見證：在基督裡的供應是無限的，這是貫穿新約多卷書信的一致教導，而非單一經文的孤立說法。',
                '「生命的糧」（約六35、48-51）把耶穌餵飽五千人的物質神蹟，與祂在十字架上為世人捨命的屬靈真理連結起來，說明「資源無限」不只是比喻，更是與救恩本身直接相關的真理。',
                '哥林多前書十五章21-22節的「聯合性救恩觀」，是這份清單中神學意涵最深刻的一節——它把個人救恩置於「與亞當聯合而死、與基督聯合而活」的宇宙性框架中，超越了單純的個人契約式救恩理解。',
                '腓立比書四章19節「使你們一切所需用的都充足」，是信徒面對匱乏焦慮時最常引用、也最直接有力的應許經文，適合作為個人禱告或牧養陪伴時的核心經文。',
                '這份清單的存在本身，印證了全書「用榮辱文化動力重新發現熟悉經文的深意」這個方法論——這些經文對許多讀者而言並不陌生，但透過「資源有限vs.無限」的框架重新編排，展現出經文之間過去未被留意的內在連結。',
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
              <h4 className="font-semibold text-gray-800 mb-2">這份「資源無限」經文清單，可以如何整理成一份實用的講道或查經大綱？</h4>
              <p className="text-gray-700 leading-relaxed">
                可以依照「神蹟印證（約六35、48-51，餵飽五千人的屬靈意義）→應許宣告（腓四19、弗一3，神應許的豐盛）→神學根基（林前十五21-22、羅四16，救恩本身的無限性）」三個層次編排，讓聽眾先從具體可感的神蹟故事切入，再進到抽象的應許宣告，最後觸及最深層的神學根基，這種由具體到抽象的編排方式，特別適合對榮辱文化、口傳文化聽眾的講道設計。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「資源無限」的教導，如何避免被誤解、扭曲成「成功神學」式的物質應許？</h4>
              <p className="text-gray-700 leading-relaxed">
                這是使用這份清單時必須謹慎拿捏的界線，第三部3-3章的原文已明確提醒：「不落入成功神學福音」這種過度消費主義的試探。「資源無限」指的是神在恩典、救贖、屬靈生命上毫無保留的供應，而非應許信徒必然獲得世俗意義上的財富與物質享受。引用這些經文時，務必把重點放在「在基督裡的豐盛生命」，而非暗示信心與物質財富之間存在因果保證的關係。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">這份清單可以如何應用在牧養陷入財務壓力或人際競爭焦慮的信徒？</h4>
              <p className="text-gray-700 leading-relaxed">
                對於因財務壓力、職場競爭、或人際比較而深陷「資源有限」焦慮的信徒，這份清單提供了具體可引用的禱告與默想資源——可以陪伴他們逐一朗讀這些經文，並邀請他們誠實地說出自己內心的稀缺焦慮，再引導他們把這些焦慮，具體地帶到「神必照祂榮耀的豐富，使你們一切所需用的都充足」這個應許面前，操練信心的宣告而非壓抑焦慮的情緒。
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
              '這七處經文中，哪一處最能安慰你目前生活中感到「不夠、匱乏」的焦慮？',
              '你是否曾把「資源無限」的信心，不小心與「成功神學」的物質應許混淆？讀完本附錄後，你如何重新釐清兩者的分別？',
              '哥林多前書十五章21-22節的集體救恩觀，如何幫助你理解自己與全人類（在亞當裡、在基督裡）的連結？',
              '如果要為一位正經歷財務壓力的朋友禱告，你會選擇這七處經文中的哪一處作為禱告的起點？',
              '把這份清單與耶穌餵飽五千人的故事對照閱讀，你有什麼新的發現？',
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
              <h4 className="font-semibold text-green-700 mb-2">📇 製作一份隨身經文卡</h4>
              <p className="text-gray-700 mb-2">
                挑選這七處經文中最觸動你的兩到三處，抄寫在小卡片上隨身攜帶，在感到匱乏焦慮時拿出來默想禱告。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🤝 與人分享「資源無限」的信心</h4>
              <p className="text-gray-700 mb-2">
                找一位正經歷財務或資源壓力的朋友，用這份清單中的經文，與他一起禱告，把焦慮具體帶到神的應許面前。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，感謝祢在基督裡的豐盛毫無保留。求祢除去我心中『資源有限』的焦慮與比較，讓我真實相信祢必照祢榮耀的豐富，供應我一切所需，也使我成為祢豐盛恩典的見證與管道。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
