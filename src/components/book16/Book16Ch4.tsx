import React from 'react';
import { ChevronDown, ChevronUp, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book16Ch4() {
  const [expanded, setExpanded] = React.useState<Record<string, boolean>>({
    content: true,
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">三階</h1>
        <h2 className="text-xl font-semibold text-gray-700">終末中與上帝親近</h2>
        <p className="text-gray-500 mt-2 text-sm">思想死亡 · 復活的確據 · 以馬忤斯門徒 · 默想到默觀</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <div>
              <h3 className="text-lg font-bold text-purple-700 mb-3">三階操練的起點</h3>
              <p className="text-gray-700 leading-relaxed">
                如果說二階操練側重如何在日常生活中活出來，就是通過操練委身、順服和愛心，讓心靈發揮引導思想、情感及行為的作用，那麼三階操練的起點就是通過默想和預備將來，在此世操練一種有終末維度的生活，從而達到心靈及新生命與被造界的和解，既不迷戀這世界，同時能夠努力完成自己當做的。具體的操練包括兩個層面：（1）默想人的死亡與離世，勝過對死亡的憂懼；（2）默想將來的生活及世界，以瞭解將來的美好。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-purple-700 mb-3">一、思想死亡</h3>

              <h4 className="font-semibold text-gray-800 mb-2">死亡的憂懼：最頑固的罪性</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                對加爾文來說，默想永生首要面對的就是人罪性中最頑固的東西——害怕死亡。害怕死亡使人不能積極地面對死亡，亦因此無法樂觀地面對死之後的生命。即使人在道理上似乎可以明白，死亡不過是生命的一個轉換；死亡就是一道門，人從這裡邁出去，進入一個更大、更廣闊的天地。然而，理智上明白是一回事，下意識地憂懼則是另一回事。
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">伊壁鳩魯式的安慰為何不夠用</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                面對死亡帶給人的憂懼，唯物主義者的解決途徑基本上取自古代伊壁鳩魯派（Epicureanism）哲學家的自我安慰法：人臨死的痛苦或憂懼只是從人肉體而來的一種感覺，當人還有這種感覺的時候，說明人並沒有死，所以那只是人嚇唬自己的想像，不需要當真；而一旦人死了，就不會有這種感覺，也就不需要擔憂了。但有可能讓這些伊壁鳩魯式的唯物主義者們混淆的地方，就是死亡究竟是一瞬間的事，還是一個過程。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                電影《非誠勿擾》（二）中有一位患了絕症的人，在彌留之際，向好友表達了這種憂懼：當他推開死亡這扇門時，門的後面是什麼？是一條有亮光的路，還是一片漆黑的斷崖？這讓當事人不能不感到憂懼——並不在肉體方面，而是面對那「讓人無法把握的處境」的靈魂之憂。
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">靈魂赤身而立的憂懼</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經更深入地說明人的憂懼源自靈魂的獨自存在，乃是指靈魂赤露在身體外帶來的憂懼。正是出於這種憂懼，保羅說：「我們原知道，我們這地上的帳棚若拆毀了，必得上帝所造，不是人手所造，在天上永存的房屋。我們在這帳棚裡歎息，深想得那從天上來的房屋，好像穿上衣服。倘若穿上，被遇見的時候就不至於赤身了。」（林後5:1-3）保羅沒有表現出蘇格拉底式的氣概，把死亡看作是靈魂脫離身體的機會，而是盼望「不至於赤身」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在死亡面前，當靈魂赤身、失去它原有的遮蓋時，即意識到失去其所有存在的理由，以及為自己找到的存在意義，靈魂不能不面對那望不到盡頭的、讓人窒息的、虛無的吞噬。這個過程猶如靈魂赤裸無助地站在法庭上被審判，卻發現沒有任何人站在自己一邊，只好眼看著那扇監獄大門在自己身後緩慢且永久地關閉。
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">越過死亡冰河的唯一途徑</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                越過死亡的冰河只有一個途徑——耶穌的復活。因為只有耶穌的復活帶給人一個確據：他已經越過了死亡的冰河，且沒有被吞沒。上帝的兒女「既同有血肉之體，他也照樣親自成了血肉之體，特要借著死，敗壞那掌死權的，就是魔鬼，並要釋放那些一生因怕死而為奴僕的人」（來2:14-15）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                「這必朽壞的總要變成不朽壞的，這必死的總要變成不死的……死啊，你得勝的權勢在哪裡？死啊，你的毒鉤在哪裡？」（林前15:53-55）當我們進入到復活的基督裡的時候，死亡帶給我們的憂懼就被釋放了。那真正的平安充滿了我們的靈魂，因為當我們的靈魂面臨審判時，上帝的兒子已經為我們付上了代價，保惠師聖靈成了我們最好的辯護者。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-purple-700 mb-3">二、以馬忤斯門徒——終末維度的三個階段</h3>

              <h4 className="font-semibold text-gray-800 mb-2">第一階段：理想的破滅與生命的絕望</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                《路加福音》24章描述了耶穌的兩個門徒，在耶穌被釘十字架及被埋葬後，離開了耶路撒冷這個讓他們感到傷心與絕望之地。他們所盼望要贖以色列民的那位，卻被定了死罪，釘在十字架上，使他們的盼望都落空了。在耶穌被釘十字架後，一眾門徒經歷了過去理想的破滅，以及生命的絕望——如同經歷了死亡一樣。
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">第二階段：空墳墓、復活的顯現與聖經的講解</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                他們看見空的墳墓，並親眼見到復活的耶穌，聽到他對聖經的講解。這位同行的陌生人從摩西和眾先知起，凡經上所指著自己的話，都給他們講解明白了——可能講解了五六個小時（走二十五裡路的時間）。到了以馬忤斯，在一同坐席時，「他們的眼睛明亮了，這才認出他來」（31節）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                路加兩次強調復活的耶穌給門徒講解聖經，可見耶穌被釘十架以及他的復活，是如此劇烈地衝擊著門徒的彌賽亞觀念，以致如果不是復活的耶穌親自為他們講解，改變他們的彌賽亞觀，他們不可能理解耶穌的復活，也不可能理解耶穌就是那位彌賽亞。
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">第三階段：五旬節——終末維度的開啟</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                即使頭腦上明白聖經，甚至在主日看到復活的基督，但門徒仍未對基督復活有更深的認識，直到他們經歷了第三階段：在五旬節領受聖靈，開啟了終末的維度。聖靈澆灌下來意味著末後時代的開始，就是上帝國在這個世界的開始（徒2:17）。由於現在已經進入末後的時代，門徒開始關心將來如何，而不再是過去的夢想。
              </p>
              <p className="text-gray-700 leading-relaxed">
                終末的態度的一個基本特徵，就是我們當下所做的那些具體事務，無論是個人的工作抑或教會的事工，只是為著耶穌基督隨時再來做好預備，因此具有其重要的意義。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-purple-700 mb-3">三、有終末維度的現實生活</h3>

              <h4 className="font-semibold text-gray-800 mb-2">接受有限與殘缺</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                生活中終末維度的具體表現主要有兩方面：首先，人接受了自己的有限與殘缺，已經看到了自己的死亡，因此能夠更真實地認識生活於其中的現實世界；其次，人開始對將來有盼望，於是在這盼望的基礎上默想將來。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                如同雅各在經歷了與上帝的使者摔跤後，接受了自此大腿瘸了的事實——接受殘缺、看到自己的有限，顯出我們在地上生活的真實，原本混雜於其中的世俗幻想則被天上的盼望取代。在患難中的忍耐不是消極的，它會生出老練；老練會生出盼望，而盼望終不至於讓我們羞愧。（羅5:4-5）
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">數算日子的智慧</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                「求你指教我們怎樣數算自己的日子，好叫我們得著智慧的心。」（詩90:12）「數算」是指開始清楚自己的日子還剩下多少，這只有上帝才能讓我們領悟到，否則我們總以為以後的日子還有很長。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者曾有位弟兄突然離開了他們。那天晚上還在一起吃飯，分別後不到一個小時，就接到他因車禍被送醫院的消息。事後，他回家寫了人生第一份遺囑。生命在上帝的手中，說離開就離開，所以當做好預備，將現在就能交代的早點交代清楚，好讓我們的心能專注在上帝呼召我們要做的事上。
              </p>

              <h4 className="font-semibold text-gray-800 mb-2">對將來世界的思想：C.S.路易士的洞見</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅說他正在兩難之間，情願離世與基督同在，因為這是好得無比的（腓1:23）。C.S.路易士在寓言小說《開往天堂的巴士》（The Great Divorce）中，描述了多種不同類型的人，在到達天堂的門口時不想進去，因為那個地方與他們想像的實在有很多不同，是他們不能適應的——他們寧願回到原地也不願把自己交出去。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                路德在彌留之際，口中不斷地重複：「上帝愛世人，甚至將他的獨生子賜給……」旁邊的朋友問他：「在你死時，你堅持你所信的基督和你所傳揚的教訓嗎？」路德的身體動了動，大聲地說：「是的！」這個回答不是經過頭腦思考之後的，而是下意識湧出來的（所以心靈是否真的重生十分重要）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                靈修操練：每週一次安息的時間，放下所有事務，到某個自然的場景中默想將來。愛德華茲時常去樹林中散步，不知道是因為有空閒，還是內心有著要與主基督約會的期盼。或許只是因為有這樣的期盼，才會讓人有可能放下時間表上排滿的事務。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-purple-700 mb-3">四、由默想到默觀</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                在默想中，只有當一個人願意將自己完全獻上的時候，他才有可能與基督相遇；只有在與基督相遇的時候，人才會靜下來、停下來，仔細地觀看，一道不起眼、平時很容易溜過去的縫隙才會顯露出來。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                默想（meditation）與默觀（contemplation）的主要區別，在於「默想操練的物件通常是人或事情，也包括耶穌所說的真理，焦點在於人、事和真理，而不在於耶穌自己或他與默觀者之間的互動關係；至於默觀操練的物件則是耶穌自己，注視的焦點是耶穌這個人，並留意他與自己的互動」。
              </p>
              <p className="text-gray-700 leading-relaxed">
                路德說過，聖經是承載了耶穌基督的馬槽。確實，我們需要借助對聖經的默想以尋求耶穌基督。我們不要將默想與默觀分開談論，可以將兩者的關係比喻為飛機要在跑道上助跑後才可飛起來一樣。如果不借助對上帝話語的默想，我們不一定能夠直接默觀。
              </p>
            </div>

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
              <h4 className="font-semibold text-gray-800 mb-2">死亡作為靈修操練——從蘇格拉底到保羅的對比</h4>
              <p className="text-gray-700 leading-relaxed">
                蘇格拉底時代，希臘哲學就把哲學的學習與思考定性為「預備死亡」。蘇格拉底面對死亡的氣度令人欽佩——靈魂脫離身體這個墳墓，回歸到純粹精神的領域。但保羅的態度截然不同：他不盼望靈魂赤裸地脫離身體，而是盼望「穿上」那從天上來的房屋，即復活的身體（林後5:1-4）。這個對比揭示了基督信仰的獨特之處：人不是靈肉二元的存在，救贖包括身體的復活，而非靈魂逃脫身體的束縛。這一點使得基督信仰的終末觀根本有別於柏拉圖主義。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">現代生存哲學家論「憂懼」——海德格爾與基督信仰的對話</h4>
              <p className="text-gray-700 leading-relaxed">
                現代生存哲學家們雖然不願意提及人的靈魂，但他們差不多都把憂懼（不安、畏或焦慮）視作人之為人的基本生存特質。海德格爾發現，現代人通常選擇活在「常人（眾人）」的生活方式中，以避開這種「憂懼」——儘量避免在現實生活中獨自做判斷並因此獨自承擔責任。每個人都必須獨自面對死亡，這種「獨自承擔」揭示出人的存在的根本性孤獨。基督信仰的回應是：我們不必獨自面對死亡，因為基督已經越過了死亡的冰河，在那裡等候我們。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">以馬忤斯的三個階段與當代教會的對應</h4>
              <p className="text-gray-700 leading-relaxed">
                以馬忤斯門徒的三個階段（理想破滅→遇見復活的基督→領受聖靈）在今天仍有深刻的對應。很多中國教會信徒在理想的破滅（教會紛爭、帶領者跌倒、事工失敗）後離開了教會。但這正是一個可以深化對基督的認識的機會：讓理想破滅之後，讓那位「同行的陌生人」（復活的基督）來解釋聖經，使他們的彌賽亞觀得到根本性的更新——從「成就我的目標的基督」轉向「引領我進入他的死與復活的基督」。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">默觀傳統與改教家的平衡</h4>
              <p className="text-gray-700 leading-relaxed">
                默觀（contemplation）傳統在中世紀天主教靈修中佔有核心地位，強調靈魂直接「看見」上帝。宗教改革對此有所修正：改教家（特別是加爾文）強調人在此世對上帝的認識永遠是有限的，透過聖靈和話語而非直接的神秘經驗。但改教家並沒有完全否認默觀的可能，而是將其置於聖經默想的基礎上——就如本章比喻的「飛機在跑道上助跑後才飛起來」。這個平衡點對今天追求屬靈深度的信徒非常重要。
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
            {[
              '你有沒有認真思考過死亡？你對死亡的主要感受是什麼——是憂懼、平靜、迴避，還是某種混合？是什麼讓你有這種感受？',
              '如果耶穌的復活是你越過死亡冰河的唯一確據，這個確據對你有多真實、多切身？是一個抽象的教義，還是一個在患難中能支撐你的活盼望？',
              '以馬忤斯門徒的故事中，你最能認同哪個階段？你有沒有經歷過「理想的破滅」——某個關於上帝、教會或信仰的夢想落空？那次經歷如何改變了你對基督的認識？',
              '你有沒有過接受自己「有限與殘缺」的時刻——就像雅各的大腿瘸了？那次接受帶來的是失落，還是某種奇特的自由和真實感？',
              'C.S.路易士描述的那些「到了天堂門口不想進去」的人，有哪些類型讓你感到共鳴，或者讓你想到自己可能的盲點？',
              '如果有人問你，在你彌留之際，你最想要脫口而出的話是什麼？那句話現在在你心裡有多真實？',
              '你有沒有嘗試過「默觀」——不只是思考關於基督的真理，而是凝視基督這個位格本身，注意他與你之間的互動？你覺得這有什麼吸引力，又有什麼困難？',
            ].map((q, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0">{i + 1}.</span>
                <p className="text-gray-700 leading-relaxed">{q}</p>
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
              <h4 className="font-semibold text-green-700 mb-2">✍️ 寫下你的墓誌銘與遺囑</h4>
              <p className="text-gray-700 mb-2">這個操練可能是你做過最有深度的靈修操練之一：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>安靜禱告半小時，然後為自己寫一個墓誌銘（三到五句話）</li>
                <li>概括一下自己的一生，看看人生有哪些遺憾、有哪些安慰</li>
                <li>寫一份簡單的遺囑，把離世前需要安排的事逐樣清楚</li>
                <li>問自己：有哪些事是我至今仍無法放下的？有哪些人是我有所虧欠的？</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🌿 每週一次的終末默想</h4>
              <p className="text-gray-700 mb-2">選擇每週一個固定時段，進行終末默想：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>去一個自然環境中（公園、湖邊、山上）散步</li>
                <li>放下手機，讓自己的心靈有空間思念「那將來的家」</li>
                <li>默想新天新地、復活的身體、與基督同在的榮耀</li>
                <li>回來後記錄下任何在那時光中湧起的思想或感動</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 從默想到默觀的練習</h4>
              <p className="text-gray-700 mb-2">本週嘗試在靈修中進行這個過渡：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>選取約翰福音一段（如21:15-19，耶穌問彼得「你愛我嗎？」）</li>
                <li>先用默想的方式思考經文的意思（15-20分鐘）</li>
                <li>然後嘗試「默觀」：放下文字分析，凝視耶穌這個人本身，讓他問你同樣的問題</li>
                <li>在靜默中留意他與你之間的互動，不要急著用語言表達</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">📿 數算日子的操練</h4>
              <p className="text-gray-700 mb-2">借著詩篇90:12的默想，操練「數算日子」：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>計算一下：如果按平均壽命，你大概還有多少年、多少個主日？</li>
                <li>問自己：如果只剩下半年，我最想把時間用在哪裡？</li>
                <li>把那件「如果沒做，離世時會遺憾」的事寫下來</li>
                <li>把這個問題帶入禱告，請主帶領你如何在有限的時間裡做好最重要的事</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告詞</h4>
              <p className="text-gray-700 leading-relaxed italic text-sm">
                「主耶穌，你已經越過了死亡的冰河，在那裡等候我。我承認我常常迴避思想死亡，以為這樣可以活得輕鬆些。但你呼召我誠實地面對這一切。讓我接受自己的有限，讓那些世俗的夢想被你天上的盼望所取代。求你讓我真正渴慕那將要來的榮耀，不再讓地上的事情把我的心靈完全佔據。讓我今天的每一天都帶著終末的維度——知道你隨時可能來，讓我在你來的時候可以說：主，我已預備好了。阿們。」
              </p>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
