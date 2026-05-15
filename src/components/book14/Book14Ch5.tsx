import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp, Star } from 'lucide-react';

export default function Book14Ch5() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ sec0: true });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          第5章
        </h1>
        <h2 className="text-xl font-semibold text-gray-700">聖靈的路徑：成聖面面觀</h2>
      </div>

      <div className="mb-4 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => toggleSection('sec0')}
          className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800 text-left text-sm">05聖靈的路徑：成聖面面觀</span>
          </div>
          {expanded['sec0'] ? <ChevronUp className="w-4 h-4 text-gray-500 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />}
        </button>
        {expanded['sec0'] && (
          <div className="p-5 bg-white">
              <p className="text-gray-700 leading-relaxed mb-3">基督徒竟然在聖潔的問題上引起爭論，聽起來令人覺得丟臉，又像自我譴責，一如要用拳頭來爭取和平一樣荒謬。溫柔和寬容豈不是聖潔的表現嗎？那麼，對聖潔教義的爭辯豈不傷害了聖潔的真諦嗎？而那爭辯者及其門派弟子，不管他們站在哪一方，豈不是自相矛盾嗎？爭辯本身豈不是不屬靈的，並且銷滅聖靈的感動嗎？答案是有兩重的。首先，若然為了眾靈魂的益處，爭辯並非不屬靈，一如關於基督和保羅，也引起不少爭論，只要我們尊重與我們意見相左的人就好了。其次，那些以避免爭論為美德的人，比起那些著意保護自己，其實臉皮薄而又自負的人高尚不了多少，而且，他們也許並沒有意識到真理的價值。有時候，爭辯是老師的責任，即使他教授的題目是聖潔，兼且沒有幾個人會為他的論點喝采。</p>
              <p className="text-gray-700 leading-relaxed mb-3">在本章裡，我將為一些需要幫助的人而介入一些爭辯中。為了緩和緊張的爭論氣氛，我會盡可能少一點提名討論，也絕不會提起任何尚在人間而觀點不為我接納的人的名字。若然讀者發現我否定了他們本來持守的觀點，我盼望他們不要誤解我喜歡口舌之爭（其實我本人並不愛好爭鬧，只是迫於無奈而已）。我之所以這樣爭辯，完全是出於對人的愛。我從自己和別人的經驗中，深知道若對聖潔存錯謬的見解，不管這見解如何誠懇，他仍把人關鎖在虛妄和拉緊的狀態中，使人內在生命的真誠和喜樂盡毀；若我能力可及，我極願挽救我的讀者脫離這窘境。縱使你拒絕我以下的論點，仍請你記著我說這一番話的苦心。</p>
              <p className="text-gray-700 leading-relaxed mb-3">從牧養的角度看，第一場戰役就是要說服基督徒聖潔是必需的。我盼望在上一章我已極盡口舌之能說服人相信這一點。然而，基督徒願意委身追求聖潔後，第二場戰役又要開始了，這一回是如何在日常生活中實踐聖潔。在上一章，我們綜覽聖潔的七個合乎聖經的特點，希望這七個特點能為聖潔這題目圓滿地劃出一個範圍。固然，在認同這七個原則的大前提下，任何分歧都不過是次要的。然而，分歧是存在的，包括觀念和重點上的分歧都有，於是，我下一步就要把這些不同觀點勾畫出來，其中有三種主要觀點是需要分別清楚的。</p>
              <p className="text-gray-700 leading-relaxed mb-3">第一個是「奥古斯丁式」取向的觀點，這是奥古斯丁用來對抗伯拉糾（Pelagius）的觀點，也是改革宗為對抗半伯拉糾主義而重申的觀點，至今還被保守的路德宗和改革宗的教師所堅持。他根本的原則是：神出於他的恩典（意指對罪人白白的、不計功勞代價的愛）和借著他的恩典（意指聖靈在我們個人生命上的工作），必定在我們裡面動工，並且現在就如此動工，幫助我們達成他所要求的信、望、愛、敬拜和順服。套用奥古斯丁的話，神所賜下的，正是他所要求於我們的。事情必須如此，因為我們的本性都是與神為敵的，而且永遠不能完全擺脫罪惡的薰染。若非靠著恩典，我們實在不可能向神作出回應，縱使恩典的靈在我們生命裡工作，我們一切的回應和一切的義，都被罪惡所破損，故此，我們既然不能達致完美，就只配受到拒絕。</p>
              <p className="text-gray-700 leading-relaxed mb-3">奥古斯丁主義只在改革宗教會裡貫徹始終地發展（在抗辯宗以外，幾乎所有號稱持守奥古斯丁觀點的人，除卻九世紀的哥特沙克［Gottschalk］、十四世紀的布拉特瓦丁［Bradwardine］和威克裡夫</p>
              <p className="text-gray-700 leading-relaxed mb-3">［Wycliffe］，以及十七世紀的詹森主義者［Jansenists］，都或多或少修改了其中有關主權和恩典的重點）。</p>
              <p className="text-gray-700 leading-relaxed mb-3">在抗辯宗主義裡，上述根本的原則得到兩項新的重點支持。第一，改革宗堅持有所謂現時完全被神接納（即稱義），以及基督的義歸予我們就是這稱義唯一及充分的基礎。（奥古斯丁持有一些觀念，認為我們借著恩典應獲取救恩。這些觀念為日後羅馬天主教所追隨。）第二，清教徒和虔信派教徒堅持重生（新生）是關鍵；重生是無可改變的，借著恩典，透遇與基督聯合，使人心改變，生出信心，這信心永不消逝。（奥古斯丁懷疑並非所有進入神所賜恩典的生命裡的人，都獲得堅忍的恩賜，這一點也成為日後羅馬天主教的觀點。）在這經過修正的架構內，一些人如歐文（Owen）、波士頓</p>
              <p className="text-gray-700 leading-relaxed mb-3">（Boston）、懷特菲（Whitefield）、愛德華滋（Edwards）、司布真（Spurgeon）、萊耳（Ryle ）和該柏爾（Kuyper）等，都已清楚貫徹地解說其中重要原則，就是在基督徒的生命裡，神所賜下的正是他所要求於基督徒的。</p>
          </div>
        )}
      </div>
    </div>
  );
}
