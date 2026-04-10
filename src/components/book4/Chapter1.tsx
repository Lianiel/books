import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Globe, Users, BookOpen, ChevronDown, ChevronUp, Target, Brain, Lightbulb, MessageCircle, Search, AlertTriangle, Sparkles, Eye, HandHeart, Church, CalendarCheck, BookMarked, MessageSquareQuote } from 'lucide-react';

export default function Chapter1() {
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [openParable, setOpenParable] = useState<number | null>(null);
  const [openTheology, setOpenTheology] = useState<number | null>(null);
  const [openChallenge, setOpenChallenge] = useState<number | null>(null);
  const toggle = (i: number) => setOpenSection(openSection === i ? null : i);
  const toggleParable = (i: number) => setOpenParable(openParable === i ? null : i);
  const toggleTheology = (i: number) => setOpenTheology(openTheology === i ? null : i);
  const toggleChallenge = (i: number) => setOpenChallenge(openChallenge === i ? null : i);

  const scienceFacts = [
    { fact: "星球距離", detail: "如果星球之間的平均距離再增大一點，像地球這類行星就不會形成；如果再小一點，生命存在所需的行星軌道就不會出現。" },
    { fact: "碳氧比例", detail: "如果碳和氧的比例跟今天的情況稍有不同，就沒有人可以在這裏呼吸空氣。" },
    { fact: "地軸傾斜", detail: "把地軸的傾斜角度往某方向稍偏一點，我們就會凍死；往另一方向稍偏一點，我們就會被燒死。" },
    { fact: "地球位置", detail: "地球跟太陽的距離稍微近一點或遠一點，兩者的體積稍微大一點或小一點，甚至地球轉動的速度與現今稍有不同——只要以上任何一點改變了，溫度變化就會要了人的命。" },
    { fact: "宇宙擴張率", detail: "只要把宇宙的擴張率提高或降低百萬分之一，生命就不可能出現。這讓所有專家都無法否認，無論他們本身有無宗教信仰。" }
  ];

  const parables = [
    {
      title: "🐑 走失的羊",
      story: "有個人有一百隻羊。有一隻毛茸茸的小傢伙晃蕩到別處去了。於是他把九十九隻留在原地，出去找那隻走失的。他一直找一直找，終於找到了。他輕柔地抱起這隻羊，扛在肩上，帶回羊群。然後他召請牧羊人朋友來，說：「我們開個慶祝會吧，我找回那隻走失的羊了！」",
      significance: "走失的羊對牧人的生計很重要。牧人不惜撇下九十九隻，全力尋找那一隻迷失的。",
      application: "神不會因為教會裏已經有九十九個「好基督徒」，就放棄追尋那一個迷失的人。",
      extendedScriptures: ["以西結書34:11-12「主耶和華說：看哪，我必親自尋找我的羊，將牠們尋見。」", "以賽亞書53:6「我們都如羊走迷，各人偏行己路。」", "約翰福音10:11「我是好牧人；好牧人為羊捨命。」"]
    },
    {
      title: "💰 遺失的錢幣",
      story: "有個女人有十個銅錢，她弄丟了其中一枚。於是她點起燈來，打掃屋子，移開所有家具，不停地找不停地找，終於找到了。這女人找到後開心得不得了，把朋友都叫了來，請他們跟她一起慶祝。",
      significance: "這女人很可能是寡婦，這錢幣可能是她全部財產的十分之一。遺失的錢幣攸關她的生存。",
      application: "每一個靈魂在神眼中都是不可或缺的，值得翻遍全屋去尋找。",
      extendedScriptures: ["馬太福音13:45-46「天國好像買賣人尋找好珠子，遇見一顆重價的珠子，就去變賣他一切所有的，買了這顆珠子。」", "以賽亞書43:4「因我看你為寶為尊，又因我愛你。」"]
    },
    {
      title: "🏠 浪子回頭",
      story: "有一個人有兩個男孩子，小的那個帶著滿口袋的現金遠走他方，走上放蕩之路。當他阮囊羞澀、在餵豬討生活時終於覺悟過來，決定回家。他父親每天都引頸企盼這兒子歸來，在他離大門還有很長一段距離時就看到了他。滿懷希望的父親跑上前去擁抱他。孩子說：「爸爸，我犯了很大的錯，不配再作你的兒子。」父親打斷他：「噓，別這麼說！我很高興你終於回來了！」然後命人舉辦盛大宴會。",
      significance: "父親每天引頸企盼、看到時跑上前去擁抱——這描繪的是神對每一個偏離之人那份永不放棄的愛。",
      application: "不管我們偏離多遠、犯了多少錯，神的愛說：「儘管你們偏離正途，仍然是我看重的！真的如此！」",
      extendedScriptures: ["羅馬書5:8「惟有基督在我們還作罪人的時候為我們死，神的愛就在此向我們顯明了。」", "耶利米書31:3「我以永遠的愛愛你，因此我以慈愛吸引你。」", "約翰一書4:10「不是我們愛神，乃是神愛我們，差祂的兒子為我們的罪作了挽回祭，這就是愛了。」"]
    }
  ];

  const gymStory = [
    { phase: "初見", detail: "健身中心雇了一名印度移民——身材短小、禿頭、講一口破英語、個性有點怪，而且是虔誠的回教徒。「換言之，他不是我會想邀他打高爾夫球的人。」" },
    { phase: "冷落", detail: "健身中心裏很多人都不大想跟這人往來。他們的行為很清楚地顯示，對他們而言他是那種「算不得甚麼」的人。" },
    { phase: "靠近", detail: "作者開始設法跟他作朋友，起初還頗有點尷尬。他們談話、開玩笑，漸漸有了一些交往。有一天作者給他一本聖經，下回見面時，他給了作者一本可蘭經！" },
    { phase: "痛苦", detail: "有一天他焦慮地來找作者：「比爾先生，我太太離開我，現在我孤單一人。我真不知道該怎麼辦！」作者是他第一個講起這事的人。" },
    { phase: "掙扎", detail: "聖靈引導作者擁抱他，但作者在內心喊暫停：「首先，我不是天生情感豐富的人，特別是對男人！其次，主啊，祢要我擁抱的這人與無神論者差不多。」" },
    { phase: "順服", detail: "聖靈說：「比爾，這些我都知道。但是我要他在這樣的痛苦中知道真神非常看重他。我只是要我的一個兒女把這意思傳達給他。你願意為我這麼做嗎？」" },
    { phase: "突破", detail: "「當我用手臂圍住他的時候，他立即崩潰，淚水氾濫在我肩頭。這對他來說顯然是相當重要的一刻。如今回想起來，對我也相當重要。」" }
  ];

  const dangerSigns = [
    { sign: "評斷名單", desc: "我們高談闊論地評斷甚麼人可以為神所用、甚麼人不能。不知不覺地，我們把神所關心的名單縮減到周圍剛好跟我們很像的那一小撮人。" },
    { sign: "排斥外人", desc: "「那些『只來一回的人』對我不重要。」——如果我們認為他們對神也不重要，就不知不覺卻很有效地除掉任何想傳播福音的盼望。" },
    { sign: "自義態度", desc: "宗教領袖不滿耶穌跟「那種人」混在一起——這種自義態度正是耶穌講三個比喻的理由。我們是否也在不自覺中成了現代的法利賽人？" },
    { sign: "隱形名單", desc: "作者承認自己隨身帶著一張「不太重要的人」的名單：加油站服務員、餐廳女服務生、結帳員、開車慢的人、鄰居、飛機上喝醉的人、意見不同的同事……" }
  ];

  const theologyTopics = [
    {
      title: "神的形象（Imago Dei）：人為何如此寶貴？",
      content: "創世記1:26-27記載：「神說：我們要照著我們的形像、按著我們的樣式造人。」每個人之所以寶貴，不是因為他們的表現、成就或宗教背景，而是因為他們是按照神的形像被造的。這個「形像」（צֶלֶם, tselem）包含了理性思考、道德判斷、創造力和關係能力。即使人墮落了，這個形像並沒有完全消失——這就是為什麼每個人都有永恆的價值。",
      scriptures: ["創世記1:26-27", "詩篇8:3-6「我觀看你指頭所造的天，並你所陳設的月亮星宿，便說：人算甚麼，你竟顧念他？」", "創世記9:6「凡流人血的，他的血也必被人所流，因為神造人是照自己的形像造的。」"],
      reflection: "如果每個人都帶著神的形像，那麼我對待任何人——包括我不喜歡的人——的方式，是否反映出我對這個真理的尊重？"
    },
    {
      title: "神主動尋找人：恩典的本質",
      content: "路加福音15章的三個比喻有一個驚人的共同點：都是「擁有者」主動去尋找「失去的」。牧人去找羊，女人去找錢，父親望向地平線等候兒子。這揭示了恩典的本質：不是人先尋找神，而是神先尋找人。保羅在羅馬書3:11說「沒有尋求神的」——是神主動來尋找我們。這個次序顛覆了所有宗教的邏輯：不是人努力爬向神，而是神俯身來就人。",
      scriptures: ["羅馬書3:11「沒有明白的，沒有尋求神的。」", "約翰福音6:44「若不是差我來的父吸引人，就沒有能到我這裡來的。」", "路加福音19:10「人子來，為要尋找、拯救失喪的人。」", "啟示錄3:20「看哪，我站在門外叩門，若有聽見我聲音就開門的，我要進到他那裡去。」"],
      reflection: "如果連神都主動來尋找人，我是否願意走出舒適圈，主動去接近那些還不認識神的人？"
    },
    {
      title: "「一個罪人悔改」的天國觀點",
      content: "路加福音15:10說「一個罪人悔改，在神的使者面前也是這樣為他歡喜」。注意，不是「一萬個」，而是「一個」。這句話揭示了天國的價值觀：神不是用數量來衡量成功，而是看重每一個個體的回轉。在人看來微不足道的一次談話、一次關心、一次禱告，可能正是天國慶祝會的序幕。這也提醒我們：傳福音的果效不在於我們「帶了多少人信主」，而在於我們是否忠心地活出見證、分享福音。結果是神的事，忠心是我們的事。",
      scriptures: ["路加福音15:7「一個罪人悔改，在天上也要這樣為他歡喜，較比為九十九個不用悔改的義人歡喜更大。」", "哥林多前書3:6-7「我栽種了，亞波羅澆灌了，惟有神叫他生長。可見栽種的算不得甚麼，澆灌的也算不得甚麼，只在那叫他生長的神。」"],
      reflection: "我是否把傳福音當成「業績」來看？還是把它當成參與神救贖計畫的榮幸？"
    },
    {
      title: "「往內生長」vs.「向外展開」：教會的DNA檢驗",
      content: "作者用商業界的「顧客革命」來類比教會的問題。使徒行傳1:8是教會的誕生宣言：「你們要……直到地極，作我的見證。」教會從第一天起就被設計為向外擴展的有機體，而不是自我服務的俱樂部。但歷史上，教會一再陷入「往內生長」的陷阱：忙於內部爭論、程序維護、小圈圈社交，卻忘了「外面的人」。潘霍華（Dietrich Bonhoeffer）說：「教會只有在為他人而存在時，才是真正的教會。」",
      scriptures: ["使徒行傳1:8「但聖靈降臨在你們身上，你們就必得著能力，並要……直到地極，作我的見證。」", "馬太福音28:19-20「所以，你們要去，使萬民作我的門徒。」", "馬太福音5:13-14「你們是世上的鹽……你們是世上的光。」"],
      reflection: "我們小組的時間分配中，有多少比例是用在「照顧自己人」？有多少是用在「接觸外面的人」？比例是否需要調整？"
    }
  ];

  const taiwanExamples = [
    {
      title: "🏪 便利商店裡的「不重要的人」",
      scenario: "每天去便利商店買咖啡，店員永遠是那幾位。你叫得出他們的名字嗎？你曾經多問一句「今天還好嗎」嗎？對很多人來說，這些服務人員就是「隱形人」——我們需要他們的服務，卻不把他們當「人」看。",
      challenge: "本週去便利商店時，記住店員的名牌，叫他的名字，真誠地說一句「辛苦了」。觀察他的反應，也觀察你自己內心的變化。",
      insight: "耶穌從不把任何人當「隱形人」。祂看見了稅吏撒該、看見了井邊的撒馬利亞婦人、看見了人群中患血漏的女人。「看見」就是看重的開始。"
    },
    {
      title: "🏠 社區裡的外籍配偶和移工",
      scenario: "台灣有數十萬外籍配偶和移工。他們離鄉背井，語言不通，文化衝擊，往往是社區裡最孤單的一群人。在教會裡，我們是否只關心「跟我們一樣的人」？這些外籍朋友是否在我們的「關心名單」上？",
      challenge: "找一位住在你社區的外籍配偶或移工，用簡單的中文或微笑打招呼。如果教會有外語崇拜或關懷事工，考慮參與一次。",
      insight: "作者在健身中心主動跟印度移民交朋友的故事，跟我們在台灣的處境何其相似。「如果神看重每個人，那麼神也看重這個外籍朋友。」"
    },
    {
      title: "⛪ 教會裡的「復活節基督徒」",
      scenario: "在華人教會中，過年過節時偶爾出現的「慕道友」或「久未聚會的弟兄姊妹」，我們的態度是歡迎還是在心裡碎碎念？「怎麼平常不來，過年才來？」「他們只是來吃愛宴的吧？」——這些想法是否似曾相識？",
      challenge: "下次有久未出現的人來到教會，不要評斷他為什麼來，而是真心歡迎他。主動坐在他旁邊，聊聊近況，讓他感受到被接納。",
      insight: "書中那位說「那些只來一回的人對我不重要」的弟兄，可能就是我們自己。耶穌說：「康健的人用不著醫生，有病的人才用得著。我來本不是召義人悔改，乃是召罪人悔改。」（路五31-32）"
    },
    {
      title: "📱 LINE群組裡的沉默者",
      scenario: "小組LINE群組裡，總有些人很少說話、很少回應。我們是否把他們當成「不活躍的成員」而忽略？或者我們有沒有想過，他們可能正在經歷困難、感到孤單、不知道如何開口？",
      challenge: "本週私訊一位小組裡最安靜的成員，不談教會事務，只是關心他的生活。「最近好嗎？有什麼我可以為你禱告的嗎？」",
      insight: "湯姆在信仰旅程中也經歷了很長的沉默期——他在「過程中，朝正確方向移動」，但還沒準備好表態。沉默不代表不在意。"
    },
    {
      title: "🏢 職場上信仰「不同頻」的同事",
      scenario: "在台灣的職場中，大部分同事都不是基督徒。有些人拜拜、有些人無神論、有些人覺得宗教很奇怪。我們是否因此把他們劃入「不可能信主」的名單？或者我們是否不敢在職場表明自己的信仰？",
      challenge: "不需要一開始就「傳福音」。先從「活出不一樣」開始：在壓力中保持平靜、在同事有困難時主動幫忙、在背後不說人壞話。讓人因為你的生命而好奇你的信仰。",
      insight: "作者跟湯姆的友誼中，最重要的不是「說教」，而是真誠的關係。兩年的友誼，才慢慢打開了屬靈對話的門。在職場中，關係永遠走在信息前面。"
    }
  ];

  const weeklyChallenge = [
    {
      week: "第一週",
      title: "「看見」的操練",
      mission: "這一週，每天刻意「看見」一個你平常會忽略的人。可能是大樓管理員、早餐店老闆、公車司機、清潔人員。用眼神接觸、微笑、或一句簡短的問候，讓他們知道你「看見」了他們。",
      scripture: "馬可福音10:21「耶穌看著他，就愛他。」",
      journalPrompt: "每天晚上記錄：今天我「看見」了誰？我跟他們說了什麼？他們的反應是什麼？我內心有什麼感受？"
    },
    {
      week: "第二週",
      title: "撕掉「不重要名單」",
      mission: "把你心中那張「不太重要的人」名單寫在紙上——寫得越具體越好。然後在禱告中，把這張名單交給神，求祂改變你看待這些人的眼光。最後，把紙撕掉，象徵你決定不再用這張名單來評斷人。",
      scripture: "加拉太書3:28「並不分猶太人、希臘人，自主的、為奴的，或男或女，因為你們在基督耶穌裡都成為一了。」",
      journalPrompt: "寫下你的名單上有哪些人？你為什麼把他們放在那裡？撕掉名單後，你的感受是什麼？"
    },
    {
      week: "第三週",
      title: "跨出舒適圈",
      mission: "這一週，找一位你認識但平常不會主動聯絡的人（可能是不同背景、不同年齡、不同社會階層的人），邀請他喝一杯咖啡或吃一頓飯。不帶任何議程，只是真誠地認識他、聽他的故事。",
      scripture: "腓立比書2:4「各人不要單顧自己的事，也要顧別人的事。」",
      journalPrompt: "你選了誰？為什麼選他？見面後你對這個人有什麼新的認識？這次經驗改變了你對他的看法嗎？"
    },
    {
      week: "第四週",
      title: "為三個人禱告",
      mission: "列出三位你認識但還未信主的人。這一週每天為他們各禱告至少一分鐘——不是禱告「讓他們趕快信主」，而是禱告「讓神祝福他們的生活、讓他們經歷神的愛」。同時，找機會用實際行動表達你的關心。",
      scripture: "提摩太前書2:1,4「我勸你第一要為萬人懇求、禱告……祂願意萬人得救，明白真道。」",
      journalPrompt: "你選了哪三位？為什麼選他們？一週的禱告後，你對他們的感受有什麼變化？你採取了什麼實際行動？"
    }
  ];

  const groupDiscussion = [
    {
      category: "破冰問題",
      questions: [
        "如果你可以邀請任何一個人（活著的或已故的）共進晚餐，你會選誰？為什麼？",
        "回想你生命中，有沒有一個人是你一開始不喜歡，後來卻成為好朋友的？分享那個故事。"
      ]
    },
    {
      category: "經文探討",
      questions: [
        "讀路加福音15:1-7。法利賽人為什麼不高興？耶穌的回應揭示了什麼？",
        "在三個比喻中（失羊、失錢、浪子），你最能產生共鳴的是哪一個？為什麼？",
        "路加福音15:10說「一個罪人悔改」天上就歡喜——注意是「一個」，不是「很多個」。這對你有什麼意義？",
        "耶穌在十字架上對盜賊說的話（路23:43），如果換成是你在旁邊聽到，你會有什麼反應？"
      ]
    },
    {
      category: "生活反思",
      questions: [
        "你心中是否有一張「不太重要的人」名單？你願意分享上面有誰嗎？",
        "你認為我們教會/小組是比較「往內生長」還是「向外展開」的？具體表現在哪裡？",
        "書中作者在健身中心擁抱那位印度朋友時經歷了內心的掙扎。你有沒有類似的經驗——聖靈感動你做某件事，但你的本能在抗拒？",
        "在台灣的處境中，你覺得「看重人」最大的挑戰是什麼？是文化差異？語言障礙？忙碌的生活？還是自己的偏見？"
      ]
    },
    {
      category: "實踐計畫",
      questions: [
        "這一週，你打算怎樣具體地「看重」一個你平常忽略的人？",
        "作為一個小組，我們可以一起做什麼事來接觸小組以外的人？",
        "你願意在小組中分享你正在為哪三位未信主的朋友禱告嗎？我們可以一起為他們禱告。"
      ]
    }
  ];

  const reflections = [
    "我心中是否有一張「不太重要的人」名單？哪些人被我排除在神的關心之外？",
    "我在教會的生活是否太過「往內生長」，以致忘了接觸外面的人？",
    "我是否曾經像法利賽人一樣，評斷甚麼人「可以為神所用」、甚麼人「不能」？",
    "上一次我主動關心一個跟我很不一樣的人，是什麼時候？",
    "如果神看重每一個人，我的生活方式是否反映出這個信念？",
    "對於那些「只來一回的人」、偶爾出現在教會的人，我的態度是歡迎還是排斥？",
    "當聖靈感動我去接近某個「不方便」的人時，我是否像作者一樣在內心喊暫停？"
  ];

  const actions = [
    "本週刻意找一位你平常不會主動交談的人（同事、鄰居、服務人員），真誠地關心他的近況。",
    "把路加福音十五章重新讀一遍，思想三個比喻中神尋找失喪者的心。",
    "在禱告中列出三位你認識但還未信主的人，開始每天為他們禱告。",
    "反省自己的「舒適圈」——是否只跟同類型的人來往？考慮如何跨出這個圈子。",
    "下次在公共場所遇到服務人員時，刻意多說一句關心的話，把他們當「人」而非「工具」看待。",
    "檢視你心中的「不重要名單」，把上面的人一一寫下來，然後在禱告中把他們交託給神。"
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* ========== Header ========== */}
      <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-3xl p-8 md:p-10 border border-amber-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="relative">
          <div className="flex items-center gap-2 text-amber-600 font-medium mb-2" style={{fontSize:"15px"}}>
            <BookOpen className="w-5 h-5" />
            PART 1：為何要成為有感染力的基督徒？
          </div>
          <h2 className="font-extrabold text-amber-900 mb-4" style={{fontSize:"30px"}}>第一章：神看重人</h2>
          <p className="text-amber-800 leading-relaxed mb-3" style={{fontSize:"18px"}}>
            成為有感染力的基督徒的第一步，是用神的眼光看人——認識到<strong>每個人在神眼中都有無可取代的價值</strong>。
          </p>
          <p className="text-amber-700 leading-relaxed" style={{fontSize:"17px"}}>
            本章透過科學界的「人本法則」、商業界的「顧客革命」、耶穌在路加福音十五章的三個比喻、十架上的對話，
            以及作者在健身中心的親身經歷，層層推進一個核心信息：神極其看重每一個人，不分種族、薪水、性別、教育水準或宗教標籤。
            而我們也必須學會像神一樣看重人——這是傳福音的根基。
          </p>
        </div>
      </div>

      {/* ========== 開場故事：水手湯姆 ========== */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-amber-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}>
          <MessageCircle className="w-6 h-6 text-amber-600" />
          開場故事：水手湯姆的信仰旅程
          <span className="text-slate-400 bg-slate-100 px-2 py-1 rounded-md font-normal" style={{fontSize:"13px"}}>P7-9</span>
        </h3>
        <div className="space-y-4">
          <div className="bg-amber-50 rounded-xl p-5 border border-amber-100" style={{fontSize:"17px"}}>
            <p className="text-slate-700 leading-relaxed mb-3">
              湯姆踏上帆船不久，大家就看出他是一流的水手，勇猛的賽者，愈在冒險邊緣愈蓬勃有活力。
              賽後他喜歡把音樂開得震天價響，和一堆朋友找刺激。他想贏，但也想在比賽過程中開心盡興。
              他是很極端的人——<strong>要不就是完全投入，要不就是完全不理會</strong>。
              一旦他相信某件事、對它起了興趣，就甚麼也攔不住他。但如果他不感興趣，你連要他看上一眼也難。
              挑戰就在這裏：湯姆對任何信仰都沒興趣。
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-amber-200 space-y-4" style={{fontSize:"17px"}}>
            <div className="font-bold text-amber-800 mb-1" style={{fontSize:"18px"}}>🔑 轉折點：一節經文改變一切</div>
            <p className="text-slate-700 leading-relaxed">
              有一晚湯姆手臂掛著吊帶出現。作者問他發生甚麼事，他說前一晚他去賽車，之前喝太多酒，有點失控，跟別人打起架。
              他已經知道作者是牧師，所以半開玩笑地問能不能為他禱告。
            </p>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 space-y-2">
              <p className="text-slate-600"><span className="font-bold text-amber-700">作者：</span>「也許改天找個時間吧。但是現在我有一節經文要給你。」</p>
              <p className="text-slate-600"><span className="font-bold text-slate-500">湯姆：</span>「好啊，唸來聽聽。」</p>
              <p className="text-slate-600"><span className="font-bold text-amber-700">作者：</span>「聖經加拉太書六章7節說：『人種的是甚麼，收的也是甚麼。』」</p>
              <p className="text-slate-600"><span className="font-bold text-slate-500">湯姆（愣住）：</span>「不會真的是這麼說的吧？呃？」</p>
              <p className="text-slate-600"><span className="font-bold text-amber-700">作者：</span>「絕對是。這裏說，如果你種了你昨晚種的那種種子，就會收成你今天掛的這種吊帶。」</p>
              <p className="text-slate-600"><span className="font-bold text-slate-500">湯姆：</span>「你騙我！」</p>
              <p className="text-slate-600"><span className="font-bold text-amber-700">作者：</span>「我不是在跟你開玩笑。而且我想你應該把這節經文好好背起來！」</p>
            </div>
            <p className="text-slate-700 leading-relaxed">
              後來幾天，作者都會語帶責備地問他到底背好沒有。沒過多久他就正視著作者把經文背出來了。
              那個夏天，這整件事成了他們之間常講的笑話，<strong>開啟了指向屬靈談話的門</strong>。接下來一季，湯姆對信仰的興趣似乎多了一些。
            </p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-amber-200 space-y-4" style={{fontSize:"17px"}}>
            <div className="font-bold text-amber-800 mb-1" style={{fontSize:"18px"}}>📖 漸進過程（歷時兩年）</div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 space-y-2">
              <p className="text-slate-600"><span className="font-bold text-slate-500">湯姆（餐廳用餐時）：</span>「哪裏可以買到聖經啊？我有點想讀讀看，但不知道一般書店有沒有賣。」</p>
              <p className="text-slate-600"><span className="font-bold text-amber-700">作者（竭力顯得淡然）：</span>「嗯，我應該可以幫你弄一本。」</p>
              <p className="text-slate-600 italic">（作者內心：「經過兩年的禱告、與他建立關係，他終於開始真的有點興趣了！」）</p>
            </div>
            <p className="text-slate-700 leading-relaxed">
              那年秋末，湯姆開了好幾百哩，從密西根到芝加哥，只為了到教會看看，到作者家和他聊聊。
            </p>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 space-y-2">
              <p className="text-slate-600"><span className="font-bold text-slate-500">湯姆（回家後打電話）：</span>「我覺得我裏面不大一樣。就好像我開始把拼圖拼起來一樣。我不知道最後看起來會是甚麼樣子，但我還真的挺喜歡自己裏面這種感覺，雖然我不完全了解這是怎麼回事。」</p>
            </div>
            <p className="text-slate-700 leading-relaxed">
              有一晚，在談了兩小時作基督徒是甚麼意思以後——
            </p>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 space-y-2">
              <p className="text-slate-600"><span className="font-bold text-amber-700">作者：</span>「湯姆，有一天你會是個很棒的基督徒。你非常誠實，對你委身的任何事都徹頭徹尾投入，而且你關切真理勝於別人的想法。」</p>
              <p className="text-slate-600 italic">他勉強承認作者可能是對的。但是他還沒有預備好。<strong>他還在過程中，朝正確方向移動，但是他還沒準備就此簽訂合約。還不行。</strong></p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-5 border border-amber-200">
            <p className="text-amber-900 font-bold leading-relaxed" style={{fontSize:"18px"}}>
              💡 「人生沒有任何事比朋友相交、彼此相愛、領對方一路走向基督更刺激。沒有任何事。」
            </p>
            <p className="text-amber-700 mt-2" style={{fontSize:"16px"}}>
              那些談話的內容永遠不可預測，充滿風險，讓人振奮，相互為師，並且高潮迭起。
              所有真正跟隨基督的人內心深處都渴望成為有感染力的基督徒，但<strong>除非我們先提升動機，否則不會真正採取行動</strong>。
            </p>
          </div>
        </div>
      </div>

      {/* ========== 科學界的功課 ========== */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-blue-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}>
          <Globe className="w-6 h-6 text-blue-600" />
          科學界教導我們的功課：人本法則
          <span className="text-slate-400 bg-slate-100 px-2 py-1 rounded-md font-normal" style={{fontSize:"13px"}}>P10-11</span>
        </h3>
        <p className="text-slate-600 mb-4 leading-relaxed" style={{fontSize:"17px"}}>
          人本法則（Anthropic Principle）的意思是：我們審視周圍世界時，總覺得宇宙好像專為維持和供養人的生命而設計的。
          這個觀念甚至不是源自基督徒學者，但許多證據都強烈顯示宇宙明顯是經過設計的。以下是鐵的事實：
        </p>
        <div className="space-y-3 mb-4">
          {scienceFacts.map((item, i) => (
            <div key={i} className="bg-blue-50 rounded-xl p-4 border border-blue-100 flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-200 text-blue-800 flex items-center justify-center font-bold" style={{fontSize:"14px"}}>{i+1}</span>
              <div>
                <span className="font-bold text-blue-800" style={{fontSize:"16px"}}>{item.fact}：</span>
                <span className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>{item.detail}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl p-5 border border-blue-200">
          <p className="text-blue-900 font-bold" style={{fontSize:"18px"}}>
            ✨ 結論：一定有某一位下了很大工夫把事情安排得如此巧妙。現代科學指向一個事實：<span className="text-blue-600">神一定很看重人！</span>
          </p>
        </div>
      </div>

      {/* ========== 商業界的功課 ========== */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-emerald-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}>
          <Users className="w-6 h-6 text-emerald-600" />
          商業界教導我們的功課：顧客革命
          <span className="text-slate-400 bg-slate-100 px-2 py-1 rounded-md font-normal" style={{fontSize:"13px"}}>P11-12</span>
        </h3>
        <div className="space-y-4">
          <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100" style={{fontSize:"17px"}}>
            <p className="text-slate-700 leading-relaxed mb-3">
              湯姆‧彼得斯在《亂中求勝》中稱之為「顧客革命」；肯恩‧布蘭查宣揚「倒金字塔」觀念。
              核心信息：<strong>一個企業如果想要長久成功，必須把注意力由自己身上拉開，把能量投在服務顧客上。</strong>
            </p>
            <p className="text-slate-700 leading-relaxed">
              想想看，多少次你在加油站、餐廳、銀行、麵包店要求基本服務時都非常挫折？
              這些組織的自然傾向是<strong>往內生長</strong>——員工在內部問題上焚燒自己的能量，
              這一切常發生在顧客站在結帳櫃台耐心等候服務的那一刻。
            </p>
          </div>
          <div className="bg-emerald-100 rounded-xl p-5 border border-emerald-200">
            <div className="font-bold text-emerald-800 mb-2" style={{fontSize:"17px"}}>🔄 教會的姊妹版問題</div>
            <p className="text-slate-700 leading-relaxed" style={{fontSize:"17px"}}>
              我們很容易過分糾纏在教會的內部問題、疑難和個人狀況，以致很難記得我們還留在這星球的主要理由其實是要去接觸「外面」的人。
              就如商業組織需要把焦點由自己身上挪開，同樣地，我們必須重新把眼光轉回神交付我們的目標：<strong>靈裏失落的人</strong>。
            </p>
          </div>
          <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl p-5 border border-emerald-200">
            <p className="text-emerald-900 font-bold" style={{fontSize:"18px"}}>
              ✨ 如果從科學界學得的功課是「神一定很看重人」，那麼從商業界學到的功課便是：<span className="text-emerald-600">我們最好也看重人。</span>
            </p>
            <p className="text-slate-600 mt-2" style={{fontSize:"16px"}}>
              我們只有在重視基督教社群外的人時才會真正感到充實。但我們也得誠實面對：<strong>我們很不容易守住焦點；我們很容易忘了要看重靈裏困惑的人。</strong>
            </p>
          </div>
        </div>
      </div>

      {/* ========== 危險警示 ========== */}
      <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-6 md:p-8 border border-red-100 shadow-sm">
        <h3 className="font-bold text-red-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}>
          <AlertTriangle className="w-6 h-6 text-red-600" />
          危險警示：價值判斷的陷阱
          <span className="text-slate-400 bg-slate-100 px-2 py-1 rounded-md font-normal" style={{fontSize:"13px"}}>P13</span>
        </h3>
        <p className="text-slate-700 mb-4 leading-relaxed" style={{fontSize:"17px"}}>
          作者遇見一位舊識，對方說：「我復活節不去教會，因為我受不了『只來一回的人』。那些每年只來一次的人，盛裝出席，把教會裏的事全都攪亂，特別是停車場。那些『只來一回的人』對我不重要。」
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {dangerSigns.map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-red-200">
              <div className="font-bold text-red-700 mb-2 flex items-center gap-2" style={{fontSize:"16px"}}>
                <AlertTriangle className="w-4 h-4" /> {item.sign}
              </div>
              <p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-red-100 rounded-xl p-5 border border-red-200 mt-4">
          <p className="text-red-800 font-bold" style={{fontSize:"17px"}}>
            ⚠️ 一旦我們讓這種思維進來，就不知不覺卻很有效地除掉任何想傳播神恩惠福音的盼望。畢竟，如果這些人對神而言沒甚麼大不了，那我們幹嘛要費心接觸他們呢？
          </p>
        </div>
      </div>

      {/* ========== 耶穌的三個比喻 ========== */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-violet-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}>
          <BookOpen className="w-6 h-6 text-violet-600" />
          耶穌的三個比喻（路加福音15章）
          <span className="text-slate-400 bg-slate-100 px-2 py-1 rounded-md font-normal" style={{fontSize:"13px"}}>P14-17</span>
        </h3>
        <div className="bg-violet-50 rounded-xl p-5 border border-violet-100 mb-4" style={{fontSize:"17px"}}>
          <p className="text-slate-700 leading-relaxed mb-2">
            <strong>背景</strong>：耶穌在一個都會區教導時，被一大群不敬虔的人包圍。宗教領袖在一邊竊竊私語，不滿耶穌跟「那種人」混在一起。
          </p>
          <p className="text-violet-700 leading-relaxed font-bold">
            這是唯一有記載的一次，耶穌一口氣連講三個比喻。祂想：「這回我要一舉澄清這一切。我要像連珠砲般地講上三個故事——不是一個，不是兩個——好確保人人都了解誰是神真正看重的。」
          </p>
        </div>
        <div className="space-y-4">
          {parables.map((item, i) => (
            <div key={i} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden cursor-pointer hover:bg-slate-100 transition-colors" onClick={() => toggleParable(i)}>
              <div className="p-5 flex items-center justify-between">
                <h4 className="font-bold text-slate-800" style={{fontSize:"20px"}}>{item.title}</h4>
                {openParable === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>
                {openParable === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <div className="px-5 pb-5 space-y-3">
                      <div className="bg-white rounded-xl p-4 border border-slate-100">
                        <div className="font-bold text-slate-700 mb-2" style={{fontSize:"16px"}}>📖 故事內容：</div>
                        <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>{item.story}</p>
                      </div>
                      <div className="bg-violet-50 rounded-xl p-4 border border-violet-200">
                        <div className="font-bold text-violet-700 mb-2" style={{fontSize:"16px"}}>🔍 重要意義：</div>
                        <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>{item.significance}</p>
                      </div>
                      <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                        <div className="font-bold text-amber-700 mb-2" style={{fontSize:"16px"}}>💡 生活應用：</div>
                        <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>{item.application}</p>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                        <div className="font-bold text-blue-700 mb-2" style={{fontSize:"16px"}}>📜 延伸經文：</div>
                        <ul className="space-y-1">
                          {item.extendedScriptures.map((s, j) => (
                            <li key={j} className="text-slate-600" style={{fontSize:"16px"}}>• {s}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-violet-100 to-purple-100 rounded-xl p-5 border border-violet-200 mt-4">
          <div className="font-bold text-violet-800 mb-2" style={{fontSize:"18px"}}>📌 三個故事的共同點：</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-white rounded-lg p-3 text-center border border-violet-100">
              <div className="font-bold text-violet-700" style={{fontSize:"16px"}}>① 失去的很重要</div>
              <p className="text-slate-500 mt-1" style={{fontSize:"15px"}}>不見的東西攸關生計、生存、親情</p>
            </div>
            <div className="bg-white rounded-lg p-3 text-center border border-violet-100">
              <div className="font-bold text-violet-700" style={{fontSize:"16px"}}>② 值得全力搜尋</div>
              <p className="text-slate-500 mt-1" style={{fontSize:"15px"}}>牧人出去找、女人翻遍全屋、父親引頸企盼</p>
            </div>
            <div className="bg-white rounded-lg p-3 text-center border border-violet-100">
              <div className="font-bold text-violet-700" style={{fontSize:"16px"}}>③ 找回後極其歡喜</div>
              <p className="text-slate-500 mt-1" style={{fontSize:"15px"}}>每次都開慶祝會——天國也是如此</p>
            </div>
          </div>
        </div>
      </div>

      {/* ========== 十架上的對話 ========== */}
      <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-6 md:p-8 border border-rose-100 shadow-sm">
        <h3 className="font-bold text-rose-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}>
          <Heart className="w-6 h-6 text-rose-600" />
          十架上的對話
          <span className="text-slate-400 bg-slate-100 px-2 py-1 rounded-md font-normal" style={{fontSize:"13px"}}>P17-18</span>
        </h3>
        <div className="space-y-4" style={{fontSize:"17px"}}>
          <p className="text-slate-700 leading-relaxed">
            耶穌被釘在兩個盜賊中間。這些人是很嚴重的罪犯——猶太人不會為芝麻綠豆的錯把人釘上十字架。他們對社會造成嚴重的破壞，社會不再接受他們。
          </p>
          <div className="bg-white rounded-xl p-5 border border-rose-200">
            <p className="text-slate-700 leading-relaxed mb-3">
              其中一人攻擊耶穌。但<strong>另一人卻看懂了眼前發生的事</strong>。他了解自己過不了多久就要面對永世，痛苦地覺悟到自己過的是怎樣的一生。
            </p>
            <p className="text-slate-700 leading-relaxed mb-3">
              他對前面那人說：「住嘴！你難道還不明白眼前發生的事嗎？」然後轉向耶穌說：「我們現在的下場是罪有應得。但是祢並沒有做甚麼錯事。所以請原諒我這麼問：<strong>像我這樣犯了許多罪的人，還有人看重我嗎？</strong>」
            </p>
            <div className="bg-rose-50 rounded-lg p-4 border border-rose-300">
              <p className="text-rose-800 font-bold leading-relaxed" style={{fontSize:"18px"}}>
                耶穌立刻毫不猶豫地保證：「你遠比你所能想像的重要！因著你的信心和溫柔悔改的靈，今天稍後你就要跟我一起在天堂了，我們要永遠一起！」
              </p>
            </div>
          </div>
          <p className="text-rose-700 font-bold">耶穌的憐憫不是我們可以理解的。面對事實吧！你我的愛根本不是這樣。</p>
        </div>
      </div>

      {/* ========== 健身中心的故事 ========== */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-teal-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}>
          <HandHeart className="w-6 h-6 text-teal-600" />
          真實見證：健身中心的印度朋友
          <span className="text-slate-400 bg-slate-100 px-2 py-1 rounded-md font-normal" style={{fontSize:"13px"}}>P18-20</span>
        </h3>
        <p className="text-slate-600 mb-4" style={{fontSize:"17px"}}>
          作者在讀路加福音十五章時，努力想了解「神看重所有人」在實際生活中是甚麼意思。然後，神給了他一個考驗：
        </p>
        <div className="space-y-3">
          {gymStory.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="flex items-start gap-4 bg-teal-50 rounded-xl p-4 border border-teal-100">
              <div className="flex-shrink-0 w-10 h-10 bg-teal-200 rounded-full flex items-center justify-center font-bold text-teal-800" style={{fontSize:"14px"}}>{i+1}</div>
              <div>
                <div className="font-bold text-teal-800 mb-1" style={{fontSize:"16px"}}>{item.phase}</div>
                <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-teal-100 to-emerald-100 rounded-xl p-5 border border-teal-200 mt-4">
          <p className="text-teal-900 font-bold leading-relaxed" style={{fontSize:"18px"}}>
            💡 「當我領悟到神有多關心這個人，就使得我可以更關心他。」——這就是看重人的起點。
          </p>
        </div>
      </div>

      {/* ========== 寶貴的一課 ========== */}
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-6 md:p-8 border border-orange-100 shadow-sm">
        <h3 className="font-bold text-orange-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}>
          <Eye className="w-6 h-6 text-orange-600" />
          寶貴的一課：撕掉你的「不重要名單」
          <span className="text-slate-400 bg-slate-100 px-2 py-1 rounded-md font-normal" style={{fontSize:"13px"}}>P20-21</span>
        </h3>
        <div className="space-y-4" style={{fontSize:"17px"}}>
          <p className="text-slate-700 leading-relaxed">
            作者坦承雖然是基督徒、又是牧師，卻仍常做出跟法利賽人一樣的事——隨身帶著一張小小的「不太重要的人」的名單：
          </p>
          <div className="bg-white rounded-xl p-5 border border-orange-200">
            <p className="text-slate-600 leading-relaxed italic">
              「加油站服務員、餐廳女服務生、結帳員、在我前面把車開得慢慢的傢伙、家裏的狗老是亂叫的鄰居、
              跟我同機飛往洛杉磯坐在我旁邊那個喝得醉醺醺的討厭傢伙、跟我看事情方式總是不同的那個同事。
              這些人都不太重要，對不對？」
            </p>
          </div>
          <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl p-5 border border-orange-300">
            <p className="text-orange-900 font-bold leading-relaxed" style={{fontSize:"18px"}}>
              「事實上他們很重要。他們對神很重要。不管他們屬於甚麼種族、拿多少薪水、性別為何、教育水準怎樣、貼有甚麼宗教標籤或沒有，祂都看重他們，因此我最好也看重他們——真心看重。」
            </p>
          </div>
          <p className="text-slate-700 leading-relaxed">
            <strong>等你開始以這種態度看待別人，你待人的方式就會產生革命性的改變。</strong>
            你眼目鎖定過的人之中，沒有一個是神不看重的。當這個事實抓住你生命的核心，你就會不一樣。
          </p>
        </div>
      </div>

      {/* ========== 值得花費力氣 + 使命 + 天上的慶祝會 ========== */}
      <div className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-3xl p-6 md:p-8 border border-violet-100 shadow-sm">
        <h3 className="font-bold text-violet-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}>
          <Sparkles className="w-6 h-6 text-violet-600" />
          我們在一場使命中 + 天上的慶祝會
          <span className="text-slate-400 bg-slate-100 px-2 py-1 rounded-md font-normal" style={{fontSize:"13px"}}>P21-24</span>
        </h3>
        <div className="space-y-4" style={{fontSize:"17px"}}>
          <p className="text-slate-700 leading-relaxed">
            神看重人到甚麼程度？<strong>重要到值得展開全面搜尋。</strong>耶穌說祂來到世間是為了「尋找、拯救失喪的人」。祂在離世前說：「父怎樣差遣了我，我也照樣差遣你們。」
          </p>
          <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-200">
            <p className="text-indigo-800 font-bold leading-relaxed" style={{fontSize:"18px"}}>
              神要我們成為有感染力的基督徒——作祂的代言人，抓住祂的愛，再急切又有感染力地提供給所有願意考慮接受的人。
              這就是祂的計畫：把神的恩典和真理一個一個傳給人，直到全世界都感染上這種會改變人生命的「傳染病」。
            </p>
          </div>
          <div className="bg-violet-100 rounded-xl p-5 border border-violet-200">
            <p className="text-violet-800 font-bold" style={{fontSize:"18px"}}>
              📖 路加福音十五章10節：「一個罪人悔改，在神的使者面前也是這樣為他歡喜。」
            </p>
          </div>
          <p className="text-slate-700 leading-relaxed">
            作者回憶自己十七歲在營會中悔改信主：「那一刻，全天國爆發出壯麗的宇宙級慶賀——天國開了一場極盛大的慶祝會，旗幟上寫著受賀主角的大名。」
          </p>
          <div className="bg-gradient-to-r from-violet-100 to-purple-100 rounded-xl p-5 border border-violet-300">
            <p className="text-violet-900 font-bold leading-relaxed" style={{fontSize:"18px"}}>
              🎉 「等你作過朋友歸向基督之過程的主要推手時再說吧！當你參與在天國為他開的慶祝會時，你會喜樂得幾乎要爆炸——特別是當你很清楚你真的是使他們名字登上那面旗幟的推手！」
            </p>
          </div>
        </div>
      </div>

      {/* ========== 延伸探討：神學深化 ========== */}
      <div className="bg-slate-800 rounded-3xl p-6 md:p-8 border border-slate-700 shadow-sm text-white">
        <h3 className="font-bold text-amber-300 mb-6 flex items-center gap-2" style={{fontSize:"24px"}}>
          <BookMarked className="w-6 h-6 text-amber-400" />
          延伸探討：經文串連與神學深化
          <span className="ml-3 bg-slate-700/50 text-slate-300 px-2 py-1 rounded-full font-normal border border-slate-600" style={{fontSize:"13px"}}>非原書內容</span>
        </h3>
        <div className="space-y-4">
          {theologyTopics.map((item, i) => (
            <div key={i} className="bg-slate-700/50 rounded-2xl border border-slate-600 overflow-hidden cursor-pointer hover:bg-slate-700/70 transition-colors" onClick={() => toggleTheology(i)}>
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
                        <ul className="space-y-1">
                          {item.scriptures.map((s, j) => (
                            <li key={j} className="text-slate-400" style={{fontSize:"16px"}}>• {s}</li>
                          ))}
                        </ul>
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

      {/* ========== 華人教會生活實例 ========== */}
      <div className="bg-gradient-to-br from-red-50 to-amber-50 rounded-3xl p-6 md:p-8 border border-red-100 shadow-sm">
        <h3 className="font-bold text-red-800 mb-6 flex items-center gap-2" style={{fontSize:"24px"}}>
          <Church className="w-6 h-6 text-red-600" />
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

      {/* ========== 四週挑戰任務 ========== */}
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-6 md:p-8 border border-indigo-100 shadow-sm">
        <h3 className="font-bold text-indigo-800 mb-6 flex items-center gap-2" style={{fontSize:"24px"}}>
          <CalendarCheck className="w-6 h-6 text-indigo-600" />
          四週挑戰任務
          <span className="ml-3 bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full font-normal border border-indigo-200" style={{fontSize:"13px"}}>實踐計畫</span>
        </h3>
        <div className="space-y-4">
          {weeklyChallenge.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-indigo-200 overflow-hidden cursor-pointer hover:bg-indigo-50/50 transition-colors" onClick={() => toggleChallenge(i)}>
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

      {/* ========== 小組討論問題 ========== */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-sm">
        <h3 className="font-bold text-emerald-800 mb-6 flex items-center gap-2" style={{fontSize:"24px"}}>
          <MessageSquareQuote className="w-6 h-6 text-emerald-600" />
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

      {/* ========== 本章總結 ========== */}
      <div className="bg-gradient-to-br from-teal-50 to-slate-50 border border-teal-100 rounded-3xl p-6 md:p-8">
        <h3 className="font-bold text-teal-700 mb-4 flex items-center gap-2" style={{fontSize:"22px"}}>
          📝 第一章總結：神看重人
        </h3>
        <p className="text-slate-500 mb-5 leading-relaxed" style={{fontSize:"17px"}}>
          本章從多個角度建立一個核心信念：每個人在神眼中都極其寶貴。這個信念是成為有感染力的基督徒的根基。
        </p>
        <div className="space-y-3">
          <div className="bg-blue-50 border-blue-200 border rounded-xl p-4">
            <div className="font-bold text-blue-700 mb-1.5" style={{fontSize:"18px"}}>🔬 科學界：人本法則 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>P10-11</span></div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>宇宙的一切都精心設計來維持人的生命——星球距離、碳氧比例、地軸角度、地球位置、宇宙擴張率，任何一項稍有偏差，生命就不可能存在。結論：神一定很看重人。</p>
          </div>
          <div className="bg-emerald-50 border-emerald-200 border rounded-xl p-4">
            <div className="font-bold text-emerald-700 mb-1.5" style={{fontSize:"18px"}}>💼 商業界：顧客革命 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>P11-12</span></div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>企業必須把焦點從自身挪到顧客身上。教會也有同樣的問題：容易往內生長，忘了接觸「外面」的人。我們最好也看重人。</p>
          </div>
          <div className="bg-red-50 border-red-200 border rounded-xl p-4">
            <div className="font-bold text-red-700 mb-1.5" style={{fontSize:"18px"}}>⚠️ 危險警示：價值判斷陷阱 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>P13</span></div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>我們很容易評斷誰可以為神所用、誰不能，把神的關心名單縮減到跟我們很像的一小撮人。</p>
          </div>
          <div className="bg-violet-50 border-violet-200 border rounded-xl p-4">
            <div className="font-bold text-violet-700 mb-1.5" style={{fontSize:"18px"}}>📖 耶穌的三個比喻 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>P14-17</span></div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>失羊、失錢、浪子——唯一耶穌連講三個比喻的場合。共同點：失去的很重要、值得全力搜尋、找回後天國歡喜慶祝。</p>
          </div>
          <div className="bg-rose-50 border-rose-200 border rounded-xl p-4">
            <div className="font-bold text-rose-700 mb-1.5" style={{fontSize:"18px"}}>✝️ 十架上的對話 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>P17-18</span></div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>即使是被社會完全拋棄的重刑犯，耶穌也毫不猶豫地肯定他的價值。神的憐憫超越我們的理解。</p>
          </div>
          <div className="bg-teal-50 border-teal-200 border rounded-xl p-4">
            <div className="font-bold text-teal-700 mb-1.5" style={{fontSize:"18px"}}>🤝 健身中心的見證 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>P18-20</span></div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>一位被眾人冷落的印度籍回教徒，在妻子離開時向作者傾訴。聖靈引導作者擁抱他——「當我領悟到神有多關心這個人，就使得我可以更關心他。」</p>
          </div>
          <div className="bg-amber-50 border-amber-200 border rounded-xl p-4">
            <div className="font-bold text-amber-700 mb-1.5" style={{fontSize:"18px"}}>💡 核心行動 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>P20-24</span></div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>撕掉心中的「不重要名單」，以神的眼光看待每一個人。我們在一場使命中——每一個罪人悔改，天國都會為他開慶祝會！</p>
          </div>
        </div>
      </div>

      {/* ========== 反思與行動 ========== */}
      <div className="bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-800 shadow-lg text-white">
        <h3 className="font-bold text-orange-300 mb-6 flex items-center" style={{fontSize:"27px"}}>
          <Brain className="w-7 h-7 mr-3" />
          深度反思與行動指南
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="font-bold text-orange-200 mb-4 flex items-center" style={{fontSize:"23px"}}>
              <Brain className="w-5 h-5 mr-2 text-orange-400" /> 反思問題
            </h4>
            <ul className="space-y-4 text-slate-300">
              {reflections.map((r, i) => (
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
              {actions.map((a, i) => (
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
