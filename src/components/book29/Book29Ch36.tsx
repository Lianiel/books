import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch36() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第三十六章</h1>
        <h2 className="text-xl font-semibold text-gray-700">洪水與方舟</h2>
        <p className="text-gray-500 mt-1">當挪亞六百歲，二月十七日那一天，大淵的泉源都裂開了，天上的窗戶也敞開了，四十晝夜降大雨在地上。……水勢在地上極其浩大，天下的高山都淹沒了。……凡地上各類的活物，連人帶牲畜、昆蟲，以及空中的飛鳥，都從地上除滅了，只留下挪亞和那些與他同在方舟裡的。創世記七6-24</p>
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

            <p className="text-gray-700 leading-relaxed">
              洪水與方舟這個大主題，關聯到許多事情，之前講過的有審判罪惡、除去敗壞、重造世界、預表被提、預表復活、預表救恩、預表洗禮、方舟容量、方舟尺寸、末世傳道、全家蒙恩、義人獎賞等十二方面，本章繼續要講大洪水的來源、大洪水的範圍、方舟裡的活物等三方面。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、大洪水的來源</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記七11-12：「11當挪亞六百歲，二月十七日那一天，大淵的泉源都裂開了，天上的窗戶也敞開了。12四十晝夜降大雨在地上。」這裡清楚說明，洪水的來源是「大淵的泉源」與「天上的窗戶」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">一、大淵的泉源</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「淵」有深處的意思，創世記一2所說的「淵」面黑暗，與創世記四十九25所說的「地裡」所藏的福，都用這個字。主要是與天上相對，表達洪水的水源來自地下，也來自天上。所以「大淵的泉源」應該是地下岩層中的水庫，類似現在的地下水，因大地震崩裂，地底下的水大量地冒出來。這種水源至今仍然存在，且在未來的大災難裡還會因地震而冒出來，湧流千年之久（亞十四4-8，結四十七1-13）。本書第十四章談到中央泉源與四條河，這個中央泉源的水乃是來自神創造時所預留的地下水庫，這個地下水庫的水不僅作為供應，有一天也成為大洪水審判的工具之一。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">二、天上的窗戶</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                講天上的窗戶，列王紀下七2：「有一個攙扶王的軍長對神人說：即便耶和華使天開了窗戶，也不能有這事。」這裡指神供應。以賽亞書廿四18：「躲避恐懼聲音的必墜入陷坑；從陷坑上來的必被網羅纏住；因為天上的窗戶都開了，地的根基也震動了。」這裡指神審判。瑪拉基書三10：「萬軍之耶和華說：你們要將當納的十分之一全然送入倉庫，使我家有糧，以此試試我，是否為你們敞開天上的窗戶，傾福與你們，甚至無處可容。」這裡指神賜福。天上的窗戶可以賜福，也可以降災，這福與災都是從神而來的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                第二天的創造，大約一半的水被移到天空，成為保護地球的水氣層（創一6-7）。這些水原來有賜福的功能，但現在變成是降災之用。當審判時，天上的水氣層失去平衡，以雨的形式傾流下來，下了四十晝夜的大雨。那時天上的水約佔全地球水的一半，才可能下那麼久的大雨。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                那時天上的水氣層與今日的雲層不同，現今雲層所含的水量還不到全世界水量的1%，大雨無法下很久，通常幾小時就結束了，頂多一整天，就足以造成嚴重的水災。若下四十晝夜的大雨，又有從地下冒出來的水，肯定把整個城市都淹掉了，甚至連所有高山都淹沒了：「18水勢浩大，在地上大大地往上長，方舟在水面上漂來漂去。19水勢在地上極其浩大，天下的高山都淹沒了。20水勢比山高過十五肘，山嶺都淹沒了。」（創七18-20）這裡所說的高山，絕不是喜馬拉雅山或玉山之類的山，那都是洪水後才有的山，是破裂的陸塊推擠出來的，而且現在還在推擠，每年還在長高。盤古大陸的高山都不很高，所以會全部被淹沒。（孫大程，《創世以來的奧秘》，頁125-126）
              </p>
              <p className="text-gray-700 leading-relaxed">
                大淵泉源「裂開」與天上窗戶「敞開」的原文，字幹都是被動的（Niphal），代表是出於其他外力而發生的，這外力就是神自己，是神掌管這個審判（謝挺，《始於神──創世記靈修日引》，2月17日）。有科學家提出隕石造成水氣層破裂的說法，這是一種可能，如同神使用大東風分開紅海。但大東風準確地發生在摩西伸杖吩咐之後，水氣層破裂準確地發生在挪亞全家進方舟後七天，這都是由於神超自然的掌管。今天不管發生甚麼難以掌控的事，要相信是出於神。即使有撒旦的工作，也是神所允許的，就如約伯的苦難、耶穌的十架、使徒的殉道等，為要磨練我們成為精金（伯廿三10，彼前一7）。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、大洪水的範圍</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                有人問，當時大洪水淹沒的範圍真的是全世界嗎？可能只是中東地區而已吧？但聖經清楚說是全世界。有人說，水不可能淹沒喜馬拉雅山吧？連台灣的玉山都不能淹過？事實上現今所有的高山都是在大洪水的後段時間形成的，盤古大陸地殼變動、四分五裂、互相推擠，因而凸起形成現今的高山，前面已有說明，所以這不是問題。以下完整地從聖經經文、自然科學、人文歷史等三方面的證據來說明。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">一、聖經經文的證據</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                有多處經文不斷強調，這是全地的審判，所以洪水範圍是全世界。創世記六7：「耶和華說：我要將所造的人和走獸，並昆蟲，以及空中的飛鳥，都從地上除滅……」創世記六13：「神就對挪亞說：凡有血氣的人，他的盡頭已經來到我面前；因為地上滿了他們的強暴，我要把他們和地一併毀滅。」創世記六17：「看哪，我要使洪水氾濫在地上，毀滅天下；凡地上有血肉、有氣息的活物，無一不死。」創世記七4：「因為再過七天，我要降雨在地上四十晝夜，把我所造的各種活物都從地上除滅。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                以上經文都強調神要使活物與地全部毀滅，以下經文則說明大洪水實際發生後，所有地上活物都死了。創世記七21-23：「21凡在地上有血肉的動物，就是飛鳥、牲畜、走獸，和爬在地上的昆蟲，以及所有的人，都死了。22凡在旱地上、鼻孔有氣息的生靈都死了。23凡地上各類的活物，連人帶牲畜、昆蟲，以及空中的飛鳥，都從地上除滅了，只留下挪亞和那些與他同在方舟裡的。」彼得後書三5-7說：「5他們故意忘記，從太古，憑神的命有了天，並從水而出、藉水而成的地。6故此，當時的世界被水淹沒就消滅了。7但現在的天地還是憑著那命存留，直留到不敬虔之人受審判遭沉淪的日子，用火焚燒。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">二、自然科學的證據</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                化石可證實洪水淹沒了全世界。進化論學者拿化石來說明進化論，以化石所存在的地方來推論──海生動物在最下面，上面一點是兩棲動物，再上面一點是陸生動物，再高一點是鳥類，他們以此種現象來認定這是物種的進化。但事實是，由於不同的化石層之間並沒有中間型、過渡期的生物，全都是各從其類被埋起來的，所以化石不足以證明物種的進化。反而化石可以證明洪水事件，因這些生物被掩埋的上下層次正是牠們生存活動的位置。並且化石的形成是由於生物快速被泥沙掩埋，生物體佔據了空間，又沒有空氣，不會被細菌快速分解屍體，才能在一個空間中維持一段時間，進而形成化石。化石說明了洪水夾帶的泥沙瞬間將動物掩埋的情況。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                若不是在洪水的情況下，任何一個動物一死掉就會被其他的動物吞吃或被細菌分解，不會留下成為化石。現在全世界都有化石，證明了當初大洪水淹沒的範圍是全世界，這也是神給人的警告，使後代的人明白大洪水的真實性，並提醒在末後的世代將有另一波的審判──七年大災難，因此人要警醒，要為末後的日子作預備。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                為什麼恐龍化石最多？因牠最笨重，所以快速而大量地被掩埋了。恐龍化石遍佈世界各地，也說明洪水是普世性的；而且現今不同大陸的恐龍化石大致相同，並沒有分開演化的現象，這也說明原來都在同一個盤古大陸上。鳥的化石很少，因牠們漂浮在水面上，只有少數被捲下去；人的化石也很少，因人的比重跟水一樣，而且人會往高處逃命，無處可逃時才被大洪水淹死，但並不會被掩埋在泥沙之中，所以人的化石也很少。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                冰河也是洪水過後產生的另一個景象，因為高緯度的海洋原來是溫暖的，水氣不斷上升，空氣又已急速冷凍，因此就使大量的水氣變成雪，降在高緯度的山上，被重力往下遷移，就產生了冰河。因此冰河並非幾億年前或幾千萬年前產生的，而是在四千多年前產生的。另外，高山上的鹽水湖也是海水淹沒全地，又經過造山運動將海水升上所遺留的；而高山鹽岩則是岩石經海水淹沒，水分蒸發後岩石殘留鹽分的結果，這些都是大洪水的證據。還有其他各種證據，包括陸地與小島上被洪水沖刷而形成的風貌等等，詳細可看孫大程博士所寫的《創世以來的奧秘》。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">三、人文歷史的證據</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這也是人類學的研究，全世界有兩百多民族有大洪水的傳說，地理位置遍佈各大洲，並涉及八十四個語言系統。不只中東民族，似乎全世界各民族都紀錄了這毀滅性的大洪水事件。有來自兩百多個民族的兩百多個傳說，其內容雷同的比例如下（摘自《校園》1995年5月號，頁24-25；莊東傑，《跨越鴻溝》，頁298-300）：
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                1.大災難只是因洪水而引起的（95%）。2.洪水是普世性的（95%）。3.有一家人得救（88%）。4.他們藉著一艘船得救（70%）。5.這事件發生在各民族所在之當地（82%）。6.洪水是因人類的罪惡而引起的（60%）。7.動物也同時被拯救（67%）。8.動物在洪水故事中扮演重要角色（73%）。9.那些被拯救的人事先曾被警告過（66%）。10.獲救的人最後停靠在一座山上（57%）。11.最後曾放出鳥類（35%）。12.有偶發事件（37%）。13.在獲救之後有獻祭的行動（13%）。14.獲救的人數正好八個人（9%，兩百多個傳說的9%，等於至少有二十個不同民族的傳說說到八個人，這絕非巧合，乃是真實發生，如聖經所記）。15.曾提到彩虹（7%）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                華人的文化素材，也是人文歷史的一部分。僅舉幾個相關的中國字為例，其餘可參看《跨越鴻溝》及《華人回家》這兩本書。
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>昔</strong>：在甲骨文中，「昔」這個字是「日」（太陽）的上面有「大水」，表示古時洪水曾經淹沒全地（創七19），將太陽都遮住了。所以「昔」這個字就代表「古時」。<strong>船</strong>：「舟」乃象形字，是一艘船的樣子。「船」乃會意字，是「舟」加上「八口」，表示是八個人在舟裡面得以躲避洪水。這不是一般的船，乃是特殊的船，記載了挪亞一家八口在方舟裡躲避洪水的情況（創六10、18）。<strong>沿</strong>：會意字，由「八口」與「水」組成，有存留繁衍之意。所以「沿」這個字見證了挪亞一家八口經洪水存留下來繁衍（創九1）。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、方舟裡的活物</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                關於地上活物、空中飛鳥，每樣要帶幾對進方舟，有人指出前後說法矛盾，因為創世記六19講全部都帶一對，七2-3講潔淨的帶七對，不潔淨的帶一對。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                首先要理解，聖經本來就會先講概略，後講詳細。譬如，創世記第一章先簡略講造男、造女，第二章再詳細講如何造亞當、夏娃。其內容不同，並不是矛盾，乃是補充說明。其次還要理解，第六章的說話與第七章的說話，相隔約八十年。第六章是吩咐造方舟時所說的話，那時只要簡略說明即可；第七章是方舟已造好，就快要進去了，所以要詳細說明，特別指示凡潔淨的畜類與空中飛鳥都必須帶七對進方舟。這些潔淨的畜類在動物中所佔的比例小，不會造成容量不夠的問題。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神為何指示潔淨的畜類要帶七公七母？首先是因為潔淨的畜類要用來獻祭。挪亞出方舟後，第一件事就是築壇獻祭，將潔淨的牲畜殺了獻給上帝，預表基督的贖罪工作。獻祭之禮也傳給華人祖先，由中國的造字可知，例如祭、義、犧、祥等字。若僅有一對，一旦獻為祭，就無法生養繁殖了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                其次是因為洪水之後，神開放人可以吃潔淨的動物。當時天上的水氣層沒有了，地上有了極帶、寒帶、熱帶、赤道，有些地方太冷，有些地方太熱。即使溫帶，也會隨著季節變成太冷或太熱，若只靠蔬果為食，寒帶、溫帶的人會糧食不足，所以神開放可吃肉，而吃潔淨的動物，對人身體比較好。所以潔淨的動物需要有七倍，才會有足夠的繁衍，以作獻祭及食物之用。空中的飛鳥也要七對，但空中飛鳥有潔淨的，也有不潔淨的，可能是因為這些不潔淨的鳥類具有抑制某些動物過量繁殖的功能，對於生態平衡是需要的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在進方舟的過程，聖經強調：「都是一對一對的，有公有母，到挪亞那裡進入方舟，正如神所吩咐挪亞的。」（創七9）「15凡有血肉、有氣息的活物，都一對一對的到挪亞那裡，進入方舟。16凡有血肉進入方舟的，都是有公有母，正如神所吩咐挪亞的。」（創七15-16）兩處都強調四件事：一對一對、有公有母、到挪亞那裡、如神所吩咐的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                關於一對一對、有公有母，這當然是為了將來能夠繁衍生殖，另外也想到，在方舟裡的三百七十天，實在需要有親密的伴侶，這不僅是人的需要，也是各種活物的需要，否則恐怕會孤寂而死。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                關於到挪亞那裡，基本上就是到方舟裡，而這方舟有一位管理者挪亞，挪亞會負責提供安歇的處所，及所需的食物。在這一年多裡面，挪亞成功執行了創世記一26-28所說管理各樣活物的任務。這些動物為何能全部順服地進到方舟，挪亞全家可能用80年時間去跟各種動物建立關係，讓他們能聽指令，類似近代傳奇人物泰山所成就的。聖經又說：「正如神所吩咐挪亞的」（創七9、16），所以若有需要，神一定會幫忙，正如神曾經把各樣走獸、牲畜、飛鳥帶到亞當面前，讓亞當方便為各種動物取名字（創二19），現在神也能夠把各種動物帶進方舟。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這件事有可能包含人的努力與神的幫助，因為挪亞全家與動物的關係也是很重要的，如果動物只是聽令於神，那在方舟裡的日子會比較無趣。若也能聽令於挪亞全家，那麼方舟裡的日子就會有不少歡樂時光，各種動物或許可以輪流展現各種才藝。各種動物不必為住處或食物而爭競，乃是能經歷和諧相處，如以賽亞書六十五25所說的：「豺狼必與羊羔同食；獅子必吃草與牛一樣；塵土必作蛇的食物。在我聖山的遍處，這一切都不傷人，不害物。」因此，在方舟中的日子，某種程度也預表了禧年國度。
              </p>
              <p className="text-gray-700 leading-relaxed">
                還有一件事是很多人關心的，到底恐龍有沒有被帶進方舟？既然說，凡有血肉的活物，都要帶進方舟（創六19），那應該是有。由於容量的限制，一定是帶各種幼年的恐龍進方舟，但在洪水後的世界，由於氧壓、氣壓都比洪水前低，不適合大型體積的恐龍生存，因氧氣供應不到肢體末端。即使體積小一點的恐龍，也可能由於生存環境的變化，造成不易生育等，逐漸絕跡。《創世以來的奧秘》這本書指出，約伯記有記載像恐龍的動物，只是沒有稱之為恐龍，約伯記是與創世記同樣古老的一卷書，但愈到近代，因大環境不適合恐龍生存、數量不斷減少，又有人類追殺，這物種就絕跡了。（孫大程，《創世以來的奧秘》，頁19-24）
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                洪水的審判，不僅在聖經有清楚的記載，普世性的化石遺跡也見證這個普世性的大審判，而華人的文化素材及全人類各民族的傳說也留下洪水與方舟的見證。挪亞一家人經歷死而復活的過程，開啟新人類嶄新的一頁。如今在末後也有個方舟──耶穌基督，在十字架上完成救贖大功，使凡信靠祂的人，在靈裡經歷與基督同死同復活，成為新造的人。基督還要再來，信靠他的人將免去末後的審判，如同挪亞一家藉方舟得救一般。讓我們繼續傳主福音、生養屬靈兒女，使更多人能領受救恩，進入末後的方舟基督耶穌裡面。
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
                '大洪水的兩個來源：大淵的泉源（神創造時預留的地下水庫因大地震裂開）與天上的窗戶（第二日創造時移到天空的水氣層失衡傾降，佔全地球水的一半，才能下四十晝夜大雨）。',
                '「裂開」「敞開」原文都是被動語態——是神掌管這個審判；準確發生在挪亞全家進方舟後七天，顯明神超自然的掌管；今日難以掌控的事也當相信是出於神的允許。',
                '洪水淹沒的高山是盤古大陸不高的山；現今的高山（喜馬拉雅山、玉山等）都是洪水後陸塊推擠形成的，如今還在長高。',
                '洪水範圍是全世界的三方面證據：聖經經文（創六-七、彼後三5-7反覆強調全地毀滅）；自然科學（各從其類的化石是洪水快速掩埋的證據而非進化證據、冰河、高山鹽湖鹽岩）；人文歷史（兩百多民族的洪水傳說，及甲骨文「昔、船、沿」等中國字的見證）。',
                '潔淨的畜類帶七公七母是為了獻祭與洪水後食用；一對一對有公有母是為繁衍也為伴侶；動物順服地「到挪亞那裡」有人的努力也有神的幫助——方舟中和諧相處的日子預表禧年國度。',
                '洪水與方舟預表基督救恩：與基督同死同復活成為新造的人；基督再來前，我們當傳福音、生養屬靈兒女，使更多人進入末後的方舟——基督耶穌裡面。',
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
              '大洪水的來源主要有哪兩方面？有哪些相關經文？跟創世記一章、二章有何關聯？',
              '大洪水遍及全世界，有哪些證據？請分別從聖經經文、自然科學、人文歷史來說明。',
              '進方舟的動物，潔淨的與不潔淨的在數量上有何差別？為什麼需要有這個差別？跟洪水後的人有何關係？',
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
