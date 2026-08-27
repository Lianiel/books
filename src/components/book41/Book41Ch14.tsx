import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users2, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book41Ch14() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-800 to-cyan-900 bg-clip-text text-transparent">第二部 2-8</h1>
        <h2 className="text-xl font-semibold text-gray-700">榮辱感第八項：名字／親屬關係／血統</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Users2 className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">定義：名字即榮耀</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                本章描述姓氏和血統如何傳承家族榮耀——正如神的榮耀透過神的名和基督的血彰顯；詮釋亞伯拉罕身為以色列族長的重要性，世上所有家族都因他蒙福；顯示神家庭成員的資格標準既狹窄又寬闊，從起初神與猶太人之間的盟約，因信靠耶穌基督，延伸到萬族萬民；也說明在世界的國度當中，為了維護血統與榮耀，經常出現暴力，相對地，在神國度中，基督的寶血與榮耀帶來和平。德西瓦解釋：「在古代，世人不僅僅重視自己的『優勢』；榮耀始於他們家族血統的優良（或資產）、祖先的聲望。希臘人和羅馬人從他們的家族中獲得基本的身分認同。」<sup>1</sup><span style={cite}>（deSilva, 158.）</span>藍頓也指出：「雖然榮耀是個人的，但它的光環延伸到家族、血統和婚姻關係當中：一個人的家庭是他社會形象的一部分。」<sup>2</sup><span style={cite}>（Lendon.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                在聖經中，名字和榮耀息息相關：「藐視我名的祭司啊……我既為父親，尊敬我的在哪裏呢？」（瑪一6）；「要將耶和華的名所當得的榮耀歸給他」（詩九六8）；「我是耶和華，這是我的名；我必不將我的榮耀歸給假神」（賽四二8）；「就是凡稱為我名下的人，是我為自己的榮耀創造的」（賽四三7）。神的名與神的尊榮更是約翰福音的重要主題：「我奉我父的名來，你們並不接待我」（約五43），耶穌以「父的名」出現，猶太人卻拒絕了祂，反倒接待了那些「奉自己的名」而來的人；「凡接待他的，就是信他名的人，他就賜他們權柄，作神的兒女」（約一12）——「相信耶穌基督的名」不只是知道這名字怎麼寫，而是擁抱祂的榮耀、尊貴。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">「父啊，願你榮耀你的名」：十字架的真正目的</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                上十字架前，耶穌痛苦禱告：「我現在心裏憂愁，我說什麼才好呢？父啊，救我脫離這時候；但我原是為這時候來的」（約十二27），接著祂說出了令人意外的一句話：「父啊，願你榮耀你的名」（約十二28）。作者指出，這正是十字架的核心目的——神誠然忠於祂兩千年前對亞伯拉罕所承諾的應許，透過亞伯拉罕的後代，地上所有家族將蒙福（創十二3，廿二18），基督就是那位後代！神的誠信危在旦夕，神的榮耀成敗未定，這就是基督上十字架的目的。天上隨即有聲音回應：「我已經榮耀了我的名，還要再榮耀」（約十二28）。霍桑（Steve Hawthorne）在其經典文章〈祂的榮耀故事〉中寫道：這是神對「為了祂的名得更大榮耀，以致獻身於父的人」的回應，耶穌說這回應並不是針對祂，而是祂的跟隨者。<sup>3</sup><span style={cite}>（Steve Hawthorne, "The Story of His Glory."）</span>吳榮也指出：「贖罪是必要的，不僅為了救贖人類；這個說法，不僅表達神想要榮耀自己，也表示如果基督沒有受死，神就不是公義的……贖罪是以神為中心的行動；基督的死，證明了神的公義；如此一來，祂能拯救祂的子民……拯救罪人，是祂達成目標之手段。」<sup>4</sup><span style={cite}>（Wu, 197-198.）</span>
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">血緣和榮耀：亞伯拉罕家族的榜樣</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                神對亞伯拉罕說「你要離開本地、本族、父家」（創十二1）時，等於要他放棄僅有的榮耀來源，以換取另一個——古近東地區，一個人的榮耀主要來自土地與家人（血緣傳承）。神隨即應許：「我必叫你成為大國」（創十二2），但亞伯拉罕的妻子撒拉不孕，代表家族名聲、傳承岌岌可危。神卻應許他：「我也要使你的後裔如同地上的塵沙那樣多」（創十三16）、「你向天觀看，數算眾星……你的後裔將要如此」（創十五5）。後來，亞伯拉罕聽從撒拉的建議與夏甲同房生下以實瑪利，儘管出於人的不順服，神依然祝福夏甲和以實瑪利，應許他也要成為大國（創十七20）。創世記十七章記載神藉割禮與亞伯拉罕全家族正式立約，並將他的名字從「亞伯蘭」改為「亞伯拉罕」，意為「多國的父」（創十七1-7）。以撒出生後，神更在亞伯拉罕獻以撒的順服考驗中，再次確認應許：「地上萬國都必因你的後裔得福」（創廿二18）。這個應許後來也延伸到以撒（創廿六3-5）與雅各（創廿八13-14）身上。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                羅馬書第四章，保羅把亞伯拉罕的信心，當作連接舊約應許與新約新群體的橋梁：「亞伯拉罕信神，這就算為他的義」（羅四3），且這發生在他受割禮之前——割禮的第一個目的，不是要讓亞伯拉罕成為義人，而是「作他未受割禮的時候因信稱義的印證」，使他「作一切未受割禮而信之人的父」，也「作受割禮之人的父」，讓猶太信徒明白，真正蒙悅納的根基不是外在的記號，而是內在的信心——「不但歸給那屬乎律法的，也歸給那效法亞伯拉罕之信的」（羅四16）。作者將亞伯拉罕信心家族的榮辱感歸納為七點：他是「神所尊榮的祖先」；他因「帶來榮耀的信心」蒙義；他享有「與神同做施恩者的尊榮」；耶穌基督是這家族「享有最高尊榮的兒子」；這是「因彰顯神榮耀而得尊榮的家族」；耶穌「羞辱的死亡方式，卻榮耀了神」；而所有蒙恩的人，都因此「對神的敬拜和尊榮」，最終「同享永恆的國度」。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">耶穌重新定義家族：簡化與擴展</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                馬太福音以耶穌的家譜開篇：「亞伯拉罕的後裔，大衛的子孫，耶穌基督的家譜」（太一1）。尼瑞指出，馬太福音其實是一種名為「讚美」（encomium）的古典文體，羅馬帝國受教育的學子都被教導，讚美文體要從描繪主角的血統或祖先開始<sup>5</sup><span style={cite}>（Neyrey, Honor and Shame in the Gospel of Matthew, 70-89.）</span>——馬太福音中，耶穌被稱為神的兒子、亞伯拉罕的後裔、大衛的子孫和約瑟的兒子，透過交代祂尊貴的血統，讓讀者信賴祂的至高榮耀。<sup>6</sup><span style={cite}>（Neyrey, 57.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                然而，耶穌對家庭的教導卻同時「簡化」又「擴展」了神家庭的定義：「誰是我的母親？誰是我的弟兄？……凡遵行我天父旨意的人，就是我的弟兄姊妹和母親了」（太十二48-50）。尼瑞稱之為「新榮耀指標」<sup>7</sup><span style={cite}>（Neyrey, 54.）</span>——一方面，耶穌把成為神家庭成員的標準「簡化」為順服天父旨意；另一方面，祂也「擴展」了這個家庭的邊界，讓任何遵行神旨意的人都能加入。保羅在加拉太書中進一步闡述：「並不分猶太人、希利尼人，自主的、為奴的，或男或女，因為你們在基督耶穌裏都成為一了」（加三28）——這個親屬關係狹隘卻又寬廣：唯一的資格是信心，卻不排斥任何種族、性別或社會地位的人。保羅也用「兒子的名分」這個詞彙，表達信徒尊貴的新身分：「你們所受的，不是奴僕的心，仍舊害怕；所受的，乃是兒子的心，因此我們呼叫：阿爸！父！」（羅八15）——在羅馬帝國奴隸制普遍的背景下，這個對比格外鮮明：奴隸制度的羞辱，對比兒子地位的尊榮。彼得前書也宣告新家庭無限奇妙的榮耀：「惟有你們是被揀選的族類，是有君尊的祭司，是聖潔的國度，是屬神的子民」（彼前二9）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                但作者也提醒，不可忽略耶穌這些教導所翻轉、甚至令人詫異的另一面：「任憑死人埋葬他們的死人；你跟從我吧」（太八22）；「愛父母過於愛我的，不配作我的門徒」（太十37）；「也不要稱呼地上的人為父，因為只有一位是你們的父」（太廿三9）。根據巴契（Bartchy）的研究，耶穌的教導翻轉了古羅馬「父權」（patria potestas，父親對家庭終身的絕對威權，有時甚至包括生死大權）與猶太孝道文化中的某些價值觀：拒絕父權體制對家庭的絕對掌控；邀請人加入神的家庭，根據不是血緣，而是手足般的人際價值觀；重新定義獲得榮耀的基礎是服事而非競爭；並闡明真正的權力，是給予自由與力量，而非控制他人。<sup>8</sup><span style={cite}>（S. Scott Bartchy相關研究。）</span>
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">「流血」與榮耀：世仇的循環</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「流血」是榮耀競爭的原因，也是結果。聖經首次提到「流血」，出現在該隱殺死兄弟亞伯時——因嫉妒引發的殺人，「流血」是該隱殺人的象徵，耶和華對他說：「你兄弟的血有聲音從地裏向我哀告」（創四10）。撒母耳記下四章則記載利甲和巴拿謀殺掃羅之子伊施波設，企圖藉此討好大衛，卻反遭處決——他們誤判了大衛不會認同「藉殺敵人後代來報復血仇」的文化，但事實上這種家族間的報復行徑，在當時文化中確實被普遍接受。尼瑞寫道：「為自己家族成員的利益努力，不過是個人履行對家族群體應有的責任，此乃榮耀之舉……血統傳承家族的榮耀。」<sup>9</sup><span style={cite}>（Neyrey, Honor and Shame in the Gospel of Matthew, 53.）</span>這正是「血仇」（世仇）的根源：家族之間的長期衝突，衍生循環性的報復手段。<sup>10</sup><span style={cite}>（Blood feud定義。）</span>作者引述西西里島作家夏夏的話：「在西西里島，家族就是國家、就是一切……他的權利和義務定義都源自家庭」<sup>11</sup><span style={cite}>（Pryce-Jones, 38.）</span>——那不勒斯的卡莫拉黑手黨、科西嘉人、阿拉伯自治團體都有類似觀念，漠視國家法律，因為國家的法律平等，根本無法和他們的榮辱價值觀一致。從哈特菲爾德和麥考伊家族械鬥，到遜尼派與什葉派的衝突，血統引發的榮耀暴力，至今仍橫行世界各地。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">讚美主，基督的血不一樣！</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                在世界的國度中，血統與榮耀助長家族間的暴力，血仇冤冤相報似乎無窮無盡；但基督的血帶來完全不同的結果：「你們從前遠離神的人，如今卻在基督耶穌裏，靠著他的血，已經得親近了。因他使我們和睦，將兩下合而為一，拆毀了中間隔斷的牆……既在十字架上滅了冤仇，便藉這十字架使兩下歸為一體，與神和好了」（弗二13-16）；「我們既因耶穌的血得以坦然進入至聖所……又有一位大祭司治理神的家！並我們心中天良的虧欠已經灑去」（來十19-22）。在世界的國度中，血統與榮耀是種族仇恨和種族滅絕的催化劑；但基督的寶血與榮耀帶來接納、包容，是各族各民歡欣慶祝的催化劑。
              </p>
              <p className="text-gray-700 leading-relaxed">
                耶穌在會堂裡的教導更是意味深長：「你們若不吃人子的肉，不喝人子的血，就沒有生命在你們裏面……吃我肉、喝我血的人常在我裏面，我也常在他裏面」（約六53-56）。英文標準版研經本從屬靈意義解釋：「吃」人子的「肉」是指信靠祂，「喝人子的血」是指相信祂的死是為世人贖罪。<sup>12</sup><span style={cite}>（ESV Study Bible.）</span>作者進一步提出：既然古代希伯來和羅馬文化重視「血統、出身傳承家族的榮耀」，耶穌要求門徒「喝祂的血」，是否正是要求追隨者深刻、全然地信靠祂，讓祂的榮耀挹注到他們的生命中——去真實地體會、感受那份屬於耶穌的榮耀，並讓基督的生命、態度和行為，活在祂的門徒身上？
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
                '在聖經中，名字幾乎與榮耀同義——神的名代表祂的尊榮，耶穌臨上十字架前的核心祈求「父啊，願你榮耀你的名」，揭示十字架真正的目的：實現神對亞伯拉罕的應許，證明神的信實與公義。',
                '古近東文化中，一個人的榮耀主要來自土地與血緣家人的傳承；神應許無子嗣的亞伯拉罕「後裔如同天上的星」，透過割禮立約，並在獻以撒的考驗後確認「地上萬國都必因你的後裔得福」，把家族榮耀的敘事推向普世格局。',
                '馬太福音刻意以家譜開篇，運用古典「讚美文體」的慣例，透過交代耶穌尊貴的血統來彰顯祂的榮耀；但耶穌自己卻同時「簡化」（順服天父旨意）又「擴展」（不分血緣、種族、性別）了神家庭的定義。',
                '保羅用「兒子的名分」描述信徒在基督裡的尊榮身分，與羅馬奴隸制的羞辱形成鮮明對比；彼得前書更宣告信徒是「君尊的祭司」「聖潔的國度」，這是遠超血緣關係的全新家族身分。',
                '「流血」在世界的國度中，往往是榮耀競爭的原因也是結果——從該隱殺亞伯，到血仇世仇的循環報復，血統與榮耀交織成人類歷史上難以化解的暴力根源。',
                '基督的寶血徹底翻轉了這個邏輯：不再是流血引發更多流血的世仇循環，而是「拆毀了中間隔斷的牆」「使兩下歸為一體」——耶穌要求門徒「喝祂的血」，正是邀請他們讓祂的榮耀真實地注入自己的生命。',
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
              <h4 className="font-semibold text-gray-800 mb-2">耶穌「簡化又擴展」神家庭定義的教導，如何幫助我們理解教會與原生家庭之間的張力？</h4>
              <p className="text-gray-700 leading-relaxed">
                許多信徒（尤其在重視孝道的華人文化中）在信主後，會經歷與原生家庭在信仰上的張力，甚至被指責「不孝」。耶穌「任憑死人埋葬他們的死人」這類看似冷酷的話語，並非否定家庭倫理，而是宣告：對神旨意的順服，是比血緣關係更根本的忠誠對象。理解這一點，能幫助信徒在面對家庭壓力時，既不必因愧疚而妥協信仰的核心，也能學習用智慧和愛心，持續在關係中見證福音，而非用這段經文當作切割家人關係的藉口。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">血仇（世仇）文化在今日世界依然普遍存在，福音的「和好」信息可以如何具體介入這類根深柢固的家族對立？</h4>
              <p className="text-gray-700 leading-relaxed">
                以弗所書二章「拆毀了中間隔斷的牆」原本指猶太人與外邦人的對立，但這個原則同樣適用於今日仍存在血仇文化的地區（如部分非洲部族、中東家族衝突）。福音提供的不只是個人得救的信息，更是一套能真正終結世代冤冤相報循環的和解神學——教會若能在這些處境中，具體示範「基督的血帶來和好」而非「以血還血」，將是極具說服力的福音見證。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「吃我肉、喝我血」這個聖餐意象，用榮辱文化的角度重新理解，對信徒的聖餐觀有何深化？</h4>
              <p className="text-gray-700 leading-relaxed">
                多數教會的聖餐教導聚焦在「紀念基督的犧牲、赦罪」，這是正確且核心的；但作者提出的角度補充了另一個向度：喝基督的血，也是在血統／榮耀文化的意義上，宣告與基督「同血脈」——真正地領受、內化祂的榮耀與身分。這提醒我們，領聖餐不只是回顧過去的赦免，也是持續不斷地讓基督的生命、品格、榮耀，具體地活在領受者的生命中。
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
              '什麼是你感到自豪的？你原來的姓氏和家族？或你在基督家中被稱為「基督徒」的身分？',
              '「父啊，願你榮耀你的名」是耶穌上十字架前最深切的祈求，這對你理解十字架的意義，帶來什麼新的角度？',
              '大使命吩咐我們「奉父、子、聖靈的名」給人施洗，讀完本章對「名」與榮耀的探討後，這對你理解洗禮的意義有何影響？',
              '你的家族或文化中，是否存在類似「世仇」或長期對立的關係？福音的和好信息，可以如何介入這樣的處境？',
              '「凡遵行我天父旨意的人，就是我的弟兄姊妹和母親了」——這句話，如何挑戰或安慰你與原生家庭之間的關係？',
              '在跨文化服事中，你可以做些什麼，來創造一種讓信徒和尋求者都能體驗到「成為神家庭一部分」的榮耀感？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 設計一堂「基督寶血帶來和平」的課程</h4>
              <p className="text-gray-700 mb-2">
                以以弗所書二章13-16節為核心，設計一堂關於基督寶血之力量的課程：制服敵對者、在衝突中實現和平、從罪惡中清洗、治癒種族紛擾所造成的傷口，並建立一個接納不同社會地位者的新群體。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✝️ 默想約翰福音十二章27-32節</h4>
              <p className="text-gray-700 mb-2">
                反覆讀這段耶穌上十字架前的禱告，特別留意「父啊，願你榮耀你的名」這句話，並用一週的時間，把十字架的目的與神的信實、榮耀連結起來默想禱告。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，感謝祢的名如此尊貴，也感謝祢用自己的寶血，拆毀了我與祢、以及我與他人之間隔斷的牆。求祢幫助我，不再讓血緣、族群或家族的榮辱綑綁我的心，而是真實地領受祢的榮耀，讓祢的生命活在我裡面。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
