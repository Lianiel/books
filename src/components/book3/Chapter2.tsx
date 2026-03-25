import React from 'react';

export default function Chapter2() {
  return (
    <div className="space-y-8 pb-16">
      <div className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
          第一章：成長於兩個世界的保羅 <span className="text-2xl text-slate-500 font-normal ml-2">p15</span>
        </h1>
      </div>

      <div className="prose prose-slate max-w-none prose-p:leading-loose prose-p:text-slate-700">
        <p className="lead text-xl text-slate-700 mb-8 font-medium leading-relaxed border-l-4 border-slate-300 pl-4">
          要真正理解保羅的宣教策略與神學思想，我們必須首先認識他獨特的成長背景。保羅是一個橫跨猶太傳統與希臘羅馬文化「兩個世界」的人，這種雙重背景成為他日後向萬邦傳遞福音的最強大資產。
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6 flex items-center">
          <span className="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 text-sm font-bold shadow-sm">1</span>
          保羅的成長背景 <span className="text-xl text-slate-500 font-normal ml-2">p17</span>
        </h2>
        <p>
          根據路加記載關於保羅的自述和保羅在書信中的陳述 (徒廿二 3；廿六 4；腓三 5)，我們可以勾勒出保羅的成長背景。他出生於基利家的「大數」(Tarsus)。大數並非無名小城，它是當時羅馬帝國東部繁華的商業中心，也是與雅典、亞歷山大齊名的希臘化教育重鎮。
        </p>

        {/* 延伸探討區塊 */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-8 shadow-sm">
          <div className="flex items-center mb-3">
            <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <h4 className="font-bold text-amber-800 text-lg m-0">【延伸探討：斯多葛學派與羅馬公民權細節】</h4>
          </div>
          <div className="text-amber-900 text-sm leading-relaxed space-y-3">
            <p>
              在大數的成長經歷，使保羅精通希臘語，熟悉希臘的修辭學（Rhetoric）。他甚至借用了當時大數盛行的斯多葛學派（Stoicism）詞彙，如「良心」（Syneidesis）和「自足」（Autarkeia，腓四11），賦予其全新的基督信仰內涵。
            </p>
            <p>
              同時，保羅擁有「羅馬公民」的特殊身分。根據羅馬法（如 Lex Porcia 和 Lex Julia），羅馬公民享有免受未經審判的鞭打與刑罰、自由通行帝國各地，以及在面臨死刑指控時上訴羅馬皇帝（Caesar）的絕對權利。這項身分在保羅的宣教旅程中多次保護了他（如在腓立比監獄與耶路撒冷暴動中）。
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-amber-200 text-amber-700 text-xs font-medium">
            <span className="font-bold">📚 延伸內容來源：</span> 參考自 Eckhard J. Schnabel《Early Christian Mission》對第一世紀羅馬法與斯多葛學派背景的歷史考證。
          </div>
        </div>

        <p>
          然而，在骨子裡，保羅是一個「希伯來人所生的希伯來人」。他屬於便雅憫支派，出生第八天受割禮，擁有純正的猶太血統。他年輕時被送到耶路撒冷，在當時最著名的拉比、法利賽人領袖「迦瑪列」（Gamaliel）門下受教，嚴格學習祖宗的律法與口傳傳統。
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6 flex items-center">
          <span className="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 text-sm font-bold shadow-sm">2</span>
          保羅的蒙召與使命 <span className="text-xl text-slate-500 font-normal ml-2">p25</span>
        </h2>
        <p>
          身為一名法利賽人，根據保羅的自述，他曾經對祖宗的遺傳大發「熱心」（Zeal）。這個熱心使他成為「逼迫教會的」，就律法的義來說，他是「無可指摘的」(腓三 6)。在司提反殉道後，掃羅逼迫教會的熱心更是變本加厲。
        </p>

        {/* 延伸探討區塊 */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-8 shadow-sm">
          <div className="flex items-center mb-3">
            <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <h4 className="font-bold text-amber-800 text-lg m-0">【延伸探討：猶太歷史中的「熱心」】</h4>
          </div>
          <div className="text-amber-900 text-sm leading-relaxed space-y-3">
            <p>
              在猶太歷史中，「熱心」並非只是一種情緒，而是一個具有神學與政治意涵的專有名詞。它往往與維護上帝的聖潔、甚至不惜使用暴力清除異端或外邦污染有關（如舊約中刺死行淫者的非尼哈，以及抵抗敘利亞帝國的馬加比家族）。保羅早期的逼迫行為，正是出於這種神學上的「熱心」。
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-amber-200 text-amber-700 text-xs font-medium">
            <span className="font-bold">📚 延伸內容來源：</span> 參考自 N.T. Wright《新約與神的子民》對第二聖殿時期猶太教「熱心」傳統的歷史神學分析。
          </div>
        </div>

        <p>
          然而，在大馬士革的路上，保羅經歷了生命中最大的翻轉。復活的基督在強光中向他顯現，這不僅僅是一次個人的「悔改歸主」，更是一次先知性的「蒙召」（Calling）。他意識到，自己並非從一個宗教轉向另一個宗教，而是遇見了以色列上帝最終的啟示。基督給予他一個明確的使命：作外邦人的使徒。
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6 flex items-center">
          <span className="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 text-sm font-bold shadow-sm">3</span>
          保羅傳講的信息 <span className="text-xl text-slate-500 font-normal ml-2">p33</span>
        </h2>
        <p>
          保羅的信息不再是靠律法稱義，而是完全聚焦於基督的十字架與復活。他深知這信息在猶太人為絆腳石，在外邦人為愚拙，但在蒙召的人眼中，卻是神的大能與智慧（林前一23-24）。
        </p>

        <div className="space-y-8 mt-10">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500"></div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">福音是「神的義」 <span className="text-sm text-slate-400 font-normal ml-2">p35</span></h3>
            <p className="text-slate-700 leading-relaxed">
              保羅在羅馬書一章 16-17 節明確表達「福音」本身帶著能力，而這種能力所彰顯的就是「神的義」(Dikaiosyne Theou)。
            </p>
            
            {/* 延伸探討區塊 */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4">
              <h4 className="font-bold text-amber-800 text-sm mb-2">【延伸探討：保羅新觀對「神的義」的詮釋】</h4>
              <p className="text-amber-900 text-sm leading-relaxed">
                傳統改革宗神學強調這是一種「法庭式的宣告」（Forensic Justification），上帝將基督的義「歸算」給信徒。而當代神學家（如 N.T. Wright 的保羅新觀）則進一步指出，「神的義」更深層地指上帝「信守祂對亞伯拉罕的聖約承諾」（Covenant Faithfulness）。這不僅是法庭上的無罪宣告，更是將外邦人納入立約子民群體的關係恢復。
              </p>
              <div className="mt-3 pt-2 border-t border-amber-200 text-amber-700 text-xs font-medium">
                <span className="font-bold">📚 延伸內容來源：</span> 參考自賴特 (N.T. Wright)《保羅神學的新視野》對「保羅新觀」與聖約神學的論述。
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500"></div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">本於信，以至於信 <span className="text-sm text-slate-400 font-normal ml-2">p38</span></h3>
            <p className="text-slate-700 leading-relaxed">
              保羅認為，神的義藉著基督完成的贖罪祭而彰顯出來。人能得到這個義是「本於信，以至於信」(羅一 17)。保羅強烈反對依靠「行律法」（Works of the Law）來稱義。
            </p>
            
            {/* 延伸探討區塊 */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4">
              <h4 className="font-bold text-amber-800 text-sm mb-2">【延伸探討：行律法與身分標記】</h4>
              <p className="text-amber-900 text-sm leading-relaxed">
                在第一世紀的語境中，「行律法」特別是指割禮、飲食規條、安息日等區分猶太人與外邦人的「身分標記」（Boundary Markers）。保羅堅持，信心是加入上帝新約子民群體的唯一標記，這徹底打破了猶太主義的民族排他性，為全世界的外邦人敞開了救恩的大門。
              </p>
              <div className="mt-3 pt-2 border-t border-amber-200 text-amber-700 text-xs font-medium">
                <span className="font-bold">📚 延伸內容來源：</span> 參考自 James D.G. Dunn《The Theology of Paul the Apostle》對「身分標記」(Boundary Markers) 的神學詮釋。
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500"></div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">律法的意義與價值 <span className="text-sm text-slate-400 font-normal ml-2">p41</span></h3>
            <p className="text-slate-700 leading-relaxed">
              既然因信稱義，那麼舊約律法還有價值嗎？保羅指出，律法本身是聖潔的、公義的、良善的（羅七12），它的歷史作用如同「訓蒙的師傅」（Paidagogos），目的是顯明人的罪，將人圈在罪惡之下，從而引導人意識到自己需要救主，最終歸向基督（加三24）。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
