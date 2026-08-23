import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Waves, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;
const quote = "border-l-4 border-emerald-300 bg-emerald-50 pl-4 py-3 mb-3";
const quoteText = "text-emerald-800 leading-relaxed italic";

export default function Book39Ch18() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-slate-800 to-blue-900 bg-clip-text text-transparent">第十八章</h1>
        <h2 className="text-xl font-semibold text-gray-700">總結</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          「祭司長和文士也是這樣戲弄他，彼此說：『他救了別人，不能救自己。』」（可15:31）
        </p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-slate-50 to-blue-50 hover:from-slate-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Waves className="w-5 h-5 text-slate-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <p className="text-gray-700 leading-relaxed">
              基督教信仰真理往往與一般想法不同，美國神學家弗萊（Hans Wilhelm Frei, 1922-1988）觀察福音書中敵對者對基督的嘲弄：「他救了別人，不能救自己。」<sup>1</sup><span style={cite}>（馬太福音二十七章42節；馬可福音十五章31節。）</span>這句惡意攻擊的話卻反映了耶穌基督的真正立場——為了救別人而不能救自己；祂的最終抉擇並非如一般人所想像的，以強者的身分救自己，而是被上帝引導進入受苦的位置，藉由自己的犧牲來拯救無助、孱弱的人——罪人，藉此彰顯上帝的慈愛憐憫。<sup>2</sup><span style={cite}>（Hans W. Frei, The Identity of Jesus Christ: The Hermeneutical Bases of Dogmatic Theology (Philadelphia: Fortress Press, 1975), 71.）</span>
            </p>
            <p className="text-gray-700 leading-relaxed">
              基督的最終抉擇可能連當時的門徒也無法理解，甚至歷世歷代基督徒也未必能夠清楚了解，因為在人看來確實是「他救了別人，不能救自己」；但從上帝國的角度來看，卻是「他為了救別人，而不救自己」；唯有領受聖靈光照者，才能夠明白這樣的真理。
            </p>
            <p className="text-gray-700 leading-relaxed">
              基督教的倫理道德抉擇經常與世界的價值觀衝突，甚至冒犯人的本能天性。上一章提到，莫特曼在某些情況下以「緊急防衛」來看自殺議題，容許一種因「緊急防衛」而來的自殺，比如為了「防範」、保護家人的安全而選擇死亡。這主張其實暗指耶穌基督被釘十字架是出於犧牲自己的意願，是一種為眾人生命的緣故而捨棄自己生命的抉擇，表面上選擇死亡，事實上卻是選擇生命。這與追求自己利益的世界價值觀完全衝突，因為一般人總是會奮力逃離受苦犧牲而不在乎別人的死活。
            </p>
            <p className="text-gray-700 leading-relaxed">
              基督教倫理學觀點與一般倫理學的基礎不同，一旦除去信仰價值思維的話，基督徒的倫理道德判斷就與一般人全然無異了。如果要能堅持基督教倫理學的觀點與立場，非常需要充分的知識與反思，才有可能來做清楚的辨識，而有成熟的基督教倫理道德判斷。
            </p>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">一、傳統與類型</h3>
              <div>
                <h4 className="font-semibold text-slate-700 mb-2">1. 聖經與傳統</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  聖經與傳統是基督教信仰的兩大源頭，宗教改革呼籲「唯獨聖經」，並非不尊重傳統，而是期待所有傳統都以聖經為最高規範。基督教倫理學的基礎在於聖經，不過也重視信仰群體的倫理道德判斷——傳統，然而並未排除信仰個體，只是強調信仰個體為信仰群體的成員，而信仰群體原本是信仰個體的結合。於是在基督教倫理學發展過程中，根據不同時期、地點的信仰群體的倫理道德判斷，逐漸形成一些各具特色的類型，這些類型有助於認識基督教倫理道德判斷的寬廣幅度。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  事實上，聖經與傳統並非互相分開，乃是彼此交織。聖經是神聖上帝的啟示，卻常使用書寫傳統的形式傳達，比如出埃及的敘事；傳統則是教會信仰傳承的傳遞，卻大都建立在詮釋聖經的基礎上，比如洗禮的形式。因此，聖經裡有傳統，而傳統裡有聖經，這可應用在基督教倫理學與聖經倫理學及教會傳統倫理學之間的關係。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  就教會傳統而言，奧古斯丁整合了希伯來、希臘、拉丁三大文化，為中世紀千年之久的拉丁時代開創格局，又通往原屬奧古斯丁修會的宗教改革者路德，甚至是第二代宗教改革者加爾文在其鉅著《基督教要義》中引述最多的初代教會神學家。奧古斯丁的倫理學重視從心出發，有如跨越種族文化界限的「心學」，穿越了中世紀傳統而與宗教改革者路德、加爾文接軌；連反對宗教改革的天主教會也從奧古斯丁對教會體制與聖禮的重視找到支持，而以聖言與聖傳並列為倫理道德指導規範。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  在宗教改革這一方，路德倫理學強調「基督之下、萬人之上，以及為了基督萬人之下」的因信稱義的自由；加爾文則以「與基督連結」詮釋信仰的入口與進程。重洗派倫理學另尋出路，以行動徹底跟隨耶穌基督的教導，寧可成為關鍵少數的信仰群體見證。後來亞米紐斯（Jacobus Arminius, 1560-1609）從改革宗傳統分出，強調上帝的恩典與人的自由，成為衛斯理倫理學的神學源頭，重視得救後繼續追求成聖，成為推動倫理道德的強大動力。
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-700 mb-2">2. 三大類型</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  就基督教倫理學類型而言，最古老的德行倫理學重視道德習慣的培育，始終是不可缺少的殷切勸告，提醒基督教倫理學絕不可眼高手低，千里之行始於足下，建立德行就從天天的習慣開始，日積月累、終必有成。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  基於上帝國價值理想與世界價值觀的張力，基督教倫理學的理想既不可輕易對現實讓步，亦不可忽略實踐於現實生活，唯有務實的理想才有可能真正實現。尼布爾式理想主義——務實倫理學，或許是可接受之貼近現實的理想主義的極限，亦即懷抱理想的現實主義的典範。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  基督教倫理學就倫理道德判斷而言，以倫理道德判斷的主體為回應者，因為信仰者的基本動作就是回應上帝，也回應上帝所創造的人們，因此責任倫理學以自發性回應責任來論述基督教倫理學歷久不衰，許多神學家都與這一類型有關。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  綜觀德行倫理學、務實倫理學與責任倫理學這三大基督教倫理學類型，德行倫理學打造倫理道德的長久基礎，務實倫理學追求實踐倫理道德理想，責任倫理學則呈現行動判斷主體身為回應者的身分認同，以及應當如何對創造者負責且同時對其他人負責。倘若缺少德行倫理學，將造成基礎不穩且難以長久；若是缺少務實倫理學，將導致行動的實踐無法落實；而若缺少責任倫理學，則主體身分定位不明而易於隨波逐流。由此可見，基礎、實踐與身分三者，缺一不可，這也是形成基督教倫理學三大類型的原因。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">二、不偏不倚的正路</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                先知以賽亞傳達耶和華上帝對以色列人的呼籲：「你或向左或向右，你必聽見後邊有聲音說：『這是正路，要行在其間。』」（賽30:21）追求真理的道路並不容易，因為經常是既非偏左、亦非偏右，乃是根據上帝心意而不偏不倚。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                上帝恩典涵蓋上帝作為與人的改變，一方面「因信稱義」強調上帝恩典的作為，另一方面「重生聖化」則重視領受恩典之人的改變。因信稱義彰顯「人的不能與上帝的能」，重生聖化則呈現「在上帝恩典中人之所能」。在這兩者之間有張力，前者呈現「人的不能」是進入「上帝的能」的入口，後者則在上帝恩典的基礎上，把焦點集中在「人之所能」。事實上，更加全面的觀點是：當人面對「上帝的能」，自知不能；而當人領受「上帝的能」，則凡事都能。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                有些神學家特別重視因信稱義，路德就是一個典型實例；另外有些神學家則強調重生聖化，談論最多的就是衛斯理；加爾文則以上帝主權統合這兩端，主張因信稱義完全奠基於上帝主權，而重生聖化則是上帝主權在人身上的作為。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                因此，基督教倫理學既強調上帝主權，又呼籲人們行動：既有唯獨信心、不靠人為的一面，亦有生命更新、積極行動的一面；既有被動倚靠上帝帶領的一面，亦有主動承擔責任的一面；既有放手倒空、承受恩典的一面，亦有建立習慣、培養德行的一面。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                回想尼布爾兄弟的論戰，當美國人在珍珠港事變後群情激昂，大家主張以牙還牙而開戰，小尼布爾卻逆著時代潮流而主張「不作為的恩典」——仰望上帝的恩典終將改變世界，認為在信心的基礎上什麼都不要做，僅僅關心、守望而不急於介入。懷抱理想的務實主義者大尼布爾批判這種想法，主張在現實生活中追求以牙還牙的公義，而把愛人理想歸於終末盼望。這對兄弟各有不同主張，正好反映了平衡之路的兩端，既有小尼布爾之「恩典中的不作為」，重視仰望上帝的恩典；亦有大尼布爾之「務實的公義行動」，藉此期盼終末的來臨。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                再回想布魯姆哈德父子，小布原本參與大布的醫治服事，後來因為不滿足僅止於此，逐漸轉向政治關懷，結果又因對政治徹底失望而回頭，發展了居中論述——「等待與催促」、「抵抗與預視」，他的等待就是反抗，催促則建立在預視。一般人的等待多半帶有逃避性質，但小布的等待卻是積極的等待，出於不願放棄信念而堅持等待下去，是一種帶有反抗特質、不認同此世價值觀的等待，並非放棄行動，而是不隨便行動；唯有在預先看見的基礎上催促上帝國的來臨，亦即根據上帝國的時機來行動。回頭後的小布帶有一種成熟謹慎、深思熟慮的氣質，既有倚靠上帝帶領的一面，亦有勇於承擔責任的一面，而非把自己輕易地押在任何一邊。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                基督教倫理學應當不偏向「防禦」，亦不偏向「進取」，如莫特曼的倫理理想有防禦、保全的一面，也有進取、推動的一面。防禦是出於堅守不變的信仰原則，進取則具有勇於面對時代處境的積極性，在防禦、保全與進取、推動之間追求平衡，兼顧生命需要防禦的穩定性、持恆性——讓生命成長有軌跡可尋，亦需要進取的冒險性、開放性——讓生命發展有開闊空間。由於道德倫理抉擇經常有其複雜之處，我們需要嚴謹的一面——信仰原則的寸土不讓；也需要有寬容的一面——合乎真理的兼容並蓄。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">三、個體與群體</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                上帝造人，個體是群體中的個體，而群體則是由個體組成的群體。因此在做倫理抉擇時，既不應由孤立的個體自行決定，以免與生活實況脫節；亦不應由群體代替個體決定，以免壓抑個體的良心。這意味著，一方面要對抗時代潮流中的個體主義，另一方面則要避免傳統權威下的集體主義。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                從基督教倫理學來看，當面對倫理道德抉擇時，一方面，應當尊重個人的獨特性：尤其是個人根據與上帝的關係來做決定時應當被尊重，每一個個體的生命都是上帝的創造，也都具有無可替代性，沒有任何人可以代替別人做決定；另一方面，則應當重視生活在群體關係中的真實狀況：「基督教的信仰即共享生命。基督和我們分享祂的生命，我們也彼此分享祂的生命」，<sup>3</sup><span style={cite}>（鄂爾〔Robert D. Orr〕等，《認識生命倫理學》，章福卿譯〔台北：校園，1997〕，187。）</span>從相通共融、互相支持的信仰群體的角度來做判斷。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                由於每個個體都生活在群體關係之中，個體與群體有難以切斷的連結。聖經有很多面對重大抉擇的例子，表面上是單獨一人，比如雅各在雅博渡口、摩西在西乃山，看似都是一人而無群體性。然而，當時的雅各卻具有族長身分，摩西則具有帶領以色列人出埃及的領袖身分，兩位身上都有濃厚的群體關連，實質上代表群體面對重大抉擇。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                如果以群體為主而壓制個體，比如一味信賴群體體制，必然導致失去平衡；如果重視個體而與群體保持距離，單向地強調個體的獨特性，也是失去平衡。平衡需要不斷努力追求，既有個體單獨面對決斷的一面，亦有群體同心協力的一面。追求個體與群體之間的平衡，這應當是信徒參與教會的基本了解，而非要求初信者絕對服從主任牧師，這種主張實在不妥，因為基督徒絕對服從的對象只有創造主上帝，而不應當是任何受造者。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們應當追求在個體與群體之間力求平衡的基督教倫理學，群體既不可開口、閉口說「你不可」，個體也不應嚷嚷不休「我就要」；應當如莫特曼所建議的，追求保守又進步，在保守中對進步適度地開放，在進步中恰當地堅持保守。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">四、神人分際</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                論及如何做倫理道德判斷時，重要焦點在於判斷的主體——人。必先了解人是誰，而後才能明白如何做判斷，因此需要釐清創造主上帝與受造者人的關係。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                回顧靈修學史，有些人為了過聖潔生活而遠離此世，不論是離群索居的埃及的安東尼，或者在柱上長期修練的敘利亞的西門，都是與眾不同的親近上帝的特殊見證，但若要把這些特例當作通則的話，必定會造成問題。上帝創造的生命豐富無比，人人領受不同的恩賜、呼召，但仍須通盤考量神人關係，絕不可逾越神人分際，若過度宣揚追求天人合一的特例，恐怕成為越界的開始。
              </p>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">1. 神化</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  近年來在神學上有關「神化」（神聖化、上帝化，Deification／Theosis）教義的討論愈來愈豐富。有些神祕主義者渴慕進入終極神聖，如蓋恩夫人（Madame Guyon, 1648-1717）所形容的，有如河水流入海洋，至終無法分辨何為河水、何為海水。東正教會神學家更是直白地以「神化」當作基督教信仰的最高目標，雖然聲稱只是追求成為上帝而非變成上帝，然而總是想要進入上帝的完全與神聖。<sup>4</sup><span style={cite}>（參見：諾門・拉索〔Norman Russell〕，《希臘教父傳統中的神化教義》，謝仁壽&周復初譯〔新北：聖經資源中心，2014〕；克里斯登森〔Michael J. Christensen〕&威頓〔Jeffrey A. Wittung〕編著，《與神的性情有分》，謝仁壽&周復初譯〔新北：聖經資源中心，2016〕。）</span>加爾文神學卻對這種神祕主義踩煞車，畢竟這種類型的靈修神學有逾越受造者本分之虞，河水與海水終究有別，神人之間也要有所分際，上帝的形像與上帝本身並未等同。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">2. 與基督連結</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  加爾文一方面非常重視神人關係的相通共融，<sup>5</sup><span style={cite}>（強調加爾文神學通往神化的研究如：康麗絲〔Julie, Canlis〕，《加爾文的梯子：升上和升天的靈修神學》，王亞伯、謝仁壽、周復初譯〔新北：聖經資源中心，2020〕。）</span>另一方面卻經常對人這端設限。他主張人藉由與基督連結而朝見天父上帝，亦即藉由基督瞻仰上帝的榮耀，縱使在與基督連結的最高峰，仍有神人分際。上帝賜下愛子耶穌基督成為通往祂的道路，與基督連結就是走在這條路上，並未越過這條道路而直接進入終極神聖。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  與基督連結作為目標，就是尊重上帝所提供的道路——「只有在父懷裡的獨生子將他表明出來」（約1:18）。人總是想要窺見神聖上帝的奧祕，畢竟好奇是人的天生特質，如亞當夏娃違背禁令去吃分別善惡樹的果子，不過逾越界限的代價終究極高。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  加爾文主張，必須在聖靈裡與基督連結來朝見天父上帝，「與基督連結」是重要的中間點，既不偏向神人融合，也不偏向神人分離，有如約翰福音十五章4節提供的畫面——「枝子接在葡萄樹上」。<sup>6</sup><span style={cite}>（約翰福音十五章4節：「你們要常在我裡面，我也常在你們裡面。枝子若不常在葡萄樹上，自己就不能結果子；你們若不常在我裡面，也是這樣。」）</span>枝子與葡萄樹的連結並非徹底融合，卻是具有生命力的連結，枝子吸取葡萄樹的養分後繼續成長，然而枝子並不等同於葡萄樹本身。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「我已經與基督同釘十字架，現在活著的不再是我，乃是基督在我裡面活著」（加2:20），這種否定自我而肯定基督的經文，若是成為靈修學的發展導引，最能呈現加爾文所主張——在天上被稱義、赦罪、復和，而在地上則進入悔改、重生、聖化的改變，如此天上、地上兩面一體，唯有與基督連結才能帶來完整的生命體驗。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  美國著名小說《跟隨祂的腳蹤行》（<em>In His Steps</em>）提出徹底追隨基督的挑戰，強調耶穌基督怎麼做，我也怎麼做，凡事要問「耶穌會怎麼做」（What Would Jesus Do），追求跟隨基督的實踐行動，這書風行一時且歷久不衰。然而，強調追隨基督的行動若無「與基督連結」，勢必失去行動的動機與內涵，只剩下行動方針，唯有經歷與基督連結，才能使基督徒熱切成為追隨基督的行動者，並且明白行動的意義。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  東方傳統常見對神人、神通的嚮往，如中國文化裡有不少追求修煉工夫、修道成仙的故事。這可成為發展基督教神化教義的重要動機，因為神化對於想要藉由修道超凡入聖之人，容易引發共鳴。針對這種傾向，「在基督裡」可以繼續延伸成「在聖靈裡」（in the Holy Spirit），聖靈如風似氣，「在聖靈裡」有如迎風起舞，又如氣行遍體，然而聖靈並非無位格的風與氣，聖靈的主體性始終使人有敬畏之心，乃引導人進入與基督連結。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">3. 基督勝利的宣告</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  二十世紀改革宗神學家巴特的神學，藉由宣告基督勝利強調上帝的超越性。他把耶穌基督的拯救恩典詮釋得極其豐富，從道成肉身的「神而人」呈現順服的榜樣，從死裡復活的「人而神」展現高升的見證，而「神人中保」更是彰顯上帝的榮耀，這些順服、高升到榮耀都落實在拯救的內涵，呈現色彩鮮明的基督勝利宣告。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  巴特本人並未走向神化教義，然而巴特神學的重要詮釋者托倫斯卻主張「神化」。托倫斯的原始動機，是想要為加爾文所主張的「與基督連結」帶來新生命，而能與初代教父及東方教會的神化教義連結，打通一條從巴特神學通往神化的途徑。簡要檢視其神學脈絡如下，早期托倫斯從詮釋巴特神學出發，後期則從拯救論角度來談「神化」，這是由於強力宣告基督勝利，勢必帶來人而神之路徑的通暢，再進一步就主張模糊神人分際的神化。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">4. 小結</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  主張神化教義者的靈修進路則重視人主動、由下而上的特質，從煉路、明路到合路，一路向上提升，成為許多靈修大師的理想——天人合一，追求進入與神聖融合。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  加爾文並不使用帶有神化色彩的「與上帝連結」，而大量使用「與基督連結」，主張人是藉著與基督連結而到天父那裡去，因此靈修的進路總是需要道成肉身的基督，呈現上帝主動、由上而下的特質。因此，托倫斯主張神化教義則與加爾文漸行漸遠。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  況且，巴特的樂觀最多只能應用在基督教世界，因為在基督教信仰中宛如新生兒的宣教區並非如此，許多人仍然生活在偶像、迷信、謊言、禁忌裡，縱使有許多基督徒盡心盡力宣揚福音，也未能使那些人清醒過來，反而有許多基督徒經歷「凡立志在基督耶穌裡敬虔度日的也都要受逼迫」<sup>7</sup><span style={cite}>（提摩太後書三章12節。）</span>。處於這樣的宣教區，並非懷疑上帝的大能，而是非常需要堅忍到底的十架神學，幫助期盼終末上帝來臨的受苦堅信者得著安慰：
                </p>
                <div className={quote}>
                  <p className={quoteText}>
                    因為寶座中的羔羊必牧養他們，領他們到生命水的泉源；上帝也必擦去他們一切的眼淚。（啟7:17）<br />
                    上帝要擦去他們一切的眼淚；不再有死亡，也不再有悲哀、哭號、疼痛，因為以前的事都過去了。（啟21:4）
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  巴特高調地宣告基督的得勝，他舉例說，這就有如一個鐘已經壞掉了，只是這鐘並不自知，儘管時針、分針還在亂擺，但其實已全無用處，因為邪惡已經徹底失敗了。他又提出另外一個例子，這就好比兩軍對壘的戰爭其實早已結束，得勝者這方已宣告勝利，只是戰敗者還不知，猶仍猛烈作戰，但不過是在負隅頑抗，終究要接受失敗的事實。因此，基督得勝了，戰爭已經結束，邪惡徹底失敗了。其實這樣的神學並不一定導致傳福音，而是有可能導致不傳福音，因為認定大家都已經活在真理之中了，儘管現在還有些人尚不明白，但終有一天他們將會明白。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  巴特反對自由神學及世俗人文主義，強調上帝的主權、基督的得勝，由於他高舉基督得勝到無所不能，似乎把全面勝利的倒影投射到今生今世，以致造成「在地即在天」的效應，彷彿人們全部都站在基督這邊而分享基督的勝利，可是事實上，這卻可能只是把在世俗價值裡的人們全都逕自宣稱為聖而已。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  這種結果的原因在於，巴特神學把終末提前實現了，他把歷史上的每一時刻都當作終末，忽略了終末與終末前之間的差距。用一個簡單的架構來說，應當歸屬於終末的卻被拉到現在來談，這是由於他過於重視垂直面而忽略水平面。跟隨巴特神學的人可能會傾向「不必等候終末的天堂」，因為天堂對應於垂直面，而終末對應於水平面！
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">五、「在地即在天」或「在地如在天」？</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「在地即在天」與「在地如在天」僅僅差一個字，意義卻截然不同，前者強調天地一體而無分別，後者則主張天地相通卻仍有別。
              </p>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">1. 在地即在天</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  巴特是一位非常強烈的基督中心論神學家，一方面，對那種過度人文主義化的神學提出嚴厲批判；另一方面，他心目中的基督是得勝的基督，在世上每一個領域、每一個角落都已完全得勝，但如此的基督中心論卻很有可能帶來副作用——過度簡化基督的得勝。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  巴特呈現的光明世界令人心動，但在非基督教文化傳統的地區，現實並非如此。縱使在西方基督教世界也不是那麼樂觀，隨處可見的基督教信仰價值被世俗價值蠶食鯨吞——不論是基督教文化下的社會世俗化，甚至連帶地教會也隨之世俗化，並沒有如巴特所想的認識基督得勝的真理普及四處。巴特在晚年一味高舉基督的得勝，天天欣賞反映天上榮耀的莫札特音樂，但他是否只聞天籟，似未聽到人間尚有哀歌？
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">2. 在地如在天</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  觀察巴特之後的神學發展，表面上自由神學沉潛下去，但並未消失，反而轉換成另外一種面貌，宣稱基督得勝而把此世當作上帝國，表面看似宣揚基督，事實上則在傳講文化。這是主張「在地即在天」帶來的副作用，對策則是轉向「在地如在天」，在地只是「有如」在天而已，畢竟當前的世界仍在等待盼望上帝的主權。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  比巴特年輕二十歲的潘霍華反而清楚辨識「終末」與「終末前」的不同，現實中的人們目前仍然活在終末前，既然如此，就不能強求終末的一切在當下實現，因為終末尚未全然來到。潘霍華認為，儘管終末前並沒有如同終末那般理想，但終末前仍是必要的，因為這是通往終末的必經之路。我們必須接受在這世上仍有許多缺陷、惡者得勝、善者失敗等，因此必須期盼終末上帝國的來臨，上帝的主權充分彰顯，因此信仰者必須有受苦的心志。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  然而，在要達到終末之前，必先經過終末前的道路，「路德必須經過修道院，保羅必須經過對律法的篤信，罪犯必須經過犯罪被釘上十字架，才去聽取終極之言」。<sup>8</sup><span style={cite}>（朋霍費爾，《倫理學》，胡其鼎譯〔香港：漢語基督教文化研究所，2000〕，106。）</span>一方面，終末必定遠遠地超越終末前；另一方面，終末前卻仍是通往終末的必經之路，只有通過終末前的十字架，才能進到終末的復活。潘霍華認為，終末前與終末的關係，有如施洗約翰與耶穌基督的關係，施洗約翰所做的一切正是為耶穌基督的來臨鋪路，一旦傷害了終末前的事，終末也必定遭受損失。<sup>9</sup><span style={cite}>（朋霍費爾，《倫理學》，114-116。）</span>總之，潘霍華有如先知般預告了終末論的重要性，基督教倫理學也勢必重視從終末論出發的倫理學。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">六、從終末論出發的倫理學</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                處於後巴特時代的莫特曼，強調終末仍在盼望中——已經開始卻尚未完全實現，當下只能遠遠望見而歡喜迎接（來11:13）。莫特曼稱自己的終末論為「轉化的終末論」，從「轉化的終末論」出發而至「轉化的倫理學」，由盼望到行動，主張基督徒群體在終末視野中懷著世界終必被轉化的盼望，而在今生今世藉由落實上帝國的行動，期盼直到上帝的旨意在地上完全實現，這是一種既追隨耶穌基督，又期盼耶穌基督再來的未來的倫理。<sup>10</sup><span style={cite}>（莫爾特曼，《盼望倫理》，9-56。）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                上帝的子民是在歷史中心懷著上帝國盼望前進的信仰群體，這群體的彌賽亞盼望是基督教倫理道德的主要來源。這樣的基督教倫理學具有終末的視野，而且從終末論出發，在歷史中一面實踐、一面盼望未來，必將帶來轉化現實的力量。儘管歷史有起有落，人卻在歷史中朝向盼望中的上帝國前進，並藉由這盼望而得著在現實中實踐上帝國價值觀的力量。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                莫特曼主張只有一個國度——上帝國，一位主——基督是主；這些都是改革宗神學的特徵，期盼上帝的主權、基督是主，這終將落實在歷史盡頭的終末，亦即未來上帝應許的終極實現。現今我們仍在期盼上帝主權全然落實、基督完全得勝，而這盼望就是在歷史中的信仰者所持守的一貫信念，朝向未來的終末眺望，期盼上帝主權全然落實的生活態度。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                因此，既非如饒申布士所期待今生今世的上帝國，上帝國落實在勞資關係、社會結構中；亦非巴特所宣稱超越塵世的基督掌權得勝，只要朝向光明面，隨時都可領受神聖啟示；也不是重洗派那種不沾染塵世，把教會與俗世徹底區隔的潔淨。莫特曼神學獨特之處在於始終堅持以盼望面對終末，而把這盼望落實在此世生活中，亦即落實在每個人的生命故事裡。在歷史中懷著終末盼望的信仰群體，正書寫著群體的生命故事，並使群體中每一個成員都能了解自己的生命故事，以及在群體故事中的角色。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                如今進入二十一世紀二〇年代，我們繼續面對劇烈改變中的周遭環境：科技商業仍然蓬勃發展，而且進一步全面影響塑造文化，單單智慧型手機的出現就劇烈改變年輕人的文化，天天在雕塑他們的生命故事；自然環境愈來愈惡劣，過去許多山明水秀的地區，已經見不到優美的自然環境，反倒成為空氣汙染的匯聚之處；恐怖主義愈來愈野蠻，外加暴力升級、國族對抗等，讓人無法分辨究竟身處文明或蠻荒時代。這一切發展都使二〇一〇年的《盼望倫理》仍然面對著，有如一九六四年《盼望神學》所面對六〇年代那股動盪不安的氛圍。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                同樣處於險惡的歷史處境中，莫特曼仍堅持對未來的盼望，只是兩書之間有一個不同之處：在《盼望神學》的年代，他對參與社會行動有熱切的期待，因此在最後一章論及出埃及的教會，主張信仰群體應當以行動參與盼望；但在寫作《盼望倫理》時，隨著年齡、閱歷的成長，他開始提到心境、靈修、態度、內在世界的平安。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                既然人們暫時寄居此世，關鍵在於能否在這亂世中「預嚐」來自上帝的平安，這平安也出現在我們生命中的真實經歷裡，因而期待一種「新的、面向未來的基督教神祕主義」，這與「舊的、出世內在的基督教神祕主義」不同，並非關上感官之門，而是喚醒感官來面對上帝世界的未來。<sup>11</sup><span style={cite}>（莫爾特曼，《盼望倫理》，52。）</span>
                </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                現代人普遍遠離內在世界，往往忙到沒有時間面對自己，因此安靜型的靈修開始流行，啟發人們回到內在世界，然而這類靈修往往重複性很高，無法進入深入的反思，這並非音樂或形式有問題，而是內涵相當薄弱。人若要讓自己的內心安靜下來，並非一再重複某些動作即可，乃是需要更深遠的視野，看見更廣闊的世界，莫特曼則期待藉由終末期盼上帝國而進入更深的內在體驗。這種神祕主義並非以身體感官為虛空、把感官門窗關掉，而是追求全人被終末盼望更新，連帶經歷感官被更新，以致有新的感覺、新的看見、新的聽見，那必定是從終末的盼望而來的「新」。<sup>12</sup><span style={cite}>（Jürgen Moltmann, Ethics of Hope (Minneapolis: Fortress, 2012), 239.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「我們不是為了改變世界而需要上帝，而是為了享有上帝而改變世界」。<sup>13</sup><span style={cite}>（莫爾特曼，《盼望倫理》，279。）</span>莫特曼相信，「上帝的安寧已經存在於造成癱瘓並經常是致命的各國衝突深處」，<sup>14</sup><span style={cite}>（莫爾特曼，《盼望倫理》，290。）</span>「如上帝的和平已經寓居於世界中心一樣，其也已存在於人類存在的內部」。<sup>15</sup><span style={cite}>（莫爾特曼，《盼望倫理》，290。）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                許多基督徒雖盼望死後上天堂，然而卻只相信天堂、不相信終末；然而上帝的拯救終將把一切都更新，這即將來臨的新天新地是信仰者在世上的盼望。主張「信耶穌，上天堂」，焦點僅僅在於得救——拯救論；而主張「信耶穌，期盼上帝國臨到」，焦點則在於盼望——終末論。拯救論若無終末的視野，上天堂只是取得一張門票；當拯救論與終末的期盼結合，上天堂就會成為一條盼望的道路，一種生活方式。從終末論出發的倫理學，是一種藉由終末的盼望而在歷史中行動，並且期盼上帝旨意能夠行在地上的倫理道德神學。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">七、結語：讓教會成為教會</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                教會應當引導人建立與基督連結的關係，因而首先必須面對「人」，而不分族群背景、社會地位、政治立場等。這並不意味著，教會要做一個與世無爭的桃花源、避世的烏托邦，而是教會應當對所有人敞開大門。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                改革宗的教會觀具有強烈的入世性，這入世性原本就建立在上帝主權的前提而反對屬靈、屬世二分，但不可避免地可能帶來一個副作用，就是強烈的入世帶來全面的世俗化。有人說教會要改變社會，其實哪有那麼簡單？教會想要改變社會，難道社會就不想改變教會嗎？究竟社會的力量與教會的力量相形之下，何者比較強大呢？如同一隻宣稱要改變大海的小烏龜，只要出現任何一個小波浪就足以被沖走了。然而，胸懷終末上帝國全然來臨之盼望的教會，並非以卵擊石，而是如同芥菜種與麵酵，其影響力將長大成樹，且使全團都發起來。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                信仰世界與生活世界並非完全分離，教會應當在信仰價值觀裡明辨清楚教會是什麼、教會在世界裡應當做什麼。當面對希特勒掌權且控制教會的全面性威脅時，巴特非常有力地呼籲：「重要的是，唯獨做神學與神學本身，彷彿世上什麼事都沒有發生。這也是選擇一種態度，間接來說，甚至是一種政治態度。」<sup>16</sup><span style={cite}>（E. Busch, Karl Barth (Philadelphia: Fortress, 1976), 226.）</span>這意味唯有當神學家努力做神學的時候，才最有可能改變社會，就此意義而言，認真做神學就是一種政治參與，而且是改變社會的力量。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                讓神學成為神學，亦即讓教會成為教會！
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當教會認真宣揚福音時，最能改變社會。上帝國福音具有轉化世界的能力，教會當然要率先活在這福音裡，並對世界宣揚且成為上帝國價值觀的見證，然而教會必須始終是教會，畢竟不論社會、政治、經濟等都有其複雜性，若是教會因入世而被世界淹沒，甚至被徹底融入世俗的價值裡，就不再是教會了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                教會如果不傳講基督，請問還有哪裡會傳講基督呢？
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當教會開始熱心關切各種政治、社會、經濟議題時，畢竟教會還是要做教會，教會若在這一點失職的話，就沒有任何其他世上的群體可以代替教會了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當教會不像教會，神學不像神學，這才是危機所在。當基督徒在社會各行各業不像基督徒，也是危機所在。重點不在於基督徒究竟應當投入哪一種行業，而在於是否有在各行各業領受活出呼召的堅決信心。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                有時教會現況令人心情悲傷、沉重，如同加爾文在讀詩篇時，從以色列人被擄的描述中聯想到教會的荒涼：
              </p>
              <div className={quote}>
                <p className={quoteText}>
                  雖然教會已經滅亡了，先知卻深信上帝藉著祂奇妙的力量，將使教會從死裡復活，而有更新的生命。這是一段值得注意的篇幅，顯示教會並不總是外觀不變地被保護著，而是當教會看來好像死亡時，卻突然按照上帝的心意而重新被造。荒涼將不再臨到教會，或是剝奪我們的盼望，乃是如上帝從無到有、創造世界一般，把教會從死亡黑暗裡帶出來，這正是祂的工作。<sup>17</sup><span style={cite}>（加爾文舊約註釋，詩篇一〇二篇18節：John Calvin, Commentary on the Book of Psalms, vol. 4 (Grand Rapids: Baker, 1989), 115-116.）</span>
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                願主親自記念、保守祂的教會，以及在受苦中仍忠心跟隨基督的人們！
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
                '基督教倫理學建立在聖經與傳統彼此交織的基礎上；德行倫理學（長久基礎）、務實倫理學（實踐落實）、責任倫理學（回應者身分）三大類型缺一不可，分別提供基礎、實踐與身分認同，任何一項缺席都會導致基督教倫理學失衡。',
                '追求真理的正路「既非偏左、亦非偏右」：因信稱義與重生聖化、被動倚靠與主動承擔、防禦與進取，都不是二選一，而應像小布魯姆哈德「等待與催促」那樣，在恩典中不作為與務實的公義行動之間取得動態平衡。',
                '個體與群體不可偏廢——群體不可壓制個體的良心，個體也不可脫離群體獨行；基督徒絕對服從的對象只有創造主上帝，追求「保守中對進步適度開放、進步中恰當堅持保守」才是健康的信仰群體樣貌。',
                '神人之間有分際，不可逾越：加爾文以「與基督連結」（枝子接在葡萄樹上）取代帶有神化色彩的「與上帝連結」，尊重上帝所賜的道路而不直接進入終極神聖；巴特高舉「基督勝利宣告」雖然彰顯上帝超越性，卻也可能因把終末提前實現而簡化了現實的殘破。',
                '「在地即在天」（天地一體無分別）與「在地如在天」（天地相通仍有別）僅一字之差卻意義迥異；潘霍華清楚辨識「終末」與「終末前」的不同，終末前的十字架道路是通往終末復活的必經之路，不可跳過。',
                '莫特曼「轉化的終末論」主張由盼望到行動，在歷史中一面實踐、一面盼望上帝國完全實現，晚年更強調唯有「預嚐」上帝的平安才能安頓內在世界；全書總結呼籲教會不論如何入世關懷社會，都必須「讓教會成為教會」——唯獨做神學本身，就是最有力的政治參與與改變社會的力量。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「讓教會成為教會」對今日熱衷社會運動、政治參與的教會有何提醒？</h4>
              <p className="text-gray-700 leading-relaxed">
                巴特在希特勒掌權的高壓處境下，選擇「唯獨做神學」作為最有力的政治態度，這對今日教會思考如何參與公共議題極具參考價值——不是要教會自我封閉、不聞世事，而是提醒教會：認真宣揚福音、忠實成為教會，本身就是對世界最深刻的見證與最有力量的改變，勝過教會迷失在政治操作或社會運動的語言中而失去自己的身分。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「在地即在天」與「在地如在天」的區分，對今日教會的敬拜與宣講方式有何檢視作用？</h4>
              <p className="text-gray-700 leading-relaxed">
                若教會的敬拜和宣講給人「一切都已經完全得勝、毫無破碎」的印象，可能落入「在地即在天」把終末提前實現的陷阱，讓受苦者的哀歌無處容身。「在地如在天」的中道立場提醒教會：既要宣告基督得勝的確據，也要誠實承認世界仍在終末前的道路上，為受苦弟兄姊妹留出空間。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">莫特曼晚年強調「預嚐上帝的平安」，對今日過度活動導向、缺乏深度的教會靈修文化有何反思？</h4>
              <p className="text-gray-700 leading-relaxed">
                文中提到「安靜型的靈修開始流行，然而這類靈修往往重複性很高，無法進入深入的反思」，這提醒教會，真正的內在更新不是靠重複某些形式動作，而是需要更深遠的終末盼望視野。教會在推動靈修操練時，應當追求喚醒全人對上帝世界未來的感官更新，而非停留在表面形式的重複。
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
              '「他救了別人，不能救自己」這句嘲弄的話，反而道出了耶穌基督最深刻的救贖真理。回顧全書，你認為基督教倫理學與一般倫理學最根本的不同是什麼？',
              '本章總結德行、務實、責任三大倫理學類型缺一不可。回顧你自己的信仰實踐，是否偏重某一類型而忽略了其他兩種？',
              '加爾文以「枝子接在葡萄樹上」比喻與基督連結——既非徹底融合，也非彼此分離。你如何理解這種「既親密又保有分際」的神人關係？',
              '「在地即在天」與「在地如在天」僅一字之差。你觀察自己所處的信仰群體，傾向哪一種？這種傾向對信徒面對苦難的態度有何影響？',
              '莫特曼晚年從熱切參與社會行動，轉向重視內在世界的平安。你如何看待信仰生命中「向外行動」與「向內安靜」這兩種傾向的階段性轉變？',
              '本書以「願主親自記念、保守祂的教會」作結。走過這十八章的學習，你對「基督教倫理學」的理解，與開始閱讀本書之前相比，有哪些具體的改變？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 回顧全書，整理自己的「基督教倫理學筆記」</h4>
              <p className="text-gray-700 mb-2">花時間回顧十八章的學習，挑出三到五個對你最有觸動的概念或人物（如奧古斯丁的「心學」、加爾文的「與基督連結」、潘霍華的「終末前」、莫特曼的「轉化的倫理學」），寫下這些概念如何具體影響你看待某個倫理抉擇的方式。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 檢視自己在「防禦」與「進取」之間的平衡</h4>
              <p className="text-gray-700 mb-2">
                誠實反省自己面對信仰原則與時代處境時，是否過度偏向堅守不變的防禦，或是過度偏向開放進取而失去原則，並嘗試找出屬於自己此刻生命階段合宜的平衡點。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🕊️ 練習「讓教會成為教會」</h4>
              <p className="text-gray-700 mb-2">
                本週在參與教會服事或討論公共議題時，刻意反思：這個行動是否讓教會更像教會（忠實傳講基督、建立與基督連結的關係），還是不自覺地讓教會被世俗的議程或價值觀所主導。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「上帝啊，感謝祢藉著這本書帶領我認識歷代聖徒對基督教倫理學的深刻反思。求祢幫助我不偏左也不偏右，走在祢所指引的正路上；求祢使我在個體與群體之間、在防禦與進取之間，都能存謙卑的心尋求祢的心意。求祢幫助我謹守神人分際，單單藉著與基督連結來認識祢，並求祢使祢的教會真正成為教會——忠實傳講基督，在受苦中仍存終末的盼望，直到祢的國度全然降臨。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
