import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Lightbulb, Target, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Book15Home() {
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);

  const chapters = [
    { id: 'ch1', title: '人人都是神學家', path: '/book15/chapter1', description: '揭示每個基督徒都在進行神學思考' },
    { id: 'ch2', title: '不是所有神學都一律平等', path: '/book15/chapter2', description: '了解不同層次的神學及其差異' },
    { id: 'ch3', title: '界定神學', path: '/book15/chapter3', description: '認識神學的定義和核心焦點' },
    { id: 'ch4', title: '為神學辯護', path: '/book15/chapter4', description: '回應對神學的常見批評和異議' },
    { id: 'ch5', title: '神學的任務和傳統', path: '/book15/chapter5', description: '探討批判與建設的神學任務' },
    { id: 'ch6', title: '神學家的工具', path: '/book15/chapter6', description: '認識聖經、傳統、經驗和理性' },
    { id: 'ch7', title: '建立神學的脈絡', path: '/book15/chapter7', description: '理解歷史、文化和教會背景' },
    { id: 'ch8', title: '神學生活化', path: '/book15/chapter8', description: '從知識到生命的轉變' },
    { id: 'ch9', title: '神學研究入門', path: '/book15/chapter9', description: '開始你的神學探索之旅' },
  ];

  const toggleChapter = (id: string) => {
    setExpandedChapter(expandedChapter === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <motion.div
        className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white rounded-xl p-10 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-5xl font-bold mb-3">誰需要神學？</h1>
        <p className="text-xl text-purple-100 mb-2">神學研究入門</p>
        <p className="text-purple-200">作者：史丹尼·格蘭茨 (Stanley J. Grenz) 和 羅傑·奧遜 (Roger E. Olson)</p>
      </motion.div>

      {/* Introduction */}
      <motion.div
        className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-lg mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="text-2xl font-bold text-blue-900 mb-4">書籍簡介</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          許多基督徒對「神學」一詞感到陌生或恐懼，以為那是只有專家才能從事的工作。但事實上，每一個肯思考的基督徒都是神學家。本書破除迷思，幫助讀者認識：神學不僅必要，而且是每個信徒的責任與特權。
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          兩位作者以清晰而親切的筆調，帶領讀者探討以下問題：什麼是神學？為什麼神學引起爭議？神學如何改變生命？如何開始神學的探索？無論你是初信者、熱心信徒，還是有志於深造神學，這本書都會帶給你新的視角。
        </p>
        <div className="bg-white p-4 rounded border-l-4 border-blue-500 italic">
          <p className="text-blue-900">
            「本書的目的是幫助你了解自己已經是一個神學家，並鼓勵你成為一個更好、更負責任的神學家。」
          </p>
        </div>
      </motion.div>

      {/* Key Themes */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-lg">
          <div className="flex items-start gap-3">
            <BookOpen className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-orange-900 mb-2">神學的必要性</h3>
              <p className="text-gray-700 text-sm">每個基督徒都在進行神學思考；問題不在於要不要，而在於如何進行優質的神學。</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
          <div className="flex items-start gap-3">
            <Target className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-green-900 mb-2">神學的任務</h3>
              <p className="text-gray-700 text-sm">批判性反省與建設性陳述——既檢驗信念的真確性，也用當代語言重新表達信仰。</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
          <div className="flex items-start gap-3">
            <Lightbulb className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-pink-900 mb-2">神學的工具</h3>
              <p className="text-gray-700 text-sm">聖經、傳統、經驗和理性——四大工具的協調使用，幫助我們進行神學思考。</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg">
          <div className="flex items-start gap-3">
            <Users className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-cyan-900 mb-2">神學的應用</h3>
              <p className="text-gray-700 text-sm">神學的終極目的是轉變生命——從認識到實踐，從理論到行動。</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Chapters Navigation */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">九章內容</h2>
        <div className="space-y-3">
          {chapters.map((chapter, index) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.05 }}
            >
              <Link
                to={chapter.path}
                className="block bg-white hover:bg-blue-50 border-l-4 border-blue-300 hover:border-blue-600 p-4 rounded transition group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600">
                      {chapter.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">{chapter.description}</p>
                  </div>
                  <span className="text-blue-400 group-hover:text-blue-600 font-bold text-lg ml-2 flex-shrink-0">
                    →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Study Guide */}
      <motion.div
        className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold text-indigo-900 mb-4">如何使用本電子書</h2>
        <div className="space-y-3 text-gray-700">
          <div className="flex gap-3">
            <span className="font-bold text-indigo-600 flex-shrink-0">1.</span>
            <p><strong>按順序閱讀：</strong>九章形成完整的論證；建議按順序閱讀以獲得全面理解。</p>
          </div>
          <div className="flex gap-3">
            <span className="font-bold text-indigo-600 flex-shrink-0">2.</span>
            <p><strong>深入思考：</strong>每章都提供反思問題和實踐方針；花時間思考如何應用於自己的信仰。</p>
          </div>
          <div className="flex gap-3">
            <span className="font-bold text-indigo-600 flex-shrink-0">3.</span>
            <p><strong>小組討論：</strong>本書適合個人閱讀也適合小組研討；與他人分享你的洞見。</p>
          </div>
          <div className="flex gap-3">
            <span className="font-bold text-indigo-600 flex-shrink-0">4.</span>
            <p><strong>持續探索：</strong>本書是入門，而非終點；完成後，可根據興趣進行更深入的研究。</p>
          </div>
        </div>
      </motion.div>

      {/* About the Authors */}
      <motion.div
        className="bg-white border-2 border-gray-200 p-8 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">關於作者</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            <strong>史丹尼·格蘭茨</strong>（Stanley J. Grenz）是美國著名的系統神學家，曾在多所神學院任教。他著有多部神學著作，以清晰而易懂的風格聞名。
          </p>
          <p>
            <strong>羅傑·奧遜</strong>（Roger E. Olson）同樣是資深神學教授，對教會歷史和現代神學有深入研究。兩位作者共著此書，目的是使神學知識普及化，幫助普通信徒理解神學的重要性。
          </p>
        </div>
      </motion.div>
    </div>
  );
}
