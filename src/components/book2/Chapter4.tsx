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
  const [openBibleWaiter, setOpenBibleWaiter] = useState<number | null>(null);

  const journeyExamples = [
    { person: "亞伯拉罕", detail: "神呼召七十五歲的亞伯拉罕離開老家吾珥，前進未知的將來。他等了二十五年才等到應許的兒子以撒，又被要求獻上以撒。(創十二1；二十二)" },
    { person: "摩西", detail: "在荊棘火焰旁，神呼召八十歲的摩西進入曠野，開啟生命翻轉的旅程。他花了四十年在曠野學習等候。(出三)" },
    { person: "以色列人", detail: "神呼召以色列人離開埃及、進入曠野，展開為期四十年的生命洗禮。他們本可很快進入應許之地，卻因不信繞了四十年。" },
    { person: "大衛", detail: "神呼召大衛離開熟悉的牧羊工作，對戰巨人歌利亞。但勝利之後反而被迫亡命曠野逃避掃羅王的追殺近十三年。(撒上十六～撒下一)" },
    { person: "耶利米", detail: "神呼召耶利米承擔艱鉅的任務長達四、五十年，在悖逆的百姓中扮演中流砥柱的角色。他被稱為「流淚的先知」。" },
    { person: "猶大", detail: "走到一半發現幻想破滅、進退兩難。他猜不透耶穌在想什麼，無法想像祂竟然打算把自己交給當權者。耶穌的計畫令他很不滿。這種「受困」的感覺，讓他最後選擇放棄基督，錯失大好機會，寫下歷史上最令人遺憾的故事。(p.116)" }
  ];

  const authorDarkNight = [
    { phase: "同時牧養兩個群體", detail: "一九九四年，作者同時牧養教會的英語部（主日上午）和西語部（下午）。不容易，危機和困難從未間斷，但問題主要還是在於門徒訓練沒有把情感健康包含在內。(p.124)" },
    { phase: "教會分裂——暗夜的開始", detail: "西語部宣告分裂，兩百名會友選擇離開成立自己的教會。作者難過、氣憤，信主以來頭一次「感受」不到神的同在。聖經變得毫無用處，所有禱告似乎都被天堂打了回票，更令人絕望的是，神似乎沒有想要拯救他。(p.124)" },
    { phase: "以為跌到谷底", detail: "他把想法告訴一位朋友。「跌到谷底？」她笑了：「還早得很！」聽到這句話感覺就像五雷轟頂。不過她似乎看出來他還需要更深層的潔淨。她說的果然沒錯。(p.125)" },
    { phase: "又在死蔭幽谷待了兩年", detail: "在那之後，他又在「死蔭幽谷」（詩二十三4）多待了兩年。當時真的以為會永遠不見天日。他有許多年分不清何為試煉和挫敗，何為「靈魂的暗夜」，總是混為一談，以致無法真正穿牆而過。他總覺得自己受的苦比一般基督徒還多，理所當然應該得到額外的賜福。(p.124-125)" },
    { phase: "婚姻也撞牆", detail: "一直拖到婚姻也撞牆，潔芮決定離開他牧養的教會，他才屈膝在神面前問：「祢這個虐待狂！我被祢剝皮剝得還不夠嗎？」(p.125)" },
    { phase: "沒有停止操練，但心裡想放棄", detail: "那兩年他並沒有停止屬靈操練。他還是順從地跟隨耶穌，扮演好領袖的角色事奉祂，但他心裡想要放棄，永遠放棄神，放棄祂那一塌糊塗的教會。當時他並不知道，在那段恐怖的日子，其實神是一邊潔淨他，一邊往他身上輸入一些東西。(p.125)" },
    { phase: "開始從暗夜出來", detail: "「那時候，雖然還不能走，但我已經可以爬了，也開始有感覺。我對自己說：『不一樣！跟以前不太一樣。我說不上來，但我好像比較不在乎別人的看法，比較認識自己，也比較相信神，相信祂的愛。』」(p.125)" }
  ];

  const wallTypes = [
    "離婚", "失業", "罹癌", "背叛", "不孕", "親友去世", "夢想破滅",
    "兒女誤入歧途", "幻滅的教會經驗", "極度渴望結婚卻無法如願",
    "與神的關係枯燥無味", "信心「不靈了」"
  ];

  const authorWallParts = [
    "教會的西語部分裂出去——覺得被背叛",
    "長時間心情低落",
    "失去服事主的動機",
    "婚姻出現危機",
    "開始發現原生家庭對生活的影響"
  ];

  const faithStages = [
    { num: 1, title: "意識到神，生命改變", desc: "可能發生在童年或成年之後。我們意識到神真實的存在，開始與基督同行。這是旅程的起點——可能是一次佈道會、一位朋友的邀請、一本書、一場危機。無論是什麼觸發了這個覺醒，我們開始認識到有一位神在愛著我們。", icon: "🌅", color: "bg-amber-50 border-amber-200" },
    { num: 2, title: "門徒訓練（學習）", desc: "這個階段的特色就是學習認識神，學習如何跟隨基督。我們加入基督徒群體，開始透過信心的操練為信仰奠定基礎——讀經、禱告、敬拜、小組。一切都是新鮮的，充滿了發現的喜悅。我們渴望知道更多、學習更多。", icon: "📚", color: "bg-blue-50 border-blue-200" },
    { num: 3, title: "積極參與（服事）", desc: "被形容為「做」的階段。我們主動參與，積極為神做工，服事神和百姓，開始承擔責任，發揮獨有的才幹與恩賜事奉主、服事人。這個階段充滿活力和成就感——我們覺得自己「有用」了。但危險也在這裡：我們可能把身分建立在服事上而非基督裡。", icon: "🔨", color: "bg-green-50 border-green-200" },
    { num: 4, title: "牆 / 進入內在", desc: "「牆」和「進入內在」緊密相連。這道牆會迫使我們轉向內在。有時候，轉向內在之後也會遇到牆。最重要的提醒：是神把我們帶到這道牆面前。牆可能是離婚、失業、罹癌、背叛、不孕、親友去世、夢想破滅、教會經驗的幻滅……我們發現信心「不靈了」，感覺到信心的根基岌岌可危，卻找不到出路，只有滿頭的問號。我們覺得神不知去向，不知道祂在做什麼、在想什麼，不曉得祂要把我們帶到哪裡，不知道這個過程何時會結束。(p.119-120)", icon: "🧱", color: "bg-red-50 border-red-200" },
    { num: 5, title: "向外移動（由內在出發）", desc: "在經歷信心危機和密集的內在之旅後，我們終於穿越這道牆。穿牆之後，我們可能會再次投入外在工作（領導、服事、慈善），但不同的是：這時的我們是以神為中心、全新的「我」。我們再次發現神是用深邃無比的愛在接納我們。我們對神的服事會開始有一種獨特的、深沉的、內在的平靜。(p.118-119)", icon: "🕊️", color: "bg-indigo-50 border-indigo-200" },
    { num: 6, title: "被愛改變", desc: "神持續使用事件、環境、人甚至書籍帶領我們往前。無論喜歡與否，祂都定意要完成祂在我們身上開始的工作。就像約翰・衛斯理說的，祂要讓我們能夠在愛裡變得完全，讓基督的愛變成我們對神、對人的愛。我們會發現愛是起點也是終點。神那完全的愛會趕走一切的恐懼（約壹四18）。我們的屬靈生命最終就是要降服於神完全的旨意並且絕對順服。(p.119)", icon: "❤️‍🔥", color: "bg-rose-50 border-rose-200" }
  ];

  const darkNightSigns = [
    "神同在的美好感覺蒸發了",
    "禱告時覺得天堂的門是緊閉的",
    "黑暗、無助、疲憊、失敗的感覺籠罩全身",
    "貧瘠、空虛、枯燥、被打敗",
    "從前覺得有效的基督徒操練突然間「不管用了」",
    "不知道神在做什麼",
    "看不到自己身上有結出果子"
  ];

  const sevenFlaws = [
    { num: 1, flaw: "驕傲", desc: "動輒批評指責，很難容忍別人犯錯，不易受教。自認為比別人屬靈，把自己放在審判官的位置。" },
    { num: 2, flaw: "貪得無厭", desc: "對於神所賜的靈性不滿足，永遠在學習、永遠在讀書，卻沒有認知到自己在靈裡是貧窮的，需要追求內在生命的成長。用知識填滿卻缺乏真正的變化。" },
    { num: 3, flaw: "奢侈", desc: "喜愛從神來的屬靈祝福，而不是喜愛神。追求的是「好的感覺」——敬拜的感動、禱告的回應、服事的成就——而不是神本身。" },
    { num: 4, flaw: "憤怒", desc: "易怒、沒有溫柔的心，沒有耐性等候神。對人和對神都容易不耐煩，認為事情應該按自己的時間表進行。" },
    { num: 5, flaw: "屬靈的貪食", desc: "拒絕十字架，像小孩一樣只喜歡好玩的事。只願意做舒服的屬靈操練，迴避需要付代價的順服。" },
    { num: 6, flaw: "屬靈的嫉妒", desc: "見不得別人靈性美好，愛比較。「為什麼他的禱告蒙應允我的沒有？」「為什麼她的恩賜比我多？」" },
    { num: 7, flaw: "懶惰", desc: "好逸惡勞，只喜歡享受屬靈的甘甜和美好的感覺。迴避需要紀律和堅持的操練，只想要「速食」靈性。" }
  ];

  const wallVsTrial = [
    { type: "日常試煉（不是牆）", examples: ["交通阻塞", "惡老闆", "飛機延遲", "汽車拋錨", "發燒", "三更半夜狗吠"], response: "雅各的建議：「你們落在百般試煉中，都要以為大喜樂；因為知道你們的信心經過試驗，就生忍耐。」（雅一2-4）", color: "bg-green-50 border-green-200" },
    { type: "牆 / 靈魂的暗夜", examples: ["大衛逃避掃羅追殺十三年", "亞伯拉罕等候以撒二十五年", "約伯一天之內失去一切", "教會分裂兩百人離開", "婚姻出現重大危機", "親人驟逝、罹患重症"], response: "十架約翰：「這是神重新配置我們管線的方式，煉淨我們的情感與熱情，讓我們能以祂的愛為樂。祂會把我們送入『愛火焚燒的暗夜』使我們得自由。」(p.122)", color: "bg-red-50 border-red-200" }
  ];

  const afterWallSigns = [
    { num: 1, title: "經歷到更深的破碎", detail: "穿牆而過的人生命是經歷過破碎的，不再論斷人。卡爾・巴特說：「罪的本質與來源就是驕傲，企圖作自己和鄰舍的審判官。」穿牆之前，我們自認為有權力判斷善惡而不是讓神來決定。穿牆之後，我們知道事實並非如此。作者坦承自己以前很愛批評那些與主同行步調不同的人。耶穌說的第一句話就顛覆世俗觀念：「虛心的人有福了！」——原文描述的是落魄潦倒一無所有的乞丐。想像這個乞丐知道若沒人伸出援手他就必死無疑——這樣的乞丐不會說「我有高中文憑」「我不需要你施捨」「我的收入比其他乞丐多」。已經穿牆而過的人不會論斷人。\n\n測量破碎的方法：你有多容易被激怒？想像一個傲慢的人被批評時立刻反彈；再想像一個被破碎的人，在神的愛中有安全感，任何人都羞辱不了她——要是有人批評她，她會在心裡想：「情況比你以為的還更糟！」\n\n聖方濟說：「一無所求的人是有福的，因為每件事都能讓他快樂。」他知道沒有人能靠自己的本事賺到一顆星星或一次日落。感恩和依靠神才是一切現實的基底。\n\n作者將「心禱」放進操練：「主耶穌基督，神的兒子，可憐我這個罪人。」改編自路加福音18:9-14的比喻。自六世紀開始，心禱就是東正教的靈修基礎。從早到晚隨著心跳的節奏反覆禱告，期待生命能真實體現這個禱告的豐富。(p.127-130)", scripture: "太五3「虛心的人有福了！因為天國是他們的。」", page: "p.127-130" },
    { num: 2, title: "對神聖的未知（奧祕）有更多感謝", detail: "作者坦承自己很愛掌控，很想知道神的目標。也很愛提醒神應該怎麼做才符合自己的神觀。問題是，神遠遠大過我們的神觀，人是完全無法理解神的。神絕不是可以任我左右、操控、擁有或命令的。奧古斯丁寫道：「如果你知道，那你所知道的就不是神。」\n\n阿奎那在十三世紀寫了十二本書描述神，開宗明義寫道：「認識神重要的，就是知道我們不知道。」當人生走到盡頭，他在異象中看見基督在教會裡，之後他說：「我已經無法再寫，因為神讓我看見，我所寫的不過就像稻草，無法解釋那發生在馬廄裡的神蹟。」\n\n書中引用古老中國寓言「塞翁失馬」的完整故事：邊塞智者的兒子丟了馬→老父親說「說不定是好事」→馬帶回一大群駿馬→老父親說「怎知不是災禍前兆」→兒子摔斷腿→老父親說「說不定是好事」→遊牧民族入侵，兒子因瘸腿免上戰場保住一命。有些事看似幸運最後卻成災難，有些事乍看是壞事卻潛藏莫大的祝福。\n\n摩西越認識神，越覺得這位又真又活的神比他想像的還要偉大、神祕、耀眼且「不可知」。穿牆之後最大的收穫就是會像小孩一樣對奧祕深深著迷——更容易得安息，更活得自在，因為知道神掌權而且祂值得信靠。(p.130-132)", scripture: "詩十八11「他以黑暗為藏身之處，以水的黑暗、天空的厚雲為他四圍的行宮。」", page: "p.130-132" },
    { num: 3, title: "更有能力等候神", detail: "穿牆過程會粉碎掉我們深處那些自我強迫、自我渴望和可怕的固執——堅持一定要有成果、一定要成功、一定要為神把事情做好（唯恐萬一祂沒做好，我得幫祂一把）。作者跟隨基督三十年，犯了無數次論斷的罪，每一次都是因為沒有等候主。無論是打斷別人說話或太快成立教會分堂，等候神一直是他的罩門。他相信神為了清理這個毛病，特地把他的牆加寬（還額外多加了幾道小牆）。\n\n五位聖經人物在牆後學習等候：\n• 亞伯拉罕：七十五歲聽到應許，等了十一年失去耐性和侍女夏甲生下以實瑪利，又被神強迫再等十四年。人前人後所受的羞辱將他磨練成史上最偉大的信心之父。\n• 摩西：犯下殺人罪後花了四十年在曠野學習等候，被磨練成最謙卑的人（民十二3）。\n• 大衛：除掉歌利亞的勝利之後反而被迫亡命天涯近十三年。失去夢想、家庭、名聲和安全感。被磨練成合神心意的人。\n• 哈拿：不孕多年，禱告未蒙應允，反遭丈夫的妾嘲笑。多年痛苦和悲傷將她磨練成敬虔愛神的母親，生下改變以色列歷史的撒母耳。\n• 耶穌：在天父所定的時間未到之前，甘於當個卑微的木匠之子，在曠野抵擋魔鬼的試探，最後帶著聖靈的能力離開曠野展開服事（路四14）。(p.132-134)", scripture: "詩二十七14「要等候耶和華！當壯膽，堅固你的心！我再說，要等候耶和華！」", page: "p.132-134" },
    { num: 4, title: "更有能力不依附", detail: "在與神同行的路上，重要的不是「我開不開心」而是「我是自由的嗎？我是否在神所賜的自由裡繼續成長？」保羅在哥林多前書七29-31說：「有妻子的要像沒有妻子；哀哭的要像不哀哭；快樂的要像不快樂；置買的要像無有所得；用世物的要像不用世物。」我們在世上的生活和一般人沒有兩樣：結婚、哀傷、快樂、買賣、使用物品。但同時也必須認知到，這些事物並不等於我們的生命。我們身上帶著永恆的記號，不受這些事物所制約。\n\n不依附是享受內在平安的大祕訣。作者坦承：「我愛我的家、我的車、我的書、我太太潔芮、我四個女兒、我們教會、讓我感到舒適的人事物、健康的身體，但我和你一樣，並未意識到我對這些的依附之情，直到神全都拿走。於是我開始和神角力。我說：『我必須再買一輛車。』神說：『你不需要再買車，你需要的是我。』」\n\n那道牆會讓我們不再自以為應該成為什麼人，虛假的自我會一層層脫落，有基督內住的真實的我就開始浮現。\n\n理查・羅爾認為要活出神聖的靈性必須具備五種認知：(1)人生是艱苦的(2)你沒有那麼重要(3)你的人生不是以你為中心(4)當家作主的不是你(5)你早晚會死。\n\n梅頓的總結：「在這個世界中，能夠真正看清事實的，我猜恐怕不超過二十人。這二十個人是自由的，不依附任何受造物、不依附自己、甚至不依附神任何的禮物。」(p.134-136)", scripture: "腓四12「無論在甚麼景況都可以知足，這是我已經學會了。」", page: "p.134-136" }
  ];

  const bibleWaiters = [
    { person: "亞伯拉罕", years: "25年", detail: "七十五歲聽到應許，等了十一年失去耐性和侍女夏甲生下以實瑪利。但神強迫他再等十四年。人前人後所受的羞辱，將他磨練成史上最偉大的信心之父。", scripture: "創十六1-4；二十一" },
    { person: "摩西", years: "40年", detail: "犯下殺人罪、拯救以色列人的計畫宣告失敗後，花了四十年時間在曠野學習等候。神在曠野將他磨練成最謙卑的人。", scripture: "民十二3" },
    { person: "大衛", years: "13年", detail: "除掉歌利亞的驚天勝利之後，反而被迫亡命天涯。逃命近十三年，他失去夢想、家庭、名聲和屬世的安全感。在曠野裡被磨練成合神心意的人。", scripture: "撒上十六～撒下一" },
    { person: "哈拿", years: "多年", detail: "不孕多年，向神禱告未蒙應允，反遭丈夫的妾嘲笑。多年的痛苦和悲傷，將她磨練成敬虔愛神的母親，生下改變以色列歷史的撒母耳。", scripture: "撒上一、二" },
    { person: "耶穌", years: "30年", detail: "在天父所定的時間未到之前，甘於當個卑微的木匠之子。在曠野抵擋魔鬼試探，最後帶著聖靈的能力離開曠野展開服事。", scripture: "路四14" }
  ];

  const theologyTopics = [
    { title: "十架約翰的「心靈的黑夜」：五百年的智慧", content: "十架約翰（St. John of the Cross）五百多年前寫了經典之作《心靈的黑夜》（Dark Night of the Soul）。他將靈魂的成長分為三個階段：開始、前進、完成。他強調不想停留在「開始」的階段就必須接受從神來的禮物：「暗夜」或「牆」。這其實就是在基督裡成長「常見的方式」，很多人卻因為不了解這一點無法走完旅程。(p.121-122)\n\n他將暗夜分為兩層：第一層「感官的暗夜」是在與基督同行的路上一定會遇到的；第二層「靈魂的暗夜」遇到的人比較少，他形容整個過程是「暴戾而嚴峻的」——「我們受到更大的打擊，被更大的苦難淹沒，更痛苦、更黑暗、更傷心……神聖超自然的光越明亮越純淨，相形之下我們的靈魂就越黑暗。」(p.126)\n\n十架約翰特別指出：人會很容易迷戀「對神的感覺」用感覺來取代神。然而這些感覺無論多寡都不是神，只是神派來的使者。為了使靈魂得剛強被煉淨，神會將這些感覺統統拿走。他寫道：「（神）潔淨靈魂、消滅靈魂、倒空靈魂、焚燒靈魂的七情六慾、將靈魂感染到的陋習全數燒毀——就像烈火燒毀金屬的黴菌和鐵鏽。」(p.123)\n\n但同時，除了除去罪，神還會為我們的靈魂加添一些東西。祂會用人無法理解的方式將祂的愛注入我們裡面。我們在苦難中若能堅持不放棄，大有能力的神也會強行進入我們裡面。神必將祂自己的一部分注入你的性格，成為我們與祂同行的記號。(p.124)", scriptures: ["約壹四1 一切的靈你們不可都信，總要試驗那些靈", "來十二5-6 主所愛的祂必管教", "伯二十三10 祂試煉我之後我必如精金", "瑪三2-3 祂如煉金之人的火…祂必坐下如煉淨銀子的"], reflection: "你是否正處在「暗夜」中？你能否分辨你正在經歷的是「日常試煉」還是「靈魂的暗夜」？你是否迷戀「對神的感覺」多過迷戀神自己？如果神把你所有的「好感覺」拿走，你還會跟隨祂嗎？" },
    { title: "「心禱」（Jesus Prayer）：從破碎到安息的古老操練", content: "「主耶穌基督，神的兒子，可憐我這個罪人。」這個禱告改編自路加福音18:9-14的比喻：稅吏在聖殿裡禱告「神啊，開恩可憐我這個罪人」，耶穌說他比法利賽人更蒙神悅納。自六世紀開始，心禱就是東正教的靈修基礎，幫助信徒扎根於神、依靠神。(p.129-130)\n\n操練方式：從早到晚隨著心跳的節奏反覆禱告——吸氣時念「主耶穌基督，神的兒子」，呼氣時念「可憐我這個罪人」。讓這個禱告成為呼吸的一部分。\n\n心禱的核心不是「我很糟糕」的自我貶低，而是「我需要神的憐憫」的真實認知。這正是穿牆後「更深的破碎」所帶來的果子：不再自以為義，而是承認自己從頭到腳都需要恩典。聖方濟說：「一無所求的人是有福的，因為每件事都能讓他快樂。」他知道沒有人能靠自己的本事賺到一顆星星或一次日落——感恩和依靠神才是一切現實的基底。(p.129)", scriptures: ["路十八13 神啊，開恩可憐我這個罪人！", "詩五十一17 神所要的祭就是憂傷的靈", "林後十二9 我的恩典夠你用的因為我的能力是在人的軟弱上顯得完全"], reflection: "你願意嘗試操練心禱嗎？每天在通勤、走路或睡前隨著呼吸默念。持續一週觀察這個操練對你內在的影響。「可憐我這個罪人」比你想像的更難說出口嗎？為什麼？" },
    { title: "「不依附」的靈性：保羅的自由之道與羅爾的五個認知", content: "保羅在哥林多前書七29-31提出一個極其激進的生活觀：「有妻子的要像沒有妻子；哀哭的要像不哀哭；快樂的要像不快樂；置買的要像無有所得；用世物的要像不用世物，因為這世界的樣子將要過去了。」這不是說不要享受生活，而是認知到這些事物不等於我們的生命。我們身上帶著永恆的記號。(p.134-135)\n\n理查・羅爾的五個認知更加震撼：(1)人生是艱苦的(2)你沒有那麼重要(3)你的人生不是以你為中心(4)當家作主的不是你(5)你早晚會死。這五點和穿牆之後不再依附世界所領悟到的聖經真理有異曲同工之處。(p.135-136)\n\n梅頓的總結：「在這個世界中能夠真正看清事實的，恐怕不超過二十人。這二十個人是自由的，不依附任何受造物、不依附自己、甚至不依附神任何的禮物。」(p.136)\n\n別忘了，神的旨意是我們在走完旅程之後與祂在愛裡連結。我們享受這個世界這是應該的，因為神所造的都是好的。我們喜愛大自然、喜愛人類、喜愛神的恩賜、喜愛神在受造物中的顯現——但不受轄制。依附的越少，越能享受最純粹的快樂。(p.136)", scriptures: ["林前七29-31 用世物的要像不用世物", "腓四11-13 我無論在甚麼景況都可以知足", "太六33 你們要先求祂的國和祂的義", "約壹二15-17 不要愛世界和世界上的事"], reflection: "你的生命中有哪些人事物是你很難「不依附」的？如果明天失去了它們你的信仰會崩塌嗎？羅爾的五個認知中哪一個最震撼你？你能否說出「人生是艱苦的、我沒那麼重要、當家作主的不是我、我早晚會死」——並且從中找到自由而非沮喪？" }
  ];

  const taiwanExamples = [
    { title: "🧱 華人基督徒的「撞牆」經驗", scenario: "在華人教會中，許多人在信主初期經歷火熱的階段（階段1-3），但遭遇重大挫折——事業失敗、婚姻危機、健康問題、教會紛爭——就覺得信仰「不管用了」。有些人選擇離開教會，有些人強撐著但內心冷淡，有些人開始質疑「我是不是信錯了？」還有人從一間教會跳到另一間，以為換個環境就能解決問題——但牆跟著他們走。", challenge: "如果你正在經歷「牆」，不要急著逃避或找出路。問自己：「這道牆是否是神把我帶到這裡的？」讀詩篇88篇和約伯記。允許自己在黑暗中等候。找一位成熟的屬靈長輩分享你的狀態——不是要得到答案而是要得到陪伴。", insight: "本章最重要的區分：「穿牆」不是「撞牆」——很多人撞牆之後被彈回原地，下次再撞痛苦更甚。面對牆，作者的反應是「從旁邊繞過、從上頭跳過，甚至考慮在底下挖個洞——但這些方法沒有一樣奏效」，最後他只好硬著頭皮直接穿過去。穿牆需要神的帶領，而且可能需要好幾個月甚至幾年。(p.120)" },
    { title: "⏰ 華人文化中的「等候」困難", scenario: "華人文化講求效率和速成：「時間就是金錢」「快速解決問題」是我們的DNA。在教會也是如此：「禱告三天沒回應就換策略」「信主三個月還沒改變一定是方法不對」「那個小組不增長一定是帶領的人有問題」。但穿牆的核心正是「在混沌未明中忍耐等候」——亞伯拉罕等了二十五年、摩西等了四十年、大衛等了十三年——這對習慣掌控和高效的華人基督徒來說特別困難。", challenge: "這一週練習「無目的的等候」：找一段時間（哪怕只是十分鐘）什麼都不做。不看手機不聽音樂不禱告不讀經。只是安靜等候。觀察你的焦慮程度——你為什麼這麼害怕什麼都不做？那個焦慮從何而來？", insight: "作者自己的暗夜持續了至少兩年。他說：「我相信神為了清理我這種根深柢固、老愛跑在祂前頭的毛病，特地把我的牆加寬（還額外多加了幾道小牆）。」(p.133) 等候神不是被動的浪費時間——而是最激進的信心行動。" },
    { title: "🏆 「不依附」在台灣物質主義社會中的挑戰", scenario: "台灣社會高度物質化：房子、車子、學歷、薪水、社會地位——這些都成了身分的延伸。在教會中也不例外：教會的大小、聚會人數、奉獻金額、事工的「成果」都容易成為依附的對象。保羅說「用世物的要像不用世物」——在台灣社會中聽起來幾乎不可能。更難的是「不依附」人的認可——「牧師怎麼看我？小組長怎麼評價我？弟兄姊妹覺得我屬靈嗎？」", challenge: "列出你生命中最難放手的五樣東西（可以是物質的也可以是非物質的：名聲、認可、關係、計畫、健康）。為每一樣禱告：「主啊，如果祢把這個拿走，我還能站得住嗎？」觀察你的內心反應——是平安還是恐慌？", insight: "羅爾的五個認知對華人基督徒特別震撼：(1)人生是艱苦的(2)你沒有那麼重要(3)你的人生不是以你為中心(4)當家作主的不是你(5)你早晚會死。在「面子文化」和「成就導向」的華人社會中，每一點都是反文化的宣告。(p.135-136)" },
    { title: "🌑 教會中的「暗夜」禁忌", scenario: "在許多華人教會中，表達信仰的懷疑和掙扎是禁忌。「你怎麼可以懷疑神？」「你是不是犯了什麼罪？」「你要更多禱告讀經。」這些「標準答案」讓正在經歷暗夜的弟兄姊妹感到更加孤立和羞愧——不敢說出真話，只好假裝一切都好，或乾脆離開教會。但情感健康的信心會承認：「我很迷惘」「我不知道神為什麼要這樣」「我很受傷」「我很憤怒」「神哪，祢為何棄我於不顧？」(p.121)", challenge: "如果你身邊有人似乎正在經歷「暗夜」，不要急著給答案或引用經文。試著只是陪伴：「我不知道你正在經歷什麼，但我願意陪你。你不需要假裝。」有時候最有力量的話是「我也不知道為什麼」。當約伯的三個朋友在頭七天靜靜坐在地上不說話時，他們是最好的朋友。後來他們一開口就犯錯了。", insight: "作者的暗夜中，他心裡想要放棄——永遠放棄神和祂的教會。但他沒有停止屬靈操練，還是順從地扮演好領袖的角色。這告訴我們：在暗夜中，信仰的操練可能感覺毫無意義——但堅持下去是唯一的出路。不是因為我們做對了什麼，而是因為神在暗中動工。(p.125)" },
    { title: "🙏 心禱在華人靈修傳統中的應用", scenario: "華人基督徒的禱告常是「報告式」的（報告需要、感謝事項、代禱事項）或「宣告式」的（宣告經文、捆綁釋放）。但心禱提供一種完全不同的方式：不是向神要東西也不是宣告什麼，而是簡單地認知自己的軟弱和對神的依靠。「主耶穌基督，神的兒子，可憐我這個罪人」——隨著呼吸的節奏反覆默念，讓整個人沉浸在神的同在中。這不是技巧而是生活方式。(p.129-130)", challenge: "嘗試操練心禱一週。早上醒來時、通勤時、睡前，隨著呼吸默念：「主耶穌基督，神的兒子，可憐我這個罪人。」吸氣時念前半句，呼氣時念後半句。不要評估效果——只是持續操練。一週後寫下你的體驗：你是否發現「可憐我這個罪人」比想像中更難說出口？", insight: "心禱的核心是「破碎」——承認我是罪人中的罪魁，完全依靠神的憐憫。在華人「要面子」「要堅強」的文化中，這是最反文化的操練。但穿牆之後的第一個特徵正是「更深的破碎」——不是自我貶低而是真實的認知。(p.127-130)" }
  ];

  const weeklyChallenge = [
    { week: "第一週", title: "定位你的信心階段", mission: "仔細閱讀六個信心階段的描述。誠實為自己定位：你目前在哪個階段？你是否正在面對一道「牆」？如果是，那道牆是什麼——是外在的危機還是內在的枯竭？像作者一樣寫下你的「牆」是由哪些事件堆砌而成的。和一位信任的人分享你的發現。思考：你是在「穿牆」還是在「撞牆」？你是否試圖繞過、跳過、或在底下挖洞？", scripture: "詩一三〇5-6「我等候耶和華，我的心等候；我也仰望祂的話。我的心等候主。」", journalPrompt: "你目前在哪個階段？你是如何來到這裡的？你最害怕什麼？你面前的「牆」是由哪些事件堆砌成的？" },
    { week: "第二週", title: "辨識七大屬靈瑕疵", mission: "閱讀十架約翰列出的七大屬靈瑕疵（驕傲、貪得無厭、奢侈、憤怒、屬靈貪食、嫉妒、懶惰）。為每一項打分（1-5分，5代表「非常符合我」）。選得分最高的兩項，思考它們在你屬靈生活中的具體表現。特別問自己：「我是否迷戀對神的感覺多過迷戀神自己？我是在追求神還是在追求屬靈的好感覺？」", scripture: "來十二5-6「主所愛的祂必管教；又鞭打凡所收納的兒子。」", journalPrompt: "哪兩項瑕疵得分最高？它們如何影響你與神的關係？你是否願意讓神「煉淨」這些瑕疵——即使過程像「烈火燒毀金屬的黴菌和鐵鏽」一樣痛苦？" },
    { week: "第三週", title: "操練「心禱」與等候", mission: "每天至少三次操練心禱：「主耶穌基督，神的兒子，可憐我這個罪人。」早上醒來時、中午吃飯前、晚上睡前。隨著呼吸節奏——吸氣念前半句呼氣念後半句。同時每天找十分鐘練習「無目的的等候」——什麼都不做只是安靜。不要評估效果不要分析感受——只是持續操練。", scripture: "路十八13「神啊，開恩可憐我這個罪人！」", journalPrompt: "操練心禱和等候時你有什麼體驗？是平靜？焦躁？無聊？感動？「可憐我這個罪人」比你想像的更難說出口嗎？「什麼都不做」讓你覺得自由還是焦慮？" },
    { week: "第四週", title: "練習「不依附」+ 讀五位等候者的故事", mission: "選擇一樣你很依附的東西（手機、社群媒體、咖啡、別人的認可——不必是壞東西），這一週刻意減少使用或放下它。同時每天讀一位聖經中「在牆後等候」的人的故事：週一亞伯拉罕（創十二～二十二章）、週二摩西（出二～四章）、週三大衛（撒上十六～二十四章）、週四哈拿（撒上一～二章）、週五耶穌（路四1-14）。默想他們如何在等候中被磨練。", scripture: "腓四11-13「我無論在甚麼景況都可以知足，這是我已經學會了。」", journalPrompt: "你選擇放下什麼？過程中你發現了什麼？五位等候者中哪一位最能引起你的共鳴？你在等候什麼？你能否在等候中信靠神？" }
  ];

  const groupDiscussion = [
    { category: "📖 信心的階段與牆", questions: ["你目前覺得自己在哪個信心階段？你是否正在面對一道「牆」？那道牆是什麼？", "你是否曾從階段3（積極參與）被推到階段4（牆）？那個經歷是什麼？你是如何度過的——還是你仍在牆後？", "猶大因為「受困」的感覺而放棄基督——你是否曾有過類似的衝動？是什麼讓你沒有放棄？（或者，你曾經短暫放棄過嗎？）", "「穿牆不是一次就夠了」——這句話讓你覺得安慰還是沮喪？為什麼？作者說他可能比較喜歡用「季節」來描述生命階段——你覺得你目前在什麼季節？"] },
    { category: "🌑 靈魂的暗夜", questions: ["暗夜的七個症狀中（美好感覺蒸發、天堂門緊閉、黑暗無助、操練不管用、不知神在做什麼……）你是否曾經歷過？描述那時的感受。", "如何區分「日常試煉」和「靈魂的暗夜」？你目前的困難屬於哪一種？", "十架約翰說人會「迷戀對神的感覺用感覺來取代神」——你有沒有這樣的傾向？你是在追求神還是在追求「對神的感覺」？", "作者對神說「祢這個虐待狂！我被祢剝皮剝得還不夠嗎？」——你對這種禱告有什麼反應？這算是敬虔的禱告嗎？", "暗夜會持續多久？可能好幾個月甚至幾年——你能想像這麼長時間感受不到神的同在嗎？你會怎麼做？"] },
    { category: "🕊️ 穿牆之後", questions: ["穿牆之後的四個特徵中（破碎、對奧祕感謝、能等候、不依附）哪一個你最渴望擁有？哪一個你覺得最遙遠？", "你有多容易「被激怒」？你的「被激怒指數」告訴你什麼關於你生命的破碎程度？", "塞翁失馬的故事說「有些壞事其實是祝福」——你生命中有這樣的經驗嗎？", "五位聖經中的等候者（亞伯拉罕、摩西、大衛、哈拿、耶穌）中哪一位最能引起你的共鳴？為什麼？", "羅爾的五個認知中（人生是艱苦的、你沒那麼重要、人生不以你為中心、你不是當家的、你早晚會死）哪一個最震撼你？", "作為小組我們可以如何陪伴正在經歷暗夜的弟兄姊妹？我們常犯的錯誤是什麼——像約伯的三個朋友那樣嗎？"] }
  ];

  const reflections = [
    "我目前在信心的哪個階段？是否正在面對一道牆？如果是那道牆是由哪些事件堆砌而成的？",
    "我面對牆的反應是什麼——繞過？跳過？挖洞？還是硬著頭皮穿過去？",
    "我是否迷戀「對神的感覺」多過迷戀神自己？我追求的是敬拜的感動還是神本身？",
    "在七大屬靈瑕疵中哪一個在我身上最明顯？我願意讓神透過暗夜來煉淨它嗎？",
    "我有多容易「被激怒」？這告訴我什麼關於我生命的破碎程度？",
    "如果神明天把我最依附的東西（或人）拿走我的信仰會崩塌嗎？",
    "我是否曾像作者一樣想要「永遠放棄神和祂的教會」？那時候發生了什麼？",
    "羅爾的五個認知中哪一個最震撼我？我能否從中找到自由而非沮喪？"
  ];

  const actions = [
    "用六個信心階段為自己定位。寫下你面前的「牆」是由哪些事件堆砌成的。",
    "為十架約翰的七大瑕疵打分數。選得分最高的一項在禱告中求神煉淨。",
    "操練心禱一週：「主耶穌基督，神的兒子，可憐我這個罪人。」隨著呼吸節奏反覆默念。",
    "每天十分鐘「無目的的等候」——什麼都不做只是安靜。記錄你的焦慮程度。",
    "選一樣你很依附的東西這週刻意減少使用。觀察你的內心反應並記錄。",
    "讀五位聖經等候者的故事（亞伯拉罕/摩西/大衛/哈拿/耶穌），默想他們如何在等候中被磨練。",
    "如果你身邊有人正在經歷暗夜——不要給答案只是陪伴。對他說「我願意陪你」。"
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
          <p className="text-slate-200 leading-relaxed mb-3" style={{fontSize:"17px"}}>每個跟隨耶穌的人都會在人生的某個時刻「撞牆」。本章透過基督徒生命旅程的六大聖經範例、信心的六個階段、十架約翰的靈魂暗夜與七大屬靈瑕疵、作者自己長達兩年以上的穿牆經歷、牆與日常試煉的區分、五位在牆後等候的聖經人物，以及穿牆之後的四個靈性特徵——帶領我們認識那道「牆」的本質，學習如何穿越它。</p>
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
            <p className="text-slate-200 leading-relaxed italic" style={{fontSize:"17px"}}>「每個跟隨耶穌的人，都會在人生的某個時刻『撞牆』，或者像古人說的『進入靈魂的暗夜』。若未能了解它的本質，恐怕會陷入長期的痛苦與困惑。反之，領受神藉著這道牆所預備的禮物，生命就能永遠改變。」 <span className="text-amber-300 text-sm ml-1">(p.115)</span></p>
          </div>
        </div>
      </div>

      {/* ========== 基督徒的生命是一趟旅程 ========== */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-amber-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><Mountain className="w-6 h-6 text-amber-600" />基督徒的生命是一趟旅程<span className="text-slate-400 bg-slate-100 px-2 py-1 rounded-md font-normal" style={{fontSize:"13px"}}>P115-116</span></h3>
        <p className="text-slate-600 mb-4 leading-relaxed" style={{fontSize:"17px"}}>這個比喻成功描繪了跟隨基督的歷程——移動、行動、暫停、起程、繞道、延遲和向未知前進。六位聖經人物的旅程：</p>
        <div className="space-y-3">
          {journeyExamples.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className={`flex items-start gap-4 rounded-xl p-4 border ${i === 5 ? 'bg-red-50 border-red-200' : 'bg-amber-50 border-amber-100'}`}>
              <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold ${i === 5 ? 'bg-red-200 text-red-800' : 'bg-amber-200 text-amber-800'}`} style={{fontSize:"13px"}}>{item.person.charAt(0)}</div>
              <div><div className={`font-bold mb-1 ${i === 5 ? 'text-red-800' : 'text-amber-800'}`} style={{fontSize:"16px"}}>{item.person}</div><p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>{item.detail}</p></div>
            </motion.div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-xl p-5 border border-red-200 mt-4">
          <p className="text-red-900 font-bold leading-relaxed" style={{fontSize:"17px"}}>⚠️ 猶大的悲劇：「這種『受困』的感覺很多基督徒都有，有些最後選擇全部放棄，殊不知神長遠的計畫是要藉著眼前的這面牆展開生命改變的工程。但他們的心靈被混亂與痛苦遮蔽了，看不到這個遠景。很多人不知道，穿越這道牆是在基督裡長大成熟必經的過程。」(p.116)</p>
        </div>
      </div>

      {/* ========== 信心的六個階段 ========== */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 md:p-8 border border-blue-200 shadow-sm">
        <h3 className="font-bold text-blue-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><Layers className="w-6 h-6 text-blue-600" />信心生活的六個階段<span className="ml-2 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full border border-blue-200">(p.117-120)</span></h3>
        <p className="text-slate-600 mb-2" style={{fontSize:"17px"}}>改編自珍納·哈柏格和羅伯·葛路奇的《關鍵之旅》。奧古斯丁、大德蘭、依納爵、衛斯理都曾記錄類似的旅程。這些階段層層相疊、環環相扣，不可能跳過。但在屬靈上我們很容易停滯在某個階段——靈魂的土壤就這樣慢慢越變越硬（可四1-20）。(p.117)</p>
        <div className="space-y-3 mt-4">
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

      {/* ========== 「牆」的具體描述 ========== */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><AlertTriangle className="w-6 h-6 text-red-500" />那道「牆」長什麼樣子？<span className="ml-2 text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full border border-red-200">(p.119-120)</span></h3>
        <p className="text-slate-600 mb-4" style={{fontSize:"17px"}}>對許多人來說，牆就是攪亂我們世界的危機。我們發現信心「不靈了」，感覺到根基岌岌可危卻找不到出路：</p>
        <div className="flex flex-wrap gap-2 mb-4">{wallTypes.map((w, i) => (<span key={i} className="bg-red-50 text-red-700 px-3 py-1.5 rounded-lg text-sm border border-red-200">{w}</span>))}</div>
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 mb-4">
          <div className="font-bold text-slate-700 mb-2" style={{fontSize:"16px"}}>📌 作者的「牆」是由一個又一個事件堆砌而成的：</div>
          <div className="space-y-1">{authorWallParts.map((p, i) => (<p key={i} className="text-slate-600 flex items-start gap-2" style={{fontSize:"15px"}}><span className="text-red-400">•</span>{p}</p>))}</div>
        </div>
        <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
          <p className="text-amber-800 font-bold" style={{fontSize:"16px"}}>💡 「面對這道牆，我的反應是從旁邊繞過、從上頭跳過，甚至考慮在底下挖個洞。但這些方法沒有一樣奏效，最後我只好硬著頭皮直接穿過去，因為留在原地實在太痛苦了。」(p.120)</p>
        </div>
      </div>

      {/* ========== 牆 vs. 試煉 ========== */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><Shield className="w-6 h-6 text-slate-600" />「牆」vs.「日常試煉」：如何分辨？<span className="ml-2 text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded-full border border-slate-200">(p.126)</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {wallVsTrial.map((w, i) => (
            <div key={i} className={`rounded-xl p-5 border ${w.color}`}>
              <h4 className={`font-bold mb-3 ${i === 0 ? 'text-green-800' : 'text-red-800'}`} style={{fontSize:"17px"}}>{w.type}</h4>
              <div className="flex flex-wrap gap-2 mb-3">{w.examples.map((e, j) => (<span key={j} className={`px-2 py-1 rounded-lg text-sm ${i === 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{e}</span>))}</div>
              <p className="text-slate-600 text-sm italic">{w.response}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 靈魂的暗夜 ========== */}
      <div className="bg-gradient-to-br from-slate-800 to-indigo-900 rounded-3xl p-6 md:p-8 border border-slate-700 shadow-sm text-white">
        <h3 className="font-bold text-amber-300 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><Moon className="w-6 h-6 text-amber-400" />受困牆後——靈魂的暗夜<span className="ml-2 text-xs bg-slate-700 text-amber-400 px-2 py-1 rounded-full border border-slate-600">(p.121-126)</span></h3>
        <p className="text-slate-300 mb-4" style={{fontSize:"17px"}}>很多虔誠愛主的基督徒因為對「牆」的認識太少，以致停滯不前。有些人躲在信心後面逃避痛苦，把「萬事互相效力」掛在嘴邊，歌頌在耶穌裡的得勝——但情感健康的信心會承認：</p>
        <div className="flex flex-wrap gap-2 mb-4">{["我很迷惘","我不知道神為什麼要這樣","我很受傷","我很憤怒","這件事我實在不明白","我現在很難過","神哪，祢為何棄我於不顧？"].map((c, i) => (<span key={i} className="bg-slate-700/60 text-amber-200 px-3 py-1.5 rounded-lg text-sm border border-slate-600">• {c}</span>))}</div>
        <div className="bg-slate-700/50 rounded-xl p-5 border border-slate-600 mb-4">
          <div className="font-bold text-amber-300 mb-2" style={{fontSize:"16px"}}>如何知道自己正處於「暗夜」？(p.122)</div>
          <div className="space-y-1">{darkNightSigns.map((s, i) => (<p key={i} className="text-slate-300 flex items-start gap-2" style={{fontSize:"15px"}}><span className="text-amber-400">•</span>{s}</p>))}</div>
        </div>
        <div className="bg-amber-900/30 rounded-xl p-4 border border-amber-700/50 mb-4">
          <p className="text-amber-200" style={{fontSize:"16px"}}>💡 「但其實神就是要藉此重新配置我們身上的管線，煉淨我們的情感與熱情，好教我們能以祂的愛為樂。神要我們體驗祂真正的甘甜與慈愛，渴望我們認識祂真正的平安與安息，釋放我們脫離對這世界不健康的依附與崇拜。為此，祂會把我們送入『愛火焚燒的暗夜』使我們得自由。」(p.122)</p>
        </div>
        <div className="bg-slate-700/50 rounded-xl p-5 border border-slate-600">
          <div className="font-bold text-amber-300 mb-3" style={{fontSize:"17px"}}>十架約翰的七大屬靈瑕疵 (p.122-123)</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {sevenFlaws.map((f, i) => (
              <div key={i} className="bg-slate-600/30 rounded-xl p-4 border border-slate-500/50 cursor-pointer hover:bg-slate-600/50 transition-colors" onClick={() => setOpenFlaw(openFlaw === i ? null : i)}>
                <div className="flex items-center justify-between"><span className="font-bold text-amber-300" style={{fontSize:"15px"}}>{f.num}. {f.flaw}</span>{openFlaw === i ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}</div>
                <AnimatePresence>{openFlaw === i && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}><p className="text-slate-300 text-sm mt-2">{f.desc}</p></motion.div>)}</AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========== 作者的穿牆之旅 ========== */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><MessageCircle className="w-6 h-6 text-slate-600" />作者的穿牆之旅<span className="text-slate-400 bg-slate-100 px-2 py-1 rounded-md font-normal" style={{fontSize:"13px"}}>P124-125</span></h3>
        <div className="space-y-3">
          {authorDarkNight.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className={`flex items-start gap-4 rounded-xl p-4 border ${i === 1 ? 'bg-red-50 border-red-200' : i === 6 ? 'bg-emerald-50 border-emerald-200' : i === 4 ? 'bg-amber-50 border-amber-200' : 'bg-slate-50 border-slate-100'}`}>
              <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold ${i === 6 ? 'bg-emerald-200 text-emerald-800' : i === 1 ? 'bg-red-200 text-red-800' : 'bg-slate-200 text-slate-800'}`} style={{fontSize:"14px"}}>{i+1}</div>
              <div><div className={`font-bold mb-1 ${i === 6 ? 'text-emerald-800' : i === 1 ? 'text-red-800' : 'text-slate-800'}`} style={{fontSize:"16px"}}>{item.phase}</div><p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>{item.detail}</p></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ========== 這會持續多久？ ========== */}
      <div className="bg-gradient-to-br from-slate-50 to-amber-50 rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><Clock className="w-6 h-6 text-amber-600" />這會持續多久？<span className="ml-2 text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded-full border border-slate-200">(p.126)</span></h3>
        <div className="space-y-4" style={{fontSize:"17px"}}>
          <p className="text-slate-600 leading-relaxed">「可能要好幾個月，也可能一、兩年或更久。抱歉，我知道這不是你想聽的，但時間有多久、暗夜有多黑，決定權在神手裡。祂對我們每個人都有一個獨特的計畫，知道我們裡面有多少東西需要清理，知道祂要把自己注入我們裡面到什麼程度。天父知道我們能承受多少。」(p.126)</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <div className="font-bold text-blue-800 mb-1" style={{fontSize:"16px"}}>第一層：感官的暗夜</div>
              <p className="text-slate-600 text-sm">在與基督同行的路上一定會遇到的。這是常見的經歷。</p>
            </div>
            <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200">
              <div className="font-bold text-indigo-800 mb-1" style={{fontSize:"16px"}}>第二層：靈魂的暗夜</div>
              <p className="text-slate-600 text-sm">遇到的人比較少。過程是「暴戾而嚴峻的」——「神聖超自然的光越明亮越純淨，相形之下我們的靈魂就越黑暗。」</p>
            </div>
          </div>
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
            <p className="text-amber-800 font-bold" style={{fontSize:"16px"}}>💡 穿牆不是一次就夠了。亞伯拉罕在牆前等了二十五年才等到以撒，過了十三年神又帶他來到另一道牆要他獻上以撒。摩西、以利亞、尼希米、耶利米、保羅都得「穿牆」好幾次。注意是「穿牆」不是「撞牆」——因為這些人都成功穿越到牆的另一面。(p.120)</p>
          </div>
        </div>
      </div>

      {/* ========== 穿牆之後的四個特徵 ========== */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-sm">
        <h3 className="font-bold text-emerald-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}><Sparkles className="w-6 h-6 text-emerald-600" />穿牆之後的四個靈性特徵<span className="ml-2 text-xs bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full border border-emerald-200">(p.127-136)</span></h3>
        <p className="text-slate-600 mb-4" style={{fontSize:"17px"}}>能帶我們穿牆而過的自始至終只有神。我們能做的就是相信祂、等候祂、順服祂、跟隨祂，在所有意念都催促我們快快找出路時仍忠心追隨祂。(p.127)</p>
        <div className="space-y-3">
          {afterWallSigns.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl border border-emerald-100 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-emerald-50 transition-colors" onClick={() => setOpenSign(openSign === i ? null : i)}>
                <h4 className="font-bold text-emerald-800" style={{fontSize:"18px"}}>{s.num}. {s.title}</h4>
                {openSign === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>{openSign === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <div className="px-5 pb-5 space-y-3">
                    <p className="text-slate-600 leading-relaxed whitespace-pre-line" style={{fontSize:"16px"}}>{s.detail}</p>
                    <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-200"><p className="text-emerald-700 text-sm font-medium">📖 {s.scripture}</p></div>
                    <p className="text-xs text-slate-400">{s.page}</p>
                  </div>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 五位聖經中的等候者 ========== */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-indigo-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><Clock className="w-6 h-6 text-indigo-600" />五位在牆後等候的聖經人物<span className="ml-2 text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full border border-indigo-200">(p.133-134)</span></h3>
        <div className="space-y-3">
          {bibleWaiters.map((b, i) => (
            <div key={i} className="bg-indigo-50 rounded-2xl border border-indigo-100 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-indigo-100 transition-colors" onClick={() => setOpenBibleWaiter(openBibleWaiter === i ? null : i)}>
                <div className="flex items-center gap-3"><span className="w-14 h-8 bg-indigo-200 rounded-lg flex items-center justify-center text-indigo-800 font-bold text-xs">{b.years}</span><h4 className="font-bold text-indigo-800" style={{fontSize:"18px"}}>{b.person}</h4></div>
                {openBibleWaiter === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>{openBibleWaiter === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <div className="px-5 pb-5 space-y-2">
                    <p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>{b.detail}</p>
                    <p className="text-indigo-600 text-sm">📖 {b.scripture}</p>
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
                    <p className="text-slate-600 leading-relaxed whitespace-pre-line" style={{fontSize:"16px"}}>{topic.content}</p>
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
          <div className="bg-amber-50 border-amber-200 border rounded-xl p-4"><div className="font-bold text-amber-700 mb-1.5" style={{fontSize:"17px"}}>🏔️ 生命的旅程 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.115-116</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>六位聖經人物的旅程（亞伯拉罕、摩西、以色列人、大衛、耶利米、猶大）展示了跟隨基督包含移動、暫停、繞道和向未知前進。猶大的悲劇提醒我們：放棄是最大的損失。</p></div>
          <div className="bg-blue-50 border-blue-200 border rounded-xl p-4"><div className="font-bold text-blue-700 mb-1.5" style={{fontSize:"17px"}}>🗺️ 六個信心階段 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.117-120</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>意識到神→門訓→積極參與→牆/進入內在→向外移動→被愛改變。層層相疊不可跳過。「牆」可能是各種危機——信心「不靈了」、找不到出路。作者的牆由五個事件堆砌而成。</p></div>
          <div className="bg-slate-100 border-slate-300 border rounded-xl p-4"><div className="font-bold text-slate-700 mb-1.5" style={{fontSize:"17px"}}>🌑 靈魂的暗夜 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.121-126</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>十架約翰的七大瑕疵。暗夜分兩層（感官的暗夜/靈魂的暗夜）。暗夜的目的是煉淨——「像烈火燒毀金屬的黴菌和鐵鏽」。作者的暗夜持續兩年以上。區分「日常試煉」（交通阻塞、惡老闆）和「牆」（大衛逃亡十三年、約伯失去一切）。</p></div>
          <div className="bg-emerald-50 border-emerald-200 border rounded-xl p-4"><div className="font-bold text-emerald-700 mb-1.5" style={{fontSize:"17px"}}>🕊️ 穿牆之後 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.127-136</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>四個特徵：(1)更深的破碎（乞丐比喻、心禱、被激怒指數）(2)對奧祕感謝（塞翁失馬、摩西從光到幽暗、阿奎那的稻草）(3)有能力等候（亞伯拉罕/摩西/大衛/哈拿/耶穌的等候故事）(4)不依附（保羅林前七29-31、羅爾五認知、梅頓的二十人）。穿牆不是一次就夠——只要與神的關係沒中斷就得常常穿牆。</p></div>
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
