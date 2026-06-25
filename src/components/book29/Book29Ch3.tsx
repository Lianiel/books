import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch3() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第三章</h1>
        <h2 className="text-xl font-semibold text-gray-700">聖靈的工作</h2>
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
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、空虛混沌</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記一章2節：「地是空虛混沌，淵面黑暗；神的靈運行在水面上。」這節經文描述的是創世記一章1節「神創造天地」這個總綱性宣告之後，在神開始宣說創造命令之前，初始狀態的描述。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「空虛混沌」在希伯來文中是「תֹּהוּ וָבֹהוּ」（tohu va-vohu），這兩個詞的組合在聖經中出現三次（創一2、以賽亞書卅四11、耶利米書四23），形成一種對「混亂無序」的強烈描述。
              </p>
              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200 mb-4">
                <h4 className="font-semibold text-indigo-800 mb-2">兩個關鍵詞的語義</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-semibold text-indigo-700">תֹּהוּ（tohu）：</span>
                    <span className="text-gray-700">空虛、荒廢、混亂、沒有形式。在以賽亞書四十章17節翻為「無」，四十五章18節說神創造地「並非使地荒涼（tohu）」，表明空虛混沌不是神最終的目的。</span>
                  </div>
                  <div>
                    <span className="font-semibold text-indigo-700">בֹּהוּ（bohu）：</span>
                    <span className="text-gray-700">空洞、虛空。這個詞在整個舊約中只出現三次，均與 tohu 連用，進一步加強「空虛混沌」的程度。</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                重要的神學問題是：這個「空虛混沌」的狀態，是神原初創造的結果（即神先創造了一個混沌的地球，然後再六日整頓），還是神「起初創造天地」之後緊接著的狀態描述？
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                多數保守派神學家認為，創一2是對創一1「在起初」那一刻的描述：在神說「要有光」之前，物質剛被創造出來時的初始狀態是無形無序的，就如同陶工剛取出一塊泥土，還未開始塑形一樣。神的六日創造工作，正是將這個「空虛混沌」有序化、豐富化、充實化的過程。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、黑暗的意義</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「淵面黑暗」的「黑暗」（חֹשֶׁךְ，choshech）在聖經中有多層含義，讀者必須根據上下文分辨：
              </p>
              <div className="space-y-3">
                {[
                  { title: '物質性的黑暗', desc: '這是最直接的意涵：光尚未被創造（第一日才說「要有光」），因此整個初始狀態是沒有光的自然黑暗。這種黑暗本身並不帶有道德或靈性的負面含義，它只是光的缺席。' },
                  { title: '象徵性的黑暗', desc: '聖經中「黑暗」常用來象徵無知、罪惡、死亡、與神隔絕的狀態（詩篇一○七章10節、以賽亞書九章1-2節、約翰福音一章5節）。創造記述中的黑暗，預示了後來因人類墮落而帶來的靈性黑暗，而神的光明（創一3）則預表了最終的救贖——基督是「世界的光」（約八12）。' },
                  { title: '末世性的黑暗', desc: '啟示錄描述新天新地時說「不再有黑夜」（廿一25），因為神羔羊就是燈。這意味著創世記開始時的黑暗，不僅是歷史的起點，也預設了末世時黑暗被徹底消除的盼望。從創一2到啟廿一25，是一部光明征服黑暗的救贖歷史。' },
                ].map((item, i) => (
                  <div key={i} className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                    <span className="font-semibold text-blue-800">{i + 1}. {item.title}</span>
                    <p className="text-gray-700 text-sm mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、聖靈的運行（רָחַף，rachaph）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「神的靈運行在水面上」，這裡的「運行」（רָחַף，rachaph）是一個極為生動的詞。在整個舊約中，這個詞只出現三次：創世記一章2節、申命記三十二章11節（神如鷹攪動巢穴、飛翔在雛鷹上）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在申命記三十二章11節的語境是：鷹撲動翅膀（rachaph），俯衝下來托住摔落的小鷹，教它飛翔。這個動作是：
              </p>
              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200 mb-4">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-indigo-700 font-semibold flex-shrink-0">•</span><span>振翼孵蛋/哺育：母鳥振動翅膀，用體溫孵化雛鳥</span></li>
                  <li className="flex gap-2"><span className="text-indigo-700 font-semibold flex-shrink-0">•</span><span>盤旋保護：鷹在巢上方盤旋，形成保護性的「氣流」</span></li>
                  <li className="flex gap-2"><span className="text-indigo-700 font-semibold flex-shrink-0">•</span><span>激發生命：這個動作喚醒並激發了原本靜止的生命潛能</span></li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                因此，聖靈「運行在水面上」的意象是：在原初的混沌之上，聖靈如母鷹般在水面振翼盤旋，以祂的同在孵化、保護、激發生命。這不是一個被動的「存在」（being present），而是一個主動的「準備」（preparing）——聖靈在為神即將宣說的創造命令做出呼應和激活的預備。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這個意象在新約中有其對應：聖靈在信徒的重生（約三5）中也扮演同樣的角色——在人心靈的「混沌與黑暗」之上運行，帶來新生命。哥林多後書四章6節說：「那吩咐光從黑暗裡照出來的神，已經照在我們心裡，叫我們得知神榮耀的知識。」這正是聖靈在人心靈中重演的創造工作。
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
                '「空虛混沌」（תֹּהוּ וָבֹהוּ，tohu va-vohu）描述神六日創造開始前的初始狀態，代表無形無序，不是神的最終目的（以賽亞書四十五章18節）。',
                '「黑暗」在創一2有三層含義：物質性（光尚未被造）、象徵性（預示靈性黑暗與救贖之光）、末世性（與新天新地「不再有黑夜」相對應）。',
                '「運行」（רָחַף，rachaph）只出現三次，意為「振翼孵蛋/撲翼盤旋」，描述聖靈在初始混沌之上主動激發和保護生命的工作。',
                '聖靈在創造時的「運行」與祂在重生時的工作相對應（約三5）；都是在「混沌黑暗」中激發新生命，是創造工作在靈性層面的重演。',
                '創世記一章2節的「淵面黑暗」到啟示錄二十一章「不再有黑夜」，構成一部聖靈引領光明征服黑暗的救贖歷史。',
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
              '聖靈在創造時「運行（撲翼）在水面上」的意象，讓你對聖靈的工作有什麼新的認識？你在自己生命中的哪些「混沌黑暗」時刻，曾感受到聖靈如此「運行」在你身上？',
              '「空虛混沌」不是神的最終目的（以賽亞書四十五章18節）。你生命中是否有哪些看似「空虛混沌」的地方，你相信神的靈正在那裡運行，等待帶出新的秩序與美麗？',
              '本章從「創世記的黑暗」連到「重生」再到「新天新地」，展示一個從創造到終末的完整光明歷程。在你現在的生命光景中，你最能與哪個階段產生共鳴？為什麼？',
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
