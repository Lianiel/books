import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book34Ch16() {
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
        <p className="text-cyan-700 font-semibold tracking-wide mb-1">第五篇　長大成人</p>
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-700 to-teal-700 bg-clip-text text-transparent">第十六章</h1>
        <h2 className="text-xl font-semibold text-gray-700">學習長大成熟</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-cyan-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-cyan-50 to-teal-50 hover:from-cyan-100 hover:to-teal-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-cyan-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <p className="text-gray-700 leading-relaxed">
              學習長大成熟不是一件容易的工作。而當你已經擁有成人的身體，再去學習做一個成人，是更困難的事情。但這是從別人的權柄之下出來的必經步驟。
            </p>
            <p className="text-gray-700 leading-relaxed">
              湯馬斯·梅頓（Thomas Merton）說：「除非我有成熟、謹慎的良知，我無法做好的選擇。良知給我正確的動機，正確的意圖，及道德的行動。最重要的字是成熟。嬰兒依照別人的態度做決定。這種不成熟的良知是部分，或者全部按照別人的決定做決定的。所以這只能代表別人的良知。它不是自己的主人。」以下是一些在神之下做你自己主人的技巧，以致我們長大成熟。
            </p>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">一、長大成人的技巧</h3>

              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">信仰的重估</span>——我們需要重估我們所信的是什麼。傳統的信仰需要以成人的信心取代。我們必須想想為什麼我們這樣想，為什麼我們這樣相信。是我們真的相信還是別人告訴我們如此相信。我們必須分辨什麼是傳統的信仰，什麼是真正對神的信念，對神話語的堅信與我們的經驗。這種存疑的時間可能會持續一陣子。但經過之後，我們會發展出自己的信念。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">對權威可以不同意</span>——我們對別人不贊同時，要對自己誠實。通常人會對權威不贊同，但他們害怕承認這種不贊同，也不敢說出這種不贊同。如果你所在的團體，不允許你表達對灰色部分的不贊同，就要小心了。這可能有異端的性質。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                允許自己自由思考，不要因為自己的意見覺得自己不好。沒有人永遠是對的，每一個主題都要經過討論修改才會成形。說出你的意見，然後聽取批評。說出來會幫助我們修正看法，或幫助別人修正看法。不贊同是健康的，「鐵磨鐵磨出刃來」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">以實際的眼光看父母和權威</span>——將父母或權威從你所擺的高高的位置上請下來。看他們的優點和缺點。看看你不同意他們想法和看法的地方。既然不可能什麼都同意，想想有誰是你什麼都同意的，也許你從來不知道其實你常常不同意別人，或者你發現自己是個阿諛奉承的人。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                承認我們父親或者祖先所犯的罪，然後饒恕他們。如果你把父母理想化，你就是與他們的罪有份，你可能成為他們的樣式。我們不要贊同壞的模式，我們要稱那些模式為罪，並與他們有所分別。想想聖經中的英雄，以及他們的軟弱，正如希伯來書指出的，他們也和我們一樣是人。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">做自己的決定</span>——如果你生命中一直有人告訴你怎麼想，怎麼做，買什麼，你要開始自己做決定。你是一個成人，為自己思想和行動。若有人不同意你所買的有什麼關係？這是你的錢，你怎麼用全在乎你和神。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                任何人告訴你「你應該」買這不買那，讀這不讀那，參加這不參加那，都是在扮演你的父母。給別人勸告，回應或面對面談問題都是好的，但是試圖做別人的父母是不好的。你要避免那些企圖奪取你身為神兒女擁有的自由的人，以及想做你父母的人。記住保羅所說的：「但從前你們不認識神的時候，是給那些本來不是神的做奴僕，現在你們既然認識神，更可說是被神所認識的，怎麼還要歸回那懦弱無用的小學，情願再給他們做奴僕呢？」（加四：8、9）這些律法、權威、規條都不是神。因此你可以聽這些意見，但不必決定一定要遵行。你只有一位神，聽他的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">操練不同意別人</span>——如果你在這方面有掙扎，你生命中大概不缺這種人了。在你長大的過程中，也許沒有機會操練不同意別人，但現在你可以好好操練了。你不同意，然後決定不去做人以為神所要求的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                小心有人想要扮演父母的角色，他們說你應該怎麼想。你不必對他們不客氣，只要說：「我明白你的意思，但我有不同的看法，我認為……」這是很普通的對話，也許你覺得聽起來不禮貌，因為你以往不曾試過。對那些想在你生命中扮演神的角色的人，或是你很看重的人，你必須學習與他相等。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">處理你的性生活</span>——如果你對性的事情總覺很尷尬，你的父母可能仍然高高在上看著你的一言一行，或你覺得如此。你必須教育自己，將性看為很美好的事，不再用一種禁止的態度對待之。如果你仍然覺得羞恥，你可能還在青少年的階段。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                要對自己的身體熟悉，保護愛惜。你也許要對一個可信靠的人談談性的問題。使從小得到的印象改變，小孩子不准談性，但成人可以，因此不要悄悄的談，可以光明正大。此外，對你自己性的感覺要越來越敏銳。這在正常的情況約發生在十三歲。如果你壓抑感覺，你可能同時也制止了其他成人的功能。這都是互相影響的。就如你壓抑意見時，性的感覺和創造力也會受壓抑。有一位病人重新獲得性的感覺，是在花了幾個星期理解她對上司有意見之後。她對女性權柄有壓抑感，這使得她其他方面也受壓抑。你不可能只壓抑一方面，通常許多方面都受影響。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">允許自己與父母平等</span>——許多權柄問題的核心在於不能擔負相同性別父母所扮演的角色。你要不就是不喜歡父母扮演的角色，要不就是怕把這角色攬過來。兩種情形都是我們天生要面對的功課。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                看看父母如何扮演，感激他們成功的地方，在他們失敗之處，選擇其他的榜樣。這會幫助你從小孩變成大人的轉換過程。此外，看看你為何害怕奪取他們的地位。很多人害怕經歷青少年期，因為他們不想將相同性別的父母從王位上降下來。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">對才能的認知和追求</span>——長大成人，必須擁有及認識神所給的才能和恩賜。你也許知道神給你的一些恩賜，神要你去發展，但你把它埋藏在地底下。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                要發展恩賜，你必須做一些事。也許是上一些課，找一位老師，或做一些研究。重要的是，你正在發展它。如果你不知道你的恩賜是什麼，求問神。他會告訴你。同時也要詢問別人看到的，通常我們不會看到自己的長處。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">操練</span>——操練對發展才能恩賜十分重要。在不能自由操練的方面，你很難擁有權柄和專精。讓自己可以失敗。沒有一個人可以不經過試驗和失敗而成為專家。不論管理家庭、籃球、企業、個人財務、教導、聖經註釋、或養育孩子，都需要練習，才能發展技術。要成為獨立自主的人，練習是非常重要的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                開始去做，失敗了，一笑置之，再做一次。學習重視過程超越結果。將工作的意涵及產品都一起變成我們內在的一部分。只注重結果的人通常不會享受自己的才能。學習去享受你的才能恩賜，因為你需要花很長的時間操練。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">體認成人的特權</span>——當我們明白受人管理並不自由，而神並不要我們凡事尋求人的允准，我們就會體認成人的自由是多麼可貴。繼續停留在孩子階段是很安全，比人替你想好所有的事，你所失去的只是自尊。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                成人有自由去選擇他們的才能、價值觀、信仰、與神的關係、嗜好、朋友、教會。他們也可以表達自己，像感覺、性的需要，不必有恐懼、壓抑、或別人的同意。他們可以做自己。正如保羅在加拉太書四章一節說，孩童是全業的主人，但沒有自由去享用。成人可以。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">使自己有紀律</span>——成人會管理自己。箴言說：「你去查看螞蟻的動作，就可得智慧。螞蟻沒有元帥，沒有官長，沒有君王，尚且在夏天預備食物，在收割時聚斂糧食。」（六：6-8）螞蟻不在任何官長君王的權柄之下，卻為自己負責任。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                如果在長大的過程中缺少紀律，你現在需要學習。找一個好朋友向他負責，你們可決定若不做某種需要紀律的事，會有某種後果。有一次我決定若不運動就得付錢給朋友，我需要結果來使我行動。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">對惡事有權柄</span>——聖經告訴我們「務要抵擋魔鬼，魔鬼就必離開你們逃跑了。」（雅四：7）耶穌也說他給我們權柄可以命令邪靈出去。神的話和耶穌聖明的能力，足以讓你捆綁邪靈。如果你不知道怎麼做，也許在某一時候你需要學習屬靈爭戰的功課。我們要征服惡者的國度。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">能自由順服別人</span>——長大成人的重要特性之一，在於能在愛中順服別人，而沒有權柄的衝突。這包括對政府、配偶、朋友、惡人、上司和神。當我們在愛中順服，我們表現了我們的自由選擇；如果我們只是屈服，那並非真正的順服，那像是奴隸一般（羅十三：1；弗五：21；太五：39；彼前二：18、19；來十三：17；雅四：7）。當我們順服別人正如神所定規的，我們是在確認自己的身份。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">行善</span>——「我們原是他的工作，在基督耶穌裡造成的，為要叫我們行善，就是神所預備叫我們行的。」（弗二：10）你是神手中的工作；是神有目的的創造。正如亞當被創造是要管理看守園子，你也有神創造的目的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當你與神同工，找出你的恩賜並發展它們，尋求他要你行的善是什麼。不一定是恢宏大業，你的行善可能是作你鄰居與神之間的橋樑，做家庭主婦，或在班上與人建立關係，也可能是奉獻時間去孤兒院或幫助一些家庭。重點是：你有一些專精的方面，使用它行善，可以幫助你實現成人的角色。如果你正處於被建立的階段像保羅一樣，神將你放在一邊醫治你、建立你，給神時間讓他來做。不要想你要快快去拯救世界。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">不做法利賽人</span>——我們都有參與的律法主義思想，以及需要父母批准的傾向。注意你還有哪些方面在尋求人的允准，以期覺得自己沒問題。在你的信心中找找有沒有需要放手之處，是否你仍然企圖賺得別人的誠實，這樣只會吞食你的心靈。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">欣賞隱秘未知之事</span>——權柄有問題的人不能忍受隱秘未知之事。他們每一件事都需要答案。耶穌想把法利賽人從這種侷限中搖醒。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神在很多方面都是何其難測的（羅十一：33、34）。他是如此豐富、偉大，我們越認識他，就越體會我們其實不認識他。這也是敬拜的開端。開始去欣賞你不明白的事，感激它、讓它去。這是為什麼我們尊他為神。如果你對他每件事都清清楚楚，那麼他就不是神；你是。這是最嚴重的權柄問題。敬拜他的不可測度，從非黑即白中出來，「我們有一切的答案」這種態度，使神侷限在一個盒子中。他遠超這一切。
              </p>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">欣賞和愛不同的人</span>——人常常看別人不如自己，因為他們要在父母面前做一個比較好的孩子。當你能欣賞和你不同的人，你已經停止像孩子一般的手足爭執，而開始與成人的弟兄姊妹站在平等的立足點。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">二、莎拉的故事</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                當莎拉來我們診所時，她充滿了焦慮。她被年長的同儕控制，害怕得不到贊同，在性方面也不得滿足。她浪費生命去取悅他人而沒有結果。她不能享受與丈夫或同儕平等的關係，她總是在一個從屬的地位。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                莎拉的問題來自童年：「我父母很嚴格，他們老是要我表現最好的。我母親個性很強，她告訴我做什麼、怎麼做。當我照著去做以後，她總能找出可批評的地方。我不能為她作對任何事。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                莎拉的母親從來不讓莎拉決定自己想做什麼，或以自己的步調操練一些事。她母親也不認為失敗是通往熟練的正常過程。當她成為青少年，想拓廣自己的興趣，她母親變本加厲，甚至想控制她參加的課外活動。莎拉的父親與她保持距離。他並不反對莎拉母親的話，但是他自己也不給什麼贊成的話。事實上，他也批評莎拉，覺得她沒有發揮潛力。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                莎拉在大學時信了耶穌。她加入一個嚴守紀律的基督徒團體，她因為對父母已習慣順服，所以她也對此團體的領袖持相同態度。她從不表達自己的想法或願望，尤其她感覺別人會不贊同她的時候。當她婚後仍採取相同的態度，她做任何可能的事去取悅她的完美主義丈夫。結果就是他和自己的感覺及願望越來越沒有接觸。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                由於她不被准許追求自己的興趣、發表意見，而且她也從未公開反對母親，她在發展上仍然是個小孩。她無法和其他成人發展出同儕的關係，因為她從未變成成人。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當莎拉了解自己的背景，她開始在自己身上下功夫。她定期和有相同問題的人見面。她們不是互相做別人的父母，而是給對方回應和支持。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                然後莎拉開始改善與父母的關係。她父母住在附近，因此她有很多機會改變她們相處的模式，她不再一味的討好他們，她會說：「我瞭解你會這樣做，但我想我會這樣做。」有幾個月之久，她母親無法面對這樣一個「叛逆的」四十歲的女兒。但最後她理解到莎拉這輩子不會再一味取悅她了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                莎拉也開始在別的事上表達意見。在一個夫婦的查經團體中，她有時候會不同意帶領者的意見。她也開始選一些和她屬靈領袖品味不同的衣裳。當一些完美主義者在她周圍說她該這樣那樣，她不管他們，只做自己覺得最好的選擇。漸漸地，他們在她身上的影響力減少了。她將他們看為跟她一樣不完美的人。就算他們強力將自己的主張套在她身上，她不會讓自己的生命按照別人的希望去活。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她的內心也在爭戰，就像外在一樣。她學習對心內的「父母」回嘴。她心內的父母逼她成為完美。她也學習在「不順服」的大帽子下生存。一段時間之後，裡面的聲音沉寂了，她也變得不這麼焦慮了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她也開始發展自己的才能。當她害怕失去，她提醒自己，她的父母並不完美，他們不能控制她的生命。漸漸地，她能接受失敗，將之看為學習過程中的正常情形。她也要面對在內心中，所有父母形象為了控制她，使她產生的憤怒。當她不再因為他們的批評責怪自己，她看見他們的驕傲。當她不再向他們的權柄低頭，她的怒氣就消散了。
              </p>
              <p className="text-gray-700 leading-relaxed">
                最後，這種和別的成人平等的地位，也改善了她和丈夫的性關係。她更能表達什麼事她喜歡、什麼不是。她讓自己不那麼壓抑，不這麼擔心丈夫的不贊同。她新增的力量使丈夫不再要求這麼多，她自己也變得更有反應。長大成人需要很長的時間、禱告、和努力。但最後莎拉得勝了。從一個四十歲的小女孩裡面，神使一個成人長大。
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
                '湯馬斯·梅頓提醒我們：不成熟的良知是按照別人的決定做決定，只能代表別人的良知，不是自己的主人；長大成熟就是發展出屬於自己的、成熟謹慎的良知。',
                '本章列出近二十項具體的長大技巧：重估信仰、對權威可以不同意、以實際眼光看父母和權威、做自己的決定、操練不同意別人、處理性生活、允許自己與父母平等、追求並發展才能、操練、體認成人特權、使自己有紀律、對惡事有權柄、能自由順服別人、行善、不做法利賽人、欣賞隱秘未知之事、欣賞和愛不同的人。',
                '「不贊同是健康的」——鐵磨鐵磨出刃來，健康的關係允許彼此表達不同意見，而非要求全然一致。',
                '真正的順服（在愛中的自由選擇）與屈服（出於懼怕的奴隸式服從）不同；成人是在確認自己身份的前提下選擇順服，而非因恐懼而屈服。',
                '莎拉的故事示範了整個長大歷程：從童年被母親過度控制、婚後複製同樣的討好模式，到透過健康的同儕支持系統，學習對父母說「我瞭解你會這樣做，但我想我會這樣做」，最終在四十歲活出成人的自由與平等。',
                '本章是全書的收尾——長大成人不是一次性的事件，而是需要長時間的操練、禱告、與冒險才能完成的持續過程。',
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
              <h4 className="font-semibold text-gray-800 mb-2">梅頓的「良知」概念與屬靈成熟</h4>
              <p className="text-gray-700 leading-relaxed">
                天主教靈修作家多默·牟敦（Thomas Merton）強調成熟良知的核心是「自己的主人」，這與本書一貫的立場相呼應：真正的屬靈成熟不是拒絕權柄或教導，而是把外來的教導內化為自己與神之間真實的信念，而不是機械式地服從別人的判斷。這也解釋了為什麼本章特別強調「對權威可以不同意」——不是為了叛逆，而是為了讓信仰真正屬於自己。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「敬拜他的不可測度」：從掌控到謙卑</h4>
              <p className="text-gray-700 leading-relaxed">
                本章對「欣賞隱秘未知之事」的討論，把權柄問題與敬拜連結在一起：需要對每件事都有答案的人，其實是把自己放在了神的位置上。真正的敬拜始於承認神的浩瀚超越我們的理解——這與約伯記結尾神向約伯顯現、約伯終於不再要求解釋而俯伏敬拜的轉折，有著深刻的呼應。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">莎拉案例中「健康同儕支持」的示範作用</h4>
              <p className="text-gray-700 leading-relaxed">
                莎拉的轉變關鍵之一，是找到一群「不是互相做別人的父母，而是給對方回應和支持」的同伴。這正是全書反覆強調的健康群體特質：既不放任彼此停留在孩童式的依賴，也不越界替對方做決定，而是提供真誠的回應，讓彼此都能為自己的成長負責。
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
              '本章列出近二十項長大成人的技巧，哪幾項是你目前最需要開始操練的？',
              '你有沒有經歷過「對權威表達不同意」卻擔心自己因此不被喜愛的掙扎？',
              '回想一件你「做自己的決定」的經驗，當時的感受是自由，還是罪惡感？',
              '你如何回應莎拉對母親說「我瞭解你會這樣做，但我想我會這樣做」這句話？你的生命中有沒有類似需要說出口的一句話？',
              '你身邊有沒有一群「給對方回應和支持而非互相做父母」的同伴？如果沒有，可以從哪裡開始建立？',
              '讀完整本書，回顧你在「與人相連」「設立界限」「分辨善惡」「長大成人」四方面，覺得目前最需要繼續努力的是哪一項？',
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
              <h4 className="font-semibold text-green-700 mb-2">📋 挑一項技巧本週實踐</h4>
              <p className="text-gray-700 mb-2">
                從本章十幾項技巧中選一項最切身的（例如「操練不同意別人」或「做自己的決定」），這週找一個具體情境練習，並記下你的感受與結果。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 練習一句誠實的回應</h4>
              <p className="text-gray-700 mb-2">
                學習莎拉的做法，這週找一個機會對某位權威人物或長輩說：「我明白你的意思，但我有不同的看法，我認為……」觀察自己內心的反應。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🤝 建立或加入一個健康的支持圈</h4>
              <p className="text-gray-700 mb-2">
                找一兩位可以彼此「回應和支持而非互相做父母」的朋友，定期分享你在長大成人路上的掙扎與進展。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，感謝祢陪伴我走過與人相連、設立界限、分辨善惡、長大成人這一路的功課。求祢繼續光照我裡面還沒有長大的地方，賜我勇氣去操練這些技巧——重估信仰、對權威誠實、做自己的決定、發展祢所給的才能。求祢幫助我不再是活在別人期待中的孩子，而是能在祢面前，也在人面前，成為一個既謙卑又自由、既順服又完整的成熟兒女。奉耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
