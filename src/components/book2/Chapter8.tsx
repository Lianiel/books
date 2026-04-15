import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, BookOpen, ChevronDown, ChevronUp, Target, Brain, MessageSquareQuote, Layers, BookMarked, Users, ChevronRight, Shield, Clock } from 'lucide-react';

export default function Chapter8({ expandAll }: { expandAll?: boolean }) {
  const [openElement, setOpenElement] = useState<number | null>(null);
  const [openHistory, setOpenHistory] = useState<number | null>(null);
  const [openDetail, setOpenDetail] = useState<number | null>(null);
  const [openApplication, setOpenApplication] = useState<number | null>(null);
  const [openTheology, setOpenTheology] = useState<number | null>(null);
  const [openChallenge, setOpenChallenge] = useState<number | null>(null);
  const [openTaiwan, setOpenTaiwan] = useState<number | null>(null);

  const trellisConcept = {
    greek: "「規約」（rule）是從希臘文演變來的，意思就是「棚架」。架設棚架，葡萄藤就能離開地面往上長，結實更多。",
    definition: "生活的規約就像棚架，有助於我們住在基督裡，靈性上多結果子。簡言之，生活的規約就是刻意、有計畫、按部就班讓神在凡事居首位。",
    foundation: "「生活規約」的起點與基礎，就是渴望親近神、愛神。",
    page: "p.230"
  };

  const danielStory = {
    background: "尼布甲尼撒率領巴比倫大軍攻占耶路撒冷，將居民擄回為奴。青年但以理被帶到巴比倫皇宮，送進一流大學，學習充斥異教思維的世界觀——神話、占星術、巫術和魔術。巴比倫人甚至幫他改了名字。",
    purpose: "巴比倫的目的只有一個：消弭但以理這個跟隨神的人與他們之間的差異，讓他融入他們的文化。",
    method: "但以理有的，只是一個計畫——一套生活規約。他知道「週日上教會、每天靈修十五分鐘」是不夠的。他知道他在對抗的是非常強大的敵人。他不吃被玷汙的王膳（但一），規律操練「日課」（但六）。",
    result: "但以理利用這個方法，讓自己的靈性在惡劣環境下不致餓死，反而成為不平凡的屬神之人。(p.232-233)"
  };

  const ruleHistory = [
    { era: "第三～五世紀", event: "沙漠教父", detail: "一群男女遠離社會，深入埃及、敘利亞、阿拉伯的沙漠和曠野尋找神。修士們形成群體，照著約定好的計畫每天工作、禱告、讀聖經——這就是最早的「生活規約」。", icon: "🏜️" },
    { era: "290-345年", event: "大聖帕科繆", detail: "目前已知的第一份「生活規約」，是大聖帕科繆為所屬的埃及修道團體所設計的。後來陸續有人參考這份規約設計出不同的版本。", icon: "📜" },
    { era: "480-547年", event: "聖本篤", detail: "聖本篤所設計的《聖本篤會規》，一千五百年來深深影響了西方的隱修制度，至今仍被世界各地教會奉為生活指標。他在規約最前面寫道：「你的行為應該與這世界有所分別。愛基督的心必須超過一切。」", icon: "⛪" }
  ];

  const twelveElements = [
    { category: "禱告", items: [
      { num: 1, name: "聖經", detail: "神會在聖經裡對我們說話。你可以一年讀經一遍、按《公禱書》選讀、或默想短篇經文。作者每週操練聖言誦禱（Lectio Divina）——慢慢讀、細細咀嚼，讓神的話像麵包裡的酵母，滋養生命、改變生命。(p.237)", icon: "📖" },
      { num: 2, name: "靜默與獨處", detail: "沙漠教父亞佳冬「在嘴巴裡含一塊石頭長達三年，直到學會靜默」。魏樂德說：「靜默最能把我們剝得精光，逼著我們去面對生命中最赤裸的一面。」作者每天日課用五到二十分鐘靜默，一週數次。(p.237-238)", icon: "🤫" },
      { num: 3, name: "日課祈禱", detail: "作者喜歡每天的日課有清楚的架構——參考蒂克爾的《神聖時光》安排早禱、午禱和晚禱，主要以詩篇禱告。也很喜歡在早上的日課閱讀經典靈修經文。(p.238)", icon: "🕯️" },
      { num: 4, name: "閱讀", detail: "聖本篤每天花三個小時閱讀和學習——他建議到修道院時要看修士有沒有在閱讀，而不是看有沒有在工作。閱讀可包括歸納式查經、研討會、上課、接受屬靈前輩教導。目的不只獲取資訊，也為了生命被塑造。(p.238-239)", icon: "📚" }
    ], color: "violet" },
    { category: "休息", items: [
      { num: 5, name: "守安息日", detail: "每週安排連續二十四小時守安息——停下腳步、好好休息、歡喜快樂、默想神。作者會在安息日刻意不想教會的事、不開信箱、不聽語音留言、不看時鐘，完全就是「耍廢」。事先為安息日做準備。(p.239-240)", icon: "🌿" },
      { num: 6, name: "過簡樸生活", detail: "挪去令人分心的事。保羅說：「我願你們無所掛慮。」作者家的孩子不會同時學小提琴又參加三種運動；只有一張信用卡；退掉第四台改用串流。堅守什一奉獻——不是律法，而是幫助我們不受金錢捆綁。(p.240-241)", icon: "✂️" },
      { num: 7, name: "玩樂與休閒", detail: "參加單純、健康的活動，幫助你重新得力。很多基督徒過得「沒有樂趣」。潔芮說人生座右銘：「人生很難，既然如此，就儘量找些樂趣來榮耀神。」享受健康的娛樂是非常深奧的神學議題。(p.241-242)", icon: "🎉" }
    ], color: "emerald" },
    { category: "工作/活動", items: [
      { num: 8, name: "服事與宣教", detail: "問自己：「在這個階段，神要我用什麼方式來服事祂？」包括為無家者提供飯食、輔導初信者、在種族文化差異中搭橋、守護正義和環境、海外宣教。有些人的挑戰是離開舒適圈，有些人（像作者）是承認有限、不要越界。(p.242)", icon: "🤝" },
      { num: 9, name: "照顧身體", detail: "照顧身體如同禱告和敬拜一樣屬靈。運動計畫、飲食均衡、充足睡眠、年度健檢——這些都需要列入規約。傾聽身體的聲音和傾聽神的聲音一樣重要——頭痛、胃痛、失眠、疲累可能是神要你放慢腳步。(p.242-243)", icon: "💪" }
    ], color: "blue" },
    { category: "關係", items: [
      { num: 10, name: "情感健康", detail: "留意自己的感覺，每週分幾次記錄下來，並告訴神。處理從小到大各種「失去」造成的遺憾與悲傷。可行做法：閱讀、寫日記、和信任的朋友深談、參加悲傷處理退修會、學習妥善解決衝突的人際技巧。(p.243)", icon: "❤️" },
      { num: 11, name: "家庭", detail: "無論單身或已婚都適用。作者會刻意投資婚姻——潔芮喜歡戶外，他喜歡書店，雖然也喜歡一起到戶外但需要刻意安排。他們是彼此最好的朋友。單身者：你對和父母、兄弟姊妹的關係有什麼計畫？(p.244)", icon: "👨‍👩‍👧‍👦" },
      { num: 12, name: "群體（同行夥伴）", detail: "找什麼樣的夥伴同行？作者會固定和教會兩位長老聊靈性光景，另有一位認識多年的導師偶爾電話聯絡。每隔一兩個月去找一位屬靈輔導，對方會安靜傾聽。每隔一段時間重新檢討規約——至少一年一次。(p.244-245)", icon: "🤲" }
    ], color: "rose" }
  ];

  const categoryColorMap: Record<string, { bg: string; border: string; text: string; light: string }> = {
    violet: { bg: "bg-violet-50", border: "border-violet-200", text: "text-violet-800", light: "bg-violet-100" },
    emerald: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-800", light: "bg-emerald-100" },
    blue: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-800", light: "bg-blue-100" },
    rose: { bg: "bg-rose-50", border: "border-rose-200", text: "text-rose-800", light: "bg-rose-100" }
  };

  const prayerExample = [
    "在工作時用心禱告（「主耶穌基督，神的兒子，開恩可憐我這個罪人」），一天數次",
    "午餐時間用十五分鐘靜默，一週三次",
    "晚上就寢前操練依納爵的省察式禱告，一週三次",
    "大齋節期間（復活節前四十天），每週三禁食一餐"
  ];

  const broaderApplications = [
    { scope: "地方教會", detail: "每個教會都有各自一套生活規約，但多半不太明確。教會的規約可能包括：使命宣言、敬拜、裝備、小組與群體、權柄、聖餐與洗禮、殷勤接待、新會友、窮人與邊緣人、普世宣教、情感健康等。在教會的大規約下，仍然要邀請每個成員投入個人的生活規約。", icon: "⛪", page: "p.246-247" },
    { scope: "事奉小組或一般小組", detail: "事奉小組（如敬拜團隊和宣教團隊）往往會有一套約定俗成的生活規約，大夥兒依循這套規約一同跟隨基督。大家同意之後，就在約定的時間一起操練和培養跟隨基督的習慣。", icon: "👥", page: "p.247" },
    { scope: "家庭", detail: "在家庭裡建立生活規約的人很少，但如果有的話，全家會更有活力和共識。這值得認真考慮。", icon: "🏠", page: "p.247" }
  ];

  const closingStory = {
    character: "卡羅·卡雷度（Carol Carretto）",
    context: "耶穌小兄弟會成員，曾在北非和穆斯林一起生活十年。有天騎駱駝穿越撒哈拉沙漠，遇到五十個男人在豔陽下修路，意外發現他的朋友保羅也在當中。",
    paulStory: "保羅曾在巴黎擔任工程師，為法國研發原子彈。神呼召他放下一切前往北非。他的母親問卡羅：「他為什麼不能在教會擔任知識分子的工作？不是更有用嗎？」但保羅更嚮往祈禱的生活。",
    wisdom: "「我只能說：活出愛，被愛征服，愛就會告訴你該做什麼。」(p.248-249)"
  };

  const theologyTopics = [
    {
      title: "葡萄藤與棚架：生活規約的聖經根基",
      content: "耶穌在約翰福音十五章說：「我是葡萄樹，你們是枝子。常在我裡面的，我也常在他裡面，這人就多結果子。」生活規約就像棚架——它本身不是目標，而是幫助葡萄藤（我們的生命）能離開地面往上長、多結果子的工具。沒有棚架的葡萄藤會在地面爬行，容易腐爛、被蟲吃、結不出好果子。同樣，沒有生活規約的基督徒容易在屬靈上「載浮載沉、毫無目標、隨波逐流」(p.231)。但棚架不是牢籠——它提供方向而非限制自由。好的規約會隨著季節和生命階段調整。(p.230)",
      scriptures: ["約十五4-5 你們要常在我裡面，我也常在你們裡面。枝子若不常在葡萄樹上，自己就不能結果子。", "加五22-23 聖靈所結的果子，就是仁愛、喜樂、和平、忍耐、恩慈、良善、信實、溫柔、節制。"],
      reflection: "你目前的「棚架」（屬靈操練的架構）是什麼？它足以支撐你的生命結出好果子嗎？還是你的葡萄藤正在地面爬行？"
    },
    {
      title: "但以理模式：在巴比倫中保守信仰",
      content: "但以理的處境和我們驚人地相似：他被帶進一個充斥異教價值觀的環境（我們活在後現代世俗文化中）；他被要求融入主流文化（我們被社交媒體、消費主義、成功神學同化）；他甚至被改了名字（我們的身分認同不斷被文化重新定義）。但以理沒有成為離群索居的隱修士，而是在巴比倫體制內工作，同時靠著生活規約保守自己的信仰。他的秘訣：不吃被玷汙的王膳（設立界線）+ 一天三次禱告（規律日課）= 在四十年的巴比倫生涯中始終忠於神。(p.232-233)",
      scriptures: ["但一8 但以理卻立志不以王的膳和王所飲的酒玷汙自己。", "但六10 但以理知道這禁令蓋了玉璽，就到自己家裡……一日三次，雙膝跪在他神面前禱告感謝，與素常一樣。"],
      reflection: "你的「巴比倫」是什麼？什麼文化力量正在試圖同化你的信仰？你需要設立什麼「界線」和什麼「日課」來保守自己？"
    },
    {
      title: "情感健康與默觀靈修的結合",
      content: "情感健康與默觀靈修在現代基督教中很少被結合——但兩者合併操練能掀起靈性革命。情感健康讓我們能識別、管理感覺、同理他人、打破自我毀滅模式、成熟解決衝突。默觀靈修讓我們放慢腳步、覺察神的愛、操練靜默獨處、在凡事中看見神。作者自己的突破：在靜默獨處中發現他對神很憤怒——原來他事奉的「神」比較像他的父母（完美主義者、苛刻的老闆），而非聖經裡的神。(p.257-262)",
      scriptures: ["太十一28 凡勞苦擔重擔的人可以到我這裡來，我就使你們得安息。", "約壹四20 人若說我愛神卻恨他的弟兄，就是說謊話的。"],
      reflection: "你的「神觀」是否被原生家庭影響？你事奉的「神」比較像聖經裡的天父，還是像你的父母或曾經傷害你的權威人物？"
    }
  ];

  const taiwanExamples = [
    {
      title: "📋 為什麼台灣基督徒需要生活規約",
      scenario: "台灣基督徒的典型屬靈操練：主日崇拜 + 週間小組 + 每天靈修十五分鐘。這些操練是好的，但作者說這就像「暴風雪中的繩索不夠用」。在台灣高度競爭的社會中——加班文化、升學壓力、社群媒體資訊轟炸、政治紛擾——這些操練真的足以讓我們「從早到晚都意識到神」嗎？大部分人的回答是：不夠。",
      challenge: "用一週時間誠實記錄你目前的「隱形規約」——你每天在什麼時候做什麼屬靈操練？一週下來花在禱告、讀經、靜默、休息、服事的時間各是多少？然後問自己：「這個規約足以幫助我在二十一世紀的台灣抵擋文化的暴風雪嗎？」",
      insight: "作者說：「事實上，每個人都在不知不覺當中，依循著一套規約在建立靈性生活。」(p.231) 問題不是你有沒有規約，而是你的規約是「刻意設計的」還是「自動駕駛的」。"
    },
    {
      title: "🍵 十二元素的台灣版實踐",
      scenario: "十二個元素看起來很多，但其實很多已經存在於台灣基督徒的生活中——只是沒有被整合。例如：「閱讀」可以是你已經在讀的靈修書；「玩樂」可以是你已經在做的運動或爬山；「群體」就是你的小組。關鍵不是增加更多活動，而是把現有的活動「轉化」為有意識的屬靈操練。",
      challenge: "從十二個元素中，選出你目前最缺乏的兩個（很多台灣基督徒會發現是「靜默獨處」和「玩樂休閒」）。先從這兩個開始，設計一個為期四週的迷你規約。記住：一次只加一到兩項。",
      insight: "作者強調：「前面幾個月最好先從一、兩個元素開始。」(p.236) 不要一次全部實行——那會變成另一種忙碌和壓力。生活規約的目的是親近神，不是增加待辦事項。"
    },
    {
      title: "💰 簡樸生活在高消費台灣的挑戰",
      scenario: "台灣的消費文化非常發達——百貨公司週年慶、雙11購物節、網紅推薦、便利商店集點——刺激消費的誘惑無處不在。基督徒也不例外：教會活動要辦得「有品質」、小組聚餐要去「好餐廳」、短宣要選「有特色的地方」。什一奉獻在台灣教會中的實踐率到底有多高？「過簡樸生活」在這個環境中是反文化的操練。",
      challenge: "做一次「屬靈斷捨離」：(1)檢視你的信用卡帳單，找出三項「非必要」的消費 (2)取消一個你不真正需要的訂閱服務 (3)這個月把省下來的金額額外奉獻。觀察自己內心的感受——是自由還是焦慮？",
      insight: "耶穌說：「你的財寶在哪裡，你的心也在那裡。」(p.241) 什一奉獻不是律法，而是一個強大的原則——幫助我們不受金錢勢力捆綁，同時學習依靠神作安全保障和供應的源頭。"
    },
    {
      title: "👥 在台灣教會中建立「同行夥伴」",
      scenario: "台灣教會的小組系統通常以「牧養」和「團契」為主——查經、分享、禱告、吃飯。但很少有小組會成為「生活規約的同行夥伴」——彼此問責、分享靈性光景、坦誠面對軟弱。原因可能是：華人文化不習慣暴露真實自我、教會中的「屬靈面具」太厚、缺乏安全的信任關係。",
      challenge: "在你的小組或教會中，找一到兩個你真正信任的人，提議成為「靈性同行夥伴」。每月見面一次，分享：(1)這個月你的生活規約執行情況 (2)你目前最大的屬靈掙扎 (3)你需要什麼幫助。作者自己有長老、導師和屬靈輔導——你也需要。",
      insight: "作者說：「有人同行比較不會半途而廢。」(p.236) 生活規約不是孤獨的操練——它需要群體的支持。但這個群體必須是安全的、誠實的、彼此問責的。"
    },
    {
      title: "🔄 季節性規約：隨生命階段調整",
      scenario: "生活規約不是一成不變的。大學生的規約和職場新鮮人不同；新婚夫妻和有幼兒的家庭不同；中年轉換跑道和退休者不同。在台灣的生活節奏中，每年還有教會特殊季節：將臨期、大齋期、復活節、培靈會。這些都是重新檢視和調整規約的好時機。",
      challenge: "現在就草擬一份為期四週的「生活規約初稿」。用十二個元素作為架構，但只選擇其中四到五個你要認真操練的。四週後回顧並調整。聖奧古斯丁每週檢討一次規約——你至少每季檢討一次。",
      insight: "聖本篤說：「不要因為害怕就半途而廢。這條路一開始必然是狹窄的，但只要憑信心繼續，心靈就會被愛充滿，洋溢難以言喻的喜悅。」(p.237) 勇於嘗試，不怕犯錯。"
    }
  ];

  const weeklyChallenge = [
    {
      week: "第一週", title: "盤點你的「隱形規約」",
      mission: "用一週時間記錄你目前實際的生活節奏和屬靈操練。每天晚上花五分鐘寫下：(1)今天我花了多少時間在禱告/讀經/靜默？(2)今天我花了多少時間在工作/社群媒體/娛樂？(3)我是否有「停下來」的時刻？(4)我的身體狀況如何——有運動、睡足嗎？一週後統計，看看你目前的「隱形規約」長什麼樣子。",
      scripture: "詩一三九23-24「神啊，求你鑒察我，知道我的心思……引導我走永生的道路。」",
      journalPrompt: "看到自己的「隱形規約」後，你有什麼感覺？你的時間分配是否反映你所說的「優先順序」？如果一個陌生人看你的行事曆，他會認為你的生命中心是神、是工作、還是手機？"
    },
    {
      week: "第二週", title: "選擇你的元素",
      mission: "從十二個元素中，選出目前最需要加強的兩到三個。為每一個設定具體、可衡量的目標。例如：(1)靜默獨處→每天早上起床後靜默五分鐘 (2)安息日→這週六不看手機八小時 (3)照顧身體→本週運動三次。把這些寫在一張紙上，貼在你每天看得到的地方。",
      scripture: "約十五5「常在我裡面的，我也常在他裡面，這人就多結果子。」",
      journalPrompt: "你選擇了哪些元素？為什麼選這些？你預期最大的障礙是什麼？你需要做什麼調整才能讓這些操練真的發生（而不只是停留在紙上）？"
    },
    {
      week: "第三週", title: "草擬你的生活規約",
      mission: "參考十二元素的四大類（禱告、休息、工作/活動、關係），為自己草擬一份為期四週的生活規約。每一大類至少選一項。盡量具體：不是「多禱告」，而是「每天早上6:30-6:45讀詩篇並靜默」。不是「多休息」，而是「每週六下午2-6點不碰手機和電腦」。找一位信任的人分享你的規約，請對方幫助你堅持。",
      scripture: "來十二1-2「我們既有這許多的見證人……就當放下各樣的重擔……奔那擺在我們前頭的路程。」",
      journalPrompt: "草擬規約的過程中，你發現什麼關於自己的事？哪些元素讓你興奮？哪些讓你抗拒？你的抗拒是否透露了什麼？"
    },
    {
      week: "第四週", title: "執行並回顧",
      mission: "開始執行你的生活規約。每天結束時用兩分鐘做依納爵的省察禱告：(1)今天我在什麼時候意識到神的同在？(2)什麼時候讓我覺得正在向神靠近？(3)什麼時候我偏離了規約？(4)明天我可以做什麼調整？週末回顧整週：哪些元素實際可行？哪些需要調整？",
      scripture: "腓三13-14「我只有一件事，就是忘記背後，努力面前的，向著標竿直跑。」",
      journalPrompt: "執行一週後的感受是什麼？你是否經歷到「棚架」的支撐力？你是否開始感受到生活節奏的不同？下一個四週你想做什麼調整？"
    }
  ];

  const groupDiscussion = [
    {
      category: "🌿 生活規約的概念",
      questions: [
        "在讀這一章之前，你對「生活規約」有什麼印象？你覺得它是自由的還是束縛的？讀完之後有改變嗎？",
        "作者說每個人其實都有一套「隱形規約」——你的隱形規約是什麼？它是幫助你親近神還是遠離神？",
        "但以理在巴比倫的生活規約只有兩個核心：不吃王膳＋規律日課。如果你只能選兩個核心操練，你會選什麼？",
        "「棚架」的比喻對你有什麼啟發？你目前的「棚架」是否足以支撐你的生命結出好果子？"
      ]
    },
    {
      category: "📝 十二元素",
      questions: [
        "十二個元素中，你目前做得最好的是哪一個？做得最差的又是哪一個？",
        "「玩樂與休閒」被列為屬靈操練的一部分——你同意嗎？你的生活中有足夠的「健康的樂趣」嗎？",
        "「過簡樸生活」在你目前的生活中意味著什麼？你願意做什麼改變？",
        "「照顧身體如同禱告和敬拜一樣屬靈」——這對你來說是新的觀念嗎？"
      ]
    },
    {
      category: "🤝 同行與實踐",
      questions: [
        "你願意和小組中的一到兩個人成為「生活規約同行夥伴」嗎？你希望怎麼進行？",
        "作為小組，我們是否可以一起草擬一份為期四週的「小組生活規約」？每個人可以有個人的部分，但也有共同的操練。",
        "卡羅的故事中那句「活出愛，被愛征服，愛就會告訴你該做什麼」——這對你有什麼意義？",
        "回顧整本書的八章，哪一章對你影響最大？你的生命有什麼改變？接下來你最想操練的是什麼？"
      ]
    }
  ];

  const reflections = [
    "我目前的生活是在「刻意的規約」上建立的，還是在「自動駕駛」中度過？",
    "如果但以理需要生活規約來抵擋巴比倫的影響，我需要什麼來抵擋我的「巴比倫」？",
    "十二個元素中，我最缺乏的是哪些？這些缺乏對我的靈性造成了什麼影響？",
    "我是否把「忙碌服事」當作「親近神」的替代品？我的服事是否出於「對基督的愛超過一切」？",
    "我的「神觀」是否被原生家庭扭曲？我事奉的「神」是聖經裡的天父，還是我父母的投射？",
    "如果聖本篤說「愛基督的心必須超過一切」——在我的生活中，什麼東西其實排在基督前面？",
    "卡羅說「活出愛，被愛征服，愛就會告訴你該做什麼」——我是否讓愛來引導我的生活規約？"
  ];

  const actions = [
    "盤點隱形規約：用一週記錄你目前實際的時間分配——禱告、讀經、工作、社群媒體、休息各佔多少？",
    "草擬四週規約：從十二元素中選四到五個，設定具體可衡量的目標。貼在看得到的地方。",
    "找同行夥伴：找一到兩個信任的人，約定每月見面一次分享規約執行情況和靈性掙扎。",
    "設計家庭規約：和家人一起設計簡單的家庭規約——包括每週一次的家庭安息日活動、飯前禱告、睡前分享。",
    "屬靈斷捨離：從「過簡樸生活」開始——取消一個不必要的訂閱、減少一項過度投入的活動、把省下的時間用來操練靜默。",
    "做省察禱告：每天睡前花五分鐘做依納爵的省察禱告——回顧一天，找出意識到神的時刻和偏離的時刻。"
  ];

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="space-y-8">

      {/* ========== 章節標題 ========== */}
      <div className="bg-gradient-to-br from-slate-800 via-amber-900 to-orange-900 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="relative">
          <div className="flex items-center gap-2 mb-2"><BookOpen className="w-5 h-5 text-amber-300" /><span className="text-amber-300 text-sm tracking-widest">第 8 章</span></div>
          <h1 className="font-extrabold mb-3" style={{fontSize:"30px"}}>進一步建立生活規約</h1>
          <p className="text-amber-200 text-lg mb-4">愛基督勝於一切</p>
          <p className="text-slate-200 leading-relaxed mb-3" style={{fontSize:"17px"}}>本章整理全書所有原則，帶領我們認識「生活規約」這個古老寶藏——從棚架的比喻、但以理的榜樣、到十二個具體元素，幫助我們刻意、有計畫地建立以基督為中心的生活。</p>
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
            <p className="text-slate-200 leading-relaxed italic" style={{fontSize:"17px"}}>「你的行為應該與這世界有所分別。愛基督的心必須超過一切。」——聖本篤 <span className="text-amber-300 text-sm ml-1">(p.245)</span></p>
          </div>
        </div>
      </div>

      {/* ========== 開場故事：咕咕叫 ========== */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 md:p-8 border border-amber-200 shadow-sm">
        <h3 className="font-bold text-amber-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><BookOpen className="w-6 h-6 text-amber-600" />開場故事：公雞「咕咕叫」與大龍<span className="ml-2 text-xs bg-amber-100 text-amber-600 px-2 py-1 rounded-full border border-amber-200">(p.229)</span></h3>
        <div className="bg-white rounded-xl p-5 border border-amber-100">
          <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>在沃爾特·溫傑林的《褐牛之書》中，當大魔王「大龍」威脅要摧毀動物王國，公雞「咕咕叫」憑著記憶召集大家每天進行日課，奮勇抗敵，最後打敗大龍。在這場對抗邪惡的戰爭中，這群動物憑藉的就是強大的信心和實際的屬靈操練。在外人看來，用這種方式要抵抗大惡者無異以卵擊石——但他們勝了。</p>
        </div>
      </div>

      {/* ========== 棚架的比喻 ========== */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><Layers className="w-6 h-6 text-amber-600" />古老的寶藏：生活規約<span className="ml-2 text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded-full border border-slate-200">(p.230)</span></h3>
        <div className="bg-amber-50 rounded-xl p-5 border border-amber-200 mb-4">
          <p className="text-amber-900 font-bold mb-2" style={{fontSize:"17px"}}>🌿 {trellisConcept.greek}</p>
          <p className="text-slate-700 leading-relaxed" style={{fontSize:"16px"}}>{trellisConcept.definition}</p>
        </div>
        <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
          <p className="text-emerald-800 font-bold" style={{fontSize:"16px"}}>💡 {trellisConcept.foundation}</p>
        </div>
      </div>

      {/* ========== 但以理的生活規約 ========== */}
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-6 md:p-8 border border-indigo-100 shadow-sm">
        <h3 className="font-bold text-indigo-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><Shield className="w-6 h-6 text-indigo-600" />但以理的「生活規約」<span className="ml-2 text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full border border-indigo-200">(p.232-233)</span></h3>
        <div className="space-y-3">
          <div className="bg-white rounded-xl p-4 border border-indigo-100"><p className="text-slate-600" style={{fontSize:"16px"}}>🏛️ <strong>背景：</strong>{danielStory.background}</p></div>
          <div className="bg-white rounded-xl p-4 border border-indigo-100"><p className="text-slate-600" style={{fontSize:"16px"}}>🎯 <strong>目的：</strong>{danielStory.purpose}</p></div>
          <div className="bg-white rounded-xl p-4 border border-indigo-100"><p className="text-slate-600" style={{fontSize:"16px"}}>📋 <strong>方法：</strong>{danielStory.method}</p></div>
          <div className="bg-indigo-100 rounded-xl p-4 border border-indigo-200"><p className="text-indigo-800 font-bold" style={{fontSize:"16px"}}>✨ {danielStory.result}</p></div>
        </div>
      </div>

      {/* ========== 規約簡史 ========== */}
      <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-6 md:p-8 border border-violet-100 shadow-sm">
        <h3 className="font-bold text-violet-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><Clock className="w-6 h-6 text-violet-600" />「規約」簡史<span className="ml-2 text-xs bg-violet-100 text-violet-500 px-2 py-1 rounded-full border border-violet-200">(p.233)</span></h3>
        <div className="space-y-3">
          {ruleHistory.map((h, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-violet-100 cursor-pointer hover:border-violet-300 transition-colors" onClick={() => setOpenHistory(openHistory === i ? null : i)}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{h.icon}</span>
                <div><span className="font-bold text-violet-700 text-sm">{h.era}</span><span className="font-bold text-violet-800 ml-2" style={{fontSize:"16px"}}>{h.event}</span></div>
              </div>
              <AnimatePresence>{(expandAll || openHistory === i) && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <p className="text-slate-600 mt-2 ml-11" style={{fontSize:"15px"}}>{h.detail}</p>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 十二個元素 ========== */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}><Target className="w-6 h-6 text-amber-600" />生活規約的十二個元素<span className="ml-2 text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded-full border border-slate-200">(p.234-245)</span></h3>
        <p className="text-slate-500 mb-4" style={{fontSize:"16px"}}>分為四大類。可以隨意增減，由你決定。一次先從一到兩個元素開始：</p>
        <div className="space-y-6">
          {twelveElements.map((cat, catIdx) => {
            const c = categoryColorMap[cat.color];
            return (
            <div key={catIdx}>
              <h4 className={`font-bold ${c.text} mb-3 flex items-center gap-2`} style={{fontSize:"20px"}}>
                <span className={`px-3 py-1 rounded-full text-sm ${c.light} ${c.border} border`}>{cat.category}</span>
              </h4>
              <div className="space-y-2">
                {cat.items.map((item, itemIdx) => {
                  const globalIdx = catIdx * 10 + itemIdx;
                  return (
                  <div key={itemIdx} className={`${c.bg} border ${c.border} rounded-2xl overflow-hidden`}>
                    <div className="flex items-center justify-between px-5 py-3 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setOpenDetail(openDetail === globalIdx ? null : globalIdx)}>
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{item.icon}</span>
                        <span className={`font-bold ${c.text}`} style={{fontSize:"16px"}}>{item.num}. {item.name}</span>
                      </div>
                      {openDetail === globalIdx ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                    </div>
                    <AnimatePresence>{(expandAll || openDetail === globalIdx) && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                        <div className="px-5 pb-4 bg-white"><p className="text-slate-600 leading-relaxed" style={{fontSize:"15px"}}>{item.detail}</p></div>
                      </motion.div>
                    )}</AnimatePresence>
                  </div>
                );})}
              </div>
            </div>
          );})}
        </div>
      </div>

      {/* ========== 禱告範例 ========== */}
      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-6 md:p-8 border border-teal-100 shadow-sm">
        <h3 className="font-bold text-teal-800 mb-4 flex items-center gap-2" style={{fontSize:"22px"}}><Heart className="w-6 h-6 text-teal-600" />實例：「禱告」元素的規約<span className="ml-2 text-xs bg-teal-100 text-teal-600 px-2 py-1 rounded-full border border-teal-200">(p.236)</span></h3>
        <div className="space-y-2">
          {prayerExample.map((p, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-teal-100 flex items-start gap-3">
              <ChevronRight className="w-4 h-4 text-teal-500 flex-shrink-0 mt-1" />
              <p className="text-slate-600" style={{fontSize:"15px"}}>{p}</p>
            </div>
          ))}
        </div>
        <div className="bg-teal-100 rounded-xl p-4 border border-teal-200 mt-4">
          <p className="text-teal-800 italic" style={{fontSize:"15px"}}>「不要對自己太嚴格。這條路一開始必然是狹窄的，但只要憑信心繼續這種生活，就能在神誡命的道路上快速奔跑，心靈也會被愛充滿。」——聖本篤 (p.237)</p>
        </div>
      </div>

      {/* ========== 更廣泛的應用 ========== */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2" style={{fontSize:"22px"}}><Users className="w-6 h-6 text-slate-600" />生活規約更廣泛的應用<span className="ml-2 text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded-full border border-slate-200">(p.245-247)</span></h3>
        <div className="space-y-3">
          {broaderApplications.map((app, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-slate-200 cursor-pointer hover:border-blue-300 transition-colors" onClick={() => setOpenApplication(openApplication === i ? null : i)}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{app.icon}</span>
                <span className="font-bold text-slate-800" style={{fontSize:"16px"}}>{app.scope}</span>
              </div>
              <AnimatePresence>{(expandAll || openApplication === i) && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <p className="text-slate-600 mt-2 ml-11" style={{fontSize:"15px"}}>{app.detail} <span className="text-slate-400 text-xs">{app.page}</span></p>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 結尾故事：卡羅 ========== */}
      <div className="bg-slate-800 rounded-3xl p-6 md:p-8 text-white">
        <h3 className="font-bold text-amber-300 mb-4 flex items-center gap-2" style={{fontSize:"22px"}}><Heart className="w-6 h-6 text-amber-400" />活出愛，被愛征服<span className="ml-2 text-xs bg-amber-900/50 text-amber-300 px-2 py-1 rounded-full border border-amber-700">(p.247-249)</span></h3>
        <div className="space-y-3">
          <div className="bg-white/10 rounded-xl p-4 border border-white/10"><p className="text-slate-200" style={{fontSize:"16px"}}>{closingStory.context}</p></div>
          <div className="bg-white/10 rounded-xl p-4 border border-white/10"><p className="text-slate-200" style={{fontSize:"16px"}}>{closingStory.paulStory}</p></div>
          <div className="bg-amber-900/30 rounded-xl p-5 border border-amber-700">
            <p className="text-amber-200 font-bold text-center leading-relaxed" style={{fontSize:"19px"}}>「活出愛，被愛征服，愛就會告訴你該做什麼。」</p>
            <p className="text-amber-400 text-sm text-center mt-2">——卡羅·卡雷度 (p.249)</p>
          </div>
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
              <AnimatePresence>{(expandAll || openTheology === i) && (
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
              <AnimatePresence>{(expandAll || openTaiwan === i) && (
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
              <AnimatePresence>{(expandAll || openChallenge === i) && (
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
        <h3 className="font-bold text-teal-700 mb-4" style={{fontSize:"22px"}}>📝 第八章總結：建立你的棚架</h3>
        <div className="space-y-3">
          <div className="bg-amber-50 border-amber-200 border rounded-xl p-4"><div className="font-bold text-amber-700 mb-1.5" style={{fontSize:"17px"}}>🌿 棚架的比喻 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.230</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>生活規約就是棚架——幫助葡萄藤離開地面往上長、多結果子。起點與基礎是渴望親近神、愛神。</p></div>
          <div className="bg-indigo-50 border-indigo-200 border rounded-xl p-4"><div className="font-bold text-indigo-700 mb-1.5" style={{fontSize:"17px"}}>📋 但以理的榜樣 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.232-233</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>在巴比倫的強大文化壓力下，但以理靠著一套簡單的生活規約（設立界線 + 規律日課）保守了信仰。</p></div>
          <div className="bg-violet-50 border-violet-200 border rounded-xl p-4"><div className="font-bold text-violet-700 mb-1.5" style={{fontSize:"17px"}}>🔢 十二個元素 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.234-245</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>四大類：禱告（聖經、靜默、日課、閱讀）→ 休息（安息日、簡樸、玩樂）→ 工作（服事、照顧身體）→ 關係（情感健康、家庭、群體）。</p></div>
          <div className="bg-rose-50 border-rose-200 border rounded-xl p-4"><div className="font-bold text-rose-700 mb-1.5" style={{fontSize:"17px"}}>❤️ 核心精神 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.245, 249</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>「愛基督的心必須超過一切。」「活出愛，被愛征服，愛就會告訴你該做什麼。」</p></div>
        </div>
      </div>

      {/* ========== 章末禱告 ========== */}
      <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-6 md:p-8 border border-amber-200">
        <h3 className="font-bold text-amber-800 mb-3" style={{fontSize:"20px"}}>🙏 章末禱告 <span className="text-xs font-normal text-amber-600">(p.249)</span></h3>
        <p className="text-amber-900 leading-relaxed italic" style={{fontSize:"17px"}}>「主，讀完這一章之後，我好想來親近祢，好好用一段時間來親近祢。以前我常常匆匆忙忙打斷與祢的相交，但我知道我身上有太多地方需要改變。主，求祢讓這一次不一樣，讓我看見雖然只是踏出一小步，但我可以開始建立以祢為中心的生活。幫助我專心聆聽祢的聲音。我要憑信心順服並相信，即使只是小小的改變，也能凝聚成聖靈強大的風，引導我生命中的每個部分。感謝祢。奉耶穌的名禱告，阿們！」</p>
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
