import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Eye, BookOpen, Star } from 'lucide-react';

export default function Book38Home() {
  const [showPreface, setShowPreface] = useState(true);
  const [showToc, setShowToc] = useState(true);

  const chapters = [
    '第一章　誰是聖靈？',
    '第二章　與我同行',
    '第三章　揚起船帆',
    '第四章　心中的哀嘆',
    '第五章　救恩的確據',
    '第六章　平息一切混亂',
    '第七章　如何聆聽神的聲音',
    '第八章　點燃靈魂',
    '第九章　滴滿脂油的路徑',
    '第十章　活水湧流',
    '第十一章　放膽講論神的道',
    '第十二章　釋放你的潛力',
    '第十三章　讓枯骨得著氣息',
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* 書名區 */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">
          隨時的幫助
        </h1>
        <h2 className="text-xl font-semibold text-gray-600 mb-1">在疲憊的日子裡倚靠聖靈恢復活力</h2>
        <div className="inline-block bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-xl px-6 py-3">
          <p className="text-teal-800 font-semibold">陸可鐸（Max Lucado）　著</p>
        </div>
      </div>

      {/* 書本簡介 */}
      <div className="mb-6 bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <Eye className="w-5 h-5 text-teal-700 flex-shrink-0" />
          <h3 className="font-bold text-teal-800">關於本書</h3>
        </div>
        <p className="text-gray-700 leading-relaxed mb-3">
          《隨時的幫助》是國際暢銷書作家陸可鐸（Max Lucado）探討聖靈位格與工作的著作。全書以他一貫溫暖詩意、貼近生活的敘事風格，帶領讀者從「誰是聖靈？」出發，依序談到與聖靈同行、揚起信心的船帆、聖靈在軟弱中的代求、救恩的確據、聖靈平息心中的混亂、如何聆聽神的聲音、聖靈如火煉淨生命、聖靈的膏抹、活水江河的復興、放膽講論神的道、屬靈恩賜的釋放，最終以「讓枯骨得著氣息」的呼召作結——邀請每一位在疲憊日子裡的讀者，重新認識並倚靠這位「隨時的幫助」。
        </p>
        <p className="text-gray-700 leading-relaxed">
          全書穿插大量真實的生活故事與見證（包括作者自身牧會生涯中經歷的疲憊與更新），語氣坦率溫暖，將聖經對聖靈的教導轉化為貼近日常生活的具體提醒，適合個人靈修或小組討論使用。
        </p>
      </div>

      {/* 序言 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => setShowPreface(!showPreface)}
          className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">序</span>
          </div>
          {showPreface ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {showPreface && (
          <div className="p-5 bg-white space-y-3">
            <p className="text-gray-700 leading-relaxed">
              完整的序言內容，請見獨立頁面「序」，其中以一段登山健行的比喻，說明我們常常獨自筋疲力盡地跋涉，卻不知道其實有一位隨時願意帶領、分擔重擔的嚮導。
            </p>
          </div>
        )}
      </div>

      {/* 目錄 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => setShowToc(!showToc)}
          className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">目錄</span>
          </div>
          {showToc ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {showToc && (
          <div className="p-5 bg-white">
            <ul className="space-y-2">
              {chapters.map((c, i) => (
                <li key={i} className="flex items-start gap-2 border-l-4 border-teal-400 pl-4 py-1">
                  <span className="text-gray-700">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
