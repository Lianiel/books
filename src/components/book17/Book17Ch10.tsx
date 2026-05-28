import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Users, Search, HelpCircle, Check } from 'lucide-react';

export default function Book17Ch10() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    application: true,
    exploration: true,
    questions: true,
    practice: true,
  });

  const toggleSection = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">第十章</h1>
        <h2 className="text-xl font-semibold text-gray-700">愛與捨己</h2>
        <p className="text-sm text-gray-500 mt-1">哥林多前書 九1-27</p>
      </div>

      {/* 經文要義 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">經文要義</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <p className="text-gray-600 text-sm leading-relaxed border-l-4 border-purple-200 pl-3">在上一章的經文裡，保羅談論吃祭偶像之物，主要是針對著有些人憑著自己的知識解決問題，同時也在第9節看到，這些人引用另一個理由支援他們的行動，那就是自由。因此保羅提醒他們，運用自由時要顧及其他的人。接續，在第九章，保羅就是以自己為例，解釋信徒運用自由時，應該為其他人著想，進而要哥林多信徒效法他如何應用他在主裡的自由。所以最後針對這問題，他做結論的時候說：「你們該效法我，像我效法基督一樣。」（十一1）</p>

            <div>
              <h4 className="font-semibold text-purple-700 mb-3">一、使徒的權柄（九1-14）</h4>
              <p className="text-gray-700 leading-relaxed mb-2">基本上，這一章經文可以分為三個段落。第一個段落是九章1至14節，保羅提出不同的理由，證明他作為耶穌基督的使徒，有權利獲得哥林多信徒經濟上的支持。</p>
              <p className="text-gray-700 leading-relaxed mb-2">在1至3節，保羅首先證明自己是使徒。依據保羅的論點，「使徒」最基本的條件是親眼見過耶穌：「我不是見過我們的主耶穌嗎？」在使徒行傳一章21至22節，使徒們在耶穌升天後，要從門徒中選出另一個人來代替猶大的位置時，其資格也是必須見過耶穌。問題是，復活主的顯現和呼召都是相當主觀的經驗，別人怎能知道它的真實性呢？在這一點，保羅說：「你們不是我在主裡面所做之工嗎？假若在別人，我不是使徒，在你們，我總是使徒，因為你們在主裡正是我作使徒的印證。」（1節下至2節）若不是聖靈的工作，哥林多人就不會信主，所以哥林多信徒可以根據聖靈工作的果效，知道保羅確實是主耶穌親自差派的使徒。</p>
              <p className="text-gray-700 leading-relaxed mb-2">在4至6節，保羅談到他作為使徒，就擁有使徒的權柄。「權柄」二字是這幾節經文的鑰字：使徒有靠福音吃喝的權柄（4節）；使徒有帶著妻子一同往來的權柄（5節）；使徒有不工作的權柄（6節）。以上三種權柄，磯法、其他使徒及主的弟兄（雅各）都使用過，保羅提到這些，是為要解釋他在第1節所說的自由問題。</p>
              <p className="text-gray-700 leading-relaxed">在7至14節，保羅說明權柄的根據，從三個角度指出使徒有此等權柄：第一個角度，是第7節提出的三個例子：當兵的、栽種葡萄的，以及牧養牛羊的，這些人都有權柄靠著他們所做的工來養生。第二個角度，保羅引用申命記二十五章4節：「牛在場上踹穀的時候，不可籠住牠的嘴」，按他的邏輯是：既然牛耕田之際，都可以吃禾場上的穀物，為何人不能？第三個角度，是主的命令：「主也是這樣命定，叫傳福音的靠著福音養生。」（14節）從以上三個角度來看，保羅證明他作為使徒，確實有不工作只靠福音養生的權柄。</p>
            </div>

            <div>
              <h4 className="font-semibold text-purple-700 mb-3">二、權柄與自由（九15-23）</h4>
              <p className="text-gray-700 leading-relaxed mb-2">保羅證明了身為使徒的權柄之後，他立刻轉了語氣。在第15節，緊接著強調說：「但這權柄我全沒有用過。」而且加上另一句話，說：「寧可死也不叫人使我所誇的落了空。」表示他這樣做，對自己而言是一種光榮，不願意給別人搶走。</p>
              <p className="text-gray-700 leading-relaxed mb-2">為什麼呢？保羅首先解釋為什麼他要傳福音，因為傳福音是神的託付，不傳不行！這也就是為什麼他會在第16節說：「我傳福音原沒有可誇的，因為我是不得已的。若不傳福音，我便有禍了。」傳福音既然是神託付的責任，不能不傳，保羅接著就指出傳福音使者的心態——要甘心地去做。所以他在第17節說：「我若甘心做這事，就有賞賜；若不甘心，責任卻已經託付我了。」有些人讀保羅在第17節所說的話，以為他是在強調傳福音必須要有負擔才行，好像沒有傳福音的負擔就不必傳似的，但這看法完全不對。實際上，因為神已把託付交給我們，不管我們是否有負擔，心中喜不喜歡，都得去傳揚。</p>
              <p className="text-gray-700 leading-relaxed mb-2">在19至23節，保羅從另一個更寬廣的角度講這個問題——傳福音時所採取的策略。他在第19節說：「我雖是自由的，無人轄管；然而我甘心作了眾人的僕人，為要多得人。」第23節說：「凡我所行的，都是為福音的緣故，為要與人同得這福音的好處。」這兩句話前後呼應，讓我們看到保羅傳福音的時候，是以「目標」為導向的。</p>
              <p className="text-gray-700 leading-relaxed">在這種多得人的目標導向策略下，20至22節可以看到保羅採取了一種非常靈活的生活：「向猶太人，我就作猶太人……向沒有律法的人，我就作沒有律法的人……向軟弱的人，我就作軟弱的人。」舉出這些實例以後，保羅在第22節下半再加上一句：「向什麼樣的人，我就作什麼樣的人」，表明這是他一貫的原則！保羅並非主張相對的倫理——他在第21節解釋：「其實我在神面前，不是沒有律法；在基督面前，正在律法之下。」這個在基督面前的律法，最好的解釋，就是保羅在加拉太書第五章所講的聖靈的果子——以愛為基本原則。傳福音的方法，卻是一件相對的事情。</p>
            </div>

            <div>
              <h4 className="font-semibold text-purple-700 mb-3">三、自由與節制（九24-27）</h4>
              <p className="text-gray-700 leading-relaxed mb-2">權利是可以捨棄的，而且為著達到某些目的，自由必須是有所限制的。這是保羅在九章24至27節這段話的主要目的。在這段經文中，保羅用哥林多信徒文化背景中所熟識的奧林匹克運動會為例，說明這一個主題。</p>
              <p className="text-gray-700 leading-relaxed mb-2">保羅指出奧林匹克運動會有兩個重要的精神與基督徒一樣。第一，第24節說：「豈不知在場上賽跑的都跑，但得獎賞的只有一人？」基督徒得勝的獎品，是「不能壞的冠冕」，為了要得獎品，他以跑第一的心志去傳福音。在第26節，保羅再回頭強調：基督徒的人生是有目標的：「我奔跑不像無定向的；我鬥拳不像打空氣的。」</p>
              <p className="text-gray-700 leading-relaxed">其次，保羅在第25節指出，為了要爭取得勝，必須要有節制：「凡較力爭勝的，諸事都有節制。」在第27節保羅也說，他為了爭得勝利，絕不放縱，而是「攻克己身」，叫身子服他。在第27節下半，保羅也指出，若失去這種基本精神，會導致嚴重的後果：「恐怕我傳福音給別人，自己反被棄絕了。」保羅所要強調的是：一個人不能在信主後，無所事事等著進天堂，他應該朝著生命的目標努力前進。</p>
            </div>

            <div className="border-t border-purple-100 pt-4">
              <h4 className="font-semibold text-purple-700 mb-3">結語</h4>
              <p className="text-gray-700 leading-relaxed">保羅在哥林多前書第九章，大部分都是提及他自己的事：有使徒的權利，卻甘願自動放棄，為的是讓福音能傳出去，叫其他的人得到好處，這是保羅如何運用他自己的自由。這章經文的功能，在第24節下半表達了出來：「你們也當這樣跑」。保羅再次讓我們看到，他是信徒的模範。從24至27節，我們可看到保羅傳福音是付上生命代價去傳的，以爭取第一的心志去衝刺，也正因為這樣，他更是為著生命的獎賞而捨棄自由。他對哥林多信徒也有著同樣的期待。</p>
            </div>
          </div>
        )}
      </div>

      {/* 省思與應用 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('application')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-teal-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">省思與應用</span>
          </div>
          {expanded['application'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['application'] && (
          <div className="p-5 bg-white space-y-6">
            <p className="text-gray-600 text-sm leading-relaxed border-l-4 border-teal-200 pl-3">由於哥林多前書第九章的特質，是以保羅個人的自由談到信徒的自由，因此我們談到應用的時候，也可以由兩個不同的角度著手。第一方面，可以從保羅自己的行動檢視這段經文；另一方面，我們也可以從自由與權利的角度來看這段經文。</p>

            <div>
              <h4 className="font-semibold text-teal-700 mb-3">一、自由傳道？</h4>
              <p className="text-gray-700 leading-relaxed mb-2">「自由傳道」這個名詞相當特別，基本上指的是專職傳道者，卻沒有接受教會固定的薪俸支持。據筆者有限的了解，這是華人教會特有的現象，西方教會有所謂平信徒傳道，但不是專職的，比較接近現今的義工。從教會歷史的角度來看，這現象並不是倪柝聲弟兄首創的，不過，卻可以說是因為他大力提議，成為二十世紀中葉，華人教會所爭論的問題之一，甚至成為某些教會的制度。至今，仍有些傳道者自稱為自由傳道者。</p>
              <p className="text-gray-700 leading-relaxed mb-2">筆者個人對這種主張，有兩方面的看法。從教會歷史的背景而言，這種主張有它值得同情之處，因為在十九世紀及二十世紀上半葉，由於種種的因素，傳道人有「職業化」的現象；意即有些傳道者，純粹將傳道工作當作一種職業，沒有使命感，更沒有呼召。在這種情形下的教會，可以說充滿著各種問題。針對這種現象，強調傳道者不能接受教會固定的薪俸，是可以讓一些人卻步。</p>
              <p className="text-gray-700 leading-relaxed mb-2">根據筆者個人的一些經歷和觀察，思考這問題時，同樣也有不能贊同之處。因為從十九世紀以來，華人教會中充滿著各式各樣的「老闆」——有時候是宣教士當老闆；有時是教會的長執當老闆。傳道者的地位不僅是在整體社會中非常卑微，在教會中很多時候儼然是低薪的雇員。因此，若聽到有人要作傳道者，第一個反應經常是「苦也」。在二十世紀下半葉，有些年輕的基督徒蒙召作傳道，家人基於愛心，就會勸誘他們帶職傳道，有些甚至會勸導說：作醫生賺錢可以多養幾個傳道人，不是比自己一個人作傳道好嗎？</p>
              <p className="text-gray-700 leading-relaxed">事實上，在哥林多前書這段經文中，保羅並沒有主張傳道者不能接受教會固定的經濟支持。他在九章1至14節，反而是用各式各樣的方法，證明教會應該在經濟上支持他。他只是說在他特定的情況下，巴拿巴和他沒有這樣要求。對保羅而言，這是他自願放棄應有的權利。當我們將一種自願性的行動，轉變成為一種全教會必須遵守的體制時，顯然所犯的錯誤就像天主教把「獨身」變成是全教會的體制一樣。筆者個人的意見是：以現今的時代而言，保羅在這章經文中所表達的精神，最適用的情境是推動一些蒙召的專業人士，到一些不接受宣教士的國家或地區工作。不過，要記得這種帶職的傳道工作，並不是一個較為輕鬆的工作，而是保羅所說的日夜勞苦的工作。</p>
            </div>

            <div>
              <h4 className="font-semibold text-teal-700 mb-3">二、自由與權利</h4>
              <p className="text-gray-700 leading-relaxed mb-2">筆者幼年是在二次世界大戰（中日戰爭）中度過的，小學時候就學會唱一首歌：〈起來，不願作奴隸的人們〉。可見「自由」是過去一百多年來，中國人共同的盼望。每一個地方的人都想獨立，都不願受別人轄制，大家都爭取要享有自由，甚至有句名言說：不自由，毋寧死！</p>
              <p className="text-gray-700 leading-relaxed mb-2">今日有許多人遷往北美，其中原因之一，就是喜歡這裡自由的環境。但是當人們爭取到自由的時候，卻發現產生了另外一個問題：爭取自由之後，往往會引發一段時期的混亂。為何會如此？因為這群剛爭取到自由的人們，往往不知道如何過自由的生活，以前習慣於被別人管轄，聽憑他人指揮差遣的人，現今自由了，卻不知如何作選擇。</p>
              <p className="text-gray-700 leading-relaxed mb-2">人其實不清楚如何運用自由。許多時候我們在選擇時，甚至會抉擇錯誤，導致許多的社會問題，就如法國大革命之時，人民推翻皇權而獲得自由，卻也產生社會狀況的失衡與混亂。在一個關口上，筆者看到標示著四個大字：「各行其道」——筆者對這四個字的第一印象是意味著每個人想怎樣就怎樣，但這四個大字真正的用意，卻是要大家遵守規矩，等候與排隊，而不是鑽縫隙前進。在此情況中，出現一個弔詭現象：獲得自由之際，並不是個人想怎樣就可以怎樣，反而是需要遵守規矩。</p>
              <p className="text-gray-700 leading-relaxed mb-2">使徒保羅在聖經裡提及教會中弟兄姊妹相處時，應當知道如何恰當地運用自由。哥林多教會要過真正的基督徒生活，其中所要面臨到的是：祭拜過偶像的食物可吃否？認為可以吃的，自恃有理，於是就按照理性的觀念放膽地吃，卻不顧念另一派認為是不能吃的。他們只在乎自己怎麼看，認為已經是基督徒，不再被一切所管轄，但保羅在第九章說：假如要真正學會運用自由的話，你就要學會作一個不自由的人！乍聽似乎很矛盾，但卻是基督徒真正得著在耶穌基督的自由後，很重要的一種「特權」。</p>
              <p className="text-gray-700 leading-relaxed mb-2">「自由」不只是維護個人之權利，或爭取自己的利益，保羅說「自由」會帶來一個很重要的使命——要他人同享自由的權利！若要真正看見全世界都真正享有自由，我們就應當學習耶穌基督，以及使徒保羅的榜樣：他們雖然是自由的，卻出於自我的選擇，寧願作眾人的奴僕。這種自由不是被人強逼而行的，乃是出於自發自動的抉擇，也惟有在此情況中，才能讓人享受與你同等的自由。</p>
              <p className="text-gray-700 leading-relaxed mb-2">就如保羅當時所面對的：有猶太人和非猶太人；有律法及非律法下的人；有軟弱的及剛強的人。無論如何，他在不同族群中作不同的人，而首先考慮到的是對方的生活習慣。在傳福音事工上，近代宣教學的研究更是指出，宣教士若是忽視宣教地區的文化，往往會產生嚴重的後果。在中國宣教史上，當利瑪竇初到中國時，他發現中國的「宗教人士」是佛教僧侶，由於他覺得自己也是一種「宗教人士」，所以他就穿起袈裟，可是，他驚訝地發現自己並不受中國人歡迎。後來，有人指點他，才知道中國人事實上是看不起僧侶，所以他改穿儒家的衣著，開始了另一階段的事工。</p>
              <p className="text-gray-700 leading-relaxed">華神最近有一位畢業生去日本宣教，聽說在東部有一種當地的特產「納豆」，吃起來是黏稠狀的，具有一種特別的異味，但卻是當地之珍品，若是請你吃這種東西時，表示視你為上賓。這位宣教士在臺灣長大，碰到「納豆」時，第一個反應就是難以下嚥，但因著要傳福音，要與日本人作朋友，就得學習吃納豆。他先在家中練習，將納豆放入優格之中一起吃。他放棄可以選擇之自由，捨棄自己原先飲食的習慣，為傳福音給他人的緣故，將這些事情都當作是相對的。這種生命力，是每位基督徒應當學習的。使徒保羅所要強調的——凡事要為著他人著想，當你為著他人著想之際，你即擁有自己的自由；同時他人也具有個人的自由，這才是真正的自由。</p>
            </div>

            <div className="border-t border-teal-100 pt-4">
              <h4 className="font-semibold text-teal-700 mb-3">默想</h4>
              <p className="text-gray-700 leading-relaxed mb-2">新約聖經論及基督徒的自由時，不是說只有基督徒享有自由。真正自由的最高峰是為著別人的緣故，而放棄自己權利的自由。若我們能真正明白聖經自由的原則，又去積極實踐時，現今教會內及社會上許多的問題，就得以解決。</p>
              <p className="text-gray-700 leading-relaxed">面對傳福音事奉時，我們是需要放下一些生活習慣，否則很容易失去許多傳福音的機會。許多生活非常細微之處，假如沒學會有所放棄與節制，或不願意改變，是會影響傳福音的工作。因此為了傳福音，需要學會為著主的緣故，將某些東西、某些並非生活上所必須的事物放下！若沒學會這項功課，就很難去到世界各地向人分享福音。當我們懂得處豐富，也可以處缺乏時，才擁有真正的自由；若覺得在生活中有些東西是不可或缺的，其實是沒有真正的自由。</p>
            </div>
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
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">一、保羅使徒身分的爭議與自我辯護的神學意義</h4>
              <p className="text-gray-700 leading-relaxed">保羅在哥林多後書第十一章提到，曾有「超等使徒」批評他的使徒身分不合格。這種攻擊在當時的哥林多教會中造成了真實的混亂。保羅在哥林多前書第九章的自我辯護，並非出於個人驕傲，而是有神學上的必要：若他的使徒身分不被承認，他的教導也就失去了神學權威。值得注意的是，保羅的辯護策略是獨特的——他不是炫耀自己的能力或神蹟，而是以「我有這些權利，但我選擇不用」來證明他的使徒心志的真誠。這種「放棄自己有資格享有的特權」的辯護方式，本身就是十字架倫理的體現：甘心降卑，以服事代替索取。</p>
            </div>

            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">二、奧林匹克運動會的宗教背景與保羅的轉化使用</h4>
              <p className="text-gray-700 leading-relaxed">古代奧林匹克運動會（約公元前776年起）是希臘宗教生活的一部分，獻給眾神之首宙斯（Zeus），在奧林匹亞舉行，四年一次。運動員在賽前需要經過十個月的嚴格訓練，並發誓遵守比賽規則。值得注意的是，保羅用這個在希臘文化中具有深刻宗教背景的意象，但他轉化了其目的：古代運動員為了献给偶像的桂冠而自律，但基督徒是為了「不能壞的冠冕」——即神的賞賜和靈魂的得救——而自律。這種「文化轉化」（cultural transformation）的詮釋策略，正是保羅「向什麼樣的人，我就作什麼樣的人」原則在釋經學上的應用。</p>
            </div>

            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">三、「帶職傳道」的跨文化宣教意義</h4>
              <p className="text-gray-700 leading-relaxed">保羅的帳棚製作工作（行十八3）在宣教學上具有深遠意義。20世紀以來，「帶職宣教」（Tentmaking Mission）作為一個正式的宣教策略被廣泛討論，尤其在封閉地區（如中亞、中東、北非）的宣教工場中，傳統的差派宣教士往往無法取得簽證，帶職宣教士卻可以以商人、教師、工程師等身分進入。保羅的模式表明：傳道人「有薪」與「帶職」並非道德高下之別，而是策略性的選擇，核心在於「為福音的緣故」。今日華人教會在思考差傳策略時，這一原則尤其重要。</p>
            </div>

            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">四、「向什麼樣的人，我就作什麼樣的人」的跨文化倫理界限</h4>
              <p className="text-gray-700 leading-relaxed">保羅「向什麼樣的人，我就作什麼樣的人」的原則，在跨文化宣教中引發一個重要的倫理問題：適應文化的底線在哪裡？宣教學家萊斯利·紐比金（Lesslie Newbigin）提出「處境化」（contextualization）的概念，指出福音必須以當地文化的語言和符號來表達，但不能讓文化的偶像吸收福音。保羅自己在第21節劃下了界限：「其實我在神面前，不是沒有律法；在基督面前，正在律法之下。」這意味著文化的適應有其根本的規範基礎——在基督裡的愛與誡命。因此，吃當地的飲食是可以的，但參與拜偶像儀式則越過了底線，如同第十章他隨後的討論所示。</p>
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
          <div className="p-5 bg-white space-y-4">
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0 text-lg">1.</span>
              <p className="text-gray-700 leading-relaxed">保羅說他有權柄靠福音養生，但他選擇放棄這個權利。你在生活或事奉中，有沒有你「有資格」但選擇放棄的權利？這種放棄是出於真正的愛和使命，還是有其他的動機？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0 text-lg">2.</span>
              <p className="text-gray-700 leading-relaxed">保羅說「若不傳福音，我便有禍了」——他把傳福音看作神的託付，而非可選擇性的。你對「傳福音的使命感」有什麼體會？你認為基督徒傳福音是出於「不得不」的責任，還是「自由甘心」的選擇？這兩者有什麼不同？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0 text-lg">3.</span>
              <p className="text-gray-700 leading-relaxed">「向什麼樣的人，我就作什麼樣的人」——保羅的這個原則，在你的生活和事奉中，有什麼具體的體現？你曾為了「多得人」而改變過自己的哪些習慣或偏好？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0 text-lg">4.</span>
              <p className="text-gray-700 leading-relaxed">陳濟民牧師分享了納豆宣教士和竹蟲宣教士的故事，以及利瑪竇改換衣著的故事。這些例子對你有什麼啟發？你在事奉或傳福音的處境中，有沒有類似「需要突破自己文化舒適區」的時刻？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0 text-lg">5.</span>
              <p className="text-gray-700 leading-relaxed">保羅用奧林匹克運動員的自律比喻基督徒的生命。你在信仰生活中，有沒有像運動員一樣「有規律訓練」的屬靈操練？你覺得目前在哪些方面最需要加強「攻克己身」的自律？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0 text-lg">6.</span>
              <p className="text-gray-700 leading-relaxed">「真正自由的最高峰是為著別人的緣故，而放棄自己權利的自由」——你對這句話有什麼感受？在你的文化和時代背景中，這種「甘願捨棄自由」的精神，是否與主流價值觀（強調個人權利）相衝突？你如何在兩者之間取得平衡？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0 text-lg">7.</span>
              <p className="text-gray-700 leading-relaxed">保羅警告說：「恐怕我傳福音給別人，自己反被棄絕了。」這句話對你有什麼提醒？在你目前的信仰生命狀態中，有沒有哪些領域是你「為別人傳講」卻自己沒有真正實踐的？</p>
            </div>
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
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 辨識你可以「甘心放棄」的一個特權</h4>
              <p className="text-gray-700 mb-2">本週思考：在你的信仰生活或人際關係中，有沒有一個你「有資格」但願意為了他人的好處而放棄的特權、習慣或偏好？這不必是大事——可以是：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>為了顧念年長弟兄姊妹，放棄在聚會中推動你偏好的敬拜風格</li>
                <li>為了與未信主的朋友建立關係，放棄某個讓你舒適但會造成隔閡的習慣</li>
                <li>付諸行動後，記錄這種「甘心捨棄」的感受</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 建立屬靈操練的「訓練計畫」</h4>
              <p className="text-gray-700 mb-2">保羅說基督徒要像運動員一樣有節制、有目標地活。這週為自己制定一個簡單的屬靈操練計畫：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>每天讀一章聖經，並寫下一句對你最有挑戰的話</li>
                <li>每天撥出10分鐘為一位未信主的朋友或家人具體代禱</li>
                <li>週末評估：這週我「攻克己身」了嗎？還是「打空氣」？</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 走出文化舒適區的一個小步驟</h4>
              <p className="text-gray-700 mb-2">思考你身邊有沒有一個文化背景與你不同的人（不同語言、不同世代、不同階層）。本週主動採取一個行動，以「向他作他所是的人」：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>用他熟悉的方式聯繫或關心他（即使不是你習慣的方式）</li>
                <li>嘗試了解他的興趣或文化，不批評、不比較</li>
                <li>這個行動的目標是建立關係，不是立即傳福音</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">⏰ 為傳福音放棄一件「好事」</h4>
              <p className="text-gray-700 mb-2">保羅說有時為了傳福音，需要在許多生活上學會自律，甚至要主動放棄許多好的事物。本週選擇一次，為了與未信主的人建立連結，主動放棄一件你「有資格享受的好事」（如：放棄一個個人娛樂時間，去陪伴一位需要關心的人），並在禱告中把這個選擇獻給神。</p>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 反思你的傳福音策略</h4>
              <p className="text-gray-700 mb-2">保羅的傳福音策略是以「目標」為導向（多得人）而非以「方法」為導向。本週花15分鐘思考並寫下：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>我目前身邊有哪些未信主的人？</li>
                <li>我需要「向他作什麼樣的人」，才能有機會與他們分享福音？</li>
                <li>我願意為了他們而調整哪些習慣或方式？</li>
              </ul>
            </div>

            <div className="border-t border-green-100 pt-4 mt-4">
              <h4 className="font-semibold text-green-700 mb-3">🙏 本週禱告</h4>
              <p className="text-gray-700 leading-relaxed text-lg italic border-l-4 border-green-300 pl-4 py-2 bg-green-50 rounded-r">
                天父，感謝袮賜給我在基督裡的自由。求袮幫助我明白，真正的自由不是為自己爭取最多的權利，而是為了愛人、為了福音，甘心將這些權利放下。當我面對傳福音的機會與挑戰時，求袮賜給我保羅那種「一切為了福音」的使命感，讓我願意走出文化的舒適圈，向不同的人作不同的人。同時，求袮幫助我像運動員一樣自律，攻克己身，讓我的生命不只是傳福音給別人，自己也真實地活在袮的話語和恩典中。奉耶穌基督的名禱告，阿們。
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
