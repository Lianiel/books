import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Scale, MessageCircle, ShieldAlert, Users, HeartCrack, Info, ShieldCheck, Zap, AlertTriangle, Brain, Target, CheckCircle2, XCircle } from 'lucide-react';

export default function SectionCh9() {
  const [activeQuiz, setActiveQuiz] = useState<number | null>(null);
  const [quizResults, setQuizResults] = useState<Record<number, boolean>>({});

  const handleQuizAnswer = (lawId: number, isCorrect: boolean) => {
    setQuizResults(prev => ({ ...prev, [lawId]: isCorrect }));
  };

  const marriageLaws = [
    {
      id: 1,
      title: "種與收的律 (Sowing and Reaping)",
      desc: "這是聖經中最基本的因果法則。在婚姻中，這意味著不要拯救配偶脫離他們自己不負責任所造成的後果。",
      warning: "如果丈夫揮霍無度導致卡債累累，妻子不應該去兼第二份工作來幫他還債，而是應該將財務分開。替配偶承擔後果看似是「愛」，實際上是「縱容」，這會摧毀婚姻的根基。",
      quiz: {
        question: "當配偶因為睡過頭而快要遲到時，運用「種與收的律」你應該怎麼做？",
        options: [
          { text: "趕快幫他打電話向老闆請假", isCorrect: false },
          { text: "讓他自己承擔遲到的後果，不介入拯救", isCorrect: true },
          { text: "大聲責罵他為什麼不早點起床", isCorrect: false }
        ],
        feedback: "正確！讓他自己承擔自然後果，是促使他改變不負責任行為的唯一方法。"
      },
      actionableSteps: [
        "列出一件你經常替配偶「擦屁股」的事（如：找找不到的鑰匙、收拾亂丟的衣服），並決定從今天起停止這麼做。",
        "當配偶因為自己的行為而面臨後果時，給予同理心（「我知道這很難受」），但不要出手拯救。"
      ]
    },
    {
      id: 2,
      title: "責任律 (Responsibility)",
      desc: "我們對配偶有責任（去愛、去關心），但我們不對配偶的行為負責。設定限制是一種愛的行動，藉著限制邪惡，良善才得以受到保護。",
      warning: "當配偶有成癮問題（如酗酒、賭博）時，你不能替他戒酒，但你有責任保護自己和孩子免受其害（例如：要求他搬出去直到他願意接受治療）。",
      quiz: {
        question: "在婚姻中，我們對配偶的「責任」界線在哪裡？",
        options: [
          { text: "我們必須為配偶的快樂和成功負全責", isCorrect: false },
          { text: "我們對他們有愛的責任，但不對他們的行為和選擇負責", isCorrect: true },
          { text: "我們只需要管好自己，不需要關心配偶", isCorrect: false }
        ],
        feedback: "正確！我們負責去愛，但每個人必須為自己的行為和情緒負責。"
      },
      actionableSteps: [
        "當配偶情緒低落時，練習只傾聽和陪伴，而不是立刻覺得「我必須讓他開心起來」。",
        "如果配偶有傷害家庭的行為，尋求專業協助，並設立保護自己和孩子的物理或財務界線。"
      ]
    },
    {
      id: 3,
      title: "能力律 (Power)",
      desc: "你沒有能力改變配偶的個性或行為，你只能改變「自己對他們的回應」。停止試圖改變對方，專注於設立自己的底線。",
      warning: "與其每天嘮叨配偶不幫忙做家事（試圖改變他），不如改變自己的回應：「如果你不把髒衣服放進洗衣籃，我就不幫你洗。」（設立底線並執行）。",
      quiz: {
        question: "當你希望配偶改變某個壞習慣時，最有效的方法是什麼？",
        options: [
          { text: "不斷地提醒和嘮叨，直到他改變", isCorrect: false },
          { text: "改變自己對他壞習慣的回應方式，並設立自己的底線", isCorrect: true },
          { text: "用冷戰或生氣來懲罰他", isCorrect: false }
        ],
        feedback: "正確！你無法改變別人，只能改變自己。當你的回應改變了，關係的動態就會隨之改變。"
      },
      actionableSteps: [
        "停止對配偶的某個小缺點嘮叨一週，觀察這對你們的關係氣氛有什麼影響。",
        "針對配偶一個會影響到你的行為，設定一個「我會怎麼做」的界線（例如：「如果你對我大吼，我就會離開房間」）。"
      ]
    },
    {
      id: 4,
      title: "評估律 (Evaluation)",
      desc: "設定界線時，配偶可能會感到受傷或生氣。但要區分「受傷(hurt)」與「受害(harm)」。",
      warning: "牙醫拔牙會讓你受傷（痛），但不會讓你受害（反而治好牙痛）；縱容配偶的惡習不會讓他受傷（當下很爽），但才是真正的受害。不要因為怕對方生氣就撤回界線。",
      quiz: {
        question: "當你設立界線後，配偶感到生氣和受傷，這代表什麼？",
        options: [
          { text: "你做錯了，應該立刻道歉並撤回界線", isCorrect: false },
          { text: "這很正常，界線會帶來短暫的痛苦（受傷），但長遠來看是保護關係（不受害）", isCorrect: true },
          { text: "代表他不愛你了", isCorrect: false }
        ],
        feedback: "正確！區分「受傷」和「受害」很重要，不要因為對方短暫的不悅而放棄長遠的健康。"
      },
      actionableSteps: [
        "當你設立界線而配偶生氣時，練習在心裡對自己說：「他的生氣是正常的，但我沒有做錯，我不需要撤回界線。」",
        "在平靜的時候，與配偶分享「受傷」與「受害」的觀念，幫助雙方理解界線的真正意義。"
      ]
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-rose-50 via-red-50 to-pink-50 rounded-3xl p-8 md:p-10 border border-rose-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-sm font-bold mb-4">
            Chapter 9
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            界線與你的配偶
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed max-w-3xl">
            在所有的人際關係中，婚姻裡的界線是最常使人感到困惑的。婚姻的目的是要「成為一體」，但界線卻鼓勵人要分離。事實上，兩個人在結婚的那一天成為一體，但並不因此就失去了個人的身分。健康的婚姻是由兩個「完整且獨立」的個體所組成，而不是兩個殘缺的人拼湊成一個。
          </p>
        </div>
      </div>

      {/* What's mine, yours, ours */}
      <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
          <Users className="w-7 h-7 mr-3 text-rose-500" />
          這是你的、我的，還是我們的？(P221-225)
        </h3>
        <p className="text-slate-600 mb-8 text-lg">
          婚姻中最常見的問題，就是把對方的責任攬在自己身上，或者要求對方為自己的情緒負責。我們必須清楚劃分什麼是「我的責任」，什麼是「你的責任」。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100 hover:shadow-md transition-shadow">
            <HeartCrack className="w-8 h-8 text-rose-500 mb-4" />
            <h4 className="font-bold text-rose-800 mb-3 text-xl">感覺 (Feelings)</h4>
            <p className="text-base text-slate-700 leading-relaxed mb-4">
              你不能為配偶的壞心情負責，配偶也不能為你的快樂負責。當配偶生氣時，不要立刻覺得「我一定做錯了什麼」而急著去安撫或討好。
            </p>
            <div className="bg-white/60 p-3 rounded-lg text-sm text-rose-900 font-medium">
              正確做法：坦承自己的脆弱（如：「我感覺孤單」），而不是用指責的方式（如：「你都不在乎我」）。
            </div>
          </div>
          <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100 hover:shadow-md transition-shadow">
            <Heart className="w-8 h-8 text-rose-500 mb-4" />
            <h4 className="font-bold text-rose-800 mb-3 text-xl">渴望 (Desires)</h4>
            <p className="text-base text-slate-700 leading-relaxed mb-4">
              沒有人可以想要什麼就得到什麼。當配偶無法滿足你的渴望（例如：想要一個浪漫的週末，但他要加班）時，是你自己要為內心的失落哀傷。
            </p>
            <div className="bg-white/60 p-3 rounded-lg text-sm text-rose-900 font-medium">
              錯誤做法：透過懲罰、冷戰、擺臭臉來逼迫對方就範，這是一種情緒勒索。
            </div>
          </div>
          <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100 hover:shadow-md transition-shadow">
            <ShieldAlert className="w-8 h-8 text-rose-500 mb-4" />
            <h4 className="font-bold text-rose-800 mb-3 text-xl">付出的限制 (Limits)</h4>
            <p className="text-base text-slate-700 leading-relaxed mb-4">
              聖經說要「甘心樂意」地給予。如果付出超越了你愛的能力範圍（例如：過度透支體力、長期忍受言語虐待），最終必然轉變成不滿與怨恨。
            </p>
            <div className="bg-white/60 p-3 rounded-lg text-sm text-rose-900 font-medium">
              正確做法：誠實評估自己的極限，並勇敢說出「我現在無法給予更多了」。
            </div>
          </div>
        </div>
      </div>

      {/* Applying Laws in Marriage */}
      <div className="bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-700 shadow-sm text-white">
        <h3 className="text-2xl font-bold text-rose-300 mb-8 flex items-center">
          <Scale className="w-7 h-7 mr-3" />
          在婚姻中運用界線定律 (P227-230)
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {marriageLaws.map((law) => (
            <div key={law.id} className="bg-slate-700/50 p-6 rounded-2xl border border-slate-600 hover:bg-slate-700 transition-colors flex flex-col h-full">
              <h4 className="font-bold text-rose-400 mb-3 text-xl flex items-center">
                <span className="bg-rose-500/20 p-2 rounded-lg mr-3 text-rose-300">{law.id}</span>
                {law.title}
              </h4>
              <p className="text-base text-slate-300 leading-relaxed mb-4 flex-grow">
                {law.desc}
              </p>
              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-600/50 mb-6">
                <strong className="text-rose-300 text-sm block mb-1">⚠️ 應用與警告：</strong>
                <p className="text-sm text-slate-400">{law.warning}</p>
              </div>

              {/* Interactive Quiz & Actionable Steps */}
              <div className="mt-auto pt-6 border-t border-slate-600">
                <button
                  onClick={() => setActiveQuiz(activeQuiz === law.id ? null : law.id)}
                  className="w-full py-3 px-4 bg-slate-800 border-2 border-rose-900/50 text-rose-300 rounded-xl font-bold hover:bg-slate-700 hover:border-rose-500/50 transition-colors flex items-center justify-center"
                >
                  <Brain className="w-5 h-5 mr-2" />
                  {activeQuiz === law.id ? '收起測驗與行動' : '隨堂測驗 & 行動指南'}
                </button>

                <AnimatePresence>
                  {activeQuiz === law.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 space-y-6">
                        {/* Quiz Section */}
                        <div className="bg-slate-800 rounded-xl p-5 border border-slate-600">
                          <h5 className="font-bold text-rose-300 mb-3 flex items-center">
                            <Brain className="w-5 h-5 mr-2 text-rose-400" />
                            理解測驗
                          </h5>
                          <p className="text-slate-300 font-medium mb-4">{law.quiz.question}</p>
                          <div className="space-y-2">
                            {law.quiz.options.map((option, optIdx) => (
                              <button
                                key={optIdx}
                                onClick={() => handleQuizAnswer(law.id, option.isCorrect)}
                                className={`w-full text-left p-3 rounded-lg text-sm transition-all ${
                                  quizResults[law.id] !== undefined
                                    ? option.isCorrect
                                      ? 'bg-emerald-900/50 border-emerald-500/50 text-emerald-300'
                                      : 'bg-slate-700 border-slate-600 text-slate-400 opacity-50'
                                    : 'bg-slate-700 border-slate-600 text-slate-300 hover:border-rose-500/50 hover:bg-slate-600'
                                } border`}
                                disabled={quizResults[law.id] !== undefined}
                              >
                                {option.text}
                              </button>
                            ))}
                          </div>
                          {quizResults[law.id] !== undefined && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className={`mt-4 p-3 rounded-lg flex items-start ${
                                quizResults[law.id] ? 'bg-emerald-900/50 text-emerald-300' : 'bg-rose-900/50 text-rose-300'
                              }`}
                            >
                              {quizResults[law.id] ? (
                                <CheckCircle2 className="w-5 h-5 mr-2 shrink-0 mt-0.5" />
                              ) : (
                                <XCircle className="w-5 h-5 mr-2 shrink-0 mt-0.5" />
                              )}
                              <p className="text-sm font-medium">
                                {quizResults[law.id] ? law.quiz.feedback : '再想一想！請重新閱讀上方的應用與警告。'}
                              </p>
                            </motion.div>
                          )}
                        </div>

                        {/* Actionable Steps Section */}
                        <div className="bg-slate-800 rounded-xl p-5 border border-slate-600">
                          <h5 className="font-bold text-emerald-400 mb-3 flex items-center">
                            <Target className="w-5 h-5 mr-2 text-emerald-500" />
                            具體行動步驟 (Actionable Steps)
                          </h5>
                          <ul className="space-y-3">
                            {law.actionableSteps.map((step, stepIdx) => (
                              <li key={stepIdx} className="flex items-start">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-900/50 text-emerald-400 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                                  {stepIdx + 1}
                                </span>
                                <span className="text-slate-300 text-sm leading-relaxed">{step}</span>
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
          ))}
        </div>
      </div>

      {/* Exposure Law */}
      <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
          <MessageCircle className="w-7 h-7 mr-3 text-rose-500" />
          揭露律：溝通你的界線 (P231)
        </h3>
        <p className="text-slate-600 mb-8 text-lg">
          界線必須被看見和聽見。如果你只在心裡生悶氣，配偶永遠不知道你的底線在哪裡。被動攻擊（如嘆氣、摔門）是無效的溝通。以下是婚姻中需要明確溝通的界線：
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-rose-200 transition-colors">
            <strong className="text-rose-700 block mb-2 text-xl">皮膚 (Physical)</strong>
            <p className="text-base text-slate-600">尊重彼此身體上的界線，絕對免於暴力或任何形式的身體虐待。這是不容妥協的底線。</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-rose-200 transition-colors">
            <strong className="text-rose-700 block mb-2 text-xl">話語 (Words)</strong>
            <p className="text-base text-slate-600">直接面對另一半，不要拐彎抹角，好好說「不」。拒絕言語暴力、諷刺和輕蔑的態度。</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-rose-200 transition-colors">
            <strong className="text-rose-700 block mb-2 text-xl">事實 (Truth)</strong>
            <p className="text-base text-slate-600">誠實的溝通一向是最好的策略。隱瞞（如隱瞞債務、行蹤）和欺騙會徹底破壞婚姻的信任根基。</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-rose-200 transition-colors">
            <strong className="text-rose-700 block mb-2 text-xl">身體的距離 (Space)</strong>
            <p className="text-base text-slate-600">需要獨處時直接告訴配偶：「我現在需要半小時安靜一下」，不要讓對方瞎猜或覺得被拒絕。</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-rose-200 transition-colors">
            <strong className="text-rose-700 block mb-2 text-xl">情感的距離 (Emotional)</strong>
            <p className="text-base text-slate-600">婚姻出嚴重問題時（如外遇、成癮），需要情感上的距離來重新練習信任，直到對方有真實的改變，而不是立刻假裝沒事。</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-rose-200 transition-colors">
            <strong className="text-rose-700 block mb-2 text-xl">時間 (Time)</strong>
            <p className="text-base text-slate-600">夫妻雙方都需要有自己的時間做自己的事、發展自己的興趣和友誼。婚姻不是24小時黏在一起。</p>
          </div>
        </div>
      </div>

      {/* Submission Myth */}
      <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-3xl p-8 md:p-10 border border-rose-200 shadow-sm">
        <h3 className="text-2xl font-bold text-rose-900 mb-6 flex items-center">
          <ShieldCheck className="w-7 h-7 mr-3 text-rose-600" />
          破除迷思：順服的真義 (P233)
        </h3>
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          <div className="flex-1">
            <p className="text-rose-800 leading-relaxed text-xl font-bold mb-4">
              「可是如果我設界線，聽起來是不是很不順服？聖經不是要妻子順服丈夫嗎？」
            </p>
            <p className="text-slate-700 leading-relaxed text-lg mb-4">
              這是一個常被誤解和濫用的觀念。聖經中（如以弗所書5章）的順服，必須是婚姻中任一方自己的<strong>「自由選擇」</strong>。基督從來不會想要挪去我們的意願，更不會強迫我們超出自己的限制。
            </p>
            <p className="text-slate-700 leading-relaxed text-lg">
              奴隸式的順服（出於恐懼、被控制、不敢說不）在聖經中是站不住腳的。真正的順服只能存在於兩個擁有完全自由的人之間。當你出於愛而「選擇」放下自己的權利時，那才是真正的順服。
            </p>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-rose-100 shadow-sm md:w-1/3 flex flex-col justify-center">
            <Zap className="w-10 h-10 text-rose-500 mb-4" />
            <p className="text-base text-slate-800 italic font-medium leading-relaxed">
              「如果妻子沒有權利說『不』，那麼她的『好』也就毫無意義。沒有自由，就沒有真愛。強迫的順服，只是另一種形式的奴役。」
            </p>
          </div>
        </div>
      </div>
      {/* Reflection & Action Guide */}

        {/* 本章總結 */}
        <div className="bg-gradient-to-br from-teal-50 to-slate-50 border border-teal-100 rounded-2xl p-6 mb-6">
          <h3 className="text-base font-bold text-teal-700 mb-2 flex items-center gap-2">
            <span className="text-lg">📝</span> 第9章總結：界線與你的配偶
          </h3>
          <p className="text-slate-500 text-xs mb-5 leading-relaxed">婚姻是最親密的關係，也是界線最難設立、卻最關鍵的地方。本章針對婚姻中常見的界線問題提供深入分析，並特別探討如何在面對配偶的問題行為時，用界線來帶來真正的改變。</p>
          <div className="bg-blue-50 border-blue-200 border rounded-xl p-4 mb-3">
            <div className="text-xs font-bold text-blue-700 mb-1.5">📖 婚姻中的界線問題</div>
            <p className="text-slate-600 text-sm leading-relaxed">許多婚姻的痛苦根源於界線的混亂：一方過度承擔，另一方無限索取；一方不斷討好，另一方習以為常；一方壓抑情緒，積累到爆發；一方試圖改變對方，兩人都精疲力盡。這些模式往往反映了雙方在成長過程中所習得的關係腳本。</p>
          </div>
          <div className="bg-violet-50 border-violet-200 border rounded-xl p-4 mb-3">
            <div className="text-xs font-bold text-violet-700 mb-1.5">🔍 「種豆得豆」在婚姻中的應用</div>
            <p className="text-slate-600 text-sm leading-relaxed">作者強調，設立界線在婚姻中最難、也最重要的應用，是「讓配偶承擔自己行為的後果」。若配偶有酗酒、暴力、不忠或財務不負責任等問題，一再替他收拾殘局只會讓問題持續。真正的愛有時需要讓對方「觸底」，才能激發真正的改變。</p>
          </div>
          <div className="bg-amber-50 border-amber-200 border rounded-xl p-4 mb-3">
            <div className="text-xs font-bold text-amber-700 mb-1.5">⚠️ 愛需要兩個有界線的個體</div>
            <p className="text-slate-600 text-sm leading-relaxed">作者提出一個重要觀點：健康的婚姻需要兩個有自我的人。若其中一方沒有自我（永遠讓步、永遠迎合），婚姻就會失去張力和真實性。你對配偶說「不」，有時反而是在給對方一個機會去真實地面對自己、和真實的你相遇，而不只是和你的「假笑」相遇。</p>
          </div>
          <div className="bg-emerald-50 border-emerald-200 border rounded-xl p-4 mb-3">
            <div className="text-xs font-bold text-emerald-700 mb-1.5">💡 本章的關鍵信息</div>
            <p className="text-slate-600 text-sm leading-relaxed">在婚姻中設立界線，目的不是懲罰或報復，而是保護關係中的「良善」，並讓「邪惡」承擔後果。這需要極大的智慧、禱告和往往需要專業的輔導支持。若你的婚姻中有嚴重的問題，設立界線是你能為這段婚姻做的最真實的事之一。</p>
          </div>
        </div>

      <div className="bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-800 shadow-lg text-white mt-12">
        <h3 className="text-2xl font-bold text-rose-300 mb-6 flex items-center">
          <Brain className="w-7 h-7 mr-3" />
          深度反思與行動指南 <span className="ml-3 text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded-full font-normal border border-slate-600">💡 延伸應用 (非原書內容)</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="text-xl font-bold text-rose-200 mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-rose-400" />
              反思問題
            </h4>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start">
                <span className="text-rose-400 mr-2 font-bold">1.</span>
                在婚姻/親密關係中，我是否常常用「順服」來掩飾自己的恐懼，而不是出於自由的愛？
              </li>
              <li className="flex items-start">
                <span className="text-rose-400 mr-2 font-bold">2.</span>
                當伴侶越界時，我是默默忍受、被動攻擊，還是能溫和且堅定地表達我的底線？
              </li>
              <li className="flex items-start">
                <span className="text-rose-400 mr-2 font-bold">3.</span>
                在親密關係中，我是否常常期待伴侶能「讀懂我的心」，而不是直接表達我的需求？
              </li>
              <li className="flex items-start">
                <span className="text-rose-400 mr-2 font-bold">4.</span>
                當伴侶的行為傷害到我時，我是選擇默默忍受以維持和平，還是願意冒著衝突的風險說出實話？
              </li>
              <li className="flex items-start">
                <span className="text-rose-400 mr-2 font-bold">5.</span>
                當配偶情緒低落或生氣時，我是否能區分「這是他的情緒」而不是「我做錯了什麼」？
              </li>
              <li className="flex items-start">
                <span className="text-rose-400 mr-2 font-bold">6.</span>
                我是否常常用冷戰、嘆氣等「被動攻擊」的方式來表達不滿，而不是直接說出我的界線？
              </li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="text-xl font-bold text-emerald-300 mb-4 flex items-center">
              <Target className="w-5 h-5 mr-2 text-emerald-400" />
              具體行動方案
            </h4>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">1.</span>
                與伴侶進行一次「界線對話」：分享一件你覺得不舒服的小事，並表達你希望未來如何處理。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">2.</span>
                停止為伴侶的不負責任（如：遲到、亂花錢）承擔後果，讓他們自己面對。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">3.</span>
                建立「暫停機制」：當夫妻爭吵即將失控時，約定一個暗號暫停對話，等雙方冷靜後再繼續討論。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">4.</span>
                練習「不帶指責的表達」：告訴配偶你需要什麼，而不是指責他們沒做什麼（例如：「我需要你幫忙做家事」，而不是「你都不做家事」）。
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
