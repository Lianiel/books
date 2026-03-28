import { motion } from 'framer-motion';
import { Sun, Coffee, Briefcase, Users, Moon, CheckCircle2, HeartHandshake, ShieldCheck, Zap, Frown, Smile, ArrowRight, Lightbulb, Clock, Brain, Target } from 'lucide-react';

export default function SectionCh17() {
  const timeline = [
    {
      time: "06:00 AM",
      icon: <Sun className="w-6 h-6" />,
      title: "主動的早晨 (Proactive Morning)",
      desc: "她不再被鬧鐘驚醒後匆忙應付家人的要求。她提早起床，享受安靜的咖啡時光，為自己的一天定調。",
      contrast: "過去：被孩子的哭鬧聲吵醒，充滿怨氣地開始一天，覺得自己是個受害者。",
      insight: "界線：她為自己的靈魂保留了第一段時間，這是對自己的責任。"
    },
    {
      time: "07:30 AM",
      icon: <Users className="w-6 h-6" />,
      title: "處理孩子的衝突 (Handling Kids)",
      desc: "孩子們為了玩具吵架。她沒有大吼大叫，而是平靜地說：「如果你們不能輪流玩，玩具就要沒收一天。」然後堅定地執行後果。",
      contrast: "過去：她會大發脾氣，威脅要打人，但最後總是妥協，讓孩子繼續吵鬧。",
      insight: "界線：她用「自然後果」取代「情緒發洩」，把責任還給孩子。"
    },
    {
      time: "09:30 AM",
      icon: <Briefcase className="w-6 h-6" />,
      title: "面對老闆的臨時要求 (Facing the Boss)",
      desc: "老闆丟來一個急件。她沒有立刻答應並暗自抱怨，而是說：「我可以做這個，但我手上的A專案就會延遲到明天，您覺得哪個優先？」",
      contrast: "過去：她會笑著說「沒問題」，然後中午不吃飯、晚上加班，內心充滿對老闆的怨恨。",
      insight: "界線：她不為老闆的情緒負責，只對自己的工作產能負責，並進行專業協商。"
    },
    {
      time: "12:30 PM",
      icon: <Coffee className="w-6 h-6" />,
      title: "與抱怨的朋友午餐 (Lunch with a Complainer)",
      desc: "朋友又開始抱怨丈夫。她聽了十分鐘後說：「我很遺憾你這麼痛苦，但我發現我們每次都在談這個，這讓我感到很沉重。我們能聊點別的嗎？」",
      contrast: "過去：她會當一小時的情緒垃圾桶，下午回到辦公室時精疲力盡。",
      insight: "界線：她愛朋友，但她拒絕參與朋友的「受害者遊戲」，保護了自己的情緒能量。"
    },
    {
      time: "06:00 PM",
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "面對配偶的情緒 (Spouse's Mood)",
      desc: "丈夫下班回家臉色很臭。她問了一句「還好嗎？」丈夫冷淡回應。她沒有覺得是自己做錯事，也沒有試圖去「修復」他的情緒，而是繼續做自己的事。",
      contrast: "過去：她會立刻感到焦慮，不斷追問「你怎麼了？是不是我哪裡做不好？」把丈夫的情緒當成自己的責任。",
      insight: "界線：她區分了「他的情緒」和「我的價值」。她給予關心，但不承擔對方的重擔。"
    },
    {
      time: "10:00 PM",
      icon: <Moon className="w-6 h-6" />,
      title: "平靜的夜晚 (Peaceful Night)",
      desc: "她關掉手機，不再回覆工作訊息。她回顧這一天，雖然有衝突和挑戰，但她感到平靜與自由，因為她沒有背叛自己。",
      contrast: "過去：她在床上翻來覆去，腦海裡全是對別人的怨恨和對明天未完待續工作的焦慮。",
      insight: "界線：她放下了「拯救世界」的幻想，安然入睡，知道神掌管明天。"
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-3xl p-8 md:p-10 border border-slate-700 shadow-sm relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-slate-700 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-slate-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-700 text-slate-300 text-sm font-bold mb-4 border border-slate-600">
            Chapter 17
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            有界線的一天
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
            這本書的最後一章，作者用一個虛構的故事，描繪了一個擁有健康界線的人，她的一天會是什麼樣子。這不是一個沒有衝突、沒有壓力的烏托邦，而是一個充滿了真實挑戰，但她卻能以自由、愛和責任感來回應的真實生活。這就是設立界線的最終目的：重新奪回你人生的主導權。
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
          <Clock className="w-7 h-7 mr-3 text-slate-600" />
          健康界線的日常實踐 (P422-435)
        </h3>
        
        <div className="relative border-l-4 border-slate-200 ml-4 md:ml-8 space-y-8 pb-4">
          {timeline.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 md:pl-10"
            >
              <div className="absolute -left-[22px] top-1 bg-white p-1.5 rounded-full border-4 border-slate-300 text-slate-600 shadow-sm">
                <div className="w-4 h-4 rounded-full bg-slate-600"></div>
              </div>
              
              <div className="bg-gradient-to-r from-slate-50 to-slate-100/50 rounded-2xl p-6 md:p-8 border border-slate-200 hover:border-slate-400 hover:shadow-lg transition-all flex flex-col">
                <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
                  <div className="flex items-center space-x-3">
                    <div className="bg-slate-200 p-2 rounded-lg text-slate-700">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold text-slate-800">{item.time} - {item.title}</h4>
                  </div>
                </div>
                
                <p className="text-base text-slate-700 leading-relaxed mb-6">
                  {item.desc}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-auto">
                  <div className="bg-rose-50 p-4 rounded-xl border border-rose-100">
                    <strong className="text-rose-800 text-sm flex items-center mb-1">
                      <Frown className="w-4 h-4 mr-1 text-rose-600" />
                      過去的無界線反應：
                    </strong>
                    <p className="text-sm text-rose-900/80">{item.contrast}</p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                    <strong className="text-emerald-800 text-sm flex items-center mb-1">
                      <ShieldCheck className="w-4 h-4 mr-1 text-emerald-600" />
                      現在的界線洞察：
                    </strong>
                    <p className="text-sm text-emerald-900/80">{item.insight}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-10 border border-emerald-700 shadow-lg text-white text-center mt-8">
        <h3 className="text-3xl font-bold mb-6">
          立界線，得自由
        </h3>
        <p className="text-emerald-100 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          界線不是為了把別人推開，而是為了保護你內心那個神聖的花園，讓愛、喜樂和平安能在其中生長。當你學會為自己的生命負責時，你就不再是環境的受害者，而是自己人生的管家。
        </p>
        <div className="inline-flex items-center justify-center px-6 py-3 bg-white text-emerald-700 rounded-full font-bold text-lg shadow-md">
          <CheckCircle2 className="w-6 h-6 mr-2" />
          恭喜你完成這趟旅程！
        </div>
      </div>
      {/* Reflection & Action Guide */}

        {/* 本章總結 */}
        <div className="bg-gradient-to-br from-teal-50 to-slate-50 border border-teal-100 rounded-2xl p-6 mb-6">
          <h3 className="text-base font-bold text-teal-700 mb-2 flex items-center gap-2">
            <span className="text-lg">📝</span> 第17章總結：界線帶來自由
          </h3>
          <p className="text-slate-500 text-xs mb-5 leading-relaxed">本章以雪莉的「重生版」一天作結——展示一個學會設立界線的人，生命看起來是什麼樣子。這不是一個完美的生命，而是一個真實的、有選擇的、有能力真正去愛的生命。</p>
          <div className="bg-blue-50 border-blue-200 border rounded-xl p-4 mb-3">
            <div className="text-xs font-bold text-blue-700 mb-1.5">📖 雪莉的新的一天</div>
            <p className="text-slate-600 text-sm leading-relaxed">本章以對比的方式，展示雪莉在學習界線後的同樣一天：早晨她主動起床、享受安靜；面對孩子的衝突，她平靜地設立後果並執行；面對上司的臨時要求，她清楚表達自己的工作優先次序；面對朋友的電話，她說「我現在在工作，晚點聯絡」；面對教會的要求，她誠實評估自己的能量然後做出真實的回應。</p>
          </div>
          <div className="bg-violet-50 border-violet-200 border rounded-xl p-4 mb-3">
            <div className="text-xs font-bold text-violet-700 mb-1.5">🔍 自由的真實樣貌</div>
            <p className="text-slate-600 text-sm leading-relaxed">作者指出，真正的自由不是隨心所欲，而是有能力選擇。當雪莉說「好」，那是她真實的選擇，不是恐懼的驅使；當她說「不」，那是她在保護神給她的生命，不是冷漠或自私。這種生命帶來的喜樂和平安，是以前那個永遠說「好」卻充滿怨恨的雪莉從未體驗過的。</p>
          </div>
          <div className="bg-amber-50 border-amber-200 border rounded-xl p-4 mb-3">
            <div className="text-xs font-bold text-amber-700 mb-1.5">⚠️ 界線是愛的最高表達</div>
            <p className="text-slate-600 text-sm leading-relaxed">作者以一個深刻的觀點作結：學會設立界線，讓你能夠更深、更真實地去愛人——因為你現在的愛，不再是出於恐懼或義務，而是出於充盛和自由。你能夠清楚地說「我愛你，而且我需要這個」，你能夠說「不」而不帶罪惡感，你能夠說「是」而充滿真心。這是界線帶給你的最深的禮物。</p>
          </div>
          <div className="bg-emerald-50 border-emerald-200 border rounded-xl p-4 mb-3">
            <div className="text-xs font-bold text-emerald-700 mb-1.5">💡 本章的關鍵信息</div>
            <p className="text-slate-600 text-sm leading-relaxed">這不是旅程的終點，而是起點。學習界線是一生的功課，不是一個可以「完成」的任務。但每一步的成長，都讓你更加自由、更真實地與神和與人相遇。這條路或許艱難，但它通向的，是你被創造來應該有的生命。</p>
          </div>
        </div>

      <div className="bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-800 shadow-lg text-white mt-12">
        <h3 className="text-2xl font-bold text-amber-300 mb-6 flex items-center">
          <Brain className="w-7 h-7 mr-3" />
          深度反思與行動指南 <span className="ml-3 text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded-full font-normal border border-slate-600">💡 延伸應用 (非原書內容)</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="text-xl font-bold text-amber-200 mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-amber-400" />
              反思問題
            </h4>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start">
                <span className="text-amber-400 mr-2 font-bold">1.</span>
                在日常生活中，我最容易在什麼時候（早晨、工作、晚上）失去界線？
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2 font-bold">2.</span>
                我是否每天都有保留一段「只屬於自己」的時間，用來充電和反思？
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2 font-bold">3.</span>
                在我每天的行程中，有多少比例的時間是花在「別人期待我做」的事情上，有多少是花在「對我真正重要」的事情上？
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2 font-bold">4.</span>
                當一天結束時，我是否能放下未完成的工作，安心地休息，相信明天還有足夠的恩典？
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2 font-bold">5.</span>
                我是否常常覺得「如果我不做，就沒有人會做」，而把所有的責任都攬在自己身上？
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2 font-bold">6.</span>
                在日常生活中，我是否能坦然地接受別人的幫助，而不是覺得自己必須「凡事靠自己」？
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
                明天早上起床後，先花10分鐘安靜、禱告或閱讀，不要立刻查看手機或回覆訊息。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">2.</span>
                在行事曆上，為自己安排一個「不可妥協的休息時間」（即使只有30分鐘），並像對待重要會議一樣尊重它。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">3.</span>
                每天早上列出今天的「三件最重要的事情」，並優先完成它們，保護你的時間不被瑣事吞噬。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">4.</span>
                練習在一天結束時進行「界線檢視」：問自己今天在哪裡成功守住了界線？哪裡還需要改進？並為明天的進步禱告。
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
