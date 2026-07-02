import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch16() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第十六章</h1>
        <h2 className="text-xl font-semibold text-gray-700">分別善惡樹</h2>
        <p className="text-gray-500 mt-1">耶和華神使各樣的樹從地裡長出來，可以悅人的眼目，其上的果子好作食物。園子當中又有生命樹和分別善惡的樹。……耶和華神吩咐他說：園中各樣樹上的果子，你可以隨意吃，只是分別善惡樹上的果子，你不可吃，因為你吃的日子必定死！創世記二9，16-17</p>
      </div>

      {/* 正文 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">正文</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <p className="text-gray-700 leading-relaxed">
              神除了提供各樣的樹，其果子可作食物，又特別標示出生命樹與分別善惡樹。生命樹的本質、內涵、重要性，前一章已經大致講完。分別善惡樹既然與生命樹並列，其重要性理當不亞於生命樹，並且同樣有重要的屬靈含意。
            </p>
            <p className="text-gray-700 leading-relaxed">
              一般學者對「知識善惡樹」有四種解釋：1. 與性和生育有關，2. 人的道德分辨能力，3. 高等的知識，4. 屬神的智慧。關於始祖吃了善惡樹的果子之後，會產生甚麼結果，鄭炳劍指出有五種論點：1. 人就會知道所有的知識。2. 有能力分辨道德是非。3. 知道神的律法。4. 有性方面的知識。5. 像神一樣有自主權。
            </p>
            <p className="text-gray-700 leading-relaxed">
              以上觀點都有其意義，但筆者認為最重要是關於人與神的關係。起初，神按著他自己的形像造人，這形像包括人有別於其他生物的各種能力、特性，但在神的裡面有二種特殊的能力、特性，沒有在造人的時候完全給人，而是將之分別放在分別善惡樹與生命樹的果子裡，為了是發展神與人之間愛的關係。
            </p>
            <p className="text-gray-700 leading-relaxed">
              在亞當被造之後，神立刻指示，要吃各樣的樹及生命樹的果子，但不可吃分別善惡樹的果子。發出這個指示，是在還沒有創造女人之前。這說明亞當與神的關係，比起他與妻子的關係，更加優先、重要。人若沒有從兒童、少年、青年時期，就建立與神正確的關係，他不可能與妻子建立好的關係。
            </p>
            <p className="text-gray-700 leading-relaxed">
              神在伊甸園，藉生命樹供應神的生命，並藉分別善惡樹設立權柄。這是分別善惡樹的第一個意義，代表神的主權，分別善惡樹還有另外兩個意思，可分別代表神的律法、神的禮物，以下分三方面來分享。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、神的主權</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記二9：「耶和華神使各樣的樹從地裡長出來，可以悅人的眼目，其上的果子好作食物。」創世記三6：「女人見那棵樹的果子好作食物，也悅人眼目」。從某個角度說，分別善惡樹與其他樹是一樣的，都悅人眼目、好作食物。它是神所造的，而神所造的都是好的（創一30），所以它不會代表魔鬼撒但，也不會有什麼毒素。但神特別吩咐亞當不可吃分別善惡樹的果子，神的話使這棵樹成為神主權的記號。分別善惡樹標示了「神是造物主宰」與「人是受託管家」二者之間的基本差異。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                吃分別善惡果會死的原因，主要是關乎神的主權。神一造人就立刻教導人有關神主權的真理。神造了各樣樹的果子都可以吃，但神說：「分別善惡樹上的果子，你不可吃，因為你吃的日子必定死。」（創二16-17）這邊的「死」是指與神隔絕。中文的「喪」其甲骨文是由「桑」與「二個口」組成，很可能代表始祖兩人吃了分別善惡樹果，帶來死亡、失喪（創二17，三6-7）。喪有雙重涵義，表死亡與迷失，與人吃禁果的結果完全相合。筆者認為，用「喪」這個字來說明始祖吃禁果的結果，比各國語文的「死」都更好，這是中華文化可以提供給基督教神學界的貢獻。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                多數人無法理解神為什麼要造一棵不可吃的樹，這用神的主權及人的奉獻來解釋可以很貼切。神希望人永遠知道他是神、他是主人，若神將一切都交給人管理，所造的每一棵樹都可以吃，亞當、夏娃很快就會把自己當作是有最高權柄的主人。因此神留下一棵樹不交給人，囑咐這樹的果子不能吃，這是神主權的記號。每當亞當夏娃經過這棵樹時，就會想起神的吩咐，而提醒自己只是受神託付責任的管家；如果他們吃了分別善惡樹的果子，就是干犯上帝的主權，表示他們想要自己作上帝。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                有一個很好的例子幫助我們了解管家與主人的區別。雅各的兒子約瑟，被賣到埃及波提乏手下為奴，因有神同在而凡事順利，所以主人就提拔他成為家宰。約瑟長得俊美，女主人趁男主人不在，想引誘約瑟與她同寢，約瑟拒絕說：「主人把所有的都交在我手裡，只留下你沒有給我管，因為你是他的妻子。我怎能作這大惡，得罪神呢？」（創卅九9）管家與主人的差別就在於不能管主人的妻子，若約瑟敢動主人的妻子就表示他認為自己是主人，結果必是死刑或坐牢。從這個例子可以看到，不尊重神的主權、想自己當神的嚴重性。
              </p>
              <p className="text-gray-700 leading-relaxed">
                人受託當管家，神是主人，所以需要有一件分別出來，作為神主權的記號。在伊甸園，分別善惡樹是主權的記號，在今天，當納的十分之一及當獻的供物也是神主權的記號。瑪拉基書三8-9：「人豈可奪取神之物呢？你們竟奪取我的供物。……就是你們在當納的十分之一，和當獻的供物上。因你們通國的人都奪取我的供物，咒詛就臨到你們身上。」以色列人不將當納的十分之一及當獻的供物帶到神面前，就是奪取「神之物」（瑪三8）。很多信徒不瞭解奉獻有何重要，其實這是神造了人就馬上教導人的一個重要功課。財物奉獻乃是神主權的記號，我們每次把當納的及當獻的財物分別為聖歸給神時，就再次表明我們只是管家，我們所有的都是神的。若不懂奉獻，不願奉獻，就如同自己在作神。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、神的律法</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                分別善惡樹的果子是否包含分別善惡的能力？聖經記載，魔鬼撒但對夏娃說：「神知道，你們吃的日子眼睛就明亮了，你們便如神能知道善惡。」（創三5）「於是，女人見那棵樹的果子好作食物，也悅人的眼目，且是可喜愛的，能使人有智慧，就摘下果子來吃了，又給她丈夫，她丈夫也吃了。他們二人的眼睛就明亮了……」（創三6-7）亞當、夏娃都吃了分別善惡樹的果子之後，「耶和華神說，那人已經與我們相似，能知道善惡。」（創三22）這說明，分別善惡樹的果子的確包含一種特殊的能力，而且這能力跟知道善惡有關。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                一般解經者認為，神造人就已經給人有分別善惡的能力，關於該不該吃禁果，也是在分辨善惡。所以吃禁果，不關乎得到分別善惡的能力；去吃分別善惡果乃是代表人想要倚靠自己來分別善惡，也否認神有分別善惡的最高權柄。這個解釋通行於大部分的教會。關於否認神的權柄，這是事實，本章的第一點也有說明。但吃分別善惡果，是否與擁有或增加分別善惡的能力有關？神的話既然提供了正面的敘述，筆者認為，應該還是有。這是相對的。不是從沒有到有，乃是從少變成多。吃禁果前，神已經給人有一些分別善惡的能力，但不是很強。吃禁果後，分別善惡的能力強化了，甚至成了人生命中最大的一部分。這樣的解釋，符合經文本身的描述，也不否認人原來也有一些分別善惡的能力。舊約學者約翰·華爾頓有類似的解釋，他認為，分別善惡樹的果子確實加強了分別善惡的能力，不是能力本身不好，問題乃在於，人沒有順服神的話語、權柄，太早想進入獨立自主的青春期，時間次序是不對的，以致這能力對人產生了負面的影響。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神將很強的分別善惡的能力放在禁果裡面，用意是甚麼？從律法的兩大功能可找到線索。律法的兩大功能是維持社會秩序，以及使人知罪。人若繼續生活在伊甸園中，與神同在同行，並不需要立刻擁有很強的分別善惡能力。若吃生命樹的果子，使他的生命逐漸長大成熟，雖然沒有吃禁果，仍然會逐漸增強分別善惡的能力，但同時他付出愛的能力是更強的，這是生命樹果子的主要特色。這樣的分別善惡能力，不會過度發揮，以致產生對自己、對別人的轄制。然而人若犯罪，必被趕出伊甸園，不再有神同在同行，必須倚靠自己生活，這時候就立刻需要擁有比較強的分別善惡的能力，主要目的有以下二項。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                第一是為了維持社會秩序，使人類社會不至於太快崩潰。正如羅馬書二14-15所說：「沒有律法的外邦人若順著本性行律法上的事，他們雖然沒有律法，自己就是自己的律法。這是顯出律法的功用刻在他們心裡，他們是非之心同作見證，並且他們的思念互相較量，或以為是，或以為非。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                第二是為了指出人的罪，使人認罪悔改，回到神面前。如羅馬書三19-20所說：「我們曉得律法上的話都是對律法以下之人說的，好塞住各人的口，叫普世的人都伏在神審判之下。所以凡有血氣的，沒有一個因行律法能在神面前稱義，因為律法本是叫人知罪。」又如羅馬書五20所說：「律法本是外添的，叫過犯顯多；只是罪在那裡顯多，恩典就更顯多了。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                律法雖然能維持社會秩序，也能使人知罪，但並不具有使人不犯罪的能力，如羅馬書七12-19所說：這樣看來，律法是聖潔的，誡命也是聖潔、公義、良善的。既然如此，那良善的是叫我死嗎？斷乎不是！但罪藉著那良善的叫我死，就顯出真是罪，叫罪因著誡命更顯出是惡極了。我們原曉得律法是屬乎靈的，但我是屬乎肉體的，是已經賣給罪了。因為我所做的，我自己不明白；我所願意的，我並不做；我所恨惡的，我倒去做。若我所做的，是我所不願意的，我就應承律法是善的。既是這樣，就不是我做的，乃是住在我裡頭的罪做的。我也知道，在我裡頭，就是我肉體之中，沒有良善。因為，立志為善由得我，只是行出來由不得我。故此，我所願意的善，我反不做；我所不願意的惡，我倒去做。
              </p>
              <p className="text-gray-700 leading-relaxed">
                這段經文，將律法的本質、功能、侷限，講得非常清楚。律法之路，不是美好的路，但若缺乏神的同在，卻是不得不走的一條路。整個人類歷史，可以看到各種宗教興起，也有各種教育理論，本質都是律法，都是勸人為善，這些都是從分別善惡樹的果子來的。這些都有正面的功能，但也必須承認，都不能真正解決罪的問題。律法使人知罪，主要目的是要把人引向基督，因為唯有基督的福音能使人脫離罪、勝過罪。若僅靠律法發揮維持社會秩序的功能，以為這是人心與社會問題的解決之道，就會是一條不歸路。如箴言十四12及十六25所說：「有一條路，人以為正，至終成為死亡之路。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、神的禮物</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                神造了世界給人使用及管理，這是神的禮物。世界原來是好的，但當人離棄神，把世界作為他最大的喜愛、最大的倚靠，那就是一條死亡之路。不在正確次序下的世界，就變成世俗。約翰壹書二15-17所說的世界，主要是指世俗。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                約翰壹書二15-17：「不要愛世界和世界上的事。人若愛世界，愛父的心就不在他裡面了。因為凡世界上的事，就像肉體的情慾，眼目的情慾，並今生的驕傲，都不是從父來的，乃是從世界來的。這世界和其上的情慾都要過去，惟獨遵行神旨意的，是永遠常存。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                將女人與分別善惡果的互動，跟人與世界的互動相比，會發現有相似之處。創世記三6：「女人見那棵樹的果子好作食物（肉體的情慾），也悅人的眼目（眼目的情慾），且是可喜愛的，能使人有智慧（今生的驕傲）。」女人此時已將分別善惡果的重要性擺在比神的話更前面的位置，神的話已被否定。正如世人將世界擺在神之前，完全不理會神的話。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神的禮物不僅有外在的世界，也有內在的知識、智慧、能力。「分別」的原文是 דַּעַת（da`ath），有知識、洞察力、辨識、理解、智慧等意思。在舊約共出現90次。出埃及記兩次說到神的靈充滿比撒列，使他有智慧、聰明、知識（出卅一3，卅五31），其中知識這個字就是 דַּעַת（da`ath）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                善的原文是 טוֹב（towb），有美好、可喜、令人愉悅的、有價值的、福樂、好德性、好東西等意思。在舊約出現517次。唯獨在俄巴底亞書、哈巴谷書、西番雅書、哈該書沒出現，其餘書卷都有。這個字的含意在全本聖經都是很正面的，而且出現頻率很高。創世記一章六次說「神看著是好的」，一次說「都甚好」，撒迦利亞書出現四次，分別翻譯作美善、豐盛、歡樂、美（亞一13，亞一17，亞八19，亞十一12），所用的都是這個字。既然如此，可知這個「善」乃是人生命中很重要的內涵。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                惡的原文是 רַע（ra），有壞的、惡的、令人討厭的、悲傷的、罪惡、邪惡、危難、苦難、傷害、錯誤等意思。在舊約出現662次。其意義有品質與道德兩方面，前者可指任何有害或不好的事物，包括腐壞的食物、災害、不幸等，如申命記七15：「耶和華必使一切的病症離開你，你所知道埃及各樣的『惡』疾，他不加在你身上，只加在一切恨你的人身上。」詩篇廿三4：「我雖然行過死蔭的幽谷，也不怕遭『害』。」後者包括不道德，不忠於神等，如創世記十三13：「所多瑪人在耶和華面前罪大『惡』極」，創世記卅七2：「約瑟將他哥哥們的『惡』行，報給他們的父親。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                從以上三個詞的意思來看，分別善惡這個複合詞可能是指知識與善惡，或者是有關善惡的知識，可翻譯為「知識善惡樹」或「知善惡樹」。不管是哪個意思，基本上這應該是每個人都需要的能力。但神說，不要吃，不能吃，而且說，吃了會死。因為知道善惡，卻無能力行善，乃是沒用的；而且知識、恩賜不能高過生命，不能高過神，這是次序的問題。分別善惡樹果子所代表的一切，包括外在的食物、財物、產業，內在的知識、智慧、恩賜、能力等，原都是好的，但當人不理會神的指示、禁令，而去吃它的時候，就如同離棄神而擁抱世界，這是一條死亡之路。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                神兒女的三仇敵是魔鬼、世俗、私慾，在亞當、夏娃犯罪的事上，魔鬼的影響力是很明顯的，最被大家注意到；分別善惡果可代表世界，它擺在正確次序就是神的禮物，擺在錯誤次序就變成世俗；私慾是從自由意志而來的，自由意志的正確使用是愛神超過一切，錯誤使用是愛世界超過愛神，錯誤使用時就是私慾。在亞當、夏娃的時候，已經有這三仇敵。但人只要堅持相信神的話，宣告說，無論如何，我們不吃分別善惡樹的果子，就可以勝過魔鬼、世俗、私慾了。
              </p>
              <p className="text-gray-700 leading-relaxed">
                主耶穌曾經面對魔鬼的三個試探，第一個是將石頭變成食物，第二個是從殿翅跳下去（使很多人看見），第三個是給你萬國與榮華。這三個試探相似於女人眼中的分別善惡果：1. 好作食物，2. 悅人眼目，3. 使人有智慧（智慧可用於得萬國榮華）。主耶穌示範如何勝過三仇敵，就是用神的話來抵擋。神的話不僅是亞當、夏娃能勝過三仇敵的利器，也是今天我們每一個人能勝過三仇敵的寶劍，如以弗所書六17所說：「拿著聖靈的寶劍，就是神的道」。讓我們天天來領受神的道、宣告神的道、遵行神的道，而能成為一個得勝的人。
              </p>
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
                '分別善惡樹有三重意義：神的主權記號（人是管家非主人）、神的律法（維持秩序、使人知罪但不能使人不犯罪）、神的禮物（世界正確擺在神之下是禮物，錯誤次序則變世俗）。',
                '中文「喪」字（桑+二口）比各國語言的「死」更貼切表達始祖吃禁果的雙重結果——死亡與迷失，這是中華文化對神學的獨特貢獻。',
                '吃禁果後分別善惡的能力被強化（從少變多，而非從無到有），這能力在犯罪後成為維持社會秩序、使人知罪的律法功能，但律法無法使人不犯罪（羅七12-19），只能把人引向基督。',
                '「分別」（da`ath，知識）、「善」（towb，美好）、「惡」（ra，壞的/不道德）三個希伯來字合起來可譯為「知識善惡樹」；這些能力本身是好的，但抬高它們而離棄神就是死路一條。',
                '神兒女的三仇敵是魔鬼、世俗、私慾，分別善惡果對應此三者的試探（好作食物、悅人眼目、使人有智慧），耶穌在曠野以神的話勝過同樣的三個試探，成為信徒得勝的榜樣。',
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

      {/* 分享題目 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-yellow-50 hover:from-amber-100 hover:to-yellow-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">分享題目</span>
          </div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && (
          <div className="p-5 bg-white space-y-4">
            {[
              '分別善惡樹的第一個意義是「神主權的記號」，這個意義跟我們現在所操練的財物奉獻有何關係？',
              '分別善惡樹的第二個意義與「神的律法」有關，這律法有何正面功能？有何侷限及不好的副作用？',
              '耶穌曾經怎麼面對魔鬼的試探？我們在生活中要如何擺對順序，才不會變成吃分別善惡樹的果子？',
            ].map((q, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0 text-lg">{i + 1}.</span>
                <p className="text-gray-700 leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
