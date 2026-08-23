import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book39Ch1() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-slate-800 to-blue-900 bg-clip-text text-transparent">第一章</h1>
        <h2 className="text-xl font-semibold text-gray-700">導論</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          「我們原是他的工作，在基督耶穌裡造成的，為要叫我們行善，就是上帝所預備叫我們行的。」（弗2:10）
        </p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-slate-50 to-blue-50 hover:from-slate-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-slate-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <p className="text-gray-700 leading-relaxed">
              以弗所書二章10節的經文告訴我們，每一個人都是上帝創造的作品，<sup>1</sup><span style={cite}>（經文中之「工作」原意為「作品」。）</span>並且是在耶穌基督裡造成的，因上帝創造這世界是藉耶穌基督而成；<sup>2</sup><span style={cite}>（約翰福音一章3節；歌羅西書一章16節；希伯來書一章2節。）</span>人的生命必須藉由耶穌基督經歷重生，<sup>3</sup><span style={cite}>（哥林多後書五章17節：「若有人在基督裡，他就是新造的人，舊事已過，都變成新的了。」）</span>目的是為要「行善」（原意：上帝看為好的事），而這一切都是「上帝預備叫我們行的」，全部都出於上帝的旨意。
            </p>
            <p className="text-gray-700 leading-relaxed">
              由於創造者對於每一個作品都有其心意，因此每一個人都是上帝獨特的作品。創造者上帝期待人不只是活著，而且還要被更新，能做合乎上帝心意的事。論及倫理道德判斷，首先必須從上帝造人且人應活出上帝心意的角度來思考。
            </p>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">一、神意和人意</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                學習基督教倫理學的目的，就是要學習分辨什麼是上帝看為好的——使我們能夠活出創造者的心意——不只讓信仰結出道德果實，而且使道德行為被信仰支撐，因此首先就要分辨何為神意或人意。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                如圖示簡略區分「神意」和「人意」，顯然可見神意大而人意小，兩者間有一小塊交集——當人順從上帝旨意的狀態，基於人的軟弱，這塊交集可能不大，乃至完全消失。按照奧古斯丁（Aurelius Augustinus, 354-430）的傳統，應當避免把魔鬼放大且位格化，因此不應正面描述邪惡以致使邪惡實體化，而可從負面角度描述「邪惡」為「缺乏良善的狀態」，有如「缺乏光明的狀態」，邪惡與人意有許多交集，反映人經常生活在罪惡狀態之中。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                另外一塊「人意」，既非完全順從上帝而與「神意」全部交集，亦非全然臣服罪惡而與「邪惡」完全相交，乃經常處於未做出明確抉擇的動態狀態，有可能分別向「神意」或「邪惡」趨近。一般而言，當人以自己為中心時，表面上僅是人意高漲，事實上卻已漸漸離開神意而傾向邪惡，當人節制自己乃至棄絕自我中心時，則可漸漸轉向神意而遠離邪惡。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                路德（Martin Luther, 1483-1546）立場鮮明地主張，人在善惡之間並無自由意志可言，對他而言，「人意」這一塊並不存在，他說：人的意志有如站在雙方中間的牲畜，若是給上帝騎，就遵行上帝旨意，正如詩篇七十三篇22～23節說：「我這樣愚昧無知，在你面前如畜類一般。然而我常與你同在。」若是給魔鬼騎，就按照魔鬼意思而行。無法自己選擇奔向何方，或者由誰來騎，而是雙方爭戰決定何者來騎。<sup>4</sup><span style={cite}>（M. Luther, The Bondage of the Will, J.I. Packer &amp; O.R. Johnston tr. (London: James Clarke, 1957), 103-104，參見《路德文集．第二卷──改革文獻II》〔香港：香港路德會文字部，2004〕，378。）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                路德認為，人如牲畜無法自己選擇被哪一方主導，若非被上帝騎，就是被魔鬼騎，他描繪了人意遭神意與邪惡互相爭奪的畫面，亦即人意在神意與邪惡之間擺盪。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                《山間靈風吹起——泰雅爾的甦醒》一書，<sup>5</sup><span style={cite}>（林鴻信編，《山間靈風吹起——泰雅爾的甦醒》〔新北市：橄欖，2019〕，298-302。）</span>涵蓋了二十年來的原鄉訪談，許多具有恩賜的服事者常常提到，每當他們領受聖靈時，有時會經歷三股力量、三種聲音，其一來自上帝的旨意，其二來自魔鬼的意思，其三則來自人的想法。服事者必須在神意與邪惡之間分辨清楚，至於另外一塊不明顯的地帶——人意——則不易確定是受邪惡影響或者被神意帶領，那一塊似乎是中性而尚未做決定，或者只是負責一般生活起居作息而不直接涉及善惡抉擇。從神學角度觀察，人意裡有一部分是上帝喜悅的，這可能與神意重疊，不過在人意裡有另一部分則受到邪惡影響，因邪惡經常藉由人意來運作。必須注意的是，當人意過度被高舉時，通常會給邪惡敞開大門，造成以自我為中心而遠離上帝的結果。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                蒙受耶穌基督恩典的人，當全然倚靠上帝時，就是把人意交託神意，在這理想狀態中，人意在神意裡面。加爾文（John Calvin, 1509-1564）描述這種理想狀況非常精采：「首先，因神出於祂的慈愛在人心裡所運行的一切是我們的，只要我們明白不是出於我們自己；其次，因神引領人行善的思想、意志以及努力，也是我們的。」<sup>6</sup><span style={cite}>（《要義》，2.5.15: "First, because whatever God out of his lovingkindness does in us is ours, provided we understand that it is not of our doing; secondly, because ours is the mind, ours the will, ours the striving, which he directs toward the good."）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                人必須明白自己的無能為力有如空的容器，讓慈愛的上帝在人心裡運行一切，有如空的容器被充滿了寶物，在這種情況下，容器裡的寶物亦可算是容器的，當人順從神意被上帝引導時，人意本身正在神意裡經歷這一切，既是屬於上帝的，也是屬於人的。
              </p>
              <p className="text-gray-700 leading-relaxed">
                簡而言之，「所以，你們或吃或喝，無論做什麼，都要為榮耀上帝而行」（林前10:31）。當人盡心盡力追求上帝榮耀時，必定同時經歷到自己成為上帝的工具而被祂引導使用。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">二、基本概念</h3>
              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 倫理和倫理學</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  「倫理學」是研究「倫理」的學門，「倫理學」的英文是Ethics，字尾有一個s；「倫理」的英文是Ethic，字尾沒有s，比如工作倫理是用the Ethic of Work，工作倫理學則用the Ethics of Work。由於「倫理」與「倫理學」關係緊密，只是層次略有差別，論及倫理學自然必須討論倫理，而探討倫理時為了做到前後一致而無互相矛盾，也必須考慮到追求整體倫理規範具有「相容共存性」（coherence）的倫理學視野，因此有時兩者會交互使用。
                </p>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-slate-700">2. 倫理和道德</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  「道德」（Morality）是倫理學討論的重要相關字，一般而言，倫理指向群體的行為規範、原則，道德則指向個體的行為規範、原則。倫理涉及群體的層面，其中有許多約定俗成的文化習俗，而現實中的個體並非全然孤立，乃是社會群體中的一位成員，生活在文化習俗裡，因此經常可見「倫理」與「道德」交互使用的情況，需要注意其上下文的涵義，本書有時以「倫理道德」通稱涵蓋群體與個體的行為規範、原則。
                </p>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-slate-700">3. 倫理學和道德哲學</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  研究倫理的學門稱為「倫理學」，當倫理學探討倫理規範時，主要焦點在於全面性，因而有時會忽略個體性，或者最多做到從群體角度來論及個體性。比如說，當討論個案時，從個體角度需要論及良心，但從群體角度就不易論及良心，因群體倫理是由個體良心集合而成，反之，個體良心亦可能被群體倫理塑造而成。「道德哲學」指向對道德的普遍性所做的哲學探討，因其道德普遍性是指適用於每一個體，然而道德哲學可能略過具體的群體而直接探討普遍的人之道德準則，思路上可與倫理學互相參照。
                </p>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-slate-700">4. 基督教倫理學</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  一般而言，倫理學是研究有關行為規範（norm，準則）的學門，基督教倫理學則探討建立在基督教信仰價值觀的行為規範，聖經倫理學可說是比較特定的基督教倫理學，特別指直接從聖經取材探討合乎聖經價值觀的行為規範。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  基督教倫理學不是一般的倫理學，最大的差別在於基督教倫理學是以上帝旨意作為倫理道德思考、判斷的中心，追求分辨什麼是上帝的心意，而上帝心意的對立面往往就是邪惡，因此基督教倫理學也同時追求辨識邪惡。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  基督教倫理學的思考主要根據來自以聖經為主、傳統為輔，參照知、情、意（理性、感性、行動）三方面整合而成，因此與系統神學沒有本質上的區別，<sup>7</sup><span style={cite}>（《系統神學（上）》，56-65。）</span>只是基督教倫理學探討的主題座落在與行為有關的這一塊。有人偏好使用「神學倫理學」，其實神學倫理學與基督教倫理學並沒有本質上的差別，「神學倫理學」只是更強調從神學思想延伸出來的倫理判斷，而且有許多神學家在論述其神學思想時，或多或少都涵蓋了倫理議題。
                </p>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-slate-700">5. 規範倫理學和後設倫理學</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  倫理學通常是指「規範倫理學」（Normative Ethics），「規範」即指行為的準則、依據、判準。相較於「規範倫理學」，二十世紀哲學發展出「後設倫理學」（Metaethics），研究探討行為規範本身，比如研究行為抉擇的「對錯」、行為判斷為「好壞」究竟是指什麼，研究對象是規範倫理學採用的基本概念，並不涉及行為規範。由於規範本身的意涵必須藉由語言來傳達，因此後設倫理學也往往與語言哲學有密切關係。
                </p>
              </div>
              <div>
                <span className="font-semibold text-slate-700">6. 基督教倫理學與規範倫理學、後設倫理學</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  就規範倫理學而言，基督教倫理學研究不可避免需要討論到一般倫理學，因為雙方都有共同的研究對象——行為規範。就後設倫理學而言，基督教倫理學研究則需要了解建立在信仰價值觀的「好壞」與「善惡」究竟是什麼，具體而言，「上帝所喜悅」到底指的是什麼，而「上帝所厭惡」又是指什麼。然而在後設倫理學層面，基督教倫理學與一般倫理學還是有很大的差別，因為必須先認識上帝的性情，才能明白行為規範判斷的「好壞」與「善惡」究竟是指什麼，這就進入了系統神學的領域，可見基督教倫理學和系統神學有很大的交集。在德國神學傳統裡原就不分兩者，基督教倫理學並不是獨立的學門，乃是系統神學裡的一部分，只是其神學主題關連到行為規範。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">三、上帝的性情——公正與慈愛</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                基督教倫理學的重要起點就是上帝的性情——希伯來文<em>sedeq</em>或<em>sedaqa</em>——中文通常翻成「公義」，然而上帝的性情具有「公正」與「慈愛」兩方面無法分開的特質，意即既非沒有慈愛的公正，亦非沒有公正的慈愛，也就是公正中有慈愛，慈愛中有公正。由於中文的「公義」無法涵蓋「慈愛」，筆者建議把「上帝的性情」翻成「義」——避免排除了慈愛的涵義，<sup>8</sup><span style={cite}>（中文的「義」具有「公正、合宜」的意義，這與聖經的「義」確有交集，然而亦有不盡符合聖經原意處，比如指向行為準則的「仁義」，又如強調人情世故的「情義」。）</span>或者並用「公正」與「慈愛」。使用中文的「公義」時需要注意，這個詞彙的意義大多集中強調「公道正義——公正」，因此本書大多使用「公正」，但有些地方還是配合約定俗成的用法，以「公義」表示。
              </p>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 公正</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  舊約對「公正」的期待非常高，相信公正的上帝終將藉由審判伸張公道正義，從生前延伸至死後：「睡在塵埃中的，必有多人復醒。其中有得永生的，有受羞辱永遠被憎惡的。智慧人必發光，如同天上的光；那使多人歸義的，必發光如星，直到永永遠遠。」（但12:2-3）基督徒相信終極的公正在上帝手中，公正的上帝藉由最後審判伸張公道正義。然而，對公正的期待最直接表現在舊約律法（Torah），其中有許多對於各種關係公正的要求，而且但以理書十二章2～3節把對公正的期待從生前延伸到死後，明顯提到死人復活要面對上帝的最後審判，縱使是生前順利亨通的惡人，死後仍然要面對上帝公正的審判。
                </p>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-slate-700">2. 慈愛</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  一方面，羅馬書二章4節強調上帝的慈愛——「豐富的恩慈、寬容、忍耐」、「他的恩慈是領你悔改」；另一方面，羅馬書二章7至8節則強調上帝的公正——「凡恆心行善、尋求榮耀、尊貴和不能朽壞之福的，就以永生報應他們；惟有結黨、不順從真理、反順從不義的，就以忿怒、惱恨報應他們。」慈愛的上帝即是公正的上帝，賞賜義人、報應不義；反之，公正的上帝即是慈愛的上帝，具有豐富的恩慈、領人悔改。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  然而，上帝的性情兼有公正與慈愛，祂的公正是帶有慈愛的公正，而祂的慈愛則是帶有公正的慈愛，如詩篇一四五篇17節說：「耶和華在他一切所行的，無不公義（sedeq）；在他一切所做的都有慈愛（hesed）。」又如詩篇六十二篇12節說：「主啊，慈愛（hesed）也是屬乎你，因為你照著各人所行的報應他（指向「公正」）。」我們不可把上帝的慈愛與公正二分，若是公正裡沒有慈愛，一切評判只剩下鐵面無私、公事公辦，必定無法理解浪子比喻中的父親為何能毫不猶豫接納小兒子；而若慈愛裡沒有公正，卻會容易造成盲點、溺愛的偏差，這不同於上帝的慈愛具有照著各人所行報應的公正。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  詩篇三十三篇5節把上帝兩方面的性情都集中在一節經文裡：「他喜愛仁義（sedaqa）公平；遍地滿了耶和華的慈愛（hesed）。」上帝喜愛仁義公平，亦即喜愛公正，以致遍地滿了祂的慈愛，公正與慈愛有如同義詞，因為都是上帝的性情——公正中有慈愛，慈愛中有公正。到了新約耶穌基督的啟示把「慈愛」呈現得更加清楚，堅定不改變的愛是自我犧牲、忍受痛苦的愛，在耶穌基督的十架上彰顯出來。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  上帝的性情「義」也包含「慈愛」，這是由於為了顯明上帝的性情，上帝與以色列百姓立「約」（berith，相當於「承諾應許」）且信實守約，這約就是上帝單方面的應許、承諾，「信實」的希伯來文<em>emuna</em>原有「堅定穩固」之意，藉著信實守約呈現「堅定不改變的愛（hesed）」，中文較常譯為「慈愛」。<sup>9</sup><span style={cite}>（新標準修訂版聖經〔NRSV〕把hesed當作專有名詞翻成：steadfast love，新標點和合本大約用九個以上的詞來翻譯hesed，以致在閱讀中文聖經時經常無法辨識何者是hesed，表達上帝性情中的慈愛。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  因此，上帝的性情亦包括祂的慈愛，如詩人在詩篇三十一篇1節祈求耶和華上帝「憑祢的公義（sedaqa）搭救我」，同一首詩在第21節卻稱頌耶和華上帝「向我施展奇妙的慈愛（hesed）」，可見上帝的性情在公道正義之外，還有堅定不改變的慈愛。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  既然慈愛是「堅定不改變的愛」，這樣的愛也是一種願意自我犧牲、忍受痛苦的愛，如英國文學家路易斯所見，基督教信仰是有血有淚的信仰，連耶穌基督也為耶路撒冷不肯悔改哭泣、為拉撒路的死流淚。
                </p>
                <div className="border-l-4 border-emerald-300 bg-emerald-50 pl-4 py-3 mb-3">
                  <p className="text-emerald-800 leading-relaxed italic">
                    愛，真的是一件會受傷的事。不論愛什麼，你的心勢必絞痛乃至破碎。假若你想要保有一顆原封未動的心，你就不應把它交給任何人，連動物也不行。……不願選擇愛或者冒險去愛的話，就是選擇了地獄。在天國之外唯一能讓人徹底安全而免除一切愛所帶來的危險與不安之處，就只有地獄了。<sup>10</sup><span style={cite}>（C. S. Lewis, The Four Loves (N.Y.: Harcourt Brace Jovanovich, 1960), 169. 參魯易斯，《四種愛》，梁永安譯〔台北：立緒，1998〕，146-147。）</span>
                  </p>
                </div>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-slate-700">3. 公正中有慈愛，慈愛中有公正</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  由於上帝的性情兼有「公正」與「慈愛」，祂的公正是帶著慈愛的公正；從另外一個角度來看，上帝的慈愛則是帶著公正的慈愛。慈愛普遍為人性所歡迎，我們都希望別人以慈愛對待我們，儘管我們自己不一定能夠以慈愛對待別人。但公正卻不一定為人性所喜愛，儘管我們習慣要求別人要公正，但我們卻不喜歡別人以公正要求我們。上帝的慈愛伴隨著上帝的承諾應許而來，這愛維護上帝的應許與承諾，亦即維護上帝的公正，因此上帝的慈愛「不喜歡不義，只喜歡真理」（林前13:6），慈愛與公正連結，慈愛的上帝即是賞賜義人、報應不義的上帝；反之，公正的上帝即是具有豐富的恩慈、領人悔改的上帝。對人性而言，公正與慈愛經常互相排斥，很難理解何以上帝的公正是慈愛的，而祂的慈愛是公正的。愛是公正的，這對我們而言非常具有顛覆性，因為愛經常難與溺愛、寵愛區分，甚至可以犧牲公正而有偏愛。上帝的慈愛不只反向地不喜歡不義，而且也正向地只喜歡真理，亦即排除不義與非真理，並且追求義與真理。上帝的慈愛與公正連結，慈愛的上帝即是賞賜義人、報應不義的上帝；反之，公正的上帝即是具有豐富慈愛、原諒赦免罪人的上帝。
                </p>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-slate-700">4. 超越性與內蘊性</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  一般論及對上帝的認識時可分成兩類概念：超越性（transcendence）和內蘊性（immanence）。超越性指向上帝遠遠地超過受造者，內蘊性則呈現上帝內在於所造的宇宙萬物中。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  論及上帝的全能必須面對一個困難，由於全能必須兼顧超越的全能與內蘊的全能。若是強調上帝的超越，彷彿把上帝拉到遠離一切受造之處，不易呈現上帝臨到受造萬物的內蘊性；若是強調上帝的內蘊，呈現創造者上帝藉著護佑繼續管理而參與世界，始終內蘊於祂所創造的一切，就不易說明上帝的超越性。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  從倫理道德角度來看，公正的上帝有如太陽，「它從天這邊出來，繞到天那邊，沒有一物被隱藏不得它的熱氣」，<sup>11</sup><span style={cite}>（詩篇十九篇6節。）</span>呈現其超越性，祂的公正規範適用於所有人身上；慈愛的上帝則俯就地上萬物與人同住，彰顯其內蘊性，藉由參與受造者的歷史與生命呈現祂的慈愛。既然上帝的公正和慈愛不可二分，主張上帝的性情公正中有慈愛、慈愛中有公正，亦即主張上帝的超越性具有內蘊性，而其內蘊性具有超越性。「高高在上、明鏡高懸」描述上帝的公正與超越，「民胞物與、休戚與共」則描述上帝的內蘊與慈愛。<sup>12</sup><span style={cite}>（林鴻信，〈民胞物與、休戚與共〉，《基督教文化學刊》，2019/42，79-103。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  傳統神學常以受希臘哲學影響的「神聖實質」（Divine Substance）或「永恆當下」（Eternal Presence）之類的語言描述上帝，偏重超越性特質；自由神學則高度重視文化，甚至以人間文化為來自天上的啟示，偏重描述上帝性情的內蘊性。
                </p>
                <div className="mb-3">
                  <p className="font-semibold text-slate-700">▲傳統神學強調超越性</p>
                  <p className="text-gray-700 leading-relaxed mt-1">
                    奧古斯丁在希臘哲學影響之下，形容上帝處於永恆的現在——「永恆當下」，反觀人的生命則只存在於現在——當下這一剎那，然而這一剎那很快就會成為過去。過去的一切都已無法挽回，只存在於記憶而終將被遺忘；至於那尚未臨到的未來則充滿不確定，僅僅存在於盼望中。人的生命存在於被過去與未來擠壓之狹窄的當下，因此奧古斯丁想像上帝的超越在於永遠都如同現在那般真實。「永恆當下」突顯了上帝作為創造者與受造者的不同，強調上帝的超越性，不過卻難以呈現上帝的內蘊性，可能造成上帝的公正高過其慈愛的印象。
                  </p>
                </div>
                <div className="mb-3">
                  <p className="font-semibold text-slate-700">▲自由神學強調內蘊性</p>
                  <p className="text-gray-700 leading-relaxed mt-1">
                    十九世紀起源於德國的自由神學是一種重視文化的神學，甚至把文化直接視為來自神聖啟示，有如上帝一直居住在人間，這種神學呈現上帝的內蘊性，卻無法突顯上帝的超越性。當自由神學發展到極致時，往往失去神聖涵義而淪為人文主義，亦即「神」只不過是「人」的代稱而已，文化就是啟示，而「啟示」也只不過是「文化」的代稱。自由神學所呈現的畫面是一直與受造者在一起的上帝，似乎上帝並未超越受造的一切，也未能超越世界的法則，結果就傾向單方面強調上帝的慈愛，而不再重視上帝的公正。
                  </p>
                </div>
              </div>
              <div>
                <span className="font-semibold text-slate-700">5. 小結</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  基於人性的限制，我們經常有所偏好，若非偏向公正的一方，就是偏向慈愛的一方。如果偏向公正的話，往往比較刻薄而傾向律法主義（legalism），刻板印象中的法利賽人就是一例，律法主義主張重視律法條文形式，把守律法與否當作被上帝祝福或咒詛的條件，連帶地認為人的努力有多少，就能決定蒙受的福分有多少；如果偏向慈愛的話，則容易導致是非不分，比如常常聽到一句話：「我不想當壞人。」因堅持公正得罪人而做壞人，不如放棄公正，結果就是不願意當壞人而犧牲公正，這是在華人文化裡常見的現象。當對照聖經時，對於上帝的是非分明恐難以適應，為何只要有罪都必須獻祭？為什麼不可以選擇遺忘呢？重視人際關係的華人文化並不真正期許公正，而對慈愛非常歡迎。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  受到自由主義、人文主義大量影響的現代社會，其思潮走向也是比較偏重慈愛。由於重視乃至高抬人的價值，法院判決的趨勢漸漸忽略對公正的期待，卻不斷地提升慈愛的分量，比如法官經常以犯罪者具有可教化性而減免罪刑，反而把那些期待公正者視為追求「報復性正義」，認為那是傳統社會的特徵，看待那些期待法律判決公正的人具有野蠻的報復心態。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  這些趨勢影響所及，現代社會流行的人文主義價值觀愈來愈少重視公正。再就國際社會而言，列強角逐競技不停，許多國家根本沒有公正可言，唯獨重視利益，公正不斷被排擠到邊緣地帶。至於華人社會一向講究人情世故，原本就不太期待公正，於是當全面追求經濟發展時，公正被忽略得更快。現代社會以「文明」自詡，愈來愈避談公正（公義），甚至把公義污名化，認為那是野蠻的遺跡，以致在社會事件發生時，一面倒地關懷犯罪中加害者的權益，對於受害者的痛苦鮮少關心，甚至對於那些期待公義者嗤之以鼻。因此，媒體上常可見到是非對錯的界限一再模糊，僅僅高談闊論文明的「愛」，避談「野蠻遺跡」的公義，結果就是傾向一切價值都可相對化的相對主義。
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  不過，聖經所呈現的上帝卻是又公正又慈愛，上帝的公正是慈愛的，而上帝的慈愛是公正的。當一味強調公正，往往失之刻薄；而單單強調慈愛，常又是非不分。追求公正中有慈愛、慈愛中有公正，這不只是根據上帝性情做神學反思，而且是倫理道德判斷的重要規範。人信什麼樣的上帝就做什麼樣的倫理道德判斷；反之，人做什麼樣的倫理道德判斷，就反映信什麼樣的上帝。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">四、兩種基督教倫理學傳統</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                德國傳統和美國傳統對基督教倫理學的學科位置，看法不一。德國傳統把基督教倫理學視為系統神學的一部分，只不過是探討有關倫理道德的主題，因此倫理學不能脫離神學思想。美國傳統下的基督教倫理學已漸漸獨立於系統神學之外，強調科技整合、跨領域對談等來突顯研究倫理學的重要性。
              </p>
              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 德國傳統</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  基督教倫理學是系統神學其中一個部門，因為系統神學是有秩序、條理地研究探討各神學主題，基督教倫理學乃系統神學研究探討倫理道德相關主題的一部分，因此仍然屬於系統神學。這種觀點把教義主題和倫理道德主題整合在一起，優點是當論及倫理議題時仍然具有神學的整體觀點，缺點則是容易過度偏重教義而忽略知與行、理想與現實之間的差距。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  巴特在第二版《羅馬書釋義》裡主張：「純粹的倫理道德行為倚賴其最初本原，我們應當不顧浪漫主義的誘惑，堅稱上帝是上帝而人是人，如此這本原才能確保無虞。」<sup>13</sup><span style={cite}>（Karl Barth, The Epistle to the Romans (London: Oxford University Press, 1968), 432.）</span>巴特認為人的本原就是來自上帝，純粹的倫理道德行為應當從上帝而來。他在第一本《教會教義學》的序言裡說：「我把倫理學視為上帝誡命的教義，因此若把倫理學排除在教義學整體架構之外，或者寫一本沒有倫理學的教義學，我不認為那是正確的。」<sup>14</sup><span style={cite}>（CD, 1/1, xvi.）</span>可見他的教義學一定要涵蓋倫理學，這是德國傳統，也是他對基督教倫理學的期待。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  一般倫理學如義務論探討道義法則，目的論追求終極理想，效益論則想要達到多數人的最大幸福。相形之下，基督教倫理學則重視天人之際——上帝是上帝而人是人，這是倫理道德判斷的出發點，不論是道義法則、終極理想或最大幸福，都應當聚焦於從上帝啟示角度所見的觀點。
                </p>
              </div>
              <div>
                <span className="font-semibold text-slate-700">2. 美國傳統</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  美國傳統下的基督教倫理學已漸漸成為獨立於系統神學之外的部門，由於哲學倫理學的發展愈來愈龐大，導致基督教倫理學也有許多發展，加上許多倫理議題涉及多方不同學科的專業，有時連最基本的認識問題都需要相當複雜的研究，比如論及器官移植、幹細胞、複製生命等議題時，需要專業判斷協助找出倫理道德判斷的重點，因此基督教倫理學不斷尋求科技整合，逐漸獨立成為一個學門。這種研究方式的優點是尊重專業而有更多元的對話，重視認清議題的事實真相；缺點則是受到過多專業研究的影響，連帶地造成基督教信仰價值觀移動，甚至可能偏離神學研究的本意，往往會遺忘巴特所說的「最初本原」。有些基督教倫理學家在探討一些議題時，唯有運用哲學倫理思考及科技專業思考，卻無法令人見到其「基督教倫理思考的成分」。如果不是從基督教信仰出發，那麼所謂的基督教倫理學就與一般倫理學沒有分別了。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">五、道德與信仰的分際——與康德對話</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                長期以來，康德（I. Kant, 1724-1804）特別受到中國學者的重視，主要原因在於他是西方哲學家中格外重視倫理道德的一位，他徹底追求純淨道德的用心非常少見。在西方基督教文化背景下成長的康德，深受基督教價值觀薰陶，他主張「有兩樣東西，愈是經常而持久地對它們進行反覆思考，它們就愈是使心靈充滿常新而日益增長的驚讚和敬畏」<sup>15</sup><span style={cite}>（康德，《實踐理性批判》，於：《康德著作全集》，第5卷，李秋零主編〔北京：中國人民大學出版社，2007〕，169。）</span>：
              </p>
              <div className="border-l-4 border-emerald-300 bg-emerald-50 pl-4 py-3 mb-3">
                <p className="text-emerald-800 leading-relaxed italic">
                  我頭上有滿天星空，我心裡有道德誡命。<sup>16</sup><span style={cite}>（譯自 Immanuel Kant, Kant Werke, vol.6, 300: Der bestirnte Himmel über mir, und das moralische Gesetz in mir.）</span>
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                前者藉由感官的引領，純粹的理性整合出豐富無比的知識，然而自然世界只帶來偶然的連結；後者則展現無限的道德世界，使人經歷到人格性，且帶來無限和必然的連結。<sup>17</sup><span style={cite}>（康德，《實踐理性批判》，於：《康德著作全集》，第5卷，169-170。）</span>康德說：「道德法則向我啟示了一種不依賴於動物性，甚至不依賴於整個感官世界的生活。」<sup>18</sup><span style={cite}>（康德，《實踐理性批判》，於：《康德著作全集》，第5卷，170。）</span>然而，康德也哀嘆人們探討兩個世界的誤用，從以知性探討感官所見的壯麗景象開始，而止於占星學，從發展培養高尚的道德開始，而止於狂熱或迷信。<sup>19</sup><span style={cite}>（康德，《實踐理性批判》，於：《康德著作全集》，第5卷，170。）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在基督教強烈期待公義的背景下，經過長久的思考，康德提出三大公設作為道德思考的基礎，亦即倫理道德判斷的基礎。這三個公設是不能證明的，有如幾何的公理。公設是一切後續思考的基礎，基礎是不能再有其他基礎的，若非如此的話，原先的基礎就不是基礎了。接受作為基礎的公設，就進入道德的思維。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                康德自問「我為什麼要作一個道德的人」，他的回答是道德建立在三個不容置疑的公設：<sup>20</sup><span style={cite}>（康德，《實踐理性批判》，於：《康德著作全集》，第5卷，114-141。）</span>
              </p>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 靈魂不朽</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  由於在今世好人不一定得好報，壞人也不一定遭惡報，因此藉由靈魂在人死後繼續存留直到最終審判，人在世上所行的一切也將持續到永遠，終究必須面對自己所做的一切。「善有善報，惡有惡報」是一般人的期待，可是許多情況並非如此，更常是「善無善報，惡無惡報」，因此有人說，「不是不報，時候未到」，但那「時候」究竟是指何時呢？康德主張靈魂不朽的公設，靈魂會在人死後延續下去直到最終審判，人必須面對所做的一切，這背後就是上帝做最後評斷的公義概念。康德是哲學家，他抽離其論述中帶有基督教信仰的宗教性部分，僅存思想形式，形成靈魂不朽的公設，主張今生只是全部生命的一部分，今生行善或作惡終究必須面對最終審判，因此必須作一個道德的人。
                </p>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-slate-700">2. 自由意志</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  這公設主張人有自由意志來選擇自己的決定，不論是行善或是為惡，皆出於自由的抉擇，基於意志的自由。人必須為自己的倫理道德抉擇負責，除了決定者之外別無他者必須負責，因此人並沒有任何推諉的可能。由於人是自由的，必須對道德抉擇負責，並且面對善惡的最終審判，因此必須作一個道德的人。
                </p>
              </div>
              <div className="mb-3">
                <span className="font-semibold text-slate-700">3. 上帝存在</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  因為上帝存在，所以人必須面對公義的終極審判，也正是因有上帝存在，而有道德義務之必要。上帝存在保證了善惡的最終結局，而有道德義務之必要，上帝的公義成為道德義務的基礎，因此人必須作一個道德的人。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  這三大公設不是出於理性思考，乃是源自基督教信念的公設，基於這三大公設，道德實踐有其必然性，其中第一與第三公設涉及上帝公義的性情，第二公設則關係到上帝給予人自由選擇行善或為惡，比如上帝在伊甸園裡禁止人吃分別善惡樹上的果子，卻給予人遵行與否的自由，並未設下障礙阻止人食用。<sup>21</sup><span style={cite}>（創世記二章16～17節：「耶和華上帝吩咐他說：『園中各樣樹上的果子，你可以隨意吃，只是分別善惡樹上的果子，你不可吃，因為你吃的日子必定死！』」）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  康德心目中理想的宗教與三大公設吻合，宗教信仰有如三大公設支撐了道德實踐，他從此一角度出發論及宗教的可能性和必要性，由此可見造物主的公義特質在基督教文化裡是如何深入人心。
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-3">
                仔細觀察這三大公設，會發現第一公設和第三公設直接與基督教信仰有關，靈魂不朽的公設主張人最終要面對上帝，上帝存在的公設則保證了善惡的最終區隔，這都與上帝的公義有關。第二公設表面看似沒有宗教性，只是陳述自由意志的事實，然而作為信仰者必定體會到，自由意志並非全然出於人的主導，從信仰角度來看，自由意志是上帝的禮物，人的自由意志來自上帝的寬容、退讓，上帝的自我設限讓人有自由意志的空間。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                康德對宗教與道德的關係偏向道德的一方，以論述道德為中心，因此他的哲學思想造成一個效應——宗教信仰只是為了道德實踐而存在。這三個公設建構了道德的必要性，並且發展出義務論。不過康德的論述對基督教信仰者卻有重要的提醒：道德是為了道德而道德，道德千萬不可再添加其他成分。比如，一般人教導小孩時，經常提到要聽從父母，不然就挨打，他認為這種教導並不道德，因為小孩只是學到害怕挨打而聽從父母；又如，教導小孩不可說謊，理由是將來沒有人要與說謊的人做生意，只有誠實的人才能賺大錢，他認為這種教育都是運用利益引誘，使用不道德的手段。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                運用懲罰的手段教導小孩，並非在教導道德，反而引起害怕而摧毀道德感；運用利益的吸引力教導小孩，亦非道德，然而「書中自有黃金屋、顏如玉」這類教導的方式卻隨處可見，經常扭曲了道德。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                康德對道德的期待非常純淨，因此他對宗教信仰者提出警告與提醒，如果人做道德判斷時只想到擔心上帝懲罰，這絕非道德。從康德對純粹道德的要求衍生出對純粹宗教信仰的期待，這令人聯想到許多教條式講道，把上帝模擬成一位無所不在、嚴厲無比的老師傅，身邊常備有一條鞭子準備打壞人，康德認為這樣的信仰教導摧毀了道德的純淨性。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                值得注意的是，在康德三個公設裡對「公義」的高度期待：「靈魂不朽」對應善有善報、惡有惡報的期盼；「自由意志」對應人們應當為自己的所作所為負責；「上帝存在」則對應於以終極審判彰顯公義。這在東方社會並不多見，在華人文化裡尤其薄弱，歷史上人們對公義的期待從來沒有達到如此高度，針對任何歷史上的冤屈總是選擇遺忘，人心或多或少還會期待善有善報、惡有惡報，但在現實生活中卻多半對公義的理想毫不奢求。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                華人文化在意的是千萬不要得罪人，以追求人際關係和諧為行為的最高規範，康德對道德的態度嚴謹卻建立在公義上帝審判的基礎——千萬不要得罪上帝。箴言十章8節說：「心中智慧的，必受命令；口裡愚妄的，必致傾倒。」箴言十章10節也說：「以眼傳神的，使人憂患；口裡愚妄的，必致傾倒。」其中「口裡愚妄的，必致傾倒」在兩處經文的希伯來文一樣，但箴言十章10節在七十士譯本裡卻譯為：「坦白勸責人的締造和平。」如果按照七十士譯本，意思就是「不直接當面勸誡，反倒在背後搬弄是非的人會造成傷害；當面勸誡的，反而帶來和平」，<sup>22</sup><span style={cite}>（參見：柯德納〔Derek Kidner〕，《丁道爾舊約聖經註釋：箴言》，潘秋松譯〔台北：校園，1995〕，97-98。）</span>這對華人文化是何等重要的提醒！
              </p>
              <p className="text-gray-700 leading-relaxed">
                康德的道德哲學吸引了許多中國知識分子，然而其中有許多人並不了解康德的思想起源於基督教信仰深耕的西方文化背景；只是康德把宗教信仰當作是為了道德實踐而存在，基督教倫理學卻以宗教信仰為道德實踐的根源。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">六、總結：倫理道德與宗教信仰</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                倫理道德與宗教信仰的關係非常緊密，前者是後者的實踐，後者則是前者的基礎。宗教信仰與倫理道德看似座落兩端，其實兩者有很大的交集：舉凡宗教信仰都有其倫理道德的主張，畢竟全無倫理道德主張的宗教信仰讓人難以想像；然而一切倫理道德的基本信念及預設往往與宗教信仰有關，倘若倫理道德沒有如同宗教信仰般的信念及預設，這恐怕也是讓人難以想像。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                因此，關鍵抉擇在於究竟是以信仰為起點來走向道德，如一般常見實踐其信仰的「宗教人」，亦或以道德為起點來走向信仰，有如懷抱宗教情懷的「道德人」。其實這兩者可能形成一個循環關係：從信仰走向道德，再從道德走向信仰，其後又從信仰走向道德，又再從道德走向信仰，以此類推。<sup>23</sup><span style={cite}>（林鴻信，《基督宗教與東亞儒學的對話：以信仰與道德的分際為中心》〔台北：台大出版中心，2009〕，171-172。）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                中國傳統觀點的天人感應指向一種交互感應，既由天到人，亦由人到天，因此當代新儒家哲學家劉述先教授就曾指出，基督教與儒家傳統之不同——「必須由上帝到耶穌基督到人，彰顯的是上帝的榮光，神子的慈愛，與人的悔改，而不容許逆轉過來。」<sup>24</sup><span style={cite}>（劉述先，〈基督宗教的人觀與我觀對華人的意義〉，《基督宗教之人觀與罪觀——兼論對華人文化的意義》，林鴻信編〔台北：台大出版中心，2013〕，9。）</span>簡而言之，基督教只有由天到人，沒有由人到天。其實基督教信仰是容許做出逆轉的，由人的悔改開始，歷經神子的慈愛，突顯上帝的榮光，亦即由人到天，不過在這「由人到天」裡必須強調其「人」乃「從天到人之人」，因此「由人到天」乃是「由從天到人之人到天」，既由天到人而又由人到天，就會由人到天而又由天到人，不斷迴轉下去。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                基督教信仰的主張可用兩個齒輪的互動來說明，由這個齒輪的轉動帶動那個齒輪，當轉動起來時，動力會彼此傳播，同時也呈現由那個齒輪帶動這個齒輪的畫面。然而，當兩個齒輪還是有大小之分時，自然是以大齒輪帶動小齒輪為主軸，即使呈現由小齒輪帶動大齒輪的畫面，也必定是由大齒輪賦予小齒輪動力，才有此動能。這即是說，基督教信仰主張「由天到人而由人到天」與「由人到天而由天到人」的循環，同時主張「人小天大」而非「人大天小」或「天人同大」。<sup>25</sup><span style={cite}>（林鴻信，〈從基督宗教「天」的概念看人文精神——與東亞儒學對話芻議〉，《跨文化視野中的人文精神》，林鴻信編〔台北：台大出版中心，2011〕，267。）</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                互相牽動的循環關係，畢竟還是有主動力與附屬動力之分，基督教倫理學就是以基督教信仰為主動力，而以這信仰所發出的道德訴求為附屬動力，當主動力帶動附屬動力，附屬動力又回饋到主動力時，就形成一個正向循環，兩者看來彼此牽動，難以分辨孰先孰後。由此觀之，基督徒既為宗教人，又為道德人，其信仰藉由道德行為呈現，而其德行又因信仰動力流露，宗教信仰與道德行為互相加成，不過追根究柢，宗教信仰才是真正的主動力。
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
                '神意與人意的分辨：倫理道德判斷首先要區分「神意」與「人意」。路德認為人的意志如同一頭牲畜，無法自主，必須在神意與邪惡之間被驅使；加爾文則主張蒙恩之人的意志應完全交託於神意，成為上帝引導的工具。',
                '基督教倫理學以上帝旨意為倫理道德思考的中心，思考根據來自「以聖經為主、傳統為輔」，與系統神學沒有本質差別，只是聚焦於行為規範這一塊。',
                '上帝的性情是公正與慈愛不可分割的整體——公正中有慈愛，慈愛中有公正；偏重公正易流於律法主義的刻薄，偏重慈愛則易導致是非不分。',
                '不同傳統的定位：德國傳統（如巴特）認為基督教倫理學是系統神學的一部分，不能脫離教義學；美國部分神學傳統則傾向將基督教倫理學視為較獨立的研究領域，並重視與科技、醫學及社會科學等跨領域對話。',
                '康德提出靈魂不朽、自由意志、上帝存在三大道德公設，這些公設雖源自基督教信念，卻把宗教信仰定位為「為道德實踐而存在」，與基督教倫理學「以信仰為道德根源」的立場方向相反。',
                '倫理道德與宗教信仰形成一個正向循環關係，兩者互相牽動、難分先後，但追根究柢，宗教信仰才是真正的主動力，道德是信仰的附屬動力與具體實踐。',
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
              <h4 className="font-semibold text-gray-800 mb-2">路德與加爾文對「人意」看法的差異，反映了怎樣的神學傳統分歧？</h4>
              <p className="text-gray-700 leading-relaxed">
                路德在《意志的捆綁》（The Bondage of the Will）中否定人意的獨立空間，某種程度延續奧古斯丁對墮落後人性全然敗壞的強調；加爾文雖同樣主張人無法靠自己行善，卻用「空的容器被充滿寶物」這個較溫和的意象，保留了人在恩典中「同工」的空間。這個差異日後在改革宗與路德宗之間、以及後世關於「恩典與自由意志」的辯論中持續發酵，讀者可以留意，林鴻信在本書採用的「神意／人意／邪惡」三重交集圖示，其實是嘗試在這兩種傳統之間找到一個整合性的圖像表達。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">康德的三大道德公設，對今日護教與跨文化對話有何參考價值？</h4>
              <p className="text-gray-700 leading-relaxed">
                林鴻信指出康德的道德哲學深受基督教文化薰陶，卻把宗教信仰「工具化」為道德實踐的支撐工具，這提醒我們：許多深受中國知識分子推崇的西方「純粹理性」思想，其實植根於特定的信仰文化土壤，未必是真正「文化中立」的普世理性。這對今日基督教與其他思想體系對話時具有參考價值——與其迴避討論思想背後的信仰根源，不如誠實指出這層關聯，反而能幫助對話雙方更準確地理解彼此立場的來龍去脈。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「公正與慈愛何者優先」的張力，在教牧輔導與教會紀律實務中如何具體展現？</h4>
              <p className="text-gray-700 leading-relaxed">
                本章提到的「偏向公正流於律法主義」「偏向慈愛導致是非不分」，在教會實際處理會友的道德失敗（如婚外情、財務不誠實）時經常成為真實的張力：過度強調紀律與悔改程序，可能讓當事人感覺不被接納；過度強調饒恕包容，卻可能忽略對受害者的公道、也可能讓罪的嚴重性被輕描淡寫。健康的教牧實踐，或許正是本章所主張「公正中有慈愛、慈愛中有公正」的具體操練——既不迴避指出問題的嚴重性，也不讓紀律程序取代對人真實的關懷與盼望恢復的心。
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
              '回顧你過去做重大倫理抉擇的經驗，你認為當時的「人意」比較接近「神意」還是「邪惡」？是什麼因素決定了這個傾向？',
              '你自己對上帝的認識，是否比較偏重「公正」或「慈愛」的一面？這樣的偏重如何影響你看待自己和他人的失敗？',
              '本章提到「人信什麼樣的上帝，就做什麼樣的倫理道德判斷」，你認為自己目前的道德判斷，反映出你信的是一位怎樣的上帝？',
              '康德認為若道德動機摻雜「怕受罰」或「圖利益」，就不是真正的道德。你如何看待這個標準？華人文化中常見的教養方式，是否也有類似的挑戰？',
              '面對「宗教信仰與倫理道德究竟何者優先」的問題，你觀察自己身邊的信仰群體，是傾向「先信仰後道德」還是「先道德後信仰」？這帶來什麼樣的實際差異？',
              '本章用兩個齒輪比喻信仰與道德「主動力與附屬動力」的關係。在你自己的信仰實踐中，你是否曾把道德實踐（附屬動力）誤當作信仰本身（主動力）？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 查考「公正與慈愛」的經文組合</h4>
              <p className="text-gray-700 mb-2">找時間讀完詩篇一四五篇17節、六十二篇12節、三十三篇5節，以及羅馬書二章4、7-8節，親自比較「公正」與「慈愛」在這些經文中如何並存，寫下你的體會。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🪞 檢視自己的倫理判斷模式</h4>
              <p className="text-gray-700 mb-2">
                回想最近一次涉及是非對錯的判斷或決定，誠實寫下：這個判斷更接近「以規條為準」，還是「以人情為準」？試著用「公正中有慈愛、慈愛中有公正」重新檢視這個判斷。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💬 與人討論「道德動機」的純淨度</h4>
              <p className="text-gray-700 mb-2">
                找一位信任的同伴，討論康德「道德不應摻雜恐懼或利益」的觀點，一起檢視你們教養下一代或彼此勸誡時，是否也曾不自覺地使用「怕受罰」「求利益」作為道德教導的手段。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「上帝啊，求祢幫助我認識祢公正中有慈愛、慈愛中有公正的性情，不讓我偏執於律法主義的刻薄，也不讓我陷入是非不分的縱容。求祢使我的倫理道德判斷，真實地從認識祢、順從祢的心意而來，而不是出於恐懼或利益。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
