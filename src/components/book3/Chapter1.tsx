import React from 'react';
import { BookOpen, Target, Lightbulb, MessageCircle } from 'lucide-react';

export default function Chapter1() {
  return (
    <div className="max-w-4xl mx-auto pb-12">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-8 border-b-2 border-indigo-100 pb-4">
        緒論
      </h1>

      <div className="space-y-8">
        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-indigo-700">
            <BookOpen className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">大使命的傳承與台灣教會現況</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>
              耶穌進前來，對他們說：「天上地下所有的權柄都賜給我了。所以，你們要去，使萬民作我的門徒，奉父、子、聖靈的名給他們施洗。凡我所吩咐你們的，都教訓他們遵守，我就常與你們同在，直到世界的末了。」(太廿八18-20) 
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 013</span>
            </p>
            <p>
              耶穌基督死裡復活後，對門徒交付「大使命」任務。2000多年來，耶穌基督的教會在世界各地以各種方式執行這項大使命。為了完成任務，各地教會因應其所在的環境，發展出不同的宣教策略和模式，其中有些模式和策略看來是非常成功的，因而引起一些地區教會的跟隨與模仿。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 013-014</span>
            </p>
            <p>
              台灣的教會近年來也採用過許多宣教策略與方法。曾經有一段時間非常熱衷於「小組教會」的模式，因而 G7 和 G12 等模式成為一股熱潮；現今在台灣常見的宣教與教會發展模式包括「恩惠相遇」、「雙翼」、「啟發課程」等。各式各樣的宣教模式被一個地區的教會引進該地區，都是因為這些宣教模式在一些地區的運作是成功的。但是我們也必須承認，這些宣教模式運用於不同地區的教會時，未必都能產生和原生地區或教會相同的效果。證諸台灣的經驗，台灣地區已經「瘋迷」過許多不同的模式和策略，有些模式和策略引進台灣時，已經證實其「水土不服」，因而在轉換中被淘汰。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 014</span>
            </p>
          </div>
        </section>

        <section className="bg-amber-50 p-6 rounded-xl shadow-sm border border-amber-200">
          <div className="flex items-center mb-4 text-amber-700">
            <span className="w-6 h-6 mr-2 text-lg">ℹ</span>
            <h2 className="text-xl font-bold">【延伸探討：現代教會的實用主義危機】</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>
              現代教會面臨的一個重大危機是「實用主義」（Pragmatism）與「消費主義」（Consumerism）的雙重夾擊。自二十世紀中葉「教會增長運動」（Church Growth Movement）興起以來，許多教會在制定宣教策略時，過度依賴社會學、市場行銷學或企業管理學。他們將焦點放在「如何滿足目標客群的需求」（Felt-needs），追求人數的快速增長與事工的表面成效。
            </p>
            <blockquote className="border-l-4 border-amber-400 pl-4 italic text-slate-600 my-4">
              「當教會將『信徒』轉變為『消費者』，將『教會』轉變為『宗教服務提供者』，將『福音』包裝成解決人生困境的『產品』時，福音那呼召人『捨己、背起十字架跟從主』的顛覆性與代價便蕩然無存。」
            </blockquote>
            <p className="text-sm text-amber-700 font-medium">
              📚 延伸內容來源：參考自大衛·博許 (David J. Bosch)《更新變化的宣教》對實用主義的批判，以及大衛·威爾斯 (David F. Wells)《孤立無援的福音》對教會消費主義的反思。
            </p>
            <p>
              因此，我們必須大聲疾呼「回歸聖經的宣教思考」。聖經不僅是我們信仰的最高準則，也是我們實踐宣教的唯一權威指南。我們需要從聖經中重新發掘宣教的本質、動力與方法。這意味著我們不能僅僅從聖經中尋找支持我們既定計畫的經文（斷章取義的解經），而是要讓聖經的宏大敘事——從創造、墮落、救贖到成全——來塑造我們的宣教觀。
            </p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-indigo-700">
            <Target className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">宣教的本質：上帝的宣教 (Missio Dei)</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>
              對於這樣多元的宣教模式，正如宣教學者大衛．博許 (David J. Bosch) 在其鉅著《更新變化的宣教》中所言，在教會發展的過去兩千年歷史長河裡，從來沒有一個時代只擁有單一的「宣教神學」，甚至在初代教會時期，耶路撒冷教會與安提阿教會的宣教模式便已展現出不同的風貌。時至今日，各地教會對於「宣教」的認知和執行方式仍有許多不同看法與實踐：有些教會堅持在本土深耕，致力於開拓在地教會；有些教會則認為，必須效法亞伯拉罕「離開本地、本族、父家」，跨越地理與文化的疆界，才能算是真正的「跨文化宣教」；亦有些教會主張，在目前全球化與移民社會的多元處境下，不用買機票離開本地，在教會所在的社區內，面對不同族群、移工或新住民，就可以進行實質的「跨文化宣教」。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 015</span>
            </p>
            <p>
              如果我們要深入探討或制定教會的宣教策略，最根本且穩妥的做法，還是應該回歸聖經的文本，從中找出上帝對其子民最初、最核心的呼召。若我們要依據聖經來批判與評估我們現今的宣教作為，那麼有一件至關重要的神學前提絕對不可忘記，那就是：「宣教」在本質上乃是「上帝的宣教」(Missio Dei)。根據《基督教聖經與神學詞典》的解釋，這個用詞為拉丁文的宣教神學用語。「神的宣教」或「神的差傳」原本是用於探討三一神學（Trinity）的內部關係，但近代宣教神學借用這個用語來強調一個顛覆性的觀念：在創世之初，甚至在教會存在之前，神就已經開始了祂的宣教工作。故此，宣教不只是人類的活動、不是教會為了擴張勢力而發起的企劃案，而是具有深刻的神學意義——教會是因為上帝的宣教而存在，宣教是上帝的屬性。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 015-016</span>
            </p>
            <p>
              進一步追溯這個概念的發展，宣教學家卡爾．哈頓斯坦 (Karl Hartenstein) 創造了 Missio Dei 這個新詞彙，用來總括並延伸神學家卡爾．巴特 (Karl Barth) 的教導。巴特在 1932 年的一場宣教演講中，破天荒地把宣教與三一神論緊密關聯起來。巴特和哈頓斯坦想要向當代教會闡明一個核心真理：宣教是依據上帝內在的三一活動（聖父差遣聖子，聖父與聖子差遣聖靈，三一神共同差遣教會進入世界），並強烈表達了上帝主導人類歷史與救贖計畫的絕對權柄。在這樣的神學框架下，教會不再是宣教的「主體」或「發起人」，而是受邀參與在上帝已經正在進行的工作中。對此，教會唯一恰當的回應，就是謙卑的順服與跟隨。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 017</span>
            </p>
          </div>

          {/* 延伸探討：Missio Dei 的神學翻轉 */}
          <div className="mt-6 bg-amber-50 p-5 rounded-lg border border-amber-200">
            <div className="flex items-center mb-3 text-amber-700">
              <span className="mr-2 text-lg">ℹ</span>
              <h3 className="font-bold text-lg">【延伸探討：Missio Dei 的神學翻轉】</h3>
            </div>
            <div className="text-slate-700 space-y-3">
              <p>
                在神學家卡爾·巴特（Karl Barth）的啟發下，近代宣教神學（特別是自1952年國際宣教協會的威靈根宣教大會 Willingen Conference 以來）以這個用語強調，在創世之初神已經開始宣教的工作。
              </p>
              <p>
                「上帝的宣教」這一概念徹底翻轉了傳統以「教會為中心」（Ecclesiocentric）的宣教觀。傳統觀念認為教會是主體，宣教是客體。然而，Missio Dei 強調，宣教的源頭是三一上帝：聖父差遣聖子，聖父與聖子共同差遣聖靈，而三一上帝共同差遣教會進入世界。這意味著，不是教會擁有一個宣教使命，而是<strong>「宣教的上帝擁有一個教會」</strong>。教會是上帝宣教的果子，也是上帝宣教的器皿。
              </p>
              <p className="text-sm text-amber-700 font-medium">
                📚 延伸內容來源：參考自 1952 年威靈根宣教大會 (Willingen Conference) 歷史文獻，以及卡爾·巴特 (Karl Barth) 的三一宣教神學論述。
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-indigo-700">
            <Lightbulb className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">保羅的跨文化宣教典範</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>
              新約聖經中有關「宣教」的描述與實踐，一直受到現今教會的高度重視與深入研究。其中，使徒保羅的宣教模式更是學者與牧者們探討的重中之重，因為他的事奉軌跡中確實蘊含了諸多超越時代、值得現代教會借鏡的原則。以保羅所處的第一世紀希羅世界（Greco-Roman world）的環境來看，他的宣教活動與模式，不僅跨越了羅馬帝國的多個行省（如加拉太、亞細亞、馬其頓、亞該亞），顯然是地理上的跨國宣教，更重要的是，他跨越了猶太教與外邦多神信仰的巨大鴻溝，是極具挑戰性的跨文化宣教。這樣兼具廣度與深度的宣教模式，自然成為當今許多教會在規劃差傳事工時，積極參考與模仿的典範。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 018</span>
            </p>
            <p>
              然而，或許是受到對保羅宣教旅程某種單一面向解讀的影響，一些華人教會過往習慣將宣教的視野，侷限在教會所在地以外的遙遠地區。他們往往帶著一種浪漫的想像，誤以為那些偏鄉地區，尤其是所謂的「創啟地區」（Creative Access Nations，指限制傳統宣教士進入的國家）的民眾，對福音一定充滿了天然的渴慕與迫切的需要。在這種思維的推波助瀾下，一些華人教會（包括台灣的許多教會）在引進各種教會增長與發展模式時，其底層的基本思維往往是：努力塑造自己成為「巨型教會」（Mega Church）。他們極盡一切可能和努力，投入大量資源在硬體建設與聚會人數的增長上，希望本身教會的會友人數能達到千人、甚至萬人以上。這種追求往往伴隨著一種迷思：認為教會必須先達到 Mega Church 的規模與財力，才有「資格」和「能力」差派宣教士至「國外」進行真正的宣教。這種將「本地牧養」與「海外宣教」割裂，並將宣教視為教會發展「最終階段奢侈品」的觀念，嚴重扭曲了新約教會的本質。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 018-019</span>
            </p>
            <p>
              面對當前複雜多變的世界，現今教會必須重新戴上「跨文化宣教」的眼鏡，仔細審視其所處的宣教環境與社區結構。關於這點，我們絕對可以從第一世紀最偉大的宣教士保羅身上學習到極為寶貴的功課。聖經《使徒行傳》詳細記載了保羅幾次關鍵的宣教講道，清楚展現了他如何針對截然不同的文化處境，靈活採用不同的宣講策略與切入點。例如，當他和巴拿巴在彼西底的安提阿等地的「猶太會堂」宣講時，他深知聽眾的背景，因此先訴諸猶太人被神揀選的歷史、出埃及的經歷以及大衛的應許，最後才將焦點引導至接受耶穌基督為應驗預言的救主作為結束（徒十三16-41）；面對路司得的異教祭司與群眾，他不再引用舊約經文，而是訴諸普遍啟示與神的創造之工，呼籲他們離棄虛妄歸向永生神（徒十四15-17）；而面對雅典亞略巴古那些充滿哲學思辨、崇拜多元神明的高知識份子，他則展現了極高的文化素養，從他們自己設立的「未識之神」祭壇開始切入，甚至引用希臘詩人的詩句來建立共鳴，進而傳講復活的真理（徒十七22-31）。這種「向什麼樣的人，就作什麼樣的人」的處境化智慧，是現代宣教不可或缺的基石。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 019-020</span>
            </p>
            <p>
              此外，探究保羅的宣教事工，就必然會觸及他與所建立之教會之間深厚且複雜的互動關係。特別是由他親自建立、且留下豐富書信紀錄的四間指標性教會——哥林多教會（面對世俗文化與內部紛爭）、以弗所教會（面對屬靈爭戰與異端威脅）、腓立比教會（面對逼迫與同工不和）、帖撒羅尼迦教會（面對末世論的困惑與逼迫）。從他寫給這些教會的書信中，我們可以清晰地梳理出保羅在建立教會的初期架構、教導信徒扎根真理、處理教會內部衝突、以及培訓下一代同工等各方面的具體作為與牧養心腸。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 020</span>
            </p>
            <p>
              總結來說，保羅身為初代教會中扮演承先啟後角色的「外邦人使徒」，其宣教事工不僅僅是走遍各城各鄉傳福音，更涉及了許多深層的跨文化溝通、跨族群的團隊服事、以及充滿為父為母心腸的關懷牧養等核心議題。這些議題對現今教會來說，不僅沒有過時，反而更加迫切與至關重要。現今的教會面對的是一個高度世俗化、後現代主義盛行、且移民頻繁的多元化社會，「地球村」早已不是一個學術理論，而是我們每天打開門就必須面對的生活實際。若現今教會想要有效地進行跨文化宣教（無論是在海外還是在本地社區），本身就必須先奠定扎實的宣教基礎，這包含了建立正確的宣教神學理論、發展適應當代處境的宣教模式，以及投入大量資源在宣教人才的培育上。而這一切的需求與解答，我們都可以從保羅那充滿聖靈大能與屬天智慧的宣教事工中，找到最值得學習的典範。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 022</span>
            </p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-indigo-700">
            <MessageCircle className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">延伸探討：回歸聖經的宣教反思</h2>
          </div>
          <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100 text-slate-700">
            <div className="mb-4 text-sm font-medium text-indigo-700 bg-indigo-100/50 p-3 rounded border border-indigo-200">
              【延伸探討來源：參照萊特 (C. H. Wright)《宣教中的上帝》與博許 (D. Bosch)《更新變化的宣教》之宣教神學觀點】
            </div>
            <h3 className="font-bold text-indigo-900 mb-4 text-lg">反思與應用：從「教會的宣教」到「上帝的宣教」</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-indigo-800 mb-2">一、 檢視宣教動機：破除「巨型教會」的迷思</h4>
                <p className="mb-2">
                  萊特（Christopher H. Wright）在《宣教中的上帝》中提出了一個根本性的翻轉：不是上帝的教會在世上有一個宣教任務，而是上帝的宣教在世上有一個教會。長久以來，許多教會（包括台灣的某些教會）在引進各種增長策略時，潛意識裡是將「宣教」當作擴張自身堂會版圖、增加聚會人數的工具。這種以「建立巨型教會（Mega Church）」為終極目標的思維，往往會導致教會在資源分配上嚴重傾斜於內部硬體與節目，而忽略了對外在社區與弱勢群體的實質關懷。
                </p>
                <p>
                  當我們真正理解「Missio Dei」（上帝的宣教）時，教會的焦點將從「自我建立」轉向「參與上帝在世界中的救贖計畫」。宣教的成功與否，不再僅僅以受洗人數或建堂規模來衡量，而是看這個信仰群體是否忠實地在所在之處，活出上帝公義、慈愛與和好的屬性。這挑戰現代教會重新檢視各項事工的動機：我們是在建造自己的巴別塔，還是在擴展上帝的國度？
                </p>
              </div>

              <div>
                <h4 className="font-bold text-indigo-800 mb-2">二、 處境化策略：在當代文化中尋找「未識之神」</h4>
                <p className="mb-2">
                  博許（David J. Bosch）的宣教典範理論提醒我們，宣教的動力與方法必須隨著時代與文化處境不斷更新。保羅在雅典亞略巴古的講道（徒十七）是處境化宣教的絕佳範例。他沒有一開始就用猶太人的律法來定罪希臘人，而是仔細觀察他們的宗教生活，從他們設立的「未識之神」祭壇切入，甚至引用他們自己詩人的話語來建立溝通的橋樑。
                </p>
                <p>
                  台灣是一個深受傳統民間信仰、儒家思想以及現代世俗主義交織影響的社會。當教會在引進國外（如韓國、北美）成功的宣教模式時，若不進行深度的「文化轉譯」與「水土適應」，往往會遭遇極大的阻力或產生「橘化為枳」的現象。效法保羅的處境化智慧，意味著現代的傳道人與信徒必須深入了解台灣本地的文化土壤、民間信仰背後的心理需求（如對平安的渴求、對祖先的慎終追遠），並在這些文化脈絡中找到福音的切入點，用現代人聽得懂的語言，講述那位他們「不認識卻在敬拜」的真神。
                </p>
              </div>

              <div>
                <h4 className="font-bold text-indigo-800 mb-2">三、 生命重於方法：宣教是生命本質的流露</h4>
                <p className="mb-2">
                  在追求效率與可複製性的現代社會，教會很容易陷入「方法論」的狂熱中，以為只要引進一套完美的課程（如雙翼、啟發）或組織架構（如G12），就能自動帶來教會的復興與宣教的突破。然而，保羅的宣教事工之所以充滿大能，不僅僅是因為他有卓越的策略，更是因為他擁有一個「被基督的愛激勵」、願意為福音「將萬事當作有損的」的真實生命。
                </p>
                <p>
                  宣教，歸根究柢，不是一套可以輕易套用的SOP，而是一種「被神改變與差派的生命」的自然流露。如果教會內部充滿了紛爭、世俗化與冷漠，再好的宣教策略也無法掩蓋生命見證的蒼白。因此，回歸聖經的宣教反思呼籲我們：在熱衷於尋找下一個「成功模式」之前，必須先回到十字架面前，深切地對付老我，致力於門徒生命本質的建造。因為，一個真正被福音大能翻轉的生命群體，本身就是最強而有力的宣教信息。
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
