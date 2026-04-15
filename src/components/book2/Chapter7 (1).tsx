import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, BookOpen, ChevronDown, ChevronUp, Target, Brain, MessageSquareQuote, Layers, BookMarked, Users, ChevronRight, AlertTriangle, Shield } from 'lucide-react';

export default function Chapter7({ expandAll }: { expandAll?: boolean }) {
  const [openStage, setOpenStage] = useState<number | null>(null);
  const [openFalse, setOpenFalse] = useState<number | null>(null);
  const [openSkill, setOpenSkill] = useState<number | null>(null);
  const [openRight, setOpenRight] = useState<number | null>(null);
  const [openTheology, setOpenTheology] = useState<number | null>(null);
  const [openChallenge, setOpenChallenge] = useState<number | null>(null);
  const [openTaiwan, setOpenTaiwan] = useState<number | null>(null);
  const [openExpect, setOpenExpect] = useState<number | null>(null);
  const [openDisciple, setOpenDisciple] = useState<number | null>(null);

  const jessicaStory = {
    setup: "潔西卡是一家公司的經理，才華洋溢，信主十五年，愛神也渴慕神。副總裁在安排公司經理出差時詢問她哪幾週可以出差，她用電子郵件回覆後等著確認函——卻如石沉大海。",
    conflict: "她打電話去詢問，副總的行政助理告訴她：「接下來三個月都已經有安排了，應該是副總覺得這次不必麻煩妳。」潔西卡聽到都傻住了。",
    response: "接下來兩個禮拜，她不停跟神摔跤。她求神赦免她的怒氣、在神面前降卑自己、禱告求愛心。最後她的結論是「神要藉此對付她頑固的自我意志」。她刻意和副總及其他經理保持距離，撐了兩年後離職跳槽。",
    lesson: "潔西卡對耶穌的委身，並不包括用情感成熟的方式與人互動。她錯誤地引用聖經真理，習慣使用原生家庭的技巧來處理人際關係。除非她願意接受訓練，否則很可能一再重蹈覆轍。(p.199-201)"
  };

  const emotionalStages = [
    {
      stage: "情感上的嬰兒", icon: "👶", color: "rose",
      traits: [
        "等著別人照顧",
        "很難進入別人的世界",
        "希望己身需求即刻滿足",
        "利用別人來滿足自己"
      ],
      page: "p.203"
    },
    {
      stage: "情感上的孩童", icon: "🧒", color: "orange",
      traits: [
        "慾望被滿足就會很快樂",
        "會快速從壓力、失望和考驗中抽離",
        "將他人的不同意見解釋為對自己的攻擊",
        "容易受傷",
        "不順心就抱怨、退縮、操控、報復、冷嘲熱諷",
        "很難用成熟、友愛的態度，討論自己的需要和希望"
      ],
      page: "p.203"
    },
    {
      stage: "情感上的青少年", icon: "🧑", color: "amber",
      traits: [
        "防衛心強",
        "對別人的批評感到害怕與驚慌",
        "會牢記自己所付出的，期待能得到相對的回報",
        "不擅長處理衝突，經常怨天尤人、噘嘴負氣、找第三方發牢騷、息事寧人，或漠視問題",
        "注意力都放在自己身上",
        "很難真正傾聽別人的痛苦、失望和需要",
        "吹毛求疵、愛批評"
      ],
      page: "p.203-204"
    },
    {
      stage: "情感上的成年人", icon: "🧑‍💼", color: "emerald",
      traits: [
        "能夠清楚、直接、誠實地讓自身的需要、想望和喜好得到滿足",
        "能夠知道並駕馭自己的想法和感受，也能為自己負起責任",
        "在壓力之下也能清楚表達自己的信念與價值觀，但不會與人爭鋒相對",
        "尊重他人，但不要求對方改變",
        "給別人犯錯的空間，不要求完美",
        "懂得欣賞別人本來的樣子——包括好的、壞的、醜陋的",
        "能精確評估他人的有限、優點和缺點，深切了解自己的情感世界，也能進入並理解他人的感受，卻不致失去自我",
        "有能力以成熟的方式解決衝突，在協調解決之道的同時也能考慮他人的感受"
      ],
      page: "p.204-205"
    }
  ];

  const stageColorMap: Record<string, { bg: string; border: string; text: string; badge: string }> = {
    rose: { bg: "bg-rose-50", border: "border-rose-200", text: "text-rose-800", badge: "bg-rose-200 text-rose-800" },
    orange: { bg: "bg-orange-50", border: "border-orange-200", text: "text-orange-800", badge: "bg-orange-200 text-orange-800" },
    amber: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-800", badge: "bg-amber-200 text-amber-800" },
    emerald: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-800", badge: "bg-emerald-200 text-emerald-800" }
  };

  const iItExamples = [
    { scenario: "走進辦公室，沒有先跟祕書打招呼就直接把工作丟給他。", icon: "💼" },
    { scenario: "在員工會議上，直接按照組織結構圖調動職務，把員工視為物體和非人類。", icon: "📊" },
    { scenario: "談論權威人物的口氣似乎沒有把他們當作人類看待。", icon: "🗣️" },
    { scenario: "對待妻小的態度彷彿他們沒有自由、沒有夢想、無法自主。期待他們符合我想要的樣子。", icon: "👨‍👩‍👧" },
    { scenario: "若有人政治觀點與我不同，我就會有受威脅的感覺。", icon: "⚡" },
    { scenario: "聽鄰居發牢騷、幫他們處理家務，目的是希望他們能來教會。萬一拒絕，就再鎖定其他目標。", icon: "🎯" }
  ];

  const falsePeaceExamples = [
    { name: "卡爾", situation: "不滿妻子經常晚下班，但什麼也沒說——認為效法耶穌就是什麼都不要說。可是他對太太的態度很冷漠。", page: "p.212" },
    { name: "潘", situation: "在午餐時聽到同事批評老闆，她不認同但不敢反對，只好應聲附和——怕破壞氣氛。", page: "p.212" },
    { name: "鮑伯", situation: "晚上和十個朋友吃飯只點了沙拉，結帳時大家要平均分攤。他心裡很不樂意，卻把話憋在心裡。", page: "p.212" },
    { name: "尤蘭達", situation: "訂婚後想再多考慮，但怕未婚夫那邊不高興，最後還是如期完婚。", page: "p.212" },
    { name: "艾倫", situation: "很愛父母，但父母很愛批評她的教養方式。每到假日就壓力很大，但什麼都沒說——不想讓父母不開心。", page: "p.212" },
    { name: "莎朗", situation: "覺得男朋友很不負責任，但很同情他。認為他的人生已經太悲慘，不該再增加痛苦，所以壓抑不說。覺得關係在慢性自殺。", page: "p.213" }
  ];

  const practicalSkills = [
    {
      title: "說話與傾聽", subtitle: "建立「我－你」關係的必備條件",
      speakingTips: [
        "說出想法和感覺時，使用「我」作為句子開頭：「我認為……我覺得……」",
        "表達盡量簡單扼要，句子和用詞力求精簡",
        "覺得對方聽錯了，就要加以修正",
        "一直說到你認為對方已經了解你的意思為止",
        "如果都說完了，最後加一句「這就是我要說的」"
      ],
      listeningTips: [
        "暫停所有工作，彷彿侍立在神面前般地安靜聆聽",
        "讓對方能完整表達心裡的意思",
        "準確重複對方的意思（用自己的敘述或完整複述）",
        "如果覺得對方已說完，可以問：「還有嗎？」",
        "當對方說完了，問：「哪一點你覺得最重要，希望我能記住？」"
      ],
      page: "p.215-216", icon: "🗣️"
    },
    {
      title: "不要猜測別人的心思", subtitle: "第九條誡命的實際應用",
      steps: [
        "想一想，哪些事你懷疑對方有某種想法和感覺，但沒有對你說",
        "問對方：「我可以知道我的假設是否正確嗎？」（等對方同意才繼續）",
        "告訴對方：「我認為你的想法是……」或「我覺得你是在想……」",
        "讓對方有機會回應你"
      ],
      page: "p.218-219", icon: "🧠"
    },
    {
      title: "釐清期待", subtitle: "未被滿足的期待是關係破壞的主因",
      fourSteps: [
        { step: "意識到", desc: "我知道我對對方有某些期待" },
        { step: "切合實際", desc: "我對對方的期待合乎實際嗎？" },
        { step: "清楚表達", desc: "我必須清楚、直接、有禮貌地向對方表達" },
        { step: "達成共識", desc: "對方必須知道並同意——否則只是一廂情願" }
      ],
      page: "p.219-221", icon: "📋"
    },
    {
      title: "過敏與刺激", subtitle: "辨識情感的過敏原",
      template: [
        "你有個動作會引發我情感上的過敏反應，那就是……",
        "當我裡面出現這種過敏反應時，我的想法和自我對話是……",
        "當我裡面出現這種過敏反應時，我會覺得……",
        "我會出現這種過敏反應，是因為我曾經……",
        "我會出現這種過敏反應，是因為你讓我聯想到……",
        "這種過敏反應在……方面讓我們的關係受到損害",
        "那時候我需要有人對我說的話，現在我也希望聽到的是……"
      ],
      examples: [
        { person: "作者", trigger: "太太週末要和閨密出去", root: "小時候父母在情感世界缺席", page: "p.222" },
        { person: "特瑞莎", trigger: "丈夫看電視不幫忙帶孩子", root: "父親在她七歲那年拋家棄子", page: "p.222" }
      ],
      page: "p.221-223", icon: "🤧"
    }
  ];

  const rightsToRespect = [
    { right: "保有空間和隱私", example: "進門前先敲門，不隨意拆開別人的郵件，尊重彼此對安靜與空間的需求" },
    { right: "與眾不同", example: "允許別人對食物、電影、音樂和消磨時間的方式有自己的好惡" },
    { right: "意見不同", example: "允許每個人有不同的思考方式和人生觀" },
    { right: "被聽見", example: "傾聽彼此的渴望、意見、想法和感覺" },
    { right: "被認真對待", example: "彼此傾聽和陪伴" },
    { right: "發出疑惑", example: "發生誤解時驗證假設是否為真，而不是互相批判" },
    { right: "說實話", example: "詢問資訊時能期待聽到實話" },
    { right: "被徵詢意見", example: "了解並詢問所做的決定會如何影響對方" },
    { right: "不完美和犯錯", example: "允許對方做錯事、忘東忘西、不小心令彼此失望" },
    { right: "被禮貌對待", example: "說話不傷人、使用東西前經過詢問、用平等態度對待" },
    { right: "被尊重", example: "考慮彼此的感覺" }
  ];

  const twelveDisciples = [
    { name: "彼得", trait: "常口無遮攔，說話前後矛盾", icon: "🗣️" },
    { name: "安得烈", trait: "個性文靜，不愛出風頭", icon: "🤫" },
    { name: "雅各和約翰", trait: "「雷子」——性格急躁、魯莽、野心勃勃又缺少耐性", icon: "⚡" },
    { name: "腓力", trait: "生性多疑、個性負面、眼界狹隘——五千人吃飽？「不可能！」", icon: "🤷" },
    { name: "拿但業", trait: "自以為是，對人心存成見", icon: "😤" },
    { name: "馬太", trait: "稅吏，常欺壓無辜百姓，在迦百農很不受歡迎", icon: "💰" },
    { name: "多馬", trait: "性格憂鬱、消極悲觀", icon: "😟" },
    { name: "奮銳黨的西門", trait: "自由鬥士和恐怖分子", icon: "⚔️" },
    { name: "猶大", trait: "管錢的小偷，獨來獨往，假裝效忠耶穌最後出賣祂", icon: "💀" }
  ];

  const theologyTopics = [
    {
      title: "馬丁·布伯的「我與你」神學",
      content: "布伯在1923年寫了《我與你》，提出最健康的人際關係是「我與你」——我知道每一個人都是按著神的形像所造的，都值得尊敬。我看他們是尊貴、有價值的，不會物化他們。布伯主要的信念是：人與人之間的「我－你關係」，就是人與神的「我－祢關係」的真實寫照。當我們用成熟的情感去愛人，那會是一種震撼的體驗——真實的愛被釋放出來，我們就能感受到神的同在，你我之間的空白會被神填滿。相反地，在「我－它」關係中，我把「你」當作達成目標的工具。奧古斯丁對罪下了一個定義：「陷在自我裡」。但丁《神曲》中的地獄是一片冰封的世界——象徵死亡、自我和罪的冷酷。(p.207-210)",
      scriptures: ["太二十二37-40 你要盡心、盡性、盡意愛主你的神。其次要愛人如己。", "約壹四20 人若說「我愛神」，卻恨他的弟兄，就是說謊話的。"],
      reflection: "在你最重要的五個人際關係中（配偶、父母、孩子、同事、朋友），哪些是「我－你」關係、哪些其實是「我－它」關係？你是否在不知不覺中把某些人當作達成目標的工具？"
    },
    {
      title: "哥白尼革命與自我中心的突破",
      content: "每個人都是從自我宇宙的中心去體驗生活。我喜歡身邊的人都放棄他們的自我，成為我想要的樣子。史考特·派克說，每個人都是天生的自戀狂，屬靈追求的當務之急就是脫離自戀。作者和潔芮結婚時點蠟燭——兩根合成一根，象徵「合為一體」。但婚後前九年他常說：「沒錯，潔芮和我已經合為一體，那一體就是我。」要在靈性上成熟，必須經歷一場「哥白尼革命」：發現配偶、朋友、兒女都是與我有別的獨立個體——在發現的過程中又不致失去自我。(p.206-207)",
      scriptures: ["腓二3-4 各人不要單顧自己的事，也要顧別人的事。", "羅十二3 不要看自己過於所當看的，要照著神所分給各人信心的大小，看得合乎中道。"],
      reflection: "在你的婚姻或最親密的關係中，「合為一體」是「你合我」還是「我合你」？你是否正在經歷自己的「哥白尼革命」——從自我中心轉向看見他人？"
    },
    {
      title: "虛假的和睦 vs. 真正的和睦",
      content: "耶穌說：「使人和睦的人有福了！」（太五9）很多人的解讀是要安撫情緒、迴避衝突、確保大家相安無事。但因為害怕而迴避衝突，只求相安無事，並不是真的使人和睦。真正使人和睦的人會因為愛神、愛人、愛自己而拆毀虛假的和睦。衝突和麻煩是耶穌服事的日常——祂拆穿門徒、群眾、宗教領袖各種虛假的和睦。祂說：「你們不要想我來是叫地上太平；我來並不是叫地上太平，乃是叫地上動刀兵。」（太十34）原因何在？因為你無法用謊言和偽裝換取基督國度的平安。耶穌在登山寶訓解釋使人和睦必須具備虛心、溫柔、清心、憐憫——但也直言效法祂的人一定會受逼迫。(p.211-214)",
      scriptures: ["太五9 使人和睦的人有福了！因為他們必稱為上帝的兒子。", "太十34-36 我來並不是叫地上太平，乃是叫地上動刀兵。", "弗四15 惟用愛心說誠實話。"],
      reflection: "你在哪些關係中正在維持「虛假的和睦」——明明有問題卻假裝沒事？你害怕什麼？如果耶穌不斷拆穿虛假的和睦，你願意效法祂嗎？"
    }
  ];

  const taiwanExamples = [
    {
      title: "🏠 華人家庭中的「我—它」關係",
      scenario: "在華人文化中，「孝順」常被扭曲為「完全服從父母的期待」。許多父母不自覺地把孩子當作「它」——實現自己未完成夢想的工具：「你要考醫學院」「你要嫁/娶我認可的人」「你要生孫子」。孩子也把父母當作「它」——提款機或免費保姆。在教會中，牧師可能把會友當作「它」——教會增長的工具；會友也把牧師當作「它」——屬靈需求的自動販賣機。",
      challenge: "這週選擇一個你最容易「物化」的人（父母、配偶、孩子、同事），刻意在每次互動前默禱：「主啊，幫助我看見這個人是按祢形像所造的，是獨一無二的『你』，不是我要利用的『它』。」",
      insight: "布伯說在「我－你」關係中，神能填補你我之間的空白。(p.210) 當我們停止物化對方，轉而看見他們的尊貴，神的同在就會在關係中被釋放出來。"
    },
    {
      title: "😶 華人教會中的「虛假和睦」",
      scenario: "華人教會特別容易陷入「虛假的和睦」。「和氣生財」「家醜不外揚」「尊重長輩就是不反駁」——這些文化價值觀讓我們把衝突等同於「不屬靈」。結果是：問題在檯面下發酵、背後議論取代當面溝通、積壓的怒氣最終以爆發或離開收場。很多人離開教會不是因為神學問題，而是因為「在教會受了傷卻沒有人願意面對」。",
      challenge: "回想一個你目前正在迴避的衝突（和配偶、同事、教會弟兄姊妹）。用「說話與傾聽」的技巧，找一個安全的時間，用「我」開頭的句型表達你的感受：「我覺得……」「我需要……」。不是為了吵架，而是為了建立真正的和睦。",
      insight: "耶穌說：「我來不是叫地上太平，乃是叫地上動刀兵。」(p.213) 真正的和睦不是沒有衝突，而是在衝突中仍然能夠彼此尊重、用愛心說誠實話。"
    },
    {
      title: "📱 數位時代的「情感嬰兒」",
      scenario: "社群媒體讓我們更容易停留在情感嬰兒和孩童階段：「希望需求即刻滿足」（訊息沒秒回就焦慮）、「將不同意見解釋為攻擊」（留言被反駁就封鎖）、「快速從失望中抽離」（不喜歡就滑掉、取消追蹤）。LINE群組和教會小組中也常見：用貼圖代替真實溝通、用已讀不回表達不滿、用退群代替面對衝突。",
      challenge: "檢視你在社群媒體和LINE上的行為模式：你是否用「已讀不回」來懲罰對方？你是否在群組中用貼圖掩蓋真實感受？這週嘗試用「說話與傾聽」的技巧，把一個本來會用訊息處理的衝突改為面對面（或至少打電話）處理。",
      insight: "本章的四個情感階段告訴我們：情感成熟的成年人「能夠清楚、直接、誠實地表達」而且「在壓力之下也能清楚表達自己的信念」。(p.204) 數位溝通讓我們太容易逃避這個操練。"
    },
    {
      title: "🤝 「釐清期待」在華人職場的應用",
      scenario: "華人職場文化中「不說破」被視為一種默契和智慧。老闆期待員工主動加班卻不明說，員工期待老闆注意到自己的貢獻卻不開口，結果雙方都在暗中積累不滿。在教會服事中更是如此：牧師期待同工「自動自發」，同工期待牧師「看到我的辛苦」——但彼此都沒有說出來，也沒有達成共識。",
      challenge: "選擇一個你目前和某人之間存在的「未說出口的期待」。按照書中的四步驟：(1)意識到這個期待存在 (2)評估它是否合理 (3)找一個安全的時間清楚表達 (4)和對方達成共識。記住：沒有共識的期待只是一廂情願。",
      insight: "本章指出期待的四個問題：沒有意識、不切實際、沒有說出口、未達成共識。(p.220) 華人文化中最大的陷阱是「沒有說出口」——我們以為對方「應該知道」，但其實沒有人是讀心術專家。"
    },
    {
      title: "👨‍👩‍👧‍👦 華人婚姻中的「哥白尼革命」",
      scenario: "華人傳統婚姻觀念中，「夫唱婦隨」或「嫁雞隨雞」暗示婚姻中只有一個中心。即使在現代雙薪家庭中，許多夫妻仍然在「誰才是中心」上角力。基督徒夫妻可能用「順服」的教導來合理化一方對另一方的控制。結果是：一方壓抑自我（失去自我），另一方自我膨脹（物化對方）——兩者都不是「我－你」關係。",
      challenge: "和配偶一起做一個練習：各自寫下三件「我希望你知道但從未說出口的事」，然後用「說話與傾聽」的技巧分享。記住：傾聽時不要反駁，只需要準確複述對方的意思，然後說：「這樣有道理，因為……」",
      insight: "作者承認婚後前九年他的態度是「我們已經合為一體，那一體就是我」。(p.207) 真正的合一不是消滅另一方，而是兩個獨立的個體在差異中互相連結——讓神填補中間的空白。"
    }
  ];

  const weeklyChallenge = [
    {
      week: "第一週", title: "辨識你的情感年齡",
      mission: "參考本章的四個情感階段（嬰兒、孩童、青少年、成年人），用一週的時間觀察自己。每天記錄：(1)今天我在哪個情境中表現像情感嬰兒/孩童/青少年？(2)我在哪個情境中成功表現出情感成年人的特質？(3)什麼情境最容易讓我「退化」到不成熟的階段？",
      scripture: "林前十三11「我作孩子的時候，話語像孩子，心思像孩子，意念像孩子；既成了人，就把孩子的事丟棄了。」",
      journalPrompt: "你發現自己最常停留在哪個情感階段？在哪些特定的人或情境面前最容易「退化」？你的情感「退化觸發器」是什麼？"
    },
    {
      week: "第二週", title: "從「我—它」到「我—你」",
      mission: "選擇三個人際關係（建議包括一個家人、一個同事、一個教會弟兄姊妹），每天在與他們互動時問自己：(1)我現在是把對方當作「你」還是「它」？(2)我是否在利用對方來達成我的目標？(3)我是否真正看見對方是按神形像所造的獨特個體？如果發現是「我—它」，立刻默禱調整。",
      scripture: "太二十二39 「要愛人如己。」",
      journalPrompt: "一週後回顧：你最容易把誰當作「它」？這個發現讓你感覺如何？你能否看到布伯所說的——當你真正把對方當作「你」時，神的同在會出現在你們之間？"
    },
    {
      week: "第三週", title: "拆毀虛假的和睦",
      mission: "列出你目前正在維持「虛假和睦」的關係或情境（至少兩個）。選擇其中一個比較安全的開始練習。用本章的工具：(1)先「釐清期待」——我對對方的期待是什麼？合理嗎？有說出口嗎？(2)再用「說話與傾聽」——用「我」開頭表達感受，然後真正傾聽對方的回應 (3)最後「不要猜測」——驗證你對對方的假設是否正確。",
      scripture: "弗四15 「惟用愛心說誠實話，凡事長進，連於元首基督。」",
      journalPrompt: "拆毀虛假和睦的過程讓你感覺如何？你害怕什麼？結果是否比你預期的好（或壞）？你是否體驗到「真正的和睦」和「虛假的和睦」之間的差別？"
    },
    {
      week: "第四週", title: "辨識情感過敏原",
      mission: "用「過敏與刺激」的練習模板，找出你最常出現的情感過敏反應。選擇一個最影響你的過敏原，完成所有步驟：(1)辨識觸發的動作 (2)覺察你的自我對話 (3)追溯它和過去的連結 (4)評估它如何損害現在的關係 (5)說出你真正需要聽到的話。如果安全的話，和觸發你過敏的那個人分享你的發現。",
      scripture: "詩一三九23-24「神啊，求你鑒察我，知道我的心思，試煉我，知道我的意念，看在我裡面有什麼惡行沒有，引導我走永生的道路。」",
      journalPrompt: "追溯你的情感過敏原——它連結到過去的什麼經歷？你是否一直在把過去的人投射到現在的關係？如果能區分「過去」和「現在」，你的關係會有什麼改變？"
    }
  ];

  const groupDiscussion = [
    {
      category: "👶 情感成熟度",
      questions: [
        "四個情感階段（嬰兒、孩童、青少年、成年人）中，你覺得自己目前在哪一個？你願意坦誠分享嗎？",
        "潔西卡的故事中，你認為她最大的問題是什麼？如果是你，你會怎麼處理副總裁的事？",
        "你覺得你的教會（或小組）整體的「情感年齡」是什麼？什麼跡象讓你這麼認為？",
        "耶穌的門徒在情感上也很不成熟——彼得口無遮攔、雅各約翰野心勃勃。祂如何帶領他們成長？這對我們有什麼啟示？"
      ]
    },
    {
      category: "🤝 我—你 vs 我—它",
      questions: [
        "在你的生活中，你最容易把誰當作「它」——家人、同事、還是教會的弟兄姊妹？",
        "布伯說「在真實的愛中，神的同在會出現在你我之間的空白」——你有過這樣的經歷嗎？",
        "作者結婚九年才發現「合為一體那一體就是我」——你在親密關係中有類似的覺醒嗎？",
        "在什麼情況下，你最容易從「我—你」退回「我—它」模式？"
      ]
    },
    {
      category: "⚔️ 衝突與和睦",
      questions: [
        "六個「虛假和睦」的例子中，你最有共鳴的是哪一個？為什麼？",
        "你在處理衝突時最常使用的方式是什麼——逃避、爆發、冷戰、找第三方訴苦、還是直接面對？",
        "「說話與傾聽」的技巧中，哪一項你最需要練習——用「我」開頭說話，還是準確複述對方的意思？",
        "作為小組，我們是否有空間讓彼此「用愛心說誠實話」？還是我們也在維持「虛假的和睦」？"
      ]
    }
  ];

  const reflections = [
    "我目前在四個情感階段中的哪一個？在我最親密的關係中，我的情感年齡是幾歲？",
    "我最容易把哪些人當作「它」——用他們來達成我的目標？我願意改變嗎？",
    "我目前正在哪些關係中維持「虛假的和睦」？我害怕面對什麼？",
    "我的「說話」能力和「傾聽」能力，哪一個比較弱？我是否經常「猜測別人的心思」而不去驗證？",
    "我有哪些情感上的「過敏原」？它們連結到過去的什麼經歷？我是否一直在把過去投射到現在？",
    "如果耶穌用三年時間和門徒生活在一起來塑造他們，我願意花多少時間來操練這些技巧？",
    "「在夢裡愛人並不難，在真實的世界中付出是既殘酷又可怕的事」——我是否只活在「幻想中的愛」裡？"
  ];

  const actions = [
    "情感自評：參考四個階段的特徵，寫下你在職場、家庭、教會各自的情感年齡。找一位信任的人驗證你的自評。",
    "權利法案實踐：把本章的「權利法案」列印出來貼在冰箱門上（或手機桌面），每週選一項來特別操練。",
    "說話與傾聽練習：本週和配偶或好友做一次「說話與傾聽」的完整練習——一人說五分鐘，另一人只能準確複述。然後交換。",
    "釐清期待：列出你對一位重要他人的三個期待，用四步驟檢查（意識→實際→表達→共識），找時間和對方談。",
    "辨識過敏原：用「過敏與刺激」的模板，找出你最常出現的情感過敏反應，追溯它和過去的連結。",
    "拆毀虛假和睦：選擇一個你一直在迴避的衝突，用「我」開頭的句型，在安全的情境下用愛心說誠實話。"
  ];

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="space-y-8">

      {/* ========== 章節標題 ========== */}
      <div className="bg-gradient-to-br from-slate-800 via-rose-900 to-red-900 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-rose-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="relative">
          <div className="flex items-center gap-2 mb-2"><BookOpen className="w-5 h-5 text-rose-300" /><span className="text-rose-300 text-sm tracking-widest">第 7 章</span></div>
          <h1 className="font-extrabold mb-3" style={{fontSize:"30px"}}>成為性格成熟的大人</h1>
          <p className="text-rose-200 text-lg mb-4">學習如何好好愛人</p>
          <p className="text-slate-200 leading-relaxed mb-3" style={{fontSize:"17px"}}>本章透過「我－它」與「我－你」的關係模式、四個情感成熟階段、虛假與真正的和睦、五項實用技巧——帶領我們學習以情感成熟的方式好好愛人，真正使人和睦。</p>
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
            <p className="text-slate-200 leading-relaxed italic" style={{fontSize:"17px"}}>「在夢裡愛人並不難，相較起來，在真實的世界中付出，是既殘酷又可怕的事。」——杜斯妥也夫斯基《卡拉馬助夫兄弟們》 <span className="text-rose-300 text-sm ml-1">(p.199)</span></p>
          </div>
        </div>
      </div>

      {/* ========== 潔西卡的故事 ========== */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 md:p-8 border border-amber-200 shadow-sm">
        <h3 className="font-bold text-amber-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><BookOpen className="w-6 h-6 text-amber-600" />開場故事：潔西卡的困境<span className="ml-2 text-xs bg-amber-100 text-amber-600 px-2 py-1 rounded-full border border-amber-200">(p.199-201)</span></h3>
        <div className="space-y-3">
          <div className="bg-white rounded-xl p-4 border border-amber-100"><p className="text-slate-600" style={{fontSize:"16px"}}>📌 <strong>起因：</strong>{jessicaStory.setup}</p></div>
          <div className="bg-white rounded-xl p-4 border border-amber-100"><p className="text-slate-600" style={{fontSize:"16px"}}>⚡ <strong>衝突：</strong>{jessicaStory.conflict}</p></div>
          <div className="bg-white rounded-xl p-4 border border-amber-100"><p className="text-slate-600" style={{fontSize:"16px"}}>😔 <strong>回應：</strong>{jessicaStory.response}</p></div>
          <div className="bg-red-50 rounded-xl p-4 border border-red-200"><p className="text-red-800 font-bold" style={{fontSize:"16px"}}>⚠️ {jessicaStory.lesson}</p></div>
        </div>
      </div>

      {/* ========== 四個情感階段 ========== */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}><Layers className="w-6 h-6 text-rose-500" />情感成熟的四個階段<span className="ml-2 text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded-full border border-slate-200">(p.203-205)</span></h3>
        <p className="text-slate-500 mb-4" style={{fontSize:"16px"}}>生理上要變成大人不難，但情感上長大成熟就沒那麼容易。很多人生理上是中年人，情感上卻還停留在嬰兒階段：</p>
        <div className="space-y-3">
          {emotionalStages.map((s, i) => {
            const c = stageColorMap[s.color];
            return (
            <div key={i} className={`${c.bg} border ${c.border} rounded-2xl overflow-hidden`}>
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setOpenStage(openStage === i ? null : i)}>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{s.icon}</span>
                  <div>
                    <h4 className={`font-bold ${c.text}`} style={{fontSize:"18px"}}>{s.stage}</h4>
                    <span className="text-xs text-slate-500">{s.page}</span>
                  </div>
                </div>
                {openStage === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>{(expandAll || openStage === i) && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <div className="px-5 pb-5 space-y-2">
                    {s.traits.map((t, j) => (
                      <div key={j} className="bg-white rounded-lg p-3 border border-slate-100 flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600" style={{fontSize:"15px"}}>{t}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}</AnimatePresence>
            </div>
          );})}
        </div>
      </div>

      {/* ========== 我—它 關係的六個例子 ========== */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}><AlertTriangle className="w-6 h-6 text-slate-600" />「我－它」關係：把人當工具<span className="ml-2 text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded-full border border-slate-200">(p.208-209)</span></h3>
        <p className="text-slate-500 mb-4" style={{fontSize:"16px"}}>布伯指出，在大部分人際關係中我們把對方當作「它」——達成目標的工具，和牙刷、汽車同一級別：</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {iItExamples.map((ex, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-slate-200 flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">{ex.icon}</span>
              <p className="text-slate-600" style={{fontSize:"15px"}}>{ex.scenario}</p>
            </div>
          ))}
        </div>
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 mt-4">
          <p className="text-blue-800 font-bold" style={{fontSize:"16px"}}>💡 奧古斯丁對罪的定義：「陷在自我裡」。但丁《神曲》中，地獄是一片冰封的世界——象徵死亡、自我和罪的冷酷。魯益師描述地獄裡的人因為無法相處，每個人都孤獨活著，距離超過百萬哩。(p.209-210)</p>
        </div>
      </div>

      {/* ========== 我—你 關係 ========== */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-sm">
        <h3 className="font-bold text-emerald-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><Heart className="w-6 h-6 text-emerald-600" />「我－你」關係：神填補空白<span className="ml-2 text-xs bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full border border-emerald-200">(p.210)</span></h3>
        <div className="bg-white rounded-xl p-5 border border-emerald-200 mb-4">
          <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>布伯說，唯有雙方都願意跨越彼此的差異、互相連結，才有可能建立真實的關係。在「我－你」關係中，我知道每一個人都是按著神的形像所造的，都是獨一無二的。當真實的愛在關係中被釋放出來，我們就能感受到神的同在，你我之間的空白會被神填滿。</p>
        </div>
        <div className="flex items-center justify-center gap-4 py-4">
          <div className="w-28 h-28 rounded-full bg-emerald-100 border-2 border-emerald-300 flex items-center justify-center text-sm font-bold text-emerald-700">我的世界</div>
          <div className="w-16 h-16 rounded-full bg-amber-100 border-2 border-amber-300 flex items-center justify-center text-xs font-bold text-amber-700 -mx-6 z-10">屬神的空間</div>
          <div className="w-28 h-28 rounded-full bg-blue-100 border-2 border-blue-300 flex items-center justify-center text-sm font-bold text-blue-700">你的世界</div>
        </div>
        <p className="text-center text-slate-500 text-sm mt-2">雖然你和我不一樣，但我仍然尊重你、愛你、肯定你。神出現在我們之間。(p.210)</p>
      </div>

      {/* ========== 虛假的使人和睦 ========== */}
      <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-6 md:p-8 border border-rose-100 shadow-sm">
        <h3 className="font-bold text-rose-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}><Shield className="w-6 h-6 text-rose-600" />虛假的使人和睦：六個實例<span className="ml-2 text-xs bg-rose-100 text-rose-600 px-2 py-1 rounded-full border border-rose-200">(p.211-213)</span></h3>
        <p className="text-slate-500 mb-4" style={{fontSize:"16px"}}>因為害怕而刻意迴避衝突，只求相安無事，並不是真的使人和睦：</p>
        <div className="space-y-2">
          {falsePeaceExamples.map((ex, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-rose-100 cursor-pointer hover:border-rose-300 transition-colors" onClick={() => setOpenFalse(openFalse === i ? null : i)}>
              <div className="flex items-center gap-2">
                <span className="font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full text-sm">{ex.name}</span>
                <AnimatePresence>{(expandAll || openFalse === i) ? (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-slate-600" style={{fontSize:"15px"}}>{ex.situation} <span className="text-slate-400 text-xs">{ex.page}</span></motion.p>
                ) : (
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-slate-400 text-sm">點擊展開</motion.span>
                )}</AnimatePresence>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-rose-100 rounded-xl p-5 border border-rose-200 mt-4">
          <p className="text-rose-900 font-bold" style={{fontSize:"17px"}}>耶穌說：「你們不要想我來是叫地上太平；我來並不是叫地上太平，乃是叫地上動刀兵。」（太十34）——你無法用謊言和偽裝換取基督國度的平安。(p.213)</p>
        </div>
      </div>

      {/* ========== 權利法案 ========== */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 md:p-8 border border-blue-100 shadow-sm">
        <h3 className="font-bold text-blue-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}><BookMarked className="w-6 h-6 text-blue-600" />權利法案：應當尊重的權利<span className="ml-2 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full border border-blue-200">(p.216-218)</span></h3>
        <p className="text-slate-500 mb-4" style={{fontSize:"16px"}}>尊重不是感覺，是我們對待他人的態度。作者把這份清單張貼在冰箱門上多年：</p>
        <div className="space-y-2">
          {rightsToRespect.map((r, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-blue-100 cursor-pointer hover:border-blue-300 transition-colors" onClick={() => setOpenRight(openRight === i ? null : i)}>
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-xs flex-shrink-0">{i+1}</span>
                <span className="font-bold text-blue-800" style={{fontSize:"15px"}}>{r.right}</span>
              </div>
              <AnimatePresence>{(expandAll || openRight === i) && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <p className="text-slate-500 text-sm mt-2 ml-9 bg-blue-50 p-3 rounded-lg">例如：{r.example}</p>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 五項實用技巧 ========== */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-indigo-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}><Target className="w-6 h-6 text-indigo-600" />學習新技巧，真正使人和睦<span className="ml-2 text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full border border-indigo-200">(p.215-223)</span></h3>
        <div className="space-y-3 mt-4">
          {practicalSkills.map((skill, i) => (
            <div key={i} className="border border-indigo-100 rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer bg-indigo-50 hover:bg-indigo-100 transition-colors" onClick={() => setOpenSkill(openSkill === i ? null : i)}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <div><h4 className="font-bold text-indigo-800" style={{fontSize:"18px"}}>{skill.title}</h4><p className="text-indigo-500 text-sm">{skill.subtitle}</p></div>
                </div>
                {openSkill === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>{(expandAll || openSkill === i) && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <div className="px-5 pb-5 space-y-3 bg-white">
                    {skill.speakingTips && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
                          <div className="font-bold text-emerald-700 mb-2" style={{fontSize:"15px"}}>🗣️ 說話時：</div>
                          {skill.speakingTips.map((t, j) => (<p key={j} className="text-slate-600 text-sm mb-1.5 flex items-start gap-1"><span className="text-emerald-500 mt-0.5">•</span> {t}</p>))}
                        </div>
                        <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                          <div className="font-bold text-blue-700 mb-2" style={{fontSize:"15px"}}>👂 傾聽時：</div>
                          {skill.listeningTips!.map((t, j) => (<p key={j} className="text-slate-600 text-sm mb-1.5 flex items-start gap-1"><span className="text-blue-500 mt-0.5">•</span> {t}</p>))}
                        </div>
                      </div>
                    )}
                    {skill.steps && (
                      <div className="bg-violet-50 rounded-xl p-4 border border-violet-200">
                        <div className="font-bold text-violet-700 mb-2" style={{fontSize:"15px"}}>📋 步驟：</div>
                        {skill.steps.map((s, j) => (<p key={j} className="text-slate-600 text-sm mb-1.5">{j+1}. {s}</p>))}
                      </div>
                    )}
                    {skill.fourSteps && (
                      <div className="grid grid-cols-2 gap-2">
                        {skill.fourSteps.map((fs, j) => (
                          <div key={j} className="bg-amber-50 rounded-xl p-3 border border-amber-200 text-center">
                            <span className="font-bold text-amber-700 text-sm">{fs.step}</span>
                            <p className="text-slate-600 text-xs mt-1">{fs.desc}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {skill.template && (
                      <>
                        <div className="bg-rose-50 rounded-xl p-4 border border-rose-200">
                          <div className="font-bold text-rose-700 mb-2" style={{fontSize:"15px"}}>📝 練習模板：</div>
                          {skill.template.map((t, j) => (<p key={j} className="text-slate-600 text-sm mb-1.5">• {t}</p>))}
                        </div>
                        {skill.examples && (
                          <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                            <div className="font-bold text-amber-700 mb-2" style={{fontSize:"15px"}}>📖 書中實例：</div>
                            {skill.examples.map((ex, j) => (<p key={j} className="text-slate-600 text-sm mb-1.5"><strong>{ex.person}：</strong>觸發→{ex.trigger}；根源→{ex.root} <span className="text-slate-400">({ex.page})</span></p>))}
                          </div>
                        )}
                      </>
                    )}
                    <p className="text-xs text-slate-400">{skill.page}</p>
                  </div>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 耶穌的十二門徒 ========== */}
      <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl p-6 md:p-8 border border-amber-100 shadow-sm">
        <h3 className="font-bold text-amber-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><Users className="w-6 h-6 text-amber-600" />教會是一種新文化：耶穌的門徒團隊<span className="ml-2 text-xs bg-amber-100 text-amber-600 px-2 py-1 rounded-full border border-amber-200">(p.223-224)</span></h3>
        <p className="text-slate-600 mb-4" style={{fontSize:"16px"}}>耶穌的門徒在屬靈和情感上都很不成熟——但他們有一個共同特質：甘心樂意。</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {twelveDisciples.map((d, i) => (
            <div key={i} className={`rounded-xl p-3 border flex items-start gap-2 ${i === 8 ? 'bg-red-50 border-red-200' : 'bg-white border-amber-100'}`}>
              <span className="text-xl flex-shrink-0">{d.icon}</span>
              <div><span className={`font-bold text-sm ${i === 8 ? 'text-red-700' : 'text-amber-700'}`}>{d.name}：</span><span className="text-slate-600 text-sm">{d.trait}</span></div>
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
        <h3 className="font-bold text-teal-700 mb-4" style={{fontSize:"22px"}}>📝 第七章總結：長大成熟，好好愛人</h3>
        <div className="space-y-3">
          <div className="bg-rose-50 border-rose-200 border rounded-xl p-4"><div className="font-bold text-rose-700 mb-1.5" style={{fontSize:"17px"}}>👶 四個情感階段 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.203-205</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>嬰兒（利用別人）→ 孩童（不順心就抱怨操控）→ 青少年（防衛心強注意力在自己身上）→ 成年人（能清楚表達需要、尊重他人、成熟解決衝突）。</p></div>
          <div className="bg-blue-50 border-blue-200 border rounded-xl p-4"><div className="font-bold text-blue-700 mb-1.5" style={{fontSize:"17px"}}>🤝 我—它 vs 我—你 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.207-210</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>布伯的「我與你」：每個人都是按神形像所造的獨立個體。在「我—你」關係中，神填補空白。在「我—它」關係中，我們把人當作工具。</p></div>
          <div className="bg-amber-50 border-amber-200 border rounded-xl p-4"><div className="font-bold text-amber-700 mb-1.5" style={{fontSize:"17px"}}>⚔️ 真正的和睦 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.211-214</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>虛假的和睦是因為害怕而迴避衝突。真正的和睦需要拆毀虛假的和睦，用愛心說誠實話。耶穌是最好的榜樣。</p></div>
          <div className="bg-indigo-50 border-indigo-200 border rounded-xl p-4"><div className="font-bold text-indigo-700 mb-1.5" style={{fontSize:"17px"}}>🛠️ 五項實用技巧 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.215-223</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>說話與傾聽、權利法案、不要猜測別人的心思、釐清期待、辨識過敏與刺激。這些工具能幫助我們從「我—它」進入「我—你」關係。</p></div>
        </div>
      </div>

      {/* ========== 章末禱告 ========== */}
      <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-3xl p-6 md:p-8 border border-rose-200">
        <h3 className="font-bold text-rose-800 mb-3" style={{fontSize:"20px"}}>🙏 章末禱告 <span className="text-xs font-normal text-rose-600">(p.224-225)</span></h3>
        <p className="text-rose-900 leading-relaxed italic" style={{fontSize:"17px"}}>「主耶穌基督神的兒子，求祢憐憫我，我知道我常常把人當作物品，而沒有用基督的心靈和眼光來對待對方。我習慣用我裡面根深柢固、不健康的方式與人來往，求祢改變我，讓我成為可用的器皿，向人散播成熟、穩定、可靠的愛。釋放我，讓我不再因為害怕而假裝使人和睦。主耶穌基督，幫助我像祢一樣愛人。求祢用聖靈大能幫助我，長成一個在情感上成熟的大人。奉耶穌的名，阿們。」</p>
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
