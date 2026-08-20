import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book37Ch1() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-fuchsia-700 to-purple-700 bg-clip-text text-transparent">第一講</h1>
        <h2 className="text-xl font-semibold text-gray-700">神賜下復興的目的</h2>
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
              妮塔開場宣告，神已經預備好要在華人教會裡做驚人偉大的事，不僅是眼前這間教會，而是所有的華人教會；祂要帶來一個新的季節、新的面貌。她說這一講要談，為什麼我們渴望復興、為什麼神樂意賜下復興。她先做了一個小調查：有多少人渴望復興，渴望到願意為此付上改變的代價？她用剛生產的母親作比喻——生活從此完全被孩子的需要重新安排；復興也是如此，會改變一個人的生命、思維方式、渴望與計畫。她半開玩笑地問：如果復興意味著原本睡8小時、現在只能睡6小時，因為要用2小時禱告，你還願意嗎？藉此點出神在鑒察人心中對復興的渴望有多真實、多有彈性。
            </p>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">一、神樂意賜下復興——呼召教會進入聖潔</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔引阿摩司書三章3節「二人若不同心，豈能同行呢」，指出真實的復興總是呼召我們進入聖潔——與神同心才能與祂同行。她說，人越聖潔，就越能領受基督的啟示，越能與神親密同行，也越剛強完全；而神為了使人聖潔，必須先醫治人的傷、使人從罪中得釋放。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她回顧美國歷史上一場她出生前後發生的「聖潔運動」：當時的傳道人常常講論聖潔，但聖潔變成了必須遵行的律法——不看電影、不喝酒、不抽煙、不跳舞，藉此證明自己是基督徒；卻沒有教導聖潔其實是與神的親密關係、是神親自做在人裡面的工作。她說，這場運動最終完全崩潰，因為裡面沒有愛，只有律法、律法、律法，參與者活得並不快樂，總覺得永遠達不到神的期望，很少涉及與神的關係。她鄭重表示，神對重複那樣的運動毫無興趣，也無意把教會帶入更深的捆綁——真正的聖潔，是從與神愛的關係中自然帶出來的：當一個人的心真實向著神，神會讓他為不當的事知罪，在不聖潔的事上感到不自在，分別為聖成為一種甘心樂意的渴望，而非外加的律法。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">二、對復興的錯誤認識——神跡奇事不等於復興</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔指出，神賜下復興，首先是為了塑造一個聖潔、剛強得勝的教會——我們蒙召是為了得勝而非被征服。她說，今天許多人對復興有錯誤的看法（這個誤解在靈恩運動興起之前就已存在）：以為復興就是醫治、釋放與神跡奇事，同時又能按著自己喜歡的方式生活。她回顧大約70、80年代一場復興運動的完全崩潰，原因是許多領袖活在不聖潔中，百姓也隨之效法。她強調，若復興中只有這些外在現象、卻沒有神更高的心意，那只是最初級的復興層次——即便未信主的人、或新世紀運動的參與者，也可能在他們的聚會中看到醫治與神跡；因此醫治、神跡、奇事其實只是神用來引起人注意、捕獲人心的手段，真正的目的是要藉此召喚人進入祂的聖潔。她引彼得前書一章15-16節：「那召你們的既是聖潔，你們在一切所行的事上也要聖潔……你們要聖潔，因為我是聖潔的。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">三、主向她啟示祂的聖潔</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔分享自己初信不久的一次經歷：她在房間裡繞圈敬拜神的聖潔，神的聖潔逐漸湧入房間，強烈到她連「聖潔」這個詞都不敢說出口，只能持續走動、心裡默默敬拜，直到全身開始顫抖，連行走都變得困難。突然耶穌基督進入房間，身上披戴著聖潔，她俯伏在地，如同離水的魚一般劇烈顫抖，久久無法用言語與主說話，只能在心裡說：「神呀，我是那樣愛祢，但我又那麼懼怕祢……我怕一開口我就死了，因祢是那麼聖潔。」耶穌後來幫助她，讓她能用靈而非用口與祂交談。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她說，在那一刻她清楚知道，自己面對的是掌管宇宙萬有的神，祂的聖潔絕對、真實，正因祂是聖潔的，一切受造物才得以存活；祂的聖潔充滿榮耀、能力、敬畏，也充滿愛。那次經歷後好幾週甚至幾個月，每次回想起，她仍會忍不住顫抖——她意識到，儘管自己是愛神、天天花時間禱告的基督徒，但因著人被造有罪的本性，那一刻讓她清楚看見神的聖潔與人性之間何等巨大的差距。耶穌臨走前對她說：「時候將到，有一天我要帶著這樣的同在臨到我的教會，就像今天我向你所做的。」她理解，主的目的是要使人謙卑，提醒人「你屬於我，不屬於世界」；當主說「你要聖潔，像我一樣聖潔」，真正的意思不是給一堆規條，而是「我要你如此靠近我，以至於我可以把我的本性分賜到你裡面——當我的本性充滿你，你就變得剛強得勝，我就能藉著你做偉大的事」。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">四、神賜下復興的目的——得著聖潔的新婦</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說，神賜下復興的目的，就是要得著祂的新婦，使她聖潔，把她做成祂自己的形像，讓世界知道耶穌基督已經來了。她提醒，教會與世界、與邪教和其他宗教的分別，並不在於能力或醫治——摩西在埃及所行的神跡，埃及術士也能倣效，超自然能力本身不是復興的標記。神的確會藉神跡來吸引人的注意力、透過醫治彰顯憐憫，使人開始渴慕祂，但唯一能真正把教會與世界分別開來的，是教會行走在聖潔中、活出耶穌基督的本性與特質。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">五、神在復興中使用她——兩次大復興的見證</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔分享神曾兩次在大能的復興中使用她。第一次復興發生在她剛起來服侍不久：在愛德華州北部一個婦女團契中，神向她揭示一位姊妹兒子所犯的具體罪，她當場叫出這位母親、轉述神所啟示的內容，這位母親激動落淚；消息傳開後，她受邀到另一場更大的聚會服侍，神的榮耀降臨，帶出許多神跡——肢體扭曲、心智受損、耳聾的人得醫治，甚至不識字的人瞬間能讀能寫。她描述一個從小穿著脊椎矯正支架的男孩，禱告後脫下支架便能自行走路；兩個分別2歲、3歲、身患多種嚴重疾病、從未走過路的孩子，在聚會中突然站起來、走了九步；一位出獄不久、曾拜撒旦教二十年、二十年未曾流淚的弟兄，在禱告中經歷神的愛觸摸而嚎啕大哭，並在隔天見證中表示自己已接受耶穌為救主。她特別提到，這些醫治大多不是靠她按手促成，而是神在祂主權裡親自做成的，她認為這是更好的方式，能讓人知道是神醫治了他們，而非高舉她個人。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                第二次復興發生在她於聖經學院服侍期間：她連續多日在生產式禱告中看見一個嬰孩逐漸從產道往下移動的異象，直到某天晚上聚會中，她聽見一陣如海浪般的風聲，隨即火焰爆發，她感覺自己全身像著了火，聖經學院校長也同樣經歷「著火」的感受。她描述會眾在神大能中如骨牌般接連倒下，許多肩頸、腰背問題得醫治，包括一位牧師頸背的醫治，以及一位患小兒麻痹症、雙腿萎縮彎曲的姊妹，在她簡單的禱告後雙腿當場長寬、長肉、關節伸直，恢復成兩條健康的腿。她說，那段時期常有人被提到天上、看見異象，神以各樣方式建造祂的教會；但她坦言，這樣的恩膏她後來卻失去了，因為自己犯了一些嚴重的錯誤——不需要犯性或道德上的罪，也可能因為沒有培養出能盛載那樣權柄的品格，而失去恩膏。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">六、失去恩膏的主要原因</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔指出失去恩膏最主要的原因：不應有的愛——愛錢財、愛異性或同性（不道德的關係），以及竊取神的榮耀。她特別提醒，神呼召人單單屬於祂、成為聖潔；當神把祂的榮耀彰顯在一個人身上做工時，若這人竊取了那本該單單屬於神的榮耀，就會陷入嚴重的麻煩——任何時候，當一個人的心接受了旁人「你太棒了」這樣的稱讚而暗自竊喜，就已經觸摸了神的榮耀。她鼓勵，被稱讚時應當立刻說「讓我們把榮耀都歸給耶穌，這並不是從我來的」。她也分享自己牧師曾提醒她：很多像她一樣被神大大使用的人，正是因著貪愛錢財的心、竊取神的榮耀，或陷入不道德，導致「如何快速進入榮耀，也如何快速跌倒」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她也分享自己親身的教訓：當年因著服事需要上電視、電台，會眾開始期待她穿著更昂貴、更有「檔次」的衣服，她當時年輕無知，便相信了這樣的說法，開始追求更講究的穿著打扮——她坦言，正是這件事讓她失去了恩膏與神的榮耀。她鼓勵大家一起說：「聖潔就是單純，沒有單純就沒有聖潔。」她也分享曾造訪一間裝潢極其華美的教會，神告訴她：那裡的聖靈曾大大運行、復興曾被澆灌，但後來教會把錢花在極奢華的事上，服事者開始被過度高舉、逐漸驕傲、陷入罪中，神就把祂的同在從那間教會挪走——「今天你在這個教會所看到的，是我的榮耀提走後所殘留的。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                妮塔在這一講結尾強調，過聖潔的生活，隨之而來的就是悔改的生活——當神的手指輕輕觸摸人心，不論所犯的錯有多微小，都應當立刻說「神呀，對不起，請祢原諒我」，並在那個領域努力不再犯同樣的錯。悔改應當成為一種持續的生活形態，聖潔便會隨之持續增加，使人能與主同行在更高、更有能力的領域中。這一講的結尾，她帶領會眾一起俯伏禱告，特別求神在聖潔中帶領眾人、教導眾人什麼是真實的謙卑。
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
                '真實的復興首先呼召教會進入聖潔，而聖潔的本質是與神親密的關係，不是外加的律法規條——沒有愛與謙卑的「聖潔運動」終將崩潰。',
                '醫治、神跡、奇事不等於復興本身，而是神用來吸引人注意、引導人渴慕祂聖潔的手段；教會與世界真正的分別，在於是否活出耶穌基督的本性。',
                '神賜下復興的終極目的，是要得著一個聖潔無瑕的新婦，把她塑造成自己的形像，讓世界知道耶穌基督已經來了。',
                '失去恩膏最主要的三個原因是：貪愛錢財、不道德的情慾關係、竊取神的榮耀——即便只是心裡默默接受了不該接受的稱讚，也可能觸犯神的榮耀。',
                '悔改應當成為持續的生活形態：每當神的手指觸摸人心，就當立刻承認、迅速回轉，讓聖潔在生命中持續增加。',
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
              <h4 className="font-semibold text-gray-800 mb-2">如何看待這一講中大量密集的神跡醫治見證？</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔本人在這一講中已明確指出，神跡醫治不等於復興本身，只是引起注意的手段——這個提醒對讀者理解整段見證的份量很重要。閱讀這類第一手見證時，可以把重點放在她想傳達的核心信息（聖潔優先於能力），而非糾結於每個醫治細節的可驗證性；聖經本身也提醒，「假先知將要起來，行大神蹟大奇事」（馬太福音二十四章24節），神跡本身從不是分辨真偽的唯一標準，教導是否合乎聖經、生命是否活出聖潔的果子，才是更穩妥的判準。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">歷史上「聖潔運動」的教訓，對今日教會有何提醒？</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔描述的聖潔運動（Holiness Movement）確實是十九世紀末至二十世紀初美國衛理宗傳統中真實發生過的運動，後期部分支派確實出現過度律法主義化的傾向。這個歷史教訓提醒我們：任何強調外在行為規範（不看電影、不跳舞等）卻缺少「與神親密關係」根基的信仰操練，都容易流於外在的表演與壓抑，而非生命真實的改變。加拉太書五章22-23節提醒，聖靈的果子（包括節制）是從裡面自然結出的，而非靠外在律法勉強達成。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「竊取神的榮耀」與健康的肯定、鼓勵之間如何拿捏？</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔對「接受人的稱讚」提出嚴厲的警告，這與哥林多前書四章7節「你有什麼不是領受的呢？若是領受的，為何自誇，仿佛不是領受的呢」的教導相呼應。但讀者也需留意，健康地肯定他人的付出、給予合宜的鼓勵，與「驕傲自恃、暗中竊喜」是不同的兩件事——保羅在书信中也常常真誠稱讚同工的付出（如腓立比書二章25-30節稱讚以巴弗提）。分辨的關鍵或許在於：稱讚是否讓人心裡把焦點從神身上移開、開始倚靠自己的形象與名聲，而非稱讚這個行為本身。
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
              '如果復興意味著你的作息、時間安排都要因禱告而重新調整，你願意為此付上多大的改變？',
              '你過去對「聖潔」的理解，比較接近一套外在的行為規範，還是與神親密關係自然流露的結果？這一講對你有什麼提醒？',
              '你是否曾經歷過「渴望神跡奇事發生」勝過「渴望認識神本身」的心態？回顧那段經歷，你會如何重新看待？',
              '「竊取神的榮耀」對你而言，最容易發生在哪些具體的情境中（服事被稱讚、事業有成就、才幹被欣賞）？',
              '悔改成為一種持續的生活形態——你目前的生活中，是否有一件小事，是神已經溫柔地觸摸提醒、卻還沒有被你認真回應的？',
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
              <h4 className="font-semibold text-green-700 mb-2">🪞 檢視「三個領域」的心</h4>
              <p className="text-gray-700 mb-2">誠實檢視自己在錢財、情感關係、被稱讚時的內心反應，寫下你認為自己最容易受試探的一個領域，並帶到神面前禱告求祂保守。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙌 操練「立刻歸榮耀給神」</h4>
              <p className="text-gray-700 mb-2">
                下次被稱讚或肯定時，練習當下就在心裡（或口中）把榮耀歸給神，觀察這個小小的操練如何幫助你保持謙卑的心。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✅ 建立每日快速悔改的習慣</h4>
              <p className="text-gray-700 mb-2">
                本週練習：每當意識到自己說錯話、動了不對的念頭，不拖延、不合理化，立刻在心裡向神說「對不起，請祢原諒我」，並具體求祂幫助你在那件事上不再犯同樣的錯。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，我渴望復興，也願意為此付上改變的代價。求你光照我生命中一切竊取祢榮耀的心，赦免我曾經接受不該接受的稱讚。求你使我在聖潔中被祢建造，教導我什麼是真實的謙卑，使我能承載祢要賜下的恩膏，一生持守，不失落。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
