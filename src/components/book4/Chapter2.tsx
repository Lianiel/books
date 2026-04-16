import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, BookOpen, ChevronDown, ChevronUp, Target, Brain, MessageSquareQuote, Layers, BookMarked, ArrowUp, ArrowDown } from 'lucide-react';

export default function Chapter2() {
  const [openReward, setOpenReward] = useState<number | null>(null);
  const [openCost, setOpenCost] = useState<number | null>(null);
  const [openTheology, setOpenTheology] = useState<number | null>(null);
  const [openChallenge, setOpenChallenge] = useState<number | null>(null);
  const [openTaiwan, setOpenTaiwan] = useState<number | null>(null);

  const costBenefitIntro = {
    concept: "商業界用「本益分析」（cost/benefit analysis）來做決策——把投資和收穫逐一列舉，然後做出有根有據的決定。耶穌在路加福音十四章也提出類似方法：蓋房子前先計算花費、打仗前先估量兵力。",
    challenge: "即使目標高貴、用意真誠、計畫就緒，我們最後還是可能沒有任何行動。是甚麼在緊要關頭拉住我們？通常我們缺少的是：以清楚的頭腦和張大的眼睛仔細盤算需要付出的代價和可以得到的報酬。",
    page: "P25-27"
  };

  const rewards = [
    {
      num: 1, title: "激動人心的活動", icon: "🔥",
      summary: "傳講信仰不是沉悶的義務，而是一場令人興奮的冒險。",
      detail: "這點可能會讓你大吃一驚——傳講信仰竟然是一件讓你覺得激動人心的事！當你開始留意身邊的人，求神使用你，你會興奮地發現，即使在極艱難的事件和狀況中都可以看見神的手。知道我們每天所做的事都在神的大計畫裏有意義，會讓人有一種非常不可思議的感覺。",
      story: "教會派編輯羅伯·威金斯和攝影記者賴瑞·凱瑟前往海地。在機場準備搭包機回家時，兩名政變失敗的軍人持機關槍和炸彈劫機。但羅伯和賴瑞卻把這場危機視為神的美意。他們在飛行途中和這兩個驚恐的人聊天說地，最後竟然在紙上畫出福音說明圖，向他們解釋神的愛。「神仍然看重他們，而且他們需要知道這一點。」",
      page: "P27-30"
    },
    {
      num: 2, title: "滿足", icon: "😊",
      summary: "沒有任何事比得上有效推動神對人類的救贖目的所帶來的滿足感！",
      detail: "當我們開始投入於拯救未信者，在日常活動裏尋找目的，我們就會有一種超越日常人類經驗的滿足感。還有甚麼比得上成為神手裏的工具，被祂用以向祂關心到甚至甘心為之死的人傳達祂的愛、澄清祂的真理呢？",
      story: "耶穌在井邊與悖逆的撒馬利亞婦人談話，為我們立了榜樣。後來門徒拿食物給祂吃，祂回答說：「我的食物就是遵行差我來者的旨意，做成祂的工。……我告訴你們，舉目向田觀看，莊稼已經熟了，可以收割了。」（約翰福音四：34-35）祂稱這項活動為祂的食物——因為祂有一種很深的滿足感。",
      scripture: "彼後三9 主……不願有一人沉淪，乃願人人都悔改。",
      page: "P30-31"
    },
    {
      num: 3, title: "屬靈成長", icon: "🌱",
      summary: "這是有感染力的基督信仰最重要但常被忽略的一點。",
      detail: "當無生氣的信徒掙脫屬靈真空，遇上信仰的追尋者，不可思議的事就發生了：讀經變得滿有活力——過去偶爾把聖經從書架上抽出來讀讀，現在覺得必須讀，甚至把有些部分背起來；禱告有了新的目的——陳腐的老套禱告詞不再，變成為朋友能得救所發的激動祈求；敬拜神的渴望也會成長；個人品格方面，成為有感染力之基督徒能幫助你維持高標準的行為，因為你更意識到自己是神的代表。",
      story: "教會有個人一直改不掉賭馬的惡習。經過多次戒賭又再犯的挫折循環，後來有位同工挑戰他：「不是因為這是最大的罪，而是這會攔阻你影響朋友歸向基督。」有了這新的動機，這人一舉放棄賭馬的惡習——現在他是教會最有感染力的基督徒之一！",
      page: "P32-34"
    },
    {
      num: 4, title: "屬靈信心", icon: "💪",
      summary: "跟信仰觀點不同的人談話可以迫使你採取行動，強化自己的信仰。",
      detail: "努力讓別人接受你的信仰能大大地強化你對自己信仰的信心。這跟期末考很像——預備期末考會迫使你運用記憶力，改善讀書習慣，使得我們自己第一次把事情真正搞清楚。當我們要跟懷疑論者、摩門教徒、耶和華見證人、新世紀信徒及上教會的非基督徒說明我們的信仰時，我們就會自動增加自己的知識。當我們面對異議仍能成功把持自己的信仰，我們屬靈方面的肯定感就會增加。",
      page: "P34-35"
    },
    {
      num: 5, title: "經得起考驗的投資", icon: "💎",
      summary: "我的人生要單單以真的能持久的東西為核心：神、祂的國度、像你我這樣的人。",
      detail: "耶穌警告跟從祂的人：「不要為自己積攢財寶在地上：地上有蟲子咬，能銹壞，也有賊挖窟窿來偷。只要積攢財寶在天上。」（太六：19-20）彼得用了更強的措詞：「但主的日子要像賊來到一樣。那日，天必大有響聲廢去，有形質的都要被烈火銷化。」（彼後三：10-11）",
      story: "有位朋友作了一個有趣的建議，他說我應該拿一堆紅色貼紙，上面寫著「即將焚毀」，貼在我擁有的每一件東西上！這可以不斷提醒我——每輛摩托車、每艘船、每樣家具——所有我擁有或想要的東西，都會朽壞、被竊，最終甚至要焚毀在烈火之中。在這些無法久長的事物上投資許多時間和精力，是多大的錯誤！",
      page: "P35-36"
    },
    {
      num: 6, title: "作神代言人的榮耀", icon: "👑",
      summary: "神竟在選中我們作祂的代言人——祂給了我們代表祂說話的最高榮譽。",
      detail: "當我們了解神有多偉大，而我們多軟弱多需要倚靠祂，耶穌在使徒行傳一章8節說的那席話似乎就顯得很難令人置信：「但聖靈降臨在你們身上，你們就必得著能力，並要在耶路撒冷、猶太全地，和撒馬利亞，直到地極，作我的見證。」門徒轉身看以確定祂到底在跟誰講話。神竟在選中我們作祂的代言人！祂應許在這過程中給我們能力、使用我們。",
      story: "那是我服事早期的一段日子，當時我正在做高中生的學生工作。某個週三晚上規劃大型佈道活動，全場坐滿。差不多是我該上場的時候，我記得我有一種高度的「不配感」：「我是何許人啊？怎麼能跟這些孩子講話呢？」但我還是站起身來盡我有限的能力跟學生說明神看重他們。我邀請他們踏出那一步時，我目瞪口呆地看到好幾百名學生站起來！後來竟然有更多人站起來！事後我走到聚會的建築後面，靠著牆，為著祂竟願使用像我這樣一個人心裏充滿感恩與驚嘆。",
      page: "P36-38"
    },
    {
      num: 7, title: "三贏的結局", icon: "🏆",
      summary: "你獲益，別人獲益，神也獲益——報酬是壓倒性的。",
      detail: "當我們積極、有策略地努力為基督接觸人，當我們在生活方式和表達自己信仰上變得更有感染力，我們會發現自己獲益，別人獲益，神也獲益。這些好處還不夠刺激你的胃口？我們還沒談到我們為之如此努力的人會得到的諸多好處呢！逃過地獄的下場，得到天國的應許，在地上就能擁有美好的生活：充滿冒險、有目標、有滿足感、不斷成長、屬靈方面的肯定、持久的投資及成為宇宙之主的代表！最重要的，神也蒙受好處。約翰福音十五章8節說：「你們多結果子，我父就因此得榮耀……」路加福音十五章10節告訴我們：「一個罪人悔改，在天上也要這樣為他歡喜。」是天上的慶典！",
      scripture: "約十五8「你們多結果子，我父就因此得榮耀。」\n路十五10「一個罪人悔改，在天上也要這樣為他歡喜。」",
      page: "P38"
    }
  ];

  const costs = [
    {
      num: 1, title: "時間和精力", icon: "⏰",
      detail: "接觸悖逆的人不容易，與對方建立關係、顯出基督徒的關心和同情、為對方持續禱告，這些都需要投注我們最寶貴的資源：時間和精力。包括要一再解釋看似簡單的福音信息，在他們「想一想」的時候耐心等候，努力應付許許多多充滿挑戰的問題，而且最後他們可能還是會拒絕基督。",
      flip: "但是請問，把時間和精力投資在人身上，將來許多人會在天上的永恆裏感謝你，還有比這更好的投資嗎？甚麼投資有這麼高的報酬？",
      page: "P39"
    },
    {
      num: 2, title: "閱讀與學習", icon: "📚",
      detail: "為了接觸他人，我們得去上點查經課，偶爾也要讀讀像本書這樣的書。你得費點力氣才能懂得自己所講的、所信的。",
      flip: "但你反正也想多懂一點你所信的，對不對？聖經告訴我們，要在認識神上不斷成長。而且，我們已經把它查經放在報酬這邊，恐怕也不大公平吧！",
      page: "P39"
    },
    {
      num: 3, title: "金錢", icon: "💰",
      detail: "在別人生命裏投資需要付出金錢。吃午餐、打長途電話、買書、參加特會，有時還要為供應別人實際的需要花上一大筆錢——這些都是有感染力之基督信仰可能有求於我們荷包的地方。",
      flip: "但是把所有的花費加起來，總額還算挺低的，特別是相較於其後的龐大回報。至於代價較高的情況，耶穌也能給我們適當鼓勵：「只要積攢財寶在天上……因為你的財寶在哪裏，你的心也在那裏。」（太六：20-21）我想不出比這更安全的投資，你能嗎？",
      page: "P39-40"
    },
    {
      num: 4, title: "受窘、被拒絕、被迫害的風險", icon: "😰",
      detail: "雖然我們大概沒甚麼人受過明顯的迫害，但是較輕的抵擋或許難免。可能是朋友的取笑或是受排擠於某些談話或社交聚會之外的孤獨感。若單單因為我們是基督徒而受歧視或惡意騷擾，情況可能更艱難。",
      flip: "我沒有簡單的答案可以給你，只能鼓勵你注意順服神的好處之餘，向祂祈求讓你擁有祂的眼光。耶穌說：「人若因我辱罵你們，逼迫你們，捏造各樣壞話毀謗你們，你們就有福了！應當歡喜快樂，因為你們在天上的賞賜是大的。」（太五：11-12）",
      scripture: "加六9 我們行善，不可喪志；若不灰心，到了時候就要收成。",
      page: "P40"
    },
    {
      num: 5, title: "生活變得複雜", icon: "🔄",
      detail: "對我們大多數人而言，接觸人的主要代價是我們會跟對方生命所關切的事和活動糾纏在一起，我們不再能獨立行事，為我們原已超載的行程再添瑣事。簡單地說，使我們複雜的生活更複雜。",
      flip: "但結婚不也一樣？生孩子也是，買房子也是；甚至，作基督徒也是。大多數重要的事都會使我們的生活變得更複雜。但是值得嗎？當然值得！問問任何剛作母親的人，她的回答一定是：「生下這孩子是我這一生最精采的事了。我愛這孩子！」",
      page: "P41"
    }
  ];

  const theologyTopics = [
    {
      title: "本益分析的聖經根基：耶穌也教導計算代價",
      content: "耶穌在路加福音十四章28-33節提出兩個比喻：蓋樓房的人先坐下來計算花費，打仗的王先估量兵力。這不是功利主義——而是誠實面對跟隨基督的代價。保羅也用「比賽」的比喻：「豈不知在場上賽跑的都跑，但得獎賞的只有一人？你們也當這樣跑，好叫你們得著獎賞。」（林前九24）重點不是報酬值不值得——而是當你真正看清報酬有多大，你的恐懼和猶豫就會顯得微不足道。(P25-27)",
      scriptures: ["路十四28-33 你們哪一個要蓋一座樓，不先坐下算計花費？", "林前九24 豈不知在場上賽跑的都跑，但得獎賞的只有一人？", "來十二2 仰望為我們信心創始成終的耶穌，祂因那擺在前面的喜樂，就輕看羞辱，忍受了十字架的苦難。"],
      reflection: "耶穌「因那擺在前面的喜樂，就輕看羞辱，忍受了十字架的苦難」——祂也做了本益分析！你是否也能看到那擺在你前面的「喜樂」，以至於能「輕看」分享信仰的困難和尷尬？"
    },
    {
      title: "「即將焚毀」的永恆觀：重新定義什麼是值得的投資",
      content: "彼得後書三章10-11節提醒我們：有形質的都要被烈火銷化。作者的朋友建議他在每件擁有的東西上貼「即將焚毀」的紅色貼紙——這個畫面雖然誇張，卻直指核心問題：我們把最多的時間和精力投資在什麼上面？是那些「即將焚毀」的東西，還是那些存到永恆的事——人的靈魂、與神的關係、在天上的獎賞？耶穌說：「你的財寶在哪裏，你的心也在那裏。」(P35-36)",
      scriptures: ["太六19-21 不要為自己積攢財寶在地上……只要積攢財寶在天上。", "彼後三10-11 但主的日子要像賊來到一樣……有形質的都要被烈火銷化。", "林後四18 我們不是顧念所見的，乃是顧念所不見的；因為所見的是暫時的，所不見的是永遠的。"],
      reflection: "如果你真的在每件擁有的東西上貼「即將焚毀」的紅色貼紙，你的生活優先順序會有什麼改變？你目前最多的時間和精力投資在「即將焚毀」的東西上，還是「存到永恆」的事上？"
    },
    {
      title: "代價其實就是報酬：一個反直覺的福音邏輯",
      content: "本章最精妙的洞見是：那些看似「代價」的東西，仔細看其實本身就是報酬。花時間在人身上→建立深層關係→你自己也被祝福。閱讀學習→靈性成長→你更認識神。金錢奉獻→學習依靠神→經歷神的供應。被拒絕的風險→信心被鍛鍊→天上的獎賞。生活變複雜→生命更豐富→像耶穌。這和耶穌說的一樣：「你們要給人，就必有給你們的……因為你們用甚麼量器量給人，也必用甚麼量器量給你們。」（路六38）(P41-42)",
      scriptures: ["路六38 你們要給人，就必有給你們的。", "可十29-30 凡為我和福音撇下房屋……沒有不在今世得百倍的。", "腓一21 因我活著就是基督，我死了就有益處。"],
      reflection: "回顧你過去為信仰所付出的「代價」——有沒有哪些後來證明其實是「報酬」？你是否能相信，那些你現在害怕的代價，最終也會變成意想不到的祝福？"
    }
  ];

  const taiwanExamples = [
    {
      title: "💼 台灣職場中的「激動人心的冒險」",
      scenario: "台灣上班族每天通勤、加班、應酬，生活被工作填滿。信仰常常只是週日兩小時的事。但如果你開始用「神看重每個人」的眼光看待同事——那個總是獨自吃午餐的新人、那個最近離婚的主管、那個在茶水間抱怨生活的同事——你的職場就會從「賺錢的地方」變成「神使用你的禾場」。",
      challenge: "這週選擇一位你覺得「需要被看見」的同事，主動邀請他一起吃午餐或喝咖啡。不需要傳教——只需要真正關心他。觀察神如何在這個簡單的行動中工作。",
      insight: "海地劫機故事告訴我們：即使在最困難的處境中，羅伯和賴瑞仍然看到「神的美意」。(P29-30) 你的職場可能不像被劫持的飛機那麼危險，但同樣充滿了等待被接觸的人。"
    },
    {
      title: "📱 在數位時代建立「真實關係」的挑戰",
      scenario: "在台灣，LINE群組和社群媒體讓我們有上百個「好友」，卻很少有深入的關係。教會的LINE群組充斥貼圖和轉貼文章，但真正的生命分享很少發生。要成為有感染力的基督徒，需要的不是更多的群組或更巧妙的轉貼，而是真實的「靠近人」——面對面、生命對生命。",
      challenge: "這個月把一個「線上互動」轉化為「面對面關係」：邀請一位你平常只在LINE上聊天的非基督徒朋友出來見面。放下手機，真正傾聽他的故事。",
      insight: "本章的「滿足」來自耶穌在井邊與撒馬利亞婦人「面對面」的對話(P30-31)——不是透過社群媒體。真正的感染力需要真實的接觸。"
    },
    {
      title: "😰 在華人文化中面對「被拒絕的風險」",
      scenario: "華人文化重視「面子」和「和氣」。分享信仰最大的障礙不是神學問題，而是怕「破壞關係」「被當成怪人」「讓對方不舒服」。在台灣的職場和家族聚會中，公開談論信仰可能被視為「不識相」。特別是面對長輩或上司，更是難以開口。",
      challenge: "回想你最近一次有機會分享信仰卻沒有開口的情境。問自己：真正阻止我的是什麼？是怕被拒絕？怕丟臉？還是怕影響關係？把這些恐懼帶到神面前禱告。然後問神：「下一次機會來臨時，祢要我怎麼做？」",
      insight: "作者在高中佈道會上也有高度的「不配感」——但他還是站了起來，結果好幾百名學生回應。(P36-37) 你的「不配感」可能正是神要使用你的起點。"
    },
    {
      title: "🏠 家庭中的「三贏冒險」",
      scenario: "在台灣，很多基督徒的家人並不信主——父母拜拜、配偶冷淡、孩子抗拒。在家庭中做有感染力的基督徒特別困難，因為家人看到你所有的軟弱和不一致。但這也是最大的禾場——如果連最了解你的人都能被你的信仰吸引，那就是最有說服力的見證。",
      challenge: "不要急著「傳教」給家人。先用行動展示信仰的果子：主動服事、多一點耐心、真心道歉、少一點批評。讓家人看到基督在你身上的改變，而不只是聽到你的說教。記住：品格比言語更有感染力。",
      insight: "本章說成為有感染力的基督徒能幫助你「維持高標準的行為」，因為你「更意識到自己是神的代表」。(P33) 你的家人就是你最嚴格的「品格監督員」——這是代價，也是報酬。"
    },
    {
      title: "💎 「即將焚毀」在消費社會台灣的應用",
      scenario: "台灣的消費文化極度發達——百貨公司週年慶、雙11、蝦皮免運——刺激我們不斷追求更多「即將焚毀」的東西。基督徒也不例外：我們追求更好的車、更大的房、更新的手機，卻很少投資在「存到永恆」的事上。如果把花在購物的時間拿來關心一個人的靈魂，結果會怎樣？",
      challenge: "做一個實驗：這個月把你原本要花在一件「即將焚毀」的非必需品上的錢，用來投資在一個人身上——請他吃飯、送他一本書、或為他的需要奉獻。觀察這筆「永恆投資」帶給你什麼感受。",
      insight: "作者的人生決定是：「我的人生要單單以真的能持久的東西為核心：神、祂的國度、像你我這樣的人。唯有這些配得我們全心的熱情。」(P36) 你的核心是什麼？"
    }
  ];

  const weeklyChallenge = [
    {
      week: "第一週", title: "做你的本益分析",
      mission: "拿一張紙，畫一條線分成左右兩欄。左邊寫「報酬」（參考本章七項），右邊寫「代價」（參考本章五項）。然後加入你自己的項目——你個人經歷過或預期的報酬和代價。寫完後安靜看一分鐘，問自己：「這筆帳到底划不划算？」",
      scripture: "路十四28 你們哪一個要蓋一座樓，不先坐下算計花費，能蓋成不能呢？",
      journalPrompt: "看完你的本益分析表，你的結論是什麼？是報酬多還是代價多？什麼是你最害怕的代價？什麼是你最渴望的報酬？"
    },
    {
      week: "第二週", title: "尋找你的「海地時刻」",
      mission: "這週每天問自己：「今天我身邊有沒有一個人是神要我去關心的？」不需要做大事——可能只是一句真誠的問候、一個傾聽的耳朵、一個午餐的邀請。每天晚上記錄：我今天是否「看見」了身邊的人？我有沒有錯過任何「神的美意在其中」的機會？",
      scripture: "西四5 你們要愛惜光陰，用智慧與外人交往。",
      journalPrompt: "這週你有沒有經歷到「激動人心」的時刻？即使只是一個小小的對話或關心的舉動，你是否感受到神在使用你？"
    },
    {
      week: "第三週", title: "貼上「即將焚毀」的貼紙",
      mission: "環顧你的生活，列出你花最多時間和精力的前五件事。然後問每一件：「這件事是『即將焚毀』的還是『存到永恆』的？」如果你發現大部分時間花在「即將焚毀」的事上，嘗試這週做一個調整：把其中一項的時間轉移到投資在人身上。",
      scripture: "太六20-21 只要積攢財寶在天上……因為你的財寶在哪裏，你的心也在那裏。",
      journalPrompt: "重新分配時間後，你的感受是什麼？你是否發現投資在人身上的「報酬」比你預期的更大？"
    },
    {
      week: "第四週", title: "踏出信心的一步",
      mission: "選擇一個你一直想分享信仰但還沒有行動的對象。這週為他禱告每天至少一分鐘。然後找一個自然的機會，做一件表達關心的事（不一定要直接傳教）。可以是分享你自己生命中神的作為、邀請他參加一個教會活動、或只是問他「你最近怎麼樣？有什麼我可以為你禱告的？」",
      scripture: "徒一8 但聖靈降臨在你們身上，你們就必得著能力……作我的見證。",
      journalPrompt: "你踏出了那一步嗎？結果如何？無論對方的回應是什麼，你自己內心有什麼感受？你是否經歷到神的同在和能力？"
    }
  ];

  const groupDiscussion = [
    {
      category: "📊 本益分析",
      questions: [
        "七項報酬中，哪一項最吸引你？哪一項是你之前沒有想過的？",
        "五項代價中，哪一項是你最害怕的？為什麼？",
        "你是否同意「代價其實就是報酬」的說法？你有沒有親身經歷過「付出代價後反而得到更多」的經驗？",
        "如果你要說服一個基督徒朋友開始更積極地分享信仰，你會用哪個報酬作為主要論點？"
      ]
    },
    {
      category: "🔥 冒險與故事",
      questions: [
        "海地劫機的故事中，羅伯和賴瑞在危險中仍然看到傳福音的機會。你有沒有類似的經歷——在意想不到的場合遇到分享信仰的機會？",
        "作者在高中佈道會上感到高度的「不配感」卻還是站了起來。你上一次「不配」但還是踏出信心一步的經歷是什麼？",
        "「知道我們每天所做的事都在神的大計畫裏有意義」——這句話對你的日常生活有什麼影響？",
        "你的生命中是否有一個人因為你的影響而認識了基督？那是什麼感覺？"
      ]
    },
    {
      category: "💎 永恆的投資",
      questions: [
        "如果你真的在每件東西上貼「即將焚毀」的紅色貼紙，你的生活會有什麼改變？",
        "你目前在「存到永恆」的事上投資了多少時間和精力？你滿意這個比例嗎？",
        "本章說這是一個「三贏的結局」——你獲益、別人獲益、神也獲益。你認同嗎？你覺得最大的贏家是誰？",
        "作為小組，我們可以如何彼此鼓勵和支持，一起成為更有感染力的基督徒？"
      ]
    }
  ];

  const reflections = [
    "我目前的信仰生活更像「冒險」還是「例行公事」？是什麼讓我失去了信仰的「激動」？",
    "我上一次因為分享信仰而感到深深的「滿足」是什麼時候？如果很久以前，是什麼攔阻了我？",
    "我的屬靈生命是否正在「成長」？還是已經停滯在舒適圈裡？成為有感染力的基督徒如何能幫助我重新成長？",
    "我花最多時間和精力投資的東西，是「即將焚毀」的還是「存到永恆」的？",
    "我是否真的相信「代價其實就是報酬」？我願意為了永恆的報酬付出暫時的代價嗎？",
    "如果神已經選中我作祂的代言人，我為什麼還在猶豫？我的「不配感」是否正阻擋神透過我工作？"
  ];

  const actions = [
    "做本益分析：拿一張紙寫下你個人版的報酬vs代價清單，貼在你每天看得到的地方。",
    "列出你的五個關鍵人物：寫下五個你最希望認識基督的人的名字，開始每天為他們禱告。",
    "「即將焚毀」實驗：把這個月一筆非必需品的花費，改為投資在一個人的生命上。",
    "說出你的故事：花十分鐘寫下你自己認識基督的故事（三分鐘版本），練習到能自然分享。",
    "踏出一步：這週找一個自然的機會，向你清單上的一個人表達關心或分享你生命中神的作為。",
    "找一位同伴：在教會或小組中找一個人，約定彼此鼓勵、問責，一起成為更有感染力的基督徒。"
  ];

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="space-y-8">

      {/* ========== 章節標題 ========== */}
      <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 md:p-10 relative overflow-hidden border border-emerald-100 shadow-sm">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="relative">
          <div className="flex items-center gap-2 text-emerald-600 font-medium mb-2" style={{fontSize:"15px"}}><BookOpen className="w-5 h-5" />PART 1：為何要成為有感染力的基督徒？</div>
          <h2 className="font-extrabold text-emerald-900 mb-4" style={{fontSize:"30px"}}>第二章：有感染力之基督徒的報酬</h2>
          <p className="text-emerald-800 leading-relaxed mb-3" style={{fontSize:"18px"}}>即使目標高貴、用意真誠、計畫就緒，我們最後還是可能沒有任何行動。是甚麼在緊要關頭拉住我們？本章用「<strong>本益分析</strong>」的方式，逐一列舉成為有感染力之基督徒的<strong>七項報酬</strong>和<strong>五項代價</strong>，讓你看清楚這筆帳到底划不划算。</p>
          <p className="text-emerald-700 leading-relaxed" style={{fontSize:"17px"}}>結論是壓倒性的：報酬遠遠超過代價。事實上，那些看似「代價」的東西，其實本身就是報酬的一部分。這不是一場犧牲——而是一場<strong>三贏的冒險</strong>。</p>
        </div>
      </div>

      {/* ========== 本益分析 ========== */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><Layers className="w-6 h-6 text-slate-600" />本益分析：先算清楚再出發<span className="ml-2 text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded-full border border-slate-200">P25-27</span></h3>
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 mb-4">
          <p className="text-slate-700 leading-relaxed" style={{fontSize:"17px"}}>{costBenefitIntro.concept}</p>
        </div>
        <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
          <p className="text-amber-800 leading-relaxed" style={{fontSize:"17px"}}><strong>作者的挑戰：</strong>{costBenefitIntro.challenge}</p>
        </div>
      </div>

      {/* ========== 七項報酬 ========== */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-sm">
        <h3 className="font-bold text-emerald-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}><ArrowUp className="w-6 h-6 text-emerald-600" />成為有感染力之基督徒的報酬<span className="ml-2 text-xs bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full border border-emerald-200">P27-38</span></h3>
        <p className="text-slate-500 mb-4" style={{fontSize:"16px"}}>我們先從報酬開始，然後再說明要付出的成本：</p>
        <div className="space-y-3">
          {rewards.map((r, i) => (
            <div key={i} className="bg-white rounded-2xl border border-emerald-100 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-emerald-50 transition-colors" onClick={() => setOpenReward(openReward === i ? null : i)}>
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-xl">{r.icon}</span>
                  <div><h4 className="font-bold text-emerald-800" style={{fontSize:"18px"}}>{r.num}. {r.title}</h4><p className="text-emerald-600 text-sm">{r.summary}</p></div>
                </div>
                {openReward === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>{(openReward === i) && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <div className="px-5 pb-5 space-y-3">
                    <p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>{r.detail}</p>
                    {r.story && <div className="bg-amber-50 rounded-xl p-4 border border-amber-200"><p className="text-amber-800 italic" style={{fontSize:"15px"}}>📖 {r.story}</p></div>}
                    {r.scripture && <div className="bg-blue-50 rounded-xl p-3 border border-blue-200"><p className="text-blue-700 text-sm font-medium">{r.scripture}</p></div>}
                    <p className="text-xs text-slate-400">{r.page}</p>
                  </div>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 五項代價 ========== */}
      <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-6 md:p-8 border border-rose-100 shadow-sm">
        <h3 className="font-bold text-rose-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}><ArrowDown className="w-6 h-6 text-rose-600" />成為有感染力之基督徒的代價<span className="ml-2 text-xs bg-rose-100 text-rose-600 px-2 py-1 rounded-full border border-rose-200">P39-41</span></h3>
        <p className="text-slate-500 mb-4" style={{fontSize:"16px"}}>代價是真實的——但你會發現，每一項代價的背後都藏著報酬：</p>
        <div className="space-y-3">
          {costs.map((c, i) => (
            <div key={i} className="bg-white rounded-2xl border border-rose-100 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-rose-50 transition-colors" onClick={() => setOpenCost(openCost === i ? null : i)}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{c.icon}</span>
                  <h4 className="font-bold text-rose-800" style={{fontSize:"18px"}}>{c.num}. {c.title}</h4>
                </div>
                {openCost === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>{(openCost === i) && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <div className="px-5 pb-5 space-y-3">
                    <div className="bg-rose-50 rounded-xl p-4 border border-rose-200"><p className="text-rose-700" style={{fontSize:"16px"}}>💸 <strong>代價：</strong>{c.detail}</p></div>
                    <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200"><p className="text-emerald-700" style={{fontSize:"16px"}}>🔄 <strong>翻轉：</strong>{c.flip}</p></div>
                    {c.scripture && <div className="bg-blue-50 rounded-xl p-3 border border-blue-200"><p className="text-blue-700 text-sm font-medium">📖 {c.scripture}</p></div>}
                    <p className="text-xs text-slate-400">{c.page}</p>
                  </div>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 結論 ========== */}
      <div className="bg-slate-800 rounded-3xl p-6 md:p-8 text-white">
        <h3 className="font-bold text-amber-300 mb-4" style={{fontSize:"22px"}}>🏆 結果：值上一千倍</h3>
        <p className="text-slate-200 leading-relaxed mb-4" style={{fontSize:"17px"}}>在成為有感染力的基督徒這件事上，我們可以很有把握地說，事情同樣如此。沒錯，這裏面是要付代價、要努力、要冒險，又牽涉到很多複雜情況，但這一切都值得——值上一千倍。</p>
        <div className="bg-amber-900/30 rounded-xl p-5 border border-amber-700">
          <p className="text-amber-200 font-bold text-center leading-relaxed" style={{fontSize:"19px"}}>「你愈仔細看，就愈能看出報酬很高，代價卻相對地低，特別是當我們了解它們根本算不上是代價。這些投資會帶給人永存的報酬。」</p>
          <p className="text-amber-400 text-sm text-center mt-2">(P42)</p>
        </div>
      </div>

      {/* ========== 神學深度探討 ========== */}
      <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-6 md:p-8 border border-violet-100 shadow-sm">
        <h3 className="font-bold text-violet-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}><BookMarked className="w-6 h-6 text-violet-600" />神學深度探討<span className="ml-2 text-xs bg-violet-100 text-violet-500 px-2 py-1 rounded-full border border-violet-200">延伸學習</span></h3>
        <div className="space-y-3 mt-4">
          {theologyTopics.map((topic, i) => (
            <div key={i} className="bg-white rounded-2xl border border-violet-100 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-violet-50 transition-colors" onClick={() => setOpenTheology(openTheology === i ? null : i)}>
                <h4 className="font-bold text-violet-800" style={{fontSize:"18px"}}>{topic.title}</h4>
                {openTheology === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>{(openTheology === i) && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <div className="px-5 pb-5 space-y-3">
                    <p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>{topic.content}</p>
                    <div className="bg-violet-50 rounded-xl p-4 border border-violet-100"><div className="font-bold text-violet-700 mb-2" style={{fontSize:"15px"}}>📖 相關經文：</div>{topic.scriptures.map((s: string, j: number) => (<p key={j} className="text-slate-600 text-sm mb-1.5">{s}</p>))}</div>
                    <div className="bg-amber-50 rounded-xl p-4 border border-amber-200"><div className="font-bold text-amber-700 mb-1" style={{fontSize:"15px"}}>💬 反思：</div><p className="text-slate-600" style={{fontSize:"16px"}}>{topic.reflection}</p></div>
                  </div>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 在我們的處境中 ========== */}
      <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-6 md:p-8 border border-orange-100 shadow-sm">
        <h3 className="font-bold text-orange-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}><Heart className="w-6 h-6 text-orange-600" />在我們的處境中<span className="ml-2 text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full border border-orange-200">生活應用</span></h3>
        <div className="space-y-3 mt-4">
          {taiwanExamples.map((ex, i) => (
            <div key={i} className="bg-white rounded-2xl border border-orange-100 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-orange-50 transition-colors" onClick={() => setOpenTaiwan(openTaiwan === i ? null : i)}>
                <h4 className="font-bold text-orange-800" style={{fontSize:"18px"}}>{ex.title}</h4>
                {openTaiwan === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>{(openTaiwan === i) && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <div className="px-5 pb-5 space-y-3">
                    <div className="bg-orange-50 rounded-xl p-4 border border-orange-100"><div className="font-bold text-orange-700 mb-2" style={{fontSize:"15px"}}>📍 情境：</div><p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>{ex.scenario}</p></div>
                    <div className="bg-green-50 rounded-xl p-4 border border-green-200"><div className="font-bold text-green-700 mb-1" style={{fontSize:"15px"}}>🎯 挑戰：</div><p className="text-slate-600" style={{fontSize:"16px"}}>{ex.challenge}</p></div>
                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-200"><div className="font-bold text-blue-700 mb-1" style={{fontSize:"15px"}}>💡 回扣本書：</div><p className="text-slate-600" style={{fontSize:"16px"}}>{ex.insight}</p></div>
                  </div>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 四週挑戰 ========== */}
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-6 md:p-8 border border-indigo-100 shadow-sm">
        <h3 className="font-bold text-indigo-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}><Target className="w-6 h-6 text-indigo-600" />四週操練挑戰</h3>
        <div className="space-y-3 mt-4">
          {weeklyChallenge.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-indigo-100 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-indigo-50 transition-colors" onClick={() => setOpenChallenge(openChallenge === i ? null : i)}>
                <div className="flex items-center gap-3"><span className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-700 font-bold text-sm">{item.week.slice(-2)}</span><h4 className="font-bold text-indigo-800" style={{fontSize:"18px"}}>{item.title}</h4></div>
                {openChallenge === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>{(openChallenge === i) && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <div className="px-5 pb-5 space-y-3">
                    <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100"><div className="font-bold text-indigo-700 mb-2" style={{fontSize:"15px"}}>🎯 任務：</div><p className="text-slate-600" style={{fontSize:"16px"}}>{item.mission}</p></div>
                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-200"><div className="font-bold text-blue-700 mb-1" style={{fontSize:"15px"}}>📖 經文：</div><p className="text-slate-600" style={{fontSize:"16px"}}>{item.scripture}</p></div>
                    <div className="bg-amber-50 rounded-xl p-4 border border-amber-200"><div className="font-bold text-amber-700 mb-1" style={{fontSize:"15px"}}>📓 日記：</div><p className="text-slate-600" style={{fontSize:"16px"}}>{item.journalPrompt}</p></div>
                  </div>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 小組討論 ========== */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-sm">
        <h3 className="font-bold text-emerald-800 mb-6 flex items-center gap-2" style={{fontSize:"24px"}}><MessageSquareQuote className="w-6 h-6 text-emerald-600" />小組討論問題<span className="ml-3 bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full font-normal border border-emerald-200" style={{fontSize:"13px"}}>小組使用</span></h3>
        <div className="space-y-6">
          {groupDiscussion.map((section, i) => (
            <div key={i}><h4 className="font-bold text-emerald-700 mb-3 flex items-center gap-2" style={{fontSize:"20px"}}><span className="w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-800 font-bold" style={{fontSize:"14px"}}>{i+1}</span>{section.category}</h4>
              <div className="space-y-2 ml-10">{section.questions.map((q: string, j: number) => (<div key={j} className="bg-white rounded-xl p-4 border border-emerald-100"><p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>{q}</p></div>))}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 本章總結 ========== */}
      <div className="bg-gradient-to-br from-teal-50 to-slate-50 border border-teal-100 rounded-3xl p-6 md:p-8">
        <h3 className="font-bold text-teal-700 mb-4" style={{fontSize:"22px"}}>📝 第二章總結：報酬遠遠超過代價</h3>
        <div className="space-y-3">
          <div className="bg-emerald-50 border-emerald-200 border rounded-xl p-4"><div className="font-bold text-emerald-700 mb-1.5" style={{fontSize:"17px"}}>🏆 七項報酬 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>P27-38</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>激動人心的活動→滿足→屬靈成長→屬靈信心→經得起考驗的投資→作神代言人的榮耀→三贏結局（你獲益、別人獲益、神也獲益）。</p></div>
          <div className="bg-rose-50 border-rose-200 border rounded-xl p-4"><div className="font-bold text-rose-700 mb-1.5" style={{fontSize:"17px"}}>💸 五項代價 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>P39-41</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>時間和精力→閱讀與學習→金錢→被拒絕的風險→生活變複雜。但每一項代價的背後都藏著報酬。</p></div>
          <div className="bg-amber-50 border-amber-200 border rounded-xl p-4"><div className="font-bold text-amber-700 mb-1.5" style={{fontSize:"17px"}}>💎 核心洞見 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>P42</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>代價其實就是報酬。這些投資會帶給人永存的報酬。值上一千倍！</p></div>
        </div>
      </div>

      {/* ========== 反思與行動 ========== */}
      <div className="bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-800 shadow-lg text-white">
        <h3 className="font-bold text-orange-300 mb-6 flex items-center" style={{fontSize:"27px"}}><Brain className="w-7 h-7 mr-3" />深度反思與行動指南</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="font-bold text-orange-200 mb-4 flex items-center" style={{fontSize:"22px"}}><Brain className="w-5 h-5 mr-2 text-orange-400" /> 反思問題</h4>
            <ul className="space-y-4 text-slate-300">{reflections.map((r, i) => (<li key={i} className="flex items-start" style={{fontSize:"16px"}}><span className="text-orange-400 mr-2 font-bold">{i+1}.</span> {r}</li>))}</ul>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="font-bold text-emerald-300 mb-4 flex items-center" style={{fontSize:"22px"}}><Target className="w-5 h-5 mr-2 text-emerald-400" /> 具體行動方案</h4>
            <ul className="space-y-4 text-slate-300">{actions.map((a, i) => (<li key={i} className="flex items-start" style={{fontSize:"16px"}}><span className="text-emerald-400 mr-2 font-bold">{i+1}.</span> {a}</li>))}</ul>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
}
