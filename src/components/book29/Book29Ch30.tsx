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
          </div>
        )}
      </div>
    </div>
  );
}
