import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronDown, ChevronUp, Heart } from 'lucide-react';

export default function Chapter10() {
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [showPdf, setShowPdf] = useState(false);

  const sections = [{"title": "安寧療護 (Palliative Care)", "icon": "🏥", "content": "當疾病進入末期，治癒性治療已無法產生效果時，為末期患者提供症狀緩和的照護，協助其有尊嚴地走向人生終點，並協助家屬度過哀傷。適用對象除了癌症，也擴及「八大非癌疾病」（如失智症、帕金森病、心臟衰竭等）。"}, {"title": "《安寧緩和醫療條例》vs《病人自主權利法》", "icon": "⚖️", "content": "適用疾病：《安寧》僅限「末期病人」；《病主法》則擴及5種臨床條件（末期病人、不可逆轉之昏迷、永久植物人、極重度失智、其他經公告之難以忍受的重症）。\\n\\n拒絕範圍：《安寧》可拒絕心肺復甦術(CPR)與延長瀕死過程的維生醫療；《病主法》更進一步包含拒絕「人工營養及流體餵養」（如鼻胃管）。"}, {"title": "預立醫療照護諮商 (ACP)", "icon": "📝", "content": "健康的成年人可透過諮商，訂定「預立醫療決定 (AD)」，註記於健保卡，以保障自身在未來無法表達意願時的醫療自主權。"}];

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="space-y-8">
      {/* 標題 */}
      <div className="bg-gradient-to-br from-slate-600 via-gray-700 to-zinc-800 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="relative">
          <div className="flex items-center gap-2 mb-2"><Heart className="w-5 h-5 text-white/70" /><span className="text-white/70 text-sm tracking-widest">靈性關懷與身心健康</span></div>
          <h1 className="font-extrabold mb-3" style={{fontSize:"32px"}}>第十單元：安寧緩和治療 vs. 病人自主權利</h1>
          <p className="text-white/80 text-lg">認識臨終關懷的法律與實務</p>
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
      <div className="bg-gradient-to-br from-slate-50 to-slate-50 rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowPdf(!showPdf)}>
          <h3 className="font-bold text-slate-800 flex items-center gap-2" style={{fontSize:"22px"}}><BookOpen className="w-6 h-6 text-slate-600" />📄 閱讀原書 PDF（含圖片與完整排版）</h3>
          {showPdf ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
        </div>
        <AnimatePresence>{showPdf && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <div className="mt-4 rounded-xl overflow-hidden border border-slate-200" style={{height:"80vh"}}>
              <iframe src="/spiritual-care.pdf#page=94" className="w-full h-full" title="原書 PDF" />
            </div>
          </motion.div>
        )}</AnimatePresence>
      </div>
      </div>
    </div>
  );
}
