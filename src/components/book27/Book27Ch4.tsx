import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Map, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book27Ch4() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true, summary: true, exploration: true, questions: true, practice: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">第4課</h1>
        <h2 className="text-xl font-semibold text-gray-700">神眼中的生活，神手中的改變</h2>
        <p className="text-sm text-gray-500 mt-1">耶利米書17:5-10 ｜ 改變模式全覽</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-emerald-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Map className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-emerald-700 mb-2">耶利米書17:5-10：兩棵樹的對比</h3>
              <p className="text-gray-700 leading-relaxed">這段經文是本書整個改變模式的聖經基礎。先知耶利米以兩棵樹作對比，描繪了兩種截然不同的生命狀態：</p>
              <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-50 rounded-lg p-4 border border-red-100">
                  <p className="font-semibold text-red-700 mb-2">荒漠的杜松（倚靠人）</p>
                  <p className="text-gray-700 text-sm">「倚靠人血肉的膀臂，心中離開耶和華的，那人有禍了！因他必像沙漠的杜松，不見福樂來到；卻要住曠野乾旱之處，鹽鹼無人居住之地。」（耶17:5-6）心靠別處，即使身在「可住之地」也如同身在荒漠。</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                  <p className="font-semibold text-emerald-700 mb-2">水旁的樹（倚靠神）</p>
                  <p className="text-gray-700 text-sm">「倚靠耶和華、以耶和華為可靠的，那人有福了！他必像樹栽於水旁，在河邊紮根，炎熱來到並不懼怕，葉子仍必青翠；在乾旱之年毫無掛慮，而且結果不止。」（耶17:7-8）炎熱仍然來到，但有根的樹不懼怕。</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mt-3">耶利米的觀察揭示了一個重要真理：炎熱（困難）是兩棵樹都會面對的，差異不在於環境，而在於根紮在哪裡。這就是「炎熱→荊棘→十字架→果實」模式的聖經核心。</p>
            </div>
            <div>
              <h3 className="font-bold text-emerald-700 mb-2">人心的本質：耶利米書17:9-10</h3>
              <p className="text-gray-700 leading-relaxed">「心比萬物都詭詐，壞到極處，誰能識透呢？我耶和華是鑑察人心、試驗人肺腑的，要照各人所行的和他做事的結果報應他。」（耶17:9-10）</p>
              <p className="text-gray-700 leading-relaxed mt-2">這節經文是「人如何改變」整個框架的核心假設：人心本是詭詐的。這不是悲觀主義，而是現實主義。我們無法完全客觀地評估自己；我們的自我認知充滿了盲點、合理化和自欺。這就是為什麼我們需要神的話語、神的靈，以及群體中誠實的弟兄姊妹，來幫助我們看清自己。</p>
              <p className="text-gray-700 leading-relaxed mt-2">但注意，接下來的話語（耶17:10）充滿盼望：神是「鑑察人心、試驗人肺腑的」。神完全了解我們的心，即使在那些詭詐和幽暗之處。祂不是以審判官的眼光冷酷地鑑察，而是以慈父的眼光，知道我們的軟弱，並且要「照各人所行的報應他」——這在基督裡已經轉化為恩典：基督已經承擔了我們應得的報應，使我們能在恩典中改變。</p>
            </div>
            <div>
              <h3 className="font-bold text-emerald-700 mb-2">哥林多前書10：以色列的歷史是我們的鏡子</h3>
              <p className="text-gray-700 leading-relaxed">哥林多前書10:1-14用以色列在曠野的歷史作為警戒。以色列人經歷了神的奇妙帶領（雲柱、火柱、嗎哪、磐石出水），卻仍然反覆地抱怨、拜偶像、淫亂。保羅說：「這些事都是我們的鑑戒，叫我們不要貪戀惡事，像他們那樣貪戀的。」（林前10:6）</p>
              <p className="text-gray-700 leading-relaxed mt-2">這段經文揭示了炎熱（曠野的艱苦）如何暴露心中的偶像（渴望舒適、渴望控制、渴望埃及的食物）。以色列人的荊棘反應（抱怨、叛逆）不是因為曠野太苦，而是因為他們的心靠向了別處。反過來，摩西的反應則顯示了十字架中心的生命：即使在最大的壓力下，他仍然轉向神。</p>
            </div>
            <div>
              <h3 className="font-bold text-emerald-700 mb-2">哥林多後書1：患難是服事的培育</h3>
              <p className="text-gray-700 leading-relaxed">哥林多後書1:2-12描述保羅在亞西亞所遭遇的、使他「甚至絕了生路」的極大患難（林後1:8）。在這個極端的「炎熱」中，保羅學到了什麼？「叫我們不靠自己，只靠叫死人復活的神」（林後1:9）。</p>
              <p className="text-gray-700 leading-relaxed mt-2">更進一步，保羅說他所經歷的患難，使他有能力「用神所賜的安慰，去安慰那遭各樣患難的人」（林後1:4）。這是果實！神允許炎熱來到，不只是為了改變保羅自己，也是為了透過改變後的保羅，結出服事他人的果實。改變從來不只是個人的事；它總是有向外服事的面向。</p>
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
            <ul className="space-y-2">
              {[
                '耶利米書17:5-10以兩棵樹對比「倚靠人」與「倚靠神」的生命，揭示炎熱（困難）是兩者都會面對的，差異在於根紮在哪裡。',
                '人心是詭詐的（耶17:9），我們需要神的話、神的靈和群體的幫助，才能真正認識自己的動機和渴望。',
                '以色列在曠野的歷史顯示，炎熱（艱苦環境）如何暴露心中的偶像，他們的荊棘反應是對我們的鑑戒（哥林多前書10）。',
                '神允許炎熱，不是要懲罰我們，而是要透過它教導我們「不靠自己，只靠神」（哥林多後書1:9）。',
                '改變的果實從來不只是個人的益處，它總是外溢成為服事他人的能力（用親身經歷的安慰去安慰別人）。',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-gray-700">{point}</p>
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
              <h4 className="font-semibold text-gray-800 mb-2">「炎熱」為何是神恩典的工具？</h4>
              <p className="text-gray-700 leading-relaxed">現代基督教文化有時傳遞一種信息：信了耶穌，生活就應該越來越順利，困難是信心不足的標誌。但聖經呈現的圖景截然不同。耶穌說：「在世上你們有苦難，但你們可以放心，我已經勝了世界」（約16:33）。雅各說：「你們遭遇各種試煉，都要以為大喜樂」（雅1:2）。「炎熱」是神用來磨練我們、暴露我們心中偶像、使我們更深倚靠祂的工具。拒絕炎熱或急著逃離炎熱，可能會錯過神在其中的工作。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「心比萬物都詭詐」的實際含義</h4>
              <p className="text-gray-700 leading-relaxed">這不是說我們所做的每一件事都是惡意的。而是說，我們天然的傾向是用我們自己的框架來解釋一切——包括我們的動機。我們很容易相信自己的理由是好的，即使實際上我們是在自私、恐懼或驕傲中行事。這就是為什麼我們需要謙卑，持續地邀請神話語的光照（詩139:23-24：「神啊，求祢鑑察我，知道我的心思……看在我裡面有什麼惡行沒有」），以及接受群體的回饋。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">苦難能被「浪費」嗎？</h4>
              <p className="text-gray-700 leading-relaxed">是的，苦難是可以被「浪費」的。當我們在苦難中只是抱怨、逃避、或陷入自憐，而沒有讓苦難把我們帶到基督那裡，我們就「浪費」了神設計要在苦難中完成的工作。另一方面，當我們在苦難中主動地轉向神、讓苦難暴露我們的偶像、並倚靠基督而不是自己，苦難就成為深刻成長和服事的土壤。保羅的苦難培育出了一個能用真實的話語安慰他人的僕人。</p>
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
              '回顧你生命中一次重大的「炎熱」（困難）。那次困難暴露了你心中哪些你原本不知道自己有的東西？',
              '你更像耶利米書中的哪棵樹——「沙漠的杜松」還是「水旁的樹」？在生活中的哪些具體領域，你的根更紮在別處而非神那裡？',
              '以色列人在曠野「抱怨」，而摩西在同樣的壓力下卻轉向神。你在遇到困難時，通常更像哪一個？',
              '保羅說患難讓他學會「不靠自己，只靠神」。你是否有過這種類似的體驗，某個困境讓你不得不更深地倚靠神？',
              '你曾有沒有把你的苦難「浪費掉」——只是抱怨或逃避，而沒有讓神在其中完成祂的工作？現在想起來，你覺得有什麼可以不一樣？',
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
              <h4 className="font-semibold text-green-700 mb-2">🗺️ 套用「人如何改變」模式</h4>
              <p className="text-gray-700 mb-2">選擇一個你目前正在經歷的困境，用「炎熱→荊棘→十字架→果實」的模式來分析它：（1）炎熱：具體的情況是什麼？（2）荊棘：你通常如何回應？（3）十字架：基督的哪個真理可以在這裡帶來不同？（4）果實：如果你以十字架為中心回應，會結出什麼樣的果子？</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 讀耶利米書17:7-8的禱告</h4>
              <p className="text-gray-700 mb-2">每天早晨，把耶利米書17:7-8改寫成一個關於你當天的禱告宣告：「主啊，今天我面對___（今日的炎熱），我選擇像栽於水旁的樹，把根紮在祢身上，相信祢的供應足夠。」</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔎 鑑察自己的心</h4>
              <p className="text-gray-700 mb-2">這週每晚睡前，用詩篇139:23-24禱告，邀請神光照你當天的動機：「今天我在___事上，我真正的動機是什麼？我是出於對神的愛，還是對別人認可的渴望？是出於信靠，還是出於恐懼？」</p>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告詞</h4>
              <p className="text-gray-700 italic leading-relaxed text-sm">「主啊，求祢讓我成為那棵栽於水旁的樹，根紮在祢的話語和祢的恩典上。感謝祢允許炎熱來到，不是要傷害我，而是要培育我、改變我。幫助我在困難中不轉向別處尋求滿足，而是更深地回到祢那裡。願我在苦難中所學到的，成為日後服事他人的資源。阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
