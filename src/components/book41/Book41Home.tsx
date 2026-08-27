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
  { path: '/book41/chapter7', title: '第二部 2-1　榮辱感第一項：榮耀之愛' },
  { path: '/book41/chapter8', title: '第二部 2-2　榮辱感第二項：兩種榮耀來源' },
  { path: '/book41/chapter9', title: '第二部 2-3　榮辱感第三項：資源有限的概念' },
  { path: '/book41/chapter10', title: '第二部 2-4　榮辱感第四項：挑戰和反擊' },
  { path: '/book41/chapter11', title: '第二部 2-5　榮辱感第五項：情面概念' },
  { path: '/book41/chapter12', title: '第二部 2-6　榮辱感第六項：身體語言' },
  { path: '/book41/chapter13', title: '第二部 2-7　榮辱感第七項：守護關係' },
  { path: '/book41/chapter14', title: '第二部 2-8　榮辱感第八項：名字／親屬關係／血統' },
  { path: '/book41/chapter15', title: '第二部 2-9　榮辱感第九項：潔淨' },
  { path: '/book41/chapter16', title: '第二部 2-10　榮耀地位的逆轉是聖經的主題' },
  { path: '/book41/chapter17', title: '第三部 3-1　福音為「榮耀之愛」所形塑？' },
  { path: '/book41/chapter18', title: '第三部 3-2　福音為「兩種榮耀來源」所形塑？' },
  { path: '/book41/chapter19', title: '第三部 3-3　福音為「資源有限的概念」所形塑？' },
  { path: '/book41/chapter20', title: '第三部 3-4　福音為「挑戰與反擊」所形塑？' },
  { path: '/book41/chapter21', title: '第三部 3-5　福音為「情面概念」所形塑？' },
  { path: '/book41/chapter22', title: '第三部 3-6　福音為「身體語言」的動力所形塑？' },
  { path: '/book41/chapter23', title: '第三部 3-7　福音為「守護關係」的動力所形塑？' },
  { path: '/book41/chapter24', title: '第三部 3-8　福音為「名字／親屬關係／血統」的動力所形塑？' },
  { path: '/book41/chapter25', title: '第三部 3-9　福音為「潔淨」的動力所形塑？' },
  { path: '/book41/chapter26', title: '第三部 3-10　福音為「榮耀地位的逆轉」所形塑？' },
  { path: '/book41/chapter27', title: '第四部 4-1　融入榮辱感於目標中' },
  { path: '/book41/chapter28', title: '第四部 4-2　融入榮辱感於訓練中' },
  { path: '/book41/chapter29', title: '第四部 4-3　融入榮辱感於實踐中' },
  { path: '/book41/chapter30', title: '第四部 4-4　結論：信徒無虧缺的榮耀' },
  { path: '/book41/chapter31', title: '附錄一　如何透過閱讀聖經察覺榮辱感' },
  { path: '/book41/chapter32', title: '附錄二　H/S-1到H/S-5：榮辱動力的認知層次' },
  { path: '/book41/chapter33', title: '附錄三　「耶穌生平」涉及不潔／羞辱的故事' },
  { path: '/book41/chapter34', title: '附錄四　從基督救贖經文中發現「無限資源」的動力' },
  { path: '/book41/chapter35', title: '附錄五　啟示錄中的榮辱感分析' },
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
        <p className="text-gray-500 text-sm mt-3">全書共四部（洞悉、隱視、形塑、遍傳）及五篇附錄，前言、四部正文（第一部6節、第二部10節、第三部10節、第四部4節）與五篇附錄，共35章，已全部完結上線。</p>
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
