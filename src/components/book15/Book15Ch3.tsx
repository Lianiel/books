import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Focus, Compass, Zap, AlertCircle, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Book15Ch3() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [expandedDefinition, setExpandedDefinition] = useState<string | null>(null);
  const [expandedFocus, setExpandedFocus] = useState<string | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const toggleDefinition = (id: string) => {
    setExpandedDefinition(expandedDefinition === id ? null : id);
  };

  const toggleFocus = (id: string) => {
    setExpandedFocus(expandedFocus === id ? null : id);
  };

  const handleQuizAnswer = (questionId: string, answer: string) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const theologicalDefinitions = [
    {
      id: 'literal',
      title: '字面定義',
      origin: '來自希臘文 "theos"（神）和 "logos"（言論、理性）',
      definition: '關於神的言論或理性的思考',
      strengths: ['簡潔', '易於記憶'],
      limitations: ['過於簡化', '未能表達神學的深度和複雜性'],
      example: '任何談論神的言語都可稱為神學',
    },
    {
      id: 'grenz',
      title: '格蘭茨的定義（本書作者）',
      origin: '當代新教神學家',
      definition: '對神及其與人類的關係，以及人類對神的回應進行系統、理性和批判性的反思',
      strengths: ['系統性', '包含反思和批判成分', '強調關係層面'],
      limitations: ['較為複雜', '強調理性可能引起誤會'],
      example: '思考「神為什麼允許苦難存在？」並尋求聖經、傳統和經驗的答案',
    },
    {
      id: 'aquinas',
      title: '中世紀傳統：托馬斯·阿奎那',
      origin: '13世紀中世紀神學家',
      definition: '科學的思辨，按照上帝的方式來認識上帝及所有事物與上帝的關係',
      strengths: ['重視上帝中心', '認識論導向', '整全視角'],
      limitations: ['受中世紀背景局限', '語言距離現代較遠'],
      example: '用理性來證明上帝的存在和屬性',
    },
    {
      id: 'barth',
      title: '20世紀新正統派：巴特',
      origin: '新正統主義神學家',
      definition: '人對神的啟示的回應；人聆聽神話語的行為',
      strengths: ['重視神的主動性', '強調聆聽和順服'],
      limitations: ['較少涉及理性思辨', '可能削弱人的責任'],
      example: '閱讀聖經並聆聽神對我們個人說話的信息',
    },
    {
      id: 'tillich',
      title: '20世紀存在主義：蒂利希',
      origin: '20世紀新教神學家',
      definition: '對「終極關懷」進行的系統反思；對人生終極問題和終極意義的回答',
      strengths: ['與現代思想對話', '面向存在問題'],
      limitations: ['可能過度人文化', '終極關懷的界定較為模糊'],
      example: '思考「生命的終極意義是什麼？」並從信仰角度回答',
    },
  ];

  const coreElements = [
    {
      element: '神的中心性',
      description: '神是神學的核心主題。無論多麼廣泛的話題，若無關乎對神的認識和對神的回應，就不屬於嚴格意義的神學。',
      implication: '神學不是一般的哲學思考，而是特別關乎神的思考。',
    },
    {
      element: '聖經的根基',
      description: '基督教神學必須建立在聖經的基礎上。聖經是神的啟示記錄，是檢驗神學真偽的首要標準。',
      implication: '基督教神學與其他宗教神學的區別在於對聖經權威的承認。',
    },
    {
      element: '理性的應用',
      description: '神學涉及用人類的理性思考來理解信仰真理。這不是說理性可以創造真理，而是用理性來詮釋、闡述和捍衛信仰。',
      implication: '信仰和理性不是相反的；最好的神學既有信心也有思想。',
    },
    {
      element: '傳統的對話',
      description: '神學不在真空中進行。我們承受歷代聖徒的思想遺產，與他們對話，學習他們的洞見，同時也批判性地評估他們的局限。',
      implication: '我們的神學始終是在與過去對話的過程中形成的。',
    },
    {
      element: '經驗的驗證',
      description: '神學的真理必須能夠在信仰者的生活中得到驗證。正確的神學應該導向屬靈的成長和道德的改變。',
      implication: '口頭的信條如果沒有生活的果實，就是空洞的。',
    },
  ];

  const theologicalFoci = [
    {
      id: 'god',
      title: '對神的認識',
      focus: '神的存在、屬性、名字和工作',
      questions: [
        '神是什麼？神有什麼屬性？',
        '神如何行動？神的目的是什麼？',
        '我們如何認識神？',
      ],
      implications: '我們對神的理解塑造我們的整個信仰和生活',
    },
    {
      id: 'salvation',
      title: '救恩',
      focus: '人類的罪、神的拯救行為、基督的工作、信心和重生',
      questions: [
        '人類為什麼需要救恩？',
        '基督的死和復活如何拯救我們？',
        '信心和行為在救恩中的角色是什麼？',
      ],
      implications: '對救恩的理解決定了我們如何回應神',
    },
    {
      id: 'church',
      title: '教會',
      focus: '教會的本質、使命、組織、聖禮和紀律',
      questions: [
        '什麼是教會？誰是教會的成員？',
        '教會的使命是什麼？',
        '教會應如何組織和運作？',
      ],
      implications: '對教會的理解影響我們的信仰群體生活',
    },
    {
      id: 'eschatology',
      title: '末世論',
      focus: '終末、復活、最後審判、天國和永恆',
      questions: [
        '歷史將如何結束？',
        '死後會發生什麼？',
        '我們應如何為永恆而活？',
      ],
      implications: '對未來的盼望影響我們現在的抉擇',
    },
    {
      id: 'ethics',
      title: '倫理',
      focus: '道德行為、十誡、聖潔、社會責任',
      questions: [
        '基督徒應如何生活？',
        '信仰如何指導倫理抉擇？',
        '教會對社會的責任是什麼？',
      ],
      implications: '神學的真實性在倫理行為中被驗證',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <motion.div
        className="bg-gradient-to-br from-teal-900 via-blue-900 to-cyan-900 text-white rounded-xl p-10 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold mb-3">第3章：界定神學</h1>
        <p className="text-xl text-blue-100">什麼是神學？核心定義和焦點</p>
      </motion.div>

      {/* Opening */}
      <motion.div
        className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-lg mb-8 border-l-4 border-blue-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="text-2xl font-bold text-blue-900 mb-4">開場思考</h2>
        <p className="text-gray-800 mb-4">
          如果「神學」真如前兩章所說的那樣，是每個思考的基督徒都在進行的活動，並且有品質的差別，那麼我們需要清楚地界定：究竟什麼是神學？什麼不是神學？神學關注的核心焦點是什麼？
        </p>
        <p className="text-gray-800">
          本章的目標是通過不同的定義、核心元素和主要焦點，給你一個清晰而全面的答案。這個界定將成為你接下來各章所有討論的基礎。
        </p>
      </motion.div>

      {/* What is Theology */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <BookOpen className="w-8 h-8 text-blue-600" />
          神學的不同定義
        </h2>

        <div className="mb-6 text-gray-700">
          <p>
            「神學」這個詞在不同時代、不同傳統中有著不同的含義。以下是五個重要的定義，每一個都從不同角度照亮神學的內涵：
          </p>
        </div>

        <div className="space-y-4">
          {theologicalDefinitions.map((def) => (
            <motion.div
              key={def.id}
              className="border rounded-lg overflow-hidden bg-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <button
                onClick={() => toggleDefinition(def.id)}
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-100 to-cyan-100 hover:from-blue-200 hover:to-cyan-200 flex items-center justify-between transition"
              >
                <div className="text-left">
                  <h4 className="text-lg font-bold text-gray-800">{def.title}</h4>
                  <p className="text-sm text-gray-600">{def.origin}</p>
                </div>
                {expandedDefinition === def.id ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                )}
              </button>

              <AnimatePresence>
                {expandedDefinition === def.id && (
                  <motion.div
                    className="p-6 bg-white border-t border-blue-200"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">定義：</h5>
                        <p className="text-gray-800 italic bg-blue-50 p-3 rounded">
                          {def.definition}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-green-50 p-3 rounded">
                          <h5 className="font-bold text-green-900 text-sm mb-2">優點</h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            {def.strengths.map((s, i) => (
                              <li key={i}>• {s}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-orange-50 p-3 rounded">
                          <h5 className="font-bold text-orange-900 text-sm mb-2">局限</h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            {def.limitations.map((l, i) => (
                              <li key={i}>• {l}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-bold text-gray-800 mb-2">具體例子：</h5>
                        <p className="text-gray-700 text-sm">{def.example}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Core Elements */}
      <motion.div
        className="bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
      >
        <h2 className="text-2xl font-bold text-blue-900 mb-6">神學的五個核心元素</h2>
        <p className="text-gray-800 mb-6">
          雖然定義各異，但所有認真的基督教神學都包含以下五個核心元素：
        </p>

        <div className="space-y-4">
          {coreElements.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-5 rounded-lg border-l-4 border-blue-500"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.27 + idx * 0.04 }}
            >
              <h4 className="text-lg font-bold text-blue-900 mb-2">{item.element}</h4>
              <p className="text-gray-800 mb-3">{item.description}</p>
              <p className="text-sm text-blue-700 italic">⊳ {item.implication}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* What is NOT Theology */}
      <motion.div
        className="bg-white border-2 border-blue-300 p-8 rounded-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
      >
        <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
          <AlertCircle className="w-6 h-6" />
          神學的邊界：什麼不是神學
        </h2>

        <p className="text-gray-800 mb-6">
          同樣重要的是了解什麼不是神學。以下活動雖然可能與神學相關，但本身不是神學思考：
        </p>

        <div className="space-y-3">
          {[
            { title: '純粹的哲學思辨', desc: '不涉及對神和信仰的思考，只是抽象的邏輯推理' },
            { title: '宗教歷史研究', desc: '描述宗教現象和信仰人物，但不進行信仰的反思和批判' },
            { title: '心理諮詢', desc: '幫助人處理情緒和心理問題，不涉及信仰的根本問題' },
            { title: '道德倡導', desc: '呼籲人們採取某些行動，但不基於對神和信仰的理性思考' },
            { title: '禮拜實踐', desc: '參與敬拜和儀式，而不進行其後的反思性思考' },
            { title: '虔誠的祈禱', desc: '個人與神的親密互動，而不涉及對信仰的系統思考' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="flex gap-3 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.38 + idx * 0.03 }}
            >
              <span className="font-bold text-blue-600 flex-shrink-0 mt-1">×</span>
              <div>
                <h4 className="font-bold text-gray-800">{item.title}</h4>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-blue-100 rounded-lg border border-blue-300">
          <p className="text-gray-800 text-sm">
            <strong>重點：</strong>這些活動雖然不是神學本身，但卻是神學的背景或前提。最好的神學將所有這些面向整合在一起，但神學本身特別強調理性的反思。
          </p>
        </div>
      </motion.div>

      {/* Major Theological Foci */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Focus className="w-8 h-8 text-blue-600" />
          神學的五個主要焦點
        </h2>

        <p className="text-gray-800 mb-6">
          雖然神學涉及廣泛的話題，但有五個主要焦點貫穿整個神學傳統：
        </p>

        <div className="space-y-4">
          {theologicalFoci.map((focus) => (
            <motion.div
              key={focus.id}
              className="border rounded-lg overflow-hidden bg-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <button
                onClick={() => toggleFocus(focus.id)}
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-100 to-teal-100 hover:from-blue-200 hover:to-teal-200 flex items-center justify-between transition"
              >
                <div className="text-left">
                  <h4 className="text-lg font-bold text-gray-800">{focus.title}</h4>
                  <p className="text-sm text-gray-600">{focus.focus}</p>
                </div>
                {expandedFocus === focus.id ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                )}
              </button>

              <AnimatePresence>
                {expandedFocus === focus.id && (
                  <motion.div
                    className="p-6 bg-white border-t border-blue-200"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-bold text-gray-800 mb-3">關鍵問題：</h5>
                        <ul className="space-y-2">
                          {focus.questions.map((q, idx) => (
                            <li key={idx} className="flex gap-2 text-gray-800">
                              <span className="text-blue-600 flex-shrink-0 font-bold">?</span>
                              <span>{q}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-bold text-blue-900 mb-2">為什麼重要：</h5>
                        <p className="text-gray-800 text-sm">{focus.implications}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Extended Discussion */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">延伸探討</h2>

        <div className="space-y-4">
          {[
            {
              id: 'system',
              title: '為什麼神學強調系統性？',
              content: '神學不只是隨意思考宗教問題。它尋求的是一個協調一致的信念體系，其中各個部分相互支持和補充。例如，對神的理解應與對救恩的理解協調，對教會的看法應與對末世的盼望相符。系統性幫助我們看到信仰的整體圖景，避免自相矛盾。',
            },
            {
              id: 'reason',
              title: '為什麼神學強調理性，卻又稱為「信心」的事？',
              content: '這看起來像是矛盾，但實際上不是。基督教傳統從未認為理性能夠證明所有信仰真理，或者理性比啟示更高。相反，神學家們一直主張，雖然一些信仰真理（如三一論）超越理性，但它們不違反理性。我們用理性來理解和詮釋信仰，但始終認識到啟示和經驗的重要性。',
            },
            {
              id: 'practice',
              title: '神學與實踐的關係',
              content: '神學不是純粹的知識遊戲。好的神學必然導向屬靈生命的改變和倫理行為的進步。如果一個人的神學思考沒有改變他的生活方式，那麼這個神學思考就有問題。這就是為什麼傳統將神學定義為不僅涉及認知，也涉及對神的回應。',
            },
            {
              id: 'breadth',
              title: '神學的廣度與深度',
              content: '神學涵蓋廣泛的主題，但也需要在特定領域的深度。一個神學家可能對某一特定主題（如三一論或救恩論）有特別深入的研究，同時也對其他主題有基本的理解。不同的神學家對不同主題有不同的重點，這是正常的，也是健康的。',
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
                className="w-full px-6 py-4 bg-blue-100 hover:bg-blue-200 flex items-center justify-between transition"
              >
                <h3 className="font-bold text-gray-800">{section.title}</h3>
                {expandedSection === section.id ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                )}
              </button>

              <AnimatePresence>
                {expandedSection === section.id && (
                  <motion.div
                    className="px-6 py-4 bg-white border-t border-blue-200"
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

      {/* Self-Assessment Quiz */}
      <motion.div
        className="bg-gradient-to-r from-blue-100 to-cyan-100 p-8 rounded-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.62 }}
      >
        <h2 className="text-2xl font-bold text-blue-900 mb-6">自我檢視</h2>

        <div className="space-y-6">
          {[
            {
              id: 'q1',
              question: '以下哪一項最好地描述什麼是神學？',
              options: [
                '關於神的任何談論或思考',
                '對神及其與人類的關係進行的系統、理性和批判性的反思',
                '只有神學專家才能進行的學術活動',
                '純粹的哲學思辨',
              ],
              correct: 'options-1',
            },
            {
              id: 'q2',
              question: '神學最重要的核心是什麼？',
              options: [
                '歷史知識',
                '語言技能',
                '神的中心性——關於對神的認識和回應',
                '道德教導',
              ],
              correct: 'options-2',
            },
            {
              id: 'q3',
              question: '以下哪個不是神學的五個主要焦點？',
              options: [
                '救恩',
                '教會',
                '心理健康',
                '末世論',
              ],
              correct: 'options-2',
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
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span
                        className={`w-4 h-4 rounded-full border-2 ${
                          quizAnswers[quiz.id] === option
                            ? 'border-blue-500 bg-blue-500'
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
        className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.68 }}
      >
        <h2 className="text-2xl font-bold text-blue-900 mb-6">反思問題</h2>
        <div className="space-y-4 text-gray-800">
          <div className="flex gap-3">
            <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <p>在你進行神學思考時，神是否總是中心？還是有時神學議題成為你關注的焦點？</p>
          </div>
          <div className="flex gap-3">
            <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <p>你認為以上五個神學定義中，哪一個最有幫助？為什麼？</p>
          </div>
          <div className="flex gap-3">
            <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <p>五個神學焦點中，哪一個對你個人信仰的影響最大？</p>
          </div>
          <div className="flex gap-3">
            <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <p>信仰與理性在你的神學思考中處於什麼樣的關係？</p>
          </div>
        </div>
      </motion.div>

      {/* Practical Guidance */}
      <motion.div
        className="bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.73 }}
      >
        <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
          <Zap className="w-6 h-6" />
          具體實踐方針
        </h2>

        <div className="space-y-4">
          {[
            {
              num: 1,
              title: '界定你的神學焦點',
              desc: '問自己：在五個神學焦點中，你目前最關注哪些？如果有些領域你很少思考，可以有意識地選擇深入一些。',
            },
            {
              num: 2,
              title: '檢查神學的五個核心元素',
              desc: '審視你的信念。你的神學是以神為中心的嗎？是建立在聖經基礎上的嗎？它經得起理性檢驗嗎？它與傳統對話了嗎？它被生活經驗驗證了嗎？',
            },
            {
              num: 3,
              title: '尋求系統性',
              desc: '你的各種信念是否相互協調？試著寫下你在一些主要問題上的立場，看看它們之間是否一致。',
            },
            {
              num: 4,
              title: '實踐性反思',
              desc: '選擇一個你深信的神學立場，思考它如何影響你的日常生活。如果沒有影響，問問自己這個信念是否真的重要。',
            },
            {
              num: 5,
              title: '參與神學對話',
              desc: '與他人討論神學問題。傾聽不同的觀點，批判性地思考，但也要願意修正你的理解。',
            },
          ].map((item) => (
            <motion.div
              key={item.num}
              className="flex gap-4 p-4 bg-white rounded-lg border-l-4 border-blue-500"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.75 + item.num * 0.04 }}
            >
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
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
        className="bg-gradient-to-r from-teal-900 to-blue-900 text-white p-8 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.78 }}
      >
        <h2 className="text-2xl font-bold mb-4">本章要點整理</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <span>神學是對神及其與人類的關係進行系統、理性和批判性的反思</span>
          </li>
          <li className="flex gap-3">
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <span>神學有五個核心元素：神的中心性、聖經根基、理性應用、傳統對話、經驗驗證</span>
          </li>
          <li className="flex gap-3">
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <span>神學與純哲學、宗教研究、心理諮詢等有明確區別</span>
          </li>
          <li className="flex gap-3">
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <span>五個主要神學焦點：對神的認識、救恩、教會、末世論、倫理</span>
          </li>
          <li className="flex gap-3">
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <span>好的神學既是知識性的，也是實踐性的；既重視理性，也尊重啟示和經驗</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
