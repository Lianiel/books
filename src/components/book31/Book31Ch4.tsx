import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star, Search, HelpCircle, Check, Eye } from 'lucide-react';

export default function Book31Ch4() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">第四章</h1>
        <h2 className="text-xl font-semibold text-gray-700">起初 神創造天地</h2>
        <p className="text-sm text-gray-500 mt-2">書頁 64–81</p>
      </div>

      {/* 開章引言 */}
      <div className="mb-8 rounded-xl overflow-hidden shadow-md">
        <div className="bg-gradient-to-r from-gray-900 to-teal-900 px-6 py-5">
          <p className="text-gray-100 leading-relaxed text-sm">
            起初　神創造天地。地是空虛混沌，淵面黑暗，　神的靈運行在水面上。　神說：「要有光。」就有了光。　神看光是好的，就把光暗分開了。　神稱光為晝，稱暗為夜；有晚上，有早晨，這是頭一日。
          </p>
          <p className="text-teal-300 text-sm mt-3 text-right italic">——— 創世記一章 1 至 5 節 ———</p>
        </div>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-teal-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            {/* 引言 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">神創造天地的大背景</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                既然宇宙確實是神所創造的，那麼這個天地是怎樣被造出來的呢？由於人局限於長、寬、高及時間所組合的四度空間裏，生命有始有末，一切都有時間性。人實難去想像那沒有時間限制，又超出一切空間範圍的神，祂是那無始無終的自有永有者。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                感謝神的美意，祂創造了這個屬物質的世界，我們才能存在。就在祂創造物質與空間的時候，時間就開始作用，這樣的「起初」和「末了」就進入了世間。聖經上說：「你，惟獨你，是耶和華；你造了天，和天上的天，並天上的萬象，地和地上的萬物，海和海中所有的，這一切都是你所保存的，天軍也都敬拜你。」（尼希米記九章6節）。是的，天空、宇宙、星球、地上和海中的生物，全都是神所造的，也都藉著祂的「宇宙定律」得以維生，祂是地球上所有生命的源頭。
              </p>
              <p className="text-gray-700 leading-relaxed">
                神樂意將祂的旨意曉示眾人，所以將祂創造地球的經過，在數千年前就告訴人，並經由摩西整理，記載在創世記最前面。這創造世界的歷史，既然與人類自身有關，又以人類被神救贖為中心，神就以地球為背景，開始時並沒有必要需詳述祂創造宇宙的細節，所以祂就言簡意賅地說：「起初　神創造天地。」接著神開始敘述祂創造地球的過程，又將這過程，以七天的創造次序表示出來。
              </p>
            </div>

            {/* 七日大神蹟 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">七日大神蹟</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                這七日是以人的眼光看七日呢？還是以神的眼光看創造的七日呢？這問題常困擾許多人。因為，那一日若是以神的眼光來看，就可能是那「主看一日如千年，千年如一日」（彼得後書三章8節）的一千年為一日了。其實，這問題的產生，主要是因為我們對時間瞭解不夠之故。時間既因愛因斯坦（Einstein）的「相對論」而受超光速、重力所影響，所以，以神全能的大智慧，祂的命令當然可以左右時間的長短。因此，神若是在人所謂的七日創造天地，這是可以理解的；但若是神所看的七日，這也是可以解釋的。所以，我們不需要爭論那創造的日子，卻應著重在起初　神創造天地的美好，並那創造背後的救贖主——耶穌基督。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                至於神蹟和自然現象的衝突，在此也有解釋。科學經由觀察、驗證以及記錄的事實，往往只是神在創造宇宙之後，為宇宙所定的自然定律，是為保存這一切受造物用的。然而，人們卻往往不見自然定律的後面，是那全能的主宰，就好像只知有法律，卻不知那法律是人定的；既由人定，也可以由制定者因事制宜。因此，宇宙定律，既是為受造物定的，也可以因受造物而廢，那定律是隨著創造之主，為達成祂美好的旨意而變通的，這就是何以會有神蹟出現了。亞倫的杖一夜發芽、開花、結果，眾骸骨立刻生筋、長肉、長皮又有氣息，這些都證明神蹟是不受宇宙定律、時間長短限制的。
              </p>
            </div>

            {/* 第一日的創造 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">第一日的創造</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經記載神創造天地的來歷是這樣的：「起初　神創造天地。地是空虛混沌，淵面黑暗，　神的靈運行在水面上。」（創世記一章1至2節）為了使人更清楚這經文所指的是什麼，分三點解釋其含義：
              </p>
              <div className="space-y-4 ml-2">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">（一）三位一體的神</p>
                  <p className="text-gray-700 leading-relaxed">「起初　神創造天地」的「神」字，希伯來文原文（以羅欣，Elohim）本是複數，本應譯為「神們」。但是，按文法，複數名詞本應接著複數動詞；這裏，在「神們」後面卻緊接著單數動詞——「創造」（巴拉，bara）。這充分指明「神們」本是同一體，即是聖父、聖子、聖靈三位一體：聖父總理與計劃，聖子助理與救贖，聖靈執行與作工，原本為一，都包括在這「神」——宇宙至高者之內了。另外，請注意，這動詞的用法，是專指主語是男性的，所以，三位一體的神是男的；也就是說聖父、聖子、聖靈是男性的。</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">（二）從虛無到有形的創造</p>
                  <p className="text-gray-700 leading-relaxed">這「創造天地」的意思，按文法而言，是指從天到地，所有都是祂創造的。聖經既專論神與人的關係，所以在指明神創造宇宙及地球之後，就開始描述祂創造地球的情形——地球那時是一片空無而益、無形而混亂的「黑暗液體氣團」，顯然是一種沒有意義及規律的物質。這物質來自神創造宇宙的第一部分呢？還是其他來源？在此並不重要。重要的是神運用大能，使這一切根本變化成為與生命有意義的全新狀態，這不是改造與更新，而是重新建造。</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">（三）聖靈的孵化與翱翔</p>
                  <p className="text-gray-700 leading-relaxed">文中「神的靈運行在水面上」，「運行」原文（麥拉赫費特，merachefet），含有孵化與翱翔的意思。聖靈此時專注在使地球運化成形，正在執行父神的創造計劃。</p>
                </div>
              </div>
            </div>

            {/* 神說要有光就有了光 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">神說要有光就有了光</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經記載，接著前面——「　神說：『要有光。』就有了光。　神看光是好的，就把光暗分開了。　神稱光為晝，稱暗為夜；有晚上，有早晨，這是頭一日。」（創世記一章3至5節）。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch4-fig29-light-darkness.jpg" alt="圖29 神說要有光就有了光" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 29 — 神說：「要有光。」就有了光。這是一個命令子句，顯示　神創造天地的命令發出，即刻有效執行，並沒有和黑暗勢力抗衡和掙扎。</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">這裏有三層意思：</p>
              <div className="space-y-3 ml-2">
                <div className="flex gap-3">
                  <span className="text-teal-600 font-bold flex-shrink-0">（一）</span>
                  <p className="text-gray-700 leading-relaxed">「　神說：『要有光。』就有了光。」這是一個命令子句，顯示神創造天地的命令發出，即刻有效執行，並沒有和黑暗勢力抗衡和掙扎。代表神一直是宇宙的主宰者，全權掌管宇宙的每一部位，推測撒但尚未背叛，留後再詳加證實。</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-teal-600 font-bold flex-shrink-0">（二）</span>
                  <p className="text-gray-700 leading-relaxed">「光」是神創造的產物，這光顯然不同於祂第四日所造的日、月、星辰，在未有太陽之前，就有了光，這也與現代科學理論相合。光是能量之一，此時，各種星體的質量，可能是由能量放出光來造成的。現在用一個公式把這個物理變化表示出來：E（能量）÷ C²（光速平方）= M（質量）。「黑暗星雲」在神的命令下，能量開始收縮放熱，熱產生光，形成各個星球物體（即是質量）。然而，在這些物理現象的後面，更有其他重要的意義，那就是有光人才能看到神的創造工作，沒有光，怎能彰顯神在受造物上的榮耀呢？光既來自神的話，萬物是藉著祂的話語造成的，生命在祂裏面，這生命就成了人的光，光照在黑暗裏，凡有生命的就接受光。光既是神先為生命造的，是好的，更何況那世界的光——耶穌基督，是人死裏復活初熟的果子，更是何等的美好！</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-teal-600 font-bold flex-shrink-0">（三）</span>
                  <p className="text-gray-700 leading-relaxed">文中神將光暗分開，這影射一半地球是為光所照，同時，另一半地球尚在黑暗中。這分開光暗的界限，是隨著地球自轉而移動，這當然也表示，那時光源只有一處，直到第四日這光源才為太陽所代替。地球是先有黑夜，直到光出現，才有白日，這就是神算一日的方法，至今希伯來人仍遵照此法計日。</p>
                </div>
              </div>
            </div>

            {/* 神第二日分開水與空氣 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">神第二日分開水與空氣</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                過了第一日，「　神說：『諸水之間要有空氣，將水分為上下。』　神就造出空氣，將空氣以下的水，空氣以上的水分開了，事就這樣成了。　神稱空氣為天；有晚上，有早晨，是第二日。」（創世記一章6至8節）。這段為人所忽略的經文非常重要，神造了一個「空氣」（譯作空間）在水中間，將水一分為二，上下隔開（見圖30）。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch4-fig30-water-vapor.jpg" alt="圖30 水氣層示意圖" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 30 — 神說：「諸水之間要有空氣，將水分為上下。」　神就造出空氣，將空氣以下的水，空氣以上的水分開了，事就這樣成了。</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                顯然，空氣下面的水是海洋，至於空氣上面的水是什麼？絕對不是今天天空的樣子，顯然是一層過去曾經存在的「水氣層」。因為「水氣層」的存在，使得從前地球的氣候與今日迥異；至於我怎樣證實它過去曾存在，以及「水氣層」何時消失，將留到後面討論。
              </p>
              <p className="text-gray-700 leading-relaxed">
                推測那時的海洋面積比今日小，大量的水，不是在「水氣層」中，就是在地下水中，這種情況我們可以從大洪水時，神使「大淵的泉源，都裂開了，天上的窗戶，也敞開了」（創世記七章11節），得到證實。另外，聖經告訴我們，那時神「還沒有降雨在地上」，卻有「霧氣從地上騰，滋潤遍地」（創世記二章5至6節），足見那時的河流是靠大量的地下水供給水份的。
              </p>
            </div>

            {/* 神第三日造地生植物 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">神第三日造地生植物</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                過了第二日，「　神說：『天下的水要聚在一處，使旱地露出來。』事就這樣成了。　神稱旱地為地，稱水的聚處為海，　神看著是好的。　神說：『地要發生青草，和結種子的菜蔬，並結果子的樹木，各從其類，果子都包著核。』事就這樣成了。於是地發生了青草，和結種子的菜蔬，各從其類，並結果子的樹木，各從其類，果子都包著核，　神看著是好的；有晚上，有早晨，是第三日。」（創世記一章9至13節）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這裏記載得很清楚：神使水聚集在「一」處，露出地面，顯示過去地球所有的陸地是相連的，不像今天陸地被海洋分得支離破碎。在這種環境之下，神造了許多植物和果樹。那時，太陽尚未顯現，卻有第一日神所造的光和熱供給地球能量，透過空氣上層的「水氣層」，把地球包圍成一個溫暖潮濕之地，適於植物大量地生長。大地一片綠意，這時動物尚未造成。
              </p>
            </div>

            {/* 神第四日造日月星辰 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">神第四日造日月星辰</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                過了第三日，「　神說：『天上要有光體，可以分晝夜，作記號，定節令、日子、年歲；並要發光在天空，普照在地上。』事就這樣成了。於是　神造了兩個大光，大的管晝，小的管夜，又造眾星。就把這些光擺列在天空，普照在地上，管理晝夜，分別明暗，　神看著是好的；有晚上，有早晨，是第四日。」（創世記一章14至19節）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                文中，神「造了兩個大光」的「造」字，希伯來文原文（阿薩，asah），與第一日那「創造」原文（巴拉，bara）不是同一字。這個「造」字，若譯為「製造」更為恰當，是用已存在的物質，將之改變合乎使用之意。這個觀念可用公式表明如下：E（能量）= M（質量）× C²（光速平方）。這裏，在第一日，神運化黑暗星雲，將能量放光產生星球物體後，神又在第四日，將有的星體賦與能量，使其聚集成氫氣原子爐，開始作用成太陽。至於那小光，反射陽光，管理地球黑夜的月球，顯然是直等到第四日，才開始在地球軌道上服役，源自何處並不重要。太陽系直到第四日，才具現今規模。地球開始有了自己的晝夜系統，大地的植物，在第四日之前的光合作用下，大量製造了氧氣，　神已經為地球生物預備好了生長環境。
              </p>
            </div>

            {/* 神第五日造魚和鳥 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">神第五日造魚和鳥</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                過了第四日，「　神說：『水要多多滋生有生命的物，要有雀鳥飛在地面以上，天空之中。』　神就造出大魚，和水中所滋生各樣有生命的動物，各從其類；又造出各樣飛鳥，各從其類；　神看著是好的。　神就賜福給這一切，說：『滋生繁多，充滿海中的水；雀鳥也要多生在地上。』有晚上，有早晨，是第五日。」（創世記一章20至23節）。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch4-fig31-fish-birds.jpg" alt="圖31 魚和鳥" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 31 — 神說：「水要多多滋生有生命的物，要有雀鳥飛在地面以上，天空之中。」　神就造出大魚，和水中所滋生各樣有生命的動物……。</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經中，「　神就造出大魚」的「造」字，希伯來文原文（巴拉，bara），是與第一日的「創造」同字，顯然是將地球的某種元素，變化成一種完全不同的生命出來。同時，我們由這段經文中可以看出，神創造是有次序的，祂先在水中創造出各種生物，接著，又造了各樣會飛的生物，尚未造出陸地上的動物，這是與進化論最大的不同點。其次，神創造植物與動物，都是「各從其類」的，顯然，從起初，不同類的物種（Species），就無法配種產生新品種，這種生物定律，到今天還是金科玉律沒有改變。
              </p>
            </div>

            {/* 神第六日造動物及人類 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">神第六日造動物及人類</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                過了第五日，「　神說：『地要生出活物來，各從其類；牲畜、昆蟲、野獸，各從其類。』事就這樣成了。於是　神造出野獸，各從其類；牲畜各從其類；地上一切昆蟲，各從其類；　神看著是好的。　神說：『我們要照著我們的形像，按著我們的樣式造人，使他們管理海裏的魚，空中的鳥，地上的牲畜，和全地，並地上所爬的一切昆蟲。』　神就照著自己的形像造人，乃是照著祂的形像造男造女。　神就賜福給他們，又對他們說：『要生養眾多，遍滿地面，治理這地；也要管理海裏的魚，空中的鳥，和地上各樣行動的活物。』」（創世記一章24至31節）。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch4-fig32-fruit-plants.jpg" alt="圖32 果實植物" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 32 — 神說：「看哪！我將遍地上一切結種子的菜蔬，和一切樹上所結有核的果子，全賜給你們作食物。」</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                首先，神「造野獸、牲畜、昆蟲」的「造」字（阿薩，asah），以及創世記一章26節神計劃及說要「造人」的「造」字，是與　神在第二日及第四日的「造」字相同，都是用已存在的物質改變「製造」之意。但是創世記一章27節　神實際照著祂的形像「造人」的「造」字，卻是（巴拉，bara），在這一節裏，一共引用兩次，都是與　神在第一日及第五日所用的「造」字相同，是「創造」的意思，即是變化成完全不同的生命出來。這裏充分證明人表面看起來好像和其他動物類似，實際上人和其他動物大不相同。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這是怎麼說呢？因為雖然表面看來，人和動物好像也有相同的地方。譬如說：根據聖經，人和動物都是神用土造成的（創世記二章7節及19節），有關這一點我們也知道，因為人和動物體內的化學成份，都是土裏尋常見到的；神用無機物造成有機物，使其擁有生命，這就是神創造萬物大能的明證之一。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                但是，當　神造動物和人類的時候，故意有其先後次序，顯出人是　神創造地球的最終目的；這就好比植物是為動物而造的，而動物卻在植物之後才被　神造成。人既是　神最後造的，也被　神賦與管理地球生物的使命。這也就是說，人並沒有和動物爭奪這地球的領導權，而是直接就被　神賦與管理地球的能力。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                人為何有這種超乎諸受造物的能力呢？原來，這奧祕早在創世之初就顯現出來了。那時，三位一體的真神在決定造人的計劃，人是照著祂的「形像」和「樣式」造的，這就是人和其他動物最大不同之處。這就是何以　神實際「造人」的時候，是用希伯來文（巴拉，bara）這個字，足見其「創造」過程是有別於一般的動物的。這裏也就能解釋為什麼猩猩、猴子，也同樣擁有　神的「形像」及「樣式」，也只有人能像　神。我們知道，兒子的特徵，就在像那生他的，同理，人起初被造時，在外貌與心性方面就應像那造他的　神，所以亞當在聖經中被稱為　神的兒子（路加福音三章38節）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                除此之外，人與動物最大不同處，在於　神造人的時候，「將生氣吹在他鼻孔裏，他就成了有靈的活人，名叫亞當」（創世記二章7節）；這靈來自　神，也要回到神那裏（傳道書十二章7節）。自從人犯罪，與　神隔離，這靈就無法飽足，乾旱空虛，世界上無一物能使他填滿；人一直要等到重新和　神恢復美好團契，人才能得到滿足。人有靈，也只有人能敬拜　神，這也是人和其他地球上的生物最大不同之處。
              </p>
            </div>

            {/* 神第七日安息 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">神第七日安息</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經記載，「天地萬物都造齊了。到第七日，　神造物的工已經完畢，就在第七日歇了祂一切的工，安息了。　神賜福給第七日，定為聖日，因為在這日　神歇了祂一切創造的工，就安息了。」（創世記二章1至3節）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神在創造地球萬物及人類後，就歇了祂一切創造的工，並聖化此日，安息了。這「安息」的希伯來文（沙巴特，shabbat），並非是一種勞累需要休息睡眠的意思，而是有一種停止創造工作，卻仍在管理和維繫一切受造物的含意。安息只是不再創造新生命，就像今天在世上的生物，自從　神創造天地以來，就沒有改變一樣；所以雖是安息，　神並沒有不作事，就像耶穌說的「我父作事直到如今，我也作事」（約翰福音五章17節）意思一樣。
              </p>
              <p className="text-gray-700 leading-relaxed">
                神吩咐人要守安息日的誡命是有其美意的（出埃及記二十章8至11節），人既是　神的子女，也當在多方面聖潔、像祂。然而罪使人歡息勞苦，與　神遠離，所以凡屬　神的人，就應遵照這為　神分別為聖的日子，在祂裏面息了勞苦；不但紀念　神的創造之工，更遙指那進入神國的真正安息——那不再受罪綑綁的喜悅（希伯來書四章9節）。人只有在耶穌基督裏，才能得到真正的安息。
              </p>
            </div>

            {/* 可愛的地球 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">可愛的地球</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                是的，這是一個可愛的地球，一切都甚美好。地球上空的「水氣層」，把地球圍成一個全球性溫暖的氣候，我們可以由各地發現的煤層、石油以及動物化石，證實生物曾是如何茂盛地在地球上繁殖過，茲舉三例證明：
              </p>
              <div className="space-y-2 ml-2">
                <div className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">一</span>
                  <p className="text-gray-700">某種必須適應在水溫 20°C 以上的珊瑚群，居然在兩極曾經生長過。</p>
                </div>
                <div className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">二</span>
                  <p className="text-gray-700">大量的頁煤層也在南極東部發現，證明大量亞熱帶植物，曾在南極茂盛過。</p>
                </div>
                <div className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">三</span>
                  <p className="text-gray-700">在西伯利亞沿著北部到阿拉斯加的地方，發現大量至今已絕跡的長毛象（Mammothes）遺體，屍體冰凍完整，胃裏的食物尚未消化，口內含著青草、野豆等溫帶植物。其他諸如羊、駱駝、馬、獅子、牛等都曾在西伯利亞的冰凍層中發現。另外還有恐龍的遺體，這種只能在溫帶以上生存的大型動物，都曾在全球各地發現過，這都指出牠們在死亡之前，是曾生長在一個普遍溫暖的氣候裏。</p>
                </div>
              </div>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch4-fig33-antarctic-coal.jpg" alt="圖33 南極頁煤層" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 33 — 大量的頁煤層也在地球南極東部的特蘭山脈（Theron Mountains）發現，證明大量亞熱帶植物，曾在南極茂盛過。</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                那時海平面也低於現在的位置，有的距海面六百呎以下的海島，曾有證據顯示一度是在地面上。還有無數的海底大峽谷，譬如紐約哈得遜河口沿海伸延三百多哩的峽谷，顯示曾是地上的河谷等，證明海洋面積開始時並沒有今天的廣泛，也沒有今天如此洶濤可怕。地球上有山有水，果樹生長其中，動物安歇其下，一切顯得如此安詳美麗。那時動物是不傷人的。
              </p>
            </div>

            {/* 伊甸園 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">伊甸園在哪裏</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經上記載，　神在東方建立了伊甸園（創世記二章8節），把人安置在那裏。有河從伊甸流出來滋潤那園子，又從那裏分為四道：一道環繞哈腓拉全地，一道環繞古實全地，一道名叫希底結，流在亞述的東邊，一道就是伯拉河。伊甸園究竟在地球上的哪裏呢？
              </p>
              <p className="text-gray-700 leading-relaxed">
                根據史料：哈腓拉是今天阿拉伯半島中部，古實在非洲東部，希底結即是底格里斯河（Tigris）的別名，亞述靠近現今的敘利亞，伯拉河即是今天的幼發拉底河（Euphrates），如此，這些河的來源便指向今天的高加索附近。有關這一點，近代考古學者在高加索附近探測，發現人類及生物的起源確有來自該地的跡象。
              </p>
            </div>

            {/* 故鄉頌 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">故鄉頌</h3>
              <div className="bg-teal-50 border-l-4 border-teal-400 p-4 rounded-r-lg mb-4">
                <p className="text-gray-700 leading-relaxed italic">
                  論到那伊甸故鄉，我心湧美辭，舌是快筆：<br />
                  伊甸誠如其名，是個喜悅之地。<br />
                  四季不絕的果樹隨人摘採，又有那使人永生的生命果；<br />
                  在那裏綿羊羔與獅子同居，牛犢也與小熊同臥。<br /><br />
                  這豈不是一處快樂的地方？豈不是世外桃源？<br />
                  那恬美的安息，竟成一個失落的夢。<br />
                  伊甸啊！你失落在哪裏？為何竟與人無份無緣？<br /><br />
                  人不必織衣，卻以天光為衣，<br />
                  不必勞苦，卻有那悅目的果子為食。<br />
                  人的本份原是修理看守那園子，命名管理那各樣飛禽走獸……<br />
                  神也要在伊甸園中行走，人要常見祂的面！<br /><br />
                  這豈不是一處快樂的地方？豈不是世外桃源？<br />
                  那恬美的安息，竟成一個失落的夢。<br />
                  伊甸啊！你失落在哪裏？為何竟與人無份無緣？
                </p>
              </div>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch4-fig34-rose.jpg" alt="圖34 玫瑰花" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 34 — 這豈不是一處快樂的地方？豈不是世外桃源？那恬美的安息，竟成一個失落的夢。伊甸啊！你失落在哪裏？為何竟與人無份無緣？</p>
              </div>
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
            <ul className="space-y-2">
              {[
                '希伯來文「神」（以羅欣，Elohim）是複數名詞卻配單數動詞「創造」（巴拉，bara），充分說明神是三位一體：聖父計劃、聖子救贖、聖靈執行，同為一體的創造主。',
                '神第一日所造的「光」不同於第四日的太陽，光來自能量（E÷C²=M），黑暗星雲在神命令下收縮放熱形成星球；光的分開象徵地球自轉，「一日」的計算法至今希伯來人仍遵循。',
                '神第二日造「水氣層」將水分上下，這層使地球過去全球溫暖、潮濕，是古代動植物遍佈兩極和西伯利亞的原因，也是洪水前人類可活近千歲的關鍵屏障。',
                '神創造生物是「各從其類」——從水生到飛鳥到陸地動物，次序明確，且不同物種無法配種；這與進化論的「物種漸變」根本相反。',
                '人與動物雖同用土造，但神造人用「巴拉」（完全不同的新創造），並「將生氣吹在鼻孔裏」使人有靈；人有靈、能像神、能敬拜神，是受造萬物中唯一的。',
                '伊甸園位置指向今高加索附近（哈腓拉、古實、底格里斯河、幼發拉底河交匯）；那個可愛的地球一片祥和，動物不傷人，是人類失落的美麗家園。',
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
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">三位一體的創造文法</h4>
              <p className="text-gray-700 leading-relaxed">希伯來文「以羅欣」（Elohim）複數詞配單數動詞「巴拉」，是聖經原文中三位一體最早的語言學明證。這並非翻譯誤差，而是神刻意保留的文法張力，同時指向多元性（三位格）與合一性（一個本質）。創世記一章26節「我們要照著我們的形像造人」更直接以複數第一人稱表達，是新約三位一體神學的舊約根基。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「巴拉」與「阿薩」——兩種創造的神學意涵</h4>
              <p className="text-gray-700 leading-relaxed">聖經用兩個不同希伯來動詞描述神的創造行動：「巴拉」（bara）表示從無到有的全新創造，只有神才能做；「阿薩」（asah）表示用已存在材料製造改造，人也可以做。創世記一章中，第一日（光）、第五日（水生動物）、第六日（人）用「巴拉」，強調這些是全新不同的生命層次；第四日（太陽月亮）用「阿薩」，說明是已有星體的重新整合配置。這區別對理解人的獨特性至關重要。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">水氣層與洪水前文明的科學推論</h4>
              <p className="text-gray-700 leading-relaxed">「水氣層」假說（Canopy Theory）由創造論科學家提出，認為大洪水前地球上空有大量水蒸氣層，具有以下效果：（一）過濾宇宙有害輻射，使生物壽命大幅延長（洪水前人類可活900年，洪水後急劇縮短）；（二）形成全球均勻溫暖氣候（解釋南極煤層、北極珊瑚、西伯利亞熱帶動物遺體）；（三）大洪水時「天上的窗戶敞開了」（創世記七章11節）即水氣層崩潰，傾盆大雨。這一假說既符合聖經記載，也為化石記錄提供了解釋框架。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">安息日的深層意義——從創造到救贖</h4>
              <p className="text-gray-700 leading-relaxed">神第七日安息並非因疲倦，「安息」（沙巴特，shabbat）含義是「停止創造、繼續維繫」。安息日誡命（出埃及記二十章8-11節）指向三個層面：紀念神的創造之工；預示進入神國的屬靈安息（希伯來書四章9-11節）；以及耶穌基督本人就是我們的安息——「凡勞苦擔重擔的人可以到我這裏來，我就使你們得安息」（馬太福音十一章28節）。</p>
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
              '三位一體的神共同創造天地——聖父計劃、聖子救贖、聖靈執行。你個人與三位一體的哪一位格的連結最深？在哪些生命處境中，你特別感受到某一位格的同在？',
              '神用命令「要有光」，光立刻出現——沒有爭戰，沒有阻礙。你在信仰生命中，有哪些地方仍然在等候神「說話」？是什麼讓你感到困難？',
              '「水氣層」的存在使全地溫暖，人也長壽。這個失落的美好環境讓你對「創造本來的樣子」有何想像？你認為未來新天新地會是什麼樣的？',
              '人是「各從其類」被造的，每一種受造物都有其獨特性。神照自己形像造人，你認為「神的形像」在你身上最能體現的是哪些方面？哪些方面還有很大的成長空間？',
              '神第七日安息，也吩咐人守安息日。在你目前的生活節奏中，你有真正意義上的「安息」嗎？你覺得「在耶穌基督裏得安息」對你而言是理論還是真實的經歷？',
              '故鄉頌唱到「伊甸啊！你失落在哪裏？」——讀完這首詩，你心裏有什麼感受？你對「那個美麗的起初」有什麼渴望？',
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 重新發現「神的形像」——每日默想</h4>
              <p className="text-gray-700 mb-2">本章揭示人是照神形像造的，有靈、能敬拜、能與神同行。本週每天早晨花三分鐘默想：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>「今天我如何在生活中活出神的形像（公義、慈愛、創造力、關係）？」</li>
                <li>「今天哪一件事提醒我，我是有靈的人，而非只是生物機器？」</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 守一個真正的安息日</h4>
              <p className="text-gray-700 mb-2">神設立安息日是為了人的益處，不是負擔。本週嘗試：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>選一天或半天，完全放下工作、手機和代辦清單。</li>
                <li>用這段時間讀聖經、禱告、親近大自然，或與家人深度交流。</li>
                <li>記錄這次安息的感受——是否感到更新、得力？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 感恩神的創造——走進大自然</h4>
              <p className="text-gray-700 mb-2">本章描述神創造的地球「一切都甚美好」。本週安排一次走入自然（公園、山林、海邊）：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>帶著感恩的心觀察植物、動物、天空，默想神創造的秩序與美好。</li>
                <li>選一樣讓你印象最深的受造物，回家後查查它的構造，讚美那創造它的神。</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 禱告</h4>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-gray-700 leading-relaxed italic text-sm">
                  「創造天地的主，感謝祢以大能和智慧造了這美麗的宇宙，也照著祢的形像造了我。感謝祢賜給我靈，使我能認識祢、敬拜祢。求祢幫助我每天活在對祢的敬畏中，讓我在這忙碌的世界裏，真正得到在祢裏面的安息。讓我越來越像祢，讓我的生命彰顯祢創造我的美好目的。奉主耶穌的名禱告，阿們。」
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
