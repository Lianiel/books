import React from 'react';

export default function Chapter8() {
  return (
    <div className="space-y-8 pb-16">
      <div className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
          參考書目 <span className="text-2xl text-slate-500 font-normal ml-2">p185</span>
        </h1>
      </div>

      <div className="prose prose-slate max-w-none">
        <p className="text-slate-600 mb-8 text-lg border-l-4 border-slate-300 pl-4">
          以下為本書編寫與研究過程中，所參考之重要神學、宣教學與聖經研究文獻。這些文獻為理解保羅的宣教神學提供了深厚的學術基礎與實踐視角。
        </p>

        {/* 延伸探討區塊 */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-6 shadow-sm">
          <div className="flex items-center mb-2">
            <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <h4 className="font-bold text-amber-800 text-sm m-0">【延伸探討：文獻導讀】</h4>
          </div>
          <p className="text-amber-900 text-sm leading-relaxed m-0">
            為了幫助讀者更深入地理解這些參考書目的價值，以下書單特別加入了<strong>延伸的內容簡介與學術價值評估</strong>，以利讀者作為進階研讀的導覽。
          </p>
        </div>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-8 border-b border-slate-200 pb-3">
          中文文獻 <span className="text-xl text-slate-500 font-normal ml-2">p186</span>
        </h2>
        <ul className="space-y-8 text-slate-700 list-none pl-0">
          <li className="pl-6 border-l-4 border-indigo-400 bg-slate-50 py-4 pr-6 rounded-r-xl shadow-sm">
            <span className="font-bold text-slate-900 text-lg block mb-1">王乃純 (2023)。《向保羅學宣教：回歸聖經的宣教學》。台北：校園書房出版社。</span>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              <strong>【延伸簡介】：</strong>本書的核心文本，詳細論述了保羅宣教神學的各個面向及其在現代的應用。作者強調在實用主義掛帥的今日，教會必須重新回到聖經，以保羅的宣教模式為藍本進行反思。書中特別針對華人教會的處境提出了具體的建言。
            </p>
          </li>
          
          <li className="pl-6 border-l-4 border-indigo-400 bg-slate-50 py-4 pr-6 rounded-r-xl shadow-sm">
            <span className="font-bold text-slate-900 text-lg block mb-1">大衛·博許 (David J. Bosch) 著，白陳毓華譯 (1998)。《更新變化的宣教：宣教神學的聖經基礎與歷史發展》。台北：中華福音神學院。</span>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              <strong>【延伸簡介】：</strong>當代宣教學的經典巨著（Transforming Mission）。博許深入探討了「上帝的宣教」(Missio Dei) 概念，並詳細分析了從新約時代到現代宣教典範（Paradigm）的轉移。他對保羅宣教典範（如末世論動機、因信稱義的群體意義）的分析，是宣教學界必讀的權威文獻。
            </p>
          </li>
          
          <li className="pl-6 border-l-4 border-indigo-400 bg-slate-50 py-4 pr-6 rounded-r-xl shadow-sm">
            <span className="font-bold text-slate-900 text-lg block mb-1">斯托得 (John R. W. Stott) 著，黃元林譯 (2001)。《羅馬書：恩典與真理的福音》。台北：校園書房出版社。</span>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              <strong>【延伸簡介】：</strong>福音派泰斗斯托得對保羅核心神學（因信稱義、神的義、聖靈的工作）提供了清晰且具極高教牧關懷的釋經。斯托得的解經不僅嚴謹，更幫助讀者理解保羅神學如何成為推動普世宣教的強大動力。
            </p>
          </li>
          
          <li className="pl-6 border-l-4 border-indigo-400 bg-slate-50 py-4 pr-6 rounded-r-xl shadow-sm">
            <span className="font-bold text-slate-900 text-lg block mb-1">賴特 (N. T. Wright) 著，白陳毓華譯 (2014)。《保羅神學的新視野》。台北：校園書房出版社。</span>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              <strong>【延伸簡介】：</strong>「保羅新觀」（New Perspective on Paul）的代表作之一。賴特從第一世紀第二聖殿期猶太教的背景，重新詮釋保羅的稱義觀與群體身分標記（Boundary Markers）。這本書對於理解保羅如何打破猶太與外邦的藩籬、建立一個多種族的普世教會具有極重要的啟發。
            </p>
          </li>
          
          <li className="pl-6 border-l-4 border-indigo-400 bg-slate-50 py-4 pr-6 rounded-r-xl shadow-sm">
            <span className="font-bold text-slate-900 text-lg block mb-1">莊祖鯤 (2004)。《宣教神學：聖經基礎與歷史發展》。台北：使者出版社。</span>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              <strong>【延伸簡介】：</strong>華人學者對宣教神學的系統性論述。本書特別關注跨文化宣教的挑戰，並將西方宣教理論與華人教會的歷史處境相結合，對於探討保羅宣教模式在亞洲的應用極具參考價值。
            </p>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-800 mt-16 mb-8 border-b border-slate-200 pb-3">
          外文文獻 <span className="text-xl text-slate-500 font-normal ml-2">p188</span>
        </h2>
        <ul className="space-y-8 text-slate-700 list-none pl-0">
          <li className="pl-6 border-l-4 border-indigo-400 bg-slate-50 py-4 pr-6 rounded-r-xl shadow-sm">
            <span className="font-bold text-slate-900 text-lg block mb-1">Schnabel, Eckhard J. (2004). <i>Early Christian Mission: Paul and the Early Church</i> (Vol. 2). Downers Grove, IL: InterVarsity Press.</span>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              <strong>【延伸簡介】：</strong>這是一套極為詳盡、百科全書式的初期教會宣教史研究。作者詳細考證了保羅的宣教路線、城市策略、當時的社會文化背景，以及保羅與各個地方教會的互動細節。
            </p>
          </li>
          
          <li className="pl-6 border-l-4 border-indigo-400 bg-slate-50 py-4 pr-6 rounded-r-xl shadow-sm">
            <span className="font-bold text-slate-900 text-lg block mb-1">Dunn, James D. G. (1998). <i>The Theology of Paul the Apostle</i>. Grand Rapids, MI: Eerdmans.</span>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              <strong>【延伸簡介】：</strong>保羅神學的權威著作。Dunn 系統性地梳理了保羅思想的各個主題（如上帝論、基督論、救恩論、教會論），並特別強調保羅神學的「宣教導向」——保羅的神學是為了宣教而生，也為宣教服務。
            </p>
          </li>
          
          <li className="pl-6 border-l-4 border-indigo-400 bg-slate-50 py-4 pr-6 rounded-r-xl shadow-sm">
            <span className="font-bold text-slate-900 text-lg block mb-1">Roland Allen (1912). <i>Missionary Methods: St. Paul's or Ours?</i>. London: World Dominion Press.</span>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              <strong>【延伸簡介】：</strong>宣教學的經典之作，至今仍具強烈震撼力。作者強烈批判現代宣教過度依賴西方資金、機構與控制，呼籲回歸保羅信任聖靈、建立本土化教會（三自原則：自治、自養、自傳）的模式。
            </p>
          </li>
          
          <li className="pl-6 border-l-4 border-indigo-400 bg-slate-50 py-4 pr-6 rounded-r-xl shadow-sm">
            <span className="font-bold text-slate-900 text-lg block mb-1">Plummer, Robert L. (2006). <i>Paul's Understanding of the Church's Mission: Did the Apostle Paul Expect the Early Christian Communities to Evangelize?</i>. Milton Keynes, UK: Paternoster.</span>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              <strong>【延伸簡介】：</strong>本書專門探討一個關鍵的宣教學問題：保羅是否期望他所建立的教會群體繼續承擔傳福音的使命？作者透過嚴謹的釋經，論證了「教會作為宣教群體」的本質，指出保羅期望信徒透過生命見證與口頭傳講，持續擴展福音。
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
