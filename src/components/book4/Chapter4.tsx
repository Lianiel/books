import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, BookOpen, ChevronDown, ChevronUp, Target, Brain, MessageSquareQuote, BookMarked, Eye, ArrowDown } from 'lucide-react';

export default function Chapter4() {
  const [openTrait, setOpenTrait] = useState<number | null>(null);
  const [openPitfall, setOpenPitfall] = useState<number | null>(null);
  const [openTheology, setOpenTheology] = useState<number | null>(null);
  const [openChallenge, setOpenChallenge] = useState<number | null>(null);
  const [openTaiwan, setOpenTaiwan] = useState<number | null>(null);

  const strobel = {
    name: "李·史特博（Lee Strobel）",
    background: "《芝加哥論壇報》（Chicago Tribune）的記者，1980年代早期加入柳溪教會，目的是安撫剛信主的妻子賴絲麗。",
    quote: "「當我以充滿懷疑的未信者身分走進教會時，我的『虛偽天線』開始掃瞄，找尋這些人裝模作樣、玩教會遊戲的跡象。事實上，我眼觀四面、耳聽八方，等著要看到虛假、投機主義或欺騙的表現，只要能找到虛偽的證據用以拒絕那個教會，我就能有充分理由把基督教一併排斥。」",
    result: "結果他的發現正好相反——他發現教會充滿許多真心想明白如何在生活中討人喜悅、跟隨基督的人。日積月累，這影響他到一個程度，他不但從無神論轉為接受神的赦免，甚至還委身全職事奉。如今他是柳溪教會的裝備牧師。",
    page: "P59-60"
  };

  const threeTraits = [
    {
      title: "真實", subtitle: "為求有效吸引朋友和所愛的人走向基督，你能做的最重要事情就是真實",
      icon: "🎭", color: "amber",
      sections: [
        { name: "最討厭的特質", detail: "作者演講時問大家：在別人身上最讓你感到困擾的特質是甚麼？永遠居榜首的是——不誠實或虛偽。「我最討厭人說一套做一套。」「我實在受不了一個人答應一件事，卻不真的去做，要不然就是在大家面前裝模作樣。」(P64)" },
        { name: "最吸引的特質", detail: "高居榜首的幾乎永遠都是誠實、真實和真誠。「你知道，我真的很喜歡言出必行的人。」「我很欣賞有勇氣真實表現自己的人，即使有時候這會讓他們不大得人緣。」「人願意坦白承認自己的過錯時，我真的很喜歡那樣。」(P64)" },
        { name: "承認自己的掙扎", detail: "真正的真實需要承認自己的缺點和掙扎。心理學家稱之為「自我揭露」——它釋放大量善意，且「幾乎總是會引發對方的自我揭露。」如果你能在慕道友面前坦承你的軟弱，而不是假裝完美，他們反而會更信任你。(P66-67)" },
        { name: "避免「情緒眩量」", detail: "許多基督徒不知道怎樣表達自己的感受。有些教導說敬虔的基督徒永遠不該生氣、悲哀、受傷或憂愁，力在任何環境都微笑著說「感謝主」。但長久限制某些情緒，最後會導致情緒全然混亂——完全失去經驗情緒的能力。慕道友需要看到你跟恐懼、悲傷、憤怒、嫉妒和失落奮力掙扎。(P68)" },
        { name: "耶穌的榜樣", detail: "耶穌在朋友拉撒路死的時候怎麼反應？祂哭了。（約十一35）不是「感謝主，拉撒路在天上安息了」，而是真實地流淚。慕道友需要看到的不是僵硬的笑容，而是一個真實的人——有喜有悲、有軟弱有掙扎——但仍然信靠神。(P68-69)" }
      ],
      page: "P64-69"
    },
    {
      title: "謙卑", subtitle: "承認自己的弱點和瑕疵——以及你對基督的需要",
      icon: "🙇", color: "blue",
      sections: [
        { name: "不要假裝完美", detail: "大多數人不會直接這樣說，但不要懷疑，他們真的是這樣想。他們對於將生命委付基督不感興趣，除非他們確實能從認識的基督徒身上看到吸引人、表裏如一的生命。「基督徒與人分享好消息之前，自己要先成為好消息。」——艾偉傳（Joe Aldrich）(P60)" },
        { name: "承認自己仍在施工中", detail: "用「施工中」的比喻向慕道友解釋：「我不是完美的成品，我只是一個在基督裡不斷被修建的工程。」這會讓他們鬆一口氣，因為他們也不必活在完美主義的暴政下。他們希望看到謙卑和悔改，甚至可能是賠償。等他們真看到了，就能肯定你對你的信仰確實認真。(P69-72)" },
        { name: "勇氣不等於完美", detail: "天安門廣場上挺立在坦克車前面的中國大學生、東德人在手持步槍士兵威嚇下仍用力把手上十字鎬揮向柏林圍牆——每次我看到有人為他們堅信之事甘冒風險或付出代價時，內心深處都不免激動。慕道友不會對軟腳蝦的人留下深刻印象。大多時候，未信者其實都尊敬、佩服堅守立場的基督徒。(P72)" }
      ],
      page: "P69-72"
    },
    {
      title: "言行一致", subtitle: "實踐你所相信的——讓行動和信念沒有落差",
      icon: "⚖️", color: "emerald",
      sections: [
        { name: "實踐信念", detail: "跟真實有關的另一個領域：實踐信念。天安門廣場前面的學生、柏林圍牆的十字鎬——每次看到有人為信念起而行、甘願下場一搏，內心都會被深深激動。即使我不同意他們所代表的主張，他們那種深刻的委身、起而行、甘願下場一搏的心志，仍會讓我深受感動、印象深刻。(P72)" },
        { name: "慕道友的尊敬", detail: "慕道友不會對軟腳蝦的人留下深刻印象。許多基督徒都怕一旦表明真實的信仰，走出自己的小房間或是真的去實踐聖經的價值觀，就會自動跟未信者疏遠了。但事情幾乎從來不是這樣。不管未信者是否公開承認，他們其實都尊敬、佩服堅守立場的基督徒。(P72)" },
        { name: "雅各之梯的警告", detail: "流行音樂榜上的歌〈雅各之梯〉（Jacob's Ladder）講的是自稱基督徒者的虛假有時會攔阻人接受基督。歌手修伊·路易斯唱道他被一名販賣救贖的胖子追著跑，他的回答：「我不急於考慮這件事。」然後又尖刻地補上一句：「而且我不想跟你一樣。」(P60)" }
      ],
      page: "P72-74"
    }
  ];

  const traitColorMap: Record<string, { bg: string; border: string; text: string; light: string }> = {
    amber: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-800", light: "bg-amber-100" },
    blue: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-800", light: "bg-blue-100" },
    emerald: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-800", light: "bg-emerald-100" }
  };

  const pitfalls = [
    { title: "把真實當藉口不成長", detail: "「我就是這樣的人」不等於真實——真實的人會承認自己需要改變。真實不是停在原地的藉口，而是一邊承認軟弱、一邊靠神向前走。", icon: "⚠️" },
    { title: "情緒眩量：長期壓抑感受", detail: "長久限制某些情緒，最後會完全失去經驗情緒的能力。面對小產後的失望卻一滴眼淚也沒流，只是不斷重複「無論如何總是感謝主」——這種陳腔濫調讓慕道友搖頭嘆息。", icon: "😶" },
    { title: "過度自我揭露", detail: "真實不等於把所有私事都攤出來。自我揭露需要智慧和分寸——目的是建立信任，不是情緒宣洩。在合適的人面前、合適的時機、分享合適的程度。", icon: "🚧" },
    { title: "言行不一致", detail: "嘴上說「我是基督徒」但生活方式和世人沒有兩樣——甚至更差。流行歌曲〈雅各之梯〉的警告：「而且我不想跟你一樣。」自稱基督徒者的虛假有時會攔阻人接受基督。", icon: "🎭" }
  ];

  const theologyTopics = [
    {
      title: "耶穌的真實：從拉撒路之死到客西馬尼園",
      content: "耶穌是「真實」最完美的榜樣。在朋友拉撒路死的時候，祂沒有說「感謝主」，祂哭了（約十一35）——這是聖經中最短的經文，卻是最有力量的。在客西馬尼園，祂對門徒說「我心裡甚是憂傷，幾乎要死」（太二十六38），然後汗珠如大血點滴在地上。祂沒有假裝堅強——祂讓門徒看見祂的恐懼和掙扎。但同時，祂說「不要照我的意思，只要照你的意思」。這就是真實的最高境界：承認軟弱，但仍然信靠和順服。(P68-69)",
      scriptures: ["約十一35 耶穌哭了。", "太二十六38-39 我心裡甚是憂傷，幾乎要死……然而，不要照我的意思，只要照你的意思。", "來四15 我們的大祭司並非不能體恤我們的軟弱。"],
      reflection: "你是否容許自己在別人面前「哭」？還是你覺得基督徒應該永遠微笑？耶穌的真實對你有什麼啟發？"
    },
    {
      title: "「虛偽天線」：現代人的屬靈偵測器",
      content: "李·史特博走進教會時帶著「虛偽天線」——掃瞄每一個基督徒是否真實。今天的慕道友同樣帶著這根天線。在社群媒體時代，人們更善於分辨什麼是「表演」什麼是「真實」。Instagram上的完美基督徒生活照片可能適得其反——因為沒有人的生活真的那麼完美。最吸引人的不是完美，而是真實：承認自己是施工中的作品，邀請人看見神正在做的工。(P59-60)",
      scriptures: ["林後四7 我們有這寶貝放在瓦器裡，要顯明這莫大的能力是出於神，不是出於我們。", "林後十二9 我的能力是在人的軟弱上顯得完全。"],
      reflection: "如果一個帶著「虛偽天線」的慕道友花一週時間觀察你的生活，他會看到什麼？你的公開形象和私下行為之間有多大的落差？"
    },
    {
      title: "自我揭露的神學：脆弱中的力量",
      content: "心理學家發現「自我揭露幾乎總是會引發對方的自我揭露」——當你坦誠分享自己的掙扎，對方也會卸下防備。這和保羅的神學完全一致：「我們有這寶貝放在瓦器裡」（林後四7）——神刻意選擇不完美的器皿來彰顯祂的能力。瓦器的裂縫不是缺陷，而是讓光透出來的地方。當我們承認自己的裂縫，別人反而能透過我們看見神的光。(P66-67)",
      scriptures: ["林後十二9-10 我什麼時候軟弱，什麼時候就剛強了。", "雅五16 你們要彼此認罪，互相代求，使你們可以得醫治。"],
      reflection: "你願意讓別人看見你的「裂縫」嗎？你是否相信你的軟弱反而能成為神的見證？"
    }
  ];

  const taiwanExamples = [
    {
      title: "🎭 華人文化中的「面子」vs 真實",
      scenario: "華人文化極度重視「面子」——在人前要表現得體、成功、沒有問題。在教會中更是如此：「要作好見證」常常被理解為「不要讓人看到你的軟弱」。結果教會裡充滿了「完美的假面」：禱告永遠感恩、分享永遠得勝、生活永遠蒙福。但慕道友的「虛偽天線」會偵測到這一切。",
      challenge: "下次小組分享時，嘗試分享一個你目前真正在掙扎的事（不是已經得勝的見證，而是正在進行中的掙扎）。觀察小組的反應——通常會有人鬆一口氣說「原來不只是我這樣」。",
      insight: "心理學家說「自我揭露幾乎總是會引發對方的自我揭露」。(P66) 當你先卸下面具，別人也會願意敞開。這才是真正有感染力的見證。"
    },
    {
      title: "😶 台灣教會中的「感謝主」綜合症",
      scenario: "在台灣教會中，「無論如何總是感謝主」幾乎成了一種自動反應。失業了——「感謝主，祂有美意」。生病了——「感謝主，靠主剛強」。婚姻出問題——「感謝主，我們在成長」。這些話本身不一定錯，但如果用來壓抑真實的情緒，就變成了本章所說的「情緒眩量」。",
      challenge: "這週如果遇到困難，在和神禱告時先誠實說出你的感受：「主啊，我很生氣/很害怕/很失望。」然後才說「但我選擇信靠你。」讓情緒先被承認，然後才被交託。",
      insight: "耶穌在拉撒路死的時候「哭了」，不是「感謝主」。(P68) 真實的信仰不是否認痛苦，而是在痛苦中仍然信靠。"
    },
    {
      title: "⚖️ 職場中的言行一致挑戰",
      scenario: "在台灣的職場中，基督徒最大的見證不是傳教，而是品格。你是否在沒人看到的時候仍然誠實？你是否在壓力下仍然保持正直？你是否願意為了信念付出代價——即使這意味著放棄升遷或得罪上司？",
      challenge: "列出三個你在職場中最容易「言行不一致」的場景（例如：應酬時說謊、報帳時灌水、背後議論同事）。選擇一個，這週刻意改變。不需要宣告「因為我是基督徒所以……」——只需要默默地做對的事。你的同事會注意到的。",
      insight: "未信者其實都尊敬、佩服堅守立場的基督徒。(P72) 你的行動比你的話語更有感染力。"
    },
    {
      title: "📱 社群媒體上的「真實」vs「表演」",
      scenario: "台灣人愛用社群媒體——IG限動、臉書打卡、LINE貼文。基督徒的社群媒體常常充斥「完美生活」和「屬靈語錄」。但這些精心策劃的形象是否反而讓慕道友覺得「基督徒都在裝」？真正有感染力的不是完美的照片，而是真實的生命——包括掙扎、失敗、和在軟弱中經歷神。",
      challenge: "下次想在社群媒體分享「信仰內容」時，問自己：這是「表演」還是「真實」？嘗試分享一個你真實的掙扎和神如何在其中工作（而不是只有「得勝」的結論）。",
      insight: "「基督徒與人分享好消息之前，自己要先成為好消息。」——艾偉傳 (P60) 在社群媒體上也是如此：先成為真實的人，然後才分享信仰。"
    }
  ];

  const weeklyChallenge = [
    {
      week: "第一週", title: "檢測你的「真實指數」",
      mission: "用一週時間做「真實度自我檢查」：(1)我在教會和在家裡是同一個人嗎？(2)我是否常說「感謝主」來掩蓋真實的感受？(3)我的社群媒體形象和真實生活差距有多大？(4)上一次我在別人面前承認軟弱是什麼時候？每天寫下一個你「不夠真實」的時刻和一個你「很真實」的時刻。",
      scripture: "約四24「神是靈，所以拜祂的必須用心靈和誠實拜祂。」",
      journalPrompt: "一週後回顧：你在什麼人面前最容易「戴面具」？什麼環境讓你最能做真實的自己？兩者之間有什麼差異？"
    },
    {
      week: "第二週", title: "練習「自我揭露」",
      mission: "選擇一個你信任的人（配偶、好友或小組員），分享一件你目前正在掙扎的事。不是已經得勝的見證，而是「施工中」的掙扎。注意對方的反應——心理學家說自我揭露會引發對方的自我揭露。同時，和一個非基督徒朋友的對話中，適當分享一個你作為基督徒的真實掙扎（不是完美見證）。",
      scripture: "雅五16「你們要彼此認罪，互相代求，使你們可以得醫治。」",
      journalPrompt: "分享軟弱後，你的感受是什麼——釋放？還是後悔？對方的反應是什麼？這個經歷如何改變你對「真實」的理解？"
    },
    {
      week: "第三週", title: "做一次「言行一致」大掃除",
      mission: "列出你目前生活中「言行不一致」的地方——可能是職場上的小謊言、對家人的承諾沒有兌現、或者是你教導別人但自己做不到的事。選擇其中一項，這週刻意改變。同時注意：你的非基督徒朋友或同事是否因為你的「言行一致」而對你多了一分尊重。",
      scripture: "太五37「你們的話，是就說是，不是就說不是；若再多說，就是出於那惡者。」",
      journalPrompt: "改變一個「言行不一致」的習慣後，你的感受是什麼？有沒有人注意到這個改變？"
    },
    {
      week: "第四週", title: "成為「好消息」本身",
      mission: "回顧這三週的操練。問自己：我離「自己先成為好消息」還有多遠？列出三個你希望繼續改進的方面。然後做一件具體的事：找一個你一直想影響的慕道友，不是去「傳教」，而是去做一個真實、謙卑、言行一致的朋友。讓你的生命成為「好消息」的示範。",
      scripture: "約十五5「常在我裏面的，我也常在他裏面，這人就多結果子。」",
      journalPrompt: "經過一個月的操練，你覺得自己的「真實」「謙卑」「言行一致」各進步了多少？你的人際關係有什麼改變？"
    }
  ];

  const groupDiscussion = [
    {
      category: "🎭 真實與虛偽",
      questions: [
        "李·史特博帶著「虛偽天線」走進教會——如果一個慕道友帶著同樣的天線來觀察你的小組，他會看到什麼？",
        "〈雅各之梯〉的歌詞說「而且我不想跟你一樣」——有沒有慕道友可能因為看到你而不想信主？這個想法讓你感覺如何？",
        "「情緒眩量」——你是否曾經長期壓抑某些情緒來「表現屬靈」？結果是什麼？",
        "你覺得在小組中分享「施工中的掙扎」有多安全？我們可以做什麼來創造更安全的環境？"
      ]
    },
    {
      category: "🙇 謙卑與勇氣",
      questions: [
        "「基督徒與人分享好消息之前，自己要先成為好消息」——你同意嗎？你覺得自己目前是「好消息」嗎？",
        "在你的生活中，最難做到「言行一致」的是哪個方面？為什麼？",
        "天安門學生和柏林圍牆的例子——你有沒有為信仰「堅守立場」的經歷？那是什麼感覺？",
        "耶穌為拉撒路哭泣——你上一次允許自己在別人面前表達脆弱是什麼時候？"
      ]
    },
    {
      category: "🌏 在華人處境中",
      questions: [
        "華人文化的「面子」觀念如何影響你在教會中的真實度？",
        "你的社群媒體形象和真實生活之間有多大的落差？這對你的見證有什麼影響？",
        "在台灣的職場中，你覺得「言行一致」最大的挑戰是什麼？",
        "作為小組，我們可以做什麼來幫助彼此更真實、更謙卑、更言行一致？"
      ]
    }
  ];

  const reflections = [
    "如果一個帶著「虛偽天線」的慕道友花一週時間觀察我的生活，他會看到什麼？",
    "我是否在用「感謝主」來壓抑真實的情緒？我上一次在神面前真正哭泣是什麼時候？",
    "我的「面具」是什麼？我在什麼人面前最容易戴上它？為什麼？",
    "我的言行一致嗎？如果把我嘴上說的和實際做的列出來比對，會有多少落差？",
    "「基督徒與人分享好消息之前，自己要先成為好消息」——我目前是「好消息」嗎？",
    "耶穌為拉撒路哭了——祂用真實打動人心。我願意效法祂的真實嗎？即使這意味著讓別人看見我的軟弱？"
  ];

  const actions = [
    "虛偽天線檢查：請一位信任的人誠實告訴你，你的公開形象和他認識的你之間有多大的落差。",
    "情緒解凍：這週每天花三分鐘在神面前誠實說出你的感受——不加修飾、不用屬靈語言。允許自己真實。",
    "自我揭露練習：在小組中分享一個你正在掙扎的事（不是得勝見證），觀察這如何改變小組的氛圍。",
    "言行一致掃除：列出一個你「說得到做不到」的地方，這週集中力量改變它。",
    "社群媒體真實化：把你下一篇社群媒體貼文從「完美呈現」改為「真實分享」——包括掙扎和成長。",
    "成為好消息：這週用一個具體的行動向一位非基督徒朋友展示真實的你——不傳教，只做一個真實、溫暖的人。"
  ];

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="space-y-8">

      {/* ========== 章節標題 ========== */}
      <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl p-8 md:p-10 relative overflow-hidden border border-amber-100 shadow-sm">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="relative">
          <div className="flex items-center gap-2 text-amber-600 font-medium mb-2" style={{fontSize:"15px"}}><BookOpen className="w-5 h-5" />PART 2：活出基督徒特質</div>
          <h2 className="font-extrabold text-amber-900 mb-4" style={{fontSize:"30px"}}>第四章：真實的吸引力</h2>
          <p className="text-amber-800 leading-relaxed mb-3" style={{fontSize:"18px"}}>「形像就是一切」——很多人相信。但許多真誠尋道者的座右銘卻是「<strong>實質代表一切</strong>」。他們有一種不可思議的能力，可以嗅出甚麼是真的、甚麼是假的。</p>
          <div className="bg-white/60 rounded-xl p-4 border border-amber-200">
            <p className="text-amber-800 italic leading-relaxed" style={{fontSize:"17px"}}>「基督徒與人分享好消息之前，自己要先成為好消息。」——艾偉傳 (P60)</p>
          </div>
        </div>
      </div>

      {/* ========== 史特博的故事 ========== */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><Eye className="w-6 h-6 text-slate-600" />虛偽天線：李·史特博的故事<span className="ml-2 text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded-full border border-slate-200">P59-60</span></h3>
        <div className="space-y-3">
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200"><p className="text-slate-600" style={{fontSize:"16px"}}>📰 <strong>{strobel.name}：</strong>{strobel.background}</p></div>
          <div className="bg-amber-50 rounded-xl p-5 border border-amber-200"><p className="text-amber-800 italic leading-relaxed" style={{fontSize:"16px"}}>{strobel.quote}</p></div>
          <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200"><p className="text-emerald-800 font-bold" style={{fontSize:"16px"}}>✨ {strobel.result}</p></div>
        </div>
      </div>

      {/* ========== 三種特質 ========== */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}><Heart className="w-6 h-6 text-amber-600" />三種真實的特質<span className="ml-2 text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded-full border border-slate-200">P61-74</span></h3>
        <p className="text-slate-500 mb-4" style={{fontSize:"16px"}}>好好活出這三種特質，你就能在影響人這件事上有高度感染力：</p>
        <div className="space-y-4">
          {threeTraits.map((trait, i) => {
            const c = traitColorMap[trait.color];
            return (
            <div key={i} className={`${c.bg} border ${c.border} rounded-2xl overflow-hidden`}>
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setOpenTrait(openTrait === i ? null : i)}>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{trait.icon}</span>
                  <div><h4 className={`font-bold ${c.text}`} style={{fontSize:"20px"}}>{trait.title}</h4><p className="text-slate-500 text-sm">{trait.subtitle}</p></div>
                </div>
                {openTrait === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>{(openTrait === i) && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <div className="px-5 pb-5 space-y-3">
                    {trait.sections.map((s, j) => (
                      <div key={j} className="bg-white rounded-xl p-4 border border-slate-100">
                        <span className={`font-bold ${c.text}`} style={{fontSize:"15px"}}>{s.name}：</span>
                        <p className="text-slate-600 mt-1 leading-relaxed" style={{fontSize:"15px"}}>{s.detail}</p>
                      </div>
                    ))}
                    <p className="text-xs text-slate-400">{trait.page}</p>
                  </div>
                </motion.div>
              )}</AnimatePresence>
            </div>
          );})}
        </div>
      </div>

      {/* ========== 四個陷阱 ========== */}
      <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-6 md:p-8 border border-rose-100 shadow-sm">
        <h3 className="font-bold text-rose-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><ArrowDown className="w-6 h-6 text-rose-600" />要注意的陷阱<span className="ml-2 text-xs bg-rose-100 text-rose-600 px-2 py-1 rounded-full border border-rose-200">P65-72</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {pitfalls.map((p, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-rose-100 cursor-pointer hover:border-rose-300 transition-colors" onClick={() => setOpenPitfall(openPitfall === i ? null : i)}>
              <div className="flex items-center gap-2 mb-1"><span className="text-xl">{p.icon}</span><span className="font-bold text-rose-800" style={{fontSize:"15px"}}>{p.title}</span></div>
              <AnimatePresence>{(openPitfall === i) && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">{p.detail}</p>
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
        <h3 className="font-bold text-teal-700 mb-4" style={{fontSize:"22px"}}>📝 第四章總結：自己先成為好消息</h3>
        <div className="space-y-3">
          <div className="bg-amber-50 border-amber-200 border rounded-xl p-4"><div className="font-bold text-amber-700 mb-1.5" style={{fontSize:"17px"}}>🎭 真實 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>P64-69</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>人們最討厭虛偽、最欣賞真誠。為求有效吸引人走向基督，你能做的最重要事情就是真實——不是表現得超出或不及真正的你。</p></div>
          <div className="bg-blue-50 border-blue-200 border rounded-xl p-4"><div className="font-bold text-blue-700 mb-1.5" style={{fontSize:"17px"}}>🙇 謙卑 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>P69-72</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>承認自己是「施工中」的作品。慕道友希望看到謙卑和悔改，不是完美主義。</p></div>
          <div className="bg-emerald-50 border-emerald-200 border rounded-xl p-4"><div className="font-bold text-emerald-700 mb-1.5" style={{fontSize:"17px"}}>⚖️ 言行一致 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>P72-74</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>實踐你所相信的。慕道友不會對軟腳蝦的人留下深刻印象——他們尊敬堅守立場的人。</p></div>
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
