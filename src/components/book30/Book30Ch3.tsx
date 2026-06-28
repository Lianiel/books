import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Compass, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book30Ch3() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">第三章</h1>
        <h2 className="text-xl font-semibold text-gray-700">上坡呢？還是下坡？</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            {/* 一 */}
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">一、熱力學諸定律</h3>
              <p className="text-gray-700 leading-relaxed mb-3">談完了宇宙的起源及其基本結構後，我們接着要探究宇宙諸定律的特徵以及宇宙間各種變化的特徵。我們早已注意到熱力學第一及第二定律在這方面的重要性，這些定律在支持創造模式方面是有力的證據。現在就此作進一步的探討。</p>

              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-blue-800 mb-2">(一)進化模式的預測與基本定律</h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">如果進化模式就預測科學資料而言真是一種有效的模式，那麼它應該能預測自然界的一些基本規則。如果原本一些不相干的物質真的經過了一連串的步驟變成了元素、星球、化合物、活細胞、蟲、魚、兩棲動物、爬蟲、哺乳動物，以至於人類的話，那麼，顯然宇宙中應存有某種有力且普遍的原則，使物理的演變愈趨高等和複雜。這就是由簡進化為繁的基本定律，它將新的系統列入自然界中，並且使現存的系統發展成較高等的系統。為了分辨起見，此定律可稱之為「自然更新及整合原理」(Principle of naturalistic innovation and integration)。</p>
                <p className="text-gray-700 text-sm leading-relaxed">倘若一個進化論者事前沒有自然定律的知識，而只遵循進化模式的話，他必然會預測自然界有這類基本原則在運行着。基於進化論的假設，沒有人會預測到像熱力學第一及第二律那樣的定律。</p>
              </div>

              <div className="bg-indigo-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-indigo-800 mb-2">(二)創造模式的預測與基本定律</h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">從另方面說，創造模式能明確地預測這兩條熱力學定律。由於創造論認為最初的創造是十全十美且有目的，因此下列二點甚為明顯：第一，護持原理 (Principle of conservation) 必須存在以確保創造萬物的目的所獲致的成果。第二、任何強制性的改變，就完美的創造而言是必然有損的。因此創造模式在自然界所預測的基本定律可稱之為「自然的護持及衰退原理」(Principle of naturalistic conservation and disintegration)。此與進化模式所預測的定律剛好相反──護持而非更新，衰退而非整合！</p>
                <p className="text-gray-700 text-sm leading-relaxed">答案是創造論能藉熱力學的定律確切地得到證實。Bridgman 氏說：「我認為物理學家之能接受熱力學的二個定律，可能是由於這是我們所得經驗中最可靠的普遍定例。」（註1）然而進化論者所預測的更新及整合卻僅存於進化論哲學的領域而不存在於可觀察的科學資料內。</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-3">熱力學第二定律在此討論中尤屬重要，因其描述在自然界中普遍存有一下坡 (Downhill) 的，而非上坡 (Uphill) 的變化原則，此與進化論所述者恰相反。在不同的教科書中，第二定律可定義成下列不同的形式：</p>

              <div className="space-y-3 mb-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">1. 古典熱力學 (Classical thermodynamics)</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">「在任何自然性的物理變化中，熵 (Entropy) 永遠是增加的。」（熵是「一種能量的量度，這種能量無法轉換為功。」）（註2）</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">2. 統計熱力學 (Statistical thermodynamics)</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-1">「能量都具有一個叫做熵的量來表示其特性。熵是能量不規則性的量度。而能量總是向熵增加的方向流動。」（Dyson 氏，註3）</p>
                  <p className="text-gray-700 text-sm leading-relaxed">「就目前所知，所有變化都朝向熵的增加、不規則性的增加、亂度 (Randomness) 的增加等下坡的趨向。」（Asimov 氏，註4）</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">3. 資訊熱力學 (Informational thermodynamics)</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-1">在資訊 (Information) 的處置與傳遞系統方面（例如：電子計算機、自動控制、電視、報紙等），有一種高度巧妙的資訊原理的新科學採用了熵的概念作為資料通訊方面的噪度 (Noise) 與不確定度 (Degree of uncertainty) 的量度。「關於資訊與熱力學第二定律在概念方面的結合現已肯定的建立起來。」（註5）</p>
                  <p className="text-gray-700 text-sm leading-relaxed">因此，任何自然過程皆可用下列方法之一描述：(1)當作一種能量轉換系統以完成「功」；(2)當作一個結構系統而其結構在改變中；(3)當作一個資訊系統以運用並傳遞消息。於是熵可視為：(1)能量作超額功之不可能性；(2)系統結構秩序的減低；(3)資訊的遺失或擾訊 (Distortion)。</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-3">不論上述那一種解釋，都很明確地顯示出一個系統的下坡趨勢：能量漸竭，紊亂漸增，資訊漸趨零亂。就進化論的觀點而言，一個高等的有機體，為了進化卻必須獲得更多的能量，紊亂必須減少，資訊必須增加。然而第二定律告訴我們，如非外在因素所致，這種現象在自然過程中是不可能發生的。</p>
              <p className="text-gray-700 leading-relaxed mb-4">似乎已經甚為明顯，熱力學第二定律構成了進化模式的一個嚴重問題。創造論者不解何以進化論者對這一問題不予重視。很多支持進化論的書籍從來不提這一點，許多能力很強的進化論學者也有意忽視這一問題，好像這一問題並不重要。當被追問得緊的時候，往往將進化論與熵的原理勉強作如下的答覆：</p>

              <div className="space-y-3 mb-4">
                {[
                  {
                    title: '(一)「第二定律並不適用於有生命的系統。」',
                    content: 'Rush 氏 (《生命的黎明》) 說：「在進化論的複雜過程中，生命顯示了與熱力學第二定律顯著相反的趨勢……進化是不倒退的。」（註8）然而，相當權威的生化學家 Blum 博士盡了極大的努力欲使他的生物學界朋友們相信熵也能適用於生命過程，他說：「不論我們如何細心地檢視生命系統的活動，我們找不到熱力學原理失效的證據，但是我們確實遇到了在無生命界中所未曾見過的複雜情況。」（註9）若僅因進化論與第二定律有衝突就說它不適用於生命系統，是很難令人信服的，那只是毫不懷疑地認定了進化論是真實不假的。',
                  },
                  {
                    title: '(二)「第二定律僅為一統計上的陳述，可能有例外。」（註10）',
                    content: 'Angrist 氏所指出的：「只是這類例外發生的可能性極其小。……Bent 氏曾經計算過熵局部逆轉的可能性。他計算出一卡路里的熱量完全轉變為功的可能性，所得結果可用另一熟知的統計例子來表示——一羣猴子任意敲打打字機的鍵，其能打出莎士比亞作品的可能性，根據 Bent 氏的計算結果，一卡路里熱量轉換為功的可能率正與猴子打出莎翁作品的可能率相近。亦即在沒有錯誤的情況下要連續打一百萬億（一百萬萬）次。」',
                  },
                  {
                    title: '(三)「或許第二定律在很久以前並不發生作用。」',
                    content: '好罷，也許在過去，遠在進化的早期，曾有一條不同的定理——也許那就是依據進化模式所應有的「自然更新及整合原理」。然而這個假設也同樣否定了進化論的基本假設，亦即目前的過程足以說明諸事物的起源。事實上，這一說法將承認創造論的正確。為了要解釋目前的世界而必須承認特殊的創造過程僅在過去發生。',
                  },
                  {
                    title: '(四)「也許第二定律並不適用於宇宙的其他部份。」',
                    content: '甚至像 Asimov 氏這樣權威的科學家也認為：「我們並不了解宇宙內所發生的每一件事。我們所觀察到的變化都是向熵增加的方向進行。然而在某些地方，也許在不尋常的情況下有一些向熵減少的方向進行的變化，是我們尚不能研究的。」（註11）像這一類的推測雖很有趣，但卻與科學毫無關係。因為到目前為止，沒有任何證據顯示（也僅有少數科學家相信），宇宙中其他部份存在着不同的定律（這宇宙是統一的 Universe 而非各不相同的 Diverse）。',
                  },
                  {
                    title: '(五)「第二定律並不適用於開放系統。」',
                    content: '進化論者對第二定律所引起的問題最普遍的答覆就是否認它對地球這樣開放系統的適用性。因為從太陽抵達地球的能量足以彌補在熵的過程中所損耗的能量，因此他們說進化與第二定律相矛盾的問題不是問題。但是這種答覆本身就不切題，因為它將能量之多寡（此處當指具有足夠能量）與能量之轉換相混淆了。因為問題並不在太陽是否有足夠的能量維持進化的過程，乃是太陽的能量怎樣用來維持進化？所有的系統事實上都是開放系統，並且或多或少、直接或間接地接受從太陽來的能量，所以並未說明任何事情。',
                  },
                ].map((item, i) => (
                  <div key={i} className="border border-blue-100 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2 text-sm">{item.title}</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.content}</p>
                  </div>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-3">對所有的系統而言，第二定律描述了從有秩序趨向混亂的趨勢。世界上確實也存在一些系統，人們可以明顯的看到其秩序的增進——一顆種子生長成一棵樹，一個胚胎成為一個成熟的動物，一堆磚塊和樑木變成一幢建築物。仔細研究這些系統，在每一事例中至少須滿足下面兩個條件：</p>

              <div className="bg-green-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-green-800 mb-3">秩序能暫時超過第二定律預測的兩個必要條件</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-green-700 mb-1">1. 必須有一導引成長的計畫</p>
                    <p className="text-gray-700 text-sm leading-relaxed">由任意堆砌而進行的成長將不可能得到一個井然有序的結構，它將僅僅是一種混雜的堆積物。想要產生有秩序的成長，則開始時必須先有某種模型、藍圖或規劃。在生物體中，這種計畫就是錯綜複雜的遺傳計畫，這構成了某種生物體內 DNA 分子的資訊系統 (Information system)。對建築物而言，則為建築師及工程師所訂的一套計畫。</p>
                  </div>
                  <div>
                    <p className="font-medium text-green-700 mb-1">2. 必須有一能量轉換機制轉給予成長所需的力量</p>
                    <p className="text-gray-700 text-sm leading-relaxed">除非將環境中可獲得的能量轉換成某種特定的形式，使其能將各結構上的成份組合、連繫成為複雜且有秩序的完整系統，否則便為無用。「我們已經知道複雜的組織需要作功來維持，而對食物的需求也正是提供作功所需的能量。但是單純的能量消耗並不足以發展及維持秩序。一隻野牛在磁器店中也可以作功，但它既不能創造也不能維持一種組織 (Organization)。所需的功為特定的功，它必須遵照一定的規格，也必須知道朝什麼方向進行。」（Simpson 和 Beck，註12）以一顆種子來說，能量的轉換機制之一是被稱為光合作用的神奇過程，即經由一些尚未被完全明瞭的複雜反應將陽光轉換成植物的組織。在動物中，無數複雜的機轉──消化、血液循環、呼吸等──相互配合，將食物轉變成身體的組織。</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-3">因此重申上述問題，即問題並不是從太陽抵達地球的能量是否足以支持進化，乃是此能量如何轉換而使進化得以進行。如果進化過程確實存在，那它顯然應該是最巨大的生長過程。若是所有較小型的生長過程都需要一定的導引規格及特定的能量轉換機轉，那麼必然的，進化過程就必須要一套更為複雜的規格，及更為特殊的能量轉換機轉了。但它們是什麼？像這樣的規格及機轉尚未被發現過。突變及天擇二者既非一種指示計畫，亦非一種能量轉換器，二者皆非此二者就更不可能了！進化論則必須在兩者皆是的情況下，才能促使生長！</p>
              <p className="text-gray-700 leading-relaxed">因此，我們有正當的理由下此結論：進化過程（假設的自然更新及整合原則）完全不容於熱力學第二定律。創造模式並不需要解釋熱力學定律，因為它已預測到這些定律！</p>
            </div>

            {/* 二 */}
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">二、生命的起源</h3>
              <p className="text-gray-700 leading-relaxed mb-3">無疑地，進化過程中最困難的階段之一為從無生命過渡到有生命，從非繁衍化合物 (Non-replicating chemicals) 到自行繁衍系統 (Self-replicating systems)。如果進化模式是對的，則此種過渡必然發生過，且是一種自然進行的現象，這種現象應該可以被至今仍有作用的自然定律所闡明。</p>
              <p className="text-gray-700 leading-relaxed mb-3">若進化論是正確的，則依此模式而得的基本預測是，這種進化過程目前仍應存在，因此從無生命到有生命的進化，今日仍應發生。但經驗觀察證實像這樣的進化在今日並沒有發生。因此進化模式必須以續加的假設加以修正，即地球的初期大氣及水氣的情況與現今所存的有所不同。回過來說，創造模式的簡單性及有效性是十分明顯的。它不需解釋為何今日不見從無生命至有生命的進化，因為創造模式本就預測如此。按創造論，生命為創造時期的獨特工作，而今不再創造。</p>

              <div className="bg-indigo-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-indigo-800 mb-3">(一)生物體在分析上的複雜性</h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">較高等的生物是由無數個特殊細胞所組成。每個細胞中具有錯綜複雜的特定蛋白質分子。每個蛋白質分子是由約廿種不同的氨基酸組合而成的特殊有機物，而每種氨基酸是由氫、氧、氮和碳四種元素所組成（有兩種氨基酸還各含一個硫原子）。</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">在每種已知的生物體中，這些複雜的系統全基於 DNA 分子系內的「指示」(Instruction) 而再生及組合起來的。DNA（去氧核糖核酸）是由六種較簡單的分子所組成，它們包含了四種鹼基，其排列決定了它的信號。這四種鹼基的成份為氮、氧、氫和碳，DNA 就是由這四種鹼基以及固定這些鹼基的一個去氧核糖分子和一個磷酸分子組成的。</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">DNA 分子不僅具有細胞所需的合成特定蛋白質分子所要之資訊 (Information)，且具有複製其本身所需的資訊。因此，繁殖及遺傳直接依賴於這種奇妙的分子。這種分子在每一類的生物體中有不同的特定結構。</p>
                <p className="text-gray-700 text-sm leading-relaxed">因此，自然發生論的問題變成了第一個複製系統如何進化而來的問題了。其無法解決的難題是 DNA 只能在某些蛋白質分子（酶）的特定幫助下複製，而反過來說，這些蛋白質分子又又只能在 DNA 的引導下產生，彼此互相依賴，而欲使複製能發生則兩者必須都存在。看起來真的只有特殊創造才能解釋這一過程的開始。許多嚴謹的研究者已承認了這點。</p>
              </div>

              <div className="space-y-2 mb-4">
                <div className="border-l-4 border-blue-400 pl-4 bg-blue-50 py-2 pr-3 rounded-r">
                  <p className="text-sm font-semibold text-blue-700 mb-1">Jacobson 氏（1955年，American Scientist）（註13）</p>
                  <p className="text-gray-700 text-sm leading-relaxed">「對於繁殖計畫、從環境中抽取能量及物質、生長的先後程序、以及將指示轉為生長的機能等，都必須在那一刻同時發生。這些事件的結合，似乎難以令人相信是件偶發事件。因而常被歸為上帝的參與。」上面的話是在一九五五年所寫的，兩年以前，Watson 氏和 Crick 氏剛發現 DNA 的結構。這個奧秘在今天仍未找到比以前更好的解釋。</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4 bg-blue-50 py-2 pr-3 rounded-r">
                  <p className="text-sm font-semibold text-blue-700 mb-1">近代評論家（American Scientist，1971年）（註14）</p>
                  <p className="text-gray-700 text-sm leading-relaxed">「以生化遺傳學的觀點來看，進化論的最大致命難題仍未有答案。……在現存的所有生物體中，DNA 的複製過程及將其密碼作有效地轉換的過程，均需高度正確的酶。而同時，那些酶的分子結構又完全由 DNA 本身所決定，此一事實對進化論來說是個難解的謎。」「是否密碼與傳它的方法在進化中同時出現？像這樣的巧合會發生是難以令人相信的，因為兩者皆異常複雜而且必須精確地協調才能生長。對達爾文以前的人（或達爾文以後但對進化論懷疑的人）來說，這一疑問顯然地將被解釋作特殊創造論的最有力證據。」</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-gray-800 mb-3">(二)合成生命在實驗上的困難</h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">由於熱心的報紙作了令人誤解的報導，使人產生了科學家們已能真正由試管製造出生命的印象。然而事實上絕非如此。從任何角度來說，我們無意輕視在這方面努力的生化學家們所獲得的有價值的成就。然而這些實驗的結果並未創造出生命。為了正確地剖視這一事實，下面將有關這一類的重要實驗作一簡要的回顧：</p>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-gray-700 mb-1">1. 氨基酸的合成</p>
                    <p className="text-gray-700 text-sm leading-relaxed">從 Stanley Miller 氏開始，很多研究工作者用一些特殊的儀器裝置在推想中與初期地球上條件一樣的情況下製成了一些氨基酸。但無論從那一方面來看，氨基酸並不是有生命的東西。何況 Miller 氏的儀器中包括一個凝氣管 (Trap)，一旦氨基酸生成即予以分離，否則這些氨基酸會迅速地在試管裏的「大氣」中被分解。像這樣的保護措施，在初期的地球上當不會存在。（註15）</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700 mb-1">2. 氨基酸之連接</p>
                    <p className="text-gray-700 text-sm leading-relaxed">Sidney Fox 氏及其他一些人，以極特殊的加熱技巧及絕不可能在假設的初期地球上存在的某些情況下，將氨基酸連接在一起，合成了他稱之為「類似蛋白質」(Proteinoids) 的物質。然而，從任何角度來看，它們根本就不是在生物體中被發現的、且有高度秩序的那種蛋白質。它們只是一團團的東西，沒有秩序，也沒有用處。即使在始初的地球上真有這種東西，它們也會很快地被破壞掉。（註16）</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700 mb-1">3. 仿製基因，DNA 等</p>
                    <p className="text-gray-700 text-sm leading-relaxed">隨着一九六七年 Arthur Kornberg 氏的所謂「DNA 的合成」，許多報紙的宣傳鋪天蓋地而至。Severo Ochoa 氏及其他一些人也因為合成濾過性毒的 DNA（一個基因），或其他有生物活性的分子而同樣地獲得聲譽。無疑地，這些全是了不起而且值得稱讚的成就。然而，無需深入討論就知道，上述每一例子都要仿製 DNA 模版分子 (Template DNA molecule)，且將仿製的情況弄成與在真正的細胞中的情況一樣，且每一例中，都必須有恰當的酶。（註17）因此，沒有一個例子可以合成基因或 DNA 分子，或其他類似的物體，除非用類似這一類東西的物體作合成的引子。</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700 mb-1">4. 細胞的合成</p>
                    <p className="text-gray-700 text-sm leading-relaxed">一九七○年，傳出了 J. P. Danielle 真正合成了一個有生命的細胞。然而同樣地，他是用活細胞開始的，經過分解，然後從拆散後的細胞部份再配造成一個細胞。與前面的情形一樣，這是一個重要的成就，但無論如何，它不能稱之為生命的創造。</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">創造論者相信不斷的強調自然法或人工法製造有生命的物體是極易引起誤解的。在自然條件下，這種現象是不會發生的。沒有任何科學上的確據證明生命可以由無生命而來。創造模式強調生命的獨特來源，是藉一位永活的創造者的話而創造成的。根據科學的因果律，生命的第一因必是永活的。</p>
            </div>

            {/* 三 */}
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">三、變異與天擇</h3>
              <p className="text-gray-700 leading-relaxed mb-3">當達爾文初次發表天擇的種源論時，他認為在可見的自然界中，在生存競爭下，同類生物之間的連續而輕微的變異，均會受到不同程度的有利與不利的影響。具有顯著有利影響的，在天擇中是佔優勢的，他們會生存得更久，且會將這些特性遺傳給後代。因此，慢慢地，一些完全新的，而且較高等形態的生物會出現。</p>
              <p className="text-gray-700 leading-relaxed mb-3">稍後發現正常的變異完全服膺孟德爾的遺傳定律，其改變僅是遺傳系統中隱性的表現，故並無新奇之處。在近代分子生物學上，由於對深植 DNA 系統內之遺傳密碼更深入了解後，因而更進一步證明了正常的變異僅能在某一特殊生物的 DNA 所指定的範圍內才有作用，因此，變異並沒有帶來真正新的特性，也不能變得更有秩序或更複雜。所以，變異是橫向的 (Horizontal)，而非縱向的 (Vertical)！</p>
              <p className="text-gray-700 leading-relaxed mb-3">很不幸地，這一類正常的變異在現在的進化論中仍被普遍的用作證據。常被引用的例子——英國的斑點蛾 (Peppered moth)，由於工業的發達，使樹幹污染漸變深色，也使此蛾從顯著的淺色「進化」到顯著的深色——就是最好的例子。但這不是真正的進化，而只是變異。天擇是一種護持力 (Conservative force)，其作用在於使物種不因環境的改變而消滅。Matthews 氏說：「這種（斑點蛾）實驗完美地顯示了天擇——或適者生存——的作用，但他們沒有展現進化的過程。也許這些淺色、深淺色及深色飛蛾的數目和比例會改變，但所有的蛾，從開始到末了仍舊是斑點蛾 (Biston betularia)。」（註18）</p>
              <p className="text-gray-700 leading-relaxed mb-3">天擇並不能產生真正新的品種，而且其發生是被動的，它像是一種篩網，只有適合環境的變異體才能濾過。天擇本身並不能產生新的事物。這種已經隱含在種細胞 (Germ cell) 裏的特性重混 (Reshuffling) 或重組 (Recombination) 實在不能產生真正新的事物，可是這種重組加上天擇的現象，卻被進化論者視為進化模式中重要的論點。Mayr 氏說：「重組是遺傳上變異的最重要來源，也是可供天擇的材料。」（註19）然而正如重組這兩個字本身的字義所顯示的，它並不產生新的東西，當然也不會使生物變更複雜。</p>
              <p className="text-gray-700 leading-relaxed mb-3">即或變異或重組真能產生一些新物，但由於天擇的結果，幾乎很肯定地，它很快就會被淘汰。一種新的構造或器官在生存競爭時被視為是確有好處的（比如說原先陸居的動物生出翼來，或是一種沒有視覺的動物生出眼睛），直到它發展完全之前，會顯得無用，甚或有害。沒有任何理由可以相信天擇會意於演進中的翼、眼睛或其他器官。倘若進化模式是正確的，那麼，翼就應該經歷四次不同的進化（昆蟲、飛行的爬蟲、鳥及蝙蝠）；眼睛至少有三次各自獨立的「進化」。Salisbury 氏最近曾就此值得注意之事，加以評註：「關於所謂的平行進化 (Parallel evolution)，我最大的懷疑是，……即使像眼睛這樣複雜的器官就曾出現於烏賊、脊椎動物和節足動物。只要追究其原因一次就夠煩的了，倘若按照現代的合成理論 (Synthetic theory) 要說明多次的演化會令我昏眩。」（註20）這評註提醒了我們一件事，達爾文也曾說過思解眼睛是怎樣在天擇 (Natural selection) 原則下產生的曾使他病倒。</p>
              <p className="text-gray-700 leading-relaxed">天擇配合以各生物遺傳密碼中的變異潛能 (Variational potential)，是產生橫向變異或輻射狀變異 (Radiation) 的有力工具，能使其適應環境並生存下來。然而，天擇對產生縱向的變化，導致更高等、更複雜的生物品種卻是無效的。事實上，天擇阻止了這樣縱向的變化，因為演進過程中的新生器官是無用的，除非真的發展完全並能工作才有用處。進化論者一直未能從現今世上或化石中確實找到一種後來演變為有用器官的初期器官或結構，這事實是值得重視的。然而這些全都符合創造模式所作的預測。</p>
            </div>

            {/* 四 */}
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">四、遺傳學上的突變</h3>
              <p className="text-gray-700 leading-relaxed mb-3">既然一般變異與既存特性的重組都不能解釋「上坡」進化，因此必須另找不尋常的機轉 (Mechanism) 來說明。為此目的，進化論的近代合成理論或新達爾文主義 (Neo-Darwinism) 所廣泛採用的機轉是突變 (Mutation)。突變被認為是基因裏面真正的結構改變，其特點為產生新物，並不只是既有東西的重新安排。就某方面來說，是 DNA 分子中某一段發生了改變，因此在其後代結構形成過程中經由遺傳密碼傳遞了不同的資訊。Mayr 氏說：「別忘了突變是生物界所有遺傳變異的主要來源，突變也是唯一能受天擇作用的新材料。」（註21）</p>
              <p className="text-gray-700 leading-relaxed mb-3">基本的進化模式會預測大部份突變是有益的，能產生「縱」的變化，變得更有秩序。另一方面，創造模式會如此預測：如果真有像突變之類的事情，使得生物品種在複雜性及秩序方面有「縱」的改變，則它們會是有害而不是有利的。現在就兩種模式，討論有關突變方面的實驗結果：</p>

              <div className="space-y-3 mb-4">
                {[
                  {
                    title: '(一)突變漫無目的且無方向',
                    content: 'Waddington 氏（《生命的本質》）說：「事實上，我們仍然可以說在生物中產生新的遺傳變異，除了漫無目的的突變之外，別無他途，而且除了天擇之外，也無其他方法可使生物的遺傳結構由一代向下一代改變。」（註22）我們沒有任何方法可以控制突變，使之產生所需要的特性；天擇只能作用於已發生之事物。',
                  },
                  {
                    title: '(二)突變很少發生，並不普遍',
                    content: 'Ayala 氏（哲學科學期刊）：「根據客觀的估計，在高等生物裏，大部份的突變其發生的頻率 (Frequency)，即每一代中每個基因發生突變的機會，約在萬分之一到百萬分之一之間。」（註23）',
                  },
                  {
                    title: '(三)好的突變很少',
                    content: 'Muller 氏是對突變的實驗研究極為深入的學者，他說：「就有用性來說，突變是漫無目的的。因此，百分之九十九以上的突變，在某方面來說都是有害的，正如意外發生時可預期的後果一樣。」（註24）赫胥黎氏 (Julian Huxley) 是對新達爾文主義最有貢獻的人，他對有益突變的發生率更沒有信心：「像這種千分之一有益突變的機率並不算大，但可能已經算是相當慷慨的說法了。因為有很多突變是致命的，使生物不能生存，其他大部份的突變其結果好像使機器齒輪脫臼一樣。」（註25）事實上，真正有益的突變──實際上真是突變，而不僅僅是生物體中原有的隱性遺傳性格的表露──而且在自然狀況下一直有益的突變，還沒有見諸文獻。',
                  },
                  {
                    title: '(四)所有突變的總效果是有害的',
                    content: 'Wills 氏（科學美國人）：「大部份的突變對產生突變的個體而言是有害的，甚至是致命的。像這樣的突變可說是在基因庫 (Pool) 中引進了一種遺傳負荷 (Genetic load)。……特別是離子化的輻射線 (Ionizing radiation) 及能引起突變的化學藥品 (Mutagenic chemicals)。」（註27）進化論者幾十年來熱心地試着要從環境中消除產生突變的輻射，充份地說明了大多數的突變是有害而不是有利的，是與進化所預期的結果相背的！如果進化論者真相信進化是基於突變，那麼他們應該贊同所有使突變速率加快的方法。然而事實上，幾十年來他們一直反對核子試爆，以免使生物產生突變！',
                  },
                  {
                    title: '(五)突變可以影響許多基因，也受許多基因的影響',
                    content: 'Simpson 氏和 Mayr 氏說：「尤有進者，雖然突變只是發生在細胞、染色體或基因上的孤立事件，但是突變的結果卻與整個個體遺傳系統的相互作用有關。」（註29）Mayr 氏說：「此一廣泛的相互作用曾被故意誇張地描述為：一個生物的每個遺傳性格受所有基因的影響；每個基因也會影響所有的遺傳性格。這種相互作用說明了整個遺傳型 (Genotype) 在功能上的緊密與完整。」（註30）顯而易見的，如果任何一種突變是極可能有害的，那麼，由於性格的改變需要很多基因共同的作用，因此必然同時引發許多其他的突變，使生物受害的可能性更加倍。反過來說，控制某一性格的全部基因能同時產生生好的突變，其可能性實際上將減至零。',
                  },
                ].map((item, i) => (
                  <div key={i} className="border border-indigo-100 rounded-lg p-4">
                    <h4 className="font-semibold text-indigo-800 mb-2 text-sm">{item.title}</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.content}</p>
                  </div>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed">總而言之，創造模式預測任何一個有機或無機的系統，其秩序 (Degree of order) 的改變實際上確實是下坡性的，而不是上坡性的。這已從熱力學定律、突變的本質、以及毫無證據證明生命可以從無生命進化而來，或者藉任何一種變異及天擇而產生較高等的生物等事實而得以充份地證明。上述每一事實對進化模式都是嚴重的難題。到目前為止，藉續加以及再續加的假設，以嘗試將這些事實與進化模式融合，至少從實驗及觀察方面來說，還沒有一個成功了的。</p>
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
                '進化模式需要「自然更新及整合原理」（由簡趨繁）；創造模式預測「自然護持及衰退原理」（由完美趨向衰退）。熱力學兩大定律——能量不滅（護持）與能量衰退（下坡）——完全支持創造模式，卻與進化模式根本矛盾。',
                '第二定律有三種表述（古典/統計/資訊熱力學），但方向一致：能量漸竭、紊亂漸增、資訊漸零亂。進化論者提出五種辯解（不適用有生命系統、只是統計陳述、過去不適用、宇宙其他部份不同、開放系統例外），每一種都站不住腳。開放系統論尤其混淆了「有足夠能量」與「能量轉換機制」這兩個截然不同的問題。',
                '使系統局部超越第二定律，需要兩個缺一不可的條件：①有明確的導引計畫（生物體中即 DNA 資訊系統）；②有特定的能量轉換機制（如光合作用、消化系統）。進化模式假設突變與天擇能充當這兩個角色，但突變漫無目的、天擇是被動篩網，二者皆不是計畫也不是能量轉換器。',
                'DNA 與蛋白質（酶）之間存在致命的「雞生蛋、蛋生雞」困境：DNA 只能在酶的幫助下複製，酶又只能在 DNA 的引導下產生。Jacobson 氏（1955）和後來的評論家都承認這是進化論最大的致命難題，也是特殊創造論最有力的證據。實驗室的四項合成成就（氨基酸、類蛋白質、仿 DNA、細胞重組）均無法在自然條件下重現，且每項都需要活的生物材料為起點。',
                '天擇（斑點蛾等例）只能產生橫向（同種內部）的變異，不能產生縱向（跨種）的進化。重組不產生新東西；新器官（翼、眼睛）在發展完全前無用甚至有害，天擇會將其淘汰，而非保留——這是進化論內部無法自圓其說的矛盾。',
                '突變的五項實驗事實（漫無目的、發生率極低如萬分之一到百萬分之一、99%以上有害、總效果有害、影響整個基因型）全部支持創造模式的預測而非進化模式。進化論者幾十年反對核子試爆（以防突變傷害人類），卻同時聲稱進化靠突變驅動——這是一個不可忽視的邏輯矛盾。',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-gray-700">{point}</p>
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
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「資訊」才是生命起源的核心問題</h4>
              <p className="text-gray-700 leading-relaxed">本章揭示生命起源的真正困難不只是化學問題，更是資訊問題。DNA 不只是一個分子，它是一個攜帶複雜資訊的「語言系統」——四種鹼基的排列順序就像字母排列成句子，承載了製造生命所需的全部指令。自然定律（化學、物理）只能解釋分子怎樣結合，卻無法解釋這些分子攜帶的「訊息」從哪裡來。哲學家 Stephen Meyer 在《細胞中的記號》一書中論述：資訊只有兩個已知的來源——智慧設計或從已有資訊複製；從來沒有觀察到資訊從無秩序中自發產生的案例。這讓「生命起源於智慧設計者」成為科學上最合理的推論，而非宗教教條。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「猴子打字機」背後的概率論</h4>
              <p className="text-gray-700 leading-relaxed">本章提到 Bent 氏的計算：一卡路里熱量轉換為功的可能率，等於猴子隨機打出莎士比亞作品的可能率——即需要一百萬億次不間斷的嘗試才有一次成功。這個比喻揭示了一個更深的問題：若製造哪怕最簡單的蛋白質（約 100 個氨基酸按特定順序排列）的概率，天文學家 Fred Hoyle 計算約為 10⁻¹³⁰——這個數字比宇宙中所有原子的數量（約 10⁸⁰）還要小得多。即使整個宇宙的年齡都用來隨機嘗試，也遠遠不夠。這個計算說明，概率論本身就指向「設計」而非「機遇」。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「斑點蛾」事件的科學史教訓</h4>
              <p className="text-gray-700 leading-relaxed">英國斑點蛾（Peppered moth）的例子在 20 世紀被廣泛收入教科書，作為天擇和進化的「教科書級證據」。然而如本章所指出，這只是同種內部顏色比例的變化，始終還是斑點蛾。更有意思的是，1998 年後一系列科學調查（包括 Judith Hooper 在《了不起的意外》中的報導）顯示，最初的「蛾棲息在樹幹上」的照片，實際上是人為拍攝的——斑點蛾在白天不習慣停在樹幹上。這個「進化論最佳例證」在科學誠信上出現了嚴重問題，促使許多教科書在 2000 年後悄悄刪除或修改這個例子。這個事件提醒我們：科學共識有時反映的是意識形態而非單純的事實。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">突變與癌症：熵的生命代價</h4>
              <p className="text-gray-700 leading-relaxed">本章的突變論述在今天有了更明確的醫學印證：癌症本質上就是細胞基因突變後失控增殖的結果。每年全球數百萬癌症患者的痛苦，是突變「並非創造性力量而是破壞性力量」最真實的見證。人類醫學花費巨大資源去修復突變、對抗突變所帶來的後果——而非利用突變來「進化」——這與創造模式完全吻合：初始的完美創造在突變（遺傳密碼的抄寫錯誤）的累積下走向衰退。醫療科學的目標是恢復秩序、對抗混亂，這本身就是在與第二定律搏鬥。</p>
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
              '書中說宇宙一切的自然趨勢是「下坡的」——能量衰竭、資訊流失、秩序瓦解。你在日常生活中觀察到哪些例子？這個科學事實如何影響你對「沒有上帝的世界」會走向何方的思考？',
              '進化論者對第二定律提出了五種辯解，每一種都有其問題。你覺得哪一種辯解最具表面說服力？讀完作者的反駁後，你是否覺得這些辯解確實站不住腳？',
              'DNA 與蛋白質（酶）之間的「雞生蛋」困境，被 Jacobson 氏說成「常被歸為上帝的參與」。如果你要向一位生物學系的學生解釋這個困境，你會怎樣說？',
              '作者指出，突變的五項實驗事實都指向「有害而非有益」，而進化論者卻幾十年來反對核子試爆（以防突變）。你覺得這個邏輯矛盾說明了什麼？科學結論有時候會與研究者的信念相矛盾，你認為真正誠實的科學態度應該是什麼樣的？',
              '斑點蛾的例子被教科書廣泛引用為「進化的最佳證據」。如果後來發現這只是同種內部的顏色變化，你覺得應該如何看待教科書中的「科學事實」？這對你的信仰探索有什麼參考意義？',
              '天擇是「被動的篩網」，只能淘汰不適合的，卻不能「發明」新的器官。本章說，翼、眼睛等複雜器官在發展完全之前是無用甚至有害的。你覺得「自然發展出眼睛」和「被設計出眼睛」這兩種解釋，哪一個更符合邏輯？',
              '本章結尾說：「創造模式並不需要解釋熱力學定律，因為它已預測到這些定律！」你覺得這句話的意義是什麼？一個理論能「預測」到定律，而非事後才去解釋定律，對你評估這個理論的可信度有什麼影響？',
            ].map((q, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0 min-w-[20px]">{i + 1}.</span>
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
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔬 從生活觀察「第二定律」的真實性</h4>
              <p className="text-gray-700 mb-2">本章的核心議題是：自然界是走上坡（進化）還是下坡（衰退）？這週找三個日常觀察來印證第二定律：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>一個放置不管的空間（房間、庭院）——它自然地變得更整潔，還是更混亂？</li>
                <li>一部沒有維修的機器——它自然地變得更好用，還是更破舊？</li>
                <li>思考：若宇宙自然傾向下坡，初始的「完美有序」從哪裡來？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🧬 用「DNA困境」帶動一次對話</h4>
              <p className="text-gray-700 mb-2">「DNA 需要酶才能複製，酶需要 DNA 才能製造」——這是個簡單易懂的邏輯困境。找一個機會用它向朋友或家人展示生命起源的複雜性：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>問：「你知道 DNA 的複製需要特定蛋白質嗎？那這些蛋白質又從哪裡來的？」</li>
                <li>讓對方自己思考這個循環的難題</li>
                <li>不急於給出答案，讓問題本身引發好奇</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">⚠️ 培養「批判性閱讀」科普文章的習慣</h4>
              <p className="text-gray-700 mb-2">本章揭示了教科書中的斑點蛾例子可能存在的問題。這週讀任何一篇科普文章或新聞時，試着問：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>這個例子真的證明了作者聲稱的結論，還是只是一個相關的現象？</li>
                <li>「變化」是否等於「進化」（從簡到繁的縱向躍升）？</li>
                <li>這個結論有多少是觀察事實，有多少是詮釋和推論？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 寫下「三大下坡」的個人反思</h4>
              <p className="text-gray-700 mb-2">本章說宇宙、生命和遺傳都呈現下坡趨勢。用 10 分鐘寫下：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>在我的身體、我的關係、我的靈命中，我觀察到哪些「下坡」的傾向？</li>
                <li>若沒有外力干預，這些會自然地變得更好嗎？</li>
                <li>上帝的創造、基督的救贖、聖靈的更新——這些是否正是打破「下坡」的「外在因素」？</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic text-sm leading-relaxed">「主啊，感謝祢讓我看到，宇宙萬物的自然趨勢是走向衰退，而非走向完美——這正是祢創造之後世界的狀況，也是我自己靈命的真實寫照。感謝祢用科學定律向我們見證：若沒有祢，沒有一件事物能自然地趨向秩序與完美。求祢幫助我，不靠自己的努力去製造屬靈的秩序，而是不斷地回到祢這個生命的源頭，讓祢的靈在我身上如光合作用般奇妙地工作，將我這個本走下坡的人轉化更新。也求祢讓我有智慧，能以誠實和有根據的方式，向身邊對信仰有疑問的人分享：一位永活的創造主，才是生命存在的唯一合理解釋。奉主耶穌的名禱告，阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
