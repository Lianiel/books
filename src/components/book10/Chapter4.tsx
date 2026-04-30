import { useState } from 'react';
import {
  ChevronDown, ChevronRight, Heart, Clock, Book,
  Users, Target, Zap, Shield, CheckCircle, 
  AlertTriangle, MessageCircle, Lightbulb, Star, Search
} from 'lucide-react';

const Section = ({
  title,
  icon: Icon,
  children,
  defaultOpen = false,
  accentColor = 'indigo',
}: {
  title: string;
  icon: any;
  children: React.ReactNode;
  defaultOpen?: boolean;
  accentColor?: string;
}) => {
  const [open, setOpen] = useState(defaultOpen);
  const borderColor = accentColor === 'purple' ? 'border-purple-400' : accentColor === 'red' ? 'border-red-400' : accentColor === 'amber' ? 'border-amber-400' : accentColor === 'green' ? 'border-green-400' : 'border-indigo-400';
  const bgColor = accentColor === 'purple' ? 'bg-purple-50' : accentColor === 'red' ? 'bg-red-50' : accentColor === 'amber' ? 'bg-amber-50' : accentColor === 'green' ? 'bg-green-50' : 'bg-indigo-50';
  const iconColor = accentColor === 'purple' ? 'text-purple-600' : accentColor === 'red' ? 'text-red-600' : accentColor === 'amber' ? 'text-amber-600' : accentColor === 'green' ? 'text-green-600' : 'text-indigo-600';
  const titleColor = accentColor === 'purple' ? 'text-purple-900' : accentColor === 'red' ? 'text-red-900' : accentColor === 'amber' ? 'text-amber-900' : accentColor === 'green' ? 'text-green-900' : 'text-indigo-900';

  return (
    <div className={`rounded-xl border-l-4 ${borderColor} ${bgColor} mb-4 shadow-sm overflow-hidden`}>
      <button
        className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-3">
          <Icon className={`w-5 h-5 ${iconColor} flex-shrink-0`} />
          <span className={`font-bold ${titleColor}`} style={{ fontSize: '17px' }}>{title}</span>
        </div>
        {open
          ? <ChevronDown className={`w-5 h-5 ${iconColor}`} />
          : <ChevronRight className={`w-5 h-5 ${iconColor}`} />}
      </button>
      {open && <div className="px-5 pb-5">{children}</div>}
    </div>
  );
};

export default function Book10Ch4() {
  const [openBarrier, setOpenBarrier] = useState<number | null>(null);
  const [openSecret, setOpenSecret] = useState<number | null>(null);

  const barriers = [
    {
      icon: Clock,
      title: '時間的擠壓：行政與關懷吞噬了靈修',
      color: 'red',
      verse: '馬可福音 1:35「次日早晨，天未亮的時候，耶穌起來，到曠野地方去，在那裡禱告。」',
      problem: `牧師的日程表幾乎永遠是滿的。會議、探訪、輔導、講道預備、突發危機……每一件事都「很重要」，每一個人都「很急」。

在這樣的張力中，禱告往往成為第一個被犧牲的項目。不是牧師不想禱告，而是他們心裡總有一個聲音說：「還有那麼多事情等著我處理，禱告可以晚一點再說。」

一位牧師坦白說：「我每天早上計劃要花一小時禱告,但通常只禱告了十分鐘，就開始想到今天要做的事。然後我告訴自己：『我先把這些處理完,晚上再好好禱告。』但晚上我已經累癱了。」`,
      consequence: '結果是：牧師在服事神,卻沒有真正與神相遇。他們在為人禱告,卻沒有為自己的靈魂守望。這是一種屬靈的破產——忙碌到沒有時間支取能力的源頭。',
      solution: `**解決之道：重新定義「重要」與「緊急」**

真正重要的事往往不緊急（禱告、靈修、與神獨處）；而緊急的事往往不真正重要（許多行政瑣事、部分會議）。牧師需要學會說「不」——不是對人說不,而是對那些會吞噬他們靈魂的「次要之事」說不。

**實際操練：把禱告排進行事曆**

不要等「有空」才禱告——你永遠不會有空。把禱告當作「不可取消的約會」排進每日行程,就像你對待講道預備或重要會議一樣認真。`,
    },
    {
      icon: Users,
      title: '孤獨感：缺乏真實的屬靈同伴',
      color: 'purple',
      verse: '傳道書 4:9-10「兩個人總比一個人好……若是跌倒，這人可以扶起他的同伴；若是孤身跌倒，沒有別人扶起他來，這人就有禍了。」',
      problem: `牧師在人群中,卻往往是最孤單的人。他們被期待成為「屬靈的巨人」,所以不敢在會眾面前承認自己的軟弱、懷疑或掙扎。

許多牧師沒有可以坦誠相待的屬靈同伴。他們擔心：如果我告訴其他牧師我的禱告生活其實一團糟,他們會怎麼看我？如果我向長執承認我正在與罪掙扎,我會不會失去他們的信任？

這種孤獨感會嚴重削弱禱告生活。因為禱告不只是一個人與神的關係,也需要肢體的支持、問責與代禱。`,
      consequence: '沒有屬靈同伴的牧師,就像在屬靈戰場上獨自作戰的士兵——容易疲憊、容易受傷、容易退卻。',
      solution: `**解決之道：建立真實的問責關係**

每位牧師都需要至少1-2位「靈魂之友」——可以完全坦誠、彼此守望、互相代禱的屬靈同伴。這些人可以是其他牧師、成熟的長執,或屬靈導師。

**實際操練：每週固定的問責時間**

與你的靈魂之友約定每週或每兩週見面(或視訊),彼此分享真實的屬靈狀況。問彼此:「你這週的禱告生活如何？」「有沒有試探讓你掙扎？」「我可以為你禱告什麼？」`,
    },
    {
      icon: AlertTriangle,
      title: '罪疚感：禱告永遠不夠的內疚',
      color: 'amber',
      verse: '羅馬書 8:1「如今，那些在基督耶穌裡的就不定罪了。」',
      problem: `許多牧師的禱告生活被一種揮之不去的罪疚感籠罩：「我應該禱告更多。」「其他牧師一定比我更屬靈。」「如果我真的愛神,我應該每天禱告三小時。」

這種內疚往往來自錯誤的比較或不切實際的期待。他們聽到某位牧師每天凌晨四點起床禱告,就覺得自己的靈命「不夠格」;聽到某位宣教士一天禁食禱告多次,就覺得自己「太軟弱」。

諷刺的是:這種罪疚感不但沒有幫助他們更多禱告,反而讓禱告變成一種「壓力」而非「喜樂」。每次想到禱告,他們感受到的不是渴望,而是責備。`,
      consequence: '罪疚感驅動的禱告是不健康的,也是不持久的。它會讓禱告變成律法主義的重擔,而非恩典中的自由。',
      solution: `**解決之道：從恩典而非律法來看禱告**

禱告不是用來「賺取」神的喜悅,而是「享受」與神的關係。神愛你,不是因為你禱告得夠多,而是因為祂就是愛。

**實際操練：用感恩取代罪疚**

與其說「我今天又只禱告了十分鐘,我真糟糕」,不如說「感謝神,即使只有十分鐘,祂仍然與我同在。明天我要嘗試二十分鐘。」用漸進的成長取代完美主義的自責。`,
    },
    {
      icon: Target,
      title: '分心與疲憊：身心的枯竭影響專注',
      color: 'red',
      verse: '馬太福音 11:28「凡勞苦擔重擔的人可以到我這裡來，我就使你們得安息。」',
      problem: `牧師的身心負荷往往超出常人想像。他們聽了一整天的苦難故事、處理了無數的衝突、承擔了整個群體的屬靈重擔……當他們終於坐下來想要禱告時,腦袋裡塞滿了雜音。

一位牧師描述:「我跪下禱告,但我的腦子在想:『剛才那個會議我是不是說錯話了？』『明天的講道我還沒準備好。』『某某姊妹的癌症報告出來了嗎？』我努力想專心禱告,但思緒像是脫韁的野馬,根本抓不回來。」

更糟的是:許多牧師長期處於疲憊狀態。他們睡眠不足、運動不夠、飲食不正常。當身體累了,靈魂也會跟著疲軟——禱告變成一場與睡意的搏鬥。`,
      consequence: '分心與疲憊會讓禱告變成形式,而失去實質的與神相遇。牧師可能「禱告了」,但內心並沒有真正與神連結。',
      solution: `**解決之道：照顧好你的身體,才能守護你的靈魂**

屬靈操練不能脫離身體的健康。充足的睡眠、規律的運動、健康的飲食,都會直接影響你的禱告品質。

**實際操練：找到你的最佳禱告時段**

有人是「清晨型」,早上精神最好;有人是「夜晚型」,深夜最能與神相遇。不要強迫自己模仿別人的時間表,找到你自己精神最清醒、最不被打擾的時段來禱告。`,
    },
  ];

  const secrets = [
    {
      icon: Book,
      title: '祕訣一：把禱告視為「與神約會」,而非「屬靈任務」',
      color: 'purple',
      content: `許多牧師把禱告當作「工作清單上的一項」——每天必須完成的屬靈任務。但這種心態會讓禱告變得機械化、缺乏生命。

真正能持續的禱告生活,是把禱告視為「與最愛的人約會」。你不會把約會當作「任務」,你期待它、享受它、捨不得錯過它。`,
      practice: [
        '在禱告前,花一分鐘安靜自己,對神說:「主啊,我來了,因為我想念祢。」',
        '不要急著說話,先聆聽。想像神就坐在你對面,祂也想念你,祂想對你說話。',
        '把禱告當作對話,而非獨白。說幾句,停下來,聽神的回應(透過聖經、聖靈的感動、內心的平安)。',
      ],
      verse: '詩篇 27:8「你說：你們當尋求我的面。那時我心向你說：耶和華啊,你的面我正要尋求。」',
    },
    {
      icon: Clock,
      title: '祕訣二：建立「不可妥協」的禱告時間',
      color: 'indigo',
      content: `成功的牧師都有一個共同點:他們把禱告排進行事曆,像對待講道預備或重要會議一樣認真。

不是「等有空再禱告」,而是「這個時段就是禱告時段,其他事情不能侵占」。這需要果斷,也需要跟會眾溝通:「我每天早上8:00-9:00禱告,除非緊急狀況,這段時間我不接電話、不回訊息。」`,
      practice: [
        '在行事曆上標記每天的禱告時段,設定鬧鐘提醒自己。',
        '告訴同工與家人你的禱告時間,請他們尊重並保護這段時間。',
        '把手機設為勿擾模式,關掉電腦通知,創造一個不被打擾的空間。',
      ],
      verse: '但以理書 6:10「但以理知道這禁令蓋了玉璽,就到自己家裡(他樓上的窗戶開向耶路撒冷),一日三次,雙膝跪在他神面前,禱告感謝,與素常一樣。」',
      insight: '但以理即使在波斯帝國擔任高官、日理萬機,仍然「一日三次」定時禱告,「與素常一樣」——這就是「不可妥協」的禱告紀律。',
    },
    {
      icon: Users,
      title: '祕訣三：邀請代禱者成為你的「禱告盾牌」',
      color: 'green',
      content: `牧師不應該獨自禱告。你需要一群忠心的代禱者,為你的服事、家庭、靈命守望。

這些代禱者不是「替你禱告」,讓你可以不禱告;而是「與你一起禱告」,成為你的屬靈後盾。當你軟弱時,他們的禱告托住你;當你得勝時,他們的禱告與你一同歡呼。`,
      practice: [
        '邀請3-7位成熟、可信任的信徒,成為你的個人代禱團。',
        '每週或每兩週,以電子郵件或訊息分享你的代禱需要(可以很具體,但要有智慧選擇分享的內容)。',
        '定期感謝代禱者,分享代禱蒙應允的見證,讓他們知道自己的禱告真的有影響力。',
      ],
      verse: '出埃及記 17:11-12「摩西何時舉手,以色列人就得勝,何時垂手,亞瑪力人就得勝。但摩西的手發沉,他們就搬石頭來,放在他以下,他就坐在上面。亞倫與戶珥扶著他的手……他的手就穩住,直到日落的時候。」',
      insight: '摩西在山上舉手禱告,但他的手會疲乏。亞倫與戶珥扶住他的手,讓禱告得以持續。每位牧師都需要這樣的「扶手者」。',
    },
    {
      icon: Heart,
      title: '祕訣四：用寫禱告日記,讓禱告「看得見」',
      color: 'amber',
      content: `許多牧師的禱告生活缺乏「記錄」,所以也缺乏「見證」。他們禱告了,但幾個月後完全忘記自己求過什麼、神如何回應。

寫禱告日記有兩個強大的功能:
1. **幫助你專注**:當你寫下禱告內容,思緒會比較不容易飄走。
2. **建立信心**:回顧過去的禱告日記,你會驚訝地發現神已經回應了那麼多禱告——這會激勵你繼續禱告。`,
      practice: [
        '準備一本筆記本或開一個數位檔案,專門記錄禱告內容。',
        '每次禱告後,簡單寫下:日期、禱告事項、內心的感受、神的回應(如果有)。',
        '每隔一段時間(如每月或每季),翻閱過去的禱告日記,標記已蒙應允的禱告,為神的信實獻上感恩。',
      ],
      verse: '詩篇 103:2「我的心哪,你要稱頌耶和華!不可忘記他的一切恩惠!」',
      insight: '寫下來,就是在對抗「忘記」。禱告日記是你與神同行的見證紀錄,也是傳給下一代的屬靈遺產。',
    },
    {
      icon: Lightbulb,
      title: '祕訣五：多樣化你的禱告方式',
      color: 'indigo',
      content: `許多牧師的禱告陷入「單一模式」:永遠都是跪在書房裡、閉眼低頭、用同樣的句式禱告。久而久之,禱告變得枯燥乏味。

其實,聖經中的禱告充滿多樣性:有人大聲呼求(詩篇),有人安靜默想(瑪利亞),有人邊走邊禱告(耶穌),有人禁食禱告(以斯拉),有人用詩歌禱告(保羅與西拉)。

改變禱告的「形式」,可以重新點燃禱告的「熱情」。`,
      practice: [
        '**走禱**:在公園或安靜的街道邊走邊禱告,讓身體的律動幫助思緒流動。',
        '**唱禱**:用詩歌敬拜來開始禱告,讓音樂帶領你進入神的同在。',
        '**寫禱**:把禱告寫成一封信,寫給神,傾訴你的心事。',
        '**圖禱**:用圖畫或mind map來整理禱告事項,視覺化你的代求。',
        '**群禱**:與同工或代禱團一起禱告,在群體中經歷聖靈的同在。',
      ],
      verse: '詩篇 150:3-5「要用角聲讚美他,鼓瑟彈琴讚美他!擊鼓跳舞讚美他!用絲弦的樂器和簫的聲音讚美他!用大響的鈸讚美他!用高聲的鈸讚美他!」',
      insight: '如果敬拜可以如此多元,禱告也可以!不要被單一形式束縛,讓聖靈引導你用最適合當下的方式與神相遇。',
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Chapter Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-2xl p-6 mb-8 shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <Heart className="w-7 h-7 text-purple-200" />
          <span className="text-purple-200 font-medium" style={{ fontSize: '14px' }}>第四章</span>
        </div>
        <h1 className="font-bold text-white mb-3" style={{ fontSize: '24px' }}>
          牧師禱告生活的祕訣
        </h1>
        <p className="text-purple-200 leading-relaxed" style={{ fontSize: '15px' }}>
          在忙碌的服事中維持健康的禱告生活,是每位牧師最大的挑戰之一。
          這一章不談理想,而談實際——如何在現實的張力中,建立真實、持續、有能力的禱告生活。
        </p>
      </div>

      {/* Opening Core Verse */}
      <section className="bg-purple-50 border-l-4 border-purple-500 rounded-xl p-5 mb-6 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <Book className="w-5 h-5 text-purple-600" />
          <span className="font-bold text-purple-800" style={{ fontSize: '16px' }}>核心經文</span>
        </div>
        <blockquote className="text-purple-900 leading-relaxed italic" style={{ fontSize: '16px' }}>
          「你們要恆切禱告,在此警醒感恩。」
        </blockquote>
        <p className="text-purple-600 mt-2 font-medium" style={{ fontSize: '14px' }}>歌羅西書 4:2</p>
      </section>

      {/* Opening Story */}
      <Section title="開場故事:差點放棄禱告的牧師" icon={Star} defaultOpen accentColor="purple">
        <p className="text-gray-700 leading-relaxed mb-4" style={{ fontSize: '16px' }}>
          大衛(化名)牧會第八年,教會穩定成長,事工蒸蒸日上。但有一個祕密他從未對任何人說:他已經快一年沒有真正「禱告」了。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4" style={{ fontSize: '16px' }}>
          他每天還是在會議前禱告、在探訪時為人禱告、在主日崇拜帶領會眾禱告。但他自己與神獨處的時間?幾乎為零。
        </p>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
          <p className="text-purple-900 leading-relaxed italic" style={{ fontSize: '16px' }}>
            「我告訴自己:『牧會就是禱告,服事就是禱告。』但我心裡知道,這是自欺欺人。我在為別人禱告,卻沒有為自己的靈魂守望。我在教導會眾要禱告,但我自己的禱告生活已經破產。」
          </p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4" style={{ fontSize: '16px' }}>
          轉捩點發生在一次退修會。講員分享牧師禱告生活的重要性時,大衛突然眼淚決堤。他意識到:自己已經在服事的忙碌中,失去了與神的親密。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4" style={{ fontSize: '16px' }}>
          那天晚上,他跪在房間裡,向神坦承:「主啊,我不知道該怎麼重新開始。教我禱告。」
        </p>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-green-800 font-semibold mb-1" style={{ fontSize: '15px' }}>後來的故事:</p>
          <p className="text-green-700 leading-relaxed" style={{ fontSize: '15px' }}>
            大衛開始每天清晨六點起床禱告,一開始只能堅持十分鐘,但他不放棄。三個月後,他的禱告時間自然延長到四十分鐘。半年後,他告訴妻子:「我感覺自己重新活過來了。」
          </p>
        </div>
      </Section>

      {/* Core Challenge */}
      <Section title="核心挑戰:為何牧師的禱告生活如此艱難？" icon={AlertTriangle} defaultOpen accentColor="red">
        <p className="text-gray-700 leading-relaxed mb-4" style={{ fontSize: '16px' }}>
          諷刺的是:最需要禱告的人(牧師),往往最難維持穩定的禱告生活。為什麼？
        </p>
        <div className="grid grid-cols-1 gap-3 mb-4">
          {[
            { num: '1', text: '牧師的工作「看起來」就是屬靈的,所以容易自欺:「我整天都在做屬靈的事,這就是禱告了。」' },
            { num: '2', text: '牧師被期待「隨時準備好」為人禱告,卻沒有人問:「有誰為你禱告？」' },
            { num: '3', text: '牧師的時間被無數「緊急」的事佔滿,而禱告「不緊急」(卻最重要),所以最先被犧牲。' },
            { num: '4', text: '撒但知道:擊倒牧師的禱告生活,就能癱瘓整個教會的屬靈能力。' },
          ].map(item => (
            <div key={item.num} className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-lg p-3">
              <span className="bg-red-500 text-white text-sm font-bold rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center">{item.num}</span>
              <p className="text-red-900 leading-relaxed" style={{ fontSize: '15px' }}>{item.text}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed" style={{ fontSize: '16px' }}>
          這一章不是要增加牧師的罪疚感,而是要誠實面對現實,並提供實際可行的解決方案。
        </p>
      </Section>

      {/* 4 Major Barriers */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Shield className="w-6 h-6 text-amber-600" />
          四大攔阻:為何禱告如此困難？
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4" style={{ fontSize: '15px' }}>
          了解攔阻,才能找到突破。這四個攔阻,幾乎每位牧師都會遇到。
        </p>
        {barriers.map((barrier, idx) => {
          const Icon = barrier.icon;
          const isOpen = openBarrier === idx;
          const borderColor = barrier.color === 'red' ? 'border-red-400' : barrier.color === 'purple' ? 'border-purple-400' : 'border-amber-400';
          const bgColor = barrier.color === 'red' ? 'bg-red-50' : barrier.color === 'purple' ? 'bg-purple-50' : 'bg-amber-50';
          const iconColor = barrier.color === 'red' ? 'text-red-600' : barrier.color === 'purple' ? 'text-purple-600' : 'text-amber-600';
          const titleColor = barrier.color === 'red' ? 'text-red-900' : barrier.color === 'purple' ? 'text-purple-900' : 'text-amber-900';

          return (
            <div key={idx} className={`rounded-xl border-l-4 ${borderColor} ${bgColor} mb-3 shadow-sm overflow-hidden`}>
              <button
                className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                onClick={() => setOpenBarrier(isOpen ? null : idx)}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${iconColor} flex-shrink-0`} />
                  <span className={`font-bold ${titleColor}`} style={{ fontSize: '16px' }}>{barrier.title}</span>
                </div>
                {isOpen
                  ? <ChevronDown className={`w-5 h-5 ${iconColor} flex-shrink-0`} />
                  : <ChevronRight className={`w-5 h-5 ${iconColor} flex-shrink-0`} />}
              </button>
              {isOpen && (
                <div className="px-5 pb-5">
                  <div className="bg-white rounded-lg p-3 mb-4 border border-gray-100">
                    <p className="text-gray-600 italic" style={{ fontSize: '14px' }}>{barrier.verse}</p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2" style={{ fontSize: '15px' }}>問題所在:</h4>
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line" style={{ fontSize: '15px' }}>
                        {barrier.problem}
                      </p>
                    </div>
                    <div className="bg-white border-l-4 border-red-400 rounded-lg p-3">
                      <h4 className="font-bold text-red-800 mb-2" style={{ fontSize: '14px' }}>後果:</h4>
                      <p className="text-red-700 leading-relaxed" style={{ fontSize: '14px' }}>
                        {barrier.consequence}
                      </p>
                    </div>
                    <div className="bg-white border-l-4 border-green-400 rounded-lg p-3">
                      <h4 className="font-bold text-green-800 mb-2" style={{ fontSize: '14px' }}>突破之道:</h4>
                      <div className="text-green-700 leading-relaxed whitespace-pre-line" style={{ fontSize: '14px' }}>
                        {barrier.solution}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* 5 Secrets */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-indigo-600" />
          五個祕訣:建立持久的禱告生活
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4" style={{ fontSize: '15px' }}>
          這些不是理論,而是無數牧師實際驗證有效的方法。選擇適合你的,開始操練。
        </p>
        {secrets.map((secret, idx) => {
          const Icon = secret.icon;
          const isOpen = openSecret === idx;
          const borderColor = secret.color === 'purple' ? 'border-purple-400' : secret.color === 'green' ? 'border-green-400' : secret.color === 'amber' ? 'border-amber-400' : 'border-indigo-400';
          const bgColor = secret.color === 'purple' ? 'bg-purple-50' : secret.color === 'green' ? 'bg-green-50' : secret.color === 'amber' ? 'bg-amber-50' : 'bg-indigo-50';
          const iconColor = secret.color === 'purple' ? 'text-purple-600' : secret.color === 'green' ? 'text-green-600' : secret.color === 'amber' ? 'text-amber-600' : 'text-indigo-600';
          const titleColor = secret.color === 'purple' ? 'text-purple-900' : secret.color === 'green' ? 'text-green-900' : secret.color === 'amber' ? 'text-amber-900' : 'text-indigo-900';

          return (
            <div key={idx} className={`rounded-xl border-l-4 ${borderColor} ${bgColor} mb-3 shadow-sm overflow-hidden`}>
              <button
                className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                onClick={() => setOpenSecret(isOpen ? null : idx)}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${iconColor} flex-shrink-0`} />
                  <span className={`font-bold ${titleColor}`} style={{ fontSize: '16px' }}>{secret.title}</span>
                </div>
                {isOpen
                  ? <ChevronDown className={`w-5 h-5 ${iconColor} flex-shrink-0`} />
                  : <ChevronRight className={`w-5 h-5 ${iconColor} flex-shrink-0`} />}
              </button>
              {isOpen && (
                <div className="px-5 pb-5">
                  <div className="mb-4">
                    <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
                      {secret.content}
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 mb-4">
                    <h4 className="font-bold text-gray-800 mb-3" style={{ fontSize: '15px' }}>💡 實際操練:</h4>
                    <ul className="space-y-2">
                      {secret.practice.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                          <span className="text-gray-700" style={{ fontSize: '14px' }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white border-l-4 border-indigo-400 rounded-lg p-3">
                    <p className="text-gray-600 italic mb-2" style={{ fontSize: '14px' }}>{secret.verse}</p>
                    {secret.insight && (
                      <p className="text-indigo-700 leading-relaxed" style={{ fontSize: '14px' }}>
                        <strong>洞察:</strong> {secret.insight}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* Practical 30-Day Challenge */}
      <Section title="實踐挑戰:30天禱告重建計畫" icon={Target} accentColor="green">
        <p className="text-gray-700 leading-relaxed mb-4" style={{ fontSize: '16px' }}>
          知識不等於改變。這個30天計畫,幫助你把這一章的原則轉化為實際行動。
        </p>
        <div className="space-y-3">
          {[
            { week: '第1週', focus: '重新開始', action: '每天只禱告10分鐘,但不可間斷。不要野心太大,先建立習慣。' },
            { week: '第2週', focus: '擴大深度', action: '延長到20分鐘。嘗試寫禱告日記,記錄你的禱告內容。' },
            { week: '第3週', focus: '邀請同伴', action: '找1-2位代禱者,分享你的禱告生活重建旅程,請他們為你守望。' },
            { week: '第4週', focus: '多樣化', action: '嘗試不同的禱告方式(走禱、唱禱、寫禱),找出最適合你的形式。' },
          ].map((item, i) => (
            <div key={i} className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-green-600 text-white text-sm font-bold rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center">{i+1}</span>
                <div>
                  <h4 className="font-bold text-green-900" style={{ fontSize: '15px' }}>{item.week}: {item.focus}</h4>
                </div>
              </div>
              <p className="text-green-800 ml-11" style={{ fontSize: '14px' }}>{item.action}</p>
            </div>
          ))}
        </div>
        <div className="bg-white border-l-4 border-green-400 rounded-lg p-4 mt-4">
          <p className="text-green-800 font-semibold mb-2" style={{ fontSize: '14px' }}>💪 記住:</p>
          <p className="text-green-700 leading-relaxed" style={{ fontSize: '14px' }}>
            不是要一次做到完美,而是每天進步一點點。30天後,你會驚訝自己的改變。
          </p>
        </div>
      </Section>

      {/* Chapter Summary */}
      <section className="bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-xl shadow-md border-2 border-purple-600 mb-6">
        <div className="flex items-center mb-4 text-purple-900">
          <MessageCircle className="w-6 h-6 mr-2" />
          <h2 className="text-xl font-bold">本章總結</h2>
        </div>
        <div className="text-slate-800 space-y-3 leading-relaxed">
          <p>
            牧師的禱告生活,是整個教會屬靈能力的根基。但諷刺的是,最需要禱告的人,往往最難維持穩定的禱告生活。
          </p>
          <p>
            <strong className="text-purple-900">四大攔阻</strong>常常讓牧師的禱告破產:時間的擠壓、孤獨感、罪疚感、分心與疲憊。承認這些攔阻,不是軟弱,而是誠實面對現實的勇氣。
          </p>
          <p>
            <strong className="text-purple-900">五個祕訣</strong>提供了實際的突破之道:把禱告視為與神約會、建立不可妥協的禱告時間、邀請代禱者成為盾牌、用禱告日記建立見證、多樣化禱告方式保持新鮮感。
          </p>
          <p>
            這些不是理論,而是無數牧師實際驗證有效的方法。<strong className="text-purple-900">你不需要一次做到完美,但你需要今天開始行動。</strong>
          </p>
          <p>
            30天禱告重建計畫,幫助你把知識轉化為習慣。從每天10分鐘開始,不要小看這看似微小的一步——許多偉大的復興,都是從一個牧師重新跪下禱告開始的。
          </p>
        </div>
      </section>

      {/* Original Book Questions */}
      <section className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-purple-600 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <MessageCircle className="w-6 h-6 text-purple-600" />
          問題迴響（原書）
        </h2>
        <ol className="space-y-3 text-slate-700 list-decimal list-inside" style={{ fontSize: '15px' }}>
          <li>你目前的禱告生活如何？誠實評估:每天平均花多少時間在個人禱告上？</li>
          <li>本章提到的四大攔阻,哪一個最讓你有共鳴？為什麼？</li>
          <li>五個祕訣中,哪一個你最想立刻開始操練？具體來說,你打算怎麼做？</li>
          <li>如果你要建立「不可妥協」的禱告時間,你會選擇每天的哪個時段？需要排除哪些干擾？</li>
          <li>你願意邀請誰成為你的代禱者？他們具備什麼特質讓你信任他們？</li>
          <li>30天禱告重建計畫,你願意從今天開始嗎？如何請人問責你？</li>
        </ol>
      </section>

      {/* Navigation */}
      <div className="mt-4 text-center text-sm text-gray-400">
        <p>— 第四章完 —</p>
      </div>
    </div>
  );
}
