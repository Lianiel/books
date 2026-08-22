import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Scale, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book39Ch2() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-slate-800 to-blue-900 bg-clip-text text-transparent">第二章</h1>
        <h2 className="text-xl font-semibold text-gray-700">如何做倫理道德判斷？</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          「你或向左或向右，你必聽見後邊有聲音說：『這是正路，要行在其間。』」（賽30:21）
        </p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-slate-50 to-blue-50 hover:from-slate-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-slate-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <p className="text-gray-700 leading-relaxed">
              基督教倫理學與一般倫理學不同的特色在於，前者是根據聖經所啟示上帝的旨意、上帝國價值觀來做倫理道德判斷；不過單就做倫理道德判斷而言，基督教倫理學與一般倫理學卻有交集之處，一般倫理學的基本類型對於基督教倫理學有影響，而基督教倫理學基於自身特色亦有其獨特的基本類型，分別呈現以不同方式來辨識問題和提供答案。
            </p>
            <p className="text-gray-700 leading-relaxed">
              倫理道德判斷的過程中，應當注意並非一定有清楚的答案，如「贊成」或「反對」，還有居於兩者之間的「同意」、「不反對」、「不同意」、「不贊成」都各有不一樣的涵義，有時還要加上細膩描述表達微妙立場，如「徹底反對」、「強烈不贊成」、「抱歉實在未能同意」、「抱歉實在無法反對」、「勉為其難予以同意」、「絕對贊成」等。
            </p>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">一、基本倫理道德思考</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                在進入如何做倫理道德判斷的討論前，需要先釐清三個基本的思考方式：
              </p>
              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 為己為人</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  倫理道德是安身立命的行為準則，不只規範自己如何與別人相處，也導引自己如何與自己相處。搭飛機常聽到廣播說，當飛機遭遇災難，氧氣罩會掉下來，這時請先趕快自己戴上，然後再去幫助別人。若是先去救人的話，很有可能害死自己，也害死別人；尤其是母親，一定要先自己戴上氧氣罩，不然的話，如何能夠救自己的孩子呢？學習基督教倫理學也是如此，不只為了別人，更是為了自己；這並非只是追求明白與別人相關的倫理道德議題的判斷準則，更是為要在充滿世界價值觀的環境中，為自己建立符合信仰的價值觀。
                </p>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-slate-700">2. 兩個極端之間</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  歷史上曾出現主張「寧可錯殺百人，也不可放過一人」的時代，然而來到現今，人人都說這個原則大錯，千萬不可！可是，反過來主張「寧可縱放百人，也不可錯殺一人」，難道就是對的嗎？試想看看，那一頭是極端，這一頭就不是極端嗎？因擔心縱放而選擇錯殺，以及因顧忌錯殺而選擇縱放，這兩者之間，難道就沒有比較中道而平衡的選擇嗎？倫理思考除了面對對錯分明的判斷之外，也常需要面對不是非黑即白的選擇，而必須兩害取其輕、兩利擇其大；在這種情況下，就需要提防自己因反對某一極端而不自覺擺向另一極端，盡力在秩序與包容、現實與理想、公正與慈愛等兩端之間追求平衡，如利未記十九章15節說：「你們施行審判，不可行不義；不可偏護窮人，也不可重看有勢力的人，只要按著公義審判你的鄰舍。」施行審判、看重有錢有勢者固然不義，但犧牲公正、刻意偏袒窮人，也是不義。
                </p>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-slate-700">3. 個體與群體之間</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  根據聖經，上帝造人並不偏向個體或群體，個體是群體中的個體，群體也是由個體組成的群體。進行倫理道德思考時，德國基督教倫理學教授沃夫剛．胡伯（Wolfgang Huber, 1942-）說：「我們發現人的行為不只是個人自由意志的表達，也是對他人行為的回應，以及對他們可能反應的預期。因此，倫理學不只是關係到個人行為，也關係到許多人一連串的行為。因而，倫理學總是涉及群體中的多數份子。」<sup>1</sup><span style={cite}>（沃夫剛．胡伯（Wolfgang Huber），〈為何需要倫理學？〉，《台灣神學論刊》，2016/43，11。）</span>在個體與群體之間，這是一個平衡的問題，因此做倫理道德抉擇時，既不應由孤立的個體——與其他個體沒有連結的狀況下來做決定；也不應由群體替代個體——全然不考慮個體良心判斷而做決定。當個體做決定時，要意識到自己是群體中的個體，而非孤立的個體；當群體一起做決定時，應當兼顧個體的良心，而非採用群體壓制個體的方式。
                </p>
              </div>
              <div>
                <span className="font-semibold text-slate-700">4. 法律、道德、宗教</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  論及倫理道德時需要注意三個層次：法律條文規範位階最低，只是維持生活的基本秩序；比法律高的是倫理道德，追求群體與個體的行為規範與準則；而又比倫理道德更高的則是宗教信仰，追求生命的意義與理想。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  法律條文有如交通規則，藉由交通號誌維持基本交通秩序；倫理道德則如交通禮儀，藉由建立共同認可、互相尊重的規範與準則而使交通順暢；宗教信仰好比設置交通的目標，追求交通的意義與價值，亦即超越法律條文、倫理道德的人生意義與目標。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  上述三個層次並不相同，卻相互關連、彼此牽動，縱使單單設置法律，也必須考量道德、宗教看法，因此常有修改法律使其配合道德、宗教觀點；即便處於道德、宗教領域，也應當參照與時俱進的法律規定，才不至於與現實生活脫節。然而經常發生的錯置是，當論及法律條文時，卻只談道德與宗教；或者倒過來，一味堅持使用法律條文來檢視或要求道德與宗教。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  以同性婚姻議題為例，需要區分清楚究竟是在討論法律層面、道德層面或信仰層面：就信仰層面而言，基督徒應期許自身極力遵從聖經活出信仰見證；就道德層面而言，基督徒應出於信仰而自我要求成為榜樣；但就法律層面而言，基督徒仍應重視的是信仰見證與道德榜樣，卻無須追求制定要求所有人與基督徒一同遵行的法律。同樣地，有時面對基督徒不認同的法律，若未妨礙基督徒追求信仰見證或道德榜樣的話，似亦無須全力阻止制定適用所有人的法律，因為應當全力以赴之處，首先在於信仰見證，其次則是道德榜樣。另外，倫理道德與宗教信仰的關係需要釐清，宗教信念必有其應用於現實生活的倫理道德實踐，而倫理道德實踐則有其預設的宗教信念；信念與實踐層次不同，兩者有如理想與現實的關係，理想不應強行植入現實，而現實也不能沒有理想引導，因此，信念不應被直接化為實踐守則，而實踐也不宜被制定成信念教條。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">二、基本用語</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「規範」（norm）是模範行為標準、指引；「處境」（context）則來自「上下文」概念，或稱「語境」，即行動者身處其中的環境；「情境」（situation）的意思與處境差不多，通常指向更加具體、貼身的周遭環境。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「準則」（principle）是具有共識的標準約定；「法則」（law, rule）則不是準則，而是指向律法概念，它比準則的規範性更強，通常是形諸文字的具體要求，有如舊約律法。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「行動者」（agent）指向倫理道德判斷的主體；倫理道德判斷所應用的客體則稱為「對象」（object）；「結果」（consequence）則是倫理道德判斷的後果。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「原因」（cause）是導致一個事件或一個判斷的直接因素；「理由」（reason）通常指向對事件或判斷成因的解釋說明。
              </p>
              <p className="text-gray-700 leading-relaxed">
                「動機」（motive）是一個比較模糊的概念，在倫理學的討論中不常使用，因泛指做出倫理道德判斷的理由，可能是目的、效益等，也可能是需求、意願等。一般而言，動機的涵蓋範圍廣泛，通常與行動者連結緊密，指向行動者做這件事的理由，而這理由的動力強到使他一定會去做。一般生活還是常常使用「動機」，若是說一個人有動機去做某事，就是指向他做這件事的理由，可能是為了追求達到某種效益或目的的後果，也可能是出於行動者本身的需求或意願。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">三、一般倫理學類型</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                以下列舉四種一般倫理學做倫理道德判斷的常見類型：
              </p>
              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 目的論（Teleology）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  倫理道德判斷的焦點集中在「目的」，以目的為最高判準，比如多瑪斯（Thomas Aquinas, 1225-1274）追求以至善為最高目的，把這目的設定為倫理道德判斷的準則。簡言之，就是以目的來衡量應當或不應當做這行為，行為的好壞根據與其目的的關係來決定。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  目的論起源於希臘哲學家亞里斯多德（Aristotle, b.c.384-b.c.332），他認為宇宙萬物都各自朝向其最終目的（希臘文：<em>telos</em>）發展，後來經由中世紀哲學家多瑪斯改造，以朝向神聖至善之最高目的為宇宙萬物的發展方向。應當注意的是，「目的」這詞被打造出來有其歷史背景，目的論所說的「目的」指向具有崇高理想、終極遠景的層次，並非指一般常見的工具性目的，比如說，經商是為了賺錢的目的這類層次。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  一切倫理道德判斷的類型都有強處與弱點，儘管目的論追求的目的非常崇高且以目的為最高判準，那麼追求目的之手段呢？可不可以為了目的而不擇手段，亦即不顧一切追求實現目的？目的論者的回應經常是，目的若為最高判準，就應當涵蓋為了達成目的所使用的手段，一旦手段違背目的就不是恰當的手段。
                </p>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-slate-700">2. 義務論（道義論，Deontology）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  倫理道德判斷的焦點集中在行動者身上的義務法則，重視obligation（義務）與duty（職責）。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  論及義務論不要被「義務」這個詞誤導，其實焦點落在做出倫理道德判斷的行動者，在這脈絡下強調對行動者具有約束力的義務法則。英文obligation與duty都偏向強調具有外在約束力的面向，不過中文常把duty翻譯為「責任」，而中文「責任」涵蓋了「約束性責任」或「自發性責任」，「約束性責任」固然為duty，「自發性責任」卻是responsibility，因此應當把duty翻為「職責」，也就是指應當去做、應盡的責任。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  目的論和義務論在思考方向上不同，目的論追求崇高理想的目標，義務論則轉向關注行動者應當受約束的義務法則。後者的代表性思想家康德主張，道德理性是根據普世皆準的道德法則做出判斷，乃人不應拒絕的義務。康德認為當人運用道德理性做判斷時，就明白普世皆準的道德法則為人所不得拒絕的義務，這法則是運用在道德理性者身上。康德的主張是以義務法則優先而非目的優先，這主張並未排除與義務法則相容的最高目的之關連性。就實際應用而言，康德最反對效益論，因為與義務法則衝突最大的往往就是效益。
                </p>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-slate-700">3. 效益論（Utilitarianism）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  倫理道德判斷的焦點集中在最高效益，過去被翻成「功利主義」，但因「功利」往往指向功名利祿帶有利己的價值判斷，後來中文翻譯才使用比較中性的「效益」——效果收益。一般效益論者追求的最高效益，就是「最大多數人的最大幸福」，常見的論述就是主張倫理道德判斷要追求多數人的最大幸福。邊沁（Jeremy Bentham, 1748-1832）和彌爾（John S. Mill, 1806-1873）是主要的思想家代表，邊沁主張「多數人的最大幸福乃是判斷是非的標準」，由於這種主張推到極致可能導致以集體幸福壓制個人自由，彌爾則從個人自由優先的角度來呈現效益論。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  效益論影響了一些基督教倫理學的主張，如弗雷契（Joseph Fletcher, 1905-1991）主張情境倫理學（Situational Ethics），追求以愛為中心的最高效益，據此在不同情境下可有不同的道德判斷，唯一遵守的原則就是追求以愛為中心的最高效益。情境倫理看似一種目的論，因為表面看來有如以愛為最高目的，然而弗雷契所說的愛是落實人間情境裡的愛，並非終極性的崇高理想，不過是座落於現實生活中的人際關係判斷。
                </p>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-slate-700">4. 結果論（後果論，Consequentialism）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  效益論的現代定義被稱為「結果論」，在做倫理道德判斷前，必先確定是否有「好結果」，根據結果來決定一個判斷的「正當性」，亦即以「好結果」為倫理道德抉擇的依據，而由最後結果如何來決定是否正當。一般日常用語比較不準確，比如說：「他是一個結果論者。」這話只是認定那人是一個以事情結果如何來做判斷的人。其實衡量這結果的標準相當主觀，如果需要長時間才能看出來的結果，可能已經指向「目的」了，不過一般結果論都是指向時效短暫、可以見到的結果。
                </p>
              </div>
              <div>
                <span className="font-semibold text-slate-700">5. 評論</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  一般而言，主張目的論的亞里斯多德和多瑪斯以及主張義務論的康德，在倫理學的討論都是「經典」，然而對現代人而言卻是相對遙遠的「古典」。處於當今高科技商業化社會，一般人在做倫理道德判斷時，很容易傾向效益論，因為最大效益原本就是人性所追求的。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「多數人的最大幸福」通常是指物質性層面，凡帶有政治、社會、經濟性質的組織機構，所追求多數人的最大幸福不外是物美價廉、安全無虞之物質性幸福，儘管這些符合人性需求，卻可能使組織機構的理想性下滑。至於作為信仰群體的教會和宣教機構，同樣帶有人的組織機構特性，面對許多人對物質性幸福的期待，很難不被牽引而改變原本成立的宗旨，比如常見藉由社會關懷宣揚福音的宣教機構，後來轉成道地的社福機構而與宣教脫節。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  康德的年代雖早於幾位提出效益論的重要思想家，不過他已開始批判效益論思維，他認為道德的崇高在於不可有高於本身以外的因素，而效益論卻明顯把外在的效益作為道德判斷的指導要素，其實效益本身往往不具道德性，卻在做倫理道德判斷時反過來成為道德追求的目標。比如老師教導學生要誠實，若不誠實就要挨打；父母教導小孩要有信用，原因是如此將來才能賺大錢，這都導致一種逃避處罰、追求利益的傾向，而非出於純粹的道德。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  在神人關係中，人經常帶有效益思維，這反映在雅各年輕時的禱告：
                </p>
                <div className="border-l-4 border-emerald-300 bg-emerald-50 pl-4 py-3 mb-3">
                  <p className="text-emerald-800 leading-relaxed italic">
                    雅各許願說：「上帝若與我同在，在我所行的路上保佑我，又給我食物吃，衣服穿，使我平平安安地回到我父親的家，我就必以耶和華為我的上帝。我所立為柱子的石頭也必作上帝的殿；凡你所賜給我的，我必將十分之一獻給你。」（創28:20-22）
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  針對這種條件式的信仰關係，加爾文提出有如義務論般的想法：「因若人在事奉神時，只在乎蒙神獎賞，而因此將自己的勞力販賣給神，這對人毫無益處。神喜悅人甘心樂意地敬拜和愛他，若是人沒有蒙獎賞的盼望，卻仍事奉神，這就是神所喜悅敬拜的人。」<sup>2</sup><span style={cite}>（《要義》，3.16.2。）</span>理想的自發性服事只想追求上帝的喜悅，而非上帝的獎賞；然而一旦涉及利益，當人想藉由服事換取上帝的好處與回報，就陷入交易式想法，服事心態也扭曲變質了。然而，上帝喜悅人們甘心樂意地服事，尤其是那些儘管未蒙獎賞卻仍心甘情願的服事者。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">四、基督教倫理學類型</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                基督教倫理學追求按照上帝旨意來做倫理道德判斷，在思考過程中也經常用到一般倫理學的類型，以下有三種倫理學類型與基督教信仰有密切關係：
              </p>
              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 德行倫理學（Virtue Ethics）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  這種倫理學主張起源於亞里斯多德，經由多瑪斯發揚光大，倫理道德判斷的焦點在於行動者——人，重視藉由培養品德來塑造人，關鍵在於養成「習慣」（habits）。亞里斯多德哲學是目的論的起源，但也發展出德行倫理學，主張倫理道德判斷的關鍵在於行動者——人，並且人需要藉由培養德行的習慣來邁向成熟。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  德行倫理思維其實普遍存在於小學教育，教導學生建立清潔、準時、守秩序、養成早睡早起等外在習慣，也建立誠實、勤勞、勇敢、堅毅不撓的內在習慣，多年後回顧小學教育，可知那些好習慣經常與培養德行密切相關。基督徒更需要互相提醒，建立禱告、讀經、靈修等習慣，點點滴滴匯聚，形塑靈性、建立德行。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  德行倫理學反對過度的目的論和義務論，因為重視目的可能導致忽略人才是達成目的者，而重視道德法則亦可能忽略人才是道德法則的行動者，若是人本身不足以擔起重任，兩者皆無法達成。簡言之，人若不改變提升的話，最好的目的還有意義嗎？最好的法則又豈能落實呢？
                </p>
                <p className="text-gray-700 leading-relaxed">
                  美國當代基督教倫理學家侯士活（Stanley Hauerwas, 1940-）反對一般的目的論與義務論，認為行動者被忽略了。現代社會通常認為道德判斷就是運用客觀理性來判斷目的或義務，由於強調客觀而把行動者排除，全以科學的客觀性為根據。侯活士認為追求那種極端的科學客觀性，終將導致非人性化，對於做出判斷的行動者的生命本質完全不在意，單單重視以客觀理性來判斷何為目的、法則，這些都是出於崇尚科學客觀性而導致非人性化的結果。侯活士進一步探討應當如何培養品德，他從古老的以色列歷史發現，代代傳承的品德都是透過在群體中說故事、聆聽故事、實踐故事所培養而出，因此基督徒的品德也是在信仰群體中，藉由說故事、聽故事與活出故事而養成。
                </p>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-slate-700">2. 處境倫理學（Contextual Ethics）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  「處境倫理學」對於「處境」有兩種不同的理解，因而指向不同的倫理學，其一是在不同時空處境下主張因時、因地制宜的倫理學，強調人的生命與歷史都座落在時空處境裡；其二是主張以與基督和信仰群體關係的處境作為判斷依據的倫理學，簡要說明如下：
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  其一，由於生存處境具有動態變化的特質，規範則具有靜態穩定的特質，而任何倫理道德判斷至終都要應用在實存處境中，所以處境倫理學泛指重視處境變化的倫理道德判斷，而非指稱特定學派。處境倫理學認為行動者的周遭處境是做倫理道德判斷的重要依據，由於處境一直在變化，不應採用教條或僵化系統下的靜態法則，而應視處境變化彈性調整，以做出最適切的倫理道德判斷。因此，處境分析是其重要依據，而非辨別對錯的義務論，或者分辨善惡的目的論。舉凡重視時空處境的神學，諸如解放神學、婦女神學、公共神學、自由神學都可能發展出處境倫理學。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  莫特曼批判那種過度注重時空處境所發展出來的倫理學，他認為這其實就是被世界潮流帶著走。莫特曼在台神演講〈神學的未來〉時，提到「新政治神學」重視處境中的公共議題，雖有回應時事的優點，缺點卻是「把『處境』（context）當作『聖經』（text），讓這世界為基督教神學設定討論議程」。<sup>3</sup><span style={cite}>（莫特曼，〈神學的未來〉，《台灣神學論刊》，2017/44，163。）</span>他如此語重心長地提醒，正是看見這種注重世界潮流的處境神學，最後就是以世界潮流作為神學依據收場。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  其二，潘霍華倫理學經常被標示為處境倫理學，不過他所說的處境並非單指生存處境，而是從信仰觀點所見的處境，亦即在人與基督、與信仰群體的關係處境。潘霍華在做倫理道德判斷時，是根據他與基督、與信仰群體的關係作為判斷依據，以基督為中心來因應不斷變化的環境挑戰。<sup>4</sup><span style={cite}>（Trey Palmisano, Peace and Violence in the Ethics of Dietrich Bonhoeffer (Eugene: Wipf &amp; Stock, 2016), 35-37.）</span>他所指的處境並非與現實生存處境無關，而是把現實生存處境放在與基督、與信仰群體的關係中來因應，這關係建立在神大人小、神先人後的信念，最有代表性的學者為理查．尼布爾（H. Richard Niebuhr, 1894-1962）與潘霍華。
                </p>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-slate-700">3. 責任倫理學（Ethics of Responsibility）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  強調自發性責任且以承擔責任為依據的倫理道德思考判斷方式，這是基督教倫理學非常重要的類型。「責任」通常使用英文responsibility而不是duty（職責、義務），responsibility這個字來自respond（回應），因此帶有主動性回應的涵義，而duty則是外加的責任，中文的「責任」涵義經常比較接近duty，比如強調「這是你的責任」時，就是要求履行職責，當有人大聲說出這話時，就是在指責他人沒有盡到職責、義務。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  英文responsibility指向一種「主動回應性責任」、「自發性責任」，是出於行動者主動且自發性的回應。主張責任倫理學的神學家注意到這個概念，主要是為了表達信仰者和上帝的關係，因為做倫理道德判斷是在回應上帝在我們身上所做的一切，這建立在神大人小、神先人後的信念上，最有代表性的學者為理查．尼布爾（H. Richard Niebuhr, 1894-1962）與潘霍華。
                </p>
              </div>
              <div>
                <span className="font-semibold text-slate-700">4. 小結：基督教倫理學的視域</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  當一般倫理學的基本分類，套上基督教信仰的基礎，就會呈現從基督教倫理學視域所見的不同倫理學特質如下：
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                  <li>基督教倫理學目的論：追求上帝旨意的實現。</li>
                  <li>基督教倫理學義務論：遵守從上帝來的神聖法則，如舊約律法、新約登山寶訓。</li>
                  <li>基督教倫理學效益論：追求出於信仰原則的最高效益。</li>
                  <li>基督教倫理學結果論：追求榮耀上帝的結果。</li>
                  <li>基督教處境倫理學：重視與基督、與信仰群體的關係。</li>
                  <li>基督教德行倫理學：主張培養基督徒品德。</li>
                  <li>基督教責任倫理學：主張自發性責任建立在相信上帝主權的基礎上。</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">五、從追求事實真相開始</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                不論是一般生活中的倫理道德判斷，或者基督教倫理學的判斷，都有一個重要的原則——必須先了解事實真相。倘若判斷是建立在錯誤的事實認知，不會有正確合宜的倫理道德判斷，因此倫理道德判斷和了解事實有非常緊密的關係。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                家庭問題中經常面對的困難是「公說公有理、婆說婆有理」，教會裡也經常面對這類不易了解事實真相的問題，如何在複雜的情況中理出對事實的深入了解，是走向進行正確合宜倫理道德判斷的第一步。但這並非要做到了解全部的真相，事實上這也不太可能，因為站在不同的位置，自然會有不同的認知與判斷，只能做到選擇恰當的位置來做出合宜的了解，這是追求正確合宜倫理道德判斷的最重要起步。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                有些人心腸很好，頭腦也不錯，但了解事實的能力很差，聽到什麼就信什麼，而且隨口就說出去了，甚至在傳話時習慣加上一段開頭語：「我告訴你……請你不要告訴別人」，然後一知半解、乃至於全非事實的話就傳出去了，以致到處可聽到耳語，縱使嘴巴說不要告訴別人，結果是大家全都知道。教會裡有許多信徒聽到什麼就講什麼，耳語傳播的速度很快，這正是因為缺乏養成查證分辨的習慣，基督徒並未善用上帝給我們的理性思考能力，學習明智地了解事實而後才做判斷。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們的文化背景塑造了一個理性判斷貧弱的大環境，因為沒有經過有如西方的啟蒙運動，十七、十八世紀的啟蒙運動是一個理性覺醒的運動，在西方發展約有兩百年之久，一路延續到十九世紀，成為現代社會的思想基礎。比如德國人愛好理性可說到淋漓盡致的地步，大學上課的方式與內容是純理性的，討論也是純理性的，來自其他地區的留學生往往需要相當時間來適應。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                東方的文化社會卻未曾經歷過與啟蒙運動相仿的理性覺醒運動，今日我們讀西方的東西常常覺得生硬、過於理性，其實這種感覺正反映自身理性思維不足。論及倫理道德判斷時，我們需要反思為什麼自身的理性思維相對薄弱？為什麼我們辨識謠言的能力經常不足？為什麼放話的文化如此有效？理性弱、分辨差，經常使得那些不實傳言往往占上風，偏見易於四處流傳，網路的便利又帶來傳播的革命性發展，這使得流傳迅速、難以分辨的網路謠言成為破壞社會和諧的利器。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                文化上缺乏重視理性的傳承主導了局勢走向，許多知識分子也同樣理性薄弱，其知性專長只不過表現在專業上，一旦離開狹小的專業領域，就缺乏明智的理性分辨與認知。因此，進行倫理道德判斷以前，必先審慎收集資訊，然後判斷什麼是對的、什麼是相關的，最後才進一步做設身處地的思考，從知、到理、到情。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3 text-center italic">
                收集資訊（知）→ 了解事實（理）→ 設身處地（情）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                史密德（Lewis B. Smedes, 1921-2002）寫過一本小書《抉擇這玩意兒》（<em>Choices: Making Right Decision in a Complex World</em>），談到如何在複雜的世界中做出正確決定，非常值得參考，此書對於了解事實有四個重要提醒：<sup>5</sup><span style={cite}>（史密德，《抉擇這玩意兒》，黃芯芯譯〔台北：校園，1993〕，31-45。）</span>
              </p>
              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 相關的只是局部事實</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  做倫理道德判斷相關的只是局部事實，我們無法也不必要把所有事實都考慮進來，只須考慮與倫理道德判斷相關的事實。因此，我們不只要知道事實，而且要判斷哪些事實與這判斷相關，無關的事實無須考慮，尤其是那些可能造成誤導的事實——不論是先入為主之見或一般人常有的偏見。
                </p>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-slate-700">2. 詮釋過的事實</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  我們經常認定某些事實，卻沒有注意到這些「事實」大部分已被我們詮釋過，而那些既有的詮釋決定了我們的認知。史密德舉一個例子，有人搶劫賣酒的商店並且開槍，店主為了自衛也拿了一把槍，在強盜逃走前射死他。如果我們只看見強盜搶劫開槍，店主一怒之下舉槍射擊，我們會覺得這個店主防衛過當，然而如果再加進一個事實——這強盜已連續對同一家商店強劫三次，那麼我們的看法必定會有所不同。
                </p>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-slate-700">3. 感覺到的事實</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  我們往往以主觀感受來斷定事實，如果這件事讓自己覺得難受，就會看得嚴重；如果這件事與自己沒什麼關係，就容易被擺到一邊。有些法官或許覺得許多犯罪事件很遙遠，審判這些案件彷彿只是在窗明几淨的高級辦公室裡處理卷宗，感覺如此的世界既安全又平靜，一切都有條文規範依據，以致有些案件的判決與真實生活常識脫節。
                </p>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-slate-700">4. 評估過的事實</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  倫理道德判斷的過程必定涉及評估，我們評估認定的事實與別人的評估可能有所不同。比如一個身材矮小的小孩，他的哥哥身材高大，若是我們只看見哥哥打弟弟，一定會認定是哥哥的錯；然而，若是有另外一個人看見弟弟一直挑釁哥哥不停，直到哥哥動手就大聲喊叫，那麼見狀的人必然會認定弟弟才是操控全局的掌控者。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  又如，常見學生抱怨學校辦公行政效率緩慢，老師卻說：「不會啊！我每次辦事都立刻就辦好了。」事實上，老師的評估與學生的評估並不相同，因為兩者的身分根本不同，所遭遇的情況也不同。透過此例可讓我們明白，如果我們身為領導者，就必須注意我們的評估是建立在同工對待自己的態度，或者建立在同工對待其他同工的態度之上。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  許多人從來不查證事實，卻有一大堆主觀評論，這種人的「真話」帶有很多偏見、誤差，身為牧者站在舉足輕重的位置，聽到身邊的人所說的話，需要有智慧來辨識。如果牧者本身就常有主觀偏見的評估，這對信仰群體的傷害很難彌補。
                </p>
              </div>
              <div>
                <span className="font-semibold text-slate-700">5. 小結</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  因此，進入倫理道德判斷以先，需要了解事實，應當細心認真傾聽，藉著更多人不同角度的觀點，拼出比較全盤的圖像。沒有一個人可以了解所有的真相，應當盡力把不同感覺、不同詮釋、不同背景之下所看到的片段整合起來，這才有助於為倫理道德判斷提供更完整的畫面。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">六、中間地帶的道德判斷</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                與道德相關的程度，大致上可分為：道德的（moral）、不道德的（immoral）或非關道德的（unmoral）。在「道德的」和「不道德的」之間需要盡力明辨是非對錯，不過兩者之間有時難以截然二分，則需要智慧做出恰當的居中判斷。至於「非關道德的」意味著此事與道德沒有關係，需要做另外一種非關道德的判斷。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                做倫理道德判斷若能分辨何者是對的行為，何者是錯的行為，那就意味著要做抉擇：對的行為要積極去做，縱使有時未能參與也要消極支持；錯的行為則要主動防範，有時力有未逮也要被動迴避。然而，不積極也可能落入消極，不主動也可能成為被動，若凡事傾向消極、被動，就會漸漸來到是非對錯不明的灰色地帶，以致失去分辨對錯的能力。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3 text-center italic">
                對→積極行動→消極支持……………被動迴避←主動防範←錯<br />灰色地帶
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                基督教倫理學學者羅秉祥教授提醒我們，做倫理道德判斷時，應當注意是非對錯往往不是截然二分，反倒經常「是中有非、非中有是，對中有錯、錯中有對」。人由於現實中的軟弱以致無法做到全知，因此在做倫理道德判斷時，常有中間地帶要面對。我們在做判斷時往往必須在中間地帶做選擇，需要明辨：究竟對的成分有多少，而錯的成分有多少。<sup>6</sup><span style={cite}>（參見：羅秉祥，〈道德判斷的類別（上）〉，《今日華人教會》，1993/12，32-35；羅秉祥，〈道德判斷的類別（下）〉，《今日華人教會》，1994/1，30-32。）</span>
              </p>
              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 容許的（permissible）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  假若明確是對的事，自然要盡力去做，比如孝敬父母、尊主為大。但有些判斷好像看似是對的卻又沒有很對，可是並非一定要避免的錯，比如吃拜偶像之物，若是覺得良心沒有問題，正常情況下可以積極去行，但卻因顧慮到可能使人跌倒，無法積極去行，只能說那是「容許的」。
                </p>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-slate-700">2. 超義務的（supererogatory）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  在對的這一方，有一種特殊情況是「超義務的」，比如衝進火場把人救出來，這件事不僅是對的而且超級對，我們期待在這種景況下，有人能夠挺身出去救人，但卻不能期待所有人都冒著生命危險去救人。基督教信仰的倫理道德判斷，有些是超義務的，不過卻無法立即成為普遍規範，比如許多耶穌基督的完美榜樣，通常也未能成為對基督徒的「當下要求」，乃是學習效法的「目標」。
                </p>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-slate-700">3. 對而悲愴的（right but tragic）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  有些事情是對的，但做這個決定很悲哀無奈，縱使面對正確的決定還是內心掙扎，比如執行懲戒總是悲哀無奈，但若就是非對錯與群體秩序而言，甚至為了有助於犯錯者重新出發，這樣的決定是「對而悲愴的」。當敵人攻擊我們，為了防禦不得不參戰，防禦保護是對的，但畢竟戰爭是以暴制暴、是悲劇性的；又如喇合用謊言救了那兩個探子，這是對的行動，但為此而說謊卻是悲劇性的。由於面對這些狀況難以做出良心完全平安的選擇，只能說是「對而悲愴的」決定。<sup>7</sup><span style={cite}>（羅秉祥，〈道德判斷的類別（下）〉，30-31。）</span>
                </p>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-slate-700">4. 錯而可諒解的（wrong but excusable）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  至於「錯而可諒解的」，包括犯罪卻有無法抗拒的原因，包括處於惡劣環境中，如家暴受害者等，這些情況雖然犯錯卻可減低責難程度。許多國家的法律規定，殺人者只要在從事犯罪行為時思覺失調，經由精神科醫師證明精神失常而無法為其行為負責時，即有可能減輕罪責，這就是「錯而可諒解的」。但是這種判斷不宜濫用，如今有法官審判殺人案件，連被起訴者在學成績良好，也可用來證明具有可教化性而予以減刑等。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  在錯而可諒解的情況中，更常見的是有時我們沒有或對或錯的選擇，只能選擇並非大錯或次等的錯，有如面對兩個爛蘋果，勉強選擇一個比較不爛的。希律很討厭施洗約翰卻又尊敬他，把他下在牢裡不讓他講話，後來希律允諾自己的女兒在跳舞後成全她一個願望，於是她要求施洗約翰的頭，結果希律就這樣殺害施洗約翰，選擇了最大的惡。希律在此情況下其實可選擇次級的惡，比如對女兒說：「非常抱歉，這事沒有辦法做，我違反了自己的承諾。」次級的惡總比最大的惡好一些，但令人遺憾的結局是，希律為了保持王的顏面而犧牲人的性命——殺掉約翰——這恐怕是「錯而不可諒解的」。
                </p>
              </div>
              <div>
                <span className="font-semibold text-slate-700">5. 伴隨表情的判斷</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  在生活經驗中，許多倫理道德判斷伴隨豐富的表情。比如常常聽說：「雖不滿意，但可接受。」其實這傳達一種複雜的表情，就是這個判斷雖不太對，但也還不算錯；又如不得已的錯，好比選擇次級的惡，但可諒解。以下這些語氣都對處於中間地帶的判斷，做了表情說明：
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 mb-3">
                  <li>不滿意但可接受（不太對，也不算錯）</li>
                  <li>不算錯，可也難以接受（不是錯，但也不太對）</li>
                  <li>不得已的錯（被勉強的錯、無法避免的錯、逃避大錯的小錯、為了對的事而犯錯）</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-3">
                  很多情況並不容易判斷，究竟是被勉強但應抗拒的錯？或者，確實是無法避免的錯？到底是為了逃避大錯而選擇小錯？或是為了貪圖方便而選擇有個好理由的小錯？人世間的倫理道德判斷，若要做到良心全然平安，非常不容易；但若降低標準的話，卻有可能全部過關。或許在追求理想的同時，仍要正視現實處境，有時在理想與現實的兩難間，稍微降低絕對標準，不失為務實可行。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">七、從實際案例思考</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                現實生活的問題不若理論原則善惡分明，當開始接觸社會真相時，才明白真實的情況絕大多數都不太容易分辨，經常面對善惡不明的複雜情況。倫理道德判斷就是要在這樣複雜的處境中應用信仰原則，以下試舉兩個例子來說明倫理道德判斷的難度。
              </p>
              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 興建賭場</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  賭場始終是財團的最愛，往往難以放棄。澎湖縣曾經舉辦博弈公投，在公投前幾乎無人知道結果，因為正反兩邊票數差距非常接近，最後是反對賭場的一方勝出。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  當面對賭博合法化的爭議，儘管教會立場一向明確反對，但在一個公民社會裡，最後決定的仍是全民票數，因此需要考慮在堅守反對立場時，是要採取主動積極反對，或者被動等待投票結果，亦或是在什麼情況之下，才可連結其他的反對力量使賭博無法合法化通過。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  當舉行設置賭場與否的公投時，若是基督教需要與其他宗教（佛、道、民間宗教）聯合起來才能贏得公投，基督教該聯合這些勢力推動反對興建賭場、反對博弈合法化嗎？倘若認為教會在賭博的議題上可與其他宗教信仰合作，這是好事還是不好呢？或者，萬一合作的話，有沒有底線？還是說，根本不可能合作，也不應該合作呢？
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  也許，當我們在思考、討論這些事時，或可再注意一些細節，比如什麼議題較為適宜多方合作？或者，在什麼條件、情況下可以合作？而什麼議題又絕對不可以合作？或者，在什麼情況下則不適合合作？這些合作與否的底線非常值得討論，甚至可當作原則而應用到其他議題。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  現實生活中一般流行的是效益論、結果論，追求效益、結果而避談目與道義，似乎非常符合人性。然而聖經卻說：「你們和不信的原不相配，不要同負一軛。義和不義有什麼相交呢？光明和黑暗有什麼相通呢？」（林後6:14）這段經文應當如何應用呢？我們到底在追求什麼？究竟有沒有什麼比在現實中成為贏家更加重要呢？
                </p>
              </div>
              <div>
                <span className="font-semibold text-slate-700">2. 家暴個案</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  如果在現實處境中，遇到家暴個案，教會信徒應如何輔導陪伴？一般基督徒的反應經常是要受害者忍耐，然而這不應當是唯一的處理方式。如果忍耐變成縱容，甚至導致加害者不斷犯罪而得罪上帝，是否還是以忍耐為唯一的答案？
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  加爾文非常重視人受造而具有上帝形像，犯罪的加害者身上的上帝形像已經扭曲變形，甚至藉由暴力蔑視、侮辱受害者身上的上帝形像，這已提供充分的理由不能再縱容他傷害別人，也持續破壞自己身上已然扭曲變形的上帝形像。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  倘若我們真心想幫助受害者、加害者的話，就要努力阻止加害者繼續犯罪而得罪上帝——不論藉由社工或法律的力量，來做到為了上帝形像而愛護受害者，而非強求受害者用想像中那種無條件接納的愛，繼續活在暴力的陰影中，而讓加害者在施行暴力中不斷沉淪。每天報紙一打開，就看見社會新聞層出不窮，這反映了千百年來的人類社會，人性始終被強大的罪惡轄制，我們需要仰望從上帝而來的智慧。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">八、結論</h3>
              <p className="text-gray-700 leading-relaxed">
                俗語說：「攻擊就是最好的防禦！」基於人的有限，人生的倫理道德判斷往往並不完美，與其患得患失，不如轉而勇於追求積極的目標，比如全心回應上帝的呼召、追求上帝的榮耀。如此去行的話，通常都沒有什麼失分。「所以，你們或吃或喝，無論做什麼，都要為榮耀上帝而行。」（林前10:31）
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
                '做倫理道德判斷前，先要釐清四個基本思考方式：為己為人、避免在兩極端之間擺盪、平衡個體與群體、以及分清法律／道德／宗教三個層次不同的規範位階。',
                '一般倫理學的四種基本類型——目的論、義務論、效益論、結果論——各有強調重點，效益論雖最貼近現代人性，卻容易讓外在效益反過來凌駕道德本身。',
                '基督教倫理學在一般類型之外，發展出德行倫理學（重視培養品德的行動者）、處境倫理學（重視與基督及信仰群體的關係）、責任倫理學（強調對上帝主動回應的自發性責任）三種特有類型。',
                '倫理道德判斷必須從追求事實真相開始——事實是局部的、被詮釋過的、帶有主觀感受的、也是被評估過的，唯有透過收集資訊、了解事實、設身處地三個步驟，才能做出合宜判斷。',
                '是非對錯往往不是截然二分，存在「容許的」「超義務的」「對而悲愴的」「錯而可諒解的」等中間地帶，需要智慧明辨對錯的成分各有多少。',
                '面對興建賭場、家暴個案等現實案例時，倫理判斷沒有簡單公式可套用，必須在信仰原則與複雜處境之間審慎權衡，最終仍應以全心回應上帝、追求上帝榮耀為積極目標。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「對而悲愴的」判斷，對教會處理紀律與懲戒有何啟發？</h4>
              <p className="text-gray-700 leading-relaxed">
                本章以戰爭防禦、喇合說謊救探子為例，說明有些正確的決定仍帶著悲劇性，無法讓人良心完全平安。這對教會處理會友的懲戒（如革除會籍、暫停事奉）極具參考價值——執行紀律本身可能是對的、必要的，但教會不應假裝這樣的決定毫無代價、毫無傷痛，反而應當坦誠承認其「悲愴」的一面，這樣才不會讓執行紀律的一方變得冷酷，也才能真正為犯錯者的挽回留下空間。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">莫特曼對「處境神學把處境當聖經」的批評，如何應用在今日教會參與公共議題？</h4>
              <p className="text-gray-700 leading-relaxed">
                林鴻信引用莫特曼的提醒，指出過度以時空處境為神學議程設定者的危險，最終會讓教會的立場被世界潮流牽著走。這對今日教會在面對社會運動、政治議題時是重要的提醒：教會固然不應自外於處境、假裝活在真空中，但判斷的最終根據仍應是聖經啟示的上帝旨意，而非民意調查或社會輿論的風向——處境是需要被納入考量的變數，卻不能取代聖經成為判斷的準則本身。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「效益論最貼近人性」這個觀察，對基督徒的金錢觀與事奉觀有何提醒？</h4>
              <p className="text-gray-700 leading-relaxed">
                本章指出當代高科技商業社會使人特別容易滑向效益論思維，甚至連宣教機構也可能被物質性幸福的期待牽著走，逐漸從宣揚福音轉為道地的社福機構。這提醒基督徒在服事與奉獻上，需要不斷自我省察：我做這件事，是出於對上帝的甘心樂意，還是暗中計算著某種回報與效益？加爾文所說「若是人沒有蒙獎賞的盼望，卻仍事奉神，這就是神所喜悅敬拜的人」，正是對治效益論思維最直接的解藥。
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
              '回想一次你在「兩個極端之間」做選擇的經驗——你是否曾因為反對某一極端，而不自覺擺向了另一個極端？',
              '你做倫理判斷時，通常比較接近哪一種類型（目的論、義務論、效益論、結果論）？這個傾向如何影響你的日常決定？',
              '本章提到教會裡「聽到什麼就講什麼」的耳語文化，源於缺乏查證分辨的習慣。你自己是否也曾在未查證的情況下轉述或相信過流言？',
              '面對「容許的」「超義務的」「對而悲愴的」「錯而可諒解的」這幾種中間地帶，你能否想到自己生命中一個具體屬於某一類的抉擇？',
              '本章的興建賭場案例問到「教會可否與其他宗教合作反對某項議題」，你認為這樣的合作有沒有底線？底線應該畫在哪裡？',
              '面對家暴等複雜的教牧個案，你認為教會目前普遍「勸受害者忍耐」的傾向，是否有需要調整之處？',
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
              <h4 className="font-semibold text-green-700 mb-2">🔍 練習「四層事實檢核」</h4>
              <p className="text-gray-700 mb-2">下次遇到需要判斷是非的事件（教會或家庭中的紛爭），先問自己四個問題：哪些事實真正相關？我對這件事的認知是否已被某種詮釋定型？我的判斷有沒有摻雜主觀感受？我的評估角度和對方的評估角度是否相同？</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🪞 檢視自己習慣的倫理判斷類型</h4>
              <p className="text-gray-700 mb-2">
                回想最近三個你做過的道德判斷，寫下你當時最主要考量的是「目的」「規則」「效益」還是「結果」，看看自己是否有慣性偏向某一種類型，並思考這種偏向的優點與盲點。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🗣️ 對治「查證分辨」的軟弱</h4>
              <p className="text-gray-700 mb-2">
                本週若聽到任何未經查證的傳聞（教會裡的、家庭裡的、社會新聞），練習在轉述或評論之前，先停下來問：這是我親眼所見、還是聽來的？我掌握的是全部事實，還是局部事實？
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「上帝啊，求祢賜給我明辨事實真相的智慧，不讓我在似是而非的傳言中隨意論斷。求祢幫助我在複雜難分的處境中，不偏向任何一個極端，也不因軟弱而落入消極被動的灰色地帶。求祢使我無論做什麼，都真心為要榮耀祢的名。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
