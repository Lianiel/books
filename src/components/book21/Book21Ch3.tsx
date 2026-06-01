import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Search, HelpCircle, Check } from 'lucide-react';

export default function Book21Ch3() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
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
          <div className="p-5 bg-white space-y-5">

            <div>
              <h3 className="font-bold text-purple-700 mb-2">1. 禱告——與神的雙向對話</h3>
              <p className="text-gray-700 leading-relaxed">現代人覺得禱告難，往往因為不確定神是否存在，或不確定神是否在意我們。但如果你是基督徒，相信耶穌是神的形像，你就知道：神是愛你的、在意你的，祂樂意傾聽。禱告不是自我暗示或冥想，而是真實的雙向對話——我們說話，神也回應（透過聖靈、聖經、環境）。「人獨自跪在神面前禱告，再沒有比這更能流露靈魂的了。」（司徒邁子）</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">2. 主禱文的結構——神為首，人需次</h3>
              <p className="text-gray-700 leading-relaxed">主禱文分為兩組：前三個求告以神為中心（「願祢的名為聖」「願祢的國降臨」「願祢的旨意成就」），後三個求告以人的需要為中心（日用飲食、罪的赦免、脫離試探）。這個順序很重要：當我們先求神的榮耀和旨意，我們的個人需求就在正確的框架中。這教導我們「神為首，人需次」的禱告態度。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">3. 「我們的父」——以神兒女的身分禱告</h3>
              <p className="text-gray-700 leading-relaxed">「我們的父」不是泛指宇宙的創造主，而是特指在基督裡收納我們成為兒女的那一位。「我們」不只是個人的我，而是提醒我們：禱告是以整個神的家庭為基礎的。「在天上的」告訴我們神是偉大的、無限的、全能的——同時又是親近的、關心我們的。這個矛盾的結合是基督教禱告最美的地方。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">4. 尊名為聖、國度降臨、旨意成就</h3>
              <p className="text-gray-700 leading-relaxed">「願人都尊祢的名為聖」——「名」代表性格和位格；這是求神彰顯祂的榮耀，也是我們委身榮耀神的宣告。「願祢的國降臨」——神的國是以耶穌為王的統治，現在已臨，但未完全；我們求這個國在我們身上和世界上更完整地彰顯。「願祢的旨意成就」——不是聽天由命，而是求神使我們的意志與祂的意志對齊，甚至在客西馬尼園式的掙扎中也能說：「不照我的意思，只照祢的意思。」</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">5. 日用飲食、赦免、試探</h3>
              <p className="text-gray-700 leading-relaxed">「我們日用的飲食」——不只是物質的食物，而是一切生活所需。這求告教導我們每天倚靠神。「免我們的債」——罪是對神的虧欠；我們只有在自己赦免了他人的情況下，才能真誠地求神赦免我們（路加11:4指出兩者的連結）。「不叫我們遇見試探」——不是求神讓我們的生活沒有困難，而是求神在試探中保守我們不至跌倒，「救我們脫離兇惡」更指求脫離那惡者（撒但）的掌控。</p>
            </div>

            <div>
              <h3 className="font-bold text-purple-700 mb-2">6. 阿們——確信的宣告</h3>
              <p className="text-gray-700 leading-relaxed">「阿們」在希伯來文是「確實的、真實的、必成的」，不只是表示禱告結束，而是以信心確認所求的事：「就這樣成就吧！」當我們說「阿們」，我們是在承認神是可信賴的，祂所應許的必然成就。「榮耀全是祢的，直到永遠」提醒我們：禱告的最終目的不是滿足我們的需要，而是讓神得著榮耀。</p>
            </div>

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
              <p className="text-gray-700 leading-relaxed">巴刻從主禱文分析出七種禱告的行為：（A）用仰望和信靠來親近神；（Ac）以讚美和敬拜來承認祂的工作和偉大；（Ad）認罪並求赦免；（As）為自己和別人求；（Ar）要求得福（爭辯）；（Ac）接受神的安排；（Ad）遵守忠心事奉祂。這七種行為比ACTS更全面，幫助我們禱告不失去重心。</p>
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
              <p className="text-gray-700 mb-2">想一想你生命中最難赦免的一個人（可以是過去的、現在的）。這週做以下幾個步驟：（1）承認你心中的苦毒或憤怒；（2）默想神如何赦免了你；（3）作出選擇：「我選擇赦免__，不是因為感覺，而是因為我被赦免了。」赦免不是遺忘，而是放開要對方付款的要求。</p>
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
