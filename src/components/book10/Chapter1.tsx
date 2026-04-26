import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Shield, Users, Zap, Heart, BookOpen, Brain, Target, MessageCircle, Sparkles, Globe, Compass } from 'lucide-react';

interface SectionProps {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

function Section({ id, icon: Icon, title, isExpanded, onToggle, children }: SectionProps) {
  return (
    <motion.div 
      className="mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 md:p-7 bg-gradient-to-r from-white to-purple-50/30 border-2 border-purple-200 rounded-2xl hover:border-purple-300 hover:shadow-md transition-all group"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
            <Icon className="w-7 h-7 text-white" />
          </div>
          <h3 className="font-extrabold text-slate-900 text-left" style={{fontSize:"21px"}}>{title}</h3>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-6 h-6 text-purple-600 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-6 h-6 text-purple-600 flex-shrink-0" />
        )}
      </button>
      {isExpanded && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 pl-6 md:pl-8 border-l-4 border-purple-200 bg-white rounded-r-2xl p-6 shadow-sm"
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Chapter1({ expandAll }: { expandAll?: boolean }) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = (id: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedSections(newExpanded);
  };

  useEffect(() => {
    if (expandAll) {
      const allIds = ['intro', 'skyline', 'hereford', 'intercession', 'bible', 'power', 'summary'];
      setExpandedSections(new Set(allIds));
    } else {
      setExpandedSections(new Set());
    }
  }, [expandAll]);

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-700">
      {/* Chapter Header */}
      <div className="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 rounded-3xl p-8 md:p-10 border border-purple-100 shadow-sm relative overflow-hidden mb-8">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-bold mb-4" style={{fontSize:"17px"}}>
            Chapter 1
          </div>
          <h2 className="md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight" style={{fontSize:"33px"}}>
            建立個人代禱同工所產生的能力
          </h2>
          <p className="text-slate-700 leading-relaxed max-w-3xl mb-6" style={{fontSize:"21px"}}>
            在今日教會裏，最少被運用的屬靈能力資源，就是為基督徒領袖們代禱的能力。
          </p>
          <div className="bg-white/60 backdrop-blur-sm border border-purple-200 rounded-xl p-5 mt-4">
            <p className="text-lg text-gray-800 font-medium italic leading-relaxed" style={{fontSize:"19px"}}>
              「在今日教會裏最少被運用的屬靈能力資源，就是為基督徒領袖們代禱的能力。」
            </p>
            <p className="text-sm text-gray-600 mt-2" style={{fontSize:"15px"}}>—— 彼得·魏格納</p>
          </div>
        </div>
      </div>

      {/* Sections - 這裡我會簡化內容以確保編譯成功 */}
      <Section
        id="intro"
        icon={Zap}
        title="被忽略的屬靈能力資源"
        isExpanded={expandedSections.has('intro')}
        onToggle={() => toggleSection('intro')}
      >
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
            作者開宗明義地提出一個大膽的主張：在今日教會裏最少被運用的屬靈能力資源，就是為基督徒領袖們代禱的能力。
          </p>
        </div>
      </Section>

      {/* 提示：完整版本包含所有 7 個 Sections + 擴充內容 */}
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-r-xl">
        <p className="text-yellow-900 font-semibold" style={{fontSize:"17px"}}>
          ⚠️ 此為測試版本 - 確認編譯成功後將提供完整內容
        </p>
        <p className="text-yellow-800 mt-2" style={{fontSize:"15px"}}>
          包含：7個原有Sections + 神學探討 + 台灣應用 + 四週挑戰 + 討論問題 + 反思行動
        </p>
      </div>

    </div>
  );
}
