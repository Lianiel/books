import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch4() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第四章</h1>
        <h2 className="text-xl font-semibold text-gray-700">生命的真光</h2>
      </div>

      {/* 正文 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">正文</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、光的起源</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記一章3節：「神說：要有光，就有了光。」這是神在創造過程中說的第一句話，也是創造命令（Divine Fiat）的第一個例子：神用話語從無中帶出有形的受造物。值得注意的是，這個「光」在第一日（一3-5）被創造，而「光體」（太陽、月亮、星星）要到第四日（一14-19）才被創造。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這個明顯的「先後順序」在許多讀者心中引發問題：沒有太陽，光從哪裡來？這個問題對現代科學讀者尤其敏感。有幾種主要的解釋進路：
              </p>
              <div className="space-y-3 mb-4">
                {[
                  { title: '神的榮光說', desc: '第一日的光可能是神自身榮光的直接彰顯（如啟示錄二十一章23節說新天新地不需要太陽，「因為有神的榮耀光照它」）。在沒有太陽的情況下，神的榮光本身就是光的來源。' },
                  { title: '預備性光說', desc: '這個光是一種特殊的、暫時性的光源，神特為創造前三日提供，第四日太陽創成後才被太陽光取代。' },
                  { title: '神學先於科學說', desc: '創世記的六日記述是神學框架，不是精確的時間序列。「光先於太陽」的神學意涵是：光不依賴太陽，太陽只是光的一個次要載體；真正的光源是神本身。' },
                ].map((item, i) => (
                  <div key={i} className="bg-indigo-50 rounded-lg p-3 border border-indigo-100">
                    <span className="font-semibold text-indigo-800">{i + 1}. {item.title}</span>
                    <p className="text-gray-700 text-sm mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">
                無論採用哪種解釋，神學要點是清楚的：<strong>光的最終來源不是太陽，而是神</strong>。約翰福音一章9節稱基督是「那光是真光，照亮一切生在世上的人」；約翰一書一章5節說「神就是光」。光在聖經中從創世記到啟示錄，始終是神的屬性的彰顯。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、光暗分別的三種含義</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「神看光是好的，就把光暗分開了。」（創一4）這個「分開」（בָּדַל，badal）的行動在創造記述中具有深刻含義：
              </p>
              <div className="space-y-3">
                {[
                  { title: '物質性的分別', desc: '最基本的層面：光明與黑暗被分隔為兩個不同的時段（白晝與黑夜），建立了時間的基本結構。這是物理現實的基礎。' },
                  { title: '象徵性的分別', desc: '在聖經神學中，光與暗的分別象徵了善與惡、聖潔與罪污、神的國與撒但國度的根本對立。神的創造從第一日起就建立了一個不可跨越的界線：光（神的屬性）與暗（邪惡的象徵）不能共存。這個象徵性的界線在救贖歷史中不斷呈現：神的子民蒙召「走在光中」（約一7），「不要與那無益的暗事相交」（弗五11）。' },
                  { title: '末世性的分別', desc: '最終的光暗分別將在末世發生：義人與惡人的永久分離，天堂的永恆光明與地獄的「外面的黑暗」（太八12）。創世記一章的光暗分別，是這個終極分別的預告和象徵。' },
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-indigo-400 pl-4 py-1 mb-2">
                    <span className="font-semibold text-indigo-800">{i + 1}. {item.title}</span>
                    <p className="text-gray-700 text-sm mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、時間的起點</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「有晚上、有早晨，這是頭一日。」（創一5）這是聖經中時間計算方式的建立：「晚上、早晨」的順序表明，猶太曆法是從日落開始算起新的一天（而非從午夜或黎明），這個傳統在猶太安息日的守法中保留至今（從星期五日落到星期六日落）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                更重要的神學意涵是：<strong>時間本身是受造的</strong>。在神說「要有光」之前，沒有時間；時間隨著第一日的開始而開始。這意味著：
              </p>
              <ul className="space-y-2 ml-4">
                {[
                  '神在時間之外（神是永恆的，不受時間限制）',
                  '「在起初之前」不是時間的問題，而是超越時間的永恆',
                  '末世「時代的終結」不是虛無，而是進入神的永恆',
                  '物理時間有其起點，也有其終點——這是創世記給予的科學神學啟示',
                ].map((point, i) => (
                  <li key={i} className="flex gap-2 text-gray-700 text-sm">
                    <span className="text-indigo-600 flex-shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">肆、科學與信仰——光的奧秘</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                現代物理學對光有深刻的研究：光速（每秒約三十萬公里）是宇宙中的「速度極限」；根據愛因斯坦的相對論，對於以光速運動的物體，時間停止、質量無限大。量子物理則顯示光具有波粒二象性——同時是波（電磁波）和粒子（光子），在被觀測之前處於「疊加態」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這些科學發現並不與創世記矛盾，反而可以進一步加深我們對「神說要有光，就有了光」這句話的敬畏：神創造的不只是「可見光」，而是整個電磁波譜（包括我們肉眼看不見的紫外線、X射線、無線電波），也創造了光速這個宇宙的根本常數。物理學家發現，如果光速有微小的改變，宇宙的化學結構、恆星的形成和維持、生命的可能性都會完全崩潰——這正是「精細調校宇宙」論證的一部分，指向一個有位格的設計者。
              </p>
              <p className="text-gray-700 leading-relaxed">
                信仰不是反科學的，而是對科學所揭示的自然奇蹟給出終極解釋的框架：光的奧秘指向那說「我是世界的光」的基督（約八12），而科學對光的研究，可以成為對創造者更深敬拜的起點。
              </p>
            </div>

          </div>
        )}
      </div>

      {/* 重點整理 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-sky-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">重點整理</span>
          </div>
          {expanded['summary'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['summary'] && (
          <div className="p-5 bg-white">
            <ul className="space-y-3">
              {[
                '第一日的光（創一3）早於第四日的「光體」（太陽月亮），神學要點是：光的最終來源不是太陽，而是神自身；「神就是光」（約一5）。',
                '「神看光是好的，就把光暗分開了」——光暗分別有三層含義：物質性（晝夜時間）、象徵性（善惡界線）、末世性（義人惡人的永久分離）。',
                '「有晚上、有早晨，這是頭一日」——時間本身是受造的，從第一日光被創造開始計算；猶太曆以日落開始新的一天，源於此處。',
                '時間有其起點（創造時），也有其終點（末世）；神在時間之外，是永恆的；末世「時代的終結」不是虛無，而是進入神的永恆。',
                '現代物理學對光的研究（光速常數、精細調校宇宙）不與信仰矛盾，反而指向有位格的設計者，可成為對創造者更深敬拜的基礎。',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-gray-700 leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* 分享題目 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-yellow-50 hover:from-amber-100 hover:to-yellow-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">分享題目</span>
          </div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && (
          <div className="p-5 bg-white space-y-4">
            {[
              '「神就是光」（約一5），「耶穌是世界的光」（約八12）——這對你的信仰生活有什麼實際的意義？在你生命的哪些「黑暗」地方，你最需要這個「光」的介入？',
              '光暗分別在末世指向義人惡人的永久分離。你如何看待這個末世的審判？它是讓你感到恐懼，還是激勵你更積極地傳福音？為什麼？',
              '本章提到時間本身是受造的，神在時間之外。這個認識如何影響你面對時間壓力、人生短暫、或對「永恆」的理解？',
            ].map((q, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0 text-lg">{i + 1}.</span>
                <p className="text-gray-700 leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
