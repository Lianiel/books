import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book34Ch10() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    exploration: true,
    questions: true,
    practice: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <p className="text-cyan-700 font-semibold tracking-wide mb-1">第三篇　與人分離</p>
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-700 to-teal-700 bg-clip-text text-transparent">第十章</h1>
        <h2 className="text-xl font-semibold text-gray-700">學習設限</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-cyan-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-cyan-50 to-teal-50 hover:from-cyan-100 hover:to-teal-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-cyan-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <p className="text-gray-700 leading-relaxed">
              我們已經看見設限的重要性，許多人在成長過程中，因為沒有學習設限而遭受痛苦。司提反因為不會對別人的要求說不，他幾乎要失掉工作。珊蒂因為無法對母親說不，她非常不快樂而幾乎失控。珍因為無法對酗酒的丈夫說不，她遭受極大的痛苦。吉姆因為不能對妻子說不，覺得很不開心。彼得因為無法拒絕母親要他留在家裡，幾乎想自殺。唐娜因為無法對家人過分的期望說不，覺得很憤怒。所有這些人都可以學習如何設限，以及如何防止別人越界。
            </p>
            <p className="text-gray-700 leading-relaxed">
              讓我們看看設限的技巧，以及當別人試圖越界時，如何說不。
            </p>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">一、設限的技巧</h3>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">得到注意</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                既然設限就是對屬於你的東西加上所有權，第一步就是要注意「你是誰」。注意你的身體、感覺、態度、行為、思想、能力、選擇、慾望和限制。對於你的過去、現在、將來做一個存貨盤點。找別人來幫助你盤存。你需要別人的回應，因為我們通常看不見我們哪些地方疏忽。你也可能從專業人員處獲得幫助。箴言十五章22節說：「不先商議，所謀無效。謀士眾多，所謀乃成。」
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">定義你是誰</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                正如神定義自己，你必須確定自己是誰。開始說你的感覺，你喜歡什麼，你想要什麼，你會做什麼，以及你的看法。雕塑出一個身份，並說「這就是我」。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">定義你不是誰</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                你必須說你不是誰，說你不同意的、不喜歡的、不願做的，諸如此類。有界限問題的人，不會為任何事站出來說話。他們接受每一件事。這有很大的破壞性。箴言六章中，神要我們抵擋恨惡一些事。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">發展「不」的肌肉</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                一個孩子以說不來學習建立界限。我們許多人從我們的字典中除去了這個字，我們必須重新找到它。加強你說不的肌肉。從小的練習開始，例如說出你不喜歡去某一家餐館，漸漸對於更困難的事，例如當你不覺得愛時，對做愛說不。學習說不，可能是最重要也是最困難的設限工作，尤其對父母說不。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">停止抱怨別人</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                對自己的痛苦負責，不責怪別人，是脫離捆綁進入痊癒的重大步驟。停止抱怨別人，去面對處理。這並不是說，別人沒有責任，但我們自己必須處理。責怪別人是一條死巷子，此路不通。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">停止扮演受害者</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                身為成人，你有選擇。開始為選擇負責，並擁有它們吧！如果你給一些東西，這是你的選擇，不要扮演受害者，好像別人強迫你似的。身為成人，你可以選擇。如果你不喜歡你的工作，負起責任去找另一個。如果你被一個朋友一再地批評，負起責任找他談談。你對你選擇去做的事有責任，負起這些責任會改變你的生命。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">不屈不撓</p>
              <p className="text-gray-700 leading-relaxed mb-2">神呼召我們要堅忍，不論困難反對，要不屈不撓：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「存心忍耐，奔那擺在我們前頭的路程。仰望為我們信心創始成終的耶穌。他因那擺在前面的喜樂，就輕看羞辱，忍受了十字架的苦難，便坐在神寶座的右邊。那忍受罪人這樣頂撞的，你們要思想，免得疲倦灰心。」（來十二：1-3）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                為自己設定目標，並附上持續堅忍的努力，去完成它們。堅忍產生紀律和責任，堅忍產生品格：「患難生忍耐，忍耐生老練，老練生盼望。」（羅五：3-4）
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">積極主動，而非被動</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                界限有問題的人看自己不是主導者，而是反應者。他們的選擇是被動的，是對別人的反應。「選擇」去愛和給，不要只在要求時才做。選擇工作並去完成，不要只在要求之下才做。這樣就建立了品格，一種「我將會」「我要」的意識。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">設限</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                最重要的工作之一，就是對虐待行為設限，不要助長別人的自我中心和不負責任。對身體的虐待設限，使其對你影響減少，進一步要對情緒虐待設限，例如批評和責備。開始理解你的界限，像時間、金錢、和精力。如果你謹慎地花，你會慢慢有收穫；如果你花了太多，你會破產。與神與人一起找出你現在合理的支出。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">選擇有價值的</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                弄清楚你想和誰在一起，去什麼地方。正如約書亞，你必須選擇你所要事奉的。決定你的價值觀，向目標前進。其他基督徒可能告訴你應有的價值觀，但他們不是完全的，你必須為你的選擇負責。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">操練自制</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                對你的期望設限，你不可能擁有每一件想要的東西。但也要小心不要走向另一個極端，對自己的希望設太多限制，以致失去自我。在滿足願望和控制願望之間保持平衡。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">接納別人</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                學習照著人們的本相接納和愛別人。因為你不如此，就是控制不屬於你的——別人。如果你願意被接納，你就要去接納別人；如果你願意別人尊重你說不，你就要尊重別人說不。如果你不喜歡別人對你說不，你就會想去控制別人。當人說不時，仍然愛他，讓他享有自由，只有這樣，你自己才會有自由。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">理解你需要分離</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在你所愛的人之外，發展你的興趣和分離的時間。分離是好的，會促進你的人際關係。分離會增加你的渴望。數算一下你與別人的不同之處，你所愛的人會幫助你更瞭解自己的特性。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">要坦誠</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                要彼此坦誠，許多人不敢坦誠，因為他們害怕失去親密關係。事實上，坦誠使人更親密，因為坦誠加強人的特性。你越瞭解你的特性，你越能與人親密。告訴你所愛的人，你真正在想什麼，你真正的看法。這是愛的基礎。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">向扭曲的思想挑戰</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                耶穌說真理叫我們自由。找出你的扭曲思想。依照真理而行：你會有新的學習，並會產生不同的果子。這是艱難的工作，需要朋友的幫助及神的靈引導進入真理。你才會瞭解自己及神的世界。
              </p>

              <p className="text-gray-700 leading-relaxed mb-3">
                在談界限時，我們不能忽視一個重點：責任。我們的界限定義我們的責任。它告訴我們生命包含什麼，以及我們要對什麼負責。我們必須擁有自己的身體、感覺、態度、行為、思想、能力、選擇、慾望、和界限。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們如果就停在這裡，躲在籬笆後面的安全地帶，我們將會過一個不符合聖經的生活，在愛上有缺失；而愛是生命的目標。聖經對愛的觀念包括為別人捨己。然而我們不能把我們沒有的給出去，界限就是幫助我們能擁有自己，然後我們可以選擇給予。
              </p>
              <p className="text-gray-700 leading-relaxed">
                對自己的生命負責是得自由之鑰，沒有自由就沒有愛。自由使自我覺醒，愛使我們將自我給別人。在我們真正擁有自己、真正自由之前，就給予的話，我們就不知道如何有僕人的心志，而只是做奴隸。理解你所擁有的，然後將自己與人分享，這就完全了神的律法。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">二、司提反</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                在前面舉的例子中，司提反有界限的問題。「我做的越多，要求越多。我讓我的妻子和教會失望，每一個人都對我生氣。我試著使大家高興，但我得到的卻是痛苦。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                司提反以為他要為別人的生命和感覺負責。由於他父親早逝，他學會為母親負責。他母親是個自我中心、控制型的人，結果就是，司提反忘了如何照顧自己的需要。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當我將界限的觀念介紹給司提反，他馬上知道他的問題出在哪兒。我讓他看到什麼時候他是出於勉強，以及查驗他心中的目的。當他對自己有掌握，他不再因為覺得對別人有責任而讓步。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「說不」是司提反最難學的功課。當他有機會幫助別人而又拒絕時，別人臉上失望的表情，責難的眼光最讓他受不了。常常他都有一種要讓步的試探。但他漸漸學習只在他選擇去做時才去做。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                司提反的妻子一向控制著他，對他的新決定咬牙切齒。然而他堅定不移，為自己負責，變得更有主見。當她看到他成為一個可信賴的人，她接受了他的改變。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在事工上，他也可以說不。他開始將神賦予他的想法說出來，他心中的目標又清楚了。雖然有艱辛的時候，但教會理解到他們所同工的，是一位有個性有委身的人。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                司提反也學習為自己設下目標。他以前只忙於應付各種事件的發生，現在他可以主動出擊，而且對每一件推動的事工，徹底執行。因著成功的激勵，他越加發現他喜歡做的事，因此更能對一些事說不。
              </p>
              <p className="text-gray-700 leading-relaxed">
                藉著照料樹的本身，司提反的果子改變了。如果他只注意壞果子——燃燒、疲倦、受害的徵狀——他永遠不會得醫治。但當他注意基本的界限問題，他得以在神的形象上長進，成為一個定義清楚、負責任的人。
              </p>
            </div>

          </div>
        )}
      </div>

      {/* 重點總結 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
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
                '設限的技巧從「得到注意」（盤點你是誰）開始，接著要能「定義你是誰」與「定義你不是誰」——正面與負面的自我宣告同等重要，缺一不可。',
                '「發展不的肌肉」需要從小處練習起，逐步累積到更困難的拒絕；「停止抱怨別人」與「停止扮演受害者」則是把焦點從外在環境轉回自己能負責的部分。',
                '「不屈不撓」「積極主動而非被動」提醒我們設限不是一次性的宣告，而是需要持續堅忍操練的品格；「操練自制」則提醒在滿足願望與控制願望之間要保持平衡，不走向任何一個極端。',
                '「接納別人」與「理解你需要分離」「要坦誠」共同指向：健康的界限不是築牆拒人於外，而是使真實的親密與愛成為可能的前提。',
                '司提反的轉變示範了整個醫治過程：從「為別人的生命和感覺負責」的糾纏，到學會說不、設定目標、主動出擊——當他開始照料生命這棵樹的根本問題（界限），而非只處理表面壞果子（燃盡、疲倦），他才真正得到醫治，在神的形像上長進。',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-gray-700 leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
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
              <h4 className="font-semibold text-gray-800 mb-2">「照料樹的本身」——第三篇的整體隱喻</h4>
              <p className="text-gray-700 leading-relaxed">
                本章結尾「藉著照料樹的本身，司提反的果子改變了」呼應了第一篇無花果樹的比喻：燃盡、疲倦、受害感是壞果子，急於處理果子（如靠意志力硬撐、換工作、換教會）而不處理樹根（界限缺失）的問題，只會讓壞果子一再重現。這是整個第三篇「與人分離」一貫的邏輯——真正的醫治永遠是從根本的界限問題著手，而非單靠症狀管理。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">設限技巧的操練次序：從自我認識到人際實踐</h4>
              <p className="text-gray-700 leading-relaxed">
                仔細看本章列出的技巧順序，會發現一個合理的操練邏輯：先「得到注意」「定義你是誰／不是誰」建立自我認識的基礎，再「發展不的肌肉」「停止抱怨」「停止扮演受害者」練習內在態度的轉變，最後才是「設限」「選擇有價值的」「接納別人」等外顯的人際實踐。這提醒讀者，設限不能只從技巧層面模仿（如背誦幾句拒絕的話術），而要先在自我認識與內在態度上打好根基，外在的界限行為才會穩固而非勉強。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「積極主動而非被動」與屬靈品格的形成</h4>
              <p className="text-gray-700 leading-relaxed">
                作者強調「選擇去愛和給，不要只在要求時才做」，這與亞里士多德式的德性倫理學不謀而合——品格是透過反覆選擇正確行動而形成的習慣，而非單靠正確的信念或情感。「積極主動」的人是先決定「我將會」「我要」，再據此行動；「被動反應」的人則只在外界壓力下才勉強回應。這個區分幫助我們理解，為什麼單靠知道界限的道理還不夠，還需要如司提反一樣，透過反覆的主動選擇，才能真正把界限內化成品格的一部分。
              </p>
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
            {[
              '本章列出十幾項設限的技巧，哪一項你覺得自己已經做得不錯，哪一項最需要操練？',
              '如果請你現在「定義你是誰」與「定義你不是誰」，各說出三句話，你會怎麼說？',
              '「發展不的肌肉」建議從小處開始練習。這一週，你可以在哪件小事上練習誠實地說不？',
              '你有沒有像司提反一樣，因為早年承擔了不屬於自己的責任（如照顧父母的情緒），而忘了如何照顧自己的需要？',
              '司提反的妻子起初「對他的新決定咬牙切齒」，後來才「接受了他的改變」。如果你開始設立界限，你預期身邊的人會有什麼反應？你準備好承受這個過程了嗎？',
              '「照料樹的本身」而非只處理壞果子，對你目前正在經歷的某個困擾（沮喪、疲倦、人際挫折）有什麼提醒？',
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
              <h4 className="font-semibold text-green-700 mb-2">📝 做一次界限存貨盤點</h4>
              <p className="text-gray-700 mb-2">
                找一位信任的人一起，逐項檢視你的身體、感覺、態度、行為、思想、能力、選擇、慾望，寫下你目前擁有得最清楚、和最模糊的各兩項。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💪 從小處練習說不</h4>
              <p className="text-gray-700 mb-2">
                本週選一件小事（一頓不想去的聚餐、一個不想做的差事），練習誠實而不帶罪惡感地說不，觀察自己內在的反應與對方的回應。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 效法司提反，設定一個個人目標</h4>
              <p className="text-gray-700 mb-2">
                選一件你一直被動因應、卻從未主動規劃的事（時間分配、財務、服事），這週主動為它設定一個具體、可執行的目標。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，感謝祢藉著司提反的故事，讓我看見界限可以被重新學習、生命可以被真正醫治。求祢幫助我不只處理表面的壞果子，而是願意讓祢的靈光照、修剪我生命這棵樹的根。求祢賜我勇氣定義自己是誰、不是誰，發展說不的肌肉，不再抱怨、不再扮演受害者。願我在祢的恩典與真理中，成為一個定義清楚、負責任、又滿有愛的人。奉耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
