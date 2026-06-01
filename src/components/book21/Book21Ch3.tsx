import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book21Ch3() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    exploration: true,
    questions: true,
    practice: true,
  });
  const toggle = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">第三章</h1>
        <h2 className="text-xl font-semibold text-gray-700">心對心——主禱文</h2>
        <p className="text-gray-500 text-sm mt-1">禱告的本質、主禱文逐句解析，16個主題</p>
      </div>

      {/* 主禱文文本 */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-6 mb-6 text-center">
        <h3 className="font-bold text-amber-800 mb-3">主禱文（馬太福音6:9-13）</h3>
        <div className="text-gray-700 leading-loose text-sm space-y-1">
          <p>「我們在天上的父，</p>
          <p>願人都尊祢的名為聖。</p>
          <p>願祢的國降臨；願祢的旨意行在地上，如同行在天上。</p>
          <p>我們日用的飲食，今日賜給我們。</p>
          <p>免我們的債，如同我們免了人的債。</p>
          <p>不叫我們遇見試探；救我們脫離兇惡。</p>
          <p>因為國度、權柄、榮耀，全是祢的，直到永遠。阿們。」</p>
        </div>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <div>
              <h3 className="font-bold text-purple-700 mb-2">一、禱告的本質——與神的真實對話</h3>
              <p className="text-gray-700 leading-relaxed">現代人覺得禱告困難，原因很多：不確定神是否存在、不確定神是否在意我們、或者覺得禱告只是自我暗示。但巴刻指出，如果你是基督徒，你有充分的根基去禱告：你已認識了耶穌，你知道神是愛，你知道神是你的父。禱告的困難不是因為神不在，而是因為我們對神的認識太少，或者被日常的分心和忙碌所吞沒。</p>
              <p className="text-gray-700 leading-relaxed mt-2">禱告不是自我暗示（告訴自己積極的話），也不是冥想（排空思緒），而是真實的雙向對話。我們說話，神也回應——透過聖靈的感動、透過聖經的話語、透過環境的安排，有時甚至透過我們內心深處清晰的感知。清教徒神學家司徒邁子（Samuel Chadwick）說：「人獨自跪在神面前禱告，再沒有比這更能流露靈魂的了。」禱告是靈魂赤裸地站在神面前，是最誠實的人類行為。</p>
              <p className="text-gray-700 leading-relaxed mt-2">耶穌的門徒主動請求：「求主教導我們禱告」（路11:1），表明他們看見耶穌的禱告生活，知道自己還不會禱告。禱告和唱歌一樣，是需要學習和練習的技能。主禱文就是耶穌給的「禱告教材」——不是叫我們機械地重複一段文字，而是提供一個框架和思路，然後照著這個框架用自己的話禱告。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">二、主禱文的結構——神為首，人需次</h3>
              <p className="text-gray-700 leading-relaxed">主禱文的結構本身就是一個教導。它分為兩組求告：前三個以神為中心（「願祢的名為聖」「願祢的國降臨」「願祢的旨意成就」），後三個以人的需要為中心（日用飲食、罪的赦免、脫離試探）。這個「神優先、人其次」的順序揭示了禱告的正確態度：我們不是去告訴神該做什麼，而是首先讓自己的心對齊神的心，然後才在這個框架內表達我們的需要。</p>
              <p className="text-gray-700 leading-relaxed mt-2">巴刻指出：大多數人的禱告次序是顛倒的——先把自己的清單列出來，然後期待神逐一滿足。這不是錯的（神歡迎我們帶著需要來），但缺少了對神本身的愛慕和委身。當我們先求「願祢的名為聖」，我們是在對神說：「祢的榮耀比我的需要更重要。」這個態度的轉化，才是禱告真正改變我們的地方。主禱文把禱告從「需求列表」升華為「關係培育」。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">三、「我們的父」——以兒女身分親近神</h3>
              <p className="text-gray-700 leading-relaxed">主禱文以「我們在天上的父」開始，這個稱呼本身是革命性的。在舊約，「天父」這個稱呼雖然存在，但非常罕見，且多指神與以色列民族的集體關係。耶穌把這個稱呼帶入了個人、親密的層面——祂鼓勵每一個信徒以「父」稱呼神。更令人驚訝的是，耶穌在禱告中稱神為「阿爸」（Abba，馬可14:36），這是亞蘭文中孩子稱呼父親的暱稱，接近現代語的「爸爸」——充滿親密和信賴。保羅說聖靈也使我們呼喊「阿爸、父」（羅8:15；加4:6），表明這種親密感是聖靈工作的結果。</p>
              <p className="text-gray-700 leading-relaxed mt-2">「我們的父」中的「我們」也很重要。這個禱告不是純粹個人主義的，而是把我們放在整個神的家庭中。當我禱告，我是代表所有神的兒女一起禱告，我的需要是整個家庭的關切，我的喜樂也是整個家庭的喜樂。這個「我們」打破了基督徒信仰中的孤立主義。「在天上的」則提醒我們：這位父是無限的、全能的、超越一切的——祂不是我們可以任意差遣的看顧者，而是宇宙的創造主，祂的能力和智慧超過我們的理解。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">四、三個以神為中心的求告</h3>
              <p className="text-gray-700 leading-relaxed">「願人都尊祢的名為聖」——「名」在聖經中代表整個位格、性格和聲譽。這個求告是：求神彰顯祂真實的榮耀，使人認識祂、敬拜祂。同時，這也是一個自我委身的宣言：「我願意在我的生命中榮耀祢的名，讓我的行為和態度反映祢的性格。」禱告者首先對自己說話，然後才是向神求告。</p>
              <p className="text-gray-700 leading-relaxed mt-2">「願祢的國降臨」——神的國（Kingdom of God）在耶穌的降臨中已開始進入歷史（「神的國就在你們中間」，路17:21），但尚未完全成就，等待基督再來時的終極實現。這個求告是：求神的統治在地上更完整地彰顯——在我個人的生命、在教會、在社會、在整個受造世界中。「願祢的旨意成就」緊接著，進一步深化：不只是求神的國降臨，也求神給我們順服的心志。耶穌在客西馬尼園的禱告是最完美的示範：「不照我的意思，只照祢的意思」（太26:39）——這是信仰成熟的標誌。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">五、三個以人為中心的求告</h3>
              <p className="text-gray-700 leading-relaxed">「我們日用的飲食，今日賜給我們」——不只是物質食物，而是指一切日常所需。「今日」這個時間限定很重要：我們被教導每天倚靠神，不是囤積、不是焦慮明天，而是每天新鮮地從神手中接受供應。這訓練我們的依賴感，知道我們不是自給自足的，而是時時刻刻活在神的供應中。以色列人在曠野每天收取嗎哪（出16章），多收的就腐爛——神要他們每天依靠，而不是以囤積取代信靠。</p>
              <p className="text-gray-700 leading-relaxed mt-2">「免我們的債，如同我們免了人的債」是主禱文中唯一附帶條件的求告。「債」（opheilema）原文指真實的虧欠，我們對神的罪是真實的道德虧欠，不只是輕微的失誤。這個求告的邏輯是：我們只有在赦免了他人之後，才能真誠地求神赦免我們。這不是說我們靠赦免他人來「賺取」神的赦免（那是行為救恩），而是：若我們真正領受了神浩大的赦免，這恩典自然會流向他人；若我們不肯赦免，說明我們還沒有真正明白自己被赦免的深度。C.S.路易斯說：「人人都相信赦免是美德，直到他們有人要赦免。」</p>
              <p className="text-gray-700 leading-relaxed mt-2">「不叫我們遇見試探，救我們脫離兇惡」——不是求神讓我們的生活沒有困難，而是求神在試探來臨時保守我們不至跌倒，賜力量勝過。「兇惡」在許多解釋中指「那惡者」（the evil one，即撒但）——我們求神拯救我們脫離牠的掌控和謊言。最後的頌讚「因為國度、權柄、榮耀，全是祢的」是全禱文的錨點：我們把一切的求告交在一位擁有一切國度、能力和榮耀的神手中，這使禱告不是焦慮的呼救，而是信心的委托。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">六、阿們——以信心確認的宣告</h3>
              <p className="text-gray-700 leading-relaxed">「阿們」在希伯來文（'amen）意思是「確實的、真實的、必然的」，源自同一字根的動詞意思是「站穩、信靠、確立」。說「阿們」不是表示禱告結束，而是以信心確認所求的事：「就這樣成就吧！我相信這位神是值得信賴的，祂所應許的必然成就。」當我們說「阿們」時，我們是在把信心落實——不只是想著要信，而是以行動宣告「我信」。</p>
              <p className="text-gray-700 leading-relaxed mt-2">巴刻提醒我們：主禱文的使用可以流於形式，變成毫無思想的背誦。要防止這一點，可以在心裡把每一句展開，用自己的話把意思填充進去。例如：「願祢的名為聖——神啊，今天在我的辦公室裡，在我的家庭中，在我說的每一句話裡，願我的生命叫人認識祢是真實、是美善的。」這樣，主禱文就不再是一段固定的文字，而是每次都充滿生命力的禱告架構。</p>
            </div>

          </div>
        )}
      </div>

      {/* 重點總結 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
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
                '禱告是真實的雙向對話，不是自我暗示或冥想；它是一種可以學習的技能，主禱文是耶穌給的禱告框架，不是機械重複的文字。',
                '主禱文的結構：「神為首，人其次」——先三個以神為中心的求告（名聖、國來、旨成），再三個以人為中心的求告（飲食、赦免、脫離惡）。',
                '「我們的父」揭示了基督徒禱告的兩個特質：親密性（「阿爸」的親暱）和社群性（「我們」而非「我」）；「在天上的」提醒這位父是超越一切的全能者。',
                '「免我們的債，如同我們免了人的債」——赦免他人與被神赦免有內在連結：真正領受神赦免的人，其恩典自然會流向他人；不肯赦免的人說明還未真正明白自己被赦免的深度。',
                '「阿們」是信心的行動宣告，意思是「確實如此、必然成就」；主禱文要用自己的話把每一句展開，避免流於形式的背誦。',
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
        <button onClick={() => toggle('exploration')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">延伸探討</span>
          </div>
          {expanded['exploration'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['exploration'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">禱告的七種行為——ACTS之外</h4>
              <p className="text-gray-700 leading-relaxed">巴刻從主禱文分析出七種禱告的行為：（1）用仰望和信靠來親近神；（2）以讚美和敬拜承認祂的偉大；（3）認罪並求赦免；（4）為自己和別人代求；（5）要求得福（以信心争辯）；（6）接受神的安排；（7）委身忠心服事祂。這七種行為比常用的ACTS禱告法更全面，幫助我們禱告不失去重心。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「赦免他人」與「求神赦免」的連結</h4>
              <p className="text-gray-700 leading-relaxed">主禱文中唯一有條件的求告是赦免：「免我們的債，如同我們免了人的債。」這不是說我們要靠赦免他人來賺取神的赦免，而是：如果我們真的領受了神的赦免，這個赦免的恩典自然會流向他人。若我們不肯赦免，說明我們還沒有真正明白自己被赦免的深度。C.S.路易斯說：「人人都相信赦免是美德，直到他們有人要赦免。」</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">禱告是可以學習的技能</h4>
              <p className="text-gray-700 leading-relaxed">「經驗是不能傳授的」——這話印在青年就業問題的小冊上，但用在禱告上卻不對。禱告和唱歌一樣，是需要學習和練習的。耶穌的門徒主動請求：「求主教導我們禱告」（路加11:1），表明他們知道自己不會。主禱文就是耶穌給的「禱告教材」——不是叫人機械重複，而是提供思路框架，然後照這框架用自己的話禱告。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「在地上如同在天上」的生活含義</h4>
              <p className="text-gray-700 leading-relaxed">「願祢的旨意行在地上，如同行在天上」不只是一個禱告的呼求，更是一個生活方式的宣言。天使在天上完全快樂地服事神；基督徒被呼召在地上也以同樣全心全意的態度服事神。這意味著：每一個工作、關係、決定，都可以成為神旨意實現的場所。日常生活的每一刻都是潛在的「天上」——神的旨意成就的機會。</p>
            </div>
          </div>
        )}
      </div>

      {/* 反思問題 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">反思問題</span>
          </div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && (
          <div className="p-5 bg-white space-y-3">
            {[
              '你的禱告生活是怎樣的？你覺得禱告困難嗎？是什麼讓禱告變得困難？',
              '如果你先求「願祢的旨意成就」，這會如何改變你接下來求的那些個人需要？',
              '有沒有某個人你覺得很難赦免的？「如同我們免了人的債」這句話對你說了什麼？',
              '你禱告的主要動機是什麼——求神幫你得到你想要的，還是與神建立關係？',
              '「阿們」的意思是「確實如此」。你最近一次說「阿們」時，內心的確信有多深？',
              '主禱文中哪一句對你現在的生命狀況最具挑戰性？為什麼？',
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
        <button onClick={() => toggle('practice')} className="w-full px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">具體實踐方針</span>
          </div>
          {expanded['practice'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['practice'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 用主禱文重建每日禱告習慣</h4>
              <p className="text-gray-700 mb-2">每天早晨，以主禱文為框架禱告10-15分鐘。不是機械地重複，而是把每一句展開：「我們的父——神啊，謝謝祢是我的父，今天…」照主禱文的七個部分，把自己真實的思想、感恩、需要、悔罪都放進去。連續做21天，看看你的禱告生命有什麼變化。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 赦免的功課</h4>
              <p className="text-gray-700 mb-2">想一想你生命中最難赦免的一個人（可以是過去的、現在的）。這週做以下幾個步驟：（1）承認你心中的苦毒或憤怒；（2）默想神如何赦免了你；（3）作出選擇：「我選擇赦免＿＿，不是因為感覺，而是因為我被赦免了。」赦免不是遺忘，而是放開要對方付款的要求。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">⏰ 設立固定的禱告時間</h4>
              <p className="text-gray-700 mb-2">禱告是技能，需要固定練習。選一個每天的固定時間（早晨起床、午餐前、睡前），設定鬧鐘，即使只有5分鐘也好。記住：「繼續禱告」（路加18:1）不是神的要求，而是讓我們自己與神的連結不斷開。就算禱告乏味、感覺神不在——繼續。</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 mt-2">
              <p className="text-green-800 font-medium mb-1">🕊️ 禱告詞</p>
              <p className="text-green-700 italic leading-relaxed">「天父，謝謝祢允許我這樣稱呼祢。我承認我的禱告常常是散漫的、自我中心的。今天我以主禱文重新定向：願祢的名在我的生命中得著榮耀，願祢的旨意勝過我自己的計劃，願祢的恩典流經我赦免他人。供應我每天的需要，保守我不跌入試探，拯救我脫離那惡者的謊言。因為祢是配得一切榮耀的。阿們。」</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
