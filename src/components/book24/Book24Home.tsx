import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, AlertCircle, HelpCircle, Star, Shield, Clock, Heart, Target, Eye, Check, ArrowRight } from 'lucide-react';

export default function Book24Home() {
  const chapters = [
    { id: 'chapter1', icon: AlertCircle, title: '前言與末世的警告', subtitle: '到底怎麼回事！耶穌希望你知道的事情', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
    { id: 'chapter2', icon: HelpCircle, title: '你可能會問的問題', subtitle: '七個關於末世的重要問題與解答', color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-200' },
    { id: 'chapter3', icon: Star, title: '尼比魯、外星人與屬靈爭戰', subtitle: '末世徵兆：第十顆行星與神的供應', color: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-200' },
    { id: 'chapter4', icon: Shield, title: '辨認叛徒與神的保護', subtitle: '如何辨認試探、火山與地獄的擴張', color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-200' },
    { id: 'chapter5', icon: Clock, title: '末世關鍵時刻', subtitle: '核子彈降落那一天與啟示錄預言的實現', color: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-200' },
    { id: 'chapter6', icon: Heart, title: '耶穌對卡羅爾的深情告白', subtitle: '六段感人的信息：愛、選擇、信靠', color: 'text-pink-600', bg: 'bg-pink-50', border: 'border-pink-200' },
    { id: 'chapter7', icon: Target, title: '如何渡過大災難', subtitle: '靠神的能力存活，不靠肉體', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
    { id: 'chapter8', icon: Eye, title: '神的主權與最終供應', subtitle: '美國的命運、神的國度與對剩餘者的指示', color: 'text-teal-600', bg: 'bg-teal-50', border: 'border-teal-200' },
    { id: 'chapter9', icon: Check, title: '接受饒恕與逃避追捕', subtitle: '接受神的饒恕，學習在末世中生存', color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* 書名標題 */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 mb-4 shadow-lg">
          <BookOpen className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent">
          盼望和教導
        </h1>
        <p className="text-xl text-gray-600 mb-2">作者：珂萊爾（Corinne）</p>
        <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
          末世時代靈魂的盼望之書——耶穌透過靈修日誌傳達的末世教導、屬靈爭戰指引與信仰告白，
          幫助信徒在大災難前做好靈魂準備。
        </p>
      </div>

      {/* 書本背景介紹 */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-8 shadow-sm">
        <h2 className="text-lg font-bold text-blue-800 mb-3 flex items-center gap-2">
          <BookOpen className="w-5 h-5" />
          關於本書
        </h2>
        <div className="space-y-3 text-gray-700 leading-relaxed">
          <p>
            本書收錄了珂萊爾（Corinne）在靈修日誌中記載的主耶穌教導。作者透過禱告與默想，
            蒙主賜下一系列關於末世時代的信息，包括末日徵兆的解說、屬靈爭戰的指引，
            以及對「留下來的人」的具體供應和保護。
          </p>
          <p>
            書中內容以對話形式呈現——作者向主提問，主的回應以粗體標出。
            讀者可感受到主耶穌的溫柔、慈愛，以及對末世中每個靈魂的深切關懷。
            本書特別適合對末世預言有疑問、或想在動盪時代中尋求信仰根基的讀者。
          </p>
        </div>
      </div>

      {/* 核心主題 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {[
          { icon: AlertCircle, title: '末世警示', desc: '揭示即將發生的大災難、尼比魯行星與外星人真相', color: 'text-blue-600', bg: 'bg-blue-50' },
          { icon: Shield, title: '屬靈保護', desc: '教導信徒如何辨認欺騙、得到神的遮蓋與指引', color: 'text-indigo-600', bg: 'bg-indigo-50' },
          { icon: Heart, title: '愛與盼望', desc: '主對每個靈魂的深愛，以及祂為信徒預備的永恆家鄉', color: 'text-purple-600', bg: 'bg-purple-50' },
        ].map((theme, i) => (
          <div key={i} className={`${theme.bg} rounded-lg p-4 text-center`}>
            <theme.icon className={`w-8 h-8 ${theme.color} mx-auto mb-2`} />
            <h3 className="font-bold text-gray-800 mb-1">{theme.title}</h3>
            <p className="text-sm text-gray-600">{theme.desc}</p>
          </div>
        ))}
      </div>

      {/* 章節目錄 */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">章節目錄</h2>
      <div className="space-y-3">
        {chapters.map((ch, index) => (
          <Link key={ch.id} to={`/book24/${ch.id}`} className="block group">
            <div className={`border ${ch.border} ${ch.bg} rounded-lg p-4 hover:shadow-md transition-all duration-200 group-hover:scale-[1.01]`}>
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0`}>
                  <ch.icon className={`w-5 h-5 ${ch.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-medium text-gray-400">第 {index + 1} 章</span>
                  </div>
                  <h3 className={`font-bold ${ch.color} text-base leading-snug`}>{ch.title}</h3>
                  <p className="text-sm text-gray-500 truncate">{ch.subtitle}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 flex-shrink-0" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* 底部引言 */}
      <div className="mt-10 bg-gradient-to-r from-blue-700 to-indigo-800 rounded-xl p-6 text-white text-center shadow-lg">
        <p className="text-lg italic leading-relaxed mb-2">
          「不要懼怕，我一直與你同在。我到哪兒，你就跟我到哪兒。
          我去為你預備住處，也是我們永遠在一起的地方。」
        </p>
        <p className="text-blue-200 text-sm">— 耶穌基督，摘自《盼望和教導》</p>
      </div>
    </div>
  );
}
