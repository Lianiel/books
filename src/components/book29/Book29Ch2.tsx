import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch2() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第二章</h1>
        <h2 className="text-xl font-semibold text-gray-700">神創造天地</h2>
      </div>

      {/* 正文 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">正文</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、三位一體的創造</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「起初，神創造天地。」（創一1）這句話中的「神」，希伯來原文是「Elohim」（אֱלֹהִים），這是一個複數形式的名詞，卻配以單數動詞「bara」（創造）。這個語法特點已然暗示三位一體的真理——一個神，卻有多個位格的豐富內在。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在創世記一章中，我們看到三位一體在創造中的協同工作：「神」（Elohim，父神）說「要有」並看著是好的；「神的靈」（一2，聖靈）運行在水面上；而約翰福音一章1至3節揭示「那道（Logos，耶穌基督）在太初就與神同在……萬物是藉著他造的，凡被造的，沒有一樣不是藉著他造的。」歌羅西書一章16節也確認：「萬有都是靠他（基督）創造的……」因此，創造是三位一體共同的工作，非任何一位位格單獨完成的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這個三位一體的創造觀對神學有重大意涵：神不是孤獨的個體，祂在創造之前就擁有永恆的愛的關係（父愛子，子愛父，聖靈是愛的連結）。當神創造人「按著我們的形象」（創一26）時，這個「我們」正是三位一體的神，暗示人被造的目的就是進入這個愛的關係，而非只是完成某種功能。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、בָּרָא（bara）——前無今有的創造</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「神創造天地」中的「創造」，希伯來文是「בָּרָא」（bara）。這個詞在舊約聖經中有一個顯著特點：它的主詞<strong>永遠是神</strong>，從來不用於人的創造活動。人可以「製造」（asah）、「建造」（banah）、「形成」（yatzar），但只有神能「bara」——前無今有（ex nihilo），從無到有地創造。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這個「前無今有」的概念在哲學上具有重要意涵。古代近東的其他創造神話（如巴比倫的《以努瑪埃利什》）描述的是神從既存的混沌物質中整理出世界，而非真正意義上的「從無創造」。希伯來聖經所啟示的「bara」是一種根本性的本體論宣告：在神創造之前，宇宙中沒有任何物質存在；物質本身的存在，是神創造意志的產物。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                馬加比二書七章28節（次經）明確說：「我求你看看天地，看看其中所有的，想想神創造這一切時並非從既有的東西中創造」——這是「從無創造」（creatio ex nihilo）最清晰的聖經表述之一。希伯來書十一章3節也說：「我們因著信，就明白諸世界是藉神話語造成的，這樣，所看見的，並不是從顯然之物造出來的。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、「諸天」與「地」</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「天地」在希伯來文中是「הַשָּׁמַיִם וְאֵת הָאָרֶץ」（ha-shamayim ve-et ha-aretz），字面意思是「諸天與那地」。「諸天」（shamayim）是複數形式，可以指大氣層（天空）、星空（宇宙），也可以指屬靈的領域（神的居所）。「那地」（ha-aretz）有定冠詞，指特定的這塊地，即後來被稱為「地球」的居所。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這個「天地」的組合在舊約中是一個常用的慣用語，表示「整個宇宙，包含萬物」。因此創一1「神創造天地」是一個<strong>總綱性宣告</strong>，說明神創造了整個宇宙的全部；接下來的六日記述，則是這個創造行動的詳細展開。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">肆、創造神蹟的本質</h3>
              <p className="text-gray-700 leading-relaxed mb-3">創造行動作為神蹟，具有以下四個本質特點：</p>
              <div className="space-y-3">
                {[
                  { title: '在最初（Primordial）', desc: '創造是一切神蹟的原型，也是所有神蹟中最根本的一個。若神能從無到有創造宇宙，其他任何神蹟（如分開紅海、使死人復活）都不過是對已存在物質的重新安排，在能力量級上遠低於「創造」本身。' },
                  { title: '超自然（Supernatural）', desc: '創造不受自然律的約束，因為自然律本身是神創造的產物。神不是在既有的自然律框架內運作，而是自然律的建立者，祂可以在任何時候任何地點超越或暫停祂所設立的自然律。' },
                  { title: '唯一（Unique）', desc: '創造（bara）只有神能做，沒有任何被造物有能力從無到有創造出任何東西。人的所謂「創造力」，不過是對已存在物質的重新組合和排列；真正的「前無今有」創造，是神的專屬行動。' },
                  { title: '恩典（Gracious）', desc: '神的創造是出於恩典而非必要。神在創造之前就已完全滿足（三位一體的完全），祂創造宇宙和人類不是因為有什麼需要，而是出於祂充溢的愛與恩典，願意讓受造物分享存在的喜樂。' },
                ].map((item, i) => (
                  <div key={i} className="bg-indigo-50 rounded-lg p-3 border border-indigo-100">
                    <span className="font-semibold text-indigo-800">{i + 1}. {item.title}</span>
                    <p className="text-gray-700 text-sm mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">伍、創造的基本意義</h3>
              <div className="space-y-3">
                {[
                  { title: '神的主權宣告', desc: '「神創造天地」首先是一個主權宣告。神作為創造者，對所造的萬物擁有絕對的主權和所有權。詩篇二十四章1節說：「地和其中所充滿的，世界和住在其間的，都屬耶和華。」這意味著人類是受委任的管家，而非土地的最終擁有者。' },
                  { title: '神的旨意展示', desc: '創造的目的是展示神的榮耀。以賽亞書四十三章7節說神創造人是「為我的榮耀創造的」；詩篇十九篇說「諸天述說神的榮耀」。因此，整個受造界的存在都是為了彰顯創造者的屬性和榮耀。' },
                  { title: '人神關係的基礎', desc: '創造建立了人與神之間的基本關係——創造者與受造物的關係。人類的存在依賴神，人類的意義來自神，人類的目的指向神。這是人類倫理、道德和靈性生命的根基。拋開創造者，受造物的存在便失去了意義的根基。' },
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-indigo-400 pl-4 py-1 mb-2">
                    <span className="font-semibold text-indigo-800">{i + 1}. {item.title}</span>
                    <p className="text-gray-700 text-sm mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}
      </div>

      {/* 重點整理 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-sky-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">重點整理</span>
          </div>
          {expanded['summary'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['summary'] && (
          <div className="p-5 bg-white">
            <ul className="space-y-3">
              {[
                '「Elohim」（神）是複數名詞配單數動詞，已暗示三位一體的奧秘；創造是聖父、聖子（道/Logos）、聖靈三位一體共同的工作。',
                '希伯來動詞「bara」（創造）的主詞永遠是神，指的是前無今有（ex nihilo）的創造，這是人類完全無法複製的行動。',
                '「神創造天地」是一個總綱性宣告，「天地」代表整個宇宙；接下來六日的創造是這個宣告的詳細展開，而非重複或矛盾。',
                '創造神蹟的四個本質：在最初（原型神蹟）、超自然（超越自然律）、唯一（只有神能做）、恩典（出於愛而非必要）。',
                '創造確立了三個基本意義：神的主權宣告（萬物屬神）、神的榮耀展示（受造界為彰顯神而存在）、人神關係基礎（人依賴並指向神）。',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-gray-700 leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* 分享題目 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-yellow-50 hover:from-amber-100 hover:to-yellow-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">分享題目</span>
          </div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && (
          <div className="p-5 bg-white space-y-4">
            {[
              '約翰福音一章1至3節描述基督（道）在創造中的角色，這對你理解耶穌基督的位格和工作有什麼新的啟發？你認為創造中三位一體的協作，如何反映在教會群體的生活中？',
              '「bara」（創造）只有神能做，人類的所謂「創造」只是重新組合已有的材料。這個認識如何影響你對人類尊嚴、藝術創作、科技創新的理解？對你的謙遜或感恩有什麼具體的提醒？',
              '創造是「恩典性」的行動——神不是因為有需要才創造，而是出於充溢的愛。這對你理解自己的存在意義有什麼影響？你如何在日常生活中回應這種「被白白創造和被白白愛」的恩典？',
              '本章說到創造確立了神的主權和人作為「管家」（而非所有者）的位置。在環保、財富管理、時間分配等具體領域上，「管家意識」如何改變你現有的態度和行為？',
            ].map((q, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0 text-lg">{i + 1}.</span>
                <p className="text-gray-700 leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
