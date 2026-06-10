import React from 'react';
import { BookOpen, Star, MessageCircle, Lightbulb, Heart, Eye, Target, Users } from 'lucide-react';

export default function Book27Ch6() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-emerald-700 mb-2">第6課：現實世界中真實的你——炎熱篇（下）</h1>
      <p className="text-gray-500 text-sm">學員本 · 《人如何改變》保羅·區普</p>

      {/* 複習/作業討論 */}
      <section className="border-l-4 border-emerald-400 bg-emerald-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-emerald-600" />
          <h2 className="text-xl font-bold text-emerald-700">複習與作業討論</h2>
        </div>
        <div className="bg-white p-4 rounded border border-emerald-200 space-y-3 text-gray-700">
          <p><strong>複習：</strong>上一課我們從詩篇88篇和雅各書1章認識了炎熱的性質與目的。炎熱揭示我們內心的真實狀態，是神成全我們的工具。今天我們要更進一步：看我們在炎熱中最常見的罪性反應模式，並以民數記中以色列人的故事作為鏡子。</p>
          <p><strong>作業討論：</strong>分享你上週寫的「炎熱日記」——你在其中看見自己最常見的反應模式是什麼？有什麼讓你感到驚訝的發現？</p>
        </div>
      </section>

      {/* CPR */}
      <section className="border-l-4 border-teal-400 bg-teal-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <Target className="w-6 h-6 text-teal-600" />
          <h2 className="text-xl font-bold text-teal-700">重點與應用（CPR）</h2>
        </div>
        <div className="space-y-3 text-gray-700">
          <div className="bg-white p-4 rounded border border-teal-200">
            <p className="font-bold text-teal-700 mb-1">核心要點（Central Point）</p>
            <p>羅馬書8章20-22節揭示了整個受造世界都處於「服在虛空之下」的狀態——這個世界本來就不是完美的，炎熱是這個現實的一部分。我們在炎熱中的罪性反應（埋怨、反叛、絕望）不僅無法改變情況，反而使我們更遠離神。以色列人在曠野的故事是我們的警示。</p>
          </div>
          <div className="bg-white p-4 rounded border border-teal-200">
            <p className="font-bold text-teal-700 mb-1">個人應用（Personal）</p>
            <p>誠實地辨識你目前在炎熱中最主要的反應模式（是埋怨？逃避？自憐？憤怒？）。這個模式如何阻礙了你看見神在困難中的目的？</p>
          </div>
          <div className="bg-white p-4 rounded border border-teal-200">
            <p className="font-bold text-teal-700 mb-1">人際應用（Relational）</p>
            <p>你的罪性反應模式如何影響你最親近的關係？（如：你的埋怨或憤怒如何讓家人或朋友感到疲憊？）本週選擇一個具體的改變，並告訴一位信任的人。</p>
          </div>
        </div>
      </section>

      {/* 主要問題 */}
      <section className="text-center bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 p-8 rounded-xl">
        <Eye className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
        <h2 className="text-xl font-bold text-emerald-800 mb-3">本課主要問題</h2>
        <p className="text-2xl font-bold text-emerald-700 leading-relaxed">
          「今天，在你所處的景況和人際關係中，<br />你的回應主要是什麼模式？」
        </p>
      </section>

      {/* 課程內容 */}
      <section className="border-l-4 border-cyan-400 bg-cyan-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <Lightbulb className="w-6 h-6 text-cyan-600" />
          <h2 className="text-xl font-bold text-cyan-700">課程內容</h2>
        </div>
        <div className="space-y-5 text-gray-700">
          <div>
            <h3 className="font-bold text-cyan-700 mb-2">一、羅馬書8章20-22節：世界的真實處境</h3>
            <div className="bg-white p-4 rounded border border-cyan-200 italic text-sm mb-2">
              <p>「因為受造之物服在虛空之下，不是自己願意這樣，乃是因那叫他如此的，叫受造之物仍然指望脫離敗壞的轄制，得享神兒女自由的榮耀。我們知道一切受造之物一同嘆息、勞苦，直到如今。」（羅馬書8章20-22節）</p>
            </div>
            <p className="mb-2">保羅在這裡描述了三個現實：</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong>服在虛空之下（20節）：</strong>整個受造世界都帶著挫折感——因為亞當的罪，一切都沒有達到神創造的原本目的。我們在生活中感受到的不滿足、失落、和「哪裡不對勁」的感覺，是這個現實的真實反應。</li>
              <li><strong>敗壞的轄制（21節）：</strong>死亡、疾病、關係破裂、環境惡化——這些都是「敗壞」的表現。我們無法靠自己的力量脫離這個轄制，只有盼望「神兒女自由的榮耀」才是出路。</li>
              <li><strong>一同嘆息（22節）：</strong>全人類（和整個受造界）都在嘆息——這是正常的。炎熱帶來的痛苦和嘆息，不是信心不夠的證明，而是對現實的誠實回應。然而，我們嘆息的同時，也有盼望（第23-25節）。</li>
            </ul>
            <p className="mt-2">這段經文告訴我們：炎熱不是意外，也不是懲罰，而是活在一個「尚未完全的」世界中必然要面對的現實。關鍵是：我們如何在這個現實中回應？</p>
          </div>
          <div>
            <h3 className="font-bold text-cyan-700 mb-2">二、民數記11-14章：以色列人的警示</h3>
            <p className="mb-2">民數記11-14章記載了以色列人在曠野的炎熱經歷，以及他們的罪性回應。這段歷史是我們的一面鏡子：</p>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border border-cyan-200">
                <p className="font-bold">民數記11章：埋怨的罪</p>
                <p className="text-sm mt-1">「百姓中間起了埋怨的心……他們哭號說：誰給我們肉吃呢？我們記得在埃及的時候白吃魚，也記得有黃瓜、西瓜、韭菜、蔥、蒜。現在我們的心血枯竭了，除這嗎哪以外，在我們眼前什麼都沒有。」（民數記11章1、4-6節）</p>
                <p className="text-sm mt-2 text-orange-700">觀察：他們不是沒有食物——他們每天有神賜下的嗎哪！但他們的眼睛盯著「失去的」（埃及的魚和蔥），而不是感謝「得到的」（神的供應和自由）。炎熱讓他們的心中真實的不信顯露出來。</p>
              </div>
              <div className="bg-white p-3 rounded border border-cyan-200">
                <p className="font-bold">民數記12章：驕傲的罪（米利暗和亞倫）</p>
                <p className="text-sm mt-1">「米利暗和亞倫因摩西所娶的古實女人的緣故就毀謗他……說：難道耶和華單與摩西說話嗎？不也與我們說話嗎？」（民數記12章1-2節）</p>
                <p className="text-sm mt-2 text-orange-700">觀察：在壓力之下，他們的嫉妒和驕傲暴露出來。他們真正的問題不是摩西的妻子，而是他們想要爭奪摩西的權柄。炎熱揭示了他們內心深藏的驕傲。</p>
              </div>
              <div className="bg-white p-3 rounded border border-cyan-200">
                <p className="font-bold">民數記13-14章：不信的罪（探子的報告）</p>
                <p className="text-sm mt-1">「他們向以色列人報告說：我們所窺探、經過之地是吞吃居民之地，我們在那裡所看見的人都身量高大……我們看自己就如蚱蜢一樣，他們看我們也是如此。」（民數記13章32-33節）</p>
                <p className="text-sm mt-2 text-orange-700">觀察：十個探子所見的「迦南人」是真實的，但他們的問題是他們忘記了另一個同樣真實的事實——與他們同在的神更大！炎熱（迦南的挑戰）讓他們的不信全面爆發。結果整個會眾哭號，拒絕進入應許地，並付出了慘痛的代價（在曠野飄流40年）。</p>
              </div>
            </div>
            <p className="mt-3">哥林多前書10章11節說：「他們遭遇這些事，都要作為鑑戒，並且寫在經上，正是警戒我們這末世的人。」以色列人的故事就是為我們寫的——我們要從中學習，不要重蹈覆轍。</p>
          </div>
          <div>
            <h3 className="font-bold text-cyan-700 mb-2">三、我們對炎熱的六種罪性回應模式</h3>
            <p className="mb-2">從以色列人的故事和保羅的分析，我們可以辨識出人在炎熱中最常見的罪性回應：</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { title: '1. 埋怨', desc: '持續對情況、對人、對神抱怨，而不是在困難中尋求神的旨意。埋怨的人把注意力放在「失去的」，而不是神的供應。' },
                { title: '2. 逃避', desc: '試圖透過各種方式逃離炎熱（麻痺自己、迴避問題、假裝問題不存在），而不是面對它帶來的功課。' },
                { title: '3. 誇大絕望', desc: '把困難放大，認為情況毫無希望（「我們看自己就如蚱蜢一樣」），讓恐懼而非信心主導我們的判斷。' },
                { title: '4. 以惡報惡', desc: '在炎熱中把痛苦轉移給別人：用憤怒攻擊、用批評傷害、用控制操縱身邊的人，以緩解自己的痛苦。' },
                { title: '5. 自甘墮落', desc: '在壓力下放棄努力，進入麻木或放縱的狀態。「反正沒有用了，我就這樣吧。」這是靈魂層面的放棄。' },
                { title: '6. 自以為義', desc: '用宗教語言包裝，對外表現正確，但內心對神的主權充滿怨恨和質疑，只是不敢表達出來。' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-3 rounded border border-cyan-200">
                  <p className="font-bold text-cyan-700 mb-1">{item.title}</p>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-cyan-700 mb-2">四、「自我成長方案」的引入</h3>
            <p className="mb-2">從本課開始，你將使用「自我成長方案」——這是一個結構化的工具，幫助你把每週的功課應用到你生命中的具體情境。它包含四個部分：</p>
            <div className="bg-white p-4 rounded border border-cyan-200 space-y-2">
              <p><strong>1. 我的炎熱是什麼？</strong>——描述你目前面對的具體情況或關係（要誠實和具體，不要泛泛而談）</p>
              <p><strong>2. 我的荊棘是什麼？</strong>——辨識你在這個炎熱中最主要的罪性回應模式</p>
              <p><strong>3. 十字架在哪裡？</strong>——思考福音如何應用到這個情境：基督的救贖如何改變你面對它的方式？</p>
              <p><strong>4. 我期望的果實是什麼？</strong>——想像如果你以信心回應這個炎熱，具體的改變會是什麼樣子？</p>
            </div>
            <p className="mt-2 text-sm text-gray-600">這個方案不是為了讓你感到被定罪，而是幫助你看見神的工作在你生命中每個具體層面的應用。</p>
          </div>
        </div>
      </section>

      {/* 作業：自我成長方案實踐 */}
      <section className="border-l-4 border-green-400 bg-green-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <Heart className="w-6 h-6 text-green-600" />
          <h2 className="text-xl font-bold text-green-700">作業：自我成長方案與民數記研讀</h2>
        </div>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded border border-green-200">
            <h3 className="font-bold text-green-700 mb-2">完成第一份自我成長方案</h3>
            <p className="text-gray-700 mb-2">選擇你生命中目前最大的一個「炎熱」，完整填寫自我成長方案的四個部分。要求：</p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-gray-700">
              <li>誠實描述炎熱的具體情況（不要美化）</li>
              <li>誠實辨識你的主要荊棘反應（對照上面六種模式，選出1-2個最符合的）</li>
              <li>思考：你這個荊棘背後，有什麼樣的心態或慾望在驅動？</li>
              <li>寫出你希望以什麼樣的屬靈態度回應這個炎熱</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded border border-green-200">
            <h3 className="font-bold text-green-700 mb-2">民數記14章研讀</h3>
            <p className="text-gray-700 mb-2">閱讀民數記14章1-25節，並回答：</p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-gray-700">
              <li>當全會眾哭號埋怨時，迦勒和約書亞的回應有什麼不同？他們的信心建立在什麼基礎上？（第7-9節）</li>
              <li>神對他們的埋怨的回應（第11-12節）揭示了什麼？神最看重的是什麼？</li>
              <li>摩西為百姓求情的論點是什麼？（第13-19節）這如何幫助你理解代禱的精神？</li>
              <li>百姓的不信帶來的後果是什麼？這個故事如何成為你在自己炎熱中的警示？</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded border border-green-200">
            <h3 className="font-bold text-green-700 mb-2">辨識你的「曠野模式」</h3>
            <p className="text-gray-700 mb-2">回顧過去三個月，找出你面對壓力時最一致的反應模式：</p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-gray-700">
              <li>你是否更像埋怨的以色列人、不信的十個探子，還是信心的迦勒？</li>
              <li>在你的人際關係中，你的壓力如何影響到別人？（你是否在炎熱中把痛苦轉嫁給家人或同事？）</li>
              <li>如果你生命中的主耶穌此刻問你：「你信靠我嗎？」你能誠實地說什麼？</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 重點總結 */}
      <section className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 p-6 rounded-xl">
        <div className="flex items-center gap-3 mb-4">
          <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
          <h2 className="text-xl font-bold text-sky-800">重點總結</h2>
        </div>
        <div className="space-y-3">
          {[
            '羅馬書8章20-22節告訴我們：世界「服在虛空之下」是現實，炎熱和嘆息是誠實的回應，但我們同時有神兒女得榮耀的盼望',
            '以色列人在曠野的埋怨、逃避、和不信是我們的警示——同樣的罪性回應模式也可能出現在我們的炎熱中',
            '炎熱中的罪性回應（埋怨、逃避、誇大絕望、以惡報惡、自甘墮落、自以為義）不僅無法解決問題，反而使我們更遠離神',
            '「自我成長方案」是一個實用工具，幫助我們把炎熱→荊棘→十字架→果實的模式應用到具體的生命情境',
            '真正的信心不是沒有恐懼，而是在恐懼中仍然選擇信靠神的主權和良善（如迦勒和約書亞）',
            '辨識自己的罪性回應模式，是改變的第一步——只有看見，才能帶到神面前得到改變',
          ].map((point, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="bg-sky-600 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 延伸CPR */}
      <section className="border-l-4 border-indigo-400 bg-indigo-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <MessageCircle className="w-6 h-6 text-indigo-600" />
          <h2 className="text-xl font-bold text-indigo-700">延伸反思</h2>
        </div>
        <div className="space-y-3 text-gray-700">
          <div className="bg-white p-4 rounded border border-indigo-200">
            <p className="font-bold text-indigo-700 mb-2">給自己的問題：「我的曠野是什麼？」</p>
            <p>以色列人在曠野飄流40年，不是因為路程太遠，而是因為心中的不信太深。你生命中有哪些「曠野」——你已經在某個困難或掙扎中飄流了很久，卻一直沒有真正進入神為你預備的「應許之地」？是什麼讓你一再原地打轉？</p>
          </div>
          <div className="bg-white p-4 rounded border border-indigo-200">
            <p className="font-bold text-indigo-700 mb-2">屬靈的出路：「迦勒的話語」</p>
            <p>迦勒在眾人絕望時說：「我們立刻上去得那地吧！我們足能得勝。」（民數記13章30節）迦勒所見的是同樣的情況，但他的心是不同的——他的眼睛在看神，而不只是看問題。今天，在你的炎熱中，你能否選擇做一個「迦勒」，說出一句對神信靠的話？</p>
          </div>
        </div>
      </section>

      {/* 生活實踐 */}
      <section className="border-l-4 border-lime-400 bg-lime-50 p-6 rounded">
        <div className="flex items-center gap-3 mb-4">
          <Users className="w-6 h-6 text-lime-600" />
          <h2 className="text-xl font-bold text-lime-700">生活實踐方針</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: 'a. 完成自我成長方案', desc: '這週完整填寫第一份自我成長方案，誠實地分析你最大的炎熱和荊棘反應' },
            { label: 'b. 辨識你的主要模式', desc: '從六種罪性反應模式中，選出你最常見的一種，告訴一位信任的人，請他們幫助你留意' },
            { label: 'c. 讀民數記13-14章', desc: '用「我是哪個角色？」的問題讀這段歷史——你更像十個探子，還是迦勒和約書亞？' },
            { label: 'd. 每日的「盼望宣告」', desc: '每天早上宣告羅馬書8章28節：「我們曉得萬事都互相效力，叫愛神的人得益處。」' },
            { label: 'e. 不抱怨的練習', desc: '本週嘗試24小時不抱怨（不對人，不對神）。記錄：這有多難？它揭示了你心中什麼？' },
            { label: 'f. 向神誠實認罪', desc: '把你辨識出的罪性反應模式帶到神面前，誠實認罪，並請求祂的幫助改變這個模式' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-4 rounded border border-lime-200">
              <p className="font-bold text-lime-700 mb-1">{item.label}</p>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
