export default function Intro() {
  return (
    <div className="space-y-6 text-slate-700 leading-relaxed">
      <h2 className="text-3xl font-bold text-violet-900 mb-6 border-b-4 border-violet-300 pb-2">前言</h2>
      
      <p className="text-base">
        一個禱告的人是最先蒙福的人。禱告使他知道神的心意，隨處支取天上隱藏的嗎哪，且能攻取撒但的營壘，破除捆綁和鎖鏈。禱告所帶來權柄和能力，是那些不肯透過禱告行事的人所無法經歷的。
      </p>
      
      <p className="text-base">
        肯禱告且充滿果效的禱告就好比打了一場充滿戰略又展現能力的球賽。這是因為他明白神的心意、方法和做事的法則，在聖靈教練的指導下知道如何進攻和防守，那麼他禱告所帶來的效果必然是威力無窮。
      </p>
      
      <p className="text-base">
        領人歸主、家庭和睦、親子關係等這些都是屬靈爭戰。我們要學會使用神賜給我們的各樣屬靈兵器，而非屬世的知識和毅力去達成目標。哥林多後書10:4說：<span className="font-semibold text-violet-800">「我們爭戰的兵器本不是屬血氣的，乃是在神面前有能力，可以攻破堅固的營壘。」</span>
      </p>
      
      <p className="text-base">
        那麼如何站在神面前呢？就是要把時間分別出來親近主，透過禱告、讀經、敬拜讚美專注地來就近神，學習把許多繁雜的事情關掉（電腦、手機、電視），培養屬靈的專注力。<span className="font-semibold text-violet-800">「專注」是禱告能否有果效的關鍵。</span>
      </p>
      
      <p className="text-base">
        一個禱告的人總能在險象環生的危機中看見神蹟，猶如基甸三百勇士攻破米甸，以少勝多、出奇制勝地爆發了超過敵方大軍的力量！或許我們看自己總是軟弱不足，但當我們開始在讀經禱告中認識這位全能的神，聖靈必會帶領我們從內心深處生發出對神的堅定信心。
      </p>
      
      <p className="text-base font-semibold text-violet-800 mt-6 bg-violet-50 p-4 rounded-lg border-l-4 border-violet-400">
        盼望藉著這本書，我們在禱告的學習上有美好的突破！願神帶領我們時時禱告、日日得勝，進入聖靈豐沛滿溢的同在，承接神在基督裡所預備那超過我們所求所想的祝福。
      </p>
      
      <p className="text-right text-slate-600 mt-4 italic">
        戴禮聖<br/>
        基督環球宣道出版社社長
      </p>

      {/* 會幕架構說明 */}
      <div className="mt-10 bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-300 p-6 rounded-xl shadow-md">
        <h3 className="text-2xl font-bold text-amber-900 mb-4 flex items-center gap-2">
          ⛺ 會幕禱告架構
        </h3>
        
        <p className="text-amber-800 mb-4">
          會幕分為三個區域：<strong>至聖所、聖所、外院</strong>，對應<strong>第三層天、第二層天、第一層天</strong>禱告。
        </p>

        <div className="space-y-4">
          <div className="bg-white/80 p-4 rounded-lg border border-amber-200">
            <h4 className="font-bold text-amber-900 mb-2 text-lg">🚪 外院 — 進入神的門</h4>
            <ul className="text-sm text-amber-800 space-y-1 ml-4">
              <li><strong>門</strong>：感謝禱告 — 感謝上帝作為</li>
              <li><strong>院</strong>：讚美禱告 — 讚美上帝屬性</li>
              <li><strong>燔祭壇</strong>：潔淨禱告 — 1. 感謝耶穌救恩，2. 潔淨、認罪、悔改</li>
              <li><strong>洗濯盆</strong>：潔淨禱告 — 魂與靈的潔淨</li>
            </ul>
          </div>

          <div className="bg-white/80 p-4 rounded-lg border border-amber-200">
            <h4 className="font-bold text-amber-900 mb-2 text-lg">🕯️ 聖所 — 親近神的殿</h4>
            <ul className="text-sm text-amber-800 space-y-1 ml-4">
              <li><strong>陳設餅</strong>：神的話語 — 讀經、默想</li>
              <li><strong>金燈臺</strong>：聖靈的光照 — 啟示與引導</li>
              <li><strong>金香壇</strong>：代求禱告 — 為人代禱、屬靈爭戰</li>
            </ul>
          </div>

          <div className="bg-white/80 p-4 rounded-lg border border-amber-200">
            <h4 className="font-bold text-amber-900 mb-2 text-lg">✨ 至聖所 — 神的同在</h4>
            <ul className="text-sm text-amber-800 space-y-1 ml-4">
              <li><strong>約櫃</strong>：神的同在 — 進入神榮耀、聖靈膏油澆灌</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-amber-100 p-4 rounded-lg">
          <h4 className="font-semibold text-amber-900 mb-2">三層天禱告對應</h4>
          <div className="text-sm text-amber-800 space-y-2">
            <p><strong>第三層天</strong>：宣告七次、讚美上帝屬性作為、感謝讚美歡迎聖靈、聖靈膏油</p>
            <p><strong>第二層天</strong>：寶血詩歌、魂與靈潔淨認罪禱告、行使權柄禱告、破除十步驟、宣告禱告</p>
            <p><strong>第一層天</strong>：為個人/家庭/教會/社區/國家/以色列禱告、產業方式、BLESS方式</p>
          </div>
        </div>
      </div>
    </div>
  );
}
