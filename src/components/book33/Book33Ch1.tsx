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

            <div>
              <h3 className="font-bold text-amber-800 text-lg mb-3">第二節　聖經中的「罪」</h3>

              <PageTag page={61} />
              <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                聖經記載神如何愛人，及人如何犯罪的種種故事。整本聖經66卷，幾乎每一卷都指出人的各種罪。本節無法詳引所有罪的故事與言論，只能引用最根本、最具有代表性的罪來探討。
              </p>
              <p className="text-gray-700 leading-relaxed">
                罪是人離棄神、反對神的行動或狀態。罪與神有必然的關係，如果沒有神，也就沒有罪。<sup>78</sup><span style={cite}>（Edited by Carl Braaten &amp; Robert Jenson, Christian Dogmatics Vol.1, 367）</span>聖經記載的各種罪當中，最基本、最
              </p>

              <PageTag page={62} />
              <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                共通的乃是「離棄神」的罪，除此以外，最多被責備的是「拜偶像」的罪。二者是一體的兩面，因為「離棄神」造成心靈的空虛，且失去可祈求、倚靠的對象，乃用「拜偶像」來代替。<sup>79</sup><span style={cite}>（Edited by Carl Braaten &amp; Robert Jenson, Christian Dogmatics Vol.1, 368）</span>偶像本身是虛無的，但其背後隱藏著神的頭號對敵魔鬼撒但。因此，「拜偶像」乃是「屬靈的淫亂」，是將自己出賣給「別神」的行為。而以追求名聲物慾取代上帝的地位，則是無形的拜偶像。<sup>80</sup><span style={cite}>（李錦綸，《塑成肉身救贖源──獻給中國的教會神學》，頁52-53）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                人先有屬靈的淫亂，而後有肉體的淫亂，這是聖經中記載篇幅僅次於「離棄神、拜偶像」的罪。屬靈的淫亂帶來肉體的淫亂，而後又從這「淫亂」產生所有其他的罪。這事實正如中國俗話所說的：「萬惡淫為首。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                罪是反對神及神的意志，罪不是來自神。人乃是運用他的自由意志選擇離棄神、聽信魔鬼撒但。<sup>81</sup><span style={cite}>（Edited by Carl Braaten &amp; Robert Jenson, Christian Dogmatics Vol.1, 369, 385）</span>這同時，有「貪婪、自私、驕傲」的罪在他心裡面產生。「貪婪、自私、驕傲」在華人看，僅是道德上的缺點或個性上的弱點，而不是罪，然而，事實上這些都是伴隨著「離棄神」的罪而存在的。<sup>82</sup><span style={cite}>（范學德，〈驕傲，一個基督教的詮釋〉，《恩福》第四卷第三期總12，頁11）</span>「離棄神」怎樣成為其他罪的根源，「貪婪、自私、驕傲」也怎樣成為其他罪的先鋒。
              </p>

              <div className="mb-4">
                <span className="font-semibold text-amber-700 mt-3 block">壹、舊約</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">一、始祖犯罪</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  伊甸園的故事是人類始祖亞當、夏娃犯罪的故事，也是人類第一次犯罪的故事。伊甸園中始祖偷吃禁果的故事，把人類背叛神的
                </p>

                <PageTag page={63} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  經過描寫得淋漓盡致，但沒有使用希伯來文<span style={heb}>חָטָא</span>或其他有關「罪」的字詞。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  學者對這故事的性質有不同的見解。有人認為這是千真萬確的歷史事實；有人相信它曾在歷史上發生過，但只是象徵式的敘述；又有人認為它是虛構的，或僅是寓意性的故事，用來解釋人類心裡罪惡存在的問題。<sup>83</sup><span style={cite}>（Ross, Creation and Blessing, pp.50~54；布魯斯‧米爾恩，《認識基督教教義》，頁155-157）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  在神學上，對罪的來源，概念之一是認為人乃從獸進化而來，人擁有獸性附帶而來的衝動，此衝動即罪的來源。因為人仍在繼續進化，這些衝動會漸漸減退，人的罪性也會減輕。這種罪觀在十九世紀末和二十世紀初特別流行，其原因除了聖經批判研究興起，造成對聖經權威的質疑外，最主要就是生物學進化論大行其道。自1859年達爾文的《物種起源》（Origin of Species）一書出版後，相信此說的人遍及生物學以外的其他領域，例如：宗教發展的研究，認為世上各種宗教乃是長期發展的產物，希伯來宗教亦是進化而來的，創世記所記人類的受造與墮落乃是虛構的。<sup>84</sup><span style={cite}>（艾利克森，《基督教神學》卷二，郭俊豪等譯，頁179-180）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  本書第二章第一節將會進一步說明，進化論只是一種「理論」，聖經的啟示與解釋不必迎合進化論。事實上，隨著文明的發達，人的罪性不僅沒有減輕，反而更加明顯。並且，新約福音書及書信的作者都肯定亞當、夏娃的事曾在歷史上發生過，因此耶穌基督和他的工作就是要解決始祖犯罪墮落所帶來的後果。保羅在羅馬書五章12節亦強調，罪（<span className="italic">ἁμαρτία</span>）與死亡是從始祖亞當、夏娃進入了世界。<sup>85</sup><span style={cite}>（富偉勳，《認識聖經神學》，頁122）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mt-3">
                  蛇（也就是魔鬼撒但，見啟示錄十二9）向女人提出第一個問
                </p>

                <PageTag page={64} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  題：「神豈是真說，不許你們吃園中所有樹上的果子嗎？」（創三1）撒但試圖混淆神的話，使人懷疑神的慈愛。牠接著說：「你們不一定死」（創三4），直接向神的權威挑戰，誣指神故意說謊。又說：「因為神知道，你吃的日子眼睛就明亮了，你們便如神能知道善惡。」（創三5）在此，蛇誣指神的動機是自私的，神並不是慈愛和值得信賴的。試探就是：撒但向人暗示，人不能信靠神的話語為人類絕對的權威，和真理的源頭。<sup>86</sup><span style={cite}>（Ross, Creation and Blessing, 135）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  亞當和夏娃按著神的形像被造，是美好但不老練。撒但引誘夏娃和亞當，使他們首先懷疑神，繼而背叛神。撒但引導夏娃去想：分別善惡樹的果子多麼好，既可做食物，又能使人有智慧。犯罪的傾向開始時，是源自某種具吸引力和美好的東西，或者某個合理而目標正確的行動。<sup>87</sup><span style={cite}>（John Calvin, Genesis, 150-151）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  最後，亞當、夏娃在神和蛇的相反意見中擔當仲裁者，把自己提升至比神更高的位置上，背叛了神。最原始的罪，為人啟示了後來各種罪的本質。罪包含人類拒絕接受神所賜予的本位──即位於創造主和較低的受造物之間。亞當和夏娃因著這個歷史行動成了罪人，導致與神、與人、與自己、並與天地萬物疏離。<sup>88</sup><span style={cite}>（《證主聖經神學辭典〔下〕》，頁902）</span>始祖的墮落乃是因為他們想要像神，不滿足於人的本質，想要擁有神的特性；他們渴望追求一個不屬於自己的寶座，反而喪失了已經擁有的特權。<sup>89</sup><span style={cite}>（富偉勳，《認識聖經神學》，頁124）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  整件事，撒但是試探者，但亞當、夏娃要為自己的決定承擔責任。在新約聖經看到，撒但不僅是誘惑者（帖前三5），牠也是
                </p>

                <PageTag page={65} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  欺哄者（徒五3）、阻擋者（帖前二28）、吞吃者（彼前五8）、掌死權者（來二14），牠擁有萬國榮華（路四5~6），並能裝作光明的天使（林後十一14）。若講「惡」進入美好世界的原因，則撒但與亞當、夏娃乃是共犯。神所造的原來都好，但他們使自己成為邪惡。<sup>90</sup><span style={cite}>（Carl Braaten &amp; Robert Jenson, Christian Dogmatics Vol.1, 372）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  神宣告，蛇與女人的後裔彼此為仇（創三15），預示基督與撒但爭鬥。新約聖經形容神將撒但踐踏在基督腳下〈羅十六20〉，為這段經文作了最簡短的支持。<sup>91</sup><span style={cite}>（富偉勳，《認識聖經神學》，頁125-126）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  神施在夏娃身上的審判引進了痛苦（創三16），而痛苦正是墮落世界的普遍現象。人的生命不但充滿痛苦，甚至連人類最親密的夫妻關係也受到損害。情慾和爭權奪利成為人類墮落後的本性。神對男人的審判範圍最為廣泛（創三17~24），臨到地的咒詛其實是臨到亞當的身上。以前可以隨意取各種果子吃，現在要汗流滿面才得糊口。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  人喪失了在樂園中居住的權利。真正的生存是，活在與神相交的關係中。當這關係因人的背逆而被斷絕時，死亡的懲罰已被執行了。亞當、夏娃的靈性已經死亡。死亡不是消滅，而是隔絕。由於罪，他們與神隔絕了。<sup>92</sup><span style={cite}>（Abraham Kuyper, The Work of the Holy Spirit, Translated by Henri De Vries, 280）</span>並且，亞當的後裔都不能避免肉身最後的死亡，也就是靈魂離開肉體。<sup>93</sup><span style={cite}>（富偉勳，《認識聖經神學》，頁127）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  潘霍華（Bonhoeffer）在《試探》（Temptation）這本書中指出，從伊甸園所發生的可學到三件事：（1）試探者出現在無罪之處。試探者的確只出現在無罪之處，因為如果那裡本來就有罪存
                </p>

                <PageTag page={66} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  在，試探者早就已經得著牠的掌控權。（2）試探者的聲音來自樂園中的蛇──你想像不到之處，試探者的聲音不會只來自地獄。（3）試探者會不斷扭曲神的話，使人面臨死亡深淵。在試探中，人唯一的倚靠是神的話。但亞當失敗了，他沒有在關鍵時刻堅信神的話，全人類也因此一起沉淪。<sup>94</sup><span style={cite}>（Bonhoeffer, Temptation, 15-16）</span>
                </p>

                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">二、兩顆樹的意義</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  起初，上帝按著祂自己的形像造人，這形像包括人有別於其他生物的各種能力、特性，但在上帝的裡面有二種特殊的能力、特性，沒有在造人的時候完全給人，而是將之分別放在分別善惡樹與生命樹的果子裡，為的是發展神與人之間愛的關係。<sup>95</sup><span style={cite}>（潘能伯格認為，在人的原點，人被交託的天命—上帝形像，是一種有待發展的使命。參見潘能伯格，〈人的天命〉，《道風基督教文化評論》廿一期，頁83-89）</span>分別善惡果標示了「神是造物主宰」與「人是受託管家」二者之間的基本差異<sup>96</sup><span style={cite}>（潘能伯格，〈人的天命〉，《道風基督教文化評論》廿一期，頁91）</span>，生命果表明了「神賜恩典生命」與「人領受恩典生命」的永恆關係。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  吃分別善惡果會死的原因，主要是關乎神的主權。<sup>97</sup><span style={cite}>（彭巴頓，《舊約神學》，頁283）</span>擅自吃上帝禁止的果子，代表了對上帝權柄的挑戰，是僭越的行動，形同宣告上帝的權柄無效，自己想要成為上帝。<sup>98</sup><span style={cite}>（李錦綸，《塑成肉身救贖源──獻給中國的教會神學》，頁57）</span>聖經中有些實例有助於了解此事。例如，在波提法家作家宰的約瑟，如果侵犯他主人的妻子，雖然那女人本身並沒有毒，但結果即令不被判死刑或下獄，至少也會被趕出門（創世記卅九1-9）。因為波提乏惟獨留下妻子未交給約瑟，表明約瑟只是管家不是主人。又例如當納的十分之一，
                </p>

                <PageTag page={67} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  神稱之為「神之物」，也代表神的主權，人因為不尊重神的主權，必不蒙賜福，反遭咒詛。<sup>99</sup><span style={cite}>（瑪拉基書三章8-9節說：「人豈可奪神之物呢？你們竟奪取我的供物……就是你們通國的人都奪取我的供物，咒詛就臨到你們。」和合本聖經中，「的供物」三個字旁邊有小點，表示這三個字原來沒有。神的意思是，人若不將當獻的財物獻上，不僅是奪取了神之物，並且是侵吞了神自己）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「分別善惡」的對立面不是「不知善惡」，乃是「生命」。生命樹所提供的是依靠上帝而得豐富供應，在生命相交中沒有任何阻隔。<sup>100</sup><span style={cite}>（李錦綸，《塑成肉身救贖源──獻給中國的教會神學》，頁57）</span>生命樹所包含的「生命」也有「永生」的特性。創世記三章22節記載：「恐怕他伸手又摘生命樹的果子吃，就永遠活著。」這經文顯示，生命樹所包含的「生命」是使人永遠活著的能力與特性。<sup>101</sup><span style={cite}>（彭巴頓，《舊約神學》，頁283。艾利克森，《基督教神學》卷二，頁222）</span>在伊甸園裡，人吃生命樹的果子才能永遠活著，換句話說，「永生」並不是神造人的時候就賦予人的，而是擺在人的面前，經由人選擇才能得著。<sup>102</sup><span style={cite}>（林道亮，《靈命知多少》，頁8）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  創世記三章22-24節記載，人犯罪之後，上帝將他們趕出伊甸園，不讓他們吃生命樹。有人問：「神為何那麼嚴厲？讓人吃生命樹而能永遠活著，有何不好呢？」我們可反問一個問題：「有誰希望以現有的方式在這世上再多活幾百年？」相信沒有人如此希望！上帝不讓人吃生命果，實在是出於祂的憐憫。因為一個活在罪惡權勢之下的人，活得愈久愈痛苦。除非能解決罪的問題，否則人永遠活著並沒有益處。上帝封閉生命樹的同時，為人開啟了另一條生命之路，就是「羔羊」。羔羊與生命樹同樣能給人生命，差別在於生命樹不能解決罪的問題，但羔羊可以；生命樹是不流血的，但羔羊要流血。人能藉著羔羊的血，塗抹所犯的罪，重新恢復與神的關係，並領受上帝的生命。照上帝的啟示，「若不流血，罪就不得赦免。」（來九22）所以，上帝在舊約時代教導人殺羊羔獻祭以贖罪，並預言神的羔羊救主基督的降臨。時候到了，羔羊基督來到世上，為世人的罪被釘十架，流血捨命，第三天從死裡復活，成就了完全的救恩，並開啟了新約的時代。叫人不必經過獻祭，可以直接到祂的面前來。
                </p>

                <p className="text-gray-700 leading-relaxed mt-3 mb-1 font-semibold">三、罪的發展</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  從該隱的罪中看到，罪的毒害難以駕馭。創四7第一次出現「罪」（<span style={heb}>חַטָּאת</span>）這個字：「你若行得不好，『罪』（<span style={heb}>חַטָּאת</span>）就伏在門前。」對亞當和夏娃來說，罪是外來的；對該隱來說，它好像從心裡生發出來，他必須控制這力量，否則就會被它吞噬。<sup>103</sup><span style={cite}>（Abraham Kuyper, The Work of the Holy Spirit, 263-265）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  該隱犯罪後，不但沒有表示罪疚或痛悔，他更拒絕承認責任，拒絕悔改，並投訴神刑罰過重（創四5-14）。「刑罰」原文<span style={heb}>עָוֹן</span>（awon），這字專門用來描述人對上主所犯的罪過，有時也用來描述對「罪行」的「懲罰」。該隱的犯罪和執迷，預示了聖經其後所記載人類的犯罪歷史。<sup>104</sup><span style={cite}>（Robert S. Candlish, Studies in Genesis, 97-104）</span>有一件事成為世人生命中的事實：「罪由我而出，罪也成為我的對敵。」<sup>105</sup><span style={cite}>（Carl Braaten &amp; Robert Jenson Ed., Christian Dogmatics Vol.1, 367）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  創世記四至十一章勾劃了罪的發展，人的罪變得傲慢的故意。拉麥對他兩個妻子說：「壯年人傷我，我把他殺了；少年人損我，我把他害了。若殺該隱，遠報七倍；殺拉麥，必遠報七十七倍。」（創四23-24）最後，罪擴散至整個世界，甚至人心每個意念無時無刻不是罪惡。如創六5所記：「耶和華見人在地上『罪惡』
                </p>

                <PageTag page={68} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  （<span style={heb}>רַע</span>）很大，終日所思想的盡都是『惡』（<span style={heb}>רַע</span>）。」結果耶和華用洪水潔淨了這個罪惡的世界。洪水之後，表面上是重新開始，人的內心卻仍在罪惡之中，正如創八21所說：「人從小時心裡懷著『惡』（<span style={heb}>רַע</span>）念。」創世記十二至五十章說明罪甚至折磨神的子民，因為立約家族的成員也彼此操縱、出賣、撒謊和欺騙。從罪惡（evil）的實在性（reality）、連續性（continuity）、負面性（negativity），能清楚看到人墮落的事實。<sup>106</sup><span style={cite}>（Carl Braaten &amp; Robert Jenson Ed., Christian Dogmatics Vol.1, 386）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  出埃及記說明罪是違背耶和華的律法，律法列明什麼是罪，把罪顯明出來。雖然摩西律法強調外在的罪，但某些律法，如以色列人要愛神，不可拜偶像，也顯出罪的內在性。<span style={heb}>עָוֹן</span>（awon）專門用來描述人對上主所犯的罪，在十誡中，上帝強調：「恨我的，我必追討他的『罪』（<span style={heb}>עָוֹן</span>，iniquity），自父及子直到三、四代。」（出二十5）
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  列王時代拜偶像特別嚴重：「耶羅波安使以色列人陷在罪裡的那『罪』（<span style={heb}>חַטָּאת</span>），就是拜伯特利和但的金牛犢。」（王下十29）先知提出悔改的呼籲：「你們的『罪』（<span style={heb}>חַטָּא</span>）雖像硃紅，必變成雪白；雖紅如丹顏，必白如羊毛。」（賽一18）「你們委擔當拜偶像的『罪』（<span style={heb}>חַטָּא</span>）。」（結廿三49）也預告救贖的恩典：「他也被列在罪犯之中，他卻擔當多人的『罪』（<span style={heb}>חַטָּא</span>）。」（賽五三12）
                </p>
                <p className="text-gray-700 leading-relaxed">
                  從士師記到列王紀，以色列人離棄那帶領他們離開埃及、並與他們立約的耶和華。他們跟從和敬拜周圍列國諸神（士二10-13）。有些同時事奉神和諸巴力，這些王可能稱之為外交策略；眾先知卻稱之為淫亂不貞。以色列的歷史說明了執迷不悔怎樣令人更深地犯罪。神降災──饑荒、旱災、疫病、戰爭、其他咒詛，催促
                </p>

                <PageTag page={69} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  以色列悔改，但她並沒有回轉。<sup>107</sup><span style={cite}>（《證主聖經神學辭典〔下〕》，頁903-904）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  先知書中充滿了神對祂所創造之人的感情。自從創造人類以來，神就像一位父親，天天擔心那在外流浪的孩子。舊約中的每一重要事件，都描述神能感受到祂子民的痛苦。所以先知以賽亞說：「他們在一切苦難中，祂也同受苦難。」（賽六三9）耶利米書、何西阿書、以賽亞書中，都充滿了這位傷心之神的呼聲：「耶和華說，以法蓮是我的愛子嗎？是可喜悅的孩子嗎？我每逢責備他，仍深顧念他，所以我的心腸戀慕他，我必要憐憫他。」（耶卅一20）「我許久閉口不言，靜默不語，現在我要喊叫像產難的婦人，我要急氣而喘哮。」（賽四二14）最後，神與祂的子民一同流亡、一同被擄、一同進火坑，甚至一同進墳墓。<sup>108</sup><span style={cite}>（保羅‧班德&amp;楊腓力，《神的形像》，頁266-267）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  以賽亞書五十三章形容神僕之死，真是捕捉到神痛之情。「他受鞭打，從活人之地被剪除，是因我百姓的『罪過』（<span style={heb}>פֶּשַׁע</span>/pesha）。」（賽五三8）<span style={heb}>פֶּשַׁע</span>在此指百姓對上帝的背叛，但上帝以捨命贖罪來對待百姓的背叛。以賽亞表明將會有一人出現，他的性命是別人的贖罪祭：「耶和華以他為『贖罪祭』（<span style={heb}>אָשָׁם</span>）。」（賽五三10）這些經文都是對基督的預言。因為道成了肉身，以致有進一步的痛。<sup>109</sup><span style={cite}>（保羅‧班德&amp;楊腓力，《神的形像》，頁270-271）</span>
                </p>
              </div>

              <div className="mb-4">
                <span className="font-semibold text-amber-700 block">貳、新約</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">一、耶穌的工作</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  福音書的作者，基本上繼承了猶太先知對罪的看法，「罪
                </p>

                <PageTag page={71} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  （<span className="italic">ἁμαρτία</span>）從根本上講是人對上帝的背叛。<sup>110</sup><span style={cite}>（劉宗坤，〈聖經中的「罪」觀念與人的生存的理解〉，《維真學刊》六卷1998第一期，頁54）</span>耶穌用兩種方法，繼續深化人對罪之觀念的工作：（1）指出神所要求的，不僅有外在規範，更主要的是內在思念的純潔。人因憎恨、藐視和情慾而犯罪，縱然未把慾念化作行動；而人若以錯誤動機行正確的事，也是犯罪。「你們也是如此，在人前，外面顯出公義來，裡面卻裝滿了假善和不法（<span className="italic">ἀνομία</span>/anomia）的事」（太廿三28）。（2）嚴厲地譴責罪，顯示罪的問題不能忽視。罪人必須面對罪，否則就要死在自己的罪（<span className="italic">ἁμαρτία</span>）中（約八24）。罪由心生，壞樹結壞果子，褻瀆的話從充滿惡念的心裡出來。並且，「所有犯罪（<span className="italic">ἁμαρτία</span>）的，就是罪（<span className="italic">ἁμαρτία</span>）的奴僕」（約八34）。<sup>111</sup><span style={cite}>（《證主聖經神學辭典〔下〕》，頁904-905）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  神對人的內心有什麼看法呢？馬可福音七章21~22節提到13項人的惡：「因為從裡面，就是從人心裡，發出惡念、苟合、偷盜、兇殺、姦淫、貪婪、邪惡、詭詐、淫蕩、嫉妒、謗瀆、驕傲、狂妄。」不是每個人都犯了這裡面所有的罪，但每個人的心裡都可以找得到罪的種子。當我們在特定的環境下受到刺激時，人就有犯這些罪的潛能。因此神非常強調一個事實──「世人都犯了罪（<span className="italic">ἁμαρτάνω</span>），虧缺了神的榮耀。」（羅三23）<sup>112</sup><span style={cite}>（G. C. Berkouwer, Sin, Translated by Philip C. Holtrop, 110-111）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  然而，基督來不單是要解釋罪，還要饒恕和除掉罪。祂要把百姓從他們的罪惡中拯救出來（太一21；路一77）。祂是罪人的朋友（太九9-13；路十五1-2），祂饒恕各種罪，並把那些承受罪之惡果的人釋放出來（可二1-12；路七36-50）。祂在十字架上，為使罪得赦而流出寶血。十字架同時是罪的頂峰和罪的解決（徒二23-24）。祂背負十字架以完成救贖，顯出罪的深重。祂從死裡復活，
                </p>

                <PageTag page={72} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  表明罪已經被擊敗。<sup>113</sup><span style={cite}>（G. C. Berkouwer, Sin, Translated by Philip C. Holtrop, 187-188）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  耶穌最關心的，與其說是罪（<span className="italic">ἁμαρτία</span>/hamartia），不如說是罪人（<span className="italic">ἁμαρτωλός</span>/hamartolos），耶穌被稱為是「稅吏和罪人的朋友」（太九10）。耶穌把人的罪與神的愛放在同等重要的位置上。他既看到了人的罪性，也看到了超越這種罪性的希望。耶穌的受難和復活使人得救的希望變成了現實，在此之後，人的罪性和神的愛被十字架事件緊緊地聯繫在一起。<sup>114</sup><span style={cite}>（劉宗坤，〈見前〉，頁54）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  有兩處經文深切的暗示，基督乃是完全地與受苦的人認同，祂在人裡面忍受他們的疼痛。馬太福音廿五35~40說明，他與那些饑餓的、生病的、赤身的、被監禁的人在一起，所以這些事做在他們身上，就是做在基督身上。主耶穌向逼迫教會的掃羅顯現，並問他：「你為什麼逼迫我？」（徒九4）那些迫害基督徒的鞭子、石頭，都落在耶穌的身上。我們不該還要問：「神為什麼讓他受罪呢？」而當問：「神為什麼讓自己受罪呢？」<sup>115</sup><span style={cite}>（保羅‧班德&amp;楊腓力，《神的形像》，頁273-274）</span>
                </p>

                <p className="text-gray-700 leading-relaxed mt-3 mb-1 font-semibold">二、使徒保羅的論述</p>
                <p className="text-gray-700 leading-relaxed">
                  保羅有關罪的討論，主要記載於羅馬書一至八章。上帝因人類得罪祂和彼此得罪而憤怒（羅一18-32）：「神的忿怒，從天上顯明在一切不虔『不義』（<span className="italic">ἀδικία</span>/adikia）的人身上，就是那些行『不義』（<span className="italic">ἀδικία</span>）阻擋真理的人。」（羅一18）不信是罪的根源。人類不榮耀神，也不感謝神，導致他們拜偶像，變得虛妄和墮落（羅一21-25）。<sup>116</sup><span style={cite}>（斯托得，《羅馬書》，頁95）</span>
                </p>

                <PageTag page={73} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  當人遠離上帝，首先犯下兩個罪，記載在羅馬書一21：「因為他們雖然知道上帝，卻不當作上帝榮耀祂，也不感謝祂。他們的思念變為虛妄，無知的心就昏暗了。」這兩個罪，第一是拒絕榮耀上帝，第二是不知感恩。即聖經所說的，不當作上帝榮耀祂，也不感謝祂！接著產生的結果是虛空與盲目，如21節下半所說：「思念變為虛妄，無知的心就昏暗了。」
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  保羅下結論，每個人都是罪人，在上帝面前啞口無言：「所以凡有血氣的沒有一個，因行律法能在上帝面前稱義，因為律法本是叫人知罪（<span className="italic">ἁμαρτία</span>）。」（羅三20）亞當和夏娃犯罪不只影響自己，因他們是人類的祖先，他們犯罪代表了全人類。自那時起，罪、罪性和罪的後果損害所有人。每一亞當子孫，都進入這個以罪和死亡為標記的族類中（羅五12-21）。<sup>118</sup><span style={cite}>（巴特，《羅馬書釋義》，頁218-229。馬丁路德，《羅馬書講義》，頁191-200）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  保羅斷言罪（<span className="italic">ἁμαρτία</span>）是一種內在的力量，而不只是行為。任何未得到基督釋放的人，都受到罪的轄制，導致死亡（羅六5-23）。<sup>119</sup><span style={cite}>（馬丁路德，《羅馬書講義》，頁201）</span>從罪中得著拯救，乃是因信耶穌而得稱為義；在基督耶穌裡的人，不再受到譴責了（羅三21至四25，八1-4）。保羅弔詭地說，律法會引發罪：「因為律法是惹動忿怒的，哪裡沒有律法，那裡就沒有『過犯』（<span className="italic">παράβασις</span>/parabasis）。」（羅四15）「我們屬肉體的時候，那因律法而生的『惡』（<span className="italic">ἁμαρτία</span>）慾，就在我們肢體中發動，以致結成死亡的果子。」（羅七5）「叫我死的乃是罪（<span className="italic">ἁμαρτία</span>）。但罪藉著那良善的叫我死，就顯出真是罪（<span className="italic">ἁμαρτία</span>），叫罪因著誡命更顯出是惡（<span className="italic">ἁμαρτωλός</span>）極了。」（羅七13）這種乖僻的反應提醒我們，犯
                </p>

                <PageTag page={74} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  罪的根是罪性和背叛神（羅七7-25）。<sup>120</sup><span style={cite}>（C. E. B. Cranfield, On Romans and other New Testament Essays, 104-106,118。馬歇爾，《新約神學》，潘秋松等譯，頁295-296）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  保羅‧班德與楊腓力指出，十字架表現了神自己在受苦，祂藉著踏入歷史的層面，與人聯合，讓我們看見祂的受辱、赤裸與痛苦。全能的神只是讓祂兒子為我們受苦嗎？還是祂在基督裡替我們受苦？在我們無法全懂的情況下，神的確自己來到地上死了。「這就是神在基督裡叫世人與自己和好，不將他們的過犯（<span className="italic">παράπτωμα</span>/paraptoma）歸到他們身上，並且將這和好的道理託付了我們。」（林後五19）「你們死在『過犯』（<span className="italic">παράπτωμα</span>）罪惡之中，他叫你們活過來。」（弗二1）<sup>121</sup><span style={cite}>（保羅‧班德&amp;楊腓力，《神的形像》，頁269-270）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  保羅在書信中如此作見證：「我肉體之中沒有良善，因為立志為善由得我，只是行出來由不得我。故此，我所願意的善，我反不做；我所不願意的惡，我倒去做。」（羅七18-19）這是一個必須正視的事實，身為亞當的子孫，我們有分別善惡的能力，甚至也願意行善，但我們沒有行善的能力。因行善的能力在生命樹裡面，也在基督裡，而不在分別善惡樹裡面。
                </p>

                <p className="text-gray-700 leading-relaxed mt-3 mb-1 font-semibold">三、其他使徒的論述</p>
                <p className="text-gray-700 leading-relaxed">
                  其他使徒的書信指出，罪從私慾開始（雅一14，四1-4），而當罪完全長成了，就導向死亡（雅一15）。罪透過不斷重複而取得力量；罪就透過人重犯它，而成為人的習慣、惡癖，最終成為人性格的一部分。人若仿效別人的罪，惡習就會變得制度化，整個社會都會籠罩在欺詐與欺壓之中。這樣，個人的罪會彼此影響，所以與世俗為友，就是與神為敵（雅四4-6）。<sup>122</sup><span style={cite}>（《證主聖經神學辭典〔下〕》，頁905）</span>
                </p>

                <PageTag page={75} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  神對罪人的審判，古代與今世代的標準是一樣的，就是敬虔與不敬虔之別，也就是敬拜真神與不敬拜真神之別，只是方法不同（以前用洪水，今世代用火）：「神也沒有寬容上古的世代，曾叫洪水臨到那不敬虔（<span className="italic">ἀσεβής</span>/asebes）的世代，卻保護了傳義道的挪亞一家八口。」（彼後二5）「但現在的天地，還是憑著那命存留，直留到不敬虔（<span className="italic">ἀσέβεια</span>）之人受審判遠沉淪的日子，用火焚燒。」（彼後三7）「要在眾人身上行審判，證實那一切不敬虔的人，所妄行一切不敬虔（<span className="italic">ἀσέβεια</span>/asebeia）的事，又證實不敬虔（<span className="italic">ἀσεβής</span>）之罪人所說頂撞他的剛愎話。」（猶15）
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  啟示錄更清楚描繪了罪的結局。有一天，神會給罪人判刑（啟二十11-15）；行惡的人會從祂面前被趕出去；魔鬼、牠的同黨、死亡和陰間，都被扔到火湖裡（啟二十10-15）。在火湖裡的人包括：「膽怯的、不信的、可憎的、殺人的、淫亂的、行邪術的、拜偶像的，和一切說謊話的。」（啟廿一8）然後，新天新地會降臨，從此不再受罪困擾（啟廿一至廿二章）。<sup>123</sup><span style={cite}>（G. C. Berkouwer, Sin, Translated by Philip C. Holtrop, 422-423）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  神給人的禮物中最寶貴的是「永恆的生命」，一般人以為這是神造人的時候就已經給的，只因人犯罪才失去「永生」，其實並非如此，從創世記看見，「永生」原是在人之外，人必須經由「吃」，也就是「選擇」，才能得著。生命的原則在罪之上，因此在無罪的新天地裡，生命樹仍然立在那裡，代表基督生命永遠的供應。（啟廿二1-2）神給人生命不是靜態的，而是動態的，在永世裡，藉著基督生命的供應，人要愈來愈像神，這過程沒有停止的一天，是直到永永遠遠的。<sup>124</sup><span style={cite}>（G. C. Berkouwer, Sin, Translated by Philip C. Holtrop, 566-567）</span>
                </p>
              </div>

              <PageTag page={76} />
              <p className="font-bold text-amber-700 mb-2 mt-2">小　結</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在舊約裡面，大體而言罪是指外在行為不能遵循神的要求。<span style={heb}>חָטָא</span>（hatta）這字主要是指客觀的犯錯行為，比較不涉及內在動機。舊約的觀念並沒有完全忽視內在的思想和動機，但這些在新約就變得特別顯著，內在動機與外在行為同樣重要。新約<span className="italic">ἁμαρτία</span>（hamartia）的意義比較有內在思想、動機的成分。<sup>125</sup><span style={cite}>（Carl Braaten &amp; Robert Jenson Ed., Christian Dogmatics Vol.1, 373-374）</span>進一步說，罪不單是錯誤的行為和思想，它更包含罪性：一種潛在的內在傾向，使人產生錯誤的行為和思想。因此，我們不單單因為犯罪而成為罪人；我們犯罪乃由於我們是罪人的緣故。<sup>126</sup><span style={cite}>（艾利克森，《基督教神學》卷二，頁171）</span>考慮中文適當的翻譯，可以說我們裡面先有「罪性」或「迷失」了（先有sin），而後在外面才有「罪行」或「過錯」（後有sins，guilt）。<sup>127</sup><span style={cite}>（Carl Braaten &amp; Robert Jenson Ed., Christian Dogmatics Vol.1, 423）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                總結來說，罪主要有三方面：（1）背離神，（2）違反律法，（3）破壞在律法保護下的各種人與事的關係。罪的本質不是一件事，而是一種對抗的關係。有三個因素使罪的悲劇變得複雜：（1）它充滿整個人，沒有任何層面可以避免，因為罪人的心是腐敗的（詩五十一5；耶十七9；羅八7）。（2）罪惡住在人心裡，而人是滿有神創造的榮耀和神的形像，受委派為神管理世界；人類的思想、計劃和所受的訓練，產生異常的能力，使罪惡變得高深和可怕。（3）罪是驕傲的：它拒絕神和祂的救恩，反而提出虛假的救恩（帖後二2-4）。<sup>128</sup><span style={cite}>（《證主聖經神學辭典〔下〕》，頁906-907）</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                罪是個分離者，罪不僅是人所做不討神喜歡的事，罪是一種阻
              </p>

              <PageTag page={77} />
              <p className="text-gray-700 leading-relaxed mt-2">
                礙，是一種使人癱瘓的毒素，阻止我們長大成人。驕傲、自大、私慾、貪婪，都是毒素，干擾我們與神或與人的關係。罪的結果就是分離：與神、與他人、與自己分離。<sup>129</sup><span style={cite}>（保羅‧班德&amp;楊腓力，《神的形像》，頁71-72）</span>雖然如此，但基督乃是和好的使者，祂消除了我們與神、與他人、與自己之間每天長出來的隔膜。<sup>130</sup><span style={cite}>（保羅‧班德&amp;楊腓力，《神的形像》，頁74）</span>
              </p>
            </div>

          </div>
        )}
      </div>

    </div>
  );
}
