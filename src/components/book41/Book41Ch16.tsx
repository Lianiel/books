import React, { useState } from 'react';
import { ChevronDown, ChevronUp, RefreshCw, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book41Ch16() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-800 to-cyan-900 bg-clip-text text-transparent">第二部 2-10</h1>
        <h2 className="text-xl font-semibold text-gray-700">榮耀地位的逆轉是聖經的主題</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          本書關鍵鑰匙——貫穿聖經、統整九種榮辱動力的核心主題
        </p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <RefreshCw className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">定義：聖經敘事的「主題」</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                在音樂領域中，「主題（motif）是反覆出現的音符或片段，它是樂曲的主軸，呈現音樂的屬性和主要特徵」；在文學中，「主題是故事中的一種重複元素，具有象徵意義，透過重複，主題可以產生其他敘事元素，構成作品的基調」<sup>1</sup><span style={cite}>（音樂與文學主題的定義。）</span>。作者主張：「榮耀地位逆轉」正是神的道、神的故事中反覆出現的主題。「榮耀地位逆轉」是指一個人、一個家庭或族群，在社會轉型之前享有一定程度的尊嚴、尊重、特權、力量或權柄，其榮耀地位可能在高處或低處。根據最後結果，可分為兩類：（1）最後結果是榮耀——榮耀到羞辱到榮耀，或簡單地說，羞辱到榮耀；（2）最後結果是羞辱——羞辱到榮耀到羞辱，或簡單地說，榮耀到羞恥。
              </p>
              <p className="text-gray-700 leading-relaxed">
                最經典的例子是保羅在腓立比書二章對基督的描述：「你們當以基督耶穌的心為心：他本有神的形像……反倒虛己，取了奴僕的形像……存心順服，以至於死，且死在十字架上。所以，神將他升為至高，又賜給他那超乎萬名之上的名」（腓二5-11）。耶穌本有極高的榮耀地位，卻甘願讓自己的地位逆轉——道成肉身、取奴僕形像、卑微至死；然而，正如田奈特所言：「儘管耶穌承受了這種羞辱，但實際上祂並沒有因此失去榮耀。」<sup>2</sup><span style={cite}>（Tennent.）</span>耶穌在受審時依然掌握全局，甚至醫治大祭司僕人的耳朵、使士兵因祂的話而退縮倒地——當祂從死裡復活、坐在父的右邊時，這份榮耀重新彰顯，這就是眾所皆知的「基督的高升」。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">舊約中的榮耀地位逆轉：從伊甸園到啟示錄</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者列舉一連串聖經歷史人物，證明榮耀地位逆轉是貫穿全書的普遍模式：亞當和夏娃因背叛而受辱、失去與神相交的榮耀（創三23）；亞伯拉罕放棄故土、親族的榮耀源頭，換得神應許「叫你的名為大……地上的萬族都要因你得福」（創十二1-3）；約瑟被哥哥們嫉妒、賣為奴隸，歷經極大羞辱，最終卻成為埃及宰相；摩西出身受壓迫的少數民族，卻在法老宮中長大，最終帶領希伯來人脫離為奴的羞辱、進入應許之地的榮耀（出六6-8；利廿六13）；掃羅從卑微被高舉為王，卻因悖逆再度墜入羞辱，大衛則從卑微牧羊少年被高舉為萬古流傳的君王（撒下三1）；米非波設從殘疾、蒙羞的倖存者，蒙大衛王恩待，天天與王同席（撒下九章）；以斯帖從少數民族的孤女，被立為波斯皇后，而設計加害猶太人的哈曼，反倒死在自己所預備的木架上（斯六至七章）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                先知書中同樣充滿這個主題：以賽亞書描繪猶大和耶路撒冷因背叛神而受審判蒙羞，卻也應許「一切山窪都要填滿，大小山岡都要削平……耶和華的榮耀必然顯現」（賽四十4-5），並用整整三章（五二至五四章）描述受苦僕人「為我們的過犯受害」，最終卻迎來令人歡呼的榮耀應許；以西結書記載以色列因偶像崇拜蒙羞受審，卻也應許「使雅各被擄的人歸回」，用「枯骨復活成為極大軍隊」的異象（結卅七1-14），生動描繪從沉淪到榮耀的逆轉；但以理書更是一連串精彩的地位逆轉故事：但以理和三個朋友堅守信仰，歷經爐火與獅子坑的考驗，最終備受尊榮；驕傲的尼布甲尼撒王因罪被貶為如牛食草的瘋子，悔改後「聰明復歸於我」；伯沙撒王褻瀆聖殿器皿，當夜就被殺害，應驗了「牆上的字」。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">新約中的榮耀地位逆轉：八福、浪子回頭、路加福音一章</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                耶穌的教導與工作，將這個主題推向高峰。八福開頭「虛心的人有福了！因為天國是他們的」（太五3），宣告在神的國度中，有新的生活方式、新的收穫方式和衡量人榮耀的新準則——這不是屏棄對榮耀的渴慕，而是宣告所有人都可以獲得一種更高、永久的新榮耀。浪子回頭的比喻（路十五11-32）被稱為「有史以來最好的短篇小說」——小兒子從離家沉淪、淪落到餵豬，到父親熱切迎接、給他袍子、鞋子、戒指，邀請眾人齊來慶祝，是榮耀地位逆轉最動人的敘事。作者也提醒，這個主題不只出現在著名大故事中，路加福音第一章就已處處可見：卑微的馬利亞被高升為彌賽亞之母，年邁不孕的以利沙伯終於懷孕，馬利亞的尊主頌宣告神「叫有權柄的失位，叫卑賤的升高……叫飢餓的得飽美食，叫富足的空手回去」（路一52-53）。西面在聖殿抱著嬰孩耶穌預言：「這孩子被立，是要叫以色列中許多人跌倒，許多人興起」（路二34）——正是榮耀地位逆轉事工的總結。
              </p>
              <p className="text-gray-700 leading-relaxed">
                保羅的書信同樣以此為核心：羅馬書「顛覆了羅馬帝國的社會價值體系」——汝耶指出，福音打破了強者優於弱者、自由人優於奴隸的不公平位次，「藉著基督釘十字架、復活的福音，神的公義將大獲全勝，透過翻轉羞辱、榮耀地位的界定來實現」<sup>3</sup><span style={cite}>（Robert Jewett相關論述。）</span>；哥林多前書宣告：「神卻揀選了世上愚拙的，叫有智慧的羞愧；又揀選了世上軟弱的，叫那強壯的羞愧」（林前一27）；啟示錄中，耶穌基督從「被殺的羔羊」逆轉成為「猶大支派中……得勝的獅子」（啟五5-7），巴比倫大城傾覆，殉道聖徒穿上白衣，魔鬼終被征服——鮑克漢將此總結為「神的一貫策略」：「神往往逆轉人的地位，不是為了使非精英、不出色的成為新的精英，而是為了要廢除身分地位、建立祂的國度；在這個國度中，沒有人享有優於他人的特權。」<sup>4</sup><span style={cite}>（Richard Bauckham.）</span>
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">信徒的榮耀地位逆轉：以弗所書二章的縱向與橫向維度</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                榮耀地位逆轉不僅發生在耶穌基督身上，也適用於所有相信祂的人：「我們這受洗歸入基督耶穌的人是受洗歸入他的死……我們若在他死的形狀上與他聯合，也要在他復活的形狀上與他聯合」（羅六3-5）。作者特別指出，這帶出「身分定位」與「實際經驗」之間微妙的張力：對某些信徒而言，信主確實帶來現實生活中的羞辱、拒絕甚至逼迫；對另一些人而言，這更多是屬靈地位上的真理。無論如何，正如戈爾曼所言：「對保羅而言，在基督裡，就是活出基督生命的生動詮釋；為了服事和順從，自己願意放棄權利、好處，以一種新的生命方式呈現，逆轉羞辱，終獲提升。」<sup>5</sup><span style={cite}>（Michael T. Gorman.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                以弗所書二章1-22節，為此提供了最完整的圖像。前七節描述「縱向維度」——人與神之間，從「死在過犯罪惡之中」到「與基督耶穌一同復活，一同坐在天上」；後十二節則描述「橫向維度」——外邦人與神選民之間，從「沒受割禮」「與神隔絕」到成為神百姓、聖徒、神家庭的一員。兩個維度的交會點，正是「你們得救是本乎恩，也因著信；這並不是出於自己，乃是神所賜的」（弗二8-9）。作者也提醒，往往被忽略的第十節同樣重要：「我們原是他的工作，在基督耶穌裏造成的，為要叫我們行善」——在榮辱文化的原始讀者眼中，行善正是對「偉大施恩者」賞賜奇妙救恩的自然回應，絲毫不與「因信稱義」衝突，反而是理所當然的推論。
              </p>
              <p className="text-gray-700 leading-relaxed">
                保羅自己在使徒行傳廿二章講述的悔改見證，正是這個主題最生動的個人示範：他原本擁有純正血統與宗教地位，卻在大馬士革路上「仆倒在地」（喪失榮耀的動作），因那光的榮耀而失明、脆弱如孩童；接著主親自對他說話、指示亞拿尼亞來恢復他的視力並宣告他蒙揀選的使命——從跌倒到「起來」，保羅的整個見證，都是精心編排的榮耀地位逆轉敘事，映照著耶穌自己的死而復活。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">神的愛：驅動這個輪子的引擎</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者提醒，即使深刻理解榮耀地位逆轉，仍不能忘記：神的愛才是這一切的根源。「如果榮耀和羞辱的動力是一個輪子、榮耀地位逆轉是輪軸——那麼，上帝的愛就是推動這個輪子的引擎。」何以有罪、可恥的人類能經歷榮耀地位逆轉？最終，這一切都指向神對世人豐沛壯闊的愛（約三16），以及神對自己榮耀的熱情（約十二28）。作者也引用弗雷斯特的話總結耶穌事工的本質：「祂將自己的榮耀放在一邊，祂明白人類心中深處的羞辱；在祂自己恢復和回歸榮耀歷程中，祂打破桎梏、帶領全人類走出羞恥之境。」<sup>6</sup><span style={cite}>（John Forrester.）</span>耶穌也在大祭司的禱告中，把這份榮耀分享給跟隨祂的人：「你所賜給我的榮耀，我已賜給他們，使他們合而為一」（約十七22）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                本章結尾，作者連串提出深刻的提問：對於數十億以榮辱為核心文化價值、卻尚未接觸福音的人，這意味著什麼？對於無辜受害、承受羞辱的弱勢者，這意味著什麼？對於天天遭受羞辱的少數民族，這意味著什麼？對於汲汲營營攀爬成功階梯的人，這意味著什麼？對於長期處於低下地位、感到自己不配的人，這又意味著什麼？作者總結：這意味著涉及個人和民族羞辱的複雜問題，是有解答的——深入理解基督的榮耀，合乎聖經原則。本書的第三部，將探討如何以榮辱感所思考的各種角度，延伸出傳揚基督福音的不同路徑，為全球的福音化搭建理解、溝通的橋梁。
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
                '「榮耀地位逆轉」是貫穿全本聖經的核心敘事主題，可分為「羞辱到榮耀」與「榮耀到羞辱」兩種型態，腓立比書二章基督「虛己、卑微、升為至高」的敘事是最經典的範本。',
                '從亞當夏娃、亞伯拉罕、約瑟、摩西、掃羅與大衛、米非波設、以斯帖，到但以理書中一連串的地位翻轉，舊約歷史一再重演這個「神使卑微者升高、驕傲者降卑」的模式。',
                '八福、浪子回頭的比喻、路加福音一章的尊主頌，都是新約中榮耀地位逆轉的經典場景；耶穌重新定義了「福」與「大」的標準——不再由世人、而是由天父來認定。',
                '保羅的神學論述（羅馬書、哥林多前書）與啟示錄的末世異象，都以「翻轉世上的榮辱秩序」為核心邏輯，鮑克漢稱之為「神的一貫策略」：廢除身分地位的特權，而非只是換人坐上特權的位置。',
                '以弗所書二章清楚呈現榮耀地位逆轉的縱向維度（人與神和好）與橫向維度（外邦人與神子民合一），「因信稱義」與「因此當行善」正是這兩個維度交會於恩典的具體結果。',
                '若把榮辱動力比喻為一個輪子，「榮耀地位逆轉」是輪軸，那麼推動整個輪子轉動的引擎，就是神對世人毫無保留的愛——這一章是全書結構的關鍵樞紐，承先啟後，即將帶領讀者進入第三部「福音如何情境化」的討論。',
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
              <h4 className="font-semibold text-gray-800 mb-2">鮑克漢強調，神逆轉地位「不是要讓弱者變成新精英，而是要廢除身分地位的特權結構」——這對今日教會處理「成功神學」的偏差有何提醒？</h4>
              <p className="text-gray-700 leading-relaxed">
                若把「榮耀地位逆轉」簡化理解為「信耶穌就能翻身、變得比別人更成功、更有地位」，其實正好落入了作者所批判的「世界的國度」邏輯——只是換了一批人站上特權位置，結構本身並未改變。聖經真正的信息更激進：神的國度根本上要廢除「有人配得優越地位、有人不配」這種比較性的價值體系，邀請所有人以謙卑服事彼此。這對容易把信仰與世俗成功掛鉤的教會文化，是重要的提醒與校正。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「身分定位」與「實際經驗」之間的張力，如何幫助我們牧養那些「信主後生活反而更艱難」的信徒？</h4>
              <p className="text-gray-700 leading-relaxed">
                有些信徒信主後，因家庭、職場或社會壓力，反而經歷了實質的地位下降、關係破裂甚至逼迫，這與「信耶穌帶來祝福提升」的期待落差極大，容易讓人灰心甚至懷疑信仰。作者的分析提醒我們：聖經對「與基督一同復活」的應許，同時是「已然」的屬靈地位真理，也是「未然」、尚待完全實現的盼望。牧養這樣的信徒，需要誠實地承認現實的艱難，同時堅固他們對屬靈身分與終末盼望的確據，而非用廉價的「信了就會順利」來安慰他們。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">保羅在使徒行傳廿二章刻意用「榮耀地位逆轉」的敘事結構講述自己的得救見證，這對今日基督徒分享見證的方式有何啟發？</h4>
              <p className="text-gray-700 leading-relaxed">
                許多信徒的見證習慣聚焦在「情緒的轉變」（從痛苦到平安）或「行為的改變」（從犯罪到聖潔），但保羅的見證示範了另一種深具說服力的敘事框架——刻意呈現「地位」的逆轉軌跡：從擁有純正血統與宗教地位，到仆倒、失明、脆弱如孩童，再到蒙神親自揀選、恢復視力、領受尊榮使命。對於身處榮辱文化的聽眾而言，這種敘事方式往往比單純的情感描述更具穿透力，值得今日信徒在跨文化處境中分享見證時參考借鏡。
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
              '回顧本章列舉的舊約人物（亞伯拉罕、約瑟、摩西、大衛、以斯帖、但以理），哪一位的榮耀地位逆轉故事，與你自己的生命經歷最有共鳴？',
              '「受洗歸入他的死」這個真理，對你而言，主要是「身分定位」上的真理，還是也伴隨著實際生活中的羞辱與代價？',
              '你認為自己所處的文化，比較容易認同「歡慶神學」（強調復活的豐盛），還是「苦難神學」（強調十架的受苦）？這對你理解福音的方式有何影響？',
              '「神的愛是推動榮耀地位逆轉這個輪子的引擎」——這個比喻，如何幫助你把神學概念與神對你個人的愛連結起來？',
              '本章結尾一連串的提問（未得之民、無辜受害者、少數民族、追求成功者、自覺不配的人），哪一個問題最觸動你？',
              '讀完第二部九種榮辱動力和本章的總結後，你對「福音」這個詞的理解，發生了什麼樣的擴展或改變？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 用「榮耀地位逆轉」的框架，重寫自己的得救見證</h4>
              <p className="text-gray-700 mb-2">
                仿照保羅在使徒行傳廿二章的敘事結構，試著用「原本的地位、跌落／羞辱的時刻、蒙恩／被高舉的過程」三段式，重新整理自己的信主見證，並找機會與人分享。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 精讀以弗所書二章1-22節</h4>
              <p className="text-gray-700 mb-2">
                分別標記出「縱向維度」（你與神的關係）與「橫向維度」（你與其他信徒的關係）的經文，思考這兩個維度在你目前的生命中，分別活出了多少。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，感謝祢從至高的榮耀，甘願降卑至死，又被神升為至高——求祢幫助我，在自己生命的羞辱與榮耀之間，都能看見祢愛的引擎，正在推動著這一切。求祢使用我這蒙恩、被翻轉地位的生命，去向仍活在羞辱中的人，傳講這榮耀地位逆轉的好消息。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
