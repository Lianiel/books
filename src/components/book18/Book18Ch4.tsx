import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Search, HelpCircle, Check } from 'lucide-react';

export default function Book18Ch4() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">第四章</h1>
        <h2 className="text-xl font-semibold text-gray-700">教會歷史中的撒但</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">
            <div>
              <p className="text-gray-700 leading-relaxed mb-3">
                教會與撒但的爭戰並沒有隨著《啟示錄》這本書的結束而結束。撒但繼續在教會內外工作。他在有形教會中撒下敗壞、異端、爭競和分裂的種子。幾千年來，他多次推動了逼迫有形教會的浪潮。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">撒但在教會內部的工作</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                撒但促使了主教制的興起，使神職人員尋求擴大自己的權力和勢力範圍，爭當主教、大主教、高級主教和教皇。撒但助長了與聖禮有關的各種迷信，包括洗禮式重生、化質說和用彌撒代替聖餐。撒但鼓勵把異教的作法引入基督教敬拜中，比如使用羅馬異教祭司的法衣，敬拜圖畫、十字架、雕像和聖徒遺物。
              </p>
              <p className="text-gray-700 leading-relaxed">
                撒但慫恿很多人信奉錯誤的關於三位一體、基督本性和位格、聖經正典的教導，更不必提及關於來生的許多錯誤觀點，比如「煉獄」和「地獄的邊緣」等。有形教會的敗壞和虛假教會的興起，在很大程度上都是撒但的工作。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">撒但與伊斯蘭教的興起</h3>
              <p className="text-gray-700 leading-relaxed">
                隨著曾經一度非常興旺的中東和北非教會越來越敗壞和軟弱，撒但發起了一場反擊，激發了一個名叫穆罕默德的假先知說預言，見異象，興起阿拉伯支派作為軍隊追隨他，在戰爭中以武力使伊斯蘭教遍佈古代世界各個地方。在很多地方，基督教都被擊垮。今天，在長時間的休眠之後，伊斯蘭教，特別是其中的一些激進分子，再次被撒但挑動起來，把黑暗傳播到新的領域，致使全世界籠罩在恐怖氣氛之中。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">撒但與逼迫及極權主義</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                撒但通過各種邪惡的權勢做工，從古代到改教時代、大覺醒時期、復興時期以及整個十九世紀，一直在發動逼迫基督教的浪潮，在二十世紀為信仰獻出生命的基督徒，比以往各個世紀的總和還多。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在撒但的工作中，值得注意的還有希特勒為首的以毀滅猶太人和基督徒為目標的「國家社會主義」在德國的興起，還有主張無神論的馬克思主義或「國際社會主義」在俄國、東歐以及中國針對基督徒所發動的長期的恐怖統治。
              </p>
              <p className="text-gray-700 leading-relaxed">
                然而，嚴酷的逼迫時期卻常常是教會最蒙福的時期。特土良恰如其分地把教會比作收割過的田野。「收割得越頻繁，生長得越快，」特土良說。教會歷史證明，殉道者的鮮血一直是教會的種子。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">1. 歷史上對撒但的各種神學觀點</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                各個世紀以來，對於撒但的觀點有所不同。古代和中世紀教會對於撒但的觀點往往比較極端，甚至有些稀奇古怪，因而大大激發了驅鬼者這一職分的設立。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                教會第一位系統神學家奧利金說露西弗（賽14：12-15）是撒但，他因為驕傲而背叛了上帝，因而從天上墜落下來，但上帝仍然憐憫他。奧古斯丁同意撒但是露西弗，但拒絕奧利金的認為撒但可以與上帝重新和好的奇想。奧古斯丁相信撒但煽動人犯罪作惡，擁有相當多的知識，有能力攻擊人。托馬斯·阿奎那認為撒但曾經是地位最高的天使，因為驕傲，在被創造後立刻墮落，並誘使那些追隨者成為他的臣民。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                馬丁·路德雖然反對中世紀教會過分強調撒但，卻把很多事情都歸於撒但。他尤其反對驅鬼者這一職分。路德說，我們不像基督和使徒那樣，「我們自己沒有能力逐出邪靈，我們也不必嘗試那樣做」。然而，只要我們相信聖經並禱告，就足以抵擋撒但。路德寫道：「撒但憎恨上帝的聖言勝過別的一切。」他在《上帝是我們堅固保障》中寫道：「這個世界的王也許仍然殘忍兇猛，卻不能傷害我們中任何人，他已經受到審判；這事已經成就；一句話就可以擊倒他。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                約翰·加爾文駁斥了那些「毫無根據地說邪靈只是不良情緒」的人，指出了許多證明撒但和邪靈存在的經文。他主張，聖經關於撒但及其邪靈的教導應當喚醒我們「警惕他們的計謀」（《基督徒敬虔學》1：14：13-19），尤其要用保羅在《以弗所書》第6章10至18節中所闡述的信心、禱告以及軍裝的其他部分來裝備我們自己。加爾文和路德一樣反對像羅馬天主教那樣過度關注魔鬼的活動；他避免了那個時代盛行的各種迷信，但仍然認為邪靈附體是真實存在的。
              </p>
              <p className="text-gray-700 leading-relaxed">
                清教徒特別強調撒但如何模仿聖靈的工作。約拿單·愛德華滋在反思18世紀40年代的大覺醒運動時寫道：「有許多欺詐的靈一直在攪擾人們，他們常常化作光明天使，用盡一切辦法欺哄人，陰險狡猾又大有能力，模仿上帝之靈的運作。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">2. 當代對撒但的否認與撒但教的興起</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                繼十九世紀和二十世紀的自然主義之後，自由主義和新正統基督教拒絕承認撒但的真實存在，認為那是古老的迷信。魯道夫·布林特曼就是這樣一位不可知論者，他寫道：「我們不可能同時既使用電燈，運用當代醫學和外科發現，卻又相信新約世界中所描述的污鬼和邪靈的存在。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                就連經常去教會的人也把魔鬼從他們常用的詞彙中剔除了。根據最近的調查結果表明，英國聖公會信徒中有76%的人否認魔鬼的真實存在。具有諷刺意味的是，在這些教會人士和神學家否認魔鬼之真實存在的同時，人們對於巫術、占星術、異教信仰和撒但教的興趣卻在日益激增。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                現代撒但教是由阿萊斯特·克勞利（Aleister Crowley，生於1875年）引入美國的。加德納以及後來的安東·拉維伊（Anton LaVey，生於1930年）於1966年建立了撒但教會。「上帝死了，撒但活著」是拉維伊的許多當地洞室或教會的口令。有些作者指出，僅在美國就有500個可以確認的撒但教團體，在全世界有10000個。
              </p>
              <p className="text-gray-700 leading-relaxed">
                五旬節派和靈恩派界於否認撒但和敬拜撒但之間，越來越強調撒但的真實存在和屬靈爭戰的重要性。他們經常會錯誤地鼓勵對邪靈的不健康的興趣。他們認為在所面臨的每個問題背後都有一個邪靈；個人的責任讓位於邪靈的影響。各種迷信的應對辦法，比如測繪靈界地圖，舉行趕鬼儀式，變得比認罪、悔改和重新順服基督這些合乎聖經的解決方法更盛行。對於以上帝的聖言為中心的福音主義信徒來說，今天恰恰是一個傳講合乎聖經的平衡的主張的機會，既不要否認其存在，也不要執迷其中。
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
              <h4 className="font-semibold text-gray-800 mb-2">殉道者的鮮血是教會的種子</h4>
              <p className="text-gray-700 leading-relaxed">
                特土良（約160-220年）說「殉道者的鮮血是教會的種子」，這在教會歷史中一再得到印證。羅馬帝國三百年的逼迫不但沒有消滅教會，反而使她遍佈帝國各地。中國文化大革命期間（1966-1976年）宣布要在中國消滅基督教，但逼迫結束後，教會人數從約百萬增長至數千萬。這一模式揭示：撒但藉逼迫所盼望的消滅，上帝卻藉此使教會更深、更廣地擴展。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">宗教改革者對撒但的平衡態度</h4>
              <p className="text-gray-700 leading-relaxed">
                路德和加爾文都走在兩個極端之間：既不像中世紀那樣過度迷信撒但的作為，也不像現代自由派那樣否認撒但的存在。路德的《上帝是我們堅固保障》呈現了這種平衡：撒但確實強大，但「一句話就可以擊倒他」——那句話就是上帝的真理。加爾文強調，認識撒但的目標不是使人恐懼，而是使人警醒並穿戴全副軍裝。這種平衡至今仍是改革宗傳統的標誌。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">否認撒但存在的文化後果</h4>
              <p className="text-gray-700 leading-relaxed">
                布林特曼等現代神學家否認撒但存在，其結果之一是：人們在解釋邪惡時只剩下人類學（人的自私）和社會學（結構問題）。這導致教會在面對深層的屬靈黑暗時手無寸鐵，因為所有的解決方案都落在人的層面。C.S.路易斯在《魔鬼家書》序言中說：「關於魔鬼，有兩個同樣有害的錯誤：不相信他們存在，或者對他們過度著迷。」
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">愛德華滋對撒但模仿聖靈的警告</h4>
              <p className="text-gray-700 leading-relaxed">
                約拿單·愛德華滋（1703-1758）在《論基督徒的敬虔情感》中提出了辨別真假屬靈工作的重要標準。他警告說，撒但不僅攻擊教會，更危險的是他模仿真實的屬靈工作——製造虛假的復興情緒、假的確信感、膚淺的喜樂，但沒有真實的悔改和生命改變。辨別的標準不是情感的強烈程度，而是是否使人更愛基督、更謙卑、更愛弟兄姊妹。
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
          <div className="p-5 bg-white space-y-4">
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">1.</span>
              <p className="text-gray-700">作者列舉了撒但在教會內部的許多工作（神職人員追求權力、聖禮迷信、異端等）。你認為在當代教會中，哪些撒但的工作模式最為明顯？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">特土良說「殉道者的鮮血是教會的種子」。這個歷史真理對你在面對信仰阻力或逼迫時有何鼓勵？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">路德和加爾文都在「過度迷信撒但」和「否認撒但」之間走平衡路線。在你的成長環境和教會文化中，哪個極端更為常見？這如何影響了你的屬靈爭戰觀？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">愛德華滋警告撒但會「模仿聖靈的工作」。你如何辨別一個屬靈工作或運動是真實的還是被撒但模仿的？你有哪些分辨的標準？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">76%的英國聖公會信徒否認撒但的真實存在。你認為這種「世俗化」如何滲透到你所在的教會文化中？這對信徒的屬靈生命有何影響？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">教會歷史顯示撒但一再試圖剷除上帝的教會，卻一再失敗。這個歷史記錄如何幫助你在當代教會面臨各種挑戰時保持信心？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">📖 學習教會歷史的屬靈警覺</h4>
              <p className="text-gray-700 mb-2">本週選擇閱讀一段教會歷史（殉道故事、宗教改革等），並思考：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>撒但在這段歷史中使用了哪些策略？</li>
                <li>上帝如何最終使教會得勝？</li>
                <li>這段歷史對你當前的信仰處境有什麼啟示？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 自我檢視：我偏向哪個極端？</h4>
              <p className="text-gray-700 mb-2">誠實地評估你對撒但的態度，用1-10分評估（1=完全否認，10=過度迷信）：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>我在日常禱告中多常考慮屬靈爭戰的維度？</li>
                <li>當遭遇問題時，我多常把它歸於屬靈因素或人的因素？</li>
                <li>我的教會在這個量尺上落在哪個位置？</li>
                <li>什麼樣的平衡才是聖經性的？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 為受逼迫的教會代禱</h4>
              <p className="text-gray-700 mb-2">「殉道者的鮮血是教會的種子」。本週為受逼迫的教會實際行動：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>了解一個目前受逼迫的國家或地區的教會情況</li>
                <li>每天用5分鐘為他們代禱</li>
                <li>考慮支持一個服事受逼迫教會的機構</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">🙏 本章禱告</h4>
              <p className="text-gray-700 leading-relaxed italic">
                「主啊，感謝祢讓我看見撒但在教會歷史中的失敗。他一次次攻擊祢的教會，卻一次次失敗。今天他仍在工作，求祢賜我清醒的眼光，既不輕忽他的存在，也不過分害怕他的攻擊。幫助我的教會走在平衡的道路上，以聖經真理為根基，以禱告為武器，在任何逼迫中仍然站立。奉耶穌的名祈求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
