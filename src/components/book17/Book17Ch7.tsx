import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book17Ch7() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    exploration: true,
    questions: true,
    practice: true,
  });

  const toggleSection = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">第七章</h1>
        <h2 className="text-xl font-semibold text-gray-700">真智慧與真自由</h2>
        <p className="text-sm text-gray-500 mt-1">哥林多前書 六1-20</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">一、信徒上法庭的問題（六1-11）</h4>
              <p className="text-gray-700 leading-relaxed">有哥林多信徒彼此打官司，到不信主的人面前求審。保羅以雙重駁斥回應：一方面，信徒將來要審判世界和天使，現今連這些小事都判不了，豈不令人羞愧？另一方面，打官司本身表明已經失敗——有爭執就意味著已經失去愛。被人欺騙或虧損，難道不更好嗎？不義的人不能承受神的國，悔改和被稱義才是出路。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">二、身體的淫亂問題（六12-20）</h4>
              <p className="text-gray-700 leading-relaxed">保羅針對一些人的口號「凡事我都可行」，指出兩個限制：「但不都有益處」和「我不受它的轄制」。食物的例子是過渡，重點是淫亂——身體的結合（「二人成為一體」）有屬靈的維度，不只是生理行為。信徒的身體是聖靈的殿，是神買來的，要在身體上榮耀神。</p>
            </div>
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
              <h4 className="font-semibold text-indigo-700 mb-2">打官司背後的屬靈問題</h4>
              <p className="text-gray-700 leading-relaxed">保羅看打官司是「傲慢」（以為自己的權益最重要）與「無知」（不知道教會能解決糾紛）的綜合。更根本的問題是：打官司意味著已無法在愛中解決問題，已經「失敗了」。在十字架的邏輯下，「寧可受欺」比「捍衛自己的權益」更符合基督的心。這挑戰了我們對公平和正義的本能衝動。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「凡事可行」的誤用</h4>
              <p className="text-gray-700 leading-relaxed">哥林多人把基督徒的自由（從律法的轄制得釋放）誤用為縱欲的許可。保羅的回應是三重限制：「但不都有益處」（目的論）、「我不受它的轄制」（自由的悖論：若為了自由而放縱，就是被欲望轄制，不再自由）、「身體要歸主」（歸屬論）。真正的自由不是「為所欲為」，而是「活在神旨意中的自由」。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">身體神學：聖靈的殿</h4>
              <p className="text-gray-700 leading-relaxed">六章19-20節是整卷書最具震撼力的宣告之一：「你們的身子就是聖靈的殿……你們是重價買來的。」這有三個含義：第一，身體不是靈魂的監牢（反希臘二元論）；第二，身體具有神聖價值，因為聖靈居住其中；第三，身體不屬於自己，因為基督用寶血買來。因此淫亂是對神、對自己身體的嚴重傷害。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「在身體上榮耀神」的全人神學</h4>
              <p className="text-gray-700 leading-relaxed">「要在你們的身子上榮耀神」（六20）是保羅倫理的基礎。這超越了性道德，延伸到整個身體生活：飲食、休息、勞動、健康、性——所有身體的使用都有榮耀神的維度。這對今日「靈性生活與身體生活分裂」的傾向提出了根本的糾正：榮耀神不只在禱告中，也在使用身體的每一個決定中。</p>
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
              <p className="text-gray-700">「寧可受虧損，也不要捍衛自己的權益」——這個原則在你的日常人際關係中有多難實踐？有沒有一個具體情境，讓你感到很難「甘願吃虧」？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">你如何在個人生活中辨別「這件事可行，但是否有益？」這個問題對你目前的某個習慣或娛樂有何應用？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">「你們的身子是聖靈的殿」——這個真理如何影響你對待自己身體的方式？飲食、睡眠、運動、性，你在哪些方面仍需要更認真對待這個真理？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">現代文化強調「我的身體，我的選擇」。保羅卻說「你們的身子不是自己的，是重價買來的」。這兩種世界觀在你心中如何交戰？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">「在身體上榮耀神」延伸到所有身體的使用。你的日常生活（飲食、休息、工作方式）有多少程度是刻意以榮耀神為考量的？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 三問篩選自由的邊界</h4>
              <p className="text-gray-700 mb-2">本週面對每一個「可行但不確定是否應行」的選擇時，問三個問題：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>這件事對我和他人有益嗎？</li>
                <li>這件事是否正在轄制我，讓我離不開它？</li>
                <li>這件事讓我的身體榮耀神，還是貶低我作為聖靈居所的身份？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 身體是聖靈的殿——全人聖潔的功課</h4>
              <p className="text-gray-700 mb-2">選擇一個身體生活的領域（飲食、睡眠、螢幕時間、身體接觸界線），本週：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>承認目前的狀況是否榮耀神</li>
                <li>設立一個具體的改善目標（不是完美，而是朝向榮耀神的方向）</li>
                <li>每天睡前感謝神賜下這個身體，求祂幫助你善用它</li>
              </ul>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-sm text-green-800 font-medium mb-1">本週禱告</p>
              <p className="text-gray-700 text-sm leading-relaxed italic">
                「主，我的身子是聖靈的殿。我承認有時我忘記了這個尊貴的身份，以為身體可以隨意支配。求祢讓我記住，我是被祢的寶血買來的，不屬於自己。幫助我在身體的每個使用上，都問一句：這榮耀祢嗎？讓我真正活出「在身體上榮耀神」的生命。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
