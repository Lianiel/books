import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star } from 'lucide-react';
import PageTag from './PageTag';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;
const heb = { fontFamily: 'serif', fontSize: '1.05em' } as const;

export default function Book33Ch1() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <PageTag page={39} />
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-700 to-amber-700 bg-clip-text text-transparent">第一章</h1>
        <h2 className="text-xl font-semibold text-gray-700">基督教的罪觀</h2>
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

            <p className="text-gray-700 leading-relaxed">
              本章所探討的「基督教的罪觀」，主要是指基督教──特別是西方教會──對「罪」的基本了解。分別從原文、中文翻譯、聖經、神學等方面來探討。第一節「罪」的原文詞彙與中文翻譯，先分別從希伯來文、希臘文兩方面作簡要的介紹，而後從華人的角度，討論聖經中關於「罪」的適當中文翻譯。第二節聖經中的「罪」，是關於「罪」的聖經概覽。第三節「罪」的神學，主要整理奧利金、奧古斯丁、托馬斯、馬丁路德、尼布爾（Reinhold Niebuhr）<sup>1</sup><span style={cite}>（Reinhold Niebuhr 是H. Richard Niebuhr 的兄長，二人不同）</span>等五人的思想。
            </p>

            <div>
              <h3 className="font-bold text-amber-800 text-lg mb-3">第一節　「罪」的原文詞彙與中文翻譯</h3>

              <div className="mb-4">
                <span className="font-semibold text-amber-700">壹、希伯來字詞</span>

                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">一、常用詞根</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  希伯來文聖經在描述人的悲劇性處境時，使用了豐富的語
                </p>

                <PageTag page={40} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  彙。與罪有關的詞彙約有25個，<sup>2</sup><span style={cite}>（The Anchor Bible Dictionary, Vol. 6, Doubleday, 31）</span>中文和合本翻譯作「罪、罪過、罪孽」，最常使用的詞根有三個：<span style={heb}>חֵטְא</span>（ht' / hatta），<span style={heb}>עָוֹן</span>（'wn / awon）和<span style={heb}>פֶּשַׁע</span>（ps' / pesha）。<sup>3</sup><span style={cite}>（The Anchor Bible Dictionary, Vol. 6, Doubleday, 31）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span style={heb}>חֵטְא</span>（ht' / hatta）是使用最多的一個詞根，在舊約出現約595次，英文欽定本大部分譯為sin，少部分譯為sin offering，sinner，cleanse等。主要含意是「過錯、失敗、犯錯誤、迷失方向，射不中的或達不到目標」。<sup>4</sup><span style={cite}>（The Interpreter's Dictionary of the Bible〔R-Z〕，361。Horst Dietrich Preuss, The Old Testament Theology〔II〕, 174）</span>絕大部分情況，這字根的出現都是指道德上或宗教上的偏離，指得罪人（創九9）或得罪神（撒下十二13，哀五7）。<sup>5</sup><span style={cite}>（Horst Dietrich Preuss, The Old Testament Theology〔II〕, 173。吳羅瑜，《聖經新辭典》，頁603-604）</span>中文和合本、呂振中譯本大多為「罪」，斯高譯本譯為「罪」、「罪惡」，或「過犯」。舊約第一次出現在創四7：「你若行的不好，『罪』（sin）就伏在門前。」斯高譯本譯為：「罪惡」。其他如創十三13：「所多瑪人在耶和華面前『罪』（sin）大惡極。」創四一9：「那時酒政對法老說，我今日想起我的『罪』來。」斯高譯本：「我今天想起了我的『過犯』。」創卅九9：「我怎能作這大惡，『得罪』（sin against）神呢？」<sup>6</sup><span style={cite}>（Almega Bible tools Library CD4, Version 3）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <span style={heb}>עָוֹן</span>（'wn / awon）在舊約出現230次，具有比較濃厚的神學意味，專門用來描述人對上主所犯的罪過和錯誤，很少用來描述人對人所犯的罪。<span style={heb}>עָוֹן</span>大部分是有意的犯罪、故意的冒犯。<sup>7</sup><span style={cite}>（Horst Dietrich Preuss, The Old Testament Theology〔II〕, 176）</span><span style={heb}>עָוֹן</span>既指「罪」本身，也指「罪行」，有時也用來描述對於罪行的「懲罰」。也可以說，這字包含了罪、罪行、罪果整體。<sup>8</sup><span style={cite}>（The Anchor Bible Dictionary, Vol.6, Doubleday, 32。Horst Dietrich Preuss, The Old Testament Theology〔II〕, 176）</span>英文欽定
                </p>

                <PageTag page={41} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  本譯為iniquity 218次，punishment 10次，中文和合本、呂振中譯本、斯高譯本的翻譯大同小異。例如創四13：「該隱對耶和華說，我的『刑罰』（punishment）太重。」斯高譯本：「罪罰」。創十五16：「亞摩利人的『罪孽』（iniquity），還沒有滿盈。」斯高譯本：「罪惡」。出二十5：「恨我的，我必追討他的『罪』（iniquity），自父及子，直到三、四代。」<sup>9</sup><span style={cite}>（Almega Bible tools Library CD4, Version 3）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <span style={heb}>פֶּשַׁע</span>（ps' / pesha）在舊約出現135次，遠少於<span style={heb}>חֵטְא</span>和<span style={heb}>עָוֹן</span>，但<span style={heb}>פֶּשַׁע</span>是最具有神學意味的一個詞根，其最初意義是指對於一個具體對象的背叛行為，包括對人、國家、律法、契約、上帝的背叛。<sup>10</sup><span style={cite}>（The Anchor Bible Dictionary, Vol.6, Doubleday, 32）</span><span style={heb}>פֶּשַׁע</span>所指出的基本上是律法上的罪，且經常是最嚴重的罪。在先知書中，是用來宣告上帝的審判、定罪。<sup>11</sup><span style={cite}>（Horst Dietrich Preuss, The Old Testament Theology〔II〕, 176）</span>例如賽一2：「天哪，要聽！地啊，側耳而聽！因為耶和華說：我養育兒女，將他們養大，他們竟『悖逆』我。」四三27：「你的始祖犯罪；你的師傅『違背』我。」耶二8：「祭司都說，耶和華在哪裡呢？傳講律法的都不認識我。官長『違背』我；先知藉巴力說預言，隨從無益的神。」耶二29：「耶和華說，你們為何與我爭辯呢？你們都『違背』了我。」
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  這字的名詞，中文和合本、呂振中譯本大多譯為「過犯」、「罪過」，斯高譯本為「罪」、「過」、「罪過」都有；英文欽定本多數譯為transgression，少數譯為sin。這字經常以複數型態出現，表明實際的諸多罪行。例如詩篇卅二5：「我向你陳明我的罪，不隱瞞我的惡。我說：我要向耶和華承認我的過犯
                </p>

                <PageTag page={42} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  （transgressions），你就赦免我的罪惡。」結卅三10：「人子啊，你要對以色列家說：『你們常說：我們的過犯（transgressions）罪惡？在我們身上，我們必因此消滅，怎能存活呢？』」<sup>12</sup><span style={cite}>（Horst Dietrich Preuss, The Old Testament Theology〔II〕, 176）</span>箴廿八13：「遮掩自己『罪過』（sins）的，必不亨通。」斯高譯本：「文『過』飾非的，必不會順利。」箴廿八2：「邦國因有『罪過』（transgression），君王就更換。」斯高譯本：「由於國家的『罪』，領袖時有更迭。」賽五三12：「他也被列在『罪犯』（transgressors）之中。」<sup>13</sup><span style={cite}>（Almega Bible tools Library CD4, Version 3）</span>
                </p>

                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">二、最主要的字 <span style={heb}>חָטָא</span></p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span style={heb}>חָטָא</span>是表示「罪」的主要字，字根的基本意義是不中的或迷失方向。同字根的字在舊約出現近600次，動詞<span style={heb}>חָטָא</span>共出現237次。它出現在非宗教性上下文的意思，足以提供本字意義的基本概念。士師記二十16：「在眾軍之中有揀選的七百精兵，都是左手便利的，能用機弦甩石打人，毫髮不『差』。」箴言十九2：「腳步急快的，難免『犯罪』。」斯高譯本：「步伐匆忙，難免『失足』。」呂振中譯本：「腳步急迫的，達不到目的。」在聖經中，<span style={heb}>חָטָא</span>這字不只是失誤，而是故意造成，且需要負責任的失誤。這字用以指人的行為對人、對神的關係，其中對神的關係較為常用。<sup>14</sup><span style={cite}>（艾利克森〔Millard J. Erickson〕，《基督教神學》〔Christian Theology〕卷二，頁157-158）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  名詞<span style={heb}>חֵטְא</span>是動詞<span style={heb}>חָטָא</span>的行動，指未射中目標、不服從、在神面前的虧欠、未被神接納。在舊約中共出現35次。在非宗教性的層面上，這名詞指違犯國家的律法，或君主的條例。<sup>15</sup><span style={cite}>（R. Laird Harris等編纂，《舊約神學辭典》，頁311）</span><span style={heb}>חֵטְא</span>的用例如
                </p>

                <PageTag page={43} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  下：
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  傳十4：「柔和能免大『過』。」斯高譯本：「心平氣和能避免大『錯』。」王下十29：「耶羅波安使以色列人陷在罪裡的那『罪』，就是拜伯特利和但的金牛犢。」賽一18：「你們的『罪』雖像硃紅，必變成雪白；雖紅如丹顏，必白如羊毛。」賽五三12：「他也被列在罪犯之中，他卻擔當多人的『罪』。」結廿三49：「你們必擔當拜偶像的『罪』。」<sup>16</sup><span style={cite}>（Almega Bible tools Library CD4, Version 3）</span>
                </p>

                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">三、惡 <span style={heb}>רַע</span></p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  希伯來形容詞、名詞<span style={heb}>רַע</span>（ra）在舊約中共出現662次，這字很少翻譯作「罪」，但與「罪」有密切關係。其意義有品質與道德兩方面，前者可指任何有害或不好的事物，包括腐壞的食物、災害、不幸等。如申七15：「耶和華必使一切的病症離開你，你所知道埃及各樣的『惡』疾，他不加在你身上，只加在一切恨你的人身上。」詩廿三4：「我雖然行過死蔭的幽谷，也不怕遭『害』。」後者包括不道德、不忠於神等。如創卅七2：「約瑟將他哥哥們的『惡』行、報給他們的父親。」創卅九9：「我怎能作這大『惡』，得罪神呢？」<span style={heb}>רַע</span>也用來形容因神審判而來的災禍。如出卅二14：「於是耶和華後悔，不把所說的『禍』降與他的百姓。」<sup>17</sup><span style={cite}>（The Anchor Bible Dictionary, Vol.2, Doubleday, 678。Horst Dietrich Preuss, The Old Testament Theology〔II〕, 176-177）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <span style={heb}>רַע</span>大部分翻譯作「惡」或「禍害」，少數譯為「罪」。如創六5：「耶和華見人在地上『罪惡』很大，終日所思想的盡都是『惡』。」傳八11：「因為斷定『罪』名，不立刻施刑，所以世人滿心作『惡』。」斯高譯本：「因為懲『惡』的定案未有迅速執
                </p>

                <PageTag page={44} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  行，世人因此充滿了行『惡』的傾向。」與人類墮落有關的分別善惡樹所用的『惡』字，也是<span style={heb}>רַע</span>這個字。創二9：「園子當中又有生命樹，和分別善『惡』的樹。」<sup>18</sup><span style={cite}>（Almega Bible tools Library CD4, Version 3）</span>當人違背神的命令，吃了禁果，不僅有了「罪<span style={heb}>חֵטְא</span>」，也進入綿延不斷的「惡<span style={heb}>רַע</span>」之中。
                </p>

                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">四、罪愆和贖愆祭 <span style={heb}>אָשָׁם</span></p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  希伯來名詞<span style={heb}>אָשָׁם</span>（asham）的意義是「罪愆」（如耶五十5）和「贖愆祭」（利五14-19，七1-10等）。「贖愆祭」斯高譯本譯為「贖過祭」。英文欽定本譯為trespass offering 35次，trespass 7次。「罪」的用詞集中於某罪行或個人的失敗，而<span style={heb}>אָשָׁם</span>則特別指由罪引起的關係破裂。利未記五章十四節至六章七節和民數記五章五至十節的條例，清楚指出<span style={heb}>אָשָׁם</span>的這種特質。若某人得罪了鄰舍，他必須作出十足的賠償，如民數記五7：「他要承認所犯的罪，將所『虧負』人的如數賠還，另外加上五分之一。」並要獻上「贖愆祭」（利五6），因為得罪人，也同時得罪神。<sup>19</sup><span style={cite}>（Paul Tournier, Guilt and Grace, 176-177）</span><span style={heb}>אָשָׁם</span>也是賠罪的禮物，如撒上六17：「非利士人獻給耶和華作『賠罪』的金痔瘡像就是這些。」舊約表明將來會有一個人出現，他的性命將是別人的<span style={heb}>אָשָׁם</span>。賽五十三10：「耶和華以他為『贖罪祭』。」<sup>20</sup><span style={cite}>（Paul Tournier, Guilt and Grace, 186-188。Almega Bible tools Library CD4, Version 3）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  新約中並沒有與<span style={heb}>אָשָׁם</span>相等的字詞，但虧欠的觀念仍很重要。各種罪行在主禱文中稱為「債」和「過犯」（太六12、14）。浪子返回父家時，帶著<span style={heb}>אָשָׁם</span>──他已準備作出補償，在家裡當雇工，不當兒子（路十五18-19）。然而父親卻毫無條件的接納了他。在不憐憫人之僕人的比喻中，耶穌指出我們對神的虧欠甚大，遠超過
                </p>

                <PageTag page={45} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  我們能償還的（太十八21-35）；只要口出惡言，我們就「難免」地獄的火（太五21-22）；這債是我們永遠不能付清的（比較太五26；雅五10）。耶穌獻上自己的生命，作為「多人的贖價」（可十45），還清了我們的罪債與虧欠。<sup>21</sup><span style={cite}>（Paul Tournier, Guilt and Grace, 189-192。Ernst Jenni &amp; Claus Westermann, Theological Lexicon of the Old Testament, Vol. 1, 191-195。《證主聖經神學辭典〔下〕》，頁908）</span>
                </p>

                <p className="font-bold text-amber-700 mb-2">小　結</p>
                <p className="text-gray-700 leading-relaxed">
                  在舊約有關罪的字群中看到罪的多面性，然而不管是宗教上或倫理上的過錯，都同樣被稱之為罪，因為神的旨意是不能切割的，那是一個神聖旨意要實行在所有的層面。但追根究底來說，「罪」的意思就是違背神的旨意。「罪」的結果，不僅破壞了神與人、人與人的關係，也導致大地受咒詛與疾病、天災等。<sup>22</sup><span style={cite}>（Horst Dietrich Preuss, The Old Testament Theology〔II〕, 177）</span>
                </p>
              </div>

              <div className="mb-4">
                <PageTag page={46} />
                <span className="font-semibold text-amber-700">貳、希臘字詞</span>

                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">一、ἁμαρτία 的意義</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  關於「罪」，最常見的希臘字詞是<span className="italic">ἁμαρτία</span>（hamartia），<span className="italic">ἁμαρτία</span>的古典意義是the missing of a target or road，即「射不中的」之意，也指心智上的錯誤或道德過失。在新約中這字有時用於指對人有過失，但通常是指對神有冒犯。<sup>23</sup><span style={cite}>（The Interpreter's Dictionary of the Bible〔R-Z〕，371）</span>古特立（Donnald Guthrie）指出，符類福音數次出現的「罪」字（<span className="italic">ἁμαρτία</span>）大多連於認罪（太三6，可一5）或赦罪（有21次）；此字的基本意義是射不中標的；此字在聖經中的意義，皆指得罪神，而不是倫理道德方面的意義。<sup>24</sup><span style={cite}>（Donald Guthrie, New Testament Theology, 187-188。古特立，《古氏新約神學》，頁212）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  《新約希臘文中文辭典》解釋為「罪行本身和它的結果，指對神或人之義路的遠離」。<sup>25</sup><span style={cite}>（王正中主編，《新約希臘文中文辭典》，頁31）</span>查考《原文編號新約字典》：希臘文<span className="italic">ἁμαρτία</span>（hamartia）從字根直譯是un-mark-ing，英文直譯是missing the mark，中文即「失誤目標」。<sup>26</sup><span style={cite}>（封志理編著，《原文編號新約字典》，頁10）</span>因此，這字的意思並無一般華人所以為的作奸犯科那類「罪行」（crime）。
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  在七十士譯本中，希伯來文舊約中表現「罪」的詞根，尤其是<span style={heb}>חֵטְא</span>和<span style={heb}>עָוֹן</span>，大部分被譯為<span className="italic">ἁμαρτάνω</span>（動詞）、<span className="italic">ἁμαρτία</span>（名詞）、<span className="italic">ἁμαρτωλός</span>（形容詞）、<span className="italic">ἁμάρτημα</span>（名詞）。<sup>27</sup><span style={cite}>（The New International Dictionary of New Testament Theology Vol.3, Edited by Colin Brown, Zondervan Corporation, Grand Rapids, Michigan, U.S.A. 1978, 577）</span>動詞<span className="italic">ἁμαρτάνω</span>的
                </p>

                <PageTag page={47} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  原意是失誤、不中標的、失掉、無分、犯錯等。名詞<span className="italic">ἁμαρτία</span>是指行動本身不能達到目標，而<span className="italic">ἁμάρτημα</span>則指這行為的後果。整本新約聖經最常用以指稱罪的就是這個字群，它們出現的次數比其他用字更頻繁，共將近300次。<sup>28</sup><span style={cite}>（艾利克森，《基督教神學》卷二，頁159）</span>
                </p>

                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">二、ἁμαρτία 在新約</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  在新約的作者當中，使徒保羅和約翰最為關注「罪」的問題。<span className="italic">ἁμαρτία</span>在新約聖經中出現173次，其中有64次在保羅著作（羅馬書48次，其他書信14次），25次在希伯來書，17次在約翰著作中。<sup>29</sup><span style={cite}>（The New International Dictionary of New Testament Theology Vol.3, Edited by Colin Brown, Zondervan Corporation, Grand Rapids, Michigan, U.S.A. 1978, 578-579。Leon Morris, New Testament Theology, 57。莫理斯，《認識新約神學》，頁96）</span>保羅將「罪<span className="italic">ἁμαρτία</span>」人格化，有如一轄制的權勢；希伯來書中，「罪」用以指迷惑人、導致毀滅的能力；約翰形容罪是一種
                </p>

                <PageTag page={48} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  狀態或特性。<sup>30</sup><span style={cite}>（王正中主編，《新約希臘文中文辭典》，頁32）</span>在四福音書，<span className="italic">ἁμαρτία</span>的主要意思：一是不信耶穌是基督、神的兒子；二是被捆綁。其次也與受苦難及得不到豐盛生命有關。<sup>31</sup><span style={cite}>（James Hastings, A Dictionary of the Bible, Volume IV, 533）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  保羅使用<span className="italic">ἁμαρτία</span>這個字時，最常用單數式，表明罪不單是我們所干犯的一件惡事，而且是一種轄制我們的勢力。不止一次，他論到一般人是<span className="italic">ἁμαρτία</span>的奴僕（羅六17、20），而且他看我們大家都賣給<span className="italic">ἁμαρτία</span>了。<sup>32</sup><span style={cite}>（Leon Morris, New Testament Theology, 57。莫理斯，《認識新約神學》，頁96）</span>約翰使用<span className="italic">ἁμαρτία</span>這字，也幾乎都用單數，是以此指所有的罪，而非個別的罪。例如約一29：「看哪！神的羔羊，除去世人罪孽（<span className="italic">ἁμαρτία</span>）的。」在約翰的觀念裡，<span className="italic">ἁμαρτία</span>是與神隔離、敵對（約一10，七7），不信（約五24）。<sup>33</sup><span style={cite}>（Donald Guthrie, New Testament Theology, 193-194。古特立，《古氏新約神學》，頁219-221）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <span className="italic">ἁμαρτία</span>在新約聖經中出現173次，英文欽定本譯為sin 172次，譯為sinful 1次。中文和合本譯為罪159次，罪惡7次，其餘譯為「罪孽、罪愆、惡、罪案、罪過」。<span className="italic">ἁμάρτημα</span>在新約聖經中出現4次，英文欽定本譯為sin 4次，中文和合本譯為「罪」4次。
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  <span className="italic">ἁμαρτωλός</span>（hamartolos）在新約聖經中出現47次，英文欽定本譯為sinner 43次，譯為sinful 4次。中文和合本譯為「罪人」37次，其餘譯為「罪、犯罪的、惡、有罪的人、犯罪的人」。<span className="italic">ἁμαρτωλός</span>乃是指一個以罕有方式違背公義、秩序、慣例的人。在符類福音傳統中，稅吏（可二17）、娼妓（路七34）、外邦人（可十四41），都被稱為<span className="italic">ἁμαρτωλός</span>。<sup>34</sup><span style={cite}>（Leonhard Goppet, Thology of the New Testament, 127-128。郭培特，《新約神學》，古樂人譯，頁227-228）</span>根據路十五7-10，悔改的罪人（<span className="italic">ἁμαρτωλός</span>）乃是失而復得的，天上要為他大大歡喜。<sup>35</sup><span style={cite}>（Leonhard Goppet, Thology of the New Testament, 131。郭培特，《新約神學》，古樂人譯，頁232）</span>
                </p>

                <PageTag page={49} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">三、不義 <span className="italic">ἀδικία</span>、不法 <span className="italic">ἀνομία</span>、不虔 <span className="italic">ἀσέβεια</span></p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span className="italic">ἀδικία</span>（adikia）是個範圍比較狹窄的法律用字，形容不義和不公正的行為，大多譯為「不義」，同字根在新約出現68次。<sup>36</sup><span style={cite}>（封志理編著，《原文編號新約字典》，頁10。Almega Bible tools Library CD4, Version 3）</span><span className="italic">δίκη</span>（dike）「公義」，與<span className="italic">ἀδικία</span>相對，原意是指法庭上的公正。因此<span className="italic">ἀδικία</span>是指任何不公義的行為，意思是不能達到公義的標準。<sup>37</sup><span style={cite}>（王正中，《聖經原文字彙中文彙編》，頁15；潘秋松，《解析式新約經文彙編》，頁684）</span>實例如下：
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  羅一18：「神的忿怒，從天上顯明在一切不虔『不義』的人身上，就是那些行『不義』阻擋真理的人。」
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  提後二19：「凡稱呼主名的人，總要離開『不義』。」
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  來八12：「我要寬恕他們的『不義』，不再記念他們的罪愆。」
                </p>
                <p className="text-gray-700 leading-relaxed">
                  約壹一9：「我們若認自己的罪，神是信實的，是公義的，必要赦免我們的罪，洗淨我們一切的『不義』。」
                </p>
                <p className="text-gray-700 leading-relaxed mt-3 mb-3">
                  同字根還有<span className="italic">ἄδικος</span>（adikos）（形容詞）不義的，林前六9：「你們豈不知『不義的』人不能承受神的國嗎？」<span className="italic">ἀδικέω</span>（adikeo）（動詞）行不義，西三25：「那『行不義』的，必受不義的報應，主並不偏待人。」<sup>38</sup><span style={cite}>（艾利克森，《基督教神學》卷二，頁161）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  相關的字群<span className="italic">ἀνομία</span>（anomia）（名詞）、<span className="italic">ἄνομος</span>（anomos）（形容詞）、<span className="italic">ἀνόμως</span>（anomos）（副詞），是<span className="italic">νόμος</span>（律法）的反面，指目無法紀，中文和合本、呂振中譯本、斯高譯本一致大多譯為「不法」，少數譯為惡、罪惡、不義、罪、過犯、違背律法等；英文欽定本譯為iniquity，unrighteousness，without law，transgressor。同字根在新約出現27次。<sup>39</sup><span style={cite}>（Almega Bible tools Library CD4, Version 3）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  古特立（Donald Guthrie）說明，這字特別指與神敵對，與正直良善對立。在太七22~23中，作惡者與遵行神旨者對立，意思是：任何不遵行神旨者，都於<span className="italic">ἀνομία</span>的犯罪有分。馬太又記耶穌講到末世不法的事（<span className="italic">ἀνομία</span>）增多，許多人的愛心就漸漸冷淡了。這字又與偽善連在一起使用，是對假冒為善的法利賽人和文士說的
                </p>

                <PageTag page={50} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  （太廿三28）。在此，邪惡是一種內在的光景。<sup>41</sup><span style={cite}>（Donald Guthrie, New Testament Theology, 189。古特立，《古氏新約神學》，頁214-215）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  艾利克森（Millard J. Erickson）指出，它們有兩個基本意思：一是指沒有猶太律法的人，也就是外邦人；二是指違犯律法的人，包括猶太人和外邦人。外邦人雖沒有猶太律法，卻有神的律法在心中，而他們經常違背這律法。<span className="italic">ἀνομία</span>（anomia）在符類福音中，只出現於馬太福音的四處經文（七23，十三41，廿三28，廿四12），都是耶穌之言，均指違犯世人共知的普遍律法，所討論的都有關於基督再臨時將要施行的審判。<sup>42</sup><span style={cite}>（艾利克森，《基督教神學》卷二，頁161-162）</span>在書信中使用這字，也常與基督再臨和審判有關，例如帖後二3：「那日子以前，必有離道反教的事，並有那大『罪』人，就是沉淪之子，顯露出來。」帖後二8：「那時這『不法』的人，必顯露出來。主耶穌要用口中的氣滅絕他，用降臨的榮光廢棄他。」
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <span className="italic">ἀσέβεια</span>（asebeia）（名詞）、<span className="italic">ἀσεβέω</span>（asebeo）（動詞）、<span className="italic">ἀσεβής</span>（asebes）（形容詞）英文欽定本譯為ungodly，ungodliness，live ungodly；中文和合本、呂振中譯本大多譯為「不敬虔」，少數譯為「罪、罪惡」，斯高譯本譯為「不虔敬」或「惡」，同字根在新約出現17次。<sup>43</sup><span style={cite}>（王正中，《聖經原文字彙中文彙編》，頁94）</span>這字是<span className="italic">σέβω</span>（sebo）的否定，其意思是「敬拜」或「敬仰」。<span className="italic">ἀσέβεια</span>的意思可說是「不敬拜神」或「目中無神」，這也正是「罪」的本意。<sup>44</sup><span style={cite}>（艾利克森，《基督教神學》卷二，頁160）</span>實例如下：
                </p>
                <p className="text-gray-700 leading-relaxed mt-3 mb-3">
                  提後二16：「但要遠避世俗的虛談，因為這等人必進到更『不敬虔』的地步。」斯高譯本：「這些空談，多使人趨於『不敬』。」
                </p>

                <PageTag page={51} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  多二12：「教訓我們除去『不敬虔』的心，和世俗的情慾。」斯高譯本：「教導我們棄絕『不虔敬』的生活，和世俗的貪慾。」
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  彼後二5：「神也沒有寬容上古的世代，曾叫洪水臨到那『不敬虔』的世代。」斯高譯本：「曾引來洪水淹滅了『惡』人的世界。」<sup>45</sup><span style={cite}>（Almega Bible tools Library CD4, Version 3）</span>
                </p>

                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">四、過犯 <span className="italic">παράπτωμα</span>、違犯 <span className="italic">παράβασις</span></p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  常用來指罪惡或過失的一個字詞是<span className="italic">παράπτωμα</span>（paraptoma），中文和合本、呂振中譯本、斯高譯本一致大多譯為「過犯」，英文欽定本譯為trespass，offence。在新約出現23次。這字常出現在與赦罪有關之時，如可十一25和太六14用複數字，含有脫離標準行為的意思。耶穌在此不僅認為無須再說明人有過犯，更認為一切為過犯而感不安的人，都渴望得著赦罪。<sup>46</sup><span style={cite}>（Donald Guthrie, New Testament Theology, 188。古特立，《古氏新約神學》，頁213）</span>這字的實例如下：
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  太六14：「你們饒恕人的『過犯』，你們的天父也必饒恕你們的過犯。」
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  羅四25：「耶穌被交給人，是為我們的『過犯』；復活，是叫我們稱義。」
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  加六1：「弟兄們！若有人偶然被『過犯』所勝，你們屬靈的人就當用溫柔的心，把他挽回過來。又當自己小心，恐怕也被引誘。」
                </p>
                <p className="text-gray-700 leading-relaxed">
                  弗一7：「我們藉這愛子的血，得蒙救贖，『過犯』得以赦免，乃是照他豐富的恩典。」弗二1：「你們死在『過犯』罪惡之中，他叫你們活過來。」<sup>47</sup>
                </p>

                <PageTag page={52} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  <span className="italic">παράβασις</span>（parabasis）（名詞）、<span className="italic">παραβαίνω</span>（parabaino）（動詞）指侵犯或違反律法，這是典型的罪的表現。中文和合本譯為「犯、過犯、罪、罪過」，呂振中譯本較多譯為「違犯、犯法之事」，斯高譯本較多譯為「違犯、過犯」；英文欽定本譯為transgression，transgress，breaking，同字根在新約出現16次。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  亞當、夏娃吃禁果的事，也用<span className="italic">παράβασις</span>這字來代表，因為他們違反神的命令。如羅五14：「然而從亞當到摩西，死就作了王，連那些不與亞當犯一樣『罪過』的，也在他的權下，亞當乃是那以後要來之人的豫像。」提前二14：「不是亞當被引誘，乃是女人被引誘，陷在『罪』裡。」呂振中譯本：「乃是女人受欺騙，以致『違背命令』。」斯高譯本：「受騙陷於『背命之罪』乃是女人。」<sup>48</sup><span style={cite}>（王正中，《聖經原文字彙中文彙編》，頁588。Almega Bible tools Library CD4, Version 3）</span>其他實例如下：
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  加三19：「律法是為甚麼有的呢？原是為『過犯』添上的。」呂振中譯本：「是為顯明『犯法之事』而增設的。」斯高譯本：「是為顯露『過犯』而設的。」
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  太十五2：「『犯』古人的遺傳。」呂振中譯本、斯高譯本：「違犯」。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  羅二23：「你指著律法誇口，自己倒『犯』律法，玷辱神麼。」呂振中譯本：「違犯」。斯高譯本：「以法律自誇，自己卻因『違反』法律而使天主受侮辱。」
                </p>
                <p className="text-gray-700 leading-relaxed">
                  羅四15：「律法是惹動忿怒的，哪裡沒有律法，那裡就沒有『過犯』。」呂振中譯本：「哪裡沒有律法，那裡就沒有『犯法的事』。」斯高譯本：「法律只能激起天主的義怒，哪裡沒有法律，那裡就沒有『違犯』。」<sup>49</sup><span style={cite}>（王正中，《聖經原文字彙中文彙編》，頁583。Almega Bible tools Library CD4, Version 3）</span>
                </p>
              </div>

              <div className="mb-4">
                <PageTag page={53} />
                <span className="font-semibold text-amber-700">參、中文翻譯</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  在信仰及神學表達上，字的翻譯是很重要的課題。李保羅（本名混源）在《景風》50期至57期連續發表近十篇文章，表達對中文聖經「罪」字的翻譯的見解。主題包括：〈罪乎？非罪也！一對中文聖經「罪」字之商榷〉、〈再論：罪乎？非罪也！〉、〈中文聖經翻譯簡史〉、〈曠野的微音──談中文聖經「罪」字的翻譯〉、〈從中國文化背景論原罪〉、〈中文聖經「罪」字翻譯沿革〉、〈忘本與罪〉、〈關於翻譯中文聖經一封公開信〉、〈從中國「過」字的思想商討中文聖經「過」字的用法〉等。<sup>50</sup><span style={cite}>（《景風》50期至57期）</span>其中所論有不少內容對於使華人明白聖經中的「罪」有很大幫助。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  李氏提到建立「中國人罪的神學」的需要，指出「中國還沒有神學，更沒有罪的神學。」<sup>51</sup><span style={cite}>（李漢源，〈忘本與罪〉，《景風》56期，頁4）</span>這話講於約三十年前，如今仍然是事實。本書盼能在建立「華人罪的神學」這事上有所貢獻。關於具體作法，李氏進一步說到：「中國神學是要用中國文字去直接書寫。寫中國罪的神學首先的工作就是檢討中文『罪』字的意義是否與聖經所說的罪的意義相符。……寫中國罪的神學其次的工作就是將上帝藉著聖經所啟示的信息用中國清晰的文字，透過中國文化的理解去寫。」<sup>52</sup><span style={cite}>（李漢源，〈忘本與罪〉，《景風》56期，頁4）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  這幾十年來，一些「漢語神學」工作者已在這個方向上有不少成果<sup>53</sup><span style={cite}>（例如美國的《海外校園》、《舉目》、《恩福》，香港信義宗神學院的《神學與生活》，道風山的《漢語神學學刊》，溫偉耀、陳劍毅主編的《基督教與中國文化叢書》，都有豐富的「漢語神學」或「中華神學」的成果發表）</span>，但在「罪的神學」這方面仍有待加強及普及。李氏已經下的功夫，是可貴而重要的，本節將作整理介紹；其他學者，如鐘鳴
                </p>

                <PageTag page={54} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">一、李保羅的研究</p>
                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">（一）<span className="italic">ἁμαρτία</span> / sin不是罪</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  李氏強調：「sin不是罪」，因為中文「罪」字大多數是指違犯刑法，而英文的sin與希臘文的<span className="italic">ἁμαρτία</span>（hamartia）則是道德上的過錯，以及拒絕上帝，二者不同。李氏建議按上下文譯為「不仁、犯錯、失足」等。<sup>54</sup><span style={cite}>（李保羅，〈罪乎？非罪也──對中文聖經「罪」字之商榷〉，《景風》50期，頁10-15）</span>否則，中國人看到「罪」字就想到中文「罪」的原義，容易誤解聖經真理。<sup>55</sup><span style={cite}>（李保羅，〈再論：罪乎？非罪也！〉，《景風》51期，頁33）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  李氏歸納聖經中「罪」字的觀念可分三個時期。第一個時期是禁忌性的罪，在舊約聖經利未記到處可見，動物屍體、女人月經、血都是禁忌的物質，觸犯這些物質要被上帝處死。第二個時期是犯上帝律法（即摩西律法）的罪。此時期猶太人的「犯罪」的觀念譯作中文的「犯罪」是名實相符。第三個時期即新約時代，新約聖經中罪的觀念是道德性的，不是法律性的。李氏認為，希臘文<span className="italic">ἁμαρτία</span>（hamartia）及英譯sin皆是道德性的觀念，處在新約時代，用「犯罪」兩字去譯<span className="italic">ἁμαρτία</span>是歧視中國人。<sup>56</sup><span style={cite}>（李漢源，〈曠野的微音──談中文聖經「罪」字的翻譯〉，《景風》54期，頁3-5）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  李氏指出，忘本是真正罪的根源。以賽亞書一2~7及耶利米書二13，都指出以色列人的罪是離棄上帝，忘了他們的本源。離棄是
                </p>

                <PageTag page={55} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  罪，罪的本源是忘本。但罪與忘本不盡相同。忘本是哲學的概念，罪是法律的範疇。<sup>57</sup><span style={cite}>（李漢源，〈忘本與罪〉，《景風》56期，頁1）</span>
                </p>

                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">（二）人從始祖承受原惡與原罰</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  在「從中國文化背景論原罪」一文中，李氏指出，原罪這名詞並不是出自聖經。<sup>58</sup><span style={cite}>（李漢源，〈從中國文化背景論原罪〉，《景風》55期，頁1）</span>所謂原罪（Original sin）乃源自拉丁文peccatum originans，這字是過失的意思，像英文的sin，不是中文的「罪」。<sup>59</sup><span style={cite}>（李漢源，〈從中國文化背景論原罪〉，《景風》55期，頁3）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-1">亞當的「原罪」包括有四種意義：</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  1. 原錯（original fault）：吃禁果的錯；出於思想（不信、懷疑上帝的話）、意志（作錯誤抉擇）、情感（一時的情慾）的錯。<br />
                  2. 原惡（original evil）：掩遮自己，離開上帝的面。這是惡的原始。<br />
                  3. 原罪（original guilt）：吃禁果後躲避上帝；在法律上是一種罪行。<br />
                  4. 原罰（original punishment）：失去原始的義，被上帝咒詛，逐出樂園。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  李氏認為，後代人類所承受的，人在母腹裡就有的，乃是原惡（original evil）與原罰（original punishment），而沒有原錯（original fault）與原罪（original guilt），因還沒有出生不可能實際去犯罪。<sup>60</sup><span style={cite}>（李漢源，〈從中國文化背景論原罪〉，《景風》55期，頁1-3）</span>
                </p>

                <PageTag page={56} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">（三）聖經「罪」字翻譯沿革</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  現今中文聖經的「罪」字是延用了馬禮遜的翻譯，但梁發「勸世良言」的文字風格則有所不同，梁發用「自善自義，不知己過」，「切宜追思己過」，「論人獨知別人之過，不知自己之愆」等中國的適當文詞，來表達聖經中「罪」的思想。馬氏全部聖經1823年出版之後，四人小組重譯、修訂，於1838年完成，將許多「罪」字改作「過」字；1862年又有「委辦本聖經」完成，將有些「sin」譯作「惡」，這些是好的改變。然而1919年完成的和合本聖經卻又將這些「過」、「惡」全部恢復為「罪」。「罪」字的大量使用，使二十世紀彷彿是聖經的「新律法時代」。<sup>61</sup><span style={cite}>（李漢源，〈中文聖經「罪」翻譯沿革〉，《景風》55期，頁7-11）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  1975年出版的現代中文新約聖經，比和合本更嚴重，將「罪、過、惡」一律譯作「罪」，又新製「罪」字的定義是指「任何罪過、過犯、錯失……」，卻完全沒有表達「射不中的」及「失卻上帝」之意。這是很大的偏差。<sup>62</sup><span style={cite}>（李漢源，〈關於翻譯中文聖經一封公開信〉，《景風》56期，頁8-10）</span>
                </p>

                <p className="text-gray-700 leading-relaxed mt-3 mb-1 font-semibold">（四）用「過」字翻譯 <span className="italic">ἁμαρτία</span></p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  在〈從中國「過」字的思想商討中文聖經「過」字的用法〉一文中，李氏認為，與中國「過」字思想相近的字，就是聖經希臘文的<span className="italic">ἁμαρτία</span>，它的本義是missing the mark，是中文的「失諸正鵠」，但在中文聖經裡「<span className="italic">ἁμαρτία</span>」沒有譯作「過」。<sup>63</sup><span style={cite}>（李漢源，〈從中國「過」字的思想商討中文聖經「過」字的用法〉，《景風》57期，頁2）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  綜覽中國典籍，「過」字的思想可以分為三類，其表現可以在下列名詞見到：
                </p>

                <PageTag page={57} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  1. 對於過的本身與認識：心過、口過、深過、小過、微過、大過、罪過、咎過、功過、求過、闕過、志過、文過等。<br />
                  2. 對於過的態度與處置：伐過、除過、長過、攻過、救過、止過、捨過、諫過、不貳過、妄過、禁過、懲過、移過、賞過、益過等。<br />
                  3. 對於過的內心反省：引過、服過、思過、改過、悔過、恥過、補過、反過、省過、謝過。<sup>64</sup><span style={cite}>（李漢源，〈從中國「過」字的思想商討中文聖經「過」字的用法〉，《景風》57期，頁3）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  因此，李氏建議用「過」字取代「罪」字來翻譯<span className="italic">ἁμαρτία</span>或「sin」。
                </p>

                <p className="text-gray-700 leading-relaxed mt-3 mb-1 font-semibold">二、其他學者的研究</p>
                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">（一）鐘鳴旦的看法</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  鐘鳴旦指出，「罪」在中國傳統裡的第一個並最重要的意思是「犯法」，這就等於西方的crime。這意義包括以下幾點：（1）先要有法律、法典或者至少一些命令、誡命，才有所謂的犯法、犯罪。（2）犯罪的程度相當嚴重，罪是在大事情上，像殺人、偷竊、姦淫等。（3）罪人一定要（正式被審判）被處罰；（4）因為是大事，刑罰也相當嚴重（像死刑）。（5）這個刑罰對罪人的家族會有影響。<sup>65</sup><span style={cite}>（鐘鳴旦，〈罪、罪感與中國文化〉，《神學論集》97〔1993〕，頁343）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  但在古籍裡，並非所有的「罪」的用法都那麼嚴重。有「小罪」、「大罪」之別。例如：「長君之惡，其罪小；逢君之惡，其罪大。」（孟子告子下）<sup>66</sup><span style={cite}>（謝冰瑩等編譯，《新譯四書讀本》，頁590）</span>有些罪只等於是錯誤（過、故），例
                </p>

                <PageTag page={58} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  如：「曰：『子聞之也，舍館定，然後求見長者乎？』曰：『克有罪。』」（孟子離婁上）<sup>67</sup><span style={cite}>（謝冰瑩等編譯，《新譯四書讀本》，頁481）</span>佛教傳到中國之後，又給「罪」的概念增添了新的意義，因為把罪跟「業」、「因果報應」、「六道輪迴」等思想聯合起來，主要的改變是有些現世發生的罪不立刻受罰，死後才受罰。佛教的罪概念，一方面保留中國傳統司法的一面；另一方面，把罪的概念擴大了，因為罪也包括失、過、惡等；罪不只是犯了法典，也是犯了佛教的教規和道德規範。現在中國人的罪概念是這兩個傳統的結合，最基本的反應是第一個概念，屬於第二個反應也有。<sup>68</sup><span style={cite}>（鐘鳴旦，〈罪、罪感與中國文化〉，《神學論集》97〔1993〕，頁345-346）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  然而，聽到「我是罪人」，受到中國儒家傳統培育的人很自然就會有消極的反應：「我不是罪人，我沒有犯法，沒有殺人，沒有偷竊，我怎麼會是罪人。」從文化交流的角度來看，這是一個容易瞭解的反應，因為他以自己的思想概念為依據，來解釋早已翻成中文的基督教思想。可能教會要少用「罪」這個詞彙，而多用一些其他形容詞來表達基督教罪概念的原本意思：人跟天的距離拉遠了；人跟上帝之間的關係破裂了。<sup>69</sup><span style={cite}>（鐘鳴旦，〈罪、罪感與中國文化〉，《神學論集》97〔1993〕，頁347）</span>
                </p>

                <p className="text-gray-700 leading-relaxed mt-3 mb-1 font-semibold">（二）謝扶雅的回應<sup>70</sup><span style={cite}>（本節撮要摘自：謝扶雅，〈辨中國語文中的「罪」與「過」兩字〉，《景風》57期，頁6-9）</span></p>
                <p className="text-gray-700 leading-relaxed">
                  謝扶雅認為，「過」（作名詞用）的概念比「罪」的觀念更廣。「過」可以概括「罪」；但凡犯罪者雖然也犯了過錯，卻不單視其為過犯者而已。因為「過」是道德性的字眼，而「罪」是法律範疇內的名詞。中國民族一般對道德的觀念殊為廣泛。它必定包括
                </p>

                <PageTag page={59} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  法律行為在內，而且也能牽涉到宗教思想。殺人、搶劫、竊盜、強姦等，都是刑法上的「罪」，也屬極不道德。反之，許多不道德的行為只稱為「過」，卻不構成法律上的罪名。但某些性好謙抑的中國人，習於「律己以嚴」，對於犯了道德上的「過」，往往自認為「罪」。例如太史公司馬遷在其自傳《史記卷一百三十》中，自劾「余嘗掌其官（按指「史官」），廢明聖盛德不載，廢功臣世家賢大夫之業不述，墮先人所言，罪莫大焉。」<sup>71</sup><span style={cite}>（《太史公自序第七十》。馬持盈註，《史記今註》，頁3357）</span>此屬於「嚴以律己」的美德，正如聖主明君在古代，引一般百姓所犯的「罪」算都是他所犯的。例如商湯頒布上諭：「萬方有罪，罪在朕躬。」（論語‧堯曰第二十）<sup>72</sup><span style={cite}>（謝冰瑩等編譯，《新譯四書讀本》，頁306）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  當太史公那個時候，稱道德曰「禮」，稱律法曰「法」。他分辨了道德與律法之不同，而言：「禮禁未然之前，法施已然之後。法之所為者易見，而禮之所為者難知。」<sup>73</sup><span style={cite}>（《太史公自序第七十》。馬持盈註，《史記今註》，頁3356）</span>太史公認為孔子之作春秋與他自己之作史記，用意同在防範世人道德上的過犯，期望「君君臣臣，父父子子」〈論語顏淵篇，孔子答齊景公問政〉<sup>74</sup><span style={cite}>（謝冰瑩等編譯，《新譯四書讀本》，頁205）</span>。而這便是儒家所主張的中道，中道是「無過無不及」。倘若君不君，臣不臣，父不父，子不子，則皆屬失其中而「過」分，因而違犯道德者名曰「過」，而且凡屬道德上的「過」，往往能做到自己去改，不同於律法上的「罪」，例應由司法上權威加以懲罰。故前者稱「改過」，而後者稱「罰罪」。
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  謝扶雅總結認為，對於英文的sin這個具有希伯來思想的專詞，無論漢譯之為「罪」或「過」皆似未盡恰當。中文裡的「妄
                </p>

                <PageTag page={60} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  字、「迷」字或「迷妄」兩字連用，或者可以與sin字相比擬。耶穌所欲拯救的人，無非是世上所迷失的一群，正如牧羊人要尋回的「亡羊」，也如離家出走流浪四方的浪子。聖經上關於舊譯sin（罪）諸處，可斟酌其上下文譯為「迷失、迷妄，或失落」。
                </p>

                <p className="font-bold text-amber-700 mb-2">小　結</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  聖經用很多字詞描寫「罪」，含義從「不中鵠或目標」，到「破壞關係」，到「不敬虔」、「反叛」。這些形容罪的字詞外表的共同要素是：罪人不能履行神的律法；同時這些字詞的含義均有一個內在的共同特性，就是與聖潔之神隔離，是一種敵對神的狀態。<sup>75</sup><span style={cite}>（艾利克森，《基督教神學》卷二，頁171。楊牧谷主編，《當代神學辭典〔下〕》，頁1073）</span>這些詞彙顯示「罪」歸結有三方面：（1）背離神的狀態或行動──最基本的觀念；（2）不順服或破壞律法；（3）破壞人與人之間的關係。<sup>76</sup><span style={cite}>（《證主聖經神學辭典〔下〕》，頁902）</span>換句話說，「罪」在聖經中特別是指人離開了神，達不到作人應有的標準。正如羅馬書三23所說：「世人都犯了罪，虧缺了神的榮耀。」
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  以中文造字的原意來看，「罪」是由「四」與「非」組成；「非」是音，不是義。「四」原來是古字「罔」，是補魚竹網，藉指「人被網羅」。<sup>77</sup><span style={cite}>（李漢源，〈中文聖經「罪」字翻譯沿革〉，《景風》55期，頁9）</span>中文「罪」字在實際的使用上，幾乎皆與犯法有關，不是聖經中「sin」的意思。中文「罪」字的本意「人被網羅」，也不等於聖經上「sin」的意思。聖經的意思最根本是指「人離開上帝」，並且人被造是為了榮耀神，任何「不能榮耀神」的行為都是罪。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  筆者認為，中譯聖經若能用「罪」字表達「犯法的行為」，用「惡」字表達「動機不好的傾向與行動」，用「過失」表達「非故意的缺失」，用「迷失、失落」表達「與神關係隔斷」、「不榮耀神」，應會更加合適。但在中文裡，罪字有時也當錯誤，過失解，例如：「王曰，此則寡人之罪也。」《孟子‧公孫丑》「墮先人所言，罪莫大焉。」《史記‧卷一百三十》用「罪」字來形容人性，不能完全廢除。解決之道是使用「複詞」。
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  中國字最大的特色之一，是使用「複詞」來表達較細微的差別及更寬廣豐富的內涵。罪、過、惡等字，可彼此相連，也可與不同的字連用，產生不同的意義，而能更貼近原文的意義。天主教的斯高譯本，在這方面用得比較好。例如<span style={heb}>חֵטְא</span>（hatta）主要含意是「過錯、失敗、犯錯誤，迷失方向或失去目標」。中文和合本、呂振中譯本大多譯為「罪」，斯高譯本則按上下文選擇譯為「罪」、「罪惡」或「過犯」。英文的sin與sins，以單詞直譯都是「罪」或「過」；以複詞譯，可用「罪性」或「迷失」來譯sin，用「罪行」或「過錯」來譯sins。這樣的譯法，能使華人讀者的理解更接近原意。
                </p>
              </div>
            </div>

          </div>
        )}
      </div>

    </div>
  );
}
