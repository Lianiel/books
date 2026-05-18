import React from 'react';
import { Heart, Zap, Users, Lightbulb, Target, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Book15Ch8() {
  const principles = [
    {
      id: 'relevance',
      title: '相關性原則',
      subtitle: '神學必須回應現實生活',
      icon: Target,
      content: '神學不是象牙塔的抽象思辨，而是對實際生活問題的回應。好的神學幫助信徒在日常生活中活出信仰。'
    },
    {
      id: 'integration',
      title: '整合原則',
      subtitle: '信仰與生活的統一',
      icon: Zap,
      content: '神學應該整合信仰的各個層面（教義、倫理、靈性），使信仰對生活有整體的影響。'
    },
    {
      id: 'incarnational',
      title: '道成肉身原則',
      subtitle: '真理必須落實於具體處境',
      icon: Heart,
      content: '如同聖言道成肉身進入人類歷史，神學也必須道成肉身進入具體的文化、社群、歷史處境。'
    },
    {
      id: 'practical',
      title: '實踐性原則',
      subtitle: '知識導向行動',
      icon: Lightbulb,
      content: '神學的目標不是增加知識，而是轉變生命。好的神學應該導向更好的行為和更深的靈性。'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg p-8 mb-8">
        <h1 className="text-4xl font-bold text-rose-900 mb-2">神學生活化</h1>
        <p className="text-lg text-rose-700">第八章 ── 神學如何轉變生命與實踐</p>
      </div>

      {/* Opening */}
      <motion.div
        className="mb-8 bg-gradient-to-r from-rose-100 to-pink-100 p-6 rounded-lg"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h2 className="text-2xl font-bold text-rose-900 mb-4">神學的最終目的</h2>
        <p className="text-rose-800">
          神學最終不是為了滿足知識的好奇心，而是為了轉變生命。一個人可能在理論上很懂神學，但在生活中完全不像基督徒；這表示他的神學還沒有真正生活化。
        </p>
      </motion.div>

      {/* The Gap Problem */}
      <motion.div
        className="mb-8 bg-yellow-50 border border-yellow-200 p-6 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <h3 className="text-xl font-bold text-yellow-900 mb-4">認識與實踐的鴻溝</h3>
        <p className="text-yellow-800 mb-3">
          為什麼很多信徒「理論上相信」但「實踐上懷疑」？
        </p>
        <div className="space-y-2 text-yellow-800">
          <p>• 他們知道上帝愛他們，卻在痛苦時感到被遺棄</p>
          <p>• 他們相信永恆生命，卻被死亡的恐懼捆綁</p>
          <p>• 他們同意寬恕的教導，卻在實際中仍握著怨恨</p>
        </div>
        <p className="mt-3 italic text-yellow-900 font-semibold">
          這個鴻溝說明神學需要不僅僅是信念的系統，而是生命轉變的動力。
        </p>
      </motion.div>

      {/* Four Key Principles */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-rose-900 mb-6">神學生活化的四大原則</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={principle.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white p-4 rounded-lg border-2 border-rose-200 h-full">
                  <div className="flex items-start gap-3 mb-3">
                    <Icon className="w-6 h-6 text-rose-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-rose-900">{principle.title}</h4>
                      <p className="text-sm text-gray-600">{principle.subtitle}</p>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-rose-200">
                    <p className="text-gray-700 text-sm">{principle.content}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Applications Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-rose-900 mb-6">神學生活化的具體應用</h2>

        {/* Application 1: Personal Spirituality */}
        <motion.div
          className="mb-6 border rounded-lg overflow-hidden bg-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="px-6 py-4 bg-rose-100">
            <div className="flex items-center gap-3">
              <Heart className="w-5 h-5 text-rose-600" />
              <span className="font-bold text-rose-900">應用一：個人靈性生活</span>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <p className="text-gray-700">
              神學對禱告、默想、靈修有深刻影響。例如：
            </p>
            <div className="bg-rose-50 p-4 rounded border-l-4 border-rose-500">
              <p className="text-gray-700 mb-2">
                <strong>對三位一體的理解</strong>如何改變禱告？
              </p>
              <p className="text-gray-700">
                理解聖父、聖子、聖靈各自的角色，幫助我們在禱告中更完整地對向上帝——既向父禱告，也因聖子的中保，又靠聖靈的幫助。
              </p>
            </div>
          </div>
        </motion.div>

        {/* Application 2: Ethical Living */}
        <motion.div
          className="mb-6 border rounded-lg overflow-hidden bg-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="px-6 py-4 bg-blue-100">
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-blue-600" />
              <span className="font-bold text-blue-900">應用二：倫理生活</span>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <p className="text-gray-700">
              對神的理解深刻影響倫理判斷：
            </p>
            <div className="space-y-3">
              <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
                <p className="text-gray-700 mb-2">
                  <strong>神是公義與憐憫的上帝</strong>
                </p>
                <p className="text-gray-700">
                  導致我們既維護社會正義（反抗不公），又實踐寬恕與復和（不為己報仇）。
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
                <p className="text-gray-700 mb-2">
                  <strong>人按上帝形象被造</strong>
                </p>
                <p className="text-gray-700">
                  導致我們尊重每個人的尊嚴，反對一切貶低人性的做法（奴隸制、歧視、濫用）。
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Application 3: Community Witness */}
        <motion.div
          className="mb-6 border rounded-lg overflow-hidden bg-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="px-6 py-4 bg-green-100">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-green-600" />
              <span className="font-bold text-green-900">應用三：教會見證</span>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <p className="text-gray-700">
              神學影響教會的見證和宣教策略：
            </p>
            <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
              <h4 className="font-bold text-green-900 mb-2">◆ 社區參與</h4>
              <p className="text-gray-700">
                若相信上帝關心整個被造界和社會正義，教會就會投入扶貧、醫療、教育等社區服事，而非只關注靈魂得救。
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
              <h4 className="font-bold text-green-900 mb-2">◆ 跨文化宣教</h4>
              <p className="text-gray-700">
                對福音本質的理解影響如何向不同文化傳福音——是譯成外族語言卻保留西方表現形式，還是尊重當地文化重新表達福音？
              </p>
            </div>
          </div>
        </motion.div>

        {/* Application 4: Personal Transformation */}
        <motion.div
          className="mb-6 border rounded-lg overflow-hidden bg-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="px-6 py-4 bg-purple-100">
            <div className="flex items-center gap-3">
              <Lightbulb className="w-5 h-5 text-purple-600" />
              <span className="font-bold text-purple-900">應用四：生命轉變</span>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <p className="text-gray-700">
              最根本的應用是個人的生命改變：
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-purple-50 p-3 rounded border-l-4 border-purple-500">
                <p className="text-gray-700 font-bold text-sm mb-1">懼怕 → 信心</p>
                <p className="text-gray-600 text-xs">理解上帝主權帶來平安</p>
              </div>
              <div className="bg-purple-50 p-3 rounded border-l-4 border-purple-500">
                <p className="text-gray-700 font-bold text-sm mb-1">自私 → 犧牲</p>
                <p className="text-gray-600 text-xs">領受恩典激勵無私服事</p>
              </div>
              <div className="bg-purple-50 p-3 rounded border-l-4 border-purple-500">
                <p className="text-gray-700 font-bold text-sm mb-1">內疚 → 赦免</p>
                <p className="text-gray-600 text-xs">體驗十字架的拯救帶來釋放</p>
              </div>
              <div className="bg-purple-50 p-3 rounded border-l-4 border-purple-500">
                <p className="text-gray-700 font-bold text-sm mb-1">虛空 → 目標</p>
                <p className="text-gray-600 text-xs">發現上帝國的永恆目的</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Reflection & Practice */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-amber-900 mb-6">反思與具體實踐</h2>

        <div className="mb-6">
          <h3 className="text-lg font-bold text-amber-900 mb-4">❓ 反思問題</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded border-l-4 border-amber-400">
              <p className="text-amber-900 mb-2">
                <strong>你的某個神學信念真的改變了你的生活嗎？</strong>
              </p>
              <p className="text-gray-700 text-sm">
                例如，信仰上帝的赦免是否真的自由了你？信仰永恆生命是否改變了你的優先次序？
              </p>
            </div>

            <div className="bg-white p-4 rounded border-l-4 border-amber-400">
              <p className="text-amber-900 mb-2">
                <strong>你生活中有哪些地方「認識」和「實踐」之間還有鴻溝？</strong>
              </p>
              <p className="text-gray-700 text-sm">
                例如，知道應該寬恕但做不到；相信上帝但在危機時懷疑。
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
                <p className="font-bold text-amber-900">審視你的信念</p>
                <p className="text-gray-700 text-sm">列出你主要的神學信念（如上帝的愛、救恩、永恆生命等），然後檢查這些信念如何（或是否）影響你的日常生活。</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <div>
                <p className="font-bold text-amber-900">跨越認識-實踐的鴻溝</p>
                <p className="text-gray-700 text-sm">對那些你相信但未能實踐的信念，尋求幫助（禱告、屬靈輔導、靈命塑造）。</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <div>
                <p className="font-bold text-amber-900">融入教會共同體</p>
                <p className="text-gray-700 text-sm">與其他信徒分享你的掙扎和見證；在教會生活中實踐信仰，而非獨自追求。</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <div>
                <p className="font-bold text-amber-900">允許逐漸轉變</p>
                <p className="text-gray-700 text-sm">認識到靈性成長是過程，不是一蹴而就。信任聖靈在你心裡的工作，而非期望一夜間完全改變。</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Summary */}
      <motion.div
        className="bg-gradient-to-r from-rose-900 to-pink-900 text-white p-8 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold mb-4">本章小結</h2>
        <div className="space-y-3">
          <p>
            ✓ <strong>神學的終極目標：</strong>不是知識，而是生命轉變。
          </p>
          <p>
            ✓ <strong>四大原則：</strong>相關性、整合性、道成肉身、實踐性。
          </p>
          <p>
            ✓ <strong>具體應用：</strong>靈性生活、倫理決定、教會見證、個人轉變。
          </p>
          <p>
            ✓ <strong>實踐要點：</strong>審視信念、跨越鴻溝、融入共同體、允許逐漸改變。
          </p>
        </div>
      </motion.div>
    </div>
  );
}
