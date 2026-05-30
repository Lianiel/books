import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Search, HelpCircle, Check, Star } from 'lucide-react';

export default function Book18Ch9() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">第九章</h1>
        <h2 className="text-xl font-semibold text-gray-700">撒但的策略與伎倆</h2>
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
              <h3 className="font-bold text-gray-900 mb-3 text-lg">特洛伊木馬——撒但的行事方式</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                布魯斯·弗雷德里克森在其《撒但教》一書中寫道：「在特洛伊木馬故事中，希臘士兵沒有直接攻擊特洛伊城，而是造了一個巨大的空心木馬。他們把木馬放在特洛伊城城門前。特洛伊人以為那個木馬是個禮物，就把它推進城裡去展示。特洛伊人睡著之後，藏在木馬裡的希臘士兵悄悄爬了出來，出其不意地佔領了特洛伊城。撒但經常這樣行事——出乎人們意料地從後面或裡面進行攻擊。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                我們越是經歷上帝的恩典，也越容易遇到撒但的策略和詭計，因為撒但非常不願意看到真正的基督徒與上帝團契。正如路德所說：「凡是上帝建教堂的地方，撒但都會在那裡建一個分堂。魔鬼是個模仿者」——他甚至會模仿上帝。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">六位清教徒的智慧結晶</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                清教徒經歷了很多與上帝的親密團契，非常熟悉撒但的策略和詭計。在他們的作品中，常常深刻地談到屬靈爭戰。以下六位清教徒及其作品是本章的主要資料來源：
              </p>
              <div className="space-y-2 ml-4">
                <div className="flex gap-3">
                  <span className="text-purple-600 font-bold flex-shrink-0">①</span>
                  <p className="text-gray-700"><span className="font-semibold">湯瑪斯·布魯克斯</span>——《對付撒但詭計的寶貴應對辦法》，著名經典，多次由真理之旗出版社再版。</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-purple-600 font-bold flex-shrink-0">②</span>
                  <p className="text-gray-700"><span className="font-semibold">理查·吉爾平</span>——《論撒但的試探》，五百頁的經典作品，最近由惟獨上帝之榮耀出版社再版。</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-purple-600 font-bold flex-shrink-0">③</span>
                  <p className="text-gray-700"><span className="font-semibold">威廉·司布斯托</span>——《撒但的詭計》，罕見的小書，短小精悍，大有幫助。</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-purple-600 font-bold flex-shrink-0">④</span>
                  <p className="text-gray-700"><span className="font-semibold">約翰·道內姆</span>——《基督徒的爭戰》，兩卷共1800頁的長篇巨著，十七世紀以來未曾再版。</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-purple-600 font-bold flex-shrink-0">⑤</span>
                  <p className="text-gray-700"><span className="font-semibold">威廉·格諾爾</span>——《穿戴全副軍裝的基督徒》，詳細解釋《以弗所書》第6章，由真理之旗出版社再版。</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-purple-600 font-bold flex-shrink-0">⑥</span>
                  <p className="text-gray-700"><span className="font-semibold">湯瑪斯·古德文</span>——《行走在黑暗中的光明之子》，關於撒但活動的章節對處在屬靈黑暗中的人極有幫助。</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">用捕鼠器理解「策略、詭計與應對辦法」</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                有一週，作者家裡來了一些不知確切數目的老鼠家庭。他與妻子相對冷靜和理性地畫了四個同心圓處理這個問題：
              </p>
              <div className="bg-purple-50 rounded-lg p-4 space-y-2 mb-3">
                <div className="flex gap-3">
                  <span className="text-purple-600 font-bold flex-shrink-0">第一圓</span>
                  <p className="text-gray-700"><span className="font-semibold">目標：</span>清除家裡所有的老鼠。</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-purple-600 font-bold flex-shrink-0">第二圓</span>
                  <p className="text-gray-700"><span className="font-semibold">策略：</span>找捕鼠器——咬合捕鼠器、有毒捕鼠器、粘性捕鼠器。</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-purple-600 font-bold flex-shrink-0">第三圓</span>
                  <p className="text-gray-700"><span className="font-semibold">計謀/誘餌：</span>用乳酪或花生醬來誘惑老鼠落入圈套。</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-purple-600 font-bold flex-shrink-0">第四圓</span>
                  <p className="text-gray-700"><span className="font-semibold">應對辦法：</span>把死老鼠處理掉；活老鼠拿出去殺死；找到被毒死的老鼠並清除。</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                撒但就像對待這些老鼠一樣對待我們，只是他的四個同心圓的內容更複雜。他的最大目標是損害上帝的榮耀，包括：毀滅我們（因我們承受上帝形像）、顛覆上帝的國度、繼續控制屬他的臣民、重新奪回失去的勢力範圍。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">詞彙辨析：策略、詭計、計謀</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「詭計」（device）這個詞的希臘語是「noema」，指用來欺騙別人的思想或行為——如戰爭中的伏擊、運動中的假動作或辯論中的錯誤推理。保羅在《哥林多後書》第2章11節說：「免得撒但趁著機會勝過我們，因我們並非不曉得它的詭計。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                撒但的第一個詭計是鼓勵鬆懈的管教（導致哥林多教會的混亂）；教會悔改後，他的下一個詭計則是提倡嚴厲、不饒恕的管教。撒但一直使用同一個策略，但計謀不同。
              </p>
              <p className="text-gray-700 leading-relaxed">
                「詭計」的同義詞還有：「wiles」（源自希臘語「methodeia」，《以弗所書》4:14；6:11）、「schemes」（陰謀）、「stratagem」（計謀）——四個詞含義相近，都指撒但帶有欺騙性的手段。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">撒但善於試探的六大原因（司布斯托）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                威廉·司布斯托指出，以下六個原因使撒但如此善於通過各種詭計誘惑我們犯罪：
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-purple-300 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-1">（1）撒但的屬靈本質及智力能力</h4>
                  <p className="text-gray-700 leading-relaxed">
                    人們彼此試探時採用明顯的行動——比如約瑟通過讓管家把自己的杯子藏在便雅憫的袋子裡，來試探兄弟們對最小弟弟的喜愛程度。然而撒但是個靈，不必使用顯而易見的行動，可以直接侵入我們心靈。他進入了猶大的心（約13:2），充滿了亞拿尼亞的心（徒5:3）。撒但雖然墮落，仍是天使，在智力上高過我們。愛德華滋說：「魔鬼在宇宙中最好的神學院，即天堂中的天堂，受過教育。」加爾文稱魔鬼為「精明的神學家」。撒但能把致命的智力毒藥隱藏在「美麗而閃光的外表」之下。撒但高超的智力和狡詐的騙術應當使我們特別謹慎，因為我們知道自己不能靠著自己有限的智力能力打敗他。
                  </p>
                </div>

                <div className="border-l-4 border-purple-300 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-1">（2）撒但的豐富經歷</h4>
                  <p className="text-gray-700 leading-relaxed">
                    撒但年老但不體弱。他的誘惑就像善射之勇士的箭，很少徒然返回（耶50:9）。多少個世紀以來，他已掌握了邪惡的藝術，憑經驗知道何時是射箭的最佳時機。他知道釣什麼魚用什麼誘餌：用美麗誘惑年輕人，用金錢誘惑節儉的人，用權勢誘惑有野心的人。威廉·詹金說：「他用蘋果誘惑夏娃，用葡萄酒誘惑挪亞，用衣裳誘惑基哈西，用錢袋誘惑猶大。」司布斯托說，就像畫家阿佩利斯只畫了安提哥納王的一半臉（隱藏了沒有眼睛的那一半），撒但也只畫罪的一半臉。
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    撒但擅於使我們的防線改變方向。信徒受到試探時常常感到震驚和困惑，因為撒但對於他們關於犯罪的辯論反應迅速而有效。撒但的迅捷反應告訴我們，應當立刻徹底拒絕他，而不是與他辯論。撒但如果不能使信徒離開天堂，就在地上千方百計地使天堂遠離信徒。「撒但如果不能熄滅他們的燈火，就會竭力使他們的光彩變得暗淡；如果不能使船沉沒，就會竭力發動風暴；如果不能改變他們喜樂的終點，就在途中騷擾他們。」撒但是個自信而經驗豐富的敵手——與他摔過跤的人，誰沒有受傷呢？如果像挪亞、羅得、大衛和彼得那樣的偉人都在撒但的試探下跌倒了，我們怎能盼望靠著自己的力量抵擋那試探人的呢？
                  </p>
                </div>

                <div className="border-l-4 border-purple-300 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-1">（3）撒但精力充沛、不知疲倦</h4>
                  <p className="text-gray-700 leading-relaxed">
                    撒但誘惑我們懈怠，但他自己卻從不懈怠。他有個偏狹的頭腦，一心一意要使自己成為可怕的。一條古老的義大利諺語說：「主啊，救我脫離只有一件事可做的人。」司布斯托寫道：「使人相信謹慎行事是我們的本分，相信在自己的呼召上勤勉是防止靈魂被情欲敗壞或抵擋那位勤勉的試探者之侵襲的最佳辦法，這是多麼艱難的事啊！」
                  </p>
                </div>

                <div className="border-l-4 border-purple-300 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-1">（4）撒但擁有一個邪靈的國度</h4>
                  <p className="text-gray-700 leading-relaxed">
                    《但以理書》第7章10節說侍奉上帝的天使有「千千」，在他面前侍立的有「萬萬」。保羅說我們是與「那些執政的，掌權的，管轄這幽暗世界的，以及天空屬靈氣的惡魔爭戰」（弗6:12），暗示墮落天使的數目眾多。撒但的國度有目的地聯合在一起——每個邪靈都憎恨上帝的榮耀和我們的喜樂。所有的邪靈都聯合起來增進撒但的教義、撒但的聲望、撒但的統治和撒但的宴樂；所有的邪靈都聯合起來反對上帝的地位、上帝的誡命、上帝的純潔和上帝的子民。撒但的國度中沒有紛爭（太12:26），沒有因低薪而引發的暴動，沒有因艱苦行軍而引發的抱怨，在執行艱難使命時沒有來自內部的阻礙。
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    既然邪靈裡面充滿驕傲、憤怒、嫉妒和苦毒，他們怎能如此團結呢？正如地上的敵人可以因著對共同第三方的憎恨聯合起來，撒但的邪靈也因著對上帝和人的憎恨而聯合起來。正如善天使因罪人的悔改而喜樂，惡天使因罪人的毀滅而喜樂。司布斯托說：「毀滅的罪人是地獄唯一的戰利品和報酬。」地獄中的邪靈比地上的教會更團結，這難道不值得我們注意嗎？邪靈的團契常常勝過聖徒的團契，這是令人悲哀的事。
                  </p>
                </div>

                <div className="border-l-4 border-purple-300 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-1">（5）撒但的暗示幾乎無法與我們自己的敗壞區分</h4>
                  <p className="text-gray-700 leading-relaxed">
                    有時很難知道某個罪惡的想法是來自撒但，還是源自我們自己。古老的箴言說：「魔鬼不會自我聲張。」司布斯托說，母鳥會孵化一個鳥蛋並養育幼鳥，直到發現那只幼鳥並不是自己的孩子，然後才把入侵者趕出巢穴。如果我們能辨別撒但強加進來的暗示，我們也會拒絕它。如果大衛王知道是撒但在激動他數點以色列民，他必定會立刻停止（代上21:1）。
                  </p>
                </div>

                <div className="border-l-4 border-purple-300 pl-4">
                  <h4 className="font-semibold text-gray-800 mb-1">（6）撒但善於為暗示配上我們敗壞的理由</h4>
                  <p className="text-gray-700 leading-relaxed">
                    撒但不能靠武力征服我們的靈魂；他的成功靠的是使我們分辨不清他那些暗示的來源。「撒但可以誘惑我們，惟有上帝能夠有效地改變我們，但沒有人能夠強迫我們。」撒但非常善於誘使我們相信自己想要相信的：使無神論者相信敬拜是心靈空虛者的拐杖；使已歸正者相信只要有一點信心就足夠了；使掛名基督徒相信悟性的信心就夠了；使真信徒相信世俗之人不像公義之人那樣受苦。
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2 italic">
                    司布斯托總結說：「那個邪惡的撒種者撒下一些誘惑的種子，而心靈恰好因著住在裡面的敗壞的律，是適宜的土壤，那些誘惑的種子很快就會發芽長出行動，然後生根，結出惡毒和苦惱的果子。」
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-lg">撒但的四大主要策略（預告）</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                在本書的第三部分，作者將仔細探討撒但的四個主要策略：
              </p>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-purple-50 rounded-lg p-3">
                  <p className="font-semibold text-purple-700">策略一</p>
                  <p className="text-gray-700 text-sm">引誘我們犯罪</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-3">
                  <p className="font-semibold text-purple-700">策略二</p>
                  <p className="text-gray-700 text-sm">攔阻我們的靈修</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-3">
                  <p className="font-semibold text-purple-700">策略三</p>
                  <p className="text-gray-700 text-sm">曲解上帝和真理</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-3">
                  <p className="font-semibold text-purple-700">策略四</p>
                  <p className="text-gray-700 text-sm">反對我們的成聖</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mt-3">
                正如軍隊的領導人必須記錄戰爭中敵人的策略和計謀，真正的基督徒也必須熟知仇敵撒但及其戰略戰術，以便思考和實施上帝在聖經中啟示的應對辦法。
              </p>
            </div>

          </div>
        )}
      </div>

      {/* 重點總結 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 flex items-center gap-2">
          <Star className="w-5 h-5 text-teal-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">重點總結</span>
        </div>
        <div className="p-5 bg-white space-y-3">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold">1</span>
            <p className="text-gray-700 leading-relaxed"><span className="font-semibold">木馬警告——識別撒但的偽裝策略：</span>如同特洛伊木馬，撒但最致命的攻擊從不以明顯的邪惡面目出現。他化裝為「光明的天使」（2Cor 11:14），用合理的藉口、漸進的妥協、看似無害的起點引誘人踏入陷阱。路德說：「撒但先在禮拜堂門外建立小教堂」——先讓人接受邊緣的偏差，再逐漸取代核心真理。識別這種偽裝需要對神話語的深刻認識，因為只有真光才能辨別假光。</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold">2</span>
            <p className="text-gray-700 leading-relaxed"><span className="font-semibold">四層詞彙框架——從目標到解藥的系統理解：</span>清教徒分析撒但攻擊的四層詞彙：（1）目標（Goal）——撒但的最終目的（破壞信徒與神的關係，使人失落或靈命枯死）；（2）策略（Strategy）——達成目標的整體計畫（如：先軟化人對罪的敏感）；（3）手段/器具（Device）——具體使用的工具（如：誘惑、控告、疑惑）；（4）解藥（Remedy）——每種手段對應的聖經回應。斯柏司多（Spurstowe）在《撒但的迷惑》中系統整理了這個框架，是清教徒屬靈爭戰神學的代表作。</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold">3</span>
            <p className="text-gray-700 leading-relaxed"><span className="font-semibold">斯柏司多的六個原因——撒但為何擅長試探：</span>（1）在人類歷史上有數千年攻擊靈魂的經驗積累；（2）深刻了解人性弱點，知道每個人的「性情、氣質、職業」的破口；（3）能選擇最有利的時機（「可乘之機」Eph 4:27）；（4）能協調多方因素形成組合攻擊；（5）不知疲倦，從不因失敗而氣餒；（6）以謙卑溫和的外表起步（「老鼠夾上的起司看起來是免費的」）。認識這六點使信徒對自己的脆弱有正確的謙遜。</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold">4</span>
            <p className="text-gray-700 leading-relaxed"><span className="font-semibold">六位清教徒來源的屬靈爭戰寶庫：</span>本章所引用的清教徒資源代表了16-17世紀屬靈爭戰神學的精華：（1）湯姆·布魯克斯（Thomas Brooks）《撒但的誘騙》；（2）威廉·斯柏司多（William Spurstowe）《撒但的迷惑》；（3）約翰·歐文（John Owen）《試探與罪》；（4）理查·吉利斯比（Richard Gilpin）《魔鬼的誘惑》；（5）托馬斯·古德溫（Thomas Goodwin）《撒但的工作》；（6）塞繆爾·路得福（Samuel Rutherford）書信中的屬靈爭戰討論。這些著作今日仍是無可替代的靈修資源。</p>
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
              <h4 className="font-semibold text-gray-800 mb-2">清教徒文學的屬靈爭戰傳統</h4>
              <p className="text-gray-700 leading-relaxed">
                十七世紀的清教徒之所以能寫出如此豐富的屬靈爭戰文學，是因為他們在教會受逼迫、社會動盪的背景下親身經歷了與撒但的激烈爭戰。布魯克斯的《對付撒但詭計的寶貴應對辦法》（1652年）成書於英國清教徒革命後期，道內姆的《基督徒的爭戰》（1612年）則是在宗教改革後教會重建的時期寫就。這些作者不是在象牙塔裡做神學抽象思考，而是在屬靈牧養和個人爭戰的火爐中鍛煉出來的智慧。他們的著作之所以歷久彌新，正是因為他們所描述的撒但策略在每個時代都保持不變。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">撒但的「模仿策略」——假冒為善</h4>
              <p className="text-gray-700 leading-relaxed">
                路德說「撒但是個模仿者」，這一洞見極其深刻。撒但不只是直接攻擊，更常採用模仿和偽裝。他建「分堂」，不是要打倒教堂，而是要讓人分不清哪個是真的。保羅說撒但能裝作「光明天使」（林後11:14）。這意味著撒但最危險的詭計往往不是顯而易見的惡，而是看起來很美善的偽善。假先知、假福音、半真半假的神學，都是撒但建立的「分堂」。因此，辨別能力（discernment）是屬靈爭戰中最重要的武器之一，需要深入認識上帝話語的標準。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">從心理學視角看撒但的「第六個原因」</h4>
              <p className="text-gray-700 leading-relaxed">
                司布斯托的第六個原因——「撒但善於為暗示配上我們自己敗壞的理由」——在現代認知心理學中有對應的描述，稱為「確認偏誤」（confirmation bias）。我們天然傾向於尋找支持自己已有信念的資訊，過濾掉反對的聲音。撒但深諳此道，他不是用明顯的謊言，而是用我們內心已有的慾望和偏見來建構誘惑。因此，屬靈成熟的標誌之一是能夠在禱告和上帝話語的光照下，誠實地質問自己的動機和想法。「我是在跟隨上帝的心意，還是在為自己的慾望找理由？」
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">邪靈的「高度團結」與教會的分裂</h4>
              <p className="text-gray-700 leading-relaxed">
                司布斯托的觀察令人警醒：「邪靈的團契常常勝過聖徒的團契。」地獄因著對上帝共同的憎恨而高度團結，天上的善天使也彼此合一；但地上的教會卻常常四分五裂。這一反差提醒我們：教會的分裂和紛爭本身就是撒但的勝利。《約翰福音》第17章中耶穌的大祭司禱告——「使他們合而為一」——不只是一個理想，也是對抗撒但的屬靈策略。當基督徒彼此爭鬥時，我們給了撒但最大的便利。保羅勸告以弗所人「竭力保守聖靈所賜合而為一的心」（弗4:3），正是基於這一屬靈現實。
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
              <p className="text-gray-700">回想你生命中曾遭遇撒但「特洛伊木馬式」攻擊的時刻——那個看似美好、卻從內部造成破壞的試探是什麼？你是如何發現它真正性質的？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">撒但的第二個原因指出他「只畫罪的一半臉」——使罪看起來美好而隱藏其後果。在你的生活中，哪些罪惡或誘惑常常以美好的外表出現？你如何學習看見它被隱藏的那一半？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">司布斯托說撒但「誘惑我們懈怠，但他自己卻從不懈怠」。你在屬靈生活中最容易懈怠的領域是哪裡？這與撒但不知疲倦地攻擊有什麼關係？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">你如何在實際生活中分辨一個罪惡的念頭是來自撒但的誘惑，還是源自自己內心的敗壞？這種分辨對你的禱告和靈修有什麼影響？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">本章提到邪靈的團結常常勝過聖徒的團契。你所在的教會群體中有哪些紛爭或分裂？你認為撒但在其中扮演了什麼角色？你可以做什麼來促進合一？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">挪亞、羅得、大衛、彼得這些偉大的信心前輩都在撒但的試探下跌倒過。這個事實對你認識自己的屬靈軟弱和對上帝的倚靠有何提醒？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">📖 研讀清教徒屬靈爭戰著作</h4>
              <p className="text-gray-700 mb-2">本章介紹了六位清教徒的著作，選擇其中一本開始閱讀：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>優先考慮湯瑪斯·布魯克斯的《對付撒但詭計的寶貴應對辦法》（已有中譯本）</li>
                <li>每天讀一小段，記錄撒但的一個詭計和對應的應對辦法</li>
                <li>把讀到的詭計與自己的實際經歷相對照</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 建立「試探日誌」</h4>
              <p className="text-gray-700 mb-2">本週開始記錄你所遇到的試探：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>寫下試探的性質：它以什麼外貌出現？是透過人、媒體、還是內心的念頭？</li>
                <li>嘗試辨別：這更像是撒但的外部誘惑，還是自己內心敗壞的慾望？</li>
                <li>記錄你的回應：你如何抵擋？結果如何？</li>
                <li>在週末禱告中把這週的試探帶到上帝面前，尋求祂的光照</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🤝 在信任的弟兄姊妹中建立問責關係</h4>
              <p className="text-gray-700 mb-2">撒但善用孤立和黑暗。在光中行走、彼此問責是對抗他的有效武器：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>找一位信任的弟兄（或姊妹找姊妹），每週相互問責</li>
                <li>分享你這週在哪個領域感到試探特別強烈</li>
                <li>彼此為對方的軟弱禱告，提醒對方福音的應許</li>
                <li>記住：邪靈高度團結，聖徒更需要彼此扶持</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4 mt-4">
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic leading-relaxed">
                主耶穌，感謝你讓我認識到仇敵撒但的策略和詭計。我承認自己在智力和經歷上遠不及那古蛇，常常在不知不覺中被他的計謀所迷惑。求你賜我辨別的靈，使我能分清什麼是真正從你而來的，什麼是撒但用美麗外表包裝的欺騙。也求你保守我與弟兄姊妹同心合一，不給仇敵留地步。奉你的名求，阿們。
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
