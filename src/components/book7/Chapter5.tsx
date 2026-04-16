import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronDown, ChevronUp, MessageSquareQuote, Shield } from 'lucide-react';

export default function Chapter5() {
  const [openQ, setOpenQ] = useState<number | null>(null);
  const [showScripture, setShowScripture] = useState(false);

  const supplementScriptures = [
    { topic: "有關聚會的態度", ref: "希伯來書 10:24~25", text: "又要彼此相顧，激發愛心，勉勵行善。你們不可停止聚會，好像那些停止慣了的人，倒要彼此勸勉，既知道那日子臨近，就更當如此。" },
    { topic: "有關奉獻的態度", ref: "申命記 16:17", text: "各人要按自己的力量，照耶和華－你神所賜的福分，奉獻禮物。" },
    { topic: "有關奉獻的態度", ref: "瑪拉基書 3:10", text: "萬軍之耶和華說：你們要將當納的十分之一全然送入倉庫，使我家有糧，以此試試我，是否為你們敞開天上的窗戶，傾福與你們，甚至無處可容。" }
  ];

  const objections = [
    { q: "偶像的產生？", a: "賽 44：14~19 ── 一棵樹的例子。同一棵樹，一半拿來燒火煮飯，另一半拿來雕刻成偶像跪拜，這合理嗎？" },
    { q: "拜最大的神？", a: "只有獨一真神，除他以外，別無拯救。（賽 43：10）萬王之王，萬神之神～其他不是神，是邪靈，是偶像。" },
    { q: "祖先得救？", a: "強調出 20：12、申 5：16、弗 6：2 孝敬父母是神帶有應許的誡命，祖先只有神能判斷，重點是現在聽聞福音，祝福影響家人後代。祖先沒有人照顧？是不孝。長子長孫～祖先死後要吃飯？不每天吃嗎。" },
    { q: "宗教都是勸人為善？", a: "不是對我好都是我爸媽，爸媽只有一個。真正的神只有一位。" },
    { q: "只有你們是神，很惡霸？", a: "真理都有絕對性、排他性，例如：水、空氣、光等，維持生命的必要都是絕對性、排他性。" },
    { q: "基督教不錯，只是我還沒有準備好？", a: "重點是神和人的關係、願意謙卑成為受造者、享受創造神的恩典，還是自己想當神來決定一切。" },
    { q: "其他信仰也有很多神蹟跟善行，他們並不壞，例：媽祖？", a: "神是不會受限，不會是人造的偶像、更不可能是人變成神。" },
    { q: "初一、十五、中元節，恐懼不安有拜有保庇？", a: "有保庇不用每年拜、沒拜沒保庇，這樣的神是神嗎？還是有條件的交換。" }
  ];

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="space-y-8">

      {/* ========== 標題 ========== */}
      <div className="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
        <div className="relative">
          <div className="flex items-center gap-2 mb-2"><Shield className="w-5 h-5 text-blue-300" /><span className="text-blue-300 text-sm tracking-widest">基要陪讀課程</span></div>
          <h1 className="font-extrabold mb-3" style={{fontSize:"30px"}}>補充經文及反對問題回應</h1>
          <p className="text-slate-300" style={{fontSize:"18px"}}>陪讀過程中常見的問題與聖經回應，幫助陪讀者有準備地面對慕道友的疑問。</p>
        </div>
      </div>

      {/* ========== 補充經文 ========== */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 md:p-8 border border-blue-100 shadow-sm">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowScripture(!showScripture)}>
          <h3 className="font-bold text-blue-800 flex items-center gap-2" style={{fontSize:"24px"}}><BookOpen className="w-6 h-6 text-blue-600" />補充經文</h3>
          {showScripture ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
        </div>
        <AnimatePresence>{showScripture && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <div className="space-y-3 mt-4">
              {supplementScriptures.map((s, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-blue-100">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold text-blue-700 text-sm bg-blue-100 px-2 py-0.5 rounded-full">{s.topic}</span>
                    <span className="text-slate-500 text-sm">{s.ref}</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed" style={{fontSize:"17px"}}>{s.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}</AnimatePresence>
      </div>

      {/* ========== 反對問題回應 ========== */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 md:p-8 border border-amber-100 shadow-sm">
        <h3 className="font-bold text-amber-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><MessageSquareQuote className="w-6 h-6 text-amber-600" />反對問題回應</h3>
        <div className="space-y-3">
          {objections.map((obj, i) => (
            <div key={i} className="bg-white rounded-xl border border-amber-100 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-amber-50 transition-colors" onClick={() => setOpenQ(openQ === i ? null : i)}>
                <h4 className="font-bold text-amber-800" style={{fontSize:"18px"}}>❓ {obj.q}</h4>
                {openQ === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>{(openQ === i) && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                  <div className="px-5 pb-4">
                    <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                      <p className="text-emerald-800" style={{fontSize:"17px"}}>💬 {obj.a}</p>
                    </div>
                  </div>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      </div>
    </div>
  );
}
