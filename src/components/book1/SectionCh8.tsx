import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, AlertCircle, HelpCircle, HeartHandshake, UserX, ShieldOff, Zap, EarOff, MessageCircle, Heart, Lightbulb, HeartCrack, Brain, Target, CheckCircle2, XCircle } from 'lucide-react';

export default function SectionCh8() {
  const [activeQuiz, setActiveQuiz] = useState<number | null>(null);
  const [quizResults, setQuizResults] = useState<Record<number, boolean>>({});

  const handleQuizAnswer = (conflictId: number, isCorrect: boolean) => {
    setQuizResults(prev => ({ ...prev, [conflictId]: isCorrect }));
  };

  const conflicts = [
    {
      id: 1,
      title: "順從者與順從者 (Compliant/Compliant)",
      icon: <UserX className="w-6 h-6" />,
      page: "P202",
      desc: "兩個人都太要好了，以至於無法向對方說「不」。雙方都在猜測對方想要什麼，並試圖滿足對方，結果兩個人都得不到自己真正想要的。",
      scenario: "情境：A問B「你想去哪裡吃飯？」B回答「我不知道，你想去哪裡？」A其實想吃義大利麵，但怕B不喜歡，就說「我都好，看你。」最後兩人去吃了一家雙方都不喜歡的速食店。兩人都覺得委屈，卻又覺得自己是為了對方好。",
      breakthrough: "突破點：必須有人先打破虛假的和平，誠實說出自己的需求。真正的友誼經得起不同意見的考驗。如果連「我想吃什麼」都不能誠實表達，這段關係就缺乏真實的親密感。",
      quiz: {
        question: "當兩個「順從者」做決定時，最常發生什麼情況？",
        options: [
          { text: "雙方都能得到自己最想要的結果", isCorrect: false },
          { text: "雙方都在猜測對方想要什麼，最後兩人都得不到真正想要的", isCorrect: true },
          { text: "雙方會因為意見不合而大吵一架", isCorrect: false }
        ],
        feedback: "正確！過度順從反而會扼殺真實的需求，導致雙贏變成雙輸。"
      },
      actionableSteps: [
        "下次朋友問「你想吃什麼」時，練習給出至少兩個具體的選項，而不是說「我都好」。",
        "當你對朋友的提議感到猶豫時，試著說：「我其實沒那麼想去那裡，我們能考慮其他地方嗎？」"
      ]
    },
    {
      id: 2,
      title: "順從者與侵略型控制者 (Compliant/Aggressive Controller)",
      icon: <Zap className="w-6 h-6" />,
      page: "P204",
      desc: "控制者不尊重界線，只要是他們想要的就會強硬要求；順從者覺得被操控、心生怨恨，卻不敢反抗。這是一種「施虐者與受虐者」的動態。",
      scenario: "情境：控制者朋友打電話來：「我今晚要去你家住，順便借你的車。」順從者內心極度不願意，因為明天有重要會議需要用車，但嘴上卻說：「喔...好吧，沒問題。」事後順從者對其他朋友抱怨自己被利用。",
      breakthrough: "突破點：順從者必須明白，沒有人能「強迫」你答應。是你自己出於對衝突的恐懼，而「自願」把權力奉送給對方。你需要承擔起說「不」的責任，並準備好面對對方的怒氣，因為真正的友誼不該建立在恐懼之上。",
      quiz: {
        question: "為什麼順從者會「自願」把權力奉送給侵略型控制者？",
        options: [
          { text: "因為順從者喜歡被控制", isCorrect: false },
          { text: "因為順從者恐懼衝突和對方的怒氣，所以選擇妥協", isCorrect: true },
          { text: "因為控制者總是對的", isCorrect: false }
        ],
        feedback: "正確！恐懼是順從者妥協的主因，克服恐懼是建立界線的第一步。"
      },
      actionableSteps: [
        "當控制型朋友提出不合理要求時，練習說：「我需要想一下，晚點回覆你」，給自己緩衝時間。",
        "準備好一句堅定的拒絕台詞，例如：「我今天真的沒辦法幫忙，祝你順利。」並在鏡子前練習。"
      ]
    },
    {
      id: 3,
      title: "順從者與操控型控制者 (Compliant/Manipulative Controller)",
      icon: <ShieldOff className="w-6 h-6" />,
      page: "P208",
      desc: "控制者從不提前計畫，總是臨時用罪疚感要求幫忙；順從者則不斷為對方的不負責任買單，覺得被利用。操控者不直接要求，而是讓你覺得「你必須幫我」。",
      scenario: "情境：操控者朋友在搬家前一天晚上打來：「哎，我明天要搬家，但我還沒打包完，而且我借不到車...我不知道該怎麼辦，我可能會被房東趕出去...（嘆氣）」順從者立刻感到內疚，主動說：「那我明天請假去幫你吧。」",
      breakthrough: "突破點：順從者需要停止把自己視為受害者，並停止拯救對方脫離他們自己造成的後果。當對方試圖用情緒勒索時，堅定地說：「我很遺憾你遇到困難，但我明天要上班，真的無法幫忙。希望你能順利解決。」",
      quiz: {
        question: "面對總是利用「罪疚感」來要求幫忙的朋友，你應該怎麼做？",
        options: [
          { text: "為了不讓他失望，繼續幫他解決問題", isCorrect: false },
          { text: "停止拯救他，讓他自己承擔不負責任的後果", isCorrect: true },
          { text: "幫他找其他人來幫忙", isCorrect: false }
        ],
        feedback: "正確！停止拯救才能打破操控的循環，讓對方學會為自己負責。"
      },
      actionableSteps: [
        "當朋友試圖用情緒勒索時，在心裡提醒自己：「他的緊急狀況，不等於我的責任。」",
        "練習用同理但不介入的方式回應：「聽起來你遇到了很大的困難，但我目前無法幫忙，希望你能解決。」"
      ]
    },
    {
      id: 4,
      title: "順從者與不回應者 (Compliant/Nonresponsive)",
      icon: <EarOff className="w-6 h-6" />,
      page: "P209",
      desc: "一方總是付出、打電話、做規畫（順從者），另一方則永遠被動、不回應、不主動關心。這是一段極度不平衡的關係。",
      scenario: "情境：A總是主動約B出來，A記得B的生日並送禮物，A在B難過時陪伴他。但B從來不主動聯絡A，A生病時B也不聞不問。A覺得自己像個隱形人，但又捨不得放棄這段友誼。",
      breakthrough: "突破點：順從者需要停止一直主動，讓對方也負起同等的責任。你可以告訴對方你的感受：「我覺得這段友誼都是我在主動，我感到很受傷。」如果對方依然不回應，你必須接受這段友誼並不對等的事實，並將精力投資在願意回應的人身上。",
      quiz: {
        question: "如果你在一段友誼中總是扮演主動付出的角色，對方卻從不回應，你該如何突破？",
        options: [
          { text: "更加倍地付出，直到他感動為止", isCorrect: false },
          { text: "停止一直主動，向對方表達感受，並將精力投資在願意回應的人身上", isCorrect: true },
          { text: "默默生氣，然後突然跟他絕交", isCorrect: false }
        ],
        feedback: "正確！友誼必須是雙向的，你需要將精力投資在對等的關係上。"
      },
      actionableSteps: [
        "暫停主動聯絡這位朋友一週，觀察他是否會主動關心你，藉此評估這段關係的對等性。",
        "誠實地向他表達感受：「我覺得這段友誼都是我在主動，這讓我感到有些失落。」看他如何回應。"
      ]
    }
  ];

  const faqs = [
    { 
      q: "友誼是不是很容易破裂？", 
      a: "因為友誼沒有婚姻或工作那樣的外在承諾（如合約、血緣），單靠情感維繫，所以看起來很脆弱。但真實的友誼並不容易被打破。設定界線反而會強化彼此的連結，因為它過濾掉了那些只為了利用你的人。如果一段友誼因為你說了「不」就結束了，那這段關係本來就不是友誼，而是利用。", 
      page: "P211" 
    },
    { 
      q: "浪漫關係該如何設定界線？", 
      a: "約會是婚姻的練習場，本質上是有危險的。在浪漫關係中說真話，有助於界定關係，讓雙方知道什麼可以嘗試，什麼必須喊停。不要為了討好對方而隱藏真實的自己（例如：明明不喜歡看恐怖片卻假裝喜歡）。如果你在約會時不敢設界線，結婚後只會更慘。", 
      page: "P213" 
    },
    { 
      q: "假如家人就是最親密的朋友？", 
      a: "家庭是一個孵化器，完成任務後成年人必須離開巢穴，與外面的世界連結。如果只跟家人做朋友，很難發展出屬於自己的獨立認同，也容易陷入原生家庭的糾結中。你需要有家庭以外的朋友，才能獲得客觀的視角和不同形式的支持。", 
      page: "P215" 
    },
    { 
      q: "如何向需要幫助的朋友設定界限？", 
      a: "必須區分「事工 (Ministry)」與「友誼 (Friendship)」。事工是單向的付出（例如：幫助一個正在經歷嚴重憂鬱症的人），友誼是雙向的互惠。你不能只是一直當拯救者，你也需要能提供你無條件支持與愛的對等關係。如果一段關係永遠只有你在付出，那是事工，不是友誼。", 
      page: "P217" 
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50 rounded-3xl p-8 md:p-10 border border-cyan-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm font-bold mb-4">
            Chapter 8
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            界線與你的朋友
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed max-w-3xl">
            友誼是一段奠基在彼此的聯繫，而非功能上的非浪漫關係。這世上最悲哀的，莫過於那些沒有被朋友真正認識、並好好愛著的人。健康的友誼需要雙方都能自由地說「好」與「不」。如果一段友誼不能容忍「不」，那就不是友誼，而是控制。
          </p>
        </div>
      </div>

      {/* Warning Signs */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
          <AlertCircle className="w-7 h-7 mr-3 text-rose-500" />
          不健康友誼的警訊
        </h3>
        <p className="text-slate-600 mb-6 text-lg">
          友誼應該是避風港，而不是另一個壓力來源。如果你在一段友誼中經常感受到以下情緒，這就是界線出現問題的警訊：
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100 hover:bg-rose-100/50 transition-colors">
            <HeartCrack className="w-8 h-8 text-rose-500 mb-4" />
            <h4 className="font-bold text-rose-800 mb-3 text-xl">單向付出 (One-Sided)</h4>
            <p className="text-base text-slate-700 leading-relaxed">
              總是你在傾聽、幫忙、主動聯絡。當你需要幫助或想分享喜悅時，對方總是不在，或者很快把話題轉回自己身上。你感覺自己像個情緒垃圾桶。
            </p>
          </div>
          <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100 hover:bg-rose-100/50 transition-colors">
            <MessageCircle className="w-8 h-8 text-rose-500 mb-4" />
            <h4 className="font-bold text-rose-800 mb-3 text-xl">害怕說真話 (Fear of Truth)</h4>
            <p className="text-base text-slate-700 leading-relaxed">
              為了維持表面和平，你不敢表達不同意見，深怕對方生氣、冷戰或離開。你在這段關係中無法做真實的自己，總是如履薄冰。
            </p>
          </div>
          <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100 hover:bg-rose-100/50 transition-colors">
            <Heart className="w-8 h-8 text-rose-500 mb-4" />
            <h4 className="font-bold text-rose-800 mb-3 text-xl">充滿罪疚感 (Guilt-Ridden)</h4>
            <p className="text-base text-slate-700 leading-relaxed">
              對方常用情緒勒索（如：「如果你不幫我，我就死定了」、「我以為我們是好朋友」）讓你覺得自己「不夠朋友」，迫使你答應不合理的要求。
            </p>
          </div>
        </div>
      </div>

      {/* Conflicts Grid */}
      <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
          <Users className="w-7 h-7 mr-3 text-cyan-500" />
          友誼中的四種界線衝突 (P202-209)
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {conflicts.map((conflict) => (
            <motion.div 
              key={conflict.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-50 to-cyan-50/30 rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-cyan-100 p-3 rounded-xl text-cyan-700 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                    {conflict.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-800">衝突 {conflict.id}</h4>
                </div>
                <span className="text-xs font-medium text-slate-500 bg-white px-2 py-1 rounded-md border border-slate-200">{conflict.page}</span>
              </div>
              
              <div className="space-y-4 flex-grow">
                <h5 className="font-bold text-cyan-800 text-xl border-b border-cyan-100 pb-2">{conflict.title}</h5>
                <p className="text-slate-700 leading-relaxed text-base">
                  {conflict.desc}
                </p>
                <div className="bg-white p-4 rounded-xl border border-slate-100">
                  <strong className="text-slate-800 text-sm block mb-2">🎬 具體情境：</strong>
                  <p className="text-sm text-slate-600 leading-relaxed">{conflict.scenario}</p>
                </div>
                <div className="bg-cyan-50/80 p-4 rounded-xl border border-cyan-200 mt-auto">
                  <strong className="text-cyan-800 text-sm flex items-center mb-2">
                    <Lightbulb className="w-4 h-4 mr-1 text-cyan-600" />
                    解決突破點：
                  </strong>
                  <p className="text-sm text-cyan-900/80 leading-relaxed">{conflict.breakthrough}</p>
                </div>
              </div>

              {/* Interactive Quiz & Actionable Steps */}
              <div className="mt-6 pt-6 border-t border-slate-200">
                <button
                  onClick={() => setActiveQuiz(activeQuiz === conflict.id ? null : conflict.id)}
                  className="w-full py-3 px-4 bg-white border-2 border-cyan-100 text-cyan-700 rounded-xl font-bold hover:bg-cyan-50 hover:border-cyan-200 transition-colors flex items-center justify-center"
                >
                  <Brain className="w-5 h-5 mr-2" />
                  {activeQuiz === conflict.id ? '收起測驗與行動' : '隨堂測驗 & 行動指南'}
                </button>

                <AnimatePresence>
                  {activeQuiz === conflict.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 space-y-6">
                        {/* Quiz Section */}
                        <div className="bg-cyan-50 rounded-xl p-5 border border-cyan-100">
                          <h5 className="font-bold text-cyan-900 mb-3 flex items-center">
                            <Brain className="w-5 h-5 mr-2 text-cyan-600" />
                            理解測驗
                          </h5>
                          <p className="text-slate-700 font-medium mb-4">{conflict.quiz.question}</p>
                          <div className="space-y-2">
                            {conflict.quiz.options.map((option, optIdx) => (
                              <button
                                key={optIdx}
                                onClick={() => handleQuizAnswer(conflict.id, option.isCorrect)}
                                className={`w-full text-left p-3 rounded-lg text-sm transition-all ${
                                  quizResults[conflict.id] !== undefined
                                    ? option.isCorrect
                                      ? 'bg-emerald-100 border-emerald-300 text-emerald-800'
                                      : 'bg-slate-100 border-slate-200 text-slate-500 opacity-50'
                                    : 'bg-white border-slate-200 text-slate-700 hover:border-cyan-300 hover:bg-cyan-50'
                                } border`}
                                disabled={quizResults[conflict.id] !== undefined}
                              >
                                {option.text}
                              </button>
                            ))}
                          </div>
                          {quizResults[conflict.id] !== undefined && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className={`mt-4 p-3 rounded-lg flex items-start ${
                                quizResults[conflict.id] ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                              }`}
                            >
                              {quizResults[conflict.id] ? (
                                <CheckCircle2 className="w-5 h-5 mr-2 shrink-0 mt-0.5" />
                              ) : (
                                <XCircle className="w-5 h-5 mr-2 shrink-0 mt-0.5" />
                              )}
                              <p className="text-sm font-medium">
                                {quizResults[conflict.id] ? conflict.quiz.feedback : '再想一想！請重新閱讀上方的情境與突破點。'}
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
                            {conflict.actionableSteps.map((step, stepIdx) => (
                              <li key={stepIdx} className="flex items-start">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-200 text-emerald-700 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                                  {stepIdx + 1}
                                </span>
                                <span className="text-slate-700 text-sm leading-relaxed">{step}</span>
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

      {/* FAQs */}
      <div className="bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-700 shadow-sm text-white">
        <h3 className="text-2xl font-bold text-cyan-300 mb-8 flex items-center">
          <HelpCircle className="w-7 h-7 mr-3" />
          常見問題與解答 (P211-217)
        </h3>
        
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-700/50 p-6 md:p-8 rounded-2xl border border-slate-600 hover:bg-slate-700/70 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                <h4 className="text-xl font-bold text-cyan-200 flex items-start leading-snug">
                  <span className="text-cyan-500 mr-3 text-2xl font-black">Q:</span>
                  {faq.q}
                </h4>
                <span className="text-xs font-medium text-slate-400 bg-slate-800 px-3 py-1 rounded-md border border-slate-600 shrink-0 self-start">{faq.page}</span>
              </div>
              <div className="flex items-start bg-slate-800/60 p-5 rounded-xl border border-slate-600/50">
                <span className="text-emerald-400 mr-3 font-black text-2xl">A:</span>
                <p className="text-slate-300 text-base leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Reflection & Action Guide */}

        {/* 本章總結 */}
        <div className="bg-gradient-to-br from-teal-50 to-slate-50 border border-teal-100 rounded-2xl p-6 mb-6">
          <h3 className="text-base font-bold text-teal-700 mb-2 flex items-center gap-2">
            <span className="text-lg">📝</span> 第8章總結：界線與你的朋友
          </h3>
          <p className="text-slate-500 text-xs mb-5 leading-relaxed">本章探討友誼中的界線問題，指出四種常見的不健康友誼模式，並提供建立更真實、更有生命力的友誼的具體方向。</p>
          <div className="mb-4">
            <div className="text-xs font-bold text-teal-600 mb-1.5">📖 四種不健康的友誼模式</div>
            <p className="text-slate-600 text-sm leading-relaxed">作者描述了四種常見的界線失衡友誼：「互相討好型」——雙方都太要好以至於無法說「不」，最終誰都得不到真正想要的；「控制者與順從者型」——一方強硬要求，另一方默默配合充滿怨恨；「責任型操控」——一方永遠不計畫、永遠臨時要求，另一方永遠買單；「單向付出型」——一方付出所有，另一方完全被動接受。</p>
          </div>
          <div className="mb-4">
            <div className="text-xs font-bold text-teal-600 mb-1.5">🔍 真正的友誼需要雙向的「不」</div>
            <p className="text-slate-600 text-sm leading-relaxed">作者提出一個反直覺的觀點：一段友誼若不能讓你說「不」，它就不是真正的友誼。真正的朋友不只接受你的「好」，也尊重你的「不」；他們喜愛的是真實的你，而不是那個永遠說「好」、永遠有空的你。若你發現一個朋友只在你說「好」的時候才對你好，這個關係需要被重新評估。</p>
          </div>
          <div className="mb-4">
            <div className="text-xs font-bold text-teal-600 mb-1.5">⚠️ 設立界線可能讓友誼消失</div>
            <p className="text-slate-600 text-sm leading-relaxed">作者誠實地指出：當你開始在友誼中設立界線，有些「朋友」可能會消失。這是痛苦的，但這也是真相的顯現——那些關係從一開始就是建立在你的「無限供應」上，而不是建立在真實的連結上。失去這樣的「友誼」，其實是一種釋放，讓空間給真正的友誼進來。</p>
          </div>
          <div className="mb-4">
            <div className="text-xs font-bold text-teal-600 mb-1.5">💡 本章的關鍵信息</div>
            <p className="text-slate-600 text-sm leading-relaxed">健康的友誼是雙向的、有彈性的、允許變化的。它不會因為你有時說「不」而破裂，不會因為你有時需要空間而結束。在這樣的友誼裡，你不需要表演，不需要永遠有能量，不需要假裝沒事。這樣的友誼，是值得為之設立界線、也值得用界線來保護的。</p>
          </div>
        </div>

      <div className="bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-800 shadow-lg text-white mt-12">
        <h3 className="text-2xl font-bold text-sky-300 mb-6 flex items-center">
          <Brain className="w-7 h-7 mr-3" />
          深度反思與行動指南 <span className="ml-3 text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded-full font-normal border border-slate-600">💡 延伸應用 (非原書內容)</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="text-xl font-bold text-sky-200 mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-sky-400" />
              反思問題
            </h4>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start">
                <span className="text-sky-400 mr-2 font-bold">1.</span>
                我的朋友圈中，是否有「單向付出」或「讓我感到充滿罪疚感」的關係？
              </li>
              <li className="flex items-start">
                <span className="text-sky-400 mr-2 font-bold">2.</span>
                我敢在好朋友面前展現真實的軟弱，並對他們的要求說「不」嗎？還是我只敢扮演「拯救者」？
              </li>
              <li className="flex items-start">
                <span className="text-sky-400 mr-2 font-bold">3.</span>
                我是否害怕如果我不再扮演「傾聽者」或「拯救者」，我的朋友就不會再喜歡我了？
              </li>
              <li className="flex items-start">
                <span className="text-sky-400 mr-2 font-bold">4.</span>
                在我的朋友圈中，我是否能夠坦然地說「我今天不想出門」，而不必編造藉口？
              </li>
              <li className="flex items-start">
                <span className="text-sky-400 mr-2 font-bold">5.</span>
                當朋友拒絕我的請求時，我是能坦然接受，還是會覺得被背叛或不被重視？
              </li>
              <li className="flex items-start">
                <span className="text-sky-400 mr-2 font-bold">6.</span>
                我是否常常用「我都是為了你好」為藉口，去干涉朋友的生活選擇？
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
                針對一段讓你感到耗竭的友誼，設定一個微小的界線（例如：不立刻回覆非緊急的抱怨訊息）。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">2.</span>
                主動邀請一位你覺得安全的朋友，分享你最近遇到的一個挫折，練習「接受別人的幫助與傾聽」。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">3.</span>
                檢視你的行事曆，確保你花在「滋養你」的朋友身上的時間，不少於花在「消耗你」的朋友身上的時間。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">4.</span>
                當朋友向你抱怨時，嘗試只傾聽和同理，不要立刻給建議或試圖幫他們解決問題。
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
