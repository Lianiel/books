import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, ShieldCheck, Users, HeartCrack, Baby, Link, Scissors, ArrowRight, Brain, Target, CheckCircle2, XCircle } from 'lucide-react';

export default function SectionCh7() {
  const [activeQuiz, setActiveQuiz] = useState<number | null>(null);
  const [quizResults, setQuizResults] = useState<Record<number, boolean>>({});

  const handleQuizAnswer = (symptomIndex: number, isCorrect: boolean) => {
    setQuizResults(prev => ({ ...prev, [symptomIndex]: isCorrect }));
  };

  const symptoms = [
    { 
      title: "1. 感染病毒 (Catching the Virus)", 
      icon: <AlertTriangle className="w-6 h-6" />, 
      desc: "把原生家庭的互動模式與情緒傳染給現在的家庭。這表示你還沒有在情感上真正獨立，原生家庭的權力依然凌駕於你的新家庭之上。",
      example: "情境：每次跟父母通完電話或過完節，你就會變得沮喪、好辯或憤怒，並把這些情緒發洩在配偶或孩子身上。你在職場上可能是個自信的主管，但在父母面前卻退化成一個無助、害怕犯錯的小孩。",
      insight: "核心問題：你尚未獲得「情感獨立」的許可。你必須意識到，你現在的首要責任是你的配偶與新家庭，而不是維持原生家庭的舊有平衡。",
      page: "P185",
      quiz: {
        question: "當你每次跟父母通完電話後，都會對配偶發脾氣，這代表什麼？",
        options: [
          { text: "你工作壓力太大", isCorrect: false },
          { text: "你尚未在情感上真正獨立，原生家庭的情緒依然控制著你", isCorrect: true },
          { text: "你的配偶不夠體貼", isCorrect: false }
        ],
        feedback: "正確！這就是「感染病毒」，代表你還沒有在情感上脫離原生家庭的影響。"
      },
      actionableSteps: [
        "在與父母通話前，先做三次深呼吸，提醒自己：「我是個獨立的成年人，我不需要吸收他們的情緒。」",
        "通話後如果感到煩躁，先去散步或洗臉冷靜10分鐘，不要立刻與配偶對話。"
      ]
    },
    { 
      title: "2. 第二提琴手 (Second Fiddle)", 
      icon: <Users className="w-6 h-6" />, 
      desc: "配偶覺得自己永遠比不上你的父母。當配偶與父母發生衝突時，你總是站在父母那邊，或者為了不讓父母失望而犧牲配偶的感受。",
      example: "情境：原本答應和妻子慶祝結婚紀念日，但母親突然打電話來要求你過去幫忙修水管，你立刻取消了與妻子的約會，並認為「她是我媽，我能怎麼辦？」",
      insight: "核心問題：沒有真正「離開」。聖經說「人要離開父母，與妻子連合」，這代表配偶的地位必須高於父母。如果你不把配偶放在第一位，婚姻就無法建立真實的信任。",
      page: "P186",
      quiz: {
        question: "聖經說「人要離開父母，與妻子連合」，這在實際生活中意味著什麼？",
        options: [
          { text: "永遠不要再跟父母聯絡", isCorrect: false },
          { text: "在配偶與父母發生衝突時，優先考慮並保護配偶的感受", isCorrect: true },
          { text: "父母的意見永遠是對的", isCorrect: false }
        ],
        feedback: "正確！「聯合」意味著配偶是你新的首要忠誠對象。"
      },
      actionableSteps: [
        "當父母提出會影響你與配偶計畫的要求時，練習說：「我需要先跟我的配偶商量一下再回覆您。」",
        "每週安排一次專屬的「夫妻約會時間」，並向父母表明這段時間不接受任何打擾。"
      ]
    },
    { 
      title: "3. 經濟依賴 (Financial Dependence)", 
      icon: <HeartCrack className="w-6 h-6" />, 
      desc: "長不大的小孩症候群。成年後依然不斷接受父母的經濟援助（如：買房頭期款、代付信用卡帳單），導致失去自尊與為生活負責的能力。",
      example: "情境：父母幫你付了房子的頭期款，但附帶條件是他們擁有備用鑰匙，且可以隨時不請自來。當你抗議時，他們會說：「這房子我們也有出錢！」",
      insight: "核心問題：拿人手短。經濟依賴必然帶來控制。如果你想要擁有成年人的界線與自由，就必須承擔成年人的財務責任。寧可過得簡樸，也不要出賣自己的界線。",
      page: "P187",
      quiz: {
        question: "接受父母長期的經濟援助（如代付信用卡、買房頭期款）通常會帶來什麼後果？",
        options: [
          { text: "讓你更快達到財務自由", isCorrect: false },
          { text: "父母會因此獲得對你生活的控制權，讓你失去成年人的界線", isCorrect: true },
          { text: "增進家庭的凝聚力", isCorrect: false }
        ],
        feedback: "正確！經濟依賴必然帶來控制，要獲得自由就必須承擔財務責任。"
      },
      actionableSteps: [
        "列出目前所有接受父母金錢援助的項目，並制定一個具體的「財務獨立還款計畫」。",
        "拒絕父母帶有控制條件的禮物或金錢援助，寧可降低生活物質標準，也要換取自由。"
      ]
    },
    { 
      title: "4. 三角關係窮攪和 (Triangulation)", 
      icon: <Link className="w-6 h-6" />, 
      desc: "家庭成員之間不直接溝通，而是透過第三者來傳話或抱怨。這會製造不必要的敵人、流言蜚語，且永遠無法解決真正的問題。",
      example: "情境：媽媽對爸爸生氣，卻打電話向女兒訴苦，要女兒去勸爸爸。女兒夾在中間，感到極大的壓力和焦慮。",
      insight: "核心問題：缺乏直接面對衝突的勇氣。解決之道是建立規則：「如果你對某人有意見，請直接找他談。除非你要我陪你一起去面對他，否則請不要跟我抱怨他。」",
      page: "P190",
      quiz: {
        question: "當媽媽打電話向你抱怨爸爸時，最健康的界線回應是什麼？",
        options: [
          { text: "幫媽媽打電話去罵爸爸", isCorrect: false },
          { text: "溫和地說：「媽，如果你對爸有意見，請直接跟他說，我不想夾在中間。」", isCorrect: true },
          { text: "默默聽完然後自己生悶氣", isCorrect: false }
        ],
        feedback: "正確！拒絕成為傳話筒，鼓勵當事人直接溝通才能真正解決問題。"
      },
      actionableSteps: [
        "下次家人試圖向你抱怨另一個家人時，立刻溫和地打斷並請他們直接找當事人溝通。",
        "檢視自己是否也常透過第三者傳話，練習直接向對你有意見的人表達感受。"
      ]
    },
    { 
      title: "5. 到底誰才是孩子？ (Who's the Child?)", 
      icon: <Baby className="w-6 h-6" />, 
      desc: "共依存症（Codependency）。子女被迫照顧不成熟、情緒勒索或有成癮問題的父母。角色完全顛倒。",
      example: "情境：母親只要一感到孤單就會打電話哭訴，甚至威脅要傷害自己。你每次有獨立分開生活、去外地發展的念頭時，就會覺得自己是個「不孝、自私」的壞孩子。",
      insight: "核心問題：承擔了不屬於自己的重擔。你必須明白，你無法拯救父母，他們必須為自己的情緒和生活負責。你的責任是過好自己的人生。",
      page: "P192",
      quiz: {
        question: "當父母用情緒勒索（如哭訴、威脅）要求你陪伴時，你應該明白什麼？",
        options: [
          { text: "你是個不孝順的壞孩子", isCorrect: false },
          { text: "你無法拯救父母，他們必須為自己的情緒負責，你的責任是過好自己的人生", isCorrect: true },
          { text: "你必須放棄自己的生活來照顧他們", isCorrect: false }
        ],
        feedback: "正確！每個人都必須為自己的情緒負責，你無法替父母承擔他們的人生課題。"
      },
      actionableSteps: [
        "當父母情緒勒索時，練習在心裡默念：「我愛他們，但我不需要為他們的情緒負責。」",
        "逐漸減少因為內疚而答應的陪伴時間，將這些時間投資在建立自己的新生活圈。"
      ]
    },
    { 
      title: "6. 但我是你的手足！ (But I'm Your Brother!)", 
      icon: <Users className="w-6 h-6" />, 
      desc: "不負責任的手足利用親情勒索，要求你不斷為他們的錯誤買單，依賴你來逃避成長。",
      example: "情境：弟弟不斷換工作、欠債，每次走投無路就來找你借錢，並說：「我們是一家人，你怎麼能見死不救？」如果你不借，父母也會怪你不照顧弟弟。",
      insight: "核心問題：打破了因果律。你越是幫他擦屁股，他就越不需要長大。真正的愛是讓他面對自己行為的後果（飢餓、破產），這才是促使他改變的唯一動力。",
      page: "P193",
      quiz: {
        question: "當不負責任的手足不斷向你借錢逃避後果時，真正的愛是什麼？",
        options: [
          { text: "為了家庭和諧，繼續借錢給他", isCorrect: false },
          { text: "拒絕幫他擦屁股，讓他面對自己行為的自然後果，促使他成長", isCorrect: true },
          { text: "幫他找藉口騙父母", isCorrect: false }
        ],
        feedback: "正確！真正的愛是讓對方承擔後果，這才是促使他們改變的唯一動力。"
      },
      actionableSteps: [
        "堅定地告訴手足：「我愛你，但我不會再借錢給你，因為這對你的成長沒有幫助。」",
        "當手足因為你的拒絕而生氣或受苦時，忍住想去「拯救」他的衝動，讓他體驗後果。"
      ]
    }
  ];

  const solutions = [
    { step: 1, title: "找出病徵 (Identify the Symptom)", desc: "誠實檢視你的生活，找出你在哪裡失去了掌控權？是誰在控制你的情緒、時間和決定？承認問題的存在是改變的第一步。", page: "P197" },
    { step: 2, title: "尋找衝突點與需要 (Find the Conflict and Need)", desc: "明白你為什麼不斷妥協。很多時候，我們屈服於父母的控制，是因為我們內心深處仍然渴望得到他們從未給予的「無條件的愛與接納」。認清這個未滿足的需要。", page: "P197" },
    { step: 3, title: "接收並領受良善 (Take In the Good)", desc: "你無法在真空中建立界線。如果你切斷了原生家庭的依賴，你必須有新的來源。謙卑下來，尋求新的、健康的支持系統（如教會小組、諮商師、成熟的朋友），從他們那裡得到力量與愛。", page: "P198" },
    { step: 4, title: "練習立界線的技巧 (Practice Boundary Skills)", desc: "不要一開始就挑戰最難的對象（如強勢的母親）。先在安全的環境中（如支持小組）練習說「不」，然後應用到較安全的關係中，最後再面對原生家庭的核心衝突。", page: "P198" },
    { step: 5, title: "饒恕傷害你的人 (Forgive the Offender)", desc: "饒恕是單方面的放手，取消他們欠你的債務（例如：他們欠你一個快樂的童年）。只有當你不再期待他們償還、不再渴望他們改變時，你才能真正切斷鎖鏈，獲得情感上的自由。", page: "P199" }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-sky-50 rounded-3xl p-8 md:p-10 border border-indigo-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 font-bold mb-4" style={{fontSize:"17px"}}>
            Chapter 7
          </div>
          <h2 className="md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight" style={{fontSize:"33px"}}>
            界線與你的家庭
          </h2>
          <p className="text-slate-700 leading-relaxed max-w-3xl" style={{fontSize:"21px"}}>
            許多成年人每次回原生家庭就會陷入憂鬱與沮喪，這通常是因為他們還沒有獲得完全獨立的情感許可。聖經說「人要離開父母，與妻子連合」，這不僅是地理上的離開，更是情感、經濟與責任上的完全獨立。
          </p>
        </div>
      </div>

      {/* Core Concept: Leave and Cleave */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-6 flex items-center" style={{fontSize:"27px"}}>
          <Scissors className="w-7 h-7 mr-3 text-indigo-500" />
          核心觀念：離開與聯合 (Leave and Cleave) (P184)
        </h3>
        <p className="text-slate-600 mb-6" style={{fontSize:"21px"}}>
          在聖經的家庭觀中，成年是一個「轉換效忠對象」的過程。你必須先「離開」，才能真正地「聯合」。
        </p>
        <div className="flex flex-col md:flex-row gap-6 items-stretch">
          <div className="flex-1 bg-indigo-50 p-6 rounded-2xl border border-indigo-100 flex flex-col">
            <h4 className="font-bold text-indigo-800 mb-3 border-b border-indigo-200 pb-2" style={{fontSize:"23px"}}>離開 (Leave)</h4>
            <p className="text-slate-700 leading-relaxed mb-4 flex-grow">
              意味著切斷對原生家庭的依賴（包含經濟、情感、決策）。你不再是個「孩子」，而是一個獨立的成年人。父母的意見從「必須服從的命令」變成了「可以參考的建議」。
            </p>
            <div className="bg-white/60 p-3 rounded-lg text-indigo-900 font-medium" style={{fontSize:"17px"}}>
              標誌：你不再因為父母不認同你的決定而感到強烈的罪惡感。
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <ArrowRight className="w-8 h-8 text-indigo-300" />
          </div>
          <div className="flex-1 bg-blue-50 p-6 rounded-2xl border border-blue-100 flex flex-col">
            <h4 className="font-bold text-blue-800 mb-3 border-b border-blue-200 pb-2" style={{fontSize:"23px"}}>聯合 (Cleave)</h4>
            <p className="text-slate-700 leading-relaxed mb-4 flex-grow">
              意味著建立新的首要忠誠對象（配偶、自己的新家庭、或神呼召的社群）。當原生家庭與新家庭發生衝突時，你的首要責任是保護並優先考慮新家庭的需要。
            </p>
            <div className="bg-white/60 p-3 rounded-lg text-blue-900 font-medium" style={{fontSize:"17px"}}>
              標誌：在配偶與父母的衝突中，你堅定地與配偶站在同一陣線。
            </div>
          </div>
        </div>
      </div>

      {/* Symptoms Grid */}
      <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-8 flex items-center" style={{fontSize:"27px"}}>
          <AlertTriangle className="w-7 h-7 mr-3 text-indigo-500" />
          原生家庭界線不清的 6 大徵兆 (P185-193)
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {symptoms.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3 text-indigo-700">
                  <div className="bg-indigo-100 p-3 rounded-xl">
                    {item.icon}
                  </div>
                  <h4 className="font-bold" style={{fontSize:"23px"}}>{item.title}</h4>
                </div>
                <span className="font-medium text-slate-500 bg-white px-2 py-1 rounded-md border border-slate-200" style={{fontSize:"15px"}}>{item.page}</span>
              </div>
              
              <div className="space-y-4 flex-grow">
                <p className="text-slate-700 leading-relaxed" style={{fontSize:"19px"}}>
                  {item.desc}
                </p>
                <div className="bg-white p-4 rounded-xl border border-slate-100">
                  <strong className="text-slate-800 block mb-1" style={{fontSize:"17px"}}>📝 具體情境：</strong>
                  <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>{item.example}</p>
                </div>
                <div className="bg-indigo-50/50 p-4 rounded-xl border border-indigo-100">
                  <strong className="text-indigo-800 block mb-1" style={{fontSize:"17px"}}>💡 深度洞察：</strong>
                  <p className="text-indigo-900/80 leading-relaxed" style={{fontSize:"17px"}}>{item.insight}</p>
                </div>
              </div>

              {/* Interactive Quiz & Actionable Steps */}
              <div className="mt-6 pt-6 border-t border-slate-200">
                <button
                  onClick={() => setActiveQuiz(activeQuiz === idx ? null : idx)}
                  className="w-full py-3 px-4 bg-white border-2 border-indigo-100 text-indigo-700 rounded-xl font-bold hover:bg-indigo-50 hover:border-indigo-200 transition-colors flex items-center justify-center"
                >
                  <Brain className="w-5 h-5 mr-2" />
                  {activeQuiz === idx ? '收起測驗與行動' : '隨堂測驗 & 行動指南'}
                </button>

                <AnimatePresence>
                  {activeQuiz === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 space-y-6">
                        {/* Quiz Section */}
                        <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-100">
                          <h5 className="font-bold text-indigo-900 mb-3 flex items-center">
                            <Brain className="w-5 h-5 mr-2 text-indigo-600" />
                            理解測驗
                          </h5>
                          <p className="text-slate-700 font-medium mb-4">{item.quiz.question}</p>
                          <div className="space-y-2">
                            {item.quiz.options.map((option, optIdx) => (
                              <button
                                key={optIdx}
                                onClick={() => handleQuizAnswer(idx, option.isCorrect)}
                                className={`w-full text-left p-3 rounded-lg text-sm transition-all ${
                                  quizResults[idx] !== undefined
                                    ? option.isCorrect
                                      ? 'bg-emerald-100 border-emerald-300 text-emerald-800'
                                      : 'bg-slate-100 border-slate-200 text-slate-500 opacity-50'
                                    : 'bg-white border-slate-200 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50'
                                } border`}
                                disabled={quizResults[idx] !== undefined}
                              >
                                {option.text}
                              </button>
                            ))}
                          </div>
                          {quizResults[idx] !== undefined && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className={`mt-4 p-3 rounded-lg flex items-start ${
                                quizResults[idx] ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                              }`}
                            >
                              {quizResults[idx] ? (
                                <CheckCircle2 className="w-5 h-5 mr-2 shrink-0 mt-0.5" />
                              ) : (
                                <XCircle className="w-5 h-5 mr-2 shrink-0 mt-0.5" />
                              )}
                              <p className="font-medium" style={{fontSize:"17px"}}>
                                {quizResults[idx] ? item.quiz.feedback : '再想一想！請重新閱讀上方的情境與洞察。'}
                              </p>
                            </motion.div>
                          )}
                        </div>

                        {/* Actionable Steps Section */}
                        <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100">
                          <h5 className="font-bold text-emerald-900 mb-3 flex items-center">
                            <Target className="w-5 h-5 mr-2 text-emerald-600" />
                            具體行動步驟 (Actionable Steps)
                          </h5>
                          <ul className="space-y-3">
                            {item.actionableSteps.map((step, stepIdx) => (
                              <li key={stepIdx} className="flex items-start">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-200 text-emerald-700 flex items-center justify-center font-bold mr-3 mt-0.5" style={{fontSize:"17px"}}>
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
            </motion.div>
          ))}
        </div>
      </div>

      {/* Solutions */}
      <div className="bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-700 shadow-sm text-white">
        <h3 className="font-bold text-indigo-300 mb-8 flex items-center" style={{fontSize:"27px"}}>
          <ShieldCheck className="w-7 h-7 mr-3" />
          解決家庭界線問題的 5 個步驟 (P197-199)
        </h3>
        
        <div className="space-y-6">
          {solutions.map((item) => (
            <motion.div 
              key={item.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-start space-x-5 bg-slate-700/40 p-6 rounded-2xl border border-slate-600 hover:bg-slate-700/60 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center font-bold shadow-inner text-white" style={{fontSize:"23px"}}>
                {item.step}
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-indigo-200" style={{fontSize:"23px"}}>{item.title}</h4>
                  <span className="font-medium text-slate-400 bg-slate-800 px-2 py-1 rounded-md border border-slate-600" style={{fontSize:"15px"}}>{item.page}</span>
                </div>
                <p className="text-slate-300 leading-relaxed" style={{fontSize:"19px"}}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Reflection & Action Guide */}

        {/* 本章總結 */}
        <div className="bg-gradient-to-br from-teal-50 to-slate-50 border border-teal-100 rounded-2xl p-6 mb-6">
          <h3 className="font-bold text-teal-700 mb-2 flex items-center gap-2" style={{fontSize:"22px"}}>
            <span style={{fontSize:"24px"}}>📝</span> 第7章總結：界線與你的家庭
          </h3>
          <p className="text-slate-500 mb-5 leading-relaxed" style={{fontSize:"18px"}}>本章聚焦於最具挑戰性的界線戰場——原生家庭。作者指出，許多成年人雖然已經在身體上離開了家，卻從未在情感上真正獨立。這種「情感上的未離家」，會嚴重影響他們的婚姻、親子關係和靈性成長。</p>
          <div className="bg-blue-50 border-blue-200 border rounded-xl p-4 mb-3">
            <div className="font-bold text-blue-700 mb-1.5" style={{fontSize:"18px"}}>📖 家庭界線失衡的六大症狀</div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"20px"}}>本章列出六種常見的家庭界線問題：把原生家庭的互動模式移植到現在的家庭、配偶長期感到被排在父母之後、「長不大症候群」（成年後仍依賴父母的經濟支持）、三角關係溝通（不直接溝通，而是透過第三者傳話）、子女被迫照顧不成熟的父母（角色顛倒）、被不負責任的手足勒索情感。</p>
          </div>
          <div className="bg-violet-50 border-violet-200 border rounded-xl p-4 mb-3">
            <div className="font-bold text-violet-700 mb-1.5" style={{fontSize:"18px"}}>🔍 情感上的離家：最難的功課</div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"20px"}}>作者強調，真正的「成年」不只是年齡上的成熟，而是情感上的獨立——你愛你的父母，但你不再需要他們的認可才能感到安全；你尊重他們，但你的生命方向由神和你自己決定，而不是由他們的期望決定。這個離家的過程，往往需要刻意的努力和支持。</p>
          </div>
          <div className="bg-amber-50 border-amber-200 border rounded-xl p-4 mb-3">
            <div className="font-bold text-amber-700 mb-1.5" style={{fontSize:"18px"}}>⚠️ 已婚者的特別挑戰</div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"20px"}}>聖經說：「人要離開父母，與妻子連合」（創二24）。這個「離開」不只是地理上的，更是情感和忠誠上的優先次序的重新排列。對已婚者而言，配偶的需要應該優先於父母的期望（在合理的範圍內）。若你的父母仍然能用罪惡感或憤怒來控制你的婚姻決定，那是一個需要正視的界線問題。</p>
          </div>
          <div className="bg-emerald-50 border-emerald-200 border rounded-xl p-4 mb-3">
            <div className="font-bold text-emerald-700 mb-1.5" style={{fontSize:"18px"}}>💡 本章的關鍵信息</div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"20px"}}>對家人設立界線，不是要切斷關係，而是要讓關係建立在更真實、更健康的基礎上。有時候，真正的愛需要你說出一些讓對方不舒服的真話，或是拒絕繼續扮演一個讓雙方都不健康的角色。設立界線，可能是你給家人最深的愛的一種方式。</p>
          </div>
        </div>

      <div className="bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-800 shadow-lg text-white mt-12">
        <h3 className="font-bold text-orange-300 mb-6 flex items-center" style={{fontSize:"27px"}}>
          <Brain className="w-7 h-7 mr-3" />
          深度反思與行動指南 <span className="ml-3 bg-slate-700/50 text-slate-300 px-2 py-1 rounded-full font-normal border border-slate-600" style={{fontSize:"15px"}}>💡 延伸應用 (非原書內容)</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="font-bold text-orange-200 mb-4 flex items-center" style={{fontSize:"23px"}}>
              <Brain className="w-5 h-5 mr-2 text-orange-400" />
              反思問題
            </h4>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start">
                <span className="text-orange-400 mr-2 font-bold">1.</span>
                我是否還在情感或經濟上依賴原生家庭？在配偶與父母發生衝突時，我通常站在哪一邊？
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2 font-bold">2.</span>
                我是否常常陷入家庭的「三角關係」中（例如聽母親抱怨父親），而不敢直接請他們自己解決？
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2 font-bold">3.</span>
                在家族聚會中，我是否常常扮演「和平製造者」的角色，甚至不惜犧牲自己的底線來維持表面和諧？
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2 font-bold">4.</span>
                我是否為了獲得父母的讚賞或避免他們的失望，而放棄了自己對職業或婚姻的選擇？
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2 font-bold">5.</span>
                我是否常常把配偶對我原生家庭的合理界線要求，視為對我父母的攻擊？
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-2 font-bold">6.</span>
                我在經濟上或情感上，是否還期待父母能彌補我童年時期的遺憾，而遲遲不肯長大？
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
                檢視一項你目前仍依賴父母的事物（如：金錢、做決定）。制定一個計畫，在未來三個月內收回這項責任。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">2.</span>
                下次家人試圖把你拉進三角關係時，溫和地說：「我愛你們，但我不想介入你們的衝突，請你們直接跟對方談。」
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">3.</span>
                制定一個「節日界線計畫」：在下一次家庭聚會前，先決定好你要停留的時間，以及遇到不舒服話題時的應對方式。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">4.</span>
                練習「離開父母，與妻子/丈夫連合」：在做重大決定時，優先與配偶商量，而不是先徵詢父母的意見。
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
