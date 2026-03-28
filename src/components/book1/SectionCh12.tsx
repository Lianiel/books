import { motion } from 'framer-motion';
import { Smartphone, WifiOff, BellOff, MessageCircle, ShieldAlert, Clock, Users, EyeOff, Lightbulb, Brain, Target } from 'lucide-react';

export default function SectionCh12() {
  const issues = [
    {
      id: 1,
      title: "永遠在線 (Always On)",
      icon: <Clock className="w-6 h-6" />,
      page: "P300",
      desc: "科技模糊了工作與家庭、休息與忙碌的界線。我們的手機讓我們隨時隨地都能被找到。",
      scenario: "情境：晚上10點，你已經躺在床上準備睡覺，手機突然震動，是主管傳來的Slack訊息。你忍不住打開看，大腦瞬間進入工作模式，結果失眠到凌晨2點。",
      breakthrough: "突破點：設定「數位下班時間」。晚上7點後關閉工作通訊軟體的通知，或將手機放在臥室外充電。讓大腦有明確的休息訊號。"
    },
    {
      id: 2,
      title: "把好的留在裡面，壞的擋在外面 (Filtering)",
      icon: <ShieldAlert className="w-6 h-6" />,
      page: "P303",
      desc: "網路世界充滿了各種資訊，我們必須成為自己心靈的守門員，過濾掉有害的內容。",
      scenario: "情境：你習慣在睡前滑推特或新聞APP，看到許多負面、令人焦慮的社會新聞（Doomscrolling），導致你心情低落，覺得世界充滿危險。",
      breakthrough: "突破點：主動選擇你吸收的資訊。取消追蹤讓你焦慮的帳號，設定社群媒體的使用時間限制。你無法控制網路上的內容，但你可以控制你的螢幕。"
    },
    {
      id: 3,
      title: "青少年與科技 (Teens and Tech)",
      icon: <Users className="w-6 h-6" />,
      page: "P306",
      desc: "青少年的大腦前額葉（負責自控與決策）尚未發育完全，他們無法獨自抵抗科技的成癮性。",
      scenario: "情境：你發現讀國中的孩子半夜兩點還躲在棉被裡打手遊，白天上課精神不濟，成績一落千丈。當你試圖沒收手機時，他大發脾氣。",
      breakthrough: "突破點：父母必須成為孩子「外在的前額葉」。設定明確的家規（如：晚上9點後所有電子設備交出），並堅定執行後果。不要期待他們能自我約束。"
    },
    {
      id: 4,
      title: "錯失恐懼症 (FoMO - Fear of Missing Out)",
      icon: <EyeOff className="w-6 h-6" />,
      page: "P309",
      desc: "看著別人在社群媒體上展現的完美生活，產生比較心理，覺得自己被遺漏或不夠好。",
      scenario: "情境：週末晚上你一個人在家，滑IG看到朋友們聚餐打卡的限時動態，你感到一陣強烈的孤獨感和自我懷疑，覺得「為什麼他們沒有約我？」",
      breakthrough: "突破點：認清社群媒體只是別人生活的「精華片段（Highlight Reel）」，而你拿自己的「幕後花絮（Bloopers）」去比較。將虛擬的關注轉化為真實的1對1連結，主動約朋友喝咖啡。"
    },
    {
      id: 5,
      title: "親密關係不是奢侈品 (Intimacy is a Necessity)",
      icon: <MessageCircle className="w-6 h-6" />,
      page: "P312",
      desc: "文字訊息（Texting）缺乏語氣、表情和肢體語言，容易造成誤解，無法取代真實的親密連結。",
      scenario: "情境：你和伴侶因為一件小事在LINE上吵架，雙方越打字越生氣，因為你覺得對方的文字很冷漠，對方覺得你的文字很具攻擊性。",
      breakthrough: "突破點：對於重要、複雜或帶有情緒的對話，設立「不傳文字」的界線。改用語音通話或面對面溝通，讓語氣和表情傳達真實的情感與同理心。"
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 rounded-3xl p-8 md:p-10 border border-indigo-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 font-bold mb-4" style={{fontSize:"17px"}}>
            Chapter 12
          </div>
          <h2 className="md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight" style={{fontSize:"33px"}}>
            界線與數位時代
          </h2>
          <p className="text-slate-700 leading-relaxed max-w-3xl" style={{fontSize:"21px"}}>
            科技本身是中立的，但它極大地挑戰了我們的界線。智慧型手機和社群媒體讓我們隨時暴露在無數的要求、資訊和比較之中。如果我們不主動管理科技，科技就會管理我們的心智與時間。在數位時代，設立界線意味著奪回注意力的控制權。
          </p>
        </div>
      </div>

      {/* Digital Issues Grid */}
      <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-8 flex items-center" style={{fontSize:"27px"}}>
          <Smartphone className="w-7 h-7 mr-3 text-indigo-500" />
          數位時代的 5 大界線挑戰 (P300-315)
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {issues.map((issue) => (
            <motion.div 
              key={issue.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-50 to-indigo-50/30 rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-indigo-100 p-3 rounded-xl text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    {issue.icon}
                  </div>
                  <h4 className="font-bold text-slate-800" style={{fontSize:"23px"}}>挑戰 {issue.id}</h4>
                </div>
                <span className="font-medium text-slate-500 bg-white px-2 py-1 rounded-md border border-slate-200" style={{fontSize:"15px"}}>{issue.page}</span>
              </div>
              
              <div className="space-y-4 flex-grow">
                <h5 className="font-bold text-indigo-800 border-b border-indigo-100 pb-2" style={{fontSize:"23px"}}>{issue.title}</h5>
                <p className="text-slate-700 leading-relaxed" style={{fontSize:"19px"}}>
                  {issue.desc}
                </p>
                <div className="bg-white p-4 rounded-xl border border-slate-100">
                  <strong className="text-slate-800 block mb-2" style={{fontSize:"17px"}}>🎬 具體情境：</strong>
                  <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>{issue.scenario}</p>
                </div>
                <div className="bg-indigo-50/80 p-4 rounded-xl border border-indigo-200 mt-auto">
                  <strong className="text-indigo-800 flex items-center mb-2" style={{fontSize:"17px"}}>
                    <Lightbulb className="w-4 h-4 mr-1 text-indigo-600" />
                    解決突破點：
                  </strong>
                  <p className="text-indigo-900/80 leading-relaxed" style={{fontSize:"17px"}}>{issue.breakthrough}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Solutions */}
      <div className="bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-700 shadow-sm text-white">
        <h3 className="font-bold text-indigo-300 mb-8 flex items-center" style={{fontSize:"27px"}}>
          <WifiOff className="w-7 h-7 mr-3" />
          奪回數位主導權的實踐策略 (P316-318)
        </h3>
        
        <div className="space-y-6">
          <div className="bg-slate-700/50 p-6 rounded-2xl border border-slate-600 hover:bg-slate-700/80 transition-colors">
            <h4 className="font-bold text-indigo-200 mb-3 flex items-center" style={{fontSize:"23px"}}>
              <span className="bg-indigo-500/20 p-2 rounded-lg mr-3 text-indigo-400">1</span>
              創造「無科技區」與「無科技時段」
            </h4>
            <p className="text-slate-300 leading-relaxed" style={{fontSize:"19px"}}>
              在家中設立明確的實體界線，例如：餐桌上不准放手機、臥室不放充電線。設定時間界線，例如：睡前一小時不看螢幕，起床後的第一個小時不滑手機，用來禱告、閱讀或與家人對話。
            </p>
          </div>
          <div className="bg-slate-700/50 p-6 rounded-2xl border border-slate-600 hover:bg-slate-700/80 transition-colors">
            <h4 className="font-bold text-indigo-200 mb-3 flex items-center" style={{fontSize:"23px"}}>
              <span className="bg-indigo-500/20 p-2 rounded-lg mr-3 text-indigo-400">2</span>
              關閉非必要的通知
            </h4>
            <p className="text-slate-300 leading-relaxed" style={{fontSize:"19px"}}>
              不要讓APP的開發者決定你何時該分心。關閉所有社群媒體、新聞和購物APP的推播通知。只保留真正緊急的聯絡方式（如電話、重要家人的訊息）。讓「你」決定何時要查看手機，而不是手機呼叫你。
            </p>
          </div>
          <div className="bg-slate-700/50 p-6 rounded-2xl border border-slate-600 hover:bg-slate-700/80 transition-colors">
            <h4 className="font-bold text-indigo-200 mb-3 flex items-center" style={{fontSize:"23px"}}>
              <span className="bg-indigo-500/20 p-2 rounded-lg mr-3 text-indigo-400">3</span>
              定期進行「數位排毒」
            </h4>
            <p className="text-slate-300 leading-relaxed" style={{fontSize:"19px"}}>
              每週安排半天或一整天（如安息日）完全遠離電子產品。去大自然走走、看實體書、與朋友面對面聊天。這能幫助大腦重新開機，恢復對真實世界的感知與連結。
            </p>
          </div>
        </div>
      </div>
      {/* Reflection & Action Guide */}

        {/* 本章總結 */}
        <div className="bg-gradient-to-br from-teal-50 to-slate-50 border border-teal-100 rounded-2xl p-6 mb-6">
          <h3 className="font-bold text-teal-700 mb-2 flex items-center gap-2" style={{fontSize:"22px"}}>
            <span style={{fontSize:"24px"}}>📝</span> 第12章總結：界線與你自己
          </h3>
          <p className="text-slate-500 mb-5 leading-relaxed" style={{fontSize:"18px"}}>本章探討最常被忽略的界線面向——對自己內心世界的界線管理。這包括對自己的情緒、思想、習慣、時間和身體的負責任管理。</p>
          <div className="bg-blue-50 border-blue-200 border rounded-xl p-4 mb-3">
            <div className="font-bold text-blue-700 mb-1.5" style={{fontSize:"18px"}}>📖 科技與自我界線</div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"20px"}}>本章以數位時代的挑戰開場——手機、社群媒體和無處不在的資訊流，不斷要求我們的注意力，讓我們幾乎沒有空間安靜下來面對自己的內心。作者指出，能夠管理自己與科技的關係，是現代人最重要的自我界線之一。</p>
          </div>
          <div className="bg-violet-50 border-violet-200 border rounded-xl p-4 mb-3">
            <div className="font-bold text-violet-700 mb-1.5" style={{fontSize:"18px"}}>🔍 自律是最深的自我界線</div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"20px"}}>對自己設立界線的核心是自律——不是壓制自我，而是學習對那些傷害自己的衝動說「不」（過度消費、飲食失調、拖延、沉溺螢幕），並對那些滋養自己的事說「是」（禱告、運動、閱讀、真實的連結）。作者強調，自律不是律法主義，而是對自己和神的愛的表達。</p>
          </div>
          <div className="bg-amber-50 border-amber-200 border rounded-xl p-4 mb-3">
            <div className="font-bold text-amber-700 mb-1.5" style={{fontSize:"18px"}}>⚠️ 對自己的同理心</div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"20px"}}>作者特別提醒：對自己設立界線，需要先對自己有同理心。許多人對別人充滿憐憫，卻對自己非常嚴苛。如果你不能溫柔地對待自己，你的「自我管理」很容易變成自我懲罰，這不是健康的界線。學習像神一樣看待自己——認識自己的限制，接受自己的不完美，同時不放棄成長。</p>
          </div>
          <div className="bg-emerald-50 border-emerald-200 border rounded-xl p-4 mb-3">
            <div className="font-bold text-emerald-700 mb-1.5" style={{fontSize:"18px"}}>💡 本章的關鍵信息</div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"20px"}}>你對自己的管理，決定了你對別人的容量。若你任由自己的情緒、時間和精力被各種衝動和外在要求耗盡，你就沒有什麼可以給予別人的了。照顧好自己，不是自私，而是讓你能夠持續、真實地愛人的基礎。</p>
          </div>
        </div>

      <div className="bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-800 shadow-lg text-white mt-12">
        <h3 className="font-bold text-indigo-300 mb-6 flex items-center" style={{fontSize:"27px"}}>
          <Brain className="w-7 h-7 mr-3" />
          深度反思與行動指南 <span className="ml-3 bg-slate-700/50 text-slate-300 px-2 py-1 rounded-full font-normal border border-slate-600" style={{fontSize:"15px"}}>💡 延伸應用 (非原書內容)</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="font-bold text-indigo-200 mb-4 flex items-center" style={{fontSize:"23px"}}>
              <Brain className="w-5 h-5 mr-2 text-indigo-400" />
              反思問題
            </h4>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start">
                <span className="text-indigo-400 mr-2 font-bold">1.</span>
                我是否覺得必須「隨時在線」，對未讀訊息感到焦慮？這如何影響了我的真實生活？
              </li>
              <li className="flex items-start">
                <span className="text-indigo-400 mr-2 font-bold">2.</span>
                在與家人朋友聚餐時，我是否常常被手機打斷，無法專注於眼前的關係？
              </li>
              <li className="flex items-start">
                <span className="text-indigo-400 mr-2 font-bold">3.</span>
                當我感到焦慮或無聊時，我是否會不自覺地拿起手機滑社群媒體，以此來逃避真實的情緒？
              </li>
              <li className="flex items-start">
                <span className="text-indigo-400 mr-2 font-bold">4.</span>
                我在社群媒體上展現的形象，是否常常為了迎合別人的期待，而掩飾了自己真實的軟弱？
              </li>
              <li className="flex items-start">
                <span className="text-indigo-400 mr-2 font-bold">5.</span>
                我是否常常因為看到別人在社群媒體上的「完美生活」，而對自己的現狀感到不滿或嫉妒？
              </li>
              <li className="flex items-start">
                <span className="text-indigo-400 mr-2 font-bold">6.</span>
                在數位世界中，我是否常常模糊了工作與休息的界線，讓自己隨時處於「待命」狀態？
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
                設定「數位安息日」或「無手機時段」（例如：晚餐時間或睡前一小時），將手機放在另一個房間。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">2.</span>
                關閉非必要的應用程式通知，改為「主動」去查看訊息，而不是「被動」地被通知打斷。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">3.</span>
                整理你的社群媒體追蹤名單，取消追蹤那些會讓你感到焦慮、比較或消耗你能量的帳號。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">4.</span>
                建立「睡前儀式」：睡前一小時不看螢幕，改為閱讀、聽音樂或寫日記，保護你的睡眠界線。
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
