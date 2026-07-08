import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch28() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第二十八章</h1>
        <h2 className="text-xl font-semibold text-gray-700">塞特的後裔</h2>
        <p className="text-gray-500 mt-1">亞當又與妻子同房，她就生了一個兒子，給他起名叫塞特，說：「上帝給我立了另一個子嗣代替亞伯，因為該隱殺了他。」塞特也生了一個兒子，起名叫以挪士。那時候，人開始求告耶和華的名。……以諾與上帝同行，上帝把他接去，他就不在了。創世記四25-26、五1-24</p>
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
              關於塞特的後裔本章分兩段來分享，第一段講塞特後裔與該隱後裔基本的差別，第二段講塞特後裔的特色，有屬地與屬靈兩方面的特色。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、基本的差別：有新的開始、與神恢復關係</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記四25：「亞當又與妻子同房，他就生了一個兒子，起名叫塞特，意思說：神另給我立了一個兒子代替亞伯，因為該隱殺了他。」「塞特」這名字是從「立」這個字來的，動詞「立」可指建立、樹立、設立，名詞指根基，所以「塞特」代表一個新的開始。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記五1-3：「1亞當的後代記在下面。當神造人的日子，是照著自己的樣式造的，2並且造男造女。在他們被造的日子，神賜福給他們，稱他們為人。3亞當活到一百三十歲，生了一個兒子，形像樣式和自己相似，就給他起名叫塞特。」創世記五1這裡再講一次「神造人（的日子），是照著自己的樣式造的」，是為了與後面創世記五3「亞當（活到一百三十歲，）生了一個兒子，形像樣式和自己相似」互相呼應。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                一方面表達神給人生兒女的能力，相似於神造人的能力。神造亞當，使亞當有神的形像樣式，現在亞當生兒子，這兒子有自己的形像樣式，這其實是一件非常奇妙的事。每次生兒女，會有新的靈魂產生，因此歷代神學家探討生兒女這件事，有創造說及遺傳說這兩派。主張創造說，是因為靈魂是新的；主張遺傳說，是因為兒女會遺傳父母的優缺點，包括身體的、個性的。其實這是神的護理工作，神繼續將能力供應給所有生物，所以會有類似創造的果效，但又有遺傳，所以與創造不同。「生」這件事極為奇妙，一直見證著有神在護理，以他的權能托住萬有（來一3），萬有靠他而立（西一17）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                另一方面表達這是一個新的開始。亞當曾經失敗了，現在有了一位像亞當的人，可以有新的開始。這段經文放在該隱後裔發展的後面，但時間並不完全在它後面。該隱的後裔已經寫到亞當之後的第七代了，這時才寫亞當生塞特，可能不是在該隱後裔六代之後，合理是在該隱後裔兩、三代之後。要指出該隱的後裔走偏了，塞特的後裔來重新校正。那時亞當已經一百三十歲，該隱已經生以諾，以諾也長大了，整體人口也不少，所以建立了一個城市。聖經的寫法，是記錄最關鍵、重要的事，並不是所發生的事都會記錄。有些人說，塞特是亞當第三個兒子，其實不是，他只是被記錄的第三個。亞當肯定在該隱、亞伯之後、塞特之前生了很多兒女，所以該隱才會怕人殺他，也才會有妻子可娶。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                基本上，不管是亞當的其他兒女、子孫，或該隱的兒女、子孫，他們大部分都認同該隱，走在人本的道路上。亞當130歲，應有三代子孫了，這些人都跟著該隱的路線，成為撒旦的後裔。因此亞當決定必須有一個新的開始，讓新的希望從這裡展開。這件事跟後來神帶領亞伯拉罕出吾珥、進迦南，開始一個新族群，意義是一樣的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                比較該隱的後裔與塞特的後裔，可看到四大分野，該隱後裔記念人，塞特後裔求告神（創四26）；該隱後裔有多妻，塞特後裔愛情專一；該隱後裔注重民生科技，塞特後裔注重生兒養女；該隱後裔自我保護，沒有神的啟示，所以會強烈報復；塞特後裔與神同行，有神的啟示與保護，所以能以愛對待人。
              </p>
              <p className="text-gray-700 leading-relaxed">
                創世記四26：「……那時候，人才求告耶和華的名。」創世記四17與四26有呼應對照。創世記四17：「該隱與妻子同房，他妻子就懷孕，生了以諾。該隱建造了一座城，就按著他兒子的名將那城叫作以諾。」該隱的後裔高舉人的名，塞特的後裔求告神的名，這是兩條路線最根本的分別。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、塞特後裔的特色</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                以下接著從整體看塞特後裔的特質，可歸納屬地與屬靈兩大方面。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">一、屬地的特色──有生必有死、生養的使命</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記五3-32的經文記載關於塞特的後裔，主要內容都是「誰幾歲生誰，又活了多少年，並且生兒養女，共活了多少歲就死了。」這樣的一個公式。這提醒人的生命有限，會死亡，所以要生養兒女，才能有傳承，並且增加治理全地的能力；並且由於人會死，知道要來尋求神，領受永生的恩典。這樣的主軸，跟該隱後代的特色大致相反。該隱的後代只有記載生，但沒有記載死，好像人不會死一般。直到如今，魔鬼一直都給人一個謊言，就是讓你以為自己不會死。大部分人聽到醫生宣佈自己得了癌症，其驚訝程度，通常跟中彩券一樣。其實中彩券的機率小於百萬分之一，而在台灣，得癌症的比例是25%以上。但我們被告知得癌症時卻如此驚訝，這表示我們裡面潛藏的意識是認為自己不會死。這正是撒旦給人的謊言，要人不警醒面對生命的有限。我們若真知道自己會死，就會警醒，早早為生養傳承而努力，也為死後要去的地方作預備。並且擁有屬天的價值觀，積財寶在天上，如馬太福音所說：「你的財寶在哪裡，你的心也在那裡。要為自己積財寶在天上，不要在地上，地上有蟲子咬，能銹壞，也有賊挖窟窿來偷。」（太六19-21）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們若有屬天的價值觀，就會為神國度的事工奉獻和效力，神會記念，天上的財寶是完全受保護的，不遭盜竊，不受破壞，這是真正不會虧損的投資，是屬於自己的。然而我們若不知道自己會死或不認為自己會這麼快死，就會忽視永恆的真實。我們擁有的若是屬地的價值觀，就會將金錢和精力都投資在地上，但地上的錢財容易虧損，就算你的理財能力很強，也很幸運沒被偷盜、搶劫，這些財產也不真正是你的，離世之後全部都要還給這個世界，有些遺產被徵稅，繳至國庫；有些留給後代子孫，但他們可能因此成為啃老族或不爭氣的富二代，反而害了他們。趁著自己有管理權，及早穩定地支持教會與福音機構，產生傳道、宣教的果實，是最有價值的投資。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">二、屬靈的特質──求告神的名、有神的使命</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                塞特生兒子以挪士之後，人才求告神的名（創四26）。這表示亞當的其他兒女以及年輕的塞特都沒有在禱告，也沒有在宣告神的名。直到塞特生孩子之後，人才開始求告、宣告神的名。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                可推論一個人靈性的成長與突破，跟生孩子有關。或許塞特小時候，亞當有教過他禱告，但亞當自己也靈性不佳，所以沒有持之以恆，塞特長大後也就沒有求告、宣告神的名。塞特整個青少年時期都是倚靠自己的能力，正如同現今部份基督徒家庭的孩子一樣，小時候曾跟著父母親到教會，在主日學中學習，但到了青少年時期就不來教會了。等到他生了孩子，想要將孩子教養好，有好品格，才想到自己小時候去過教會，因而帶著孩子回到教會中。生養孩子成為他靈性更新、轉化的契機，促使他來倚靠神、求告神。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                一個人靈性的情況，在他生養孩子後，會有更真實的呈現與完整的成長。因此提摩太前書三1-5說到作長老的條件之一，是要他的兒女端莊順服、信靠神。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                塞特後裔當中，最屬靈且其行動被記錄下來的，有以諾與挪亞兩個人，兩個人都是「與神同行」的人（創五22，六9），都從神得到啟示（創五21，六13-22）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記五21-22說到，以諾生瑪土撒拉之後，與神同行三百年。這表示從塞特生孩子後人開始求告神，而到了以諾時，他不但求告神的名，還在生完瑪土撒拉之後更進一步的與神同行。「瑪土撒拉」的意思是「死後將帶給」或「死後有事發生」，也就是死後神的審判將臨到。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                可能以諾生瑪土撒拉之前，有天使向他顯現，告訴他：「你將要生的孩子要起名叫瑪土撒拉，因為他死後會有大災難審判。」或者說得更清楚：「他死之後，會有大洪水臨到全地。」所以以諾才會幫孩子取名叫瑪土撒拉。如同馬利亞懷孕後，天使在約瑟夢中顯現，對他說：「她將要生一個兒子，你要給他起名叫耶穌，因他要將自己的百姓從罪惡裡救出來。」（太一21）耶穌這名字，「耶」是耶和華的縮寫；「穌」是拯救，所以「耶穌」的意思是「耶和華拯救」（太一21）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                以諾兒子的名字含有神的啟示，因此以諾非常敬畏神，警醒地與神同行，直到他被提升天（創五24）。猶大書指出，以諾是一位說預言的人，而且說出將來的審判：「14亞當的七世孫以諾，曾預言這些人說：看哪，主帶著他的千萬聖者降臨，15要在眾人身上行審判，證實那一切不敬虔的人，所妄行一切不敬虔的事，又證實不敬虔之罪人所說頂撞他的剛愎話。」（猶14-15）以諾同時代的人，絕大部分是不敬虔的人，但以諾堅持分別為聖，與神同行。在被提之前與神同行三百年期間，他繼續生兒養女，這表示生兒養女不僅不妨礙他與神同行，還能使他更倚靠神，更加與神同行。關於以諾的事，限於篇幅，下一章再詳談。
              </p>
              <p className="text-gray-700 leading-relaxed">
                同樣是亞當的七世孫，聖經特別著墨兩個人，一位是該隱的後裔拉麥，一位是塞特的後裔以諾（猶14）。拉麥的特色是自我中心，強烈報復；以諾的特色是與神同行，以愛待人。拉麥最終結局是到陰間等候審判，其後裔全部在大洪水中滅亡；以諾最終結局是被提到天上，永遠與神同在，而且將正確信仰傳給後來的挪亞。挪亞承擔使命，傳道給那世代的所有人（彼後二5），並且從挪亞生養出洪水後的新人類，二者差別極大。所以我們理當離開拉麥的道路，選擇以諾的道路。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                神使亞當在一百三十歲時，得到一個帶來盼望的兒子塞特，而有了新的開始。塞特的後裔比較會親近神、求告神，有神的啟示，能承擔神的使命。這使得人類在大洪水審判之後，還能夠有新的發展。塞特的出現，使得人們不再一味跟隨該隱的道路，而能有新的選擇，新的希望。今天我們也在末後的世代裡，將來大災難審判時，很可能有一大半的人會被毀滅，只有少數人能進到禧年國度。讓我們都能夠清楚認識神的救恩，我們自己得著，也帶領更多人得著。我們走在屬天的道路上，有屬天的價值觀，每一天把自己獻給神，作正確的投資，把所有的生命、資產，都投資在永恆的事情上，這是真正的蒙福之道。
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
                '「塞特」意為「立」，代表新的開始與根基；亞當130歲生塞特，如同後來神帶領亞伯拉罕出吾珥、進迦南，開啟新族群、新希望。',
                '「生」極為奇妙，見證神的護理：既有創造的果效（新的靈魂），又有遺傳（形像樣式相似），神以權能托住萬有。',
                '該隱後裔與塞特後裔的四大分野：記念人 vs 求告神；多妻 vs 愛情專一；重民生科技 vs 重生兒養女；自我保護強烈報復 vs 與神同行以愛待人。',
                '屬地的特色：家譜「生……死」的公式提醒人生命有限，當警醒面對死亡、為生養傳承努力、積財寶在天上；魔鬼的謊言是讓人以為自己不會死。',
                '屬靈的特質：塞特生以挪士後人才開始求告神的名——生養孩子常成為靈性更新的契機；以諾生瑪土撒拉（意為「他死之後將帶來」）後與神同行三百年，名字本身含著洪水審判的啟示。',
                '同是亞當七世孫，拉麥與以諾成為兩條道路的代表：拉麥自我中心、強烈報復，後裔盡滅於洪水；以諾與神同行、被提升天，信仰傳承至挪亞——我們當離開拉麥的道路，選擇以諾的道路。',
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
              '塞特的後裔與該隱的後裔有哪些基本的差異？每人可分享一項。',
              '塞特的後裔整體上有哪些特色？屬地方面如何？屬靈方面如何？可分享你比較有感動的方面。',
              '從以諾與神同行的榜樣來看，我們可以怎樣投資在永恆？如何在生養兒女的過程中，保持跟神的親密關係，而且使兒女也一起倚靠神？',
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
