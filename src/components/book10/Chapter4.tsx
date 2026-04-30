import { useState } from 'react';
import {
  ChevronDown, ChevronRight, Heart, Clock, Book,
  Users, Target, Zap, Shield, CheckCircle, 
  AlertTriangle, MessageCircle, Lightbulb, Star, Search, TrendingUp
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

      {/* Theological Depth */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Book className="w-6 h-6 text-purple-600" />
          神學深度探討
        </h2>
        
        <Section title="一、禱告與工作的關係:馬大與馬利亞的平衡" icon={Heart} accentColor="purple">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            路加福音 10:38-42 記載馬大與馬利亞的故事。馬大「伺候的事多,心裡忙亂」,而馬利亞「在耶穌腳前坐著聽他的道」。耶穌溫柔但清楚地說:「馬利亞已經選擇那上好的福分。」
          </p>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-3">
            <p className="text-purple-900 font-semibold mb-2" style={{ fontSize: '14px' }}>關鍵洞察:</p>
            <p className="text-purple-800" style={{ fontSize: '14px' }}>
              牧師的試探,常常是成為「屬靈的馬大」:忙於服事神,卻沒有時間親近神。我們會用「為神做工」來取代「與神同在」,用「事工的果效」來證明自己的價值,而忘記:神要的首先是我們的心,不是我們的手。
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
            這不是說服事不重要,而是說:沒有禱告生活支撐的服事,最終會變成「血氣的工作」而非「聖靈的果子」。耶穌自己就是最好的榜樣:祂服事眾人,卻從不犧牲與父的親密(馬可福音 1:35)。
          </p>
        </Section>

        <Section title="二、安息日原則:神命定的停頓與恢復" icon={Clock} accentColor="indigo">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            十誡中的第四誡是「當記念安息日,守為聖日」(出埃及記 20:8)。神不只是「建議」我們休息,而是「命令」我們休息。為什麼？因為神深知:持續的工作會耗盡人的身心靈。
          </p>
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-3">
            <p className="text-indigo-900 font-semibold mb-2" style={{ fontSize: '14px' }}>對牧師的應用:</p>
            <p className="text-indigo-800" style={{ fontSize: '14px' }}>
              許多牧師覺得「每天都是工作日」——主日講道、週間探訪、隨時待命。但神的心意是:即使在最忙碌的服事中,也要有「停下來與神獨處」的時刻。這不是偷懶,而是順服神所設立的節奏。
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
            禱告就是牧師的「安息」——不是身體的休息,而是靈魂的恢復。在禱告中,我們放下所有的重擔,讓神來背負;我們不需要「解決問題」,只需要「尋求神的面」。
          </p>
        </Section>

        <Section title="三、荒漠經驗:摩西、以利亞與耶穌的退修" icon={Star} accentColor="amber">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            聖經中偉大的屬靈領袖,都有「曠野經驗」:
          </p>
          <ul className="space-y-2 mb-3">
            {[
              { name: '摩西', exp: '在曠野牧羊四十年,才在燃燒的荊棘中遇見神(出埃及記 3章)' },
              { name: '以利亞', exp: '在羅騰樹下疲憊絕望,但神在細微的聲音中對他說話(列王紀上 19章)' },
              { name: '耶穌', exp: '在曠野禁食禱告四十天,預備自己面對公開的服事(馬太福音 4章)' },
            ].map((item, i) => (
              <li key={i} className="bg-white rounded-lg p-3 border border-amber-100">
                <span className="font-bold text-amber-800">{item.name}:</span>
                <span className="text-gray-700" style={{ fontSize: '14px' }}> {item.exp}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
            曠野不是懲罰,而是預備。在孤獨、安靜、看似「無所事事」的環境中,神更新祂僕人的心。每位牧師都需要定期的「曠野時刻」——退修、獨處、與神相遇。
          </p>
        </Section>

        <Section title="四、禱告不是交易,而是關係" icon={Heart} accentColor="green">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            許多牧師的禱告陷入「功利主義」:「我禱告了,神就會讓我的服事有果效。」「我獻上時間,神就會回報我成功。」這樣的心態,把禱告變成了「屬靈交易」。
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-3">
            <p className="text-green-900 font-semibold mb-2" style={{ fontSize: '14px' }}>真正的禱告:</p>
            <p className="text-green-800" style={{ fontSize: '14px' }}>
              禱告的核心不是「我能從神那裡得到什麼」,而是「我渴望與神同在」。就像詩篇 27:4 說:「有一件事,我曾求耶和華,我仍要尋求:就是一生一世住在耶和華的殿中,瞻仰他的榮美,在他的殿裡求問。」
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
            當我們開始享受與神的關係本身(而非只求結果),禱告就不再是「任務」,而是「特權」;不再是「重擔」,而是「喜樂」。
          </p>
        </Section>
      </section>

      {/* Taiwan Context */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Users className="w-6 h-6 text-purple-600" />
          華人教會處境應用
        </h2>

        <Section title="情境一:「績效導向」的牧會文化" icon={TrendingUp} accentColor="red">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            台灣教會深受華人文化中「績效導向」的影響:牧師被期待「帶來增長」「辦好活動」「讓教會變大」。在這樣的壓力下,禱告常常被視為「沒有立即產出」的事,因此被犧牲。
          </p>
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            更糟的是:當教會沒有增長,牧師會懷疑自己「是不是不夠努力」「是不是禱告太少」,陷入罪疚感的循環。
          </p>
          <div className="bg-white border-l-4 border-red-400 rounded-lg p-4">
            <p className="text-red-800 font-semibold mb-2" style={{ fontSize: '14px' }}>突破之道:</p>
            <p className="text-red-700" style={{ fontSize: '14px' }}>
              重新定義「成功」:神量的標準不是「人數」,而是「忠心」。禱告不是為了「達成目標」,而是為了「與神對齊」。當我們的心對準神,神會按祂的時間表成就祂的工作。
            </p>
          </div>
        </Section>

        <Section title="情境二:「24小時待命」的牧師生活" icon={Clock} accentColor="amber">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            在台灣,牧師常被視為「全年無休的服務業」:半夜有人住院,牧師要去;會友遇到困難,隨時可以打電話;甚至有會友直接到牧師家按門鈴……牧師沒有「下班時間」,也沒有「私人空間」。
          </p>
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            在這樣的文化中,如果牧師說「我需要時間禱告,這段時間請勿打擾」,可能會被視為「不夠愛羊」「太自私」。
          </p>
          <div className="bg-white border-l-4 border-amber-400 rounded-lg p-4">
            <p className="text-amber-800 font-semibold mb-2" style={{ fontSize: '14px' }}>教會需要學習:</p>
            <p className="text-amber-700" style={{ fontSize: '14px' }}>
              尊重牧師的禱告時間,就是尊重神。長執與同工可以主動保護牧師的靈修時段,告訴會眾:「牧師每天早上8-9點禱告,除非緊急狀況,請勿打擾。」這不是自私,而是健康的界線。
            </p>
          </div>
        </Section>

        <Section title="情境三:「屬靈超人」的期待壓力" icon={Star} accentColor="purple">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            華人教會對牧師有一種隱性的期待:「牧師應該什麼都懂、什麼都會、永遠剛強。」在這種期待下,牧師不敢承認自己的軟弱、疲憊或靈性低谷。
          </p>
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            結果是:牧師戴著面具禱告,不敢在神面前真實地哭泣、質問、掙扎。他們的禱告變成「演出」,而非「真實的相遇」。
          </p>
          <div className="bg-white border-l-4 border-purple-400 rounded-lg p-4">
            <p className="text-purple-800 font-semibold mb-2" style={{ fontSize: '14px' }}>恢復真實:</p>
            <p className="text-purple-700" style={{ fontSize: '14px' }}>
              教會需要給牧師「軟弱的權利」。當牧師在講台上坦承「這週我的禱告生活很掙扎」,這不是失敗,而是真實。真實的見證,比完美的形象更能造就人。
            </p>
          </div>
        </Section>

        <Section title="情境四:「家庭祭壇」的理想與現實" icon={Users} accentColor="indigo">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            華人教會常強調「家庭祭壇」:牧師應該每天帶領全家一起禱告。這個理想很美好,但現實是:牧師的孩子可能正值叛逆期、配偶可能對信仰冷淡、或者工作時間根本無法配合。
          </p>
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            如果牧師無法「做到」家庭祭壇,他們會深深自責:「我連自己的家都牧養不好,怎麼牧養教會？」
          </p>
          <div className="bg-white border-l-4 border-indigo-400 rounded-lg p-4">
            <p className="text-indigo-800 font-semibold mb-2" style={{ fontSize: '14px' }}>恩典的眼光:</p>
            <p className="text-indigo-700" style={{ fontSize: '14px' }}>
              家庭祭壇不是「有或沒有」的二分法,而是「盡力而為」的過程。即使只是每週一次,或者只是睡前簡短的禱告,神都悅納。不要讓理想成為重擔,要讓恩典成為力量。
            </p>
          </div>
        </Section>

        <Section title="情境五:疫情後的「線上vs實體」張力" icon={Zap} accentColor="green">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            COVID-19 疫情改變了教會生態。有些會眾習慣了線上聚會,不願意回來實體;有些會眾堅持實體才是「真正的聚會」,批評線上的人「不夠委身」。牧師夾在中間,兩面不是人。
          </p>
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            在這樣的張力中,牧師的禱告生活也受到影響:他們忙著處理教會內部的衝突、嘗試滿足不同群體的需要,卻沒有時間安靜聆聽神的聲音。
          </p>
          <div className="bg-white border-l-4 border-green-400 rounded-lg p-4">
            <p className="text-green-800 font-semibold mb-2" style={{ fontSize: '14px' }}>在混亂中尋求神:</p>
            <p className="text-green-700" style={{ fontSize: '14px' }}>
              越是混亂的時代,越需要清晰的禱告生活。牧師需要問神:「在這個變動的時代,祢要我們教會如何前進？」而非只是試圖「讓所有人滿意」。禱告幫助我們聽見神的聲音,而非眾人的雜音。
            </p>
          </div>
        </Section>
      </section>

      {/* Four-Week Challenge */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Target className="w-6 h-6 text-purple-600" />
          四週禱告重建挑戰（進階版）
        </h2>
        
        {[
          {
            week: 1,
            title: '診斷你的禱告攔阻',
            mission: '誠實評估:本章提到的四大攔阻（時間擠壓、孤獨感、罪疚感、分心疲憊）,哪一個最影響你的禱告生活？這週每天花10分鐘禱告,但重點不是「禱告什麼」,而是「觀察自己的狀態」。',
            practice: '在禱告前,深呼吸三次,問自己:「我現在的身體感覺如何？我的心情如何？有什麼念頭在打擾我？」把這些誠實地告訴神。',
            journal: '每天記錄:今天禱告時遇到的主要攔阻是什麼？我如何面對它？神有什麼提醒？',
          },
          {
            week: 2,
            title: '實驗不同的禱告方式',
            mission: '每天嘗試一種新的禱告方式(走禱、唱禱、寫禱、圖禱、群禱)。不要堅持「一定要用某種方式」,而是讓聖靈引導你找到最適合當下的形式。',
            practice: '週一:走禱(邊走邊禱告)、週二:唱禱(用詩歌敬拜進入禱告)、週三:寫禱(寫一封信給神)、週四:圖禱(用圖像整理禱告事項)、週五:群禱(邀請家人或小組一起禱告)',
            journal: '哪一種方式讓你最能專注？哪一種讓你最能感受到神的同在？為什麼？',
          },
          {
            week: 3,
            title: '建立禱告日記習慣',
            mission: '準備一本筆記本或開一個數位檔案,開始記錄你的禱告。不需要寫得很完美,只要簡單記下:日期、禱告事項、內心感受、神的回應(如果有)。',
            practice: '每次禱告後,花3-5分鐘寫下重點。週末時,翻閱這週的禱告日記,為神的信實獻上感恩。',
            journal: '寫禱告日記對你的禱告生活有什麼影響？是否更專注了？是否更容易看見神的回應？',
          },
          {
            week: 4,
            title: '邀請代禱者與建立問責',
            mission: '找1-2位靈魂之友,告訴他們你正在重建禱告生活,請他們每週問你:「這週的禱告生活如何？」同時,為他們的禱告生活守望。',
            practice: '每週固定時間(如週三晚上)與代禱夥伴見面或視訊,彼此分享禱告的掙扎與突破,一起為彼此守望。',
            journal: '30天挑戰結束了。你的禱告生活有什麼改變？你會繼續哪些操練？你最大的收穫是什麼？',
          },
        ].map((item, i) => (
          <div key={i} className="bg-purple-50 border-l-4 border-purple-500 rounded-xl p-5 mb-4 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-purple-600 text-white text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center">{item.week}</span>
              <h3 className="font-bold text-purple-900" style={{ fontSize: '17px' }}>第{item.week}週:{item.title}</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4">
                <p className="text-purple-800 font-semibold mb-2" style={{ fontSize: '14px' }}>🎯 本週任務</p>
                <p className="text-gray-700" style={{ fontSize: '14px' }}>{item.mission}</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-indigo-800 font-semibold mb-2" style={{ fontSize: '14px' }}>💡 具體操練</p>
                <p className="text-gray-700" style={{ fontSize: '14px' }}>{item.practice}</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-green-800 font-semibold mb-2" style={{ fontSize: '14px' }}>📝 靈修日誌提示</p>
                <p className="text-gray-700 italic" style={{ fontSize: '14px' }}>{item.journal}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Group Discussion */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Users className="w-6 h-6 text-purple-600" />
          小組討論問題
        </h2>
        
        <div className="space-y-4">
          <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-5">
            <h3 className="font-bold text-purple-900 mb-3" style={{ fontSize: '16px' }}>🔍 自我省察類</h3>
            <ol className="space-y-2 list-decimal list-inside text-gray-700" style={{ fontSize: '15px' }}>
              <li>誠實評估:你現在的禱告生活,在1-10分的量表上是幾分？為什麼？</li>
              <li>四大攔阻中,哪一個最常讓你的禱告破產？你嘗試過什麼方法突破嗎？</li>
              <li>你是否曾經把禱告當作「任務」而非「約會」？這兩種心態對你的禱告有什麼不同影響？</li>
            </ol>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5">
            <h3 className="font-bold text-blue-900 mb-3" style={{ fontSize: '16px' }}>💭 深度思考類</h3>
            <ol className="space-y-2 list-decimal list-inside text-gray-700" style={{ fontSize: '15px' }}>
              <li>為什麼禱告對牧師來說如此困難？如果禱告這麼重要,為何會是「最先被犧牲」的項目？</li>
              <li>五個祕訣中,哪一個對你來說最「顛覆」或最「實用」？為什麼？</li>
              <li>你認為「禱告日記」真的有用嗎？為什麼很多人開始寫,卻無法堅持下去？</li>
            </ol>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-5">
            <h3 className="font-bold text-green-900 mb-3" style={{ fontSize: '16px' }}>🎯 行動應用類</h3>
            <ol className="space-y-2 list-decimal list-inside text-gray-700" style={{ fontSize: '15px' }}>
              <li>如果你要建立「不可妥協」的禱告時間,你會選擇每天的哪個時段？需要排除哪些干擾？</li>
              <li>你願意參加30天禱告重建挑戰嗎？你需要誰來陪伴你、問責你？</li>
              <li>小組可以如何一起建立禱告文化？(分享彼此的禱告見證、群體守望、代禱網絡……)</li>
            </ol>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-5">
            <h3 className="font-bold text-amber-900 mb-3" style={{ fontSize: '16px' }}>🙏 為牧師代禱類</h3>
            <ol className="space-y-2 list-decimal list-inside text-gray-700" style={{ fontSize: '15px' }}>
              <li>你知道牧師的禱告生活狀況嗎？你是否曾問過他:「我可以如何為您的禱告生活守望？」</li>
              <li>牧師可能面對的四大攔阻,哪一個你認為對他影響最大？你可以如何用行動(而非只是禱告)幫助他突破？</li>
              <li>如果我們小組要成為牧師的「禱告盾牌」,具體可以做什麼？(每週為他禱告、保護他的靈修時段、給他退修的時間……)</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Deep Reflection */}
      <section className="mb-6">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 shadow-xl">
          <h2 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-purple-400" />
            深度反思與行動指南
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Reflection */}
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
              <h3 className="font-bold text-purple-300 mb-4 flex items-center" style={{ fontSize: '18px' }}>
                <Search className="w-5 h-5 mr-2 text-purple-400" /> 深度反思
              </h3>
              <ul className="space-y-4 text-slate-300">
                {[
                  '如果你的禱告生活在未來一年都沒有改變,你的服事會有什麼不同？你的生命會有什麼代價？',
                  '想像神對你說:「你為我做了那麼多事,但我更想要的是你的心。」這句話觸動你嗎？',
                  '你是否曾經用「太忙」來合理化自己不禱告？但你有沒有「太忙」到不吃飯、不睡覺？',
                  '如果禱告真的是「與神約會」,你會如何為這個約會做準備？你會穿什麼、帶什麼、說什麼？',
                  '30天後,如果你的禱告生活真的改變了,你的服事、家庭、心靈會有什麼不同？這個「不同」值得你今天開始嗎？',
                ].map((q, i) => (
                  <li key={i} className="flex items-start" style={{ fontSize: '15px' }}>
                    <span className="text-purple-400 mr-2 font-bold">{i+1}.</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action */}
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
              <h3 className="font-bold text-green-300 mb-4 flex items-center" style={{ fontSize: '18px' }}>
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" /> 具體行動方案
              </h3>
              <ul className="space-y-4 text-slate-300">
                {[
                  '今天就在行事曆上標記每天的禱告時段,設定鬧鐘,像對待講道預備一樣認真對待。',
                  '找一位靈魂之友,告訴他:「我想重建禱告生活,請你每週問我進度。」',
                  '準備一本禱告日記(實體或數位),從今天開始記錄你與神的對話。',
                  '實驗一種新的禱告方式(走禱、唱禱、寫禱),看看哪種最適合你。',
                  '告訴家人或同工你的禱告時段,請他們保護這段時間不被打擾。',
                  '邀請3-5位信徒成為你的代禱團,每週或每兩週分享你的代禱需要。',
                  '參加30天禱告重建挑戰,每天進步一點點,不求完美,只求持續。',
                ].map((a, i) => (
                  <li key={i} className="flex items-start" style={{ fontSize: '15px' }}>
                    <span className="text-green-400 mr-2 font-bold">{i+1}.</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-purple-900/30 border border-purple-500/30 rounded-xl p-5">
            <p className="text-purple-200 leading-relaxed italic text-center" style={{ fontSize: '16px' }}>
              「不是要一次做到完美,而是每天進步一點點。<br />
              30天後,你會驚訝自己的改變。<br />
              問題是:你願意從今天開始嗎？」
            </p>
          </div>
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
