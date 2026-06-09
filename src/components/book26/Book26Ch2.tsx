import React, { useState } from 'react';
import { Shield, ChevronDown, ChevronUp, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book26Ch2() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true, summary: true, exploration: true, questions: true, practice: true
  });
  const toggle = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-rose-600 to-red-700 bg-clip-text text-transparent">第 2 章</h1>
        <h2 className="text-xl font-semibold text-gray-700">嚼環、韁繩與祝福</h2>
        <p className="text-base text-gray-500">雅各書 3:1–12 的解釋</p>
        <p className="text-sm text-gray-400 mt-1">辛克萊・弗格森（Sinclair B. Ferguson）著</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-rose-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('content')} className="w-full px-5 py-3 bg-gradient-to-r from-rose-50 to-red-50 hover:from-rose-100 hover:to-red-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-rose-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-rose-700 mb-2">一、對教師的特別警告（3:1）</h3>
              <p className="text-gray-700 leading-relaxed">雅各書第三章以一個出人意料的開場白開始：「我的弟兄們，不可多人做師傅，因為曉得我們要受更重的判斷。」弗格森指出，雅各深深浸泡在舊約智慧文學和主耶穌的教導中，他關於舌頭的教導，是在主的腳蹤中前行。他首先把最沉重的責任放在那些以言語為職業的人身上——教師和傳道人。舌頭的力量越大，責任就越重，審判的標準也就越嚴。</p>
              <p className="text-gray-700 leading-relaxed mt-2">弗格森回憶神學院裡一位同事的故事：這位深感疲憊的同事在抵達酒店時，因為找不到訂房紀錄而失去了自制，對一位年輕的前台服務員發火。後來，當他在入住登記表上填寫神學院的名稱時，那位年輕人驚訝地說：「我最近剛剛信主！我聽說過你們神學院！真是太神奇了，能認識你！」這個令人尷尬的對比，說明了舌頭失控的後果——尤其是對那些代表神說話的人。</p>
            </div>
            <div>
              <h3 className="font-bold text-rose-700 mb-2">二、嚼環與韁繩——控制小事即控制大事（3:2–5）</h3>
              <p className="text-gray-700 leading-relaxed">雅各以兩個鮮明的比喻說明舌頭的力量。第一個是嚼環（bit）：給馬嘴裡放一個小小的嚼環，就能控制整匹馬的走向。第二個是船的舵：一艘大船——在古代，能載 276 人的船已屬巨輪（使徒行傳 27:37 記載保羅的船就載了這麼多人）——卻只靠小小的舵就能轉向。</p>
              <p className="text-gray-700 leading-relaxed mt-2">比喻的重點不僅是舌頭「很小卻很有力」，更是說：能控制小的，就能控制整體。一個能管住舌頭的人，就是一個「完全人」（perfect man，3:2），因為他已經學會了基督徒成熟的核心操練。成聖不只是「不說壞話」，也包括能在需要沉默時沉默，在需要溫柔說話時溫柔說話——這兩個維度合在一起，才是真正的成熟。</p>
            </div>
            <div>
              <h3 className="font-bold text-rose-700 mb-2">三、舌頭是地獄之火（3:6）</h3>
              <p className="text-gray-700 leading-relaxed">雅各在 3:6 說出了最嚴厲的話：「舌頭就是火，在我們百體中，舌頭是個罪惡的世界，能污穢全身，也能把生命的輪子都點起來，並且是從地獄裡點著的。」這裡的「地獄」是「欣嫩子谷」（Gehenna），耶路撒冷城外一個燒垃圾的地方，也是象徵最終審判之地。弗格森指出，雅各要讀者每次想說出殘忍或惡毒的話時，都能想起這個意象——這些話，是從「欣嫩子谷」點燃的。</p>
              <p className="text-gray-700 leading-relaxed mt-2">年輕的喬納森・愛德華茲在他的決志錄（Resolutions）中多次觸及這一主題，他決志要「永不說任何有關他人的惡意之言」。愛德華茲深知，舌頭的放縱不只傷害他人，也腐化說話者自身的靈魂。</p>
            </div>
            <div>
              <h3 className="font-bold text-rose-700 mb-2">四、不可馴服的舌頭與雅各的坦白（3:7–8）</h3>
              <p className="text-gray-700 leading-relaxed">雅各隨後做出了令人震驚的坦白：「各種走獸、飛禽、昆蟲、水族，本來都可以制伏，也已經被人制伏了。惟獨舌頭沒有人能制伏，是不止息的惡物，滿了害死人的毒氣。」這是雅各用來「刺穿良心」的話——他不是在給實踐性的建議，而是在帶領讀者看清楚自身的罪。</p>
              <p className="text-gray-700 leading-relaxed mt-2">弗格森強調，雅各書這段話的目的，類似保羅在羅馬書 3 章的控訴：「凡律法所說的，都是對律法以下之人說的……好塞住各人的口」（羅 3:19）。雅各刺穿良心，是為了讓人意識到：靠自己，舌頭是無法制服的，因為它的能量來源是「人心的深處」，而人心在本質上是自我中心的。</p>
            </div>
            <div>
              <h3 className="font-bold text-rose-700 mb-2">五、實踐性的教導就藏在經文本身</h3>
              <p className="text-gray-700 leading-relaxed">弗格森提出一個精彩的觀點：許多人抱怨雅各書第三章只有診斷沒有治方。但實際上，治方就藏在整卷書的神學結構中——藉著神的話語（神聖化在真理中，約 17:17），而不是靠人自己的努力。雅各在 1 章已說：「你們各人要快快地聽，慢慢地說，慢慢地動怒」（1:19），這些命令本身不是「自力靠己的操練」，而是「回應福音的生命形態」。</p>
              <p className="text-gray-700 leading-relaxed mt-2">弗格森以約拿單・愛德華茲的《決志錄》風格，提出從雅各書中提煉出的屬靈操練：要默想神的話語，讓神的話語滲入我們的思想、情感和意志，從而形成一顆新的心——而一顆新心，自然會開始說出新的話語。</p>
            </div>
          </div>
        )}
      </div>

      {/* 重點總結 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
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
                '教師和牧者對言語負有更重的責任，因為以言語為職業的人，其言語的影響範圍更廣、更深。',
                '嚼環與舵的比喻：能控制小的（舌頭），就能控制整體；反之，失控的舌頭表明整個人尚未成熟。',
                '舌頭不只是「說錯話」的問題，而是一個「地獄之火」——它的破壞能量源於人心的罪，和撒但的煽動。',
                '雅各承認：靠自然力量，舌頭是不可馴服的——這個坦白是為了使人轉向神的恩典，而非鼓勵人放棄。',
                '真正的成熟包含兩個維度：在當沉默時能沉默，在當說話時能說出恩典的話——這兩者合一才是完全。',
                '舌頭的治方不是更多的技巧，而是讓神的話語深入我們的內心，重塑我們的思想、情感與意志。',
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
        <button onClick={() => toggle('exploration')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">延伸探討</span>
          </div>
          {expanded['exploration'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['exploration'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">雅各與耶穌教導的連結</h4>
              <p className="text-gray-700 leading-relaxed">弗格森指出，雅各書是深深植根於主耶穌教導的書信。雅各書 3 章的舌頭教導，與耶穌在馬太福音 12:36–37 的話語（「凡人所說的閒話，當審判的日子必要句句供出來……你的話必定你為義，你的話也必定你有罪」）有直接的呼應。這說明雅各不是在發明新的倫理，而是在傳遞主耶穌早已確立的真理：話語是靈魂的鏡子，審判的日子話語將成為證據。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">愛德華茲《決志錄》的舌頭操練</h4>
              <p className="text-gray-700 leading-relaxed">喬納森・愛德華茲的《決志錄》共 70 條，其中有多條直接涉及言語：第 31 條決志「永不說任何有損他人名譽的話」，第 34 條決志「絕不因人的善舉而妒忌，而是要與他們一同歡欣」，第 36 條決志「永不說任何我不確定是事實的話」。這些決志反映了一個年輕的愛德華茲明白：言語操練是聖化的核心，而不是附帶的。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「靠神的話語成聖」而非靠努力</h4>
              <p className="text-gray-700 leading-relaxed">弗格森特別強調，雅各書的實踐性建議不是「努力管好嘴巴」，而是「讓神的話語深入你」。他引用耶穌在約翰福音 17:17 的禱告：「求祢用真理使他們成聖；祢的道就是真理。」真正的舌頭轉化，是神的話語在我們裡面工作的結果。這是為什麼在講道、讀經、默想和禱告中持續讓自己浸泡在神的話語中，是言語成聖不可或缺的途徑。</p>
            </div>
          </div>
        )}
      </div>

      {/* 反思問題 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">反思問題</span>
          </div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && (
          <div className="p-5 bg-white space-y-3">
            {[
              '弗格森說神學院同事在酒店的那個故事給你什麼感受？你是否也有過類似「在最不應該失控的地方失控」的經歷？',
              '「嚼環與馬」——你生活中有哪些「小事」，如果能控制，就能帶來整體生命的更新？',
              '雅各說舌頭是「不止息的惡物，滿了害死人的毒氣」。這個說法對你而言是誇大其詞，還是令你深感共鳴？',
              '你是否有過因為一句話，對一段關係造成難以彌補的損傷的經歷？那句話背後的心態是什麼？',
              '弗格森說「治方就藏在經文本身」——你認為讓神的話語更深入你的生命，在實際上對你意味著什麼改變？',
              '「沉默也是成熟的表現」——在你的生活中，有哪些時刻你選擇說話，但事後回想更應該保持沉默？',
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
        <button onClick={() => toggle('practice')} className="w-full px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">具體實踐方針</span>
          </div>
          {expanded['practice'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['practice'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 每日雅各書 3 章的默想</h4>
              <p className="text-gray-700 mb-2">連續七天，每天早晨閱讀雅各書 3:1–12，選一節記住並在當天默想。讓神的話語在心中發酵。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 個人「決志」清單</h4>
              <p className="text-gray-700 mb-2">仿照愛德華茲的《決志錄》，為自己的言語寫下 3–5 條決志：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>決志：絕不說我沒有親自確認的八卦</li>
                <li>決志：說話前先問自己「這句話是建造還是破壞？」</li>
                <li>決志：當我想到某人的缺點，首先轉化為禱告</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">⏸️ 一秒暫停練習</h4>
              <p className="text-gray-700 mb-2">在你感到激動、憤怒或防衛的時候，在開口之前做一次深呼吸並問：「我現在說話是為了服事對方，還是為了保護自己？」這一秒的暫停，可能改變整個對話的走向。</p>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm font-semibold text-green-700 mb-1">🙏 本章禱告</p>
              <p className="text-sm text-gray-700 italic">「主啊，我承認自己的舌頭有時如同不可馴服的野獸。我靠自己的力量無法制服它。求祢用祢的話語深入我的心，讓祢的真理成為我思想的泥土，讓從那土壤裡長出的話語，都是有恩典、有建造力的。求祢讓我學會在該沉默時沉默，在該說話時說出祢的話。阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
