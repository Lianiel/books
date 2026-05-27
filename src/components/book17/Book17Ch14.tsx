import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Search, HelpCircle, Check } from 'lucide-react';

export default function Book17Ch14() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">第十四章</h1>
        <h2 className="text-xl font-semibold text-gray-700">追求成就或追求愛人</h2>
        <p className="text-sm text-gray-500 mt-1">哥林多前書 十三1-13</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">一、愛超越一切恩賜（十三1-3）</h4>
              <p className="text-gray-700 leading-relaxed">保羅以誇張的語氣列舉最令人羨慕的恩賜：萬人的方言和天使的話語、先知講道和各樣奧秘、全備的信、賙濟窮人、捨己身。然而若沒有愛，這一切都是「鳴的鑼、響的鈸」，什麼都算不得，也沒有益處。愛是一切恩賜運作的核心動力，沒有愛，最偉大的恩賜也失去意義。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">二、愛的行動（十三4-7）</h4>
              <p className="text-gray-700 leading-relaxed">保羅列出愛的積極表現（恒久忍耐、有恩慈、喜歡真理、凡事包容信望忍耐）和消極面（不嫉妒、不自誇、不張狂、不作害羞的事、不求自己益處、不輕易發怒、不計算人的惡、不喜歡不義）。哥林多教會的諸多問題，恰恰是把這些特點倒置了——他們嫉妒結黨、自高自大、不顧他人。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">三、愛是永恆的（十三8-13）</h4>
              <p className="text-gray-700 leading-relaxed">方言、先知講道、知識都有時間限制，「那完全的來到，這有限的必歸於無有」。愛卻是永不止息。保羅以孩子長大和面對鏡子的比喻，說明恩賜是成長過程中的裝備，不是終極目的。在信、望、愛三者中，愛是最大的——因為主再來後，信和望都已完成，惟有愛仍然持續。</p>
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
              <h4 className="font-semibold text-indigo-700 mb-2">「賙濟窮人」也可以沒有愛？</h4>
              <p className="text-gray-700 leading-relaxed">保羅在十三章3節說，即使「將所有的賙濟窮人、捨己身叫人焚燒」，若沒有愛，也沒有益處。這令人震驚的陳述指出：善行的外在形式，可以完全脫離愛的動機。賙濟可以是為了名聲，捨己可以是為了自我滿足感。愛是動機，不是行動本身；缺乏愛的善行，對做善行的人本身毫無裨益。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">愛是動詞，不是感覺</h4>
              <p className="text-gray-700 leading-relaxed">保羅在十三章4-7節描述愛時，用的都是動詞（忍耐、有恩慈），不是形容詞（溫柔的、善良的）。這說明保羅的「愛」（agape）不是一種感情狀態，而是一系列持續的選擇和行動。你可以在沒有強烈感情的情況下選擇愛——對人「恒久忍耐」、「不計算人的惡」、「不求自己的益處」。愛是意志的行動。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">愛的永恆性與恩賜的暫時性</h4>
              <p className="text-gray-700 leading-relaxed">保羅說「那完全的來到，這有限的必歸於無有」。恩賜是暫時的工具，為信徒在今世的事奉服務；愛是永恆的特質，在神的國中繼續存在。這讓信徒重新排序優先順序：在今世花多少力氣在恩賜上，又花多少在愛的培養上？若恩賜無法帶過去，愛卻可以，那生命最值得投資的是什麼？</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">哥林多教會的核心病症</h4>
              <p className="text-gray-700 leading-relaxed">作者指出，哥林多前書一至十一章所描述的所有問題（結黨、性罪惡、打官司、聖餐失序、恩賜爭鬧），其症結都可以用十三章的愛心缺乏來解釋。嫉妒分爭是不愛；縱容罪惡是不愛（沒有真正關心對方的靈魂）；聖餐貧富分化是不愛。整卷哥林多前書的診斷書，其實就是「沒有愛」。</p>
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
              <p className="text-gray-700">保羅說即使有最偉大的恩賜，若沒有愛也是虛空的。回顧你的服事，有多少是在愛心中行事，有多少是出於習慣、責任感，或渴望被認可？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">逐一看愛的特質（恒久忍耐、不嫉妒、不計算人的惡……），你在哪一方面最需要成長？這一點在你的人際關係中具體表現為什麼？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">「愛是意志的行動，不只是感情」——在你最難相處的那段關係中，你是否曾選擇以行動去愛，即使感情不在？這讓你有什麼體驗？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">愛是永恆的，恩賜是暫時的——這個真理是否改變了你對時間和精力投資的優先次序？你是否願意為愛心的成長投入與追求恩賜同等的努力？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">若你把十三章4-7節當作「愛的鏡子」，對照你目前最重要的一段關係（家人、同工、朋友），誠實評估：你在這段關係中有多少愛，有多少是缺乏的？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 愛的自我評估</h4>
              <p className="text-gray-700 mb-2">拿出十三章4-7節，把「愛」換成你自己的名字，重新朗讀：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>「[你的名字] 是恒久忍耐的……[你的名字] 不嫉妒……」</li>
                <li>哪幾句讓你感到不安或汗顏？這就是你最需要成長的地方</li>
                <li>針對其中一個弱點，本週刻意練習那個愛的特質</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 為最難相處的人祈禱</h4>
              <p className="text-gray-700 mb-2">想想你生活中最難相處、最讓你產生「不愛的念頭」的那個人：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>每天用5分鐘為他/她代禱，求神祝福他/她</li>
                <li>這一週對他/她做一件具體善意的行動</li>
                <li>觀察持續的為他代禱，如何改變你對他的感受</li>
              </ul>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-sm text-green-800 font-medium mb-1">本週禱告</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">
                「主，讓我不只追求恩賜的成就，更追求愛的成長。讓我明白，沒有愛，一切服事都是空的。教導我以意志去愛，以行動去愛，即使感情不在的時候。讓愛成為我生命中最真實的特質，因為唯有愛是永恆的。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
