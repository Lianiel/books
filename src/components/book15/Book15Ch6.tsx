import React from 'react';
import { Hammer, Book, Lightbulb, Users, Globe, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Book15Ch6() {

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8 mb-8">
        <h1 className="text-4xl font-bold text-green-900 mb-2">神學家的工具</h1>
        <p className="text-lg text-green-700">第六章 ── 進行神學思考的方法與資源</p>
      </div>

      {/* Opening */}
      <motion.div
        className="mb-8 bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-lg"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h2 className="text-2xl font-bold text-green-900 mb-4">為什麼神學家需要工具？</h2>
        <p className="text-green-800">
          好的木工需要合適的工具；好的神學家同樣需要工具。這些工具幫助神學家批判地思考、準確地表達、深入地理解信仰的真理。
        </p>
      </motion.div>

      {/* Four Major Tools Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-green-900 mb-6">神學家的四大主要工具</h2>

        {/* Tool 1: Scripture */}
        <motion.div
          className="mb-6 border rounded-lg overflow-hidden bg-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="px-6 py-4 bg-green-100">
            <div className="flex items-center gap-3">
              <Book className="w-5 h-5 text-green-600" />
              <span className="font-bold text-green-900">工具一：聖經</span>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div>
              <h4 className="font-bold text-green-900 mb-2">◇ 地位與重要性</h4>
              <p className="text-gray-700">
                聖經是所有基督教神學的最高權威和基礎。神學必須以聖經為根據，而非相反。
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
              <h4 className="font-bold text-green-900 mb-2">◆ 使用聖經的方法</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>歷史-文法研究：</strong>理解原始的語言、文化、歷史背景</li>
                <li><strong>整體平衡：</strong>避免片面引用；看聖經的整體教導</li>
                <li><strong>文脈理解：</strong>不斷章取義；理解段落和篇章的完整意思</li>
                <li><strong>比較研究：</strong>不同經卷如何相互說明和驗證</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
              <p className="text-yellow-900 font-semibold">
                ⚠️ 陷阱：片面引用聖經證明先入為主的觀點，而非由聖經引導思想。
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tool 2: Tradition */}
        <motion.div
          className="mb-6 border rounded-lg overflow-hidden bg-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="px-6 py-4 bg-blue-100">
            <div className="flex items-center gap-3">
              <Compass className="w-5 h-5 text-blue-600" />
              <span className="font-bold text-blue-900">工具二：傳統</span>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div>
              <h4 className="font-bold text-blue-900 mb-2">◇ 什麼是傳統？</h4>
              <p className="text-gray-700">
                過去兩千年來，基督徒對信仰的思考和實踐的總和。包括：教父、中世紀神學家、宗教改革家、現代思想家的著作與經驗。
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-900 mb-2">◆ 傳統的價值</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>借鑑智慧：</strong>從前人的經驗和思考中學習</li>
                <li><strong>避免重複：</strong>不必自己重新發明已被解決的問題</li>
                <li><strong>提供視角：</strong>了解不同時代如何理解相同的信仰</li>
                <li><strong>批判的基礎：</strong>知道傳統幫助我們知道要批判什麼</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded border border-purple-200">
              <h4 className="font-bold text-purple-900 mb-2">△ 與聖經的關係</h4>
              <p className="text-purple-800">
                傳統不與聖經平等，但也不應被忽視。傳統是對聖經的詮釋，可以幫助我們但也可能誤導我們。我們要檢驗傳統是否符合聖經。
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tool 3: Experience */}
        <motion.div
          className="mb-6 border rounded-lg overflow-hidden bg-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="px-6 py-4 bg-purple-100">
            <div className="flex items-center gap-3">
              <Lightbulb className="w-5 h-5 text-purple-600" />
              <span className="font-bold text-purple-900">工具三：經驗</span>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div>
              <h4 className="font-bold text-purple-900 mb-2">◇ 經驗的來源</h4>
              <ul className="list-disc list-inside text-gray-700 mb-3">
                <li>個人的靈命經歷和屬靈覺醒</li>
                <li>教會共同體的集體經驗</li>
                <li>當代的歷史事件和文化現象</li>
                <li>人類共同的生活經歷（痛苦、喜樂、道德等）</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-900 mb-2">◆ 經驗在神學中的角色</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>驗證信念：</strong>神學思想應該與基督徒的實際經驗相符</li>
                <li><strong>提出問題：</strong>現實經歷會提出聖經和傳統必須面對的新問題</li>
                <li><strong>提供洞見：</strong>特定的經驗（如貧困、苦難）提供獨特的神學視角</li>
              </ul>
            </div>

            <div className="bg-red-50 p-4 rounded border border-red-200">
              <h4 className="font-bold text-red-900 mb-2">⚠️ 危險</h4>
              <p className="text-red-800">
                個人經驗容易誤導；某人的經驗不能作為普遍真理的基礎。經驗必須被聖經檢驗和平衡。
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tool 4: Reason */}
        <motion.div
          className="mb-6 border rounded-lg overflow-hidden bg-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="px-6 py-4 bg-orange-100">
            <div className="flex items-center gap-3">
              <Hammer className="w-5 h-5 text-orange-600" />
              <span className="font-bold text-orange-900">工具四：理性</span>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div>
              <h4 className="font-bold text-orange-900 mb-2">◇ 理性的角色</h4>
              <p className="text-gray-700 mb-3">
                理性是我們思考、批判、整合、表達信仰的工具。神學需要理性的工作：邏輯分析、概念區分、論證構建。
              </p>
            </div>

            <div className="bg-orange-50 p-4 rounded border-l-4 border-orange-500">
              <h4 className="font-bold text-orange-900 mb-2">◆ 理性的應用方式</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>邏輯檢驗：</strong>確保論證沒有自相矛盾</li>
                <li><strong>概念澄清：</strong>定義術語，避免模糊或混淆</li>
                <li><strong>整體協調：</strong>努力使各信念相互協調</li>
                <li><strong>當代表達：</strong>用現代人能理解的語言和概念</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
              <h4 className="font-bold text-yellow-900 mb-2">⚠️ 限制與謙虛</h4>
              <p className="text-yellow-800">
                理性有其限制；某些屬靈真理超越理性（如三位一體），但不違背理性。神學家應該理性但謙虛，承認人的理解有限。
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tools Working Together */}
      <motion.div
        className="mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-2xl font-bold text-indigo-900 mb-4">四大工具的相互作用</h3>
        <div className="space-y-3 text-indigo-800">
          <p>
            <strong>聖經</strong>是基礎和檢驗標準。
          </p>
          <p>
            <strong>傳統</strong>為聖經的詮釋提供歷史視角。
          </p>
          <p>
            <strong>經驗</strong>提出當代的問題和證實。
          </p>
          <p>
            <strong>理性</strong>整合上述三者，進行批判思考和系統陳述。
          </p>
          <p className="mt-4 italic">
            沒有任何一項工具能單獨完成神學工作；四大工具必須協調使用。
          </p>
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
                <strong>在你的信仰中，四大工具中哪一個最影響你？為什麼？</strong>
              </p>
              <p className="text-gray-700 text-sm">
                是聖經的教導、教會傳統、個人經驗，還是邏輯思考？
              </p>
            </div>

            <div className="bg-white p-4 rounded border-l-4 border-amber-400">
              <p className="text-amber-900 mb-2">
                <strong>某一個工具是否被過度強調或忽視？</strong>
              </p>
              <p className="text-gray-700 text-sm">
                例如，有些教會過度依賴傳統而忽視聖經；有些強調個人經驗而貶低理性。
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
                <p className="font-bold text-amber-900">操練聖經研究</p>
                <p className="text-gray-700 text-sm">學習歷史-文法的解經方法；閱讀聖經註釋；思考原始背景。</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <div>
                <p className="font-bold text-amber-900">接觸神學傳統</p>
                <p className="text-gray-700 text-sm">閱讀教父、中世紀、宗教改革、現代的神學著作，了解不同視角。</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <div>
                <p className="font-bold text-amber-900">反思靈命經驗</p>
                <p className="text-gray-700 text-sm">思考你的信仰經歷與聖經、傳統的關係；提出真實的信仰問題。</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <div>
                <p className="font-bold text-amber-900">操練理性思考</p>
                <p className="text-gray-700 text-sm">問「為什麼」，檢查信念的邏輯，試著用清晰的語言表達信仰。</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Summary */}
      <motion.div
        className="bg-gradient-to-r from-green-900 to-emerald-900 text-white p-8 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">本章小結</h2>
        <div className="space-y-3">
          <p>
            ✓ <strong>四大工具：</strong>聖經（權威）、傳統（視角）、經驗（驗證）、理性（整合）。
          </p>
          <p>
            ✓ <strong>互補而非替代：</strong>四大工具各有重要角色；缺一不可。
          </p>
          <p>
            ✓ <strong>聖經為首：</strong>聖經是最高權威和檢驗標準；其他工具必須符合聖經。
          </p>
          <p>
            ✓ <strong>實踐要點：</strong>研究聖經、接觸傳統、反思經驗、操練理性思考。
          </p>
        </div>
      </motion.div>
    </div>
  );
}
