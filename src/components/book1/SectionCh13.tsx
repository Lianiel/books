import { motion } from 'framer-motion';
import { User, AlertCircle, CheckCircle2, ShieldAlert, HeartCrack, Zap, Clock, BatteryWarning, Frown, Lightbulb, MessageCircle, Brain, Target } from 'lucide-react';

export default function SectionCh13() {
  const selfIssues = [
    {
      id: 1,
      title: "飲食與身體 (Food)",
      icon: <BatteryWarning className="w-6 h-6" />,
      page: "P322",
      desc: "用食物來安撫情緒、逃避痛苦，或在人際關係中建立距離。",
      scenario: "情境：在經歷了一場糟糕的約會或被老闆批評後，你一個人吃掉了一整桶冰淇淋和兩大包洋芋片。你覺得只有食物不會拒絕你。",
      breakthrough: "突破點：食物是燃料，不是朋友。當你想暴飲暴食時，問自己：「我現在真正在逃避什麼情緒？」打電話給一個安全的朋友，用真實的關係取代食物的安慰。"
    },
    {
      id: 2,
      title: "金錢與消費 (Money)",
      icon: <Zap className="w-6 h-6" />,
      page: "P325",
      desc: "無法延遲滿足，用透支消費來填補內心的空虛，或逃避努力工作的痛苦。",
      scenario: "情境：你每個月都把信用卡刷爆，買最新的手機或名牌包，即使你知道下個月繳不出卡費。你覺得「我值得對自己好一點」。",
      breakthrough: "突破點：透支消費是「現在的你」在偷竊「未來的你」的資源。承認自己在財務上失控，剪掉信用卡，開始記帳，並尋求財務或心理諮商。"
    },
    {
      id: 3,
      title: "時間管理 (Time)",
      icon: <Clock className="w-6 h-6" />,
      page: "P328",
      desc: "永遠遲到、拖延，這通常源於「全能的幻想」或對權威的潛意識反叛。",
      scenario: "情境：你跟朋友約好晚上七點吃飯，但你六點半還在處理工作，心想「我只要十分鐘就能洗好澡出門」，結果你七點半才到，讓朋友苦等。",
      breakthrough: "突破點：遲到是對別人界線的侵犯。承認自己不是超人，無法在10分鐘內做完30分鐘的事。開始練習提早15分鐘出門，尊重別人的時間。"
    },
    {
      id: 4,
      title: "任務完成 (Task Completion)",
      icon: <CheckCircle2 className="w-6 h-6" />,
      page: "P331",
      desc: "充滿熱情地開始許多計畫，卻很少完成。逃避過程中的枯燥與痛苦。",
      scenario: "情境：你買了五門線上課程、辦了健身房會員、買了吉他，但每件事都只堅持了兩個禮拜。只要一遇到困難或無聊，你就放棄並尋找下一個新目標。",
      breakthrough: "突破點：成熟的人能忍受過程中的無聊與挫折。不要再開啟新計畫，強迫自己把手上的一個計畫完成，即使它不再新鮮有趣。"
    },
    {
      id: 5,
      title: "言語與舌頭 (Words)",
      icon: <MessageCircle className="w-6 h-6" />,
      page: "P334",
      desc: "無法控制自己的嘴巴：愛八卦、說話傷人、或用喋喋不休來逃避沉默與親密。",
      scenario: "情境：在聚會中，你總是忍不住打斷別人，或者把話題轉到不在場的人的八卦上。當氣氛安靜下來時，你會感到極度焦慮，必須找話填滿空白。",
      breakthrough: "突破點：言語是有力量的。練習「快快地聽，慢慢地說」。在開口前問自己：「這句話有造就人的益處嗎？」學會安靜，忍受沉默帶來的不適感。"
    },
    {
      id: 6,
      title: "性與成癮 (Sex & Addictions)",
      icon: <HeartCrack className="w-6 h-6" />,
      page: "P337",
      desc: "用極端強烈的刺激（如色情、酒精、毒品）來麻痺深層的痛苦與孤單。",
      scenario: "情境：每當感到極度孤單或壓力大時，你就會沉溺於色情網站或酒精中。事後你感到極度羞愧，發誓下次不再犯，但下次壓力一來又故態復萌。",
      breakthrough: "突破點：成癮是靈魂在呼救。你無法靠自己的意志力戰勝成癮，因為成癮已經破壞了你的意志力。必須將問題帶到光中，加入互助團體（如AA），尋求專業治療與真實的群體支持。"
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 rounded-3xl p-8 md:p-10 border border-rose-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-sm font-bold mb-4">
            Chapter 13
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            界線與你自己
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed max-w-3xl">
            我們最大的敵人往往不是別人，而是我們自己。當我們無法對自己的慾望、情緒和衝動說「不」時，我們就失去了對自己生命的控制權。對自己設立界線，意味著承擔起管理自己靈魂的責任，不再讓本能和逃避心理主導我們的人生。
          </p>
        </div>
      </div>

      {/* Self Issues Grid */}
      <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
          <User className="w-7 h-7 mr-3 text-rose-500" />
          對自己失去界線的 6 大領域 (P322-340)
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {selfIssues.map((issue) => (
            <motion.div 
              key={issue.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-50 to-rose-50/30 rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-rose-100 p-3 rounded-xl text-rose-700 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                    {issue.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-800">領域 {issue.id}</h4>
                </div>
                <span className="text-xs font-medium text-slate-500 bg-white px-2 py-1 rounded-md border border-slate-200">{issue.page}</span>
              </div>
              
              <div className="space-y-4 flex-grow">
                <h5 className="font-bold text-rose-800 text-xl border-b border-rose-100 pb-2">{issue.title}</h5>
                <p className="text-slate-700 leading-relaxed text-base">
                  {issue.desc}
                </p>
                <div className="bg-white p-4 rounded-xl border border-slate-100">
                  <strong className="text-slate-800 text-sm block mb-2">🎬 具體情境：</strong>
                  <p className="text-sm text-slate-600 leading-relaxed">{issue.scenario}</p>
                </div>
                <div className="bg-rose-50/80 p-4 rounded-xl border border-rose-200 mt-auto">
                  <strong className="text-rose-800 text-sm flex items-center mb-2">
                    <Lightbulb className="w-4 h-4 mr-1 text-rose-600" />
                    解決突破點：
                  </strong>
                  <p className="text-sm text-rose-900/80 leading-relaxed">{issue.breakthrough}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why we fail */}
      <div className="bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-700 shadow-sm text-white">
        <h3 className="text-2xl font-bold text-rose-300 mb-8 flex items-center">
          <AlertCircle className="w-7 h-7 mr-3" />
          為什麼我們無法對自己說「不」？ (P341-345)
        </h3>
        
        <div className="space-y-6">
          <div className="bg-slate-700/50 p-6 rounded-2xl border border-slate-600 hover:bg-slate-700/80 transition-colors">
            <h4 className="text-xl font-bold text-rose-200 mb-3 flex items-center">
              <span className="bg-rose-500/20 p-2 rounded-lg mr-3 text-rose-400">1</span>
              我們在逃避深層的痛苦
            </h4>
            <p className="text-slate-300 text-base leading-relaxed">
              暴食、購物狂、工作狂或成癮，通常都只是一個「症狀」。真正的病因是我們內心有未處理的悲傷、孤單、恐懼或創傷。我們用這些外在的行為來麻醉自己，因為面對真實的痛苦太可怕了。
            </p>
          </div>
          <div className="bg-slate-700/50 p-6 rounded-2xl border border-slate-600 hover:bg-slate-700/80 transition-colors">
            <h4 className="text-xl font-bold text-rose-200 mb-3 flex items-center">
              <span className="bg-rose-500/20 p-2 rounded-lg mr-3 text-rose-400">2</span>
              我們缺乏安全的關係網絡
            </h4>
            <p className="text-slate-300 text-base leading-relaxed">
              意志力是會耗盡的。當我們試圖靠自己單打獨鬥來戒除壞習慣時，通常會失敗。我們需要「恩典與真理」的群體。恩典讓我們在失敗時不被定罪，真理讓我們面對現實並負起責任。
            </p>
          </div>
          <div className="bg-slate-700/50 p-6 rounded-2xl border border-slate-600 hover:bg-slate-700/80 transition-colors">
            <h4 className="text-xl font-bold text-rose-200 mb-3 flex items-center">
              <span className="bg-rose-500/20 p-2 rounded-lg mr-3 text-rose-400">3</span>
              錯誤的內在父母 (Harsh Inner Critic)
            </h4>
            <p className="text-slate-300 text-base leading-relaxed">
              許多人內心有一個嚴厲、定罪的聲音（通常來自童年經驗）。當我們做錯事時，這個聲音會狠狠地羞辱我們。為了逃避這種羞辱感，我們反而會更深地陷入成癮行為中尋求安慰，形成惡性循環。
            </p>
          </div>
        </div>
      </div>
      {/* Reflection & Action Guide */}
        {/* 本章總結 */}
        <div className="bg-gradient-to-br from-teal-50 to-slate-50 border border-teal-100 rounded-2xl p-6 mb-6">
          <h3 className="text-base font-bold text-teal-700 mb-4 flex items-center gap-2">
            <span className="text-lg">📝</span> 第13章總結：抗拒界線者
          </h3>
          <ul className="space-y-2.5">
              <li className="flex items-start gap-3">
                <span className="text-teal-500 mt-0.5 flex-shrink-0 font-bold">▸</span>
                <span className="text-slate-600 text-sm leading-relaxed">當你開始設立界線，有些人會強烈反對——他們的反應往往揭示了他們過去如何利用你沒有界線這件事。</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-500 mt-0.5 flex-shrink-0 font-bold">▸</span>
                <span className="text-slate-600 text-sm leading-relaxed">常見的抗拒策略包括：憤怒、哭泣、罪惡感操控、以受害者自居、冷戰或威脅。</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-500 mt-0.5 flex-shrink-0 font-bold">▸</span>
                <span className="text-slate-600 text-sm leading-relaxed">面對抗拒，最重要的是不因對方的情緒反應而放棄界線——對方的憤怒是他的責任，不是你的。</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-500 mt-0.5 flex-shrink-0 font-bold">▸</span>
                <span className="text-slate-600 text-sm leading-relaxed">有些關係在你設立界線後會真正改善，有些則不會——無論如何，堅守界線是對自己和對方都誠實的選擇。</span>
              </li>
          </ul>
        </div>

      <div className="bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-800 shadow-lg text-white mt-12">
        <h3 className="text-2xl font-bold text-teal-300 mb-6 flex items-center">
          <Brain className="w-7 h-7 mr-3" />
          深度反思與行動指南 <span className="ml-3 text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded-full font-normal border border-slate-600">💡 延伸應用 (非原書內容)</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="text-xl font-bold text-teal-200 mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-teal-400" />
              反思問題
            </h4>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start">
                <span className="text-teal-400 mr-2 font-bold">1.</span>
                我是否常常對自己設定過高的標準，當達不到時就嚴厲地自我批評？
              </li>
              <li className="flex items-start">
                <span className="text-teal-400 mr-2 font-bold">2.</span>
                在面對飲食、時間管理或金錢時，我是否常常覺得「失去控制」？
              </li>
              <li className="flex items-start">
                <span className="text-teal-400 mr-2 font-bold">3.</span>
                當我面對壓力時，我最常使用的「逃避機制」（如吃東西、購物、追劇）是什麼？這背後隱藏了什麼未被滿足的需求？
              </li>
              <li className="flex items-start">
                <span className="text-teal-400 mr-2 font-bold">4.</span>
                我是否常常對別人很寬容，對自己卻極度嚴苛？我該如何學習對自己展現恩典？
              </li>
              <li className="flex items-start">
                <span className="text-teal-400 mr-2 font-bold">5.</span>
                我是否常常用「我就是這樣的人」來合理化自己缺乏自制力的行為？
              </li>
              <li className="flex items-start">
                <span className="text-teal-400 mr-2 font-bold">6.</span>
                當我試圖改變一個壞習慣時，我是否總是單打獨鬥，而不願意尋求他人的幫助和監督？
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
                當你開始自我批評時，停下來問自己：「我會用這種語氣對我最好的朋友說話嗎？」試著用恩典對待自己。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">2.</span>
                選擇一個你覺得失控的領域（如：熬夜），設定一個「微小且可達成」的界線（例如：提早15分鐘上床睡覺），並尋求朋友的監督。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">3.</span>
                每天對著鏡子說一句肯定自己的話，練習用接納和慈愛的眼光看待自己的不完美。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">4.</span>
                當你感到壓力大想用吃/購物來發洩時，先暫停10分鐘，做點別的事（如散步、喝水），觀察衝動是否會減弱。
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
