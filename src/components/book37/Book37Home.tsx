import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Eye, BookOpen, Star } from 'lucide-react';

export default function Book37Home() {
  const [showPreface, setShowPreface] = useState(true);
  const [showToc, setShowToc] = useState(true);

  const chapters = [
    '第一講　神賜下復興的目的',
    '第二講　單單愛主你的神',
    '第三講　在愛中行事的信心',
    '第四講　存謙卑的心與神同行',
    '第五講　讓耶穌透過你活出來',
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* 書名區 */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-fuchsia-700 to-purple-700 bg-clip-text text-transparent">
          復興的奧秘
        </h1>
        <h2 className="text-xl font-semibold text-gray-600 mb-1">五堂課，帶你看見得到復興、更要持守復興的關鍵</h2>
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
          《復興的奧秘》是妮塔·強生牧師（Nita Johnson）五堂系列信息，由編譯者阿木歌逐字整理成文。編譯者在序言中提到：「在個人的信仰歷程中，見過好幾個曾經被主大有能力使用的僕人……但後來卻紛紛經歷跌倒、失敗，甚至有人在後來的服侍中，神的同在變得非常微弱」，正是這樣的觀察，促成妮塔牧師透過分享自己失敗的經歷，幫助渴望復興的教會和弟兄姊妹不重蹈覆轍。全書五講從神賜下復興的目的談起，依序探討單單愛主你的神、在愛中行事的信心、存謙卑的心與神同行，最後以「讓耶穌透過你活出來」作結——是《深度禱告學》《初級代禱學》之後，聚焦在「得到復興之後如何持守它」的第三本著作。
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          全書以妮塔牧師講道實錄的形式呈現，穿插大量真實的服事見證、異象經歷與親自示範的禱告詞，語氣坦率真誠，常以自己過去的失敗經驗作為提醒，呼籲聽眾在復興的能力之外，更要看重品格、謙卑與神聖的愛。
        </p>
        <div className="bg-white rounded-lg p-3 border border-fuchsia-100">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-fuchsia-700">與姊妹作的關係：</span>本書與電子書房另兩本書《深度禱告學》《初級代禱學》同為妮塔·強生牧師所著、阿木歌編譯。《初級代禱學》聚焦禱告入門功課，《深度禱告學》深入屬靈爭戰與與主合一的主題，本書則聚焦在復興的目的與如何持守復興的恩膏，三書可互相參照閱讀。
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
            <span className="font-semibold text-gray-800">序言：看見了就是你的</span>
          </div>
          {showPreface ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {showPreface && (
          <div className="p-5 bg-white space-y-3">
            <p className="text-gray-700 leading-relaxed">
              完整的序言內容，請見獨立頁面「序言」，其中說明了編譯者觀察到許多曾被神大用的僕人後來跌倒失敗的緣由，以及本書如何幫助讀者避免重蹈覆轍。
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
