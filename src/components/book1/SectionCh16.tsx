import { motion } from 'framer-motion';
import { TrendingUp, CheckCircle2, Flag, ArrowRight, Target, Trophy, HeartHandshake, ShieldCheck, Zap, Frown, Smile, Lightbulb, Brain } from 'lucide-react';

export default function SectionCh16() {
  const steps = [
    {
      id: 1,
      title: "怨恨 (Resentment)",
      icon: <Frown className="w-6 h-6" />,
      page: "P400",
      desc: "這是改變的第一個信號。你開始對那些不斷越界的人感到憤怒和厭煩。這代表你的「界線雷達」終於開始運作了。",
      scenario: "情境：你突然意識到，每次幫同事代班時，你不再覺得自己是個「好人」，而是覺得「憑什麼總是我？」",
      insight: "洞察：不要壓抑怨恨，它是靈魂的警報器，告訴你有人正在侵犯你的領地。"
    },
    {
      id: 2,
      title: "連結 (Connection)",
      icon: <HeartHandshake className="w-6 h-6" />,
      page: "P403",
      desc: "你無法獨自完成界線的建立。你需要找到「安全的人」來支持你，讓你在說「不」時不至於感到孤立無援。",
      scenario: "情境：你參加了一個支持小組或找了心理諮商師，當你告訴他們你拒絕了母親的不合理要求時，他們為你歡呼，而不是定罪你。",
      insight: "洞察：在面對不安全的人之前，先在安全的人那裡把你的「愛之槽」加滿。"
    },
    {
      id: 3,
      title: "停止責怪 (Stop Blaming)",
      icon: <ShieldCheck className="w-6 h-6" />,
      page: "P406",
      desc: "你不再把自己的痛苦歸咎於別人（「都是他逼我的」），而是承擔起保護自己的責任（「是我允許他這樣對我的」）。",
      scenario: "情境：你不再抱怨老闆總是週末找你，而是承認：「是我自己選擇在週末接電話的，我有責任把手機關掉。」",
      insight: "洞察：責怪別人會讓你成為受害者；承擔責任會讓你奪回力量。"
    },
    {
      id: 4,
      title: "早期的練習 (Early Practice)",
      icon: <Zap className="w-6 h-6" />,
      page: "P409",
      desc: "這是界線發展的「青少年時期」。你可能會對每件事都說「不」，甚至顯得有點防衛過當或具攻擊性。",
      scenario: "情境：朋友只是隨口問你要不要一起吃午餐，你卻像刺蝟一樣回答：「我為什麼一定要跟你吃？我有我的自由！」",
      insight: "洞察：這是正常的過渡期。就像剛學走路的孩子會跌倒一樣，剛學會設界線的人也會拿捏不好力道。給自己犯錯的空間。"
    },
    {
      id: 5,
      title: "對自己說不 (Saying No to Self)",
      icon: <Target className="w-6 h-6" />,
      page: "P412",
      desc: "你開始將界線的焦點從「別人」轉向「自己」。你學會對自己的衝動、拖延和不健康的慾望說「不」。",
      scenario: "情境：你不再只是拒絕別人的加班要求，你也開始拒絕自己熬夜追劇的衝動，因為你知道你需要睡眠。",
      insight: "洞察：真正的自由不是想做什麼就做什麼，而是有能力不做那些會傷害自己的事。"
    },
    {
      id: 6,
      title: "價值觀 (Values)",
      icon: <Flag className="w-6 h-6" />,
      page: "P415",
      desc: "你的界線不再只是「被動防禦」（拒絕壞事），而是「主動追求」（選擇好事）。你清楚知道自己要什麼。",
      scenario: "情境：你拒絕了一個高薪但需要頻繁出差的工作，不是因為你害怕壓力，而是因為你清楚你的核心價值觀是「陪伴家人」。",
      insight: "洞察：當你清楚你的「是（Yes）」是什麼時，你的「不（No）」就會變得非常有力量。"
    },
    {
      id: 7,
      title: "愛與自由 (Love and Freedom)",
      icon: <Smile className="w-6 h-6" />,
      page: "P418",
      desc: "界線的最高境界。你不再出於恐懼或罪疚感而付出，你的付出完全出於自由意志與愛。",
      scenario: "情境：你自願週末去幫朋友搬家，不是因為怕他生氣，也不是為了討好他，而是因為你真的很愛他，且你當天有足夠的體力。",
      insight: "洞察：成熟的界線不是一堵牆，而是一扇有鎖的門。你可以自由地把壞的擋在外面，把好的迎進來。"
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-teal-50 via-emerald-50 to-green-50 rounded-3xl p-8 md:p-10 border border-teal-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 text-teal-800 font-bold mb-4" style={{fontSize:"17px"}}>
            Chapter 16
          </div>
          <h2 className="md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight" style={{fontSize:"33px"}}>
            如何評估我的界線發展
          </h2>
          <p className="text-slate-700 leading-relaxed max-w-3xl" style={{fontSize:"21px"}}>
            建立界線不是一個瞬間完成的魔法，而是一段需要時間、練習和經歷挫折的旅程。這段旅程有其可預測的階段。了解這些階段，能幫助你在遇到挫折時不至於放棄，並清楚知道自己正朝著哪個方向前進。
          </p>
        </div>
      </div>

      {/* Progress Steps Timeline */}
      <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-8 flex items-center" style={{fontSize:"27px"}}>
          <TrendingUp className="w-7 h-7 mr-3 text-teal-500" />
          界線發展的 7 個階段 (P400-420)
        </h3>
        
        <div className="relative border-l-4 border-teal-100 ml-4 md:ml-8 space-y-8 pb-4">
          {steps.map((step, idx) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 md:pl-10"
            >
              <div className="absolute -left-[22px] top-1 bg-white p-1.5 rounded-full border-4 border-teal-200 text-teal-500 shadow-sm">
                <div className="w-4 h-4 rounded-full bg-teal-500"></div>
              </div>
              
              <div className="bg-gradient-to-r from-slate-50 to-teal-50/30 rounded-2xl p-6 md:p-8 border border-slate-100 hover:border-teal-300 hover:shadow-lg transition-all flex flex-col">
                <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
                  <div className="flex items-center space-x-3">
                    <div className="bg-teal-100 p-2 rounded-lg text-teal-700">
                      {step.icon}
                    </div>
                    <h4 className="font-bold text-slate-800" style={{fontSize:"23px"}}>階段 {step.id}: {step.title}</h4>
                  </div>
                  <span className="font-medium text-slate-500 bg-white px-2 py-1 rounded-md border border-slate-200" style={{fontSize:"15px"}}>{step.page}</span>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-6" style={{fontSize:"19px"}}>
                  {step.desc}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-auto">
                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <strong className="text-slate-800 block mb-1" style={{fontSize:"17px"}}>🎬 具體情境：</strong>
                    <p className="text-slate-600" style={{fontSize:"17px"}}>{step.scenario}</p>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-xl border border-teal-200">
                    <strong className="text-teal-800 flex items-center mb-1" style={{fontSize:"17px"}}>
                      <Lightbulb className="w-4 h-4 mr-1 text-teal-600" />
                      核心洞察：
                    </strong>
                    <p className="text-teal-900/80" style={{fontSize:"17px"}}>{step.insight}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Encouragement */}
      <div className="bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-700 shadow-sm text-white mt-8">
        <h3 className="font-bold text-teal-300 mb-6 flex items-center" style={{fontSize:"27px"}}>
          <Trophy className="w-7 h-7 mr-3" />
          給正在路上的你
        </h3>
        <p className="text-slate-300 leading-relaxed mb-6" style={{fontSize:"21px"}}>
          如果你發現自己正處於「怨恨」或「防衛過當」的階段，請不要氣餒。這就像毛毛蟲破繭而出之前的掙扎，是必經的過程。
        </p>
        <div className="bg-slate-700/50 p-6 rounded-2xl border border-slate-600">
          <ul className="space-y-4 text-slate-300">
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 mr-3 text-teal-400 shrink-0 mt-0.5" />
              <span><strong>允許退步：</strong> 建立界線是「進兩步，退一步」的過程。有時候你還是會屈服於罪疚感，沒關係，原諒自己，下次再來。</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="w-6 h-6 mr-3 text-teal-400 shrink-0 mt-0.5" />
              <span><strong>慶祝小勝利：</strong> 第一次對推銷員說「不」、第一次掛斷情緒勒索的電話，這些看似微小的舉動，都是你奪回主權的重大里程碑。</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Reflection & Action Guide */}

        {/* 本章總結 */}
        <div className="bg-gradient-to-br from-teal-50 to-slate-50 border border-teal-100 rounded-2xl p-6 mb-6">
          <h3 className="font-bold text-teal-700 mb-2 flex items-center gap-2" style={{fontSize:"22px"}}>
            <span style={{fontSize:"24px"}}>📝</span> 第16章總結：界線帶來成長
          </h3>
          <p className="text-slate-500 mb-5 leading-relaxed" style={{fontSize:"18px"}}>本章描述設立界線的過程，以及在這個旅程中需要培養的五個內在能力。作者指出，界線的成長不只是技巧的學習，更是整個人格和靈性的蛻變。</p>
          <div className="bg-blue-50 border-blue-200 border rounded-xl p-4 mb-3">
            <div className="font-bold text-blue-700 mb-1.5" style={{fontSize:"18px"}}>📖 成長的五個步驟 <span style={{fontSize:"11px", fontWeight:"normal", opacity:0.7, marginLeft:"6px"}}>(P.400-406)</span></div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"20px"}}>作者描述界線成長的五個里程碑：第一，怨恨的出現——怨恨是界線被長期侵犯的信號，它告訴你「某些事情需要改變」；第二，尋找連結——你無法獨自走這條路，你需要安全的人際支持；第三，停止責怪——從「都是他逼我的」轉到「是我允許這件事發生的」，這是真正改變的開始；第四，練習說不；第五，喜樂的出現——當界線開始建立，你會發現一種全新的自由和喜樂。</p>
          </div>
          <div className="bg-violet-50 border-violet-200 border rounded-xl p-4 mb-3">
            <div className="font-bold text-violet-700 mb-1.5" style={{fontSize:"18px"}}>🔍 從怨恨到喜樂的蛻變 <span style={{fontSize:"11px", fontWeight:"normal", opacity:0.7, marginLeft:"6px"}}>(P.406-412)</span></div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"20px"}}>作者描述了一個深刻的蛻變歷程：在界線缺失的狀態下，我們活在一種被動的、受害者式的憤怒中；當我們開始設立界線，我們進入主動掌握自己生命的狀態；當界線成熟，我們不再需要用憤怒來捍衛自己，因為界線已經自然地保護了我們。這個過程通常需要數年，而不是數週。</p>
          </div>
          <div className="bg-amber-50 border-amber-200 border rounded-xl p-4 mb-3">
            <div className="font-bold text-amber-700 mb-1.5" style={{fontSize:"18px"}}>⚠️ 界線的誤用：孤立不是界線 <span style={{fontSize:"11px", fontWeight:"normal", opacity:0.7, marginLeft:"6px"}}>(P.412-418)</span></div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"20px"}}>本章也特別警告一種界線的誤用：用「界線」為名來孤立自己、拒絕所有連結和親密關係。這不是健康的界線，而是傷痛的防衛機制。真正的界線是有選擇地開放和保護，讓真實的連結能夠發生，同時保護自己不受傷害。</p>
          </div>
          <div className="bg-emerald-50 border-emerald-200 border rounded-xl p-4 mb-3">
            <div className="font-bold text-emerald-700 mb-1.5" style={{fontSize:"18px"}}>💡 本章的關鍵信息 <span style={{fontSize:"11px", fontWeight:"normal", opacity:0.7, marginLeft:"6px"}}>(P.400-418)</span></div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"20px"}}>界線的成長是一個整全的靈性和情感旅程。它需要誠實、連結、勇氣、時間和神的恩典。在這個過程中，你不只是在學習說「不」，你是在學習成為一個更真實、更有能力愛人的自己。</p>
          </div>
        </div>

      <div className="bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-800 shadow-lg text-white mt-12">
        <h3 className="font-bold text-emerald-300 mb-6 flex items-center" style={{fontSize:"27px"}}>
          <Brain className="w-7 h-7 mr-3" />
          深度反思與行動指南 <span className="ml-3 bg-slate-700/50 text-slate-300 px-2 py-1 rounded-full font-normal border border-slate-600" style={{fontSize:"15px"}}>💡 延伸應用 (非原書內容)</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="font-bold text-emerald-200 mb-4 flex items-center" style={{fontSize:"23px"}}>
              <Brain className="w-5 h-5 mr-2 text-emerald-400" />
              反思問題
            </h4>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">1.</span>
                回顧過去一個月，我在哪一個關係中成功地表達了「不」？我當時的感受如何？
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">2.</span>
                我是否開始能區分「別人對我生氣」和「我做錯了事」？我還會因為別人的情緒而輕易感到內疚嗎？
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">3.</span>
                當我因為設立界線而感到內疚時，我是否能意識到這是一種「健康的內疚」（代表我正在改變），而不是「真實的罪惡」？
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">4.</span>
                我是否開始能夠在沒有罪疚感的情況下，享受自己喜歡的事物，並為自己的選擇負責？
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">5.</span>
                在設立界線的過程中，我是否曾經歷過「防衛過當」的階段（對任何小事都反應過度）？我現在是否能更溫和地表達界線？
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">6.</span>
                我是否開始吸引那些尊重我界線的人進入我的生活，並自然地遠離那些試圖控制我的人？
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
                寫下三個你在建立界線上的「微小勝利」（例如：沒有接聽週末的工作電話），並給自己一個小獎勵。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">2.</span>
                當你因為設界線而感到內疚時，記錄下這個感受，並提醒自己：「內疚是成長的過渡期，它代表我正在改變舊有的模式。」
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">3.</span>
                找一個界線夥伴（Accountability Partner），每週定期交流彼此在設定界線上的進展和挑戰。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">4.</span>
                當你發現自己又退回舊有的無界線模式時，不要氣餒，把它當作一次學習的機會，分析原因並計畫下次如何改進。
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
