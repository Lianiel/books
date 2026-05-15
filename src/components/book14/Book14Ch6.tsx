import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Search, HelpCircle, Check } from 'lucide-react';

export default function Book14Ch6() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">第6章</h1>
        <h2 className="text-xl font-semibold text-gray-700">聖靈的路徑：靈恩生活</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>

        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <p className="text-gray-700 leading-relaxed">聖靈的恩賜是聖靈為了建造教會而分配給信徒的超自然能力。聖經將這些恩賜列舉為多種多樣——說預言、教導、勸勉、給予、管理、憐憫、教導、醫治、行異能、說方言等。</p>
            <p className="text-gray-700 leading-relaxed">許多關於恩賜的爭論來自於對恩賜的誤解：(1)將恩賜與靈性關聯，以為有某種恩賜的人更屬靈；(2)將恩賜與救恩捆綁，以為某些恩賜是得救的證據；(3)將恩賜與個人完美化，以為有恩賜就表示品格完美。</p>
            <p className="text-gray-700 leading-relaxed">事實上，恩賜是為了建造教會，而非抬高自己。每個信徒都有恩賜，每個恩賜都同等重要，因為它們都服務於基督身體的成長。最重要的不是你有什麼恩賜，而是你如何在愛心的動機下使用它們。</p>
            <p className="text-gray-700 leading-relaxed">聖靈的引導、他在信徒心中工作，都是實踐中的能力見證。尋求聖靈引導的信徒應該期待平靜、清晰、與聖經一致、帶來平安的引導，而非倉促、混亂、違背聖經、帶來困擾的指示。</p>
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
              <h4 className="font-semibold text-gray-800 mb-2">恩賜的多元性與平等性</h4>
              <p className="text-gray-700 leading-relaxed">保羅刻意強調眾多的恩賜（羅12章、林前12章、彼前4章）來糾正教會將某些恩賜視為「超級屬靈」的傾向。一個有行異能恩賜的人不比有憐憫恩賜的人更屬靈；一個說預言的人不比一個教導的人更重要。所有恩賜都是聖靈分配的，都對教會成長同等重要。</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">恩賜、靈性、品格的區別</h4>
              <p className="text-gray-700 leading-relaxed">這是一個易於混淆的三角形。一個人可能有驚人的恩賜但品格有缺陷；一個人可能靈性深刻但恩賜平常。聖靈首要的工作是造就品格（屬靈的果子——愛、喜樂、和平等），恩賜的工作是次要的（為了服侍他人）。將恩賜等同於屬靈成熟是本末倒置。</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">愛是恩賜使用的終極指標</h4>
              <p className="text-gray-700 leading-relaxed">林前13章經常被誤讀為關於愛的抒情詩，但實際上它在討論恩賜的正確使用。無論多偉大的恩賜——說預言、行異能、捨盡所有——如果缺乏愛，都變成了空洞的聲音。愛是評估恩賜使用是否合宜的關鍵標準。</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">聖靈引導的辨別</h4>
              <p className="text-gray-700 leading-relaxed">聖靈的引導有幾個特徵：(1)與聖經一致——不會違背聖經原則；(2)帶來平安——腓立比書4:7提到聖靈的平安；(3)合乎聖靈的品格——愛、溫柔、謙遜；(4)透過多個印證——聖經、環境、他人勸阻。相反，倉促、混亂、導致罪惡、只依賴個人感受的「引導」往往不是聖靈的工作。</p>
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
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">1.</span>
              <p className="text-gray-700">你認為自己有哪些聖靈的恩賜？你是如何認出它們的？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">你有沒有傾向於將某些恩賜視為比其他恩賜更「屬靈」或更「重要」？為什麼？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">你在使用恩賜時的主要動機是什麼？是為了建造他人還是彰顯自己？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">「愛是恩賜使用的終極指標」——這對你有什麼挑戰？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">你如何分辨一個「引導」是否真的來自聖靈？你有過被誤導的經驗嗎？</p>
            </div>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 恩賜自評與再評估</h4>
              <p className="text-gray-700 mb-2">列出你認為自己有的恩賜，然後思考：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>這些恩賜是如何服侍他人、建造教會的？</li>
                <li>我是否在爭求某種「更屬靈」的恩賜？</li>
                <li>是否有我忽視的、他人認出的恩賜？</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 愛心的檢視</h4>
              <p className="text-gray-700 mb-2">選擇一個你經常使用的恩賜，問自己：</p>
              <div className="bg-green-50 p-3 rounded text-gray-700 text-sm space-y-2">
                <p>• 我使用它時的主要動機是什麼？</p>
                <p>• 我是否為了被看見或稱讚而使用它？</p>
                <p>• 我是否真的關心他人的益處？</p>
                <p>• 如何用更多的愛和謙遜來使用它？</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 引導的辨別練習</h4>
              <p className="text-gray-700 mb-2">針對一個你需要決定的事項，用四層判斷標準：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>聖經怎麼說？</li>
                <li>我有平安感嗎？</li>
                <li>是否符合聖靈的品格（愛、溫柔、謙遜）？</li>
                <li>是否有多個印證（環境、他人勸告、內心確信）？</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 恩賜的奉獻禱告</h4>
              <div className="bg-green-50 p-3 rounded text-gray-700 text-sm">
                <p>「聖靈啊，感謝你將恩賜賦予我。幫助我看見每個恩賜都有價值，包括我所有的和他人所有的。請用愛充滿我，使我使用恩賜時只為建造他人，而非彰顯自己。求你的平安充滿我的決定，你的智慧引導我的選擇。」</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
