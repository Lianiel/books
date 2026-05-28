import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Users, Search, HelpCircle, Check } from 'lucide-react';

export default function Book17Ch13() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    application: true,
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">第十三章</h1>
        <h2 className="text-xl font-semibold text-gray-700">合一與多元（十二1-31）</h2>
      </div>

      {/* 經文要義 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">經文要義</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">一、聖靈與基督（十二1-3）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅在十二章1節開宗明義談「屬靈的恩賜」，這一大段一直延續到十四章40節。在結構上類似九至十一章：頭尾的十二章和十四章談主題，中間的十三章討論一個重要原則。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅在談恩賜之前，先強調哥林多信徒必須學會分辨「真靈」與「假靈」。最主要的分別在於對耶穌的態度：「被神的靈感動的，沒有說『耶穌是可咒詛的』；若不是被聖靈感動的，也沒有能說『耶穌是主』的。」（第3節）受邪靈牽引者會敬拜偶像；被真神的靈感動的則敬拜耶穌。真正聖靈的工作，不僅僅是引領人「順服聖靈」，更是引領人離棄偶像，順服主耶穌基督。
              </p>
              <p className="text-gray-700 leading-relaxed">
                「說耶穌是主」不只是口頭上的承認，還必須包括心裡相信祂是主、相信祂的復活，心口合一才叫相信。辨別一個人身上的靈是真是假，除超自然現象外，還要看他信仰的內容及行為的表現。保羅由此指出：聖靈工作與聖子主耶穌和聖道三者不可分割。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">二、聖靈與基督的身體——教會（十二4-31）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅在4-11節反覆使用兩個字：「分別」（出現在4、5、6、11節）和「一位」或「同一位」（出現在4、5、6、8、9及11節）。用現代術語，是「多元而合一，異中有同」。保羅故意用對比方式：靈恩可稱為「恩賜」（聖靈所賜的恩典）、「職事」（服務性事工）或「功用」（神能力的運作）——這些都是多樣的，但其來源是「同一位聖靈」，事奉的對象是「同一位主耶穌基督」，背後是「同一位神」在所有人中間運作。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在8-11節，保羅列出九種恩賜，強調「同中有異」。值得特別注意的是智慧的言語（根據神的啟示應用在生活上的亮光）、知識的言語（對聖經系統性的理解和對神的認識）和信心（能夠移山的信心，非得救的信心）。恩賜的分配是「聖靈按自己的意思個別地分給各人」，強調的是神的主權，而非人的判斷。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在12-26節，保羅用人的身體說明基督的身體。第13節使用加拉太書三章27-28節的語言：「不拘是猶太人，是希臘人，是為奴的，是自主的，都從一位聖靈受洗，飲於一位聖靈。」在基督裡的一體，是已經完成的事實。信徒彼此相屬，不能孤立於外，不能因恩賜不同而自我抽離，也不能因恩賜不同而否定自己是身體的一部分（15-20節）。21-26節指出信徒不能互相排斥，必須彼此配搭，有難同當、有樂共用。神特別顧念那些軟弱的、不體面的——這呼應第一章神智慧救恩的特質。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                27-30節是全章的結語。保羅在第28節所提到的恩賜，與8-10節的列表並不完全相同——新增了使徒、教師、幫助人的和治理事的；且29-30節的清單也與28節有差異。聖經學者因此幾乎都同意，保羅在書信中並沒有把所有的恩賜都列出來。恩賜有三大類型：傳達神資訊的（使徒、先知、教師）、行動類的（行異能、醫病、幫助人、治理的），以及方言類的。保羅故意將方言放在最後，不要哥林多信徒過分高估方言的重要性。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                在哥林多前書第十二章，保羅談聖靈恩賜的問題。他先簡要指出恩賜既然是聖靈所賜，就不能違背聖靈工作最主要的目的，即帶領人接受耶穌基督為生命的主宰。接著，他用相當長的篇幅從不同角度強調：恩賜不同，但在三一真神的引領下是合一的。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 省思與應用 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('application')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-teal-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">省思與應用</span>
          </div>
          {expanded['application'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['application'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-gray-800 mb-2">一、聖靈、聖子與聖道</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                在世俗文化中，一般華人通常以個人及家族的利益為中心，只要神靈「靈驗」，就會照拜不誤。現代人則受哲學和科學觀影響，活在一個仿佛沒有鬼神的世界，一旦遇上超自然的靈異事件，也就難分真假。但保羅在十二章1-3節清楚提示：超自然的事不一定都是聖靈的工作，也可以出於邪靈。在舊約聖經中，異教先知也會行法術；在生長於傳統中國社會背景的人，也知道其他宗教也有講方言、醫病、特別啟示和指引的現象。「靈恩」現象本身，並不是只有在聖靈充滿之下才會發生的！這是常識，也是聖經的教導。一方面固然不能說我們所信的神「不靈」，但卻也不能單純以「靈驗」與否作為衡量真理唯一的準則。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                根據保羅在十二章1-3節的教導，聖靈工作最大的特點，就是聖靈與聖子主耶穌和聖道三者不可分割，因為聖靈的工作就是使人承認耶穌是主。在這一點上，作者覺得近代基督教中的福音派與靈恩派之分是非常不幸的事。從靈恩的角度看，沒有福音的靈恩怎麼會合乎聖經的恩典？從福音的角度看，沒有聖靈工作的福音，怎能讓那些不信者認識那叫人從死裡復活的創造真主？
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在華人教會中，由於十九世紀以來一直到現今大陸的教會，都有神蹟奇事發生，大部分的基督徒都能接受現今的醫病和方言等恩賜，也相信神對不同的信徒有時有個別性的引領；目前華人教會中所謂靈恩與福音之爭，主要是爭論敬拜的形式和某些恩賜的應用和重要性，而這些議題在聖經中其實都是次要的。為著一些次要的差異而分門別類，是非常不值得的事。在聖經中，有福音的必定有聖靈，有聖靈的也必定有福音。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                整體而言，作者覺得福音派和靈恩派事實上有相當大的共識。從二十世紀初第一波的五旬節運動開始，宣教熱誠向來是靈恩派的特點；而福音派的特點也是傳福音，承認重生是聖靈工作的結果。今日教會真正需要的，是承認雙方整全的現象，不要將個人接觸到的個別現象擴展為整體的事實。若是有人在聖靈與聖子和聖道的平衡上有偏差，就要承認這並不合乎聖經，需要調整並勇於改正。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">二、恩賜多元、教會合一</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                根據聖經教導，聖靈的工作帶來的應該是教會的合一。幾乎每一個自稱經歷聖靈特別工作的教會和傳道人，也必定宣稱自己以教會合一為目的。可是，吊詭的是，幾乎每一次的結果，都是帶來教會的分裂！在華人教會中，二十世紀上半葉的小群運動，產生了一個不把其他教會當成教會的特殊教會團體；而二十世紀下半葉的第二波和第三波的靈恩運動，雖然相對減少了分裂，但在華人教會中仍不幸造成不少分裂。若不是保羅寫信教導哥林多信徒，恐怕在第一世紀也已經產生了保羅、彼得和亞波羅三個大宗派教會了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                主要的原因，是基督徒沒有充分掌握這章經文中的「差異與合一」。恩賜的主權在神和聖靈，每個人都要學習接受聖靈的恩典，也要接受別人不同的恩賜。羨慕他人的恩賜，可以向天父禱告，但是否能得到所祈求的，決定權在神，不在我們。使徒雖然重要，但不是所有的人都是使徒；先知亦重要，但絕非所有的人都是先知；方言有它的功能，但不是所有的人都需要說方言。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者在成長過程中，不少人看到宋尚節之類的奮興佈道家大有能力引領許多人歸主，就會期望所有傳道者都像宋尚節；有些傳道人甚至模仿他，連言行、舉止乃至衣著都跟他一樣。後來在神學院教書時，有時聽到的訊息是：你們這些書呆子，不是教會的牧者，所以沒有資格教神學；而神學院老師在有意無意之間，釋放給牧者的訊息是：你們不像我們通曉神學，所以不是好牧者。近來常聽到的訊息則是：方言很有益處，所以要追求方言。當我們強調自己所重視的恩賜時，往往帶著滿腔熱忱，卻在不經意間否定其他的恩賜，而且傷害了那些沒有同樣恩賜的人而不自覺。我們都錯了！保羅談恩賜，是要讀者注意賜恩者和祂的主權；而我們卻是注意自己有什麼、要什麼。保羅談恩賜，是要讀者接受他人的不同；但今日談恩賜，則是強調每個人都可以一樣。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                目前在華人教會中，有些福音派人士根據第7節，將聖靈工作分為「內住」與「外顯」兩種，認為自己的福音派是注重內住，與靈恩派注重外顯截然不同。說恩賜是聖靈的外顯是合乎聖經的，但也不應忘記保羅在第6節指出，這種外顯是神在信徒中間運作的結果——內住與外顯並不是對立的，外顯是為讓人看見內住。作者是福音派人士，反省自身的傳統，發現福音派其實也非常注重外顯的恩賜，與靈恩派的差別或許只是：前者注重講道，後者注重另外的恩賜而已。根據保羅的教導，專注於某種恩賜而排斥其他的恩賜，都是合一的致命傷！
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經用「一體」的觀念，針對了普通人最常見的兩種毛病：優越感和自卑感。兩者都可能產生孤僻與排斥他人的毛病。當一個人因自卑或自傲而排斥其他肢體時，這非但是不對的，更是不可能的，因為他已是身體的一部分。若真的要除掉對方，也就等於是傷害自己——手若砍斷腳，結果是自己變成殘廢。人認為最不成器的，可能是教會最需要的人：「身上肢體，我們看為不體面的，越發給他加上體面；不俊美的，越發得著俊美。」（23-24節）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者有一位主內朋友分享他事奉的經歷：在他負責的教會機構中，另有一位重要的同工，其個性和恩賜都和他大不相同。一個講究快速執行力，另一個凡事仔細考量；一個強調務實，另一個充滿理想。在合作過程中，他感覺相當痛苦。可是回頭看來，他非常感謝神，機構的發展因為彼此的協調，得以走上正軌。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                福樂宣教學院的黃光榮牧師，談到華人教會的需要時，認為應該從傳統的長者掌控、倚賴性的社會結構走出來，但真正的目標不該是現代人所強調的個人性的獨立自主，而是合乎聖經的彼此信賴、扶持與配搭。在個人的層次上，學會了彼此配搭，可以同時肯定個人的價值，並謙虛地承認自己的不足。在個別教會的層次上，可以減輕牧者和所有事奉者無形的壓力，不再要求一些人無所不能，同時讓教會各方面的事奉做得更好。在整體的教會中，也可以減少教會與教會之間許多的對立和批評。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                回顧教會歷史，可以看見路德的信義宗、加爾文的長老宗和衛斯理宗彼此的不同，但都有它們獨特的貢獻。祈望在未來的日子，在主的恩典下也可以看到福音派、靈恩派彰顯出主內的合一，有一天，甚至是基督教、天主教和東正教在主內的合一。
              </p>
            </div>
            <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-teal-400">
              <h4 className="font-bold text-teal-800 mb-2">默想</h4>
              <p className="text-gray-700 leading-relaxed">
                保羅談論到聖靈恩賜的課題時，首先做的一件事，就是幫助哥林多信徒回到他們剛開始作為基督徒的時刻，明白他們信心的根基：一主、一信、一洗、一聖靈。同時，保羅也提醒信徒們：恩賜的主權在乎聖靈，而不同恩賜的信徒在基督裡都是一體的，因此，要學習彼此的接納。
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
              <h4 className="font-semibold text-gray-800 mb-2">一、五旬節運動與靈恩更新運動的歷史發展</h4>
              <p className="text-gray-700 leading-relaxed">
                二十世紀的靈恩復興通常被學者劃分為三波：第一波五旬節運動（1900年代初，以阿蘇薩街復興為代表）、第二波靈恩更新運動（1960年代，滲透主流宗派，強調在原有教會內更新）、第三波「signs and wonders」運動（1980年代，以MC Vineyard系的Fuller School of World Mission為中心）。歷史學家Walter Hollenweger指出，五旬節主義的根源相當複雜，包括了衛斯理的聖潔運動、非洲裔美國基督徒的靈性傳統及天主教的神秘主義。這一歷史脈絡說明，靈恩運動並非單一起源，而是多元的屬靈河流的匯聚，其神學多樣性也因此相當大，不能用單一的「靈恩派」概念涵蓋全部現象。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">二、「身體」隱喻的哲學背景與保羅的運用</h4>
              <p className="text-gray-700 leading-relaxed">
                保羅用身體比喻社會共同體，並非原創，而是借鑒了當時流行的斯多葛哲學及羅馬政治修辭中的「身體比喻」（body politic）。羅馬歷史學家李維（Livy）記載了著名的「Menenius Agrippa寓言」，講述四肢拒絕為腸胃工作而導致全身虛弱的故事，用以說服平民與貴族合作。保羅借用這一隱喻，但賦予全新的神學意涵：這個身體是「基督的身體」，其合一的基礎不是羅馬帝國的社會秩序，而是因「同一位聖靈受洗，飲於一位聖靈」（十二13）。保羅的革命性在於，他打破了羅馬式的社會等級結構，宣告奴隸與自由人在這個身體裡擁有同等的尊嚴和不可缺少的功能。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">三、恩賜清單的系統神學意義</h4>
              <p className="text-gray-700 leading-relaxed">
                新約中的恩賜清單出現在四處：哥林多前書十二章8-10節、28-30節、羅馬書十二章6-8節、以弗所書四章11節。四個清單各不相同，沒有任何一種恩賜同時出現在所有四個清單中。系統神學家Fee和Grudem的爭論部分圍繞於此：有人因清單的多樣性而主張清單是「例舉性的」（illustrative），而非「排他性的」（exhaustive）；另一些人則試圖從四個清單中歸納出一個「完整的」恩賜系統。保羅本人的關切似乎更接近前者——他的目的不是建立恩賜的系統分類學，而是通過列舉多樣性，來打破哥林多人對特定恩賜（尤其是方言）的偶像化。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">四、使徒職分在教會歷史中的演變</h4>
              <p className="text-gray-700 leading-relaxed">
                「使徒」一詞在新約時代仍未定型，但在第二世紀的《十二使徒遺訓》（Didache）中，已出現對「旅行使徒」（traveling apostles）的具體規範：一位使徒若在一地逗留超過三天，便可能是假使徒。這暗示當時教會社群中存在許多自稱使徒的人，需要辨別的準則。從第三世紀起，使徒職分逐漸被制度化，與主教（bishop）的職份合併，強調歷史上的「使徒傳承」（apostolic succession）。天主教和東正教以此建立神職人員的權威鏈；而新教宗教改革則打破了這一制度性的理解，強調「使徒性的使命」（apostolic mission）可以由任何被聖靈呼召的人承擔，這也是現代宣教士被部分學者視為「使徒職分的功能性延續」的神學基礎。
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
              <p className="text-gray-700">保羅說辨別靈的真假，最主要的標準是「對耶穌的態度」——是否承認耶穌是主。你認為這個標準如何應用於今日各種宗教或靈性體驗的判斷？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">作者說「靈恩現象本身，並不是只有在聖靈充滿之下才會發生的」。這個提醒對你有什麼意義？你在評估屬靈現象時，通常使用什麼標準？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">作者描述吊詭的現象：幾乎每一次「聖靈工作」都帶來教會的分裂。你認為這個吊詭的根本原因是什麼？如何在強調屬靈恩賜的同時維護教會的合一？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">你在教會或事奉中，是否有過模仿某位屬靈偉人的經歷或衝動（如同模仿宋尚節）？這種傾向的背後是什麼心理，它如何影響你發現自己真正的恩賜？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">保羅說恩賜是「聖靈按自己的意思個別地分給各人」，這意味著恩賜的分配不在於我們的祈求或努力。這個真理如何改變你對自己恩賜的認識和對他人不同恩賜的態度？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">作者分享他的朋友與一位個性完全不同的同工合作——痛苦但最終感謝神。你是否有類似的經歷？那段經歷如何幫助你理解恩賜多元配搭的意義？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">7.</span>
              <p className="text-gray-700">黃光榮牧師說，華人教會需要從「長者掌控、倚賴性的社會結構」走向「彼此信賴、扶持與配搭」。你認為在你的教會文化中，這種轉變的最大障礙是什麼？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">8.</span>
              <p className="text-gray-700">聖經用「一體」的觀念同時糾正優越感和自卑感。你在教會生活中，更容易傾向哪一種問題？這個問題如何影響你與其他肢體的關係？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 發現並肯定自己的恩賜</h4>
              <p className="text-gray-700 mb-2">根據保羅的教導，每位信徒都從聖靈領受了恩賜，但恩賜的發現需要群體的確認。本週做一個具體的探索：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>列出你在服侍他人時，讓你感到最有活力、最自然的三件事</li>
                <li>詢問兩至三位了解你的弟兄姊妹：「你覺得我最能幫助教會的地方是什麼？」</li>
                <li>比較內外的觀察，在禱告中向神開放，求祂確認並啟動你的恩賜</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🤝 主動接納一位與你不同的肢體</h4>
              <p className="text-gray-700 mb-2">保羅在十二章強調要接受他人不同的恩賜。識別一位在風格、恩賜或神學立場上與你很不相同的肢體：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>主動邀請他/她分享他們的信仰歷程和事奉經驗</li>
                <li>以「學習」而非「評判」的態度聆聽，找出他們恩賜中你自己所欠缺的部分</li>
                <li>找一件具體的事，在這週藉著他們的不同恩賜讓你的事奉更加完整</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 查考自己對靈恩問題的立場根基</h4>
              <p className="text-gray-700 mb-2">作者坦誠承認自己在靈恩問題上修正了一些看法。這週花時間誠實地反省自己的立場：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>你對靈恩問題（如方言、醫病、先知恩賜）的立場，是基於什麼？是個人的感受經歷、教會的傳統、還是認真研讀聖經的結論？</li>
                <li>閱讀哥林多前書十二至十四章，嘗試不帶預設立場地讀一遍，記下令你驚訝或不舒服的地方</li>
                <li>思考：你的立場是否需要調整？你是否在某些點上「只注重自己重視的恩賜，否定其他的恩賜」？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💬 打破教會之間的隔閡</h4>
              <p className="text-gray-700 mb-2">保羅的心志是讓不同宗派和傳統的信徒，共同見證基督身體的合一。本月嘗試一個跨越教會邊界的行動：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>參加一次不同宗派教會的聚會（可以是福音派、靈恩派、長老宗、循道宗等），以開放的心態觀察他們如何敬拜神</li>
                <li>記錄你在那次聚會中看到的聖靈工作的痕跡</li>
                <li>反思：他們哪些地方的確有你自己教會所欠缺的？</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 leading-relaxed text-lg">
                聖靈啊，求祢幫助我真正明白保羅在這章所說的話——我的恩賜是祢按祢自己的旨意賜給我的，不是我的功勞，也不是我可以驕傲的。求祢除去我因恩賜不同而來的優越感，也除去我因自己的恩賜而來的自卑感。求祢讓我在基督的身體中，看見每一位肢體都是祢精心安排的，都是不可缺少的。教導我學習欣賞並接納那些與我不同的弟兄姊妹，讓我們彼此配搭，共同建造那合一、豐盛、榮耀的教會。阿們。
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
