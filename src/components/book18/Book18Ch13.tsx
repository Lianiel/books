import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book18Ch13() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-600 to-rose-700 bg-clip-text text-transparent">第十三章</h1>
        <h2 className="text-xl font-semibold text-gray-700">我們作為國家公民的挑戰</h2>
        <p className="text-sm text-gray-500 mt-2">第四部分：撒但的失敗</p>
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
              <h3 className="text-lg font-bold text-gray-800 mb-3">兩個國籍：天上與地上</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                腓立比書3:20說：「我們卻是天上的國民，並且等候救主，就是主耶穌基督從天上降臨。」然而，天上的國籍並不取消地上的公民責任。基督徒同時是天上的公民（最高的效忠對象是神）和地上的公民（有責任服務所在的社會和國家）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                馬太福音22:21耶穌說：「凱撒的物當歸給凱撒，神的物當歸給神。」這個著名的回答同時確立了：有些屬於凱撒（世俗政府）的責任，也有些最終屬於神的責任。這個區分是「兩國」或「兩政府」神學的基礎（路德、加爾文、荷蘭改革宗的「領域主權論」）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                撒但在這個領域的攻擊有兩個極端：一端是使基督徒完全脫離社會（「我的國籍在天上，地上的事不關我的事」），使社會失去基督徒的鹽和光；另一端是使基督徒將教會與國家或特定政治黨派合併（政教合一），使信仰成為政治的工具。兩個極端都使撒但得益——前者使光不照耀黑暗，後者使光被世俗的政治所扭曲。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">挑戰一：傳揚真理和福音</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                作為社會公民，基督徒最獨特的責任是傳揚福音——這不只是個人傳福音，也是教會在社會公共空間中的見證。以賽亞書6:8耶和華問：「我可以差遣誰呢？誰肯為我們去呢？」以賽亞回應：「我在這裡，請差遣我！」這個呼召今天仍然有效，而且在許多已長期基督化的社會中，反而是更迫切的——因為許多人雖然知道「宗教性的基督教」，卻從未真正遇見過活生生的基督。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「傳揚真理」的範圍超越個人傳福音，也包括在公共討論中以神話語的真理發聲——在道德問題、社會議題、生命倫理問題上，基督徒有責任把聖經的觀點帶入公共討論，即使這些觀點不受歡迎。
              </p>
              <p className="text-gray-700 leading-relaxed">
                馬太福音5:14-16說：「你們是世上的光……你們的光也當這樣照在人前，叫他們看見你們的好行為，便將榮耀歸給你們在天上的父。」光是主動的，不是被動等待黑暗撤退才發光。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">挑戰二：關懷貧窮和受苦者</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經對貧窮者和受苦者的關懷是貫穿全本聖經的主題。箴言19:17說：「憐憫貧窮的，就是借給耶和華；他的善行，耶和華必償還。」馬太福音25:35-40描述了對「最小的弟兄」的服事就是對基督的服事。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                歷史上，基督徒對貧窮和受苦者的關懷推動了許多重大社會改革：廢奴運動（威廉·威伯福斯）、建立孤兒院（喬治·穆勒）、現代醫院制度（基督徒宣教士）、教育普及（改教運動）。今天，基督徒的慈善事業——透過教會的救濟、基督教非政府組織的發展工作、個人對貧窮者的直接服事——是基督形象在世界中的真實展現，也是對撒但「神不在乎世界苦難」這個謊言最有力的反駁。
              </p>
              <p className="text-gray-700 leading-relaxed">
                值得注意的是，社會關懷不能取代福音傳揚，但也不能與福音傳揚割裂——真正的福音既帶來靈魂的救贖，也在現實世界中帶出愛的行動。克里斯托弗·萊特（Christopher Wright）說：「宣教是整體性的——它關乎全人、全社區、全社會的轉化。」
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">挑戰三：在公共道德問題上按聖經發聲</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                基督徒公民有責任在社會的公共道德問題上為聖經的立場發聲——這包括生命倫理問題（墮胎、安樂死）、婚姻和家庭的聖經定義、人口販賣和剝削問題、環境倫理（作為受造物的管家）等。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這個責任面對一個現代民主社會的挑戰：如何在尊重他人信仰自由的同時，仍然積極地為聖經的價值觀在社會中倡導？清教徒傳統（及荷蘭改革宗的「領域主權論」）提供了一個原則：不是要建立「基督教國家」或把聖經律法直接立為國家法律，而是要在作為公民的範圍內，以愛和智慧影響社會——通過投票、倡議、對話、媒體參與、以及最重要的，活出福音在社會中的真實影響。
              </p>
              <p className="text-gray-700 leading-relaxed">
                以賽亞書1:17說：「你們要學習行善，尋求公平，解救受欺壓的，給孤兒伸冤，為寡婦辨屈。」這個呼召不只是個人的美德，也是對社會結構性不公義的挑戰——先知傳統要求神的百姓在社會中為公義發聲。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">挑戰四：在社會中活出基督——鹽和光的生命</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                最後，也是最基本的挑戰：在日常的社會生活中——工作場所、學校、鄰舍關係、公民責任——活出基督的生命，成為社會的「鹽和光」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「鹽」的功能是防腐和增味——基督徒的存在和見證，能防止道德腐化，並使社區生活更有意義。「光」的功能是照亮黑暗——基督徒的生命和見證，應當在道德的黑暗中帶來清晰和方向。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這個「鹽和光」的挑戰，要求基督徒不只是在教會裡保持聖潔，而是在世俗的工作場所、學校、公共生活中活出不同的生命方式。職業倫理（誠實、勤勞、公平對待同事）、家庭生活（愛的婚姻、孩子的培育）、公民責任（納稅、遵守法律、社區服務）——這些都是屬靈爭戰的戰場。
              </p>
              <p className="text-gray-700 leading-relaxed">
                使徒行傳17:6記載，外邦人對早期基督徒的評價是「那攪亂天下的人」——他們的生命和信息改變了他們所到的地方。今天的基督徒同樣被呼召，不是「融入世界」，而是在愛中成為一種良善的「攪擾」——在社會中呈現不同的可能，指向那位改變一切的基督。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">屬靈爭戰的最終結局：基督的得勝</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                本書的最後，讓我們回到最根本的確信：屬靈爭戰的結局是確定的。啟示錄19:11-16描述基督在末日的凱旋歸來：「那騎白馬的稱為誠信真實……祂的名稱為神之道……在祂衣服和大腿上有名寫著說：萬王之王，萬主之主。」那一天，撒但的工作將永遠終結，神的國度將完全彰顯。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                但這個末世的確定性不是讓我們被動等待；它是我們今天行動的動力。啟示錄12:11說：「弟兄們勝過他，是因羔羊的血和自己所見證的道，他們雖至於死，也不愛惜性命。」得勝的手段是：羔羊的血（基督完成的救贖），見證的道（忠心地宣揚和活出福音），以及不愛惜性命（願意為基督付代價的委身）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                最後，以本書的精神——改革宗清教徒的屬靈爭戰傳統——作結：「主耶和華啊，我的力量，我的拯救！當爭戰的日子，你遮蔽了我的頭。」（詩篇140:7）這個詩篇的精神，是今天每個爭戰中的信徒的呼喊：不依靠自己的力量，而依靠那遮蔽我們頭的主。在祂裡面，得勝是確定的。
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
              <h4 className="font-semibold text-gray-800 mb-2">「兩國」神學：路德、加爾文與荷蘭改革宗的比較</h4>
              <p className="text-gray-700 leading-relaxed">
                改革宗傳統對基督徒的社會責任有幾種不同但相互補充的神學框架。路德的「兩王國」（Two Kingdoms）論區分了神以「左手」（通過政府和自然律）統治普世，和以「右手」（通過福音和教會）統治救贖的領域——這個區分保護了教會的福音純正，但有時被誤解為基督徒不需要在社會政治領域發聲。加爾文的神學更積極地主張基督的主權延伸到所有生活領域，包括政治和社會。荷蘭改革宗神學家亞伯拉罕·凱伯爾（Abraham Kuyper，1837-1920）的「領域主權論」（Sphere Sovereignty）是最完整的框架：每個社會領域（家庭、國家、教會、學術、藝術）都有其神所設立的獨特主權，教會不應控制其他領域，但基督的主權覆蓋所有領域，基督徒在每個領域都應按神的旨意行事。凱伯爾那句名言：「沒有一寸地方，全能的基督不說：那是我的！」這對基督徒的社會參與是一個強有力的激勵——不是要建立神權政治，而是要在每個領域活出對基督的效忠。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">威廉·威伯福斯：廢奴運動與整體性基督徒見證</h4>
              <p className="text-gray-700 leading-relaxed">
                威廉·威伯福斯（William Wilberforce，1759-1833）是有史以來最重要的基督徒社會改革者之一。他是英國議員，也是真摯的信徒，在1787年他相信神給了他兩個使命：廢除大英帝國的奴隸貿易，以及改善英國的社會道德。他花費了四十七年為廢除奴隸制度在議會爭戰，歷經無數挫折和反對，終在1807年看見奴隸貿易在英國被廢除，並在1833年（他去世前幾天）看見大英帝國全境廢除奴隸制度。威伯福斯的榜樣顯示了什麼是「整體性的基督徒見證」：不只是個人的道德，也包括為社會結構性的不公義發聲和行動。他的成功不是靠自己的力量，而是靠著一個禱告和倡議的基督徒網絡，以及對基督的呼召的長期委身。他的名言：「你或許是在黑暗中看見光，但看見光就是希望的開始。」對今天面對社會挑戰的基督徒有直接的激勵。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">政治參與與信仰純正：如何避免兩個極端</h4>
              <p className="text-gray-700 leading-relaxed">
                基督徒的政治參與有兩個危險極端：第一，完全的政治冷漠主義——「我是天上的公民，政治不是我的事」，這使基督徒放棄了鹽和光的呼召，讓社會喪失了基督徒的貢獻。第二，政治迷信主義——相信正確的政黨執政就能實現神的國度，結果是教會被特定政治意識形態所捆綁，福音被政治化。歷史顯示，當教會與特定政治力量結合太緊密時，兩者都受損：教會失去先知性的獨立聲音，政治失去教會的道德制衡。聖經的原則是：基督徒應當積極地在社會中做公義的見證（作為受造物的管理者、作為鄰舍的愛者），但效忠對象首先是基督，而非任何政黨或政治意識形態。在任何政治問題上，都應以「神的話語怎麼說？」為首要考量，而非「我的黨的立場是什麼？」。這要求我們具備批判性思維和屬靈辨別力，能夠在政治辯論的喧囂中保持以神話語為錨的判斷。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">整全宣教：福音傳揚與社會關懷的關係</h4>
              <p className="text-gray-700 leading-relaxed">
                二十世紀的宣教神學曾有一場激烈的爭論：「整體性宣教」（holistic mission）與「傳播福音為主的宣教」的對立。前者強調社會改革和人道關懷是宣教不可分割的部分；後者擔心社會關懷會取代靈魂得救的核心。洛桑宣言（1974年，比利·葛培理和約翰·斯托得聯合起草）試圖建立平衡：社會關懷是福音的表達和結果，但靈魂的得救（與神和好）是宣教的首要目的，兩者不可分割但也不應混淆。今天改革宗宣教神學的主流立場是：真正的福音同時帶來個人的更新（罪得赦免、與神和好）和社群的轉化（愛的表達、公義的追求）；不是「先傳福音再關心社會」，而是兩者都是整全宣教不可分割的部分。這個整體觀使基督徒社會參與有神學根基——不是出於「基督徒應當做好公民」的道德義務，而是出於「神愛世界，差遣祂兒子」的宇宙性宣教使命。
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
              <p className="text-gray-700">「天上的公民，地上的責任」——你目前的生活方式，更傾向於哪個極端：太過「屬天」而逃避社會責任，還是太過「屬地」而失去了天國子民的獨特性？這個傾向如何影響你對社會的貢獻或見證？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">「傳揚真理和福音」——在你的工作場所、學校或社區，你有機會傳福音嗎？什麼阻礙了你主動分享信仰？那個阻礙（怕人拒絕？覺得自己不夠好？）是否是撒但攔阻你宣教使命的策略？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">「關懷貧窮和受苦者」——目前在你的能力和資源範圍內，你如何具體地回應社會中的貧窮和不公義？你是否有感到神特別呼召你關注的某個社會議題？是什麼阻礙了你更多地回應？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">「在道德問題上按聖經發聲」——你所在的社會目前有什麼道德議題，你認為基督徒有責任發聲？你是否曾公開為聖經的道德立場辯護？那個經驗如何？文化的壓力如何影響你是否開口？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">「鹽和光」——在你的日常生活環境（工作、鄰舍、線上社群）中，你的信仰有多少實際的可見性？你的非基督徒朋友或同事，從你的生命中能看見什麼是「不同的」？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">讀完整本《與撒但爭戰》，你對屬靈爭戰的認識和個人的靈命狀態有什麼最重要的改變？你的「下一步」是什麼——在個人信仰、教會生活或社會參與中，你要採取的最具體的一步行動？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 識別你的「鹽和光」的具體場景</h4>
              <p className="text-gray-700 mb-2">思考你每天進入的不同環境，識別你作為「鹽和光」最有影響力的三個具體場景。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>場景可以是：工作場所、家庭、社區、網絡社群、孩子的學校等</li>
                <li>在每個場景中，問：「我的基督徒身份在這裡有多可見？有多真實的影響？」</li>
                <li>識別在哪個場景，你有最多的機會作福音的見證（無論是語言上還是生命上）</li>
                <li>為那個場景制定一個具體的「光照計劃」：接下來一個月，你在那個場景要採取什麼具體行動讓基督的光照耀？</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 閱讀威伯福斯的故事，獲得激勵</h4>
              <p className="text-gray-700 mb-2">閱讀威廉·威伯福斯的傳記或他的重要著作，讓他的生命激勵你的整體性基督徒見證。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>可閱讀：約翰·派博的《今天活這個》（Living This Day）中關於威伯福斯的章節</li>
                <li>或閱讀威伯福斯的《真正的基督教》（Real Christianity）的部分章節</li>
                <li>思考：威伯福斯面對的阻礙（政治反對、健康問題、長期失敗）與你面對的阻礙相比如何？他的持之以恆從哪裡來？</li>
                <li>問自己：若我有威伯福斯的委身精神，我在我的範圍內會採取什麼行動？</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 為社會的具體需要建立代禱</h4>
              <p className="text-gray-700 mb-2">選擇一個你所在社會中的具體需要或不公義，開始有規律地為它代禱並尋求參與。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>可以是：未信主的家庭成員、社區中的弱勢群體、你所在城市的福音需要、台灣社會特定的道德挑戰</li>
                <li>每周至少一次為這個需要代禱，同時尋求你能貢獻的具體方式</li>
                <li>與教會中有相同關懷的肢體聯繫，探討是否可以有集體的回應</li>
                <li>若有機會，以行動支持或參與一個已在這個領域工作的基督徒組織</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">✝️ 整本書的回顧與前行宣言</h4>
              <p className="text-gray-700 mb-2">完成《與撒但爭戰》的閱讀後，花時間做一個整體回顧，並寫下你的「前行宣言」。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>回顧：這本書最重要的三個洞見，改變了你對屬靈爭戰的哪些認識？</li>
                <li>承認：這本書讓你承認在屬靈爭戰中哪些不足或忽略？</li>
                <li>決志：根據這本書，你在個人信仰、教會生活和社會參與中，各要採取的最重要一步是什麼？</li>
                <li>把這個「前行宣言」寫下來，分享給一個能為你問責的肢體</li>
                <li>一年後，回顧這個宣言，評估你的進展，感謝神的保守和恩典</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-rose-50 border border-red-100 rounded-lg p-5 mt-2">
              <h4 className="font-semibold text-red-800 mb-3">🙏 全書結束禱告</h4>
              <p className="text-gray-700 leading-relaxed italic text-sm">
                「萬軍之主耶和華，感謝祢，藉著這本書，讓我更深地認識了我的仇敵，也更深地認識了祢的得勝。感謝祢，撒但的策略不是秘密——祢在祢的話語中早已揭露。感謝祢，在基督裡，他的失敗是確定的。
              </p>
              <p className="text-gray-700 leading-relaxed italic text-sm mt-3">
                「今天，我站在祢面前，穿上祢所賜的全副軍裝：以真理束腰，以公義護心，以平安穩步，以信心為盾，以救恩護頭。我拿起聖靈的寶劍，靠著聖靈多方禱告。
              </p>
              <p className="text-gray-700 leading-relaxed italic text-sm mt-3">
                「讓我在個人生命中按祢應許的身份而活；在教會生活中為合一和純正盡我本份；在社會公民的崗位上，成為鹽和光，傳揚福音，關懷受苦者，為公義發聲。
              </p>
              <p className="text-gray-700 leading-relaxed italic text-sm mt-3">
                「在一切爭戰中，讓我的眼目不在敵人身上，而在那得勝的主身上——萬王之王，萬主之主，曾被殺的羔羊，如今坐在寶座上的那一位。直到祂再來，讓我忠心站立。奉主耶穌基督得勝的名，阿們。」
              </p>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
