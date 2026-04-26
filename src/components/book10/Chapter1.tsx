import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Zap, Globe, Sparkles, Heart, BookOpen, Shield, Users } from 'lucide-react';

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
      
      <div className="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 rounded-3xl p-8 md:p-10 border border-purple-100 shadow-sm relative overflow-hidden mb-8">
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
        </div>
      </div>

      <Section
        id="intro"
        icon={Zap}
        title="被忽略的屬靈能力資源"
        isExpanded={expandedSections.has('intro')}
        onToggle={() => toggleSection('intro')}
      >
        <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
          作者開宗明義地提出一個大膽的主張：在今日教會裏最少被運用的屬靈能力資源，就是為基督徒領袖們代禱的能力。
        </p>
      </Section>

      <Section
        id="skyline"
        icon={Globe}
        title="真實見證：天廓衛理教會"
        isExpanded={expandedSections.has('skyline')}
        onToggle={() => toggleSection('skyline')}
      >
        <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
          馬約翰牧師的教會有一百位代禱夥伴。他們為購地禱告，聽到上帝說不，最終未花一分錢得到價值千萬的土地。
        </p>
      </Section>

      <Section
        id="hereford"
        icon={Sparkles}
        title="真實見證：德州赫里福德市"
        isExpanded={expandedSections.has('hereford')}
        onToggle={() => toggleSection('hereford')}
      >
        <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
          李拉瑞前兩晚沒有果效，第三晚兩位婦女禱告8小時後有100人決志。整週五百人歸主。
        </p>
      </Section>

      <Section
        id="intercession"
        icon={Heart}
        title="何謂代禱？"
        isExpanded={expandedSections.has('intercession')}
        onToggle={() => toggleSection('intercession')}
      >
        <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
          代禱就是去到破口之間或站在破口內。所有的代禱都是禱告，但並非所有的禱告都是代禱。
        </p>
      </Section>

      <Section
        id="bible"
        icon={BookOpen}
        title="代禱的聖經基礎"
        isExpanded={expandedSections.has('bible')}
        onToggle={() => toggleSection('bible')}
      >
        <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
          摩西與撒母耳是舊約最偉大的代禱者，耶穌是新約無與倫比的代禱者。保羅五次要求人為他禱告。
        </p>
      </Section>

      <Section
        id="power"
        icon={Shield}
        title="代禱能力的釋放"
        isExpanded={expandedSections.has('power')}
        onToggle={() => toggleSection('power')}
      >
        <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
          約翰衛斯理說：除了回覆信心的禱告外，上帝在世上不做任何一件事。溫瓦特說：歷史是屬於代禱者的。
        </p>
      </Section>

      <Section
        id="summary"
        icon={Users}
        title="本章總結"
        isExpanded={expandedSections.has('summary')}
        onToggle={() => toggleSection('summary')}
      >
        <p className="text-gray-700 font-semibold text-purple-800" style={{fontSize:"17px"}}>
          本章揭示了被教會忽略卻極其重要的真理：為基督徒領袖代禱的能力。
        </p>
      </Section>

      <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl mt-8">
        <p className="text-green-900 font-bold mb-2" style={{fontSize:"19px"}}>
          SUCCESS TEST VERSION
        </p>
        <p className="text-green-800" style={{fontSize:"17px"}}>
          如果你看到這個綠色框，表示檔案上傳成功且可以正常編譯。確認後將提供包含所有擴充內容的完整版本。
        </p>
      </div>

    </div>
  );
}
