import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book34Ch14() {
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
        <p className="text-cyan-700 font-semibold tracking-wide mb-1">第五篇　長大成人</p>
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-700 to-teal-700 bg-clip-text text-transparent">第十四章</h1>
        <h2 className="text-xl font-semibold text-gray-700">什麼是成人？</h2>
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
              莎拉對什麼都會焦慮。「我無法放鬆，無論事情多順利，我多成功。我老是會想事情會出錯，或我做的不夠。」她第一次來找尋輔導就這樣承認。
            </p>
            <p className="text-gray-700 leading-relaxed">
              她大多是為了別人如何看她而擔憂。她常常在警覺狀態，做任何事都要得到別人認可。
            </p>
            <p className="text-gray-700 leading-relaxed">
              莎拉總是有一個年長的女人在她生命中，是她仰慕的，卻又很難取悅的。從她二十出頭到近四十歲，她受這些女人的折磨，她們似乎永遠舉止恰當，又甜美又關心人，但有批評的性格。她們會說：「你如果換換窗簾，客廳會看起來溫暖一點。」「你如果管教嚴一點，你的小孩會比較聽話。」不管別人說什麼，莎拉會去迎合，並等著她們的認可。當她們不認可，她會很有罪惡感，但她們認可時，她也只得到短暫的滿足。
            </p>
            <p className="text-gray-700 leading-relaxed">
              莎拉不但迎合這些女人，她也努力取悅丈夫。她尋求丈夫的認可，得不到時就很痛苦。在性方面，她不能享受也不滿足，她常在想自己表現「夠不夠好」。這些年來她漸漸失去性方面的興趣，但她不想讓丈夫覺得自己冷感。
            </p>
            <p className="text-gray-700 leading-relaxed">
              可憐的莎拉。她像是小孩要生存於大人世界。她做錯了什麼？
            </p>
            <p className="text-gray-700 leading-relaxed">
              莎拉在她所有的人際關係中都失敗了。這些女人和她丈夫都在她之上，她似乎有義務去贏得被接納和認可，才會覺得自己沒問題。她像一個小孩，繼續不斷尋求父母的認可。她是一個在大人世界中的小孩。
            </p>
            <p className="text-gray-700 leading-relaxed">
              莎拉無法享受與其他成人的關係。成人所有的自由——做決定，不需別人認可，評估裁決自己的表現，選擇自己的價值觀，說出自己的意見，自在地表現不同意別人的地方，享受與配偶的性關係，與配偶關係平等——都不能在她身上找到。
            </p>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">一、問題的性質</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                每個人都面對同樣的問題：小孩出生在大人世界中，而且被賦予要長成大人的責任。我們被生為小孩，伏在大人的權柄之下。經過時日，我們自己變成那個權柄。為自己的生活負責。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們用這一篇來說明長大的問題。長大成人是一個過程，我們必須從「一人在上，一人在下」的關係，進入到與別的成人平等的關係中。長大成人需要承擔權柄，這是神形像中重要的一部分。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                權柄有幾個部分：能力、知識、職務、影響、和順服。成人有能力和權利去下命令，要求順服、採取行動、做最後決定。成人的權柄常常從知識或專業得到。他們也因為有那個職務或地位而有權柄。父母之所以有權管教孩子是因為他們是父母。並且，成人的權柄是因他們在掌握範圍內有影響力而得的。最後，權柄是因為能放棄權利，在順服中服事別人而來的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                以神的形像重述一次：我們要在神給的範圍內，對我們的生活下達命令，有知識，有職務或是角色，有影響力，並能順服神和人的權柄，沒有衝突。難怪長大成人這麼難。有許多外力和環境阻撓我們長大。但我們有神的形像，必須完成任務。如果我們不取得成人的地位，如果我們在成人的年紀繼續做小孩子，我們會遭受許多心理和情緒上的痛苦。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                沒有長大成人的大人，會覺得在同年齡的人之下，或者他們會自衛地採取在別人之上的地位。如果要克服罪惡感、焦慮、沮喪、性障礙、發展才能、及服事上的種種困難，這兩種情形都使長大成人變成一種不可避免的工作，長大成人的過程是從在人之下，智慧身量漸漸增長，直到在成人世界中變為成人（路二：52）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在成人的過程中，我們承擔越來越多的責任，也越來越有能力處理它們。成人認同成人世界中的角色，能做成人的事而沒有衝突。像發展事業、在性生活中的委身、發展雙向的友誼、對待別的成人像是同輩、有自己的意見。成人對自己的生活有一種勝任感。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這樣的過程始於與人相連、有界限、能分離、解決善惡的問題，但最終乃是要從一個人之下的地位（像一個孩子與父母及其他成人的關係），成長而進入一個站在成人的立場、與別的成人平等的關係。因此就能操練神所賦予的恩賜與責任。這是向成人世界跳躍的一大步。然後我們就能成為弟兄姊妹，在天父之下。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">耶穌要我們從人底下出來，但同時要我們尊重在上有權柄的人：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「文士和法利賽人坐在摩西的位上。凡他們所吩咐你們的，你們都要謹守遵行，但不要效法他們的行為。因為他們能說不能行。他們把難擔的重擔，捆起來擱在人的肩上，但自己一個指頭也不肯動。他們一切所做的事，都是要叫人看見。喜愛人在街市上問他安，稱呼他拉比。但你們不要受拉比的稱呼。因為只有一位是你們的夫子，你們都是弟兄。也不要稱地上的人為父，因為只有一位是你們的父，就是在天上的父。也不要受師尊的稱呼，因為只有一位是你們的師尊，就是基督。」（太二十三：2-5，7-10）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                他要我們遵守摩西的律法，但不要認為別人在我們之上。不要稱別人為父，因為神是我們基督徒成人的父，成人都互為弟兄姊妹。不要視別人為領袖，因為基督才是頭。他呼召我們信徒平等，但也不忽視別人所在的職務，我們要尊重在上的權柄，但我們仍然在神之下是平等的弟兄姊妹。順服他們是因為順服神，不是順服人。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當人認為別人在他們之上，他們仍然站在孩子的地位上，認為自己在人之下而非在神之下，這種想法使我們在跟隨神、尋求神的事上有困難。這種「討人喜歡」的心態，會使我們不能聽神的吩咐。「雖然如此，官長中卻有好些信他的，只因法利賽人的緣故，就不承認，恐怕被趕出會堂。這是因為他們愛人的榮耀，過於愛神的榮耀。」（約十二：42-43）這些信徒不能操練信心，因為他們需要從人的權柄得到認可，他們並未長大。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                比較這段經文和另一段說到耶穌的話：「夫子，我們知道你是誠實的，什麼人你都不徇情面，因為你不看人的外貌，乃是誠誠實實傳神的道。」（可十二：14）耶穌不怕人，他也不需要人的認可。結果就是，他可以誠實傳神的道，讓人自己去擔心他們喜歡或不喜歡。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                事實上，耶穌警告我們如果大家都喜歡我們可能有問題。「人都說你們好的時候，你們就有禍了。因為他們的祖宗待假先知也是這樣。」（路六：26）討人的喜歡，可能一口兩舌，也會讓我們看不見神的真理。「你們互相受榮耀，卻不求從獨一之神來的榮耀，怎能信我呢。」（約五：44）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅也說要謹防討人喜歡的陷阱：「但神既然驗中了我們，把福音託付我們，我們就照樣講，不是要討人喜歡，乃是要討那查驗我們心的神喜歡。」（帖前二：4）耶穌和保羅都知道，對成人做有權柄的教導，不可能去尋求人的認可。那是孩子做的事，而孩子不可能做成人的事。因此，尋求神的認可，不去討人的喜歡，是進入成人世界的重要一步。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                成人做決定、表達意見、訂定價值觀，都不受父母或父母形像權威者的影響，他們贊成與否不會影響成人的決定，以及法律上的效果。成人世界帶來很多自由與責任，但主題仍是：成人不需要別人想法、感覺、或行動的「認可」。而成人也必須為自己的想法、感覺、行為的後果負責。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                莎拉是沒有長大成熟的好例子。她裡面沒有自己的「認可」，她不能照她所認為適當地去做去想，她需要一個父母形像的人給她認可。除非她從別人的支配中出來，她將承受很多焦慮。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                長大成人是一個獲取管理生命權柄的過程，你也許可以想到一些人，他們掌握自己的生命，以成人的態度生活，他們知道他們所相信的，為自己想通事情、做決定，不靠別人的認可生存，對某方面或幾個方面來說是專家。在這種人的身邊，我們會有一種感覺。他們是有權柄的。他們是長大成人的。
              </p>
              <p className="text-gray-700 leading-relaxed">
                你可能也看見一些人，他們等著別人認可，等著別人告訴他們想什麼、相信什麼，他們盲目地跟隨權威人士。他們很容易受別人的想法意見影響，搖來擺去。別人對他們的影響太大，常常使他們有強烈的罪惡感和焦慮。他們還沒有長大成人。這些都是長大成人的問題，之後，我們才能自由選擇去順服神的權柄。讓我們來看看權柄的聖經基礎。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">二、權柄的聖經基礎</h3>
              <p className="text-gray-700 leading-relaxed mb-2">起初，神創造天地，並交付給人管理，他給亞當夏娃權柄：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「神說，我們要照著我們的形像，按著我們的樣式造人，使他們管理海裡的魚，空中的鳥，地上的牲畜，和全地，並地上所爬的一切昆蟲。神就賜福給他們。對他們說，『要生養眾多，遍滿全地，治理這地。也要管理海裡的魚，空中的鳥，和地上各樣行動的活物。』」（創一：26，28）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                在這極高的權柄中，孕育著創造宇宙的能力。神給人自由成為他受造物的真正權柄，有真正的責任及承擔真正的後果。這是沒有預演的。「耶和華神用土所造成的野地各樣走獸，和空中各樣飛鳥，都帶到那人面前，看他叫什麼。那人怎樣叫各樣的活物，那就是他的名字。」（創二：19）聽聽看這句話，有多大的授權和自主：「那人怎樣叫各樣的活物，那就是他的名字。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在這極大的權柄中，唯一的條件就是順服更高的權柄：神。神告訴亞當夏娃，在神給的責任範圍中，可以自由決定。他們不可違背神去吃分別善惡樹的果子，越過神給他們的權柄。他們吃的日子必定死。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這是一個模式。神給我們很大的權柄和管理，給我們成長和責任，給我們生命很大的自由。隨之而來的，是順服神的責任，以及自己承擔失敗的後果。注意受託管有三個要點：權柄、本分、負責任。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神給我們這麼大的信任，當亞當夏娃違抗神，結果是很慘重的，我們都承擔了第一對夫妻的後果，我們若對自己的生活沒有權柄，我們也會感覺到個人要承擔的後果。簡言之，當我們做孩子卻承擔了成人的責任，我們就有麻煩了。這就是亞當夏娃做的。他們聽蛇的話，帶來了嚴重的後果。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                也許在神給你的範圍內，你因為沒有好好運用權柄而承受後果。也許你的財務有危機，或你對信仰有懷疑，或你的小孩難以控制，或你無法發揮才能。無論哪方面，當我們不將神交付的管理好，我們就有麻煩了。這不是神的處罰，這是神對我們信任和託管的確認。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這是當初神給的權柄，但墮落之後，我們對生命不再有自由的權柄。我們成為奴僕，罪對我們有權柄了。羅馬書的主題說到我們如何成為罪的奴僕，如何因著神的恩典我們又重獲自由，成為義的奴僕（羅六：17-18）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                救贖是將墮落的結果反轉過來——回到起初我們所享有的自由和權柄中。我們如今在新的地位上與「新的亞當」，也就是耶穌聯合，而耶穌是不會和神作對的。這末後的亞當成為「叫人活的靈」（林前十五：45）。因此，與耶穌聯合就是回到真正的權柄，是不會失敗的。何等大的救恩！
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                所以我們要重新獲得對生命的權柄，直接在乎我們如何「在他裡面」與神同行（西三：3；約壹二：4-6；約壹一：5-7；西二：6）。我們越與他認同，我們就越像他，我們在管理自己的生命中的失敗就越少。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                權柄自始就存在，神是最終極的權柄，在一切之上。神既然有權柄，我們有他的形像，我們也有權柄。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                舊約中，神將很多人放在權柄的位置上高過別人。「你們要按著各支派，選擇有智慧，有見識，為眾人所認識的，我立他們為你們的首領。」（申一：13）神一直要君王領袖與他同行，並帶領百姓歸向他，走他的道路。在家庭中，也有權柄和結構，但仍然是那三個重點：權柄、本分、負責任。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                舉例而言，父母在小孩之上有權柄，要教導他們神的事和當行的路。「我今日所吩咐你的話，都要記在心上，也要殷勤教訓你的兒女，無論你坐在家裡，行在路上，躺下，起來，都要談論。」（申六：6-7）父母在孩子的生命中是神的代表，以後孩子才能歸向神，伏在神的權柄中。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當孩子從父母中得到教導，他們將順服的心變成自己的一部分，預備好跟隨天父，正如他們聽從地上的父親一般。「當照耶和華你神所吩咐的，孝敬父母，使你得福，並使你的日子在耶和華你神所賜你的地上，得以長久。」（申五：16）當孩子在神的事情上漸漸被餵養，他們經由順服會認同神的法則。在舊約中，這能使族與族之間保持良好的關係，並使他們一生蒙福。如果他們學習到正確的生活法則，又能與親戚相處，他們的前途會比較平坦。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                舊約中有權柄的角色是神形像很重要的彰顯。從亞當夏娃開始，到摩西，到十二支派領袖，到士師，列王，然後是先知，一直都在預言基督的來臨。到那時，真正的王要來，是一切權柄的所在。他將建立自己的國，以權柄掌管一切。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">當他建立權柄時，萬有都要臣服於他。而他這樣的權柄卻是完全順服父神的，以致神將建立最終極的權柄。保羅在哥林多前書十五章22-28節告訴我們：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「在亞當裡眾人都是死了，照樣，在基督裡眾人也都要復活。但各人是按著自己的次序復活。初熟的果子是基督，以後在他來的時候，是那些屬基督的。再後末期到了，那時，基督既將一切執政的，掌權的，有能的都毀滅，就把國交與父神。因為基督必要做王，等神把一切仇敵，都放在他的腳下。盡末了所毀滅的仇敵就是死。因為經上說：『神叫萬物都服了他。』既說萬物都服了他，明顯那叫萬物服他的，不在其內了。萬物既服了他，那時，子也要自己服那叫萬物服他的，叫神在萬物之上，為萬物之主。」</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                這是救贖的計劃。基督以權柄奪回萬有歸神，自己也服在神的權柄之下。神給基督權柄大能，使萬有都歸回順服基督，基督又將一切交與父神。何等令人敬畏的救贖！正如神作在耶穌身上，耶穌也作在我們身上。神給我們權柄去贏回失去的，再將它歸回基督，基督將一切歸回神。神真實地讓我們在爭戰中有份，而這需要我們做兩件耶穌也做的事。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                首先，我們必須順服權柄，學習順從。「基督在肉體的時候，既大聲哀哭，流淚禱告，懇求那能救他免死的主，就因他的虔誠蒙了應允，他雖然為兒子，還是因所受的苦難學了順從。」（來五：7-8）我們第一要學習順服父母，然後是主。這使我們經由受管教而完全。「他既得以完全，就為凡順從他的人，成了永遠得救的根源。」（來五：9）我們必須能順服神的權柄，將神的形像內化成為我們裡面的一部分。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                第二，我們必須對交付我們的範圍運用權柄，贖回失去的，將它歸回神。我們對自己生命中的每一部分要運用，跟隨他的榜樣，成為救贖計劃中的一部分，然後我們要與他同做王。在新約中，耶穌在不同的情況都顯出他的權柄，他要我們也如此。讓我們來看看耶穌如何運用權柄，並明瞭我們被賦予多大的權柄。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">能力</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3 space-y-1">
                <p className="text-gray-700 italic">「眾人都驚訝，以致彼此對問說，『這是什麼事，是個新道理啊。他用權柄吩咐污鬼，連污鬼也聽從了他。』」（可一：27）</p>
                <p className="text-gray-700 italic">「耶穌說：『你們這小信的人啊。為什麼膽怯呢？』於是起來，斥責風和海，風和海就大大地平靜了。眾人希奇說：『這是怎樣的人，連風和海也聽從他了。』」（太八：26-27）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                耶穌彰顯他有能力做事，他以能力證明他的權柄。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">專精知識</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「耶穌講完了這些話，眾人都希奇他的教訓，因為他教訓他們，正像有權柄的人，不像他們的文士。」（太七：28-29）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                耶穌認識神的話，並有解釋的技巧、知識，他的聽眾可以感覺他有權柄。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">職分</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「因為父怎樣在自己有生命，就賜給他兒子也照樣在自己有生命。並且因為他是人子，就賜給他行審判的權柄。」（約五：26-27）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                授權就是將權柄給別人，耶穌從父神接受權柄。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">影響力</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「當耶穌在會堂裡趕出一個污鬼後，耶穌的名聲就傳遍了加利利的四方。」（可一：27）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                經由操練恩賜，耶穌對人有了影響力。當人因技術，知識，和才幹被人尊敬，他們贏得了影響力，可以一直使用它們。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">順服</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「耶穌叫了他們來說，『你們知道外邦人有君王為主治理他們，有大臣操權管束他們。只是在你們中間不可這樣。你們中間誰願為大，就必作你們的用人。誰願為首，就必做你們的僕人。正如人子來，不是要受人的服事，乃是要服事人。並且要捨命作多人的贖價。』」（太二十：25-28）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-2">像耶穌這樣有權柄，條件是能放棄權利服事別人。他順服父神及十字架。我們要效法耶穌的順服：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「你們當以基督耶穌的心為心。他本有神的形像，不以自己與神同等為強奪的。反倒虛己，取了奴僕的形像。成為人的樣式。既有人的樣子，就自己卑微，存心順服，以致於死，且死在十字架上。」（腓二：5-8）</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                正如耶穌在不同的方面成為權柄，我們長大成人也將成為權柄，經由操練能力，持有神所賜的職分，發展專精知識，運用影響力，以及順服別人。耶穌在帶領我們。他與我們一樣，只是他沒有犯罪（來四：15）。他可以成為我們的榜樣，因他在成長過程中也曾受試探。他可以幫助我們成為運用權柄、對自己生命負責的人。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">三、從成長的角度來看</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                如果長大成人需要能力和知識，這就是為什麼長大成人那麼困難。我們小的時候都沒有這二樣。所有的能力知識都在別人身上，而我們比起來是這麼幼小。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當我們繼續長大，智慧和身量都增長時，我們經由認同和內化一些事，能力和知識都增加了。我們內化父母的樣子，並與他們的榜樣認同。經由這樣與權柄認同，我們學習他們的榜樣，變得像他們。這段成長的路徑大約有十八年。
              </p>
              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">幼年</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                一開始，我們內化的是愛。我們學到照顧我們的人是愛我們的，這會建立我們與照顧者之間的相連感，使我們能內化他們的樣子。如果這一方面沒有問題，當父母給我們一些界限，我們經過衝突，最後我們學到界限是好的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                漸漸地，我們發展越來越多的專精知識，而父母越來越多地授權給我們，以表示尊重我們的成長和能力。如果我們這些做得好，更大更多的事會加給我們，我們變得越來越有能力擔負越來越多的責任，知識，授權，能力和責任都增加了。首先，孩子可以在街上騎腳踏車，以後，他在十六歲時，可以開車到別的城市去。「人在最小的事上忠心，在大事上也忠心。」（路十六：10）
              </p>
              <p className="text-gray-700 leading-relaxed">
                當我們大一點，約四到六歲時，更多更清楚的認同會發生，例如性別角色，小男孩與父親認同，知道自己是男人，小女孩與母親認同，知道自己是女人，然後他們與父母關係中的異性認同。男孩要娶一個女孩，這女孩正如嫁給他父親的女孩一樣，而女孩要嫁一個男孩，正如他母親嫁的男孩一樣。他們在認同的過程中，向前邁了一步，替將來成人鋪路。也就在這段時間，孩子內化父母的標準，他們的表現變得很重要。父母的認可成為脫離罪惡感的唯一途徑，因此孩子更加將他們的叛逆競爭感覺投向父母，雖然這種感覺一直增加。孩子想要爭取同性父母的感覺很強烈，最後他們就與同性父母認同而變得像他們。在七歲和十二歲之間，工作的支配和工作的角色變得很重要。學齡的孩子繼續變得很勤勉很努力，在技能上繼續發展，遊戲也像工作一般，他們在學習世界上的方式，同伴在這個時期也非常重要。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">四、父母的角色</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                當孩子長大成人的過程中，父母可以幫助也可以傷害孩子對以下各方面的認同。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">能力</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                一個孩子在成人時所需要的能力，來自他小時候對權柄的認同。如果父母的能力是溫和，慈愛，同時是堅定的，孩子會感覺能力是好的。如果父母的能力是以被動或嚴厲的方式表現，孩子對能力的概念會混雜。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">一方面，如果孩子的榜樣是被動的，他不能學會個人能力是怎麼回事，這將是一場災難。耶穌要我們站立得穩，但若一個孩子沒有「站立」的成人為榜樣，他如何學習？</p>
              <p className="text-gray-700 leading-relaxed mb-2">另一方面，如果父母用嚴厲殘酷的方式發展能力，孩子對權柄將發展出一種恨的關係，不能將之內化，並會產生衝突。新約給我們兩段經文有清楚的解說：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3 space-y-1">
                <p className="text-gray-700 italic">「你們做兒女的，要在主裡聽從父母，這是理所當然的。要孝敬父母，使你得福，在世長壽，這是第一條帶應許的誡命。你們做父親的，不要惹兒女的氣，只要照著主的教訓和警戒養育他們。」（弗六：1-4）</p>
                <p className="text-gray-700 italic">「你們做兒女的，要凡事聽從父母，因為這是主所喜悅的。你們做父親的，不要惹兒女的氣，恐怕他們失了志氣。」（西三：20-21）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                這兩段經文給我們清楚的圖畫。孩子要聽從父母，父母不要惹兒女的氣，也不要使他們失了志氣。孩子不能與他所恨的人認同。孩子需要為長大發展能力，知識，和影響力，但孩子若恨這些東西的來源，他會有衝突。他在發展權柄上會有困難，以後在順服神上也會有問題。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                若夫來尋求輔導時二十八歲。他幾乎被每一個工作的地方開除。「為什麼會這樣？」我問。「那些人老把我呼來喚去，把我看得一文不值，我受不了，我決定給他們看看我的本事。」「但這讓你老丟工作，值得嗎？」「我是不會向他們低頭的，別人永不可對我那樣。」他斬釘截鐵地說。「怎樣？」我問。若夫開始憤怒地顫抖。我們更深入地談到他多年來被權威式父親的管教。他激烈地憎恨所有權柄，他無法學習順服，在自己的生活上也不能有權柄來掌握。在權柄的掙扎上，他仍然是一個憤怒的小孩，對父親生氣。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在很長一段艱苦過程之後，若夫在權柄的問題上有所進展。首先，他必須面對向父親很深的恨意。然後，找一個年長者做他的良師。經由神的幫助，他長大成熟，可以管理自己的生活。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                麥可對這樣的父親有相反的反應。他總是被動地屈從父親，並幾乎完全拒絕自己的能力。每當有男性叫他如何做，他就乖乖聽從，他到三十歲還在飄泊，充滿了不安全感和困惑。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                他參加了一個治療團體，那兒有一些有能力、又很支持他的男人，大約一年之久，他都避免與他們發生衝突。但漸漸地，他可以開始向他們挑戰，他發現他可以反擊回去，並不會像小時候被打垮。
              </p>
              <p className="text-gray-700 leading-relaxed">
                他將這種情形帶入運動中，並且到了一個地步，覺得競爭是很好玩的。他不像從前一樣怕贏了。他找到一些男人，他們的自我是夠堅強的。這新發現的自信被他帶入工作世界中。他開始嘗試新工作和冒險。經過良師益友的幫助，以及對權威挑戰，他克服了對男性權柄的恐懼。麥可的被動和若夫的激進一樣是災難。他們都無法將成人的權柄角色扮好。因為他們的父親沒有順服神的教訓。一個是惹兒子的氣，一個是使他喪了志氣。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700 mt-4">專精知識</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在成長過程中，孩子應該有足夠的機會學習越來越多的專精知識，父母應該在這過程中給予支持。父母同時也要在知識的方面做榜樣，使孩子對工作，勤勉，有正確的價值觀。孩子可因正面的角色模範，而認同「所欲的成就覺甘甜」（箴十三：19）。他們需要看父母，來學習如何竭力追求完全，發展自我形象，以及尊崇一個對象，而並非自己。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                孩子被父母建立，獎勵，欣賞，以致他的能力天賦可以發展。一個年輕人來找我輔導，他說他花好多好多小時練棒球，得到的卻是父親一言不發地走過他身旁。當他想嘗試什麼新計劃，他父親就潑冷水。在他成年，步入社會之初，他沒有一個鼓勵他的父母角色來為他加油。他覺得精神壓力太大，十分沮喪。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當孩子發展能力時，機會也是很需要的。孩子需要想要試一試的感覺，以及想學習的動力。父母需要為孩子的努力喝彩。並預備下一步所需的資源。舉例而言，一個男孩學棒球，他不需要店裡最好的球棒，但他在預備好時，需要可以買到的適合他的球棒。如果一個人能夠學習他「可能」學習的東西，他的一生會比較容易。他們發展了面對工作的基本信念。這就是長大成人。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700 mt-4">糾正</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                正如我們前述，理想與真實之間的關係必須是慈愛和接納的。好的為人父母法則需要如此，正如神是這樣對待我們。當孩子失敗，父母嚴厲待之時，他們會害怕嘗試，害怕失敗的原因常是因為權威對犯錯嚴厲的懲戒。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">神對我們學習事情的態度卻有很大的不同。希伯來書五章14節說，我們學習是經由練習，即「習練得通達」。或是常常使用，因此在我們學習時，神與我們同工，父母在孩子學習新技能時，也需要以瞭解和耐心對待他們。父母如果能如此，孩子會樂於嘗試新事物。希伯來書形容的權柄形像，是對長大成人的過程十分有恩典：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「因我們的大祭司，並非不能體恤我們的軟弱，他也曾凡事受過試探，與我們一樣，只是他沒有犯罪。所以我們只管坦然無懼地，來到施恩的寶座前，為要得憐恤，蒙恩惠作隨時的幫助。凡從人間挑選的大祭司，是奉派替人辦理屬神的事，為要獻上禮物，和贖罪祭，他能體諒那愚蒙的，和失迷的人，因為他自己也是被軟弱所困。」（來四：15-五：2）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們的大祭司（耶穌）溫和地糾正我們，因為他體恤我們的軟弱。如果父母跟隨他的帶領，學習將是一件有趣的事。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700 mt-4">職分的力量</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                職分是權柄所給予的一個位置。因為父母有職分，所以父母有權柄要求結果。當孩子試著與權柄認同時，他們是榜樣。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                亞當夏娃的故事中，對他們有權柄的職分是在神。神也給他們一個職分是管理，當他們的行為越分，他彰顯他職分的力量，執行他們行為越分的後果。這使我們有點明白神在宇宙中的權柄。人和天使都學到一件事，就是當神說什麼的時候，他是認真的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                孩子長大的環境中，若權柄沒有力量，他們就不會學習如何尊重權柄，也不會認同權柄。根據研究，好的榜樣通常是溫暖，慈愛與跟隨者有相同之處的人。他們並非完美，但是可以面對生活，並且他們理解什麼是力量。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                因此，在孩子長大的過程中，他們需要父母有權柄，父母需要其職分的力量，這樣得來的尊敬使孩子在健康的懼怕中以愛為基礎的敬畏。愛的力量是最好認同的力量，而這力量不一定來自父母的個性，而是來自身為父母的職分。發展對職分的尊敬，使孩子奠定以後尊敬法律、政府、教育權柄的基礎（羅十三：1）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                這也使孩子以後無論扮演什麼角色，都能執行該角色所需要的權柄。無論是家庭主婦，教會領袖，工人，經理，對於什麼叫做職分，及如何以其權柄執行，他們心中有一個榜樣。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">五、青少年期</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                如果一切進行順利，十二歲之後就進入所謂令人瘋狂的青少年期。幼年的軛漸漸地鬆了，進入與成人逐漸平等的世界。就像其他政變一樣，沒經過動亂，叛逆是不會成功的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">聖經將幼年比喻做奴僕，因為孩童沒有合法擁有自己的生命：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「我說那承受產業的，雖然是全業的主人，但為孩童的時候，卻與奴僕毫無分別。乃在師傅和管家的手下，直等他父親預定的時候來到。我們為孩童的時候，受管於世俗小學之下，也是如此。及至時候滿足，神就差遣他的兒子，為女子所生，且生在律法以下，要把律法以下的人贖出來，叫我們得著兒子的名分。」（加四：1-5）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                經由奴僕般的管轄，孩子會叛逆，直到他擁有成人的自由，並認同他的角色，而這過程是像暴風雨一樣的。在青少年期，小孩變成大人，他試著有能力掌控自己的生命，但力量還不在那裡。他腳踏二條船，想推翻權柄，變成自己的主人。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                青少年期是挑戰權柄，為自己選擇的時期。實際上，父母的控制漸漸減少。取代的是父母的影響。如果父母這些年來與孩子建立了好關係，在這段期間他們可以運用影響力，但控制力就很小了。因為孩子大得有足夠的力量做自己想做的事。父母以加強限制和執行後果。但很難控制另一個成人了。父母只能控制自己及決定如何反應。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在這段美妙的期間，所有的預備都使青少年可以長大成熟。他們經驗到前所未有的能力，他們可以找到比做保姆賺更多錢的工作。他們有購買力，他們也有足夠的智力去探索世界，常聽到的一句話就是「讓我來做，你總是把我當小孩！」青少年探究他自己的力量，在過自己的生活。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                同時，職分的轉變也發生了，父母失去許多權柄，青少年聽別的權柄說話。他們學到父母不是唯一知道一切的人。青年團契的領袖，老師教練都成為具影響力的來源。他們的影響力甚至比父母更大。聽別人的，使青少年覺得自己是獨立的。這也是他們所面對的重要工作。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                並且同儕成了主要的依附。當他們成人的過程中，他們需要朋友支持。這是健康的轉變。藉同儕的支持，他們發展以後一生需要的人際關係，有許多人到了三十幾歲，心態上還沒有離開家。當他們試著離開父母，他們沒有能力去建立支持團體。他們進入成人世界就會有困難。他們會困住，因為他們不能依靠朋友像靠父母一樣，他們又變成像小孩子了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                青少年開始理解自己的技能和才幹。他們會在這些方面掌握權柄。他們參加許多活動以瞭解自己是否喜歡，如運動，學術，社會或藝術。他們還不能選擇生涯，但他們在發現自己的基本興趣和才能，他們在興趣方面會和父母起衝突。父母必須在這場戰爭中放手，不然以後會敗得更慘。當孩子做選擇時，他們的選擇需要被尊重。當他們知道自己的愛好傾向時，他們會向家庭之外尋求。運動隊，學校社團，服務社，教會團契，都是對他們很有價值的學習。工作很重要，賺錢也必須以一種實際的方法獲得。他們也需要有花錢的自由。如果父母知道青少年是進入成人的準備期，父母會開始問「我如何做會幫助他離家適應得更好？」這會使得父母與青少年的衝突減少。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                青少年期也是學習兩性關係的好階段。他們發現自己身上的特徵，也感覺到以前沒有感覺的事。他們學習與異性有更深的接觸。喜歡浪漫，不再是小時候的愛。他們行事衝動，不易控制自己，也不知為何要控制。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                他們需要父母及其他權柄的正確引導，使他們知道性的價值，給予合適的界限而不壓抑。大部分父母覺得有困難是因為他們害怕和青少年談性的問題。一方面他們不想破壞青少年對性的看法，一方面他們希望設定合適的界限。在這時候，好的青少年輔導是非常重要的，青少年對價值觀也有掙扎。他們開始對父母所教導的提出疑問。他們對父母所相信的信仰和其他價值要想出自己的理由才接受。如果信仰不成為他們自己的，他們以後就會去丟棄，或成為法利賽式的基督徒。多一點與好的青少年團體或教會青年領袖接觸，是十分重要的，因為能提供他們機會說出自己的疑惑，而非只面對父母。他們的朋友也會給他們答案，因此好的青年領袖和同儕很重要，可以使他們走過幼年信仰的死蔭幽谷。聖經中有這種例子，像浪子回頭，及葡萄園中的兩個兒子。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                青少年推翻父母的標準，為自己的生活訂定自己的標準。父母在這過程中是很重要的，但他們需要自由去想，去選擇，去疑惑，特別是進入成年之前。這段期間，其他成人扮演很重要的角色。如果這過程順利，產生出來的人我們就可稱之為成人。他們屬於自己，為自己負責。離開家，發展自己的生活，帶著自己的才能，方向，目標，能力，職分，影響，和專精知識。這是長大成人的過程。實在不容易。
              </p>
              <p className="text-gray-700 leading-relaxed">
                到這時候，他們在能力，知識，影響，職分和順服上，應該有一個好的開始。雖然這時候還不完全，但已在對的路上開始了。如果好種子撒下去，加上好的歷練，他們已準備好進入成人世界，接受試煉和享受成功。這時候他們已可自己思考，自己站立，可以不同意權柄，為自己的意見站出來。他們已可以從父母之下出來，服在神的權柄之下，以及人類社會的大家庭中。這主要是說，他們覺得有足夠的裝備，可以進入成人世界。他們覺得與別人是平等的，而不需要仰望另一個成人扮演父母的角色。如果他們成人了，他們不需要別人像父母一樣，告訴他們如何生活，信仰什麼。別的成人可以去討教，但自己要為自己負責。這就是長大成人。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">六、青少年的屬靈意涵</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                將長大成熟這階段和它的屬靈意涵連接起來是很重要的。青少年是推翻人與神之間阻礙的時期。我們需要推開父母好像神一般的權威角色，神才能做我們的父母，簡言之，我們需要把父母放一邊，我們才能被神「收養」。如果我們從未經過這個過程，我們會經歷屬靈上作小孩的痛苦，不能從律法和奴僕的轄制中出來。保羅將父母比作律法。再去讀加拉太書四章1-7節會幫助我們瞭解許多人的靈命問題。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">保羅將小孩子比做奴僕（加四：1），受管於世俗小學之下。這世俗小學，在別處是指宗教規條，在長大成熟上是毫無價值的：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「你們若是與基督同死，脫離了世上的小學，為什麼仍像在世俗中活著，服從那不可拿，不可嘗，不可摸等類的規條呢。這都是照人所吩咐所教導的，說到這一切，正用的時候就都敗壞了。這些規條，使人徒有智慧之名，用私意崇拜，自表謙卑，苦待己身，其實在克制肉體的情慾上，是毫無功效。」（西二：20-23）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅基本上是說我們要從規條中釋放出來，成為神所收養的兒女。這種從父母之下出來的自由，將帶我們進入與神的愛的關係及順服他愛的原則。它使我們從守規條式的思想，進入以愛為基礎的思想，使我們行事不靠規條而憑愛的原則。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">然而我們若從不對父母發生疑問——他們是給我們律法的——我們就不會對律法發生疑問，也就不會拒絕以律法救我們的想法。這也是為什麼注重權柄的法利賽人這麼守律法。他們一直要做到「夠好」才能心安。聽聽保羅怎麼說：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「但這因信得救的理，還未來以先，我們被看守在律法之下，直圈到那將來的真道顯明出來。這樣，律法是我們訓蒙的師傅，引我們到基督那裡，使我們因信稱義。但這因信得救的理，既然來到，我們從此就不在師傅的手下了。」（加三：23-25）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們必須從律法之下出來，因為它管理的時間已經過了。我們必須被新的父母收養，就是神自己！「凡有血氣的，沒有一個因行律法能在神面前稱義。」（羅三：20）這使我們和神直接發生關係，而不再是奴僕的心態。「可見，從此以後，你不是奴僕，乃是兒子了，既是兒子，就靠著神為後嗣。」（加四：7）這是神呼召我們成為他兒女可享有的自由，而非受制於規條之下的孩童心態，並且我們要順服聖靈。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">保羅講到這自由：「弟兄們，你們蒙召，是要得自由。只是不可將你們的自由當作放縱情慾的機會。總要用愛心互相服事。因為全律法都包在愛人如己這一句話之內。」（加五：13-14）保羅回應耶穌對法利賽人的呼召。這呼召是要他們從規條和世俗小學下出來，進入愛中。他們雖然沒有經過青少年的懷疑階段，向父親長老提出疑問，然後得到自己的信仰：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「有法利賽人和幾個文士，從耶路撒冷來到耶穌那裡聚集。他們曾看見他的門徒中，有人用俗手，就是沒有洗的手吃飯。（原來法利賽人和猶太人，都拘守古人的遺傳，若不仔細洗手，就不吃飯。從市上來，若不洗浴，也不吃飯，還有好些別的規矩，他們歷代拘守，就是洗杯，罐，銅器等物。）法利賽人和文士問他說：『你的門徒為什麼不照古人的遺傳，用俗手吃飯呢？』耶穌說：『以賽亞指著你們假冒為善之人所說的預言，是不錯的，如經上說：「這百姓用嘴唇尊敬我，心卻遠離我。他們將人的吩咐當做道理教導人，所以拜我也是枉然。」你們是離棄神的誡命，拘守人的遺傳。』」（可七：1-8）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                法利賽人向耶穌及他的門徒提出質詢，「為什麼不照古人的遺傳」。他們無法從規條下得自由去明白真理。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">耶穌也指責他們取悅人甚於討神喜悅：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「你們有禍了，因為你們修造先知的墳墓，那先知正是你們的祖宗所殺的。可見你們祖宗所作的事，你們又證明又喜歡。因為他們殺了先知，你們修造先知的墳墓。」（路十一：47-48）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                耶穌在這裡說的是，贊同父母或權威形像者的惡行，就會成為像他們一樣。我們必須將忠誠獻給耶穌（太十：34-37）。這忠誠必須比我們地上父母子女的關係更堅固。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                耶穌開始堅定自己的目標及獨立性時，他對父母的態度可以教導我們一些事。在某個年紀之前，耶穌在父母的權柄之下，正如律法規定的，但漸漸長大成人時，事情有了變化，當他十二歲時，他與父母分開了，獨自留在聖殿裡。當他們告訴他，他的父母為他擔心時，耶穌回答：「為什麼找我呢？豈不知我應當在我父的家裡嗎？」（路二：49）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                另一次耶穌也清楚地表明他需要順服神，而非他的母親：「婦人，我與你有什麼相干？我的時候還沒到。」（約二：4）耶穌長大了，他把對父母的忠誠轉向神，正如我們都應該做的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在這些例子中，耶穌有兩個重點。第一，我們要從父母的權柄下出來，將忠誠給神。第二，這樣之後，我們的思想要從規條轉移為愛的原則。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">記得法利賽人批評耶穌的門徒在安息日掐麥穗嗎？他回答他們：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「經上記著，大衛和跟從他的人飢餓之時所作的事，你們沒有念過嗎。他怎麼進了神的殿，吃了陳設餅，這餅不是他和跟從他的人可以吃的，唯獨祭司才可以吃。再者，律法上所記的，當安息日，祭司在殿裡犯了安息日，還是沒有罪，你們沒有念過嗎。但我告訴你們，在這裡有一人比殿更大。『我喜愛憐恤，不喜愛祭祀。』你們若明白這話的意思，就不將無罪的，當作有罪的了。因為人子是安息日的主。」（太十二：3-8）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                當耶穌說，人子是安息日的主，他把自己放在規條之上。規條是用來達到他的目的的，這目的就是愛。思想將從不是黑就是白的規條式，轉變為以愛為基礎的。我們對耶穌的順服必須超過我們對傳統和父母的順服。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                法利賽式的人或是嚴格的人，不能容忍這樣的教導。如果他們在任何情況找不到可依循的規條，他們就不知該如何，他們會再發明一個規條。聖經告訴我們要愛，如果我們去愛人會冒犯古人的遺傳，就冒犯吧。法利賽人的理論不能讓人顧念到人的需要（太十二：10-12）。只要任何理論不能讓人幫助受傷的人，這理論就不夠容納神的愛。他們將無罪的當作有罪的（7節）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                一位屬靈長輩說，如果自閉症的小孩，一定要靠治療才會好，恐怕神就是要他受苦，因為聖經中並沒有提到這種治療。他的理論不夠愛人。他不能自由地在安息日醫治人，他將無罪的當作有罪的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當人從這律法的世界中分別出來，他們的思想和愛的能力才會改變他們的思想，從嚴格不變轉為以愛為原則。他們開始明白神的奧祕，以愛與他連結。他們能以智慧和愛的方式，將神的真理實際運用，而非躲藏在嚴格不變的公式後面。福音成為一種與神與人的關係，而非控制人的一套規矩。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">人的想法改變了，他們在愛的光中推理。保羅在講愛的章節中說：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「我做孩子的時候，話語像孩子，心思像孩子，意念像孩子，既成了人，就把孩子的事丟棄了。我們如今彷彿對著鏡子觀看，模糊不清，到那時就要面對面了。我如今所知道的有限，到那時就全知道，如同主知道我一樣。如今常存的有信，有望，有愛這三樣，其中最大的是愛。」（林前十三：11-13）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                當人開始像成人一樣推理，而不像小孩用不是黑就是白的方式，模糊不清的事較能被接受，而愛更顯為重要。當人沒有經過青少年的階段，他們不覺得自己所看的是模糊不清，他們在每一件事上都以為自己有「絕對」的答案。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當我們成為屬靈的青少年時，我們會更依靠神，因為在雲霧中，我們需要天父的方向。我們對很多事都不確定，而我們的神學也不能在每一個環境給我們答案。我們發現需要和他有關係，而不只是一些規條。我們走過自己的客西馬尼，在痛苦中試著順服神的旨意。對痛苦，沒有簡單的神學可提供答案，答案就是在痛苦中與神的關係。那些只要黑或白、清清楚楚答案的人，無法忍受這樣的信心。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當人經過這樣的轉變，他們會對規條鬆手，而與神建立真正的關係。他們的推理從黑白的規條式改變成愛的原則式。他們的神學從律法為基礎轉變為以愛為基礎。他們的信心從道德系統轉變為與神的關係。拒絕人的傳統，向內心尋找真實的自我，有時候帶來一些混亂，這是屬靈的青少年尋得與天父建立真實關係之路。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當我們對規條放手，我們會發現自己的靈裡貧窮（太五：3），很需要一位父親。這就是被天父收養的意思。這是救贖也是屬靈的青少年期。我們必須注意裡面的悖逆，承認它，然後被天父的恩典再次迎回家。這就是使人得救的信心。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                從父母的束縛之下出來，使屬靈偉人像施洗約翰，得以完成他們的使命。施洗約翰站起來反對權威，他稱他們為「毒蛇的種類」（太三：7）。馬丁路德抵擋當時的宗教權威，反對我們必須靠中間傳譯才能與神有關連。
              </p>
              <p className="text-gray-700 leading-relaxed">
                我們必須感覺我們與其他成人是平等的，才能去做神要我們做的事。我們必須對自己負責，不需父母形像者的認可，才會行走在「不討人喜歡，只討神喜歡」的路上。他是那查驗我們心的神（帖前二：4）。下一章將講到，如果我們不是這樣會如何。
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
                '莎拉一輩子活在尋求他人（年長女性、丈夫）認可的焦慮中，正是「沒有長大成人」的典型症狀——真正的成人不需要依靠別人的認可來做決定、評估自己表現、或享受平等的關係。',
                '權柄有五個要素：能力、專精知識、職分、影響力、順服，神照著自己的形像賦予人這五方面的權柄（創一：26、28），墮落使我們失去了對生命的自由權柄，唯有與基督聯合才能重新獲得。',
                '耶穌完美示範了如何運用權柄（能力、知識、職分、影響力）同時又完全順服父神，成為人長大成人、進入成熟權柄關係的終極榜樣。',
                '孩子的能力、專精知識、對權柄的態度，很大程度上來自父母如何示範與對待——若夫（父親過度嚴厲、憤怒地拒絕權柄）與麥可（父親過度嚴厲、被動地屈從權柄）都示範了「惹兒女的氣」的兩種反面結果，唯有溫和而堅定、賜予機會又給予糾正的父母職分，才能幫助孩子健康地認同權柄。',
                '青少年期是「挑戰權柄、為自己選擇」不可或缺的階段，屬靈上同樣需要一段「屬靈的青少年期」——從規條式的黑白思維，轉變為以愛為基礎、與神建立真實關係的成熟信仰，正如保羅所說「我做孩子的時候……既成了人，就把孩子的事丟棄了」。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「屬靈的青少年期」作為信仰成熟的必經階段</h4>
              <p className="text-gray-700 leading-relaxed">
                本章對「屬靈的青少年期」的描述，是全書最具原創性的洞見之一：許多基督徒把質疑父母/傳統信仰教導視為屬靈危機，但作者指出這其實是信仰走向成熟不可或缺的階段——正如施洗約翰、馬丁路德都經歷過反對既有宗教權威的過程。健康的信仰成熟，需要從「規條式、非黑即白」的思維，過渡到「以愛為基礎、能與神建立真實關係、能忍受模糊不清」的成熟信仰，這個過程必然伴隨著暫時的混亂與掙扎，但正是這掙扎，把人帶向真實而非表演式的信心。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">若夫與麥可：權柄創傷的兩種對立表現</h4>
              <p className="text-gray-700 leading-relaxed">
                若夫（激烈反抗一切權柄）與麥可（完全屈從、拒絕自己的能力）是同一個問題（父親未能溫和而堅定地行使職分）所產生的兩種截然相反的症狀，這提醒助人者：面對「總是與權威衝突」或「總是逃避競爭與能力展現」的個案，都值得回頭探索其原生家庭中權柄關係的品質，而非只處理表面的行為問題。兩人的康復路徑也很相似——都需要透過「良師」或支持團體，重新經歷一次健康的權柄關係，才能修復對權柄扭曲的認知。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「討神喜歡而非討人喜歡」作為長大成人的分水嶺</h4>
              <p className="text-gray-700 leading-relaxed">
                本章反覆強調的「不尋求人的認可、只尋求神的認可」，並非鼓勵人變得孤僻或不顧他人感受，而是指出一個心理與屬靈的分水嶺：一個人若把「別人是否認可我」當作行動與自我價值的最終依據，他實質上仍活在「孩子」的地位，任何人都可以透過贊同或不贊同來操控他。唯有把最終的認可安置在神那裡（如保羅在帖前二：4所說），人才能真正自由地為真理站立，即使因此不被喜歡也不動搖。
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
              '像莎拉一樣，你生命中有沒有一個（或幾個）你不斷尋求認可、卻很難真正取悅的權威人物？',
              '權柄的五個要素——能力、專精知識、職分、影響力、順服——你覺得自己在哪一項發展得最成熟，哪一項最欠缺？',
              '回想你的父母如何行使權柄（溫和堅定、被動、還是嚴厲），這如何影響你今天面對權威人士的方式？',
              '你有沒有經歷過屬靈上的「青少年期」——開始質疑從小被教導的信仰教導，重新尋找屬於自己的信仰？那段經歷帶給你什麼？',
              '你是否仍然活在「討人喜歡」而非「討神喜歡」的心態中？具體舉一個最近的例子。',
              '你目前對規條與愛的關係，比較接近法利賽人的「非黑即白」，還是保羅所說「因信稱義」「以愛為原則」的成熟信仰？',
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 盤點你的「權柄五要素」</h4>
              <p className="text-gray-700 mb-2">
                逐項為自己打分（能力、專精知識、職分、影響力、順服），找出最弱的一項，思考這週可以踏出的具體一小步。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🗣️ 練習一次「不尋求認可」的決定</h4>
              <p className="text-gray-700 mb-2">
                本週做一個你自己認為正確、但可能不被某位重要他人認可的決定，觀察自己內心的焦慮，以及是否能承受這份不被認可的感覺。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 默想加拉太書四章1-7節</h4>
              <p className="text-gray-700 mb-2">
                默想「從此以後，你不是奴僕，乃是兒子了」，思想自己在哪些方面仍活在律法奴僕的心態中，求神幫助你活出兒女的自由。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，感謝祢按著祢的形像，賜給我能力、知識、職分、影響力，也呼召我學習順服。求祢光照我生命中還沒有長大成人的地方——不論是過度尋求人的認可，還是對權柄有扭曲的恨意或懼怕。求祢幫助我像耶穌一樣，既能運用祢所賜的權柄，又能完全順服祢。願我不再是奴僕，而是祢的兒女，行走在只討祢喜悅的路上。奉耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
