import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronDown, ChevronUp, Sparkles, Heart, Crown, Shield, Flame, Target, MessageCircle } from 'lucide-react';

export default function Chapter6() {
  const [expandAll, setExpandAll] = useState(false);
  const [openSection, setOpenSection] = useState<number | null>(null);

  const prayerExamples = [
    {
      title: "為國家禱告",
      icon: <Shield className="w-5 h-5" />,
      content: [
        "奉主耶穌基督的名宣告，台灣是屬神的國度",
        "求主興起合神心意的領袖，賜下智慧和公義",
        "破除一切黑暗權勢對這地的轄制",
        "求主的平安、公義、慈愛充滿這地",
        "讓福音的光照亮台灣每一個角落"
      ]
    },
    {
      title: "為教會禱告",
      icon: <Heart className="w-5 h-5" />,
      content: [
        "奉主耶穌基督的名宣告，教會是基督的身體",
        "求主復興祢的教會，恢復初代教會的火熱",
        "破除一切宗教的靈、分裂的靈",
        "求主賜下合一的心，讓眾教會同心合意興旺福音",
        "讓聖靈的能力大大運行在教會中"
      ]
    },
    {
      title: "為家庭禱告",
      icon: <Crown className="w-5 h-5" />,
      content: [
        "奉主耶穌基督的名宣告，我的家是屬神的家",
        "求主作我家之主，掌管一切",
        "破除一切咒詛、疾病、貧窮的靈",
        "求主賜下和睦、喜樂、豐盛",
        "讓我的家成為神榮耀的居所"
      ]
    },
    {
      title: "為個人禱告",
      icon: <Flame className="w-5 h-5" />,
      content: [
        "奉主耶穌基督的名宣告，我是神的兒女",
        "求主更新我的心思意念",
        "破除一切恐懼、憂慮、自卑的靈",
        "求主充滿我，使用我",
        "讓我活出基督榮美的生命"
      ]
    },
    {
      title: "屬靈爭戰禱告",
      icon: <Target className="w-5 h-5" />,
      content: [
        "奉主耶穌基督的名，穿戴神所賜的全副軍裝",
        "用真理當作帶子束腰，用公義當作護心鏡遮胸",
        "用平安的福音當作預備走路的鞋穿在腳上",
        "拿著信德當作藤牌，滅盡那惡者一切的火箭",
        "戴上救恩的頭盔，拿著聖靈的寶劍就是神的道"
      ]
    }
  ];

  const completePrayerModel = {
    title: "完整禱告範例",
    steps: [
      {
        phase: "第三層天禱告(至聖所)",
        content: [
          "宣告七次「榮耀歸給父神」",
          "頌讀詩篇150篇",
          "讚美神的屬性(聖潔、公義、慈愛等)",
          "求聖靈膏抹充滿"
        ]
      },
      {
        phase: "第二層天禱告(聖所)",
        content: [
          "宣告耶穌基督的得勝",
          "行使屬天的權柄",
          "破除黑暗權勢",
          "捆綁撒但的作為"
        ]
      },
      {
        phase: "第一層天禱告(外院)",
        content: [
          "為具體事項代禱",
          "認罪悔改",
          "祈求神的供應",
          "感恩讚美"
        ]
      }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* 標題 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-3"
      >
        <div className="flex items-center justify-center gap-3">
          <MessageCircle className="w-8 h-8 text-violet-600" />
          <h1 className="text-3xl font-bold text-slate-800">第六篇：話禱範例</h1>
        </div>
        <p className="text-lg text-slate-600">實際應用的禱告示範</p>
      </motion.div>

      {/* 前言 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-6 border border-violet-100"
      >
        <p className="text-slate-700 leading-relaxed mb-4">
          本篇提供實際的禱告範例，幫助你將三層天禱告的原則應用在不同的生活層面。
          這些範例不是固定的公式，而是提供一個框架，讓你可以按照聖靈的引導，
          用自己的話語來禱告。
        </p>
        <p className="text-slate-700 leading-relaxed">
          記住：禱告不在於言語的華麗，而在於心靈的真誠。神看重的是我們與祂的關係，
          以及我們是否願意順服祂的旨意。
        </p>
      </motion.div>

      {/* 全部展開/收合按鈕 */}
      <div className="flex justify-end">
        <button
          onClick={() => {
            setExpandAll(!expandAll);
            if (!expandAll) setOpenSection(null);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-violet-100 text-violet-700 rounded-lg hover:bg-violet-200 transition-colors"
        >
          {expandAll ? (
            <>
              <ChevronUp className="w-4 h-4" />
              全部收合
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              全部展開
            </>
          )}
        </button>
      </div>

      {/* 各類禱告範例 */}
      <div className="space-y-4">
        {prayerExamples.map((example, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => setOpenSection(openSection === index ? null : index)}
              className="w-full p-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-violet-100 rounded-lg text-violet-600">
                  {example.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-800">
                  {example.title}
                </h3>
              </div>
              {(expandAll || openSection === index) ? (
                <ChevronUp className="w-5 h-5 text-slate-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </button>
            
            <AnimatePresence>
              {(expandAll || openSection === index) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-5 pt-0 space-y-3">
                    {example.content.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3 bg-violet-50 rounded-lg"
                      >
                        <Sparkles className="w-4 h-4 text-violet-600 mt-1 flex-shrink-0" />
                        <p className="text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* 完整禱告範例 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-br from-violet-100 to-purple-100 rounded-xl p-6 border border-violet-200"
      >
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="w-6 h-6 text-violet-600" />
          <h3 className="text-xl font-bold text-slate-800">
            {completePrayerModel.title}
          </h3>
        </div>
        
        <div className="space-y-5">
          {completePrayerModel.steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg p-5 space-y-3">
              <h4 className="font-semibold text-violet-700 text-lg">
                {step.phase}
              </h4>
              <div className="space-y-2">
                {step.content.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-violet-600 mt-1">•</span>
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 結語 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200"
      >
        <h3 className="text-xl font-bold text-slate-800 mb-4">使用提醒</h3>
        <div className="space-y-3 text-slate-700">
          <p className="leading-relaxed">
            <strong className="text-amber-700">1. 個人化你的禱告：</strong>
            這些範例只是參考，請按照聖靈的感動和你個人的需要來調整。
          </p>
          <p className="leading-relaxed">
            <strong className="text-amber-700">2. 持續操練：</strong>
            剛開始可能會覺得生疏，但持續操練會越來越自然。
          </p>
          <p className="leading-relaxed">
            <strong className="text-amber-700">3. 保持彈性：</strong>
            不要被形式綁住，重要的是與神建立真實的關係。
          </p>
          <p className="leading-relaxed">
            <strong className="text-amber-700">4. 團體應用：</strong>
            這些禱告也可以在小組或教會聚會中使用。
          </p>
        </div>
      </motion.div>
    </div>
  );
}
