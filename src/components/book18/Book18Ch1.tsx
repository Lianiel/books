import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Search, HelpCircle, Check } from 'lucide-react';

export default function Book18Ch1() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    exploration: true,
    questions: true,
    practice: true,
  });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-600 to-rose-700 bg-clip-text text-transparent">第一章</h1>
        <h2 className="text-xl font-semibold text-gray-700">聖戰</h2>
        <p className="text-sm text-gray-500 mt-1">第一部分：認識敵人——撒但及其歷史</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">你有一個仇敵</h3>
              <p className="text-gray-700 leading-relaxed">
                如果你是一個真正的信徒，撒但就憎恨你。他之所以憎恨你，是因為你有基督的形象，是上帝在基督耶穌裡所造的精品，為要行各樣的善工，並且你是從撒但的權勢下被搶出來的。你已經離棄撒但，逃離他的領地。因著上帝的恩典，你承認基督是你的主。你和彼得一樣見證：「禰是基督，是永生上帝的兒子」（太16：16）。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                撒但憎恨你，因為基督在你裡面，因為你愛基督。撒但想要你走回頭路。正如耶穌對門徒所說的那樣：「撒但想要得著你們，好篩你們像篩麥子一樣」（路22：31）。所以，撒但想要像篩麥子一樣篩你們。不要高估撒但，也不要低估撒但。他既不是一個墮落的神靈，更不是上帝。他不過是一個墮落的天使而已。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">撒但不是全能的</h3>
              <p className="text-gray-700 leading-relaxed">
                撒但不是全能的。當然，他是一個很有能力的敵人。約翰·布蘭查德寫道：「我們的對手有生命，老奸巨滑，足智多謀，他比最老的基督徒更長壽，比最勤勞的人更忙碌，比最強壯的人更勇猛，比最有智慧的人更聰明。」每個真正的基督徒都置身於聖經中所說的屬靈爭戰中（創3：15；啟12：7）。約翰·班揚（John Bunyan）稱之為聖戰。這個屬靈爭戰或聖戰是永久性的爭戰，要對付的就是三大敵人：魔鬼、世界和肉體。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">一、激烈的爭戰</h3>
              <p className="text-gray-700 leading-relaxed">
                與魔鬼和邪靈之間的爭戰是激烈的。這場爭戰生死攸關，是光明與黑暗的較量。黑暗權勢處於撒但的轄制之下，服從他的命令。撒但手下的軍官是以執行他的命令為樂的邪靈。撒但的軍隊是侵略成性，惡毒殘忍，它的權勢在高空之中，包圍著我們。這支軍隊的能力非常強大，我們憑自己的力量無法與之爭戰，但我們既不能向撒但妥協，更不能繳械投降。相反，我們務要憑著良心遵行聖經的指導，抵擋魔鬼（雅4：7），勝過撒但。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">二、屬靈的爭戰</h3>
              <p className="text-gray-700 leading-relaxed">
                我們抵擋撒但及其手下各種邪靈的爭戰是屬靈的。我們不是用槍、坦克或原子武器來與這個敵人爭戰，也不僅僅是憑血氣爭戰。正如保羅在寫給以弗所人的信中所說：「因為我們並不是與屬血氣的爭戰，乃是與那些執政的，掌權的，管轄這幽暗世界的，以及天空屬靈氣的惡魔爭戰」（弗6：12）。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                保羅說，這場爭戰不是為了屬世的權勢、財產或榮譽。它有更高的目標，那就是真理的屬靈真實性、公義、永生上帝及其兒子的榮耀。在屬血氣的有形的敵人背後，是屬靈的軍隊和無形的敵人。摔跤是近距離的屬靈衝突，激烈而艱辛。在摔跤過程中，對手之間沒有距離，他們緊緊抓住對方不放。無論是作為黑暗王子，還是光明天使，在這場生死攸關的屬靈爭戰中，撒但都是與我們進行短兵相接的白刃戰。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">三、必要的爭戰</h3>
              <p className="text-gray-700 leading-relaxed">
                抵擋撒但及其手下邪靈的爭戰是必要的。就像當今世界很難避免與恐怖主義爭戰一樣，我們也無法避免與撒但的爭戰。無論是否願意，我們都處在戰爭之中。我們無法訴諸和平主義，也不能要求延期服役，更無法避免子彈和炮彈。處於戰爭之中，卻沒有意識到這一點，是極其危險的。如果我們忽視敵人，就註定使自己失敗。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                因此，保羅吩咐我們「要穿戴上帝所賜的全副軍裝，就能抵擋魔鬼的詭計」（弗6：11）。如今太多基督徒沒有注意到保羅的吩咐。太多教會談論的是解除武裝，而不是加強軍備。清教徒湯瑪斯·布魯克斯（Thomas Brooks）寫道：「基督、聖經、你們自己的心和撒但的詭計是首先必須研究的四件大事」（《寶貴的應對辦法》，15頁）。如果我們沒有認識到撒但的目標、力量和局限，我們就疏忽大意，低估了敵人的力量。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-2 text-lg">奔向勝利</h3>
              <p className="text-gray-700 leading-relaxed">
                在這本小書中，我們要考察的就是撒但和他的詭計。我相信我們所學的將會幫助我們奮力爭戰，堅決爭戰，繼續爭戰，直到我們徹底戰勝敵人（參《海德堡教理問答》，127問）。願上帝在爭戰中幫助我們。
              </p>
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
              <h4 className="font-semibold text-gray-800 mb-2">為什麼聖戰是每位信徒的現實？</h4>
              <p className="text-gray-700 leading-relaxed">
                屬靈爭戰不是某些特別靈命層次的信徒的專屬經歷，而是每一位重生信徒的現實處境。當一個人從撒但的權勢下歸回基督，他就自動成為撒但的仇敵。《創世記》3章15節所記載的「女人後裔」與「蛇的後裔」之間的爭戰，從那時起就延伸到每一位信徒的生命中。不參與爭戰的信徒不是活在和平中，而是活在危險的麻木狀態中。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「屬靈爭戰」與「心理問題」如何分辨？</h4>
              <p className="text-gray-700 leading-relaxed">
                改革宗神學強調，我們不應把所有的困難都歸咎於撒但，也不應忽視撒但在信徒生命中的真實影響。真正的屬靈爭戰通常涉及對信仰核心的攻擊——對救恩的疑惑、對上帝良善的否定、對禱告的攔阻。而心理或身體問題往往有其自然原因。智慧在於能夠分辨這兩者，既不陷入靈恩派對屬靈爭戰的過度強調，也不落入自由派對其存在的徹底否認。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「聖戰」（Holy War）的歷史神學背景</h4>
              <p className="text-gray-700 leading-relaxed">
                約翰·班揚在《聖戰》（The Holy War）中描繪了「人心城」（Mansoul）被魔鬼佔領，後被王子以馬內利（Immanuel）拯救的故事。這個比喻來自《以弗所書》第6章的屬靈爭戰神學。清教徒傳統特別強調這種爭戰是在心靈內外同時進行的——外部有世界的試探，內部有肉體的私欲，加上撒但的攻擊，三面作戰。認識這三重敵人的聯合攻勢，是屬靈成熟的重要標誌。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">平衡看待撒但：既不否認也不執迷</h4>
              <p className="text-gray-700 leading-relaxed">
                周必克博士在本書中呼籲一種合乎聖經的平衡：既不要像現代自然主義者那樣否認撒但的存在，也不要像某些靈恩派那樣對撒但過分執迷，看每個問題後面都有邪靈。正確的態度是：清醒認識撒但的真實性和危險性，同時更深地確信基督在十字架上已經打敗了撒但，信徒在基督裡比撒但更有能力。這種平衡本身就是對撒但的一種勝利。
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
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">1.</span>
              <p className="text-gray-700">你在生命中是否真實地感受到屬靈爭戰的存在？具體體現在哪些方面——是在禱告中、在靈修中、還是在人際關係或道德抉擇中？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">作者說「不要高估撒但，也不要低估撒但」。在你的信仰生活中，你更容易犯哪一種錯誤？這對你的生命有什麼實際影響？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">你如何理解「屬靈爭戰是必要的」這個說法？這個認識如何改變你對日常生命挑戰的看法？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">布魯克斯說「基督、聖經、你們自己的心和撒但的詭計是首先必須研究的四件大事」。你對這四件事的認識各自處於什麼程度？哪方面最需要加強？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">周必克說撒但憎恨信徒是因為他們「有基督的形象」。這個認識如何影響你對自己身份的理解，以及你面對屬靈攻擊時的態度？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">你的教會在教導屬靈爭戰方面做得如何？是否有過度強調或嚴重忽視的情況？這對會眾的屬靈生命有什麼影響？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 屬靈爭戰意識培養</h4>
              <p className="text-gray-700 mb-2">每天早晨提醒自己正處於屬靈爭戰之中：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>起床後默想：「今天我是基督的精兵，有撒但要攻擊我」</li>
                <li>禱告祈求神賜智慧辨識撒但的詭計，賜力量抵擋試探</li>
                <li>每晚反思：今天哪些時刻感受到了屬靈的攻擊或試探？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 建立屬靈爭戰的基礎認識</h4>
              <p className="text-gray-700 mb-2">本週閱讀以下聖經段落，深化對屬靈爭戰的認識：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>《以弗所書》6：10-18（全副軍裝）</li>
                <li>《彼得前書》5：8-9（警醒抵擋）</li>
                <li>《雅各書》4：7（抵擋魔鬼）</li>
                <li>《約翰一書》4：4（更大的那位在你裡面）</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💪 面對試探的實際操練</h4>
              <p className="text-gray-700 mb-2">當面對試探或屬靈攻擊時，操練以下回應：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>立刻禱告，不要與試探「談判」</li>
                <li>宣告相關的聖經應許（如：「在我裡面的比在世界上的更大」）</li>
                <li>如有需要，告訴一位可信任的信徒代禱</li>
                <li>主動做合乎神心意的事，而不只是消極地抵擋</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 本章禱告</h4>
              <p className="text-gray-700 italic leading-relaxed">
                「主耶穌基督，感謝禰在十字架上已經打敗了撒但，使我不必在恐懼中面對仇敵。求禰幫助我清醒地認識屬靈爭戰的真實性，既不輕視仇敵，也不懼怕仇敵，因為我知道禰比他更有能力，禰的得勝也是我的得勝。幫助我每天穿戴禰所賜的全副軍裝，忠心地爭那美好的信心之仗，直到最後的勝利。奉耶穌的名，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
