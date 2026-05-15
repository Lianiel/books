import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Search, HelpCircle, Check } from 'lucide-react';

export default function Book14Ch9() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">第9章</h1>
        <h2 className="text-xl font-semibold text-gray-700">附錄：羅馬書第七章的苦中人</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>

        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <p className="text-gray-700 leading-relaxed mb-3">心論題在第七節寫明：「只是非因律法，我就不知何為罪。」——意思是，是律法叫我知罪。這一段落繼續述說，律法禁制貪心就攪動起保羅內心無法控制的貪念，以致他將正確人生道路規劃出來的實際效果，正是將保羅的雙腳牢牢地釘在死亡的道路上。</p>
            <p className="text-gray-700 leading-relaxed mb-3">第二部分（14—25 節）全部以現在時式書寫。因此，在文法上，對於他最自然的理解，就是看他為保羅在書寫時期一篇自我認識的文本；可是，當中的內容卻令一些人覺得這樣的解釋難以置信。信裡述說一個人的經驗，這人看見自己經常違反自己的意願，違反律法的要求，想行善卻行不出來，他不斷反省這個事實，而看出一個痛苦的真相，並在文章開端作為整段的中心論題宣佈出來——「我是屬乎肉體的，是已經賣給罪了。」（14 節）正是這個洞察引發出那一聲呼求：「我真是苦啊！誰能救我脫離„„？」</p>
            <p className="text-gray-700 leading-relaxed mb-3">我們整個問題所在就是那個「真是苦啊」的人的狀況與保羅在第八章所描述的明顯地自相矛盾。</p>
            <p className="text-gray-700 leading-relaxed mb-3">在第八章，保羅宣告「因為賜生命聖靈的律，在基督耶穌裡釋放了我，使我脫離罪和死的律了」（2 節）；他看自己是「不隨從肉體，只隨從聖靈的人」（4 節），是「有聖靈初結果子的」（23 節），而且他的軟弱有聖靈幫助（26 節）。因此，就出現以下的問題：1．那個「真是苦啊」的人確是保羅嗎？還是只是一個創作出來的人物？2．若果真是保羅，是信主後的保羅，還是未信主前的猶太人掃羅？我們會逐一按次序考慮這些問題。</p>
            <p className="text-gray-700 leading-relaxed mb-3">首先：那個「真是苦啊」的人確是保羅嗎？</p>
            <p className="text-gray-700 leading-relaxed mb-3">幾乎所有解經家都認為在這一段裡，保羅正在形容一種自己曾經嘗受的經驗，我想這一點是無可爭論的了。有人提出這段文字「完全不代表保羅的個人經驗，他只不過是對他人經驗的二手描述，甚而是一幅構想出來的圖畫，以表明若不是神的恩典，人很可能會跌落怎麼樣的心思狀態裡」；對於這種講法，卻克（Kirk）認為「難以置信」。1 確實令人難以置信。這些人提出的意念，是說儘管保羅在筆法上從眾數的「我們」，意指全體基督徒，轉為第一身單數（14 節，參 5—7 節），他所形容的，仍舊是一種不屬於他自己的經驗，而純粹是假設和構想——即是說，那加強語氣的「我」字稱謂（14、17、24 節；25 節）所代表的「不是我，而是你，或另有其人」，而那自然流露的呼喊：「我真是苦啊！」也絕非保羅自己的呼喊——，整個意念聽起來似覺太過人工化、戲劇化，很難被接受為另一個認真的合理解釋。的確，一如許多人經常指出的，保羅在七章七至二十五節的記載並不單指他個人一種特殊經驗，而是一種典型的、具代表性的經驗，因為他的表達似乎在揭露一種宇宙性關於律法與罪惡在人生命裡的關係。可是，他又十分肯定這是人類經驗的特徵，那麼，很明顯這種經驗他自己亦不能倖免。</p>
            <p className="text-gray-700 leading-relaxed mb-3">那麼，那「真是苦啊」的人就是保羅自己。但這是從前的保羅，抑或現在的保羅？他是那法利賽人保羅，代表著所有未悔改、只有敬虔外表的人，在亞當裡面的人，認識一些律法的形式，但並未得著福音、信心和聖靈；抑或他是信主以後的保羅，他所說的，正代表著所有在基督裡的人？很明顯，一方面羅馬書七章七至十三節所描述的是悔改前的保羅，而另一方面，羅馬書八章全章記述了信主後的保羅在神學上的領悟；可是夾在這兩段之間的一段經文，又屬於哪一方面的狀態呢？正如我曾經提及，在這裡，解經家意見分歧。</p>
            <p className="text-gray-700 leading-relaxed mb-3">有些人認為十四至二十五節的保羅即是七至十三節那個未悔改的保羅，所以這一段自我分析，純粹是對七至十三節所記載事情的評論。持這種觀點的人，認為段落裡的現在時態純粹是使內容更為逼真傳神的筆法，雖然對於保羅在寫作時候的心境來說，這已經是一段過去了的經驗。例如，布特曼</p>
            <p className="text-gray-700 leading-relaxed mb-3">（Bultmann）就形容這段經文為「一段從基督徒信仰的立場回顧的文字，在回望中清楚敘述一個人在律法以下的處境。」2 倘若這觀點是對的話，那人的苦況就在於他憑己力去努力達到宗教上的要求，結果失敗了。他竭力用善行達致公義，可惜卻不得要領。他感受到自己的有心無力，知道自己正邁向最終的敗亡；因此，他呼求拯救。那是未悔改的人對自己感到絕望的呼喊；從這個觀點看，第八章一至四節福音的恩典正是神的答案。推而觀之，第二十五節前半截的動詞（「感謝神，靠著我們的主耶穌基督」）就是宣告從前或現今的拯救的動詞——與八章二節的遙相呼應。這個觀點是今天最普遍被採納的觀點，可是，卻有一些壓倒性的反對聲音。</p>
            <p className="text-gray-700 leading-relaxed mb-3">1．這觀點沒有交代清楚第十四節怎麼從不定過去式轉為現在時式。照這個觀點看，整個時式的改變是十分不自然的，這時式變化出現在一段文字的中間，而這段文字涉及的內容，已被假定為一個單獨的經驗，並且是已經過去了的。在保羅別的書信裡，未有過相似的情形出現；而在福音書裡，為增加敘事的逼真效果而運用歷史現在時式的做法，並不能與此相提並論，因為這裡的敘事部分是運用不定過去式寫作的，運用現在時式寫作的並非敘事體，而是概括解釋性的評論。可是，這裡似乎沒有什麼可辨認的語言習慣用法可解釋文中時式的變化，既然如此，那麼保羅的讀者對第十四節開始的那段經文所採用的現在時式的唯一自然解釋，就是所指的是目前的事，是有異於前面經節所憶述的過往經驗的；我們必須假定當保羅寫這段文字時，他深明各種時式變化的含意。難道我們要指控保羅毫無理由、任性地隨便改變時式，使文意含糊，以致惹來不必要的誤解？上述提出的觀點實際上就包含了這樣的一個指控。如此看來，這個觀點就成疑問了。</p>
            <p className="text-gray-700 leading-relaxed mb-3">2．倘若第二十五節上半截是宣告從第十五至二十五節所形容罪的捆縛中獲得當前的釋放，那麼第二十五節下半截的推論（「這樣看來，我以內心順服神的律；我肉體卻順服罪的律了。」）顯然與前提不符，變成一種破壞文氣的反高潮。要解決這個問題，曾經有人提出兩個權宜之計；可是，似乎兩個解決方法都欠缺說服力。第一個解決方法，就是將加強語氣的（「我」）避免解為「我，甚至我」——這本來是最自然的解法，轉而解釋為「我憑自己；只我一人，沒有基督；我單憑己力。」梅亞（ Meyer）、鄧尼（ Denney） 3、米頓博士（Dr.C L． Mition） 4、雅特和真烈治（ Arndt－Gingrich）等都採納這個看法。可是，我真的很懷疑是否能夠盛載這麼沉重的意思。雅特和真烈治並沒有拿相若的經文來比較（列舉的兩節經文，可六 31 和羅九 3，在意思上完全不相若）。在文法上看，這樣的解釋是強解。再者，若果這真是保羅的意思，那麼，實在很難相信，接著二十五節的上半截，他竟然不用不定過去式或未完成時式（「我從前順服„„」，「我從前慣常順服„„」）；他絕對不會不覺察到在這兒轉用現在時式，是十分令人困惑的。所以，這個解釋是否能夠成立，實在不能確定。第二個解決方法，就是假設</p>
            <p className="text-gray-700 leading-relaxed mb-3">第二十五節下半截是誤置的，本應立即緊接第二十三節（摩法特［Moffat］、卻克［Kirk］和陶德［C．H．Dodd］都持這個觀點）；這個看法卻連最些微的抄本證據都盡付厥如，我們必須對這取巧的理論提出懷疑。</p>
            <p className="text-gray-700 leading-relaxed mb-3">3．從這個觀點看，保羅述說一個在亞當裡的人與神的律法有一種自然的情緣——認許他（16 節），喜悅他（22 節），願意遵行他（15、18—21 節），並以他的和在他「內心深處的我」——即裡面的人（22 節，參 25 節）——竭誠為他效勞。可是，保羅在其他地方卻恒常地否認有這樣親切的情緣存在，並斷言在亞當裡的人，心思意念是盲目、腐敗、無法無天和與神對敵的（參弗二 3，四 17 及其後經節）。事實上，我們在第八章首段發現很清楚的斷言：「„„隨從肉體的人體貼肉體的事，„„原來體貼肉體的，就是與神為仇；因為不服神的律法，也是不能服。」（ 5、7 節）除非我們假定保羅在十節經文以內已經完全改變了他的人類學觀點，否則，我們可以十分肯定作結論說，保羅在羅馬書第七章十四至二十五節並非形容一個在亞當裡的人，而是在基督裡的人。</p>
            <p className="text-gray-700 leading-relaxed mb-3">4．基督賦予這個世界脫離罪惡權勢的自由，是小於那個「真是苦啊」的人所呼求的拯救，因為他所願望的拯救是「脫離這取死的身體」，意思是脫離這個必死的身體——這身體目前正是罪惡棲身之所（23 節）。但那拯救不會臨到，除非「必死的„„變成不死的」（林前一五 54〕：即完全得贖；根據羅馬書第八章二十三節，那些擁有聖靈的人仍在歎息中等候這完全得贖的日子。這歎息肯定就是羅馬書第七章二十四節所表達的。那「真是苦啊」的人所渴求的，正是第八章二十三節所指的「身體得贖」。若果這是正確的解釋，那麼他在二十五節上半截所提出要感謝的必定是這個應許：透過基督，他至終會完全得贖。若然二十五節上半截的感恩，並非為當時已經脫離十五至二十三節所形容的狀況而感謝神，而是一種對未來拯救的盼望，那麼二十五節上半截和下半截連接地放在一起就不再產生問題了。照這樣子釋經，二十五節下半截就不再是脫節的，也不是反高潮：他只不過總結了上述所描寫的處境，一日人的肉身生命仍然存在，這種境況仍舊會持續下去。在基督裡的人用他的心意去服役神的律，意思是他渴想和決意完全遵從他，可是以他的肉體卻服役罪的律，因為從事實看來，他從來不能夠依從他的心願完全地、恒切地遵守神的律。那加強語氣的——「我，甚至我」——表達出保羅感覺何等痛苦的矛盾，一個像他這樣子的基督徒，全心全意願望遵守神的律法，單單行善，卻發現自己經常身不由己地違反神的律，行起惡來。可是，這正是基督徒在身體完全得贖以前的狀況。</p>
            <p className="text-gray-700 leading-relaxed mb-3">上述從批判中發展出來的觀點，我個人認為是解釋全段經文較為令人滿意的觀點。這個觀點的要點如下。整段經文以現在時式寫成，因為他形容一種現存的狀況，他覆述保羅作為一個基督徒在神學上的自我認識：不是全部的認識，只是切合當前課題的那一部分——就是律法提供關乎罪的知識的功能。</p>
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
              <h4 className="font-semibold text-gray-800 mb-2">羅馬書7章的苦中人：信徒還是非信徒？</h4>
              <p className="text-gray-700 leading-relaxed">羅馬書7:14-25的「苦中人」是聖經詮釋史上爭議最大的段落之一，主要有三種立場：(1)非信徒觀——這是一個在律法之下掙扎卻未得救的人，描述重生前的狀態（奧利金、加爾文早期）；(2)不成熟信徒觀——這是一個尚未認識聖靈得勝之道的初信者；(3)成熟信徒觀——這是一個靈命成熟、對罪的本質認識深刻、因此感到更大靈魂掙扎的信徒（奧古斯丁後期、路德、巴刻）。巴刻在附錄中詳細論證第三種立場。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「苦中人」的靈命特質：越認識神，越感到自己的罪</h4>
              <p className="text-gray-700 leading-relaxed">第三種立場有一個重要的屬靈洞見：靈命越成熟的人，往往對自己罪性的感受越深、掙扎越強烈。一個靈命幼稚的信徒可能對自己的罪渾然不覺；一個靈命成熟的信徒，因為更靠近聖靈的光、因為對神的聖潔有更深的認識，反而更清楚自己的不足和罪性的頑固。這就是為什麼保羅——那個說「我已死了，現在是基督在我裡面活著」的人——同時也說「我真是苦啊！誰能救我脫離這取死的身體呢？」</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">律法的功用：定罪而非稱義</h4>
              <p className="text-gray-700 leading-relaxed">羅馬書7章也是保羅對律法神學最完整的論述之一。律法有三個功用：(1)啟示標準——顯示神對人的要求；(2)定罪功用——揭示人的罪性，使人知罪（7:7-13）；(3)激發悔改——將人驅向基督（加3:24）。律法的問題不是律法本身（保羅說「律法是聖潔的、公義的、良善的」），而是人靠肉體之力無法遵行律法。解決方案不是廢除律法，而是靠聖靈遵行律法的義（羅8:4）。</p>
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
              <p className="text-gray-700">你認為羅馬書7章的「苦中人」是信徒還是非信徒？你的立場是基於哪些聖經論據？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">你有沒有經歷過保羅在羅馬書7章描述的那種內在掙扎——「我所願意的善，我偏不去做；我所不願意的惡，我倒去做」？這種經歷對你的信仰有什麼意義？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">如果「越靠近神，越感到自己的罪」是屬靈成長的標誌，你如何分辨這種「健康的罪疚感」和「不健康的自我定罪」？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">律法在你的信仰生活中扮演什麼角色？你有沒有過「靠律法稱義」或「靠律法成聖」的傾向？聖靈如何幫助你從律法的捆綁中釋放？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">讀完全書（活在聖靈中），你對聖靈的認識有什麼最大的改變或更新？你打算如何把這些學習整合到你的日常生活中？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">📖 羅馬書7-8章的對比研讀</h4>
              <p className="text-gray-700">用一週時間對比研讀羅馬書7章和8章：7章描述靠自己和律法的掙扎，8章描述靠聖靈的得勝。列出兩章的對比：主體是誰？動力是什麼？結果如何？這個對比如何幫助你理解你目前的屬靈狀態？</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🪞 誠實的自我反思</h4>
              <p className="text-gray-700">花時間誠實地寫下：在你的信仰生活中，有哪些領域你仍然在靠「自己的努力」行善或抵抗罪？有哪些領域你已經在靠聖靈的能力生活？哪些掙扎是你需要繼續帶到神面前的？</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📚 全書回顧與整合</h4>
              <p className="text-gray-700">回顧《活在聖靈中》全書，選出三個對你最有影響的觀念或段落，寫下：(1)這個觀念挑戰了我什麼舊有的想法？(2)它帶來了什麼新的理解？(3)我打算如何在生活中具體實踐？</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🗣️ 與他人分享讀書心得</h4>
              <p className="text-gray-700">組織或參與一次讀書分享會，與弟兄姊妹分享你從這本書學到的最重要的一個功課。教導是最深入的學習方式——當你嘗試向他人解釋一個觀念時，你對它的理解會更加深刻和清晰。</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
