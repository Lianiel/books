import React from 'react';
import { Target, Search, HelpCircle, Check } from 'lucide-react';

export default function Book16Ch5() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* 標題 */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">第四章</h1>
        <h2 className="text-xl font-semibold text-gray-700">生命內裡的轉變</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-violet-100 rounded-lg overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-violet-50 to-purple-50 flex items-center gap-2">
          <Target className="w-5 h-5 text-violet-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">主要內容</span>
        </div>
        <div className="p-5 bg-white space-y-4">
          <p className="text-gray-700 leading-relaxed bg-teal-50 rounded-lg p-4 border-l-4 border-teal-400">
            本章從靈修操練者的角度，反省個人生命成長的三個方面：（1）意志的降服——操練在信靠與悔改中放下自己，達到意志的自由與釋放；（2）理智的歸正——在終末的盼望裡面對良知的呼聲，啟動理性的認知；（3）情感的聖化——在基督的愛裡做到單單以上帝為樂。
          </p>

          <h3 className="font-bold text-gray-900 text-lg">一、信與意志的轉變</h3>
          <p className="text-gray-700 leading-relaxed">
            保羅在《羅馬書》7章描述了「裡面的人」的掙扎：「在我裡頭，就是我肉體之中，沒有良善。」（羅7:18）這個掙扎揭示了意志受到捆綁的情況——裡面的人似乎已經蘇醒，但在實際處境中，我們的意願又總是通過人平時習慣的方式來為自己尋求理由，因此無法延伸成為在具體事務中的意志。
          </p>
          <div className="space-y-3">
            <div className="bg-rose-50 rounded-lg p-4">
              <h4 className="font-semibold text-rose-800 mb-2">深切的悔改</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                悔改讓裡面的人蘇醒，並與老我或肉體之習慣勢力分離。加爾文理解悔改有兩個層面：（1）否定自己，轉離罪；（2）面對絕望與痛悔，依然堅持不自甘沉淪，選擇轉向上帝，不顧一切地投入基督。深切的悔改是在上帝的恩典與主權之下。
              </p>
            </div>
            <div className="bg-rose-50 rounded-lg p-4">
              <h4 className="font-semibold text-rose-800 mb-2">信靠與意志的釋放</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                若要讓裡面的人的意願發展成在具體事務中的意志，還需要更積極的因素——對上帝的信靠。路德說，在信心中，人與基督的聯合如同婚約：信徒的罪都歸給基督，基督的義都歸給信徒。這種信靠產生「心靈自由中的立志」——不再是勉強自己，而是因愛甘心樂意。
              </p>
            </div>
          </div>

          <h3 className="font-bold text-gray-900 text-lg mt-4">二、望與理智的轉變</h3>
          <p className="text-gray-700 leading-relaxed">
            加爾文把人的靈魂分為兩個主要功用：理智與意志。裡面的人通過良知或理智這種積極的方式外顯出來：「我因此自己勉勵，對上帝對人，常存無虧的良心。」（徒24:16）無虧的良心涉及兩層關係：對上帝，以及對人。
          </p>
          <div className="space-y-3">
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">在患難中生髮盼望</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                保羅說：「患難生忍耐，忍耐生老練，老練生盼望。」（羅5:3-4）盼望不是樂觀主義，而是在苦難中被上帝煉淨後的確信。在患難中，理智的功能是辨別苦難的意義，而不是逃避它。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">內在理性的生髮</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                巴斯卡（Pascal）說：「只有兩類人可以稱為理性的人：因為認識上帝而全心全意事奉上帝的人，和因為不認識上帝而全心全意尋求上帝的人。」真正的理性不是高傲的知識主義，而是被良知（對上帝最終審判的意識）所塑造的判斷力。
              </p>
            </div>
          </div>

          <h3 className="font-bold text-gray-900 text-lg mt-4">三、愛與情感的轉變</h3>
          <p className="text-gray-700 leading-relaxed">
            愛德華茲（Jonathan Edwards）說：「我們所說的情感並非身體的感動，而是靈魂的感動……這種內在的感受或屬靈的感覺就是我們說的情感。」真正的敬虔情感是源於聖靈在心靈裡的內住及其活動的結果，不是人工製造的情緒。
          </p>
          <div className="space-y-3">
            <div className="bg-emerald-50 rounded-lg p-4">
              <h4 className="font-semibold text-emerald-800 mb-2">通過愛表達出來的力量</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                自然的人處於以自我為中心、有罪的生存狀態中，只是靠血緣來維繫一種群體關係。基督裡的愛是一種能力或力量，並不是我們天生就擁有的——它是聖靈在我們心裡傾倒上帝之愛的結果（羅5:5）。
              </p>
            </div>
            <div className="bg-emerald-50 rounded-lg p-4">
              <h4 className="font-semibold text-emerald-800 mb-2">心靈帶來情感的聖化</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                愛德華茲得出結論：「一切真宗教的本質在於聖潔的愛，整個宗教都在於這種神聖的情感以及愛的氣質。」如果沒有愛，無論多麼深奧的知識、多麼熱鬧的宗教儀式，都算不得什麼（林前13章）。情感的聖化意味著我們的愛逐漸從以自我為中心，轉向以上帝和他人為中心。
              </p>
            </div>
          </div>
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
            <h4 className="font-semibold text-gray-800 mb-2">「裡面的人」的聖經背景</h4>
            <p className="text-gray-700 leading-relaxed">
              保羅在《羅馬書》7:22和《以弗所書》3:16都提到「裡面的人」（inner man）。這個概念不是二元論的（靈魂vs.身體），而是指被聖靈更新的內在生命，與「外面的人」（肉身）形成張力。《羅馬書》7-8章的掙扎，描述了這個更新過程的真實性——信徒既已在基督裡得勝，又仍在進行成聖的掙扎。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">悔改的兩個層面</h4>
            <p className="text-gray-700 leading-relaxed">
              加爾文和路德都強調悔改不只是情感上的懊悔，而是包含轉向（metanoia）的行動。加爾文特別指出：真正的悔改在絕望中依然轉向上帝，這是信心的行動，不是意志力的表現。這種悔改是持續的——不是一次性的「決志」，而是每天向老我死去、向基督活著的生命方式。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">愛德華茲的宗教情感論</h4>
            <p className="text-gray-700 leading-relaxed">
              愛德華茲的《宗教情感》（Religious Affections, 1746）是回應當時大復興運動中的兩個極端：一是純理性主義（拒絕任何情感），二是感情主義（以情感強度為屬靈深度的標準）。他的中間路線是：真正的屬靈情感以聖靈的工作為根基，以聖潔的生命為果子，不依賴主觀感受的強烈程度。
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
            '你有沒有經歷過保羅在《羅馬書》7章描述的掙扎——「立志為善由得我，只是行出來由不得我」？在哪些具體領域你最能感受到這種張力？',
            '你如何理解「深切的悔改」與表面的懊悔之間的區別？你最近一次真正悔改是在什麼事情上？',
            '路德說信心使信徒與基督的聯合如婚約。這個比喻對你理解「因信稱義」有什麼幫助？',
            '「良知」在你生活中是如何運作的？你覺得你的良知是否足夠敏感？有哪些情況是你的良知在說話，但你沒有留意？',
            '你的屬靈情感（對上帝的愛、對罪的憎惡、對他人的憐憫）主要依賴什麼而生？它們有沒有反映在你生活的行動中？',
            '信、望、愛這三方面的轉變，哪一方面在你生命中目前最需要成長？',
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
            <h4 className="font-semibold text-green-700 mb-2">💔 深切悔改的操練</h4>
            <p className="text-gray-700 mb-2">這週選一件你知道需要悔改的事（可大可小）。不只是說「對不起主」，而是用加爾文的兩個層面：（1）清楚地對自己承認這件事的錯誤；（2）在感到絕望時仍選擇轉向上帝，接受他的恩典。把這個悔改寫在日記中。</p>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">📖 讀《羅馬書》5-8章</h4>
            <p className="text-gray-700 mb-2">這四章完整地描述了信（稱義）、望（在患難中的盼望）、愛（聖靈澆灌的愛）與「裡面的人」的掙扎。慢讀，注意保羅如何將這三者連結。</p>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">❤️ 操練真實的愛</h4>
            <p className="text-gray-700 mb-2">這週選一個你有困難去愛的人（家人、同事、或某個你一直迴避的人），為他禱告三天，求聖靈把上帝的愛澆灌在你心中。不需要立刻有行動，先從禱告開始。</p>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">🙏 禱告詞</h4>
            <p className="text-gray-700 italic border-l-4 border-green-300 pl-4">
              「主啊，我看見自己裡面的人還需要大量的更新。求你在我的意志上施恩，讓我在每一次掙扎中學習更深的悔改和信靠。求你在患難中塑造我的盼望，讓我的理智被你的話語塑造而非被環境支配。求你的愛充滿我，使我能以真實的愛來愛你和愛人。奉主耶穌基督的名，阿們。」
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
