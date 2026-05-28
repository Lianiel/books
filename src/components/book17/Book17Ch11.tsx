import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Users, Search, HelpCircle, Check } from 'lucide-react';

export default function Book17Ch11() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    application: true,
    exploration: true,
    questions: true,
    practice: true,
  });

  const toggleSection = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">第十一章</h1>
        <h2 className="text-xl font-semibold text-gray-700">從食物與神的關係看自由的底線</h2>
        <p className="text-sm text-gray-500 mt-1">哥林多前書 十1-十一1</p>
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
            <p className="text-gray-600 text-sm leading-relaxed border-l-4 border-purple-200 pl-3">基本上，第十章的結構可分為兩大段。第一段是1至22節，從以色列人身上學習歷史的功課。第二段是十章23節至十一章1節，是保羅對整件事的結論，為哥林多信徒提出不同情境下的對應之道。從第十章的第二大段，可以看到哥林多前書第十章在主題上與第八章相似，談的還是吃祭拜過偶像之食物的問題。不過，在第十章，他是以舊約的以色列人為例，說明拜偶像的危險。</p>

            <div>
              <h4 className="font-semibold text-purple-700 mb-3">一、歷史的功課（十1-22）</h4>
              <p className="text-gray-700 leading-relaxed mb-2">十章1至22節的功能，從保羅在第6節與第11節的話語可以看見。他在第6節說：「這些事都是我們的鑒戒，叫我們……」；在第11節，他又說：「他們遭遇這些事都要作為鑒戒，並且寫在經上，正是警戒我們這末世的人。」舊約聖經的記載，可以作為新約時代基督徒的鑒戒。</p>
              <p className="text-gray-700 leading-relaxed mb-2">這段經文另一個重要經節是十章13節：「試探」這個字在希臘原文，其實與「試煉」是同一個字。它所要表達的思想是：世上生活中的每一件事，在在都考驗著我們到底是怎樣的一個人。撒但要我們在考驗中失敗；但神要我們經得起試驗。所以撒但可以在我們的生活上「試探」我們；神卻可以用同樣的事來「試煉」我們。可惜的是，以色列人失敗了。但是，保羅在這裡提醒我們：這並不是必然如此，因為神在祂的恩典中，常常為我們提供出路。</p>
              <p className="text-gray-700 leading-relaxed mb-2">在1至5節，保羅首先講述舊約中以色列人的歷史，共有三個重點。第一，他在1至4節借著五個「都」字和兩個「一樣」，強調以色列民共同的經歷——都在雲下、都從海中經過、都吃一樣的靈食、都喝一樣的靈水。第二，他所用的語言，表示這些人的經歷與新約時代的信徒類似——以色列人在雲裡和海裡是「受洗歸了摩西」，而他們所吃的嗎哪和從磐石所喝的水，也是「靈食」和「靈水」。第三，他在第5節說：「但他們中間多半是神不喜歡的人，所以在曠野倒斃。」</p>
              <p className="text-gray-700 leading-relaxed mb-2">在6至13節，保羅指出以色列人因犯罪所得到懲罰，給我們的鑒戒是：不要像他們一樣行惡事、拜偶像、犯姦淫、試探主、發怨言。保羅在第12節更是針對著一些自認為剛強的人，提出嚴重的警告，絕對不能有虛偽的安全感，因為自以為站得穩的都有可能跌倒。</p>
              <p className="text-gray-700 leading-relaxed mb-2">從第14節開始，一直到第22節，整段經文的重心是放在拜偶像的這件事情上，主題是「逃避拜偶像的事」。保羅在這段複雜的論述中，有三個重點。第一個重點是16至17節：當基督徒領受聖餐的時候，他們是「一同有分於」基督的血和身體，所以聖餐不僅是表達基督徒與主耶穌的關係，也是表示所有基督徒，都是耶穌基督一家的人。第二個重點是20至21節：雖然食物本身不算什麼，偶像本身也不具意義，但在偶像與祭品的背後是有邪靈的勢力，拜偶像的人其實是在祭鬼，所以若是吃了祭鬼之物，就等於與鬼有分了。第三個重點是第22節：神是忌邪的神，而且非常有能力，信徒絕對不可忽視。</p>
            </div>

            <div>
              <h4 className="font-semibold text-purple-700 mb-3">二、實際的指示（十23-十一1）</h4>
              <p className="text-gray-700 leading-relaxed mb-2">從第八章至第十章討論吃祭拜偶像之物的經文，可以看到兩方面的認知。第一，從知識方面而言，這件事情涉及了「知識」所扮演的功能。第二，從拜偶像的宗教意義來看此問題，它涉及了聖經中最基本的界線，就是神與偶像之間絕對的對立。故此，十章23節至十一章1節這段經文，即是根據上面兩點，提出實際行動上的指示。</p>
              <p className="text-gray-700 leading-relaxed mb-2">首先，保羅在23至24節談到運用自由的原則——「凡事我都可行，但不都有益處」。所謂的「自由」，不是自以為要怎樣就可以去行，還得問問弟兄是否會因此而跌倒，是否對弟兄有益處。</p>
              <p className="text-gray-700 leading-relaxed mb-2">25至30節談的是實際上的運用，提出幾種不同的情境。第一，「凡市上所賣的，你們只管吃。」（25節）第二，若不信的人請你赴席，「只管吃，不要為良心的緣故問什麼話」（27節）。但是若有人告訴你這是祭過偶像的，就不要吃（28節）——因為那人會如此告訴你，表示他的良心不安，所以為著對方良心的緣故，為了體貼弟兄的軟弱，就不該吃。</p>
              <p className="text-gray-700 leading-relaxed">31至32節談的又是一般性的原則——凡事都為榮耀神而行，不要叫弟兄跌倒。十一章1節的話，可以說是保羅的結語：保羅要求哥林多信徒效法他，因為他效法基督——不求自己的益處，只求眾人的益處，為要叫人能夠得救。</p>
            </div>

            <div className="border-t border-purple-100 pt-4">
              <h4 className="font-semibold text-purple-700 mb-3">結語</h4>
              <p className="text-gray-700 leading-relaxed">保羅在第十章繼續他在第八章的主題，集中談論拜偶像的問題。他首先盡力讓哥林多信徒看到拜偶像的嚴重性，然後為此問題提供一些基本原則和實際可行的解決方案。保羅把這件事情放在一個更大的架構中，讓哥林多的信徒看到他們是屬神的人，在領受聖餐時，更是與其他的信徒一同分享神的恩典，所以在生活上也共同經歷著信仰的試驗。因此，這章經文不僅為歷代的信徒解決了吃祭拜偶像之物的問題，也提供了信徒生活的基本原則，可以應用在其他的情境中。</p>
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
          <div className="p-5 bg-white space-y-6">
            <p className="text-gray-600 text-sm leading-relaxed border-l-4 border-teal-200 pl-3">身為華人基督徒，不難理解保羅在哥林多前書八至十章所談的問題，因為我們與他們有類似的處境。在我們的環境中，就如哥林多的基督徒一樣，是社會中的少數，不可能避免佛教、民間宗教及世俗文化的衝擊。有時候，有些年輕基督徒的父母是極傳統的中國人，家中常有祭祖的事情。因此他們常要面對的問題常是：當父母要我參與祭祖時，要與他們一同跪拜，可以嗎？若是不跪拜，可以在場嗎？他們說這只是「孝道」的表現，難道基督徒不應該孝敬父母嗎？此外，祭祖預備的食物，常成為當天晚餐的佐菜，我可以吃嗎？不吃的話不僅會餓肚子，還會被責備甚至是挨揍的。</p>

            <div>
              <h4 className="font-semibold text-teal-700 mb-3">一、相對與絕對</h4>
              <p className="text-gray-700 leading-relaxed mb-2">讀哥林多前書這段經文，常會有個第一印象，那就是——保羅在個別段落所說的話相當容易掌握，但是整體的思路上卻難以捉摸。為什麼保羅要在第九章大談「自由」？為什麼他在第十章又轉了一個題目去論「拜偶像」？為什麼他一方面告訴人：為弟兄的緣故不吃祭偶像之物，另一方面又說凡市場上買的東西都可以吃，而且赴宴時的東西也都可以吃？</p>
              <p className="text-gray-700 leading-relaxed mb-2">筆者反省以後，發現會有這樣的印象，主要是因為我們過去常是以「可以或不可以」和「對或不對」這種簡單的二分法看待所有的事情。然而，保羅在哥林多前書第八至十章所處理的事件卻是相當複雜——第一，這個問題所涉及的範圍非常廣泛，連市場上的肉都可能是祭拜過偶像的；第二，也是更重要的是：那些有知識的人所說的話雖然不夠全面，卻又絕非無理——偶像既不是神，世上所有的東西亦都是神所造的。</p>
              <p className="text-gray-700 leading-relaxed mb-2">保羅處理這個問題，是兼顧了知識、自由和實際的處境而提供出路。他在十章23節至十一章1節的結論，讓我們看到在這件事上，既不是絕對不可吃，也不是絕對可以吃。可是，當一些人吃了本來是可以吃的食物，卻不顧其他弟兄姊妹的死活時，他們所做的事便成為錯誤，得罪了基督。換言之，有時候對與不對的分界是在乎信徒的心態。</p>
              <p className="text-gray-700 leading-relaxed">然而，這並不表示所有的事情在保羅的眼中都是相對的。在十章1至22節的回應中，保羅更指出以色列人和新約的信徒，都有一件絕對不能妥協的——就是在敬拜獨一真神、離開罪惡的事上，絕不能被任何事物所取代。保羅的警告是要我們不陷在罪中。也許我們可以說，當我們為著絕對與相對而爭論時，事實上更好的思考方式，是承認在對與不對之間，另有一個自由的空間，在這個自由的空間中，擁有可選擇的自由，且在選擇的時候，仍然是有原則可循。</p>
            </div>

            <div>
              <h4 className="font-semibold text-teal-700 mb-3">二、運用自由的原則</h4>
              <p className="text-gray-700 leading-relaxed mb-2">自由的運用是現今世代的一個大問題。最近在一份通訊刊物上，看到了一則小悲劇：一個朋友的女兒剛滿十八歲。她覺得終於成人了，可以擁有完全的自由，想做什麼就做什麼；終於能真正地活著了！十八歲生日的那個晚上，就開始享受所期望的自由：抽煙、喝酒，放縱情欲。過了兩年，她寄來一封信，上面寫著說：完全灰心失望，因為上了癮，正在心理治療中。自由帶給她的是痛苦！</p>
              <p className="text-gray-700 leading-relaxed mb-2">在哥林多前書第十章，看見的不單是混亂，甚至產生罪惡。而這些現象不單是在哥林多教會出現，早在三千四百年前，當以色列人離開埃及，好像不用再作奴隸之時，也產生同樣現象。「自由」確實讓一些人將所有的事情，都當作是相對的。在二十一世紀的今天，我們面臨最大的問題之一即在此。上個世紀六十年代所流行的自由，就是把所有的事情都看作「相對」的，範圍涉及所有的事物，包括：吃的食物、性的關係等等。</p>
              <p className="text-gray-700 leading-relaxed mb-2">使徒保羅談及拜偶像之物是否可吃時，他特別提醒：哥林多信徒現今是自由了，但要知道如何正確使用這自由。保羅在哥林多前書第八章告訴我們，運用自由的時候需要考量軟弱的弟兄；在第九章，他說明自由是一種權利，但可以為愛的緣故而放棄；十章1至22節，保羅又再次說明兩個自由的原則。第一個原則，可以借用馬丁路德的一句話來表達：基督徒是完全自由的，是一切的主宰，不受任何人管轄；同時基督徒是完全負責任的，是一切人的奴僕，受所有的人管轄。第二，自由不是犯罪，特別是不可拜偶像——這是自由的底線。因此，「一信得救，永遠得救」真正的意義是：信徒可以在神的恩典中，擁有不犯罪的自由，但是並不提供犯罪的自由。</p>
              <p className="text-gray-700 leading-relaxed">保羅更是提醒信徒，擁有自由了，所以自身更有責任。每個人（包括基督徒）都需要去面對的，就是每天生活中所作的抉擇，而保羅在十章13節所用的言語是：我們每天生活中都要面臨的試探。因此保羅嚴重警告當時的哥林多教會信徒，在每天的生活當中，要怎樣「活」是非常重要的。雖然保羅在這段是談論吃祭拜偶像之物的問題，但從這件事情的爭論中，卻看見一個更重要的原則——如何作選擇？不要以為每一天生活的抉擇不重要，事實上關係重大。</p>
            </div>

            <div>
              <h4 className="font-semibold text-teal-700 mb-3">三、自由的落實</h4>
              <p className="text-gray-700 leading-relaxed mb-2">當自由落實在生活中時，保羅要基督徒逃避偶像。這是整本聖經中一個絕對的教導——任何一位基督徒絕不可認為敬拜偶像是無所謂的。保羅說，雖然食物是相對的，無論在何時何處、吃何物都沒有問題，但是外邦人祭拜偶像，在偶像廟裡擺設宴席，這些人若也跟著去食用，那就需要注意，因為偶像雖然算不得什麼，但背後的邪靈卻是真實的，雖然木刻石雕的偶像不是活生生的，但其背後掌權之屬靈惡勢力卻是存在的。</p>
              <p className="text-gray-700 leading-relaxed mb-2">在華人的文化背景中，面對吃祭拜偶像之物，最類似的事情應當是祭祖問題。在二十世紀以前，祭祖不僅是個人家中的事，也是皇帝要管的事。也因為這樣，早期中國教會歷史中有所謂「禮儀之爭」，結果是天主教從此被定為不受朝廷歡迎的宗教。若仔細研究則會發現，祭祖在華人文化中其實是具有不同的意義。在儒家的理論中，它可以僅僅是一種慎終追遠的孝道表現；但在民間的習俗中，它又確實是在祭祀鬼神。筆者個人對這問題並沒有具體解決的方案，但按聖經的原則，信徒可以學習在堅持絕對的立場時，容許某種自由創作的靈活空間，同時面對那些與自己持不同見解的人，流露出主內的愛心，保持主內的合一。</p>
              <p className="text-gray-700 leading-relaxed">在這樣的情況中，保羅說信徒要學習信靠神。在日常生活中，我們往往以為：若不如此做，就會走投無路！因此往往做一些明知不行，卻偏又去做的事情。就如以色列人在西乃曠野拜偶像，為何他們會造金牛犢？因為摩西上山消失了四十天，生死未卜，以色列人失去帶領他們出埃及的領袖，前途未明，因此心生恐懼。但保羅說：事實未必如此！當我們面對試探與選擇時，要知道自覺山窮水盡疑無路時，神絕對有出路！而且神是信實的——祂不單開路，也必領路。因此在面對試探時，若以為非得做某種抉擇不可，這種思想在神眼中是絕不成立的！</p>
            </div>

            <div className="border-t border-teal-100 pt-4">
              <h4 className="font-semibold text-teal-700 mb-3">默想</h4>
              <p className="text-gray-700 leading-relaxed mb-2">在哥林多前書第十章，我們看到保羅談論吃祭偶像之物的時候，是從一個更基本的範疇裡來看，讓我們看到基督徒本來在受洗和領受聖餐的時候，就已經表示他們是屬於耶穌基督的，因此不可以故意犯罪，更不可以拜偶像。從這個更廣的角度來看，吃祭偶像之物這件事情，是基督徒生活中的一個信仰的試驗。</p>
              <p className="text-gray-700 leading-relaxed">因此，保羅在談論中也就涉及了基督徒運用自由的基本原則和應用的實例。一方面，保羅非常強調基督徒的自由是有底線的，我們沒有犯罪的自由。另一方面，保羅也讓我們看到基督徒確實是有自由，但必須在愛心的原則下靈活地運用。</p>
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
              <h4 className="font-semibold text-indigo-700 mb-2">一、中國「禮儀之爭」的歷史教訓</h4>
              <p className="text-gray-700 leading-relaxed">十七至十八世紀在中國爆發的「禮儀之爭」（Chinese Rites Controversy）是宣教歷史上最重要的爭論之一。耶穌會傳教士利瑪竇（Matteo Ricci）主張祭祖和祭孔是文化習俗而非宗教崇拜，可以被容許；但多明我會和方濟各會則強烈反對，認為這是偶像崇拜。1715年教宗克雷孟十一世頒布詔令，禁止中國基督徒參與相關禮儀，導致清廷全面禁教。這場爭論本質上與哥林多教會的問題相同：如何區分文化習俗（中性的）與宗教拜偶像（有屬靈後果的）？1939年，梵蒂岡才撤回禁令，承認祭祖可以是公民習俗。這段歷史提醒我們：對文化的理解深刻影響福音的傳播，而「一刀切」的做法往往付出極大的代價。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">二、「聖餐」（主餐）在早期教會的神學爭議</h4>
              <p className="text-gray-700 leading-relaxed">保羅在十章16至17節關於聖餐「一同有分於基督的血和身體」的論述，成為後來基督教聖餐神學的重要根基。然而，聖餐的本質在宗教改革時期引發了重大分歧：羅馬天主教主張「化質說」（transubstantiation），認為餅和酒在祝謝後實質地成為基督的身體和血；路德宗主張「同質說」（consubstantiation），認為基督的身體和血與餅酒「同在」；慈運理（Zwingli）則主張純粹的「紀念說」，認為聖餐只是象徵性的記念；加爾文的立場則介於中間，強調聖餐是屬靈上真實地與基督相交。保羅在哥林多前書第十章的強調，是聖餐作為群體共融（koinonia）的記號，而非僅僅個人的屬靈操練。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">三、「一信得救，永遠得救」與得救確據的神學張力</h4>
              <p className="text-gray-700 leading-relaxed">保羅在十章5至12節談到以色列人在曠野受洗、吃靈食，卻在曠野倒斃，這一段引發了得救確據的神學討論。加爾文宗的「一信得救，永遠得救」（perseverance of the saints）強調真正的選民必會堅持到底，但承認表面上的信徒可能是假信徒。阿民念主義（Arminianism）則認為信徒可能失去救恩。保羅在哥林多前書這段經文的目的，並非要系統性地解決這個神學爭議，而是牧養性的警告：不要因為有了屬靈的經歷（受洗、聖餐），就以為可以肆意犯罪而不受審判。無論哪種神學立場，保羅的警告都有效：「自以為站得穩的，須要謹慎，免得跌倒。」（林前十12）</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">四、後現代「相對主義」與基督教倫理的底線</h4>
              <p className="text-gray-700 leading-relaxed">陳濟民牧師在這章中提到上世紀六十年代以來流行的「相對主義」浪潮，這在哲學上與後現代主義（postmodernism）的興起密切相關。後現代主義質疑所有「宏大敘事」（grand narrative），認為沒有絕對真理，所有道德標準都是文化建構。這與哥林多信徒的問題驚人地相似：他們也用「知識」（一切偶像都不是真神）來為相對主義辯護。保羅的回應提供了一個重要的神學框架：基督徒的自由確實涉及許多「相對」的領域（文化習俗、飲食習慣、社交選擇），但有一條絕對的底線不可跨越——拜偶像（在現代語境中，包括以任何事物取代神在心中的主權地位）。這種「底線以內靈活，底線本身絕對」的倫理框架，比簡單的規則主義或相對主義都更加貼近聖經的教導。</p>
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
              <span className="text-amber-600 font-bold flex-shrink-0 text-lg">1.</span>
              <p className="text-gray-700 leading-relaxed">在你的生活和文化處境中，有沒有類似「吃祭偶像之物」的灰色地帶——有些人認為是拜偶像、有些人認為只是文化習俗的事情？你是如何辨別和處理的？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0 text-lg">2.</span>
              <p className="text-gray-700 leading-relaxed">保羅用以色列人在曠野的失敗作為鑒戒，說「自以為站得穩的，須要謹慎，免得跌倒」。在你的信仰生活中，有哪些領域是你感到「相當穩固」，但其實可能需要更多警醒的？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0 text-lg">3.</span>
              <p className="text-gray-700 leading-relaxed">那位十八歲女孩的故事，以及以色列人造金牛犢的故事，都指向人對「自由的誤用」。你認為在你所生活的社會和文化中，「自由的誤用」主要呈現在哪些形式？教會如何幫助信徒學習正確地使用自由？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0 text-lg">4.</span>
              <p className="text-gray-700 leading-relaxed">保羅說「效法」不等於「模仿」或「複製」，而是要「舉一反三」，在不同的處境中活出相同的精神。你從保羅或其他信仰前輩的榜樣中，「舉一反三」地應用在你自己的處境裡，有什麼具體的例子？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0 text-lg">5.</span>
              <p className="text-gray-700 leading-relaxed">保羅說每天生活的抉擇都非常重要，因為每個選擇背後都是一次試探或試煉。回顧過去一週，你在哪些日常的小抉擇中，感受到「試探」的壓力？你是如何回應的？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0 text-lg">6.</span>
              <p className="text-gray-700 leading-relaxed">保羅說面對試探時，神必開出路。你有沒有這樣的經歷：在一個你以為「非此不可」的情境中，神出乎意料地為你開了一條你沒有想到的路？這個經歷如何增強你信靠神的確信？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0 text-lg">7.</span>
              <p className="text-gray-700 leading-relaxed">馬丁路德說：「基督徒是完全自由的，是一切的主宰；同時基督徒是完全負責任的，是一切人的奴僕。」這兩句話放在一起，對你有什麼啟發？在你目前的生活和事奉中，這兩方面是否都得到了體現？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 繪製你的「自由地圖」</h4>
              <p className="text-gray-700 mb-2">本週花時間思考並寫下：在你的生活中，哪些事情屬於「可靈活選擇的自由區」（如：飲食習慣、娛樂方式、文化習俗），哪些事情屬於「絕對不可跨越的底線」（如：拜偶像、欺騙、放縱情欲）。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>確認你對「底線」的判斷是否有清晰的聖經根據</li>
                <li>檢視「自由區」中是否有一些事情你正在「自以為站得穩」</li>
                <li>與一位信任的弟兄姊妹分享你的「自由地圖」，互相提醒</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 處理一個文化灰色地帶</h4>
              <p className="text-gray-700 mb-2">如果你目前面對一個類似「吃祭偶像之物」的文化灰色地帶（如祭祖食物、民間節日習俗、職場應酬等），本週用保羅的四個問題來評估你的處理方式：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>這件事有沒有觸及「拜偶像」的底線？</li>
                <li>我的選擇是否考量了身邊信仰軟弱之人的感受？</li>
                <li>我的選擇是否以「榮耀神」為首要目標？</li>
                <li>我的選擇是否為福音的緣故，而非為自身的方便？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 在「試探」來臨時操練信靠</h4>
              <p className="text-gray-700 mb-2">本週每天早上用五分鐘，預先識別今天可能遇到的一個「試探」時刻（如：可能說謊的場合、可能妥協的決定、可能被引誘的情境）。然後禱告，具體交託那個時刻：「神，我知道試探要來，求袮在那一刻為我開路。」晚上記錄神如何回應了你的禱告。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">⏰ 每日抉擇的「自由使用清單」</h4>
              <p className="text-gray-700 mb-2">連續七天，每晚花三分鐘回顧當天的一個重要抉擇，並以下列問題自我評估：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>這個抉擇是否榮耀了神？</li>
                <li>這個抉擇是否體貼了他人的益處？</li>
                <li>這個抉擇是否越過了任何屬靈的底線？</li>
                <li>如果重來，我會作什麼不同的選擇？</li>
              </ul>
            </div>
            <div className="border-t border-green-100 pt-4 mt-4">
              <h4 className="font-semibold text-green-700 mb-3">🙏 本週禱告</h4>
              <p className="text-gray-700 leading-relaxed text-lg italic border-l-4 border-green-300 pl-4 py-2 bg-green-50 rounded-r">
                天父，感謝袮在耶穌基督裡賜給我真正的自由。求袮幫助我明白，這自由不是沒有底線的放縱，而是在袮的愛和真理中靈活地生活。當我面對生活中的試探時，求袮提醒我以色列人在曠野失敗的功課，讓我謙卑地尋求袮的幫助，而不是自以為站得穩。更求袮開路——在我以為走投無路的時候，讓我看見袮早已預備的出路。求袮幫助我在文化的灰色地帶中有智慧，在屬靈的底線上有勇氣，在對待軟弱弟兄姊妹時有愛心。願我每一天的抉擇，都榮耀袮的名。奉耶穌基督的名禱告，阿們。
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
