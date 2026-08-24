import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Waves, Star, Search, HelpCircle, Check } from 'lucide-react';

const quote = "border-l-4 border-emerald-300 bg-emerald-50 pl-4 py-3 mb-3";
const quoteText = "text-emerald-800 leading-relaxed italic";

export default function Book40Ch17() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-800 to-orange-900 bg-clip-text text-transparent">第十七章</h1>
        <h2 className="text-xl font-semibold text-gray-700">第八誡：不可偷盜——基督徒的錢財觀</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          「貪財是萬惡之根。」（提前6:10）
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
              <h3 className="font-bold text-amber-900 text-lg mb-3">一、第八誡的精神</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「不可偷盜」是侵奪他人的資產，包括動產、不動產，或無形的智慧財產權等。第八誡的精神在於「尊重別人所擁有的」，並且「以自己所有的為滿足」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這條誡命也提醒我們：「交易要誠信」，禁止仿冒、偽造、虛偽廣告、賣有瑕疵品而不通告買者。箴言不斷提到：「兩樣的法碼，兩樣的升斗，都為耶和華所憎惡」（箴20:10、23）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神頒佈第八誡的目的，是要我們在「錢財上得自由」。基督徒有一個很重要的功課，就是要學習成為上帝「金錢」的好管家。聖經約有500節經文談到「禱告」；500節經文提到「信心」，卻有超過2350節經文談論有關「金錢」。因此，基督徒必須建立正確的「錢財觀」。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">二、如何賺錢？</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                <span className="font-semibold text-amber-700">一、要按正直、誠實的方式來求得錢財：</span>箴言書中常常教導我們不可以「謀財害命」（箴1:10-19），也不可以詭詐、甚至是欺騙的方法謀取錢財、賺取暴利（例：屯糧不賣）（箴11:1、26；16:11；20:10；21:6；28:16）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-amber-700">二、以殷勤、勤儉、積蓄的方式來求得錢財：</span>箴言不斷教導我們「殷勤、勤儉、積蓄致富」之道，並且勸勉我們不追求虛浮、速得的財物，因為那些錢財是不可靠的。
              </p>

              <h4 className="font-semibold text-amber-800 mb-2">問題思想：基督徒可不可以買股票？</h4>
              <p className="text-gray-700 leading-relaxed mb-2">
                （1）是為了「投機」？還是「投資」？許多人以投機的心態投入股票市場，短線操作，而不是真正想要投資產業。若買賣股票只是為了追求急速發財，必然落入貪財的網羅中，被許多愁苦刺透！
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                （2）是否會影響生活及情緒？特別短線操作的人，往往隨著股票的跌漲而影響生活和情緒，得不償失。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-amber-700">三、基督徒在工作或人生責任上，必須過普通人的生活。</span>耶穌雖然是神的兒子，祂仍然過著普通人的生活，以木匠的職業維生，直到神呼召祂出來傳道。保羅雖然貴為使徒，卻也以織帳篷為生。為了不累著別人，他「辛苦勞碌，晝夜做工」（帖前2:9；帖後3:7-8）。因此，他也鼓勵信徒：「又要立志作安靜人，辦自己的事，親手做工」（帖前4:11）。基督徒應當是一群最勤奮工作的好公民。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">三、如何看錢？</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                <span className="font-semibold text-amber-700">一、錢財的獲得必須把榮耀歸給神：</span>箴言八章18節：「豐富尊榮在我；恆久的財並公義也在我」；申命記八章18節也說：「你要記念耶和華——你的神，因為得貨財的力量是祂給你的」；大衛鼓勵以色列百姓要樂意奉獻，他說：「因為萬物都從你而來，我們把從你而得的獻給祢」（代上29:14）。何等謙卑的態度啊！
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-amber-700">二、神樂意賜人豐富資財：</span>箴言八章21節提到，神要使愛祂的人「承受貨財，並充滿他們的府庫」。錢財若善加利用是很好的事。聖經常把敬畏神的人與富足相連（詩112:3、9），神愛窮人，但恨惡貧窮（申15:5），安貧樂道的聖徒值得尊敬，但聖經沒有認為貧窮更屬靈（箴30:8-9）。神樂意使我們富足，當然，有時我們會因為服事而甘願貧窮，這是為了主的緣故（林後8:9）。
              </p>

              <h4 className="font-semibold text-amber-800 mb-2">三、錢財愈多、試探愈大</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                雖然富足並不犯罪，但聖經也不斷警告我們錢財的危險：
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-amber-700">（一）錢財易使人驕傲，落入倚靠錢財的網羅中：</span>富足的人容易忘記神的恩典，把榮耀歸給自己。富足的人也很容易落入倚靠無定的錢財的網羅中。箴言十一章28節說：「倚仗自己財物的，必跌倒」；保羅也勸勉今世富足的人「不要自高，也不要倚靠無定的錢財」（提前6:17）。所以富足的人要謙卑，不可藐視窮人，乃要幫助窮人。
              </p>
              <div className={quote}>
                <p className={quoteText}>
                  〈歷史的鑑戒之一〉百億樂透得主的故事：2002年聖誕節早上，55歲的傑克中了威力球樂透頭彩，獎金約台幣104億元，是當時的最高獎金。中獎消息曝光後，至少有150個人圍著他要錢，他花了三百萬美元打官司，官司纏身使他酗酒疏離、沒有朋友，甚至在酒吧被下藥迷昏、遭洗劫一空。最糟的是，厄運牽連到他最鍾愛的十五歲外孫女布瑞格。中獎後他慷慨買給她四部新車、每週兩千美元零用錢，一些「壞朋友」包括毒販看上了她的新車和零用錢。布瑞格禁不起引誘沾上毒品，中獎將滿兩週年之際失蹤，兩星期後屍體在一輛廢棄卡車上被發現。傑克說：「我的孫女就是因為這筆錢而死。」2009年他的女兒也在自宅過世，銀行報告顯示她已破產。傑克說：「我中樂透後，深感人性貪得無饜，你一有錢，人人覬覦，早知如此，我就把彩券撕掉。」
                </p>
              </div>
              <div className={quote}>
                <p className={quoteText}>
                  〈歷史鑑戒之二〉2020年新冠疫情的省思：苦難是「上帝的擴音器」，2020年的新冠疫情是上帝最大支、向全世界說話的擴音器！這場疫情讓人覺悟：再有錢的人家也無法避開傳染，世界最有錢的阿拉伯王室有150個成員全部確診；再高級的官邸也無法阻止渺小病毒的進入；再好吃的排隊名店也可能一夕收攤。疫情期間，維密宣布破產、ZARA關閉1200家店、拉夏貝爾撤掉4391家店、星巴克永久性關閉400家門店，全球最大保健食品公司GNC破產，疫情五個月時7.8億人負債、十幾萬家公司倒閉。人生經歷這次疫情，都該重新省思：「這世上有什麼是永不動搖的真富足呢？」保羅勸勉今世富足的人「不要自高，也不要倚靠無定的錢財；只要倚靠那厚賜百物給我們享受的神」（提前6:17）。只有神是永不動搖的，「信靠神的人」才是真富足！
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-amber-700">（二）錢財易使人操心，焦急：</span>保羅說：「但那些想要發財的人，就陷在迷惑、落在網羅和許多無知有害的私慾裡，叫人沉浸在敗壞和滅亡中。貪財是萬惡之根。有人貪戀錢財，就被引誘離了真道，用許多愁苦把自己刺透了」（提前6:9-10）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-amber-700">（三）錢財易使人曲解價值及先後順序，而攔阻與神、與人的關係：</span>路加福音十八章18-30節記載，那位少年官，因為太富足而攔阻他跟隨耶穌。因此，耶穌說：「有錢的人難進天國」！耶穌並非指有錢人有罪，乃指錢財可能讓人遠離神。所以，有錢的人要小心，要把錢財看淡，並不斷的給予！否則錢財無法成為他們的祝福。
              </p>

              <h4 className="font-semibold text-amber-800 mb-2">四、要明白人生的價值非取決於財富，乃取決於豐富的生命</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                一個只追求財利，而不追求神的人，神必不喜悅。箴言不斷提到，得著神的智慧，勝過得銀子、精金和珍珠。十五章16節說：「少有財寶，敬畏耶和華，強如多有財寶，煩亂不安」。十六章8節說：「多有財利，行事不義，不如少有財利，行事公義」。十九章1節說：「行為純正的貧窮人，勝過乖謬愚妄的富足人」；廿二章1節說：「美名勝過大財；恩寵強如金銀」。因此，我們不能把追求財利當成人生目標，不能又事奉神、又事奉瑪門（太6:19-25）；保羅教導我們，真正的富足是「生命的富足」（提前6:17-19），耶穌也說：「人的生命不在乎家道豐富」，而是「在神面前的富足」（路12:12-21）。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">四、如何用錢？</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-amber-700">一、不浪費錢財：</span>箴言廿一章17節警戒我們：「愛宴樂的，必致窮乏；好酒，愛膏油的，必不富足」；20節也說：「智慧人家中積蓄寶物膏油；愚昧人隨得來隨吞下。」保羅教導我們，「只要有衣有食，就當知足」（提前6:8）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-amber-700">二、要懂得奉獻及施捨：</span>保羅教導我們，上帝給我們富足的目的，不是為了讓我們過奢華、揮霍的生活，而是為了讓我們「多行各樣的善事」（林後9:6-10）；保羅也勸勉今世富足的人要「行善」，在「好事上富足」，甘心施捨，樂意供給人，為自己積成美好的根基，預備將來（提前6:18-19）。耶穌也說：「不要為自己積儹財寶在地上，地上有蟲子咬、能鏽壞、也有賊挖窟窿來偷，只要積儹財寶在天上，天上沒有蟲子咬、不能鏽壞、也沒有賊挖窟窿來偷」（太6:19-20）。
              </p>

              <div className={quote}>
                <p className={quoteText}>
                  〈美好見證之一〉美國有一位從事貿易的弟兄，非常慷慨奉獻。有一次，一位基督教機構的主管來向他募款，他慷慨地開了一張1萬美元的支票給他。此時，他的員工焦急地跑來說：「老闆！剛剛我們一艘船在海上碰上礁石沉沒了！」這位弟兄皺了皺眉頭，就對這位募款的弟兄說：「對不起！麻煩您把剛剛我給您的支票給我！」這位主管心想，他必定是要減少奉獻。然而，出乎意料的是，這位弟兄竟然重新開了一張10萬美金的支票給他！主管詫異地問為何損失一大筆錢反而奉獻更多，弟兄回答說：「是的！您看到了！地上的錢財很不保險，隨時可能失去，因此，我想我還是把錢存在天上比較保險！」
                </p>
              </div>

              <div className={quote}>
                <p className={quoteText}>
                  〈美好見證之二〉美國石油大王洛克斐勒的故事：洛克斐勒年幼決定要致富，33歲賺進人生第一個一百萬，53歲成為全球首富，但染上脫毛症，頭髮、眉毛、睫毛都脫落，活得如同乾瘦的木乃伊，只能吃餅乾和牛奶，心靈沒有平安、不會笑、毫無人生情趣可言！在他生命最艱難的時刻，耶穌進入他的生命中，不但生命改變，對金錢的看法也徹底改變。當他領悟到聖經「施比受更為有福」的真理後，於是反過來開始儘量捐輸，盈千累萬的施給需要的人，捐錢給教會及窮人，創立洛克斐勒基金會，支持醫學研究，發明盤尼西林和許多的新藥；他創辦芝加哥大學，使芝大今日成為世界著名的學府。他從此吃得下、睡得著，心中有喜樂，醫生本判定他只能活到54歲，但他活到98歲！他的墓碑上寫著：「我在地上所投資的都會過去，但在天上所投資的將存到永遠。」
                </p>
              </div>

              <div className={quote}>
                <p className={quoteText}>
                  〈美好見證之三〉查克費尼的故事：他已76歲，和妻子居住在美國三藩市的一套一居室的出租屋裡。他從來沒有穿過名牌衣服，眼鏡破舊不堪，佩戴的手錶是地攤上的塑膠手錶，最喜歡的是價格低廉的烤乳酪番茄三明治，沒有自己的小汽車，外出通常都是乘坐公車。他曾投入10億美元，改造和新建了愛爾蘭的7所大學和北愛爾蘭的兩所大學；他曾建立慈善基金為發展中國家的齶裂兒童做免費手術，迄今已捐出40億美元，還有40億美元等待捐獻。他就是全球免稅集團DFS的創始人——對己吝嗇、待人大方、喜歡掙錢，卻不喜歡擁有錢的查克費尼。比爾蓋茨和巴菲特深受他的影響並已付諸行動。查克費尼說：「上帝那裡沒有銀行，每個人都是赤裸裸地誕生，最後又孑然而去，沒有人能帶走自己一生苦苦經營的財富與盛名。」媒體追問他為何非要捐得一乾二淨，他的回答很簡單：「裹屍布上沒有口袋。」
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">五、問題思想一：有關「成功神學」與「苦難神學」的爭論</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                苦難神學強調「我們成為基督徒必須為主受苦」；成功神學強調「我們成為基督徒之後，會得到各方面的祝福；包括身體、財務及人生各方面的興盛」，因為約翰說：「親愛的兄弟啊！我願你凡事興盛，身體健壯，正如你的靈魂興盛一樣」（約三2）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                到底那一種神學是符合聖經真理的呢？我們反對極端的「苦難神學」及極端的「成功神學」。到底基督徒應追求富足的生活？還是過著「安貧」的生活呢？我們應從三方面來衡量：
              </p>

              <h4 className="font-semibold text-amber-800 mb-2">一、那一種生活較能「榮耀神」？</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                基督徒不是成功神學，也不是苦難神學，而是「榮耀神學」。「榮耀神」是我們活著的最高目標。主張基督徒「貧窮」才屬靈，不一定是對的，但強調基督徒要過最高檔的生活才是榮耀神，也不符合聖經。「極端成功神學」的人認為，基督徒住豪宅、五星級飯店、開名貴轎車、坐頭等艙、穿名牌、戴名牌才是榮耀神，這是很大的偏差。許多世界級有名的傳道人，都因著過著太高檔的生活而為人詬病，絕對不會更榮耀神的！把「奢華」當作榮耀神，當作神的賜福，是我們無法認同的。
              </p>
              <div className={quote}>
                <p className={quoteText}>
                  〈美好的見證之一〉烏拉圭總統荷西．穆希卡的故事：他不帶保安，不打領帶，身上找不出一件名牌精品，卻是拉丁美洲最受歡迎的總統！他申報的財產僅有郊區一棟舊農舍和兩塊農地、兩輛一九八七年福斯金龜車、兩輛拖拉機，加上銀行不到廿萬美元存款。他拒絕遷入總統官邸，因為「那比蹲過十四年的牢房大太多」；拒絕隨扈和防彈轎車，自己每天開著車齡四分之一世紀的金龜車上下班。他把一萬三千美元月薪的九成捐給遊民救助基金，說：「剩下的夠我用了，如果有這麼多同胞，連這數目都賺不到，我怎能說不夠呢？」西班牙媒體以「全球最窮總統」報導他，他回應：「我不窮，說我窮的人才是真窮……儉樸卻使我覺得非常富足」。
                </p>
              </div>
              <div className={quote}>
                <p className={quoteText}>
                  〈美好的見證之二〉馬鞍峰教會華里克牧師的見證：華理克牧師所著「標竿人生」一書成為全球暢銷書，為他賺進不少版稅，然而他除了把過去25年來教會給他的薪資退還給教會之外，還成立了三個慈善基金。他說：「我們完全不會改變我們的生活模式，我們不會在自己身上花那些金錢。我仍然住在那所住了十四年的房子，仍然駕駛那輛六年車齡的福特房車，我沒有遊輪，沒有私人飛機」。
                </p>
              </div>

              <h4 className="font-semibold text-amber-800 mb-2">二、那一種生活最能「幫助人」？</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                哥林多後書九章8節：「神能將各樣的恩惠多多的加給你們。使你們凡事常常充足，能多行各樣善事」，神給我們富足是為了讓我們更多去幫助別人。因此，若主張成功神學，卻不強調過簡樸的生活，也不強調奉獻及捐輸的重要性，那就是災難一場！約翰衛斯理有一句名言：「多多賺錢、多多存錢、多多給予」，我相信這是最平衡的金錢觀。
              </p>
              <div className={quote}>
                <p className={quoteText}>
                  〈美好的見證之三〉約翰衛斯理的故事——永遠的28英鎊：衛斯理出生於十八世紀的英國，年輕時在牛津大學任教，收入不虞匱乏，常將金錢花費在紙牌、香煙和白蘭地等娛樂開銷中。某寒冬，他發現整理房間的服務員身上只穿了一件單薄的外套，想給他一點錢買禦寒衣物，卻發現自己的錢早已揮霍完了。他因此心中產生極大的羞愧，開始妥善規劃錢財。那年，他的收入是30英鎊，支出費用為28英鎊，他便將剩餘的2英鎊捐出。隔年，收入增加至60英鎊，他依然維持28英鎊的支出，捐出其餘的32英鎊；接下來幾年，他都將所餘的錢全數捐給需要幫助的人，直到晚年年收入已達上千英鎊，但他仍然只花費28英鎊。約翰衛斯理於1791年逝於倫敦，沒有留下什麼遺產，只留下了「一批為數不少的書籍，一件穿舊了的牧師袍，一個常被咒罵的名字，以及一個循道教會（衛理公會）」。
                </p>
              </div>

              <h4 className="font-semibold text-amber-800 mb-2">三、那一種生活對自己最有造就？</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                若過度貧窮，以致我們必須把所有時間用在賺取生計上，我們應求主讓我們早日脫離貧窮；但若賺錢的門路很多，以致我們必須投入所有的時間去賺錢，而忽略了靈性的追求，服事的機會，忽視了家庭的生活，甚至把自己身心靈的健康都賠進去了，這樣的富足絕不是神的祝福！
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們教會有些弟兄姐妹常常求神讓他的工作不要太少，也不要太多，以致影響了他的家庭及屬靈生活，我相信這樣的禱告是神所喜悅的。詩人也禱告說：「使我也不貧窮、也不富足；賜給我需用的飲食，恐怕我飽足不認你，說：耶和華是誰呢？又恐怕我貧窮就偷竊，以致褻瀆我神的名」（箴30:8-9）。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">六、問題思想二：基督徒可不可以儲蓄？原則為何？</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                有人主張基督徒不應儲蓄，應當完全仰望神的供應，儲蓄就是小信，不相信神能供應我們一切所需要的。筆者認為這樣的教導過分嚴苛，基督徒當然應當信靠神的供應，知道得貨財的力量是從神而來，基督徒不能因為為明天憂慮或沒有安全感而儲蓄（太6:30-34）。但聖經並沒有禁止儲蓄，甚至認為儲蓄是智慧的作法。箴言六章8節勸勉我們要從螞蟻得智慧，學習它們：「在夏天預備食物，在收割時聚斂糧食」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                然而，箴言三章27-28節也教導我們：「若我們有行善的力量，不可推辭，就當向那應得的人施行。你那裡若有現成的，不可對鄰舍說：去吧，明天再來，我必給你」。我們不能因為強調儲蓄而不願意慷慨地幫助別人。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">七、問題思想三：基督徒可否借貸？有那些情況可以借貸？</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                借貸是許多人理財的問題。今天，愈來愈多人愛享樂，就算沒有錢，也要「先享受、後付款」，以致債台高築，成為卡奴，甚至有人因為還不起債務而尋短見。聖經基本上不鼓勵我們借貸，基督徒也必須在借貸上謹慎小心：
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-amber-700">一、借貸使你成為債主的僕人，經由利息吞沒你的財產：</span>箴言廿二章第7節：「富戶管轄窮人；欠債的是債主的僕人」。借貸的人往往成為債主的僕人，有人甚至因為借高利貸，以致更是被債主剝削，痛苦不堪！
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-amber-700">二、借貸使你假定未來：</span>箴言廿七章1節說：「不要為明日自誇，因為一日要生何事，你尚且不能知道」。許多人過度借貸，因為他們認為自己工作收入不錯，可以負擔得起，但卻因為發生一些意外而導致工作收入受影響，以致無法償還債務。例如，筆者見過許多人，明明沒有多少頭期款，卻高額貸款買房子，最後因付不出貸款而房子被法拍，令人不勝唏噓！
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-amber-700">三、借貸表現你對基本需要不滿足，使你消費多過你所預算的：</span>「量入為出」是正確理財的原則，但許多人明明沒有錢，卻想要開好車、住豪宅、出入高級餐廳、或者常常出國旅行，反正信用卡很方便，因此，債務就愈來愈多了！基督徒當知足常樂，上帝若沒有量更多的錢財給我們，我們就過簡單的生活，生活仍然可以是幸福、喜樂的！
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-amber-700">四、借貸使你逃避自我反省：</span>許多人錢不夠用，不是因為賺的太少，而是花的太多，沒有節制。因此，當你錢不夠用時，應當反省自己用錢的方式是否得當。然而，方便的借貸讓人逃避自我反省，以致落入不斷欠債的漩渦中！
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-amber-700">五、借貸鼓勵衝動性購買：</span>當我們手頭拮据時，我們會更理性、謹慎地購物。然而，借貸愈方便，愈會鼓勵我們衝動性購買。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「借貸」有可能使我們在經濟上不自由，因此，有人主張基督徒當一塊錢都不能借貸，甚至買房子都不能貸款。筆者認為這樣的教導過度嚴苛，因為若不買房子，長期支付租金也是一種負擔，當貸款利息低的時候，若有足夠的頭期款，買房是比租房更合算，是應當可以借貸的。但正如前述，買房子不應貸款過高，造成負擔。除此之外，若為生財工具而貸款，應當也是合理的，例如，有些人必須購買生財用的車具或機具。
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
                '第八誡的精神是「尊重別人所擁有的」並「以自己所有的為滿足」，聖經談論金錢的經文（超過2350節）遠多於禱告和信心的經文，可見基督徒建立正確錢財觀的重要性；賺錢應按正直誠實、殷勤勤儉的方式，避免投機心態（如短線炒股），也應在工作上活出普通人勤奮的榜樣（如耶穌做木匠、保羅織帳篷）。',
                '看錢的態度上，錢財的獲得當歸榮耀給神，神也樂意賜人豐富資財，但錢財愈多試探愈大——容易使人驕傲倚靠錢財（樂透得主家破人亡的悲劇）、使人操心焦急（貪財是萬惡之根）、曲解價值先後順序而攔阻與神與人的關係；人生價值取決於豐富的生命，而非取決於財富多寡。',
                '用錢之道在於不浪費、懂得奉獻施捨——洛克斐勒從掠奪抓取到祝福給予的生命轉變、查克費尼「裹屍布上沒有口袋」的慷慨捐輸，都印證「地上的投資會過去，天上的投資存到永遠」的信念。',
                '面對「成功神學」與「苦難神學」的爭論，作者主張兩者皆非，而是「榮耀神學」——用三個標準衡量：哪種生活更能榮耀神（反對奢華即蒙福的偏差，穆希卡總統、華理克牧師的簡樸見證）、哪種生活最能幫助人（約翰衛斯理「多多賺錢、多多存錢、多多給予」的平衡金錢觀）、哪種生活對自己最有造就（不貧窮也不富足，恰到好處的禱告）。',
                '對於儲蓄與借貸，作者持中庸務實的立場——儲蓄本身並非小信，聖經甚至以螞蟻為榜樣鼓勵預備儲糧；借貸雖有五大風險（成為債主僕人、假定未來、消費超支、逃避反省、衝動購買），但並非絕對禁止，量力而為的房貸或生財工具貸款仍屬合理，過度嚴苛地一概禁止並不符合聖經教導的平衡精神。',
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
              <h4 className="font-semibold text-gray-800 mb-2">百億樂透得主的悲劇，對「意外之財」的屬靈警惕有何深刻提醒？</h4>
              <p className="text-gray-700 leading-relaxed">
                傑克的故事極其震撼——巨額財富非但沒有帶來幸福，反而摧毀了他的事業、婚姻、家人的生命與人際關係，他最終後悔「早知如此就把彩券撕掉」。這提醒我們，未經過生命成熟預備、突如其來的財富，往往超過人心靈可以承受與駕馭的能力，這對思考「基督徒可否買樂透」這類問題，提供了比單純道德說教更有說服力的血淋淋案例。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「極端成功神學」批評傳道人過奢華生活，這對今日教會界的講台誠信有何提醒？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者直言許多世界級傳道人因過著高檔生活而為人詬病，這個坦率的批評對教會界具有自我省察的意義——當講台傳講的信息與講員個人生活方式產生強烈反差時，信息的說服力與見證力都會受損。這提醒教會領袖，財務誠信與生活簡樸不僅是個人操守問題，更直接影響福音的可信度。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">約翰衛斯理「永遠的28英鎊」的故事，對今日消費主義下的信徒理財觀有何挑戰？</h4>
              <p className="text-gray-700 leading-relaxed">
                衛斯理刻意維持固定支出、把收入增長的部分全數捐出的做法，直接挑戰了「收入增加後生活水準理應同步提升」的現代消費主義預設。這個榜樣提醒信徒，理財的核心問題不是「我賺多少」，而是「我選擇如何使用增加的部分」——這種主動抵擋生活水準通膨（lifestyle inflation）的操練，值得今日在物質豐富環境中成長的基督徒認真思考。
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
              '在讀這一章之前，你認為聖經對金錢的態度是「越窮越屬靈」還是「越富越蒙福」？讀完後，你如何理解「榮耀神學」這個第三種立場？',
              '樂透得主傑克的悲劇故事，對你原本可能有的「有錢就會幸福」的想法有何衝擊？',
              '約翰衛斯理「多多賺錢、多多存錢、多多給予」的金錢觀，你認為自己目前的理財方式，比較偏重哪一項、又忽略了哪一項？',
              '面對本章提出的三個衡量標準（哪種生活更榮耀神、更能幫助人、對自己最有造就），你如何評估自己目前的生活型態與消費習慣？',
              '你如何看待「借貸使人逃避自我反省」這個提醒？你是否曾用借貸或分期付款來掩蓋自己消費習慣需要調整的事實？',
              '詩人禱告「使我也不貧窮、也不富足，賜給我需用的飲食」，你是否也曾這樣為自己的財務狀況禱告？這句禱告對你的金錢觀有何啟發？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 讀提摩太前書六章6-19節</h4>
              <p className="text-gray-700 mb-2">找時間讀保羅對錢財完整的教導，包括「敬虔加上知足的心便是大利了」與對富足人的勸勉，建立整全的錢財觀。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 檢視自己的收支與奉獻比例</h4>
              <p className="text-gray-700 mb-2">
                效法約翰衛斯理的操練，誠實檢視自己目前的收入、支出、儲蓄、奉獻比例，思考是否隨著收入增加而同步提高了「給予」的比例，或只是同步提高了自己的生活水準。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，求祢幫助我建立合乎祢心意的錢財觀，不貪戀虛浮的財富，也不因缺乏而心生焦慮。求祢使我成為祢金錢的好管家，按正直誠實的方式賺取，以感恩知足的心使用，並樂意慷慨地給予有需要的人。求祢使我明白，人生的價值不在乎家道豐富，而在乎在祢面前的富足。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
