import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Waves, Star, Search, HelpCircle, Check } from 'lucide-react';

const quote = "border-l-4 border-emerald-300 bg-emerald-50 pl-4 py-3 mb-3";
const quoteText = "text-emerald-800 leading-relaxed italic";

export default function Book40Ch15() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-800 to-orange-900 bg-clip-text text-transparent">第十五章</h1>
        <h2 className="text-xl font-semibold text-gray-700">第七誡（五）：不可姦淫——再婚與跨信仰婚姻</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          「你們和不信的原不相配，不要同負一軛。」（林後6:14）
        </p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Waves className="w-5 h-5 text-amber-800 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">一、有關離婚後再婚的問題——基督徒離婚後可以再婚嗎？</h3>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">一、原配偶犯姦淫而離婚之情況下，可以再婚</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  （有人認為應加上配偶拒絕或無法履行婚約、或施虐）。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">二、雖然對方未犯淫亂，但仍執意要離婚之情況</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  （有人認為應加上配偶未拒絕或無法履行婚約、或未施虐）：這樣的情況在台灣較不會發生，因為台灣的離婚必須是雙方協議的，但在某些國家，離婚可以是單方面的決定，或者有些國家，男人可以隨意寫休書給妻子。在這樣的情況下，受害一方可以再婚，因為摩西的律法這樣說：「人若娶妻以後，見她有什麼不合理的事，不喜悅她，就可以寫休書交在她手中，打發她離開夫家。婦人離開夫家以後，可以去嫁別人」（申24:1-2）。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">三、若是自己不合神心意而離婚者</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  （即非因配偶犯姦淫、拒絕或無法履行婚約而離婚，或非因信仰的緣故）：
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  （一）耶穌說：「凡休妻另娶的，若不是為淫亂的緣故，就是犯姦淫了；有人娶那被休的婦人，也是犯姦淫了」（太19:9）。所以，不合神心意的離婚者應竭力去挽回，要求復合，因為保羅說：「至於那已經嫁娶的，我吩咐他們，其實不是我吩咐，乃是主吩咐說：『妻子不可離開丈夫，若是離開了，不可再嫁，或是仍同丈夫和好。丈夫也不可離棄妻子』」（林前7:10）。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  （二）但若原配偶已再婚，按聖經原則，這等於原配偶犯淫亂的罪，或者原配偶離棄當事人後犯淫亂的罪，另一方就可以再婚。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  （三）保羅又說：「就如女人有了丈夫，丈夫還活著，就被律法約束；丈夫若死了，就脫離了丈夫的律法。所以丈夫活著，她若歸於別人，便叫淫婦；丈夫若死了，她就脫離了丈夫的律法，雖然歸於別人，也不是淫婦」（羅7:2-3）。因此，不合神心意的離婚，若已離異的配偶離世時，即可以再婚。
                </p>

                <h5 className="font-semibold text-amber-700 mb-2 mt-3">問題思想</h5>
                <p className="text-gray-700 leading-relaxed mb-3">
                  若某人因為不合神心意離婚，悔改後，願意與原配復合，但原配不願意復合，也未再婚或犯淫亂，也未離世，他（或她）可以再婚嗎？
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  這個問題是個相當難回答的問題，有的教會的教導就是：「除了復合之外，他不能與別人結婚，因為聖經的教導就是如此。」筆者認為這樣的教導需要三思，若這位弟兄或姐妹還很年輕，且很有誠意悔改，但原配卻執意不願意復合，就不允許他再婚，我認為這似乎有些不近人情，這真的是神的心意嗎？
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  有一本談到再婚的書，名為「婚姻輔導學」（大光出版社出版），這本書中有一種處理的建議值得參考。這本書的作者根據馬太福音十八章15-17節的處理原則，他認為當教會規勸不合神心意離婚的夫妻復合時，若有一方一直不願意，教會可以把他「當作外邦人」逐出教會，之後，即可根據哥林多前書七章15節，保羅所說的，不信的要離去就由他吧！這位願意復合的一方已盡自己的責任，是對方不願意復合，因此他（或她）可以再婚。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  另外，前面提到，馬丁路德認為在「一方虧負或避開對方，拒絕履行婚姻關係的責任」的情況下，他認為教會應允許他們離婚，而不算為自動離婚。拒絕復合的一方即是這種情況，要求復合的一方已盡力，教會應允許他（或她）可以再婚。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">四、因自己犯淫亂而離婚者</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  （一）要求他與原配復合。<br />
                  （二）若原配不願意，犯淫亂者也真實悔改，結出悔改的果子來時，可以再婚。離婚後再婚者，只要是合神心意的再婚，都可以在教會中結婚。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  離婚後再婚的教會生活、事奉，也應以平常心看待，因一切的過犯主寶血已塗抹！
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-3">
                關於聖經再婚的討論，我們看到婚姻是神所設立的制度，因此，在聖經和教會傳統中，一向視婚姻為一個神聖的盟約。從這個意義上看，離婚本質上是對盟約的背叛，因此，離婚是屬於婚姻中的例外情況，並非神所設立婚姻的理想狀態。但神的屬性表明祂是有公義也有憐憫的神，當離婚在一個有限度的範圍內被許可時，在此基礎上，神也允許人再婚，允許的背後透射出的是神對人的憐憫和眷顧。
              </p>
              <div className={quote}>
                <p className={quoteText}>
                  學者卜魯斯說：「婚姻像安息日一樣，是為人設立的，而不是人為婚姻設立的。」
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                這句話很值得今天教會處理再婚問題時的參考。保羅在林前七章中表現出的尊重原則，同時又務實、靈活、針對不同處境有不同應用的策略，是教會面對倫理張力時的一個重要參考。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">二、為何不能與不信者結婚？</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記廿四章第3-4節記載，亞伯拉罕吩咐他的老僕人，不要為他的兒子娶迦南地的女子為妻，而是回本地、本族娶妻，這是為了信仰的緣故，迦南地是崇拜偶像之地。擇偶的原則就是「信與不信不能同負一軛」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅也說：「你們和不信的原不相配，不要同負一軛。義和不義有甚麼相交呢？光明和黑暗有甚麼相通呢？基督和彼列有甚麼相和呢？信主的和不信主的有甚麼相干呢？上帝的殿和偶像有甚麼相同呢？」（林後6:14-16）。信與不信不能同負一軛，不是因為偏狹的宗教對立，而是如同保羅所說的：「不相同」就無法「相和」、「相通」、「相交」及「相配」。要共同生活一輩子的人，若事奉不同的主人，人生觀、價值觀及處世觀都不「相同」，就無法「相和」、「相通」、「相交」及「相配」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                有一位牧師曾用一連串的假設情境，說明跨信仰婚姻的挑戰：
              </p>
              <div className={quote}>
                <p className={quoteText}>
                  有人認為，雖然兩人的價值觀完全不同，但只要相愛就沒有關係，這是不可能的。假設婚禮那天，男方不信主的家人要你們在祖先的牌位前上香，妳不能這麼做，這是拜偶像，妳是個基督徒，但妳若不照著做，婚禮當天就會得罪婆家，妳進退兩難，若是上香，就違背了妳的良心。
                </p>
                <p className={quoteText + " mt-2"}>
                  幾年後，妳生了個孩子，妳和先生兩人都在上班，需要找人照顧孩子，你們的手頭很緊，婆婆這時主動表示願意幫忙帶孩子，她說：只要早上把孩子送過來，晚上來接回去就好了。妳的先生覺得這樣做很好，但妳的態度保留，因為妳知道婆家每個孩子身上都帶著一個符，綁條繩子，戴在脖子上和手上，而且每個星期五都是廟裡吃齋的日子，婆婆一定會帶妳的孩子去廟裡。所以，妳不答應，妳說要把孩子送去幼稚園，妳先生說：妳哪根筋不對啊？幹嘛多花那筆錢？妳不信任我母親能帶孩子嗎？妳不信任我的家人嗎？去廟裡有什麼關係？我不是也讓妳帶孩子去上主日學嗎？
                </p>
                <p className={quoteText + " mt-2"}>
                  幾年後，妳的公公過世，在喪禮上，妳的先生是長子，依照他的宗教習俗，他必須主領那個喪禮，所以，他必須披麻戴孝，他必須加入誦經的行列，妳是他的太太，他要妳跟他一同參與，畢竟所有的親戚都會到場，眼光都會落在妳身上，所以，他求妳配合，婆婆也求妳，求妳別讓親戚看我們笑話，妳的地位岌岌可危，妳該怎麼辦？
                </p>
                <p className={quoteText + " mt-2"}>
                  幾年後，妳的女兒上主日學，她從聖經上學到一定要說實話，不可以賭博、說謊、喝酒。爸爸是個好人，但他跟其他的非基督徒一樣，有時會撒點小謊、喝點酒、賭個博，農曆除夕晚上，他請幾個同事來家裡三缺一、打麻將，小女兒無意間走過來說：爸爸！聖經說不可以抽煙、喝酒、賭博，我的主日學老師說賭博是犯罪。這讓他在朋友面前很沒面子。打完麻將，朋友一離開，妳的丈夫用力把門關上，然後向妳興師問罪，妳這個母親怎麼做的？妳不尊重我的家人和信仰；妳拒絕參與喪禮的儀式；現在妳又教孩子在我的朋友面前不尊重我，我告訴妳，我不准她再去上主日學了！妳說：可是主日學可以培養她良好的品格，他說：那她可以參加廟裡的「主日學」，廟裡的品格教育就跟你們的主日學一樣好，且我們的廟就叫「道德廟」。
                </p>
                <p className={quoteText + " mt-2"}>
                  幾年後，女兒十幾歲了，有一天哭著回家說：媽，我去診所檢查，我懷孕了，妳先生知道後很生氣，他和女兒都決定應該墮胎，妳說：不行！這樣做不對，那是殺人，違反十誡，妳丈夫問：妳難道不關心女兒嗎？妳要毀了她的一生嗎？她準備好當媽媽了嗎？她才十九歲，妳要把我們家的臉丟光嗎？親戚會怎麼說？接著妳去樓上勸女兒說：千萬別墮胎，那是殺人，墮胎是錯的，違反上帝的律法，妳女兒說：妳根本不愛我，妳只是要我愧疚一輩子，我恨妳……砰一聲，她把門關上。
                </p>
                <p className={quoteText + " mt-2"}>
                  妳一直哭，不明白為什麼家庭不幸福？問題出在哪裡？問題出在當初根本就不該跟非基督徒結婚。
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                「信與不信不能同負一軛」，不是因為偏狹的宗教對立，而是因為不相同的人生觀、價值觀及人生目標，不可能有幸福的婚姻生活。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">三、問題思想：基督徒情侶若已登記結婚，但還沒有在教會舉行婚禮，是否已是夫妻？若發生性行為，是否犯淫亂？</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                中華民國民法第九百八十二條，修定前原規定：「結婚，應有公開儀式及二人以上之證人。經依戶籍法為結婚之登記者，推定其已結婚」。但民國96年5月4日修正民法第九百八十二條為：「結婚應以書面為之，有二人以上證人之簽名，並應由雙方當事人向戶政機關為結婚之登記」。因此，民法有關結婚生效要件，從「儀式婚」改採「登記婚」。結婚不再採取以「公開儀式」為認定，而是必須要向戶政機關登記，婚姻才算正式生效。也就是說，從此結婚不一定要舉行公開儀式，小倆口只要到戶政機關登記，婚姻就有法律效力了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                以往因為是「儀式婚」，必須有公開儀式才算正式結婚，因此，絕大多數基督徒都是在教會舉行婚禮之後，才正式成為夫妻。但現在是採取「登記婚」，因此，就產生了一個問題：「基督徒情侶若已登記結婚，但還沒有在教會舉行婚禮，是否已是夫妻？若登記後，發生性行為，是否犯淫亂？」而這樣的現象一定會愈來愈多。關於這個問題，不同的教會有不同的看法和作法：
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-amber-700">一、</span>認為必須等到教會婚禮後才算是正式夫婦，也才能同房。也就是他們認為必須在神面前立約，才能正式成為夫婦。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-amber-700">二、</span>認為教會應根據國家法律，認定已登記的情侶就是正式的夫妻，不能禁止他們同房。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                不同教會有不同的看法和作法，我們應彼此尊重，筆者教會的作法如下：
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-amber-700">一、</span>除非特殊因素，我們希望教會中的情侶，應等到在教會中舉行婚禮後，再去登記。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-amber-700">二、</span>但若有特殊因素，必須先行登記，我們認為根據國家法律，他們已是正式夫妻，不應禁止他們同房，之後在教會中舉行「結婚感恩禮拜」，而不是結婚典禮。
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
                '基督徒可再婚的情況包括：原配偶犯姦淫而離婚、對方單方面執意離婚的受害一方、不合神心意離婚者在竭力挽回無效後（原配已再婚或已離世）；對於「悔改一方竭力復合、原配拒絕但未再婚未離世」這個難題，作者參考「教會規勸無效可視為外邦人」的處理原則，主張不應強迫竭力悔改的一方終身無法再婚。',
                '婚姻本質是神聖的盟約，離婚是對盟約的例外背離而非理想狀態，但神有公義也有憐憫，在有限範圍內許可離婚後也允許再婚——「婚姻像安息日一樣，是為人設立的，而不是人為婚姻設立的」，保羅在林前七章展現的尊重、務實、靈活原則，值得教會處理再婚議題時參考。',
                '「信與不信不能同負一軛」的原則源自亞伯拉罕不讓兒子娶迦南女子、保羅「義和不義有甚麼相交」的教導，核心不是宗教偏狹，而是人生觀、價值觀、處世觀不相同就無法真正相和相通；一連串跨信仰婚姻的假設情境（祖先牌位、廟裡照顧孩子、喪禮習俗、賭博喝酒的身教、女兒墮胎抉擇）具體呈現了這種價值觀衝突會如何逐步侵蝕婚姻與家庭。',
                '台灣民法自2007年起從「儀式婚」改為「登記婚」，使基督徒情侶登記結婚但未辦教會婚禮的處境成為新興的牧養議題；不同教會有不同做法，但一般原則是尊重國家法律認定的婚姻效力，同時鼓勵情侶盡量先在教會立約後再登記。',
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
              <h4 className="font-semibold text-gray-800 mb-2">作者質疑「不能復合就終身不能再婚」的教條式教導，反映了怎樣的牧養神學立場？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者坦承這是「相當難回答的問題」，並直言某些教會的僵化教導「似乎有些不近人情」，這種誠實面對灰色地帶、不簡化答案的態度，反映出一種以牧養實際處境為優先、而非單純套用律法條文的神學立場。這提醒教會領袖在處理類似複雜的倫理牧養問題時，應當在持守聖經原則的同時，願意誠實承認某些情境確實難以一刀切地判斷，並以憐憫與智慧尋求最合乎神心意的處置。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「婚姻像安息日一樣，是為人設立的，而不是人為婚姻設立的」，這句話對理解離婚再婚的神學基礎有何深意？</h4>
              <p className="text-gray-700 leading-relaxed">
                這句話巧妙地呼應了耶穌論安息日的教導（「安息日是為人設立的，人不是為安息日設立的」），暗示婚姻制度雖然神聖，但其終極目的是為了人的益處，而非要求人在任何處境下都機械式地墨守成規。這個類比提醒我們，聖經對婚姻與離婚再婚的教導，核心精神是憐憫與益處，而非為了規條本身而犧牲人的實際生命處境。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">跨信仰婚姻的假設劇本，對已經處於跨信仰婚姻中的基督徒有何實際的牧養提醒（而非事後的論斷）？</h4>
              <p className="text-gray-700 leading-relaxed">
                這段假設劇本雖然生動地說明了跨信仰婚姻可能面對的長期價值觀衝突，但對已經身處這類婚姻中的基督徒而言，這不該被當作論斷的依據，而應成為理解他們處境艱難、需要更多陪伴與代禱支持的提醒。教會在牧養這類家庭時，應著重在如何幫助當事人在既有的婚姻現實中活出智慧與見證，而非讓他們對過去的選擇背負不必要的罪疚感。
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
              '在讀這一章之前，你對「離婚後可否再婚」的看法是什麼？讀完本章多種情況的分析後，你的理解有什麼調整？',
              '「婚姻像安息日一樣，是為人設立的」——你如何理解這句話背後神對婚姻制度既堅持又憐憫的心意？',
              '若你身邊有正在單身交往、對象未信主的朋友，你會如何用「信與不信不能同負一軛」的原則，加上本章跨信仰婚姻的具體例子，溫柔而堅定地與他們溝通？',
              '若你已經身處跨信仰婚姻中，或身邊有這樣的肢體，你如何看待教會應該如何牧養陪伴，而非單純論斷？',
              '「登記婚」與「儀式婚」的法律變化，對你理解教會婚禮與法律婚姻的關係有何新的認識？',
              '你如何看待作者所屬教會的做法——原則上鼓勵先教會婚禮再登記，但有特殊因素時尊重國家法律認定？你認為這種彈性務實的態度合宜嗎？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 讀哥林多後書六章14-16節</h4>
              <p className="text-gray-700 mb-2">找時間讀保羅「信與不信不能同負一軛」的教導，思想這個原則背後不是宗教排他，而是對長遠幸福婚姻的智慧提醒。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 主動關心身邊處於跨信仰婚姻或離婚再婚處境的肢體</h4>
              <p className="text-gray-700 mb-2">
                本週主動聯繫或探訪教會中處於跨信仰婚姻、或經歷離婚再婚的弟兄姐妹，用陪伴代替論斷，了解他們實際的掙扎與需要，並為他們的家庭代禱。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，感謝祢是有公義也有憐憫的神，在婚姻的破碎與重建中，仍然向人施恩。求祢賜給教會智慧，能在持守聖經原則與展現憐憫牧養之間找到平衡，不用律法主義的方式論斷離婚再婚的肢體。求祢也保守單身尋找對象的弟兄姐妹，能謹守「信與不信不能同負一軛」的智慧，在婚姻的根基上與祢同心。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
