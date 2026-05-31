import React from 'react';
import { BookOpen, Heart, Users, Search, Target, Star } from 'lucide-react';

export default function Book20Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 mb-4 shadow-lg">
          <Heart className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">安慰人的靈魂</h1>
        <p className="text-lg text-gray-600 mb-1">基督信仰靈性關懷師照顧末期病人的實務歷程</p>
        <p className="text-gray-500">范銀絲 著｜台灣神學研究學院碩士論文｜2022年</p>
      </div>

      {/* 書本簡介 */}
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100 rounded-xl p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-teal-800 mb-3 flex items-center gap-2">
          <BookOpen className="w-5 h-5" />
          書本簡介
        </h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          本書源於作者范銀絲在台北醫學大學附設醫院擔任靈性關懷師九年的實務經驗。面對末期病人各不相同的生命故事、對苦難的詮釋，以及複雜的家庭動力，她深刻體認到「如何做好靈性關懷」是一門大學問，更是一門藝術。
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          這份研究透過深度訪談兩位擁有豐富臨床經驗的基督信仰靈性關懷師，探討她們對「靈性」、「靈性需求」和「靈性照顧」的定義，以及她們如何在實務中陪伴末期病人走完生命最後一段旅程。研究結果不僅對靈性關懷師的培訓有重要貢獻，對所有陪伴臨終者的人——家屬、教會牧者、志工——都有深刻的啟示。
        </p>
        <p className="text-gray-700 leading-relaxed">
          書名「安慰人的靈魂」，呼應了保惠師（聖靈）的本質，也反映出靈性關懷師在生命邊界處所扮演的角色——不是解決問題的人，而是陪伴人走過靈性幽谷的同行者。
        </p>
      </div>

      {/* 研究摘要 */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Search className="w-5 h-5 text-teal-600" />
          三個核心研究問題
        </h2>
        <div className="space-y-3">
          {[
            { num: '一', q: '對照顧末期病人的基督信仰靈性關懷師而言，什麼是靈性與靈性需求？什麼是靈性照顧？' },
            { num: '二', q: '末期病人會有哪些靈性需求需要被靈性照顧？' },
            { num: '三', q: '基督信仰靈性關懷師如何進行末期病人的靈性照顧？' },
          ].map(item => (
            <div key={item.num} className="flex gap-3 p-3 bg-teal-50 rounded-lg">
              <span className="text-teal-600 font-bold flex-shrink-0 w-6">{item.num}、</span>
              <p className="text-gray-700">{item.q}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 研究結論 */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Star className="w-5 h-5 text-amber-500" />
          五大研究結論
        </h2>
        <div className="space-y-2">
          {[
            '靈性是從上帝而來的內在力量',
            '靈性需求涵蓋全人的需求',
            '靈性照顧是全人照顧',
            '末期病人的靈性需求有其獨特性，需要個別化的靈性照顧',
            '靈性照顧實務歷程建構的流程反映對生命的尊重',
          ].map((c, i) => (
            <div key={i} className="flex gap-3 items-start p-3 border border-amber-100 rounded-lg">
              <span className="text-amber-600 font-bold flex-shrink-0">{i + 1}.</span>
              <p className="text-gray-700">{c}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 研究對象 */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 mb-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Users className="w-5 h-5 text-indigo-600" />
          兩位受訪靈性關懷師
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100">
            <h3 className="font-bold text-indigo-800 mb-2">關懷師 L</h3>
            <p className="text-gray-700 text-sm leading-relaxed">擁有 15 年末期病人靈性關懷臨床經驗，受訪日期：2022年4月6日，訪談長度：90分鐘。</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
            <h3 className="font-bold text-purple-800 mb-2">關懷師 G</h3>
            <p className="text-gray-700 text-sm leading-relaxed">擁有 5 年末期病人靈性關懷臨床經驗，受訪日期：2022年3月8日，訪談長度：70分鐘。</p>
          </div>
        </div>
      </div>

      {/* 章節目錄 */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-teal-600" />
          章節內容
        </h2>
        <div className="space-y-2">
          {[
            { ch: '第1章', title: '緒論', desc: '研究動機、目的、問題與名詞解釋' },
            { ch: '第2章', title: '靈性的本質與需求', desc: '靈性定義、六大特質、靈性需求與靈性照顧的意義' },
            { ch: '第3章', title: '靈性關懷師與基督教靈性照顧', desc: '靈性關懷師的沿革、台灣發展歷史與聖經神學基礎' },
            { ch: '第4章', title: '研究方法', desc: '質性現象學研究設計、深度訪談法與研究嚴謹度' },
            { ch: '第5章', title: '研究結果', desc: '兩位關懷師的靈性觀與末期病人個別化靈性照顧案例' },
            { ch: '第6章', title: '結論與建議', desc: '五大結論、研究限制與未來研究方向' },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <span className="text-teal-600 font-semibold flex-shrink-0 w-16 text-sm">{item.ch}</span>
              <div>
                <span className="font-semibold text-gray-800">{item.title}</span>
                <span className="text-gray-500 text-sm ml-2">— {item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
