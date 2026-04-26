import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Zap, Globe, Sparkles } from 'lucide-react';

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
    <motion.div className="mb-6">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 bg-white border-2 border-purple-200 rounded-2xl"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
            <Icon className="w-7 h-7 text-white" />
          </div>
          <h3 className="font-bold text-slate-900">{title}</h3>
        </div>
        {isExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
      </button>
      {isExpanded && (
        <div className="mt-4 p-6 bg-white rounded-xl border-l-4 border-purple-200">
          {children}
        </div>
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
      setExpandedSections(new Set(['intro', 'skyline', 'hereford']));
    } else {
      setExpandedSections(new Set());
    }
  }, [expandAll]);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      
      <div className="bg-purple-50 rounded-3xl p-8 border border-purple-100">
        <h2 className="text-3xl font-bold mb-4">Chapter 1</h2>
        <p className="text-xl">建立個人代禱同工所產生的能力</p>
      </div>

      <Section
        id="intro"
        icon={Zap}
        title="被忽略的屬靈能力資源"
        isExpanded={expandedSections.has('intro')}
        onToggle={() => toggleSection('intro')}
      >
        <p>作者開宗明義地提出：在今日教會裏最少被運用的屬靈能力資源，就是為基督徒領袖們代禱的能力。</p>
      </Section>

      <Section
        id="skyline"
        icon={Globe}
        title="真實見證：天廓衛理教會"
        isExpanded={expandedSections.has('skyline')}
        onToggle={() => toggleSection('skyline')}
      >
        <p>馬約翰牧師的教會因代禱團隊聽到上帝說不，最終得到價值千萬的土地。</p>
      </Section>

      <Section
        id="hereford"
        icon={Sparkles}
        title="真實見證：德州赫里福德市"
        isExpanded={expandedSections.has('hereford')}
        onToggle={() => toggleSection('hereford')}
      >
        <p>李拉瑞前兩晚沒有果效，第三晚兩位婦女禱告8小時後有100人決志。</p>
      </Section>

      <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
        <p className="font-bold text-green-900">BUILD SUCCESS TEST</p>
        <p className="text-green-800">If you see this, the file compiled successfully.</p>
      </div>

    </div>
  );
}
