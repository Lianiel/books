import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Crown, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book41Ch7() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-800 to-cyan-900 bg-clip-text text-transparent">第二部 2-1</h1>
        <h2 className="text-xl font-semibold text-gray-700">榮辱感第一項：榮耀之愛</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Crown className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">第二部：解析聖經中榮辱感之影響</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                第二部將探討聖經中的九種「榮辱動力」，以及貫穿聖經的主軸：（一）榮耀之愛、（二）兩種榮耀來源、（三）資源有限的概念、（四）挑戰與反擊、（五）臉面概念、（六）身體語言、（七）守護關係、（八）名字/親屬關係/血統、（九）潔淨；此外，還有貫穿聖經的主軸——「榮耀身分逆轉」，這其實也是榮辱動力之一。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                榮辱文化造成道德方面的負面影響，顯而易見——一個人剛開始成為基督徒時，往往會遭受羞辱、排擠，甚至被家人、社群所傷害，這證明了榮辱文化影響力大過於道德規範，甚至縱容榮耀殺戮這類罪行，我們理當揭發、譴責。但即使榮辱文化確實存在黑暗面，我們也發現榮辱文化存在著光明面，甚至是榮耀本身。可惜，許多基督徒對榮辱文化認識不足，這正是前面提及的神學盲點現象。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者觀察到，在跨文化宣教中，大家對榮/辱動力的認知程度有差異，可分五個層次：第一層「無意識」——缺乏對榮/辱動力的理解；第二層「道德的」——雖有意識，態度卻完全消極，只看到榮辱文化不符合道德的一面；第三層「功能的」——明白榮/辱動力是釋經很實際的切入點，是好用的資源（本書第一、二部正是要幫助讀者從無意識、道德的層次，建構到功能的層次）；第四層「宣教的」——看見福音可以運用聖經中的榮辱語言傳講，促使榮/辱力量在宣教事工中發揮更積極的功用（本書第三部探討這個層次）；第五層「神學的」——了解神從各族各民中聚集信徒的最終目標，就是要彰顯、榮耀基督，同時榮耀世界上各族各民，這是最高層次（本書第四部探討此層次）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                本書的特色之一，是探索聖經中榮/辱文化的黑暗面和光明面。因此，第二部前面九章的結尾處，都附有對照圖表，分成三欄：第一欄是特殊的榮/辱動力；中間欄位是這項動力的黑暗面，歸類為「世界的國度」；第三欄則是這項動力的光明面，也就是「神的國度」。以下，就進入第一項榮辱動力：榮耀之愛。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">榮耀之愛：古代世界的核心價值</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                不難理解，在古代中東，包括羅馬帝國，追求榮耀是核心價值。早在羅馬帝國出現之前，希臘哲學家亞里斯多德曾說：「對眾神表達敬意，是我們所能做的最偉大的事蹟，這也是居高位的人最垂涎的，而這高貴行為的獎賞——就是榮耀。榮耀，高過於一切偉大人物的嘉許和獎賞。」<sup>1</sup><span style={cite}>（引自Neyrey, Honor and Shame in the Gospel of Matthew, 5.）</span>藍頓（J. E. Lendon）參照第一世紀羅馬律師、作家小普林尼（Pliny the Younger）留下的數百封書信，發現羅馬人對名譽、榮耀和聲望的極度重視：「我認為那些享有美好、持久名望的人是最幸福的。他們得到後人的認同，活在將來的榮耀中。」<sup>2</sup><span style={cite}>（Lendon.）</span>教父奧古斯丁也曾說：「羅馬人心心念念為榮耀而活。眾所皆知，人們喜歡拿榮耀來做判斷，做為是否要尊敬他人的依據。」<sup>3</sup><span style={cite}>（Neyrey, Honor and Shame in the Gospel of Matthew, 17.）</span>希臘人甚至有一個專門的詞彙——「愛榮耀」（philotimia），尼瑞言簡意賅地說：「古人熱衷榮耀和讚美，視之為首要價值觀。」<sup>4</sup><span style={cite}>（Crook, 63；Neyrey.）</span>
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">門徒爭大：榮耀之愛的聖經例證</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「他們來到迦百農，耶穌在屋裏問門徒說：『你們在路上議論的是什麼？』門徒不作聲，因為他們在路上彼此爭論誰為大」（可九33-34）。門徒正在進行一場榮耀競賽，聖經稱之為「爭競」<sup>5</sup><span style={cite}>（腓一15。）</span>。耶穌的回應卻顛覆一般人的想法：「若有人願意作首先的，他必作眾人末後的，作眾人的用人」（35節）。耶穌的意思是：「我明白你們對榮耀很在乎，跟你們一樣，我對名譽和榮耀也很重視；但是，在我的國度裡，你獲得榮耀的方式很簡單——如果你想作領袖、得到最多榮耀，你必須作眾人的僕人。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                接下來（可十35-45），西庇太的兒子雅各和約翰更大膽地要求：「賜我們在你的榮耀裏，一個坐在你右邊，一個坐在你左邊」（37節）——這是對榮耀之愛毫不掩飾的表達。耶穌並沒有斥責他們的請求，反而藉此教導：「你們中間，誰願為大，就必作你們的用人；在你們中間，誰願為首，就必作眾人的僕人。因為人子來，並不是要受人的服事，乃是要服事人，並且要捨命作多人的贖價」（42-45節）。在神的國度裡，獲得榮耀的方式，與世界的方式背道而馳：如果你想成為領袖、得到最大榮譽，你必須服事所有的人——擁有並且應該獲得最大榮耀的那一位，人子，願意降卑自己，以致捨命「為許多人作贖價」。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">黑暗面：從伊甸園到巴別塔</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                榮耀是可以適度追求的，但聖經也清楚揭示榮耀之愛的黑暗和罪惡面。在人類犯罪之前，羞恥根本不存在（創二25）。斯梅茲說得好：「天起涼風之際，亞當和夏娃赤裸著身體在花園中與上帝走著，並不感到羞恥……他們不會感到羞恥，因為他們完全信任；當他們失去信任時，他們就感到羞恥了。」<sup>6</sup><span style={cite}>（Smedes, 63.）</span>上帝以「用皮子做衣服」遮蓋他們的赤身露體（創三21），藉以減少他們的羞恥並恢復他們的榮耀——羞恥正是過度追求榮耀所導致的結果，是創世記中人類犯罪的根源。
              </p>
              <p className="text-gray-700 leading-relaxed">
                以賽亞書十四章描繪巴比倫王的墮落，是對榮耀之愛的罪惡層面另一個清楚敘述：「你心裏曾說：我要升到天上；我要高舉我的寶座在神眾星以上……我要與至上者同等」（賽十四13-14），神卻透過以賽亞宣告：「然而，你必墜落陰間，到坑中極深之處」（賽十四15）。從人類的墮落、到第一次謀殺、到語言的起源、以及巴比倫王的墮落，聖經中所揭示人類的榮耀之愛顯然是非常負面的——驕傲的榮耀之愛帶給人類毀滅、痛苦、壓迫、困惑和死亡。然而，無論是將榮耀之愛視為黑暗國度的價值觀，還是神國度的價值觀，毋庸置疑：榮與辱是聖經的關鍵價值觀，而且帶著感性的力量，影響深遠。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">光明面：摩西、大衛與保羅</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                摩西曾大膽向神求告：「求你顯出你的榮耀給我看」（出卅三18）——神並沒有因為這個渴望而懲罰摩西，只是回應了部分的要求。大衛逃到洞穴中躲避掃羅追殺時，也發自心靈深處呼求：「我的榮耀啊，你當醒起！……主啊，我要在萬民中稱謝你，在列邦中歌頌你！」（詩五七7-9）在生命岌岌可危的洞穴中，大衛對一國之君的榮耀、甚至超越國族的影響力，充分表達了渴望。<sup>7</sup><span style={cite}>（詩五七9；「我的靈（原文是榮耀）啊，你當醒起」有「我將叫太陽升起」的詩意表達，隱含跨國界的全球影響力。）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅在羅馬書中寫道：「凡恆心行善、尋求榮耀、尊貴和不能朽壞之福的，就以永生報應他們」（羅二6-8）——正確地尋求「從獨一之神來的榮耀」（約五44），與法利賽人「愛人的榮耀過於愛神的榮耀」（約十二43）形成鮮明對比。這是一種來自神的、正確且恰當地追求榮耀、尊貴的路徑。
              </p>
              <p className="text-gray-700 leading-relaxed">
                作者的研究發現，英文標準版聖經中「榮耀」「使……得榮耀」等詞共出現四百七十次，其中65%涉及神，29%涉及人，6%涉及其他<sup>8</sup><span style={cite}>（作者依ESV Bible統計分析。）</span>——近三分之一的「榮耀經文」竟與人有關！詩篇作者祈禱「我的榮耀啊，你當醒起」；信徒尋求「從獨一之神來的榮耀」；受造物將「得享神兒女自由的榮耀」（羅八21）；彼得寫道，信徒「就為寶貴」（彼前二7，作者採ESV譯為honor）。人依這位善良而榮耀的神的形像而造（創一27），這一點後來透過信徒的信心和基督的身分而彰顯——這正是人們渴望擺脫羞辱、渴望榮耀的原因所在。
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
                '第二部要探討聖經中九種榮辱動力（榮耀之愛、兩種榮耀來源、資源有限、挑戰反擊、臉面概念、身體語言、守護關係、名字親屬血統、潔淨）及貫穿全書的「榮耀地位逆轉」主軸，每章結尾都附有「世界國度vs.神國度」對照圖表。',
                '作者提出榮/辱意識的五個認知層次：無意識、道德的（消極批判）、功能的（釋經工具）、宣教的（福音表達）、神學的（終極目標），本書第一二部帶讀者從無意識走到功能的層次。',
                '「榮耀之愛」是古代中東與羅馬帝國的核心價值，亞里斯多德、小普林尼、奧古斯丁的話都印證：追求榮耀被視為人類努力的最高動機與獎賞。',
                '門徒爭論誰為大、雅各約翰求坐左右——耶穌並未斥責他們對榮耀的渴望，而是教導：神國度裡得榮耀的方式是服事眾人，這是與世界完全相反的榮耀邏輯。',
                '榮耀之愛也有黑暗面：伊甸園的墮落、巴比倫王的驕傲，都顯示過度、扭曲的榮耀之愛帶來毀滅；但摩西求見神的榮耀、大衛在洞穴中呼求榮耀、保羅教導「尋求榮耀」蒙神悅納，顯示榮耀之愛也有蒙神稱許的光明面。',
                '英文標準版聖經中「榮耀」相關詞共出現470次，其中29%竟是指向「人的榮耀」而非神的榮耀——這提醒我們，聖經對榮耀的教導遠比一般人以為的更關注人在基督裡所領受的尊貴身分。',
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
              <h4 className="font-semibold text-gray-800 mb-2">耶穌沒有斥責雅各、約翰對榮耀的渴望，只是重新定義了得榮耀的路徑——這對教會今日如何回應信徒的「野心」有什麼啟發？</h4>
              <p className="text-gray-700 leading-relaxed">
                許多教會的屬靈教導傾向於把「渴望被看見、渴望有影響力」直接貼上「屬肉體」的標籤，要求信徒完全壓抑這種渴望。但耶穌的回應方式提供了另一種牧養路徑：不是否定渴望榮耀本身，而是引導這股渴望流向正確的方向——透過服事而非爭競來得著榮耀。這提醒教會領袖，在牧養有恩賜、有抱負的信徒時，與其一味壓抑，不如幫助他們把渴望榮耀的能量，轉化為捨己服事的動力。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「29%的榮耀經文指向人」，這個統計數字為何讓作者本人也感到驚訝？</h4>
              <p className="text-gray-700 leading-relaxed">
                多數基督徒讀經時，一看到「榮耀」就自動聯想到「神的榮耀」，很少意識到聖經同樣大篇幅地談論「人所領受的榮耀」。這種閱讀習慣的落差，某種程度上正反映了西方神學傳統對「人的尊貴」議題的忽略——過度強調人的墮落與卑微，卻較少談論人因基督而重新獲得的尊榮身分。這個統計提醒讀者，完整的福音信息，應同時包含神的榮耀與人在基督裡重新獲得的榮耀。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">巴比倫王的墮落與耶穌降卑服事的對比，如何具體示範「黑暗面」與「光明面」榮耀之愛的分野？</h4>
              <p className="text-gray-700 leading-relaxed">
                巴比倫王的榮耀之愛，指向「我要升到天上……我要與至上者同等」的自我神化；耶穌的榮耀之愛，卻指向「祂本有神的形像……反倒虛己……存心順服，以至於死」（腓二6-8）的自我倒空。兩者的差異不在於是否渴望榮耀，而在於這股渴望的方向——是向上抓取、還是向下傾倒。這正是分辨「屬世的榮耀之愛」與「屬神的榮耀之愛」最清楚的判準。
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
              '思考榮耀在你心中的分量：你實際經歷的榮耀，有多少彰顯在你的家庭、工作、財富或外顯行為上？又有多少聚焦在耶穌基督、祂的教會和祂的國度上？兩者的比較帶給你什麼反思？',
              '本章五個榮辱意識層次（無意識、道德的、功能的、宣教的、神學的），你認為自己目前落在哪一層次？',
              '回想你最近一次渴望被肯定、被看見的經驗，那是一種「屬世」的榮耀之愛，還是能被引導向「服事他人」的健康渴望？',
              '摩西求「顯出你的榮耀給我看」、大衛在洞穴中呼求「我的榮耀啊，你當醒起」——這種對神大膽求告榮耀的禱告方式，對你的禱告生活有什麼提醒？',
              '「29%的榮耀經文指向人」這個發現，如何挑戰你過去對「基督徒應當謙卑、不配得任何榮耀」的理解？',
              '如果要向一位重視「面子」和「地位」的朋友介紹耶穌降卑服事的榮耀觀，你會如何切入？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 研讀詩篇中的「榮耀」詞彙</h4>
              <p className="text-gray-700 mb-2">
                找幾篇詩篇，圈出「使……得榮耀」「蒙榮耀」「榮耀的」等詞，記錄有多少是關乎神本身的榮耀，有多少是關於人的榮耀，觀察兩者如何交織，並寫下你的發現。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🌍 檢視宣教／跨文化事工中的榮耀動力</h4>
              <p className="text-gray-700 mb-2">
                如果你參與跨文化事工或宣教旅程，想想你的言行是否顧及工作夥伴的感受、是否影響到合作夥伴的榮耀或尊嚴，如何在互動中主動肯定、建立對方的尊榮感？
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，求祢教導我像摩西、大衛一樣，坦然向祢求告祢的榮耀，也求祢引導我對榮耀的渴望，不落入自我抓取的黑暗面，而是像耶穌一樣，透過服事、降卑，活出屬祢國度的榮耀。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
