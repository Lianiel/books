import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book35Ch4() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-violet-700 to-purple-700 bg-clip-text text-transparent">第四講</h1>
        <h2 className="text-xl font-semibold text-gray-700">聖經啟示的禱告類型</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-violet-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-violet-50 to-purple-50 hover:from-violet-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-violet-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <p className="text-gray-700 leading-relaxed">
              妮塔在開講前先提醒：如果你是初級代禱者，不需要到神面前刻意分類說「今天我要做的是代求式的禱告，昨天是默想式的禱告」——只要按著神給你的感動去禱告，神都會知道、都會垂聽。但因為大家還是初學者，她仍然想介紹聖經中幾種不同類型的禱告，讓大家知道無論自己在做哪一種，神都會垂聽。第三講末尾已介紹過「懇求式的禱告」（Supplication），這一講接著介紹其餘幾種。
            </p>

            <div>
              <h3 className="font-bold text-violet-800 text-lg mb-3">一、呼求式的禱告（Cry）——極大創傷中急需神的介入</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                英文常翻譯成「cry」的禱告，就是「大聲呼求的禱告」，希伯來文的意思是呼求幫助，比懇求（supplication）稍微強烈一些。如果你處在這種類型的禱告裡，通常是在極大的創傷中，非常急需神的介入。妮塔列出幾處經文：詩篇八：2、五：2、四十：1-2，出埃及記二：23，詩篇十八：6、六十一：1-2（凱旋式的呼求）。她特別帶大家看詩篇四十篇1-2節，這是大衛的禱告：「我曾耐性等候耶和華，他垂聽我的呼求。他從禍坑裡、從淤泥中把我拉上來，使我的腳立在磐石上，使我腳步穩當。」妮塔解釋：大衛耐性地等候耶和華，然後神垂聽了他大聲的呼求；當他大聲呼求時，是滿懷期待地渴望神的回應，然後神把他從可怕的禍坑中拉上來，把他的腳放在磐石上，使他往前的腳步穩當。她說，很多基督徒一生中一定做過很多次這樣的禱告——向神呼求，求祂釋放你、介入你的環境，可能是為了自己，也可能是為了別人。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-violet-800 text-lg mb-3">二、代求的禱告（Pray）——如審判官一般，為得罪你的人代求</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「pray」這個詞的禱告，妮塔給出的經文是創世記二十：7、民數記二十一：7、撒母耳記上七：3-10。這種類型的禱告，希伯來原文的意思是「你去判斷，去介入，去代求，為了別人的緣故，去獲得神的恩寵」。她先看創世記二十章7節：亞比米勒王把亞伯拉罕的妻子撒拉帶走，神在他家中施行嚴厲的審判，並吩咐他：「現在你把這人的妻子歸還他，因為他是先知，他要為你禱告，使你存活。你若不歸還他，你當知道，你和你所有的人都必要死。」妮塔解釋，這裡的禱告就是像一個審判官，為亞比米勒介入、代禱，他才能存活。民數記二十一章7節也是同樣的情形：以色列民因犯罪、遭火蛇攻擊，慌張地到摩西面前說：「我們怨讟了耶和華和你，有罪了，求你禱告耶和華，叫這些蛇離開我們。」於是摩西為百姓禱告。妮塔說，這種「pray」類型的禱告，是像審判官一樣介入，為別人的需要向神尋求恩寵，一般發生在「受傷的人為傷害自己的人禱告」的處境——當基督徒進入禱告內室，為那些得罪自己的人禱告，就是在神面前扮演審判官的角色，神會聽這些代禱者的判斷。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔特別強調：全地上的每一個人，身上都承擔著君王的權柄——你所做的決定，就像君王做的決定一樣，同時也承擔著像審判官一樣的權柄，不需要經過很多年的培養才能成為審判官。但神在你裡面所要尋求的，不是強硬、定罪式的審判，而是憐憫的審判，以至於神能把攻擊你或攻擊別人的人從捆綁中釋放出來。她提到士師記中神為以色列不斷興起不同的士師（審判官），一般文化裡想到審判官就想到把犯錯的人送進監獄，但事實正好相反——神興起士師不是要審判懲罰不斷失敗的以色列人，而是要向攻擊以色列的仇敵施行審判。因此，當基督徒進入禱告，作為審判官的職責，是要使所代禱的人得釋放——如果你代禱的是那些得罪你的人，他們本身其實正處於某種程度的捆綁裡，神要你禱告使他們得自由；當你這樣禱告，你們兩者都會得著釋放。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-violet-800 text-lg mb-3">三、默想式的禱告（Meditate）——代禱能力的根基</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說，不管花多少時間代禱，都需要定期在神面前默想沉思、與神團契。她列出經文：詩篇五十七篇、十七篇，詩篇一一九：15、23、48、148，提摩太前書四：15，詩篇六十一：1，詩篇一四三：5，約書亞記一：8。這些經文都命令我們要時常默想神的話，例如：「我要默想你的訓詞，看重你的道路」（詩一一九：15）、「這律法書不可離開你的口，總要晝夜思想，好使你謹守遵行這書上所寫的一切話。如此，你的道路就可以亨通，凡事順利」（書一：8）。妮塔說：要在代禱上成為剛強的人，必須在神的話語上紮下很好的根基；如果沒有持續的讀經生活，仇敵就能輕而易舉地把你從代禱的生活中趕出去，持續的讀經生活，是在代禱上保持能力的保障。她提醒，默想經文是讀經最有效的方法——把經文帶到神面前跟祂交通，在頭腦中反復思想，走路的時候、上班的時候、日常生活裡，只要抓到機會就默想神的話，就會讓你在禱告上非常剛強。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-violet-800 text-lg mb-3">四、與神相遇式的禱告（Encounter）——以色列邊界的異象</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說，有時候她進入禱告室，就會知道今天一定會遇見神——那是一種特別的感受，一進入禱告室，耶穌就會向她顯現。她提到每次去以色列禱告，每一次跪下來，耶穌都會向她顯現，告訴她該怎麼禱告，這種持續性的與神相遇，對於為以色列禱告特別關鍵。她分享一次經歷：那晚她幾乎整夜沒睡都在禱告，剛睡不到半小時，神就在她旁邊顯現，說：「進入禱告室，去禱告。」雖然身體極度疲憊，她仍把自己「抓起來」進入禱告室。她心中有感動把以色列地圖拿出來，開始為以色列的邊境禱告。聖經提到神的七靈，在寶座前好像火柱一樣，其中兩位——敬畏耶和華的靈和耶和華的靈——就到禱告室向她顯現，要把以色列的邊界勾畫出來。她按著顯現的、聖經所啟示的邊界開始禱告，敬畏耶和華的靈告訴她，耶和華的靈現在要出去，把她剛才禱告的邊界做上標記。突然間，禱告室的屋頂消失了，耶和華的靈興起進入空中，沿著以色列領土的邊界一路過去。她當時非常吃驚，忍不住脫口說「讚美神！」——這時站在她旁邊敬畏耶和華的靈把一股壓力放在她頭上，使她的頭低下，說：「在神面前保持靜默，直到做完祂的工。」她說，當神正在做事的時候，要完全保持靜默，即便裡面興奮得好像要爆炸一樣。做完之後，神問她要不要看看剛才所做成的事，她被提到以色列上空，清楚看見那邊界就像鐳射雕刻一樣，沿著以色列邊界走一圈，並進到約旦國境內。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說，那天她是為了一個特殊的緣故與神相遇，事先並不知道會發生什麼，但就是知道會與神相遇。神很多時候會預定一些基督徒與祂有這樣的相遇，成就非常重要的事——神也許不會明說「請你來禱告室」，但會在心裡感動、催促你去禱告，如果不去，就會永遠失去這個相遇的機會。她提醒：神非常願意向基督徒彰顯自己，如果當時沒有處於準備接受的狀態，這個祝福就會永遠失去，再也沒有機會得著。有時神會給第二次機會，但絕大部分時候不會再有第二次機會。很多基督徒失去祝福的原因，是他們沒有禱告的生活，也沒有學會順服。若渴望與神有這樣的相遇，就要開始成為一個禱告的人——當我們與神有這樣的相遇，常常會發現自己的智慧被祂完全地改變了。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-violet-800 text-lg mb-3">五、神在乎靈魂不是土地——一次關於以色列的異象</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔提到，當年美國參與以色列地土分割的相關國際事件時，許多牧師、先知說美國因此受咒詛，颶風襲擊美國就是因為參與了這件事。她坦言自己原本也這樣認為——她自己是猶太人，深愛自己的百姓以色列，地土被分割對她而言是非常痛苦的事。當時她人在以色列，整個國家籠罩在難以承受的傷痛中，神叫她到橄欖山上的一個禱告中心禱告，說要在那裡與她相遇。禱告很長時間，她仍無法勝過裡面的憂傷。這時耶穌向她顯現，手上拿著一張像檢察官用的長紙和一支筆，說：「妮塔，請注意，我對以色列有個計畫。」她很吃驚，仍為以色列跟神辯論：「主，你到底是為了什麼被冒犯了呢？」神回答：「你怎麼那麼在乎國土的分割，我的百姓住在這地方，他們被罪如此地敗壞。在我的同在當中，他們在罪中敗壞自己。我並不是那麼在乎他們的土地，我乃是在乎他們的靈魂。」這次造訪就這樣結束了，妮塔對自己說：「對，神有權利得著我們的注意力。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                稍後，主再次向她顯現，說：「跟我來。」祂把她帶到一個滿是淤泥的地方，聖靈好像鑿出一條通道穿進淤泥深處，她與耶穌一路往下，直到發現他們身處在地獄中心。她看見牆壁上全是一個個囚牢，散發著硫磺般的臭味，裡面有各種蛾、卵一樣的蟲子，那面牆像人一樣呼吸著。主引用以賽亞書五章14節對她說：「故此，陰間擴張其欲，開了無限量的口；他的榮耀、群眾、繁華，並快樂的人，都落在其中。」妮塔說，這裡講的正是以色列人，地獄正在擴張它的容量，好盛裝這些人的靈魂——每兩三秒就有一個新的囚牢生出來。神的臉上流著眼淚，指著這些牆對她說：「地獄正在擴張它的疆界，好接受我百姓的靈魂，我創造地獄單單是為了撒旦和敗壞的天使，並不是為了以色列，可這些監牢裡面充滿了猶太人。這些人，他們那麼愛他們的土地，但是全都沒有發現我就是他們的彌賽亞。」神說：「我現今所關心的不是這些地土，而是我百姓以色列的救恩。你和教會必須把注意力從地土上挪開，要專注在為以色列百姓的救恩禱告。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔坦言，即便有這樣深遠的經歷，她後來還是再次陷入地土被分割的傷痛裡，畢竟聖經稱以色列人是「頑固的」，頑固的人不容易學習。後來她回到美國，某夜聽到一個好像從永恆傳來、如眾水聲音的話語：「這是因為神的良善，所以神讓以色列的國土分割。」這句話深深進入她裡面，好像神的良善在她裡面炸開一樣。之後她被提到靈裡，好像穿過時光隧道回到過去，看見地的深淵裂開、大地震動搖撼、地的泉源湧上來——那聲音對她說：「挪亞的時候如何，今天也如何。」她解釋，挪亞的時代地的深淵裂開、大地搖撼、水泉湧上來、發生地震、全地被洪水淹沒，神審判那些不義的、稱呼主名卻恨惡神的人，最後只有8個人存活。神告訴她：地上會再一次經歷這種類型的災難，神會再一次把地的深淵完全打開，整個地要震動，為了祂自己要興起一群公義的百姓。她也提到亞洲發生的海嘯，說「在挪亞時候怎麼樣，今日就會怎麼樣」，神正在處理地上的人，同時也在處理以色列，目的是要帶領以色列人進入救恩——不是要讓一些國家對以色列殘忍，而是要讓以色列不再只專注在地土上，而是將注意力轉向真正能給他們平安的那一位。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔總結說，神的智慧非同我們的智慧，祂的道路非同我們的道路。聖經上講到凡參與分割以色列地土的，神會來管教他們；但聖經也提到，有時神自己會親自分割土地，並使用一些國家去做這件事，目的是要預備這個國家經歷復興，這正是即將要在以色列發生的事——那些真渴慕神的人，會領受復興的靈，藉著這些災難讓以色列百姓蘇醒過來。她提醒：當我們不知道怎麼禱告，但又知道這禱告對神很重要時，就要大聲呼求：「神啊！禰教我怎麼禱告，我不想按著我的心意，我要按著禰的旨意來禱告。」如果需要神向我們顯現、把我們帶入祂的同在、或藉異夢異象向我們說話，好叫我們能明白，神會這樣做。每次當她因以色列地土分割產生傷痛時，她就會提醒自己，這是因為神的良善才允許這樣的事發生——你怎麼能在神行良善的事上憂傷呢？
              </p>
            </div>

            <div>
              <h3 className="font-bold text-violet-800 text-lg mb-3">六、震動是因為本土的罪——美國需要代禱</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔接著談到颶風卡崔娜（她稱之為「克催娜」）：她認為那不是因以色列的緣故，而是神要處理美國南方一些城市歷史上的罪——包括對美國原住民所犯的罪、黑奴時代的不公不義，以及各種不法、可恥、抵擋神的事。她提到，前一年年初她帶了一些代禱者到新奧爾良為那城市禱告，神向她揭露這座城市一切隱秘的罪，告訴她：「我要在一天之內把這個城市毀掉。」她強調，不管這事件跟以色列地土分割的時間點多麼相近，颶風的事不是因為以色列的緣故，乃是因為美國本土的罪，以及美國拒絕神公義的法則。新奧爾良後來確實在一天之內就遭到重創，她認為那是神的長久忍耐已經到了盡頭，要震動這群漠不關心的人，並不是要把人從家鄉趕走，而是要幫助他們不再崇拜偶像，從邪惡和罪中被釋放出來。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說，神不僅這樣處理新奧爾良，還「標注」了其他一些城市——拉斯維加斯、洛杉磯、舊金山、紐約、邁阿密等。她認為這些城市之所以還沒有經歷類似新奧爾良的命運，是因為有代禱者在為這些城市禱告：「神啊，求禰赦免這些州的罪，求禰赦免這些城市的罪。」她也分享，有次神帶她走過洛磯山脈的一條路，山裡有不同的洞穴，都是人祭祀偶像的地方，她認為美國已經成為一個充滿偶像敬拜的地方，各地宗教、異教信仰像疾病一樣在美國傳播，原因就是「沒有人禱告，沒有為我們的國家禱告」。她鼓勵所有人，不管是初級或成熟的代禱者，都需要為美國禱告——教會不應把美國看作神面前的一個大障礙、一個神急於吐棄的國家，而應看見美國是神所深愛的、祂要醫治、要為了祂的榮耀使用美國，神正在美國全地興起像大家一樣的代禱者。她鼓勵大家至少可以這樣禱告：「主，我要為這個國家持續拜偶像的罪向你悔改。」她相信一旦流無辜人血的罪被清理完了，神就會釋放復興在全美國。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">這一講最後，妮塔帶著大家起立禱告，其中一段方言禱告後接續：</p>
              <div className="border-l-4 border-violet-200 bg-violet-50/50 pl-4 py-3 my-3">
                <p className="text-gray-700 italic leading-relaxed">
                  「親愛的天父！禰實在是全地的審判官！禰的百姓實在需要禰的智慧！主，禰不僅是全地的審判官，禰也是全地的拯救者！禰所做的一切，都是從禰的憐憫和公義裡出發的！神啊，我呼求禰的靈現在降在這裡的每一位身上，分賜一個更高的智慧在他們裡面……神哪，請禰來！請禰來！神哪，禰來！神哪，來！我們呼求禰來！求禰降臨在我們身上！神哪，真的為我們加力量！釋放禰的權柄！在我們身上釋放禰的榮耀！」
                </p>
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
            <ul className="space-y-3">
              {[
                '聖經啟示至少五種禱告類型：懇求式（Supplication，甘願軟弱代求）、呼求式（Cry，極大創傷中大聲呼求）、代求式（Pray，如審判官為得罪你的人代求）、默想式（Meditate，持續默想神的話作為代禱根基）、相遇式（Encounter，在禱告中與神面對面相遇）。初學者不需刻意分類禱告，按感動禱告即可，但認識這些類型有助於明白神的運作方式。',
                '「Pray」式代求禱告的核心洞察：每個信徒都承擔君王與審判官的權柄，為得罪自己的人代禱時，是在扮演憐憫的審判官角色，目的不是定罪，而是使被捆綁的雙方（包括自己）都得釋放。',
                '默想神的話是代禱能力最根本的保障——沒有持續讀經生活的代禱者，很容易被仇敵從代禱生活中趕出去；日常生活中把握機會默想經文，是使禱告剛強的關鍵操練。',
                '妮塔透過異象領受的信息一貫指向：神真正在乎的是人的靈魂，而不是地土、國界或外在的政治局勢——這個原則貫穿她對以色列地土分割、颶風卡崔娜等重大歷史事件的解讀。',
                '妮塔認為美國本土歷史罪責（對原住民、對黑奴的不公）與拜偶像的罪，是導致她所見異象中城市審判的原因；她強調代禱者的悔改禱告能成為攔阻審判、迎來復興的關鍵，鼓勵大家持續為所在的國家代禱。',
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
              <h4 className="font-semibold text-gray-800 mb-2">如何看待帶有強烈個人異象、預言色彩的教導？</h4>
              <p className="text-gray-700 leading-relaxed">
                這一講中妮塔分享了多個極具個人色彩的異象經歷（以色列邊界的雕刻、地獄的景象、對特定城市審判的預告），這類帶著強烈啟示性、預言性的教導，在不同神學傳統與教會群體中，會有不同的接受度與詮釋方式。閱讀這類內容時，一個健康的態度是：既不因為它出自一位受敬重的牧師就全盤照單全收，也不因為超出自己過去的經驗範疇就直接否定，而是回到聖經的整體教導去對照、查驗（帖前五：20-21「不要藐視先知的講論。但要凡事察驗，善美的要持守」），並留意這些教導最終指向的，是否是讓人更謙卑、更愛神愛人、更迫切為失喪的靈魂禱告——這也正是妮塔自己在異象中反覆強調的核心：神在乎的是靈魂，不是地土或政治立場。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">默想式禱告與現代人的「碎片化注意力」</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔強調日常生活中隨時默想神話語的重要性，這對活在手機、社群媒體、資訊碎片化時代的現代人而言，是特別具挑戰性也特別需要的操練。當注意力不斷被切割、很難維持長時間專注時，「走路的時候思想神的話、上班時抓住片刻默想」這種融入日常節奏、不需要整塊時間的操練方式，反而提供了一條務實可行的路徑，值得讀者認真操練，而不只是停留在「應該要多讀經」的抽象認知上。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">代禱者悔改禱告與群體性、歷史性罪責的關係</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔提到美國因對原住民、黑奴所犯的歷史罪責而需要代禱悔改，這涉及「認同性悔改」（Identificational Repentance）這個在近代靈恩派代禱運動中常見的概念——代表一個群體或國家，為祖先或前人所犯、自己並未親自參與的罪向神認罪悔改。這個概念在教會歷史與神學界有不同的評價與討論空間，讀者可以將其視為一種代禱操練的具體切入點：與其抽象地為國家禱告，不如誠實面對這片土地、這個群體歷史上真實存在過的不公義，帶著謙卑的心為此代求。
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
              '五種禱告類型（懇求、呼求、代求、默想、相遇）中，你最常用的是哪一種？最少操練的又是哪一種？',
              '「代求式禱告」提醒我們，為得罪自己的人禱告，其實是扮演憐憫的審判官、使雙方都得釋放。你生命中有沒有一位得罪過你、需要你這樣代禱的人？',
              '你的讀經與默想生活，是被安排在固定的整塊時間，還是能像妮塔說的那樣，融入走路、通勤、工作的零碎時刻？哪一種對你更可行？',
              '「神在乎的是靈魂，不是土地」這個提醒，如果應用在你目前最放不下的某個處境（可能是家庭、財產、地位相關的事），會給你什麼樣的角度轉換？',
              '對於這一講中帶有強烈預言、異象色彩的內容，你的第一反應是全盤接受、保持存疑，還是介於兩者之間？是什麼形塑了你這樣的反應？',
              '如果要你今天為你所在的國家或城市寫一句悔改代求的禱告詞，你會怎麼寫？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 挑一節經文，練習「隨時默想」</h4>
              <p className="text-gray-700 mb-2">本週選一節經文（可從本講列出的默想相關經文中挑一節），寫在隨身可見的地方（手機桌布、便條紙），一天中利用等車、走路、排隊的零碎時間反復默想這節經文，晚上記錄這樣的操練帶來什麼不同。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">⚖️ 練習「審判官式」的代求禱告</h4>
              <p className="text-gray-700 mb-2">
                想一位曾得罪你、傷害你的人，這一週為他做一次「代求式禱告」：不是要神懲罰他，而是求神施行憐憫的審判，使他從捆綁他的罪或傷害中得釋放，也求神在這過程中釋放你自己。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 為所在的國家／城市悔改代求</h4>
              <p className="text-gray-700 mb-2">
                誠實面對你所在的國家或城市歷史上、現今存在的不公義（可以是具體的歷史事件，也可以是普遍性的偶像崇拜、道德淪喪），寫一段悔改代求的禱告文，本週每天讀一遍。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「親愛的天父，禰是全地的審判官，也是全地的拯救者。求禰賜給我更高的智慧，教導我按著禰的心意來禱告，不是按著我自己的意思。求禰使我在默想禰話語的事上剛強，在為人代求的事上滿有憐憫。神哪，禰在乎的是靈魂，求禰也把這樣的心賜給我，讓我不被地上的事牽絆，專心為失喪的靈魂禱告。奉主的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
