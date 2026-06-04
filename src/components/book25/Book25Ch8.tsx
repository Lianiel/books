import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Target, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book25Ch8() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true, summary: true, exploration: true, questions: true, practice: true
  });
  const toggle = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">第八章</h1>
        <h2 className="text-xl font-semibold text-gray-700">捲起袖子放手做</h2>
        <p className="text-gray-500 mt-1">如何在實際生活中落實門徒帶領？</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('content')} className="w-full px-5 py-3 bg-gradient-to-r from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-blue-700 mb-2">從理論到行動：實際的門徒帶領步驟</h3>
              <p className="text-gray-700 leading-relaxed">在了解了門徒訓練的理論和架構之後，是時候捲起袖子，認真思考在實際生活中如何落實。本章探討如何開始一個真實的門徒帶領關係，包括如何尋找被帶領者、如何開始對話、以及如何在關係中實踐門徒訓練的原則。</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-700 mb-2">尋找門徒帶領的對象</h3>
              <p className="text-gray-700 leading-relaxed">耶穌告訴門徒要去，而不是等待別人來。主動尋找是帶領門徒的第一步。耶穌在日常生活的場所（海邊、井旁、稅關）找到祂的門徒，這告訴我們：門徒帶領發生在生活的每個角落，不只是在教堂或小組的聚會時間。尋找你周圍已有的關係，問：「神是否呼召我在這個人的生命中有更多的投入？」</p>
              <div className="bg-blue-50 rounded-xl p-4 mt-3">
                <p className="font-semibold text-blue-800 mb-2">尋找帶領對象的實際準則：</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>忠心的人</strong>（提後二2）——找有回應、有意願成長的人</li>
                  <li>• <strong>有空間的人</strong>——有時間和意願建立深度關係</li>
                  <li>• <strong>神指引的人</strong>——透過禱告確認方向</li>
                  <li>• <strong>生命中已有交集的人</strong>——不需要從零開始建立關係</li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-blue-700 mb-2">啟動門徒帶領關係的具體做法</h3>
              <p className="text-gray-700 leading-relaxed">開始門徒帶領關係不需要很正式或複雜。最自然的方式，是邀請對方一起做你已經在做的事，然後在過程中分享生命和信仰。以下是一些實際的啟動方式：</p>
              <div className="space-y-3 mt-3">
                <div className="bg-teal-50 border border-teal-100 rounded-xl p-3">
                  <p className="font-semibold text-teal-700">邀請一起喝咖啡或吃飯</p>
                  <p className="text-gray-600">從閒話家常開始，逐漸轉向詢問對方的靈命狀況，分享你自己的掙扎和成長。</p>
                </div>
                <div className="bg-teal-50 border border-teal-100 rounded-xl p-3">
                  <p className="font-semibold text-teal-700">一起查考聖經</p>
                  <p className="text-gray-600">不需要準備複雜的材料——從一段經文開始，分享各自的理解和應用，問「這段經文今天對你說了什麼？」</p>
                </div>
                <div className="bg-teal-50 border border-teal-100 rounded-xl p-3">
                  <p className="font-semibold text-teal-700">一起服事</p>
                  <p className="text-gray-600">邀請對方一起參與你在做的服事，在共同的行動中建立關係，事後一起反思神在其中的作為。</p>
                </div>
                <div className="bg-teal-50 border border-teal-100 rounded-xl p-3">
                  <p className="font-semibold text-teal-700">在日常活動中相處</p>
                  <p className="text-gray-600">打球、購物、開車——在不設防的日常情境中，最真實的對話往往自然發生。</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-blue-700 mb-2">問重要的問題：門徒帶領的核心工具</h3>
              <p className="text-gray-700 leading-relaxed">好問題是門徒帶領關係中最有力的工具之一。以下是一些可以在關係中定期使用的重要問題：</p>
              <div className="space-y-2 mt-3">
                {[
                  '這週你和神的關係如何？你有沒有固定靈修？有什麼讓你感到挑戰或鼓勵的？',
                  '這週你生命中有什麼掙扎？有什麼罪你需要認罪的？有什麼你需要我為你禱告的？',
                  '你最近在聖經中讀到什麼讓你印象深刻或有所改變的？',
                  '你的家庭最近如何？你的婚姻關係、親子關係有沒有需要改善的地方？',
                  '你在職場的見證如何？你有沒有機會和同事分享信仰？',
                  '你目前在帶領誰成長？你下一步想要邀請誰進入這樣的關係？',
                ].map((q, i) => (
                  <div key={i} className="flex items-start gap-2 bg-gray-50 rounded-lg p-2">
                    <span className="text-blue-600 font-bold flex-shrink-0">Q{i+1}.</span>
                    <p className="text-gray-700">{q}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-blue-700 mb-2">持續帶領：從「點」到「線」的關係深化</h3>
              <p className="text-gray-700 leading-relaxed">門徒帶領不是一次性的對話，而是持續性的投入。每次聚會後，要跟進：這週記得為對方禱告，在需要時主動聯繫，下次聚會時回顧上次的禱告和計畫。真正有果效的門徒帶領，是在一段時間的持續關係中逐漸發生的，不是一次精彩的對話就能完成的。</p>
              <p className="text-gray-700 leading-relaxed mt-3">同時，要給對方空間做他們自己的部分。帶領者的職責是幫助、鼓勵、提問、禱告，但最終改變必須是對方自己向神的回應。不要把自己的成長進度強加在對方身上，尊重神在每個人生命中獨特的工作節奏。</p>
            </div>
          </div>
        )}
      </div>

      {/* 重點總結 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-sky-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">重點總結</span>
          </div>
          {expanded['summary'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['summary'] && (
          <div className="p-5 bg-white">
            <ul className="space-y-3">
              {[
                '門徒帶領不需要等到一切準備好——最好的開始是今天，用你現有的關係和資源開始行動。',
                '尋找忠心、有意願、生活中已有交集的人，透過禱告確認帶領的對象，不需要完美的候選人。',
                '啟動門徒帶領最自然的方式是邀請對方一起做你已在做的事，在日常生活中建立關係。',
                '好問題是門徒帶領中最有力的工具——問對問題，比提供所有答案更能幫助對方成長。',
                '門徒帶領是持續性的投入，需要定期跟進、禱告和鼓勵，不是一次性的對話就能完成的。',
                '尊重神在每個人生命中的工作節奏，帶領者的職責是幫助和提問，但改變必須是對方向神的回應。',
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
        <button onClick={() => toggle('exploration')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">延伸探討</span>
          </div>
          {expanded['exploration'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['exploration'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「忠心的人」的選擇原則（提後二2）</h4>
              <p className="text-gray-700 leading-relaxed">保羅對提摩太說：「你在許多見證人面前聽見我所教訓的，也要交託那忠心能教導別人的人。」這個選擇標準是「忠心」——不是最聰明的、最有魅力的、或最有經驗的，而是有回應的、可靠的、有意願的。耶穌選擇的門徒也不是當時宗教領域的精英，而是普通的漁夫、稅吏和農民。門徒帶領者的工作，不是選最優秀的人，而是找到有意願被塑造的人。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">在日常生活中帶領門徒的神學根基</h4>
              <p className="text-gray-700 leading-relaxed">申命記六章7節說：「也要殷勤教訓你的兒女，無論你坐在家裡、行在路上、躺下、起來，都要談論。」耶穌在帶領門徒時也是如此——祂在行路時（路加福音二十四章，去以馬忤斯的路上）、在船上（馬可福音四章）、在飯桌旁（路加福音二十二章）教導門徒。「作門徒」不是一個需要特定場地的宗教活動，而是生命影響生命的日常方式。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">帶領門徒的恐懼：如何克服</h4>
              <p className="text-gray-700 leading-relaxed">許多基督徒認為自己「不夠好」、「不夠聰明」、或「不夠聖潔」，所以不敢帶領門徒。但高爾文博士說：「你只要比別人稍微走在前頭一步，就可以帶領人。很多帶領的人也許所知不豐，但至少他們所知道的，已足夠讓他們來跟隨基督。」不需要成為神學家才能帶領門徒，只需要比你帶領的人更成熟一些，並且願意和他們同行。</p>
            </div>
          </div>
        )}
      </div>

      {/* 反思問題 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">反思問題</span>
          </div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && (
          <div className="p-5 bg-white space-y-4">
            {[
              '你現在生命中有沒有一個人，你感覺神可能在呼召你去更多地投資在他的生命中？是誰？你願意採取第一步嗎？',
              '你帶領門徒最大的障礙是什麼——是不知道怎麼做、是沒有時間、是覺得自己不夠資格，還是其他原因？',
              '你在門徒帶領關係中，是比較喜歡提供答案，還是問問題？你認為哪個對對方的成長更有幫助？',
              '你上一次主動跟進（follow up）你在門徒帶領中的人，是什麼時候？你覺得跟進的頻率足夠嗎？',
              '你有沒有正在帶領的人？若有，你願意在下次見面時嘗試使用本章的問題，問他「這週你和神的關係如何？」？',
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
        <button onClick={() => toggle('practice')} className="w-full px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">具體實踐方針</span>
          </div>
          {expanded['practice'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['practice'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 本週採取第一步</h4>
              <p className="text-gray-700 mb-2">選擇一個你感覺神在引導你去投資的人，這週做以下其中一件事：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>發一條訊息問候他們，詢問是否可以一起喝咖啡</li>
                <li>邀請他們參加你下次的小組聚會</li>
                <li>直接說：「我想更了解你，你願意和我定期碰面嗎？」</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 建立一個「帶領問題清單」</h4>
              <p className="text-gray-700">整理5-7個你可以在門徒帶領關係中定期使用的問題，根據本章和你自己的經驗，寫在一張卡片上，在每次聚會時帶著它。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">⏰ 設立固定的帶領時間</h4>
              <p className="text-gray-700">如果你已經有正在帶領的人，在你的月曆上固定安排每週或每兩週與他見面的時間，並把這個時間視為神聖不可更改的優先事項（除非有緊急情況）。</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="font-semibold text-green-700 mb-2">🙏 禱告詞</p>
              <p className="text-gray-700 italic">「主耶穌，求你讓我有勇氣踏出第一步，不再讓理論停留在頭腦中，而是真實地在生活中帶領門徒。求你帶領我找到你放在我生命中等待被帶領的人，賜給我智慧問對問題，並有耐心在關係中持續投資。我相信你會在我所不足的地方供應，使我能成為你所使用的器皿。阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
