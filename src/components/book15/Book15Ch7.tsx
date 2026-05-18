import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Globe, Clock, Users, Map, Star, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Book15Ch7() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [activeContext, setActiveContext] = useState<'historical' | 'cultural' | 'ecclesiastical'>('historical');

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
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8 mb-8">
        <h1 className="text-4xl font-bold text-purple-900 mb-2">建立神學的脈絡</h1>
        <p className="text-lg text-purple-700">第七章 ── 理解神學所處的歷史、文化和教會背景</p>
      </div>

      {/* Opening */}
      <motion.div
        className="mb-8 bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h2 className="text-2xl font-bold text-purple-900 mb-4">為什麼脈絡很重要？</h2>
        <p className="text-purple-800">
          沒有脈絡的神學就像沒有背景的畫；我們無法真正理解它。同樣的神學話語在不同脈絡中有不同的意義。要讀懂神學，我們必須了解它的歷史、文化和教會背景。
        </p>
      </motion.div>

      {/* Three Dimensions of Context */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-purple-900 mb-6">神學脈絡的三個維度</h2>

        <div className="mb-6 bg-white border rounded-lg shadow">
          <div className="flex flex-col sm:flex-row">
            <button
              onClick={() => setActiveContext('historical')}
              className={`flex-1 px-4 py-3 sm:px-6 sm:py-4 font-bold text-sm sm:text-lg transition border-b sm:border-b-0 sm:border-r ${
                activeContext === 'historical'
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-5 h-5" />
                歷史脈絡
              </div>
            </button>
            <button
              onClick={() => setActiveContext('cultural')}
              className={`flex-1 px-4 py-3 sm:px-6 sm:py-4 font-bold text-sm sm:text-lg transition border-b sm:border-b-0 sm:border-r ${
                activeContext === 'cultural'
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Globe className="w-5 h-5" />
                文化脈絡
              </div>
            </button>
            <button
              onClick={() => setActiveContext('ecclesiastical')}
              className={`flex-1 px-4 py-3 sm:px-6 sm:py-4 font-bold text-sm sm:text-lg transition ${
                activeContext === 'ecclesiastical'
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Users className="w-5 h-5" />
                教會脈絡
              </div>
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeContext === 'historical' && (
              <motion.div
                key="historical"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-8 bg-gradient-to-br from-purple-50 to-pink-50"
              >
                <h3 className="text-2xl font-bold text-purple-900 mb-4">1. 歷史脈絡</h3>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                    <h4 className="font-bold text-purple-900 mb-2">◇ 問題與事件</h4>
                    <p className="text-gray-700">
                      神學通常產生於回應特定的歷史問題或事件。例如：
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                      <li>異端挑戰（阿里烏派、聶斯多流派）→ 激發正統教義的發展</li>
                      <li>政治危機 → 政治神學的反思</li>
                      <li>科學發現 → 神學與科學關係的重新審視</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                    <h4 className="font-bold text-purple-900 mb-2">◆ 時代的關懷</h4>
                    <p className="text-gray-700">
                      不同時代的神學家關注不同的問題：
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                      <li><strong>初期教會：</strong>耶穌的神性與人性如何並存？</li>
                      <li><strong>宗教改革：</strong>救恩是靠行為還是靠信心？</li>
                      <li><strong>現代：</strong>神學如何回應苦難、不公義、多元宗教？</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-4 rounded border border-purple-300">
                    <p className="text-purple-900 font-semibold">
                      ✓ 應用：理解神學家所面對的歷史問題，才能真正理解他們的回應。
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeContext === 'cultural' && (
              <motion.div
                key="cultural"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50"
              >
                <h3 className="text-2xl font-bold text-blue-900 mb-4">2. 文化脈絡</h3>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                    <h4 className="font-bold text-blue-900 mb-2">◇ 哲學背景</h4>
                    <p className="text-gray-700">
                      神學家使用當時的哲學語言和概念：
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                      <li><strong>教父時期：</strong>使用柏拉圖主義概念表達信仰</li>
                      <li><strong>中世紀：</strong>亞里士多德哲學重新引入</li>
                      <li><strong>現代：</strong>實證主義、現象學、後現代主義影響神學</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                    <h4 className="font-bold text-blue-900 mb-2">◆ 語言與文化假設</h4>
                    <p className="text-gray-700">
                      神學表達受到所在文化的語言、思維方式和假設的深刻影響：
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                      <li>西方（希臘-羅馬）思維強調理性和個體</li>
                      <li>東方思維強調整體和和諧</li>
                      <li>非洲、亞洲脈絡帶來對祖先、社區、土地的不同理解</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded border border-blue-300">
                    <p className="text-blue-900 font-semibold">
                      ✓ 應用：同樣的信仰真理在不同文化中會有不同的表達。我們要分辨普遍真理與文化表現。
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeContext === 'ecclesiastical' && (
              <motion.div
                key="ecclesiastical"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-8 bg-gradient-to-br from-green-50 to-emerald-50"
              >
                <h3 className="text-2xl font-bold text-green-900 mb-4">3. 教會脈絡</h3>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border-l-4 border-green-500">
                    <h4 className="font-bold text-green-900 mb-2">◇ 神學傳統</h4>
                    <p className="text-gray-700">
                      神學家來自不同的教會傳統，各傳統有不同的強調：
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                      <li><strong>天主教：</strong>強調教會傳統和教導權</li>
                      <li><strong>東正教：</strong>強調聖傳和禮儀經驗</li>
                      <li><strong>更正教：</strong>強調聖經和信徒的理解</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded border-l-4 border-green-500">
                    <h4 className="font-bold text-green-900 mb-2">◆ 教會的需要</h4>
                    <p className="text-gray-700">
                      神學也回應所在教會社群的實際需要：
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                      <li>牧師需要講道素材</li>
                      <li>信徒需要信仰的清晰指引</li>
                      <li>教會面臨的倫理問題需要神學回應</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded border border-green-300">
                    <p className="text-green-900 font-semibold">
                      ✓ 應用：神學永遠不是抽象的；它源於教會的實際需要並回到教會的實踐。
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Integration */}
      <motion.div
        className="mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold text-indigo-900 mb-4">三個維度的整體視角</h3>
        <div className="space-y-3 text-indigo-800">
          <p>
            好的神學詮釋需要理解這三個維度如何相互作用：
          </p>
          <div className="bg-white p-4 rounded mt-3">
            <p className="text-gray-700 mb-2">
              <strong>例子：初期教會的基督論爭議</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
              <li><strong>歷史脈絡：</strong>異端挑戰（阿里烏派否定基督的神性）</li>
              <li><strong>文化脈絡：</strong>希臘哲學中一神論vs二元論的爭論</li>
              <li><strong>教會脈絡：</strong>教會需要明確的信仰聲明（尼西亞信經）</li>
              <li className="mt-2"><strong>結果：</strong>三位一體教義的發展——既回應異端，也運用當時哲學，解決教會的信仰問題</li>
            </ul>
          </div>
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
                <strong>你的教會和文化對神學思考有什麼影響？</strong>
              </p>
              <p className="text-gray-700 text-sm">
                思考你所屬教會的傳統、你的文化背景如何塑造你對信仰的理解。
              </p>
            </div>

            <div className="bg-white p-4 rounded border-l-4 border-amber-400">
              <p className="text-amber-900 mb-2">
                <strong>你這個時代最急迫的神學問題是什麼？</strong>
              </p>
              <p className="text-gray-700 text-sm">
                例如：人工智慧與靈魂？社會不公義與神的公義？多元宗教與基督教獨特性？
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
                <p className="font-bold text-amber-900">學習教會歷史</p>
                <p className="text-gray-700 text-sm">閱讀初期教會、中世紀、宗教改革、現代教會史，了解神學發展的歷史脈絡。</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <div>
                <p className="font-bold text-amber-900">反思文化影響</p>
                <p className="text-gray-700 text-sm">識別你的文化背景、哲學前提如何影響你的信仰理解；尋求不同文化的神學視角。</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <div>
                <p className="font-bold text-amber-900">參與教會生活</p>
                <p className="text-gray-700 text-sm">深入了解你所屬教會的傳統和現實需要；看神學如何在實踐中體現。</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <div>
                <p className="font-bold text-amber-900">應對當代問題</p>
                <p className="text-gray-700 text-sm">思考你時代的問題如何需要神學反思；試著提出神學的回應。</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Summary */}
      <motion.div
        className="bg-gradient-to-r from-purple-900 to-pink-900 text-white p-8 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-4">本章小結</h2>
        <div className="space-y-3">
          <p>
            ✓ <strong>三個脈絡維度：</strong>歷史（事件與問題）、文化（哲學與假設）、教會（傳統與需要）。
          </p>
          <p>
            ✓ <strong>脈絡決定意義：</strong>同樣的神學話語在不同脈絡中有不同的意義。
          </p>
          <p>
            ✓ <strong>分辨普遍與特殊：</strong>了解脈絡幫助我們分辨永恆真理與時代表現。
          </p>
          <p>
            ✓ <strong>實踐要點：</strong>學習歷史、反思文化、參與教會、應對當代問題。
          </p>
        </div>
      </motion.div>
    </div>
  );
}
