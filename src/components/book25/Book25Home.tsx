import React from 'react';
import { BookOpen, Users, Target, Compass, Award, Heart, Shield } from 'lucide-react';

export default function Book25Home() {
  const chapters = [
    { num: 1, title: '推動一切的引擎', subtitle: '教會存在的意義為何？', icon: Target },
    { num: 2, title: '為門徒下定義', subtitle: '作耶穌的門徒是什麼意義？', icon: BookOpen },
    { num: 3, title: '如何開始幫助人成長', subtitle: '靈命成長的五個階段', icon: Users },
    { num: 4, title: '生命成長的四個領域', subtitle: '門徒需要在哪些領域成長？', icon: Heart },
    { num: 5, title: '領袖的角色', subtitle: '領袖在門徒訓練中扮演什麼角色？', icon: Shield },
    { num: 6, title: '新的職稱：裝備者', subtitle: '作門徒訓練的牧師要扮演哪些角色？', icon: Award },
    { num: 7, title: '個人的門徒帶領要素', subtitle: '教會真正的角色為何？', icon: Users },
    { num: 8, title: '捲起袖子放手做', subtitle: '如何在實際生活中落實門徒帶領？', icon: Target },
    { num: 9, title: '重新思考我們的事工', subtitle: '如何建立門徒訓練的教會架構？', icon: Compass },
    { num: 10, title: '關係導向的小組', subtitle: '小組如何成為門徒帶領的核心環境？', icon: Users },
    { num: 11, title: '新的成效評估表', subtitle: '如何衡量教會的真正果效？', icon: Award },
    { num: 12, title: '轉化為塑造門徒的教會', subtitle: '五個轉化的整合與實踐', icon: Compass },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* 書本標題 */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-teal-600 mb-4 shadow-lg">
          <BookOpen className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
          教會動力大轉化
        </h1>
        <h2 className="text-xl font-semibold text-gray-600 mb-1">五步轉型門徒訓練</h2>
        <p className="text-sm text-gray-500">卜冀曼・賀伯陛博士・高爾文博士 著</p>
      </div>

      {/* 開場白 */}
      <div className="mb-8 bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center gap-2">
          <BookOpen className="w-5 h-5" />
          開場白：寫給每一位教會領袖
        </h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          許多牧長們都承受著很實際的壓力。你看到會眾的出席人數、興緻、熱情、屬靈成熟度、外展能力、捐獻、福音行動等都在下降。你極渴望扭轉這樣的情勢，你在尋找一位教練，能簡單明瞭地指出一條通往符合聖經原則的成功之路。
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          但一開始，請你先不要急，努力克制想要直接跳到解決方案的衝動。如同每個教會的問題都是日積月累而成的，要找出解決方案並應用在教會獨特的處境上，同樣需要時間。教會領袖很容易在讀了一本書或參加一個研討會後，就想馬上把自己的教會改頭換面——但這本書並不是這樣。
        </p>
        <p className="text-gray-700 leading-relaxed mb-3">
          領袖們常常以為找到了「秘方」：「你們的音樂很棒，我們就是需要這個」或「你們教會很友善」——但他們搞錯了。敬拜音樂不是主要的問題。真正的問題是教會是否有在培育真正的門徒。要解決缺乏成效的問題，需要根本地改變我們運作教會的方式。
        </p>
        <div className="bg-white border-l-4 border-blue-500 pl-4 py-3 rounded-r-lg">
          <p className="text-blue-800 font-semibold">解決之道：關係性門徒訓練（Relational Discipleship）</p>
          <p className="text-gray-700 mt-1">教會需要採用一個簡單明瞭的方法，訓練人們成為靈命成熟、並全心跟隨基督的人，然後讓這些門徒帶出更多門徒。</p>
        </div>
        <div className="mt-4 bg-white border border-blue-100 rounded-lg p-4">
          <p className="text-gray-600 italic">
            💡 本書由三位門徒訓練運動領袖共同撰寫：<strong>卜冀曼</strong>（真生命教會，擁有超過八百個小組）、<strong>賀伯陛博士</strong>（哈帕社區教會創堂牧師）、<strong>高爾文博士</strong>（《佈道大計》作者，八十四歲的傳奇導師）。
          </p>
        </div>
      </div>

      {/* 五個轉化概覽 */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Compass className="w-5 h-5 text-teal-600" />
          五個核心轉化（Five Shifts）
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {[
            { num: 1, from: '基督徒', to: '門徒', color: 'blue' },
            { num: 2, from: '學習', to: '裝備', color: 'teal' },
            { num: 3, from: '聚會', to: '造就', color: 'indigo' },
            { num: 4, from: '計畫', to: '帶人', color: 'cyan' },
            { num: 5, from: '增長', to: '倍增', color: 'emerald' },
          ].map(s => (
            <div key={s.num} className="bg-white border border-gray-200 rounded-xl p-3 text-center shadow-sm">
              <div className="text-lg font-bold text-blue-600 mb-1">轉化 {s.num}</div>
              <div className="text-sm text-gray-500 line-through">{s.from}</div>
              <div className="text-base font-bold text-teal-700 mt-1">→ {s.to}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 北美教會的問題 */}
      <div className="mb-8 bg-amber-50 border border-amber-200 rounded-xl p-5">
        <h3 className="text-lg font-bold text-amber-800 mb-3">📊 當代教會面臨的現實數據</h3>
        <div className="space-y-2">
          {[
            '在道德和生活習慣上，基督徒和非基督徒的行為並沒有顯著差別',
            '離婚率在基督徒和非基督徒中大致相同',
            '約四分之一未婚同居人士自稱為福音派',
            '只有約百分之六的福音派有定期十一奉獻',
            '百分之六十到八十的年輕人，在二十多歲會離開教會',
            '不到五分之一自稱重生得救的基督徒，持有基本的聖經世界觀',
            '柳溪社區教會的研究顯示：教會並沒有在生產預期的屬靈成長結果',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-amber-600 font-bold flex-shrink-0 mt-1">•</span>
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 四種典型教會 */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">四種典型教會的問題與局限</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { type: '教導型教會', focus: '聖經知識傳授', problem: '牧師容易枯竭；會眾依賴牧師；演講是最沒果效的教學法', color: 'blue' },
            { type: '吸引式教會', focus: '吸引人來、決志信主', problem: '靈命始終停留在孩童階段；比較成熟的信徒最終另尋他處', color: 'orange' },
            { type: '使命式教會', focus: '社會正義、服事行動', problem: '服事者容易枯竭；接受服務者取多給少；缺乏建立信徒的深度', color: 'green' },
            { type: '家庭式教會', focus: '真實關係、緊密團契', problem: '容易變得排他；新朋友難以融入；常常內爆或解散', color: 'purple' },
          ].map(c => (
            <div key={c.type} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <h4 className="font-bold text-gray-800 mb-1">{c.type}</h4>
              <p className="text-teal-700 text-sm mb-2"><strong>焦點：</strong>{c.focus}</p>
              <p className="text-gray-600 text-sm"><strong>問題：</strong>{c.problem}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 pl-4 py-3 rounded-r-lg">
          <p className="text-blue-800 font-bold">解答：以聖經為基礎的門徒訓練 + 以關係為導向的環境</p>
          <p className="text-gray-700 mt-1">焦點 = 以聖經為基礎的門徒訓練；方法論 = 以關係為導向的環境</p>
        </div>
      </div>

      {/* 章節目錄 */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-blue-600" />
          章節目錄
        </h3>
        <div className="space-y-2">
          {chapters.map(ch => (
            <div key={ch.num} className="flex items-center gap-4 p-3 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-blue-200 hover:bg-blue-50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-teal-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                {ch.num}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-800">第{['一','二','三','四','五','六','七','八','九','十','十一','十二'][ch.num-1]}章：{ch.title}</p>
                <p className="text-sm text-gray-500">{ch.subtitle}</p>
              </div>
              <ch.icon className="w-5 h-5 text-blue-400 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* 三位作者 */}
      <div className="bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200 rounded-xl p-5">
        <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center gap-2">
          <Users className="w-5 h-5" />
          三位共同作者
        </h3>
        <div className="space-y-3">
          {[
            { name: '卜冀曼 (Bill Hull)', role: '真生命教會主任牧師', desc: '真生命事工創始人，建立超過八百個關係性門徒帶領小組，每月訓練約一百位教會領袖，關係性門徒訓練網絡創辦人。' },
            { name: '賀伯陛博士 (Dr. Bobby Harrington)', role: '哈帕社區教會創堂牧師', desc: '田納西州納什維爾哈帕社區教會（1998年設立），由吸引模式成功轉型為關係導向門徒訓練模式，擁有四個神學學位。' },
            { name: '高爾文博士 (Dr. Robert Coleman)', role: '福音派傳奇人物', desc: '八十四歲的屬靈導師，1963年著作《佈道大計》全球銷售逾百萬冊，門徒訓練主題的奠基者，書中提供「高老牧師經驗談」。' },
          ].map(a => (
            <div key={a.name} className="bg-white rounded-lg p-3 border border-blue-100">
              <p className="font-bold text-blue-700">{a.name}</p>
              <p className="text-teal-600 text-sm mb-1">{a.role}</p>
              <p className="text-gray-600 text-sm">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
