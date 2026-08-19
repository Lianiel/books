import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Eye, BookOpen, Star } from 'lucide-react';

export default function Book36Home() {
  const [showPreface, setShowPreface] = useState(true);
  const [showToc, setShowToc] = useState(true);

  const chapters = [
    '第一講　與神親密的關係',
    '第二講　成為神的朋友',
    '第三講　神成年的兒子',
    '第四講　撒旦毀滅的伎倆',
    '第五講　四種生產式的禱告',
    '第六講　為你的國家禱告（一）',
    '第七講　為你的國家禱告（二）',
    '第八講　神國裡四種類型的人',
    '第九講　成為神國的巨人',
    '第十講　我們在天上的父',
    '第十一講　願人都尊禰的名為聖',
    '第十二講　人的門徒和基督的門徒',
    '第十三講　與主合而為一',
    '第十四講　成為基督的新婦',
    '第十五講　預備自己和教會來盛裝神',
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* 書名區 */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-fuchsia-700 to-purple-700 bg-clip-text text-transparent">
          深度禱告學
        </h1>
        <h2 className="text-xl font-semibold text-gray-600 mb-1">十五堂課，帶你進入與神親密同行的禱告深處</h2>
        <div className="inline-block bg-gradient-to-r from-fuchsia-50 to-purple-50 border border-fuchsia-200 rounded-xl px-6 py-3">
          <p className="text-fuchsia-800 font-semibold">妮塔·強生　著　／　阿木歌　編譯</p>
        </div>
      </div>

      {/* 書本簡介 */}
      <div className="mb-6 bg-gradient-to-r from-fuchsia-50 to-purple-50 border border-fuchsia-100 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <Eye className="w-5 h-5 text-fuchsia-700 flex-shrink-0" />
          <h3 className="font-bold text-fuchsia-800">關於本書</h3>
        </div>
        <p className="text-gray-700 leading-relaxed mb-3">
          《深度禱告學》是妮塔·強生牧師（Nita Johnson）約於2006年前後教導的十五集系列信息，由編譯者阿木歌逐字整理成文。編譯者在序言中提到：「明白神的心意是非常重要的，除非你真認識神，除非你與祂有親密的關係，除非對你來說神的啟示如同馨香之氣、如同香膏傾倒，否則你就無法明白祂的心意。」全書十五講從與神親密的關係、成為神的朋友談起，深入探討成年兒子的身量、撒旦毀滅的伎倆、四種生產式的禱告、為國家代禱、神國裡不同類型的人、主禱文的逐句禱告，一路談到與主合而為一、成為基督的新婦、預備自己和教會來盛裝神——是《初級代禱學》之後，進深操練禱告與屬靈爭戰的完整課程。
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          全書以妮塔牧師講道實錄的形式呈現，穿插大量真實的服事見證、異象經歷與親自示範的禱告詞，語氣直接、坦率，常帶著對教會現狀的尖銳提醒與對代禱者的殷切呼召。
        </p>
        <div className="bg-white rounded-lg p-3 border border-fuchsia-100">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-fuchsia-700">與《初級代禱學》的關係：</span>本書與電子書房另一本書《初級代禱學》同為妮塔·強生牧師所著、阿木歌編譯，《初級代禱學》聚焦禱告最基礎的入門功課，本書則進一步深入屬靈爭戰、成熟門徒、與主合一等更深的主題，兩書可互相參照閱讀。
          </p>
        </div>
      </div>

      {/* 序言 */}
      <div className="mb-6 border border-fuchsia-100 rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => setShowPreface(!showPreface)}
          className="w-full px-5 py-3 bg-gradient-to-r from-fuchsia-50 to-purple-50 hover:from-fuchsia-100 hover:to-purple-100 flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-fuchsia-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">序言</span>
          </div>
          {showPreface ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {showPreface && (
          <div className="p-5 bg-white space-y-3">
            <p className="text-gray-700 leading-relaxed">
              完整的序言內容，請見獨立頁面「序言」，其中說明了編譯者將十五集講道錄音逐字整理成文的緣起與過程。
            </p>
          </div>
        )}
      </div>

      {/* 目錄 */}
      <div className="mb-6 border border-fuchsia-100 rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => setShowToc(!showToc)}
          className="w-full px-5 py-3 bg-gradient-to-r from-fuchsia-50 to-purple-50 hover:from-fuchsia-100 hover:to-purple-100 flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-fuchsia-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">目錄</span>
          </div>
          {showToc ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {showToc && (
          <div className="p-5 bg-white">
            <ul className="space-y-2">
              {chapters.map((c, i) => (
                <li key={i} className="flex items-start gap-2 border-l-4 border-fuchsia-400 pl-4 py-1">
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
