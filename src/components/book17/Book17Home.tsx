import React from 'react';
import { BookOpen, Heart, Target, Users, Star, ArrowRight } from 'lucide-react';

export default function Book17Home() {
  const chapters = [
    { num: 1, title: '從神的角度看教會與恩賜', ref: '一1-9' },
    { num: 2, title: '在十架陰影下合一', ref: '一10-31' },
    { num: 3, title: '十字架的資訊與屬靈的智慧', ref: '二1-16' },
    { num: 4, title: '教會與傳道人的關係', ref: '三1-23' },
    { num: 5, title: '信徒與傳道人的關係', ref: '四1-21' },
    { num: 6, title: '正視罪惡的嚴重性', ref: '五1-13' },
    { num: 7, title: '真智慧與真自由', ref: '六1-20' },
    { num: 8, title: '面對信仰與處境的張力', ref: '七1-40' },
    { num: 9, title: '愛與理性', ref: '八1-13' },
    { num: 10, title: '愛與捨己', ref: '九1-27' },
    { num: 11, title: '從食物與神的關係看自由的底線', ref: '十1-十一1' },
    { num: 12, title: '敬拜神，尊重他人', ref: '十一2-34' },
    { num: 13, title: '合一與多元', ref: '十二1-31' },
    { num: 14, title: '追求成就或追求愛人', ref: '十三1-13' },
    { num: 15, title: '造就自己或造就他人', ref: '十四1-40' },
    { num: 16, title: '帶著復活的盼望而活著', ref: '十五1-58' },
    { num: 17, title: '成為有愛心的群體', ref: '十六1-24' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 mb-4 shadow-lg">
          <BookOpen className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">
          十架牧養學
        </h1>
        <h2 className="text-xl font-semibold text-gray-600 mb-1">從哥林多前書學習教會建造</h2>
        <p className="text-gray-500">作者：陳濟民 | 校園書房出版社 | 2024年5月</p>
      </div>

      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 rounded-xl p-6 mb-8 shadow-sm">
        <h3 className="text-lg font-bold text-amber-800 mb-3 flex items-center gap-2">
          <Star className="w-5 h-5 text-amber-600" />
          書籍簡介
        </h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          哥林多前書是一封寫給充滿問題的教會的書信。哥林多教會人才濟濟、恩賜豐富，卻結黨紛爭、道德敗壞、神學混亂。保羅如何用十字架的真理回應這一切問題？
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          本書作者陳濟民牧師以「十架牧養學」為核心，帶領讀者逐一研讀哥林多前書十六章，深入探討教會建造的真諦。從教會的身分認同、傳道人的定位，到婚姻、恩賜、愛、復活等議題，每一章都回到十字架的蔭影下，尋找牧養教會的智慧。
        </p>
        <p className="text-gray-700 leading-relaxed">
          這不只是一本解經書，更是一本實踐指南，幫助信徒與教牧在今日的處境中，建造合神心意的教會群體。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white border border-amber-100 rounded-lg p-4 text-center shadow-sm">
          <Heart className="w-8 h-8 text-amber-600 mx-auto mb-2" />
          <h4 className="font-semibold text-gray-800 mb-1">十架為核心</h4>
          <p className="text-sm text-gray-600">所有問題回到十字架的真理尋找答案</p>
        </div>
        <div className="bg-white border border-amber-100 rounded-lg p-4 text-center shadow-sm">
          <Users className="w-8 h-8 text-amber-600 mx-auto mb-2" />
          <h4 className="font-semibold text-gray-800 mb-1">群體生活</h4>
          <p className="text-sm text-gray-600">教會是神呼召的群體，合一是標誌</p>
        </div>
        <div className="bg-white border border-amber-100 rounded-lg p-4 text-center shadow-sm">
          <Target className="w-8 h-8 text-amber-600 mx-auto mb-2" />
          <h4 className="font-semibold text-gray-800 mb-1">實踐導向</h4>
          <p className="text-sm text-gray-600">聖經原則應用在今日教會與生活中</p>
        </div>
      </div>

      <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden mb-8">
        <div className="bg-gradient-to-r from-amber-600 to-orange-700 px-6 py-4">
          <h3 className="text-white font-bold text-lg">章節目錄</h3>
          <p className="text-amber-100 text-sm">共 17 章</p>
        </div>
        <div className="divide-y divide-gray-50">
          {chapters.map((ch) => (
            <div key={ch.num} className="flex items-center gap-4 px-6 py-3 hover:bg-amber-50 transition-colors">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white text-sm font-bold">
                {ch.num}
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800">{ch.title}</p>
                <p className="text-xs text-gray-400">哥林多前書 {ch.ref}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 rounded-xl p-6 text-center shadow-sm">
        <h3 className="text-lg font-bold text-amber-800 mb-2">關於作者</h3>
        <p className="text-gray-700 leading-relaxed">
          陳濟民牧師是資深聖經學者與神學教育工作者，曾任台灣中華福音神學院教授及院長。他長期深耕哥林多書信的研究與教導，以嚴謹的解經結合牧養心腸，幫助教會在聖經真理中扎根成長。
        </p>
      </div>
    </div>
  );
}
