import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, TrendingDown, Zap, Target, Compass, Heart, Sparkles, Shield, BookOpen, ChevronDown, ChevronUp, Brain, MessageCircle, Gift, AlertTriangle, Clock, Users, CheckCircle2 } from 'lucide-react';

export default function Chapter2() {
  const [openReward, setOpenReward] = useState<number | null>(null);
  const [openCost, setOpenCost] = useState<number | null>(null);
  const [openTheology, setOpenTheology] = useState<number | null>(null);
  const [openChallenge, setOpenChallenge] = useState<number | null>(null);

  const rewards = [
    {
      title: "1. 激勵人心的活動",
      icon: <Zap className="w-6 h-6" />,
      color: "amber",
      summary: "傳福音不是義務，而是令人興奮的信心冒險。",
      details: "你可能一直以為跟人傳講信仰是一項重要的義務，一件總是會讓你覺得自己做得不夠而有罪惡感的事。但真正全心投入後你會發現，把基督傳給人竟能讓你跟神的關係產生意想不到的興奮。神樂於以外人無法得知的個人指示差遣代言人從事「秘密偵察任務」。祂喜歡把我們帶出舒適區，挑戰我們在推進祂國度大業的前線上冒險。",
      stories: [
        "健身中心之行本來不過是五十五分鐘的健身活動，跟印度籍回教徒朋友傾心吐意之後，神把尋常的健身活動變成非凡的信心探險。",
        "一位朋友在修車廠等候室複習教會研習會資料，陌生人問「你在看甚麼？」——一瞬間，極其無聊的等待變成千載難逢的機會。",
        "一位商用飛機駕駛員，在清晨四點半、兩萬八千呎高空的727駕駛艙裏，跟副駕駛展開屬靈談話，最後帶領他作了委身基督的決志禱告——雖然他們張著眼禱告！"
      ],
      keyQuote: "你的屬靈生命缺少行動嗎？你希望看到神把平凡的例行事務變得超凡絕倫嗎？神正等著這樣做！",
      page: "P27-29"
    },
    {
      title: "2. 目的感",
      icon: <Compass className="w-6 h-6" />,
      color: "blue",
      summary: "日常生活有了前所未有的目的，每個場合都可能是神聖的旅程。",
      details: "當你開始愈來愈經驗到神能從日常生活中創造出奇妙的經歷，你會發現自己面對日常工作時有了前所未有的目的感，開始預期祂隨時會以一個扭轉乾坤的機會叫你驚喜無比。在你心裏，前往健身中心、修車廠或工作場所的行程，都有可能變成通向神聖領域的旅程。你會問自己：「在這種情況下，神到底會怎麼做？」",
      stories: [
        "教會發行了自己的雜誌，派出編輯羅伯‧威金斯和攝影記者賴瑞‧凱瑟前往海地報導一家教會正在幫助的醫院。那一整週他們都按計畫進行一切活動——直到最後他們來到機場，上了要載他們回家的六人座包機。",
        "突然有兩名政變失敗的軍人跳過機場的安全藩籬，以機關槍和炸彈攻擊這架小飛機。他們強行登機後以一口破英語要求機長立刻飛往邁阿密。這是一個危險的情況，很可能以災難結束。",
        "但是羅伯和賴瑞卻把這場危機視為有神的美意在其中的機會。飛機起飛後，他們問起這兩個驚恐的人的家庭，藉以緩和他們的緊張。不知不覺地，這兩人把武器放到一邊，跟他們一起喝可樂，談天說地，甚至一起開懷大笑。",
        "這還不算驚人——更了不起的是，飛行結束前他們已經在紙上畫出福音說明圖，向他們解釋神的愛和祂如何透過基督赦免人。對羅伯和賴瑞來說，到底這些人是誰，做過甚麼樣的事，完全不重要。「神仍然看重他們，而且他們需要知道這一點。」這個意念使原本既困難又危險的情況有了意義。"
      ],
      keyQuote: "知道我們每天所做的事都在神的大計畫裏有意義，會讓人有一種非常不可思議的感覺。",
      page: "P29-30"
    },
    {
      title: "3. 深層滿足",
      icon: <Heart className="w-6 h-6" />,
      color: "rose",
      summary: "沒有任何事比得上有效推動神對人類的救贖目的所帶來的滿足感。",
      details: "當我們開始投入於拯救未信者，在日常活動裏尋找目的，我們就會有一種超越日常人類經驗的滿足感。彼得後書三章9節：「主……寬容你們，不願有一人沉淪，乃願人人都悔改。」耶穌在井邊與撒馬利亞婦人談話後，門徒拿食物給祂時，祂回答：「我的食物就是遵行差我來者的旨意，做成祂的工。」祂稱這項活動為祂的食物——因為祂有一種很深的滿足感。",
      stories: [
        "本書另一位作者馬可‧米道堡曾經想向一位五十七歲的猶太人傳講基督。你可以想像，他得花多少時間和精力與這樣一位多年浸潤在猶太信仰和文化裏的人談話。",
        "但是當他終於和這人一起禱告，聽到這人接受耶穌為救主時，你可以相信，他的感受有如在大聯盟中得了冠軍。",
        "一年後他們再碰面，一起慶祝這人一歲的屬靈生日，馬可簡直樂到不行——因為現在這位猶太人正在念神學院準備全時間服事！從一位五十七歲、根深柢固的猶太教徒，到神學院的學生——這就是神改變生命的大能。"
      ],
      keyQuote: "耶穌說：「我的食物就是遵行差我來者的旨意。」——傳福音的滿足感可以餵飽靈魂。",
      page: "P30-31"
    },
    {
      title: "4. 屬靈成長",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "emerald",
      summary: "傳福音是醫治「屬靈停滯」最有效的藥方——讀經、禱告、敬拜、品格全面復甦。",
      details: "這是有感染力的基督信仰最重要但常被忽略的一點。許多靈裏抑鬱的基督徒，查經成了瑣事，禱告更是枯燥的例行公事，上教會只是一件「他們會做的事」。但當這些了無生氣的信徒掙脫屬靈真空，遇上信仰的追尋者，不可思議的事就發生了。",
      stories: [
        "讀經復甦：過去偶爾從書架上抽出聖經讀讀，現在覺得必須讀——甚至把有些部分背起來——因為在下回的屬靈交鋒時刻，要有東西可以講。",
        "禱告更新：陳腐的老套禱告詞不再，變成為使走向滅亡之朋友能得救所發的激動祈求。禱告最難的部分在於開始——關懷未信者的朋友能啟動我們的禱告。",
        "敬拜深化：面對一位滿有恩典、滿有忍耐地把愛伸向罪人的神，你怎麼可能不獻上感恩？不知不覺中你就發現你又能真心敬拜了。",
        "品格提升：教會有個人一直改不掉一擲千金的賭馬惡習。經過多次戒賭又再犯的挫折循環後，他甚至不得不作出這輩子都要與此惡習共存的結論。後來有位同工挑戰他：「不是因為這是最大的罪，而是這會攔阻你影響朋友歸向基督。」有了這新尋得的動機以後，這人一舉放棄賭馬的惡習——有意思的是，現在他是教會最有感染力的基督徒之一！",
        "外在監督：當你在周圍人面前表明自己是認真的基督徒，他們立刻會本能地監視你的生命。這提供了很有效的監督系統。"
      ],
      keyQuote: "提升我們接觸別人的努力竟然還能促成個人成長，這不是很奇妙嗎？",
      page: "P32-34"
    },
    {
      title: "5. 屬靈信心增強",
      icon: <Shield className="w-6 h-6" />,
      color: "indigo",
      summary: "跟信仰觀點不同的人對話，會迫使你搞清楚自己相信什麼——並強化你的信心。",
      details: "努力讓別人接受你的信仰能大大地強化你對自己信仰的信心。這跟期末考很像——預備期末考會迫使你運用記憶力、改善讀書習慣。常常正是為了顯給別人看所做的預備，使得我們自己第一次把事情真正搞清楚。當我們要跟懷疑論者、其他宗教信徒說明我們的信仰時，我們就會自動增加自己的知識。當我們面對異議仍能成功地把持自己的信仰，屬靈方面的肯定感就會增加。",
      stories: [],
      keyQuote: "一旦你的屬靈信心向上攀升，你實在不知道神會使用你去接觸怎樣的人！",
      page: "P34-35"
    },
    {
      title: "6. 經得起考驗的投資",
      icon: <Gift className="w-6 h-6" />,
      color: "violet",
      summary: "地上的一切都會焚毀，唯有投資在人身上的才能存到永恆。",
      details: "耶穌說：「不要為自己積攢財寶在地上……只要積攢財寶在天上。」（太六19-20）彼得用了更強的措詞：「但主的日子要像賊來到一樣。那日，天必大有響聲廢去，有形質的都要被烈火銷化，地和其上的物都要燒盡了。這一切既然都要如此銷化，你們為人該當怎樣聖潔，怎樣敬虔？」（彼後三10-11）作者回憶多年前第一次讀到這段經文時的感受：「那時我是個散漫的基督徒，熱中於追逐一些小東西和世俗的享樂。我記得我甚至想：『太棒了！在天上我也可以擁有這一切！』這段經文卻讓我完全洩了氣，因為它的真理開始轉變我的價值觀。」",
      stories: [
        "有位朋友作了一個有趣的建議——他說作者應該拿一堆寫著「即將焚毀」的紅色貼紙貼在他擁有的每一件東西上！這可以不斷提醒他：每輛摩托車、每艘船、每樣家具——所有他擁有或想要的東西——都會朽壞，被竊，最終甚至要焚毀在烈火之中。",
        "「好個未來啊！在這些無法久長的事物上投資許多時間和精力，是多大的錯誤！」雖然作者從沒有真的把貼紙貼在東西上，但感謝神在多年前就幫助他了解這重要的真理。它促使他決定：「我的人生要單單以真的能持久的東西為核心：神，祂的國度，像你我這樣的人，以及我們要為祂接觸的人。惟有這些配得我們全心的熱情。」"
      ],
      keyQuote: "把時間和精力投資在人身上，將來許多人會在天上的永恆裏感謝你——還有比這更好的投資嗎？",
      page: "P35-36"
    },
    {
      title: "7. 作神代言人的榮耀",
      icon: <Sparkles className="w-6 h-6" />,
      color: "amber",
      summary: "全宇宙的主宰竟然選中你——軟弱的你——作祂的代言人。",
      details: "使徒行傳一章8節：「但聖靈降臨在你們身上，你們就必得著能力……直到地極，作我的見證。」你沒看到門徒轉身確定祂到底在跟誰講話嗎？「誰？我們嗎？主啊，祢一定是在開玩笑！」到今天，這件事叫人驚訝的程度仍不減當年——神實在選中我們作祂的代言人。祂給了我們代表祂說話的最高榮譽。",
      stories: [
        "作者在服事早期做高中生的學生工作。某個週三晚上規劃了大型佈道活動，所有會友都大力邀請朋友來聽福音，特別是沒聽過的人。夜晚來臨，全場坐滿。",
        "差不多是作者該上場的時候，他記得自己有一種高度的「不配感」：「我是何許人啊？怎麼能跟這些孩子講話呢？我自己都還不大清楚呢！我能跟他們講些甚麼有意義的東西呢？」",
        "儘管滿心疑慮、雙膝發抖，他還是站起身來，盡有限的能力跟學生說明神看重他們。他告訴他們，相信神愛他們還不夠，他們需要來到基督面前接受祂的赦免和帶領。",
        "當他邀請他們踏出那一步時，他目瞪口呆地看到好幾百名學生站起來！事實上他驚訝到以為他們恐怕沒聽懂——他請他們坐下，要把福音以及委身的意義講清楚一點。後來竟然有更多人站起來！",
        "事後他走到聚會的建築後面，靠著牆，為著神竟願使用像他這樣一個人心中充滿感恩與驚嘆。「在我們需要禱告和預備時，成敗的問題其實是祂的事情；祂喜歡解決的問題，以便祂能透過我們做出非凡的事，顯出祂的大能。」"
      ],
      keyQuote: "祂也可以使用像你這樣的人。也許不見得是在高中生面前，而是在一道籬笆、一張書桌、餐廳裏的一張餐桌旁邊。",
      page: "P36-38"
    }
  ];

  const costs = [
    {
      title: "1. 時間和精力",
      icon: <Clock className="w-5 h-5" />,
      desc: "與對方建立關係、顯出關心和同情、持續禱告、一再解釋福音信息、耐心等候他們「想一想」、努力應付充滿挑戰的問題——而最後他們可能還是會拒絕基督。",
      counter: "把時間和精力投資在人身上，將來許多人會在天上的永恆裏感謝你——還有比這更好的投資嗎？甚麼投資有這麼高的報酬？",
      page: "P39"
    },
    {
      title: "2. 閱讀與學習",
      icon: <BookOpen className="w-5 h-5" />,
      desc: "得去上查經課，讀一些書，費點力氣才能懂得自己所講的。",
      counter: "你反正也想多懂一點你所信的，對不對？而且我們既已把查經放在報酬這邊，如果又把它放在代價那邊，恐怕也不大公平吧！",
      page: "P39"
    },
    {
      title: "3. 金錢",
      icon: <Heart className="w-5 h-5" />,
      desc: "吃午餐、打長途電話（有位朋友打了三個半小時的長途電話，後來對方信了主）、買書、參加特會，有時還要為供應別人實際的需要花上一大筆錢。",
      counter: "把所有花費加起來，總額還算挺低的。耶穌說：「只要積攢財寶在天上。因為你的財寶在哪裏，你的心也在那裏。」我想不出比這更安全的投資。",
      page: "P39-40"
    },
    {
      title: "4. 受窘、被拒絕、被迫害的風險",
      icon: <AlertTriangle className="w-5 h-5" />,
      desc: "朋友的取笑、受排擠於某些社交聚會之外的孤獨感、因為是基督徒而受歧視或惡意騷擾。",
      counter: "「人若因我辱罵你們，逼迫你們……你們就有福了！應當歡喜快樂，因為你們在天上的賞賜是大的。」（太五11-12）「我們行善，不可喪志；若不灰心，到了時候就要收成。」（加六9）",
      page: "P40"
    },
    {
      title: "5. 生活變得複雜",
      icon: <Compass className="w-5 h-5" />,
      desc: "跟對方生命所關切的事糾纏在一起，不再能獨立行事，為原已超載的行程再添瑣事。",
      counter: "結婚不也一樣？生孩子也是。問問任何剛作母親的人，後不後悔生下這孩子？「你有毛病啊？生下這孩子是我這一生最精彩的事了！」——大多數重要的事都會使我們的生活變得更複雜，但值得嗎？當然值得！",
      page: "P41"
    }
  ];

  const theologyTopics = [
    {
      title: "計算代價的聖經原則（路加福音14章）",
      content: "耶穌在路加福音十四章用了兩個例子說明「本益分析」的重要：一個蓋樓房的人必須先計算花費（路十四28-30），一個打仗的王必須先估量兵力（路十四31-32）。但耶穌的重點不是叫我們「算算看划不划算再決定要不要跟隨」，而是要我們誠實面對代價——然後發現，跟隨祂的回報遠遠超過任何代價。保羅在腓立比書三章7-8節作了最好的示範：「只是我先前以為與我有益的，我現在因基督都當作有損的。不但如此，我也將萬事當作有損的，因我以認識我主基督耶穌為至寶。」",
      scriptures: ["路加福音14:28-30「你們哪一個要蓋一座樓，不先坐下算計花費？」", "路加福音14:33「你們無論甚麼人，若不撇下一切所有的，就不能作我的門徒。」", "腓立比書3:7-8「我也將萬事當作有損的，因我以認識我主基督耶穌為至寶。」", "羅馬書8:18「我想，現在的苦楚若比起將來要顯於我們的榮耀就不足介意了。」"],
      reflection: "如果保羅可以把過去所有引以為傲的「資產」都當作「有損的」，我們有什麼是不能為了福音而放手的？"
    },
    {
      title: "「食物」的神學：服事的滿足超越肉體需要",
      content: "約翰福音四章34節，耶穌說「我的食物就是遵行差我來者的旨意」。這不是修辭上的誇張——耶穌確實在說，完成神的使命帶來的滿足比物質食物更能餵飽祂。這呼應了申命記八章3節：「人活著不是單靠食物，乃是靠耶和華口裏所出的一切話。」當我們參與神的救贖工作，我們經歷到的不只是「做了好事的快感」，而是一種深層的、靈性的飽足——因為我們正在做我們被造的目的。",
      scriptures: ["約翰福音4:34「我的食物就是遵行差我來者的旨意，做成祂的工。」", "申命記8:3「人活著不是單靠食物，乃是靠耶和華口裏所出的一切話。」", "約翰福音4:35「舉目向田觀看，莊稼已經熟了，可以收割了。」", "詩篇37:4「又要以耶和華為樂，祂就將你心裏所求的賜給你。」"],
      reflection: "我是否曾經在服事或傳福音後，感受到一種超越物質享受的深層滿足？那種感受是什麼？"
    },
    {
      title: "永恆投資 vs. 地上財寶：價值觀的翻轉",
      content: "馬太福音六章19-21節和彼得後書三章10-11節構成了一組強烈的對比：地上的一切都會朽壞、焚毀，唯有天上的財寶才能存到永恆。作者的朋友建議用「即將焚毀」的紅色貼紙貼在一切所有物上——這個生動的畫面提醒我們：我們花最多時間追求的東西，往往是最不持久的。C.S.路易斯說過：「如果我們發現自己有一個渴望是這世界上沒有任何東西可以滿足的，最合理的解釋是——我們是為另一個世界而造的。」投資在人的靈魂上，就是投資在永恆上。",
      scriptures: ["馬太福音6:19-21「不要為自己積攢財寶在地上……只要積攢財寶在天上。」", "彼得後書3:10-11「那日，天必大有響聲廢去，有形質的都要被烈火銷化。」", "哥林多後書4:18「我們不是顧念所見的，乃是顧念所不見的；因為所見的是暫時的，所不見的是永遠的。」", "提摩太前書6:17-19「囑咐那些今世富足的人……要囑咐他們行善，在好事上富足，甘心施捨，樂意供給人，為自己積成美好的根基，預備將來，叫他們持定那真正的生命。」"],
      reflection: "如果今天有人在你所有的物品上貼「即將焚毀」的貼紙，你會最心疼哪一樣？這是否暴露了你心中真正看重的東西？"
    },
    {
      title: "不配感與神的揀選：軟弱中的能力",
      content: "作者在高中佈道會前的「不配感」是每個服事者都會經歷的。但聖經一再顯示，神刻意揀選「不配的人」來成就祂的工作。摩西說「我拙口笨舌」（出四10），耶利米說「我是年幼的」（耶一6），保羅自稱「使徒中最小的」（林前十五9）。哥林多後書十二章9節，神對保羅說：「我的恩典夠你用的，因為我的能力是在人的軟弱上顯得完全。」不配感不是阻礙，反而是讓神能力彰顯的管道。",
      scriptures: ["哥林多後書12:9「我的能力是在人的軟弱上顯得完全。」", "哥林多前書1:27「神卻揀選了世上愚拙的，叫有智慧的羞愧。」", "出埃及記4:10-12「我是拙口笨舌的……我必賜你口才，指教你所當說的話。」", "以賽亞書6:8「我又聽見主的聲音說：我可以差遣誰呢？誰肯為我們去呢？我說：我在這裡，請差遣我！」"],
      reflection: "你是否曾因為覺得自己「不夠好」而不敢為主開口？神揀選的標準跟你想的一樣嗎？"
    }
  ];

  const taiwanExamples = [
    {
      title: "🚌 通勤路上的神聖時刻",
      scenario: "每天上下班通勤，擠在捷運或公車上，大家都低頭滑手機。你覺得這段時間只是「浪費」。但如果你開始問：「神啊，今天祢要我看見誰？」，這段無聊的通勤可能變成禱告的時刻、甚至與人對話的機會。",
      challenge: "這週通勤時，不要一上車就滑手機。觀察周圍的人，為他們默禱。如果有自然的機會，跟身旁的人微笑或交談。",
      insight: "書中的飛機駕駛員在例行飛行中帶領副駕駛信主——神可以把任何「例行公事」變成「神聖時刻」。"
    },
    {
      title: "📊 屬靈停滯的華人基督徒",
      scenario: "在華人教會中，很多信主多年的弟兄姊妹陷入了「屬靈停滯」：主日聽道像例行公事、小組聚會只是社交、禱告會人數稀少。他們不是不愛主，而是失去了起初的熱情和動力。",
      challenge: "如果你覺得自己正在「屬靈停滯」中，試著這週主動關心一位未信主的朋友或同事。不需要「傳福音」，只需要真誠地關心他的生活。觀察這對你自己的屬靈生命有什麼影響。",
      insight: "書中說：「當這些了無生氣的信徒掙脫屬靈真空，遇上信仰的追尋者，不可思議的事就發生了。」傳福音是醫治屬靈停滯最有效的藥方。"
    },
    {
      title: "💰 「即將焚毀」的貼紙",
      scenario: "台灣社會普遍重視物質成就：買房、買車、存款、投資。基督徒也不例外——我們花大量時間精力追求這些「即將焚毀」的東西，卻很少把同等的熱情投入在永恆的事上。",
      challenge: "看看你的手機螢幕使用時間報告——你花最多時間在什麼App上？如果用同樣的時間來為人禱告或關心人，會有什麼不同？",
      insight: "作者的朋友建議用「即將焚毀」的紅色貼紙貼在所有物品上。真正能持久的只有：神、祂的國度、人，以及我們為祂接觸的人。"
    },
    {
      title: "😰 「不配感」vs. 順服",
      scenario: "華人文化中，謙虛被視為美德，但有時候「謙虛」變成了逃避服事的藉口：「我不會講話」「我聖經不夠熟」「讓牧師來就好」。我們用「不配」來合理化自己的不行動。",
      challenge: "下次當你感覺到「我不配、我不行」時，把這個感覺帶到神面前禱告：「主啊，我確實不配、不行，但祢的能力在我的軟弱上顯得完全。如果祢要用我，我願意。」然後勇敢地踏出那一步。",
      insight: "作者在高中佈道會上「滿心疑慮、雙膝發抖」，但他還是站起身來——結果好幾百名學生站起來信主。神不需要完美的器皿，只需要願意的心。"
    },
    {
      title: "⛪ 教會的「顧客革命」",
      scenario: "我們的教會活動是為誰設計的？主日崇拜的歌曲選擇、講道內容、小組活動——是只考慮「老會友」的喜好，還是也考慮到「第一次來的人」的感受？教會的「金字塔」是否需要翻轉？",
      challenge: "下次參加主日崇拜時，想像自己是一個從未來過教會的人。從停車、進門、找座位到聽道的整個過程，有沒有什麼環節會讓新人感到困惑或不被歡迎？把你的觀察跟小組分享。",
      insight: "書中說教會容易「往內生長」。如果我們的教會活動全都是為了「自己人」的需要而設計，那些「外面的人」要怎麼進來？"
    }
  ];

  const weeklyChallenge = [
    {
      week: "第一週",
      title: "本益分析操練",
      mission: "找一張紙，畫一條線分成左右兩邊。左邊寫下你目前不願意傳福音的所有理由（代價）；右邊寫下如果你積極傳福音可能帶來的所有好處（報酬）。誠實地比較兩邊。然後在禱告中把這張紙交給神。",
      scripture: "路加福音14:28「你們哪一個要蓋一座樓，不先坐下算計花費，能蓋成不能呢？」",
      journalPrompt: "寫下你的本益分析結果。哪一邊比較重？你最大的障礙是什麼？你願意為了什麼報酬而付出代價？"
    },
    {
      week: "第二週",
      title: "尋找「神聖時刻」",
      mission: "這一週，每天早上出門前禱告：「主啊，今天祢要在我的日常生活中創造什麼神聖時刻？我要保持警覺。」每天晚上回顧：有沒有任何一個時刻，你感覺到神在引導你跟某個人對話或關心某個人？",
      scripture: "以弗所書5:16「要愛惜光陰，因為現今的世代邪惡。」",
      journalPrompt: "記錄每天是否有「神聖時刻」出現。你有沒有把握住？如果錯過了，是什麼原因？"
    },
    {
      week: "第三週",
      title: "「即將焚毀」的覺醒",
      mission: "做一個「時間稽核」：把你上週的時間分配記錄下來——工作、娛樂、社交媒體、運動、靈修、關心他人分別花了多少時間？然後問自己：這些時間投資中，有多少是「即將焚毀」的？有多少是「存到永恆」的？",
      scripture: "馬太福音6:21「因為你的財寶在哪裏，你的心也在那裏。」",
      journalPrompt: "你的時間稽核結果如何？你想做什麼調整？具體來說，你可以每天省下多少時間投資在永恆的事上？"
    },
    {
      week: "第四週",
      title: "克服「不配感」",
      mission: "想一件你一直覺得自己「不夠格」做的屬靈行動（例如：跟同事分享信仰、為鄰居禱告、在小組中帶領禱告）。這一週，勇敢地去做那件事。事前禱告求神賜下能力，事後記錄神如何使用你的軟弱。",
      scripture: "哥林多後書12:9「我的恩典夠你用的，因為我的能力是在人的軟弱上顯得完全。」",
      journalPrompt: "你做了什麼？過程中你的感受如何？結果如何？這次經驗改變了你對自己「夠不夠格」的看法嗎？"
    }
  ];

  const groupDiscussion = [
    {
      category: "破冰問題",
      questions: [
        "你這輩子做過最值得的「投資」是什麼？（不限於金錢，可以是時間、精力、感情）",
        "你有沒有做過一件事，當初覺得代價很高，後來卻發現報酬遠超預期？分享那個故事。"
      ]
    },
    {
      category: "書中探討",
      questions: [
        "七項報酬中（冒險、目的、滿足、成長、信心、永恆投資、代言榮耀），哪一項最吸引你？為什麼？",
        "五項代價中（時間、學習、金錢、被拒絕、生活複雜），哪一項是你最大的障礙？",
        "作者用「新手媽媽」來比喻傳福音的代價——代價很高，但值得。你認同這個比喻嗎？",
        "書中飛機駕駛員在兩萬八千呎高空帶領副駕駛信主的故事，給你什麼感受？你覺得神也可能在你的日常中創造這樣的「神聖時刻」嗎？",
        "賭馬弟兄因為「想影響朋友歸向基督」而一舉戒掉惡習——為什麼「為了別人」的動機比「為了自己」更有力量？"
      ]
    },
    {
      category: "生活反思",
      questions: [
        "如果有人在你所有的物品上貼「即將焚毀」的貼紙，你最心疼哪一樣？這暴露了什麼？",
        "你目前的生活中，有沒有什麼「例行公事」其實可以成為「神聖時刻」？",
        "你是否正處在「屬靈停滯」中？讀經、禱告、敬拜是否變成了例行公事？你覺得傳福音真的能幫助你突破嗎？",
        "你曾經因為覺得「不配」而不敢為主開口嗎？分享那個經驗。"
      ]
    },
    {
      category: "實踐計畫",
      questions: [
        "做完本益分析後，你決定要「捲起衣袖大幹一場」還是「把書換成小說」？",
        "這一週，你打算在哪一個「日常場景」中保持警覺，尋找神聖時刻？",
        "作為一個小組，我們可以怎樣互相鼓勵，讓彼此都成為更有感染力的基督徒？"
      ]
    }
  ];

  const colorMap: Record<string, string> = {
    amber: "bg-amber-50 border-amber-200 text-amber-800",
    blue: "bg-blue-50 border-blue-200 text-blue-800",
    rose: "bg-rose-50 border-rose-200 text-rose-800",
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-800",
    indigo: "bg-indigo-50 border-indigo-200 text-indigo-800",
    violet: "bg-violet-50 border-violet-200 text-violet-800",
  };
  const iconBgMap: Record<string, string> = {
    amber: "bg-amber-100 text-amber-700",
    blue: "bg-blue-100 text-blue-700",
    rose: "bg-rose-100 text-rose-700",
    emerald: "bg-emerald-100 text-emerald-700",
    indigo: "bg-indigo-100 text-indigo-700",
    violet: "bg-violet-100 text-violet-700",
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-3xl p-8 md:p-10 border border-emerald-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="relative">
          <div className="flex items-center gap-2 text-emerald-600 font-medium mb-2" style={{fontSize:"15px"}}>
            <BookOpen className="w-5 h-5" />
            PART 1：為何要成為有感染力的基督徒？
          </div>
          <h2 className="font-extrabold text-emerald-900 mb-4" style={{fontSize:"30px"}}>第二章：有感染力之基督徒的報酬</h2>
          <p className="text-emerald-800 leading-relaxed mb-3" style={{fontSize:"18px"}}>
            即使目標高貴、用意真誠、計畫就緒，我們最後還是可能沒有任何行動。是甚麼在緊要關頭拉住我們？
            本章用「<strong>本益分析</strong>」的方式，逐一列舉成為有感染力之基督徒的<strong>七項報酬</strong>和<strong>五項代價</strong>，
            讓你看清楚這筆帳到底划不划算。
          </p>
          <p className="text-emerald-700 leading-relaxed" style={{fontSize:"17px"}}>
            結論是壓倒性的：報酬遠遠超過代價。事實上，那些看似「代價」的東西，其實本身就是報酬的一部分。
            這不是一場犧牲——而是一場<strong>三贏的冒險</strong>：你獲益，別人獲益，神也獲益。
          </p>
        </div>
      </div>

      {/* 開場：本益分析 */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}>
          <Target className="w-6 h-6 text-slate-600" />
          本益分析：先算清楚再出發
          <span className="text-slate-400 bg-slate-100 px-2 py-1 rounded-md font-normal" style={{fontSize:"13px"}}>P25-27</span>
        </h3>
        <div className="space-y-4">
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200" style={{fontSize:"17px"}}>
            <p className="text-slate-700 leading-relaxed mb-3">
              商業界用「本益分析」（cost/benefit analysis）來做決策——把投資和收穫逐一列舉，然後做出有根有據的決定。
              耶穌在路加福音十四章也提出類似方法：蓋房子前先計算花費、打仗前先估量兵力。
            </p>
            <p className="text-slate-700 leading-relaxed">
              <strong>作者的挑戰：</strong>「我們把次序扭轉一下，從報酬開始，然後再詳細說明代價。
              如果代價太高，你不如拿本書去換一本小說。如果事情正好相反，我們就要捲起衣袖大幹一場。這樣公平吧？」
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-200 text-center">
              <TrendingUp className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
              <div className="font-bold text-emerald-800" style={{fontSize:"20px"}}>七項報酬</div>
              <p className="text-emerald-600 mt-1" style={{fontSize:"15px"}}>冒險・目的・滿足・成長・信心・永恆投資・代言榮耀</p>
            </div>
            <div className="bg-red-50 rounded-xl p-5 border border-red-200 text-center">
              <TrendingDown className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <div className="font-bold text-red-800" style={{fontSize:"20px"}}>五項代價</div>
              <p className="text-red-500 mt-1" style={{fontSize:"15px"}}>時間・學習・金錢・被拒絕・生活複雜</p>
            </div>
          </div>
        </div>
      </div>

      {/* 七項報酬 */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-emerald-800 mb-6 flex items-center gap-2" style={{fontSize:"24px"}}>
          <Gift className="w-6 h-6 text-emerald-600" />
          七項報酬：你可以在這當中得到什麼？
          <span className="text-slate-400 bg-slate-100 px-2 py-1 rounded-md font-normal" style={{fontSize:"13px"}}>P27-38</span>
        </h3>
        <div className="space-y-4">
          {rewards.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <div className={`rounded-2xl border overflow-hidden cursor-pointer hover:shadow-md transition-all ${colorMap[item.color] || 'bg-slate-50 border-slate-200'}`} onClick={() => setOpenReward(openReward === i ? null : i)}>
                <div className="p-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${iconBgMap[item.color] || 'bg-slate-100 text-slate-700'}`}>{item.icon}</div>
                    <div>
                      <h4 className="font-bold" style={{fontSize:"19px"}}>{item.title}</h4>
                      <p className="opacity-70 mt-1" style={{fontSize:"16px"}}>{item.summary}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex items-center gap-2">
                    <span className="opacity-50 bg-white/50 px-2 py-1 rounded-md" style={{fontSize:"13px"}}>{item.page}</span>
                    {openReward === i ? <ChevronUp className="w-5 h-5 opacity-50" /> : <ChevronDown className="w-5 h-5 opacity-50" />}
                  </div>
                </div>
                <AnimatePresence>
                  {openReward === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="px-5 pb-5 space-y-3">
                        <div className="bg-white/80 rounded-xl p-4 border border-white/50">
                          <div className="font-bold text-slate-700 mb-2" style={{fontSize:"16px"}}>📖 書中闡述：</div>
                          <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>{item.details}</p>
                        </div>
                        {item.stories.length > 0 && (
                          <div className="bg-white/80 rounded-xl p-4 border border-white/50">
                            <div className="font-bold text-slate-700 mb-2" style={{fontSize:"16px"}}>📌 真實故事：</div>
                            <ul className="space-y-2">
                              {item.stories.map((s, j) => (
                                <li key={j} className="flex items-start gap-2" style={{fontSize:"16px"}}>
                                  <span className="text-slate-400 mt-1">•</span>
                                  <span className="text-slate-600 leading-relaxed">{s}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <div className="bg-white rounded-xl p-4 border-2 border-current opacity-90">
                          <p className="font-bold leading-relaxed" style={{fontSize:"17px"}}>💡 {item.keyQuote}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 三贏 */}
        <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl p-5 border border-emerald-200 mt-6">
          <div className="font-bold text-emerald-800 mb-3" style={{fontSize:"18px"}}>🏆 三贏的結果：</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-white rounded-lg p-3 text-center border border-emerald-100">
              <div className="font-bold text-emerald-700" style={{fontSize:"16px"}}>你獲益</div>
              <p className="text-slate-500 mt-1" style={{fontSize:"14px"}}>冒險、目標、滿足、成長、信心、永恆投資、代言榮耀</p>
            </div>
            <div className="bg-white rounded-lg p-3 text-center border border-emerald-100">
              <div className="font-bold text-emerald-700" style={{fontSize:"16px"}}>別人獲益</div>
              <p className="text-slate-500 mt-1" style={{fontSize:"14px"}}>逃過地獄、得到天國應許、在地上擁有美好生活</p>
            </div>
            <div className="bg-white rounded-lg p-3 text-center border border-emerald-100">
              <div className="font-bold text-emerald-700" style={{fontSize:"16px"}}>神獲益</div>
              <p className="text-slate-500 mt-1" style={{fontSize:"14px"}}>看到兒女仿效祂去愛失喪者——天上的慶典（約十五8、路十五10）</p>
            </div>
          </div>
        </div>
      </div>

      {/* 五項代價 */}
      <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-6 md:p-8 border border-red-100 shadow-sm">
        <h3 className="font-bold text-red-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}>
          <TrendingDown className="w-6 h-6 text-red-600" />
          五項代價：需要付出什麼？
          <span className="text-slate-400 bg-slate-100 px-2 py-1 rounded-md font-normal" style={{fontSize:"13px"}}>P39-42</span>
        </h3>
        <p className="text-slate-600 mb-4" style={{fontSize:"17px"}}>
          作者誠實地列出代價——但也提出了每一項代價的「反駁」，讓你看到代價其實沒有想像中那麼高：
        </p>
        <div className="space-y-4">
          {costs.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-red-100 overflow-hidden cursor-pointer hover:shadow-md transition-all" onClick={() => setOpenCost(openCost === i ? null : i)}>
              <div className="p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-red-800" style={{fontSize:"18px"}}>{item.title}</h4>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 bg-slate-100 px-2 py-1 rounded-md" style={{fontSize:"12px"}}>{item.page}</span>
                  {openCost === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </div>
              </div>
              <AnimatePresence>
                {openCost === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <div className="px-5 pb-5 space-y-3">
                      <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                        <div className="font-bold text-red-700 mb-1" style={{fontSize:"15px"}}>💸 代價：</div>
                        <p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>{item.desc}</p>
                      </div>
                      <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
                        <div className="font-bold text-emerald-700 mb-1" style={{fontSize:"15px"}}>✅ 反駁：</div>
                        <p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>{item.counter}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* 新手媽媽比喻 */}
        <div className="bg-white rounded-xl p-5 border border-orange-200 mt-4">
          <h4 className="font-bold text-orange-800 mb-2" style={{fontSize:"18px"}}>👶 新手媽媽的比喻</h4>
          <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>
            問問任何剛作母親的人，寶寶會不會消耗她的時間和精力？她可能會挑戰你跟她一起過上一天一夜！
            「你知道最近幫寶適的價格嗎？」她會這樣問你。但你若問她後不後悔生下這孩子：
          </p>
          <p className="text-orange-800 font-bold mt-2" style={{fontSize:"18px"}}>
            「你有毛病啊？生下這孩子是我這一生最精彩的事了。我愛這孩子！」
          </p>
          <p className="text-slate-500 mt-2" style={{fontSize:"16px"}}>
            代價很高，但值得——值上一千倍。你愈仔細看，就愈能看出報酬很高，代價卻相對地低，
            特別是當我們了解它們根本算不上是代價——這些投資會帶給人永存的報酬。
          </p>
        </div>
      </div>

      {/* 延伸探討：神學深化 */}
      <div className="bg-slate-800 rounded-3xl p-6 md:p-8 border border-slate-700 shadow-sm text-white">
        <h3 className="font-bold text-amber-300 mb-6 flex items-center gap-2" style={{fontSize:"24px"}}>
          <BookOpen className="w-6 h-6 text-amber-400" />
          延伸探討：經文串連與神學深化
          <span className="ml-3 bg-slate-700/50 text-slate-300 px-2 py-1 rounded-full font-normal border border-slate-600" style={{fontSize:"13px"}}>非原書內容</span>
        </h3>
        <div className="space-y-4">
          {theologyTopics.map((item, i) => (
            <div key={i} className="bg-slate-700/50 rounded-2xl border border-slate-600 overflow-hidden cursor-pointer hover:bg-slate-700/70 transition-colors" onClick={() => setOpenTheology(openTheology === i ? null : i)}>
              <div className="p-5 flex items-center justify-between">
                <h4 className="font-bold text-amber-200" style={{fontSize:"19px"}}>{item.title}</h4>
                {openTheology === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>
                {openTheology === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <div className="px-5 pb-5 space-y-3">
                      <p className="text-slate-300 leading-relaxed" style={{fontSize:"17px"}}>{item.content}</p>
                      <div className="bg-slate-800 rounded-xl p-4 border border-slate-600">
                        <div className="font-bold text-blue-300 mb-2" style={{fontSize:"16px"}}>📜 相關經文：</div>
                        <ul className="space-y-1">{item.scriptures.map((s, j) => (<li key={j} className="text-slate-400" style={{fontSize:"16px"}}>• {s}</li>))}</ul>
                      </div>
                      <div className="bg-amber-900/30 rounded-xl p-4 border border-amber-700/50">
                        <div className="font-bold text-amber-300 mb-1" style={{fontSize:"16px"}}>💭 反思：</div>
                        <p className="text-slate-300 leading-relaxed" style={{fontSize:"17px"}}>{item.reflection}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* 華人教會生活實例 */}
      <div className="bg-gradient-to-br from-red-50 to-amber-50 rounded-3xl p-6 md:p-8 border border-red-100 shadow-sm">
        <h3 className="font-bold text-red-800 mb-6 flex items-center gap-2" style={{fontSize:"24px"}}>
          <Users className="w-6 h-6 text-red-600" />
          貼近我們的生活：華人教會實例
          <span className="ml-3 bg-red-100 text-red-600 px-2 py-1 rounded-full font-normal border border-red-200" style={{fontSize:"13px"}}>延伸應用</span>
        </h3>
        <div className="space-y-4">
          {taiwanExamples.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-800 mb-3" style={{fontSize:"19px"}}>{item.title}</h4>
              <div className="space-y-3" style={{fontSize:"16px"}}>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <div className="font-bold text-slate-600 mb-1" style={{fontSize:"15px"}}>📍 情境：</div>
                  <p className="text-slate-600 leading-relaxed">{item.scenario}</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
                  <div className="font-bold text-emerald-700 mb-1" style={{fontSize:"15px"}}>🎯 本週挑戰：</div>
                  <p className="text-slate-600 leading-relaxed">{item.challenge}</p>
                </div>
                <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                  <div className="font-bold text-amber-700 mb-1" style={{fontSize:"15px"}}>💡 書中連結：</div>
                  <p className="text-slate-600 leading-relaxed">{item.insight}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 四週挑戰任務 */}
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-6 md:p-8 border border-indigo-100 shadow-sm">
        <h3 className="font-bold text-indigo-800 mb-6 flex items-center gap-2" style={{fontSize:"24px"}}>
          <CheckCircle2 className="w-6 h-6 text-indigo-600" />
          四週挑戰任務
          <span className="ml-3 bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full font-normal border border-indigo-200" style={{fontSize:"13px"}}>實踐計畫</span>
        </h3>
        <div className="space-y-4">
          {weeklyChallenge.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-indigo-200 overflow-hidden cursor-pointer hover:bg-indigo-50/50 transition-colors" onClick={() => setOpenChallenge(openChallenge === i ? null : i)}>
              <div className="p-5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-700" style={{fontSize:"16px"}}>{item.week}</div>
                  <h4 className="font-bold text-indigo-800" style={{fontSize:"19px"}}>{item.title}</h4>
                </div>
                {openChallenge === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>
                {openChallenge === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <div className="px-5 pb-5 space-y-3">
                      <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100">
                        <div className="font-bold text-indigo-700 mb-2" style={{fontSize:"16px"}}>🎯 任務說明：</div>
                        <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>{item.mission}</p>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                        <div className="font-bold text-blue-700 mb-1" style={{fontSize:"16px"}}>📖 本週經文：</div>
                        <p className="text-slate-600" style={{fontSize:"17px"}}>{item.scripture}</p>
                      </div>
                      <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                        <div className="font-bold text-amber-700 mb-1" style={{fontSize:"16px"}}>📓 日記提示：</div>
                        <p className="text-slate-600" style={{fontSize:"17px"}}>{item.journalPrompt}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* 小組討論問題 */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-sm">
        <h3 className="font-bold text-emerald-800 mb-6 flex items-center gap-2" style={{fontSize:"24px"}}>
          <MessageCircle className="w-6 h-6 text-emerald-600" />
          小組討論問題
          <span className="ml-3 bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full font-normal border border-emerald-200" style={{fontSize:"13px"}}>小組使用</span>
        </h3>
        <div className="space-y-6">
          {groupDiscussion.map((section, i) => (
            <div key={i}>
              <h4 className="font-bold text-emerald-700 mb-3 flex items-center gap-2" style={{fontSize:"20px"}}>
                <span className="w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-800 font-bold" style={{fontSize:"14px"}}>{i+1}</span>
                {section.category}
              </h4>
              <div className="space-y-2 ml-10">
                {section.questions.map((q, j) => (
                  <div key={j} className="bg-white rounded-xl p-4 border border-emerald-100">
                    <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>{q}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 本章總結 */}
      <div className="bg-gradient-to-br from-teal-50 to-slate-50 border border-teal-100 rounded-3xl p-6 md:p-8">
        <h3 className="font-bold text-teal-700 mb-4 flex items-center gap-2" style={{fontSize:"22px"}}>
          📝 第二章總結：有感染力之基督徒的報酬
        </h3>
        <p className="text-slate-500 mb-5 leading-relaxed" style={{fontSize:"17px"}}>
          本章用「本益分析」幫助我們看清：成為有感染力的基督徒的報酬遠遠超過代價。這不是犧牲，而是最聰明的投資。
        </p>
        <div className="space-y-3">
          <div className="bg-emerald-50 border-emerald-200 border rounded-xl p-4">
            <div className="font-bold text-emerald-700 mb-1.5" style={{fontSize:"18px"}}>🏆 七項報酬 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>P27-38</span></div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>激勵人心的冒險、前所未有的目的感、超越日常的深層滿足、全面的屬靈成長（讀經/禱告/敬拜/品格）、信心增強、永恆的投資、作神代言人的榮耀。最重要的是——三贏：你獲益、別人獲益、神也獲益。</p>
          </div>
          <div className="bg-red-50 border-red-200 border rounded-xl p-4">
            <div className="font-bold text-red-700 mb-1.5" style={{fontSize:"18px"}}>💸 五項代價 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>P39-42</span></div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>時間和精力、閱讀與學習、金錢、被拒絕的風險、生活變複雜。但仔細看——這些「代價」其實本身就是報酬的一部分。就像新手媽媽說的：代價很高，但「這是我一生最精彩的事」。</p>
          </div>
          <div className="bg-amber-50 border-amber-200 border rounded-xl p-4">
            <div className="font-bold text-amber-700 mb-1.5" style={{fontSize:"18px"}}>💡 結論 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>P42</span></div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>「這一切都值得——值上一千倍。報酬很高，代價卻相對地低，特別是當我們了解它們根本算不上是代價。這些投資會帶給人永存的報酬。」是時候捲起衣袖大幹一場了！</p>
          </div>
        </div>
      </div>

      {/* 反思與行動 */}
      <div className="bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-800 shadow-lg text-white">
        <h3 className="font-bold text-orange-300 mb-6 flex items-center" style={{fontSize:"27px"}}>
          <Brain className="w-7 h-7 mr-3" /> 深度反思與行動指南
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="font-bold text-orange-200 mb-4 flex items-center" style={{fontSize:"23px"}}>
              <Brain className="w-5 h-5 mr-2 text-orange-400" /> 反思問題
            </h4>
            <ul className="space-y-4 text-slate-300">
              {["七項報酬中，哪一項最能激勵你？為什麼？","五項代價中，哪一項是你最大的障礙？你願意怎樣克服？","你是否正處在「屬靈停滯」中？傳福音能否成為你的突破口？","你的時間和金錢主要投資在「即將焚毀」的東西上，還是「存到永恆」的東西上？","你是否曾因「不配感」而不敢為主開口？神對你的回應是什麼？","你的日常生活中，有哪些「例行公事」可能變成「神聖時刻」？","如果要做一份你個人的「本益分析」，結果會是什麼？"].map((r, i) => (
                <li key={i} className="flex items-start" style={{fontSize:"17px"}}>
                  <span className="text-orange-400 mr-2 font-bold">{i+1}.</span> {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="font-bold text-emerald-300 mb-4 flex items-center" style={{fontSize:"23px"}}>
              <Target className="w-5 h-5 mr-2 text-emerald-400" /> 具體行動方案
            </h4>
            <ul className="space-y-4 text-slate-300">
              {["在紙上做一份你個人的「本益分析」——列出你不願意傳福音的所有理由和可能的回報。","這一週每天早上禱告：「主啊，今天祢要在我的日常中創造什麼神聖時刻？」","做一個「時間稽核」：你的時間有多少投資在永恆的事上？決定一項調整。","想一件你覺得「不夠格」做的屬靈行動，這週勇敢地去做。事後記錄神如何使用你。","找一位正在「屬靈停滯」的弟兄姊妹，一起計畫如何接觸一位共同認識的未信者。","把馬太福音六19-21背起來，每天提醒自己：真正的財寶在哪裡。"].map((a, i) => (
                <li key={i} className="flex items-start" style={{fontSize:"17px"}}>
                  <span className="text-emerald-400 mr-2 font-bold">{i+1}.</span> {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
