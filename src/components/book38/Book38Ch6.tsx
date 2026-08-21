import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book38Ch6() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    exploration: true,
    questions: true,
    practice: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">第六章</h1>
        <h2 className="text-xl font-semibold text-gray-700">平息一切混亂</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">一、斯瓦爾巴種子庫——我們渴望的避難所</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸介紹挪威斯瓦爾巴群島的全球種子庫（Svalbard Global Seed Vault）——用最高安全標準打造的超低溫地底碉堡，能儲存超過450萬種可供人類食用的植物種子，設計能抵禦洪水、火災甚至核子攻擊。他說：我們多數人沒有碉堡可以躲避，但災難的威脅可能會讓人想要一個——全球暖化、機密資訊外洩、核彈按鈕，這些都給人充分理由想買一張飛往斯瓦爾巴的機票。而除了全球性的災難，我們還要面對個人的危機：血球數過高、存款愈來愈少、婚姻亮紅燈、疫情肆虐、工作岌岌可危、壓力爆表、無法入睡、食不下嚥。
              </p>
              <p className="text-gray-700 leading-relaxed">
                他說：結果呢？焦慮就來敲門了。這種情緒不是軟弱、不成熟，或被邪靈掌控的表現，而是生活在一個快速變化、充滿挑戰的世界中自然會出現的狀態——焦慮不代表軟弱，但確實會削弱我們的力量，奪走睡眠、麻痹思緒、讓我們充滿恐懼。然而，你隨時的幫助就在這裡：聖靈，祂是當今世上平安的同在，能幫助你抵擋恐懼的聲音，引你靠近平安的同在。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">二、創世記的混亂與老鷹攪動巢窩的比喻</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸指出，聖靈在地球上做的第一件事，就是平息混亂：「地是空虛混沌，淵面黑暗；神的靈運行在水面上。」（創世記一章2節）他描述最早期的地球景象：熔岩四濺、隕石亂飛、波濤洶湧、黯淡無光，沒有生命、沒有光亮，只有混沌、深淵和奔騰的混亂——然而在那原始紛亂的時刻，聖靈第一次出現，「運行在水面上」。他指出，這個「運行」的動詞在聖經中很少出現，另一次出現也是在混亂情境下，描述上帝與古代以色列人的關係，如同老鷹盤旋保護雛鳥：「又如鷹攪動巢窩，在雛鷹以上兩翅搧展，接取雛鷹，背在兩翼之上」（申命記三十二章11節）。他形容：鳥巢裡充滿精力旺盛但經驗不足、毫無能力的幼鳥，這時母鷹來了，她的存在讓小鷹們平靜下來，她的供應滋養了牠們，任務很簡單：平息混亂。同樣，上帝的靈運行在水面上；一旦混亂平息，創造就得以開始：「地是空虛混沌，淵面黑暗；神的靈運行在水面上。然後神說：要有光，就有了光。」（創世記一章2-3節）陸可鐸總結：在上帝創造世界以前，聖靈先使世界平靜下來。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">三、聖靈如鴿子降臨——母性的慈愛</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸指出，舊約以聖靈的運行與安定的同在作為開頭，那麼新約前段看到聖靈如溫柔鴿子降臨，一點也不奇怪——他引馬太福音三章13-16節耶穌受洗的記載：「耶穌受了洗，隨即從水裡上來。天忽然為他開了，他就看見神的靈彷彿鴿子降下，落在他身上。」四本福音書都記載了這一刻，路加更提到聖靈是以「鴿子的形體降臨」。他問：聖靈在聖經裡有火、風、燈油、活水等許多不同樣貌，為何在基督的加冕儀式上，選擇以鴿子——而不是更適合「撲向撒旦這隻老鼠」的鷹，或象徵智慧的貓頭鷹——這樣溫柔柔和仁慈的形象降臨？
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                他認為，一部分原因在於聖靈帶有溫柔的母性——聖經時代鴿子被視為女性的象徵，希伯來文中「靈」這個字也是陰性詞，鴿子因獨特的產奶能力常被視為母性的象徵，牠們會在幼鴿出生前停止覓食，確保能為後代提供更純淨的奶。他分享自己觀察到，女兒回家心事重重時，第一個問題往往是「媽媽在哪？」——媽媽回應煩惱的方式與他不同：他傾向解決問題、提出策略，妻子德娜琳則以溫暖的同理心回應，傾聽、擁抱、讓她們暢所欲言。他說：有時我們需要父親的力量，上帝作為天父提供了這種力量；有時我們需要兄弟的情誼，耶穌作為屬靈的兄長給予這樣的支持；然而許多時候，當靈魂陷入煩擾和焦慮，我們渴望的是一位能帶來平靜安慰的慈愛母親——為此，我們轉向聖靈，祂撫慰人內心的喧鬧、狂暴、激動和憤恨，正如加拉太書五章22-23節所說：「聖靈所結的果子，就是仁愛……溫柔……」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">四、恐懼學校——撒旦散播焦慮的伎倆</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸引美國精神醫學學會2018年一項研究：51%的美國人表示自己感到焦慮，這是「焦慮」首次在這類問卷中占上風。他以生動的想像描繪撒旦「開了一所專門教導人們如何焦慮的學校」：一位專門教人製造恐慌的教授高舉瘦骨嶙峋的手指咆哮：「你們一定要在上帝兒女的心中種下憂愁的種子！最好的做法就是盡可能地誇大事實，在半夜把他們吵醒，讓他們沒辦法休息，確保他們總是做最壞的打算。」他列出魔鬼一次又一次重複的恐懼宣言：「沒有人會幫助我！一切都完蛋了！所有人都跟我作對！我永遠無法度過這個難關！」——這些惡魔畢業後只有一個任務：奪走人的信心，讓他們在惶惶不安中啃咬指甲，剝奪他們的睡眠。他問：牠們是否正在你耳邊低語？
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">五、保羅與西拉半夜唱詩——揚聲讚美勝過恐慌</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸指出，這個充滿壓力的社會發展出許多應對焦慮的技能——呼吸法、冥想、藥物、工作坊，這些方法確實有效，但對有聖靈內住的人來說，還有一個最強大的資源：向祂尋求幫助，藉由敬拜即刻轉向聖靈。他引以弗所書五章18-20節：「不要醉酒，酒能使人放蕩；乃要被聖靈充滿。當用詩章、頌詞、靈歌彼此對說，口唱心和地讚美主。」他解釋，保羅比較兩種應對內心混亂的策略：酗酒或歡慶——很多人試圖麻痹自己（不一定是酒精，也可能是長時間工作、購物、享樂），但這些方法都很短暫虛浮，走出酒吧時煩惱還在那裡等著。更好的選擇是歡慶：讓周遭充滿「詩章、頌詞、靈歌」，持續的敬拜能清理心靈垃圾，讚美則能挪去憂慮與焦慮。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                他以保羅和西拉在腓立比監獄的故事為例：他們被棍棒毆打得皮開肉綻，被關進又濕又冷、滿是老鼠的監牢最深處，雙腳還被上了木狗加重痛苦。他們從下午躺到晚上，孤伶伶身處異地、沒有人為他們發聲、傷口有感染風險、離家數百英里遠——但「約在半夜，保羅和西拉禱告，唱詩讚美神，眾囚犯也側耳而聽。忽然，地大震動，甚至監牢的地基都搖動了，監門立刻全開，眾囚犯的鎖鍊也都鬆開了」（使徒行傳十六章25-26節）。陸可鐸感嘆：真想聽聽他們那夜半的歌聲，他們唱得如此熱切，其他囚犯都聽見了——保羅和西拉不知道這個故事會如何結束，他們沒有讀過使徒行傳十六章，也不確定自己能否逃出生天，但他們對救主懷抱著偉大的信心，讀者也可以如此相信：與其恐慌害怕，不如揚聲讚美。
              </p>
              <p className="text-gray-700 leading-relaxed">
                他鼓勵讀者效法耶穌面對風暴的方式：「斥責風，向海說：『住了吧！靜了吧！』風就止住，大大地平靜了」（馬可福音四章39節）；面對附魔的人，「耶穌責備他說：『不要作聲！從這人身上出來吧』」（馬可福音一章25節）。他說：照樣效法吧！聖靈會賜你力量，你只需好好運用它——當恐懼的風暴來襲，起身對抗；當惡者逼近，斥責牠，在黑暗勢力面前站穩腳步，正如提摩太後書一章7節：「因為神賜給我們，不是膽怯的心，乃是剛強、仁愛、謹守的心。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">六、深夜失眠的實戰演練，與小麥斯剪頭髮的比喻</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸描繪一個具體的失眠情境：午夜了，從十點就開始嘗試入睡卻始終睡不著，明天有重要會議，深呼吸、數羊、聽講道都沒用，腦海千頭萬緒如萬馬奔騰，開始想像最糟的情況、氣惱地捶打枕頭、心跳愈來愈快。他說：過去的你可能整夜睜著雙眼，盯著黑暗；但全新的你即將誕生——被聖靈充滿、不再孤單無助，選擇即刻轉向上帝，舉起雙手來敬拜。他描述具體的做法：從床上爬起來、找一個安靜的角落、打開聖經禱告，讀那些應許聖靈賜下平安的經文，如詩篇三十四篇4-7節：「我曾尋求耶和華，他就應允我，救我脫離了一切的恐懼……耶和華的使者在敬畏他的人四圍安營，搭救他們。」選一首喜歡的詩歌聆聽或跟著唱，若一首不夠就多唱幾首，然後禱告、在靈裡呼喊，聖靈也在裡面禱告，把明天交託給慈愛的上帝，並且明確告訴魔鬼：「離開我！我屬於耶穌基督，你必須離開這裡。」他說：牠確實必須離開，而且真的會離開——你會馬上入睡嗎？可能會，但如果沒有，繼續努力。
              </p>
              <p className="text-gray-700 leading-relaxed">
                他以孫子小麥斯第一次剪頭髮的故事作結：十六個月大的麥斯還沒準備好面對這一刻，坐消防車、給糖果、卡通都沒用，看到陌生女人拿剪刀走近就開始哭泣，爸爸、奶奶輪番安慰都沒效，直到媽媽俯下身在他耳邊輕聲說了幾句話（旁人聽不到），麥斯雖然還是不高興，卻冷靜下來，順利完成理髮。陸可鐸總結：聖靈展現了上帝母性的慈愛，也會撫慰你——祂平息了創世時的混亂，祂如鴿子般降臨，深呼吸，放輕鬆，神的靈要做你隨時的幫助。
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
                '焦慮不代表軟弱，而是生活在快速變化世界中自然出現的狀態——但焦慮確實會削弱我們的力量，奪走睡眠、麻痹思緒。',
                '聖靈在創世記一章2節做的第一件事就是「運行在水面上」平息混亂，如同老鷹攪動巢窩、保護雛鳥——先有平靜，才有創造。',
                '聖靈在耶穌受洗時以鴿子的形象降臨，象徵母性溫柔的慈愛——當我們的靈魂陷入煩擾焦慮，需要的正是這樣一位帶來平靜安慰的同在。',
                '撒旦致力於散播恐懼、誇大事實、打擊信心；面對這樣的攻擊，讚美與敬拜是比酗酒、麻痹自己更持久有效的應對方式。',
                '保羅和西拉在腓立比監獄半夜唱詩讚美神的故事說明：與其恐慌害怕，不如揚聲讚美——即便不知道故事會如何結束，仍可以對救主懷抱信心。',
                '面對深夜失眠、焦慮來襲，具體的屬靈操練（禱告、敬拜、宣告聖經應許、斥退仇敵）比單純的助眠技巧更能帶來真正的平安。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「聖靈具有母性特質」的教導，是否意味著聖靈是「女性」？</h4>
              <p className="text-gray-700 leading-relaxed">
                陸可鐸指出希伯來文「靈」（ruach）是陰性名詞、鴿子在聖經時代常象徵母性，這是語言學與文化脈絡上的觀察，用來幫助讀者理解聖靈溫柔慈愛的一面，而不是主張聖靈具有生理性別。傳統基督教神學（包括天主教、東正教、絕大多數新教宗派）一致認為，三位一體的神超越人類的性別範疇，聖經用父、子、聖靈的位格語言，以及各種比喻性意象（風、火、水、鴿子、母鷹）來啟示神豐富的性情，這些意象彼此互補而非互斥。健康的理解方式是：這些意象幫助我們更全面地認識神的心腸，而不是要在「聖靈是男是女」這個問題上做出定論。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「焦慮是自然的狀態」與「因為信心不足才焦慮」這兩種觀點如何調和？</h4>
              <p className="text-gray-700 leading-relaxed">
                陸可鐸明確指出「焦慮不是軟弱、不成熟，或被邪靈掌控的表現」，這個立場對許多曾因焦慮而被論斷「信心不夠」的基督徒是重要的釋放。但這不代表基督徒可以對焦慮採取放任態度——腓立比書四章6-7節「應當一無罣慮，只要凡事藉著禱告、祈求，和感謝，將你們所要的告訴神」提醒我們，焦慮發生時，禱告與交託是神所賜的具體回應方式。健康的態度是：承認焦慮是人之常情、不必為此自責，同時積極運用禱告、敬拜、必要時尋求專業協助（心理諮商、醫療）等資源來面對它，而非用屬靈語言掩蓋真正需要處理的身心健康議題。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">保羅與西拉的敬拜帶來監獄地震的神蹟，是否代表「讚美必然帶來立即的解圍」？</h4>
              <p className="text-gray-700 leading-relaxed">
                這個故事確實極具戲劇性，但值得留意的是，聖經中同樣有許多信徒在患難中忠心敬拜、卻未必立刻經歷神蹟解救的例子（如希伯來書十一章35-38節提到那些「忍受戲弄、鞭打，捆鎖、監禁」卻沒有得到現世拯救的信心偉人）。這個故事真正的重點，或許不在於「敬拜必然帶來神蹟」的因果公式，而在於保羅與西拉即便不知道結局如何，仍選擇在極度痛苦中揚聲讚美——這種在不確定的處境中仍然信靠神、選擇敬拜而非恐慌的態度，才是這個故事給讀者最實際、最可持續操練的功課。
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
              '你最近為什麼事情感到焦慮？這股焦慮如何影響你的靈、身體與情緒？',
              '創世記一章2節說「神的靈運行在水面上」。你曾經歷過聖靈帶下的平靜嗎？如果有，你會如何描述那樣的經歷？',
              '想像耶穌受洗時聖靈如鴿子降臨的畫面：這個溫柔的形象，讓你對聖靈有什麼樣新的認識？你對「聖靈具有母性特質」這個說法有什麼感受？',
              '你通常如何應對焦慮？哪些方式有效，哪些方式效果不佳？',
              '你曾經藉由讚美或敬拜來對抗焦慮嗎？如果有，那是什麼樣的經歷？當我們因焦慮而感到疲憊時，讚美和敬拜如何帶來安慰？',
              '花些時間安靜下來，求聖靈帶下安慰。留意聖靈可能給予的任何安慰話語或平安的感受，並寫下來。',
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
              <h4 className="font-semibold text-green-700 mb-2">🎵 建立一份「半夜唱詩」歌單</h4>
              <p className="text-gray-700 mb-2">整理三到五首能帶來平安、讓你想跟著敬拜的詩歌，存在手機裡，下次焦慮或失眠來襲時隨時取用。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 抄寫詩篇三十四篇4-7節</h4>
              <p className="text-gray-700 mb-2">
                把這段經文寫在便利貼或手機備忘錄裡，放在容易看到的地方，下次感到恐懼焦慮時大聲讀出來。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🛌 演練「深夜失眠應對流程」</h4>
              <p className="text-gray-700 mb-2">
                參考本章描述的具體步驟：起身、找安靜角落、讀應許經文、唱詩敬拜、禱告交託、口頭宣告斥退仇敵——把這個流程寫下來，貼在床頭，下次失眠時直接照做。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「聖靈，求祢像運行在創世之初混沌水面上一樣，運行在我此刻焦慮混亂的心裡。求祢用祢母性的溫柔安慰我，平息我一切的驚慌與恐懼。幫助我在患難中仍選擇揚聲讚美，而不是被恐慌轄制。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
