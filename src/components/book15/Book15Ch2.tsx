import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Lightbulb, CheckCircle, AlertCircle, BarChart3, Layers, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Book15Ch2() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [expandedLevel, setExpandedLevel] = useState<string | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [showQuizFeedback, setShowQuizFeedback] = useState<Record<string, boolean>>({});

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const toggleLevel = (id: string) => {
    setExpandedLevel(expandedLevel === id ? null : id);
  };

  const handleQuizAnswer = (questionId: string, answer: string) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: answer }));
    setShowQuizFeedback(prev => ({ ...prev, [questionId]: true }));
  };

  const theologicalLevels = [
    {
      id: 'lay',
      title: '平信徒神學',
      subtitle: 'Lay Theology',
      description: '一般信徒在日常信仰生活中的思考與反省',
      characteristics: [
        '針對生活中的實際問題',
        '使用日常語言和親身經驗',
        '關注個人信仰的應用',
        '通常不涉及深度理論',
      ],
      example: '一位母親思考如何根據信仰教導孩子道德',
      importance: '這是信仰最活生生的表現，也是最廣泛的神學形式',
      strengths: ['實踐導向', '與生活貼近', '普遍可參與'],
      limitations: ['容易受個人偏見影響', '可能缺乏系統性', '範圍有限'],
    },
    {
      id: 'pastoral',
      title: '牧職神學',
      subtitle: 'Pastoral Theology',
      description: '牧師和教會領袖在牧養工作中進行的反思性思考',
      characteristics: [
        '應用於教會牧養實踐',
        '結合聖經知識和牧養經驗',
        '針對教會社群的需要',
        '更具結構性和有意識的思考',
      ],
      example: '牧師思考如何在當代處境中講解舊約',
      importance: '橋接學術神學與平信徒信仰的關鍵層次',
      strengths: ['兼具理論和實踐', '具教牧敏感度', '面向具體社群'],
      limitations: ['受時間和資源限制', '可能過度實用化', '專業性有限'],
    },
    {
      id: 'academic',
      title: '專業神學',
      subtitle: 'Professional Theology',
      description: '神學學者在學術機構中進行的系統性神學研究',
      characteristics: [
        '高度系統化和理論化',
        '使用學術方法和工具',
        '深入聖經和傳統研究',
        '與其他學科對話',
        '參與學術出版和討論',
      ],
      example: '神學教授撰寫關於三一論的專著',
      importance: '神學思想的最高形式，為教會提供深度思考',
      strengths: ['系統完整', '學術嚴謹', '具創新性'],
      limitations: ['可能脫離實踐', '語言較為專業', '不易被普遍理解'],
    },
    {
      id: 'prophetic',
      title: '先知性神學',
      subtitle: 'Prophetic Theology',
      description: '批判性地反思當代處境，呼籲教會和社會回歸信仰真理',
      characteristics: [
        '面向時代問題',
        '具有批判精神',
        '呼籲社會改變',
        '結合信仰與文化批評',
      ],
      example: '神學家批判種族主義，從信仰角度呼籲平等',
      importance: '確保神學與生活相關，推動教會先知性使命',
      strengths: ['具時代意義', '能推動改變', '富有感召力'],
      limitations: ['容易過度簡化', '可能缺乏平衡', '易引發爭議'],
    },
    {
      id: 'contextual',
      title: '境況神學',
      subtitle: 'Contextual Theology',
      description: '扎根於特定文化、社會或地理背景的神學思考',
      characteristics: [
        '重視特定背景',
        '回應特定社群的需要',
        '融合本土文化與信仰',
        '強調處境的重要性',
      ],
      example: '亞洲基督徒從本土文化角度詮釋耶穌的教導',
      importance: '使神學本土化，增進信仰的相關性和深度',
      strengths: ['文化適切', '具生命力', '易於理解'],
      limitations: ['容易過度本土化', '相對性較強', '可能忽視普遍真理'],
    },
  ];

  const qualityCriteria = [
    { criterion: '聖經根據', description: '是否建立在聖經真理之上' },
    { criterion: '傳統智慧', description: '是否借鑑教會傳統的洞見' },
    { criterion: '理性思考', description: '是否經過理性的檢驗和論證' },
    { criterion: '經驗驗證', description: '是否符合信仰實踐的經驗' },
    { criterion: '時代相關', description: '是否面向當代的真實需要' },
    { criterion: '信仰整全', description: '是否保持信仰的整體性和平衡' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <motion.div
        className="bg-gradient-to-br from-red-900 via-orange-800 to-amber-800 text-white rounded-xl p-10 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold mb-3">第2章：不是所有神學都一律平等</h1>
        <p className="text-xl text-orange-100">理解神學品質的區別與標準</p>
      </motion.div>

      {/* Opening Context */}
      <motion.div
        className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-lg mb-8 border-l-4 border-red-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="text-2xl font-bold text-red-900 mb-4">開場思考</h2>
        <p className="text-gray-800 mb-4">
          前一章我們確立了一個重要真理：每一個思考的基督徒都是神學家。但立即而來的問題是——這是否意味著所有神學都是相等的？一個初信者的神學思考與一位神學博士的思考有區別嗎？一個人受歡迎的宗教觀點是否就一定是好的神學？
        </p>
        <p className="text-gray-800">
          本章的答案很明確：<strong>不，不是所有神學都一律平等。</strong>不同的神學有質量上的差別，這取決於多個重要因素。認識這些因素，能幫助我們進行更優質的神學思考。
        </p>
      </motion.div>

      {/* Core Problem */}
      <motion.div
        className="bg-white border-2 border-red-300 p-6 rounded-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
      >
        <div className="flex gap-3 items-start mb-4">
          <Lightbulb className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-red-900 mb-2">核心洞見</h3>
            <p className="text-gray-800">
              神學確實有品質的差別。好的神學和較差的神學在系統性、聖經根據、邏輯一致性和實踐效果上都有明顯不同。承認這點並不否定平信徒的神學價值，而是呼籲所有進行神學思考的人追求卓越。
            </p>
          </div>
        </div>
      </motion.div>

      {/* Five Levels of Theology */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Layers className="w-8 h-8 text-orange-600" />
          五個神學層次
        </h2>
        <p className="text-gray-700 mb-6">
          神學並非一成不變。從最基礎的日常信仰思考，到最高深的學術研究，存在著五個明顯的層次。每個層次都有其價值，也有其局限。
        </p>

        <div className="space-y-4">
          {theologicalLevels.map((level) => (
            <motion.div
              key={level.id}
              className="border rounded-lg overflow-hidden bg-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <button
                onClick={() => toggleLevel(level.id)}
                className="w-full px-6 py-4 bg-gradient-to-r from-orange-100 to-amber-100 hover:from-orange-200 hover:to-amber-200 flex items-center justify-between transition"
              >
                <div className="text-left">
                  <h4 className="text-lg font-bold text-gray-800">{level.title}</h4>
                  <p className="text-sm text-gray-600 italic">{level.subtitle}</p>
                </div>
                {expandedLevel === level.id ? (
                  <ChevronUp className="w-5 h-5 text-orange-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-orange-600" />
                )}
              </button>

              <AnimatePresence>
                {expandedLevel === level.id && (
                  <motion.div
                    className="p-6 bg-white border-t border-orange-200"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-800 mb-3">{level.description}</p>
                      </div>

                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">特點：</h5>
                        <ul className="space-y-1">
                          {level.characteristics.map((char, idx) => (
                            <li key={idx} className="flex gap-2 text-gray-700">
                              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span>{char}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">具體例子：</h5>
                        <p className="text-gray-700 italic bg-amber-50 p-3 rounded">{level.example}</p>
                      </div>

                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">重要性：</h5>
                        <p className="text-gray-700">{level.importance}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-2">
                        <div className="bg-green-50 p-3 rounded">
                          <h5 className="font-bold text-green-900 text-sm mb-2">優點</h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            {level.strengths.map((s, i) => (
                              <li key={i}>• {s}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-orange-50 p-3 rounded">
                          <h5 className="font-bold text-orange-900 text-sm mb-2">局限</h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            {level.limitations.map((l, i) => (
                              <li key={i}>• {l}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quality Assessment */}
      <motion.div
        className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-orange-900 mb-6">衡量神學品質的標準</h2>
        <p className="text-gray-800 mb-6">
          既然神學有品質的差別，我們如何判斷一個神學思想是「好的」或「較差的」？以下六個標準能幫助我們進行評估：
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {qualityCriteria.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-4 rounded-lg border-l-4 border-orange-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 + idx * 0.05 }}
            >
              <h4 className="font-bold text-orange-900 mb-2">{item.criterion}</h4>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Extended Discussion */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">延伸探討</h2>

        <div className="space-y-4">
          {[
            {
              id: 'context',
              title: '為什麼神學層次很重要？',
              content: '每一個層次都有其獨特的貢獻。平信徒神學讓信仰與生活相連；牧職神學將信仰翻譯成社群語言；專業神學提供深度思考；先知性神學推動社會改變；境況神學確保信仰的相關性。我們不應貶低任何層次，但也應認識到它們的優點和局限。',
            },
            {
              id: 'tension',
              title: '層次之間的張力',
              content: '有時不同層次的神學會產生張力。例如，學術神學可能看起來脫離實踐，而平信徒神學可能缺乏深度。關鍵是理解這些張力的源頭，並在各層次之間尋求平衡。最健康的信仰社群是有人在各個層次進行卓越的神學思考。',
            },
            {
              id: 'growth',
              title: '神學發展的持續性',
              content: '一個人的神學不必永遠停留在一個層次。一位平信徒可以通過學習和反思逐漸進入更深層的神學思考。一位專業神學家也應保持與平信徒信仰的連接。神學層次不是等級制度，而是邀請我們不斷成長的指標。',
            },
            {
              id: 'quality',
              title: '質而非量',
              content: '令人遺憾的是，不好的神學時常比好的神學更引人注目。受歡迎不等於真實，聲音大不等於內容深。評估神學的品質不能基於傳播廣度或受歡迎程度，而應基於聖經根據、邏輯嚴謹和屬靈深度。',
            },
          ].map((section) => (
            <motion.div
              key={section.id}
              className="border rounded-lg overflow-hidden bg-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 bg-orange-100 hover:bg-orange-200 flex items-center justify-between transition"
              >
                <h3 className="font-bold text-gray-800">{section.title}</h3>
                {expandedSection === section.id ? (
                  <ChevronUp className="w-5 h-5 text-orange-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-orange-600" />
                )}
              </button>

              <AnimatePresence>
                {expandedSection === section.id && (
                  <motion.div
                    className="px-6 py-4 bg-white border-t border-orange-200"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <p className="text-gray-800 leading-relaxed">{section.content}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Interactive Quiz */}
      <motion.div
        className="bg-gradient-to-r from-orange-100 to-red-100 p-8 rounded-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-red-900 mb-6">自我檢視</h2>

        <div className="space-y-6">
          {[
            {
              id: 'q1',
              question: '你現在主要在進行哪一種層次的神學思考？',
              options: ['平信徒神學', '牧職神學', '專業神學', '先知性神學', '境況神學'],
              correct: 'none',
            },
            {
              id: 'q2',
              question: '在評估一個神學觀點時，最重要的因素應該是什麼？',
              options: [
                '它有多受歡迎',
                '它有聖經根據',
                '它出自名人之口',
                '它符合傳統',
              ],
              correct: 'options-1',
            },
            {
              id: 'q3',
              question: '不同神學層次之間的主要區別是什麼？',
              options: [
                '高層次的神學總是比低層次的更真實',
                '它們面對不同的問題，使用不同的方法，各有特點',
                '只有專業神學才是真正的神學',
                '層次之間沒有實質區別',
              ],
              correct: 'options-1',
            },
          ].map((quiz) => (
            <motion.div
              key={quiz.id}
              className="bg-white p-6 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h3 className="font-bold text-gray-800 mb-4">{quiz.question}</h3>
              <div className="space-y-2">
                {quiz.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuizAnswer(quiz.id, option)}
                    className={`w-full text-left p-3 rounded border-2 transition ${
                      quizAnswers[quiz.id] === option
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 hover:border-orange-300'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span
                        className={`w-4 h-4 rounded-full border-2 ${
                          quizAnswers[quiz.id] === option
                            ? 'border-orange-500 bg-orange-500'
                            : 'border-gray-300'
                        }`}
                      />
                      {option}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Reflection Questions */}
      <motion.div
        className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
      >
        <h2 className="text-2xl font-bold text-orange-900 mb-6">反思問題</h2>
        <div className="space-y-4 text-gray-800">
          <div className="flex gap-3">
            <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
            <p>我當前的神學思考主要受什麼影響？我如何能使它更聖經化、更理性、更實踐？</p>
          </div>
          <div className="flex gap-3">
            <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
            <p>在我的信仰群體中，哪一個神學層次被最強調？這帶來了什麼益處或偏差？</p>
          </div>
          <div className="flex gap-3">
            <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
            <p>我認識的人中，誰在進行高質量的神學思考？他們的特點是什麼？</p>
          </div>
          <div className="flex gap-3">
            <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
            <p>我如何能在自己的層次上進行更優質的神學思考？</p>
          </div>
        </div>
      </motion.div>

      {/* Practical Guidance */}
      <motion.div
        className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-2">
          <Zap className="w-6 h-6" />
          具體實踐方針
        </h2>

        <div className="space-y-4">
          {[
            {
              num: 1,
              title: '評估你的神學來源',
              desc: '列出在你的神學中最有影響力的五個來源：書籍、講道、個人經驗、傳統等。評估它們是否符合六個品質標準。',
            },
            {
              num: 2,
              title: '學習其他層次的方法',
              desc: '如果你主要在一個層次進行神學思考，嘗試學習其他層次的方法。例如，平信徒可以閱讀一些學術文章，學者可以與平信徒對話。',
            },
            {
              num: 3,
              title: '建立評估習慣',
              desc: '當你聽到一個神學觀點時，立即問自己：這有聖經根據嗎？這符合教會傳統嗎？這在邏輯上站得住腳嗎？',
            },
            {
              num: 4,
              title: '尋求多角度的反饋',
              desc: '把你的神學想法與信任的人分享——來自不同背景和層次的人。他們的回應能幫助你看到盲點。',
            },
            {
              num: 5,
              title: '持續學習',
              desc: '無論你在哪個層次，都要持續提升。讀書、參加研討會、參與討論，不斷豐富你的神學思考。',
            },
          ].map((item) => (
            <motion.div
              key={item.num}
              className="flex gap-4 p-4 bg-white rounded-lg border-l-4 border-orange-500"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.62 + item.num * 0.04 }}
            >
              <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                {item.num}
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Summary */}
      <motion.div
        className="bg-gradient-to-r from-orange-900 to-red-900 text-white p-8 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65 }}
      >
        <h2 className="text-2xl font-bold mb-4">本章要點整理</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <span>神學確實有品質的差別，不是所有神學都一律平等</span>
          </li>
          <li className="flex gap-3">
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <span>五個主要的神學層次：平信徒、牧職、專業、先知性、境況神學</span>
          </li>
          <li className="flex gap-3">
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <span>六個品質評估標準：聖經根據、傳統、理性、經驗、時代相關、整全性</span>
          </li>
          <li className="flex gap-3">
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <span>受歡迎程度和品質無必然聯繫；評估需要慎重思考</span>
          </li>
          <li className="flex gap-3">
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <span>每一層次都有價值，但可以追求在自己層次上進行卓越的神學思考</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
