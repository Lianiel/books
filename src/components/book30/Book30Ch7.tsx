import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Compass, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book30Ch7() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    exploration: true,
    questions: true,
    practice: true,
  });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">第七章</h1>
        <h2 className="text-xl font-semibold text-gray-700">猿呢？還是人？</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            {/* 一 */}
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">一、人的起源</h3>
              <p className="text-gray-700 leading-relaxed mb-3">人的起源是探討起源這個大問題最重要的一個關鍵。究竟人僅是自然進化過程的產品；或是造物者特殊的創造，要他統管一切所造之物？進化論把人構想成來自「非人」的祖先，慢慢演變成人，而創造論則認為人從開始就直接被造成人，具有全備的人體及頭腦。</p>
              <p className="text-gray-700 leading-relaxed mb-3">在學校裏一般所教的進化史是說人與猿猴同為三千萬至七千萬年前由一不明的共同祖先演變而來。導致人的形成則是經過各種進化的階段，最後於一百萬至三百萬年前定型。此後，人類文化與社會之演進取代了人類身體型態的演進。</p>
              <p className="text-gray-700 leading-relaxed mb-3">為了支持這想法，進化論者指出好些猿人類(Hominoid，包括猿猴與人二者之稱謂)的化石，與類人類(Hominid，指似人而仍非人之人類祖先)的化石皆可顯示在人類之前的進化的不同階段。創造論者則堅持這些化石不是屬於猿猴的，就是屬於人類的，而非屬於介乎猿猴與人類之間的動物。</p>
              <p className="text-gray-700 leading-relaxed mb-3">然而認真的老師們，對於這個極為重要的問題——人的起源及其目的——會提供學生兩種不同的看法。為了要讓創造論者瞭解這些化石的意義，以下就按「進化」程序，逐一討論各種較為重要的化石。</p>

              <div className="space-y-3">
                {[
                  {
                    title: '(一)人與猿猴的共同先祖',
                    content: '此種動物尚無名稱，因為此類化石從未被發現過，其存在純係進化論者的推論。創造論者預測這「失去的一環」將永遠失去。'
                  },
                  {
                    title: '(二)拉瑪猿 (Ramapithecus)',
                    content: '字尾 "Pithecus" 的意思即猿。為數可觀的化石骨被宣佈為早已絕了種的「猿」類(Pithecine)動物，其中一些骨被認為可能是人類的祖先。這些包括攀援猿屬Dryopithecus、原始猿人屬Oreopithecus、沼猿屬Limnopithecus、肯亞猿屬Kenyapithecus以及另外一些，它們被認為活在大約一千四百萬年前。\n\n大部份進化論的人類學家都認為拉瑪猿是這羣化石中最重要的。這化石是於一九三二年在印度發現的，包括有幾個牙齒及破損了的牙床。這個動物的門齒及大齒形狀雖像現代猿的，但卻比現代猿的為小。因此，有些進化論者認為此乃類人類(Hominid)的化石。然而，賓州州立大學之Eckhardt博士，在仔細研究完全部有關此類化石之後說：「根據這些化石牙齒的大小，似乎顯示不出在中新世末期與鮮新世初期的舊世界攀援猿(Old world dryopithecine)化石中曾有過不同品種的猿人，這些化石也不能證明在上述時代中曾有過不同品種的類人類(Hominid)存在，除非所謂類人類只是指任何一個正巧有小牙齒及小面龐的猿而言。化石的猿人如拉瑪猿雖然可能在進化史上是類人類的祖先，是一脈演變下來的，但是，從形態學、生態學及行為學上看，他們卻一直是猿。」（註1）所以，這些化石很可能只是同一類已絕種的猿中的幾個特例而已，它們當然不能被視為人的祖先。牠們的特殊牙齒可能與牠們所吃的食物有關，而非因與人類有宗親關係之故。'
                  },
                  {
                    title: '(三)南方人猿 (Australopithecus)',
                    content: '這名詞（意為南方的猿）被用於相當多的化石，其中大多數為李奇魯(Louis Leakey)及其同事在東非洲發現的。除了命名為南方人猿之外，其餘被分類在這一羣中的還包括東非南方人猿屬(Zinjanthropus)、準人猿屬(Paranthropus)、南非人猿屬(Plesianthropus)、(Telanthropus)與巧手人(Homo habilis)等。\n\n南方人猿被認為約生存於兩百萬至三百萬年前，他們已直立行走，並已使用粗簡工具。不過牠的大腦僅有五百公克，與一些猿猴相同，牙齒則與拉瑪猿相同。很多年來，人類學家對南方人猿的看法意見分歧。有些人認為它是人類的祖先，另一些人則認為它是進化的死巷。不過，這爭論似乎已因李奇理(Richard Leakey)最近的發現而解決了。李奇理是李奇魯的兒子，繼承父志，他發現了好幾套新的、幾乎完整的南方人猿的遺骸，這些發現也帶來了一些重大、改革性的解釋：「南方人猿的四肢骨化石一向極為稀少，但李奇氏現已擁有很多標本，這些化石顯示南方人猿是長手臂、短腿、以指關節着地行走的，而非現在許多考古學家所相信的直立行走的。」（註2）換言之，南方人猿非但有像猿一樣的大腦，看起來、走起來也像隻猿，它無疑是與拉瑪猿一樣，只是個已絕了種的猿。牠牙齒的特殊狀況，與拉瑪猿一樣，可能是由於牠的生活環境以及飲食習慣所致。就這一點看來，現今在衣索匹亞地有一種現存的狒狒（學名Theropithecus galada）就具有與拉瑪猿及南方人猿非常相似的牙齒和牙床，這「像人」的牙齒和牙床顯然與其生活環境以及食物有關，而非表示它是人類的近親！'
                  },
                  {
                    title: '(四)直立猿人 (Homo erectus)',
                    content: '好些化石人現在都被分類為直立猿人，這包括名氣頗大的爪哇人、北京人、「Heidelberg」人及大猿人(Meganthropus)。一般相信他們存在於五十萬年前，可以直立行走，並具有約一千公克的腦，而且已發展了粗淺的文化，能使用簡單的工具及武器。\n\n說得輕一點，支持這說法的證據是很有問題的。爪哇人隨後為其發現者所否認；北京人的骨骸在二次大戰中失了蹤，無法鑑定；「Heidelberg」人其實只找到一個大牙床；而大猿人僅有兩個下牙床骨及四顆牙齒，並被很多人歸類於南方人猿屬中。不過，這種類型的化石顯然已在世界其他的地方被發現過。很可能直立猿人就是真的人，只是由於近姻、不良營養以及惡劣的環境而使其形態與文化皆呈退化的現象。\n\n無論如何，最新近發現的直立猿人的遺骸，已顯示出它不可能為現化人進化過程中的祖先。請讀下文：「在澳洲發現了一萬年前埋於地下的直立猿人的頭顱骨，這發現顯示，當世界各地已有智慧人(Homo sapiens)正從打獵及採集為生轉變為農耕畜牧時，在澳洲卻仍有直立猿人游來盪去」。（註3）腦容量900至1100公克是在人腦範圍之內，只是偏小一些而已。而且，腦子大小與智慧高低並無直接關係。Pilbeam氏就說：「其實，腦子大小並不代表什麼，因為這只反映出腦的內部組織有了很多不同層次的改變而已。」（註4）'
                  },
                  {
                    title: '(五)尼安得塔爾人 (Neanderthal man)',
                    content: '所有被稱為「失去的一環」中最具盛名的就是尼安得塔爾人了，一百多年來牠被想像為姿態傴僂、性格凶暴、眉脊濃高與習性粗鹵的傢伙。現在很多這種人的殘留骨都可得到，而且已毫無疑問的被認定是真正的人類，是智慧人(Homo sapiens)，他們與現代人的差異，並不多於現代人中各種種族間之差別。他的腦的大小顯然是屬於人類的，Dobzhansky氏就說：「智慧人中的尼安得塔爾人其平均顱腔容量和現代人的相等或更大。不過，顱腔容量及腦的大小並非決定智慧或智能的準則。」（註5）\n\n至於尼安得塔爾人軀體傴僂的原因，大部份人類學家現在認為，可能是關節炎或軟骨症等疾病所致。Ivanhoe氏在自然(Nature)刊物中說：「尼安得塔爾人之所以長相如此，並非因為他與猿有關，而是因為他有軟骨病。他們活在地球上的三萬五千年中，他們的食物中絕對的缺乏維他D。」（註6）尼安得塔爾人已會種花、設計精緻的工具、繪畫、有宗教活動、並安葬屍體，現在甚至有些佐證顯示他們或他們的先輩已有文字。哈佛大學Peabody博物館的Marshack氏最近以顯微鏡仔細研判一塊蓋滿符號篆刻的十三萬五千年前的牛肋骨後宣稱：「以篆刻的符號傳遞消息，在人類的歷史上可追溯至十三萬五千年前，較之尼安得塔爾人的五萬年更早，這是哈佛大學Peabody博物館的Marshack氏最近以顯微鏡仔細研判一塊蓋滿符號篆刻的十三萬五千年前的牛肋骨後的宣稱。他的研究結果指出那是一種原始『文字』，其型態和在其後七萬五千年的型態有極明顯的類育和源同關係；……這表示當時曾有一個綿延數萬年的篆刻文明。」（註7）'
                  },
                  {
                    title: '(六)現代人 (Modern man)',
                    content: '與一般的看法相左，許多證據都顯示現代人與其假想中（存在與否都還有問題）的祖先是同時存在的。一九七二年十一月的科學新聞(Science News)如此報導：「去年李奇氏與其同事找到三塊下頜骨、腿骨及四百多件人造的石頭工具。這些標本的主人被認定為猿人屬Genus Homo，並被鑑定為二百六十萬年之久。」「李奇氏更進一步的形容整個顱骨的形狀與現代人的極為相似，並不具有直立猿人突出的眉脊及厚骨那些特徵。」「除了這些尚未定名的顱骨外，這次的發掘還找到了另外兩個人的幾根腿骨。很令人意外的，這些化石顯示出人所獨具的雙足行走方式，至少在兩百五十萬年前就已存在。」（註8）\n\nSchiller氏對目前人類學家間的混淆觀念呼籲說：「人的沿革不應再被視為是一個連續的鏈鎖，其中斷了些環，而應視為一錯綜複雜的籬枝，其枝榦相互交錯，反覆纏繞，新的品種不斷產生，其中大部份已經死去……很可能我們並不是從以前所認為的人種進化而來，乃是從我們自己的一宗直接延續下來的。」（註9）\n\n如今人的起源開始被承認是遠早（從地質學上說，以正統地質年代系統來看）於先前所想的。一八六○年及一八六三年在意大利的Castenedolo及Olmn兩地曾找到顱骨，兩者皆被鑑定為現代人的顱骨，但卻是在未經擾動過的鮮新世地層中找到的。一八八六年在美國加州找到的Calavera顱骨，也是在鮮新世地層中挖出，而且也是一個發育完全的現代人的顱骨。從實際的化石資料來看，人一直都是人，而猿一直是猿，二者間並沒有中間型，就好像在其它各大類之間找不到中間型的生物化石一樣。當然，這就是創造論對人的起源問題的明確預測。'
                  },
                ].map((item, i) => (
                  <div key={i} className="border border-blue-100 rounded-lg p-4 bg-blue-50">
                    <h4 className="font-semibold text-blue-800 mb-2 text-sm">{item.title}</h4>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 二 */}
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">二、語言與人種</h3>
              <p className="text-gray-700 leading-relaxed mb-3">進化論者不僅把進化應用於人的起源，也把它應用於人類的歷史、社會、文化甚至經濟與政治制度，認為這些也都是從一種型態自然演變成另一種型態。其實，進化論者與創造論者最大的不同，乃在於他們對社會科學的見解，因為這直接影響到人的行為與其日常活動。如果人只是個自然偶發的產物，那他就與其他動物一樣，沒有特殊生存的意義與目的。</p>

              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-blue-800 mb-2">人種觀念的起源：進化論 vs. 創造論</h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">把人當作生物羣中之一種來看，進化論者把人也細分為許多「副種」(Subspecies)或稱為「人種」(Races)，正如把其他動物分類一樣。從進化論的角度看，一個人種是一個新的品種，如果這個品種在生存競爭中是優者，則得以延續，而其他人種則會減少，如是則終久將演化出新的或較好的人種。直立猿人(Homo erectus)若可能進化成智慧人(Homo sapiens)，則以此類推，有朝一日，智慧人將可能進化為超人(Homo supremus)。</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">這種觀念，在十九世紀的進化論學者中特別得勢，因而產生出一些怪異的哲學如社會進化主義，窮兵黷武的帝國主義，以及尼采的種族歧視主義。達爾文的「物種起源」中的自然淘汰論用了這樣一個具挑釁性的副題：「在生存競爭之下，只有優秀的種族（民族）會存留下來。」達爾文在一封已被印行的信中說：「比較文明的白種人(Caucasian races)在其生存競爭中，已勝過了較劣的土耳其人種；環觀世界，無數低等的人種不久將會被較高等、較文明的人種所取代。」（註10）Thomas Huxley說：「任何一個有理性的人，明察事實之後，一定會相信一般黑人絕非白人之同等，更不可能高於白人。」（註11）</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">現代的進化論者，一般而言，並不以為某一人種較另一人種更為優越或低下。但「種族」這個觀念，卻是源起於生物進化論，這是現代的進化論學者所承認的。Simpson氏曾說：「人的種族之不同，其意義正如其他哺乳類動物的品種加以細分一樣。」（註13）</p>
                <p className="text-gray-700 text-sm leading-relaxed">相反的，創造論中，以類(Kind)為創造之基本單元，就人而言，為人類；就狗而言，雖有許多不同品種之狗，卻來自同一始祖——狗類，而且不同品種的狗可以交配，也可以回溯恢復始祖狗的樣式。同樣的，不同人種也是源自相同的被造始祖，然而基本上各人種仍是一個生物單元。</p>
              </div>

              <div className="bg-indigo-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-indigo-800 mb-2">人種差異的形成：突變 vs. 孟德爾隱性特徵</h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">不同的人種如何演變而來？若從進化論的角度，外表迥異之不同人種是因何產生？從外表看來，不同的人種必定有過極端不同之歷史背景，經過分離(Segregation)、突變(Mutation)、揀選(Selection)與適應(Adaptation)，否則不會產生如此衆多之不同人種。耶魯大學的Linton氏曾這樣說過：「從對許多不同品種生物的觀察中，可見到以小羣方式羣居且近親交配是使突變固定、使進化加速之最理想環境。一般而言，愈是近親交配，愈容易藉遺傳之突變而產生新品種。」（註14）</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">但問題是，突變是有害無益的，在近親繁殖的小羣中，遠在任何想像中的有益突變會發生之前，有害的突變很可能早已把小羣毀滅掉了。</p>
                <p className="text-gray-700 text-sm leading-relaxed">創造論者也可以同意Linton氏的說法，只是Linton氏所用的「突變」一詞，需要以「孟德爾隱性特徵」(Recessive Mendelian characteristics)取代。若是在一個大羣體中，其遺傳基因可以自由交配，這羣體只會有某些顯性特徵存在。每一生物的遺傳性格都由其所含DNA決定，但要使任何隱性性格(Recessive genetic characters)顯露，則必須有離羣獨居的小羣而且近親繁殖多代才會出現。這種觀念倒與創造模式符合——由於造物主的遠見，祂賦予每類生物很大的潛能，在面臨不同環境時，可以適應、並保存該類的生命。</p>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-blue-800 mb-2">語言：人與動物之間最無法銜接的進化鴻溝</h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">種族之間的最大區別不是外觀，乃是語言。若二族之間，語言不通，則不可能使他們共事或通婚。語言不同會有效的造成人類分散，別無它法。</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">以聲音表達個人抽象的意念、與別人溝通思想，是人與動物最不相同之處。動物的獸性與人的理性、動物之咆哮和吼叫與人有智慧的語言，實在有天壤之別。連堅守進化論教條的Simpson氏也說：「人類的語言與其他動物的表達方式截然不同。以最接近人類的動物的發音，與人的言語比較，其他動物的語言充其量不過是表達牠體力或情緒的狀況，並不能發揮真正語言的功效：如討論、意會、或作象徵性的表達。」（註15）</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">動物的噪音如何演化為人的語言？這實在是進化的一大難解之謎。許多科學家研究過猩猩與猿猴的語音；也曾大事渲染此類生物的語言潛力，然而一位專攻此學的先進曾作以下的結論：「愈是瞭解動物的語音，反倒愈不能瞭解人的語言如何從整個系統中脫穎而出。」（註16）</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">Linton氏曾說：「語言的使用與人超奇的思想能力有極密切的關係，人有與別人溝通的能力，此點有別於其他禽獸，而且此能力遠超過其在學習或思想上與禽獸之別。……然而人是唯一能將抽象的觀念傳達於他人的動物。……奇妙的是，其他哺乳動物均不能像人一樣模仿聲音。……在這一方面，人實在是非常獨特的動物。」「我們絲毫不知語言發展之初的情形。」（註17）</p>
                <p className="text-gray-700 text-sm leading-relaxed">Simpson氏：「今人可追溯到的最古老的語言，就進化的眼光來看，其實已經非常現代化，而且非常細緻，也非常完整。」（註18）就進化的理論來解釋，各種語言的起源看起來是毫無線索可尋，因為自有人類歷史記載以來，各種極度複雜的語言就已存在。一般所稱「原始」的語言並不能點明語言的由來，因為它們的文法常較文明人所說的更為複雜。按照創造模式，因其認定有一位造物主，而且其創造是有目的、有計劃的，則對語言問題可有清楚的交待。</p>
              </div>
            </div>

            {/* 三 */}
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">三、古代的文化</h3>
              <p className="text-gray-700 leading-relaxed mb-3">標準的進化論認為早期的人野蠻無知，穴居，並以打獵採集為生，漸而以簡單方法耕種、畜牧，更進而聚居村落，形成小型社會，最後發現金屬的用途，終於演變成「文明」人。創造論者則認為人在被造之初，即發育完備，已具有高度智慧與能力，上帝雖然沒有備妥城市以及各種科技之設備，但是卻已托付給他們責任與能力以使用大地，利用天然資源，以配合上帝創造之目的。</p>

              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border border-blue-200 px-3 py-2 text-left text-blue-800">進化年代</th>
                      <th className="border border-blue-200 px-3 py-2 text-left text-blue-800">文化</th>
                      <th className="border border-blue-200 px-3 py-2 text-left text-blue-800">生活方式</th>
                      <th className="border border-blue-200 px-3 py-2 text-left text-blue-800">器具</th>
                      <th className="border border-blue-200 px-3 py-2 text-left text-blue-800">時間</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Eolithic 早期石器時代', '似動物的', '從手至口', '自然石頭', '三百萬年前'],
                      ['Paleolithic 舊石器時代', '野蠻殘暴的', '食物收集', '敲擊後之石頭', '一百萬年前'],
                      ['Mesolithic 中石器時代', '化外人的', '雛形農作', '木石合用', '一萬五千年前'],
                      ['Neolithic 新石器時代', '有文化的', '村落經濟', '琢磨石器', '九千年前'],
                      ['Copper Age 黃銅時代', '都市化', '有組織政體', '琢磨石器', '七千五百年前'],
                      ['Bronze Age 青銅時代', '都市化', '有組織政體', '金屬', '七千年前'],
                      ['Iron Age 鐵器時代', '都市化', '有組織政體', '金屬', '五千年前'],
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                        {row.map((cell, j) => (
                          <td key={j} className="border border-blue-100 px-3 py-2 text-gray-700">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-xs text-gray-500 mt-1">表中所示年代為一般進化論學者所接受，但創造論認為此等年代亟待修正。</p>
              </div>

              <div className="bg-indigo-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-indigo-800 mb-3">創造模式對古代文明的五項預測（均被考古學支持）</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  {[
                    '(一)人類文明的起源應在中東，近阿拉雷山(Mt. Ararat)地區，或近巴比倫（傳統歷史記載指出此乃洪水時代遺留下的人居留之處）。這地區恰恰位於洪水以後露出水面之陸地的地理中心。',
                    '(二)散居之人，無論在何處定居，必然先以短暫的「石器」時代開始。',
                    '(三)石器時代之後，會迅速的出現都市化，以及其他文明的跡象。',
                    '(四)每一地區都很早就出現高度技術性的成就，但卻常因遭遇外侮或內部問題而沒落。',
                    '(五)世界各地文明進步的快慢程度大致上是一樣的，距分散中心較近者可略較進步。',
                  ].map((item, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="text-indigo-600 font-bold flex-shrink-0">•</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                {[
                  {
                    title: '(一)陶器',
                    content: '陶瓷藝術之發明，用以製造陶器、房舍、雕像，實為很早以前的事，而陶器亦成為考古學家的瑰寶。「早在公元前九千年，中東地區就有陶製人像。」（註21）'
                  },
                  {
                    title: '(二)農業',
                    content: '培育動植物乃是人類積蓄糧食的第一要務。「由目前分佈狀態來探討，早期世上植物培育的搖籃是位於伊朗和伊拉克的薩果斯山脈(Zagros Mountains)的西面山腳下，土耳其南邊的大若士(Taurus)，以及北巴勒斯坦的加利利高地一帶。」（註22）「粗略的看來，目前可得的佐證顯示人類耕穫、養殖以及食物之收聚皆於公元前九千年左右即已在近東達矣。」（註23）'
                  },
                  {
                    title: '(三)畜牧',
                    content: '動植物的養殖被認為起源於同時、同地，這是很有意義的一點。「根據在Shanidar山洞及鄰近的Zawi Chemi Shanidar所找到的資料看來，在公元前九千年就有綿羊的養殖了，這年代比起狗或山羊的養殖年代早了很多。」（註24）首先被養殖的動物大概是綿羊，這綿羊不單是用為食物及衣着，也用於獻祭。'
                  },
                  {
                    title: '(四)冶金',
                    content: '金屬之使用，雖然不太可能有木、石、象牙、鹿角或泥那麼久遠，但也十分的早。「最古老的人製的金屬品是一些在北伊拉克找到的銅珠，被鑑定為公元前九千年之物。」（註25）像黃銅等金屬在初期使用時是冷塑的，但鎔鑄及合金的藝術隨後即已發展。「大約在公元前五千年之後不久，在形成半月沃地(Fertile Crescent)北端山區中，人們發現把某些藍色和綠色的金屬適當的加熱可產生金屬；換言之，鎔鑄已被發現。」（註25）冶金知識也很可能早已為洪水前的人類所有，洪水之後的人雖具有這些知識，卻仍須等待礦源、建礦及鎔鑄等的配合。'
                  },
                  {
                    title: '(五)城市與鄉鎮',
                    content: '定居而且有組織的社區生活，毫無疑問地是緊隨着以上所列舉的各項文明而發展的。Adams氏說：「大部份的文明發展中，城市生活都是在很早就開始了的，最古老的文明與最早的都市，如古時的米索波達米亞(Mesopotamia)，無疑的都符合這一點。」（註26）Cambel氏及Braidwood氏說：「我們現在知道，在公元前七千五百年前，近東某處地區的居民其文化發展已經到了懂得生產、種植、畜牧，而非僅是漁獵與採集；他們也已具備農村式的生活型態。」（註27）這些經由考古學家挖掘出來的「簡單農村」已具有相當巍峨的石砌建築物，石舖的街道，犁與輪車，以及各種泥或石製的裝飾品與器具。'
                  },
                  {
                    title: '(六)文字',
                    content: '一直到最近，大部份的證據都將文字之起源年代放在其他上述文明產物之後，但是，文字的起源之處仍是在地球上的同一地區。Linton氏說：「文字亦為近東地區之發明，這發明比金屬之使用對文明之貢獻更大。……文字在五、六千年前差不多同時出現在埃及、米索波達米亞及印度山谷。」（註28）Albright氏曾說：「在公元前四千年左右索瑪瑞亞人已創始最古老的都市社會，而且已有了高度進步的文化。」（註29）\n\n碳同位素的估定年代是基於其平衡模式而定，是個不正確的模式，會產生高估的年代。Renfrew氏說：「近東最早的村落，其年代應追溯至公元前八千年，而非四千至四千五百年」（註30）。如果用不平衡模式來校正，這公元前八千年將修正到略低於五千年，假如再以地球磁場衰退率來加以修正，則碳同位素所定的食物生產、冶金及都市化等之年代，就會與文字始源的歷史年代非常接近了。\n\n世界各地的發現，在時間上皆與此模式相符。Coon氏說：「非洲獨具有成千成萬在石面上繪畫和篆刻的古跡……它們的年代可能遠自公元前八千年以迄近代，整個非洲從大陸之一端至另一端所顯示的是連貫一致的藝術風格。」（註31）在亞洲，Linton氏說：「根據史記內涉及天文的記載，中國的年代，較有把握的部份可追溯至公元前二千二百五十年。」（註32）Ferdon氏說：「人類在太平洋島嶼最東邊的Marquesas羣島最早有人定居的年代被估計為公元前一二二年，而在最西端的Samoa島則為公元九年左右。」（註33）紐西蘭在公元一千年才有人定居。'
                  },
                ].map((item, i) => (
                  <div key={i} className="border border-blue-100 rounded p-3 bg-white">
                    <p className="font-semibold text-blue-700 text-sm mb-1">{item.title}</p>
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{item.content}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2 text-sm">最近的考古發現：古代人的文明程度令人震驚</h4>
                <p className="text-gray-700 text-sm leading-relaxed">在南非介於Swaziland與Natal邊界所發現的洞穴，這洞穴在十萬年前曾被類似現代人的人類居住過。「這些邊界洞穴中的人已學會採礦，也會製造一些相當講究的工具，包括一些篆劃刀，其刀甚至到現今仍鋒利得可以裁紙。他們已會用骨塊計算並記錄；已有宗教信仰，相信死後尚有來生。」（註34）哈佛大學的Marshack氏曾找到人類在十三萬五千年前就可刻劃符號的證據，這些符號在基本上即是一種文字。（註35）\n\n顯然的，根據創造論來看，這些年代是需要大大的修減，然而，先後的年序仍甚具意義，而這告訴我們古代人（比尼安得塔爾人還古老的人）不但是真正的人，而且是文明和技術都很高的人。而且，當他們離開原來集居點分居之後，在短短幾百年中，已能將他們的技巧與文明遍佈全球。因此，就人類早期歷史而言，創造模式至少和進化模式一樣（其實好得多）能符合人種學、考古學、語音學及其它有關科學之事實。</p>
              </div>
            </div>

            {/* 四 */}
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">四、宗教的起源</h3>
              <p className="text-gray-700 leading-relaxed mb-3">人類還有另一重要的屬性，使他在生物界中與衆不同，那就是他的「宗教的天性」。這個特性即使在其它最高等的動物中也完全沒有。如前所述，即使在十萬年前邊界洞穴中的人也已有宗教意識。在這段中，我們並不希望從宗教的角度來討論宗教，而是從科學的角度討論。我們將不討論聖經的章句或宗教的教義，也不討論任何一種宗教。然而為了要有效的討論人類起源的問題，對於人的本性，以及其意義必須加以詳細探討。</p>

              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-blue-800 mb-2">進化論本身就是一種宗教</h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">事實上，無論是從進化或創造而來，人畢竟是個道德的、唯美的、理想主義的、且具宗教性的個體；而動物卻不是。這是件科學必須面對並解釋的客觀事實，也是教育界必須探討並面對的重點。我們是用非常廣義的說法來看「宗教」一詞。它包括倫理、價值或人生的終極目的等觀念。事實上，從這角度看，進化論與無神論也都是一種宗教信仰。這就是創造論者反對學校中只教進化論的最有力理由。因為那等於是把他們的宗教——包括倫理、價值及人生目的一套看法——硬塞灌輸給年青人。</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">進化論根本上是一種宗教，這一點是美國人本主義社(American Humanist Association)所公開承認的：「人本主義相信人自己決定其命運，這是一種建設性的哲學思想，一種無神論的宗教以及生活方式……美國人本主義社是一非營利、可免稅的組織，於一九四○年在伊利諾州為教育及宗教之目的而組成的。」（註36）許多顯赫的進化論者如赫胥黎(Julian Huxley)、穆勒(H.J. Muller)、賀蘭(Hudson Hoagland)及其他人都被列為這組織的領導人物。創始人之一是杜威(John Dewey)，他的教育哲學深深的影響了教育政策。</p>
                <p className="text-gray-700 text-sm leading-relaxed">大法官Fortas氏在他的法律註釋中說：「在我們民主政體下的政府，……不論是州政府或聯邦政府，都必須在宗教理論上保持中立，……不可協助、採納或推廣某一宗教以抵制另一宗教。」（註37）因此，如果進化論在學校中教，創造論也應該教，反之亦然。而且它們應該同等地教，不應宣揚一種而貶抑另一種。</p>
              </div>

              <div className="bg-indigo-50 rounded-lg p-4">
                <h4 className="font-semibold text-indigo-800 mb-2">人的道德天性：進化論 vs. 創造論的解釋</h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">進化論如何解釋人的道德天性？杜威的辯解：「毫無疑問的，道德觀念之發展以及宇宙其它方面之發展早在人類及人類社會形成以前，就已迥然相異的形式並存，不過據我所知，二者間之差別一言以蔽之，就是宇宙的演進力已發展成為人的意識。動物的『變化的傾向』(Tendency to vary)發展成為人的『前瞻意識』(Conscious foresight)；動物非意識的適應及求生存的潛能——是藉偶然及機遇而留存下的——成為人的有意識的思考及試驗潛能。」（註38）</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">上面的這段話，讀起來似乎振振有詞，但卻是後語不對前言，因為重要的問題仍未解答。問題是：動物的直覺本能究竟是如何演變成為人的意識的？偶然和機遇的演進方式究竟是怎樣將動物非意識的適者生存潛能轉換成為人的有意識的思考力的？這裏有一個極大的鴻溝，假想中的原因看起來極不可能產生這種後果。</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">Hoagland氏更說：「人類自己與其行為純係突變加上天擇的進化產品。無目標的天擇產生出有目標的人類行為，而後者更能製造出有獨特功用的電子計算機。」（註42）一個人可以這樣相信，但是否因為有人這樣說，事情就真的是這樣子的呢？這到底是科學呢？還是對魔術的療信呢？如果一個人願意相信只要想有馬，就可以有馬，願意相信漫無目標、相互衝撞的粒子只要時間足夠，就能夠產生有意識、情感、志願、道德及宗教的行為；他的這種信念可以列為他的信條，但是他卻無權把幻想叫成科學，並假借科學之名，把這理論灌輸到年輕人的腦中。</p>
                <p className="text-gray-700 text-sm leading-relaxed">創造模式又如何呢？創造模式認定有一個全能、全知、有位格、有目的、有道德的創造者。這創造者創造一切，包括人類在內。創造者——那第一「因」——顯然能創造有宗教意識的人，使其有智慧、目的、以及道德的天性。創造模式直接的與所有可見的事實相符，不需外加囁嚅合混的解釋。事實上，本書已經說明創造加上大洪水的模式符合所有科學和經驗上的事實，遠較進化模式為佳。由於上古歷史是無法觀察或重演的，因此，兩者皆不能確切的被證明或否定，但創造論較諸進化論更能順理成章的與現存世界符合，一如本書所試圖證明的。本書的目的就是要提供支持創造論所需之事實，讓每個人對這些問題的正反兩面都應有足夠的知識和研判，才能作正確的抉擇。</p>
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
                '化石記錄沒有提供「失去的一環」：拉瑪猿和南方人猿的化石特徵顯示它們始終只是猿（長手臂、短腿、指關節着地行走、腦容量500公克）；直立猿人很可能是退化的真人；尼安得塔爾人是毫無疑問的真正人類（智慧人）；現代人的化石與其所謂「祖先」同時出現在地層中——這一切完全吻合創造論的預測：人一直是人，猿一直是猿，二者間無中間型。',
                '「種族」觀念根源於生物進化論，十九世紀的進化論者（包括達爾文本人）曾在信件中公開表達種族優越論。創造論的「類」(Kind)概念更好地解釋人種多元性：不同人種源自同一始祖，各人種的差異是由於孟德爾隱性特徵在小羣近親繁殖環境中顯現，而非有害突變。各人種在本質上仍是同一生物單元。',
                '語言是人與動物之間最無法以進化論銜接的差異。連進化論者Simpson氏也承認，動物語言只是表達體力或情緒，無法討論、意會或象徵表達。「愈是瞭解動物的語音，反倒愈不能瞭解人的語言如何從整個系統中脫穎而出。」創造論提供了對語言起源唯一清晰的解釋。',
                '考古學的發現強烈支持創造模式：陶器、農業、畜牧、冶金、城市、文字幾乎同時起源於同一地點（近東，近阿拉拉特山/巴比倫一帶），且比進化論所說的早得多。如果用不平衡碳同位素模式加上地球磁場衰退率修正，文明起源的年代將與聖經所記載的洪水後時間框架非常吻合。',
                '人的「宗教天性」是科學必須解釋的客觀事實。進化論（人本主義）本身就是一種宗教（美國人本主義社自己承認），因此在公立學校中只教進化論等於違反了政教分離原則。創造論能以「全能、有位格的創造者直接創造了有道德意識的人類」這一簡單事實解釋宗教天性，無需借助「無目標的天擇產生有目標的行為」這類自相矛盾的說法。',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-gray-700">{point}</p>
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
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">拉瑪猿爭議的後續：一個被撤回的「祖先」</h4>
              <p className="text-gray-700 leading-relaxed">本書寫作時（1970年代），拉瑪猿被普遍視為人類最早的祖先（約1400萬年前）。然而1970-80年代，隨著更多化石的發現和DNA比對技術的進步，科學界逐漸放棄了拉瑪猿是人類祖先的說法。今天，拉瑪猿（及其相關的Sivapithecus）被一致認定為現代猩猩（紅毛猩猩）的祖先，而不是人類的祖先。本書作者在當時就質疑這個分類，結果被後來的科學發展所印證——這本身就是一個關於科學誠實性和謙遜性的重要教訓：當前「主流共識」可能在幾十年後被推翻。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">南方人猿「露西」的爭議</h4>
              <p className="text-gray-700 leading-relaxed">1974年在衣索匹亞發現的「露西」（Australopithecus afarensis，約320萬年前）長期被教科書描述為最重要的人類祖先化石。然而爭議從未停止：她的腦容量（400公克）接近黑猩猩；肩胛骨的角度顯示她習慣爬樹；足骨的彎曲程度與黑猩猩相近。2015年另一個南方人猿化石「小腳」(Little Foot, 367萬年前)的研究者Berger指出，早期人族化石的多樣性遠超過我們的想像，任何單一化石都不能代表人類演化的「主線」。本書作者早在1970年代就指出這方向。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">尼安得塔爾人：現代人的親戚，不是我們的祖先</h4>
              <p className="text-gray-700 leading-relaxed">2010年，尼安得塔爾人基因組定序完成（Svante Pääbo，2022年諾貝爾生理醫學獎得主）。結果令人震驚：現代非洲以外的人類，帶有1-4%的尼安得塔爾人基因。這意味著現代人與尼安得塔爾人曾經雜交並留下後代，他們是可以繁殖的同種或近種生物——這與本書的立場吻合：尼安得塔爾人是真正的人類，而不是猿人的中間型。本書在基因科技出現前40年就已提出這個正確判斷，憑藉的是化石形態學的誠實解讀。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「人本主義是宗教」的法律意義</h4>
              <p className="text-gray-700 leading-relaxed">本書引用的Fortas大法官法律見解（宗教中立原則）在美國法律史上有重要地位。值得注意的是，美國第七巡迴上訴法院在1961年的Torcaso v. Watkins案中，大法官認定「世俗人本主義」(Secular Humanism)是一種宗教。如果接受這個判定，那麼在公立學校中把進化論作為唯一的世界觀灌輸給學生，從法律角度看確實值得質疑。本書的立場是：無論從哪個角度，兩種觀點都應該公平呈現，讓學生自行判斷——這在教育哲學上是成熟且負責任的立場。</p>
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
              '你在學校曾學過哪些關於人類起源的內容？讀完本章之後，你對那些教材有什麼新的看法？有哪些具體的事實讓你感到意外或值得深思？',
              '本章指出「拉瑪猿一直是猿」、「南方人猿走路像猿」、「尼安得塔爾人是真正的人類」——這三個判斷現在都已被後來的科學研究所支持。這對你思考「科學主流共識」有什麼啟示？',
              '本章說進化論把種族差異解釋為「生物進化的品種分化」，而達爾文本人在信件中曾表達明顯的種族優越論。今天的進化論者雖然放棄了種族歧視，但「種族是進化品種分化的結果」的概念仍被接受。你認為這個概念本身有沒有隱藏的問題？',
              '語言是人與動物之間「最無法以進化論銜接的差異」。Simpson氏承認最古老的人類語言已經非常複雜完整。如果語言無法從動物語音進化而來，創造論給出了什麼樣的解釋？這個解釋說服你嗎？為什麼？',
              '本章說「進化論（人本主義）本身就是一種宗教」，並主張公立學校應該同時教授創造論和進化論。你覺得這個立場合理嗎？在你的教育背景中，你是否感受到某種世界觀被當作「科學事實」而另一種被壓制？',
              '人的「宗教天性」——道德感、審美觀、死後生命的盼望——是所有人類文化的共同特徵，卻在動物中完全不存在。進化論如何解釋這件事？創造論如何解釋？哪個解釋對你更有說服力，為什麼？',
              '本章最後說，本書的目的「並不是想說服老師或學生去相信創造論，或接受基督教或其他任何宗教……這些決定當然是很重要的，那是每一個人必須向自己以及造物主（如果創造論是真的話）負責，並面對的問題。」你怎麼看這段話的謙遜和誠實？這種態度如何影響你對這本書的整體評價？',
            ].map((q, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0 min-w-[20px]">{i + 1}.</span>
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
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🦴 化石分類練習：猿還是人？</h4>
              <p className="text-gray-700 mb-2">本章提到的化石可以用兩個標準判斷：腦容量和行走方式。試著對以下做出你的判斷：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>拉瑪猿：牙齒像現代猿，化石學家說「從形態、生態、行為看，一直是猿」→ 你的結論？</li>
                <li>南方人猿：腦500公克（同猿猴），長手臂、短腿、指關節着地行走 → 你的結論？</li>
                <li>尼安得塔爾人：腦容量等於或大於現代人，會種花、繪畫、埋葬死者、有宗教 → 你的結論？</li>
                <li>把你的結論寫下來，和家人或朋友討論：科學界改變了嗎？（提示：查一查2010年尼安得塔爾人基因組研究）</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🗣️ 語言的神奇：一週語言觀察</h4>
              <p className="text-gray-700 mb-2">本章說語言是人與動物「最無法銜接的差異」。這週做一個有趣的觀察：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>觀察寵物（或YouTube上的動物視頻）：牠們能表達哪些概念？（食物、危險、呼叫同伴）</li>
                <li>牠們能不能討論「昨天」、「明年」、「希望」、「為什麼」？</li>
                <li>想一想：你今天說過的最「抽象」的句子是什麼？（例如：「我覺得這件事對我有意義」）</li>
                <li>默想：這種能力是怎麼來的？是「突變」，還是「造物主的設計」？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🏺 古代文明起源地圖</h4>
              <p className="text-gray-700 mb-2">本章說所有主要文明（陶器、農業、冶金、文字）幾乎同時起源於近東（今日伊朗、伊拉克、土耳其一帶）。試著在地圖上標出：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>阿拉拉特山 (Mt. Ararat) 在哪裡？（土耳其東部、亞美尼亞邊境）</li>
                <li>薩果斯山脈 (Zagros Mountains) 在哪裡？（伊朗西部）</li>
                <li>古代美索不達米亞 (Mesopotamia) 在哪裡？（今日伊拉克）</li>
                <li>思考：為什麼這個地區這麼特別？創世記第11章怎麼說這個地區？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 寫一段創世記1章27節的默想</h4>
              <p className="text-gray-700 mb-2">「神就照著自己的形像造人，乃是照著他的形像造男造女。」（創1:27，新標點和合本）</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>本章說的「宗教天性」、「道德感」、「語言能力」——這些和「上帝的形象」有什麼關係？</li>
                <li>你認為「按照上帝的形象被造」對你的日常生活有什麼意義？</li>
                <li>如果進化論是真的（人是自然偶然產物），這句話對你意味着什麼？如果創造論是真的呢？</li>
                <li>把你的默想寫下100字，下次教會小組時分享</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic text-sm leading-relaxed">「主啊，感謝祢造我這樣奇妙可畏。在閱讀這些化石、語言、文明的證據之後，我越來越感受到：人不只是偶然宇宙中的一粒塵埃，我們是有目的地被造、有尊嚴地被賦予形象的。感謝祢給了我語言，讓我能用言語與祢溝通；感謝祢給了我道德感，讓我能在這個複雜的世界中辨別是非。主，我承認我常常沒有按照祢形象的尊貴來生活，我常常把自己貶低，或者把自己抬高。幫助我找到正確的位置：既知道自己是有限的受造物，也知道自己是被祢珍視的孩子。奉主耶穌的名，阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
