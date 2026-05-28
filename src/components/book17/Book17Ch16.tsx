import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Users, Search, HelpCircle, Check } from 'lucide-react';

export default function Book17Ch16() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">第十六章</h1>
        <h2 className="text-xl font-semibold text-gray-700">帶著復活的盼望而活著（十五1-58）</h2>
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
              <p className="text-gray-700 leading-relaxed mb-3">
                在哥林多前書七至十二章，保羅以「論到……」的字句回應哥林多信徒的問題；然而在第十五章，保羅並沒有使用這個模式，但根據第12節，可以知道保羅在本章討論的仍是哥林多信徒的問題：他們中間「有人說沒有死人復活的事」。這裡討論的不是現代神學爭論關於基督復活的問題，而是關於基督徒復活的信念。整體結構上，這章呈現了哥林多前書的完整性：保羅從第一章起就一再強調基督徒必須活在十字架的蔭影下，而第十五章讓我們看到：信徒可以呈現這種生活，是因為有復活的盼望，而這種盼望讓這種生活具有永恆的意義。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">一、死人復活的可能性（十五1-34）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅先從與哥林多信徒共同的信念著手，談基督復活的事實（1-11節）。他提醒他們過去所相信的：這個福音信仰是他「傳給」他們的，他們「接受」了，「相信」了，而且這也是「眾使徒」所宣告的共同資訊。這種「遺傳」的傳授，強調這是歷世歷代的信徒所必須堅守的信仰。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這福音信仰的內容（3-8節）猶如一份早期信經：基督死了、被埋葬了、第三天復活了——都是應驗了舊約的預言。基督復活後一連串的顯現（向彼得、十二使徒、五百多人、雅各、眾使徒），特別強調其中「多數還活著」，意即：若是不信，大可以去詢問他們。保羅在9-10節提到自己「未到產期而生的」，強調的是不配得的恩典，以及他對神恩典的感激與回應。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在12-19節，保羅反面陳述若沒有復活的後果：保羅們所傳的福音沒有意義，使徒們便是作假見證，哥林多信徒仍在罪中，死了的信徒真的死了，信徒「就算比眾人更可憐」。在20-28節，保羅正面陳述基督復活與信徒復活的關係：「基督已經從死裡復活，成為睡了之人初熟的果子。」有一個時間表：基督首先復活→在基督再來時屬祂的人也必復活→末期基督將國交與父神。耶穌基督如今已經作王掌權，只等著最後征服所有的敵人，死亡是祂最後要消滅的敵人。
              </p>
              <p className="text-gray-700 leading-relaxed">
                在29-34節，保羅從生活的角度說明這信念的重要：哥林多信徒「為死人受洗」的行動本身，就暗示了對復活的信念；保羅自己「天天死」的生涯，也必須有復活才有意義；最後他呼籲他們醒悟，因為有人說沒有復活，其實是表現出對神的無知，應該自覺羞愧。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">二、死人復活的性質（十五35-58）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                針對「死人怎樣復活，帶著什麼身體來呢？」（第35節），保羅先後用種子、動物的身體和天上的星體作類比：種子播種時與生長後的形體不同，但其中有連續性；動物雖有不同的形體，但都是動物；星星光度雖不同，但同樣是星體。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                根據這個類比，保羅在42-49節推論：復活後的形體與現今的身體不同，但有連續性——復活的身體是一個適合將來環境的身體（「軟弱的，復活的是強壯的；羞辱的，復活的是榮耀的；必朽壞的，復活的是不朽壞的」，42-43節）。保羅再次回到亞當與主耶穌的對比：第一個亞當生活在地上，有著血氣的身體；第二個亞當耶穌，是屬靈的，所以需要屬靈的身體。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在50-57節，保羅談到改變的奧秘：「我們不是都要睡覺，乃是都要改變。」「血肉之體不能承受神的國，必朽壞的不能承受不朽壞的。」（第50節）這是基督教教義裡非常重要的一段——耶穌基督和信徒的復活，不單是靈性復活，而且是身體復活。
              </p>
              <p className="text-gray-700 leading-relaxed">
                保羅因這極大的盼望而誇勝：「死啊！你得勝的權勢在哪裡？死啊！你的毒鉤在哪裡？」（55節）最後以第58節作結：「務要堅固，不可搖動，常常竭力多做主工；因為知道，你們的勞苦在主裡面不是徒然的。」復活的盼望使信徒為著主所做的一切都有意義，也值得堅持。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                哥林多前書第十五章是這封書信中最具教義性的段落。復活的教義非常重要，因為它涉及了主耶穌基督的生平事蹟及祂的救贖；同時，基督徒的十架生活，是建基在復活的盼望上，而復活的盼望讓這種生活有永恆的意義。這種信仰是早期教會中所有使徒共同的資訊，是歷世歷代教會正統的傳承。
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
            <p className="text-gray-700 leading-relaxed">
              第二次世界大戰以後，有人研究集中營的現象，發現有些身體強壯的人在德國集中營裡很快就死了，反而一些身體嬴弱的人卻活了下來。研究的結論是：一個人的生命力和身體的強壯，沒有絕對的關係；有盼望的人，可能比身體強壯的還活得長久。從哥林多前書第十五章的經文中，我們更是看到盼望是基督教信仰中不可或缺的一環，而且與生活有密切的關係。
            </p>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">一、近代關於基督復活的爭議</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                談到復活的盼望，十八世紀以來，西方教會因為受到科學觀的衝擊，爭論的一個主題是耶穌基督有沒有身體復活。但在哥林多前書第十五章，保羅爭的並非耶穌基督的復活，而是信徒會不會像祂一樣復活——對保羅而言，耶穌基督的復活是不爭的事實，是他與哥林多信徒在信仰上共同的根基。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                從歷史文獻的角度而言，哥林多前書寫作的年代是主後54至56年之間，比福音書至少早了五年，可以說是最早有關耶穌基督復活的文獻。保羅第一次抵達哥林多傳福音，可以確定在主後50至52年之間，與主耶穌復活的日期相距只有二十年左右。保羅更說這個信念並不只是他個人的資訊，更是早期使徒們共同的資訊，這更是強化了其可信性。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅在經文中使用了當時代拉比「遺傳」的語言，特別指出他和使徒們怎樣傳，信徒們不單接受，同時也信，更是靠著這種信念而作基督徒。在近代的復活爭論中，十九世紀一些「神學家」因為接受了現代科學觀的前提而否認基督復活；進入二十世紀後，否認基督復活的人，便轉而說「基督的復活只是一種主觀的屬靈經驗」，主要原因是這個信念在新約中太重要了，不得不找一個解讀方式來保留它。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                哥林多信徒中之所以有人否認死人復活，背後真正的原因是受了當時代希臘世界觀的影響——希臘思想是二元論的，身體甚至被視為靈魂的監牢。在現代的神學爭論中，否認基督復活的神學家所提出的理由，與哥林多那些人的立場雖不一樣，但背後同樣受了當時代世界觀的影響。從這兩個不同時代的詮釋現象，值得學習的功課是：解釋聖經不能以讀者當時代的世界觀為根據，否則很容易曲解和背離聖經真理的教導。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">二、教義與生活</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                或許有人會說，基督徒信的是耶穌基督這個人，不是教義。這話表面上聽來非常有理，因為基督徒信仰的對象確實是耶穌基督這個人，不是一套理論。但保羅在哥林多前書第十五章所提示的是：自第一世紀以來，基督教的「傳統」就說這個人——耶穌基督，是活在主後第一世紀的，而且祂死了、埋葬了、第三天從死裡復活！這個「教義」與我們信仰的對象密不可分。而且這個「認信」表示基督徒所信的，不是一個死了的偉人或哲學家，而是一個真正勝過死亡而活著的救主。正如保羅所說：基督若沒有復活，便沒有基督教的信仰；沒有復活的基督教，只是美麗的謊言！
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                進一步思想這段經文，則會發現基督教的信念不僅包括了信仰的對象，也包括了信徒的未來——用現代的語言表達，這信念涵蓋了系統神學上的救恩論和末世論。信耶穌不僅是因為信了耶穌使罪得赦免，也是因信了耶穌可以勝過死亡。保羅在第50節說：「血肉之體不能承受神的國，必朽壞的不能承受不朽壞的。」世人原本就沒有能力為自己成全救恩，但創造主的聖靈卻能使信徒因信耶穌基督而突破死亡。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅在29-34節揭示：基督徒現今的生活，必須要有復活，才有永恆的意義。對保羅而言，他為傳福音而承受的苦難，都是與主同死，但他不僅是要與主同死，更是要與祂同復活。在復活的盼望中，基督徒不犯罪、也不怕死，並且可以面對苦難和死亡，更是向死亡誇勝！多年前，蘇恩佩姊妹受癌症所苦，失去了聲樂家所寶貴的嗓子，但她卻轉而一生在文字工作上事奉主，在苦難與死亡的威脅下說：「死亡，別狂傲！」她所表達的就是第十五章經文的精神。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                世人靠著教育、政治經濟制度、道德勸說、宗教和科技，嘗試勝過罪惡、苦難與死亡。這些都是神創造人的時候所賦予的力量，的確為人解決了不少困難，但即使有人可以在今世不犯所知道的罪、靠科技活到長命百歲，他仍然需要信耶穌，因為他無法消除罪惡和苦難，更勝不了死亡。除了耶穌基督，歷史上沒有一個宗教家、政治家或科學家，可以勝過死亡的勢力。對信耶穌的人而言，保羅更是強調復活的身體與目前身體的情況全然不同：軟弱的要變為剛強，羞辱的要變為榮耀，必朽的要變為不朽的。神為世人所提供的救恩實在超過我們所能想像！
              </p>
            </div>
            <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-teal-400">
              <h4 className="font-bold text-teal-800 mb-2">默想</h4>
              <p className="text-gray-700 leading-relaxed">
                教義，原是信徒對信仰對象的表達。由於基督徒所信的對象是一位使人復活的神和一位死而復活的救主，復活的信念便是表達我們信仰時不可少的一環，也是基督徒所必須堅持的。作為基督徒，不僅要堅持所信的救主是復活的主，同時也堅持所有相信耶穌的人在祂再來時必定從死裡復活。在苦難與死亡的世界中，讓我們與保羅一同宣告：「感謝神，使我們借著我們的主耶穌基督得勝。」屬主的人是活在復活的盼望中！
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
              <h4 className="font-semibold text-gray-800 mb-2">一、復活的歷史可信性：N. T. Wright的辯護</h4>
              <p className="text-gray-700 leading-relaxed">
                英國聖公會主教暨新約學者N. T. Wright在其厚重著作《耶穌的復活》（The Resurrection of the Son of God）中，以約700頁的篇幅系統性地論証基督身體復活的歷史可信性。他的論證有兩個核心：（1）空墳墓（empty tomb）的史實——若耶穌沒有身體復活，猶太當局只需展示遺體即可終止基督教的蔓延，但歷史上從未有人能做到；（2）顯現記錄（appearance reports）的廣泛性和多樣性——向個人、向小組、向五百人同時顯現，這種廣泛的見證不能簡單解釋為「幻覺」。Wright特別強調，第一世紀的猶太人對「復活」有清晰的概念（末日時所有人的身體復活），而早期基督徒所宣告的，是一個完全不同、空前的現象——一個人在末日之前、單獨地、身體地復活，這本身就不像是「神話創造」的產物，因為它不符合任何已有的神話模板。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">二、希臘二元論與基督教身體復活的衝突</h4>
              <p className="text-gray-700 leading-relaxed">
                哥林多信徒對死人復活的疑慮，根植於柏拉圖主義（Platonism）的身體-靈魂二元論。柏拉圖在《費多篇》（Phaedo）中，藉蘇格拉底的臨終談話表達：身體是靈魂的牢籠，死亡是靈魂從身體桎梏中獲得自由的過程，因此真正的救贖是靈魂的不朽，而非身體的復活。這種世界觀在羅馬帝國時期廣泛流行，以至於當保羅在雅典宣講死人復活時，聽眾立刻嘲笑他（徒十七32）。相比之下，基督教的身體復活觀肯定了物質世界和身體的正面意義——神創造了物質世界，並宣告它是「甚好的」（創一31）；道成肉身更確認了身體的尊嚴。這一神學立場對現代護理倫理、殘障神學和環境神學都有深遠的影響。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">三、「初熟的果子」概念與猶太末世論</h4>
              <p className="text-gray-700 leading-relaxed">
                保羅在哥林多前書十五章20節稱基督是「睡了之人初熟的果子」（aparche），這是一個根植於猶太舊約傳統的概念。在以色列的農業禮儀中，初熟的果子獻給神是整個收成的「先行者」和「保証」——獻了初熟的果子，就意味著整個收成必定到來（參：利二十三10-14）。保羅在這裡的論証結構因此是：基督的復活不是孤立的事件，而是整個「末世收成」的初熟果實；祂既復活了，所有屬祂的人的復活就已經有了不可動搖的保證。這種論証把基督的復活置於猶太末世論的宏大敘事框架中，也解釋了為什麼保羅在二十至二十八節要描述那麼詳細的末世時間表：基督的復活啟動了末世的倒計時，歷史正在向那個最終時刻邁進。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">四、復活盼望與苦難神學</h4>
              <p className="text-gray-700 leading-relaxed">
                哥林多前書第十五章與苦難神學有深刻的關聯。Viktor Frankl在其著作《活出意義來》（Man's Search for Meaning）中，記錄了他在納粹集中營的親身經歷，發現能夠在極端苦難中存活下來的人，往往是那些對生命仍有「意義感」的人——有人等待他們，有事業未完成，有使命未達到。Frankl是從世俗心理學的角度觀察到「盼望」和「意義」對生存的關鍵作用，而保羅則從神學的角度揭示了更深的真理：復活的盼望不只給人心理的支撐，而是對現實（死亡必被征服）的把握。保羅說「天天死」（31節），正是在這種把握下活出的生命——他不是在壓抑對死亡的恐懼，而是因真正地相信復活，死亡對他已失去了最終的威脅力。
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
              <p className="text-gray-700">保羅說若基督沒有復活，「我們若靠基督，只在今生有指望，就算比眾人更可憐」。你認為復活的盼望如何具體地改變你面對日常困難和痛苦的方式？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">作者指出，哥林多信徒對死人復活的疑慮，是受了當時希臘世界觀的影響；而現代否認復活的神學家們，背後同樣受了現代科學世界觀的影響。你認為當代文化中有哪些思想，正在影響基督徒對復活真理的理解或接受？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">保羅用種子的類比說明復活身體的性質——與現今的身體不同，但有連續性。這個類比如何幫助你思考「永生」的形象？它如何影響你對「身體」和「物質世界」的神學看法？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">蘇恩佩姊妹在失去聲音後說「死亡，別狂傲！」——她把保羅的神學活出來了。你在人生中是否曾有過一個時刻，讓你能夠以類似的方式在苦難中向死亡「誇勝」？那個時刻讓你對復活盼望有什麼新的理解？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">保羅說「你們的勞苦在主裡面不是徒然的」（58節）。在你目前的事奉或日常服侍中，有哪些感到「似乎徒然」的努力？復活的盼望如何讓你重新看待這些努力的意義？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">「除了耶穌基督，歷史上沒有一個宗教家、政治家或科學家，可以勝過死亡的勢力。」你如何向一個不信仰神的朋友解釋這種獨特性？有什麼論點是你覺得最有說服力的？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">7.</span>
              <p className="text-gray-700">保羅說「天天死」是他生活的方式。對你來說，「天天死」意味著什麼？在你現在的生活場景中，有哪些具體的事是你需要「死去」才能更充分地活在復活的盼望中的？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 以復活的眼光重新評估你的生活優先次序</h4>
              <p className="text-gray-700 mb-2">保羅說「你們的勞苦在主裡面不是徒然的」，而「血肉之體不能承受神的國」。這週花時間反思：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>列出你目前生活中投入最多時間和精力的三至五件事</li>
                <li>問自己：這些事在永恆的眼光下有多少意義？有哪些是「在主裡面不是徒然的」，有哪些是「血肉之體的追求」？</li>
                <li>根據這個省察，做出一個具體的調整：增加一件有永恆意義的事，減少一件沒有永恆意義的事</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 閱讀並默想哥林多前書十五章50-58節</h4>
              <p className="text-gray-700 mb-2">這段「復活的凱歌」是新約聖經中最壯麗的段落之一。這週每天早上閱讀這段經文，讓它塑造你一天的心態：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>大聲讀第55節：「死啊！你得勝的權勢在哪裡？死啊！你的毒鉤在哪裡？」讓這宣告成為你面對日常挑戰的心理框架</li>
                <li>在日記中記下：今天你「天天死」的表現是什麼？有哪些「自我」的東西你選擇放下？</li>
                <li>在一週結束時，回顧這週的記錄，寫下復活盼望如何改變了你的一個具體反應</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💬 與一位非基督徒朋友談復活</h4>
              <p className="text-gray-700 mb-2">保羅在這章做的是有力的護教——從歷史事實和神學推理為復活辯護。選擇一位你認識的非基督徒，嘗試一次關於復活的真誠對話：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>先問對方：「你怎麼看死後的世界？」聆聽他們的想法</li>
                <li>分享保羅在哥林多前書十五章的一個論証：基督復活的見證者有五百多人，且多數仍在世，這是可以查証的史實</li>
                <li>不以辯論勝負為目標，而是以種下一顆思考的種子為目標</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">⏰ 在苦難中練習「向死亡誇勝」</h4>
              <p className="text-gray-700 mb-2">如果你或你身邊的人正在經歷疾病、失落或其他形式的苦難，學習用蘇恩佩姊妹的精神面對：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>在禱告中，將你的苦難直接帶到復活的主面前，告訴祂你的痛苦，同時也宣告祂的復活使你的盼望不落空</li>
                <li>找一位正在受苦的弟兄姊妹，陪伴他們，並在適當時分享復活盼望的安慰（而非說教）</li>
                <li>若有機會，閱讀蘇恩佩的文章或見證，讓她的生命成為你的鼓勵</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 leading-relaxed text-lg">
                復活的主，感謝祢真的從死裡復活了！感謝祢的復活不只是一個歷史事件，更是我未來盼望的保證，也是我今天生活力量的泉源。當我面對苦難時，求祢讓我記得保羅的宣告：「死啊，你得勝的權勢在哪裡？」當我面對那些「似乎徒然」的努力時，求祢讓我記得祢的應許：「你們的勞苦在主裡面不是徒然的。」讓復活的盼望不只是我知識上相信的教義，更是塑造我每一天生活選擇的真實力量。感謝祢，使我們借著祢的主耶穌基督得勝！阿們。
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
