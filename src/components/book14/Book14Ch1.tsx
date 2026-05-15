import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp, Heart, Search, Target, Check, HelpCircle } from 'lucide-react';

export default function Book14Ch1() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          第1章
        </h1>
        <h2 className="text-xl font-semibold text-gray-700">序言及前言</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => toggleSection('content')}
          className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>

        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-purple-600">張序（張慕皚）</span>
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">對二十世紀的普世教會而言，影響最深，而爭論性又最大的，莫過於世紀初在美國產生的靈恩運動。從歷史角度看，六十年代開始的稱靈恩運動（Charismatic Movement），六十年代之前的稱為五旬節運動。</p>
              <p className="text-gray-700 leading-relaxed mb-3">靈恩運動的出發點在於覺察到現今教會中很多缺乏事奉的熱誠，與使徒行傳的教會比較之下，發現問題的癥結在於初期教會滿有聖靈的能力，而現今的教會所以冷漠和停滯不前，就因為沒有追求聖靈的充滿和運用恩賜去事奉。</p>
              <p className="text-gray-700 leading-relaxed">就靈恩運動追求聖靈能力在教會中彰顯而言，是一點也沒有錯的，眾教會都應該認同這方面的看法，努力去追求。可惜在追求的過程中，靈恩運動中出現了一些富有爭論性的教義和表現。</p>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-pink-600">譯者序（霍玉蓮）</span>
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">中學時代，念使徒行傳，發現其中四個經常出現的字就是「聖靈充滿」，殉道的司提反被「聖靈充滿」，初信主的外邦人被「聖靈充滿」，彼得講道大有能力也是被「聖靈充滿」。那時候，我很希望深入瞭解何謂「聖靈充滿」。</p>
              <p className="text-gray-700 leading-relaxed">本書作者一開始就提出我們在對聖靈的認識上，要校正焦點。認識聖靈的焦點，在乎以基督為中心。聖靈就像牆角的泛光燈，把中心目標照明，他的工作，就是表彰基督和發揚基督。</p>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-purple-600">前言（巴刻自序）</span>
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">神的聖靈、我們的主，並生命的賜予者，在五旬節，聖靈降臨在耶穌基督的門徒身上，擔當了耶穌給他界定的新角色，作門徒的保惠師。保惠師（paraclete）的意思是：「安慰者、輔導者、幫助者、倡議者」。</p>
              <p className="text-gray-700 leading-relaxed">幸而聖靈不負所托！基督徒生命中的各個層面都是超自然的；只有聖靈能帶動我們活出基督徒的生命。聖靈正在我們中間激勵我們，為要體現主耶穌自己和他的職事。</p>
            </div>
          </div>
        )}
      </div>

      {/* 延伸探討 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => toggleSection('exploration')}
          className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">延伸探討</span>
          </div>
          {expanded['exploration'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>

        {expanded['exploration'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">靈恩運動的歷史背景</h4>
              <p className="text-gray-700 leading-relaxed mb-3">靈恩運動起於二十世紀初，反映了基督教會對聖靈工作實踐化的渴望。它質疑現代教會為何缺乏初代教會那樣的能力和熱誠，提出了一個重要問題：聖靈的能力是否真的應該在當代教會中彰顯？</p>
              <p className="text-gray-700 leading-relaxed">這個運動的興起不是偶然的，而是對於機械化宗教、制度化信仰的一種屬靈反動。它挑戰了基督教世俗化的現象，重新強調聖靈充滿、恩賜運用的重要性。</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">焦點矯正的必要性</h4>
              <p className="text-gray-700 leading-relaxed">本書的核心貢獻在於提出一個重要的神學矯正：聖靈的焦點不在於超自然現象的彰顯，而在於基督的彰顯。這是一個paradigm shift —— 從「聖靈能做什麼」轉向「聖靈體現誰」。</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">以基督為中心的聖靈論</h4>
              <p className="text-gray-700 leading-relaxed">「泛光燈」的比喻深刻地表達了聖靈的本質角色。正如舞台上的泛光燈不會吸引觀眾的注目，而是將焦點投向舞台中央的演員一樣，聖靈的工作就是指向、彰顯、見證基督。這從根本上重新定義了我們對聖靈工作的理解。</p>
            </div>
          </div>
        )}
      </div>

      {/* 反思問題 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => toggleSection('questions')}
          className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">反思問題</span>
          </div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>

        {expanded['questions'] && (
          <div className="p-5 bg-white space-y-3">
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">1.</span>
              <p className="text-gray-700">你認為為什麼現代教會常常缺乏初代教會那樣的屬靈生命力？可能的原因有哪些？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">在你的信仰經歷中，「聖靈充滿」是什麼樣的體驗？它與基督的關係是什麼？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">你是否曾經被某些「超自然現象」所吸引，而忽略了基督本身的品格？你如何調整焦點？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">「泛光燈」的比喻如何改變了你對聖靈工作的理解？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">聖靈能力的真正表現是什麼？超自然恩賜與聖靈工作是什麼關係？</p>
            </div>
          </div>
        )}
      </div>

      {/* 具體實踐方針 */}
      <div className="mb-6 border border-green-100 rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => toggleSection('practice')}
          className="w-full px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">具體實踐方針</span>
          </div>
          {expanded['practice'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>

        {expanded['practice'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 焦點檢視</h4>
              <p className="text-gray-700 mb-2">在禱告或靈修時，問自己：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>我現在關注的是「聖靈能為我做什麼」，還是「聖靈在指向誰」？</li>
                <li>我是在追求屬靈經歷，還是在追求基督的品格？</li>
                <li>我的信仰焦點有沒有偏離了基督？</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 經文反思</h4>
              <p className="text-gray-700 mb-2">每週選一段關於聖靈的經文（如約14-16章），思考：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>這段經文中，聖靈如何指向基督？</li>
                <li>聖靈的工作如何服侍基督的目的？</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 屬靈操練</h4>
              <p className="text-gray-700 mb-3">「泛光燈式的禱告」：在禱告中實踐「看不見」聖靈，只看見基督。</p>
              <div className="bg-green-50 p-3 rounded text-gray-700 text-sm">
                <p className="mb-2">操練方式：</p>
                <ol className="list-decimal list-inside space-y-1 ml-2">
                  <li>安靜中，感受聖靈的同在（不強求體驗）</li>
                  <li>將焦點轉向基督——他的品格、犧牲、復活</li>
                  <li>讓聖靈的工作在你心中呈現基督的形象</li>
                  <li>感謝聖靈「隱形」卻有效的工作</li>
                </ol>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">📝 生活應用</h4>
              <p className="text-gray-700 mb-2">選擇一個生活領域（工作、人際關係、服侍），反思：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>我在這個領域中是否體現了基督的品格？</li>
                <li>聖靈想要透過我，彰顯基督的什麼特質？</li>
                <li>本週我如何刻意將焦點轉向基督，而非自我表現？</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
