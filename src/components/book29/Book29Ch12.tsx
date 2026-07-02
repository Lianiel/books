import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch12() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第十二章</h1>
        <h2 className="text-xl font-semibold text-gray-700">神與人安息</h2>
        <p className="text-gray-500 mt-1">天地萬物都造齊了。到第七日，神造物的工已經完畢，就在第七日歇了他一切的工，安息了。神賜福給第七日，定為聖日；因為在這日，神歇了他一切創造的工，就安息了　創世記二1-3</p>
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

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、日的長度</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記一1至二3的日，是跟現在一樣的日，長度24小時，還是指一段時期，代表千年、萬年、百萬年？根據四個基本理由，可以知道日是24小時的一日。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                一、日（希伯來文 יוֹם，yowm）這個字的用法：近二千次的用法（1934次）絕大部分都是講正常的一日，有少數是日的延伸意義，可翻譯作時候。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記二17你吃的「日子」必定死。創世記十四1當暗拉非作示拿王……的「時候」（日子）。創世記廿六18當他父親亞伯拉罕在世之「日」。創世記三十14割麥子的「時候」。出埃及記八22當那「日」，我必分別我百姓所住的歌珊地，使那裡沒有成群的蒼蠅，好叫你知道我是天下的耶和華。瑪拉基書四5看哪，耶和華大而可畏之「日」未到以前，我必差遣先知以利亞到你們那裡去。看這些少數例子的上下文，可以看出都是一小段日子，少則幾小時、幾天，多則幾年、幾十年；沒有千年、萬年這種用法，更不會是百萬年、千萬年。所以日解釋為正常日比較合理，解釋為很長的地質時期是不恰當的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                二、有序號──第一日、第二日、第三日、第四日……第七日。跟「日子、時候」的用法不同，所以應該是正常的一日。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                三、六日都特別附註「有晚上、有早晨」，這也說明是正常的一日。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                四、創世記二1-3所說的安息日是正常的一日。出埃及記二十11十誡的第四誡也有印證，說到神六日創造，第七日安息，因此人第七日要安息。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                起初有些神學家對進化論不太了解，以為只要把日變成千年，就可以不跟進化論衝突了。還引證聖經說：神看千年如一日。後來知道進化論需要的時間是更長的，於是就說日是十萬年或百萬年。這個觀點稱為「時期論」，本書末尾附錄一有詳細的整理。其實百萬年還是不夠的，進化論的時間表至少都是以千萬年、億年來講的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                現在科學界對於基因有了更深的了解，知道若要靠微突變來進化，就算把日改成十億年仍是不夠的。於是產生了神導進化論，就是神在進化的過程中工作，讓各種生物出現的時間，都可以符合進化論所說的時期，而又不用擔心時間不夠進化。這樣的神學家想要聖經、科學兩邊討好，真是用心良苦。
              </p>
              <p className="text-gray-700 leading-relaxed">
                還有一種好像很超然的立場，說創世記第一章的日，乃是神自己的日或是先知得啟示的日子，至於真正的時間不用探究它是多久，這樣不管進化論所需的時間是多長多短都沒有關係。這種觀點，畫景論可為代表，本書末尾附錄三有較詳細的說明。對於日的長度不敢肯定的聖經學者，不是不信神的話，通常是對於所謂的科學，缺乏足夠的認識，以致被誤導。筆者的立場是先用最好的科學來跟有問題的科學對話，將任何只是假說的東西放在一邊，這樣我們才會有自由來解釋聖經，下一段就是這個探討。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、各種理論的思辨</h3>
              <div className="space-y-3 mb-3">
                {[
                  { title: '一、無神論的進化論', desc: '這一定不可行，因為違反熱力學第二定律。熱力學第二定律是說，任何系統只會從低亂度走向高亂度，從高位能走向低位能，而不會從高亂度走向低亂度，從低位能走向高位能。這就如同一堆沙石、水泥、鋼筋不可能自己變成一個房子；一堆完全足夠的零件擺在地上，經過億萬年也不可能自己變成一輛汽車。' },
                  { title: '二、神導的進化論', desc: '這也不可行，因為雖然動力上的問題解決了，但化石證據完全闕如。在實際歷史上，基本找不到中間型生物。當我們反對進化論時，不僅反對無神論的思想，也反對缺乏歷史證據的理論，所以神導進化應該是不存在的。而從神的本性來講，也完全沒有將創造與進化融合的必要，神能夠創造，所以不需要進化。所有真正觀察到的所謂進化，全部是在各從其類裡面的變異，沒有進化的事實。' },
                  { title: '三、大爆炸理論', desc: '這是一種超越性立場，其實也不太需要。因為科學只是假設了大爆炸理論與進化論，並沒有真正的證據。眾星系、銀河系、太陽系的形成，基本上不可能藉大爆炸形成。大爆炸只會產生雜亂無章的東西，不會產生目前這種井然有序的眾星系、銀河系、太陽系。太陽系的行星是從太陽分出來的嗎？神留下證據告訴我們不是。因為地球的成分跟太陽的成分絕大部分不同，各個行星的成分也彼此不同。月球也不是從地球分出去的，因為神也留下證據，太空人登陸月球後，採集了月球的物質，知道月球的成分與地球的成分並不相同。還有，地球上的各物種，並非藉進化而來，而是突然同時出現的，這是真科學找到的證據。' },
                  { title: '四、地質學的年代', desc: '科學家用岩石中的放射性物質來推算地質年代，這件事大家都相信所謂專家。他們的理論是這樣：若甲物質一半蛻變成乙物質，需要十億年，目前看到甲物質與乙物質各有一半在這岩石裡，就推論說，這岩石已存在十億年。其實這是無法確認的，因為沒有人知道起始狀態。我們必須假設起初完全沒有乙物質，只有甲物質，才能這樣推算年齡。但起初到底是怎樣？有可能本來甲物質、乙物質就各占一半。真的沒有人知道。神親自說話：「我立大地根基的時候，你在那裡呢？你若有聰明，只管說吧！」（伯卅八4）進化論科學家自認為好像神立大地根基的時候，他們已經在那裡。其實他們不在，他們不可能知道起始狀態。所以放射性測年代法算出來的都是假設性答案，並不是絕對的答案。我們真的不必相信這岩石層有幾億年，也不必相信地球有四十五億年，這都是用放射性物質的半衰期去推論的。由於無人知道物質起始狀態的比例，所以就不能用這套模式來推論年代。反而我們從太陽正在縮小、月球正在逐漸遠離地球的事實，而能推知，太陽、地球、月球的關係，只有約一萬年。' },
                  { title: '五、智慧設計論', desc: '推薦對科學有興趣的人，一定要來了解「智慧設計論」。許多科學家認為智慧設計論是差勁的科學（他只是科學創造論的偽裝），許多神學家認為它是差勁的神學（它誤解了上帝的行動）。但其實智慧設計論正是科學和神學都需要的良藥。創造是神學性的語詞，智慧設計是科學性的語詞，二者相關但不完全相同。智慧設計論，是夠客觀的科學。創造是神學，是我們可以用信心去相信的，也是可以實際經歷的，包括病得醫治、死人復活等，當我們把這兩方面都弄清楚後，就會發現科學與神學可以很和諧，並且可以跟近代科學之父牛頓採取相同的立場。他研究科學，主要是藉科學的研究成果來更多認識神，這立場也是筆者的立場。' },
                ].map((item, i) => (
                  <div key={i} className="bg-indigo-50 rounded-lg p-3 border border-indigo-100">
                    <span className="font-semibold text-indigo-800">{item.title}</span>
                    <p className="text-gray-700 text-sm mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                筆者從台大物理系畢業，原來是學科學的，所以不會去相信證據不足的科學理論，並且可以去找到夠客觀的科學。然後我也研究神學，清楚發現，其實神學與科學都出於神，它們不會互相矛盾。我們真正地了解科學與神學之後，會發現科學與神學是非常和諧的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                不須相信證據不足的科學理論之後，我們現在可以更單純地來聽神的答案。創造包含時間、包含能力，這是創造的本質。能相信基督變水為酒、基督用五餅二魚使五千人吃飽，就能相信神用一天中的短時間創造亞當、夏娃，也能相信神用六天創造天地及其上的一切。
              </p>
              <p className="text-gray-700 leading-relaxed">
                以能力來說，其實神可以用六小時或六分鐘來創造天地，但為何神用六日來進行造物之工呢？答案在出埃及記廿11：「因為六日之內，耶和華造天、地、海，和其中的萬物，第七日便安息，所以耶和華賜福與安息日，定為聖日。」為了給人作榜樣，神自己六日做工，第七天安息，而後指示人要把時間分別出來安息、親近神。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、安息日的本質</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記二2-3：「到第七日，神造物的工已經完畢，就在第七日歇了他一切的工，安息了。神賜福給第七日，定為聖日；」第三節提到神賜福，神賜甚麼福？乃是神與人親近的福。神創造完亞當、夏娃之後的第一日，就是安息日，而不是工作日。因為神先造陸上動物，再造亞當，亞當為動物命名後，睡了一覺，才有了夏娃，那時已經接近傍晚了。神希望亞當、夏娃先來享受單單與神在一起的時間，而後再去工作。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                馬利亞所選擇的上好福份，是對安息日一個極佳的詮釋。路加福音十38-42：「他們走路的時候，耶穌進了一個村莊。有一個女人，名叫馬大，接他到自己家裡。她有一個妹子，名叫馬利亞，在耶穌腳前坐著聽他的道。馬大伺候的事多，心裡忙亂，就進前來，說：主啊，我的妹子留下我一個人伺候，你不在意麼？請吩咐她來幫助我。耶穌回答說：馬大！馬大！你為許多的事思慮煩擾，但是不可少的只有一件；馬利亞已經選擇那上好的福份，是不能奪去的。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                從奉獻的角度來說，安息日乃是時間的奉獻，人擁有的第一天就奉獻給神，每七天就守一次安息日，所以時間是七分之一的奉獻。如同財物需要有十分之一或超過十分之一的奉獻（瑪三8-10）。每次奉獻七分之一的時間，是在提醒自己，神是時間的主人，正如奉獻十分之一的財物，是在提醒自己，神是財物的主人。奉獻不是律法，乃是恩典，是與神連結的實際經歷，你愈懂得把時間奉獻給神，你的時間就會愈好用，愈有效率，愈能為神結果子。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                關於安息的本質，有兩處經文很重要：詩篇一二七1：「（所羅門上行之詩。）若不是耶和華建造房屋，建造的人就枉然勞力；若不是耶和華看守城池，看守的人就枉然儆醒。」這裡指出人與神聯合，才能成就建造與看守的事。馬太福音十一28-30：「凡勞苦擔重擔的人可以到我這裡來，我就使你們得安息。我心裡柔和謙卑，你們當負我的軛，學我的樣式；這樣，你們心裡就必得享安息。因為我的軛是容易的，我的擔子是輕省的。」這裡指出人與基督聯合，才會有真正的安息。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                十誡的第四誡有兩個版本，出埃及記二十章強調記念及效法創造的耶和華神。申命記五章強調要記念神的救贖。詩篇一一八篇22-24則預言了基督復活的日子，且要我們在其中高興歡喜：「匠人所棄的石頭已成了房角的頭塊石頭。這是耶和華所做的，在我們眼中看為希奇。這是耶和華所定的日子，我們在其中要高興歡喜！」這是關於主日的預言，預言了基督的死而復活，帶來救贖與新的創造。所以安息日或主日的時候，我們是來敬拜創造與救贖的主。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                希伯來書四9-11：「這樣看來，必另有一安息日的安息為神的子民存留。因為那進入安息的，乃是歇了自己的工，正如神歇了他的工一樣。所以，我們務必竭力進入那安息，免得有人學那不信從的樣子跌倒了。」這告訴我們，在基督救贖之後，不管甚麼時候，只要我們與神聯合，就是在享受安息。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                第七日沒有講「有晚上，有早晨」，這是第七日與其他六日明顯的分別，這是要表達出永恆神性安息的圖畫。這預表了希伯來書四章所說的永恆安息，以及啟示錄二十章千禧年的長久安息。這永恆安息的盼望，不是在約書亞帶領以色列進迦南地時得到的，而是在基督耶穌的救恩裡得到的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神看一日如千年，千年如一日。人類歷史至今約六千年，在神看就是六日而已；而千禧年乃是一千年的安息年，則像是一日而已。這與六日工作、一日安息的比例完全一致。當然實際準確算，人類歷史應該已超過六千年，但聖經所記載下來的年歲則只有六千年，因此，我們現在已非常接近千禧年的時刻了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                啟示錄四、五章顯出天上的敬拜。第四章記載敬拜創造的主，讚美感謝神的創造：「我們的主，我們的神，你是配得榮耀、尊貴、權柄的；因為你創造了萬物，並且萬物是因你的旨意被創造而有的。」（啟四11）第五章記載敬拜救贖的主，讚美感謝羔羊基督的救贖：「他們唱新歌，說：你配拿書卷，配揭開七印；因為你曾被殺，用自己的血從各族、各方、各民、各國中買了人來，叫他們歸於神，又叫他們成為國民，作祭司歸於神，在地上執掌王權。」（啟五9-10）
              </p>
              <p className="text-gray-700 leading-relaxed">
                不僅人安息，神也要安息。賽六十六1-2：「耶和華如此說：天是我的座位；地是我的腳凳。你們要為我造何等的殿宇？那裡是我安息的地方呢？耶和華說：這一切都是我手所造的，所以就都有了。但我所看顧的，就是虛心痛悔、因我話而戰兢的人。」虛心痛悔的心乃是神安息的地方，清心領受主道的心乃是神安息的地方，敬拜讚美神的人乃是神安息的地方。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                第七日是神與人一同安息的日子，願我們每主日、每安息日都能來享受安息，並且每天都有安息敬拜神的時間，也隨時保持敬拜神的心，讓神也能在我們的心中，找到他能安息的地方。
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
                '創世記的「日」（יוֹם，yowm）根據字詞用法、序號、「有晚上有早晨」附註、及安息日的印證等四個理由，應解釋為24小時的正常一日，而非千年、萬年或百萬年的地質時期。',
                '五種相關理論的思辨：無神論進化論違反熱力學第二定律、神導進化論缺乏化石證據、大爆炸理論無法解釋星系秩序、放射性定年法無法確認起始狀態、智慧設計論是科學與神學都需要的良藥。',
                '神用六日創造而非六分鐘，是為了給人立下工作六日、安息一日的榜樣（出廿11），神看一日如千年，人類歷史約六千年對應六日創造，千禧年一千年對應第七日安息。',
                '安息日的本質是時間的奉獻（七分之一）與人神親密聯合的福份，馬利亞選擇「上好的福份」是絕佳詮釋；十誡第四誡的兩個版本分別強調記念創造與記念救贖。',
                '第七日沒有「有晚上有早晨」的附註，表達永恆神性安息的圖畫，預表希伯來書四章的永恆安息與啟示錄二十章千禧年安息；不僅人需要安息，神也在虛心痛悔、敬拜讚美的人心中找到安息之處（賽六十六1-2）。',
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
              '創世記第一章的「六日」，有哪些解釋？最合理的是哪一個？為什麼？',
              '認為宇宙年齡與萬物產生的時間是很長久的，有哪些理論？這些理論分別有何弱點或不合理之處？',
              '安息日的本質是什麼？我們為什麼要守安息？',
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
