import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch27() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第二十七章</h1>
        <h2 className="text-xl font-semibold text-gray-700">該隱的後裔</h2>
        <p className="text-gray-500 mt-1">該隱與妻子同房，他妻子就懷孕，生了以諾。該隱建造了一座城，就按著他兒子的名將那城叫做以諾。……拉麥對他兩個妻子說：亞大、洗拉，聽我的聲音；拉麥的妻子，細聽我的話語：壯年人傷我，我把他殺了；少年人損我，我把他害了。若殺該隱，遭報七倍，殺拉麥，必遭報七十七倍。創世記四17-24</p>
      </div>

      {/* 正文 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">正文</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">前言</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                該隱是伊甸園外第一個出生的人，他成為撒旦的後裔，殺了兄弟亞伯，被神刑罰流亡到更東邊的地方。若按照神在洪水之後給挪亞的吩咐，殺人當償命。但在起初的時候，神沒有如此嚴格。一方面是神的恩慈，希望人再有機會悔改；另一方面因律法功能弱，就造成人類社會快速崩潰。洪水之後，恩慈與公義兼顧，使社會還能維持到現在。但還是有比較恩慈的例子，例如摩西赤手空拳打死一位埃及人，成為埃及的通緝犯（出二11-12），逃亡四十年後被神呼召出來事奉。保羅抓許多基督徒到公會，讓公會定他們死罪（徒八3），但神對他存忍耐，向他顯現，悔改後被神使用（徒九1-7）；但他也付了代價，在往後的日子中，他為主所受的苦比其他使徒更多。若該隱願悔改，也能像摩西、保羅，被神使用；但若不悔改，就會惡性循環，更加遠離神。
              </p>
              <p className="text-gray-700 leading-relaxed">
                該隱的外在生活是流離飄盪，他的內在生命則失去了根──失去神的根，失去家的根，失去地的根，因此開始了一個沒有神的人本社會。該隱的後裔有城市、農牧、藝術、科技等發展，並啟動了多妻的模式，因為缺乏神的愛，容易想要更多的妻子；也因為沒有神，活在自我中心裡面，所以對別人會有強烈的報復行動。可歸納有四項人本的文化特色──1.立名文化，2.多妻文化，3.科技文化，4.報復文化。這個社會以記念自己為榮耀，以多妻婚姻為享樂，以世俗科技為倚靠，以強烈報復來生存，但是立名之城終會倒塌，多妻享樂終會衰退，世俗科技終會消逝，人的報復終將停止，人就一無所有了。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、立名文化</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記四17：「該隱與妻子同房，他妻子就懷孕，生了以諾。該隱建造了一座城，就按著他兒子的名將那城叫作以諾。」「以諾」的意思是「獻身的」，洪水之前有兩個以諾，一個是該隱的兒子，他獻身給人；一個是塞特的第六代子孫，也是瑪土撒拉的父親，他獻身給神，二者有很大的不同。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                以人名為城的名，這是人本主義的特色，是以人為中心的作法。該隱不敬畏神，也不記念神，因此轉為記念人。「記念」原是件好事，但我們當記念的是神或與神有關的事，而不是記念人。該隱及他的後裔，當記念神以六天創造世界，第七天休息，定第七天為安息聖日；當記念神設立伊甸園，裡面有生命樹，要供應人生命；當記念神咒詛了蛇，並應許女人的後裔要傷牠的頭；當記念神曾經殺羊做皮衣給亞當、夏娃穿；當記念神悅納亞伯獻羊為祭；當記念神寬容該隱，立記號來保護他。……
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                摩西之後的以色列人，當記念神曾經將他們從埃及拯救出來（申五15），他們一直如此做。新約時代的基督徒，當以聖餐記念耶穌為我們釘十字架，死而復活，且要再來（林前十一23-26），這是我們正在實行的。因此以神為中心的記念才是正確的，但該隱後裔的特色乃是以人為中心，記念人而不記念神。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                人離開神失去永恆的生命，但仍有某種對永恆的渴望，因此會想要長生不老，或揚名後世。例如：秦始皇派遣童男童女去尋找長生不老藥，期待能長生不老。秦始皇的陵寢和埃及法老的金字塔都花費了許多人力、物力、財力，也犧牲了許多人的性命，只為了追求自己虛假的永恆。這是偏離神，以人為中心的作法。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                人渴望永恆的這種天性，是從神而來的。然而人要永恆，不應跟地連結，乃應跟天連結，我們的名字要記在天上的生命冊，才會有永生。我們在地上記念神，神在天上會記念我們，並且讓我們將來能去新天新地，這是真正美好的永恆。
              </p>
              <p className="text-gray-700 leading-relaxed">
                當人在地上記念人時，後代子孫也會漸漸將被記念的人當作神來拜，這就從立名文化發展為造神文化、偶像文化，因此有越來越多的人造神明，如媽祖、關公、文昌君、三太子……等等。西方也有許多的神話故事及偶像崇拜，像太陽神、亞底米女神、巴力……等等，其來源也是從立名文化發展為造神文化。人離開神，又想要有神，就會以受造物為神，成為偶像文化，並以此假神來排斥、抵擋真神。使徒保羅在以弗所的福音工作相當成功，許多人信主，但因為亞底米女神廟的生意大受影響，幾乎全城都起來要捉拿保羅（徒十九23-34）。華人福音難傳，也是因為假神、偶像崇拜已經根深蒂固，難以撼動。這個人本的文化從該隱就開始了，以後繼續影響世世代代。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、多妻文化</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記四18-19：「18以諾生以拿；以拿生米戶雅利；米戶雅利生瑪土撒利；瑪土撒利生拉麥。19拉麥娶了兩個妻：一個名叫亞大，一個名叫洗拉。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                該隱的第五代子孫拉麥，娶了兩個妻子。在這之前，沒有記載有關多妻的事，合理推論，多妻文化是這時候才發展出來的。人剛墮落，還維持神造人的時候所命定的一夫一妻模式，這原是最好的模式。但是當人多起來，部分人有了比較大的權勢、地位、財力，就會引發情慾，想要有更多的妻子。一方面是性慾的擴張，一方面是權力的擴張，這跟墮落後男人轄管女人有關。這件事也為創世記六1-7的事埋下伏筆，那裡說到，神的兒子們看見人的女子美貌，就隨意挑選，娶來為妻，這事代表情慾氾濫，最終引發洪水審判。神的兒子們，很可能是指掌權者，是世界各地君王等級的人，第三十章會詳細討論。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                歷代以來，不管哪個帝國或國家，君王的妻妾最多，因為他有最大的權勢、最高的地位。其次是有權、有勢的大臣、官員，以及擁有許多錢財的富人，都是比較容易多妻的。以人權來講，這對於女人當然是不公平的。女人不是奴隸，身為妻子，需要丈夫完整的愛，因此，唯有一夫一妻才是合理的婚姻模式。多妻文化，乃是人本文化的第二個特色，代表人偏離神的旨意。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                不少人談論亞伯拉罕多妻、雅各多妻、大衛多妻，既然他們都是信神的人，是否代表我們這些信神的人也可以多妻呢？簡單回答這問題，多妻是來自人與神關係疏遠，一夫一妻的愛不夠滿足他，所以想要多妻。舊約時代的聖徒雖然信神，但與神的關係並沒有完全恢復，心仍然是硬的。參看以下兩處經文：
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                以西結書卅六26-27：「26我也要賜給你們一個新心，將新靈放在你們裡面，又從你們的肉體中除掉石心，賜給你們肉心。27我必將我的靈放在你們裡面，使你們順從我的律例，謹守遵行我的典章。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                馬太福音十九4-9：耶穌回答說：「那起初造人的，是造男造女，並且說：『因此，人要離開父母，與妻子連合，二人成為一體。』這經你們沒有念過嗎？既然如此，夫妻不再是兩個人，乃是一體的了。所以，神配合的，人不可分開。」法利賽人說：「這樣，摩西為甚麼吩咐給妻子休書，就可以休她呢？」耶穌說：「摩西因為你們的心硬，所以許你們休妻，但起初並不是這樣。我告訴你們，凡休妻另娶的，若不是為淫亂的緣故，就是犯姦淫了；有人娶那被休的婦人，也是犯姦淫了。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                耶穌清楚提到起初神的創造，是一夫一妻，二人一體，不可休妻。休妻與多妻的原因，都一樣是由於心硬。當人有了肉心，就能夠不休妻，也能重建一夫一妻的制度，這是從耶穌基督的救恩而來的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                其實亞伯拉罕等人的多妻，都帶來不好的效應。亞伯拉罕以埃及使女夏甲為妾，帶來紛爭，最後夏甲被休、帶著兒子以實瑪利被趕逐離開。雅各的多妻也帶來紛爭，為爭取與丈夫的關係，連親生姊妹都成為敵人。他們所生的兒子們也彼此不合，約瑟差點被哥哥們殺掉，最後被賣為奴隸，因為不是同一個母親所生。大衛的多妻更慘，押沙龍為報復妹妹被玷污而殺了不同母親的哥哥暗嫩，押沙龍在罪惡之中發展成叛變奪取王位。所羅門登基作王之前也是暗潮洶湧，大衛不同妻子的兒子想得王位，有不同的手段，大衛家中全部問題的起始點就是多妻。還有一件事，因為多妻，導致大衛與每位妻子之間的感情不專也不深，這使得他更容易受引誘，造成與拔示巴的淫亂。唯有一夫一妻的關係能建立最穩固、健康的婚姻家庭。
              </p>
              <p className="text-gray-700 leading-relaxed">
                一夫一妻制度的恢復，是基督的工作。他使我們石心變肉心，有聖靈重生的新生命，能在聖靈裡與神有足夠的親密，這才使人能夠滿足於一夫一妻，並重新發展出神原先就設計的一夫一妻婚姻制度。過程中還有教牧書信的教導提供助力，如提摩太前書三2、12所說：「2作監督的，必須無可指責，只作一個婦人的丈夫，……12執事只要作一個婦人的丈夫，好好管理兒女和自己的家。」這不是說，當時所有的信徒都必須一夫一妻，因為是在新舊約時代的過渡期。若有人已經多妻，可保持原有的關係。但為了作榜樣，開啟新世代的模式，長老、執事必須原來是一夫一妻的人。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、科技文化</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記四20-22：「20亞大生雅八；雅八就是住帳棚、牧養牲畜之人的祖師。21雅八的兄弟名叫猶八；他是一切彈琴吹簫之人的祖師。22洗拉又生了土八該隱；他是打造各樣銅鐵利器的（或作：是銅匠鐵匠的祖師）。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                該隱的後裔在畜牧、樂器、科技方面多所發展，他的第六代子孫雅八是住帳棚、牧養牲畜之祖，猶八是彈琴吹簫之祖，土八該隱是銅匠、鐵匠之祖。該隱的第一代至第五代子孫，還沒有發展出來這些民生科技，到了第六代就成熟了，陸續有了各種比較進步的各行各業。他們發展畜牧、音樂、科技，是為了生存所需，也是要彌補失去神以後的空虛與不安，想藉著地上的成就、資產，來建立成就感、安全感。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                原則上他們發展出來的文化、科技都是中性的，沒有絕對的好或不好，但若使用在與神無關的事上，很可能就把人帶得離神更遠。例如，一個信靠神的人會用音樂來敬拜神，但不信靠神的人則會用音樂來拜偶像或滿足自己，以音樂替代神。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                跟塞特的後裔相對照會發現，這些發展似乎都不是塞特後裔所看重的。該隱的後裔比較注重民生科技的發展，塞特的後裔則比較注重養育兒女。現今世代的發展，與該隱的後裔很像，將養育兒女變成不重要、不必要的。而將民生科技的發展作為主要的，甚至是唯一的生活內容。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這樣會產生不平衡的問題，民生科技是支持系統，使人可以用來培養更多下一代的人才。但若減少生養兒女，低於人口替代率所需的生育率2.11（這裡說的生育率，是指平均一個婦女一生所生的孩子數量，若有兩個孩子長大繼續結婚生養，就能使人口保持平衡，多出的0.11是由於有些孩子可能幼年夭折或婚前因傷病死亡），只偏重發展支持系統，這些支持系統變成只是在提高所謂的生活品質，且漸漸比較多用來養活老人，而比較少用來養育新生兒，因為新生兒沒有生出來。於是人口就會漸漸減少甚至絕跡，這些支持系統就成為枉然。所以應當有一半的人力來生養下一代，一半的人力來作支持系統，類似華人文化傳統所說的男主外，女主內，而不是所有人都去外面工作。這不是說女性不能在職場發揮，主要是生涯規劃及時間比例的問題。人們若能正確認知生養兒女的重要，女性求學完畢，可以先有幾年在職場，但不能太久，接著需要結婚生子，有幾年的時間較多放在生養兒女的事上，等到兒女都進學校了，那時可以重新回到職場。父親雖然以職場為主，但也要花一些時間在家裡，與兒女互動，包括談話、禱告、講故事給孩子聽、教孩子做家事、帶孩子去運動、郊遊等，孩子的身心靈才會完整發展。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                全國的生育率必須達到2.11，若低於2.11，國家應當有效進行調節，除了透過學校教育、職場再教育，長期教導婚姻家庭的重要性與實用知識之外，可提供親自養育兒女的婦女一份薪資，如同給小學老師一樣，使人知道家庭主婦養育兒女與老師教導學生是同等重要的，甚至更重要。因為若沒有母親先把孩子生養出來，怎會有學生來讓你教呢？
              </p>
              <p className="text-gray-700 leading-relaxed">
                教會建造也是如此，若多數人都在做事工，例如敬拜、司琴、音控、招待、主日學、愛宴、行政等，而只有少數人在做屬靈的生養，包括關懷未信者、個人佈道、福音小組、培育門徒等，那麼最後大家都成了老信徒，沒有新人傳承。這是教會版本的少子化、老化，最終教會也會衰微、瓦解。因此我們不能只是會帶敬拜、教主日學、做愛宴，還要能領人歸主，不斷的產生新門徒，並幫助他們也能再產生新門徒。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">肆、報復文化</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記四23-24：「23拉麥對他兩個妻子說：亞大、洗拉，聽我的聲音；拉麥的妻子，細聽我的話語：壯年人傷我，我把他殺了；少年人損我，我把他害了。24若殺該隱，遭報七倍，殺拉麥，必遭報七十七倍。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這樣強烈報復的情況在洪水之前和洪水之後都一樣，所以有人說：「人類的歷史是戰爭的歷史。」西方、東方也都一樣，華人的歷史也是戰爭的歷史，而戰爭的起因都是報復。在武俠片中，處處可見互相報仇的情節：「你殺我的父親，所以我要殺你；而後你的兒子會來殺我，我的兒子再去殺你的兒子……。」如此冤冤相報，沒完沒了。早期台灣漢人主要來自泉州和漳州，這兩個族群都是閩南人，但也互相爭鬥，產生有名的泉漳械鬥。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                為什麼人類會這麼自我保護和強烈報復呢？最大的原因就是人離開了神，離開了神的保護，使得人類需要強烈的來保護自己，並且對人報復；很怕若不報復反擊，對方就會以為我好欺負，而繼續傷害我。但我們若有神的保護，就不需要這麼強烈的要來保護自己，因為神會保護我。我們的安全感要建立在神身上，而不是人身上。否則人的報復一定會超過應有的程度，造成惡性循環。正像拉麥對妻子所說的：「23……壯年人傷我，我把他殺了；少年人損我，我把他害了。24若殺該隱，遭報七倍，殺拉麥，必遭報七十七倍。」（創四23-24）
              </p>
              <p className="text-gray-700 leading-relaxed">
                約瑟是倚靠神的人，他被哥哥出賣，沒有報復，神為他申冤，使他成為宰相。神的申冤不但沒有傷害任何人，還讓約瑟成為祝福全族的人，也使傷害他的哥哥們悔改了。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                廿一世紀的今天，該隱後裔的四種人本特色正呈現在我們當中，人們建造城，記念人；形式上雖然多妻的不多，但婚前、婚外性關係很普遍，是另一種多妻；發展科技，注重民生；自我保護，強烈報復，都跟該隱的後裔一樣。但這些只帶來更大的壓力和痛苦，沒有帶來快樂。人必須回到神面前，照著神的設計來生活，記念神、榮耀神、不高舉人，委身建立一夫一妻關係，注重生養多過民生科技，倚靠神保護且能饒恕人，才會有真正的豐盛滿足與平安喜樂。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 重點整理 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-sky-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">重點整理</span>
          </div>
          {expanded['summary'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['summary'] && (
          <div className="p-5 bg-white">
            <ul className="space-y-3">
              {[
                '該隱的後裔開始了一個沒有神的人本社會，有四項文化特色：立名文化、多妻文化、科技文化、報復文化——以記念自己為榮耀、以多妻婚姻為享樂、以世俗科技為倚靠、以強烈報復來生存。',
                '立名文化以人為中心記念人而不記念神，並漸漸發展為造神文化、偶像文化；人對永恆的渴望是從神而來，但應跟天連結（名字記在生命冊），而非跟地連結。',
                '多妻文化從該隱第五代拉麥開始，源自人與神關係疏遠、心硬；耶穌指明起初神的創造是一夫一妻、二人一體；亞伯拉罕、雅各、大衛的多妻都帶來紛爭與敗壞；一夫一妻制度的恢復是基督使石心變肉心的工作。',
                '科技文化本身是中性的，但該隱後裔以民生科技彌補失去神的空虛不安；現今世代重科技輕生養，如同該隱的後裔；家庭與教會都需要平衡「支持系統」與「生養傳承」，否則走向少子化、老化與瓦解。',
                '報復文化源於人離開神的保護，只能自我保護、冤冤相報；安全感要建立在神身上——約瑟不報復，神為他申冤，使他成為祝福全族的人。',
                '今日世界正重演該隱後裔的四種文化；人必須回到神面前照神的設計生活：記念神、委身一夫一妻、注重生養、倚靠神保護且饒恕人。',
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

      {/* 分享題目 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-yellow-50 hover:from-amber-100 hover:to-yellow-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">分享題目</span>
          </div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && (
          <div className="p-5 bg-white space-y-4">
            {[
              '該隱的後裔有哪四種文化？今日的社會有何相似之處？',
              '科技是有用的，但如果不是為榮耀神、被神使用，就會使人驕傲而遠離神。試著舉些你所知道的實例。',
              '在整體生活中，當如何使家中的生養與社會的工作保持平衡？在教會的牧養與事工中，當如何保持平衡？請各人分享自己的應用。',
            ].map((q, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0 text-lg">{i + 1}.</span>
                <p className="text-gray-700 leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
