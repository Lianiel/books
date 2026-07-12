import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch57() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第57章</h1>
        <h2 className="text-xl font-semibold text-gray-700">猶大的故事</h2>
        <p className="text-gray-500 mt-1">猶大承認說：「她比我更有義，因為我沒有將她給我的兒子示拉。」　創世記卅八26</p>
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
              創世記的家譜採用彌賽亞譜系的特殊筆法，讓彌賽亞祖先的名字排在最前面，而不管他是不是在那一年出生，至少有兩個明顯的例子：1.挪亞500歲生閃、含、雅弗，2.他拉70歲生亞伯蘭、拿鶴、哈蘭。比對聖經其他地方的記載，可知挪亞502歲才生閃（創十一10），他拉130歲才生亞伯蘭（創十一32，十二4，徒七4）。為何要把閃、亞伯蘭擺在他們各自三兄弟的最前面，因為他們是彌賽亞的祖先。如何決定誰是彌賽亞的祖先？閃是亞伯蘭的祖先，所以閃是彌賽亞的祖先，因彌賽亞一定從亞伯蘭而出。神也同樣應許以撒、雅各，他們的後裔要得迦南地為業，且產生君王，因此以撒、雅各都是彌賽亞的祖先，到了雅各十二個兒子的這一代，誰是彌賽亞的祖先？是在雅各對十二個兒子的祝福中顯明出來的，雅各明講君王要從猶大的後裔產生（創四十九10），因此猶大乃是彌賽亞的祖先。雅各的預言在先，創世記的完成在後，因此寫創世記內容的人就需要把猶大的故事放進來。既然創世記這麼看重彌賽亞譜系，在約瑟被賣到埃及之後，剛好發生猶大娶妻生子的事，所以有必要用一整章的內容來講猶大的故事，特別是介紹猶大的兒子們，因為他們當中有人會是彌賽亞的祖先。
            </p>
            <p className="text-gray-700 leading-relaxed">
              有學者認為，在以色列的歷史中，猶大支派比代表約瑟的兩個支派（以法蓮和瑪拿西）更重要。整個王國歷史中，猶大支派都在大衛和其後裔中處於領導的地位，創世記的編修者回溯整個以色列歷史，不單看見約瑟家的重要性，更看見猶大家的重要性。可能因此便將猶大從他瑪氏生法勒斯與謝拉的事蹟，插入在約瑟故事的開端，為要使讀者體會猶大支派的重要性<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（丘恩處，《創世記》，頁501-508）</span>。這個觀點是認為，可能摩西寫了創世記初期的版本，後來的人加添了一些資料。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、猶大娶妻及兒子娶妻</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記卅八1-2：「那時，猶大離開他弟兄下去，到一個亞杜蘭人名叫希拉的家裡去。2猶大在那裡看見一個迦南人名叫書亞的女兒，就娶他為妻，與他同房。」娶לָקַח（laqah）這字是拿住或拉住的意思，「猶大看見……就拉住她，與她同房」，與「示劍看見底拿就拉住她，與她行淫」，都用לָקַח（laqah）這個字。夏娃看見那樹的果子好作食物，也悅人的眼目，就摘下（拿下）來吃了。也是用לָקַח（laqah）這個字。（創三6）這種「看見就拿」的模式，代表情慾主導的行動。神的兒子們看見人的女子美貌，就隨意挑選，娶來為妻，正是這種模式。埃及人看見撒拉極其美貌，就將她帶進法老的宮去，也是這種模式。這裡的與她同房，原文是進入בּוֹא（bow）她，也是比較形容肉體的行動。因此猶大的婚姻建立在一個不穩固的基礎上。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                猶大的婚姻與父親雅各、祖父以撒的婚姻相比較，有很大的不同。以撒、雅各的婚姻對象都是信靠耶和華神的女子，猶大卻與迦南人的女兒結婚，合理推論是不認識神的女子，聖經甚至沒有那女子的名字，只說是書亞的女兒。母親對兒女的教養，有很大的影響。母親若不認識神，很難將兒女帶來認識神，兒女也會隨從周遭的風俗惡習行事。猶大與書亞的女兒生了三個兒子：「他就懷孕生了兒子，猶大給他起名叫珥。他又懷孕生了兒子，母親給他起名叫俄南。他復又生了兒子，給他起名叫示拉。」（創卅八3-5）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經接著記載頭兩個兒子都被神刑罰而死：「6猶大為長子娶妻，名叫他瑪。7猶大的長子珥在耶和華眼中看為惡，耶和華就叫他死了。8猶大對俄南說：你當與你哥哥的妻子同房，向他盡你為弟的本分，為你哥哥生子立後。9俄南知道生子不歸自己，所以同房的時候便遺在地，免得給他哥哥留後。10俄南所做的在耶和華眼中看為惡，耶和華也就叫他死了。」長子「珥」這個名字的希伯來文是עֵר（er），「惡」的希伯來文是רַע（ra），這字的兩個子音剛好是「珥」兩個子音的對調，是一個雙關語。中文也有這種效果，「珥」與「惡」讀音相近，讓人一聽就聯想到他的下場。以撒、雅各的婚姻家庭雖然也有一些問題，但相較之下，還是好的，至少沒有人被神處罰而死。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                珥是惡的。他到底做了甚麼，聖經沒有明講，主前二世紀猶太人寫的偽經《禧年書》，對創世記卅八章的歷史有些解釋，算是某些猶太人的觀點，可作為參考<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（陸蘇河，《解經有路——從釋經學到生活應用》，頁23）</span>：
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-3 ml-2">
                <li>猶大的兩個兒子珥、俄南表面上娶了他瑪，實際上都沒有真正的性關係。俄南遺精在地，不願給哥哥留後，在神眼中看為惡；推論珥也是不願留後，所以被神看為惡。</li>
                <li>猶大在無知中與兒媳婦發生性關係，可以不算姦淫，因為猶大是唯一跟他瑪有完整性關係的人。</li>
              </ol>
              <p className="text-gray-700 leading-relaxed mb-3">
                為何俄南不願留後，聖經有明講，是出於他自私的動機；若珥也不願意留後，甚至不願意行房，這會是甚麼原因？筆者推論，有可能珥是一個同性戀者，跟含的兒子迦南一樣，甚至更嚴重。迦南性侵了挪亞，但至少後來還有結婚生子，算是雙性戀。可能珥是沉溺於同性的性關係中，不願意與妻子有性關係。這個推論是合理的，因為後來的迦南地同性性行為非常普遍（創十九4-9），以至於神先以天火滅了所多瑪、俄摩拉，後來又藉以色列百姓滅了迦南七族。這種事神看為惡，又立刻處置，避免擴大影響，與神公義又慈愛的屬性相合，也與神咒詛迦南、神審判迦南地的整個歷史脈絡相合。
              </p>
              <p className="text-gray-700 leading-relaxed">
                關於兄死弟娶的事，古代近東的習俗，大伯或小叔有責任娶那無子嗣兄弟的寡婦為妻，這種婚姻所生的第一個兒子便算是已死弟兄的兒子，繼承他的產業，也維持他的名<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（紀博遜，《創世記注釋下冊》，頁256。陳志宏，《妥拉研究法的探討——以創世記38章為例》，頁24）</span>。聖經申命記廿五5-10也有這種規定：「5弟兄同居，若死了一個，沒有兒子，死人的妻不可出嫁外人，他丈夫的兄弟當盡弟兄的本分，娶他為妻，與他同房。6婦人生的長子必歸死兄的名下，免得他的名在以色列中塗抹了。7那人若不願意娶他哥哥的妻，他哥哥的妻就要到城門長老那裡，說：我丈夫的兄弟不肯在以色列中興起他哥哥的名字，不給我盡弟兄的本分。8本城的長老就要召那人來問他，他若執意說：我不願意娶他，9他哥哥的妻就要當著長老到那人的跟前，脫了他的鞋，吐唾沫在他臉上，說：凡不為哥哥建立家室的都要這樣待他。10在以色列中，他的名必稱為脫鞋之家。」後來波阿斯娶摩押女子路得為妻也是照這條例做的（得四1-9），並且波阿斯正是猶大、法勒斯的後裔，波阿斯應清楚知道祖先的這個故事及相關原則。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、猶大從他瑪氏生二子</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                接下來的發展有更大的戲劇性：「11猶大心裏說：恐怕示拉也死，像他兩個哥哥一樣，就對他兒婦她瑪說：你去，在你父親家裏守寡，等我兒子示拉長大。她瑪就回去，住在她父親家裏。12過了許久，猶大的妻子書亞的女兒死了。猶大得了安慰，就和他朋友亞杜蘭人希拉上亭拿去，到他剪羊毛的人那裏。13有人告訴她瑪說：你的公公上亭拿剪羊毛去了。14她瑪見示拉已經長大，還沒有娶她為妻，就脫了她作寡婦的衣裳，用帕子蒙着臉，又遮住身體，坐在亭拿路上的伊拿印城門口。15猶大看見她，以為是妓女，因為她蒙着臉。16猶大就轉到她那裏去，說：來吧！讓我與你同寢。他原不知道是他的兒婦。她瑪說：你要與我同寢，把甚麼給我呢？」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                猶大以肉體情慾為主導（俗稱以下半身思考）的本性沒有改變，看到一個可能是妓女的人，就想與他同寢。這也可能就是迦南地的普遍風俗，男人找妓女是被接受的。這段記載讓我們更加明白為何不久以後神要藉著大饑荒將以色列全家遷移到埃及的歌珊地。以色列若繼續留在迦南地生養發展，恐怕會全軍覆沒，都被迦南地的風俗惡習同化了。這樣怎麼可能成為屬神的子民、祭司的國度、聖潔的國民（出十九5-6）？
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                值得留意的是，創世記卅八15節用的妓女是זָנָה（zanah）這字，肉體姦淫的妓女與後來以色列百姓的屬靈淫亂都用這個字。而21-22節三次講到妓女，用的是另一個字קְדֵשָׁה（qadesh），直譯是聖女（神聖之女），用來指廟妓。當時迦南地與巴比倫的風俗，男人進入廟裡，與廟妓行淫，以此來敬拜神明。這背後當然是魔鬼邪靈的工作，但猶大似乎想將自己所做的事算為與廟妓的關係，可消除罪惡感<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（謝挺，《始於神——創世記靈修日引》，頁9/29-9/30）</span>。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「17猶大說：我從羊群裏取一隻山羊羔，打發人送來給你。她瑪說：在未送以先，你願意給我一個當頭嗎？18他說：我給你甚麼當頭呢？她瑪說：你的印、你的帶子，和你手裏的杖。猶大就給了她，與她同寢，她就從猶大懷了孕。19她瑪起來走了，除去帕子，仍舊穿上作寡婦的衣裳。20猶大託他朋友亞杜蘭人送一隻山羊羔去，要從那女人手裏取回當頭來，卻找不着她，21就問那地方的人說：伊拿印路旁的妓女在哪裏？他們說：這裏並沒有妓女。22他回去見猶大說：我沒有找着她，並且那地方的人說：這裏沒有妓女。23猶大說：我把這山羊羔送去了，你竟找不着她。任憑她拿去吧，免得我們被羞辱。」（創卅八17-23）
              </p>
              <p className="text-gray-700 leading-relaxed">
                照著他瑪的計畫，他瑪藉此得到後裔，且能全身而退：「24約過了三個月，有人告訴猶大說：你的兒婦她瑪作了妓女，且因行淫有了身孕。猶大說：拉出她來，把她燒了！25她瑪被拉出來的時候便打發人去見她公公，對他說：這些東西是誰的，我就是從誰懷的孕。請你認一認，這印和帶子並杖都是誰的？26猶大承認說：她比我更有義，因為我沒有將她給我的兒子示拉。從此猶大不再與她同寢了。」（創卅八24-26）猶大不讓小兒子示拉娶他瑪，固然不對，但他瑪從公公懷孕生子可以嗎？為何猶大承認他瑪更有義呢？當時並沒有後來的摩西律法，若參看當時的相關律法可發現這事被認為是正確的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                根據中亞述律法，條例33（主前十五至十四世紀），若寡婦的丈夫死了沒有兒子，寡婦的公公應該指定亡夫的一個兄弟來娶她；若公公願意，寡婦也可嫁給公公為妻<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（Thomas and Dorothy Thompson, "Some Legal Problems in the Book of Ruth", VT, Vol.18, (1968), pp.94-95. 陳志宏，《妥拉研究法的探討——以創世記38章為例》，頁24）</span>。根據赫人法律條例193（主前十四至十三世紀），若寡婦的丈夫死了沒有兒子，亡夫的兄弟應該娶她，若亡夫沒有兄弟可以娶她，那麼寡婦的公公應該娶她<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（Nahum M. Sarna, The JPS Torah Commentary: Genesis, Philadelphia: Jewish Publication Society, 1989, p.266）</span>。在創世記卅七章及卅八7-10所描述的猶大是冷酷無情的，但到了創世記四十四18-34猶大在那位嚴厲的埃及宰相面前為便雅憫求情時，卻變得有情有義。這樣的轉變，有學者認為是從猶大承認他瑪比他有義開始的。有了創世記卅八章的記載，猶大在創世記四十四18-34的表現就比較合理<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（Gordon Wenham, Word Biblical Commentary Volume 2: Genesis 16-50, Dallas, Texas: Word Books, 1994, pp.363-365）</span>。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                接下來是生出兒子了：「27她瑪將要生產，不料她腹裏是一對雙生。28到生產的時候，一個孩子伸出一隻手來；收生婆拿紅線拴在他手上，說：這是頭生的。29隨後這孩子把手收回去，他哥哥生出來了；收生婆說：你為甚麼搶着來呢？因此給他起名叫法勒斯。30後來，他兄弟那手上有紅線的也生出來，就給他起名叫謝拉。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                這段故事與以掃、雅各出生的故事很像，都是有人想搶著當長子。法勒斯פֶּרֶץ（perets）這個名字是從動詞פָּרַץ（parats）而來的，這字是衝的意思，也有突破、衝破、爆發的意思。收生婆說，你為什麼搶著來呢？可翻譯為你為什麼衝（爆發）出來呢<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（謝挺，《始於神——創世記靈修日引》，頁10月3日）</span>？謝拉這個名字有明亮、晨曦紅光的意思，取這名字，可能是因為他手上綁著紅線<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（聖經公會，《創世記研讀本》，頁307）</span>。
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                路得記四11-22：「11在城門坐着的眾民和長老都說：我們作見證。願耶和華使進你家的這女子，像建立以色列家的拉結、利亞二人一樣。又願你在以法他得亨通，在伯利恆得名聲。12願耶和華從這少年女子賜你後裔，使你的家像她瑪從猶大所生法勒斯的家一般。……13於是，波阿斯娶了路得為妻，與她同房。耶和華使她懷孕生了一個兒子。14婦人們對拿俄米說：耶和華是應當稱頌的！因為今日沒有撇下你，使你無至近的親屬。願這孩子在以色列中得名聲。15他必提起你的精神，奉養你的老，因為是愛慕你的那兒婦所生的。有這兒婦比有七個兒子還好！16拿俄米就把孩子抱在懷中，作他的養母。17鄰舍的婦人說：拿俄米得孩子了！就給孩子起名叫俄備得。這俄備得是耶西的父，耶西是大衛的父。18法勒斯的後代記在下面：法勒斯生希斯崙；19希斯崙生蘭；蘭生亞米拿達；20亞米拿達生拿順；拿順生撒門；21撒門生波阿斯；波阿斯生俄備得；22俄備得生耶西；耶西生大衛。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                這段經文讓我們看到，路得記把波阿斯跟後來的大衛連起來，也把先前的法勒斯跟波阿斯連起來，讓我們清楚看到，神如何從猶大的後裔當中預備將來的彌賽亞。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                從創世記的記載，看到猶大是個蠻有肉體情慾的人，但猶大的生命後來有一些好的轉變，顯出忠誠的特質。他為了父親的生命，願意挺身而出，代替小弟便雅憫留在埃及作奴隸人質。他的甘願捨身，使他的後代蒙福，產生了以色列最好的王大衛，並進而產生了救主基督耶穌。我們每個人都不完美，但我們若願意被神調整更新，也至終能被神大大使用。
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
                '創世記將猶大娶妻生子的故事插入約瑟被賣的敘事中，是因雅各預言君王要從猶大而出（創四十九10），猶大乃是彌賽亞的祖先，必須交代他的家系。',
                '猶大娶迦南女子為妻，與父祖以撒、雅各只娶信靠耶和華之女子的婚姻大不相同；長子珥「在耶和華眼中看為惡」而死，其名「珥」與「惡」在希伯來文互為字母對調的雙關語。',
                '猶大誤將裝扮的他瑪當作妓女，其實反映了迦南地的淫亂風俗被以色列人沾染的危機，這正是神後來藉饑荒把以色列全家遷往埃及歌珊地、暫離迦南污染的重要背景。',
                '猶大最終承認他瑪「比我更有義」，這在當時近東法律（中亞述律法、赫人法律）的背景下是合理的評斷；此事件也預示了猶大後來在創世記四十四章為便雅憫挺身求情、變得有情有義的轉變。',
                '他瑪所生的法勒斯（意為「衝破」）成為大衛王直系的先祖，路得記的家譜清楚將法勒斯與波阿斯、大衛連結，顯明神如何在一段充滿情慾與污點的故事中，仍預備出彌賽亞的血統。',
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
              '猶大的婚姻有什麼問題？他兒子的婚姻又有什麼問題？彼此有何關連性？我們當如何引以為鑑？',
              '當時的迦南地有什麼淫亂的問題？這與以色列人被神帶往埃及歌珊地四百多年有何關係？試分享你的體會與應用。',
              '猶大本來的生命光景是怎樣的？後來有甚麼轉變？你期待神如何調整你的生命好被他使用？可提出來彼此代禱。',
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
