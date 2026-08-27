import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Smile, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book41Ch11() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-800 to-cyan-900 bg-clip-text text-transparent">第二部 2-5</h1>
        <h2 className="text-xl font-semibold text-gray-700">榮辱感第五項：情面概念</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Smile className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">定義：臉面不是身體部位</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                本章說明「情面」的觀念——西方社會對此並不熟悉，但這個觀念在聖經所描繪的榮辱社會中十分普遍；對個人或族群而言，遠離神是一種羞辱，但當人們轉向神時，他們的羞辱得以除去、榮耀得以恢復；在東亞、東南亞（中國、韓國、日本、印尼、泰國等）文化中，「面子觀念」非常明顯，傳講福音時，聖經中關於臉面的內容，應適度融入當地文化情境中<sup>1</sup><span style={cite}>（編按：作者提到face一詞，中文概念中兼指生理〔臉、臉面〕與人情關係〔面子、情面〕，本書按上下文靈活應用。）</span>。弗蘭德斯（Flanders）針對東亞文化中「臉面」（面子）的觀念有貼切的分析：「提到『臉面』，並不是指身體部位。這個詞影射社會互動過程中人與人之間的榮譽感和不同身分——『在人際互動的情境中，情面（面子）代表一個人的自尊心』。」<sup>2</sup><span style={cite}>（Christopher Flanders, About Face, 1.）</span>聖經中「臉面」的概念有兩個部分：人在神面前會感到羞恥，這是罪的結果，常見現象是離開、躲避神的面；而當人轉向神的面，不僅可以得到救贖，羞辱也蒙醫治，並且享有平安。<sup>3</sup><span style={cite}>（改編自Stockitt.）</span>
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">躲避神的面：亞當、夏娃與該隱</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「天起了涼風，耶和華神在園中行走。那人和他妻子聽見神的聲音，就藏在園裏的樹木中，躲避耶和華神的面」（創三8）。史托奇（Robin Stockitt）為這節經文做了耐人尋味的詮釋：「這對夫婦為了躲避神的臉（pānîm）而迴避退縮。懷著很深的羞恥感，他們的本能反應是躲避神的面。在這裡，我們看到平行的對比模式：無辜、無罪和面對神沒有羞恥感……相反的情境則是：羞辱、內疚和罪惡，這些現象似乎是躲避神的面所招致的自然結果。」<sup>4</sup><span style={cite}>（Stockitt.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                該隱和亞伯的故事中，「面」這個詞彙的延伸引用同樣值得留意：神看不中該隱和他的供物，「該隱就大大的發怒，變了臉色」（創四5）；殺害亞伯後，該隱對耶和華說：「你如今趕逐我離開這地，以致不見你面……於是該隱離開耶和華的面」（創四14、16）。犯罪不僅導致內疚，也帶來羞恥——正如離開神的面，就是羞恥。以賽亞書中也有類似例子：「你們的罪孽使你們與神隔絕；你們的罪惡使他掩面不聽你們」（賽五九2）。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">仰望神的臉：亞倫的祝福與新約的榮耀</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                相反地，聖經另有段落描述藉著仰望神的臉，表達神百姓的榮耀——「亞倫的祝福」：「願耶和華使他的臉光照你，賜恩給你。願耶和華向你仰臉，賜你平安」（民六25-26）。神的百姓、神的臉和表情之間有明顯關連，把神的「名」（代表神的榮耀）放在「以色列人身上」，是何其大的祝福！詩篇也呼應這個主題：「凡仰望他的，便有光榮；他們的臉必不蒙羞」（詩三四5）；「神啊，求你使我們回轉，使你的臉發光，我們便要得救！」（詩八十3）——在希伯來人的心中，救贖和「神的面」息息相關。
              </p>
              <p className="text-gray-700 leading-relaxed">
                在新約中，保羅將舊約「神的面」這個概念，與耶穌基督所得到的榮耀做了連結：「我們眾人既然敞著臉得以看見主的榮光，好像從鏡子裏返照，就變成主的形狀，榮上加榮，如同從主的靈變成的」（林後三18）；「神已經照在我們心裏，叫我們得知神榮耀的光顯在耶穌基督的面上」（林後四6）。基督徒藉著向神敞開，看到神的榮耀、擁有無以倫比的榮耀，在與神維持良好的親密關係中，神的榮耀、尊貴進入人的心中，驅散所有的黑暗和羞辱。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">東亞的情面觀點</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                吳榮在《保存上帝的面子》一書中，深入解釋了中國社會中面子的影響力。<sup>5</sup><span style={cite}>（Wu, Saving God's Face.）</span>他指出：「『臉面（面子）』是中國人詮釋榮/辱的方式。」<sup>6</sup><span style={cite}>（Wu, 151.）</span>學者秦顯夫將「有頭有臉」描述為一個人的聲望或名譽，因著「高位、財富、權力、能力，透過與知名人士的關係，巧妙地建立」，主要在於「社會傳統」的認同，而非「品格端正」；陳永濤補充：「『丟臉』意味著羞辱、蒙羞，而『沒面子』代表一個人的榮耀不被尊重，或不被認同。」<sup>7</sup><span style={cite}>（Wu, 156-157，引用秦顯夫、陳永濤。）</span>吳榮進一步歸納：「有頭有臉」單純表示一個人是眾所周知的，無論他是否有好的道德立足點；一個窮人可能「有面子」，卻不見得「有頭有臉」。<sup>8</sup><span style={cite}>（Wu, 157.）</span>研究也顯示，患有精神疾病、宿疾或接受愛滋病檢測等，都可能令人失去面子，導致關係受損、歧視，甚至拒絕就醫。<sup>9</sup><span style={cite}>（Wu, 158，引用Yang and Kleinman研究。）</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                吳榮總結：臉面/榮耀有兩個特徵——一是社會的、公眾性的，二是表達了身分價值或地位<sup>10</sup><span style={cite}>（Wu, 162.）</span>；「世界上有些人，就像中國人一樣，他們對自己的身分認同，不是以自己做甚麼事來界定，而是以他們認識誰來定位自己。在中國文化中，關係——建構人脈、主導一切，影響深遠。『給面子』和『有面子』是建立關係，也是維持和鞏固關係的途徑。」<sup>11</sup><span style={cite}>（Wu, 176.）</span>面子對生活在東亞和東南亞、超過二十一億人有明顯的影響力<sup>12</sup><span style={cite}>（東亞人口近十六億、東南亞人口超過六億。）</span>，聖經中也有關於「面子」（臉面）觀念的豐富素材——這種重疊現象，顯示了當代東亞社會和古代聖經社會的共同點：都持有榮/辱文化的價值觀。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">聖經最後一章：見祂的面</h3>
              <p className="text-gray-700 leading-relaxed">
                「臉面」觀念也奇妙地出現在聖經的最後一章：「以後再沒有咒詛；在城裏有神和羔羊的寶座；他的僕人都要事奉他，也要見他的面。他的名字必寫在他們的額上……他們要作王，直到永永遠遠」（啟廿二3-5）。在永恆的未來，得救的百姓將與神同享尊貴榮耀，這真是超乎人的想像、令人驚嘆的恩典：因罪惡、羞辱而遠離神的面，這種阻隔力將會消失，屬神的百姓享有尊榮，能與神相近，看到主的面！祂的名字（也就是祂的榮耀）將永遠銘刻在所有得救贖、確知自己身分的百姓額上，而祂的百姓，也將與救主——萬王之王，共同治理，直到永遠。
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
                '聖經中「神的面」貫穿全書：從亞當夏娃、該隱因羞恥而「躲避耶和華的面」，到亞倫祝福「願耶和華向你仰臉」，再到啟示錄最終「見祂的面」，構成一條清晰的羞辱到榮耀的救贖軸線。',
                '罪帶來的不只是內疚，更是羞恥——躲避神的面正是這種羞恥最直接的表現；而救贖的核心圖像之一，就是重新被允許、被邀請仰望、親近神的面。',
                '新約延續並深化這個主題：保羅說信徒「敞著臉得以看見主的榮光……就變成主的形狀，榮上加榮」，把「見神的面」與生命被基督榮耀改變連結在一起。',
                '中國文化中的「面子」概念，與聖經榮辱動力高度重疊：面子具有社會性、公眾性，且與身分地位緊密相關，「給面子」和「有面子」是建立、維繫關係的核心途徑，這對超過二十一億東亞、東南亞人口有深遠影響。',
                '「有頭有臉」（社會知名度）與「有面子」（道德聲望帶來的尊重）是可以分離的兩種面子——一個窮人可能「有面子」卻不「有頭有臉」，這個區分有助於更精確地理解不同處境下的面子動力。',
                '啟示錄二十二章「見祂的面」是全書關於臉面主題的終極應許：因罪而生的阻隔徹底消失，神的百姓將永遠與神面對面、共享尊榮，並與祂一同執掌王權。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「見神的面」這個貫穿聖經的主題，如何比「罪得赦免」的法庭圖像，更貼近華人讀者對「面子」的直覺理解？</h4>
              <p className="text-gray-700 leading-relaxed">
                對熟悉「丟臉」「沒面子」概念的華人讀者而言，「因罪而躲避神的面」遠比抽象的法律無罪判決更容易產生共鳴——這正是一種切身可感的羞辱經驗。而福音的好消息，也因此可以被表達為：耶穌基督使我們不再需要躲避、遮掩，反而可以坦然無懼地仰望神的臉、被神「賞臉」接納。這種表達方式，往往比純粹法庭語言的福音講述，更能觸動華人聽眾的心。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">吳榮區分「有頭有臉」與「有面子」，對教會評估「成功」的標準有何提醒？</h4>
              <p className="text-gray-700 leading-relaxed">
                教會有時會不自覺地把「有頭有臉」（知名度、影響力、資源）當作衡量事工或領袖是否「成功」「蒙福」的標準，卻忽略了「有面子」（真實的道德聲望與品格）才是聖經更看重的尊榮。這個區分提醒教會領袖，應謹慎分辨兩者，避免把世俗的知名度誤認為屬靈的果效或蒙神悅納的記號。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「見祂的面」在啟示錄末了的應許，如何為今日活在羞辱、隱藏、逃避中的人帶來盼望？</h4>
              <p className="text-gray-700 leading-relaxed">
                許多人因著過去的傷害、失敗或罪疚，長期活在「不敢被看見、不敢面對」的隱藏狀態中——這正是伊甸園「躲避神的面」的當代翻版。啟示錄的應許宣告：這種永遠的隱藏並非結局，救贖的終點是被邀請、被歡迎、坦然無懼地「見祂的面」。這個終末盼望，能為深陷羞辱、習慣性躲藏的現代人，提供一個具體而動人的醫治圖像。
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
              '信徒如何「在耶穌基督面前……看到主的榮耀」？這對你而言，是怎樣的心志、態度和行為？',
              '回想一次你因羞愧而「躲避」某人（甚至躲避神）的經驗，讀完本章後，這對你有什麼新的理解？',
              '在你的成長背景中，「面子」「丟臉」「有頭有臉」這些概念，如何形塑你的行為與人際關係？',
              '吳榮區分的「有頭有臉」與「有面子」，你認為自己過去追求的，比較偏向哪一種？',
              '「凡仰望他的，便有光榮；他們的臉必不蒙羞」（詩三四5）——這節經文對你目前正經歷的某種羞愧感，帶來什麼安慰？',
              '啟示錄末了「見祂的面」的應許，如何幫助你想像、期待那個完全沒有羞辱、只有榮耀的永恆國度？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 精讀哥林多後書三章</h4>
              <p className="text-gray-700 mb-2">
                探討「臉面」和挪去帕子、「向神敞開的臉」所代表的力量，思考這段經文如何描述一個人的生命被基督改變的過程。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙌 用「亞倫的祝福」為人代禱</h4>
              <p className="text-gray-700 mb-2">
                本週用民數記六章22-27節「亞倫的祝福」，為一位未信主的家人或朋友禱告，或許你會意外發現：他們樂意接受這樣的禱告。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，感謝祢透過耶穌基督，除去我因罪而生的羞愧，使我不再需要躲避祢的面。求祢使祢的臉光照我、向我仰臉、賜我平安，也求祢幫助我，帶著同樣的憐憫，去接納、陪伴那些正躲藏在羞辱陰影中的人。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
