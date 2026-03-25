import React from 'react';
import { BookOpen, Map, Users, Heart, GraduationCap, Lightbulb } from 'lucide-react';

export default function Chapter5() {
  return (
    <div className="max-w-4xl mx-auto pb-12">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-8 border-b-2 border-indigo-100 pb-4">
        第四章：保羅的典範與啟示
      </h1>

      <div className="space-y-8">
        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-indigo-700">
            <BookOpen className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">保羅對教義之教導</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>
              保羅蒙召作為外邦人的使徒，他深知自己所傳揚的福音是從神啟示而來。他所傳講的核心就是「基督並他釘十字架」（林前二2）。他不僅自己堅守這真理，他也要求所建立和牧養的教會要確實認定這樣的福音內容，不可偏離。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 156</span>
            </p>
            <p>
              面對當時各種異端邪說（如猶太律法主義、諾斯底主義雛形）的挑戰，保羅在書信中不厭其煩地闡明「因信稱義」、「在基督裡的新造」、「聖靈的內住與引導」等核心教義。他強調福音的普世性，打破了猶太人與外邦人之間的隔閡，指出在基督裡眾人都是合一的（加三28）。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 157-159</span>
            </p>
            <p>
              保羅的教義教導不僅停留在理論層面，更是為了指導信徒的實際生活。他將神學與倫理緊密結合，教導信徒如何將信仰落實在家庭、職場、社會關係中，活出與蒙召之恩相稱的生活（弗四1）。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 160</span>
            </p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-indigo-700">
            <Map className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">保羅的宣教模式</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>
              保羅以「外邦人使徒的身分」在各地宣教，一開始並不順利，主要是兩個挑戰：一是來自猶太同胞的強烈反對與逼迫；二是面對異教文化和哲學思想的衝擊。然而，保羅在聖靈的引導下，發展出一套極具策略性的宣教模式。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 162-163</span>
            </p>
            
            <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">1. 在一線都市建立具有「母會」性質的教會</h3>
            <p>
              保羅的宣教策略非常明確，他總是選擇羅馬帝國的主要城市（如安提阿、以弗所、哥林多、腓立比、帖撒羅尼迦）作為宣教據點。這些城市是交通樞紐、商業中心和文化匯聚之地。在這些戰略要地建立教會後，福音便能藉著商旅和信徒的往來，迅速輻射到周邊的城鎮和鄉村。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 165</span>
            </p>

            <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">2. 以宗派為主軸建立宣教團隊</h3>
            <p>
              雖然保羅時代沒有現代意義的「宗派」，但他建立的教會網絡具有高度的連結性。他透過書信、差派同工探訪、收集奉獻賙濟耶路撒冷教會等方式，將各地教會連結成一個普世性的信仰群體。這為現代教會以宗派或聯會為主軸推動宣教，提供了聖經基礎。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 166</span>
            </p>

            <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">3. 訂定中短期宣教目標</h3>
            <p>
              保羅的宣教並非漫無目的，他有清晰的異象和計畫。他曾表達要去羅馬，甚至遠達西班牙（羅十五23-24）。他會根據聖靈的引導和環境的變化，靈活調整中短期的宣教目標，確保福音事工持續向前推進。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 167</span>
            </p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-indigo-700">
            <Users className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">保羅建立的團隊</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>
              保羅的宣教事工從來就不是一個人獨力完成，他深知團隊合作的重要性。從安提阿教會差派開始，他就是以一個「團隊」的形式進行各樣事工。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 168</span>
            </p>

            <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">1. 成立「任務型」的宣教小組</h3>
            <p>
              保羅的團隊是動態且靈活的。他會根據不同的宣教任務和地區需要，組成不同的宣教小組。例如，與巴拿巴、馬可的第一次旅行；與西拉、提摩太、路加的後續旅程。這種「任務型」的編組，使得宣教團隊能發揮最大的效能。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 172</span>
            </p>

            <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">2. 納入不同專業的宣教同工</h3>
            <p>
              保羅的團隊成員背景多元，有猶太人也有外邦人，有醫生（路加）、有商人（呂底亞、亞居拉和百基拉）、有年輕的助手（提摩太、提多）。保羅善用他們各自的專業和恩賜，共同推展福音事工。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 172</span>
            </p>

            <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">3. 增強女性宣教同工的角色</h3>
            <p>
              在當時父權社會中，保羅極為看重並肯定女性同工的貢獻。他在羅馬書十六章的問安名單中，提到了多位女性同工（如非比、百基拉、馬利亞、猶尼亞等），稱她們為「與我同工的」、「多受勞苦的」。這顯示女性在保羅的宣教團隊中扮演了不可或缺的角色。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 173</span>
            </p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-indigo-700">
            <Heart className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">保羅的牧養模式</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>
              宣教者保羅帶著宣教團隊旅行各地，途中建立了一些教會，也在一些教會中設立長老（徒十四23），將牧養的責任交託給當地的領袖。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 173</span>
            </p>

            <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">1. 各宗派應強化地方堂會信徒訓練與服事</h3>
            <p>
              保羅非常看重信徒的真理造就和恩賜發掘。他教導以弗所教會，神賜下使徒、先知、傳福音的、牧師和教師，為要「成全聖徒，各盡其職，建立基督的身體」（弗四11-12）。這啟示現代教會，牧養的最終目的是裝備信徒參與服事，而非僅僅依賴少數聖職人員。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 177</span>
            </p>

            <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">2. 加強宗派和地方堂會間的互動</h3>
            <p>
              保羅透過頻繁的書信往返和同工差派，保持了各地教會與使徒團隊之間的緊密聯繫。這種互動不僅解決了地方教會的教義和牧養問題，也促進了普世教會的合一與資源共享（如為耶路撒冷教會的奉獻）。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 177</span>
            </p>

            <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">3. 強化牧者團隊的靈命塑造</h3>
            <p>
              保羅對提摩太和提多等年輕牧者的教導，充滿了對他們個人靈命和品格的期許。他勸勉提摩太要「在言語、行為、愛心、信心、清潔上，都作信徒的榜樣」（提前四12）。這提醒我們，牧者的靈命素質是教會健康發展的關鍵。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 178</span>
            </p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-indigo-700">
            <GraduationCap className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">保羅的人才培育</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>
              保羅帶領一個龐大的宣教團隊，他深知福音的傳承需要一代接一代的忠心管家。因此，他傾注大量心血在人才培育上，盼望這些同工都能為主「打那美好的仗」（提後四7）。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 179</span>
            </p>

            <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">1. 納入並成全年輕的同工</h3>
            <p>
              保羅不輕看年輕人，他大膽地將提摩太、提多等年輕同工帶在身邊，親自指導他們，並委以重任，讓他們去處理哥林多、克里特等教會的棘手問題。他教導提摩太：「你在許多見證人面前聽見我所教訓的，也要交託那忠心能教導別人的人。」（提後二2）
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 182</span>
            </p>

            <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">2. 嚴格篩選服事的團隊</h3>
            <p>
              雖然保羅樂於接納同工，但他對團隊成員的素質也有嚴格的要求。在第一次宣教旅程中，馬可中途退縮，導致保羅在第二次旅程中拒絕帶他同行，甚至為此與巴拿巴起了爭執（徒十五37-39）。這顯示保羅對宣教任務的嚴肅態度和對同工委身度的要求。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 183</span>
            </p>

            <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">3. 貫徹服事團隊的紀律</h3>
            <p>
              保羅要求同工必須具備受苦的心志，如同精兵、運動員和農夫（提後二3-6）。他以身作則，展現了極高的自律和對使命的專注。他對教會領袖（監督、執事）的資格也有明確的道德和屬靈標準（提前三1-13），確保教會的領導團隊聖潔無瑕。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 184</span>
            </p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-indigo-700">
            <Lightbulb className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">延伸探討：現代教會的借鏡</h2>
          </div>
          <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100 text-slate-700">
            <div className="mb-4 text-sm font-medium text-indigo-700 bg-indigo-100/50 p-3 rounded border border-indigo-200">
              【延伸探討來源：參照陳濟民《成為宣教的教會：從新約看宣教神學與實踐》之觀點】
            </div>
            <h3 className="font-bold text-indigo-900 mb-4 text-lg">策略、團隊與傳承的深層神學意涵</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-indigo-800 mb-2">一、 都市宣教的戰略眼光與國度視野</h4>
                <p className="mb-2">
                  陳濟民在其著作中深刻指出，新約教會的本質就是宣教，而保羅的宣教軌跡並非隨機的漫遊，而是具備高度戰略意義的國度擴張。保羅主攻羅馬帝國一線都市（如以弗所、哥林多、帖撒羅尼迦）的策略，不僅是因為這些地方人口密集，更是因為它們是文化、經濟與交通的樞紐。當福音在這些中心城市扎根並建立起具有「母會」性質的信仰群體後，便能透過龐大的商業網絡與人際流動，自然地將影響力輻射至周邊的鄉鎮。
                </p>
                <p>
                  對現代教會而言，這帶來了極大的啟發。在資源有限的情況下，教會的植堂與宣教策略應當具備宏觀的國度視野。我們需要評估：哪裡是現代社會的「交通樞紐」與「文化中心」？這不僅是指地理上的大都會，也包含了網路社群、校園、職場等新興的「文化匯聚地」。選擇具有戰略意義的據點建立教會，能使福音的影響力產生乘數效應，而非僅僅停留在單點的維持。
                </p>
              </div>

              <div>
                <h4 className="font-bold text-indigo-800 mb-2">二、 打破「單打獨鬥」的迷思：多元互補的團隊事奉</h4>
                <p className="mb-2">
                  保羅的成功從來不是建立在個人的英雄主義上，而是在於他建立了一個多元、互補且目標一致的宣教團隊。陳濟民強調，新約中的事奉模式是「身體」的事奉，每個肢體都有其不可或缺的功用。保羅的團隊中包含了不同種族、階級與性別的同工，如猶太人與外邦人、醫生路加、商人百基拉與亞居拉，以及眾多在當時社會中地位不高的女性同工。
                </p>
                <p>
                  現代教會在牧養與宣教上，時常陷入過度依賴單一明星牧者或少數全職傳道人的危機，這不僅容易導致牧者耗竭，也扼殺了平信徒的恩賜發展。保羅的團隊模式提醒我們，真正的教會建造必須落實「成全聖徒，各盡其職」（弗四12）。教會領袖的責任是發掘、成全並整合會眾中不同的專業與恩賜，建立起如同保羅般靈活且具備高度戰鬥力的「任務型小組」，讓每一位信徒都能在宣教的大使命中找到自己的位置。
                </p>
              </div>

              <div>
                <h4 className="font-bold text-indigo-800 mb-2">三、 刻意的人才培育與屬靈傳承</h4>
                <p className="mb-2">
                  保羅對提摩太、提多等年輕同工的栽培，展現了初代教會對「傳承」的極度重視。這種「師徒制」的培育不僅僅是知識與事工技巧的傳授，更是生命品格的塑造與屬靈權柄的交接。保羅不僅將年輕同工帶在身邊言傳身教，更在關鍵時刻大膽放手，委派他們去處理哥林多、克里特等教會的棘手問題，並在書信中給予持續的指導與屬靈遮蓋。
                </p>
                <p>
                  今日的教會在推動各樣龐大繁雜的事工時，往往容易忽略了最核心的「造就人」的工作。我們是否願意投資大量的時間與心力，在年輕一代領袖的培育上？我們是否具備保羅那樣的胸襟，願意接納年輕人的不成熟，給予他們犯錯與成長的空間，並最終將福音的棒子安穩地交託在他們手中？這不僅關乎一個地方堂會的存續，更關乎整個神國度基業的長青。
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
