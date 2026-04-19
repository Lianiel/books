import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronDown, ChevronUp, Heart } from 'lucide-react';

export default function Chapter3() {
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [showPdf, setShowPdf] = useState(false);

  const sections = [{"title": "愛的重要性", "icon": "❤️", "content": "雷蒙博士對瀕死體驗者的研究指出，人死後在回顧一生時，評價完全不依賴財富或地位，而是僅僅取決於「你一生與他人分享的愛和溫暖有多少」。"}, {"title": "愛的四大元素（弗洛姆）", "icon": "💝", "content": "心理學家弗洛姆 (Erich Fromm) 認為愛是人與人之間的創造力，其本質有四個元素：\\n\\n1. 關懷：付出絕對不會白費，如同《在天堂遇見的五個人》所傳達的意涵。\\n2. 責任：愛不僅是在婚姻的領域，也包含親情與友情中對彼此負起責任。\\n3. 尊重：如實看待對方，若不尊重一個人，會將他視為透明人、障礙物，甚至妖魔化。\\n4. 瞭解：懂得自己的脆弱，並能同理別人的感受，讓講述者感到自己並不孤獨。"}];

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="space-y-8">
      {/* 標題 */}
      <div className="bg-gradient-to-br from-rose-600 via-pink-700 to-fuchsia-800 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="relative">
          <div className="flex items-center gap-2 mb-2"><Heart className="w-5 h-5 text-white/70" /><span className="text-white/70 text-sm tracking-widest">靈性關懷與身心健康</span></div>
          <h1 className="font-extrabold mb-3" style={{fontSize:"32px"}}>第三單元：愛與被愛</h1>
          <p className="text-white/80 text-lg">檢視靈性平安的第二個面向</p>
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
      <div className="bg-gradient-to-br from-rose-50 to-slate-50 rounded-3xl p-6 md:p-8 border border-rose-100 shadow-sm">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowPdf(!showPdf)}>
          <h3 className="font-bold text-rose-800 flex items-center gap-2" style={{fontSize:"22px"}}><BookOpen className="w-6 h-6 text-rose-600" />📄 閱讀原書 PDF（含圖片與完整排版）</h3>
          {showPdf ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
        </div>
        <AnimatePresence>{showPdf && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <div className="mt-4 rounded-xl overflow-hidden border border-rose-200" style={{height:"80vh"}}>
              <iframe src="/spiritual-care.pdf#page=24" className="w-full h-full" title="原書 PDF" />
            </div>
          </motion.div>
        )}</AnimatePresence>
      </div>
      </div>
    </div>
  );
}
