import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Baby, BookOpen, Clock, ShieldAlert, HeartHandshake, CheckCircle2, ShieldCheck, Sprout, AlertTriangle, XCircle, Brain, Target } from 'lucide-react';

export default function SectionCh10() {
  const [activeQuiz, setActiveQuiz] = useState<number | null>(null);
  const [quizResults, setQuizResults] = useState<Record<number, boolean>>({});

  const handleQuizAnswer = (ageId: number, isCorrect: boolean) => {
    setQuizResults(prev => ({ ...prev, [ageId]: isCorrect }));
  };

  const ages = [
    { 
      id: 1,
      age: "出生到五個月", 
      page: "P266", 
      title: "建立情感聯繫 (Attachment)", 
      desc: "產生歸屬感與安全感。此時界線不是最重要的，母親的工作是安撫與保護，讓孩子知道世界是安全的。這個階段沒有所謂的「寵壞」，他們哭是因為有真實的需要（餓、尿布濕、需要抱）。",
      task: "無條件的愛與回應需求。建立「我是被愛的」基礎。",
      interaction: "當嬰兒哭泣時，溫柔地抱起他們並輕聲說話；在餵奶或換尿布時，保持溫暖的眼神接觸，讓他們感受到全然的安全與接納。",
      quiz: {
        question: "對於三個月大的嬰兒，當他半夜哭鬧時，父母應該怎麼做？",
        options: [
          { text: "讓他哭，以免養成依賴的壞習慣", isCorrect: false },
          { text: "立刻回應並安撫他，建立安全感", isCorrect: true },
          { text: "嚴格規定喝奶時間，時間沒到就不理他", isCorrect: false }
        ],
        feedback: "正確！這個階段的孩子需要的是無條件的安全感，沒有所謂「寵壞」的問題。"
      },
      actionableSteps: [
        "當嬰兒哭泣時，放下手邊不緊急的事，優先給予擁抱和安撫。",
        "在餵奶或換尿布時，多與嬰兒進行眼神交流和溫柔的對話。"
      ]
    },
    { 
      id: 2,
      age: "五到十個月", 
      page: "P267", 
      title: "孵化期 (Hatching)", 
      desc: "孩子開始意識到「我跟媽媽是不一樣的」，開始探索世界（如：抓媽媽的頭髮、看別的地方）。父母要鼓勵這種分離，同時提供安全的避風港。",
      task: "鼓勵探索，隨時張開雙臂歡迎他們回來。不要因為他們的好奇心而感到被拒絕。",
      interaction: "佈置一個安全的探索空間，當孩子爬遠時在原地微笑注視；當他們帶著「戰利品」或因害怕而回頭找你時，給予熱情的擁抱與肯定。",
      quiz: {
        question: "當八個月大的孩子開始想從你懷裡掙脫，去爬向遠處的玩具時，你應該：",
        options: [
          { text: "感到失落，硬把他抱回來", isCorrect: false },
          { text: "鼓勵他去探索，並在原地看著他，讓他知道隨時可以回來", isCorrect: true },
          { text: "完全不管他，讓他自己玩", isCorrect: false }
        ],
        feedback: "正確！鼓勵探索同時提供安全感，是這個階段最重要的任務。"
      },
      actionableSteps: [
        "佈置一個安全的探索空間，讓孩子可以自由爬行和觸摸物品。",
        "當孩子探索完回到你身邊時，給予熱情的擁抱，肯定他們的獨立嘗試。"
      ]
    },
    { 
      id: 3,
      age: "十到十八個月", 
      page: "P268", 
      title: "練習期 (Practicing)", 
      desc: "孩子學會走路和說話，覺得自己無所不能，開始頻繁地說「不」。父母要學會接納孩子的「不」（這是他們獨立的表現），並設定安全的物理限制（如：不能碰插座、不能跑上馬路）。",
      task: "慶祝他們的獨立，設立保護性界線。不要把他們的「不」視為對你權威的挑戰。",
      interaction: "當孩子說「不」時，避免立刻發脾氣，可以說：「我知道你不想，但我們現在必須這麼做。」並在安全範圍內給予有限的選擇（如：「你要穿紅鞋還是藍鞋？」）。",
      quiz: {
        question: "一歲半的孩子開始頻繁對你說「不」，這代表什麼？",
        options: [
          { text: "他變壞了，需要嚴厲的懲罰", isCorrect: false },
          { text: "他正在發展獨立的自我意識，是正常的成長過程", isCorrect: true },
          { text: "他不再愛你了", isCorrect: false }
        ],
        feedback: "正確！「不」是孩子建立自我界線的第一步，父母應該接納並引導，而不是打壓。"
      },
      actionableSteps: [
        "當孩子說「不」時，深呼吸，告訴自己「這是他成長的必經過程，不是針對我」。",
        "在安全的前提下，給予孩子有限的選擇權（例如：「你想穿紅衣服還是藍衣服？」），滿足他們的自主需求。"
      ]
    },
    { 
      id: 4,
      age: "十八到三十六個月", 
      page: "P269", 
      title: "學會自主 (Rapprochement)", 
      desc: "俗稱「麻煩的兩歲 (Terrible Twos)」。他們能與人分離同時保持情感連結。父母要在適當的時間接受他們的「不」，同時堅定地執行父母的「不」，不被孩子的脾氣勒索。讓他們體驗挫折，但依然愛他們。",
      task: "發展客體恆常性（知道即使媽媽生氣，媽媽還是愛我的）。溫和堅定地執行後果，不因哭鬧妥協。",
      interaction: "面對孩子的情緒崩潰，保持冷靜並陪伴在旁：「我知道你很生氣不能買玩具，媽媽陪你一起生氣，但我們還是不能買。」等孩子平靜後給予擁抱。",
      quiz: {
        question: "兩歲的孩子因為買不到玩具而在超市大哭大鬧，你應該怎麼做？",
        options: [
          { text: "為了面子趕快買給他，讓他安靜", isCorrect: false },
          { text: "溫和但堅定地拒絕，帶他離開現場，讓他經歷「哭鬧無效」的後果", isCorrect: true },
          { text: "在超市裡大聲責罵他", isCorrect: false }
        ],
        feedback: "正確！溫和堅定地執行界線，不被情緒勒索，能幫助孩子學會面對挫折。"
      },
      actionableSteps: [
        "當孩子發脾氣時，保持冷靜，不要跟著情緒失控（「我知道你很生氣，但我們還是不能買」）。",
        "在孩子平靜下來後，給予擁抱，讓他們知道「雖然我不允許你的行為，但我依然愛你」。"
      ]
    },
    { 
      id: 5,
      age: "三到五歲", 
      page: "P270", 
      title: "性別角色發展 (Phallic Stage)", 
      desc: "認同同性父母，與異性父母互動（如：小男孩想跟媽媽結婚，排斥爸爸）。父母要溫和堅定地處理孩子的競爭與認同，幫助他們了解自己的位置。這時期的界線是「家庭的階層」。",
      task: "建立家庭階層界線。父母必須展現出他們是一個相愛的團隊，孩子不能介入或取代其中一方。",
      interaction: "在孩子面前自然地展現夫妻間的親密（如牽手、擁抱）；當孩子試圖打斷夫妻談話時，溫和地說：「現在是爸爸媽媽說話的時間，請你先等一下。」",
      quiz: {
        question: "四歲的女兒說長大要跟爸爸結婚，並常常試圖擠在父母中間，父母應該：",
        options: [
          { text: "覺得可愛，順著她的意把媽媽推開", isCorrect: false },
          { text: "溫和地告訴她：「爸爸已經和媽媽結婚了，你長大會找到自己的丈夫」，並展現父母的親密", isCorrect: true },
          { text: "嚴厲地責罵她不懂事", isCorrect: false }
        ],
        feedback: "正確！建立清晰的家庭階層界線，讓孩子知道父母的關係是穩固且不可取代的。"
      },
      actionableSteps: [
        "夫妻在孩子面前適度展現親密（如牽手、擁抱），讓孩子看到父母是一個穩固的團隊。",
        "安排專屬的「夫妻時間」，並明確告訴孩子這是父母的時間，不能被打擾。"
      ]
    },
    { 
      id: 6,
      age: "六到十一歲", 
      page: "P271", 
      title: "沉潛期 (Latency)", 
      desc: "透過學校課業和遊戲學習完成任務，結交同性朋友。這時期的重點是學習延遲滿足、設定目標及管理時間。界線從「身體安全」轉移到「任務與責任」。",
      task: "教導任務導向的界線（如：先寫作業再玩、做家事換取零用錢）。讓他們體驗不負責任的自然後果（如：忘記帶便當就餓肚子）。",
      interaction: "與孩子共同制定家規和後果，並確實執行。例如：「如果你忘記帶作業，媽媽不會幫你送，你需要自己向老師解釋。」",
      quiz: {
        question: "十歲的孩子常常忘記帶作業去學校，父母最好的處理方式是：",
        options: [
          { text: "每天幫他檢查書包，確保他帶了", isCorrect: false },
          { text: "讓他自己承擔忘記帶的後果（如被老師處罰），不再幫他送去學校", isCorrect: true },
          { text: "幫他送去學校，但路上一直罵他", isCorrect: false }
        ],
        feedback: "正確！讓孩子體驗不負責任的自然後果，是培養責任感最有效的方法。"
      },
      actionableSteps: [
        "與孩子一起制定「先完成責任，再享受權利」的規則（如：寫完作業才能看電視）。",
        "當孩子忘記帶東西時，忍住幫忙送的衝動，讓他們經歷一次自然後果。"
      ]
    },
    { 
      id: 7,
      age: "十一到十八歲", 
      page: "P272", 
      title: "青少年時期 (Adolescence)", 
      desc: "最後的準備階段。父母的角色從「管控者」轉為「影響者/顧問」。賦予更多自由與責任，讓他們承擔真實世界的後果。這是在他們離開家之前，最後一次在安全網內犯錯的機會。",
      task: "放手讓他們承擔後果（如：超速罰單自己繳、成績不好自己承擔）。成為顧問而非警察，保持溝通管道暢通。",
      interaction: "當孩子遇到困難時，忍住直接給答案或幫忙解決的衝動，改問：「你覺得這個問題該怎麼處理比較好？」或「你需要我提供什麼協助嗎？」",
      quiz: {
        question: "面對青少年的叛逆和要求更多自由，父母應該如何調整角色？",
        options: [
          { text: "更加嚴格地管控他們的一舉一動", isCorrect: false },
          { text: "從『管控者』轉變為『顧問』，給予自由的同時讓他們承擔相應的後果", isCorrect: true },
          { text: "完全放任不管，讓他們自己決定", isCorrect: false }
        ],
        feedback: "正確！青少年需要練習在真實世界中做決定並承擔後果，父母應退居顧問角色。"
      },
      actionableSteps: [
        "當青少年面臨選擇時，多問「你覺得怎麼做比較好？」而不是直接給答案。",
        "將一部分的決定權（如：零用錢的分配、衣服的選擇）交給他們，並讓他們承擔選擇的結果。"
      ]
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 rounded-3xl p-8 md:p-10 border border-emerald-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold mb-4" style={{fontSize:"17px"}}>
            Chapter 10
          </div>
          <h2 className="md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight" style={{fontSize:"33px"}}>
            界線與你的子女
          </h2>
          <p className="text-slate-700 leading-relaxed max-w-3xl" style={{fontSize:"21px"}}>
            界線在養育孩子的過程中尤其關鍵。界線會對孩子品格的發展有極大的影響，包括他們的價值觀、在學校的表現、朋友的選擇，以及未來的婚姻與工作。父母的終極責任，是幫助孩子將「外在的限制」內化為「內在的自律」，讓他們成為能為自己負責的成年人。
          </p>
        </div>
      </div>

      {/* Discipline vs Punishment */}
      <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-6 flex items-center" style={{fontSize:"27px"}}>
          <BookOpen className="w-7 h-7 mr-3 text-emerald-500" />
          教導 (Discipline) VS. 懲罰 (Punishment) (P245-248)
        </h3>
        <p className="text-slate-600 leading-relaxed mb-8" style={{fontSize:"21px"}}>
          許多父母將「設立界線」誤以為是「發脾氣和懲罰」。真正的界線是透過自然的後果來教導孩子，而不是透過恐懼來控制他們。
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-200 rounded-bl-full opacity-50"></div>
            <h4 className="font-bold text-emerald-800 mb-4 flex items-center" style={{fontSize:"27px"}}>
              <CheckCircle2 className="w-6 h-6 mr-2" />
              管教 (Discipline)
            </h4>
            <p className="text-emerald-700 leading-relaxed mb-6" style={{fontSize:"19px"}}>
              管教源自「門徒訓練」，意思是教導。它是上帝自然的法則：種什麼就收什麼。管教是<strong className="bg-emerald-200 px-1 rounded">向前看</strong>，透過後果讓孩子學到功課，不再犯同樣的錯。
            </p>
            <ul className="space-y-3 text-emerald-800 font-medium mb-6 flex-grow" style={{fontSize:"17px"}}>
              <li className="flex items-center bg-white/60 p-3 rounded-xl"><CheckCircle2 className="w-5 h-5 mr-3 text-emerald-600 shrink-0" /> 提供安全的鷹架與規範，態度溫和但堅定</li>
              <li className="flex items-center bg-white/60 p-3 rounded-xl"><CheckCircle2 className="w-5 h-5 mr-3 text-emerald-600 shrink-0" /> 培養內在的責任感，讓孩子明白行為與後果的關聯</li>
              <li className="flex items-center bg-white/60 p-3 rounded-xl"><CheckCircle2 className="w-5 h-5 mr-3 text-emerald-600 shrink-0" /> 允許從錯誤中學習，不帶定罪與羞辱</li>
            </ul>
            <div className="bg-white p-4 rounded-xl border border-emerald-200">
              <strong className="text-emerald-800 block mb-1" style={{fontSize:"17px"}}>✅ 具體情境：</strong>
              <p className="text-emerald-700" style={{fontSize:"17px"}}>「因為你沒有把腳踏車收好，所以你今天不能騎腳踏車。」（後果與行為直接相關，父母沒有發脾氣，只是執行規則）</p>
            </div>
          </div>
          
          <div className="bg-rose-50 p-8 rounded-3xl border border-rose-100 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-24 h-24 bg-rose-200 rounded-bl-full opacity-50"></div>
            <h4 className="font-bold text-rose-800 mb-4 flex items-center" style={{fontSize:"27px"}}>
              <XCircle className="w-6 h-6 mr-2" />
              懲罰 (Punishment)
            </h4>
            <p className="text-rose-700 leading-relaxed mb-6" style={{fontSize:"19px"}}>
              懲罰是讓人為做錯的事額外付代價。懲罰是<strong className="bg-rose-200 px-1 rounded">往回看</strong>，聚焦在為過去付代價，通常伴隨著父母的憤怒，沒有給練習留下太多空間。
            </p>
            <ul className="space-y-3 text-rose-800 font-medium mb-6 flex-grow" style={{fontSize:"17px"}}>
              <li className="flex items-center bg-white/60 p-3 rounded-xl"><AlertTriangle className="w-5 h-5 mr-3 text-rose-600 shrink-0" /> 帶來恐懼與定罪，孩子覺得自己「很糟」</li>
              <li className="flex items-center bg-white/60 p-3 rounded-xl"><AlertTriangle className="w-5 h-5 mr-3 text-rose-600 shrink-0" /> 破壞關係與情感連結，產生怨恨</li>
              <li className="flex items-center bg-white/60 p-3 rounded-xl"><AlertTriangle className="w-5 h-5 mr-3 text-rose-600 shrink-0" /> 孩子學會逃避被抓、說謊，而不是為行為負責</li>
            </ul>
            <div className="bg-white p-4 rounded-xl border border-rose-200">
              <strong className="text-rose-800 block mb-1" style={{fontSize:"17px"}}>❌ 具體情境：</strong>
              <p className="text-rose-700" style={{fontSize:"17px"}}>「你這壞孩子，怎麼總是講不聽！給我回房間反省，我今天不想看到你！」（帶有情緒發洩、人身攻擊與關係的切斷）</p>
            </div>
          </div>
        </div>
      </div>

      {/* Children's Needs */}
      <div className="bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-700 shadow-sm text-white">
        <h3 className="font-bold text-emerald-300 mb-8 flex items-center" style={{fontSize:"27px"}}>
          <HeartHandshake className="w-7 h-7 mr-3" />
          孩童需要的界線能力 (P249-260)
        </h3>
        <p className="text-slate-300 mb-8" style={{fontSize:"21px"}}>
          我們不只要對孩子設界線，更要教導他們如何為自己設界線。以下是孩子必須發展出的三種核心能力：
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-700/50 p-6 rounded-2xl border border-slate-600 hover:bg-slate-700 transition-colors">
            <ShieldCheck className="w-8 h-8 text-emerald-400 mb-4" />
            <h4 className="font-bold text-emerald-300 mb-3" style={{fontSize:"23px"}}>保護自己 (Protect Self)</h4>
            <p className="text-slate-300 leading-relaxed" style={{fontSize:"19px"}}>
              界線是孩子用來保護自己、捍衛靈魂的方法。他們需要學會對不好的事物（如霸凌、不當觸摸、同儕壓力）勇敢說「不」。
            </p>
            <div className="mt-4 bg-slate-800/80 p-3 rounded-lg text-emerald-200/80 border border-slate-600/50" style={{fontSize:"17px"}}>
              關鍵：如果父母在家裡不允許孩子說「不」（例如強迫他們擁抱不想擁抱的親戚），他們在外面遇到危險時也不會說「不」。
            </div>
          </div>
          <div className="bg-slate-700/50 p-6 rounded-2xl border border-slate-600 hover:bg-slate-700 transition-colors">
            <Sprout className="w-8 h-8 text-emerald-400 mb-4" />
            <h4 className="font-bold text-emerald-300 mb-3" style={{fontSize:"23px"}}>擁有自主與選擇 (Autonomy)</h4>
            <p className="text-slate-300 leading-relaxed" style={{fontSize:"19px"}}>
              讓孩子意識到自己對生活有控制和選擇權，而不只是父母手中的棋子。給予適合年齡的選擇權，並讓他們為自己的選擇承擔後果。
            </p>
            <div className="mt-4 bg-slate-800/80 p-3 rounded-lg text-emerald-200/80 border border-slate-600/50" style={{fontSize:"17px"}}>
              關鍵：與其命令「穿上這件紅衣服」，不如問「你想穿紅衣服還是藍衣服？」讓他們練習做決定。
            </div>
          </div>
          <div className="bg-slate-700/50 p-6 rounded-2xl border border-slate-600 hover:bg-slate-700 transition-colors">
            <Clock className="w-8 h-8 text-emerald-400 mb-4" />
            <h4 className="font-bold text-emerald-300 mb-3" style={{fontSize:"23px"}}>延遲滿足 (Delay Gratification)</h4>
            <p className="text-slate-300 leading-relaxed" style={{fontSize:"19px"}}>
              幫助孩子學會對當下的渴望說「不」，為了得到未來更好的東西。無法延遲滿足的孩子，長大後容易陷入債務、成癮和人際關係破裂的危機。
            </p>
            <div className="mt-4 bg-slate-800/80 p-3 rounded-lg text-emerald-200/80 border border-slate-600/50" style={{fontSize:"17px"}}>
              關鍵：不要孩子一哭鬧就立刻滿足他。讓他們學會等待，學會為了買大玩具而存錢，而不是立刻買小玩具。
            </div>
          </div>
        </div>
      </div>

      {/* Age Stages */}
      <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-8 flex items-center" style={{fontSize:"27px"}}>
          <Baby className="w-7 h-7 mr-3 text-emerald-500" />
          不同年齡層的界線訓練 (P265-272)
        </h3>
        
        <div className="relative border-l-4 border-emerald-100 ml-4 md:ml-8 space-y-8 pb-4">
          {ages.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 md:pl-10"
            >
              <div className="absolute -left-[22px] top-1 bg-white p-1.5 rounded-full border-4 border-emerald-200 text-emerald-500 shadow-sm">
                <div className="w-4 h-4 rounded-full bg-emerald-500"></div>
              </div>
              <div className="bg-gradient-to-r from-slate-50 to-emerald-50/30 rounded-2xl p-6 md:p-8 border border-slate-100 hover:border-emerald-300 hover:shadow-lg transition-all flex flex-col">
                <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
                  <div className="flex items-center space-x-3">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-lg font-bold" style={{fontSize:"17px"}}>
                      {item.age}
                    </span>
                    <h4 className="font-bold text-slate-800" style={{fontSize:"23px"}}>{item.title}</h4>
                  </div>
                  <span className="font-medium text-slate-500 bg-white px-2 py-1 rounded-md border border-slate-200" style={{fontSize:"15px"}}>{item.page}</span>
                </div>
                <p className="text-slate-700 leading-relaxed mb-6 flex-grow" style={{fontSize:"19px"}}>
                  {item.desc}
                </p>
                <div className="bg-white p-5 rounded-xl border border-emerald-200 mt-auto mb-6">
                  <strong className="text-emerald-800 flex items-center mb-2" style={{fontSize:"19px"}}>
                    <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-600" />
                    父母的任務與焦點：
                  </strong>
                  <p className="text-slate-700 leading-relaxed mb-4" style={{fontSize:"19px"}}>{item.task}</p>
                  <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                    <strong className="text-emerald-700 flex items-center mb-2" style={{fontSize:"17px"}}>
                      <HeartHandshake className="w-4 h-4 mr-1.5" />
                      親子互動建議
                      <span className="ml-2 bg-emerald-200/80 text-emerald-800 px-2 py-0.5 rounded-full font-normal border border-emerald-300" style={{fontSize:"15px"}}>
                        💡 延伸實務應用 (非原書內容)
                      </span>：
                    </strong>
                    <p className="text-emerald-700 leading-relaxed" style={{fontSize:"17px"}}>{item.interaction}</p>
                  </div>
                </div>

                {/* Interactive Quiz & Actionable Steps */}
                <div className="mt-auto pt-6 border-t border-slate-200">
                  <button
                    onClick={() => setActiveQuiz(activeQuiz === item.id ? null : item.id)}
                    className="w-full py-3 px-4 bg-emerald-50 border-2 border-emerald-200 text-emerald-700 rounded-xl font-bold hover:bg-emerald-100 hover:border-emerald-300 transition-colors flex items-center justify-center"
                  >
                    <Brain className="w-5 h-5 mr-2" />
                    {activeQuiz === item.id ? '收起測驗與行動' : '隨堂測驗 & 行動指南'}
                  </button>

                  <AnimatePresence>
                    {activeQuiz === item.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 space-y-6">
                          {/* Quiz Section */}
                          <div className="bg-white rounded-xl p-5 border border-emerald-100 shadow-sm">
                            <h5 className="font-bold text-emerald-700 mb-3 flex items-center">
                              <Brain className="w-5 h-5 mr-2 text-emerald-500" />
                              理解測驗
                            </h5>
                            <p className="text-slate-700 font-medium mb-4">{item.quiz.question}</p>
                            <div className="space-y-2">
                              {item.quiz.options.map((option, optIdx) => (
                                <button
                                  key={optIdx}
                                  onClick={() => handleQuizAnswer(item.id, option.isCorrect)}
                                  className={`w-full text-left p-3 rounded-lg text-sm transition-all ${
                                    quizResults[item.id] !== undefined
                                      ? option.isCorrect
                                        ? 'bg-emerald-100 border-emerald-300 text-emerald-800'
                                        : 'bg-slate-50 border-slate-200 text-slate-400 opacity-50'
                                      : 'bg-white border-slate-200 text-slate-700 hover:border-emerald-300 hover:bg-emerald-50'
                                  } border`}
                                  disabled={quizResults[item.id] !== undefined}
                                >
                                  {option.text}
                                </button>
                              ))}
                            </div>
                            {quizResults[item.id] !== undefined && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`mt-4 p-3 rounded-lg flex items-start ${
                                  quizResults[item.id] ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                                }`}
                              >
                                {quizResults[item.id] ? (
                                  <CheckCircle2 className="w-5 h-5 mr-2 shrink-0 mt-0.5" />
                                ) : (
                                  <XCircle className="w-5 h-5 mr-2 shrink-0 mt-0.5" />
                                )}
                                <p className="font-medium" style={{fontSize:"17px"}}>
                                  {quizResults[item.id] ? item.quiz.feedback : '再想一想！請重新閱讀上方的任務與焦點。'}
                                </p>
                              </motion.div>
                            )}
                          </div>

                          {/* Actionable Steps Section */}
                          <div className="bg-white rounded-xl p-5 border border-emerald-100 shadow-sm">
                            <h5 className="font-bold text-teal-700 mb-3 flex items-center">
                              <Target className="w-5 h-5 mr-2 text-teal-500" />
                              具體行動步驟 (Actionable Steps)
                            </h5>
                            <ul className="space-y-3">
                              {item.actionableSteps.map((step, stepIdx) => (
                                <li key={stepIdx} className="flex items-start">
                                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold mr-3 mt-0.5" style={{fontSize:"17px"}}>
                                    {stepIdx + 1}
                                  </span>
                                  <span className="text-slate-700 leading-relaxed" style={{fontSize:"17px"}}>{step}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Reflection & Action Guide */}

        {/* 本章總結 */}
        <div className="bg-gradient-to-br from-teal-50 to-slate-50 border border-teal-100 rounded-2xl p-6 mb-6">
          <h3 className="font-bold text-teal-700 mb-2 flex items-center gap-2" style={{fontSize:"22px"}}>
            <span style={{fontSize:"24px"}}>📝</span> 第10章總結：界線與你的孩子
          </h3>
          <p className="text-slate-500 mb-5 leading-relaxed" style={{fontSize:"18px"}}>本章探討親子關係中的界線，從嬰兒期的發展需要，到青春期的界線挑戰，提供一個完整的藍圖，幫助父母理解如何在愛與限制之間找到平衡。</p>
          <div className="bg-blue-50 border-blue-200 border rounded-xl p-4 mb-3">
            <div className="font-bold text-blue-700 mb-1.5" style={{fontSize:"18px"}}>📖 孩子需要界線才能成長 <span style={{fontSize:"11px", fontWeight:"normal", opacity:0.7, marginLeft:"6px"}}>(P.240-248)</span></div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"18px"}}>作者指出，有界線的孩子是更有安全感的孩子——他們知道世界有規則、行為有後果，這讓他們感到安全而不是失控。缺乏界線的孩子雖然表面上「自由」，實際上卻活在一個讓他們焦慮的混沌中。設立清楚、一致的界線，是父母送給孩子最重要的禮物之一。</p>
          </div>
          <div className="bg-violet-50 border-violet-200 border rounded-xl p-4 mb-3">
            <div className="font-bold text-violet-700 mb-1.5" style={{fontSize:"18px"}}>🔍 不同發展階段的界線需要 <span style={{fontSize:"11px", fontWeight:"normal", opacity:0.7, marginLeft:"6px"}}>(P.248-260)</span></div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"18px"}}>嬰兒期需要完全的安撫和依附，不存在「寵壞」的問題；學步期孩子開始說「不」，這是健康的分離，父母要尊重這個「不」同時設立安全限制；青春期孩子需要更大的自主空間，但同時也需要清楚的底線和後果。作者強調，界線的形式會隨年齡改變，但界線本身從不消失。</p>
          </div>
          <div className="bg-amber-50 border-amber-200 border rounded-xl p-4 mb-3">
            <div className="font-bold text-amber-700 mb-1.5" style={{fontSize:"18px"}}>⚠️ 最常見的育兒界線錯誤 <span style={{fontSize:"11px", fontWeight:"normal", opacity:0.7, marginLeft:"6px"}}>(P.260-272)</span></div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"18px"}}>過度保護孩子、替他們承擔後果，是最常見也最具破壞力的界線失誤。當父母替孩子向老師道歉、替孩子還清他揮霍的零用錢、替孩子解決他的人際衝突，孩子就失去了學習責任感和解決問題能力的機會。善意的保護，可能正在培養一個無法在現實世界生存的成年人。</p>
          </div>
          <div className="bg-emerald-50 border-emerald-200 border rounded-xl p-4 mb-3">
            <div className="font-bold text-emerald-700 mb-1.5" style={{fontSize:"18px"}}>💡 本章的關鍵信息 <span style={{fontSize:"11px", fontWeight:"normal", opacity:0.7, marginLeft:"6px"}}>(P.240-272)</span></div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"18px"}}>做一個有界線的父母，不是嚴厲，而是清楚。「如果你這樣做，就會有這個後果」——然後溫和而堅定地執行。父母自己的界線健康程度，是孩子最真實的教材。你所展示的，比你所說的，對孩子的影響深遠得多。</p>
          </div>
        </div>

      <div className="bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-800 shadow-lg text-white mt-12">
        <h3 className="font-bold text-amber-300 mb-6 flex items-center" style={{fontSize:"27px"}}>
          <Brain className="w-7 h-7 mr-3" />
          深度反思與行動指南 <span className="ml-3 bg-slate-700/50 text-slate-300 px-2 py-1 rounded-full font-normal border border-slate-600" style={{fontSize:"15px"}}>💡 延伸應用 (非原書內容)</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="font-bold text-amber-200 mb-4 flex items-center" style={{fontSize:"23px"}}>
              <Brain className="w-5 h-5 mr-2 text-amber-400" />
              反思問題
            </h4>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start">
                <span className="text-amber-400 mr-2 font-bold">1.</span>
                我是否常常因為心軟或害怕孩子生氣，而撤回原本設定好的規矩和後果？
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2 font-bold">2.</span>
                我是在教導孩子「為自己的行為負責」，還是常常替他們解決問題（例如：幫他們做作業、送忘記帶的物品）？
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2 font-bold">3.</span>
                我是否常常把孩子的成功或失敗，當成是我自己作為父母的成功或失敗？
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2 font-bold">4.</span>
                當孩子遇到挫折時，我是急著幫他們解決，還是陪伴他們並讓他們學習自己面對？
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2 font-bold">5.</span>
                當孩子對我說「不」時，我是感到權威被挑戰而憤怒，還是能理解這是他們發展獨立性的過程？
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2 font-bold">6.</span>
                我是否為了讓孩子「開心」，而剝奪了他們學習「延遲滿足」和「承擔後果」的機會？
              </li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="font-bold text-emerald-300 mb-4 flex items-center" style={{fontSize:"23px"}}>
              <Target className="w-5 h-5 mr-2 text-emerald-400" />
              具體行動方案
            </h4>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">1.</span>
                與孩子一起制定一項家規，並明確約定違反時的「自然後果」（例如：不收玩具就沒收一天）。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">2.</span>
                當孩子因為承受後果而哭鬧時，提供同理心（「我知道你很難過」），但堅守界線（「但規矩還是規矩」）。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">3.</span>
                讓孩子承擔適合他們年齡的家務，並在他們沒有完成時，讓他們承擔自然後果（例如：沒洗衣服就沒有乾淨衣服穿）。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">4.</span>
                當孩子生氣或沮喪時，允許他們表達情緒，但不要為了安撫他們而改變你已經設定好的合理界線。
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
