import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Target, Users, Map, Heart, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book27Home() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    intro: true,
    model: true,
    outline: true,
    authors: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">人如何改變</h1>
        <h2 className="text-lg font-semibold text-gray-600">How People Change</h2>
        <p className="text-gray-500 mt-1">提姆連恩 & 保羅區普 著｜CCEF 出版</p>
      </div>

      {/* 書本介紹 */}
      <div className="mb-6 border border-emerald-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('intro')} className="w-full px-5 py-3 bg-gradient-to-r from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">書本介紹</span>
          </div>
          {expanded['intro'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['intro'] && (
          <div className="p-5 bg-white space-y-4">
            <p className="text-gray-700 leading-relaxed">
              《人如何改變》是基督教輔導與教育基金會（CCEF）出版的經典靈性成長課程，由提姆連恩（Timothy S. Lane）和保羅區普（Paul David Tripp）合著。本書以紮實的聖經神學為基礎，深入探討真實屬靈改變的本質與過程，是個人靈修、小組學習和輔導訓練的優質教材。
            </p>
            <p className="text-gray-700 leading-relaxed">
              這本書回答了一個核心問題：真正的改變是怎樣發生的？許多基督徒努力嘗試改變，卻發現只是在外表上做出調整，內心深處的掙扎依然存在。本書揭示，真正的改變必須從心出發，透過認識自己、認識神，以及緊緊倚靠基督十字架的恩典，才能產生真實而持久的轉化。
            </p>
            <p className="text-gray-700 leading-relaxed">
              全書分為十二課，以學員本（學習手冊）的形式設計，每課包含：複習與討論、重點與應用（CPR）、主要問題、課程內容、作業、延伸重點和生活實踐。課程採用「炎熱→荊棘→十字架→果實」這個核心模式，幫助學員系統地理解並應用改變的原則。
            </p>
          </div>
        )}
      </div>

      {/* 核心模式 */}
      <div className="mb-6 border border-emerald-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('model')} className="w-full px-5 py-3 bg-gradient-to-r from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Map className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">核心模式：人如何改變</span>
          </div>
          {expanded['model'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['model'] && (
          <div className="p-5 bg-white space-y-4">
            <p className="text-gray-700 leading-relaxed">
              本書的核心是取自耶利米書17:5-10的「人如何改變」模式，以四個元素描述改變的動態過程：
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🌡️</span>
                  <h3 className="font-bold text-orange-700">炎熱（HEAT）</h3>
                </div>
                <p className="text-gray-700 text-sm">我們所處的環境與處境——生活中的壓力、困難、試煉與關係挑戰。炎熱本身不導致罪，但它暴露我們心中真實的渴望與動機。神常用炎熱來帶領我們走向改變。</p>
              </div>
              <div className="bg-red-50 rounded-lg p-4 border border-red-100">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🌿</span>
                  <h3 className="font-bold text-red-700">荊棘（THORNS）</h3>
                </div>
                <p className="text-gray-700 text-sm">我們有罪的回應——當我們遇到炎熱時，從罪性心靈發出的反應。荊棘藪代表否認、逃避、憤怒、膨脹、自甘墮落等有罪的應對方式。這些回應根源於心中對神以外之物的崇拜。</p>
              </div>
              <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">✝️</span>
                  <h3 className="font-bold text-amber-700">十字架（CROSS）</h3>
                </div>
                <p className="text-gray-700 text-sm">基督恩典的供應——十字架給我們新的身分（被稱義、被收納為神的兒女）和新的能力（基督住在我們心裡）。信心與悔改使我們不斷地回到十字架，從中汲取每日生活的力量。</p>
              </div>
              <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🌱</span>
                  <h3 className="font-bold text-emerald-700">果實（FRUIT）</h3>
                </div>
                <p className="text-gray-700 text-sm">屬靈更新的結果——當我們以十字架為中心過每一天，神在我們心中動工，使我們結出美好的果實：真實的悔改、對人的寬恕、謙卑服事、勇敢說真話，以及在困境中的忍耐與盼望。</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 mt-2">
              <p className="text-sm text-gray-600 text-center font-medium">
                🌡️ 炎熱（環境）→ 🌿 荊棘（有罪的回應）→ ✝️ 十字架（恩典）→ 🌱 果實（更新的生命）
              </p>
              <p className="text-xs text-gray-500 text-center mt-1">根據耶利米書17:5-10</p>
            </div>
          </div>
        )}
      </div>

      {/* 課程大綱 */}
      <div className="mb-6 border border-emerald-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('outline')} className="w-full px-5 py-3 bg-gradient-to-r from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">十二課大綱</span>
          </div>
          {expanded['outline'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['outline'] && (
          <div className="p-5 bg-white">
            <div className="space-y-2">
              {[
                { num: 1, title: '這是神要帶領你去的地方', tag: '基礎篇', color: 'bg-emerald-100 text-emerald-700' },
                { num: 2, title: '是的，你是基督所愛的人', tag: '基礎篇', color: 'bg-emerald-100 text-emerald-700' },
                { num: 3, title: '改變需要群體的生活', tag: '基礎篇', color: 'bg-emerald-100 text-emerald-700' },
                { num: 4, title: '神眼中的生活，神手中的改變', tag: '基礎篇', color: 'bg-emerald-100 text-emerald-700' },
                { num: 5, title: '現實世界中的真神——炎熱篇（上）', tag: '炎熱篇', color: 'bg-orange-100 text-orange-700' },
                { num: 6, title: '現實世界中真實的你——炎熱篇（下）', tag: '炎熱篇', color: 'bg-orange-100 text-orange-700' },
                { num: 7, title: '什麼事情纏累著你——荊棘篇（上）', tag: '荊棘篇', color: 'bg-red-100 text-red-700' },
                { num: 8, title: '為什麼你會被纏累——荊棘篇（下）', tag: '荊棘篇', color: 'bg-red-100 text-red-700' },
                { num: 9, title: '全新的身分，全新的潛能——十架篇（上）', tag: '十架篇', color: 'bg-amber-100 text-amber-700' },
                { num: 10, title: '十字架與日常生活——十架篇（下）', tag: '十架篇', color: 'bg-amber-100 text-amber-700' },
                { num: 11, title: '內心真實的改變——果實篇（上）', tag: '果實篇', color: 'bg-green-100 text-green-700' },
                { num: 12, title: '令人耳目一新的善果——果實篇（下）', tag: '果實篇', color: 'bg-green-100 text-green-700' },
              ].map(({ num, title, tag, color }) => (
                <div key={num} className="flex items-center gap-3 p-2 rounded hover:bg-gray-50">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm font-bold flex-shrink-0">{num}</span>
                  <span className="text-gray-700 flex-1">{title}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${color} flex-shrink-0`}>{tag}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 作者介紹 */}
      <div className="mb-6 border border-emerald-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('authors')} className="w-full px-5 py-3 bg-gradient-to-r from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">作者介紹</span>
          </div>
          {expanded['authors'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['authors'] && (
          <div className="p-5 bg-white space-y-4">
            <div className="border-l-4 border-emerald-400 pl-4">
              <h4 className="font-bold text-gray-800 mb-1">提姆連恩（Timothy S. Lane）</h4>
              <p className="text-gray-700 text-sm leading-relaxed">基督教輔導與教育基金會（CCEF）前任院長，現任Institute for Pastoral Care執行主任。他擁有豐富的牧養輔導經驗，致力於幫助教會將聖經輔導整合到日常牧養事工中。他的著作以實踐性強、貼近生活著稱。</p>
            </div>
            <div className="border-l-4 border-green-400 pl-4">
              <h4 className="font-bold text-gray-800 mb-1">保羅區普（Paul David Tripp）</h4>
              <p className="text-gray-700 text-sm leading-relaxed">CCEF前任院長，現任Paul Tripp Ministries主席。他是當代最有影響力的聖經輔導師之一，曾在費城威斯敏斯特神學院擔任講師。他的著作《危機時刻》（Instruments in the Redeemer's Hands）等廣受基督徒世界歡迎，以深刻的聖經洞察力和貼近日常生活的應用著稱。</p>
            </div>
            <div className="border-l-4 border-teal-400 pl-4">
              <h4 className="font-bold text-gray-800 mb-1">CCEF（基督教輔導與教育基金會）</h4>
              <p className="text-gray-700 text-sm leading-relaxed">成立於1968年，是美國最重要的聖經輔導培訓機構之一，致力於將聖經真理應用到人們生活中最困難的問題上，提供研究生課程、輔導服務和教育資源。</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
