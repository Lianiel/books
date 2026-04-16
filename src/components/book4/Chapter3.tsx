import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, BookOpen, ChevronDown, ChevronUp, Target, Brain, MessageCircle, AlertTriangle, Sparkles, CheckCircle2, Users, Heart, Search, Globe, Shield, Zap } from 'lucide-react';

export default function Chapter3() {
  const [openFormula, setOpenFormula] = useState<number | null>(null);
  const [openSalt, setOpenSalt] = useState<number | null>(null);
  const [openMath, setOpenMath] = useState<number | null>(null);
  const [openTheology, setOpenTheology] = useState<number | null>(null);
  const [openChallenge, setOpenChallenge] = useState<number | null>(null);

  const formulaParts = [
    {
      title: "活出基督徒特質（HP = High Potency）",
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-amber-50 to-yellow-50 border-amber-200",
      titleColor: "text-amber-800",
      summary: "鹽若失了味，就毫無用處——基督徒必須有「鹹味」。",
      details: "基督對我們的生命要有夠強烈的影響，以致無人可以否認祂的權能和同在。我們的鹹度大致跟我們作屬靈操練的程度相當——閱讀聖經、跪下禱告、在小組團契中脫下面具真實相交、在教會服事、積極跟別人分享信仰。沒有魔法可用，也沒有捷徑可循。",
      bookRef: "PART 2「活出基督徒特質」（第4-6章）將探討真誠、憐憫和犧牲三大特質。",
      page: "P47-50"
    },
    {
      title: "靠近人（CP = Close Proximity）",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-50 to-cyan-50 border-blue-200",
      titleColor: "text-blue-800",
      summary: "鹽若不從鹽罐子倒出來，只是餐桌上的裝飾品。",
      details: "我們必須與我們想接觸的人夠靠近，好使神的權能發揮應有的影響。很多自稱基督徒的人在跟基督的關係上很有能力、生活上走尊崇神的道路，但從來沒去接觸身邊需要自己影響的人。他們是很漂亮的餐桌擺設，但影響力很小。貝祺‧派伯（Becky Pippert）說得好：「除非鹽從鹽罐子倒出來，否則只是餐桌上的裝飾品。」",
      bookRef: "PART 3「靠近人」（第7-9章）將探討人際關係中的機會、跟未信者交往、找到合適自己的方法。",
      page: "P47-48"
    },
    {
      title: "清楚傳達（CC = Clear Communication）",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-violet-50 to-purple-50 border-violet-200",
      titleColor: "text-violet-800",
      summary: "光的功能是讓人看見——福音信息必須被清楚講述出來。",
      details: "很多基督徒被洗腦到認為，只要能活出信仰，周圍人就會看到、想要，然後自己想出得到這種生命的方法。但我們要面對現實：這種事幾乎從來不會發生。活出有滋味的基督徒生活是領人信主的必要條件，但並不是充分條件。神不准我們停在那裏，否則人們的結局就是地獄。我們一定得把這信息化為朋友聽得懂、能帶出行動的清楚語言。保羅在羅馬書十章14節問道：「未曾聽見祂，怎能信祂呢？沒有傳道的，怎能聽見呢？」",
      bookRef: "PART 4「清楚傳達」（第10-12章）將探討開啟屬靈談話、講清楚福音信息、拆毀阻斷信仰的障礙。",
      page: "P50-52"
    }
  ];

  const saltFunctions = [
    { func: "使人口渴", detail: "基督徒順從聖靈，活出有目標、平安喜樂的生活時，常常會令周遭人感到靈裏餓渴。柳溪教會常聽到這樣的見證：「我發現我部門裏有個人的生命和別人不大一樣，講話的方式和別人不大一樣，看重的東西也和別人不大一樣。這引起我的注意，我感到自己裏面有一種愈來愈強的屬靈饑渴，是我不曾有過的。」", icon: "💧" },
    { func: "為食物加味", detail: "沒有抹鹽，誰還想啃玉米？每當我們吃到沒味道的東西就自然會伸手取鹽，增添味道。當基督徒真實、勇敢地活出自己的信仰，就是在白湯裏加了引人興味的東西。他們出奇不意地引起人的注意，令人感到驚奇。他們以各種有挑戰性和看似激進的觀點將人喚醒，然後在這裏或那裏造成騷動。", icon: "🧂" },
    { func: "防止腐敗", detail: "在冰箱發明以前，人們廣泛使用鹽來防止食物腐敗。信徒活出榮耀基督的生命可以阻擋社會的道德敗壞。在墮胎、環保、種族主義和破碎家庭的議題上，基督徒尊崇神時，祂就使用他們阻擋那威脅要橫掃全地的罪惡洪濤。", icon: "🛡️" },
    { func: "鹽的兩個前提", detail: "鹽若要發揮最大影響，第一，必須有造成影響的能力（有鹹味）；第二，必須靠近它有意影響的東西。失了味的鹽沒有用處——它可以靠近很多東西，但若失去應有的能力，就沒有用，只好遭人踐踏。", icon: "⚡" }
  ];

  const wrongMath = [
    { formula: "活出基督徒特質 + 不靠近人 = 最大影響？", problem: "他們一直與需要接近的人隔絕。在跟基督的關係上很有能力，但從來沒去接觸身邊的人——「很漂亮的餐桌擺設，但影響力很小。」", emoji: "❌" },
    { formula: "靠近人 + 沒有基督徒特質 = 最大影響？", problem: "「我要跟這些人打成一片，甚至讓人分不出我在哪裏！」——你不會對他們有影響的，除非你擁有自己的特色和滋味。", emoji: "❌" },
    { formula: "基督徒特質 + 靠近人 + 不開口 = 最大影響？", problem: "「拜託不要叫我真的開口！只要在他們面前活出我的信仰或許就能影響他們了。」——時間會證明這只是幻想。就如沒有行動的話語無益，沒有話語的行動不具意義。", emoji: "❌" },
    { formula: "活出基督徒特質 + 靠近人 + 清楚傳達 = 最大影響", problem: "只要是滋味高、互動親密、真理清楚講明、聖靈活躍運行的地方，就會有具感染力之基督徒散發出的影響，至終使世上多一個人得救。", emoji: "✅" }
  ];

  const theologyTopics = [
    {
      title: "鹽與光的神學：雙重身分，缺一不可",
      content: "耶穌在登山寶訓中同時用了「鹽」和「光」兩個比喻，不是隨意的選擇。鹽代表的是「存在性影響」——你不需要說什麼，你的生命本身就在發揮作用（使人口渴、增添味道、防止腐敗）。光代表的是「宣告性影響」——你必須主動照亮、說明、傳達真理。基督徒不能只選一個：只作鹽不作光，人們不知道你為什麼不一樣；只作光不作鹽，你的話語沒有生命的支撐。耶穌要我們兩者兼具。",
      scriptures: ["馬太福音5:13「你們是世上的鹽。鹽若失了味，怎能叫它再鹹呢？」", "馬太福音5:14-16「你們是世上的光……人點燈，不放在斗底下，是放在燈臺上，就照亮一家的人。你們的光也當這樣照在人前，叫他們看見你們的好行為，便將榮耀歸給你們在天上的父。」", "腓立比書2:15-16「你們顯在這世代中，好像明光照耀，將生命的道表明出來。」"],
      reflection: "在你的生活中，你覺得自己比較偏向「鹽」（默默活出信仰）還是「光」（主動傳達福音）？你需要在哪方面加強？"
    },
    {
      title: "必要條件 vs. 充分條件：為什麼好行為不夠？",
      content: "作者指出一個關鍵的邏輯：活出基督徒特質是「必要條件」（necessary condition），但不是「充分條件」（sufficient condition）。就像水是生命的必要條件，但只有水不足以維持生命——你還需要食物、空氣等。同樣地，好行為可以吸引人注意，但如果沒有人把福音信息講清楚，人們只會說「那個人人真好」，卻不知道如何得到同樣的生命。羅馬書十章14-17節說得很清楚：信道是從聽道來的。",
      scriptures: ["羅馬書10:14-17「未曾聽見祂，怎能信祂呢？沒有傳道的，怎能聽見呢？……可見信道是從聽道來的，聽道是從基督的話來的。」", "使徒行傳8:30-31「腓利就跑到太監那裏……太監說：沒有人指教我，怎能明白呢？」", "何西阿書4:6「我的民因無知識而滅亡。」"],
      reflection: "你是否曾經以「我用行為見證就好」為藉口，迴避用言語傳達福音？如果你的未信朋友今天突然問你「你為什麼信耶穌」，你能用三分鐘講清楚嗎？"
    },
    {
      title: "屬靈操練與「鹹度」：沒有捷徑的成長之路",
      content: "作者在拜訪葛理翰時深受觸動：這位七十三歲、向全世界數億人傳過福音的人，還是說「我還是需要神話語的餵養」。這揭示了一個重要的屬靈原則：鹹度不是一次性的成就，而是需要持續維持的狀態。就像運動員不能靠一次訓練保持體能，基督徒也不能靠一次靈修保持屬靈活力。達拉斯‧乌拉德（Dallas Willard）說：「恩典不反對努力，恩典反對的是靠功勞賺取。」屬靈操練不是為了賺取神的愛，而是為了讓自己處在能被神使用的狀態。",
      scriptures: ["提摩太後書2:15「你當竭力在神面前得蒙喜悅，作無愧的工人，按著正意分解真理的道。」", "希伯來書5:14「惟獨長大成人的才能吃乾糧，他們的心竅習練得通達，就能分辨好歹了。」", "哥林多前書9:27「我是攻克己身，叫身服我，恐怕我傳福音給別人，自己反被棄絕了。」"],
      reflection: "你目前的「鹹度」如何？你每天花多少時間在讀經、禱告、與神獨處上？如果葛理翰七十三歲還需要被神的話餵養，你呢？"
    }
  ];

  const taiwanExamples = [
    {
      title: "🏢 辦公室裡的「鹽」",
      scenario: "在台灣的職場中，基督徒常面臨一個困境：太「鹹」怕被同事覺得怪，太「淡」又跟一般人沒兩樣。有些人選擇完全隱藏信仰身分，有些人則過度熱情地「傳教」讓人反感。",
      challenge: "這週在辦公室中，不刻意「傳教」，但也不隱藏你的信仰。例如：同事問你週末做了什麼，誠實地說「去教會」；午餐時安靜地謝飯禱告；面對辦公室八卦時選擇不參與。觀察同事的反應。",
      insight: "書中的公式告訴我們：鹽不需要大聲宣告「我是鹽！」——它只需要靠近食物，自然就會發揮作用。你的生命本身就是最有力的見證。"
    },
    {
      title: "💇 理髮店裡的屬靈對話",
      scenario: "作者在理髮時，用肯尼吉的音樂打開話題，最後談到了理髮師的家庭困境和教會經歷。在台灣，我們也有很多這樣的「日常接觸點」：理髮、看醫生、搭計程車、早餐店……但我們通常選擇沉默或只談天氣。",
      challenge: "下次去理髮、看醫生或搭計程車時，試著多問一句：「最近還好嗎？」如果對方分享了困難，不急著「傳福音」，先真心傾聽，最後可以說：「我會為你禱告。」",
      insight: "作者不是一開始就跟理髮師傳福音——他先用肯尼吉的話題建立連結，然後自然地轉到更深入的話題。關係永遠走在信息前面。"
    },
    {
      title: "📱 小組中的「錯誤數學」",
      scenario: "華人教會小組常見三種「錯誤數學」：①「靈修型」小組——每週查經禱告很深入，但從來不邀請新朋友（有鹹味但不靠近人）；②「社交型」小組——跟非基督徒打成一片，但從不談信仰（靠近人但沒有鹹味）；③「活動型」小組——辦了很多活動吸引人來，但從不把福音講清楚（有鹹味也靠近人，但不作光）。",
      challenge: "跟小組長討論：我們小組目前比較偏向哪一種「錯誤數學」？我們可以怎樣調整，讓三個成分更平衡？",
      insight: "書中說：「有許多基督徒在玩弄可笑的算術。」這三個成分缺一不可——活出基督徒特質 + 靠近人 + 清楚傳達 = 最大影響。"
    },
    {
      title: "🧓 葛理翰的「鹹度維持」vs. 我們的屬靈健檢",
      scenario: "葛理翰七十三歲還說「我還是需要神話語的餵養」。反觀我們自己——信主多少年了？我們的屬靈操練是在成長還是在退步？很多華人基督徒信主後，讀經禱告的習慣反而隨著時間遞減，因為「太忙了」「聽過了」「沒新鮮感了」。",
      challenge: "做一次「屬靈健檢」：你每天花多少時間讀經？多少時間禱告？上次背一節新的經文是什麼時候？上次因為讀經而感動流淚是什麼時候？誠實面對你目前的「鹹度」。",
      insight: "作者說：「我希望自己七十三歲時，可以鹹到危險的程度——你不希望這樣嗎？」鹹度需要每天維持，沒有捷徑。"
    }
  ];

  const weeklyChallenge = [
    {
      week: "第一週",
      title: "「鹹度」自我評估",
      mission: "用1-10分評估你目前在以下五個領域的「鹹度」：①讀經 ②禱告 ③小組團契 ④教會服事 ⑤分享信仰。找出最低分的那一項，這週刻意在那個領域多花10分鐘。",
      scripture: "馬太福音5:13「你們是世上的鹽。鹽若失了味，怎能叫它再鹹呢？」",
      journalPrompt: "你五個領域的分數各是多少？最低分的是哪一項？這週你打算怎樣提升它？"
    },
    {
      week: "第二週",
      title: "從鹽罐子倒出來",
      mission: "這一週，刻意在一個你平常只跟基督徒在一起的場合，帶一位非基督徒朋友加入（例如：一起午餐、運動、看電影）。不需要傳福音，只需要讓他自然地接觸到你和你的基督徒朋友。",
      scripture: "馬太福音5:15「人點燈，不放在斗底下，是放在燈臺上，就照亮一家的人。」",
      journalPrompt: "你邀請了誰？他的反應如何？你在這個過程中有什麼觀察或學習？"
    },
    {
      week: "第三週",
      title: "練習「開口」",
      mission: "準備一個90秒的「信仰簡介」：如果有人問你「你為什麼信耶穌？」或「基督教跟其他宗教有什麼不同？」，你能清楚、簡短、自然地回答嗎？寫下來，練習幾次，然後跟一位基督徒朋友演練。",
      scripture: "彼得前書3:15「有人問你們心中盼望的緣由，就要常作準備，以溫柔、敬畏的心回答各人。」",
      journalPrompt: "你的90秒信仰簡介是什麼？練習後你覺得自己的信心有提升嗎？哪些部分還需要改進？"
    },
    {
      week: "第四週",
      title: "完整公式實踐",
      mission: "選一位你認識的未信者朋友，這週同時實踐公式的三個成分：①活出基督徒特質（為他禱告、在他面前活出真實的信仰）②靠近他（主動約他見面或聊天）③清楚傳達（在自然的對話中，至少提一次你的信仰或教會經歷）。",
      scripture: "歌羅西書4:5-6「你們要愛惜光陰，用智慧與外人交往。你們的言語要常常帶著和氣，好像用鹽調和。」",
      journalPrompt: "你選了誰？三個成分你分別怎樣實踐？結果如何？哪個成分你覺得最自然？哪個最困難？"
    }
  ];

  const groupDiscussion = [
    {
      category: "破冰問題",
      questions: [
        "你覺得自己比較像「鹽」還是「光」？你的朋友會怎樣形容你的信仰表現？",
        "分享一次你在日常生活中（職場、學校、社區）因為信仰而「不一樣」的經歷。"
      ]
    },
    {
      category: "書中探討",
      questions: [
        "作者提到鹽的三種功能（使人口渴、增味、防腐），你覺得你的生命目前比較在發揮哪一種功能？",
        "葛理翰七十三歲還說「我還是需要神話語的餵養」——這句話對你有什麼震撼？",
        "作者在理髮店用肯尼吉的音樂打開話題，最後談到了信仰。你有沒有類似的經歷，從一個世俗話題自然地轉到屬靈話題？",
        "書中提到三種「錯誤數學」——你覺得我們小組比較偏向哪一種？",
        "「很多基督徒被洗腦到認為，只要能活出信仰，周圍人就會看到、想要，然後自己想出得到這種生命的方法。但我們要面對現實：這種事幾乎從來不會發生。」你同意這句話嗎？"
      ]
    },
    {
      category: "生活反思",
      questions: [
        "你的「鹹度」目前是在上升、持平還是下降？什麼因素影響最大？",
        "你目前跟非基督徒朋友的互動頻率如何？你有沒有「從鹽罐子倒出來」？",
        "如果有人今天問你「你為什麼信耶穌」，你能用90秒講清楚嗎？",
        "在你的日常生活中，有哪些場合其實是「屬靈對話」的好機會，但你一直錯過？"
      ]
    },
    {
      category: "實踐計畫",
      questions: [
        "這週你打算在公式的哪一個成分上加強？具體怎麼做？",
        "我們小組可以怎樣一起實踐這個公式？有沒有可以一起做的外展活動？",
        "你願意準備一個90秒的「信仰簡介」，下次小組聚會時分享嗎？"
      ]
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-8 md:p-10 border border-indigo-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="relative">
          <div className="flex items-center gap-2 text-indigo-600 font-medium mb-2" style={{fontSize:"15px"}}>
            <BookOpen className="w-5 h-5" />
            PART 1：為何要成為有感染力的基督徒？
          </div>
          <h2 className="font-extrabold text-indigo-900 mb-4" style={{fontSize:"30px"}}>第三章：影響世界的公式</h2>
          <p className="text-indigo-800 leading-relaxed mb-3" style={{fontSize:"18px"}}>
            神不是給了作業就要我們自己想辦法完成的那種老闆。祂給了我們一套<strong>改變世界的公式</strong>——源自耶穌在登山寶訓中「鹽」和「光」的比喻：
          </p>
          <div className="bg-white/70 rounded-2xl p-5 border border-indigo-200 text-center">
            <p className="font-extrabold text-indigo-900" style={{fontSize:"22px"}}>
              活出基督徒特質 + 靠近人 + 清楚傳達 = 最大影響
            </p>
            <p className="text-indigo-600 mt-2" style={{fontSize:"16px"}}>
              High Potency + Close Proximity + Clear Communication = Maximum Impact
            </p>
          </div>
        </div>
      </div>

      {/* 開場：挫折感 */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}>
          <AlertTriangle className="w-6 h-6 text-orange-500" />
          開場：得了指示卻不知道怎麼做
          <span className="text-slate-400 bg-slate-100 px-2 py-1 rounded-md font-normal" style={{fontSize:"13px"}}>P43-44</span>
        </h3>
        <div className="space-y-4" style={{fontSize:"17px"}}>
          <div className="bg-orange-50 rounded-xl p-5 border border-orange-100">
            <p className="text-slate-700 leading-relaxed mb-3">
              人生中最挫折的經驗之一就是，得了指示去做某事卻沒人告訴你該怎麼做——老闆訂下高銷售配額但不教你方法、
              老師交代排山倒海的作業但不管你其他四門課的壓力。
            </p>
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>在教會也是如此</strong>：「人們都迷失了！他們正走向地獄，神要接觸他們，而你是祂選中的使者——所以你要出去！把他們領向基督！」
            </p>
            <p className="text-orange-700 font-bold">
              怎麼跟這種事爭呢？這是聖經說的，合乎真理。所以我要採取行動——但是在哪裏呢？我該怎麼開始？過程該是甚麼樣子？誰來幫我邁出第一步？
            </p>
          </div>
          <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-200">
            <p className="text-emerald-800 font-bold" style={{fontSize:"18px"}}>
              ✨ 好消息：「神所期待的，祂就促成。」祂不但告訴我們祂非常看重悖逆的人，也給了我們一套完整的方法。
            </p>
          </div>
        </div>
      </div>

      {/* 鹽的比喻 */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-amber-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}>
          🧂 鹽的新觀點：「你們是世上的鹽」
          <span className="text-slate-400 bg-slate-100 px-2 py-1 rounded-md font-normal" style={{fontSize:"13px"}}>P45-50</span>
        </h3>
        <p className="text-slate-600 mb-4" style={{fontSize:"17px"}}>
          耶穌在登山寶訓中說：「你們是世上的鹽。」鹽在聖經時代有多種用途。學者們對耶穌指的是哪一種說法不一——
          「自己挑一張，哪一張都可以。喜歡的話，統統拿去也無妨。」
        </p>
        <div className="space-y-3 mb-4">
          {saltFunctions.map((item, i) => (
            <div key={i} className="bg-amber-50 rounded-xl border border-amber-200 overflow-hidden cursor-pointer hover:bg-amber-100 transition-colors" onClick={() => setOpenSalt(openSalt === i ? null : i)}>
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span style={{fontSize:"24px"}}>{item.icon}</span>
                  <span className="font-bold text-amber-800" style={{fontSize:"18px"}}>{item.func}</span>
                </div>
                {openSalt === i ? <ChevronUp className="w-5 h-5 text-amber-400" /> : <ChevronDown className="w-5 h-5 text-amber-400" />}
              </div>
              <AnimatePresence>
                {openSalt === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <div className="px-4 pb-4">
                      <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>{item.detail}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* 葛理翰的故事 */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}>
          <Heart className="w-6 h-6 text-blue-600" />
          真實見證：葛理翰——七十三歲的「鹹味」
          <span className="text-slate-400 bg-slate-100 px-2 py-1 rounded-md font-normal" style={{fontSize:"13px"}}>P48-49</span>
        </h3>
        <div className="space-y-4" style={{fontSize:"17px"}}>
          <p className="text-slate-700 leading-relaxed">
            幾年前，作者和妻子在葛理翰夫婦北卡羅萊納州山頂上的家裏度過一天。到了晚上，葛理翰累了，作者跟他說要回旅館。
          </p>
          <div className="bg-white rounded-xl p-5 border border-blue-200 space-y-3">
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <p className="text-slate-600"><span className="font-bold text-blue-700">葛理翰（遞過一本聖經）：</span>「比爾，在你走以前，餵養我一些神的話吧！」</p>
            </div>
            <p className="text-slate-700 leading-relaxed">
              作者心想：這名七十三歲的老人顯然不是基督徒中的「嬰孩」，他也不像是在開玩笑的樣子。
              而且，他向人傳講福音信息的人數遠超過歷史上任何人。
            </p>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <p className="text-slate-600"><span className="font-bold text-blue-700">葛理翰：</span>「我還是需要神話語的餵養，我喜歡神話語的餵養。」</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl p-5 border border-blue-200">
            <p className="text-blue-900 font-bold leading-relaxed" style={{fontSize:"18px"}}>
              💡 「那次的經驗幫助我明白何以葛理翰可以長期活出基督徒特質。他持續不斷地提升自己的『鹹味』。
              我離去時不禁滿心盼望，等我到他那般年紀時，我的鹹味也能那樣高。
              我希望自己七十三歲時，可以鹹到危險的程度——你不希望這樣嗎？」
            </p>
          </div>
        </div>
      </div>

      {/* 光的教訓 + 清楚傳達 */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-violet-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}>
          💡 光的教訓：「你們是世上的光」
          <span className="text-slate-400 bg-slate-100 px-2 py-1 rounded-md font-normal" style={{fontSize:"13px"}}>P50-52</span>
        </h3>
        <div className="space-y-4" style={{fontSize:"17px"}}>
          <p className="text-slate-700 leading-relaxed">
            光最基本的作用是讓人看得見東西，幫助我們看見事物真正的樣子。光的比喻代表的是<strong>清楚又吸引人地向人展現神的真理</strong>。
            哥林多後書四章6節：「那吩咐光從黑暗裏照出來的神，已經照在我們心裏，叫我們得知神榮耀的光顯在耶穌基督的面上。」
          </p>
          <div className="bg-red-50 rounded-xl p-5 border border-red-200">
            <p className="text-red-800 font-bold mb-2" style={{fontSize:"18px"}}>⚠️ 一個危險的迷思：</p>
            <p className="text-slate-700 leading-relaxed">
              「很多基督徒被洗腦到認為，只要能活出信仰，周圍人就會看到、想要，然後自己想出得到這種生命的方法。
              但我們要面對現實：<strong>這種事幾乎從來不會發生</strong>。」
            </p>
            <p className="text-slate-700 leading-relaxed mt-2">
              活出有滋味的基督徒生活是領人信主的<strong>必要條件</strong>，但並不是<strong>充分條件</strong>。
              神不准我們停在那裏。我們一定得把這信息化為朋友聽得懂、能帶出行動的清楚語言。
            </p>
          </div>
          <div className="bg-violet-50 rounded-xl p-5 border border-violet-200">
            <p className="text-violet-800 font-bold" style={{fontSize:"17px"}}>
              📖 保羅在羅馬書十章14節問道：「未曾聽見祂，怎能信祂呢？沒有傳道的，怎能聽見呢？」
              ——就如沒有行動的話語無益，沒有話語的行動不具意義。耶穌說我們不但要是鹽，還要是光。
            </p>
          </div>
        </div>
      </div>

      {/* 理髮師的故事 */}
      <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl p-6 md:p-8 border border-teal-100 shadow-sm">
        <h3 className="font-bold text-teal-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}>
          <MessageCircle className="w-6 h-6 text-teal-600" />
          真實見證：理髮店裡的屬靈對話
          <span className="text-slate-400 bg-slate-100 px-2 py-1 rounded-md font-normal" style={{fontSize:"13px"}}>P54-55</span>
        </h3>
        <div className="space-y-4" style={{fontSize:"17px"}}>
          <p className="text-slate-700 leading-relaxed">
            作者去理髮，理髮師心情很不好。他想逗她開心一點，卻想不出打開話題的方法。
            後來他留意到店內播放的似乎是薩克斯風音樂——
          </p>
          <div className="bg-white rounded-xl p-5 border border-teal-200 space-y-3">
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <p className="text-slate-600"><span className="font-bold text-teal-700">作者（瞎掰）：</span>「那是肯尼吉（Kenny G.）演奏的吧？」</p>
              <p className="text-slate-600"><span className="font-bold text-slate-500">理髮師（立刻興奮）：</span>「我最喜歡肯尼吉了！你也知道肯尼吉啊？」</p>
              <p className="text-slate-500 italic">（作者內心：其實我大概只在脫口秀節目見過大約十五秒的肯尼吉。我真高興她沒問我他名字裏的"G"是哪個字的縮寫，因為我真的一點概念也沒有！）</p>
            </div>
            <p className="text-slate-700 leading-relaxed">
              談了一會兒肯尼吉的音樂以後，談話就逐漸轉到更重要的事上。她說她是單親媽媽，於是他們講到她的婚姻以及孩子適應改變的情形。
            </p>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <p className="text-slate-600"><span className="font-bold text-slate-500">理髮師：</span>「孩子們適應得相當好，因為他們從附近一個叫柳溪的教會那邊得到很多幫助。」</p>
              <p className="text-slate-600"><span className="font-bold text-teal-700">作者（努力克制熱情）：</span>「這樣喔。」</p>
            </div>
            <p className="text-slate-700 leading-relaxed">
              他問她自己有沒有去過，她說很久以前去過。他問她為甚麼後來不去了，她說她也不知道。
            </p>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <p className="text-slate-600"><span className="font-bold text-teal-700">作者：</span>「我聽說那個教會最近有個特赦週——不管你做過甚麼或是為甚麼離開，都可以回去，沒有人會問你任何問題！」</p>
              <p className="text-slate-600"><span className="font-bold text-slate-500">理髮師（一臉疑惑）：</span>「真的？」</p>
              <p className="text-slate-600"><span className="font-bold text-teal-700">作者：</span>「嗯，可以這麼說。」</p>
              <p className="text-slate-500 italic">（其實在柳溪教會每週都是特赦週！）</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-teal-100 to-emerald-100 rounded-xl p-5 border border-teal-200">
            <p className="text-teal-900 font-bold leading-relaxed" style={{fontSize:"18px"}}>
              💡 「神喜歡我們靠近需要祂的人。當我們在談話中冒一點險把話題由世俗轉入真正重要的主題，祂很高興。
              祂很開心能夠使用你我這樣平凡的基督徒近距離地對人們展開屬靈影響。」
            </p>
          </div>
        </div>
      </div>

      {/* 公式三大成分 */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-indigo-800 mb-6 flex items-center gap-2" style={{fontSize:"24px"}}>
          <Target className="w-6 h-6 text-indigo-600" />
          公式的三大成分
        </h3>
        <div className="space-y-4">
          {formulaParts.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className={`bg-gradient-to-r ${item.color} rounded-2xl border overflow-hidden cursor-pointer hover:shadow-md transition-all`} onClick={() => setOpenFormula(openFormula === i ? null : i)}>
                <div className="p-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/60 rounded-full flex items-center justify-center">{item.icon}</div>
                    <div>
                      <h4 className={`font-bold ${item.titleColor}`} style={{fontSize:"19px"}}>{item.title}</h4>
                      <p className="text-slate-600 mt-1" style={{fontSize:"16px"}}>{item.summary}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 bg-white/50 px-2 py-1 rounded-md" style={{fontSize:"13px"}}>{item.page}</span>
                    {openFormula === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                  </div>
                </div>
                <AnimatePresence>
                  {openFormula === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="px-5 pb-5 space-y-3">
                        <div className="bg-white/80 rounded-xl p-4 border border-white/50">
                          <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>{item.details}</p>
                        </div>
                        <div className="bg-white/60 rounded-xl p-4 border border-white/50">
                          <p className="text-slate-500 italic" style={{fontSize:"16px"}}>📚 {item.bookRef}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 錯誤數學 */}
      <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-6 md:p-8 border border-red-100 shadow-sm">
        <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}>
          <AlertTriangle className="w-6 h-6 text-red-600" />
          誠實的評估：你在玩「可笑的算術」嗎？
          <span className="text-slate-400 bg-slate-100 px-2 py-1 rounded-md font-normal" style={{fontSize:"13px"}}>P52-53</span>
        </h3>
        <p className="text-slate-600 mb-4" style={{fontSize:"17px"}}>
          作者指出，有許多基督徒在玩弄可笑的「新數學」——試圖用不完整的公式產生最大影響：
        </p>
        <div className="space-y-3">
          {wrongMath.map((item, i) => (
            <div key={i} className={`rounded-2xl border overflow-hidden cursor-pointer hover:shadow-md transition-all ${i === 3 ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-red-200'}`} onClick={() => setOpenMath(openMath === i ? null : i)}>
              <div className="p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span style={{fontSize:"24px"}}>{item.emoji}</span>
                  <span className={`font-bold ${i === 3 ? 'text-emerald-800' : 'text-red-800'}`} style={{fontSize:"17px"}}>{item.formula}</span>
                </div>
                {openMath === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>
                {openMath === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <div className="px-5 pb-5">
                      <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>{item.problem}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
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

      {/* 華人教會實例 */}
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
          📝 第三章總結：影響世界的公式
        </h3>
        <div className="space-y-3">
          <div className="bg-indigo-50 border-indigo-200 border rounded-xl p-4">
            <div className="font-bold text-indigo-700 mb-1.5" style={{fontSize:"18px"}}>📐 核心公式 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>P44</span></div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>活出基督徒特質 + 靠近人 + 清楚傳達 = 最大影響。源自耶穌「你們是世上的鹽……你們是世上的光」（太五13-14）。三個成分缺一不可。</p>
          </div>
          <div className="bg-amber-50 border-amber-200 border rounded-xl p-4">
            <div className="font-bold text-amber-700 mb-1.5" style={{fontSize:"18px"}}>🧂 鹽的功能 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>P45-50</span></div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>使人口渴、為食物加味、防止腐敗。鹽的兩個前提：必須有鹹味（活出基督徒特質）、必須靠近食物（靠近人）。失了味的鹽毫無用處。葛理翰七十三歲還在維持「鹹度」——沒有捷徑。</p>
          </div>
          <div className="bg-violet-50 border-violet-200 border rounded-xl p-4">
            <div className="font-bold text-violet-700 mb-1.5" style={{fontSize:"18px"}}>💡 光的功能 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>P50-52</span></div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>讓人看見事物真正的樣子——清楚傳達福音信息。好行為是必要條件但不是充分條件。「很多基督徒被洗腦到認為只要活出信仰就夠了，但這種事幾乎從來不會發生。」</p>
          </div>
          <div className="bg-red-50 border-red-200 border rounded-xl p-4">
            <div className="font-bold text-red-700 mb-1.5" style={{fontSize:"18px"}}>⚠️ 三種錯誤數學 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>P52-53</span></div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>只有特質不靠近人=漂亮的餐桌擺設；只靠近人沒特質=失去影響力；有特質靠近人但不開口=沒有話語的行動不具意義。</p>
          </div>
          <div className="bg-emerald-50 border-emerald-200 border rounded-xl p-4">
            <div className="font-bold text-emerald-700 mb-1.5" style={{fontSize:"18px"}}>🎯 結論 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>P56</span></div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>「只要是滋味高、互動親密、真理清楚講明、聖靈活躍運行的地方，就會有具感染力之基督徒散發出的影響。」耶穌說：「你們是世上的鹽，你們是世上的光。」祂說的是你。</p>
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
              {["你目前的「鹹度」是在上升、持平還是下降？什麼因素影響最大？","你比較偏向「鹽」（默默活出信仰）還是「光」（主動傳達福音）？你需要在哪方面加強？","你的生活中有沒有「錯誤數學」的問題？你屬於哪一種？","如果有人問你「你為什麼信耶穌」，你能用90秒講清楚嗎？","你目前跟非基督徒朋友的互動頻率如何？你有沒有「從鹽罐子倒出來」？","葛理翰七十三歲還在被神的話餵養——你的屬靈操練目前是什麼狀態？","在你的日常生活中，有哪些場合是「屬靈對話」的好機會，但你一直錯過？"].map((r, i) => (
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
              {["用1-10分評估你在讀經、禱告、團契、服事、分享信仰五個領域的「鹹度」，找出最弱的一項加強。","準備一個90秒的「信仰簡介」，練習到能自然地說出來。","這週找一個日常場合（理髮、搭車、排隊），試著跟陌生人多聊兩句，練習「靠近人」。","跟小組討論：我們小組屬於哪種「錯誤數學」？一起制定改善計畫。","每天花5分鐘讀一段經文並禱告，持續21天建立習慣——像葛理翰一樣維持你的鹹度。","背誦馬太福音5:13-16，每天提醒自己既要是鹽也要是光。"].map((a, i) => (
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
