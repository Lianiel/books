import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch21() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第二十一章</h1>
        <h2 className="text-xl font-semibold text-gray-700">人犯罪墮落</h2>
        <p className="text-gray-500 mt-1">於是女人見那棵樹的果子好作食物，也悅人的眼目，且是可喜愛的，能使人有智慧，就摘下果子來吃了，又給她丈夫，她丈夫也吃了。他們二人的眼睛就明亮了，才知道自己是赤身露體，便拿無花果樹的葉子為自己編做裙子。天起了涼風，耶和華神在園中行走。那人和他妻子聽見神的聲音，就藏在園裡的樹木中，躲避耶和華神的面。耶和華神呼喚那人，對他說：「你在哪裡？」他說：「我在園中聽見你的聲音，我就害怕；因為我赤身露體，我便藏了。」創世記三6-11</p>
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
              亞當、夏娃犯罪墮落，表面上是由於撒旦的謊言，以及禁果的引誘，其實最主要是出於自己的私慾。私慾的元素少不了自由意志，人若沒有自由意志，就不會有私慾。但人若沒有自由意志，同樣也不會有愛。神給人自由意志，這是神形像裡面一個很重要的能力，人正確使用自由意志，選擇愛神、信神，就會與神有美好的關係，至終活在永生之中；人若錯誤使用自由意志，選擇不愛神、不信神，就會與神關係破裂，至終活在永死之中。本章這段經文，幫助我們看到，犯罪中與犯罪後的完整過程及結果，人犯罪中的行動是作審判官，否定神的良善，犯罪後的結果是與神決裂，被仇敵轄制。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、犯罪中</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">一、人作審判官，否定神良善（創三4~6）</span> — 神說吃了會死，撒旦說吃了不會死，本來人應該絕對聽神的，現在卻自己作審判官，且判決神是錯的，撒旦是對的，而後就吃了分別善惡樹的果子。這是多麼嚴重的罪行，既否定神的話，也否定神的愛與良善，這是人原本賴以生存的根基。由此看來，人犯罪雖有撒旦引誘，但更重要的是由於人自己不信神，當亞當、夏娃吃禁果時，就等於判定神說謊，也否定神的良善。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                整本聖經都在告訴我們，人賴以生存的乃是神的愛與神的話（太四4），神的話句句屬實，但神對人所說的第一段話人就不相信了，人自己要作審判官來決定聽誰的，那後來整本聖經神的話就更不信了。人否定神的良善與神的話而選擇接受撒旦的謊言，就注定死路一條。所以人在犯罪時，最大的問題是否定了神的良善，不相信神的話，自己想要作主，才會聽信撒旦的謊言。人不能怪罪神說，為什麼允許撒旦來騙我。若人堅定相信神的話，聽從神的話，撒旦就無法動搖你；反之，人若不堅定相信神，就算沒有撒旦，人還是會犯罪，因為決定權在人。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經所記「又給她丈夫」（創三6），在「給她丈夫」之後有一個詞 עִמָּהּ（immah），沒有翻譯出來，是「與、在旁邊（跟她在一起）」的意思。比較完整應可翻譯為「又給同她在一起的丈夫」。若這樣，則夏娃被引誘時，亞當一直都看著，並且認同夏娃的決定，沒有出言制止。雖然兩人吃的次序有先後，但可以說是兩人同時犯了罪。因此羅馬書五12-14這樣說：「這就如罪是從一人入了世界，死又是從罪來的；於是死就臨到眾人，因為眾人都犯了罪。沒有律法之先，罪已經在世上；但沒有律法，罪也不算罪。然而從亞當到摩西，死就作了王，連那些不與亞當犯一樣罪過的，也在他的權下。亞當乃是那以後要來之人的豫像。」罪進入世界，既是從夏娃開始，也是從亞當開始。亞當是頭，對夏娃有保護的責任，也有制止的權柄。他沒有制止夏娃，且隨後立即跟著吃禁果，因此亞當要負起犯罪的全部責任。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">二、人選錯次序，世界變世俗（創三6）</span> — 本書第十六章已經詳細講了分別善惡樹所代表的三重意義：神的主權、神的律法、神的禮物，本章再稍作複習與補充。以神的禮物這個意義來講，這世界原為中性，是神給人的禮物，但若次序錯了，就與神對抗而成為世俗，這世俗就是約壹二15~16所說的：「不要愛世界和世界上的事。人若愛世界，愛父的心就不在他裡面了。因為凡世界上的事，就像肉體的情慾，眼目的情慾，並今生的驕傲，都不是從父來的，乃是從世界來的。」世界包含了肉體情慾、眼目情慾、今生驕傲。而這裡說的「世界 κόσμο（cosmo）」跟約翰福音三16說的神愛「世人 κόσμος（cosmo）」，希臘文是一樣的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                約翰壹書告訴我們不要愛世界，而約翰福音則說神愛世人（世界）。其實世界原來是神所造的，他不會造不好的東西，世界是中性的，要讓人來管理，人要順服在神的權柄下來使用與管理世界上的一切，按著正確的次序運用就沒有問題，所以人必須有奉獻的行動以表明尊重神的主權。但神所造的世界若被高抬超過神，次序弄錯了，就成為世俗的來源，與神對抗，而成為問題。例如：錢是中性的，在神的主權之下使用是好的，但若將它視為比神還重要，那就符合提摩太前書六10所說的：「貪財是萬惡之根。」約翰壹書二16所說的肉體情慾、眼目情慾、今生驕傲，跟創世記三6夏娃當時看善惡樹的果子有對應，她看那果子好作食物跟肉體情慾相關，悅人的眼目跟眼目情慾相關，能使人有智慧跟今生驕傲相關。當人將世界擺錯了位置，高過了神，就會像夏娃一樣，不聽、不信神所吩咐的，而去做與神對抗的事，沈淪在世俗之中。
              </p>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-indigo-700">三、人有三仇敵，私慾最關鍵（創三7）</span> — 罪與死並非出於果子本身，因為神所造都是好的（創一31），乃出於人背命的行動。分別善惡樹的果子不是毒藥，而是因人背命的行動，以致與神破壞關係，而使靈魂失喪。就好比奉獻的事一樣，金錢本不是毒藥，是神所賜的，但人若不奉獻就會帶來咒詛，因為沒有尊重神的主權，失去神的保護。人有三仇敵：撒旦、世俗、私慾，人吃禁果的事跟這三仇敵有關，撒旦引誘夏娃吃禁果（創三4~5）；果子原是中性的，但它的重要性被誇大高過上帝，就成了世俗；夏娃被蛇引誘後，產生錯誤的慾望，那是私慾，如同雅各書一12-15所說的：「忍受試探的人是有福的，因為他經過試驗以後，必得生命的冠冕，這是主應許給那些愛他之人的。人被試探，不可說：『我是被神試探』；因為神不能被惡試探，他也不試探人。但各人被試探，乃是被自己的私慾牽引誘惑的。私慾既懷了胎，就生出罪來；罪既長成，就生出死來。」在人類的歷史中，這三仇敵都存在。但若換一個狀況，沒有撒旦在伊甸園，亞當與夏娃仍然有可能會去吃那分別善惡樹上的果子。雖然有三個仇敵，但使人犯罪的最關鍵原因乃是人的私慾。馬丁路德也曾說過：「魔鬼縱然可怕，但最可怕的是在我裡面的老我。」馬丁路德很清楚這點，不會將自己犯罪全歸到魔鬼撒旦身上。耶穌四十晝夜的禁食禱告後（太四1~11），魔鬼來引誘，那時也出現了三仇敵：有魔鬼，有世俗（石頭變成食物、人的讚賞、萬國的榮華等），但耶穌沒有讓私慾出現，他以神的話擊退了魔鬼與世俗的引誘。這不是說耶穌沒有慾望，他也有食慾，也會想吃東西，但他知道不能讓慾望高過神，他知道在那種情況下，不吃才是對的。他順服神的旨意來行事。所以私慾是指不順服神的旨意而按自己的意思去行。為什麼有些人不會犯淫亂罪，不是因為女人沒有吸引力，而是因為選擇順服神的話：「不可姦淫。」試探是存在的，但人可以作決定順服神、忠貞於配偶。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、犯罪後</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">一、知道自己赤身露體</span> — 創世記三7：「他們二人的眼睛就明亮了，才知道自己是赤身露體，便拿無花果樹的葉子為自己編作裙子。」「知道」的希伯來文是 יָדַע（yada），有認識、察覺、經驗中領悟的意思，也指肉體的性關係——「同房」是用這個字。這字首先出現在創世記三5，說到神「知道」，以及人吃善惡果之後，能「知道」善惡。接著在創世記三7講「知道」自己是赤身露體，創世記三22講「知道」善惡。而後這字第五次、第七次、第八次出現，都是「同房」的意思。分別講亞當與夏娃同房（創四1），該隱與妻子同房（創四17），亞當又與妻子同房（創四25）。這字在聖經中頭八次出現，有二次用於「知道」善惡，一次講「知道」自己是赤身露體，三次用於「同房」，很強地暗示了分別善惡果與「性」的關聯性。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                自由派的神學家據此推論，人吃分別善惡果是好的，這樣才開啟了「性」的領域，而能生養眾多。福音派的神學家大多不認同分別善惡果與性有直接的關係，主要論證是說，在還沒有吃分別善惡果之前，已經說到「二人成為一體」，應已有性的意識與能力。至於知道自己是赤身露體，則是因為犯罪前人的身體有榮光，犯罪後身體失去榮光，所以才看到赤身露體；或者說是犯罪之後以有罪的眼光看彼此的身體，所以覺得羞恥。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                筆者認為自由派的觀點是錯的，因為否定神禁令的必要性，但一般福音派的觀點也不理想，因為沒有足夠檢視聖經本身的表達。亞當、夏娃吃分別善惡果的結果，照聖經所記，首先是他們的眼睛明亮了。撒旦曾說：「你們吃的日子眼睛就明亮了，你們便如神能知道善惡。」（創三5）亞當、夏娃親身的經驗：「他們二人的眼睛就明亮了，才知道自己是赤身露體。」（創三7）然後是耶和華自己說：「誰告訴你赤身露體呢？莫非你吃了我吩咐你不可吃的那樹上的果子嗎？」（創三11）從以上三處可歸納，吃分別善惡果，真的使他們眼睛明亮，並且接著產生兩種結果，一個是能知道善惡，一個是知道自己赤身露體。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                第十六章，我們講分別善惡樹的時候說過，分別善惡樹給人分別善惡的能力，是相對的。不是從無到有，乃是從少變多。吃禁果前，神已經給人有一些分別善惡的能力，但不是很強。吃禁果後，分別善惡的能力強化了，可用於維持社會秩序，以及使人知罪。這樣的解釋，符合經文本身的描述，也不否認人原來也有一些分別善惡的能力。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                同理，性的意識與性的能力，可能也是這樣。並非吃分別善惡果才有性意識、性能力，乃是這果子似乎忽然間使人在性方面提早成熟。神造亞當、夏娃，雖然命定他們要成為夫妻，且要生養兒女，但在時間次序上，應當是先與神有生命的關係，先學習作神的兒女，先享受神的愛，先操練愛神，等生命比較成熟之後，才來建立婚姻家庭。舊約學者約翰．華爾頓有類似的觀點，他認為亞當、夏娃吃禁果前像小孩，比較沒有性的意識，吃了禁果後，像是進入青春期，有比較強的性的意識。亞當、夏娃不是不應該成長，而是應該順服神的指示，在神的時間次序中來成長。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這原則也適用於今天的每位兒童、少年、青年，若沒有先與神建立親密的關係、沒有從神得到愛的能力，這個人基本上缺乏足夠的愛來建立婚姻家庭。人吃了分別善惡果之後，眼睛明亮，是一個事實，但這個明亮乃是不平衡的早熟。若缺乏愛的生命，眼睛明亮只會帶來更多的犯罪。不管是關於分別善惡的知識，或者是關於性意識、性能力，原則都是如此。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                事實上，今日世界最凸顯的兩大不平衡現象就是關於這兩方面。一個是律法太強，愛的能力太弱，表現在誇大知識、善於批評論斷，演變出律法主義、酸民文化等；另一個是性慾太強，愛的能力太弱。表現在誇大性愛、不負責任的濫交，演變出情慾至上、性解放文化等。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                按照神的設計，與分別善惡樹相關的兩種能力——知識善惡、性愛能力，都可以從生命樹的果子得到。在第十六章提到，箴言所說的生命樹，與知識品格智慧相關，但在次序上，是先有愛的生命，再從生命中長出知識、智慧、道德，這樣才不會產生律法主義、喜愛批評論斷的習性。同理，一個人的性愛意識，可以藉著裸露的圖片、性愛影片，性探索行動等，快速產生，很容易從此進入情慾的掙扎之中。但正確的模式應該是，先有愛的生命，到了適婚年齡，在愛中與異性交往，直到進入婚姻，才正式啟動性關係，這樣才是最好的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-indigo-700">二、以葉遮羞躲避神面（創三8）</span> — 以葉子遮羞不僅功能有限，並且效期也有限，因為葉子很快會枯萎。人出了問題，想要以人的辦法來解決問題，最後是徒勞無功的。人無罪時，與神與人之間都是赤露敞開的，但人犯罪後，便躲藏遮蔽起來，人看到彼此的身體，也覺得羞愧。有一本書說到：「為什麼我不敢告訴你我是誰？因為，如果我告訴了你我是誰，你可能會不喜歡這個誰，而這個誰，卻是我僅有的一切。」這就是人犯罪後的光景，人會有很多問題，包括內心罪惡、醜陋的情況，通常會想要遮蓋這些問題，結果越遮蓋就越糟糕。然而因著耶穌基督的救恩來到，我們雖然仍有許多問題，但耶穌的寶血能夠洗淨我這一切。十字架的救恩使我們能夠坦然無懼來到神施恩的寶座前，與神和好、親密，也能與人建立坦誠的關係，人與人之間隔斷的牆拆毀了，人與人能和好、合一。
              </p>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-indigo-700">三、神呼喚人你在哪裡（創三9）</span> — 神的呼喚是要人知道自己失落了，當時神呼喚說：「亞當，你在哪裡？」並不是神不知道亞當躲在哪裡，而是要讓亞當弄清楚自己在哪裡，知道自己已偏離神，失落了，要回到神面前來。直到如今，神仍在說這話：「亞當（人）哪！你在哪裡？」失落的人，需要聽見神如此的呼喚，知道自己已偏離神，並願意回應他，回到他面前來。至今神仍未停歇，因他願意萬人得救，不願一人沈淪。凡是還沒回到神面前的，此時此刻神依舊對你呼喚：「你在哪裡？」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                分別善惡樹是神的樹，神所造的都是好的，所以這樹也是好的。這裡面包含道德意識與性意識，這與神的公義屬性及人的生養能力相關，原都是重要的，但是神用創世記二、三章幫助我們了解，這兩方面的能力，若單獨擁有，會在人的生命中產生死亡的效果。雖然如此，神容許將這兩方面的能力提早給人，因為人犯罪了，就要離開伊甸園，需要靠這能力維持社會秩序、需要被顯明罪，也需要生養眾多，並在情欲綑綁的經歷中，來轉向神。人犯罪墮落，是一個過程，結果是要來投靠耶穌基督，正如羅馬書五20-21所說：「律法本是外添的，叫過犯顯多；只是罪在那裡顯多，恩典就更顯多了。就如罪作王叫人死；照樣，恩典也藉著義作王，叫人因我們的主耶穌基督得永生。」讓我們都回轉到神原來設計的道路上，在豐盛的慈愛中有公義，在聖潔的婚姻真愛中建立夫妻的性關係，從創世記到啟示錄，這都是唯一的正路、活路。
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
                '人犯罪中最大的問題是「作審判官」否定神的良善，判定神說謊、撒旦是對的；「又給同她在一起的丈夫」（עִמָּהּ，immah）暗示亞當全程在場卻沒有制止，因此要負全部責任（羅五12-14）。',
                '世界（κόσμος，cosmo）本是中性的神的禮物，次序錯了才變成世俗（約壹二15-16）；肉體情慾、眼目情慾、今生驕傲分別對應夏娃看果子「好作食物、悅人眼目、使人有智慧」三個層面。',
                '人有三仇敵：撒旦、世俗、私慾，其中私慾最關鍵——耶穌面對魔鬼與世俗的試探時沒有讓私慾出現，馬丁路德說「最可怕的是在我裡面的老我」。',
                '「知道」（יָדַע，yada）在創世記頭八次出現中三次指「同房」，暗示與性的關聯性，但吃禁果不是性意識的起點，而是使人在性方面「不平衡的早熟」，如同分別善惡能力的強化（從少變多）。',
                '犯罪後三個結果：知道自己赤身露體（以葉遮羞徒勞無功）、躲避神的面、神呼喚「你在哪裡」；這呼喚至今未停，人犯罪墮落的過程終須投靠耶穌基督才能得著恩典（羅五20-21）。',
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
              '始祖吃禁果，犯罪中的具體錯誤是什麼？對我自己有何提醒？',
              '神所創造的都是好的，但如果次序錯誤了，會產生什麼結果？試舉例說明。',
              '始祖犯罪後發生了哪些事？這些事分別有何重要意義？',
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
