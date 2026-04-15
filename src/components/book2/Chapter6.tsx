import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, BookOpen, ChevronDown, ChevronUp, Target, Brain, Sparkles, MessageSquareQuote, Layers, BookMarked, Clock, Sun, Moon, Coffee, Pause } from 'lucide-react';

export default function Chapter6({ expandAll }: { expandAll?: boolean }) {
  const [openElement, setOpenElement] = useState<number | null>(null);
  const [openPrinciple, setOpenPrinciple] = useState<number | null>(null);
  const [openTheology, setOpenTheology] = useState<number | null>(null);
  const [openChallenge, setOpenChallenge] = useState<number | null>(null);
  const [openTaiwan, setOpenTaiwan] = useState<number | null>(null);
  const [openSchedule, setOpenSchedule] = useState<number | null>(null);
  const [openResource, setOpenResource] = useState<number | null>(null);
  const [openExtend, setOpenExtend] = useState<number | null>(null);

  const ropeMetaphor = [
    { point: "暴風雪的致命危險", detail: "巴默爾在《隱藏的整全》一書中寫道，美國中西部的農夫會在房子後門和穀倉之間綁一根繩子，讓他們能在暴風雪中找到回家的路。暴風雪來得又急又猛，天昏地暗，伸手不見五指。有人明明只差幾步路就到家了，卻因為找不到路，凍死在家門口。", page: "p.167", icon: "🌨️" },
    { point: "靈性的暴風雪", detail: "我們不會說「不」。工作家庭兩頭燒，忙碌程度介於沒空和過勞之間。我們同時處理很多事，把待辦事項塞得毫無空隙。那種感覺很像上癮——不是對藥物和酒精上癮，而是對工作上癮。每一天的節奏感都被暴風雪給打亂了。", page: "p.167-168", icon: "🌪️" },
    { point: "突如其來的風暴", detail: "除了日常的忙碌暴風雪，還有那突如其來的風暴和考驗——失業、生病、關係破裂、財務危機——也常殺得我們措手不及。難怪有那麼多人茫然失措、不知何去何從。我們需要一根繩索帶我們回家。", page: "p.168", icon: "⛈️" },
    { point: "神預備的繩索", detail: "神預備了繩索，要保護我們不致走迷路。我們可以透過兩種流傳千年的古老操練找到這根繩索，那就是日課與安息日。暫停生活的腳步，目的不是要多加負擔，而是要重新調整生活，重新以神為目標——那是一種全新的生活方式。", page: "p.168-169", icon: "🪢" }
  ];

  const currentRopeProblems = [
    { problem: "早上親近神之後，不到幾個鐘頭就把神拋在腦後", time: "上午", icon: "🌅" },
    { problem: "中午開始對人失去耐性，說話也不太客氣", time: "中午", icon: "☀️" },
    { problem: "下午已經把神忘得一乾二淨", time: "下午", icon: "🌤️" },
    { problem: "吃晚飯時，神早就被拋到天邊，離我十萬八千里", time: "傍晚", icon: "🌆" },
    { problem: "太太和小孩在心裡納悶：「爸爸的基督信仰哪去了？」", time: "晚上", icon: "🌙" }
  ];

  const dailyOfficeElements = [
    {
      num: 1, title: "停下腳步", subtitle: "日課的主要精神",
      detail: "日課的次數多寡不是那麼重要，最重要的是能從容不迫地親近神，讓所讀的文字或所做的禱告能深入靈的裡面。我們暫停外在的活動，停下腳步，親近這位永活的神。每一次操練日課，都無異是在宣示：「我願意放下掌控的慾望！相信就算沒有我，神也能管理祂的世界！」",
      icon: "⏸️", page: "p.176", color: "emerald"
    },
    {
      num: 2, title: "專注", subtitle: "安靜坐著，讓思緒定下來",
      detail: "聖經命令我們：「你當默然倚靠耶和華，耐性等候祂。」（詩三十七7）「你們要休息，要知道我是神！」（詩四十六10）作者通常會先用五分鐘讓自己安靜：全神貫注、心靈敞開；安靜坐著；身體打直；緩慢而自然地深呼吸；眼睛閉上或看地上。發現思緒漫遊時，做個深呼吸帶回來——吸氣時求神用聖靈充滿，呼氣時把不屬神的都往外排。",
      icon: "🎯", page: "p.176-177", color: "blue"
    },
    {
      num: 3, title: "靜默", subtitle: "基督徒生活最基本的操練",
      detail: "魏樂德（Dallas Willard）曾說，靜默和獨處是基督徒生活最基本的操練。獨處就是離開人群，不做任何事，單單專注於神。靜默是讓內在和外在的聲音都安靜下來。盧雲說：「不獨處，就幾乎不可能過屬靈生活。」研究報告顯示一般人只能忍受十五秒的靜默。以利亞逃離耶洗別後，神不在風中、不在地震中、不在火中，而是用「微小的聲音」向他顯現。混亂之後的安靜充滿神的同在——今天，祂也在靜默中對我們說話。",
      icon: "🤫", page: "p.177-178", color: "violet"
    },
    {
      num: 4, title: "聖經", subtitle: "以詩篇為主要架構",
      detail: "千百年來，詩篇就是教會的禱告書。除了以賽亞書，耶穌最常引用的就是詩篇。詩篇的禱告涵蓋我們人生所有經驗，從生氣、憤怒、信靠到讚美，無所不包。每一次日課結束時，可以用主禱文慢慢禱告，一邊思想禱告的內容。使用工具的原則：如果有幫助就繼續，萬一沒幫助就停止。也許只要默想一節經文就好，然後安靜坐著，留意神如何在你心裡動工。",
      icon: "📖", page: "p.178-179", color: "amber"
    }
  ];

  const monasticSchedule = [
    { time: "上午 3:40", name: "夜間禱告", desc: "半夜起來，在深夜的靜默中與神相遇" },
    { time: "上午 6:00", name: "黎明頌", desc: "黎明前，迎接新的一天" },
    { time: "上午 6:25", name: "早禱", desc: "「第一個」小時，也是彌撒時間" },
    { time: "下午 12:15", name: "午時頌", desc: "「第六個」小時，一天的中間點" },
    { time: "下午 2:00", name: "午禱", desc: "「第九個」小時" },
    { time: "下午 5:40", name: "晚頌", desc: "傍晚時分，從工作轉入安息" },
    { time: "晚上 7:40", name: "晚禱", desc: "就寢前，回顧一天，交託給神" }
  ];

  const sabbathPrinciples = [
    {
      num: 1, title: "停下腳步", subtitle: "安息日的核心精神",
      detail: "在希伯來文，安息日的意思就是「停下來」。守安息日就是接受自己的有限，知道神就是神，這個世界不能沒有祂。作者從小就很討厭停下來——讀大學功課太多、教英文試卷太多、在哥斯大黎加學西班牙文不能停、牧會更忙。我們總告訴自己：等孩子長大、等存夠錢、等退休……到那時候才停。但事實是——即使我們死了，這個世界還是會照常運轉。每一個安息日，都是在提醒我們「要休息，要知道祂是神」（詩四十六10）。",
      story: "曾有一支由基督徒組成的蓬車隊，要從美國東路易市出發前往奧勒岡州。有人主張不再守安息日以免被暴風雪困住，於是分成兩組。結果守安息日的那組先到達——因為人和馬都得到充分的休息，其他六天趕路更有效率。(p.186)",
      scripture: "詩四十六10「你們要休息，要知道我是神。」", page: "p.184-186", icon: "🛑"
    },
    {
      num: 2, title: "好好休息", subtitle: "做讓自己重新得力的事",
      detail: "神在完成工作之後就安息了。答案很簡單：做些你喜歡並能讓自己重新得力的事。作者的安息日是星期六——刻意不接觸會讓他聯想到工作的人事物。他會睡午覺、運動、悠閒散步、讀小說、看好電影、晚上到外面用餐、盡量避開電腦和手機。但要享受安息日，就必須在週間找一天處理繳帳單、打掃、採買等耗神的事務。",
      replaceList: "工作、讓體力透支的事、讓自己很忙的事、同時做很多事、具有競爭性的事、憂慮、做決定、趕進度、談話、使用科技產品（手機、電視、電腦和社群媒體）",
      scripture: "創二1-4 天地萬物都造齊了……神便安息了。", page: "p.186-188", icon: "😴"
    },
    {
      num: 3, title: "歡喜快樂", subtitle: "享受神的創造，品味生命的美好",
      detail: "神完成創造後「看著一切所造的都甚好」（創一31），傳達了喜樂、完成、讚嘆和玩樂的意思。無論世俗或基督教文化，都嚴重地「缺乏喜樂」。神要我們放慢腳步，專心享受食物的香氣與美味，好整以暇地欣賞一棵樹、一片葉子、一朵花。用五官好好享受生命的奇妙——「從一粒沙看見世界，從一朵花看見天堂」。",
      story: "在麥當勞的洗手間洗手——享受溫水滑過指尖、手心、手背的感覺，把手放在烘手機底下搓揉等水蒸發——沒有馬上離開，沒有把溼答答的手往褲子上抹。那一次，非常享受在安息日好好洗手的樂趣。(p.189)",
      scripture: "創一31 神看著一切所造的都甚好。", page: "p.188-190", icon: "🎉"
    },
    {
      num: 4, title: "默想神", subtitle: "與神的百姓一同敬拜",
      detail: "默想神的慈愛，永遠是安息日的焦點。在猶太人和基督教歷史上，安息日包括與神的百姓一同敬拜、享受祂的同在、朗誦和研讀聖經，以及靜默。每一個安息日都能淺嘗天上永恆榮耀盛宴的音樂、食物與美善。當我們眺望神國度完全降臨的日子，就能用正確的眼光看待在這世上短暫的時光。虔誠的猶太人會在週五晚上闔家用餐，點蠟燭、讀詩篇、祝福孩子、享用食物、向神獻上感謝。",
      scripture: "出三十一15 安息日是要「向耶和華守為聖的」。", page: "p.190-191", icon: "🕯️"
    }
  ];

  const sabbathExtensions = [
    { scope: "年度假期", detail: "每一年都安排休假（一週到數週），視為延長版安息日。參考四個原則來安排：停下腳步、好好休息、歡喜快樂、默想神。保證假期結束後不會疲累到想要再去度假。", icon: "🏖️" },
    { scope: "退修會", detail: "每隔四到六個月到外頭過一夜，好好親近神，過一個較長的安息日。或和教會一起去短宣、參加退修會或訓練研討會。但無論選擇哪一種，都必須以四個聖經原則來安排。", icon: "⛰️" },
    { scope: "服事中的安息", detail: "如果你一直很積極在教會服事（小組長、兒童事工、敬拜團、招待），可以每六到七年暫停下來休息。這段時間是用來向主守安息，不是為了逃避教會。", icon: "⛪" },
    { scope: "牧師安息假", detail: "如果你是牧師或基督徒領袖，每隔七到八年要休一個安息假（三到四個月）。作者自一九九六年起已休了三次安息假。這個做法對生命、婚姻和牧養的教會都帶來很大影響。太太開玩笑說：「這三十二年我和四個男人結婚，每一個都叫做彼得·史卡吉羅。」", icon: "🌿" },
    { scope: "安息年的聖經根據", detail: "神命令以色列人每七年讓土地休息一年（利二十五1-7）。祂知道這需要極大信心，所以應許讓第六年有大豐收，足以供應兩年的生活。安息日的原則可以應用在許多方面，幫助我們度過人生的暴風雪。", icon: "🌾" }
  ];

  const tenCommandments = [
    "除了我以外，你不可有別的神。",
    "不可為自己雕刻偶像。",
    "不可妄稱耶和華你神的名。",
    "當記念安息日，守為聖日。六日要勞碌做你一切的工，但第七日是向耶和華你神當守的安息日。這一日你和你的兒女、僕婢、牲畜，並你城裏寄居的客旅，無論何工都不可做。因為六日之內，耶和華造天、地、海，和其中的萬物，第七日便安息。所以耶和華賜福與安息日，定為聖日。",
    "當孝敬父母。",
    "不可殺人。",
    "不可姦淫。",
    "不可偷盜。",
    "不可作假見證陷害人。",
    "不可貪戀。"
  ];

  const theologyTopics = [
    {
      title: "原罪與安息：拒絕神設計的節奏",
      content: "神學家巴倫（Robert Barron）說，原罪的主因就是拒絕接受神為我們設計的節奏。伊甸園的罪，追根究底，就是因為亞當和夏娃不願意停下來。他們應當擁抱自己的有限，不去吃分別善惡樹的果子。他們不當窺探那些屬於全能神的事。「按神的形像」，它的本質就是有能力像神一樣停下腳步。能夠放下工作休息，這就是效法神。一週休息一天，我們的大腦、身體、靈魂和情感會開始跟神接上線，按著祂的節奏工作和休息。(p.171)",
      scriptures: ["創二2-3 到第七日神造物的工已經完畢，就在第七日歇了祂一切的工。", "創三1-6 蛇對女人說：你們不一定死……於是女人見那棵樹的果子好做食物。"],
      reflection: "你是否意識到，自己每天的生活節奏更像「伊甸園裡的亞當夏娃」（拒絕停下來），還是更像「安息中的神」（完成工作後歡喜休息）？你拒絕停下來的深層原因是什麼——恐懼？不安全感？還是對自我價值的焦慮？"
    },
    {
      title: "安息日神學：從誡命到自由的宣告",
      content: "安息日在十誡中是內容最多、說明最詳細的誡命。以色列人在埃及當了四百年奴隸，沒有一天休息，被當作建造金字塔的工具，一週工作七天全年無休。神呼召他們離開埃及時，表明他們是按祂形像所造的，要照著神的設計過日子。今天我們拒絕向西方文化的壓力屈服，選擇守安息日，也是在表明我們是自由的百姓——神呼召我們離開那個試圖用工作和財物來證明自我價值的世界，進入自由。在猶太人漫長的三千五百年歷史裡，與其說是猶太人守安息日，不如說是安息日保全了整個猶太民族。(p.180-183)",
      scriptures: ["出二十8-11 當記念安息日，守為聖日。", "申五13-15 守安息日是記念神已經釋放你自由了。", "加五1 基督釋放了我們，叫我們得以自由。"],
      reflection: "你的安息日是「被迫如此行」還是「想要這麼做」？你是否把守安息日視為神的禮物和自由的宣告，還是另一項沉重的宗教義務？如果安息日保全了猶太民族三千五百年，它可以如何保守你的信仰生命？"
    },
    {
      title: "日課傳統：從修道院到日常生活",
      content: "日課（Daily Office）源自拉丁文opus，意思是「工作」——在早期教會，日課就是「神的工作」，是最重要的。大衛一天禱告七次（詩一一九164），但以理一天禱告三次（但六10），耶穌的門徒復活後仍在固定時間禱告（徒三1，十9）。主後五二五年，聖本篤為修士規畫每天八次日課禱告。作者在嚴規熙篤隱修會生活一週，和修士每天七次吟唱經文（每週吟唱一百五十篇詩篇），才三天就「彷彿被帶進另一個世界」。之後兩年，他陸續拜訪羅馬天主教、新教和東正教的修道院團體——從法國泰澤到英格蘭諾森伯蘭團體，大量閱讀教會歷史。(p.172-174)",
      scriptures: ["詩一一九164 我一天七次讚美你。", "但六10 但以理一日三次，雙膝跪在他神面前禱告感謝。", "徒三1 申初禱告的時候，彼得約翰上聖殿去。"],
      reflection: "如果修士們一天七次停下來親近神，數十年如一日，你願意嘗試一天兩次或三次「迷你日課」嗎？你覺得一天中最適合停下來的時間點是什麼時候？你需要做什麼調整才能讓這成為可能？"
    }
  ];

  const taiwanExamples = [
    {
      title: "⏰ 華人社會的「忙碌崇拜」",
      scenario: "在台灣的職場文化中，「忙」幾乎等於「有價值」。加班被視為敬業，準時下班反而有罪惡感。教會中也不例外——「愛主的人」往往等同於「忙碌服事的人」。小組長、敬拜團、兒童主日學、探訪、禱告會……行事曆被服事塞滿，反而沒有時間與神單獨相處。牧師和傳道人更是如此——安息日？那是「一般信徒」才有的奢侈。",
      challenge: "這週做一個實驗：在你的行事曆上先圈出安息日，然後才安排其他事情。觀察自己內心的抗拒：是害怕？是罪惡感？還是覺得「浪費時間」？把這些感受帶到神面前。",
      insight: "梅頓說：「如果我們比神所要求的還要忙碌，我們的生活就會形同自殘。」(p.194) 這對許多華人基督徒來說是震撼的提醒——我們以為忙碌是美德，但作者說那其實是一種暴力。"
    },
    {
      title: "📱 科技時代的靜默挑戰",
      scenario: "台灣智慧型手機普及率超過九成，平均每人每天使用手機超過七小時。在捷運上、等餐時、甚至睡前最後一件事和起床第一件事都是滑手機。研究顯示一般人只能忍受十五秒的靜默——在「萬物聯網」的台灣社會，這個數字可能更短。日課要求的「靜默」和「專注」，對數位原住民來說是前所未有的挑戰。",
      challenge: "嘗試「數位安息」：選擇一天（或至少半天），把手機關機或放在另一個房間。起初你可能會焦慮、無聊、不知所措——這正是日課操練的開始。在那個不舒服的空間裡，等候神。",
      insight: "以利亞在最黑暗的時刻，神不在風中、不在地震中、不在火中，而是在靜默中對他說話。(p.178) 如果我們永遠不靜默，怎麼聽得見那「微小的聲音」？"
    },
    {
      title: "🏠 華人家庭中的安息日實踐",
      scenario: "台灣的雙薪家庭比例極高，假日往往被補習班接送、大賣場採買、家族聚餐、公婆探訪佔滿。對有孩子的家庭來說，「整天什麼都不做」聽起來根本不可能。而且華人文化重視「勤勉」，讓孩子「閒著」可能被長輩批評為「懶惰」。守安息日似乎和現實生活格格不入。",
      challenge: "和家人一起設計「我們家的安息日」：不需要完美，從一個下午開始。可以包括：一起散步不趕時間、一起煮飯慢慢吃、關掉電視聊天、讀一段詩篇、為彼此禱告。讓孩子參與設計——他們可能比大人更懂得什麼叫「歡喜快樂」。",
      insight: "猶太人的安息日從週五晚上闔家用餐開始——點蠟燭、祝福孩子、享用食物、向神感謝。(p.191) 這完全可以融入華人家庭的節奏：週六晚上一頓特別的家庭晚餐，就是安息日的美好開始。"
    },
    {
      title: "⛪ 教會服事者的安息節奏",
      scenario: "在台灣的教會文化中，許多忠心的同工已經連續服事十年、二十年沒有停過。小組長覺得「組員需要我」，敬拜團覺得「少了我就找不到人」，主日學老師覺得「我不教誰教」。結果是越服事越疲憊，越疲憊越沒有與神的親密關係，越沒有親密關係越覺得服事空洞——但又不敢停下來，因為「這是神的工」。",
      challenge: "如果你已經連續服事超過五年，認真考慮和牧師討論一個「服事安息期」——三個月到半年暫停你的固定服事崗位。這不是逃避，而是「向主守安息」。用這段時間重新建立與神的個人關係、好好休息、歡喜快樂。",
      insight: "作者的太太說：「這三十二年我和四個男人結婚，每一個都叫做彼得·史卡吉羅。」(p.193) 每次安息假都帶來生命的更新。如果牧師需要安息假，一般同工更需要。"
    },
    {
      title: "🍵 從「泡茶文化」學習日課精神",
      scenario: "其實華人文化中已經有日課的影子——泡茶。台灣的泡茶文化要求：慢下來、專注於當下、細細品味每一泡的變化、和同桌的人安靜相處。茶道精神和日課的四個元素驚人地相似：停下腳步（放下工作泡茶）、專注（觀察茶湯的顏色和香氣）、靜默（不需要填滿每一刻的對話）、與美好的事物相交（品味神所造的茶葉）。",
      challenge: "把你的泡茶（或喝咖啡）時間轉化為一個迷你日課：泡茶時深呼吸三次（停下腳步）；等水開的時候默想一句經文（專注）；喝第一口時安靜感受（靜默）；感謝創造茶葉的神（與神相交）。每天至少一次。",
      insight: "日課的精神不是要在忙碌中多加負擔，而是要重新調整生活以神為目標。(p.169) 如果我們已經有泡茶的習慣，那只需要一個小小的轉化——加入意識到神的同在——就能成為日課的起點。"
    }
  ];

  const weeklyChallenge = [
    {
      week: "第一週", title: "認識你的暴風雪",
      mission: "用一個星期觀察自己的生活節奏。每天晚上花五分鐘記錄：(1) 今天有多少時刻我意識到神的同在？(2) 什麼時候我最忙碌、最焦慮？(3) 我有「停下來」的時刻嗎？(4) 如果從1到10評分，今天我對工作/忙碌的「上癮程度」是幾分？",
      scripture: "詩四十六10「你們要休息，要知道我是神。」",
      journalPrompt: "回顧這一週的記錄：什麼時候你最難停下來？你不願意停下來的深層恐懼是什麼——是怕落後？怕被淘汰？怕失去掌控？還是怕面對內心的空虛？"
    },
    {
      week: "第二週", title: "開始你的日課",
      mission: "選擇每天兩個時段（例如早上起床和晚上睡前）進行5-10分鐘的迷你日課。每次包含四個元素：(1)停下腳步——深呼吸三次，放下所有掛慮 (2)專注——安靜坐著，讓思緒定下來 (3)靜默——至少一分鐘的完全安靜 (4)聖經——慢慢讀一段詩篇（建議從詩篇23、46、121開始）。用主禱文結束。",
      scripture: "詩一一九164「我一天七次讚美你。」",
      journalPrompt: "操練日課一週後，你有什麼發現？哪個元素最困難？哪個元素最滋養你的靈魂？你是否開始感受到「從早到晚記念神」的不同？"
    },
    {
      week: "第三週", title: "預備你的安息日",
      mission: "選擇一天作為你的安息日（不一定是星期日）。提前一天做「預備日」的工作：處理帳單、採買、打掃、回覆重要訊息。安息日當天練習四個原則：(1)停下腳步——不做任何與工作相關的事 (2)好好休息——做讓你重新得力的事 (3)歡喜快樂——放慢腳步享受食物、大自然、人際關係 (4)默想神——讀聖經、禱告、或參加主日敬拜。",
      scripture: "出二十8 當記念安息日，守為聖日。",
      journalPrompt: "你的第一個安息日感覺如何？你是否焦慮、無聊、或有罪惡感？你是否發現「什麼都不做」比「忙碌」更需要信心？你在安息日中有遇見神嗎？"
    },
    {
      week: "第四週", title: "建立持續的節奏",
      mission: "回顧過去三週的操練，為自己設計一個可持續的生活節奏：(1)每天的日課——幾次？什麼時間？用什麼材料？(2)每週的安息日——哪一天？從幾點到幾點？預備日做什麼？(3)列出需要「斷」或「捨」的事來保護這個節奏。和你的配偶或屬靈夥伴分享這個計畫，請他們幫助你堅持。",
      scripture: "來四9-10「這樣看來，必另有一安息日的安息為神的子民存留。因為那進入安息的，乃是歇了自己的工，正如神歇了祂的工一樣。」",
      journalPrompt: "想像一年後的你——如果你真的持續每天日課、每週安息日，你的生命會有什麼不同？你和神的關係、你和家人的關係、你的情感健康、你的服事品質——會有什麼變化？"
    }
  ];

  const groupDiscussion = [
    {
      category: "🌨️ 暴風雪與繩索",
      questions: [
        "你生命中目前的「暴風雪」是什麼？你覺得自己正在「迷路」嗎？",
        "你現有的「繩索」（靈修、QT、讀經禱告）是否足夠讓你從早到晚都意識到神？如果不夠，你覺得缺少什麼？",
        "作者說「我們根本停不下來，一空下來就有罪惡感」——你有同感嗎？你覺得這種罪惡感從哪裡來？",
        "梅頓說忙碌是一種「暴力」——這個說法對你來說是否太極端？還是你其實認同？"
      ]
    },
    {
      category: "📿 日課的操練",
      questions: [
        "日課的四個元素（停下腳步、專注、靜默、聖經）中，哪一個對你最有吸引力？哪一個最讓你抗拒？",
        "如果每天要進行兩到三次、每次五到十分鐘的日課，你最大的障礙是什麼？你可以怎麼克服？",
        "「一般人只能忍受十五秒的靜默」——你自己的極限是多久？你害怕靜默嗎？為什麼？",
        "以利亞在風中、地震中、火中都沒有聽到神——而是在「微小的聲音」中。你有沒有類似的經歷——在意想不到的安靜時刻聽見神？"
      ]
    },
    {
      category: "🕯️ 安息日的實踐",
      questions: [
        "你目前有固定守安息日的習慣嗎？如果有，你的安息日長什麼樣子？如果沒有，最大的攔阻是什麼？",
        "安息日的四個原則（停、休息、歡喜、默想神）中，你覺得哪一個最難實踐？為什麼？",
        "蓬車隊的故事中，守安息日的那組反而先到達目的地。你相信這個原則嗎？你敢在自己的生活中「實驗」嗎？",
        "作為小組，我們可以如何彼此支持來建立守安息日的習慣？我們是否願意在安息日互不打擾（不傳工作訊息、不排活動）？"
      ]
    }
  ];

  const reflections = [
    "我目前的生活節奏更像「伊甸園裡拒絕停下來的亞當夏娃」還是「完成工作後歡喜休息的神」？",
    "我不願意停下來的深層恐懼是什麼——怕落後？怕被淘汰？怕失去掌控？還是怕面對內心的空虛？",
    "如果梅頓說的是對的——忙碌是一種暴力——我正在對自己和家人施加多少暴力？",
    "「日課的主要目標是從早到晚記念神並與祂相交」——我目前每天有多少時刻真正意識到神？",
    "我是否把守安息日視為「選擇」而非「誡命」？如果它和「不可殺人」並列在十誡中，我為什麼覺得可以忽略它？",
    "如果從現在開始每週守安息日，一年就有五十二天停班停課——我為什麼不願意接受神這份禮物？",
    "「其實不是我們在守安息日，而是安息日在守護我們」——這句話對我有什麼意義？"
  ];

  const actions = [
    "日課起步：選擇每天兩個時段（早晚各一次），進行5分鐘迷你日課（停下腳步→專注→靜默→讀一段詩篇→主禱文）。",
    "安息日預備：選定你的安息日是哪一天，提前一天做「預備日」工作（處理帳單、打掃、採買），讓安息日能真正休息。",
    "列出取代清單：參考書中列表，列出安息日要用休息來取代的十件事（工作、趕進度、做決定、使用科技產品等）。",
    "家庭安息日：和家人一起設計「我們家的安息日」，包括一頓特別的晚餐、散步、和不用手機的時間。",
    "數位安息：每週至少有一段時間關閉手機和社群媒體，在靜默中等候神。記錄你在那段時間的感受。",
    "推薦閱讀：選擇一本日課指南開始使用——菲莉絲·蒂克爾的《神聖時光》、諾森伯蘭團體的《凱爾特每日祈禱》、或《擁抱內在情感的40日練習》。"
  ];

  const colorMap: Record<string, string> = {
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-800",
    blue: "bg-blue-50 border-blue-200 text-blue-800",
    violet: "bg-violet-50 border-violet-200 text-violet-800",
    amber: "bg-amber-50 border-amber-200 text-amber-800"
  };

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="space-y-8">

      {/* ========== 章節標題 ========== */}
      <div className="bg-gradient-to-br from-slate-800 via-emerald-900 to-teal-900 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="relative">
          <div className="flex items-center gap-2 mb-2"><BookOpen className="w-5 h-5 text-emerald-300" /><span className="text-emerald-300 text-sm tracking-widest">第 6 章</span></div>
          <h1 className="font-extrabold mb-3" style={{fontSize:"30px"}}>發現日課與安息日的節奏</h1>
          <p className="text-emerald-200 text-lg mb-4">停下腳步，呼吸永恆的空氣</p>
          <p className="text-slate-200 leading-relaxed mb-3" style={{fontSize:"17px"}}>本章透過暴風雪中的繩索比喻，帶領我們認識兩種流傳千年的古老操練——日課與安息日。它們不是要在忙碌的生活中多加負擔，而是要重新調整生活，以神為中心。</p>
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
            <p className="text-slate-200 leading-relaxed italic" style={{fontSize:"17px"}}>「日課與安息日，就是在人生的暴風雪中，把我們帶回上帝身邊的繩索，也是穩固生命的錨。」 <span className="text-emerald-300 text-sm ml-1">(p.169)</span></p>
          </div>
        </div>
      </div>

      {/* ========== 暴風雪中的繩索 ========== */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><Sparkles className="w-6 h-6 text-teal-500" />暴風雪中的繩索<span className="ml-2 text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded-full border border-slate-200">(p.167-169)</span></h3>
        <div className="space-y-3">
          {ropeMetaphor.map((r, i) => (
            <div key={i} className="bg-gradient-to-r from-slate-50 to-teal-50 rounded-xl p-5 border border-teal-100 flex items-start gap-4">
              <span className="text-3xl flex-shrink-0">{r.icon}</span>
              <div>
                <span className="font-bold text-teal-800" style={{fontSize:"17px"}}>{r.point}</span>
                <p className="text-slate-600 mt-1 leading-relaxed" style={{fontSize:"16px"}}>{r.detail} <span className="text-slate-400 text-sm">{r.page}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 現有繩索不夠用 ========== */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 md:p-8 border border-amber-200 shadow-sm">
        <h3 className="font-bold text-amber-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><Clock className="w-6 h-6 text-amber-600" />現有的繩索並不夠用<span className="ml-2 text-xs bg-amber-100 text-amber-600 px-2 py-1 rounded-full border border-amber-200">(p.169-170)</span></h3>
        <p className="text-slate-600 mb-4" style={{fontSize:"17px"}}>作者坦誠地描述了自己每天信仰生活的崩塌過程——從早上靈修到晚上，神離他越來越遠：</p>
        <div className="space-y-2">
          {currentRopeProblems.map((p, i) => (
            <div key={i} className={`rounded-xl p-4 border flex items-center gap-3 ${i === 4 ? 'bg-red-50 border-red-200' : 'bg-white border-amber-100'}`}>
              <span className="text-2xl flex-shrink-0">{p.icon}</span>
              <div className="flex items-center gap-2">
                <span className={`font-bold text-sm px-2 py-0.5 rounded-full ${i === 4 ? 'bg-red-200 text-red-800' : 'bg-amber-200 text-amber-800'}`}>{p.time}</span>
                <span className={`${i === 4 ? 'text-red-700 font-bold' : 'text-slate-600'}`} style={{fontSize:"16px"}}>{p.problem}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-amber-100 rounded-xl p-4 border border-amber-300 mt-4">
          <p className="text-amber-900 font-bold" style={{fontSize:"16px"}}>💡 好的屬靈操練很多——自我省察禱告、退修會、靈性指導、禁食、背經等。但日課和安息日能提供一個更強而有力的節奏，把我們的生命牢牢穩固住。(p.170)</p>
        </div>
      </div>

      {/* ========== 修道院的日程 ========== */}
      <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-6 md:p-8 border border-violet-100 shadow-sm">
        <h3 className="font-bold text-violet-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}><Moon className="w-6 h-6 text-violet-600" />嚴規熙篤隱修會的日課節奏<span className="ml-2 text-xs bg-violet-100 text-violet-500 px-2 py-1 rounded-full border border-violet-200">(p.172-173)</span></h3>
        <p className="text-slate-500 mb-4" style={{fontSize:"16px"}}>作者在修道院生活一週，每天七次和修士一起吟唱經文。才三天就「彷彿被帶進另一個世界」：</p>
        <div className="space-y-2">
          {monasticSchedule.map((s, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-violet-100 flex items-center gap-4 cursor-pointer hover:bg-violet-50 transition-colors" onClick={() => setOpenSchedule(openSchedule === i ? null : i)}>
              <span className="font-mono font-bold text-violet-700 w-24 flex-shrink-0" style={{fontSize:"14px"}}>{s.time}</span>
              <div className="flex-1">
                <span className="font-bold text-violet-800" style={{fontSize:"15px"}}>{s.name}</span>
                <AnimatePresence>{(expandAll || openSchedule === i) && (
                  <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="text-slate-500 text-sm mt-1">{s.desc}</motion.p>
                )}</AnimatePresence>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-violet-100 rounded-xl p-4 border border-violet-200 mt-4">
          <p className="text-violet-800 italic" style={{fontSize:"16px"}}>「神聖日課的時間一到，一聽到通知的聲音，修士就會立刻放下手邊的工作，以最快的速度趕過去……沒錯，他們最喜歡的就是神的工作。」——聖本篤會規 (p.174)</p>
        </div>
      </div>

      {/* ========== 日課的四個核心元素 ========== */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-emerald-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}><Coffee className="w-6 h-6 text-emerald-600" />日課的四個核心元素<span className="ml-2 text-xs bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full border border-emerald-200">(p.176-179)</span></h3>
        <p className="text-slate-500 mb-4" style={{fontSize:"16px"}}>無論選擇哪一種日課方式，這四個元素缺一不可。可以單獨使用，也能合併進行：</p>
        <div className="space-y-3">
          {dailyOfficeElements.map((el, i) => (
            <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer bg-gradient-to-r from-slate-50 to-emerald-50 hover:from-emerald-50 hover:to-teal-50 transition-colors" onClick={() => setOpenElement(openElement === i ? null : i)}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{el.icon}</span>
                  <div>
                    <h4 className="font-bold text-slate-800" style={{fontSize:"18px"}}>{el.num}. {el.title}</h4>
                    <p className="text-slate-500 text-sm">{el.subtitle}</p>
                  </div>
                </div>
                {openElement === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>{(expandAll || openElement === i) && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <div className="px-5 pb-5 space-y-3 bg-white">
                    <p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>{el.detail}</p>
                    <p className="text-xs text-slate-400">{el.page}</p>
                  </div>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
        <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200 mt-4">
          <p className="text-emerald-800 font-bold" style={{fontSize:"16px"}}>💡 日課的主要目標，就是從早到晚記念神並與祂相交。使用工具的原則：如果有幫助就繼續，沒幫助就停止。(p.179)</p>
        </div>
      </div>

      {/* ========== 停下腳步、降服於神 ========== */}
      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-6 md:p-8 border border-teal-100 shadow-sm">
        <h3 className="font-bold text-teal-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><Pause className="w-6 h-6 text-teal-600" />停下腳步、降服於神<span className="ml-2 text-xs bg-teal-100 text-teal-600 px-2 py-1 rounded-full border border-teal-200">(p.171)</span></h3>
        <div className="bg-white rounded-xl p-5 border border-teal-100 mb-4">
          <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>伊甸園的罪，追根究底，就是因為沒有做到「停下來」。亞當和夏娃應當擁抱自己的有限，不去吃分別善惡樹的果子。神學家巴倫說，原罪的主因就是拒絕接受神為我們設計的節奏。</p>
        </div>
        <div className="bg-teal-100 rounded-xl p-5 border border-teal-200">
          <p className="text-teal-900 leading-relaxed italic" style={{fontSize:"17px"}}>「行動，然後是順從地跟隨；奮鬥，然後是放下；做自己能做的，然後等待上帝成就……只有在這樣的節奏之下，心靈才會領悟。」<span className="text-teal-600 text-sm ml-2">(p.171)</span></p>
        </div>
      </div>

      {/* ========== 安息日：十誡中最長的誡命 ========== */}
      <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-6 md:p-8 border border-rose-100 shadow-sm">
        <h3 className="font-bold text-rose-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><BookOpen className="w-6 h-6 text-rose-600" />十誡中最長的誡命<span className="ml-2 text-xs bg-rose-100 text-rose-600 px-2 py-1 rounded-full border border-rose-200">(p.180-182)</span></h3>
        <p className="text-slate-600 mb-4" style={{fontSize:"17px"}}>守安息日和不可說謊、不可殺人、不可姦淫並列為神的誡命。十誡裡，內容最多、說明最詳細的就是第四條：</p>
        <div className="space-y-2">
          {tenCommandments.map((cmd, i) => (
            <div key={i} className={`rounded-xl p-4 border ${i === 3 ? 'bg-rose-100 border-rose-300 ring-2 ring-rose-200' : 'bg-white border-rose-100'}`}>
              <div className="flex items-start gap-3">
                <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${i === 3 ? 'bg-rose-300 text-rose-900' : 'bg-rose-100 text-rose-600'}`}>{i+1}</span>
                <p className={`leading-relaxed ${i === 3 ? 'text-rose-900 font-bold' : 'text-slate-600'}`} style={{fontSize: i === 3 ? "16px" : "15px"}}>{cmd}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-rose-100 rounded-xl p-4 border border-rose-200 mt-4">
          <p className="text-rose-800 font-bold" style={{fontSize:"16px"}}>💡 以色列人在埃及當了四百年的奴隸，一週七天工作全年無休。守安息日就是宣告：我們是自由的百姓！神呼召我們離開那個用工作和財物證明自我價值的世界。(p.181-182)</p>
        </div>
      </div>

      {/* ========== 守安息日的四個聖經原則 ========== */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-indigo-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}><Sun className="w-6 h-6 text-indigo-600" />守安息日的四個聖經原則<span className="ml-2 text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full border border-indigo-200">(p.183-191)</span></h3>
        <p className="text-slate-500 mb-4" style={{fontSize:"16px"}}>畢德生說：「如果想要在受造界裡好好過日子，就一定要守安息日。」世俗的「休假」是為了充電讓工作更有效率——那是「假冒的安息日」：</p>
        <div className="space-y-3">
          {sabbathPrinciples.map((p, i) => (
            <div key={i} className="border border-indigo-100 rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer bg-indigo-50 hover:bg-indigo-100 transition-colors" onClick={() => setOpenPrinciple(openPrinciple === i ? null : i)}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{p.icon}</span>
                  <div>
                    <h4 className="font-bold text-indigo-800" style={{fontSize:"18px"}}>{p.num}. {p.title}</h4>
                    <p className="text-indigo-500 text-sm">{p.subtitle}</p>
                  </div>
                </div>
                {openPrinciple === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>{(expandAll || openPrinciple === i) && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <div className="px-5 pb-5 space-y-3 bg-white">
                    <p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>{p.detail}</p>
                    {p.story && <div className="bg-amber-50 rounded-xl p-4 border border-amber-200"><p className="text-amber-800 italic" style={{fontSize:"15px"}}>📖 {p.story}</p></div>}
                    {p.replaceList && <div className="bg-blue-50 rounded-xl p-4 border border-blue-200"><p className="text-blue-700 font-medium text-sm mb-1">在安息日用休息來取代：</p><p className="text-slate-600" style={{fontSize:"15px"}}>{p.replaceList}</p></div>}
                    <div className="bg-indigo-50 rounded-xl p-3 border border-indigo-200"><p className="text-indigo-700 text-sm font-medium">📖 {p.scripture}</p></div>
                    <p className="text-xs text-slate-400">{p.page}</p>
                  </div>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-indigo-100 to-blue-100 rounded-xl p-5 border border-indigo-200 mt-4">
          <p className="text-indigo-900 font-bold" style={{fontSize:"17px"}}>🎁 神每年給你五十二天停班停課！每週二十四小時操練停下腳步、好好休息、歡喜快樂、默想神——你很快會發現，其他六天也能進行這些事。我懷疑這才是神真正的計畫！(p.192)</p>
        </div>
      </div>

      {/* ========== 安息假與其他應用 ========== */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 md:p-8 border border-green-100 shadow-sm">
        <h3 className="font-bold text-green-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}><Layers className="w-6 h-6 text-green-600" />安息假與更廣泛應用<span className="ml-2 text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full border border-green-200">(p.192-193)</span></h3>
        <p className="text-slate-500 mb-4" style={{fontSize:"16px"}}>安息日的原則可以延伸應用到更長的時間週期：</p>
        <div className="space-y-3">
          {sabbathExtensions.map((ext, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-green-100 cursor-pointer hover:border-green-300 transition-colors" onClick={() => setOpenExtend(openExtend === i ? null : i)}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{ext.icon}</span>
                <span className="font-bold text-green-800" style={{fontSize:"16px"}}>{ext.scope}</span>
              </div>
              <AnimatePresence>{(expandAll || openExtend === i) && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <p className="text-slate-600 mt-2 leading-relaxed" style={{fontSize:"15px"}}>{ext.detail}</p>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 梅頓的警告 ========== */}
      <div className="bg-slate-800 rounded-3xl p-6 md:p-8 text-white">
        <h3 className="font-bold text-amber-300 mb-4 flex items-center gap-2" style={{fontSize:"22px"}}><Heart className="w-6 h-6 text-amber-400" />在暴風雪中抓緊繩索：梅頓的警告<span className="ml-2 text-xs bg-amber-900/50 text-amber-300 px-2 py-1 rounded-full border border-amber-700">(p.194)</span></h3>
        <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm border border-white/10">
          <p className="text-slate-200 leading-relaxed italic" style={{fontSize:"17px"}}>「行動主義和工作過度都是當代很普遍的暴力類型……現代生活的忙碌和壓力，就是一種非常普遍的暴力。讓自己被成堆互相衝突的思慮帶著走、屈從於太多的要求、參與太多計畫、想要幫助每個人做好每件事，這其實就是在向暴力屈服……這會扼殺內在智慧的根源，使工作不見果效。」</p>
          <p className="text-amber-300 text-sm mt-2">——梅頓 (Thomas Merton)</p>
        </div>
        <p className="text-slate-300 mt-4" style={{fontSize:"16px"}}>如果用暴力對待自己，就無法用基督的愛去愛人。</p>
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
        <h3 className="font-bold text-teal-700 mb-4" style={{fontSize:"22px"}}>📝 第六章總結：抓住那根繩索</h3>
        <div className="space-y-3">
          <div className="bg-blue-50 border-blue-200 border rounded-xl p-4"><div className="font-bold text-blue-700 mb-1.5" style={{fontSize:"17px"}}>🌨️ 暴風雪的比喻 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.167-169</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>人生的暴風雪讓我們迷失方向。神預備了繩索——日課與安息日——帶我們回家。目的不是多加負擔，而是重新以神為中心。</p></div>
          <div className="bg-emerald-50 border-emerald-200 border rounded-xl p-4"><div className="font-bold text-emerald-700 mb-1.5" style={{fontSize:"17px"}}>📿 日課的四個元素 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.176-179</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>停下腳步（放下掌控）→ 專注（安靜坐著讓思緒定下來）→ 靜默（讓內在外在的聲音都安靜）→ 聖經（以詩篇為主要架構的禱告與默想）。</p></div>
          <div className="bg-indigo-50 border-indigo-200 border rounded-xl p-4"><div className="font-bold text-indigo-700 mb-1.5" style={{fontSize:"17px"}}>🕯️ 安息日的四個原則 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.183-191</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>停下腳步（信靠神掌權）→ 好好休息（做讓自己重新得力的事）→ 歡喜快樂（享受神的創造品味生命）→ 默想神（與神的百姓一同敬拜）。</p></div>
          <div className="bg-amber-50 border-amber-200 border rounded-xl p-4"><div className="font-bold text-amber-700 mb-1.5" style={{fontSize:"17px"}}>🌿 安息假與延伸 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.192-193</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>安息日原則延伸應用：年度假期、退修會、服事中的安息（每6-7年）、牧師安息假（每7-8年）。安息日的四個原則適用於所有層面。</p></div>
        </div>
      </div>

      {/* ========== 章末禱告 ========== */}
      <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl p-6 md:p-8 border border-emerald-200">
        <h3 className="font-bold text-emerald-800 mb-3" style={{fontSize:"20px"}}>🙏 章末禱告 <span className="text-xs font-normal text-emerald-600">(p.194-195)</span></h3>
        <p className="text-emerald-900 leading-relaxed italic" style={{fontSize:"17px"}}>「主，幫助我緊緊抓住祢，就像我在暴風雪中抓住繩索一樣。我需要祢。祢要我在一天當中停下腳步一次、兩次、三次來親近祢，困難度很高！但我知道我需要祢。求祢指教我當如何行。教導我用禱告的心來親近祢。我知道為了守安息日，我的生活方式必須有大幅的改變。幫助我把未完成的事交託給祢，不要妄想自己能代替祢管理祢的世界，再一次釋放我，讓我的生活能夠單單以祢為中心。奉耶穌的名禱告，阿們。」</p>
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
