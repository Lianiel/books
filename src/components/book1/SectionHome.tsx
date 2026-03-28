import { motion } from 'framer-motion';
import { Clock, AlertTriangle, BatteryWarning, Frown, PhoneCall, Briefcase, Home, Brain, Target } from 'lucide-react';

export default function SectionHome() {
  const timeline = [
    { time: "06:00", icon: <BatteryWarning className="w-5 h-5" />, title: "疲憊的開端", desc: "鬧鐘響起，雪莉感到極度煩躁與害怕面對新的一天。她對兒子陶德的問題感到無力，卻只能拖著疲憊的身軀起床。", page: "P21" },
    { time: "07:45", icon: <Home className="w-5 h-5" />, title: "混亂的早晨", desc: "昨晚為了應付母親突如其來的造訪與情緒勒索，熬夜幫女兒縫戲服。早晨在孩子賴床、丈夫抱怨的混亂中度過。", page: "P22-24" },
    { time: "11:59", icon: <PhoneCall className="w-5 h-5" />, title: "朋友的單向傾吐", desc: "接到朋友露易絲的電話，被迫聽她抱怨生活。雪莉心裡不滿這份失衡的友誼，但出於基督徒「愛人、助人」的教導與罪疚感，仍勉強傾聽，犧牲了自己的午餐時間。", page: "P25-26" },
    { time: "16:00", icon: <Briefcase className="w-5 h-5" />, title: "上司的不合理要求", desc: "上司傑夫在下班前把自己的報告丟給雪莉，要她隔天早上交。雪莉內心憤怒，卻為了維持「可靠、忠心」的形象而笑著答應，承擔了不屬於自己的責任。", page: "P26-27" },
    { time: "16:30", icon: <Frown className="w-5 h-5" />, title: "親師會談的挫折", desc: "與老師面談兒子陶德的問題。丈夫瓦特推說工作忙缺席。雪莉防衛性地想替兒子找藉口，最終卻崩潰哭泣，覺得自己被所有事情壓得喘不過氣。", page: "P27-29" },
    { time: "19:00", icon: <PhoneCall className="w-5 h-5" />, title: "教會的重擔", desc: "晚餐吃到一半，教會同工打來要求她接下退修會的工作。雪莉敵不過「成為活祭、不自私」的罪疚感聲音而妥協，放棄了自己寶貴的獨處時間。", page: "P30-32" },
    { time: "23:50", icon: <AlertTriangle className="w-5 h-5" />, title: "失衡的婚姻與孤獨", desc: "丈夫瓦特脾氣暴躁、控制欲強。雪莉發展出「按著瓦特的憤怒來愛他」的策略（察言觀色、無條件同意、討好），但這只讓她感到更多的憤怒與恐懼。深夜裡，她感到極度的孤獨與疲憊。", page: "P33-36" }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 rounded-3xl p-8 md:p-10 border border-rose-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-fuchsia-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-sm font-bold mb-4">
            Chapter 1
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            界線混亂的一天
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed max-w-3xl">
            雪莉是一個典型的「好基督徒」，努力滿足所有人的需求。然而，她的生活卻像一輛失速列車。她無法對周遭的人說「不」，導致自己深陷靈性與情緒的痛苦中。
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-white rounded-3xl shadow-sm p-6 md:p-10 border border-slate-200">
        <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
          <Clock className="w-7 h-7 mr-3 text-rose-500" />
          雪莉的日常：失去掌控的 18 小時
        </h3>
        
        <div className="relative border-l-4 border-rose-100 ml-4 md:ml-8 space-y-10 pb-4">
          {timeline.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 md:pl-10"
            >
              <div className="absolute -left-[22px] top-1 bg-white p-1.5 rounded-full border-4 border-rose-200 text-rose-500 shadow-sm">
                {item.icon}
              </div>
              <div className="bg-gradient-to-r from-white to-rose-50/30 rounded-2xl p-5 md:p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="flex flex-wrap items-center justify-between mb-3 gap-2">
                  <div className="flex items-center space-x-3">
                    <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-lg text-sm font-bold font-mono">
                      {item.time}
                    </span>
                    <h4 className="text-lg font-bold text-slate-800">{item.title}</h4>
                  </div>
                  <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-1 rounded-md">{item.page}</span>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Diagnosis Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-3xl p-8 border border-red-100 shadow-sm">
          <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
            <AlertTriangle className="w-6 h-6 mr-2 text-red-600" />
            界線缺失的嚴重警訊 (P33-36)
          </h3>
          <p className="text-red-700 leading-relaxed mb-4">
            當我們失去界線時，最明顯的信號就是<strong>「怨恨」(Resentment)</strong>。雪莉對每一個她所愛、所服事的人感到憤怒，因為她覺得自己是被迫的。
          </p>
          <ul className="space-y-3 text-sm text-red-800">
            <li className="flex items-start">
              <span className="mr-2 mt-0.5 text-red-500">❌</span>
              <span><strong>徒勞無功的努力：</strong>想要更加努力，是無法改善情況的。</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-0.5 text-red-500">❌</span>
              <span><strong>出於恐懼的良善：</strong>取悅他人的做法，並沒有帶來她所需要的連結和關係。</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-0.5 text-red-500">❌</span>
              <span><strong>替別人承擔責任：</strong>把上帝沒有要她處理的問題攬在身上（母親的孤單、上司的不負責任、丈夫的不成熟等）。</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700 shadow-sm text-white">
          <h3 className="text-xl font-bold text-rose-300 mb-4 flex items-center">
            <span className="text-2xl mr-2">🔍</span> 核心問題出在哪？ (P37-39)
          </h3>
          <p className="text-slate-300 leading-relaxed mb-6 text-lg">
            雪莉的痛苦源於<strong className="text-white border-b-2 border-rose-400 pb-0.5">「無法掌控自己的人生」</strong>。她無法分辨「什麼是自己的責任，什麼不是」。
          </p>
          <div className="bg-slate-800/50 p-5 rounded-2xl border border-slate-600">
            <p className="text-sm text-slate-300 italic leading-relaxed">
              「因為擁有上帝的形像，你我被造原就是為了承擔某些任務和責任。而所謂的負責或是掌控，有一部分就是要知道什麼是我們的工作，什麼不是。老是把不屬於自己的責任扛下來，最終只會累死自己。」
            </p>
          </div>
        </div>
      </div>
      {/* Reflection & Action Guide */}
        {/* 本章總結 */}
        <div className="bg-gradient-to-br from-teal-50 to-slate-50 border border-teal-100 rounded-2xl p-6 mb-6">
          <h3 className="text-base font-bold text-teal-700 mb-4 flex items-center gap-2">
            <span className="text-lg">📝</span> 第1章總結：界線混亂的一天
          </h3>
          <ul className="space-y-2.5">
              <li className="flex items-start gap-3">
                <span className="text-teal-500 mt-0.5 flex-shrink-0 font-bold">▸</span>
                <span className="text-slate-600 text-sm leading-relaxed">雪莉的一天完整呈現了「沒有界線」的生命樣貌——她對每個人的要求都說「好」，卻對自己的需要說「不」。</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-500 mt-0.5 flex-shrink-0 font-bold">▸</span>
                <span className="text-slate-600 text-sm leading-relaxed">界線的缺失不只讓人疲憊，更會讓關係失衡、靈性枯竭，甚至讓「愛人」變成「被人利用」。</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-500 mt-0.5 flex-shrink-0 font-bold">▸</span>
                <span className="text-slate-600 text-sm leading-relaxed">真正的問題不是外在的要求太多，而是內在沒有學會如何分辨「我的責任」和「別人的責任」。</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-500 mt-0.5 flex-shrink-0 font-bold">▸</span>
                <span className="text-slate-600 text-sm leading-relaxed">核心信息：你無法在自我耗盡的狀態下真正愛人，設立界線不是自私，而是健康愛人的前提。</span>
              </li>
          </ul>
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
                我生活中哪裡最常感到「不得不」的無力感？我是否常為了討好別人而犧牲自己的時間與健康？
              </li>
              <li className="flex items-start">
                <span className="text-rose-400 mr-2 font-bold">2.</span>
                當我對別人說「好」的時候，我內心真實的情緒是喜樂還是怨恨？
              </li>
              <li className="flex items-start">
                <span className="text-rose-400 mr-2 font-bold">3.</span>
                當我感到耗竭時，我是傾向於責怪別人（「他們要求太多」），還是願意檢視自己（「我為什麼不拒絕」）？
              </li>
              <li className="flex items-start">
                <span className="text-rose-400 mr-2 font-bold">4.</span>
                我是否常常覺得自己必須對別人的情緒負責，如果他們不開心，就是我的錯？
              </li>
              <li className="flex items-start">
                <span className="text-rose-400 mr-2 font-bold">5.</span>
                在我的生活中，我是否常常把別人的緊急事件，當成我自己的優先事項？
              </li>
              <li className="flex items-start">
                <span className="text-rose-400 mr-2 font-bold">6.</span>
                我是否害怕如果我說「不」，別人就會生氣、失望，甚至不再愛我？
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
                寫下今天讓你感到最耗竭的一件事，並思考如果你當時說「不」，最壞的結果是什麼？
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">2.</span>
                練習「暫停3秒」：下次有人提出要求時，不要立刻答應，先說「我需要看一下行事曆再回覆你」。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">3.</span>
                每天晚上睡前，寫下今天一件你成功捍衛自己時間或精力的小事，給自己肯定。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">4.</span>
                找出一個你經常「自動答應」的人或情境，預先準備好一句委婉但堅定的拒絕台詞（例如：「我現在真的沒辦法幫忙」）。
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
