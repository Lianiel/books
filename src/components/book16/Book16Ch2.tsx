import React from 'react';
import { BookOpen, Search, HelpCircle, Check } from 'lucide-react';

export default function Book16Ch2() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* 標題 */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">第一章</h1>
        <h2 className="text-xl font-semibold text-gray-700">一階：靈修方法初階</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-violet-100 rounded-lg overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-violet-50 to-purple-50 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-violet-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">主要內容</span>
        </div>
        <div className="p-5 bg-white space-y-4">
          <h3 className="font-bold text-gray-900 text-lg">一、靈修的意義</h3>
          <p className="text-gray-700 leading-relaxed">
            在今天這個「忙碌」的時代，尋求內心的安靜和靈修更顯得必要。如果我們不能在上帝面前安靜下來，在靈修中讓自己站立得穩，得到前行的力量，我們就無可避免地被這個忙碌的世界裹挾，陷入身不由己的焦躁之中。
          </p>
          <p className="text-gray-700 leading-relaxed">
            為什麼基督徒需要靈修？首先，上帝要向我們顯現他自己。其次，我們生命的成長與堅固需要與上帝相連接。信徒認識到住在我們裡面的聖靈，能幫助我們與上帝親密相交，就像我們平時和很要好的朋友相處一樣。
          </p>

          <h3 className="font-bold text-gray-900 text-lg mt-4">二、靈修的方法</h3>
          <div className="bg-violet-50 rounded-lg p-4 space-y-3">
            <div>
              <h4 className="font-semibold text-violet-900 mb-1">安靜的方法</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                當人嘗試安靜時，就會發現自己很難安靜下來——平時想不起來的事，現在似乎都湧現出來。可以用兩個比喻說明：一是搖晃的水瓶（內心的紛亂）；二是對上帝充滿敬畏的預備心（讓心靈轉向）。具體方法包括：發自內心的簡短禱告，或唱一首熟悉的詩歌，幫助我們預備和達到內心的安靜。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-violet-900 mb-1">默想的方法</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                靈修時的默想不是「打坐」或排除各種意念，也不是陷入空洞的冥想。進入靈修默想最重要的途徑，是以上帝的話語為中心，通過默想他的話語來達到與上帝的相交。靈修默想式讀經有別於每日通讀聖經，也不同於小組式查經。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-violet-900 mb-1">默想話語的五個方向</h4>
              <ul className="text-gray-700 text-sm space-y-1 ml-4 list-disc">
                <li>有什麼罪是上帝要提醒我的？</li>
                <li>有什麼應許是我應當抓住的？</li>
                <li>有什麼榜樣我可以效法？</li>
                <li>有什麼命令我需要遵守？</li>
                <li>上帝讓我對他有怎樣的新認識？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-violet-900 mb-1">對禱的方法</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                靈修中的禱告是「被話語歸正後的傾心吐意」——先讓上帝的話語說話，再以禱告回應。這種對禱式的互動，使靈修成為真實的相交，而非單向的閱讀。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-violet-900 mb-1">寫靈修筆記</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                靈修筆記總結靈修時所得到的感受，包括：今天感動你的那節經文、你對經文的領會及應用，以及你對上帝的回應禱告。筆記是幫助我們記住上帝話語，並在生活中應用的實際工具。
              </p>
            </div>
          </div>

          <h3 className="font-bold text-gray-900 text-lg mt-4">三、內室的靈修過程</h3>
          <p className="text-gray-700 leading-relaxed">
            操練靈修前，需要預備好三個條件：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <div className="font-bold text-purple-800 mb-1">每天固定的時間</div>
              <div className="text-sm text-purple-700">建立規律，保護靈修時間不被其他事情佔據</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <div className="font-bold text-purple-800 mb-1">固定的地點</div>
              <div className="text-sm text-purple-700">你的「會幕」——一個讓你能安靜面對上帝的空間</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <div className="font-bold text-purple-800 mb-1">聖經</div>
              <div className="text-sm text-purple-700">靈修是借著聖經與上帝溝通，話語是靈修的中心</div>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mt-3">
            每天靈修的過程大致如下（建議20-30分鐘）：
          </p>
          <div className="space-y-2">
            <div className="flex gap-3 items-start">
              <span className="bg-violet-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
              <div>
                <span className="font-semibold text-gray-800">預備你的心（3～5分鐘）</span>
                <p className="text-gray-600 text-sm">用安靜的禱告或詩歌，讓心從外在的紛擾轉向上帝</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="bg-violet-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
              <div>
                <span className="font-semibold text-gray-800">默想（10～15分鐘）</span>
                <p className="text-gray-600 text-sm">慢讀、思想每節經文含義，尋找感動你的那節經文，集中默想</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="bg-violet-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
              <div>
                <span className="font-semibold text-gray-800">回應禱告及寫靈修筆記（5～10分鐘）</span>
                <p className="text-gray-600 text-sm">以禱告回應所默想的話語，並記錄金句和應用</p>
              </div>
            </div>
          </div>

          <h3 className="font-bold text-gray-900 text-lg mt-4">四、靈修習慣的操練</h3>
          <p className="text-gray-700 leading-relaxed">
            操練靈修最大的困難，就是如何讓靈修成為日常生活的基本部分。要養成靈修的習慣，可能需要兩三年時間。引導你操練靈修的真正老師是聖靈——靈修不單挑戰你是否願意順服，更挑戰你是否願意開始，並願意一直堅持。
          </p>
          <p className="text-gray-700 leading-relaxed">
            初學靈修常見的問題包括：難以全神貫注、思緒飄散、感覺沒有收穫。作者的建議是：不要關注收穫的多少，而是要享受與上帝相交的安靜，以及向上帝傾心吐意的釋放。堅持渴慕的心，上帝必定帶領。
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
            <h4 className="font-semibold text-gray-800 mb-2">靈修默想與查經的區別</h4>
            <p className="text-gray-700 leading-relaxed">
              許多人把靈修和查經混淆。查經的目的是理解經文的歷史背景、文法結構和神學意涵，強調知識的獲取；而靈修默想的目的是在上帝面前安靜，讓話語在心靈中產生迴響，強調與上帝的相交。兩者都重要，但靈修更注重「心靈與主的相遇」而非「頭腦對文本的分析」。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">為何靈修如此難以堅持？</h4>
            <p className="text-gray-700 leading-relaxed">
              從神學角度看，靈修的困難不只是時間管理的問題，而是屬靈爭戰的問題。舊有的習慣、世俗的拉力、老我的抵制，都使人難以持守靈修。同時，靈修的果效往往不是立竿見影的，需要在看不到進步的情況下仍然堅持，這需要信心和對聖靈工作的倚靠。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">安靜在現代文化中的意義</h4>
            <p className="text-gray-700 leading-relaxed">
              當代文化崇尚效率、資訊和刺激，安靜被視為浪費時間。但靈修傳統一致強調：沒有安靜，就沒有真正的傾聽；沒有傾聽，就無法認識上帝。卡布斯說「上帝的語言是沉默」，意味著我們要在靜默中才能聽見那位常常以「微小的聲音」（王上19:12）說話的上帝。
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
            '你目前有規律的靈修習慣嗎？如果有，是什麼幫助你建立並維持它？如果沒有，你覺得最大的阻礙是什麼？',
            '「靈修默想」和你平時讀聖經的方式有什麼不同？哪個方式讓你覺得與上帝更親近？',
            '在靈修時，你最難克服的困難是什麼（思緒飄散、難以安靜、感覺沒有收穫……）？',
            '默想聖經話語的五個方向中，哪一個是你最容易忽略的？為什麼？',
            '你有寫靈修筆記的習慣嗎？你覺得記錄靈修的感受對你有什麼幫助？',
            '作者說「引導你操練靈修的真正老師是聖靈」。這句話對你來說意味著什麼？',
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
            <h4 className="font-semibold text-green-700 mb-2">📅 建立你的靈修三要素</h4>
            <p className="text-gray-700 mb-2">這週確定你的靈修三個條件：</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
              <li>選一個固定的時間（早晨？睡前？午休？）</li>
              <li>選一個固定的地點（書房的椅子？陽臺？餐桌旁？）</li>
              <li>準備好你的聖經和一本筆記本</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">📖 試行一週靈修練習</h4>
            <p className="text-gray-700 mb-2">按照本章介紹的三步驟（預備心 → 默想 → 回應禱告+筆記），用《約翰福音》1:1-14，每天選2-3節，做一週的靈修練習。</p>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">✍️ 開始你的靈修筆記</h4>
            <p className="text-gray-700 mb-2">每天靈修後，寫下：①今天的經文 ②最感動你的一節 ③你從中得到什麼感受或提醒 ④你的回應禱告（三四句即可）</p>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">🙏 禱告詞</h4>
            <p className="text-gray-700 italic border-l-4 border-green-300 pl-4">
              「主啊，我渴望更深地認識你。求你幫助我建立靈修的習慣，讓每天的安靜成為我與你相交的時間。當我靈修時，求聖靈引導我進入你話語的深處，讓你的話成為我腳前的燈、路上的光。我知道這個習慣需要時間建立，求你賜我堅持的恩典。奉主耶穌基督的名，阿們。」
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
