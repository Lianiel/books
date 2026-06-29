import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book31Ch6() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">第六章</h1>
        <h2 className="text-xl font-semibold text-gray-700">大洪水審判真相</h2>
        <p className="text-sm text-gray-500 mt-2">書頁 102–148</p>
      </div>

      {/* 開章引言 */}
      <div className="mb-8 rounded-xl overflow-hidden shadow-md">
        <div className="bg-gradient-to-r from-gray-900 to-teal-900 px-6 py-5">
          <p className="text-gray-100 leading-relaxed text-sm">
            耶和華作王，他以威嚴為衣穿上；耶和華以能力為衣，以能力束腰，世界就堅定，不得動搖。你的寶座從太初立定；你從亙古就有。耶和華啊！大水揚起，大水發聲，波浪澎湃。耶和華在高處大有能力，勝過諸水的響聲，洋海的大浪。耶和華啊！你的法度最確；你的殿永稱為聖，是合宜的。
          </p>
          <p className="text-teal-300 text-sm mt-3 text-right italic">——— 詩篇九十三篇全文 ———</p>
        </div>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-teal-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            {/* 全球都被大洪水淹沒 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">全球都被大洪水淹沒</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                大洪水是怎麼來的？地球上哪有這麼多的水？大洪水是不是淹沒了全地球？人類過去到底發生了什麼大事？原來，大洪水審判的那日子，神使「大淵的泉源，都裂開了，天上的窗戶，也敞開了」（創世記七章11節）。在地上，地震使得地殼破裂，原來藏匿在地底豐富的水源，全都湧了出來。在天上，那使地球四季溫暖如春的「水氣層」被撕裂，傾盆大雨，一連四十晝夜，大地氾濫成災。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經記載：「水勢在地上極其浩大，天下的高山都沒了。水勢比山高過十五肘，山嶺都沒了。凡在地上有血肉的動物，就是飛鳥、牲畜、走獸，和爬在地上的昆蟲，以及所有的人都死了。」（創世記七章19至21節）。這大洪水氾濫到地球每一個角落，大洪水比那時最高的山還深過八公尺，除了方舟上的生命，無一人生還。這次全球徹底的大毀滅，可以在全世界各地找著這樣的證據：
              </p>
              <div className="space-y-3 ml-2">
                <div className="flex gap-3">
                  <span className="text-teal-600 font-bold flex-shrink-0">（一）</span>
                  <p className="text-gray-700 leading-relaxed">考古學家在全球各地，包括喜馬拉雅山上，發現海生動物的化石，顯示這地球一度確實被海洋淹沒。就是連非洲的撒哈拉沙漠裏也發現海生大貝殼的化石（見圖40）。事實上，化石就是大洪水存在的最好證據，因為生物突然被埋在水裏的沉積物中，以致沒有野獸叼掉或是被細菌腐蝕，這也就是產生今天大量化石的主要原因。</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-teal-600 font-bold flex-shrink-0">（二）</span>
                  <p className="text-gray-700 leading-relaxed">在地球的一些煤層中，發現不少海生動物的化石混雜其中，在中間還發現不少樹幹立在穿越四、五層不同的地層裏，顯然是植物在變成煤層以前，曾受到大洪水的沖擊而大亂（見圖41）。</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-teal-600 font-bold flex-shrink-0">（三）</span>
                  <p className="text-gray-700 leading-relaxed">今天全球各地，尚有大量的鹽水湖存在，有些則是大洪水留下的振跡。處在中國的青海、哈薩克斯坦的鹹海、伊朗以北的裏海等等都是其中的例子。在美洲也有許多內陸鹽水湖，位於加州優勝美地公園附近的Mono Lake，就是一個很明顯的例子。</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-teal-600 font-bold flex-shrink-0">（四）</span>
                  <p className="text-gray-700 leading-relaxed">考古學家在全球許多地方都發現大量不同生物混合在一起的化石——其中有哺乳類、恐龍類、爬蟲類、魚類，甚至還有鳥類也被葬在一起。特別是鳥類為了便於飛行，一般的骨骼都很輕，牠們在死亡後很難在水面上或是骨骼落在地上，都非常容易腐爛，除非是經過某種突然性的大災難。不過自 1970 年代開始，考古學家發掘到大量的鳥類化石，而且這些混合不同生物的化石，很多都有折斷的跡象，顯示這些生物在死亡前曾普遍遭受某種強大的外力所沖擊。</p>
                </div>
              </div>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch6-fig40-nautilus-fossil.jpg" alt="圖40 鸚鵡螺化石" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 40 — 非洲撒哈拉沙漠裏也發現海生大貝殼的化石，證明全世界在神創造遠古之後真實曾被海洋淹沒。</p>
              </div>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch6-fig41-rock-layers.jpg" alt="圖41 樹幹穿越岩層" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 41 — 在地球有的地方，發現長達八公尺的樹幹穿越四、五層不同的地層，顯示曾遭受到大洪水沖積所形成。</p>
              </div>
            </div>

            {/* 鑽證如山為何不信 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">鑽證如山為何不信</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                雖然有以上這麼多的證據能證明大洪水確實淹沒全世界，但是為什麼仍有許多人不相信？這是因為許多人對「化石」的誤解的關係。生物是怎麼才成為化石的呢？原來化石是生物骨骸逐漸被地下水中流動的礦質所取代之，SiO₂、碳酸鈣（CaCO₃）、二硫化鐵（FeS₂）等元素，經常溶解在地下的水分裏，如果生物的遺體剛好埋在其中，這些礦物質就會慢慢地溶解到遺體中取而代之，最後將其骨骼變成石頭一般的堅硬。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                所以要成為化石並不需要幾百萬年的時間，實際上如果某生物迅速被土埋，又遇著適當的水分和礦物質元素，那些動物的骨骼很快就可以變成化石。科學家實驗曾證明：難的骨骼或是木塊只需要五年到十年就可以變成化石，大型恐龍的骨骼只需要幾百年就可以變成化石。而大洪水以排山倒海的力道，大量迅速掩埋生物，這正是促進大量化石形成的主要因素。
              </p>
              <p className="text-gray-700 leading-relaxed">
                實際上，許多證明大洪水存在的化石，還沒有完全變成石質，在美國新澤西州 New Jersey 也曾發現恐龍骨骼旁邊有大量的木塊沒有變質。如果恐龍真的在所謂「六千五百萬年前」就死了，這些木塊應早已變成煤炭或是化石了。今天的地球年齡只有 4,470 年左右，所以很可能仍保有原來的樣子。
              </p>
            </div>

            {/* 恐龍何以滅亡 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">恐龍何以滅亡</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                人們注意到恐龍化石是從十九世紀開始的。原來在 1822 年的春天，一位名叫瑪麗的英國婦人在路上撿到恐龍的牙齒，她回去告訴丈夫沼澤醫生 Mantell，醫生喜愛收集化石，所以就回到那地方又繼續發現其他的恐龍化石，這些化石後來經由考古學家鑑定，發現是屬於一種他們以前沒有見過的動物。就在同一個時期，科學家也陸續發掘出其他種類的化石。由於這些化石的遺骸，牙齒和頭骨都非常大，英國著名的解剖學家歐文（Owen）爵士就用希臘文稱牠們為「Deino（恐怖的）Sauros（斬蜥）」，中文翻譯成「恐龍」，此後恐龍的名聲就廣為社會大眾所使用。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                接著，各類恐龍的化石開始在全世界各地都有發現——亞洲、南美洲、北美洲、歐洲、非洲、澳洲、南極等地——其中包括中國大陸東北省、戈壁沙漠裏有許多恐龍化石。恐龍既然過去曾散佈在全世界各地，也證明過去全世界的氣候是四季如春、溫暖一致的。
              </p>
              <p className="text-gray-700 leading-relaxed">
                為什麼恐龍會滅亡呢？進化論學者提出將近五十種不同的說法，但是這些說法都彼此矛盾。有人提出恐龍滅絕的原因是因為恐龍蛋被哺乳動物吃光。實際上，其他的爬蟲類也生蛋，鳥類、蛇、鱷魚今天都活得好好的，為什麼偏偏是恐龍不行？又有人說恐龍的腦袋很小，所以沒有辦法和聰明的哺乳類競爭。若果是這樣，為何其他爬蟲類、昆蟲、哺乳類及及所有的其他生物在「六千五百萬年前」以後都仍然生存？還有人說恐龍是因為「六千五百萬年前」一顆小行星或隕石撞擊地球，進而造成大氣層中懸浮塵土長久遮蔭，植物無法生長，所以恐龍因為沒有食物而相繼死亡，這個理論有許多漏洞，若如此為何其他生物大部分都能生存下來？
              </p>
            </div>

            {/* 大洪水才是恐龍滅亡的主因 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">大洪水才是恐龍滅亡的主因</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                其實由許多目前得到的科學資料顯示，我們可以以證明「大洪水審判」才是恐龍滅亡的主要原因。前面第二章我們已經證明過去古學家引用的第 14 及岩石測量法有明顯的錯誤，我們又證明科學資料顯示地球的年齡是介於 6,126 年至 12,000 年之間，所以進化論估計掩埋恐龍化石的沉積層應該不是「六千萬年前」，其實沉積層的年齡應該只有 4,470 年左右。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經希伯來原文有關「大淵的泉源」— מְעַיְנֹת תְּהֹום רַבָּה（meaynot tehom rabba）—意思是地球深處廣大水床，另外「天上的窗戶」— אֲרֻבֹּות הַשָּׁמַיִם（arubbot hashamayim）—意思是天空某種縫狀的開口，其中「窗戶」這個字是複數名詞，所以應該譯作「眾窗戶」，就是「天上眾多個窗口」的意思。這些窗口很可能就是指那層「水氣層」中如「瓣膜」一樣，是控制「水氣層」出口的「活門」。
              </p>
              <p className="text-gray-700 leading-relaxed">
                今天地球上空的水分，如果集中降到地上，大概一個小時左右就可以全部下完，而且這些雨水只能遮蓋地球表面一時的深度。然而聖經告訴我們，大洪水可以「四十晝夜」降大雨，那就顯明那層「水氣層」的容量必遠超過今天天空中的水分，否則何必「窗戶」？大洪水審判開始以前，神就叫挪亞和他的全家進入方舟，聖經上說：「過了那七天，洪水氾濫在地上。」（創世記七章 10 節）。接著方舟的門封閉了，方舟外面相當於在感知任何彗星或隕石的聲音。從方舟的構造來看，它只能以方舟須第七章圖片，高 1¾ 叫左右，上面並沒有一般船隻的甲板，人不可以在方舟頂端移動，因此挪亞無法感知到方舟外面大洪水發生的細節。
              </p>
            </div>

            {/* 彗星或隕石會擊打地球嗎 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">彗星或隕石會擊打地球嗎</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                由以上的分析可以得到下述幾種假設：（一）神自己手開「天上的窗戶」，破開水氣層，下了四十晝夜，神也自己震開「大淵的泉源」，使地下水都湧出來，於是大洪水氾濫全地；（二）神用其他的方式而達到祂的旨意，藉用某種工具使「天上的窗戶」及「大淵的泉源」，都裂開了，使大洪水淹沒全世界；（三）神使用第（一）和第（二）混合的方式，達成祂審判的目的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                如果神使用後（二）或（三）的方式審判全地，彗星或隕石是非常可能成為這種工具的。聖經上在啟示錄裏，有許多地方都指到主耶穌回來審判全世界的情形。在這次最後大審判面前，聖經幾次提到彗星或隕石擊打地球的預言：「揭開第六印的時候，我又看見地大震動，日頭變黑像毛，滿月變紅像血，天上的星辰墮落在地，如同無花果樹被大風搖動，落下未熟的果子一樣，天就挪移，好像書卷被捲起來，山嶺海島都被挪移本位。」（啟示錄六章 12 至 14 節）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                啟示錄第八章提到七號的預言，其中有：「第一位天使吹號，就有雹子與火攙著血，丟在地上，地的三分之一和樹的三分之一被燒了，一切的青草也被燒了；第二位天使吹號，就有彷彿火燒著的大山投在海中，海的三分之一變成血，海中的活物死了三分之一，船也壞了三分之一；第三位天使吹號，就有燒著的大星，好像火把從天上落下來，落在江河的三分之一，和眾水的泉源上，這星名叫茵陳，眾水的三分之一變成苦膽，因水變苦，就死了許多人……。」（啟示錄八章 7 節）。這些啟示錄上所描述的預言，正是彗星或隕石擊打地球所造成的現象，其破壞力之大可以想像。
              </p>
              <p className="text-gray-700 leading-relaxed">
                有的解經學者強烈地，刻意把這些啟示錄的經節解釋成和風馬牛不相及，又與原文不相干的意思。其實上述經節幾次提到的「星」這個字，希臘原文（ἀστέρος，asteros）就是星的意思，無論是彗星或是隕石所指的都是屬於這種「星」，其字義是非常明顯的。神絕對不會誇張，更不會說謊，何況啟示錄在最後還清楚寫著：「若有人在這書上加添什麼，神必將這書上所記的災禍加在他身上；若有人刪去這預言書上的話，神必從這書上所記的生命樹和聖城刪去他的份。」（啟示錄二十二章 18 至 19 節）。
              </p>
            </div>

            {/* 確實曾有彗星或隕石擊打地球 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">確實曾有彗星或隕石擊打地球</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                1998 年 11 月「美聯社」的消息報導：美國麻克里普斯海洋研究所的科學家，在位於丹麥和西班牙的「恐龍滅絕層」中，發現了大量的鉻同位素「鋥 53」，而這種元素素是由放射性「錳」衰變形成的，這元素素在太陽系中逐漸消失，所以非常稀少；而這種鉻同位素也與流星中的鉻同位素相同，所以科學家又在墨西哥的尤卡坦半島發現了一個巨大的圓圈。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                為了尋找這種彗星或隕石擊打地球的可能性，在美國亞利桑那州溫斯洛附近找到著名的「流星坑」Meteor Crater（見圖46）。這個大隕坑直徑 0.75 英里（即 1.2 公里），深 575 英尺（即 175 公尺），流星重量約 270,000 噸，是幾千年以前彗星或隕石擊打地球所形成的結果（見圖46）。在澳洲西部也有一個巨大的圓圈坑，它的名字叫作「狼溪坑」Wolf Creek Crater，它圓圈表面似乎是由太空拍照被天文撞擊下來的（見圖47）。它圓圈直徑約 22 公里，四周相當崎嶇。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch6-fig46-meteor-crater.jpg" alt="圖46 亞利桑那流星坑" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 46 — 這是亞利桑那州溫斯洛附近的「流星坑」，是幾千年以前彗星或隕石擊打地球所形成的結果，這種彗星或隕石約有 270,000 噸重。</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                洪水審判以後的人類歷史中沒有記載這些事件，而在大洪水以前的歷史和聖經上也都沒有提到這三嗎？除非你不合理了嗎？除此之外，我們還有一個歷史上有記錄的彗星擊打地球的事件可以作為佐證。洪水審判以後在人類歷史中可以找到的記錄，就是在 1908 年六月俄國西伯利亞 Siberia 的鄂畢斯卡河（Tunguska River）森林區，曾發生一次類似彗星擊打地球所形成的爆炸。當時在六百哩（即 966 公里）外的居民都可以聽見爆炸聲，在其爆炸周圍直徑 11 哩（即 18 公里）的樹木全部被擊倒毀滅。1927 年俄國科學家去當地調查研究，以下是根據庫利克 Kulik 在 1929 年 2 月 24 日所拍攝照片而繪製的圖片（見圖48）。俄國科學家認為這還是一顆小型彗星在未擊中地球以前就先爆炸所造成的結果。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch6-fig48-tunguska.jpg" alt="圖48 通古斯大爆炸後的森林" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 48 — 1908 年俄國西伯利亞發生一次類似彗星擊打地球所造成的大爆炸，這是二十一年後在現場看見樹木倒塌的情景。</p>
              </div>
            </div>

            {/* 這個假設並沒有違背聖經 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">這個假設並沒有違背聖經</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                有人說：「如果　神真的使用彗星或隕石為工具，為什麼聖經上沒有說呢？」有關這個問題，我提出三個假設的理由：
              </p>
              <div className="space-y-3 ml-2">
                <div className="flex gap-3">
                  <span className="text-teal-600 font-bold flex-shrink-0">（一）</span>
                  <p className="text-gray-700 leading-relaxed">創世記出埃及記、利未記、民數記和申命記合稱為「摩西五經」，作者應該是摩西。在創世記裏，摩西是根據他所得到的資料，也可能是創世記前部分有神的指示，就是創世記前七章只把「神創造天地到大洪水審判中間幾個世紀的叙述出來」，摩西只有簡略叙述事情，並沒有詳細描述事件發生的細節；聖經沒有詳述其細節是可以理解的。</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-teal-600 font-bold flex-shrink-0">（二）</span>
                  <p className="text-gray-700 leading-relaxed">在大洪水審判的前七天，神就叫挪亞和他的全家進入方舟。聖經上說：「過了那七天，洪水氾濫在地上。」（創世記七章 10 節）。接著方舟的門封閉了，方舟外面相當於在感知任何彗星或隕石的聲音。從方舟的構造（請參見本書第七章圖片），方舟高 1¾ 叫左右，上面並沒有一般船隻的甲板，人不可以在方舟頂端移動，因此挪亞無法感知到方舟外面大洪水發生的細節。</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-teal-600 font-bold flex-shrink-0">（三）</span>
                  <p className="text-gray-700 leading-relaxed">聖經上清楚說：「隱秘的事是屬耶和華我們神的；惟有明顯的事，是永遠屬我們和我們子孫的，好叫我們遵行這律法上的一切話。」（申命記二十九章 29 節）。聖經雖然有些事情的細節是重複的，但是神沒有必要詳述一切細節，如何詳述也是神選擇的自由。</p>
                </div>
              </div>
            </div>

            {/* 大洪水所造成的副作用 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">大洪水所造成的副作用</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                大洪水的審判會不會造成今天地球上的許多副作用？譬如火山爆發、大地震、颶風、龍捲風等是不是由大洪水審判所造成的副作用？要回答這些問題之前，必須先看聖經上的記載：當神創造天地及萬物之後，神看一切所造的都甚美好（創世記一章31節）。很明顯那時地球上根本沒有任何火山爆發、大地震、颶風及龍捲風等各種自然災害的跡兆。這一切都是大洪水審判所造成的副作用。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我仔細觀察人造衛星所拍攝到的地球深海圖片，又再仔細研究地球海底平面圖，都清楚看到亞洲太平洋洋岸沿著日本、台灣、菲律賓、新幾內亞以及紐蘭以以東有一條連繞又非常明顯的地表脈絡——「中央海底山脈」（見圖49）。這「中央海底山脈」分裂整齊，從北到南又在印度洋繼續，分佈在大西洋中間和印度洋中間各有一條非常清楚又分裂整齊的海溝，它們的形狀像是火車軌道，其地理名稱叫作「中央海底山脈」Mid-ocean Ridge。這「中央海底山脈」分裂整齊，從北到南，都很明顯是從地球深底下，「大淵的泉源」裂開了之後噴出岩漿而形成的，也就是大洪水時地殼裂開、大量岩漿噴發後所造成的。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch6-fig49-ocean-ridge.jpg" alt="圖49 中央海底山脈世界地圖" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 49 — 從海底平面顯示的「中央海底山脈」和長條的海底溝（紅色線），這些地貌明顯都是大洪水沖積和地殼裂開所形成的。</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                另外「中央海底山脈」上的海底岩石都很乾淨，並沒有什麼沉積層，顯示這些裂縫都是新造成的。反而靠近陸地地帶的海底，都有沉積層顯示是新造成的。許多海洋科學家注意到，全世界的大洋中間多以都是由「中央海底山脈」裂開的，向兩側大幅裂開（見圖51），使各大洲分開，就像今天分裂的樣子（見圖52）。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch6-fig52-continents.jpg" alt="圖52 各大洲復原位置" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 52 — 將北美洲、南美洲、澳洲、南極移回未分裂前的位置，它們重還原在非洲東岸的上方。</p>
              </div>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch6-fig53-flood-layers.jpg" alt="圖53 大洪水沖積層示意圖" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 53 — 大洪水審判的沖積層把地球表面變成有很大的可塑性，地殼被裂開起來推進地層形成的山脈、海底溝、火山和新的島嶼。</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                以上這些現象都造成今天地震頻繁的效應。每年科學家可以測出大約 500,000 左右的大小地震，其中大概只有 1,000 個是大地震，是一般人可以察覺到的。大洪水審判期間及其後的地殼碰撞與岩漿引起的火山爆發，造成了包括阿爾卑斯山脈、喜馬拉雅山脈的形成，並在全世界各地留下了無數火山（見圖55）。今天全世界地震大多都集中在地殼破裂的地帶附近，大部分活火山都在海底下，從太空中看，紅色三角形就是活火山的位置。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch6-fig55-volcano-map.jpg" alt="圖55 全世界活火山分佈地圖" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 55 — 全世界的活火山大多數都集中在地殼破裂的地帶附近，很多活火山都在海底下，紅色三角形就是活火山的位置（請比較圖49）。</p>
              </div>
            </div>

            {/* 起初是一整塊陸地 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">起初是一整塊陸地</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                如果我們仔細研究考古資料和最新的科學證據，我們都在很明顯地告訴我們地球起初確實是一塊整塊的陸地：
              </p>
              <div className="space-y-2 ml-2">
                {[
                  '在巴西挖掘到在淡水游泳的爬蟲類 Mesosaurus 及其他動物、植物的化石都在南非和南美洲同時發現的化石一樣，而這些動物和植物不可能越過大西洋到對岸去。',
                  '「中央海底山脈」上的海底岩石都很乾淨，並沒有什麼沉積層，顯示這些裂縫都是新造成的。反而靠近陸地地帶的海底，都有沉積層，顯示是靠近陸地地帶的海底已有很長沉積的時間。',
                  '地球表面地殼的厚度約 38 哩到 44 哩（即 70 公里），有的海底地殼的厚度卻只有 4 哩，顯然是在岩漿上面滑動的。目前南美洲和非洲之間的距離每年增加 1.6 吋（即 4 公分），非洲和歐洲的地層平均每年移動 1 吋（即 2.54 公分）的距離。',
                ].map((point, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                    <p className="text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mt-3">
                以上這些證據都和魏格那（Wegener）在 1912 年提出的「大陸飄流說」Continental Drift 有很多不同的地方。「大陸飄流說」的學習受了進化論的影響，在它的學習不在今全球各洲所謂「兩億兩千萬年前」，大陸地塊從一開始就非常緩慢地移動，而完全令外到今天的樣式，所以他們連錯了很多假設的錯誤。在本書的第二章我們已經證明地球的年齡大約是介於 6,126 年至 12,000 年之間，所以進化論估計掩埋恐龍化石的沉積層地塊從一開始就非常緩慢地移動，完全令外到今天的樣式，所以他們連接了很多假設的錯誤——他們以為大陸地殼是非常緩慢地移動，而完全忽略了地底下「大淵的泉源」及其岩漿引起的火山爆發所帶來的衝擊力量。
              </p>
            </div>

            {/* 大峽谷的實例 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">大峽谷的實例</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                就以位於美國亞利桑那州 Arizona 的大峽谷 Grand Canyon 來說吧：進化論學者推論這個峽谷是冰河或是科羅拉多河 Colorado River 經過「百萬年以上」侵蝕造成的。如果你到過「大峽谷國家公園」參觀，你會看到所有關於大峽谷的文字描述都在重複這樣的論點。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我曾親自前往大峽谷觀察，推論大峽谷絕對不可能是冰河或是科羅拉多河經過「百萬年以上」造成的。我從各種角度來看，它們絕對不可能是「百萬年」的成品，大洪水在未期退潮沖衝擊力所造成的結果，實際年齡大概只有 4,470 歲左右（見圖58）。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch6-fig58-grand-canyon.jpg" alt="圖58 大峽谷" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 58 — 大峽谷有的部分深達 18 哩的寬度，谷深一英里左右，很多證據顯示是大洪水末期退潮衝擊所造成的結果。</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                我從觀察這些景觀，各角度來看，它們在外貌上都很類似，這是因為大洪水造成的海底景觀根本上都有其共通性。儘管進化論學者可以對牠地的景觀有各種說法，但是我因為很清楚知道大水所造成的紋路，明眼人觀察這些景觀就可以分辨出這是來自大洪水流水沖擊力的傑作。在亞利桑那州、科羅拉多、新墨西哥、新幾內亞，這些地區的天然景觀確實都有許多類似的大峽谷形狀，這是一模一樣的，我們可以從中看到大洪水的証明。
              </p>
            </div>

            {/* 神話語的警告 */}
            <div>
              <h3 className="font-bold text-teal-700 text-lg mb-3">神話語的警告</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                寫到這裏，我不禁想起彼得彼得所說，他曾說：「第一要緊的，該知道在末世有好譏誚的人，隨自己的私慾出來諷刺說：『主要降臨的應許在哪裏呢？因為從列祖睡了以來，萬物與起初創造的時候仍是一樣。』他們故意忘記，從太古，憑神的命有了天，並從水而出、藉水而成的地。故此，那時的世界被水淹沒就消滅了。但現今的天地，也是憑著那命存留，直留到不敬虔之人受審判，遭沉淪的日子，用火焚燒。」（彼得後書三章 3 至 7 節）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                到此為止，大洪水曾經審判到世界的證據可以說是難以估計。然而是人只會使讀這種謊言說法，我提出了科學上充分的理由，相信「大洪水審判」確實存在，而且覆蓋了全地，有力地抗辯了進化論學者，但是他們仍然固執，不願意承認神的話語是真理。神長久忍耐，一再給人悔改的機會，然而人偏行己路，甚至把神的信息當謊言，讓天父徹底失望了。
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch6-fig64-volcano.jpg" alt="圖64 火山爆發" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖 64 — 1980 年 5 月 18 日聖海倫火山先是發生地震引起雪崩，接著火山爆發到幾乎延伸以外的天空中。神的審判好像這樣突然的臨到世界。</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                想想看，大洪水泛濫直到一年又十天才退去，這說明不可能是局部的大洪水。如果大洪水只是局部的大洪水，還不如讓挪亞帶著全家往別的地方遷移就算了，何必費工夫造了方舟？大洪水審判的真實，就是神話語的真實；神話語的真實，就是神信實可靠的明證。神的話從未落空，神的審判必然到來，正如主耶穌說：「挪亞的日子怎樣，人子降臨也要怎樣。」（馬太福音二十四章 37 節）。
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
            <ul className="space-y-2">
              {[
                '大洪水的四大科學證據：各地海生動物化石（撒哈拉沙漠鸚鵡螺）、煤層中立姿樹幹穿越多地層、全球各地內陸鹽湖、各種生物混合化石且多有折斷痕跡。',
                '化石形成不需百萬年：骨骼在適當水分與礦物質中5–10年即可成化石，大型恐龍數百年可成。恐龍骨髓旁發現未變質木塊，證明其年齡不超過4,470年。',
                '大洪水是恐龍滅絕的主因：地球年齡介於6,126至12,000年之間，沉積層年齡約4,470年；其他生物（哺乳類、鳥類、爬蟲類）都存活，恐龍獨獨滅絕，唯有洪水解釋最完整。',
                '啟示錄中彗星/隕石的預言：希臘原文ἀστέρος（asteros）明確指彗星或隕石；七印七號的描述（星墮落、大山投海、苦艾星落江河）都是彗星擊地的具體現象，神話語真實可信。',
                '大洪水造成的地質副作用：「大淵的泉源」裂開形成中央海底山脈，板塊漂移分裂各大洲，大量岩漿噴發造成火山帶與地震帶，大峽谷等峽谷地貌都是洪水退潮衝擊所形成，非百萬年侵蝕。',
                '神的話語永遠真實：彼得後書三章警告人故意忘記大洪水的真相；末世審判如同挪亞時代的大洪水審判——真實、全球性、突然降臨，「挪亞的日子怎樣，人子降臨也要怎樣」。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「大淵的泉源」與「天上的窗戶」——希伯來文的地質神學</h4>
              <p className="text-gray-700 leading-relaxed">創世記七章11節的兩個希伯來片語揭示了大洪水的雙重機制：מְעַיְנֹת תְּהֹום רַבָּה（meaynot tehom rabba，大淵的眾泉源）指地殼深處廣大的水床因地震裂開；אֲרֻבֹּות הַשָּׁמַיִם（arubbot hashamayim，天上的眾窗戶）中「窗戶」為複數，指水氣層的多個「活門」被打開。這個描述精確對應了現代地質學的板塊裂縫（中央海底山脈）和水氣層崩潰模型，聖經在數千年前的記載與現代科學發現高度吻合。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">全球性洪水傳說——各民族的共同記憶</h4>
              <p className="text-gray-700 leading-relaxed">古代全球將近兩百個民族都有關於大洪水和方舟的傳說，有的因為沒有文字記載下來，只好以口傳過程中造成很多的出入。巴比倫歷史書裏也曾提到「洪水」和「大船」，甚至連埃及的記史都記載著大洪水使世人被淹沒、只有幾個人最後到高山上得救的故事。美洲的印地安人也是百多族，幾乎每一族都有傳說人漂流在大洪水中、最後船停在高山上才得救的故事。這些跨越文化、地理的共同記憶，是大洪水真實性最有力的人文證據。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">板塊構造與大洪水——快速大陸漂移假說</h4>
              <p className="text-gray-700 leading-relaxed">傳統地質學的「大陸漂流說」（Wegener，1912）假設大陸地殼以每年數釐米的速度緩慢移動，需要億萬年才能到達現在的位置。但創造論地質學家提出「快速大陸漂移」（Catastrophic Plate Tectonics）假說：大洪水期間「大淵的泉源」裂開，大量熱岩漿噴出，地幔對流劇烈加速，在數月至數年內即完成大陸分裂，而非億萬年。中央海底山脈岩石異常年輕、海底無厚層沉積物等特徵，都支持快速分裂的假說。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">挪亞時代與末世——「日子怎樣，人子降臨也要怎樣」</h4>
              <p className="text-gray-700 leading-relaxed">主耶穌在馬太福音二十四章37節將末世與挪亞時代相比較，強調的不是審判的方式，而是人的無知與不信：「那時，人照常吃喝嫁娶，直到挪亞進方舟的那日，不知不覺洪水來了，把他們全都沖去。」（太24:38-39）。彼得後書三章3-7節指出末世嘲笑者故意忘記大洪水，這是靈性蒙蔽的表現。末世的火審判（啟示錄的七印七號）與大洪水的水審判，在規模、突然性和審判的徹底性上都有相似之處——神的審判是認真的、真實的。</p>
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
              '本章提供了大量大洪水的科學證據。讀完這章之後，你個人對「神的審判是真實的歷史事件」這個信念有什麼改變或加深？',
              '彼得後書三章說末世的人「故意忘記」大洪水的真相。你認為今天的人為什麼不願意相信審判的真實性？你自己有沒有「故意忘記」某些神話語的時候？',
              '大峽谷、中央海底山脈、各地鹽湖——這些你可能曾在旅遊或課本中接觸過的地理景觀，現在你會用什麼不同的眼光去看待它們？',
              '挪亞時代的人「不知不覺洪水來了」。你認為自己目前的信仰生命有沒有足夠的敬畏感，不是麻木地生活，而是清醒地等候主？',
              '神是公義的審判者，同時也是方舟的提供者——祂讓挪亞在審判之前有七天可以進入方舟。這讓你對神的性情（公義與慈愛並存）有什麼理解？',
              '本章大量引用科學資料來支持聖經記載。你認為科學與聖經之間的關係應該是什麼？科學是否能「證明」聖經，或者信心是超越科學論證的？',
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 建立「清醒等候」的生命態度</h4>
              <p className="text-gray-700 mb-2">本章提醒末世審判如大洪水，突然且全面。本週每天早晨問自己：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>「今天如果是我生命的最後一天，我有沒有遺憾的事要處理？」</li>
                <li>「我有沒有還未和好的關係需要修復？還未傳福音的親友？」</li>
                <li>以挪亞「與神同行」的態度，不是恐懼審判，而是清醒預備。</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 讀彼得後書三章——回應末世嘲笑者</h4>
              <p className="text-gray-700 mb-2">本章多次引用彼得後書三章。本週完整讀完彼得後書三章1-18節：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>記錄「末世嘲笑者」的特徵，對比自己是否有相似的心態。</li>
                <li>彼得後書三章9節說神不願有一人沉淪——思想你可以為誰代禱或傳福音？</li>
                <li>彼得後書三章11-14節問：「這一切都要銷化，你們為人該當怎樣聖潔，怎樣敬虔呢？」</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 用「大洪水眼鏡」看世界</h4>
              <p className="text-gray-700 mb-2">本章提到大峽谷、中央海底山脈、化石等都是大洪水的印記。本週嘗試：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>在網路上查找大峽谷或中央海底山脈的照片，默想這些是神審判的記號。</li>
                <li>當你看到任何地理壯觀景象，讓它提醒你神審判的真實和神創造的偉大。</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 禱告</h4>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-gray-700 leading-relaxed italic text-sm">
                  「公義聖潔的主，感謝祢的審判是真實的，祢的話語永不落空。感謝祢在大洪水審判中為挪亞提供方舟，也在今天為我們提供了祢獨生子耶穌基督作為我們的方舟。求祢幫助我不要像末世的嘲笑者一樣故意忘記祢的話，而是清醒地等候祢的再來。讓我的生命成為向身邊人見證的亮光，讓他們也能在審判之前進入祢的恩典。奉主耶穌的名禱告，阿們。」
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
