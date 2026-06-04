import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Target, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book25Ch1() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true, summary: true, exploration: true, questions: true, practice: true
  });
  const toggle = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">第一章</h1>
        <h2 className="text-xl font-semibold text-gray-700">推動一切的引擎</h2>
        <p className="text-gray-500 mt-1">教會存在的意義為何？</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('content')} className="w-full px-5 py-3 bg-gradient-to-r from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-blue-700 mb-2">教會有成效嗎？</h3>
              <p className="text-gray-700 leading-relaxed">賀伯陛博士在花了將近十年時間訓練植堂者、建立植堂網絡的過程中，有一天在飛機上突然意識到一個令他不安的問題：這些辛苦開拓的教會，真能持久嗎？長期下來，真的會討神喜悅嗎？這些植堂者都是敬虔又優秀的人，神學也很好，但他突然懷疑，這套方式是否只帶出了一個膚淺的文化基督教。</p>
              <p className="text-gray-700 leading-relaxed mt-3">本書帶出的核心大問題，是關於成效的問題。請不要急著為自己的教會辯護，單單捫心自問：教會有產生出真正的果效嗎？成效的核心問題，也是終極要緊的問題，就是那些得救的人有沒有越來越像基督？我們有在為耶穌建造成熟、不只能抵擋文化、也能為耶穌帶出門徒的人嗎？</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-700 mb-2">令人警醒的研究數據</h3>
              <p className="text-gray-700 leading-relaxed">研究顯示，在道德和生活習慣上，基督徒和非基督徒的行為並沒有什麼差別：離婚率差不多一樣；定期看色情圖刊的比例大致也相同；相較於非基督徒，基督徒有超過兩倍的比例更容易有種族歧視；家庭暴力、毒品與酒精濫用在基督徒中一樣普遍。</p>
              <p className="text-gray-700 leading-relaxed mt-3">此外，只有大約百分之六的福音派有定期十一奉獻；百分之六十到八十的年輕人在二十多歲會離開教會；不到五分之一自稱重生得救的基督徒，其所持的世界觀只有一點基本的聖經信念。美國最有影響力的教會之一——柳溪社區教會——海波斯牧師主持了大規模的成效研究，結論令他震驚：「教會並沒有在生產他們所期待的結果。」</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-700 mb-2">四種典型教會及其共同局限</h3>
              <p className="text-gray-700 leading-relaxed">在北美，每間教會都有兩個重要的構成要素：<strong>焦點</strong>（投入時間和資源的主要重點）和<strong>方法論</strong>（如何有系統地實現焦點的結構）。大部分教會偏向以下四種典型之一：</p>
              <div className="space-y-3 mt-3">
                {[
                  { type: '教導型教會', desc: '以課室教學方法達成牧者教導的焦點。強調聖經教育，主要由牧師提供教導。最大挑戰是牧師枯竭，而且演講是最沒果效的教學法，會眾容易依賴牧師而無法自行成長。' },
                  { type: '吸引式教會', desc: '以娛樂的方法達到吸引人的焦點。透過精心設計的崇拜和大型活動吸引人。問題是讓信徒靈命始終停留在孩童階段，當困難來臨時他們不知所措，容易遠離信仰。' },
                  { type: '使命式教會', desc: '以服事機會的方法達到使命式的焦點。鼓勵基督徒投身社會行動。問題是服事者容易枯竭，接受者取多給少，缺乏真正建立信徒生命的深度。' },
                  { type: '家庭式教會', desc: '以家庭小組方法達到團契的焦點。強調緊密的人際關係。問題是容易變得排他、失能，新朋友很難融入，常常內爆或解散。' },
                ].map(c => (
                  <div key={c.type} className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                    <p className="font-semibold text-blue-800 mb-1">{c.type}</p>
                    <p className="text-gray-700">{c.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mt-3">這四種典型教會有一個共同的問題：它們都不完全。它們都有零星的成效，但都面臨極大的困難，且很遺憾的是，人們靈命從幼稚被轉化為成熟的比例通常偏低。</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-700 mb-2">解答：關係性門徒訓練</h3>
              <p className="text-gray-700 leading-relaxed">幸好，還有盼望。在神的話語中，已有一個能夠產生成效的設計。解決缺乏成效的辦法，是教會採用一個簡單明瞭的方法，訓練人們成為靈命成熟、並全心跟隨基督的人，然後讓這些門徒帶出更多門徒。</p>
              <p className="text-gray-700 leading-relaxed mt-3">我們的教會需要更少的「基督徒」——至少不是今天社會對這個字的普遍定義（超過百分之八十的美國人自稱為基督徒）。我們要的是長大成熟的耶穌基督跟隨者。若要在今日的教會看到這樣的人產生，我們需要徹底地改變。需要更多耶穌用來改變世界的那個引擎——關係性門徒訓練（relational discipleship）。</p>
              <div className="bg-teal-50 border-l-4 border-teal-500 pl-4 py-3 rounded-r-lg mt-3">
                <p className="font-bold text-teal-800">焦點 = 以聖經為基礎的門徒訓練</p>
                <p className="font-bold text-teal-800">方法論 = 以關係為導向的環境</p>
                <p className="text-gray-700 mt-2">這不以出席人數、奉獻金額或信主人數來衡量成功，而是衡量多少人被愛並被帶領走上耶穌的道路，有多少人實際轉化為能帶領門徒的門徒。</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-blue-700 mb-2">真實案例：交叉口教會的轉化</h3>
              <p className="text-gray-700 leading-relaxed">傑力的教會（培森路基督教會）從1970年代的傳統模式，轉型為關係性門徒訓練，如今已成長到超過四千人、六個據點。傑力分享了幾個令人印象深刻的生命轉化故事：比理曾住在精神科病房、有自殺傾向並深陷毒癮，但教會同工花時間在他身上，不只帶他來教會，更在他的日常生活中陪伴他、示範如何生活和愛人。如今比理是教會正面的屬靈力量，帶領許多和他有類似經歷的人走出困境。</p>
              <p className="text-gray-700 leading-relaxed mt-3">吉牧來到崇拜時帶著破碎痛悔的心，過去的酒精成癮讓他失去許多錢財和三段婚姻。迪克介入他的生命，邀請他到小組，每天輔導他。如今吉牧成為教會一個分堂的牧師，帶出許多和他一樣的人。這就是關係性門徒訓練真正的果效。</p>
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
            <ul className="space-y-3">
              {[
                '教會成效的終極問題是：得救的人有沒有越來越像基督？人們的靈命有從幼稚被轉化為成熟嗎？',
                '研究數據顯示，基督徒在道德行為上與非基督徒並無顯著差別，教會普遍缺乏真正的門徒培育果效。',
                '四種典型教會（教導型、吸引式、使命式、家庭式）各有優點，但都不完全，都缺少持久且成熟的生命轉化。',
                '解決之道不是改變音樂風格或聚會形式，而是根本地改變教會的焦點：從領人歸主轉向培育真門徒。',
                '關係性門徒訓練是耶穌用來改變世界的引擎——生命影響生命，在真實關係中帶出成熟、能帶人的門徒。',
                '成功的衡量標準不是出席人數或奉獻金額，而是有多少人被轉化成有基督樣式、能帶領他人的門徒。',
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
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">為什麼「文化基督徒」問題如此嚴重？</h4>
              <p className="text-gray-700 leading-relaxed">當一個社會大多數人自稱基督徒，但基督徒的道德行為與非基督徒無異時，「基督徒」這個標籤就失去了意義，甚至成為阻礙福音的障礙——因為非基督徒看到這樣的生命見證，只會更加確信基督教是虛偽的。根本的問題是，這些人可能從未真正地跟隨耶穌，而只是在社交意義上「屬於」教會。真正的解決方案不是更多的規則和要求，而是更深的門徒帶領關係。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">為什麼各種典型教會都缺乏持久的果效？</h4>
              <p className="text-gray-700 leading-relaxed">每一種典型教會都把教會的某個功能（教導、吸引、使命、團契）提升為主要焦點，而忽略了其他功能。這導致教會只有「一度空間」，無法全面培育成熟的門徒。真正的問題是：這些模式都沒有讓會眾成為真正的門徒——既跟從耶穌、被耶穌改變，又委身於耶穌的使命。缺少任何一個要素，都無法達到全備的門徒生命。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「關係性」為何是門徒訓練的關鍵？</h4>
              <p className="text-gray-700 leading-relaxed">耶穌自己的方法就是「生命影響生命」。祂沒有只站在講台上教導，而是和門徒同行，在坐下、行走、躺下時與他們交談（申命記六章5-9節的教養原則）。保羅也同樣，不是每週教一次主日學就結束，而是把焦點放在與他帶領的人一同生活。研究顯示，最有效的學習發生在真實的關係中，在這樣的環境裡，知識不只停留在頭腦，而是被活出來、被實踐出來。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">改變教會的步調：為什麼不能急？</h4>
              <p className="text-gray-700 leading-relaxed">教會要改變通常步調緩慢，就像冰山或大船。有智慧的領袖知道，改換新的文化或方法論需要慢慢來。每個教會都有既存的DNA，人們就是因為喜歡現有的方式而來。領袖需要慢慢引導，有耐心地在教會特殊的處境中執行有效且能持久的改變。正如作者所說：「先把選擇正確的目的地，以及用正確的方式把人帶到那裡，這兩件事都做對。」</p>
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
          <div className="p-5 bg-white space-y-4">
            {[
              '如果你誠實地評估你的教會或事工，你認為教會目前最偏向哪種典型？這種典型帶來了哪些好處，又有哪些局限？',
              '你個人認識的信徒中，有多少人的生命明顯地越來越像基督？你認為是什麼原因讓他們成長，又是什麼讓其他人停滯不前？',
              '當你聽到研究數據顯示基督徒和非基督徒的道德行為差異不大時，你有什麼感受？你認為這對福音見證意味著什麼？',
              '你曾經受到哪個人的生命影響而在信仰上成長？是什麼讓這種「生命影響生命」的關係成為可能？',
              '對你而言，改變教會的方向最大的障礙是什麼？是來自自己內心的、會眾的，還是教會體制的？',
              '你如何定義你的教會的「成功」？這個定義符合耶穌對門徒的呼召嗎？',
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
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 教會成效自我評估</h4>
              <p className="text-gray-700 mb-2">這週誠實地回答以下問題，並邀請你的領導團隊也各自回答：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>我們教會過去一年，有多少人的生命發生明顯的靈命轉化？</li>
                <li>教會裡有多少人能夠帶領其他人走上跟隨耶穌的路？</li>
                <li>我們用什麼方式衡量教會的成功？這個方式符合耶穌的標準嗎？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 辨識你教會的典型</h4>
              <p className="text-gray-700 mb-2">觀察你的教會在過去一個月，花了多少時間和資源在以下各項：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>聖經教導（教導型）</li>
                <li>吸引新人的崇拜活動（吸引式）</li>
                <li>社區服務和外展（使命式）</li>
                <li>小組團契和關係建立（家庭式）</li>
                <li>一對一或小群的門徒帶領（關係性門徒訓練）</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 尋找一位門徒帶領者</h4>
              <p className="text-gray-700">本週找一位信仰比你成熟的人，邀請他和你定期見面，分享生命並在信仰上互相督促。這是關係性門徒訓練的第一步。</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="font-semibold text-green-700 mb-2">🙏 禱告詞</p>
              <p className="text-gray-700 italic">「主耶穌，求你幫助我誠實地面對我們教會的現實狀況，不迴避令人不舒服的真相。幫助我明白，我對你的順服，必須表現在真實的門徒生命上，而不只是出席聚會的次數。求你賜給我勇氣，帶領你的教會轉向你所定義的成功：培育能帶出更多門徒的門徒。阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
