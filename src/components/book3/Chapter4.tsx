import React from 'react';

export default function Chapter4() {
  return (
    <div className="space-y-8 pb-16">
      <div className="border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
          第三章：牧者保羅 <span className="text-2xl text-slate-500 font-normal ml-2">p75</span>
        </h1>
      </div>

      <div className="prose prose-slate max-w-none prose-p:leading-loose prose-p:text-slate-700">
        <p className="lead text-xl text-slate-700 mb-8 font-medium leading-relaxed border-l-4 border-slate-300 pl-4">
          保羅不僅是一位勇往直前的開荒佈道宣教士，更是一位充滿為父為母心腸的細膩牧者。他對所建立的教會從來不是「生而不養」，而是透過書信往返、親自探訪與差派得力同工，持續地進行深度的牧養、真理的建造與生命的關懷。
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6 flex items-center">
          <span className="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 text-sm font-bold shadow-sm">1</span>
          保羅的教導與關顧 <span className="text-xl text-slate-500 font-normal ml-2">p77</span>
        </h2>
        <p>
          保羅賴以建立教會的根基，也就是保羅所教導的內容，無疑就是他日後檢視與關切這些教會的依據。當保羅離開他所建立的教會後，他最主要的牧養工具就是「書信」。這些書信並非在象牙塔裡寫成的冷冰冰神學論文，而是充滿強烈情感、針對各教會具體處境與危機而寫的「教牧書信」（Occasional Letters）。
        </p>

        {/* 延伸探討區塊 */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-8 shadow-sm">
          <div className="flex items-center mb-3">
            <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <h4 className="font-bold text-amber-800 text-lg m-0">【延伸探討：保羅書信的具體牧養處境】</h4>
          </div>
          <div className="text-amber-900 text-sm leading-relaxed space-y-4">
            <div>
              <strong className="block text-amber-950">哥林多教會：十字架的道理與愛</strong>
              哥林多是一個繁華且道德敗壞的商業港口。教會內部面臨嚴重的結黨紛爭、淫亂問題，以及屬靈恩賜的混亂。更嚴重的是社會經濟階級的對立，富有的信徒在聖餐（愛筵）時先吃喝醉酒，而貧窮的信徒卻挨餓（林前十一）。保羅引導他們回到「十字架的道理」，並寫下「愛之歌」（林前十三），強調愛才是最大的恩賜。
            </div>
            <div>
              <strong className="block text-amber-950">加拉太教會：捍衛因信稱義的自由</strong>
              面對猶太派假教師企圖強迫外邦信徒受割禮並遵守摩西律法，保羅展現了極大的焦急。他毫不妥協地捍衛「因信稱義」的真理，呼籲他們站立在基督釋放的自由中。
            </div>
            <div>
              <strong className="block text-amber-950">帖撒羅尼迦教會：末世論的安慰與倫理</strong>
              信徒對於已經離世的弟兄姊妹感到憂慮，擔心錯過主再來的榮耀；同時有人因誤解主即將再來而放棄工作。保羅給予了溫暖的安慰與清晰的末世論教導，勸勉他們要警醒謹守，親手做工。
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-amber-200 text-amber-700 text-xs font-medium">
            <span className="font-bold">📚 延伸內容來源：</span> 參考自 Gordon D. Fee 及 John Stott 等新約學者對保羅書信歷史處境（Sitz im Leben）的釋經學著作。
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6 flex items-center">
          <span className="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 text-sm font-bold shadow-sm">2</span>
          保羅的生命典範 <span className="text-xl text-slate-500 font-normal ml-2">p85</span>
        </h2>
        <p>
          保羅以各樣方式和他所建立的教會保持緊密關係。他牧養的最強大武器，除了真理的教導，就是他自己生命的榜樣。保羅的生命典範特別體現在他的「織帳棚」事工（Bi-vocational ministry）上。身為使徒，他本有權利靠福音養生，但他為了不成為教會的經濟負擔，選擇與亞居拉夫婦一起親手做工維持生計。
        </p>
        <p>
          這種勞動者的姿態，徹底打破了希臘羅馬社會輕視體力勞動的階級觀念。此外，他面對逼迫與苦難時的堅忍，更是無聲卻震耳欲聾的牧養。他在腓立比的深牢中依然能唱詩讚美神；在羅馬的軟禁中依然能寫下充滿喜樂的《腓立比書》。
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6 flex items-center">
          <span className="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 text-sm font-bold shadow-sm">3</span>
          保羅的權柄與領導 <span className="text-xl text-slate-500 font-normal ml-2">p93</span>
        </h2>
        <p>
          保羅親手做工以支持他的福音事工，固然對許多信徒樹立典範，但是面對當時社會上的「超人」氛圍，保羅的作法也使他受到一些質疑。
        </p>

        {/* 延伸探討區塊 */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-8 shadow-sm">
          <div className="flex items-center mb-3">
            <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <h4 className="font-bold text-amber-800 text-lg m-0">【延伸探討：庇護者文化與僕人式領導】</h4>
          </div>
          <div className="text-amber-900 text-sm leading-relaxed space-y-3">
            <p>
              在希臘羅馬文化中，社會結構建立在「庇護者與依附者」（Patron-Client）的關係上。領袖通常是高高在上、發號施令、施予恩惠以換取忠誠與回報的庇護者。但保羅展現的卻是徹底顛覆世俗價值觀的「僕人式領導」（Servant Leadership）。
            </p>
            <p>
              在《腓利門書》中，保羅的領導藝術表現得淋漓盡致。保羅本可以憑著使徒的權柄，命令富有的腓利門接納並赦免逃奴阿尼西母，但他卻選擇退一步說：「寧可憑著愛心求你」。他尊重腓利門的自由意志，希望他的善行是出於甘心。保羅的領導力建立在愛、榜樣與屬靈的感召上，而非威權的壓迫。
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-amber-200 text-amber-700 text-xs font-medium">
            <span className="font-bold">📚 延伸內容來源：</span> 參考自 David A. deSilva《解開新約文化的密碼》對第一世紀羅馬社會「榮譽與羞辱」、「庇護與依附」文化的研究。
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-800 mt-12 mb-6 flex items-center">
          <span className="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 text-sm font-bold shadow-sm">4</span>
          保羅對同工的關顧 <span className="text-xl text-slate-500 font-normal ml-2">p99</span>
        </h2>
        <p>
          保羅對教會付出真心的關懷與牧養，他在實際的牧養工作中，也對信徒和同工個人的身心靈需要給予極其實際的關注和照顧。他稱提摩太為「因信主作我真兒子的」，不僅教導他如何牧養教會，甚至像父親一樣關心他的胃病（提前五 23）。
        </p>
        <p>
          更令人動容的是保羅對曾經失敗的同工的挽回與接納。年輕的馬可曾在第一次宣教旅程中半途而廢，導致保羅與巴拿巴發生激烈爭執。但保羅並沒有永遠否定馬可。多年後，在保羅生命即將走到盡頭時，他卻在書信中特別囑咐提摩太要把馬可帶來，並公開肯定馬可「在傳道的事上於我有益」（提後四 11）。
        </p>
      </div>
    </div>
  );
}
