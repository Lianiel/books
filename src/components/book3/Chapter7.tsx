import React from 'react';

export default function Chapter7() {
  return (
    <div className="space-y-8 pb-16">
      <div className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
          附錄：保羅宣教於台灣拿撒勒人會之應用 <span className="text-2xl text-slate-500 font-normal ml-2">p165</span>
        </h1>
      </div>

      <div className="prose prose-slate max-w-none prose-p:leading-loose prose-p:text-slate-700">
        <p className="lead text-xl text-slate-700 mb-8 font-medium leading-relaxed border-l-4 border-slate-300 pl-4">
          將保羅第一世紀的宣教模式應用於二十一世紀的台灣處境，特別是針對台灣拿撒勒人會的發展，需要深刻的處境化思考（Contextualization）。本附錄旨在探討如何將保羅的宣教神學與策略，轉化為台灣拿撒勒人會突破現狀、邁向復興的實際行動。
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6 flex items-center">
          <span className="w-2 h-6 bg-indigo-600 rounded-full mr-3"></span>
          台灣拿撒勒人會的歷史與挑戰 <span className="text-xl text-slate-500 font-normal ml-2">p167</span>
        </h2>
        <p>
          台灣拿撒勒人會自二十世紀中葉傳入台灣以來，秉持著約翰·衛斯理（John Wesley）的聖潔傳統，在各地建立教會，並在神學教育與慈惠事工上有所貢獻。然而，隨著台灣社會的快速變遷、世俗化浪潮的衝擊，以及人口結構的急遽老化（少子化與高齡化），台灣拿撒勒人會與許多傳統教派一樣，面臨著增長停滯、會眾老化、以及年輕一代流失的嚴峻挑戰。
        </p>

        {/* 延伸探討區塊 */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-8 shadow-sm">
          <div className="flex items-center mb-3">
            <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <h4 className="font-bold text-amber-800 text-lg m-0">【延伸探討：台灣處境的屬靈爭戰】</h4>
          </div>
          <div className="text-amber-900 text-sm leading-relaxed space-y-3">
            <p>
              台灣是一個宗教高度混合的社會。面對台灣民間信仰的根深蒂固（如媽祖、王爺信仰、祭祖文化），以及現代都會生活的疏離感與高壓環境，傳統的佈道模式（如大型佈道會、單向的街頭發單張）效果日益遞減。就像保羅在以弗所面對亞底米女神的崇拜一樣（徒十九），台灣教會也面臨著強大的文化與屬靈爭戰。教會亟需一種更具穿透力、更具生命影響力、且能深入日常生活的宣教模式。
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-amber-200 text-amber-700 text-xs font-medium">
            <span className="font-bold">📚 延伸內容來源：</span> 參考自莊祖鯤《宣教神學》及台灣本土宣教學者對台灣民間信仰處境化（Contextualization）的學術探討。
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6 flex items-center">
          <span className="w-2 h-6 bg-indigo-600 rounded-full mr-3"></span>
          保羅宣教策略的本土化實踐 <span className="text-xl text-slate-500 font-normal ml-2">p172</span>
        </h2>
        <p>
          首先，台灣拿撒勒人會可以借鏡保羅的<strong>「城市策略」</strong>。台灣是一個高度城市化的社會，人口高度集中於大台北、大台中、大高雄等都會區。教會的植堂與宣教資源應更具策略性地投入這些都會中心。
        </p>

        {/* 延伸探討區塊 */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-8 shadow-sm">
          <div className="flex items-center mb-3">
            <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <h4 className="font-bold text-amber-800 text-lg m-0">【延伸探討：科學園區與職場家戶佈道】</h4>
          </div>
          <div className="text-amber-900 text-sm leading-relaxed space-y-3">
            <p>
              特別是針對新興的重劃區、科學園區（如竹科、中科、南科）以及大學城。在這些地方建立充滿活力的信仰群體，能夠發揮最大的輻射效應。
            </p>
            <p>
              其次，保羅的<strong>「家戶佈道」（Oikos Evangelism）</strong>在台灣重視家庭與人際網絡的文化中極具應用價值。現代的「家戶」可以延伸為職場的同事圈、學校的社團、或是基於共同興趣的社群。教會應鼓勵並裝備信徒在自己的「生活圈」中活出聖潔的生命，建立微型教會（Micro-churches）或職場小組。
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-amber-200 text-amber-700 text-xs font-medium">
            <span className="font-bold">📚 延伸內容來源：</span> 參考自當代「微型教會」(Micro-church) 運動及台灣職場宣教的實務策略論述。
          </div>
        </div>

        <p>
          拿撒勒人會的核心神學「成聖論」（Entire Sanctification / Christian Perfection），與保羅強調信徒在基督裡成為「新造的人」、活出聖潔生活的教導高度契合。在一個道德相對主義盛行、充滿焦慮、職場競爭激烈與破碎關係的社會中，教會不應降低標準迎合世俗，而應勇敢地宣講並活出被聖靈充滿、全然成聖的生命。
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6 flex items-center">
          <span className="w-2 h-6 bg-indigo-600 rounded-full mr-3"></span>
          建立門徒與領袖傳承的急迫性 <span className="text-xl text-slate-500 font-normal ml-2">p178</span>
        </h2>
        <p>
          台灣教會普遍面臨「傳道人荒」與領袖斷層的危機。保羅對提摩太、提多等年輕同工的刻意栽培，為我們提供了最佳的解決方案。台灣拿撒勒人會必須將資源從單純的「維持聚會」與「舉辦活動」轉移到「門徒訓練」與「領袖培育」上。
        </p>

        {/* 延伸探討區塊 */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-8 shadow-sm">
          <div className="flex items-center mb-3">
            <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <h4 className="font-bold text-amber-800 text-lg m-0">【延伸探討：雙職事奉的現代應用】</h4>
          </div>
          <div className="text-amber-900 text-sm leading-relaxed space-y-3">
            <p>
              面對經濟壓力與牧者短缺，教會應積極推動<strong>「雙職事奉」（Bivocational Ministry）</strong>。如同保羅織帳棚一樣，鼓勵並裝備那些在職場上有專業能力的平信徒領袖（如工程師、教師、醫師、商人），讓他們在職場中帶著牧者的心腸建立信仰群體，並在教會治理與宣教實踐中發揮恩賜。這不僅能減輕教會的財務負擔，更能將福音直接帶入社會的各個階層。
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-amber-200 text-amber-700 text-xs font-medium">
            <span className="font-bold">📚 延伸內容來源：</span> 參考自近年全球與台灣教會界對「帶職/雙職事奉」(Bivocational / Co-vocational Ministry) 趨勢的探討與呼籲。
          </div>
        </div>

        <div className="bg-indigo-600 text-white p-6 rounded-xl mt-10 shadow-md">
          <p className="font-medium text-lg leading-relaxed text-center">
            總結而言，台灣拿撒勒人會若能深刻反思並實踐保羅的宣教神學——以基督為中心、倚靠聖靈的大能、採取靈活的跨文化策略、並致力於門徒與領袖的傳承——必能在台灣這塊土地上，再次經歷上帝宣教（Missio Dei）的奇妙作為，迎來教會的更新與復興。
          </p>
        </div>
      </div>
    </div>
  );
}
