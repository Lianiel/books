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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">第三章</h1>
        <h2 className="text-xl font-semibold text-gray-700">新約中的撒但</h2>
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
              <p className="text-gray-700 leading-relaxed mb-3">
                在兩約之間的若干世紀以及新約時代，關於撒但的教義有了進一步的發展。舊新約之間的作品稱撒但為「彼列」（Belial）、「莫斯提馬」（Mastema）和「薩麥爾」（Sammael）。撒但被描述為一支由邪靈組成的軍隊的頭領，他們與上帝及其天使爭戰。撒但試探信徒，攻擊他們，帶領邪靈和未重生的人抵擋上帝（《禧年書》11：5；17：16；《以諾一書》40：7）。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">1. 撒但的名稱</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                新約中提到撒但時最常用的稱呼就是「魔鬼」（diabolos）。這個詞的意思是中傷者或毀謗者，在新約中（KJV）用到了六十次，僅在四福音書中就用到了四十次。撒但是最出色的毀謗者。他在人面前毀謗上帝，正如他在夏娃面前所做的那樣；他有時在上帝面前毀謗人，比如約伯的例子；他還在人面前毀謗人。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「撒但」（Satan）這個詞在新約中（KJV）出現了三十四次，其中一半在四福音書和《使徒行傳》中，另一半在使徒書信和《啟示錄》中。新約中撒但的別名還包括：
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-4 mb-3">
                <div className="bg-red-50 rounded p-2 text-sm text-gray-700">「控告者」（啟12：10）</div>
                <div className="bg-red-50 rounded p-2 text-sm text-gray-700">「仇敵」（彼前5：8）</div>
                <div className="bg-red-50 rounded p-2 text-sm text-gray-700">「亞玻倫」（啟9：11）</div>
                <div className="bg-red-50 rounded p-2 text-sm text-gray-700">「別西蔔」（太12：24）</div>
                <div className="bg-red-50 rounded p-2 text-sm text-gray-700">「彼列」（林後6：15）</div>
                <div className="bg-red-50 rounded p-2 text-sm text-gray-700">「龍」（啟12：7）</div>
                <div className="bg-red-50 rounded p-2 text-sm text-gray-700">「這世界的神」（林後4：4）</div>
                <div className="bg-red-50 rounded p-2 text-sm text-gray-700">「空中掌權者的首領」（弗2：2）</div>
                <div className="bg-red-50 rounded p-2 text-sm text-gray-700">「這世界的王」（約12：31）</div>
                <div className="bg-red-50 rounded p-2 text-sm text-gray-700">「古蛇」（啟20：2）</div>
                <div className="bg-red-50 rounded p-2 text-sm text-gray-700">「試探人的」（太4：3）</div>
                <div className="bg-red-50 rounded p-2 text-sm text-gray-700">「吼叫的獅子」（彼前5：8）</div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                這些名稱表明撒但變化多端，大有能力！一位名叫愛德華·雷諾茲（Edward Reynolds）的清教徒這樣談到撒但：「在聖經中用三個頭銜闡明了撒但對上帝之教會的敵意：龍，表明他的惡意；古蛇，表明他的狡猾；獅子，表明他的力量。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">2. 撒但及其軍隊和臣民</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                這些名稱告訴我們，撒但並不是一種沒有位格的邪惡力量。他具有位格的所有特徵，比如智力（林後11：3），情緒（啟12：17），意志（提後2：26）。聖經中也用位格性代詞來代替撒但（太4：1-12）。撒但是個位格，他也要在道德方面向上帝交帳（太25：41）。所以新約說他是驕傲的、叛逆的、不守律法的、毀謗人的，並稱他是說謊者、欺騙者、歪曲者、模仿者。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                新約表明撒但是一群墮落天使的統治者（太25：41），是一支組織嚴密的屬靈軍隊的頭領。「執政的」、「掌權的」、「管轄這幽暗世界的」這些詞彙都表明撒但的軍隊中存在一定的等級（弗6：12）。撒但藉著這些不同等級的邪靈，像一個大有能力的將軍一樣，在整個黑暗的國度收集資訊，發出指令。
              </p>
              <p className="text-gray-700 leading-relaxed">
                撒但及其邪靈在世上那些不承認基督是主的人中間進行邪惡、殘酷的活動（可4：15；約8：44；西1：13）。從禁欲主義到放縱主義，從理智上的有神論到粗俗的交鬼占卜，撒但利用各種試探來弄瞎他們的心眼，阻止他們相信惟有信靠基督才能得到救恩，使他們一直對他忠心耿耿（林後4：4；路8：12）。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">3. 魔鬼附體</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                有時，撒但及其邪靈進入他們的追隨者裡面，完全控制他們，使他們處於「魔鬼附體」的狀態之中。《路加福音》第8章30節描述了一個名叫「群」的人，因為「附著他的鬼多」。尤其是在基督受死和復活之前，撒但及其邪靈可以向一些人的心靈和身體公然發出可怕的、大能的攻擊。上帝在一定程度上允許他們進行這樣的攻擊，以便人們可以深刻地認識到自己需要救主，而基督救贖他們的大能也會更加明確地展現出來。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                魔鬼附體可以導致瞎眼（路12：22），癱瘓（徒8：7），抽風（路9：39），抽風突然發作（可9：17，20，26），自我毀滅（可9：22），力量非凡（可5：4），人格分裂（可5：6-10），對耶穌有特別的認識（可5：7），癲狂和古怪的行為（路8：27；太17：15）。所有這一切表明，撒但及其邪靈想要給人帶來各種各樣的痛苦，既有精神上的，也有身體上的。這一切的共同之處是毀滅，因為撒但一直是毀滅者。福音書作者謹慎地把邪靈的活動和其他各樣身體性的疾病分別開來（太4：24；路4：40-41）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                因為每個信徒都有聖靈的內住，都屬於耶穌，所以信徒不會被魔鬼附體（林前6：19）。約翰印證了這一點，他說在我們裡面的耶穌比在世界上的撒但更大（約壹4：4）。然而，撒但仍然影響了彼得的思想，以至於耶穌不得不嚴厲地對彼得說：「撒但，退我後邊去吧！」（太16：23）。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">4. 撒但與基督</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                魔鬼與女人後裔之間的衝突的中心就是道成肉身這一歷史事件。耶穌基督在時候滿足的時刻降臨，這是上帝在屬靈爭戰中對撒但所採取的最重要的行動。在聖經中，耶穌談到撒但和邪靈的次數比其他任何人都多。在四十天的時間裡，撒但用肉體的情欲、眼目的情欲和今生的驕傲來攻擊耶穌，企圖使耶穌那聖潔的人性降服在他的轄制之下（太4：1-11）。撒但用獨立（4：3-4）、放縱（4：5-7）和拜偶像（4：8-10）來試探耶穌。他企圖誘惑耶穌背離天父的旨意、上帝的聖言和十字架。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在客西馬尼園，撒但動用了地獄的一切權勢。他使上帝的兒子耶穌俯伏在地，像蟲子一樣爬行，滴下血汗來，在痛苦中呼喊：「我父啊，倘若可行，求你叫這杯離開我」（太26：39）。最後，在各各他，撒但再次動用了所有邪惡的力量。耶穌在痛苦中發出的深不可測的呼喊響徹了黑暗的國度：「我的上帝，我的上帝，為什麼離棄我？」（太27：46）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                但我們知道的是：撒但在十字架上被打敗了，永遠失敗了。《希伯來書》第2章14節說：「他（基督）特要藉著死敗壞那掌死權的，就是魔鬼。」耶穌在《約翰福音》第12章31至32節中談到十字架在普世性地驅逐魔鬼方面所發揮的作用：「現在這世界受審判，這世界的王要被趕出去。我若從地上被舉起來，就要吸引萬人來歸我。」勝利屬於基督，因為他在經歷撒但發起的最嚴酷的試探中完美地順服了上帝的旨意。
              </p>
              <p className="text-gray-700 leading-relaxed">
                基督藉著他的生命、死亡、復活和升天，獨自擊敗了壓迫者的權勢。撒但喪失了對世上各民族的令人窒息的統治。在舊約時代，光明的閃電偶爾劃破黑暗。但現在，在基督裡面並藉著基督，破曉的光明已經出現。基督的永恆之光已經勝過了撒但殘存的邪惡和黑暗。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">5. 撒但與新約教會</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                然而，撒但不肯輕易承認自己的失敗。他繼續以別的方法傷害基督教會的腳跟。《使徒行傳》告訴我們，撒但誘使亞拿尼亞和撒非喇用謊言來破壞教會的平安（徒5：3）。撒但誘惑哥林多教會的成員在道德方面放縱自己（林前7：5）。撒但試探保羅，「把一根刺加在他的肉體上」，使他受苦（林後12：7），還阻擋保羅去帖撒羅尼迦的行程（帖前2：18）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                撒但逼迫示每拿的信徒（啟2：9-10），迷惑地上的列國（啟20：7-8），為了達到目的，裝作光明天使（林後11：14）。他的鬼魔引誘人離棄真道（提前4：1-3），鼓動人做不法的人，宣揚敵基督的靈（帖後2：9）。儘管撒但阻撓重重，教會仍然奮力前進。儘管有暫時性的退步，但地獄之門卻不能勝過她，因為耶穌比撒但更有能力。
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
              <h4 className="font-semibold text-gray-800 mb-2">撒但的眾多名稱揭示了什麼</h4>
              <p className="text-gray-700 leading-relaxed">
                新約中撒但有超過十個不同的名稱，每個名稱都揭示他不同的攻擊面向。「魔鬼」（毀謗者）攻擊我們的聲譽和關係；「試探人的」針對我們的軟弱；「吼叫的獅子」用恐嚇使我們癱瘓；「光明天使」用假象使我們迷惑；「這世界的神」通過文化和系統影響人心。清教徒雷諾茲的觀察精闢：龍代表惡意，古蛇代表狡猾，獅子代表力量——三者並用，是完備的攻擊組合。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">撒但有位格這一真理的神學重要性</h4>
              <p className="text-gray-700 leading-relaxed">
                堅持撒但有位格（有智力、情緒、意志），對基督徒的信仰實踐至關重要。如果撒但只是「邪惡力量」或「人類黑暗面的象徵」，那麼對抗他就只需要心理調整或道德修養。但如果他是有位格的存在，我們就需要真實的屬靈武器：上帝的話語、禱告、信心和教會的守望。這也是為何保羅說「抵擋魔鬼」而非「克服邪惡衝動」——對象的不同決定了應對策略的不同。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">曠野試探的結構與意義</h4>
              <p className="text-gray-700 leading-relaxed">
                撒但對耶穌的三次試探（太4：1-11）具有深刻的結構：第一次（石頭變麵包）試探耶穌把屬靈使命變成滿足個人需要的手段；第二次（從殿頂跳下）試探耶穌強迫上帝表現神蹟而非依靠信心；第三次（萬國的榮華）試探耶穌走不經十字架的道路。這三次試探的本質是：繞過上帝的方式達到上帝的目的。耶穌每次都以聖經回應，這是信徒最重要的屬靈爭戰模板。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">十字架：屬靈爭戰的決定性轉捩點</h4>
              <p className="text-gray-700 leading-relaxed">
                路德說「上帝離棄上帝，誰能測透呢？」這句話道出了十字架的奧秘。撒但最大的「勝利」——殺死上帝的兒子——恰恰成為他最終的失敗。因為基督的死是代贖性的：他取走了撒但用來控告我們的一切依據（羅8：33-34），並且藉著死敗壞了掌死權的魔鬼（來2：14）。十字架不僅是道德榜樣，更是宇宙性的屬靈勝利，撒但永遠無法逆轉。
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
              <p className="text-gray-700">撒但的眾多名稱中，哪一個最能描述你目前在生命中感受到的攻擊方式？你為什麼這麼認為？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">撒但是有位格的存在（有智力、情緒、意志），而非抽象的力量。這個認識如何改變你對屬靈爭戰的理解和應對方式？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">耶穌在曠野用聖經話語回應撒但的三次試探。在你日常的試探中，你如何具體地「以聖經應對」？這對你來說有多困難？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">作者說撒但在十字架上「永遠失敗了」。如果這是真的，為什麼基督徒仍然需要爭戰？你如何理解「已經得勝」和「仍在爭戰」這兩者之間的張力？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">撒但在新約教會中的工作包括：謊言（亞拿尼亞事件）、道德放縱（哥林多）、阻擋傳道（保羅）、裝作光明天使。你認為當代教會最常遭受哪種形式的撒但攻擊？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">約翰說「在我們裡面的耶穌比在世界上的撒但更大」（約壹4：4）。在你目前面對的屬靈掙扎中，你實際上有多深信這個真理？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 學習耶穌回應試探的方式</h4>
              <p className="text-gray-700 mb-2">研讀馬太福音4：1-11，做以下練習：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>找出耶穌引用的三節舊約經文（申8：3；6：16；6：13）</li>
                <li>思考這些經文如何直接回應試探的核心</li>
                <li>選出你目前最常遭受的試探，找出相應的聖經應對經文</li>
                <li>把這些經文抄寫下來，貼在你每天會看到的地方</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 默想十字架的得勝</h4>
              <p className="text-gray-700 mb-2">閱讀希伯來書2：14-18和約翰一書4：4，並默想：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>基督的死如何「敗壞」了掌死權的魔鬼</li>
                <li>撒但控告我的「依據」如何在十字架上被移除（羅8：33-34）</li>
                <li>「在我裡面的」是誰，祂比「在世界上的」更大多少</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💬 建立對謊言的警覺</h4>
              <p className="text-gray-700 mb-2">撒但是說謊者（約8：44）。本週刻意觀察：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>我最常相信哪些關於上帝的謊言？（「上帝不在乎我」、「我太壞了上帝不能愛我」）</li>
                <li>我最常相信哪些關於自己的謊言？</li>
                <li>用聖經真理一一駁斥這些謊言，寫成「謊言vs.真理」對照表</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">🙏 本章禱告</h4>
              <p className="text-gray-700 leading-relaxed italic">
                「主耶穌，感謝祢在曠野中勝過了撒但每一次的試探；感謝祢在十字架上永遠打敗了他。當撒但用謊言攻擊我，求祢讓祢的真理更大、更真實。當他用恐懼使我癱瘓，求祢讓我記得住在我裡面的是祢，而祢比他更大。讓十字架的得勝成為我每天屬靈爭戰的力量。奉耶穌的名祈求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
