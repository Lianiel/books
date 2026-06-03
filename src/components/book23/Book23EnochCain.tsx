import React from 'react';
import { Star, Search, HelpCircle, Check, BookOpen, Users } from 'lucide-react';

export default function Book23EnochCain() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">

      <div className="mb-8 rounded-2xl overflow-hidden shadow-lg border border-amber-200">
        <div className="bg-gradient-to-r from-amber-600 to-red-700 px-5 py-3 flex flex-wrap gap-2">
          <span className="bg-white/20 text-white text-xs font-semibold px-2 py-0.5 rounded-full">創世記</span>
          <span className="ml-auto text-white/80 text-xs font-medium">該隱的子孫們</span>
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6">
          <p className="text-sm text-amber-700 font-medium mb-1">Enoch · Irad · Mehujael · Lamech</p>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">以諾、以拿、米戶雅利、拉麥</h1>
          <p className="text-base text-amber-700 font-semibold mb-4">該隱的子孫們</p>
          <div className="relative bg-white border-2 border-amber-300 rounded-2xl px-5 py-4 shadow-sm inline-block max-w-sm">
            <div className="absolute -left-3 top-5 w-0 h-0 border-t-8 border-t-transparent border-r-[12px] border-r-amber-300 border-b-8 border-b-transparent" />
            <p className="text-gray-800 font-medium text-sm leading-relaxed">
              世界上第一座城市的名字就是我的名字！
            </p>
          </div>
          <div className="mt-4 flex items-center gap-1 text-sm text-gray-600">
            <BookOpen className="w-4 h-4 text-amber-500" />
            <span>創世記 4章</span>
          </div>
        </div>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-amber-100 rounded-xl overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 flex items-center gap-2">
          <Users className="w-5 h-5 text-amber-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">主要內容</span>
        </div>
        <div className="p-5 bg-white space-y-5">

          <div>
            <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
              以諾：世界最早城市的命名者
            </h3>
            <p className="text-gray-700 leading-relaxed">
              以諾是該隱（→該隱，p.26）遷往擄得之地後妻子所生的孩子，這名字在希伯來語中是「服從者」的意思。該隱在擄得建造的城市也是以同樣的名字命名，被認為是世界最早的城市名稱（創世記 4章）。
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              值得注意的是，他和以方舟聞名的挪亞之祖先以諾（塞特後代，→以諾，p.31）是不同人物，不要混淆。
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
              拉麥的孩子們：人類文化的奠基者
            </h3>
            <p className="text-gray-700 leading-relaxed">
              拉麥是該隱一系家譜中最後記錄的人，他有多個孩子，各自開創了人類文化的不同面向：
            </p>
            <ul className="mt-2 space-y-2 text-gray-700 text-sm">
              <li className="flex gap-2"><span className="text-amber-600 font-bold flex-shrink-0">‧</span><span><strong>雅八</strong>：牧養牲畜，是遊牧文化的始祖</span></li>
              <li className="flex gap-2"><span className="text-amber-600 font-bold flex-shrink-0">‧</span><span><strong>猶八</strong>：彈奏豎琴等，以音樂為業，是音樂文化的始祖</span></li>
              <li className="flex gap-2"><span className="text-amber-600 font-bold flex-shrink-0">‧</span><span><strong>土八該隱</strong>：從事銅鐵器製造，是金工技術的始祖</span></li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-2">
              這三人構成了人類文明的三個基礎支柱：農牧業、藝術、冶金技術，建構起人類的物質和精神文化（創世記 4章）。
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">3</span>
              拉麥的「復仇之歌」：暴力的升級
            </h3>
            <p className="text-gray-700 leading-relaxed">
              拉麥對妻子們唱了一首歌：「我為自己受的傷殺了一個人，我為自己受的傷殺了一個少年。若殺該隱，遭報七倍，殺拉麥，必遭報七十七倍。」（創世記 4:23–24）。這首「復仇之歌」標誌著人類從該隱的一次殺人，升級到拉麥時代更無限的暴力循環——復仇不再以「七倍」為限，而是「七十七倍」。
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm text-amber-800">
            <span className="font-semibold">📌 小知識：</span>拉麥是最早打破一夫一妻制的人，娶了兩個妻子亞大和洗拉。
          </div>
        </div>
      </div>

      {/* 重點總結 */}
      <div className="mb-6 border border-sky-100 rounded-xl overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 flex items-center gap-2">
          <Star className="w-5 h-5 text-sky-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">重點總結</span>
        </div>
        <div className="p-5 bg-white space-y-3">
          {[
            '該隱的後代建立了世界第一座城市（以諾），顯示人類即使在罪中仍有建造文明的能力。',
            '拉麥的孩子們分別開創了牧業、音樂和冶金技術，是人類三大文化基礎的始祖。',
            '文明的發展（工具、音樂、城市）同時伴隨著罪惡的升級：從該隱的一次殺人，到拉麥的「七十七倍復仇」，暴力的循環越來越強烈。',
            '這條家譜暗示：沒有信仰的文明發展，可能帶來進步，但也帶來更大的毀滅性。',
          ].map((point, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-sky-600 font-bold flex-shrink-0 mt-0.5">{i + 1}.</span>
              <p className="text-gray-700 leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 延伸探討 */}
      <div className="mb-6 border border-indigo-100 rounded-xl overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 flex items-center gap-2">
          <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">延伸探討</span>
        </div>
        <div className="p-5 bg-white space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">科技與藝術：中性的力量</h4>
            <p className="text-gray-700 leading-relaxed">
              拉麥的孩子們開創了音樂和金屬技術，這些本身都是好的——音樂讓人心靈豐富，金屬工藝讓生活更便利。聖經從不譴責文化創造本身，問題在於這些能力是用於造福他人還是傷害他人。同樣的金屬技術，可以做農具，也可以做武器；同樣的音樂，可以讚美上帝，也可以煽動情慾。這個故事提醒我們：技術和藝術是中性的工具，關鍵是使用者的心和目的。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">暴力的「七十七倍」與寬恕的「七十個七次」</h4>
            <p className="text-gray-700 leading-relaxed">
              拉麥宣稱「殺拉麥，必遭報七十七倍」，這是聖經中暴力升級邏輯的最早記錄。有趣的是，在馬太福音18:22，彼得問耶穌是否要饒恕弟兄七次，耶穌說「不是七次，而是七十個七次」（四百九十次）。這是刻意對應拉麥「七十七倍」的語言：拉麥宣告無限復仇，耶穌宣告無限寬恕——這是人類罪惡循環與上帝恩典倫理的終極對比。
            </p>
          </div>
        </div>
      </div>

      {/* 反思問題 */}
      <div className="mb-6 border border-amber-100 rounded-xl overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">反思問題</span>
        </div>
        <div className="p-5 bg-white space-y-3">
          {[
            '拉麥的孩子們的才能（音樂、牧業、冶金）本身是好的，卻都出自罪惡之家。你認為一個人的恩賜和他的道德品格之間有什麼關係？',
            '從「殺人遭報七倍」到「遭報七十七倍」，暴力在不斷升級。你觀察到現代社會中有哪些「暴力升級」的模式？',
            '耶穌的「七十個七次」寬恕，是對拉麥「七十七倍復仇」的反擊。你在生活中有沒有「復仇循環」難以打破的經驗？怎樣才能走出來？',
          ].map((q, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0 mt-0.5">{i + 1}.</span>
              <p className="text-gray-700 leading-relaxed">{q}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 具體實踐方針 */}
      <div className="mb-6 border border-green-100 rounded-xl overflow-hidden shadow-sm">
        <div className="px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 flex items-center gap-2">
          <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
          <span className="font-semibold text-gray-800">具體實踐方針</span>
        </div>
        <div className="p-5 bg-white space-y-4">
          <div>
            <h4 className="font-semibold text-green-700 mb-2">將才能用於上帝的榮耀</h4>
            <ul className="space-y-1.5 text-sm text-gray-700 ml-1">
              <li className="flex gap-2"><span className="text-green-500 flex-shrink-0 mt-0.5">•</span>辨識你的一個主要才能（音樂、技術、農業、文字……）</li>
              <li className="flex gap-2"><span className="text-green-500 flex-shrink-0 mt-0.5">•</span>思考這個才能目前主要用在什麼目的上，有沒有機會更多地用來服事他人或榮耀上帝</li>
              <li className="flex gap-2"><span className="text-green-500 flex-shrink-0 mt-0.5">•</span>做一個具體的行動：這週用你的才能為某人做一件事</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-2">本週聖經閱讀</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {[
                { ref: '創世記 4:17–24', desc: '該隱後代的家譜' },
                { ref: '馬太福音 18:21–22', desc: '七十個七次的寬恕' },
              ].map(item => (
                <div key={item.ref} className="bg-green-50 border border-green-100 rounded-lg px-3 py-2">
                  <p className="font-semibold text-green-700">{item.ref}</p>
                  <p className="text-gray-600 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 border border-gray-200 rounded-xl p-5 bg-gray-50">
        <h4 className="font-semibold text-gray-700 mb-3 text-sm">相關人物</h4>
        <div className="flex flex-wrap gap-2 text-xs">
          {[{ name: '該隱', desc: '祖先' }, { name: '亞當', desc: '曾祖父' }].map(p => (
            <span key={p.name} className="bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">
              <span className="font-semibold text-amber-700">{p.name}</span>
              <span className="mx-1 text-gray-300">·</span>{p.desc}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
