export default function Chapter1() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-bold text-amber-800">第 1 站：《列王紀》總論</h2>
      <p className="text-sm text-slate-500">閱讀經文：列王紀上下全書概覽｜p.11-44</p>

      <div className="bg-amber-50 rounded-xl p-5 space-y-3">
        <h3 className="text-lg font-bold text-amber-700">📌 本站主題：從歷史中看見神的啟示</h3>
        <p className="text-slate-700 leading-relaxed">聖經的舊約經文超過百分之四十的篇幅是由敘述文體構成。其中歷史書更是蘊藏的瑰寶，不僅是鑑古知來的明鏡，也是人類文化的根源，更孕育了永恆不變的真理。黑格爾曾說：「歷史給人類的教訓，是人類不接受歷史的教訓。」（p.12）</p>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-400 rounded-lg p-4">
        <h4 className="font-bold text-amber-700 mb-2">🙏 禱告</h4>
        <p className="text-slate-700 italic leading-relaxed">親愛的天父，當我每一次讀祢話語的時候，求祢開啟我心靈的眼睛，帶領我進入真理；並懇求聖靈開通我的耳，能夠明白祢的心意，順服祢的帶領，成為一個蒙福的人。我願從祢的話語得著教訓，學習做智慧的選擇，成為合祢心意的人，使身邊的人也因我而得祝福。我奉主耶穌基督的聖名祈求，阿們！（p.13）</p>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-bold text-slate-800">📖 經文導覽</h3>

        <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-4">
          <h4 className="font-bold text-amber-700">一、簡介（p.14）</h4>
          <p className="text-slate-700 leading-relaxed">《列王紀上》和《列王紀下》在猶太人的經卷原是一卷書，是「前先知書」中的最後一卷。「前先知書」包含《約書亞記》、《士師記》、《撒母耳記》與《列王紀》。《七十士譯本》首先將它分為上下兩冊。（p.14）</p>
          <p className="text-slate-700 leading-relaxed">書中不僅記載以色列諸王的歷史，<strong>更聚焦於先知的事奉</strong>，尤其是先知對君王勸勉、警戒、傳達神旨意的敘述。作者以雙線交叉穿梭地記載南國和北國的歷史。（p.14-15）</p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-4">
          <h4 className="font-bold text-amber-700">全書主要先知人物（p.15）</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-amber-50 rounded-lg p-3"><p className="font-semibold text-amber-700">拿單</p><p className="text-xs text-slate-500">王上 1</p></div>
            <div className="bg-amber-50 rounded-lg p-3"><p className="font-semibold text-amber-700">不知名的「神人」</p><p className="text-xs text-slate-500">王上 13</p></div>
            <div className="bg-amber-50 rounded-lg p-3"><p className="font-semibold text-amber-700">哈拿尼的兒子耶戶</p><p className="text-xs text-slate-500">王上 16</p></div>
            <div className="bg-amber-50 rounded-lg p-3"><p className="font-semibold text-amber-700">以利亞</p><p className="text-xs text-slate-500">王上 17～王下 2</p></div>
            <div className="bg-amber-50 rounded-lg p-3"><p className="font-semibold text-amber-700">米該雅</p><p className="text-xs text-slate-500">王上 22</p></div>
            <div className="bg-amber-50 rounded-lg p-3"><p className="font-semibold text-amber-700">以利沙</p><p className="text-xs text-slate-500">王上 19；王下 2～13</p></div>
            <div className="bg-amber-50 rounded-lg p-3"><p className="font-semibold text-amber-700">以賽亞</p><p className="text-xs text-slate-500">王下 19～20</p></div>
          </div>
          <p className="text-sm text-slate-600 italic">其中以利亞和以利沙的事工，佔了將近本書三分之一的篇幅。（p.15）</p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-4">
          <h4 className="font-bold text-amber-700">交叉型架構（Chiastic Structure）（p.15）</h4>
          <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm text-slate-700 space-y-1 overflow-x-auto">
            <p>所羅門王和聯合王國（王上 1～11）</p>
            <p className="ml-4">北國從聯合王國分裂出來（王上 12）</p>
            <p className="ml-8">北國和南國中的諸王（王上 13:1～16:20）</p>
            <p className="ml-12">內戰：暗利王朝的開始（王上 16:21-34）</p>
            <p className="ml-16">以利亞先知和暗利王朝（王上 17～王下 1）</p>
            <p className="ml-16 font-bold text-amber-700">→ 以利沙接替以利亞為先知（王下 2）← 全書樞紐</p>
            <p className="ml-16">以利沙先知和暗利王朝（王下 3:1～9:13）</p>
            <p className="ml-12">內戰：暗利王朝的結束（王下 9:14～11:20）</p>
            <p className="ml-8">北國和南國中的諸王（王下 12～16）</p>
            <p className="ml-4">北國的敗落和滅亡（王下 17）</p>
            <p>南國——聯合王國的結束（王下 18～25）</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-4">
          <h4 className="font-bold text-amber-700">二、作者與寫作時間（p.18-21）</h4>
          <p className="text-slate-700 leading-relaxed">本書大致按年代編列，記載從大衛王晚期將王位傳給所羅門開始（約主前 970 年），直到南國猶大的約雅斤王被擄至巴比倫 37 年從監牢被釋放為止。因此本書應於主前 561 年至主前 538 年之間成書。（p.19）</p>
          <p className="text-slate-700 leading-relaxed"><strong>執政公式（Regnal Formulae）</strong>——本書平均每一章就有超過一節經文記載年代表資料，總共將近六十節。結構是環繞著嚴謹的年代紀錄框架組合而成，包含三部分：(1) 導言、(2) 評語、(3) 生平節錄。（p.19-21）</p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-4">
          <h4 className="font-bold text-amber-700">三、歷史背景與寫作目的（p.22-29）</h4>
          <p className="text-slate-700 leading-relaxed">寫作主旨：以色列得罪公義的神，因為「犯罪」而「受罰」（參：王下 17:7-23；24:3-4）。（p.27）</p>
          <p className="text-slate-700 leading-relaxed">即使在亂世中，神差派了最傳奇的先知——以利亞和以利沙——輪番上陣！他們在本書所佔的篇幅，遠超過北國任何君王。（p.27）</p>
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
            <p className="text-slate-700 font-semibold">QUICK TIP：人飢餓非因無餅，乾渴非因無水，乃因不聽耶和華的話。（摩 8:11）（p.17）</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-4">
          <h4 className="font-bold text-amber-700">四、文學特徵與神學主題（p.30-35）</h4>
          <p className="text-slate-700 leading-relaxed">作者善用類比（analogy）為本書的鋪陳（plot），用四十七章的內容敘述以色列王國從聯合步入南北分裂，最後相繼被擄。（p.30）</p>

          <h5 className="font-semibold text-slate-700 mt-4">三組重要對比表（p.30）</h5>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-amber-100"><th className="p-2 text-left border border-amber-200">類別</th><th className="p-2 text-left border border-amber-200">正面</th><th className="p-2 text-left border border-amber-200">反面</th></tr></thead>
              <tbody>
                <tr><td className="p-2 border border-slate-200 font-semibold">(1) 神兩次顯現</td><td className="p-2 border border-slate-200">求智慧的所羅門蒙神賜智慧（王上 3:4-15）</td><td className="p-2 border border-slate-200">建聖殿的所羅門得神顯現與警告（王上 9:1-9）</td></tr>
                <tr><td className="p-2 border border-slate-200 font-semibold">(2) 信靠與悖逆</td><td className="p-2 border border-slate-200">所羅門王早期信靠神，帶來平安與富足（王上 2～8）</td><td className="p-2 border border-slate-200">所羅門王晚年離棄神，導致王國分裂（王上 11）</td></tr>
                <tr><td className="p-2 border border-slate-200 font-semibold">(3) 訪客浮顯王心</td><td className="p-2 border border-slate-200">所羅門王讓神得榮耀以致國家富強（王上 10:1-13）</td><td className="p-2 border border-slate-200">希西家不歸榮耀給神以致引來敵人覬覦（王下 20:12-19）</td></tr>
              </tbody>
            </table>
          </div>

          <p className="text-slate-700 leading-relaxed mt-4">邪情（physical adultery）導致邪淫（spiritual idolatry）——風流倜儻的所羅門王陷入「英雄難過美人關」的網羅，竟然悖逆向他顯現兩次的神。（p.32）</p>

          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
            <p className="text-slate-700 font-semibold">QUICK TIP：領袖是否有合神心意的品格與作為，會直接影響群體的屬靈光景。（p.33）</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-4">
          <h4 className="font-bold text-amber-700">五、從先知傳承看門徒造就（p.36-38）</h4>
          <p className="text-slate-700 leading-relaxed">本書交叉型架構的樞紐就是位居核心的以利亞和以利沙，而不是那些君王。《列王紀》啟示了信仰傳承比世人所關注的政治更迭更重要。（p.36）</p>
          <p className="text-slate-700 leading-relaxed">以利沙毫不猶豫地順服神的揀選，放下工作、辭別父母，跟隨以利亞、服事他。在門徒造就的過程中，神的揀選以及人的回應這兩者缺一不可。（p.37）</p>
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
            <p className="text-slate-700 font-semibold">QUICK TIP：老師和父母不會永遠與門徒和兒女同在，但會傾力引導他們，讓自己所倚靠的神也成為門徒和兒女同行同在的神！（p.37）</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-4">
          <h4 className="font-bold text-amber-700">北國與南國數據對比（p.24-26）</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-amber-100"><th className="p-2 border border-amber-200"></th><th className="p-2 border border-amber-200 text-center">北國以色列</th><th className="p-2 border border-amber-200 text-center">南國猶大</th></tr></thead>
              <tbody>
                <tr><td className="p-2 border border-slate-200 font-semibold">支派數</td><td className="p-2 border border-slate-200 text-center">十個</td><td className="p-2 border border-slate-200 text-center">兩個（猶大、便雅憫）</td></tr>
                <tr><td className="p-2 border border-slate-200 font-semibold">君王數</td><td className="p-2 border border-slate-200 text-center">十九個</td><td className="p-2 border border-slate-200 text-center">十九個</td></tr>
                <tr><td className="p-2 border border-slate-200 font-semibold">朝代數</td><td className="p-2 border border-slate-200 text-center">九個朝代</td><td className="p-2 border border-slate-200 text-center">大衛王朝（唯一）</td></tr>
                <tr><td className="p-2 border border-slate-200 font-semibold">年份</td><td className="p-2 border border-slate-200 text-center">主前 970-721 年（約 250 年）</td><td className="p-2 border border-slate-200 text-center">主前 970-586 年（約 384 年）</td></tr>
                <tr><td className="p-2 border border-slate-200 font-semibold">政局</td><td className="p-2 border border-slate-200 text-center">七個朝代以暴力終結</td><td className="p-2 border border-slate-200 text-center">政局相對穩定</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-5 space-y-3">
        <h3 className="text-lg font-bold text-blue-700">💬 靈修默想 / 共讀討論（p.29, 36）</h3>
        <ul className="list-disc list-inside space-y-2 text-slate-700">
          <li>從《列王紀》中，我們看見神透過先知引導君王。今日在你的生活中，你如何尋求神的引導？（p.29）</li>
          <li>當君王敬畏神，願意聽從神藉著先知對他們講道，就能改變國家命運！這對你有什麼啟發？（p.29）</li>
          <li>從本書作者使用的類比和書中人物的故事，帶給你哪些提醒呢？（p.36）</li>
        </ul>
      </div>

      <div className="bg-purple-50 rounded-xl p-5 space-y-3">
        <h3 className="text-lg font-bold text-purple-700">🚶 多走一里路：給引導者的提示（p.39-43）</h3>
        <ul className="list-disc list-inside space-y-2 text-slate-700">
          <li>聖經不只是作為我們認識真理的「材料」，更是引導我們生命經歷真理的「旅程」。（p.39）</li>
          <li>《列王紀》向我們見證：「神」才是聖經門訓的唯一焦點！在聖經歷史的現場，每一個人都只是其中的一個。（p.41）</li>
          <li>我們試著用「複數」的形式作為認識聖經真理的最小單位，而不是過去「單數」的出發點。（p.42）</li>
          <li>我們追求的，不是討論標準答案，而是神透過聖經現場光照我們生命的真實經歷。（p.43）</li>
        </ul>
      </div>
    </section>
  );
}
