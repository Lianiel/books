import React from 'react';
import { BookOpen, Users, Gift, Heart, Shield, Target, Lightbulb, MessageCircle, HelpCircle, CheckCircle } from 'lucide-react';

export default function Book10Ch2() {
  return (
    <div className="max-w-4xl mx-auto pb-12">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-8 border-b-2 border-amber-100 pb-4">
        第二章　代禱者
      </h1>

      <div className="space-y-8">
        {/* 開場引言 */}
        <section className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl shadow-sm border-l-4 border-amber-600">
          <p className="text-lg text-slate-700 italic">
            「有代禱恩賜的人不多，然而代禱卻是每一位忠心的基督徒都應期許自己扮演的角色。」
          </p>
        </section>
        {/* Section 1: 重要的少數者 */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-amber-700">
            <Users className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">重要的少數者：派瑞特原則在代禱事工的應用</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>
              義大利的經濟學者派瑞特(Vilfredo Pareto)在上世紀末葉有一項驚人的發現。他發現無論一個國家所使用的稅務體制如何，幾乎都是百分之廿的人控制著百分之八十的資金。從那時候開始，就有人嚐試將「派瑞特原則」(Pareto Principle)應用在各方面，例如：百分之廿的保險推銷員賣了百分之八十的保險；一本書的百分之廿精華提供您書中百分之八十的相關內容；百分之廿的會友奉獻了教會經濟預算中的百分之八十。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 33-34</span>
            </p>
            <p>
              這廿比八十定律亦可運用在關於地方性教會的代禱者上。然而我的研究卻顯示，少數的重要代禱者之比例較像是<strong className="text-amber-700">百分之五而非百分之廿</strong>。換句話說，平均百分之五的會友提供了教會內百分之八十有意義的代禱。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 34</span>
            </p>
            <p>
              我深知像這樣講法可能會因為某種理由而傷到一些人的感情。有的人會說，那不應是真的，應該有更多基督徒投入禱告才對。有些人則會說，那百分之九十五的人所作百分之廿的代禱絕不是「無關緊要之事」。對於這些說法我只能表示同意。
            </p>
            <p>
              雖然上面的反駁也許是對的，但我猜想你的教會大概和我的教會一樣，當中只有相當少數的會友自認或被其他人視為傑出的禱告者。
            </p>
            <div className="bg-amber-50 p-4 rounded-lg mt-4 border border-amber-200">
              <p className="font-semibold text-amber-900 mb-2">真實見證：清晨禱告的勇士</p>
              <p>
                已過世的魏蒙·羅傑(Waymon Rodgers)曾在肯塔基州牧養一間大教會。有位退休弟兄來找他說：「我要教會的鑰匙，因為我想來教會禱告。」羅傑告訴他教會每天早上八點開門，誰知該弟兄卻回答說：「我從前都是清晨四點半就起床出去工作，因為現在退休了，所以想利用那一段時間來禁食禱告。」他拿到了鑰匙，<strong className="text-amber-700">每天清晨四點就到教會去禱告直到七點</strong>。
                <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 34-35</span>
              </p>
            </div>
            <p className="mt-4">
              每位牧師都知道若對會眾說：「他能做到的，任何人也能做到。」並想要強迫每位會友每日清晨也從四點禱告到七點，這將會造成大錯誤。對教會的禱告服事來說，也許視這位弟兄為重要的少數者之一可能會更實際一些。
            </p>
            <p>
              誰是這些重要的少數者？他們是有代禱恩賜的人。
            </p>
          </div>
        </section>

        {/* 延伸探討 1 */}
        <section className="bg-amber-50 p-6 rounded-xl shadow-sm border border-amber-200">
          <div className="flex items-center mb-4 text-amber-700">
            <Lightbulb className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">【延伸探討：為何教會需要「重要的少數」代禱者？】</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>
              派瑞特原則揭示的不僅是一個統計現象，更是上帝在教會中設立「功能性差異」的智慧。正如保羅在哥林多前書十二章所教導的，身體上的各肢體有不同的功能，「眼不能對手說，我用不著你」。在禱告事工上，上帝特意呼召並恩賜一小群人成為教會的「禱告引擎」，他們不是要取代其他信徒的禱告責任，而是要<strong>成為教會禱告生活的「核心動力」與「屬靈遮蓋」</strong>。
            </p>
            <blockquote className="border-l-4 border-amber-400 pl-4 italic text-slate-600 my-4">
              「就像一個國家不能要求每個公民都成為總統或將軍，但需要在關鍵位置上有能勝任的領導者；教會也不能期待每位信徒都成為代禱勇士，但絕對需要那『重要的少數』在禱告的前線為全體守望。」
            </blockquote>
            <p>
              這個原則也提醒教會領袖：<strong className="text-amber-700">不要用「人人皆祭司」的理想來否定「恩賜差異」的現實</strong>。當我們試圖強迫所有信徒都達到同樣的禱告標準時（例如每天禱告兩小時），往往會造成兩種結果：一是讓大多數人陷入虛假的罪疚感，二是讓那些真正有代禱恩賜的人無法被辨識與裝備。正確的做法是：鼓勵所有信徒履行禱告的「角色」，同時積極辨識、肯定並釋放那些有代禱「恩賜」的人進入他們的呼召。
            </p>
            <p>
              更深一層來說，這個原則挑戰了現代教會中普遍存在的「民主主義」與「平均主義」思維。在追求「人人平等」的過程中，我們常常忽略了上帝刻意設立的「功能性階層」。這不是指屬靈地位的高低（在基督裡我們都是上帝的兒女），而是指事奉功能的差異。就像一支軍隊中，將軍與士兵的地位平等（都是軍人），但功能不同（一個負責策略，一個執行戰鬥）。教會也是如此：所有信徒地位平等，但在禱告事工上，上帝呼召某些人成為「禱告將軍」，承擔更重的守望責任。
            </p>
            <p className="text-sm text-amber-700 font-medium">
              📚 延伸內容來源：參考華理克《標竿人生》關於恩賜導向事奉的教導，以及彼得·魏格納《你的屬靈恩賜能助你的教會增長》對恩賜與角色之區分。
            </p>
          </div>
        </section>

        {/* 反思問題 1 */}
        <section className="bg-indigo-50 p-6 rounded-xl shadow-sm border border-indigo-200">
          <div className="flex items-center mb-4 text-indigo-700">
            <HelpCircle className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">【反思問題】</h2>
          </div>
          <ol className="space-y-3 text-slate-700 list-decimal list-inside">
            <li>在你的教會中，你能辨識出那「重要的少數」代禱者嗎？他們是否得到應有的肯定與支持？</li>
            <li>你是否曾因為自己無法像某些代禱勇士那樣長時間禱告而感到罪疚？這種罪疚感是來自聖靈的提醒，還是來自對恩賜差異的誤解？</li>
            <li>如果你是教會領袖，你的教會是否有具體的機制來辨識、培訓並釋放有代禱恩賜的人？還是讓他們隱藏在會眾中默默服事？</li>
            <li>你認為「百分之五的人提供百分之八十的代禱」這個現象是教會的軟弱（代表大多數人不禱告），還是上帝智慧的設計（恩賜的分工）？</li>
            <li>當你看見那位每天清晨四點就到教會禱告的退休弟兄，你的第一反應是「我也應該這樣做」（可能帶來罪疚感），還是「感謝神在我們當中興起這樣的守望者」（帶來感恩）？</li>
            <li>你的教會是否有意無意地「消費」那些代禱者（不斷要求他們代禱卻不關心他們的需要），還是真正珍惜並「保養顧惜」他們？</li>
            <li>如果你發現自己可能是那「百分之五」中的一員，你是否願意勇敢地承認這恩賜，而不是陷入虛假的謙卑？你擔心被貼上什麼標籤嗎？</li>
          </ol>
        </section>

        {/* 具體實踐 1 */}
        <section className="bg-green-50 p-6 rounded-xl shadow-sm border border-green-200">
          <div className="flex items-center mb-4 text-green-700">
            <CheckCircle className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">【具體實踐方向】</h2>
          </div>
          <div className="space-y-4 text-slate-700">
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-800 mb-2">1. 建立「代禱者名冊」</h3>
              <p>教會領袖可以主動邀請會友填寫屬靈恩賜問卷，或在禱告會中觀察那些特別投入、持久且有果效的禱告者，建立一份代禱者名冊。這不是要製造階級，而是要有系統地關懷與裝備他們。可以包含：姓名、聯絡方式、代禱負擔領域、可服事時段等基本資訊。</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-800 mb-2">2. 設立「代禱團隊」並給予明確職分</h3>
              <p>不要讓代禱者只是散落在各處的「隱藏戰士」，而要正式設立「代禱團隊」，定期聚集（建議每週或雙週）、彼此代禱、分享負擔。可以效法某些教會設立「禱告牧師」或「代禱同工」的職分，給予明確的身分認同與事奉範圍。</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-800 mb-2">3. 提供「代禱資源」而非只有「代禱事項」</h3>
              <p>代禱者不僅需要禱告事項清單，更需要深度的屬靈餵養、代禱神學的裝備、以及屬靈爭戰的訓練。教會可以：(1)定期舉辦代禱者退修會 (2)提供相關書籍（如本書、《得著仇敵的城門》）(3)邀請有經驗的代禱者分享見證與心得 (4)提供代禱指引與教材。</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-800 mb-2">4. 為代禱者「代禱」並實際關懷</h3>
              <p>那些站在屬靈前線的代禱者，往往是仇敵攻擊的首要目標。牧者與同工要特別為他們禱告，關心他們的身心靈健康、家庭狀況與屬靈爭戰狀態。可以：(1)定期一對一關懷會談 (2)為代禱者組織「代禱者的代禱團」 (3)提供屬靈輔導或諮商資源。不要讓他們成為「孤軍奮戰」的烈士。</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-800 mb-2">5. 教導全教會「尊重恩賜差異」</h3>
              <p>透過講台信息、主日學課程、小組教材教導全教會明白「恩賜與角色」的區別，幫助會友脫離錯誤的罪疚感，同時學習欣賞並支持那些有代禱恩賜的肢體，而不是嫉妒或輕看。可以在會友大會或特別聚會中公開分享代禱恩賜的教導。</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-800 mb-2">6. 創造「禱告空間」與「禱告文化」</h3>
              <p>為代禱者預備實體的禱告空間（如專屬禱告室、禱告角落），並在教會行事曆中保留禱告會、守望禱告、晨更禱告等固定時段。讓「禱告」不再是口號，而是教會生活的真實核心。可以設立24小時禱告鏈或守望禱告時段表。</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-800 mb-2">7. 見證分享與公開感謝</h3>
              <p>定期在主日崇拜或小組中分享代禱蒙應允的見證，並公開感謝代禱者的擺上。這不是高舉人，而是讓全教會看見「禱告真的有用」，並激勵更多人投入禱告事奉。可以設立「代禱見證時間」或「禱告蒙應允牆」。</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-800 mb-2">8. 建立「代禱與應允」記錄系統</h3>
              <p>鼓勵代禱者記錄他們的代禱事項與蒙應允的經歷，可以使用禱告日誌、手機APP或教會統一的記錄表。定期回顧這些記錄，不僅能激勵代禱者的信心，也能成為教會寶貴的屬靈資產與見證集。</p>
            </div>
          </div>
        </section>

        {/* Section 2: 了解屬靈的恩賜 */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-amber-700">
            <Gift className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">了解屬靈的恩賜：基督身體的奧秘</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>
              為了要了解代禱的恩賜，我們必須回到聖經對屬靈恩賜的教導上。如保羅所說：「弟兄們，論到屬靈的恩賜，我不願意你們不明白。」(林前十二1)
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 36</span>
            </p>
            <p>
              聖經說教會是一個身子，是基督身體(參弗一22～23)。基督身體在許多方面的運作就像是人類的身體一樣。保羅說：「正如我們一個身子上有好些肢體，肢體也不都是一樣的用處。我們這許多人在基督裏成為一身，互相聯絡作肢體，也是如此。」(羅十二4～5)
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 36</span>
            </p>
            <p>
              相信保羅的提醒是我們認識屬靈恩賜為何及它們運作的重要關鍵。若我們都是身子上的肢體，我們如何知道自己是屬哪一部分呢？我們從何得知自己是鼻子、腳趾、肝或眼瞼呢？我們乃是藉著發掘自己所擁有的屬靈恩賜而得知的。「各人要照所得的恩賜彼此服事，作上帝百般恩賜的好管家。」(彼前四10)
            </p>
            <p>
              上帝已給予每位信徒一項或多項的屬靈恩賜，沒有一個人是被遺漏的。我們有一些學校專為天才兒童們提供特別的課程，但是在教會裏，所有的事工規畫都是專為屬上帝的天才兒童們安排的，因為我們都擁有上帝所賦予的才能恩賜。然而我們並不都有同樣的恩賜。有的是耳朵，有的是眼睛，耳不能說「我不是眼，所以不屬乎身子」(林前十二16)。我們愈知道自己的恩賜就愈能在教會裏服事上帝。
            </p>
            <div className="bg-amber-50 p-4 rounded-lg mt-4 border border-amber-200">
              <h3 className="font-bold text-amber-900 mb-2">上帝揀選恩賜</h3>
              <p>
                基督的身體太複雜了，以致上帝聰明地不讓我們選擇自己的恩賜。若祂允許了，大多數人可能都會決定當眼睛。畢竟若可以當眼睛，誰會選擇當肝臟呢？但若真是如此，身體缺少眼睛仍可生存，沒有了肝則無法存活。「身上肢體人以為軟弱的，更是不可少的。」(林前十二22)
              </p>
              <p className="mt-2">
                只有上帝夠清楚認識我們，可以決定我們應是身體的什麼部位。聖靈「隨己意分給各人」(林前十二11)。上帝已隨祂的旨意設立好身子的各肢體(參林前十二11)，我們所得到的恩賜完全是本於上帝的心意並因祂的恩典而有的。
                <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 37</span>
              </p>
              <p className="mt-2">
                聖經中最常用來描述屬靈恩賜的字是「<strong className="text-amber-700">Charisma</strong>」，這其中包含了「恩典」的希臘文Charis在內。恩賜不是我們自己憑努力取得的，也不是一種工作的報酬，乃是上帝恩惠且明智的贈予。
              </p>
            </div>
            <p>
              那麼我們各人的責任是什麼呢？信徒最先要做的應該是去發掘上帝所賜給我們的恩賜，然後如我們所看見的，我們要成為上帝的「好管家」(參彼前四10)。藉著把我們所擁有的恩賜發揮到極致並為上帝的榮耀而在服事中使用它們，我們就能成為好管家。
            </p>
            <p>
              <strong>恩賜知多少？</strong>解剖學的教科書可以告訴我們人體有哪些部分。幸運的是，基督的身體並沒有那麼複雜。究竟有多少屬靈的恩賜呢？大家眾說紛紜。作者個人所做的研究總結在《你的屬靈恩賜能助你的教會增長》一書中，建議是有<strong className="text-amber-700">廿七種恩賜</strong>。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 38</span>
            </p>
            <p>
              在新約聖經裏，有三處主要的經文提到屬靈恩賜，那分別是<strong>羅馬書十二章、哥林多前書十二章及以弗所書四章</strong>。其中沒有一處是完全的，並且它們彼此又有許多重疊。綜合此三處經文計有廿項恩賜。另有幾項恩賜出現在此三處經文之外，精確地說是五項。這樣，在新約裏我們總共找出了廿五項恩賜。作者建議另增添兩種恩賜：<strong>趕鬼(釋放)及代禱</strong>。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 38-40</span>
            </p>
          </div>
        </section>

        {/* 延伸探討 2 */}
        <section className="bg-amber-50 p-6 rounded-xl shadow-sm border border-amber-200">
          <div className="flex items-center mb-4 text-amber-700">
            <Lightbulb className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">【延伸探討：恩賜神學的核心真理】</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>
              屬靈恩賜的教義是改革宗神學中「普遍祭司職分」（Priesthood of All Believers）的實踐面向。宗教改革時期，馬丁路德與加爾文極力強調每位信徒都是祭司，都能直接來到上帝面前，無需透過神職人員的中介。然而，這個真理常被誤解為「每個人都一樣」或「每個人都能做同樣的事」。
            </p>
            <p>
              事實上，「普遍祭司職分」與「恩賜多樣性」並不衝突，反而是一體兩面：<strong className="text-amber-700">每位信徒都同等寶貴，但功能各異</strong>。正如人體的每個細胞都有相同的DNA，但分化出不同的器官；教會的每位肢體都同樣是上帝的兒女，卻被賜予不同的恩賜來建造基督的身體。
            </p>
            <blockquote className="border-l-4 border-amber-400 pl-4 italic text-slate-600 my-4">
              「恩賜神學提醒我們：在上帝的國度中，沒有『次等公民』，只有『不同功能』。腳不會因為不是手而自卑，手也不會因為不是眼而驕傲。每個肢體都在其位，各盡其職，才能讓身體健康成長。」
            </blockquote>
            <p>
              更深一層來說，屬靈恩賜的教導挑戰了兩種極端：<strong>一是「屬靈菁英主義」</strong>（認為只有少數「超級基督徒」才能事奉神），<strong>二是「屬靈平均主義」</strong>（認為每個人都應該在各方面表現一樣）。前者造成大多數信徒的被動與自卑，後者則導致恩賜被埋沒、事奉效率低落。聖經的平衡觀點是：每個人都有恩賜（沒有例外），但恩賜各不相同（沒有重複）。
            </p>
            <p>
              從歷史角度來看，教會歷史上不同時期對屬靈恩賜的強調程度各異。初代教會（使徒行傳時期）恩賜運作活躍；中世紀教會逐漸制度化，恩賜教導式微；宗教改革恢復了「信徒皆祭司」的真理，但對恩賜的具體運作討論不多；二十世紀五旬節運動與靈恩運動重新強調聖靈的恩賜，但有時過度強調某些恩賜（如說方言）而忽略其他；當代教會增長運動則從實用角度重新發現恩賜導向事奉的重要性。
            </p>
            <p>
              因此，教會領袖最重要的任務之一，就是<strong className="text-amber-700">幫助每位信徒發現並發揮他們獨特的恩賜</strong>，而不是試圖把所有人塑造成同一個模子。這也是為何代禱恩賜的教導如此重要——它釋放了那些沒有代禱恩賜的人脫離虛假的罪疚，同時激勵有代禱恩賜的人勇敢地站出來承擔他們的呼召。
            </p>
            <p className="text-sm text-amber-700 font-medium">
              📚 延伸內容來源：參考Gordon Fee《上帝賦能的子民：聖靈在保羅神學中的角色》，以及Wayne Grudem《系統神學》關於屬靈恩賜的章節。
            </p>
          </div>
        </section>

        {/* 反思問題 2 */}
        <section className="bg-indigo-50 p-6 rounded-xl shadow-sm border border-indigo-200">
          <div className="flex items-center mb-4 text-indigo-700">
            <HelpCircle className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">【反思問題】</h2>
          </div>
          <ol className="space-y-3 text-slate-700 list-decimal list-inside">
            <li>你是否清楚知道上帝賜給你的屬靈恩賜是什麼？如果不清楚，你願意認真尋求並發掘嗎？你上次為此禱告或測驗是什麼時候？</li>
            <li>在你的教會中，是否存在「屬靈菁英主義」（只有少數人能事奉）或「屬靈平均主義」（每個人都要做同樣的事）的問題？這對教會健康造成什麼影響？</li>
            <li>你是否曾因為缺乏某種恩賜（如講道、帶敬拜、傳福音）而覺得自己不夠屬靈？這種想法符合聖經的恩賜神學嗎？</li>
            <li>反過來說，你是否曾因為擁有某種恩賜而驕傲，或輕看那些恩賜不同的肢體？你如何避免這種試探？</li>
            <li>你的教會有沒有系統性的機制來幫助會友發現並發展他們的屬靈恩賜？還是只是「誰願意做就做」的隨機模式？如果沒有，你願意主動提出建議嗎？</li>
            <li>當你看見某人在某方面服事特別有恩膏（例如禱告、探訪、教導），你是羨慕嫉妒、論斷批評，還是感謝神並真誠鼓勵他們？</li>
            <li>你能否接受「上帝給我的恩賜組合是獨一無二的」這個事實？還是仍然想要擁有別人的恩賜？</li>
          </ol>
        </section>

        {/* 具體實踐 2 */}
        <section className="bg-green-50 p-6 rounded-xl shadow-sm border border-green-200">
          <div className="flex items-center mb-4 text-green-700">
            <CheckCircle className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">【具體實踐方向】</h2>
          </div>
          <div className="space-y-4 text-slate-700">
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-800 mb-2">1. 進行「屬靈恩賜測驗」</h3>
              <p>教會可以引入成熟的屬靈恩賜測驗工具（如彼得·魏格納的問卷、Bruce Bugbee的SHAPE評估），幫助會友初步辨識自己可能的恩賜。但測驗只是起點，更重要的是實際的「恩賜實驗」與印證。建議每年至少舉辦一次恩賜發掘課程或工作坊。</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-800 mb-2">2. 建立「恩賜導向」的事奉配搭系統</h3>
              <p>改變傳統的「缺什麼就找人補」的事奉模式，轉向「按恩賜配搭服事」。例如：不要勉強沒有教導恩賜的人去教主日學，而是讓有教導恩賜的人去教，沒有的人可以用其他恩賜（如接待、幫助、憐憫）來支持。建立事奉配搭表時，優先考慮恩賜匹配度。</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-800 mb-2">3. 開設「屬靈恩賜」主題課程</h3>
              <p>至少每年一次，在主日學或裝備課程中深入教導屬靈恩賜的神學與實踐（建議至少6-8週的系列課程），幫助會友建立正確的恩賜觀，並提供發掘恩賜的實用指引。課程內容應包含：恩賜神學基礎、27種恩賜介紹、恩賜測驗、恩賜實驗指引等。</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-800 mb-2">4. 創造「恩賜實驗」的安全環境</h3>
              <p>鼓勵信徒在低風險的環境中嘗試不同的服事，觀察自己在哪方面特別有果效、有喜樂、有他人的肯定（恩賜確認的三個指標）。不要一開始就給重責大任，而是漸進式的裝備與釋放。可以設立「見習期」或「試用期」制度。</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-800 mb-2">5. 建立「恩賜確認」的機制</h3>
              <p>當某人在某方面服事一段時間後（建議至少3-6個月），由成熟的屬靈長者或同工團隊給予確認與按立（可以是正式或非正式的），幫助他們建立清晰的身分認同與服事異象。確認過程應包括：自我評估、同工觀察、服事果效檢視、屬靈長者印證等步驟。</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-800 mb-2">6. 設立「恩賜教練」(Gift Coach)制度</h3>
              <p>培訓一些對恩賜神學有深入理解的同工成為「恩賜教練」，專門協助會友發掘並發展恩賜。他們可以提供一對一諮詢、恩賜測驗解讀、事奉配搭建議等服務。這比讓會友自己摸索更有效率。</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-800 mb-2">7. 慶祝「恩賜多樣性」</h3>
              <p>定期在主日崇拜或特別聚會中，展示教會中不同恩賜的肢體如何配搭服事（例如：邀請有不同恩賜的人分享見證），讓全教會看見「我們需要彼此」的美好圖畫。避免只高舉某些「明星恩賜」（如講道、敬拜帶領），而忽略「隱藏恩賜」（如代禱、憐憫、幫助）。</p>
            </div>
          </div>
        </section>

        {/* Section 3: 恩賜與角色 */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-amber-700">
            <Target className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">恩賜與角色：關鍵的區分</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>
              每一種屬靈恩賜就好像人體的各部位，它本身只是少數。身體的大部分不是手指，也不都是肺。在教會裏也一樣，大部分人不是牧師、教師或醫治者。同理，我們也可以如此看待其他各項恩賜。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 41</span>
            </p>
            <p>
              雖然相形之下每一項屬靈恩賜只有少數基督徒能擁有，但沒有例外的，所有基督徒也都有與大部分恩賜相平行的「<strong className="text-amber-700">一種角色</strong>」。例如：
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>不是全部的基督徒都有傳福音的恩賜，但卻都有為基督作見證、領人歸主的角色</li>
              <li>不是全部基督徒都有施捨的恩賜，但都需扮演好什一奉獻的角色</li>
              <li>不是都有醫治的恩賜，但都有按手為病人禱告的角色</li>
              <li>不是都有憐憫的恩賜，但都有關懷軟弱肢體的角色</li>
              <li>不是都有教導的恩賜，但都有在生活中活出真理榜樣的角色</li>
            </ul>
            <p>
              其間的區別非常重要。我們在教會裏都因著上帝所賜的多重角色而做許許多多的事，但通常其中只有極少數具較高且較持續的能力與果效，因為<strong className="text-amber-700">聖靈透過我們的屬靈恩賜而賜給我們那方面的特別膏抹</strong>。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 41-42</span>
            </p>
            <div className="bg-amber-50 p-4 rounded-lg mt-4 border border-amber-200">
              <h3 className="font-bold text-amber-900 mb-2">代禱是基督徒的角色</h3>
              <p>
                如前所提，代禱只是禱告中的一種，但卻是非常重要的，甚至聖經描述耶穌自己也是個代禱者。耶穌基督在上帝的右邊「替我們祈求」(羅八34)，同樣地，聖靈也「照著上帝的旨意替聖徒祈求」(羅八27)。當然天父並不是代禱者，因為祂是代禱的對象。
              </p>
              <p className="mt-2">
                在人的層面上，當保羅對羅馬信徒說「在禱告之間不住地提到你們」(羅一9另譯)時，他乃視自己為代禱者。保羅對提摩太說：「我勸你第一要為萬人懇求、禱告、代求、祝謝。」(提前二1)雅各則說：「所以你們要彼此認罪，互相代求，使你們可以得醫治。」(雅五16)
              </p>
              <p className="mt-2 text-amber-800">
                在說明代禱為一種屬靈恩賜的觀念之前，我想要澄清的是，<strong>代禱乃每一位忠心信徒被期許所要扮演的角色</strong>。事實上照常理說來，我不知道有任何真正基督徒弟兄或姐妹是不為其他人禱告的。
                <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 42</span>
              </p>
              <p className="mt-2">
                我們每一個人不僅都要為別人代求，而且無疑地大部分人都應該做得更多。坦白地說，我要承認雖然我確實有為他人代求，但還不夠。我應該更多為我的配偶、孩子、親戚、服事的同工、牧師、朋友(不論得救與否)代求才是。
              </p>
        {/* 延伸探討：恩賜投射 */}
        <section className="bg-amber-50 p-6 rounded-xl shadow-sm border border-amber-200">
          <div className="flex items-center mb-4 text-amber-700">
            <Lightbulb className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">【延伸探討：「恩賜投射」的陷阱】</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>
              在第四章（本書後續內容）中，作者深入探討了一個極其重要卻常被忽略的概念：「<strong className="text-amber-700">恩賜投射</strong>」（Gift Projection）。這是指那些在某方面特別有恩賜的人，不自覺地認為其他人也應該（或能夠）達到同樣的標準，結果把自己的恩賜「投射」到別人身上，造成不必要的罪疚感與挫折感。
            </p>
            <blockquote className="border-l-4 border-amber-400 pl-4 italic text-slate-600 my-4">
              「許多有代禱恩賜的人會說：『我只是一個普通的基督徒，就像你一樣。上帝透過我所做的，祂也想透過你來做。若你真正渴慕的話，你也可以像我一樣每天禱告三小時。』這種看似謙卑與激勵的話語，實際上是一種恩賜投射，會給那些沒有代禱恩賜的人帶來巨大的壓力與虛假的罪疚感。」
            </blockquote>
            <p>
              恩賜投射的問題在於，它混淆了「恩賜」與「角色」的界線。沒錯，每個基督徒都有禱告的角色（這是責任），但不是每個人都有代禱的恩賜（這是特殊呼召）。當我們不做這個區分時，會產生兩種負面結果：
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>錯誤的罪疚感</strong>：那些沒有代禱恩賜的人會覺得自己不夠屬靈、不夠愛主，因為他們無法像代禱者那樣長時間禱告。這種罪疚感不是來自聖靈的責備（針對該盡的責任），而是來自錯誤的比較（把恩賜當作責任）。</li>
              <li><strong>恩賜的埋沒</strong>：有代禱恩賜的人可能因為「每個人都應該這樣」的觀念，而不敢承認自己有特殊的恩賜與呼召。他們會說「我只是做每個基督徒都應該做的事」，結果他們的恩賜被埋沒，教會失去了寶貴的屬靈資產。</li>
            </ol>
            <p>
              <strong>恩賜投射的實際案例：</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>傳福音恩賜</strong>：有傳福音恩賜的人可能會說：「只要你真心愛靈魂，你也可以像我一樣每週帶3-5人信主。」結果那些沒有傳福音恩賜的人陷入深深的自責，覺得自己「不夠愛靈魂」。</li>
              <li><strong>施捨恩賜</strong>：有施捨恩賜的人可能會說：「若你真信靠神，你也可以像我一樣奉獻收入的50%。」結果其他人覺得自己「信心不夠」。</li>
              <li><strong>憐憫恩賜</strong>：有憐憫恩賜的人可能會批評教會「太冷漠」，因為不是每個人都像他一樣對受苦者有強烈的情感回應。</li>
            </ul>
            <p>
              正確的態度應該是：<strong className="text-amber-700">我們應該鼓勵所有信徒忠心履行他們的「角色」（如每天至少20-30分鐘的禱告），同時尊重並釋放那些有特殊「恩賜」的人進入他們的呼召</strong>（如每天2-5小時的代禱）。這不是降低標準，而是認清現實：上帝從未要求眼睛變成耳朵，或要求腳變成手。每個肢體在其位，各盡其職，才是最榮耀神的事奉模式。
            </p>
            <p>
              <strong>如何避免恩賜投射？</strong>
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>承認自己的恩賜是「特殊呼召」，不是「普遍責任」。</li>
              <li>在分享見證時，加上「這是上帝給我的恩賜，不是每個人都需要這樣做」的說明。</li>
              <li>聆聽並尊重那些恩賜不同的肢體，不要用自己的標準來衡量他們。</li>
              <li>記住：保羅說「各人看別人比自己強」（腓2:3），而不是「各人都要跟我一樣強」。</li>
            </ol>
            <p className="text-sm text-amber-700 font-medium">
              📚 延伸內容來源：參考彼得·魏格納《你的屬靈恩賜能助你的教會增長》第四章關於恩賜投射的完整論述。
            </p>
          </div>
        </section>

        {/* 反思問題：恩賜投射 */}
        <section className="bg-indigo-50 p-6 rounded-xl shadow-sm border border-indigo-200">
          <div className="flex items-center mb-4 text-indigo-700">
            <HelpCircle className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">【反思問題：關於恩賜與角色的區分】</h2>
          </div>
          <ol className="space-y-3 text-slate-700 list-decimal list-inside">
            <li>你是否曾被某位「屬靈偉人」的見證（如每天禱告三小時、讀經五章、奉獻收入50%）激勵，結果卻發現自己根本做不到，最後陷入深深的挫折與自責？回顧那段經歷，你現在認為問題出在哪裡？</li>
            <li>如果你是教會領袖或小組長，你在分享自己的屬靈操練時，是否不自覺地在進行「恩賜投射」，讓組員覺得「我也必須做到這樣才算屬靈」？你能否舉出具體例子？</li>
            <li>你能否清楚區分哪些是「每個信徒都應盡的角色」，哪些是「特定恩賜者的呼召」？請列舉3-5個例子並說明你的判斷依據。</li>
            <li>反過來問：你是否因為某方面做不到別人的標準，就輕易放棄了你應盡的「角色」？（例如：我沒有代禱恩賜，所以我乾脆不禱告了；我沒有傳福音恩賜，所以我從不向人作見證）</li>
            <li>你的教會文化是鼓勵「恩賜多樣性」（每個人找到自己的恩賜並發揮），還是無形中要求「一致性」（大家都要做得一樣、達到同樣標準）？這對教會健康造成什麼影響？</li>
            <li>當你看見某人在某方面特別突出（如禱告、服事、奉獻），你的第一反應是「我也應該這樣」（可能是恩賜投射的受害者），還是「感謝神賜他這恩賜，我應該在我的恩賜上忠心」？</li>
            <li>如果你發現自己曾經對他人進行恩賜投射（無意中造成他們的罪疚感），你願意向他們道歉並澄清嗎？</li>
          </ol>
        </section>

        {/* 具體實踐：避免恩賜投射 */}
        <section className="bg-green-50 p-6 rounded-xl shadow-sm border border-green-200">
          <div className="flex items-center mb-4 text-green-700">
            <CheckCircle className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">【具體實踐方向：避免恩賜投射】</h2>
          </div>
          <div className="space-y-4 text-slate-700">
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-800 mb-2">1. 建立「角色清單」與「恩賜清單」</h3>
              <p>教會領袖可以清楚列出哪些是「每位信徒都應盡的角色」（如每天至少20-30分鐘禱告、每週至少一次讀經、什一奉獻、定期聚會、適時作見證），哪些是「特定恩賜者的呼召」（如每天2-5小時代禱、每週帶人信主、奉獻收入50%以上、全時間教導）。這能幫助會友建立清晰的認知與合理的期待。</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-800 mb-2">2. 在見證分享時加上「恩賜說明」</h3>
              <p>當有人分享自己每天禱告兩小時的經歷時，可以加上一句：「我知道上帝給我代禱的恩賜，所以我特別喜歡長時間禱告。但不是每個人都需要這樣做，重要的是你找到上帝給你的恩賜，並在那方面忠心。」這能避免不必要的恩賜投射與罪疚感。</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-800 mb-2">3. 教導「最低標準」與「恩賜呼召」的差異</h3>
              <p>例如在禱告上：最低標準（角色）是每天至少20-30分鐘的靈修禱告，這是每個基督徒都應該做到的；但有代禱恩賜的人可能每天2-5小時，這是恩賜呼召。讓會友知道：達到最低標準就是忠心，超過的是恩賜的果子，不需要互相比較。</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-800 mb-2">4. 鼓勵「恩賜互補」而非「恩賜競爭」</h3>
              <p>在小組或團隊中，刻意安排不同恩賜的人一起配搭服事，讓大家親身體驗「我們需要彼此」，而不是「我要比你強」。例如：代禱者提供禱告遮蓋，傳福音者去接觸慕道友，教導者來栽培初信者，憐憫者關懷受傷肢體，幫助者處理事務性工作——每個人都不可或缺。</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-800 mb-2">5. 釋放人脫離「屬靈比較」的轄制</h3>
              <p>定期在講台信息或小組教導中，清楚宣告：「在上帝眼中，忠心履行角色的普通信徒，與運用恩賜大有果效的領袖，是同等寶貴的。」幫助會友脫離「屬靈比較」與「屬靈階級」的謊言。可以分享聖經中「才幹的比喻」（太25:14-30）——重點不是拿到多少，而是有沒有忠心運用。</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-800 mb-2">6. 提供「恩賜解毒劑」輔導</h3>
              <p>對於那些深受恩賜投射傷害、陷入長期罪疚感的會友，提供專門的輔導或小組，幫助他們理解真理、脫離轄制。可以使用本章內容作為教材，一起探討恩賜與角色的區別，並為他們禱告釋放。</p>
            </div>
          </div>
        </section>

        {/* Section 4: 代禱是一種屬靈恩賜 */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-amber-700">
            <Shield className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">代禱是一種屬靈恩賜</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>
              代禱雖不是新約聖經中所提到的廿五種恩賜之一，但是如同趕鬼的恩賜，我相信它應該被列入其內。當我與牧師們談到這點時，他們幾乎都有志一同地告訴我，在他們會眾中有些會友被公認具有特別的禱告事奉是超過一般人的。這是他們可能有代禱恩賜的早期徵兆。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 43</span>
            </p>
            <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-lg mt-4 border-2 border-amber-600">
              <h3 className="font-bold text-amber-900 mb-3 text-lg">代禱恩賜的定義：</h3>
              <p className="text-gray-800 leading-relaxed text-lg">
                「代禱恩賜是上帝賜給基督身子上某些肢體的特別能力。他們比一般人更有規律地長時間投入禱告，而且看見他們禱告蒙應允的次數與程度亦比一般信徒更頻繁。」
                <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 43</span>
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg border border-amber-200 mt-4">
              <h3 className="font-bold text-gray-800 mb-3">有代禱恩賜者的五大特徵：</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold text-xl">1</span>
                  <div>
                    <strong className="text-amber-800">禱告比較久</strong>
                    <p className="mt-1">有代禱恩賜的人會花較多時間在禱告上。至少每天一小時，更常是每天禱告二至五小時。這不是重擔，而是他們的喜樂。</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold text-xl">2</span>
                  <div>
                    <strong className="text-amber-800">比一般人更強烈的禱告</strong>
                    <p className="mt-1">他們的禱告常常帶著深度的負擔與迫切感，甚至可能經歷「生產之苦」般的代求（加4:19）。</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold text-xl">3</span>
                  <div>
                    <strong className="text-amber-800">更多地享受禱告</strong>
                    <p className="mt-1">在他們的禱告中也得到較多的個人滿足。禱告對他們來說不是苦差事，而是與神親密相交的甜美時光。</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold text-xl">4</span>
                  <div>
                    <strong className="text-amber-800">更常也更戲劇性地看見禱告蒙應允</strong>
                    <p className="mt-1">他們能清楚見證許多禱告蒙應允的經歷，甚至是神蹟性的突破。這不是巧合，而是恩賜的印證。</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-600 font-bold text-xl">5</span>
                  <div>
                    <strong className="text-amber-800">十分清楚地聽見上帝的聲音</strong>
                    <p className="mt-1">許多有代禱恩賜的人同時還伴隨有預言的恩賜，能準確地領受神的心意並為之代求。</p>
                  </div>
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 43-44</span>
              </p>
            </div>
            <p className="mt-4">
              如同任何其他的恩賜，有些人比其他人擁有更多代禱的恩賜。我的班級上有的人每天花三小時禱告，也有的人每天花一小時。每位有代禱恩賜的人，上帝可以每天給他們多至數百項的代禱事項，而他們也會很高興能為這些事禱告。
            </p>
          </div>
        </section>

        {/* Section 5: 女性代禱者 */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-amber-700">
            <Heart className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">女性代禱者的獨特恩膏</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>
              有趣的是，在我的班級上所有具代禱恩賜的人都是女性。但這沒什麼不尋常。我雖尚未做夠多的研究以定出明確的數字，但依個人多年來的觀察敢大膽假設有<strong className="text-amber-700">百分之八十具代禱恩賜的人都是姊妹</strong>，不論其神學與文化背景為何。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 44-45</span>
            </p>
            <div className="bg-amber-50 p-4 rounded-lg mt-4 border border-amber-200">
              <h3 className="font-semibold text-amber-900 mb-2">為什麼有較多的女性是代禱者？</h3>
              <p>
                大體上從心理學來觀察，<strong>女性較直覺，男性較理性</strong>。有些代禱者自己說這可能與女性具有懷孕、孕育及生產的陣痛等生理功能有關。代禱服事的主要目標就是帶出上帝的旨意並使之成就，而許多人描述當他們的代禱進入最強烈的階段時，往往就像生產的陣痛一樣。
                <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 45</span>
              </p>
              <p className="mt-2">
                因此母親們往往更容易完全了解使徒保羅所說的：「我小子阿，我為你們再受生產之苦，直等到基督成形在你們心裏。」(加四19)
              </p>
              <p className="mt-2">
                另外兩個理由則比較屬於理論上的。我們知道當夏娃在伊甸園裏受到蛇的誘惑時，她所擁有的靈命早已超乎常人的想像。毫無疑問地，她比現今世上任何一位女性在靈性上都更為成熟。可是卻在那種狀況下，她仍對仇敵的詭計非常敏感。因此許多女性是否也因遺傳有這份靈性上的敏感，特別容易接受到代禱的恩賜呢？
              </p>
              <p className="mt-2">
                另一個理由則為：<strong>男人喜歡看得見的結果，而女人比較樂於作幕後的工作</strong>。代禱是一種隱藏的事奉，結果常常不是立即或明顯可見的。女性在這方面的忍耐力與堅持度往往比男性更強。
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg border-l-4 border-pink-400 mt-4">
              <h3 className="font-bold text-gray-800 mb-3">禱告勇士（詩歌）</h3>
              <div className="space-y-2 text-gray-700 italic leading-relaxed">
                <p>你可能看見她帶著孩子們在雜貨店購物，</p>
                <p>或在城市朝九晚五的忙碌工作裏，</p>
                <p>她不過是個母親，或老師，或婦女，</p>
                <p className="font-semibold text-amber-800">但當她在禱告時，卻變得全然不同。</p>
                <p className="mt-3">我們看不見她孤單的代禱夜晚，</p>
                <p>或她呻吟禱告時所滴的淚水；</p>
                <p>我們可能看不見深藏在她內心的隱祕事，</p>
                <p className="font-semibold text-amber-800">但上帝的雙眼正關愛地注視著她。</p>
                <p className="mt-3 font-bold text-lg text-amber-900">她是位禱告勇士，</p>
                <p>當她雙膝跪下時，</p>
                <p>與空中執政、掌權的爭戰，</p>
                <p>為他人站在破口上，</p>
                <p>為她的姊妹及弟兄，</p>
                <p className="font-semibold text-amber-800">以她的心上達天庭......</p>
              </div>
              <p className="text-xs text-gray-500 mt-3">— 福音團隊Heirloom</p>
              <p className="text-xs text-gray-500">
                <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 45-46</span>
              </p>
            </div>
            <p className="mt-4">
              這首詩歌深刻地描繪出女性代禱者的真實寫照：她們可能在世人眼中只是平凡的家庭主婦、上班族或退休長者，但在屬靈的戰場上，她們卻是上帝手中強而有力的武器。
            </p>
          </div>
        </section>

        {/* 延伸探討：女性在代禱事工中的獨特角色 */}
        <section className="bg-amber-50 p-6 rounded-xl shadow-sm border border-amber-200">
          <div className="flex items-center mb-4 text-amber-700">
            <Lightbulb className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">【延伸探討：女性在代禱事工中的獨特角色】</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>
              女性在代禱事工中的主導地位，不僅是一個統計現象，更反映了上帝創造中的深層智慧。這個觀察挑戰了某些教會中「屬靈領導必然是男性」的刻板印象，同時也提醒我們：<strong className="text-amber-700">在上帝的國度中，最有權柄的事奉不一定是站在講台上的，而可能是隱藏在幕後的禱告殿中</strong>。
            </p>
            <blockquote className="border-l-4 border-amber-400 pl-4 italic text-slate-600 my-4">
              「歷史上許多偉大的復興與屬靈突破，背後都有一群默默無聞的女性代禱者。她們可能不能上講台講道，不能被按立為牧師，但她們在禱告的密室中，卻掌握著打開天門、釋放神能力的鑰匙。」
            </blockquote>
            <p>
              從神學角度來看，女性在代禱上的優勢可能與以下因素有關：
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>直覺與感知力</strong>：女性通常更能敏銳地察覺他人的需要、感受到屬靈的氛圍變化，這使她們能更精準地為具體的需要代求。心理學研究顯示，女性的情緒智商(EQ)平均高於男性，這在代禱事工上是極大的優勢。</li>
              <li><strong>關係導向</strong>：女性的人際關係網絡通常更緊密，她們更自然地為家人、朋友、鄰舍的需要擔憂，這種關係上的投入轉化為代禱的負擔。男性較傾向「任務導向」，女性則傾向「關係導向」。</li>
              <li><strong>生產與孕育的經驗</strong>：正如保羅以「生產之苦」來比喻為靈魂的代求（加4:19），經歷過懷孕與生產的母親，更能理解「為某事持續忍耐、付代價、直到生出來」的屬靈原則。這不是理論，而是刻在身體記憶中的真實經驗。</li>
              <li><strong>謙卑與隱藏</strong>：代禱是一種「隱藏的事奉」，不像講道、帶敬拜那樣公開可見。女性往往更願意接受這種「在幕後支持」的角色，不求人前的掌聲，只求天父的喜悅。這與耶穌「右手做的不要讓左手知道」（太6:3）的教導完全吻合。</li>
              <li><strong>受苦的能力</strong>：女性在生理上（經期、懷孕、生產）和社會角色上（照顧家庭、多重負擔），往往比男性更熟悉「受苦」與「忍耐」。而代禱，特別是爭戰性的代禱，常常需要經歷屬靈的痛苦與爭戰。</li>
            </ol>
            <p>
              <strong>歷史見證：</strong>改變歷史的女性代禱者
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 bg-white p-4 rounded-lg">
              <li><strong>莫妮卡（Monica, 331-387）</strong>：奧古斯丁的母親，為浪子兒子禱告30年，最終看見他成為教會歷史上最偉大的神學家之一。</li>
              <li><strong>蘇珊娜·衛斯理（Susanna Wesley, 1669-1742）</strong>：約翰·衛斯理與查理·衛斯理的母親，每天固定為每個孩子禱告一小時，培養出帶領大復興的領袖。</li>
              <li><strong>海蒂貝克（Heidi Baker）</strong>：當代宣教士，在莫三比克建立數千間教會，她強調禱告與敬拜是一切事工的根基。</li>
            </ul>
            <p>
              然而，強調女性在代禱上的恩膏，絕不是要製造「男人不會禱告」的刻板印象，或將禱告事工「女性化」。事實上，歷史上也有許多偉大的男性代禱者（如喬治·慕勒、約翰·海德、吳勇長老等）。重點在於：<strong className="text-amber-700">教會應該打破性別框架，讓每個有代禱恩賜的人（無論男女）都能被辨識、裝備與釋放</strong>。
            </p>
            <p>
              更進一步說，當我們看見大多數代禱者是女性時，這也是對某些「男性主導」教會文化的一個溫柔提醒：不要因為某個事工「看似不起眼」或「不在台前」就輕看它。代禱事工可能沒有講台那麼顯眼，但在屬靈的真實中，它的影響力往往更深遠、更關鍵。一位隱藏的女性代禱勇士，可能比十位講台講員對教會的屬靈突破更有貢獻。
            </p>
            <p className="text-sm text-amber-700 font-medium">
              📚 延伸內容來源：參考Ruth Tucker《禱告的女人改變歷史》，以及John Dawson《佔領土地》關於女性代禱者的歷史角色。
            </p>
          </div>
        </section>

        {/* 反思問題：女性代禱者 */}
        <section className="bg-indigo-50 p-6 rounded-xl shadow-sm border border-indigo-200">
          <div className="flex items-center mb-4 text-indigo-700">
            <HelpCircle className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">【反思問題：關於女性代禱者】</h2>
          </div>
          <ol className="space-y-3 text-slate-700 list-decimal list-inside">
            <li>在你的教會中，女性代禱者是否在代禱事工上被充分肯定與裝備？還是被視為「理所當然」的幕後工作，甚至被輕看為「沒什麼特別」？</li>
            <li>如果你是女性且有代禱恩賜，你是否曾因為這個恩賜「不夠屬靈」或「不夠重要」（相比講道、帶領、教導）而感到自卑或被邊緣化？</li>
            <li>如果你是男性，你如何看待「女性較多代禱恩賜」這個現象？是覺得「禱告是女人的事」而不重視，還是更加尊重並支持她們？你有沒有真心感謝過教會中的女性代禱者？</li>
            <li>你的教會文化中，「講台事奉」（講道、帶敬拜、教導）與「禱告事奉」（代禱、守望）哪個被看為更有權柄、更重要？這反映出什麼樣的價值觀？是否符合聖經？</li>
            <li>你是否認識一些「隱藏的禱告勇士」（可能是家庭主婦、退休長者、默默服事的姊妹）？你有沒有好好感謝並鼓勵她們？或者你甚至不知道她們的名字？</li>
            <li>如果你是教會領袖，你的領導團隊（長執會、同工會）中是否有女性代禱者的聲音與參與？還是只有男性牧者、長老的決策？你是否願意改變這個現況？</li>
            <li>你是否曾見證過女性代禱者在屬靈爭戰中的能力？她們的禱告是否曾帶來教會或個人生命的突破？請分享具體見證。</li>
          </ol>
        </section>

        {/* 具體實踐：肯定女性代禱者 */}
        <section className="bg-green-50 p-6 rounded-xl shadow-sm border border-green-200">
          <div className="flex items-center mb-4 text-green-700">
            <CheckCircle className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">【具體實踐方向：肯定與釋放女性代禱者】</h2>
          </div>
          <div className="space-y-4 text-slate-700">
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-800 mb-2">1. 公開肯定女性代禱者的貢獻</h3>
              <p>在主日崇拜或特別聚會中，公開感謝那些長期默默代禱的姊妹們（可以不點名，但明確表達感謝）。可以請她們分享代禱蒙應允的見證，讓全教會看見「隱藏的事奉」的真實影響力。避免只感謝台前服事（講道、帶敬拜）而忽略幕後代禱。</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-800 mb-2">2. 建立「姊妹代禱團」</h3>
              <p>特別為有代禱恩賜的姊妹們設立專屬的代禱團契（建議每週或雙週聚集），提供她們定期聚集、彼此扶持、深化裝備的平台。不要讓她們孤軍奮戰。可以邀請有經驗的代禱者來分享、教導屬靈爭戰原則、一起為教會守望。</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-800 mb-2">3. 邀請女性代禱者參與重大決策前的禱告尋求</h3>
              <p>當教會面臨重大決定（如建堂、聘牧、事工方向、財務規劃）時，不要只有長執會閉門討論，而要邀請有代禱恩賜的姊妹們（即使她們不是長執）一起尋求神的心意。她們的屬靈洞察力與敏銳度往往能提供關鍵的引導。這不是「女權」問題，而是「恩賜運用」問題。</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-800 mb-2">4. 設立「禱告事工」的正式職分（女執事、代禱同工）</h3>
              <p>參考某些教會設立「禱告傳道」或「代禱牧師」的做法，即使不是全職，也可以給予正式的職分認定（如按立為女執事、禱告同工），讓她們有清晰的身分認同與服事異象。這能大大提升代禱事工在教會中的地位與重視度。</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-800 mb-2">5. 提供實際的支持與資源</h3>
              <p>為女性代禱者提供實際的幫助，如：(1)提供靈修材料、代禱指引、屬靈書籍、退修會補助 (2)如果她們是家庭主婦，可以協助安排托兒服務，讓她們能專心參加禱告聚集 (3)定期關懷她們的身心靈狀況，不要讓她們成為「只被使用不被關心」的工具。</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-800 mb-2">6. 教導全教會尊重「隱藏的事奉」</h3>
              <p>透過講台教導、主日學課程，幫助會友明白：在上帝眼中，隱藏的禱告事奉與公開的講台事奉同等重要，甚至更有權柄。可以分享聖經中「隱密處禱告」（太6:6）的教導，以及歷史上女性代禱者改變歷史的見證。</p>
            </div>
        {/* Section: 代禱的四種職事 */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-amber-700">
            <Target className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">代禱的服事：四種不同的職事</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>
              一般說來，代禱者所從事的有<strong className="text-amber-700">四種特別的職事</strong>。上帝會指示給有相同屬靈恩賜的個人不同的職事。這原則可以適用於任何的屬靈恩賜，其中包括代禱的恩賜。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 46-47</span>
            </p>
            <div className="space-y-4 mt-6">
              <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-600">
                <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                  <span className="bg-amber-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">1</span>
                  一般性代禱
                </h3>
                <p className="text-gray-700 mt-2">
                  有一般性代禱職事的人常會花很長時間按著禱告事項、禱告指引及其他各種給予他們的禱告請求而代禱。許多教會固定在主日早晨收集代禱事項，一般性的代禱者則會在週間為他們禱告。你若請求某位一般性代禱者為某事禱告，你可引以安心地確知事情必會被好好地禱告到。
                  <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 47</span>
                </p>
                <div className="bg-white p-3 rounded mt-3 border border-amber-300">
                  <p className="text-sm font-semibold text-amber-800 mb-1">特徵：</p>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>按照禱告清單逐項禱告</li>
                    <li>可靠、穩定、有系統</li>
                    <li>喜歡結構化的禱告模式</li>
                    <li>是教會禱告事工的「常備軍」</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-600">
                <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                  <span className="bg-amber-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">2</span>
                  危機的代禱
                </h3>
                <p className="text-gray-700 mt-2">
                  危機的代禱者幾乎都只接受指派而禱告，而此指派通常直接來自於天父。他們對個人信口說出的禱告請求並不太有積極的回應，也大多不耐煩於按禱告單逐一禱告，而喜悅以敬拜讚美進入他們的禱告時刻，與父上帝親近，直接從祂聽到自己所需要禱告的事項。一旦上帝告訴他們要為某個危急狀況禱告，他們就會<strong className="text-amber-700">像鬥犬一樣緊咬住問題不放，直到那問題解決或上帝從差派中「釋放」他們為止</strong>。
                  <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 47-48</span>
                </p>
                <div className="bg-white p-3 rounded mt-3 border border-amber-300">
                  <p className="text-sm text-gray-700">
                    <strong>見證：</strong>克莉斯婷·羅得(Christine Rhoads)在一九六〇年代前後感到上帝給她一個負擔，要她為一個她從未去過也不知道其所在的國家代禱。她順服地為這片「未知之地」禱告，直到後來終於發現那地原來叫阿爾巴尼亞。克莉斯婷被授與要長期性不時為阿爾巴尼亞禱告的任務。當時阿爾巴尼亞是世界上最敵對基督教的國家，但她忠心代禱二十多年。然而世局在一九九一年全然改觀：阿爾巴尼亞竟然開放了！許多宣教士湧入，建立了眾多教會。克莉斯婷的代禱得到了戲劇性的應允。
                    <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 48</span>
                  </p>
                </div>
                <div className="bg-white p-3 rounded mt-3 border border-amber-300">
                  <p className="text-sm font-semibold text-amber-800 mb-1">特徵：</p>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>由聖靈直接指派禱告負擔</li>
                    <li>對某事有強烈、持久的負擔</li>
                    <li>不靠禱告單，靠聖靈引導</li>
                    <li>需要較多獨處安靜時間</li>
                    <li>是教會禱告事工的「特種部隊」</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-600">
                <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                  <span className="bg-amber-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">3</span>
                  個人性的代禱
                </h3>
                <p className="text-gray-700 mt-2">
                  有些代禱者蒙召為某位或某幾位特定的人作一般及特別的禱告。通常這些被禱告的人是牧師及其他的基督徒領袖。本書就是針對此等服事做深入的察考。根據聖經，我相信腓立比教會的<strong className="text-amber-700">友阿爹和循都基</strong>是保羅的個人性代禱者中的兩位代表(參腓四2～3)。
                  <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 48-49</span>
                </p>
                <p className="text-gray-700 mt-2">
                  個人性代禱者與被代禱者之間常會發展出深厚的屬靈連結。他們不僅為對方的事工代禱，也為其家庭、健康、屬靈生命守望。這種代禱關係需要建立在互相信任、尊重界線、定期溝通的基礎上。
                </p>
                <div className="bg-white p-3 rounded mt-3 border border-amber-300">
                  <p className="text-sm font-semibold text-amber-800 mb-1">特徵：</p>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>對特定領袖有長期禱告負擔</li>
                    <li>能敏銳感知被代禱者的需要</li>
                    <li>建立信任的代禱夥伴關係</li>
                    <li>是教會領袖的「貼身保鏢」</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-600">
                <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                  <span className="bg-amber-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">4</span>
                  爭戰的代禱
                </h3>
                <p className="text-gray-700 mt-2">
                  有些代禱者蒙召特別從事高層次的屬靈爭戰，為要擊敗仇敵的工作。這是一種高層次的代禱，是最需要也是最具潛在危險性的。許多危機代禱者及個人性的代禱者也發現他們時常會直接與黑暗權勢相衝突，因此有人可能會對將爭戰的代禱另分類一類提出異議。但我個人深信，認清有些代禱者確實在許多地從事此類代禱是有其價值的。
                  <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 49</span>
                </p>
                <div className="bg-white p-3 rounded mt-3 border border-red-300 bg-red-50">
                  <p className="text-sm font-semibold text-red-800 mb-1">⚠️ 重要警告：</p>
                  <p className="text-sm text-gray-700">
                    爭戰代禱者需要特別的保護與遮蓋。他們是仇敵攻擊的首要目標，因此必須：(1)有成熟的屬靈生命與真理根基 (2)有教會領袖的遮蓋與印證 (3)不能獨自行動，需要團隊支持 (4)定期接受屬靈健康檢查。若缺乏這些保護，可能會遭受嚴重的屬靈攻擊。
                  </p>
                </div>
                <div className="bg-white p-3 rounded mt-3 border border-amber-300">
                  <p className="text-sm font-semibold text-amber-800 mb-1">特徵：</p>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>對屬靈爭戰有深入認識與經驗</li>
                    <li>能辨識並對抗黑暗權勢</li>
                    <li>常經歷激烈的屬靈爭戰</li>
                    <li>需要極強的屬靈保護</li>
                    <li>是教會禱告事工的「前線戰士」</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 延伸探討：代禱職事的分工與配搭 */}
        <section className="bg-amber-50 p-6 rounded-xl shadow-sm border border-amber-200">
          <div className="flex items-center mb-4 text-amber-700">
            <Lightbulb className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">【延伸探討：代禱職事的分工與配搭】</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>
              代禱職事的四種類型，再次印證了「恩賜多樣性」的真理。即使在代禱這個看似單一的事奉領域中，上帝仍然賜下不同的恩膏與呼召，使代禱者們能互補配搭，而不是彼此競爭或比較。
            </p>
            <blockquote className="border-l-4 border-amber-400 pl-4 italic text-slate-600 my-4">
              「一個健康的教會禱告事工，應該像一支訓練有素的軍隊：有常備部隊（一般性代禱者）負責日常守望，有特種部隊（危機代禱者）執行關鍵任務，有貼身保鏢（個人性代禱者）保護領袖，有前線戰士（爭戰代禱者）與仇敵正面交鋒。」
            </blockquote>
            <p>
              理解這四種職事的區別，對教會領袖來說至關重要，因為它幫助我們：
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>避免「一刀切」的禱告動員</strong>：不是所有代禱者都適合參加每個禱告會。一般性代禱者可能在週間固定禱告會中最能發揮（按禱告單代禱），危機代禱者則可能需要更多獨處安靜等候主的時間（接受聖靈直接指派）。如果強迫危機代禱者參加結構化的禱告會，可能會限制他們的恩賜發揮。</li>
              <li><strong>提供「客製化」的裝備與牧養</strong>：不同類型的代禱者需要不同的餵養。例如，爭戰代禱者特別需要屬靈爭戰的教導與保護，個人性代禱者則需要學習如何與被代禱的領袖建立健康的界線（避免過度依附或情感糾纏）。</li>
              <li><strong>建立「分層」的代禱網絡</strong>：教會可以建立多層次的代禱網絡：第一層是全教會的禱告會（開放所有人參加，適合一般性代禱），第二層是代禱團隊（有代禱恩賜者，包含各種類型），第三層是核心代禱者（為教會守望的危機與爭戰代禱者，人數較少但影響力巨大）。</li>
              <li><strong>尊重代禱者的「負擔」與「釋放」</strong>：特別是危機代禱者，他們的禱告負擔是由聖靈直接啟動的，領袖不應強迫他們為所有事情禱告。同樣地，當上帝「釋放」他們離開某個代禱任務時（如克莉斯婷為阿爾巴尼亞禱告20年後，該國開放，她的任務完成），我們也要尊重這個引導，不要繼續要求他們「堅持下去」。</li>
            </ol>
            <p>
              值得注意的是，這四種職事並非截然分明、互不相干。許多代禱者可能同時擁有多種職事的混合恩膏，或在不同季節被呼召進入不同的職事。例如，一個主要是一般性代禱者的姊妹，可能在特定時期（如教會面臨重大危機）被聖靈啟動進入危機代禱的模式。關鍵不是把人「分類標籤化」，而是<strong className="text-amber-700">幫助每個代禱者認識自己的恩膏，並在合適的位置上發揮最大的果效</strong>。
            </p>
            <p className="text-sm text-amber-700 font-medium">
              📚 延伸內容來源：參考翟辛蒂《得著仇敵的城門》對不同代禱類型的詳細描述，以及狄克·伊士特曼《守望者禱告手冊》關於代禱團隊建造的實務指引。
            </p>
          </div>
        </section>

        {/* 反思問題：四種職事 */}
        <section className="bg-indigo-50 p-6 rounded-xl shadow-sm border border-indigo-200">
          <div className="flex items-center mb-4 text-indigo-700">
            <HelpCircle className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">【反思問題：關於代禱職事】</h2>
          </div>
          <ol className="space-y-3 text-slate-700 list-decimal list-inside">
            <li>如果你有代禱恩賜，你認為自己比較接近哪一種職事？（一般性、危機、個人性、爭戰）為什麼？請舉出具體例子說明。</li>
            <li>你的教會禱告會是否有意無意地「強迫」所有人用同一種方式禱告（如按禱告單逐項禱告），而忽略了危機代禱者或爭戰代禱者的獨特需要與呼召？</li>
            <li>你是否曾因為某位代禱者「不照規矩」（如不參加禱告會，卻說自己在家有深度禱告；或不按禱告單禱告，只為聖靈放在心中的負擔禱告）而論斷他們？現在回頭看，他們是否可能是危機代禱者？</li>
            <li>如果你是教會領袖，你是否能辨識出不同類型的代禱者，並給予他們不同的配搭與牧養？還是「一視同仁」地要求所有人都用同樣的方式禱告？</li>
            <li>你是否認識一些有爭戰代禱恩賜的人？他們是否得到足夠的保護與支持？還是被視為「怪異」或「太激進」或「屬靈驕傲」而被邊緣化？</li>
            <li>當你聽到某人說「上帝要我專門為某件事禱告」（如阿爾巴尼亞的例子），你的第一反應是質疑、欣賞、還是願意支持並等候結果？你會不會覺得他們「太主觀」或「太屬靈」？</li>
            <li>你的教會是否有為領袖建立「個人代禱團」的機制？如果沒有，你願意主動提出建議或自己成為某位領袖的個人代禱者嗎？</li>
          </ol>
        </section>

        {/* 具體實踐：建立多元代禱事工 */}
        <section className="bg-green-50 p-6 rounded-xl shadow-sm border border-green-200">
          <div className="flex items-center mb-4 text-green-700">
            <CheckCircle className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">【具體實踐方向：建立多元代禱事工】</h2>
          </div>
          <div className="space-y-4 text-slate-700">
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-800 mb-2">1. 建立「多元化」的禱告平台</h3>
              <p>不要只有一種固定模式的禱告會。可以設立：(1)週間禱告會（週三或週五，適合一般性代禱者，按禱告手冊逐項禱告）(2)守望禱告時段（24小時輪班或固定時段，適合危機代禱者安靜等候聖靈指派）(3)牧者代禱團（每週或每月，個人性代禱者為領袖守望）(4)爭戰禱告特會（不定期，當教會面臨重大屬靈爭戰時召集）。</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-800 mb-2">2. 提供「職事導向」的裝備課程</h3>
              <p>針對不同類型的代禱者，提供專門的裝備：(1)一般性代禱者：「如何使用禱告手冊」、「系統化代禱技巧」(2)危機代禱者：「如何分辨聖靈的引導」、「禱告負擔的接受與釋放」(3)個人性代禱者：「為領袖代禱的原則」、「建立健康的代禱關係」(4)爭戰代禱者：「屬靈爭戰與保護」、「辨別諸靈」、「權柄與遮蓋」。</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-800 mb-2">3. 建立「代禱負擔分享」機制</h3>
              <p>特別是危機代禱者，需要有安全的環境來分享他們從聖靈領受的代禱負擔，並得到領袖的確認與支持。可以設立：(1)每月一次的「代禱負擔分享會」，讓代禱者分享神放在他們心中的負擔 (2)線上群組或禱告日誌系統，記錄負擔與應允 (3)由成熟同工組成的「印證團隊」，幫助辨別負擔是否來自聖靈。讓代禱者知道自己不是孤軍奮戰。</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-800 mb-2">4. 記錄並見證「代禱果效」</h3>
              <p>建立系統性的「代禱與應允」記錄本，特別記下那些戲劇性的蒙應允案例（如阿爾巴尼亞開放、危機化解、疾病得醫治、靈魂歸主）。可以：(1)設立「禱告蒙應允見證牆」 (2)定期在主日或小組分享這些見證 (3)出版代禱見證集 (4)建立線上見證資料庫。這能激勵代禱者也造就全教會的信心。</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-800 mb-2">5. 為爭戰代禱者提供「屬靈遮蓋」</h3>
              <p>爭戰代禱者是仇敵攻擊的首要目標。教會領袖要：(1)定期為他們禱告、按手祝福 (2)關心他們的身心靈狀況（睡眠、情緒、家庭、屬靈攻擊）(3)確保他們不是獨自面對黑暗權勢，而是在團隊中 (4)提供屬靈輔導或退修的資源 (5)建立「代禱者的代禱者」機制，彼此守望。若發現代禱者出現異常狀況（如過度疲憊、靈性低潮、家庭問題），要立即介入關懷。</p>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-800 mb-2">6. 尊重代禱者的「釋放」與「重新指派」</h3>
              <p>當某位危機代禱者完成了一個長期代禱任務（如為某國家禱告多年後該國開放，或為某人禱告多年後該人信主），要：(1)公開慶祝並感謝神的信實 (2)肯定代禱者的忠心與堅持 (3)尊重他們進入「釋放期」或安息期，不要立刻給他們新的「任務」 (4)等候聖靈的新指派，不要人為安排。這能避免代禱者burnout，也尊重聖靈的主權。</p>
            </div>
          </div>
        </section>

        {/* Section: 如何發掘代禱恩賜 */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-amber-700">
            <BookOpen className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">如何發掘你的代禱恩賜？五個步驟</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>
              許多人這時會問：「我懷疑自己是否有代禱的恩賜？」若你真的有，請記得這乃是因為上帝恩慈地選定要賜給你，而不是像芭蕾舞者或打棒球的人需要透過辛苦及持之以恆的訓練才能擁有的技巧。那既是上帝所給予的恩賜，因此你的責任就是去發掘究竟自己有沒有而已。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 49-50</span>
            </p>
            <div className="space-y-4 mt-6">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-5 rounded-lg border-l-4 border-amber-600">
                <h3 className="font-bold text-amber-900 mb-3 text-lg">步驟一：探索可能性</h3>
                <p className="text-gray-700">
                  此時你需要知道，代禱恩賜是上帝分賜給基督身體的屬靈恩賜之一。所有的基督徒都必須履行身為代禱者的角色，但有些人卻比一般人更進一步擁有恩賜與職事。
                  <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 50</span>
                </p>
                <div className="bg-white p-3 rounded mt-3 border border-amber-300">
                  <p className="text-sm font-semibold text-amber-800 mb-1">實踐指引：</p>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>閱讀本章內容，了解代禱恩賜的定義與特徵</li>
                    <li>問自己：「我是否曾經驗過其中某些特徵？」</li>
                    <li>開放心態，不要預設答案（無論是或否）</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-5 rounded-lg border-l-4 border-amber-600">
                <h3 className="font-bold text-amber-900 mb-3 text-lg">步驟二：恩賜的實驗</h3>
                <p className="text-gray-700">
                  儘可能隨時多方地試著去代禱。這種試驗是長期性的，且要認真地進行。在整個過程中，你可以求上帝向你顯明是否擁有此恩賜。若你的恩賜不是代禱，仍需繼續實驗以發現你的恩賜是什麼，但同時仍要做一個忠心的禱告者。
                  <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 50</span>
                </p>
                <div className="bg-white p-3 rounded mt-3 border border-amber-300">
                  <p className="text-sm font-semibold text-amber-800 mb-1">實踐指引：</p>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>開始為期3-6個月的「代禱實驗期」</li>
                    <li>每天刻意撥出時間代禱（從30分鐘開始，逐漸增加）</li>
                    <li>嘗試不同類型的代禱（一般性、危機、個人性）</li>
                    <li>記錄你的經歷：感受、困難、蒙應允的禱告</li>
                    <li>持續求聖靈啟示與印證</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-5 rounded-lg border-l-4 border-amber-600">
                <h3 className="font-bold text-amber-900 mb-3 text-lg">步驟三：察驗你的感覺</h3>
                <p className="text-gray-700 mb-2">
                  若你有代禱的恩賜，則你渴望禱告的心將會繼續增長。聖經上說：「因為你們立志行事都是上帝在你們心裏運行，為要成就祂的美意。」(腓二13)
                </p>
                <p className="text-gray-700">
                  代禱一段時間後，若你發現代禱是辛苦的工作或令人厭煩，你內心根本不渴望去行，那就或許是你沒有這恩賜的證據。但若<strong className="text-amber-700">長時間的禱告是你的喜樂</strong>，那麼你就可以開始相信你有此恩賜了。
                  <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 50-51</span>
                </p>
                <div className="bg-white p-3 rounded mt-3 border border-amber-300">
                  <p className="text-sm text-gray-700 italic">
                    翟辛蒂說：「有代禱恩賜的人喜愛禱告。他們寧願不做其他的事。每當人們問我一天禱告多久時，我總是回答說：『儘可能地多！』」
                    <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 51</span>
                  </p>
                </div>
                <div className="bg-white p-3 rounded mt-3 border border-amber-300">
                  <p className="text-sm font-semibold text-amber-800 mb-1">自我檢視問題：</p>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>禱告時間過得快還是慢？（有恩賜的人會覺得時間飛逝）</li>
                    <li>禱告後我是精力充沛還是疲憊不堪？（恩賜者會得力）</li>
                    <li>我期待禱告時間還是逃避它？</li>
                    <li>禱告對我是重擔還是喜樂？</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-5 rounded-lg border-l-4 border-amber-600">
                <h3 className="font-bold text-amber-900 mb-3 text-lg">步驟四：衡量你禱告的有效性</h3>
                <p className="text-gray-700">
                  得到屬靈恩賜之後，最重要的便是從聖靈獲得超自然的幫助，以產生有效的事奉。你能清楚地聽見上帝的聲音嗎？你的禱告蒙應允次數比一般人多嗎？你意識到有特別的能力從你的禱告中釋放出來嗎？若有的話，那麼你八成有此恩賜。
                  <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 51</span>
                </p>
                <div className="bg-white p-3 rounded mt-3 border border-amber-300">
                  <p className="text-sm font-semibold text-amber-800 mb-1">具體指標：</p>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>記錄禱告蒙應允的次數與速度</li>
                    <li>觀察是否常有「戲劇性」的應允（超出預期）</li>
                    <li>是否常準確領受神的心意（預言性代禱）</li>
                    <li>是否常為他人代禱後看見他們生命改變</li>
                    <li>是否常在禱告中經歷神的同在與能力</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-5 rounded-lg border-l-4 border-amber-600">
                <h3 className="font-bold text-amber-900 mb-3 text-lg">步驟五：從肢體得到印證</h3>
                <p className="text-gray-700 mb-2">
                  作者分享了葛蘭·費滋派克(Graham Fitzpatrick)的故事。他請求上帝向他顯示是否有代禱恩賜。很確定的是，聖靈清楚地向另外兩位較成熟的信徒提到了他。
                </p>
                <p className="text-gray-700">
                  根據葛蘭所說，一位他素昧平生的男士「告訴我說上帝要我作他人的代禱者」。接著是一位他認識的女士，她並不曉得他企盼為人代禱，她說上帝也給了她這相同的信息。葛蘭說：「所以，<strong className="text-amber-700">上帝使用這兩位基督徒來印證我心所想的確實是祂向我說的</strong>——真的是出於祂，而不是出於我個人的想像或魔鬼。」
                  <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 51-52</span>
                </p>
                <div className="bg-white p-3 rounded mt-3 border border-amber-300">
                  <p className="text-sm font-semibold text-amber-800 mb-1">如何尋求印證：</p>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>向成熟的屬靈長者或牧者分享你的感動</li>
                    <li>觀察是否有人主動來找你代禱（頻率增加）</li>
                    <li>注意是否有兩位以上的肢體獨立給予相同印證</li>
                    <li>不要自己「製造」印證（如暗示他人）</li>
                    <li>等候神透過不同管道的多重確認</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-amber-100 p-5 rounded-lg border-2 border-amber-700 mt-6">
              <p className="font-bold text-amber-900 mb-2">⚠️ 重要提醒：勇敢承認你的恩賜</p>
              <p className="text-gray-800">
                若你真發覺自己有代禱的恩賜，就不要不情願承認自己有此恩賜。不要陷入虛假的謙虛中。你若「誇口」自己是代禱者，絕不會比葛理翰誇口他是佈道家或你的牧師誇口他是牧師產生更嚴重的後果。仇敵常會使用你的不情願讓其他知道你有此恩賜的人削弱你在基督徒職事的影響。要為上帝所賜的感謝祂，這是好管家的本分之一，並<strong className="text-amber-700">使用此恩賜去結果實卅倍、六十倍、一百倍</strong>。
                <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 52</span>
              </p>
            </div>
          </div>
        </section>

        {/* 綜合反思問題 */}
        <section className="bg-indigo-50 p-6 rounded-xl shadow-sm border border-indigo-200">
          <div className="flex items-center mb-4 text-indigo-700">
            <HelpCircle className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">【綜合反思問題】</h2>
          </div>
          <ol className="space-y-3 text-slate-700 list-decimal list-inside">
            <li>在讀完這一章之後，你對「代禱恩賜」的認識是否有所改變？哪一點對你衝擊最大？為什麼？</li>
            <li>如果你一直覺得「我應該像某某人一樣每天禱告兩小時」卻做不到而充滿罪疚，現在你如何重新看待這個問題？你願意饒恕自己並脫離這虛假的罪疚感嗎？</li>
            <li>反過來說，如果你發現自己可能有代禱恩賜（喜歡禱告、常蒙應允、被他人確認），你是否願意勇敢地承認並發展這恩賜？還是仍然躲在「虛假謙卑」的背後說「我只是普通基督徒」？</li>
            <li>你的教會是否有系統性地幫助會友發現並發揮他們的屬靈恩賜（不只是代禱，而是所有恩賜）？如果沒有，你願意主動與領袖分享這方面的需要嗎？</li>
            <li>當你看見教會中那些「重要的少數」代禱者時，你的態度是羨慕嫉妒、論斷輕看、還是感恩支持？你願意改變嗎？</li>
            <li>你是否願意開始「恩賜的實驗」——無論是代禱或其他領域——來發掘上帝給你的獨特呼召？你願意給自己3-6個月的時間認真嘗試嗎？</li>
            <li>如果你是教會領袖，讀完這一章後，你是否看見需要在教會中建立更健全的「代禱事工」？你願意採取哪些具體行動？請列出至少3項。</li>
          </ol>
        </section>

        {/* 綜合具體實踐 */}
        <section className="bg-green-50 p-6 rounded-xl shadow-sm border border-green-200">
          <div className="flex items-center mb-4 text-green-700">
            <CheckCircle className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">【綜合具體實踐方向】</h2>
          </div>
          <div className="space-y-4 text-slate-700">
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-800 mb-2">個人層面的實踐：</h3>
              <ol className="space-y-2 ml-4 list-decimal list-inside">
                <li>開始為期三個月的「恩賜實驗」：每天刻意撥出時間代禱（從20-30分鐘開始，逐漸增加），並記錄你的感受、蒙應允的經歷、以及屬靈的洞察。使用禱告日誌或手機APP。</li>
                <li>找一位成熟的屬靈長者或導師，分享你對代禱恩賜的探索，請他們為你禱告並給予印證或建議。不要害怕敞開。</li>
                <li>閱讀代禱相關的屬靈書籍深化裝備（推薦：《得著仇敵的城門》翟辛蒂、《爭戰的禱告》彼得·魏格納、《守望者禱告手冊》狄克·伊士特曼、《禱告出來的能力》包約翰）。</li>
                <li>如果你確認有代禱恩賜，勇敢地告訴你的牧師或小組長，表達你願意在這方面服事的心志。主動詢問教會是否有代禱團隊可以加入。</li>
                <li>為你的牧師及教會領袖建立固定的代禱時間（即使只是每天5-10分鐘開始），並定期（如每月）分享代禱蒙應允的見證給他們，建立代禱關係。</li>
                <li>參加代禱或屬靈爭戰相關的特會、退修會、工作坊，不斷裝備自己。</li>
              </ol>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-800 mb-2">教會層面的實踐：</h3>
              <ol className="space-y-2 ml-4 list-decimal list-inside">
                <li>在下一次同工會或長執會中，將「建立代禱事工」列為正式議程，討論如何辨識、裝備並釋放代禱者。可以使用本章內容作為討論基礎。</li>
                <li>開設「屬靈恩賜」主題的裝備課程（建議至少6-8週），幫助全教會明白恩賜與角色的區別，釋放人脫離不必要的罪疚感。可以使用本書或魏格納的《你的屬靈恩賜能助你的教會增長》作為教材。</li>
                <li>建立「代禱者名冊」，主動邀請有代禱恩賜或負擔的會友加入，並定期（如每季）為他們舉辦退修會或培訓。</li>
                <li>設立「禱告事工」的正式職分（如禱告同工、代禱傳道、禱告長老），給予清晰的身分認同、職責範圍與支持系統。</li>
                <li>在主日崇拜或特別聚會中，公開分享代禱蒙應允的見證，並感謝那些默默代禱的肢體（可以不點名，但明確表達感謝）。</li>
                <li>為代禱者提供實際的資源與支持：禱告手冊、屬靈書籍、退修會補助、托兒服務、靈修空間等。編列預算支持代禱事工。</li>
                <li>建立「代禱者的代禱者」機制，確保代禱者本身也得到屬靈遮蓋與關懷，不是孤軍奮戰。可以由牧者或資深同工負責定期關懷代禱者。</li>
                <li>設立多元化的禱告平台（週間禱告會、守望禱告、牧者代禱團、爭戰禱告特會），讓不同類型的代禱者都能找到合適的位置。</li>
              </ol>
            </div>
            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-800 mb-2">小組層面的實踐：</h3>
              <ol className="space-y-2 ml-4 list-decimal list-inside">
                <li>在小組中分享這一章的內容（可以分2-3次討論），一起討論每個人可能的屬靈恩賜，並彼此確認與鼓勵。</li>
                <li>建立小組的「代禱網絡」：辨識出小組中有代禱恩賜的肢體（可能1-2位），請他們特別為小組及組員守望，其他人則在各自的恩賜上服事。</li>
                <li>定期在小組聚會中留時間（如15分鐘）分享「代禱蒙應允」的見證，建立代禱的信心與文化。</li>
                <li>為小組長建立「個人代禱團」：邀請2-3位有代禱恩賜的組員，定期（如每週）為小組長及其家庭代禱，成為小組長的屬靈遮蓋。</li>
                <li>鼓勵小組成員互相代禱（如禱告夥伴制度），並學習分辨彼此不同的恩賜，互相配搭而非比較競爭。</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Chapter Summary */}
        <section className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-xl shadow-md border-2 border-amber-600">
          <div className="flex items-center mb-4 text-amber-800">
            <MessageCircle className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">本章總結：代禱者——教會隱藏的寶藏</h2>
          </div>
          <div className="text-slate-800 space-y-3 leading-relaxed">
            <p>
              這一章深刻地揭示了「代禱恩賜」這個常被忽略卻極其重要的屬靈真理。作者透過派瑞特原則、恩賜神學、四種代禱職事的分析，以及發掘恩賜的五個步驟，幫助我們看見：<strong className="text-amber-800">代禱不僅是每位信徒的角色，更是某些人獨特的恩賜與呼召</strong>。
            </p>
            <p>
              這個教導帶來雙重的釋放：一方面，它釋放那些沒有代禱恩賜的人脫離「我應該每天禱告三小時」的虛假罪疚，讓他們明白盡好禱告的「角色」（如每天20-30分鐘）就是忠心；另一方面，它鼓勵那些有代禱恩賜的人勇敢地承認並發展這恩賜，而不是陷入虛假的謙卑說「我只是普通基督徒」。
            </p>
            <p>
              更重要的是，作者提醒我們：<strong className="text-amber-800">在上帝的國度中，最有權柄的事奉不一定是站在台前的，而可能是隱藏在幕後的禱告殿中</strong>。那些「重要的少數」代禱者（約佔教會5%），正是教會能力的源頭、領袖的盾牌、仇敵的噩夢。他們可能是默默無聞的家庭主婦、退休長者，或忙碌的上班族，但當他們雙膝跪下時，天門打開，神的能力釋放，黑暗權勢潰敗。
            </p>
            <p>
              這一章也特別肯定了女性在代禱事工中的獨特恩膏（約佔80%），挑戰了某些「屬靈領導必然是男性」的刻板印象。歷史見證顯示，許多偉大的復興與屬靈突破，背後都有一群默默無聞的女性代禱勇士。
            </p>
            <p>
              願這一章的教導，能幫助每間教會重新發現並珍惜這些「隱藏的寶藏」，建立健全的代禱事工，讓禱告不再只是口號，而是真正改變歷史、釋放神能力的屬靈利器！願每位讀者都能找到自己在基督身體中的位置——無論是代禱者還是其他恩賜的肢體——並忠心地在那位置上發光！
            </p>
          </div>
        </section>

        {/* 問題迴響（原書） */}
        <section className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-amber-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-amber-600" />
            問題迴響（原書）
          </h2>
          <ol className="space-y-3 text-slate-700 list-decimal list-inside">
            <li>依你之見，上帝是否可能給今日基督徒一些屬靈恩賜是新約聖經中所沒有提到過的，試討論之。（提示：作者認為代禱與釋放就是例子）</li>
            <li>用你自己的話解釋屬靈恩賜與基督徒角色之間的差別。請舉出至少三個具體例子。</li>
            <li>你認為為什麼女性比男性更多擁有代禱的屬靈恩賜？你同意作者提出的理由嗎？你有其他觀點嗎？</li>
            <li>你是否知道有任何人符合本章所提到之代禱四種職事中的一項或多項？寫出他們的名字（或代號），並討論他們的職事特徵。</li>
            <li>你是一個有上帝所賜予之代禱恩賜的人嗎？討論你所回答的理由，並參考本章的五個發掘步驟來檢視。</li>
          </ol>
        </section>

        {/* Navigation hint */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3 rounded-full shadow-lg">
            <p className="font-bold text-lg">🎉 第二章完整內容結束 🎉</p>
      </div>
    </div>
  );
}
 
