import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book35Ch5() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-violet-700 to-purple-700 bg-clip-text text-transparent">第五講</h1>
        <h2 className="text-xl font-semibold text-gray-700">在主裡學習保持謙卑</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-violet-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-violet-50 to-purple-50 hover:from-violet-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-violet-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <p className="text-gray-700 leading-relaxed">
              妮塔坦言，這一講她準備得很掙扎——前一晚花了很多時間禱告，想知道如何跟大家分享這個最重要的主題，因為她不希望任何人被高舉而變得驕傲，卻又想讓大家知道這件事實在很重要。她向神禱告：「神啊，我知道你要我在禮拜天分享的是什麼，但是我裡面卻不想服侍，我不知道該怎麼辦？我知道禰看這件事很重要！但我實在太困惑，我不想在這方面服侍。」她笑說，這大概不是很有信心的禱告，但當天早上神差了一位天使來，跟她講了幾件正在發生的事，也教導她怎樣把這信息傳遞給大家。她請大家翻到啟示錄第五章，並帶大家先一起禱告：「天父啊！我們是何等地愛禰，但是我們對禰的愛卻是很膚淺……主啊，請禰幫助我，把早上天使放在我心中的事情講出來……」
            </p>

            <div>
              <h3 className="font-bold text-violet-800 text-lg mb-3">一、放下自我形象的證明——謙卑是代禱者最重要的特質</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔分享了自己的成長背景：童年經歷很大的困難，自我形象、自我價值都很低，覺得自己是個無關緊要、不可愛、不能被愛的孩子，愛人的能力也很弱。得救之前，她在事業上非常成功，卻一點都不察覺，因為心裡一直覺得自己微不足道。得救之後，她第一次從一位有權柄的人身上經歷到愛，於是決定不管付什麼代價都要成為一個有愛的人，但這並不能醫治她那很低的自我形象。她說，幾乎所有種族的人都有這個問題——自我形象很低，因此人很可能用不健康的方式追求卓越成功，以此掩蓋低落的自我形象。但神醫治了她，帶領她經歷生命中很多困難的事，迫使她不再去討人的喜悅，把自我形象的問題從外在可見之事中完全剝離出來，使她的注意力和關注點是在神身上，而不是自己身上。她指出：人有需要讓別人覺得自己很屬靈、很重要、很有見識、很聰明、學位很高的傾向，我們在許多事情上讓步，只是為了證明自己的價值，但這其實跟更靠近神剛好是相反的方向。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔提醒：如果你特別想在某個領域讓人覺得你很卓越，那就會成為你在神裡面成長的天花板。當你發現自己快掉進這樣的陷阱，要趕快逃離。她以自己為例：如果要成為一個代禱者，最不想讓人知道的應該是「你是多麼偉大的代禱者」——因為有代禱者的呼召，當有人把她過度高舉，她就想逃走躲起來，不想因先知性的恩膏、使徒性的恩膏被人認出來。她的事工雖對列國和各樣教會都有使徒性的服事，但很少人知道，因為「這跟我無關，而且永遠都不應該跟我有關，而必須是單單與神有關」。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-violet-800 text-lg mb-3">二、湖邊學謙卑——可塑造、透明、如水般柔軟</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔分享一個得救初期的經歷：她到一座山上的湖邊尋求神的面，湖面清澈如鏡。神對她說：「我要你學有關謙卑的事。」她問：「什麼是謙卑？」神說：「我要你學習無助，我要向你展示一些在你人生的路上有幫助的事。你看到你面前的湖嗎？它非常清澈，你可以看到湖底……像這個湖泊如此清澈透明，你也要成為這樣的人。」妮塔坦言，那樣的透明敞開從來不是她的特質——她對所有人都隱藏內心最深的感覺，但神告訴她，祂不希望她是這樣，要她在成功或失敗中都一樣透明，不管是剛強還是軟弱都要一樣。神接著說：「你看到那個瀑布嗎？你看那水從上面沖下來，它是那樣快樂地想要衝到瀑布的底部，與岩石相撞。如果你高抬自己，我會把你帶下來。但是你如果自卑，我就會把你升高，你要一直地尋求在謙卑的低位。水能變成各樣的形狀、各樣的圖形、各樣的大小，你也需要成為這樣，在我的手中是個可塑造的。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔坦言，在那之前她不是一個可塑造的人——不管到哪裡，環境都要完全符合她的要求，某個地方不夠好就不去，會選更高級的旅館或餐廳，事業越成功就跟越高階層的人交往。她舉了一個很生動的例子：常搭國際航班的人很快會覺得經濟艙不夠好，就想辦法升商務艙，再升頭等艙。她因累積很多飛行里程，隨時可以坐進頭等艙，整個行程也常坐商務艙，但心裡並不平安。她禱告：「主啊，你要我做什麼呢？我飛行的里程很多，我升到商務艙不需要付任何錢，是贈送的。」神卻向她顯現，說：「我會待在經濟艙，你坐哪一個艙都可以。」她就乖乖回到經濟艙。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-violet-800 text-lg mb-3">三、代禱者是神的朋友——順服環境，彼此順服</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說，一個真實的代禱者，就是神的朋友。如果你想成為神的朋友，卻尋求被高舉，神出於對你的愛，必須使你降卑；但你如果一直尋求待在低微的位置，如果合乎祂的旨意，祂會把你升高——而當祂高升你的時候，你甚至都不會留意到；如果你自己察覺到，說明你跟神的同行還不夠親密。她提醒，需要在神所量給你的一切環境裡完全適應，而不是一直想找一個安全舒適的地方。她繼續分享神教導她有關水的功課：把一塊石頭丟到湖裡，漣漪就會慢慢往外散開，神說：「當我把石頭丟到你裡面的時候，我就渴望藉著你的漣漪一直往外，以至於可以觸及到很多在遠處的人。」神又問她有沒有注意到風如何輕輕拂過水面，說：「我要你的心是那樣的純淨，即使是我最細微的聲音都能夠感動到你，我最輕微的靈裡的感動你都能察覺，然後你就會去我要你去的地方。」妮塔坦言，她童年成長的環境很糟糕，順服權柄對她來說完全是件很可怕的事，但神說：「如果你想要更深地進入我裡面，這是我對那些渴望跟我親密的人的要求。」她總結：面對這樣的教導，你有兩種選擇——領受它然後被提升，或是變得驕傲獨立，按自己的方式代禱。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說，神很喜悅人的降服，祂要人降服於祂，也喜悅在教會裡看到人與人彼此順服——她提到自己與江牧師的關係中，當她在江牧師的聚會中，就降服於江牧師；當江牧師來到「鷹的聚集」，江牧師也把自己降服於她之下，這就是彼此順服，是神所喜悅的。她強調：如果神願意把你帶進禱告的領域，千萬別把它當作自我提升的方式。神因為愛你會暫時忍耐，但如果祂發現驕傲在你身上像癌症一樣成長，神就會轉離祂的面，直到你學會謙卑。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-violet-800 text-lg mb-3">四、你是至高者神的祭司——每個信徒都被呼召</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔引用啟示錄五章10節：「又叫他們成為國民，作祭司，歸於神，在地上執掌王權。」她強調，這不是說只有牧師或她自己是祭司，而是每一位信徒肩上都擔有祭司的職分。她接著引彼得前書二章5、9節：「你們來到主面前，也就像活石，被建造成為靈宮，作聖潔的祭司，藉著耶穌基督奉獻神所悅納的靈祭。……惟有你們是被揀選的族類，是有君尊的祭司，是聖潔的國度，是屬神的子民，要叫你們宣揚那召你們出黑暗入奇妙光明者的美德。」妮塔問：作為被揀選的祭司，是要來彰顯自己的美德、恩賜，還是彰顯基督的美德和祂的完美？她指出，神對我們的智慧、智商不感興趣，也不在乎我們有多少知識——「知識使人自高自大，但愛卻能造就人」。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-violet-800 text-lg mb-3">五、神在乎愛，不在乎聰明——愛看得見的人，才能愛看不見的神</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說，神並不在乎我們有多聰明或知道多少，卻非常在乎我們的愛有多少。她引用約翰一書四章20節：「不愛他所看見的弟兄，就不能愛沒有看見的神。」所以如果你沒辦法愛身邊的人，就沒辦法愛基督。她舉例：如果你在一個不幸的婚姻裡，你的呼召可能就是去愛這個對你有虐待傾向的配偶，向他顯明神的完美，讓配偶在你身上看見神的榮美，因而俯伏在神面前，尋求神的面、呼求神的救恩和赦免。她說，神會帶代禱者進入不同的環境和光景中，好叫我們與一些很困難的人面對面，目的就是要培育我們，使我們有基督的形象，讓神能從我們身上彰顯出一個完全的祭司。作為被揀選的族類、被揀選的祭司，祭司的職分裡就包含了代禱的呼召——神的心意從來不是讓大家在教會裡坐在椅子上，只由少數有五重職事的人服事，其他人好像沒他們的事，這從來都不是神的心意。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔憂心地指出：牧師的心應該是要培育會眾在至高者面前成為服事祂的人，然而有些教會的牧師卻以有幾千人來聽一篇道為滿足，鼓勵他們撐到下個禮拜。她問：大部分人回家後，是否知道自己在神的國度裡到底是誰、可以做什麼？基督信仰的意義，難道就只是讀讀聖經、禱告一下嗎？她認為有80%的教會處在這樣的光景中，因為從來沒有明白一個真理：每一個重生得救的基督徒都是祭司，這不是她個人說的，是啟示錄、彼得前書、出埃及記裡都講到的真理。她引用出埃及記十九章4-6節：「我向埃及人所行的事，你們都看見了，且看見我如鷹將你們背在翅膀上，帶來歸我。如今你們若實在聽從我的話，遵守我的約，就要在萬民中做屬我的子民，因為全地都是我的。你們要歸我作祭司的國度，為聖潔的國民。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-violet-800 text-lg mb-3">六、以色列拒絕祭司的國度——歷史的教訓</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔指出，當神向以色列人講這段話時，他們其實不明白什麼叫祭司的國度。他們跟摩西說：「你告訴神，不要再跟我們講話了，免得我們死亡，摩西你自己上山，然後看神要對我們說什麼話。」意思是：「摩西，你自己上去吧，你成為祭司就好，下山後告訴我們神說了些什麼。」妮塔問：這像不像我們現在看到的一些教會光景？星期六晚上為牧師禱告，好叫牧師隔天能講出好的信息，然後我們就透過牧師知道神要跟我們說什麼。她指出：摩西固然是祭司，但如果摩西被呼召到山上去，那麼你也是——神的心意從來不是讓大部分人停留在山腳，只有少數人到山頂尋求神。每個人來到教會，因著與神親密的關係，應該對牧師要講的內容有印證——當牧師說「我們打開約翰福音第十章」，你心裡應該早有印記：「這正是神告訴我，牧師今天要講的內容」。她強調：我們不能決定只留在山腳下，跟摩西說「你去山頂跟神交通就好」；如果一個祭司不能從神那裡聽到什麼，他有什麼價值呢？
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔講述後續的歷史：以色列人決定不要成為祭司的國度，只要摩西和亞倫做這件事，神就選擇利未支派成為祭司——本來應該是整個國家、整個教會都被呼召成為祭司，但神只能退一步，選擇一部分人。而那些不願意付代價聽神聲音的百姓，因著摩西亞倫帶回來的話，就與他們爭競抗爭。她說：如果我們不願意付代價聽神的話，神跟我們說話時，我們自然不會順服去做。接下來，因為百姓不願意聽，祭司說的話好像就不對了；教會發生分裂，就是因為會眾對神的服事不足夠，而服事的人卻覺得自己足夠，於是驕傲、愛錢的心進來，腐敗佔據了服事神的人，價值觀也隨之改變。舊約裡的祭司，本來既是祭司又是君王，又像使徒又像先知，但因為不斷敗壞，神必須把先知的職分從祭司裡分離出來；後來百姓陷入沮喪，覺得「沒有王，我們就不像個國」，於是神再次分割，就有了祭司、先知、君王三個分開的職分。他們得著的第一個王是掃羅——沒有神的心；雖然撒母耳有神的心，百姓卻不要他做王；祭司也沒有這樣的心，於是百姓也不要祭司。（分享到這裡，妮塔落淚）她說：最重要的是，約櫃的榮耀在哪裡呢？在非利士人的陣營裡！神的子民沒有神的榮耀，仇敵卻有——根源就是：我們不要全體成為祭司，只要有人成為祭司就好。今天教會也有同樣的問題，被呼召成為祭司的國度，卻發展成有些人像祭司、其他都是平民，區分了祭司和會眾。
              </p>
              <p className="text-gray-700 leading-relaxed">
                妮塔說，今天我們禁食禱告，就是希望神把約櫃的榮耀再帶回教會——而現在這榮耀卻在仇敵的陣營裡。神呼召的是祭司的國度，不是少數幾個人：如果我們都是祭司，就都有責任從神那裡聽見祂的聲音，學習祂做事的法則，然後在我們身上彰顯出耶穌基督的美德。她說，如果地上的教會只依靠少數幾個大有恩賜的牧者行神跡，那我們豈不是要跨越大半個地球才能得醫治？這從來都不是神的心意——如果參加聚會，神其實期盼你也伸手為他人禱告，使弟兄姐妹得醫治；教會若有人生病，神期待眾弟兄姐妹在家為這人禁食禱告，尋求神的面，整個教會靠著神的靈連結，而不是只靠某個人的恩賜。她提醒：當牧者責任繁重時，聖靈應該能在會眾中興起願意代禱的人；教會若重新接回祭司的責任，家庭會得醫治，教會會擴張，基督的身體會被恢復。她引用保羅的話：「你們當中死了、病了的不少，就是因為你們並沒有分辨是主的身體」——我們沒有分辨的，就是信徒本該成為祭司，如今卻導致約櫃的榮耀停留在仇敵的陣營裡。
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
                '謙卑不是抽象的美德，而是代禱者最核心的裝備：真正的代禱者最不希望被人稱讚「你是多麼偉大的代禱者」，因為代禱的呼召永遠應該單單與神有關，而不是與自己有關。',
                '神教導妮塔要像湖水一樣清澈透明、像水一樣可塑造——不管環境如何都能適應，不追求「更好的旅館、更高的艙等」，而是甘願被神放在任何祂所量給的處境裡。',
                '真正親密跟隨神的人，被神升高時甚至不會自己察覺到；若刻意尋求被高舉，神反而會使人降卑——這是神對祂朋友的愛的管教。',
                '「人人皆祭司」是全講最核心的神學提醒（啟五：10；彼前二：5、9；出十九：4-6）：每一位信徒都被呼召直接聽見神的聲音、直接服事神，而不是把「聽神說話、代禱服事」的責任全部委託給牧者，自己只需要坐在台下聽道。',
                '以色列拒絕作祭司的國度、只要摩西亞倫代表他們上山的歷史，導致了祭司、先知、君王職分不斷分割、敗壞，最終約櫃的榮耀落入非利士人陣營——這是對現代教會「牧者過度承擔、會眾被動接受」現象的警世提醒。',
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
              <h4 className="font-semibold text-gray-800 mb-2">低自我形象與屬靈追求之間的隱藏連結</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔坦言自己童年低落的自我形象，曾驅使她在世俗成就上不斷攀升，卻直到神介入才明白這與真正親近神是相反的方向。這個洞察值得每一位認真追求屬靈成長的人自我省察：我對禱告、服事、屬靈知識的追求，是出於單純愛神的心，還是（也）夾雜著想藉此證明自己價值、彌補內在空虛的成分？兩者外在行為可能一模一樣，內在動機卻天差地遠，也決定了這追求最終會結出謙卑還是驕傲的果子。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「人人皆祭司」的教義在教會歷史中的張力</h4>
              <p className="text-gray-700 leading-relaxed">
                「信徒皆祭司」（Priesthood of All Believers）是宗教改革的核心教義之一，馬丁路德當年正是以此挑戰中世紀教會將「聽見神、服事神」的權柄過度集中在神職人員身上的體制。妮塔在這一講的教導，某種程度上是這個古老教義在代禱事工上的延伸與應用：如果每個信徒都是祭司，那麼「聽見神的聲音、為人代禱」就不該是少數屬靈精英的專利，而是每個基督徒與生俱來的呼召與責任。這對思考教會體制、事工分工、平信徒的角色，都提供了值得深思的神學基礎。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">彼此順服如何避免淪為靈裡的控制？</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔以自己與江牧師「彼此降服」為例說明健康的順服關係，但歷史上也不乏「順服權柄」的教導被濫用、演變為靈性操控的案例。健康的彼此順服，關鍵或許在於「彼此」二字——是雙向、出於愛與信任的降服，而不是單向、被要求盲目服從的控制；同時，順服人與順服神也不是同一件事，任何要求信徒順服到違背良心、聖經教導的地步的「權柄」，都值得高度警惕與查驗。
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
              '妮塔說「你最不想讓人知道的，應該是你是多麼偉大的代禱者」。你在服事或屬靈追求中，有沒有一部分是希望被人看見、肯定的？',
              '「像水一樣可塑造」——你生命中是否也有像妮塔「堅持要坐商務艙」那樣，不自覺為自己設下的舒適門檻？',
              '你是否曾經歷過「被神升高卻自己毫無察覺」，或是相反地，刻意尋求被高舉卻換來降卑的經驗？',
              '「人人皆祭司」意味著你不需要透過牧師才能聽見神的聲音。你目前的信仰生活中，有多少是主動聆聽神、多少是被動等候他人（牧者、屬靈長輩）告訴你神說了什麼？',
              '「不愛看得見的弟兄，就不能愛看不見的神」——你生命中有沒有一位很難去愛的人，而神可能正藉著這個人操練你、也向他顯明神的美善？',
              '以色列人選擇「讓摩西一個人上山」的歷史教訓，對你所屬的教會群體文化，有沒有似曾相識的地方？',
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
              <h4 className="font-semibold text-green-700 mb-2">🪞 誠實面對「證明自己」的動機</h4>
              <p className="text-gray-700 mb-2">花時間安靜下來，誠實問自己：我在服事、禱告、屬靈追求上的熱心，有多少純粹是愛神，有多少是想證明自己的價值、被人看重？把發現寫下來，帶到神面前坦承。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💧 操練「可塑造」的降服</h4>
              <p className="text-gray-700 mb-2">
                本週在一件小事上，主動選擇「較不舒適、較不體面」的選項（例如不挑座位、不挑餐廳、接受一個不方便的服事安排），觀察自己內心的反應，並在其中操練甘心降服。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">👂 練習「祭司式」聆聽</h4>
              <p className="text-gray-700 mb-2">
                下一次去教會聽道之前，先花十分鐘安靜求問神：「今天禰想對我說什麼？」把感動記下來，聚會後對照牧者所講的內容，看看是否有印證，操練不只是被動聽道，而是主動與神連結。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，求禰使我像清澈的湖水一樣透明，像水一樣可以被禰塑造，不管禰把我放在什麼樣的環境，都能安然適應。求禰赦免我想要藉著屬靈追求證明自己價值的驕傲，教導我謙卑降服，也教導我在祭司的職分上，直接聽見禰的聲音。願約櫃的榮耀，不再停留在仇敵的陣營，而是回到禰百姓中間。奉主耶穌的名求，阿們！」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
