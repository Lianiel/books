import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book38Ch12() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">第十二章</h1>
        <h2 className="text-xl font-semibold text-gray-700">釋放你的潛力</h2>
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
              <h3 className="font-bold text-teal-800 text-lg mb-3">一、卡崔娜颶風避難所——每個人都有專屬任務</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸回憶2005年卡崔娜颶風摧毀路易斯安那州紐奧良，1萬2千5百名撤離民眾來到他所在的聖安東尼奧。市中心一座大型倉庫成了急救站，他與負責管理避難中心的好友羅伯特一起參觀時，深受觸動的是：在場每一位志工都有自己專屬的任務——有人分送毯子、有人分發三明治，醫療專業人員檢查健康狀況，輔導員和牧師安慰流離失所的民眾。朋友給他一把折疊椅，指著長長的隊伍說：「做點事情吧！為他們禱告、聽他們訴苦。」他照做了。他說：這是聖靈最激勵人心、最能叫人知罪、也最具爭議的形象之一——祂按著自己的意思將屬靈恩賜隨意分給不同的人。整個世界就像那座大倉庫，我們都是逃往避難處的人——上帝設計的避難所「教會」，坐落在傾頹的世界中，成為傷者的避風港，每個人都應盡上一份責任，而聖靈就在背後監督、協調整體的運作。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">二、聖靈按己意分配恩賜——哥林多前書十二章</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸引哥林多前書十二章7、11節：「聖靈顯在各人身上，是叫人得益處……這一切都是這位聖靈所運行、隨己意分給各人的。」他說，若你錯過了專屬於你的獨特任務，豈不是很可惜？保羅正是這麼看的：「論到屬靈的恩賜，我不願意你們不明白……恩賜原有分別，聖靈卻是一位」（哥林多前書十二章1、4-7節）。他指出，恩賜有許多種，目標卻只有一個：實現整個群體的共同利益——但哥林多人忘記了這一點，屬靈恩賜反而成了教會分裂的原因，有人炫耀恩賜、有人嫉妒，保羅因此詳細描述各種恩賜，幫助他們明白聖靈分配恩賜的意義。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">三、關於恩賜的幾個重要提醒</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸提出幾件關於恩賜需要記住的事：第一，聖經裡沒有任何一處完整表列聖靈的恩賜——新約中至少有五個恩賜清單（哥林多前書十二章8-10節、28-30節、羅馬書十二章6-8節、以弗所書四章11-12節、彼得前書四章10-11節），卻沒有兩份清單完全相同，可見這些只是舉例聖靈的工作，而非窮盡清單。第二，不是所有恩賜都在重生得救那一刻賜給我們，否則保羅就不必要我們「切慕屬靈的恩賜」（哥林多前書十四章1節）。第三，屬靈的恩賜是一份禮物——保羅用的希臘文「charisma」就是禮物的意思，你領受了，卻不配得，也不是靠自己賺取來的。第四，屬靈恩賜不是屬靈成熟的指標——哥林多教會擁有一切恩賜（哥林多前書一章4-8節），卻結黨紛爭、容忍不道德、彼此相爭、濫用聖餐，有恩賜卻也需要成熟的靈命明智地使用它。
              </p>
              <p className="text-gray-700 leading-relaxed">
                第五，天生的才幹不一定等於屬靈的恩賜——天賦推動我們成就個人的目標，屬靈恩賜則推動我們經營上帝的產業；屬靈恩賜的開始，經常源於以神聖的方式使用天賦（如保羅信主前就有強大的教導才能，信主後仍以此服事神）。他分享四歲孫女蘿西告訴他：「爺爺，我學會和聲了。」他提議一起唱，蘿西卻拒絕：「不用了，我喜歡自己一個人和聲。」他藉此比喻：和聲的意義在於多部聲音的交合，教會也是如此——聖靈讓每個人各自負責一個段落，唯有彼此的恩賜相互搭配，才能譜出優美的旋律。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">四、三類恩賜：辨別、行動、宣告</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸把哥林多前書十二章8-10節的恩賜分為三類。<strong>第一類是辨別的恩賜</strong>：智慧的言語、知識的言語、辨別諸靈。「智慧的言語」是為當下狀況提供合宜的建言——他分享一位資深教授在牧者特會晚餐時，突然對年輕牧者說：「千萬別為了服事犧牲你的家庭」，說完便繼續用餐，這句話卻讓他一生難忘。「知識的言語」則是靠聖靈掌握關於他人的資訊——如耶穌告訴撒瑪利亞婦人她的婚姻狀況（約翰福音四章17-18節）。「辨別諸靈」則如保羅在腓立比對使女身上的占卜邪靈說話（使徒行傳十六章18節）；陸可鐸的妻子德娜琳也有這個恩賜——她曾在市區看到一塊算命招牌，停下來宣告：「主耶穌，讓這家店倒閉吧！」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>第二類是行動的恩賜</strong>：信心、醫病、行異能。有信心恩賜的人懷抱超自然、富感染力的信心；醫治恩賜是聖靈透過聖徒的禱告使人身體、情感或關係得到超自然的恢復；行異能則是上帝改變環境、逆轉危機、軟化剛硬的心、打開封閉國家的邊境。<strong>第三類是宣告的恩賜</strong>：說預言、說方言、翻方言。先知講道是「為造就、安慰、勸勉人」（哥林多前書十四章3節），保羅認為這是最重要的恩賜，不是因為地位更高，而是因為不可或缺。他解釋新約中兩種不同的方言：一種是教會誕生那天展現的，讓十五個國家的人聽見自己的母語（使徒行傳二章8節）；另一種則是保羅在哥林多前書十四章2節描述、「對神說……心靈裡卻是講說各樣的奧祕」的靈語式方言，需要翻方言恩賜才能被理解。保羅自己就有這個恩賜，他說：「我要用靈禱告，也要用悟性禱告」（哥林多前書十四章15節），兩種禱告他都喜歡，但在公開崇拜時「寧可用悟性說五句教導人的話，強如說萬句方言」（十四章19節）。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">五、陸可鐸六十四歲領受方言恩賜的經歷</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸坦言，上世紀最大的悲劇之一，就是教會因方言、神蹟奇事這類屬靈恩賜是否仍存在而分裂。他曾在服事前十年也持「這些恩賜已隨使徒逝世而中止」的立場，但三十多歲時開始改變看法——他找不到聖經任何一處明說某些恩賜會在聖經完成後終止，反而聖經敦促我們「切慕屬靈的恩賜」「不要禁止說方言」（哥林多前書十四章1、39節）；也找不到「只有使徒才能分賜恩賜」的證據，如亞拿尼亞並非使徒，卻在聖靈帶領下祝福了掃羅（使徒行傳九章）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                他分享自己的親身經歷：曾用禱告為許多不孕的夫婦帶來醫治，也常在講道中臨場說出讓人深受感動的話語。六十四歲時，他一連幾個月向耶穌祈求更多被聖靈充滿、不要有所保留——某個夏日清晨，他坐在陽台禱告時，內心深處開始湧現斷斷續續音節組成的話語，帶給他喜樂和敬拜的感受，從此每天早晨都享受這樣的親密禱告，隨時可以開始也可以停止，卻永遠不想停下來。他坦言：這種恩賜沒有使我變得更重要或更特別，我不會在黑暗中發光，也不會漂浮在樹上——想到聖靈如何幫助他禱告（因為他禱告時總是支支吾吾），常忍不住讓他發笑，他也喜歡每隔一陣子被提醒：上帝住在超自然的境界中，最擅長做的就是我們肉眼看不見的事。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">六、「大神學家」與蠟燭的寓言</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸分享神學家兼牧師巴恩豪斯（Donald Barnhouse）畢業十二年後回普林斯頓神學院講道的故事：他的希伯來文教授誇獎他成了「大神學家」，並解釋：「有些人的神很小，這些人信的神不能行任何神蹟，不能代求——我稱他們為『小神學家』。另一些人信奉的是一位偉大的神，祂一說話，事情就成就——你相信的是偉大的神，祂必然祝福你的事工。」陸可鐸總結：我們有一位偉大的上帝。如果每位信徒都能認識自己的屬靈恩賜並加以使用，如果我們每個人都按照聖靈的感動來行事，會發生什麼事呢？他引加拉太書六章5節：「各人必擔當自己的擔子」——上帝沒有要你在地上虛耗生命，花費力氣在無法發揮你能力的事上。
              </p>
              <p className="text-gray-700 leading-relaxed">
                他以一個寓言作結：一位垂死的父親要傳承公司給三個兒子中的一位，給每人一美元，要求「買些東西填滿房間，填得最滿的人就能承接公司」。第一個兒子買了兩捆乾草鋪滿地板，第二個割開兩個羽毛枕頭讓空氣中遍布羽毛，父親都不滿意；第三個兒子什麼也沒帶，他說：「我捐了五分錢給孤兒院、二分錢給教會、二分錢給糧食供應站」——用最後一分錢買了一個火柴盒和一根蠟燭，點燃蠟燭、關掉房間的燈，蠟燭的光芒盈滿了整個房間——他不用乾草或羽毛，用光充滿了整個房間。陸可鐸問讀者：你又用什麼來填滿自己的世界呢？
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
                '聖靈按己意將屬靈恩賜分配給每個信徒，如同颶風避難所裡每個志工都有專屬任務——恩賜的目的是實現群體的共同利益，而非個人的地位。',
                '聖經中沒有一份完整的恩賜清單，恩賜是聖靈白白賜下的禮物（charisma），不是重生時一次全給，也不是屬靈成熟的指標。',
                '天賦與屬靈恩賜不完全相同：天賦推動個人目標，屬靈恩賜則推動經營上帝的產業，兩者常常交會，卻不能簡單畫上等號。',
                '哥林多前書十二章的恩賜大致可分三類：辨別的恩賜（智慧、知識、辨別諸靈）、行動的恩賜（信心、醫病、行異能）、宣告的恩賜（先知講道、說方言、翻方言）。',
                '陸可鐸六十四歲領受方言恩賜的親身經歷提醒我們：屬靈恩賜可以在信主多年後才領受，關鍵在於持續切慕、向神敞開，而非用年齡或資歷自我設限。',
                '「大神學家與小神學家」的故事，以及火柴與蠟燭的寓言，共同指向一個核心信息：我們信的是一位偉大的神，祂能用微小的器皿發出照亮整個房間的光。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「終止論」與「延續論」的神學分歧，該如何理性看待？</h4>
              <p className="text-gray-700 leading-relaxed">
                陸可鐸坦言自己從「終止論」（Cessationism，認為神蹟性恩賜隨使徒時代結束）轉向「延續論」（Continuationism，認為這些恩賜持續到今天）的立場轉變，這是教會歷史上長期存在、雙方都有嚴謹神學家支持的真誠分歧，不是簡單的「對錯」問題。兩派都同意聖經的權威與神蹟奇事在使徒時代確實發生，分歧主要在於這些恩賜是否有特殊的「教會奠基」功能、是否隨新約正典完成而功成身退。讀者若來自持不同立場的教會傳統，不必因這一章的內容感到與自己所受教導衝突——更重要的是持守保羅在哥林多前書十三章的提醒：「若沒有愛，我就算不得什麼」，愛才是衡量恩賜運用是否合宜的最終標準，而非恩賜本身是否「還存在」的辯論。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「知識的言語」「辨別諸靈」這類恩賜，如何避免被濫用來論斷或控制他人？</h4>
              <p className="text-gray-700 leading-relaxed">
                這類恩賜若操作不當，容易被濫用成「我從神那裡知道你的問題」這樣帶有屬靈操控意味的宣告，對被論斷的人造成傷害。健康操練這類恩賜的原則包括：以謙卑、試探性的語氣分享（「我感覺到……不確定是否貼切」而非「神告訴我你……」）、優先在私下而非公開場合分享敏感內容、願意接受對方的回應和修正、並且始終以造就對方、而非彰顯自己屬靈程度為目的（哥林多前書十四章3節「作先知講道的，是對人說，要造就、安慰、勸勉人」）。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「天賦」與「屬靈恩賜」的界線模糊時，該如何分辨？</h4>
              <p className="text-gray-700 leading-relaxed">
                陸可鐸提出保羅信主前後都運用教導才能的例子，說明兩者常常重疊、難以截然劃分。實務上，一個有幫助的分辨方式是觀察「果效與動機」：這項能力運用時，是否結出聖靈的果子（如謙卑、造就他人），還是主要用來滿足個人成就感或博取讚賞？是單靠自己努力就能達成，還是有一種超越自己天然能力的「額外供應」感？這些觀察角度未必能給出絕對的答案，但可以幫助信徒在使用天賦與恩賜時，保持對聖靈工作的敏銳與依靠。
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
              '在閱讀本章前，你對屬靈恩賜有多少認識？你認為自己擁有哪些恩賜？你是什麼時候意識到這是恩賜的？',
              '你有哪些天生的才幹？你是否曾用這些才幹來幫助上帝成就祂的旨意？如果有，是怎麼做的？',
              '在辨別的恩賜、行動的恩賜、宣告的恩賜這三類中，你認為自己或身邊的人比較明顯擁有哪一類？',
              '你對某些屬靈恩賜（如方言、醫病、辨別諸靈）是否感到猶豫或懷疑？是哪些恩賜？為什麼？這一章的內容是否影響了你的看法？',
              '就你目前的信仰狀態，你認為自己更像「小神學家」還是「大神學家」？你所信的神，是能行神蹟、會代求的偉大的神，還是被你限縮了能力的小神？',
              '請回答陸可鐸在本章結尾提出的問題：如果每位信徒都認識並使用自己的屬靈恩賜，如果我們都按聖靈的感動行事，會發生什麼事？',
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
              <h4 className="font-semibold text-green-700 mb-2">📜 查考五份恩賜清單</h4>
              <p className="text-gray-700 mb-2">找時間讀完哥林多前書十二章8-10節、28-30節、羅馬書十二章6-8節、以弗所書四章11-12節、彼得前書四章10-11節，列出所有提到的恩賜，圈出你認為自己可能擁有的。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🕯️ 切慕一項恩賜</h4>
              <p className="text-gray-700 mb-2">
                依照哥林多前書十四章1節「切慕屬靈的恩賜」，選一項你渴慕、卻還沒有把握擁有的恩賜，持續一段時間為此禱告，向神敞開，而不急著替神設限。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔦 問自己：我用什麼填滿房間？</h4>
              <p className="text-gray-700 mb-2">
                仿照寓言中的第三個兒子，反思自己是否常用「乾草和羽毛」（表面的忙碌與成就）填滿生活，還是願意用小小的、卻能照亮全室的方式（如奉獻、代禱、一句造就人的話）服事神的國度。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「聖靈，求祢讓我認識祢賜給我的恩賜，也求祢幫助我用成熟、謙卑的心來運用它，不是為了彰顯自己，而是為了造就祢的教會。求祢不要對我有所保留，把祢定意給我的一切都傾倒在我身上。我信的是偉大的神，求祢幫助我不再把祢想得太小。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
