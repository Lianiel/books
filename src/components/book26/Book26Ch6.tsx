import React, { useState } from 'react';
import { Volume2, ChevronDown, ChevronUp, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book26Ch6() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true, summary: true, exploration: true, questions: true, practice: true
  });
  const toggle = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-rose-600 to-red-700 bg-clip-text text-transparent">第 6 章</h1>
        <h2 className="text-xl font-semibold text-gray-700">奇妙的言語：當我們歌唱時</h2>
        <p className="text-base text-gray-500">歌唱中發生了什麼？</p>
        <p className="text-sm text-gray-400 mt-1">鮑勃・考夫林（Bob Kauflin）著</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-rose-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('content')} className="w-full px-5 py-3 bg-gradient-to-r from-rose-50 to-red-50 hover:from-rose-100 hover:to-red-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Volume2 className="w-5 h-5 text-rose-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-rose-700 mb-2">一、為何神命令我們歌唱？</h3>
              <p className="text-gray-700 leading-relaxed">考夫林以詩篇 47:6 作為出發點：「你們要歌頌神，歌頌！要歌頌我們的王，歌頌！」——僅四節詩，就有七個「歌唱」的命令。這個現象引發了一個神學問題：為什麼神如此頻繁地命令祂的子民歌唱？為什麼不只是禱告和講道？為什麼是有音樂的詞語，而不只是詞語本身？</p>
              <p className="text-gray-700 leading-relaxed mt-2">考夫林的回答從一個令人驚喜的事實開始：神自己歌唱。西番雅書 3:17 說：「祂必因你歡欣喜樂，默然愛你，又因你喜樂而歡呼。」（原文「歡呼」在希伯來文中是「高聲歌唱」）。耶穌在受難前夕與門徒一同唱詩（太 26:30）。希伯來書 2:12 引用詩篇 22:22，將其應用在耶穌身上：「我要在會眾中稱揚祢的名，在弟兄中歌頌祢。」連神自己也是一位歌唱者。</p>
            </div>
            <div>
              <h3 className="font-bold text-rose-700 mb-2">二、音樂與話語的三種關係</h3>
              <p className="text-gray-700 leading-relaxed">考夫林識別出基督徒在對待「音樂」和「話語」的關係上，往往落入三種模式之一：第一種是「音樂凌駕話語」——認為音樂本身的感染力比歌詞更重要，說「音樂比話語更能說出我心裡的感受」，或「沒有我喜歡的音樂風格，我就無法敬拜」。這種模式讓音樂成為主角，話語成了附屬。</p>
              <p className="text-gray-700 leading-relaxed mt-2">第二種是「音樂破壞話語」——走向另一個極端，認為音樂本身是危險的，它會讓情緒喧賓奪主、讓人以為情緒的高漲就是屬靈的深度。奧古斯丁在《懺悔錄》中坦承自己在這個張力中掙扎：他有時被旋律感動多於被歌詞的意義感動，這讓他深感不安。</p>
              <p className="text-gray-700 leading-relaxed mt-3">第三種是「音樂服事話語」——考夫林認為這是神的心意。音樂不是話語的替代，也不是話語的對立，而是話語的僕人。神在詩篇 147:1 說：「讚美耶和華原是美事，歌頌我們的神也是和善可喜的。」神的心意是讓音樂幫助話語被記住、被感受、被活出。</p>
            </div>
            <div>
              <h3 className="font-bold text-rose-700 mb-2">三、歌唱幫助我們記住話語</h3>
              <p className="text-gray-700 leading-relaxed">考夫林第一個論點是：音樂幫助我們「記住」話語。你能記住三十年前唱過的聖詩旋律和歌詞嗎？你能記住上週五你在哪個地鐵站坐過嗎？幾乎所有人對第一個問題的回答是「能」，對第二個問題的回答是「不確定」。這不是偶然——奧利弗・薩克斯（Oliver Sacks）在《音樂狂》（Musicophilia）中研究顯示，音樂在記憶形成和提取方面具有超越其他媒介的能力，甚至對失憶症患者仍然有效。</p>
              <p className="text-gray-700 leading-relaxed mt-2">這個認識有三個實踐含義：第一，教會應該選擇旋律上令人難忘、人們樂於反覆唱的曲調；第二，更重要的是，歌詞要包含神想要我們記住的真理，而非只是表達情感的呼喊；第三，應鼓勵信眾記憶詩歌——熟記的詩歌在患難中會自動浮現，成為屬靈的供應。</p>
            </div>
            <div>
              <h3 className="font-bold text-rose-700 mb-2">四、歌唱激發對話語的情感回應</h3>
              <p className="text-gray-700 leading-relaxed">考夫林的第二個論點：音樂幫助我們對話語產生更深的情感回應。音樂能夠讓詞語「慢下來」，讓我們在重複和延伸中更仔細地思想詞語的含義。「奇異恩典，何等甘甜」——唱出這首歌，比朗讀它，通常能讓人更深地感受「奇異」和「甘甜」的含義。「我心靈得安寧」（It Is Well with My Soul）——音樂的平靜旋律和逐漸升高的副歌，完美地配合了歌詞所描述的「即使在患難中的安寧」。</p>
              <p className="text-gray-700 leading-relaxed mt-2">他引用喬納森・愛德華茲《論宗教情感》中的論述：宗教情感不只是「感受」，而是整個人被真理感動的狀態——包括理解、意志和情感。當歌唱幫助人進入這種全人的宗教情感，就是在高舉神，而非只是製造情緒化的體驗。</p>
            </div>
            <div>
              <h3 className="font-bold text-rose-700 mb-2">五、歌唱是對未來永恆的預演</h3>
              <p className="text-gray-700 leading-relaxed">考夫林以一個崇高的異象結束本章：啟示錄 5:9–14 描述天上眾聖徒和萬千天使共同高唱：「曾被殺的羔羊是配得的，要接受……尊貴、榮耀、讚美！」我們今天在地上的歌唱，是對這個天上場景的預演和參與。每次我們聚集歌唱，就在操練永恆的身份認同：我們是被羔羊的寶血贖回的人，我們的歌聲要與基督的歌聲合一。</p>
              <p className="text-gray-700 leading-relaxed mt-2">考夫林提醒我們：我們的歌唱能到達神的耳朵，是因為神在基督裡接納我們——神彷彿把我們的歌聲「當作基督自己的歌聲來接受」。這是令人謙卑的奧祕：當我們歌唱時，我們的歌加入了永恆詩班的大合唱，主唱是那位為我們被殺的羔羊。</p>
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
                '神命令我們歌唱，因為神自己也歌唱——西番雅書描述神因子民而高聲歌唱，耶穌在受難前夕也唱詩。',
                '音樂與話語的三種關係：凌駕（錯誤）、破壞（錯誤）、服事（正確）——神的心意是音樂服事話語。',
                '歌唱幫助我們記住話語：音樂有超越其他媒介的記憶功能，熟記的詩歌在患難中成為屬靈的供應。',
                '歌唱激發對話語的全人情感回應——音樂讓詞語慢下來，讓我們更深地感受和內化真理的含義。',
                '選歌的首要標準是歌詞，而非音樂風格；神想讓我們記住的真理，必須透過歌詞進入記憶。',
                '地上的歌唱是天上永恆詩班的預演；我們的歌因基督而被接受，加入羔羊引領的永恆讚美。',
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
              <h4 className="font-semibold text-gray-800 mb-2">路德的聖詩神學：「神學的第二種形式」</h4>
              <p className="text-gray-700 leading-relaxed">馬丁・路德是歷史上最重視聖詩的改教家之一。他寫道，音樂是「神最偉大的禮物之一」，並且相信聖詩是除了神學論述之外傳遞教義的最有效工具。他自己創作了《上主是我堅固保障》（A Mighty Fortress Is Our God），這首詩歌在宗教改革中的影響力不亞於他的神學著作。路德明白：人們記住的不是講道，而是他們唱過的歌。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">愛德華茲的「宗教情感」與歌唱</h4>
              <p className="text-gray-700 leading-relaxed">考夫林大量引用愛德華茲《論宗教情感》。愛德華茲的「情感」（affections）不等於「情緒」（emotions）——情緒是短暫的、被感官刺激的反應；情感是整個人（理解、意志、情感）被真理感動的持久狀態。真正的敬拜歌唱，目標是引發「宗教情感」而非「情緒高漲」。一首讓人感到「很爽」的歌，和一首讓人對基督產生更深敬畏和愛慕的歌，在神學上是有本質差異的。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">音樂在大腦中的記憶機制</h4>
              <p className="text-gray-700 leading-relaxed">神經學研究顯示，音樂的記憶儲存在大腦的多個區域，包括處理情感的杏仁核和處理長期記憶的海馬體。這使得音樂記憶特別牢固——即使是嚴重的阿茲海默症患者，仍能記住年輕時唱過的歌曲。奧利弗・薩克斯的研究記錄了許多失憶症患者透過音樂重拾身份認同的案例。這在神學上有深刻的含義：神聖的詩歌，可能在生命最黑暗的時刻，成為靈魂最後的錨。</p>
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
              '在你的信仰旅程中，有哪首詩歌在關鍵的時刻（患難、迷失、喜悅）對你有特別的幫助？那首歌的哪些歌詞讓你記得最清楚？',
              '你在教會敬拜時，更容易因「音樂的旋律和節奏」感動，還是因「歌詞的真理內容」感動？考夫林的分析對你有什麼挑戰？',
              '你認為你的教會在選歌時，更重視「音樂風格」還是「歌詞的神學深度」？你認為兩者的平衡應該如何？',
              '「神因你喜樂而高聲歌唱」（西番雅書 3:17）——這個圖像讓你有什麼感受？你想像神歌唱時是什麼情景？',
              '考夫林說，我們在地上的歌唱是天上永恆敬拜的「預演」。這個視角如何改變你對主日崇拜歌唱時間的看法？',
              '你有記憶詩歌（能背誦）的習慣嗎？如果沒有，你願意從哪首詩歌開始，讓它成為你在患難中的屬靈儲備？',
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
              <h4 className="font-semibold text-green-700 mb-2">🎵 記憶一首詩歌（本月）</h4>
              <p className="text-gray-700 mb-2">選一首歌詞神學豐富的詩歌，這個月內把它的歌詞背下來。每天早晨默唱或哼唱，讓它成為心裡的儲備。建議：《奇異恩典》、《我心靈得安寧》、《主你是我力量》或任何對你有意義的詩歌。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📝 「歌詞神學」查考</h4>
              <p className="text-gray-700 mb-2">選教會最近常唱的一首詩歌，仔細分析歌詞：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>這首歌說了關於神的什麼真理？</li>
                <li>這首歌是否高舉基督，特別是十字架和復活？</li>
                <li>這首歌有哪句歌詞你認為最值得被記住？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎶 用歌唱開始禱告</h4>
              <p className="text-gray-700 mb-2">這週嘗試：在你個人禱告開始時，先唱（哼）一首詩歌，讓音樂把你的心引入神的同在，再開始說話式的禱告。觀察這個順序是否改變你的禱告品質。</p>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-sm font-semibold text-green-700 mb-1">🙏 本章禱告</p>
              <p className="text-sm text-gray-700 italic">「主啊，感謝祢給了我們歌唱的能力，也給了我們可以歌唱的真理。求祢讓我在歌唱時，不只是被旋律感動，更是被祢的話語深深觸動。讓我記住的每一首詩歌，都成為在患難中支撐我的屬靈糧食。願我的歌聲，加入那永恆的詩班，高唱曾被殺的羔羊是配得的。阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
