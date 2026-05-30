import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Search, HelpCircle, Check } from 'lucide-react';

export default function Book18Ch11() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">第十一章</h1>
        <h2 className="text-xl font-semibold text-gray-700">我們作為信徒的挑戰</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">「現在/尚未」——信徒所處的時代</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                撒但就像住在死囚區的已經被定死罪的罪犯，他在苟且度日。弗雷德里克·萊西寫道：「撒但的攻擊雖然極其兇猛，但卻毫無得勝的盼望。他是個沒有權柄的篡位者。掌管世界的是上帝，而不是那個大騙子。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                基督在十字架上和復活的過程中打敗了撒但，不過撒但仍然在等候最後的行刑。我們基督徒所生活的時代是「現在/尚未」（now/not yet）時期——現在我們已經得救，但尚未處於將來在天堂中那種遠離撒但的狀態之中。
              </p>
              <p className="text-gray-700 leading-relaxed">
                這個差距有點像閃電與雷聲之間的時間差距。在基督的服侍、受死和復活過程中，撒但感覺到了來自天堂的閃電；在大審判那天，我們將會聽到撒但永恆毀滅的雷聲。作為生活在閃電和雷聲之間的信徒，我們的責任就是拆毀撒但在我們個人生活、教會和國家中的堡壘，靠著基督的能力不讓撒但實現他的目標。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">決心一：按照你在基督裡的身份生活</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                這是保羅在《羅馬書》第6章的核心信息：「這樣，你們向罪也當看自己是死的；向上帝在基督耶穌裡，卻當看自己是活的。」（第11節）罪在本性上是轄制我們的君王（羅5:21），是鎮壓我們的暴君（羅6:14），是要利用我們身體作為武器的將軍（羅6:13），是要在末日把死亡作為工價付給我們的雇主（羅6:23）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                但保羅的信息是：藉著恩典與耶穌基督聯合的人，也分享他的勝利，勝過罪的轄制。我們已經從罪的權勢下得了釋放——罪不能再掌控我們的生命，轄制我們，奴役我們。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                1863年，美國奴隸的《解放宣言》簽署時，很多奴隸沒有立刻得到消息，仍然像奴隸那樣思想和行事。保羅仿佛是在說：「親愛的弟兄，願我們不要像那樣。當撒但來試探我們，想要把我們帶回罪的捆綁之中時，讓我們對他說：『魔鬼，你來錯地方了。你如果想要得到我，必須到天上我的元首那裡去，因為我在他裡面。撒但，你不再是我生命裡的主人；我不必再向你交租金。』」
              </p>
              <p className="text-gray-700 leading-relaxed italic border-l-4 border-purple-200 pl-4">
                「我們不能繼續生活在罪中，因為從定義上來說，我們在罪上已經死了。」——保羅（羅6:2）
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">決心二：靠著信心勝過當今邪惡的世界</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                《約翰一書》5章4至5節說：「使我們勝了世界的，就是我們的信心。勝過世界的是誰呢？不是那信耶穌是上帝兒子的嗎？」勝過世界不是指統治他人，也不是從世界中隱退——逃離世界就像士兵為了避免受傷而從戰場上逃跑。勝過世界意味著：
              </p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>• 高過這個世界的思想和習俗，保守在基督裡的自由</li>
                <li>• 過舍己的生活——像亞伯拉罕，不知去向仍然順服，甚至準備獻上以撒</li>
                <li>• 耐心地忍受逼迫。司布真說：「嘲笑不能打斷人的骨頭；假如你有一根骨頭為了基督的緣故被打斷了，那將是你整個身體中最榮耀的一塊骨頭。」</li>
                <li>• 讓魔鬼和世人做你的敵人，要比讓他們做朋友好得多。「向你微笑的世界是個危險的地方。」</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">決心三：靠著基督的旗幟爭戰抵擋魔鬼</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                《雅各書》4章7節說：「務要抵擋魔鬼，魔鬼就必離開你們逃跑了。」抵擋意味著以堅定的決心，用自己的意志、思想、良心、心靈、能力和力量來反對他，絲毫不向魔鬼讓步。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「猶豫不決會使你失去下決心的機會，反而歡迎撒但來到你的家中。拖延會使你向撒但的詭計屈服。他會得寸進尺——向他屈服一寸，就鼓勵他來拿走你的全部。撒但不能忍受堅決果斷的反對。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們必須使用耶穌曾經用過的武器——上帝的聖道——與撒但爭戰。每次仰望髑髏地都會使撒但退卻。正如一位牧師對撒但的描述：「他每次看到髑髏地都會嚇得面色蒼白。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                《約翰一書》5章18節說：「從上帝生的，必保守自己，那惡者也就無法害他。」藉著成文之道聖經和永生之道基督耶穌，我們可以保守自己。那些在天上的人已經「藉著羔羊的血和自己見證的道」勝過了撒但。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">決心四：為基督多結果子</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                耶穌在《約翰福音》第15章說，只有常在基督裡面才能結出真正的果子。根據《加拉太書》5章22至23節，態度的果子是仁愛、喜樂、和平、忍耐、恩慈、良善、信實、溫柔、節制——這些不是我們裡面屬世的品德，而是救主屬靈品格的流露。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅用單數形式談到「果子」，這意味著這些品德不是分別形成的，而是作為一個整體一起形成的。當我們常在基督裡面時，聖靈使我們同時擁有所有這些果子。
              </p>
              <p className="text-gray-700 leading-relaxed">
                加爾文說，我們全部的生命「都必須是在敬虔中的操練」。最近有人調查了數千位參加教會活動的人，超過90%的人回答說，是受到那家教會某個成員敬虔的態度和行為的吸引。「如果你宣告了基督教信仰，永遠不要忘記世界在密切注視著你。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">決心五：不做魔鬼的工具</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                撒但不只直接誘惑我們，也通過另一個人間接誘惑——家庭成員、朋友、工作夥伴或陌生人。耶穌在《馬太福音》18章6至7節宣告：「凡使這信我的一個小子跌倒的，倒不如把大磨石拴在這人的頸項上，沉在深海裡。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                耶穌所指的那種大磨石，直徑有五英尺，厚幾英尺，非常沉重，必須由毛驢來推動。耶穌說，故意誘惑信徒犯罪的人，死了比活著更好——因為誘惑者對每個信徒的屬靈福益都是危險的，就像恐怖分子對我們屬世的福益是危險的一樣。
              </p>
              <p className="text-gray-700 leading-relaxed">
                底線是：不要以任何方式誘惑別人犯罪，做撒但的工具。每日禱告，祈求上帝幫助你永遠不損害救主的名。
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
              <h4 className="font-semibold text-gray-800 mb-2">「現在/尚未」的神學張力——如何在其中生活</h4>
              <p className="text-gray-700 leading-relaxed">
                「現在/尚未」（now/not yet）是新約神學的核心張力。撒但已經在十字架上被打敗（「現在」），卻還沒有被永遠投入火湖（「尚未」）。信徒已經從罪的轄制下得了釋放（「現在」），卻還沒有完全脫離罪的影響（「尚未」）。這個張力解釋了為什麼基督徒仍然會犯罪，卻不應當以此為藉口；也解釋了為什麼我們在現實中仍然受到試探，卻可以依靠基督的勝利來抵擋。在這個張力中生活需要謙卑（承認自己的軟弱）和信心（相信基督的勝利）同時並行，缺一不可。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「身份認同」作為抵擋試探的根基</h4>
              <p className="text-gray-700 leading-relaxed">
                本章強調按照「在基督裡的身份」生活，這一洞見在現代心理學和神學中都有深刻的共鳴。我們的行為往往跟隨著我們對自己的認知——如果我認為自己是罪的奴隸，我就會像奴隸一樣行事；如果我認識到自己是基督裡的自由人，我就會有更大的力量抵擋試探。耶穌在曠野受試探時，三次回應都以「上帝的話」為根基，同時隱含著對自己身份的確認：「我是上帝的兒子，不必靠這個來證明自己。」我們的屬靈爭戰，常常根本上是身份認同的爭戰。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">聖靈果子的「整體性」——品格不能單獨發展</h4>
              <p className="text-gray-700 leading-relaxed">
                本章提到保羅用單數「果子」而非複數「果子們」來描述聖靈的各種品格，這在神學上意義深遠。聖靈的果子不是我們可以「選擇性培養」的個別美德，就像選購一籃子水果一樣。它們是一個整體，一起成長或一起衰退。一個聲稱有愛心卻缺乏忍耐的人，可能連真正的愛心都沒有，因為《哥林多前書》13章告訴我們「愛是恆久忍耐」。這意味著我們的屬靈操練不是孤立地培養某個美德，而是整體地常在基督裡——當我們常在葡萄樹上，各種果子自然一起生長。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">間接誘惑的嚴重性——成為撒但工具而不自知</h4>
              <p className="text-gray-700 leading-relaxed">
                本章關於「不做魔鬼工具」的警告，讓我們想起《馬太福音》16:23中耶穌對彼得說「撒但退我後邊去吧」——彼得並不知道自己在那一刻成了撒但的工具。這提醒我們，我們可能在無意間成為誘惑別人犯罪的管道：不顧及他人感受的言語、對道德邊界漫不經心的生活方式、在社群媒體上分享有問題的內容……耶穌說「絆倒人的事是免不了的」，但那絆倒人的人有禍了。我們需要定期問自己：我的行為正在影響別人走向上帝，還是走離上帝？
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
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">1.</span>
              <p className="text-gray-700">「你不必向罪交租金了」——這個說法對你有何感觸？在你的日常生活中，哪些地方你仍然像《解放宣言》前的奴隸，活得好像撒但仍然是你的主人？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">「勝過世界」不是逃離世界，也不是統治世界，而是以信心高於世界。你在哪些領域最難保持這種「在世界中卻超越世界」的張力？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">本章說「猶豫不決是歡迎撒但進門」——你有沒有在面對試探時，因為猶豫而讓撒但佔了上風的經歷？那次經歷教了你什麼？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">回顧過去一週，你的生命有沒有結出聖靈的果子（仁愛、喜樂、和平、忍耐……）？是什麼阻礙了這些果子的生長？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">你有沒有曾經在無意間成為別人犯罪的誘因或絆腳石？當你意識到這一點時，你如何回應？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">本章的五個決心中，你覺得哪一個在你現在的生命階段最需要加強？你願意為此做出什麼具體的委身？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 每日宣告你在基督裡的身份</h4>
              <p className="text-gray-700 mb-2">根據《羅馬書》第6章，建立一個每日提醒的習慣：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>每天早晨起床時，在心裡或口中宣告：「我已經向罪死了，向上帝在基督耶穌裡是活的。」</li>
                <li>遇到試探時，提醒自己：「罪不再是我的主人，我不需要向它交租金。」</li>
                <li>睡前感謝上帝當天的勝利，並把失敗帶到十字架前，重新確認赦免的恩典</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 「果子評估」——每週反思</h4>
              <p className="text-gray-700 mb-2">每週末用5-10分鐘，誠實評估聖靈果子在你生命中的體現：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>仁愛：這週我有沒有愛那些難以愛的人？</li>
                <li>喜樂：這週我的喜樂是建立在環境上，還是建立在基督上？</li>
                <li>和平：這週我有沒有把平安帶給周圍的人？還是帶去了紛爭？</li>
                <li>忍耐：這週我在哪裡失去了忍耐？我如何可以做得更好？</li>
                <li>把評估帶入禱告，請求聖靈繼續做工</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 檢視自己對周圍人的影響</h4>
              <p className="text-gray-700 mb-2">「不做魔鬼工具」需要定期自我評估：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>我的言語今天有沒有使人傾向於罪，還是傾向於上帝？</li>
                <li>我分享的內容（網路、話語、行為）有沒有可能成為別人的絆腳石？</li>
                <li>如果意識到自己曾使人跌倒，要主動道歉並改正</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4 mt-4">
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic leading-relaxed">
                主耶穌，感謝你在十字架上打敗了撒但，使我從罪的轄制下得了自由。幫助我每天都能按照我在基督裡的身份生活，而不是按照舊人的習慣生活。當試探臨到時，使我立刻奔向你，以你的得勝為我的得勝。也使我的生命結出聖靈的果子，成為別人的祝福而非絆腳石。奉你聖名，阿們。
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
