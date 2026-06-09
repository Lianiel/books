import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book27Ch2() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true, summary: true, exploration: true, questions: true, practice: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">第2課</h1>
        <h2 className="text-xl font-semibold text-gray-700">是的，你是基督所愛的人</h2>
        <p className="text-sm text-gray-500 mt-1">在基督裡的豐富資源</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-emerald-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-emerald-700 mb-2">基督在一切之上——歌羅西書的大宣告</h3>
              <p className="text-gray-700 leading-relaxed">歌羅西書1:15-23是一首讚美基督崇高地位的詩篇。保羅宣告，基督是「那不能看見之神的像」，是「首生的，在一切被造的以先」（西1:15）。萬有都是借著祂造的，為祂造的，也都靠祂維持。在教會中，祂是元首；在死裡復活這件事上，祂是「首生的」。保羅的核心宣告是：「因為父喜歡叫一切的豐盛在祂裡面居住」（西1:19）。</p>
              <p className="text-gray-700 leading-relaxed mt-2">這不只是一個關於基督的神學陳述；它有直接的牧養含義。如果一切的豐盛都在基督裡，那麼在我們與基督的聯合中，我們也就有份於這豐盛。這正是保羅在歌羅西書2章1至15節所展開的：「你們在祂裡面也得了豐盛」（西2:10）。</p>
            </div>
            <div>
              <h3 className="font-bold text-emerald-700 mb-2">三重資源：稱義、智慧、力量</h3>
              <p className="text-gray-700 leading-relaxed">本課圍繞一個核心問題：在改變的掙扎中，我需要什麼？根據歌羅西書，在基督裡我們有三重豐富的資源：</p>
              <ul className="mt-3 space-y-3">
                <li className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                  <p className="font-semibold text-blue-700">① 稱義（過去的保障）</p>
                  <p className="text-gray-700 text-sm mt-1">基督「藉著祂肉身受死，叫你們與自己和好」（西1:22），使我們在神面前「聖潔沒有瑕疵，無可指責」。這是我們的法律地位——不是因為我們表現完美，而是因為基督的義算在我們帳上。知道我們已被完全接納，使我們不必再為了贏得神的愛而努力表現，也不必因失敗而陷入絕望。</p>
                </li>
                <li className="bg-purple-50 rounded-lg p-3 border border-purple-100">
                  <p className="font-semibold text-purple-700">② 智慧（當下的引導）</p>
                  <p className="text-gray-700 text-sm mt-1">在基督裡「藏著一切智慧知識的寶藏」（西2:3）。面對生活的複雜性，我們不是單靠自己的判斷；我們有神話語的智慧、聖靈的引導，以及身邊有智慧的弟兄姊妹。這智慧幫助我們辨別表面問題背後的心靈問題，做出符合神旨意的選擇。</p>
                </li>
                <li className="bg-green-50 rounded-lg p-3 border border-green-100">
                  <p className="font-semibold text-green-700">③ 力量（每日的能力）</p>
                  <p className="text-gray-700 text-sm mt-1">「因為神的一切豐盛，都有形有體的居住在基督裡面，你們在祂裡面也得了豐盛」（西2:9-10）。基督住在我們心裡，祂的能力每天都向我們開放。這不是抽象的神學，而是每天早晨可以支取的真實力量，幫助我們面對那一天的挑戰。</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-emerald-700 mb-2">資產與負債：一個顛覆性的視角</h3>
              <p className="text-gray-700 leading-relaxed">本課引入一個有力的圖像——「資產與負債表」。在這個世界的會計邏輯中，我們首先評估自己的「資產」（家庭背景、才能、教育、成就、良好關係）和「負債」（失敗的過去、傷害、缺乏、弱點）。我們常常用這張表來評估自己改變的潛能：我有沒有足夠的資產來成功？</p>
              <p className="text-gray-700 leading-relaxed mt-2">但福音告訴我們，這張表需要根本性的重寫。在基督裡，我們最大的「資產」不是我們的天賦或努力，而是基督自己——祂的稱義、祂的智慧、祂的大能。同時，我們最大的「負債」——罪和與神的分離——已經在十字架上被基督完全支付清楚了。</p>
              <p className="text-gray-700 leading-relaxed mt-2">這意味著什麼？意味著我的改變潛能不是由我的過去或我的才能決定的，而是由住在我裡面的基督決定的。一個有傷痛過去的人，一個才能有限的人，一個反覆失敗的人——在基督裡，都可以經歷真實且深刻的改變。</p>
            </div>
            <div>
              <h3 className="font-bold text-emerald-700 mb-2">改變的核心動力：認識基督</h3>
              <p className="text-gray-700 leading-relaxed">保羅在腓立比書3:10說他最大的渴望是「要認識基督」。這不是指頭腦上的知識，而是持續深入的關係性認識——認識祂的大能，認識祂受苦的樣式，與祂有份。這種認識本身就是改變的動力。當我們真正認識基督的愛是多麼廣闊長深高（弗3:18），我們就越來越願意離棄那些假冒的滿足，回到那真正能滿足的源頭。</p>
            </div>
          </div>
        )}
      </div>

      {/* 重點總結 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-sky-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">重點總結</span>
          </div>
          {expanded['summary'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['summary'] && (
          <div className="p-5 bg-white">
            <ul className="space-y-2">
              {[
                '基督是「一切豐盛」的居所，與基督聯合的信徒在祂裡面也得了豐盛（歌羅西書2:10）。',
                '在改變的掙扎中，我們在基督裡有三重資源：稱義（過去的保障）、智慧（當下的引導）、力量（每日的能力）。',
                '知道自己已被完全接納（稱義），使我們從表現壓力中釋放，能夠從愛而非恐懼出發去尋求改變。',
                '我們的改變潛能不是由過去的資產與負債決定，而是由住在我們裡面的基督決定。',
                '持續深入地「認識基督」是改變的核心動力，不是知識上的了解，而是關係上的親密。',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-gray-700">{point}</p>
                </li>
              ))}
            </ul>
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
              <h4 className="font-semibold text-gray-800 mb-2">「與基督聯合」的神學意涵</h4>
              <p className="text-gray-700 leading-relaxed">「與基督聯合」（Union with Christ）是改革宗神學的核心概念。加爾文稱之為「一切福分的源頭」。當我們信靠基督，聖靈使我們與祂聯合，使基督的生命成為我們生命的根基和資源。這不只是法律上的關係（我們的罪歸給祂，祂的義歸給我們），更是生命上的連結——就像枝子與葡萄樹的關係（約15:5）。這種聯合是稱義、成聖和最終榮耀化的基礎。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">恩典與努力的平衡</h4>
              <p className="text-gray-700 leading-relaxed">強調「在基督裡的豐盛」是否意味著不需要努力？完全不是。保羅在腓立比書2:12-13說：「當恐懼戰兢，作成你們得救的工夫；因為你們立志行事都是神在你們心裡運行，為要成就祂的美意。」神的動工和我們的努力是同時並行的，但次序很重要：是神先在我們心裡動工，我們才有意願和能力去努力。我們的努力是對神恩典的回應，而不是贏得恩典的手段。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">過去的傷害如何影響改變？</h4>
              <p className="text-gray-700 leading-relaxed">許多人認為，過去的創傷和傷害是他們無法真正改變的理由。本課提供了一個重要的平衡視角：一方面，我們的過去確實真實地影響了我們，我們的生長環境、受過的傷害和形成的習慣，都在我們身上留下了印記。另一方面，在基督裡，神的大能遠遠超過這些影響。我們不否認過去的現實，但我們也不讓過去成為現在的定義。「神所開始的善工，祂必完成」——包括在破碎的人生中也是如此。</p>
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
            {[
              '如果要你列出自己的「資產與負債表」，你會列什麼？這些資產和負債如何影響你對自己改變潛能的看法？',
              '稱義的確據——知道你已被完全接納——在你日常面對失敗時，實際上有多大的影響力？',
              '你有沒有在生活中的某個困境中，真實地「支取」了基督的智慧或力量？那次的經歷是怎樣的？',
              '「認識基督」對你來說意味著什麼？你目前如何在實際生活中加深對祂的認識？',
              '你有沒有用「我的過去太複雜了」或「我就是這樣的人」這樣的想法，限制了自己改變的可能性？',
            ].map((q, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0">{i + 1}.</span>
                <p className="text-gray-700">{q}</p>
              </div>
            ))}
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
              <h4 className="font-semibold text-green-700 mb-2">📋 重寫你的資產負債表</h4>
              <p className="text-gray-700 mb-2">在紙上畫兩欄：「世界的眼光」和「在基督裡的眼光」。在第一欄列出你習慣用來評估自己的資產（才能、成就、關係）和負債（失敗、弱點、傷害）。在第二欄，根據本課的教導，重新描述你在基督裡真正的地位和資源。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 歌羅西書2:6-15 默想操練</h4>
              <p className="text-gray-700 mb-2">每天花10分鐘讀歌羅西書2:6-15，選一節讓你特別觸動的經文，用自己的話改寫它，將其變成今天具體情境的應用。例如：「你們在祂裡面也得了豐盛」可以改寫為：「今天面對這個困難的對話，我有基督的智慧可以倚靠。」</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 認同宣告</h4>
              <p className="text-gray-700 mb-2">寫一句關於你在基督裡身分的「認同宣告」，貼在鏡子或手機桌面上，每天早晨提醒自己。例如：「我是基督所愛的人。我已被完全接納。我在基督裡有一切所需的。」</p>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告詞</h4>
              <p className="text-gray-700 italic leading-relaxed text-sm">「主耶穌，感謝祢，我在祢裡面有一切的豐盛。感謝祢為我的罪完全付清了代價，使我在神面前站立。求祢幫助我在面對困難和失敗時，不是往內看自己的不足，而是往上看祢的豐盛。願我今天的生活，是建立在我是祢所愛的人這個確實的根基上。阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
