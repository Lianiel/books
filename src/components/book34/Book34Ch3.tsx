import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book34Ch3() {
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
        <p className="text-cyan-700 font-semibold tracking-wide mb-1">第二篇　與人相連</p>
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-700 to-teal-700 bg-clip-text text-transparent">第三章</h1>
        <h2 className="text-xl font-semibold text-gray-700">什麼是相連？</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-cyan-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-cyan-50 to-teal-50 hover:from-cyan-100 hover:to-teal-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-cyan-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <p className="text-gray-700 leading-relaxed">
              我站在急診室前等著救護車。警察打來的電話沒有給我多少有關這項自殺企圖的資料——只有病人的年齡和性別。但已足以使我猜測。
            </p>
            <p className="text-gray-700 leading-relaxed">
              為什麼一個三十五歲的婦人要自殺？我想著。是不是她不認識主？或她丈夫離棄她？或她失去了孩子？什麼使她覺得死是唯一的辦法？
            </p>
            <p className="text-gray-700 leading-relaxed">
              救護車來了，紅燈閃爍。當他們把婦人推進急診室，我看到她亂亂的金髮及悖逆的眼光。她在掙扎——但不是為了生存。她在為死的權利奮戰。
            </p>
            <p className="text-gray-700 leading-relaxed">
              「離我遠點！」她叫著，推開護士。「你們沒有權利不讓我死！這是我的生命，我隨自己高興。你們不能這樣對我！不要這樣對我！你們不能……」她的眼神呆滯，陷入昏迷。
            </p>
            <p className="text-gray-700 leading-relaxed">
              第二天早上我巡視病人時，為她作了一次心理診斷，她看來很蒼白虛弱，但我可以看得出來她很美。
            </p>
            <p className="text-gray-700 leading-relaxed">
              「你感覺怎樣？」我問。「糟透了，真多謝你們這些人多管閒事。」她雙臂交叉胸前，看著我。
            </p>
            <p className="text-gray-700 leading-relaxed">
              「昨晚這兒有沒有人傷害到你？」「你們沒讓我死，這個傷害已經夠重了。」她說：「我一心想死，現在連這個也做不到。」
            </p>
            <p className="text-gray-700 leading-relaxed">
              接下來幾週的輔導，使我對裘安有了更多的認識。而我對她問題的推測也一個一個瓦解了。她認識主。事實上，她在教會中是一個有委身的領袖人物。她有一位愛她的丈夫，他是一位受人尊敬的牧師。她有四個美好的孩子，一群支持她的朋友，然而她卻想結束自己的生命。
            </p>
            <p className="text-gray-700 leading-relaxed">
              裘安的內在世界和外在的差距很遠。她外面看起來很樂觀，裡面卻是一片黑暗。每一天她的內心都是一片黑暗，黑暗到她自己都可以看見。她每天勉強地把自己從床上拉起來，胸口因沮喪而疼痛。一切都是虛空。丈夫、孩子、朋友——對她而言都不值什麼。事實上，人們使她驚恐。在他們所說的好話中，她看出有狠毒的恨意。
            </p>
            <p className="text-gray-700 leading-relaxed">
              長長的一天拖到晚上，又是冗長的黑夜。她想到只有睡眠是一種解脫。但最近幾個月連睡眠也遠離她了。她會好幾個小時醒著，瞪著天花板或到另一個房間打開聖經，試著禱告讀經。但沒有一樣有用，似乎神也拋棄她了。
            </p>
            <p className="text-gray-700 leading-relaxed">
              到底出了什麼毛病？為什麼從外面看來她擁有了一切，內心裡她卻覺得寂寞荒涼想要自殺？在她停留住院的幾個星期，答案漸漸明朗。雖有許多人在她四周，她卻是孤立的。她斷絕了神和人的接觸，裘安是生活在人間地獄中。
            </p>
            <p className="text-gray-700 leading-relaxed">
              裘安深受沮喪之苦，苦到不想活下去。但沮喪卻不是她真正的問題。在過去三十五年的歲月中，有一些東西使她無法和神和人連結。裘安在成長過程中，似乎沒有完成一個基本的工作，她在一些嬰兒可以自然學會的事上失敗了。她不能做她被創造應該可以做的事。她失敗於如何與人相連。
            </p>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">一、什麼是相連？</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                相連（Bonding）是在情緒上對人產生依附感（attachment）的能力，是在最深的層面和別人產生關係的能力。當兩個人有相連時，他們會分享他們最深的思維、夢想、感覺，而並不怕被對方拒絕。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                瑞比是一個二十七歲的業務員，他因為沮喪而來找我，他不能吃也不能睡。有時候他甚至無法上班，他很絕望。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「你有沒有親密的朋友？」我第一次看到他就問。「我有很多朋友，我和很多人一起工作，在教會也有很多服事。我生命中有不少朋友。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「你可以打電話給誰，他知道你最近幾個星期的感覺？」我又問。「你是什麼意思？」「當我想到親密的朋友，我會想到真正知道我，知道我受傷，知道如何幫助我的人。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「你有沒有毛病？」瑞比說：「沒有人會想知道我的沮喪！我不能告訴任何人。他們會想我有問題。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「這就是啦！你這麼沮喪甚至無法運作，而世界上沒有一個人知道你真正的感覺。你怎麼能期望自己的情況在一個真空中得到好轉？」瑞比看來很茫然：「我不明白你在說什麼。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我所說的就是相連。相連是生命中最基本的理念之一。這是人類基本的需要。神創造我們，並賦予我們一個飢渴——要與祂與別人建立關係，我們的內心深處是一個看重關係的人。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                沒有和人建立起相連的關係，人的靈魂會陷於心理和情緒的問題中。不和人有關連，心靈無法欣欣向榮。不論我們的個性如何，積蓄多少成就，不能與神與人相連，你和裘安、瑞比一樣，會使心靈受苦。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神所創造的宇宙中，任何一事物要成長，必須要有力量和營養。聖經中常以植物來描繪成長。想想植物怎麼生長。它們必須和身體之外的一個東西相連。樹幹連於根，根埋在泥土裡，吸收水份養份送到樹幹；樹幹也有樹枝相連，樹枝有葉子，葉子吸收陽光，把陽光的能量供給植物。
              </p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「我是葡萄樹，你們是枝子。常在我裡面的，我也常在他裡面，這人就多結果子；因為離了我，你們就不能做什麼。人若不常在我裡面，就像枝子丟在外面枯乾，人拾起來，扔在火裡燒了。」（約十五：5-6）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                也許以植物為例最有名的經文就是在約翰福音十五章。在十二節，耶穌指出我們和別人相連的重要性：「你們要彼此相愛，像我愛你們一樣；這就是我的命令。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                缺少了與神與人的相連，我們會慢慢枯乾死去，正如枝子從葡萄樹上砍下來。裘安和瑞比就是因為缺乏情緒上的相連，使他們陷入沮喪的深淵而尋求幫助。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">二、聖經根據</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                為什麼我們對相連的需要這麼強，而我們無法相連對我們的福祉有這麼大的損傷？神是一位有關係的神，祂創造的宇宙也是有關係的。每一件事物的基本都是有關係的，每一個活著的東西都和別的一些東西有關連。
              </p>
              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">神並不孤單</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                但神可以與誰相連呢？只有一位神。答案是神並不是單獨存在。祂存在——而且一直存在——在關係中。祂是三位一體的神。祂是聖父、聖子、聖靈三而一的神。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這三位一體的關係在創世記第一章就已經暗示了。神說：「我們要照著我們的形象，按著我們的樣式造人。」耶穌在約翰福音十七章24節說到祂與父的關係是永恆的：「創立世界以前你已經愛我了。」在創世以前，父與子的關係就是相連的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">聽聽耶穌如何講祂與父的關係：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「我不但為這些人祈求，也為那些因他們的話信我的人祈求，使他們都合而為一；正如你父在我裡面，我在你裡面，使他們也在我們裡面，叫世人可以信你差了我來。你所賜給我的榮耀，我已經賜給他們，使他們合而為一，像我們合而為一。我在他們裡面，你在我裡面，使他們完完全全的合而為一，叫世人知道你差了我來，也知道你愛他們如同愛我一樣。」（約十七：20-23）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                這段經文中有不少重複的「合而為一」及「在裡面」，耶穌強調的就是關係——祂與父的關係及我們與祂的關係。親密的相連是神的形像中一項基本的真理。
              </p>
              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">神是愛</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當我從聖經中去找神的屬性，我還找到一些別的。使徒約翰說「神是愛」。「住在愛裡面的，就是住在神裡面，神也住在他裡面。」（約壹四：16）一切祂所行的及祂最重要的屬性都是慈愛的。我們照祂的形像而造，因此作為一個人及一個基督徒，愛是基本的特質。約翰說：「親愛的弟兄啊！我們應當彼此相愛，因為愛是從神來的，凡有愛心的，都是由神而生，並且認識神。」（約壹四：7）愛是神基本的屬性，也因此是我們基本的屬性。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                甚至真理也在愛之下。當人問耶穌什麼是最大的誡命，耶穌說：「你要盡心、盡性、盡意愛主你的神，這是誡命中的第一且是最大的。其次也相仿，就是要愛人如己。這兩條誡命是律法和先知一切道理的總綱。」（太二十二：37-40）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當我們瞭解存在的基本在於關係，因為這是神存在的方式，我們就會了解為什麼愛是最高的道德。律法是一個結構，或一個藍圖，是為了要去愛。律法是為愛可以表彰的一條道路。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「關係」或「相連」則是神性格的基礎。既然我們是照神的形像被造，「關係」則是我們基本的需要，是我們成為什麼樣的人的基礎。沒有關係，沒有與神與人相連，我們不能成為真正的自己，我們不能成為真正的人。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                再看看我們先前討論過的植物，如果我們把根砍斷，樹就會倒下，無法支撐自己。如果我們將樹與陽光隔絕，樹會生病長不大。如果我們不澆水，樹會枯乾。換言之，如果我們妨礙它與其他受造物的關連，樹不會欣欣向榮。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                如果我們要成長並茂盛，我們必須要根植於愛中。我們實際上就是在將神的愛和人的愛作為我們長大結果的「養份」。我們不能想像把一棵樹放在紙盒中留在車房裡，而會長大開花的。樹不久就會死掉。要成長，一定要有陽光、水分及營養。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們有時候想自己可以供給一切生長所需，不需要別人。我們以為在情緒及靈裡孤苦中，我們仍然可以成長。這個與宇宙基本性質相反的想法，會造成嚴重的問題。
              </p>
              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">當關係破裂</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當亞當和夏娃被創造時，是和神和彼此互相有關係的。從時間的一開始，神就將一個基本的價值放在人際關係中。祂看著祂所創造的人說：「那人獨居不好，」因此祂造了一個「配偶幫助他」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                亞當夏娃和神有一個不會破裂的關係，也和彼此有一個不會破裂的關係，他們可以作完全的自己，沒有衝突，沒有紛爭。他們所有的需要都滿足了，他們存在於一個完善的關係中。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                然後亞當夏娃違背了神，他們吃了不該吃的果子。第一次他們成為與神隔絕的情況。他們分開了，他們不再有他們所需要的基本人際關係，這使得他們被推入一個孤立的情況中——孤立於神，孤立於彼此。他們成為在痛苦中的人。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                從這時候開始，疏離就成為我們最主要的問題。本來有完全的愛，現在則是孤立和恨取而代之。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">破裂的關係成為我們最主要的問題，這點從聖經中的救贖可以看出。聖經稱之為「和好」：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「因為父喜歡叫一切的豐盛在他裡面居住。既然藉著他在十字架上所流的血，成就了和平，便藉著他叫萬有，無論是地上的、天上的，都與自己和好了。你們從前與神隔絕，因著惡行，心裡與他為敵。但如今他藉著基督的肉身受死，叫你們與自己和好，都成了聖潔，沒有瑕疵，無可責備，把你們引到自己面前。」（西一：19-22）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                福音就是關係的重建，也就是相連所包含的意思，相連是使我們與神、與人、與自己連結。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                因為我們活在一個墮落的世界，我們不會天生就能相連。那是必須費力得到的一種發展過程。沒有經過相連的過程，我們註定要孤立與隔絕。不能繼續成長，我們會惡化。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                物理學家有一種形容這種情況的圖形，他們稱之為熱力學第二定律。這個定律是說，在一個封閉的系統，像是我們的宇宙，可用的能量會漸漸用盡。當能量漸減，無秩序會漸漸增加，沒有外界能量的注入，宇宙會漸漸混亂。物理學家稱之為熵。太陽、星星、及充滿在宇宙中的星球會一個接一個地冷卻，成為黑暗的集團，能量分散在太空中，不再能用。它們達到物理學家所謂的「最大亂度」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在心理學和屬靈的領域，這個定律也戲劇化地執行著。如果一個人被孤立，他的世界會漸漸混亂。他會達到最大亂度。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                蘇珊是二十八歲的圖形設計者，她為了沮喪來看我。她說她從有記憶以來就得了沮喪症。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當她大學畢業，沮喪更嚴重了，她說過去幾年，她混亂得令她自己顫抖。有時她的情緒令她覺得一片黑暗，甚至無法想事情，有時她還會聽到腦中有聲音。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                接著幾個星期，我瞭解蘇珊在農場長大，她在五個孩子中排行第三，有兩個姊妹及兩個弟弟。她母親供應了她身體上的需要，但是因為是大家庭，及需照顧只比她小一歲、生病的弟弟，所以經常精疲力竭；她父親一週工作八十小時，孩子的事都交給太太。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                常常孤單一人的蘇珊，經常對自己所住的環境和自己產生困惑，也有很大的恐懼。她怕陌生人，不敢對陌生人說話。她懷疑自己是否真的得救，是否神恨惡她的罪惡思想，是否自己正走向地獄。
              </p>
              <p className="text-gray-700 leading-relaxed">
                蘇珊從未和任何人產生相連感，正像其他與人隔絕的人一樣，她也有「妄想症」的恐懼：她怕別人恨她，會傷害她。漸漸地，經過個人治療的數個月，她加入一個小團體。當她信任團體中的人後，她開始在教會中接觸別人，因為她有足夠的安全感，她開始有相連感，有歸屬感，她的妄想症消失了，甚至還結交了幾位親密的朋友。接觸別人的結果，她的沮喪漸漸好轉。偶爾她仍會覺得憂鬱，但她不再有以前那種黑暗和恐懼。她也想得更清楚了。總而言之，她把熱力學第二定律反轉過來了。當她和別人相連，不再是封閉的系統，她得到新的力量向前走，並掌握自己的生命。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">三、發展的遠景</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                如果一切都正常，我們在嬰孩期就會自然地產生相連感。當我們出生時，我們從一個溫暖、潮溼、漆黑、令人安心的環境進入到一個冰冷、乾燥、光亮、令人不安的地方。我們從媽媽的子宮——那裡可以自動供應我們一切需要——到一個世界，是必須依賴會出錯的人來照顧我們的需要。在我們滑出子宮頸進入光亮的一剎那，我們即是處在震驚的孤立情緒當中。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                你只要看看新生兒，就可以知道那種完全孤立的樣子。然後母親接過嬰兒，抱他，對他輕輕說話。忽然嬰兒經過一種改變。他不再尖叫，他的肌肉放鬆了。他轉向母親尋求溫暖、食物和愛。他情緒上與母親的相連開始了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                隨著時間，孩子把母親的照顧溶化為自己的一部分。他開始存積被母親安慰的記憶。好像孩子把母親放入自己的記憶中。這種溶為己有的行為，使他得到愈來愈大的安全感。他有了一個倉庫，存積愛的記憶，在母親離開時他可以去汲取。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                一個「自我安撫」的系統建立起來了，一個孩子可以在母親離開時，仍然和她有關係，因為她愛這個孩子。他不會馬上就有這個系統，因為他還沒有足夠的愛的經驗。經過千百回的接觸，記憶的足跡終於被建立起來。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當這樣的關係愈來愈強，孩子就踏入了另一個里程碑：他達到了「情緒對象的恆常性」。這個意思就是孩子可以恆常地經驗到自己是被愛的，即使愛他的人不在。並且他可以去愛不在的人，這個人是他已溶為己有的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                如果你曾經有過想到所愛之人所產生的溫暖感覺，你就知道這寶貴能力的豐富。如果當你害怕或在痛苦中，你想到愛你的人而得到勇氣、希望，你就是擁有情緒對象的恆常性。這個現象使得三歲的孩子可以一個人在後院玩而不驚恐，或是一個公司主管在辦公室獨自一人不要太太陪。他們都感到情緒上的安全，即使他們都是獨自一人。這就是耶穌在靈性上所求的，祂求父在我們裡面，祂的愛在我們裡面。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神對我們的方式是一致的。正如孩子發展出「情緒對象的恆常性」，我們也在發展出「屬靈對象的恆常性」。當我們重生時，我們開始將神的記憶溶為己有。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當我們聽到聖經作者一再提醒人們要「紀念」耶和華所作的，祂帶領以色列人從這裡到那裡，祂又從這樣那樣的敵人手中拯救他們，這實在令人振奮。神喚醒我們屬靈經歷的記憶，使我們得到激勵，與祂繼續向前進。我們建立對神的「屬靈對象的恆常性」，就是經由一年一年不斷信靠祂所存留的記憶。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                一個孩子與母親之間的情緒相連，始於孩子體內各種生理的、心理的、神經的過程。當他被養育時，他的身體和情緒開始發展。神按立母親成為「使嬰兒進入生命」的人，而養育的過程是神聖的。心靈的相連，驅使孩子進入人的領域，孩子也發展出對人類的歸屬感。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                雖然自古以來母親直覺地知道與孩子相連的重要性，直到這個世紀科學家才開始研究這些現象。一九四九年有一個對育幼院作的研究。這些嬰兒身體的需要都被滿足了。餓了有人餵，尿布溼了有人換。然而因為照顧的人手不足，只有一部分嬰兒被抱及有人對他們說話。沒有被抱的嬰兒顯著地有較高的生病率及死亡率。而且，他們心理的成長不是緩慢就是停頓。這個研究，加上其他類似的研究，漸漸證明當嬰兒缺乏情緒的相連，他會生病或死亡，而成長也會受阻礙。
              </p>
              <p className="text-gray-700 leading-relaxed">
                如果嬰兒在第一年相連得好，第二年他會開始學習一些獨立。然而在這個階段，相連的過程一樣重要。他需要情緒的安全感才能去嘗試他新發現的獨立。在穩固的相連關係中，他學習分辨好與壞，以及如何面對失敗。這安全感使他到公園，建立與朋友的相連，使他漸漸有自信，成為團體中的一份子。當他在團體中感覺不錯時，他可再建立更進一步的情緒連結，首先與同性然後與異性，開始有約會的關係。幾年以後，他會需要一個足夠與朋友或家人的依附，使他能離開家庭，去上大學或開始謀生。在那裡他會需要朋友，幫助他進入成人世界，在那裡他會形成情緒的依附，支持他繼續生活，成為往後的燃料。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">四、相連的重要</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                愈來愈多的研究顯示，缺少相連會影響人疾病恢復的能力。這些疾病包括癌症、心臟病和中風。有一個研究心臟病復原情形的研究顯示，讓病人照顧寵物，他會復原得比沒有寵物的病人快。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                最近心臟病學界有證據顯示，病人的情緒與病人會不會發病有很大的關係。實驗證明病人血液中的化學性質會因為有苦毒的思想而改變。現在醫生的處方中包括訓練病人變得更慈愛、更信任別人。一個人去愛和與人連結的能力，為自己心理、生理奠定了健康的基礎。研究指出當我們在一個愛的關係中，相連的關係中，我們能生存和成長。當我們孤立，我們就慢慢死亡。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">聖經上很多地方說到我們的「心」會影響我們的生命：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3 space-y-1.5">
                <p className="text-gray-700 italic">「你要保守你心，勝過保守一切，因為一生的果效是由心發出。」（箴四：23）</p>
                <p className="text-gray-700 italic">「心中安靜是肉體的生命，嫉妒是骨中的朽爛。」（箴十四：30）</p>
                <p className="text-gray-700 italic">「心中喜樂，面帶笑容；心裡憂愁，靈被損傷。」（箴十五：13）</p>
                <p className="text-gray-700 italic">「困苦人的日子都是愁苦；心中歡暢的，常享豐筵。」（箴十五：15）</p>
                <p className="text-gray-700 italic">「喜樂的心乃是良藥；憂傷的靈使骨枯乾。」（箴十七：22）</p>
                <p className="text-gray-700 italic">「人有疾病，心能忍耐；心靈憂傷，誰能承當呢？」（箴十八：14）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們情緒及心理的健康決定於我們的心，而我們的心又決定於我們與別人及神如何相連。聖經早已告訴我們，現在科學又證明給我們看。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                如果我們進入世界，學習依附別人，信任別人，我們就開始在情緒、生理、心理上發展。我們就會照著創造者的計劃成長。但若我們不能學會和人相連，我們的成長會受阻礙，我們可能會遭遇像泰瑞一樣的問題。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                泰瑞是個二十七歲極為成功的房地產中介。他有自己的公司，又在城裡成立了很多辦事處。他已婚，有一女二男。他因為壓力日增及憂慮來尋求治療。他越成功，壓力越大。他想問題直接和工作有關。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「禱告和讀經都沒有用，」他承認。「不會減輕我一分一毫的壓力。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當我們看他的生活時，我們發現一項令人吃驚的事實：他的工作並沒有增加壓力，而是壓力驅使他工作。每次他覺得有壓力和痛苦，他就去工作。工作保護他避免痛苦。在工作中，他有主控權，在工作中，他可以表現，但他年紀愈大，愈容易達到自設的目標時，他的滿足感就愈少，也愈容易痛苦。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們把注意力轉回到家庭生活。泰瑞說他和妻子結婚，是因為她的「美麗、個性、天真及頭腦」。他非常沒有安全感，甚至不能忍受她離開視線。每次他離開她，他就陷入沮喪中。沮喪至極，他甚至會忘記太太的長相，而必須看著她的照片，才能記起她是愛他的。諷刺的是，他和她在一起時，他又不覺得和她很親密。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                有一天當我們在探討泰瑞最近一次的沮喪時，發現他的沮喪似乎有一個無底洞這麼深。忽然，泰瑞哭出來，極為恐懼地說：「我要我的媽媽在我裡面！她應該要住在我裡面而不走開的！」泰瑞從來不知道有關「對象恆常性」的書，但他的靈裡知道他缺少什麼。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                泰瑞開始去教會的一個支持團體。他對其中幾個能信任的男人打開心門。當他說出自己的問題，並聽別人分享他們的事情，他漸漸開始與人有聯絡。這樣與人的依附之感使他得到安慰。經過一段時間，這安慰就常駐在他裡面了。他發現無論他在哪裡，他都可以被愛。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                他和朋友相連的能力也帶入了他的家庭生活。他第一次可以同情他的妻子對兒子行為問題的關心，以及傾聽對功課及男孩子的抱怨。他們的關係靠近了。他以前和男孩子玩足球，但現在愈來愈可以和孩子親密；他們可以表達感情，而他們行為上的問題也慢慢解決了。
              </p>
              <p className="text-gray-700 leading-relaxed">
                在我們最後一次談話時，泰瑞說：「我不知道神怎麼工作的，祂使我和別人發生聯絡，而解決了我的痛苦。但我仍希望祂用更簡單的方法。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">五、小心假老師</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                如果你沒有學會和你出生的家相連，通常不會有「更簡單的方法」。不幸的是，有些屬靈的牧師使它變得更困難。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                不知有多少次我看到受傷、孤立的人，因為基督徒輔導的幫助，開始瞭解他們情緒上對別人的需要。當他們開始對其他肢體敞開時，他們才第一次瞭解了加拉太書六章2節所說的：「你們各人的重擔要互相擔當，如此就完全了基督的律法。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                然而基督徒領袖會告訴他們，這種重視「關係」的教導是人文主義，他們應該「單單依靠神」。這種勸告對受傷的人可能造成很大的傷害。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當聖經告訴我們，我們需要愛和依附感，屬靈領袖怎麼會說，注重關係是錯的呢？基督教導我們，全律法都包括在愛神和愛人如己裡了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我想基督會指著這些領袖說：「他們把難擔的重擔捆起來擱在人的肩上，但自己一個指頭也不肯動。」（太二十三：4）他們阻止受傷之人去找尋瞭解他們痛苦的人，而自己又做什麼去減輕他們的痛苦。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這些教師少了成聖的「關係」面。成聖是我們與神、與人、與自己都和好。這三者中任何一方面關係破裂，我們都會有麻煩，反關係的教導不是來自於神。使徒約翰說：「我們因為愛弟兄，就曉得是已經出死入生了。沒有愛心的，仍住在死中。」（約壹三：14）我們能愛神卻不愛人的教導是異端。「人若說我愛神，卻恨他的弟兄，就是說謊話的，不愛他所看見的弟兄，就不能愛沒有看見的神。」（約壹四：20）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這些教師關心規條和理論的正確更甚於關心人的傷害。耶穌說：「我喜愛憐恤，不喜愛祭祀，你們若明白這話的意思，就不將無罪的當作有罪的了。」（太十二：7）基督徒中的受傷者需要憐恤和愛，卻被告誡遠離「關係」，要自我犧牲，以得痊癒，沒有比不含著憐恤和愛的神學更遠離神的心意了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                耶穌所引的「我喜愛憐恤，不喜愛祭祀」出自何西阿書六章6節。「憐恤」的希伯來文有「歸屬之愛」或「忠誠之愛」的意思，它強調「屬於在愛中關係的雙方」。
              </p>
              <p className="text-gray-700 leading-relaxed">
                當我們開始瞭解人的情緒有相連的需要，我們會明白為什麼這麼多人在掙扎，以及孤立是否能造成成長是不合聖經的。像泰瑞一樣，很多人可能在憂慮、壓力中掙扎許久，直到他的心深深紮根於愛中。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">六、依附的好處</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                依附有很多好處，我一下子想到三項：和神和人有依附或相連的人，會有一個好的道德基礎，他們也有處理壓力的較大能力，以及他們的成就比較有意義，容我解釋。
              </p>
              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">1. 道德基礎</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經談到道德是基於愛，不是基於原則規條。如果神創造我們是會對神對人產生相連需要的話，則當我們在外流浪時，我們會感到失落及痛苦。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                好母親不會因為「應該」而抱孩子。她因為看不到孩子不舒服而去安慰他，她愛他。一個朋友不會因為「應該」而拜訪朋友，她會因為對方的病痛而去安慰她。只有憐恤驅使我們真正付出犧牲的愛。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經多處記載，耶穌「憐憫」他們。希臘字的「憐恤」有「很深的依附和同情」之意。耶穌給予人們的，不是祂覺得祂應該，或那是一件對的事，祂給予深的同情，分享別人的感情，那是從依附才能產生的。有時候我問一組人：「如果我給你一個球棒，而你可以打我，你會打嗎？」通常他們說不會。「為什麼？」「因為打人不對」有人回答。「因為你會痛，我不希望你痛。」另一個人回答。「你會相信哪一個人？你會把棒子給誰？」我問小組。他們很快回答，那個怕我痛的人最不可能打我。那人有同情的能力，他會體會我的感覺。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們常做一些我們知道不對的事，規則不會叫我們守規矩。愛才能使我們有道德規範。我們想到我們可能傷害愛我們的人，而不是想到我們必須守住那些規條。
              </p>
              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">2. 處理壓力的能力</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當人有好朋友支持時，他們更能處理壓力的情況。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這種說法是我不久前才學到的。我看到兩個有錢人，他們都很有成就，在他們的領域很受尊敬。兩人在社區及教會都很活躍。他們都有很多很多朋友。然後，在同一星期，他們都破產了。在後來的幾個月中他們的妻子都離開了他們，孩子們都去和母親同住，他們之間的相似之處至此為止。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                第一個人沮喪到想自殺。他把自己關在屋子裡幾個月，也不回覆朋友的電話。因為無法處理沮喪，他開始服用藥物，連藥物也無法解決他的痛苦時，他離開了此地。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                第二個人也沮喪，但他找了幾個朋友開了一個會。他告訴朋友們，他非常需要他們幫忙來度過未來幾個月，他要求朋友請他吃中飯，以便在不同的日子中給他打氣，使他重整旗鼓。他找輔導來幫助他克服婚姻失敗、失去孩子的沮喪。一年之後，他東山再起，也開始重建自己的生活。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這兩個人不同之處不僅在於他們如何處理危機。他們依附的情形有根本的不同。第一個人從來不讓自己需要別人，他沒有深的依附。在大災難發生時，他是孤單一人，甚至不知從哪裡去找尋幫助，因為他與人的相連太淺。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                第二個人以前酗酒，會與一群人在戒酒中心好幾年。他學習過與人深深依附的重要。他知道從別人，以及從神來的幫助可以支持他。在他裡面有一個熱愛人的靈，而非只愛財富及成就。結果就是他能跨出去，汲取別人的力量。他與神與人的相連，使他度過難關。
              </p>
              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">3. 有意義的成就</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                與人相連者比較能忍受孤單，並能利用獨處的時間作建設性的事。單獨一人並不意味孤立。正如前述的「情緒對象恆常性」，與人相連者內心有對所依附的對象的愛，這愛儲存在情緒的槽中，而它會自行繁衍一生之久，愈來愈多。因為他們不怕獨自，所以他們可以完成較多的事。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                他們也知道工作的真正理由，他們不是為了囤積更多的擁有物而工作。他們不是為了逃避痛苦而工作。他們為了人類的大家庭而工作。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                有一個做房地產的人抱怨他的工作沒意義。他只是在賺錢，他情緒上與人分離，成就感完全是工作取向的。另一個注重關係滿有愛心的人說到他的房地產工作：「我愛我的工作。我可發揮所長，建立一個好社區，很多家庭可以好好養大孩子。我喜歡那種使別人有一個好生活環境的感覺。」兩個人有相同的工作，但對工作的看法真是有天壤之別。
              </p>
              <p className="text-gray-700 leading-relaxed">
                與人相連使人的成就有意義。更進一步，相連使我們的發展有燃料可用。學習如何與人相連使我們更有能力依附別人，使我們發展成為神設計的人。但我們如何學習「如何與人相連」呢？我們先看，如果我們不能與人相連，會有什麼後果，再來看，如果成長過程中失去相連，要如何獲得？
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
                '相連（Bonding）是情緒上對人產生依附感的能力，是人類的基本需要——就像裘安表面上什麼都不缺，卻因從未真正與神與人相連而深陷孤立與絕望，證明外在成就無法替代真實的情感連結。',
                '相連有堅實的聖經根據：三位一體的神本身就存在於永恆的關係中（約十七：20-23），「神就是愛」（約壹四：16），愛與關係是神性格的基礎，因此也是照祂形像所造之人最基本的需要。',
                '相連的發展始於嬰兒期母嬰之間的依附，逐漸建立起「情緒對象的恆常性」（即使所愛的人不在眼前，仍能恆常地經驗到被愛），信主後我們同樣需要發展對神的「屬靈對象的恆常性」。',
                '缺乏相連會實際影響身心健康（如心臟病復原速度、免疫力），聖經也早已指出「心」影響一生的果效（箴四：23）；與人相連者有較好的道德基礎（憐恤驅動的愛而非規條）、更強的抗壓能力，以及更有意義的成就感。',
                '要小心把「單單依靠神」講成排斥人際關係的假教導——這種教導阻止受傷的人尋求幫助，卻不減輕他們一絲痛苦，真正的成聖包含與神、與人、與自己三方面的和好，缺一不可。',
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
              <h4 className="font-semibold text-gray-800 mb-2">依附理論（Attachment Theory）與本章的呼應</h4>
              <p className="text-gray-700 leading-relaxed">
                本章「情緒對象的恆常性」概念，直接呼應發展心理學家瑪格麗特·馬勒（Margaret Mahler）與約翰·鮑比（John Bowlby）的依附理論：嬰兒透過與主要照顧者反覆的互動，內化出「即使對方不在場，愛的關係依然存在」的心理表徵。這個能力一旦建立，會成為人一生安全感的基石；若在關鍵發展期缺席（如1949年孤兒院研究中被觸摸不足的嬰兒），會直接影響身心健康甚至存活率。作者把這套心理學觀察與「屬靈對象的恆常性」對照，是全書「神學與心理學可以互補而非對立」核心論點的具體示範。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">三一神論如何為「人需要關係」提供神學根基</h4>
              <p className="text-gray-700 leading-relaxed">
                本章用三位一體（父、子、聖靈永恆的合一關係）來論證「關係」不是被造之後才有的附加需求，而是神自己存有方式的本質，人按神形像受造，因此「需要與人連結」不是軟弱或不成熟的表現，而是反映神形像的正常運作。這對常把「屬靈成熟」等同於「越來越不需要別人」的觀念，是一個重要的神學修正。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「假老師」的教導為何特別傷人</h4>
              <p className="text-gray-700 leading-relaxed">
                作者引用太二十三章4節、何西阿書六章6節，指出把「單單依靠神」講成排斥人際支持的教導，本質上是把難擔的重擔捆起來擱在受傷者肩上，卻不肯用一根指頭去減輕。這類教導之所以特別具破壞性，是因為它往往披著屬靈的外衣、引用經文，讓受傷的人以為尋求人的幫助本身是不屬靈、不夠信靠神的表現，因而更深地退回孤立——這正是本章開頭裘安悲劇的核心成因之一。
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
              '像瑞比一樣，你身邊有沒有人「知道你很多事」，卻不是那種你可以打電話告訴他「我最近真實感覺」的人？這兩種關係有什麼不同？',
              '你有沒有「情緒對象的恆常性」的經驗——當你害怕或痛苦時，想起某個愛你的人就能得到安慰？如果沒有，你覺得原因可能是什麼？',
              '本章說相連需要透過「經驗」建立，不是天生就有。你目前最深的相連關係是怎麼一步步建立起來的？',
              '你是否曾聽過類似「假老師」的教導，把倚靠人講成不屬靈？那樣的教導對你（或你認識的人）造成了什麼影響？',
              '裘安外表擁有一切，內心卻孤立絕望。你自己的生活中，有沒有「外表看起來很好」卻其實孤立的部分？',
              '本章提到相連的人有較好的道德基礎、抗壓能力和成就感。回想你生命中相連感最強的一段時期，那時你的道德選擇、抗壓力、工作意義感是否也比較健康？',
              '如果耶穌現在問你「你可以打電話給誰，讓他知道你這幾週真實的感覺？」，你會想到誰？如果一時想不到，這一週你願意跨出哪一小步？',
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
              <h4 className="font-semibold text-green-700 mb-2">📞 打一通「瑞比不敢打」的電話</h4>
              <p className="text-gray-700 mb-2">
                本週主動聯絡一位你信任的人，誠實告訴他你最近真實的狀況（不是報平安式的「還好」），練習讓自己被真正認識。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🌳 檢視你的「相連清單」</h4>
              <p className="text-gray-700 mb-2">寫下：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>目前生命中，有誰是你真正相連、可以分享最深感受的人？</li>
                <li>有沒有哪個領域（工作、婚姻、信仰）你其實很孤立，卻用忙碌或表現來掩蓋？</li>
                <li>下一步可以向誰、用什麼方式打開一點點心門？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 默想約翰福音十七章20-23節</h4>
              <p className="text-gray-700 mb-2">
                連續幾天默想耶穌為門徒合一的禱告，思想：三一真神彼此完全的相連，如何成為你與神、與人建立關係的榜樣與盼望。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，祢是三位一體、永恆相連的神，也照著祢的形像造了我，讓我需要與人連結。求祢光照我生命中孤立、假裝堅強的部分，賜我勇氣讓人真正認識我，也賜我一顆願意付出憐恤、與人深深相連的心。願我不再單靠自己的力量支撐生活，而是學習在祢與弟兄姊妹中間，建立真實而深厚的相連。奉耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
