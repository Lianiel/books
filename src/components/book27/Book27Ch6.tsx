import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Eye, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book27Ch6() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true, summary: true, exploration: true, questions: true, practice: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">第6課</h1>
        <h2 className="text-xl font-semibold text-gray-700">現實世界中真實的你</h2>
        <p className="text-sm text-gray-500 mt-1">炎熱篇（下）｜羅馬書8:20-22 & 申命記8</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-emerald-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-emerald-700 mb-2">我們活在破碎的世界：羅馬書8:20-22</h3>
              <p className="text-gray-700 leading-relaxed">上一課（炎熱篇上）的重點是「神在哪裡」（真神的本質）；本課的重點轉向「你是誰」（真實的你在炎熱中的狀態）。理解這兩方面——神的真實和自我的真實——是有效應對炎熱的前提。</p>
              <p className="text-gray-700 leading-relaxed mt-2">羅馬書8:20-22用三個關鍵詞描述我們所在的世界：</p>
              <ul className="mt-2 space-y-2">
                <li className="flex gap-3 bg-red-50 rounded p-3">
                  <span className="font-bold text-red-600 flex-shrink-0">虛空</span>
                  <p className="text-gray-700 text-sm">「因為受造之物服在虛空之下，不是自己願意這樣，乃是因那叫他如此的」（羅8:20）。我們的世界因罪而失去了原有的完整和意義；一切有形的事物都是暫時的，無法提供我們心靈真正需要的永恆滿足。</p>
                </li>
                <li className="flex gap-3 bg-orange-50 rounded p-3">
                  <span className="font-bold text-orange-600 flex-shrink-0">敗壞</span>
                  <p className="text-gray-700 text-sm">「受造之物服在虛空之下……因為受造之物都要從敗壞的轄制中得釋放」（羅8:20-21）。不只是我們，整個受造界都在敗壞和衰退的過程中。疾病、死亡、腐朽是這個世界的常態，不是例外。</p>
                </li>
                <li className="flex gap-3 bg-amber-50 rounded p-3">
                  <span className="font-bold text-amber-600 flex-shrink-0">嘆苦</span>
                  <p className="text-gray-700 text-sm">「一切受造之物一同嘆息、勞苦，直到如今」（羅8:22）。整個受造界都在哀歎，都在等待更新。我們所感受到的疼痛、不滿足、渴望，反映了一個更深的真理：我們所在的世界不是本該有的樣子。</p>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">這三個詞給了我們一個重要的框架：我們所遇到的困難（炎熱），很多時候不是我們「哪裡做錯了」的結果，而是生活在這個破碎世界的必然現實。承認這個現實，使我們不必為「正常的苦難」感到困惑或羞恥。</p>
            </div>
            <div>
              <h3 className="font-bold text-emerald-700 mb-2">民數記11-14章：在炎熱中的荊棘反應</h3>
              <p className="text-gray-700 leading-relaxed">民數記11-14章記錄了以色列人在曠野中一系列的反應，成為本課最生動的案例研究。以色列人遇到了炎熱：曠野的艱苦、食物的單調、前途的不確定，以及進入應許之地前探子帶回的恐怖報告。</p>
              <p className="text-gray-700 leading-relaxed mt-2">他們的反應是典型的荊棘反應：抱怨（「我們想念在埃及的時候……」——民11:5）、恐懼（「我們在自己眼中看自己像蚱蜢一樣」——民13:33）、叛逆（「我們不如立一個首領，回埃及去吧」——民14:4）。他們的問題不是炎熱本身太苦，而是炎熱暴露了他們心中真正信靠的是什麼——不是神，而是可見的保障（埃及的食物、舒適的環境、有把握的未來）。</p>
            </div>
            <div>
              <h3 className="font-bold text-emerald-700 mb-2">申命記8：炎熱是認識自己的鏡子</h3>
              <p className="text-gray-700 leading-relaxed">申命記8章是神向以色列人解釋祂在曠野中所做的事。神說：「你也要記念耶和華你神在曠野引導你這四十年的路，是要苦煉你，試驗你，要知道你心內如何……祂苦煉你，任你飢餓，將你和你列祖所不認識的嗎哪賜給你吃，為要使你知道，人活著不是單靠食物，乃是靠耶和華口裡所出的一切話」（申8:2-3）。</p>
              <p className="text-gray-700 leading-relaxed mt-2">這段話揭示了炎熱的三重目的：<strong>苦煉</strong>（去除我們的驕傲和自給自足的幻象）、<strong>試驗</strong>（暴露我們心中真正相信的是什麼）、<strong>認識</strong>（讓我們更了解自己，也更了解神）。曠野的炎熱不是神的懲罰，而是神的教育。</p>
            </div>
            <div>
              <h3 className="font-bold text-emerald-700 mb-2">「自我成長方案」：我們試圖用來解決炎熱的方法</h3>
              <p className="text-gray-700 leading-relaxed">本課引入一個重要的概念：「自我成長方案」。當我們遇到炎熱時，除了求告神，我們往往同時有一套「自己的計劃」——一系列我們相信可以讓自己感覺更好、更安全、更有控制感的策略。這些策略可能包括：</p>
              <ul className="mt-2 space-y-1">
                <li className="flex gap-2"><span className="text-emerald-600">•</span><p className="text-gray-700">尋求別人的認可和肯定</p></li>
                <li className="flex gap-2"><span className="text-emerald-600">•</span><p className="text-gray-700">透過成就和表現來建立安全感</p></li>
                <li className="flex gap-2"><span className="text-emerald-600">•</span><p className="text-gray-700">逃入娛樂、食物或消費</p></li>
                <li className="flex gap-2"><span className="text-emerald-600">•</span><p className="text-gray-700">控制環境和關係以避免痛苦</p></li>
                <li className="flex gap-2"><span className="text-emerald-600">•</span><p className="text-gray-700">在受傷時以冷漠或憤怒保護自己</p></li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-2">這些「自我成長方案」往往不是明顯有害的行為，甚至有些看起來很合理。問題是：它們是替代品，代替了我們對神的倚靠。當我們依賴這些方案時，我們就像以色列人渴望回埃及——選擇了可見的保障，放棄了對神應許的信靠。</p>
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
                '我們活在一個「虛空、敗壞、嘆苦」的破碎世界（羅馬書8:20-22），很多苦難是這個現實的自然結果，不一定是我們犯罪的直接後果。',
                '以色列人在曠野的反應（抱怨、恐懼、叛逆）顯示，炎熱暴露心中的偶像：他們信靠的是食物和安全感，而非神的應許（民數記11-14）。',
                '申命記8章揭示炎熱的三重目的：苦煉（破除驕傲）、試驗（暴露真實信靠的對象）、認識（認識自己和神）。',
                '我們都有一套「自我成長方案」——在炎熱中倚靠自己的策略（尋求認可、成就、逃避、控制等），這些是偶像崇拜的實際形式。',
                '改變的起點是誠實地承認我們的現狀：我們活在破碎的世界，我們的心容易偏離神，我們需要的幫助比我們自己能提供的更大。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「破碎的世界」不等於「神不好」</h4>
              <p className="text-gray-700 leading-relaxed">承認我們活在一個破碎、受苦的世界，不是說神沒有能力或不夠好。羅馬書8:20告訴我們，受造物「不是自己願意這樣，乃是因那叫他如此的」——這是神有主權地允許的狀態，有更大的目的（等待「神兒女顯出來」——羅8:19）。苦難和破碎是暫時的；神的更新計劃是確定的（啟示錄21:5：「看哪，我將一切都更新了！」）。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">為什麼「自我成長方案」的誘惑如此強烈？</h4>
              <p className="text-gray-700 leading-relaxed">我們的「自我成長方案」通常有一個特點：它們提供立即可見的、有感覺的緩解，而神的供應往往需要信心才能「感受到」。當我吃一包薯片，感官立即有反應；當我透過閱讀聖經和禱告轉向神，可能感覺抽象而遲緩。這就是為什麼選擇倚靠神而非自我成長方案，需要真實的信心操練，而不只是頭腦上同意「神更好」。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">以色列人的「埃及情結」與我們的平行</h4>
              <p className="text-gray-700 leading-relaxed">以色列人在曠野一再回頭看埃及——那個他們已被救贖出來的奴役之地——因為埃及代表了可見的、熟悉的安全感。我們也有自己的「埃及」：那些雖然使我們陷入綑綁、卻感覺熟悉和安全的模式、關係和習慣。屬靈的進步往往包括識別我們的「埃及」並選擇不回頭，即使曠野的未知讓我們不舒服。</p>
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
              '「虛空、敗壞、嘆苦」這三個詞，哪一個最能描述你目前生活中某個困境的感受？',
              '在你的生命中，有沒有像以色列人渴望回「埃及」的傾向——渴望回到那些你知道不健康但感覺熟悉的模式？',
              '你的「自我成長方案」是什麼？當你感到壓力、焦慮或受傷時，你通常倚靠什麼來讓自己感覺好一點？',
              '申命記8章說曠野的目的是讓以色列人「知道你心內如何」。你認為你目前的炎熱可能在揭示你心中什麼？',
              '你有沒有曾經在回顧一段艱難時期後，看到神在其中的苦煉和目的？那次的認識如何改變了你對那段經歷的看法？',
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
              <h4 className="font-semibold text-green-700 mb-2">🔍 辨識你的「自我成長方案」</h4>
              <p className="text-gray-700 mb-2">誠實地回答：在過去一個月，當你感到壓力或難受時，你最常做什麼來讓自己感覺好一點？（不要只列「好」的方式，也要誠實列出那些你知道只是逃避的方式。）現在問：這些方法是在幫助你更深地倚靠神，還是代替了對神的倚靠？</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 申命記8:2-3 默想</h4>
              <p className="text-gray-700 mb-2">讀申命記8:2-3，把「以色列人」換成你的名字，把「曠野」換成你目前的困境，把「嗎哪」換成神最近在你生命中提供的具體恩典。讓這段話成為你今天的個人信息。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 開始「自我成長方案」日誌</h4>
              <p className="text-gray-700 mb-2">這週每天記錄：（1）今天我遇到了什麼「炎熱」？（2）我的第一反應是什麼（倚靠自我成長方案，還是轉向神）？（3）如果是自我成長方案，下次我可以如何選擇不同？</p>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告詞</h4>
              <p className="text-gray-700 italic leading-relaxed text-sm">「主啊，求祢幫助我誠實地看見自己的心——看見那些我倚靠來讓自己感覺好一點的替代品。感謝祢允許我在破碎的世界中經歷炎熱，因為祢有比我更大的目的。幫助我在困難中轉向祢，而不是轉向那些無法真正滿足我的東西。我選擇相信祢的苦煉是出於愛，不是遺棄。阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
