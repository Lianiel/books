import React from 'react';
import { Compass, MapPin, Book, Heart } from 'lucide-react';

export default function Chapter2() {
  return (
    <div className="max-w-4xl mx-auto pb-12">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-8 border-b-2 border-indigo-100 pb-4">
        第一章：成長於兩個世界的保羅
      </h1>

      <div className="space-y-8">
        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-indigo-700">
            <MapPin className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">保羅的成長背景</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>
              根據保羅的自述，他的成長和受教是在兩個不同的文化環境中進行的（徒廿二3）。他以血統純正的猶太人自豪（腓三5），也曾經受過嚴謹的猶太傳統教育。身為猶太人，保羅深受從父執輩傳承下來的猶太信仰影響，但是他後來卻成了耶穌基督的跟隨者，在外邦宣教掀起了翻天覆地的影響。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 026</span>
            </p>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 my-4">
              <h3 className="font-bold text-slate-800 mb-2">保羅的五大背景特徵：</h3>
              <ol className="list-decimal pl-5 space-y-1">
                <li>他是猶太人，屬於便雅憫支派，是希伯來人所生的希伯來人。</li>
                <li>他生長在基利家的大數，第八天受割禮。</li>
                <li>曾經在迦瑪列門下，按著祖宗嚴謹的律法受教。</li>
                <li>是一名叫心事奉神的法利賽人。</li>
                <li>生來就具有羅馬公民身分（徒廿二28）。</li>
              </ol>
              <p className="text-sm text-slate-500 mt-2 text-right">p. 028-029</p>
            </div>
            <p>
              大數 (Tarsus) 是一個深受希臘文化影響的繁榮城市，不僅是基利家省的首府，更是當時的學術與商業中心。大數人熱衷於追求文化，投入於斯多亞學派等哲學方面的研究，其學術氛圍之濃厚，使得大數在當時可以稱之為與雅典、亞歷山大齊名的「大學城」。保羅在這樣一個充滿知識刺激的環境中長大，並在嚴謹的法利賽人家庭中接受了基礎的猶太家庭教育。隨後，他可能在青少年時期便被送往耶路撒冷，在當時最著名的律法教師迦瑪列 (Gamaliel) 門下，接受了最正統、最嚴格的法利賽人拉比教育。他生長的環境中交織著豐富的希臘文化元素與深厚的猶太信仰底蘊，這使得保羅成為一個在「兩個世界」中成長並游刃有餘的人：一個是他出生的種族與家庭世界，那是源自古老猶太教、強調律法與聖潔的世界；另一個則是在羅馬帝國統治下的希臘文化世界，那是一個充滿多元種族、宗教信仰、哲學思維和世俗生活習慣的世界。這種獨特的雙重背景，成為他日後能夠向萬民（特別是外邦人）傳講福音的最強大預備。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 030-032</span>
            </p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-indigo-700">
            <Compass className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">保羅的蒙召與使命</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>
              身為一名血統純正且受過嚴格訓練的法利賽人，根據保羅後來的自述，他曾經對祖宗的遺傳大發「熱心」(zeal)。這種熱心並非普通的宗教狂熱，而是源自於馬加比家族那種為了維護上帝的聖潔與律法，不惜使用暴力的傳統。這個熱心驅使他成為一個「逼迫教會的」狂熱份子，因為他認定宣告一個被釘十字架的罪犯為彌賽亞，是對上帝極大的褻瀆。就律法的義來說，他自認是「無可指摘的」（腓三6）。掃羅的迫害行為，完全來自於他對律法毫無妥協的熱心，因為對當時的他而言，這個律法就是界定一個人在上帝面前是否得以「稱義」、是否屬於神子民的唯一絕對界線。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 034</span>
            </p>
            <p>
              然而，在大馬色的路上，他經歷了生命中最具顛覆性的轉折——與復活的主耶穌基督相遇。當掃羅被強光擊倒，震驚地詢問：「主啊！你是誰？」時，復活的主回答：「我就是你所逼迫的耶穌。」（徒九5）復活的主這句震撼人心的自我宣稱，加上這神聖顯現臨到掃羅身上所造成他暫時眼盲的生理與心理衝擊，徹底粉碎了他過去的信仰框架，勢必讓掃羅重新、且痛苦地思考他引以為傲的「熱心」究竟錯在哪裡。對曾經的逼迫者掃羅來說，大馬色的經歷不僅僅是神學觀點的修正，更可以視為一種全人生命的死亡與重生。這樣的生命轉變，保羅後來在《加拉太書》中，將其歸因於神絕對的主權與恩典，說這是神「施恩召他」（加一15）。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 036-037</span>
            </p>
            <p>
              值得注意的是，保羅在回顧這段經歷時，並沒有單純把大馬色經歷視為一種個人宗教信仰上的「皈依」(conversion) 或改教。相反地，他使用了舊約先知（如耶利米、以賽亞）蒙召的語言，是以一種先知性的「恩召」(calling) 來理解這個過程。他將這次相遇視為一種明確且不可抗拒的使命呼召，其核心目的就是要將這位他所遇見的基督，啟示給那些在律法之外的人：「叫我把他傳在外邦人中」（加一16）。從此，逼迫者掃羅成為了外邦人的使徒保羅。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 037</span>
            </p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-indigo-700">
            <Book className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">保羅傳講的信息</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
            <p>
              保羅認識基督之後就加入基督徒團體，他傳講的主要內容是：「我所傳與你們的這位耶穌就是基督」（徒十七3），他甚至清楚地宣告：「這福音本是神的大能，要救一切相信的，先是猶太人，後是希利尼人。」（羅一16）
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 043</span>
            </p>
            
            <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">1. 「在愛子裡得蒙救贖」的「好消息」</h3>
            <p>
              保羅所傳講的核心就是，「在愛子裡得蒙救贖，罪過得以赦免」（西一14），而且這「福音」是「神從前藉眾先知在聖經上所應許的」（羅一2）。保羅所傳講的內容乃是有延續性的，這延續性的內容，也就是「福音」是普世需要的好消息，包括猶太人和外邦人在內。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 044-045</span>
            </p>

            <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">2. 福音是「神的義」</h3>
            <p>
              保羅在羅馬書一章16-17節明表達「福音」本身帶著能力，是「一種能力和能力的流露」，而這種能力所彰顯的就是「神的義」(the righteousness of God)（羅一17）。神稱人為義卻不是無條件地讓人稱義，神自己設立了一個救贖計畫，就是「設立耶穌做挽回祭，是憑著耶穌的血，藉著人的信，要顯明神的義」（羅三25）。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 048-051</span>
            </p>

            <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">3. 本於信，以至於信</h3>
            <p>
              保羅認為，神的義藉著基督完成的贖罪祭而彰顯出來。人能得到這個義是「本於信，以至於信」（羅一17），並且「因信耶穌基督加給一切相信的人」（羅三22）。「信」就是指人以信心對福音的回應，並且因為這個回應而得到神的救贖。保羅追溯亞伯拉罕因信稱義的歷史，說明「以信為本的人，就是亞伯拉罕的子孫」（加三7）。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 053-057</span>
            </p>

            <h3 className="text-lg font-bold text-slate-800 mt-6 mb-2">4. 律法的意義與價值</h3>
            <p>
              在保羅的眼中，「律法」究竟佔有何種地位呢？保羅對於「律法」的看法有一個核心的概念，就是「律法有所不能行的」（羅八3）。律法所不能行的是除掉罪，這樣做不到的事情被稱為律法的軟弱；但律法的軟弱不是因為它自己沒有能力，乃是因為肉體的緣故。
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 059-061</span>
            </p>
            <p>
              對保羅來說，舊約時代所頒布的律法，都是為基督做啟示，「律法的總結就是基督，使凡信他的都得著義。」（羅十4）律法「是我們訓蒙的師傅，引我們到基督那裡，使我們因信稱義。」（加三24）
              <span className="inline-block ml-2 text-xs font-mono bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">p. 066</span>
            </p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center mb-4 text-indigo-700">
            <Heart className="w-6 h-6 mr-2" />
            <h2 className="text-xl font-bold">延伸探討：兩個世界的交匯</h2>
          </div>
          <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100 text-slate-700">
            <div className="mb-4 text-sm font-medium text-indigo-700 bg-indigo-100/50 p-3 rounded border border-indigo-200">
              【延伸探討來源：參照湯姆．賴特 (Tom Wright)《再思保羅神學爭議》與 Beker《Paul The Apostle》對保羅蒙召與神學之探討】
            </div>
            <h3 className="font-bold text-indigo-900 mb-4 text-lg">兩個世界的交匯：神的主權、預備與福音的普世性</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-indigo-800 mb-2">一、 神的主權與背景的預備</h4>
                <p className="mb-2">
                  湯姆．賴特（Tom Wright）在探討保羅神學時深刻指出，保羅的神學並非憑空產生，而是在大馬色經歷後，在聖靈的光照下對其深厚的猶太傳統進行的重新詮釋。保羅的生命軌跡展現了神令人敬畏的主權與奇妙的預備：他同時具備了猶太律法學者的嚴謹邏輯、希臘哲學的思辨與修辭能力，以及羅馬公民在帝國中暢行無阻的特權。這三種截然不同的文化背景，在保羅歸信基督後，全數被神轉化為向外邦世界傳揚福音的強大武器。
                </p>
                <p>
                  這對現代基督徒帶來極大的安慰與啟發。我們時常會懷疑自己的出身、所學的專業，甚至過去在世俗中打滾的經歷是否對神國度有益。保羅的例子提醒我們，在神的主權下，沒有任何一段經歷是浪費的。神能夠使用我們在職場上訓練出的專業技能、在不同文化中培養出的適應力，甚至是我們曾經引以為傲但後來被神破碎的世俗成就，將其轉化為服事特定群體、傳遞福音的獨特管道。關鍵在於，我們是否願意像保羅一樣，將這一切「當作有損的」，完全降服在基督的主權之下。
                </p>
              </div>

              <div>
                <h4 className="font-bold text-indigo-800 mb-2">二、 從「宗教熱心」到「真理的知識」</h4>
                <p className="mb-2">
                  保羅早年對猶太律法極度熱心，甚至到了狂熱逼迫教會的地步。他的動機在當時的猶太教框架下是「神聖」的，是為了維護上帝的純潔與律法的尊嚴。然而，大馬色的強光讓他痛苦地意識到，這種缺乏對基督真正認識的「熱心」，實際上是在抵擋神、逼迫真理。
                </p>
                <p>
                  這個歷史教訓對今日的教會是一記震耳欲聾的警鐘。在現代教會中，我們同樣可能充滿了各種「宗教熱心」：熱心於推動龐大的事工、熱心於捍衛某種特定的神學立場、熱心於維持教會的傳統與秩序。但如果這些熱心沒有建立在對耶穌基督恩典的深刻認識上，沒有以基督的愛與憐憫為出發點，我們極有可能在不知不覺中，成為了現代的「法利賽人」，用律法主義的尺去衡量、定罪他人，甚至將那些真正需要福音恩典的邊緣人拒於教會門外。真正的屬靈熱心，必須是被十字架的愛所融化、被真理的聖靈所引導的熱心。
                </p>
              </div>

              <div>
                <h4 className="font-bold text-indigo-800 mb-2">三、 打破藩籬：福音的普世性與神的得勝</h4>
                <p className="mb-2">
                  神學家 J. Christiaan Beker 在其著作中特別強調保羅神學中「神的得勝」（The Triumph of God）這一末世論維度。保羅所傳講的「因信稱義」，不僅僅是個人靈魂得救的教義，更是一個具有宇宙性意義的宣告：神在基督裡已經戰勝了罪惡與死亡的權勢，並且打破了猶太人與外邦人之間那道看似不可逾越的血統與律法藩籬。在基督裡，不再分猶太人、希臘人，自主的、為奴的，所有信靠基督的人都成為了神家中的人。
                </p>
                <p>
                  這項真理強烈挑戰著今日的教會。在我們的教會文化中，是否也在無意間設立了某些「屬靈的割禮」？例如：要求初信者必須符合特定的中產階級生活方式、必須使用某種特定的屬靈術語、或是必須在政治與社會議題上採取某種單一立場，才能被群體真正接納？保羅的福音提醒我們，救恩的唯一條件是「本於信，以至於信」。教會必須不斷地自我省察，拆除那些人為設立的文化與階級隔閡，讓福音的普世性與包容性得以彰顯，使教會真正成為萬民禱告的殿與恩典的出口。
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
