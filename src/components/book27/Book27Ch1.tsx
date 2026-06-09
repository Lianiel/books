import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Target, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book27Ch1() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true, summary: true, exploration: true, questions: true, practice: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">第1課</h1>
        <h2 className="text-xl font-semibold text-gray-700">這是神要帶領你去的地方</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-emerald-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-emerald-700 mb-2">神改變的終極目標</h3>
              <p className="text-gray-700 leading-relaxed">腓立比書1:3-11是本課的核心經文。保羅在其中描述了他為腓立比信徒的禱告，揭示了神改變計劃的最終目標：使我們在基督日子來臨時，「多結仁義的果子」，充滿「因耶穌基督所結的仁義果子」（腓1:11）。神的目標不只是讓我們外表行為改善，而是要我們整個人——包括最深處的心思、動機和渴望——都轉化成為像基督的樣式。</p>
              <p className="text-gray-700 leading-relaxed mt-2">當我們思考「改變」這個字的時候，我們可能想到的是具體的行為改變：不再生氣、不再撒謊、不再抱怨。但神眼中的改變遠遠超過這些外在的調整。神所要帶我們去的地方，是一種從心靈深處湧出的、以基督為中心的生命——一種不靠自己努力維持，而是自然從與神的關係中流露出來的生命。</p>
            </div>
            <div>
              <h3 className="font-bold text-emerald-700 mb-2">改變的三大基石</h3>
              <p className="text-gray-700 leading-relaxed">根據腓立比書1章和整本書的神學脈絡，神改變計劃建立在三個不可或缺的基石上：</p>
              <ul className="mt-2 space-y-3">
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold flex-shrink-0 mt-0.5">1.</span>
                  <div>
                    <span className="font-semibold text-gray-800">救贖主（基督）：</span>
                    <span className="text-gray-700">改變的動力和根基完全來自基督。沒有祂在十字架上完成的工，沒有祂今天在我們心裡活著，任何真實的改變都是不可能的。保羅說「我靠著那加給我力量的，凡事都能做」（腓4:13），這種能力不是靠意志力，而是靠那加給力量的主。</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold flex-shrink-0 mt-0.5">2.</span>
                  <div>
                    <span className="font-semibold text-gray-800">群體（教會）：</span>
                    <span className="text-gray-700">改變不是孤獨地發生的。神設計讓改變在信徒的群體生活中進行。我們需要弟兄姊妹的幫助、陪伴、誠實的話語和禱告，才能真正成長。腓立比書本身就是寫給一個群體的，保羅感謝他們「在福音上的同工」（腓1:5）。</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600 font-bold flex-shrink-0 mt-0.5">3.</span>
                  <div>
                    <span className="font-semibold text-gray-800">過程（一生）：</span>
                    <span className="text-gray-700">真實的改變是一個終生持續的過程，不是一次的決志或一個突破就完成的。保羅說神「在你們心裡動了善工，必成全這工，直到耶穌基督的日子」（腓1:6）。神是主動的動工者，祂不會放棄這個工程，直到那日完成。</span>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-emerald-700 mb-2">「人如何改變」的模式概覽</h3>
              <p className="text-gray-700 leading-relaxed">本書使用取自耶利米書17:5-10的核心模式來理解改變的動態：<strong>炎熱→荊棘→十字架→果實</strong>。這個模式描述了在我們日常生活中，改變的發生過程。</p>
              <p className="text-gray-700 leading-relaxed mt-2"><strong>炎熱（環境處境）</strong>：我們所面對的生活景況，包括壓力、關係困難、疾病、失敗、衝突等。炎熱本身不是問題的根源，但它像一面鏡子，照出我們心中真實的狀態。</p>
              <p className="text-gray-700 leading-relaxed mt-2"><strong>荊棘（有罪的回應）</strong>：當我們的心靈沒有被恩典更新時，我們對炎熱的回應往往是罪性的——抱怨、逃避、憤怒、控制或絕望。這些回應顯示我們心中真正敬拜的對象。</p>
              <p className="text-gray-700 leading-relaxed mt-2"><strong>十字架（恩典的供應）</strong>：改變的關鍵轉折點是我們以十字架為中心來回應炎熱。當我們把眼光從問題轉向基督，信靠祂的恩典和能力，新的可能性就打開了。</p>
              <p className="text-gray-700 leading-relaxed mt-2"><strong>果實（更新的生命）</strong>：以十字架為中心的生活，自然結出美好的果實——愛、喜樂、和平、忍耐、恩慈、良善、信實、溫柔、節制（加5:22-23）。這些果實不是靠努力維持的，而是從一顆被恩典更新的心中自然流露的。</p>
            </div>
            <div>
              <h3 className="font-bold text-emerald-700 mb-2">神完全了解你的處境</h3>
              <p className="text-gray-700 leading-relaxed">從腓立比書1章，我們也看到保羅在監獄中寫作，面臨生死未卜的困境。然而他充滿喜樂和盼望，這不是因為他的環境改變了，而是因為他已學會在任何景況下倚靠基督。這給了我們盼望：神完全了解我們的處境（每一個困難、每一種痛苦），而且祂主動在我們的景況中動工，不是要使我們逃離困境，而是要透過困境改變我們，使我們越來越像祂的兒子。</p>
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
                '神改變的終極目標是讓我們整個人轉化成像基督的樣式，不只是外在行為的調整。',
                '真實的改變建立在三個基石上：救贖主基督（動力與根基）、群體教會（場所與支持）、一生的過程（神持續動工）。',
                '「炎熱→荊棘→十字架→果實」是理解日常生活中改變動態的核心模式，源自耶利米書17:5-10。',
                '環境（炎熱）本身不導致罪；是我們心中的渴望和動機決定了我們如何回應炎熱。',
                '神在我們的困境中主動動工，保羅在監獄中的喜樂見證了倚靠基督可以在任何景況下有真實改變。',
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
              <h4 className="font-semibold text-gray-800 mb-2">為什麼行為改變不等於真實的改變？</h4>
              <p className="text-gray-700 leading-relaxed">很多基督徒把努力維持良好行為當作屬靈成熟的標誌，卻發現這種努力令人精疲力竭，也不持久。原因是：外在的行為只是心靈狀態的果子。如果心靈的方向沒有改變，即使暫時壓制了某些行為，根本的問題仍然存在。耶穌在登山寶訓中教導，憤怒和殺人一樣嚴重，淫念和通姦一樣有罪（太5:21-30），因為神看的是心。真正的改變必須從心開始。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「成聖」的神學背景</h4>
              <p className="text-gray-700 leading-relaxed">基督教神學將救恩分為三個階段：稱義（過去，一次完成）、成聖（現在，持續進行）、榮耀化（將來，完全完成）。本書所探討的「改變」主要涉及成聖的過程。成聖有兩個層面：「確定性的成聖」（我們在基督裡已被分別為聖）和「漸進性的成聖」（我們在生活中越來越活出這個地位）。這個課程幫助我們理解如何積極地配合神在成聖工作上的動工。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">耶利米書17:5-10的神學意涵</h4>
              <p className="text-gray-700 leading-relaxed">耶利米書17:5-10描述了人心的兩種狀態：倚靠人（心靈像曠野的杜松，在鹽地生長，不見好處）與倚靠神（心靈像栽於水旁的樹，不怕炎熱，年年結果）。先知進一步說：「心比萬物都詭詐，壞到極處，誰能識透呢？我耶和華是鑑察人心、試驗人肺腑的」（耶17:9-10）。這段經文成為整個「人如何改變」模式的聖經基礎，揭示了改變必須觸及心靈的深處，而只有神能真正認識並更新人心。</p>
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
              '當你想到「屬靈成長」或「改變」，你腦海中浮現的是什麼樣的圖像？是行為上的改進，還是更深層的東西？',
              '在你生命中，有哪些「炎熱」（困難的處境）是你目前正在經歷的？這些處境暴露了你心中什麼樣的渴望或恐懼？',
              '你有沒有曾經嘗試靠自己的努力改變某個行為或習慣，卻發現改變很短暫？那次的經歷帶給你什麼反思？',
              '「改變需要群體」這個概念對你而言是真實的嗎？你在弟兄姊妹當中有沒有人知道你真實的掙扎？',
              '保羅在監獄中仍能寫出充滿喜樂的書信。你認為他的喜樂從哪裡來？這對你面對困境有什麼啟示？',
              '如果神的目標是要你「越來越像基督」而不是讓你「生活越來越舒適」，這會如何改變你看待生命中困難的方式？',
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 繪製你的「炎熱地圖」</h4>
              <p className="text-gray-700 mb-2">花15分鐘，在紙上列出你目前生活中三個主要的「炎熱」（壓力、困難、挑戰）。對每一個炎熱，問自己：我通常如何回應？我的回應顯示我心中真正渴望的是什麼？</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 每日讀經操練</h4>
              <p className="text-gray-700 mb-2">在本週每天讀腓立比書第一章，特別關注保羅如何在困境中仍然充滿盼望。每次讀完，寫下一句話：「今天我要靠著基督，用什麼方式回應我的困境？」</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💬 找一位同伴</h4>
              <p className="text-gray-700 mb-2">找一位信任的弟兄或姊妹，分享你這週從本課學到的一個洞見，以及你目前面對的一個「炎熱」。請他們為你禱告，也邀請他們在本課程中與你同行。</p>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告詞</h4>
              <p className="text-gray-700 italic leading-relaxed text-sm">「天父，我承認我常常只想改變外在的行為，卻忽略了我內心真正的狀態。感謝祢在基督裡為我成就了一切所需，並且應許要持續在我心裡動工，直到那日完成。求祢幫助我在這個課程中，真實地看見自己，也真實地看見祢豐盛的恩典。願我的改變不是靠自己的努力，而是藉著信靠祢的大能。奉耶穌的名禱告，阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
