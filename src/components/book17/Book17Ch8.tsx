import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Search, HelpCircle, Check } from 'lucide-react';

export default function Book17Ch8() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    exploration: true,
    questions: true,
    practice: true,
  });

  const toggleSection = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">第八章</h1>
        <h2 className="text-xl font-semibold text-gray-700">面對信仰與處境的張力</h2>
        <p className="text-sm text-gray-500 mt-1">哥林多前書 七1-40</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">一、婚姻與獨身（七1-16）</h4>
              <p className="text-gray-700 leading-relaxed">保羅回應哥林多人「人不近女為妙」的主張，指出婚姻是應對性欲的正當管道，夫妻在性生活上有互相的義務，不應任意禁欲。同時他也肯定獨身的恩賜：有獨身恩賜者可以更專心事奉神。對混合婚姻（一方信主、一方不信）的原則是：若不信的配偶願意同住，信主的一方不應離開；若不信的配偶要離開，就由他/她離去。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">二、在現有的呼召中安然居住（七17-24）</h4>
              <p className="text-gray-700 leading-relaxed">保羅提出一個重要原則：「各人蒙召時是在什麼情形，就要在那情形安然居住。」這適用於受割禮與未受割禮、作奴僕與作自由人。被召時的處境（婚姻狀況、社會地位）不應成為逃離的藉口，因為被召時就已蒙恩，神的恩典足夠。但「若能自由，更要取用」——若有改善的機會，可以好好運用。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">三、末世關懷與獨身的屬靈優先性（七25-40）</h4>
              <p className="text-gray-700 leading-relaxed">保羅以「現今的艱難」和「時候的緊迫」為背景，建議未婚者保持現狀。已婚者不必追求離婚，但若未婚者選擇不嫁，是更好的選擇——因為已婚者掛慮世上的事，未婚者能一心為主。這不是貶低婚姻，而是在末世處境中的務實建議。</p>
            </div>
          </div>
        )}
      </div>

      {/* 延伸探討 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('exploration')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">延伸探討</span>
          </div>
          {expanded['exploration'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['exploration'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">婚姻與獨身：兩種呼召的神學</h4>
              <p className="text-gray-700 leading-relaxed">保羅第七章最革命性的見解，是把獨身提升為與婚姻同等有效的屬靈選擇。在當時猶太文化中，獨身是異常的；在羅馬文化中，也有社會壓力鼓勵婚育。保羅肯定兩者都是恩賜（charisma），都可服事神，只是服事的方式和優先次序不同。這讓每個人在選擇或接受自身狀況時，有更寬廣的神學空間。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「在現有呼召中安然居住」的處境神學</h4>
              <p className="text-gray-700 leading-relaxed">七章17-24節是保羅書信中最具神學深度的處境原則之一：神呼召人，是在人的具體處境中呼召，而神的恩典也夠用在那個處境中。這不是鼓吹宿命論或接受一切不義，而是說：改變的動力不應是「逃離」，而應是「在被召之處榮耀神」。「若能改善，更要用」則留下了主動改善環境的空間。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">末世觀與現實生活的張力</h4>
              <p className="text-gray-700 leading-relaxed">保羅在七章29-31節的勸告極為獨特：「有妻子的要像沒有妻子……買東西的要像不持有……」這不是說婚姻或財產不重要，而是說在末世關懷下，對這些事不應過於執著。今世的形狀是會過去的，信徒要保持靈魂的自由——既全情投入現實生活，又不被它牢牢捆綁。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">保羅的「我以為」與啟示的邊界</h4>
              <p className="text-gray-700 leading-relaxed">第七章中保羅多次說「我說」、「我的意見」、「不是主的命令，是我自己的話」，顯示他刻意區分「主的命令」與「我的智慧判斷」。這讓人印象深刻：即使是使徒，也在謹慎標明聖靈啟示與人的智慧之間的邊界。這種謙遜對今日宣稱「這是神的話」的信徒和領袖，是深刻的提醒。</p>
            </div>
          </div>
        )}
      </div>

      {/* 反思問題 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">反思問題</span>
          </div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && (
          <div className="p-5 bg-white space-y-3">
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">1.</span>
              <p className="text-gray-700">你如何理解「婚姻是恩賜，獨身也是恩賜」？在你的教會文化中，哪種狀態受到更多的肯定？這種文化偏向如何影響了未婚或已婚的弟兄姊妹？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">「在現有的呼召中安然居住」——你是否對目前的處境（工作、婚姻狀況、生活環境）有強烈的不滿和逃離欲望？這段話對你有何提醒？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">末世關懷讓保羅建議信徒對今世的一切「放鬆執著」。你在哪些事情上「執著得太緊」，以至於影響了你對神國的關注？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">保羅區分「主的命令」和「我的意見」——你在傳遞信仰觀點時，是否也有這種謹慎？你是否曾把自己的意見誤當成「神的話」傳給別人？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">若你已婚，你是否在婚姻中體驗過「一心為主」和「掛慮世上的事」之間的張力？如何在婚姻中仍保持對神的專心？</p>
            </div>
          </div>
        )}
      </div>

      {/* 具體實踐方針 */}
      <div className="mb-6 border border-green-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('practice')} className="w-full px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">具體實踐方針</span>
          </div>
          {expanded['practice'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['practice'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 「在被召之處榮耀神」的宣告</h4>
              <p className="text-gray-700 mb-2">找一個你目前最想逃離的處境（工作、關係、生活環境），做以下的練習：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>承認神在這個處境中也呼召了你</li>
                <li>問：神希望我在這裡榮耀祂，我可以如何做到？</li>
                <li>這週做一件「在被召之處安然居住」的具體行動</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">⏰ 末世觀的生活實驗</h4>
              <p className="text-gray-700 mb-2">選擇一件你正在過度執著的事（計畫、財物、關係），本週練習：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>每天提醒自己「今世的形狀是會過去的」</li>
                <li>把這件事放在神的手中，告訴神你願意以神國為優先</li>
                <li>觀察這個練習如何帶來內心的安靜和自由</li>
              </ul>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-sm text-green-800 font-medium mb-1">本週禱告</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">
                「主啊，謝謝祢在我具體的處境中呼召了我。讓我不只是想著逃離，而是問：祢要我在這裡做什麼？讓我不執著於今世短暫的事，以末世的眼光看待我現在的選擇。不管是婚姻或獨身，讓我的生命狀態都成為服事祢的空間。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
