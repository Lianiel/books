import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch10() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第十章</h1>
        <h2 className="text-xl font-semibold text-gray-700">我們的形像</h2>
        <p className="text-gray-500 mt-1">神說：「我們要照著我們的形像、按著我們的樣式造人，使他們管理海裡的魚、空中的鳥、地上的牲畜，和全地，並地上所爬的一切昆蟲。」神就照著自己的形像造人，乃是照著他的形像造男造女　創世記一26-27</p>
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
              第六日的後半，講到五個層面：一、三位一體的神，二、神的形像樣式，三、人要生養眾多，四、人要治理全地，五、神供應食物。本章先分享前兩個層面，下一章再講後面三個層面。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、三位一體的神</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記一26-27：「神說：我們要照著我們的形像、按著我們的樣式造人，……神就照著自己的形像造人，乃是照著他的形像造男造女。」既說「我們的形像」，又說「他的形像」，很明顯，神要讓我們知道他是「我們」，也是「他」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                維特．漢彌頓認為，「我們」可以有六種詮釋，包括一個神對其他的神說話、神對地說話、神對天使說話、神對自己說話、神的自我揣度、完滿狀態的複數或神裡頭的複數形態。他認為最後一種詮釋是最合理的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                簡化來說，當神說「我們」，邏輯上有三種可能。第一種是廣泛的我們：可包含神與所造的各種活物。但因為說到「按著我們的樣式造人」，就不可包含各種活物，因為各種活物的生命層次低於人，其形像不能與神並列。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                第二種是神與天使：天使比較像神，聖經甚至有時也用神這個字來稱呼天使。猶太傳統對天使是很尊崇的，所以會喜歡這種解釋。但希伯來書針對猶太傳統的偏差，指出「天使豈不都是服役的靈、奉差遣為那將要承受救恩的人效力麼？」（來一14）保羅也說：「豈不知我們要審判天使麼？何況今生的事呢？」（林前六3）並強調：「不可讓人因著故意謙虛和敬拜天使，就奪去你們的獎賞。這等人拘泥在所見過的，隨著自己的慾心，無故的自高自大，」（西二18）可看出天使的受造地位並非在人之上，乃是在人之下，把天使的形像與神的形像並列是不合宜的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                第三種是神自己：這是唯一合理的答案，尤其藉著新約的啟示，可清楚知道獨一真神有聖父、聖子、聖靈三個位格。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                舊約學者黃儀章認為，人不是受造為一孤單無伴的人，他是受造為一個與妻子在二人一體關係裡的人。如果人是被造為一複數位格人（男人與女人），而這人又是按著神的形像造的，那麼我們可以合理推論，這形像反映了神的複數位格。因此，創世記一26的「我們」很可能就是這複數位格的表達。正如神是在關係中存在的神，按著神的形像被造的人，也受造為在關係中存在的人。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                有些解經者說，神造其他事物，直接說就可以了，唯獨造人要先彼此商量，以示慎重。其實其他例子，神也先說後造，「先說後造」的這個模式，出現在第二日造空氣、第四日造光體、第五日造魚與飛鳥、第六日前半造地上活物、第六日後半造人。若神造人不是唯一「先說後造」的案例，那麼其特殊性在哪裡？
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                筆者的觀點是，神造人時，是要照著自己的形像造，而神自己擁有一而多的存在，所以需要特別說出「我們」以及「我們的形像」（創一26），「我們」的這個自稱是真正有別於造其他事物時的一個獨特表達。而當神接著進行造人行動時，也特別說是「造男造女」（創一27），暗示人乃是「一而多」的存在。這真理更加顯明在第二章的記載裡面——神從亞當身上取肋骨造女人，並說他們是二人一體（創二21-25）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神自己是「一而多」，以及所造的人是「一而多」，這並不是一種奇怪的存在，乃是聖經中一個很重要的真理。不僅夫妻是二人一體，所有人在亞當裡也是一體的（羅五12-19），並且信基督的人在基督裡也是一體的。哥林多前書十五21-22強調：「死既是因一人而來，死人復活也是因一人而來。在亞當裡眾人都死了；照樣，在基督裡眾人也都要復活。」保羅在同一章繼續強調：「經上也是這樣記著說：首先的人亞當成了有靈的活人；末後的亞當成了叫人活的靈。……頭一個人是出於地，乃屬土；第二個人是出於天。」（林前十五45-47）從某個角度講，全世界只有二個人，一個是亞當，全人類都在他裡面；一個是基督，信基督的人都在他裡面。神也說，基督是頭，教會是身體，合起來是一個人。（弗一23，五23）保羅甚至在以弗所書五30-31，將丈夫與妻子連合，二人成為一體，以及基督與教會連合為一體，這兩件事交織起來一起講。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                因此，神是三位一體的真理，不僅關乎神自己，也關乎他所造的人是有一體性的，最重要是關乎將來基督與教會要成為一體。神的三位一體，表明愛的團契，也表明團隊事奉。這兩種特性，正是神想要複製在人身上的，也是最終要成就在基督與教會身上的。正如主耶穌基督最後晚餐的大祭司禱告所說的：「聖父啊，求你因你所賜給我的名保守他們，叫他們合而為一像我們一樣。……我不但為這些人祈求，也為那些因他們的話信我的人祈求，使他們都合而為一。正如你父在我裡面，我在你裡面，使他們也在我們裡面，叫世人可以信你差了我來。你所賜給我的榮耀，我已賜給他們，使他們合而為一，像我們合而為一。我在他們裡面，你在我裡面，使他們完完全全的合而為一，叫世人知道你差了我來，也知道你愛他們如同愛我一樣。」（約十七11-23）耶穌並不避諱將聖父、聖子的合一、門徒的合一，還有神與門徒的合一，都相提並論。因為這本來就是神創造人的目的，要讓人經歷在永世以前聖子就已經享有的愛與合一，如耶穌繼續所禱告的：「父啊，我在那裡，願你所賜給我的人也同我在那裡，叫他們看見你所賜給我的榮耀；因為創立世界以前，你已經愛我了。」（約十七24）
              </p>
              <p className="text-gray-700 leading-relaxed">
                保羅在強調女人順服男人（妻子順服丈夫）的真理時，把神與基督的關係也說進來：「我願意你們知道，基督是各人的頭；男人是女人的頭；神是基督的頭。」（林前十一3）這三個有關頭的比喻，所強調的是在權柄裡的合一。包含三個平行的事實：神與基督合一，而且神是基督的權柄，在創世以前，已經是這樣的關係；丈夫與妻子合一，而且丈夫是妻子的權柄，這種關係是從結婚時開始的；基督與教會合一，並且基督是教會的權柄，這是從基督完成救贖工作之後開始的。因此，在三位一體裡面，有清楚的權柄次序，正如夫妻的權柄次序，以及基督與教會的權柄次序。有人說，三位一體神不僅曾商量造人的事，可能也曾商量將來誰去為人贖罪。事實上，這不需要商量，一定是聖子基督順服聖父的安排，來世上為世人贖罪。並且，他們也不需討論造人的事，而是同心宣告，我們要按著我們的形象造人，好讓他們能經歷與神與人的愛裡團契，還有與神與人的團隊事奉。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、神的形像樣式</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                神的形像與樣式，所用的字是很視覺性的。形像的原文是 צֶלֶם（tselem），有偶像、形像的意思。舊約聖經出現十五次，除了創世記一章、九章三次講神的形像，創世記五章講亞當生了兒子塞特，形像與自己相似，其餘十一次幾乎都是指偶像。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                樣式的原文 דְּמוּת（demuwth），意思是相像，如英文的 likeness，共出現22次。除了二次講神的樣式，一次講塞特與亞當相似。其餘19次，幾乎都講可見的型態，包括偶像壇的樣式、野獸的樣式、好像蛇、好像大國人民、四活物的形像、寶座的形像、火的形像、手的樣式、巴比倫人的形像……等等。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                雖然神是靈，看不見，無所不在。但有另一個並行的事實，神有寶座，有彷彿人的形狀（結一26）。並且聖子基督在舊約時代曾經多次顯現，包括與兩位天使一起出現在亞伯拉罕面前，並且聖經說，亞伯拉罕看到三個人。其實那三位都不是人，有二位是天使，一位是神，既形容為人，就表示他們都有人的樣子。（創十八1-33）聖子還曾出現在雅各面前，與雅各摔跤。聖經說，有一個人來和他摔跤，後來那人給雅各祝福，雅各給那地方取名叫「神之面」，因為他說，我面對面見了神，我的性命仍得保全（創卅二22-32）。還有一次是出現在約書亞面前，表明是來作耶和華軍隊元帥的，且要約書亞脫鞋，因為那地是聖的（書五13-15）。歸納可知，聖父有外表形像，但不能看清楚，聖子有外表形像，可以被看見，且看起來像一個正常人。如果聖子本來就有像人的樣式，合理應該是人按聖子的樣式造，而不會是神先造人，而後聖子再來模仿人。這裡包含一個非常榮耀的事實，就是亞當、夏娃按著聖子的形像造，而後來所生的塞特，以及塞特的後裔，都相似於永恆的聖子基督。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                外在的相似事小，內在的相似是更重要的。雖然用詞比較偏向外在的形像，使我們不能排除包含外在的形像，但從上下文觀察，可推知必然包含內在的智慧、能力等，因為聖經接著說：「……使他們管理海裡的魚、空中的鳥、地上的牲畜，和全地，並地上所爬的一切昆蟲。」（創一26）神將他的形像放在人裡面，是有任務目的的，有學者據此指出神的形像就是治理的能力，這應該是答案的一部分。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                若要完整知道「神的形像」包含什麼，最好的方法就是來認識道成肉身的耶穌基督。因為使徒保羅說：「愛子是那不能看見之神的像，是首生的，在一切被造的以先。」（西一15）希伯來書也說：「他是神榮耀所發的光輝，是神本體的真像，常用他權能的命令托住萬有。他洗淨了人的罪，就坐在高天至大者的右邊。」（來一3）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                從基督論的角度來說，基督有先知、祭司、君王三重職分。先知職分與神的話、真理、價值觀有關，祭司職分與敬拜禱告、愛的關係有關，君王職分與領導管理、恩賜配搭、角色扮演有關。這些生命內涵全部都在基督裡，基督徒信主重生後得到基督的生命，因此有這些生命內涵的雛形，但還需要經過操練成長，才會更像基督，如同以弗所書四11-13所說的：「他所賜的，有使徒，有先知，有傳福音的，有牧師和教師，為要成全聖徒，各盡其職，建立基督的身體，直等到我們眾人在真道上同歸於一，認識神的兒子，得以長大成人，滿有基督長成的身量，」針對個人的成長，保羅接著說：「你們學了基督，卻不是這樣。如果你們聽過他的道，領了他的教，學了他的真理，就要脫去你們從前行為上的舊人，這舊人是因私慾的迷惑漸漸變壞的；又要將你們的心志改換一新，並且穿上新人；這新人是照著神的形像造的，有真理的仁義和聖潔。」（弗四20-24）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                亞當、夏娃被造時，已經擁有基督長成的身量嗎？當然沒有！他們只是擁有那生命的雛形而已。他們被造為人，可以成長為成熟的人，而不是成長為成熟的猴子，但成長過程是不可少的。不用猜測亞當、夏娃應有的成長過程是什麼？答案已經寫在整本聖經裡面，人類的成長過程就是亞當應有的成長過程，而聖經的濃縮版乃是整部創世記，從創世記的八大人物，以及相關的各種事，都呈現了神的兒女應有的成長方式與成長原則。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                你可能問說，如果亞當沒吃善惡果，而吃生命果，那是否會不一樣。當然會有所不同，但成長這件事是相同的，受撒但試探也是必然的。耶穌基督來到世上，呈現了一個沒有犯罪的生命成長模式給我們看。關於耶穌的成長，有三個過程是特別需要提的：
              </p>
              <div className="space-y-3 mb-3">
                <div className="bg-indigo-50 rounded-lg p-3 border border-indigo-100">
                  <span className="font-semibold text-indigo-800">1. 耶穌接受父母遮蓋而成長</span>
                  <p className="text-gray-700 text-sm mt-1 leading-relaxed">
                    路加福音二50-52：「他所說的這話，他們不明白。他就同他們下去，回到拿撒勒，並且順從他們。他母親把這一切的事都存在心裡。耶穌的智慧和身量，並神和人喜愛他的心，都一齊增長。」
                  </p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-3 border border-indigo-100">
                  <span className="font-semibold text-indigo-800">2. 耶穌勝過魔鬼試探而成長</span>
                  <p className="text-gray-700 text-sm mt-1 leading-relaxed">
                    馬太福音四1-11：「當時，耶穌被聖靈引到曠野，受魔鬼的試探。他禁食四十晝夜，後來就餓了。那試探人的進前來，對他說：你若是神的兒子，可以吩咐這些石頭變成食物。耶穌卻回答說：經上記著說：人活著，不是單靠食物，乃是靠神口裡所出的一切話。……於是，魔鬼離了耶穌，有天使來伺候他。」三次的試探，耶穌都用神的話抵擋魔鬼。
                  </p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-3 border border-indigo-100">
                  <span className="font-semibold text-indigo-800">3. 耶穌受苦難學順從而成長</span>
                  <p className="text-gray-700 text-sm mt-1 leading-relaxed">
                    希伯來書五8-9：「他雖然為兒子，還是因所受的苦難學了順從。他既得以完全，就為凡順從他的人成了永遠得救的根源。」當然還有耶穌的傳道生涯，與門徒、眾人、罪人種種的互動，最重要還有他與父神每天親密的關係，這一切使他成長至完全。
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們一方面看著整部聖經或整部創世記，一方面也看著福音書裡面的耶穌基督，就能明白一個擁有神形像的人應有的成長之路。路加福音三38指出：「亞當是神的兒子。」可見神是在他的獨生子之外造一個像他獨生子的人。人偏離神之後，神施行拯救：「及至時候滿足，神就差遣他的兒子，為女子所生，且生在律法以下，要把律法以下的人贖出來，叫我們得著兒子的名分。你們既為兒子，神就差他兒子的靈進入你們（原文作我們）的心，呼叫：阿爸！父！」（加四4-6）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神按著神的形像造人，原意是要造一個像聖子基督、能與聖子基督相配的人，好叫他成長之後，能成為基督的新婦。因著亞當、夏娃的犯罪墮落，這條路走歪了，走遠了。但耶穌來，尋找拯救失喪的人（路十九10）。他找回的人，需要在基督裡繼續長大成熟，預備成為他的新婦。這是三位一體神按他的形像造人的最終目的。
              </p>

              <div className="flex flex-col items-center my-4">
                <img
                  src="/images/book29/ch10-image-likeness.jpeg"
                  alt="圖五：照他的形像造男造女，插畫呈現伊甸園中的亞當夏娃與各樣受造動物"
                  className="max-w-full h-auto rounded-lg shadow-md border border-gray-200"
                />
                <p className="text-sm text-gray-500 mt-2 italic">圖五：照他的形像造男造女</p>
              </div>
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
                '創世記一26「我們的形像」中的「我們」，最合理的解釋是三位一體神自身的複數位格，而非神與地、與天使的商議；黃儀章指出人被造為「二人一體」的複數位格人，正反映神複數位格的形像。',
                '「先說後造」並非造人獨有的模式，第二至六日都是如此；神造人特別說「我們」與「造男造女」，是要凸顯神自己「一而多」的存在，並在人身上複製這個真理（羅五12-19、林前十五45-47）。',
                '神的三位一體表明愛的團契與團隊事奉，這兩種特性要複製在人身上，最終成就在基督與教會的合一上（約十七11-24）；林前十一3的「頭」的比喻顯明三個平行的權柄次序：神與基督、丈夫與妻子、基督與教會。',
                '形像（צֶלֶם，tselem）與樣式（דְּמוּת，demuwth）在舊約多指可見的型態；聖子基督在舊約曾多次以人的樣式顯現（創十八、創卅二、書五），暗示亞當是照著聖子的樣式被造，而非神先造人後聖子模仿人。',
                '神的形像包含治理的能力，也包含基督先知、祭司、君王三重職分的生命內涵；亞當被造時只有生命的雛形，需要如耶穌一樣經歷父母遮蓋、勝過試探、受苦學順從的成長過程，最終目的是預備成為基督的新婦。',
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
              '創世記一26「我們的形像」的「我們」可能有哪些解釋？最合宜的是哪個解釋？',
              '三位一體的關係可以有哪些實際的應用？試從夫妻以及教會團隊的關係來說明。',
              '「神的形像」是什麼？有哪些內涵？分別與你有何關係？',
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
