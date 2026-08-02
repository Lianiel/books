import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Eye, BookOpen, Star } from 'lucide-react';

export default function Book34Home() {
  const [showPreface, setShowPreface] = useState(true);
  const [showToc, setShowToc] = useState(true);

  const parts = [
    {
      part: '第一篇', title: '成長的三個因素',
      chapters: ['第1章　恩典與真理', '第2章　時間'],
    },
    {
      part: '第二篇', title: '與人相連',
      chapters: ['第3章　什麼是相連？', '第4章　當我們不能與人相連時', '第5章　學習相連'],
    },
    {
      part: '第三篇', title: '與人分離',
      chapters: ['第6章　何為界限', '第7章　我們如何發展界限', '第8章　越界', '第9章　當我們沒有界限', '第10章　學習設限'],
    },
    {
      part: '第四篇', title: '分辨善惡',
      chapters: ['第11章　問題在哪裡？', '第12章　當我們不接納善與惡', '第13章　學習同時接受善與惡'],
    },
    {
      part: '第五篇', title: '長大成人',
      chapters: ['第14章　什麼是成人？', '第15章　當我們沒有長大', '第16章　學習長大成人'],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* 書名區 */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-700 to-teal-700 bg-clip-text text-transparent">
          改變帶來醫治
        </h1>
        <h2 className="text-xl font-semibold text-gray-600 mb-1">在祂裡面成長、與人連結、設立界限、分辨善惡、長大成人</h2>
        <div className="inline-block bg-gradient-to-r from-cyan-50 to-teal-50 border border-cyan-200 rounded-xl px-6 py-3">
          <p className="text-cyan-800 font-semibold">亨利·克勞德 博士　著</p>
        </div>
      </div>

      {/* 書本簡介 */}
      <div className="mb-6 bg-gradient-to-r from-cyan-50 to-teal-50 border border-cyan-100 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <Eye className="w-5 h-5 text-cyan-700 flex-shrink-0" />
          <h3 className="font-bold text-cyan-800">關於本書</h3>
        </div>
        <p className="text-gray-700 leading-relaxed mb-3">
          每個星期，作者亨利·克勞德博士都看到基督徒受到情緒上的困擾：憂慮、孤單、關係破碎、怨恨，以及自己不適任之感。教會中一邊的人指責受苦者屬靈不夠、信心不足；另一邊的人則轉向心理學求助，卻不確定這是否符合聖經。本書要指出：你的掙扎，是有符合聖經的解決之道。
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          作者從自己的靈程與專業經驗中，認定了四種需要培養、卻常常缺失的「像神的功能」：與人相連、與人分離（設立界限）、分辨善惡、長大成人。全書按此架構分為五篇十六章，逐一剖析我們在成長中卡住的地方、卡住的原因，以及重新學習、得着醫治的具體技巧，每章並穿插大量真實的輔導案例。
        </p>
        <div className="bg-white rounded-lg p-3 border border-cyan-100">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-cyan-700">與《立界線得自由》的關係：</span>本書作者亨利·克勞德博士也是電子書房第一本書《立界線得自由》（與唐納德·湯森德合著）的作者。《立界線得自由》聚焦於「界限」一個主題深入闡述；本書則以更宏觀的四個成長因素（相連、分離、分辨善惡、長大成人）為架構，「界限」是其中第三篇的主題，兩書可互相參照閱讀。
          </p>
        </div>
      </div>

      {/* 前言 */}
      <div className="mb-6 border border-cyan-100 rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => setShowPreface(!showPreface)}
          className="w-full px-5 py-3 bg-gradient-to-r from-cyan-50 to-teal-50 hover:from-cyan-100 hover:to-teal-100 flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-cyan-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">前言</span>
          </div>
          {showPreface ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {showPreface && (
          <div className="p-5 bg-white space-y-3">
            <p className="text-gray-700 leading-relaxed">
              完整的前言內容「在祂裡面的改變」，請見獨立頁面「前言」，其中詳述作者寫作本書的緣起，以及貫穿全書的四大成長因素架構。
            </p>
          </div>
        )}
      </div>

      {/* 目錄 */}
      <div className="mb-6 border border-cyan-100 rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => setShowToc(!showToc)}
          className="w-full px-5 py-3 bg-gradient-to-r from-cyan-50 to-teal-50 hover:from-cyan-100 hover:to-teal-100 flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-cyan-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">目錄</span>
          </div>
          {showToc ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {showToc && (
          <div className="p-5 bg-white space-y-4">
            {parts.map((p) => (
              <div key={p.part} className="border-l-4 border-cyan-400 pl-4">
                <h3 className="font-bold text-cyan-800 mb-2">
                  {p.part}　{p.title}
                </h3>
                <ul className="space-y-1">
                  {p.chapters.map((c, i) => (
                    <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                      <span className="text-cyan-400 flex-shrink-0 mt-0.5">‧</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="border-l-4 border-gray-300 pl-4 mt-2">
              <h3 className="font-semibold text-gray-600">附錄：研讀指引、結論</h3>
              <p className="text-xs text-gray-400 mt-1">（章節將陸續上線，目前已完成前言、第一章）</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
