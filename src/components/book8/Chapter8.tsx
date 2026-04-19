import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronDown, ChevronUp, Heart } from 'lucide-react';

export default function Chapter8() {
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [showPdf, setShowPdf] = useState(false);

  const sections = [{"title": "3F 原則", "icon": "🧩", "content": "在探討問題時，可以運用 3F 原則來全面分析：\\n\\n1. 事實 (Fact)：確保提供的訊息真實可靠，但要注意「事實」往往帶有主觀性，會受到個人價值觀與文化影響（例如約瑟將被哥哥賣掉解讀為上帝美好的意思）。\\n\\n2. 特徵 (Feature)：關懷者需敏銳點出案主顯露出的特徵與屬性，例如特殊的言語或非語言特徵（如眼神呆滯、說「反正我的命就這樣」）。\\n\\n3. 感受 (Feeling)：將人們對於問題的感受和看法納入分析。"}, {"title": "思維導圖 (Mind Mapping)", "icon": "🧠", "content": "可利用東尼·博贊發明的思維導圖，透過左腦邏輯與右腦圖像的結合，幫助進行多方位的發散性思維及總結。"}];

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="space-y-8">
      {/* 標題 */}
      <div className="bg-gradient-to-br from-cyan-600 via-teal-700 to-emerald-800 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="relative">
          <div className="flex items-center gap-2 mb-2"><Heart className="w-5 h-5 text-white/70" /><span className="text-white/70 text-sm tracking-widest">靈性關懷與身心健康</span></div>
          <h1 className="font-extrabold mb-3" style={{fontSize:"32px"}}>第八單元：探索問題</h1>
          <p className="text-white/80 text-lg">促進靈性平安的第二個階段</p>
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
      <div className="bg-gradient-to-br from-cyan-50 to-slate-50 rounded-3xl p-6 md:p-8 border border-cyan-100 shadow-sm">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowPdf(!showPdf)}>
          <h3 className="font-bold text-cyan-800 flex items-center gap-2" style={{fontSize:"22px"}}><BookOpen className="w-6 h-6 text-cyan-600" />📄 閱讀原書 PDF（含圖片與完整排版）</h3>
          {showPdf ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
        </div>
        <AnimatePresence>{showPdf && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <div className="mt-4 rounded-xl overflow-hidden border border-cyan-200" style={{height:"80vh"}}>
              <iframe src="/spiritual-care.pdf#page=74" className="w-full h-full" title="原書 PDF" />
            </div>
          </motion.div>
        )}</AnimatePresence>
      </div>
      </div>
    </div>
  );
}
