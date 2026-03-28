import { motion } from 'framer-motion';
import { Briefcase, AlertTriangle, ShieldCheck, Clock, Users, HeartCrack, Zap, Lightbulb, Brain, Target } from 'lucide-react';

export default function SectionCh11() {
  const problems = [
    {
      id: 1,
      title: "為別人背負責任 (Taking on Others' Responsibilities)",
      icon: <Users className="w-6 h-6" />,
      page: "P280",
      desc: "替不負責任的同事擦屁股。這會讓他們繼續不負責任，而你則會充滿怨恨。",
      scenario: "情境：同事A總是拖延，導致團隊專案進度落後。為了不讓老闆生氣，你常常加班幫A完成他的部分。A不但沒有改進，反而覺得「反正你會做」。",
      breakthrough: "突破點：停止扮演拯救者。讓A承擔他行為的後果（被老闆責罵或績效變差）。你可以說：「我已經完成了我的部分，剩下的需要你自己處理，我今晚無法加班。」"
    },
    {
      id: 2,
      title: "工作過分超時 (Working Overtime)",
      icon: <Clock className="w-6 h-6" />,
      page: "P283",
      desc: "無法對不合理的工作量說「不」，導致個人生活與健康被工作完全吞噬。",
      scenario: "情境：老闆在下午四點半交給你一個需要三天才能完成的新專案，並說「明天早上開會要看」。你內心崩潰，但還是笑著說「沒問題」，然後熬夜到天亮。",
      breakthrough: "突破點：老闆的工作是分配任務，你的工作是管理自己的極限。學會協商優先順序：「我很樂意接手這個專案，但我手上還有B和C。如果這個明天要，B和C就必須延後。您希望我先處理哪一個？」"
    },
    {
      id: 3,
      title: "優先次序錯亂 (Misplaced Priorities)",
      icon: <AlertTriangle className="w-6 h-6" />,
      page: "P286",
      desc: "把時間花在不重要的事情上，或者讓別人的「緊急事件」變成你的「緊急事件」。",
      scenario: "情境：你原本計畫早上要專心寫一份重要的企劃案，但同事不斷跑來問你一些瑣碎的問題，或者你一直回覆不重要的Email，結果一天結束了，企劃案連一個字都沒寫。",
      breakthrough: "突破點：學會對「好」的事說不，才能對「最好」的事說好。設定專注時間（如：早上9-11點不看Email、不接內線），保護你的核心產出。"
    },
    {
      id: 4,
      title: "難相處的同事 (Difficult Coworkers)",
      icon: <HeartCrack className="w-6 h-6" />,
      page: "P288",
      desc: "遇到愛抱怨、愛批評、八卦或推卸責任的同事，吸收了他們的負能量。",
      scenario: "情境：午餐時間，同事B不斷抱怨公司的制度、老闆的愚蠢和其他同事的八卦。你聽得覺得很累，但又不好意思打斷他。",
      breakthrough: "突破點：你沒有義務成為別人的情緒垃圾桶。設立對話界線：「我現在不想談論公司的負面消息，我們聊聊週末的計畫吧？」如果對方繼續，你可以選擇離開現場。"
    },
    {
      id: 5,
      title: "權威衝突 (Authority Conflicts)",
      icon: <Zap className="w-6 h-6" />,
      page: "P290",
      desc: "把老闆當成父母，產生不理性的恐懼（過度討好）或反叛（莫名敵意）。這是一種心理學上的「移情作用」。",
      scenario: "情境：老闆只是問了一句「這個專案進度如何？」你就立刻覺得他在指責你做不好，開始過度防衛或感到極度焦慮，就像小時候面對嚴厲的父親一樣。",
      breakthrough: "突破點：認清老闆只是工作上的管理者，他付錢買你的專業服務，他不是你價值的決定者，也不是你的父母。保持專業的成人對成人（Adult-to-Adult）的溝通模式。"
    },
    {
      id: 6,
      title: "期待太多 (Expecting Too Much)",
      icon: <ShieldCheck className="w-6 h-6" />,
      page: "P292",
      desc: "期望工作能滿足所有的情感需求（如被無條件愛、被完全肯定、像個大家庭）。",
      scenario: "情境：公司因為不景氣進行裁員，你感到被深深背叛，覺得「我為公司付出這麼多，公司怎麼可以這樣對我？我們不是一家人嗎？」",
      breakthrough: "突破點：認清現實：公司是一個經濟實體，不是一個家庭。工作就是工作。你的情感需求（無條件的愛與接納）應該在家庭、朋友和信仰中尋求滿足，而不是在職場。"
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-3xl p-8 md:p-10 border border-amber-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-bold mb-4">
            Chapter 11
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            界線與工作
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed max-w-3xl">
            工作是上帝賦予我們的使命，但如果沒有適當的界線，工作很容易成為壓垮我們的重擔。在職場中，我們經常因為害怕失去工作、渴望被肯定，或是錯誤的責任感，而任由界線被踐踏。我們必須學會在職場中保護自己，同時也對自己的真實職責負責。
          </p>
        </div>
      </div>

      {/* Work Problems Grid */}
      <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
          <Briefcase className="w-7 h-7 mr-3 text-amber-500" />
          職場常見的 6 大界線問題 (P280-294)
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {problems.map((problem) => (
            <motion.div 
              key={problem.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-50 to-amber-50/30 rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-amber-100 p-3 rounded-xl text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    {problem.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-800">問題 {problem.id}</h4>
                </div>
                <span className="text-xs font-medium text-slate-500 bg-white px-2 py-1 rounded-md border border-slate-200">{problem.page}</span>
              </div>
              
              <div className="space-y-4 flex-grow">
                <h5 className="font-bold text-amber-800 text-xl border-b border-amber-100 pb-2">{problem.title}</h5>
                <p className="text-slate-700 leading-relaxed text-base">
                  {problem.desc}
                </p>
                <div className="bg-white p-4 rounded-xl border border-slate-100">
                  <strong className="text-slate-800 text-sm block mb-2">🎬 具體情境：</strong>
                  <p className="text-sm text-slate-600 leading-relaxed">{problem.scenario}</p>
                </div>
                <div className="bg-amber-50/80 p-4 rounded-xl border border-amber-200 mt-auto">
                  <strong className="text-amber-800 text-sm flex items-center mb-2">
                    <Lightbulb className="w-4 h-4 mr-1 text-amber-600" />
                    解決突破點：
                  </strong>
                  <p className="text-sm text-amber-900/80 leading-relaxed">{problem.breakthrough}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Solutions */}
      <div className="bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-700 shadow-sm text-white">
        <h3 className="text-2xl font-bold text-amber-300 mb-8 flex items-center">
          <ShieldCheck className="w-7 h-7 mr-3" />
          建立職場界線的關鍵原則 (P295-296)
        </h3>
        
        <div className="space-y-6">
          <div className="bg-slate-700/50 p-6 rounded-2xl border border-slate-600 hover:bg-slate-700/80 transition-colors">
            <h4 className="text-xl font-bold text-amber-200 mb-3 flex items-center">
              <span className="bg-amber-500/20 p-2 rounded-lg mr-3 text-amber-400">1</span>
              釐清你的核心工作職責
            </h4>
            <p className="text-slate-300 text-base leading-relaxed">
              清楚知道你的工作範圍是什麼，什麼不是。拿出你的職位說明書，確認你的核心產出是什麼。當被要求做超出範圍的事時，勇敢地提出討論，而不是默默吞下。
            </p>
          </div>
          <div className="bg-slate-700/50 p-6 rounded-2xl border border-slate-600 hover:bg-slate-700/80 transition-colors">
            <h4 className="text-xl font-bold text-amber-200 mb-3 flex items-center">
              <span className="bg-amber-500/20 p-2 rounded-lg mr-3 text-amber-400">2</span>
              學會「協商式」的拒絕
            </h4>
            <p className="text-slate-300 text-base leading-relaxed">
              在職場上，直接說「不」有時會顯得不合作。更好的方式是「協商」。讓老闆知道你的產能極限，並把「優先順序的決定權」交還給老闆。這展現了你的專業與責任感。
            </p>
          </div>
          <div className="bg-slate-700/50 p-6 rounded-2xl border border-slate-600 hover:bg-slate-700/80 transition-colors">
            <h4 className="text-xl font-bold text-amber-200 mb-3 flex items-center">
              <span className="bg-amber-500/20 p-2 rounded-lg mr-3 text-amber-400">3</span>
              把壓力留在辦公室
            </h4>
            <p className="text-slate-300 text-base leading-relaxed">
              下班後，刻意切斷與工作的連結。不要把工作的情緒帶回家，讓家庭成為你恢復能量的避風港。如果工作已經嚴重侵蝕你的身心健康，且溝通無效，你可能需要考慮換工作。
            </p>
          </div>
        </div>
      </div>
      {/* Reflection & Action Guide */}
        {/* 本章總結 */}
        <div className="bg-gradient-to-br from-teal-50 to-slate-50 border border-teal-100 rounded-2xl p-6 mb-6">
          <h3 className="text-base font-bold text-teal-700 mb-4 flex items-center gap-2">
            <span className="text-lg">📝</span> 第11章總結：界線與工作
          </h3>
          <ul className="space-y-2.5">
              <li className="flex items-start gap-3">
                <span className="text-teal-500 mt-0.5 flex-shrink-0 font-bold">▸</span>
                <span className="text-slate-600 text-sm leading-relaxed">職場是界線問題的高發區，因為我們往往把工作表現和自我價值混為一談。</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-500 mt-0.5 flex-shrink-0 font-bold">▸</span>
                <span className="text-slate-600 text-sm leading-relaxed">無法在工作中說「不」，常常源於對失去工作、失去認可的恐懼，或是「盡忠職守」的錯誤解讀。</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-500 mt-0.5 flex-shrink-0 font-bold">▸</span>
                <span className="text-slate-600 text-sm leading-relaxed">健康的工作界線包括：清楚自己的職責範圍、不過度承擔、下班後真正休息。</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-500 mt-0.5 flex-shrink-0 font-bold">▸</span>
                <span className="text-slate-600 text-sm leading-relaxed">長期在工作中沒有界線，不只傷害自己，也會降低工作品質，最終對雇主和同事都沒有好處。</span>
              </li>
          </ul>
        </div>

      <div className="bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-800 shadow-lg text-white mt-12">
        <h3 className="text-2xl font-bold text-blue-300 mb-6 flex items-center">
          <Brain className="w-7 h-7 mr-3" />
          深度反思與行動指南 <span className="ml-3 text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded-full font-normal border border-slate-600">💡 延伸應用 (非原書內容)</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="text-xl font-bold text-blue-200 mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-blue-400" />
              反思問題
            </h4>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">1.</span>
                我是否常常因為不好意思拒絕，而承接了不屬於我的工作，導致自己過勞？
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">2.</span>
                在職場中，我是不是那個常常替不負責任的同事「擦屁股」的人？
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">3.</span>
                我是否把自我價值建立在工作表現或主管的評價上，以至於無法在下班後真正放鬆？
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">4.</span>
                在職場上，我是否常常覺得自己是唯一能把事情做好的人，因此無法將工作委派給別人？
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">5.</span>
                我是否常常把工作帶回家，讓工作侵蝕了我的家庭生活和休息時間？
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">6.</span>
                當主管提出不合理的要求時，我是否害怕表達真實的困難，而選擇默默承受？
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
                下次面對不合理的工作要求時，練習說：「我目前的專案已經滿載，如果接下這個，會影響其他工作的品質。我們來討論一下優先順序。」
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">2.</span>
                停止主動去完成同事未完成的份內工作，讓主管看到真實的工作狀況。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">3.</span>
                每天下班前，花5分鐘整理明天的待辦事項，並明確劃分「工作時間」與「私人時間」，下班後關閉工作通知。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">4.</span>
                練習在會議中表達不同意見：當你覺得某個專案時程不合理時，用客觀的數據和事實提出你的疑慮。
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
