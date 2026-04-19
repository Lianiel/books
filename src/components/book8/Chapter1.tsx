import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, BookOpen, ChevronDown, ChevronUp, Target, Brain, MessageSquareQuote, BookMarked, ArrowDown, Cross } from 'lucide-react';

export default function Chapter1() {
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [openTheology, setOpenTheology] = useState<number | null>(null);
  const [openTaiwan, setOpenTaiwan] = useState<number | null>(null);
  const [openChallenge, setOpenChallenge] = useState<number | null>(null);
  const [showPdf, setShowPdf] = useState(false);

  const sections = [
    {
      title: "何謂靈性 (Spirituality)", icon: "🌿",
      content: "靈性是「個人對生命最終價值所堅持的信念或信仰」，是一種人生哲學觀與價值觀，影響個人處事的態度及行為表現。神學家保羅·田立克 (Paul Tillich) 稱之為「終極關懷」(Ultimate Concern)——使人付上一生去尋求的價值觀，並且在尋求的過程中，身心靈朝向完滿與平安。對於基督徒來說，信仰就是我們的終極關懷。"
    },
    {
      title: "靈性的學術定義", icon: "📚",
      content: "Hiatt (1986)：對人生意義的關注，包含「內在自我」（自我價值認同）、「人際連結」（情感交流與愛）與「超然存在」（與大自然或更高力量的連結）。\n\nReed (1991)：靈性是經由「自我超越」（向外、向上或向內延伸）以發現生命意義的人類習性，在年長或接近死亡時會變得更為顯著。\n\nWoods (1994)：包含意義感、神聖性、超越性與連結性四個要素。\n\nSulmasy (2002)：個體或團體與宇宙至高者之間的關係；尋找超越肉身以外的意義。"
    },
    {
      title: "靈性困擾與馬斯洛需求", icon: "⚠️",
      content: "從基本的生理需求到頂端的自我實現，任一層面產生缺乏或不滿足時，便是靈性困擾產生的可能因素。例如先知以利亞在逃亡時，經歷了生理的匱乏、安全的威脅，以及情感歸屬上的孤立。\n\n「靈性困擾」(spiritual distress) 定義為：滲透入個人整體、統整及超越個人生物、心理社會本質，使得個人生命原則受到干擾。當個體面臨疾病威脅、喪失身體功能或瀕死時，會體認自己的脆弱及生命的無能為力，開始尋找生命的意義。"
    },
    {
      title: "靈性平安的五個面向", icon: "☮️",
      content: "決定一個人活在世上是否靈性平安，包含五個面向：\n\n1️⃣ 生命的意義和價值\n2️⃣ 愛與被愛\n3️⃣ 寬恕與被寬恕\n4️⃣ 希望與失望\n5️⃣ 與至高者建立關係\n\n這五個面向將分別在第二至第六單元中深入探討。"
    }
  ];

  const theologyTopics = [
    {
      title: "聖經中的「靈」：不只是心理狀態",
      content: "聖經中「靈」的希伯來文是 ruach，希臘文是 pneuma，都有「氣息」「風」的意思。創世記二章7節說：「耶和華神用地上的塵土造人，將生氣吹在他鼻孔裡，他就成了有靈的活人。」這告訴我們：靈性不是人類自己發展出來的「哲學觀」，而是神的氣息、神的臨在進入人裡面的結果。\n\n這和心理學對「靈性」的定義有本質上的不同——心理學把靈性定義為「對生命意義的追尋」，是以人為中心的；聖經把靈性定義為「神的氣息進入人」，是以神為中心的。",
      scriptures: [
        "創二7 耶和華神用地上的塵土造人，將生氣吹在他鼻孔裡，他就成了有靈的活人。",
        "約四24 神是個靈（或無個字），所以拜他的，必須用心靈和誠實拜他。",
        "羅八16 聖靈與我們的心同證我們是神的兒女。"
      ],
      reflection: "你對「靈性」的認識，是比較接近心理學的「意義追尋」，還是聖經的「神的氣息」？這兩種理解會帶出什麼不同的屬靈生活？"
    },
    {
      title: "終極關懷：信仰作為生命的中心",
      content: "田立克提出「終極關懷」(Ultimate Concern) 這個概念——每個人都有一個使他付上一生去尋求的核心價值。對有些人來說是金錢、成功、家庭；對基督徒來說，則應該是神自己。\n\n耶穌在馬太福音六章33節說：「你們要先求他的國和他的義，這些東西都要加給你們了。」這就是基督徒的「終極關懷」——把神國放在首位。當我們的終極關懷正確了（以神為中心），其他一切就會找到它們的位置。反過來，如果我們的終極關懷錯了（以自己或其他事物為中心），我們會發現即使「成功」了，內心仍然有無法填滿的空洞。",
      scriptures: [
        "太六33 你們要先求他的國和他的義，這些東西都要加給你們了。",
        "申六5 你要盡心、盡性、盡力愛耶和華你的神。",
        "腓三8 我也將萬事當作有損的，因我以認識我主基督耶穌為至寶。"
      ],
      reflection: "誠實地問自己：我目前的「終極關懷」是什麼？是神，還是工作、家庭、健康、或某個夢想？如果是後者，我的靈性是否已經出現「困擾」而不自知？"
    },
    {
      title: "以利亞的靈性困擾：信心偉人的低谷",
      content: "本章提到以利亞的逃亡——這是聖經中最生動的「靈性困擾」案例。列王紀上十九章記載：剛剛在迦密山上大勝巴力先知的以利亞，因為耶洗別的威脅，竟然逃到曠野，求神取他的性命（王上十九4）。\n\n神的回應非常有智慧——祂沒有責備以利亞「信心軟弱」，而是先滿足他的生理需求（天使送餅和水）、讓他睡覺休息、再用微小的聲音對他說話（王上十九11-13）。這完全符合馬斯洛需求理論！神知道人是身心靈合一的整體，靈性平安需要從身體、情感、心理層面一起照顧。\n\n這也提醒我們：屬靈偉人也會有靈性困擾，重要的不是避免困擾，而是知道如何在困擾中讓神來醫治。",
      scriptures: [
        "王上十九4 自己在曠野走了一日的路程，來到一棵羅騰樹下，就坐在那裡求死。",
        "王上十九5-7 天使拍他，說：起來吃吧……你當前面的路甚遠。",
        "王上十九12 火後有微小的聲音。"
      ],
      reflection: "你是否也有過類似以利亞的「靈性困擾」時刻——在屬靈高峰後突然跌入谷底？當時你如何走出來？是靠意志力硬撐，還是讓神用祂的方式醫治你（包括身體、情感的照顧）？"
    },
    {
      title: "五個面向的聖經基礎",
      content: "本書提出「靈性平安的五個面向」，其實每一個都有深厚的聖經基礎：\n\n1. 生命的意義和價值 → 詩一三九「我所行的一切，你都熟悉」、耶二十九11「我知道我向你們所懷的意念」\n\n2. 愛與被愛 → 約壹四19「我們愛，因為神先愛我們」、林前十三（愛的篇章）\n\n3. 寬恕與被寬恕 → 主禱文「赦免我們的罪，如同我們饒恕得罪我們的人」、太十八21-35（七十個七次）\n\n4. 希望與失望 → 羅五3-5「患難生忍耐，忍耐生老練，老練生盼望」、耶二十九11「給你們指望」\n\n5. 與至高者建立關係 → 約十七3「認識你——獨一的真神，並且認識你所差來的耶穌基督，這就是永生」\n\n換言之，當代醫學和心理學慢慢發現的「靈性健康五面向」，聖經早在幾千年前就已經完整教導了。",
      scriptures: [
        "約十七3 認識你——獨一的真神，並且認識你所差來的耶穌基督，這就是永生。",
        "耶二十九11 我知道我向你們所懷的意念是賜平安的意念。",
        "羅五3-5 患難生忍耐，忍耐生老練，老練生盼望；盼望不至於羞恥。"
      ],
      reflection: "這五個面向中，哪一個是你目前最需要被神觸摸的？你願意在接下來的五個單元中，讓神在這方面做醫治和更新的工作嗎？"
    }
  ];

  const taiwanExamples = [
    {
      title: "🏥 台灣醫院的靈性關懷現況",
      scenario: "台灣自 2000 年通過《安寧緩和醫療條例》後，靈性關懷逐漸進入醫療體系。多數醫學中心都設有宗教關懷人員或牧關師，但人力嚴重不足——一位牧關師要服務整家醫院。教會若能裝備弟兄姊妹進入醫院關懷，可以填補這個缺口。",
      challenge: "了解你所在地區有哪些醫院提供志工機會。可以從「探訪自己教會的住院肢體」開始——這是最自然的靈性關懷實習。",
      insight: "本章說「靈性困擾者會尋找生命的意義」——病床上的人比平常人更開放去討論生命、死亡、信仰。這是福音的黃金時刻，而不只是「醫院探病」的例行公事。"
    },
    {
      title: "👴 高齡社會中的教會角色",
      scenario: "台灣已進入高齡社會，65歲以上人口佔 18%，2025 年將進入超高齡社會（20% 以上）。長輩面臨失能、喪偶、孤獨、對死亡的恐懼——這些都是深刻的靈性困擾。教會長輩事工如果只停留在「唱詩歌、吃愛筵」，就沒抓到核心。真正的靈性關懷要深入談生命的意義、愛與被愛、寬恕、希望、與神的關係。",
      challenge: "在你的小組或教會，長輩們最常談論的話題是什麼？如果大多是「健康」「子女」「財務」，那靈性關懷的深度還不夠。試著在下次聚會中引導一個靈性面向的話題（例如：「你覺得你這一生最有意義的事是什麼？」）。",
      insight: "本章引用趙可式博士：「臨終期是靈性煉淨雜質的最佳機會。」但為什麼要等到臨終？健康時就可以開始做生命的整合與意義的探索。"
    },
    {
      title: "💼 職場中的「隱形靈性困擾」",
      scenario: "在台灣高壓的職場文化中，很多基督徒表面上信仰正常，但內心其實處於「靈性困擾」狀態：工作過勞失去意義感、人際關係疏離缺少被愛的經歷、被主管不公平對待卻無法寬恕、對未來感到絕望失去盼望、忙碌到忘了神。這些都是靈性平安五個面向的嚴重缺損。",
      challenge: "用靈性平安的五個面向做一次自我檢查：(1) 我目前的工作讓我覺得有生命意義嗎？(2) 我在職場中感受到愛與被愛嗎？(3) 有沒有同事讓我難以寬恕？(4) 我對未來有盼望還是絕望？(5) 我和神的關係熱絡還是冷淡？哪一個面向紅燈最亮？",
      insight: "靈性困擾不是等到生病才發生——它可能已經在你的日常生活中運作很久了。本章的價值在於提供一個「健檢表」，讓你在還健康時就能自我診斷。"
    },
    {
      title: "⛪ 教會牧養與靈性關懷",
      scenario: "傳統的華人教會牧養模式偏重「宣講真理」和「聖經教導」，這當然重要。但本章提醒我們，一個完整的靈性關懷還需要心理、情感、社會層面的關注。很多弟兄姊妹在教會聽了很多道，但靈性困擾仍然沒有解決——因為道理進入頭腦但沒有進入生命。",
      challenge: "作為小組長或輔導者，你的關懷是否太「屬靈」了（只談聖經、只禱告），而忽略了對方的情感需求、人際關係、生活處境？嘗試下一次的關懷談話中，先問 30 分鐘的生活情況，再談信仰。",
      insight: "本書的「靈性平安五面向」其實是很好的「牧養清單」——每次關懷時可以問：對方在這五個面向哪個最需要被觸摸？"
    }
  ];

  const weeklyChallenge = [
    {
      week: "第一週", title: "做你的「靈性健檢」",
      mission: "用五個面向為自己打分數（1-10 分）：(1) 生命的意義和價值 (2) 愛與被愛 (3) 寬恕與被寬恕 (4) 希望與失望 (5) 與至高者的關係。寫下每個面向目前的狀況和你的感受。",
      scripture: "詩一三九23-24「神啊，求你鑒察我，知道我的心思……引導我走永生的道路。」",
      journalPrompt: "五個面向中分數最低的是哪一個？為什麼？這個「靈性困擾」從什麼時候開始的？"
    },
    {
      week: "第二週", title: "找出你的「終極關懷」",
      mission: "誠實記錄這一週你的時間、精力、金錢花在什麼地方最多。然後問自己：這些就是我真正的「終極關懷」嗎？和我口頭上說的「愛神愛人」一致嗎？",
      scripture: "太六21「你的財寶在哪裡，你的心也在那裡。」",
      journalPrompt: "你的行事曆和銀行帳戶揭露了你真正的「神」。你需要做什麼調整，讓你的終極關懷真的回到神身上？"
    },
    {
      week: "第三週", title: "像以利亞一樣讓神醫治",
      mission: "當你感到靈性困擾時（疲憊、絕望、想逃避），不要馬上去「屬靈衝刺」（讀更多經、禱告更多）。先照顧你的身體和情感：睡好、吃好、找人陪伴、走到大自然中。讓神用「餅和水」先餵養你。",
      scripture: "王上十九5-7「起來吃吧……你當前面的路甚遠。」",
      journalPrompt: "你上一次感到靈性困擾時，是怎麼回應的？是硬撐、是逃避、還是讓神用祂的方式醫治你？"
    },
    {
      week: "第四週", title: "學習看見別人的靈性困擾",
      mission: "這週刻意觀察你身邊的三個人（家人、同事、教會肢體）——他們的眼神、話語、狀態背後，可能有什麼「靈性困擾」？不要急著「給答案」，先學習「看見」。可以的話，約其中一個人深談一次。",
      scripture: "加六2「你們各人的重擔要互相擔當，如此就完全了基督的律法。」",
      journalPrompt: "你看見了什麼？你自己有沒有開始成為別人的「靈性關懷者」？這帶給你什麼感受？"
    }
  ];

  const groupDiscussion = [
    {
      category: "🌿 認識靈性",
      questions: [
        "在讀這章之前，你對「靈性」的認識是什麼？是心理狀態、宗教活動、還是和神的關係？",
        "田立克的「終極關懷」概念對你有什麼啟發？你目前真正的終極關懷是什麼？",
        "聖經創世記二章7節說人是神「將生氣吹在他鼻孔裡」——這個「靈性」的定義和心理學有什麼不同？",
        "如果我們的「靈性」是神的氣息，那麼「靈性健康」意味著什麼？"
      ]
    },
    {
      category: "⚠️ 靈性困擾",
      questions: [
        "你是否經歷過自己描述為「靈性困擾」的時刻？那是什麼樣的狀態？",
        "以利亞的故事中，神先滿足他的身體需求再跟他說話——這對我們處理自己的靈性困擾有什麼啟發？",
        "在現代社會，哪些文化壓力最容易造成基督徒的靈性困擾（職場、家庭、社群媒體……）？",
        "作為一個基督徒群體，我們如何成為彼此「靈性困擾」的支持系統？"
      ]
    },
    {
      category: "☮️ 五個面向的實踐",
      questions: [
        "五個面向（意義、愛、寬恕、希望、與神的關係）中，你目前最平安的是哪個？最困擾的是哪個？",
        "教會可以如何幫助成員在這五個面向得到照顧？目前我們的教會做得好的是什麼？需要加強的是什麼？",
        "如果一個初信者或未信者在五個面向中有困擾，你會如何陪伴他？",
        "作為小組，我們如何一起用這五個面向做「小組的靈性健檢」？"
      ]
    }
  ];

  const reflections = [
    "我目前的「終極關懷」真的是神嗎？還是其他東西已經悄悄取代了神的位置？",
    "如果靈性是「神的氣息」，那我的靈性是飽滿還是乾涸？上一次感受到神氣息充滿我是什麼時候？",
    "我有沒有正在經歷的「靈性困擾」而不自知？五個面向中哪個最紅燈？",
    "面對靈性困擾，我是像以利亞一樣逃避求死，還是像大衛一樣向神哀求？",
    "我是否太常用「屬靈語言」掩蓋真實的靈性狀態？我敢不敢在小組中承認自己的靈性困擾？",
    "作為基督徒，我的「靈性關懷」只停留在自己身上，還是願意學習關懷別人的靈性？"
  ];

  const actions = [
    "做一次五面向靈性健檢：為每個面向打分數，找出你的紅燈區域。",
    "記錄你的「終極關懷」：用一週看看時間、精力、金錢流向哪裡，誠實面對。",
    "建立日常屬靈節奏：每天至少花 15 分鐘專心在神面前（不只讀經，也包括默想、靜默）。",
    "學習自我照顧：當感到靈性困擾時，先照顧身體和情感再談屬靈——像神對待以利亞一樣。",
    "找一位靈性夥伴：可以彼此問責、互相關懷、一起成長的基督徒。",
    "開始學習關懷別人：觀察身邊三個可能有靈性困擾的人，為他們禱告並主動關心。"
  ];

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="space-y-8">

      {/* 標題 */}
      <div className="bg-gradient-to-br from-slate-700 via-indigo-800 to-purple-900 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="relative">
          <div className="flex items-center gap-2 mb-2"><Heart className="w-5 h-5 text-indigo-300" /><span className="text-indigo-300 text-sm tracking-widest">靈性關懷與身心健康</span></div>
          <h1 className="font-extrabold mb-3" style={{fontSize:"32px"}}>第一單元：靈性平安與靈性困擾</h1>
          <p className="text-indigo-200 text-lg">認識靈性的本質，理解靈性困擾如何影響全人健康</p>
        </div>
      </div>

      {/* 原書重點 */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><BookOpen className="w-6 h-6 text-slate-600" />原書重點</h3>
        <div className="space-y-3">
          {sections.map((sec, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-slate-50 transition-colors" onClick={() => setOpenSection(openSection === i ? null : i)}>
                <h4 className="font-bold text-slate-800 flex items-center gap-2" style={{fontSize:"19px"}}><span className="text-2xl">{sec.icon}</span>{sec.title}</h4>
                {openSection === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>{(openSection === i) && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <div className="px-5 pb-5 bg-slate-50">
                    {sec.content.split('\n\n').map((para, j) => (
                      <p key={j} className="text-slate-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>{para}</p>
                    ))}
                  </div>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* 神學深度探討 */}
      <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-6 md:p-8 border border-violet-100 shadow-sm">
        <h3 className="font-bold text-violet-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}><Cross className="w-6 h-6 text-violet-600" />神學深度探討<span className="ml-2 text-xs bg-violet-100 text-violet-500 px-2 py-1 rounded-full border border-violet-200">基督徒觀點</span></h3>
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
                    {topic.content.split('\n\n').map((para: string, j: number) => (
                      <p key={j} className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>{para}</p>
                    ))}
                    <div className="bg-violet-50 rounded-xl p-4 border border-violet-100"><div className="font-bold text-violet-700 mb-2" style={{fontSize:"15px"}}>📖 相關經文：</div>{topic.scriptures.map((s: string, j: number) => (<p key={j} className="text-slate-600 text-sm mb-1.5">{s}</p>))}</div>
                    <div className="bg-amber-50 rounded-xl p-4 border border-amber-200"><div className="font-bold text-amber-700 mb-1" style={{fontSize:"15px"}}>💬 反思：</div><p className="text-slate-600" style={{fontSize:"17px"}}>{topic.reflection}</p></div>
                  </div>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* 在我們的處境中 */}
      <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-6 md:p-8 border border-orange-100 shadow-sm">
        <h3 className="font-bold text-orange-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}><Heart className="w-6 h-6 text-orange-600" />在我們的處境中<span className="ml-2 text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full border border-orange-200">台灣教會應用</span></h3>
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
                    <div className="bg-orange-50 rounded-xl p-4 border border-orange-100"><div className="font-bold text-orange-700 mb-2" style={{fontSize:"15px"}}>📍 情境：</div><p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>{ex.scenario}</p></div>
                    <div className="bg-green-50 rounded-xl p-4 border border-green-200"><div className="font-bold text-green-700 mb-1" style={{fontSize:"15px"}}>🎯 挑戰：</div><p className="text-slate-600" style={{fontSize:"17px"}}>{ex.challenge}</p></div>
                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-200"><div className="font-bold text-blue-700 mb-1" style={{fontSize:"15px"}}>💡 回扣本書：</div><p className="text-slate-600" style={{fontSize:"17px"}}>{ex.insight}</p></div>
                  </div>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* 四週挑戰 */}
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
                    <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100"><div className="font-bold text-indigo-700 mb-2" style={{fontSize:"15px"}}>🎯 任務：</div><p className="text-slate-600" style={{fontSize:"17px"}}>{item.mission}</p></div>
                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-200"><div className="font-bold text-blue-700 mb-1" style={{fontSize:"15px"}}>📖 經文：</div><p className="text-slate-600" style={{fontSize:"17px"}}>{item.scripture}</p></div>
                    <div className="bg-amber-50 rounded-xl p-4 border border-amber-200"><div className="font-bold text-amber-700 mb-1" style={{fontSize:"15px"}}>📓 日記：</div><p className="text-slate-600" style={{fontSize:"17px"}}>{item.journalPrompt}</p></div>
                  </div>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* 小組討論 */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-sm">
        <h3 className="font-bold text-emerald-800 mb-6 flex items-center gap-2" style={{fontSize:"24px"}}><MessageSquareQuote className="w-6 h-6 text-emerald-600" />小組討論問題<span className="ml-3 bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full font-normal border border-emerald-200" style={{fontSize:"13px"}}>小組使用</span></h3>
        <div className="space-y-6">
          {groupDiscussion.map((section, i) => (
            <div key={i}><h4 className="font-bold text-emerald-700 mb-3 flex items-center gap-2" style={{fontSize:"20px"}}><span className="w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-800 font-bold" style={{fontSize:"14px"}}>{i+1}</span>{section.category}</h4>
              <div className="space-y-2 ml-10">{section.questions.map((q: string, j: number) => (<div key={j} className="bg-white rounded-xl p-4 border border-emerald-100"><p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>{q}</p></div>))}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 反思與行動 */}
      <div className="bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-800 shadow-lg text-white">
        <h3 className="font-bold text-orange-300 mb-6 flex items-center" style={{fontSize:"27px"}}><Brain className="w-7 h-7 mr-3" />深度反思與行動指南</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="font-bold text-orange-200 mb-4 flex items-center" style={{fontSize:"22px"}}><Brain className="w-5 h-5 mr-2 text-orange-400" /> 反思問題</h4>
            <ul className="space-y-4 text-slate-300">{reflections.map((r, i) => (<li key={i} className="flex items-start" style={{fontSize:"17px"}}><span className="text-orange-400 mr-2 font-bold">{i+1}.</span> {r}</li>))}</ul>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="font-bold text-emerald-300 mb-4 flex items-center" style={{fontSize:"22px"}}><Target className="w-5 h-5 mr-2 text-emerald-400" /> 具體行動方案</h4>
            <ul className="space-y-4 text-slate-300">{actions.map((a, i) => (<li key={i} className="flex items-start" style={{fontSize:"17px"}}><span className="text-emerald-400 mr-2 font-bold">{i+1}.</span> {a}</li>))}</ul>
          </div>
        </div>
      </div>

      {/* PDF */}
      <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-3xl p-6 md:p-8 border border-indigo-100 shadow-sm">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowPdf(!showPdf)}>
          <h3 className="font-bold text-indigo-800 flex items-center gap-2" style={{fontSize:"22px"}}><BookOpen className="w-6 h-6 text-indigo-600" />📄 閱讀原書 PDF（含圖片與完整排版）</h3>
          {showPdf ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
        </div>
        <AnimatePresence>{showPdf && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <div className="mt-4 rounded-xl overflow-hidden border border-indigo-200" style={{height:"80vh"}}>
              <iframe src="/spiritual-care.pdf#page=4" className="w-full h-full" title="原書 PDF" />
            </div>
          </motion.div>
        )}</AnimatePresence>
      </div>

      </div>
    </div>
  );
}
