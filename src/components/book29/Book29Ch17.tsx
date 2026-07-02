import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch17() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第十七章</h1>
        <h2 className="text-xl font-semibold text-gray-700">單身的亞當</h2>
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
              神造了亞當，還沒有造出女人之前，就頒佈了不可吃分別善惡果的禁令，也吩咐他要修理、看守伊甸園，並且讓他為所有動物命名。這代表神要亞當在婚姻家庭中擔任「頭」的角色，負責領導妻子、兒女。正如同保羅在書信中所強調的：「我願意你們知道，基督是各人的頭；男人是女人的頭；神是基督的頭。……男人本不該蒙著頭，因為他是神的形像和榮耀；但女人是男人的榮耀。起初，男人不是由女人而出，女人乃是由男人而出。並且男人不是為女人造的；女人乃是為男人造的。」（林前十一3-9）「我不許女人講道，也不許她轄管男人，只要沉靜。因為先造的是亞當，後造的是夏娃；」（提前二12-13）這裡的「講道」，原文是「教訓」，保羅的意思是，不許女人教訓男人。以下分「修理與看守」及「為動物命名」兩段來分享。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、修理與看守</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                修理與看守是男人單身時就要做的事。這兩件事不完全一樣，各有其重要性。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">服事的生命</span> — 修理這個字的希伯來文是 עָבַד（abad），在舊約聖經中出現262次，大部分翻譯作「服事、事奉」，少數翻譯作「耕種、做工」，僅有創世記二15與申命記廿八39兩處翻譯作「修理」，配合上下文，可以改翻譯作「耕種或事奉」。而且舊約中翻譯作「修理」大部分是用別的希伯來字。因此亞當剛在伊甸園登場時，神可能不是吩咐他做修理的工作。翻譯為「耕種」，稍微合理一些，因為創世記二5說：「野地還沒有草木，田間的菜蔬還沒有長起來；因為耶和華神還沒有降雨在地上，也沒有人耕地。」其中「耕」的原文與創世記二15的「修理」是同一個字 עָבַד（abad）。既然前面說沒人耕地，現在有人了，就可以來耕地了。若翻譯作「服事」也很合適，因為神很可能是要亞當在伊甸園服事，而非限定在「修理或耕種」的事。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                男人理當是耕種的人，也是服事的人，從兒童期、少年期就該操練、學習，長大成人後才會是一個能工作、能負責任的人。耶穌的人生，是服事的人生，他說：「人子來，並不是要受人的服事，乃是要服事人，並且要捨命作多人的贖價。」（可十45）這樣的生命，神希望培養在亞當身上，也培養在每個男人身上。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                最好能學習德國人、猶太人的教育模式，讓兒女在兒童期就參與家事、學習理財。德國人工作的技能及負責的態度，全球首屈一指；猶太人的理財、經營，全世界第一，這都與提早操練有關。根據統計，兒少時期參與做家事的人，其品格與社會成就都比沒做家事的人高很多，犯罪率則低很多。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                德國人小學畢業前作好性向測驗（10-12歲小學畢業），知道自己的特質適合從事什麼工作，進入初中就分流了，約四分之三的人在未來六至八年中，得到完整的技職教育，十八歲就進入職場，成為合格優秀的工作人才，這樣要二十多歲結婚就很容易。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                猶太人的女孩子，被培養於十二歲就能為全家人做出完整的晚餐，類似成年禮。因此，猶太女人在作母親這件事上，是全世界最稱職的。猶太成年女性就業率低於所有已開發國家，因為她們優先選擇做專職母親。她們有最強的母親，以優勢的家庭教育，訓練出最強的下一代，在良好循環中，使猶太人一直是非常優秀的民族。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                以色列的猶太人不僅有很好的家庭教育，也有充滿啟發、創意、扎實的學校教育，十八歲高中畢業，已具有進入社會工作的能力。在以色列國內還加上一項，男女都要服兵役，男的三年、女的兩年，服兵役不會浪費時間，除了保家衛國之外，他們有一套訓練計畫，讓人在服兵役期間，大大提升職場能力。這樣一退伍，立刻就能投入職場，或者暫時出國遊歷一下，再投入職場。他們讀大學的比例不高，一旦讀大學，就是預備要成為醫學、科學、法律、教育人才。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                雖然猶太人只占全世界人口的千分之二，卻得到超過百分之二十的諾貝爾獎，是其他民族的一百倍。這種教育方法，不是他們自己發明的，乃是神所指示的。所以我們務必讓兒女參與做家事，且按兒女性向，讓四分之三的人進入技職體系，才能有最優秀的下一代。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">二、看守的責任</span> — 看守這個字的希伯來文是 שָׁמַר（shamar），在舊約聖經中出現440次，可翻譯作看守、遵守、守（節、約、門）、謹守、保佑、保護、小心、謹慎、收存、窺察、究察、等候等。其中看守、保護占最多。舊約學者約翰．華爾頓指出，描述亞當職任的第一個字 עָבַד（abad），最常用來談論人對神的服事；而第二個字 שָׁמַר（shamar），則常與祭司利未人的工作有關。若以伊甸園為一個神聖的空間，亞當有可能是被賦予祭司的職任，料理這個神聖空間。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                所以亞當在伊甸園除了有耕種、服事，作一個僕人領袖之外，還要看守、保護這園子，作一個祭司。「看守」的責任，隱含了可能有仇敵、破壞者，這個仇敵就是將會以蛇的樣子出現的魔鬼撒但。看起來，亞當後來並沒有盡到看守、保護的責任，以致於讓夏娃被魔鬼欺騙成功，而且自己也跟著掉入陷阱。人若被仇敵窺視，伺機攻擊，而自己卻完全不知有仇敵，這是非常危險的。正如二戰時日軍偷襲珍珠港，大獲全勝，因為美國認為日本不會來打美國，沒有做任何防備。
              </p>
              <p className="text-gray-700 leading-relaxed">
                我們一定要知道有三仇敵（魔鬼、世俗、私慾），並且每天警醒防備，才能夠不被偷襲成功，不掉入仇敵的陷阱。具體方法，除了每天為自己做保護禱告，也要有「生死盟」，就是能天天彼此代禱的屬靈同伴。若是已婚的，夫妻也要每天同心禱告。目前有「復興禱告小組」（簡稱RPG），進行RPG也能有效產生事奉建造與看守防備的果效。詩篇一二七篇：「若不是耶和華建造房屋，建造的人就枉然勞力；若不是耶和華看守城池，看守的人就枉然儆醒。」這裡說出二件最重要的事──建造與看守；這與亞當在伊甸園要做的二件事──服事與看守，大體上是一樣的。這句話還說出，不單是人在做，乃是神在做，我們需要藉著禱告與神同工，才能把建造與看守做好。我們一直會需要建造，也一直會需要看守。這樣才能有豐盛、得勝的生活。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、為動物命名</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記二19-20：「耶和華神用土所造成的野地各樣走獸和空中各樣飛鳥都帶到那人面前，看他叫甚麼。那人怎樣叫各樣的活物，那就是他的名字。那人便給一切牲畜和空中飛鳥、野地走獸都起了名；……」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">一、「叫」與「名字」的意義</span> — 「叫」的希伯來文是 קָרָא（qara），有呼喚、召喚、稱呼、宣告的意思。這字在舊約出現689次，是很重要的字。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「名字」的希伯來文 שֵׁם（shem），在舊約聖經出現771次，是非常重要的字。用在神的名、人的名、城的名、動物的名、河的名等，其中以神的名占最多，人的名第二多。詩篇是充滿禱告的一卷書，שֵׁם（shem）這個字在詩篇出現104次，大部分是講神的「名」，因為讚美、感謝、認罪、祈求都會用到神的名。主禱文的第一個禱告，也是「願人都尊你的名為聖」，可見「名」的重要性。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                以賽亞書五十六4-5：「因為耶和華如此說：那些謹守我的安息日，揀選我所喜悅的事，持守我的約的太監，我必使他們在我殿中，在我牆內，有紀念，有名號，比有兒女的更美。我必賜他們永遠的名，不能剪除。」這裡的「名號」與「名」都是 שֵׁם（shem）這個字，我們在神面前有名號，是很寶貴的。有一天，最後的審判是根據一個人的名字有沒有在生命冊上（啟二十12-15）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                此時是亞當「叫」動物的名，為動物命名；到亞當、夏娃吃禁果以後，換成是神「呼喚」亞當，都是用這個字。延續這個呼喚，神對以色列百姓也是如此呼喚：「萬軍之耶和華說：我曾呼喚他們，他們不聽；將來他們呼求我，我也不聽！」（亞七13）這裡的「呼求」也是同一個字。神呼喚人、人求告神都是用這個字，這代表一種親密關係，其中也包含了權柄與愛。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神創造人之後，將管理全地的權柄賜給亞當（創一28），這是對基督一個很重要的預表，因為基督將會真正的管理全地。主在升天前宣告說：「天上地下所有的權柄都賜給我了，所以你們要去使萬民作我的門徒。」（太廿八18-19）當主再來時，他要作全地的王，統管列邦（啟十一15，二十4-6）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">二、愛與權柄的關係</span> — 在創世記二19，亞當開始實行神所賜給他的權柄——亞當給一切牲畜、飛鳥、走獸取名字。人為動物取名字表明一種權柄的關係，也是愛的關係。父母也為兒女取名字，因兒女是屬於父母的，兒女在父母的愛與權柄之下。亞當也為妻子取名字，先稱她為女人，後來給她起名叫夏娃（創二23，三20）。我們信耶穌之後，可能會有一個新的名字，如西門的新名是彼得（約一42），約翰的新名是雷子（可三16-17）。使徒約翰見證主耶穌說：「他按著名叫自己的羊，把羊領出來。」（約十3）不管我們有沒有取新名，當耶穌按名字叫我們時，那是一種奇特的經歷，是愛與權柄關係的建立。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在領導、牧養的工作上，按名字數點羊群是很重要的一件事，這事正如同基督按名字叫他的羊一樣。當牧者為信徒一一提名代禱並且作個別關懷時，那是愛，也是權柄，區長、小組長的事奉也是如此。若不提名代禱，原有的羊可能會失去；若提名代禱，原本關係不密切的信徒也能成為關係密切的同工。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅書信中有一個很大的特色，就是在信中或信末，常常提名問安（羅十六3-16，西四7-18），這包含著愛與權柄的關係。他的問安不是虛應故事，而是有深刻的負擔，及真實的愛的關係。他因愛他們，所以在他們當中也有權柄。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">三、數點羊群的方式</span> — 聖經中記載了兩種數點百姓的方式，尼希米與摩西所作的是同一種方式，他們數點百姓，都是按著家譜計算（尼七5-60，民一2-19），這是合神心意的作法。另一種方式是大衛所作的，他沒有照家譜計算百姓，而是派元帥約押走遍全國，直接計算百姓的數目，這事神不喜悅，以致神降下瘟疫（撒下廿四1-9）。神不喜悅的原因，聖經沒有明講，但可以比較出來兩項明顯的差異，一是關於神的感動，摩西、尼希米都有神清楚的感動，而大衛沒有，可能只是想讓自己有安全感、成就感。二是關於神的方法，摩西、尼希米都按家譜數點，而大衛沒有。我們可以仔細思想這個差別。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                家譜裡名字一個個被記錄下來，每個名字都代表一個寶貴的人。主耶穌曾說過一個比喻：一百隻羊少了一隻，牧羊人放下九十九隻羊，尋找失落的一隻。九十九對某些人來說可能只是個數字，和一百差不了多少，少一個就算了。但主的看法不是這樣，失落的那隻羊是很寶貴的，不論如何也要將牠找回來。所以不是說今天教會有九十九個人聚會，或小組有九個人聚會，好像很不錯，就以此為滿足。而是要有耶穌的心腸，若有一個應該來到神面前卻沒有來的，就要去將他找回來。
              </p>
              <p className="text-gray-700 leading-relaxed">
                教會同工數點聚會的人數，但若只是看數字的多少，那不是神的心意；若按名字數點，確實知道那一位信徒來或沒來，以便代禱、關懷，這才是合神心意的。亞當使用神給他的能力，來實行管理的權柄，他用口叫各樣的活物，並用智慧為各樣活物命名。但有一件關鍵的事是神做的——神把各樣活物帶到那人面前（創二19）。不是亞當召聚這些活物，乃是神召聚。這事顯明一個真理，亞當固然有能力，但非全能，唯有倚靠神，密切與神同工，才能實行其管理的職責。這樣的原則，基督在世時也作了榜樣，他凡事順服父的旨意，父所做的事他才做（約五19-20）。連基督也不單獨做事，我們更不能單獨做事，而要凡事與神同工，並且儘量與人同工。不管我們能力多大，不可能單獨完成所有工作，一定有些工作是神親自做的。神自己不做全部，也不要人做全部，乃要人與神同工，來完成工作。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                服事、看守很重要，命名也很重要。神能使用每一個人，都如同亞當所做的，進行修理、看守，及命名的工作。透過生死盟、復興禱告小組，進行彼此代禱及提名代禱，包括牧養羊群的個別需要及福音朋友的情況。每個人都能成為小牧者，從牧養一人、二人開始，逐漸增加到三人、四人。我們與神同工，也與人同工，使我們藉此成長，而有豐盛的生命。
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
                '「修理」（עָבַד，abad）本意更接近「服事、事奉」而非單純耕種，「看守」（שָׁמַר，shamar）常與祭司職分有關，亞當在伊甸園可能同時是僕人與祭司的角色。',
                '德國與猶太的教育模式（提早分流技職、家事訓練、理財教育）印證了男人從兒童期就該操練服事的原則，猶太人雖僅占世界人口千分之二卻獲得超過20%諾貝爾獎。',
                '「叫」（קָרָא，qara）與「名字」（שֵׁם，shem）是重要的希伯來字，亞當為動物命名表明愛與權柄的關係，最後審判也根據名字是否在生命冊上（啟二十12-15）。',
                '數點百姓有兩種方式：摩西、尼希米按家譜數點（合神心意），大衛派元帥直接計算（神不喜悅，降下瘟疫）；按名字數點代表個別的愛與關懷，而非只看數字多寡。',
                '亞當固然有能力但非全能，是神把活物帶到他面前，唯有倚靠神、與神同工才能實行管理職責；這原則也適用於今日的牧養與服事，凡事與神同工、與人同工。',
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
              '單身的亞當做了哪些事？這提示我們應如何做兒童、青少年的培育？',
              '「看守」有何重要性？我們當如何進行「看守」這件事？',
              '亞當為動物命名，有愛與權柄的關係，可以怎樣應用在基督徒現在的生活、事奉中？',
              '數點百姓的方式有哪兩種？哪一種是正確的？如何應用在今天的事奉？',
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
