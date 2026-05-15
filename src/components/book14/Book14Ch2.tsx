import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Search, HelpCircle, Check } from 'lucide-react';

export default function Book14Ch2() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">第2章</h1>
        <h2 className="text-xl font-semibold text-gray-700">看清楚聖靈</h2>
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
          <div className="p-5 bg-white space-y-4">
            <p className="text-gray-700 leading-relaxed mb-3">市面上不是已經有許多關於聖靈的著作嗎？為什麼還要多添一本？這個問題問得正好，現在我要回答這個問題，就先從我的近視說起吧！</p>
            <p className="text-gray-700 leading-relaxed mb-3">如果我除下眼鏡來看你，你在我眼中便蒙朧不清，我應該仍然知道你的存在，我大約仍可分辨你是男是女，我也許不至糊塗得把你撞個滿懷。但在我眼中，你的線條不是清晰可辨，你的容貌變得模糊不清（除了靠記憶外），我絕對無法清楚形容你。假使在我除下眼鏡時，一個陌生人走進我的房間，無疑我可以指出他來，但他的臉孔將會是模糊的一團，我無法知道他臉上的表情。我若不戴回眼鏡，你和他都會輪廓不明。</p>
            <p className="text-gray-700 leading-relaxed mb-3">加爾文有一個很特別的比喻，他說像我這類眼濛濛的人，需要配戴眼鏡，去將物象對焦，同樣，我們所有人都需要聖經的裝備，説明我們體會神的實在。雖然加爾文是一般性地運用這個比喻，但我相信在他腦海中，他必會想到以一些特殊真理作為鏡片，來獲致清晰的焦點。加爾文認為每個人都會對真實的神有概略的認識，但這些認識多半是含混模糊的。看清楚神是指對他的性格、他的主權、他的救贖、他的慈愛、他的兒子、他的聖靈和他的作為有正確的認識，亦即是對我們與他的關係有正確的瞭解——我們這些受造物，究竟是活在罪中或恩典裡？在信、望、愛的生命中與他相交，或在枯竭、幽暗的心靈中與他隔絕？我們怎樣才能夠對這些事情有正確的認識呢？加爾文的答案是（我的也是一樣）：從聖經中學習。惟有從聖經中學習，我們才能夠清楚認識神，而他在我們腦海中的形象，也就不再模糊不清；我們可以聲稱他是三位一體的創造主，是聖父、聖子和聖靈。</p>
            <p className="text-gray-700 leading-relaxed mb-3">好了，我現在要清楚指出我寫這些篇章的目的。正如我已經說過，今天聖靈大受注目，眾人所關注的，是他的身分，以及他在個人、教會及社群中做些什麼工作。團契、肢體生活。總動員事奉、聖靈的洗、恩賜、神的引導、預言、神跡，以及聖靈的啟示、更新和復興工作等題目，都常常掛在許多人的嘴邊，也在許多書本中討論過。這誠然是好的，我們應該為此感到快樂；反之，若然我們沒有討論這些題目，可能反映出我們在屬靈方面出了問題。然而正如近視漢看不清眼前的景物一樣，又好比任何人都會在一些事情上捉錯用神，對事物的真相只知其一，不知其二，因此，我們雖然經常頌揚聖靈的工作，但往往未能按聖經認識聖靈。對屬靈的事物，我們真個是濛濛眼，大受自己的偏見左右，以致我們沒法看得清楚。</p>
            <p className="text-gray-700 leading-relaxed mb-3">我們很容易作出如此的假定：既然我們認識聖靈在我們生命中的一些作為，我們就已經完全認識聖靈。很抱歉，結論並不是這樣。事實上，正如一個人的概念知識可以遠超過他的屬靈經驗，同樣，屬靈經驗也可以走在概念知識的前頭。相信聖經的人經常強調需要有正確的概念知識，以致他們忽略了上述的情形。但事實確是如此，耶穌門徒的經驗就是很好的例子。耶穌在世上的時候，門徒追隨他，但他們對屬靈事物的理解常有錯漏，而且經常對耶穌有許多誤解；可是，耶穌能夠超越他們思想上的限制，感動他們、改變他們的生命，純粹是由於他們愛他、信靠他，希望從他身上學習，誠心願意追隨他們心中的亮光去服從他。因此，十二個門徒中有十一個「已經乾淨了」（意思是他們的罪得赦免，心靈獲得更新「約一五 3」），並且得與其他人一起進入耶穌恕宥和平安的恩典中（參路五 20 一 24，七 47—50，一九 5 一 10），而那時他們尚未能掌握耶穌釘十架的贖罪意義。神首先賜下救恩的禮物，改變他們的生命，其後他們才明白這是什麼一回事。</p>
            <p className="text-gray-700 leading-relaxed mb-3">同時，當這些人對神充滿信心，並願意敞開心靈去明自神的旨意時，他們便追求更完全活在聖靈裡的生命。（這是極其自然的！難道我們不曉得追求從聖靈而來的生命和追求從耶穌而來的生命，事實上是同一回事，只是名目不同而已？）我在這裡提出的，就是要著意尋求聖經教導我們去尋求的東西。既然神是言而有信的，我們便有把握期望我們所求的必然得著——我們更會發現臨到我們身上的美好恩賜，常是超過我們所想所求的。主耶穌說：「你們祈求，就給你們；„„你們„„尚且知道拿好東西給兒女；何況天父，豈不更將聖靈給求他的人嗎？」（路—— 9、13）許多曾這樣祈求的人，都被神豐足的回應嚇了一跳。</p>
            <p className="text-gray-700 leading-relaxed mb-3">神是滿有恩慈的，只要我們以真誠的態度，全心全意尋求他的臉，希望與他親近，即使我們對何謂屬靈生命沒有認識，或只有錯誤的觀念，他都可以使我們靈裡的生命進深。在這要應用得著的公式是耶利米書二十九章十三、十四節的應許：「你們尋求我，若專心尋求我，就必尋見。„„。然後，我們的責任就是要透過聖經的亮光，瞭解主實際上為我們做了什麼，並且瞭解他在我們個人經歷中的特別工作如何與聖經所說他透過聖靈為屬他的人作事的宣稱相關。因著主的慈愛，他在我們經歷中的作為都是匠心獨運地符合各人性格和環境上的需要。在我看來，這項工作是許多神的子民的當前急務。</p>
            <p className="text-gray-700 leading-relaxed mb-3">請勿誤會我！我並不是說神賜福於那些無知和錯謬的人，是由於他們的無知和錯謬；我也不是說神不在意我們是否認識和掌握他所啟示的旨意；更不是說一個人只要對神有誠懇的心和真摯的情感，就不怕無知和錯謬會損害他靈命的健康。我們可以肯定地說，神賜給信徒的福氣，是絕對而不變地按著他的真理賜下的；錯誤的信仰意味著屬靈的貧乏，對靈性更會造成嚴重損害。可是，任何接觸人心靈的人，總是一次又一次地因神奇妙的作為而大感驚訝，因為神豐豐富富地賜福給靈性貧乏的人，使這些有大堆錯謬思想，只認識一點點真理的人，大大改變過來。正如我曾經說過，無數罪人在他們對耶穌和聖靈尚未有正確的認識時，就已經真實地經歷耶穌基督的救恩和聖靈使生命更新的能力。（說句實話，若然神要等待我們有完全正確的屬靈觀念，才賜下福氣，那麼，我們現在真不知處於何等光景了！幾乎每個基督徒都曾經歷神豐厚的恩惠和幫助，而神的賜予，總遠遠超過他們的思想所配得的。）儘管如此，我們若對聖靈有較清晰的觀念，就更能欣賞聖靈的工作，以及避免墮入一些錯謬的陷阱。這正是本書嘗試提供的幫助。</p>
            <p className="text-gray-700 leading-relaxed mb-3">我的思潮又回到二十年前一個潮濕的下午，那時我正趕著去一間渾名為「蚤子窩」的橫街電影院，以先睹為快的心情去觀看一出剛到埠的著名默片「大將軍」（“The General”）。這出電影於一九二七年攝製，今日的影評人盛讚他是基頓（BusterKeaton）的代表作。當時我剛剛發現這樣一個憂鬱、品格高尚、容易遇上不幸、優柔寡斷、足智多謀的諧角基頓，因此「大將軍」深深地吸引著我。該故事發生於美國內戰時期，於是我順理成章地猜想這出電影必然像基頓其他一些電影一樣，片名已說明他的角色了。</p>
            <p className="text-gray-700 leading-relaxed mb-3">我並不是戰爭片迷，記得在步向電影院途中，我還在揣測這出電影會如何吸引我。</p>
            <p className="text-gray-700 leading-relaxed mb-3">沒錯，在「大將軍」一片中，基頓最後真正穿上了制服——準確一點說，是穿上了陸軍中尉的制服——，可是，若因此稱基頓為一位肩負領導責任的將軍，那真是極之誤導，而且有點不盡不實，因為基頓只是在最後的幾分鐘才得到他的制服，而在這片段之前的整整七十分鐘裡，展現眼前的不是模仿軍中生活的諷刺劇，而是一個古老蒸氣火車頭的故事。那是一部名貴、笨重、設有排障器的 4—4—0 型火車頭。故事安排火車頭被人盜取了，促使那不怕死活的司機驟然成為機智的英雄人物，展開一夫當關的神勇拯救行動，從而引發出不少瘋狂笑料。後來他拯救成功，所得的報酬就是獲得他渴慕已久的軍官身分；在此之前，他因為不能當上軍官，女朋友不願理睬他。原來「大將軍」就是那部火車頭的名稱。故事改編自一八六三年的大火車頭追逐事件，當時，真正的「大將軍」（火車頭）在喬治亞州瑪利安達被北方破壞者搶奪，在火車快要駛進北方疆域之際，剛好燃料用盡，終於成功地被追蹤奪回。</p>
            <p className="text-gray-700 leading-relaxed mb-3">對於我這個鬧劇迷兼火車在來說，當時是完完全全被迷住了。</p>
            <p className="text-gray-700 leading-relaxed mb-3">我想指出的，就是今天很多人殷殷暢論聖靈的工作及活在聖靈中的真實經歷，但其中一些觀念比對於事實真相，就差不多像我對「大將軍」一名先入為主的臆測一樣。請跟我察看一些有關觀念，讓我表明我說的到底是什麼意思吧！聖靈的能力</p>
            <p className="text-gray-700 leading-relaxed mb-3">首先，許多人認為聖靈的教義基本上與能力有關，意思是神賜予能力，讓你可以做你應該做卻感有心無力的事情，例如：拒絕物欲的追求（諸如美色、煙、酒、毒品、金錢、刺激、奢華的生活、晉升機會、權力、名望、諂媚奉承等等）。容忍那考驗你耐性的人、愛那不可愛的人、控制脾氣、在壓力中站立得穩、為基督勇敢發言、在遭逢患難中仍信靠神。聖靈賦予人能力達致上述的種種表現，無論在思想上、言語上、講章及禱告裡，這主題都為人所津津樂道。</p>
            <p className="text-gray-700 leading-relaxed mb-3">然則我們對這些人所強調的有什麼異議嗎？他們的觀點是否錯誤？不是，絕對不是；情形剛好相反，這觀念本身是堂而皇之的正確。因為能力（power）一詞（通常相當於希臘文的 dunamis，由此引伸為英文的 dynamite，有時相當於 kratos 和 ischus）是一個重要的新約辭彙，而基督藉聖靈賦予信徒能力，確是新約中重大的事實，是福音裡的榮耀，也是世界各地忠實追隨基督的人的標記。如果你對我這番話產生疑問，你大可細讀以下經文：</p>
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
              <h4 className="font-semibold text-gray-800 mb-2">認識論的陷阱</h4>
              <p className="text-gray-700 leading-relaxed">許多基督徒認為『既然我經歷了聖靈的工作，我就完全認識聖靈』——這是一個邏輯陷阱。經驗是片段的、個人化的，而聖經啟示是全面的、歷史的。一個人可能經歷過聖靈的安慰卻不理解他的聖潔工作；可能有過靈恩的經驗卻誤解他與基督的關係。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">文化與信仰理解的互動</h4>
              <p className="text-gray-700 leading-relaxed">我們對聖靈的理解深深受到文化、時代背景的影響。西方理性主義傳統可能導致人們否認聖靈的工作；神祕主義傳統可能導致人們過度強調經歷；亞洲靈魂觀可能影響人們對聖靈個格性的理解。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">聖經作為『聚焦鏡片』的角色</h4>
              <p className="text-gray-700 leading-relaxed">加爾文的眼鏡比喻指出聖經不是額外的知識，而是幫助我們正確解讀現實的工具。聖經提供的不是抽象的神學，而是一個框架。</p>
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

          </div>
        )}
      </div>
    </div>
  );
}
