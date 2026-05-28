import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star, Users, Search, HelpCircle, Check } from 'lucide-react';

export default function Book17Ch7() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    application: true,
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

      {/* 經文要義 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">經文要義</span>
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

      {/* 省思與應用 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('application')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-teal-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">省思與應用</span>
          </div>
          {expanded['application'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['application'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-teal-700 mb-2">犯罪的基督徒可否進神的國？</h4>
              <p className="text-gray-700 leading-relaxed mb-3">哥林多前書六章9-11節列舉不義的人「不能承受神的國」，其中包括淫亂者、同性戀者等。然而緊接著保羅說：「你們中間有人從前也是這樣，但如今你們奉主耶穌基督的名，並藉著我們神的靈，已經洗淨了，成聖了，稱義了。」這段話處理了一個深刻的張力：因信稱義（保羅在加拉太書、羅馬書的核心教導）與成聖（過聖潔生命的要求）之間，並不矛盾。</p>
              <p className="text-gray-700 leading-relaxed">值得注意的是，「洗淨」、「成聖」、「稱義」這三個動詞在原文都是被動式過去式——是已經完成的事。哥林多信徒雖然仍有許多問題，保羅仍然確認他們的蒙恩地位。這告訴我們：這些罪的列舉，不是要讓信徒活在罪疚中，而是要他們認識自己已承受的改變，並繼續活出與新身份相符的生命。對於哥林多信徒中各種問題，保羅有多種處理方式，而這是其中之一。</p>
            </div>
            <div>
              <h4 className="font-semibold text-teal-700 mb-2">打官司展現傲慢與無知</h4>
              <p className="text-gray-700 leading-relaxed mb-3">教會打官司的問題不只是哥林多時代才有。東南亞有些教會把房產登記在本地同工名下，後來那位同工離開教會，把房產賣掉，引發法律糾紛。美國的衛理公會、長老會、聖公會，都因為同性戀婚姻等議題產生宗派分裂，訴諸法庭爭奪教會財產。作者也提到有信徒合夥開糕餅店，後來因利益糾紛對簿公堂，讓局外人看笑話。</p>
              <p className="text-gray-700 leading-relaxed">保羅的真正針對對象，是「欺負人的一方」——那些主動傷害弟兄姊妹的人。他並不是說受害者絕對不能尋求法律保護，而是說教會應優先嘗試庭外和解。在能夠化解的情況下，寧可吃虧，也不讓教會見證受損。</p>
            </div>
            <div>
              <h4 className="font-semibold text-teal-700 mb-2">性自由是對自由的濫用</h4>
              <p className="text-gray-700 leading-relaxed mb-3">同性戀問題在今日教會引發激烈爭論。反對派引用羅馬書一章26-27節和哥林多前書六章9節，主張聖經清楚禁止同性性行為。贊成派有兩個主要論點：其一，這些經文只是針對特定文化中的雜亂性行為，不適用於忠貞的同性伴侶關係；其二，同性戀傾向是天生的，神既然如此創造，就不應反對。</p>
              <p className="text-gray-700 leading-relaxed mb-3">對於基因論，作者提出一個嚴肅的反問：若「基因決定論」成立（某行為因基因而生，故不應受道德判斷），那麼當研究顯示某人對兒童有性吸引力也是「基因決定」時，社會是否也應接受？這個反例說明，「天生如此」本身不足以成為道德許可的理由。</p>
              <p className="text-gray-700 leading-relaxed">保羅在此段的正面教導是：真正的自由，不是放縱身體，而是在身體上榮耀神。身體是聖靈的殿、是基督用寶血買來的——這是基督徒性倫理最深的神學根基。性行為的問題，最終是一個敬拜的問題：我的身體是榮耀神的，還是榮耀自己欲望的？</p>
            </div>
            <div className="mt-2 p-4 bg-teal-50 rounded-lg border border-teal-100">
              <p className="font-medium text-teal-800 mb-2">默想</p>
              <p className="text-gray-700 leading-relaxed italic">「真自由，不是為所欲為，而是在神旨意中的自由。真智慧，不是保護自己的利益，而是以愛解決紛爭。我的身體是聖靈的殿——這個宣告改變了我看待自己、看待自由的每一個角度。」</p>
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
              <p className="text-gray-700">保羅說信徒之間的官司是「已經失敗了」。你是否曾在與弟兄姊妹的糾紛中，優先考慮「我的利益」而非「教會的見證」？那次的結果如何？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">「寧可受虧損，也不要捍衛自己的權益」——這個原則在現實中有多難？你認為這是否適用於所有情況？有沒有例外？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">作者對「基因決定論」提出了反問（若基因決定同性戀，那由基因決定的兒童性侵傾向是否也應被接受？）。你認為這個論點有力嗎？你如何在尊重人的同時，持守聖經的性倫理立場？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">「你的身體是聖靈的殿」——這個真理讓你對自己身體的看法有何改變？飲食、睡眠、運動、性，你在哪些方面仍需要更認真對待這個真理？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">現代文化強調「我的身體，我的選擇」。保羅卻說「你們的身子不是自己的，是重價買來的」。這兩種世界觀在你心中如何交戰？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">六章11節說哥林多信徒「已經洗淨了、成聖了、稱義了」——這個確認對那些因過去的罪仍活在罪疚中的信徒有何意義？你是否有某些過去的罪，仍然難以相信神已完全赦免？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">7.</span>
              <p className="text-gray-700">「在身體上榮耀神」延伸到所有身體的使用。你的日常生活（飲食、休息、工作方式、身體接觸的界限）有多少程度是刻意以榮耀神為考量的？</p>
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
              <p className="text-gray-700 mb-2">選擇一個身體生活的領域（飲食、睡眠、螢幕時間、身體接觸界限），本週：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>承認目前的狀況是否榮耀神</li>
                <li>設立一個具體的改善目標（不是完美，而是朝向榮耀神的方向）</li>
                <li>每天睡前感謝神賜下這個身體，求祂幫助你善用它</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 在糾紛中選擇和解</h4>
              <p className="text-gray-700 mb-2">若你目前與某人（信徒或非信徒）有未解決的糾紛或嫌隙：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>問自己：這件事是否可以在庭外（或私下）和解，而不必訴諸公開衝突？</li>
                <li>若對方有錯，問：我是否願意「寧可受虧」，讓這件事就此平息？</li>
                <li>把和解的意願帶到禱告中，求神賜智慧和愛心</li>
              </ul>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-sm text-green-800 font-medium mb-1">本週禱告</p>
              <p className="text-gray-700 text-lg leading-relaxed italic">
                「主，我的身子是聖靈的殿。我承認有時我忘記了這個尊貴的身份，以為身體可以隨意支配。求祢讓我記住，我是被祢的寶血買來的，不屬於自己。在我面對自由的邊界時，讓我問：這榮耀祢嗎？在面對與人的糾紛時，讓我問：這見證祢的愛嗎？讓我真正活出「在身體上榮耀神」的生命。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
