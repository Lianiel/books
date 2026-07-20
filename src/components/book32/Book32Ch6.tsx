import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star } from 'lucide-react';
import PageTag from './PageTag';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book32Ch6() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <PageTag page={91} />
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-700 to-amber-700 bg-clip-text text-transparent">第六章</h1>
        <h2 className="text-xl font-semibold text-gray-700">閃的後代</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          創世記十21-32：「雅弗的哥哥閃，是希伯子孫之祖，他也生了兒子。閃的兒子是以攔、亞述、亞法撒、路德、亞蘭。亞蘭的兒子是烏斯、戶勒、基帖、瑪施。亞法撒生沙拉；沙拉生希伯。希伯生了兩個兒子，一個名叫法勒（就是分的意思），因為那時人就分地居住；法勒的兄弟名叫約坍。約坍生亞摩答、沙列、哈薩瑪非、耶拉、哈多蘭、烏薩、德拉、俄巴路、亞比瑪利、示巴、阿斐、哈腓拉、約巴，這都是約坍的兒子。他們所住的地方是從米沙直到西發東邊的山。這就是閃的子孫，各隨他們的宗族、方言，所住的地土、邦國。這些都是挪亞三個兒子的宗族，各隨他們的支派立國。洪水以後，他們在地上分為邦國。」<br />
          創世記十一10-25：「閃的後代記在下面。洪水以後二年，閃一百歲生了亞法撒。閃生亞法撒之後又活了五百年，並且生兒養女。亞法撒活到三十五歲，生了沙拉。亞法撒生沙拉之後又活了四百零三年，並且生兒養女。沙拉活到三十歲，生了希伯。沙拉生希伯之後又活了四百零三年，並且生兒養女。希伯活到三十四歲，生了法勒。希伯生法勒之後又活了四百三十年，並且生兒養女。法勒活到三十歲，生了拉吳。法勒生拉吳之後又活了二百零九年，並且生兒養女。拉吳活到三十二歲，生了西鹿。拉吳生西鹿之後又活了二百零七年，並且生兒養女。西鹿活到三十歲，生了拿鶴。西鹿生拿鶴之後又活了二百年，並且生兒養女。拿鶴活到二十九歲，生了他拉。拿鶴生他拉之後又活了一百一十九年，並且生兒養女。他拉活到七十歲，生了亞伯蘭、拿鶴、哈蘭。」
        </p>
      </div>

      {/* 正文 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-red-50 hover:from-amber-100 hover:to-red-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">正文</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <div>
              <h3 className="font-bold text-amber-800 text-lg mb-3">第一節　希伯來人與華人信仰旅程的對照</h3>
              <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                希伯來人的祖先可上溯至挪亞的兒子閃，閃的第四代子孫是法勒。法勒的名字是分的意思，由於巴別塔事件，從那時開始，閃的後裔往亞洲遷移繁衍，含的後裔往中東及非洲繁衍，亞弗的後裔往歐洲遷移繁衍。由此可知，中國的炎、黃乃是閃的後裔，整個中華民族也都是閃的後裔。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                從人口數可推知，閃的後代大約有一半往中華大地遷移，他們發展成漢、滿、蒙、回、藏及其他各少數民族，其中的漢族藉著漢字記錄了與創造者神、治理者上帝相關的信仰內涵，也藉著獻祭之事保留了因信稱義的內涵。
              </p>
              <p className="text-gray-700 leading-relaxed">
                閃的後代另一半的其中一支是亞伯拉罕的後裔，包括以實瑪利的後裔及以掃的後裔，他們大體上是今天的阿拉伯人。亞伯拉罕的屬靈長子以撒所生的屬靈長子雅各，產生了以色列十二支派，就是後來所稱的希伯來人，大體上也是今天的猶太人，人數上相對是比較少的。以下藉著「希伯來人與華人信仰旅程對照表」，來說明兩邊信仰旅程的相似性。
              </p>

              <PageTag page={94} />
              <div className="overflow-x-auto my-4">
                <table className="w-full border-collapse text-sm">
                  <caption className="text-amber-800 font-semibold mb-2">希伯來人與華人信仰旅程對照表</caption>
                  <thead>
                    <tr className="bg-amber-50">
                      <th className="border border-gray-300 px-3 py-2">希伯來人</th>
                      <th className="border border-gray-300 px-3 py-2">時間</th>
                      <th className="border border-gray-300 px-3 py-2">華人</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr><td className="border border-gray-300 px-3 py-2 text-center">希伯、法勒</td><td className="border border-gray-300 px-3 py-2 text-center">～2400BC</td><td className="border border-gray-300 px-3 py-2 text-center">黃帝</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-center">他拉</td><td className="border border-gray-300 px-3 py-2 text-center">～2200BC</td><td className="border border-gray-300 px-3 py-2 text-center">堯、舜</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-center">亞伯拉罕</td><td className="border border-gray-300 px-3 py-2 text-center">～2000BC</td><td className="border border-gray-300 px-3 py-2 text-center">夏禹</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-center">摩西</td><td className="border border-gray-300 px-3 py-2 text-center">～1500BC</td><td className="border border-gray-300 px-3 py-2 text-center">商湯</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-center">大衛、所羅門</td><td className="border border-gray-300 px-3 py-2 text-center">～1000BC</td><td className="border border-gray-300 px-3 py-2 text-center">周文、武</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-center">以斯拉</td><td className="border border-gray-300 px-3 py-2 text-center">～500BC</td><td className="border border-gray-300 px-3 py-2 text-center">孔、孟</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-center"></td><td className="border border-gray-300 px-3 py-2 text-center">耶穌基督～30AD</td><td className="border border-gray-300 px-3 py-2 text-center"></td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-center">經院哲學</td><td className="border border-gray-300 px-3 py-2 text-center">～1000AD</td><td className="border border-gray-300 px-3 py-2 text-center">宋明理學</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-center">馬丁路德</td><td className="border border-gray-300 px-3 py-2 text-center">～1500AD</td><td className="border border-gray-300 px-3 py-2 text-center">黃宗羲</td></tr>
                    <tr><td className="border border-gray-300 px-3 py-2 text-center">自由神學</td><td className="border border-gray-300 px-3 py-2 text-center">～1911AD</td><td className="border border-gray-300 px-3 py-2 text-center">停止祭天</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="mb-4">
                <span className="font-semibold text-amber-700">壹、從法勒到摩西</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  參看前面的對照表，法勒出生時，人開始分地居住（創十25），這時間點與中國「黃帝」出現在歷史舞台的時間點相近。他拉則大約與堯、舜同時，近東的「他拉」原來是拜偶像的，因他居住在迦勒底的吾珥那個拜偶像的大環境裡面（書廿四14-15），遠東的「堯、舜」則一直都敬拜獨一上帝，且因為知道「天下」是上帝的，所以很自然地實行禪讓政治。孔子所羨慕「大
                </p>

                <PageTag page={95} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  道之行也，天下為公」的時代就是堯、舜的時代。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  後來上帝親自向亞伯拉罕顯現（創十二1，徒七2-3），使父親他拉及全家都重新認識上帝，並敬拜上帝。亞伯拉罕大約與夏禹同時，夏禹擁有與黃帝、堯、舜相同的信仰，敬拜獨一上帝。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  夏代是敬虔的時代，從周公的一段話可確定：「周公曰：『嗚呼！休茲，知恤鮮哉！古之人迪惟有夏，乃有室大競，籲俊尊上帝，迪知忱恂于九德之行。』」（《周書‧立政》言官人之道）譯文：「周公說：『唉！美哉！能知道憂恤者少矣！古時的人像夏代，大夫們都很好呼，籲俊傑之智之士尊敬上帝，知道誠信地遵照九德而行。』」<sup>1</sup><span style={cite}>（朱廷獻，《尚書研究》，頁620-621）</span>中國夏代正是亞伯拉罕、以撒、雅各、約瑟真實經歷上帝的時期。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  夏代最後的王是暴君夏桀，當神興起摩西拯救以色列百姓脫離法老王的奴役時，神也在中國興起商湯拯救百姓脫離夏桀的暴政。正如《商書‧湯誓》（商湯伐夏桀誓師之辭）所說：「有夏多罪，天命殛之。……予畏上帝，不敢不正。」譯文：「夏桀罪惡多端，上帝命令我去誅滅他。……我敬畏上帝，不敢不去征伐他。」<sup>2</sup><span style={cite}>（朱廷獻，《尚書研究》，頁451-452。屈萬里註釋，《尚書今註今譯》，頁49-50）</span>約書亞帶領以色列民殺滅迦南諸族，乃因迦南人罪孽滿盈，上帝命以色列人滅之（創十五16；書一1-6，十12-
                </p>

                <PageTag page={96} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  14）。其原則是相同的，因為神掌管歷史、興王廢王。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  商湯是一位很好的王，甚至在全國乾旱時罪己求雨，上帝應允他的禱告，使雨降下，解除旱情：「昔者湯克夏而正天下，天大旱，五年不收。湯乃以身禱於桑林，曰：『余一人有罪，無及萬夫；萬夫有罪，在余一人。……』於是剪其髮，磨其手，以身為犧牲，用祈福於上帝。民乃甚語，雨乃大至。」（《呂氏春秋》卷九）<sup>3</sup><span style={cite}>（林品石註釋，《呂氏春秋今註今譯》，頁225）</span>
                </p>
              </div>

              <div>
                <span className="font-semibold text-amber-700">貳、從大衛到基督</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  商代之末，神興起周文王拯救百姓。「冒聞于上帝，帝休，天乃大命文王，壹戎殷，誕受闕命。」（《周書‧康誥》〔康叔封於康，武王誥之之辭〕）譯文：「上聞於上帝，上帝欣喜，上帝乃發出偉大的命令給文王，殺滅大殷之國，而接受了作王命令。」<sup>4</sup><span style={cite}>（朱廷獻，《尚書研究》，頁529-530）</span>那時期恰好以色列的大衛王也被揀選接替掃羅王。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  周文王遭受商紂王多重迫害，仍然尊之為王，雖有實力可打贏商紂王，但顧念百姓性命，不隨意出兵。直至時候滿足，上帝指示出兵，武王軍隊所到之處，人民皆敵開城門迎接，沒有產生戰亂的傷害，這在中國改朝換代的歷史裡可說是神最特
                </p>

                <PageTag page={97} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  別賜福的一個神蹟。<sup>5</sup><span style={cite}>（陳龍根，《詩經裏的世界》，頁48-69。桂冠圖書公司編輯部，《中國古史故事》，頁111-127）</span>其尊崇上帝，忍耐等候之過程，與大衛多年逃難最終作王的過程有異曲同工之處。周王取代殷王治理天下，與大衛王取代掃羅王一樣，都是上帝喜悅的取代上帝不喜悅的，在上帝詔命下，按上帝指示而行。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「用端命于上帝，皇天用訓厥道，付畀四方。」（《周書‧顧命》）端：始也。畀：給予。譯文：「開始接受遵行上帝的命令，偉大的上帝教訓我們這道，就把天下交付我們。」<sup>6</sup><span style={cite}>（朱廷獻，《尚書研究》，頁641-642）</span>這是文王、武王遵行上帝命令而能治理四方的見證。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「維此文王，小心翼翼，昭事上帝，聿懷多福。」（〈大明〉）譯文：「由於文王小心翼翼，恭敬順服，以明德事奉上帝，所以得到很多福氣。」<sup>7</sup><span style={cite}>（雒江生，《詩經通詁》，頁683-685。馬持盈，《詩經今註今譯》，頁440-441）</span>周文王是事奉上帝的好王，並且制訂了祭祀上帝的儀式典章，讓後人可以傳承。如〈周頌〉所記：「我將我享，維羊維牛，維天其右之，儀式刑文王之典，日靖四方。」將：奉也。享：獻也。譯文：「我以羊與牛向上帝獻祭，祈求上帝保佑，儀式效法文王之典章，以安定天下四方。」<sup>8</sup><span style={cite}>（馬持盈，《詩經今註今譯》，頁556-557）</span>周文王這方面與大衛很相似，因大衛也建立了讓後代能長久效法的敬拜模式，對以色列民族的敬拜生活產生極大的正面影響。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  孔子整理五經，主要目的是見證上帝的創造、拯救、護
                </p>

                <PageTag page={98} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  理、叫人成聖等，大約同時期文士以斯拉也整理了舊約聖經，為見證上帝的創造、拯救、護理、叫人成聖等，兩邊所做都有助於迎接基督降生。基督在擁有完整舊約聖經的希伯來民族當中降生，這聖經對於引導猶太人來信基督耶穌，有很大的幫助。當然，也有許多猶太人用錯誤的角度讀聖經，以至於用聖經來反對基督耶穌，保羅未信主之前就是一個很明顯的例子。在中國，包括古文、五經、《論語》、《孟子》，都能引導華人來信靠上帝、信靠基督耶穌，但必須是用正確的角度來理解，否則也會像朱熹，以孔子的話來否認孔子篤信的上帝。
                </p>

                <div>
                  <span className="font-semibold text-amber-700">參、從中世紀到近代</span>
                  <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                    基督耶穌成就神的救恩工作，並差遣使徒往普世去傳揚因信稱義的福音。大約一千年之後，西方的經院哲學使福音被蒙蔽，而在中國，宋明理學也遮蔽了孔孟原有的上帝信仰。孔孟的思想都是神本的，宋明理學則是人本的。朱子註論語「獲罪於天，無所禱也」，曾以「理」字詮釋「天」字：「天，即理也。……逆理，則獲罪於天矣。」<sup>9</sup><span style={cite}>（朱熹，《四書集注》，頁65）</span>清錢大昕反對朱子的詮釋，以為天不同於理。在他的《十駕齋養新錄》卷三，有如下的批評：「宋儒謂性即理，是也；謂天即理，恐未然。獲罪於天，無所禱。謂禱於天，豈禱於理乎？詩云：敬天之怒，畏天之威，
                  </p>

                  <PageTag page={99} />
                  <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                    理豈有怨與威乎？又云，敬天之渝，理不可言渝也。謂理出於天則可，謂天即理則不可。」<sup>10</sup><span style={cite}>（錢大昕，《十駕齋養新錄》〔一〕，頁49）</span>錢氏此一批評，主要是不贊成朱子除去天的神性義。朱子以理說天，是發揮他自己及宋代理學家對天的觀念，與孔子所說天的原意並不相符。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    由上述可知，孔子所代表的儒家乃是一群敬畏上帝、禱告上帝、倚靠上帝的人，而朱熹所代表的新儒家則將有位格的上帝改變成無位格的「理」，僅注重倫理道德，而失去與上帝的關係這個層面。這正像中世紀的經院哲學，只注重哲學性的道德與教條，而不注重跟上帝的實質關係；也像二十世紀新派神學的立場，他們不相信聖經中的神蹟，只看重聖經在倫理道德的應用。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    到了十六世紀，馬丁路德重新發現因信稱義的真理，力促教皇、君王能服在上帝的真理之下。大約同時期，中國明末清初的黃宗羲寫《明夷待訪錄》，指出中國數千年君王制度家天下的錯謬，以及「天下為公」的理想，因為堯、舜、禹、湯、文、武、孔、孟，都承認天下屬於上帝，且認為君王應敬畏天、作僕人。
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    華人從最早的祖先直到清朝最後一位君王，都舉行郊祀，獻祭給上帝。《禮記》是孔子教導《禮經》所存留的紀錄，其中清楚說明獻祭的意義與重要，不僅表明上帝的真實，也呈現一
                  </p>

                  <PageTag page={100} />
                  <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                    些因信稱義的觀念。但在二十世紀初，隨著清朝結束，中國天子的祭天儀式也停止了。在西方，同時間則興起新派神學，或稱自由神學，將上帝變成只是宗教的詞彙。
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    以上所做的比較，不是要強調華人的信仰能夠與舊約的以色列及新約的教會相匹配；乃是要說明，上帝也眷顧生活在中華大地的閃族後裔，讓華人祖先有數千年之久能認識祂、敬拜祂。華人對神的認識當然是很有限的，中國的四書五經不能與聖經正典相提並論，但已經足夠可以為華人指出一條正路，就是要來敬拜創造萬有的上帝、要相信新舊約聖經所啟示的一切、要投靠救贖全人類的耶穌基督，並藉此得到天人合一的恩典、達致內聖外王的理想。這是華人惟一的出路，也是世人惟一的出路。
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-amber-800 text-lg mb-3">第二節　羌人與羊文化</h3>
              <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                本節內容原為回應「基督教與中國研究中心」李靈牧師〈解析文化與圖騰──兼談「羊文化」成立嗎？〉<sup>11</sup><span style={cite}>（李鑫，〈解析文化與圖騰──兼談「羊文化」成立嗎？〉，《恩福》雜誌總56，2015.7，頁7）</span>一文而寫，正符合本書第六章所需的內容，因此稍加修改，置於此處。<sup>12</sup><span style={cite}>（莊東傑，〈羌人與羊文化〉，《恩福》雜誌總57，2015.10，頁12）</span>李牧師針對「羊文化」提出討論：「中國傳統文化曾經對『羊』推崇，是因
              </p>

              <PageTag page={101} />
              <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                為把『羊』作為『圖騰』物。許多文明的發展，都經過一段『圖騰』崇拜的歷史。」又說：「歷史上曾經出現過的『羊崇拜』（或者崇拜羊）是『羊圖騰』文化。」最後說：「古代羌人崇拜『羊』是屬於『圖騰崇拜』。」筆者針對這些說法，提出一些客觀的角度來回應。以下從近代羌人與古代羌人兩方面來談。
              </p>

              <div className="mb-4">
                <span className="font-semibold text-amber-700">壹、近代羌人</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  筆者手上有一份資料名為《失落在東方的羊兒》<sup>13</sup><span style={cite}>（Esther Chen，《失落在東方的羊兒》，中華醒獅系列叢書第一卷）</span>，特別研究羌人的信仰生活，羅列羌人與以色列人眾多相似之處，包括獻羊與無酵餅為祭給天神，祭司服飾，祭壇、房屋的材料樣式，大衛之星的圖案，完整的獻祭程序，成人禮、婚禮的執行，在門框上塗羊血或掛紅布等。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  筆者於2008年汶川大地震之後曾與教會團隊一起去到災區探視，災區有不少羌族，接待我們的專業導遊是羌族姑娘。她說：「我們的祖先原來是在西方，因逃避追兵而跑到中國來。逃跑過程有天神幫助，祂放下屏障阻隔了我們族人與追兵，我們才能安然抵達中國的地方。」又說：「羌人喜歡羊，但我們不拜羊，我們是殺羊獻給天神，並且也吃羊。我們與印度完全不同，他們喜歡牛，拜牛，不吃牛；我們喜歡羊，不拜羊，吃羊。」
                </p>

                <PageTag page={102} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  筆者親眼看到他們的房屋，每間房屋的屋簷側邊都有羊頭的代表物在牆面高處，有的複雜，有的簡單，各家不同，但都一眼就可看出是代表羊。這是他們的圖騰嗎？如果圖騰的內涵或定義只是代表認同，那麼這就是他們的圖騰；然而若說，圖騰的定義包含崇拜那個圖騰，那麼這並不是他們的圖騰，因為他們並不崇拜這個東西。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  羌族最隆重的民族節日為一年一次的「祭天會」和「羌曆年」，分別於春秋兩季舉行。春季大約在農曆五月麥子初熟的季節，祈禱風調雨順，殺羊祭天。秋後收割的季節大約在農曆十月，答謝天神賜予的五穀豐登，過年拜神。可謂春禱秋酬，與以色列人每年過逾越節及住棚節極其相似。
                </p>

                <PageTag page={103} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  「祭天會」最主要的活動是殺羊或牛祭天，是悔改求福的大日子。祭天的作法幾乎都與聖經的記載完全一致，其基本程序如下：
                </p>
                <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-1 mb-3">
                  <li>精選上好的羊。</li>
                  <li>舉旗、吹號鳴鑼：頌天調。</li>
                  <li>穿上細麻衣，抬羊獻祭。</li>
                  <li>用香柏樹煙和聖水潔淨祭物。</li>
                  <li>敲羊皮鼓，聆聽天神的聲音。</li>
                  <li>按手在羊頭上，唱祝福辭。</li>
                  <li>殺羊祭祀。</li>
                  <li>在四角祭壇上塗抹羊血。</li>
                  <li>高舉獻祭的羊敬神，舊時還會鳴槍謝神。</li>
                </ol>

                <PageTag page={104} />
                <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-1 mb-3" start={10}>
                  <li>在天然石頭疊砌的祭壇前擺設羔羊的血、無酵餅和十二塊白石。</li>
                  <li>在神壇前焚香謝神感恩、請願、還願、祝福。</li>
                  <li>男丁朝見神。放下羌刀，謝罪求福。</li>
                  <li>長者為年少的或參加成人禮的少年點羊血賜福。</li>
                  <li>烤羊肉，全寨分食祭祀羔羊。</li>
                </ol>
                <p className="text-gray-700 leading-relaxed mb-3">
                  依以上資料，羌人有可能是以色列人的後代，甚至連他們的符號、用語也有一些與希伯來文相似之處。這樣我們就了解，為何羌人沒有去拜羊，而是以羊為祭獻給天神，並求天神賜福族人。因為這不是人自己發展出來的信仰，而是源自神啟示的信仰。
                </p>
              </div>

              <div>
                <span className="font-semibold text-amber-700">貳、古代羌人</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  炎帝的族姓是「姜」，可以認為，姓從母系，姜即為羌。<sup>14</sup><span style={cite}>（李鑫，〈解析文化與圖騰──兼談「羊文化」成立嗎？〉，《恩福》雜誌總56，頁8）</span>
                </p>

                <PageTag page={105} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  我們可以進一步來談古代羌人，並且與前大段成為很好的對照。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  姜與羌意義相似，一般說姜是羊的女兒，羌是羊的兒子，筆者認為這兩個字也可能是在表達：「人是大牧人上帝的羊與兒女。」羌人若認為自己是羊的兒女，就可能去拜羊。但他們並不拜羊，而是殺羊獻祭，所以比較可能是看自己為上帝的羊與兒女，獻羊也等於是獻上自己。這樣的角度與聖經對人的看法是一致的，不管舊約或新約，都說人如同羊，上帝如同牧人；在獻祭的事上，也是羊代替人的地位去受死或奉獻。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  關於羌人與華人的關係，湖南省社會科學院炎黃文化研究所所長中華民族源流史研究專家何光岳說：「羌有一支形成炎帝族與黃帝族，一支形成甘青高原的諸羌，一支向西南遷徙，後來形成域外諸羌，還有向四方遷徙，與周圍各土著民族融合，形成新的族群。」<sup>15</sup><span style={cite}>（何光岳，《氏羌源流史》，江西教育出版社，2000）</span>哈佛大學東亞系博士中國社科院客座研究員王明珂說：「歷史上一波波的西方羌人進入中土，稱為中土之人，但較晚東進的羌人卻被中土之人視為戎狄羌番，受到驅逐征伐，這是歷史的荒謬。」<sup>16</sup><span style={cite}>（王明珂，《羌在漢藏之間──一個華夏邊緣的歷史人類學研究》，台灣聯經出版事業，2003）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  這兩段話提供了大致的輪廓，古代羌人與炎黃相關，羌人一波一波東進，又經歷多次分化，向東、向西、向北、向南遷徙，繁衍為中華多民族，這個「羌」乃是閃的後代，是華夏
                </p>

                <PageTag page={106} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  民族的祖先。至於春秋戰國時期才出現在中國的近代羌族，則可能是以色列的後代，時間也恰好是在以色列亡國之後一段時期。他們被排斥是可以理解的，因為時空的阻隔，古羌（閃的部分後代）與近羌（以色列的部分後代）早已不相識了。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  近代羌族的信仰生活、獻祭模式等與聖經一致，不會太奇怪，因為他們很可能是以色列的後代。但古代華人為何也有與聖經相似的信仰內涵及獻祭方式呢？最合理的答案就是，他們繼承了挪亞及閃的信仰，因此獻羊為祭給上帝。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  亞伯獻羔羊為祭，蒙神悅納，得了稱義的見證（來十一4）。這個救恩之道，一直傳承到挪亞，因此挪亞下方舟所做的第一件事就是築壇獻祭。獻羊贖罪這件事，藉由挪亞傳給閃，以及閃的後裔。華人乃是閃的後裔，因此傳承執行，並呈現在眾多中國字、古籍之中，以及君王祭天的實際行動中。《史記‧封禪書》詳細記載古時天子在泰山祭天，最早從無懷式、虙羲、神農、炎帝、黃帝就有了，因此很可能就是閃的後代古羌所傳來的。這個獻祭給皇天上帝的祭天大典，一直執行到清朝結束才停止。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  論到獻祭給上帝的重要性，《論語》記載：「子貢欲去告朔之餼羊。子曰：『賜也，爾愛其羊；我愛其禮。』」（〈八佾〉）《禮記》記載：「祀帝於郊，敬之至也。」（〈禮器〉）《易經》也說：「聖人亨以享上帝……說以利貞是以乎天而應乎人。」（下經）論到祭物的品質，孔子說：「是月也，乃命宰祝循行犧牲，
                </p>

                <PageTag page={107} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  視全具，案芻拳。瞻肥瘠，察物色，必比類，量大小，視長短，皆中度。五者備當，上帝其饗。」（《禮記‧月令》）中國天子的獻祭與以色列祭司的獻祭，都同樣被要求祭物必須完全沒有瑕疵，因為這關乎羔羊基督贖罪的預表（來九13-14）。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  從救恩的成就來看，現今已經不需要獻羊為祭給上帝了，因為獨一的永恆羔羊已為全人類獻祭贖罪。閃族、古代羌人、古代華人、以色列人、近代羌人的「羊文化」乃是「認同自己是上帝的羊，獻羊給上帝，吃羊，不拜羊」，這是正面的，但只是預表。今日華人基督徒如果要發揚光大「羊文化」，那就是要幫助更多同胞及世人認同自己是大牧人基督耶穌的羊，並且帶領他們來「吃喝羔羊基督、敬拜羔羊基督、效法羔羊基督」。
                </p>
              </div>
            </div>

          </div>
        )}
      </div>

      {/* 重點整理 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-sky-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">重點整理</span>
          </div>
          {expanded['summary'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['summary'] && (
          <div className="p-5 bg-white">
            <ul className="space-y-3">
              {[
                '中華民族本為閃的後裔：閃的後代大約有一半往中華大地遷移，發展成漢、滿、蒙、回、藏及其他少數民族；另一半則是亞伯拉罕的後裔，包括阿拉伯人與希伯來人（猶太人）。',
                '「希伯來人與華人信仰旅程對照表」顯示，從法勒／黃帝到馬丁路德／黃宗羲，希伯來人與華人的信仰發展在時間點上多有相近之處，顯明上帝也眷顧生活在中華大地的閃族後裔。',
                '孔孟思想是神本的、敬畏上帝的，但宋明理學將有位格的上帝改變成無位格的「理」，僅注重倫理道德，失去了與上帝的關係，這與中世紀經院哲學、近代自由神學的處境有相似之處。',
                '近代羌人的信仰生活、獻祭模式與聖經高度一致，很可能是以色列的後代；古代羌人（炎帝一族）則是閃的後代，兩者因時空阻隔而彼此不相識，卻都保留了獻羊祭天而不拜羊的信仰內涵。',
                '從中國字、古籍到羌族的祭天儀式，「羊文化」的本質是「認同自己是上帝的羊，獻羊給上帝，吃羊，不拜羊」，這預表了羔羊基督的贖罪之工；今日華人當認同自己是大牧人基督耶穌的羊。',
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
    </div>
  );
}
