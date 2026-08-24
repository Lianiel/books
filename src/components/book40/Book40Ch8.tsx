import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Waves, Star, Search, HelpCircle, Check } from 'lucide-react';

const quote = "border-l-4 border-emerald-300 bg-emerald-50 pl-4 py-3 mb-3";
const quoteText = "text-emerald-800 leading-relaxed italic";

export default function Book40Ch8() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-800 to-orange-900 bg-clip-text text-transparent">第八章</h1>
        <h2 className="text-xl font-semibold text-gray-700">第五誡：尊重權柄——順服神在地上的代表</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          「當孝敬父母，使你的日子在耶和華你神所賜你的地上得以長久。」（出20:12）
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
              <h3 className="font-bold text-amber-900 text-lg mb-3">一、問題思想：為何孝順父母的祝福是「在地上得以長久」？</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                申命記四章40節：「我今日將祂的律例誡命曉諭你，你要遵守，使你和你的子孫可以得福，並使你的日子在耶和華你神所賜的地上得以長久」；詩篇七八篇5-6節也說：「因為，祂在雅各中立法度，在以色列中設律法；是祂吩咐我們祖宗要傳給子孫的，使將要生的後代子孫可以曉得；他們也要起來告訴他們的子孫」。當一個基督徒的家庭或家族，父母懂得遵行神的律例誡命，而子孫也懂得孝敬父母時，他們就會接受父母的信仰和價值觀，他們的子孫必然一代一代都蒙福，興旺的光景會持續下去，這個家族的日子就得以長久興盛下去。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「父母」乃泛指「一切在上的權柄者」：包括父母、老師、傳道人、上司、管理者、政府，甚至包括丈夫，一切我們當順服、當聽從的權柄。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">二、順服是人倫中最重要的原則</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                上帝要我們學習順服權威、看重遮蓋、尊重次序。順服使我受保護，使我們蒙福。我們順服某人，並非因為對方的恩賜、才華比我們出眾，乃因尊重神安排的次序。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經中人倫關係的教導是雙向的，要求自己而不是拿來要求別人，而且這些人倫關係的教導都是針對人的弱點而發。以弗所書五章22節至六章9節指出，「作妻子的，當順服自己的丈夫」；「作丈夫的，要愛你們的妻子」，因為一般而言，妻子的弱點是「順服」，丈夫的弱點是「太愛自己而不夠愛妻子」；保羅教導「作兒女的，要在主裡聽從父母」；「作父親的，不要惹兒女的氣」，這也是針對親子關係的弱點。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅的教導非常特別，他不是要求「兒女不要惹父母生氣」，而是要求「父母不要惹兒女的氣」：
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「惹氣」是指「激怒」，意思是「用不合宜的言詞或行動，去惹動兒女們進入憤怒狀態，使他們產生一種持久性的怨恨」。歌羅西書三章21節：「你們作父親的，不要惹兒女的氣，恐怕他們失了志氣」。所謂「失了志氣」就是指失去了生活的動力，失去了自信心，失去了主動積極的態度，對人生是被動的，是被推著向前走的，好像洩了氣的皮球一樣。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">三、如何不惹兒女的氣——「父母十誡」</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-amber-700 mb-1">一、不可「要求過高」</p>
                  <p className="text-gray-700 leading-relaxed">若父母要求過高，當兒女無法達到要求時，容易產生罪惡感，失去向上的意志。做父母的必須十分小心，不要想藉著孩子的成就在自己臉面上貼金，用來補償過去沒有得到的榮耀。</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-700 mb-1">二、不可「言行不一」</p>
                  <p className="text-gray-700 leading-relaxed">這樣必定會惹動孩子的氣，或許他們敢怒而不敢言，但會在心中產生長期的負面影響。言行一致才能夠讓孩子心裡柔軟，讓孩子願意從心裡順服。</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-700 mb-1">三、不可「不願認錯」</p>
                  <p className="text-gray-700 leading-relaxed">犯錯不認錯，卻要求青少年在犯錯時認錯，會使青少年在感覺不公平的當中，產生強烈的反彈。當父母犯錯時能勇敢的認錯，才能得著青少年對他們的尊敬。</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-700 mb-1">四、不要「情緒失控」</p>
                  <p className="text-gray-700 leading-relaxed">當我們不能夠約束管理我們自己情緒的時候，我們就在製造一個叛逆的孩子！成年人是可以約束自己的行為、舌頭和情緒的，你的孩子才可能願意從心裡尊敬你，並且心悅誠服的順服你。</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-700 mb-1">五、不可「否定偏心」</p>
                  <p className="text-gray-700 leading-relaxed">「否定、偏心及比較」都會惹兒女的氣。我們做父母的不該讓孩子在成長的過程中對你的愛有疑惑，或者因為你沒有對他的肯定而讓他覺得受傷。箴言廿章5節提到：「人心懷藏謀略，好像深水，惟明哲人纔能汲引出來」，我們要成為孩子的「明哲人」，把上帝放在孩子裡面的美好特質汲引出來！每個孩子都有他們獨特的地方，我們要肯定、引導，不要否定他們，甚至偏心或比較。</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-700 mb-1">六、不可「疏於陪伴」</p>
                  <p className="text-gray-700 leading-relaxed">孩子有需要的時候，我們沒時間陪伴他們，會使孩子心中生氣。孩子是神託負給我們的產業，我們必須花時間和他們在一起。</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-700 mb-1">七、不可「疏於了解」</p>
                  <p className="text-gray-700 leading-relaxed">不瞭解甚至誤解孩子，也會使孩子心生怨恨。我們需要用同理心去瞭解他們，這可以使青少年較容易接納父母的意見。</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-700 mb-1">八、不可「父母失和」</p>
                  <p className="text-gray-700 leading-relaxed">心理學家做過研究：在孩子成長過程裡面，造成孩子傷害最大的就是「父母感情不和睦或父母離異」。父母親和睦、相愛是帶給孩子安全感的重要來源。愛孩子就先去愛孩子的爸爸或媽媽。</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-700 mb-1">九、不可「過度保護」</p>
                  <p className="text-gray-700 leading-relaxed">過分地保護子女，以致他們失去學習獨立自主的機會，久而久之，他們不但不體會父母的愛意，反而會在內心生出不滿和憤恨！</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-700 mb-1">十、不可「言而無信」</p>
                  <p className="text-gray-700 leading-relaxed">「言而無信」會讓孩子們感到被欺騙，認為父母親缺乏誠信，根本沒有尊重他們，而心中產生不滿與怨恨。</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">四、孝敬父母最重要的就是：尊重父母</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                當人鄙視父母時，其實就是在鄙視某個部分的自己。有人說：「一個無法尊重父母的人，一定會遇到這樣的問題：『你真的尊重、尊敬你自己的生命嗎？』」
              </p>
              <div className={quote}>
                <p className={quoteText}>
                  我無須去頌揚我的父母，但我要敬重他們。敬重就是去注意他們的想法。至少我應該要試著去了解：他們為什麼會這樣？他們是怎麼樣的人？或是為什麼他們會這樣過日子？為什麼他們會有這樣的想法？並且不加任何個人的評價。這樣我就會逐漸對他們產生敬意，發掘出他們的價值，並開始去欣賞他們面對人生的挑戰所做的努力。當我用尊敬的眼光看他們的人生時，就會發掘出許多對我有幫助的東西來，並且會對他們表達深深的敬意，並告訴自己說：我十分尊敬他們所成就的一切及奮鬥的人生，我會發現他們人生的價值觀，而且這些價值觀至今仍使我受用無窮。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">五、問題思想一：若父親不准兒女信主時，當如何行？</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                （以下適用其他權威者：例：母親、丈夫、政府等）使徒行傳四章18-20節：「於是叫了他們來，禁止他們總不可奉耶穌的名講論教訓人。彼得、約翰說：『聽從你們，不聽從神，這在神面前合理不合理，你們自己酌量罷！我們所看見所聽見的，不能不說。』」若權威者逼迫我們的信仰，或者攔阻我們傳福音，我們可以不聽從他們，只聽從神。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">六、問題思想二：若父親不准兒女受洗時，當如何行？</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                （以下適用其他權威者：例：母親、丈夫、政府等）我們教會教導作兒女的（或作妻子的），若父母（或丈夫）反對他們受洗，我們會鼓勵他們不必急著受洗，可以先在家中有好的見證，讓父母（或丈夫）先認同我們的信仰，再請求他們同意受洗。我們發現，只要他們有好的見證，最後這些權威者會贊同他們受洗，甚至會前來觀禮，以致最後也接受了信仰。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">七、基督徒對參與政治應有的態度</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                第五誡不僅涉及孝敬父母，「父母」也泛指一切在上的權柄，其中包括政府。因此，這也是討論基督徒如何看待政治參與的合適場合。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                許多基督徒認為教會應當熱衷政治的原因如下：
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-amber-700">一、認為是「責任」：</span>他們認為教會應當如同舊約的先知一樣，有「監督」政府之責。有些基督徒認為，政治就是「管理眾人的事」，基督徒既然關心人，就當關心政治。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-amber-700">二、認為是「預工」：</span>他們認為教會參與政治會讓人看見基督徒「光和鹽」的見證，對福音有助益。他們並且認為，教會當支持基督徒的政治家在政壇上發揮影響力。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-amber-700">三、認為是「福音」：</span>這一種主張的人，他們是所謂的「社會福音派」。「社會福音派」不是純正的信仰，他們認為，透過政治解決人的問題就是「福音」。然而，正統的信仰認為，真正的福音是「個人福音」，我們認為，耶穌基督的福音，最主要的目的是改變個人的生命、釋放個人的生命，而「社會福音派」的人卻主張福音是改變社會的制度、釋放被壓制的族群。
              </p>

              <h4 className="font-semibold text-amber-800 mb-2 mt-4">持平的看法</h4>

              <div>
                <p className="font-semibold text-amber-700 mb-2">一、最大的是「福音」</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  （一）教會最主要的使命是傳福音：使徒行傳一章6-8節記載：「他們聚集的時候，問耶穌說：『主阿！你復興以色列國，就在這時候嗎？』耶穌對他們說：『父憑著自己的權柄所定的時候、日期，不是你們可以知道的。但聖靈降臨在你們身上，你們就必得著能力，並要在耶路撒冷、猶太全地，和撒瑪利亞，直到地極，作我的見證』」。使徒們關心的是「政治問題」，但耶穌最關心的是「傳福音」、「宣教」。因此，教會必須排除攔阻福音廣傳的因素，所以，教會對於政治應採取超然的地位（特別是「相對」的政治問題），教會若因為政治立場鮮明，以致妨礙福音的傳揚，那就是「因小失大」。教會仍然可以鼓勵弟兄姐妹，以個人的政治信念投入政治，但教會必須保持超然的立場，尤其在講台上，應避免談論相對的政治立場。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  （二）教會不去觸犯政權，才能平安無事傳福音：保羅勸勉信徒：「我勸你，第一要為萬人懇求、禱告、代求、祝謝；為君王和一切在位的，也該如此，使我們敬虔端正，平安無事的度日。這是好的，在神我們救主面前可蒙悅納。祂願意萬人得救，明白真道」（提前2:1-4）。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  （三）政治對福音的幫助不是絕對的：即或有幫助，教會也不能去製造政權，更何況歷史已告訴我們，不要倚靠政治為教會效力，中世紀的政教合一及政教鬥爭就是我們的鑑戒。教會只能禱告，而禱告是「最有功效的行動」，因為我們相信「至高者在人的國中掌權」！
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  （四）基督徒應順從政府，因為政府的權柄從神而來。但當福音遭逼迫時，基督徒可以不順從政府：保羅教導信徒：「在上有權柄的，人人當順服他，因為沒有權柄不是出於神的，凡掌權的都是神所命的。所以，抗拒掌權的，就是抗拒神的命，抗拒的必自取刑罰」（羅13:1-2）；彼得也教導我們：「你們為主的緣故，要順服人的一切制度，或是在上的君王，或是君王所派罰惡賞善的臣宰——務要尊敬眾人，親愛教中的弟兄，敬畏神，尊敬君王」（彼前2:13-17）。然而，從使徒行傳我們看見，當政權禁止我們傳福音時，「順從神，不順從人，是應當的」（徒5:27-29）。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  （五）基督徒當關心政治，也可以個人的名義參政，可以是一種職業，也可以有個人不同的呼召與政治主張，但基督徒仍必須明白，傳福音是基督徒最重要的使命。
                </p>
              </div>

              <div>
                <p className="font-semibold text-amber-700 mb-2">二、最大的能力是「福音」</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  人基本的問題不在於「解決制度」問題，而在於「解決生命」的問題，當人以神所賜的生命，活出耶穌捨己的精神時，人的問題才能真正解決，是由內而外的改變。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  保羅不是政治家，他是傳道人，因此，他沒有試圖改變當時羅馬帝國的「奴隸制度」。然而，保羅認為制度如何並不要緊，最重要的是生命的改變。保羅替奴隸阿尼西母向腓利門求情時，他並沒有要求改變他們名義上主僕的關係，他乃是勸勉腓利門，以基督的愛來愛阿尼西母。保羅說：「他暫時離開你，或者是叫你永遠得著他；不再是奴僕，乃是高過奴僕，是親愛的兄弟；在我實在是如此，何況在你呢！這也不拘是按肉體說，是按主說」（門15-16）。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  保羅也勸勉那些作奴隸的人，若能改變身份當然是好事，但若身份沒有改變也無妨，他們在基督裡的生命是自由的。保羅說：「各人蒙召的時候是甚麼身分，仍要守住這身分。你是作奴隸蒙召的麼？不要因此憂慮。若能以自由，就求自由更好。因為作奴僕蒙召於主的，就是主所釋放的人；作自由之人蒙召的，就是基督的奴僕。你們是重價買來的，不要作人的奴僕。弟兄們，你們各人蒙召的時候是甚麼身分，仍要在神面前守住這身分」（林前7:20-24）。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  政治不是這個世界的出路，各種制度都有利弊，有人說：「民主制度是最好的壞制度」。因為人的問題不是制度的問題，而是生命的問題。因此，政治家佩脫拉克說：「和平的五大敵人住在我們心裡——貪婪、野心、嫉妒、憤怒和驕傲，驅逐這一切，我們就必會享永久的和平」。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  從教會歷史我們看見，當教會復興，人的生命改變時，社會就會改變。
                </p>
                <div className={quote}>
                  <p className={quoteText}>
                    公元1904年，英國威爾斯大復興時，當時的酒吧和戲院一家一家地倒閉，釀酒業遭到重大的損失。某地，一個戲劇公司覺得必須離開那地，因全地區都在禱告，得到觀眾的盼望已是斷絕。
                  </p>
                  <p className={quoteText + " mt-2"}>
                    當時，許多積欠很久的債務都償清了；偷來的東西都送歸原主；火車上，電車上，礦場裡，到處都有禱告聚會。馬夫不再用「三字經」來罵馬，以致馬竟不懂得他們用新言語所發的口令。
                  </p>
                  <p className={quoteText + " mt-2"}>
                    青年人退還獎章和文憑，因為他們是用不義的方法來得到的。社會治安變好了，很多地方的法官無案可審，律師也失業了，便組成詩班去各地獻詩。國會議員脫離無聊的政治議題，省下的時間便去參加禱告會；報紙沒有暴行和八卦新聞可報導，改為報導各地復興的消息。店裡所存的聖經都賣盡了；工人的工作產量，比數年中的產量更多；政治的集會和球賽只能延期，因為議員和球員都參加復興大會。
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  總之，教會最重要的使命是福音，也只有福音才能真正改變這個世界，讓我們更專注地傳福音，把福音傳到地極吧！
                </p>
              </div>
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
                '第五誡「當孝敬父母」中的「父母」泛指一切在上的權柄者，包括父母、老師、傳道人、上司、政府等；聖經的人倫教導是雙向的，保羅特別要求「父親不要惹兒女的氣」，而非只要求兒女順服父母。',
                '「父母十誡」列出十項不惹兒女生氣的具體提醒：不可要求過高、言行不一、不願認錯、情緒失控、否定偏心、疏於陪伴、疏於了解、父母失和、過度保護、言而無信——核心精神是尊重孩子、以身作則。',
                '孝敬父母最重要的是「尊重」，不加評價地試著理解父母為何會這樣過日子、這樣想事情，進而發掘他們人生的價值與奮鬥；面對權柄阻攔信仰時（不准信主、不准受洗），原則是「順從神不順從人」，但實務上可先用生命見證軟化對方。',
                '基督徒對政治參與的持平立場是「教會最主要的使命是傳福音」——教會應在相對的政治議題上保持超然，不因政治立場鮮明而妨礙福音；基督徒可以個人身分關心政治、參政，但不應把政治當作福音本身（如社會福音派的主張）。',
                '「最大的能力也是福音」——人的根本問題不是制度問題而是生命問題，保羅面對奴隸制度時選擇改變生命（腓利門與阿尼西母的關係）而非直接挑戰制度；教會歷史上的威爾斯大復興見證：當生命真實被改變，社會風氣、治安、道德自然隨之更新，這比單靠政治更有能力改變世界。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「父母不要惹兒女的氣」這個少見的教導方向，對華人「天下無不是的父母」文化有何挑戰？</h4>
              <p className="text-gray-700 leading-relaxed">
                傳統華人文化往往單方面強調兒女要孝順、順從，很少反過來要求父母對兒女負責任。保羅在歌羅西書和以弗所書卻明確要求父親不要惹兒女的氣，這種雙向的人倫教導對深受孝道文化影響的華人教會極具挑戰性——健康的親子關係不是單靠兒女單方面順服撐起來的，父母同樣需要以身作則、承擔起不激怒兒女的責任。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「父母十誡」中「不願認錯」和「言而無信」，為何特別容易被父母忽略？</h4>
              <p className="text-gray-700 leading-relaxed">
                許多父母在權威文化下成長，習慣把「認錯」等同於「失去威信」，因而在犯錯時選擇迴避而非坦承；同樣，「言而無信」（如承諾卻不兌現）也常被父母合理化為「小事」。作者提醒，這兩項恰恰是最傷害孩子信任的行為——孩子對公平與誠信的敏感度往往超過大人的想像，父母言行一致才能真正贏得孩子從心底而發的尊敬。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「教會最大的能力也是福音」的立場，對今日教會熱衷社會運動、政治動員的現象有何提醒？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者以保羅面對奴隸制度的態度為例，說明使徒選擇從改變生命下手，而非直接挑戰制度本身，並以威爾斯大復興為佐證——真正的社會改變，往往是生命改變的副產品，而非政治運動直接促成的。這對今日部分教會傾向把大量資源投入政治動員、社會倡議的現象，提供了一個值得深思的對照視角：福音本身的能力，是否被低估了？
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
              '「父母十誡」的十項提醒中，哪一項對你（身為父母，或回想自己的父母）最有觸動？',
              '你如何理解「一個無法尊重父母的人，一定會遇到『你真的尊重自己的生命嗎』這個問題」這句話？',
              '若你曾面對權柄者（父母、配偶、上司）攔阻你的信仰，你當時是如何處理的？回頭看，你會用「先建立好見證」的智慧來調整做法嗎？',
              '你認為教會應該在多大程度上參與政治？「教會最主要的使命是傳福音」這個立場，你認同嗎？為什麼？',
              '保羅面對奴隸制度選擇「改變生命而非直接挑戰制度」的做法，你如何評估這種策略在今日社會議題上的適用性？',
              '威爾斯大復興的見證顯示，生命的改變能帶來整個社會風氣的更新。你渴慕看見這樣的復興臨到你自己的教會或社區嗎？你願意從何處開始禱告？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 用「父母十誡」逐條檢視自己（若為人父母）</h4>
              <p className="text-gray-700 mb-2">找時間把十條逐一對照自己與孩子的相處方式，誠實圈出最需要調整的一兩項，具體寫下本週可以做出的改變。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 練習「不加評價地理解父母」</h4>
              <p className="text-gray-700 mb-2">
                本週找一個時間，安靜思想你的父母為何會有現在的價值觀和生活方式，試著不批判地理解他們一路走來的處境與掙扎，看看是否能對他們生出新的敬意。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，求祢幫助我學習真正尊重在我生命中一切合宜的權柄——父母、師長、政府。若我是為人父母者，求祢幫助我不惹兒女的氣，以身作則、言行一致地帶領他們。求祢也幫助祢的教會專注於傳福音的使命，相信唯有生命的改變才能帶來真實而持久的社會更新。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
