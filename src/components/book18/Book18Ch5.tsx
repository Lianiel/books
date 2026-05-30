import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Target, Search, HelpCircle, Check, Star } from 'lucide-react';

export default function Book18Ch5() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">第五章</h1>
        <h2 className="text-xl font-semibold text-gray-700">今天的撒但</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">
            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">撒但已被捆綁，但仍在工作</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                自從基督受死和復活之後，撒但已經被捆綁。上帝在《創世記》第3章15節中對於撒但的宣判已經執行。《啟示錄》第20章中說，撒但不再能夠迷惑列國。這意味著撒但不再能夠阻止福音在列國的傳播。耶穌基督的受死和復活已經把撒但捆綁起來。福音在列國傳播的重大阻礙——撒但對於列國的迷惑——已經消除了。
              </p>
              <p className="text-gray-700 leading-relaxed">
                但這並不是說撒但停止了在當今世界的工作。現在上帝仍然允許撒但繼續在當今世界工作。各種邪靈仍然繼續遵行撒但的命令，沒有得救的人也在侍奉撒但，就連上帝的選民，也一次又一次陷入撒但的網羅之中。在上帝旨意的允許下，撒但藉著當今邪惡的世界制度轄制非信徒（林後4：3-4；弗2：2；西1：13）。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">1. 當今的邪靈附體</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                如今偶爾有宣教士報告邪靈附體的事例，尤其是那些在異教地區傳福音的宣教士。隨著人們越來越回歸異教思想，轉向神秘宗教，我們將來聽到這樣的例子也不必感到驚奇。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                弗雷德里克·萊西總結說，當今時代的邪靈附體既有自願的，也有非自願的，既有永久性的，也有陣發性的。一般來說，或是人格受到壓抑，或是出現雙重人格。在這兩種情況中，魔鬼都使用受害人作為他的器皿，邪靈附體與精神錯亂有明顯的區別。邪靈附體之人的解脫往往是突然發生的，得醫治的人似乎不能回想起自己說過的話和做過的事（《逐出撒但》，Satan Cast Out，80，90，91頁）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                耶穌和使徒趕鬼與當今盛行的趕鬼有天壤之別，當今很多人的趕鬼源於異教的作法。萊西寫道：「異教的趕鬼只不過是撒但使人越來越深地處於他的權勢之下的詭計。巫師裡面更強大的鬼，當然能夠趕出被鬼附體的人裡面的鬼，但那個人並沒有得醫治。他並沒有被從仇敵的權勢之下救拔出來。被趕出去的鬼還可能回來」（103頁）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                現在的牧師和普通信徒都不應當充當趕鬼者的角色。輕率趕鬼會導致極大的危險。其中一個危險是有可能使人進入幻境，導致精神錯亂。萊西總結說，「在永久性的逐出邪靈之前，受害人必須先要有屬靈的重新佔領。」這種屬靈的重新佔領是藉著聖道和聖靈的工作產生的（路10：1及以下經文）。被基督的聖靈充滿，傳講基督的聖言，比撒但的一切權勢都更有能力（路4：36）。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">2. 撒但與當今基督徒</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                撒但及其邪靈仍然與上帝的子民處於持續的衝突之中，試探他們，企圖敗壞和毀滅他們的生命、信心和見證（林前5：5；約壹5：16）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                真正的基督徒永遠也不會否認撒但的存在。如果上帝對於信徒來說是真實的，那麼撒但對於信徒來說也是真實的。《創世記》第3章15節中所預言的女人的後裔與蛇的後裔之間的爭戰，一直在每一個真信徒的靈魂中繼續著。每個信徒都知道這個爭戰的存在。就像利百加腹中有雙子在彼此相爭，上帝的子民也經常感覺到兩種不同的後裔在自己裡面相爭，努力要迸發出來，直到他們在絕望中大喊：「若是這樣，我為什麼活著呢？」（創25：22）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在認識基督之前，我們不知道這些爭戰。只有在成為信徒之後，我們才曉得這個聖戰的存在。上帝的子民深刻地瞭解到撒但每日都企圖傷害他們。作為上帝的孩子，你在下面幾種情況下尤其容易受到傷害：
              </p>
              <div className="ml-4 space-y-3">
                <div className="flex gap-3">
                  <span className="text-red-600 font-bold flex-shrink-0">（1）</span>
                  <p className="text-gray-700">撒但把褻瀆的思想放進你的大腦裡，然後對你說，你如果有這樣的思想，就不可能是上帝的孩子。</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-red-600 font-bold flex-shrink-0">（2）</span>
                  <p className="text-gray-700">撒但使你置疑上帝之應許的真實性，讓你懷疑一直恩待你的上帝是否真的有憐憫。</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-red-600 font-bold flex-shrink-0">（3）</span>
                  <p className="text-gray-700">撒但企圖使你相信，你在救恩上無份，因為你只是在開始的時候有主，主沒有一直陪伴你。</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-red-600 font-bold flex-shrink-0">（4）</span>
                  <p className="text-gray-700">撒但與你辯論說，上帝的孩子沒有像你這樣的：信心如此軟弱、如此敗壞、如此剛硬不禱告、如此愚蠢虛妄。</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-red-600 font-bold flex-shrink-0">（5）</span>
                  <p className="text-gray-700">撒但作為控告者來到你面前，使你絕望，或者作為光明天使來到你面前，使你狂傲自大。</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-red-600 font-bold flex-shrink-0">（6）</span>
                  <p className="text-gray-700">撒但把世界以美麗的樣子呈現在你面前，企圖誘惑你回到屬世的習俗、友誼和虛榮中去。</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-red-600 font-bold flex-shrink-0">（7）</span>
                  <p className="text-gray-700">撒但壓抑你，使你沉迷於肉體的情欲、眼目的情欲和今生的驕傲之中。</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">3. 受傷戰士的盼望</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                受傷的戰士常常擔心自己會在抵擋撒但的爭戰中失敗。他們厭倦了爭戰，要退出戰場，結果卻發現自己沿著罪的斜坡滑向毀滅。有時，靈命上的貧困和軟弱威脅要勝過他們。那試探者緊隨其後，傷害他們的腳跟。受傷的戰士像大衛一樣呻吟，一邊祈求，一邊哭喊：「必有一日我死在掃羅手裡」（撒上27：1）。上帝之手似乎隱藏起來，地獄的邊緣卻似乎顯現出來。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                撒但是個說謊者，但可悲的是，他對信徒耳語的大部分譴責話都是真實的。良心譴責信徒。律法命令並咒詛信徒。上帝的公義沒有得到滿足。受傷的信徒不能用受傷的腳跟走路。他們如果沒有意識到自己不能幫助自己，就只能跌倒。他們必須向自己而死，宣判自己的死刑，承認上帝永遠拋棄他們是公義的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                然而，福音中令人驚異的是，儘管信徒自我定罪，上帝卻藉著女人的後裔——得勝的基督取得了勝利。正如《創世記》第3章15節告訴我們的：「女人的後裔（基督）要傷你的頭。」撒但對腳跟的傷害，對信徒而言確實很沉重，但不是致命的，因為上帝為了選民的益處，使撒但的一切努力都歸於無效。通過舍己降服，就能夠在基督裡得勝。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                基督藉著他贖罪之死傷了撒但的頭。當撒但在髑髏地傷了基督的腳跟時，基督傷了撒但的頭（創3：15）。正如《希伯來書》第2章14節所說：「特要藉著死敗壞那掌死權的，就是魔鬼」（參西2：13-15）。此外，基督在他勝利的復活中也傷了撒但的頭——撒但不能使得勝者基督一直在墳墓中，因為上帝自己的兒子不會朽壞。被高舉的基督手裡拿著死亡、陰間和墳墓的鑰匙。教會在基督裡面是安全的，因為在他裡面有確定的勝利。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                基督召集那些被撒但反復侵擾的人。他用自己堅強的臂膀保護信徒，對他們說：「親愛的羊，撒但也許會傷害你的腳跟，但我已經藉著我的受死和復活以及上帝的審判，為你而傷了撒但的頭。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">4. 兩條應對撒但的建議</h3>
              <div className="ml-4 space-y-4">
                <div className="border-l-4 border-green-300 pl-4">
                  <p className="font-semibold text-gray-800 mb-1">（1）逃往代求者耶穌基督那裡去</p>
                  <p className="text-gray-700 leading-relaxed">他是全能的辯護者，完美的安慰者，他應許在你的一切需要上幫助你。他是你惟一的盼望，惟一的堡壘。在基督裡面，撒但已經被擊敗。像撒但定你的罪那樣定自己的罪，但是然後帶著你的一切不配來到天父面前的辯護者那裡。</p>
                </div>
                <div className="border-l-4 border-green-300 pl-4">
                  <p className="font-semibold text-gray-800 mb-1">（2）用上帝的聖言和應許抵擋撒但</p>
                  <p className="text-gray-700 leading-relaxed">不要與撒但談條件或向撒但的誘惑讓步。司布真寫道：「在兩個惡之間，一個也不要選。要學會說『不。』這對你來說，比會讀拉丁文更有用。」要站立得穩。要用上帝的軍裝保護自己。向上帝展示他自己聖言中的話，以此來抵擋撒但。要記得撒但在鎖鏈的捆綁之中，而你屬於比撒但更有能力的基督。</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed italic">
                「要謹守，要警醒，盼望最後的結果。不要過於自信，也不要膽怯，而是小心警惕蛇的後裔……讓我們在上帝面前信心堅定，保持謙卑。讓我們提醒自己：生命短暫，試探也會轉瞬即逝。我們很快就會消逝，並且認識到『賜平安的上帝快要將撒但踐踏在你們腳下』（羅16：20）。」
              </p>
              <p className="text-right text-gray-500 text-sm mt-2">——周必克</p>
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
            <p className="text-gray-700 leading-relaxed"><span className="font-semibold">啟示錄20章「撒但被捆綁」的正確詮釋：</span>千禧年主義者常誤以為撒但現在完全無法行動，但聖經清楚顯示他現今仍「如同吼叫的獅子」（1Pet 5:8）。「捆綁」是特定意義的限制——撒但無法阻止福音傳遍全球各族萬民，無法攔截神揀選之人歸向基督。他仍可攻擊個人信徒，卻無法阻擋神救恩計畫的整體推進。現今是他被部分限制的時代，末日審判前他將有短暫釋放（啟20:7-10）。</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold">2</span>
            <p className="text-gray-700 leading-relaxed"><span className="font-semibold">撒但對個人信徒的七種具體攻擊：</span>（1）試探引人犯罪（Matt 4:1-11）；（2）控告使人陷入絕望（Rev 12:10）；（3）疑惑使人對神不信（Gen 3:1「神豈是說了嗎？」）；（4）迫害透過人或環境（Eph 6:12）；（5）纏擾使人靈命枯乾；（6）欺騙教導錯謬教義（2Cor 11:14）；（7）收割軟弱時機——在人疲憊、孤立、遭遇失敗時趁虛而入。認識這七種攻擊模式是防禦第一步。</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold">3</span>
            <p className="text-gray-700 leading-relaxed"><span className="font-semibold">兩個核心應對原則：</span>第一，逃向基督（flee to Christ）——不倚靠自己的意志力，而是立刻轉向那已得勝的主，依靠祂的寶血、祂的名、祂為我們的代禱（Heb 7:25, 1Jn 2:1-2）。第二，使用神的話（use the Word）——效法主耶穌在曠野「經上記著說」（Matt 4:4, 7, 10）的範式，以具體的聖經真理對抗撒但的每一個謊言和試探。這兩個原則缺一不可。</p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold">4</span>
            <p className="text-gray-700 leading-relaxed"><span className="font-semibold">羅馬書16:20的應許是爭戰的終極盼望：</span>「賜平安的神快要將撒但踐踏在你們腳下」——這節經文同時包含兩個確認：一是「賜平安的神」（撒但攻擊不改變神對我們的心意），二是「快要踐踏」（最終勝利確定且將臨）。這是創世記3:15「女人的後裔要傷你的頭」的新約應驗宣告，給所有在爭戰中疲憊的信徒一個確切的盼望錨點。</p>
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
              <h4 className="font-semibold text-gray-800 mb-2">「撒但被捆綁」的千禧年論含義</h4>
              <p className="text-gray-700 leading-relaxed">
                作者採用的是無千禧年（amillennial）或歷史前千禧年的觀點：撒但的「捆綁」（啟20：1-3）在基督第一次降臨時已經發生，意思是他不再能阻止福音傳到萬民。這解釋了為何使徒時代開始後，福音能跨越文化界限廣傳——這在舊約時代幾乎是不可能的。撒但被捆綁不意味著他無法活動，而是指他迷惑列國的特定能力受到了限制。不同千禧年論立場對「撒但被捆綁」有不同詮釋，但各立場都同意撒但目前仍活躍。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">撒但針對基督徒的七種攻擊模式</h4>
              <p className="text-gray-700 leading-relaxed">
                作者列出的七種攻擊揭示了撒但的心理戰術：他針對信徒的確信（1、2、3種）、自我認識（4種）、屬靈狀態（5種）、與世界的關係（6種）和肉體軟弱（7種）。值得注意的是，攻擊1-5都是認知性的——他試圖改變你對自己屬靈狀態的看法。這說明信徒的心智是最主要的屬靈戰場。保羅因此強調「更新你們的心」（羅12：2）和「抵擋撒但堅守信心」（彼前5：9）。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">用聖言抵擋撒但的實踐</h4>
              <p className="text-gray-700 leading-relaxed">
                作者引用司布真的建議「學會說不」，但更根本的方法是用聖經話語。路德的《上帝是我們堅固保障》中說「一句話就可以擊倒他」，指的就是上帝的話語。馬丁·路德本人在試探中的習慣是大聲說出：「我受洗了！我受洗了！」——用上帝的客觀承諾對抗撒但對其屬靈狀態的攻擊。這是具體、個人化地使用聖言應對特定試探的實例。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「受傷戰士」的真實性與盼望</h4>
              <p className="text-gray-700 leading-relaxed">
                作者對「受傷戰士」的描述——懷疑、掙扎、疲倦、覺得自己不配——是對信仰生命現實的誠實描繪。清教徒文學充滿了這種靈命掙扎的記錄，例如理查·巴克斯特（Richard Baxter）的《聖徒永恆的安息》和約翰·班揚的《天路歷程》中的「絕望泥沼」。這種誠實與膚淺基督教形成鮮明對比——後者暗示真正的信徒不應有這樣的掙扎。事實上，越是靈命真實的人，往往越能感受到這場爭戰的激烈。
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
              <p className="text-gray-700">作者列出了撒但攻擊基督徒的七種方式。其中哪一、兩種是你最常遭受的攻擊？你通常如何應對？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">作者說「在認識基督之前，我們不知道這些爭戰。只有在成為信徒之後，我們才曉得這個聖戰的存在。」這個描述符合你的信仰經歷嗎？信主後你感受到了什麼新的掙扎？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">撒但既「使人絕望」又「使人狂傲自大」——兩個看似相反的攻擊。你認為這兩種攻擊是如何在同一個人身上交替出現的？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">作者建議「逃往代求者耶穌基督那裡」和「用上帝的聖言抵擋撒但」。在你遇到最激烈的試探時，你實際上是怎麼做的？這兩個建議有多難實踐？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">「受傷的戰士」的描述——懷疑、疲倦、覺得不配——是否描述了你有時候的感受？你如何在這樣的狀態中仍然持守信仰？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">司布真說「在兩個惡之間，一個也不要選。要學會說不。」在你生命中，有哪些情況是你需要學習清楚地說「不」的？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 辨認並命名你的試探</h4>
              <p className="text-gray-700 mb-2">本週每天花10分鐘，對照本章的七種攻擊模式，記錄今天遭受了哪種攻擊：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>撒但今天放了什麼思想到我腦裡？</li>
                <li>我今天懷疑上帝的哪個應許或屬性？</li>
                <li>我今天有沒有被誘惑走回屬世的方式？</li>
                <li>我用什麼方式回應了這些攻擊？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 建立你的「屬靈武器庫」</h4>
              <p className="text-gray-700 mb-2">針對你最常遭受的1-2種撒但攻擊，找出對應的聖經真理：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>對「你不是上帝的孩子」：讀約1：12；羅8：15-16</li>
                <li>對「上帝不再關心你」：讀詩136；羅8：38-39</li>
                <li>對「你太壞了，上帝不能接受你」：讀路15；提前1：15</li>
                <li>把這些經文抄寫，放在你每天容易看到的地方</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">⏰ 每日「逃往基督」的操練</h4>
              <p className="text-gray-700 mb-2">每天早晨選一個時刻（起床後、早餐前），做三分鐘的「逃往代求者」禱告：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>承認今天面對的軟弱和可能的試探</li>
                <li>宣告基督是你的辯護者和保護者</li>
                <li>領受上帝的接納——不是因為自己的配得，而是因為基督的功勞</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">🙏 本章禱告</h4>
              <p className="text-gray-700 leading-relaxed italic">
                「主耶穌，我承認我是一個受傷的戰士。我有時懷疑，有時疲倦，有時被撒但的謊言迷惑。但感謝祢是我的辯護者，是站在天父右邊為我代求的那一位。撒但說我不配，而我承認那是真的——但我也宣告：我有基督的公義，這是撒但奪不走的。求祢讓我學會用祢的話語回應每一個謊言。我要謹守警醒，靠祢的力量站立。奉耶穌的名祈求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
