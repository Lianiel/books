import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Zap, Brain, Users, Globe, BookOpen, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Book15Ch5() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [activeTask, setActiveTask] = useState<'critical' | 'constructive'>('critical');

  const toggleSection = (id: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedSections(newExpanded);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-8 mb-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-2">神學的任務和傳統</h1>
        <p className="text-lg text-blue-700">第五章 ── 神學如何思考與表達信念</p>
      </div>

      {/* Opening Dilemma */}
      <motion.div
        className="mb-8 bg-gradient-to-r from-blue-100 to-cyan-100 p-6 rounded-lg"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h2 className="text-2xl font-bold text-blue-900 mb-4">教師的困境</h2>
        <div className="space-y-3 text-blue-800">
          <p>
            <strong>學生A：</strong>「為什麼你不直接告訴我們真理？我們要確定的答案。」
          </p>
          <p>
            <strong>學生B：</strong>「你給我們太多限制了！讓我們自己決定信念吧。神學不過是不同看法的組合。」
          </p>
        </div>
        <p className="mt-4 italic text-blue-900">
          這個困境反映了神學傳統的兩個同樣重要的任務：<strong>批判性反省</strong>和<strong>建設性陳述</strong>。
        </p>
      </motion.div>

      {/* Two Main Tasks Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">神學的兩項主要任務</h2>

        <div className="mb-6 bg-white border rounded-lg shadow">
          <div className="flex">
            <button
              onClick={() => setActiveTask('critical')}
              className={`flex-1 px-6 py-4 font-bold text-lg transition ${
                activeTask === 'critical'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Brain className="w-5 h-5" />
                批判的任務
              </div>
            </button>
            <button
              onClick={() => setActiveTask('constructive')}
              className={`flex-1 px-6 py-4 font-bold text-lg transition ${
                activeTask === 'constructive'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <TrendingUp className="w-5 h-5" />
                建設的任務
              </div>
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeTask === 'critical' && (
              <motion.div
                key="critical"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50"
              >
                <h3 className="text-2xl font-bold text-blue-900 mb-4">批判的任務：檢驗信念的真確性</h3>

                <div className="space-y-4 mb-6">
                  <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                    <h4 className="font-bold text-blue-900 mb-2">◇ 任務的本質</h4>
                    <p className="text-gray-700">
                      神學家必須批判地反省既有信念，檢驗其是否：
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                      <li>與聖經教導一致</li>
                      <li>相互協調（無內部矛盾）</li>
                      <li>符合基督徒的實際經驗</li>
                      <li>對當代問題有回應能力</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                    <h4 className="font-bold text-blue-900 mb-2">△ 重點認識</h4>
                    <p className="text-gray-700">
                      批判的任務會導致<strong>否定</strong>：有些信念必須被拒絕，因為它們：
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                      <li>與聖經相違（如有些民間信仰）</li>
                      <li>在邏輯上自相矛盾</li>
                      <li>源於誤解或虛構</li>
                    </ul>
                  </div>

                  <div className="bg-blue-100 p-4 rounded border-l-4 border-blue-700">
                    <h4 className="font-bold text-blue-900 mb-2">◆ 案例：民俗信仰的檢驗</h4>
                    <p className="text-blue-800">
                      一位信徒因喪偶而相信輪迴（妻子會以新的身體重生）。神學必須批判檢驗：聖經否定輪迴，且與基督教的復活教義相違。神學家有責任指出此信念的錯誤，儘管它能提供某種安慰。
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
                  <p className="text-yellow-900 font-semibold">
                    ⚠️ 注意：批判不等於破壞。批判為的是除去虛假，保護屬靈健康。
                  </p>
                </div>
              </motion.div>
            )}

            {activeTask === 'constructive' && (
              <motion.div
                key="constructive"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-8 bg-gradient-to-br from-green-50 to-emerald-50"
              >
                <h3 className="text-2xl font-bold text-green-900 mb-4">建設的任務：重新表達信念</h3>

                <div className="space-y-4 mb-6">
                  <div className="bg-white p-4 rounded border-l-4 border-green-500">
                    <h4 className="font-bold text-green-900 mb-2">◇ 任務的本質</h4>
                    <p className="text-gray-700">
                      在批判反省之後，神學家必須：
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                      <li>用現代語言重新表達基督教信念</li>
                      <li>將各信念系統地整合成協調的整體</li>
                      <li>對當代文化和問題作出應答</li>
                      <li>幫助信徒在新處境下應用信仰</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded border-l-4 border-green-500">
                    <h4 className="font-bold text-green-900 mb-2">△ 為什麼需要重新表達</h4>
                    <p className="text-gray-700 mb-3">
                      信仰不是靜態的古董，而是活生生的真理。每一代都需要：
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                      <div className="bg-green-50 p-2 rounded">新語言來表達</div>
                      <div className="bg-green-50 p-2 rounded">新視角來理解</div>
                      <div className="bg-green-50 p-2 rounded">新應用來回應</div>
                      <div className="bg-green-50 p-2 rounded">新綜合來整合</div>
                    </div>
                  </div>

                  <div className="bg-green-100 p-4 rounded border-l-4 border-green-700">
                    <h4 className="font-bold text-green-900 mb-2">◆ 案例：三位一體教義</h4>
                    <p className="text-green-800 mb-2">
                      初期教會信徒相信父、子、聖靈（原始信念）。
                    </p>
                    <p className="text-green-800 mb-2">
                      神學家用希臘哲學概念（如homoousios = 同一本體）表達，使當代人理解。
                    </p>
                    <p className="text-green-800">
                      現代神學用「關係」、「臨在」等當代語言重新表達，使現代人更容易理解。
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <p className="text-blue-900 font-semibold">
                    ✓ 注意：建設性不等於創新。建設是用新語言表達舊真理，而非發明新信念。
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Relationship between tasks */}
        <motion.div
          className="mb-8 bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-bold text-purple-900 mb-4">兩項任務的相互關係</h3>
          <div className="space-y-2 text-purple-800">
            <p>✓ <strong>不能分離：</strong>批判必然導向建設；建設必須基於批判。</p>
            <p>✓ <strong>互為補充：</strong>純粹批判導致懷疑主義；純粹建設導致任意主觀。</p>
            <p>✓ <strong>都是必要的：</strong>忽視任何一項都會造成神學殘缺。</p>
          </div>
        </motion.div>
      </div>

      {/* Three Major Traditions */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">三大神學傳統</h2>
        <p className="text-gray-700 mb-6">
          不同的教會和神學家在執行上述任務時有不同的強調和方式，形成了三大傳統：
        </p>

        {/* Catholic Tradition */}
        <motion.div
          className="mb-6 border rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <button
            onClick={() => toggleSection('tradition1')}
            className="w-full px-6 py-4 bg-red-100 hover:bg-red-200 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-red-600" />
              <span className="font-bold text-red-900">传统一：天主教传统</span>
            </div>
            {expandedSections.has('tradition1') ?
              <ChevronUp className="w-5 h-5 text-red-600" /> :
              <ChevronDown className="w-5 h-5 text-red-600" />
            }
          </button>

          <AnimatePresence>
            {expandedSections.has('tradition1') && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="p-6 bg-white space-y-4"
              >
                <div>
                  <h4 className="font-bold text-red-900 mb-2">◇ 特點</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>強調傳統的權威性與延續性</li>
                    <li>聖經 + 聖傳 + 聖統（教會教導權）三位一體</li>
                    <li>有明確的教導權（magisterium）作為最高仲裁者</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-red-900 mb-2">△ 優點</h4>
                  <p className="text-gray-700">提供穩定、一致的教導；避免過度個人主義和多元化。</p>
                </div>
                <div>
                  <h4 className="font-bold text-red-900 mb-2">⚠️ 風險</h4>
                  <p className="text-gray-700">過度強調傳統可能導致僵化；教導權可能阻止必要的批判反省。</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Orthodox Tradition */}
        <motion.div
          className="mb-6 border rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <button
            onClick={() => toggleSection('tradition2')}
            className="w-full px-6 py-4 bg-yellow-100 hover:bg-yellow-200 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-yellow-600" />
              <span className="font-bold text-yellow-900">传统二：東正教传统</span>
            </div>
            {expandedSections.has('tradition2') ?
              <ChevronUp className="w-5 h-5 text-yellow-600" /> :
              <ChevronDown className="w-5 h-5 text-yellow-600" />
            }
          </button>

          <AnimatePresence>
            {expandedSections.has('tradition2') && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="p-6 bg-white space-y-4"
              >
                <div>
                  <h4 className="font-bold text-yellow-900 mb-2">◇ 特點</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>重視全體信徒（不只神職人員）的共識</li>
                    <li>神學更多是敬虔的沉思而非嚴格的系統</li>
                    <li>神秘經驗與理性思考並重</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-900 mb-2">△ 優點</h4>
                  <p className="text-gray-700">重視信仰的靈性層面和信徒的靈命；避免過度理性化。</p>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-900 mb-2">⚠️ 風險</h4>
                  <p className="text-gray-700">過度神秘化可能削弱批判能力；神秘經驗難以驗證和傳達。</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Protestant Tradition */}
        <motion.div
          className="mb-6 border rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <button
            onClick={() => toggleSection('tradition3')}
            className="w-full px-6 py-4 bg-blue-100 hover:bg-blue-200 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="font-bold text-blue-900">传统三：更正教传统</span>
            </div>
            {expandedSections.has('tradition3') ?
              <ChevronUp className="w-5 h-5 text-blue-600" /> :
              <ChevronDown className="w-5 h-5 text-blue-600" />
            }
          </button>

          <AnimatePresence>
            {expandedSections.has('tradition3') && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="p-6 bg-white space-y-4"
              >
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">◇ 特點</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>以聖經為最高權威（唯獨聖經 - sola scriptura）</li>
                    <li>強調理性的批判反省</li>
                    <li>重視神學的系統性和可理解性</li>
                    <li>多元但聖經為界限</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">△ 優點</h4>
                  <p className="text-gray-700">強調聖經權威；鼓勵理性探討；能更靈活地應適當代。</p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">⚠️ 風險</h4>
                  <p className="text-gray-700">可能導致過度多元化；個人解經容易導致分裂。</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Three Camps Summary */}
      <motion.div
        className="mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-xl font-bold text-indigo-900 mb-4">三大傳統的對比</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-indigo-300">
                <th className="text-left py-2 px-3 text-indigo-900">面向</th>
                <th className="text-left py-2 px-3 text-indigo-900">天主教</th>
                <th className="text-left py-2 px-3 text-indigo-900">東正教</th>
                <th className="text-left py-2 px-3 text-indigo-900">更正教</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-indigo-200">
                <td className="py-2 px-3 font-bold text-gray-700">聖經地位</td>
                <td className="py-2 px-3 text-gray-600">聖經+聖傳</td>
                <td className="py-2 px-3 text-gray-600">聖經+傳統</td>
                <td className="py-2 px-3 text-gray-600">聖經至上</td>
              </tr>
              <tr className="border-b border-indigo-200">
                <td className="py-2 px-3 font-bold text-gray-700">權威來源</td>
                <td className="py-2 px-3 text-gray-600">教導權</td>
                <td className="py-2 px-3 text-gray-600">信仰群體</td>
                <td className="py-2 px-3 text-gray-600">聖經+理性</td>
              </tr>
              <tr className="border-b border-indigo-200">
                <td className="py-2 px-3 font-bold text-gray-700">強調</td>
                <td className="py-2 px-3 text-gray-600">穩定性</td>
                <td className="py-2 px-3 text-gray-600">靈性體驗</td>
                <td className="py-2 px-3 text-gray-600">聖經中心</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-bold text-gray-700">特質</td>
                <td className="py-2 px-3 text-gray-600">統一的聲音</td>
                <td className="py-2 px-3 text-gray-600">神秘的深度</td>
                <td className="py-2 px-3 text-gray-600">開放的探討</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Reflection & Practice */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-amber-900 mb-6">反思與具體實踐</h2>

        <div className="mb-6">
          <h3 className="text-lg font-bold text-amber-900 mb-4">❓ 反思問題</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded border-l-4 border-amber-400">
              <p className="text-amber-900 mb-2">
                <strong>你傾向於哪種傳統的進路？為什麼？</strong>
              </p>
              <p className="text-gray-700 text-sm">
                思考你更看重傳統的穩定性、靈性的深度、還是聖經中心的開放探討。
              </p>
            </div>

            <div className="bg-white p-4 rounded border-l-4 border-amber-400">
              <p className="text-amber-900 mb-2">
                <strong>你所屬教會在神學上強調批判還是建設？</strong>
              </p>
              <p className="text-gray-700 text-sm">
                觀察你的牧師或領袖是更多地否定某些信念，還是積極陳述信仰。
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
                <p className="font-bold text-amber-900">批判地回應信仰問題</p>
                <p className="text-gray-700 text-sm">不要盲目接受某個傳統的答案；檢驗其是否符合聖經。</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <div>
                <p className="font-bold text-amber-900">用當代語言表達信仰</p>
                <p className="text-gray-700 text-sm">在與他人談論信仰時，用他們能理解的語言，而非古老的神學術語。</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <div>
                <p className="font-bold text-amber-900">欣賞不同傳統</p>
                <p className="text-gray-700 text-sm">認識三大傳統各有優點；不必非此即彼，可以從各傳統學習。</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <div>
                <p className="font-bold text-amber-900">整合信念體系</p>
                <p className="text-gray-700 text-sm">思考你的信念如何相互關聯；尋求整體的、協調的信仰體系。</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Summary */}
      <motion.div
        className="bg-gradient-to-r from-blue-900 to-cyan-900 text-white p-8 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold mb-4">本章小結</h2>
        <div className="space-y-3">
          <p>
            ✓ <strong>神學的雙重任務：</strong>批判反省既有信念；建設性地重新表達信仰。
          </p>
          <p>
            ✓ <strong>兩項任務相關：</strong>缺一不可；既要破除虛假，也要建立真理。
          </p>
          <p>
            ✓ <strong>三大傳統：</strong>天主教強調傳統權威；東正教重視靈性共識；更正教以聖經為中心。
          </p>
          <p>
            ✓ <strong>實踐要點：</strong>批判地思考，用當代語言表達，整合信念體系，欣賞不同傳統。
          </p>
        </div>
      </motion.div>
    </div>
  );
}
