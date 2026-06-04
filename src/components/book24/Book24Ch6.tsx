import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book24Ch6() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent">第六章</h1>
        <h2 className="text-xl font-semibold text-gray-700">耶穌對卡羅爾的深情告白</h2>
        <p className="text-gray-500 mt-1">六段感人信息：愛、選擇與信靠（4.10-4.15）</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-pink-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-pink-50 to-rose-50 hover:from-pink-100 hover:to-rose-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-pink-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <p className="text-gray-600 italic text-sm bg-pink-50 p-3 rounded-lg">
              本章包含主耶穌透過另一位靈修者卡羅爾（Carol）傳達的六段信息（4.10-4.15），
              每段都充滿了個人化的溫柔、緊迫感和深情呼喚。
            </p>

            <div>
              <h3 className="font-bold text-pink-700 text-base mb-2">4.10 在基督裡尋求生命</h3>
              <p className="text-gray-700 leading-relaxed">
                主說：「我今天要告訴你的就是：要剛強！要有信心！要靠我的力量剛強壯膽！
                我一直在你的身邊陪伴你。不要懼怕已經發生的和即將發生的。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主繼續說：「我的傭人卡羅爾（Carol）已經打過那場美好持久的爭戰，並靠我得勝。
                她衷心希望你們也如此而行。在她被提之前，你們要留心聽我透過她向你們傳達的話語。
                那些是生命，指示和公義的道路。聽從遵守我給你們的誡命，以便存活！
                因為我呼召你進入我的國度，我要使用你，因為你是為現今的時代而生，
                也是為了你身邊的人，在現今的時代被我呼召出來。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-pink-700 text-base mb-2">4.11 是放手的時候了！</h3>
              <p className="text-gray-700 leading-relaxed">
                主說：「在未來的日子，最重要的就是把握時機：何時吃飯，何時起步，往何地行走，
                如何生存。事情進展得很快，根本沒有時間過『正常的生活』。
                所以，每一次的行動，都得捨掉很多你平時認為很重要的和你想要保存的東西。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主特別叮囑要做好物質放手的心理準備：「現在就是放手的時候了——做好捨掉一切財物的
                心理準備！在面臨抉擇的時候，你所有的財產，跟你的生命和家人的生命相比，
                都算不了什麼，甚至分文不值。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主給出具體建議：「同行人員準備好要攜帶的生活必需品：聖經，幾件衣服，水，乾燥食品和罐頭食品和兩條毯子。
                把這些東西放在一個背包裡。緊急時刻，通知一來，隨手拎背包就可以走。
                把它也很重要，有價值的東西放到箱子裡：比如這些說明指南手冊，電腦（如果可以帶的話），手電筒，電池，隨身碟（USB）。
                重要的是輕裝上路。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-pink-700 text-base mb-2">4.12 跟隨耶穌！千萬不要打默印！</h3>
              <p className="text-gray-700 leading-relaxed">
                主在這段信息中發出最嚴厲的警告：「你們一生的時間都是為了做這個決定而活的。
                神給我們生命就是為了讓我們作這個重要的決定：永遠跟隨耶穌基督。不管政府，朋友，老闆，
                家人，還有其他的人怎麼看，人生在世只有兩個選擇：要麼跟隨我，要麼跟隨撒旦。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主對獸印發出嚴厲警告：「我今晚提醒你們：誓絕默印。有人會覺得可笑，政府會在這件事情上欺騙大家。
                但是我告訴你們事實的真相：一旦接受了印記，你的DNA就變成了撒旦的DNA，
                就沒有救贖脫離的辦法了。所以，要做智慧人，孩子們！
                一定要做出聰明的選擇！聽我的勸告！聽我的聲音，我會幫助你度過即將發生的一切。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主以最深情的邀請結束：「跟隨我，你就有永生，榮耀，慈愛伴隨你，從永遠到永遠！
                那個美好和純潔是你永遠無法想像的！」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-pink-700 text-base mb-2">4.13 時間不多了，請到我這裡來！</h3>
              <p className="text-gray-700 leading-relaxed">
                主說：「你們必須把時間當作一件稍縱即逝，貴重無比的商品看待。時間是我直接贈給你們的禮物。
                所以，你不能想怎麼用，就怎麼用；你更不應該用我給你的時間放縱情慾，
                想著如何買賣賺大錢。這些必須成為過去的事。我現在呼召你，我的新婦！
                在我帶你回天家以前，你必須不斷地潔淨自己，脫去罪惡，追求聖潔。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主發出緊迫的邀請：「剩下的時間只有七年。以後，你會慢慢發現這些話對你非常重要，
                大有能力。如果你現在正是你接受和相信的時候了！現在正是你尋求我的時候了！
                我必被你尋見。否則，你沒有多少時間做這個決定了。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-pink-700 text-base mb-2">4.14 你知道我對你的愛有多深嗎？</h3>
              <p className="text-gray-700 leading-relaxed">
                這是書中最溫柔、最感人的一段信息。主說：
                「我最親愛的，今天早晨我想跟你們談一談我的愛……在你出生以前，在我創造世界以前，
                你就是一顆閃爍的光點，在神的心中被孕育，被創造。是天父親自設計創造了你：
                你的心智，心靈，情感意志……你靈魂體的每一個部分和你的個性特質。
                神親自命定你在他選擇的時間裡出生。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主繼續說：「你孤獨的時候，我在身邊；你遭遇不幸的時候，我在身邊；
                你覺得活不下去，生活一團糟的時候，我在身邊。我一直不停地引你，
                希望你仰望我，意識到我就在你身邊。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主用了美麗的比喻：「每次你看到美麗的蝴蝶，還是可愛的小貓咪，你都露出喜樂的神情。
                （你知道嗎？）是我派去的；每一次，你的父母，兄弟姐妹，老師，朋友對你說了一些愛的話語，
                那是我在使用他們（不管他們是否意識到）呼引你到我這裡來，拉住我的手，跟我走。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-pink-700 text-base mb-2">4.15 你必須選擇：靠錢，靠自己，還是靠我？</h3>
              <p className="text-gray-700 leading-relaxed">
                主用「以掃和雅各的故事」來說明末世選擇的代價：用暫時的肉體享受換取了祝福和財富，
                「決定一旦做出，就沒有反悔和修復的機會」。獸印就是這樣的選擇。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                主說：「不管你有錢沒錢，大災難的時候錢幣就過時了。你必須做出選擇：
                是接受印記呢？還是做出別的選擇呢？印記是敵基督和他的新政府，為了大家的吃喝生存，
                制定的方法。」主發出最後的呼喚：「朋友，到我這裡來！我等著你，過來吧！
                我賜給你的生命是首創的，榮耀的，聖潔的和奇妙的！」
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
                '神在我們出生之前就已經認識我們、設計我們，祂的愛是個人化的、永恆的。',
                '末世的首要任務是放下對財物的執著，保持隨時可走的靈活狀態。',
                '獸印是不可逆轉的決定，一旦接受就永遠失去救贖的機會——必須在壓力來臨前就立定立場。',
                '「時間不多了」是反覆出現的主題——現在就是悔改、信靠、跟隨基督的時機。',
                '神的愛透過生活中無數細小的時刻（蝴蝶、愛的話語、美麗的事物）向我們表達。',
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
              <h4 className="font-semibold text-gray-800 mb-2">神在我們存在之前就認識我們</h4>
              <p className="text-gray-700 leading-relaxed">
                詩篇139:13-16「你的眼看見我未成形的體質；你所定的日子，我尚未度一日，你都寫在你的冊上了」
                和耶利米書1:5「我未曾使你在母腹中構造成形，我已認識你」
                都呈現了本書4.14的核心主題：每個人在被造之前就已被神所認識、愛護和設計。
                這個真理是抵抗末世恐懼和絕望的最堅固基礎。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">以掃的比喻與不可逆的選擇</h4>
              <p className="text-gray-700 leading-relaxed">
                創世記25:29-34記載以掃為了一碗紅豆湯，將長子名分賣給了雅各。
                希伯來書12:16-17稱以掃是「貪世俗的人」，「想要承受父所賜的福，
                竟被棄絕；雖然號啕痛哭地尋求，卻得不著恢復的機會」。
                本書用這個例子說明獸印的不可逆性：一時的方便和利益，
                換來永恆的損失。這是末世最危險的試探。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「輕裝上路」的靈性意涵</h4>
              <p className="text-gray-700 leading-relaxed">
                書中關於「一個背包能帶走的就是你所需要的一切」的教導，
                呼應了路加福音12:15-21「人的生命不在乎家道豐富」的教訓。
                這不僅是物質上的建議，更是一種靈性訓練——學習輕裝，
                不被財物捆綁，從而在生死關頭能夠迅速回應神的呼召。
                現代信徒可以從現在就開始練習這種「輕裝的靈魂」。
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
              '主說祂在你出生之前就認識你、設計你——這個真理在你個人的信仰旅程中有什麼意義？它是否改變了你看待自己的方式？',
              '「放手財物」的教導對你最具挑戰性的是什麼？有哪些東西你發現很難「放手」？',
              '「跟隨我還是跟隨撒旦」——你認為在末世最大的誘惑是什麼，會讓人在不知不覺中做出錯誤的選擇？',
              '主說祂透過生活中的蝴蝶、愛的話語等細小事物向你表達愛——回顧你的生命，你看到了哪些這樣的時刻？',
              '「時間不多了」這個緊迫感如何影響你今天的決定和行動優先順序？',
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 準備末世緊急背包</h4>
              <p className="text-gray-700 mb-2">按照書中建議，準備一個隨時可以攜帶的背包。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>聖經（小本）或已下載到手機/USB的電子版</li>
                <li>幾件輕便衣物和必要的個人物品</li>
                <li>水、乾燥食品和罐頭食品（夠幾天的份量）</li>
                <li>手電筒、電池、隨身碟（含重要資料）</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 神愛的記念日誌</h4>
              <p className="text-gray-700 mb-2">開始記錄神透過日常小事表達愛的時刻。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>每天記錄一件讓你感受到神愛的事情</li>
                <li>包括自然、人際關係、偶發事件等任何方面</li>
                <li>定期回顧這些記錄，在試煉時提醒自己神的愛</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 「以掃的選擇」反思</h4>
              <p className="text-gray-700 mb-2">識別你生命中可能讓你「賣掉長子名分」的事物。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>誠實列出你最難放手的三件事（金錢、關係、舒適等）</li>
                <li>為每一件事禱告，問神：「我在這件事上是否太倚靠它？」</li>
                <li>練習在小事上學習讓步和放手</li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-2">
              <h4 className="font-semibold text-green-700 mb-2">🙏 本章禱告</h4>
              <p className="text-gray-700 italic leading-relaxed">
                「主耶穌，感謝你在我出生之前就認識我、愛我。你的愛如此深厚，我幾乎難以承受。
                求你幫助我放下一切捆綁我的東西，輕裝跟隨你。讓我在每一個生活的細節中都能
                認出你的愛，並且每一天都更深地愛你。阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
