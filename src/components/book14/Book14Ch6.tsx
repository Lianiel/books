import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Search, HelpCircle, Check } from 'lucide-react';

export default function Book14Ch6() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    exploration: true,
    questions: true,
    practice: true
  });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">第6章</h1>
        <h2 className="text-xl font-semibold text-gray-700">聖靈的路徑：靈恩生活</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>

        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <p className="text-gray-700 leading-relaxed mb-3">在我們研究與聖靈同行對我們今天有什麼含意的同時，我們必須仔細檢視一下靈恩運動，因為他自稱是目前聖靈在教會裡及透過教會工作的主要管道，甚至或許是唯一主要管道。還不到二十多年的歷史，靈恩運動已自誇擁有二千萬以上的信眾，而且觸及全世界各教會——羅馬天主教會、正統教會、聖公會和非主教制的抗辯宗教會——在生命及人事上的所有層面，並誇越了廣闊的神學領域。有時候，他被稱為新五旬節派（Neo－Pentecostalism），因為即如本世紀初橫掃全球的舊五旬節派一樣，他確定聖靈的洗是人悔改和受水禮後的獨特經驗，是人人都需要的，也是凡尋求這經驗的人都可獲得的。然而，五旬宗教會逐漸對此運動的大融和態度深表懷疑（在某些地區這情況仍舊不變），於是，這運動便從五旬節派中分出來獨立發展，今天，他另外稱為靈恩更新（charismaticrenewal）。因為他看自己已重新復蘇那長久遺失了聖靈職事或聖靈恩賜的世界，並且無可測度地深化個別基督徒的屬靈生命，藉此使整個基督教界漸漸變得活潑有力。於是，隨著靈恩運動的勢力不斷擴張，世界各地的靈恩深信眾都屏息以待，期望教會勢將發生重大的事情。</p>
            <p className="text-gray-700 leading-relaxed mb-3">靈恩運動的代言人已率先宣告這運動會帶來普世合一意義。「此運動是今天基督教界裡最合一的運動，」米高·哈伯（ Michael Harper）寫道：「惟獨在這個運動中，所有宗派彙聚，所有事工都被接納和實踐。」1 這個宣告是真的。已有不少人埋怨傳統教會的合一力量逐漸衰微；但超宗派的靈恩團契，加上國際性的領導及隨之而來的聯繫性組織，的確使教會的合一力量愈來愈強大。</p>
            <p className="text-gray-700 leading-relaxed mb-3">在合一方面來看，靈恩運動所採取的方法是獨特的：他首先在基督裡體驗合一，並在慶典中和事工上，尋求合一，並且確信隨之而來的，是信徒在神學觀念上漸趨一致。「這種開放的立場，」喬比度（ Richard Quebedeaux）寫道：「就是相信在同一經歷之後，聖靈會帶領人進入神學真理中（而不是必須先認識這真理，然後才有相同經驗）。這觀點已明顯在整個新五旬節派裡愈來愈影響廣遠；這也是福音派、自由派和羅馬天主教會能夠「在這運動裡」首次聯合起來（至少在屬靈上如此）的原因之一。」 2 雖然在每一主流宗派中，靈恩派信徒相對來說是少數的一群，但這運動所結聚的影響力相當龐大，似乎未來還會有增無減。</p>
            <p className="text-gray-700 leading-relaxed mb-3">在靈恩更新運動開始前，紐碧堅（ Lesslie Newbigin）於一九五三年把抗辯宗和天主教對教會的觀點分別定型為「忠信的會眾。與「基督的身體」，進而形容五旬宗教會的基督教是真實基督徒覺醒的第三道主流，所持守的觀點是以教會為「聖靈的群體」。他說，目前實在需要這第三道主流來為前兩個觀點灌溉及施肥。他以問題形式帶出他的重點：「天主教和抗辯宗的大教會是否需要謙卑下來，接受五旬節派不同團體的弟兄「對聖靈一種新的理解」，打破從前的界限，與他們建立團契？」3 在二十多年後的今天，當我們綜覽靈恩更新運動蔓延的現象時，紐碧堅的問題仍叫人產生壓迫感，而且受到廣泛應用。</p>
            <p className="text-gray-700 leading-relaxed mb-3">靈恩更新運動對羅馬天主教和福音派信徒帶來最大的衝擊。前者經過初初狼吞虎嚥及雜亂無章地吸收靈恩派的信念後，接受了他們所強調的是從神而來的，現在已沒有太大困難去把他們消化。但對福音派信徒來說，這運動帶來一些主要的張力，二十多年來仍舊沒有減退。今天在福音派信徒當中，十大疑難的其中一條就是應該贊成或反對靈恩運動。這是一條惡劣的、造成分裂的、分党的、哥林多教會式的問題。我通常會說我是贊同聖靈的，來回避這個問題。可是，為什麼人們經常如此焦急地發出這個問題呢？答案是：在本世紀初從古老的衛斯理傳統中冒起的靈恩運動——五旬宗的過繼子—— 就好像歷史上的福音主義，面對與自己不同的觀點，就立刻感到是威脅和挑戰。只有那些基本信念相同的人，才會直接發生衝突。</p>
            <p className="text-gray-700 leading-relaxed mb-3">具體一點來說：在今天大部分抗辯宗宗派裡扮演少數派角色的福音信仰運動，是以忠於神啟示的真理，及渴望看見這真理能改革及更新這些宗派，從而改進整個基督教世界為他的中心的。靈恩運動頌揚聖靈在基督徒經驗方面的職事——正如我們已看過，這是真正的福音信仰主題——，但卻沒有為純正的教義爭戰，反而相信透過分享感受和表達，自會產生團結的力量。福音信仰運動呼召人歸向耶穌基督，並且尋求一種理性的、自律的敬虔作為信徒的根基。靈息運動則呼召人將生命向聖靈敞開，並使他們期望與神相交時，會有非理性和超理性的經歷。經過多個世紀以來的爭論，福音信仰神學被磨得鋒利，變得精確，反映出一個信念，就是真理若有缺欠，生命也就出現問題。相比之下，靈恩派神學看來是鬆散、反復無常和天真的，並且這運動對五花八門的神學（尤其是那些以借著禱告領受「預言」來作為依據的神學）所採取的寬容態度似乎暗示他持守聖經真理的基礎實在太脆弱了。</p>
            <p className="text-gray-700 leading-relaxed mb-3">可是，對於一些已假設是福音信仰的特徵，諸如信心與悔改，對主耶穌基督——寬恕和拯救我們的主——的愛，被聖靈能力改變的生命，借著聖經從神那裡認識神，勇敢、充滿期待、親密而自由的禱告，小組事工，喜歡歌唱等，無論福音派或靈恩派都明顯是一致的。這兩個運動事實上是兩個重迭的圓圈。許多福音派信徒表明自己屬靈恩派；亦有許多靈恩派信徒表示自己是福音派的。儘管靈恩運動容納了一些持守非福音信仰的信徒，在歷史上和他現時流行的形式上，他看來就像福音信仰主義同父異母的姊妹；這解釋了為什麼靈恩更新運動的現象引起福音派自覺的反應，有時看來有點像手足相爭！</p>
            <p className="text-gray-700 leading-relaxed mb-3">可是，這還未是整個故事。真正的神學分歧是存在的，而彼此的爭辯可以是尖銳的。所以，有些福音派信徒認為追求悔改後聖靈的洗，以及那些隨著使徒職事而來的「表記恩賜」（sign gifts）——如講方言、翻方言、醫治的恩賜、行神跡的信心、透過異象、異夢，以及內在的印象直接從神領受預言</p>
            <p className="text-gray-700 leading-relaxed mb-3">——都是聖經斬釘截鐵地否定的，他們亦把靈恩派信徒所尋找和獲得的這些恩賜，設想為從撒但而來，為要加害他們的，而不是神為他們的益處而賜下的。其他福音派信徒認為靈恩經驗，用傳統的靈恩派神學字眼來說，至少真是聖經上敬虔的轉化，即使不是所有人都需要，他對一部分人來說仍是有效的。有些福音派信徒重視他們那充滿敬拜情緒、非形式化、熱切而熱情洋溢的靈恩精神，卻又同時拒絕靈恩神學的一些特徵，將聖靈的洗及表記恩賜等現象視為眾人期望和群眾壓力下的心理作用。在這些闡釋靈恩經驗的福音派信徒當中，有些人將靈恩經驗裡神恩惠的真實減至最低，也有人將他擴至最大。至於靈恩派信徒，則看見他們今天實有需要堅持復興那些表記恩賜，以及堅持聖靈的洗是必需的，也責難非靈恩派團體熄滅聖靈的感動，因為他們沒有尋求他們本有權利去尋求的恩賜。雖然大多數靈恩派信徒都宣稱活在平安裡是他們的理想，但他們並不常常活出這個理想。</p>
            <p className="text-gray-700 leading-relaxed mb-3">同時，教會亦曾有慘痛的經歷。靈恩運動經常以對抗教會的形式主義、唯智主義、制度主義等的反動形式（有時是合理的）入侵教會，又主張一種自由奔放的經驗主義。這種如鐘擺的表現，自然會同時贏得信徒，又產生分裂；那些飽經挫折的反動都經常如此。許多教會出現分裂，是因為靈恩派信徒脫離教會獨立，或是把其他人趕出教會——這兩種情況都似乎是憑著清白的良心的。在另一些教會裡，存在著靈恩派系，他們低調地不斷推行他們的計畫，希望假以時日可以反過來成為教會主導。一些意氣風發的人常說每一個真正有生命的基督徒都會講方言，而且今天惟獨靈恩派信徒纔可以為神成就大事，非靈恩派的信徒是不及標準的；而基督徒缺乏靈恩經驗的唯一解釋，就是由於他們的無知或不願意，以致他們未能尋求這種經驗。抱這些觀念的人，自然不容易與一般會眾融和，無怪乎那些努力嘗試勸導兩批信徒相容的牧者都弄到焦頭爛額而被迫放棄，而且淡然對待那招致這些思想的靈恩運動。</p>
            <p className="text-gray-700 leading-relaxed mb-3">可是，倘若我們要公平地評價靈恩更新運動，並看清楚神的靈在這運動中作了什麼，我們必須嘗試從自己記憶裡不論是好或壞的過去經驗中抽離；否則，我們很容易傾向單從這些經驗來概括一切，那麼所持的論據便過於狹小了。幾年前，我曾經刊登一篇有關靈恩更新運動的文章，後來有個人寄了幾封信給我，告訴我他知悉兩個靈恩派的牧師如何拋棄妻子，與詩班指揮私奔；他要求我同意一個綜合概論，就是所有靈恩派牧師都是如此行為不檢的，但當他知道我不能這樣做時，他顯然很不高興。一竹篙不能夠打一船人，兩個壞蛋牧師也不能表明什麼行為模式。我與靈恩派信徒相交的經驗差不多全是好的，然而我也不該單從這些經驗來作出推論。為了真正明白靈恩運動，我會儘量廣撒我的魚網。</p>
            <p className="text-gray-700 leading-relaxed mb-3">究竟這超宗派及跨越傳統的運動有什麼特殊信念呢？</p>
            <p className="text-gray-700 leading-relaxed mb-3">首先要指出的是，在教會的教條及信條上，靈恩派沒有什麼特色可言。他們看來與原初的神學無異，不單呼召教會重拾早期使徒的經驗，而且回到超自然信仰的「老路」去。他們所持守有關三位一體、道成肉身、救贖的客觀意義、聖經的神聖權威等神學見解都「正確可信」（雖然有時未免流於膚淺），他們也傳統地看基督教，把基督教看為是關乎敗壞、救贖和重生的。然而神學反省並沒有啟發他們；他們知道這不是他們的運動所真正熱衷的東西。他們對聖經的闡釋簡單到近乎幼稚，似乎很少人知道或關心到在他們當中正建構著不同的靈恩經驗神學。在他們的宗派裡，對於承襲的傳統，不論是教義上或靈修方面的，他們所關心的不是對這些傳統加以反省，而是重新賦予他們生氣；於是羅馬天主教徒以重燃的熱情去望彌撒，向童貞女馬利亞祈求（他們視馬利亞為靈恩運動的先鋒）和使用念珠祈禱，而聖公會信徒又興高采烈地發現克藍麥禮拜儀文（ Cranmer’s liturgy；編者注：克藍麥，1489 —1556，聖坎特布裡郡首任抗辯宗大主教，多方促進改教運動，脫離羅馬天主教獨立；反對抗辯宗或天主教極端的見解。）現在對他們來說是奇妙地活生生的。（「當中每一個字都閃耀光芒，」一個中年的靈恩派信徒曾經這樣對我說。）</p>
            <p className="text-gray-700 leading-relaxed mb-3">一般來說，撇開那些離心的極端狂熱分子不談（靈恩更新運動就像其他在這個墮落世界中的活躍運動一樣，遲早都會產生這類人），靈恩派信徒是一群忠心的宗派主義者，他們以教會所宣講的為起點，獻上他們的思想、禱告和精力去復蘇教會的事工，同時透過更新的經驗，表達出靈恩派的特徵來。這些特徵共有五個，雖然各個特徵在著重點、複雜程度和靈活性上，都大不相同，並且根據不同人的說法，配合不同的神學系統，但他們聯合起來，就廣義地成為全世界靈恩更新運動思想上的支柱。五個特徵如下：</p>
            <p className="text-gray-700 leading-relaxed mb-3">1．信主後另一次更豐盛的屬靈經驗</p>
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

          </div>
        )}
      </div>
    </div>
  );
}
