import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Compass, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book25Ch12() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true, summary: true, exploration: true, questions: true, practice: true
  });
  const toggle = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">第十二章</h1>
        <h2 className="text-xl font-semibold text-gray-700">轉化為塑造門徒的教會</h2>
        <p className="text-gray-500 mt-1">五個轉化的整合與實踐</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('content')} className="w-full px-5 py-3 bg-gradient-to-r from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-blue-700 mb-2">五個轉化的整體回顧</h3>
              <p className="text-gray-700 leading-relaxed">本書的核心是五個使教會成為塑造門徒教會的轉化。這五個轉化不是可以任意選擇的選項，而是一個整體的系統——每一個轉化都為下一個轉化提供基礎。忽略任何一個，都會讓整體的果效大打折扣。</p>
              <div className="space-y-3 mt-3">
                {[
                  { num: 1, from: '基督徒', to: '門徒', key: '確立教會核心使命：帶出能帶領他人的門徒，而不只是帶人歸主或累積「基督徒」' },
                  { num: 2, from: '學習', to: '裝備', key: '牧師的角色從傳道者轉化為裝備者——訓練、培育、差派信徒去服事和帶領' },
                  { num: 3, from: '聚會', to: '造就', key: '小組從定期聚會的形式，轉化為真實關係中的造就環境——以聖經為中心、刻意引導成熟' },
                  { num: 4, from: '計畫', to: '帶人', key: '事工從設計課程和活動，轉化為在個人關係中持續地陪伴和帶領人' },
                  { num: 5, from: '增長', to: '倍增', key: '從量的增長（更多人出席），轉化為質的倍增（門徒帶出門徒，自我複製）' },
                ].map(s => (
                  <div key={s.num} className="flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-xl p-3">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-teal-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">{s.num}</span>
                    <div>
                      <p className="font-bold text-blue-800">轉化{s.num}：{s.from} → {s.to}</p>
                      <p className="text-gray-700 text-sm mt-1">{s.key}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-blue-700 mb-2">轉化的過程：耐心和持久</h3>
              <p className="text-gray-700 leading-relaxed">賀伯陛博士的教會在1998年開始時是一間吸引式的教會。數年後，他開始嘗試改變教會的DNA，讓它更有效地培育出會帶領他人作門徒的門徒。他估計這個轉化在他的教會各方面都已盡量做到了，但他承認這是一個艱難的過程——在傳統且教會密度高的納什維爾地區，改變文化需要面對極大的阻力。</p>
              <p className="text-gray-700 leading-relaxed mt-3">但他相信一切都是值得的。他和其他關係性門徒訓練網絡中的教會領袖告訴作者：若你願意埋頭苦幹，並忍受一些、甚至許多困難（且要有耐心），即使教會已具規模，這樣的轉化也是可行的。他們的信念是：為了忠於耶穌的方法、教導，以及強調愛與關係的重要性，他們別無選擇，只能執行這個使命。</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-700 mb-2">從哪裡開始？一個實際的起點</h3>
              <p className="text-gray-700 leading-relaxed">不要試圖同時改變所有五個轉化，這會讓人不知所措。作者建議從第一個轉化開始——從建立一個清晰的、符合聖經的門徒定義開始。召集你的領導團隊，問這個問題：「何謂門徒？」讓大家寫下答案，然後一起從聖經建立一個所有人都認同的定義。這一個簡單的對話，可能就是改變教會文化的起點。</p>
              <p className="text-gray-700 leading-relaxed mt-3">在建立共識後，開始第二步——領袖們自己先成為真實的門徒，建立問責關係，在自己的生命中活出他們希望教會活出的樣子。這是所有其他轉化的根基。沒有真實生命的領袖，無法帶出真實的教會文化。</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-700 mb-2">給所有教會領袖的話</h3>
              <p className="text-gray-700 leading-relaxed">記得，我們不是孤軍奮戰。上帝總會出現，完美地行事。當你檢視本書的教導，並放入你們教會的處境時，上帝會幫助你分辨哪些是聖經原則，哪些是個人喜好。祂賞賜那些尋求祂的人，而我們需要從神來的力量，讓我們走出舒適圈，邁步向前。</p>
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200 rounded-xl p-4 mt-3">
                <p className="font-bold text-blue-800 mb-2">核心使命的簡單宣告：</p>
                <p className="text-gray-700 leading-relaxed">教會的使命是，為著父神的榮耀，靠著聖靈的能力，使人作耶穌基督的門徒——帶出能帶領他人成為門徒的門徒。</p>
                <p className="text-gray-700 leading-relaxed mt-2">這不會創造完美的教會，卻能帶出有成效的教會。不論你的教會歷史有多久，只要願意開始這個轉化的旅程，上帝必在其中同行。</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-blue-700 mb-2">高爾文博士的最後祝福</h3>
              <p className="text-gray-700 leading-relaxed">已年過八十的高爾文博士，以其一生的見證總結了這個使命：「保羅說：『我乃是竭力追求』耶穌基督的標準，但他也說『這不是說我已經得著了，已經完全了』（腓三12-14）。他是向著標竿直跑。他前面有可以想望的圖像。這就是我們受造的目的：認識神，愛祂，並在祂裡面找到喜樂。這是我們存在的原因。神永遠是超過我們所能理解的，但越認識祂，我們心中的渴望就會越強烈。」</p>
              <p className="text-gray-700 leading-relaxed mt-3">即使如此，這位八十多歲的門徒訓練者仍每週二晚上和四、五個老弟兄碰面，互相在信仰上激勵。他的生命告訴我們：門徒帶領永遠不會「完成」，直到我們見主面的那一天。</p>
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
                '五個轉化是一個整體系統，每個轉化都為下一個提供基礎：門徒→裝備→造就→帶人→倍增。',
                '轉化的過程需要耐心和持久——即使面對極大的阻力，只要有耐心，任何規模和年齡的教會都可以完成這個轉化。',
                '最好的起點是第一個轉化：召集領導團隊，一起從聖經建立一個共同的門徒定義。',
                '領袖必須先成為真實的門徒，在自己的生命中活出門徒的樣式，才能帶出真實的教會文化。',
                '教會的核心使命是：為著父神的榮耀，靠著聖靈的能力，使人作耶穌基督的門徒——帶出能帶領他人成為門徒的門徒。',
                '門徒訓練永遠不會「完成」——高爾文博士在八十多歲仍在帶領和接受門徒帶領，這是我們一生的呼召。',
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
              <h4 className="font-semibold text-indigo-700 mb-2">為什麼五個轉化必須全部同時考慮？</h4>
              <p className="text-gray-700 leading-relaxed">若你只做第一個轉化（定義門徒），但沒有做第二個轉化（裝備），你會有清晰的異象但缺乏執行的人手；若你只做第三個轉化（小組造就），但沒有做第一個（定義），你的小組長不知道要帶人到哪裡去。五個轉化是一個互相依賴的系統，每一個都必須在整體框架中才能發揮最大的果效。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">轉化教會文化的現實挑戰</h4>
              <p className="text-gray-700 leading-relaxed">改變教會文化是教會領袖所能做的最困難的事情之一。人們對改變有天然的抵抗，特別是長期以來「就是這樣做」的方式。作者坦承，這個旅程中會有很多失敗、誤解和衝突。但他也強調：耶穌自己也面對過這些困難，但他沒有放棄祂的使命和方法。若我們相信耶穌的方法是對的，就需要有堅持的勇氣，即使過程艱難。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">個人的使命陳述</h4>
              <p className="text-gray-700 leading-relaxed">以弗所書二章10節說：「我們原是他的工作，在基督耶穌裡造成的，為要叫我們行善，就是神所預備叫我們行的。」每一個信徒都有神在創世以前就為他預備好的善工。門徒訓練的終極目標，是幫助每一個人發現並活出這個神聖的使命。這不只是關於教會的事，而是關於每一個個體如何在神的故事中找到自己的位置，並且全力投入。</p>
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
              '讀完這本書，你認為你的教會最迫切需要哪一個轉化？你個人最需要哪一個轉化？',
              '你願意向神承諾，在你的生命中開始這個轉化的旅程嗎？你的第一步是什麼？',
              '你認為在你的處境中，推動這五個轉化最大的障礙是什麼？你需要誰的支持和幫助？',
              '高爾文博士在八十多歲仍在帶領門徒和接受門徒帶領——這對你有什麼激勵或挑戰？',
              '若你可以在五年後回頭看，你希望你的生命和你的教會因為這本書而有什麼樣的改變？',
              '你願意和其他人一起踏上這個旅程嗎？你願意邀請誰和你一起讀這本書並實踐這些轉化？',
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 制定你的90天行動計畫</h4>
              <p className="text-gray-700 mb-2">根據本書的五個轉化，制定一個你個人的90天行動計畫：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>我要在第一個月做什麼？（定義門徒，建立問責關係）</li>
                <li>我要在第二個月做什麼？（開始裝備一個人，加強我的小組）</li>
                <li>我要在第三個月做什麼？（評估進度，制定下一步）</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 找到同行者</h4>
              <p className="text-gray-700">邀請一到兩個人和你一起讀完這本書，定期討論你們各自的實踐和挑戰。互相問責、互相鼓勵，讓這個旅程在關係中發生。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">⏰ 每年的門徒訓練回顧</h4>
              <p className="text-gray-700">每年底，用本書的五個轉化回顧你和你的事工或教會這一年的進展。問：我在哪個轉化上最有成長？哪個還需要更多的努力？新的一年，我最需要集中在哪裡？</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 分享你的改變</h4>
              <p className="text-gray-700">讀完這本書後，選擇你感受最深的一個見解，和你身邊的信徒分享。不需要講很多，只是分享一個真實的故事或洞見，可能就足以點燃另一個人心中的火。</p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200 rounded-xl p-4">
              <p className="font-semibold text-blue-800 mb-2">🙏 旅程的禱告</p>
              <p className="text-gray-700 italic">「主耶穌，謝謝你給了我一個清晰的使命：成為你的門徒，帶出你的門徒。求你幫助我不只是讀了這本書就結束，而是讓這些真理深植在我心中，改變我看待自己、教會、和使命的方式。求你帶領我找到同行者，賜給我勇氣去踏出改變的第一步。我相信你的方法是對的，求你讓我成為你在我的教會和社區中帶出轉化的器皿。主，使用我，改變我，並透過我帶出更多能帶人的門徒。阿們。」</p>
            </div>
          </div>
        )}
      </div>

      {/* 全書總結 */}
      <div className="mt-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-6 text-white">
        <h3 className="text-xl font-bold mb-4 text-center">五步轉型門徒訓練：旅程的開始</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-4">
          {[
            { num: 1, from: '基督徒', to: '門徒' },
            { num: 2, from: '學習', to: '裝備' },
            { num: 3, from: '聚會', to: '造就' },
            { num: 4, from: '計畫', to: '帶人' },
            { num: 5, from: '增長', to: '倍增' },
          ].map(s => (
            <div key={s.num} className="bg-white/10 rounded-xl p-3 text-center">
              <div className="text-2xl font-bold mb-1">{s.num}</div>
              <div className="text-blue-100 text-sm line-through">{s.from}</div>
              <div className="text-white font-bold">→ {s.to}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-blue-100 text-sm">「教會被呼召不僅僅是領人歸主，而是培育能帶出門徒的門徒，而主要方法是，在生命影響生命的關係裡，活出基督的愛。」——卜冀曼</p>
      </div>
    </div>
  );
}
