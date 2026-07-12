import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch47() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第47章</h1>
        <h2 className="text-xl font-semibold text-gray-700">屬靈的新造</h2>
        <p className="text-gray-500 mt-1">若有人在基督裡，他就是新造的人，舊事已過，都變成新的了。　哥林多後書五17</p>
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
              神要幫助亞伯拉罕的信心成長擴張，先藉著肉體的拆毀來改造他，所拆毀的包括人所有、人所做、人所能。接著有屬靈的新造，包括立約與割禮、與神同行及為人代求、生以撒逐以實瑪利等。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、立約與割禮（創十七1~14）</h3>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">一、立約的條件：在神面前作完全人</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  創世記十七1-2：「1亞伯蘭年九十九歲的時候，耶和華向他顯現，對他說：我是全能的神。你當在我面前作完全人，2我就與你立約，……」這裡清楚說，你當作完全人，我就與你立約，所以立約的條件是「在神面前作完全人」，此句原文直譯是「你當在我面前走，作完全人」。「走」הִתְהַלֵּךְ（hithhallek）這個字的字幹表示持續不斷的行動，可指親密地與神同行，以諾、挪亞與神同行，也都使用這個字（謝挺，《始於神——創世記靈修日引》，頁4月6日）。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  完全人可以翻譯為成熟人，並非很完美，完全不犯錯；而是成熟、正直的，能敬畏神，願意走在神的旨意之中，若犯罪會立刻認罪悔改。完全人是走成聖道路的人，也是得勝者。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  本書上一章已經看到，亞伯蘭信神，就被稱為義了。所以這裡的立約，不是關於稱義得救，而是關於託付任務。作完全人不是得救的條件，因我們乃靠著神的恩典，因信稱義。但作完全人是被神更大使用的條件，當我們倚靠神除去惡行，改掉壞習慣，有好見證、好行為，神能更大使用我們，使我們的後裔得到好的屬靈影響力。倘若基督徒不走成聖道路，沒有好見證、好行為，不僅不能被神使用，還可能破壞神的工作。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">二、立約的應許：後裔繁多、作多國父、賜迦南地、立國度、出君王</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  神與亞伯蘭立約，其中的應許是甚麼，神接著說：「2我就與你立約，使你的後裔極其繁多，……我與你立約：你要作多國的父。從此以後，你的名不再叫亞伯蘭，要叫亞伯拉罕，因為我已立你作多國的父。我必使你的後裔極其繁多；國度從你而立，君王從你而出。7我要與你並你世世代代的後裔堅立我的約，作永遠的約，是要作你和你後裔的神。8我要將你現在寄居的地，就是迦南全地，賜給你和你的後裔永遠為業，我也必作他們的神。」（創十七2-8）
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  這裡最特別的是將亞伯蘭的名字改為亞伯拉罕，並對亞伯拉罕說，你要作多國的父（創十七4-5）。「亞伯」是父親、阿爸之意，「蘭」是高舉之意，「拉罕」是多國之意。「高舉」偏向世俗意義，追求崇高地位，大概是他拉尚未信主之前對兒子的期望。「多國」主要是屬靈意義，代表將要祝福多國（謝挺，《始於神——創世記靈修日引》，頁4月7日）。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  神將「高舉的父」改名為「多國的父」，意思是地位崇高不重要，實質影響祝福多國比較重要。如今亞伯拉罕的屬靈後裔真的遍及萬國，我們都是亞伯拉罕的後裔。尤其在他的後裔中有一位耶穌基督，他的救恩傳遍萬國，使亞伯拉罕真能成為多國的父。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  其他與後裔相關的應許還包括：1.後裔極其繁多，2.國度從你而立，3.君王從你而出，4.我要作你和你後裔的神，5.賜迦南全地給你和你的後裔，永遠為業。是相當完整的立約應許。唯有完全人才能承受如此多福份，如同加拉太書五21所說，有成聖果子，才能承受神的國。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  亞伯拉罕的屬靈基因會傳給以撒、雅各，例如：亞伯拉罕在迦南各地築壇獻祭，以撒也設立祭壇（創廿六25）。雅各有一天來到伯特利，耶和華向他顯現。他的祖父早在一百多年前已在那裡設立祭壇，打破籠罩在那塊土地上的黑暗權勢，使得雅各來到伯特利時，天門是敞開的（創廿八10~19），神能從天上寶座直接對人說話。雅各後來也在伯特利設立祭壇。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  現今的美國，許多年輕人仍在承接上一代敬虔所帶來的福份恩典，但恩典不會一直存留。美國年輕人若持續遠離神，美國將失去神的同在以及原有的富強。這個原則就像以撒、雅各有承接到亞伯拉罕敬虔所帶來的福份，但後來的以色列人越來越遠離神，最終亡國。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  神的選民還有特別恩典，以色列人分散到世界各地後，只要認罪悔改，神仍紀念他給亞伯拉罕的應許，最終會將他們帶回以色列地。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  我們若願意在神面前作完全人，將會對後代有好的影響，子孫與神的關係或許會疏遠或中斷，但神會持續顧念著他們，讓他們有回轉的機會，因神不會忘記他跟我們所立的約。
                </p>
              </div>

              <div>
                <span className="font-semibold text-indigo-700">三、立約的記號：割禮與洗禮</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  舊約時代，神以割禮作為立約的記號，所有的男子，包括外邦人、僕人，只要加入亞伯拉罕的族群，都要受割禮，並能在亞伯拉罕後裔的族群中蒙恩，否則要被剪除。這代表神的慈愛、神的寬廣，因為外人也能成為神的子民，與以弗所書所說「外人進入神家」的原則一致（弗二16-19）。割禮這事也標示神的公義、聖潔，因為有罪的人不能歸屬於神，割禮會流血，預表基督的十架救恩。有神的救恩才不會被剪除。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  到了新約時代，立約的記號改為洗禮，我們藉著洗禮與基督聯合，成為亞伯拉罕的後裔。同樣是立約的記號，舊約時代僅有男人可行割禮；新約時代改為洗禮後，男女都可藉著洗禮與神立約。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  亞伯拉罕先因信稱義（創十五6），再受割禮（創十七24）。已受割禮的猶太人，會認為自己已經是神的子民，必然稱義得救。但保羅強調，不是割禮使人稱義，是先因信稱義，而後受割禮作印證（羅四9~13），真正的信帶來與神聯合，這是最重要的。洗禮也是如此，正如耶穌所說：「信而受洗的，必然得救。」（可十六16a）要先信再受洗，才能得救；洗禮是一個記號，表達出內在的信心。耶穌緊接著說：「不信的，必被定罪」（可十六16b），而非「不受洗的，必被定罪」。重點在於信，而非洗禮或割禮，但洗禮或割禮是信心的記號。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  既然是先信再洗，是否不宜做嬰兒洗禮？其實信心是靈性，不一定要用理性來呈現。施洗約翰在母腹裡就被聖靈充滿（路一15），馬利亞懷耶穌之後，來拜訪約翰的母親伊利沙白，他在母親肚子裡跳動（路一41），這都是信心的表現。關鍵在於父母與神的關係，若父母是親近神的人，天天為腹中的胎兒禱告能被聖靈充滿，這嬰孩能因此有了信心與靈性，這樣的孩子受嬰兒洗禮是合宜的。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  洗禮和割禮是一次性的儀式，表示我們願意與主聯合，舊有的生命與主同釘十字架，又與主同復活（羅六4）。洗禮之後，要隨從聖靈走成聖的道路（羅六12-13，八5-6），也如哥林多後書五17所說：「若有人在基督裡，他就是新造的人，舊事已過，都變成新的了。」走成聖道路，不是靠自己，乃是在基督裡天天持續倚靠神。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  使徒行傳二37~42提到，彼得講完道之後，眾人覺得扎心，有人問彼得，他們該怎麼辦？彼得不是叫他們要信耶穌，而是回答說：「各人要悔改，奉耶穌基督的名受洗。」彼得的回答沒有提到「信」，但其實受洗就代表信了，洗禮是信心的表達。若一個人信了耶穌卻不受洗，就好像表明，我只要作一個嬰孩，不要長大，有一天若不想信耶穌，隨時可放棄。我們受洗，乃是表明願意進入與神所立的約，願意走成聖的道路，成為完全人被神使用。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  神說完割禮的事之後，也將撒萊改名為撒拉（創十七15~16），成為「多國的母」。神對亞伯拉罕說：「我要使……君王從你而出」（創十七6），又說：「……我要使……百姓的君王從她而出」（創十七16）表示神要賜給亞伯拉罕的兒子是他跟撒拉共同生的。神呼召亞伯拉罕，不只呼召他一人，也呼召他的妻子撒拉；神要亞伯拉罕成為多國之父，也要撒拉成為多國之母，他們同心合意才能夠生下以撒，將來才能產生如同海邊的沙、天上的星那麼多的後裔。因此神在婚姻中的旨意，要靠夫妻領受同樣的異象、應許來完成；夫妻要同心合意養育兒女，才能培養出神國度的人才。奉主耶穌的名祝福我們每對夫妻都如同亞伯拉罕和撒拉！
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、同行與代求（創十八16-33）</h3>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">一、與神同行</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  創世記十八1~15提到，有三個人出現在亞伯拉罕面前，其中有一位是耶和華，亞伯拉罕宰了一頭牛來招待他們；招待完之後，耶和華說：「明年這時候，我必要回到你這裡，你的妻子撒拉必生一個兒子。」（創十八10）耶和華來找亞伯拉罕最主要是講這件事。三個人中另外兩位是天使，他們要去所多瑪救羅得（十八22；十九10~13）。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  後來亞伯拉罕與神多走一程（創十八16），神那時說：「我所要做的事豈可瞞著亞伯拉罕呢？」（創十八17）於是向亞伯拉罕啟示更多的事。當我們與神同行、同在的時間越多，神的啟示就會越多。正如同神出現在亞伯拉罕面前，原來是要告訴他生孩子的事，但因亞伯拉罕與神同行一程，神就再告訴他關於所多瑪的事。我們不要以為每天一次來到神面前親近他就夠了，當我們更多來到神面前讀經、禱告、默想，神就更多向我們顯明他的啟示與指示。如同詩篇一2所說：「惟喜愛耶和華的律法，晝夜思想，這人便為有福。」神不只會指示關於我們自己的事（升學、工作、結婚、生子……），還會啟示我們關於這城市、國家、甚至整個世界的事，使我們成為成熟的代禱者，為這些事代求。
                </p>
              </div>

              <div>
                <span className="font-semibold text-indigo-700">二、為人代求</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  羅得被亞伯拉罕從四王手中救回後，應當有所警惕，知道那地是危險之處，應該要搬離所多瑪，可是他卻沒有因此得到警惕，仍舊回去所多瑪居住。當亞伯拉罕知道所多瑪和蛾摩拉將要被神毀滅時（創十八20~22），他馬上想到羅得還在那裡，並向神祈求（創十八22~25）。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  由亞伯拉罕的代求中看到，代禱者要將神的屬性說出來，因為這是代禱訴求的根據：「將義人與惡人同殺，將義人與惡人一樣看待，這斷不是你所行的。審判全地的主豈不行公義麼？」（創十八25）亞伯拉罕的代求，由50個義人降到45個，再降到40個、30個、20個，最後10個，神都答應了（創十八26~32）。並不是亞伯拉罕說服了神，而是神本來就有這樣的慈愛，只是神期待有人以禱告與他同心。亞伯拉罕在禱告中不斷修正自己的禱告內容，直到貼近神的心意。最後，因所多瑪連10個義人都沒有，只有羅得一人，所以神毀滅了所多瑪，並在毀滅所多瑪之前，把羅得救出來。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  不太確定羅得是不是一位得勝者，因為他沒有足夠的儆醒，提早離開罪惡之城。但聖經說他是一個義人，也是一個代禱者。如彼得後書二7-8所說：「7只搭救了那常為惡人淫行憂傷的義人羅得。8因為那義人住在他們中間，看見聽見他們不法的事，他的義心就天天傷痛。」他的義心天天傷痛，這是對代禱者的描述，表示羅得是一位代禱者（馬丁路德著，章文新編，《路德選集(上冊)》，頁61）。馬丁路德解釋亞伯拉罕所說的十個義人，認為這十個義人就是代禱者。當有一群基督徒同心為城市、國家代求時，神能因這禱告，使他們的城市、國家有平安。因此基督徒代禱的事奉，是很重要的，如保羅在提摩太前書二1-2所強調的：「1我勸你，第一要為萬人懇求、禱告、代求、祝謝；2為君王和一切在位的，也該如此，使我們可以敬虔、端正、平安無事的度日。」
                </p>
                <p className="text-gray-700 leading-relaxed">
                  我們若要成為一位代禱者，就要效法亞伯拉罕，與神多走一程，更多地來到神面前禱告，在神的啟示中得知城市安危，並視城市、國家的困難為自己的困難，在禱告中堵住破口。台灣正面臨少子化、貪污、家暴、墮胎、淫亂……種種問題，基督徒看見這些問題，要起來禱告，抵擋邪惡的權勢，堵住這些破口，讓神的祭壇、神的國度能在這地被建立。若沒有基督徒持續的代禱，我們終將步上所多瑪的腳步，遭遇最後的審判與毀滅（創十九24~25）。基督徒不能單顧自己的事、獨善其身，乃要起來為城市、國家守望禱告。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、生子與逐子（創廿一1~13）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記廿一5：「他兒子以撒生的時候，亞伯拉罕年一百歲。」以撒出生後，就開始了以實瑪利和以撒的對立與競爭。創世記廿一9~12記載亞伯拉罕逐以實瑪利的過程，最後神對亞伯拉罕說：「凡撒拉對你說的話，你都該聽從。」（創廿一12）神的意思不是說：妻子所說的話都該聽從；乃特別指逐以實瑪利這件事。至於十五年前撒拉說要納夏甲為妾的那件事則是錯的（創十六1~3）。妻子的建議可能有些是對的，有些是錯的，因此丈夫聽完妻子的建議，要再去求問上帝。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                為什麼這次撒拉說的是對的？以人的角度或許會覺得殘忍，為什麼要將夏甲和她的兒子趕走？但由前面創世記十六4我們看到，夏甲不懂得珍惜恩典、不懂得尊重權柄、不懂得感恩，在一個家庭中製造彼此間的對立，才使得她自己被趕出去。另從神的救恩計畫來看，加拉太書四22~23說：「因為律法上記著，亞伯拉罕有兩個兒子，一個是使女生的，一個是自主之婦人生的。然而，那使女所生的是按著血氣生的；那自主之婦人所生的是憑著應許生的。」神要憑著應許生的來成就救恩，不要憑著血氣生的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這樣的原則也適用於所有基督徒的生命與事奉，我們都如同以撒一樣是憑著應許生的，才能成為神所要使用的人；不管我們本來有多好，都必須重新在基督裡生出來，成為新造的人，神才能使用。並且在事奉的歷程中，若發現有出於肉體的動機，要勇於捨棄，因為那不能真正成就神的工作。神不要我們靠自己的血氣，而要專心倚靠他。
              </p>
              <p className="text-gray-700 leading-relaxed">
                創世記二章記載的分別善惡樹和生命樹，顯明神對我們的心意——分別善惡樹代表人倚靠自己的血氣，生命樹代表人倚靠神的應許。這也是我們在世界上的兩條路，一條是血氣的路，一條是應許的路。血氣的路是神所不喜悅的，我們要在神面前省察，有哪些屬血氣、屬肉體的東西要被拆除；要被神的話檢驗和帶領，屬神的留著，不屬神的挪去。因此我們做任何事，要先求問神的心意，而非按照自己的想法任意而行，這樣，可使我們避免不必要的虧損與無意義的冤枉路。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                亞伯拉罕順服神的帶領，經歷許多的拆毀、剝奪，且長久忍耐等候，但神按著應許所給的是更寶貴的。先有拆毀，才有建造；除去人為，才有神蹟，這就是亞伯拉罕信心的果實。願我們都如此走在神的道路上，不斷有肉體的拆毀、捨棄，並且不斷有生命的更新、成長，如保羅所說：「13弟兄們，我不是以為自己已經得著了；我只有一件事，就是忘記背後，努力面前的，14向著標竿直跑，要得神在基督耶穌裡從上面召我來得的獎賞。15所以我們中間，凡是完全人總要存這樣的心……。」（腓三13-15）
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
                '立約的條件是「在神面前作完全人」（原文直譯與神同行），完全人非完美無罪，而是成熟正直、願意行在神旨意中、犯罪立刻悔改的人；作完全人不是得救的條件，而是被神更大使用的條件。',
                '神將亞伯蘭改名亞伯拉罕（從「高舉的父」改為「多國的父」），立約應許包括後裔繁多、作多國父、立國度出君王、賜迦南地永遠為業，這屬靈基因也傳給以撒、雅各。',
                '割禮是舊約立約的記號（只限男性），新約改為洗禮（男女皆可）；亞伯拉罕先因信稱義才受割禮，說明是先信而後受記號印證，重點在信而非儀式本身。',
                '亞伯拉罕與神多走一程，因此得知所多瑪將被毀滅的事，進而為羅得代求，禱告中從50個義人一路降到10個，神都應允；代禱者要以神的公義屬性作為訴求根據。',
                '以實瑪利（憑肉體生）與以撒（憑應許生）的對立，預表血氣的路與應許的路兩條屬靈道路；基督徒的生命與事奉都當是憑應許重生的新造，而非倚靠自己的血氣。',
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
              '神與亞伯蘭再次立約，要使用他成為更多人的祝福，但條件是在神面前作完全人。完全人的意思是甚麼？對今天的我們有何提醒？',
              '神要亞伯蘭改名為「亞伯拉罕」，前後兩個名字的意義有何差別？神的心意是什麼？',
              '神與亞伯拉罕立約的記號是割禮，新約時代改為洗禮，這二者有何共同點？有何區別？這事對你個人有何意義？',
              '亞伯拉罕與神同行，而後為人代求。我們從這事學到甚麼有關代禱的功課？試分享個人在代禱事奉上的經歷與體會。',
              '神認同撒拉的意見，要使夏甲和以實瑪利離開這個家，另外發展。這事包含了哪些屬靈原則？跟我們今天的生命與事奉有甚麼關係？',
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
