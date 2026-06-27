import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Compass, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book30Ch1() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">第一章</h1>
        <h2 className="text-xl font-semibold text-gray-700">進化呢？還是創造？</h2>
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
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">一、萬物起源的重要性</h3>
              <p className="text-gray-700 leading-relaxed mb-3">父母與教師們都知道孩子們是好奇的動物。他們對萬物的「為什麼」與「怎麼會」的好奇心是難以滿足的。這與生俱來的對知識的敏銳感，如能加以鼓勵與培養，可引導他們在成年時對世界具有成熟的科學態度，並能建立其獨立的思考能力，以解決有關科技、社會及個人方面的問題。</p>
              <p className="text-gray-700 leading-relaxed mb-3">無論他修習那門功課，學生對起源的了解是極其重要的。如果他學化學，他應該對元素的起源與化學作用的定律發生興趣；學習英文應該對語文的起源與言語本身的起源有一份了解；生物學自然應該討論生命以及各類生物的起源；政治學應該包括其民族及其法律制度的起源，以及其它國家及其律法的起源等等。</p>
              <p className="text-gray-700 leading-relaxed mb-4">一門課程不談起源的事，可能可以避免一些爭辯，但是卻犧牲了好奇心與創造性的發展。描述與技術上的操練對任何一個優良的課程而言都是重要的，但是它們僅能產生技巧，而不能產生真正的了解。這樣的教授法彷彿是橋無落處，橫跨虛無與虛無之間，既無以往的根源，也無將來的希望。</p>
              <p className="text-gray-700 font-medium mb-3">以下綜結說明無論那一門課程研討起源均屬重要：</p>
              <div className="bg-blue-50 rounded-lg p-4 mb-3">
                <h4 className="font-semibold text-blue-800 mb-2">㈠ 科學上的理由：</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-2">
                  <li>科學（即「知識」）必須追尋「由何而來」(Whence) 及「怎麼回事」(What) 等問題的答案。</li>
                  <li>科學是基於因果關係的推理，所以，在推果求因時，不可避免的必須一步一步地，進而推到第一因。</li>
                  <li>有關自然律及自然現象的知識，若對它們的起源沒有一點了解，則對新的科學原則的發現與理解必僅知其然，而不知其所以然。</li>
                </ol>
              </div>
              <div className="bg-indigo-50 rounded-lg p-4 mb-3">
                <h4 className="font-semibold text-indigo-800 mb-2">㈡ 社會學上的理由：</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-2">
                  <li>科學可以用於社會，也會對社會產生極大的影響，社會問題的解決需要瞭解影響社會的那些因素（諸如核子能、石油燃料、生態學、遺傳工程 Genetic engineering、迷幻藥 Hallucinogenic drugs 等）的根源。</li>
                  <li>所謂的社會科學，其所研究的社會問題（如民族、文化、罪行、戰爭等）的起源也是必須了解的。</li>
                  <li>政治思想的潮流是一直在變的，社會學的教學，如不涉及歷史，而僅顧及當今風行的政治策略和社會理論，則當新潮流出現時，便不足應付。</li>
                </ol>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-blue-800 mb-2">㈢ 個人的理由：</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-2">
                  <li>每個人最需要領會他自己是誰，以及他人生的目標，若是對自己的來源缺乏認識，就很難辦到這點。一個人對他自己起源的看法必然會影響到他對自己歸宿的信念。</li>
                  <li>現代青年缺乏對人類起源正確的科學知識，這使他們求助於一些不科學的解決辦法，諸如：迷幻藥、巫術、星相及類此之舉。</li>
                  <li>真正健康的心理（正如教師盼望學生所應具備的），與健全並能令人滿足的人生哲學不可分。而後者需要對個人的起源與未來有正確的觀念。</li>
                </ol>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">然而，如果教師要教科學創造論以取代進化論，他們勢必需要參攷資料以助其成。不幸的是，目前幾乎每一本教科書都是以進化論為依歸的，大部份的教師，以及科學界人士在受大學教育時，也都被進化論灌輸有年。另一方面，大多數創造論的書籍都是從聖經以及科學兩方面來討論起源的問題，因此不宜用作公立學校的教材。雖然也有一些創造論的書籍完全是以科學為內容，不幸的是，這些書僅討論到一小部份的問題。「科學創造論」的目的便是提供教師整套專以科學為基礎，完全不引用聖經或宗教教義的資料。本書對資料的處理是正面的，不是反面的，說明以創造模式來解釋起源與歷史是與科學事實符合的，至少與進化模式一樣的好。本書雖然必須討論很多科學資料，但卻是為一般非專家的讀者而寫，我們相信此書可以被大多數的教師與知識分子所了解。書中一些必要的新科學觀念與名詞，也視需要加以解釋，所以讀者只要稍加努力，將無困難了解並加以應用。</p>
              <p className="text-gray-700 leading-relaxed mb-3">我們建議每位教師人手一本「科學創造論」作為個人自修之用，並從頭到尾讀它一遍。如果可能，各地區的學校系統都應開辦進修班，使教師知道如何使用本書。</p>
              <p className="text-gray-700 leading-relaxed mb-3">不論教的是何課程，也不論其年級，教師會發現，校中所規定的教科書及補充教材，都是以進化論為前提，或是受進化論所影響。每當論及起源（諸如：太陽系的起源，穴居人的起源等），或史前地球及其上的生物（諸如：恐龍的意義，煤礦的形成，金屬第一次被發現，等），教師應該介紹創造論者的解釋（以及教科書中進化論的解釋），按照學生年齡的大小，列舉支持創造及支持進化的證據。此書的編排及所附的參考文獻就是為了提供讀者這方面的資料。</p>
              <p className="text-gray-700 leading-relaxed">經驗告訴我們，用這一套教學方法，對學生與教師而言，較目前片面地灌輸進化論的方法，更能引人入勝。因此，我們鼓勵教師及學校負責人，予以一試。此書的主要目的是作為教師的基本資料，而非作為小學或中學的教科書。因此，教師可以根據其所授學科及年級程度而靈活運用本書的內容。</p>
            </div>

            {/* 二 */}
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">二、起源是科學無法證明的</h3>
              <p className="text-gray-700 leading-relaxed mb-3">上節論到研究起源問題之重要性。同時，我們必須慎重申明，科學無法證明任何一種起源的說法為真確。因為科學方法的本質是實驗的觀察與重覆求證。一位科學家，無論他是如何的有辦法，如何的鋒芒畢露，絕不可能觀察和重演「起源」。</p>
              <p className="text-gray-700 leading-relaxed mb-3">換言之，雖然起源的哲學很重要，但是對起源的看法和立場是僅能憑信心而不能憑眼見而建立的。憑信心採取立場這種作法並不是站不住腳的，因為我們一生中每一步都是憑信心而行，縱令是實證主義者 (Pragmatist) 僅堅持相信他能看見的，也相信實證主義是最好的哲學，而這一點他卻無法證明！他也相信眼睛所看不見的原子以及完全抽象的事，如未來等。</p>
              <p className="text-gray-700 leading-relaxed mb-3">根據觀察，信心是健康心理的必要條件。人生觀是一門哲學，而非一個科學實驗，如果一個人的一生完全依賴一瞬間的印象來作判斷而不訴諸深思熟慮，這種人生實在是像癡人說夢，雖然有聲有色，卻毫無意義。</p>
              <p className="text-gray-700 leading-relaxed mb-4">所以，人必須要有信心，至少對最初的起源應憑信心。然而，他的信心應該不是輕易盲從的，而是三思而後的信仰，這樣的信仰才有用。</p>
              <p className="text-gray-700 leading-relaxed mb-3">為要更確切地述明我們所講的起源是不能證實的這點，特將創造論與進化論這兩個起源的基本觀念，加以簡短的討論如下：</p>
              <div className="bg-gray-50 rounded-lg p-4 mb-3">
                <h4 className="font-semibold text-gray-800 mb-3">㈠ 創造無法證實：</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-2">
                  <li>從我們所能觀察到的而論，創造不是現在進行的事，創造在過去某時間就已完成，因此科學方法是無法探測的。</li>
                  <li>要設計一個科學的實驗來描繪創造的過程是不可能的，甚至想確定創造是否能夠發生也辦不到。造物主並不根據一個科學家的遐思而創造。</li>
                </ol>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-gray-800 mb-3">㈡ 進化無法證實：</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-2">
                  <li>如果進化在今天仍在進行，必然因為進度太慢而無法測知。因此，它是在實驗性的科學範疇之外。從一種生物進化到另一種生物，照進化論要花幾百萬年，沒有任何一組科學家可以觀測這樣的實驗。</li>
                  <li>今日所能見到的生物的微小變異 (Variations，見本書第 55–61 頁) 與此問題無關，因為無法證明現今這些物類的變異，日後能產生不同的較高級的物類。由於小的變異（包括突變）在創造論中亦能發生，一如在進化論中，所以這一點不能用來辨別兩者孰優孰劣。</li>
                  <li>卽令現代的科學家眞能在實驗室內以人工將無生命之物製造成生命，或將低等生物改造成高等生物，這仍不能證明此類的改變在過去曾藉偶然的自然過程發生過，或是可能發生。</li>
                </ol>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">因為進化論者常常堅持進化論是科學，而創造論是宗教，我們在這兒要借用幾位首屈一指的進化論者的話，他們也承認進化論是無法證實的：</p>
              <div className="space-y-3 mb-4">
                <div className="border-l-4 border-blue-400 pl-4 bg-blue-50 py-2 pr-3 rounded-r">
                  <p className="text-sm font-semibold text-blue-700 mb-1">進化過程太緩慢，科學觀察無法測定</p>
                  <p className="text-gray-700 text-sm">美國進化論者的領導人之一 Dobzhansky 氏承認說：「想以實驗的方法來研究這特殊的歷史過程是極受限制的，因為進化需要的時間遠超過任何實驗者的壽命。這正是反對進化論者所要求的不可能的『證據』，惟有這『證據』才能完全使他們滿意。」請留意此口供：「實驗的方法」是「不可能」運用在進化論上的。（註2）</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4 bg-blue-50 py-2 pr-3 rounded-r">
                  <p className="text-sm font-semibold text-blue-700 mb-1">進化論是一個無法加以反證的教條</p>
                  <p className="text-gray-700 text-sm">兩位現代的生物學家領袖指出，進化論既不能在任何情況下被否定，因此，它也就成為無法證實的理論：「進化論已成為……無法以任何可能的觀察所駁斥的，所以它是在『實驗科學』範疇之外。但是這卻並不是說它一定是錯誤的，沒有人能想出任何方法來試驗它……它（進化論的看法）已經成為進化論的教條，我們大多數人在訓練和學習過程中早已接受了它。」（註3）</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4 bg-blue-50 py-2 pr-3 rounded-r">
                  <p className="text-sm font-semibold text-blue-700 mb-1">進化論在哲學上及方法學上都有困難</p>
                  <p className="text-gray-700 text-sm">相仿的，Medawar 氏也看清了這一點──事實上無法來試驗進化論──他說：「在哲學上及方法學上，進化論都有困難。要想像或設計出新達爾文主義 (Neo-Darwinism) 所無法羅蓋的一套進化的故事真是難乎其難。」（註4）換言之，長頸鹿的長頸與河馬的短頸子都可以用天擇 (Natural selection) 來解釋。天擇律既包羅萬象，實質上它也就解釋不出個什麼道理！它是在自說自話：在生存競爭下留存的是適者，因為適者才會生存。</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4 bg-blue-50 py-2 pr-3 rounded-r">
                  <p className="text-sm font-semibold text-blue-700 mb-1">進化論是憑信心接受的一種權威理論</p>
                  <p className="text-gray-700 text-sm">Kerkut 氏說：「好些時候，許多現代進化論的作家似乎得了什麼特殊的啟示，他們根據品種間的變異，以及同一品種內的變異，竟想像出生命進化的理論──由簡單進化到複雜──……如果據此我們竟斬釘截鐵的確定各大類生物的某種進化方式，縱然不算是誇大其詞，至少也是言之過早。」（註5）</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4 bg-blue-50 py-2 pr-3 rounded-r">
                  <p className="text-sm font-semibold text-blue-700 mb-1">古生物學的化石資料同樣也吻合創造論</p>
                  <p className="text-gray-700 text-sm">Davis 氏說：「但是古生物學的化石資料與其他的解釋──如上帝創造等──亦同樣地吻合。古生物學本身是無法證明或否定這些解釋的。」（註6）</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4 bg-blue-50 py-2 pr-3 rounded-r">
                  <p className="text-sm font-semibold text-blue-700 mb-1">赫胥黎承認創造是完全可以理喻的</p>
                  <p className="text-gray-700 text-sm">赫胥黎 (Thomas Huxley) 氏可能是推廣達爾文哲學最有功勞的一位，但是他卻深知：「……按普通的字義講，創造是完全可以理喻的。我不難理解，在過去某段時期中，宇宙是不存在的，而卻在六日之內出現，……由一位先存的上帝的命令而造成的。」（註7）</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4 bg-blue-50 py-2 pr-3 rounded-r">
                  <p className="text-sm font-semibold text-blue-700 mb-1">接受進化論的原因並不是基於科學的證據</p>
                  <p className="text-gray-700 text-sm">數年前一位出衆的英國生物學家 Watson 博士看出這麼一個重點：「如果這樣，特別創造論和進化論是可以相提並論的。進化論之被衆人接受不是因為邏輯和證據能證明其眞確，而是因為特殊創造論那唯一可取代的理論，是顯然不可置信的。」（註8）只有當一個人確知上帝不存在時，他才可以說創造論是不可置信的。顯而易見的，如果上帝不存在，那麼特殊創造是不可置信的。但是，這種宇宙性的全盤否定，只有當某人有宇宙性的全部知識才能證明。這樣的說法需要全知（無所不知）才行。所以，Watson 博士在否定上帝時，已將他自己當作無所不知的上帝了。至少有些科學家覺得相信一位全能的造物主，比相信 Watson 博士為上帝較容易些。</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">進化論與創造論兩者都不能以科學證實或否定！尤有進者，進化論與創造論嚴格來講顯然既非科學理論亦非科學假設。人們縱然說「進化論」，或「創造論」，但這些名詞都不正確，這是因為兩者沒有一個是可以加以試驗的。一個合理的科學假設必須能夠加以試驗，試驗的結果不是證明就是否定其正確性。但是卻沒有一個實驗或一組實驗可以合乎科學地來證明這一點。</p>
              <p className="text-gray-700 leading-relaxed">事實上今日有成千的科學家（註9）及其他受過高等教育的知識份子，都摒棄進化論。如果進化論如好些科學家所說，是很顯然易見的話，這不該是事實。當然，在這一點上，對創造論也是一樣。雖然許多人相信特殊創造是絕對的史實，他們必須憑神學而非科學如此相信。進化論與創造論兩者都不能以科學證實或否定！（註10）較可行的途徑是從兩個科學的模式──「進化模式」及「創造模式」──著手。</p>
            </div>

            {/* 三 */}
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">三、兩個起源的科學模式</h3>
              <p className="text-gray-700 leading-relaxed mb-3">「模式」是一個觀念的大綱。一個有規則的思想系統藉着模式可以試將觀察到的資料予以對比，甚至可試行預測新的發現。當有兩個模式同時存在時，可將這些模式和各項資料相比，看看那一個模式更符合事實。當兩者都不能證明時，誠如進化論與創造論，在選擇兩者之一時，是無法完全客觀的。通常，在這種情況下，合乎大多數資料，並在資料上矛盾較少的一個，當可作為較正確的模式來接受。</p>
              <p className="text-gray-700 leading-relaxed mb-3">當特殊的事實被發現，似乎與該模式的預測有衝突時，仍可能將該原來的模式略加修正以適合這些資料。事實上，如 Ehrlich 氏與 Birch 氏所說的：「每一個可以想到的觀察都可適合此說。」當然，上述的說法同樣可以用在創造論的模式上：沒有任何可以想像到的由觀察得來的事實不可以適合於創造論的模式。所以，兩者間唯一客觀的抉擇是看那一個模式需要最少的修正而能合乎事實與預測。</p>
              <p className="text-gray-700 leading-relaxed mb-5">創造論者深信，如果能照此步驟細心的推敲，創造模式比進化模式更加切合事實。進化論者當然不以此為然。但無論相信那一個，人人都應有事實的資料來衡量此兩種模式，而不是僅僅衡量一個模式。後者是洗腦，而非用腦！本書餘下的各章主要是比較此二模式，使用本書的教師與學生都應清楚了解此兩模式的來龍去脈、與它們的含意及影響。</p>

              <h4 className="font-semibold text-red-700 mb-3">㈠ 進化模式</h4>
              <p className="text-gray-700 leading-relaxed mb-3">進化論體系企圖以今日的自然定律與現象來解釋萬物的起源、演變與意義，不考慮創造主或外在的特殊活動，或外來的過程的可能，宇宙的一切都是藉其內在的屬性自行進化到高等的階層（從原子進化到人類）。</p>
              <p className="text-gray-700 leading-relaxed mb-3">要證實這點是進化模式的主要內含，在此特抄錄數位被認為權威的進化論者的看法：</p>
              <div className="space-y-2 mb-4">
                {[
                  ['「大多數知識豐富的人們，現在都把宇宙裏的一切──從天體到人類──是由進化的過程發展而來，而且仍在繼續進化中這點，認為是事實而予以接受。」（註11）'],
                  ['「進化包括宇宙所有各階段的發展：天體、生物、人類或文化的發展，……生命是從無生命之物進化而來，而人是生命進化的產物。」（註12）'],
                  ['「進化從廣義講，可說是一個在時間上有方向而又不能逆轉的過程，在此過程中，品種逐漸增多，其產物逐漸由簡趨繁。我們現有的知識誠然迫使我們把宇宙萬物都看為進化──一個自行變化的過程。」（註13）'],
                  ['「生物進化可以不用借助於創造主或外來的籌劃者來解釋。也沒有證據顯示各不同品種生物的進化過程是受任何特殊活力或內在能量而促成。」（註14）'],
                ].map(([q], i) => (
                  <div key={i} className="border-l-4 border-red-300 pl-3 bg-red-50 py-2 pr-3 rounded-r">
                    <p className="text-gray-700 text-sm">{q}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">所以，進化是說與生俱來便有自給自足的宇宙，其中具有自生自長的律，可以使一切都發展成更高層的組織。核子、中子、電子等進化為各種元素，各種元素進化成化合物，化合物進化成簡單的生命，簡單的生命進化成複雜的生命，複雜的生命進化成人類。</p>
              <p className="text-gray-700 mb-1">總括而言，進化是：</p>
              <ul className="text-gray-700 space-y-1 ml-4 mb-5">
                {['⑴ 自然而然的', '⑵ 自給自足的', '⑶ 沒有目的的', '⑷ 有方向的', '⑸ 不可逆轉的', '⑹ 全宇宙性的', '⑺ 繼續不斷的'].map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h4 className="font-semibold text-green-700 mb-3">㈡ 創造模式</h4>
              <p className="text-gray-700 leading-relaxed mb-3">與進化模式針鋒相對的創造模式是以特殊創造為主體。創造模式是：⑴超自然的；⑵由外來力量決定的；⑶有目的的；⑷已完成的。和進化論一樣，創造模式也可應用在整個的宇宙中，它也是不可逆轉的，有方向的，但是它的方向是從複雜而日趨簡單，而非從簡而繁的。最初完成的創造是盡善盡美的，然而卻每況日下。</p>
              <p className="text-gray-700 leading-relaxed mb-3">創造論假設在開始有一段特殊創造的期間，在那段時間裏，所有自然界的基本定律及生物，包括各類主要的動植物以及人類，都是藉特殊創造和整合的過程所造成，此過程目前已不再運行。一旦創造完成，此過程就被護持 (Conservation) 程序所代替，後者是創造主為維持祂所創造之物所設計的。</p>
              <p className="text-gray-700 leading-relaxed mb-5">在這完全的創造、繼而護持的基本概念之外，創造模式也包含一個衰退的基本原則 (Principle of disintegration)，因為從原來盡善盡美的創造起，若發生過任何變化，一定是趨向不完美的方向。再者，地殼過去曾有大變動的證據，似乎也支持創造以後的全球性大災難。</p>

              <p className="text-gray-700 leading-relaxed mb-3">兩個模式可以簡單地加以比較如下表：</p>
              <div className="overflow-x-auto mb-5 rounded-lg shadow-sm">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-indigo-700 text-white">
                      <th className="border border-indigo-600 px-4 py-2 text-center w-1/2">進化模式</th>
                      <th className="border border-indigo-600 px-4 py-2 text-center w-1/2">創造模式</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['仍在進行中的、自然的起源', '已完成了的、超自然的起源'],
                      ['不斷地從簡而繁', '不斷的從繁而簡'],
                      ['地球的歷史完全以古今一致說來解釋', '地球的歷史以大天災說來解釋'],
                    ].map(([evo, cre], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-indigo-50'}>
                        <td className="border border-indigo-200 px-4 py-2 text-center text-red-600">{evo}</td>
                        <td className="border border-indigo-200 px-4 py-2 text-center text-green-700">{cre}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 leading-relaxed mb-3">前面提到，這兩個模式可以用來「預測」資料，看看何者能預測得更直截了當。要如此行，應該先想像進化論者及創造論者在事前都不知道能發現什麼資料，他們雖不知道會找到什麼，但卻各按自己的模式大膽地預測。下表列出了對一些重要事項的兩種不同的預測：</p>
              <div className="overflow-x-auto mb-4 rounded-lg shadow-sm">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-indigo-700 text-white">
                      <th className="border border-indigo-600 px-3 py-2 text-left w-1/3">事　項</th>
                      <th className="border border-indigo-600 px-3 py-2 text-center w-1/3">進化模式的基本預測</th>
                      <th className="border border-indigo-600 px-3 py-2 text-center w-1/3">創造模式的基本預測</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['自然律的結構', '不斷的改變', '不變'],
                      ['天體宇宙 (Galactic universe)', '天體改變', '天體不變'],
                      ['星的結構', '星改變成其他種類', '星不變'],
                      ['其他的天體', '增長', '壞損'],
                      ['岩石的形成', '每「時代」不同', '各「時代」類似'],
                      ['生命的出現', '生命從無生物進化而來', '生命必須從生命而來'],
                      ['生物的序列', '各生物延連相關', '各「類」生物各從其類'],
                      ['各「類」生物的出現', '新「類」不斷出現', '無新類出現'],
                      ['生物的突變', '有益的', '有害的'],
                      ['天擇', '創造性的現象', '護持性的現象'],
                      ['地球的年齡', '極古老', '可能很年青'],
                      ['化石記載', '無數的中間型', '有系統的缺環'],
                      ['人的出現', '經由猿與人的中間型', '無猿與人的中間型'],
                      ['人的天性', '在程度上較動物優異', '在性質上較動物優異'],
                      ['文化的起源', '緩慢而逐漸的', '與人同時開始'],
                    ].map(([item, evo, cre], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-indigo-50'}>
                        <td className="border border-indigo-200 px-3 py-2 font-medium text-gray-700">{item}</td>
                        <td className="border border-indigo-200 px-3 py-2 text-center text-red-600">{evo}</td>
                        <td className="border border-indigo-200 px-3 py-2 text-center text-green-700">{cre}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">請注意上表是根據基本模式所作的預測，這兩個基本模式的定義已在前面詳加闡明。這些基本模式可以根據某些新情況而繼加次要的假設。譬如說，基本的進化論雖然可加以擴大以包括有益的以及有害的突變，但是這並不是進化論基本觀念的自然預測。如果上表中進化論的「預測」真正在自然界中觀察到的話，當然，它們會被熱烈地宣稱為進化模式的強有力的肯定證據。這一點說明了上表中把這些進化論的基本預測列入是正確且恰當的。</p>
              <p className="text-gray-700 leading-relaxed">上表列舉的各項預測僅包括可以用來分辨兩個模式的一些事項。其中幾項將在以後作詳盡的討論。在此請注意的是，創造論者認為創造模式的預測較進化模式的預測更能符合自然界觀測到的事實。進化論者必須要解釋這些事實，但是創造論者卻預測了這些。</p>
            </div>

            {/* 四 */}
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">四、創造模式的優點</h3>
              <p className="text-gray-700 leading-relaxed mb-3">對學生與教師而言，正確地同時研究創造與進化兩模式是有很多益處的。令人詫異的是許多科學家及教師對此合理又有益的提議竟加以反對。（舉例說，當美國加州教育廳在考慮是否應將創造論和進化論並列在科學教科書中時，美國生物學教師學會、美國科學推進學會及國家科學院等集團，均加以壓力，予以反對。）茲將其益處陳列於下：</p>
              <div className="space-y-3 mb-5">
                {[
                  ['一', '當學生比較這兩個重要的模式時，他勢必思考推敲。'],
                  ['二', '創造論與孩子內在的思想與每天的經驗相符合，所以對他的心理健康有益。從他自己的切身經驗裏，他知道房子必須要有造房子的人，鐘錶必須要有鐘錶匠，當他繼續研究更錯綜複雜的人體，或植物的環境學時，如果有人告訴他這一切都是不可理喻的偶然產物，他一定會覺得這話十分不合情理。'],
                  ['三', '科學發明的最大喜樂是找到大自然程序與結構的美麗與規律，當他感到（正如大科學家牛頓及凱伯勒 Kepler 所見證的）他不過是在「照上帝的思想而思想時」，樂趣更昂然，這種喜樂會較其他任何方法更能引起他對科學的喜愛與熱忱。'],
                  ['四', '在德行及勤奮上，在誠實與待人上，沒有比深知有一位關懷人的創造主，人人都得向祂交待，更能激發精益求精之心。這一點對學生與教師皆然。'],
                ] .map(([num, text], i) => (
                  <div key={i} className="flex gap-3 items-start p-3 bg-blue-50 rounded-lg">
                    <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">{num}</span>
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">在公立學校裏，進化論與創造論應同樣地教授，因為班上納稅的孩子們的家長們擁有兩種的看法。如果僅僅教進化論的話，他們理應創辦私立學校來專教進化論。</p>
              <p className="text-gray-700 leading-relaxed mb-3">同樣的，私立的基督教學校主要的目的是教導創造論為真正起源的信仰，這也是他們立校的基礎。然而，這並不是說，教會學校裏就不教授進化論。由於他們將生活在一個被進化論哲學控制的社會裏，他們誠然應該熟知進化論的觀念與證據，同時，他們也應該知道這些觀念與證據的錯誤與曲解，以及創造論的依據何在。</p>
              <p className="text-gray-700 leading-relaxed mb-3">完成這個目標最有效的方法也許是先以純科學的立場來評判這兩個起源的模式，按照推薦給公立學校的方式先行之於教會學校。許多私立教會學校的學生也許在進入教會學校以前，已在公立學校受了進化論思想的灌輸，他們首先必須要破除進化論是科學、創造論是宗教的根深蒂固的思想。這點可以由徹底地進修科學創造論，一點一點地與進化論模式相比較而改過來。</p>
              <p className="text-gray-700 leading-relaxed mb-3">為此之故，本書以下的六章，以及第一章的大部份（普通版與教科書版是盡同的），對起源的主要各點及早期的歷史，均是從科學立場來評價的，完全不引用聖經。結果是，從每個角度來看，創造模式確是比進化模式為優。本書的最後一章才以聖經的啟示對創造模式予以更深刻的鑑定，整個起源與演變的問題才用聖經與神學的角度來討論。學生由此可以融滙貫通令人滿意的世界觀，此世界觀是以他個人的創造主與救主、主耶穌基督為中心的。</p>
              <p className="text-gray-700 leading-relaxed mb-3">要強調的是，這樣的前後次序的排列並不是因為科學的資料比聖經的訓示更為可靠。相反的，正因為聖經的啟示是有絕對的權威性而且明晰易察，因此，當科學的事實被正確地解釋，必能合乎聖經的見證。科學的事實是絲毫不可能與聖經相衝突的，所以吾人不需要害怕，當以眞正的科學比較兩個起源的模式時，其結論會有任何一點對進化論有利。</p>
              <p className="text-gray-700 leading-relaxed">然而，如果教師寧願先樹立聖經的立場，然後討論各科學的論點，則第八章「聖經的創造論」是完整的一章，可以在其他各章之前先研討。無論是從所講的「自然啟示」，或從明顯的聖經啟示來研究，其見證是一致的：「……應當敬拜那創造天、地、海和眾水泉源的。」（啟示錄十四章七節）。</p>
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
                '研究起源問題在科學、社會學與個人三個層面都有不可忽略的重要性──它觸及「為什麼」與「怎麼會」這些最根本的問題，影響人的世界觀與人生觀。',
                '起源問題在科學上無法被「證明」：創造因已在過去完成而不可重演；進化因過程太緩慢而無法觀測。兩者都超出實驗科學的範疇，嚴格來說都不是可反覆試驗的科學假設。',
                '多位首屈一指的進化論科學家（Dobzhansky、Ehrlich & Birch、Medawar、Kerkut、Davis、Huxley、Watson）親口承認進化論無法用實驗驗證，是憑信心接受的理論，而非可反證的科學。',
                '「進化模式」主張：自然而然、自給自足、無目的、由簡而繁、不可逆轉、繼續不斷。「創造模式」主張：超自然、由外來力量決定、有目的、已完成，且方向從複雜趨向簡單（衰退原則），並有全球性大災難的痕跡。',
                '兩個模式對 15 個重要事項（化石記載、生命出現、人的天性、文化起源等）作出不同預測，可用三組簡單對比分辨：仍在進行 vs 已完成；由簡而繁 vs 由繁而簡；古今一致 vs 大天災。',
                '同時教授並比較兩個模式有四大益處：促進獨立思考、符合人對設計的直覺（鐘錶匠比喻）、激發科學喜樂（牛頓、Kepler 的見證）、提升道德動力。只灌輸一種觀點是洗腦而非用腦。',
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
              <h4 className="font-semibold text-indigo-700 mb-2">「科學」的邊界：Karl Popper 的可反證性原則</h4>
              <p className="text-gray-700 leading-relaxed">哲學家 Karl Popper 提出，一個理論必須是「可反證的」(falsifiable) 才算科學假設——即存在可能推翻它的觀察。弔詭的是，Ehrlich 與 Birch 已承認進化論「無法以任何可能的觀察所駁斥」，意味按 Popper 的標準，進化論本身也不符合嚴格的「科學理論」定義。本書的論點因此成立：創造論與進化論在「不可反證」這一點上是對等的，都需要信心，不應一方被稱為科學、另一方被貶為宗教。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「科學模式」方法的歷史傳統</h4>
              <p className="text-gray-700 leading-relaxed">科學史上，面對兩個競爭理論時，科學家比較哪個需要更少的特設假定 (ad hoc assumptions)。托勒密的地心說需要越來越複雜的「本輪」才能解釋行星軌道；哥白尼的日心說則更為簡潔。本書所用的「兩模式比較法」具有同樣的方法論精神：不聲稱能「證明」創造論，而是主張在解釋化石缺環、熱力學定律、自然律恆定等現象時，創造模式需要更少的額外解釋。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">創造研究社 (ICR) 的科學背景</h4>
              <p className="text-gray-700 leading-relaxed">本書由亨利·莫瑞士博士 (Dr. Henry M. Morris) 主導的創造研究社 (Institute for Creation Research) 出版。ICR 匯聚物理學、生物學、地質學、太空科學等領域的博士學者，旨在以純科學角度論證創造論。書中提到（註9）今日有成千的科學家摒棄進化論，表明科學界並非鐵板一塊支持進化論；支持創造論的學者具備同等嚴格的學術訓練，這使「創造論是宗教、進化論是科學」的二元標籤站不住腳。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">起源信念如何塑造整體世界觀</h4>
              <p className="text-gray-700 leading-relaxed">本章指出，一個人對起源的看法必然影響其對歸宿的信念——這是一個深刻的哲學連鎖效應。進化論世界觀蘊含：宇宙無目的、人是偶然的產物、道德是相對的。創造論世界觀蘊含：宇宙有設計者、人是按神的形象被造、道德有客觀基礎。這兩種世界觀對教育、倫理、家庭與社會政策的影響截然不同，這也是莫瑞士強調起源議題不僅是科學問題，更是關乎整個人生態度的根本原因。</p>
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
              '書中說「一個人對他自己起源的看法必然會影響到他對自己歸宿的信念」。你同意嗎？你自己的起源觀如何塑造了你對人生目標與意義的看法？',
              '書中說科學無法證明創造論，也無法證明進化論，兩者都需要「信心」，且「信心是健康心理的必要條件」。這個說法讓你感到驚訝嗎？這如何改變你看待「科學」與「信仰」關係的方式？',
              'Dobzhansky、Ehrlich、Medawar、Watson 等知名進化論學者都承認進化論有無法驗證的局限。這些是進化論陣營自己的人說的話，你對此有何感想？這是否動搖了你對「進化論是科學事實」這個觀念的看法？',
              '在 15 項預測的比較表中，你認為哪幾項對比最令你印象深刻？為什麼這幾項最觸動你？',
              '書中說創造論與孩子內在的經驗相符——「房子必須要有造房子的人，鐘錶必須要有鐘錶匠」。在你的生命經歷中，有哪些事讓你直覺感受到有一位設計者的存在？',
              '書中指出，若公立學校只教進化論，「他們理應創辦私立學校來專教進化論」。你如何看待在教育中同時呈現兩種起源模式的提議？在你的教會或家庭環境中，這樣的教導是否可行？',
              '本書的策略是「先純科學、後聖經」，讓創造論先在科學場域站穩腳跟。你覺得這個策略對向未信者解釋信仰有什麼參考價值？你個人更傾向「先科學」還是「先聖經」？',
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
              <h4 className="font-semibold text-green-700 mb-2">🔍 建立「兩模式比較」的思考習慣</h4>
              <p className="text-gray-700 mb-2">每當遇到有關起源、生命、宇宙的議題時，照書中建議的方式同時問：「如果進化論是對的，這個現象應該怎樣？如果創造論是對的，又應該怎樣？」</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>讀新聞或科普文章時，留意是否預設了進化論的立場</li>
                <li>對孩子或朋友解釋某個自然現象時，試著加入「設計者」的角度</li>
                <li>記下一個本週讓你感受到「設計之美」的自然現象</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 認識書中引用的科學家</h4>
              <p className="text-gray-700 mb-2">從本章引用的七位進化論科學家（Dobzhansky、Ehrlich、Medawar、Kerkut、Davis、Huxley、Watson）中，選兩位了解他們的背景與貢獻，體會他們為何在科學成就之外仍誠實承認進化論的局限。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>思考：這些科學家的誠實對你的信仰有什麼鼓勵？</li>
                <li>準備一個簡短的口頭分享，告訴家人或查經班你的發現</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💬 用「鐘錶匠比喻」與下一代對話</h4>
              <p className="text-gray-700 mb-2">找一個機會，以書中的鐘錶匠比喻向孩子或年輕人介紹「設計需要設計者」的概念，引導他們比較兩個模式，而不是直接給答案。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>問：「你覺得鐘錶是自己形成的，還是有人做的？那宇宙呢？」</li>
                <li>不要急於辯論，讓他們的好奇心自然引出思考</li>
                <li>強調：思考本身就是榮耀神的行動</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 整理自己的信仰根基</h4>
              <p className="text-gray-700 mb-2">用紙筆寫下：我相信創造論的三個最主要理由是什麼？這些理由是科學的、哲學的、還是信仰的？若有人質疑，我如何以誠實、有根據的方式回應？</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic text-sm leading-relaxed">「主啊，感謝祢創造了一個有秩序、有規律、充滿設計之美的宇宙。求祢賜我智慧，能在充滿進化論思想的時代中，以謙遜和誠實的態度思考起源的問題，讓我的信心不是盲目的，乃是建立在對祢創造之工的仔細觀察與思考上。也求祢幫助我，能把這份認識傳遞給下一代，讓他們在真理中建立穩固的世界觀，認識那位應當敬拜的──創造天、地、海和眾水泉源的真神。奉主耶穌的名禱告，阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
