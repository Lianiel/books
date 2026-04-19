import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronDown, ChevronUp, Heart } from 'lucide-react';

export default function Chapter1() {
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [showPdf, setShowPdf] = useState(false);

  const sections = [{"title": "何謂靈性 (Spirituality)", "icon": "🌿", "content": "靈性是「個人對生命最終價值所堅持的信念或信仰」，是一種人生哲學觀與價值觀，影響個人處事的態度及行為表現。神學家保羅·田立克 (Paul Tillich) 稱之為「終極關懷」(Ultimate Concern)——使人付上一生去尋求的價值觀，並且在尋求的過程中，身心靈朝向完滿與平安。對於基督徒來說，信仰就是我們的終極關懷。"}, {"title": "靈性的學術定義", "icon": "📚", "content": "Hiatt (1986)：對人生意義的關注，包含「內在自我」（自我價值認同）、「人際連結」（情感交流與愛）與「超然存在」（與大自然或更高力量的連結）。\\n\\nReed (1991)：靈性是經由「自我超越」（向外、向上或向內延伸）以發現生命意義的人類習性，在年長或接近死亡時會變得更為顯著。\\n\\nWoods (1994)：包含意義感、神聖性、超越性與連結性四個要素。\\n\\nSulmasy (2002)：個體或團體與宇宙至高者之間的關係；尋找超越肉身以外的意義。"}, {"title": "靈性困擾與馬斯洛需求", "icon": "⚠️", "content": "從基本的生理需求到頂端的自我實現，任一層面產生缺乏或不滿足時，便是靈性困擾產生的可能因素。例如先知以利亞在逃亡時，經歷了生理的匱乏、安全的威脅，以及情感歸屬上的孤立。\\n\\n「靈性困擾」(spiritual distress) 定義為：滲透入個人整體、統整及超越個人生物、心理社會本質，使得個人生命原則受到干擾。當個體面臨疾病威脅、喪失身體功能或瀕死時，會體認自己的脆弱及生命的無能為力，開始尋找生命的意義。"}, {"title": "靈性平安的五個面向", "icon": "☮️", "content": "決定一個人活在世上是否靈性平安，包含五個面向：\\n\\n1️⃣ 生命的意義和價值\\n2️⃣ 愛與被愛\\n3️⃣ 寬恕與被寬恕\\n4️⃣ 希望與失望\\n5️⃣ 與至高者建立關係\\n\\n這五個面向將分別在第二至第六單元中深入探討。"}];

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="space-y-8">
      {/* 標題 */}
      <div className="bg-gradient-to-br from-slate-700 via-indigo-800 to-purple-900 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="relative">
          <div className="flex items-center gap-2 mb-2"><Heart className="w-5 h-5 text-white/70" /><span className="text-white/70 text-sm tracking-widest">靈性關懷與身心健康</span></div>
          <h1 className="font-extrabold mb-3" style={{fontSize:"32px"}}>第一單元：靈性平安與靈性困擾</h1>
          <p className="text-white/80 text-lg">認識靈性的本質，理解靈性困擾如何影響全人健康</p>
        </div>
      </div>

      {/* 內容區塊 */}
      {sections.map((sec: any, i: number) => (
        <div key={i} className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between cursor-pointer" onClick={() => setOpenSection(openSection === i ? null : i)}>
            <h3 className="font-bold text-slate-800 flex items-center gap-2" style={{fontSize:"22px"}}><span className="text-2xl">{sec.icon}</span>{sec.title}</h3>
            {openSection === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
          </div>
          <AnimatePresence>{(openSection === i) && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
              <div className="mt-4 bg-slate-50 rounded-xl p-5 border border-slate-100">
                {sec.content.split('\n\n').map((para: string, j: number) => (
                  <p key={j} className="text-slate-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>{para}</p>
                ))}
              </div>
            </motion.div>
          )}</AnimatePresence>
        </div>
      ))}

      {/* PDF 原書閱讀 */}
      <div className="bg-gradient-to-br from-indigo-50 to-slate-50 rounded-3xl p-6 md:p-8 border border-indigo-100 shadow-sm">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowPdf(!showPdf)}>
          <h3 className="font-bold text-indigo-800 flex items-center gap-2" style={{fontSize:"22px"}}><BookOpen className="w-6 h-6 text-indigo-600" />📄 閱讀原書 PDF（含圖片與完整排版）</h3>
          {showPdf ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
        </div>
        <AnimatePresence>{showPdf && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <div className="mt-4 rounded-xl overflow-hidden border border-indigo-200" style={{height:"80vh"}}>
              <iframe src="/spiritual-care.pdf#page=4" className="w-full h-full" title="原書 PDF" />
            </div>
          </motion.div>
        )}</AnimatePresence>
      </div>
      </div>
    </div>
  );
}
