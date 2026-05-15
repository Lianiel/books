import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp, Users } from 'lucide-react';

export default function Book14Ch6() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ sec0: true });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          第6章
        </h1>
        <h2 className="text-xl font-semibold text-gray-700">聖靈的路徑：靈恩生活</h2>
      </div>

      <div className="mb-4 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => toggleSection('sec0')}
          className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800 text-left text-sm">第1部分</span>
          </div>
          {expanded['sec0'] ? <ChevronUp className="w-4 h-4 text-gray-500 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />}
        </button>
        {expanded['sec0'] && (
          <div className="p-5 bg-white">
              <p className="text-gray-700 leading-relaxed mb-3">在我們研究與聖靈同行對我們今天有什麼含意的同時，我們必須仔細檢視一下靈恩運動，因為他自稱是目前聖靈在教會裡及透過教會工作的主要管道，甚至或許是唯一主要管道。還不到二十多年的歷史，靈恩運動已自誇擁有二千萬以上的信眾，而且觸及全世界各教會——羅馬天主教會、正統教會、聖公會和非主教制的抗辯宗教會——在生命及人事上的所有層面，並誇越了廣闊的神學領域。有時候，他被稱為新五旬節派（Neo－Pentecostalism），因為即如本世紀初橫掃全球的舊五旬節派一樣，他確定聖靈的洗是人悔改和受水禮後的獨特經驗，是人人都需要的，也是凡尋求這經驗的人都可獲得的。然而，五旬宗教會逐漸對此運動的大融和態度深表懷疑（在某些地區這情況仍舊不變），於是，這運動便從五旬節派中分出來獨立發展，今天，他另外稱為靈恩更新（charismaticrenewal）。因為他看自己已重新復蘇那長久遺失了聖靈職事或聖靈恩賜的世界，並且無可測度地深化個別基督徒的屬靈生命，藉此使整個基督教界漸漸變得活潑有力。於是，隨著靈恩運動的勢力不斷擴張，世界各地的靈恩深信眾都屏息以待，期望教會勢將發生重大的事情。</p>
              <p className="text-gray-700 leading-relaxed mb-3">靈恩運動的代言人已率先宣告這運動會帶來普世合一意義。「此運動是今天基督教界裡最合一的運動，」米高·哈伯（ Michael Harper）寫道：「惟獨在這個運動中，所有宗派彙聚，所有事工都被接納和實踐。」1 這個宣告是真的。已有不少人埋怨傳統教會的合一力量逐漸衰微；但超宗派的靈恩團契，加上國際性的領導及隨之而來的聯繫性組織，的確使教會的合一力量愈來愈強大。</p>
              <p className="text-gray-700 leading-relaxed mb-3">在合一方面來看，靈恩運動所採取的方法是獨特的：他首先在基督裡體驗合一，並在慶典中和事工上，尋求合一，並且確信隨之而來的，是信徒在神學觀念上漸趨一致。「這種開放的立場，」喬比度（ Richard Quebedeaux）寫道：「就是相信在同一經歷之後，聖靈會帶領人進入神學真理中（而不是必須先認識這真理，然後才有相同經驗）。這觀點已明顯在整個新五旬節派裡愈來愈影響廣遠；這也是福音派、自由派和羅馬天主教會能夠「在這運動裡」首次聯合起來（至少在屬靈上如此）的原因之一。」 2 雖然在每一主流宗派中，靈恩派信徒相對來說是少數的一群，但這運動所結聚的影響力相當龐大，似乎未來還會有增無減。</p>
              <p className="text-gray-700 leading-relaxed mb-3">在靈恩更新運動開始前，紐碧堅（ Lesslie Newbigin）於一九五三年把抗辯宗和天主教對教會的觀點分別定型為「忠信的會眾。與「基督的身體」，進而形容五旬宗教會的基督教是真實基督徒覺醒的第三道主流，所持守的觀點是以教會為「聖靈的群體」。他說，目前實在需要這第三道主流來為前兩個觀點灌溉及施肥。他以問題形式帶出他的重點：「天主教和抗辯宗的大教會是否需要謙卑下來，接受五旬節派不同團體的弟兄「對聖靈一種新的理解」，打破從前的界限，與他們建立團契？」3 在二十多年後的今天，當我們綜覽靈恩更新運動蔓延的現象時，紐碧堅的問題仍叫人產生壓迫感，而且受到廣泛應用。</p>
              <p className="text-gray-700 leading-relaxed mb-3">靈恩更新運動對羅馬天主教和福音派信徒帶來最大的衝擊。前者經過初初狼吞虎嚥及雜亂無章地吸收靈恩派的信念後，接受了他們所強調的是從神而來的，現在已沒有太大困難去把他們消化。但對福音派信徒來說，這運動帶來一些主要的張力，二十多年來仍舊沒有減退。今天在福音派信徒當中，十大疑難的其中一條就是應該贊成或反對靈恩運動。這是一條惡劣的、造成分裂的、分党的、哥林多教會式的問題。我通常會說我是贊同聖靈的，來回避這個問題。可是，為什麼人們經常如此焦急地發出這個問題呢？答案是：在本世紀初從古老的衛斯理傳統中冒起的靈恩運動——五旬宗的過繼子—— 就好像歷史上的福音主義，面對與自己不同的觀點，就立刻感到是威脅和挑戰。只有那些基本信念相同的人，才會直接發生衝突。</p>
              <p className="text-gray-700 leading-relaxed mb-3">具體一點來說：在今天大部分抗辯宗宗派裡扮演少數派角色的福音信仰運動，是以忠於神啟示的真理，及渴望看見這真理能改革及更新這些宗派，從而改進整個基督教世界為他的中心的。靈恩運動頌揚聖靈在基督徒經驗方面的職事——正如我們已看過，這是真正的福音信仰主題——，但卻沒有為純正的教義爭戰，反而相信透過分享感受和表達，自會產生團結的力量。福音信仰運動呼召人歸向耶穌基督，並且尋求一種理性的、自律的敬虔作為信徒的根基。靈息運動則呼召人將生命向聖靈敞開，並使他們期望與神相交時，會有非理性和超理性的經歷。經過多個世紀以來的爭論，福音信仰神學被磨得鋒利，變得精確，反映出一個信念，就是真理若有缺欠，生命也就出現問題。相比之下，靈恩派神學看來是鬆散、反復無常和天真的，並且這運動對五花八門的神學（尤其是那些以借著禱告領受「預言」來作為依據的神學）所採取的寬容態度似乎暗示他持守聖經真理的基礎實在太脆弱了。</p>
              <p className="text-gray-700 leading-relaxed mb-3">可是，對於一些已假設是福音信仰的特徵，諸如信心與悔改，對主耶穌基督——寬恕和拯救我們的主——的愛，被聖靈能力改變的生命，借著聖經從神那裡認識神，勇敢、充滿期待、親密而自由的禱告，小組事工，喜歡歌唱等，無論福音派或靈恩派都明顯是一致的。這兩個運動事實上是兩個重迭的圓圈。許多福音派信徒表明自己屬靈恩派；亦有許多靈恩派信徒表示自己是福音派的。儘管靈恩運動容納了一些持守非福音信仰的信徒，在歷史上和他現時流行的形式上，他看來就像福音信仰主義同父異母的姊妹；這解釋了為什麼靈恩更新運動的現象引起福音派自覺的反應，有時看來有點像手足相爭！</p>
              <p className="text-gray-700 leading-relaxed mb-3">可是，這還未是整個故事。真正的神學分歧是存在的，而彼此的爭辯可以是尖銳的。所以，有些福音派信徒認為追求悔改後聖靈的洗，以及那些隨著使徒職事而來的「表記恩賜」（sign gifts）——如講方言、翻方言、醫治的恩賜、行神跡的信心、透過異象、異夢，以及內在的印象直接從神領受預言</p>
          </div>
        )}
      </div>

      <div className="mb-4 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => toggleSection('sec1')}
          className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800 text-left text-sm">6．「靈恩狂熱」（“Charismania”）</span>
          </div>
          {expanded['sec1'] ? <ChevronUp className="w-4 h-4 text-gray-500 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />}
        </button>
        {expanded['sec1'] && (
          <div className="p-5 bg-white">
              <p className="text-gray-700 leading-relaxed mb-3">這是奧康諾（ Edward D．O’Connor）的字眼，用以形容一種慣性的心態，就是以人們公開顯露多少及多大恩賜和屬靈能力來量度他們屬靈的健康、成長與成熟程度。 10 這是思想上的惡習，因為其中判斷的原則是錯誤的，而且很可能窒礙真正的成長和成熟。</p>
          </div>
        )}
      </div>

      <div className="mb-4 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => toggleSection('sec2')}
          className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800 text-left text-sm">7．「超級超自然主義」（“Super－supernaturalism”）</span>
          </div>
          {expanded['sec2'] ? <ChevronUp className="w-4 h-4 text-gray-500 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />}
        </button>
        {expanded['sec2'] && (
          <div className="p-5 bg-white">
              <p className="text-gray-700 leading-relaxed mb-3">這是我自創的名詞，用來形容那種肯定超自然事物，又誇大其中與自然脫節之處的方法。有些人把基督教演繹成為一種呆板的信仰，使人輕忽超自然事物，不期望看見神的作為；超級超自然主義者為針對這些現象，經常期待各類神跡出現——以顯明神的存在和大能——，他最高興看見神反常道而行，推翻了我們的常識。11 對他來說，神的工作若進展緩慢，又用自然的方法達成，他會感到失望，甚至好像被出賣似的。可是，他低估了自然、有規律手口普通的事物，只顯出他過於浪漫及不成熟，並沒有充分明白神的創造和眷顧是基於神的恩典。靈恩派思想傾向把說方言視為屬靈活動的範例，將智慧與舌頭的功能故意及有系統地分隔而論，並期望神在他兒女身上的工作，都脫離被造世界的一切常規。這種思想幾乎無可避免地形成超級超自然主義。</p>
              <p className="text-gray-700 leading-relaxed mb-3">我使用這個詞來形容一種信念，就是神想我們在這沉淪的世界裡度過愉快的日子；基於這個信念，人就要活得興高采烈。靈恩派可能會反對這種赤稞稞的說法，但他們的講臺經常投射一種愉快的感覺，加上他們的標準醫治神學，表示他們背後確有這樣的假設，更反映並加深自慕迪（ D．L.MOOdy）以來那種福音信仰的傳福音精神，就是「我現在整天都是快快樂樂的，你也可以如此。」靈恩派接續了原初持複還論的五旬節派對醫治的強調——五旬節主義傳到之前，神的醫治在北美的「聖潔」圈子裡已很受著重——，就是經常假定身體的毛病及不適不是神對他兒女有益的旨意。在這基礎上，他們以耶穌和門徒的醫治作為典範，根據馬太福音八章十六、十七節和彼得前書二章二十四節闡釋以賽亞書五十三章三至六節及十節有關得贖的醫治 12，並引用保羅在哥林多前書十二章二十八節所謂「醫治的恩賜」，認為神的醫治（根據他們的見證，包括醫治長短腳、使彎曲的脊骨變直，以及有些人在南美所見證的填補壞牙）是一件他們應該恒久期待的事情 13，也幾乎理所當然地認為他們的領袖必須擁有醫治的恩賜。</p>
              <p className="text-gray-700 leading-relaxed mb-3">可是，他們引用的經文不能作為他們理論的支柱，新約聖經提到在基督徒領袖中間，也有疾病未得醫治的，14 這就顯明了神沒有定意所有信徒任何時候都身體健康。同時，靈恩派的假設忽略了基督徒面對痛苦的試煉，以及疾病不能痊癒時，他們會從中得著智慧，學習忍耐和對現實包容，不含怨毒等益處。15 再者，靈恩派的假設很可能導致許多人沮喪失望，因為在他們的假設上，亦隱含了人苦尋求不到神的醫治，也許原因不是神不願意或沒有能力醫治他，而是他自己缺乏信心。我們毋須懷疑今天神醫治的能力，並且有時他的確以超自然方式去醫治人，事實上，今天確有不同類型的醫治圍繞著某些人的事工；但我判定在靈恩派思想裡表達出這種幸福主義的意味，是他們的大錯，而且根本地妨礙基督徒邁向成熟。</p>
              <p className="text-gray-700 leading-relaxed mb-3">還必須一提的，是一些靈恩派信徒（別的基督徒有些也是如此）十分相信你若榮耀神，神自會使你百業興旺、大富大貴和舒適安樂。但實際情況往往並非如此，一大堆破產的信徒可作證明。有時候，一些信徒自以為是基督徒，就大可不必達到完善企業管理的嚴格要求，也無需應付經濟變動，但事實並非這樣，結果他們為自己帶來許多麻煩。聖經沒有應許基督徒生活富裕，只提到他們要遭遇患難和試煉。不過，若你在神的眷顧下得著財富，聖經便肯定指示你如何運用財富；但很明顯我們不能期望人人都大富大貴。</p>
              <p className="text-gray-700 leading-relaxed mb-3">這些靈恩派信徒認定神絕對不願意他的子女嘗受窮乏之苦，在神學上，這也是幸福主義另一種形式的錯誤。這宣告若然是在一個豪華酒店的大舞廳裡，由一名巨富的口中說出，人們聽來似乎言之鑿鑿；可是，只要想像這是向著住在印度、孟加拉，或非洲一些災旱地區的基督徒村民說的，就可知他何等空洞無憑。有時候，神的確很奇妙地祝福他兒女的事業（不過，他首先賜給他們營商的智慧，叫他們善用這些恩賜而獲得成果），但當有人告訴你神會如此賜福他所有兒女時，幸福主義便再次佔據人的心思，使人產生虛假的盼望，一旦事情打破他們的幻夢，他們的信心亦隨之全然崩潰。縱使他們的希望沒有遭受粉碎，而是得到實現，這種幸福主義存在人的心裡，只會鼓勵人仍舊活在虛幻中，阻礙他成長。</p>
              <p className="text-gray-700 leading-relaxed mb-3">靈恩派嘗試恢復人對神的超自然本質的感知能力，因而也愈來愈清楚地察覺到邪靈的實在；無疑，他們發展了幫助人脫離邪靈纏擾的事工，亦有一股動力去復興趕鬼的恩賜 16，這些都使許多人受益。不過，若把整個人生視為一場與魔鬼的爭戰，任何惡劣的健康、壞的思想和不良的行為，都歸咎於撒但和他的同黨，完全不考慮肉體上、心理上和關係上的種種因素，就會產生一套相對於超級超自然主義、非常不健康而且屬乎魔鬼的思想。無疑，有時候這真的發生，以致成為道德和屬靈成長的一個主要障礙。</p>
              <p className="text-gray-700 leading-relaxed mb-3">群眾壓力可以成為專制的暴君，尤其是一群自以為超屬靈的人，並且按著成員有沒有能力遵照大家公認的標準去行，來評斷他們的屬靈狀況。無可避免地，在靈恩派圈子裡，隨從群眾壓力去表現自己（雙手高舉、雙手伸展、說方言、說預言）的風氣是十分強烈的。同樣無可避免地，人一旦開始按著團體的標準和期望去生活，而不是跟隨主，他就陷入新的律法主義捆鎖中；從另一個角度看，基督徒的成長也大受威脅。</p>
              <p className="text-gray-700 leading-relaxed mb-3">不過，話說回來，我們得提醒自己不要五十步笑百步；事實上，沒有任何一類基督教屬靈事物是沒有危機和弱點的，也並非不會從其強處和優點中產生對靈命成長的威脅，我們也不要以為今天在非靈恩派圈子當中，基督徒成熟的氣質（包括對神多方面活潑的回應，以及擁有清晰的判斷力）是極其顯明易見的。在這一類事情上，最容易是擴大弟兄眼中的刺，而忽略自己眼中的梁木，因此我們最好還是靜靜地繼續我們的討論。</p>
          </div>
        )}
      </div>
    </div>
  );
}
