import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch19() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第十九章</h1>
        <h2 className="text-xl font-semibold text-gray-700">蛇魔鬼撒旦</h2>
        <p className="text-gray-500 mt-1">耶和華神所造的，惟有蛇比田野一切的活物更狡猾。蛇對女人說：「神豈是真說不許你們吃園中所有樹上的果子嗎？」……耶和華神對蛇說：你既做了這事，就必受咒詛，比一切的牲畜野獸更甚；你必用肚子行走，終身吃土。我又要叫你和女人彼此為仇；你的後裔和女人的後裔也彼此為仇。女人的後裔要傷你的頭；你要傷他的腳跟　創世記三1，14-15</p>
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
              這段經文最早講到蛇，也最早講到撒旦，因為這裡的蛇乃是魔鬼撒旦。啟示錄有三處經文，清楚交代了這古蛇的身分與結局。啟示錄十二9：「大龍就是那古蛇，名叫魔鬼，又叫撒但，是迷惑普天下的。他被摔在地上，他的使者也一同被摔下去。」啟示錄二十2-3：「他捉住那龍，就是古蛇，又叫魔鬼，也叫撒但，把他捆綁一千年。扔在無底坑裡，將無底坑關閉，用印封上，使他不得再迷惑列國。等到那一千年完了，以後必須暫時釋放他。」啟示錄二十10：「那迷惑他們的魔鬼被扔在硫磺的火湖裡，就是獸和假先知所在的地方。他們必晝夜受痛苦，直到永永遠遠。」
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、蛇</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                蛇與魔鬼不全然相等，自然界的蛇會咬人，一般人不喜歡蛇，會害怕蛇，但蛇不全然是害人的。在摩西為要帶領百姓出埃及而去見法老時，亞倫的杖變成蛇，且能將法老的術士所變出來的蛇吃掉，所以這蛇是神的工具，扮演屬靈爭戰中正面的角色。如出埃及記七10-12所記：「摩西、亞倫進去見法老，就照耶和華所吩咐的行。亞倫把杖丟在法老和臣僕面前，杖就變作蛇。於是法老召了博士和術士來；他們是埃及行法術的，也用邪術照樣而行。他們各人丟下自己的杖，杖就變作蛇；但亞倫的杖吞了他們的杖。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                禧年國度時，自然界的蛇不再咬人，從狡猾改變成善良、精明。如以賽亞書六十五25所記：「狼必與羊羔同食；獅子必吃草與牛一樣；塵土必作蛇的食物。在我聖山的遍處，這一切都不傷人，不害物。這是耶和華說的。」魔鬼可稱之為靈界的蛇，但牠不會改變為善良，最終要被扔在硫磺的火湖裡。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經說：「耶和華神所造的，唯有蛇比田野一切的活物更狡猾。」（創三1）狡猾這個字的希伯來文是 עָרוּם（aruwm），在創世記只出現1次，另在約伯記2次，分別譯為狡猾、詭詐。箴言出現8次，都譯為通達，看箴言出處的上下文，若譯為精明、機智也恰當。這字譯為負面的意思有三次，譯為正面的意思有八次，不看道德的角度，其共同點應是精明。若神所造的原來是好的，蛇原來的特性應該就是精明、靈巧，被魔鬼利用之後才變成狡猾。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                耶穌教導門徒，要靈巧像蛇，這是正面的，值得大家學習。馬太福音十16：「我差你們去，如同羊進入狼群；所以你們要靈巧像蛇，馴良像鴿子。」因此可推論，蛇被造有精明、靈巧的特性，後來用在不好的方面變成狡猾、詭詐；魔鬼尚未犯罪以前原來是光明的天使長，有聰明、智慧，跟蛇相似，後來犯罪墮落，那特性就轉成狡猾、詭詐。人也是如此，一個兒少時本來很精明、聰慧的人，長大後不走正路，會變成很滑、詭詐的人。一流的大學若只注重知識、智能的提升，不僅能培養出人才，也能培養出犯罪高手。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                到底欺騙亞當、夏娃的蛇是不是真的蛇，可以有兩個答案。第一個答案是魔鬼本身具有蛇的形象，所以魔鬼出現時，看起來像蛇。在聖經的例子裡，四活物、基路伯是天使長等級的，有獅子、鷹、牛、人的樣子，但牠不是真的獅子、鷹、牛、人。（結一10，啟四7）第二個答案是魔鬼附身在蛇身上，或者影響蛇藉蛇說話。在聖經的例子裡，曾經有巴蘭的驢說出人的話。民數記廿二28-30：「耶和華叫驢開口，對巴蘭說：我向你行了甚麼，你竟打我這三次呢？巴蘭對驢說：因為你戲弄我，我恨不能手中有刀，把你殺了。驢對巴蘭說：我不是你從小時直到今日所騎的驢麼？我素常向你這樣行過麼？巴蘭說：沒有。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                驢仍然是驢，但神那時讓牠能說話；魔鬼用牠的能力，使蛇說話，也是有可能。有一次，彼得勸耶穌不要上耶路撒冷，以免被殺。耶穌對彼得說：「撒但，退我後邊去罷！你是絆我腳的；因為你不體貼神的意思，只體貼人的意思。」（太十六23）這代表撒旦能影響彼得，藉彼得說話。不管這蛇是不是真蛇，魔鬼撒旦在其中扮演主要角色是肯定的。因此後面的審判咒詛應該主要是針對魔鬼撒旦。（創三14-15）
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、魔鬼撒旦</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                和合本聖經，舊約沒有用到魔鬼這個詞，多數說到鬼、交鬼，少數說到鬼魔。共有173次。在新約，有34次講到魔鬼，其中有兩次說，魔鬼就是那古蛇。新約時代第一次出現記載在馬太福音四1-11，講到魔鬼三次試探耶穌。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                魔鬼在舊約第一次出現是來試探亞當、夏娃，在新約第一次出現是來試探耶穌，而亞當是第一個人，耶穌是第二個人（林前十五45-47）。由此可見，魔鬼的主要工作就是來試探人、引誘人。兩次的差別是亞當、夏娃被引誘犯罪，失敗了。耶穌基督拒絕了撒旦的引誘，得勝了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經中，撒旦共出現48次，在舊約14次，1次在歷代志上，2次在撒迦利亞書，11次在約伯記。若要從舊約認識撒旦，優先要看約伯記。撒旦在新約出現34次，其中兩次與魔鬼同列，都說是那古蛇。從整本聖經來看，大致可結論，魔鬼、撒旦、古蛇，三者是同一個，是背叛神的天使裡面的頭頭，鬼、鬼魔、污鬼則是指跟隨魔鬼撒旦背叛神的大群壞天使。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                天使是何時被造的？主要有兩處相關經文，一處是創世記一1，前面第二章有提過，神創造天地的天是諸天，有可能包括天使。另一處在約伯記三十八4-7：「我立大地根基的時候，你在那裡呢？……那時，晨星一同歌唱；神的眾子也都歡呼。」神在立大地根基的時候沒有人，第7節說的「神的眾子」，應該就是眾天使。約伯記一6也說到：「有一天，神的眾子來侍立在耶和華面前，撒但也來在其中。」可推知在約伯記裡面，神的眾子就是眾天使。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                約伯記三十八4-7是詩歌體裁，晨星和神的眾子放在平行對應的位置上，所以晨星也是指天使。自然界的晨星真實存在，就是九大行星裡的金星。水星與金星都在太陽和地球之間，但水星太接近太陽，我們看不見，只有金星靠近太陽又能看得見，所以就成為最明亮的星，但它不能在一般夜間被我們看到，清晨當地球自轉到快面向太陽時，金星會被人看到，那時它就是最亮的星。另一個時間點是在傍晚之後，若金星公轉到另一邊，那就是剛入夜後短時間內有機會看到這個最明亮的星。這恰好可以說明，太陽光如同神的榮耀，是自己發光；晨星的光如同天使長的榮耀，是反射太陽的光。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                魔鬼撒旦及眾天使是怎麼墮落的？聖經沒有直接的答案，僅能間接的推論。最常被引用的是以賽亞書十四12-15：「明亮之星，早晨之子啊，你何竟從天墜落？你這攻敗列國的何竟被砍倒在地上？你心裡曾說：我要升到天上；我要高舉我的寶座在神眾星以上；我要坐在聚會的山上，在北方的極處。我要升到高雲之上；我要與至上者同等。然而，你必墜落陰間，到坑中極深之處。」一般認為，這裡的「明亮之星，早晨之子」是在形容原為天使長的撒旦。有兩個根據。第一個是約伯記已經用了晨星這個詞來指天使，而「明亮之星，早晨之子」就是明亮的晨星，所以可推論是講墮落前的天使長。第二個是牠說了五次「我要」，都是在表達要與至上者同等，這正是魔鬼撒旦的特色；而其結局則是「墜落陰間，到坑中極深之處」，這與啟示錄二十2-3所說的「撒旦被捆綁，扔在無底坑裡」是一致的。從上下文可看出，本來是在講巴比倫王，但經文內容看起來，又像是在講撒旦，這種平行表達是合理的，因為巴比倫王的背後就是魔鬼撒旦。巴比倫王的行事與結局，就與撒旦一樣。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                以西結書廿八11-19是對推羅王的預言，但也能說明一位最美麗、聰明、榮耀的天使長如何墮落成了魔鬼。因為推羅王的背後也是魔鬼撒旦。以西結書廿八11-17：「耶和華的話臨到我說：人子啊，你為泰爾王作起哀歌，說主耶和華如此說：你無所不備，智慧充足，全然美麗。你曾在伊甸神的園中，佩戴各樣寶石，就是紅寶石、紅璧璽、金鋼石、水蒼玉、紅瑪瑙、碧玉、藍寶石、綠寶石、紅玉，和黃金；又有精美的鼓笛在你那裡，都是在你受造之日預備齊全的。你是那受膏遮掩約櫃的基路伯；我將你安置在神的聖山上；你在發光如火的寶石中間往來。你從受造之日所行的都完全，後來在你中間又察出不義。因你貿易很多，就被強暴的事充滿，以致犯罪，所以我因你褻瀆聖地，就從神的山驅逐你。遮掩約櫃的基路伯啊，我已將你從發光如火的寶石中除滅。你因美麗心中高傲，又因榮光敗壞智慧，我已將你摔倒在地，使你倒在君王面前，好叫他們目睹眼見。」這整段經文交織敘述著對推羅王及魔鬼撒旦的過去與未來。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                總結來說，很可能魔鬼原來是大有榮光、美麗、智慧的天使長，但想要與神同等，就因驕傲而墮落成為魔鬼撒旦。至於部分天使們的墮落，則在啟示錄十二3-4有一個線索：「天上又現出異象來：有一條大紅龍，七頭十角；七頭上戴著七個冠冕。他的尾巴拖拉著天上星辰的三分之一，摔在地上。……」在聖經中，星辰常常是指天使，所以一般學者相信，這裡說出了有三分之一的天使，跟著魔鬼撒旦一起墮落。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                魔鬼撒旦及三分之一的天使是何時墮落的呢？按照時溝論或重造論的說法，牠們在創世記一1之後就墮落了。若強調有人類、有動物跟著墮落，被審判埋在地裡變成化石，且因此地變成空虛混沌有很長久的時間，相當程度迎合進化論，這樣的觀點筆者是不贊成的。但若單純只是部分天使墮落，這可能性是存在的。
              </p>
              <p className="text-gray-700 leading-relaxed">
                另一個可能性，牠們是在神造人之後才墮落的。因為牠們看到神按神自己的形像造人，而且把治理全地的權柄交給人，如希伯來書二5所記：「我們所說將來的世界，神原沒有交給天使管轄。」神把人擺在比天使更高的位置。所以部分天使心生忌妒，背叛了神，且進行引誘人背叛神的計畫。以西結書廿八11-19也說到那位後來墮落的天使長，曾經是在伊甸園裡遮掩約櫃的基路伯，因此有可能這位天使長尚未墮落前，曾與亞當、夏娃同時在伊甸園裡。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                尚未墮落前的天使長，曾經是明亮的晨星。但牠墮落了，失去這榮耀。主耶穌也說他自己是明亮的晨星（啟廿二16）。而在啟示錄二28，神應許得勝者，要把晨星賜給他。晨星就是神的榮耀，這榮耀曾經給了天使長，這也是主耶穌基督的榮耀，而這份榮耀未來要賜給每位得勝者。
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
                '蛇與魔鬼不全然相等，「狡猾」（עָרוּם，aruwm）本義較偏向精明、靈巧，正面用法多於負面（箴言8次譯為通達），推論蛇原本被造是好的，被魔鬼利用後才轉為狡猾。',
                '欺騙夏娃的蛇有兩種可能解釋：魔鬼本身具有蛇的形象，或魔鬼附身/藉蛇說話（如巴蘭的驢說人話）；無論哪種，魔鬼撒旦在其中扮演主要角色是肯定的。',
                '魔鬼、撒旦、古蛇三者是同一個，是背叛神的天使裡面的頭頭；以賽亞書十四12-15、以西結書廿八11-19分別藉巴比倫王、推羅王預言暗指墮落前是明亮榮耀的天使長。',
                '啟示錄十二3-4暗示三分之一天使跟隨撒旦墮落，可能是創世記一1之後（部分天使墮落，筆者不支持迎合進化論的重造論解讀）或神造人之後（天使忌妒人的尊貴地位）兩種時間點。',
                '天使長墮落前是明亮的晨星，失去了這榮耀；主耶穌自稱明亮的晨星（啟廿二16），神應許得勝者要把晨星賜給他（啟二28），這份榮耀原屬天使長，如今要賜給得勝的信徒。',
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
              '蛇跟魔鬼撒旦一樣嗎？兩者之間有何異同？',
              '魔鬼撒旦的來由是什麼？有哪些經文可以說明？',
              '天使長墮落成撒旦的時間有哪些可能，試著說明看看？',
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
