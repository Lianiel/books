import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, BookOpen, ChevronDown, ChevronUp, Target, Brain, MessageCircle, AlertTriangle, Sparkles, Shield, Users, MessageSquareQuote, Layers, BookMarked, Moon, Mountain, Clock, Flame } from 'lucide-react';

export default function Chapter4() {
  const [openStage, setOpenStage] = useState<number | null>(null);
  const [openFlaw, setOpenFlaw] = useState<number | null>(null);
  const [openSign, setOpenSign] = useState<number | null>(null);
  const [openTheology, setOpenTheology] = useState<number | null>(null);
  const [openChallenge, setOpenChallenge] = useState<number | null>(null);
  const [openTaiwan, setOpenTaiwan] = useState<number | null>(null);

  const authorDarkNight = [
    { phase: "教會分裂", detail: "西語部宣告分裂，兩百名會友選擇離開成立自己的教會。作者難過、氣憤，信主以來頭一次「感受」不到神的同在。聖經變得毫無用處，所有禱告似乎都被天堂打了回票。(p.124)" },
    { phase: "跌到谷底？", detail: "他把想法告訴一位朋友。「跌到谷底？」她笑了：「還早得很！」聽到這句話感覺五雷轟頂——但她看出來他還需要更深層的潔淨。在那之後，他又在「死蔭幽谷」多待了兩年。(p.125)" },
    { phase: "婚姻也撞牆", detail: "一直拖到婚姻也撞牆，潔芮決定離開他牧養的教會，他才屈膝在神面前問：「祢這個虐待狂！我被祢剝皮剝得還不夠嗎？」那兩年他並沒有停止屬靈操練，還是順從地扮演好領袖的角色——但心裡想要永遠放棄神和祂的教會。(p.125)" },
    { phase: "開始爬出來", detail: "「不一樣！跟以前不太一樣。我說不上來，但我好像比較不在乎別人的看法，比較認識自己，也比較相信神、相信祂的愛。」——他不知道的是，在那段恐怖的日子，神一邊潔淨他，一邊往他身上輸入一些東西。(p.125)" }
  ];

  const faithStages = [
    { num: 1, title: "意識到神，生命改變", desc: "可能發生在童年或成年之後。我們意識到神真實的存在，開始與基督同行。這是旅程的起點。", icon: "🌅", color: "bg-amber-50 border-amber-200" },
    { num: 2, title: "門徒訓練（學習）", desc: "學習認識神，學習如何跟隨基督。加入基督徒群體，透過信心的操練為信仰奠定基礎。", icon: "📚", color: "bg-blue-50 border-blue-200" },
    { num: 3, title: "積極參與（服事）", desc: "「做」的階段。主動參與為神做工，服事神和百姓，承擔責任，發揮才幹和恩賜。", icon: "🔨", color: "bg-green-50 border-green-200" },
    { num: 4, title: "牆 / 進入內在", desc: "「牆」和「進入內在」緊密相連。這道牆會迫使我們轉向內在。最重要的提醒：是神把我們帶到這道牆面前。牆可能是離婚、失業、罹癌、背叛、不孕、親友去世、夢想破滅、教會經驗的幻滅……", icon: "🧱", color: "bg-red-50 border-red-200" },
    { num: 5, title: "向外移動（由內在出發）", desc: "穿越這道牆之後，我們可能會再次投入外在工作（領導、服事、慈善），但不同的是：這時的我們是以神為中心、全新的「我」。有一種獨特的、深沉的、內在的平靜。", icon: "🕊️", color: "bg-indigo-50 border-indigo-200" },
    { num: 6, title: "被愛改變", desc: "神讓我們能夠在愛裡變得完全。我們會發現愛是起點也是終點。神那完全的愛會趕走一切的恐懼（約壹四18）。我們的屬靈生命最終就是要降服於神完全的旨意並且絕對順服。", icon: "❤️‍🔥", color: "bg-rose-50 border-rose-200" }
  ];

  const sevenFlaws = [
    { num: 1, flaw: "驕傲", desc: "動輒批評指責，很難容忍別人犯錯，不易受教。" },
    { num: 2, flaw: "貪得無厭", desc: "對於神所賜的靈性不滿足，永遠在學習讀書，卻沒有認知到自己在靈裡是貧窮的，需要追求內在生命的成長。" },
    { num: 3, flaw: "奢侈", desc: "喜愛從神來的屬靈祝福，而不是喜愛神。" },
    { num: 4, flaw: "憤怒", desc: "易怒、沒有溫柔的心，沒有耐性等候神。" },
    { num: 5, flaw: "屬靈的貪食", desc: "拒絕十字架，像小孩一樣只喜歡好玩的事。" },
    { num: 6, flaw: "屬靈的嫉妒", desc: "見不得別人靈性美好，愛比較。" },
    { num: 7, flaw: "懶惰", desc: "好逸惡勞，只喜歡享受屬靈的甘甜和美好的感覺。" }
  ];

  const afterWallSigns = [
    { num: 1, title: "經歷到更深的破碎", detail: "穿牆而過的人生命是經歷過破碎的，不再論斷人。卡爾・巴特說「罪的本質與來源就是驕傲，企圖作自己和鄰舍的審判官」。一個生命被破碎的人，在神的愛中有充足的安全感，任何人都羞辱不了她——要是有人批評她，她會在心裡想：「情況比你以為的還更糟！」測量破碎的方法：你有多容易被激怒？作者將「心禱」放進操練：「主耶穌基督，神的兒子，可憐我這個罪人。」", scripture: "太五3「虛心的人有福了！因為天國是他們的。」", page: "p.127-130" },
    { num: 2, title: "對神聖的未知（奧祕）有更多感謝", detail: "承認越認識神就越不了解祂。奧古斯丁寫道：「如果你知道，那你所知道的就不是神。」阿奎那寫了十二本書描述神，臨終卻說：「我已經無法再寫，因為神讓我看見，我所寫的不過就像稻草。」穿牆之後會像小孩一樣對奧祕深深著迷，更容易得安息。作者引用古老中國寓言「塞翁失馬」來說明：有些事看似幸運最後卻成災難，有些事乍看是壞事卻潛藏莫大祝福。", scripture: "詩十八11「他以黑暗為藏身之處，以水的黑暗、天空的厚雲為他四圍的行宮。」", page: "p.130-132" },
    { num: 3, title: "更有能力等候神", detail: "穿牆過程會粉碎掉我們深處那些自我強迫、可怕的固執——堅持一定要有成果、成功、為神把事情做好。亞伯拉罕在牆前等了二十五年才等到以撒。摩西花四十年在曠野學習等候。大衛逃命近十三年。哈拿不孕多年。耶穌在默默無聞中安靜等候。作者說：「我犯了無數次論斷的罪，每一次都是因為沒有等候主。」", scripture: "詩二十七14「要等候耶和華！當壯膽，堅固你的心！我再說，要等候耶和華！」", page: "p.132-134" },
    { num: 4, title: "更有能力不依附", detail: "重要的不是「我開不開心」而是「我是自由的嗎？」保羅說：「有妻子的要像沒有妻子；哀哭的要像不哀哭；快樂的要像不快樂。」（林前七29-31）我們在世上的生活和一般人沒有兩樣，但同時也必須認知到這些事物不等於我們的生命。那道牆會讓我們不再自以為應該成為什麼樣的人——虛假的自我會一層層脫落，真實的我漸漸浮現。理查・羅爾的五個認知：(1)人生是艱苦的(2)你沒有那麼重要(3)你的人生不是以你為中心(4)當家作主的不是你(5)你早晚會死。", scripture: "腓四12「無論在甚麼景況都可以知足，這是我已經學會了。」", page: "p.134-136" }
  ];

  const wallVsTrial = [
    { type: "日常試煉（不是牆）", examples: ["交通阻塞", "惡老闆", "飛機延遲", "汽車拋錨", "發燒", "三更半夜狗吠"], response: "雅各的建議：「落在百般試煉中都要以為大喜樂。」（雅一2-4）" },
    { type: "牆 / 靈魂的暗夜", examples: ["大衛逃避掃羅追殺十三年", "亞伯拉罕等候以撒二十五年", "約伯一天之內失去一切", "教會西語部分裂", "婚姻出現重大危機", "親人驟逝、罹患重症"], response: "十架約翰：「這是神重新配置我們管線的方式，目的是煉淨情感與熱情，讓我們能以祂的愛為樂。」" }
  ];

  const theologyTopics = [
    { title: "十架約翰的「心靈的黑夜」：五百年的智慧", content: "十架約翰（St. John of the Cross）將靈魂的成長分為三階段：開始、前進、完成。他強調不想停留在「開始」的階段，就必須接受從神來的禮物：「暗夜」。這是在基督裡成長「常見的方式」。他將暗夜分為兩層：第一層「感官的暗夜」是一定會遇到的；第二層「靈魂的暗夜」遇到的人比較少，過程是「暴戾而嚴峻的」。暗夜的目的：(1)潔淨靈魂(2)消滅靈魂的七情六慾(3)將陋習全數燒毀「就像烈火燒毀金屬的黴菌和鐵鏽」(4)同步按著靈魂的光景在動工。十架約翰特別指出：人會很容易迷戀「對神的感覺」，用感覺來取代神。崇拜感覺是一種常見的屬靈偶像崇拜。神會把這些感覺統統拿走，好教我們不把感覺當崇拜對象。", scriptures: ["約壹四1 一切的靈你們不可都信，總要試驗那些靈", "來十二5-6 主所愛的祂必管教", "伯二十三10 祂試煉我之後，我必如精金"], reflection: "你是否正處在「暗夜」中？你能否分辨你正在經歷的是「日常試煉」還是「靈魂的暗夜」？你是否迷戀「對神的感覺」多過迷戀神自己？" },
    { title: "「心禱」（Jesus Prayer）：從破碎到安息", content: "「主耶穌基督，神的兒子，可憐我這個罪人。」這個禱告改編自路加福音18:9-14的比喻：稅吏的禱告比法利賽人的更蒙神悅納。自六世紀開始，心禱就是東正教的靈修基礎。操練方式：從早到晚隨著心跳的節奏反覆禱告，讓這個禱告成為我們呼吸的一部分。心禱的核心不是「我很糟糕」的自我貶低，而是「我需要神的憐憫」的真實認知——這正是穿牆後「更深的破碎」所帶來的果子。聖方濟說：「一無所求的人是有福的，因為每件事都能讓他快樂。」他知道沒有人能靠自己的本事賺到一顆星星或一次日落——感恩和依靠神才是一切現實的基底。", scriptures: ["路十八13 神啊，開恩可憐我這個罪人！", "詩五十一17 神所要的祭就是憂傷的靈", "林後十二9 我的恩典夠你用的，因為我的能力是在人的軟弱上顯得完全"], reflection: "你願意嘗試操練心禱嗎？每天在通勤、走路或睡前，隨著呼吸的節奏默念：「主耶穌基督，神的兒子，可憐我這個罪人。」持續一週，觀察這個操練對你的內在有什麼影響。" },
    { title: "「不依附」的靈性：保羅的自由之道", content: "保羅在哥林多前書七29-31提出一個極其激進的生活觀：「有妻子的要像沒有妻子；哀哭的要像不哀哭；快樂的要像不快樂；置買的要像無有所得；用世物的要像不用世物。」這不是說不要享受生活，而是認知到這些事物不等於我們的生命。我們身上帶著永恆的記號，不受這些事物所制約。不依附是享受內在平安的大祕訣。梅頓說：「在這個世界中，能夠真正看清事實的，恐怕不超過二十人。這二十個人是自由的，不依附任何受造物、不依附自己、甚至不依附神任何的禮物。」與耶穌同行就必須簡化生活，除去一切會分心的因素。", scriptures: ["林前七29-31 用世物的要像不用世物", "腓四11-13 我無論在甚麼景況都可以知足", "太六33 你們要先求祂的國和祂的義"], reflection: "你的生命中有哪些人事物是你很難「不依附」的？如果明天失去了它們，你的信仰會崩塌嗎？還是會站得更穩？" }
  ];

  const taiwanExamples = [
    { title: "🧱 華人基督徒的「撞牆」經驗", scenario: "在華人教會中，許多人在信主初期經歷火熱的階段（階段1-3），但當遭遇重大挫折——事業失敗、婚姻危機、健康問題、教會紛爭——就會覺得信仰「不管用了」。有些人選擇離開教會，有些人強撐著但內心已經冷淡，有些人則開始質疑：「我是不是信錯了？」", challenge: "如果你正在經歷「牆」，不要急著逃避或找出路。問自己：「這道牆是否是神把我帶到這裡的？」讀詩篇88篇和約伯記，允許自己在黑暗中等候。找一位成熟的屬靈長輩分享你的狀態。", insight: "本章最重要的提醒：「穿牆」不是「撞牆」——很多人撞牆之後被彈回原地，下一次再撞痛苦更甚。穿牆需要神的帶領，而且可能需要好幾個月甚至幾年。(p.120)" },
    { title: "⏰ 華人文化中的「等候」困難", scenario: "華人文化講求效率和速成。「時間就是金錢」「快速解決問題」是我們的DNA。在教會中也是如此：「禱告三天沒回應就換策略」「信主三個月還沒改變一定是方法不對」。但穿牆的核心正是「在混沌未明中忍耐等候」——這對習慣掌控和高效的華人基督徒來說特別困難。", challenge: "這一週練習「無目的的等候」：找一段時間（哪怕只是十分鐘）什麼都不做，不看手機不聽音樂不禱告。只是安靜等候。觀察你的焦慮程度。問自己：「我為什麼這麼害怕什麼都不做？」", insight: "亞伯拉罕等了二十五年，摩西等了四十年，大衛等了十三年，哈拿等了很多年。作者自己的暗夜持續了至少兩年。「等候神」不是被動的浪費時間——而是最激進的信心行動。(p.132-134)" },
    { title: "🏆 「不依附」在物質主義社會中的挑戰", scenario: "台灣社會高度物質化：房子、車子、學歷、薪水、社會地位——這些都成了我們身分的延伸。在教會中也不例外：教會的大小、聚會人數、奉獻金額、事工的「成果」——都容易成為依附的對象。但保羅說「用世物的要像不用世物」——這在台灣社會中聽起來幾乎不可能。", challenge: "列出你生命中最難放手的五樣東西（可以是物質的也可以是非物質的：名聲、認可、關係、計畫）。為每一樣禱告：「主啊，如果祢把這個拿走，我還能站得住嗎？」觀察你的內心反應。", insight: "理查・羅爾的五個認知對華人基督徒特別震撼：(1)人生是艱苦的(2)你沒有那麼重要(3)你的人生不是以你為中心(4)當家作主的不是你(5)你早晚會死。我們在哪一點上最需要被提醒？(p.135-136)" },
    { title: "🌑 教會中的「暗夜」禁忌", scenario: "在許多華人教會中，表達信仰的懷疑和掙扎是禁忌。「你怎麼可以懷疑神？」「你是不是犯了什麼罪？」「你要更多禱告讀經。」——這些「標準答案」讓許多正在經歷暗夜的弟兄姊妹感到更加孤立和羞愧。他們不敢說出真話，只好假裝一切都好，或者乾脆離開教會。", challenge: "如果你身邊有人似乎正在經歷「暗夜」，不要急著給答案或引用經文。試著只是陪伴：「我不知道你正在經歷什麼，但我願意陪你。你不需要假裝。」有時候最有力量的話是：「我也不知道為什麼。」", insight: "書中提到情感健康的信心會承認：「我很迷惘」「我不知道神為什麼要這樣」「我很受傷」「我很憤怒」「神哪，祢為何棄我於不顧？」——而不是用虛假的信心口號來掩蓋真實的痛苦。(p.121)" },
    { title: "🙏 心禱在華人靈修傳統中的應用", scenario: "華人基督徒的禱告常常是「報告式」的（報告需要、感謝事項、代禱事項）或「宣告式」的（宣告經文、捆綁釋放）。但心禱提供了一種完全不同的禱告方式：不是向神要東西也不是宣告什麼，而是簡單地認知自己的軟弱和對神的依靠。「主耶穌基督，神的兒子，可憐我這個罪人」——這句禱告隨著呼吸的節奏反覆默念，讓整個人沉浸在神的同在中。", challenge: "嘗試操練心禱一週。早上起床時、通勤時、睡前，隨著呼吸默念：「主耶穌基督，神的兒子，可憐我這個罪人。」吸氣時念前半句，呼氣時念後半句。不要評估效果——只是持續操練。一週後寫下你的體驗。", insight: "心禱不是一種技巧而是一種生活方式。它的核心是「破碎」——承認我是罪人中的罪魁，完全依靠神的憐憫。在華人「報告式禱告」的傳統中，這是一種很不一樣的操練。(p.129-130)" }
  ];

  const weeklyChallenge = [
    { week: "第一週", title: "定位你的信心階段", mission: "仔細閱讀六個信心階段的描述（意識到神→門訓→積極參與→牆/內在→向外移動→被愛改變）。誠實為自己定位：你目前在哪個階段？你是否正在面對一道「牆」？如果是，那道牆是什麼——是外在的危機，還是內在的枯竭？寫下你的發現，和一位信任的人分享。", scripture: "詩一三〇5-6「我等候耶和華，我的心等候；我也仰望祂的話。我的心等候主。」", journalPrompt: "你目前在哪個階段？你是如何來到這裡的？你希望神帶你去哪裡？你最害怕什麼？" },
    { week: "第二週", title: "辨識七大屬靈瑕疵", mission: "閱讀十架約翰列出的七大屬靈瑕疵（驕傲、貪得無厭、奢侈、憤怒、屬靈的貪食、嫉妒、懶惰）。為每一項打分（1-5分）。選擇得分最高的兩項，思考它們在你屬靈生活中的具體表現。問自己：「我是否迷戀對神的感覺多過迷戀神自己？」", scripture: "來十二5-6「主所愛的祂必管教；又鞭打凡所收納的兒子。」", journalPrompt: "哪兩項瑕疵得分最高？它們如何影響你與神的關係？你是否願意讓神「煉淨」這些瑕疵——即使過程很不舒服？" },
    { week: "第三週", title: "操練「心禱」", mission: "每天至少三次操練心禱：「主耶穌基督，神的兒子，可憐我這個罪人。」早上醒來時、中午吃飯前、晚上睡前。可以隨著呼吸的節奏——吸氣時念「主耶穌基督，神的兒子」，呼氣時念「可憐我這個罪人」。不要評估效果，不要分析感受，只是持續操練。", scripture: "路十八13「神啊，開恩可憐我這個罪人！」", journalPrompt: "操練心禱時你有什麼體驗？是平靜？焦躁？無聊？感動？你是否發現「可憐我這個罪人」比你想像的更難說出口？為什麼？" },
    { week: "第四週", title: "練習「不依附」", mission: "選擇一樣你很依附的東西（可以是手機、社群媒體、咖啡、看新聞、別人的認可——不必是壞東西），這一週刻意減少使用或放下它。觀察你的內心反應：焦慮？空虛？自由？同時每天默想腓四11-13：「無論在甚麼景況都可以知足。」", scripture: "腓四11-13「我無論在甚麼景況都可以知足，這是我已經學會了。」", journalPrompt: "你選擇放下什麼？放下的過程中你發現了什麼？這個東西在你生命中的位置是否太大了？你是否在「用」它還是被它「控制」？" }
  ];

  const groupDiscussion = [
    { category: "📖 信心的階段", questions: ["你目前覺得自己在哪個信心階段？你是否正在面對一道「牆」？那道牆是什麼？", "你是否曾經從階段3（積極參與）被推到階段4（牆）？那個經歷是什麼？你是如何度過的——還是你仍在牆後？", "有人說：「穿牆不是一次就夠了，只要與神的關係沒有中斷，就得要常常穿牆。」——這句話讓你覺得安慰還是沮喪？為什麼？"] },
    { category: "🌑 靈魂的暗夜", questions: ["你是否曾經歷過「禱告時覺得天堂的門是緊閉的」的時刻？那時候你怎麼做？", "如何區分「日常試煉」和「靈魂的暗夜」？你目前的困難屬於哪一種？", "十架約翰說人會「迷戀對神的感覺，用感覺來取代神」——你有沒有這樣的傾向？你是在追求神，還是在追求「對神的感覺」？", "作者的暗夜持續了兩年以上。你能想像兩年感受不到神的同在嗎？你會怎麼做？"] },
    { category: "🕊️ 穿牆之後", questions: ["穿牆之後的四個特徵中（破碎、對奧祕感謝、能等候、不依附），哪一個你最渴望擁有？", "你有多容易「被激怒」？你的「被激怒指數」告訴你什麼？", "保羅說「用世物的要像不用世物」——在你的生活中，這意味著什麼具體的改變？", "作為小組，我們可以如何陪伴正在經歷「暗夜」的弟兄姊妹？我們常犯的錯誤是什麼？"] }
  ];

  const reflections = [
    "我目前在信心的哪個階段？是否正在面對一道牆？如果是，那道牆是什麼？",
    "我是否迷戀「對神的感覺」多過迷戀神自己？我追求的是敬拜的感動，還是神本身？",
    "在七大屬靈瑕疵中，哪一個在我身上最明顯？我願意讓神透過暗夜來煉淨它嗎？",
    "我有多容易「被激怒」？這告訴我什麼關於我生命的破碎程度？",
    "如果神明天把我最依附的東西（或人）拿走，我的信仰會崩塌嗎？",
    "我是否曾像作者一樣想要「永遠放棄神和祂的教會」？那時候發生了什麼？",
    "「塞翁失馬」的故事提醒我：有些壞事其實是祝福。我生命中有這樣的例子嗎？"
  ];

  const actions = [
    "用六個信心階段為自己定位。如果你正在面對「牆」，寫下那道牆的具體內容，帶到禱告中。",
    "為十架約翰的七大瑕疵打分數。選得分最高的一項，在禱告中求神「煉淨」這個部分。",
    "操練心禱一週：「主耶穌基督，神的兒子，可憐我這個罪人。」隨著呼吸節奏反覆默念。",
    "選一樣你很依附的東西，這週刻意減少使用。觀察你的內心反應並記錄下來。",
    "如果你身邊有人正在經歷暗夜，不要給答案——只是陪伴。對他說：「我願意陪你。」",
    "讀約伯記38-42章（神終於回應約伯），思考：在你最黑暗的時刻，神的同在可能長什麼樣子？"
  ];

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="space-y-8">

      {/* ========== 章節標題 ========== */}
      <div className="bg-gradient-to-br from-slate-900 via-stone-900 to-neutral-800 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="relative">
          <div className="flex items-center gap-2 mb-2"><BookOpen className="w-5 h-5 text-amber-300" /><span className="text-amber-300 text-sm tracking-widest">第 4 章</span></div>
          <h1 className="font-extrabold mb-3" style={{fontSize:"30px"}}>穿牆之旅</h1>
          <p className="text-amber-200 text-lg mb-4">放下權力欲與掌控欲</p>
          <p className="text-slate-200 leading-relaxed mb-3" style={{fontSize:"17px"}}>本章透過信心的六個階段、十架約翰的靈魂暗夜、七大屬靈瑕疵、作者自己的穿牆經歷，以及穿牆之後的四個特徵——更深的破碎、對奧祕感謝、有能力等候、不依附——帶領我們認識那道「牆」，以及如何穿越它。</p>
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
            <p className="text-slate-200 leading-relaxed italic" style={{fontSize:"17px"}}>「每個跟隨耶穌的人，都會在人生的某個時刻『撞牆』，或者像古人說的『進入靈魂的暗夜』。」 <span className="text-amber-300 text-sm ml-1">(p.115)</span></p>
          </div>
        </div>
      </div>

      {/* ========== 信心的六個階段 ========== */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 md:p-8 border border-blue-200 shadow-sm">
        <h3 className="font-bold text-blue-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><Mountain className="w-6 h-6 text-blue-600" />信心生活的六個階段<span className="ml-2 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full border border-blue-200">(p.117-120)</span></h3>
        <p className="text-slate-600 mb-4" style={{fontSize:"17px"}}>這些階段層層相疊、環環相扣，不可能跳過。但我們可能會停滯在某個階段，不肯與基督一同前進：</p>
        <div className="space-y-3">
          {faithStages.map((s, i) => (
            <div key={i} className={`${s.color} border rounded-2xl overflow-hidden`}>
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer" onClick={() => setOpenStage(openStage === i ? null : i)}>
                <div className="flex items-center gap-3"><span className="text-2xl">{s.icon}</span><div><span className="text-xs text-slate-400">階段 {s.num}</span><h4 className="font-bold text-slate-800" style={{fontSize:"18px"}}>{s.title}</h4></div></div>
                {openStage === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>{openStage === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <div className="px-5 pb-5"><p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>{s.desc}</p></div>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 牆 vs. 試煉 ========== */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><AlertTriangle className="w-6 h-6 text-red-500" />「牆」vs.「日常試煉」：如何分辨？<span className="ml-2 text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded-full border border-slate-200">(p.126)</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {wallVsTrial.map((w, i) => (
            <div key={i} className={`rounded-xl p-5 border ${i === 0 ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
              <h4 className={`font-bold mb-3 ${i === 0 ? 'text-green-800' : 'text-red-800'}`} style={{fontSize:"17px"}}>{w.type}</h4>
              <div className="flex flex-wrap gap-2 mb-3">{w.examples.map((e, j) => (<span key={j} className={`px-2 py-1 rounded-lg text-sm ${i === 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{e}</span>))}</div>
              <p className="text-slate-600 text-sm italic">{w.response}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 靈魂的暗夜 + 七大瑕疵 ========== */}
      <div className="bg-gradient-to-br from-slate-800 to-indigo-900 rounded-3xl p-6 md:p-8 border border-slate-700 shadow-sm text-white">
        <h3 className="font-bold text-amber-300 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><Moon className="w-6 h-6 text-amber-400" />靈魂的暗夜：十架約翰的七大屬靈瑕疵<span className="ml-2 text-xs bg-slate-700 text-amber-400 px-2 py-1 rounded-full border border-slate-600">(p.122-123)</span></h3>
        <p className="text-slate-300 mb-4" style={{fontSize:"17px"}}>暗夜的目的：煉淨我們的情感與熱情。十架約翰列出七大有待煉淨的屬靈瑕疵：</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {sevenFlaws.map((f, i) => (
            <div key={i} className="bg-slate-700/50 rounded-xl p-4 border border-slate-600">
              <span className="font-bold text-amber-300" style={{fontSize:"16px"}}>{f.num}. {f.flaw}：</span>
              <span className="text-slate-300" style={{fontSize:"15px"}}>{f.desc}</span>
            </div>
          ))}
        </div>
        <div className="bg-amber-900/30 rounded-xl p-4 border border-amber-700/50 mt-4">
          <p className="text-amber-200 font-bold" style={{fontSize:"16px"}}>💡 「人會很容易迷戀對神的感覺，用這些感覺來取代神。崇拜感覺是一種常見的屬靈偶像崇拜。神會把這些感覺統統拿走，好教我們不把感覺當崇拜對象。」(p.123)</p>
        </div>
      </div>

      {/* ========== 作者的穿牆之旅 ========== */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><MessageCircle className="w-6 h-6 text-slate-600" />作者的穿牆之旅<span className="text-slate-400 bg-slate-100 px-2 py-1 rounded-md font-normal" style={{fontSize:"13px"}}>P124-125</span></h3>
        <div className="space-y-3">
          {authorDarkNight.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className={`flex items-start gap-4 rounded-xl p-4 border ${i === 2 ? 'bg-red-50 border-red-200' : i === 3 ? 'bg-emerald-50 border-emerald-200' : 'bg-slate-50 border-slate-100'}`}>
              <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold ${i === 3 ? 'bg-emerald-200 text-emerald-800' : 'bg-slate-200 text-slate-800'}`} style={{fontSize:"14px"}}>{i+1}</div>
              <div><div className={`font-bold mb-1 ${i === 3 ? 'text-emerald-800' : 'text-slate-800'}`} style={{fontSize:"16px"}}>{item.phase}</div><p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>{item.detail}</p></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ========== 穿牆之後的四個特徵 ========== */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-sm">
        <h3 className="font-bold text-emerald-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}><Sparkles className="w-6 h-6 text-emerald-600" />穿牆之後的四個靈性特徵<span className="ml-2 text-xs bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full border border-emerald-200">(p.127-136)</span></h3>
        <div className="space-y-3 mt-4">
          {afterWallSigns.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl border border-emerald-100 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-emerald-50 transition-colors" onClick={() => setOpenSign(openSign === i ? null : i)}>
                <h4 className="font-bold text-emerald-800" style={{fontSize:"18px"}}>{s.num}. {s.title}</h4>
                {openSign === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>{openSign === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <div className="px-5 pb-5 space-y-3">
                    <p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>{s.detail}</p>
                    <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-200"><p className="text-emerald-700 text-sm font-medium">📖 {s.scripture}</p></div>
                    <p className="text-xs text-slate-400">{s.page}</p>
                  </div>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
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
              <AnimatePresence>{openTheology === i && (
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
              <AnimatePresence>{openTaiwan === i && (
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
              <AnimatePresence>{openChallenge === i && (
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
        <h3 className="font-bold text-teal-700 mb-4" style={{fontSize:"22px"}}>📝 第四章總結：穿越生命的牆</h3>
        <div className="space-y-3">
          <div className="bg-blue-50 border-blue-200 border rounded-xl p-4"><div className="font-bold text-blue-700 mb-1.5" style={{fontSize:"17px"}}>🗺️ 六個信心階段 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.117-120</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>意識到神→門訓→積極參與→牆/進入內在→向外移動→被愛改變。層層相疊環環相扣，不可能跳過。「牆」是神把我們帶到那裡的。</p></div>
          <div className="bg-slate-100 border-slate-300 border rounded-xl p-4"><div className="font-bold text-slate-700 mb-1.5" style={{fontSize:"17px"}}>🌑 靈魂的暗夜 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.121-126</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>十架約翰的七大瑕疵（驕傲、貪得無厭、奢侈、憤怒、屬靈貪食、嫉妒、懶惰）。暗夜是神重新配置管線的方式——煉淨情感讓我們能以祂的愛為樂。作者的暗夜持續兩年以上。</p></div>
          <div className="bg-emerald-50 border-emerald-200 border rounded-xl p-4"><div className="font-bold text-emerald-700 mb-1.5" style={{fontSize:"17px"}}>🕊️ 穿牆之後 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.127-136</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>四個特徵：更深的破碎（心禱）、對奧祕感謝（塞翁失馬）、有能力等候（亞伯拉罕/摩西/大衛）、不依附（保羅的自由之道）。穿牆不是一次就夠了——只要與神的關係沒中斷就得常常穿牆。</p></div>
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
