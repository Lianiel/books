import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check, Star, Search, HelpCircle } from 'lucide-react';

export default function Book24Ch9() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent">第九章</h1>
        <h2 className="text-xl font-semibold text-gray-700">接受饒恕與逃避追捕</h2>
        <p className="text-gray-500 mt-1">接受神的饒恕，學習在末世中生存（4.23-4.24）</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-green-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-green-700 text-base mb-2">4.23 接受神的饒恕——打破控告的枷鎖</h3>
              <p className="text-gray-700 leading-relaxed">
                主說：「耶和華說，你們來，我們彼此辯論，你們的罪雖像朱紅，必變成雪白；雖紅如丹顏，必白如羊毛。」
                （以賽亞書1:18）主接著說：「現在，我的百姓把注意力過多地放在罪上。罪像一座大山，
                壓在人們的心頭上。只有為數不多的人相信我已赦免饒恕了他們的罪。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主揭示了撒旦攻擊信徒最慣用的武器：「仇敵打擊基督徒，所使用的頭號武器就是內疚感和控告。
                他們的口號是『要想拖垮基督徒，時常提醒他們的罪。』令人痛心的是，這一招很管用！
                不過，事先預告，事先預備。如果你知道這是敵人攻擊的領域，你就以悔改的心，
                來到我面前，穿上全副的軍裝，投入戰鬥。撒旦摧毀基督徒，挫敗基督徒最有效的方法
                就是讓他們感覺自己不好，你明白嗎？如果你聽信謊言告訴你說，
                '你的罪根本沒有被饒恕！'那你就成為心靈戰場的犧牲品了。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主給出了非常溫柔的教導，以一個偷吃餅乾的孩子為例：「孩子們，你們覺得我是什麼樣的神呢？
                你們覺得我會抱著你的胳膊，把你拎起來，拖到房間裡，狠狠地揍你一頓，把你打得鼻青臉腫？
                還是你覺得我會讓你單獨在一個地方，好好想想所發生的事，過一會兒，
                我再跟你說，'知道自己哪兒錯了嗎？'『嗯，對不起！』你一邊說，一邊流淚。
                你覺得我會怎麼說？『我原諒了你，以後不要再犯罪了。』」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主繼續說：「相反，仇敵會毫不留情地，晝夜控告攻擊你。孩子們啊，要等到何時，
                你們才能分辨我的聲音和謊言的靈呢？何時才能真正地相信我的話，
                '我已經赦免饒恕你了嗎？'你們何時才能拉著我的手，繼續努力，而不是棄絕離開我，
                遠離我呢？岐知不知道結告果的果也是控告嗎？魔鬼批評指責你們，
                那是因為他們想讓你們彼此互相控告指責。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主最後發出充滿慈愛的呼召：「你們來，我們彼此辯論，你們的罪雖像朱紅，必變成雪白。
                難道我沒有救免饒恕大衛嗎？雖然他姦淫，殺人。難道我沒有饒恕法利賽人和羅馬官兵嗎？
                說，'父啊，他們不知道所做的。'如果我已經赦免了這些人，
                為什麼你們不能接受我的饒恕呢？百姓們，要長大成人！你們只有堅信我的慈愛和饒恕，
                才能奔赴戰場。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-green-700 text-base mb-2">4.24 主耶穌教導我們如何逃避追捕</h3>
              <p className="text-gray-700 leading-relaxed">
                主就末世的追捕和迫害給出具體的生存指南，這是整本書最實際的一章。
                主說：「帕們談一談這個國家（美國）的戰爭，飢荒和瘟疫的事情。末世的那幾匹馬，
                就是仇敵精心策劃的飢荒和疾病即將發生。這個國家正面臨著史無前例的死亡和毀壞。
                雖然我還沒有允許這些事情發生，但是大家都能感覺到災難即將來臨。
                不過大多數人沒有認識到這個國家的罪惡殺死了她自己。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主描述了被提後的世界秩序：「當這個國家分崩離析的時候，只有那些堅定跟隨我，
                持有不動搖信念的人才能逃脫災難。政府會開始重新組閣，準備推出敵基督政權。
                很多人已經被應徵參與地下城市（地下城堡）的服務工作。
                他們已經接受裝備訓練，隨時準備進入狀態。只是時間問題，一切準備就緒，
                就等著即刻投入行動。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                關於逃避政府追捕的具體建議，主說：「逃離政府管制的最佳時機就是在災害發生之後，
                在各種組織機構開始運作之前。因為那時政府以為很多人都死了。
                由於食物，飲水和醫藥物資的緊缺，政府會設置機構分發生活需品，他們會記錄哪些人還活著。
                沒有來領取物品的人，他們就斷定已經死了。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主還說：「那時，政府知道人們特別需要救濟和幫助，那些不需要政府救濟的人就很容易逃離，
                而不會被軟禁起來。到時候，那些被集中安置到一些臨時收容所。
                最一開始，這有點像政府提供的慈善服務，但其實是政府處置人的地方。
                無論如何，都不要去救濟站領東西。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主關於如何在野外生存：「我知道這個話題很重，但是我是預先警告那些願意聽從的人。
                那時唯一的出路就是完全依靠我給你們提供醫治和食物。其中一個最好的方法就是
                吃野生動物吃的食物，看看鳥兒和蜜蜂（如果你能找到的話）都到哪兒去找水。
                其實，一邊走一邊找食物可以幫助你們減肥。實在沒有食物的時候，
                我會以超自然的方式供應你們。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                最後，主發出最深情的結語：「在任何情況下，我都會在你的右邊陪伴你，
                隨時等著接你進入永恆。我在那裡為你預備了永遠的福樂。你會永永遠遠和我在一起。」
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
                '控告和罪疚感是撒旦最慣用的武器——真正接受神的饒恕，是屬靈爭戰的基本武裝。',
                '神的管教是愛，不是懲罰性的憤怒；認罪悔改後，神立刻恢復饒恕，不留記錄。',
                '逃離政府管制的最佳時機是災難剛發生後、新秩序尚未建立之前——時機至關重要。',
                '遠離政府的救濟站，因為那是管控和集中管理的場所；倚靠神的超自然供應而不是政府系統。',
                '不管在任何情況下，神始終在信徒身邊，等著在「最後一刻」接人進入永恆的福樂。',
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
              <h4 className="font-semibold text-gray-800 mb-2">控告與定罪的屬靈機制</h4>
              <p className="text-gray-700 leading-relaxed">
                啟示錄12:10稱撒旦為「在我們神面前晝夜控告我們弟兄的，已經被摔下去了」。
                這個描述揭示了魔鬼的核心策略之一——不斷提醒信徒他們的失敗和罪惡，
                使他們陷入羞恥和絕望。羅馬書8:1的「現在那些在基督耶穌裡的就不定罪了」
                是對抗這種攻擊的最有力的聖經真理。本書強調「真正接受饒恕」是屬靈爭戰的第一步。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">早期教會在迫害中的生存智慧</h4>
              <p className="text-gray-700 leading-relaxed">
                本書的末世逃生指引，讓人想起早期基督徒在羅馬迫害下的生活方式：
                使用暗號（魚形標誌）、地下墓穴聚會、保密的家庭教會網絡。
                現代迫害地區的地下教會（如中國、伊朗、北韓）也發展出類似的生存策略。
                這些歷史和當代案例說明，書中的建議並非遙不可及的末世幻想，
                而是世界各地信徒正在實踐的信仰生活方式。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「至死忠心」——末世最後的見證</h4>
              <p className="text-gray-700 leading-relaxed">
                書中描述在極端迫害下可能面臨死亡的信徒，主的應許是：
                「在你生命的最後幾秒內，因著憐憫和恩典，我會麻醉你的知覺。
                在你被帶到刑場行刑之前，我會讓超自然的平安環繞你。」
                啟示錄2:10「你務要至死忠心，我就賜給你那生命的冠冕」
                在本書的末世語境中，得到了最具體的詮釋——忠心不只是美德，
                更是末世信徒的最終見證和召喚。
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
              '你是否曾經長時間活在罪疚感和控告中，難以相信自己真的被神饒恕了？這種模式對你有什麼影響？',
              '主說神管教的方式是「我原諒了你，以後不要再犯罪了」——這個溫柔的神的形象如何影響你的悔改和信仰生活？',
              '想象自己處於末世的逃難情境中——你認為最難接受的是什麼？（放棄財產、離開家園、依靠神而非政府）',
              '書中對政府救濟站的警告非常具體——你如何在現實生活中，保持對「系統」的健康的批判眼光，同時不陷入偏執？',
              '主說「我永遠在你身邊，等著接你進入永恆」——這個應許如何改變你面對生命終結（自己的或所愛之人的）的態度？',
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 破除控告的日常操練</h4>
              <p className="text-gray-700 mb-2">每次感受到罪疚感的攻擊時，採取主動的屬靈行動。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>立刻認罪——不拖延，不自我責備太久</li>
                <li>大聲宣告：「主，我已認罪，你的話說『你罪雖像朱紅，必變成雪白』，我相信你的饒恕」</li>
                <li>如果內心繼續有控告的聲音，宣告：「這不是神的聲音，這是謊言，我拒絕它」</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 宣告饒恕的禱告</h4>
              <p className="text-gray-700 mb-2">讓「接受饒恕」成為每天的信仰宣告。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>每天早晨宣告以賽亞書1:18：「我的罪雖像朱紅，已變成雪白」</li>
                <li>記錄你已獲得饒恕的事情，提醒自己不再揹負舊賬</li>
                <li>也主動饒恕那些傷害過你的人，讓饒恕成為一個流動的循環</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 研讀末世中的早期教會</h4>
              <p className="text-gray-700 mb-2">從歷史中學習在迫害中信仰存活的智慧。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>閱讀使徒行傳中早期教會面對迫害的故事（第8章、12章）</li>
                <li>了解當代地下教會的信仰生活（如中國、伊朗）</li>
                <li>思考：如果你面臨同樣的處境，你會如何選擇？</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-2">
              <h4 className="font-semibold text-green-700 mb-2">🙏 本書終章禱告</h4>
              <p className="text-gray-700 italic leading-relaxed">
                「主耶穌，感謝你完整讀完這本書。我真實相信你的饒恕，
                不再讓控告的靈使我與你疏遠。求你讓我做好末世的預備——不是靠恐懼，
                而是靠著對你的愛和信靠。無論前路如何，我知道你永遠在我右邊。
                願你的旨意成就在我身上和這個世代中。阿們。」
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 結語 */}
      <div className="mt-8 bg-gradient-to-r from-blue-700 to-indigo-800 rounded-xl p-6 text-white text-center shadow-lg">
        <h3 className="text-xl font-bold mb-3">《盼望和教導》全書結語</h3>
        <p className="text-blue-100 leading-relaxed mb-3">
          本書透過作者珂萊爾的靈修日誌，呈現了主耶穌對末世信徒的深切教導和愛護。
          無論末世何時來臨，最重要的預備不是物質上的，而是靈魂上的——
          深深認識主、信靠主的愛，並在每一天中選擇跟隨祂。
        </p>
        <p className="text-blue-200 italic text-sm">
          「在任何情況下，我都會在你的右邊陪伴你，隨時等著接你進入永恆。
          我在那裡為你預備了永遠的福樂。你會永永遠遠和我在一起。」— 耶穌
        </p>
      </div>
    </div>
  );
}
