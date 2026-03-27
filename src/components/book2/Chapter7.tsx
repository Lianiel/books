import React from 'react';
import { Users, Heart, Star, Lightbulb } from 'lucide-react';

export default function Chapter7() {
  return (
    <div className="max-w-4xl mx-auto pb-12">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-2 border-b-2 border-rose-100 pb-4">
        第 7 章：成為性格成熟的大人
      </h1>
      <p className="text-slate-500 italic mb-8">學習如何好好愛人</p>
      <div className="space-y-8">

        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="bg-rose-50 border-l-4 border-rose-400 p-4 mb-6 rounded-r-lg">
            <p className="text-rose-900 font-medium m-0">生理上要轉變成大人並不難，但要在情感上長大成熟就沒那麼容易。很多人生理上是個中年人，情感上卻還停留在青春期、童年，甚至是嬰兒階段。<span className="text-rose-500 text-sm ml-2">(p.197)</span></p>
          </div>
          <div className="flex items-center mb-4 text-rose-700">
            <Users className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">情感不成熟導致的問題</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>很多人對聖經真理耳熟能詳，說起基督徒生活的原則如數家珍，摩西十誡能倒背如流，也認同應該要將信仰化為行動，問題是不知從何做起。<span className="text-slate-400 text-sm ml-1">(p.200)</span></p>
            <p>問題如何分辨不同階段的差異？底下簡單概述各個情感階段的狀態：<span className="text-slate-400 text-sm ml-1">(p.203)</span></p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {[
              {
                title: '情感上的嬰兒',
                color: 'bg-red-50 border-red-200',
                titleColor: 'text-red-700',
                items: ['等著別人照顧', '很難進入別人的世界', '希望己身需求即刻滿足', '利用別人來滿足自己'],
              },
              {
                title: '情感上的孩童',
                color: 'bg-orange-50 border-orange-200',
                titleColor: 'text-orange-700',
                items: ['欲望被滿足就會很快樂', '會快速從壓力、失望和考驗中抽離', '將他人的不同意見解釋為對自己的攻擊', '不順心就抱怨、退縮、操控、報復'],
              },
              {
                title: '情感上的青少年',
                color: 'bg-yellow-50 border-yellow-200',
                titleColor: 'text-yellow-700',
                items: ['防衛心強', '很難坦誠說出需要和感受', '對批評很敏感', '在家裡表現得像個青少年'],
              },
              {
                title: '情感上的大人',
                color: 'bg-green-50 border-green-200',
                titleColor: 'text-green-700',
                items: ['能向別人索求所需', '能夠辨識自己的感受', '即使有壓力也能維持穩定', '不需要讓對方改變才能感到快樂'],
              },
            ].map((stage, i) => (
              <div key={i} className={`p-4 rounded-lg border ${stage.color}`}>
                <h3 className={`font-bold mb-2 ${stage.titleColor}`}>{stage.title}</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  {stage.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-1">
                      <span className="text-slate-400 mt-0.5">•</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-rose-700">
            <Heart className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">我們的大問題：自我中心</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>每個人都是從自我宇宙的中心去體驗生活，這是人的天性。我會用我的眼睛去看世界，用我的耳朵去聽聲音。我只能感受到我能感受的、要我想要的、體驗我能體驗的，也會很自然地想要身邊的人都放棄他們的自我，成為我想要的樣子。<span className="text-slate-400 text-sm ml-1">(p.206)</span></p>
            <p>史考特．派克有感而發地說，每個人都是天生的自戀狂，因此在屬靈追求的道路上，當務之急就是長大成熟，脫離自戀。<span className="text-slate-400 text-sm ml-1">(p.206)</span></p>
            <p>耶穌認為「與神在一起」和「與人在一起」是密不可分的。祂拒絕將這牢不可破的連結割分開來，且強調整本聖經的精髓就是：「盡心、盡性、盡意愛主你的神。這是誡命中的第一，且是最大的。其次也相做，就是要愛人如己。這兩條誡命是律法和先知一切道理的總綱。」（太二十二37-40）<span className="text-slate-400 text-sm ml-1">(p.206)</span></p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-rose-700">
            <Star className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">情感成熟的大人的特徵</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700">
            <div className="grid grid-cols-1 gap-3">
              {[
                { title: '能夠索求所需', desc: '能夠直接、清楚地向別人索求所需，不拐彎抹角，也不操控別人。' },
                { title: '能夠辨識感受', desc: '能夠辨識自己的感受，並以適當的方式表達，不壓抑也不爆發。' },
                { title: '在壓力下保持穩定', desc: '即使有壓力和逆境，也能維持穩定，不輕易崩潰或逃避。' },
                { title: '能夠表達不同意見', desc: '能夠在維繫關係的同時，表達不同的意見和感受，不害怕衝突。' },
                { title: '不把別人的問題攬上身', desc: '清楚自己的責任範圍，不把別人的問題全部攬上身，也不讓別人把責任推給自己。' },
                { title: '能夠進入別人的世界', desc: '能夠暫時放下自我，真正進入別人的世界，感同身受地理解別人。' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="bg-rose-100 text-rose-700 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">{i + 1}</div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm m-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-amber-50 p-6 rounded-xl shadow-sm border border-amber-200">
          <div className="flex items-center mb-4 text-amber-700">
            <span className="mr-2 text-lg">ℹ</span>
            <h2 className="text-xl font-bold">【延伸探討：屬靈成熟與情感成熟】</h2>
          </div>
          <div className="text-slate-700 space-y-4">
            <p>我們常常把「屬靈成熟」和「情感成熟」分開來看，以為一個人可以在神學上非常成熟，卻在情感上仍然是個嬰兒。但本書最核心的洞見是：情感上的不成熟，必然會阻礙我們與神、與人建立真實的關係。</p>
            <p>一個情感上的嬰兒，在禱告中也會把神當成滿足自己需求的「宇宙販賣機」；一個情感上的孩童，在教會中也會用操控和情緒勒索來得到自己想要的。情感的成長，不是屬靈成長的副產品，而是它的必要條件。</p>
            <p className="text-sm text-amber-700 font-medium">📚 延伸參考：史考特．派克《心智的成熟旅程》</p>
          </div>
        </section>

      </div>
    </div>

      {/* 反思與實踐 */}
      <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-lg text-white mt-4">
        <h3 className="text-2xl font-bold text-indigo-300 mb-6 flex items-center gap-3">
          <span>🧠</span>
          深度反思與行動指南
          <span className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded-full font-normal border border-slate-600">延伸應用（非原書內容）</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="text-lg font-bold text-indigo-200 mb-4">💭 反思問題</h4>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li className="flex items-start gap-2"><span className="text-indigo-400 font-bold flex-shrink-0">1.</span>誠實地評估：在情感成熟的四個階段中，我通常處於哪個階段？</li>
              <li className="flex items-start gap-2"><span className="text-indigo-400 font-bold flex-shrink-0">2.</span>在哪些關係或情境中，我會出現「情感嬰兒」或「情感孩童」的反應（如操控、退縮、報復）？</li>
              <li className="flex items-start gap-2"><span className="text-indigo-400 font-bold flex-shrink-0">3.</span>我是否能夠在維繫關係的同時，清楚表達不同的意見，而不害怕對方生氣？</li>
              <li className="flex items-start gap-2"><span className="text-indigo-400 font-bold flex-shrink-0">4.</span>我在關係中是否習慣把別人的問題攬上身，或讓別人把責任推給我？</li>
              <li className="flex items-start gap-2"><span className="text-indigo-400 font-bold flex-shrink-0">5.</span>什麼阻礙了我在情感上繼續成長？是害怕改變，還是不知道從何改起？</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="text-lg font-bold text-emerald-300 mb-4">🎯 生活實踐</h4>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li className="flex items-start gap-2"><span className="text-emerald-400 font-bold flex-shrink-0">1.</span>回想本週一次你在情感上反應不成熟的時刻，思考如果你是「情感大人」，你會如何回應？</li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 font-bold flex-shrink-0">2.</span>本週在一段重要關係中，練習「直接說出你的需要」，而不是期待對方猜到。</li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 font-bold flex-shrink-0">3.</span>當你感到被批評或攻擊時，在回應之前先深呼吸，問自己：「我現在幾歲（情感上）？」</li>
              <li className="flex items-start gap-2"><span className="text-emerald-400 font-bold flex-shrink-0">4.</span>找一位你信任的人，請他誠實告訴你：你在哪些方面還沒有情感上「長大」？</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}
