import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookMarked, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;
const quote = "border-l-4 border-emerald-300 bg-emerald-50 pl-4 py-3 mb-3";
const quoteText = "text-emerald-800 leading-relaxed italic";

export default function Book39Ch10() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-slate-800 to-blue-900 bg-clip-text text-transparent">第十章</h1>
        <h2 className="text-xl font-semibold text-gray-700">聖言與聖傳——天主教倫理學</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          「上帝的神能已將一切關乎生命和虔敬的事賜給我們，皆因我們認識那用自己榮耀和美德召我們的主。因此，他已將又寶貴又極大的應許賜給我們，叫我們既脫離世上從情慾來的敗壞，就得與上帝的性情有分。正因這緣故，你們要分外地殷勤；有了信心，又要加上德行；有了德行，又要加上知識；有了知識，又要加上節制；有了節制，又要加上忍耐；有了忍耐，又要加上虔敬；有了虔敬，又要加上愛弟兄的心；有了愛弟兄的心，又要加上愛眾人的心。」（彼後1:3-7）
        </p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-slate-50 to-blue-50 hover:from-slate-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookMarked className="w-5 h-5 text-slate-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <p className="text-gray-700 leading-relaxed">
              基督徒的成長是一段漫長的旅程，不只與信心有關，也與德行有關。彼得後書一章3～4節這段經文，教導認識上帝的人要追求「脫離世上從情慾來的敗壞」、「與上帝的性情有分」——與上帝性情相通共融、分享分受上帝性情。這樣的訴求如彼得後書一章5～7節緊接著的呼籲，要分外殷勤，極力追求信心、德行、知識、節制、忍耐、虔敬、愛弟兄的心、愛眾人的心，面對這麼多樣的學習，基督教信仰傳統裡有非常豐富的資源，保留在古老的教會傳承裡。
            </p>
            <p className="text-gray-700 leading-relaxed">
              天主教會與東正教會是最古老的教會傳承，保存最多傳統的元素，其中天主教會代表拉丁傳統，東正教會則代表希臘傳統。天主教會主張教會傳統和聖經權威是平行的，並且使用中文「聖傳」稱呼教會傳統，主張說：「這種在聖神內完成的活生生的傳遞，稱為聖傳，因為它有別於聖經，縱使跟聖經有密切關連。透過聖傳，『教會在它的教義、生活和敬禮中，把本身所是以及所信的一切，都傳諸萬世，永垂不朽』。」<sup>1</sup><span style={cite}>（《天主教教理》，主教團教義委員會譯〔台北：天主教教務協進會，1996〕，78。）</span>這段文字強調教會傳統有別於聖經，而非主張教會傳統是根據聖經而來，如此一來，把傳統的位階往上提升至與聖經並列，然而畢竟有許多關於靈修、德行的信仰傳承因而被保存下來。
            </p>
            <p className="text-gray-700 leading-relaxed">
              宗教改革為了擺脫中世紀教會尊崇傳統所導致的許多沉重且瑣碎的規定，因此路德在面對千奇百怪的規矩、密密麻麻的生活細節要求，促使宗教改革有一個重要目的就是簡化這些繁瑣的規定，只抓住其中最重要的因信稱義——人藉由信靠上帝領受恩典，但卻可能因而忽略信仰成長的複雜，許多方面都需要時間逐一學習，如果參考天主教倫理道德傳統，必定受益良多。尤其從天主教倫理學者與當代生活議題的對話中，可以看到古老傳統與現代議題的對照，學習如何在變動的處境下堅守不變的原則與信念。
            </p>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">一、倫理神學（moral theology）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                天主教倫理學的正式稱呼是「倫理神學」、「道德神學」，值得注意的是此稱呼強調其神學成分；反而基督教常用的「基督教倫理學」（Christian ethics）卻未提到神學，容易讓人忘記基督教倫理學就是神學。根據天主教學者編譯的《神學辭典》：
              </p>
              <div className={quote}>
                <p className={quoteText}>
                  倫理神學有時稱為基督宗教倫理學或神學倫理學。它是系統神學，也是應用神學的一支，專門研究信仰與生活的關係。既為神學的一支，它所探討的內容就是把神學上所找出的天主愛的啟示當成天主對人向祂回應的邀請。所以倫理神學的主要工作乃是在幫助人回應天主這種主動的愛；此種回應即為基督徒道德生活的靈魂。<sup>2</sup><span style={cite}>（《神學辭典》，361。）</span>
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                倫理神學從上帝的愛之啟示邀請人回應出發，幫助人回應上帝的愛，可見倫理道德思想與神學思想是一體的。德國的神學教育把基督教倫理學視為神學的一部分，只是著重於「專門研究信仰與生活的關係」，因此可說是一種「應用神學」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                倫理神學作主題式探討，專門研究信仰與生活的關係，這種探討提醒了生活無法離開神學，「信仰與生活的關係」是倫理神學探討的目標，倫理神學的主要工作是幫助人回應上帝發動的愛，而這回應是「基督徒道德生活的靈魂」，包括落實在生活行動與倫理道德的抉擇。
              </p>
              <p className="text-gray-700 leading-relaxed">
                奧地利天主教神學家白舍客（Karl-Heinz Peschke SVD）主張，具有實踐價值的倫理神學與思辨性的信理神學（dogmatic theology），兩者共同組成系統神學。<sup>3</sup><span style={cite}>（卡爾．白舍客，卓新平主編，《基督宗教倫理學》，第一卷〔上海：三聯書店，2002〕，1。）</span>天主教會在梵蒂岡第二次大公會議（下文簡稱：梵二）做了一些重大改革，白舍客的思想反映天主教會如何因應現代社會的挑戰，認為完整的系統神學應當包括兩部分——與實踐有關的倫理神學以及探討「信理」（教理、教義）、重視思辨理論的神學。由於倫理神學涵蓋非常廣大的領域，本章只介紹對倫理神學的基本認識。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">二、天主教倫理學來源</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                天主教倫理學的論述根據有兩大來源，其一是自然法，其二是教會訓導。
              </p>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 自然法（自然道德律）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  多瑪斯是天主教倫理學最重要的神學思想家，他說：「有理性的受造物分享天主的永恆律，就是指自然律而言。」<sup>4</sup><span style={cite}>（《神學辭典》，「169自然律」。）</span>永恆律即是創造者上帝掌管萬物的理性，人身為受造者分享這神聖理性，即為自然律。「自然律不是別的，乃是天主放在我們內裡的理性之光；藉著這光，我們認出何者應當奉行，何者應當躲避。這光或這法律，是天主在創造時賦予的。」<sup>5</sup><span style={cite}>（《天主教教理》，1955，聖多瑪斯，《論十誡》。）</span>自然律被稱為理性之光，因為理性足以辨識、趨善避惡，於是按照自然理性歸納出來的法則就是自然法。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  自然法的應用很廣，可以用在法學領域，亦可用在倫理學領域。英文Natural Law並沒有區分究竟是自然法則或自然規律，但為了避免在討論倫理學時帶入過多法律的聯想，以下主要使用「自然道德律」，有時按照上下文稱為「自然律」；但若比較強調自然法則時，仍可按照一般習慣稱為「自然法」。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  自然道德律是「在有理智的人性上，我們能夠發現的道德要求」<sup>6</sup><span style={cite}>（詹德隆，《基本倫理神學》〔台北：光啟，1993〕，84。）</span>。人性的重要天生特質是理性，據此而發出的道德要求就是自然道德律。這道德律被稱為「自然」，因為指向所有人而不單指信徒，畢竟理性是人人都有的。自然道德律就是人出於天然理性所做出來有關倫理道德的判斷。「自然道德律存在每一個人的心中，並由理性所奠定；就其命令來說，是<strong>普遍的</strong>，就其權威來說，及於所有的人。自然道德律表達人的尊嚴和確定人基本權利和義務的基礎。」<sup>7</sup><span style={cite}>（《天主教教理》，1956。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  自然道德律的出處並不是來自人間任何一本書，而是來自神聖啟示。
                </p>
                <div className={quote}>
                  <p className={quoteText}>
                    這些規範寫在何處，難道不是在那本稱之為真理之光的書本裡？就在那裡，寫下了全部正義的法律，就從那裡，此法律進入實踐正義者的心裡，並非移植過去，而是在那裡留下印記，正如蓋章一般，圖紋從戒指刻在蠟上，但不脫離戒指。<sup>8</sup><span style={cite}>（《天主教教理》，1955，聖奧思定，《論聖三》。）</span>
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  自然道德律的規範並非銘刻在石版上，而是在心版上，亦即在理性裡。
                </p>
                <div className={quote}>
                  <p className={quoteText}>
                    自然道德律是寫在、刻在全體及每一個人的心靈上，因為它就是人的理性，命令人行善，禁止人犯罪……。但這由人的理性發出的命令，如果不是有一個更高理性的呼聲和解釋者，便不能有法律的力量，對此更高的理性，我們的心神、我們的自由是應該俯首服從的。<sup>9</sup><span style={cite}>（《天主教教理》，1954，良十三世，Libertas praestantissimum通諭。）</span>
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  簡言之，永恆律是創造者上帝掌管萬物的理性，上帝的神聖理性是受造者理性的源頭，在上帝創造萬物時，人就被賦予理性之光，這光沒有神聖理性那麼明亮，卻仍是光明的，可以幫助我們辨別善惡且趨善避惡。凡是人性中自然向善的傾向，都合乎永恆法則。人天生有為善或求善的傾向，與來自神聖源頭的永恆法則相容，然而上帝極其偉大而人極其渺小，在受造者這端的稱為自然法則，自然法則對應於永恆法則，人的理性對應於神聖理性。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  因此，被創造在大自然中的人，其理性辨識出來的自然法則具有普遍性，可以普遍應用在所有人身上。不分教會內外、信或不信，在尚未言及信心而單單討論理性時都能彼此相通。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  與天生理性（reason）相關的，還有良知（synderesis）和良心（conscience）。「良知」來自上帝，是理性在實踐時的自然習性（natural habit），得以直觀地領悟那趨善避惡的自然法則，<sup>10</sup><span style={cite}>（"synderesis", Catholic Encyclopedia.）</span>乃需要培養建立的一種道德判斷的認知；「良心」則實現良知，把良知所認知的一切應用在不同處境中，藉由意志、情感、生活經驗以及外在的幫助來完成目標。<sup>11</sup><span style={cite}>（"conscience", Catholic Encyclopedia.）</span>簡言之，理性與良知、良心都有關，良知幫助做道德判斷，而良心則實踐良知。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  若要完整地運用理性連同良知、良心，需要神聖光照——聖言與聖傳。然而，天主教會雖然把聖言與聖傳並列，卻主張聖傳有別於聖經，又始終強調教會當局具有解釋聖經的權威：「『正確地解釋書寫的或傳授的天主聖言的職務，只委託給教會內活生生的訓導當局，』即是與伯多祿的繼承者——羅馬教宗共融的主教們，『他們以耶穌基督的名義行使這權力』。」<sup>12</sup><span style={cite}>（《天主教教理》，85。）</span>在實際運作上，教會當局所代表的傳統顯然高過聖經。
                </p>
              </div>

              <div>
                <span className="font-semibold text-slate-700">2. 教會訓導</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  「『教會訓導權』（magisterium of the church）可以界定如下：耶穌基督委託給宗徒永久的、真實的訓導職務；這職務現在由宗徒的合法繼承人（即主教團聯合教宗）所擁有並實施。」<sup>13</sup><span style={cite}>（《神學辭典》，「418教會訓導權」。）</span>天主教會非常注重傳統，甚至使用「聖傳」；教會訓導是指歷世歷代教會傳統的重要決議，包括教宗所發出的正式文件，都具有約束力。天主教會強調教會訓導來自耶穌基督對使徒的委託職務，由教宗領導樞機主教團執行。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  在教宗與大公會議之間有一個模糊地帶，究竟是重視大公會議的集體領導，或者強調教宗的個人領導？這是一個古老的問題，傳統上比較開明者期待教會會議集體領導的合議制，稱為「會議至上主義」（Conciliarism），教宗只是教會會議的執行者；但比較保守者通常獨尊教宗領導，稱為「教宗至上論」（Papal supremacy）。歷經多次論爭後，十九世紀以來，後者成為天主教會的主流看法，主張教宗具有最高權柄，連帶地高舉教會訓導權。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  縱使高舉教會訓導權，迄今天主教會有些保守觀點，連許多天主教徒也未必能夠遵行，比如節育只能使用自然節育法，不能使用保險套，這在愛滋病流行地區恐將造成嚴重問題。面對愈來愈複雜的時代，教會無法承擔所有倫理議題的標準答案，其實若把所有良心問題都歸到教會，也是一個難以負荷的重擔。縱使天主教會體制結構完整而領導權力分明，當面對複雜的倫理道德議題，有時也難以提出單一、絕對的規範來要求信徒實行。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  比較開明的天主教學者認為，應當同時強調信徒的倫理責任，「訓導權的責任並非取代教友的良心，而只是光照其良心，幫助教友自己做倫理的判斷」。<sup>14</sup><span style={cite}>（《基本倫理神學》，19。）</span>這融合了梵二的主張，對於教會訓導權應有新的詮釋，不只強調訓導權以致教會的良心替代信徒的良心，也應當強調信徒自己的倫理責任，而訓導權只是光照其良心。訓導權仍被視為典範，但教會的良心不能替代信徒的良心，而是要光照信徒的良心，讓信徒自己憑良心做倫理道德判斷。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">三、多瑪斯的貢獻</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                多瑪斯是十三世紀的一位經院哲學大師，他的生命絕大部分都用在讀書、思想、寫作，由於著作非常清晰且龐大，他的生命就在思想工作中燃燒，只活到四十九歲，被稱為經院哲學大師。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                經院哲學是中世紀最主要的基督教思想潮流，整合了神學和哲學，稱為經院哲學或經院神學，因為這種哲學就是一種神學。多瑪斯把亞里斯多德哲學整合入基督教神學，因此其思想具有濃厚的哲學性，有如奧古斯丁神學把靈性體驗與哲學思辨整合。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                多瑪斯呈現一種追求永恆的中世紀精神，他藉由寫作來服事教會，被稱為「天使博士」，因他的著作有如天使般保護著教會。他具有優異的知性天賦，不過後期亦呈現深邃的靈性體驗，他說：「我們禱告，不是要改變上帝的安排，而是祈求上帝照祂的安排來藉由我們的禱告成就。」（For we pray, not that we may change the Divine disposition, but that we may impetrate that which God has disposed to be fulfilled by our prayers.）<sup>15</sup><span style={cite}>（Thomas Aquinas, ST II-II, 83, 2.）</span>這句名言反映他也使用十分簡單的語言，而非繁複的神學思辨，來呈現深刻的神學洞見。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                多瑪斯奠定了天主教倫理學的基礎，認為德行是某種能力的完美，也就是把不同領域的能力發展到完美，至於人則是德行的主體，是靈魂與肉體的統一。中世紀非常重視靈魂，多瑪斯也認為靈魂是永遠的，肉體則是暫時的。他運用亞里斯多德的哲學思想，以兩組概念作為基本原理，一組是質料與形式（matter and form），另一組是實現與潛能（act and potency）。質料是事物的要素，形式則是事物的本質而能使質料得以實現，比如採用金屬作為材料的桌子，金屬就是桌子的質料，桌子的概念則是形式，概念加上金屬材料就能組成具體的桌子。質料有可能被摧毀，形式卻無法被摧毀，若把一切桌子的材料都摧毀，也無法摧毀桌子的形式，一旦有質料就能再組成桌子。因此，靈魂是生命的形式，亦即生命的本質；而身體則是生命的質料，亦即生命的要素。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                另一組實現與潛能，實現是已經完成者，而潛能則是已經完成者的可能性，這組概念可描述事物運動時在時間裡的變化，比如孩子具有潛能成為父母，父母則為這潛能的實現，然而父母本身也具有潛能成為祖父母，以此類推，生命在每個階段都具有潛能，因為生命不斷地走向實現，一直到終極實現。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                靈魂是純粹的形式，帶有不朽的特質，亦即不會毀壞的形式，這對天主教神學而言非常重要，這也導致天主教神學在判斷墮胎議題時，比起其他傳統更加嚴謹。作為生命的形式，靈魂具有兩方面的能力，其一是與知性有關的理智（intellect），其二則是意志（will）。人運用理智認識，形成意志導向目的，從裡而外發出動力，驅使身體去動作，展現生命形式與質料結合，形成可見的外在行為。靈魂是具有潛能的生命形式，具有潛能而未必實現，因此必須鼓勵人追求實現終極目標，於是這種思想架構形塑極為明確的目的論，亦即以朝向神聖至善之最高目的為宇宙萬物的發展方向。
              </p>
              <p className="text-gray-700 leading-relaxed">
                論及如何朝向這終極目標發展，則必須強化倫理道德判斷的能力，這就與建造習慣（habit）有關，習慣是不斷操練、培養出來的特質，有時稱為第二天性，相較於第一天性——天生就有的自然能力。習慣是培養出來的，培養健康的習慣就是導向最高目的之重要基礎。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">四、培養德行</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                天主教倫理學傾向把焦點放在德行的執行者——人身上，基本上就是主張德行倫理學。由於德行就是人的德行，重點在於期待道德的執行者水平提高，而不去評斷哪一個倫理道德抉擇導致比較大的效益。Virtue在中文常被翻成「德行」或「德性」，其中「德行」帶有比較多「行」的聯想，而「德性」則指向特質、性質。一般看來，「德行」比較常用，有如「品行」逐漸取代「品性」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                傳統的目的論建立在亞里斯多德哲學，而多瑪斯運用亞里斯多德哲學發展神學，形成主流的天主教倫理學，為了追求人受造的終極目標，需要培養第二天性，以使整體生命導向最高目的。在這樣的思想背景之下，天主教倫理學經常論及道德習慣、道德目的等；相形之下，基督教倫理學則經常論及信仰，再由信仰間接論及道德。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                天主教倫理學通常論及「四樞德」、「四種主要德行」：智德、義德、節德、勇德，這四種德行為其他德行的樞紐。
              </p>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 「智德」（prudence）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  「智德」即盡其所知做出恰當合宜的判斷，這個詞的來源意義豐富，結合了謹慎與明智，指向謹慎地運用智慧做出明智的判斷，既需要對於事情真相有深刻的認識，而且對於判斷所帶來的後果也有充分的了解。智德是一種與實踐連結在一起的智慧，能夠呈現智慧判斷的實踐抉擇，由於與實際行動的密切關聯，使其成為非常重要的德行，乃從希臘文化到基督教信仰都通認的德行，只是雙方對其智慧的了解不盡相同，希臘文化偏重純粹的知性，基督教信仰則指向運用智慧做出合宜的實踐行動判斷。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  「智德」對於天主教的神職人員非常重要，雖然完全順從教會領導，但也需要盡其所能地運用智慧做出明智的判斷。當要求順從權威過了頭，勢必帶來盲從，宗教改革因而強調因信稱義中單純的神人關係，然而在現實生活中做判斷並不容易，不可忽略「智德」所帶來深沉而實用的智慧。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">2. 「義德」（justice）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  「義德來自聖經；它與聖經中公義（righteousness）和盟約的觀念有密切關係。所謂義人便是遵守契約的要求，並忠實於契約的人。上帝是公義的，因祂救贖以色列人。」<sup>16</sup><span style={cite}>（《神學辭典》，「362倫理道德（樞德）」。）</span>義德與上帝的義有關，應用在倫理道德思維，指向一般人所理解的公平正義，並且從公正的原則發展出權利義務的論述，包括一般倫理學所討論的交換正義、分配正義、法律公義、社會公義等。<sup>17</sup><span style={cite}>（《神學辭典》，「362倫理道德（樞德）」。）</span>
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">3. 「節德」（temperance）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  節德指向節制欲望，而非壓制欲望，應當努力調和生命中所需的各種合理的本能欲望，也要避免禁欲苦修所帶來的不健康。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">4. 「勇德」（fortitude）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  勇德使人克服恐懼，以平靜的心面對挑戰，而能忍受苦難，這是一種具有堅毅特質的德行。<sup>18</sup><span style={cite}>（《神學辭典》，「362倫理道德（樞德）」。）</span>勇德即德行在落實於現實處境中所需要的勇氣與堅忍的力量，勇於面對強大的反對勢力，也平靜堅定地忍受苦難迫害。路易斯特別提醒，勇德不只是指一般的勇氣，而是實踐一切德行的勇氣，這勇氣使人面對實踐德行時所必須面對的危險與痛苦。<sup>19</sup><span style={cite}>（C. S. Lewis, Mere Christianity (Glasgow: Collins, 1979), 75.）</span>
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">5. 三超德（supernatural virtues）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  在人性的四樞德之外，還有超越人性的三超德：信、望、愛。超德需要藉著上帝的恩典才能產生，非人力所能及，因來自上帝而具有整體性，並且由於建立在神人關係之上而具有動態性。三超德以愛為中心，「愛是永不止息」（林前13:8），「如今常存的有信，有望，有愛這三樣，其中最大的是愛」。（林前13:13）固然人性也有愛，這愛反映超性的愛，但受制於人的有限，若要達到理想的愛仍然需要上帝的恩典。從宗教改革的神學來看，信並非一種德行，而是眾德行的源頭，必需藉由信靠上帝才有德行可言。
                </p>
              </div>

              <div>
                <span className="font-semibold text-slate-700">6. 七宗罪（seven deadly sins）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  德行的對立面就是惡習（vice，惡德、敗德），亦即古老相傳下來的「七宗罪」或「七罪宗」，指向七種惡習。這七樣的用語，排序並不統一，大致上是驕傲、貪婪、色欲、嫉妒、暴食、憤怒、怠惰，所對應的美德為：(1) 謙卑（humility）、(2) 慷慨（charity）、(3) 貞潔（chastity）、(4) 感激（gratitude）、(5) 節制（temperance）、(6) 耐心（patience），以及(7) 勤勉（diligence）。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  從前的修士在修道院裡做什麼？其實就是努力一樣一樣地修掉惡習。追求嚴謹的生活是天主教會的優點，但也可能帶來用人的力量克服惡習，甚至因而有重新界定信仰意義的危機。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">五、一項信念與三項堅持</h3>

              <div className="mb-3">
                <span className="font-semibold text-slate-700">1. 一項信念——靈魂與煉獄</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  根據靈魂存在的信念，天主教會主張某種形式的「煉獄」，亦即人死後朝見上帝，必須經過靈魂被煉淨的階段。目前從科學角度尚未能找到靈魂，傳聞中人死後的那一剎那，體重會略輕一些，而那減少的重量就是靈魂的重量。不過從未見過科學實驗證明，如果能用科學證明的話，恐怕只能證明靈魂是某種物質而已。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  靈魂若有重量的話，就有可能用科學方法發現，但存在者不必然都具有重量，比如說愛有重量嗎？科學雖查不出愛的重量，但豈能因此貶抑愛的分量！儘管在科學實證論的潮流下，許多人並無靈魂存在的信念，天主教會卻對於靈魂的存在十分堅持，而基督教會的自由神學對於靈魂或者視為無稽，抑或毫不在意。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  畢竟人不可缺少非物質性層次者，靈魂存在對基督教信仰而言，並非科學問題，而是一種信念——人是一個整體、身體和靈魂的整合，靈魂是生命不可或缺的部分——這信念會導向死後去處何在的問題。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  天主教會認定有煉獄，只是現代比較少談，煉獄的概念是：「那些死在天主的恩寵和友誼中的，但尚未完全淨化的人，雖然他們的永遠得救已確定，可是在死後仍須經過煉淨，為得到必需的聖德，進入天堂的福樂中。」<sup>20</sup><span style={cite}>（《天主教教理》，1030。）</span>由於靈魂在世上沾染不少汙穢，人死後要去面對上帝前需要先被潔淨，那個過程即是煉獄。中世紀時普遍主張狹義的煉獄，直接把煉獄想像成火海，人要在那邊被火燒，才能得潔淨來面對上帝。靈魂與煉獄兩者都是天主教會根深柢固的信念，而且與倫理神學緊密相關，靈魂存在則有最後審判，而死後面對煉獄提醒人們不要輕忽小罪與上帝的聖潔。
                </p>
              </div>

              <div>
                <span className="font-semibold text-slate-700">2. 三項堅持</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  儘管面對時代變遷，天主教會在倫理道德主張上仍有三項堅持。
                </p>

                <p className="font-semibold text-slate-800 mb-2">▲反對墮胎、安樂死</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  為何反對墮胎？因為墮胎會傷害的不只是身體，而且是靈魂，使其喪失居處。為何反對安樂死？因為安樂死是對生命的不尊重。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  積極而言，重視生命的尊嚴，勢必會禁止故意或直接殺害胎兒的生命，也勢必對安樂死再三思量。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  天主教會主張胚胎自受孕時就有人的生命，反對不把胎兒當作人的觀點。胎兒是完整的人且有潛在的生命發展力，由於主張人有靈魂，尊重靈魂與尊重生命並不可分，頂多接受在一些特殊情況之下不得已的墮胎，比如胎兒危及母親。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  梵二在《論教會在現代世界牧職憲章》裡，強烈譴責墮胎與安樂死：「嬰兒自受孕之初，就有生存的權利。直接墮胎，就是故意墮胎，不論是作為目的或方法，都是『罪惡的勾當』，嚴重地違反道德律。教會按教會法以絕罰處分這違反生命的罪行。」<sup>21</sup><span style={cite}>（《天主教教理》2322，請參考2270-2275。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  教宗若望保祿二世有感於墮胎與安樂死潮流盛行，在一九九五年頒布《生命的福音》通諭，對墮胎及安樂死等生命倫理議題提供教會的訓導。《生命的福音》通諭裡指出，現代科技的發展，產生了對人類生命新的打擊方式，例如在醫療科技上的鉅額投資，並以此「來製造藥物，使人不必求助於醫護人員，即可自行殺死子宮內的胎兒……，使人能愈來愈簡單又有效地抑制生命，同時又可使墮胎不受任何管制，也不必負任何社會責任」。<sup>22</sup><span style={cite}>（《生命的福音》通諭13。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  另一方面，現代物質主導的社會也孕育了個人主義、功利主義和享樂主義，「人之所『是』（being）的價值觀已被人之所『有』（having）的價值觀所取代。唯一重要的目標是追求一己的物質享受。對所謂的『生活品質』的詮釋，則唯以經濟效率、無節制的消費主義、肉體的美和享受為要，而無視於生命存在更深遠的幅度，即人際關係、精神和宗教的幅度。」<sup>23</sup><span style={cite}>（《生命的福音》通諭23。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  當人的生命面對種種的苦難感到沮喪及焦慮時，便「以個人自由的權利為藉口，將某些反對生命的罪行合理化」。<sup>24</sup><span style={cite}>（《生命的福音》通諭4。）</span>就墮胎方面，教宗在通諭裡重申教會一貫的立場：「直接墮胎，亦即以墮胎為目的或手段的行為，常構成一件嚴重的倫理錯亂，因為那是故意地殺害一個無辜的人類存有（human being）。」<sup>25</sup><span style={cite}>（《生命的福音》通諭62。）</span>根據這文獻，胎兒從受孕起直到出生，都是一個完整的人類存有，是個絕對無辜的人，因為他「是那麼柔弱、無助，甚至連最低限度的自衛方式，即新生嬰兒的嗚咽和哭泣聲他都付之闕如」。<sup>26</sup><span style={cite}>（《生命的福音》通諭58。）</span>因此不論用什麼方式，以及懷著多麼嚴重和悲慘的理由，都絕不可使故意殺死一個無辜人類的行為正當化。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  就安樂死方面，教宗義正詞嚴地說：「我肯定安樂死是嚴重地違反天主的法律，因為那是故意殺人，是道德上所不容的。這個教理是基於自然道德律和形之於文字的天主聖言，為教會的信仰傳承遞達，是一般的、普遍的訓導權所講授的。」<sup>27</sup><span style={cite}>（《生命的福音》通諭65。）</span>教宗指出為了消除痛苦選擇結束生命，就是否認天主對生死的絕對主權，拒絕了愛自己和放棄了對他人和群體應盡的愛德與正義的責任。反之，「如果藉著天主慈悲的恩賜及個人自由的選擇，為了『愛』、也懷著『愛』來分擔基督在十字架上的痛苦，用這樣的態度來體驗病痛，痛苦就會成為善的泉源」。<sup>28</sup><span style={cite}>（《生命的福音》通諭67。）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  《生命的福音》通諭主要以聖經的啟示出發，申述了教會對墮胎和安樂死等之訓導。有神學家批評通諭缺乏對這些問題哲理性的探討，對於生命倫理上一向爭論激烈的議題，如：直接與間接墮胎的分別、胎兒何時才成為「人」、母親因強姦或亂倫受孕、教會容許的「侵入性治療」與禁止的「安樂死」中間的模糊界限等，都沒有交代。教宗在這通諭裡只重申教會在生命倫理上固有的立場，並沒有任何新的教導，儘管如此，這份通諭的價值卻是被廣泛肯定的。
                </p>

                <p className="font-semibold text-slate-800 mb-2">▲反對節育</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  為何反對節育？因為凡不自然的，都是上帝所不喜悅的。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  天主教會只能接受自然排卵日的計算法，不可使用非自然節育的方式，如保險套。教宗保祿六世《人類的生命》通諭（<em>Humanae Vitae</em>）——論節制生育（1968/7/25）：教會只准許利用不孕期，合法地享用自然的安排，卻禁止運用直接阻止生育的方法來阻礙自然過程的發展，就是不能用非自然的方式介入，避孕藥是一種非自然的方式，保險套也是一種非自然的方式。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  天主教倫理學有強大的自然法傳統，傾向把節育的議題推論到這個地步。過去參加跨教派倫理議題的討論，很多神父、天主教學者開口就提到自然，而批判宗教改革造成靈肉二元的分裂。令人好奇的是，選擇這種避開懷孕期的方式是出於自然的嗎？沒有家庭生活也是合乎自然的嗎？那些按照天主教會傳統服事上帝的神職人員，是否也是出於自然，但這樣不是更靈肉二元嗎？其中天主教神學一直無法完整說明的一項規定，就是神職人員不可結婚，因為不可結婚絕對不是出於自然法，天主教神學家只能說是出於一種超性的呼召。
                </p>

                <p className="font-semibold text-slate-800 mb-2 mt-3">▲反對同性戀行為</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  基於自然法的信念，天主教非常反對同性戀行為。有人對教宗方濟各寄予厚望，後來發現他一直都持守傳統天主教立場。二〇一三年，教宗方濟各接受記者提問時表示：「擁有同性戀傾向並不是問題，同性戀者不應該被邊緣化。」還強調說：「如果有人是同性戀，但他信仰上帝且心地良善，我怎能論斷他呢？」<sup>29</sup><span style={cite}>（https://www.bbc.com/zhongwen/trad/world/2013/07/130729_pope_gay）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  當時有很多人以為天主教會要改變立場了，但其實這只是呈現牧養的態度、高明的修辭而已。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  二〇一八年，教宗方濟各在私下會面時以比較寬廣的態度說：「你是男同志這件事並沒有關係，上帝既如此創造了你，也愛這樣的你。而我也不會在意這件事，教宗愛這樣的你。你必須對自己感到滿意。」<sup>30</sup><span style={cite}>（https://www.storm.mg/article/440426?page=1）</span>同年，教宗卻沉重地表示，神職人員間的同性戀行為，是令他「擔憂」的「嚴肅問題」；教會在候選人正式成為神職人員前，應確認其心智和情感足夠成熟，因此教會「強烈建議」有同性戀傾向的人，「不應該」選擇神職人員一職。<sup>31</sup><span style={cite}>（https://www.taiwannews.com.tw/ch/news/3588418）</span>但畢竟這不是公開談話，而是與他談過話者後來的引述。至少大略可知，尊重自然法的立場有可能延伸到尊重天生的同性戀傾向者，然而他也基於尊重自然法的立場明確反對同性戀行為，希望有同性戀傾向者不要成為神職人員。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  教宗保祿六世任命神學家寫出傳達天主教會官方立場的《天主教教理》，其中有關同性戀的看法如下：
                </p>
                <div className={quote}>
                  <p className={quoteText}>
                    第2357條<br />
                    (1) 古今中外均有；<br />
                    (2) 心理因素未明；<br />
                    (3) 從聖經上來看是嚴重的腐敗；從聖傳上來看是本質的錯亂；<br />
                    (4) 違反自然律，排除生命的賜予；<br />
                    (5) 不是來自一種感情上及性方面的真正互補；<br />
                    (6) 在任何情形下，同性戀行為是不被許可的。
                  </p>
                  <p className={quoteText} style={{ marginTop: '0.75rem' }}>
                    第2358條：<br />
                    (1) 有為數不少的男女，呈現著天生的同性戀傾向；<br />
                    (2) 對他們應該以尊重、同情和體貼相待，應該避免對他們有任何不公平的歧視；<br />
                    (3) 如果他們是基督徒，應該把他們由於此種情形所可能遭遇的困難，與基督十字架的犧牲結合在一起；<br />
                    (4) 同性戀者被呼召守貞潔。
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  以上是天主教會長久承襲傳統以來的主要立場。值得注意的是，在各教會傳統當中，有關接納同性戀者的部分已經愈來愈有共識，然而有關接納同性戀行為的部分仍各說各話。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  曾經在參加研討會的場合，從學生工作者口中得知，現代大學生受媒體影響比較支持同性戀，他們是缺乏傳統意識的一代，所知大都來自媒體。教會如果因為不贊成同性戀行為，卻表達得好像連同性戀者都強烈譴責、排斥的話，反而會造成教會內部的張力，若未能小心處理，甚至可能延伸成代溝問題。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  有些天主教學者支持同性戀，但卻不能接受沒有靈魂的主張。基督教這邊卻不一樣，主張自由神學者認為有沒有靈魂都無所謂，但卻熱烈支持同性戀。天主教認為最嚴重的靈魂議題，基督教這邊卻常有人可以輕易放過，連死了以後如何也都含糊其詞，好像永生盼望、終末信仰皆不扮演重要角色。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  許多反對同性戀行為的基督徒，都認同接納、愛護同性戀傾向者，問題在於是否全然接納同性戀行為？包括接受有同性戀行為者、同性戀傾向者，都能成為神職人員？教宗方濟各並沒有自由神學者想像中那麼開放，他只是運用比較緩和的語言表達牧養的立場，其實他並不贊同同性戀傾向者擔任神職人員。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-lg mb-3">六、結論</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                中世紀神學家多瑪斯傾向以「成義」詮釋「稱義」，他認為人的本性必須要承受上帝的恩典之後才能「稱義成聖」。這個觀念與奧古斯丁相近，卻與宗教改革的基本信念有別。多瑪斯強調上帝的恩典是「人的行為之外在原則」，犯罪墮落的人需要恩典之光「注入」（infuse），有如靈魂「注入」死去的身體而得以復活，藉著上帝恩典，種種德行——好習慣也要注入人的裡面。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                根據多瑪斯所言，當一個人有好行為表現時，其本性是有上帝的恩典參與其中而使他得改變的。這種觀點的背後是認為「義」與「不義」完全不可能有交集，人若不是「義人」，就是「不義者」，反之亦然。論及上帝的恩典如何來到人身上，多瑪斯在中世紀傳統之下，強調藉由上帝的恩典注入以致人得改變，這樣的觀點對於訓練德行成長方面有更多期待，追求達到不再是罪人，而是義人的結果。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                迄今，天主教神學家最難接受的宗教改革神學論點，就是路德所強調的稱義是「同時是義人與罪人」。天主教神學家認為義與罪完全不可能有交集，義人就是義人，而罪人就是罪人，寧可主張「成義」，原本是罪人，得到恩典之後就成為義人，雖是不完全的義人，卻仍是義人。他們無法理解路德所說的義人並非從人眼中所見，而是從上帝眼中所見，而從人眼中所見仍舊是罪人，這個神學見解的不同延續至今，張力還在。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在天主教會裡，傳統上主張信、望、愛為三樣「超德」，必須藉由領受神父所主持的彌撒聖體而得以「注入」。然而近年來受到自由神學影響卻有一傾向，把這超德外延到一切宗教信徒身上，如白舍客認為只要是有崇拜行為的各種宗教信徒，其崇拜本身已不是崇拜的目標，而是他們以自己所不了解的方式在崇拜上帝。白舍客詮釋梵二說：「它宣稱恩寵以一種不可見的方式在一切人的心中作工，並且聖靈給每一個人參與逾越奧蹟的可能。」<sup>32</sup><span style={cite}>（《基督宗教倫理學》，第二卷，22。）</span>值得注意這裡所說的是上帝的恩典在「一切人的心中」作工，而非只是相信的人，並且「聖靈給每一個人參與逾越奧蹟的可能」；逾越則是在指耶穌基督的犧牲代贖的奧祕，亦即耶穌基督的恩典對所有信或不信的人開放。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這是梵二以後天主教會的重大改變，其背後是拉納（Karl Rahner, 1904-1984）「匿名基督徒」的神學。「匿名基督徒」主張，所有人都可因善意得著恩寵，獲得超德，並實踐超德。儘管超德來自超自然的「注入」，卻呈現一幅人人都朝向上帝安排的終極目標前進的美好畫面，任何人在善意的引導之下，已不知不覺領受上帝的恩典。拉納用「匿名基督徒」來稱呼這些不知道自己是基督徒的基督徒，他們在不知不覺中敬拜上帝，得著恩典且領受超德。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                比如在佛教徒當中，有一些人實質領受上帝的恩典成為基督徒，只是他們不知道自己是匿名的基督徒。拉納提出這樣的神學有一個重要的背景，就是他對靈修的力量很有興趣，領受超德與靈性操練有關，這可外延至主張各種宗教的靈修都有可能通往上帝那裡，並且領受神聖的恩典。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                從宗教改革的角度來看，三超德裡有「信」，在此，「信」被定位為德行是非常奇怪的，因為宗教改革把「信」當作承受上帝恩典的入口。路德強調若信上帝則愛人，明顯把「信」當作德行中「愛」的基礎，亦即先信仰而後道德。當引進拉納這樣的神學時，因信稱義就變成普遍經驗且指向所有人，而且天主教神學的恩典注入概念也被放大了，原本超自然的注入只是針對相信基督恩典的信徒，保守的神學家甚至認為唯獨注入天主教會的信徒而排除基督教會的信徒，不料突然間梵二對所有宗教都開放了。可見天主教會處於搖擺之中，一方面極端保守，擺向固守教條的一端；另一方面則全面開放，甚至擺向人文主義的另一端。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                傳統天主教徒必須定期望彌撒才能領受基督的恩典，望彌撒之前要先找神父認罪告解。隨著時代演變，天主教也漸漸不再嚴格要求信徒告解後才能望彌撒，不少信徒望彌撒也不見得規律性地參加。在神學上，形成一幅極其傳統又非常自由的奇特畫面，好像神職人員特別過著靈修追求、守貞禱告的生活，而信徒則可在世上自由自在地過日子，只要來參加告解與彌撒就好。天主教盛行的地方，如義大利、法國、西班牙等都可見到這種生活浪漫十足，卻與敬虔靈修的修院教堂並存的特殊畫面。
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
                '天主教倫理學的正式名稱是「倫理神學」，論述根據有兩大來源：普遍存在於每個人理性中、不分信仰的「自然法（自然道德律）」，以及來自使徒傳承、由教宗與主教團執行的「教會訓導」。',
                '多瑪斯運用亞里斯多德「質料與形式」「實現與潛能」的哲學架構，奠定天主教倫理學重視靈魂不朽、目的論導向的基礎，強調人朝向神聖至善的終極目標培養德行（第二天性）。',
                '天主教倫理學重視「四樞德」（智德、義德、節德、勇德）與「三超德」（信、望、愛），並以「七宗罪」對應的七美德作為修道操練的具體項目，整體呈現以德行執行者（人）為核心的德行倫理學。',
                '基於靈魂不朽與煉獄的信念，天主教會對墮胎、安樂死、節育三項議題長期堅持保守立場，主張生命自受孕起即為完整人類存有，且反對一切非自然的節育方式，教宗方濟各對同性戀傾向者態度較溫和，但實質立場並未改變。',
                '路德「同時是義人與罪人」與天主教「成義」（義與罪不可能交集）的神學分歧至今仍是雙方最大的爭議點，這也直接影響雙方對倫理道德判斷根據於「人的改變」或「上帝眼中的義」的不同理解。',
                '拉納「匿名基督徒」神學把原本只針對信徒的恩典注入概念擴大至所有善意之人，反映天主教會在梵二之後於「固守教條」與「全面開放」兩端之間搖擺的張力。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「訓導權光照良心而非取代良心」的原則，對基督教會的權威觀有何參照價值？</h4>
              <p className="text-gray-700 leading-relaxed">
                本章提到梵二之後開明的天主教學者主張，「訓導權的責任並非取代教友的良心，而只是光照其良心，幫助教友自己做倫理的判斷」。這個原則對基督教會同樣具有參考價值——無論是牧者的教導、宗派的信條，都應當是幫助信徒建立自己與上帝、與真理的關係，而非替代信徒個人在上帝面前的良心抉擇。健康的權威應當「光照」而非「取代」，這條界線值得每個信仰群體時常自我檢視。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">天主教在「神職人員不可結婚」議題上的自然法困境，對教義體系的內在一致性有何反思？</h4>
              <p className="text-gray-700 leading-relaxed">
                本章誠實指出天主教倫理學的一個內部張力：強大的自然法傳統要求節育須符合「自然」，卻無法完整說明神職人員獨身制為何不違反同一套自然法邏輯，只能訴諸「超性的呼召」解釋。這提醒我們，任何嚴謹的神學體系都可能存在難以自圓其說的內部縫隙，誠實承認這些縫隙、而非強行填補或迴避討論，反而是更負責任的神學態度。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">拉納「匿名基督徒」神學，對基督教與其他宗教對話的立場有何啟發與挑戰？</h4>
              <p className="text-gray-700 leading-relaxed">
                拉納主張所有懷著善意生活的人都可能是「不知道自己是基督徒的基督徒」，這種立場一方面展現極大的包容性，另一方面也引發是否稀釋了基督信仰獨特性的爭議。這對基督教會如何在多元宗教處境中既保持對福音獨特性的忠信、又能真誠尊重其他信仰群體的善意與德行，是一個持續值得深思的張力，而非能簡單二選一的問題。
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
              '天主教「自然道德律」主張理性能普遍辨識善惡，不分信仰。你如何看待這種「理性可以獨立於信仰之外辨別是非」的主張，與基督教「唯獨聖經」的立場有何異同？',
              '本章列出四樞德（智德、義德、節德、勇德）與七宗罪對應的七美德，你認為自己目前最需要操練的是哪一項？',
              '路德「同時是義人與罪人」與天主教「成義」的分歧，你比較能認同哪一種對「稱義」的理解？為什麼？',
              '面對墮胎、安樂死、節育、同性戀等議題，你觀察本章呈現天主教會立場的方式，是否幫助你更全面地理解不同教派立場背後的神學根據，而非只停留在表面印象？',
              '拉納「匿名基督徒」神學認為所有善意之人都可能不知不覺領受恩典。你如何評估這種立場，它是過度樂觀，還是體現了對上帝恩典廣度的合理信心？',
              '本章提到天主教徒「只要來參加告解與彌撒就好」而信徒生活相對自由的奇特畫面。你觀察自己的信仰群體，是否也存在類似「儀式與生活脫節」的現象？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 逐條默想四樞德與三超德</h4>
              <p className="text-gray-700 mb-2">花一週時間，每天默想一種德行（智德、義德、節德、勇德、信、望、愛），寫下這項德行目前在你生命中的具體表現與缺乏之處。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 檢視自己惡習的對應美德</h4>
              <p className="text-gray-700 mb-2">
                誠實對照七宗罪與其對應的七美德，找出自己最容易陷入的一項惡習，本週具體操練其對應的美德。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🤝 與不同宗派的信徒對話</h4>
              <p className="text-gray-700 mb-2">
                找機會與天主教背景的朋友或同事誠懇對話，理解他們對倫理議題的看法及背後的神學根據，而不停留在刻板印象或表面爭論。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「上帝啊，求祢賜給我智德，使我在複雜的處境中做出合宜的判斷；求祢賜給我義德、節德、勇德，使我的生命成為德行的見證。求祢幫助我謙卑學習教會傳承中豐富的屬靈資源，也求祢使我持守因信稱義的根基，不因追求德行而落入自義。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
