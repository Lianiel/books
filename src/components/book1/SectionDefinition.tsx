import { motion } from 'framer-motion';
import { Shield, Droplet, Map, Package, Lock, Key, Heart, ShieldCheck, Zap, Brain, MessageSquare, Target } from 'lucide-react';

export default function SectionDefinition() {
  const boundaryElements = [
    { id: 1, title: "感覺 (Feelings)", icon: <Heart className="w-5 h-5" />, desc: "感覺是你的財產，不要忽視或讓別人替你感覺。它們是靈魂的警報系統。", page: "P49" },
    { id: 2, title: "態度與信念 (Attitudes & Beliefs)", icon: <Brain className="w-5 h-5" />, desc: "你是唯一能改變自己態度的人。不要因為別人的壓力而妥協你的信念。", page: "P51" },
    { id: 3, title: "行為 (Behaviors)", icon: <Zap className="w-5 h-5" />, desc: "行為有後果。種什麼就收什麼。不要替別人承擔他們行為的後果。", page: "P53" },
    { id: 4, title: "選擇 (Choices)", icon: <Map className="w-5 h-5" />, desc: "我們必須為自己的選擇負責，不能說「我別無選擇」或「是他逼我的」。", page: "P54" },
    { id: 5, title: "價值觀 (Values)", icon: <ShieldCheck className="w-5 h-5" />, desc: "我們看重什麼，就會把精力放在哪裡。不要為了取悅別人而放棄自己的價值觀。", page: "P55" },
    { id: 6, title: "限制 (Limits)", icon: <Lock className="w-5 h-5" />, desc: "我們無法限制別人，但可以限制自己暴露在別人的破壞性行為下。", page: "P56" },
    { id: 7, title: "資源與恩賜 (Resources & Gifts)", icon: <Package className="w-5 h-5" />, desc: "上帝給我們的恩賜，我們有責任去發展和使用，不能因為害怕而隱藏。", page: "P57" },
    { id: 8, title: "思想 (Thoughts)", icon: <MessageSquare className="w-5 h-5" />, desc: "我們必須擁有自己的思想，不要盲從。同時也要吸收別人的想法來成長。", page: "P58" },
    { id: 9, title: "慾望 (Desires)", icon: <Heart className="w-5 h-5" />, desc: "了解自己真正的渴望，而不是只追求別人認為好的事物。", page: "P59" },
    { id: 10, title: "愛 (Love)", icon: <Heart className="w-5 h-5" />, desc: "我們的心需要空間來愛人，也需要空間來接受愛。不能讓有毒的關係佔據。", page: "P60" }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-3xl p-8 md:p-10 border border-emerald-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 font-bold mb-4" style={{fontSize:"17px"}}>
            Chapter 2
          </div>
          <h2 className="md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight" style={{fontSize:"33px"}}>
            界線看來啥模樣？
          </h2>
          <p className="text-slate-700 leading-relaxed max-w-3xl" style={{fontSize:"21px"}}>
            界線就像是財產的底線，標示出「我」的起點和終點。它幫助我們釐清責任歸屬，知道什麼是我們該負責的，什麼是不該負責的。
          </p>
        </div>
      </div>

      {/* Core Concepts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* The Sprinkler Story */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-6 flex items-center" style={{fontSize:"27px"}}>
            <Droplet className="w-7 h-7 mr-3 text-teal-500" />
            灑水器的啟示 (P41-43)
          </h3>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              想像一對父母，他們的孩子約書亞在學校表現不佳、吸毒、不負責任。父母為他付帳單、解決問題，感到痛苦不堪，而約書亞卻毫無感覺。
            </p>
            <div className="bg-teal-50 p-5 rounded-2xl border border-teal-100">
              <p className="font-bold text-teal-800 mb-2">問題的核心：</p>
              <p className="text-teal-700" style={{fontSize:"17px"}}>
                「問題出在誰身上？」約書亞沒有問題，因為父母替他承擔了所有後果。就像鄰居的灑水器壞了，水卻流進你家院子，鄰居當然不覺得有問題。
              </p>
            </div>
            <p className="font-medium text-slate-800 mt-4">
              解決方案：把水管接回他家！讓約書亞自己承擔行為的後果（痛苦），他才會想要改變。
            </p>
          </div>
        </div>

        {/* Backpack vs Boulder */}
        <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 shadow-sm text-white">
          <h3 className="font-bold text-emerald-300 mb-6 flex items-center" style={{fontSize:"27px"}}>
            <Package className="w-7 h-7 mr-3" />
            背包與巨石 (P46)
          </h3>
          <div className="space-y-6">
            <div className="bg-slate-700/50 p-5 rounded-2xl border border-slate-600">
              <h4 className="font-bold text-emerald-400 mb-2" style={{fontSize:"21px"}}>各人要擔當自己的擔子 (加 6:5)</h4>
              <p className="text-slate-300 leading-relaxed" style={{fontSize:"17px"}}>
                這是指日常的責任（如一個背包）。每個人都應該自己背負，不能推給別人。這是我們「分內」的事。
              </p>
            </div>
            <div className="bg-slate-700/50 p-5 rounded-2xl border border-slate-600">
              <h4 className="font-bold text-emerald-400 mb-2" style={{fontSize:"21px"}}>你們各人的重擔要互相擔當 (加 6:2)</h4>
              <p className="text-slate-300 leading-relaxed" style={{fontSize:"17px"}}>
                這是指壓垮人的巨大危機或創傷（如一塊巨石）。這時我們需要別人的幫助，因為我們無法獨自承受。
              </p>
            </div>
            <p className="text-emerald-200 font-medium text-center">
              界線混亂：把別人的背包當成巨石來扛，或是把自己的巨石當成背包獨自承受。
            </p>
          </div>
        </div>
      </div>

      {/* Good In, Bad Out */}
      <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-6 flex items-center" style={{fontSize:"27px"}}>
          <Shield className="w-7 h-7 mr-3 text-emerald-500" />
          界線的功能：把好的留在裡面，把壞的擋在外面 (P47)
        </h3>
        <p className="text-slate-600 leading-relaxed mb-6" style={{fontSize:"21px"}}>
          界線不是一堵密不透風的牆。它應該像是有門的柵欄。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
            <h4 className="font-bold text-emerald-800 mb-3 flex items-center" style={{fontSize:"21px"}}>
              <Key className="w-5 h-5 mr-2" />
              打開門 (Open the Gate)
            </h4>
            <p className="text-emerald-700 leading-relaxed" style={{fontSize:"17px"}}>
              讓好的東西進來（如別人的愛、關心、真理），也讓自己裡面不好的東西出去（如承認自己的罪、脆弱、痛苦，向人求助）。
            </p>
          </div>
          <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
            <h4 className="font-bold text-rose-800 mb-3 flex items-center" style={{fontSize:"21px"}}>
              <Lock className="w-5 h-5 mr-2" />
              關上門 (Close the Gate)
            </h4>
            <p className="text-rose-700 leading-relaxed" style={{fontSize:"17px"}}>
              把壞的東西擋在外面（如別人的虐待、操控、不合理要求），也把好的東西保護在裡面（如自己的時間、精力、價值觀）。
            </p>
          </div>
        </div>
      </div>

      {/* What's Inside My Boundary? */}
      <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-8 flex items-center" style={{fontSize:"27px"}}>
          <Map className="w-7 h-7 mr-3 text-cyan-500" />
          我的界線內到底有什麼？ (P48-60)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {boundaryElements.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-5 border border-slate-100 hover:border-cyan-200 hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2 text-cyan-600 group-hover:text-cyan-700">
                  {item.icon}
                  <h4 className="font-bold">{item.title}</h4>
                </div>
                <span className="font-medium text-slate-400 bg-white px-2 py-1 rounded-md border border-slate-200" style={{fontSize:"15px"}}>{item.page}</span>
              </div>
              <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Reflection & Action Guide */}

        {/* 本章總結 */}
        <div className="bg-gradient-to-br from-teal-50 to-slate-50 border border-teal-100 rounded-2xl p-6 mb-6">
          <h3 className="font-bold text-teal-700 mb-2 flex items-center gap-2" style={{fontSize:"22px"}}>
            <span style={{fontSize:"24px"}}>📝</span> 第2章總結：界線看來啥模樣？
          </h3>
          <p className="text-slate-500 mb-5 leading-relaxed" style={{fontSize:"18px"}}>本章從定義出發，清楚解釋「界線」是什麼、不是什麼，並列出十種屬於「我的地」的範疇。作者用「財產線」的比喻，幫助讀者理解界線的本質。</p>
          <div className="bg-blue-50 border-blue-200 border rounded-xl p-4 mb-3">
            <div className="font-bold text-blue-700 mb-1.5" style={{fontSize:"18px"}}>📖 什麼是界線？</div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"20px"}}>界線就像財產上的圍牆，標示出「這裡是我的地，那裡是你的地」。在人際關係中，界線定義了「我」在哪裡結束，「你」在哪裡開始。它不是把人推開的牆，而是讓愛能夠真實流動的疆界。沒有界線，就沒有真正意義上的自我；沒有自我，就不可能有真正的愛。</p>
          </div>
          <div className="bg-violet-50 border-violet-200 border rounded-xl p-4 mb-3">
            <div className="font-bold text-violet-700 mb-1.5" style={{fontSize:"18px"}}>🗺️ 十種屬於我的地</div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"20px"}}>作者列出十個我們需要負責任的「自己的地」：感覺（你的情緒是你的，不是別人的）、態度與信念、行為（行為有後果，我們必須承擔自己的後果）、選擇（不能說「我別無選擇」）、價值觀、限制（我們無法限制別人，但可以限制自己暴露在傷害中）、資源與恩賜、思想、慾望和愛。這十樣是我們的責任，也是我們的自由。</p>
          </div>
          <div className="bg-amber-50 border-amber-200 border rounded-xl p-4 mb-3">
            <div className="font-bold text-amber-700 mb-1.5" style={{fontSize:"18px"}}>⚠️ 界線的誤解</div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"20px"}}>許多人混淆了「界線」和「牆」。真正的界線是有門的——你可以選擇讓誰進來、讓誰離開、在什麼條件下開門。牆是永遠關閉的，是因傷害而建的防衛機制。界線的目的是保護和連結，不是孤立和排斥。</p>
          </div>
          <div className="bg-emerald-50 border-emerald-200 border rounded-xl p-4 mb-3">
            <div className="font-bold text-emerald-700 mb-1.5" style={{fontSize:"18px"}}>💡 本章的關鍵信息</div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"20px"}}>你有責任管理好屬於自己的地，但你無法也不應該去管理別人的地。當你試圖控制別人的感受、選擇或行為，你就越界了；當你讓別人控制你的感受、選擇或行為，你就失去了自己的地。清楚的界線，讓愛成為禮物，而不是交換或義務。</p>
          </div>
        </div>

      <div className="bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-800 shadow-lg text-white mt-12">
        <h3 className="font-bold text-blue-300 mb-6 flex items-center" style={{fontSize:"27px"}}>
          <Brain className="w-7 h-7 mr-3" />
          深度反思與行動指南 <span className="ml-3 bg-slate-700/50 text-slate-300 px-2 py-1 rounded-full font-normal border border-slate-600" style={{fontSize:"15px"}}>💡 延伸應用 (非原書內容)</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="font-bold text-blue-200 mb-4 flex items-center" style={{fontSize:"23px"}}>
              <Brain className="w-5 h-5 mr-2 text-blue-400" />
              反思問題
            </h4>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">1.</span>
                我的「院子」裡目前堆了哪些不屬於我的垃圾（別人的情緒、責任或問題）？
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">2.</span>
                我的心門是完全敞開（無法拒絕壞事），還是完全緊閉（無法接受別人的愛與幫助）？
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">3.</span>
                我是否常常把別人的需求看得比自己的需求更重要，甚至到了忽視自己基本健康的地步？
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">4.</span>
                在我的生活中，有哪些事物是我應該負責，但我卻常常推卸給別人的？
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">5.</span>
                當我感到憤怒或委屈時，我是否能意識到這是我的「警報系統」在提醒我界線被侵犯了？
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 font-bold">6.</span>
                我是否常常覺得自己「別無選擇」，而忘記了我其實有能力為自己的生活做出決定？
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
                畫一個圓圈代表自己，把屬於你的責任（感受、態度、行為）寫在圈內，別人的責任寫在圈外。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">2.</span>
                當別人試圖把圈外的事塞給你時，在心裡默唸或溫和地說出：「這不是我的責任，我無法替你承擔。」
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">3.</span>
                練習使用「我」開頭的句子表達感受，例如：「當你這樣做時，『我』覺得不被尊重」，而不是「『你』總是這樣」。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">4.</span>
                盤點你的財務或時間，找出一個你正在替別人承擔後果的地方，並計畫如何將責任交還給對方。
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
