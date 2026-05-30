import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Search, HelpCircle, Check } from 'lucide-react';

export default function Book18Ch3() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    exploration: true,
    questions: true,
    practice: true
  });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-600 to-rose-700 bg-clip-text text-transparent">第三章</h1>
        <h2 className="text-xl font-semibold text-gray-700">新約中的撒但</h2>
        <p className="text-sm text-gray-500 mt-2">第一部分：認識敵人</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">撒但在新約中的名稱</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                新約比舊約更多地論及撒但。撒但在新約中以多種名稱出現，每個名稱都揭示他的某一特性。最常見的兩個稱呼是「魔鬼」（diabolos，意為「中傷者」或「誹謗者」）與「撒但」（Satan，意為「仇敵」或「控告者」）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「魔鬼」（diabolos）在新約中出現約六十次，是希臘文舊約（七十士譯本）中翻譯希伯來文「撒但」的用詞，字面意思是「拋過去」，引申為誹謗、中傷、製造分裂。「撒但」在新約中出現約三十四次，強調他作為對抗者的本質。
              </p>
              <p className="text-gray-700 leading-relaxed">
                除這兩個主要名稱外，新約還以多種方式描述他的身份與工作：
              </p>
              <ul className="mt-3 space-y-2 text-gray-700 text-sm ml-4">
                <li>• <strong>控告者</strong>（啟示錄12:10）——在神面前日夜控告弟兄</li>
                <li>• <strong>仇敵</strong>（彼得前書5:8）——像吼叫的獅子</li>
                <li>• <strong>亞玻倫/阿玻倫</strong>（啟示錄9:11）——滅亡者</li>
                <li>• <strong>別西卜</strong>（馬太福音12:24）——蒼蠅王，鬼王</li>
                <li>• <strong>彼列</strong>（哥林多後書6:15）——無用者、邪惡者</li>
                <li>• <strong>大龍、古蛇</strong>（啟示錄12:9）——那引誘全世界的</li>
                <li>• <strong>這世界的神</strong>（哥林多後書4:4）——令人心眼昏蒙</li>
                <li>• <strong>空中掌權者</strong>（以弗所書2:2）——在悖逆之子中運行</li>
                <li>• <strong>這世界的王</strong>（約翰福音12:31）——被審判、被趕出</li>
                <li>• <strong>誘惑人者</strong>（馬太福音4:3）——試探耶穌</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">撒但的人格特質</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                新約清楚顯示撒但是一個有人格特質的存在，而非抽象的邪惡力量或象徵。他擁有真實的人格，包含智慧、情感與意志三個面向。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>智慧方面</strong>：撒但有強大的智識能力。他知道聖經並能引用（馬太福音4:6），他設計「詭計」（以弗所書6:11），他能偽裝成「光明的天使」（哥林多後書11:14）。他是狡猾的，不是愚蠢的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>情感方面</strong>：撒但有強烈的情感——憤怒（啟示錄12:12，知道自己時候不多），嫉妒（他仇恨神的形象），以及強烈的恨惡。他「憎恨」（约翰一书3:12中隱含）那些屬神的人。
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>意志方面</strong>：撒但有強烈的目的和意志。他「往來巡邏」（約伯記1:7，彼得前書5:8），主動尋找獵物。他的意志是堅定的惡意，永不停息地對抗神和神的百姓。正是這個事實使他如此危險——他不會因厭倦而放棄對你的攻擊。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">撒但與他的軍隊</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                新約啟示撒但並非孤軍作戰。他統帥一支龐大的靈界軍隊。以弗所書6:12說：「因我們並不是與屬血氣的爭戰，乃是與那些執政的、掌權的、管轄這幽暗世界的，以及天空屬靈氣的惡魔爭戰。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這段經文列出四種不同類別的邪靈，顯示撒但的王國有某種組織架構。這些邪靈是真實的人格存在，各有其職責和影響範圍。啟示錄描述撒但的「使者」（12:7-9），描述他們與米迦勒的天使爭戰並失敗。
              </p>
              <p className="text-gray-700 leading-relaxed">
                然而，即使是這整支邪靈大軍也在神的主權之下。以弗所書1:21說基督「遠超過一切執政的、掌權的、有能的、主治的，和一切有名可稱的」，在神面前，撒但的全部軍隊都是被管轄的，不是自主的。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">附鬼與趕鬼</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                新約記載了耶穌和使徒趕鬼的許多事例。鬼附（demon possession）是指邪靈住在人體內並控制此人的現象。福音書記載了耶穌趕出許多污靈，這些鬼能認識耶穌（馬可福音1:24），並在耶穌命令下服從（路加福音8:31-33）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                耶穌趕鬼的能力是祂彌賽亞身份的明證。馬太福音12:28說：「我若靠著神的靈趕鬼，這就是神的國臨到你們了。」趕鬼標誌著神的國度對撒但王國的侵入和征服。
              </p>
              <p className="text-gray-700 leading-relaxed">
                然而，有一個重要的區分：真正的信徒不能被鬼附（possessed），因為聖靈住在他們裡面（哥林多前書6:19）。但信徒可以被撒但「騷擾」（oppressed）或「攻擊」（afflicted）——保羅的「肉中刺」可能就是這種情況（哥林多後書12:7）。這個區分很重要，可以保護信徒免受不必要的恐懼或錯誤的屬靈診斷。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">撒但對抗基督</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                新約描述了撒但與基督之間幾個關鍵的對抗場景，每一場都顯示基督的最終得勝。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>曠野受試探</strong>（馬太福音4:1-11）：撒但三次試探耶穌——以物質需要（石頭變餅）、自我彰顯（從殿頂跳下）、世界統治（敬拜撒但）。每次耶穌都用「經上記著說」來抵擋。這顯示撒但連神的兒子也不放過，但也顯示藉著神的話，他可以被擊退。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>客西馬尼園</strong>：在客西馬尼園的爭戰中，撒但的最後一搏試圖阻止十字架的救贖工作。耶穌稱彼得「撒但」（馬太福音16:23），因彼得試圖勸耶穌不要去受死。就在逾越節前，「撒但入了猶大的心」（路加福音22:3）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>十字架的得勝</strong>：看似是撒但的勝利，十字架實際上是撒但的徹底失敗。歌羅西書2:15說基督「擄了仇敵，明顯給眾人看，就仗著十字架誇勝了他們」。約翰福音12:31說：「現在這世界受審判，這世界的王要被趕出去。」希伯來書2:14說基督藉著死「敗壞那掌死權的，就是魔鬼」。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">撒但對抗新約教會</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                使徒行傳和書信揭示撒但如何攻擊初代教會。他使用各種策略：在亞拿尼亞和撒非喇事件中製造謊言（使徒行傳5:3），在以弗所和哥林多煽動逼迫，藉著假師傅引入異端，在信徒中挑起紛爭和驕傲。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅在哥林多前書7:5警告說，夫妻若長時間禁慾，可能給撒但「留地步」。以弗所書4:27說「不可給魔鬼留地步」。這些警告顯示，基督徒自己的罪和軟弱往往為撒但的攻擊打開了門。
              </p>
              <p className="text-gray-700 leading-relaxed">
                啟示錄中的七封書信（第2-3章）揭示撒但在不同地方的特定工作——以弗所有「撒但座位」之說（啟示錄2:13），士每拿教會面對「撒但會」的逼迫（啟示錄2:9）。然而在每種情況下，得勝的基督都承諾給忠心者獎賞。教會是在撒但的世界中被呼召爭戰的群體，但她是在基督的保護和帶領下爭戰的。
              </p>
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
          <div className="p-5 bg-white space-y-5">

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">為何新約比舊約更多論及撒但？</h4>
              <p className="text-gray-700 leading-relaxed">
                這個差異有深刻的救贖論意義。舊約是漸進啟示的早期階段，神首先要建立以色列民對祂自己的認識，撒但只在特定重要場景中出現。新約時代，隨著神的兒子降世，撒但王國與神國度的衝突進入了決定性的最後對決。基督的降臨本身就激起了撒但前所未有的活躍。正如夜最深黑是在黎明之前，撒但最猛烈的攻擊出現在基督帶來最終得勝的時刻。同時，救恩的完全啟示也要求我們更完全地理解那個我們被救贖而脫離的對手。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「這世界的神」——撒但的世界統治有多真實？</h4>
              <p className="text-gray-700 leading-relaxed">
                哥林多後書4:4稱撒但為「這世界的神」，約翰一書5:19說「全世界都臥在那惡者手下」。這是否意味撒但真正統治世界？改革宗神學的回答是：撒但在墮落的人類心中有真實但非絕對的影響力。他「令人心眼昏蒙」（哥林多後書4:4），但這是藉著人的罪性發揮作用，不是取代神的主權。神仍然是宇宙的最高統治者（詩篇103:19）。撒但的「統治」是在神許可的範圍內、在罪的領域中的統治——類似一個囚犯頭目在獄中有影響力，但仍在更高權柄之下。理解這個平衡，既不低估撒但的影響，也不誇大他的能力。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">信徒可能被鬼附嗎？歷史上的神學爭論</h4>
              <p className="text-gray-700 leading-relaxed">
                這個問題在教會歷史上有不同的回答。路德宗傳統（路德本人）傾向於認為信徒可能遭受某種形式的鬼附，因為他自己有強烈的撒但攻擊經歷。清教徒傳統（如布魯克斯、古諾爾）則傾向於區分「鬼附」與「邪靈騷擾」，認為真正的鬼附（邪靈完全控制）不可能發生在聖靈居住的信徒身上，但嚴厲的邪靈攻擊是可能的。改革宗的主流立場認為，哥林多前書6:19「你們的身子是聖靈的殿」提供了強力保護，真正的重生信徒不會被鬼附，但可能遭受嚴重的屬靈攻擊和試探。這個區分有重要的牧養意義：信徒應當警醒，但不需要對附鬼的可能性過度恐懼。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">十字架如何「擄了仇敵」？代贖論的屬靈爭戰維度</h4>
              <p className="text-gray-700 leading-relaxed">
                歌羅西書2:14-15提供了一個驚人的圖像：基督在十字架上「塗抹了在律例上所寫、控告我們、有礙於我們的字據，把它撤去，釘在十字架上。既然藉著十字架廢掉了那在仇敵中作執政的和掌權的，就明顯給眾人看，仗著十字架誇勝了他們」。撒但的控訴權建立在律法的定罪上——只要人犯了罪，撒但就有根據控告。基督的死滿足了律法的要求，撤去了撒但控訴的法律基礎。這就是為何耶穌說「這世界的王被定罪了」（約翰福音16:11）。基督的救贖不只是赦免罪債，也是打敗了那藉著罪來定罪我們的仇敵。這給了信徒面對撒但控告時最終的回應：「誰能控告神所揀選的人呢？有神稱他們為義了。」（羅馬書8:33）
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
          <div className="p-5 bg-white space-y-4">
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">1.</span>
              <p className="text-gray-700">撒但被稱為「中傷者」（diabolos）——在你的生命中，你是否曾注意到撒但如何試圖在你心中製造對神或對他人的錯誤印象？他常用哪些「謊言」來中傷神的性情或其他信徒？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">本章說撒但有真實的人格：智慧、情感、意志。認識到撒但是一個有智慧的「人格敵人」而非抽象的邪惡，如何改變你對屬靈爭戰的態度和方式？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">耶穌在曠野每次都用「經上記著說」回應撒但的試探。你目前對聖經的熟悉程度，是否足以在被試探時「即時」使用神的話？這個現實對你的讀經習慣有什麼提示？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">十字架是撒但的徹底失敗。當你感到被撒但的控告壓垮時（「你不夠好」、「你的罪太大」），你如何將視線轉向十字架的得勝？這個轉向對你來說容易嗎？有什麼阻礙？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">以弗所書4:27說「不可給魔鬼留地步」——回想你的生命，哪些習慣、關係、或心態模式可能在「給撒但開門」？你願意面對並處理這些「地步」嗎？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">撒但的大軍（以弗所書6:12）聽起來令人生畏。但以弗所書1:21說基督「遠超過」一切執政掌權的。這個對比如何幫助你在面對看似強大的屬靈對抗時保持信心？</p>
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
          <div className="p-5 bg-white space-y-5">

            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 研讀耶穌受試探的記載</h4>
              <p className="text-gray-700 mb-2">閱讀馬太福音4:1-11，仔細分析撒但的每一次試探和耶穌的每一次回應。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>識別撒但試探的三個模式：物質需要、自我彰顯、世界的榮耀</li>
                <li>注意耶穌引用的三段經文（申命記8:3；6:16；6:13），思想這些經文的上下文</li>
                <li>問自己：撒但今天是否用類似的方式試探我？</li>
                <li>記下兩三個你最容易被試探的領域，為這些領域預備合適的「經上記著說」</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 撒但名稱默想</h4>
              <p className="text-gray-700 mb-2">選擇撒但的三個名稱，每天默想一個，思想它如何幫助你認識他的策略。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li><strong>「中傷者」</strong>——今天他在試圖誹謗誰？神？你自己？其他信徒？</li>
                <li><strong>「誘惑人者」</strong>——他正在用什麼誘惑你，使你偏離對基督的專注？</li>
                <li><strong>「這世界的神」</strong>——今天這世界的哪些價值觀正在無聲地塑造你的思想？</li>
                <li>每次默想後，用一個肯定的聖經真理來對抗這個認識</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">✝️ 以十字架對抗控告</h4>
              <p className="text-gray-700 mb-2">學習面對撒但控告的實踐方法——當你感到被定罪、被壓制時：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>先承認那個控告所涉及的真實罪（如果有的話），向神認罪悔改</li>
                <li>然後宣告羅馬書8:1：「如今，那些在基督耶穌裡的，就不定罪了」</li>
                <li>默想歌羅西書2:14-15，宣告基督已「撤去」了控告的字據</li>
                <li>以感恩代替定罪感，感謝基督已成就的救贖</li>
                <li>記錄幾次你用這個方法的經歷，觀察它如何改變你的屬靈狀態</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🛡️ 閱讀啟示錄七封書信</h4>
              <p className="text-gray-700 mb-2">閱讀啟示錄2-3章的七封書信，觀察撒但如何在各個教會工作，以及基督如何呼召信徒得勝。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>找出七封書信中提到撒但工作的地方</li>
                <li>注意得勝者的應許——每封書信的「得勝的，我必……」</li>
                <li>問自己：這七間教會的問題（失去起初的愛、懼怕逼迫、妥協、允許假先知、名存實亡、溫不冷不熱）哪個最切合你今天的屬靈狀況？</li>
                <li>寫下你向基督的回應禱告</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-4 mt-2">
              <h4 className="font-semibold text-green-800 mb-2">🙏 禱告詞</h4>
              <p className="text-gray-700 leading-relaxed italic text-sm">
                「主耶穌，感謝祢在十字架上徹底擊敗了撒但——那中傷者、誘惑人者、控告者。當他試圖誹謗祢的名，試圖蒙蔽我的眼睛看不見祢的恩典，我靠著祢的名拒絕他的謊言。主啊，求祢幫助我認識敵人的詭計，使我不被愚弄，也不過度懼怕。在一切攻擊中，讓我緊緊抓住十字架的得勝：我是在基督裡被赦免、被稱義的，沒有任何控告能在祢面前站立。奉耶穌得勝的名，阿們。」
              </p>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
