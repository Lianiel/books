import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ChevronRight } from 'lucide-react';

const chapters = [
  { path: '/book41/preface', title: '前言　作者簡介、推薦序與作者序' },
  { path: '/book41/chapter1', title: '第一部 1-1　隨處可遇的未得之民' },
  { path: '/book41/chapter2', title: '第一部 1-2　聖經，非獨佔之書！' },
  { path: '/book41/chapter3', title: '第一部 1-3　宣道盲點' },
  { path: '/book41/chapter4', title: '第一部 1-4　聖經真理的帳幕' },
  { path: '/book41/chapter5', title: '第一部 1-5　傷害或治癒？' },
  { path: '/book41/chapter6', title: '第一部 1-6　人間羞辱的殺傷力' },
];

export default function Book41Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-800 to-cyan-900 bg-clip-text text-transparent">世界等待的福音</h1>
        <h2 className="text-lg font-semibold text-gray-600 mb-1">榮耀與羞辱處境中的普世福音</h2>
        <p className="text-gray-500">沃爾納．米胥克（Werner Mischke）　著</p>
      </div>

      <div className="mb-8 p-5 bg-teal-50 border border-teal-100 rounded-lg">
        <p className="text-gray-700 leading-relaxed">
          當慚愧受辱的處境令人絕望時，我們可以等待什麼樣的好消息？本書根植於聖經，整全地教導讀者在思考福音時，如何在當代社會中適切地融入「榮耀與羞辱」的處境化福音動力——這既是西方世界經常錯失的思維，也是信徒對福音認知的關鍵缺口。作者長年投身國際宣教機構Mission ONE，結合豐富的跨文化實務經驗與紮實的學術研究，剖析聖經中無所不在卻長期被神學界忽略的榮辱動力，說明多數世界的福音處境，如何比西方熟悉的「罪疚與清白」框架，更貼近舊約與新約社會的文化底色。
        </p>
        <p className="text-gray-500 text-sm mt-3">全書共四部（洞悉、隱視、形塑、遍傳）、引言及五篇附錄，目前已完成前言與第一部「洞悉——難以理解的多元文化世界」共6節，陸續連載更新中。</p>
      </div>

      <div className="space-y-3">
        {chapters.map((ch) => (
          <Link
            key={ch.path}
            to={ch.path}
            className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:border-teal-300 hover:bg-teal-50 transition-all group"
          >
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-teal-700 flex-shrink-0" />
              <span className="font-medium text-gray-800">{ch.title}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-teal-500 transition-colors" />
          </Link>
        ))}
      </div>
    </div>
  );
}
