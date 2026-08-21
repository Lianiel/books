import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book38Ch9() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">第九章</h1>
        <h2 className="text-xl font-semibold text-gray-700">滴滿脂油的路徑</h2>
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
              <h3 className="font-bold text-teal-800 text-lg mb-3">一、精油與德娜琳——一個穴居人的嗅覺覺醒</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸幽默地自嘲，自己對細節的觀察力向來遲鈍（他妻子德娜琳甚至打算寫一本書叫《我嫁了個穴居人》），但某天回家卻聞到一股令人身心舒暢的香氣，忍不住四處嗅聞。原來德娜琳買了一整包精油——沒藥、薰衣草、桂皮、穗甘松、肉桂、檀香——擴散在家裡、塗抹在皮膚上，甚至滴在水裡。他打趣說，這些精油被視為最古老的天然健康用品之一，數千年來人們從藥草、花朵和水果中提煉這些液體。他問：精油是否有助於我們理解聖靈能使人全然甦醒的力量？被油膏抹，通常是神的靈與我們同在的象徵。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">二、聖經中的膏抹——大衛、以利沙、亞倫祭司</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸列舉聖經中膏抹的例子：「撒母耳就用角裡的膏油，在他諸兄中膏了他。從這日起，耶和華的靈就大大感動大衛」（撒母耳記上十六章13節）；神吩咐以利亞「膏亞伯·米何拉人沙法的兒子以利沙作先知接續你」（列王紀上十九章16節）；神諭令摩西膏抹亞倫和他兒子，「將他們分別為聖，好給我供祭司的職分」（出埃及記二十八章41節）；獻給耶穌的敬拜詩歌說「你的神，用喜樂油膏你，勝過膏你的同伴」（希伯來書一章9節）；耶穌自己也宣告：「主的靈在我身上，因為他用膏膏我」（路加福音四章18節）。他總結：油、膏抹與聖靈之間有明確的關聯——「神賜給你的，不是我妻子抽屜裡的那些油，而是給你力量、能治癒心靈的聖靈膏油」（哥林多後書一章21-22節）。你的生命已因神的靈成聖、被揀選並被膏抹。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">三、澆灌，不是滴管——出埃及記三十章的聖膏油配方</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸引使徒行傳二章17節：「神說：在末後的日子，我要將我的靈澆灌凡有血氣的。」他特別強調「澆灌」這個詞——神不是用滴管或湯匙來分配聖靈，不是一點點、灑灑水或偶爾的天降甘露，而是「厚厚澆灌在我們身上」（提多書三章5-6節）。他引出埃及記三十章23-30節神吩咐摩西調製聖膏油的配方：流質的沒藥五百舍客勒、香肉桂二百五十舍客勒、菖蒲二百五十舍客勒、桂皮五百舍客勒，加上橄欖油一欣，用來膏抹會幕、法櫃、桌子、燈台、香壇、燔祭壇，以及亞倫和他的兒子。
              </p>
              <p className="text-gray-700 leading-relaxed">
                他幽默地分享，自己把這段經文拿給德娜琳看，提議複製這個配方，結果換算下來光是沒藥就要十萬多元、總油量大約要二十三公升——他形容這就像把近二十公升的冰桶全倒在贏球的橄欖球隊教練身上，絕不是一點點油而已。他引詩篇一百三十三篇2節描述亞倫的膏抹儀式：「油澆在亞倫的頭上，流到鬍鬚，又流到他的衣襟」——他整個人都被浸透了，油滲入皮膚毛孔、潤濕頭髮、沿衣袍下擺滴落到地面，「他的妻子可能在一個街區外就能聞到他的香味」。他說：這油不僅改變了他的氣味，還標誌了他的使命——「要膏亞倫和他的兒子，使他們成為聖，可以給我供祭司的職分」。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">四、更大的膏抹已經臨到你身上</h3>
              <p className="text-gray-700 leading-relaxed">
                陸可鐸說：我真希望你能感受到亞倫當時的感受，因為更大的膏抹已經臨到你身上——在你口裡相信、心裡承認主耶穌的那天，你被恩典覆庇了，上帝主權的帳幕披蓋在你身上，你千真萬確地得到了聖靈的膏抹，被分別為聖好完成聖工，正如約翰壹書二章20節所說：「你們從那聖者受了恩膏，並且知道這一切的事。」他鼓勵讀者不要用腰圍、房子大小、膚色、衣服品牌、薪水或Instagram追蹤人數來評價自己——「你的重要性遠超過這一切……你已經被聖靈膏抹，這改變了一切。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">五、聖靈無所不在——比耶穌肉身同在更好</h3>
              <p className="text-gray-700 leading-relaxed">
                陸可鐸提到，耶穌對門徒發表了驚人的聲明：祂的離去對他們有益處（約翰福音十六章7節）——他能想像門徒們眉頭緊鎖：還有什麼比耶穌的同在更好呢？他解釋：的確有，那就是讓聖靈內住在你裡面——耶穌將自己限制在有形的身體中，一次只能出現在一個地方；聖靈卻不受限制，無時無刻無所不在。他引詩篇一百三十九篇7-8節：「我往哪裡去躲避你的靈？我往哪裡逃、躲避你的面？我若升到天上，你在那裡；我若在陰間下榻，你也在那裡。」他總結：神已經用祂的靈澆灌你，使你不論在何處，永遠有聖靈與你同在——你是祂眼中特別的存在，是祂祭司團的一分子（彼得前書二章5節）。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">六、慕迪的紐約經歷——「求祢停手」</h3>
              <p className="text-gray-700 leading-relaxed">
                陸可鐸講述佈道家慕迪（Dwight L. Moody）的親身經歷：1871年夏天，他教會裡兩位婦女為他禱告「求主賜他聖靈與火的洗」，慕迪心裡不太舒服，卻仍每週五下午與她們一起禱告——他感覺自己的事工越來越像鳴的鑼、響的鈸，內在卻毫無能力。1871年11月，他的教會在芝加哥大火中被燒毀，他前往紐約尋求財務援助，不分晝夜在街上行走，渴望神的大能親自觸摸他。慕迪自述：「有天，真的是有天！我不知道如何形容……神向我顯現，祂給我這種愛的經歷，讓我不得不求祂停手。我再次開始講道，講道內容沒有不同，也沒有提出任何新的真理，卻有數百人歸信基督。就算現在你給我全世界，我也不願回到那次蒙福經歷之前的狀態。」陸可鐸說：神的膏抹就是這麼一回事——在你禱告、講道、發預言或實踐信仰時，是聖靈的同在賦予你能力。你會疲乏軟弱，但聖靈永不睏倦；你的智識有限，但聖靈有無法測度的智慧；環境可能讓你徬徨，但聖靈從不迷惘。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">七、悲傷的朋友——聖靈給出的洞察力</h3>
              <p className="text-gray-700 leading-relaxed">
                陸可鐸分享自己最近的經歷：一位摯友花了一小時抱怨對父親的失望——他們一起做生意，父親做了一些錯誤的決定，朋友非常惱火。陸可鐸感到困惑：既沒有財務損失、也沒有錯失良機，朋友為什麼這麼激動？他一邊聽一邊禱告：「主啊，這是怎麼回事？」腦海中浮現一個詞：悲傷。他告訴朋友：「你不是在生父親的氣，而是在哀悼他的衰退。重擔和責任正從他身上轉到你的肩膀上，其實你很悲傷，因為你很想念他。」這些話觸動了朋友，讓他淚流不止。陸可鐸說：聖靈透過我服事了我的朋友，而我所做的只是相信聖靈的同在，並信任我領受的膏抹足以完成眼前的任務——你也可以這麼做，聖靈會給你所需的一切，讓你完成祂所呼召的聖工，正如耶穌的事工如此有力量，是因為神「賜聖靈給他是沒有限量的」（約翰福音三章34節）；神對我們也是如此，祂從不吝嗇，祂是如此慷慨。他以保羅為以弗所教會的禱告作結：「求他按著他豐盛的榮耀，藉著他的靈，叫你們心裡的力量剛強起來」（以弗所書三章16節）——不要忽視你領受的恩膏，領受、相信，凡你所到之處都要滴下恩膏的脂油。
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
                '聖經中，膏油與聖靈的臨在緊密相連——大衛、以利沙、亞倫祭司都因受膏而被分別出來，承載神特別的恩典與使命。',
                '「澆灌」而非「滴管」，說明神給予聖靈的方式是慷慨、豐富、毫無保留的——正如亞倫全身都被聖膏油浸透，信徒也是這樣被聖靈厚厚澆灌。',
                '每一個因信接受耶穌的人，都已經領受了比亞倫祭司更大的膏抹——你的價值不在於外在的成就或條件，而在於已被聖靈分別為聖。',
                '聖靈的同在勝過耶穌肉身同在的限制——祂無所不在，使每個信徒無論身處何地，永遠都有聖靈與他同在。',
                '慕迪在紐約街頭經歷的「求祢停手」，說明聖靈的澆灌能徹底改變一個人事工的果效，而不需要改變講道的內容本身。',
                '聖靈會賜下超越我們天然能力的洞察力（如陸可鐸幫助朋友辨識出「悲傷」而非「憤怒」的真實情緒），只要我們願意倚靠祂、信任祂所賜的恩膏。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「聖靈的第二次澆灌」（如慕迪的經歷），與初信時領受聖靈有何不同？</h4>
              <p className="text-gray-700 leading-relaxed">
                教會歷史上不少屬靈偉人（如慕迪、芬尼）都描述過信主多年後，經歷一次特別強烈的聖靈充滿經歷，這與初信時領受聖靈（以弗所書一章13節）是否是同一件事，不同神學傳統有不同解讀——衛斯理宗、五旬節宗等傳統常將此理解為「第二次祝福」或「聖靈的洗」，改革宗傳統則更傾向理解為同一位聖靈在信徒生命中持續更深的充滿與更新（以弗所書五章18節「乃要被聖靈充滿」的現在式動詞，暗示這是一個持續反覆發生的過程，而非一次性事件）。無論神學立場如何，這些經歷共同的核心是：信徒可以、也應當持續渴慕更深地被聖靈充滿與使用。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">陸可鐸「聽見一個詞：悲傷」的經歷，該如何理解與操練？</h4>
              <p className="text-gray-700 leading-relaxed">
                這類經歷（在禱告或傾聽他人時，腦海中浮現一個特定的詞或意念，事後證明貼切且有幫助）在牧養與代禱的服事中相當常見，但不宜將其神祕化為只有屬靈偉人才能經歷的特殊能力。這種經歷同時也涉及對人性的細膩觀察與同理心，聖靈的工作往往是在人天然的敏銳度上加添超自然的確據與力量，而非完全繞過人的理解力運作。操練的方式，通常是在傾聽他人時，一邊保持專注同理，一邊安靜地在心裡向神提問、留心浮現的感動，並謙卑地以「我感覺到……不知道是否貼切」的方式分享，而非以絕對權威的口吻宣告。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">出埃及記三十章的聖膏油配方明確禁止被複製用於一般用途（出埃及記三十章32-33節），這對今日使用「精油」敬拜的做法有何提醒？</h4>
              <p className="text-gray-700 leading-relaxed">
                出埃及記三十章32-33節其實緊接著規定，這個配方「不可倒在別人的身上，也不可按這調和之法做與此相似的……擅自製造這樣的，要從民中剪除」——這是舊約特定時期、特定聖職禮儀的獨特規定，目的是保持聖膏油的神聖性、不被濫用於世俗用途。陸可鐸引用這段經文的重點，顯然不是鼓勵讀者複製這個配方或賦予某種精油屬靈能力，而是借用這個歷史畫面來說明「聖靈厚厚澆灌」的浩大與慷慨；讀者不必因此認為使用精油本身具有特殊屬靈意義，聖靈的澆灌不需要依附任何實體物品才能臨到。
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
              '你是否曾獲得新頭銜或擔任新角色（工作上的新職位，或生活中的新身分，如父母、長輩）？當時是否有儀式或慶祝來紀念這個改變？',
              '讀完聖經中大衛、以利沙、亞倫受膏的例子，你對「被聖靈膏抹」這個意象有什麼看法？這對你來說是熟悉還是陌生的概念？',
              '「你已被聖靈膏抹，這改變了一切。」你覺得聖靈的膏抹改變了你嗎？如果有，是什麼樣的改變？如果不確定，這會如何影響你對自己的看法？',
              '陸可鐸分享聖靈幫助他辨識出朋友真正的情緒是「悲傷」而非「憤怒」。聖靈是否曾以這種方式介入你的生活，賜給你原本沒有的智慧或洞察？',
              '如果你不斷提醒自己是受聖靈膏抹的人，帶著聖靈的權柄行事，你覺得你的一天會有什麼不同？',
              '你目前是否用一些外在的標準（如收入、外貌、社群媒體追蹤數）來評價自己的價值？「你已被聖靈膏抹」這個真理，如何挑戰這樣的評價方式？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 默想以弗所書三章16節</h4>
              <p className="text-gray-700 mb-2">用這節經文為自己禱告：「求祢按著祢豐盛的榮耀，藉著祢的靈，叫我心裡的力量剛強起來」，連續一週，每天早晨用這句話開始一天。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">👂 練習「一邊聆聽、一邊禱告」</h4>
              <p className="text-gray-700 mb-2">
                下次有人向你傾訴困擾時，在專注傾聽的同時，安靜地在心裡向聖靈提問：「這是怎麼回事？」留心是否有詞語或畫面浮現，並謙卑地分享你的觀察（而非武斷宣告）。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💎 寫下你的「身分宣告」</h4>
              <p className="text-gray-700 mb-2">
                寫一句提醒自己「已被聖靈膏抹」的句子，貼在鏡子或書桌前，取代那些用外在標準（薪水、外貌、追蹤數）評價自己的習慣性想法。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「聖靈，謝謝祢厚厚地澆灌在我身上，而不是吝嗇地一滴一滴給我。求祢提醒我，我已經被祢分別為聖、被祢膏抹，我的價值不在於世界的標準，而在於祢的恩膏。求祢賜給我完成祢呼召我去做之事所需的一切智慧與能力。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
