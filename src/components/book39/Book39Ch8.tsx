import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;
const quote = "border-l-4 border-emerald-300 bg-emerald-50 pl-4 py-3 mb-3";
const quoteText = "text-emerald-800 leading-relaxed italic";
const th = "border border-gray-300 px-3 py-2 bg-slate-100 text-center";
const td = "border border-gray-300 px-3 py-2 text-center";

export default function Book39Ch8() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-slate-800 to-blue-900 bg-clip-text text-transparent">第八章</h1>
        <h2 className="text-xl font-semibold text-gray-700">跟隨基督的關鍵少數——重洗派倫理學</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          「你們是世上的鹽。鹽若失了味，怎能叫它再鹹呢？以後無用，不過丟在外面，被人踐踏了。你們是世上的光。城造在山上是不能隱藏的。人點燈，不放在斗底下，是放在燈臺上，就照亮一家的人。你們的光也當這樣照在人前，叫他們看見你們的好行為，便將榮耀歸給你們在天上的父。」（太5:13-16）
        </p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-slate-50 to-blue-50 hover:from-slate-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-slate-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <p className="text-gray-700 leading-relaxed">
              這處經文以「世上的鹽」、「世上的光」描述基督的跟隨者，可見耶穌基督對門徒做了何等誠懇真摯的交託！一般常用個人倫理的角度來解讀這段經文，好像耶穌基督針對每一位聽者說話，「你們」不過是指向群體中的每一個你、每一位門徒，以致認為做光、做鹽的吩咐都指向個體。
            </p>
            <p className="text-gray-700 leading-relaxed">
              這樣的解讀過於片面，因為這段經文接在八福經文之後，而八福的重點是宣告上帝國的福氣，對象則是對應於上帝國的門徒群體，做光、做鹽的吩咐所交託的對象原本就是複數，作為信仰群體的教會應當盡力持守這託付，在教會歷史上承接這個任務的教會往往就是重洗派。
            </p>
            <p className="text-gray-700 leading-relaxed">
              宗教改革時期有一支改革運動群體被稱為「重洗派」，他們追求徹底的改革，亦即完全追隨耶穌基督的教導，在教會歷史上成為特別的見證，也是基督教倫理學的一個獨特類型。重洗派起源於最基層的草根人民，他們想要認真徹底、字字句句都跟隨基督，以致常常面對壓力，甚至是受逼迫的少數，但卻因徹底跟隨基督，有時反而成為「關鍵少數」。
            </p>
            <p className="text-gray-700 leading-relaxed">
              重洗派並不主張個體主義，他們過著群體生活——群體性地跟隨基督，他們的信仰見證就是群體生活見證。因此重洗派重視的是質而不是量，有如鹽的價值在於有鹹味，光的特色則在於明亮。來到二十一世紀談重洗派，重點已非單單指向歷史的過去，而指向重洗派追求藉由信仰群體生活落實基督教信仰的神學思想，其實這樣的神學思想已不限於重洗派教會，許多非重洗派教會的信徒與神學家也做具有同樣特質的神學。
            </p>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">一、重洗派倫理道德觀</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                重洗派信徒曾加入慈運理在蘇黎世的宗教改革，後來與慈運理分道揚鑣，因為他們對改革的期待更加徹底，包括廢除嬰兒洗禮。當時教會的每個嬰孩出生不久後就受洗，已淪為徒有形式，重洗派主張只能有成人洗禮。但由於人人都曾受過洗，他們的主張形同二度洗禮——「重洗派」（Anabaptists）就是外界給他們的稱呼。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                重洗派經歷過許多嚴酷的迫害，在蘇黎世即因與慈運理衝突而被迫害。一方面，他們是來自基層的草根群眾，最為弱勢且缺乏外界的保護力量。<sup>1</sup><span style={cite}>（William R. Estep, The Anabaptist Story (Grand Rapids: Eerdmans, 1975). 此書有許多重洗派被迫害的故事。）</span>相形之下，路德有強大諸侯全力支持，宗教改革一帆風順；加爾文在日內瓦面對三級議會，為了爭取議會支持推動改革，必須百般忍讓；唯有來自草根基層的重洗派一無所有。另一方面，重洗派要求徹底改革，想要完全回歸聖經，棄絕外在的禮儀形式及歷史傳承，在神學光譜上離天主教會最遠。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                重洗派從起初就不擅長組織，逐漸凝聚成群體後，以荷蘭宗教改革者門諾（Menno Simons, 1496-1561）所帶領的群體為代表。<sup>2</sup><span style={cite}>（Timothy George, Theology of the Reformers (Nashville: Broadman, 1988), 252-323.）</span>重洗派主張作門徒、愛、弟兄情誼：作門徒意味在實際生活中以行動按照新約聖經跟隨基督；愛指向徹底落實基督之愛的和平主義；弟兄情誼則強調團契生活、聖徒相通，並在信仰群體中互相支持、彼此關顧。<sup>3</sup><span style={cite}>（溫哲思（J. C. Wenger），《信仰的內容》〔香港：宣道，1988〕，75-86。）</span>重洗派認為作基督徒就要徹底跟隨基督，因此特別重視新約，尤其嚴格遵行登山寶訓，並按照字句解經，有些重洗派教會在聖餐時也守耶穌基督示範過的洗腳禮。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                整體而言，重洗派重視信心必藉由行為見證來表達，如雅各書二章26節所說：「身體沒有靈魂是死的，信心沒有行為也是死的。」在耶穌基督宣稱的三樣「我是」——道路、真理、生命中（約14:6），「道路」最能突顯跟隨耶穌基督者必須以行動配合。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                使徒行傳九章2節把基督徒稱為「信奉這道的人」，按照原文是「屬這道路的」；使徒行傳十八章25節描述亞波羅「在主的道上受了教訓」，按照原文是「在主的道路已受教導」；使徒行傳二十四章14節記載保羅的話：「我正按著那道事奉我祖宗的上帝」，按照原文是「我正按著那道路事奉我祖宗的上帝」。把信仰稱為「道路」，提示說信仰就是走在一條道路上，而重洗派的倫理道德觀就是注重以群體的行為見證來走在這條路上。
              </p>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 與世有別的對照群體</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  重洗派追求的理想，就是教會要與社會有別，必須與社會形成明顯的對比，作為與社會對照的群體。「若有人在基督裡，他就是新造的人，舊事已過，都變成新的了。」（林後5:17）這節經文說到個體，但也可用在群體，比如：「若有群體在基督裡，這群體就是新造的群體，舊事已過，都變成新的了。」
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  初代教會在傳福音的同時，非常努力成為新造的群體。哥林多書信使我們看見當保羅面對混亂複雜的教會形勢時，始終堅持教會要與社會有所分別，如哥林多前書五章9～11節：
                </p>
                <div className={quote}>
                  <p className={quoteText}>
                    我先前寫信給你們說，不可與淫亂的人相交。此話不是指這世上一概行淫亂的，或貪婪的，勒索的，或拜偶像的；若是這樣，你們除非離開世界方可。但如今我寫信給你們說，若有稱為弟兄是行淫亂的，或貪婪的，或拜偶像的，或辱罵的，或醉酒的，或勒索的，這樣的人不可與他相交，就是與他吃飯都不可。
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  保羅主張對未信者與信仰者應當有不同的態度：對於還沒有信主的人，不論其言行如何敗壞，都要接近、認識他，期待福音帶給他改變；但如果是主內弟兄姊妹也是如此的話，還能接近他們嗎？試問今日在教會若是遇到言行敗壞的基督徒，我們應當如何面對呢？僅僅裝作不知道是不夠的，應當為了信仰立場而有所表態區別。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  在現實中的教會裡經常與這段經文所說的相反，若看到未信者有不好的習慣與價值觀，會想要與其保持距離，免得受到影響；至於那些教會裡的信徒若有不好的習慣與價值觀，則多半習而不察或覺得無所謂，有時還會想要保持好關係，以致那些人對教會仍有影響力。當牧師遇到教會裡行為不檢的信徒，而且還是長老同工，並對教會的決定有重要影響時，還能持守區別的原則嗎？這是嚴厲的考驗。一旦重洗派的理想被遺忘，教會就成了一般的群體，最多只是追求教會增長，以人數增加或建造更大的禮拜堂為教會目標，卻沒有心思去堅守教會的身分。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  做科學實驗的基本原則，一定要有實驗組與對照組，兩者條件一樣，只是實驗組有一變項為對照組所無，通常是加添特定材料，藉此觀察實驗組是否發生變化而與對照組不同。若有變化則可證明，這個變項具有特定功效。按此看來，實驗組是教會，對照組則是社會，教會和社會所有條件都一樣，只是教會添加了一個不同的因素——信仰，如果這因素導致顏色變化或激烈反應，那就證明信仰造成了改變。最糟的情況是，加入信仰因素的實驗組——教會——完全無法讓人看到與對照組——社會——有任何不同，這意味著信仰竟然無法帶來任何改變。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  簡而言之，賣藥廣告總有使用前和使用後的對比，使用前病懨懨、瘦巴巴，使用後則身強力壯、截然不同，但若使用前與使用後完全一樣，有誰會買這藥呢？這藥就代表基督教信仰，信仰後應當與信仰前有明顯的不同——信仰群體的改變見證，才能對未信者有說服力。照理說，具有信仰因素的信仰群體，首先要追求質的改變，然而通常只有少數人追求信仰群體品質的提升，多數人則對事工增長、人數增多、奉獻增加更有興趣。重洗派有如中流砥柱，呼籲回到最起初的信仰群體本質——「我們究竟是誰」、「信仰群體如何與世有別」，這才是關鍵性問題。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">2. 和平主義</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  重洗派是和平主義者，因耶穌基督在登山寶訓說：
                </p>
                <div className={quote}>
                  <p className={quoteText}>
                    你們聽見有話說：「以眼還眼，以牙還牙。」只是我告訴你們，不要與惡人作對。有人打你的右臉，連左臉也轉過來由他打；有人想要告你，要拿你的裡衣，連外衣也由他拿去；有人強逼你走一里路，你就同他走二里；有求你的，就給他；有向你借貸的，不可推辭。「你們聽見有話說：『當愛你的鄰舍，恨你的仇敵。』只是我告訴你們，要愛你們的仇敵，為那逼迫你們的禱告。」（太5:38-44）
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  舊約的「以眼還眼，以牙還牙」主張律法的公平原則，傷人眼睛者要付出損壞自己眼睛的代價，傷人牙齒者也要自己付出同樣的代價。然而，耶穌賦予這經文新的解釋：「有人打你的右臉，連左臉也轉過來由他打」，因為「打」這動作是不對的，假若以武力反抗就陷入了同樣的錯誤。如此引申下去，有人要拿裡衣，連外衣也任由他拿去；被強逼走一里路，就同他走二里。這段經文如果按照字句直解，和平主義是無可迴避的選項。
                </p>
              </div>

              <div>
                <span className="font-semibold text-slate-700">3. 與世隔離的見證</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  艾米許人（The Amish）是一群瑞士與德國的門諾會信徒移民到美國，以與世隔離的方式建立聚落，刻意與社會隔絕。他們認為隨著文明產物而來的就是世界價值觀，因此大多數聚落仍過著農業生活，由自己人負責教育，只接納政府派來的英文與數學老師，有些艾米許人甚至仍使用古老的德語。艾米許人堅定主張和平主義，拒絕服兵役並且反對納稅，不認同政府把稅金作為軍事用途。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  艾米許人的信仰生活是以新約聖經為中心，嚴格遵守耶穌基督的教訓，以實際生活實踐其信仰理想。由於與社會群體隔絕，需要信仰群體成員互相幫忙，比如蓋房子需要同心合意地一起工作。這樣的理想在美國還是面對愈來愈大的挑戰，畢竟艾米許人的群體難以阻擋現代文化無所不在的貫穿力量，然而凡有信仰群體，不計一切、勇敢認真地追求信仰理想落實於群體生活見證，就是值得尊重的信仰群體。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">二、道路的福音</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                重洗派學者、作家克雷比（Donald B. Kraybill）於一九七八年出版《上下顛倒的國度》，<sup>4</sup><span style={cite}>（Donald B. Kraybill, The Upside-Down Kingdom (Scottdale: Herald, 1990).）</span>此書的寫作對象為一般讀者，呈現重洗派對基督耶穌教導的理解，引發許多關注。以下介紹此書的主要觀點，作為認識重洗派倫理道德觀的入門。
              </p>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 為何上帝國是上下顛倒的？</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  當保羅和西拉來到帖撒羅尼迦傳福音，不信的猶太人招聚市井匪類，煽動合城的人闖進耶孫的家，要把保羅和西拉帶到百姓那裡，他們喊叫說：「那攪亂天下的也到這裡來了，耶孫收留他們。這些人都違背凱撒的命令，說另有一個王耶穌。」（徒17:6-7）群眾稱保羅和西拉為「那攪亂天下的」是誣告，但由於「攪亂天下」原有打亂世人居住之處的涵義，倒無意間說出真相，因宣揚耶穌基督是主，而祂傳講的上帝國福音，內容與世界價值觀有許多衝突之處，把原有價值觀的上下階層、孰重孰輕、何者優先等全都上下顛倒了：以下為上、以上為下；以強為弱、以弱為強；以貴為賤、以賤為貴——徹底顛覆人心許多刻板印象，帶來驚奇、錯愕與害怕。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">2. 上帝國價值觀</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  當耶穌受魔鬼試探時（太4:1-11；路4:1-13），其一，面對政治的誘惑——成為君主，拜魔鬼而得著世上榮華權勢，耶穌以「當拜你的上帝，單單事奉祂」拒絕了；其二，當面對宗教的誘惑——成為教主，從聖殿跳下施行神蹟，他以「不可試探你的上帝」拒絕了；當面對財富的誘惑——成為財主，把石頭變成食物，他以「人不是單靠食物，乃是靠上帝的話」拒絕了。耶穌在受試探時，拒絕了政治君主、宗教教主、金錢財主的誘惑，亦即拒絕了大部分世人所嚮往追求的，呈現上帝國價值觀與世界價值觀截然不同。<sup>5</sup><span style={cite}>（Donald B. Kraybill, The Upside-Down Kingdom, 35-88.）</span>
                </p>
                <div className="overflow-x-auto my-3">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr><th className={th}>世界觀點</th><th className={th}>高</th><th className={th}>能力</th><th className={th}>主宰</th><th className={th}>第一</th><th className={th}>成人</th><th className={th}>統治</th><th className={th}>控制</th><th className={th}>武力</th></tr>
                    </thead>
                    <tbody>
                      <tr><td className={td}>耶穌觀點</td><td className={td}>低</td><td className={td}>無力</td><td className={td}>順從</td><td className={td}>最後</td><td className={td}>小孩</td><td className={td}>臣服</td><td className={td}>讓步</td><td className={td}>和平</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">3. 表現在關係中的上帝國——人、土地<sup>6</sup><span style={cite}>（Donald B. Kraybill, The Upside-Down Kingdom, 22-24.）</span></span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  根據路加福音，耶穌首度在拿撒勒講道，引用以賽亞書六十一章1～2節說：「主的靈在我身上，因為他用膏膏我，叫我傳福音給貧窮的人；差遣我報告：被擄的得釋放，瞎眼的得看見，叫那受壓制的得自由，報告上帝悅納人的禧年。」（路4:18-19）耶穌認同這位使者的身分，傳揚福音，帶來好消息，尤其是宣揚禧年。從利未記第二十五章可知，禧年就是在七個安息年之後：
                </p>
                <div className={quote}>
                  <p className={quoteText}>
                    第五十年，你們要當作聖年，在遍地給一切的居民宣告自由。這年必為你們的禧年，各人要歸自己的產業，各歸本家。第五十年要作為你們的禧年。這年不可耕種；地中自長的，不可收割；沒有修理的葡萄樹也不可摘取葡萄。因為這是禧年，你們要當作聖年，吃地中自出的土產。（利25:10-12）
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  禧年將使人與人的關係及人與土地的關係回歸上帝的心意：宣告釋放奴隸使其得自由、土地買賣歸回本家、不可耕種讓地休息，不只要人與人和好，也要人與土地和好。當人安息不耕種時，就是土地得安息時，而且土地的自然收成可歸給弱勢、貧窮者，有如安息年的規定：「地在安息年所出的，要給你和你的僕人、婢女、雇工人，並寄居的外人當食物。這年的土產也要給你的牲畜和你地上的走獸當食物。」（利25:6-7）總之，禧年來到時呈現一幅美景：人與人和平相處，人與土地和諧共存，而且土地也因人們安息而得著安息。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">4. 耶穌對錢財的警告<sup>7</sup><span style={cite}>（Donald B. Kraybill, The Upside-Down Kingdom, 126-129.）</span></span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  耶穌一向提醒人要警覺錢財的不良影響，在比喻裡提到福音種子無法結實的原因：「撒在荊棘裡的，就是人聽了道，後來有世上的思慮、錢財的迷惑把道擠住了，不能結實。」（太13:22）耶穌要提醒人，不能又事奉上帝，又事奉瑪門（財利）；不要為生命的飲食憂慮，也不要為身體的衣裳憂慮；不要憂慮說，吃什麼？喝什麼？穿什麼？要先求上帝的國和祂的義，這些東西都要加給你們了。（太6:24-34）耶穌提到有錢的財主和討飯的拉撒路，財主生前享受，死後卻受苦，而拉撒路生前痛苦，死後卻得安慰。（路16:19-31）在無知財主的比喻裡，財主為錢財操心，一心想要享樂，「上帝卻對他說：『無知的人哪，今夜必要你的靈魂；你所預備的要歸誰呢？』凡為自己積財，在上帝面前卻不富足的，也是這樣」。（路12:16-21）
                </p>
                <p className="text-gray-700 leading-relaxed">
                  路加福音中的「四福」指向貧窮、飢餓、哀哭、為人子被恨惡的人，「四禍」則指向富足、飽足、喜笑、被人都說好的人。（路6:20-26）這一切都呈現上帝國的價值觀與世界價值觀強烈衝突，按照世人的眼光來看這樣一個國度，確實是一個上下顛倒的國度。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">5. 累進十一奉獻<sup>8</sup><span style={cite}>（Donald B. Kraybill, The Upside-Down Kingdom, 138-139.）</span></span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  克雷比認為一般基督徒熟悉的十一奉獻過於制式化，沒有考慮到財富累積所造成的增值，一般政府徵稅時經常考慮累進稅率，因此他提出累進十一奉獻與一般十一奉獻的比較，從收入30000元作為出發點：
                </p>
                <div className="overflow-x-auto my-3">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr><th className={th}>收入</th><th className={th}>基本十一</th><th className={th}>累進奉獻</th><th className={th}>留給自己</th></tr>
                    </thead>
                    <tbody>
                      <tr><td className={td}>30000</td><td className={td}>-3000</td><td className={td}>0</td><td className={td}>27000</td></tr>
                      <tr><td className={td}>31000</td><td className={td}>-3000</td><td className={td}>-1000×15%</td><td className={td}>27850</td></tr>
                      <tr><td className={td}>32000</td><td className={td}>-3000</td><td className={td}>-1000×15%<br />-1000×20%</td><td className={td}>28650</td></tr>
                      <tr><td className={td}>48000</td><td className={td}>-3000</td><td className={td}>-1000×15%<br />-1000×20%<br />……<br />-1000×100%</td><td className={td}>34650<br /><span className="text-xs">（縱使收入再增加，這項也不會增加）</span></td></tr>
                    </tbody>
                    <thead>
                      <tr><th className={th} colSpan={4}>一般十一奉獻</th></tr>
                      <tr><th className={th}>收入</th><th className={th} colSpan={2}>十一奉獻</th><th className={th}>留給自己</th></tr>
                    </thead>
                    <tbody>
                      <tr><td className={td}>48000</td><td className={td} colSpan={2}>-4800</td><td className={td}>=43200<br /><span className="text-xs">（若收入再增加，這項繼續增加）</span></td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  按照一般十一奉獻，當收入愈多，留給自己的部分愈多。原因很簡單，如果我們自己擁有九份而奉獻給上帝一份，當收入愈來愈增加時，我們的九份都與給上帝的一份以同樣比例繼續增加，當然留給自己的數額會愈來愈大，形同富者愈富。然而按照累進十一奉獻，當收入達到一個數值之後，留給自己的部分就不會再增加了。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  這是一個重要提醒，尤其對那些擁有企業的富者而言，其收入的十分之一是非常可觀的鉅額財富，絕大部分根本都做不到十一奉獻，反倒通常其奉獻收入的比重會愈來愈低。克雷比卻提醒那些人，手中擁有的十分之九是更加龐大的財富，應當把十一奉獻視為出發點，而採用累進十一奉獻，避免因擁有過多財富而帶來誘惑。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">6. 不要被驢子帶著走！</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  克雷比相信在上帝眼中，教會沒有大小之分。教會應當重質不重量，這樣的教會才不至於因財富龐大而藏汙納垢，也不會因組織複雜而造成盤根錯節的權力結構。他認為教會誘惑的來源有二：其一，以金牛代表金錢的金牛崇拜，當教會開始富有，就開始自我崇拜教會的財產、建築、設備等，傳道人與信徒開始嚮往愈來愈豪華的享受；其二，組織容易造成權力崇拜，人們天生喜歡建造組織，把人們分成不同階層，便於行使權力，一旦權力到手，很容易出現各種濫用權力的現象。因此，他主張教會應當確認何者是敬拜對象，金牛或組織都不應當成為敬拜對象，唯有天父上帝是教會的敬拜對象。他提倡簡樸的教會，在天父上帝之下，大家都是平等的弟兄姊妹，有如打開包裝、一覽無遺（unboxing，開箱），人人互相認識，彼此關懷。<sup>9</sup><span style={cite}>（Donald B. Kraybill, The Upside-Down Kingdom, 226-227.）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  當克雷比論到組織時，特別以好撒瑪利亞人比喻為例，追問為何祭司、利未人兩位神職人員都沒有伸手幫助那位被強盜打傷的旅客，他們都「看見他就從那邊過去了」（路10:25-37）。為何如此？很可能兩位神職人員都有無法改變的既定行程。於是在他想像中，當時兩位神職人員都騎著驢子，若要幫助那位旅客的話，首先就是要從驢身上下來（get off your donkey），<sup>10</sup><span style={cite}>（Donald B. Kraybill, The Upside-Down Kingdom, 183-188.）</span>不要被驢子帶著走；由於他們都下不了驢子，看起來不是騎著驢子，反而好像是被驢子帶著走。那麼，到底驢子在現實生活中所指的是什麼呢？很可能組織就是驢子，在龐大宗教組織駕馭之下，所有的人都忙著各種事工活動——為了服事上帝，卻無法暫時放下事工行程，去做更重要之上帝喜悅的救人工作。在融入體制後就失去自己的身分，也不再有自己的想法，於是兩位神職人員都被宗教組織的驢子帶著走了，急著去忙碌各種事工活動，卻無法發揮基督的愛去救人！
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">7. 做抉擇</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  克雷比稱耶穌基督留下的榜樣為「成功的失敗」（Successful Failures），因為十字架的道路在世人看為失敗，在上帝眼中卻為成功；反之，有許多世人看為成功的，在上帝眼中卻是失敗的。<sup>11</sup><span style={cite}>（Donald B. Kraybill, The Upside-Down Kingdom, 256-273.）</span>畢竟上帝國價值觀與世界價值觀，始終處於上下顛倒的張力中，如下表所示：
                </p>
                <div className="overflow-x-auto my-3">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr><th className={th}>世界觀點</th><th className={th}>高</th><th className={th}>能力</th><th className={th}>主宰</th><th className={th}>第一</th><th className={th}>成人</th><th className={th}>統治</th><th className={th}>控制</th><th className={th}>武力</th></tr>
                    </thead>
                    <tbody>
                      <tr><td className={td}>耶穌觀點</td><td className={td}>低</td><td className={td}>無力</td><td className={td}>順從</td><td className={td}>最後</td><td className={td}>小孩</td><td className={td}>臣服</td><td className={td}>讓步</td><td className={td}>和平</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  當基督徒開始體會到自己處於與世界價值觀的矛盾時，必定開始了解，為何跟隨耶穌基督必須背起自己的十字架，愈是全心全意追求上帝國價值觀，十字架的分量就愈加沉重。莫特曼提供一個重要提醒，很多人誤以為十架之路是被動地臨到，其實從聖經可見，十架之路是出於主動選擇上帝國價值觀而來，「基督的受苦並不是純然被動，而是因為他的所說所做，也不是出於噩運，有如悲劇英雄一般，他是主動地走向耶路撒冷，期待在那裡即將受苦」。<sup>12</sup><span style={cite}>（J. Moltmann, The Crucified God (N. Y.: Harper &amp; Row, 1974), 51.）</span>
                </p>
              </div>

              <div>
                <span className="font-semibold text-slate-700">8. 小結</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  對重洗派而言，「另類」是關鍵詞，基督徒應當在此世上做另類的選擇，拒絕世俗文化，以信仰群體身分活出上帝國的見證，宣告基督的主權。因此，信仰群體以小團體的身分提出一套新的社會制度，對於現存的社會權威造成挑戰。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  重洗派強調，作基督徒就是作門徒且加入信仰群體，必須在生活上經歷重大改變，由於要求嚴格，通常維持小團體的見證，這也是刻意避免累積財富、發展體制的結果。重點在於藉由一種理想的社會秩序的實踐呈現上帝國的見證，新的社會秩序和世俗秩序是衝突的，亦即上帝國的秩序和地上的秩序衝突，這才是十字架。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  大致上，重洗派選擇「另類」的價值觀，過著與世俗社會不一樣的群體生活。這樣的群體生活對社會權威造成挑戰，倒過來也承受從世俗社會而來非常大的壓力。這種小群體見證，要避免累積財富，發展體制，儘量維持小格局，才可能有質的見證。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">三、現代重洗派神學</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                主張和平主義與遠離世俗價值觀的重洗派，當今教會中承襲這傳承者為門諾會，現代神學家當中追求重洗派理想而最有影響力者為尤達（John H. Yoder, 1927-1997）與侯活士。
              </p>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 先驅尤達</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  尤達是近年來在美國最有影響力的基督教倫理學家之一，為門諾會神學家，巴特的學生，已經去世。其成名作《耶穌政治》（或稱《耶穌政治學》），出版於一九七二年，而於一九九〇年發行中文版，譯者是台灣門諾會的廖湧祥教授，他在聖母大學讀書時作過尤達的學生。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  尤達主張，聖經的啟示具有社會和政治性意義，而不是只供個人靈修或只關心個人拯救；耶穌的生平和教訓，應當是基督徒制定社會或政治倫理的依據。他詮釋耶穌的政治觀點說：「上帝國是一種社會秩序，而這秩序不是隱藏的。」<sup>13</sup><span style={cite}>（尤達（John Howard Yoder），《耶穌政治》，廖湧祥譯〔香港：信生，1990〕，111。）</span>教會應當呈現出與俗世社會有別的另類選擇，也應當拒絕世俗的誘惑，這是一種力量而非柔弱的表現。<sup>14</sup><span style={cite}>（尤達，《耶穌政治》，158。）</span>他認為耶穌所傳講的信息是要落實在人間，上帝國不是一種靈性世界，而是上帝在地上所要建立的社會秩序。教會如果要認真跟隨耶穌基督，必須與世俗社會做不同的選擇，拒絕世俗價值觀的誘惑。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  很遺憾地，尤達後來被發現行為偏差，被教會開除教籍，引人質疑這本書還有價值嗎？筆者認為應當不以人廢言，比如犯過十誡中第六、七、九、十誡的大衛所寫的詩篇第二十三篇還能讀嗎？我們都是有罪的人，倚靠上帝恩典而存活，真心悔改者唯有上帝明白。尤達的事讓侯活士非常失望，因為尤達是影響侯活士的重要思想家。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">2. 恢復重洗派的理想</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  侯活士是一位美國衛理公會的基督教倫理學家，受到尤達的影響，更加有力而生動地詮釋重洗派神學，在神學上復興重洗派理想。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  侯活士受過非常完整的神學訓練，是耶魯的基督教倫理學博士，他主張教會應該優先做與世有別的對照群體，有如實驗組可用來與對照組比較，亦即與社會對照，儘管所有條件都一樣，組成者都是世人，但信仰卻為信仰群體帶來明顯的不同。從教會是對照群體的角度來看，信仰群體在世上若要與世有別，首要任務就是防禦。一般重洗派教會重視藉由群體生活見證把福音活出來，而侯活士進一步主張積極防患敵人來襲，為了捍衛家園，教會就要主動追求成為真正的教會。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  侯活士把教會認為習以為常的事刻意顛倒過來，讓大家得到深刻的反思。他主張教會應當對福音有信心，叫世界來遷就福音，而非反過來讓福音遷就世界。美國神學界在二戰後愈來愈傾向自由神學，因為教會急於尋找社會的認同，不斷地傳講社會議題，卑躬屈膝地期盼來自社會的掌聲，以致教會為了取悅社會而忘記自己是誰。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  美國教會長期以來一直在追求與社會合作，追求社會的接納，以致教會沒有堅定的立場，結果百般遷就社會也沒有增加社會對教會的尊重，反而讓世界價值觀長驅直入而使教會世俗化。侯活士身處於這樣的處境中，他的神學思想有如反彈，對美國有具體針對性，其實對其他地區也很有意義，應用在華人地區同樣貼切。馬禮遜來華不過兩百多年，馬雅各來台也才一百五十幾年，華人歷史卻有三千年以上，台灣原住民歷史也有數千年之久。近年來大型教會的興起，造成一種福音普遍傳開的錯覺，然就整體而言，基督徒在華人地區仍是少數，絕非主流！
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  仍居少數的教會，最重要的課題為「是什麼」，而不是「做什麼」，亦即應當先保住基本價值觀與身分認同。生活在濃厚商業化的環境中，經常聽到四處流行的知識經濟概念，主張藉由know-how來賺錢，教會也漸漸受到企業文化影響，開始講究「如何做」（know-how），卻不再關注教會究竟是誰（know-who）？教會的身分到底是什麼？
                </p>
                <p className="text-gray-700 leading-relaxed">
                  侯活士受專訪時說：「我確信主張基督徒的首要政治責任就是成為教會，藉著成為教會，基督徒將明白他們首要的政治效忠對象是上帝——那位我們基督徒敬拜的上帝——並且明白我們首要並非推動民主政治，而是真實敬拜真實的神。」<sup>15</sup><span style={cite}>（http://www.homileticsonline.com/subscriber/interviews/hauerwas.asp）</span>
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">3. 異類僑居者</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  侯活士經常使用戲劇性的表達方式，他來自德州而具有如牛仔般的性格，運用色彩濃厚的語言描繪抽象思想。在《異類僑居者——有別於世界的信仰群體》（<em>Resident Aliens: Life in the Christian Colony &amp; Where Resident Aliens Live: Exercises for Christian Practice</em>）一書中，<sup>16</sup><span style={cite}>（侯活士（Hauerwas, Stanley）＆韋利蒙（Willimon, William H.），《異類僑居者——有別於世界的信仰群體》，曾景恆譯〔香港：基道，2012〕。此書有簡體字版，翻譯得比較清楚：侯活士（Hauerwas, Stanley）＆威廉姆（Willimon, William H.），《異鄉客：基督徒的拓荒生活》，賀志勇譯〔北京：世界圖書，2013〕。）</span>他甚至認為教會在世上有如從外太空來的異形——異類僑居者，他定義教會為：「一群雖在此時此地居住，卻是以異類者自居的子民；就是一群知道雖然在此居住，卻仍舊『是天上的國民』（our commonwealth is in heaven）的子民。」<sup>17</sup><span style={cite}>（侯活士＆韋利蒙，《異類僑居者》，24。）</span>外太空異形來到地球，第一個動作就是要建立灘頭堡，因為即將面對地球人的攻擊。據此推理，異形對自己要有信心，要讓地球人了解異形更優秀而想要作異形；而非倒過來，異形遷就地球人而請求給予存活空間。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  他警告當今教會千萬不要自以為主流，或者急於認同主流，以致不知不覺中被主流異教文化同化。他批判當今的美國表面上是基督教文化，事實上異教文化才是主流。教會若天真地自以為有能力轉化社會，其實教會被社會改造的機會遠大過於社會被教會改造的可能。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  從教會是社會的對照群體的角度來看，教會的最高使命應當不只是「說出所信」，而且是「活出所信」，也就是以行動講述教會的故事，基督教倫理學的特色在於信仰群體生活的敘事特質，教會應當作信仰群體的見證而具體呈現所信。重點在於教會是具有上帝國價值觀的德行群體，必須有一群德行的人來呈現教會應當是什麼樣子，「因聖經在根本上是一個群體與他們的上帝一同踏上旅程的故事」。<sup>18</sup><span style={cite}>（Stanley Hauerwas, The Peaceable Kingdom: A Primer in Christian Ethics (Notre Dame: University of Notre Dame Press, 1983), 24.）</span>信仰群體不只用說故事的方式傳達信仰，而且用行動親身參與信仰的故事，也就是以行動來講述教會的故事。「我們基督徒必須承認，事實上我們是一本書的子民，我們是藉著記憶來生活的群體。」<sup>19</sup><span style={cite}>（Stanley Hauerwas, The Peaceable Kingdom, 70.）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  「今天的教會以異類僑居者（resident aliens）而存在，在不信（unbelief）的社會中作為一個充滿危險的僑居地（adventurous colony）。」<sup>20</sup><span style={cite}>（侯活士＆韋利蒙，《異類僑居者》，47。）</span>由於價值觀不同而相互競爭，教會與世界之間的張力十足，「那個要我們成為福音的一部分的呼召，乃是一個喜樂的呼召，要我們加入一群異類子民（alien people）的行列，參與一個抗逆主流文化的現象（countercultural phenomenon）」，這個現象就是被稱為教會的新『城邦』（<em>polis</em>）」。<sup>21</sup><span style={cite}>（侯活士＆韋利蒙，《異類僑居者》，25。）</span>教會應當在世界這僑居地建立新的信仰群體見證，成為與舊的社會群體明顯對比的對照群體。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">4. 批判君士坦丁主義</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  侯活士用「君士坦丁主義」（Constantinianism）或「君士坦丁式世界觀」，描述當今教會面對世界有如君士坦丁大帝時期的政教合作，自以為教會可與世界聯合起來發展基督教文化，結果卻是教會遷就世界而終被世界馴化，他把這種想要與社會體制聯合的妥協觀點視為基督教世俗化的陷阱。<sup>22</sup><span style={cite}>（侯活士＆韋利蒙，《異類僑居者》，10-11。）</span>君士坦丁大帝使基督教合法化後，迅速提升其成為國教，當教會運用具有優勢的地位與資源而想要成為社會體制的一部分時，也就是教會全面腐化的開始。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  侯活士直率地說：「基督徒的政治責任是要成為教會，而非改變世界。」<sup>23</sup><span style={cite}>（侯活士＆韋利蒙，《異類僑居者》，34。）</span>教會若要成為教會，首先就要對基督福音有信心，而非總是站在委屈自己的立場。「神學家的工作，並不是要令現代世界認為福音是可信的，而是要令福音認為世界是可信的。」<sup>24</sup><span style={cite}>（侯活士＆韋利蒙，《異類僑居者》，18。）</span>神學家不是要以福音來遷就世界，彷彿乞求世界相信福音，而應當讓世界來遷就福音，有如讓福音認為世界是值得拯救的。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  侯活士又說：「教會最重要的政治任務，就是要成為十字架的群體。」<sup>25</sup><span style={cite}>（侯活士＆韋利蒙，《異類僑居者》，45。）</span>基督教信仰不是個體的事，乃是群體的事，「拯救是受洗歸入一個群體，這群體有如一個如此真實的故事，以致我們忘記了自身及所有焦慮，好成為這個故事的一部分；那也是一個上帝藉著聖經不斷告訴以色列和教會的故事」。<sup>26</sup><span style={cite}>（侯活士＆韋利蒙，《異類僑居者》，58。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  侯活士有關教會的論述是出於自己的親身經驗，尤其是他所屬的衛理公會，那是一個在參與社會行動方面最積極的教會之一，同時也承受來自社會的負面影響，因此他的教會觀轉向屬於小派的重洗派，只是他沒有離開衛理公會。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  侯活士警告當今教會若以主流自居時，往往不知不覺被主流的異教文化同化。回顧君士坦丁所開啟的基督教國教化之路，使得教會從少數避世群體轉向多數公共群體，他全力推動將教會納入社會體制，結果是教會漸漸遷就俗世到終被馴化，以致有許多基督徒因看見教會墮落而出走至曠野靈修。當教會尚未準備好就冒然與世界擁抱在一起，往往就是教會被世界同化。當基督教成為國教時，教會擁有社會資源的優勢，參與教會的人就可能有其他動機，比如說基督徒比較有機會升官發財，如此一來，縱使教會裡人潮擁擠，恐怕素質參差不齊，以致帶來教會世俗化的結果。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">5. 敘事神學和德行倫理學</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  侯活士的教會論與敘事神學連結在一起。理想的信仰群體生活應當藉由在團體當中說故事來建造，有如傳統部落中大家圍在一起說故事，長輩說故事而年輕人接著說，四處流傳下去。當今教會不一定要採用一成不變的形式，而是應當追求教會生活處處有集體說故事的感受，當然首要的就是講道要注重故事，如此說故事不是為了討聽眾喜歡，而是有其嚴肅、深刻的涵義，也是教會成員即將投入其中的故事，包括出埃及的故事和主耶穌基督的故事等。當我們傳講這些故事、聆聽這些故事時，就會漸漸體會到自己也開始生活在故事裡，甚至藉由故事而建立好習慣、培養德行。因此，敘事神學與德行倫理學有密切的關係。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  侯活士是德行倫理學的鼓吹者，這一部分將在第十一章〈培養倫理道德習慣——德行倫理學〉裡詳細討論。教會在進入講故事、聽故事、活在故事裡的過程中，也要培養出與信仰配搭的德行。當我們回顧理查．尼布爾面對日本侵略中國的議題，其實他同樣也在提倡一種面對邪惡的德行。在混亂世代中，惡者猖狂不已，人心不安想要報復反制，整個社會瀰漫暴力氣息，身處其中的基督徒是否還能在這困難的時代不隨從世俗潮流，活出更高的生活品味，這便是尼布爾想選擇不作為——帶著盼望的不作為——的緣由，因為他覺察到過激的回應將會使自己也掉入暴力的循環裡他想藉由自我約束開創和平的新格局，雖然他不是重洗派，卻在那個時代看見基督徒自身見證的重要性。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  教會如果要關懷社會問題，參與社會行動，不應只是一個動作，而應當與信仰群體的生命氣質連結在一起。侯活士對非暴力的評判，已經不只是一種策略運用，也不只是一種外在形式，而是追求內在心裡真實認同的德行，如果沒有這樣的德行配合，如此的非暴力是無根的。艾米許人從世界自我隔離，這樣的生活使他們培養出與這世界不同的德行氣質，連同與其相映的價值觀，也呈現不同於世的文化。
                </p>
              </div>

              <div>
                <span className="font-semibold text-slate-700">6. 小結</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  侯活士並不是一位離群索居的神學家，他期待在信仰群體中傳述聖經故事，也學習以群體生活見證持續傳述聖經故事，亦即活出所說的故事，將故事理念落實在社會生活中。他也提出對倫理道德方面的建言，非常重要的就是非暴力。人們很容易陷入以暴易暴的陷阱，當我們看到惡人時，很容易想要以暴制暴，結果卻是以暴易暴，所有的革命都有這樣的誘惑，革命者瞬間就變成被革命者，起初革命時是正確的，但實踐的手段卻是暴力的，若是想要藉由暴力換取公義，最後就成為不義的獨裁者。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">四、總結：建造信仰群體</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                受洗歸入一個信仰群體，這是拯救的經歷，信仰群體本身就是一個故事，加入這個群體也就是加入這故事及說故事的行列，而這裡的信仰群體就是聖經中的以色列，以及教會的故事。
              </p>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 自救救人</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  侯活士的神學與美國教會在美國社會裡的處境有關，也與衛理公會自身的經歷有關。美國的第二次屬靈大復興由衛斯理傳統主導，衛理公會發展順利，大量按立平信徒為傳道人，廣設教會，人數增長迅速，成為基督教會最大的宗派，參與社會行動也最積極，但正是由於積極入世而難免受世俗影響，世俗化則導致教會人數的質與量下降，這其實不限於衛理公會，而是美國教會非常普遍的經歷。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  當瘟疫流行時，若有人展現勇氣進入災區救人，卻無恰當的防範措施，結果很可能反而使自己染疫。救人的熱情可能使人忘記了自己需要有充分的預備，不然的話，進入災區形同自殺，在這種時代背景下，侯活士的教會論漸漸轉向重洗派，因為重洗派追求信仰群體見證且重視信仰品質。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">2. 注重教會的質</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  重洗派在整個教會光譜上具有一個不可或缺的位置，是注重教會品質的見證，重洗派教會論藉由侯活士的神學思想，繼續發揮活潑的影響力。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  筆者於二〇〇〇年出版《讓教會成為教會：教會論》，整合改革宗與重洗派的教會論，改革宗神學一向積極入世，追求關懷社會和改變社會，然而卻可能低估世界的價值觀對教會的影響力，入世的理想是否可能變質而為世俗化鋪路呢？究竟是「社會教會化」或者是「教會社會化」呢？因此，當時筆者建議以重洗派教會論為底線，而以改革宗教會論為理想。<sup>27</sup><span style={cite}>（林鴻信，《讓教會成為教會：教會論》〔台北：禮記，2000〕，162-163。）</span>此書於二〇一二年大幅增修改版，繼續開展同樣的觀點：「重洗派教會論傾向與世有別而成為信仰的團體見證，這與改革宗教會論強調轉化世界，表面看來互相矛盾，實際上卻有互補的可能。」<sup>28</sup><span style={cite}>（林鴻信，《教會生態學》〔新北：校園，2012〕，276。）</span>可行的路徑就是從「對照團體」出發來追求「轉化世界」：
                </p>
                <div className={quote}>
                  <p className={quoteText}>
                    非常弔詭地，信仰想要轉化世界，世界也想要改造信仰。事實上，這是一場持久戰，教會若無與世有別、絕不妥協的決心，單單一味地強調轉化世界，不但可能淪為空談，而且還可能成為與世合流的藉口。因此，穩健的立場應當是以重洗派教會論為底線，而以改革宗教會論為理想，教會必先成為世上「對照團體」，而後才有可能「轉化世界」，若是教會未能做到轉化世界，至少可以讓教會在「俗的世界」裡作「聖的見證」。<sup>29</sup><span style={cite}>（林鴻信，《教會生態學》，277。）</span>
                  </p>
                </div>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">3. 讓教會成為教會</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  注重教會的身分應當優先於教會的作為，任何教會要關心社會之前，更大的使命是先要成為教會——必須先成為真正的信仰群體。如果沒有這樣的根基，縱使冒然投入社會行動，卻會像沒有接受任何裝備與訓練就衝進火場救火，其實不過是被火吞噬，這是侯活士對美國教會的批判。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「教會」原文（<em>ecclesia</em>）的意思是招聚、聚集，教會既是人的聚集，又是上帝所招聚的。教會是上帝招聚人們的聚集，啟動者是上帝，卻落實在人間群體當中。重洗派所見的基督教倫理觀，最重要的是，教會要有教會的樣子，如果教會不像教會的話，究竟要拿什麼改變世界呢？教會應當決心成為認同十架的信仰群體，願意付上代價為堅守上帝國價值觀而被世界排斥。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  今日教會流行目標導向，看見設定目標的重要，不過卻只注意事工的目標或與數量有關的目標，最大的目標——成為教會——卻經常被遺忘，鮮少有人問我們究竟在建造什麼樣的教會？重洗派主張教會的身分最重要的是作群體見證，有如在黑暗中點燈。因此重洗派大多是小教會，不刻意追求信徒人數增長，而用心追求信仰見證的品質，雖然看來有些消極退縮，在混亂處境中卻是不可缺少的平衡力量。在現代教會普遍追求數量增長的潮流中，重洗派追問「教會是什麼」的提醒顯然是必要的。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  清教徒來到新大陸，基於「城造在山上是不能隱藏的」（太5:14），有打造山上之城的理想，因他們從舊大陸出走是為著信仰的緣故，希望在新大陸建造的信仰群體與舊大陸截然不同，於是理想的「山上之城」成為努力的目標。甘迺迪總統（John F. Kennedy, 1917-1963）是天主教徒，他在一九六一年一月九日以總統當選人的身分於波士頓演講，以〈山上之城〉（The City Upon A Hill）為題。一位天主教徒大談清教徒的理想實在很特別，清教徒的信仰傳承在那個時代的美國還是相當明顯。不過時代一直在改變，今日的美國已成為一個愈來愈缺乏共識的多元社會，如今四處可見美國人背離清教徒祖先的理想。好萊塢影片中出現的清教徒絕大多數都是負面角色，若非冷酷的教條主義者，就是狂熱於獵女巫的恐怖分子，以各種方式嘲諷、汙衊清教徒。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  城本身就是一種群體性的展示，被造在山上有如處於眾人眼中而無法隱藏，猶如光也不能放在斗底下來遠離眾人眼目，乃要放在燈臺上照亮眾人。重洗派群體雖然想要避世索居，有時卻反而成為令人矚目的群體見證，原本最多不過期許自己成為發光的燈，卻無意中成為山上的城，這也是教會要成為教會的目標。
                </p>
              </div>

              <div>
                <span className="font-semibold text-slate-700">4. 美國很近，後山很遠？</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  花蓮門諾醫院在台灣東岸以信仰出發提供優質的醫療服務，美國門諾會的宣教師薄柔纜（Roland Peter Brown, 1926-2019）在台灣東部行醫四十年，從一流的芝加哥大學醫學院畢業，卻來到台灣偏鄉服務，他的父親在中國醫療傳道四十年，兩代皆成為不賺錢的醫師八十年，他感慨道：「台灣的許多醫生去美國很近，來花蓮很遠。」這是典型的重洗派見證，他們的信仰與神學都是「活出來的」！「美國很近」，彷彿人們追求路途遙遠的利益從來不計障礙；「花蓮很遠」，則有如人們對於離自己不遠的需要卻從未認真考慮。但耶穌基督的見證具有「後山很近，美國很遠」的力量：「他本有上帝的形像，不以自己與上帝同等為強奪的；反倒虛己，取了奴僕的形像，成為人的樣式；既有人的樣子，就自己卑微，存心順服，以至於死，且死在十字架上。」（腓2:6-8）這是基督教倫理學嚮往追求的典範。
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
                '重洗派起源於宗教改革中最基層、最受迫害的草根群體，主張教會應是「與世有別的對照群體」，重視質而非量，倫理道德觀強調作門徒、愛（和平主義）、弟兄情誼三大主軸。',
                '克雷比《上下顛倒的國度》指出，上帝國價值觀（低、無力、順從、最後、小孩、臣服、讓步、和平）與世界價值觀（高、能力、主宰、第一、成人、統治、控制、武力）完全顛倒，累進十一奉獻的提案正是這種顛覆精神的具體應用。',
                '「不要被驢子帶著走」的比喻提醒教會，龐大組織與事工體制本身可能成為攔阻愛人行動的「驢子」，教會應當時時檢視自己是否被組織驅使而失去了服事人的初衷。',
                '侯活士主張教會的首要政治責任是「成為教會」而非「改變世界」，批判「君士坦丁主義」——教會與社會體制聯合終將導致教會被世界馴化而世俗化。',
                '侯活士的敘事神學與德行倫理學緊密相連——信仰群體藉由持續講述、聆聽並活出聖經故事，培養出與信仰相配的德行，這是操練非暴力等德行的根基，而非僅是外在策略。',
                '重洗派教會論與改革宗教會論看似矛盾（與世有別vs.轉化世界），實則互補：教會應先成為「對照團體」，才有可能真正「轉化世界」；教會的身分認同（是什麼）應優先於教會的事工（做什麼）。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「累進十一奉獻」的提案，對今日教會的財務倫理有何啟發？</h4>
              <p className="text-gray-700 leading-relaxed">
                克雷比指出，一般十一奉獻制度下，收入愈高者留給自己的絕對金額反而愈多，形同「富者愈富」，這與上帝國「上下顛倒」的精神有所落差。這個四十多年前的提案，對今日教會討論高收入信徒的奉獻倫理仍有參考價值——重點不在於強制規定奉獻比例，而在於提醒每個人誠實面對：財富累積到一定程度後，我們是否仍然願意讓奉獻的比重隨之提升，還是理所當然地讓「留給自己」的部分無限增長？
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">侯活士對「君士坦丁主義」的批判，對台灣教會參與政治的態度有何提醒？</h4>
              <p className="text-gray-700 leading-relaxed">
                侯活士警告教會與社會體制聯合終將導致教會被世界馴化，這對台灣教會近年積極參與政治動員、與特定政黨或候選人結盟的現象是重要的提醒。教會若把「爭取政治影響力」當作首要任務，很可能正在重演君士坦丁式的妥協——用世界的權力邏輯來運作信仰群體，最終換來的不是福音的擴展，而是教會被政治文化同化。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「不要被驢子帶著走」的比喻，對今日教會事工體制的反思有何應用？</h4>
              <p className="text-gray-700 leading-relaxed">
                克雷比想像祭司與利未人因無法從驢子上下來而錯過幫助傷者的機會，這個比喻對今日教會而言格外貼切——當教會發展出龐大的事工體系（主日學、小組、各種特會、行政流程），這些原本為了服事而設立的架構，是否反而成為攔阻同工去愛具體個人的「驢子」？定期檢視「我們是否還能隨時從驢子上下來」，或許是每個發展中教會都需要的自我提醒。
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
              '本章提出實驗組（教會）與對照組（社會）的比喻——如果你的教會消失了，社會上會有什麼「顏色變化」可以證明信仰確實帶來了不同？',
              '回顧上帝國價值觀對照表（低、無力、順從、最後、小孩、臣服、讓步、和平），你的生活選擇中，有哪一項最難活出耶穌的觀點？',
              '克雷比提醒「不要被驢子帶著走」，你自己的生活（事業、事工、行程）中，是否也有某種「驢子」正帶著你走，讓你錯過了眼前更重要的人？',
              '侯活士主張教會的首要責任是「成為教會」而非「改變世界」。你認為這種立場是消極逃避，還是更根本的積極？為什麼？',
              '本章提到重洗派要求嚴格、通常維持小團體的見證。你如何看待「小而精」與「大而廣」這兩種教會發展路線的優缺點？',
              '「美國很近，後山很遠」——回想你生活中類似的處境：你是否也曾對遙遠的機會、利益比對眼前的需要更加用心？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 逐條對照上帝國與世界價值觀</h4>
              <p className="text-gray-700 mb-2">找時間把本章的對照表（世界觀點vs.耶穌觀點）抄下來，對照自己的生活選擇，誠實標記哪些領域已經活出耶穌觀點，哪些還停留在世界觀點。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🫂 練習「與世有別」的具體行動</h4>
              <p className="text-gray-700 mb-2">
                本週找一個具體場合，練習用「這是否符合上帝國價值觀」而非「大家都這麼做」作為判斷標準，並記錄這個選擇帶來的實際差異。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🚶 從「驢子」上下來</h4>
              <p className="text-gray-700 mb-2">
                辨識出你生活或事奉中一個「正帶著你走」的固定行程或體制慣性，本週刻意暫停一次，把時間讓給一個眼前具體的人的需要。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「上帝啊，求祢幫助我的信仰群體真正成為與世有別的對照見證，而不只是社會的翻版。求祢幫助我不被組織體制的驢子帶著走，使我能隨時停下來看見身邊真實的需要。求祢賜給我勇氣，寧可作困難時代的關鍵少數，也不隨波逐流。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
