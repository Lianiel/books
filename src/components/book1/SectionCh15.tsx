import { motion } from 'framer-motion';
import { ShieldAlert, AlertTriangle, Users, HeartCrack, Frown, Zap, UserX, ShieldQuestion, Lightbulb, MessageSquare, Brain, Target } from 'lucide-react';

export default function SectionCh15() {
  const externalResistance = [
    {
      id: 1,
      title: "憤怒 (Anger)",
      icon: <Zap className="w-6 h-6" />,
      desc: "對方用暴怒、大吼大叫或冷戰來威脅你，試圖逼你收回你的「不」。",
      scenario: "情境：你告訴配偶今晚不想去他父母家吃飯。他立刻大發脾氣：「你總是這麼自私！你根本不尊重我的家人！」",
      script: "回應腳本：「我能理解你很生氣，但我不會在這種情緒下繼續討論。當你準備好冷靜溝通時，我們再來談。」然後離開現場。"
    },
    {
      id: 2,
      title: "罪疚感訊息 (Guilt Messages)",
      icon: <Frown className="w-6 h-6" />,
      desc: "對方扮演受害者，用「你怎麼忍心這樣對我」來操縱你的同情心。",
      scenario: "情境：你拒絕借錢給一直不工作的兄弟。他說：「我以為我們是一家人，沒想到你這麼冷血，看著我餓死。」",
      script: "回應腳本：「我很遺憾你覺得我冷血，但我愛你的方式是停止資助你的不負責。這是我最後的決定。」不要為對方的感受道歉。"
    },
    {
      id: 3,
      title: "後果與報復 (Consequences)",
      icon: <AlertTriangle className="w-6 h-6" />,
      desc: "對方用切斷資源、取消特權或實際的懲罰來逼迫你屈服。",
      scenario: "情境：你決定轉換跑道，不接手家族企業。父母威脅：「如果你不回來幫忙，我們就不幫你付房子的頭期款，以後遺產也沒你的份。」",
      script: "回應腳本：「我明白這個決定讓你們很失望。我會自己想辦法解決房子的問題，謝謝你們過去的照顧。」接受失去特權的代價，換取自由。"
    }
  ];

  const internalResistance = [
    {
      id: 1,
      title: "未被滿足的依附需求 (Unmet Needs)",
      icon: <HeartCrack className="w-6 h-6" />,
      desc: "你害怕如果設立界線，對方就會離開你，而你無法承受那種孤單。",
      scenario: "情境：你明明知道男友對你很糟糕，但你不敢提出分手或要求他改變，因為你心底深處覺得「有總比沒有好，我怕以後再也找不到人愛我」。",
      breakthrough: "突破點：承認你內心的匱乏。你需要先在安全的朋友群體或信仰中找到被愛的確據，當你的「愛之槽」滿了，你才有勇氣對不健康的關係說不。"
    },
    {
      id: 2,
      title: "未解決的悲傷 (Unresolved Grief)",
      icon: <UserX className="w-6 h-6" />,
      desc: "設立界線意味著你必須放棄某種不切實際的幻想（例如：幻想父母有一天會突然變成完美父母）。",
      scenario: "情境：你不斷討好挑剔的母親，即使每次都被傷害。你其實是在追求一個幻影——那個你從未擁有過的、會無條件肯定你的好媽媽。",
      breakthrough: "突破點：為你「從未擁有過」的理想關係哀悼。接受現實：你的母親就是這樣的人，她可能永遠不會改變。放下改變她的幻想，開始保護自己。"
    },
    {
      id: 3,
      title: "害怕未知的恐懼 (Fear of the Unknown)",
      icon: <ShieldQuestion className="w-6 h-6" />,
      desc: "熟悉的痛苦比未知的自由更讓人感到安全。你習慣了被控制的生活模式。",
      scenario: "情境：你在一間充滿霸凌文化的公司待了五年。雖然每天都很痛苦，但當有獵頭找你時，你卻以「外面可能更糟」、「我年紀大了」為由拒絕面試。",
      breakthrough: "突破點：問自己：「最壞的情況是什麼？我能承受嗎？」通常，我們想像中的恐懼比現實可怕得多。勇敢踏出舒適圈，尋求專業協助或朋友的支持。"
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-purple-50 via-fuchsia-50 to-pink-50 rounded-3xl p-8 md:p-10 border border-purple-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-fuchsia-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-bold mb-4">
            Chapter 15
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            對界線的阻力
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed max-w-3xl">
            當你開始設立界線時，事情通常會「先變糟，再變好」。那些習慣了你沒有界線的人，會強烈反抗你的改變；而你內心深處的恐懼與不安全感，也會試圖把你拉回熟悉的舊模式。認識並預備好面對這些「外在」與「內在」的阻力，是成功建立界線的關鍵。
          </p>
        </div>
      </div>

      {/* External Resistance */}
      <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm">
        <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
          <ShieldAlert className="w-7 h-7 mr-3 text-purple-500" />
          外在的阻力 (External Resistance) (P374-385)
        </h3>
        <p className="text-slate-600 mb-8 text-lg">
          當你改變規則時，那些從你身上獲益的人一定會反彈。不要驚訝，這是正常的反應。
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {externalResistance.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-50 to-purple-50/30 rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col h-full"
            >
              <div className="bg-purple-100 p-3 rounded-xl text-purple-700 w-fit mb-4">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h4>
              <p className="text-slate-700 leading-relaxed text-base mb-4">
                {item.desc}
              </p>
              <div className="bg-white p-4 rounded-xl border border-slate-100 mb-4">
                <strong className="text-slate-800 text-sm block mb-1">🎬 具體情境：</strong>
                <p className="text-sm text-slate-600">{item.scenario}</p>
              </div>
              <div className="bg-purple-50/80 p-4 rounded-xl border border-purple-200 mt-auto">
                <strong className="text-purple-800 text-sm flex items-center mb-1">
                  <MessageSquare className="w-4 h-4 mr-1 text-purple-600" />
                  回應腳本：
                </strong>
                <p className="text-sm text-purple-900/80">{item.script}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Internal Resistance */}
      <div className="bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-700 shadow-sm text-white mt-8">
        <h3 className="text-2xl font-bold text-purple-300 mb-8 flex items-center">
          <HeartCrack className="w-7 h-7 mr-3" />
          內在的阻力 (Internal Resistance) (P386-395)
        </h3>
        <p className="text-slate-300 mb-8 text-lg">
          外在的阻力雖然可怕，但真正能阻止我們改變的，往往是我們內心的恐懼與未處理的傷痛。
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {internalResistance.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-700/50 rounded-2xl p-6 border border-slate-600 hover:bg-slate-700 transition-all flex flex-col h-full"
            >
              <div className="bg-slate-800 p-3 rounded-xl text-purple-400 w-fit mb-4 border border-slate-600">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-purple-200 mb-3">{item.title}</h4>
              <p className="text-slate-300 leading-relaxed text-base mb-4">
                {item.desc}
              </p>
              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-600 mb-4">
                <strong className="text-slate-400 text-sm block mb-1">🎬 具體情境：</strong>
                <p className="text-sm text-slate-300">{item.scenario}</p>
              </div>
              <div className="bg-purple-900/30 p-4 rounded-xl border border-purple-500/30 mt-auto">
                <strong className="text-purple-300 text-sm flex items-center mb-1">
                  <Lightbulb className="w-4 h-4 mr-1 text-purple-400" />
                  解決突破點：
                </strong>
                <p className="text-sm text-purple-200/80">{item.breakthrough}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Reflection & Action Guide */}

        {/* 本章總結 */}
        <div className="bg-gradient-to-br from-teal-50 to-slate-50 border border-teal-100 rounded-2xl p-6 mb-6">
          <h3 className="text-base font-bold text-teal-700 mb-2 flex items-center gap-2">
            <span className="text-lg">📝</span> 第15章總結：完美的界線
          </h3>
          <p className="text-slate-500 text-xs mb-5 leading-relaxed">本章探討在實際的關係中如何面對那些抗拒界線的人，並提供具體的步驟來應對各種抗拒策略，幫助讀者在壓力下仍然堅守界線。</p>
          <div className="mb-4">
            <div className="text-xs font-bold text-teal-600 mb-1.5">📖 六種抗拒策略的應對</div>
            <p className="text-slate-600 text-sm leading-relaxed">面對憤怒：不要因為對方的情緒而退縮，平靜地重申你的立場；面對罪惡感訊息：認清這是情感操控，不要讓對方的「受傷」成為改變你決定的理由；面對後果威脅：評估後果的真實性，並決定你是否能接受；面對哄騙：觀察行為而不只是語言，讓時間證明改變的真實性；面對以受害者自居：對他們的痛苦有同理心，但不要因同情而取消你的界線。</p>
          </div>
          <div className="mb-4">
            <div className="text-xs font-bold text-teal-600 mb-1.5">🔍 關係的三種可能走向</div>
            <p className="text-slate-600 text-sm leading-relaxed">作者坦誠地指出，當你設立界線後，關係有三種可能的走向：對方真正改變，關係走向更健康——這是最好的結果；對方暫時不舒服但最終接受，關係在陣痛後穩定——這是最常見的；對方離開或關係惡化——這是痛苦的，但有時也是必要的，因為某些關係本質上是建立在你的無限供應上的。</p>
          </div>
          <div className="mb-4">
            <div className="text-xs font-bold text-teal-600 mb-1.5">⚠️ 後果是界線的執行力</div>
            <p className="text-slate-600 text-sm leading-relaxed">作者強調，界線沒有後果，就等於沒有界線。若你說「如果你再這樣，我就……」卻從不真正執行，你的界線就只是空話，對方也會學到「這只是說說而已」。設立界線，必須同時準備好執行後果——這需要勇氣，但這是讓界線真正發揮作用的關鍵。</p>
          </div>
          <div className="mb-4">
            <div className="text-xs font-bold text-teal-600 mb-1.5">💡 本章的關鍵信息</div>
            <p className="text-slate-600 text-sm leading-relaxed">設立界線不是一次性的事件，而是一個持續的過程。關係中的人需要時間適應新的規則，你也需要時間建立說「不」的能力和面對後果的勇氣。在這個過程中，找到支持你的群體和輔導者，是非常重要的資源。</p>
          </div>
        </div>

      <div className="bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-800 shadow-lg text-white mt-12">
        <h3 className="text-2xl font-bold text-red-300 mb-6 flex items-center">
          <Brain className="w-7 h-7 mr-3" />
          深度反思與行動指南 <span className="ml-3 text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded-full font-normal border border-slate-600">💡 延伸應用 (非原書內容)</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="text-xl font-bold text-red-200 mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-red-400" />
              反思問題
            </h4>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start">
                <span className="text-red-400 mr-2 font-bold">1.</span>
                當我嘗試設定界線時，我最害怕面對哪一種阻力？（別人的憤怒、被孤立、還是內心的罪疚感？）
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2 font-bold">2.</span>
                我身邊是否有一個「安全的支持系統」，可以在我面對界線阻力時給予我鼓勵？
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2 font-bold">3.</span>
                當我準備設立界線時，我內心最常出現的「自我懷疑」聲音是什麼？我該如何用真理來反駁它？
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2 font-bold">4.</span>
                我身邊是否有那些會因為我設立界線而感到高興、並鼓勵我繼續堅持的朋友？
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2 font-bold">5.</span>
                當別人對我的界線感到憤怒時，我是否能區分「他們的憤怒是他們的問題」，而不是「我做錯了事」？
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2 font-bold">6.</span>
                我是否常常因為害怕破壞關係而放棄界線？我是否相信真正的愛是建立在誠實和尊重的基礎上？
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
                在設定困難的界線前，先寫下你預期會遇到的阻力，並寫下你要如何回應（例如：「我知道你很生氣，但我還是不能借錢給你。」）。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">2.</span>
                找一位了解界線重要性的朋友，在你要進行困難對話的前後，與他通話以獲得支持。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">3.</span>
                當你因為設界線而遭到對方憤怒反彈時，保持冷靜，不要為自己辯護，只需重複你的界線（「我知道你很生氣，但我還是不能答應」）。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">4.</span>
                準備一個「界線急救包」：寫下幾句鼓勵自己的話或經文，當你面對阻力感到動搖時，拿出來提醒自己。
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
