import React from 'react';

export default function Chapter5() {
  return (
    <div className="space-y-8 pb-16">
      <div className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
          第四章：保羅的典範與啟示 <span className="text-2xl text-slate-500 font-normal ml-2">p105</span>
        </h1>
      </div>

      <div className="prose prose-slate max-w-none prose-p:leading-loose prose-p:text-slate-700">
        <p className="lead text-xl text-slate-700 mb-8 font-medium leading-relaxed border-l-4 border-slate-300 pl-4">
          保羅的宣教事工之所以能夠在第一世紀的羅馬帝國取得如此驚人的成就，並非僅僅依靠他的熱情與口才，而是因為他建立了一套極具前瞻性、高度策略性且深植於聖經真理的宣教模式。
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6 flex items-center">
          <span className="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 text-sm font-bold shadow-sm">1</span>
          保羅對教義之教導 <span className="text-xl text-slate-500 font-normal ml-2">p107</span>
        </h2>
        <p>
          保羅蒙召作為外邦人的使徒，在各地傳揚福音、建立教會，他所傳講的核心就是「基督並他釘十字架」(林前二 2)。
        </p>

        {/* 延伸探討區塊 */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-8 shadow-sm">
          <div className="flex items-center mb-3">
            <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <h4 className="font-bold text-amber-800 text-lg m-0">【延伸探討：保羅宣教神學的三大支柱】</h4>
          </div>
          <div className="text-amber-900 text-sm leading-relaxed space-y-4">
            <p>保羅的宣教神學建立在三個不可動搖的核心支柱上：</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>基督論（Christology）：</strong>他強調基督不僅是猶太人的彌賽亞，更是宇宙的主宰，是創造與救贖的中心。這賦予了宣教普世性的意義，打破了民族主義的藩籬。</li>
              <li><strong>教會論（Ecclesiology）：</strong>他將教會視為「基督的身體」，強調信徒在基督裡的合一。教會不僅是宣教的「工具」，教會本身就是對這破碎世界最強而有力的宣教「見證」。</li>
              <li><strong>末世論（Eschatology）：</strong>保羅深信信徒生活在「已然與未然」（Already and Not Yet）的張力中。這種對主再來的急迫感，成為驅動他不斷向未得之民傳福音的強大動力。</li>
            </ul>
          </div>
          <div className="mt-4 pt-3 border-t border-amber-200 text-amber-700 text-xs font-medium">
            <span className="font-bold">📚 延伸內容來源：</span> 參考自 James D.G. Dunn《The Theology of Paul the Apostle》對保羅神學三大支柱的系統性分析。
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6 flex items-center">
          <span className="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 text-sm font-bold shadow-sm">2</span>
          保羅的宣教模式 <span className="text-xl text-slate-500 font-normal ml-2">p113</span>
        </h2>
        <p>
          保羅以「外邦人使徒的身分」在各地宣教，一開始並不順利，主要是面臨猶太教背景基督徒的質疑，以及猶太同胞的拒絕與逼迫。儘管面臨挑戰，保羅發展出了一套極具策略性的宣教模式：
        </p>
        
        <p className="font-bold text-slate-800 mt-6">城市策略 (Urban Strategy)</p>
        <p>
          保羅精準地選擇了羅馬帝國的政治、經濟與文化中心（如以弗所、哥林多、腓立比）作為宣教據點。只要福音在這些戰略城市扎根，就能透過貿易路線與人口流動，自動且迅速地向周邊輻射。這是一種「由點到面」的高效策略。
        </p>

        <p className="font-bold text-slate-800 mt-6">家戶佈道 (Oikos Evangelism)</p>
        <p>
          在第一世紀的羅馬社會，家庭（Oikos）不僅是血緣關係的集合，更是一個微型的社會經濟單位。保羅經常透過帶領一家之主信主，進而影響整個家戶網絡歸向基督。
        </p>

        {/* 延伸探討區塊 */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-6 shadow-sm">
          <div className="flex items-center mb-3">
            <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <h4 className="font-bold text-amber-800 text-lg m-0">【延伸探討：家戶佈道與羅馬父權社會的顛覆】</h4>
          </div>
          <div className="text-amber-900 text-sm leading-relaxed space-y-3">
            <p>
              福音進入家戶後，顛覆了羅馬父權社會（Paterfamilias）的絕對統治。保羅在《以弗所書》五至六章的「家規」（Household Codes）中，雖然保留了當時的社會結構，卻注入了「存敬畏基督的心，彼此順服」的革命性精神，要求作丈夫的要像基督愛教會一樣愛妻子，作主人的要善待奴僕，因為知道同有一位主在天上。
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-amber-200 text-amber-700 text-xs font-medium">
            <span className="font-bold">📚 延伸內容來源：</span> 參考自 Robert Banks《保羅的群體思想》(Paul's Idea of Community) 對第一世紀家戶教會 (House Churches) 結構的研究。
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6 flex items-center">
          <span className="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 text-sm font-bold shadow-sm">3</span>
          保羅建立的團隊 <span className="text-xl text-slate-500 font-normal ml-2">p119</span>
        </h2>
        <p>
          保羅的宣教事工從來就不是一個人獨力完成，從安提阿教會差派巴拿巴和保羅開始，就是以一個「團隊」的形式進行各樣事工。保羅不僅是團隊的領導者，更是團隊的連結者（Networker），他透過書信的教導與使者的往返，將散布在地中海沿岸各地的獨立教會與同工，緊密地連結成一個具有普世國度觀的信仰網絡。
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6 flex items-center">
          <span className="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 text-sm font-bold shadow-sm">4</span>
          保羅的牧養模式 <span className="text-xl text-slate-500 font-normal ml-2">p125</span>
        </h2>
        <p>
          宣教者保羅帶著宣教團隊旅行各地，途中建立了一些教會，也在一些教會中設立長老 (徒十四 23；多一 5)。
        </p>

        {/* 延伸探討區塊 */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-6 shadow-sm">
          <div className="flex items-center mb-3">
            <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <h4 className="font-bold text-amber-800 text-lg m-0">【延伸探討：羅蘭·亞倫與三自原則】</h4>
          </div>
          <div className="text-amber-900 text-sm leading-relaxed space-y-3">
            <p>
              保羅的牧養模式，在近代宣教學（如羅蘭·亞倫 Roland Allen 的經典著作《宣教方法：保羅的還是我們的？》）中被總結為「三自原則」（Self-governing, Self-sustaining, Self-propagating），即自治、自養、自傳的本土化教會原則。
            </p>
            <p>
              保羅從不試圖將自己建立的教會變成依附於他個人或西方母會的「屬靈殖民地」。他在一個地方傳福音、建立教會後，會迅速地在當地信徒中選立長老，將教會的治理權與責任交給他們。這種極度信任聖靈、勇敢賦權本土領袖的牧養模式，是保羅宣教事工得以迅速擴展的關鍵。
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-amber-200 text-amber-700 text-xs font-medium">
            <span className="font-bold">📚 延伸內容來源：</span> 參考自羅蘭·亞倫 (Roland Allen) 的宣教學經典著作《宣教方法：保羅的還是我們的？》。
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6 flex items-center">
          <span className="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 text-sm font-bold shadow-sm">5</span>
          保羅的人才培育 <span className="text-xl text-slate-500 font-normal ml-2">p131</span>
        </h2>
        <p>
          保羅最卓越的成就之一，就是他對下一代領袖的刻意栽培與傳承。保羅的人才培育理念濃縮在《提摩太後書》二章 2 節：「你在許多見證人面前聽見我所教訓的，也要交託那忠心能教導別人的人。」這是一個清晰的「四代傳承模式」（保羅 → 提摩太 → 忠心的人 → 別人）。
        </p>
        <p>
          保羅對提摩太與提多的栽培，不僅僅是課堂上神學知識的傳授，更是生活在一起、事奉在一起的生命師徒關係（Mentorship / Discipleship）。這種「生命影響生命」的培育模式，確保了福音事工在保羅殉道離世後，依然能夠一代接一代地持續發展。
        </p>
      </div>
    </div>
  );
}
