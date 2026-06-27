import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Users, Compass, Star, Search, Shield } from 'lucide-react';

export default function Book30Home() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    intro: true,
    author: true,
    approach: true,
    chapters: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">科學創造論</h1>
        <h2 className="text-lg font-semibold text-gray-600">Scientific Creationism</h2>
        <p className="text-gray-500 mt-1">亨利·莫瑞士博士（Henry M. Morris, Ph.D.）主編　韓偉等譯</p>
      </div>

      {/* 壹、本書背景與目的 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('intro')} className="w-full px-5 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">壹、本書背景與目的</span>
          </div>
          {expanded['intro'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['intro'] && (
          <div className="p-5 bg-white space-y-3">
            <p className="text-gray-700 leading-relaxed">
              《科學創造論》（Scientific Creationism）原文於1974年9月出版，由美國創造研究社（Institute for Creation Research）的科學家及顧問們聯合執筆，亨利·莫瑞士博士（Henry M. Morris, Ph.D.）主編。本書由中華基督翻譯中心翻譯，韓偉等同工參與，獻給八十年代的中國知識份子。
            </p>
            <p className="text-gray-700 leading-relaxed">
              本書的核心目的是：提供教師整套<strong>專以科學為基礎、完全不引用聖經或宗教教義</strong>的創造論資料。書中對資料的處理是正面的，說明以創造模式來解釋起源與歷史，是與科學事實符合的，至少與進化模式一樣的好。
            </p>
            <p className="text-gray-700 leading-relaxed">
              本書雖然必須討論很多科學資料，但卻是為一般非專家的讀者而寫。書中一些必要的新科學觀念與名詞，也視需要加以解釋，所以讀者只要稍加努力，將無困難了解並加以應用。
            </p>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <p className="text-blue-800 text-sm font-medium mb-1">適用對象</p>
              <ul className="text-gray-700 text-sm space-y-1 list-disc list-inside">
                <li>公立學校教師（作為教師參考資料）</li>
                <li>私立基督教學校（完整的科學與信仰整合教材）</li>
                <li>知識份子與信徒（建立世界觀的科學基礎）</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* 貳、作者與出版背景 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('author')} className="w-full px-5 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">貳、作者與出版背景</span>
          </div>
          {expanded['author'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['author'] && (
          <div className="p-5 bg-white space-y-4">
            <div className="border-l-4 border-blue-400 pl-4">
              <p className="font-semibold text-blue-800">亨利·莫瑞士博士（Dr. Henry M. Morris）</p>
              <p className="text-gray-700 text-sm mt-1 leading-relaxed">創造研究社（ICR）社長，水力工程博士，聖地亞哥基督教大學（Christian Heritage College）的共同創辦人。他是現代創造科學運動的主要奠基者，撰寫了數十本有關創造論的書籍。</p>
            </div>
            <div className="border-l-4 border-indigo-400 pl-4">
              <p className="font-semibold text-indigo-800">創造研究社（Institute for Creation Research, ICR）</p>
              <p className="text-gray-700 text-sm mt-1 leading-relaxed">由物理學、生物學、地質學、太空科學等領域的博士學者組成，旨在以嚴謹的科學角度研究並論證創造論。本書即為ICR科學家及顧問們聯合執筆的代表作。</p>
            </div>
            <div className="border-l-4 border-blue-400 pl-4">
              <p className="font-semibold text-blue-800">譯者：韓偉等同工（中華基督翻譯中心）</p>
              <p className="text-gray-700 text-sm mt-1 leading-relaxed">本書由中華基督翻譯中心翻譯，參與翻譯的同工有：樸鎧、熊慎幹、何天擇、周功和、曾天俊夫婦、李照男、龔行健夫婦、阮大年、許宗實夫婦、顏重剛、潘莫夫婦、李麗香、阮立麗、林瓊妣、梁洋珍、俞培新、鄭士和等，於一九七九年二月完成翻譯。</p>
            </div>
          </div>
        )}
      </div>

      {/* 參、兩個起源模式的比較方法 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('approach')} className="w-full px-5 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-blue-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">參、兩個起源模式的比較方法</span>
          </div>
          {expanded['approach'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['approach'] && (
          <div className="p-5 bg-white space-y-4">
            <p className="text-gray-700 leading-relaxed">本書不聲稱能「證明」創造論，也承認進化論與創造論兩者都無法被科學證實或否定——起源發生在過去，超出實驗科學的範疇，兩者都需要憑信心接受。本書採取的是<strong>「兩個科學模式的比較法」</strong>：</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-red-50 rounded-lg p-4 border border-red-100">
                <p className="font-semibold text-red-700 mb-2">進化模式</p>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• 自然而然、自給自足</li>
                  <li>• 沒有目的，仍在進行中</li>
                  <li>• 從簡單趨向複雜</li>
                  <li>• 不可逆轉、全宇宙性</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                <p className="font-semibold text-green-700 mb-2">創造模式</p>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• 超自然、由外來力量決定</li>
                  <li>• 有目的，已完成</li>
                  <li>• 從複雜趨向簡單（衰退）</li>
                  <li>• 歷史有全球性大災難的痕跡</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm">本書的立場是：當兩個模式用來預測和解釋自然界觀察到的事實時，創造模式往往需要更少的特設假定，因此是更簡約、更符合事實的解釋。</p>
          </div>
        )}
      </div>

      {/* 肆、各章內容概覽 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('chapters')} className="w-full px-5 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">肆、各章內容概覽</span>
          </div>
          {expanded['chapters'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['chapters'] && (
          <div className="p-5 bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { ch: '第一章', title: '進化呢？還是創造？', desc: '研究起源的重要性、兩個模式的基本定義與比較、創造模式的四大益處', ready: true },
                { ch: '第二章', title: '混亂呢？還是秩序？', desc: '物質、能與自然律之來源；宇宙與太陽系的起源；創造的目的', ready: false },
                { ch: '第三章', title: '上坡呢？還是下坡？', desc: '熱力學諸定律；生命的起源；變異與天擇；遺傳學上的突變', ready: false },
                { ch: '第四章', title: '偶然呢？還是計劃？', desc: '生物的複雜性；相似與相異；退化器官與胚胎重演；化石記載中系統性的缺環', ready: false },
                { ch: '第五章', title: '古今一致說呢？還是大天災說？', desc: '化石的證據；地質沉積的快速形成；化石的同時代性；大天災後的餘災', ready: false },
                { ch: '第六章', title: '年老呢？還是年輕？', desc: '如何鑑定岩石年齡；放射性測年代法；地球年齡年輕的證據；人的年代', ready: false },
                { ch: '第七章', title: '猿呢？還是人？', desc: '人的起源；語言與人種；古代的文化；宗教的起源', ready: false },
                { ch: '第八章', title: '聖經的創造史', desc: '創世記的歷史性；創世記分期；墮落、洪水；聖經模式綜結；各種詮釋觀點', ready: false },
              ].map((c, i) => (
                <div key={i} className={`rounded-lg p-3 border ${c.ready ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200' : 'bg-gray-50 border-gray-200'}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-bold rounded px-2 py-0.5 ${c.ready ? 'text-blue-600 bg-blue-100' : 'text-gray-500 bg-gray-200'}`}>{c.ch}</span>
                    <span className={`font-semibold text-sm ${c.ready ? 'text-gray-800' : 'text-gray-500'}`}>{c.title}</span>
                    {c.ready && <span className="text-xs text-green-600 font-bold ml-auto">✓ 已上線</span>}
                  </div>
                  <p className={`text-xs ${c.ready ? 'text-gray-600' : 'text-gray-400'}`}>{c.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-xs mt-4 text-center">（第二至八章內容將於後續陸續新增）</p>
          </div>
        )}
      </div>
    </div>
  );
}
