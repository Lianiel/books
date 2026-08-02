import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book34Ch2() {
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
        <p className="text-cyan-700 font-semibold tracking-wide mb-1">第一篇　成長的三個因素</p>
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-700 to-teal-700 bg-clip-text text-transparent">第二章</h1>
        <h2 className="text-xl font-semibold text-gray-700">時間</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-cyan-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-cyan-50 to-teal-50 hover:from-cyan-100 hover:to-teal-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-cyan-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 mb-2">
              <p className="text-gray-700 italic">「一個人有一棵無花果樹，栽在葡萄園裡。他來到樹前找果子，卻找不著。就對管園的說：『看哪，我這三年來到這無花果樹前找果子，竟找不著，把它砍了吧！何必白佔土地呢？』管園的說：『主啊！今年且留著，等我周圍掘開土，加上糞，以後若結果子便罷，不然再把它砍了。』」（路十三：6-9）</p>
            </div>
            <p className="text-gray-700 leading-relaxed">
              在耶穌這個比喻中，樹主人期望果子。三年之後，樹還不結果子，主人不但失望，還狂怒地命令「把它砍了」！
            </p>
            <p className="text-gray-700 leading-relaxed">
              這也是我們常做的事。當我們檢視自己的失敗，在光中顯示「不結果子」的事實時所做的。我們看看自己（樹），期望保守我們的婚姻完好，養育優秀的孩子，有忠誠的朋友，在工作上毫無錯失（果子）。當我們失敗，變得沮喪、懼怕、憂慮（壞果子），我們就把自己砍下來，我們說：「我應該這樣做。」「我不應該這麼生氣。」「我應該更親近人群。」「我應該完成更多工作。」「我應該像某某。」在這時候，我們自相紛爭。像樹主人要樹成長，又很快地嚴厲斷論自己，沒有花時間想想問題出在何處。我們像路得的宣教士父親一樣，以真理行事為人，卻缺了恩典，結果慘哉！
            </p>
            <p className="text-gray-700 leading-relaxed">
              有時候我們以恩典行事的人卻缺了真理。我們會說：「沒關係。」「這是我最大的努力了。」「他那樣反映，我也沒辦法。」「我沒辦法。」枯槁的樹木（不結果子）在我們生命中（葡萄園）佔領土地。我們要不就是允許人際關係、親子關係的無能感繼續腐蝕我們的生命，以致神為我們存留的果子不成熟；要不就是乾脆否認自己有問題，以致結果更糟。記得恩典缺了真理使山姆有何等的生活嗎？
            </p>
            <p className="text-gray-700 leading-relaxed">
              就某種程度而言，我們兩者都做：有時候我們大叫「把它砍掉」，有時候我們又忽視它。但有一件事是確定的：當我們忽視自己不能照神形象結果子的失敗時，或當我們因不能結果子而憤怒地大叫「砍掉它」時，我們最後都只有真理或恩典，我們無法成長。
            </p>
            <p className="text-gray-700 leading-relaxed">
              在上一章及這個比喻中，我們看到還有一個選擇：把恩典接枝到真理上，促使樹木成長。在這個比喻中，恩典和真理以「掘開土」「加上糞」來象徵。用真理的鏟子在我們四圍掘開土，挖掉雜草，割除虛假、罪和傷害，這些都會使我們心靈的園地雜亂。然後我們要加上愛和關懷的肥料，來使心田充裕。恩典與真理使我們走向正確的方向，也使我們有燃料來繼續成長及改變。
            </p>
            <p className="text-gray-700 leading-relaxed">
              但聖經告訴我們，要結果子，除了恩典和真理之外，還有第三個因素：時間。
            </p>
            <p className="text-gray-700 leading-relaxed">
              再看第八節、九節：「管園的說，主啊！今年且留著，等我周圍掘開土，加上糞。以後若結果子便罷，不然再把它砍了。」管園的表徵我們的主，是那位為我們信心「創始成終」的耶穌，祂了解祂的工作及肥料都需要時間。我們需要時間成長。而光有時間也不夠。時間必須加上恩典與真理。當我們對這三個因素正確地回應時，我們不但得醫治，並且能結果子。
            </p>
            <p className="text-gray-700 leading-relaxed">
              時間不只是神恩典的一個行動，它也給我們必要的空間。神太愛我們，以致祂不會要我們在必要之外，在罪中多待一分鐘。成長的時間不是奢侈品，是必需品。
            </p>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">一、在得贖的時間裡</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                第一對夫妻在永恆中，原本並沒有惡這件事，或說亞當和夏娃不知道什麼是惡。一切都是甚美的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經告訴我們，神「使各樣的樹從地裡長出來，可以悅人的眼目，其上的果子好作食物」。但在園子當中有兩棵重要的樹：生命樹和分別善惡樹。神告訴亞當，園中各樣樹上的果子，你可以隨意吃，只是分別善惡樹上的果子，你不可吃。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                但亞當夏娃沒有聽從神的話。他們吃了分別善惡樹上的果子，可怕的事情發生了。第一次，所有的事不再「都甚美好」。人類「認識」了善惡。希伯來文所用的「認識」和亞當「認識」夏娃的「認識」是同一個字（創四：1），是指對「認識」的一種完全的經驗。這種認識罪惡的經驗——也因此帶來痛苦——是神想保護人類不去經驗的。祂知道那會帶來傷害痛苦。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                然而夏娃被撒但引誘，吃了分別善惡樹的果子（創三：6），這第一對夫妻接受了罪惡和痛苦。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                想一下這個情況。上帝創造了完美的地方給完美的創造物永遠住在其中。忽然，罪惡出現，神怎麼辦？
              </p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「耶和華神說：『那人已經與我們相似，能知道善惡；現在恐怕他伸手又摘生命樹的果子吃，就永遠活著。』耶和華神便打發他出伊甸園去，耕種他所自出之土。於是把他趕出去了。又在伊甸園的東邊安設基路伯，和四面轉動發火焰的劍，要把守生命樹的道路。」（創三：22-24）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                神立刻起來保護人類，免於永遠的孤立和長久的痛苦。祂保護亞當夏娃不至於永遠痛苦，因此祂將他們自永恆中驅走，以基路伯保護永恆，而將他們安置在一個稱為「得贖的時間」裡，也就是我們現在生活中的時間裡。在這個時間裡，祂可以解決問題，把墮落的結果除去。祂可以贖回祂所創造的人類，在他們潔淨無瑕疵之後，重新將他們放回永恆中。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                多麼可畏的計劃！在創世記三章十五節祂甚至已將如何完成此計劃的應許暗示我們：女人的後裔要傷蛇的頭。也就是基督要勝過撒但。無怪乎希伯來書的作者說：「這麼大的救恩。」神不僅保護我們不吃分別善惡樹的果子，免得我們落入永遠的痛苦中，祂還把我們放在一個時間中來解決這個問題，以便把我們帶回與祂和好的關係中！
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                哲學家和物理學家幾世紀以來在辯論時間的性質，但為了我們的目的，讓我們把「得贖的時間」定義為「為了救贖的目的而存在的早產兒保育器」，那是一個神可以慈愛地修補錯誤的地方。那是一個罪惡暫時存在而神作工的地方。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                用另一種方法來看。神有一個生病的受造物，祂要動手術。因此，祂把我們放在「得贖時間」裡的手術室中。祂把恩典與真理的生命之血打入我們的動脈中。在手術中，祂處置罪惡，更新病人，好成為重新回到永恆中的聖潔狀態。我們不知道手術要進行多久。我們只知道神期望我們積極參與自己的手術，而我們也不會得到任何麻醉劑。這也是為什麼成為神的形像常常是痛苦的過程。
              </p>
              <p className="text-gray-700 leading-relaxed">
                得贖的時間不會永久存在。保羅說我們要善用時間，因為我們所有的不多：「你們要謹慎行事，不要像愚昧人，當像智慧人，要愛惜光陰，因為現今的世代邪惡。」（弗五：15-16）聖經告訴我們，在某一時刻，神會終止這段得贖的時間。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">二、但是為什麼要這麼久？</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                詩篇第一篇將我們比喻成一棵樹，栽在溪水旁，而我們的成長，也有不同的「季節」。有栽種的季節（春），有澆灌的季節（夏），有收成的季節（秋），有凋零的季節（冬）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                有些基督徒希望每天都是收成的季節。治療師會問：「為什麼有些人要這麼久才好？」回答在於，時間是神用來治療我們的方法。我們需要時間讓恩典與真理發生效力。這些基督徒就像沒有耐性的園主，他們叫著說「砍下來」，而使別人負著奴僕的軛。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">傳道書的作者明白凡事都有定期：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「生有時，死有時；栽種有時，拔出栽種的也有時。殺戮有時，醫治有時。拆毀有時，建造有時。哭有時，笑有時；哀慟有時，跳舞有時。拋擲石頭有時，堆聚石頭有時；懷抱有時，不懷抱有時。尋找有時，失落有時；保守有時，捨棄有時。撕裂有時，縫補有時；靜默有時，言語有時。喜愛有時，恨惡有時；爭戰有時，和好有時。」（傳三：2-8）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                萬物都有定時。保羅明白這個道理，所以他寫信給哥林多教會說：「弟兄們，我從前對你們說話，不能把你們當作屬靈的，只得把你們當作屬肉體，在基督裡為嬰孩的。我是用奶餵你們，沒有用飯餵你們，那時你們不能吃，就是如今還是不能。」（林前三：1-2）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                如果我們不知道基督徒的成長有不同階段，我們會有問題。我們必須在一個階段成熟之後，才能進入到下一個階段。而要進入下一階段，我們除了恩典與真理，一定需要時間。舉例而言，嬰兒在消化系統發展健全前，不能吃固體食物。六個月大的孩子無法把玩具收進盒子裡，因為他不會走到玩具盒那兒。房子的水泥地基需要時間凝固，樑柱才能架上去。蘋果樹要等枝幹強壯，才能承受成熟的果實。神知道發展的過程，因為是祂創造的。祂用的就是時間。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                但人常常喜歡催促。當耶穌的弟兄想說服祂離開加利利到猶太去，他們說：「叫你的門徒也看見你所行的事」，耶穌說：「我的時候還沒有到，你們的時候常是方便的。」（約七：3，6）耶穌所跟隨的是一個更大的計劃——天父救贖的計劃。祂執意不去猶太，因為猶太人想要殺祂。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                後來當耶穌教導門徒說祂「必須受許多的苦，被長老、祭司和文士棄絕，並且被殺，過三天復活」，彼得想攔阻這個計劃。耶穌用強烈的語氣責備彼得：「撒但，退我後邊去吧！因為你不體貼神的意思，只體貼人的意思。」（可八：33）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                耶穌知道祂必須經過受苦和時間的考驗。雖然耶穌是永生神的兒子，「還是因所受的苦難學了順從。祂既得以完全，就為凡順從祂的人，成了永遠得救的根源。」（來五：8-9）我們成長的模範是我們的救主。我們也必須經過受苦，經過曠野，經過時間的考驗。但人總是想要即時、快速的解決。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                想想魔鬼怎麼試探耶穌（路四）。牠以立刻解決飢餓、馬上得到榮耀、即時的安全來試探耶穌。耶穌三次都拒絕了。祂知道要得到這些，必須經由神所計劃的過程。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們常被捷徑引誘，而捷徑常等於失敗，這就是撒但的目標，撒但用馬上致富與賺錢的伎倆試探我們；而神所祝福的是長時間的誠實：「誠實人必多得福，想要急速發財的，不免受罰。」（箴二十八：20）撒但用熱情的性關係得到馬上的親密感試探我們；而神所給的是以忠誠建立的愛的關係。流行的快速減肥引誘我們，但這並不會使我們發展出維持體重所須的長期節制。藥品和酒精使我們立刻從痛苦中解脫，但並不能建立持久的品格。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在撒種的比喻中，耶穌警告我們不要作發苗最快卻沒有根的人。這些種撒在土淺石頭地上，「土既不深，發苗最快；日頭出來一曬，因為沒有根，就枯乾了。」（太十三：5-6）快速的成長而沒有確實的生根，總是表面而短暫的。深的成長總是緩慢的。心理學者常擔心有些孩童表現出來的激烈、不合年齡的行為，通常是由於太快速的成長。神的方法總是需要時間的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當人因為很深的問題來找我時，我常被提醒「需要時間」這個真理。當我做了初診，通常會告訴病人需要多長時間才能解決根本的問題。想快速解決的人通常說「那樣太久了。我沒辦法等這麼久，你能不能轉介給我一個快一點的治療師？」我通常會解釋快速的治療常常不能解決問題，當他們拒絕我，我就會介紹他們去一個能快速治療的地方。然後，過了一兩年，他們會打電話給我：「我去作了輔導，我覺得好一點了，但我的沮喪又回來了，我需要更多的幫助。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                不幸的是，這些人以為他們失敗了；事實上他們是選擇了「保證」失敗之路——要成長卻不給時間。我並非責備短期治療，它可以提供不少幫助，像理出方向及事件，以便解決問題。但真正的成長一定要花時間。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我喜歡一個古老的諺語：「兩點之間最長的距離就是走捷徑。」想要走近路，最後可能花更多時間，不如一開始就走遠路。每次當有人想「立即」得到什麼，他們通常以後會付出代價。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                屬靈的成長和情緒的成長都需要時間。而改變通常發生在一段時間之後，甚至當事人也不知道是怎樣發生的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                司坦為了不能控制爆發的怒氣而尋求治療。他為了控制脾氣已努力多年。他常悔改、禱告、查有關怒氣的經文。但他只關注於問題的徵狀，而當他改變注意力，作了一些挖得更深更廣的工作，才發現怒氣的原因而有所改變。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                司坦加入了一個治療小組。他發現組員們很接納他；他們也為相同的問題掙扎過。他們的接納使他逐漸能面對自己的本相：他內心有一些很寂寞的地方，他覺得自己不好，沒有人愛。因為他覺得這麼沒有人愛，他以替人服務來贏得別人的愛。他覺得他必須做家人、朋友、甚至陌生人要他做的事。很快地，他懷恨自己老是說「好」，他沒有力量拒絕別人。但當覺得被別人愛和接納時，司坦覺得自己強壯得可以對別人說「不」了。而當他的力量增加時，他就不那麼容易憤怒。他更輕鬆釋放了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                有一天司坦帶著笑容來到小組。他說：「我太太今天交待我一大堆該做的事，有一件奇怪的事發生了，我對著這張這麼長的單子發笑，我一點沒有生氣。過了一會兒，她也和我一起發笑，我不知道怎麼發生的，但就是這樣。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                司坦成長了，因為他經驗到恩典、真理，並給予時間。小組員所給的恩典，使他有一個安全之地可以對自己誠實。結果就像一個農夫，在春天的某日，驚喜地發現了初現的花苞。而這正是果實的開始——只要加上時間，適當的施肥澆灌，以及一些我們無法控制的因素。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">當司坦說，他不明白事情是怎樣改變的，我想到耶穌說到神國的比喻：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「神的國如同人把種撒在地上，黑夜睡覺，白日起來，這種就發芽漸長，那人卻不曉得如何這樣。地生五穀是出於自然的：先發芽，後長穗，再後穗上結成飽滿的子粒。」（可四：26-28）</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                這段經文對成長提出了重要的真理。成長不是靠我們的意志。我們可以用恩典、真理、時間來促進成長，但只有神使其成長。當我們沮喪時，我們無法不沮喪，我們可以用恩典、真理及時間，使我們的心靈得到滋養，然後我們會逐漸轉變到有更大喜樂的階段。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">三、好時間和壞時間</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                時間是成長的重要因素，可是有時候時間過去，我們變得更好；而有時候時間過去，我們並沒有更好，為什麼？這是因為有「好時間」和「壞時間」之分。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                只有在「好時間」，改變才會發生。「好時間」就是我們的經驗可以被恩典和真理影響的時間。如果我們把自己的一部分從時間中移開，則恩典和真理不能影響它。只要我們把自己的一部分從經驗中移開，也就是把它留在「壞時間」中，就無法有所改變。恩典和真理無法改變那些我們沒有經驗的部分。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                按才幹受責任的比喻中，告訴了我們對我們有利的時間和對我們不利的時間。有一個人要往外國去，他把家業交給僕人。一個給了五千，一個給了二千，一個給了一千。過了許久，主人回來，發現第一個僕人又賺了五千，第二個又賺了二千，第三個把錢埋在地裡，交還一千給主人。
              </p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「你這又惡又懶的僕人，你既知道我沒有種的地方要收割，沒有散的地方要聚斂，就當把我的銀子放給兌換銀錢的人，到我來的時候，可以連本帶利收回。」（太二十五：26-27）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                兩個得稱讚的僕人將才幹帶入他們的經驗及時間，他們使用了才幹。第三個僕人把才幹從經驗中移開，也使時間對它不能有所影響。他把它們埋在地裡。因此，時間不能影響才幹，時間也不能使它成長。這種情形有時也發生在我們身上。我們把自己不同的部分從時間中移開，也就是從經驗中移開，所以它們就如同埋在地裡，是在「壞時間」中。凱設玲就是個好例子。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                凱設玲是個三十一歲的律師，非常追求成就。她工作很長的時間，且自願接無酬勞的案件。她是個人人夢寐以求的好部屬。她會做老闆要求的每一件事。忽然，凱設玲被沒有什麼原因的驚慌淹沒了。只要一發生這種情形，凱設玲就無法去赴約定好的午餐會商，無法去購物，甚至無法出門。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當凱設玲到醫院來時，我們診斷她有驚慌及失調的問題。經過了幾次治療，把她內在的一些問題更顯露出來後，凱設玲開始敘述一些奇怪的感覺。她覺得自己是個青少年。她說到想出去玩，做個小孩。她也想騙過醫生護士，去和男人調情。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在治療當中，我們集中注意力於凱設玲青少年所發生的事。她十二歲時，父母離婚，母親離家。她是長女，必須一夜之間成長。她肩負母親的責任，照顧全家。她成為一個成人，從未經過做一個青少年。她的那一部分被埋藏起來了，正好像那些歲月沒有和她其他的部分一起成長。因此，她沒有青少年該完成的工作。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                正因為她沒有完成青少年的工作，像學習和男孩子相處，她從來不知如何以女性的身份和男性相處。她有不少男性合作夥伴，但如何以女性方式和他們相處的工作，一直沒有完成。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當她經驗並接受十二歲時的自己，是自己重要的一部分時，這部分開始和其他部分一起成長。當她出院時，凱設玲發現自己可以玩得更多，更享受生命了。她對世界過份的使命感沒有了；她開始約會並覺得有樂趣。她也學會向上司說不，以及拒絕其他權威，這樣一來反而有更多的選擇向她開門。甚至她對神也改觀了：她覺得神不再有許多要求而是更慈愛了。簡言之，當這十二歲的女孩對恩典與真理的經驗開放，這就能改變她。十二歲的凱設玲完成了青少年的工作，這是二十年來未完成的。而時間再一次為成人的凱設玲效力。她不再埋在地裡，不再從時間和經驗中移開。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在凱設玲的例子中，因為失去母親所導致的傷痕，使她的一部分從時間中移出去了。失去母親在她十二歲這個重要的年齡，意味著沒有人和她一起經過青少年的掙扎。因此，她把青少年的那部分移出了時間，而在十二歲就成為成人。一個沒有完成青少年工作的成人，會面對各種缺失，尤其在權威和性的方面。同性的父母在青少年發展中是不可缺少的，而她沒有母親，所以十二歲的她必須等待，也就是移出了時間之外。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這個事實或多或少對我們每個人都可以應用。要發展得好，我們必須有好的父母。當父母不在或虐待我們，我們就會把未完成自己的那一部分移出時間之外。它被埋在地裡，一直等到好時間來臨，才會再被叫出來，讓恩典與真理來影響它，使它正常地發展。當真我出來，在恩典的關係中發展，經過時間，就可以成長。凱設玲的真我，停留在十二歲，她的假我出現，扮演成人。當她的真我在光中出現，再次融合到她的真我中，她就成為一個真正的成人。她不用再假裝了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                有些人會很清楚地記得他們在什麼時候離開了好時間。湯姆是一位牧師，他這樣說：「我記得我的大哥們及其他的小孩取笑我，因為我不會做一些他們會做的事。我不像他們那麼強壯，我也很膽怯。他們用惡言叫我，傷害我，到我不能忍受的地步。我記得我對自己說：『我永遠也不要交朋友。太痛苦了。』那時候我大概八、九歲。」從那時起，他成為了一個孤獨者。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當湯姆成人時，孤單淹沒了他。他錯失了一些重要成長的工作。因此他的事業失敗，婚姻不穩固。在經過辛苦治療過程後，湯姆重獲了他八歲時失去的對人的信任，以及易受傷的感覺。他的生命改變了。神給予他的人格開始發展，而信任也跟著他其他的才幹一起成長。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                有些人無法很清楚地記得這種變化在什麼時候發生，但多多少少，傷害和痛苦使我們把自己的某一部分埋在地裡。它們被推到時間之外，到一個它們不能經驗到真我之處。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當一人的某一部分不屬於時間裡面，此人的情緒成熟度會停滯在這個階段。一位婦女無法和家人分離，因此她和別人分離也有困難。每當別人期望她什麼，她覺得一定得去做。因為她跳過了一段在人際關係作選擇的階段，她把它埋在地裡。因此她沒有發展這項作選擇的才能。受了這種影響，她無法向別人說「不」。直等到她可以向父母說「不」時，她才能處理所有其他方面的人際關係。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                另外一位婦女因為有一個虐待她的父親，成為一個很憤怒的人。她很怕父親，以致她不願出房門。在她青少年的後期，她成為基督徒，她覺得自己必須變好，所以那憤怒的青少年被埋在地裡。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                多年之後，在治療之中，這憤怒的青少年又浮現了。她能更享受玩耍，更有創造力，並與控制她的母親分離。在濫用藥品和酒精的人身上，我們常會發現停滯的現象。他們情緒的發展通常停留在他們藉藥品酒精逃離生活的時候。當一個人不再參與生命，他就不能成長。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">聖經對照好時間和壞時間：凡事受了責備就被光顯明出來，因為能顯明一切的就是光。所以主說：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「你這睡著的人，當醒過來，從死裡復活，基督就要光照你了。」（弗五：13-14）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                神呼召我們從黑暗中出來進入光明，經歷耶穌的光照。這樣時間就可以成為好時間；它可以改變我們，使我們經過必要的發展。如果我們躲藏，時間就成為壞時間，因為不在得贖的時間裡。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">向愛我們、關心我們成長的人敞開是永不嫌晚的。因為我們那離開時間的一部分仍然保持原狀，當它回來時，還是同樣年齡。神可以用我們現有的人際關係滋潤我們以前獲得的關係。不論是我們童年、學齡、或青少年所失去的，神應許我們祂顧念我們：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「神在祂的聖所作孤兒的父，作寡婦的伸冤者；神叫孤獨的有家，使被囚的出來享福，惟有悖逆的住在乾燥之地。」（詩六十八：5-6）</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                神可以而且神的確替我們贖回時間。祂經由肢體，也就是祂的教會，供應我們各方面發展的需要。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">四、第二次的機會</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                第一次並不見得那麼「神聖」。因為時間就是經驗，我們的「現在」永遠可以影響我們的「過去」。現在，我們仍然可以觸及那受傷、孤單的過去，好像一個小孩子。因為不論我們曾經如何，那受傷的孩子、孤單的孩子、沒有訓練的孩子，仍是活著的；這個「他」或「她」，仍然活在我們裡面，而且是永恆的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                檢視一下你對不同情況是如何反應的。有時候你的反應像是一個被拒絕而受傷的孩子。通常這個孩子沒有被神的恩典和真理觸摸過，因為他在時間之外。他沒有被帶入經驗中，因此他不能成長。有時候我們會告訴別人「別像小孩子一樣」，這是一句沒有恩典的誠實話，但我們卻不給他需要的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當神說祂可以贖回時間，祂真的可以使我們的過去改變。如果有人錯過了成長的重要階段，他不會因為時間已過去而不能成長、不能改變。我們仍然可以再次成長，不論是嬰兒期的信任問題，學步期的界限問題，孩童期的寬恕，大孩子期的角色，青少年期的分離，我們都可以在成人時再成長。
              </p>
              <p className="text-gray-700 leading-relaxed">
                如果因為傷害，我們的個性——那照神形像所造的——與時間分離了，它仍然還在那兒，而且以原來的形態在那兒。經由恩典的人際關係，真我可以再次被帶到光中，到經驗中，它們可以成長、成熟，在神巧妙的造型過程中，被贖回來。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">五、恩典、真理和時間</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們看過了恩典缺了真理、真理缺了恩典、時間缺了恩典真理會如何。當三者都存在時，我們就會以被愛被接納的真我，經由操練、經驗，而成長得有神的形像。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">恩典、真理和時間三者都存在時，會產生像雅各所說的忍耐：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「我的弟兄們，你們落在百般試煉中，都要以為大喜樂。因為知道你們的信心經過試驗，就生忍耐。但忍耐也當成功，使你們成全完備，毫無缺欠。」（雅一：2-4）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                正如時間有好壞，忍耐也有好壞。當我們受苦時，是真我得以成長還是假我在忍受痛苦？如果我們在神的手術檯上，以真我面對人際關係，經由恩典，花在受苦上的時間會使我們完全；我們會成長，並經歷使人得醫治的改變。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">耶穌在和彼得「現在」的互動中，預知他「將來」的失敗，但也看到更遠的將來，他的成熟：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「西門！西門！撒但想要得著你們，好篩你們像篩麥子一樣；但我已經為你祈求，叫你不至於失了信心，你回頭以後，要堅固你的弟兄。」<br />彼得說：「主啊！我就是同你下監，同你受死，也是甘心。」<br />耶穌說：「彼得，我告訴你，今日雞還沒有叫，你要三次說不認得我。」（路二十二：31-34）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                耶穌超越時間，祂看到現今的彼得，也看到他將來會怎樣否認自己，更看到彼得失敗之後會成熟，以致能幫助和他一樣的人。而在這一切當中，祂完全接納彼得。主完全接納我們，知道我們需要時間和經歷來使不完美的愈見完美，我們的失敗不會叫神驚奇。如果我們的失敗使我們驚奇，是因為我們高估了自己。因我們在恩典中站立一席之地，這會使我們能自由地在經過一段時間之後獲得真理。
              </p>
              <p className="text-gray-700 leading-relaxed">
                我們需要獲得的真理有很多方面，包括真我的發展，人際關係的恩典，及對神的認識。而每一方面都需要時間使其發生效果。
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
                '結果子除了恩典與真理，還需要第三個因素：時間。無花果樹的比喻提醒我們，急躁地要求自己或別人立刻結果子（真理缺了恩典），或無限期放任枯樹佔地（恩典缺了真理），都不能使人成長；唯有恩典、真理、時間三者一起運作，才能培育出真實的果子。',
                '神把犯罪墮落後的人類安置在「得贖的時間」裡——一個祂可以動手術、修補錯誤的地方，而不是任憑我們永遠停留在罪中痛苦。得贖的時間有終點，保羅提醒我們要愛惜光陰，善用這段被贖回的時間。',
                '真正的成長需要經過不同季節與階段，急於求成、想走捷徑（如藥物酒精麻痺痛苦、速食的親密關係）常常只帶來表面而短暫的改變；連耶穌自己也「因所受的苦難學了順從」，深的生根總是緩慢的。',
                '傷害會使我們生命中的某一部分「移出時間之外」，像埋在地裡的銀子一樣停滯不再成長（如凱設玲十二歲失去母親後被迫早熟，青少年階段的功課從未完成）；唯有恩典的關係能把這部分重新帶回光中、帶回時間裡，讓它繼續成長。',
                '「第二次的機會」是真實的：不論我們錯過了哪個成長階段，那個受傷、停滯的自己仍然活在我們裡面，經由恩典的人際關係，真我可以被重新帶入經驗、被贖回、繼續成長——為時不晚。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「發展停滯」的心理學根源</h4>
              <p className="text-gray-700 leading-relaxed">
                本章凱設玲、湯姆的案例，反映發展心理學中「未完成的發展任務」概念：當某個成長階段所需的安全依附、練習機會或角色楷模缺席（如父母離異、被同儕霸凌），當事人往往被迫用「假我」提前跳過這個階段去因應現實，而該階段真正該完成的能力（如與異性健康互動、建立信任、學習拒絕）就被「凍結」在原地，成年後才在某個觸發點（如凱設玲的恐慌發作）重新浮現。理解這一點，能幫助我們用更多憐憫看待自己或他人「情緒年齡」與「實際年齡」不相符的表現，而不是簡單地責備「你怎麼這麼幼稚」。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「得贖的時間」與伊甸園敘事的神學意涵</h4>
              <p className="text-gray-700 leading-relaxed">
                把創世記三章22-24節解讀為神「保護」而非單純「懲罰」人類，是一個值得深思的神學角度：把人趕出伊甸園、隔絕生命樹，表面上是審判的結果，實際上卻避免了人在墮落狀態下永遠活著、永遠痛苦。這與啟示錄中新天新地再次向凡得勝者敞開生命樹（啟二：7；二十二：2）前後呼應，說明「得贖的時間」正是介於墮落與完全復原之間，神施行醫治工程的過渡階段，而不是祂棄絕人的證據。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「快捷方式」文化對屬靈成長的衝擊</h4>
              <p className="text-gray-700 leading-relaxed">
                作者提到撒但慣用「馬上」「快速」的手段試探人（食物、榮耀、安全、財富、性、瘦身），這在資訊即時、消費主義盛行的現代格外貼切——每一種「速成」的承諾背後，往往要求我們犧牲掉「經過時間熬煉」才能建立的品格根基。教會若不自覺地也用「快速見證」「立刻得醫治」的期待來評斷肢體的屬靈狀態，反而可能複製了本章批評的「沒有耐性的園主」心態，值得帶領者自我省察。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">彼得的例子：神如何「超越時間」看待失敗</h4>
              <p className="text-gray-700 leading-relaxed">
                耶穌對彼得說的話（路二十二：31-34）同時包含了對彼得「現在」的了解、對他「將來」失敗的預知，以及對他「更將來」成熟、能堅固弟兄的信任——三個時間點在耶穌眼中是同時被接納的。這提醒我們，神對我們的接納不是「等你變好了才愛你」，而是早已看穿我們從失敗到成熟的整個過程，並且從一開始就完全接納站在這條時間線上任何一點的我們。
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
              '你對自己的成長，比較像「沒有耐性的園主」（急著喊『砍掉它』），還是像「放任枯樹佔地」的人？哪一種更接近你的真實反應？',
              '回想凱設玲、湯姆的例子——你生命中有沒有哪一部分，因為某個傷害或失落，好像被「埋在地裡」、停滯在某個年齡沒有繼續成長？',
              '你是否也曾像本章描述的那些人一樣，追求過某種「快捷方式」（速效的解決、快速的親密、立即的舒緩）來逃避需要時間才能處理的問題？結果如何？',
              '「好時間」是我們的經驗向恩典與真理敞開的時間；你現在生命中，有哪些部分是敞開的「好時間」，又有哪些部分還被你自己藏在「壞時間」裡，不讓恩典與真理觸碰？',
              '耶穌對彼得說話時，同時看見他的現在、將來的失敗，和更將來的成熟。如果耶穌此刻也這樣看你的失敗，你覺得祂會怎麼對你說話？',
              '你身邊有沒有人正處在漫長、看不到盡頭的掙扎中？讀完這一章，你會如何調整自己陪伴他們的方式（少一點催促，多一點耐性等候）？',
              '你目前正經歷的某個困境，若換個角度看成「神在動手術」而不是「神遺棄我」，你的感受和態度會有什麼不同？',
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
              <h4 className="font-semibold text-green-700 mb-2">🌱 找出你「埋在地裡」的那一部分</h4>
              <p className="text-gray-700 mb-2">安靜下來，回想並寫下：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>有沒有某個年紀、某段時期，你覺得自己「被迫長大」，跳過了原本該有的成長功課？</li>
                <li>那個年紀的自己，最需要卻沒有得到的是什麼（安全感、陪伴、允許犯錯、被保護）？</li>
                <li>試著向神、也向一位信任的人，說出那個被埋藏已久的自己需要什麼</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">⏳ 停止對自己或他人喊「砍掉它」</h4>
              <p className="text-gray-700 mb-2">
                本週留意一次你想放棄、想論斷自己「怎麼還沒改變」的時刻，或想催促他人「快點好起來」的時刻，練習改口說：「這需要時間，我（他）需要恩典、真理，加上時間。」
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 默想馬太福音二十五章「按才幹受責任的比喻」</h4>
              <p className="text-gray-700 mb-2">
                思考：我生命中有沒有哪個部分，像那第三個僕人一樣，因為害怕、傷害而被我「埋在地裡」，不敢拿出來使用、不敢讓它經歷時間和恩典？這週嘗試把它挖出來一小步。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，感謝祢把我安置在『得贖的時間』裡，沒有讓我永遠困在罪與痛苦中。求祢光照我生命中那些被埋藏、停滯不前的部分，賜我勇氣把它們帶到祢和信任的人面前。也求祢幫助我學習等候——不論是對自己的成長，或是陪伴身邊正在掙扎的人，讓我少一點催促，多一點祢那樣又有恩典、又有真理、又有耐心的愛。奉耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
