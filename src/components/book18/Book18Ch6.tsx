import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book18Ch6() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">第六章</h1>
        <h2 className="text-xl font-semibold text-gray-700">撒但的將來</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">
            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">象棋的寓言</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                有個故事是關於一個象棋冠軍的，他對一個歐洲藝術畫廊中一幅兩個棋手對弈的畫非常著迷。一個棋手象徵魔鬼，大笑著似乎在走最後一步棋；另一個年輕人在顫抖著咬自己的指甲。這幅畫的題目是《將死》。畫中所傳遞的資訊很清楚：魔鬼將要永遠俘獲這位年輕人的靈魂。
              </p>
              <p className="text-gray-700 leading-relaxed">
                象棋冠軍花了幾個小時的時間研究棋局之後發現，魔鬼將要走的那一步仍然留給了年輕人逃走的機會，他反過來可以走一步棋把魔鬼將死。「我希望你能聽到我說話，」象棋冠軍對年輕人喊道，「雖然魔鬼欺騙了你，但你卻不會被將死。你還有一步棋可走，而且你可以把他將死。你的生命可以改變。走最後一步棋的是你，而不是魔鬼。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">1. 撒但最終的結局</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                在基督裡面，基督徒將對撒但採取最後一擊。在基督駕雲降臨前不久，撒但將會被「釋放一段時間」，在這期間，他將會向教會發起猛攻（啟20：1-10）。信徒也許會擔心自己會被這個大仇敵徹底擊敗，但基督那時將會作為勝利者降臨，在末後的審判中給撒但的頭致命的一擊。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                基督將會抓住古蛇撒但，把他永遠扔進地獄的無底坑中，基督自己把那裡描述成「為魔鬼和他的使者所預備的」永遠的火湖（太25：41）。撒但和他的墮落天使懼怕末後的審判。甚至當耶穌還在世上時，惡鬼邪靈也在他面前戰兢，說：「我們與禰有什麼相干？禰來滅我們嗎？」（可1：24）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                《路加福音》第8章31節告訴我們，惡鬼央求耶穌不要吩咐他們到「無底坑」，也就是地獄的深淵裡去。他們知道地獄的深淵是他們最終的歸宿。《猶大書》第6節也告訴我們，基督為在天上叛逆的邪靈預備了永遠的鎖鏈。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">2. 信徒當有的安慰</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                知道在大審判那天，撒但及其後裔都將被永遠驅逐出去，這對信徒是多大的安慰啊！撒但頭上所受的傷將會是徹底的、終結性的。那控告信徒的永遠不再能傷害和控告信徒了。他永遠也不能再攪擾女人的後裔。知道我們在與一個受了致命傷的敵人爭戰，這是多麼大的安慰啊！
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在大審判那天，如今飽受磨難的教會將要成為得勝的教會。信徒們將會充充足足地經歷到《出埃及記》第14章13至14節中的屬靈本質：「不要懼怕，只管站住！看耶和華今天向你們所要施行的救恩，因為你們今天所看見的埃及人，必永遠不再看見了。耶和華必為你們爭戰，你們只管靜默，不要作聲。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                在大審判那天，敗壞的將要承受純潔的（林前15：50）。所有的選民，從初信者到那些在恩典中大有長進的人，都將被帶領進入永恆的以琳。美善將被圈進來，邪惡將被趕出去。衝突將會停息。撒但及其後裔將會被埋葬在上帝咒詛的深淵中。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">3. 勸勉：剛強壯膽</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                上帝所愛的孩子啊，要剛強壯膽。無論撒但怎樣竭力攪擾，基督的後裔都不會滅亡。你的勝利者基督永遠不會失敗。撒但有其局限性。「魔鬼永遠也不能把他的頭抬得高過聖徒的腳跟，」威廉·格諾爾寫道。撒但和他的惡鬼雖然大有能力，但卻並不是無所不能、無所不知、無所不在的。撒但不可能同時在所有的地方。他是一個墮落的天使，不是墮落的上帝；他很有能力，但卻不是全能的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                基督是全能者，他不會拋棄自己手中的工作。他的事業是確定的。他的再臨已經臨近。如果你不認識基督，要當心，當撒但被扔到永遠的火湖中去時，不信基督的人將會與他一起滅亡。
              </p>
              <p className="text-gray-700 leading-relaxed">
                羅伯特·霍爾單在解釋《羅馬書》第16章20節時說：「在與撒但的爭戰中，可以獲得兩個勝利。第一，他的頭將被耶穌基督踐踏在腳下；第二，他身體的其餘部分將被信徒踐踏在腳下。」願藉著我們榮耀的三一上帝的力量，這些重要真理幫助你在與撒但爭戰時堅持到底。
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed italic">
                「基督是全能者，他不會拋棄自己手中的工作。他的事業是確定的。他的再臨已經臨近……賜平安的上帝快要將撒但踐踏在你們腳下」（羅16：20）。
              </p>
              <p className="text-right text-gray-500 text-sm mt-2">——羅馬書16：20</p>
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
              <h4 className="font-semibold text-gray-800 mb-2">「已然—未然」的末世論張力</h4>
              <p className="text-gray-700 leading-relaxed">
                基督徒生活在一個奇特的末世論張力中：基督已經勝過撒但（已然），但撒但仍在活躍（未然）。這就像二戰中的「D日」（諾曼底登陸）之後——勝利的結果已經確定，但戰鬥仍未結束。奧斯卡·庫爾曼（Oscar Cullmann）用這個比喻來描述新約的末世論。知道「D日」已經發生，改變了士兵在戰場上的心態——他們是在追擊一個已被打敗的敵人，而非面對一個可能獲勝的敵手。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">撒但的局限性：他不是墮落的上帝</h4>
              <p className="text-gray-700 leading-relaxed">
                許多人在心理上把撒但和上帝對等，彷彿存在善惡二元論。但作者強調：撒但「是一個墮落的天使，不是墮落的上帝；他很有能力，但卻不是全能的。」這是重要的神學糾正。撒但沒有上帝的三大特性：全能（他的能力有限）、全知（他不知道你的想法，只能觀察外在行為）、全在（他不可能同時在所有的地方）。這些局限使他和上帝之間存在本質差異，也是信徒有足夠根據不感到絕望的原因。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">《啟示錄》20章的詮釋爭議</h4>
              <p className="text-gray-700 leading-relaxed">
                《啟示錄》第20章1-10節描述撒但被捆綁一千年，然後被釋放、再次被擊敗後扔進火湖。這段文字的詮釋是不同千禧年論的核心分歧：前千禧年論者認為撒但的捆綁在基督再來後才開始；無千禧年論者（如本書作者的立場）認為捆綁在基督第一次降臨時已開始；後千禧年論者認為教會的擴展最終帶來撒但的徹底被捆綁。儘管詮釋不同，各立場都同意撒但最終將被扔入火湖（啟20：10），這是聖經清楚的教導。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">末世盼望如何改變今日的屬靈爭戰</h4>
              <p className="text-gray-700 leading-relaxed">
                確信撒但最終將被審判和驅逐，對今日的屬靈爭戰有實際影響：（1）使我們能夠以長遠眼光看待當前的試煉，知道這不是永遠的；（2）使我們不絕望——即使目前的爭戰很艱難，結局已經確定；（3）使我們更積極傳福音——知道每一個進入上帝國度的靈魂，都是從撒但轄管下被搶救出來的；（4）使我們更警醒——知道撒但在被終結審判前仍會拼死掙扎，對末後教會的攻擊尤為猛烈。
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
              <p className="text-gray-700">象棋冠軍的故事寓意是「你以為被將死了，但其實還有一步棋」。你生命中是否曾有過這樣的時刻——感覺被撒但「將死」，但後來發現上帝為你留了出路？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">作者說撒但「是一個墮落的天使，不是墮落的上帝」，強調他的局限性。這個認識如何影響你面對試探和困難時的心態？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">「知道我們在與一個受了致命傷的敵人爭戰，這是多麼大的安慰啊！」你在日常的屬靈爭戰中，有多常想起撒但已經被基督打敗這個事實？這個真理對你有多真實？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">出埃及記14：13-14「耶和華必為你們爭戰，你們只管靜默，不要作聲。」這個應許在你的生命中有何意義？什麼時候「靜默等候上帝」是適合的回應？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">作者說撒但的最終結局是被扔入永遠的火湖，而不信基督的人將與他一起滅亡。這個真理對你的傳福音動機有何影響？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">羅馬書16：20說「賜平安的上帝快要將撒但踐踏在你們腳下」。面對這個確定的應許，你今天的屬靈爭戰應當以什麼樣的態度來進行？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 默想撒但的局限性</h4>
              <p className="text-gray-700 mb-2">本週抽時間默想撒但與上帝的差異，寫出對比：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>上帝全能 vs. 撒但能力有限（需要上帝許可才能行動）</li>
                <li>上帝全知 vs. 撒但只能觀察外在（不知道你的真實想法）</li>
                <li>上帝全在 vs. 撒但無法同時在所有地方</li>
                <li>問自己：我在實際生活中是否把撒但當成像上帝一樣強大？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 用末世盼望調整今日心態</h4>
              <p className="text-gray-700 mb-2">閱讀啟示錄20：1-10和羅馬書16：20，並默想：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>「已然—未然」的爭戰框架如何幫助我理解當前的試煉</li>
                <li>如果我確知最終勝利屬於基督，今天的爭戰態度應該改變什麼</li>
                <li>把今天面對的一個具體困難，放在「但最終得勝的是基督」的光照下看待</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💬 傳福音的末世動機</h4>
              <p className="text-gray-700 mb-2">本章提醒我們不信基督的人將與撒但一起滅亡。這週找一個機會：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>為你心中一個未信主的朋友或家人具體代禱</li>
                <li>思考有什麼具體的行動可以讓他們聽到福音</li>
                <li>求上帝開路，讓你有機會分享信仰</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">🙏 本章禱告</h4>
              <p className="text-gray-700 leading-relaxed italic">
                「主啊，謝謝祢讓我看見故事的結局：撒但將被永遠扔入火湖，而祢的孩子將永遠與祢同在。今天我還在爭戰的中途，有時感覺被快要將死。但我宣告：走最後一步棋的是祢，不是撒但。祢是全能者，祢不會拋棄祢手中的工作。讓末世的盼望成為今日的力量。奉耶穌的名祈求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
