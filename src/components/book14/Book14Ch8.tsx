import React, { useState } from 'react';
import { Bell, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

export default function Book14Ch8() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ sec0: true });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          第8章
        </h1>
        <h2 className="text-xl font-semibold text-gray-700">聖靈，請來！</h2>
      </div>

      <div className="mb-4 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => toggleSection('sec0')}
          className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-2">
            <Bell className="w-4 h-4 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800 text-left text-sm">08聖靈，請來！</span>
          </div>
          {expanded['sec0'] ? <ChevronUp className="w-4 h-4 text-gray-500 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />}
        </button>
        {expanded['sec0'] && (
          <div className="p-5 bg-white">
              <p className="text-gray-700 leading-relaxed mb-3">現在，讓我將千頭萬緒連結整理起來。本書討論至今，反映了兩個背後的認信，現在是讓他們冒出頭來，讓你們直接看清楚的時候了。以下就是這兩項認信。</p>
              <p className="text-gray-700 leading-relaxed mb-3">第一：在任何時刻，瞭解聖靈都是基督教神學的一項重要任務。因為只要我們研究清楚聖靈的職事，我們就曉得追求，一旦我們曉得追求聖靈，就會得著聖靈的活力。這件事情一直在歷史上發生，自奥古斯丁和他那些擔任初期教會領袖的中世紀門徒（他們口裡說神的「恩典」，其實心裡是指聖靈而言），以至加爾文（歷史上稱他為論「聖靈」的神學權威，即如亞他那修是論「道成肉身」的神學權威，而路得是「稱義」的神學權威），以至清教徒（「重生」和「成聖」的神學家），以至第一代衛斯理信徒，和上世紀的聖潔教師，以及本世紀的五旬節派及靈恩派信徒。在這裡，我不打算處理在這個傳統底下一些具爭議性的問題上，誰的意見比較正確；在這裡我只想指出，那些曾經思索及追求在他們生命裡得著聖靈能力的人，經常得著他們所追尋的，因為我們滿有恩惠的神，即使追求者的神學細節並非全然準確，他也不會因此把祝福扣留起來，不給予他們。相反，聖靈的工作若不能引起我們的興趣，且有其他東西佔據我們的心，那麼，我們很容易會忽略追求活在聖靈裡面。於是，教會很容易陷落基督教法利賽主義的循例公式裡，事實上，許多地方的教會已經是這樣，又或者落入屬靈的沉睡病之中，甚或兩者兼備。</p>
              <p className="text-gray-700 leading-relaxed mb-3">今天西方世界的基督徒景象，顯示出關注聖靈教義的重要性。大多數教會缺乏從神而來的力量和豐富的生命內涵，即使一些在觀念上十分正統的教會也是如此；看見這個景象，真令人痛心。先不管真正的更新是什麼（今天有一個問題存在，就是許多人對真正更新是什麼都感到毫無頭緒），近期人們對教會更新的追求要求我們對那位賦予更新的聖者更清晰瞭解。普世基督教協會（World Council of Churches）似乎提倡一種有關當代基督徒使命的荒唐見解（認為殊途同歸，各類信仰都同等有效，世上所有人都已經得救，因此停止做擴展教會的佈道家，開始從事社會政治的改革運動家）；這驅使我們發問：這是聖靈受差遣要協助我們去做的事情嗎？教牧人員溫和地接納教義上的相對主義，認為是一種終極的必然性，亦接納教義上的多元主義，認為是一個無可避免的事實，這也驅使我們發問：這是我們對聖靈所能期望的最好的教導嗎？靈恩運動的挑戰迫使我們發問：我們曾否真正掌握聖靈充滿的生命的超自然真相？就好像神在大型的告示板上經常向我們閃動一個訊息：要切記聖靈!可是我們的眼目這麼低垂，又習慣了注目在彼此的身上，只顧就我們目前的興趣說長道短，完全沒有注意他正在做些什麼事情。有一次，我協助一名候選人參加英國國會的競選，到處奔走宣傳，他發表演說，而我派發傳單，傳單上面寫著豆大的黑色大楷字樣：工人們，醒來吧！今天我真想跑上屋頂大聲呼喊：基督徒醒來吧！教會，醒來吧！神學家，醒來吧！我們研討關於神、基督、肢體生活、使命、基督徒社會參與，以及許多其他事情；我們只在嘴唇上敷衍聖靈（在這些日子，人人如是），但從來沒有在任何一件事情上認真的考慮他。在這方面，我們需要徹底改變。</p>
              <p className="text-gray-700 leading-relaxed mb-3">第二：今天，尊崇聖靈是作為基督門徒一項很重要的任務。在一九○四年的威爾斯復興運動中，羅拔士（ Evan Roberts）從一個講壇到另一個講壇，經常呼喊「尊崇聖靈！」我相信在基督教界裡，由始至今，每一個復興運動的秘訣都是尊崇聖靈，儘管有時候未必用這四個字去表達。信徒若尊崇聖靈，就會讓聖靈掌管他們的生命，讓聖靈高舉基督、幫助他們認罪、謙卑自己、以基督為首，容讓聖靈這</p>
              <p className="text-gray-700 leading-relaxed mb-3">些工作不受阻礙、不受壓抑地發揮。教會從前所有興旺時期的記載都證實這點。那麼，按目前的情況來說，聖靈的感動曾經長期被銷滅，我們怎樣在這些日子尊崇他呢？</p>
              <p className="text-gray-700 leading-relaxed mb-3">這個問題，實在是現今教會流行討論的中心問題，他使我們陷入混亂和無定之中。靈恩派信徒和居斯勞運動（CursilloMovement）有他們回答的方法：釋放在你裡面的聖靈，開放自己，讓他直接影響你。宣導關係更新的人有另一種回答：敢於表達真我，敢於在其他信徒面前披露軟弱。在愛德華滋（Jonathan Edwards）的神學傳統下的基督徒有第三種答案：祈禱，及隨時準備接受聖靈的澆灌。主流教會的專業大公派人士提供第四種答案：培植一種改革性的社會運動熱潮。我們姑且看這些答案並非互相排斥，但他們的著重點和輕視點，彼此間全不相符。因此，問題仍然存在，迫我們去正視：今天我們應該怎樣尊崇聖靈呢？我們怎樣緊隨他的步伐，讓他能夠在我們中間順利工作呢？我們這些想更深認識聖靈的人，該在芸芸鼓手當中，追隨哪一位呢？上述提及的所有運動以及其他的運動，都宣稱被聖靈領導，我們怎麼分辨任何一個運動確有聖靈引導呢？聖經的權威</p>
              <p className="text-gray-700 leading-relaxed mb-3">解答這些問題的方法原則，就是要用聖經正典的教導去試驗各種不同的觀點。這包括提出以下的問題：那些觀點是否建基在聖經真理上，是否正確地應用出來？也要問：他們有沒有遺漏了一些聖經經常強調的重點？是否需要糾正方向或著重點，以配合聖經真理的優先次序呢？因為聖經的教導是神自己給我們的訊息，而當聖經不斷把真理展示給我們看時，我們在與神的關係上，有系統地把我們的思想、觀點，和目標——一降服在聖經的審判之下，這種內心的操練，不僅僅是基督教芸芸傳統中的其中一種傳統，他是基督教本身內蘊的學問。</p>
              <p className="text-gray-700 leading-relaxed mb-3">耶穌，我們的基石，希伯來書的作者稱他為「„„為我們信心創始成終„„」者（一二 2），他以身作則地拿聖經——即是我們的舊約——作為他父親永恆有效的應許、指引和管治我們生命的準則，又同樣以身作則地表明他自己的教訓，以及門徒奉他的名所傳的道為神聖而具有權威的。所以，活在聖經的引導下這個原則（現時指新舊兩約），也許可以公允地說是直接從基督而來的。就好像他交給我們每人一本聖經，告訴我們遵從聖經的教導就等如跟從他一樣。</p>
          </div>
        )}
      </div>

      <div className="mb-4 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => toggleSection('sec1')}
          className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-2">
            <Bell className="w-4 h-4 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800 text-left text-sm">那柔拉（ Savonarola）、愛德華滋（Jonathan Edwards）、懷特菲（ George </span>
          </div>
          {expanded['sec1'] ? <ChevronUp className="w-4 h-4 text-gray-500 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />}
        </button>
        {expanded['sec1'] && (
          <div className="p-5 bg-white">
              <p className="text-gray-700 leading-relaxed mb-3">芬尼（Charles Finney）、馬欽芮（ Robert Murray McCheyne ）等領袖帶動的復蘇；英國十七世紀清教徒的蘇醒；十八世紀中葉英國福音派復興和美國大復蘇運動；一八五○年代及一九○○年代全球性的屬靈奮興；最近期如東非的復興運動，始自一九三○年左右，現今仍持續不斷。這些運動彼此之間，以及與聖經上的範例顯著地相似。在這裡，我們所看見的是神獨特及不斷重演的工作，為要喚醒憔悴疲弱的教會，並借著隨之而來福音的興旺以擴展基督的國度。</p>
              <p className="text-gray-700 leading-relaxed mb-3">我們應該怎樣稱呼神這項重大的工作？自十七世紀以來，一直被沿用的字眼是復興（revival）。可是因為這個字眼令人聯想起某種佈道形式、某種情緒化的敬虔及公開的歇斯底里表現，對於一些人來說，比較難以接受，所以我們不難明白為何靈恩派信徒及其他運動的跟隨者寧願採用更新（renewal）一詞。我們也不應該在這字眼運用的事情上多生枝節。正如霍布士（ Thomas Hobbes）在很久以前已經觀察到，字句是聰明人的計算器（他們確是靠字句運算），但對於愚笨人來說，字句卻是貨幣，意思是除非使用了某些特定的字彙——正如慣常說，按對了鈕——，否則他們便不知所說的是什麼；然而，對於他們所鍾愛的習慣用語，其實是有許多意義相等的字彙可以取代的。我們應該用心聽取霍布士的警告，牢記兩個人可以用不同的字眼，意指相同的事物，即如我們可以用相同的字眼，意指不同的事物一樣。但無論如何，我們需要提出的問題是：靈恩派的更新理想和經驗與福音派的復興理想和經驗是否完全一樣？我想答案是：不大相同。</p>
              <p className="text-gray-700 leading-relaxed mb-3">正如我們曾經探討過，靈恩運動至少藉以下方法去尋求整個教會的更新：</p>
              <p className="text-gray-700 leading-relaxed mb-3">1．藉聖靈的洗或「釋放」聖靈，重新發現永活真神和基督並基督徒生活的超自然層面。   2．回到聖經——神默示的話語——裡去，讓靈魂得到培育。</p>
              <p className="text-gray-700 leading-relaxed mb-3">3．養成私人和公開敬拜的習慣，藉以把整個人——包括身體和心靈——帶進完全等候及倚靠聖靈的境界中（說方言就在這裡出現）。</p>
              <p className="text-gray-700 leading-relaxed mb-3">4，一種閒適的、參與式的公開讚美和公禱。</p>
              <p className="text-gray-700 leading-relaxed mb-3">5．在基督的身體裡，基督的每一個肢體都運用屬靈恩賜去事奉。</p>
              <p className="text-gray-700 leading-relaxed mb-3">6．透過社群生活方式，探索各種事奉的可能性。</p>
          </div>
        )}
      </div>
    </div>
  );
}
