import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch30() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第三十章</h1>
        <h2 className="text-xl font-semibold text-gray-700">神的兒子們</h2>
        <p className="text-gray-500 mt-1">當人在世上多起來、又生女兒的時候，神的兒子們看見人的女子美貌，就隨意挑選，娶來為妻。耶和華說：「人既屬乎血氣，我的靈就不永遠住在他裡面；然而他的日子還可到一百二十年。」那時候有偉人在地上，後來神的兒子們和人的女子們交合生子；那就是上古英武有名的人。創世記六1-4</p>
      </div>

      {/* 正文 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">正文</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">前言</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記六章記載，人類的罪惡不斷蔓延擴大，甚至邪靈的勢力全面性地侵入在世人當中，神非常憂傷，決定施行拯救與審判。願意悔改的人進方舟，不願悔改的人將被洪水毀滅。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                首先最凸顯的一個主題，就是「神的兒子們隨意娶妻」，這件事成為神審判毀滅人的起因。這件事在全地的普遍化，使得神說：「人既屬乎血氣，我的靈就不永遠住在他裡面；然而他的日子還可到一百二十年。」（創六3）關於一百二十年，有兩個解釋，第一個是指大洪水來臨前的年日，這是對當時的人說的，若這樣解釋，神就是在挪亞480歲時說了這話，到挪亞600歲大洪水來，就還有120年。神這樣的預告，是要人把握機會悔改。反對這解釋的人說，前面已經說挪亞五百歲生閃、含、雅弗，那就只剩100年，解套就是第六章稍有追溯，時間拉回到挪亞生孩子之前二十年。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                另一個解釋是指大洪水後人的壽命會減少至120歲，這是對將來歷代的人說的，這個解釋也合理，因為本來人的壽命幾乎都到九百多歲，對於活在罪惡中的人，這實在太長久了，人對死亡沒感覺，比較不會悔改。既然罪惡猖狂，將人壽命的上限減至120年，可以促使人更多面對死亡，比較有機會悔改，因為人的盡頭是神的開頭。這事藉著大洪水滅世來成就，因為那用來保護人、助人長壽的天上水氣層破損了，在四十晝夜的大雨當中全部降下來了，從此以後人的壽命急劇下降，一直到120歲的水平，才穩定下來。
              </p>
              <p className="text-gray-700 leading-relaxed">
                關於神的兒子們歷來有三種解釋，以下第一段先列出聖經中使用「神的兒子們」的三種用法，第二段再分享這三種觀點的內容，並分析其合理性。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、三種用法</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記六1-2：「1當人在世上多起來又生女兒的時候，2神的兒子們看見人的女子美貌，就隨意挑選，娶來為妻。」若神的兒子是單數，就有可能指神的獨生子耶穌基督。但經文是複數，所以一定不是指聖子基督，這樣在整本聖經中有以下三種用法：<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（艾倫．羅斯，《創造與祝福──創世記註釋與信息》，頁221）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">一、天使</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                約伯記一6：「有一天，神的眾子來侍立在耶和華面前，撒但也來在其中。」經文中神的眾子就是神的兒子們，很明顯是指天使們，因為天使是侍立在耶和華面前的，而撒旦也在其中，撒旦原也是神的兒子，現在是墮落的兒子，平常不在天上，但有時仍會回到神那裡去控告地上的人。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                約伯記卅八4、7的用法，與一6有呼應：「我立大地根基的時候，你在那裡呢？……那時，晨星一同歌唱；神的眾子也都歡呼。」經文中的時間點是神在立大地根基時，那時人還未被造，因人是用地上的塵土所造，必需先有地才能造人，但經文卻說有神的眾子在歡呼，所以神的眾子乃是指天使。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                詩篇八十九6：「在天空誰能比耶和華呢？神的眾子中，誰能像耶和華呢？」在天空中的不會是人，只能是天使。因此神的眾子是指天使，他們有榮光，但不能跟神相比，神是榮光的源頭，他們只是反映神的榮光。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">二、信神的人、神的子民、屬神的百姓</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                出埃及記四22神跟摩西說：「你要對法老說，耶和華這樣說，以色列是我的兒子，我的長子。」神說以色列民族是他的兒子，是單數。詩篇廿九1：「神的眾子啊，你們要將榮耀、能力歸給耶和華，歸給耶和華。」這是大衛對著以色列百姓說的話，所以神的眾子是指以色列的百姓，是複數。約翰福音一12：「凡接待祂的，就是信他名的人，他就賜他們權柄，作神的兒女。」「神的兒女」原文是神的孩子們，是指信靠基督的人。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">三、掌權者、審判官</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                詩篇八十二1、6：「神站在有權力者的會中，在諸神中行審判。……我曾說：你們是神，都是至高者的兒子。」經文中「至高者的兒子」就是神的兒子，是指前面的有權力者，也就是掌權者。第一節的「諸神」，有可能是指天使，如同以弗所書六12所提天空中執政的、掌權的。但主耶穌曾引用詩八十二篇說：「那些承受神道的人尚且稱為神」（約十35），所以這裡的諸神、神的兒子們，也可能是指地上掌權的人。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                出埃及記廿一6：「他的主人就要帶他到審判官（或作神）那裡，又要帶他到門前，靠近門框，用錐子穿他的耳朵，他就永遠服事主人。」出廿二8-9：「若找不到賊，那家主必就近審判官，要看看他拿了原主的物件沒有。……兩造就要將案件稟告審判官，審判官定誰有罪，誰就要加倍賠還。」以上三處經文的審判官，原文都是「神」這個字，這表示地上的審判官、掌權者也可以稱為神或神的兒子。這對於華人，不難理解，因為中國的君王四千多年來都稱為天子，意思就是神的兒子。在其他許多古老國家，君王也會稱為神或神的兒子。
              </p>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-indigo-700">小結</span>──若按聖經內容及寫成年代來看，約伯記和創世記同為最古老的經卷，那時以色列尚未成國，神的兒子比較可能是指掌權者或天使。比較晚期有了以色列民族後，神的兒子才開始用來指神的百姓，單數的「神的兒子」用來指以色列民族是在摩西的時候，複數的「神的眾子」用來指以色列百姓則已經到大衛的時候了。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、三種解釋</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                按上下文來看，這三種用法相對應三種解釋如下：
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">一、墮落的天使附身於人，人與邪靈相交帶來大審判</span><span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（亞金森贊成神的兒子是指天使，也可指掌權者。亞金森，《創世記1-11章》，頁161-162）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                若是指天使，最大的問題在於天使沒有物質的身體，只有靈體，如何跟有身體的人結婚呢？只有一種方法，乃是藉著附身在人身上，才能做這事。若這樣解釋，有一個伏筆是在創世記三14，那裡說到蛇要終身吃土，也就是墮落的天使、魔鬼、邪靈，將要以地上的物質為食物，不再能以神的榮光、神的話為食物。以至於邪靈就會來附身在人或動物身上，通過人或動物來進行享樂，這享樂可包括飲食與性關係。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                第四節說到那時有偉人在地上，偉人原文是巨人。以色列人攻打迦南地時（民十三25、32-33），曾派探子先去勘察，結果他們發現迦南地有很多巨人（偉人），實際考證其身高約有二、三公尺，有可能因人與邪靈相交，而使人長得特別高大強壯，且有特別大的力量。路加福音八27-29記載，一位被鬼附身的人，能夠將鐵鍊和腳鐐掙斷，後來耶穌將他身上的鬼趕出去，使他成為正常人。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                大約三十年前台灣有個司法案件，一位劉姓的廟公早已結婚，卻又先後娶了很多來廟裡拜拜的年輕女子，這些女子的父母告他重婚罪，法院開庭時他答辯說：「我是善良的老百姓，只娶一個女子為妻，就是我的原配。其他女子都是天上神明娶的，神明指示要藉著我來娶她們，我順服神明的指示，而她們也願意嫁給神明。」有記者問他問題，他一時不知如何回答，忽然卻有另一個聲音回答出來，這過程被錄下來，電視報導時有此錄影的呈現。所以邪靈（墮落的天使）要與人發生性關係，可以藉著附身在人身上而行，而女子藉著與廟公發生性關係表明將自己奉獻給神明，這種事在各國異教之中很盛行。邪靈可附在廟公或廟妓身上與人產生性關係。這是神非常恨惡的事，神所創造的神聖婚姻單單屬於人類的一夫一妻，但邪靈入侵，使人跟邪靈結合，將神聖的婚姻轉變成為人與邪靈假神親密的事。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                洪水毀滅世界前和迦南地被毀滅前，鬼附的事與淫亂的事都很普遍。現今也看到，鬼附及淫亂的事愈來愈普遍，這兩件事是相關的，邪靈附身會助長淫亂，淫亂會助長邪靈附身。同時我們看到婚姻正在瓦解之中，各種不法的性關係被頌揚、推廣，與魔鬼邪靈充分合作。既然如此，代表神審判的日子已近了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                人有淫亂關係，起因通常是心理因素，因缺乏愛，導致去追求肉體之愛，但踏進去後就會衍生出邪靈附身的可能。邪靈通常不會附身在有合法性關係的人身上，但會附身在不合法性關係的人身上。放縱情慾的人違背神創造的原則，使得邪靈有理由附身在人身上，去享受跟人的性關係。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">二、信神與不信神的人通婚，造成罪惡更加蔓延不可收拾</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這個觀點是說，塞特的後裔是信神的，該隱的後裔是不信神的，人類的兩大族群起初不相通婚，到了末後階段，開始通婚，導致罪惡蔓延全世界。華人教會比較多認同這個解釋，主要是引用「信與不信不能同負一軛」的原則，也舉所羅門王娶外邦公主，以致不專心敬拜神的例子。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這種觀點最大的困難在於「人的女子」的解釋。若將創世記六2中「神的兒子」講為塞特的後裔，「人的女子」講為該隱後裔中的女性，那麼創世記六1所說的「人」就是該隱的後裔。然而從上下文來看，整個第五章都在講塞特的後裔生養眾多，第六章一開頭講人多起來，理當是指塞特後裔或所有人，不合適解釋為該隱的後裔。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                嚴格說起來，在以色列歷史中，神在意的是這人是否信靠神，而不是他的肉身血統是否為純種以色列人。譬如，以色列十二先祖的妻子大部分是迦南女子；妓女喇合是外邦女子，但她願意信靠上帝，嫁給以色列人，生出波阿斯，她的後代有很好的發展。接著是摩押女子路得嫁給波阿斯，成為大衛的曾祖母。所以重點不在於肉身血統，乃在於信仰的抉擇。這原則適用於以色列，也適用於塞特的後代。同樣娶外邦女子，撒門沒問題，波阿斯也沒問題（太一5），所羅門卻有問題。因此，所羅門的問題主要不是娶外邦女子，而是因為他是君王，可以娶「很多」外邦女子，造成放縱情慾，且因著寵愛她們而跟著拜她們的假神偶像。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                歐洲人本來都信耶穌，後來逐漸偏離神，原因不是嫁娶異教徒，而是他們本身失去信仰，塞特的後裔失去信仰也可能是如此。從塞特到以挪士，一直到以諾、瑪土撒拉等，可能都是以很狹窄的範圍傳承信仰，其他多數人老早就偏離神了。不是等到他們成為很大的民族，才跟別民族通婚而墮落。該隱的後裔全都離棄神，塞特的後裔也只有少數人信靠神，多數人都離棄神，不是通婚的影響，而是自己選擇的。例如，挪亞的父親是拉麥，他是敬畏神的人，但他生的兒子中只有挪亞進方舟，其他的兒子都沒有進方舟；拉麥的父親是瑪土撒拉，瑪土撒拉是跟隨神的人，但他所生的孩子很可能只有拉麥跟隨神；瑪土撒拉的父親是以諾，以諾與神同行三百年，而他所生的孩子中也只有瑪土撒拉有多代傳承，其他孩子可能自己不信，或沒有往下傳承。這是洪水前信仰傳承的情況：以諾到瑪土撒拉（五21-22）到拉麥（五26）到挪亞（五28-29），很可能都只有單傳。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                洪水以後的情況也大致如此，挪亞的兒子只有閃傳承正確信仰，閃的後代只有希伯傳承信仰，希伯的後代只有他拉、亞伯拉罕這一支信靠神。亞伯拉罕的後代是以實瑪利（十六16）和以撒（廿一3），以實瑪利漸行漸遠，只有以撒走在神裡面；以撒的後代有雙胞胎的以掃和雅各，以掃不敬拜神，只有雅各跟隨神；雅各有十二個兒子（廿九32-卅24），只有約瑟有神同在，走在神的旨意中。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                後來摩西帶領以色列出埃及，以色列百姓幾乎全部在拜偶像（出卅二1-6），士師時代也是如此，只有極少數的人敬畏神、跟隨神。到王國時期，只有大衛家族勉強還有人跟隨神，其他人幾乎都在拜偶像。舊約時代的信仰傳承只在少數人，直到耶穌基督出生後才扭轉這樣的局勢，聖靈時代的開啟，使屬神的百姓真正開始擴大。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">三、掌權者強取一般民間女子為妻</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神的兒子指掌權者，這符合聖經的用法，也符合古代的情況。在中國，君王就稱天子，也就是神的兒子。按這個解釋，人的女子就是民間的女子，而掌權者所生的這些兒子成為上古英武有名的人，也很合理。因為他們在宮廷長大，有最多的資源來栽培他們。這樣的作法，表面上無可厚非，實際上乃是情慾的放縱。君王仗著權勢，隨意強取美貌女子為妻，造成多妻妾、多嬪妃，甚至後宮三千的情況，不僅違反神所設立一夫一妻的婚姻，也使這些妻妾嬪妃喪失了擁有正常婚姻家庭的基本人權。在後宮守活寡乃是最不人道的事情之一。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                順著聖經本身的脈絡，拉麥開始多妻，乃是一個伏筆，該隱後裔多發展民生科技也是一個伏筆，他們更可能在全地成為掌權者，類似君王。若這樣，則神的兒子可能比較多是該隱的後裔，而人的女子，也就是民間的女子，則塞特的後裔與該隱的後裔都有。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                中國歷代君王看到美貌女子，就會強行宣召入宮，也會委託臣子幫忙找美貌的女子來作為嬪妃；其他國家的君王大致也是如此。這些君王如此做，在神眼中是罪大惡極的。洪水以前，這些掌權者，隨意強娶民間女子為妻，使得整個世界彌漫著縱慾的罪惡，只剩下挪亞一家人走在神的道路上，其他世人都偏離了神。神不容許這樣的事情繼續延續下去，於是施行審判，以洪水毀滅全地。
              </p>
              <p className="text-gray-700 leading-relaxed">
                第三種解釋和第一種解釋可以有關聯，因為掌權者放縱肉體情慾而強娶很多女子為妻時，很容易就給邪靈開了門，使邪靈附在他們身上。邪靈藉此享受跟人在淫亂之中的性關係。同時，這些掌權者因為縱慾也很快會因精力耗盡而早逝。「耶和華說：人既屬乎血氣，我的靈就不永遠住在他裡面……」屬乎血氣就是屬地的。人本來可以同時跟地有生命連結，也跟神的靈連結。但現在不跟神的靈連結，只跟地連結，魔鬼被神咒詛之後也成為屬地的（終身吃土），當人屬乎血氣，只跟地連結，一定也會與魔鬼邪靈連結。這促使神痛下決心，施行洪水審判。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                我們看到洪水前的情況，對照現今的情況，真的非常相似。現今世上的各級掌權者大部分都被撒旦利用，在權力、金錢、性三方面犯罪，雖不一定被邪靈附身，但不知不覺與撒旦合作，是很普遍的。特別在性關係的事上，各國各族都愈來愈開放，甚至使用教育系統來教導、誘導婚姻外的性關係，直接對抗神所設立的聖潔婚姻。這也會造成人與撒旦的關係愈來愈親密，而與神的關係愈來愈遠。我們一方面禱告神在各級掌權者身上動工，使他們悔改歸向主，一方面仍然要努力生養敬虔後裔，包括肉身兒女與屬靈兒女，基督徒在家教育、基督徒實驗學校、基督徒育幼院都需要更多啟動及擴張，才能在生活中以生命影響生命，培育出末後世代的國度人才、神國大軍，以打贏最後一場屬靈爭戰。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 重點整理 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-sky-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">重點整理</span>
          </div>
          {expanded['summary'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['summary'] && (
          <div className="p-5 bg-white">
            <ul className="space-y-3">
              {[
                '「神的兒子們隨意娶人的女子」是洪水審判的引爆點；「他的日子還可到一百二十年」有兩解：洪水前尚餘120年給人悔改，或洪水後人的壽命上限減至120歲，促使人面對死亡而悔改。',
                '聖經中「神的兒子們」有三種用法：天使（伯一6、卅八7、詩八十九6）、信神的人／神的子民（出四22、詩廿九1、約一12）、掌權者／審判官（詩八十二1,6、出廿一6）。',
                '解釋一（墮落天使附身於人）：天使是靈體，只能藉附身與人相交；巨人（偉人）可能與此有關；鬼附與淫亂互相助長，是神所恨惡的，現今世界正重演這光景。',
                '解釋二（塞特後裔與該隱後裔通婚）的困難：上下文中「人」不宜解為該隱後裔；且聖經看重的是信仰抉擇而非血統——信仰的失落多是自己的選擇，洪水前後的信仰傳承常常只有單傳。',
                '解釋三（掌權者強取民間女子）最符合聖經用法與古代情況：君王仗權勢多妻縱慾，違反一夫一妻並剝奪女子人權；此解可與解釋一關聯——縱慾給邪靈開門，使人只屬乎血氣、與魔鬼連結，促使神施行洪水審判。',
                '應用：為各級掌權者悔改禱告，同時努力生養敬虔後裔（肉身與屬靈），培育末後世代的國度人才，打贏最後一場屬靈爭戰。',
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

      {/* 分享題目 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-yellow-50 hover:from-amber-100 hover:to-yellow-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">分享題目</span>
          </div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && (
          <div className="p-5 bg-white space-y-4">
            {[
              '聖經中，「神的兒子們」有哪三種用法？請分享相關的經文。',
              '神審判的重要關鍵之一是「神的兒子們隨意娶人的女子為妻」，這事如何解釋？各種觀點中，最合適的觀點是甚麼？談談你的理解與應用。',
              '面對末後的大爭戰，我們當如何為國家禱告？當如何進行肉身生養與屬靈生養？',
            ].map((q, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0 text-lg">{i + 1}.</span>
                <p className="text-gray-700 leading-relaxed">{q}</p>
              </div>
            ))}

            <div style={{ fontSize: '16px' }} className="mt-2 bg-amber-50 border border-amber-100 rounded-lg p-4 space-y-3 text-gray-700 leading-relaxed">
              <p className="font-semibold text-amber-700">第一題參考答案</p>

              <div>
                <p className="font-semibold text-indigo-700 mb-1">一、指天使</p>
                <p className="mb-2">在約伯記等較早期的經文中，「神的眾子」明顯是指天上的靈界受造者，也就是天使。</p>

                <p className="font-medium text-gray-600">約伯記一章6節</p>
                <p className="italic mb-1">有一天，神的眾子來侍立在耶和華面前，撒但也來在其中。</p>
                <p className="mb-2">這裡的「神的眾子」是在耶和華面前侍立的天上眾靈，因此通常理解為天使；撒但也出現在其中。</p>

                <p className="font-medium text-gray-600">約伯記三十八章4、7節</p>
                <p className="italic mb-1">我立大地根基的時候，你在哪裏呢？你若有聰明，只管說吧！那時，晨星一同歌唱；神的眾子也都歡呼。</p>
                <p className="mb-2">神立大地根基時，人類尚未被造，但「神的眾子」已經在歡呼，因此這裡不可能是指人，而是指天使。</p>

                <p className="font-medium text-gray-600">詩篇八十九篇6節</p>
                <p className="italic mb-1">在天空誰能比耶和華呢？神的眾子中，誰能像耶和華呢？</p>
                <p>經文所描寫的是天空中的群體，所以這裡的「神的眾子」也可理解為天使。他們雖有榮耀，卻不能與耶和華相比。</p>
              </div>

              <div>
                <p className="font-semibold text-indigo-700 mb-1">二、指信神的人、神的子民、屬神的百姓</p>
                <p className="mb-2">「神的兒子」也可以表示與神有立約關係、屬於神的百姓，包括舊約的以色列人，以及新約中信靠基督的人。</p>

                <p className="font-medium text-gray-600">出埃及記四章22節</p>
                <p className="italic mb-1">你要對法老說：「耶和華這樣說：以色列是我的兒子，我的長子。」</p>
                <p className="mb-2">這裡雖然使用單數「我的兒子」，卻是指整個以色列民族。重點不是肉身上的生育關係，而是以色列蒙神揀選、與神立約，屬於神。</p>

                <p className="font-medium text-gray-600">何西阿書一章10節</p>
                <p className="italic mb-1">從前在甚麼地方對他們說：「你們不是我的子民」，將來在那裏必對他們說：「你們是永生神的兒子。」</p>
                <p className="mb-2">這裡的「永生神的兒子」是指蒙神恢復、重新成為神子民的人。</p>

                <p className="font-medium text-gray-600">羅馬書八章14節</p>
                <p className="italic mb-1">因為凡被神的靈引導的，都是神的兒子。</p>
                <p className="mb-2">在新約中，信靠基督、被聖靈引導的人，被稱為神的兒女。</p>

                <p className="font-medium text-gray-600">加拉太書三章26節</p>
                <p className="italic mb-1">所以，你們因信基督耶穌都是神的兒子。</p>
                <p className="mb-2">這裡清楚說明，人不是因血統或身分，而是因信基督成為神的兒女。</p>

                <p>因此，這一類用法可以概括為：以色列、信神的人、神的子民或屬神的百姓。</p>
              </div>

              <div>
                <p className="font-semibold text-indigo-700 mb-1">三、指君王、審判官或掌權者</p>
                <p className="mb-2">古代近東的君王常被稱為神明的兒子；聖經有些地方也以「神」或「至高者的兒子」來形容在地上代表神施行治理與審判的人。</p>

                <p className="font-medium text-gray-600">詩篇八十二篇1節</p>
                <p className="italic mb-1">神站在有權力者的會中，在諸神中行審判。</p>
                <p className="mb-2">這裡的「諸神」可以理解為地上的審判官或掌權者。他們不是本質上成為神，而是因承擔神所授予的審判職分，以神的權柄治理百姓。</p>

                <p className="font-medium text-gray-600">詩篇八十二篇6節</p>
                <p className="italic mb-1">我曾說：「你們是神，都是至高者的兒子。」</p>
                <p className="mb-1">這些人被稱為「至高者的兒子」，但下文隨即指出：</p>
                <p className="italic mb-1">然而，你們要死，與世人一樣；要仆倒，像王子中的一位。（詩八十二7）</p>
                <p className="mb-2">可見他們並非真正具有神性，而是地上的君王、審判官或掌權者；他們若不按公義審判，也要受到神的審判。</p>

                <p className="font-medium text-gray-600">約翰福音十章34至35節</p>
                <p className="mb-1">耶穌引用詩篇八十二篇說：</p>
                <p className="italic mb-2">你們的律法上豈不是寫着「我曾說你們是神」嗎？經上的話是不能廢的；若那些承受神道的人尚且稱為神……</p>
                <p className="mb-2">耶穌的引用表明，那些領受神話語、代表神執行權柄的人，可以在職分意義上被稱為「神」，並不是說他們具有神的本質。</p>

                <p className="font-medium text-gray-600">出埃及記二十一章6節；二十二章8至9節</p>
                <p>這些經文中的「審判官」，希伯來原文使用的是 אֱלֹהִים（Elohim），也就是通常翻譯為「神」的字。這說明地上的審判官因代表神施行審判，在特定語境中可以用「神」或「神的兒子」一類稱號來描述。</p>
              </div>

              <div>
                <p className="font-semibold text-indigo-700 mb-2">簡單整理</p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="bg-amber-100">
                        <th className="border border-amber-200 px-3 py-2">用法</th>
                        <th className="border border-amber-200 px-3 py-2">所指對象</th>
                        <th className="border border-amber-200 px-3 py-2">主要經文</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-amber-200 px-3 py-2">天使</td>
                        <td className="border border-amber-200 px-3 py-2">天上的靈界受造者</td>
                        <td className="border border-amber-200 px-3 py-2">伯一6；三十八4、7；詩八十九6</td>
                      </tr>
                      <tr>
                        <td className="border border-amber-200 px-3 py-2">神的子民</td>
                        <td className="border border-amber-200 px-3 py-2">以色列及信靠神的人</td>
                        <td className="border border-amber-200 px-3 py-2">出四22；何一10；羅八14；加三26</td>
                      </tr>
                      <tr>
                        <td className="border border-amber-200 px-3 py-2">掌權者</td>
                        <td className="border border-amber-200 px-3 py-2">君王、審判官、治理者</td>
                        <td className="border border-amber-200 px-3 py-2">詩八十二1、6；約十34–35；出二十一6；二十二8–9</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p>
                所以，「神的兒子們」不是一個在所有經文中都只能指同一對象的固定稱呼。解釋創世記六章1至4節時，必須再根據經文年代、上下文和整段敘事，判斷它究竟是指天使、屬神的百姓，還是當時的君王與掌權者。莊東傑博士在書中接著正是依照這三種用法，分析創世記六章的三種主要解釋。
              </p>
            </div>

            <div style={{ fontSize: '16px' }} className="mt-2 bg-amber-50 border border-amber-100 rounded-lg p-4 space-y-3 text-gray-700 leading-relaxed">
              <p className="font-semibold text-amber-700">第二題參考答案</p>

              <div>
                <p className="mb-1">創世記六章1至4節記載：</p>
                <p className="italic mb-2">當人在世上多起來、又生女兒的時候，神的兒子們看見人的女子美貌，就隨意挑選，娶來為妻。……那時候有偉人在地上，後來神的兒子們和人的女子們交合生子；那就是上古英武有名的人。</p>
                <p>這段經文位於洪水審判之前，重點並不只是發生了一些婚姻，而是人類的婚姻、情慾與權力已經完全脫離神所設立的秩序。「隨意挑選」表明他們不是在神面前慎重地建立婚姻，而是看見美貌，就按照自己的慾望和權勢任意取得女子。接著，神宣告人已經屬乎血氣，並預告審判即將來臨。</p>
              </div>

              <div>
                <p className="font-semibold text-indigo-700 mb-2">一、「神的兒子們」的三種主要解釋</p>

                <p className="font-semibold text-gray-800 mb-1">1. 墮落天使說</p>
                <p className="mb-1">這一觀點認為，「神的兒子們」是墮落的天使或邪靈。</p>
                <p className="mb-1">主要根據是約伯記中的相同稱呼：</p>
                <p className="italic mb-1">有一天，神的眾子來侍立在耶和華面前，撒但也來在其中。<span className="not-italic text-gray-500">──約伯記一章6節</span></p>
                <p className="italic mb-2">那時，晨星一同歌唱；神的眾子也都歡呼。<span className="not-italic text-gray-500">──約伯記三十八章7節</span></p>
                <p className="mb-2">約伯記中的「神的眾子」確實是指天上的靈界受造者。因此，有人認為創世記六章也應該採用同樣意思。加上創世記六章4節提到「偉人」和「上古英武有名的人」，便有人推測，這是墮落天使與女子結合後所生的特殊後代。莊東傑博士也承認，若單從古老時代的用語來看，把「神的兒子們」理解為天使，是有相當根據的。</p>
                <p className="mb-1">但這個解釋有幾個難處。</p>
                <p className="mb-1">第一，耶穌說天使「也不娶也不嫁」：</p>
                <p className="italic mb-1">當復活的時候，人也不娶也不嫁，乃像天上的使者一樣。<span className="not-italic text-gray-500">──馬太福音二十二章30節</span></p>
                <p className="mb-2">天使是靈，不像人透過婚姻生育後代。雖然有人回答，耶穌所說的是「天上的天使」，不包括墮落天使，但創世記本身沒有交代天使如何取得肉身並生育。</p>
                <p className="mb-2">第二，創世記六章3節和後面的洪水審判，主要審判的對象是「人」，不是天使。若最主要的犯罪者是天使，經文卻把審判重點放在人類身上，解釋上仍有張力。</p>
                <p className="mb-3">因此，天使說有很強的字詞根據，但在婚姻、生育及審判對象上存在困難。</p>

                <p className="font-semibold text-gray-800 mb-1">2. 塞特後裔說</p>
                <p className="mb-1">這一觀點認為：</p>
                <ul className="list-disc pl-5 space-y-1 mb-2">
                  <li>「神的兒子們」是敬虔的塞特後裔；</li>
                  <li>「人的女子」是屬世的該隱後裔；</li>
                  <li>問題是敬虔的人與不敬虔的人通婚，造成屬靈界線瓦解。</li>
                </ul>
                <p className="mb-2">創世記四至五章確實把兩條族系作出對照。該隱的後代逐漸走向以人為中心、強暴、多妻與自我誇耀；塞特的後代則出現求告耶和華之名、以諾與神同行等敬虔記號。莊東傑博士也將該隱與塞特的後代作出明顯的生命道路對比。</p>
                <p className="mb-1">這個觀點的優點是符合創世記四至五章的上下文，也能說明屬神群體為何逐漸被世界同化。</p>
                <p className="mb-1">然而，它也有一些問題。</p>
                <p className="mb-1">第一，創世記六章並沒有直接把「神的兒子們」稱為塞特的後裔，也沒有明說「人的女子」只是該隱的後裔。</p>
                <p className="mb-1">第二，經文說的是「人的女子」，似乎是泛指人類的女子，不一定專指該隱族系。</p>
                <p className="mb-2">第三，普通人之間的通婚，較難直接解釋為何特別產生「上古英武有名的人」。</p>
                <p className="mb-3">所以，塞特後裔說在敘事脈絡和屬靈應用上很有力量，但仍包含一些經文沒有直接說出的推論。</p>

                <p className="font-semibold text-gray-800 mb-1">3. 君王、掌權者說</p>
                <p className="mb-1">這一觀點認為，「神的兒子們」是當時的君王、貴族、軍事領袖或掌權者。</p>
                <p className="mb-1">聖經中確實有把君王、審判官或掌權者稱為「神」或「至高者的兒子」的用法：</p>
                <p className="italic mb-2">我曾說：「你們是神，都是至高者的兒子。」<span className="not-italic text-gray-500">──詩篇八十二篇6節</span></p>
                <p className="mb-2">古代近東的君王也常以「神之子」自居，藉此強化自己的權威。因此，創世記六章可能是在描述洪水以前的強權人物。他們看見女子美貌，就不顧女子本人、家庭或婚姻秩序，憑權勢任意挑選，甚至建立龐大的後宮。</p>
                <p className="mb-2">這個觀點特別能解釋「隨意挑選」的語氣。一般人未必能看上誰就娶誰，只有擁有政治、軍事或社會權勢的人，才有可能如此任意取得女子。這些婚姻不是平等、忠誠的盟約，而是權勢者把女子當作滿足慾望與擴張勢力的工具。</p>
                <p className="mb-2">創世記後來也出現相似的情形。亞伯蘭進入埃及時，法老的臣僕看見撒萊美貌，她就被帶進法老宮中。這與創世記六章「看見女子美貌，就隨意挑選」形成相似的權力模式。《指向終末的創世記》也以此作為理解君王濫權的重要例子。</p>
                <p>此外，「上古英武有名的人」也容易與古代的戰士、英雄、君王和軍事貴族相連。他們可能因權力婚姻建立強大的家族與政治勢力，成為當時人所崇拜的英雄人物。</p>
              </div>

              <div>
                <p className="font-semibold text-indigo-700 mb-2">二、哪一種觀點最合適？</p>
                <p className="mb-2">就《指向終末的創世記》的解釋方向來看，莊東傑博士較傾向於把「神的兒子們」理解為當時的君王或掌權者。書中也明確將創世記六章與法老因撒萊美貌而把她帶入宮中的事件連結，說明掌權者憑權勢任意取得女子的模式。</p>
                <p className="mb-1">我認為，若綜合創世記六章本身的敘事，君王或掌權者說是最能解釋這段經文倫理重點的觀點，理由有四個。</p>
                <p className="mb-2">第一，它最能解釋「隨意挑選」。這不是單純談戀愛或普通婚姻，而是強者依照自己的慾望任意取人。</p>
                <p className="mb-1">第二，它符合洪水前強暴充滿世界的背景。創世記六章11節說：</p>
                <p className="italic mb-2">世界在神面前敗壞，地上滿了強暴。</p>
                <p className="mb-2">這裡的罪惡不只是私人情慾，更包括權力壓迫、暴力與社會秩序崩壞。</p>
                <p className="mb-2">第三，它能說明「英武有名的人」。這些人可能是由強權家族產生的英雄、戰士或統治者，被世人歌頌，卻不一定蒙神喜悅。</p>
                <p className="mb-2">第四，它符合審判對象是人類的事實。經文所描寫的是人類掌權者如何濫用神所賜的治理權，使全地敗壞，所以神審判整個人類社會。</p>
                <p>不過，我不會說天使說完全沒有可能。從希伯來文用法和約伯記的平行經文來看，天使說仍是重要且古老的解釋。較謹慎的結論是：經文可能也暗示邪靈勢力在背後推動人類掌權者的敗壞，但創世記直接要人注意的，仍是人如何順從情慾、濫用權力並破壞神所設立的婚姻秩序。</p>
              </div>

              <div>
                <p className="font-semibold text-indigo-700 mb-2">三、這件事為何成為神審判的重要關鍵？</p>
                <p className="mb-2">問題不只是「娶錯人」，而是至少包含四層罪惡。</p>

                <p className="font-semibold text-gray-800 mb-1">1. 看見美貌，就由慾望決定</p>
                <p className="mb-1">創世記三章中，夏娃「見那棵樹的果子好作食物，也悅人的眼目」，於是摘下來吃；創世記六章中，神的兒子們「看見人的女子美貌」，就隨意挑選。</p>
                <p className="mb-1">兩段經文的共同模式是：看見—喜歡—取得。</p>
                <p className="mb-3">人不再詢問神的旨意，而讓眼目和慾望成為決定人生的最高標準。</p>

                <p className="font-semibold text-gray-800 mb-1">2. 婚姻從盟約變成佔有</p>
                <p className="mb-1">創世記二章設立的婚姻是：</p>
                <p className="italic mb-1">人要離開父母，與妻子連合，二人成為一體。</p>
                <p className="mb-3">這是一夫一妻、彼此委身、互相尊重的生命聯合。創世記六章卻把女子變成可供挑選、取得的對象。婚姻不再是愛與盟約，而成為慾望、權力與佔有。</p>

                <p className="font-semibold text-gray-800 mb-1">3. 掌權者濫用神所賜的權柄</p>
                <p className="mb-1">神把治理世界的使命交給人，是要人代表神保護、管理並使受造界得益處。但這些「神的兒子們」卻用權力滿足自己，把本應保護的人變成被利用的對象。</p>
                <p className="mb-3">他們雖被稱為「神的兒子」，生命卻完全不像神。</p>

                <p className="font-semibold text-gray-800 mb-1">4. 社會以英雄取代神</p>
                <p className="mb-1">經文稱他們的後代為「上古英武有名的人」。在人眼中，他們有力量、有名聲、有成就；但在神眼中，人的罪惡很大，終日所思想的盡都是惡。</p>
                <p className="mb-1">這形成強烈對比：</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>人所崇拜的是英雄；神所看見的是敗壞。</li>
                  <li>人看的是名聲與力量；神看的是內心與公義。</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-indigo-700 mb-2">四、我的理解與應用</p>
                <p className="mb-2">這段經文提醒我，神的審判常常不是因一件孤立的錯事，而是因人的慾望、權力和價值觀長期脫離神，最後使整個社會敗壞。</p>
                <p className="mb-2">第一，我需要警醒，不能只憑「我喜歡」「我覺得好」「這對我有利」就作決定。眼睛所看見的美好，不一定就是神所喜悅的。婚姻、服事、金錢、人際關係和重要選擇，都需要回到神的話語，而不是由一時感受作最後決定。</p>
                <p className="mb-2">第二，越有權柄的人，越需要敬畏神。牧者、小組長、父母、老師或其他領袖，都可能用「為你好」「我是領袖」「這是屬靈安排」來要求別人配合自己。創世記六章提醒我們，權柄不是讓人任意挑選、操控或取得別人，而是用來保護、服事和成全人。</p>
                <p className="mb-2">第三，不能把外在成功當作神喜悅的證明。那些人是「英武有名」的，可能擁有力量、成就和眾人的讚賞，卻仍活在神的審判之下。今天一個人即使有恩賜、能力、名氣或超自然經歷，也不能因此證明他的生命和道路正確；仍要看他是否尊重神的話、持守聖潔、善待他人並結出聖靈的果子。</p>
                <p>第四，我也要反省自己是否有「隨意挑選」的心態。雖然我未必像古代君王那樣強奪女子，但仍可能只選擇對自己有利的人、只接納符合自己期待的同工，或用自己的標準要求別人。當我的能力、知識或職分增加時，更要學習謙卑，不讓自己成為一個只看見別人問題、卻忽略自己如何使用權柄的人。</p>
              </div>

              <div>
                <p className="font-semibold text-indigo-700 mb-2">總結</p>
                <p className="mb-2">我認為，「神的兒子們」理解為洪水以前的君王或掌權者最能解釋經文中的「隨意挑選」、英武有名的人，以及後來地上充滿強暴的社會背景。但這不排除邪靈勢力在背後引誘與推動。</p>
                <p className="mb-2">這段經文真正要揭露的是：當人讓眼目的情慾取代神的旨意，讓權力取代愛，讓佔有取代盟約，讓名聲取代敬畏神，整個社會便會走向敗壞與審判。</p>
                <p>因此，今日的應用不只是要慎重選擇婚姻對象，更要在一切關係中學習節制慾望、尊重他人、正確使用權柄，並在每一個選擇上重新讓神作主。</p>
              </div>
            </div>

            <div style={{ fontSize: '16px' }} className="mt-2 bg-amber-50 border border-amber-100 rounded-lg p-4 space-y-3 text-gray-700 leading-relaxed">
              <p className="font-semibold text-amber-700">第三題參考答案</p>

              <p>
                面對末後的大爭戰，基督徒不是用恐懼、仇恨或政治對立來回應，而是透過禱告、福音、敬虔生活與培育下一代參與神國的工作。《指向終末的創世記》將這個使命歸納為兩方面：一方面為國家及掌權者禱告；另一方面努力生養敬虔後裔，包括肉身兒女和屬靈兒女，使下一代成為神國可使用的人。
              </p>

              <div>
                <p className="font-semibold text-indigo-700 mb-2">一、當如何為國家禱告？</p>

                <p className="font-semibold text-gray-800 mb-1">1. 為掌權者得著智慧、公義並認識神禱告</p>
                <p className="mb-1">保羅說：</p>
                <p className="italic mb-2">我勸你，第一要為萬人懇求、禱告、代求、祝謝；為君王和一切在位的，也該如此，使我們可以敬虔、端正、平安無事地度日。這是好的，在神我們救主面前可蒙悅納。他願意萬人得救，明白真道。<span className="not-italic text-gray-500">──提摩太前書二章1至4節</span></p>
                <p className="mb-1">為國家禱告，首先不是求自己支持的政黨勝利，而是求神使所有掌權者：</p>
                <ul className="list-disc pl-5 space-y-1 mb-2">
                  <li>敬畏神，不以權力滿足私慾；</li>
                  <li>有智慧分辨是非；</li>
                  <li>按公義治理，保護弱勢；</li>
                  <li>制止暴力、貪腐與不法；</li>
                  <li>維護人民可以敬拜、傳福音和過敬虔生活的環境；</li>
                  <li>有機會悔改、認識基督。</li>
                </ul>
                <p className="mb-3">創世記六章的問題之一，正是掌權者「看見人的女子美貌，就隨意挑選」，以權勢滿足私慾。今日為國家禱告，也應特別求神攔阻掌權者濫權，使權柄回到保護人民、施行公義的目的。</p>

                <p className="font-semibold text-gray-800 mb-1">2. 為國家的罪悔改，而不是只責怪別人</p>
                <p className="mb-1">但以理雖然是一位敬虔者，仍把自己放在百姓中向神認罪：</p>
                <p className="italic mb-2">我們犯罪作孽，行惡叛逆，偏離你的誡命典章。<span className="not-italic text-gray-500">──但以理書九章5節</span></p>
                <p className="mb-1">為國家禱告不能只是說：「那些政治人物犯罪」「社會越來越敗壞」，彷彿教會與自己完全無關。我們也要承認：</p>
                <ul className="list-disc pl-5 space-y-1 mb-2">
                  <li>教會是否失去真理和聖潔；</li>
                  <li>基督徒是否只關心自身利益；</li>
                  <li>我們是否缺少誠實、公義與憐憫；</li>
                  <li>我們是否沒有忠心教導下一代；</li>
                  <li>我們是否用政治立場取代了福音。</li>
                </ul>
                <p className="mb-3">真正的國家代禱，應從神的家先悔改開始。</p>

                <p className="font-semibold text-gray-800 mb-1">3. 為福音廣傳與教會忠心禱告</p>
                <p className="mb-1">國家真正的更新不能只靠政策和制度，還需要人心被福音改變。因此要禱告：</p>
                <ul className="list-disc pl-5 space-y-1 mb-2">
                  <li>教會忠實傳講基督；</li>
                  <li>牧者按正意分解真理；</li>
                  <li>信徒在家庭、職場和社會中作見證；</li>
                  <li>校園、社區、弱勢族群和未得之民能聽見福音；</li>
                  <li>教會不被政治操控，也不逃避公共責任。</li>
                </ul>
                <p className="mb-1">主耶穌吩咐門徒：</p>
                <p className="italic mb-2">所以，你們要去，使萬民作我的門徒。<span className="not-italic text-gray-500">──馬太福音二十八章19節</span></p>
                <p className="mb-3">末後爭戰的核心不是哪一個人間陣營取得權力，而是萬民是否聽見福音、歸向基督並成為主的門徒。</p>

                <p className="font-semibold text-gray-800 mb-1">4. 為和平、公義與人民的需要禱告</p>
                <p className="mb-1">耶利米對被擄的百姓說：</p>
                <p className="italic mb-2">我所使你們被擄到的那城，你們要為那城求平安，為那城禱告耶和華；因為那城得平安，你們也隨着得平安。<span className="not-italic text-gray-500">──耶利米書二十九章7節</span></p>
                <p>因此，我們可以具體為國家的和平安全、兩岸局勢、司法公正、經濟民生、教育、家庭、兒童、老人、勞工、醫療與災害防治禱告。但不應把某個政治主張直接等同神的旨意，而要謙卑求神使我們看見真相，按照公義、憐憫和真理代求。</p>
              </div>

              <div>
                <p className="font-semibold text-indigo-700 mb-2">二、當如何進行肉身生養？</p>
                <p className="mb-1">創世記一章28節記載：</p>
                <p className="italic mb-2">神就賜福給他們，又對他們說：「要生養眾多，遍滿地面，治理這地。」</p>
                <p className="mb-3">肉身生養不只是把孩子生下來，也包括承擔養育、教導與塑造生命的責任。</p>

                <p className="font-semibold text-gray-800 mb-1">1. 生養是恩賜，不是每個人的同一命令</p>
                <p className="mb-1">婚姻與兒女是神所賜的恩典，基督徒家庭應當重視生命、接納兒女並負起養育責任。但也要避免把「多生孩子」變成衡量屬靈程度的標準。</p>
                <p className="mb-3">聖經也肯定單身的恩賜；有些夫妻因身體、年齡、經濟、家庭處境或其他原因沒有兒女，不能因此被看作不順服神。肉身生養是重要使命，卻不是每一位基督徒都必須以相同方式實行的命令。</p>

                <p className="font-semibold text-gray-800 mb-1">2. 不只生下來，更要養育成敬虔的人</p>
                <p className="mb-1">摩西吩咐以色列人：</p>
                <p className="italic mb-2">我今日所吩咐你的話都要記在心上，也要殷勤教訓你的兒女。無論你坐在家裏，行在路上，躺下，起來，都要談論。<span className="not-italic text-gray-500">──申命記六章6至7節</span></p>
                <p className="mb-1">基督徒父母應當：</p>
                <ul className="list-disc pl-5 space-y-1 mb-2">
                  <li>用言行向孩子見證信仰；</li>
                  <li>陪伴孩子讀經、禱告和敬拜；</li>
                  <li>教導誠實、節制、責任與憐憫；</li>
                  <li>不用羞辱、恐嚇或強迫操控孩子；</li>
                  <li>幫助孩子建立自己的信仰，而不是只有父母的信仰；</li>
                  <li>培養孩子的品格、能力和服事心志。</li>
                </ul>
                <p className="mb-2">《指向終末的創世記》特別強調，父母需要與神同工，藉着禱告把孩子交託給神，也以神的話引導他們走合神心意的道路。書中把肉身生養與國度人才的培育連結起來。</p>
                <p className="mb-3">不過，需要補充一個重要界線：孩子首先是神所愛、具有獨立人格的人，不只是父母用來完成「末世戰略」的工具。我們要培育他們愛神、愛人並明辨真理，而不是把父母的政治立場、事奉理想或未完成的夢想強加在他們身上。</p>

                <p className="font-semibold text-gray-800 mb-1">3. 家庭是主要場所，教會與教育機構是協助者</p>
                <p className="mb-1">書中提到基督徒在家教育、基督徒實驗學校及育幼事工，認為這些都可以成為培育敬虔後代的途徑。</p>
                <p>這些確實可以是可行方式，但不是唯一合乎聖經的模式。孩子也可以就讀一般學校，重要的是父母不能把信仰教育完全交給學校或教會。家庭、教會和學校需要彼此配搭，但父母仍是孩子生命教育的重要承擔者。</p>
              </div>

              <div>
                <p className="font-semibold text-indigo-700 mb-2">三、當如何進行屬靈生養？</p>
                <p className="mb-1">屬靈生養是透過傳福音、門徒訓練和生命陪伴，使人因福音得着新生命，並逐漸長成基督的樣式。</p>
                <p className="mb-1">保羅對哥林多教會說：</p>
                <p className="italic mb-2">你們學基督的，師傅雖有一萬，為父的卻是不多；因我在基督耶穌裏用福音生了你們。<span className="not-italic text-gray-500">──哥林多前書四章15節</span></p>
                <p className="mb-1">他又對加拉太信徒說：</p>
                <p className="italic mb-2">我小子啊，我為你們再受生產之苦，直等到基督成形在你們心裏。<span className="not-italic text-gray-500">──加拉太書四章19節</span></p>
                <p className="mb-3">因此，屬靈生養至少包含三個階段。</p>

                <p className="font-semibold text-gray-800 mb-1">1. 傳福音，使人認識基督</p>
                <p className="mb-1">我們需要向家人、朋友、鄰舍和未信者清楚傳講：</p>
                <ul className="list-disc pl-5 space-y-1 mb-2">
                  <li>人與神隔絕的問題；</li>
                  <li>耶穌基督的身分；</li>
                  <li>十字架與復活；</li>
                  <li>悔改、相信與接受救恩；</li>
                  <li>跟隨基督的意義。</li>
                </ul>
                <p className="mb-3">屬靈生養不是只邀請人參加聚會，也不是追求人數，而是使人真正明白並回應福音。</p>

                <p className="font-semibold text-gray-800 mb-1">2. 陪伴初信者扎根</p>
                <p className="mb-1">嬰孩出生後需要餵養，屬靈生命也一樣。初信者需要有人陪伴他：</p>
                <ul className="list-disc pl-5 space-y-1 mb-2">
                  <li>建立讀經和禱告生活；</li>
                  <li>明白福音與得救確據；</li>
                  <li>學習分辨真理與錯誤教導；</li>
                  <li>進入教會及肢體生活；</li>
                  <li>面對罪、受傷、人際與生活問題；</li>
                  <li>在失敗中學習悔改並重新站立。</li>
                </ul>
                <p className="mb-3">真正的屬靈生養不是「帶人決志後就離開」，而是願意長期陪伴。</p>

                <p className="font-semibold text-gray-800 mb-1">3. 培育他也能生養別人</p>
                <p className="mb-1">保羅對提摩太說：</p>
                <p className="italic mb-2">你在許多見證人面前聽見我所教訓的，也要交託那忠心能教導別人的人。<span className="not-italic text-gray-500">──提摩太後書二章2節</span></p>
                <p className="mb-1">這節經文呈現了四代門徒：保羅 → 提摩太 → 忠心的人 → 其他人。</p>
                <p className="mb-2">屬靈生養的成熟結果，不是門徒永遠依賴帶領者，而是他能自己跟隨主，並且開始服事和陪伴別人。</p>
                <p className="mb-1">這對小組尤其重要。小組不能只維持聚會、聊天和分享需要，也應逐漸形成：</p>
                <p>關懷人 → 傳福音 → 陪讀經 → 建立信仰 → 培育服事 → 差派再生養。</p>
              </div>

              <div>
                <p className="font-semibold text-indigo-700 mb-2">四、肉身生養與屬靈生養不可彼此取代</p>
                <p className="mb-2">兩者都是重要的，但不能混為一談。</p>
                <p className="mb-2">肉身兒女並不會因出生在基督徒家庭，就自然成為重生得救的人；他們仍需要親自認識、相信和跟隨基督。反過來說，沒有結婚生子的基督徒，也可以透過傳福音、教導、關懷和門徒訓練，成為許多人的屬靈父母。</p>
                <p className="mb-1">因此：</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>有兒女者，要在家中忠心牧養兒女，也能生養屬靈兒女；</li>
                  <li>沒有兒女者，仍能藉門徒訓練產生屬靈後裔；</li>
                  <li>年長者可以成為晚輩的信仰陪伴者；</li>
                  <li>教會應使不同年齡與家庭狀況的人，都能參與生養門徒的使命。</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-indigo-700 mb-2">我的理解與應用</p>
                <p className="mb-2">我認為，面對末後的大爭戰，教會最重要的工作不是製造緊張、猜測日期，或把所有政治衝突都解釋成某種靈界密碼，而是忠實做神已經清楚吩咐的事：為掌權者禱告，自己先悔改；在家庭中培育敬虔後代；在教會與生活中傳福音、作門徒；以真理、愛、公義和聖潔見證基督。</p>
                <p className="mb-1">這場爭戰不是靠人的血氣得勝：</p>
                <p className="italic mb-2">因我們雖然在血氣中行事，卻不憑着血氣爭戰。我們爭戰的兵器本不是屬血氣的，乃是在神面前有能力。<span className="not-italic text-gray-500">──哥林多後書十章3至4節</span></p>
                <p className="mb-2">因此，我們不能把不同政治立場的人當作仇敵，也不能把孩子和門徒當成神國的數字或工具。真正的得勝，是人在福音中被基督更新，家庭恢復敬虔，教會忠實見證，並且一代接一代地把信仰傳承下去。</p>
                <p className="mb-1">可以將實際行動整理為一句話：</p>
                <p className="font-medium">跪下為國家禱告，起來活出公義；在家庭中養育生命，在教會中生養門徒，使下一代不只繼承信仰的形式，更真正認識並跟隨基督。</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
