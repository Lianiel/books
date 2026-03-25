import React from 'react';

export default function Chapter1() {
  return (
    <div className="space-y-8 pb-16">
      <div className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
          緒論 <span className="text-2xl text-slate-500 font-normal ml-2">p1</span>
        </h1>
      </div>

      <div className="prose prose-slate max-w-none prose-p:leading-loose prose-p:text-slate-700">
        <p className="lead text-xl text-slate-700 mb-8 font-medium leading-relaxed border-l-4 border-slate-300 pl-4">
          本書旨在探討使徒保羅的宣教神學與實踐，並將其作為當代教會宣教事工的最高典範。在瞬息萬變的現代社會中，教會的宣教策略往往容易受到世俗管理學或實用主義的影響，而忽略了聖經本身的啟示。因此，回歸聖經，特別是深入研究保羅的宣教模式，對於今日教會的發展至關重要。
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6 flex items-center">
          <span className="w-2 h-6 bg-indigo-600 rounded-full mr-3"></span>
          回歸聖經的宣教思考 <span className="text-xl text-slate-500 font-normal ml-2">p3</span>
        </h2>
        <p>
          對於這樣多元的宣教模式，正如當代宣教學者大衛·博許 (David J. Bosch) 在其鉅著《更新變化的宣教》(Transforming Mission) 中所言，在教會發展的過去兩千年裡，沒有一個時代只擁有單一的「宣教神學」，甚至初代教會也是如此。時至今日，各地教會對於「宣教」的認知和執行方式仍有許多不同看法。有些教會強調社會福音與慈惠事工，有些則專注於個人佈道與靈魂得救，有些依賴大型佈道會，有些則深耕於小組與家庭教會。
        </p>
        
        {/* 延伸探討區塊 */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-8 shadow-sm">
          <div className="flex items-center mb-3">
            <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <h4 className="font-bold text-amber-800 text-lg m-0">【延伸探討：現代教會的實用主義危機】</h4>
          </div>
          <div className="text-amber-900 text-sm leading-relaxed space-y-3">
            <p>
              現代教會面臨的一個重大危機是「實用主義」（Pragmatism）與「消費主義」（Consumerism）的雙重夾擊。自二十世紀中葉「教會增長運動」（Church Growth Movement）興起以來，許多教會在制定宣教策略時，過度依賴社會學、市場行銷學或企業管理學。他們將焦點放在「如何滿足目標客群的需求」（Felt-needs），追求人數的快速增長與事工的表面成效。
            </p>
            <p className="italic font-medium border-l-2 border-amber-300 pl-3 my-2">
              「當教會將『信徒』轉變為『消費者』，將『教會』轉變為『宗教服務提供者』，將『福音』包裝成解決人生困境的『產品』時，福音那呼召人『捨己、背起十字架跟從主』的顛覆性與代價便蕩然無存。」
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-amber-200 text-amber-700 text-xs font-medium">
            <span className="font-bold">📚 延伸內容來源：</span> 參考自大衛·博許 (David J. Bosch)《更新變化的宣教》對實用主義的批判，以及大衛·威爾斯 (David F. Wells)《孤立無援的福音》對教會消費主義的反思。
          </div>
        </div>

        <p>
          因此，我們必須大聲疾呼「回歸聖經的宣教思考」。聖經不僅是我們信仰的最高準則，也是我們實踐宣教的唯一權威指南。我們需要從聖經中重新發掘宣教的本質、動力與方法。這意味著我們不能僅僅從聖經中尋找支持我們既定計畫的經文（斷章取義的解經），而是要讓聖經的宏大敘事——從創造、墮落、救贖到成全——來塑造我們的宣教觀。
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6 flex items-center">
          <span className="w-2 h-6 bg-indigo-600 rounded-full mr-3"></span>
          上帝的宣教 (Missio Dei) <span className="text-xl text-slate-500 font-normal ml-2">p7</span>
        </h2>
        <p>
          若我們要依據聖經來批判與評估我們現今的宣教作為，那麼有一件事不可忘，就是「宣教」乃是「上帝的宣教 (Missio Dei)」。《基督教聖經與神學詞典》解釋，這個用詞為拉丁文宣教神學用語。「神的宣教」或「神的差傳」原本用於三一神學的討論。
        </p>

        {/* 延伸探討區塊 */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-8 shadow-sm">
          <div className="flex items-center mb-3">
            <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <h4 className="font-bold text-amber-800 text-lg m-0">【延伸探討：Missio Dei 的神學翻轉】</h4>
          </div>
          <div className="text-amber-900 text-sm leading-relaxed space-y-3">
            <p>
              在神學家卡爾·巴特（Karl Barth）的啟發下，近代宣教神學（特別是自1952年國際宣教協會的威靈根宣教大會 Willingen Conference 以來）以這個用語強調，在創世之初神已經開始宣教的工作。
            </p>
            <p>
              「上帝的宣教」這一概念徹底翻轉了傳統以「教會為中心」（Ecclesiocentric）的宣教觀。傳統觀念認為教會是主體，宣教是客體。然而，Missio Dei 強調，宣教的源頭是三一上帝：聖父差遣聖子，聖父與聖子共同差遣聖靈，而三一上帝共同差遣教會進入世界。這意味著，不是教會擁有一個宣教使命，而是<strong>「宣教的上帝擁有一個教會」</strong>。教會是上帝宣教的果子，也是上帝宣教的器皿。
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-amber-200 text-amber-700 text-xs font-medium">
            <span className="font-bold">📚 延伸內容來源：</span> 參考自 1952 年威靈根宣教大會 (Willingen Conference) 歷史文獻，以及卡爾·巴特 (Karl Barth) 的三一宣教神學論述。
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6 flex items-center">
          <span className="w-2 h-6 bg-indigo-600 rounded-full mr-3"></span>
          保羅的宣教典範 <span className="text-xl text-slate-500 font-normal ml-2">p11</span>
        </h2>
        <p>
          以保羅所處的第一世紀的環境來看，他的宣教活動與模式，顯然是跨國的宣教，當然也是跨文化的宣教，這樣的宣教模式成為當今許多教會參考與模仿的模式。保羅的足跡遍布小亞細亞、馬其頓、亞該亞，甚至遠達羅馬，並計畫前往當時已知世界的地極——西班牙（羅十五24）。
        </p>
        <p>
          保羅之所以能成為新約中最偉大的宣教士，並非偶然。上帝在創世以前就揀選了他，並透過他獨特的成長背景——身兼嚴謹的猶太法利賽人、受過希臘化教育的知識份子，以及擁有羅馬公民身分——預備他成為「外邦人的使徒」。保羅的宣教不僅僅是熱情的佈道，更是建立在深厚神學基礎上的教會建造。研究保羅的宣教，就是為現代教會尋找一條既忠於聖經啟示，又能有效回應複雜時代挑戰的宣教出路。
        </p>
      </div>
    </div>
  );
}
