import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp, Heart } from 'lucide-react';

export default function Book14Ch1() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ sec0: true });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          第1章
        </h1>
        <h2 className="text-xl font-semibold text-gray-700">序言及前言</h2>
      </div>

      <div className="mb-4 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => toggleSection('sec0')}
          className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800 text-left text-sm">張序（張慕皚）</span>
          </div>
          {expanded['sec0'] ? <ChevronUp className="w-4 h-4 text-gray-500 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />}
        </button>
        {expanded['sec0'] && (
          <div className="p-5 bg-white">
              <p className="text-gray-700 leading-relaxed mb-3">對二十世紀的普世教會而言，影響最深，而爭論性又最大的，莫過於世紀初在美國產生的靈恩運動。</p>
              <p className="text-gray-700 leading-relaxed mb-3">從歷史角度看，六十年代開始的稱靈恩運動（Charismatic Movement），六十年代之前的稱為五旬節運動。</p>
              <p className="text-gray-700 leading-relaxed mb-3">由於這兩個運動的神學思想和強調點都大同小異，因此把他們通稱為靈恩運動亦無可厚非。</p>
              <p className="text-gray-700 leading-relaxed mb-3">靈恩運動的出發點在於覺察到現今教會中很多缺乏事奉的熱誠，與使徒行傳的教會比較之下，發現問題的癥結在於初期教會滿有聖靈的能力，而現今的教會所以冷漠和停滯不前，就因為沒有追求聖靈的充滿和運用恩賜去事奉。</p>
              <p className="text-gray-700 leading-relaxed mb-3">就靈恩運動追求聖靈能力在教會中彰顯而言，是一點也沒有錯的，眾教會都應該認同這方面的看法，努力去追求。可惜在追求的過程中，靈恩運動中出現了一些富有爭論性的教義和表現，以致很多教會對這運動望而卻步。雖然如此，靈恩之火卻仍如燎原之火，迅速向全世界蔓延。六十年代之前的靈恩運動，大致上盛行於社會的低下階層，但六十年代開始的新靈恩運動，卻打破了所有社會階層、宗派、神學觀點和國家種族等的界線，甚至在天主教中間亦有不少靈恩派的成員。從教會增長的角度看，靈恩派教會在世界很多地方的增長，都遠遠超越其他教派和信仰的教會；從教會合一的角度看，靈恩運動更成為連結不同背景和信仰的信徒和教會的一種凝聚力。</p>
              <p className="text-gray-700 leading-relaxed mb-3">對近代的靈恩運動，有很多不同形式的回應，有的取敵視的態度，對此運動中一切超自然的現象，如講方言、說預言。被視為人為或心理作用所產生的。</p>
              <p className="text-gray-700 leading-relaxed mb-3">另一種回應是彼此的分離。很多得著靈恩的信徒，有一種使命感，覺得應該留在教會影響其他信徒也得著更新，但也有得著靈恩而離開教會，在別的地方開始聚會或設立教會的。這種對聖靈的真理意見分歧而導致教會分裂的情況很多時候是難以避免的，分裂的責任也難以歸咎於任何一方面。     也有不少的情況是整個教會或整個宗派都受感染而投入了靈恩運動的；這往往是教會的牧師或宗派的領袖先受影響，進而帶領教會積極的追求靈恩。在這過程中，也難免有反對而離開的信徒。</p>
          </div>
        )}
      </div>

      <div className="mb-4 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => toggleSection('sec1')}
          className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800 text-left text-sm">譯者序（霍玉蓮）</span>
          </div>
          {expanded['sec1'] ? <ChevronUp className="w-4 h-4 text-gray-500 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />}
        </button>
        {expanded['sec1'] && (
          <div className="p-5 bg-white">
              <p className="text-gray-700 leading-relaxed mb-3">中學時代，念使徒行傳，發現其中四個經常出現的字就是「聖靈充滿」，殉道的司提反被「聖靈充滿」，初信主的外邦人被「聖靈充滿」，彼得講道大有能力也是被「聖靈充滿」„„     那時候，我很希望深入瞭解何謂「聖靈充滿」，而我也很想得著「聖靈充滿」。</p>
              <p className="text-gray-700 leading-relaxed mb-3">本書《活在聖靈中》探討何謂聖靈，他的特質、個性、功能，以及人如何認識他，與他同行。一般人對聖靈及他的同在很有疑問：「聖靈充滿」難道是形容信徒靈氣逼人，宛如頭上有個光環，神聖不可侵犯？抑或說人擁有異能異力，能呼風喚雨，叫病者得醫治，叫傷者得痊癒，甚至起死回生？</p>
              <p className="text-gray-700 leading-relaxed mb-3">很欣賞本書作者一開始就提出我們在對聖靈的認識上，要校正焦點。許多事情都是好的，卻並非最好；許多觀念不能說是完全錯誤，卻並非焦點所在，以致拐彎抹角，對聖靈的真相仍舊模糊不清，甚至擾亂視聽。而認識聖靈的焦點，在乎以基督為中心（Christ－centredness）。作者採用一個意象去闡釋這個要點：聖靈就像牆角的泛光燈，把中心目標照明，他的工作，就是表彰基督和發揚基督。這是全書的重點，不可偏倚。在我翻譯本書的時候，有另一個意念閃現我腦海，中國古代戲劇、小說中有所謂「照妖鏡」，今天，我們也許需要一面「照靈鏡」。倘若將這面鏡向信徒一照，就能從信徒身上看見耶穌基督的性情、神貌、氣質，而且這個信徒的生活形態、行事動機若能表彰耶穌基督，以耶穌為首，那麼他就是被聖靈充滿，與聖靈同行。至於有沒有說方言的恩賜、醫病趕鬼的異能，是否充滿領袖的魅力、獨具恩賜、十項全能，都只不過是枝枝節節的事情而已。</p>
              <p className="text-gray-700 leading-relaxed mb-3">換句話說，聖靈不是一種「力量」，也不是一件「禮物」，更不是一個引來各種屬靈福氣的「開關掣」，他是表明基督的一個有位格的靈。</p>
              <p className="text-gray-700 leading-relaxed mb-3">翻譯本書時，我個人亦有許多對文字的反思和學習。一向最令我沮喪的，是要閱讀一些半鹹不淡、充滿西方語法的中文，讀起來詰屈聱牙；一串一串像火車卡的句子，讀了半天，還弄不清楚是什麼意思。豈料在嘗試翻譯這本書的當兒，我發現了一些學術性和思辯性的英文文章，在句法、結構、文章組織和推論的表達上，與中文的氣息、字句組織、結構、辭彙有很大的出入，翻譯起來，有時也免不了滲進一些西方語法，讀來不倫不類。中文辭彙和句語是濃縮、含攝、包羅萬有的，表達時崇尚其含蓄性及蘊藏性；但英文辭彙簡單、精確，分門別類，表達時崇尚其分析性及闡揚性。中、英文文法背後，有其東西文化本質上的距離；故此，在東西文化交接間，多少需要彼此讓步。如何能保持中文文字濃縮、含蘊的優美，卻同時彈性地變化其氣質，擴充文字的容量，去表達繁複的邏輯、細密的分析、思辯的迂回，確是一門學問。這是所有從事翻譯事奉的人需要攜手發掘和探討的。</p>
              <p className="text-gray-700 leading-relaxed mb-3">還有必須一提的，可能作者年事已高，不失長者語重心長、諄諄教誨的風範，表達時不免略嫌重複，亦喜歡在句子中加插澄清、闡釋、注解和個人感喟，文中引用不少括弧和破折號，在我個人感受上，就如駕車的人，往前直駛的時候，忽然看見途中豎起許多交通標誌，必須不斷停車煞掣，左顧右盼，不能一鼓作氣，直達目標，難免感到有點不暢快，但若然我們瞭解作者的表達方式，跨越句法的迂回，就更能欣賞文中的精髓。</p>
              <p className="text-gray-700 leading-relaxed mb-3">本書並非僅僅純理論式討論，作者還嘗試從歷史角度綜覽及評述歷來有關聖靈的觀念，更大膽地批判凱錫克運動及靈恩運動的種種弊端，卻同時肯定其中可取之處。他的焦點是精確的，他的綜覽評述都很有參考價值。</p>
              <p className="text-gray-700 leading-relaxed mb-3">霍玉蓮                                           一九八七年十二月于蘇格蘭鴨巴甸</p>
          </div>
        )}
      </div>

      <div className="mb-4 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => toggleSection('sec2')}
          className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800 text-left text-sm">前言（巴刻自序）</span>
          </div>
          {expanded['sec2'] ? <ChevronUp className="w-4 h-4 text-gray-500 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />}
        </button>
        {expanded['sec2'] && (
          <div className="p-5 bg-white">
              <p className="text-gray-700 leading-relaxed mb-3">神的聖靈、我們的主，並生命的賜予者，他曾在創世時翱翔于眾水之上，也曾借著眾先知在人類歷史中說話；在五旬節，聖靈降臨在耶穌基督的門徒身上，擔當了耶穌給他界定的新角色，作門徒的保惠師。聖靈承受了第二位保惠師的身分，是耶穌基督的代表，今天正在眾人的心懷意念裡動工。保惠師（paraclete，希臘原文是 parakletos）的意思是：「安慰者、輔導者、幫助者、倡議者、堅固者、支持者。」耶穌是原先的保惠師。他透過第二位保惠師的工作，繼續服事人。耶穌基督是昨日、今日，直到永遠都不改變的。聖靈也是一樣；自五旬節以來歷世歷代，凡福音所到處，聖靈都大規模或小規模地動工，完成耶穌最初差遣這股新力量到來時所應許要成就的一切。</p>
              <p className="text-gray-700 leading-relaxed mb-3">幸而聖靈不負所托！若然他曾經怠工，教會早已消失了，因為根本就沒有基督徒存在。基督徒生命中的各個層面——智慧及倫理、與神及與人的各種關係、敬拜中的提升及向外的見證——都是超自然的；只有聖靈能帶動我們活出基督徒的生命，也只有借著他，這生命才得以維持下去。所以在他以外，不單不能有活潑生命的信徒和會眾，根本就不可能有信徒和會眾。然而事實上，教會仍繼續存在並增長，就是因為聖靈從沒有怠工，而且隨著時光的遞澶流轉，他將會永遠不懈地感動人心。</p>
              <p className="text-gray-700 leading-relaxed mb-3">可是，在不同的時期裡，聖靈在世上工作的廣泛及深入程度，各有不同。舉例來說，聖靈現時在非洲、印尼、拉丁美洲、美國及羅馬天主教會裡的工作，似乎較諸五十年前範圍更廣。在此，我用了「似乎」的講法，因為真正的情況只有神才清楚知道，而聖經亦曾多處強烈警告我們不能以外貌判斷屬靈的事。以利亞以為他是唯一忠義的以色列餘裔，神卻告訴他尚有七千個同樣忠信的以色列人；這件事可成為我們的鑒戒，當我們試圖估量神的作為時，最好還是先停下來三思。但無論如何，不管上述的印象正確與否，在我來看（亦不單只我），雖然一方面基督教好像在妥協中分崩離析，但聖靈今天卻在世界許多角落吹出新生的氣息。固然，他工作的深度卻又是另一個問題。一位遊歷廣博的領袖曾經對我說，北美的基督教合三千哩，卻只得半寸深；而在其他地方也同樣有人慨歎基督徒信仰的膚淺。</p>
              <p className="text-gray-700 leading-relaxed mb-3">然而無論如何，這本書的面世，是因著一個感覺，就是聖靈正在我們中間激勵我們。</p>
              <p className="text-gray-700 leading-relaxed mb-3">讀本書時，應該把他視為一套指標，指向樂尼斯（ Richard Lovelace ）所謂聖靈在教會昨日、今日、</p>
              <p className="text-gray-700 leading-relaxed mb-3">明日的工作的「統一場」論（“unified field” theory）。本書的內容有如一張功能表上的四道菜式：</p>
              <p className="text-gray-700 leading-relaxed mb-3">第一章帶領我們進到一個結論：要瞭解聖靈新的職事，全系於一個中心思想，那就是聖靈體現主耶穌自己和他的職事。這個論據就如一道醒胃的頭盆。</p>
              <p className="text-gray-700 leading-relaxed mb-3">第二章是從上述的角度去查考聖經有關聖靈的教訓。這可算是餐湯吧——可能味道較濃，但是營養豐富。或許，這湯與別不同，既濃郁又清澈；身為烹調這湯的廚子，我誠願他確是這樣。</p>
          </div>
        )}
      </div>
    </div>
  );
}
