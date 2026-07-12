import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch59() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第59章</h1>
        <h2 className="text-xl font-semibold text-gray-700">豐年與荒年</h2>
        <p className="text-gray-500 mt-1">法老的夢乃是一個。神已將所要做的事指示法老了。　創世記四十一25</p>
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
              在約瑟的人生歷程中，有一件很重要的事，就是關於豐年與荒年。看起來，這是很特別的經歷，但其實這也是每個人生命的必經歷程。我們分「豐年與荒年的啟示」及「豐年與荒年的實例」兩大段來分享。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、豐年與荒年的啟示</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記四十一1-8：「過了兩年，法老做夢，夢見自己站在河邊，2有七隻母牛從河裏上來，又美好又肥壯，在蘆荻中吃（草）。3隨後又有七隻母牛從河裏上來，又醜陋又乾瘦，與那七隻母牛一同站在河邊。4這又醜陋又乾瘦的七隻母牛吃盡了那又美好又肥壯的七隻母牛。法老就醒了。5他又睡著，第二回做夢，夢見一棵麥子長了七個穗子，又肥大又佳美，6隨後又長了七個穗子，又細弱又被東風吹焦了。7這細弱的穗子吞了那七個又肥大又飽滿的穗子。法老醒了，不料是個夢。8到了早晨，法老心裏不安，就差人召了埃及所有的術士和博士來；法老就把所做的夢告訴他們，卻沒有人能給法老圓解。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                約瑟的人生，跟六個夢有很大的關係，這六個夢是兩個一對分別在三個階段中出現的。約瑟起初是作夢的人，後來成為解夢的人。這過程幫助他能由淺入深，逐漸更準確地解夢，知道神的心意，他與神的關係也愈來愈親密。因此，他非常清楚，有啟示意義的夢乃是從神而來的，解夢所得的啟示也是從神而來的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                約瑟年少時得了兩個夢，是比較容易了解的夢，那是兩個意思相同的夢，關於神會提升他到高位，甚至以色列全家都要向他臣服。至於如何成就，那就需要等候與順服的功課了。約瑟把所得異夢的啟示放在心裡，那是他在被賣、被囚的過程中，仍然保有積極態度的重要原因。如同保羅所說：「17我們這至暫至輕的苦楚，要為我們成就極重無比、永遠的榮耀。18原來我們不是顧念所見的，乃是顧念所不見的；因為所見的是暫時的，所不見的是永遠的。」（林後四17-18）基督徒生活與事奉的動力來自神的啟示，可以是異象、異夢，但最普遍的是神的話語。神的話語所顯明出來的永恆榮耀，使我們能看輕眼前的苦難與艱難。這在舊約的亞伯拉罕、摩西、大衛，新約的耶穌、彼得、保羅身上，都看得很清楚。希伯來書十一1-40的信心英雄榜列出更多人物，那段見證以信心的本質作開始：「信就是所望之事的實底，是未見之事的確據。古人在這信上得了美好的證據。」（來十一1-2）神給人啟示，人以信心來領受並保守在心中，而後產生了一般人不理解的奇特生命旅程，有人在今生的後段就經歷後來的榮耀，包括約瑟、約伯；但更多的人是要等到來生才經歷那後來的榮耀，包括初代教會的使徒們、許多殉道的聖徒，十八、九世紀以來許多的宣教士，在今日極權國家中受逼迫的信徒等。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                約瑟在監裡幫酒政、膳長解夢，那是兩個意思剛好相反的夢，相對比較難解。但約瑟是一個親近神的人，保持與神之間靈裡的相通，所以能很快知道夢的含意。他為酒政解夢是講出美好的結局——三日後官復原職，相對容易；但為膳長解夢是講出可怕的結局——三日後將要被殺，相對困難。約瑟所做的，正像後來的先知，好的話要講，不好的話也要講；美好的應許人人喜歡聽，審判的預言人們多數選擇拒絕。先知耶利米預言猶大亡國，因此被綑綁下坑，跟約瑟的遭遇相似。先知的使命就是要講出神的啟示，不管好聽的、不好聽的，人們能接受的、不能接受的，都要講出來。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                約瑟最後幫法老的兩個夢圓解，這是更難的，因為牽涉到全國、全地區，牽涉到漫長的兩個七年，且是在有生殺之權的法老面前，若講錯，就沒命了。神不會一次到位，讓我們面對這種場面。約瑟經過多次的歷練、多年的成長，從十七歲到三十歲，跟耶穌三十歲出來傳道，年齡相同。估計他在大臣波提乏家裡三年，因為二十歲的他具備了對女人的吸引力，波提乏的妻子觀察他已經三年，終於忍耐不住慾望，而主動出擊，造成約瑟被誣下監。接下來大約十年，約瑟就在監獄度過，這麼長的時間約瑟在做甚麼，聖經沒有明講，但合理推論，約瑟完全沒有浪費在監獄裡的十年時間。這段時間的他，是把監獄當作他的祈禱院或修道院，雖然與世隔絕，但能花時間天天與神親近，因而更加成熟老練，與神的關係更加親密。以至於當法老需要他解夢時，他的圓解是百分之百準確的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                法老做了如同實境的夢，而且同一晚做了含意相同的兩個夢，代表神定意要向法老啟示他的計畫。不過關鍵在於要有會解夢的人，若無人能解，這啟示就落空了。所以神的僕人很重要，不管解夢或解經，都是在解明神的啟示。如提摩太後書二15所說：「你當竭力在神面前得蒙喜悅，作無愧的工人，按著正意分解真理的道。」詩篇一一九130：「你的言語一解開就發出亮光，使愚人通達。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                約瑟的解夢，不是單純解夢，他很明顯在見證神、歸榮耀給神，如創世記四十一15-16所說：「15法老對約瑟說：我做了一夢，沒有人能解；我聽見人說，你聽了夢就能解。16約瑟回答法老說：這不在乎我，神必將平安的話回答法老。」他強調，不是我，是神。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                接著在創世記四十一25,28,32：「25約瑟對法老說：法老的夢乃是一個。神已將所要做的事指示法老了。……28這就是我對法老所說，神已將所要做的事顯明給法老了。……32至於法老兩回做夢，是因神命定這事，而且必速速成就。」約瑟接連三次，都強調神。埃及百姓以法老為神，法老也以為自己是神。但約瑟要引導、幫助法老來認識神，與獨一的真神建立關係。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記四十一29-36：「29埃及遍地必來七個大豐年，30隨後又要來七個荒年，甚至埃及地都忘了先前的豐收，全地必被饑荒所滅。31因那以後的饑荒甚大，便不覺得先前的豐收了。32至於法老兩回做夢，是因神命定這事，而且必速速成就。33所以，法老當揀選一個有聰明有智慧的人，派他治理埃及地。34法老當這樣行，又派官員管理這地。當七個豐年的時候，征收埃及地的五分之一，35叫他們把將來豐年一切的糧食聚斂起來，積蓄五穀，收存在各城裡做食物，歸於法老的手下。36所積蓄的糧食可以防備埃及地將來的七個荒年，免得這地被饑荒所滅。37法老和他一切臣僕都以這事為妙。38法老對臣僕說：像這樣的人，有神的靈在他裡頭，我們豈能找得著呢？法老對約瑟說：神既將這事都指示你，可見沒有人像你這樣有聰明有智慧。你可以掌管我的家；我的民都必聽從你的話。惟獨在寶座上我比你大。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                約瑟不僅說出七個豐年、七個荒年的預言，還提供解決問題的方案，而且有能力執行。可以說，他不僅有先知性的事奉，而且有使徒性的事奉，耶穌、彼得、保羅都是這樣的人。這個世代，同樣有豐年與荒年，也需要先知性與使徒性的事奉，才能使這世代的人安然走到下一個世代，並且既豐盛又得勝。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、豐年與荒年的實例</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「約瑟積蓄五穀甚多，如同海邊的沙，無法計算，因為穀不可勝數。」（創四十一49）大部分人容易只看眼前，當時的埃及若也只看眼前，不看長遠，他們就會亡國。約瑟把目光放長遠，在豐收時積蓄五穀，以便荒年時得以存活。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                以台灣為例，上一章談過少子化的問題，本章稍加補充。現在生養孩子雖然有不少挑戰，但還在可以生養的時候，只要觀念正確、願付代價，就能生養。現在還能生養卻不生養，就是在浪費豐年，等到全國人口結構高齡化更加嚴重時，那時生養孩子，將會非常困難，那就是荒年來臨了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                環保問題也一樣，只提兩件事，現在大家拼命用塑膠袋，卻不知塑膠製品正在嚴重破壞環境與生態。許多人毫不節制地在吹冷氣，覺得愈冷愈舒服，卻不知這也在嚴重破壞人類賴以生存的大環境。南北極冰山融化、海水上漲、極端氣候變多，都跟我們如何享樂有關。現在還在豐年的尾巴，氣候的荒年很快會來到，我們改變享樂的消費習慣，能延長豐年、延緩荒年的來到。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                台灣的農業問題也很重要。由於年輕一代很少人願意務農，糧食進口成本也比較低，造成台灣糧食的自給率只有百分之三十，其他都仰賴進口。我們若只看眼前、貪圖便宜，不看長遠、繼續輕看農業，年輕人大多從事服務業或其他行業，台灣的糧食供應將產生很大的隱憂。由於氣候變化大，加上土地污染與崩壞，可預期未來全世界的糧食將會減產。當全球糧食減產，各國所產的糧食自己人民都不夠吃了，哪還有多餘的可外銷，就算有，價錢也肯定很貴。若台灣不開始加強自己的生產，卻繼續倚靠國外進口，屆時勢必面臨糧食不足的強烈衝擊。
              </p>
              <p className="text-gray-700 leading-relaxed">
                當初埃及若認為自己的國家不可能缺糧，而不願規劃未來、未雨綢繆，他們早已亡國了。因此我們要看見長遠的問題，從現在就著手改變，在糧食生產及生養孩子上多多成長，以預備未來之需。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、人生的豐年與荒年</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                除了國家政策，每個人的一生也會經歷年幼與年長、年輕與年老、今生與來生等不同形式的豐年和荒年。
              </p>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">一、年幼與年長</span>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 mt-2 ml-2">
                  <li><strong>0歲至三歲——三歲定終身，三歲開始第一個獨立期</strong>　從情緒的角度來說，到三歲屬於情緒的豐年，三歲以後進入情緒的荒年。孩童三歲以前若得到父母親足夠的愛，他的一生就充滿愛，將會是個有愛的人。我們要把握到三歲的時間，給孩子滿滿的愛，如此將能加增他們情感的滿足和付出愛的潛能。</li>
                  <li><strong>三歲至十二歲——十二歲開始第二個獨立期</strong>　十二歲以前是記憶知識學習的豐年，也是父母可以影響孩子的關鍵時期，這時孩子喜歡追著父母親，不願父母離開他們身邊，因此若要培養孩子的品格、習慣、價值觀，要把握這個時期。若父母錯失這段時間，沒有投資心力、時間在孩子身上，孩子十二歲以後已成為一個小大人，開始要走獨立的路，不再完全百依百順地聽父母的指示和安排，開始有自己的想法、做法，這時要再陶塑或改造他們，就來不及了。很多父母沒在十二歲以前多陪伴及訓練孩子，到了孩子十二歲以後，發現孩子有了獨立自主的不良表現，就認定孩子叛逆了。現代父母的作法與孩子成長的需求正好相反，孩子十二歲以前父母沒時間陪伴，十二歲以後孩子開始不願留在父母身邊，卻換父母追著孩子。荒年能有所得，乃因我們豐年時好好的栽種、培養，而孩子十二歲以後一切的表現，反應父母在他十二歲以前所栽種的結果。</li>
                  <li><strong>十二歲至十八或二十歲——十八或二十歲開始第三個獨立期</strong>　孩子十二歲後並非一定叛逆，乃是進入獨立期，獨立期能否有好的表現，關鍵在於十二歲以前父母在孩子身上的投資與陪伴。當父母給予孩子足夠的愛、教導、知識、品格訓練等，孩子在十二歲之後的獨立期就會有很好的創意和發揮。十二歲至十八（或二十）歲要讓兒女發揮創意，父母要以亦師亦友的身分陪伴。十二歲至十八（或二十）歲是技能學習的豐年，過了這段時期，學習力就降低了。要學習德國的教育模式，小學畢業前性向測驗，找出特質，中學分流，七成的人進入技職教育訓練，以致他們十八歲時就產生了一批優秀的技術人才，使國家保持富強。</li>
                </ol>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">二、年輕與年老</span>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 mt-2 ml-2">
                  <li><strong>二十歲至四十歲——四十歲可開始在各領域擔任領袖</strong>　古時是十八歲，近代是二十歲，開始結婚生養的豐年，最好能在大約三十歲生完孩子，再用十年把孩子都養大，因為四十歲之前有這樣的精力。根據醫學，廿二歲生的孩子最強壯，二十歲的成孕率是三十歲的十倍。三十歲以後不僅成孕率下降，懷孕的流產率及胎兒的殘病率也會逐漸上升，所以當把握年輕時光把孩子生養出來，並培育他們敬虔愛主。也預備自己四十歲之後能在適當的領域開始擔任領袖，包括職場的主管、教會的執事、長老、牧師等。</li>
                  <li><strong>四十歲至六十歲——六十歲可成為國家級的領導者、遮蓋者</strong>　四十歲是一個人從青壯年轉為中年期的開始，也是老化的開始，四十歲以後，記憶力、眼力、體力各方面都會減弱。若我們四十歲以前的豐年有在各方面作儲蓄，包含閱讀、記憶、學習、營養、工作經驗、生命智慧、生養兒女等，我們四十歲以後不僅能過得很好，還能在各種不同領域擔任領導人。並且這樣的操練也使我們能在六十歲之後承擔國家級的領導、遮蓋責任，甚至在國際領域發揮大的影響力。</li>
                </ol>
              </div>

              <div>
                <span className="font-semibold text-indigo-700">三、今生與來生</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  當我們還活著，就要積財寶在天上，讓我們的人生是金銀寶石的建造（林前三12）。耶穌提到一個聰明的管家（路十六1-12），他要被辭退前，更改了欠債人的帳目，減少他們的債，這管家挪移主人的財產，好叫他被辭退後，這些欠債的人會接待他。耶穌講這個比喻，不是在講道德的問題，而是講一個類似豐年與荒年的真實情況。我們還在世上，是豐年，如同那位管家在職位上有管理金錢的權柄；我們離開世上，是荒年，如同那位管家失去職位，不再能管理主人的錢財，事先存多少就有多少。
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  我們在世上時，可以擁有錢財，但這些錢財不真正屬於我們。我們在世上若懂得奉獻錢財，就是積蓄財寶在天上，天上才是我們永遠要居住的地方，天上的基業才是我們的。除了錢財上的奉獻，我們還要有其他金銀寶石的建造，包括時間的奉獻、恩賜才幹的服事、敬拜禱告的事奉、對人真誠表達愛、傳福音帶門徒、在家庭社區職場建立愛的團契等。地上的建造是我們的豐年，使我們到了天上可享有地上所建造的一切，不要屆時才發現自己一無所有，如同進入沒預備的荒年。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                約瑟是蒙愛之子，這使得他很有安全感與自信心，能積極面對種種苦難環境。約瑟也是敬拜禱告的人，因此不管在甚麼環境，都有神的同在，使他不斷反敗為勝，至終成為全埃及的掌權者。我們也是蒙愛之子，有神的同在，因此也當好好預備自己，成為神國度的人才，將來與主一同在全地掌權。
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
                '約瑟一生與六個夢有關，由淺入深：自己年少的兩個異夢、獄中為酒政膳長解的兩個夢、最後為法老解的兩個夢，逐步印證他與神關係的親密與成熟。',
                '約瑟解夢時三次強調「這不在乎我，乃是神」，顯明他不居功，乃是要引導法老認識獨一真神，兼具先知性（宣告）與使徒性（提出對策並執行）的事奉。',
                '豐年當為荒年預備，是貫穿國家與個人的普遍原則：台灣面臨少子化、環保、農業自給率下降等「即將到來的荒年」，都需要在豐年時未雨綢繆。',
                '人生也有各階段的豐年與荒年：0-3歲是情緒豐年、3-12歲是記憶學習豐年、12-18(20)歲是技藝豐年、20-40歲是生養與立業豐年、40-60歲是儲備與領導的豐年，把握各階段豐年才能安度日後的荒年。',
                '今生是可支配資源的「豐年」，來生則是「荒年」（不再能運用地上的財物），因此當趁著今生積財寶在天上，包括錢財奉獻、時間、恩賜、傳福音帶門徒等各樣屬靈的建造。',
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
              '約瑟從作夢的人成為解夢的人，有哪些過程？可以如何應用在我們身上？',
              '世界級、國家級的豐年與荒年正在發生，你能從哪些方面看出來？我們當如何積極因應？',
              '人生有哪些豐年與荒年？你與你的兒女分別在什麼階段？你會有何具體行動？',
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
