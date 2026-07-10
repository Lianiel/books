import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch40() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第40章</h1>
        <h2 className="text-xl font-semibold text-gray-700">三個大族群</h2>
        <p className="text-gray-500 mt-1">挪亞的兒子閃、含、雅弗的後代記在下面。洪水以後，他們都生了兒子。　創世記十1</p>
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
              創世記十1：「挪亞的兒子閃、含、雅弗的後代記在下面。洪水以後，他們都生了兒子。」第十章概覽挪亞三個兒子的後裔與分佈，第十一章上半章則從十章中間的一個時間點詳細講分地居住的緣由與過程。既然挪亞三個兒子的後裔都分地居住，初期就只能兄妹結婚或近親結婚，這有助於快速形成一個民族特有的遺傳特徵。每個大族之下的小族仍然重複分地居住及近親結婚的過程，因此又會繼續形塑一個大族主特徵之下各小族的亞特徵。以台灣原住民十六族為例，每一族都是幾百年前某個家庭選定住在某個地方，在那地方先兄妹結婚，接著近親結婚，而後整個大家族人多起來，於是一個部族就形成了。他們在這過程中會產生自己族群的語言、容貌、體態特徵，及特殊才幹等。以下分三大段介紹雅弗、含、閃三大族群，也會介紹其中比較特殊的人物與情況。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、雅弗的後裔</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記十2-5：「2雅弗的兒子是歌篾、瑪各、瑪代、雅完、土巴、米設、提拉。3歌篾的兒子是亞實基拿、利法、陀迦瑪。4雅完的兒子是以利沙、他施、基提、多單。5這些人的後裔將各國的地土、海島分開居住，各隨各的方言、宗族立國。」雅弗有七個兒子，這裡只介紹了長子歌篾的兒子亞實基拿、利法、陀迦瑪，以及三子雅完的兒子以利沙、他施、基提、多單。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                參看孫大程博士的考證成果，可知歌篾住裡海附近，瑪各住黑海以北，瑪代住裏海西南方，雅完住希臘地區，土巴住黑海東南方附近，米設住黑海南部、提拉住愛琴海沿岸。歌篾三個兒子都居住在小亞細亞的區域。雅完的兒子以利沙住塞浦路斯島、他施住西班牙南部、基提住塞浦路斯島、多單曾住羅德斯島。大體上，雅弗族是向歐洲方向擴張。
              </p>
              <p className="text-gray-700 leading-relaxed">
                雅弗後裔的特色是哲學思維，他們採用了含族的工藝技術，加上哲學思維，發展為完整的科學。他們接受了閃族的屬靈信仰後，加上哲學思維，發展出完整的神學。這幫助他們能大大擴展至全世界，且影響全世界。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、含的後裔</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記十6-20：「6含的兒子是古實、麥西、弗、迦南。7古實的兒子是西巴、哈腓拉、撒弗他、拉瑪、撒弗提迦。拉瑪的兒子是示巴、底但。8古實又生寧錄，他為世上英雄之首。……19迦南的境界是從西頓向基拉耳的路上，直到迦薩，又向所多瑪、蛾摩拉、押瑪、洗扁的路上，直到拉沙。20這就是含的後裔，各隨他們的宗族、方言，所住的地土、邦國。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                含有四個兒子，老大古實的後裔由巴比倫遷到非洲衣索匹亞附近，老二麥西住埃及區域，老三弗住非洲利比亞區域，老么迦南的後裔就住在迦南地。古實的兒子是西巴、哈腓拉（沙地的意思）、撒弗他、拉瑪（其兒子示巴、底但住在阿拉伯半島西南方地區）、撒弗提迦。麥西生路低人、亞拿米人、利哈比人、拿弗土希人、帕斯魯細人、迦斯路希人、迦斐託人（即克里特島人，非利士人是其後裔）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                迦南生長子西頓（住腓尼基地區），又生赫和耶布斯人、亞摩利人、革迦撒人、希未人、亞基人、西尼人、亞瓦底人、洗瑪利人、哈馬人，這些人後來都住在迦南地。如創世記十19所說：「迦南的境界是從西頓向基拉耳的路上，直到迦薩，又向所多瑪、蛾摩拉、押瑪、洗扁的路上，直到拉沙。」這裡所描述的，是從迦南地的西北一個代表城市西頓，沿著地中海岸南下，到迦南地的西南一個代表城市加薩，然後往東到迦南地東南的代表城市拉沙。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                古實的兒子本來在第七節已經介紹完了，後來在第八節又補充說，古實又生寧錄。因為這位比較特別，需詳細介紹。創世記十8~10：「8古實又生寧錄，他為世上英雄之首。9他在耶和華面前是個英勇的獵戶，所以俗語說，像寧錄在耶和華面前是個英勇的獵戶。10他國的起頭是巴別、以力、亞甲、甲尼，都在示拿地。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「世上英雄之首」意思是洪水之後那世代的第一個英雄，而英雄就是君王，所以寧錄是洪水之後的第一個君王，是閃、含、雅弗還未分散全地前的統治者。由第十節看到，他統治的地方包括巴別、以力、亞甲、甲尼，都在示拿地，是當時國的範圍。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                寧錄這名字是「背叛」之意，他背後的靈是撒旦，撒旦名字的意思也是「背叛、敵對」，所以寧錄建立的國不是屬上帝的國，乃是撒旦掌控的國。雖然寧錄在耶和華面前是個英勇的獵戶（創十9），但他不是敬拜神、禱告神的人。那時代的人可能知道耶和華上帝，但並不敬拜上帝。
              </p>
              <p className="text-gray-700 leading-relaxed">
                由創世記十6、8看到，含生古實，古實生寧錄；我們不清楚中間是否有斷代，若沒有斷代，表示含之後兩代就是寧錄；跟閃的後裔比較一下，閃生亞法撒（創十一11），亞法撒生沙拉（創十一12），閃之後兩代是沙拉。如此看來，寧錄與沙拉應屬同輩。聖經未記載寧錄歲數，僅記載閃的兒子亞法撒活到438歲（創十一12-13），下一代沙拉活到433歲（創十一14~15），因此可推論那時代人的壽命是四百多歲。由於寧錄比法勒高兩個輩份（創十一14~16），所以當法勒出生、人開始分地居住時，寧錄大約是70歲的壯年時期；當時的人三十多歲生孩子，因此壯年時期很長。合理推測，當時帶頭建造巴別塔的就是寧錄，後來上帝干預使巴別塔停工。之後閃的後代往亞洲東邊發展，雅弗的後代往歐洲發展，含的後代往非洲發展，但有一些人仍停留在原處（示拿地），繼續建立巴別城，後來發展為巴比倫城。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、閃的後裔</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記十21-31：「21雅弗的哥哥閃，是希伯子孫之祖，他也生了兒子。22閃的兒子是以攔、亞述、亞法撒、路德、亞蘭。23亞蘭的兒子是烏斯、戶勒、基帖、瑪施。24亞法撒生沙拉；沙拉生希伯。25希伯生了兩個兒子，一個名叫法勒，因為那時人就分地居住；法勒的兄弟名叫約坍。26約坍生亞摩答、沙列、哈薩瑪非、耶拉、27哈多蘭、烏薩、德拉、28俄巴路、亞比瑪利、示巴、29阿斐、哈腓拉、約巴，這都是約坍的兒子。30他們所住的地方是從米沙直到西發東邊的山。31這就是閃的子孫，各隨他們的宗族、方言，所住的地土、邦國。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記十21：「雅弗的哥哥閃，是希伯子孫之祖，他也生了兒子。」這句話的翻譯不太正確。照原文次序及原意應該是：「閃也生了兒子，他是希伯子孫之祖，是老大雅弗的兄弟。」這句原文最後的複合詞אֲחִי יֶפֶת הַגָּדוֹל，先是兄弟אָח（ach），然後是雅弗יֶפֶת（yepheth），最後是大的、年長的גָּדוֹל（gadol）。所以「大的、年長的」是在形容「雅弗」，而不是在形容「兄弟」。翻譯聖經的人看到閃一直被放在三兄弟的最前面，就以為他是老大，不知道那是彌賽亞譜系的特殊記法，所以在這裡作了違反聖經原意的翻譯。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                其實聖經並沒有跟我們捉迷藏，一共有三處經文幫助我們知道閃不是老大。第一，第十章的家譜記載，恢復了肉身生養的次序，先雅弗、後含、最後閃。第二，創十21這裡清楚說雅弗是比較大的那位。第三，創十一10說洪水後兩年，閃才一百歲，所以他一定是比較小的。聖經這樣寫，是要我們知道雅弗才是肉身的老大，閃不是肉身的老大。還有一個佐證是七十士譯本的翻譯，那是兩約之間猶太學者翻譯出來的希臘文舊約聖經。他們比西方人更知道彌賽亞譜系的特殊筆法，不會強要閃當肉身的老大，所以這裡翻譯為「雅弗的弟弟閃」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                閃有五個兒子，大兒子以攔住在美索布達米亞兩河流域以東的區域，老二亞述是亞述帝國的祖先，老三是亞法撒、老四路德住土耳其南部、老么是亞蘭。亞蘭的兒子烏斯、戶勒、基帖、瑪施住在幼發拉底河直到今天大馬色的區域。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                閃的兒子亞法撒是彌賽亞的祖先，他的後代產生希伯來人，因此稍微多作介紹。創世記十24-25：「24亞法撒生沙拉；沙拉生希伯。25希伯生了兩個兒子，一個名叫法勒（法勒就是分的意思），因為那時人就分地居住；法勒的兄弟名叫約坍。」法勒就是分離的意思，這名字記錄了人類分地居住的事件，藉此可推知人類分地居住的時間點。約坍的兒子有十三位，大多住在阿拉伯半島的範圍，如聖經所說：「他們所住的地方是從米沙直到西發東邊的山。」（創十30）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                閃的後裔有一半是華人，或者可以說，閃的兒孫有一半往中華大地遷移。聖經所記載的區域只是初期的情況，不久之後他們繼續往東遷移，有兩條路線，一條從南邊，進到印度、東南亞等地區，再往中華地區的南方發展，中國南方的少數民族，台灣的原住民，大抵來自這個路線。另一條從北邊，經過新疆，進到黃河流域附近，因為中間是大山，不容易過去，所以從南北兩條路線，然後再會合。中國南方的長江流域水文條件比黃河流域好，但卻在比較晚期才發展，因為人民是從南邊、北邊慢慢移民過來的。
              </p>
              <p className="text-gray-700 leading-relaxed">
                北邊的黃河流域是漢族古文明發祥地，夏、商、周都在這裡發展，且稱那裏為神州，因為他們保留了閃的真神信仰，歷代君王持續獻祭給無形無像的皇天上帝。中華民族不是只有在黃河流域發展的漢族，乃是後來又融合了從南邊上來的族群，以及更北的滿族、蒙古族等，他們全部都是閃的後裔，而且占了閃後裔的一半。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                含族的特質及貢獻，除了體能比較好以外，人類學家指出他們有成熟的民生工藝，包括紡織、繪畫、食物、紙張、冶金術、火藥、醫療、機械、電力應用等。這讓我們聯想到該隱後裔在民生科技上的發展，當挪亞全家進方舟的時候，並非將上古世代的一切科技成就都丟在洪水中，乃是有一些精華的傳承，似乎含在這方面比較有天賦，因此含族就在這方面有明顯的傳承。埃及的金字塔在古老的時候就有了，以現代科技都還很困難建造那樣的金字塔，許多人疑惑他們到底如何完成。這事也顯示出，含族並非從零發展，乃是傳承了一些洪水前文明的工具與技術。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                雅弗族的特質及貢獻，是在哲學思維，喜歡理論研究。雅弗族在工藝上的成就不如含族，但當雅弗的哲學與含族的工藝結合，就產生了科學。近代科學最終是在代表雅弗的歐洲發展起來的。閃族的特質與貢獻是在宗教、屬靈的事。雅弗的屬靈操練不如閃族，但雅弗的哲學思維與閃族的屬靈成就相結合就產生了神學，因此整個神學體系大體上是在代表雅弗的歐洲發展起來的。
              </p>
              <p className="text-gray-700 leading-relaxed">
                若以靈魂體來區分，含的特長在體，雅弗的特長在魂，閃的特長在靈。洪水後的世界，神分別限縮了人的一些能力，讓不同的人有不同的特長，希望人能以謙卑的態度彼此學習、互相合作。最重要是不要把自己當作神，乃要倚靠賜下這些恩賜、能力的神。了解這一切之後，應當到神面前來敬拜他、倚靠他，並且從神支取愛來與其他族群的人相愛、合作，一起來榮耀神。
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
                '雅弗有七個兒子，後裔向歐洲方向擴張，特色是哲學思維，結合閃族屬靈信仰發展出神學，結合含族工藝技術發展出科學。',
                '含有四個兒子（古實、麥西、弗、迦南），後裔分佈非洲與迦南地；古實之子寧錄是洪水後第一個君王，名字意為「背叛」，是巴別塔的帶頭建造者。',
                '雅弗其實才是肉身的長子，閃被列在最前面是彌賽亞譜系的特殊記法（三處經文可證明），這與傳統誤譯「雅弗的哥哥閃」不同，正確應是「雅弗的弟弟閃」。',
                '閃的兒子亞法撒是彌賽亞、希伯來人的祖先；閃的後裔有一半往中華大地遷移，經南北兩條路線在黃河流域與長江流域會合，保留了閃的真神信仰，古中國稱為神州。',
                '含族特長在「體」（工藝科技）、雅弗族特長在「魂」（哲學思維）、閃族特長在「靈」（宗教信仰），神刻意限縮各族能力，使人謙卑彼此學習、合作，共同倚靠賜下這些恩賜的神。',
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
              '古時較多兄妹結婚、近親結婚的情形，在族裔的形成上有甚麼正面的作用？近代歷史有何兄妹結婚、近親結婚的實例，其結果是甚麼？',
              '如何推知閃不是肉身的老大，雅弗才是？有哪些經文根據？',
              '閃、含、雅弗的後代分別往哪些地區發展？閃、含、雅弗的後代分別有哪些優勢特色？',
              '神使挪亞的後代發展為不同族裔，且有不同特長，目的是甚麼？我們當如何看待不同族群的人？當去建立甚麼樣的關係？',
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
