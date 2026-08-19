import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book36Ch6() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    exploration: true,
    questions: true,
    practice: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-fuchsia-700 to-purple-700 bg-clip-text text-transparent">第六講</h1>
        <h2 className="text-xl font-semibold text-gray-700">為你的國家禱告（一）</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-fuchsia-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-fuchsia-50 to-purple-50 hover:from-fuchsia-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-fuchsia-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <p className="text-gray-700 leading-relaxed">
              妮塔一開場先禱告，求神將真理奇妙地分賜給學員，並在他們當中興起為列國禱告的代禱者。她說這一講要從創世記講到啟示錄，講解神如何看待「地裡無辜人血」的問題，列出一整組經文：創世記四章10-12節、九章6節，以賽亞書二十六章21節、五十九章3、7-9、14-16節，哈巴谷書二章10-14節，馬太福音二十三章29-36節，啟示錄十三章10節，並鼓勵學員回去仔細查考，因為這是為國家代禱的根基。
            </p>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">一、地裡無辜人的血——從該隱到挪亞</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔引用創世記四章8-12節該隱殺亞伯的記載，神對該隱說：「你兄弟的血，有聲音從地裡向我哀告……你必從這地受咒詛。」她解釋，流無辜人的血會為毀滅之靈開一扇門，使咒詛臨到當事人和他所居住的地土。她接著引創世記九章6節「凡流人血的，他的血也必被人所流，因為神造人，是照自己的形像造的」，指出這裡的原則是以命償命——不只是土地上的咒詛，更涉及以死亡交換死亡。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她引以賽亞書二十六章21節、五十九章7、9節，說明地上流無辜人血的後果是公義離開、黑暗覆蓋，「指望光明，卻行幽暗」。她分享自己觀察到的現象：近兩年許多代禱者向她反映，個人禱告時越來越難突破、越來越難親近神。她說神向她顯明一個異象——這片土地累積了太多無辜人的血，為邪靈打開門戶，在整個國家上空製造出幾英里厚的黑暗雲層，使代禱者難以領受亮光。她提到，在異象中看到一批新的邪靈臨到美國上空的時候，正是他們已為謀殺美國原住民的罪悔改兩年、卻還沒有為謀殺美國黑人的罪悔改的階段；當他們開始處理這部分的罪時，黑暗才開始被打破。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">二、「以人血建城」——哈巴谷書與美國歷史</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔引哈巴谷書二章10-14節：「以人血建城、以罪孽立邑的有禍了」，並將這節經文應用在她理解的美國歷史上。她描述，白人移民進入美洲後，屠殺了許多原住民部落——史實顯示大多時候並非印第安人挑起戰爭，而是白人一方口頭談和、夜晚卻突襲屠村，包括婦孺；她認為這是「以人血造城」的一種方式。她也提到跨大西洋奴隸貿易中非裔奴隸所受的暴行，以及十九世紀修築橫貫美國鐵路時，大量華工在惡劣待遇下勞動、傷亡慘重的歷史，將這些都視為「建造在無辜人血之上」的例證。她強調哈巴谷書所說「有禍了」這個詞，背後意味著極大的災難與神的審判。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她接著引馬太福音二十三章29-36節，耶穌對法利賽人說「叫世上所流義人的血，都歸到你們身上，從義人亞伯的血起，直到……撒迦利亞的血為止」，並提出「罪惡的杯」的概念：每個國家的罪惡會經過許多世代慢慢累積，當杯滿溢時，審判便會臨到。她認為，1998年前後美國的罪惡之杯已經幾乎滿溢，除了她所提到的歷史罪行，還包括墮胎與奢侈生活型態等問題；神雖多次差派復興暫時抑制這些問題，但問題總會捲土重來。她說，正是在這樣的背景下，主呼召她發起「鷹的聚集」（Eagles Gathering）這個代禱運動：1989年舊金山大地震之後，她相信神持續透過一連串天災向美國發出警訊；2001年，她說自己經歷了一次長達三小時的異象，耶穌告訴她若不推動這個悔改聚集，美國恐將走向戰爭而非復興。她也提醒，教會界常單單關注「按怎樣對待以色列來決定神給美國的祝福或咒詛」，但她認為美國所面對最大的審判根源，其實是對待原住民、非裔美國人、亞裔美國人以及未出生嬰孩的方式。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">三、審判的循環與三種出路</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔引啟示錄十三章10節：「擄掠人的必被擄掠，用刀殺人的、必被刀殺」，指出從創世記到啟示錄，神的原則是一致的——若一個國家建立在奴役他人之上，這個國家終將經歷某種形式的被擄。她引利未記二十六章40-42節、歷代志下七章14節、希伯來書十二章24節，提出當一個國家陷入未悔改的罪、審判循環一輪輪加重時，神留下的出路只有三種：第一是戰爭；第二是被逐出土地（她提到以色列歷史上多次應驗這個模式，年限與未悔改的年數成比例）；第三，也是她認為最盼望的選項，就是悔改。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她特別介紹「認同性悔改」（identificational repentance）的觀念，以先知但以理為例：但以理被神稱許為地上最公義的三人之一（與挪亞、約伯並列），卻仍在神面前為祖先和同胞的罪悔改，彷彿是自己犯的罪一樣。她指出，這種代替性、認同性的悔改觀念貫穿全本聖經，直到基督作為終極大祭司代所有人悔改，至今在神眼中仍然寶貴。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">四、神的憐憫——少數人的悔改醫治多數人</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔分享，「鷹的聚集」持續四年，參與悔改代禱的人數其實不多，只有數百到近千人，遠遠不及她估計歷史上受害人數的百萬量級，但她相信神的憐憫格外浩大——祂願意因著少數人的悔改而醫治整個國家。她特別強調：「流淚不會給美國帶來醫治……是復興醫治了這個國家，神是一切的動因」，眼淚只是為復興預備道路，恩典的來源始終是神自己。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她舉了一個具體例子說明代禱與自然災害之間她所理解的關聯：她觀察近年侵襲美國東岸的颶風路徑，注意到其生成點多在西非奈及利亞、貝南海岸一帶（她指出這正是歷史上跨大西洋奴隸貿易的起點），一路經過巴貝多、牙買加等曾是奴隸貿易重要據點的加勒比海島國，最終抵達美國東岸曾為奴隸制殖民地的地區。她認為颶風路徑與昔日奴隸船航線的高度重合並非巧合，而是「對奴隸問題的審判」在四百年後依然持續運作的徵兆，並提出「悔改能攔阻毀滅的靈」的呼籲——即便是小孩子的悔改禱告，也能使神從原本定意的審判中回轉。
              </p>
              <p className="text-gray-700 leading-relaxed">
                最後，她回到「不與神一致的禱告」這個伏筆，以摩西在西奈山上為以色列人代求為例：神說要滅絕百姓、另立一族，摩西卻在神面前反覆懇求「不、不、不」，堅持提醒神百姓是祂從埃及領出來的、是屬祂的百姓，直到神收回審判的心意。妮塔以此說明，代禱者有時蒙召在神宣告審判的話語前，效法摩西「不順著神當下所說的話禱告」，而是站在破口中為百姓懇求憐憫——這正是這一講留下、將在下一講繼續深入的主題。
              </p>
            </div>

          </div>
        )}
      </div>

      {/* 重點總結 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-sky-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">重點總結</span>
          </div>
          {expanded['summary'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['summary'] && (
          <div className="p-5 bg-white">
            <ul className="space-y-3">
              {[
                '從創世記到啟示錄，聖經一致教導「地裡無辜人的血」會帶來咒詛與審判——這是妮塔為國家代禱教導的神學根基。',
                '妮塔將美國歷史上對原住民的屠殺、跨大西洋奴隸貿易、華工修築鐵路的苦難，理解為「以人血建城、以罪孽立邑」的具體例證。',
                '當一個國家的罪惡之杯滿溢，神留下的三種出路是戰爭、被逐出土地、或悔改——悔改是其中唯一能帶來醫治而非審判的選項。',
                '「認同性悔改」（如但以理為祖先與同胞的罪悔改）是貫穿聖經的觀念，代禱者可以不是加害者本人，仍能代替性地在神面前悔改。',
                '神的憐憫格外浩大：即便只有少數人願意悔改代禱，神也願意因此醫治整個國家——流淚本身不能帶來醫治，醫治的動因始終是神自己。',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-gray-700 leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* 延伸探討 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('exploration')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">延伸探討</span>
          </div>
          {expanded['exploration'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['exploration'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">將特定天災（如颶風路徑）直接歸因於歷史罪行的審判，是否是唯一合理的解釋？</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔提出颶風路徑與奴隸貿易航線重合、以此作為「持續審判」證據的觀察，是一種在靈恩／代禱運動傳統中常見的「屬靈製圖」（spiritual mapping）解釋方式，但這類將具體自然現象與特定歷史罪行一一對應的因果推論，在聖經詮釋學和自然科學上都存在爭議：颶風的生成路徑主要由信風、洋流溫度、科氏力等氣象學因素決定，與歷史航線的地理重合，也可能只是因為兩者都受同樣的大西洋地理條件（洋流、風向）影響，未必是因果關係。讀者可以帶著開放但審慎的態度看待這類敘事——聖經確實教導罪與審判的關聯（如利未記26章的審判循環），但將特定天災事件精確歸因於特定歷史罪行，屬於個人的默示與解讀，不宜等同於聖經明文的教導，也不宜作為評斷天災受難者道德責任的依據。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「認同性悔改」的神學定位與適用範圍</h4>
              <p className="text-gray-700 leading-relaxed">
                「認同性悔改」是近幾十年在靈恩派代禱運動中逐漸系統化的概念（常與 John Dawson、Cindy Jacobs 等人的著作連結），以但以理、尼希米在被擄期間為祖先與民族的罪代禱為聖經根據。這個概念在教會界確實存在不同看法：支持者認為這是活出「身體連結」與謙卑悔改的具體操練，批評者則擔心若操作不慎，可能演變成一種脫離個人責任的象徵性儀式，或被用來對特定群體進行道德施壓。讀者若想操練這樣的禱告，或許可以把重點放在妮塔強調的核心——謙卑、憐憫、渴望神醫治群體傷痛的心，而非糾結於歷史責任歸屬的細節論斷。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">摩西「與神爭辯」的代禱模式，對今日代禱者的啟發與界限</h4>
              <p className="text-gray-700 leading-relaxed">
                摩西在出埃及記三十二章為以色列代求、甚至懇求神「塗抹我的名」的故事，常被引用作為代禱者「站在破口中」的典範（參以西結書二十二章30節）。這種禱告展現的並非抵擋神的旨意，而是效法神自己憐憫的心腸，向神懇求憐憫勝過審判——這與雅各書五章16-18節「義人祈禱所發的力量是大有功效的」相呼應。讀者操練這樣的代禱時，可以留意妮塔自己的提醒：這是特殊蒙召時刻下的回應，並非鼓勵人隨意「與神爭論」或抗拒神清楚啟示的旨意。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 反思問題 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">反思問題</span>
          </div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && (
          <div className="p-5 bg-white space-y-3">
            {[
              '你所屬的國家或民族歷史上,是否也有類似妮塔所提「建立在不義之上」的傷痛歷史？你曾為此代禱或悔改過嗎？',
              '「認同性悔改」對你而言是陌生還是熟悉的概念？你認為這樣的禱告，對今日的群體和解可能帶來什麼幫助？',
              '妮塔說「流淚不會帶來醫治，是復興醫治了這個國家」。這句話如何提醒你，代禱的焦點應該放在神身上而非自己的情緒表現？',
              '面對將特定天災與特定歷史罪行直接對應的解讀方式，你會如何在「相信神掌管歷史與審判」和「避免武斷歸因」之間拿捏？',
              '摩西在神面前為百姓「爭辯」的故事給你什麼啟發？你是否曾在禱告中，效法他「懇求神的憐憫勝過審判」？',
            ].map((q, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0">{i + 1}.</span>
                <p className="text-gray-700">{q}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 具體實踐方針 */}
      <div className="mb-6 border border-green-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('practice')} className="w-full px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">具體實踐方針</span>
          </div>
          {expanded['practice'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['practice'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📜 查考本講引用的完整經文</h4>
              <p className="text-gray-700 mb-2">利用一段安靜的時間，通讀利未記二十六章全章，以及創世記四章、九章，哈巴谷書二章，馬太福音二十三章，體會聖經中「罪與地土」「審判循環」的完整脈絡。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🕯️ 為自己國家或民族的歷史傷痛代禱</h4>
              <p className="text-gray-700 mb-2">
                誠實面對你所屬國家或群體歷史上曾發生的不義（不論是加害或受害的一方），用一段安靜的時間在神面前謙卑代求，求神帶下醫治與和解，而不急於評斷歷史責任的歸屬。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，我們承認人類歷史上一代又一代累積的罪惡與傷痛，求你光照我們生命與群體中尚未被承認、尚未被醫治的傷口。求你興起像但以理一樣謙卑代禱的人，也求你的憐憫勝過審判，使各地都能因著少數人的悔改，經歷你奇妙的醫治。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
