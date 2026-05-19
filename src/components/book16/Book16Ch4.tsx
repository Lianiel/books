import React from 'react';
import { Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book16Ch4() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* 標題 */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">三階</h1>
        <h2 className="text-xl font-semibold text-gray-700">終末中與上帝親近</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-violet-100 rounded-lg overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-violet-50 to-purple-50 flex items-center gap-2">
          <Star className="w-5 h-5 text-violet-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">主要內容</span>
        </div>
        <div className="p-5 bg-white space-y-4">
          <p className="text-gray-700 leading-relaxed bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
            當我們在日常生活全心全意所做的每件事中經歷上帝的恩典時，我們就已經進入終末的領域，生活開始具有終末生活的維度。這不是逃避現實，而是讓永恆的視野照亮我們的當下生活。
          </p>

          <h3 className="font-bold text-gray-900 text-lg">一、對將來的默想</h3>
          <p className="text-gray-700 leading-relaxed">
            透過上帝的話語默想將來，主要思想兩個方面：關於人的死亡與離世，以及人死後的生活及世界。
          </p>
          <div className="bg-slate-50 rounded-lg p-4 mb-3">
            <h4 className="font-semibold text-slate-800 mb-2">思想死亡</h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              對加爾文來說，默想永生首要面對的就是人罪性中最頑固的東西——害怕死亡。我們對死亡的逃避，反映了我們對永恆的無知。只有正視死亡，才能讓永恆的盼望真實地進入我們的日常生活。
            </p>
          </div>
          <div className="bg-slate-50 rounded-lg p-4">
            <h4 className="font-semibold text-slate-800 mb-2">有終末維度的現實生活</h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              第一代門徒經歷基督的死與復活，這讓他們的生活有了根本的改變。一種有終末維度的日常生活的特徵是：在每一個處境中都有對「上帝如何在這裡工作」的期待，並且能夠在不確定中保持盼望。作者提到，當突然遇到艱難處境，一時情急之下脫口而出「媽呀，怎麼辦？」而不是「主啊，幫助我！」——這正如實地暴露了我們裡面心靈的實況。
            </p>
          </div>

          <h3 className="font-bold text-gray-900 text-lg mt-4">二、由默想到默觀</h3>
          <p className="text-gray-700 leading-relaxed">
            默想（Meditation）與默觀（Contemplation）是靈修傳統中的重要區分。默想大致有以下幾個特點：（1）有上帝的話語作為思想的仲介，借著話語來思想基督；（2）借著言語或概念來思想；（3）在言語之間的關聯或思維的某種邏輯中進行；（4）靈修者具有相對的主動性。
          </p>
          <p className="text-gray-700 leading-relaxed">
            默觀則是更深的一個層次：它不再需要言語的仲介，靈修者在靜默中「直接地」與上帝同在。這不是技術可以達到的，而是聖靈在信徒靈魂中的恩賜。從改革宗的角度看，默觀仍然以聖靈在人心靈裡的工作為基礎。
          </p>

          <h3 className="font-bold text-gray-900 text-lg mt-4">三、生活中與基督相遇</h3>
          <p className="text-gray-700 leading-relaxed">
            如果說靈修的第一階段是我們在聖言中經歷主，第二階段是在事件中經歷主，那麼第三階段就是因著對將來終末的認識，我們便有可能在生活場景中直接經歷主。作者提出兩種理解：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-purple-50 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">改革宗的理解</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                透過聖靈在有限者身上的工作，讓人能夠與那無限者（基督）關聯起來。改革宗突出聖靈工作的重要性——信徒是在信心中，用心靈的眼睛看見基督的同在。
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <h4 className="font-semibold text-purple-800 mb-2">路德宗的理解</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                路德宗對於與基督相遇的看法，更接近天主教傳統——信徒可以在信心中看到有形體的復活耶穌向他們顯現。這仍涉及聖靈在人心靈裡的工作，但強調更為具體的相遇。
              </p>
            </div>
          </div>

          <h3 className="font-bold text-gray-900 text-lg mt-4">四、靈程的黑夜</h3>
          <p className="text-gray-700 leading-relaxed">
            阿維拉的特雷莎把人的靈魂看作是一個七層的樓臺。當我們借著靈修，回到自己的心靈裡，上到第七層樓臺時，就會經歷到與上帝的神秘合一。
          </p>
          <p className="text-gray-700 leading-relaxed">
            然而，在通往這種合一的路上，靈修者往往會經歷「靈程的黑夜」——一個上帝隱藏自己、靈魂感覺被遺棄的時期。十架約翰（John of the Cross）以一首牧羊人的詩歌來描述這種靈魂的渴望與痛苦：
          </p>
          <div className="bg-gray-50 rounded-lg p-5 border-l-4 border-gray-400 my-3">
            <p className="text-gray-700 italic leading-relaxed text-sm">
              「一位孤單的年輕牧羊人，感到很痛苦；<br />
              他沒有歡愉，也沒有快慰；<br />
              因為他時常記掛著那牧羊女，<br />
              他的心被愛傷透。<br />
              ……<br />
              他哭泣，因為他想到自己已被遺忘。<br />
              就是那個念頭：<br />
              本來屬於他、充滿陽光的那一位，已經遺忘他了。」
            </p>
            <p className="text-right text-gray-500 text-xs mt-2">——十架約翰</p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            這首詩歌描述的，是基督對人類的愛之渴望——他承受遺棄之痛，是因為他愛我們。「靈程的黑夜」提醒我們：靈修的深化不總是充滿喜樂的，有時要經過黑夜，才能進入更深的光明。
          </p>
        </div>
      </div>

      {/* 延伸探討 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 flex items-center gap-2">
          <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">延伸探討</span>
        </div>
        <div className="p-5 bg-white space-y-5">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">加爾文的「默想永生」</h4>
            <p className="text-gray-700 leading-relaxed">
              加爾文在《基督教要義》第三卷第九章整章談「默想永生」，他認為這是基督徒生活的核心操練之一。他的觀點是：信徒若不習慣思想死亡和永生，就會被「地上的事情」束縛，無法以正確的優先次序生活。「默想永生」不是消極地等死，而是積極地以永恆的視野評估此世的一切。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">「靈程的黑夜」的屬靈意義</h4>
            <p className="text-gray-700 leading-relaxed">
              十架約翰所描述的「靈魂的黑夜」（Dark Night of the Soul）被許多靈修傳統認為是屬靈成熟的必經之路。在黑夜中，靈修者不再依靠屬靈感受（靈修的consolations），而必須以純粹的信心走在黑暗中。這個過程雖然痛苦，卻在破除對靈修感受的依賴，使信徒學習單單倚靠上帝自己。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">終末論與靈修的關係</h4>
            <p className="text-gray-700 leading-relaxed">
              終末論（Eschatology）不只是關於「末日」的教義，更是對當下生活的一種定向。有終末維度的生活，意味著每個當下都在「已然」（基督已復活）和「未然」（基督再來）的張力中生活。這種張力不是焦慮，而是盼望——一種積極地期待上帝在一切事上作工的態度。
            </p>
          </div>
        </div>
      </div>

      {/* 反思問題 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">反思問題</span>
        </div>
        <div className="p-5 bg-white space-y-3">
          {[
            '你有沒有認真思考過自己的死亡？這種思考在你的生命中有沒有讓你對現在的生活有不同的看待方式？',
            '當你突然遇到困難時，你第一個反應通常是什麼？這個反應揭示了你對上帝的真實信任程度如何？',
            '你有沒有經歷過「靈程的黑夜」——感覺上帝沉默、禱告沒有回應的時期？你是如何渡過那段時間的？',
            '默想（Meditation）和默觀（Contemplation）的區別，對你理解靈修的深化有什麼幫助？',
            '你如何理解「在生活場景中與基督相遇」？你有沒有這樣的經歷？',
            '「終末維度的生活」這個概念對你來說是抽象的神學，還是一個可以影響日常決定的實際視野？',
          ].map((q, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">{i + 1}.</span>
              <p className="text-gray-700">{q}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 具體實踐方針 */}
      <div className="mb-6 border border-green-100 rounded-lg overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 flex items-center gap-2">
          <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">具體實踐方針</span>
        </div>
        <div className="p-5 bg-white space-y-4">
          <div>
            <h4 className="font-semibold text-green-700 mb-2">🌅 默想永生的練習</h4>
            <p className="text-gray-700 mb-2">這週找一個安靜的地方，做一個15分鐘的「默想永生」練習：想像自己生命的終點，然後從那個時間點回頭看你現在的生活——什麼是真正重要的？什麼是你一直為之焦慮卻其實不那麼重要的？把你的感受和想法寫下來。</p>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">📖 讀《腓立比書》3:7-21</h4>
            <p className="text-gray-700 mb-2">保羅在這段話中同時談到「認識基督」的深度追求和「我們卻是天上的國民」的終末意識。讀完後，思考：保羅的終末盼望如何影響他當下的生活優先次序？</p>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">🌑 為「黑夜」做準備</h4>
            <p className="text-gray-700 mb-2">讀十架約翰的牧羊人詩歌（參見上文），思考：基督為什麼要「心被愛傷透」？他「哭泣」的原因是什麼？這對你理解基督的愛有什麼啟發？</p>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">🙏 禱告詞</h4>
            <p className="text-gray-700 italic border-l-4 border-green-300 pl-4">
              「主啊，我常常只活在眼睛所見的世界裡，忘記了永恆的真實。求你賜我終末的眼光，讓我在每天的生活中，都能看見你在其中的工作。當我進入靈程的黑夜，感到你的靜默時，幫助我記住：你並沒有離棄我，而是在訓練我更深的信心。奉主耶穌基督的名，阿們。」
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
