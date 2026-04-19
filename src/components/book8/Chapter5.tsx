import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, BookOpen, ChevronDown, ChevronUp, Target, Brain, MessageSquareQuote, Cross, Sun } from 'lucide-react';

export default function Chapter5() {
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [openTheology, setOpenTheology] = useState<number | null>(null);
  const [openTaiwan, setOpenTaiwan] = useState<number | null>(null);
  const [openChallenge, setOpenChallenge] = useState<number | null>(null);
  const [showPdf, setShowPdf] = useState(false);

  const sections = [
    {
      title: "遇失望時的四類反應", icon: "🔄",
      content: "1. 挫折合理化：編歪理將責任推給別人或事物。這是最常見的防衛機制，但問題在於「把責任推給別人」並不能解決自己的痛苦。\n\n2. 轉為攻擊：不逃避，反而背水一戰給予還擊。有時候轉為攻擊是對的（捍衛公義），但如果純粹出於憤怒和報復，會帶來更多傷害。\n\n3. 退縮：消極防守避免再次受挫，容易發生在壓力大的環境中。退縮的人會變得封閉、冷漠、放棄嘗試，最終陷入憂鬱。\n\n4. 昇華：藉由其他事物分散注意力，將情緒轉為另一股動力激勵自己發展。這是最健康的反應——把痛苦轉化為前進的動力。"
    },
    {
      title: "和失望做朋友", icon: "🌈",
      content: "要接納「失望」，並將失望轉化為希望。歷史上許多偉人（如貝多芬、海倫凱勒）都是在遇到極大挫折後才成就非凡。\n\n貝多芬在失聰後仍創作出《第九號交響曲》；海倫凱勒在失明失聰失語的三重打擊下成為偉大的作家和社會運動者。他們不是因為沒有失望而偉大，而是因為在失望中重新找到了希望。\n\n只要重獲希望，靈性就能平安。"
    }
  ];

  const theologyTopics = [
    {
      title: "聖經中的「盼望」：比人類樂觀主義更深的根基",
      content: "聖經中的「盼望」（希臘文 elpis）和一般人理解的「希望」很不同。一般的希望是「我希望事情會變好」——這是基於環境或運氣的主觀願望。聖經的盼望是「有根據的確信」——根據神的性格、神的應許、神的能力。\n\n保羅在羅馬書五章3-5節說：「患難生忍耐，忍耐生老練，老練生盼望；盼望不至於羞恥，因為所賜給我們的聖靈將神的愛澆灌在我們心裡。」這個「盼望不至於羞恥」的根據是什麼？不是環境，不是運氣，而是聖靈將神的愛澆灌在我們心裡。\n\n這就是基督徒和世人面對失望時最大的差別——世人的希望可能破滅，因為它建立在環境上；基督徒的盼望永不破滅，因為它建立在神身上。",
      scriptures: [
        "羅五3-5 患難生忍耐，忍耐生老練，老練生盼望；盼望不至於羞恥。",
        "來六19 我們有這指望，如同靈魂的錨，又堅固又牢靠。",
        "羅十五13 但願使人有盼望的神，因信將諸般的喜樂、平安充滿你們的心。"
      ],
      reflection: "你目前的「希望」是建立在環境上（期待事情變好）還是建立在神身上（確信神必做成）？當環境崩潰時，你的希望會跟著崩潰嗎？"
    },
    {
      title: "約伯的失望與重建：聖經中最完整的案例研究",
      content: "約伯記是聖經中對「失望」最深刻的探討。一個敬虔人突然失去十個孩子、所有財產、健康——這是極限的失望。約伯走過了本章描述的幾個階段：\n\n1. 初期反應：他撕裂外袍，剃了頭，俯伏在地敬拜神——這不是昇華，而是深刻的信仰（伯一20-22）。\n\n2. 中期掙扎：他開始「合理化」（為什麼是我？）、甚至「攻擊」（他和神爭辯）——約伯記大半篇幅在這段。\n\n3. 最後轉化：神從旋風中顯現，約伯說：「我從前風聞有你，現在親眼看見你」（伯四十二5）。約伯沒有得到「為什麼」的答案，但他得到了「神自己」——這比答案更寶貴。\n\n這告訴我們：面對失望的終極答案不是「理解原因」，而是「遇見神」。",
      scriptures: [
        "伯一21 賞賜的是耶和華，收取的也是耶和華；耶和華的名是應當稱頌的。",
        "伯十三15 他必殺我；我雖無指望，然而我在他面前還要辯明我所行的。",
        "伯四十二5 我從前風聞有你，現在親眼看見你。"
      ],
      reflection: "你是否曾像約伯一樣，經歷極大失望時質問神「為什麼」？神給你的是「答案」還是「祂自己」？哪一個其實更寶貴？"
    },
    {
      title: "黑暗中的信心：從詩篇看「抱怨」的神學",
      content: "很多基督徒以為「抱怨神」是不屬靈的。但詩篇有超過三分之一是「哀歌」——詩人對神的抱怨、質問、甚至憤怒。詩篇十三篇：「耶和華啊，你忘記我要到幾時呢？要到永遠嗎？你掩面不顧我要到幾時呢？」\n\n這告訴我們：基督教不要求我們「偽裝喜樂」。面對失望，你可以向神傾訴、抱怨、甚至生氣——這些都是正常的屬靈反應。詩篇的作者們在抱怨後，通常會有一個「轉折」（but 或 yet），例如詩篇十三篇末了：「但我倚靠你的慈愛；我的心因你的救恩快樂。」\n\n重點不是「不抱怨」，而是「抱怨後仍然回到信靠」。這是健康的屬靈韌性。",
      scriptures: [
        "詩十三1-2 耶和華啊，你忘記我要到幾時呢？要到永遠嗎？",
        "詩二十二1 我的神，我的神！為甚麼離棄我？（這是耶穌在十字架上的呼喊）",
        "詩四十二5 我的心哪，你為何憂悶？為何在我裡面煩躁？應當仰望神。"
      ],
      reflection: "你在失望中敢不敢誠實向神抱怨？還是你覺得「應該表現得屬靈一點」？詩篇的榜樣告訴我們：誠實的抱怨比偽裝的讚美更屬靈。"
    },
    {
      title: "苦難中的「昇華」：與基督一同受苦",
      content: "本章提到「昇華」是最健康的反應——把痛苦轉化為前進的動力。聖經對此有更深刻的理解：保羅說他「要認識基督，曉得他復活的大能，並且曉得和他一同受苦，效法他的死。」（腓三10）\n\n這不是說基督徒應該「故意受苦」，而是說：當苦難來臨時，我們可以用一種非常獨特的方式「昇華」——與基督一同受苦。這個昇華的方式比世俗的「轉移注意力」更深刻：\n\n1. 苦難讓我們更認識基督（祂也受過同樣的苦）\n2. 苦難讓我們能安慰別人（林後一4「叫我們能用神所賜的安慰去安慰那遭各樣患難的人」）\n3. 苦難讓我們操練信心（雅一2-4「你們落在百般試煉中，都要以為大喜樂……因為知道你們的信心經過試驗，就生忍耐」）\n\n這就是基督徒獨有的「昇華」——苦難不是沒有意義的痛苦，而是成為與基督和好、成為祝福別人管道的契機。",
      scriptures: [
        "腓三10 使我認識基督，曉得他復活的大能，並且曉得和他一同受苦。",
        "林後一4 叫我們能用神所賜的安慰去安慰那遭各樣患難的人。",
        "羅八28 我們曉得萬事都互相效力，叫愛神的人得益處。"
      ],
      reflection: "你目前的失望、痛苦，有沒有可能成為神使用你祝福別人的材料？你願意讓神把這個痛苦「昇華」嗎？"
    }
  ];

  const taiwanExamples = [
    {
      title: "😔 台灣社會的「失望文化」：躺平與厭世",
      scenario: "近年台灣年輕世代流行「躺平」「厭世」文化——面對高房價、低薪、無望的前途，很多人乾脆放棄努力。這其實就是本章說的「退縮反應」。教會裡的年輕基督徒也不例外——表面上照常聚會，但內心其實已經對未來失去盼望，不敢做夢、不敢委身、不敢期待。",
      challenge: "誠實檢視你自己：你是真的「盼望」還是在「躺平」？你敢不敢對人生有熱情和夢想，即使可能失望？保羅說「盼望不至於羞恥」——因為基督徒的盼望有神的根基。這個世代最需要看見的，正是不躺平的基督徒。",
      insight: "本章說「只要重獲希望，靈性就能平安」。反過來說：當整個世代陷入絕望時，教會需要成為「盼望的銀行」——儲存真正的盼望，然後流出去給這個絕望的世代。"
    },
    {
      title: "💔 失落、喪親、離婚：基督徒也會經歷的深切失望",
      scenario: "很多基督徒在經歷失去（喪親、失業、離婚、孩子叛逆）時，會陷入一個陷阱：一方面要表現「屬靈」，另一方面內心其實充滿憤怒、質疑、絕望。結果他們不敢承認自己的失望，也不敢向神抱怨，只能在教會戴上「平安喜樂」的面具。",
      challenge: "如果你正在經歷深切的失望，給自己一個空間：像詩篇作者那樣誠實向神哀歌。不是抱怨別人，而是向神傾訴你的痛苦、質問、甚至憤怒。然後等候神的回應（可能是微小的聲音、可能是經文的提醒、可能是肢體的關心）。",
      insight: "本章提到貝多芬在失聰後寫出《第九號交響曲》——他不是沒有絕望，而是在絕望中找到了更深的創作泉源。你目前的失望，也許正是神要在你身上做「更偉大作品」的起點。"
    },
    {
      title: "🏢 職場挫敗：當努力得不到回報",
      scenario: "台灣的職場常有一種令人失望的處境：你盡力了，但升遷沒你的份；你提出了好建議，被主管搶功；你忠誠服務多年，卻遭到裁員。這些不是「靈性小事」——這些是深刻的生命意義議題。基督徒在這種處境下，如何避免陷入「合理化」（否認失望）、「攻擊」（報復同事）、「退縮」（放棄工作）的陷阱？",
      challenge: "當你在職場遇到不公義的失望時，進行一個簡單的「四反應檢測」：(1) 我是不是在假裝沒事？(2) 我是不是在計劃報復？(3) 我是不是想辭職逃避？(4) 我能不能讓神把這個痛苦昇華？然後把這個狀況帶到神面前禱告。",
      insight: "約瑟被兄弟賣到埃及、被誣告下監——他的失望比一般職場挫敗深得多。但他沒有退縮或攻擊，而是「昇華」——繼續認真做好眼前的工作，神就在他意想不到的時候高舉他。"
    },
    {
      title: "⛪ 教會失望：當屬靈群體讓你受傷",
      scenario: "很多基督徒最深的失望來自教會——被牧者誤解、被弟兄姊妹傷害、看到教會的黑暗面。這種失望特別難處理，因為連「避風港」都變成了傷害的來源。很多人選擇離開教會（退縮）、或到處抱怨批評（攻擊）、或否認痛苦假裝沒事（合理化）。",
      challenge: "如果你曾因教會受傷，誠實面對你的反應：是退縮、攻擊，還是合理化？聖經告訴我們，教會是罪人的醫院，不是完美聖徒的俱樂部。神允許教會傷害的存在，為了讓我們學習「昇華」——在軟弱中仍然愛神的家。但這不代表你要忍受虐待——健康的界線是必要的。",
      insight: "本章的四個反應中，「昇華」是唯一能帶來成長的。教會的傷害可以被神使用，成為你更深認識恩典、學習愛與寬恕的契機——但只有當你願意讓神來醫治，而不是一直停留在憤怒或逃避中。"
    }
  ];

  const weeklyChallenge = [
    {
      week: "第一週", title: "辨認你的失望反應模式",
      mission: "回想你過去一個月內最失望的三件事，分析自己的反應：(1) 合理化（把責任推給別人）？(2) 攻擊（反擊報復）？(3) 退縮（放棄逃避）？(4) 昇華（轉化成長）？把答案寫下來。",
      scripture: "詩一三九23-24「神啊，求你鑒察我，知道我的心思……」",
      journalPrompt: "你最常用的反應模式是哪一個？這個模式從什麼時候開始的？它真的讓你得到平安嗎？"
    },
    {
      week: "第二週", title: "向神寫一篇誠實的哀歌",
      mission: "模仿詩篇的格式，向神寫一封信：(1) 說出你目前最深的失望是什麼 (2) 誠實表達你的感受——生氣、質疑、絕望都可以 (3) 最後嘗試做一個「轉折」：「但是……神啊，我仍然……」讓神在你的哀歌中遇見你。",
      scripture: "詩四十二5「我的心哪，你為何憂悶？……應當仰望神。」",
      journalPrompt: "寫完這封信後，你的感受如何？你是否感受到神的同在？神對你的哀歌有什麼回應（即使只是微小的聲音）？"
    },
    {
      week: "第三週", title: "從聖經找出你的盼望根基",
      mission: "羅馬書五章3-5節是你這週的經文。背誦它，默想它，用它來對抗失望時的絕望感。每天早上起床時問自己：「今天我的盼望根基是環境嗎？還是神？」如果發現自己又把盼望放在環境上，主動提醒自己：「我的盼望在神。」",
      scripture: "羅五3-5「患難生忍耐，忍耐生老練，老練生盼望；盼望不至於羞恥。」",
      journalPrompt: "這週你是否能感受到「盼望不至於羞恥」的實在性？環境可能沒改變，但你內在的盼望有變穩固嗎？"
    },
    {
      week: "第四週", title: "練習「昇華」：把痛苦轉化為祝福",
      mission: "選擇一個你經歷過的深切失望，問自己：這個痛苦可以如何成為祝福別人的材料？找一個正在經歷類似痛苦的人，主動去關心他、陪伴他、甚至分享你的故事。讓你的傷痕成為別人的希望。",
      scripture: "林後一4「叫我們能用神所賜的安慰去安慰那遭各樣患難的人。」",
      journalPrompt: "當你主動去安慰別人時，你自己的感受如何？這個經歷是否讓你對自己過去的失望有新的理解？"
    }
  ];

  const groupDiscussion = [
    {
      category: "🔄 面對失望的反應",
      questions: [
        "四種反應（合理化、攻擊、退縮、昇華）中，你最常用哪一種？為什麼？",
        "分享一次你過去用「退縮」面對失望的經歷。那次退縮讓你得到平安嗎？",
        "聖經中有哪些人物示範了「昇華」這個反應（約瑟、約伯、保羅、耶穌）？",
        "在小組中，我們可以如何幫助彼此從不健康的反應走向「昇華」？"
      ]
    },
    {
      category: "😔 誠實面對失望",
      questions: [
        "你敢向神「抱怨」嗎？如果不敢，是什麼在阻止你？",
        "詩篇作者常常對神誠實表達憤怒和質疑——這對你有什麼啟發？",
        "約伯在極端失望中質問神「為什麼」，但神沒有給他答案，只給他自己。你能接受這樣的答案嗎？",
        "在教會中，我們是否常要求彼此「表現出平安喜樂」，反而阻礙了真實的屬靈成長？"
      ]
    },
    {
      category: "🌈 重建盼望",
      questions: [
        "基督徒的「盼望」和世人的「希望」最大的差別是什麼？",
        "「盼望不至於羞恥」（羅五5）——你有沒有經歷過這句話的真實？",
        "貝多芬、海倫凱勒的例子讓你想到什麼？你目前的失望有沒有可能也成為神手中的傑作？",
        "作為小組，我們如何成為彼此盼望的泉源？"
      ]
    }
  ];

  const reflections = [
    "我面對失望時最常用哪個反應模式（合理化、攻擊、退縮、昇華）？這個模式是從什麼時候養成的？",
    "我的「希望」是建立在環境上，還是建立在神身上？當環境崩潰時，我的希望會跟著崩潰嗎？",
    "我敢不敢誠實向神抱怨？還是我覺得「基督徒應該表現得平安喜樂」？",
    "約伯沒有得到答案但得到了神——我能接受這樣的結果嗎？還是我堅持要先有「答案」？",
    "我目前最深的失望是什麼？它有沒有可能成為神「昇華」的材料？",
    "我有沒有用過去的失望去祝福別人？還是我仍停留在自己的痛苦中？"
  ];

  const actions = [
    "做反應模式的自我檢測：找出你最常用的失望反應模式，找人分享討論。",
    "向神寫一篇哀歌：像詩篇作者一樣誠實向神傾訴，然後等候祂的回應。",
    "背誦盼望的經文：羅馬書五章3-5節、羅馬書十五章13節、希伯來書六章19節。",
    "找一位靈性導師：陪你走過失望的人，幫助你從不健康的反應走向昇華。",
    "用你的故事祝福別人：找一個正在經歷類似痛苦的人，主動關心陪伴。",
    "建立「盼望的銀行」：每次神在你身上做的恩典記錄下來，在失望時拿出來讀。"
  ];

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="space-y-8">

      <div className="bg-gradient-to-br from-emerald-600 via-green-700 to-teal-800 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="relative">
          <div className="flex items-center gap-2 mb-2"><Sun className="w-5 h-5 text-emerald-200" /><span className="text-emerald-200 text-sm tracking-widest">靈性關懷與身心健康</span></div>
          <h1 className="font-extrabold mb-3" style={{fontSize:"32px"}}>第五單元：希望與失望</h1>
          <p className="text-emerald-100 text-lg">檢視靈性平安的第四個面向</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
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
                    {sec.content.split('\n\n').map((para, j) => (<p key={j} className="text-slate-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>{para}</p>))}
                  </div>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
      </div>

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
                    {topic.content.split('\n\n').map((para: string, j: number) => (<p key={j} className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>{para}</p>))}
                    <div className="bg-violet-50 rounded-xl p-4 border border-violet-100"><div className="font-bold text-violet-700 mb-2" style={{fontSize:"15px"}}>📖 相關經文：</div>{topic.scriptures.map((s: string, j: number) => (<p key={j} className="text-slate-600 text-sm mb-1.5">{s}</p>))}</div>
                    <div className="bg-amber-50 rounded-xl p-4 border border-amber-200"><div className="font-bold text-amber-700 mb-1" style={{fontSize:"15px"}}>💬 反思：</div><p className="text-slate-600" style={{fontSize:"17px"}}>{topic.reflection}</p></div>
                  </div>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
      </div>

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

      <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-sm">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowPdf(!showPdf)}>
          <h3 className="font-bold text-emerald-800 flex items-center gap-2" style={{fontSize:"22px"}}><BookOpen className="w-6 h-6 text-emerald-600" />📄 閱讀原書 PDF（含圖片與完整排版）</h3>
          {showPdf ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
        </div>
        <AnimatePresence>{showPdf && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <div className="mt-4 rounded-xl overflow-hidden border border-emerald-200" style={{height:"80vh"}}>
              <iframe src="/spiritual-care.pdf#page=44" className="w-full h-full" title="原書 PDF" />
            </div>
          </motion.div>
        )}</AnimatePresence>
      </div>

      </div>
    </div>
  );
}
