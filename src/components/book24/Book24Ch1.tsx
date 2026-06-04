import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertCircle, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book24Ch1() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent">第一章</h1>
        <h2 className="text-xl font-semibold text-gray-700">前言與末世的警告</h2>
        <p className="text-gray-500 mt-1">到底怎麼回事！耶穌希望你知道的事情</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-blue-700 text-base mb-2">前言：這本書的由來</h3>
              <p className="text-gray-700 leading-relaxed">
                這本書是作者珂萊爾（Corinne）將她多年的靈修日誌整理而成。她在禱告默想中蒙主賜下信息，
                記錄了耶穌就末世時代向她傳達的教導與警告。起初，她在一個致力於靈修教導的網站上分享
                這些日誌，幫助人們學習如何禱告、如何在主心裡居住以及如何親近主。後來，隨著末世教導
                的重要性日益彰顯，她決定將這些信息整理成書，讓更多人能夠預備自己。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                書中呈現的信息以對話形式記錄：作者的提問與反思用一般字體，而主的話語則以粗體呈現。
                讀者可以看到這段親密的師生關係，以及耶穌如何一步一步引導珂萊爾進入末世真理的認識。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-blue-700 text-base mb-2">第一部分：到底怎麼回事！</h3>
              <p className="text-gray-700 leading-relaxed">
                世界正在發生什麼事？許多人感到困惑、不安，卻不知道這些混亂背後有一個清晰的屬靈解釋。
                根據書中所述，這個世界已經進入了末世的最後階段。人類歷史正走向一個前所未有的大轉折，
                而大多數人對此毫無預備。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                書中描述了一系列末世徵兆：全球性的道德敗壞、環境災難、政治腐敗、以及即將公開出現的
                所謂「外星人」（實際上是墮落天使/魔鬼）。這些事件都按照聖經啟示錄的預言依序發展，
                告訴信徒末世的腳步聲已近在眼前。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主在書中說：「這是一回事，即一件事的兩個組成部分。很多事情會一層一層地展開，
                不過這將是地球上發生的最後一件大事，同時也是最具有毀滅性的事件。親愛的，
                我知道，這些事不好理解。」這句話揭示了末世事件的複雜性和嚴重性。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-blue-700 text-base mb-2">第二部分：耶穌希望你知道的事情</h3>
              <p className="text-gray-700 leading-relaxed">
                主耶穌透過本書傳達的核心信息，是祂對每一個靈魂的深切愛護。祂希望每個人都明白：
                即將發生的事情雖然令人恐懼，但祂早已為信靠祂的人預備了道路和保護。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主希望信徒知道幾件重要的事：第一，大災難是真實且不可避免的，因為啟示錄的預言必須實現；
                第二，那些預備好了的人將得到超自然的供應和保護；第三，現在是最後的機會，
                每個靈魂都必須作出決定——跟隨主，還是跟隨撒旦。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主說：「但希望永存！我給你的這些教導，就是要把人們從極度的絕望中拯救出來。
                他們對我很重要。將來他們會成為寶重的器皿。不要低估了我做事的動機。
                親愛的，我知道，我在做什麼。」這是充滿慈愛的宣言——即使面對末世的黑暗，
                祂的目的始終是拯救和盼望。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-blue-700 text-base mb-2">末世中的信徒：預備好的新婦</h3>
              <p className="text-gray-700 leading-relaxed">
                書中多次提到「新婦」這個意象——那些在末世中仍然忠心跟隨主的信徒，被稱為基督的新婦。
                主說：「很多人不再生氣，因為他們已經做好了跟時我赴死的準備。他們會羨慕已經被提的人。
                當然不是因為想逃避苦難，而是因為他們心中燃燒著對我的夢想。但是他們會堅持忍耐到底，
                走完攤在前面的路程。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                這些在末世中留下的信徒並非被遺棄，而是被神特別揀選留下來，完成特殊的使命：
                在最後的時刻向世人見證神的存在和大能，以及引導更多迷失的靈魂轉向祂。
                他們的生命將成為神在末世最有力的見證。
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
            <ul className="space-y-2">
              {[
                '本書是作者珂萊爾多年靈修日誌的整理，記錄了主耶穌關於末世的直接教導。',
                '世界正進入末世最後階段，各種預兆（道德敗壞、環境災難、「外星人」出現）都在應驗預言。',
                '大災難不可避免，但神為信靠祂的人預備了超自然的供應與保護。',
                '留在地上的信徒被稱為「新婦」，他們是神特別揀選來在末世完成使命的人。',
                '現在是靈魂做最終決定的時刻——跟隨主，還是隨從這個世界。',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-gray-700">{point}</p>
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
              <h4 className="font-semibold text-gray-800 mb-2">啟示錄預言與當代事件的關聯</h4>
              <p className="text-gray-700 leading-relaxed">
                聖經啟示錄記錄了末世的各種徵兆：戰爭、饑荒、瘟疫、地震、以及帶有七印的大災難。
                本書所描述的末世圖景與啟示錄多處呼應，包括大淫婦（代表腐敗的世界系統）、
                獸印（先進技術與身份識別系統）、以及彌賽亞再來前的大動盪。
                許多神學家認為，理解啟示錄需要兼顧字面詮釋和屬靈詮釋，本書提供了一個當代性的視角。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">預言性靈修日誌的傳統</h4>
              <p className="text-gray-700 leading-relaxed">
                在基督教傳統中，有許多信徒記錄了他們所聲稱接受到的神啟示或異象，
                如中世紀的希爾德加德·馮·賓根（Hildegard von Bingen）、近代的道森·川（Dawson Trotman）等人。
                本書延續了這種「預言性靈修」的傳統，作者並非聲稱自己的話語等同聖經，
                而是鼓勵讀者以聖經為最終標準來驗證所有教導。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「新婦」意象的神學意涵</h4>
              <p className="text-gray-700 leading-relaxed">
                「新婦」在聖經中是基督徒群體的重要隱喻（啟示錄19:7-8; 21:2）。
                本書頻繁使用這個意象，強調信徒與基督的親密關係，以及在末世中保持忠心的重要性。
                新婦的核心品格是謙遜、順服、以及對新郎（基督）全然的愛與信靠。
                這種關係不僅是情感上的，更是實際生命選擇的體現。
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
              '當你看到世界各地的動盪和衝突，你的第一反應是什麼？恐懼、冷漠、還是某種程度上的靈性警醒？',
              '如果末世真的如本書所描述的即將到來，你認為自己目前在靈命上的預備如何？',
              '本書描述「被留下來的人」是神特別揀選的，這個觀念對你有何衝擊？你如何看待苦難中的神聖目的？',
              '主說「現在是最後的機會」——你在生活中有哪些事情一直在拖延，需要做出靈性上的決定？',
              '書中提到許多人被「食慾所吞噬」，只顧積累財富而不預備靈魂。你如何在物質生活和屬靈生命之間找到平衡？',
              '「新婦」的比喻對你有何個人意義？你的信仰生活在多大程度上反映了這種親密、委身的關係？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 靈修日誌習慣</h4>
              <p className="text-gray-700 mb-2">效法作者，建立每日記錄與主對話的習慣。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>每天留出安靜時間，向主開口提出你心中的疑問</li>
                <li>閱讀聖經時，留意任何讓你心中有感應的經文</li>
                <li>將這些感受記錄在日誌中，並日後回顧驗證</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 末世意識的培養</h4>
              <p className="text-gray-700 mb-2">以屬靈眼光看待當代事件，培養清醒的末世意識。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>每週選擇一個當代新聞事件，在禱告中思考其屬靈意涵</li>
                <li>閱讀啟示錄中的相關章節，與所觀察到的現象做對照</li>
                <li>不陷入恐懼，而是以「這一切都在神的掌控中」的信心回應</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 靈命預備清單</h4>
              <p className="text-gray-700 mb-2">評估自己目前的靈命狀態，確認必要的預備。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>我是否已確認自己的得救，並有持續更新的信仰生命？</li>
                <li>我與神的關係是否足夠親密，能在危機中聽到祂的聲音？</li>
                <li>我是否有屬靈同行者，可以在困難時互相扶持？</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-2">
              <h4 className="font-semibold text-green-700 mb-2">🙏 本章禱告</h4>
              <p className="text-gray-700 italic leading-relaxed">
                「主耶穌，感謝你在這末世的時代仍然愛我、教導我。求你幫助我不陷入恐懼，
                而是以清醒和信心面對這個世界正在發生的一切。讓我成為你末世中的新婦，
                一個預備好了的靈魂，隨時等候你的呼召。阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
