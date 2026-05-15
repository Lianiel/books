import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Bell, Search, HelpCircle, Check } from 'lucide-react';

export default function Book14Ch8() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    exploration: true,
    questions: true,
    practice: true
  });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">第8章</h1>
        <h2 className="text-xl font-semibold text-gray-700">聖靈，請來！</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>

        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <p className="text-gray-700 leading-relaxed mb-3">現在，讓我將千頭萬緒連結整理起來。本書討論至今，反映了兩個背後的認信，現在是讓他們冒出頭來，讓你們直接看清楚的時候了。以下就是這兩項認信。</p>
            <p className="text-gray-700 leading-relaxed mb-3">第一：在任何時刻，瞭解聖靈都是基督教神學的一項重要任務。因為只要我們研究清楚聖靈的職事，我們就曉得追求，一旦我們曉得追求聖靈，就會得著聖靈的活力。這件事情一直在歷史上發生，自奥古斯丁和他那些擔任初期教會領袖的中世紀門徒（他們口裡說神的「恩典」，其實心裡是指聖靈而言），以至加爾文（歷史上稱他為論「聖靈」的神學權威，即如亞他那修是論「道成肉身」的神學權威，而路得是「稱義」的神學權威），以至清教徒（「重生」和「成聖」的神學家），以至第一代衛斯理信徒，和上世紀的聖潔教師，以及本世紀的五旬節派及靈恩派信徒。在這裡，我不打算處理在這個傳統底下一些具爭議性的問題上，誰的意見比較正確；在這裡我只想指出，那些曾經思索及追求在他們生命裡得著聖靈能力的人，經常得著他們所追尋的，因為我們滿有恩惠的神，即使追求者的神學細節並非全然準確，他也不會因此把祝福扣留起來，不給予他們。相反，聖靈的工作若不能引起我們的興趣，且有其他東西佔據我們的心，那麼，我們很容易會忽略追求活在聖靈裡面。於是，教會很容易陷落基督教法利賽主義的循例公式裡，事實上，許多地方的教會已經是這樣，又或者落入屬靈的沉睡病之中，甚或兩者兼備。</p>
            <p className="text-gray-700 leading-relaxed mb-3">今天西方世界的基督徒景象，顯示出關注聖靈教義的重要性。大多數教會缺乏從神而來的力量和豐富的生命內涵，即使一些在觀念上十分正統的教會也是如此；看見這個景象，真令人痛心。先不管真正的更新是什麼（今天有一個問題存在，就是許多人對真正更新是什麼都感到毫無頭緒），近期人們對教會更新的追求要求我們對那位賦予更新的聖者更清晰瞭解。普世基督教協會（World Council of Churches）似乎提倡一種有關當代基督徒使命的荒唐見解（認為殊途同歸，各類信仰都同等有效，世上所有人都已經得救，因此停止做擴展教會的佈道家，開始從事社會政治的改革運動家）；這驅使我們發問：這是聖靈受差遣要協助我們去做的事情嗎？教牧人員溫和地接納教義上的相對主義，認為是一種終極的必然性，亦接納教義上的多元主義，認為是一個無可避免的事實，這也驅使我們發問：這是我們對聖靈所能期望的最好的教導嗎？靈恩運動的挑戰迫使我們發問：我們曾否真正掌握聖靈充滿的生命的超自然真相？就好像神在大型的告示板上經常向我們閃動一個訊息：要切記聖靈!可是我們的眼目這麼低垂，又習慣了注目在彼此的身上，只顧就我們目前的興趣說長道短，完全沒有注意他正在做些什麼事情。有一次，我協助一名候選人參加英國國會的競選，到處奔走宣傳，他發表演說，而我派發傳單，傳單上面寫著豆大的黑色大楷字樣：工人們，醒來吧！今天我真想跑上屋頂大聲呼喊：基督徒醒來吧！教會，醒來吧！神學家，醒來吧！我們研討關於神、基督、肢體生活、使命、基督徒社會參與，以及許多其他事情；我們只在嘴唇上敷衍聖靈（在這些日子，人人如是），但從來沒有在任何一件事情上認真的考慮他。在這方面，我們需要徹底改變。</p>
            <p className="text-gray-700 leading-relaxed mb-3">第二：今天，尊崇聖靈是作為基督門徒一項很重要的任務。在一九○四年的威爾斯復興運動中，羅拔士（ Evan Roberts）從一個講壇到另一個講壇，經常呼喊「尊崇聖靈！」我相信在基督教界裡，由始至今，每一個復興運動的秘訣都是尊崇聖靈，儘管有時候未必用這四個字去表達。信徒若尊崇聖靈，就會讓聖靈掌管他們的生命，讓聖靈高舉基督、幫助他們認罪、謙卑自己、以基督為首，容讓聖靈這</p>
            <p className="text-gray-700 leading-relaxed mb-3">些工作不受阻礙、不受壓抑地發揮。教會從前所有興旺時期的記載都證實這點。那麼，按目前的情況來說，聖靈的感動曾經長期被銷滅，我們怎樣在這些日子尊崇他呢？</p>
            <p className="text-gray-700 leading-relaxed mb-3">這個問題，實在是現今教會流行討論的中心問題，他使我們陷入混亂和無定之中。靈恩派信徒和居斯勞運動（CursilloMovement）有他們回答的方法：釋放在你裡面的聖靈，開放自己，讓他直接影響你。宣導關係更新的人有另一種回答：敢於表達真我，敢於在其他信徒面前披露軟弱。在愛德華滋（Jonathan Edwards）的神學傳統下的基督徒有第三種答案：祈禱，及隨時準備接受聖靈的澆灌。主流教會的專業大公派人士提供第四種答案：培植一種改革性的社會運動熱潮。我們姑且看這些答案並非互相排斥，但他們的著重點和輕視點，彼此間全不相符。因此，問題仍然存在，迫我們去正視：今天我們應該怎樣尊崇聖靈呢？我們怎樣緊隨他的步伐，讓他能夠在我們中間順利工作呢？我們這些想更深認識聖靈的人，該在芸芸鼓手當中，追隨哪一位呢？上述提及的所有運動以及其他的運動，都宣稱被聖靈領導，我們怎麼分辨任何一個運動確有聖靈引導呢？聖經的權威</p>
            <p className="text-gray-700 leading-relaxed mb-3">解答這些問題的方法原則，就是要用聖經正典的教導去試驗各種不同的觀點。這包括提出以下的問題：那些觀點是否建基在聖經真理上，是否正確地應用出來？也要問：他們有沒有遺漏了一些聖經經常強調的重點？是否需要糾正方向或著重點，以配合聖經真理的優先次序呢？因為聖經的教導是神自己給我們的訊息，而當聖經不斷把真理展示給我們看時，我們在與神的關係上，有系統地把我們的思想、觀點，和目標——一降服在聖經的審判之下，這種內心的操練，不僅僅是基督教芸芸傳統中的其中一種傳統，他是基督教本身內蘊的學問。</p>
            <p className="text-gray-700 leading-relaxed mb-3">耶穌，我們的基石，希伯來書的作者稱他為「„„為我們信心創始成終„„」者（一二 2），他以身作則地拿聖經——即是我們的舊約——作為他父親永恆有效的應許、指引和管治我們生命的準則，又同樣以身作則地表明他自己的教訓，以及門徒奉他的名所傳的道為神聖而具有權威的。所以，活在聖經的引導下這個原則（現時指新舊兩約），也許可以公允地說是直接從基督而來的。就好像他交給我們每人一本聖經，告訴我們遵從聖經的教導就等如跟從他一樣。</p>
            <p className="text-gray-700 leading-relaxed mb-3">聖經權威這個原則包含及表達了關於聖靈的幾個基本真理。因為聖靈從前是，現在仍是溝通所有從神而來的訊息的媒介，賜予啟示和助我們領受啟示都是他的工作。我們之所以能夠說「人的靈是耶和華的燈，鑒察人的心腹„„」（箴二○27），並不是我們無需神的特殊幫助，就自自然然可以領略神的真理，正如有些人會假定如此，而是因為聖靈啟迪我們認識那啟示的真理，否則我們的心仍舊蒙昧無知。換句話說，人的靈是耶和華的燈，但已經熄滅了，要待聖靈來把他點亮。前幾章，我們曾經看過約翰福音第十四至十六章，耶穌記述有關訓慰師聖靈將臨的職事，現在我們應該注意到保羅和約翰在其他地方同樣認定，只有借著聖靈的工作，我們那被罪蒙蔽昏暗的心思才能夠對神聖事物有確切的</p>
            <p className="text-gray-700 leading-relaxed mb-3">認識（見林前二 9—16，一二 3；林後三 12 至四 6；弗一 17，三 5、 16—19；約壹二 20、27，四 1—6，五 7，也參看 20 節）。路加也講述升天前後復活了的耶穌，不但將聖經向人的心靈「開啟」（路二四 32，參看 24 節），亦「開啟」我們的眼睛、思想和心靈，去瞭解和領受聖經及福音所宣講有關神的訊息（路二四 45；徒一六 14，二五 18）。耶穌就是這樣借著聖靈幫助人明白真道，在聖靈以外，人根本不能瞭解屬靈的事；整本新約聖經背後都存有這個假設。</p>
            <p className="text-gray-700 leading-relaxed mb-3">因此，據分析，事實如下所述：聖經的產生以至呈現在我們面前的整個過程，都有聖靈的主權在運作，聖靈運用同樣的主權，感動我們去領受、尊崇及研讀聖經，並且辨識他向我們述說的神聖訊息。</p>
            <p className="text-gray-700 leading-relaxed mb-3">聖經的產生經過五個過程：首先向作者啟迪智慧和真理，然後是默示、形成正典、保存正典及翻譯經文。聖靈在全部五個過程上都同樣活躍。現今，有三個過程借著聖經使溝通生效，就是印證、光照和解釋真理。這些同是聖靈的工作範圍，印證聖經就是證明聖經的真確性，這是聖靈的工作，加爾文稱之為內證，他形容這內證不是一種特殊的感受，亦不是一些新資料秘密地披露，而是建立一種思想狀態，使人無法懷疑聖經所說的一切都是從神而來。光照是照亮我們昏暗腐朽的心思，這是印證過程的一部分，使我們能夠按本相去真正瞭解屬神的事物。解釋是解釋經文，這是聖靈的工作，通過我們的努力——包括釋經、分析、綜合和應用——而實現；聖靈給我們指明經文的含義，如同神正在向我們的心靈說話一般。聖靈在聖經上的廣泛職事通常被人忽略了，但若然我們真個忽略他，我們即是荒廢思想，並錯失真理。</p>
            <p className="text-gray-700 leading-relaxed mb-3">為了清楚的緣故，在這裡應該加上兩項評語。第—，有時候我們以為，聖靈在訊息傳遞及經文翻譯上擁有主權，就意味著必有一份天衣無縫、絕無錯誤的抄本傳留下來，亦有一份依據這原文翻譯、毫無瑕疵的英文譯本；可惜，事實不是如此。證據顯示，通常原文都保存得相當好，譯本也很能夠將原意表達出來，讓聖靈運用他，使我們得著在基督裡對神真正的認識；但這距離絕無謬誤尚遠。因此，我們應該信任我們現時擁有的版本，卻不是妄信他們，同時願意接受一個不變的事實，就是在許多細節上，他們原本可以更精確良好的。第二，有時候，我們以為若然聖靈解釋聖經，引導我們進入其中「屬靈」的深意，這個過程可能包括在聖經中尋找那按尋常方法讀不出的寓意和應用實踐。可惜，事實也並不如此。聖經裡「屬靈」的意義無異于經文的文義——即是作者運用的字句真正想表達的意思</p>
            <p className="text-gray-700 leading-relaxed mb-3">——連結貫通聖經其他地方的教導，並應用在我們每個人的生命中。</p>
            <p className="text-gray-700 leading-relaxed mb-3">那麼，聖靈與聖公會宗教條文所稱的「神話語的記錄」是相關的，兩者在教導上相輔相成。沒有聖靈的幫助，我們不能從聖經裡真正學到屬天的事物，而那不是建基在神話語上的所謂「屬靈」思想，只是心中無神的飄渺幻想。（我們應該注意的，是新約中屬靈一詞經常與聖靈所賜在基督裡的新生命有關，絕不意指「有學識、思想高層次、吹毛求疵」，以求與「肉體的、物質的，或粗糙的」區分出來，這些只不過是現代俗世摩登的說法。）因此，那些願意在聖靈權威底下生活的人，必需俯伏在神話語面前，看他為聖靈的教科書，而那些願意在聖經權威底下生活的人，必需尋求聖靈作為傳譯員。任何一方面的忽略或過分側重都會對人造成傷害；沒有人能自然而然就取得兩者正確的平衡，我們最好還是保持警覺。</p>
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

          </div>
        )}
      </div>
    </div>
  );
}
