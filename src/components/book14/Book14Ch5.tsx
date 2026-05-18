import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Search, HelpCircle, Check } from 'lucide-react';

export default function Book14Ch5() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">第5章</h1>
        <h2 className="text-xl font-semibold text-gray-700">聖靈的路徑：成聖面面觀</h2>
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
            <p className="text-gray-700 leading-relaxed mb-3">基督徒竟然在聖潔的問題上引起爭論，聽起來令人覺得丟臉，又像自我譴責，一如要用拳頭來爭取和平一樣荒謬。溫柔和寬容豈不是聖潔的表現嗎？那麼，對聖潔教義的爭辯豈不傷害了聖潔的真諦嗎？而那爭辯者及其門派弟子，不管他們站在哪一方，豈不是自相矛盾嗎？爭辯本身豈不是不屬靈的，並且銷滅聖靈的感動嗎？答案是有兩重的。首先，若然為了眾靈魂的益處，爭辯並非不屬靈，一如關於基督和保羅，也引起不少爭論，只要我們尊重與我們意見相左的人就好了。其次，那些以避免爭論為美德的人，比起那些著意保護自己，其實臉皮薄而又自負的人高尚不了多少，而且，他們也許並沒有意識到真理的價值。有時候，爭辯是老師的責任，即使他教授的題目是聖潔，兼且沒有幾個人會為他的論點喝采。</p>
            <p className="text-gray-700 leading-relaxed mb-3">在本章裡，我將為一些需要幫助的人而介入一些爭辯中。為了緩和緊張的爭論氣氛，我會盡可能少一點提名討論，也絕不會提起任何尚在人間而觀點不為我接納的人的名字。若然讀者發現我否定了他們本來持守的觀點，我盼望他們不要誤解我喜歡口舌之爭（其實我本人並不愛好爭鬧，只是迫於無奈而已）。我之所以這樣爭辯，完全是出於對人的愛。我從自己和別人的經驗中，深知道若對聖潔存錯謬的見解，不管這見解如何誠懇，他仍把人關鎖在虛妄和拉緊的狀態中，使人內在生命的真誠和喜樂盡毀；若我能力可及，我極願挽救我的讀者脫離這窘境。縱使你拒絕我以下的論點，仍請你記著我說這一番話的苦心。</p>
            <p className="text-gray-700 leading-relaxed mb-3">從牧養的角度看，第一場戰役就是要說服基督徒聖潔是必需的。我盼望在上一章我已極盡口舌之能說服人相信這一點。然而，基督徒願意委身追求聖潔後，第二場戰役又要開始了，這一回是如何在日常生活中實踐聖潔。在上一章，我們綜覽聖潔的七個合乎聖經的特點，希望這七個特點能為聖潔這題目圓滿地劃出一個範圍。固然，在認同這七個原則的大前提下，任何分歧都不過是次要的。然而，分歧是存在的，包括觀念和重點上的分歧都有，於是，我下一步就要把這些不同觀點勾畫出來，其中有三種主要觀點是需要分別清楚的。</p>
            <p className="text-gray-700 leading-relaxed mb-3">第一個是「奥古斯丁式」取向的觀點，這是奥古斯丁用來對抗伯拉糾（Pelagius）的觀點，也是改革宗為對抗半伯拉糾主義而重申的觀點，至今還被保守的路德宗和改革宗的教師所堅持。他根本的原則是：神出於他的恩典（意指對罪人白白的、不計功勞代價的愛）和借著他的恩典（意指聖靈在我們個人生命上的工作），必定在我們裡面動工，並且現在就如此動工，幫助我們達成他所要求的信、望、愛、敬拜和順服。套用奥古斯丁的話，神所賜下的，正是他所要求於我們的。事情必須如此，因為我們的本性都是與神為敵的，而且永遠不能完全擺脫罪惡的薰染。若非靠著恩典，我們實在不可能向神作出回應，縱使恩典的靈在我們生命裡工作，我們一切的回應和一切的義，都被罪惡所破損，故此，我們既然不能達致完美，就只配受到拒絕。</p>
            <p className="text-gray-700 leading-relaxed mb-3">奥古斯丁主義只在改革宗教會裡貫徹始終地發展（在抗辯宗以外，幾乎所有號稱持守奥古斯丁觀點的人，除卻九世紀的哥特沙克［Gottschalk］、十四世紀的布拉特瓦丁［Bradwardine］和威克裡夫</p>
            <p className="text-gray-700 leading-relaxed mb-3">［Wycliffe］，以及十七世紀的詹森主義者［Jansenists］，都或多或少修改了其中有關主權和恩典的重點）。</p>
            <p className="text-gray-700 leading-relaxed mb-3">在抗辯宗主義裡，上述根本的原則得到兩項新的重點支持。第一，改革宗堅持有所謂現時完全被神接納（即稱義），以及基督的義歸予我們就是這稱義唯一及充分的基礎。（奥古斯丁持有一些觀念，認為我們借著恩典應獲取救恩。這些觀念為日後羅馬天主教所追隨。）第二，清教徒和虔信派教徒堅持重生（新生）是關鍵；重生是無可改變的，借著恩典，透遇與基督聯合，使人心改變，生出信心，這信心永不消逝。（奥古斯丁懷疑並非所有進入神所賜恩典的生命裡的人，都獲得堅忍的恩賜，這一點也成為日後羅馬天主教的觀點。）在這經過修正的架構內，一些人如歐文（Owen）、波士頓</p>
            <p className="text-gray-700 leading-relaxed mb-3">（Boston）、懷特菲（Whitefield）、愛德華滋（Edwards）、司布真（Spurgeon）、萊耳（Ryle ）和該柏爾（Kuyper）等，都已清楚貫徹地解說其中重要原則，就是在基督徒的生命裡，神所賜下的正是他所要求於基督徒的。</p>
            <p className="text-gray-700 leading-relaxed mb-3">華菲德（B．B．Warfield）描繪奥古斯丁主義為一種「可憐罪人的基督教」1——在今天這個喜歡自我讚賞，堅信精神健康的年代裡，這個形容乍聽起來非常可怕。然而我們極有可能誤解其中的含義。首先，當時用的是古老的語言。在一五四九年版道地奥古斯丁式的聖公會祈禱手冊（Anylican PrayerBook）裡，刊載蒙灰日（即大齋期首日）禱文，參加崇拜者要宣認自己是「無用的泥土、可憐的罪人」；今天，聖公會經常帶領會眾同誦：「在我們中間毫無健康，„„求主憐憫我們這些得罪你的可憐罪人。」也同樣可回溯到相若的時期。這些字句並非意味著我們需要培養一種可憐兮兮的心態，我們亦不應該視這些句語為中世紀末葉病態的延續，抑或一種神經質的自我厭惡感和否定自我價值的表達（實際上，在我們這個年代，竟然上述每一種錯謬解釋都有人支持！）。在英文裡，「可憐」（miserable）一詞源自拉丁文 miserandi，意思是我們作為罪人，經常處於需要神的恩慈和憐恤的光景中；這不是神經質的虛幻主義病態，而是健康的基督徒所承認和接受的事實。較諸其他闡釋聖潔的見解，「可憐罪人的基督教」無疑較為強調我們的罪性，但這種描述反映出一種其清晰洞見的現實主義，絕不是貧瘠或枯竭的言論。</p>
            <p className="text-gray-700 leading-relaxed mb-3">奥古斯丁的觀點有三個重點：謙卑</p>
            <p className="text-gray-700 leading-relaxed mb-3">首先，奧氏堅持在我們與神的相交中，需要極審慎的謙卑態度，不信任自己，懷疑自己。為什麼？因為神是完全聖潔、純全、良善的，他的信實永不改變，必定實現他的應許，而我們卻在這種種質素上沾不上邊兒。我們活在羅馬書七章下半部所描述的境況中：「„„立志為善由得我，只是行出來由不得我。」（羅七 18）我們從前在亞當裡，是生來帶著罪性的，如今在基督裡，罪性的王權縱然被推翻，卻沒有完全消滅，仍舊存在我們裡面。我們經常受到罪的挑引、矇騙，被無法無天的驕傲和情欲所驅使，又被反抗神的自作主張和自我放縱（奥古斯丁採用的字眼是「自負」［superbia］和「欲望」</p>
            <p className="text-gray-700 leading-relaxed mb-3">「concuPiscentia」）重重圍困。因此，我們需要在救主神面前降卑，倒空自己，認識到自己的無能，完全倚靠神，也就是耶穌所說的虛心（太五 3）；否則，我們會在不知不覺間變得愈來愈驕傲自大，而驕傲往往使人陷墮（參林前一○12）。奥古斯丁主義的跟隨者肯定本仁（Bunyan）在唱出以下歌詞時，已得著這真理。</p>
            <p className="text-gray-700 leading-relaxed mb-3">降卑的人無需害怕跌倒，     卑微的人沒有驕傲；     謙卑的人永遠擁有</p>
            <p className="text-gray-700 leading-relaxed mb-3">他們看見聖靈部分的工作，就是不斷使我們愈來愈意識到神榮耀的聖潔和我們昏暗的罪孽形成強烈的對比。因此，在成聖的過程中，我們愈像神，與神愈加親近，也愈漸醒覺到神和我們之間有莫大的差距。</p>
            <p className="text-gray-700 leading-relaxed mb-3">所堅持的第二個重點，就是神所有僕人在他們的行事為人上，都需要極進取的行動。為什麼？因為那住在我們裡面的罪，按其本性是不願遵行神旨意的，這罪性使我們對「善行」冷漠、疏懶、怠惰，並引致我們跟自己兒戲，跟神兒戲，好使我們合理地為自己的荒疏鬆懈解釋，但神拯救我們是要我們行善的（參弗二 10；多二 ll—14）。</p>
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
              <h4 className="font-semibold text-gray-800 mb-2">稱義與成聖的關係：分別但不分離</h4>
              <p className="text-gray-700 leading-relaxed">稱義是法庭上的宣告（我是義的），成聖是生命的更新（我成為義的）。許多信徒分不清這兩個概念，要麼把成聖視為獲取稱義的方式（道德主義），要麼把稱義視為成聖的終點（輕視成聖的必要性）。巴刻強調：稱義是成聖的基礎，成聖是稱義的果實。沒有稱義，成聖是無根之木；沒有成聖，稱義的宣告就缺乏生命的見證。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">成聖的兩個動作：「治死」與「活出」</h4>
              <p className="text-gray-700 leading-relaxed">清教徒傳統將成聖描述為兩個互補的行動：(1)「治死」（mortification）——持續地壓制、對抗、釘死肉體的罪性；(2)「活出」（vivification）——讓聖靈的生命在我們身上成長、開花、結果。成聖不是只有「不做壞事」（消極的），更是「活出基督的生命」（積極的）。一個只強調「治死」的信仰容易變成壓抑和律法主義；一個只強調「活出」的信仰容易忽略罪的嚴重性。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">成聖的群體維度：教會的角色</h4>
              <p className="text-gray-700 leading-relaxed">個人的成聖不是孤立的旅程。聖靈透過教會群體來塑造我們：通過講道的真理、通過聖禮的記念、通過肢體的彼此勸勉、通過共同敬拜的操練。一個脫離群體的「個人信仰」會缺乏成聖的重要資源。教會不是成聖的終點，但是成聖不可缺少的環境。</p>
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

          
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">1.</span>
              <p className="text-gray-700">你能清楚地分辨「稱義」和「成聖」的意義嗎？在你的屬靈生活中，這兩個真理如何互相支持？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">你目前的屬靈生活中，「治死」和「活出」的比例是怎樣的？有沒有哪一方面過分強調或忽略？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">成聖有哪些「面面觀」是你之前可能忽略的（如：思想的更新、情感的淨化、意志的順服、人際關係的改善）？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">你的教會群體（小組、肢體關係）在你個人成聖旅程中扮演著什麼角色？這個角色是否充分？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">成聖的過程中，你有沒有過灰心或放棄的時刻？是什麼幫助你重新站起來？</p>
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
          <div className="p-5 bg-white space-y-4">

          
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🌱 成聖的全人評估</h4>
              <p className="text-gray-700">從五個維度評估自己的成聖進度：(1)思想——我的思想模式是否更像基督？(2)情感——我的情感是否更加平衡和受聖靈管理？(3)意志——我在面對試探時的意志力有沒有更強？(4)言語——我說話的方式是否更加建立人？(5)人際關係——我對待他人是否更有基督的愛？為每項評分1-10，並設定下月目標。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✂️ 「治死」的操練</h4>
              <p className="text-gray-700">「治死」需要識別觸發點。記錄一週內你最容易犯的罪：發生在什麼場合？在什麼情緒下？與什麼人在一起時？找出模式，然後計劃如何提前避免或預備好應對。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🌳 「活出」的操練</h4>
              <p className="text-gray-700">每週刻意做一件體現聖靈果子的事：可能是主動的原諒、慷慨的給予、耐心的傾聽、或積極的鼓勵。把它記錄下來，一個月後回顧你的成長足跡。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">👥 尋找屬靈導師</h4>
              <p className="text-gray-700">找一位比你屬靈成熟的信徒，定期分享你成聖旅程中的掙扎和進步。真實的問責關係是成聖最有效的環境之一。如果沒有這樣的關係，這個月就開始禱告和尋找。</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
