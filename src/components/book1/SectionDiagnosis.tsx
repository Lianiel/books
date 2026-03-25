import { motion } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { AlertOctagon, UserX, ShieldOff, EarOff, Users, Zap, HeartCrack, Brain, Target } from 'lucide-react';

export default function SectionDiagnosis() {
  const radarData = [
    { subject: '順從者', A: 100, B: 20, fullMark: 100 },
    { subject: '避開者', A: 20, B: 100, fullMark: 100 },
    { subject: '控制者', A: 80, B: 80, fullMark: 100 },
    { subject: '沒有反應者', A: 20, B: 20, fullMark: 100 },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 rounded-3xl p-8 md:p-10 border border-violet-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-fuchsia-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-sm font-bold mb-4">
            Chapter 3
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            當界線出了問題
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed max-w-3xl">
            界線問題不是單一的，而是有不同的樣貌。我們可能會在某些關係中表現出一種問題，在另一種關係中又表現出另一種。了解這四種主要的界線問題，有助於我們對症下藥。
          </p>
        </div>
      </div>

      {/* The 4 Profiles */}
      <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
          <Users className="w-7 h-7 mr-3 text-violet-500" />
          四種界線問題的典型 (P63-75)
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Compliant */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 border border-indigo-100 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-indigo-100 p-2 rounded-xl">
                  <UserX className="w-6 h-6 text-indigo-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-800">1. 順從者 (Compliants)</h4>
              </div>
              <span className="text-xs font-medium text-slate-400 bg-white px-2 py-1 rounded-md border border-slate-200">P63</span>
            </div>
            <p className="text-indigo-700 font-medium mb-3">「對壞事說『好』：無法說『不』」</p>
            <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
              <li><strong>特徵：</strong>像變色龍，為了融入環境而隱藏真實的自己。界線模糊，容易被別人的要求淹沒。</li>
              <li><strong>恐懼來源：</strong>害怕傷害別人的感覺、害怕被遺棄、害怕別人的怒氣、害怕被懲罰、害怕被貼上「自私」的標籤、害怕內在嚴厲的良知。</li>
              <li><strong>結果：</strong>承擔了過多的責任，內心充滿怨恨，覺得自己是受害者。</li>
            </ul>
          </motion.div>

          {/* Avoidant */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-emerald-100 p-2 rounded-xl">
                  <ShieldOff className="w-6 h-6 text-emerald-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-800">2. 避開者 (Avoidants)</h4>
              </div>
              <span className="text-xs font-medium text-slate-400 bg-white px-2 py-1 rounded-md border border-slate-200">P66</span>
            </div>
            <p className="text-emerald-700 font-medium mb-3">「對好事說『不』：無法接受幫助」</p>
            <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
              <li><strong>特徵：</strong>築起高牆，不讓任何人進來。當自己有需要時，無法開口求助，也無法接受別人的關心。</li>
              <li><strong>原因：</strong>界線缺乏滲透性。可能因為過去受過傷，認為「沒有人會真的幫我」，或者把「需要別人」視為軟弱。</li>
              <li><strong>結果：</strong>極度孤單，獨自承受痛苦，無法體驗到真正的親密關係。</li>
            </ul>
          </motion.div>

          {/* Controller */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-rose-50 to-red-50 rounded-2xl p-6 border border-rose-100 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-rose-100 p-2 rounded-xl">
                  <Zap className="w-6 h-6 text-rose-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-800">3. 控制者 (Controllers)</h4>
              </div>
              <span className="text-xs font-medium text-slate-400 bg-white px-2 py-1 rounded-md border border-slate-200">P68</span>
            </div>
            <p className="text-rose-700 font-medium mb-3">「不尊重別人的界線：無法聽見『不』」</p>
            <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
              <li><strong>特徵：</strong>把責任推給別人，要求別人為他們的生活負責。無法忍受別人對他們說「不」。</li>
              <li><strong>兩種類型：</strong>
                <ul className="pl-5 mt-1 space-y-1">
                  <li><strong className="text-rose-600">侵略型 (Aggressive)：</strong>直接無視別人的界線，用言語或行為強迫別人屈服。</li>
                  <li><strong className="text-rose-600">操縱型 (Manipulative)：</strong>用罪疚感、暗示或情緒勒索，讓別人「自願」為他們做事。</li>
                </ul>
              </li>
              <li><strong>結果：</strong>周圍的人感到被利用和窒息，關係中缺乏真正的愛，只有控制。</li>
            </ul>
          </motion.div>

          {/* Nonresponsive */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-100 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-amber-100 p-2 rounded-xl">
                  <EarOff className="w-6 h-6 text-amber-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-800">4. 沒有反應者 (Nonresponsives)</h4>
              </div>
              <span className="text-xs font-medium text-slate-400 bg-white px-2 py-1 rounded-md border border-slate-200">P72</span>
            </div>
            <p className="text-amber-700 font-medium mb-3">「對別人的需要說『不』：無法去愛」</p>
            <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
              <li><strong>特徵：</strong>對別人的痛苦和需要視而不見。當別人需要幫助時，他們選擇忽略或逃避。</li>
              <li><strong>原因：</strong>可能過於專注於自己的事情，或者認為「每個人都該為自己負責」，將界線的觀念極端化，忽略了「互相擔當重擔」的聖經教導。</li>
              <li><strong>結果：</strong>顯得冷漠無情，無法建立深厚、互相扶持的關係。</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Functional vs Relational Boundaries */}
      <div className="bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-700 shadow-sm text-white">
        <h3 className="text-2xl font-bold text-violet-300 mb-6 flex items-center">
          <HeartCrack className="w-7 h-7 mr-3" />
          功能性界線 vs. 關係性界線 (P75)
        </h3>
        <p className="text-slate-300 leading-relaxed mb-8 text-lg">
          這是一個常見的盲點：一個人在工作上可能非常成功，但在人際關係中卻一塌糊塗。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-700/50 p-6 rounded-2xl border border-slate-600">
            <h4 className="font-bold text-violet-400 mb-3 text-xl">功能性界線 (Functional)</h4>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              指的是完成任務、計畫、目標的能力。例如：準時交報告、把家裡打掃乾淨、管理財務。
            </p>
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-600">
              <p className="text-sm text-slate-400 italic">
                <strong>聖經例子：馬大 (Martha)</strong><br/>
                她忙於伺候耶穌，功能性界線很強，但忽略了關係。
              </p>
            </div>
          </div>
          <div className="bg-slate-700/50 p-6 rounded-2xl border border-slate-600">
            <h4 className="font-bold text-fuchsia-400 mb-3 text-xl">關係性界線 (Relational)</h4>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              指的是與他人建立真實、親密連結的能力。例如：誠實表達感受、拒絕不合理要求、傾聽他人的需要。
            </p>
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-600">
              <p className="text-sm text-slate-400 italic">
                <strong>聖經例子：馬利亞 (Mary)</strong><br/>
                她選擇坐在耶穌腳前聽道，看重關係，但可能在功能上（幫忙家務）有所欠缺。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Radar Chart & Fatal Combinations */}
      <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
          <AlertOctagon className="w-7 h-7 mr-3 text-red-500" />
          致命的組合 (P74)
        </h3>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2 h-64 md:h-80 bg-slate-50 rounded-2xl border border-slate-100 p-4">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#475569', fontSize: 14, fontWeight: 600 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar name="界線問題傾向" dataKey="A" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.4} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="w-full lg:w-1/2 space-y-6">
            <p className="text-slate-600 leading-relaxed text-lg">
              這四種問題很少單獨存在，它們經常互相吸引，形成破壞性的關係模式。
            </p>
            <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
              <h4 className="font-bold text-red-800 mb-3 text-lg">最常見的致命組合：<br/>控制者 ＋ 順從者</h4>
              <p className="text-sm text-red-700 leading-relaxed">
                控制者尋找願意承擔責任、不會說「不」的人；而順從者尋找能告訴他們該怎麼做、替他們做決定的人。
              </p>
              <p className="text-sm text-red-700 leading-relaxed mt-2">
                這是一場災難。控制者越來越跋扈，順從者越來越充滿怨恨。直到順從者崩潰，或者控制者找到下一個目標。
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Reflection & Action Guide */}
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
                在人際關係中，我最常扮演哪種角色？（順從者、控制者、不回應者、逃避者）
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2 font-bold">2.</span>
                這種互動模式為我帶來了什麼短期的好處（如避免衝突），又造成了什麼長期的壞處（如失去自我）？
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2 font-bold">3.</span>
                當別人對我設立界線時，我會覺得被拒絕或不被愛嗎？這反映了我內心對關係的什麼期待？
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2 font-bold">4.</span>
                我是否常常用「被動攻擊」（如生悶氣、拖延）來表達不滿，而不是直接說出我的需求？
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2 font-bold">5.</span>
                我是否常常覺得自己必須「拯救」別人，否則他們就會崩潰？這是否剝奪了他們為自己負責的機會？
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2 font-bold">6.</span>
                在我的關係中，我是否常常感到精疲力竭，因為我承擔了太多不屬於我的責任？
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
                觀察自己這週的互動，記錄下一次你「想說不卻說好」的時刻，並寫下當時內心真正的恐懼是什麼。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">2.</span>
                如果你是控制者，本週嘗試一次「接受別人的拒絕而不發脾氣」；如果你是順從者，嘗試對一件小事表達真實的偏好。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">3.</span>
                如果你是「不回應者」，本週主動關心一位朋友的需求，並提供一次實質的幫助。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">4.</span>
                如果你是「逃避者」，嘗試在面對衝突時不要立刻離開現場，深呼吸並試著表達你當下的感受。
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
