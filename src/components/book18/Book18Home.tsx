import React from 'react';
import { BookOpen, Shield, Target, Users, Star, ArrowRight, Sword } from 'lucide-react';

export default function Book18Home() {
  const chapters = [
    { num: 1, title: '聖戰', part: '第一部分：認識敵人' },
    { num: 2, title: '舊約中的撒但', part: '第一部分：認識敵人' },
    { num: 3, title: '新約中的撒但', part: '第一部分：認識敵人' },
    { num: 4, title: '教會歷史中的撒但', part: '第一部分：認識敵人' },
    { num: 5, title: '今天的撒但', part: '第一部分：認識敵人' },
    { num: 6, title: '撒但的將來', part: '第一部分：認識敵人' },
    { num: 7, title: '建造堅固防線', part: '第二部分：認識撒但的弱點' },
    { num: 8, title: '主動發起進攻', part: '第二部分：認識撒但的弱點' },
    { num: 9, title: '撒但的策略與伎倆', part: '第三部分：認識撒但的策略' },
    { num: 10, title: '直面撒但的四大策略', part: '第三部分：認識撒但的策略' },
    { num: 11, title: '我們作為信徒的挑戰', part: '第四部分：撒但的失敗' },
    { num: 12, title: '我們作為教會成員的挑戰', part: '第四部分：撒但的失敗' },
    { num: 13, title: '我們作為國家公民的挑戰', part: '第四部分：撒但的失敗' },
  ];

  const parts = [
    { title: '第一部分', subtitle: '認識敵人：撒但及其歷史', chapters: '第1-6章', desc: '探討撒但的起源、名稱、歷史活動，從舊約到新約，再到教會歷史及當今時代。' },
    { title: '第二部分', subtitle: '認識撒但的弱點：防禦性與進攻性爭戰', chapters: '第7-8章', desc: '詳解神所賜全副軍裝的各件裝備，以及如何藉聖靈的寶劍與禱告主動出擊。' },
    { title: '第三部分', subtitle: '認識撒但的策略：他的詭計及應對辦法', chapters: '第9-10章', desc: '借助清教徒經典著作，揭露撒但四大策略：誘惑犯罪、攔阻靈修、歪曲真理、阻礙成聖。' },
    { title: '第四部分', subtitle: '認識撒但在個人生命、教會和國家中的失敗', chapters: '第11-13章', desc: '在個人、教會、國家三個層面，如何靠基督的得勝打敗撒但，活出得勝的基督徒生命。' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-rose-700 mb-4 shadow-lg">
          <Shield className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-600 to-rose-700 bg-clip-text text-transparent">
          與撒但爭戰
        </h1>
        <h2 className="text-xl font-semibold text-gray-600 mb-1">認識敵人的弱點、策略和失敗</h2>
        <p className="text-gray-500">作者：周必克（Joel Beeke）| 譯者：陳鳳 | 編校：王志勇</p>
      </div>

      <div className="bg-gradient-to-r from-red-50 to-rose-50 border border-red-100 rounded-xl p-6 mb-8 shadow-sm">
        <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center gap-2">
          <Star className="w-5 h-5 text-red-600" />
          書籍簡介
        </h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          每個真正的信徒都置身於聖經所說的屬靈爭戰之中。撒但憎恨你，因為你有基督的形象，因為你從他的權勢下被搶出來。他不會輕易放棄——他像篩麥子一樣試探你，像吼叫的獅子一樣尋找可吞吃的人。
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          本書源自周必克博士在倫敦大都市會幕神學院的五次講課，系統地闡述了改革宗神學對屬靈爭戰的教導。從認識撒但的本質與歷史，到裝備全副軍裝，再到辨識並破解他的詭計，最終在個人生命、教會和國家層面打敗撒但。
        </p>
        <p className="text-gray-700 leading-relaxed">
          在一個越來越世俗化、同時又對撒但教和神秘主義越來越興趣的時代，教會迫切需要合乎聖經、清楚平衡的屬靈爭戰教導。本書正是這樣的一本書——既不否認撒但的真實存在，也不執迷其中，而是以基督的十字架得勝為核心，指導信徒走上得勝之路。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white border border-red-100 rounded-lg p-4 text-center shadow-sm">
          <BookOpen className="w-8 h-8 text-red-600 mx-auto mb-2" />
          <h4 className="font-semibold text-gray-800 mb-1">認識敵人</h4>
          <p className="text-sm text-gray-600">從聖經和歷史全面認識撒但的本質與策略</p>
        </div>
        <div className="bg-white border border-red-100 rounded-lg p-4 text-center shadow-sm">
          <Shield className="w-8 h-8 text-red-600 mx-auto mb-2" />
          <h4 className="font-semibold text-gray-800 mb-1">全副軍裝</h4>
          <p className="text-sm text-gray-600">穿戴神所賜全副軍裝，建造堅固的屬靈防線</p>
        </div>
        <div className="bg-white border border-red-100 rounded-lg p-4 text-center shadow-sm">
          <Target className="w-8 h-8 text-red-600 mx-auto mb-2" />
          <h4 className="font-semibold text-gray-800 mb-1">得勝生活</h4>
          <p className="text-sm text-gray-600">在基督裡靠信心勝過撒但，活出得勝生命</p>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        {parts.map((part) => (
          <div key={part.title} className="bg-white border border-red-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 px-3 py-1 bg-gradient-to-r from-red-600 to-rose-700 text-white text-sm font-bold rounded-full">
                {part.title}
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">{part.subtitle}</h4>
                <p className="text-xs text-red-600 mb-2">{part.chapters}</p>
                <p className="text-sm text-gray-600">{part.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden mb-8">
        <div className="bg-gradient-to-r from-red-600 to-rose-700 px-6 py-4">
          <h3 className="text-white font-bold text-lg">章節目錄</h3>
          <p className="text-red-100 text-sm">共 13 章</p>
        </div>
        <div className="divide-y divide-gray-50">
          {chapters.map((ch) => (
            <div key={ch.num} className="flex items-center gap-4 px-6 py-3 hover:bg-red-50 transition-colors">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-white text-sm font-bold">
                {ch.num}
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800">{ch.title}</p>
                <p className="text-xs text-gray-400">{ch.part}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-50 to-rose-50 border border-red-100 rounded-xl p-6 mb-8 shadow-sm">
        <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center gap-2">
          <Sword className="w-5 h-5 text-red-600" />
          清教徒屬靈爭戰傳統
        </h3>
        <p className="text-gray-700 leading-relaxed mb-2">
          本書大量引用清教徒先賢的洞見，包括：
        </p>
        <ul className="space-y-1 text-gray-700 text-sm">
          <li>• <strong>湯瑪斯·布魯克斯</strong>《對付撒但詭計的寶貴應對辦法》</li>
          <li>• <strong>威廉·格諾爾</strong>《穿戴全副軍裝的基督徒》</li>
          <li>• <strong>理查·吉爾平</strong>《論撒但的試探》</li>
          <li>• <strong>威廉·司布斯托</strong>《撒但的詭計》</li>
          <li>• <strong>約翰·道內姆</strong>《基督徒的爭戰》</li>
        </ul>
      </div>

      <div className="bg-gradient-to-r from-red-50 to-rose-50 border border-red-100 rounded-xl p-6 text-center shadow-sm">
        <h3 className="text-lg font-bold text-red-800 mb-2">關於作者</h3>
        <p className="text-gray-700 leading-relaxed">
          周必克博士（Joel Beeke）是美國大溪城傳統尼德蘭改革宗教會的牧師，同時擔任清教徒改革宗神學院院長，主講系統神學和講道學。1988年於費城威斯敏斯德神學院獲得歷史神學博士學位，主攻宗教改革和後宗教改革時期神學。他是著名的改革宗學者與清教徒神學權威，著有超過五十本神學書籍，是當代清教徒靈修傳統最重要的代言人之一。
        </p>
      </div>
    </div>
  );
}
