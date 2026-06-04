import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book24Ch4() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent">第四章</h1>
        <h2 className="text-xl font-semibold text-gray-700">辨認叛徒與神的保護</h2>
        <p className="text-gray-500 mt-1">如何辨認試探、得到神的遮蓋與火山的屬靈意涵（4.4-4.6）</p>
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
              <h3 className="font-bold text-purple-700 text-base mb-2">4.4 如何辨認叛徒</h3>
              <p className="text-gray-700 leading-relaxed">
                主鄭重警告作者，在末世的信徒群體中，叛徒問題將非常嚴峻。
                主說：「你們中間會出現叛徒，所以一定要學會辨認對方的靈。很多人企圖加入你們的行列。
                我現在就警告你們。如果沒有得到我的認可，不要隨便接收人，不管他們的請求有多麼迫切。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主指出叛徒的特徵和策略：「這些叛徒會想辦法打入內部，利用你們的善意搞破壞活動。
                因為不同心，所以他們會破壞你們所有的計畫。最好用抽籤的辦法，讓聖靈幫你們選人。
                千萬不能靠意，要靠死你們的肉體和老我。只有我瞭解每個個人的心思和動機，
                不論他們是男人女人，還是老人孩子。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主也警告：「魔鬼會暗中搗鬼，他會利用你們的善良反手攻擊你們。
                一定要倚靠我，千萬不能靠你的猜測和推理。」這個提醒非常關鍵——
                在末世的混亂中，靠人的智慧去分辨是不夠的，必須完全依靠聖靈的指引。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 text-base mb-2">如何倚靠神</h3>
              <p className="text-gray-700 leading-relaxed">
                主對「倚靠神」給出了非常具體的教導。當面對敵人追趕、走投無路的時刻，
                主說：「記著，什麼時候都可以使用我的名字。有時敵人會到樹林子裡搜查你們。
                他們就從你們頭頂上路過，卻不知你們就在腳下。因為我使他們眼目昏花看不見你們。
                有時我會擾亂敵人的陣營，使他們撤離你們藏身的地方。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主提供了一個具體的禱告文：「你可以以這樣禱告：『顧耶穌的寶血遮蓋我們，
                保護我們，使仇敵看不見我們！』」主還說：「不要放棄！單單地信靠我和我的慈愛！
                因為我必與你們同在。祈求我寶血的大能。你們可以以這樣禱告……」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                書中也記錄了一個感人的個人見證：作者家老大半歲的時候，做了一次急診外科手術。
                她在禱告時看見一個紅色的小鬼掛在孩子身上，就祈求耶穌的寶血覆蓋整個身體，
                使魔鬼無法進入。「然後，就看見魔鬼不停地撞到一個透明的塑膠盾牌上，
                然後又被彈回去。感謝主，手術很成功。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 text-base mb-2">4.5 那些人能得到保護？那些人得不到保護？</h3>
              <p className="text-gray-700 leading-relaxed">
                主清楚說明了誰能得到祂的保護，以及條件是什麼：
                「如果你希望我幫助你，你必須謙卑，節制，誠實，有愛心。如果你習慣按自己的方式
                領導別人，你不會是個好的領袖。但是，如果你不依靠自己的能力，反而比以往更靠我，
                更需要我，你會成為一個很出色的領袖。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主特別強調謙卑的重要性：「孩子們，你們在世上學得那一套方法，在我這裡完全排不上用場。
                我只保護那些在我面前謙卑的人。如果你此高氣揚，覺得自己什麼都懂，你必注定要滅亡。」
                主還說：「總之，要想保存靈魂的，就得把生命獻給我。通往天堂的第一個階梯就是謙卑。
                謙卑就是說，你意識到自己生命中有很多失敗。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主也談到了「把別人的利益擺在第一位」的重要性：「最重要的，是要把別人的利益擺在第一位。
                我到世上來的時候，沒有發號施令，指使別人，而是屈膝降卑自己，為門徒洗腳。
                洗腳是家裡最低賤的活，是留給低等卑微的下人做的。但這就是一個領袖應該做的——
                他或她要先考慮別人的需要，顧別人的事才行。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 text-base mb-2">4.6 魔鬼、外星人、火山和擴張的地獄</h3>
              <p className="text-gray-700 leading-relaxed">
                主告訴珂萊爾一個驚人的真相：「最近，黃石公園的火山越來越活躍。大家都認為這座火山會毀掉
                大半個美國。但是，我已經跟你說過，我會削弱火山噴發的威力，使其不具有毀滅性。」
                然而，主也說明了火山活動的屬靈背景——它與魔鬼和人的罪惡有關。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主說：「而且這些火山，是地下世界的入口，是直接通往地獄中心的通道。
                一旦地獄裝滿了人，地球就會擴張爆炸。這已經不是什麼秘密了。
                我知道你原來也這麼想，那是從我來的啟示。」主還說：「在魔鬼外星人
                （demon aliens）公開入侵地球之前，火山活動會日趨頻繁。總之，一切都已經精心計畫安排好了，
                只等著統治全世界的末世王國登臺亮相。」
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
            <ul className="space-y-2">
              {[
                '末世群體中會出現叛徒，辨認他們需要依靠聖靈，而非人的猜測和推理。',
                '「顧耶穌寶血遮蓋我們，使仇敵看不見我們」是末世中極有能力的禱告。',
                '神只保護謙卑的人——驕傲、自大、靠自己的人將失去保護。',
                '末世領袖的核心品格：把別人利益擺在第一位，效法基督洗腳的謙卑服事。',
                '火山活動是地獄擴張的外在表現，與魔鬼活動和人類罪惡有直接關聯。',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-gray-700">{point}</p>
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
              <h4 className="font-semibold text-gray-800 mb-2">「耶穌寶血」禱告的神學基礎</h4>
              <p className="text-gray-700 leading-relaxed">
                書中介紹的「顧耶穌寶血遮蓋我們」的禱告，根植於希伯來書9:12-14對基督寶血的描述——
                它「潔淨我們的良心，除去死行，使我們事奉那永生神」。
                在五旬節傳統和靈恩運動中，宣告基督寶血的禱告被廣泛使用，
                基於信仰上的理解：基督的救贖工作在屬靈領域中具有真實的能力，
                能遮蓋、保護和潔淨信徒，使惡者無法傷害。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">謙卑：得神保護的首要條件</h4>
              <p className="text-gray-700 leading-relaxed">
                雅各書4:6「神阻擋驕傲的人，賜恩給謙卑的人」和彼得前書5:5形成了本章核心教導的聖經基礎。
                書中的「謙卑」不僅是一種態度，更是末世生存的屬靈策略。
                驕傲使人倚靠自己，降低了對神的依賴；謙卑使人認識自己的局限，
                從而更完全地倚靠神的保護和供應。這在極端情況下就成了生死攸關的差別。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">抽籤：讓聖靈做決定的方法</h4>
              <p className="text-gray-700 leading-relaxed">
                書中提到用「抽籤」來讓聖靈幫助選人，這在聖經中有明確的先例。
                舊約時代，利未人用烏陵土明來尋求神的旨意（民數記27:21）；
                新約早期教會用抽籤選出馬提亞取代猶大（使徒行傳1:26）。
                在無法用理性判斷的情況下，交由神透過抽籤來決定，
                這是一種把主權完全交給神的信心行動。
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
              '主說「不要靠猜測和推理，要靠聖靈」——在你的日常生活中，你是否有培養傾聽聖靈聲音的習慣？',
              '思考你的謙卑程度：在什麼情況下，你最容易陷入驕傲、靠自己的模式？',
              '「把別人利益擺在第一位」——在你目前的關係和責任中，這個原則實際操作起來有多難？',
              '如果你在末世中需要辨認誰是可信賴的同伴，你認為最重要的判斷標準是什麼？',
              '耶穌寶血的禱告：你是否曾經在禱告中宣告寶血的遮蓋？這對你有什麼具體的意義？',
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 每日寶血禱告練習</h4>
              <p className="text-gray-700 mb-2">養成宣告寶血遮蓋的禱告習慣，從今天開始。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>每早起床時宣告：「奉耶穌的名，我宣告主的寶血遮蓋我和我的家人」</li>
                <li>面對任何可疑或危險的情況，立即宣告：「顧耶穌寶血遮蓋我，使仇敵看不見我」</li>
                <li>在禱告時觀察內心的感受，記錄主的回應</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 謙卑操練</h4>
              <p className="text-gray-700 mb-2">每週選擇一個謙卑服事的行動。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>主動為他人做一件他們不知道你做了的事</li>
                <li>在衝突中先認錯，而不是等對方先開口</li>
                <li>記錄自己驕傲出現的時刻，在禱告中悔改</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 屬靈分辨力的建立</h4>
              <p className="text-gray-700 mb-2">系統性地學習辨別靈的能力。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>研讀約翰一書4:1-6（試驗各樣的靈）</li>
                <li>與信任的屬靈導師討論如何在群體中辨認可靠的人</li>
                <li>建立「先禱告，後行動」的原則，不靠衝動決策</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-2">
              <h4 className="font-semibold text-green-700 mb-2">🙏 本章禱告</h4>
              <p className="text-gray-700 italic leading-relaxed">
                「主耶穌，求你用你的寶血遮蓋我，保護我，使仇敵的眼目看不見我。
                賜我謙卑的心，讓我學會像你一樣服事別人。幫助我培養分辨靈的能力，
                不被欺騙。讓我成為一個你可以使用的合格器皿。阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
