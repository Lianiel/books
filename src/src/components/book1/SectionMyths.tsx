import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, CheckCircle, AlertCircle, ShieldAlert, Heart, Zap, Users, Gift, RefreshCw, Brain, Target, ChevronDown, ChevronUp } from 'lucide-react';

export default function SectionMyths() {
  const [activeQuiz, setActiveQuiz] = useState<number | null>(null);
  const [quizResults, setQuizResults] = useState<Record<number, boolean | null>>({});

  const handleQuizAnswer = (mythId: number, isCorrect: boolean) => {
    setQuizResults(prev => ({ ...prev, [mythId]: isCorrect }));
  };

  const mythsData = [
    {
      id: 1,
      title: "迷思 1：設立界線就是自私",
      page: "P153",
      icon: <UserIcon />,
      truth: "這是盡好「管家」的職分",
      desc: "自私是緊盯著自己的渴求，排擠掉愛人的責任。但界線是為了保護上帝託付給我們的資產（靈魂、生活、能力、感覺）。當我們對可能傷害我們的人或行為說「不」，我們是在保護上帝的資產，這不是自私，而是好管家。",
      verse: "我們眾人必須站在基督審判臺前受審，為使各人按著本身所行的，或善或惡受報（林後 5:10）",
      actionableSteps: [
        "列出你目前過度消耗的領域，承認你需要休息與恢復，這是好管家的表現。",
        "本週主動為自己安排一段專屬的休息時間（如泡澡、散步），並拒絕在這段時間內處理他人的事務。"
      ],
      quiz: {
        question: "情境題：朋友要求你週末幫忙搬家，但你已經連續加班兩週，身體非常疲憊。如果你拒絕他，這算是自私嗎？",
        options: [
          { text: "是，因為朋友有難應該互相幫助，拒絕就是只顧自己。", isCorrect: false, feedback: "這正是常見的迷思！過度消耗自己並不是愛。" },
          { text: "否，因為你需要保護自己的健康（上帝託付的資產），這叫做好管家。", isCorrect: true, feedback: "完全正確！保護自己的身心健康，才能在未來繼續愛人。" }
        ]
      }
    },
    {
      id: 2,
      title: "迷思 2：界線是不順服的徵兆",
      page: "P156",
      icon: <AlertCircle className="w-6 h-6" />,
      truth: "缺乏界線，才是不順服的徵兆",
      desc: "許多人表面順服，內心卻充滿悖逆和苦毒。如果我們真正的想法是「不」，卻因為恐懼（怕失去關係、怕權威）而說「好」，這跟說謊沒兩樣。我們必須出於愛來說「好」，如果沒有能力說「不」，我們也不會有能力說「好」。",
      verse: "各人要隨心所願，不要為難，不要勉強，因為上帝愛樂捐的人。（林後 9:7）",
      actionableSteps: [
        "檢視你最近答應的一件事，問自己：「我是出於愛，還是出於恐懼？」",
        "練習在小事上說「讓我想想」，給自己空間確認內心真實的意願，而不是習慣性地立刻順服。"
      ],
      quiz: {
        question: "測驗：真正的「順服」應該建立在什麼基礎上？",
        options: [
          { text: "建立在「恐懼」上（怕對方生氣、怕被懲罰）。", isCorrect: false, feedback: "出於恐懼的順服，內心往往充滿苦毒，這不是真正的順服。" },
          { text: "建立在「自由」與「愛」上（我有能力說不，但我選擇說好）。", isCorrect: true, feedback: "正確！沒有說「不」的自由，就沒有真正的「好」。" }
        ]
      }
    },
    {
      id: 3,
      title: "迷思 3：設定界線可能會受傷害",
      page: "P159",
      icon: <ShieldAlert className="w-6 h-6" />,
      truth: "界線是用以測試關係品質的「石蕊試劑」",
      desc: "設定界線確實可能讓人憤怒或離開。願意尊重你界線的人，才是真正喜愛你的人；無法尊重的人，只是喜歡你順從。如果說出真話導致別人離開，這反而是看清對方的機會。",
      verse: "那青年聽見這話，就憂憂愁愁地走了，因為他的產業很多。（太 19:22）—— 耶穌讓青年自己離開，沒有妥協真理。",
      actionableSteps: [
        "在一個小事上對某人說「不」，觀察他們的反應。真正愛你的人會尊重你的選擇。",
        "寫下你最害怕因為設界線而失去的關係，並反思這段關係是建立在愛還是控制之上。"
      ],
      quiz: {
        question: "情境題：你告訴伴侶你今晚需要獨處，他卻因此大發雷霆並冷戰。這代表什麼？",
        options: [
          { text: "代表我不該設界線，因為這傷害了我們的關係。", isCorrect: false, feedback: "這是一個迷思。界線只是揭露了關係中原本就存在的問題。" },
          { text: "代表他愛的是「順從的我」，而不是「真實的我」，界線測試出了關係的品質。", isCorrect: true, feedback: "正確！界線就像石蕊試劑，能測出關係的真實狀態。" }
        ]
      }
    },
    {
      id: 4,
      title: "迷思 4：我設立界線會傷害別人",
      page: "P163",
      icon: <Heart className="w-6 h-6" />,
      truth: "界線是保護，不是防衛性武器",
      desc: "對成年人說「不」，或許會讓他們有點不舒服（他們得去別的地方找幫助），但這不會造成「傷害」。容讓其他人為他們自己的「擔子」負責。上帝也常常向我們說「不」，因為祂知道我們都要為自己的生命負責。",
      verse: "凡事要謙虛、溫柔、忍耐，用愛心互相寬容，以和平彼此聯繫，竭力保持聖靈所賜的合一。（弗 4:2-3）",
      actionableSteps: [
        "當別人因為你的拒絕而感到失望時，提醒自己：讓他們承擔自己的責任，對他們是好的。",
        "停止為一個有能力自己解決問題的成年人提供「救援」，讓他們經歷自然後果。"
      ],
      quiz: {
        question: "測驗：當你拒絕借錢給一個經常揮霍的朋友時，你是在「傷害」他嗎？",
        options: [
          { text: "是，因為他現在沒錢吃飯會很痛苦。", isCorrect: false, feedback: "這只是讓他感到「不舒服」，並不是「傷害」。" },
          { text: "否，你是在讓他面對自己行為的自然後果，這對他的成長是有益的。", isCorrect: true, feedback: "正確！有時候，不舒服的後果才是最好的老師。" }
        ]
      }
    },
    {
      id: 5,
      title: "迷思 5：立界線表示我在生氣",
      page: "P165",
      icon: <Zap className="w-6 h-6" />,
      truth: "憤怒是早期警報系統，界線會減少怒氣",
      desc: "剛開始立界線時，常會湧現「舊的怒氣」，這是因為過去界線被侵犯時累積的抗議。憤怒是信號，告訴我們界線被入侵了。當界線越成熟，你越能在早期避免被侵犯，所經驗到的怒氣就會越少。",
      verse: "使地震動的是「僕人作王」（箴 30:21-22）—— 長期被壓抑的人一旦有權力，容易變成憤怒的暴君。",
      actionableSteps: [
        "當你感到憤怒時，不要壓抑，問自己：「我的哪一條界線被侵犯了？」",
        "在怒氣爆發前，嘗試用平靜但堅定的語氣向對方表達你的底線（例如：「我不喜歡你這樣對我說話」）。"
      ],
      quiz: {
        question: "測驗：剛開始練習設立界線時，突然感到非常憤怒，這是正常的嗎？",
        options: [
          { text: "不正常，這代表我設界線的方式錯了，應該要保持平和。", isCorrect: false, feedback: "其實這是正常的過程，被稱為「舊的怒氣」。" },
          { text: "正常，這是過去長期被侵犯界線所累積的抗議，隨著界線成熟，怒氣會減少。", isCorrect: true, feedback: "完全正確！憤怒是保護我們的警報系統。" }
        ]
      }
    },
    {
      id: 6,
      title: "迷思 6：他人立下的界線會傷到我",
      page: "P171",
      icon: <Users className="w-6 h-6" />,
      truth: "接受別人的界線，是為自己負責",
      desc: "我們難以接受別人說「不」，可能是因為童年傷害、投射脆弱、過度依賴或無法為生活負責。我們必須願意尊重別人的界線，就像我們希望別人尊重我們一樣。",
      verse: "所以，無論何事，你們想要人怎樣待你們，你們也要怎樣待人。（太 7:12）",
      actionableSteps: [
        "當別人對你說「不」時，練習深呼吸，告訴自己：「這不是拒絕我這個人，這是他們的界線。」",
        "主動鼓勵你的朋友或家人對你表達真實的需求，並在他們拒絕你時給予正面的肯定。"
      ],
      quiz: {
        question: "情境題：你邀請朋友聚餐，他說他最近很累想在家休息。你覺得很受傷，認為他不想跟你做朋友。這是什麼情況？",
        options: [
          { text: "我把他的界線當成了對我個人的拒絕（投射脆弱）。", isCorrect: true, feedback: "正確！我們需要學習尊重別人的界線，不把它個人化。" },
          { text: "他確實是不想跟我做朋友，不然再累也會出來。", isCorrect: false, feedback: "這是一種不健康的期待，每個人都有權利為自己的精力設界線。" }
        ]
      }
    },
    {
      id: 7,
      title: "迷思 7：界線會引起罪疚感",
      page: "P175",
      icon: <Gift className="w-6 h-6" />,
      truth: "釐清「禮物」與「債務」",
      desc: "我們常覺得領受了愛就「欠」了別人，因此不敢立界線。但真正的愛是「禮物」，沒有附帶條件，我們欠的只是一句「謝謝」。如果對方因為你說謝謝還覺得生氣，那他給的是「債務」。",
      verse: "照著你們所領受的教導……充滿著感謝的心。（西 2:7）",
      actionableSteps: [
        "區分你生命中的關係：哪些人給你的是「禮物」，哪些人給你的是「債務」？",
        "當你因為拒絕別人的「好意」而感到內疚時，寫下三條你不需要為對方的付出負責的理由。"
      ],
      quiz: {
        question: "測驗：父母為你付了大學學費，現在要求你必須按照他們的意思選科系。這筆學費是？",
        options: [
          { text: "是一份「禮物」，我應該心存感激，但保有選擇的自由。", isCorrect: false, feedback: "如果父母以此要求回報，那它就不是真正的禮物了。" },
          { text: "是一筆「債務」，因為它附帶了控制我的條件。", isCorrect: true, feedback: "正確！真正的禮物是不求回報的，附帶條件的給予其實是債務。" }
        ]
      }
    },
    {
      id: 8,
      title: "迷思 8：有了界線就會自斷後路",
      page: "P178",
      icon: <RefreshCw className="w-6 h-6" />,
      truth: "界線的自主權在你手上，可以重新調整",
      desc: "許多人害怕一旦劃清界線，關係就永遠破裂。其實，你所說的「不」最終是由你來操控。假如對方做出了成熟而友愛的回應，當時機成熟時，你是可以改變和重新調整界線的。",
      verse: "保羅曾經拒絕馬可同行（徒 15:37-39），但多年後卻要馬可與他同行（提後 4:11），顯示界線是可以改變的。",
      actionableSteps: [
        "檢視你過去設立的界線，是否有哪一段關係已經成長，可以重新調整界線了？",
        "嘗試與一個曾經有過界線衝突但已改善的人，進行一次輕鬆的互動，釋放善意。"
      ],
      quiz: {
        question: "測驗：界線一旦設立，就永遠不能改變了嗎？",
        options: [
          { text: "是的，界線必須堅若磐石，否則別人會覺得你好欺負。", isCorrect: false, feedback: "界線不是死板的牆，而是有門的柵欄。" },
          { text: "不是，界線的自主權在你手上，當對方改變或情況允許時，你可以重新調整。", isCorrect: true, feedback: "完全正確！界線是動態的，隨關係成長而調整。" }
        ]
      }
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-fuchsia-50 via-pink-50 to-rose-50 rounded-3xl p-8 md:p-10 border border-fuchsia-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-fuchsia-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-fuchsia-100 text-fuchsia-700 font-bold mb-4" style={{fontSize:"17px"}}>
            Chapter 6
          </div>
          <h2 className="md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight" style={{fontSize:"33px"}}>
            常見的界線迷思
          </h2>
          <p className="text-slate-700 leading-relaxed max-w-3xl" style={{fontSize:"21px"}}>
            「迷思」聽起來很真實，讓許多基督徒深信不疑，甚至因此陷入無止境的服事與罪疚感中。讓我們用聖經的真理來打破這 8 個常見的界線迷思。
          </p>
        </div>
      </div>

      {/* Myths Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mythsData.map((myth) => (
          <motion.div 
            key={myth.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col h-full"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="bg-fuchsia-100 p-3 rounded-2xl text-fuchsia-600">
                  {myth.icon}
                </div>
                <h3 className="font-bold text-slate-800" style={{fontSize:"23px"}}>{myth.title}</h3>
              </div>
              <span className="font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded-md border border-slate-100" style={{fontSize:"15px"}}>{myth.page}</span>
            </div>

            <div className="flex-grow space-y-5">
              <div className="bg-fuchsia-50/50 p-4 rounded-2xl border border-fuchsia-100">
                <h4 className="font-bold text-fuchsia-800 mb-2 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-fuchsia-500" />
                  真相：{myth.truth}
                </h4>
                <p className="text-slate-700 leading-relaxed" style={{fontSize:"17px"}}>
                  {myth.desc}
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <p className="text-slate-600 italic leading-relaxed" style={{fontSize:"17px"}}>
                  「{myth.verse}」
                </p>
              </div>
            </div>

            {/* Interactive Quiz Section */}
            <div className="mt-5">
              <button
                onClick={() => setActiveQuiz(activeQuiz === myth.id ? null : myth.id)}
                className="w-full flex items-center justify-between bg-fuchsia-50 hover:bg-fuchsia-100 text-fuchsia-700 px-4 py-3 rounded-xl font-medium transition-colors"
              >
                <span className="flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2" />
                  迷思小測驗
                </span>
                {activeQuiz === myth.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>

              <AnimatePresence>
                {activeQuiz === myth.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 mt-2 bg-white border border-fuchsia-100 rounded-xl shadow-inner">
                      <p className="font-medium text-slate-800 mb-4" style={{fontSize:"17px"}}>{myth.quiz.question}</p>
                      <div className="space-y-2">
                        {myth.quiz.options.map((option, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleQuizAnswer(myth.id, option.isCorrect)}
                            className={`w-full text-left p-3 rounded-lg text-sm transition-all border ${
                              quizResults[myth.id] === undefined
                                ? 'border-slate-200 hover:border-fuchsia-300 hover:bg-fuchsia-50'
                                : option.isCorrect
                                ? 'border-emerald-500 bg-emerald-50 text-emerald-800'
                                : 'border-rose-200 bg-rose-50 text-rose-800 opacity-70'
                            }`}
                            disabled={quizResults[myth.id] !== undefined}
                          >
                            {option.text}
                          </button>
                        ))}
                      </div>
                      
                      {quizResults[myth.id] !== undefined && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`mt-4 p-3 rounded-lg text-sm font-medium ${
                            quizResults[myth.id] 
                              ? 'bg-emerald-100 text-emerald-800' 
                              : 'bg-rose-100 text-rose-800'
                          }`}
                        >
                          {quizResults[myth.id] ? '✨ 答對了！' : '💡 再想一想：'}
                          {myth.quiz.options.find(o => o.isCorrect === quizResults[myth.id])?.feedback || 
                           myth.quiz.options.find(o => o.isCorrect)?.feedback}
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-5 bg-gradient-to-r from-pink-50 to-rose-50 p-4 rounded-2xl border border-pink-100">
              <h4 className="font-bold text-pink-800 mb-3 flex items-center" style={{fontSize:"17px"}}>
                <span className="mr-2">🎯</span> 具體行動方案 (Actionable Steps)
              </h4>
              <ul className="space-y-2">
                {myth.actionableSteps.map((step, idx) => (
                  <li key={idx} className="flex items-start text-pink-700 leading-relaxed" style={{fontSize:"17px"}}>
                    <span className="text-pink-500 mr-2 font-bold">{idx + 1}.</span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Reflection & Action Guide */}

        {/* 本章總結 */}
        <div className="bg-gradient-to-br from-teal-50 to-slate-50 border border-teal-100 rounded-2xl p-6 mb-6">
          <h3 className="font-bold text-teal-700 mb-2 flex items-center gap-2" style={{fontSize:"22px"}}>
            <span style={{fontSize:"24px"}}>📝</span> 第6章總結：界線的迷思
          </h3>
          <p className="text-slate-500 mb-5 leading-relaxed" style={{fontSize:"18px"}}>本章逐一拆解八個常見的界線迷思。這些迷思往往根植於文化、宗教傳統或個人傷害，讓許多人在理智上知道界線是好的，卻在情感和行動上仍然無法踏出那一步。</p>
          <div className="bg-blue-50 border-blue-200 border rounded-xl p-4 mb-3">
            <div className="font-bold text-blue-700 mb-1.5" style={{fontSize:"18px"}}>📖 迷思一到三 <span style={{fontSize:"11px", fontWeight:"normal", opacity:0.7, marginLeft:"6px"}}>(P.153-163)</span></div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"18px"}}>「設立界線是自私的」——真正的自私是緊盯自己的渴求而忽略他人；設立界線是在管理好神交給你的資產，讓你能持續地給予。「界線代表我不順服」——強迫自己說「好」卻內心充滿「不」，其實是一種謊言；真正的順服必須出於自由的心。「設立界線會傷害關係」——願意尊重你界線的人，才是真正喜愛你的人；那些因你說「不」而大怒的人，其實只是喜歡你的「順從」。</p>
          </div>
          <div className="bg-violet-50 border-violet-200 border rounded-xl p-4 mb-3">
            <div className="font-bold text-violet-700 mb-1.5" style={{fontSize:"18px"}}>🔍 迷思四到六 <span style={{fontSize:"11px", fontWeight:"normal", opacity:0.7, marginLeft:"6px"}}>(P.163-172)</span></div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"18px"}}>「設立界線意味著我在定別人的罪」——讓一個成年人承擔自己行為的後果，並不等於定罪；這反而是把他當作有責任能力的人來對待，是一種尊重。「界線會傷害別人」——對別人說「不」可能讓他們感到不舒服，但這和真正的傷害不同；讓他們學習面對現實，才是更深的愛。「我有責任為別人難受的感覺負責」——別人的情緒是別人的責任，不是你的。</p>
          </div>
          <div className="bg-amber-50 border-amber-200 border rounded-xl p-4 mb-3">
            <div className="font-bold text-amber-700 mb-1.5" style={{fontSize:"18px"}}>⚠️ 迷思七到八 <span style={{fontSize:"11px", fontWeight:"normal", opacity:0.7, marginLeft:"6px"}}>(P.172-178)</span></div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"18px"}}>「設定界線是永久性的」——界線是可以調整的，隨著對方的成長和信任的建立，你可以重新選擇開放或收緊。「界線讓我覺得充滿了憤怒」——在開始設立界線的早期，累積已久的憤怒確實可能湧現出來，這是過去被壓抑的抗議。這是正常的，不是界線造成了憤怒，而是界線給了憤怒一個安全的出口。</p>
          </div>
          <div className="bg-emerald-50 border-emerald-200 border rounded-xl p-4 mb-3">
            <div className="font-bold text-emerald-700 mb-1.5" style={{fontSize:"18px"}}>💡 本章的關鍵信息 <span style={{fontSize:"11px", fontWeight:"normal", opacity:0.7, marginLeft:"6px"}}>(P.153-178)</span></div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"18px"}}>每一個迷思的背後，都有一個需要被更新的信念。設立界線的旅程，同時也是一個「讓聖靈更新我們思想」的旅程。當我們開始相信「設立界線是愛，不是自私」、「尊重自己是敬虔，不是驕傲」，我們就開始真正地自由了。</p>
          </div>
        </div>

      <div className="bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-800 shadow-lg text-white mt-12">
        <h3 className="font-bold text-fuchsia-300 mb-6 flex items-center" style={{fontSize:"27px"}}>
          <Brain className="w-7 h-7 mr-3" />
          深度反思與行動指南 <span className="ml-3 bg-slate-700/50 text-slate-300 px-2 py-1 rounded-full font-normal border border-slate-600" style={{fontSize:"15px"}}>💡 延伸應用 (非原書內容)</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="font-bold text-fuchsia-200 mb-4 flex items-center" style={{fontSize:"23px"}}>
              <Brain className="w-5 h-5 mr-2 text-fuchsia-400" />
              反思問題
            </h4>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2 font-bold">1.</span>
                我是否曾認為「設界線就是自私」或「設界線會傷害別人」？這些迷思如何阻礙了我的人際關係？
              </li>
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2 font-bold">2.</span>
                當別人對我說「不」時，我會感到受傷或憤怒嗎？這是否代表我把別人的界線當成了對我個人的攻擊？
              </li>
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2 font-bold">3.</span>
                我是否認為「順服」就等於「沒有界線」？我是否曾在不情願的情況下，用「順服」來合理化自己的妥協？
              </li>
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2 font-bold">4.</span>
                當我設立界線後，如果對方生氣，我會立刻退縮並道歉嗎？我該如何區分「傷害」與「得罪」？
              </li>
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2 font-bold">5.</span>
                我是否常常覺得「如果我設了界線，別人就不會喜歡我了」？這種恐懼從何而來？
              </li>
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2 font-bold">6.</span>
                我是否曾把「界線」當成懲罰別人的工具，而不是保護自己的方式？
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
                當你因為設界線而感到內疚時，對自己大聲說：「保護自己的心是我的責任，這不是自私。」
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">2.</span>
                練習區分「受傷」與「受害」。如果你的拒絕讓別人失望（受傷），承認他們的感受，但不要因此覺得自己做錯了事（讓他們受害）。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">3.</span>
                當你對別人設界線而感到內疚時，把「內疚感」當作一個信號，提醒自己這正是你正在成長、打破舊有模式的證明。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">4.</span>
                練習區分「順服」與「恐懼」。當你答應某件事時，問自己：「我是出於愛而答應，還是因為害怕對方生氣？」
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
