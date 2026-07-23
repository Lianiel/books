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
                <p className="text-gray-700 leading-relaxed mb-1" style={heb}>
                  <span dir="rtl">פשע</span>，<span dir="rtl">עון</span>，<span dir="rtl">חטא</span>
                </p>
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
                <PageTag page={70} />
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

            <div>
              <h3 className="font-bold text-amber-800 text-lg mb-3">第三節　「罪」的神學觀點</h3>
              <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                「罪」的神學觀點，可涵蓋古代教父至現代神學的種種理論。<sup>131</sup><span style={cite}>（以現代神學中的解放神學來說，會認為罪來自經濟鬥爭，罪不是個人性的，而是社會性的。社會問題一不論淪之為惡或罪一乃是權力和財富分配不均的結果，而解決之道就在於除去這些不均和壓迫。然而，前蘇聯雖然達到無階級的社會，但其領袖階層仍有顯著的權力鬥事，甚至使用暴力鎮壓異己。證明權力和財富的重新分配並不能夠消弭「罪」。見Millard J. Erickson, Christian Theology艾利克森，《基督教神學》卷二，郭俊豪等譯，頁192-193）</span>限於篇幅，本節僅整理奧利金（又譯俄利根 Origen Adamantinus，185~254AD）、奧古斯丁（Aurelius Augustinus，354~430AD）、托馬斯阿奎那（Thomas Aquinas，1224/1225~1274）、馬丁路德（Martin Luther，1483~1546）、尼布爾（Reinhold Niebuhr，1892~1971）等五人的神學思想來表達「罪」的神學。他們分別代表古代東方教會教父、西方教會教父、中世紀經院神學、宗教改革更正教神學、近代神學等五個不同的時代及角度。如此可達互補之效，稍窺西方教會有關「罪」的神學觀點之全貌。
              </p>

              <div className="mb-4">
                <span className="font-semibold text-amber-700 block">壹、奧利金（Origen）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  奧利金是古教父亞力山大里亞學派的重要代表。他是基督教系統神學家，他的理論幾乎涉及基督教信仰的所有方面。他推進了亞力山大里亞學派神學的系統化，柏拉圖主義是其神學理論的基本架構，用希臘化思想解釋基督教真理的工作到了奧利金手裡得到相當重大的成就。他的理論成為尼西亞會議之前基督教神學的基本框架。<sup>132</sup><span style={cite}>（趙敦華，《基督教哲學1500年》，頁97。奧利金，《論首要原理》，頁xiii, xviii。章雪富，《基督教的柏拉圖主義》，頁252）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  關於罪，奧利金主要在自由意志論裡討論，包括靈魂的墮落問題，人犯罪的根源，人與神疏離的根本原因，並涉及救恩問題。<sup>133</sup><span style={cite}>（章雪富，《基督教的柏拉圖主義》，頁295）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  《論首要原理》第三卷中，奧利金系統地論述了自由意志問題。分為三個層次：（1）罪是因為自由意志，自由意志是人的內在因素。（2）反駁那些否認聖經裡存在自由意志的觀點。（3）討論自由意志與恩典的關係。<sup>134</sup><span style={cite}>（章雪富，《基督教的柏拉圖主義》，頁297）</span>本項從兩方面探討：一、罪與自由意志，二、自由意志與恩典。
                </p>

                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">一、罪與自由意志</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  奧利金討論理性受造物的善惡行為時指出，有理性的造物或因仿效神而得以進步，或因為疏怠神而導致墮落。多樣性的產生，其原因不在於造物主的意志或審判，乃在於個體的自由意志。<sup>135</sup><span style={cite}>（奧利金，《論首要原理》，頁135）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  奧利金談論靈魂及永恆之火時，根據以賽亞書的話：「行在你們的火焰裡，並你們所點的火把中。」（賽五十11）推論說，每
                </p>

                <PageTag page={78} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  個罪人都是自己點燃自己的火焰，這火所燒的燃料就是我們的罪。靈魂集結了大量的惡行和眾多與其本性相反的罪孽，所以在一定時候，所集結的罪惡就要爆發，懲罰之火就被點燃。罪惡的毒素使靈魂的實體遭受刑罰的痛苦。<sup>136</sup><span style={cite}>（奧利金，《論首要原理》，頁142）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  什麼是自由意志？奧利金說，人有理性可以判斷，在觀察善惡之後，可以有所取捨。決定人們是趨善還是向惡的，就是人裡面的理性特權。人在面臨各種選擇時，理性既可能促使他們去實現良善而正當的願望，也可能推動他們去追逐邪惡的願望。<sup>137</sup><span style={cite}>（章雪富，《基督教的柏拉圖主義》，頁297）</span>奧利金認為人有兩種本性：可見的、有形的本性，和不可見的理性。前者支配身體慾望和活動的動物本能，後者影響靈魂的目的與自由意志。<sup>138</sup><span style={cite}>（趙敦華，《基督教哲學1500年》，頁101）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  奧利金認為人有自由意志決定行善行惡，他說，那些由外界原因所產生的事物雖然不是我們的權限所能控制，但是藉著我們心中的理性，我們能夠決定怎樣利用它們，是正面利用還是反面利用，因為我們的理性具有這樣的職能。<sup>139</sup><span style={cite}>（奧利金，《論首要原理》，頁162）</span>他以對女人的態度為例說明自由意志的作用。他說，女性的美貌和引誘，所引起的性慾衝動是無法阻止的，但意志可以自由地決定依衝動行事，抑或克制自己的慾望。惟其如此，上帝才能根據人的選擇對他進行公正的審判。<sup>140</sup><span style={cite}>（趙敦華，《基督教哲學1500年》，頁102）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  奧利金注意到，人類的自由意志裡，充滿了邪惡的慾望。正因為如此，先知和使徒才不斷地指出蘊含在人的行為中的這種違背神的自由意志，並指出其危險。<sup>141</sup><span style={cite}>（章雪富，《基督教的柏拉圖主義》，頁298）</span>正如先知彌迦的話說：「世人啊，耶和華已指示你何為善，他向你所要的是什麼呢？只要你行公義，
                </p>

                <PageTag page={79} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  好憐憫，存謙卑的心，與你的神同行。」（彌六8）摩西也說：「看哪！我已經將生與死的道路陳明在你面前。」（申三十15）主說這些話，表明我們能夠自由決定是否遵行誡命。若違背了我們能遵守的誡命，就要受到相應的懲罰。<sup>142</sup><span style={cite}>（奧利金，《論首要原理》，頁162-163）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  奧利金認為罪只能由個體造成，並由個體承擔，任何外在的環境和存在狀況都不能承受罪的這種終極性譴責。因此，基督教的原罪觀念不是道德的，而是超道德的，或者說是非道德的。<sup>143</sup><span style={cite}>（章雪富，《基督教的柏拉圖主義》，頁299-300）</span>
                </p>

                <p className="text-gray-700 leading-relaxed mt-3 mb-1 font-semibold">二、自由意志與恩典</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  談到自由意志與恩典，奧利金指出，人的墮落出自於人的自由意志，但人是否能得救則不完全取決於自身的努力。贖罪的問題不是一個道德的問題，而是一個恩典的問題，這是奧利金有別於柏拉圖主義的地方。他的恩典理論分四個部分：（1）恩典是神的賜予；（2）恩典既在聖經的啟示中，也是神賦予人理解聖經的洞察力；（3）恩典在人的得救中顯示出來；（4）三位一體神預備了恩典，人一旦接受，這恩典在信徒之間就可以傳達。<sup>144</sup><span style={cite}>（章雪富，《基督教的柏拉圖主義》，頁305）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  基督論是恩典理論的基石，耶穌基督的恩典就是救贖。基督所有的一切恩典都是為了修復人的靈魂，使罪人重新回到對神的信心中。恩典的授與不僅在於子的提升，也在於他們自身的改善。奧利金在談論恩典時始終為自由意志留有空間。也就是說，救贖確實是神的恩典，但必須有人本身悔改的意志才能完成。<sup>145</sup><span style={cite}>（章雪富，《基督教的柏拉圖主義》，頁306-307）</span>聖經中某些說法似乎否定自由意志，如「我曾使法老的心剛
                </p>

                <PageTag page={80} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  硬。」（出四21）「我要從他們的肉體中除掉石心，賜給他們肉心。」（結十一19）奧利金解釋說，神的同一個運作會產生兩方面的結果，一方面叫人得憐憫，另一方面叫人心變剛硬。但這是在神的同樣善意作為之下的，神本身並沒有惡意的作為，是人裡面的邪惡使他的心變剛硬。就像一塊田地，吃過雨水，可長出菜蔬，也可長出荊棘。所降的雨是一樣的，但因土地本身或所耕作的努力不同，所長出的就不同（來六7~8）。奧利金認為，比喻中的雨水象徵神的恩典和善性，土地及耕作的不同象徵自由意志。結論是，神降下相同的恩典，人的自由意志使它結出不同的果實。所以，法老的剛硬乃是由於他自身的邪惡，但其他有一些埃及人則在神面前變得順服，他們與希伯來人一起走出埃及。<sup>146</sup><span style={cite}>（奧利金，《論首要原理》，頁165-169）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  關於「除掉石心，賜給肉心」，奧利金認為，石心代表人的罪，除掉石心非人力所能為，而賜予肉心則是叫人順從神的律例典章，這都需要神的恩典。因此罪的消除肯定來自神的恩典，而願不願意來到神的面前請求赦免則是出自人的自由意志。凡來到神的面前的，他都應許要除掉他們的罪和惡習，他們來的時候，不應出於勉強，乃要順服這醫治人類疾病的大醫師。神的作為不是專制者的作為，他是一個管理者，他所採用的不是強迫而是鼓勵，他希望服在他面前的都是自願地來到這一道路上，這就是人所要尋求的按照神所願意的方式行事。<sup>147</sup><span style={cite}>（章雪富，《基督教的柏拉圖主義》，頁311-312）</span>
                </p>

                <PageTag page={81} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  在自由意志、罪與恩典的關係上，奧利金的結論是，我們若不認識神，全靠自己的力量，不能使我們進步；若不盡自己的力量來促成自己的善果，徒有神的知識，也不能使我們進步。因此，藉著人的自由意志，尤其是自由地選擇來到神的面前，在神聖知識（Logos）帶領下，罪人蒙受神聖的恩典，得到拯救。<sup>148</sup><span style={cite}>（章雪富，《基督教的柏拉圖主義》，頁312）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  面對罪惡、苦難及審判的教義，如何相信全能的創造者既公義又良善？奧利金的答案是：人類在這個世界所遭受的所有困難，都是這位神為了說服人類自由喜樂地返回祂的懷抱，所設計的一個途徑，為使個體的整體性結合到神的原初性之中。在奧利金的神學體系中，神的懲罰都是愛護性的措施，其目的是盡可能地把靈魂帶回到神那裡，治癒他們的罪。<sup>149</sup><span style={cite}>（章雪富，《基督教的柏拉圖主義》，頁484）</span>
                </p>
              </div>

              <div className="mb-4">
                <span className="font-semibold text-amber-700 block">貳、奧古斯丁（Augustinus）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  西方教會古代教父以奧古斯丁為代表人物，奧古斯丁在神學思想史，有繼往開來的重要地位。他是教父思想的集大成者。從中古到近世，各種教會的運動，都從奧氏的著作得到指導的原則。奧氏於395年被舉為希坡（Hippo）的主教，著有《懺悔錄》、《上帝之城》諸書，主講「原罪論」、「預定論」，並以「恩典論」為根本特徵，力斥伯拉糾派的「自救論」。<sup>150</sup><span style={cite}>（蒂利希，《基督教思想史》，頁163-164。奧古斯丁，《論原罪與恩典》，周偉馳譯，頁xiii-xvii。趙敦華，《基督教哲學1500年》，頁138-139）</span>奧古斯丁不是以理論的方式表達教父時代的思想體系，而是用他的生命、生活，把信仰的情操體驗用文字表達出來。在奧古斯丁的思想中，理的探求並不十分清楚，也不注重去證明客觀的上帝，但其著作展現他豐富的心靈，他走向上帝的一條路是，用全心去愛上帝。在奧古斯丁的思想裡面，神學與哲學不分家，思想與生活也不分家。<sup>151</sup><span style={cite}>（鄔昆如，《中世哲學趣談》，頁57,61）</span>
                </p>

                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">一、惡與罪的表現</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  奧古斯丁最主要的貢獻，是把柏拉圖的體系加上對「惡」的感受，和對「惡」的闡明。無論是從希臘的體系中，或從羅馬的思想中，都找不到「罪惡」的來源，而由於他本身對「自由」的體驗發揮，確認「罪惡」是由人自己所做的，人自己應該負責。<sup>152</sup><span style={cite}>（鄔昆如，《中世哲學趣談》，頁89-90）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  奧古斯丁寫作《懺悔錄》，藉著分析自己靈性生活的每一過
                </p>

                <PageTag page={82} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  程，從幼年到成年各階段的發展情況，表達他對罪惡的體認與看法。但嬰孩時期已不復記憶，是藉觀察而得。<sup>153</sup><span style={cite}>（聖奧古斯丁〔St. Augustine〕，《奧古斯丁懺悔錄》，頁27）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  奧氏發現，嬰孩雖不會言語，但通過手腳的動作嘗試把自己的意思傳達給成人，有時甚至要人屈從其有睿的要求，否則便發怒吵鬧。嬰孩也會妒忌，眼光狠狠盯著一同吃奶的孩子，這正是人的罪惡。嬰兒的純潔不是由於本心的無辜，乃是因為肢體稚弱，作惡力量有限。這樣的觀察與神的話是一致的：「我是在罪孽中生的，我在母腹中就有了罪。」（詩五十7）<sup>154</sup><span style={cite}>（聖奧古斯丁，《奧古斯丁懺悔錄》，頁29）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  當奧氏反省在童年遊戲中的內心狀況時，他發現是虛榮驅動著好勝的心理，不擇手段地要取得勝利；矛盾的是，他無法容忍別人如此待他，當自己被人發現以欺騙手段取勝時，卻不惜以非理性的暴力行為來維護已得的勝利。<sup>155</sup><span style={cite}>（聖奧古斯丁，《奧古斯丁懺悔錄》，頁44）</span>成人與孩童犯罪上的差別，只是「量」而非「質」的問題，因為所牽涉到的不再是老師或家人，乃是君主與官長；不再是彈子或麻雀，而是土地與黃金。人的罪惡從生命發生的那一刻已經開始了，孩童的純真，只是作惡的能力有限
                </p>

                <PageTag page={83} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  而已。<sup>156</sup><span style={cite}>（李錦綸，〈從《懺悔錄》看奧古斯丁對人罪性的觀察〉，《壤野》125期，2003年10月，頁10）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  奧氏說，追究犯罪之因，大都可以歸咎於追求或耆怕喪失所謂「次級的美好」。這些東西的確有其美麗動人之處，但和天上美好一比較，就顯得微不足道。<sup>157</sup><span style={cite}>（聖奧古斯丁，《奧古斯丁懺悔錄》，頁53）</span>奧氏舉例，他跟其他伙伴從鄰舍園子偷竊梨子，只是單純享受偷竊的樂趣。為什麼人會為犯罪而犯罪？因為人的「驕傲」，想模仿上帝的偉大！當人以為可以「自決」什麼是對與錯的時候，就是等同要成為上帝行使祂自決的全能。為了要有更好的模仿效果，必須周圍的人也苟同其作法。一個人不會做的惡事，一群人在一起時就產生動力，狼狽為奸作惡，給予個別犯罪者一種從錯覺而來的「正當性」。<sup>158</sup><span style={cite}>（李錦綸，〈從《懺悔錄》看奧古斯丁對人罪性的觀察〉，《壤野》125期，2003年10月，頁11。聖奧古斯丁，《奧古斯丁懺悔錄》，頁54-58）</span>
                </p>

                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">二、惡與罪的性質和原因</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  在講罪之前，奧古斯丁先講惡，因為惡是更廣的。他說，惡就是背離真正永恆的神聖之事，而轉向變動不居之事。這些事物原本被正確地置於其自身應有的位置，通過其特有之美來完成宇宙的整體；然而，那墮落失調的人性卻偏執甘為奴僕而追逐這些本由神律定為受人支配的東西。<sup>159</sup><span style={cite}>（唐逸，《西方文化與中世紀神哲學思想》，頁43）</span>
                </p>
                <PageTag page={84} />
                <p className="text-gray-700 leading-relaxed">
                  奧氏指出，惡是善的虧缺。因為上帝所造萬物皆善，受造物以整體而言是善，沒有惡。所以惡不是存有，而是「缺乏善」。奧氏的倫理思想與古希臘哲學在基本前提上有相通之處，即認為人生的根本目的在於追求快樂。所不同者，奧氏僅以永恆的幸福為唯一
                </p>

                <PageTag page={85} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  真正的快樂，並且將不顧永福而耽溺於現世的快樂為罪的根源。<sup>160</sup><span style={cite}>（唐逸，《西方文化與中世紀神哲學思想》，頁43-44。聖奧古斯丁，《奧古斯丁懺悔錄》，頁163-164）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  奧氏從三方面闡述惡的性質，第一類為「物理的惡」，指事物的自然屬性造成的損失與傷害，包括生老病死造成的身心靈痛苦。這種惡不是罪。第二類為「認識的惡」，是把錯誤當作正確接受，把正確當作錯誤拒絕，把不確定當作確定固守。這種惡也不是罪，或只是微小的罪，但比物理的惡更接近罪。第三類為「倫理的惡」，是意志的背逆。無視責任，沉溺於有害的東西，這類惡才是真正的罪惡。<sup>161</sup><span style={cite}>（趙敦華，《基督教哲學1500年》，頁167-168）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  奧氏認為，倫理的惡起源於人的自由意志，上帝、靈魂、肉體三者的次序應該是肉體順服靈魂，靈魂順服上帝。倫理的惡在於次序的顛倒。當意志背離不變的和共同的善，追求個人的善，即外在於自身、低於自身的善，他便在犯罪。<sup>162</sup><span style={cite}>（趙敦華，《基督教哲學1500年》，頁168）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  奧氏也認為，一切罪的開始是傲慢，傲慢的開始是人離開上帝。道德敗壞、不服從等都是罪的結果，而罪的原因乃是離開了作為最高的善的上帝。<sup>163</sup><span style={cite}>（蒂利希，《基督教思想史》，頁191）</span>他以「光照說」來譬喻宇宙整體事物的存在階層，「惡」的出現是因為離「善」源太遠，而沒有分受到「善」之故。正如越靠近光源就越明亮，離光源越遠就越昏暗。<sup>164</sup><span style={cite}>（鄔昆如，〈聖奧斯定的罪惡觀〉，《哲學與文化》17卷5期，1990年5月，頁408）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  奧氏對「罪」的解釋相當強調「自由意志」。上帝賦予人自由意志，所以人既可以選擇向善，也可以選擇向惡。<sup>165</sup><span style={cite}>（劉宗坤，〈聖經中的「罪」觀念與人的生存的理解〉，《維真學刊》六卷1998第一期，頁50）</span>既然自由意志
                </p>

                <PageTag page={86} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  有犯罪的可能，上帝為什麼要賜人自由意志呢？因為人本身是一種善，他能使用自由意志達至正確的生活，自由意志是人完成其本性之善的條件。上帝賦予人自由意志並不是為了讓人犯罪，否則上帝不會處罰罪。<sup>166</sup><span style={cite}>（唐逸，《西方文化與中世紀神哲學思想》，頁46）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  上帝造人時曾賦予人自由意志，但自從亞當犯罪之後，人的意志已被罪惡所污染，失去了自由選擇的能力。只有依靠上帝的恩典，才能恢復意志自由，在非奴役的條件下作出善的選擇。<sup>167</sup><span style={cite}>（趙敦華，《基督教哲學1500年》，頁169-170）</span>但罪的行為也屬自由意志，表現在兩方面：一是自由地沒有行正義之事，二是自由地做不義之事。<sup>168</sup><span style={cite}>（鄔昆如，〈聖奧斯定的罪惡觀〉，《哲學與文化》17卷5期，1990年5月，頁408）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  奧氏以羅馬書五12、希伯來書七9~10、詩篇五一5、約伯記十四4~5、約翰福音三5、以弗所書二3等經文證明其原罪論，從他的著作可歸納其內容如下：（1）亞當的罪及對它的懲罰（貪慾）是會遺傳的；（2）嬰兒的靈魂是有罪責的；（3）嬰兒的罪是真實的、最峻的，是通過生育而遺傳的；（4）洗禮是一切人，包括嬰兒，得救的必要手段。<sup>169</sup><span style={cite}>（奧古斯丁，《論原罪與恩典》，周偉馳譯，頁xxxiii-xxxiv）</span>原罪的結果是：有死、無知、邪慾。所謂邪慾，乃指引人背離神聖之事的驅動力，<sup>170</sup><span style={cite}>（唐逸，《西方文化與中世紀神哲學思想》，頁44）</span>也可以說是一種強烈的慾望，這種慾望是一種變態的自愛，與愛神的愛對立。<sup>171</sup><span style={cite}>（趙中輝編著，《英漢神學名詞詞典》，頁624）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  奧氏的著作中，歸納罪惡為五方面：（1）惡是由意志敗壞而來，（2）惡的緣由是偏離至善，選擇次善。（3）惡是妄用自由。（4）罪是自欺的惡行，（5）罪是沒有做該做的事。<sup>172</sup><span style={cite}>（鄔昆如，〈聖奧斯定的罪惡觀〉，《哲學與文化》17卷5期，1990年5月，頁407）</span>
                </p>

                <PageTag page={87} />
                <p className="text-gray-700 leading-relaxed mt-2">
                  在自由意志、罪與恩典的關係上，奧氏強調「內在恩典」，即上帝（聖靈）在人的心中作工，人的每一個善念和善行，都有上帝的工作。上帝說：「你們要轉向我，我就轉向你們。」（亞一3）但詩人也說：「上帝啊！求你使我們回轉。」（詩八7）所以「轉向上帝」這件事本身必須有上帝的恩典。自由意志是需要的，但它不是功德，它與上帝的恩典同時共有。<sup>173</sup><span style={cite}>（奧古斯丁，《論原罪與恩典》，周偉馳譯，頁xlii,314-319）</span>
                </p>
              </div>

              <div className="mb-4">
                <span className="font-semibold text-amber-700 block">參、托馬斯阿奎那（Thomas Aquinas）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  托馬斯阿奎那（Thomas Aquinas 1224/1225~1274）是十三世紀最偉大的思想家，十三世紀的神學大綜合完成於托馬斯之手。<sup>174</sup><span style={cite}>（唐逸，《西方文化與中世紀神哲學思想》，頁140）</span>他與奧古斯丁同為中世紀最享盛名的兩大思想家。教父時代的奧古斯丁設法統一「信」和「知」，士林哲學的大師托馬斯卻要把「知」和「信」劃分清楚，希望分清哲學和神學二者的界線。奧古斯丁一生歷經奮鬥，有深刻的善惡之爭；托馬斯從小受良好教育，精神生活沒困擾。所以奧氏作品熱情洋溢，托馬斯的作品則如同數學定律的書，很清楚但少有感情。托馬斯的哲學起源和奧古斯丁同樣發自人的需要，但奧古斯丁以心靈為主，托馬斯以理性為主。<sup>175</sup><span style={cite}>（鄔昆如，《中世哲學趣談》，頁170,171-172,180）</span>
                </p>

                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">一、其哲學與神學</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  托馬斯的思想，主要在他的《哲學大全》與《神學大全》之中。《哲學大全》是為「有神論」辯護，用亞理斯多德的哲學思想體系，站在哲學的立場，指明「有神論」之信仰合理。其中第二卷討論上帝與世界的關係，闡明人類知性的能力與極限。第三卷論及
                </p>

                <PageTag page={88} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  善惡問題，探討人性對善惡應該有的態度和事實上的態度有哪些差距，並討論人性在擇善避惡的途徑上，所遭受的種種困難和化解之道。《哲學大全》是為不相信神、不相信啟示的人所寫的，唸完之後，就可以進入托馬斯的學說中心《神學大全》。<sup>176</sup><span style={cite}>（鄔昆如，《中世哲學趣談》，頁174-176）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  托馬斯的思想體系、形式與方法繼承亞理斯多德，但內容則是希伯來人的信仰。他的人性論綜合了希臘和希伯來兩者之長，因為希臘特別發展了人的能力，希伯來則發現了人的極限，托馬斯在能力和極限當中發展他的哲學與神學。<sup>177</sup><span style={cite}>（鄔昆如，《中世哲學趣談》，頁178-179）</span>托馬斯比別人更多運用亞理斯多德，但也不斷地修正亞理斯多德。托馬斯不僅僅是一個亞理斯多德主義者，原因之一是他處在一個教會實踐與神學研究的福音復興運動思潮中，這運動是由諸如多明我會、聖方濟會等提倡效仿福音生活的復興精神激發起來的。<sup>178</sup><span style={cite}>（唐逸，《西方文化與中世紀神哲學思想》，頁337-338）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  照奧氏的光照學說，只有上帝的光才能保證自然知識的確切性和真理性，這就取消了自然與超自然，及哲學與神學的界線。托馬斯則認為，人領受的光照不是後天的，而是先天的，也就是人的理智、思想能力，人可以自主的運用它。如此則更容易區分自然與超自然，以及哲學與神學。<sup>179</sup><span style={cite}>（唐逸，《西方文化與中世紀神哲學思想》，頁340-341）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  托馬斯堅持神學高於哲學，且不能以哲學批判神學。他和奧氏都宣稱「哲學是神學的婢女」，但賦予新含意：哲學是有獨立人格的婢女。他說：「基督教神學源於信仰之光，哲學源於理性之光。哲學不能與信仰真理對立，但能相類比，有些還能預示信仰真理，因為自然是恩典的先導。」<sup>180</sup><span style={cite}>（趙敦華，《基督教哲學1500年》，頁364-365）</span>
                </p>

                <PageTag page={89} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  托馬斯說，光學和音樂理論以數學的原理為前提；同樣，聖教義學亦以上帝的啟示真理為前提。<sup>181</sup><span style={cite}>（唐逸，《西方文化與中世紀神哲學思想》，頁141,343）</span>哲學有其極限，衝破這極限的就是神學，就是超理知的啟示。托馬斯指出，理性求知方法僅對自然事物有用，對超自然的知識則無效。諸如道成肉身、十架救贖、肉身復活等，皆為啟示的奧祕，雖然不悖於理性，卻絕非理性方法所能證明或認知。信仰的奧祕只能通過啟示而獲得，信便知道，不信便不知道。這樣，他明確地將理性與信仰、自然知識與超自然知識區分開來。<sup>182</sup><span style={cite}>（唐逸，《西方文化與中世紀神哲學思想》，頁148-149）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  托馬斯兼有哲學與神學、理知與信仰、哲學推理與神祕經驗。其晚年，在神祕體驗中，感受到與上帝同在的喜樂。<sup>183</sup><span style={cite}>（鄔昆如，《中世哲學趣談》，頁198）</span>
                </p>

                <p className="text-gray-700 leading-relaxed mt-3 mb-1 font-semibold">二、其人性論與倫理學</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  在托馬斯的價值體系中，以有神論的觀點看人性時，「人性」的存在是「神性」存在的分受。世界只分受了神的存在，而人不但分受了神的存在，還分受了神的理知和智慧。因此人可以用「類比」的方法，以理知推論出神的存在，以及祂部分的本質與特性。<sup>184</sup><span style={cite}>（鄔昆如，《中世哲學趣談》，頁199-200）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  托馬斯引用亞理斯多德的幸福論，認為「幸福是人類的至善，是其他目的都要服從的目的」。他進一步說明，人類的至善是以上帝的至善為原因的結果，因此道德活動的終極目的不是幸福，而是上帝。但一般人道德服從的目的是幸福，而不是上帝。幸福與上帝分別代表了共有的善和最高的善，人所追求的幸福分為四等之善：以謀求友誼來說，物理之善是微笑，倫理之善是好意的表達，時宜
                </p>

                <PageTag page={90} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  之善是在特定環境中的友好行為，終極之善是仁愛之心，只有仁愛之心才是上帝的恩典造成的結果。<sup>185</sup><span style={cite}>（趙敦華，《基督教哲學1500年》，頁404）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  托馬斯強調善的等級，終極的善是最高的善。他與奧古斯丁一樣，把惡定義為善的缺乏，例如「盲目」存在，意思是指眼目感染了失明症，而並不因此說瞽目是一個所謂的本有。<sup>186</sup><span style={cite}>（曹造琬，《聖多瑪斯形上學》，頁54）</span>把次等的善當作最高的善就是一種惡；罪則是缺乏任何善的目的。托馬斯認為惡比罪更加廣泛，罪比惡更加嚴重。人把切身的善、次要的幸福當作最高的善來追求，是一種自然傾向。大多數人按感覺，而不按理性生活。然而，這是違反自然的，道德上的反常猶如自然中的怪物或病態。<sup>187</sup><span style={cite}>（趙敦華，《基督教哲學1500年》，頁405）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  托馬斯認為，人唯有以理知去分辨善惡，然後才能夠使自己的意志擇善避惡。所以「目的」的選擇以及「價值」的訂立是人類生於此世不可或缺的事物。人要藉著理知導引自己去向善避惡，摒棄價值低的，選擇價值高的，在兩種善之中，選擇比較高的善；在兩種惡之中，選擇比較小的惡。理知引導意志，是托馬斯倫理學的前提。<sup>188</sup><span style={cite}>（鄔昆如，《中世哲學趣談》，頁202）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  托馬斯說，在上帝引導之下行使人類道德的人，乃是道德抉擇的根本主體。道德不是通過服從律法或立法者的義務而決定的。福音書新律法乃是聖靈的恩典和臨在。新律法中臨在的聖靈使人成為公義和聖潔；律法的條文，即使是聖經，如果成為主導的話，可以殺人。<sup>189</sup><span style={cite}>（唐逸，《西方文化與中世紀神哲學思想》，頁356）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  托馬斯說，作為上帝的形像，人類是可以成聖的，具有唔見上
                </p>

                <PageTag page={91} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  帝的天然願望。……因此只有唔見上帝才能徹底滿足和成全人類。人的終極目標，人的永福，就是唔見上帝（在愛與喜悅中）。<sup>190</sup><span style={cite}>（唐逸，《西方文化與中世紀神哲學思想》，頁353-354）</span>
                </p>
              </div>

              <div className="mb-4">
                <span className="font-semibold text-amber-700 block">肆、馬丁路德（Martin Luther）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  馬丁路德（Martin Luther 1483~1546）<sup>191</sup><span style={cite}>（羅倫培登，《這是我的立場──改教先驅馬丁路德傳記》，頁14-20）</span>是十六世紀的改教家，是宗教改革的代表人物，也是更正教的鼻祖，<sup>192</sup><span style={cite}>（保羅‧阿爾托依茲，《馬丁路德神學》，頁11）</span>他講的「因信稱義」、「信徒皆祭司」為絕大多數更正教所承受，是更正教理論的兩大柱石。加爾文及新教各派的主要思想基本上來自奧古斯丁與馬丁路德。<sup>193</sup><span style={cite}>（伍清文，《路德文集》第一卷，頁64-65）</span>
                </p>

                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">一、罪的嚴重</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  馬丁路德的觀點大部分是對他自己經驗的描述。在尚未明白「因信稱義」真理之前，他曾深受聖捆綁與壓制。他嘗試以作一個好修士的方式來拯救自己，但他越努力就越沮喪。<sup>194</sup><span style={cite}>（傅瑞爾，《路德傳奇──馬丁路德的生平與思想》，頁27）</span>他嚴謹恪守修道會的一切規則，許多的禁食、守夜，甚至使他的消化系統受到永久性損傷，但這些並不能使他的內心得到寧靜。<sup>195</sup><span style={cite}>（羅倫培登，《這是我的立場──改教先驅馬丁路德傳記》，頁31-32）</span>直到他教授聖經時，包括詩篇、羅馬書、加拉太書等，終於清楚看見救恩不是由於人的努力，乃完全是由於上帝的恩賜。<sup>196</sup><span style={cite}>（羅倫培登，《這是我的立場──改教先驅馬丁路德傳記》，頁53。傅瑞爾，《路德傳奇──馬丁路德的生平與思想》，頁29）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  馬丁路德認為，人天生便對罪有部分的認識，因有律法在他心
                </p>

                <PageTag page={92} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  裡。但因沒有聖靈的道，不能知道上帝律法的全部含意，在他內心深處的罪也就仍然處於隱藏的狀態，他也不可能認識「那基本的、主要的、真正致命的罪」，及最初的或原有的罪，這種罪從根本上說，是不信上帝和基督，是不守第一條誡命的罪。<sup>197</sup><span style={cite}>（保羅‧阿爾托依茲，《馬丁路德神學》，頁193-194）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  路德的神學明確關注的問題之一是避免縮小罪之大及嚴重性，這與認識上帝救贖恩典與榮耀之偉大是聯繫在一起的。任何人如果完全知道自己的罪的嚴重性，就不可能繼續生活，只有當他相信基督的福音，他才能忍受這一認識。<sup>198</sup><span style={cite}>（保羅‧阿爾托依茲，《馬丁路德神學》，頁194-195）</span>人在認識律法當中經歷無能為力，而在認識福音當中得著釋放。路德用福音和律法的對照，突顯出因信稱義的必要。<sup>199</sup><span style={cite}>（林鴻信，《覺醒中的自由》，頁92）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  路德在加拉太書一4「為我們的罪捨己」的註釋中指出：<sup>200</sup><span style={cite}>（馬丁路德，《加拉太書註釋》，頁11-13）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3 pl-4 border-l-2 border-amber-100 italic">
                  因為基督為我們的罪捨己，證明不能靠我們的力量除罪。這句話也指明我們的罪是何等的大，事實上到全世界不能改正一件罪。上帝的兒子基督所付贖價的重大指明了這事。藉著「為我們的罪捨己」這句話，暴露了罪的惡性。罪是如此邪惡，以致只有基督的犧牲才能救贖。……這個小小的「罪」字，包含了撒但整個的國度，也包含了每一樣可怕的事。……這節經文證明全人類都出賣於罪之下；罪是一個勒索的暴君，沒有任何被造物有力量克服它，只有耶穌基督的大能才能勝過它。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  我們個人羞於應用這個「我們」的代名詞，不願意和上帝發生關係，直到我們靠著善行，使自己配得。這種態度是由於對罪有一
                </p>

                <PageTag page={93} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  種錯誤觀念，以罪為小事，很容易靠著工應付；……這種態度很普遍，在那些自以為勝過別人的人中尤為顯明。他們易於承認自己是常常犯罪的人；但他們以為自己的罪並不那麼嚴重，以致藉某些好行為就能解決。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  路德認為一般人或異教徒也能有「公義」，但這是「道德的、世俗的、外在的、市民的」公義。上帝需要並要求「世俗的公義」，因為他用它在世上維護和平與秩序，避免世界自己毀滅自己。但路德進一步指出，當我們受上帝審判時，世俗的公義對我們沒有幫助，因為在內心深處，人追求的只是自己的利益。國家的偉人都被追求榮譽和名聲的慾望所毒化。這是可怕的鴉片，是對上帝榮耀的掠奪。<sup>201</sup><span style={cite}>（保羅‧阿爾托依茲，《馬丁路德神學》，頁196-198）</span>人若以為可以靠他內在的能力達到恩典的地位，他只是把一種罪放在另一種罪之上，成為雙重的罪。<sup>202</sup><span style={cite}>（楊慶球，《馬丁路德神學研究》，頁17）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  路德解釋加拉太書三19「律法是為什麼有的呢？原是為過犯添上的」。說明律法的功用，也顯明罪的嚴重性：<sup>203</sup><span style={cite}>（馬丁路德，《加拉太書註釋》，頁128-129）</span>
                </p>
                <p className="text-gray-700 leading-relaxed pl-4 border-l-2 border-amber-100 italic">
                  律法有雙重目的。第一個目的是司法的，為制止邪惡，保存社會，為福音的來臨作預備。……第二個目的是屬靈的，為顯示人的罪、盲目、不幸、無知、仇恨、輕看上帝，他的死亡、地獄，和定罪。……律法是死亡的鐵鏈、地獄的雷聲，和上帝憤怒的閃電，以擊倒驕傲和無恥的假冒為善之人。
                </p>

                <PageTag page={94} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">二、罪的根源</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  何謂罪？路德指出：罪在聖經裡，不僅意指身體的外在行為，而且也意指以其全部力量推動人去做這些行為的一切，即內心的最深處。聖經窺視人心，在那裡發現「人心的不信」是「一切罪的根源」。<sup>204</sup><span style={cite}>（E. Theodore Bachmann, Luther's Works Vol.35, p.369; Luther's Works Vol.14, 84）</span>在〈基督徒的自由〉論文中，路德強調：「人的善與不善，不是由於行為，乃是由於信與不信。人離開上帝，是罪的開端。離開上帝，就起於人不信的時候。……除信之外，沒有什麼可使人善；除了不信之外，也沒有什麼可使人惡。」<sup>205</sup><span style={cite}>（《路德選集》〔上〕，頁371）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  路德也追隨奧古斯丁，把自我中心描述為「一切罪之起源」。兩者同時開始存在。「自我中心」追求的是自己的利益，從上帝和人奪取東西，卻不給上帝也不給人。「不信」是缺少對上帝的畏懼、信賴和愛，它特別表現在忘恩負義中（羅二1）。<sup>206</sup><span style={cite}>（保羅‧阿爾托依茲，《馬丁路德神學》，頁199）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  關於驕傲，路德指出，人對自己的行為沾沾自喜，並把自己當作偶像來崇拜。人可能透過道德上的努力來克制自己低級的慾望，但不能克制驕傲，因為驕傲起源於人糾正錯誤的勝利，起源於人道德上的進步。這種驕傲和自滿在人身上扎根如此之深，以致能靠謙卑和悔罪來滋養。這自然不是真正的謙卑，因為真正的謙卑不能看見自己，只有上帝才能看見它。<sup>207</sup><span style={cite}>（Jaroslav Pelikan, Luther's Works Vol.21, 315-316）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  路德認為，阻礙人獲得對人或對上帝之真愛的驕傲和自信，乃是人墮落的本性。談論罪時，如果只想到在思想上、言語上、行為上對律法的違犯，便沒有了解罪的深度與根源。我們的虛弱不在於
                </p>

                <PageTag page={95} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  自己的行為，而在於本性；我們的身體、本性和整個存有由於亞當的墮落而被敗壞了。<sup>208</sup><span style={cite}>（George W. Forell, Luther's Works Vol.32, 224-225）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  路德認為，沒有重生以前，人的意志受到奴役和束縛。人在他所是和所做的一切中，都受犯罪的不可逃避的必然性支配。然而這並不免除他的責任和罪疚感，因為他也是按照自己的意志去犯罪。他必然是罪人，他又是自願的罪人。<sup>209</sup><span style={cite}>（保羅‧阿爾托依茲，《馬丁路德神學》，頁214）</span>罪是個人的罪，同時是「本性的罪」。它是與生俱來的，是我們裡面固有的，被稱為「繼承的罪」，源於亞當的墮落，透過父母傳給我們。<sup>210</sup><span style={cite}>（Lewis W. Spitz, Luther's Works Vol.34, 154）</span>
                </p>
              </div>

              <div className="mb-4">
                <span className="font-semibold text-amber-700 block">伍、尼布爾（Reinhold Niebuhr）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  尼布爾（Reinhold Niebuhr，1892~1971）是寫《基督與文化》的H. Richard Niebuhr之兄長，乃二十世紀基督教神學界中一位眾所皆知的人物。他畢業於耶魯大學神學院，獲神學碩士學位，並先後獲得牛津、哥倫比亞、哈佛、普林斯頓、耶魯等著名大學、神學院之榮譽博士學位，歷任教會牧師及神學院教授。他劃時代的二本著作是《人的本性與命運》及《道德的人與不道德的社會》。前者論及人具有上帝的形像，同時是有罪的；後者論述個人社會倫理的問題。<sup>211</sup><span style={cite}>（尼布爾，《道德的人與不道德的社會》，序）</span>
                </p>

                <PageTag page={96} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">一、人性觀</p>
                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">（一）與基督教對立的人性觀</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  尼布爾深知，現代文化極不歡迎基督教以人的基本性格為罪的主張。現代人幾乎一致反對基督教的原罪論，不承認人生來有罪，因為他們寧願相信歷史是進步的、向善的，儘管歷史的途程迂迴曲折，但它的總方向是對的，並以此證明人性為善。然而尼布爾根據基督教教義解釋人性，對上述史觀提出不同的主張。<sup>212</sup><span style={cite}>（尼布爾，《人的本性與命運》，頁xi）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  尼布爾分析各種解釋人性的派系，指出它們都是從兩大源頭之一──即理想主義或自然主義──演變出來的。前者冀圖專從人的理性功能去瞭解人性，其結果卻是誤解了它。因為理想主義者不瞭解人的靈性，及其與人體弱點之間的關係。理想主義者以亞理斯多德和柏拉圖為代表，兩者皆傾向身心二元之說，以邪惡為屬於肉體的：以善為屬於心靈的。<sup>213</sup><span style={cite}>（尼布爾，《人的本性與命運》，頁5-7）</span>後者──自然主義──屬於以現代自然科學為基礎的各學派。自然主義者力圖使人的地位和他的生命所寄存的自然完全相等，換言之，人的性質可在純生物的範圍內加以說明。二者皆與基督教對立，理想主義者抗議基督教以人為被造物和罪人之說，而自然主義者則抗議基督教以人為「上帝的形像」之說。<sup>214</sup><span style={cite}>（尼布爾，《人的本性與命運》，頁17-18）</span>
                </p>

                <PageTag page={97} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">（二）基督教的人性觀</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  尼布爾的人性觀不同於理想主義與自然主義，他介紹基督教人性觀的內涵如下：
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  1. 相信上帝創造世界，所以被造的萬物原都是善的，人的「身體」、「靈魂」一致，但人在「身」、「靈」雙方都是被造和有限的。<sup>215</sup><span style={cite}>（尼布爾，《人的本性與命運》，頁12）</span>人是自然界的赤子，他本身有限而脆弱；人世的無常，自然界的興衰變遷，肉身之必然死亡，都在支配著他。從另一方面說，人也是靈性的動物，他的靈性使他能夠超越自我，超越理性，甚至超越時間與空間的限制。<sup>216</sup><span style={cite}>（尼布爾，《人的本性與命運》，頁xii）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  2. 人是按「上帝的形像」造的，基本上需從上帝的觀點去了解，而不是從人的理性才能之獨到處或他與自然的關係上去了解。<sup>217</sup><span style={cite}>（尼布爾，《人的本性與命運》，頁12）</span>基督教的理想，並不是否定自我，乃是實現自我。個人的最高自我實現並非摧殘個性，而是使自我的意旨順服於神的普遍意志之下。<sup>218</sup><span style={cite}>（尼布爾，《人的本性與命運》，頁246-247）</span>人不能倚靠自我以完成人生及歷史的目的，因為他不能在上帝以外找到人生的意義。人生的意義是從基督啟示出來的，在基督裡面人可以獲得智慧和能力，以完成他倚靠自力所不能完成的人生意義。<sup>219</sup><span style={cite}>（尼布爾，《人的本性與命運》，頁xii）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  3. 人為上帝的像，及人為罪人，二者同時矛盾地擺在一起。人的罪是他反抗了上帝。人的惡在人格的中心，即在人的意志中。不是永恆的人來判斷有限的人，而是永恆聖潔的上帝判斷罪人。人本身不是自足的，人一旦以他自己為生命中心和泉源，即是破壞人性的定律。所以他的罪是靈性的，而不是肉體的。但這叛逆也由靈性
                </p>

                <PageTag page={98} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  傳染到肉體而擾亂它的和諧。<sup>220</sup><span style={cite}>（尼布爾，《人的本性與命運》，頁14-15）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  4. 人的本質乃是他的自由意志，他的罪乃是妄用自由並由此而招來自由的毀滅。<sup>221</sup><span style={cite}>（尼布爾，《人的本性與命運》，頁15）</span>罪並不是由於人的有限或無知而生的，卻是由於人的驕傲和自義而生的。「驕傲」使人不肯接受他所處的有限地位，「自義」使人妄想他能倚靠自己的能力以完成人生與歷史的意義。這是自亞當以來人類所同犯的大罪，而人類歷史之所以禍患相承，了無寧日，都是種因於這種個人的和群體的驕傲和自義。當個人的驕傲和自義擴大成為群體的驕傲和自義時，其所產生的邪惡比個人所能造成的更加可怕，更加專橫殘暴。<sup>222</sup><span style={cite}>（尼布爾，《人的本性與命運》，頁xii,184-195,206-215。另在尼布爾，《道德的人與不道德的社會》，頁76-96，對於國家的罪，有詳細的說明）</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  5. 歷史之具有意義在乎歷史顯示了永恆的原則。歷史上的每一文化體系都有它的興盛和衰敗期，它的興盛說明了人類潛力在歷史中發揮的創造作為，但在這種創造作為中人的放縱和驕傲使他們深陷於自己所鑄造的錯誤中，而其中最嚴重的錯誤莫過於人把他們在某文化體系中的片斷成就當作是全部歷史意義的完成，把相對的善當作是絕對的善，把只能適用於一時一地的道德標準當作人類永久的道德標準；當這種謬妄觀念逐漸滋長時，這種文化必然衰敗，以致覆亡，這就是歷史所顯示的永恆原則。<sup>223</sup><span style={cite}>（尼布爾，《人的本性與命運》，頁xiii）</span>
                </p>

                <p className="text-gray-700 leading-relaxed mt-3 mb-1 font-semibold">二、罪觀</p>
                <p className="text-gray-700 leading-relaxed mt-2 mb-1 font-semibold">（一）罪與審判</p>
                <p className="text-gray-700 leading-relaxed">
                  尼布爾指出，按照先知的看法，人的真正罪惡，乃是不願承認他的軟弱、有限和依賴的地位，而妄想抓住一種人所不能有的權力和安全，同時企圖超越被造物的限度，虛張自己的德性與知識。<sup>224</sup><span style={cite}>（尼布爾，《人的本性與命運》，頁136）</span>
                </p>

                <PageTag page={99} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  人是有限之靈，他雖不是完全的整體，卻在某種意義上能夠領悟整體，所以容易錯誤地以為他自己即是那個整體。人是剛強的也是軟弱的，是自由也是被捆綁的，是具有遠見也是盲目的。他站在自然與靈性的交點，週旋於自由與限制之中。他的罪是因為他對自己的見地估量太過，以之來掩飾他的愚盲。因此，不能將罪中有意頑抗的成分取消。<sup>225</sup><span style={cite}>（尼布爾，《人的本性與命運》，頁179-180）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  保羅說，人的罪就是他想要將自己立為上帝（羅一18~23）。人類歷史最顯然的事例，即是各民族、各文化制度，若越過上帝所規定給人的被造地位，必然自取滅亡。諸先知在以色列民族身上對這審判看得最清楚。<sup>226</sup><span style={cite}>（尼布爾，《人的本性與命運》，頁138）</span>這一審判的觀念擴張，不只應用於以色列人，凡經上帝用來作為施行祂對以色列的審判工具的諸帝國，也包括在內。因它們同受驕傲的引誘，終必也受同樣的刑罰。歷史啟示著上帝對人驕傲之忿怒。然而，上帝能否克服歷史的悲劇？這是新約要回答的問題。<sup>227</sup><span style={cite}>（尼布爾，《人的本性與命運》，頁139-140）</span>
                </p>

                <p className="text-gray-700 leading-relaxed mt-3 mb-1 font-semibold">（二）罪與救贖</p>
                <p className="text-gray-700 leading-relaxed">
                  上帝非但能懲罰，更能治療人的驕傲之罪。在彌賽亞的預言裡，上帝終於要勝過人類的罪性。基督的一生，生、死、復活，提供了答案。審判並不是神對人的最後決斷，福音的喜訊乃是神將人的罪性歸於自己，以祂的犧牲來克服人所不能克服的，因為人在道德上無論進到哪一階層，都脫離不了那自我誇耀的罪惡範圍。<sup>228</sup><span style={cite}>（尼布爾，《人的本性與命運》，頁140）</span>
                </p>

                <PageTag page={100} />
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  尼布爾指出，早期希臘的基督教到近代的天主教與安立甘宗，認為道成肉身乃是保證那有限者與永恆者、人與神、歷史與超越歷史間的鴻溝，可以溝通；而不以為它是在啟示神的憐憫。然而這是希伯來的宗教所未曾置疑過的，因此，新約啟示的內容，主要的不是上帝能對人說話，而是保證上帝對人的最後話語不是審判，而是赦免和憐憫。<sup>229</sup><span style={cite}>（尼布爾，《人的本性與命運》，頁142）</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  聖經中最基本的問題，不是關於人的有限性，而是關於人的罪。基督教的問題不是有限的人如何能認識上帝，而是有罪的人如何能與上帝和好，以及歷史如何能克服它那「虛妄軌範」的悲慘結局。<sup>230</sup><span style={cite}>（尼布爾，《人的本性與命運》，頁145）</span>神親自作為人的罪與驕傲的犧牲，而把人的罪更深刻地說明並啟示出來。在教父時期，這教義是被壓置在道成肉身論所含的時限與永恆關係的問題之下。中古的天主教也同樣使它變了質，所以天主教不能了解人的罪的嚴重性。贖罪與稱義的教義直到改教運動才抬頭，成為基督教的中心教義。<sup>231</sup><span style={cite}>（尼布爾，《人的本性與命運》，頁146）</span>
                </p>
              </div>

              <p className="font-bold text-amber-700 mb-2 mt-2">小　結</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                奧利金認為人有自由意志決定行善、行惡，人的墮落出自於人的自由意志。什麼是自由意志？奧利金認為，人有理性，在面臨各種選擇時，理性既可能促使他們去實現良善而正當的願望，也可能推動他們去追逐邪惡的願望。奧利金認為人有兩種本性：可見的、有形的本性，和不可見的理性。前者支配身體慾望和活動的動物本能，後者影響靈魂的目的與自由意志。<sup>232</sup><span style={cite}>（趙敦華，《基督教哲學1500年》，頁101）</span>奧利金受柏拉圖的影響，強調人的理性，並且認為這理性擁有自由，能選擇善惡。<sup>233</sup><span style={cite}>（尼布爾，《人的本性與命運》，頁151,171。奧利金，《論首要原理》，頁162）</span>
              </p>

              <PageTag page={101} />
              <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                奧古斯丁肯定理性，但不以理性為依歸。他說：「單就人性來說，在人裡面沒有比心智或理性更可貴的。但希望在生活上蒙福的人，不當依循心智與理智生活；因為那樣，他的生活就是遵循人的意向，其實他應遵循上帝的旨意。」<sup>234</sup><span style={cite}>（尼布爾，《人的本性與命運》，頁154）</span>奧古斯丁以「驕傲」與「自我中心」來說明罪的本質，認為「情慾」是罪的表現，並發現「離開上帝」是一切罪的根源。<sup>235</sup><span style={cite}>（林鴻信，《覺醒中的自由》，頁93）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                奧古斯丁的重要貢獻之一是把柏拉圖的體系，加上對「惡」的感受，和對「惡」的闡明。希臘的體系跟羅馬的思想，都找不到「罪惡」的來源，而由於他本身對「自由」的體驗，確認「罪惡」是由人自己所做的，人自己應該負責。<sup>236</sup><span style={cite}>（鄔昆如，《中世哲學趣談》，頁89-90）</span>奧氏對「罪」的解釋相當強調「自由意志」，他說：人能使用自由意志達至正確的生活，自由意志是人完成其本性之善的條件；人也能使用自由意志去犯罪。<sup>237</sup><span style={cite}>（唐逸，《西方文化與中世紀神哲學思想》，頁46）</span>但自從亞當犯罪之後，人的意志已被罪惡所污染，失去了自由選擇的能力。只有依靠上帝的恩典，才能恢復意志自由，在非奴役的條件下作出善的選擇。<sup>238</sup><span style={cite}>（趙敦華，《基督教哲學1500年》，頁169-170）</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                托馬斯與奧古斯丁一樣，把惡定義為善的缺乏。但托馬斯強調善的等級，終極的善是最高的善。<sup>239</sup><span style={cite}>（曹造琬，《聖多瑪斯形上學》，頁54）</span>他認為，把次等的善當作最高的善就是一種惡；罪則是缺乏任何善的目的。人要藉著理知導引自己去向善避惡，摒棄價值低的，選擇價值高的。理知引導意志，是托馬斯倫理學的前提。<sup>240</sup><span style={cite}>（鄔昆如，《中世哲學趣談》，頁202）</span>托馬斯認為，大多數人按感覺，而不按理
              </p>

              <PageTag page={102} />
              <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                性生活，把次要的幸福當作最高的善來追求，因此活在罪惡之中。<sup>241</sup><span style={cite}>（趙敦華，《基督教哲學1500年》，頁405）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                路德與托馬斯一樣，認為在本質上，罪即是情慾，也都以「情慾」一詞來包括各種的罪。但路德強調，情慾是由於人的驕傲和不順服上帝而來的。此外，路德也不認同托馬斯採用亞理斯多德以理性為肉體之主的說法。<sup>242</sup><span style={cite}>（尼布爾，《人的本性與命運》，頁227）</span>托馬斯認為，人順服上帝，一切下層功能都順服理性，而身體順服靈魂，第一個順服是第二、第三個順服的原因。<sup>243</sup><span style={cite}>（托馬斯，《神學大全》第一部第九十五題第一條。尼布爾，《人的本性與命運》，頁171）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                路德從奧古斯丁傳統出發，對人的罪有更深刻的認識，路德更多地直接強調，人「不信」上帝就是罪，並且是一切罪的根源，當人不信的時候，驕傲、自我中心與情慾都隨之而來。所以信或不信，正是拯救或定罪的根本原因。<sup>244</sup><span style={cite}>（林鴻信，《覺醒中的自由》，頁93）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                尼布爾以人的自由及人的驕傲自義，來說明罪的根源與表現。「驕傲」使人不肯接受他所處的有限地位，「自義」使人妄想他能倚靠自己的能力以完成人生與歷史的意義，這是人類之所以禍患相承的原因。
              </p>
              <p className="text-gray-700 leading-relaxed">
                尼布爾指出，中世紀的托馬斯阿奎那將代表聖經觀點的奧古斯丁及代表理想主義的亞理斯多德兩大思想體系綜合在一起，而改教運動則將聖經的觀點從古典西方哲學中分離出來。新教的自由派，是要再將這兩種成分聯結起來，又加上自然主義的成分，以致成為自我衝突的思想體系。<sup>245</sup><span style={cite}>（尼布爾，《人的本性與命運》，頁5）</span>
              </p>

              <PageTag page={103} />
              <p className="font-bold text-amber-700 mb-2 mt-2">本章結論</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                討論「罪」，不管從原文，從聖經，從神學，都能看到一個最重要的根源，就是人離開了造物主上帝；也看到一個共通的結果，就是人失去本位，失去目標。從表面上看，罪的本質是感官慾望或自私，但更深入內心，可發現，罪的本質就是不讓上帝當上帝。<sup>246</sup><span style={cite}>（Millard J. Erickson, Christian Theology. 艾利克森，《基督教神學》卷二，郭俊豪等譯，頁171,175）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                按照聖經的講法，「罪」產生了兩種破壞關係的惡果，即破壞了人與上帝的關係和人與人的關係，也就是破壞了我祢關係和我你關係。<sup>247</sup><span style={cite}>（劉小楓，《拯救與逍遙》，頁216）</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                向華人講「罪」的問題，可以進一步說，「罪」產生了自我的塌陷與扭曲，當人離棄了上帝之後，就活在因自我塌陷而扭曲的狀態中。所謂自我塌陷，是指人作為被造的位格者，需要依靠創造他並賜他生命的上帝而活，一旦人離開生命的源頭之後，就像洩了氣的氣球般塌陷下來，人性便失去原本的豐滿而扭曲。這扭曲的狀態牽涉各樣的問題，在廣義上都可稱為罪。<sup>248</sup><span style={cite}>（李錦綸，《塑成肉身救贖源──獻給中國的教會神學》，頁45-46）</span>
              </p>

              <p className="text-gray-700 leading-relaxed mt-2">
                一個與神沒有生命關係的人，既沒有生命的動力，也沒有生命的目標，一切所行自然就在「罪」中，或者說，在「迷失、失落」之中。因此，在華人文化、情境中表達「罪」，就是要將華人的「塌陷、扭曲、迷失、失落」顯明出來。此種「塌陷、扭曲、迷失、失落」，乃是由於人離開生命的本源──造物主上帝。因此，如果沒有上帝，談論「罪」也就沒有什麼意義了。華人的上帝觀是什麼？華人與造物主上帝有何關係嗎？華人是否因為離開上帝而失落？這是下一章（第二章）要探討的重點。人離開生命的本
              </p>

              <PageTag page={104} />
              <p className="text-gray-700 leading-relaxed mt-2">
                源──造物主上帝之後，進而造成人與人之間、人與物之間都失去正常和諧的關係，也在文化發展上走入歧途。<sup>249</sup><span style={cite}>（《基督教與中國文化更新研討會彙報》，頁48-51）</span>華人在人與人之間、人與物之間，及文化發展上，出了什麼問題？這是本書第三至五章要探討的重點。
              </p>
            </div>

          </div>
        )}
      </div>

    </div>
  );
}
