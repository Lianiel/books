import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Waves, Star, Search, HelpCircle, Check } from 'lucide-react';

const quote = "border-l-4 border-emerald-300 bg-emerald-50 pl-4 py-3 mb-3";
const quoteText = "text-emerald-800 leading-relaxed italic";

export default function Book40Ch14() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-800 to-orange-900 bg-clip-text text-transparent">第十四章</h1>
        <h2 className="text-xl font-semibold text-gray-700">第七誡（四）：不可姦淫——離婚</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          「凡休妻另娶的，若不是為淫亂的緣故，就是犯姦淫了。」（太19:9）
        </p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Waves className="w-5 h-5 text-amber-800 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">一、婚姻解體的四個原因</h3>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">一、過分理想化的期望</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  （一）人在擇偶時，常會愛上的人，是擁有在自己身上看不到、卻呈現在所愛異性身上的那些特質，但婚後卻又極力排斥！
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  （二）婚前對伴侶期望過高，又對婚姻與伴侶缺乏實際的了解，是造成婚姻悲劇的主因。人在戀愛中常是盲目的，婚前對伴侶的優點敏感，婚後卻只對伴侶的缺點有反應。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">（三）不健康的結婚動機：</p>
                <p className="text-gray-700 leading-relaxed pl-4 mb-3">
                  1. 心理沒有安全感、自卑、寂寞、沒自信，需要找人依賴，解決這些心理問題。婚姻是無法改變人低落的自我觀念和價值感的！<br />
                  2. 想逃避舊有、痛苦的環境，把婚姻當成避難所！<br />
                  3. 男大當婚、女大當嫁的壓力。<br />
                  4. 朋友之間的壓力，被大家公認之後，為了別人的期望，不好意思分開。<br />
                  5. 奉「兒女之命」結婚（未婚懷孕）。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  （四）婚姻不能犯「尋找救主」的心態，美滿的婚姻必須是要自己先成為合適的伴侶。一個健康的婚姻，不應是一個50%的「半人」，加上另一個50%的「半人」；而必須是一個100%的人，加上100%的人。所以，無法在婚前學會獨立自主，先做一個「快樂的單身者」，就無法在婚後做個快樂的人。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  （五）我們必須認清一點：除了上帝之外，沒有任何伴侶能滿足人對支持、倚靠和安全感的終極渴望。因此，「信仰」在美滿婚姻的建立上，扮演極為重要的角色。當我相信上帝才能滿足我最深切的渴望時，我就能以感恩的心，去享受我的配偶帶給我的愛和安全感，而不會對他（或她）有過分的期待。當我有這樣的體認，知道他（或她）並不是我全部的依靠時，我就能心存感謝地，相信我已經從他（或她）那裡得到很多，他（或她）已經給我，他（或她）所能給的了。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">二、家庭問題的延伸</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  人常在不知不覺中追尋自己父母的化身，因為潛意識裡，我們期望配偶能取代自己的父母照顧我們，補償年幼在家中的心理創傷，滿足童年未得到重視的心理需求。人常期望找到，只有父母的優點，而沒有他們缺點的配偶。殘存的心理情結是婚姻的暗流，在婚姻中，表面上我們是在與自己的配偶相處，其實是不斷重新經歷自己過去與父母的關係。婚姻關係可以說是我們在成長過程中，與父母互動模式的重現！這些殘餘的心理情結是婚姻的暗流，成為自己心版上的「心理程式」，一按即爆！
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">三、內外的壓力</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  例如，經濟的危機、姻親對婚姻的干預、養育子女的壓力、外在環境中異性的誘惑等。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">四、心理需求的改變</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  原本喜歡的特質改變了，或一人繼續成長，另一個卻停滯不前。或者，平常沒有繼續培養感情。維繫幸福婚姻的唯一的選擇是，雙方都努力成長，儘量互相適應，不斷去滿足對方的心理需求，多給予對方快樂，少帶給對方痛苦，細心灌溉心情的花朵。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">二、為什麼不可以離婚？</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                <span className="font-semibold text-amber-700">一、不可離婚是神的旨意：</span>耶穌說：「我告訴你們，凡休妻另娶的，若不是為淫亂的緣故，就是犯姦淫了；有人娶那被休的婦人，也是犯姦淫了」（太19:9）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                <span className="font-semibold text-amber-700">二、離婚的後遺症很多：</span>離婚往往是兩敗俱傷的事，而且對孩子、對家庭、對教會，都造成傷害。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-amber-700">三、離婚不能真正解決問題：</span>許多婚姻的破裂和個性、生命的問題有關，或者與錯誤的婚姻觀有關，因此，離婚並不能解決這些問題。有人統計，離婚再婚者，他們再次離異的可能性更高。可見，許多時候，換一個配偶不一定能使人有幸福的婚姻，因為沒有解決生命、性格、價值觀的問題。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">三、基督徒在何種情況下可離婚？</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-amber-700">一、有一方犯淫亂罪時：</span>耶穌准許若配偶發生淫亂時，可以離婚（太19:9），因為對方已破壞了婚約。然而，耶穌只是容許，並不是定規，耶和華曾經吩咐何西阿先知把他淫亂的妻子找回來，繼續愛她，來表明上帝對我們接納的愛。因此，身為基督徒，我們可以選擇原諒及接納不忠的配偶，讓人從我們的婚姻看見神的愛。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-amber-700">二、不信的一方要求時：</span>哥林多前書七章15節保羅說：「倘若那不信的人要離去，就由他離去罷！無論是弟兄，是姐妹，遇著這樣的事，都不必拘束。神召我們原是要我們和睦」。有人認為這可能也是保羅的經歷，解經家認為，按照保羅過去在猶太教的地位，他應該是已婚的人，但可能因為信仰的緣故，他的妻子離開了他。因此，神感動保羅有這樣的吩咐。但保羅也強調，應該盡量避免，應以和睦為原則。
              </p>

              <h4 className="font-semibold text-amber-800 mb-2 mt-4">問題思想：若配偶精神異常或有暴力傾向可不可以離婚？</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                有人認為，從聖經的角度而言，在正常情況之下離婚是不被允許的（除了以上所述兩種情況）。但是在不正常的情況之下，離婚的問題則是必須因個案而做出智慧的處置。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                若一個患有精神病的丈夫常常毒打妻子，已經到了隨時產生生命危險的地步，妻子為求保命，因此決定離婚。雖然離婚是毀約的行為，但卻是出於不得已保命的正當動機。我們肯定聖經的教導「竭力保持生命，比信守婚姻的諾言更重要」，更何況婚姻的精神是「丈夫與妻子聯合，二人成為一體」。妻子決定離婚是因為丈夫已無法與妻子聯合，毀約在先，妻子乃被迫主張離婚，而非出於主動。這是可以理解與接受的。
              </p>
              <div className={quote}>
                <p className={quoteText}>
                  改教家加爾文把「受虐」列為離婚的正當理由之一，他說：「如果當事人受到迫害的程度，達到危及她的信仰或生命，那麼她的逃走是正當的，這並不構成自願的離婚。」
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                不過，若是妻子願意全力治好先生的精神病，全力維護婚姻的完整，乃是可敬佩的行為。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                馬丁路德允許在四種特別的情況下，可以離婚：一、丈夫或妻子由於身體或任何一種自然缺陷，而沒有條件履行婚約。二、姦淫。三、一方虧負或避開對方，拒絕履行婚姻關係的責任。四、一些理由令雙方合不來，但離婚的前提是雙方都不能再婚。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">四、可否以分居代替離婚？</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅說：「夫妻不可彼此虧負，除非兩相情願，暫時分房，為要專心禱告方可；以後仍要同房，免得撒但趁著你們情不自禁，引誘你們」（林前7:5）。筆者在教會中面對夫妻感情破裂，或一方有些問題，導致配偶無法接納他（或她）的情況下，他們想要離婚，我們會引用這處經文，建議他們先分居，目的是先冷靜下來，好好在神面前調整自己。我們發現有很好的效果，挽救了好幾對的夫妻。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">五、如何幫助要離婚的夫婦？</h3>
              <div className="space-y-2">
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">一、</span>告之神反對離婚，離婚不得神的喜悅，並且告之離婚的後果，要他們不要在血氣中行事。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">二、</span>告之婚姻的祝福與愛的真諦，鼓勵他們作婚姻協談，並且鼓勵他們參加夫妻成長營會或課程，修復彼此的關係。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">三、</span>鼓勵他們一起追求信仰，鼓勵他們更多一起讀經、禱告，在禱告與良性溝通中，化解彼此的不合。</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">六、如何關心離婚的人？——離婚的人的心理狀態</h3>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">一、震驚與否認</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  （一）用「否認」的防衛機能來保護自己，不讓自己意識到這件痛苦的事實，以免心理過分悲慟。<br />
                  （二）有的幻想著離去的伴侶，有一天會回到自己的身邊，想像著復合之時的甜美，彷彿令人心痛的離婚從來未曾發生，以此來逃避痛苦。<br />
                  （三）常會埋怨自己，不能放開過去，面對前程。<br />
                  （四）有些人會馬上「表現」出「非常適應」的樣子，顯得非常理智、非常能接受現實，在人前強顏歡笑。這種「超級適應」，有時是「否認現實」的另一種表現。他們理智上能接受現實，但在情緒上卻不是如此。而努力用意志壓抑與否認情緒的結果，情緒往往無法得到紓解。因此要容許自己哀傷，當一個人有勇氣接納及面對自己的軟弱時，他反而能堅強起來，變成真正的強者，走上醫治的道路。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">二、迷惘與困惑</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  （一）不知道為何配偶會離他而去。<br />
                  （二）覺得自己的生命完全失去控制，許多角色和行為規範，因為離婚而變得模糊不清，不知要如何與以往的姻親或配偶的朋友相處，甚至不知要與沒有監護權的親生子女維持何種關係。<br />
                  （三）過去辛苦奮鬥，為的是建立一個美滿家庭，離了婚，這個重要的人生目標頓時破滅，一切心血付諸流水，日子也變得空虛、沒有意義，離婚使原本井井有條的生活，一下子變得雜亂無章！<br />
                  （四）他們需要有人給予支持、傾聽與鼓勵，藉著與人交談，紓解自己的情緒，整理自己的思維。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">三、孤寂與淒涼</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  （一）想起舊日的美好時光和對方的種種好處，難免悲從中來，頓覺孤單。只要鎮定下來，拿出勇氣與耐心，開始醫治與成長，一定可以走出孤寂、痛苦的深淵。<br />
                  （二）決定我們是否會感到孤寂、愁苦的因素，並不是周圍是否有人陪伴，而是我們是否能把自己的心神與生命力投注在有意義的事上。當人把注意力和焦點放在自己身上，專看自己的不幸與需要，整天只求別人的注意和關懷時，就會變得異常脆弱，容易被孤寂感吞滅。當我們開始把注意力投注在本身以外，一些有意義的事上，並願意付出時，我們便能堅強起來，為自己的生命找到新的意義與希望。所以，要勉強自己從事不同的活動，轉移注意力。<br />
                  （三）培養有益身心的興趣以排除孤寂感。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">四、抑鬱與哀傷</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  （一）離婚可能引起當事人無助感，喪失自信心，對前途悲觀絕望，有很大的失落感。特別對自卑感重、自我觀念低落與依賴性強的人，會造成更大的痛苦，並使舊的創傷和失落一併引發出來。<br />
                  （二）根據統計，有四分之三的離婚者，出現抑鬱的現象與輕生的念頭。<br />
                  （三）他們會產生既想親近朋友，又想遠離朋友的矛盾心理。<br />
                  （四）因此，必須學習疏導自己的情緒，處理自己的創傷：（1）與人保持接觸，也要有獨處的時間！（2）適度表達情緒。（3）當事人需單獨面對傷痛，在沉靜中讓自己的心，充分經歷痛苦，但不要讓自己陷入自憐自哀中。（4）學習定時哀傷：在這段自定的時間裡，讓自己盡情地哭、痛快地寫，但這段時間之外，則要努力專注於建設性的工作。（5）保持規律生活。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">五、憤怒與怨恨</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  責怪對方把自己的生命搞得一團糟。
                </p>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed">
                〈註記〉本章有關離婚問題參考黃維仁博士「窗外依然有藍天」一書（愛家文化出版）
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
                '婚姻解體的四個根源：過分理想化的期望（含不健康的結婚動機、「尋找救主」心態）、家庭問題的延伸（潛意識中重現與父母的互動模式）、內外的壓力（經濟、姻親、子女、誘惑），以及心理需求的改變（雙方成長速度不一致）——唯有上帝才能滿足人對支持倚靠的終極渴望，配偶不應被當作救主。',
                '聖經教導「不可離婚是神的旨意」，離婚後遺症很多且不能真正解決問題（離婚再婚者再次離異機率更高），但容許兩種例外：一方犯淫亂罪、或不信的一方主動要求離去；面對配偶精神異常或施暴等極端處境，多位改教家（加爾文、馬丁路德）也提供了智慧而務實的例外處理原則。',
                '分居可作為離婚的替代選項，藉由冷靜期讓雙方在神面前調整自己，實務上曾挽救多對夫妻；幫助要離婚的夫婦，應告知神反對離婚的心意與後果、引導他們進行婚姻協談、鼓勵一起追求信仰讀經禱告。',
                '離婚者常經歷震驚否認、迷惘困惑、孤寂淒涼、抑鬱哀傷、憤怒怨恨五種心理階段，其中「超級適應」可能只是否認現實的另一種表現，容許自己哀傷反而是邁向真正堅強與醫治的起點。',
                '陪伴離婚者的具體智慧包括：允許哀傷但不陷入自憐、學習定時哀傷（設定時間盡情宣洩、時間外專注建設性事務）、把注意力投注在有意義的事上而非只關注自己的不幸、保持規律生活與人際接觸，這些原則對任何經歷重大失落的人都適用。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「婚姻是重現與父母互動模式」，這個心理學洞察對婚前輔導有何實用價值？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者指出，人常在潛意識中期望配偶取代父母、補償童年心理創傷，而這些殘存的心理情結會成為「一按即爆」的婚姻暗流。這提醒教會在提供婚前輔導時，不應只停留在教導聖經的婚姻原則，也應鼓勵準夫妻誠實檢視自己原生家庭的影響模式，及早覺察並處理潛藏的心理創傷，才能避免這些暗流在婚後不知不覺地引爆衝突。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">改教家對「受虐可離婚」的立場，對今日教會處理家暴案件有何重要提醒？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者引用加爾文「若迫害危及信仰或生命，逃走是正當的」這個立場，明確反對教會用「不可離婚」的教條要求受暴者繼續留在危及生命的婚姻中。這對今日教會處理家暴案件極具指導意義——牧養原則不能只是機械式地套用「反對離婚」的一般教導，而應優先考慮當事人的生命安全，這是聖經整體精神（保護生命）優先於單一誡命字面遵守的具體例證。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「超級適應」可能是否認現實的另一種表現，這對教會關懷離婚者的方式有何提醒？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者提醒，有些離婚者表面上顯得非常理智、適應良好，但這種「超級適應」有時反而是壓抑情緒的結果，並非真正的醫治。這對教會關懷離婚肢體的方式提供了重要提醒——不應只看表面的「適應良好」就以為對方已經沒事，而應持續給予空間讓當事人真實表達哀傷，容許軟弱才是通往真正堅強的道路。
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
              '「除了上帝，沒有任何伴侶能滿足人對支持倚靠的終極渴望」——你如何理解這句話？這對你（或你的婚姻）有何實際的提醒？',
              '你是否曾察覺自己在婚姻或親密關係中，不知不覺地重現了與父母的互動模式？這對你有何啟發？',
              '面對配偶精神異常或施暴的極端處境，你如何看待改教家「受虐可離婚」的立場？這與「不可離婚」的一般教導如何平衡？',
              '若你身邊有正在經歷離婚的朋友，你如何運用本章對離婚者五種心理階段的描述，更有智慧地陪伴他們？',
              '「容許自己哀傷，才能真正堅強起來」——你自己面對重大失落時，是傾向壓抑情緒還是允許自己哀傷？',
              '你認為教會在婚前輔導與婚姻協談上，可以做哪些具體的裝備，幫助弟兄姐妹的婚姻更穩固、更能及早預防走向解體？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 讀哥林多前書七章1-16節</h4>
              <p className="text-gray-700 mb-2">找時間完整讀這段保羅對婚姻、分房、離婚的教導，理解保羅務實而靈活、同時堅守原則的處理智慧。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 檢視自己的婚姻期待是否過分理想化</h4>
              <p className="text-gray-700 mb-2">
                若你已婚，誠實檢視自己對配偶的期待，是否不知不覺把配偶當成滿足終極渴望的「救主」；若你單身，趁現在先學習做一個獨立、健康、快樂的單身者，為未來的婚姻打下健康的根基。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，求祢幫助我明白，唯有祢才能滿足我內心對安全感與倚靠的終極渴望，使我不會把過重的期待加在配偶身上。求祢保守我的婚姻遠離解體的危機，也求祢賜下智慧與憐憫，幫助教會能溫柔陪伴正在經歷婚姻破碎與離婚傷痛的弟兄姐妹，讓他們在痛苦中經歷祢真實的醫治與安慰。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
