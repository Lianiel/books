import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale, Sprout, ShieldAlert, HeartHandshake, Eye, MessageSquare, Activity, Zap, Users, Lock, Brain, Target, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function SectionLaws() {
  const [activeQuiz, setActiveQuiz] = useState<number | null>(null);
  const [quizResults, setQuizResults] = useState<Record<number, boolean | null>>({});

  const handleQuizAnswer = (lawId: number, isCorrect: boolean) => {
    setQuizResults(prev => ({ ...prev, [lawId]: isCorrect }));
  };

  const laws = [
    { 
      id: 1, 
      title: "因果律 (The Law of Sowing and Reaping)", 
      icon: <Sprout className="w-5 h-5" />, 
      verse: "人種的是什麼，收的也是什麼。(加 6:7)", 
      desc: "行為有後果。如果你替別人承擔了他們不負責任的後果（幫他們擦屁股），他們就不會學到教訓。你打斷了因果律。", 
      page: "P99",
      actionableSteps: [
        "停止一次「替人擦屁股」的行為，讓對方經歷他自己行為的自然後果。",
        "當你想要介入解決別人的問題時，先停下來問自己：「這是我該承擔的後果嗎？」"
      ],
      quiz: {
        question: "情境題：成年的孩子總是把錢花光，然後找你借錢付房租。你該怎麼做才符合因果律？",
        options: [
          { text: "借給他，因為家人有難應該互相幫助。", isCorrect: false, feedback: "這打斷了因果律，他不會學到理財的教訓。" },
          { text: "拒絕借錢，讓他自己面對可能被房東趕出去的後果。", isCorrect: true, feedback: "正確！讓他承受自己行為的後果，才是真正的幫助。" }
        ]
      }
    },
    { 
      id: 2, 
      title: "責任律 (The Law of Responsibility)", 
      icon: <HeartHandshake className="w-5 h-5" />, 
      verse: "各人要擔當自己的擔子。(加 6:5)", 
      desc: "我們要「對」彼此負責（愛、關心），但不能「替」彼此負責（承擔對方的感受、選擇）。你不能替別人成長。", 
      page: "P102",
      actionableSteps: [
        "當朋友向你抱怨時，專注於傾聽和同理（對他負責），而不是立刻給建議或替他解決問題（替他負責）。",
        "寫下三件你目前正在「替」別人做，但其實是他們自己該做的事，並計畫如何交還給他們。"
      ],
      quiz: {
        question: "測驗：以下哪一種行為是「對」別人負責，而不是「替」別人負責？",
        options: [
          { text: "幫常常遲到的同事完成他的工作，以免他被老闆罵。", isCorrect: false, feedback: "這是「替」他負責，承擔了他的擔子。" },
          { text: "當朋友難過時陪伴他，但不認為自己有責任讓他立刻開心起來。", isCorrect: true, feedback: "正確！關心他的感受，但不替他的情緒負責。" }
        ]
      }
    },
    { 
      id: 3, 
      title: "能力律 (The Law of Power)", 
      icon: <Zap className="w-5 h-5" />, 
      verse: "神賜給我們，不是膽怯的心，乃是剛強、仁愛、謹守的心。(提後 1:7)", 
      desc: "你無法改變別人，只能改變自己對別人的回應。你有能力承認自己的無能為力，並向上帝求助。", 
      page: "P104",
      actionableSteps: [
        "承認你無法改變某個讓你痛苦的人，並將焦點轉移到「我能如何改變自己的回應方式」。",
        "當你感到無力時，列出一份清單，寫下在目前處境中你「有能力」控制的三件事。"
      ],
      quiz: {
        question: "測驗：面對一個脾氣暴躁的伴侶，根據能力律，你擁有什麼能力？",
        options: [
          { text: "我有能力透過不斷溝通和愛，最終改變他的脾氣。", isCorrect: false, feedback: "我們沒有能力改變別人，這是常見的陷阱。" },
          { text: "我有能力決定當他發脾氣時，我要離開現場，不接受言語暴力。", isCorrect: true, feedback: "正確！你只能控制自己對他行為的反應。" }
        ]
      }
    },
    { 
      id: 4, 
      title: "尊重律 (The Law of Respect)", 
      icon: <Users className="w-5 h-5" />, 
      verse: "你們願意人怎樣待你們，你們也要怎樣待人。(太 7:12)", 
      desc: "如果你希望別人尊重你的界線（你的「不」），你必須先尊重別人的界線。不要因為別人拒絕你而生氣或定罪。", 
      page: "P107",
      actionableSteps: [
        "當別人對你說「不」時，練習平靜地接受，不帶情緒地說：「好的，我了解。」",
        "檢視自己是否會用罪疚感（例如：「你怎麼這麼自私」）來逼迫別人答應你的要求。"
      ],
      quiz: {
        question: "情境題：你邀請朋友參加聚會，他拒絕了。你心裡覺得他不夠義氣。這違反了哪一條律？",
        options: [
          { text: "尊重律，因為我沒有尊重他有說「不」的權利。", isCorrect: true, feedback: "正確！我們必須像尊重自己的界線一樣尊重別人。" },
          { text: "動機律，因為他的動機不純正。", isCorrect: false, feedback: "這與他的動機無關，而是我們如何看待他的拒絕。" }
        ]
      }
    },
    { 
      id: 5, 
      title: "動機律 (The Law of Motivation)", 
      icon: <HeartHandshake className="w-5 h-5" />, 
      verse: "各人要隨本心所酌定的，不要作難，不要勉強，因為捐得樂意的人是神所喜愛的。(林後 9:7)", 
      desc: "給予必須出於自由和愛，而不是出於恐懼（怕別人生氣、怕失去愛、怕罪疚感）。出於恐懼的給予會帶來怨恨。", 
      page: "P109",
      actionableSteps: [
        "在答應任何請求前，先暫停 5 秒鐘，問自己：「我是因為害怕才答應，還是出於愛？」",
        "如果發現自己是出於罪疚感而服事，本週嘗試推辭一項這類的服事，讓自己有喘息的空間。"
      ],
      quiz: {
        question: "測驗：如果你因為害怕教會牧者失望，而勉強接下一個服事，這會帶來什麼結果？",
        options: [
          { text: "雖然勉強，但上帝會祝福，最終我會感到喜樂。", isCorrect: false, feedback: "出於恐懼的服事通常不會帶來真正的喜樂。" },
          { text: "這違反了動機律，最終會導致內心的怨恨和枯竭。", isCorrect: true, feedback: "正確！沒有自由的給予，就沒有真正的愛，只會產生怨恨。" }
        ]
      }
    },
    { 
      id: 6, 
      title: "評估律 (The Law of Evaluation)", 
      icon: <Eye className="w-5 h-5" />, 
      verse: "凡管教的事，當時不覺得快樂，反覺得愁苦；後來卻為那經練過的人結出平安的果子。(來 12:11)", 
      desc: "你的界線可能會讓別人感到痛苦（例如拒絕借錢給揮霍的朋友），但這不代表你傷害了他們。區分「受傷」(hurt) 與「受害」(harm)。", 
      page: "P113",
      actionableSteps: [
        "當你的決定讓別人感到失望（受傷）時，提醒自己：這不代表你做錯了（讓他們受害）。",
        "在做決定前，評估這個決定對雙方長遠的益處，而不只是看眼前的舒適度。"
      ],
      quiz: {
        question: "測驗：牙醫拔牙會讓你感到痛苦（受傷），但他有讓你「受害」嗎？",
        options: [
          { text: "有，因為他造成了我的痛苦。", isCorrect: false, feedback: "痛苦不等於受害。拔牙是為了長遠的健康。" },
          { text: "沒有，他造成了短暫的痛苦，但帶來了長遠的益處（健康）。", isCorrect: true, feedback: "正確！這就是評估律的核心：區分受傷與受害。" }
        ]
      }
    },
    { 
      id: 7, 
      title: "積極律 (The Law of Proactivity)", 
      icon: <Activity className="w-5 h-5" />, 
      verse: "生氣卻不要犯罪。(弗 4:26)", 
      desc: "不要只停留在對侵犯界線感到憤怒（被動反應）。成熟的界線是主動的：清楚知道自己要什麼、不要什麼，並平靜地表達出來。", 
      page: "P115",
      actionableSteps: [
        "當你感到憤怒時，不要立刻反擊，先退一步思考：「我的什麼需求沒有被滿足？」",
        "化被動為主動：主動向伴侶或朋友提出你希望的互動方式，而不是等他們做錯了才生氣。"
      ],
      quiz: {
        question: "情境題：同事總是把工作推給你，你氣得在背後罵他。這是成熟的界線嗎？",
        options: [
          { text: "不是，這只是被動的反應（反抗）。成熟的做法是主動且平靜地拒絕他。", isCorrect: true, feedback: "正確！積極律要求我們超越被動的憤怒，採取主動的立場。" },
          { text: "是，因為生氣代表我有界線意識。", isCorrect: false, feedback: "生氣只是第一步，停留在生氣是反抗期，還不是成熟的積極界線。" }
        ]
      }
    },
    { 
      id: 8, 
      title: "嫉妒律 (The Law of Envy)", 
      icon: <Eye className="w-5 h-5" />, 
      verse: "不可貪戀人的房屋...並他一切所有的。(出 20:17)", 
      desc: "嫉妒是界線的警訊。它意味著你專注於別人擁有的，而忽略了自己該負的責任。與其嫉妒，不如問自己：「我該怎麼做才能達到那個目標？」", 
      page: "P117",
      actionableSteps: [
        "當你嫉妒別人的成就或生活時，把嫉妒轉化為目標：「我需要採取什麼行動才能擁有類似的結果？」",
        "列出你目前擁有的三項恩賜或資源，專注於發展它們，而不是盯著別人看。"
      ],
      quiz: {
        question: "測驗：嫉妒在界線問題中代表什麼意義？",
        options: [
          { text: "代表我是一個很糟糕、不屬靈的人。", isCorrect: false, feedback: "嫉妒是一個人性的信號，不需要過度定罪自己。" },
          { text: "代表我的界線看錯了方向：我專注於別人的財產，卻忽略了自己該負的責任。", isCorrect: true, feedback: "正確！嫉妒提醒我們要把注意力拉回自己的責任範圍內。" }
        ]
      }
    },
    { 
      id: 9, 
      title: "活動律 (The Law of Activity)", 
      icon: <Activity className="w-5 h-5" />, 
      verse: "你們祈求，就給你們；尋找，就尋見；叩門，就給你們開門。(太 7:7)", 
      desc: "不要被動地等待別人來滿足你的需求或設定你的界線。你必須主動出擊，採取行動。上帝會回應主動尋求的人。", 
      page: "P119",
      actionableSteps: [
        "不要等別人來解決你的問題，今天就為你一直拖延的一件難事主動跨出第一步。",
        "主動報名一個課程、加入一個支持團體，或預約一次輔導，為自己的成長負責。"
      ],
      quiz: {
        question: "測驗：如果你覺得生活很空虛，缺乏深度的關係，根據活動律，你該怎麼做？",
        options: [
          { text: "主動去尋找、敲門，參加活動或主動邀約別人建立關係。", isCorrect: true, feedback: "正確！上帝會回應那些主動尋求的人。" },
          { text: "安靜等待，相信上帝會在對的時間把對的人帶到我身邊。", isCorrect: false, feedback: "過度被動往往是逃避責任的藉口，我們必須採取行動。" }
        ]
      }
    },
    { 
      id: 10, 
      title: "顯露律 (The Law of Exposure)", 
      icon: <MessageSquare className="w-5 h-5" />, 
      verse: "你們要彼此認罪，互相代求，使你們可以得醫治。(雅 5:16)", 
      desc: "界線必須被看見。如果你在心裡設了界線卻不說出來，別人就不會知道。隱藏界線會導致關係中的疏離與怨恨。", 
      page: "P121",
      actionableSteps: [
        "本週嘗試一次「直接表達你的真實感受」，而不是用生悶氣或被動攻擊的方式。",
        "找一個安全的朋友，向他坦誠你最近遇到的一個界線困難，讓你的掙扎「顯露」在光中。"
      ],
      quiz: {
        question: "情境題：你對伴侶的某個行為很不滿，但你選擇默默忍受，心想「他應該自己要知道」。這違反了哪一條律？",
        options: [
          { text: "顯露律，因為界線必須被溝通和顯露出來，別人才會知道。", isCorrect: true, feedback: "正確！別人不會讀心術，隱藏界線只會破壞關係。" },
          { text: "因果律，因為他沒有承擔後果。", isCorrect: false, feedback: "雖然他也沒承擔後果，但核心問題是你沒有將界線「顯露」出來。" }
        ]
      }
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-50 rounded-3xl p-8 md:p-10 border border-blue-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-4">
            Chapter 5
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            界線十律
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed max-w-3xl">
            就像物理學有萬有引力定律一樣，人際關係和靈性世界也有其運作的法則。這十條界線法則能幫助我們建立健康、負責任的生活方式。
          </p>
        </div>
      </div>

      {/* The 10 Laws Grid */}
      <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
          <Scale className="w-7 h-7 mr-3 text-blue-500" />
          十條不可忽視的界線法則 (P97-123)
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {laws.map((law) => (
            <motion.div 
              key={law.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all group flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {law.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-800">{law.id}. {law.title}</h4>
                </div>
                <span className="text-xs font-medium text-slate-400 bg-white px-2 py-1 rounded-md border border-slate-200">{law.page}</span>
              </div>
              
              <div className="flex-grow space-y-4">
                <div className="bg-blue-50/50 p-3 rounded-xl border border-blue-100">
                  <p className="text-sm text-blue-800 italic font-medium">
                    {law.verse}
                  </p>
                </div>
                
                <p className="text-sm text-slate-600 leading-relaxed">
                  {law.desc}
                </p>
              </div>

              {/* Interactive Quiz Section */}
              <div className="mt-5">
                <button
                  onClick={() => setActiveQuiz(activeQuiz === law.id ? null : law.id)}
                  className="w-full flex items-center justify-between bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-3 rounded-xl font-medium transition-colors"
                >
                  <span className="flex items-center">
                    <HelpCircle className="w-5 h-5 mr-2" />
                    法則小測驗
                  </span>
                  {activeQuiz === law.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>

                <AnimatePresence>
                  {activeQuiz === law.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 mt-2 bg-white border border-blue-100 rounded-xl shadow-inner">
                        <p className="font-medium text-slate-800 mb-4 text-sm">{law.quiz.question}</p>
                        <div className="space-y-2">
                          {law.quiz.options.map((option, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleQuizAnswer(law.id, option.isCorrect)}
                              className={`w-full text-left p-3 rounded-lg text-sm transition-all border ${
                                quizResults[law.id] === undefined
                                  ? 'border-slate-200 hover:border-blue-300 hover:bg-blue-50'
                                  : option.isCorrect
                                  ? 'border-emerald-500 bg-emerald-50 text-emerald-800'
                                  : 'border-rose-200 bg-rose-50 text-rose-800 opacity-70'
                              }`}
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
                            className={`mt-4 p-3 rounded-lg text-sm font-medium ${
                              quizResults[law.id] 
                                ? 'bg-emerald-100 text-emerald-800' 
                                : 'bg-rose-100 text-rose-800'
                            }`}
                          >
                            {quizResults[law.id] ? '✨ 答對了！' : '💡 再想一想：'}
                            {law.quiz.options.find(o => o.isCorrect === quizResults[law.id])?.feedback || 
                             law.quiz.options.find(o => o.isCorrect)?.feedback}
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-5 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-2xl border border-blue-100">
                <h4 className="font-bold text-blue-800 mb-3 text-sm flex items-center">
                  <span className="mr-2">🎯</span> 具體行動方案 (Actionable Steps)
                </h4>
                <ul className="space-y-2">
                  {law.actionableSteps.map((step, idx) => (
                    <li key={idx} className="flex items-start text-sm text-blue-700 leading-relaxed">
                      <span className="text-blue-500 mr-2 font-bold">{idx + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Application Note */}
      <div className="bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-700 shadow-sm text-white">
        <h3 className="text-2xl font-bold text-blue-300 mb-6 flex items-center">
          <ShieldAlert className="w-7 h-7 mr-3" />
          如何應用這些法則？
        </h3>
        <p className="text-slate-300 leading-relaxed mb-6 text-lg">
          這十條法則不是用來定罪的，而是用來診斷和醫治的。當你在關係中感到痛苦、怨恨或失去控制時，檢視一下：
        </p>
        <ul className="space-y-4 text-slate-300">
          <li className="flex items-start">
            <span className="mr-3 text-blue-400 font-bold">1.</span>
            <span>我是否打破了<strong>因果律</strong>，替別人承擔了後果？</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-blue-400 font-bold">2.</span>
            <span>我的給予是出於愛，還是出於恐懼（違反<strong>動機律</strong>）？</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-blue-400 font-bold">3.</span>
            <span>我是否清楚地表達了我的界線（遵守<strong>顯露律</strong>），還是只在心裡生悶氣？</span>
          </li>
        </ul>
      </div>
      {/* Reflection & Action Guide */}

        {/* 本章總結 */}
        <div className="bg-gradient-to-br from-teal-50 to-slate-50 border border-teal-100 rounded-2xl p-6 mb-6">
          <h3 className="text-base font-bold text-teal-700 mb-2 flex items-center gap-2">
            <span className="text-lg">📝</span> 第5章總結：界線的十大法則
          </h3>
          <p className="text-slate-500 text-xs mb-5 leading-relaxed">本章列出十條管理界線的屬靈法則，這些法則並非人為規定，而是神所設計的宇宙秩序的一部分。違背這些法則必然帶來痛苦；順應這些法則，才能經歷真正的自由和成長。</p>
          <div className="mb-4">
            <div className="text-xs font-bold text-teal-600 mb-1.5">📖 種豆得豆 & 能力法則</div>
            <p className="text-slate-600 text-sm leading-relaxed">「種豆得豆」是界線最基本的法則：每個人必須為自己的選擇承擔後果。若你不斷替別人承擔後果（替他們還債、為他們道歉、幫他們擦屁股），你就打斷了因果律，讓他們無法學習和成長。「能力法則」則提醒我們：我們有能力改變自己，但無法改變別人。把精力放在改變自己的回應上，而不是試圖改變對方。</p>
          </div>
          <div className="mb-4">
            <div className="text-xs font-bold text-teal-600 mb-1.5">🔍 責任 & 尊重 & 動機法則</div>
            <p className="text-slate-600 text-sm leading-relaxed">「責任法則」區分了「對某人負責」（愛、關心）和「替某人負責」（承擔他的後果）——我們要前者，但不要後者。「尊重法則」要求我們尊重別人的「不」，就像我們希望別人尊重我們的「不」。「動機法則」則是最核心的一條：若你的給予是出於恐懼（怕對方生氣）、罪惡感（我不得不）或討好（這樣他才會喜歡我），而不是出於自由和愛，這種給予無法帶來真正的連結，只會積累怨恨。</p>
          </div>
          <div className="mb-4">
            <div className="text-xs font-bold text-teal-600 mb-1.5">⚠️ 評估 & 嫉妒 & 主動法則</div>
            <p className="text-slate-600 text-sm leading-relaxed">「評估法則」提醒我們：我們的界線會對他人造成痛苦，但這不代表我們傷害了他們——要區分「受傷(hurt)」和「受害(harm)」。「嫉妒法則」指出嫉妒是界線問題的警示燈：當你嫉妒別人時，通常是因為你沒有為自己的生命承擔責任。「主動法則」鼓勵我們不只是被動反應，而是主動清楚知道自己要什麼、不要什麼，並平靜表達。</p>
          </div>
          <div className="mb-4">
            <div className="text-xs font-bold text-teal-600 mb-1.5">💡 本章的關鍵信息</div>
            <p className="text-slate-600 text-sm leading-relaxed">這些法則的背後有一個共同的神學基礎：神給了我們自由意志，讓我們能夠真正地選擇，也真正地承擔選擇的後果。當我們阻斷別人的後果，我們其實是在干預神的成長計畫。讓別人承擔自己的後果，是一種艱難但深刻的愛。</p>
          </div>
        </div>

      <div className="bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-800 shadow-lg text-white mt-12">
        <h3 className="text-2xl font-bold text-indigo-300 mb-6 flex items-center">
          <Brain className="w-7 h-7 mr-3" />
          深度反思與行動指南 <span className="ml-3 text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded-full font-normal border border-slate-600">💡 延伸應用 (非原書內容)</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="text-xl font-bold text-indigo-200 mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-indigo-400" />
              反思問題
            </h4>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start">
                <span className="text-indigo-400 mr-2 font-bold">1.</span>
                我最常違背哪一條界線定律？（例如：經常替別人承擔後果而違背「種與收的律」？）
              </li>
              <li className="flex items-start">
                <span className="text-indigo-400 mr-2 font-bold">2.</span>
                我是否常常出於「嫉妒」而專注於別人擁有的，卻忽略了自己「能力律」範圍內可以改變的事？
              </li>
              <li className="flex items-start">
                <span className="text-indigo-400 mr-2 font-bold">3.</span>
                我是否常常試圖改變別人（違背「能力律」），而不是專注於改變自己對待他們的方式？
              </li>
              <li className="flex items-start">
                <span className="text-indigo-400 mr-2 font-bold">4.</span>
                在給予別人幫助時，我是出於自由和喜樂，還是出於勉強和罪疚感（違背「動機律」）？
              </li>
              <li className="flex items-start">
                <span className="text-indigo-400 mr-2 font-bold">5.</span>
                我是否常常把自己的界線隱藏起來（違背「顯露律」），期待別人能「讀心」知道我的底線？
              </li>
              <li className="flex items-start">
                <span className="text-indigo-400 mr-2 font-bold">6.</span>
                當我對別人設立界線時，我是帶著愛和尊重，還是帶著憤怒和攻擊性？
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
                選擇一條你最弱的定律（如：揭露律）。本週嘗試一次「直接表達你的真實感受」，而不是用生悶氣或被動攻擊的方式。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">2.</span>
                停止一次「替人擦屁股」的行為，讓對方經歷他自己行為的自然後果（實踐種與收的律）。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">3.</span>
                實踐「主動律」：不要等別人來解決你的問題，今天就為你一直拖延的一件難事主動跨出第一步。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">4.</span>
                實踐「評估律」：在做決定前，先評估這個決定會對自己和他人造成什麼長遠的影響，而不只是看眼前的舒適。
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
