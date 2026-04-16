import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, BookOpen, ChevronDown, ChevronUp, Target, Brain, MessageSquareQuote, BookMarked, ArrowDown } from 'lucide-react';

export default function Chapter5() {
  const [openFactor, setOpenFactor] = useState<number | null>(null);
  const [openStep, setOpenStep] = useState<number | null>(null);
  const [openTheology, setOpenTheology] = useState<number | null>(null);
  const [openChallenge, setOpenChallenge] = useState<number | null>(null);
  const [openTaiwan, setOpenTaiwan] = useState<number | null>(null);

  const goodSamaritanSummary = {
    story: "路加福音中耶穌的著名例子：一個猶太人被暴徒搶劫痛毆，昏沉地倒在路旁溝渠。祭司路過——繞過去了。利未人路過——也快步通過。然後一名撒馬利亞人（猶太人的死對頭！）路過，卻停下來：為他包紮妥當、抬上驢子、帶到客棧、付清一切費用。",
    reflection: "那名猶太人第二天在舒適的床上醒來，發現傷口包紮好好的，房錢和伙食費也由一位素昧平生的人付清，心裏會作何感想？「是誰做的？」「為甚麼他沒有像別人那樣轉身走開？」",
    principle: "這不就是接受幫助的人常會問的問題嗎？他們想一探這種慷慨行為背後的動機。「怎麼會有人願意為我做這樣的事呢？」",
    page: "P76-77"
  };

  const loveQuotientIntro = {
    concept: "為幫助你量化答案，作者要挑戰你寫下幾件能代表你目前對人之愛心水準的事。稱它為你「個人的愛心商數」。在零到十之間寫一個數字，零代表你的心完全冰冷，十則顯示你是德蕾莎修女的翻版。禁止使用「五」這個數字——讓數字偏向兩端中的其中一端。",
    authorCrisis: "幾年前作者在密西根州念書時，休息時間思想好撒馬利亞人的故事。他獨自坐在一間小餐廳，一邊反覆讀這段經文，一邊強忍住淚水。他深深地發現自己的愛心商數已經低到危險的地步。",
    confession: "「我必須坦白承認，我就是敗在這個神賦予最大意義的愛上；對於這個神聖的珍寶，自己生命裏竟如此缺乏。」哥林多前書十三章1-3節給了他當頭棒喝：「我若能說萬人的方言，並天使的話語，卻沒有愛，我就成了鳴的鑼，響的鈸一般。」",
    page: "P78-79"
  };

  const loveDamagers = [
    {
      num: 1, title: "你生長的地方", icon: "🏠",
      detail: "你可能來自一個給人挫折的家庭或工作環境。愛心會生出愛心，恩慈會培養出恩慈。有些人在充滿歡笑、愛、安全感和接納的家庭長大，愛心商數自然在七到九之間。但很多人從小就從艱難裏學到輕蔑生出輕蔑，憤怒製造出憤怒，仇恨餵養出仇恨。在他們起跑以前，家庭或工作環境就已經把他們打敗了。",
      solution: "和一位有智慧的朋友或基督徒輔導好好談談。如果你現在還活在那樣的環境，你得採取一些勇敢的步驟——或是改變這環境，或是轉換到更健康的環境。",
      page: "P80-82"
    },
    {
      num: 2, title: "你的生活方式", icon: "🏃",
      detail: "回想好撒馬利亞人的故事——那名祭司和利未人應該也是仁慈有愛心的人。但有些事經常發生在他們身上，也會影響我們其餘人：我們一頭栽進自己的事業，開始養家活口，逐漸被外務和責任團團圍住。過著每天早上六點起床、週末也沒有休息的日子。一刻不得閒的生活步調蠶食掉我們的愛心。",
      solution: "放慢生活步調。作者在密西根那天的體悟是：當他領悟到放慢生活步調終於讓他又能經常對人生出愛心，開始過著有多餘情感可用的生活，隨時都能把感情提取出來使用。",
      page: "P82-84"
    },
    {
      num: 3, title: "你付出的方式", icon: "💸",
      detail: "造成愛心商數低的第三個可能原因是過度付出關懷。教會裏有些人信主早期滿腔火熱，幾乎是敞開胸懷把心獻給每一個他們遇上的有需要的人。他們給了又給，幾乎給光了。然後有一天，他們發現自己開始對某個受他關懷的人有一絲怨恨的感覺——你耗盡得太嚴重，以致你的鐘擺卡在另一邊了。",
      solution: "學會關懷別人必須在細心呵護自己的平衡下進行。耶穌也經常示範這一點——祂付出大量關懷，但祂也經常說：「夠了，現在我要獨自到山上去禱告，在那裏休養生息。」有時我們要向人付出，有時則要做相反的事：照顧自己——坐得輕輕鬆鬆的，把腳翹高，開懷大笑，享受人生，讓愛心重新盈滿。",
      page: "P85-86"
    },
    {
      num: 4, title: "你接受過的東西", icon: "🎁",
      detail: "愛能生出愛。能經常從神手裏享受新鮮的愛之觸摸的人，也會轉身向別人伸出恩典與仁慈之手。我們是神愛的導管，不是儲水池。基督徒本來就是奇異恩典的領受者——耶穌用免欠債的比喻強調恩慈應該生出恩慈。那個被免了龐大債務的僕人，卻轉過頭去追打欠他五塊錢的可憐人。",
      solution: "重新經歷神的憐憫。或許你已經很久沒有經歷過神的憐憫了。或許你跟約伯一樣懷疑神到底在不在。花時間回想你第一次接受神恩賜的那天——「我自由了！我的罪都被赦免了！神是大有憐憫的神！」讓那份被赦免的經歷重新點燃你想把憐憫傳給人的渴望。",
      scripture: "太十八21-35 免債的比喻",
      page: "P86-89"
    }
  ];

  const boostSteps = [
    { step: "向你的源頭敞開", detail: "經常從神手裏享受新鮮的愛之觸摸。花時間默想神的憐憫，讓祂的愛先充滿你。你不能給別人你自己沒有的東西。我們是導管，不是儲水池。", icon: "🙏" },
    { step: "放慢生活步調", detail: "好撒馬利亞人之所以能停下來，是因為他沒有忙到無法停下腳步。審視你的行程表，找出可以放慢的地方。有了多餘的情感和時間，你才能看見身邊有需要的人。", icon: "🐢" },
    { step: "在付出與接受間取得平衡", detail: "不要付出到耗盡，也不要退縮到冷漠。耶穌是最好的榜樣：大量關懷→獨自到山上禱告→重新出發。傳道書三章1-8節：凡事都有定期。有時要向人付出，有時要照顧自己。", icon: "⚖️" },
    { step: "處理你的過去", detail: "如果你的成長背景給你的愛心商數帶來負面影響，不要假裝沒事。和一位信任的人或輔導員談談，讓過去的傷痛得到醫治。你不必被過去定義。", icon: "🩹" },
    { step: "做一件小事", detail: "不要等到愛心商數達到十才行動。從一件小事開始：一個微笑、一句問候、一頓午餐的邀請。作者在密西根小餐廳的服務員身上看見了一個需要關心的人——結果那個小小的行動帶來了久未感受過的喜樂。", icon: "👣" }
  ];

  const dinerStory = {
    setup: "作者在密西根小餐廳裏思想好撒馬利亞人的故事，自覺愛心商數低到危險的地步。這時他注意到他的服務員——一個看起來很疲倦、承受壓力的年輕女子。",
    action: "他開始問她一些問題，了解她的處境。然後他做了一件很簡單的事：他告訴她和她的同事，他們注意到她工作很辛苦，只是想讓她知道他們很關心她，希望能幫點忙。",
    result: "然後他回座了。之後不久，餐廳變得很忙碌，他們也不再能多談甚麼。但他們走的時候，她投給他一個感謝的眼神。你知道，在那一刻，他感受到一股許久未曾感受過的喜樂。當晚他便開心地領悟到，放慢生活步調終於讓他又能經常對人生出愛心。",
    page: "P84-85"
  };

  const theologyTopics = [
    {
      title: "好撒馬利亞人：愛的三重障礙",
      content: "好撒馬利亞人的故事中有三個人經過受傷的猶太人身邊。祭司和利未人都看見了，卻繞過去——不是因為他們沒有愛心，而是因為三重障礙擋住了愛的行動：(1)忙碌——他們可能有很多「重要的事」要趕著去做；(2)恐懼——那條路很危險，停下來可能自己也遇險；(3)偏見——受傷的人可能不值得幫助。撒馬利亞人跨越了這三重障礙：他放慢腳步、承擔風險、跨越種族仇恨。今天阻止我們愛人的，也常常是這三個障礙。(P76-77)",
      scriptures: ["路十30-37 好撒馬利亞人的比喻", "加五14 全律法都包在「愛人如己」這一句話之內了。", "約壹三18 小子們哪，我們相愛，不要只在言語和舌頭上，總要在行為和誠實上。"],
      reflection: "在你的日常生活中，忙碌、恐懼和偏見這三個障礙，哪一個最常阻止你愛人？你願意像好撒馬利亞人一樣跨越它嗎？"
    },
    {
      title: "導管 vs 儲水池：愛的流動神學",
      content: "「我們是神愛的導管，不是儲水池。」(P86) 這是本章最深刻的神學洞見。儲水池是封閉的——它只接受不給予，久了水就會變臭。導管是開放的——它不斷接受也不斷流出，水保持新鮮。很多基督徒的愛心枯竭，是因為他們像儲水池——很久沒有從源頭（神）接受新鮮的愛，卻一直試圖從越來越淺的存量中擠出東西來給人。解決方法不是「更努力去愛」，而是「更多從神那裡接受愛」。當你經常從神手裡享受新鮮的愛之觸摸，你自然會轉身向別人伸出恩典之手。",
      scriptures: ["約七38 信我的人，從他腹中要流出活水的江河來。", "約壹四19 我們愛，因為神先愛我們。", "林後一3-4 我們在一切患難中，祂就安慰我們，叫我們能用神所賜的安慰去安慰那遭各樣患難的人。"],
      reflection: "你目前更像「導管」還是「儲水池」？你多久沒有從源頭（神）接受新鮮的愛了？你的「水」還新鮮嗎，還是已經開始變臭了？"
    },
    {
      title: "免債的比喻：被赦免的人才能赦免別人",
      content: "耶穌在馬太福音十八章講了一個尖銳的比喻：一個僕人欠主人一千年也還不完的龐大債務，主人憐憫他全部免了。這個僕人轉身卻去追打欠他五塊錢的同伴。耶穌的重點是：基督徒本來就是奇異恩典的領受者——我們的罪債已經被完全赦免。當你真正體會到自己被赦免的深度，你就不會再對別人斤斤計較。你的愛心商數和你對自己被赦免的體會直接成正比。(P87-88)",
      scriptures: ["太十八21-35 免債的僕人的比喻", "弗四32 並要以恩慈相待，存憐憫的心，彼此饒恕，正如神在基督裡饒恕了你們一樣。", "路七47 她許多的罪都赦免了，因為她的愛多。"],
      reflection: "你上一次深刻感受到「我的罪被赦免了」是什麼時候？那份感受是否轉化為對別人的憐憫和恩慈？"
    }
  ];

  const taiwanExamples = [
    {
      title: "🏃 台灣人的忙碌：好撒馬利亞人的反面",
      scenario: "台灣人的平均工時在全球排名前列。在趕捷運、趕開會、趕接小孩的日常中，我們就像那個祭司和利未人——不是沒有愛心，而是太忙了以至於看不見路邊的人。更諷刺的是，很多基督徒最忙碌的時候就是在教會服事——忙到無暇關心身邊真正需要幫助的人。",
      challenge: "這週刻意在一天中「慢下來」：搭捷運時不滑手機而是觀察周圍的人、午餐時不趕著回辦公室而是多坐五分鐘、下班後不急著回家而是和一位同事聊聊天。當你放慢腳步，你會開始「看見」你一直錯過的人。",
      insight: "作者的領悟是：放慢生活步調終於讓他又能經常對人生出愛心。(P84) 忙碌不只是時間管理的問題——它是一個屬靈的問題，因為它阻止我們看見和回應神放在我們身邊的人。"
    },
    {
      title: "💔 華人教會中的「過度付出」危機",
      scenario: "在台灣的教會文化中，「越愛主就越忙碌服事」幾乎是共識。小組長、主日學老師、敬拜團、禱告會、探訪——忠心的同工幾乎每天都泡在教會裡。起初是出於愛心，但慢慢地變成義務。當愛心耗盡了，怨恨就會悄悄滋生：「我給了又給，卻沒有人回報我。」鐘擺卡在另一邊——從過度付出變成冷漠退縮。",
      challenge: "誠實評估你目前的「愛心商數」（0-10分，不能用5）。如果低於6分，問自己：是哪個因素造成的——成長環境？生活步調？過度付出？還是很久沒有從神那裡接受新鮮的愛了？然後針對原因採取一個具體行動。",
      insight: "耶穌也經常示範付出與接受的平衡：「夠了，現在我要獨自到山上去禱告。」(P86) 如果連耶穌都需要退到安靜的地方充電，你我更需要。"
    },
    {
      title: "🎁 在台灣的日常中做「好撒馬利亞人」",
      scenario: "在台灣的日常生活中，機會其實無處不在：便利商店結帳時疲憊的店員、公車上抱著孩子的年輕媽媽、辦公室裡剛被主管罵的同事、LINE群組中突然沉默的朋友。好撒馬利亞人的故事不是要我們做什麼驚天動地的大事——而是在日常的小事中「停下來、看見、行動」。",
      challenge: "這週做三件「好撒馬利亞人」的小事：(1)主動幫助一個你平常會忽略的人 (2)用簡訊或LINE關心一個最近很安靜的朋友 (3)給一個辛苦工作的服務業人員一句真心的感謝。記錄你做這些事時的感受。",
      insight: "作者在小餐廳對服務員的簡單關心就帶來了「許久未曾感受過的喜樂」。(P84-85) 愛心商數的提升不需要大動作——只需要「願意停下來」。"
    },
    {
      title: "🙏 「導管 vs 儲水池」在華人靈性中的應用",
      scenario: "華人基督徒常有兩種極端：一種是「只進不出」的儲水池——參加很多聚會、讀很多屬靈書籍，但從不把學到的愛付諸行動；另一種是「只出不進」的水龍頭——拼命服事、拼命付出，但很少花時間安靜在神面前被愛充滿。兩種都不是導管——導管是不斷接受、也不斷流出的。",
      challenge: "檢視你的屬靈生活：你的「進」和「出」是否平衡？如果你偏向「只進不出」，這週主動去服事一個人。如果你偏向「只出不進」，這週刻意安排一段安靜的時間，只是讓神愛你——不祈求、不代禱、不讀書，只是被愛。",
      insight: "「我們是神愛的導管，不是儲水池。」(P86) 健康的靈性生活是不斷接受神的愛、然後不斷流出去祝福別人。兩者缺一不可。"
    }
  ];

  const weeklyChallenge = [
    {
      week: "第一週", title: "測量你的愛心商數",
      mission: "誠實地給自己打一個愛心商數分數（0-10，不能用5）。然後回答四個診斷問題：(1)我的成長環境對我的愛心有什麼影響？(2)我目前的生活步調是否允許我停下來關心人？(3)我是否曾經過度付出到耗盡？(4)我多久沒有深刻經歷神的愛了？把答案寫在日記中。",
      scripture: "林前十三1-3 我若能說萬人的方言……卻沒有愛，我就算不得甚麼。",
      journalPrompt: "你的愛心商數是多少？你對這個數字滿意嗎？四個破壞因素中哪一個對你影響最大？"
    },
    {
      week: "第二週", title: "放慢腳步，看見人",
      mission: "這週每天刻意放慢一個日常活動的節奏（例如：吃午餐多坐十分鐘、搭捷運時不滑手機、下班後慢慢走一段路）。在放慢的時候，觀察周圍的人——誰看起來很疲憊？誰看起來需要一句鼓勵的話？每天記錄你「看見」的一個人。",
      scripture: "路十33 惟有一個撒馬利亞人行路來到那裏，看見他就動了慈心。",
      journalPrompt: "放慢腳步後，你開始「看見」了什麼你之前錯過的？放慢的感覺是焦慮、內疚、還是自由？"
    },
    {
      week: "第三週", title: "從源頭重新接受愛",
      mission: "這週每天花十分鐘做一件事：安靜坐著，默想一段關於神愛你的經文。不是為別人禱告——只是讓神愛你。推薦經文：詩一三九1-18、羅八31-39、弗三17-19。然後花兩分鐘回想你第一次經歷神赦免的那天。讓那份感受重新充滿你。",
      scripture: "約壹四19 我們愛，因為神先愛我們。",
      journalPrompt: "在安靜中接受神的愛，你的感受是什麼？這和你平常的禱告有什麼不同？你是否感覺到自己的「水位」在上升？"
    },
    {
      week: "第四週", title: "做一件好撒馬利亞人的事",
      mission: "選擇一個你這幾週「看見」的人，為他做一件具體的關心行動——不需要很大，可以是一頓飯、一通電話、一個真誠的問候。做之前先禱告：「主啊，讓我成為祢愛的導管，把祢的愛流過我傳到這個人身上。」做完後記錄你的感受。",
      scripture: "路十37 耶穌說：「你去照樣行吧。」",
      journalPrompt: "你做了什麼？對方的反應如何？你自己的感受是什麼——是否像作者一樣感受到「許久未曾感受過的喜樂」？"
    }
  ];

  const groupDiscussion = [
    {
      category: "❤️ 愛心商數",
      questions: [
        "你給自己的愛心商數是多少（0-10，不能用5）？你願意跟小組分享嗎？",
        "四個破壞愛心的因素中（成長環境、生活方式、過度付出、未接受神的愛），哪一個對你影響最大？",
        "作者在密西根小餐廳的經歷——你有沒有類似的「愛心商數很低」的覺醒時刻？那時你做了什麼？",
        "「我們是神愛的導管，不是儲水池」——你目前更像導管還是儲水池？"
      ]
    },
    {
      category: "🐢 放慢與看見",
      questions: [
        "好撒馬利亞人的故事中，祭司和利未人為什麼沒有停下來？你覺得阻止他們的是什麼（忙碌？恐懼？偏見？）？",
        "在你的日常生活中，你最常「繞過去」的是什麼人或什麼處境？",
        "如果你這週真的放慢腳步，你覺得最大的障礙是什麼？你願意嘗試嗎？",
        "作者對餐廳服務員的小小關心帶來了「久未感受的喜樂」——你有過類似的經歷嗎？"
      ]
    },
    {
      category: "🙏 從源頭接受愛",
      questions: [
        "你多久沒有深刻經歷神的愛和赦免了？什麼阻止了你？",
        "免債比喻中的僕人被免了龐大債務，卻追打欠他五塊錢的人——你是否曾在領受了神的恩典後，對別人卻不那麼慷慨？",
        "「你不能給別人你自己沒有的東西」——你目前從神那裡接受到足夠的愛嗎？",
        "作為小組，我們可以做什麼來幫助彼此提升愛心商數？"
      ]
    }
  ];

  const reflections = [
    "我的愛心商數目前是多少？是什麼把它拉低的——成長環境？忙碌？過度付出？還是乾涸的靈性？",
    "我是否像那個祭司和利未人一樣，太忙了以至於看不見路邊的人？我的行程表是否需要放慢？",
    "我有沒有過度付出到耗盡的經歷？我的鐘擺是否卡在「冷漠」的那一端？",
    "我多久沒有深刻經歷神的愛和赦免了？我的「水位」還足夠嗎？",
    "「我們是神愛的導管，不是儲水池」——我目前更像哪一個？我的進和出是否平衡？",
    "如果耶穌今天問我：「你去照樣行吧」——我有足夠的愛心去行嗎？如果不夠，我需要做什麼？"
  ];

  const actions = [
    "愛心商數評估：誠實打分（0-10），辨識你的主要破壞因素，制定一個針對性的改善計畫。",
    "放慢實驗：這週選一天，把行程減少20%。用多出來的時間觀察和關心身邊的人。",
    "從源頭充電：每天花十分鐘安靜在神面前，只是被愛——不代禱、不祈求，只是接受。",
    "做一件小事：學習密西根小餐廳的故事，在日常中找一個人，做一件簡單的關心行動。",
    "處理過去的傷：如果你的成長環境影響了你的愛心能力，找一位信任的人或輔導員談談。",
    "平衡付出與接受：如果你正在過度付出，給自己一個「安息日」——不服事、不照顧別人，只照顧自己。"
  ];

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="space-y-8">

      {/* ========== 章節標題 ========== */}
      <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8 md:p-10 relative overflow-hidden border border-rose-100 shadow-sm">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="relative">
          <div className="flex items-center gap-2 text-rose-600 font-medium mb-2" style={{fontSize:"15px"}}><BookOpen className="w-5 h-5" />PART 2：活出基督徒特質</div>
          <h2 className="font-extrabold text-rose-900 mb-4" style={{fontSize:"30px"}}>第五章：愛心的牽引力</h2>
          <p className="text-rose-800 leading-relaxed mb-3" style={{fontSize:"18px"}}>一個人若有愛心卻沒有行動，那他必定有屬靈上的問題。不關心人的基督信仰不能吸引愛追根究柢的人進到羊圈。清楚持續地展示出基督般的愛則是<strong>強力磁石</strong>，可以把人拉向祂。</p>
          <div className="bg-white/60 rounded-xl p-4 border border-rose-200">
            <p className="text-rose-800 italic leading-relaxed" style={{fontSize:"17px"}}>「我賜給你們一條新命令，乃是叫你們彼此相愛；我怎樣愛你們，你們也要怎樣相愛。你們若有彼此相愛的心，眾人因此就認出你們是我的門徒了。」——約翰福音十三：34-35 <span className="text-rose-500 text-sm ml-1">(P77)</span></p>
          </div>
        </div>
      </div>

      {/* ========== 好撒馬利亞人 ========== */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><Heart className="w-6 h-6 text-rose-500" />一個路邊的例子<span className="ml-2 text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded-full border border-slate-200">P76-77</span></h3>
        <div className="bg-amber-50 rounded-xl p-5 border border-amber-200 mb-4"><p className="text-amber-800 leading-relaxed" style={{fontSize:"16px"}}>📖 {goodSamaritanSummary.story}</p></div>
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 mb-3"><p className="text-blue-700" style={{fontSize:"16px"}}>💭 {goodSamaritanSummary.reflection}</p></div>
        <div className="bg-rose-50 rounded-xl p-4 border border-rose-200"><p className="text-rose-800 font-bold" style={{fontSize:"16px"}}>💡 {goodSamaritanSummary.principle}</p></div>
      </div>

      {/* ========== 愛心商數 ========== */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 md:p-8 border border-amber-200 shadow-sm">
        <h3 className="font-bold text-amber-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><Target className="w-6 h-6 text-amber-600" />你的愛心商數<span className="ml-2 text-xs bg-amber-100 text-amber-600 px-2 py-1 rounded-full border border-amber-200">P78-79</span></h3>
        <div className="bg-white rounded-xl p-5 border border-amber-100 mb-4"><p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>{loveQuotientIntro.concept}</p></div>
        <div className="bg-red-50 rounded-xl p-5 border border-red-200 mb-3">
          <p className="text-red-800 font-bold mb-2" style={{fontSize:"16px"}}>⚠️ 作者的危機：</p>
          <p className="text-slate-700 leading-relaxed" style={{fontSize:"16px"}}>{loveQuotientIntro.authorCrisis}</p>
        </div>
        <div className="bg-amber-100 rounded-xl p-4 border border-amber-200"><p className="text-amber-900 italic leading-relaxed" style={{fontSize:"16px"}}>{loveQuotientIntro.confession}</p></div>
      </div>

      {/* ========== 小餐廳的故事 ========== */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-sm">
        <h3 className="font-bold text-emerald-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><Heart className="w-6 h-6 text-emerald-600" />密西根小餐廳的轉折<span className="ml-2 text-xs bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full border border-emerald-200">P84-85</span></h3>
        <div className="space-y-3">
          <div className="bg-white rounded-xl p-4 border border-emerald-100"><p className="text-slate-600" style={{fontSize:"16px"}}>📍 {dinerStory.setup}</p></div>
          <div className="bg-white rounded-xl p-4 border border-emerald-100"><p className="text-slate-600" style={{fontSize:"16px"}}>🤝 {dinerStory.action}</p></div>
          <div className="bg-emerald-100 rounded-xl p-4 border border-emerald-200"><p className="text-emerald-800 font-bold" style={{fontSize:"16px"}}>✨ {dinerStory.result}</p></div>
        </div>
      </div>

      {/* ========== 破壞愛心的四個因素 ========== */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-rose-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}><ArrowDown className="w-6 h-6 text-rose-600" />破壞愛心的四個因素<span className="ml-2 text-xs bg-rose-100 text-rose-600 px-2 py-1 rounded-full border border-rose-200">P80-89</span></h3>
        <p className="text-slate-500 mb-4" style={{fontSize:"16px"}}>什麼會拉低你的愛心商數？作者扮演心靈醫生的角色，檢查四個可能的因素：</p>
        <div className="space-y-3">
          {loveDamagers.map((d, i) => (
            <div key={i} className="border border-rose-100 rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer bg-rose-50 hover:bg-rose-100 transition-colors" onClick={() => setOpenFactor(openFactor === i ? null : i)}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{d.icon}</span>
                  <h4 className="font-bold text-rose-800" style={{fontSize:"18px"}}>{d.num}. {d.title}</h4>
                </div>
                {openFactor === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>{(openFactor === i) && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <div className="px-5 pb-5 space-y-3 bg-white">
                    <div className="bg-rose-50 rounded-xl p-4 border border-rose-200"><p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>💔 <strong>問題：</strong>{d.detail}</p></div>
                    <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200"><p className="text-emerald-700" style={{fontSize:"16px"}}>🔄 <strong>處方：</strong>{d.solution}</p></div>
                    {d.scripture && <div className="bg-blue-50 rounded-xl p-3 border border-blue-200"><p className="text-blue-700 text-sm font-medium">📖 {d.scripture}</p></div>}
                    <p className="text-xs text-slate-400">{d.page}</p>
                  </div>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 提升愛心商數的五步驟 ========== */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 md:p-8 border border-blue-100 shadow-sm">
        <h3 className="font-bold text-blue-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><Target className="w-6 h-6 text-blue-600" />提升愛心商數的五個步驟<span className="ml-2 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full border border-blue-200">P79-89</span></h3>
        <div className="space-y-3">
          {boostSteps.map((s, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-blue-100 cursor-pointer hover:border-blue-300 transition-colors" onClick={() => setOpenStep(openStep === i ? null : i)}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{s.icon}</span>
                <span className="font-bold text-blue-800" style={{fontSize:"16px"}}>{s.step}</span>
              </div>
              <AnimatePresence>{(openStep === i) && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <p className="text-slate-600 mt-2 ml-11 leading-relaxed" style={{fontSize:"15px"}}>{s.detail}</p>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
        <div className="bg-blue-100 rounded-xl p-5 border border-blue-200 mt-4">
          <p className="text-blue-900 font-bold text-center" style={{fontSize:"17px"}}>「我們是神愛的導管，不是儲水池。」(P86)</p>
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
        <h3 className="font-bold text-teal-700 mb-4" style={{fontSize:"22px"}}>📝 第五章總結：愛是最強力的磁石</h3>
        <div className="space-y-3">
          <div className="bg-rose-50 border-rose-200 border rounded-xl p-4"><div className="font-bold text-rose-700 mb-1.5" style={{fontSize:"17px"}}>❤️ 愛心商數 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>P78-79</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>你的愛心商數決定你的感染力。作者曾發現自己的商數低到危險的地步——哥林多前書十三章給了他當頭棒喝。</p></div>
          <div className="bg-amber-50 border-amber-200 border rounded-xl p-4"><div className="font-bold text-amber-700 mb-1.5" style={{fontSize:"17px"}}>⚠️ 四個破壞因素 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>P80-89</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>成長環境→生活步調→過度付出→未接受神的愛。每個都有具體的處方。</p></div>
          <div className="bg-blue-50 border-blue-200 border rounded-xl p-4"><div className="font-bold text-blue-700 mb-1.5" style={{fontSize:"17px"}}>🔑 核心洞見 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>P86</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>我們是神愛的導管，不是儲水池。要提升愛心商數，不是「更努力去愛」，而是「更多從神那裡接受愛」。</p></div>
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
