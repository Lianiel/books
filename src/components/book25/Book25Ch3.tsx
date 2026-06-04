import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book25Ch3() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true, summary: true, exploration: true, questions: true, practice: true
  });
  const toggle = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  const stages = [
    {
      num: 1, name: '靈性死亡', color: 'gray',
      verse: '以弗所書二章1-5節：你們死在過犯罪惡之中……',
      desc: '尚未接受基督為主和救主。他們可能拒絕神，可能正在尋找神，可能自認重視靈性，甚至可能聲稱自己認識神，但他們的生命沒有聖靈的內住。',
      signs: ['我不相信有神的存在', '聖經只是神話故事', '宗教是弱者的拐杖', '人有很多管道可以通往神', '我是個好人，死的時候沒什麼好擔心的'],
      needs: '需要基督徒透過真誠友誼帶來愛；需要有人回答他們的問題；需要有人清楚解釋福音並邀請他們信靠耶穌。',
    },
    {
      num: 2, name: '屬靈嬰兒', color: 'blue',
      verse: '彼得前書二章2-3節：就要愛慕那純淨的靈奶……',
      desc: '已決定跟隨耶穌，但對耶穌的教導普遍缺乏了解。他們的生命重心主要都在自己及能滿足他們需求的事物上，很自然地把牧師和教會當作一項服務。',
      signs: ['我需要固定去教會？我沒聽過這個說法', '什一奉獻？那是什麼？', '我不需要別人，只有我和耶穌就夠了', '三一神？什麼？你把我搞糊塗了', '我剛受洗，回家路上就和太太大吵——耶穌不是該把問題解決掉嗎？'],
      needs: '需要屬靈父母的照顧和餵養；需要被保護和引導，免受錯誤的教導；需要發展新習慣，塑造基督跟隨者的生活模式。',
    },
    {
      num: 3, name: '屬靈孩童', color: 'green',
      verse: '約翰壹書二章12節；帖撒羅尼迦前書二章10-12節',
      desc: '與神的關係持續成長，開始把神的話語應用在生活。但屬靈生活仍繞著自己打轉，滿足自己的需求、渴望和興趣；仍十分自我中心，尚未完全轉化到關注他人。',
      signs: ['我不知道這間教會能不能滿足我的需求，也許去另一間', '不要把我們小組分成兩組，這樣我就不能跟朋友在一起了', '今天的講道完全沒有餵養到我', '我在兒童事工幫忙，但他們沒有感謝我，所以我就不幹了', '教會都沒有人跟我打招呼！'],
      needs: '需要和一位成熟信徒的堅固連結；需要有人教導在基督裡的身分；需要學習以正確的理由做正確的事、學習僕人的心。',
    },
    {
      num: 4, name: '屬靈青年', color: 'yellow',
      verse: '約翰壹書二章13-14節：少年人哪，你們勝了那惡者……',
      desc: '已從自我中心轉變為以神及他人為中心。開始調整生命聚焦在神和神的百姓及使命上。他們開始服事別人，把別人的需要放優先，成為行道的人。',
      signs: ['我靈修時看到一句經文，有點問題想請教你', '這個暑假我很想去烏干達短宣', '我在和三個朋友分享見證，我覺得我們小組對他們來說太大了，我們能不能分組？', '布藍頓和蒂芬妮沒來小組，我打電話去問候他們，也許我們小組可以送餐給他們', '你看今天多少人來教會！太讚了！'],
      needs: '需要可以學習服事的地方；需要屬靈導師指點；需要深厚持續的關係；需要有人幫助設立界限，並教導他們如何回應服事對象的期待。',
    },
    {
      num: 5, name: '屬靈父母', color: 'purple',
      verse: '提摩太後書二章1-2節：忠心能教導別人的人……',
      desc: '對神的話語有扎實理解，和神有深厚長久的關係，渴望參與在興起其他門徒的事上。他們會刻意去建立自己與耶穌不間斷的關係，存著建造門徒的目的與人建立關係。',
      signs: ['我在想，上帝是否帶領我投注在比爾身上，幫助他有成熟的信仰', '我想幫助一個同事，他請我解釋聖經給他聽，請為我代禱', '今晚我們幫小組裡的人施洗，下一期的基要真理課程什麼時候開始？', '最重要的門徒建造對象是我的孩子，你能督促我每天帶孩子靈修嗎？', '我的一個屬靈小孩引起了爭端，請為我禱告，讓我能有耐心引導他們'],
      needs: '需要與其他帶領門徒的屬靈父母有緊密同儕關係；需要持續訓練；需要被鼓勵在教會中自由帶領門徒；應被讚揚和尊榮——牧者所推崇的，會眾自然就看重。',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">第三章</h1>
        <h2 className="text-xl font-semibold text-gray-700">如何開始幫助人成長</h2>
        <p className="text-gray-500 mt-1">靈命成長的五個階段</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('content')} className="w-full px-5 py-3 bg-gradient-to-r from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-blue-700 mb-2">帶領門徒的起點：評估屬靈成熟度</h3>
              <p className="text-gray-700 leading-relaxed">正如醫生需要先診斷病情才能治療，教會領袖需要先評估會眾的屬靈成熟度，才能提供合適的門徒帶領。要區分不同屬靈發展程度的人，聽起來好像很奇怪——我們不是不應該論斷人嗎？但作者強調：論斷是對別人的品格或道德作出最終裁定；而這裡的評估，是為了幫助他們成長前進，就像老師評量學生的程度，好了解學生在哪些地方需要幫助。</p>
              <p className="text-gray-700 leading-relaxed mt-3">帶領門徒的過程牽涉到三個部分：<strong>我（帶領者）的部分</strong>——在別人的屬靈旅程中，我能幫助他們的事；<strong>他們的部分</strong>——若一個人不想成長，我也沒辦法做什麼；<strong>上帝的部分</strong>——有些事最終只有上帝能負責，祂才是那位能轉化生命的。</p>
            </div>

            {/* 五個階段 */}
            <div>
              <h3 className="font-bold text-blue-700 mb-3">靈命成長的五個階段</h3>
              <div className="space-y-4">
                {stages.map(stage => (
                  <div key={stage.num} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-teal-600 text-white flex items-center justify-center font-bold text-sm">{stage.num}</span>
                      <h4 className="font-bold text-gray-800 text-lg">階段{stage.num}：{stage.name}</h4>
                    </div>
                    <p className="text-teal-700 text-sm italic mb-2">{stage.verse}</p>
                    <p className="text-gray-700 mb-3">{stage.desc}</p>
                    <div className="mb-3">
                      <p className="font-semibold text-blue-700 mb-1">典型的言談（階段特徵）：</p>
                      <ul className="space-y-1">
                        {stage.signs.map((s, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-blue-400 flex-shrink-0 mt-1">•</span>
                            <p className="text-gray-600 italic">「{s}」</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-teal-50 border border-teal-100 rounded-lg p-3">
                      <p className="font-semibold text-teal-700 mb-1">這個階段的需要：</p>
                      <p className="text-gray-700">{stage.needs}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-blue-700 mb-2">關於成長路徑的重要提醒</h3>
              <p className="text-gray-700 leading-relaxed">靈命成長不是直線進行的——人們常會回到較早的階段，並發現生命中無知或自我中心的領域。有時候，在嬰兒或孩童階段的基督徒，能說出一些顯示高度成熟的話或做出基督形象的行為。成熟的信徒若不謹慎，也可能掉回不成熟的生命。但在屬靈旅程中走得越深越遠的人，犯錯後回轉悔改的速度越快。</p>
              <p className="text-gray-700 leading-relaxed mt-3">同樣重要的是，門徒生命中沒有哪個階段比其他階段更重要或更有價值。父母沒有比孩子更有價值，屬靈青年也沒有比靈性死亡的人更重要。在神的眼中，每個人都是寶貴的，是按祂形象創造的。在神的計畫中，每個人都有對應的工作，我們的目標是幫助每個人在當前的階段中成長，並協助他們轉換到下一個階段。</p>
            </div>
          </div>
        )}
      </div>

      {/* 重點總結 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
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
                '靈命成長可以分為五個階段：靈性死亡→屬靈嬰兒→屬靈孩童→屬靈青年→屬靈父母，每個階段有不同的特徵和需要。',
                '評估屬靈成熟度不是論斷，而是為了幫助人成長——就像老師評量學生，是為了提供更合適的幫助。',
                '帶領門徒有三個部分：帶領者的部分、被帶領者的部分、以及上帝的部分——我們只能負責自己那部分。',
                '在教會待的時間長短，不等於靈命成熟度——有人信主幾十年仍停留在孩童階段，有人信主幾年卻已有父母的成熟。',
                '每個成長階段的人，都有特定的言談「階段特徵」，可以幫助我們了解他們在哪裡，並知道從哪裡開始幫助他們。',
                '靈命成長不是直線的，人們可能在不同階段之間移動；我們的任務是在他們的當前處境中幫助他們成長。',
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
        <button onClick={() => toggle('exploration')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">延伸探討</span>
          </div>
          {expanded['exploration'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['exploration'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">為什麼「屬靈父母」而非「屬靈成人」？</h4>
              <p className="text-gray-700 leading-relaxed">作者刻意用「屬靈父母」而非「屬靈成人」，是因為要強調屬靈再造的概念。當有人自稱靈命成熟時，作者會問他們是否有在帶門徒。如果沒有，那靈命是否真的成熟就值得懷疑。靈命成熟的人會去帶領門徒（有屬靈的孩子）。若有帶領的能力卻沒有在培育下一代，最多只能稱得上是「青年」。這個比喻提醒我們：真正的成熟是向外的，是生命繁殖的能力。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「屬靈孩童的自我中心」是正常的發展階段</h4>
              <p className="text-gray-700 leading-relaxed">許多教會領袖看到孩童式的行為（「教會沒有滿足我的需要」、「把我的小組分掉？不行！」）就感到沮喪和挫折，甚至論斷這些人不屬靈。但作者提醒我們：這是正常的發展階段，就像小孩子的自我中心一樣。我們對嬰兒有什麼期待？——他們會搞得一團亂、很吵、需要照顧。但這不是問題，這是成長的一部分。問題是當我們讓人永遠停留在孩童階段，沒有幫助他們移向下一個階段。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">靈命成長路徑的聖經根據</h4>
              <p className="text-gray-700 leading-relaxed">這五個階段並非作者的創造，而是深根於聖經的觀察：以弗所書二章（靈性死亡）、彼得前書二章（靈嬰兒）、帖撒羅尼迦前書二章（孩童需要屬靈父母勸勉）、約翰壹書二章（青年勝過惡者、父母認識那從起初原有的）、提摩太後書二章（成熟能教導別人的人）。這個成長路徑是按照聖經對不同成熟度信徒的描述整理出來的。</p>
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
          <div className="p-5 bg-white space-y-4">
            {[
              '你目前大約在哪個靈命成長階段？是什麼證據讓你這樣判斷？',
              '你帶領的人或認識的信徒中，哪些人處於哪個階段？你目前給他們的幫助，是否符合他們在那個階段的實際需要？',
              '你的教會目前有沒有系統性地幫助人從一個階段移向下一個階段？若沒有，最大的阻礙是什麼？',
              '當你遇到「屬靈孩童」的自我中心行為時，你通常的反應是什麼？你如何能以更有智慧的方式回應他們的需要？',
              '高爾文博士說：「靈命不成熟，是由於缺乏真正的門徒帶領。」你認為你的教會是否提供了足夠的門徒帶領環境？',
              '你生命中有沒有「屬靈父母」，就是刻意在你生命中投資，幫助你成長的人？如果沒有，你願意主動去尋找嗎？',
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
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 繪製你的「屬靈地圖」</h4>
              <p className="text-gray-700 mb-2">列出你目前定期互動的五個人（家人、教會朋友、同事），根據本章的五個階段，嘗試評估他們各自大約在哪個階段。然後思考：對每個人，我目前能做什麼來幫助他們移向下一個階段？</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 學習「聆聽」屬靈階段的信號</h4>
              <p className="text-gray-700 mb-2">接下來兩週，刻意留意你周圍的人所說的話，練習辨識他們的「階段特徵」。不要評判，只是觀察，然後思考：他們在這個階段最需要的是什麼？</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 找到你自己的「屬靈父母」和「屬靈孩子」</h4>
              <p className="text-gray-700">這週：（1）尋找一個比你成熟的人，邀請他定期關心你的屬靈成長。（2）尋找一個比你幼嫩的人，開始刻意投注時間在他的生命中。這是門徒帶門徒鏈條的起點。</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="font-semibold text-green-700 mb-2">🙏 禱告詞</p>
              <p className="text-gray-700 italic">「主耶穌，謝謝你接納我，不管我現在在哪個屬靈階段。求你讓我看見身邊每一個人的屬靈需要，並賜給我智慧和愛心，在他們的處境中幫助他們向你靠近。也求你興起我身邊的教會，成為一個幫助人在靈命上持續成長的地方，使每個人都能走上成熟的路，最終成為能帶領他人的屬靈父母。阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
