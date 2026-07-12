import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch53() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第53章</h1>
        <h2 className="text-xl font-semibold text-gray-700">為父的雅各</h2>
        <p className="text-gray-500 mt-1">這一切是以色列的十二支派；都是按着各人的福分為他們祝福。　創世記四十九28</p>
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
              願本章信息能使已經為父、將要為父的都得到祝福與幫助！雅各有十二個兒子，繁衍成以色列十二支派。在亞伯拉罕、以撒、雅各三位列祖中，雅各擁有最多兒女，父親的角色最為吃重。雅各生命的成長與養育兒女的過程密切相關。他的生命從抓取變為分享，從貧乏變為豐盛，都與身為父親有關，更與天上父親的賜福帶領有關。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、雅各十二個兒子名字的意義</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                雅各在巴旦亞蘭母舅拉班那裡，生十一個兒子（創廿九31~三十24），離開拉班之後，在迦南地接近伯利恆的地方生下小兒子便雅憫，妻子拉結難產而亡（卅五16-19）。雅各為所生的每個孩子命名都有意義，特別與他們出生時的情境有關。雅各的十二個孩子，按出生先後順序為流便、西緬、利未、猶大、但、拿弗他利、迦得、亞設、以薩迦、西布倫、約瑟、便雅憫。
              </p>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">一、利亞的兒子</span>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mt-2 ml-2">
                  <li>流便：「有兒子」之意，流便是利亞的第一個孩子。雅各愛拉結勝過愛利亞，神看見利亞失寵（原文被恨），因此使她懷孕生子（創廿九31-32）。</li>
                  <li>西緬：「聽見」之意。利亞說，神聽見我失寵，所以又賜我這個兒子，所以給他起名叫西緬（創廿九33）。聖經中有一些人物的名字跟「聽見」有關，例如：撒母耳是「聽見神」或「聽神」之意，以實瑪利是「神聽見」之意。</li>
                  <li>利未：「聯合」之意。如此起名，因利亞說：「我給丈夫生了三個兒子，他必與我聯合。」（創廿九34）後來利未成為祭司的支派，為以色列國度帶下百姓與神聯合的果效。</li>
                  <li>猶大：「讚美」之意。利亞為雅各連生四個孩子，因此歡喜快樂、讚美耶和華（創廿九35）。猶大雖為四子，後來卻得著長子的位分，表示我們一切的服事都要以讚美為首。讚美走在前頭，事情就能成就，猶大王約沙法是最好的例子。他按神的指示，讓讚美的隊伍走在前頭，結果大獲全勝（代下二十21-22）。</li>
                  <li>以薩迦：「價值」之意。因神給了她價值（創卅18）。</li>
                  <li>西布倫：「同住」之意。利亞為雅各生了六個孩子，她說雅各必與她同住（創卅20）。雅各能與她生養六個孩子，表示雅各仍有盡到丈夫的本分。雖然雅各原來只愛拉結，但後來也與利亞慢慢培養出感情，而有正常的性生活。</li>
                </ul>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">二、辟拉（拉結的使女）的兒子</span>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mt-2 ml-2">
                  <li>但：「伸冤」之意。利亞已連生了四個孩子，拉結卻仍無法生育，於是拉結把婢女辟拉給雅各為妾，辟拉與雅各同房，為她生了孩子（創卅1~5），拉結說：「神伸了我的冤。」（創卅6）但後來發展成為判斷、審判的支派。</li>
                  <li>拿弗他利：「相爭」之意。因拉結的婢女辟拉又為她生了一個兒子，她很高興地說：「我與我姊姊大大相爭，並且得勝。」（創卅8）</li>
                </ul>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">三、悉帕（利亞的使女）的兒子</span>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mt-2 ml-2">
                  <li>迦得：「萬幸」之意。拉結讓她的婢女幫她生了兩個兒子，利亞不甘示弱，也讓自己的婢女悉帕幫她生孩子，結果生了雅各的第七個兒子迦得，表示幸運又回到她這邊（創卅9-11）。</li>
                  <li>亞設：「有福」之意。因利亞的婢女悉帕又為她生了一個兒子，她就將他取名為亞設，表示她是有福的（創卅12-13）。</li>
                </ul>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">四、拉結的兒子</span>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mt-2 ml-2">
                  <li>約瑟：「增添」之意。約瑟是雅各與他所愛的妻子拉結生的第一個孩子，拉結希望神再為她增添孩子，所以取名約瑟（增添），後來果真再擁有一個孩子——便雅憫。約瑟擁有雙份、加倍的祝福，他的兩個兒子以法蓮、瑪拿西分別成為以色列的兩個支派，使以色列十二支派變為十三支派。</li>
                  <li>便雅憫：是「右手之子」的意思。雅各回到迦南地，在接近伯利恆的地方，神再為拉結增添一個兒子，雅各為他取名為便雅憫，心中以他為最得力的助手，所以取名「右手之子」。聖經中的翻譯，「便」、「巴」的原文都是「兒子」，因此流便是「有兒子」，便雅憫是「右手之子」，巴底買是「底買的兒子」，巴耶穌是「耶穌的兒子」，巴拿巴是「拿巴的兒子」。</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                <strong>小結</strong>　雅各十二個兒子的名字，與他們後來的發展有關，我們為孩子命名一定要選擇正面意義的名字，因這些名字會影響孩子的心理感受與後來的實際發展。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、雅各對十二個兒子的預言（創四十九1-28）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                當雅各的十二個孩子都已長大成人、結婚生子後，雅各臨終前，為十二個孩子祝福並預言。雅各的預言，除了跟每個孩子出生時的命名有關，也跟他們個人的表現有關。這表示我們除了有與生俱來的資質，也要加上後天的教養與努力，兩者對每個人的生命都有重要的影響。雅各是敬虔的人，他有很好的價值觀和道德意識。雅各的預言並非只說好話，他也會針對犯罪部分說出審判性的話語。
              </p>

              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-indigo-700">一、流便（創四十九3-4）</span>
                  <p className="text-gray-700 leading-relaxed mt-1">流便本當享有長子的尊榮，在道德上有好榜樣，但他放縱情慾，與父親雅各的妾上了床，所以不得居首位。現代人認為沒有所謂的道德，什麼都是相對的，高喊：「只要我喜歡，有什麼不可以」。如今台灣因著縱慾，愛滋病蔓延越來越嚴重，同性戀族群、異性戀族群都在傳染。唯有每個人都堅守「一夫一妻，一生一世」，方能避免不好的魂結與傳染，否則淫亂的罪行，必定導致亡國滅種。</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">二、西緬（創四十九5-7）</span>
                  <p className="text-gray-700 leading-relaxed mt-1">依照摩西律法，男人強暴未婚配的處女罪不致死，但需負責任，娶那女子為妻；倘若女方的父親不同意將女兒嫁給那男子，男子就要拿錢出來作為遮羞費（出廿二16-17）。當時示劍表達誠意，願意娶底拿（創卅四4、8~12），但底拿的哥哥西緬和利未卻過度報復，將對方和他們城中的男子全數殺盡（創卅四5-29）。西緬和利未兩兄弟在示劍的殘暴行為，使他們被預言後裔散居在以色列，此預言在以色列進迦南後應驗，西緬支派的地業是散在猶太地業之中。流便、西緬的縱慾和殘暴，與台灣的墮胎問題息息相關。人先放縱情慾，結果懷了孕又不想生養，於是選擇墮胎，殺害胎兒。目前台灣每年墮胎人數超過四十萬，每天墮胎人數平均一千多人。有多少人為這些無辜被殺的胎兒發聲？神厭惡流人血的罪，台灣若繼續敗壞下去，很可能會像西緬支派，流散各地。唯有帶領更多百姓悔改歸向神，活出聖潔，才會有活路。</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">三、利未（創四十九5-7）</span>
                  <p className="text-gray-700 leading-relaxed mt-1">利未與西緬同樣犯了殘暴罪而散居各地，但利未支派經歷重要轉捩點，與西緬支派有截然不同的結局。以色列出埃及到曠野時，摩西遵循神指示，到西乃山上四十晝夜禱告（出廿四18）；當摩西領受神的律例典章，帶著法版下山時（出卅一18），看到百姓拜金牛犢（出卅二1-20）。摩西說：「凡屬耶和華的，都要到我這裡來！」（出卅二26）結果利未的子孫們都到摩西那裡，這是利未人翻轉的重要契機。本來因利未犯罪，利未子孫承擔罪的後果，被迫散居以色列，但當他們回轉歸向神，跟神站在一起，就破除從祖先而來的咒詛，改變了族群的未來，化咒詛為祝福。利未支派後來被神揀選為祭司的支派，雖然散住各支派，但他們是在執行祭司性的事奉。因他們以神的心為心，以神的忿恨為忿恨，明白神的聖潔、公義。摩西、亞倫皆出自利未支派，他們全然為神擺上，帶領以色列百姓，這也是利未支派反敗為勝的原因之一。</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">四、猶大（創四十九8-12）</span>
                  <p className="text-gray-700 leading-relaxed mt-1">「猶大是獅子，弟兄們要讚美他，向他下拜，圭必不離猶大，杖必不離他兩腳之間，直等到細羅（賜平安者）來到，萬民都要歸順。」（創四十九8-12）圭是王使用的物品，表示猶大的後裔要成為君王。以色列的第一個王掃羅王屬便雅憫支派，從第二個王大衛開始，都是猶大支派作王，起初是全以色列的王，後來是南國猶大的王，正如雅各「圭必不離猶大」的預言，直到亡國被擄。新約時代的約瑟、馬利亞，以及所生的基督耶穌，都是大衛的後裔。雅各的祝福，不僅預言君王要從猶大支派而出，更指出萬民都要歸順，這也在耶穌基督身上應驗了。</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">五、西布倫（創四十九13）</span>
                  <p className="text-gray-700 leading-relaxed mt-1">「成為停船的海口」代表漁業和商業，具有海洋特色，可輸入、輸出貨物。</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">六、以薩迦（創四十九14-15）</span>
                  <p className="text-gray-700 leading-relaxed mt-1">「是個強壯的驢，臥在羊圈之中，以肥地為美，低肩背重，成為服苦的僕人」，可代表畜牧業、工業、服務業。</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">七、但（創四十九16-17）</span>
                  <p className="text-gray-700 leading-relaxed mt-1">「判斷他的民」代表司法界，又說「但必作道上的蛇，……咬傷馬蹄，使騎馬的墜落」，這帶有負面的含意。如同流便的預言有負面成分，雅各給但的預言也是如此，表示神看到但支派未來不好的發展。後來但支派設立金牛犢，拜偶像遠離神。甚至啟示錄七章的十二支派名單沒有「但」的名字。</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">八、迦得（創四十九19）</span>
                  <p className="text-gray-700 leading-relaxed mt-1">迦得會爭戰得勝，代表軍人。</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">九、亞設（創四十九20）</span>
                  <p className="text-gray-700 leading-relaxed mt-1">「亞設之地必出肥美的糧食，且出君王的美味」，代表農業、餐飲業。</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">十、拿弗他利（創四十九21）</span>
                  <p className="text-gray-700 leading-relaxed mt-1">「釋放的母鹿」是活潑奔放的，代表藝術、音樂；「出嘉美的言語」，可代表教師、教授。</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">十一、約瑟（創四十九22-26）</span>
                  <p className="text-gray-700 leading-relaxed mt-1">約瑟是「泉旁多結果子的枝子」，並且「那全能者必將天上所有的福、地裡所藏的福，以及生產乳養的福，都賜給你。」約瑟生出兩個支派，生養的子孫最多。約瑟「與弟兄迥別」，可代表先知、傳道、牧者，能從神領受啟示，並牧養許多人。</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-700">十二、便雅憫（創四十九27）</span>
                  <p className="text-gray-700 leading-relaxed mt-1">便雅憫是「撕掠的狼」，看來雖然負面，但這是圖像式的描述。「早晨要吃他所抓的，晚上要分他所奪的」，可代表基層勞工，早上出門工作、付出勞力，晚上得著他所應得的收穫、報酬。</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-3">
                <strong>小結</strong>　雅各在聖靈的帶領下祝福十二個孩子，在雅各十二個孩子身上，我們看到行行出狀元，每個孩子可代表不同的行業，分別具有不同的恩賜，呈現出一個國家所需人才的完整圖畫。有些父母用自己的喜好，去強迫孩子往自己喜歡的方向發展，可能帶來反效果。雅各乃是接受神放在每個孩子身上的恩賜，按照聖靈的感動，祝福他的孩子們。華人的社會，認為萬般皆下品，唯有讀書高，忘記行行出狀元的價值。但我們要效法雅各，對職業不帶偏見，按照神的心意，針對孩子的個人特質來養育及祝福每個孩子，使我們的下一代，經歷行行出狀元的豐盛。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、雅各作為父親的優缺點</h3>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">一、優點</span>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 mt-2 ml-2">
                  <li><strong>付出代價娶妻生子（創廿九20、30）</strong>　雅各為兩個妻子各工作七年，共十四年，以此為聘禮。雅各接著負起養家活口的責任，為孩子們又工作六年。相較於雅各，現代的年輕人，往往想到結婚生子要付代價就打退堂鼓，造成晚婚、不婚，是國家很大的危機。</li>
                  <li><strong>辛勤工作成為富足（創卅25-43）</strong>　辛勤工作加上神的賜福，使雅各成為富足的人。神樂意幫助他的兒女成為富足，但我們有責任去付出勤勞和用心。富足後並非去揮霍、浪費，而是能分享給別人。主要是能養育更多孩子，然後也分享給有需要的人，這會使我們的生命更豐盛。</li>
                  <li><strong>設立祭壇守望家庭（創卅五1-7）</strong>　雅各效法亞伯拉罕、以撒，在不少地方設立祭壇，親近神、守望家庭，也祝福那地。</li>
                  <li><strong>領導全家適時應變（創四十二1-7）</strong>　當迦南地發生饑荒，雅各承擔父親的角色，領導全家應變，並指示兒子們前往埃及買糧食，最後帶著全家族去住在埃及，使全家族得保全。</li>
                  <li><strong>預言祝福傳遞信心（創四十九1-28）</strong>　雅各帶領全家族到了埃及，他先為埃及法老王祝福，接著為約瑟的兩個兒子祝福，並為他的十二個兒子祝福。因著聖靈的帶領，雅各的祝福非常準確；他能如此預言，表示他與神相通，正如同異夢中的天梯，有使者上去下來（廿八10~17）。雅各的祝福，也向兒子們傳遞了對神的信心，使他們相信神所說的話。</li>
                </ol>
              </div>

              <div>
                <span className="font-semibold text-indigo-700">二、缺點</span>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 mt-2 ml-2">
                  <li><strong>偏愛一妻造成競爭（創廿九30-33）</strong>　雅各不愛利亞，偏愛拉結，造成兩姊妹爭奪寵愛。若是一夫一妻，就不會有這樣的問題。</li>
                  <li><strong>偏愛一子造成衝突（創卅七3-4）</strong>　雅各偏愛約瑟，造成約瑟與其他兄弟間的衝突，甚至差點害死約瑟。身為父母親要常常檢視自己是否偏心，並求神幫助我們克服老我，以神的眼光看待每個孩子、以神的心意教養每個孩子。我們愛可愛的孩子，也愛不可愛的孩子，能看見他（她）的優點，看見神在他（她）身上的美好旨意，並與神同工，養育、帶領孩子走在神的命定中。人會失誤，但神卻不失誤，雖然雅各偏心，哥哥們懷著惡意，但神有更大的恩典，約瑟被賣到埃及為奴，最終卻成為整個家族的拯救者。</li>
                </ol>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                雅各的十二個兒子，正是今日猶太人的祖先。現今猶太人有一千五百萬人，佔全世界總人口千分之二，但諾貝爾獎的得主，他們佔了五分之一。猶太人在美國有五百多萬人，佔美國總人口百分之二弱，但他們在哈佛、耶魯、康乃爾大學等名校，佔了百分之二十的名額。雖然猶太人祖先雅各的生命不完美，但他勇於作父親，敬畏神，並且以神的眼光，看待神在每個兒子身上的命定，使他十二個兒子的後裔，成為今日全世界最優秀的民族。雅各正是普世父親的榜樣，他信靠神，付代價，養育十幾個兒女長大成人，幫助他們成家立業，並對神有信心。縱使他有缺點，但仍堅守父親的崗位，直到年老臨終，大有權柄為兒子們預言祝福，使十二個兒子繁衍成為以色列民族的十二個支派，不僅成為一國，更是列國的祝福。我們要效法雅各，成為合神心意的父母，幫助孩子進入命定，被神使用，成為多人的祝福。
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
                '雅各十二個兒子的名字都與出生情境有意義的關連（流便、西緬、利未、猶大、但、拿弗他利、迦得、亞設、以薩迦、西布倫、約瑟、便雅憫），命名深刻影響孩子日後的發展。',
                '雅各臨終的預言兼顧道德與恩賜：流便因亂倫失去長子位分，西緬利未因殘暴分散各地（但利未後來因跟隨摩西悔改轉禍為福），猶大得著君王的應許，約瑟得雙份祝福。',
                '雅各十二個兒子的預言呈現出行行出狀元的完整圖畫，涵蓋司法、軍事、農業、藝術、先知牧者、勞工等各行各業，父母應按神放在孩子身上的恩賜來養育，而非強迫孩子順從自己的喜好。',
                '雅各作父親的優點包括付代價娶妻生子、辛勤工作致富、設壇守望家庭、適時領導應變、憑聖靈預言祝福；缺點是偏愛一妻一子造成的家庭競爭與衝突。',
                '猶太人雖僅佔世界人口極小比例，卻在諾貝爾獎、頂尖名校中佔有極高比例，印證雅各雖不完美，仍以神的眼光養育十二個兒子，使後裔成為全世界最優秀的民族之一。',
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
              '雅各十二個兒子的名字都是有意義的，後來也產生了實質的影響。請分享你的名字對你的影響，也分享你會如何為你的兒女取名字。',
              '雅各對十二個兒子的預言，後來都一一應驗。請每人選擇其中一項你最有感覺的預言，分享你的感動與應用。',
              '雅各作為父親，有何優點與缺點？我們可以如何效法及引以為鑑？',
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
