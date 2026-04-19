import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronDown, ChevronUp, Heart } from 'lucide-react';

export default function Chapter4() {
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [showPdf, setShowPdf] = useState(false);

  const sections = [{"title": "寬恕的定義", "icon": "🕊️", "content": "寬恕是受害者在受到不公正傷害時，對侵犯者的負面認知、情緒（如恐懼、敵意）和行為反應的消失，並出現正面反應的過程。\\n\\n寬恕不代表一定要和解：寬恕是個人化的選擇去放下仇恨；而和解涉及兩個人，是建立在傷害者有願望及能力改變傷害方式，重新建立信任及安全的關係上。"}, {"title": "不寬恕的負面機轉", "icon": "⚡", "content": "身體：內分泌失調、免疫系統罷工、骨質疏鬆（憂傷的靈使骨枯乾）。\\n\\n心理：長期累積的壓抑情緒導致沮喪、憤怒、苦毒，甚至誘發疾病成為「癌症性格」。\\n\\n靈性：不能盡心愛神愛人，靈性低落無法禱告，對美好事物的感受力降低。"}, {"title": "尋求被寬恕的過程", "icon": "🤝", "content": "主動認錯/道歉、理解自己也傷害了別人（換位思考）、不帶藉口地請求原諒。若對方已過世，可透過禱告、寫道歉信或追思禮拜來表達。"}];

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="space-y-8">
      {/* 標題 */}
      <div className="bg-gradient-to-br from-teal-600 via-cyan-700 to-blue-800 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="relative">
          <div className="flex items-center gap-2 mb-2"><Heart className="w-5 h-5 text-white/70" /><span className="text-white/70 text-sm tracking-widest">靈性關懷與身心健康</span></div>
          <h1 className="font-extrabold mb-3" style={{fontSize:"32px"}}>第四單元：寬恕與被寬恕</h1>
          <p className="text-white/80 text-lg">檢視靈性平安的第三個面向</p>
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
      <div className="bg-gradient-to-br from-teal-50 to-slate-50 rounded-3xl p-6 md:p-8 border border-teal-100 shadow-sm">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowPdf(!showPdf)}>
          <h3 className="font-bold text-teal-800 flex items-center gap-2" style={{fontSize:"22px"}}><BookOpen className="w-6 h-6 text-teal-600" />📄 閱讀原書 PDF（含圖片與完整排版）</h3>
          {showPdf ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
        </div>
        <AnimatePresence>{showPdf && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <div className="mt-4 rounded-xl overflow-hidden border border-teal-200" style={{height:"80vh"}}>
              <iframe src="/spiritual-care.pdf#page=34" className="w-full h-full" title="原書 PDF" />
            </div>
          </motion.div>
        )}</AnimatePresence>
      </div>
      </div>
    </div>
  );
}
