import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch6() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第六章</h1>
        <h2 className="text-xl font-semibold text-gray-700">陸地與植物</h2>
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
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、第三日的雙重「好」</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記一章9至13節記述第三日的創造，這是創造七日中唯一一天神說了兩次「看著是好的」（創一10、12）。第二日（創一8）是整個創造週中唯一沒有「看著是好的」評語的一天。這個規律性的差異絕非偶然，而是刻意的文學安排，暗示第三日以「雙好」補足了第二日缺少的那個「好」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                為什麼第二日沒有「好」？解釋不一：有學者認為第二日的工作（水的分別）本身是中性的，「好」的評語在創造週中需保留給「完整創造單元」；另有學者認為第二日的工作在第三日（陸地出現）才算完成——水的分別需要有陸地的出現才能彰顯意義，因此第三日以雙重的「好」確認了第二日和第三日兩天工作的完整性。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神學上的意涵更為深遠：整個創造週的「好」並非孤立的片段評估，而是逐步積累的創造目的之實現。每一個「好」都指向最終的「甚好」（一31），而最終的「甚好」又指向末世新天新地的完全美好——神的創造計劃是一個從「好」進展到「甚好」、再進展到「完全美好」的終末過程。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、אָדָם（亞當）與אֲדָמָה（土地）的字根關係</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                第三日陸地（יַבָּשָׁה，yabbashah）和土地（אֲדָמָה，adamah）的出現，為後來第六日人類的創造預備了關鍵的語言和神學連結。希伯來文中，「人」（אָדָם，adam）和「地/土地」（אֲדָמָה，adamah）共享同一個字根，這絕非偶然的語音巧合。
              </p>
              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200 mb-4">
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-indigo-800">אָדָם（adam）= 人類</span>
                    <p className="text-gray-700 mt-1">既是個人名字「亞當」，也是人類的通稱。字根含義可能與「紅色/紅土」（אָדֹם，adom）相關，或指「從土來的存在」。</p>
                  </div>
                  <div>
                    <span className="font-semibold text-indigo-800">אֲדָמָה（adamah）= 土地</span>
                    <p className="text-gray-700 mt-1">指肥沃的耕地，與人類農業生活密切相關。在創世記二章7節，神「用地上的塵土（アダマー的塵土）造人（adam）」，明確揭示人與地的字根連結。</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                這個字根連結具有深刻的神學意涵：人類是「屬地的存在」——由地的塵土構成（創二7），靠地的出產維生（創一29），並被呼召管理地（創一28）。在墮落之後，人對土地的關係也因罪被扭曲（創三17-19：土地受咒詛，人必終生勞苦才能得土地的出產）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                在末世的更新中，這個關係將得到完全的修復：羅馬書八章21節說「受造之物必從敗壞的轄制中得釋放，得享神兒女自由的榮耀」——包括土地本身的得救贖。「新地」（啟廿一1）是新天新地的一部分，屬地的人類將在新地上得到完全的更新和復興。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、植物的三大功能</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記一章11至12節記述第三日植物的創造：「地要發生青草，和結種子的蔬菜，並結果子的樹木，各從其類，果子都包著核。」神創造植物，賦予植物三個主要功能：
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: '供應食物（實用功能）',
                    desc: '植物是整個食物鏈的基礎。光合作用將太陽能轉化為可供生命利用的有機物，動物和人類直接或間接依賴植物為食。創世記一章29至30節明確說神將蔬菜和果子賜給人為食，果子賜給走獸和飛鳥為食——植物的食物供應是整個陸生生態系統的能量基礎。'
                  },
                  {
                    title: '彰顯美麗（審美功能）',
                    desc: '創世記二章9節說「耶和華神使各樣的樹從地裡長出來，可以悅人眼目，其上的果子可作食物」（合和本原文）。植物之美麗（花朵、葉片、果實的色彩、形態、香氣）是神賜給人類的禮物，也是創造美善的彰顯。詩篇一○四章16節歌頌黎巴嫩的香柏樹，馬太福音六章28至29節說「野地的百合花比所羅門極榮華的時候穿戴的還要美麗」。植物之美不是偶然進化的副產品，而是神有意設計來彰顯祂的榮耀的。'
                  },
                  {
                    title: '象徵聖潔（靈性功能）',
                    desc: '伊甸園中的植物不只是實用的糧食，也是靈性真理的象徵載體：生命樹（創二9）象徵神賜予的不朽生命，分別善惡樹（創二9）象徵道德自主的誘惑。在聖殿設計中（王上六章29節），牆上雕刻著各種樹木花草的圖案，呼應伊甸園的意象。基督自稱「真葡萄樹」（約十五1），我們是枝子，結出生命的果子。在末世的新耶路撒冷中，「生命樹」再次出現（啟廿二2），帶著十二樣果子，葉子乃為醫治萬民——植物的靈性象徵在終末得到完全的實現。'
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
                    <span className="font-semibold text-indigo-800">{i + 1}. {item.title}</span>
                    <p className="text-gray-700 text-sm mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">肆、「各從其類」的神學意涵</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                植物創造記述中反覆出現的「各從其類」（לְמִינֵהוּ，le-minehu），在整個創造週中出現了十次，是創世記一章中出現次數最多的短語之一。「各從其類」宣告的是創造秩序的穩定性和確定性：每種植物按其類別繁殖，保持物種的特定性，而非無限地流動混合。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這個「各從其類」並不否定物種在「類」的範圍內的適應性變化（微觀進化，microevolution），但它確實宣告了物種之間有神所設立的基本界線（不支持宏觀進化，macroevolution——一個「類」自然轉化為另一個根本不同的「類」）。現代遺傳學的發現（遺傳信息的高度複雜性、遺傳屏障的存在）支持這個創造秩序的穩定性。
              </p>
              <p className="text-gray-700 leading-relaxed">
                更深的神學意涵是：「各從其類」反映了神是秩序的神（哥前十四章33節：「神不是叫人混亂，乃是叫人安靜」），祂的創造是有條理、有界線、有秩序的。這個秩序在人類墮落後受到破壞，但在末世的更新中將得到完全的復原和昇華。
              </p>
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
                '第三日是創造七日中唯一神說兩次「看著是好的」的日子，以「雙好」補足第二日缺少的評語，神學上指向整個創造計劃從「好」進展到「甚好」再到終末「完全美好」的歷程。',
                '希伯來文「人」（אָדָם，adam）與「土地」（אֲדָמָה，adamah）共享字根，神學意涵是人類是屬地的存在——由塵土造、靠土地維生、被呼召管理地；墮落使人地關係扭曲，末世更新將使「新地」與人一同得救贖（羅八21）。',
                '植物的三大功能：供應食物（食物鏈基礎）、彰顯美麗（悅人眼目的恩典）、象徵聖潔（生命樹、葡萄樹、末世生命樹等靈性符號）。',
                '「各從其類」在創造記述中出現十次，宣告創造秩序的穩定性——各種植物按其類別繁殖，物種間有神所設立的基本界線，支持秩序而非混亂的創造神學。',
                '植物在末世的更新：啟示錄二十二章2節的「生命樹」帶十二種果子、葉子醫治萬民，是伊甸園生命樹的終末實現，植物在新天新地中仍有其角色。',
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
              '「人」（adam）和「地」（adamah）共享字根，人是屬地的存在。你如何看待基督徒與大地、環境保育的責任？在末世盼望「新地」的前提下，今生對環境的關愛是否仍然重要？為什麼？',
              '約翰福音十五章1至8節，耶穌以「葡萄樹與枝子」說明門徒關係，以「結果子」說明門徒生命的目標。聯繫本章植物的三大功能（食物、美麗、聖潔），你如何理解自己在神的「創造設計」中作為「結果子的植物」的使命？',
              '啟示錄二十二章2節的生命樹「每月都結果子，樹的葉子乃為醫治萬民」。這個末世的異象如何激勵你現在的服事和生命？在今日，你可以如何體現「葉子醫治萬民」的使命？',
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
