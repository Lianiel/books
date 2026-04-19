import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, BookOpen, ChevronDown, ChevronUp, Target, Brain, MessageSquareQuote, Cross, Compass } from 'lucide-react';

export default function Chapter6() {
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [openTheology, setOpenTheology] = useState<number | null>(null);
  const [openTaiwan, setOpenTaiwan] = useState<number | null>(null);
  const [openChallenge, setOpenChallenge] = useState<number | null>(null);
  const [showPdf, setShowPdf] = useState(false);

  const sections = [
    {
      title: "面對死亡的恐懼", icon: "🙏",
      content: "許多人面臨死亡威脅時除了無助與絕望，會尋求神明的幫助，這說明了至高者對病患具有極重要的被需求性。靈性關懷者必須協助病患建立對至高者的倚靠。\n\n人在健康時可能覺得自己不需要神，但當死亡逼近時，幾乎每個人都會開始思考超越自己的存在——這是普世現象，不分宗教文化。"
    },
    {
      title: "如何幫助高齡者建立關係", icon: "👴",
      content: "健康與亞健康時：協助探索永生，宗教信仰能提高自我察覺，坦然面對死亡。不要等到生病才談信仰——健康時就是最好的屬靈投資時機。\n\n患病時：提供支持和陪伴，讓他們知道有人在乎並願意傾聽。這時不是傳教的時候，而是同在的時候。\n\n臨終時：幫助消除對死亡的不安與恐懼。陪伴是最重要的，允許他們表達情緒，並尊重他們自主決定自己的事情。不要強推禱告或唱詩——尊重對方的節奏。"
    },
    {
      title: "趙可式博士觀點", icon: "💎",
      content: "臨終期是靈性煉淨雜質的最佳機會，也是生命整合、轉換與修補人際關係的最後時機。\n\n這個觀點非常深刻：人在臨終時會被迫面對最真實的自己——一生的驕傲、恐懼、未竟之事、未表達的愛和寬恕。這個時刻若有人陪伴引導，可以帶來極大的生命轉化。"
    }
  ];

  const theologyTopics = [
    {
      title: "「永生」：不只是死後的事",
      content: "很多人以為「永生」就是「死後上天堂」——這只對了一半。約翰福音十七章3節，耶穌對「永生」的定義是：「認識你——獨一的真神，並且認識你所差來的耶穌基督，這就是永生。」\n\n換言之，永生的核心不是「時間的延長」，而是「關係的深度」——與神有親密的關係。這意味著永生從你信主的那一刻就已經開始了，不是等到死後才進入。\n\n這個理解對臨終關懷有重大影響：我們不是在人死前趕著讓他「得救」，而是讓他在剩餘的日子裡真實地與神建立關係、經歷神的同在。這個關係會延續到永恆。",
      scriptures: [
        "約十七3 認識你——獨一的真神，並且認識你所差來的耶穌基督，這就是永生。",
        "約五24 那聽我話、又信差我來者的，就有永生……是已經出死入生了。",
        "約壹五13 我將這些話寫給你們信奉神兒子之名的人，要叫你們知道自己有永生。"
      ],
      reflection: "你所理解的「永生」是「死後的事」還是「現在就開始的關係」？這個理解影響你現在怎麼活嗎？"
    },
    {
      title: "聖經中的死亡觀：睡了而不是消失",
      content: "聖經對死亡有一個獨特的用語：「睡了」。耶穌說拉撒路「睡了」（約十一11）、保羅說那些「在耶穌裡睡了的人」（帖前四14）、司提反殉道時是「睡了」（徒七60）。\n\n這個比喻告訴我們：對基督徒而言，死亡不是終結，而是另一種形式的存在。就像睡覺一樣，會有醒來的時刻——這就是基督再來時的復活。\n\n保羅說：「死的毒鉤就是罪，罪的權勢就是律法。感謝神，使我們藉著我們的主耶穌基督得勝。」（林前十五56-57）這讓基督徒面對死亡時有了完全不同的態度：不是絕望的抗拒，也不是消極的接受，而是帶著盼望的預備。",
      scriptures: [
        "約十一25-26 耶穌說：復活在我，生命也在我……凡活著信我的人必永遠不死。",
        "林前十五55 死啊！你得勝的權勢在哪裡？死啊！你的毒鉤在哪裡？",
        "帖前四13-14 論到睡了的人，我們不願意你們不知道，恐怕你們憂傷，像那些沒有指望的人一樣。"
      ],
      reflection: "你面對自己的死亡時是什麼感受——恐懼、迴避、平安、期待？基督徒的死亡觀是否真實地影響了你的人生態度？"
    },
    {
      title: "耶穌面對死亡的榜樣：客西馬尼園的真實",
      content: "耶穌在客西馬尼園的禱告，是我們面對死亡最重要的榜樣。祂「憂愁起來，極其難過」（太二十六37），甚至「汗珠如大血點滴在地上」（路二十二44）。然後祂說：「我父啊，倘若可行，求你叫這杯離開我；然而，不要照我的意思，只要照你的意思。」（太二十六39）\n\n這告訴我們幾件重要的事：\n\n1. 基督徒面對死亡恐懼是正常的——連耶穌都會掙扎。\n\n2. 基督徒面對死亡可以誠實——不需要假裝「平安喜樂」。\n\n3. 基督徒最終的平安不是來自「否認恐懼」，而是「順服父神的旨意」。\n\n耶穌的榜樣讓我們可以在臨終關懷中承認自己的脆弱，同時仍然倚靠天父。這個真實的屬靈榜樣比「硬裝堅強」更有力量。",
      scriptures: [
        "太二十六37-39 就憂愁起來，極其難過……不要照我的意思，只要照你的意思。",
        "路二十二44 耶穌極其傷痛，禱告更加懇切，汗珠如大血點滴在地上。",
        "來五7 基督在肉體的時候，既大聲哀哭，流淚禱告，懇求那能救他免死的主。"
      ],
      reflection: "在陪伴臨終者時，你會鼓勵他「堅強」還是允許他「誠實面對恐懼」？耶穌的榜樣改變了你的認知嗎？"
    },
    {
      title: "與神和好：臨終的終極議題",
      content: "所有臨終議題中最核心的是「與神和好」。使徒保羅說：「若有人在基督裡，他就是新造的人，舊事已過，都變成新的了。一切都是出於神；他藉著基督使我們與他和好。」（林後五17-18）\n\n「與神和好」（reconciled with God）是臨終關懷最深的目標——不是強迫對方決志，而是幫助他認識神是愛他的、是等候他的、是接納他的。很多長輩在臨終時會回想自己一生的過錯、遺憾、對神的虧欠——這時他們需要聽到的是「神的恩典」，而不是「你要努力做好」。\n\n路加福音十五章的三個比喻（迷羊、失錢、浪子）告訴我們：父神是主動尋找迷羊的牧人、是點燈仔細尋找失錢的婦人、是看見浪子回家就跑著迎接他的父親。臨終者最需要知道的，就是這位等候擁抱的天父。",
      scriptures: [
        "林後五17-18 若有人在基督裡，他就是新造的人……藉著基督使我們與他和好。",
        "路十五20 相離還遠，他父親看見，就動了慈心，跑去抱著他的頸項，連連與他親嘴。",
        "約壹一9 我們若認自己的罪，神是信實的，是公義的，必要赦免我們的罪。"
      ],
      reflection: "在你自己的生命中，你是否真的經歷了「與神和好」？還是你仍覺得神在責備你、不滿意你？這個認知會影響你陪伴別人走向神的方式。"
    }
  ];

  const taiwanExamples = [
    {
      title: "🙏 華人文化中「忌諱談死」的挑戰",
      scenario: "華人文化特別忌諱談死——家人生病了大家都避免談「最壞的情況」，認為這樣會「觸霉頭」。結果很多長輩臨終時，家人還在假裝「一切都會好起來」，錯失了最重要的靈性對話時機。基督徒家庭也受這個文化影響，不敢主動談論死亡和永生。",
      challenge: "下次探訪年長肢體或家人時，嘗試用自然的方式開啟永生話題——不是推銷式地傳教，而是分享自己對永生的理解和盼望。可以從詩篇、感恩的見證開始，逐漸進入更深的屬靈對話。",
      insight: "本章說「健康時就要談永生」——這違反華人文化但符合聖經真理。趁著還能理性對話時，建立屬靈連結；不要等到臨終才急著「決志」。"
    },
    {
      title: "🏥 醫院探訪：從「慰問」到「靈性陪伴」",
      scenario: "很多基督徒探訪病人時只停留在「關心身體」——問吃得好嗎、睡得好嗎、需要什麼。雖然這些是重要的，但只做到這樣就錯過了靈性關懷的黃金時刻。病床上的人比平常更開放討論生命、死亡、信仰——這是他們最深的需要。",
      challenge: "下次探訪病人時，準備好三個「靈性對話」的開場白：(1)「你這段時間心裡最常想什麼？」(2)「有什麼是你最想完成的、或最想跟誰說的話？」(3)「在這段時間，你感受到神在哪些地方？」這些問題會開啟真正有意義的對話。",
      insight: "本章提醒我們「陪伴是最重要的」。但陪伴不只是「坐在旁邊」，而是「進入他的世界」——包括他的恐懼、希望、未解決的議題。這需要勇氣和預備。"
    },
    {
      title: "👨‍👩‍👧‍👦 家族中的未信者長輩：關懷 vs. 傳教的平衡",
      scenario: "很多基督徒面對年老未信的父母、祖父母時，內心很焦急——「他們快要走了，還沒信主怎麼辦？」於是變得急迫、緊張，結果反而讓長輩覺得壓力。另一個極端則是因為「尊重長輩」完全不談信仰，錯失福音機會。",
      challenge: "在「急迫傳教」和「完全不談」之間找到平衡。具體做法：(1) 用你的生命為福音做見證——讓長輩看見你是什麼樣的人 (2) 禱告求神親自動工，不要靠自己的努力 (3) 把握自然的機會分享（如過節、對話中談到人生）(4) 真誠關心他們的生活，不把他們當成「福音對象」。",
      insight: "本章說臨終時「允許他們表達情緒，尊重他們自主決定」——這個原則在傳教時也適用。長輩需要感受到被愛和尊重，而不是「被推銷救恩」。"
    },
    {
      title: "⛪ 教會如何裝備會友做靈性關懷",
      scenario: "很多教會有「關懷事工」，但真正能做深度靈性關懷的人卻很少。原因是：(1) 一般的關懷訓練太淺 (2) 會友自己的屬靈深度不夠 (3) 沒有組織化的培訓和實習機會。結果關懷事工停留在「送飯、送花」的層面。",
      challenge: "和教會領袖討論：我們的教會有沒有系統化培訓靈性關懷人員？如果沒有，可以如何開始？建議步驟：(1) 小組中先操練彼此做靈性關懷 (2) 選幾位有負擔的肢體接受更深的培訓 (3) 建立「關懷團隊」配搭服事年長者、病人、臨終者。",
      insight: "趙可式博士說「臨終期是靈性煉淨的最佳機會」——這個黃金時期不能浪費。教會若能裝備會友把握這個時機，就是做了極有永恆價值的事工。"
    }
  ];

  const weeklyChallenge = [
    {
      week: "第一週", title: "面對自己的死亡觀",
      mission: "用一週時間誠實思考：如果我今天被醫生告知只剩下三個月生命，我會怎麼面對？我最害怕什麼？我最想做什麼？我對「永生」有真實的盼望嗎？把答案寫下來，不要迴避真實感受。",
      scripture: "詩九十12「求你指教我們怎樣數算自己的日子，好叫我們得著智慧的心。」",
      journalPrompt: "寫完後你發現什麼？你的死亡觀是恐懼、逃避、平安、還是期待？這個發現告訴你你目前的屬靈生命需要什麼？"
    },
    {
      week: "第二週", title: "對永生的深度思考",
      mission: "每天花 15 分鐘默想一段關於永生的經文（約翰福音十七章3節、約翰福音十一章25-26節、哥林多前書十五章55-57節等）。不是快速讀過，而是慢慢咀嚼——讓這些話進入你的心。",
      scripture: "約十七3「認識你——獨一的真神，並且認識你所差來的耶穌基督，這就是永生。」",
      journalPrompt: "經過一週的默想，你對「永生」的理解有什麼改變？它不再只是「死後的事」了嗎？這個改變影響你現在怎麼活嗎？"
    },
    {
      week: "第三週", title: "探訪一位長輩或病人",
      mission: "本週實際去探訪一位年長的肢體或病人（不一定要基督徒）。準備好一些「靈性對話」的問題，但不要強推。真誠陪伴，專心聆聽，為他禱告（出聲或心中都可以）。觀察這個探訪帶給你和對方的影響。",
      scripture: "雅一27「看顧在患難中的孤兒寡婦……這就是清潔沒有玷污的虔誠。」",
      journalPrompt: "這次探訪的經歷如何？你發現什麼是你預料之外的？你對「靈性關懷」有新的理解嗎？"
    },
    {
      week: "第四週", title: "建立你的「臨終規劃」（是的，現在就做）",
      mission: "雖然可能覺得太早，但現在就開始思考：(1) 我希望在臨終時身邊有誰？(2) 我希望怎麼被照顧？(3) 我想留下什麼話給家人、朋友？(4) 如果有機會，我最想道謝、道愛、道歉、道別的對象是誰？開始寫這些筆記——這個過程本身就是屬靈操練。",
      scripture: "羅十四8「我們若活著，是為主而活；若死了，是為主而死。」",
      journalPrompt: "寫這些筆記時，你的感受如何？有沒有浮現什麼是你現在就該做的事（例如：還沒道謝的人、還沒道歉的事）？"
    }
  ];

  const groupDiscussion = [
    {
      category: "🙏 面對死亡",
      questions: [
        "你害怕死亡嗎？是什麼讓你害怕？是疼痛、失去所愛、面對審判、還是未知？",
        "耶穌在客西馬尼園的掙扎對你有什麼啟發？基督徒面對死亡可以誠實表達恐懼嗎？",
        "「永生不只是死後的事，而是現在就開始的關係」——這個理解對你有什麼影響？",
        "我們的教會文化是否迴避談論死亡？這如何影響我們對永生的真實盼望？"
      ]
    },
    {
      category: "👴 陪伴長輩和病人",
      questions: [
        "分享一次你探訪長輩或病人的經歷。你覺得自己做得好的是什麼？可以改進的是什麼？",
        "華人文化「忌諱談死」如何影響我們的關懷？我們可以如何突破這個文化限制？",
        "面對未信主的長輩，你如何在「關懷」和「傳教」之間找平衡？",
        "「陪伴是最重要的」——這個原則聽起來簡單，但實際做到很難。為什麼？"
      ]
    },
    {
      category: "⛪ 教會的角色",
      questions: [
        "我們的教會有沒有系統化的靈性關懷事工？還可以加強什麼？",
        "趙可式博士說「臨終期是靈性煉淨的最佳機會」——我們是否善用了這個機會？",
        "作為小組，我們可以如何一起裝備成為有深度的關懷者？",
        "如果小組中有人正在面對家人的重病或臨終，我們可以如何具體陪伴？"
      ]
    }
  ];

  const reflections = [
    "我真的相信「永生」嗎？還是只是理性認同？這個相信有改變我現在的生活方式嗎？",
    "我面對自己的死亡是恐懼、逃避、還是平安？為什麼？",
    "我有沒有效法耶穌在客西馬尼園的榜樣——誠實面對恐懼，同時順服父神？",
    "我目前對年長肢體或家人的關懷，是停留在「問候」還是進入「靈性陪伴」？",
    "我是否有尚未和好的關係、未道謝的人、未道歉的事？現在就是時候。",
    "作為基督徒，我能不能成為別人臨終時的屬靈夥伴？如果不能，我需要怎樣的裝備？"
  ];

  const actions = [
    "誠實面對你的死亡觀：花時間獨自禱告思考，不要迴避。",
    "默想永生的經文：約翰福音十七章3節、哥林多前書十五章55-57節。",
    "主動探訪一位長輩或病人：不只問候，而是進入深度陪伴。",
    "開始你的臨終規劃：四道人生清單（道謝、道愛、道歉、道別的對象）。",
    "裝備自己成為關懷者：找一個靈性關懷訓練課程或書籍來學習。",
    "和家人談論信仰和死亡：不要等到最後一刻——趁著健康時建立屬靈連結。"
  ];

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="space-y-8">

      <div className="bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-violet-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="relative">
          <div className="flex items-center gap-2 mb-2"><Compass className="w-5 h-5 text-violet-200" /><span className="text-violet-200 text-sm tracking-widest">靈性關懷與身心健康</span></div>
          <h1 className="font-extrabold mb-3" style={{fontSize:"32px"}}>第六單元：與至高者建立關係</h1>
          <p className="text-violet-100 text-lg">檢視靈性平安的第五個面向</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-violet-50 rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
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

      <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-6 md:p-8 border border-violet-100 shadow-sm">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowPdf(!showPdf)}>
          <h3 className="font-bold text-violet-800 flex items-center gap-2" style={{fontSize:"22px"}}><BookOpen className="w-6 h-6 text-violet-600" />📄 閱讀原書 PDF（含圖片與完整排版）</h3>
          {showPdf ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
        </div>
        <AnimatePresence>{showPdf && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <div className="mt-4 rounded-xl overflow-hidden border border-violet-200" style={{height:"80vh"}}>
              <iframe src="/spiritual-care.pdf#page=54" className="w-full h-full" title="原書 PDF" />
            </div>
          </motion.div>
        )}</AnimatePresence>
      </div>

      </div>
    </div>
  );
}
