import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, AlertCircle, CheckCircle, Lightbulb, Heart, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Book15Ch4() {
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

  const isQuizCorrect = (questionId: string, correctAnswer: string) => {
    return quizAnswers[questionId] === correctAnswer;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-8 mb-8">
        <h1 className="text-4xl font-bold text-red-900 mb-2">為神學辯護</h1>
        <p className="text-lg text-red-700">第四章 ── 神學的必要性與價值</p>
      </div>

      {/* Core Problem Section */}
      <motion.div
        className="mb-8 border-l-4 border-red-500 bg-red-50 p-6 rounded"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h2 className="text-2xl font-bold text-red-900 mb-4">為什麼神學引起爭議</h2>
        <p className="text-red-800 mb-4 leading-relaxed">
          許多基督徒警惕神學，害怕它會動搖信仰。然而，真實的危險不是沒有神學，而是<strong>拙劣的神學</strong>。拙劣神學的解救方案是優質神學，而非完全避開神學。
        </p>
        <div className="bg-white p-4 rounded border-l-4 border-red-400">
          <p className="text-red-900 font-semibold italic">
            「我們應該問的並不是『我們會不會成為神學家？』而是『我們會不會成為優質神學家？』」
          </p>
        </div>
      </motion.div>

      {/* Key Insight */}
      <motion.div
        className="mb-8 bg-gradient-to-r from-red-100 to-orange-100 p-6 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex gap-3 items-start">
          <Lightbulb className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold text-red-900 mb-2">關鍵認識</h3>
            <p className="text-red-800">
              沒有任何基督徒是不受神學影響的——每個信徒都是神學家。問題不在於我們是否要從事神學，而在於我們是否從事<strong>優質的神學</strong>。
            </p>
          </div>
        </div>
      </motion.div>

      {/* Four Main Objections Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-red-900 mb-6">反對神學的四大理由及其回應</h2>

        {/* Objection 1: Dampening Effect */}
        <motion.div
          className="mb-6 border rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <button
            onClick={() => toggleSection('objection1')}
            className="w-full px-6 py-4 bg-red-100 hover:bg-red-200 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-red-600" />
              <span className="font-bold text-red-900">異議一：神學令人掃興</span>
            </div>
            {expandedSections.has('objection1') ?
              <ChevronUp className="w-5 h-5 text-red-600" /> :
              <ChevronDown className="w-5 h-5 text-red-600" />
            }
          </button>

          <AnimatePresence>
            {expandedSections.has('objection1') && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="p-6 bg-white"
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-red-900 mb-2">批評的內容</h4>
                    <p className="text-gray-700">
                      「從未碰過神學家的基督徒有福了。」──這反映出認為神學會破壞簡單的信心和靈性的喜樂。
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-red-900 mb-2">根本誤解</h4>
                    <p className="text-gray-700">
                      這種看法將基督教感受與客觀真理對立，卻忽略了基督教宣稱自己是<strong>以歷史事實為基礎的真理</strong>。
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-400">
                    <h4 className="font-bold text-blue-900 mb-2">❯ 布仁爾的類比：食物檢驗</h4>
                    <p className="text-blue-800 mb-3">
                      市場上的食物需要實驗室檢驗確保食用安全，但這不意味著食物只是為了分析。同樣，神學檢驗信念的真確性，但不是為了取代信仰。
                    </p>
                    <p className="text-blue-800 italic">
                      神學家應該像食品檢測員一樣是鑑賞家而非單純批評家。
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-red-900 mb-2">✓ 我們的回應</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>信仰必須建立在真理之上，而非盲目的感覺之上</li>
                      <li>如同小孩子般的信心與批判審查在基督教中有不同角色</li>
                      <li>神學檢驗幫助我們辨別虛假的或誤導性的教導</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Objection 2: Division */}
        <motion.div
          className="mb-6 border rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <button
            onClick={() => toggleSection('objection2')}
            className="w-full px-6 py-4 bg-red-100 hover:bg-red-200 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <span className="font-bold text-red-900">異議二：神學導致教會分裂</span>
            </div>
            {expandedSections.has('objection2') ?
              <ChevronUp className="w-5 h-5 text-red-600" /> :
              <ChevronDown className="w-5 h-5 text-red-600" />
            }
          </button>

          <AnimatePresence>
            {expandedSections.has('objection2') && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="p-6 bg-white"
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-red-900 mb-2">批評的內容</h4>
                    <p className="text-gray-700">
                      「耶穌使人合一；神學引致分裂。」──教會歷史中確有因神學細節分裂的例子（如鈕釦vs鉤扣之爭）。
                    </p>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-400">
                    <p className="text-yellow-900 font-semibold">
                      ⚠️ 部份承認：確實有神學導致不必要分裂的歷史
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-red-900 mb-2">✓ 深層回應</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>耶穌本身也帶來分裂（太10:34）──真理必然引發抉擇</li>
                      <li>神學的目的是維護真理，而非追求人為和諧</li>
                      <li>神學也能帶來合一──許多宗派因深入神學對話而彼此發現共通點</li>
                      <li>馬丁路德的座右銘：「盡可能尋求和睦，但要付出任何代價維護真理。」</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded">
                    <h4 className="font-bold text-blue-900 mb-2">❯ 案例：三位一體教義</h4>
                    <p className="text-blue-800 mb-2">
                      亞他拿修拒絕更改一個希臘字母（homoousios vs homoiousios），儘管被皇帝放逐五次。
                    </p>
                    <p className="text-blue-800">
                      <strong>評價</strong>：後世基督徒讚同他，因為這一個字母關乎整個福音的本質──耶穌是真神還是次級的神。
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Objection 3: Hairsplitting */}
        <motion.div
          className="mb-6 border rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <button
            onClick={() => toggleSection('objection3')}
            className="w-full px-6 py-4 bg-red-100 hover:bg-red-200 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-red-600" />
              <span className="font-bold text-red-900">異議三：神學只是穿鑿附會</span>
            </div>
            {expandedSections.has('objection3') ?
              <ChevronUp className="w-5 h-5 text-red-600" /> :
              <ChevronDown className="w-5 h-5 text-red-600" />
            }
          </button>

          <AnimatePresence>
            {expandedSections.has('objection3') && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="p-6 bg-white"
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-red-900 mb-2">批評的內容</h4>
                    <p className="text-gray-700">
                      神學家沉溺於不可知的奧秘，與現實脫節。例如：「天堂用什麼家具？」「地獄溫度多高？」
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded border-l-4 border-green-400">
                    <h4 className="font-bold text-green-900 mb-2">◇ 部份承認與反思</h4>
                    <p className="text-green-800">
                      確實存在超出聖經啟示範圍的投機性神學。但<strong>優質神學</strong>遵守聖經邊界，在神的啟示內理性工作。
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-red-900 mb-2">關鍵區別</h4>
                    <div className="grid grid-cols-2 gap-4 mt-3">
                      <div className="bg-red-100 p-3 rounded">
                        <p className="font-bold text-red-900 mb-1">❌ 穿鑿附會</p>
                        <p className="text-red-800 text-sm">超越聖經啟示範圍猜測</p>
                      </div>
                      <div className="bg-green-100 p-3 rounded">
                        <p className="font-bold text-green-900 mb-1">✓ 優質神學</p>
                        <p className="text-green-800 text-sm">在聖經邊界內理性思考</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-red-900 mb-2">✓ 我們的立場</h4>
                    <p className="text-gray-700">
                      上帝在歷史、大自然、聖經中留下見證。敬虔的理性可以利用這些資源發現關於上帝的真確知識，儘管不一定全面。
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Objection 4: No Progress */}
        <motion.div
          className="mb-6 border rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <button
            onClick={() => toggleSection('objection4')}
            className="w-full px-6 py-4 bg-red-100 hover:bg-red-200 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-red-600" />
              <span className="font-bold text-red-900">異議四：神學未能引致進展</span>
            </div>
            {expandedSections.has('objection4') ?
              <ChevronUp className="w-5 h-5 text-red-600" /> :
              <ChevronDown className="w-5 h-5 text-red-600" />
            }
          </button>

          <AnimatePresence>
            {expandedSections.has('objection4') && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="p-6 bg-white"
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-red-900 mb-2">批評的內容</h4>
                    <p className="text-gray-700">
                      初期教會有神學進展，但後來神學變得愈來愈批判而缺乏建設性解答。許多古老問題仍未解決。
                    </p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-400">
                    <h4 className="font-bold text-purple-900 mb-2">❯ 案例：神的受苦觀點的轉變</h4>
                    <div className="space-y-2 text-purple-800 mt-2">
                      <p>
                        <strong>傳統觀點（多個世紀）：</strong>神不能受苦，因為受苦是受造物特性。
                      </p>
                      <p>
                        <strong>現代轉變（20世紀中期）：</strong>廣島原子彈爆炸後，神學家們重新審視，發現耶穌的上帝是與苦難中的人類一同受苦的上帝。
                      </p>
                      <p>
                        <strong>發展者：</strong>日本學者北森嘉藏、德國神學家莫特曼等人推廣。
                      </p>
                      <p className="italic mt-2">
                        這說明：數十年間，一個曾被視為褻瀆的觀點，現已被大多數基督徒接受為福音真理。
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-red-900 mb-2">✓ 我們的回應</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li><strong>進展的標準問題：</strong>不能要求十億基督徒的「一致同意」──這在歷史上是不可能的</li>
                      <li><strong>關注未解決的問題：</strong>人傾向於看未解決的（如自由意志 vs 神的主權），而忽略已解決的</li>
                      <li><strong>緩慢但真實的進展：</strong>初期教會和宗教改革時期都有重大進展，現代也有</li>
                      <li><strong>認識的限制：</strong>我們只能「彷彿對著鏡子觀看，模糊不清」，直到見主面</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Professional Theology's Purpose Section */}
      <motion.div
        className="mb-8 bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold text-red-900 mb-4">專業神學的使命</h2>
        <div className="space-y-3 text-red-800">
          <p>
            <strong>反省與驗證：</strong>批判地檢驗已被接受的信念的真確性。
          </p>
          <p>
            <strong>重新表達：</strong>用現代文化能理解的方式表達基督教信念，保持其一致性和系統性。
          </p>
          <p>
            <strong>服務信仰群體：</strong>提供研經工具、歷史觀點和系統陳述，幫助平信徒和教牧深化信仰。
          </p>
        </div>
      </motion.div>

      {/* Reflection & Practice Section */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-amber-900 mb-6">反思與具體實踐</h2>

        <div className="mb-6">
          <h3 className="text-lg font-bold text-amber-900 mb-4">❓ 反思問題</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded border-l-4 border-amber-400">
              <p className="text-amber-900 mb-3">
                <strong>1. 你曾經因為「掃興」的神學論述而懷疑信仰嗎？</strong>
              </p>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="q1"
                    value="yes"
                    checked={quizAnswers['q1'] === 'yes'}
                    onChange={(e) => handleQuizAnswer('q1', e.target.value)}
                    className="w-4 h-4"
                  />
                  <span className="text-gray-700">是的，但現在我明白神學檢驗幫助我認識真理</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="q1"
                    value="no"
                    checked={quizAnswers['q1'] === 'no'}
                    onChange={(e) => handleQuizAnswer('q1', e.target.value)}
                    className="w-4 h-4"
                  />
                  <span className="text-gray-700">沒有，我信任神學的探討</span>
                </label>
              </div>
            </div>

            <div className="bg-white p-4 rounded border-l-4 border-amber-400">
              <p className="text-amber-900 mb-3">
                <strong>2. 你認為維護真理還是保持和諧更重要？</strong>
              </p>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="q2"
                    value="truth"
                    checked={quizAnswers['q2'] === 'truth'}
                    onChange={(e) => handleQuizAnswer('q2', e.target.value)}
                    className="w-4 h-4"
                  />
                  <span className="text-gray-700">維護真理（馬丁路德的立場）</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="q2"
                    value="both"
                    checked={quizAnswers['q2'] === 'both'}
                    onChange={(e) => handleQuizAnswer('q2', e.target.value)}
                    className="w-4 h-4"
                  />
                  <span className="text-gray-700">兩者都重要，在可能時並行</span>
                </label>
              </div>
              {quizAnswers['q2'] === 'truth' && (
                <p className="mt-3 p-2 bg-green-100 text-green-800 rounded text-sm">
                  ✓ 優質神學的立場：真理必須是首位的。
                </p>
              )}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-amber-900 mb-4">✓ 具體實踐方針</h3>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">1.</span>
              <div>
                <p className="font-bold text-amber-900">批判地思考信念</p>
                <p className="text-gray-700 text-sm">不要盲目接受任何聽起來屬靈的教導；如庇哩亞人一樣查考聖經。</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <div>
                <p className="font-bold text-amber-900">區分拙劣神學與優質神學</p>
                <p className="text-gray-700 text-sm">優質神學在聖經邊界內理性工作；拙劣神學超越啟示猜測或破壞信仰。</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <div>
                <p className="font-bold text-amber-900">欣賞神學的保護作用</p>
                <p className="text-gray-700 text-sm">如同食品檢驗保護我們的健康，神學檢驗幫助我們保護屬靈健康。</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <div>
                <p className="font-bold text-amber-900">忍耐神學的漸進進展</p>
                <p className="text-gray-700 text-sm">理解神學進展是「蝸牛式的步伐」，但每一步都是真實而寶貴的。</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Summary */}
      <motion.div
        className="mt-8 bg-gradient-to-r from-red-900 to-orange-900 text-white p-8 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">本章小結</h2>
        <div className="space-y-3">
          <p>
            ✓ <strong>神學的必要性：</strong>沒有基督徒能逃避神學；關鍵是從事優質神學。
          </p>
          <p>
            ✓ <strong>四大異議的回應：</strong>掃興、分裂、穿鑿、無進展等批評，都忽略了優質神學對信仰的保護與深化作用。
          </p>
          <p>
            ✓ <strong>神學的核心任務：</strong>批判地驗證信念，用現代語言重新表達，並服侍整個信仰群體。
          </p>
          <p>
            ✓ <strong>實踐要點：</strong>成為批判性思考者，欣賞神學的保護功能，忍耐其漸進進展。
          </p>
        </div>
      </motion.div>
    </div>
  );
}
