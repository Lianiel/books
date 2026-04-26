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
              在今日教會裏最少被運用的屬靈能力資源，就是為基督徒領袖們代禱的能力。
            </p>
            <p className="text-sm text-gray-600 mt-2" style={{fontSize:"15px"}}>—— 彼得·魏格納</p>
          </div>
        </div>
      </div>

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
          <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
            他刻意不說最少被運用的能力資源之一，因為沒有任何一件事是如此重要卻又如此被忽略的。
          </p>
        </div>
      </Section>

      <Section
        id="skyline"
        icon={Globe}
        title="真實見證：天廓衛理教會的屬靈冒險"
        isExpanded={expandedSections.has('skyline')}
        onToggle={() => toggleSection('skyline')}
      >
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
            馬約翰牧師牧養聖地牙哥天廓衛理教會，在他多年的領導之下，教會實質成長至約三千人。
          </p>
          <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
            馬約翰的教會中有一百位高度委身的人為他禱告。他們一起為購地禱告，最初找到一塊五十英畝的土地，談好了兩百萬美元的價格。
          </p>
          <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl">
            <p className="text-red-900 font-semibold mb-2" style={{fontSize:"17px"}}>代禱團隊聽到上帝說：這不是你們的地！</p>
            <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
              星期六當天，一百位代禱夥伴前往那塊土地禱告。他們愈禱告就愈有種奇怪的感覺，最後承認都聽到上帝說：這不是你們的地！
            </p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r-xl mt-4">
            <p className="text-green-900 font-semibold mb-2" style={{fontSize:"17px"}}>最終結果：未花一分錢得到價值千萬的土地</p>
            <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
              後來他們找到八十英畝的美地，以一百八十萬美元成交。透過評估者發現真正地價是四百五十萬美元。最終教會得到一百三十英畝的土地，價值可能超過一千萬美元，總共算起來未花一分錢！
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="hereford"
        icon={Sparkles}
        title="真實見證：德州赫里福德市的復興"
        isExpanded={expandedSections.has('hereford')}
        onToggle={() => toggleSection('hereford')}
      >
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
            李拉瑞收到他生平第一次主持全市福音佈道會的邀請，地點是德州的赫里福德市。
          </p>
          <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl">
            <p className="text-red-900 font-semibold mb-2" style={{fontSize:"17px"}}>前兩晚：沒有任何回應</p>
            <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
              第一天晚上他全心全力地傳講，但沒有一個人回應他的呼召。第二天晚上又是同樣的情況。
            </p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r-xl mt-4">
            <p className="text-green-900 font-semibold mb-2" style={{fontSize:"17px"}}>第三晚：兩位婦人禱告8小時，100人決志</p>
            <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
              第三天晚上，兩位婦人走向他說：不要擔心，弟兄，今天我們已為你禱告了八個小時。那晚有一百個人回應他的呼召！整週結束有五百人決志相信基督。
            </p>
          </div>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-r-xl mt-4">
            <p className="text-yellow-900 font-semibold mb-2" style={{fontSize:"17px"}}>上帝的聲音</p>
            <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
              在回達拉斯的飛機上，李拉瑞清楚地聽到上帝的聲音：孩子，你與這次的復興一點關連都沒有。那些人之所以得救，是因為有人為此付上了禱告的代價！
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="intercession"
        icon={Heart}
        title="何謂代禱？"
        isExpanded={expandedSections.has('intercession')}
        onToggle={() => toggleSection('intercession')}
      >
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
            代禱一字源於拉丁文 inter（意指之間）及 cedere（意指前去），所以代禱就是去到破口之間或站在破口內之意。
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-xl">
            <p className="text-blue-900 font-semibold mb-2" style={{fontSize:"17px"}}>定義</p>
            <p className="text-gray-700" style={{fontSize:"17px"}}>
              所有的代禱都是禱告，但並非所有的禱告都是代禱。代禱是為了一個人的益處而來到上帝面前求告。
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="bible"
        icon={BookOpen}
        title="代禱的聖經基礎"
        isExpanded={expandedSections.has('bible')}
        onToggle={() => toggleSection('bible')}
      >
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
            聖經中充滿了代禱者的榜樣。摩西與撒母耳是舊約中最偉大的代禱者，耶穌是新約中無與倫比的代禱者。
          </p>
          <p className="text-gray-700 leading-relaxed font-semibold text-purple-800" style={{fontSize:"17px"}}>
            保羅在他的書信中曾五次要求人為他禱告，深知為領袖個人代禱的價值。
          </p>
        </div>
      </Section>

      <Section
        id="power"
        icon={Shield}
        title="代禱能力的釋放"
        isExpanded={expandedSections.has('power')}
        onToggle={() => toggleSection('power')}
      >
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
            約翰·衛斯理說：除了回覆信心的禱告外，上帝在世上不做任何一件事。
          </p>
          <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
            溫瓦特說：歷史是屬於代禱者的。代禱者能確定：在許多情況下若沒有他們忠心的代禱服事，上帝就不會行出祂所行的。
          </p>
        </div>
      </Section>

      <Section
        id="summary"
        icon={Users}
        title="本章總結"
        isExpanded={expandedSections.has('summary')}
        onToggle={() => toggleSection('summary')}
      >
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed font-semibold text-purple-800" style={{fontSize:"17px"}}>
            本章揭示了一個被教會忽略卻極其重要的真理：為基督徒領袖代禱的能力。
          </p>
          <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
            真實的見證顯示，代禱能改變決策、帶來復興。代禱是屬靈爭戰，代禱者常成為黑暗權勢首要攻擊的目標。
          </p>
        </div>
      </Section>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded-r-xl mt-8">
        <p className="text-green-900 font-bold mb-2" style={{fontSize:"19px"}}>
          ✅ 核心內容已完成
        </p>
        <p className="text-green-800" style={{fontSize:"17px"}}>
          此版本包含完整的7個Sections。確認編譯成功後，將提供擴充內容（神學探討、台灣應用、四週挑戰、討論問題等）。
        </p>
      </div>

    </div>
  );
}
