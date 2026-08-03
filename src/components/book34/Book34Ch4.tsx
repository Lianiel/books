import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book34Ch4() {
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
        <p className="text-cyan-700 font-semibold tracking-wide mb-1">第二篇　與人相連</p>
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-700 to-teal-700 bg-clip-text text-transparent">第四章</h1>
        <h2 className="text-xl font-semibold text-gray-700">當我們不能與人相連時</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-cyan-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-cyan-50 to-teal-50 hover:from-cyan-100 hover:to-teal-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-cyan-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <p className="text-gray-700 leading-relaxed">
              不能和人有情緒上依附的人，永遠處於飢餓狀態中。他們有一個不被滿足的需要在心中吶喊，這些人通常經過三種孤立的階段。因為人對「關係」有一種自然的需求，當他們無法與人相連，第一個階段就是抗議。他們抗議沒有「關係」，他們覺得傷心和生氣。如果你懷疑這一點，只要看一個孤單的孩子或一個被棄的失戀者。
            </p>
            <p className="text-gray-700 leading-relaxed">
              孤立者所感受到的痛苦是一件好事，因為它指出一個重要的需求，耶穌在登山寶訓中說：「飢渴慕義的人有福了，因為他們必得飽足。」（太五：6）如果我們的生活已經完美，我們不會尋求神。如果我們不覺得飢餓，我們有可能會餓死，因為我們不吃。
            </p>
            <p className="text-gray-700 leading-relaxed">
              如果孤立太久，沒有解決，抗議者會進入第二階段，就是沮喪和絕望。對需要能被滿足的期望漸漸枯萎，好像植物沒有水一樣。沮喪的人看起來毫無盼望，兩眼無神，肩膀下垂，面容疲累。他們渴望一些得不到的東西。
            </p>
            <p className="text-gray-700 leading-relaxed">
              事實上，這仍舊是一個好的階段。因為沮喪者仍然和自己的渴望有接觸；他們只是感覺他們永遠得不到。「所盼望的遲延未得，令人心憂。」（箴十三：12）沮喪者心憂，因為他們對「關係」的需求得不到回答，但他們仍然感覺到那個需要。
            </p>
            <p className="text-gray-700 leading-relaxed">
              如果沮喪和絕望延長太久，沒有一個人介入使他的孤寂得以抒解，第三個階段就會產生分離。在這個階段的人，不但與自己的需要分離，也與外面的世界分離。他們從根本與自己隔離，甚至不覺得自己活著。
            </p>
            <p className="text-gray-700 leading-relaxed">
              我的一個女病人覺得有一種要割自己的催促。她這樣形容自己的分離感：「如果我不能感覺痛，我就是覺得裡面死掉了，所以我要割自己，以便知道我還能感覺。」這種自我毀滅聽起來很極端，但這的確是保持活著的一種嘗試。她想要知道自己至少在身體上是活著的，因為在情緒上，她覺得已經死了。她是與人分離的。
            </p>
            <p className="text-gray-700 leading-relaxed">
              在社會中比較被接受的人，是像成功的企業家，追求成就、得到獎勵、賺取高薪的人；然而他們的妻子兒女有不同的故事要訴說。
            </p>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">一、不能相連的徵狀</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                以下是一般常見不能與人相連者的徵狀。孤立有許多不同的面具。常常問題表面的背後是缺乏關係所帶來的真正問題。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">沮喪</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                上一章你們看到的裘安就深受沮喪之苦。她形容沮喪「像一片黑暗在內心深處，你好像可以看到」。沮喪是心理上的失去秩序，伴隨著傷感、沒有活力、思想困難、難以集中注意力、胃口特別差或特別嗜食、失眠或特別嗜睡、頹喪絕望之感、自殺的想法，或甚至企圖自殺。沮喪之肇因有可能是一個人想抑制悲傷及怒氣——這是神所給予的兩項要素，用以抗議愛的缺乏。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                沮喪有時候巧妙地以異於裘安所描述的黑色出現。它以灰色面具再現。沮喪的人失去情緒的功能；他們生命的色彩也褪去了。他們的世界看來一片灰沉。許多沮喪的人偏好陰沉的天氣，因為與他們的心情相仿，有時候大太陽天使他們更沮喪，因為陽光與他們的內心形成更強烈的對比。沮喪的人對做事沒興趣，也不喜歡和人在一起。因為社交不能解決他們需要的根本問題，他們在一群興高采烈的人中顯得更疏離。因此他們從社交和人際關係中隱退，這又使他們的孤立更惡化。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">無意義之感</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                不能與人相連的另一個徵狀是覺得沒有意義。孤立的人覺得生命沒有意義，他們急於在活動或事工中找尋意義，然而這卻常使他們更孤立。他們缺乏生命的真正意義，也就是愛。有一位單身男士這樣說：「我努力工作，賺了很多錢，也很成功，但這沒什麼意義。我沒有人分享這一切，我覺得很空虛。」這種無意義的感覺通常發生在人失去關係、又還沒有找到取代者時；在失去時，不但有悲傷，還會走向孤立。他們把自己從人的身邊抽出，甚至可能被驅使有自殺的想法。他們不知道與人不能相連是根本問題。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">罪惡感及壞的感覺</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                更瞭解這個徵狀，我們必須瞭解情緒世界的基本事實：一個孤立的自我，是一個壞的自我。事實上，孤立的人不是壞人；他們只是認為自己壞。一個孤單的人似乎是不被愛的，而這也就是他們詮釋成的「壞的自我」。孤單的人感覺不好或有罪惡感，因為他們感覺不被愛。他們的頭腦這樣解釋：我覺得孤單，因為我不被愛。如果我不被愛，一定是因為我不可愛。我是壞的，否則會有人愛我。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們從別人身上建立自我價值。一個覺得「好」的嬰兒，是被餵飽、換過尿布、又被抱的嬰兒；一個覺得「壞」的嬰兒，是飢餓、尿布溼了、不舒服的嬰兒。這些感覺在人裡面形成對自己的看法。我們在情緒的記憶中都存留這種最早期的思想。當我們孤單時，我們會感覺自己是「壞」的。這造成了許多人的問題，因為他們會感覺好像做了什麼錯事才使自己感覺不好。他們有罪惡感，而想盡辦法去緩和這種感覺。他們認罪、認罪、認罪，他們讀經，參加成人主日學，作義工幫助無家可歸者，然而他們還是不覺得被饒恕。他們之所以不覺得被饒恕是因為問題不在罪，而是孤立與疏離。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">沉溺</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                耽溺是生理上一種強迫性的需要：換言之，某人一定要有某東西才能生存下去，就像酒精、古柯鹼、或一些食物。但也有人沉溺於某種活動，如性、賭博、工作、破壞性的人際關係、宗教、成就、或追求物質主義。然而這些東西和活動永不能使人滿足，因為它們不能解決問題。我們沒有這些東西也可以活得很好，我們實在不需要這些酒精、藥物。然而我們真的需要關係，沒有它我們不能活得很好。記得神在伊甸園怎麼說：「那人獨居不好。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">就像其他徵狀一樣，沉溺也只是真正需要的虛假解決辦法之一，是由私慾來的。正如保羅在以弗所書四章中所說的：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「（外邦人）心地昏昧，與神所賜的生命隔絕了，都因自己無知，心裡剛硬。良心既然喪盡，就放縱私慾，貪行種種的污穢。你們學了基督，卻不是這樣。如果你們聽過他的道，領了他的教，學了他的真理，就要脫去你們從前行為上的舊人。這舊人是因私慾的迷惑，漸漸變壞的。又要將你們的心志改換一新。並且穿上新人，這新人是照著神的形像造的，有真理的仁義和聖潔。」（弗四：18-24）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                治療沉溺的問題需要容易感受並謙卑自己。沉溺者必須承認自己沒有力量，以及對神對人的需要，他們也必須軟化他們的心去面對他們傷害的人，並瞭解自己的私慾。沉溺並非真正的需求，它只是真我需要的代替品。重要的一步就是去找出真正的需求，而它通常以私慾為假面具出現。真正需要中的一項就是與人的相連與依附。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                情緒上孤立的人沒有和人的關係，所以他們只好去尋找別的東西，撒但說服他們，以為他們真正需要的是食物或性，他們整個生命就繞著這些打轉。然而他們真正的需要是要被愛充滿，以及與神與人發生相連。當內心的飢渴被愛的關係滿足時，外在沉溺的驅使就會消失。並非所有的沉溺都由孤立引起，但很多都是。如果一個人無法與人相連，他會去和一個妓女相連，和酒瓶相連，和冰淇淋相連，而內心要求關係的飢渴仍在吶喊。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                有一個沉溺於食物的婦人這樣說：「我記得第一次我選擇打電話給某人而不去吃東西。我可以感覺到拉我走向冰箱的強大力量，但我把它解釋成把我拉向愛的力量，所以我打電話給一位組員，去了她家，我感受到真正的關愛溫暖，我就不再覺得餓了。自從那一次，我就學著這樣做，愈來愈發現我要的不是食物，還是愛。」
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">扭曲的思想</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                記得熱力學第二定律說到，任何系統若不受干擾，經過一段時間，會越來越混亂。這就是情緒孤立時所發生的情形。當人孤立於別人時，他們的憤怒、悲傷和沮喪開始干擾他們的思想過程，他們負荷過重，思想就開始扭曲。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                偏執妄想症是一種心理失序，它的特徵是過分或無理地懷疑別人。這是思想扭曲的形式之一。人內心的孤立是如此之大，他們感覺被痛苦襲擊而必須向外發出。他們害怕別人要害他們而不能相信別人。因此他們躲避別人而更孤立自己。偏執妄想症者不會自行變好。你不能只是告訴他們「改變思想」。這是一個孤立的任務，而孤立就是問題的所在！
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                孤立的人會有各式各樣的妄想，來解釋他們內心的痛苦。他們必須使痛苦合理，而唯一的方法就是想像世界正如他們內心所感覺的。當他們的內心世界改變，他們對外界的認知也會隨著改變。傷害永遠混淆我們的思想，戴維在詩篇七十三篇中說得好：「因而我心裡發酸，肺腑被刺。我這樣愚昧無知，在你面前如畜類一般。」（詩七十三：21-22）當戴維受傷，他說自己「愚昧無知」並且「如畜類一般」。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">虛空</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                人若與神與人沒有相連會感到非常空虛。空虛是人類最痛苦的一種情緒。空虛的人不能感覺自己對愛的需要，也不能感覺別人對他的愛。也許有人全然愛他們，但除非他們感覺愛的需要，並對愛有回應，他們仍會感到空虛。只有當他們感覺愛的需要並回應之，他們內心的愛才會開始成長。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">保羅說明了和人相連能產生何等的安慰：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「我們從前就是到了馬其頓的時候，身體也不得安寧，周圍遭患難，外有爭戰，內有懼怕，但那安慰喪氣之人的神，藉著提多來安慰了我們。不但藉著他來，也藉著他從你們所得的安慰，安慰了我們。因為他們把你們的想念、哀慟、和向我的熱心，都告訴了我，叫我更加歡喜。」（林後七：5-7）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅向我們顯示了道成肉身的愛，這愛也能幫助我們。保羅有一個需要：他很沮喪。神派提多來安慰他。神透過人際關係來觸摸保羅。神安慰保羅，但提多卻是神伸出的手臂。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                比比神的方法和有些人的方法。這些人告訴受傷的人他們不需要別人；他們只需要禱告讀經！這就像砍斷神的手！雅各提醒我們人不只有靈性的需要：「若是弟兄，或是姊妹赤身露體，又缺了日用的飲食，你們中間有人對他們說，平平安安地去罷，願你們穿得暖吃得飽，卻不給他們身體所需要的，這有什麼益處呢。」（雅二：15-16）許多時候人有情緒上的需要，而非只有身體的需要。他們需要一個人出現在面前，這就是神愛他們的方法。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                但是受傷的人必須回應別人的愛，只有這樣相連才會填補內心的空虛。與人相連的經驗會使人被充滿。聖經一再說到充滿，保羅在以弗所書這樣說：「使基督因你們的信，住在你們心裡，叫你們的愛心，有根有基，能以和眾聖徒一同明白基督的愛是何等長闊高深，並知道這愛是過於人所能測度的，便叫神一切所充滿的充滿了你們。」（弗三：17-18）我們空空的來到世界，神的愛使我們充滿。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">悲傷、害怕親密、不真實感</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                缺乏相連不但導致缺乏喜樂，並會產生很深的悲傷。喜樂來自與神與人的關係。「我們乃是與父並他兒子耶穌基督相交的，我們將這些話寫給你們，使你們的喜樂充足。」（約壹一：3-4）當我們孤立於神和人，是不可能喜樂的。對不知道的事我們自然會害怕，從未與人深交的人，害怕親密，避免與人親近。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                有些人完全與世界脫節，他們對周圍有一種不真實感。因為神所創造的是有關係的世界，人只有從關係中認識自己的真我。如果人不能與神與人相連，他們不能經驗到什麼是真的。這會使他們產生不真實感。他們問自己：「我真的在這裡嗎？」然後以掐或捏自己確定自己仍然活著。不真實感很常見，但若不瞭解，會很嚇人。活在不真實中是很令人害怕的。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">驚恐、憤怒、過分照顧別人、幻想</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                驚恐是忽然發生強大的恐懼。許多人被驚恐襲擊是因為缺乏相連的根本問題。人類的心靈必須與人相連並充滿愛。有些人的空虛大到好像真的掉到一個黑洞裡。當他們靠近全然孤立的黑暗時，他們感到驚恐。這是人類已知最恐怖的經驗。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                憤怒，狂怒或不可控制的怒氣，常是孤立的徵狀。記得前面司坦的例子，他因為不能控制的怒氣來尋求治療。只有當他面對事實，知道自己裡面有一個孤單的地方，並且只有當他感到被愛被接納時，他的憤怒才會消失。另外一個明顯的例子是，當嬰兒沒人照顧時，他會表現憤怒。當我們長大，大部分人會掩飾這種憤怒，而以嘲笑或身體的疾病出現，因這是社會可接受的。憤怒是對孤立自然的抗議。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                有些人和別人親密的唯一方法就是去照顧別人。我們不會以為照顧別人的人需要被照顧。他們總是把別人的需要放在第一，他們看起來很強壯。然而在照顧者的面具底下，他們渴望關係。人只有把真我帶入關係中才會真正滿足，真我的一部分是一個會有需要的我；如果我們一直付出而不領受，我們是在拒絕部分的真我。因此過分照顧別人也是無法與人相連的徵狀。
              </p>
              <p className="text-gray-700 leading-relaxed">
                幻想是因心理的需要而在心中創造不實際的形像。心理的需要就是依附。無法交到真朋友的人，就會在幻想中創造一個。深度的孤立導致過度的理想和羅曼蒂克的思想，孤立的人無法經驗到真實，所以他們逃避到理想中。幻想中的關係是安全的，但永不會實現。幻想加深孤立，真實的相連治療它。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">二、相連的障礙</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                有一首流行歌曲說「需要人的人是世界上最幸運的人。」「需要」是我們的立足點，因為那是神和別人與我們相會的起點。只有從需要中，我們可以接受及滿足。「虛心的人有福了，因為天國是他們的。」（太五：3）如果相連就是治療的方法，為什麼我們不去做呢？如果這麼簡單就好了。人類墮落以後，有許多阻礙我們與人相連的問題。讓我們來看看。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">過去的傷害</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當我在讀研究所時，班上同學發現了一隻在街上流浪的德國牧羊犬。小狗脫水又營養不良，滿身傷痕。我們把它帶回家照顧。它已學會人的手是用來打它的。它所知道的世界令它害怕。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                小孩也是一樣。當我們來到世界，我們完全依靠父母。肚子餓了他們餵，尿布溼了他們換，害怕時他們安慰。從他們身上，我們發展對世界的觀念及對人的信任。我們愛因為父母先愛我們；我們愛因為神先愛我們（約壹四：19）。如果照顧者愛我們、滿足我們的需要，我們就會發展出「信任的肌肉」。我們看世界是一個值得信任的地方。用發展的術語來說是「基本的信任」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                但如果我們的需要沒有被滿足，如果我們被忽視、遺棄、毒打、虐待、批評、厭惡，我們信任的能力就被傷害了。而我們與人相連的能力是基於我們需要別人。如果這個能力受損我們就有麻煩了。這可說是生命之鑰。反言之，如果我們發現世界是可信任的，我們會學習到有需要是一件很好的事，它會給我們帶來很多好東西，像愛。我們會得到越來越多，因為我們越來越信任和依靠。如果我們發現世界是不可信任的，我們會學習到信任別人及表示有需要，是一件愚笨的事。我們會相信要生存就不能依靠別人。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神給我們記憶，使我們去再得好東西而避免壞東西。如果我們碰了火爐會避免再碰；小狗捱打再看到人把手舉起來會躲。我們學習到世界是什麼樣的，於是我們去適應。我們建立一個人際關係的藍圖，並知道它如何運作。問題是我們建立的藍圖可能建立在受傷的基礎上，後來我們長大了，卻忘了更新資料。二十歲的藍圖成為我們與人相連、活得更豐盛的阻礙。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">扭曲的思想——對自己的看法</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們對世界的觀念有時像過時的地圖。雖然曾經對過，但不再如此。然而由於缺乏經驗或知識，我們不會更新它，仍用它來找尋道路與方向。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「我是壞的」——我們前面說過一個孤單的我會覺得自己是個壞的我。而缺乏相連是罪惡感的根源。孤立的人在單獨時會感覺不好；而他們感覺不好就會離開人。離開人感覺就更不好，這是惡性循環。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「我不可愛」——這個人感到愛的需要，但同時也覺得自己不配。事實是，這人感到自己「不被愛」而將之解釋為「我不可愛」，世界上有些最可愛的人覺得自己不可愛，只因他們從未被愛過；其結果就是孤立。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「我裡頭有些東西把人嚇跑了」——許多人確信自己裡面有些內涵是不好的，而這樣的內涵使得別人遠離他們。這樣的感覺可能可以追溯到許久以前，那裡他們是一個在不被歡迎的情形下誕生的嬰孩，單是他們的存在就足以將他們那累昏了的母親「趕跑」了。這世界對他們的反應因此內化成為他們對自己的確信。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「我的罪比別人的罪更壞」——許多人在治療團體中，終於敢敞開自己，是因為發現他們不是唯一想把孩子抓去撞牆或是吃了三個巧克力派之後去嘔吐，或有手淫習慣的人。他們發現「別人都沒我這麼壞」的信念是不對的。覺得自己比別人壞會成為很強的孤立者。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「我不配獲得愛」——我們常覺得：我們能得什麼，取決於我們配得什麼。「罪的工價乃是死」一律在此適用。我們以為「如果我們不為人愛，必是因為我們未能賺得它」。實情是，我們不能賺得愛。愛，是他人決定是否要對我們有的一種感覺。我們可以賺得讚賞，但不能賺得愛。我們不會配獲得愛，也不會不配獲得愛。配不配和愛無關。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「我的需要會讓任何人都受不了」——覺得自己有需要是一種罪的人，可真有麻煩了。因為就是我們的需要能救我們。「虛心的人有福了」，當人認為需要會壞了人際關係，他們就會停留在孤立中而不讓需要被對方知悉。事實上情形剛好相反，別人希望看到我們的需要，使他們有機會愛我們，以作回報。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「我對人的需要是不對的」——很多人覺得對人有相連的需要是一種不該有的感覺。他們覺得這種需要不合聖經或不健康。他們想，我應該靠自己。「我的感覺會讓任何人都受不了」——這是很多人的感覺在過去曾被否定者的信念。如果他們表露情緒，就覺得會破壞關係。他們害怕自己的憤怒、悲傷、及恐懼。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">扭曲的思想——對別人與對神的看法</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「沒有人靠得住」——如果我們在過去信賴過他人並將真實的自我與之分享，但他們卻出賣了這樣的信賴，我們就會相信沒有人是靠得住的。我們不再將我們那易受傷的心交給任何人，因我們想他們會誤用它。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「人總是會離開我」——若我們曾經被拋棄過，我們就怕其他人也會拋棄我們。我們對人際關係的看法便是：它永遠結束於我們開始信賴對方的時候。「人是卑劣且好批評他人的」——如果別人曾因我們的需要而說過我們的壞話或批評過我們，我們就不太可能會再向人談到我們的需要。我們不大會令自己再度暴露於這種凌辱。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「人會對我不以為然」——有人覺得別人會對自己的需要不以為然。因此，為著怕被論斷，那真實的自我就不能與別人緊密相連。它必須藏躲於人際關係之外。記得早先瑞比的例子嗎？他甚至沒想過別人有可能想要栽培他，對他而言，這是個傻主意。另有人覺得他們有些部分不令人想要與之相連，譬如說：他們憤怒的部分，他們悲傷的部分，他們性的部分。這些部分因人而異。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「人會來控制我」——許多孤立的人會在人際關係中被人侵害與控制，因此他們學到：孤獨是他們唯一真能有自由的地方。他們不相信在關係中能有自由，因他們從未經歷過。「人們的關心是裝出來的」——父母若以「盡責心態」撫育孩子（以「愛」孩子為一種義務），孩子長大後就以為別人的愛是不真誠的，因這是他們的經驗。他們懷疑每一個人。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「祂並不真愛我」——孤立的人極少覺得神愛他們。在人際關係中覺得不被愛的人，也覺得不被神愛。既然神愛我們的方法之一是透過信徒的團體，與此團體隔絕的人就不能感覺到祂的愛。「神並不關心我的感覺，祂只要我做個好人」——人的內在生命常被別人忽略到一個地步，以致他們認為別人對他們的感覺並無興趣，只在意他們「表現如何」，他們也將這形象移到神身上。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「神會以怒氣待我」——許多孤立者曾被別人的憤怒打擊過，因此才會在情緒上孤立起來。他們覺得神也會對他們發怒，這樣的期望使他們不信靠神。「神聽不見我」、「神不回答禱告」——神以與我們同在顯明祂的愛，但孤立者不能意識到神的同在，既然他們沒看到神做任何事，他們推論神一定也聽不見他們。事實上，神知道不能與人相連者的根本問題，因此神以與人接觸的機會作為禱告的回答。但這樣的回答並非他們所期望的，因此在他們看來神似乎不回答禱告。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「神會控制我，讓我失去自由」——人怕神的控制正如怕人的控制。「神不會原諒我」——孤立的人通常相信神已丟棄他，他註定要下地獄了。其實他們是在企圖把神學與經驗配合，因為他們已經感覺在地獄裡了。因為他們與人疏離，他們無法感覺恩典或赦免。即使在理智上他們知道，沒有一個罪是神不赦免的（除了拒絕耶穌），但他們需要與人相連才能感受到。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                有時候別人說「只要改變思想」就好。但這不容易，因為我們所說的是比思想還深的東西——是信念，是深藏在心裡的，早在我們能理解之前就已刻在我們心中，正如舊約說的「胸懷」裡。所有真實及深的改變，都不會發生在關係之外，因為那兒是心所存在之處。人們通常說「我頭腦知道，心卻不知道」。要讓心知道，必須轉回會需要、會受傷的情況。這是所有規條首次被刻上的地方，也是經由這樣的需要，我們才會學習新規條。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們必須在一個安全的關係中，才能察覺我們是否有扭曲的思想應改變。要一隻小狗對虐待它的人敞開心是很笨的。但神若給我們機會建立好關係，我們必須面對扭曲的真理，而讓我們的真我與人相連。如果我們肯謙卑自己，使自己成為有需要的，神應許會幫助我們：「你們要愁苦、悲哀、哭泣。將嬉笑變作悲哀，歡樂變作愁悶。務要在主面前自卑，主就必叫你們升高。」（雅四：9-10）聽聽戴維如何為自己禱告：「神啊，求你監察我，知道我的心思，試練我，知道我的意念。看在我裡面有什麼惡行沒有，引導我走永生的道路。」（詩一三九：23-24）
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">防衛行為</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們不但對神、自我、別人有扭曲的認識，並因此而受傷，我們也建立起一道防衛的牆對抗關係。起初這看來很有道理，因為我們周圍都是令我們受傷的關係。在酷寒的冬天裡穿上一件溫暖的外衣來保護自己是合宜的；但是當夏天來臨時，我們就應當脫去外衣來享受那溫暖的陽光。我們常穿著心理上的外衣來保護自己免受傷害。但是當神將我們遷到了一個溫暖的地方，一件厚外衣就會製造問題而非解決問題。我們已不再需要它了。神應許在祂家中賜給我們新的關係，但我們必須著力於脫去我們的外衣以享受這新的溫暖。不同的人有不同的「外衣」來保護他們避免相連，以下是一些較常見的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">否認</span>——是種心理防衛的機制，人們藉否認某一個人的問題或某一情況的存在來避免面對之。如果人在成長的過程中或是長大後，未能獲得好的、安全的關係，他們就學會否認對這樣的關係之需要，為什麼要去得那得不著的呢？他們遂逐漸泯除了對這需要的認知——注意，是泯除對這需要的「認知」，而非需要的本身。只要他們一息尚存，這需要總是在那兒，因為他們是按著神的形像造的，但這些人可以對此需要的呼喊聾啞以待。我永不能忘記一位律師病患，他因憂鬱與暴怒症狀而入院治療。他在住院的第二天說：「需要是什麼玩意兒？我不需要任何人。」然而當一星期一星期逐漸過去，我們發現他那一組只要一談到孤單這題目，他就會離席去要顆鎮靜劑！許久以後，他開始體認到這些討論之所以對他困難，是因為使他近乎經驗到他那久已遺忘的對別人的需要。當他逐漸放棄否認他對關係的需要，他開始與人相連。他發現到「無敵金剛也需要愛」！
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">貶低愛的價值</span>——是許多掙扎於情感孤立的人所用的一種防衛。「愛」會出現在他們面前，但這些人並不回應之，反倒貶低其價值或減低其重要性，甚至將具正面意義的事物改為負面的事物，說：「你並不真的關心。」這是一個很可怕的防衛，因他們是將他們所最需要的推開。就如我們執意停留在孤立中，而讓愛痛苦地看著我們；又像我們快餓死時，有人給我們一塊牛排，而我們說：「恐怕有毒吧！」因我們貶低愛的價值，我們停留在飢餓狀態中，無法獲得食物。我們孤立是因為愛的風險太大。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">投射</span>——是把自己的想法、感覺、及態度歸因於別人。有時候我們會投射我們的需要在別人身上，而不自己掌握之。聖經上說我們要「用神所賜的安慰去安慰那遭各樣患難的人」（林後一：4），這是假設我們已經掌握了自己的需要，並知道這需要是什麼。有時候我們的需要只得到一種替代性的滿足，是因為我們將需要投射在別人身上，而非自己掌握之。我們必須小心掌握自己的需要，不把它投射在別人身上，因為我們無法因此得到滿足。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">相反反應</span>——是一種防衛機制，人會表現出與需要（常常是無意識的）完全相反的感覺。舉例而言，孤單的人表現得特別孤立，看來特別堅強並反對依賴或需要別人，這樣的人可能建立一種拒絕關係的神學，對自己的背道而馳。<span className="font-semibold">狂熱</span>——是心理上的一種興奮，以生理心理過動、行為失序、情緒起伏表現之。如果一個人夠忙，他就可以否認自己對關係的需要，有些工作狂就是有狂熱的傾向。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">理想主義</span>——是把事務理想化的一種行為，這種防衛機制與前面談到的幻想很像。很難墜入情網或維持愛情的人，有時候是受理想主義之苦，他們找尋一個理想的對象，期望他能滿足自己一切的需要。<span className="font-semibold">替代</span>——就是以另一個人或物取代。當人不能得到真正的關係，他們會找一些別的來代替。正如前述，沉溺是對真我需要的取代，藥物、食物、或性是對愛的一種替代。人用這些替代來防衛自己對神與人真正的需要。告訴別人要悔改及停止某種行為是件好事，但除非那人的需要滿足了，不當的行為還是會回來（路十二：24-26）。這人需要神及人的愛來滿足心靈的需要。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">三、學習神的方法</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                過去的傷害、扭曲的思想、及防衛機制都是人類墮落的直接結果；每個人或多或少都有一些。對我們相連感的傷害不但摧殘那被傷害的人，也摧殘他們周遭的人。一方面，那些被傷害的人會說：「我為什麼不能持久與人相親近？」或「我為什麼至今還躲開別人？」另一方面，他們周遭的人會說：「他們為什麼不能明白他們是被愛的，並就此好好過日子？」或「我想他們只是自私與懶惰。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                人生早期的傷害要花很長的時間才能治癒，而成長也要花很長的時間。保羅瞭解這種情形，他說：「我們又勸弟兄們，要警戒不守規矩的人，勉勵灰心的人，扶助軟弱的人，也要向眾人忍耐。」（帖前五：14）心傷就像其他傷一樣。首先，傷者會感到痛苦並致休克。如果他有別人的支持，他的心會解凍而再度感到痛苦。（古諺說得對：事情總要先變壞才轉好）當受苦的心再回到關係之中，它會變得堅強並且逐漸成長，但其過程就像操練一個痛楚的肢體或肌肉一般，人在復健的過程中必須有耐心，不論是對痛楚肌肉或對痛楚的心皆然。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在撫育我們成長的家庭中，有一套系統的人際關係準則。我們會自這系統中承襲扭曲的思想。神設立家庭為一屬靈的系統，藉以將宇宙中屬靈的定律傳授給兒女們。家庭原是我們學習神心意中相愛相仿、自由選擇、彼此饒恕、與智慧成長之處。然而，我們並不生活於完全的家庭之中，而許多家庭中的準則也與神的準則大相徑庭。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我有時會請組員寫出他們家庭中人際關係的「十誡」。耶穌告訴我們說，有時我們會依「古人的遺傳」或「人的吩咐」來生活，卻不依神的途徑（太十五：1-9）。有些家庭的準則可能與神的準則直接牴觸。以下是某人開的單子：不可讓任何人在情感上接近你，要保持距離；不可將你真正的感覺告訴人，若你受了傷，要將之守為秘密；若能以之保持和平，則總當說謊；當努力使外面看來很好，反正這是比較重要的事；當有斐然的成就以光耀門楣；總不可脫離家庭臍帶的牽絆，因這會令其他家人非常難過；不可在外談及家中的事或你在其中所受的傷，如此不忠是可憎的；子女當插手父母的爭執之中，他們當將父母爭鬥的焦點移開，這是出於愛心且蒙悅納的祭物；慈仁柔和的感覺是可憎的；當自出生起就在情感上獨立。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                以上的單子大異於神的單子。然而，許多基督徒卻未轉離「古人的遺傳」。他們根據一個錯誤的宗教來生活，就是他們家庭的屬靈系統。若要成長，他們必須棄絕他們那病態家庭的神學系統並採納神的屬靈原則。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">當這樣的改變發生時，就有一扇大門向我們開啟：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「當下耶穌的母親，和弟兄，來站在外邊，打發人去叫他。有許多人在耶穌周圍坐著。他們就告訴他說，看哪，你母親，和你弟兄，在外邊找你。耶穌回答說，誰是我的母親？誰是我的弟兄？就四面觀看那周圍坐著的人，說：『看哪，我的母親，我的弟兄。凡遵行神旨意的人，就是我的弟兄姊妹和母親了。』」（可三：31-35）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                耶穌並非拒絕祂的家人，而是要強調在屬靈關係上，信祂的人有更高的優先次序。耶穌一直教導我們，我們是從一個國度進到另一個國度（西一：13-14）。其中重要的一點是認識到誰是我們的家人。神實際上是在說，我們需要來自遵行神原則的「家人」的支持。我們必須棄絕第一個學到的屬靈系統，而學習神的相連方式。當我們開始做這樣的改變時，我們會與朋友、屬靈領袖、甚至家人發生衝突。聖經多處講到這樣的衝突，並要求我們改變。耶穌說我們所愛的人，若沒有神的價值觀，就會發生衝突：
              </p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「你們不要想我來，是叫地上太平；我來，並不是叫地上太平，乃是叫地上動刀兵。因為我來，是叫人與父親生疏，女兒與母親生疏，媳婦與婆婆生疏；人的仇敵，就是自己家裡的人。愛父母過於愛我的，不配作我的門徒，愛兒女過於愛我的，不配作我的門徒。」（太十：34-37）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                這些話很嚴厲。但耶穌並非要我們與不信神的親朋作對。我們要愛我們的仇敵，為那逼迫我們的禱告（太五：44）。然而我們必須視那不相信愛很重要的人，為我們靈魂的仇敵：拒絕愛就是拒絕神的方法。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">我們必須找出那能帶領我們愈來愈有神形像的人，而非遠離他們。正如戴維在詩篇一〇一篇中向神請求：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「我眼要看國中的誠實人，叫他們與我同住；行為完全的，他要伺候我。」（詩一〇一：6）此外，我們也須避開傷人的人：「行詭詐的，必不得住在我家裡；說謊話的，必不得立在我眼前。」（詩一〇一：7）</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                我們必須查驗我們的關係，看它們是否幫助我們在神的形像裡成長。一個已連結壞關係的人不易向壞關係說「不」並向好的說「是」。詩篇作者說，當一個人自年幼就被壓迫，他背上會有「犁溝」，每一個在情感上受過酷待的人都知道這是什麼樣的感覺。但詩人向我們保證：神已砍斷了惡人的繩索（詩一二九：1-4），以致我們可以將我們的心向那些行主道的人敞開。
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
                '無法相連的人會經過「抗議→沮喪絕望→分離」三個孤立階段，最後甚至與自己的需要、感受都完全隔離，如同案例中以割傷自己來確認「自己還活著」的病人。',
                '孤立會偽裝成各種表面症狀（沮喪、無意義感、罪惡感、沉溺、扭曲思想、虛空、悲傷、害怕親密、不真實感、驚恐、憤怒、過度照顧別人、幻想），若只處理表面症狀而不處理相連的根本缺失，問題不會真正解決。',
                '相連的障礙主要來自三方面：過去傷害造成的不信任（過時的人際藍圖）、扭曲的思想（對自己、對別人、對神的錯誤信念，如「我不可愛」「神會以怒氣待我」），以及各種防衛行為（否認、貶低愛的價值、投射、相反反應、狂熱、理想主義、替代）。',
                '心理防衛機制起初是保護自己免受傷害的「外衣」，有其存在的理由，但當我們進入神所賜恩典與真理的溫暖關係中後，這些外衣就從保護變成了阻礙，需要有意識地脫去。',
                '學習神的方法需要棄絕從原生家庭承襲、與神的原則相牴觸的「古人的遺傳」，並在安全、遵行神原則的新關係中，讓真我重新與人連結——這常會帶來與舊有關係模式的衝突，但耶穌應許這是通往生命的必經之路。',
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
              <h4 className="font-semibold text-gray-800 mb-2">症狀式輔導 vs. 根源式輔導</h4>
              <p className="text-gray-700 leading-relaxed">
                本章列舉的十多種「症狀」提醒我們：許多教會輔導習慣針對表面問題給答案（如對沮喪的人說「要多讀經禱告」、對沉溺行為的人說「要悔改」），卻沒有處理底層的相連缺失。這不是說悔改、讀經禱告不重要，而是提醒我們，若不同時處理「這個人是否有安全的相連關係」這個根源問題，表面行為的改變往往難以持久，甚至會像沉溺者一樣，一個成癮行為戒除了，另一個又浮現。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「家庭十誡」練習的診斷價值</h4>
              <p className="text-gray-700 leading-relaxed">
                作者請小組成員寫下自己原生家庭不成文的「十誡」，是一個很有力的自我覺察工具——很多扭曲的思想不是透過言語教導,而是透過家庭氛圍「潛移默化」刻進我們心裡的。把這些潛規則具體寫出來、攤在光下,本身就是打破其轄制的第一步，因為隱藏的規條最有力量，一旦被看見、被說出來，就開始失去自動主導我們反應的能力。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">太十章34-37節的張力：家庭與屬靈家人</h4>
              <p className="text-gray-700 leading-relaxed">
                耶穌說「叫人與父親生疏」這類經文常被誤用來合理化與家人斷絕關係，但作者的解讀更精細：這不是鼓勵切斷天然家庭關係，而是提醒我們，屬靈成長需要「行主道的人」的陪伴與支持（詩一〇一篇），當原生家庭的相處模式本身與神的心意牴觸時，我們需要有屬靈的群體來提供健康關係的參照與矯正，而不是被困在唯一、卻扭曲的關係藍圖裡。愛仇敵（太五：44）與拒絕讓扭曲的關係模式繼續轄制自己，兩者並不矛盾。
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
              '本章列出的十多種孤立症狀（沮喪、罪惡感、沉溺、驚恐、過度照顧別人……）中，哪一兩項最貼近你目前或過去的經歷？',
              '你對自己有沒有本章提到的扭曲信念，像「我不可愛」「我的需要會讓人受不了」「神會以怒氣待我」？這些信念的源頭可能是什麼？',
              '你最常使用哪一種防衛行為（否認、貶低愛的價值、投射、狂熱、理想主義、替代）來避免真正的相連？',
              '如果請你寫出你原生家庭不成文的「十誡」，你會寫下哪幾條？這些規條如何影響你今天與人建立關係的方式？',
              '你是否經歷過「愛你的人使你和舊有的相處模式產生衝突」的時刻？那次經驗如何影響了你？',
              '你身邊有沒有一位「行主道的人」，可以陪你一起面對並修正扭曲的關係藍圖？如果沒有，這一週可以怎麼開始尋找？',
              '讀完本章，你覺得神現在最想光照你生命中哪一個孤立的角落？',
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
              <h4 className="font-semibold text-green-700 mb-2">📝 寫下你的「家庭十誡」</h4>
              <p className="text-gray-700 mb-2">
                安靜列出你原生家庭中不成文但真實運作的十條規則（例如「不可讓人看到你哭」「家醜不可外揚」）。逐條對照：這條規則跟神的心意一致嗎？哪些需要被替換？
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 辨認你的防衛外衣</h4>
              <p className="text-gray-700 mb-2">本週留意一次你想拒絕或貶低別人善意/關心的時刻，練習停下來問自己：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>我剛剛用了哪一種防衛（否認、貶低、投射、狂熱……）？</li>
                <li>如果我脫下這件外衣，讓這份善意真正進來，會發生什麼？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 默想詩篇一三九篇23-24節</h4>
              <p className="text-gray-700 mb-2">
                用戴維的禱告向神求：「求你監察我，知道我的心思……看在我裡面有什麼惡行沒有。」具體寫下神向你光照出的一個扭曲信念，並找一位信任的人分享。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，求祢光照我孤立時所戴上的各種面具——不論是沮喪、沉溺、過度忙碌，還是過度照顧別人。求祢顯明我心中那些扭曲的信念，讓我看清哪些是我從破碎的關係中誤學來的規條，而不是祢的真理。求祢賜我勇氣脫去防衛的外衣，把易受傷的真我，帶到祢與行主道之人面前。奉耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
