import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Compass, Lightbulb, Target, Users, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Book15Ch9() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [selectedPhase, setSelectedPhase] = useState<string>('phase1');

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
      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-8 mb-8">
        <h1 className="text-4xl font-bold text-cyan-900 mb-2">神學研究入門</h1>
        <p className="text-lg text-cyan-700">第九章 ── 開始你的神學探索之旅</p>
      </div>

      {/* Opening */}
      <motion.div
        className="mb-8 bg-gradient-to-r from-cyan-100 to-blue-100 p-6 rounded-lg"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h2 className="text-2xl font-bold text-cyan-900 mb-4">神學研究的開始</h2>
        <p className="text-cyan-800">
          讀到這裡，你已經認識到：你是神學家，神學很重要，神學需要工具和脈絡，神學應該改變生命。現在的問題是：「我應該如何開始我的神學探索？」
        </p>
      </motion.div>

      {/* Levels of Study */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-cyan-900 mb-6">神學研究的四個層次</h2>

        <motion.div
          className="mb-6 border rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <button
            onClick={() => toggleSection('level1')}
            className="w-full px-6 py-4 bg-cyan-100 hover:bg-cyan-200 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-cyan-600" />
              <span className="font-bold text-cyan-900">層次一：聖經和教義的基礎學習</span>
            </div>
            {expandedSections.has('level1') ?
              <ChevronUp className="w-5 h-5 text-cyan-600" /> :
              <ChevronDown className="w-5 h-5 text-cyan-600" />
            }
          </button>

          <AnimatePresence>
            {expandedSections.has('level1') && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="p-6 bg-white space-y-4"
              >
                <div>
                  <h4 className="font-bold text-cyan-900 mb-2">◇ 適合誰</h4>
                  <p className="text-gray-700">所有基督徒，特別是新信徒和尋求基本信仰理解的人。</p>
                </div>

                <div>
                  <h4 className="font-bold text-cyan-900 mb-2">◆ 內容</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>整本聖經的結構和主要信息</li>
                    <li>基本基督教教義（救恩、三位一體、基督論等）</li>
                    <li>信仰的核心真理</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-cyan-900 mb-2">◆ 資源</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>聖經註釋（如新聖經註釋叢刊）</li>
                    <li>教義入門書（如《基督教信仰導論》）</li>
                    <li>教會的講道和教導</li>
                  </ul>
                </div>

                <div className="bg-cyan-50 p-4 rounded border border-cyan-300">
                  <p className="text-cyan-900 font-semibold">
                    ✓ 目標：建立堅實的聖經和信仰基礎。
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="mb-6 border rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <button
            onClick={() => toggleSection('level2')}
            className="w-full px-6 py-4 bg-blue-100 hover:bg-blue-200 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <Compass className="w-5 h-5 text-blue-600" />
              <span className="font-bold text-blue-900">層次二：認真的神學讀書</span>
            </div>
            {expandedSections.has('level2') ?
              <ChevronUp className="w-5 h-5 text-blue-600" /> :
              <ChevronDown className="w-5 h-5 text-blue-600" />
            }
          </button>

          <AnimatePresence>
            {expandedSections.has('level2') && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="p-6 bg-white space-y-4"
              >
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">◇ 適合誰</h4>
                  <p className="text-gray-700">想要更深入理解信仰、領導力較強或較有學習熱誠的信徒。</p>
                </div>

                <div>
                  <h4 className="font-bold text-blue-900 mb-2">◆ 內容</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>神學主要議題的深入探討（神的本性、人的本性、救贖論等）</li>
                    <li>不同神學傳統的比較</li>
                    <li>神學思想史的重要人物和運動</li>
                    <li>當代神學課題</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-blue-900 mb-2">◆ 資源</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>神學導論和系統神學著作</li>
                    <li>神學期刊文章</li>
                    <li>聖經書卷的神學解讀</li>
                    <li>歷史神學著作</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded border border-blue-300">
                  <p className="text-blue-900 font-semibold">
                    ✓ 目標：發展對信仰的批判性和系統性理解。
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="mb-6 border rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <button
            onClick={() => toggleSection('level3')}
            className="w-full px-6 py-4 bg-green-100 hover:bg-green-200 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <Lightbulb className="w-5 h-5 text-green-600" />
              <span className="font-bold text-green-900">層次三：正規神學教育</span>
            </div>
            {expandedSections.has('level3') ?
              <ChevronUp className="w-5 h-5 text-green-600" /> :
              <ChevronDown className="w-5 h-5 text-green-600" />
            }
          </button>

          <AnimatePresence>
            {expandedSections.has('level3') && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="p-6 bg-white space-y-4"
              >
                <div>
                  <h4 className="font-bold text-green-900 mb-2">◇ 適合誰</h4>
                  <p className="text-gray-700">計劃成為牧師、神學老師、或想要獲得正規神學學位的人。</p>
                </div>

                <div>
                  <h4 className="font-bold text-green-900 mb-2">◆ 形式</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>神學院或聖經學院的課程（2-3年或更久）</li>
                    <li>系統的聖經語言學習（希伯來文、希臘文）</li>
                    <li>神學各科的深入研究</li>
                    <li>論文或畢業設計</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-green-900 mb-2">◆ 等級</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>大專聖經課程（Diploma）</li>
                    <li>學士學位（Bachelor of Theology）</li>
                    <li>碩士學位（Master of Divinity 或 Master of Theology）</li>
                    <li>博士學位（PhD/Doctor of Theology）</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded border border-green-300">
                  <p className="text-green-900 font-semibold">
                    ✓ 目標：獲得專業神學訓練和教學資格。
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="mb-6 border rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <button
            onClick={() => toggleSection('level4')}
            className="w-full px-6 py-4 bg-purple-100 hover:bg-purple-200 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-purple-600" />
              <span className="font-bold text-purple-900">層次四：原創神學研究</span>
            </div>
            {expandedSections.has('level4') ?
              <ChevronUp className="w-5 h-5 text-purple-600" /> :
              <ChevronDown className="w-5 h-5 text-purple-600" />
            }
          </button>

          <AnimatePresence>
            {expandedSections.has('level4') && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="p-6 bg-white space-y-4"
              >
                <div>
                  <h4 className="font-bold text-purple-900 mb-2">◇ 適合誰</h4>
                  <p className="text-gray-700">有高度學術追求、計劃從事神學研究或高等教育的人。</p>
                </div>

                <div>
                  <h4 className="font-bold text-purple-900 mb-2">◆ 內容</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>進行獨立的原創研究</li>
                    <li>撰寫研究論文或專著</li>
                    <li>對神學的某個特定領域作出貢獻</li>
                    <li>發表於學術期刊或出版社</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-purple-900 mb-2">◆ 途徑</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>攻讀博士學位（Ph.D. / D.Th.）</li>
                    <li>在大學或神學院任教</li>
                    <li>從事獨立研究出版</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded border border-purple-300">
                  <p className="text-purple-900 font-semibold">
                    ✓ 目標：推進神學知識的邊界，貢獻新的神學洞見。
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Practical Steps */}
      <motion.div
        className="mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold text-indigo-900 mb-6">開始神學研究的實踐步驟</h2>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
            <h4 className="font-bold text-indigo-900 mb-2">第一步：確立基礎</h4>
            <p className="text-gray-700">
              務必先有堅實的聖經知識和基本信仰理解。若還未完成，建議先進行聖經通讀和基本教義學習。
            </p>
          </div>

          <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
            <h4 className="font-bold text-indigo-900 mb-2">第二步：選擇學習方式</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>獨立閱讀（書籍、期刊、線上資源）</li>
              <li>參加教會或機構的神學課程</li>
              <li>申請正規神學教育</li>
              <li>參與研討會或學術會議</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
            <h4 className="font-bold text-indigo-900 mb-2">第三步：建立學習計畫</h4>
            <p className="text-gray-700">
              選擇特定的主題、聖經書卷或神學議題進行深入學習。制定每週或每月的閱讀和反思計畫。
            </p>
          </div>

          <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
            <h4 className="font-bold text-indigo-900 mb-2">第四步：加入學習社群</h4>
            <p className="text-gray-700">
              與他人討論、分享，參加讀書會或神學小組。單獨研究可能落入偏見，與他人交流幫助我們擴大視野。
            </p>
          </div>

          <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
            <h4 className="font-bold text-indigo-900 mb-2">第五步：應用所學</h4>
            <p className="text-gray-700">
              思考所學如何應用於個人靈命、服事、決策。寫下反思和應用日記，定期回顧和評估。
            </p>
          </div>
        </div>
      </motion.div>

      {/* Resources */}
      <div className="mb-8 bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-yellow-900 mb-6">神學研究的重要資源</h2>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
            <h4 className="font-bold text-yellow-900 mb-2">◆ 聖經與詮釋</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>聖經（多個譯本對比閱讀）</li>
              <li>聖經詞典和百科全書</li>
              <li>聖經註釋（如馬歇爾、維爾基姆）</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
            <h4 className="font-bold text-yellow-900 mb-2">◆ 神學著作</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>系統神學（如沃菲爾德、柏克富）</li>
              <li>神學導論（如葛利芬、葛利芬）</li>
              <li>專題神學著作（基督論、救贖論等）</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
            <h4 className="font-bold text-yellow-900 mb-2">◆ 歷史與傳統</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>教會歷史和教父著作</li>
              <li>神學思想史</li>
              <li>各教派的信仰告白和宣言</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
            <h4 className="font-bold text-yellow-900 mb-2">◆ 現代資源</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>神學期刊（如Christian Scholar's Review）</li>
              <li>線上神學課程和講座</li>
              <li>神學播客和視頻資源</li>
              <li>聖經研究軟體（Logos、Accordance）</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Conclusion & Encouragement */}
      <motion.div
        className="bg-gradient-to-r from-cyan-900 to-blue-900 text-white p-8 rounded-lg mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">結語與鼓勵</h2>
        <div className="space-y-3">
          <p>
            這本書的標題是《誰需要神學？》，我們的答案是：每一個基督徒都需要。
          </p>
          <p>
            你已經是神學家——因為你思考信仰、尋求真理。現在的問題不是「我是否應該進行神學思考」，而是「我應該如何進行更深入、更批判、更系統的神學思考」。
          </p>
          <p>
            神學的最終目的不是學位或發表，而是幫助你更深入地認識上帝，更清楚地理解信仰，更有力地活出信仰。願你在神學的探索中，不僅增加知識，更經歷靈命的成長。
          </p>
          <p className="italic mt-4">
            「願藉著這本書，你開始或加深你的神學探索之旅。願聖靈引導你尋求真理，願你的信仰與生活日漸相合。阿們。」
          </p>
        </div>
      </motion.div>

      {/* Final Reflection */}
      <div className="bg-amber-50 p-8 rounded-lg border-2 border-amber-200">
        <h3 className="text-2xl font-bold text-amber-900 mb-4">最後的反思</h3>
        <div className="bg-white p-6 rounded space-y-4">
          <p className="text-gray-700">
            <strong>「我相信是為了我可以瞭解。」</strong>（Credo ut intelligam）── 中世紀神學家安瑟倫
          </p>
          <p className="text-gray-700">
            神學研究始於信心，卻通往理解。你的信心，加上認真的思考，會帶你進入對信仰更深的領悟。不要害怕提出問題、批判思考或尋求更深的理解——這正是神學應該做的。
          </p>
          <p className="text-gray-700 italic">
            願上帝祝福你在神學探索的旅途中，既增長知識，更被聖靈更新變化。
          </p>
        </div>
      </div>
    </div>
  );
}
