import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book17Ch12() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    exploration: true,
    questions: true,
    practice: true,
  });

  const toggleSection = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">第十二章</h1>
        <h2 className="text-xl font-semibold text-gray-700">敬拜神，尊重他人</h2>
        <p className="text-sm text-gray-500 mt-1">哥林多前書 十一2-34</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">一、蒙頭的問題（十一2-16）</h4>
              <p className="text-gray-700 leading-relaxed">哥林多教會的女信徒在聚會中禱告或說預言時不蒙頭，保羅以「創造秩序」（神—基督—男人—女人）為根據指出這是「羞辱頭」。蒙頭在當時文化中象徵對創造秩序的尊重，以及在敬拜中認識自己的位置。保羅的重點不在於女性的「劣等」，而在於敬拜中的「秩序」和「尊重」。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">二、聖餐中的貧富問題（十一17-34）</h4>
              <p className="text-gray-700 leading-relaxed">哥林多教會聚餐時，富有的人先吃喝，貧窮的人挨餓等候——造成了嚴重的社會分裂。保羅嚴厲批評：「你們聚會不是吃主的晚餐了。」他重申聖餐的起源（主耶穌設立之夜），指出吃主的餅喝主的杯是「宣告主的死，直到主來」。不分辨主的身體（指教會群體），就是干犯主的身體和血，因此有些人軟弱患病，甚至死去。</p>
            </div>
          </div>
        )}
      </div>

      {/* 延伸探討 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('exploration')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">延伸探討</span>
          </div>
          {expanded['exploration'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['exploration'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">蒙頭爭論的文化脈絡</h4>
              <p className="text-gray-700 leading-relaxed">蒙頭的問題對現代讀者最為困惑。這段經文最好理解為：保羅在強調「在敬拜中尊重文化符號所代表的秩序」，而非制定普世的蒙頭命令。當時哥林多的已婚婦女不蒙頭，等同於向旁觀者宣示「我拒絕接受創造秩序的安排」。核心原則是敬拜中的秩序和謙卑，而非蒙頭布料本身。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">聖餐的群體神學</h4>
              <p className="text-gray-700 leading-relaxed">保羅對聖餐的描述融合了歷史性（紀念主的死）、末世性（宣告直到主來）和群體性（不分辨主的身體）三個維度。「不分辨主的身體」不只指餅的神聖，更指對教會群體（基督的身體）的不尊重——讓貧窮弟兄挨餓，就是不尊重基督的身體。因此聖餐與社會公義密不可分。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">敬拜與群體不可分割</h4>
              <p className="text-gray-700 leading-relaxed">這章的兩個問題（蒙頭和聖餐）都指向同一個核心：敬拜不是個人與神之間的私事，而是在群體中發生的。敬拜的態度（蒙頭）影響旁觀者對神的印象；聖餐的行為（先吃先喝）傷害群體的團結。真正的敬拜，必然顧及在場的每一個人。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「審判自己」的意義</h4>
              <p className="text-gray-700 leading-relaxed">保羅在十一章31-32節說：「我們若是先分辨自己，就不至於受審判了。」這個「自我審判」不是懊悔式的自責，而是在領聖餐前誠實地省察：我的心是否與主對準？我與弟兄姊妹的關係是否正常？這種預先的省察，讓聖餐成為更新和和好的時刻。</p>
            </div>
          </div>
        )}
      </div>

      {/* 反思問題 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">反思問題</span>
          </div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && (
          <div className="p-5 bg-white space-y-3">
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">1.</span>
              <p className="text-gray-700">你如何理解「敬拜中的秩序和謙卑」這個原則？在你的教會文化中，有沒有信徒在敬拜時的態度或行為，讓他人難以感受到神的同在？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">哥林多的聖餐成了貧富分化的場合，不再是共同領受恩典的時刻。你的教會在聖餐或愛筵中，有沒有類似的社會分化現象？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">「宣告主的死，直到主來」——你每次領聖餐時，這個宣告的意義對你是生動的，還是已成了習慣性的儀式？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">保羅說「不分辨主的身體」包括不尊重教會群體。你是否在教會生活中有漠視某些群體（老人、窮人、外來者）的傾向？這讓你有什麼提醒？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">「先分辨自己，就不至於受審判」——你在領聖餐前通常如何省察？有沒有需要和好的關係，是你在領聖餐前應該先處理的？</p>
            </div>
          </div>
        )}
      </div>

      {/* 具體實踐方針 */}
      <div className="mb-6 border border-green-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('practice')} className="w-full px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">具體實踐方針</span>
          </div>
          {expanded['practice'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['practice'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 在敬拜前的省察習慣</h4>
              <p className="text-gray-700 mb-2">在下次主日崇拜或領聖餐前，提前5-10分鐘：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>安靜問自己：「我今天來敬拜的心態是什麼？」</li>
                <li>問：「與我同在的弟兄姊妹中，有沒有我需要關心或和好的？」</li>
                <li>把這個準備的時間當作進入神同在的預備，而不是趕快坐下</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 敬拜與社群關懷並行</h4>
              <p className="text-gray-700 mb-2">本週在教會活動中，主動關注可能被忽視的人：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>找一位你平時較少互動的弟兄/姊妹主動打招呼、關心他/她的近況</li>
                <li>在愛筵或聚餐中，注意有沒有人獨自一人坐著</li>
                <li>記住：尊重「基督的身體」，從尊重在你旁邊的那個人開始</li>
              </ul>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-sm text-green-800 font-medium mb-1">本週禱告</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">
                「主，讓我的敬拜不只是向祢，也是向在我旁邊的每一個弟兄姊妹負責任。讓我在每次領聖餐前，先省察我與你的關係和與人的關係。讓我記住：聖餐宣告祢的死，也宣告我們在祢身體中的聯合。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
