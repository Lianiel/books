import React from 'react';
import { BookOpen, Star, Heart, Compass, Target, Award } from 'lucide-react';

export default function Book16Home() {
  const chapters = [
    { num: '導言', title: '心靈需要出口', desc: '人生的絕境與靈魂深處對歸家的渴望', icon: Heart, color: 'text-violet-600', bg: 'bg-violet-50' },
    { num: '第一章', title: '一階：靈修方法初階', desc: '安靜、默想、對禱、靈修筆記——內室靈修的具體操練', icon: BookOpen, color: 'text-purple-600', bg: 'bg-purple-50' },
    { num: '第二章', title: '二階：日常生活中的靈修', desc: '委身教會、日常敬虔、職場靈修、清心致力一事', icon: Compass, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { num: '三階', title: '終末中與上帝親近', desc: '默想死亡、由默想到默觀、生活中與基督相遇、靈程的黑夜', icon: Star, color: 'text-blue-600', bg: 'bg-blue-50' },
    { num: '第四章', title: '生命內裡的轉變', desc: '信與意志、望與理智、愛與情感——裡面的人的三重更新', icon: Target, color: 'text-teal-600', bg: 'bg-teal-50' },
    { num: '第五章', title: '靈修觀歷史概覽與選讀', desc: '教父、天主教靈修傳統、基督新教改革家的靈修觀', icon: Award, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* 書籍介紹 */}
      <div className="bg-gradient-to-br from-violet-700 to-purple-800 rounded-2xl p-8 text-white mb-8 shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-8 h-8 text-violet-200" />
          <span className="text-violet-200 font-semibold text-lg">靈修神學導論</span>
        </div>
        <h1 className="text-4xl font-bold mb-2">拾級靈程三階</h1>
        <p className="text-violet-200 text-lg mb-4">孫毅 著</p>
        <p className="text-violet-100 leading-relaxed text-base">
          本書帶領讀者拾級而上，領略內室、日常生活及終末的靈程三階，觀察靈修對「裡面的人」
          信、望、愛三方面的影響，回顧靈修觀的發展歷史。學理紮實，文思細膩，兼具理論性和
          實踐性，既可作為靈修神學入門讀物，又可具體指引讀者的靈修操練。
        </p>
      </div>

      {/* 作者簡介 */}
      <div className="bg-violet-50 border border-violet-200 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold text-violet-900 mb-3">作者簡介</h2>
        <p className="text-violet-800 leading-relaxed">
          <strong>孫毅</strong>，北京大學哲學博士，北京守望教會長老，創欣神學院教務長及歷史神學副教授。
          主要研究領域為宗教改革及現代基督教思想。另著有《個體的人：祁克果的基督教生存論思想》、
          《作山上之城：教會建造論文集》、《聖經導讀》、《轉向：走在成聖的路上》等書。
        </p>
      </div>

      {/* 三階結構說明 */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">書籍結構：靈程三階</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-violet-100 to-purple-100 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-violet-700 mb-1">一階</div>
            <div className="text-sm font-semibold text-violet-900">內室靈修</div>
            <div className="text-xs text-violet-700 mt-1">安靜・默想・禱告・筆記</div>
          </div>
          <div className="bg-gradient-to-br from-indigo-100 to-blue-100 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-indigo-700 mb-1">二階</div>
            <div className="text-sm font-semibold text-indigo-900">日常生活靈修</div>
            <div className="text-xs text-indigo-700 mt-1">教會・職場・家庭・秩序</div>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-700 mb-1">三階</div>
            <div className="text-sm font-semibold text-blue-900">終末維度靈修</div>
            <div className="text-xs text-blue-700 mt-1">默觀・相遇・靈程黑夜</div>
          </div>
        </div>
      </div>

      {/* 章節目錄 */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">章節目錄</h2>
        <div className="space-y-3">
          {chapters.map((ch, i) => {
            const Icon = ch.icon;
            return (
              <div key={i} className={`${ch.bg} border border-gray-200 rounded-xl p-5 flex items-start gap-4`}>
                <div className={`${ch.color} mt-1 flex-shrink-0`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className={`text-sm font-semibold ${ch.color} mb-1`}>{ch.num}</div>
                  <div className="font-bold text-gray-900 text-lg mb-1">{ch.title}</div>
                  <div className="text-gray-600 text-sm">{ch.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 閱讀建議 */}
      <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
        <h2 className="text-lg font-bold text-amber-900 mb-3">作者的閱讀建議</h2>
        <p className="text-amber-800 leading-relaxed text-sm">
          本書假設讀者不只把它當作瞭解靈修神學的入門書，同時也預備好要照著本書的建議，
          操練如何在內室及日常生活中靈修。建議先通過第一至三章對如何靈修有些切身的體會，
          然後進入第四至五章。沒有自己靈修的切身體會，靈修神學的觀念對我們仍不過是觀念而已。
        </p>
      </div>
    </div>
  );
}
