import React from 'react';
import { Lightbulb, CheckCircle, AlertCircle, Layers, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Book15Ch2() {
  const theologicalLevels = [
    {
      id: 'lay',
      title: '平信徒神學',
      subtitle: 'Lay Theology',
      description: '一般信徒在日常信仰生活中的思考與反省',
      details: '平信徒神學是最廣泛、最直接的信仰思考形式。它發生在日常生活中，針對實際的信仰問題。這種神學可能沒有學術的精緻性，但它最能反映真實信仰者的困境和洞見。',
      characteristics: [
        '針對生活中的實際問題和挑戰',
        '使用日常語言和親身經驗',
        '關注個人和家庭信仰的應用',
        '通常不涉及深度的學術理論',
        '來自實踐中的反思',
      ],
      example: '一位母親思考如何根據信仰教導孩子誠實和善良；一位上班族在職場倫理困境中尋求聖經指引；一對夫婦在婚姻衝突中思考聖經對愛的教導',
      importance: '這是信仰最活生生的表現，也是最廣泛和最普遍的神學形式。沒有平信徒神學，教會就失去了與現實生活的連結。',
      strengths: ['實踐導向，與生活緊密相連', '具有親身經驗的真實性', '普遍可參與，不需特殊培訓', '能解決日常的實際問題'],
      limitations: ['容易受個人偏見影響', '可能缺乏系統性和全面性', '範圍有限，難以解決複雜的神學問題', '可能遺漏歷史背景或其他視角'],
    },
    {
      id: 'pastoral',
      title: '牧職神學',
      subtitle: 'Pastoral Theology',
      description: '牧師和教會領袖在牧養工作中進行的反思性思考',
      details: '牧職神學介於平信徒神學和專業神學之間。它結合了對聖經的深入研究、教會傳統的認識、以及對牧養現實的理解。牧師們需要將信仰真理轉化為能幫助信徒的實踐指引。',
      characteristics: [
        '為應對教會和社群的具體需要',
        '結合聖經知識、傳統洞見和牧養經驗',
        '面向教會社群而不只是個人',
        '更具結構性和有意識的思考',
        '需要既有深度又有實用性',
      ],
      example: '牧師為主日講道進行經文的深入研究和詮釋；教會領袖思考如何以聖經的方式應對社會中的離婚、貧窮或種族問題；青年牧師發展課程幫助年輕人理解信仰在當代的意義',
      importance: '牧職神學是連接理論與實踐的橋樑。它幫助教會將信仰應用於實際處境，同時保持聖經和傳統的智慧。',
      strengths: ['兼具理論的深度和實踐的適切性', '具有教牧的敏感度和關懷', '面向具體的信仰群體', '能將複雜的信仰真理簡化為可理解的教導'],
      limitations: ['受時間和資源的嚴重限制', '可能過度強調實用性而犧牲深度', '牧師的專業性可能有限，無法深入所有領域', '教會政治和人際關係可能影響神學思考'],
    },
    {
      id: 'academic',
      title: '專業神學',
      subtitle: 'Professional Theology',
      description: '神學學者在學術機構中進行的系統性神學研究',
      details: '專業神學是最正規、最系統、最深入的神學思考形式。它通常在大學、神學院或研究機構進行，由經過專業培訓的神學家完成。它涉及原文研究、歷史分析、哲學思辨，以及與其他學科的對話。',
      characteristics: [
        '高度系統化和理論化',
        '使用學術方法和工具',
        '深入聖經原文和傳統研究',
        '與其他學科進行對話',
        '參與學術出版和同行評審',
        '追求全面性和一致性',
      ],
      example: '神學教授撰寫關於三一論的專著，深入研究教會歷史上的各種詮釋；聖經學者進行原文語言的細緻研究；倫理神學家系統地探討聖經與當代倫理問題的關係',
      importance: '專業神學提供了理論的深度、歷史的視角和系統的思考。它為教會提供了神學的知識庫，幫助信仰群體進行更深入的理解。',
      strengths: ['系統完整，邏輯嚴密', '學術嚴謹，經過同行評審', '具有創新性和原創性', '提供廣闊的知識視野和歷史視角'],
      limitations: ['可能脫離實踐和日常信仰', '使用的語言較為專業，普通信徒難以理解', '有時過於注重細節而失去整體圖景', '象牙塔心態可能導致與信仰群體的脫節'],
    },
  ];

  const qualityCriteria = [
    {
      criterion: '聖經根據',
      description: '是否建立在聖經真理之上',
      detail: '神學的第一標準必須是聖經。任何偏離聖經教導的神學，無論多麼聰明或流行，都是有問題的。'
    },
    {
      criterion: '傳統智慧',
      description: '是否借鑑教會傳統的洞見',
      detail: '教會兩千年的思想遺產包含了寶貴的智慧。好的神學應該與這個傳統對話，而不是完全忽視它。'
    },
    {
      criterion: '理性思考',
      description: '是否經過理性的檢驗和論證',
      detail: '信仰和理性不相衝突。好的神學應該能夠經得起理性的檢驗，邏輯應該是一致的。'
    },
    {
      criterion: '經驗驗證',
      description: '是否符合信仰實踐的經驗',
      detail: '神學的真實性應該在信仰者的生活中被驗證。如果一個神學觀點導向屬靈死亡而不是成長，那麼它就有問題。'
    },
    {
      criterion: '時代相關',
      description: '是否面向當代的真實需要',
      detail: '好的神學不是古董，而是活的。它應該幫助當代信徒回應當代的挑戰和問題。'
    },
    {
      criterion: '信仰整全',
      description: '是否保持信仰的整體性和平衡',
      detail: '神學應該是平衡的，而不是過度強調某一個方面而犧牲其他方面。好的神學是整全的。'
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-red-900 via-orange-800 to-amber-800 text-white rounded-xl p-10">
        <h1 className="text-4xl font-bold mb-3">第2章：不是所有神學都一律平等</h1>
        <p className="text-xl text-orange-100">理解神學品質的區別與標準</p>
      </div>

      {/* Opening Context */}
      <motion.div
        className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-lg border-l-4 border-red-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-2xl font-bold text-red-900 mb-4">開場思考</h2>
        <p className="text-gray-800 mb-4 leading-relaxed">
          前一章我們確立了一個重要真理：每一個思考的基督徒都是神學家。但立即而來的問題是——這是否意味著所有神學都是相等的？一個初信者的神學思考與一位神學博士的思考有區別嗎？一個人受歡迎的宗教觀點是否就一定是好的神學？
        </p>
        <p className="text-gray-800 leading-relaxed">
          本章的答案很明確：<strong>不，不是所有神學都一律平等。</strong>不同的神學有質量上的差別，這取決於多個重要因素。認識這些因素，能幫助我們進行更優質的神學思考。
        </p>
      </motion.div>

      {/* Core Problem */}
      <motion.div
        className="bg-white border-2 border-red-300 p-8 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex gap-3 items-start mb-4">
          <Lightbulb className="w-7 h-7 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-red-900 mb-3">核心洞見</h3>
            <p className="text-gray-800 leading-relaxed">
              神學確實有品質的差別。好的神學和較差的神學在系統性、聖經根據、邏輯一致性和實踐效果上都有明顯不同。承認這點並不否定平信徒的神學價值，而是呼籲所有進行神學思考的人追求卓越。我們應該既尊重各個層次的神學貢獻，又努力提升所有神學思考的品質。
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
        <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
          <Layers className="w-8 h-8 text-orange-600" />
          三個神學層次
        </h2>
        <p className="text-gray-700 mb-8 leading-relaxed">
          神學並非一成不變。從最基礎的日常信仰思考，到最高深的學術研究，存在著三個明顯的層次。每個層次都有其價值，也有其局限。理解這三個層次有助於我們認識到不同神學形式各有其貢獻，同時也激勵我們在自己的層次上追求卓越。
        </p>

        <div className="space-y-6">
          {theologicalLevels.map((level, index) => (
            <motion.div
              key={level.id}
              className="border rounded-lg overflow-hidden bg-white shadow-sm"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25 + index * 0.1 }}
            >
              <div className="px-6 py-4 bg-gradient-to-r from-orange-100 to-amber-100">
                <h4 className="text-lg font-bold text-gray-800">{level.title}</h4>
                <p className="text-sm text-gray-600 italic">{level.subtitle}</p>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <p className="text-gray-700 leading-relaxed">{level.description}</p>
                </div>

                <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-400">
                  <p className="text-gray-700 leading-relaxed text-sm">{level.details}</p>
                </div>

                <div>
                  <h5 className="font-bold text-gray-800 mb-3">特點：</h5>
                  <ul className="space-y-2">
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
                  <div className="bg-green-50 p-4 rounded">
                    <h5 className="font-bold text-green-900 text-sm mb-2">優點</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {level.strengths.map((s, i) => (
                        <li key={i}>• {s}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-4 rounded">
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
          ))}
        </div>
      </motion.div>

      {/* Quality Assessment */}
      <motion.div
        className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-orange-900 mb-8">衡量神學品質的六個標準</h2>
        <p className="text-gray-800 mb-8 leading-relaxed">
          既然神學有品質的差別，我們如何判斷一個神學思想是「好的」或「較差的」？以下六個標準能幫助我們進行評估。這些標準不是任意的，而是源自於基督教信仰傳統本身的要求。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {qualityCriteria.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-5 rounded-lg border-l-4 border-orange-500 shadow-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 + idx * 0.05 }}
            >
              <h4 className="font-bold text-orange-900 mb-2 text-lg">{item.criterion}</h4>
              <p className="text-gray-700 text-sm mb-2">{item.description}</p>
              <p className="text-gray-600 text-sm italic">{item.detail}</p>
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
        <h2 className="text-2xl font-bold text-gray-800 mb-8">延伸探討</h2>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-3">為什麼神學層次很重要？</h3>
            <p className="text-gray-700 leading-relaxed">
              每一個層次都有其獨特的貢獻，缺一不可。平信徒神學讓信仰與生活相連，提醒我們神學不是抽象的遊戲，而是關乎如何活出信仰；牧職神學將信仰翻譯成信徒能理解和應用的語言，橋接學術與實踐；專業神學提供深度思考和學術嚴謹，防止信仰淪為感情用事或被異端侵蝕。我們不應貶低任何層次，但也應認識到它們的優點和局限。最健康的信仰群體是有人在各個層次進行卓越的神學思考。
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-3">層次之間的張力</h3>
            <p className="text-gray-700 leading-relaxed">
              有時不同層次的神學會產生張力。例如，學術神學可能看起來脫離實踐，而平信徒神學可能缺乏深度。有些人可能說「我不需要複雜的神學，我只要聖經」，而另一些人則認為「沒有學術訓練的神學是危險的」。關鍵是理解這些張力的源頭，並在各層次之間尋求平衡。真理既需要在象牙塔中被深入探討，也需要在廚房餐桌上被實踐應用。兩者都很重要。
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-3">神學發展的持續性</h3>
            <p className="text-gray-700 leading-relaxed">
              一個人的神學不必永遠停留在一個層次。一位平信徒可以通過學習和反思逐漸進入更深層的神學思考。一位神學博士也應保持與平信徒信仰的連接，否則就有失去信仰根基的危險。神學層次不是等級制度，而是邀請我們不斷成長的指標。無論你在哪個層次，都可以追求在該層次上的卓越，同時也可以嘗試向更深層次邁進。
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-3">質而非量</h3>
            <p className="text-gray-700 leading-relaxed">
              令人遺憾的是，不好的神學時常比好的神學更引人注目。受歡迎不等於真實，聲音大不等於內容深。許多暢銷的「神學」書籍實際上充滿了淺薄的想法或甚至是異端思想。評估神學的品質不能基於傳播廣度、受歡迎程度或媒體曝光，而應基於聖經根據、邏輯嚴謹和屬靈深度。我們需要培養批判性的思考能力，不要被流行所迷惑。
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-3">質量與謙卑的關係</h3>
            <p className="text-gray-700 leading-relaxed">
              追求高質量的神學不應導致驕傲。恰恰相反，更深入地理解神的真理應該使我們更謙卑，更認識到自己的有限和需要。最好的神學家往往也是最謙卑的人，因為他們越認識上帝，就越看到自己的渺小。好的神學應該帶來謙卑、愛心和對他人的尊重，而不是驕傲和論戰的精神。
            </p>
          </div>
        </div>
      </motion.div>

      {/* Reflection Questions */}
      <motion.div
        className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-orange-900 mb-8">反思問題</h2>
        <div className="space-y-5 text-gray-800">
          <div className="flex gap-3 p-4 bg-white rounded border-l-4 border-orange-400">
            <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold mb-2">我當前主要在進行哪一種層次的神學思考？</p>
              <p className="text-sm text-gray-600">這能幫助你認識自己的位置，並思考你是否渴望在深度上有所成長。</p>
            </div>
          </div>
          <div className="flex gap-3 p-4 bg-white rounded border-l-4 border-orange-400">
            <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold mb-2">我如何能使我當前層次的神學思考更優質？</p>
              <p className="text-sm text-gray-600">無論你在哪個層次，都有提升的空間。思考具體的步驟。</p>
            </div>
          </div>
          <div className="flex gap-3 p-4 bg-white rounded border-l-4 border-orange-400">
            <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold mb-2">在我的信仰群體中，哪一個神學層次被最強調？這帶來了什麼益處或偏差？</p>
              <p className="text-sm text-gray-600">有些教會過度強調學術神學而忽視實踐；有些則反之。思考這對信仰群體的影響。</p>
            </div>
          </div>
          <div className="flex gap-3 p-4 bg-white rounded border-l-4 border-orange-400">
            <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold mb-2">我認識的人中，誰在進行高質量的神學思考？他們的特點是什麼？</p>
              <p className="text-sm text-gray-600">從他們身上學習，看看他們如何應用六個品質標準。</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Practical Guidance */}
      <motion.div
        className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
      >
        <h2 className="text-2xl font-bold text-red-900 mb-8 flex items-center gap-2">
          <Zap className="w-6 h-6" />
          具體實踐方針
        </h2>

        <div className="space-y-5">
          {[
            {
              num: 1,
              title: '評估你的神學來源',
              desc: '列出在你的神學中最有影響力的五個來源：書籍、講道、個人經驗、傳統、網絡等。對每一個來源評估：它是否符合六個品質標準？它的神學立場是什麼？它的假設是什麼？',
            },
            {
              num: 2,
              title: '學習其他層次的方法',
              desc: '如果你主要在一個層次進行神學思考，嘗試學習其他層次的方法。例如，平信徒可以閱讀一些學術文章來擴展視野；學者可以更多地與平信徒對話來保持腳踏實地。',
            },
            {
              num: 3,
              title: '建立評估習慣',
              desc: '當你聽到一個神學觀點時，立即問自己：這有聖經根據嗎？這符合教會傳統嗎？這在邏輯上站得住腳嗎？這被生活經驗驗證了嗎？這面向當代需要嗎？這是平衡的嗎？',
            },
            {
              num: 4,
              title: '尋求多角度的反饋',
              desc: '把你的神學想法與信任的人分享——來自不同背景和層次的人。他們的回應能幫助你看到盲點。一個初信者的疑問可能會提醒你某個假設值得重新檢驗。',
            },
            {
              num: 5,
              title: '持續學習和成長',
              desc: '無論你在哪個層次，都要持續提升。讀書、參加研討會、參與討論，不斷豐富你的神學思考。記住，最好的神學家永遠是學生的心態。',
            },
            {
              num: 6,
              title: '將神學付諸實踐',
              desc: '最後也最重要的，讓你的神學思考導向生活的改變。如果一個信仰真理沒有改變你的行為、決定或人際關係，那麼無論它多麼學術精湛，它也沒有達到神學的真正目的。',
            },
          ].map((item) => (
            <motion.div
              key={item.num}
              className="flex gap-4 p-5 bg-white rounded border-l-4 border-orange-500"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.57 + item.num * 0.04 }}
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
        <h2 className="text-2xl font-bold mb-6">本章要點整理</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <span>神學確實有品質的差別，不是所有神學都一律平等</span>
          </li>
          <li className="flex gap-3">
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <span>三個主要的神學層次：平信徒、牧職、專業神學，各有優點和局限</span>
          </li>
          <li className="flex gap-3">
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <span>六個品質評估標準：聖經根據、傳統、理性、經驗、時代相關、整全性</span>
          </li>
          <li className="flex gap-3">
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <span>受歡迎程度和品質無必然聯繫；評估需要慎重思考和應用標準</span>
          </li>
          <li className="flex gap-3">
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <span>每一層次都有價值，但可以追求在自己層次上進行卓越的神學思考</span>
          </li>
          <li className="flex gap-3">
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <span>質量與謙卑相連——最好的神學帶來謙卑和愛心，而不是驕傲</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
