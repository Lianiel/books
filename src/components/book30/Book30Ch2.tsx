import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Compass, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book30Ch2() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">第二章</h1>
        <h2 className="text-xl font-semibold text-gray-700">混亂呢？還是秩序？</h2>
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
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">一、物質、能、與自然律之來源</h3>
              <p className="text-gray-700 leading-relaxed mb-3">創造論者問道：「是誰創造了宇宙？」進化論者往往反問：「那又是誰造了上帝呢？」然而，問這樣問題者也必須面對同樣的問題。若進化論者寧願不信上帝，他仍須相信某種自發的第一因。他必須假定物質從無而有，或亙古以來便以原始狀態存在。不管那一種情形，物質的本身就成了它自己存在的第一因。創造論者也可以問道：「但是，誰造了物質呢？」</p>
              <p className="text-gray-700 leading-relaxed mb-3">所以不論怎樣，一個人必須相信──相信恒存全能的物質或恒存全能創造的上帝。我們個人可以選擇何者較合理，但同時卻要知道或選此或選彼都不完全是科學的決定。</p>
              <p className="text-gray-700 leading-relaxed mb-3">創造論者運用科學定律──因果關係 (Cause-and-effect)──來支持自己的決定。這定律是每一科學部門所普遍接受的。那就是說，一切現象都是由因所產生的果。沒有一個果在量方面較因「大」；在質方面較因「高」。果可低於因而不可超於因。</p>
              <p className="text-gray-700 leading-relaxed mb-3">用因果的推理，相信上帝的創造論者看到下列各點：</p>
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-blue-800 mb-3">由因果定律推論「第一因」的屬性</h4>
                <div className="grid grid-cols-1 gap-1 text-gray-700 text-sm">
                  {[
                    ['無限之空間的〔第一因〕', '必是無限的'],
                    ['無極之時的〔第一因〕', '必是永恒的'],
                    ['無窮之能的〔第一因〕', '必是無所不能的'],
                    ['萬物普遍相關的〔第一因〕', '必是無所不在的'],
                    ['無限複雜的〔第一因〕', '必是無所不知的'],
                    ['道德價值的〔第一因〕', '必是有道德的'],
                    ['心靈價值的〔第一因〕', '必是屬靈的'],
                    ['人類責任感的〔第一因〕', '必是有自由意志的'],
                    ['人類誠信的〔第一因〕', '必是信實的'],
                    ['人類愛情的〔第一因〕', '必是有愛心的'],
                    ['生命的〔第一因〕', '必是永活的'],
                  ].map(([cause, effect], i) => (
                    <div key={i} className="flex items-center gap-2 py-1 border-b border-blue-100 last:border-0">
                      <span className="text-blue-600 flex-shrink-0">▸</span>
                      <span className="flex-1">{cause}</span>
                      <span className="text-blue-800 font-medium">{effect}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">我們從因果定律而作結論說：萬物的第一因必是無限的、永恒的、無所不能的、無所不在的、無所不知的、有道德的、屬靈的、有自由意志的、有愛心的一位永活者。這些形容詞可以用來描寫物質麼？原始質粒的混亂運動能產生理智的思想，或惰性的分子能產生心靈的崇拜麼？說物質與它天賦的性質可作宇宙及萬物的終極解釋，等於說因果定律只能應用於目前，不適用於過去。</p>
              <p className="text-gray-700 leading-relaxed mb-4">加州科學教育顧問組 (California's Advisory Committee on Science Education)（註5）對主要「科學觀念體系」所下的定義都支持創造模式勝於進化模式。茲將這些重要的觀念一一列出，並加以簡短的討論：</p>

              <div className="space-y-3 mb-4">
                {[
                  {
                    label: '(一)因果關係',
                    content: '這原則方才已討論過。一位無所不能的創造主可以作為宇宙中一切可觀察到的果的第一因；而進化則算不上是個因，宇宙本身不能作為自己的因。',
                  },
                  {
                    label: '(二)相對性 (Relativity)',
                    content: '愛因斯坦強調說，世界上一切有關大小、位置、時間、運動等的比較標準是相對而非絕對的。這等於說宇宙的本身不可能是絕對的，所以它的存在也非獨立或絕對的。既然宇宙不能自我產生，它的存在必由於一位外來、無所不能的創造主，祂才是絕對的標準。',
                  },
                  {
                    label: '(三)運動 (Motion)',
                    content: '宇宙不是靜止的，在時空當中到處有運轉的現象與作用。這表示無所不在的能繼續不息地在產生運動，甚至連組成物質的質粒也在不休止地運動。這事實證明能與運動必有一個無所不能之「因」，也證明創造在過去已經完成，此與創造模式吻合。這也說明諸運動有其層次 (Hierarchy of movements)，一類的運動或動力定律不能進化為另一類。',
                  },
                  {
                    label: '(四)能量不滅 (Energy conservation)',
                    content: '能是基本的物理實質，可在許多互變的狀態下存在。在時空之中所存在的一切都是能，所「發生」的一切都是能的變換。能量不滅定律──能可改變形態而不能創造也不能消滅──是科學中最重要且最確實的定律。「這定律是科學家對宇宙所能作的最有力最基本的歸納。」（註6）任何護持性的原則，特別是能之護持，無可諱言地證實創造模式所作的預測。創造已在過去完成，目前在保護維持中。',
                  },
                  {
                    label: '(五)質與能的互換 (Mass-energy equivalence)',
                    content: '物質與能可以互相變換是二十世紀科學的最大發現之一，所以物質可以視為能之一態。物質與能的總量在核子反應中不變。除了此種反應之外，物質的本身是不滅的，正與創造模式相合。',
                  },
                  {
                    label: '(六)分類與秩序 (Classification and order)',
                    content: '各部門的自然現象可編排為有秩序的分類系統。這事實（例如化學元素的週期表，林奈氏的生物學分類系統，星的分類等）是創造論的證據。因為若一切都真正在不斷的進化中，分類便不可能。例如，在生物學的分類上便不可能找到「貓」進化完成與「狗」進化開始之間的界線。構造上的相似並不能認為是進化上同源的證據，另一較佳的解釋是它們都由同一「設計者」所創造，相似的構造為着相似的功用，相異的構造為着相異的功用。',
                  },
                  {
                    label: '(七)作用 (Processes)',
                    content: '宇宙中每一單位的物質與其他單位的物質或能有多方面的交互作用。宇宙是動態的，力是相互影響的，作用在進行，事件不斷發生，能量在耗去，功 (Work) 在完成。這些活動都說出宇宙中的一切有其秩序、有意義、有目的，並非只是偶然的顛簸碰撞，否則科學的探究便不足談。而「意義」與「目的」正是創造論所預測的。',
                  },
                  {
                    label: '(八)力與力場 (Forces and fields)',
                    content: '自然界中的相互作用基於三種力及其有關的力場，即電磁力、重力、與核子的力。這三種力的作用顯然自宇宙開始至今相同，沒有證據說它們曾從以往進化到目前的形式。力場的作用是藉波的運動 (Wave movement)，在自由空間中傳佈（如電磁波，重力波等），其速度為每秒三億公尺，與光速相同。這波動現象實在是個奧秘，因為它在沒有一物的自由空間──真空──中發生。在這波動的作用中，振動的是什麼呢？誰也不能答覆這問題。這難題對進化論者更是加倍困難。因為在真空中沒有一物可以進化，那麼波動現象怎可進化出來呢？',
                  },
                  {
                    label: '(九)環境的互賴性 (Environmental interdependence)',
                    content: '在自然界中，不同系統正常地都以巧妙的方式與環境配合。這個事實至少給我們看出創造者之設計。在生物界中，天擇是護持性的作用，將闖入原已適應系統中不正常的個體淘汰掉，因而維持自然界的原狀。在另一方面，若環境本身改變，則生物未被消滅之前，他們的遺傳基因中常有足夠的變異能力使之與新的環境適應。環境配合着天擇成為護持所造的物類與維持自然界平衡的一個強有力的控制裝置（註7）。這恰是創造模式所預測的。',
                  },
                  {
                    label: '(十)能之衰退 (Energy decay)',
                    content: '最後，一個值得注意的事實是，一切的作用都涉及能的改變。這些改變常是朝「下坡」進行，其結果是，可供作功 (Work) 的能量越來越少。雖然能量不滅定律（熱力學第一定律）說，能是無法消滅的，但這個能量衰退律（熱力學第二定律）卻告訴我們能的實用性是繼續不息地在降低。一位科學家說：「第二定律告訴我們，在宇宙的大遊戲中，我們不但沒有得賺，而且沒法不賠本。」（註8）',
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-indigo-50 rounded-lg p-4">
                    <h4 className="font-semibold text-indigo-800 mb-2">{item.label}</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.content}</p>
                  </div>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-3">這衰退律對起源問題有很重要的意義，所以我們在第四章中會再更詳盡地討論。在這裏我們只再說，進化模式必須尋索續加的假設去解釋，而創造模式可以直接預測到這點，那就是：一個始初完美的系統其改變的方向必是走向不完美！</p>
              <div className="border-l-4 border-blue-400 pl-4 bg-blue-50 py-3 pr-3 rounded-r mb-4">
                <p className="text-sm font-semibold text-blue-700 mb-1">世界最佳數學物理家 (P.A.M. Dirac) 的評語（註9）</p>
                <p className="text-gray-700 text-sm leading-relaxed">「大自然的一個基本特徵是：基本的物理定律乃由極強極美的數字理論來描述的，需要高深的數字修養方可領會。你也許會希奇：大自然的結構為何會如此？答案是：以我們目前的知識來看，大自然的結構就是如此，我們只有接受這事實。對這情況，一個人或可說上帝是一位最高級的數學家，祂用很高深的數學創建宇宙。我們微少的數學知識使我們只瞭解宇宙的一部份，當我們發展一層又高一層的數學時，我們可望對宇宙有更好的認識。」</p>
              </div>
              <p className="text-gray-700 leading-relaxed">只有無所不知、無所不能、偉大的「第一因」才可以對現代科學所啟迪的物質世界作一說明。這事實當然完全支持創造模式。</p>
            </div>

            {/* 二 */}
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">二、宇宙的起源</h3>
              <p className="text-gray-700 leading-relaxed mb-3">在這一節裏，我們要討論宇宙衆星（無數的星球與銀河系）的來源。因為星羣本身各不相同，其聚集的形狀也很複雜，故容易以各種不同之進化模式來加以解釋。因為天體的各異多樣，不難將它們隨意的編成一個系列，並且假定這個系列便代表實際的進化過程。</p>
              <p className="text-gray-700 leading-relaxed mb-3">不管這些假設看起來多合理，顯然地，它們沒有方法可用實驗求證。誰能設計一個儀器來觀察星球的進化呢？雖然一個人可以猜想一個星球如何進化為另一個星球，或質粒怎樣聚積成為星球，但重要的是，事實上從未有人看過這些。從有人開始觀察星球到現在，就人所能見到的，星球一直是一樣的。</p>
              <p className="text-gray-700 leading-relaxed mb-4">根據創造論，在大自然中，一切主要的系統和物類──包括星球與銀河系──在最起初便創造成功。各有特殊的構造，以達各特殊的目的。所以創造論者由創造模式推測星球與銀河系不會改變，更不會有從低層次的星球進化為高層次星球的情況。事實告訴我們，它們不曾改變，所以完全符合創造模式的預測。</p>

              <p className="text-gray-700 leading-relaxed mb-3">在這裏，可很適時地注意到熱力學第一及第二定律與宇宙起源的關係。這兩條定律是已被科學所驗過的（如果有證驗這回事的話）。它們受過實驗室的求證和量度；也在極大或極小的體系中，被證實過千萬次。現在沒有一個科學家會懷疑它們在人所知的時空之中之正確性。所以這兩個定律對宇宙觀具深刻的意義：</p>

              <div className="space-y-3 mb-4">
                {[
                  {
                    label: '(一)第一定律（能量不滅定律）',
                    content: '說，現在沒有〔創造〕也沒有消滅。所以它很確定地說明宇宙不能創造自己，在目前所知的自然律中，沒有一點可以用來說明宇宙本身的來源。',
                  },
                  {
                    label: '(二)第二定律（能量衰退律）',
                    content: '說，每一系統若聽其自然發展，必由秩序趨於混亂，能的可用度越來越低，最後達到完全混亂、再也不能作功的程度。所以當宇宙的能都衰退為混亂的等溫低熱能狀態，只剩下分子的機遇性運動時，便是宇宙死於「熱死」(Heat death) 之期。',
                  },
                  {
                    label: '(三)宇宙至今尚未到達「熱死」狀態',
                    content: '這個事實，說明了宇宙不可能有無限的過去；若照目前的作用繼續下去，其死期也可預期；因此，時間不可能是永恒的。我們現在的宇宙是時間、物質與空間的「連續體」(Continuum)，若其中之一有起始，則其他二者也必在同時發生。',
                  },
                  {
                    label: '(四)創造的唯一答案',
                    content: '第二定律說明宇宙必有一個開始；第一定律則說宇宙不可能自己開始。要滿足這兩個定律，只有一個答案：這宇宙是由一個超越這一切的「因」所創造。',
                  },
                  {
                    label: '(五)「因」在時空之外',
                    content: '在目前可以觀察到的空間-物質-時間架構 (Space-mass-time framework) 中，沒有一個適宜的「因」。所以這個「因」如果是進化作用，必定是在空間之外，時間之前（果若如此，則已超乎科學範圍之外）；否則，這個因必定是創造作用，是空間、物質與時間同時一起被創造的作用。',
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-1">{item.label}</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.content}</p>
                  </div>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-3">主張物質在遙遠無法觀察之空間中進化為目前構造的叫做「恆態論」(Steady-state theory)。為着抵銷普遍衰退的現象，這理論也假設新的物質（可能為氫氣），在太空的某處繼續不息地由虛無之中進化出來。主張物質在遙遠無法觀察的時間中進化為目前構造的叫做「大爆炸論」(Big-bang theory)。這理論說，原始的某種爆炸，將能變成了物質；這個大爆炸可能由於以前重力濃縮成為極緊密的狀態而致。</p>
              <p className="text-gray-700 leading-relaxed mb-3">察其定義，不管「大爆炸論」或「恆態論」，很明顯地，兩者都沒有觀察上的基礎。事實上它們與兩個熱力學定律相抵觸，所以它們只是哲學上的揣測，而不是科學。這兩個理論乃是續加的假設，用來規避進化模式本身所含的矛盾。另一方面，創造模式，如前所述，實際預測到這兩個熱力學定律。空間、物質與時間是由一位無所不能、無所不在、永恒的創造主特別創造，乃是由科學中這兩個最確定且最普遍的定律所導至的惟一合理的結論。</p>

              <p className="text-gray-700 leading-relaxed mb-3">對於任何解釋星球與銀河系來源的進化模式來說，都有一個尚未解決的重要問題，即在宇宙中到處相同的質粒、元素與分子形成的問題。McCrea 氏說：「在一八七五年，Maxwell 氏寫道：『在太空中，我們藉着星光……測出星球的所在，它們彼此間的距離如此遙遠，以至物質不可能自一星球傳遞到另一個。……然而藉着這星光，我們知道每一星球都是由與我們地球相同的分子所構成！……沒有一個進化的理論可以說明這些分子的相似。……另一方面，同一種類的每一分子皆與其他的分子完全相同，這表現出……它具有被造之物的基本特性，也否定了它們是自存永存的想法。』……就我們所知，Maxwell 氏所言各點，在今天依舊正確，所有的電子到處都是一樣，一切的質子也相同，餘可類推。我們該尋求一個更好的理論來告訴我們為什麼會如此。」（註12）</p>
              <p className="text-gray-700 leading-relaxed mb-3">創造模式當然可以告訴我們為什麼會如此。創造主創造了整個的字宙；祂創造的是一元的宇宙 (Universe)，而非多元的宇宙 (Multi-verse)。各類的物質，一如各類的生物，其相似的構造乃為相似的功用而造，相異的構造乃為相異的功用而造。</p>
              <div className="border-l-4 border-indigo-400 pl-4 bg-indigo-50 py-3 pr-3 rounded-r mb-3">
                <p className="text-sm font-semibold text-indigo-700 mb-1">Asimov 氏引人深思的話（註13）</p>
                <p className="text-gray-700 text-sm leading-relaxed">「宇宙的物質從那裏來的呢？若零等於一加負一〔0＝(＋1)＋(－1)〕，倒不如說這個零可以化為正一與負一。或許在無限的虛無之中，同體積的『正能團』(Globs of positive energy) 與『負能團』一直在成對的產生，經過進化的改變之後，又再度合併而消失。我們正活在這樣的一個能團中，活在虛無與虛無之間的這段時間內，卻在摸摸這事的究竟。」</p>
              </div>
              <p className="text-gray-700 leading-relaxed">為了避免進化論者提出反駁說，假定一位創造主也無濟於事（他們會說，又是誰造上帝呢？）但我們要提醒他們說，創造模式實際預測到熱力學定律、自然律的不變性、宇宙的合一性、以及人的人格及智慧的存在。這一切對進化模式而言都是嚴重的難題。</p>
            </div>

            {/* 三 */}
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">三、太陽系的起源</h3>
              <p className="text-gray-700 leading-relaxed mb-3">中小學教科書裏臆測地球與太陽系的來源，通常用許多的篇幅甚至過於對宇宙來源的臆測。他們很少誠實地對年輕的讀者承認這些是揣測（如旋轉的星雲 Rotating nebulas，聚積的微星 Accumulating planetesimals，潮式的拉曳 Tidal pluckings，起伏的灰塵雲 Turbulent dust clouds 等），沒有一個建立在科學的證據之上！每一個臆測雖會風行一時，但很快便被其他科學家所主張的另一些理論所推翻。</p>
              <p className="text-gray-700 leading-relaxed mb-3">就我們所知，太陽系在宇宙中是很特殊的。星的數目雖然不計其數，但並不能說其中某些必有繞其而行的行星。進化論的天文學家們猜想很多星星是有行星的，但惟一令他們如此相信的理由便是所謂的進化統計學。這是說，他們想若是太陽可由自然作用進化出一個行星系，那末，某些其它星球也必可進化出同樣的行星系來。這樣的邏輯近似強辯。我們的太陽系是我們惟一一點知識的太陽系，我們不能只憑這惟一的資料來作統計的分析。天文學家既沒有在太陽系之外用望遠鏡看見過其他的行星，又沒有真正的證據證明它們的存在，所以我們的太陽系來源的問題，只能由其本身的事實來定斷。</p>
              <p className="text-gray-700 leading-relaxed mb-4">這問題至今仍無答案。雖然月球登陸與各種太空探秘耗費數以億計的美元，許多科學家也曾希望這些研究會顯示太陽系是如何進化成的，以及找出生命在地球之外的其它行星上進化出來的證據。雖然太空計畫有許多有價值的成果，上述的希望卻未達到。不但找不到生命曾在太陽系的它處存在過的證明，而且新的資料使得以前一切關於太陽系進化的理論都必須被放棄。</p>

              <p className="text-gray-700 leading-relaxed mb-3">創造論者根據創造模式當然早已預測到這些。下面便是根據創造模式所作的一些確切的預測：</p>
              <div className="bg-green-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-green-800 mb-3">創造模式對太陽系的五項預測（均已應驗）</h4>
                <ol className="space-y-2 text-gray-700 text-sm">
                  <li className="flex gap-2"><span className="text-green-700 font-bold flex-shrink-0">(一)</span><span>既然地球、月球，及其他行星都是為着特殊的目的而創造的，所以每一個都有它特殊的結構。它們不會有完全相同的成份與構造，好像是從同一來源同時進化出來的那樣。</span></li>
                  <li className="flex gap-2"><span className="text-green-700 font-bold flex-shrink-0">(二)</span><span>惟有地球含有水份，能維持我們所熟知的生命。</span></li>
                  <li className="flex gap-2"><span className="text-green-700 font-bold flex-shrink-0">(三)</span><span>惟有地球含有空氣，能維持我們所熟知的生命。</span></li>
                  <li className="flex gap-2"><span className="text-green-700 font-bold flex-shrink-0">(四)</span><span>除地球外，太陽系的它處找不到過去或現在有生命的證據。</span></li>
                  <li className="flex gap-2"><span className="text-green-700 font-bold flex-shrink-0">(五)</span><span>在地球及其他行星上，可發現衰敗 (Decay) 與災難 (Catastrophism) 的證據，卻無由簡入繁、由混亂趨向秩序的進化證據。</span></li>
                </ol>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">這一些預測卻很清楚地由月球登陸及火星、水星、金星的探察而證實了。在這些行星中，沒有一個含有可測度的液態水份 (Liquid water) 或含氧的大氣層，這兩者乃是我們所熟知的生命所不可缺的。同樣，月球及火星表面的照片已經見到很多。不論它們起初的形態如何，很清楚地顯示出它們過去曾有衰退，甚至是劇變的跡象。小遊星的碎塊，流星，破裂的隕石及衰退的慧星 (Decaying comet) 都一再為劇變與衰退作證。在太陽系中，行星的本身也好，其上的化學與物理的複雜系統也好，到處都沒有由簡趨繁的現象。</p>
              <p className="text-gray-700 leading-relaxed mb-3">最後，月球登陸使人可以研究一個地球以外天體的構造與成份。我們已有足夠的資料可以確定地球與月球的構造是極不相同的。所以二者不可能由同一天體的「祖先」進化而來。Bishop 氏說：「月球上岩石的化學成份與地球上的岩石大不相同，這使許多科學家感到驚奇。這個不同意味着月球乃在相異的情況下形成的。……所以今後關於行星來源的任何理論，必須考慮到地球與月球源出不同。」（註14）這是極重要的科學發現，應該在教室中加以強調。即月球與地球有不同的構造，所以該有不同的來源！</p>
              <div className="bg-red-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-red-800 mb-3">以進化論解釋太陽系的四大謬誤</h4>
                <ol className="space-y-2 text-gray-700 text-sm">
                  <li className="flex gap-2"><span className="text-red-600 font-bold flex-shrink-0">(一)</span><span>太陽系百分之九十八的角動量 (Angular momentum) 集中在行星中，而百分之九十九點八的質量卻集中在太陽裏。</span></li>
                  <li className="flex gap-2"><span className="text-red-600 font-bold flex-shrink-0">(二)</span><span>水星、冥王星以及小遊星、流星與慧星的軌道與太陽的黃道平面 (Ecliptic) 呈極度傾斜。</span></li>
                  <li className="flex gap-2"><span className="text-red-600 font-bold flex-shrink-0">(三)</span><span>天王星與金星逆向的旋轉 (Retrograde axial rotation)。</span></li>
                  <li className="flex gap-2"><span className="text-red-600 font-bold flex-shrink-0">(四)</span><span>行星的衛星中有三分之一的衛星其軌道與各行星的旋轉方向是相逆的。</span></li>
                </ol>
              </div>
              <p className="text-gray-700 leading-relaxed">事實已證明，用任何進化論的理論都不能合理的解釋這些以及其它的現象。所以許多天文學家已坦白承認沒有一個進化理論令人滿意，而月球構造的新資料必然是最致命的一擊。我們可以作一很合理的結論，即創造論是到目前為止唯一對太陽系的奇妙構造能提供滿意解釋的模式。不但創造模式的各預測都能站得住腳，如上所述；並且太陽或其行星沒有一方面不能簡單的、直接的用原始特別創造後經劇變衰敗而解釋。</p>
            </div>

            {/* 四 */}
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">四、創造的目的</h3>
              <p className="text-gray-700 leading-relaxed mb-3">地球有其特殊的水界 (Hydrosphere)、空氣 (Atmosphere)、及地殼 (Lithosphere)，就一切實際的證據而言，是宇宙中惟一可以維持像人這樣高級生物的星球。這當然恰是創造模式所預料的，地球乃是被特別創造作為人的家鄉的。</p>
              <p className="text-gray-700 leading-relaxed mb-3">用進化模式來解釋地球的歷史，必須先假定在過去不同的時代，地球的構造曾有過改變，由於環境逐漸進化後來才有生命的進化。但這是毫無證據的。以後我們還要談到，不同類型的岩石在各地質時代中皆可找到，所以說地球岩石的形成，在以往不同時代中曾有過改變是沒有證據的。</p>
              <p className="text-gray-700 leading-relaxed mb-3">不論探究物質或自然律的來源，或星球與銀河系、太陽系或地球的來源，我們已經看到創造模式符合一切觀察而得的事實遠較進化模式為佳。沒有科學上的理由可以反對整個宇宙──無數個從原子到銀河系的不同系統──是藉特殊創造的方式同時造成的觀念。</p>
              <p className="text-gray-700 leading-relaxed mb-3">對創造論的反對不是科學上的反對，乃是哲學上的反對。例如，若創造論者舉出在許多類型的星球中並沒有一個進化為另一個的證據；進化論者便會反駁說在這許多類型的星球中也找不到證據證明其創造的目的。然而，目的這個問題，不算是科學上的問題，至少按平常所謂的「科學」來講，它不是。</p>
              <p className="text-gray-700 leading-relaxed mb-3">創造模式很明確地包括目的的觀念。創造主是有目的的，在祂設計並創造這個宇宙時，其質粒與分子、定律與原則、星球與銀河系、植物與動物、以及最後所造的人類，都不是反覆無常、毫無目的的。我們可以根據那個模式最符合所觀察到的事實來對進化論與創造論作一科學上的選擇。但是，一旦選擇了模式，解釋這些事實與它們相互關係的立場也就迥然不同。進化論的解釋必須基於混亂且多變的從產生質粒一直到人的一連串純自然的進化過程；創造論的解釋則基於一位創造主的原始設計以及祂用特殊創造完成這計劃，祂所造的一切，在構造和性能上均最有效地完成其被造的目的。</p>
              <p className="text-gray-700 leading-relaxed mb-3">進化與創造的衝突因此不可避免地終將牽涉到神學。我們不論如何客觀地企圖以兩個科學模式的觀念比較生物學或地質學的實際數據，我們終將面對一個非科學的選擇：是以進化的觀念解釋事物呢，還是以有目的的創造來解釋？</p>
              <p className="text-gray-700 leading-relaxed mb-3">許多進化論派的科學家當講解來源問題時，有意避開目的論的事實（註15），並不證明目的論的解釋是不恰當的。實則，若是創造模式實際上是一個更能圓滿解釋與預測科學數據的體系，正如我們在這本書中企圖說明的，則目的的這個問題是十分重要的。創造論者不以假設的進化祖先去勉強解答，而致力於探求目的，正如牛頓、凱伯勒 (Kepler) 及過去許多大科學家所說，乃「追隨上帝的思想」。</p>
              <p className="text-gray-700 leading-relaxed mb-3">我們承認在今日的求知階段很難瞭解創造主為什麼創造波霎 (Pulsars)、螺旋形的星雲、恐龍或臭蟲，但我們可以作合理的揣測。這些揣測並不比根據臆想的進化方式來解釋波霎 (Pulsars)、螺旋形的星雲、恐龍或臭蟲的揣測更不科學。至少，一位全能且有目的之創造主的觀念，足以提供這些及其他一切宇宙間現象之產生原因，而混亂的物質則否。在創造論者的觀念中，人是在萬物中最高等的，所以其他被造的系統，就其目的而言，必在某方面向人適應。</p>
              <div className="border-l-4 border-blue-400 pl-4 bg-blue-50 py-3 pr-3 rounded-r mb-4">
                <p className="text-sm font-semibold text-blue-700 mb-1">Asimov 氏說（註16）</p>
                <p className="text-gray-700 text-sm leading-relaxed">「人的三磅重腦子，據我們所知，是宇宙間物質最複雜而有秩序的組織。」</p>
              </div>
              <p className="text-gray-700 leading-relaxed">創造論者相信只有全能的創造主方能設計並創造人的頭腦！當然他不能以科學證明這事實，但進化論者也不能證明混亂的質粒能自相組織成為人腦，或成為混亂質粒之外的任何東西。創造論者的解釋不但與因果律、熱力學定律、或然律相合，亦帶給人生存的真正意義與永恒目的的信念。這信念在一個兒童或青年的生命發展中是價值連城的。</p>
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
                '因果定律是科學界普遍接受的原則：「果不能大於因」。用因果推理，宇宙的「第一因」必是無限、永恒、全能、全知、有道德、屬靈、有自由意志、有愛心且永活的——這些屬性正是上帝的描述，而非物質所能有的。',
                '熱力學第一定律（能量不滅）說宇宙不能自我創造；第二定律（能量衰退）說宇宙必有起點、終向「熱死」。兩律合論得出唯一結論：宇宙必由超越時空的「因」所創造，這是創造模式的預測，也是科學定律的直接蘊含。',
                '恆態論與大爆炸論都缺乏觀察基礎且與熱力學定律相抵觸，只是哲學揣測。創造模式反而能直接解釋這兩條最確定的自然定律，也能解釋 Maxwell 所發現的「宇宙各處電子、質子完全相同」這一被造之物的基本特性。',
                '太陽系的五項創造論預測（各星球成份不同、地球獨有水與空氣、他處無生命、衰敗而非進化的跡象）已全部由月球登陸與行星探察所證實。月球岩石與地球岩石成份迥異，更宣告「它們不可能由同一祖先進化而來」。',
                '進化論無法解釋太陽系的四大謎題：98% 角動量集中在行星而 99.8% 質量在太陽；多顆行星軌道與黃道面高度傾斜；天王星與金星逆向自轉；三分之一衛星逆行。許多天文學家已坦承無令人滿意的進化解釋。',
                '創造論的解釋帶給人生命的意義與永恒目的——地球是為人特別創造的家鄉，人的三磅腦子是宇宙最複雜有秩序的組織，這信念對一個兒童或青年的生命發展價值連城。',
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
              <h4 className="font-semibold text-indigo-700 mb-2">熱力學第二定律：科學史上最確定的定律如何指向創造</h4>
              <p className="text-gray-700 leading-relaxed">熱力學第二定律（熵增原理）是物理學中被驗證次數最多、在各種尺度下都成立的定律之一。它告訴我們：封閉系統的「混亂程度」（熵）只會增加，永遠不會自發地減少。這等於說宇宙若沒有外部干預，只會從有序走向無序。問題在於：若宇宙一直存在，它早就達到最大熵（熱死）了；既然尚未到達，說明宇宙不可能無限古老，必有一個起點。而且宇宙的起點還必須是一個「高度有序」的初始狀態——這個初始的秩序從哪裏來？創造論者的答案是：一位有智慧、有目的的創造主在起初就賦予宇宙完美的秩序；這個原始秩序此後才逐漸衰退，正與聖經的描述吻合。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「精細調校」(Fine-tuning)：宇宙的物理常數與創造目的</h4>
              <p className="text-gray-700 leading-relaxed">本章揭示地球是宇宙中惟一適合高級生命的星球，這與現代科學的「精細調校」(Fine-tuning of the universe) 論證相呼應。物理學家發現，宇宙的基本常數（如重力常數、電磁力強度、核子力的比例）若有絲毫微小的差異，恆星將無法形成、碳元素將無法存在、生命將完全不可能。這種「剛剛好」的精確性，對進化論而言是個巨大謎團：為何宇宙的參數如此精確地適合生命？創造論者的回答是：創造主有目的地設定了這些參數，「使人居住」正是宇宙被創造的目的之一（參以賽亞書 45:18）。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">Maxwell 的分子均一性：被遺忘的創造論證據</h4>
              <p className="text-gray-700 leading-relaxed">詹姆斯·克拉克·馬克士威 (James Clerk Maxwell, 1831-1879) 是電磁學方程式的創立者，被視為繼牛頓之後最偉大的物理學家之一。他在 1875 年就洞察到一個令人深思的事實：無論從宇宙何處來的星光分析，每一種原子（如氫、碳、氧）都與地球上的完全相同。這在無限廣闊、各自進化的宇宙中幾乎是不可能的事——若物質在各星系獨立演化，為何最終產物完全一致？Maxwell 本人明言這是「被造之物的基本特性」。一個創造主以相同的設計創造了同一個宇宙 (Universe)，這是最自然的解釋。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">太陽系角動量謎題：進化論無法逾越的物理障礙</h4>
              <p className="text-gray-700 leading-relaxed">角動量守恆定律是牛頓力學的基本原理。太陽系的角動量分佈極不尋常：太陽雖佔太陽系 99.8% 的質量，卻只擁有約 2% 的角動量；而行星雖僅佔 0.2% 的質量，卻擁有約 98% 的角動量。任何試圖從原始星雲「進化」出太陽系的理論，都必須解釋這個角動量的極端不均衡分佈——因為在物理上，若太陽與行星從同一旋轉星雲凝縮而成，角動量應按質量比例分配。幾十年來，科學家提出的各種機制（如磁制動、潮汐效應）都被後來的研究所推翻。這個謎題，恰好符合創造論的預測：地球與太陽並非從同一物質雲進化而來，而是各有特殊創造的目的與結構。</p>
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
              '書中說進化論者必須「相信某種自發的第一因」，因此無論創造論或進化論都預設了一個「第一因」。這個觀察對你有什麼衝擊？你過去是否曾以為進化論完全不需要任何信心？',
              '由因果定律推論出的「第一因」，必須同時是無限、永恒、全能、全知、有道德、屬靈、有愛心且永活的——這幾乎就是基督教對上帝的描述。你覺得這個純粹從科學邏輯出發的推論有說服力嗎？哪一點最觸動你？',
              '熱力學第二定律告訴我們宇宙在走向「熱死」，也就是說宇宙是有限的、在衰退的。這個科學事實如何影響你對人生意義的思考？若宇宙終將消逝，你如何找到永恒的盼望？',
              '月球登陸原本是進化論者寄望能找到「太陽系進化證據」的大計畫，結果卻證實了創造模式的預測（月球與地球成份迥異、他處無生命）。這對你認識科學探索的「中立性」有何啟發？',
              '書中指出進化論對太陽系有四大無法解釋的謎題（角動量分佈、逆行軌道、逆向自轉、逆行衛星）。得知這些謎題之前，你曾以為太陽系的進化起源是已定的科學事實嗎？這如何改變你的看法？',
              '「創造論者不以假設的進化祖先去勉強解答，而致力於探求目的，乃『追隨上帝的思想』」——這句話如何描述你想要擁有的科學與信仰的關係？在你的日常生活或工作中，這個態度具體是什麼樣子？',
              'Asimov 說人的三磅腦子是「宇宙間物質最複雜而有秩序的組織」，創造論者認為只有全能創造主才能設計它。站在這個觀點上，你如何看待自己的生命價值與尊嚴？這如何影響你對待他人的方式？',
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
              <h4 className="font-semibold text-green-700 mb-2">🔭 用「因果定律」重新觀察大自然</h4>
              <p className="text-gray-700 mb-2">本週找一個仰望星空或觀察自然的機會（夜晚看星星、看日落、觀察植物等），刻意以「因果定律」思考：「這個現象的背後，必有一個比它更偉大的因。」</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>看到星空時，想想宇宙的無限性指向怎樣的「第一因」</li>
                <li>看到生命的複雜時，問自己：混亂的質粒能產生這個嗎？</li>
                <li>記下一個讓你感受到「創造者的指紋」的時刻</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📊 了解熱力學定律的日常表現</h4>
              <p className="text-gray-700 mb-2">熱力學第二定律（熵增）其實在生活中處處可見——房間會越來越亂、食物會腐爛、機器會老化。這週刻意注意三個這樣的例子，並思考：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>這些現象支持「宇宙的自然傾向是從有序走向無序」嗎？</li>
                <li>若整個宇宙都在走下坡，起初的「高度有序」從何而來？</li>
                <li>試著向一位朋友或家人解釋這個定律與宇宙起源的關係</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🌍 感謝地球的獨特性</h4>
              <p className="text-gray-700 mb-2">書中說地球是宇宙中惟一有水界、空氣與地殼能支持高級生命的星球。花幾分鐘感謝上帝為人特別準備的這個家鄉：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>喝一杯水時，感謝地球是太陽系中惟一有液態水的星球</li>
                <li>深呼吸時，感謝地球的大氣層是宇宙中獨一無二的禮物</li>
                <li>和家人分享：「地球是被特別為我們創造的家鄉」這個觀念</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 為孩子或青年準備一個「宇宙起源」的簡短對話</h4>
              <p className="text-gray-700 mb-2">本章提供了很多簡明的科學論據。試著選擇其中一個（如熱力學定律、月球與地球成份不同、Maxwell 的分子均一性），準備一個 2-3 分鐘能向年輕人解說的版本：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>用簡單的生活比喻切入（如：「你有沒有想過，為什麼宇宙會有規律？」）</li>
                <li>不急於說服，讓科學的奇妙自然地引出思考</li>
                <li>結尾可以分享：「創造論不只是信仰，也是科學上更合理的解釋」</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic text-sm leading-relaxed">「主啊，感謝祢是那位無限、永恒、全能、全知、有道德、有愛心的創造主——正是因果定律所指向的第一因，也是我心靈所尋找的答案。感謝祢用精確的數學創建宇宙，使它有秩序、有規律、充滿美麗；感謝祢特別創造地球作為我們的家鄉，使它在宇宙中獨一無二地適合生命。求祢幫助我，在這個充滿混亂和懷疑的世界中，能看見祢創造的秩序與智慧，並將這份信念以誠實和有根據的方式傳遞給下一代。也求祢讓我每天都記得，我的三磅腦子是宇宙中最複雜的組織，是祢用愛造的——我的生命是有目的、有意義、有永恒價值的。奉主耶穌的名禱告，阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
