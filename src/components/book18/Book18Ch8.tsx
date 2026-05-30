import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Target, Search, HelpCircle, Check } from 'lucide-react';

export default function Book18Ch8() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-600 to-rose-700 bg-clip-text text-transparent">第八章</h1>
        <h2 className="text-xl font-semibold text-gray-700">主動發起進攻</h2>
        <p className="text-sm text-gray-500 mt-2">第二部分：認識撒但的弱點</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">從防禦到進攻</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                上一章我們研究了以弗所書6:14-17所描述的五件防禦性裝備——腰帶、胸甲、鞋、盾牌和頭盔。這些裝備使信徒能夠「站立得住」，抵擋撒但的攻擊。但屬靈爭戰不只是防守；神也呼召信徒主動發起進攻。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                以弗所書6:17b-18描述兩件進攻性武器：「聖靈的寶劍，就是神的道；靠著聖靈，隨時多方禱告祈求。」這兩件武器——神的話語和禱告——不只是保護我們不受攻擊，更使我們能夠主動出擊，在撒但的陣地上奪取勝利。
              </p>
              <p className="text-gray-700 leading-relaxed">
                清教徒神學家深刻理解這個區分。古諾爾說：「一個只防守的士兵不能贏得戰爭；必須進攻才能取得勝利。」在屬靈意義上，只是努力不犯罪（防守）還不夠；我們必須積極地操練禱告、研讀神的話、傳福音——這些是主動向撒但的陣地發起進攻的行動。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">第六件：聖靈的寶劍——神的道（以弗所書6:17b）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「聖靈的寶劍，就是神的道」——這是以弗所書6章唯一既可用於防守又可用於進攻的武器。羅馬士兵的短劍（machaira）是近身戰鬥的武器，有兩面刃，鋒利而致命。希伯來書4:12說神的話「是活潑的，是有功效的，比一切兩刃的劍更快，甚至魂與靈，骨節與骨髓，都能刺入、剖開，連心中的思念和主意都能辨別出來」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                耶穌在曠野受試探時使用這件武器的方式是最完美的示範：每一次，撒但試探，耶穌就回應「經上記著說……」（馬太福音4:4,7,10）。祂不是靠理性爭辯擊退撒但，而是靠神話語的直接宣告。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神的道作為攻擊性武器，有幾個面向的應用：
              </p>
              <ul className="space-y-3 mt-2">
                <li className="border-l-4 border-purple-300 pl-4">
                  <strong className="text-gray-800">面對試探時</strong>：用與試探方向相關的聖經經文直接回應。這需要我們事先熟悉聖經——你不能在戰場上現找劍。
                </li>
                <li className="border-l-4 border-purple-300 pl-4">
                  <strong className="text-gray-800">面對謊言時</strong>：用真理宣告打破謊言的捆綁。這包括宣告神的應許，即使感受說相反。
                </li>
                <li className="border-l-4 border-purple-300 pl-4">
                  <strong className="text-gray-800">傳福音時</strong>：「神的道」傳出去就是奪取撒但陣地的進攻——每一個信主的靈魂都是從撒但的國度搶奪出來的。以賽亞書55:11說神的話「必不徒然返回，卻要成就我所喜悅的，在我發它去成就的事上必然亨通」。
                </li>
                <li className="border-l-4 border-purple-300 pl-4">
                  <strong className="text-gray-800">個人靈修時</strong>：每天的讀經和默想，是持續磨利這把劍的過程——荒廢讀經的信徒是拿著鈍劍上戰場的士兵。
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">第七件：禱告（以弗所書6:18）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「靠著聖靈，隨時多方禱告祈求，並要在此警醒不倦，為眾聖徒祈求。」禱告是以弗所書6章屬靈軍裝的第七件武器，也是最後一件——但可以說是最重要的一件，因為它是穿戴和使用所有其他裝備的能力來源。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                古諾爾說：「禱告是屬靈爭戰中最強大的武器。」雅各書5:16說「義人祈禱所發的力量，是大有功效的」。不禱告的信徒，就像一名穿著完整盔甲卻沒有進入戰場的士兵——所有的裝備都有了，卻沒有實際投入爭戰的行動。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅在這節經文中描述禱告的四個面向：
              </p>

              <div className="space-y-4 mt-2">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-1">一、「靠著聖靈」禱告</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    真正的禱告不是自己的努力，而是聖靈的工作。羅馬書8:26說「聖靈用說不出來的嘆息替我們禱告」，幫助我們的軟弱。「靠著聖靈」意味著禱告是在聖靈的引導和能力中進行的，而不是自說自話。這樣的禱告是與神真實的溝通，不是宗教性的例行公事。
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-1">二、「隨時」禱告</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    不是「偶爾」或「只在困難時」，而是「隨時」（at all times）。帖撒羅尼迦前書5:17說「不住地禱告」。這不意味著我們一直在進行正式的禱告，而是一種持續的與神同行的意識——隨時將心意向神傾吐，在一天中隨時短禱，在每個決定前仰望神。這種「隨時禱告」是對撒但最有效的防禦，因為它使我們持續活在神的同在中，不給撒但的謊言「落地」的機會。
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-1">三、「多方」禱告</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    「多方」（all kinds of prayers）包括各種形式的禱告：讚美、感謝、認罪、祈求、代禱等。屬靈成熟的禱告不只是「求神給我……」，而是廣泛的與神的溝通。特別值得強調的是代禱——為他人禱告是一種進攻性的屬靈爭戰行動，因為我們的代禱在天上有真實的屬靈效果（啟示錄8:3-5描述聖徒的禱告呈在神面前）。
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-1">四、「為眾聖徒祈求」</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    以弗所書6:18特別提到要為「眾聖徒」代禱。屬靈爭戰是整個教會的事，不只是個人的事。當我們為其他信徒代禱，我們是在為整個軍隊的力量禱告。保羅在接下來的v.19自己請求讀者為他代禱，顯示即使是使徒也需要肢體的代禱支持。
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">「警醒不倦」：禱告的挑戰</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅說「在此警醒不倦」——「警醒」和「不倦」這兩個詞揭示了禱告的最大挑戰：注意力的分散（需要警醒）和持之以恆的疲乏（需要不倦）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                清教徒托馬斯·古德溫（Thomas Goodwin）說：「撒但最積極阻礙的，就是信徒的禱告生活——因為他知道，一個真正禱告的信徒是他最危險的對手。」撒但透過各種方式攻擊我們的禱告：引入分心的思想、製造緊急的事務使禱告被推遲、使禱告感覺枯燥和機械性、讓人覺得「我很忙，沒有時間禱告」。
              </p>
              <p className="text-gray-700 leading-relaxed">
                對抗這些攻擊，需要有意識的禱告紀律。馬丁·路德說：「我有太多的事要做，如果我不先花三個小時禱告，就根本無法完成。」這不是禱告的公式，而是一種態度：禱告不是百忙中的一個任務，而是使一切其他任務都能完成的動力來源。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">進攻性爭戰的整體圖像</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                結合第七章的防禦性裝備和本章的進攻性武器，我們得到屬靈爭戰的完整圖像：信徒同時是被保護的（穿著全副軍裝）和主動進攻的（使用神的道和禱告）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                馬太福音16:18說教會要「攻破陰間的門」——這不是防守的語言，而是進攻的語言。陰間的門是防守的，教會是進攻的。我們不是被圍困在城堡中等待救援，而是一支主動出征的軍隊，奉大使命去「使萬民作我的門徒」（馬太福音28:19）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                每一次的福音傳揚，每一次真誠的代禱，每一次用神的道對抗謊言——這些都是進攻撒但陣地的行動。在每一個信主的靈魂中，神國度的疆界擴大了，撒但的領地縮小了。這就是屬靈爭戰最終的意義和目的。
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
              <h4 className="font-semibold text-gray-800 mb-2">聖經記憶：磨利屬靈寶劍的實踐</h4>
              <p className="text-gray-700 leading-relaxed">
                耶穌在曠野能夠用聖經回應撒但，是因為祂深知聖經——不只是片段的引用，而是理解每段話的上下文和神學意義。今天許多基督徒面對試探時，腦中找不到合適的聖經話語，因為他們從未系統地記憶聖經。聖經記憶（Scripture memorization）曾經是教會教育的核心，今天這個紀律在許多教會中已幾乎消失。恢復這個紀律的方法：選擇特定主題的關鍵經文（如關於試探、關於身份認同、關於恐懼、關於神的應許），每週背誦一節，並持續複習。研究顯示，通過間隔重複（spaced repetition）的方法記憶的聖經，更容易在需要的時候被提取。應用程式（如Scripture Typer）可以幫助這個過程。目標不是炫耀，而是使神的話語真正「住在你們心裡」（歌羅西書3:16），成為隨時可用的屬靈武器。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">清教徒的禱告神學：在神面前謙卑與大膽的結合</h4>
              <p className="text-gray-700 leading-relaxed">
                清教徒神學家對禱告有深刻的神學思考。他們強調禱告的兩個看似矛盾的面向：謙卑和大膽。謙卑，因為我們是罪人，來到聖潔神的面前；大膽，因為我們是在基督裡被接納的兒女，有「坦然無懼進到施恩寶座前」的特權（希伯來書4:16）。清教徒約翰·班揚（John Bunyan）在他的《禱告論》中說：「禱告是發自靈魂的呻吟，由聖靈攪動，向著神心中的憐憫發出。」這個定義捕捉了真正禱告的本質——不是背誦的公式，而是靈魂真實的呼喊。清教徒也強調「禱告的藝術」必須學習：研讀主禱文的結構，學習聖詩的語言，使用詩篇的語言來禱告，都是加深禱告生命的方法。他們的根本洞見是：禱告的能力不在於禱告的長度或華麗的措辭，而在於禱告者與神之間的真實關係和對神話語的信靠。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">禱告與主權：如果神已定好計劃，為何禱告仍有效？</h4>
              <p className="text-gray-700 leading-relaxed">
                這是一個改革宗神學中常被問到的問題：若神是主權的，一切都在祂的掌控中，禱告怎麼可能「改變」任何事？改革宗神學家的回答是：神的主權並不排除禱告的效力，因為神在祂的主權計劃中已將禱告定為實現某些目的的手段。就像農夫知道神賜雨，但仍然播種和澆水——神通過手段工作，但神依然是一切的根源。約翰·加爾文說：「禱告的目的不是告知神，而是藉著祈求，舉起我們的心向神，表達我們的依靠，並體驗祂的恩典。」更深的答案是：禱告是一種真實的因果關係，神確實回應禱告（雅各書5:16），同時一切都在神的主權之下。這個張力不是矛盾，而是神作為一個真實的人格神（不是機械的決定論）的表達。如果神已決定無論如何都做同樣的事，禱告就沒有意義；聖經顯示，禱告真的有差異，同時神仍然是主權的。這是屬靈而非邏輯的奧祕。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">代禱：屬靈爭戰的集體武器</h4>
              <p className="text-gray-700 leading-relaxed">
                啟示錄8:3-5有一個驚人的圖像：天使將眾聖徒的禱告（如香）呈在神的寶座前，然後「把香爐拿起來，盛滿了壇上的火，扔在地上，隨有雷轟、大聲、閃電、地震」。這個圖像顯示，地上信徒的代禱在天上有真實的屬靈影響，甚至以某種方式參與在神的歷史性行動中。使徒行傳12:1-17記載，當教會為彼得的被囚「迫切」禱告時，神差天使釋放了彼得——這是代禱在屬靈爭戰中真實效力的示範。保羅在多處請求教會為他代禱（羅馬書15:30-32，以弗所書6:19，歌羅西書4:3），顯示即使最有能力的宣教士也需要並且重視肢體的代禱。今天的宣教實踐也顯示，支持宣教士最有效的方式之一就是有規律的代禱——許多宣教士報告，他們感受到代禱的屬靈支持，並能看見代禱如何打開福音的門。
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
              <p className="text-gray-700">你目前對聖經的熟悉程度——你能在面對試探時，快速調取相關的聖經話語嗎？你的聖經記憶情況如何？這對你的屬靈爭戰有什麼具體影響？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">保羅形容禱告是「靠著聖靈」的——誠實地評估，你的禱告更多時候是靈裡的真實溝通，還是宗教性的例行公事？是什麼讓禱告有時感覺有生命，有時感覺枯燥？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">「隨時禱告」的呼召——在你每天的生活中，你是否有「隨時」的禱告習慣，還是禱告只限於特定的「禱告時間」？如何在生活的忙碌中保持禱告的心？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">「為眾聖徒祈求」——在你的禱告生活中，代禱占多少比重？你是否有規律地為特定的人（家人、朋友、宣教士、教會領袖）代禱？代禱如何改變了你對那些人的態度和關心？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">本章說屬靈爭戰是進攻性的——教會是去「攻破陰間的門」，不是被陰間的門攻破。你的信仰生活，是否有主動進攻的姿態（傳福音、代禱、服事）？還是更多是防禦性的（只求自己不犯罪、不受攻擊）？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">撒但最積極阻礙的就是禱告——你能想到在你生命中，撒但如何具體地試圖阻礙你的禱告生活（通過分心、懶惰、繁忙或對禱告的懷疑）？你如何回應這些阻礙？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">📖 開始系統性聖經記憶計劃</h4>
              <p className="text-gray-700 mb-2">選擇一個「主題式聖經記憶清單」，針對你最常受攻擊的領域背誦相關經文。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>建議從以弗所書6:10-18開始，背熟整段屬靈軍裝的描述</li>
                <li>接著選3-5個你最需要的主題（身份認同、神的應許、對付恐懼、對付誘惑等）</li>
                <li>每週背誦一節，每天複習前幾週所背的（間隔重複法）</li>
                <li>把新背的經文作為早晨禱告的一部分，反復默想</li>
                <li>嘗試在面對試探的當下，默念或宣讀相關經文</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 建立「結構性禱告」的習慣</h4>
              <p className="text-gray-700 mb-2">使用ACTS或其他框架，使你的禱告更豐富、更有深度。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li><strong>A</strong>（Adoration 敬拜）：先讚美神的性情，不求任何事</li>
                <li><strong>C</strong>（Confession 認罪）：誠實地承認今天的罪和軟弱</li>
                <li><strong>T</strong>（Thanksgiving 感謝）：感謝神具體的恩典，至少說三件事</li>
                <li><strong>S</strong>（Supplication 祈求）：為自己和他人的需要禱告</li>
                <li>嘗試這個框架一周，觀察它如何改變你的禱告質量</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 建立代禱名單</h4>
              <p className="text-gray-700 mb-2">建立一個有組織的代禱清單，每天為特定的人和事工禱告。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>分類：家人（每天）、朋友（每週某天）、教會領袖和牧師（每週）、宣教士（每月特定日）、未得之民（特定族群）</li>
                <li>為每個人記下具體的代禱事項，而不只是泛泛的「祝福他們」</li>
                <li>定期跟進禱告的回應，記錄神的答覆（增強你對禱告效力的信心）</li>
                <li>選擇一個近親或朋友，為他/她的福音需要每天代禱一個月，觀察發生什麼</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">⏰ 「屬靈爭戰」時刻表</h4>
              <p className="text-gray-700 mb-2">評估並重組你的屬靈操練時間表，確保「進攻性」的爭戰有足夠的空間。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>每天：讀經和晨禱（至少15分鐘），睡前感恩禱告</li>
                <li>每週：更長的禱告時間（30-60分鐘），代禱為教會肢體</li>
                <li>每月：禱告靜修（至少一個下午），靜默反思靈命狀況</li>
                <li>定期：參與教會的禱告聚會，在群體中爭戰</li>
                <li>問自己：我每天花多少時間在媒體上，與花在讀經禱告上的時間相比如何？</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-4 mt-2">
              <h4 className="font-semibold text-green-800 mb-2">🙏 禱告詞</h4>
              <p className="text-gray-700 leading-relaxed italic text-sm">
                「主耶穌，感謝祢給了我屬靈爭戰的武器——祢的話語和禱告。讓祢的道深深住在我心中，使我在受試探時能立刻調取祢的真理；讓我的禱告生命不是例行公事，而是真實的靈裡交通。今天，我不只要防守，也要主動進攻：用祢的話宣告真理，用禱告為家人、教會和迷失的人爭戰。讓我每天帶著一個士兵的意志：不懈怠、不退縮、因為我知道誰已得勝。奉得勝主耶穌的名，阿們。」
              </p>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
