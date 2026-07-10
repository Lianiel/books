import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch39() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第39章</h1>
        <h2 className="text-xl font-semibold text-gray-700">咒詛與祝福</h2>
        <p className="text-gray-500 mt-1">耶和華閃的神是應當稱頌的！願迦南作閃的奴僕。　創世記九26</p>
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
              挪亞全家出方舟，築壇獻祭後，蒙神祝福立約，接著就開始在新世界生活。首先是三個兒子都很有效率地生養兒女，同時挪亞自己作農夫，從事生產活動，這對年長者也是好的，但發生了醉酒的意外狀況。比較不好的是小兒孫迦南犯了罪，受到咒詛；而正面的是，閃與雅弗都得到祝福，將往全世界發展。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、新世界的景況</h3>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">一、閃含雅弗的兒子</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  創世記九18：「出方舟挪亞的兒子就是閃、含、雅弗。含是迦南的父親。」初看這節經文，會以為迦南是挪亞的第一個孫子，但仔細研究創世記九章、十章，會發現剛好相反，可能迦南是挪亞最小的孫子。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  這段話並不是描述剛出方舟第一年的情況，而是已過了十幾年甚至幾十年了，因為有含的兒子迦南在其中，且迦南已經長大，至少是青少年了。同時也有其他的下一代出生並長大，因為創世記九19說：「這是挪亞的三個兒子，他們的後裔分散在全地。」創世記十1也說：「挪亞的兒子閃、含、雅弗的後代記在下面。洪水以後，他們都生了兒子。」
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  推想一下，閃、含、雅弗二十歲左右時都已經有妻子了，然後用八十年的時間專心努力造方舟。這八十年期間他們都很節制，沒有人懷孕生孩子。一方面是為了方舟的進度，先求神的國、神的義，把精力都擺在建造方舟上。這個大工程的工作，還包括要去比較遠的森林區砍取足夠成熟堅硬的歌斐木，很不容易，生養兒女的事就暫緩。另一方面可能也考量社會環境太險惡，既然大約八十年後就有新世界了，那時教養孩子會比較容易，就等那時候再生孩子吧！父親五百歲才開始生孩子，祖父、曾祖父都是一百多歲生孩子，所以閃、含、雅弗若一百歲才生孩子，是沒問題的。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  當他們都進方舟以後，開始有時間培養夫妻之間親密的感情，預備下方舟後就可以生孩子，這是很合理的。雅弗與含何時生孩子，聖經沒有記載。但閃生孩子的時間有寫下來：「閃的後代記在下面。洪水以後二年，閃一百歲生了亞法撒。」（創十一10）創世記十22還記載：「閃的兒子是以攔、亞述、亞法撒、路德、亞蘭。」長幼次序若沒有顛倒，亞法撒乃是老三，似乎閃一出方舟就生了以攔，過一年生亞述，過兩年生亞法撒。以前忍耐的時日太久了，所以生得很快。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  第卅五章有分析過，可能雅弗是老大、含是老二、閃是老三。所以雅弗與含應該也不遑多讓，有可能像挪亞、像閃，一年就生一個，很快地大家都把孩子生出來，也在一個大家族中一起把這些孩子撫養長大。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  這個推論，還有一個主要證據在第十章含的家譜裡，創世記十6：「含的兒子是古實、麥西、弗、迦南。」這裡看到，迦南有三個哥哥古實、麥西、弗，迦南乃是老么。加上前面的分析，閃與雅弗都很快地生完他們的兒子，所以迦南甚至有可能是閃、含、雅弗三兄弟所生的孩子當中最小的。重新想一下當時的景況，挪亞兒孫成群，大部分都長大成人了，去田裡工作，或去稍遠的地方發展，但三個兒子所生的最小孫子迦南還只是青少年，所以留在家中，很可能這才是當時的背景。
                </p>
              </div>

              <div>
                <span className="font-semibold text-indigo-700">二、挪亞作農夫醉酒</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  創世記九20-21：「20挪亞作起農夫來，栽了一個葡萄園。21他喝了園中的酒便醉了，在帳棚裡赤著身子。」前面說過，原有水氣層在天空，能阻擋各種宇宙射線、陽光的紫外線等，也使得大氣壓力和它的氧氣分壓都比現在大，人因此可以長壽，大型動物也可以生存。但洪水之後，水氣層沒了，大氣壓和氧壓都減少了，宇宙射線、紫外線都射進來，隕石也容易落下，各方面的生存環境不如從前，人的壽命逐漸減短。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  除此以外，氧壓減小還有別的副作用。洪水之前，氣壓充足，葡萄不易發酵，人的血液循環比較快，不容易有醉酒的事。現在氧壓減小了，葡萄容易發酵成酒，而且人的血液循環變慢，喝了酒容易醉酒。洪水以前，挪亞也喝葡萄汁，不會有問題，現在喝葡萄汁，卻出問題了，因為葡萄汁很快變成葡萄酒了。挪亞不僅醉酒，還赤身露體，因為葡萄收成的日子是夏天，這種天氣熱的程度，是洪水前沒有的。酒精使人發熱，加上天氣熱，就造成赤著身子這件事。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  記載這件事，是在形容大環境的改變，也為小兒孫犯罪提供背景，但並非挪亞本人犯罪。許多人解經，把挪亞說成晚節不保，洪水前與神同行，洪水後卻醉酒又赤身露體，走向放縱情慾。這樣解讀是沒必要的，其實聖經的記載，並沒有要批判挪亞的意思，乃是把挪亞對新環境的不適應寫下來，並且寫下迦南犯罪而受到咒詛這件事，為將來迦南的遭遇留下伏筆。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、咒詛孫子迦南</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記九22-24：「22迦南的父親含看見他父親赤身，就到外邊告訴他兩個弟兄。23於是閃和雅弗拿件衣服搭在肩上，倒退著進去，給他父親蓋上；他們背著臉就看不見父親的赤身。24挪亞醒了酒，知道小兒子向他所作的事，25就說：迦南當受咒詛，必給他弟兄作奴僕的奴僕；」這段經文的傳統解釋，比較多認為是含看見父親赤身，沒有幫父親蓋被，反而直接去告訴兩個兄弟，是在張揚父親的醜事，對父親不尊重，所以後來受到挪亞的咒詛。孫大程博士、舊約博士謝挺都採取這樣的觀點，但華神前院長林道亮牧師，也是舊約博士，且是希伯來文專家，他有不同的解釋；《威明頓聖經輔讀》的解釋與林道亮博士相同。他們都主張，應當先確定小兒子是誰，因為經文清楚說：「挪亞醒了酒，知道小兒子向他所作的事。」他們都認為小兒子是指迦南，因為迦南做了某件犯罪的事，所以挪亞才咒詛迦南（創九24-25）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                小兒子是含嗎？其實不太可能。因為聖經三次記載，挪亞的兒子是閃、含、雅弗（創五32，九18，十1），每次都將含擺在中間的位置，而且第十章的家譜也是將含的家譜擺在第二順位。若小兒子是指含，聖經作者應當將它擺在第三位，而不會四次都將他都擺在第二位。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                再者，含沒有幫父親蓋被，而直接去告訴兩個兄弟，這樣處理還算正常，因為第一次碰到這樣的事，不知怎麼處裡。為了慎重起見，就先報告給兩位兄弟，並非去家門外對外人宣揚，這樣做應該無可厚非。就算不恰當，也並不是犯罪，卻要受咒詛使子孫當奴僕，這完全不符合對等原則。況且挪亞醒了酒後，知道小兒子所做的事，乃是說迦南當受咒詛，而不是說含當受咒詛。傳統解釋說，含的過錯由兒子迦南來承擔是合理的，這樣解釋，有某些聖經根據，但這樣解釋完全忽視了含已經有四個兒子的事實，迦南只是最小的那位，而非只有一個兒子迦南。看清楚全貌，就知道不能這樣解釋了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「小兒子」原文有孫子、子孫之意，意思是年幼的兒孫。對以色列人而言，後裔、子孫、兒子、兒孫，都是同一個概念。馬太福音一1：「亞伯拉罕的後裔、大衛的子孫，耶穌基督的家譜」，也可以翻譯作：「亞伯拉罕的兒子、大衛的兒子，耶穌基督的家譜」，因為兒子、後裔都是同一個字。在聖經中只要看到兒子，其實都包括了孫子、子孫，因此這節聖經中所說的「小兒子」應該就是最小的兒孫迦南。留意聖經的筆法，含有四個兒子，但這段經文只提到迦南，那是因為迦南做了該受咒詛的事，而非列出來要作為代罪羔羊。聖經特意把迦南與三個已過百歲的大人並列，就是要讓大家知道迦南是那位犯了罪的小兒子——最小的兒孫。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                結論來說，比較可能的情況是，挪亞醒了酒之後，發現孫子迦南犯了罪，是侵犯肉體的罪，也就是性侵害的行為，挪亞就發怒說：「迦南當受咒詛，要給他弟兄作奴僕的奴僕。」（創九25）奴僕的奴僕這個複合詞意思是最低下的奴僕，這個罪與這個咒詛才比較相稱。若這樣，則洪水以後人類第一個罪乃是男人對男人性侵害的罪。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                為什麼推論迦南犯了性侵害的罪？因為後來的迦南地是同性戀很猖獗的地方，以至於神吩咐以色列人要將迦南七族滅絕。在滅絕迦南七族之前，神先降天火將所多瑪、蛾摩拉滅絕掉（創十九24~25），因為那裡最早罪惡滿盈，淫亂敗壞，可能愛滋病很多，需要如此處理，以絕後患。創世記十九1-14記載，羅得接待兩位天使時，所多瑪城裡的眾人來到羅得家要他交出那兩位天使來讓他們為所欲為，羅得說：「我家有兩個女兒還是處女，可以交給你們。」但他們不要，他們對女性沒興趣，只想跟男性發生關係。這就是所多瑪被毀滅前的光景。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                幾百年後，迦南全地罪惡滿盈，神才藉以色列人滅絕迦南人。創世記的作者在寫這段歷史時，已為將來迦南地的結局留下伏筆。迦南人罪惡滿盈，所以要將他們毀滅，讓以色列人居住，但有部分迦南人存留，就作了以色列人的奴隸。迦南地的敗壞預表了末日審判前全世界淫亂敗壞的罪，包括同性戀和多重性對象，是神所厭惡的罪。神會像對待迦南地一樣在全世界施行毀滅性的審判，然後讓神的子民居住在其中。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                烏干達曾經有三分之一人口染愛滋病，聯合國當時宣佈他們再過十年就會亡國。全國基督徒為此迫切禱告，也邀請未信者一起加入禱告，許多人在禱告中經歷神的醫治，後來整個國家大多數人都信了耶穌，也持守貞節，不再淫亂，於是愛滋病降到6%。如今台灣愛滋病也在蔓延增加，尤其是在青少年族群，這些人與迦南起初犯罪時的年紀相當，我們很需要更迫切為台灣的青少年禱告。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經明說：「迦南當受咒詛」，但很多人理解為「含受咒詛」，進而理解為「非洲人受咒詛」，因為含是非洲人的祖先。然而從歷史上看，非洲人並不明顯受咒詛，只有迦南明顯受咒詛。「含受咒詛」乃是歐洲人發明的解釋，並不是聖經說的。為什麼歐洲人採取「含受咒詛」這個神學立場呢？主因是那時歐洲人去非洲擄掠黑奴，後來美國也跟進，於是他們就以此種神學立場來合理化他們犯罪的行為，說成是神的旨意。錯誤的神學將「迦南作奴僕」解釋為含（非洲人）作奴僕，以配合其販賣黑奴的罪行。這個歷史罪行在林肯總統解放黑奴之後基本上已經停止了，我們實在不應該繼續採取這種解釋。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                至於「迦南作奴僕」，這是預言的原意，也真的應驗了，就是以色列攻佔迦南全地後，迦南人有的被殺，有的成為奴隸，這在以色列的王國時期就已經應驗完結了。非洲人是神所愛的族裔，他們在體能上強過其他族裔，屬靈方面也不錯，如今非洲約二分之一的國家元首是基督徒，北非洲和南非洲的國家基督徒比例都很高，只有中非洲比較困難，基督教界實行多年的全球禱告日就是從非洲開始的。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、賜福閃與雅弗</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記九26-27：「26又說：耶和華閃的神是應當稱頌的！願迦南作閃的奴僕。27願神使雅弗擴張，使他住在閃的帳棚裡；又願迦南作他的奴僕。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                挪亞的後代先在亞洲、非洲、歐洲發展，而後擴展至美洲、大洋洲。亞洲人大部分是閃的後裔，非洲人大部分是含的後裔，歐洲人大部分是雅弗的後裔。這只是大概的情況，也有例外。像印度的統治階級是雅利安人，他們其實來自歐洲，因侵略印度而住在印度，他們長得很像歐洲人，五官深邃明顯，但因日照多所以皮膚比歐洲人黑。印度的原住民才是閃的後代，是被壓迫的次等民族。迦南是含的後裔，他們住在亞洲而不是非洲，但迦南地跟非洲是連在一起的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                挪亞說：「耶和華閃的神是應當稱頌的！……」（創九26）我們都知道耶和華是亞伯拉罕、以撒、雅各的神，但在這之前則說耶和華是閃的神，所以神的選民是從閃族出來的，「閃」是名字、名聲之意，跟求告神的名有關。閃族原是敬拜上帝的民族，閃的後裔最大宗是華人，全世界五大宗教全都出自閃的後裔，都在亞洲。本土的印度人是閃的後裔，他們原本敬拜「梵天」，是創造宇宙萬物的上帝；華人也是閃的後裔，也一直敬拜創造宇宙萬物的上帝；阿拉伯人的阿拉也是創造宇宙萬物的上帝；猶太人的上帝更沒話說，就是創造宇宙萬物的上帝。但因為偶像崇拜、多神信仰侵入這些古老的信仰，許多信仰就變質了。
              </p>
              <p className="text-gray-700 leading-relaxed">
                創世記九26下半說：「願迦南作閃的奴僕。」這事在三千多年前已經應驗了，就是迦南地有些人被滅了，有些存留下來成為以色列人（閃）的奴僕。接著創世記九27上半說：「願神使雅弗擴張……」，雅弗的名字是擴張、增大、美麗、美好之意。雅弗本來在歐洲發展，後來雅弗後裔的勢力真的擴張到全世界。他們的科學發達，工業先進，影響全世界，由近代歷史看得很清楚。海權的發展剛開始是西班牙，然後是葡萄牙，接著是荷蘭，再到英國，因著海權的擴張，使得全世界都是他們的殖民地。創世記九27下說：「使他住在閃的帳棚裡。」閃的特色就是真神信仰，歐美國家基本上後來都投靠真神，信了救主耶穌基督，如同被閃的帳棚遮蓋。現在我們可以見證這世界的走向都照著當時挪亞所預言的全然應驗。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                挪亞生的三個兒子——閃、含、雅弗，後來成為世界級的三大民族。三個人的後代基本上都是先兄妹結婚，並且接續幾代也是近親結婚，這樣才會形成三個不同的民族。亞當、夏娃的第一代兒女一定也是兄妹結婚，基本不會有問題，因古時候人的身體比較沒有不好的遺傳基因，所以基因重疊不會產生疾病。
              </p>
              <p className="text-gray-700 leading-relaxed">
                迦南的犯罪是人類犯罪的典型，就是情慾的擴張，使人成為罪與魔鬼的奴僕，也成為別人的奴僕，甚至滅亡。藉著挪亞後裔的發展，我們看到神是慈愛的，也是公義的。神不容讓罪惡快速蔓延，因此神會審判、管教。神使迦南作奴僕，因為他的罪惡。神讓雅弗擴張，讓閃成為真神信仰的傳承者，以至於今天世界各民族受到閃後裔在信仰上的開啟，能夠來認識真神。先有中華民族信仰上帝的傳統，後藉以色列民族有更清楚的啟示，特別是主耶穌基督的降生，讓我們能得著完全的救恩，都回到神的面前。求主賜福使用我們每一位去傳這真神的信仰，讓人得著基督的生命，遠離一切罪惡，也逃避將來的審判。願一切榮耀都歸給神！
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
                '迦南很可能是挪亞最小的孫子，而非第一個孫子；閃含雅弗都經過八十年造方舟期間節制生育，出方舟後才快速生養兒女。',
                '挪亞醉酒赤身是洪水後大氣、氧壓改變（葡萄易發酵、血液循環變慢）所致的環境適應問題，聖經記載此事並非要批判挪亞，而是為迦南犯罪受咒詛留下伏筆。',
                '從三處經文可證明「小兒子」是指迦南而非含（含的家譜順位、含已有四子的事實），迦南很可能犯了性侵害之罪，這也是後來迦南地同性戀猖獗、被神滅絕的伏筆。',
                '「含受咒詛」是歐洲人為合理化販賣黑奴而發明的錯誤神學，聖經明說的是「迦南受咒詛」，此預言已在以色列攻佔迦南地時應驗完結，非洲人並非「受咒詛的族裔」。',
                '挪亞祝福閃（真神信仰的傳承者）與雅弗（擴張、影響全世界），閃含雅弗後來分別發展為亞洲、非洲、歐洲三大族群，歷史的走向印證了挪亞當時的預言。',
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
              '洪水後的世界，人為什麼容易醉酒？按照本書的解釋，紀錄挪亞醉酒的事，並非要講挪亞晚節不保，乃是要預告甚麼重要的事？',
              '挪亞的小兒子應該是誰？有哪些聖經根據？迦南可能犯了什麼罪？所受的咒詛後來如何應驗？',
              '挪亞對閃與雅弗的後代分別有何祝福？後來的發展有何吻合？',
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
