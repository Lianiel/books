import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Waves, Star, Search, HelpCircle, Check } from 'lucide-react';

const quote = "border-l-4 border-emerald-300 bg-emerald-50 pl-4 py-3 mb-3";
const quoteText = "text-emerald-800 leading-relaxed italic";

export default function Book40Ch11() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-800 to-orange-900 bg-clip-text text-transparent">第十一章</h1>
        <h2 className="text-xl font-semibold text-gray-700">第七誡（一）：不可姦淫——婚前性行為</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          「婚姻，人人都當尊重，床也不可污穢；因為苟合行淫的人，神必要審判。」（來13:4）
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
              <h3 className="font-bold text-amber-900 text-lg mb-3">一、第七誡的精神——忠實與尊重婚姻</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                正如第一誡要求人絕對忠於與獨一真神的關係，第七誡是要求人在婚姻之約上有相同忠貞的態度，這條誡命是要讓我們看見「忠實的價值」。當人能夠誠實地發自內心說出「我是忠實的」時，就能與他的伴侶建立信任與愛的關係，雙方都能在其中體會到安全與家的歸屬感。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這條誡命強調的是「尊重婚姻」。家庭是孩子學習他們信仰認同的地方，犯姦淫使婚姻關係遭到破壞，毀了一個家庭，孩子也就失去了培育信仰與人性的重要的地方，因此，「捍衛婚姻」攸關整個國家社會的存續。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">二、婚前性行為會有何害處？</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                很多人都說：基督徒總是裝作清高，鼓吹不可以有婚前性行為，那是不是應該連手都不應該牽，親親小嘴也不能呢？好避免有肌膚之親，乾脆學習中東人，把全身包得緊緊的最好。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在今天的教會裡，下列流傳的想法已經十分普遍：「一紙婚書，算不得甚麼？有愛，又何必需要它？我們都真心相愛，一起生活，即使沒有結婚，比沒有愛的婚姻更好！」「人人都希望找到真愛，若在婚前嘗試一起生活，可以確保是貨真價實！若不嘗試，又怎知雙方是否適合對方呢？」「我們都是基督徒，我們都真心相愛，在婚前就有了性關係，為了節省開支，住在一起，我們已計劃將來會結婚，只是時機還未成熟。我們並沒有傷害任何人，為甚麼教會要干涉我們的私人生活？」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                2019年調查，台灣15歲以下已有超過3成6有過性經驗，換句話說，未成年學生平均每10人就有近4人已初嚐過性愛禁果；年齡層再往上，則有一半大學生已有性經驗。我們必須加緊教導婚前性行為造成的後果。
              </p>

              <h4 className="font-semibold text-amber-800 mb-2 mt-4">婚前性行為的害處</h4>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-amber-700 mb-1">一、婚前性行為是神所禁止的</p>
                  <p className="text-gray-700 leading-relaxed">「性」是神為婚姻預備的，婚前性行為是淫亂的行為。希伯來書十三章4節：「婚姻，人人都當尊重，床也不可污穢；因為苟合行淫的人，神必要審判」。婚前性行為違背了上帝的誡命，上帝給人這十誡命是為了使人快樂，它們沒有過時，也不受時空限制。如果我們遵行這些律例，便能創造幸福和繁榮的生活；如果我們不遵行，便會付出慘痛的代價：離婚、疾病、墮胎、私生子和孤獨。現代人認為他們可以破壞這些永恆的律例，並不會承擔任何後果，其實，他們在犯著一個嚴重的錯誤。</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-700 mb-1">二、性如果被不當使用，它便會產生一種強大的破壞力</p>
                  <p className="text-gray-700 leading-relaxed">就像原子能一樣，當原子能被正確地使用時，它可以創造出無限的力量；但當它被錯誤地使用時，它可以毀壞人的生命。「性」同樣具有強大的力量，它是上帝賜予我們的禮物，能在肉體上給予我們最大滿足，也能幫助我們與配偶建立深厚的友誼，並繁衍下一代。但如果你在婚姻之外，玩弄這股強大的力量，它甚至可能會毀掉你和那些靠近你的人。</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-700 mb-1">三、性活動會抑制青年人在心理、社交和學業方面的發展</p>
                  <p className="text-gray-700 leading-relaxed">研究表明，當年輕人從事婚前性活動時，他們的學業成績下降，和家人朋友之間的關係也漸趨惡化。這是因為青年人在處理他們爆炸性的性衝動方面還不成熟，結果往往造成了他們的生活受到它的支配。</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-700 mb-1">四、嚴重損害身心健康</p>
                  <p className="text-gray-700 leading-relaxed">發生婚前性行為，男女雙方所產生的歡樂並不是真正的歡樂，因為這種事情無論是過去、現在和將來都是被認為是不正當、不名譽的事情，所以只能偷偷地發生，就好像是小偷一樣，偷東西時提心吊膽地怕被人捉住。因此，婚前性行為常常在十分緊張的情況下進行，一方面，雙方控制不住自己的衝動偷偷地品嘗「禁果」；另一方面，在性生活過程中會害怕懷孕，擔心暴露，這就使許多人在婚前性行為的快感中攙雜了性負罪的成分，後者有時甚至占有主要地位，女方在這方面的心理負擔尤為突出。而心理學家指出這種「性負罪感」會使愛的熱情大為降低，使得性生活只能在緊張和不安的氣氛中進行。性負罪感和悔恨情緒還會使人產生性心理變態：如女子厭惡男子、厭惡過性生活，而造成性慾減退、性敏感度降低和性冷淡、性厭惡等。</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-700 mb-1">五、貞潔應給予承諾在婚姻中永遠陪伴你的那個人</p>
                  <p className="text-gray-700 leading-relaxed">你的貞潔是你必須給予配偶的最珍貴的禮物，一旦失去了它，這個世界上再沒有什麼能將它挽回。不要隨心所欲，如此輕率地失去如此珍貴的東西。</p>
                  <p className="text-gray-700 leading-relaxed mt-2">很多年輕人在戀愛交往過程中，會因忍不住情慾試探而發生婚前性行為，乍看之下雖然這似乎是種「個人的權利、自由」，但享受當下的同時，也將失去未來新婚時「拆禮物」的新鮮感；婚後也較容易產生彼此不安全感，或是外在第三者的性試探，並且夫妻之間的親密感也會比較淡薄。如同「電鍋煮飯時若提早打開鍋蓋，飯就會不好吃。」因此，堅持婚前守貞非常重要，否則日後婚姻的經營就須付出更辛苦的代價。</p>
                  <p className="text-gray-700 leading-relaxed mt-2">在這個離婚如此普遍的社會，如果能夠向未來的伴侶表明自己對他（或她）的委身和忠實，該是一件多好的事情。若是在婚前，我們就有辦法讓對方看到自己即便面對誘惑也依然忠誠可信，即便在面對肉體的衝動時，我們仍能堅持婚前守貞，這樣的行動就能讓未來的另一半真實地看到我們的可靠與自律，讓他們知道完全無需擔憂我們婚後不忠。這也表明我們是律己的人，我們對於信仰的執著強於對肉體的屈服。在步入婚姻殿堂時，這將是我們送給對方的一份珍貴禮物。</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-700 mb-1">六、可能造成受孕的嚴重後果</p>
                  <p className="text-gray-700 leading-relaxed">男女發生性交行為的直接後果是懷孕、生育。由於婚前性關係不是合法的關係，所以，其孩子也沒有合法地位，這會給男女雙方帶來很大的痛苦和生活上很大的困難。如果女方進行人工流產，會影響工作、學習而且不利於身體健康。有些由於發生婚前性行為而致孕的女性，為了不想讓人知道，偷偷摸摸地去進行人工流產，對健康影響很大。有的女性怕工作單位發現，不敢去醫院流產，而去找江湖醫生，在極不科學的情況下進行人工流產，有的生殖器官受到很大損害，有的甚至不幸送了命。有的還受到品行惡劣的江湖醫生的污辱，因為這些壞傢伙掌握了這些女性私自墮胎、羞於聲張的心理特點，敢於為所欲為。科學研究表明，被單身母親撫養長大的孩子，在心理上會受到創傷，比起在完整家庭中長大的孩子，他們在社會和學業上都不怎麼成功。最重要的是，孩子們的健康成長既需要父親，也需要母親。冒著孩子可能永遠得不到父親的愛、保護和關心的風險，這是錯誤的，也是不負責任的。</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-700 mb-1">七、與非結婚對象的性行為，會在分手後留下有害的記憶</p>
                  <p className="text-gray-700 leading-relaxed">保羅在哥林多前書六章16節中說：「豈不知與娼妓聯合的，便是與她成為一體嗎？」所以，聖經告訴我們，當我們與另一方發生性行為時，我們就會與對方產生某種更深層次的、我們也無法理解的聯結。如果你在約會期間沒有發生性關係，那麼，當你們分手時，你會較容易忘記那段關係。但如果你在約會期間發生了性關係，然後又和對方分手了，那麼令你不愉快的記憶有可能伴隨你的一生。結束一段有過性親密的關係，就像是一次「小型的離婚」，而這些「小型離婚」造成的心理障礙有害於你的心靈。因此，有人說：「每多與一個人親密，就是多分出了一部分自己。」</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-700 mb-1">八、真愛需要等待</p>
                  <p className="text-gray-700 leading-relaxed">如果一個男孩或女孩真的很愛你，那麼他們一定想給你最好的，他們不會讓你遭受疾病、意外懷孕和婚前性行為帶來的心理恐懼，他們想在最好的地方，就是在婚姻的愛裡，和你真正體驗愛。</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-700 mb-1">九、婚前性行為不能增加彼此的感情，只會破壞感情、扭曲感情</p>
                  <p className="text-gray-700 leading-relaxed mb-2">婚前性行為往往讓彼此的交往變質為只是為了追求肉慾的滿足，並無正面果效！</p>
                  <p className="text-gray-700 leading-relaxed mb-2">撒母耳記下十三章1-2節記載：「大衛的兒子押沙龍有一個美貌的妹子，名叫他瑪。大衛的兒子暗嫩愛她。暗嫩為他妹子他瑪憂急成病。他瑪還是處女，暗嫩以為難向她行事」。因此，暗嫩設計玷污了他瑪。然而，第15節卻記載，當暗嫩與他瑪發生性關係之後：「隨後，暗嫩極其恨她，那恨她的心比先前愛她的心更甚，對她說：『你起來，去吧！』」暗嫩為何在得手之後，由愛轉為恨呢？有人說，因為暗嫩的愛只是一種情慾，這情慾得到滿足後，隨即就變成憎恨。聖經教訓我們，愛是永遠的（林前13:8、13），情慾是非常暫時、虛妄的要求。暗嫩的愛是占有，得手之後就想趕緊甩掉。也有人認為暗嫩是因為他瑪拒絕他就極其恨她，他心裡很討厭被拒絕。或者有人說，這是由於因強姦他瑪後，突然出現的羞恥及空虛感覺混在一起的變態行為。</p>
                  <p className="text-gray-700 leading-relaxed mb-2">但不管是什麼原因，婚前性行為只會扭曲兩個戀人的感情。一般而言，通常較有性衝動的是男生，許多女生以為把性給了男生，會增加他們的情感，事實上卻是適得其反！兩個人若是發展到了肉體的親密，有了性行為，那以後約會，可能會花很多時間在探討兩人的身體。而婚前該認識的是彼此靈魂，不是身體。你若是跟人發生了婚前性行為，你會發現，之後心靈的認識幾乎沒有了，每次約會都是在摸來摸去、探索身體。用身體換愛情，得來的後果是如何呢？可能你再也不會去思考兩個人到底合不合適的問題，只記得，我是他的人了。</p>
                  <p className="text-gray-700 leading-relaxed mb-2">男生往往有其獵人般（hunter）的天性本能，所以，若非在「合法婚姻」內發生性行為，男生在得著獵物之後就不易滿足，會有想繼續尋找下一個「獵物」的本能。相反的，當女生婚前把性給出去時，是更容易對所發生性關係對象產生強烈「情感依附」，掌控慾更強烈，因而常會被誤以為是嚴重「公主病」。這也就是不少男女交往後，因太早跨越界線發生關係，導致男友不再珍惜，女友沒有安全感，最後兩人不歡而散，莫名分手的原因。</p>
                  <p className="text-gray-700 leading-relaxed mb-2">男生與異性有性行為時，體內所分泌的「垂體後葉素」，原本是上帝設計要讓丈夫在「合法婚姻」中能與妻子產生100％契合的親密感，但若男生在婚前就與不同伴侶發生性關係，這種「親密感」就會愈來愈淡化，如同兩張紙用強力膠黏住一樣，每撕開一次，就更破碎一次，即使最後與性伴侶進入婚姻，也仍難恢復那起初上帝所賜與的契合親密感，不容易得著真正的滿足感。此外，女生在性行為時，體內會分泌「催產素」（縮宮素），這會讓女生對發生性關係的對象產生極強烈的「情感依附」，因而若沒有在「合法婚姻」時才給出去，就會產生極大不安全感的痛苦、焦慮。從許多輔導經驗可看到，許多有過婚前性行為的女生容易產生自卑、憂鬱或自殺傾向。或也有另一極端，則是想到處再尋找對象來滿足性的需求。若曾經與多個異性發生過婚前性行為，很容易會因「比較」而使感情受破壞，婚後也更容易與舊情人出軌！</p>
                  <p className="text-gray-700 leading-relaxed">我們要教導年輕人：「你有性慾望，但你能成為他們的主人」，能夠控制「性慾」，建立健康的親密關係的人，才是真正懂「愛」的人。</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">三、如何避免婚前性行為？</h3>
              <div className="space-y-2">
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">一、</span>在一起時更多追求屬靈事物，求聖靈給力量勝過試探。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">二、</span>不可迷戀、把愛情看為一切。撒母耳記下十三章1-2節記載，「暗嫩為他妹子他瑪憂急成病」，這不是健康的愛，這是一種有害的迷戀！</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">三、</span>不要以「性」作為獲得對方的手段，暗嫩以「性」作為獲得對方的手段，許多女生也會如此。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">四、</span>避免獨處或在暗處，多多參與團體。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">五、</span>要有屬靈同伴或輔導的提醒，常提醒婚前性行為的壞處。一位十來歲的女孩子坦誠地分享說，在她的學校裡，仍然保守貞潔的女孩子很少，她不斷受到同學的壓力，還不時帶著諷刺性的口吻，鼓勵她快點失去貞節，好像這才正式離開孩童階段，踏入成年人的花花世界！撒母耳記下十三章3-5節我們看見，暗嫩就是結交了損友約拿達，教導他如何設計謀與他瑪發生關係。因此，年青人需要結交有正確價值觀的屬靈同伴及輔導，常常提醒他們婚前守貞的重要性。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">六、</span>不去接觸會引誘你們落入試探的事物（例：電影、網頁、書報等……）。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">七、</span>通常弟兄比較容易受試探，所以姊妹要嚴守；在18歲以前，男生對於性的「慾望」會比女生來得強，家長及教會要教導女生「懂得自我保護，不要讓自己落入受試探的環境」（兩人單獨出遊過夜、同處一室），而男生一定要教他「尊重」的重要性，不可侵犯異性身體的界線，因為一旦發生婚前性行為，你沒有能力承擔後續的責任。</p>
              </div>
              <p className="text-gray-700 leading-relaxed mt-3">
                從生理及心理來看兩性之間的差異：男生往往是用視覺談戀愛，看見女生凹凸有致的身材，較容易產生性衝動；女生則是用耳朵談戀愛，聽見男生說甜蜜好聽的話，較容易敞開心房，接受進一步身體的接觸。
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                進入婚姻之前，不管自己對對方多有好感，或對方給自己有任何山盟海誓，都要持守兩性身體界線，「女生的身體不要輕易被碰觸，男生也不要隨意去碰觸女生敏感地帶」，因為女生身體敏感地帶一旦被碰觸，就容易「酥軟」而輕易開放自己，也會導致男生有進一步動作的衝動。所以，「男女應該學習對彼此身體的尊重，這不僅是保護對方，也是保護自己不落入試探。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">四、以婚前守貞見證我們的信仰、塑造我們的文化</h3>
              <div className={quote}>
                <p className={quoteText}>
                  如今，做好事是件酷的事情，有人開展非營利事業，有人在Instagram上分享勵志話語。因此，要體現出基督徒與這個世界的不同變得很難。讓人們能看出我們是按聖經而活的，除了參與公益，另一方面就是活出上帝對我們生命及婚姻最初的設計。在這個高中畢業前若還沒嘗禁果就會被人笑話的時代，守貞會是一個很勇敢的舉動，可以向人表明我們對待自己的信仰是認真的。當我們持守自己的信念時，人們自然會說：「哇！她真的是在按自己的信仰而活耶！不然為什麼要等」；或者甚至會說：「她能做到這一點，或許她的宗教真的有不尋常的地方。」我們的與眾不同就成為傳福音的有力工具。
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們發現，這個男女關係隨便的文化，導致了多少不負責任的父親出現。同時，當婚姻建立在肉體的尋歡作樂上，而非彼此的承諾時，離婚也成為愉悅感消失後的必然結局。而這兩種情況都會產生單親家庭。年輕人的隨便是否是在填補破碎家庭帶給他們心靈上的空洞？也許周圍對婚姻忠誠的缺失，讓他們只能參照世界，尋找愛的線索。惡性循環愈演愈烈，代代延續。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這一切的根源是一種追逐享樂而非尋找人生意義的文化，這種文化高唱，只要「無礙他人」，就應當下行樂，我的人生我說了算。但上帝知道，如果我們不僅僅止步於「無礙他人」，我們可以活出更好、更完整的祂起先設計的生命。上帝希望我們有內涵、生命有意義、自律、履行愛的承諾。以上帝的標準律己給我們帶來喜樂、平安，而這正是這個世界極度缺乏，不斷尋找卻尋不到的。耶穌說祂來是要給我們更豐盛的生命（約10:10）。而聖靈的果子中喜樂、平安也緊隨自律之後（加5:22-23）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                成千上萬名過著守信、自律的生活，並滿有喜樂、平安的基督徒，可以為我們這個沉溺享樂卻支離破碎的社會帶來新的生命力，而婚前守貞或許是我們向這個世界展示這份新生命力最有力的方式。我們可以選擇與世界分別開來，忠於未來的伴侶，用生命重塑文化。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                將所談到的付諸於行動並非易事。聖經中有許多我們學習的榜樣，他們選擇了一條委身、擺上的艱難道路，卻經歷了深層的滿足。我希望我們的生命可以讓人看到，上帝可以如何重塑我們的文化。若有人鼓勵我們追尋婚前性行為的歡愉，我們可以這樣回應他：「我已經將自己的生命許諾於比肉體享樂更有意義的事情。我已經下定決心要活出造物主對我的計劃，成為一個更完整，可以活出正直、信實、委身、自律和喜樂的人，因為我要預備在天國永遠綻放。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">五、如何輔導已發生婚前性行為者？</h3>
              <div className="space-y-2">
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">一、</span>告之神不喜悅婚前性行為，要他們在神面前悔改。並且告訴他們婚前性行為的不良後果，幫助他們過聖潔的生活。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">二、</span>予以實際的建議，避免再發生，並鼓勵他們靠著聖靈的大能，勝過情慾！</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">三、</span>定期約談，不斷地叮嚀及提醒他們保持聖潔的關係。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">四、</span>若懷孕則鼓勵結婚，並表現接納及關懷，不要讓他們因墮胎而再犯罪，雖然因懷孕而結婚會有一些結果要承受，但神必賜力量，行主的道，主必幫助！</p>
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
                '第七誡的核心精神是「忠實」與「尊重婚姻」——正如第一誡要求對神絕對忠貞，第七誡要求人在婚姻之約上有相同的忠貞態度，捍衛婚姻攸關整個家庭與社會的存續。',
                '婚前性行為的害處包括：違背神的誡命、性力量若不當使用會產生強大破壞力、抑制青年心理社交學業發展、造成性負罪感損害身心健康、失去貞潔這份最珍貴的禮物、可能造成懷孕的嚴重後果、留下分手後難以抹滅的記憶、真愛需要等待而非急於嘗禁果、且不能增進感情反而扭曲感情（以暗嫩與他瑪由愛轉恨為例證）。',
                '生理機制上，男性分泌的垂體後葉素、女性分泌的催產素，原本設計是在合法婚姻中建立契合親密感，若在婚前多重關係中提早消耗，會使親密感逐漸淡化，如同反覆撕開又黏貼的紙張，難以恢復起初的完整契合。',
                '避免婚前性行為的具體方法包括：追求屬靈事物求聖靈能力、不迷戀不以性為手段、避免獨處與試探環境、尋求屬靈同伴監督提醒、遠離引誘試探的媒體內容，以及男女雙方學習尊重彼此身體的界線。',
                '婚前守貞不只是個人操守，更是向世界見證信仰、塑造反文化的有力方式——在追逐享樂而非人生意義的世代中，活出委身、自律、喜樂的生命，本身就是最有力的福音見證；輔導已犯錯者應以悔改、實際建議、定期關懷、接納陪伴的態度幫助他們重新站立。',
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
              <h4 className="font-semibold text-gray-800 mb-2">暗嫩與他瑪「由愛轉恨」的案例，對今日年輕人辨識「真愛」與「情慾」有何實用價值？</h4>
              <p className="text-gray-700 leading-relaxed">
                聖經誠實記載了暗嫩在得手後「恨她的心比先前愛她的心更甚」，這個案例極具教育意義——它揭示了以情慾為基礎的關係，一旦慾望被滿足，激情消退後往往留下的是空虛甚至厭惡，而非真正的親密。這對今日教導青少年分辨「這是真愛還是情慾」提供了具體而深刻的聖經案例，勝過空泛的道德說教。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「婚前守貞是塑造文化的方式」這個框架，如何幫助年輕基督徒面對守貞帶來的社會壓力？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者沒有把婚前守貞單純呈現為一條「不可以做」的禁令，而是重新框架為一種主動的、有意義的文化塑造行動——在及早性化的世代中選擇不同的生活方式，本身就成為向世界展示另一種生命可能性的見證。這種正面積極的論述方式，比單純訴諸「這是罪」的禁止性語言，更能幫助年輕人在同儕壓力下找到持守的內在動機。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">輔導已發生婚前性行為者「不要讓他們因墮胎而再犯罪」，對教會處理未婚懷孕議題有何重要提醒？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者特別提醒，面對未婚懷孕的情況，教會的態度應是鼓勵結婚、接納關懷，而非讓當事人因為害怕教會論斷而選擇墮胎來「解決問題」。這提醒教會在處理類似敏感情況時，如何在持守聖潔標準的同時，避免逼迫當事人走向傷害更大的錯誤選擇，展現出真正牧養的智慧與恩典。
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
              '在讀這一章之前，你對「婚前性行為」的認識，比較偏向單純的道德禁令，還是包含對身心關係深層影響的理解？',
              '暗嫩對他瑪「由愛轉恨」的故事，對你分辨「真愛」與「情慾」有何提醒？',
              '「婚前守貞是向世界展示不同生命力的方式」，你如何看待這個「反文化見證」的角度？這對你自己面對社會壓力有何幫助？',
              '如果你身邊有朋友正面臨未婚懷孕的處境，你會如何用本章提到的接納、關懷、實際建議的原則來陪伴他們？',
              '你如何理解「性慾望本身不是罪，但要學習成為它的主人」這句話？這對你自己管理身體界線有何具體提醒？',
              '本章提到「以上帝的標準律己會帶來喜樂平安」，你是否曾經歷過持守某個信仰原則後，反而獲得內心真正的平安？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 讀撒母耳記下十三章1-22節</h4>
              <p className="text-gray-700 mb-2">找時間讀暗嫩與他瑪的完整故事，觀察暗嫩從「愛」到「恨」的心理轉折，思想聖經如何誠實呈現情慾對人際關係的破壞力。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 為交往中的年輕人（自己或所關心的人）建立屬靈同伴監督</h4>
              <p className="text-gray-700 mb-2">
                若你正在交往中，或身邊有正在交往的年輕肢體，主動尋求或提供屬靈同伴的陪伴與提醒，避免落入獨處試探的處境，一起討論如何持守身體界線。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，求祢幫助我尊重祢所賜下、關於性與婚姻的美好設計，使我能作自己身體與慾望的主人，而不被情慾轄制。求祢賜給我力量勝過試探，也幫助我用尊重的態度對待每一位異性朋友。若我或身邊的人已經跌倒，求祢的恩典遮蓋，幫助我們在悔改中重新站立，活出聖潔而喜樂的生命。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
