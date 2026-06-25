import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Map, Star, Search, Shield, Users } from 'lucide-react';

export default function Book29Home() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    title: true,
    author: true,
    structure: true,
    parts: true,
    features: true,
    chapters: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">指向終末的創世記</h1>
        <h2 className="text-lg font-semibold text-gray-600">Genesis Pointing towards the End</h2>
        <p className="text-gray-500 mt-1">終末論視角的創世記詮釋</p>
      </div>

      {/* 壹、創世記卷名 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('title')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">壹、創世記卷名</span>
          </div>
          {expanded['title'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['title'] && (
          <div className="p-5 bg-white space-y-3">
            <p className="text-gray-700 leading-relaxed">
              本卷中文名叫「創世記」，但實際上應為「創始記」更為準確，因為希伯來聖經本卷的名稱是取用第一個字「起初」（בְּרֵאשִׁית，Bereshit）命名。全書敘述萬物的起源及以色列國的起源。希臘文七十士譯本將本書譯為「Genesis」，意為「起源、起始」，這個命名也被新約和教父們沿用至今。
            </p>
            <p className="text-gray-700 leading-relaxed">
              創世記是整本聖經的「種籽書」，聖經中所有重要主題都源於這本書，包括三位一體、人、罪、救恩、信心、稱義、婚姻、家庭、選民、先知、祭司、君王、末世、審判……等。可以說，沒有創世記的奠基，整本聖經的神學架構便無從理解。
            </p>
          </div>
        )}
      </div>

      {/* 貳、創世記作者 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('author')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-indigo-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">貳、創世記作者</span>
          </div>
          {expanded['author'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['author'] && (
          <div className="p-5 bg-white space-y-3">
            <p className="text-gray-700 leading-relaxed">
              創世記是五經的第一本。「五經」猶太人稱為 TORAH，有律法、法度、條例、訓誨的意思。從創世記廿六章5節：「因為亞伯拉罕聽從我的話，守我的吩咐和我的誡命、律例、法度（מִשְׁמֶרֶת）。」這個字在舊約聖經出現219次，大多翻譯為律法。
            </p>
            <p className="text-gray-700 leading-relaxed">
              五經以摩西為主要作者，有多處聖經引用為證，如約書亞記八章31節：「正如耶和華的僕人摩西所吩咐以色列人的，照著摩西律法書上所寫的」；列王記上二章3節：「要謹守耶和華你神所吩咐的，照著摩西律法上所寫的行走」；以及新約主耶穌在馬可福音十二章26節所引用：「摩西所著的書上」。這些引文均指向摩西為五經作者的傳統。
            </p>
          </div>
        )}
      </div>

      {/* 參、創世記的結構與大綱 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('structure')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Map className="w-5 h-5 text-indigo-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">參、創世記的結構與大綱</span>
          </div>
          {expanded['structure'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['structure'] && (
          <div className="p-5 bg-white space-y-4">
            <p className="text-gray-700 leading-relaxed">創世記的結構有兩種主要分析法：</p>
            <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
              <h4 className="font-semibold text-indigo-800 mb-2">一、多利達特公式（תּוֹלְדוֹת，eleh toledot）</h4>
              <p className="text-gray-700 leading-relaxed text-sm">
                希伯來片語「後代」(eleh toledot, 這是……的後代) 出現十次，構成全書的骨架：
                二4（天地的後代）、五1（亞當的後代）、六9（挪亞的後代）、十1（挪亞兒子的後代）、
                十一27（他拉的後代）、廿五12（以實瑪利的後代）、廿五19（以撒的後代）、
                卅六1（以掃的後代）、卅六9（以掃山地始祖的後代）、卅七2（雅各的後代）。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
              <h4 className="font-semibold text-blue-800 mb-2">二、按內容與文學形式分法</h4>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex gap-2">
                  <span className="font-semibold text-blue-700 flex-shrink-0">太古時期（一至十一章）：</span>
                  <span>人類的歷史，包含<strong>創造、墮落、洪水、巴別</strong>四個重要事件</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold text-blue-700 flex-shrink-0">族長時期（十二至五十章）：</span>
                  <span>族長的歷史，包含<strong>亞伯拉罕、以撒、雅各、約瑟</strong>四個重要人物</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 肆、本書五大部 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('parts')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-indigo-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">肆、本書五大部</span>
          </div>
          {expanded['parts'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['parts'] && (
          <div className="p-5 bg-white space-y-3">
            <p className="text-gray-700 leading-relaxed">本書書名是《指向終末的創世記》，其內容包含五大部：</p>
            <div className="space-y-2">
              {[
                { num: '第一部', title: '從創造到安息', desc: '主要講神的創造，包括起初與終末、神創造天地、聖靈的工作、生命真光、天空上的水、陸地與植物、日月與眾星、安息的生命、豐盛的生命、我們的形像、掌權的生命、神與人安息等十二章。' },
                { num: '第二部', title: '從生命樹到分別善惡樹', desc: '探討兩棵樹的深刻神學意涵，揭示律法與福音的道路，以及人在神面前的抉擇。' },
                { num: '第三部', title: '從亞當到挪亞', desc: '追蹤人類的墮落、繁衍與腐敗，至洪水審判的救恩，看見神在審判中的憐憫。' },
                { num: '第四部', title: '從挪亞到亞伯拉罕', desc: '探討洪水之後的重新開始，巴別塔事件，以及神呼召亞伯拉罕開啟救恩歷史新頁。' },
                { num: '第五部', title: '從亞伯拉罕到約瑟', desc: '追蹤族長時代的信心旅程，看神如何在平凡人的生命中成就非凡的救贖計劃。' },
              ].map((part, i) => (
                <div key={i} className="bg-indigo-50 rounded-lg p-3 border border-indigo-100">
                  <span className="font-semibold text-indigo-800">{part.num}「{part.title}」</span>
                  <p className="text-gray-700 text-sm mt-1">{part.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 伍、本書六大特色 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('features')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-indigo-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">伍、本書六大特色</span>
          </div>
          {expanded['features'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['features'] && (
          <div className="p-5 bg-white space-y-3">
            {[
              { num: '一', title: '與基督及終末相關', desc: '各部都包含有關基督的預言與形表，關聯基督的誕生、成長、傳道、救贖、復活、升天、頒賜年國、新天新地等。創世記中的每一個重要主題最終都指向基督的位格與工作。' },
              { num: '二', title: '與律法及福音相關', desc: '分別善惡樹與生命樹立在創世記二章，這兩棵樹分別標示律法與福音的道路。人走在律法路上是帶著罪的果子；雖然生命要到新天新地時才能完全出現，但羔羊的救恩早已臨到，使亞伯拉罕走在福音生命的道路，而非律法與死亡的道路。' },
              { num: '三', title: '與科學的關聯', desc: '福音派學者多數對進化論採較開放的態度。本書作者是物理學家，比較了真實科學與無神論科學的根本分野，從科學角度探討神的創造行動。' },
              { num: '四', title: '與靈命及教牧相關', desc: '第二、三章生命樹與分別善惡樹的意義，第六章「神的兒子」是誰，不同的解釋帶出截然不同的應用。每章提供全面的了解，各章多次從不同層面分析牧養的應用。' },
              { num: '五', title: '與華人的信仰相關', desc: '創世記一至九章所描述的上古歷史，其主要繼承者乃是亞洲人。本書特別關注創世記神學與華人文化信仰傳統之間的聯繫與對話。' },
            ].map((f, i) => (
              <div key={i} className="border-l-4 border-indigo-400 pl-4 py-1">
                <span className="font-semibold text-indigo-800">{f.num}、{f.title}</span>
                <p className="text-gray-700 text-sm mt-1 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 章節目錄 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('chapters')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-indigo-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">第一部：從創造到安息（目前章節）</span>
          </div>
          {expanded['chapters'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['chapters'] && (
          <div className="p-5 bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { ch: '第一章', title: '起初與終末', desc: '創造的開始與完成，聖經的起初與終末' },
                { ch: '第二章', title: '神創造天地', desc: '三位一體的創造，bara 前無今有' },
                { ch: '第三章', title: '聖靈的工作', desc: '空虛混沌、黑暗的意義、聖靈運行' },
                { ch: '第四章', title: '生命的真光', desc: '光的起源，光暗分別，時間的起點' },
                { ch: '第五章', title: '天空上的水', desc: '穹蒼的意義，天上水層的功能' },
                { ch: '第六章', title: '陸地與植物', desc: '第三日的雙好日，亞當與土地的字根關係' },
              ].map((c, i) => (
                <div key={i} className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-3 border border-indigo-100">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-100 rounded px-2 py-0.5">{c.ch}</span>
                    <span className="font-semibold text-gray-800 text-sm">{c.title}</span>
                  </div>
                  <p className="text-gray-600 text-xs">{c.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-4 text-center">（第七至十章內容將於後續新增）</p>
          </div>
        )}
      </div>
    </div>
  );
}
