import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Target, Search, HelpCircle, Check, Star } from 'lucide-react';

export default function Book19Ch5() {
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
        <div className="text-sm font-medium text-blue-500 mb-1">主題五</div>
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">🙏 基督徒的實踐</h1>
        <p className="text-gray-500 text-sm">第29-35、37、40-43、47-48章</p>
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
              <h3 className="font-bold text-purple-700 text-lg mb-3">第29章：祝福他人</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                慕安德列說每個信徒都有「祝福的使命」。這不只是牧者或宣教士的特權，而是所有基督徒的呼召。創世記12:2神呼召亞伯拉罕：「我必賜福給你……你也要叫別人得福。」被神祝福的人，必然成為祝福的管道。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「祝福的能力」——信徒有能力祝福他人，因為基督的生命在他們裡面。這種祝福不只是說祝福的話，而是帶著屬靈的實質：禱告、代求、見證、服事、分享信仰。每一個信徒都是神恩典的容器，可以將神的恩典傳遞給周圍的人。
              </p>
              <p className="text-gray-700 leading-relaxed">
                「蒙福的途徑」——奇妙的是，祝福他人往往使自己更蒙福。使徒行傳20:35說：「施比受更為有福。」當我們出去祝福他人，我們自己的靈命反而成長；當我們收縮在自我的世界裡，靈命反而萎縮。慕安德列鼓勵信徒：每天問自己「今天我怎樣祝福了別人？」這個問題能改變一個人的生活焦點。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 text-lg mb-3">第30-31章：個人事奉與宣教使命</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                慕安德列在第30章論個人事奉時指出：事工的迫切性——「莊稼多，工人少」（太9:37）；憑愛心作工——服事不是為了義務，而是因為愛神愛人；憑信心作工——相信神使用願意被使用的人；與耶穌相交——事奉的動力來自與主的關係，脫離耶穌的事奉只是宗教表演。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                第31章談宣教，慕安德列說：「宣教是耶穌的事業，是教會的目標，是聖靈的工作。」宣教不是教會眾多事工中的一項，而是教會存在的根本目的之一。馬太福音28:19的大使命不是給少數人的，而是給每一個跟隨基督的人的。
              </p>
              <p className="text-gray-700 leading-relaxed">
                「宣教帶來福氣」——慕安德列說，投入宣教事業的教會和個人，往往是最蒙福的。這是因為宣教使信徒的眼光從自我轉向神和他人，使禱告更有力量，使屬靈生命更有活力。對宣教漠不關心的信徒，往往靈命也較為停滯。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 text-lg mb-3">第33章：受教與磨練</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                人生中的困難和試煉往往是神最有效的教導工具。慕安德列說信徒應以「明確目標」面對試煉——每一個困難都有神的教導目的，我們的任務是從中學習，而不只是逃脫。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在試煉中「查考聖經」，尋找神對這類處境的教導；「讓耶穌作導師」，在禱告中向他學習如何回應困難；「作甘心受教的學生」，不抗拒也不抱怨試煉，而是問「主，你要藉此教導我什麼？」這種態度使試煉成為恩典，使痛苦成為成長的土壤。
              </p>
              <p className="text-gray-700 leading-relaxed">
                希伯來書12:5-11說神管教他所愛的兒女，這管教雖然「令人憂愁，不令人喜樂」，卻「後來為那經練過的人結出平安的果子，就是義。」信徒應當從神的角度看待試煉：這是父親的愛心管教，目的是使我們得益處，讓我們在他的聖潔上有分。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 text-lg mb-3">第34-35章：禱告的操練</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                慕安德列對禱告的教導是此書中最豐富的部分之一。第34章論個人禱告，強調四個要素：「單獨與神相處」——主耶穌自己有退到曠野獨自禱告的習慣（路5:16），這是屬靈生命的根基；「在天父面前禱告」——不是對著虛空說話，而是真實地與一位慈愛的父親交談；「確信必蒙應允」——約翰16:24說「你們求，就必得著」，這是主的應許，需要信心支取；「花費時間」——倉促的禱告是膚淺的禱告，深刻的靈命需要長時間的禱告塑造。
              </p>
              <p className="text-gray-700 leading-relaxed">
                第35章論聯合禱告，即教會的禱告會。慕安德列指出聯合禱告的三個要素：「同心合意」（太18:19）——真正的合一，不是形式上的一起在場，而是心靈深處的一致；「奉主耶穌的名」——以基督為中介，相信他的名有能力；「期待神的應允」——帶著具體的盼望而來，期待看見神做工的結果。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 text-lg mb-3">第37章：全心獻身</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                全心獻身包含四個維度：「個人與主的相交」——不是公開的表態，而是在內室裡真實地將自己交給神；「公開承認」——在弟兄姊妹面前宣告自己屬於基督，承擔跟隨主的代價；「從世界分別出來」——不被世俗的價值觀和生活方式所俘虜（羅12:2）；「為神所用」——讓神決定如何使用你的才能、時間和資源。
              </p>
              <p className="text-gray-700 leading-relaxed">
                慕安德列說：「許多信徒願意「為神所用」，卻不願意「讓神決定如何用」。他們想服事神，但要用自己喜歡的方式。真正的獻身是把主動權交給神，讓他按他的計劃使用你——無論那是在聚光燈下還是在幕後，是在讚美聲中還是在無人知曉處。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 text-lg mb-3">第40-41章：聖潔生活與主日</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                羅馬書12:1-2是慕安德列第40章的中心：「將身體獻上，當作活祭，是聖潔的，是神所喜悅的……心意更新而變化。」「活祭」是有力的比喻——祭物被放上壇，不能自己下來；信徒將自己獻為活祭，就是在日常的生活中持續地做神所喜悅的事，不受世俗的拉扯而偏離。
              </p>
              <p className="text-gray-700 leading-relaxed">
                第41章論主日（安息日）：聖潔——這一天特別分別歸神；祝福——這是神賜給信徒的恢復和重新充電之日；安息——不只是身體的休息，更是靈魂從勞苦中得到安慰。慕安德列說，如何使用主日，往往反映了一個人真正的信仰優先順序。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 text-lg mb-3">第42-43章：聖禮</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                第42章論洗禮，慕安德列以三一神的名字結構來解釋洗禮的意義：「歸入父的名」——受洗宣告我是神的兒女，被天父認識和接納；「歸入子的名」——受洗宣告我接受基督的死和復活，與他聯合；「歸入聖靈的名」——受洗宣告我的生命從此在聖靈的管理下生活。洗禮不是得救的條件，而是得救的公開宣告和立約記號。
              </p>
              <p className="text-gray-700 leading-relaxed">
                第43章論聖餐：「屬靈的餵養」——每次領聖餐，我們再次領受基督的身體和血，更新我們與他的生命聯合；「與主聯合」——聖餐是最生動的提醒：基督為我們捨身，我們的生命建立在他的犧牲上；「需要預備」——哥林多前書11:28說「人應當自己省察，然後吃這餅、喝這杯」，帶著認罪悔改的心來領受，才能真正得益。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 text-lg mb-3">第47-48章：言行審慎與金錢觀</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                第47章論審慎，涵蓋五個生活領域：「言語」——詩篇19:14說「願我口中的言語，我心裡的意念在你面前蒙悅納」，慎言是敬虔生活的重要標誌；「耳目」——我們所看所聽的塑造我們的思想，需要謹慎選擇進入心靈的東西；「交往」——近朱者赤，選擇與誰深交會深刻影響我們的信仰和品格；「錢財」——金錢是中性的工具，但對金錢的態度往往反映內心的真實優先順序；「內心」——所有的外在審慎都源於內心的更新，「你要保守你心，勝過保守一切，因為一生的果效，是由心發出」（箴4:23）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                第48章專論金錢觀：「讓神掌管財務」——所有的錢財都是神的，我們只是管家；「學習神的話關於錢財的教導」——聖經對金錢的論述豐富而具體；「為弟兄的益處」——慷慨地接濟有需要的弟兄姊妹；「為神的國度奉獻」——支持宣教和教會的事工。慕安德列說：「一個人的支票本（或銀行帳戶）反映他真正的信仰。」
              </p>
            </div>

          </div>
        )}
      </div>

      {/* 重點總結 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <div className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 flex items-center gap-2">
          <Star className="w-5 h-5 text-teal-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">重點總結</span>
        </div>
        <div className="p-5 bg-white space-y-3">
          <div className="flex gap-3">
            <span className="text-teal-600 font-bold flex-shrink-0">1.</span>
            <p className="text-gray-700">基督徒的實踐不是外在規則的遵守，而是新生命在社會關係和具體行動中的自然流露——祝福、服事、宣教都是這種流露的表現。</p>
          </div>
          <div className="flex gap-3">
            <span className="text-teal-600 font-bold flex-shrink-0">2.</span>
            <p className="text-gray-700">禱告是基督徒實踐的核心——個人禱告的深度和聯合禱告的廣度，共同托起一個信徒和教會的屬靈生命。</p>
          </div>
          <div className="flex gap-3">
            <span className="text-teal-600 font-bold flex-shrink-0">3.</span>
            <p className="text-gray-700">聖禮（洗禮和聖餐）不是空洞的儀式，而是具有豐富屬靈意義的恩典記號，需要信徒認真預備、恭敬領受。</p>
          </div>
          <div className="flex gap-3">
            <span className="text-teal-600 font-bold flex-shrink-0">4.</span>
            <p className="text-gray-700">言行審慎和正確的金錢觀是信仰落地的試金石——這些「世俗」的領域，往往最能反映一個人的靈命深度。</p>
          </div>
          <div className="flex gap-3">
            <span className="text-teal-600 font-bold flex-shrink-0">5.</span>
            <p className="text-gray-700">試煉和受教是基督徒生命中不可或缺的部分；以甘心受教的態度面對困難，是屬靈成熟的標誌。</p>
          </div>
        </div>
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
              <h4 className="font-semibold text-indigo-700 mb-2">禱告：關係還是技術？</h4>
              <p className="text-gray-700 leading-relaxed">
                現代有許多關於禱告「技術」的書籍，教導禱告的方法、模式、公式。這些本身並無問題，但慕安德列提醒：禱告本質上是關係，而非技術。一個認識自己的父親的孩子，不需要「方法」才能與父親說話。禱告的深化，根本上是與神關係的深化。這並不否定規律性和紀律性的禱告習慣的價值，但這些習慣應當服務於關係，而非取代關係。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">洗禮的神學爭議與實踐意涵</h4>
              <p className="text-gray-700 leading-relaxed">
                歷史上對洗禮有不同的神學立場——嬰兒洗禮對比信徒洗禮，浸禮對比灑水禮。慕安德列本人（荷蘭改革宗背景）實踐嬰兒洗禮，但他在這章強調的是洗禮的屬靈意義，而非形式。無論何種形式，洗禮都宣告了同一個真理：這個人屬於三一神。對已受洗的信徒，慕安德列建議時常回想自己的洗禮，在試探和困難時說：「我是屬於神的，我是他的兒女。」這種宣告有強大的屬靈保護力量。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">金錢：最後的偶像</h4>
              <p className="text-gray-700 leading-relaxed">
                耶穌說：「你們不能又事奉神，又事奉瑪門（財利）。」（太6:24）金錢是聖經中被論及次數最多的主題之一（超過2000節），可見其在人生中的核心地位。社會學家指出，在後現代社會，金錢已成為最普遍的偶像形式——它承諾安全感、身分認同、自由和意義。慕安德列的「讓神掌管財務」不只是理財原則，而是一種深層的心靈轉化：從把金錢視為人生的根基，轉向把神視為真正的根基和供應者。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">宣教：義務還是特權？</h4>
              <p className="text-gray-700 leading-relaxed">
                宣教在許多教會中是令人壓力沉重的話題——感覺是一項必須完成但令人疲倦的義務。慕安德列的角度截然不同：宣教是特權，是參與神在這個世界上最偉大工作的機會。使徒保羅說他以傳福音為「虧欠」和「本分」（羅1:14-15），但他也說這是榮耀的工作（提前1:11）。宣教是愛的流動——真正理解了神對世人之愛的信徒，不得不分享這份愛，就如光不得不照耀、鹽不得不調味一樣。
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
              <p className="text-gray-700">你的個人禱告生活是深入的還是形式性的？是什麼讓你最難以維持規律而深入的禱告習慣？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">對你來說，宣教更像義務還是特權？你對未得救的人（家人、朋友、同事）有沒有真實的牽掛？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">你如何看待金錢在你生命中的角色？神對你的財務有多大的管理權？在哪些具體的財務決定上，你會諮詢神的旨意？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">在你的日常言語中，有沒有你認為需要改進的模式（批評、抱怨、誇大、不誠實）？你認為這需要什麼樣的改變？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">你對聖餐的態度是恭敬的還是習慣性的？上一次你帶著真正的預備（反省和感恩）來領聖餐是什麼時候？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">你生命中目前最大的試煉是什麼？你有沒有嘗試問神：「你要藉此教導我什麼？」你覺得神在這試煉中的目的可能是什麼？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告生活升級</h4>
              <p className="text-gray-700 mb-2">本月嘗試以下改變：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>設定每天固定的禱告時間（早晨或晚上），至少15分鐘</li>
                <li>為三個你認識的未信者每天禱告，求神開他們的心</li>
                <li>參加教會禱告會，學習與弟兄姊妹聯合禱告</li>
                <li>在禱告日記中記錄禱告和神的回應，定期回顧</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💰 財務省察</h4>
              <p className="text-gray-700 mb-2">做一個財務方面的靈命省察：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>回顧過去三個月的主要支出，問：這反映了什麼優先順序？</li>
                <li>查考2-3段關於金錢的聖經（如太6:19-34；路12:13-21；提前6:6-10）</li>
                <li>是否定期奉獻？奉獻比例是否反映你對神的信靠？</li>
                <li>有沒有在金錢上可以更慷慨祝福他人的機會？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📢 分享信仰的一小步</h4>
              <p className="text-gray-700 mb-2">宣教從身邊開始：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>列出三個你希望認識神的人，開始為他們代禱</li>
                <li>主動邀請一位朋友參加教會活動或小組</li>
                <li>在適當的對話中，自然地分享你的信仰經歷</li>
                <li>為一個宣教士或宣教機構每月奉獻，使你的金錢參與宣教</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4 mt-2">
              <p className="text-green-800 italic text-sm leading-relaxed">
                「天父，感謝你呼召我不只是被你愛，更成為愛的管道。我願意讓我的禱告更深入、我的服事更真實、我的金錢更慷慨。求你幫助我的信仰不只停留在頭腦和心裡，更在每天的選擇和行動中活出來。使我成為你在這個世界上的祝福管道。阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
