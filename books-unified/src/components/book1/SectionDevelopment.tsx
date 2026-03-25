import { motion } from 'framer-motion';
import { Baby, Footprints, HeartHandshake, AlertTriangle, Wrench, ShieldAlert, HeartCrack, Frown, Users, Brain, Target } from 'lucide-react';

export default function SectionDevelopment() {
  const stages = [
    { id: 1, title: "孵化期 (Hatching)", age: "5-10個月", icon: <Baby className="w-5 h-5" />, desc: "嬰兒開始意識到自己和母親是不同的個體。他們開始探索周遭世界，對母親以外的事物產生興趣。", page: "P81" },
    { id: 2, title: "實踐期 (Practicing)", age: "10-18個月", icon: <Footprints className="w-5 h-5" />, desc: "幼兒學會走路，充滿活力與全能感。他們積極探索，覺得自己可以征服世界，但仍需要隨時回到母親身邊獲得安全感。", page: "P83" },
    { id: 3, title: "整合期 (Rapprochement)", age: "18-36個月", icon: <HeartHandshake className="w-5 h-5" />, desc: "幼兒意識到自己的脆弱，全能感消失。他們開始學習「好與壞」可以同時存在於自己和他人身上（客體恆常性）。這是界線發展最關鍵的時期。", page: "P84" }
  ];

  const injuries = [
    { id: 1, title: "退縮 (Withdrawal)", icon: <Frown className="w-5 h-5" />, desc: "當孩子嘗試獨立或表達不同意見時，父母收回愛與關注。孩子學會：獨立 = 失去愛。結果：成為順從者。", page: "P88" },
    { id: 2, title: "敵意 (Hostility)", icon: <ShieldAlert className="w-5 h-5" />, desc: "父母用憤怒或懲罰來回應孩子的獨立。孩子學會：獨立 = 被攻擊。結果：成為順從者或避開者。", page: "P89" },
    { id: 3, title: "過度控制 (Overcontrol)", icon: <AlertTriangle className="w-5 h-5" />, desc: "父母過度保護，不讓孩子犯錯或承擔後果。孩子學會：我沒有能力處理問題。結果：成為依賴者或控制者。", page: "P90" },
    { id: 4, title: "缺乏限制 (Lack of limits)", icon: <Users className="w-5 h-5" />, desc: "父母沒有設立適當的規範，或沒有執行後果。孩子學會：我的行為沒有後果。結果：成為控制者。", page: "P91" },
    { id: 5, title: "不一致 (Inconsistency)", icon: <HeartCrack className="w-5 h-5" />, desc: "父母的管教時而嚴厲，時而放縱。孩子學會：世界是不可預測的。結果：產生強烈的不安全感，界線混亂。", page: "P92" },
    { id: 6, title: "創傷 (Trauma)", icon: <ShieldAlert className="w-5 h-5" />, desc: "身體、情感或性虐待。孩子學會：世界是危險的，我的界線不被尊重。結果：嚴重的界線問題，如避開者。", page: "P93" },
    { id: 7, title: "罪性 (Sinful nature)", icon: <AlertTriangle className="w-5 h-5" />, desc: "我們天生就有反叛和自私的傾向，不喜歡被限制。這是所有界線問題的內在根源。", page: "P94" }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-3xl p-8 md:p-10 border border-amber-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-bold mb-4">
            Chapter 4
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            界線的發展歷程
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed max-w-3xl">
            界線不是與生俱來的，而是在成長過程中發展出來的。了解我們在童年時期如何學習（或未能學習）設立界線，是修復界線問題的第一步。
          </p>
        </div>
      </div>

      {/* Development Stages */}
      <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
          <Footprints className="w-7 h-7 mr-3 text-amber-500" />
          幼兒期的三個關鍵階段 (P81-86)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stages.map((stage) => (
            <motion.div 
              key={stage.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-amber-100 p-2 rounded-xl text-amber-600">
                    {stage.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-800">{stage.title}</h4>
                </div>
                <span className="text-xs font-medium text-slate-400 bg-white px-2 py-1 rounded-md border border-slate-200">{stage.page}</span>
              </div>
              <p className="text-amber-700 font-bold mb-3 text-sm">{stage.age}</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                {stage.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Object Constancy Note */}
        <div className="mt-8 bg-slate-800 rounded-2xl p-6 border border-slate-700 text-white">
          <h4 className="font-bold text-amber-400 mb-3 text-lg flex items-center">
            <HeartCrack className="w-5 h-5 mr-2" />
            關鍵概念：客體恆常性 (Object Constancy) (P85)
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            這是整合期最重要的發展任務。孩子必須學會：即使媽媽生氣（壞），她依然是愛我的媽媽（好）。如果沒有發展出客體恆常性，孩子長大後會傾向於「全好或全壞」的極端思維（例如：只要你反對我，你就是壞人）。
          </p>
        </div>
      </div>

      {/* Boundary Injuries */}
      <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
          <AlertTriangle className="w-7 h-7 mr-3 text-red-500" />
          界線受傷的原因 (P87-94)
        </h3>
        <p className="text-slate-600 leading-relaxed mb-8 text-lg">
          當父母無法提供安全、一致且有規範的環境時，孩子的界線發展就會受挫。以下是常見的七種界線傷害：
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {injuries.map((injury) => (
            <motion.div 
              key={injury.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-rose-50 rounded-2xl p-5 border border-rose-100 hover:border-red-200 hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2 text-red-600 group-hover:text-red-700">
                  {injury.icon}
                  <h4 className="font-bold">{injury.title}</h4>
                </div>
                <span className="text-xs font-medium text-slate-400 bg-white px-2 py-1 rounded-md border border-slate-200">{injury.page}</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {injury.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Repairing Boundaries */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 md:p-10 border border-emerald-100 shadow-sm">
        <h3 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center">
          <Wrench className="w-7 h-7 mr-3 text-emerald-600" />
          修復界線的希望 (P95-96)
        </h3>
        <p className="text-emerald-800 leading-relaxed mb-6 text-lg">
          好消息是，界線問題是可以修復的。上帝為我們預備了成長的途徑：
        </p>
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-sm">
            <h4 className="font-bold text-emerald-700 mb-2 text-lg">1. 恩典與真理的環境</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              我們需要一個安全的關係（恩典），在那裡我們可以真實地展現自己而不被定罪；同時也需要有人對我們說實話（真理），指出我們的問題。
            </p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-sm">
            <h4 className="font-bold text-emerald-700 mb-2 text-lg">2. 重新經歷發展階段</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              在安全的關係中，我們可能需要重新經歷「練習說不」、「表達憤怒」等童年未完成的發展任務。這是一個需要時間和耐心的過程。
            </p>
          </div>
        </div>
      </div>
      {/* Reflection & Action Guide */}
      <div className="bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-800 shadow-lg text-white mt-12">
        <h3 className="text-2xl font-bold text-emerald-300 mb-6 flex items-center">
          <Brain className="w-7 h-7 mr-3" />
          深度反思與行動指南 <span className="ml-3 text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded-full font-normal border border-slate-600">💡 延伸應用 (非原書內容)</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="text-xl font-bold text-emerald-200 mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-emerald-400" />
              反思問題
            </h4>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">1.</span>
                在我的原生家庭中，說「不」是被允許的嗎？我小時候表達憤怒或不同意見時，父母的反應是什麼？
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">2.</span>
                我現在的人際關係問題，是否反映了童年時期未完成的界線發展階段（如：無法分離、過度依賴）？
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">3.</span>
                在成長過程中，我是否曾因為表達真實感受而受到懲罰或被忽視？這如何影響了我現在的表達方式？
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">4.</span>
                我是否還在尋求父母（或權威人物）的認同，以至於無法過自己真正想要的生活？
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">5.</span>
                我是否常常覺得自己必須對父母的情緒負責，如果他們不開心，我就有罪惡感？
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">6.</span>
                在我的原生家庭中，我是否被允許擁有自己的隱私和獨立思考的空間？
              </li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="text-xl font-bold text-teal-300 mb-4 flex items-center">
              <Target className="w-5 h-5 mr-2 text-teal-400" />
              具體行動方案
            </h4>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start">
                <span className="text-teal-400 mr-2 font-bold">1.</span>
                找一個安全的朋友或輔導，分享你童年時對於「界線被侵犯」或「不被允許獨立」的記憶。
              </li>
              <li className="flex items-start">
                <span className="text-teal-400 mr-2 font-bold">2.</span>
                在安全的關係中，練習表達一次輕微的不同意見（例如：對晚餐吃什麼表達真實想法），體驗「不被拒絕」的安全感。
              </li>
              <li className="flex items-start">
                <span className="text-teal-400 mr-2 font-bold">3.</span>
                寫一封信（不一定要寄出）給過去侵犯你界線的人，誠實表達你當時的受傷與憤怒，幫助自己釋放情緒。
              </li>
              <li className="flex items-start">
                <span className="text-teal-400 mr-2 font-bold">4.</span>
                尋找一個支持性的小組或社群（如讀書會、教會小組），在安全的環境中練習表達真實的自己。
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
