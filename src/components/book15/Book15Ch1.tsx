import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Users, Lightbulb, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Book15Ch1() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});

  const toggleSection = (id: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedSections(newExpanded);
  };

  const handleQuizAnswer = (questionId: string, answer: string) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8 mb-8">
        <h1 className="text-4xl font-bold text-amber-900 mb-2">人人都是神學家</h1>
        <p className="text-lg text-amber-700">第一章 ── 揭示每個信徒的神學身份</p>
      </div>

      {/* Opening Story */}
      <motion.div
        className="mb-8 border-l-4 border-amber-500 bg-amber-50 p-6 rounded"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h2 className="text-2xl font-bold text-amber-900 mb-4">一個聖經教師的言論</h2>
        <blockquote className="text-amber-800 italic mb-4 text-lg">
          「從未碰過神學家的基督徒有福了。」
        </blockquote>
        <p className="text-amber-800">
          這位有影響力的聖經教師的話代表著許多信徒的想法：神學是危險的、複雜的、只有專家才能從事的領域。但這個觀點其實是一個**大誤解**。
        </p>
      </motion.div>

      {/* Core Truth */}
      <motion.div
        className="mb-8 bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex gap-3 items-start">
          <Lightbulb className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold text-amber-900 mb-2">本章核心真理</h3>
            <p className="text-amber-800 text-lg">
              <strong>每一個肯思考的基督徒都是神學家。</strong>無論自覺與否，你已經在進行神學思考。
            </p>
          </div>
        </div>
      </motion.div>

      {/* Three Common Misconceptions */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-amber-900 mb-6">三大常見誤解</h2>

        {/* Misconception 1 */}
        <motion.div
          className="mb-6 border rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <button
            onClick={() => toggleSection('misconception1')}
            className="w-full px-6 py-4 bg-amber-100 hover:bg-amber-200 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-amber-600" />
              <span className="font-bold text-amber-900">誤解一：神學是神秘且遙遠的</span>
            </div>
            {expandedSections.has('misconception1') ?
              <ChevronUp className="w-5 h-5 text-amber-600" /> :
              <ChevronDown className="w-5 h-5 text-amber-600" />
            }
          </button>

          <AnimatePresence>
            {expandedSections.has('misconception1') && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="p-6 bg-white space-y-4"
              >
                <div>
                  <h4 className="font-bold text-amber-900 mb-2">這個誤解從何而來？</h4>
                  <p className="text-gray-700">
                    許多人認為神學是只有專家在象牙塔中進行的抽象思辨，與普通信徒的信仰生活無關。
                  </p>
                </div>

                <div className="bg-amber-50 p-4 rounded border-l-4 border-amber-500">
                  <h4 className="font-bold text-amber-900 mb-2">▸ 一個真實案例</h4>
                  <p className="text-gray-700">
                    一位年輕女士在辦公室裡興奮地談論她對上帝、救恩、基督徒生活的想法。但當被建議成為「神學家」時，她恐懼地說：「神學家？那太嚇人了！」她不知道自己已經在做神學思考。
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-amber-900 mb-2">✓ 真相</h4>
                  <p className="text-gray-700">
                    神學就是<strong>思考關於上帝的事情</strong>。每當你問「為什麼上帝容許苦難？」「救恩是什麼意思？」「聖靈如何工作？」你就在做神學。
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Misconception 2 */}
        <motion.div
          className="mb-6 border rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <button
            onClick={() => toggleSection('misconception2')}
            className="w-full px-6 py-4 bg-orange-100 hover:bg-orange-200 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-orange-600" />
              <span className="font-bold text-orange-900">誤解二：神學與禱告相對立</span>
            </div>
            {expandedSections.has('misconception2') ?
              <ChevronUp className="w-5 h-5 text-orange-600" /> :
              <ChevronDown className="w-5 h-5 text-orange-600" />
            }
          </button>

          <AnimatePresence>
            {expandedSections.has('misconception2') && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="p-6 bg-white space-y-4"
              >
                <div>
                  <h4 className="font-bold text-orange-900 mb-2">這個誤解從何而來？</h4>
                  <p className="text-gray-700">
                    有人認為神學是「理智的旅程」，會取代真實的信心和禱告。他們害怕思考會削弱靈性。
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-900 mb-2">▸ 一個真實的投訴</h4>
                  <p className="text-gray-700">
                    有人寫信抗議說：「禱告與神學是對立的。神學只是拙劣的代用品，使人誤以為可以用思想代替與上帝的關係。」
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-orange-900 mb-2">✓ 真相</h4>
                  <p className="text-gray-700">
                    禱告和神學不是敵人，而是<strong>相輔相成</strong>的。我們越了解上帝，禱告就越豐富；越深入思考信仰，靈命就越成長。
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Misconception 3 */}
        <motion.div
          className="mb-6 border rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <button
            onClick={() => toggleSection('misconception3')}
            className="w-full px-6 py-4 bg-yellow-100 hover:bg-yellow-200 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-yellow-600" />
              <span className="font-bold text-yellow-900">誤解三：只有專業神學家的想法才算數</span>
            </div>
            {expandedSections.has('misconception3') ?
              <ChevronUp className="w-5 h-5 text-yellow-600" /> :
              <ChevronDown className="w-5 h-5 text-yellow-600" />
            }
          </button>

          <AnimatePresence>
            {expandedSections.has('misconception3') && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="p-6 bg-white space-y-4"
              >
                <div>
                  <h4 className="font-bold text-yellow-900 mb-2">這個誤解從何而來？</h4>
                  <p className="text-gray-700">
                    在當代信仰中，許多人將「一般信徒」和「神學家」看作兩個完全不同的族群，認為只有後者的想法值得聆聽。
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
                  <h4 className="font-bold text-yellow-900 mb-2">▸ 信徒和神學家的互相需要</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
                    <li>專業神學家需要平信徒的實踐經驗和屬靈直覺</li>
                    <li>平信徒需要神學家提供的研經工具、歷史視角和系統陳述</li>
                    <li>兩者應該是<strong>夥伴關係</strong>，而不是等級制度</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-yellow-900 mb-2">✓ 真相</h4>
                  <p className="text-gray-700">
                    本書的核心主張：<strong>平信徒神學家和專業神學家之間只是程度的差異，不是本質的差異。</strong>
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Three Levels of Theology */}
      <motion.div
        className="mb-8 bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-blue-900 mb-6">神學的三個層次</h2>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded border-l-4 border-blue-500">
            <h3 className="text-lg font-bold text-blue-900 mb-2">1️⃣ 平信徒神學</h3>
            <p className="text-gray-700">
              <strong>定義：</strong>普通信徒在日常生活中進行的信仰思考。
            </p>
            <p className="text-gray-700 mt-2">
              <strong>例子：</strong>一位母親思考如何用信仰教導孩子；一位上班族思考工作中的倫理問題。
            </p>
          </div>

          <div className="bg-white p-4 rounded border-l-4 border-blue-500">
            <h3 className="text-lg font-bold text-blue-900 mb-2">2️⃣ 牧師/教牧神學</h3>
            <p className="text-gray-700">
              <strong>定義：</strong>牧師和教會領袖為回應教會和社群的需要而進行的神學思考。
            </p>
            <p className="text-gray-700 mt-2">
              <strong>例子：</strong>牧師為講道進行經文研究；教會領袖思考如何牧養信徒。
            </p>
          </div>

          <div className="bg-white p-4 rounded border-l-4 border-blue-500">
            <h3 className="text-lg font-bold text-blue-900 mb-2">3️⃣ 專業神學</h3>
            <p className="text-gray-700">
              <strong>定義：</strong>神學家進行的正規、系統、學術性的神學研究。
            </p>
            <p className="text-gray-700 mt-2">
              <strong>例子：</strong>神學教授撰寫關於基督論的著作；學者進行聖經語言研究。
            </p>
          </div>
        </div>

        <div className="mt-6 bg-blue-100 p-4 rounded border border-blue-300">
          <p className="text-blue-900 font-semibold">
            ✓ 關鍵認識：三個層次彼此關聯。平信徒神學提供活生生的信仰經驗；牧師神學橋接理論與實踐；專業神學提供深度的批判思考。三者都很重要！
          </p>
        </div>
      </motion.div>

      {/* Key Insight */}
      <motion.div
        className="mb-8 bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-lg border-2 border-purple-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold text-purple-900 mb-4">本章關鍵洞見</h2>
        <div className="space-y-3 text-purple-800">
          <p>
            <strong>洞見1：</strong>沒有任何基督徒是完全不受神學影響的。即使你宣稱「我不做神學」，你也在做神學——只是可能是<strong>無反思的</strong>神學。
          </p>
          <p>
            <strong>洞見2：</strong>真正的問題不是「我們應不應該做神學？」而是「<strong>我們應該做什麼樣的神學</strong>？」——是深思熟慮的還是膚淺的？是合乎聖經的還是偏離真理的？
          </p>
          <p>
            <strong>洞見3：</strong>神學的目的不是製造更多聰明的信徒，而是幫助信徒<strong>更深入地認識上帝</strong>，並因此活得更像基督徒。
          </p>
        </div>
      </motion.div>

      {/* Reflection & Practice */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-amber-900 mb-6">反思與具體實踐</h2>

        <div className="mb-6">
          <h3 className="text-lg font-bold text-amber-900 mb-4">❓ 反思問題</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded border-l-4 border-amber-400">
              <p className="text-amber-900 mb-3">
                <strong>1. 你最常問自己的「神學問題」是什麼？</strong>
              </p>
              <p className="text-gray-600 text-sm">
                例如：「為什麼上帝容許不公義？」「聖靈如何幫助我？」「信仰與工作如何結合？」
              </p>
            </div>

            <div className="bg-white p-4 rounded border-l-4 border-amber-400">
              <p className="text-amber-900 mb-3">
                <strong>2. 你對神學家有什麼預設？是正面還是負面？為什麼？</strong>
              </p>
              <p className="text-gray-600 text-sm">
                思考你的看法是否受到個人經驗或刻板印象的影響。
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-amber-900 mb-4">✓ 具體實踐方針</h3>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">1.</span>
              <div>
                <p className="font-bold text-amber-900">承認你已經是神學家</p>
                <p className="text-gray-700 text-sm">寫下你曾經問過或思考過的三個與信仰有關的問題。認識到你已經在思考信仰。</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <div>
                <p className="font-bold text-amber-900">更有意識地進行神學思考</p>
                <p className="text-gray-700 text-sm">不要只是表面地接受信念；問「為什麼？」「這如何與聖經相符？」「這在我的生活中意味著什麼？」</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <div>
                <p className="font-bold text-amber-900">與他人分享你的神學思考</p>
                <p className="text-gray-700 text-sm">在小組、家庭或朋友中討論信仰問題。聆聽他人的看法。認識到其他人也在進行神學思考。</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Summary */}
      <motion.div
        className="mt-8 bg-gradient-to-r from-amber-900 to-orange-900 text-white p-8 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">本章小結</h2>
        <div className="space-y-3">
          <p>
            ✓ <strong>你已經是神學家</strong>——因為你思考關於上帝和信仰的事情。
          </p>
          <p>
            ✓ <strong>三個常見誤解</strong>被駁斥——神學並不遙遠、神學與禱告不相對立、平信徒的思考也很重要。
          </p>
          <p>
            ✓ <strong>神學有三個層次</strong>——平信徒、牧師、專業神學家，各有其角色和價值。
          </p>
          <p>
            ✓ <strong>真正的問題不是「要不要做神學」</strong>，而是「要做什麼樣的、更深入的、更符合聖經的神學」。
          </p>
        </div>
      </motion.div>
    </div>
  );
}
