import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch31() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第三十一章</h1>
        <h2 className="text-xl font-semibold text-gray-700">人與神的心</h2>
        <p className="text-gray-500 mt-1">耶和華見人在地上罪惡很大，終日所思想的盡都是惡，耶和華就後悔造人在地上，心中憂傷。耶和華說：「我要將所造的人和走獸，並昆蟲，以及空中的飛鳥，都從地上除滅，因為我造他們後悔了。」惟有挪亞在耶和華眼前蒙恩。創世記六5-8</p>
      </div>

      {/* 正文 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">正文</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">前言</h3>
              <p className="text-gray-700 leading-relaxed">
                挪亞的時代，以「神的兒子們看見人的女子美貌，就隨意挑選，娶來為妻」（創六2）這事作為引爆點，之後罪惡快速擴大蔓延。不管將神的兒子解釋為誰，這標示著健康的婚姻乃社會安定的基礎，變調的婚姻乃社會混亂的源頭。除了要判斷神的兒子是誰，更要注意「看見美貌，隨意娶來」這個描述。這句話標示著「眼目的情慾、肉體的情慾、今生的驕傲」（約壹二16）。這件事前面的伏筆乃是亞當、夏娃吃禁果，因為吃禁果那件事引動了「眼目的情慾、肉體的情慾、今生的驕傲」，造成後面一連串不好的發展，其中的關鍵是婚姻被破壞。本來以愛為要素的婚姻被一種以情慾為主導的婚姻所取代了，甚至已經不是婚姻，而是隨意的性關係。女人美容成為時尚，為的是吸引男人的目光。很多時候，只要是帥哥、美女，看得順眼，就可以一夜情。這不僅是挪亞時代的特色，也是今日世界的走向。以情慾主導，而非以愛主導，必使世界沉淪。今天這段經文包含四個鮮明的重點：人的罪惡、神的後悔、神的憂傷、人的蒙恩，以下從這四方面來分享。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、人的罪惡</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記六5：「耶和華見人在地上罪惡很大，終日所思想的盡都是惡。」神不僅看見人外在的行為有很大的罪惡，也看見人心裡的思想盡都是惡。「思想」這字有精心籌算、設計的意思。這讓我們看見一個對比，人是神精心設計塑造出來的，人卻用同樣的精心來籌算惡。<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（謝挺，《始於神──創世記靈修日引》，2月10日）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「善惡」的「惡」這個字在世人當中非常普遍。最早出現的四次是在講「分別善惡、知道善惡」，接下來就是在本節經文出現兩次。這也讓我們看見一個對比，「知道善惡」的結果不是使人行善，乃是助長行惡。因為行善的能力在生命樹的果子裡面，也是在神的生命裡面。知道善惡，只是一種知識，而不是能力，正如保羅所說：「立志為善由得我，只是行出來由不得我。」（羅七18）猶太人以法利賽人為代表，華人以新儒家為代表，都是知道善惡而行不出善的人，因為都與神切斷生命關係，只想以律法來規範行事，也是人自己作神的心態。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                人的歷史乃是「人要作神」的歷史，人不要神作神，人要自己作神，結果只有混亂與痛苦。<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（禰浩榮，《挪亞方舟與滅世洪水》，頁12-14）</span>亞當面對吃分別善惡果的抉擇時，作了審判官，認為神說謊、撒旦講的才是對的，因此吃了禁果。該隱獻祭的心態是自己方便就好，而不管神喜悅的是甚麼。該隱以自己為神，所以就因忌妒而殺了亞伯，隨意剝奪弟弟的生命。該隱的後裔逐漸忘了神的存在，以致產生立名、多妻、科技、報復等人本的文化。塞特的後裔僅有一小支保有敬虔的生命，大部分也跟隨該隱後裔的人本文化，以致到了挪亞的時候，許多人放縱情慾，隨意選取美貌女子為妻（創六1-2），最終導致神的審判（創六5-7）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這正像孔子所說：「《春秋》之中，弒君三十六，亡國五十二，諸侯奔走不得保其社稷者不可勝數。察其所以，皆失其本已。故易曰：『失之毫釐，差之千里』。故曰：『臣弒君，子弒父，非一旦一夕之故也，其漸久矣。』」<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（《史記．太史公自序第七十》，馬持盈註，《史記今註》，頁3355-3356）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                孔子所說的「本」，有人認為是指仁義，但孔子很可能是指上帝<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（莊東傑，《跨越鴻溝》，頁267）</span>，因為失「仁義」之先，更根本的是失去「上帝」。而且孔子曾說：「夫禮，先王以承天之道，以治人之情，故失之者必死，得之者必生。」（禮記．禮運）「禮」指禮經內容，包含對神的獻祭之禮與對人的五倫之禮。又說：「祀帝於郊，敬之至也。」（禮記．禮器）這些都說明，孔子非常看重人跟神的關係。
              </p>
              <p className="text-gray-700 leading-relaxed">
                洪水之前，洪水之後，大多數的人類，都走了相同的路，先離棄神，想自己作神，於是掉入難以自拔的罪惡漩渦中，最後神只好以拯救與審判來收拾殘局。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、神的後悔</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記六5-7這段經文有兩個關於神的心情的描寫，就是「神的後悔」，與「神的憂傷」，而這都跟第一段所說的「人的罪惡」相關。以下先看「神的後悔」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這段聖經兩次講到神後悔，這跟我們理解的神的屬性有些衝突，因為撒母耳記上十五29說：「以色列的大能者必不至說謊，也不至後悔；因為他迥非世人，決不後悔。」這裡兩次說，神不後悔。所用的字與創世記六5-7後悔的原文是相同的。撒母耳記那句話的前後，有兩次說到「神後悔立掃羅為王」（撒上十五11、35）。這樣，神到底會不會後悔？可不可以後悔？
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「後悔」的原文出現多次，意思很廣，有得安慰、得紓解、遺憾、同情、憐憫、悲傷、憂傷、後悔等意思。創世記五29：「給他起名叫挪亞，說：這個兒子必為我們的操作和手中的勞苦安慰我們；這操作勞苦是因為耶和華咒詛地。」這裡的「安慰」用的正是同一個字。這字翻譯為後悔時，既用在講神的後悔，也用在講人的後悔。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這樣看來，不是聖經內容的問題，而是翻譯時選用詞彙的問題。中文的「後悔」這個詞，本來就有犯錯的涵義在裡面，犯錯了才會後悔。既然如此，「後悔」這個詞就只能用來講人，不能用來講神。原文這個字用來講神、講人都可以，表示這字與「後悔」相似但不相等，如何翻譯，要看上下文而定。或許需要立一個新詞，有後悔的意思卻又沒犯錯。好像「忌妒」在中文有不好的涵義，同一個原文用在神，就譯為「忌邪」。比較簡單的作法，當講到神有類似後悔的情況，可譯為遺憾、憂傷、轉意，因為遺憾、憂傷、轉意沒有犯錯的含意。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這如同「穹蒼」的例子，創世記一6不可譯為穹蒼，要譯為空間或空氣才可以，同一個希伯來文要翻譯成什麼中文，並非都一樣，乃要被上下文約束。
              </p>
              <p className="text-gray-700 leading-relaxed">
                所以創世記六5-7可重譯為：「5耶和華見人在地上罪惡很大，終日所思想的盡都是惡，6耶和華就遺憾造人在地上，心中憂傷。7耶和華說：我要將所造的人和走獸，並昆蟲，以及空中的飛鳥，都從地上除滅，因為我造他們很遺憾。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、神的憂傷</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                神心情的另外一個表達，在創世記六6，說到「神心中憂傷」。「憂傷」這個字，可指憂愁、憂悶、受艱苦、擔憂、損傷等。這是情感非常豐富的一個字，但全部是負面的情緒。為了世人愈來愈嚴重的罪，神考慮要審判那世代的人類，為此神非常憂傷。這個情緒，我們在預備釘十架的耶穌身上可以看到。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                馬太福音廿六36-38：「36耶穌同門徒來到一個地方，名叫客西馬尼，就對他們說：你們坐在這裡，等我到那邊去禱告。37於是帶著彼得和西庇太的兩個兒子同去，就憂愁起來，極其難過，38便對他們說：我心裡甚是憂傷，幾乎要死；你們在這裡等候，和我一同儆醒。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                神的憂傷，來自於將要與自己所造、所深愛的人永遠隔絕了。耶穌的憂傷，來自於將要在十字架上被所愛的父完全離棄，而被神離棄乃是由於世人的罪。為了處理人的罪，也為了滿足神的愛，神甘願犧牲自己的獨生子，來為世人死在十字架上。耶穌死在十架上，有聖子耶穌的憂傷，也有父神的憂傷。因著神是公義的，神必須施行審判，所以神有極大的憂傷。但也因著神是慈愛的，他藉著讓獨生子耶穌基督在十架上承擔憂傷痛苦，來拯救世人。如約翰福音三16-17所說：「16神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不至滅亡，反得永生。17因為神差他的兒子降世，不是要定世人的罪（或作：審判世人；下同），乃是要叫世人因他得救。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">肆、人的蒙恩</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                面對世人普遍而強大的罪惡，神不得不以大洪水施行審判，因此神處在極大的憂傷之中。但同時神也提供了拯救的辦法，就是方舟。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記六8開始說到這個拯救的計畫：「唯有挪亞在耶和華眼前蒙恩。」蒙恩是神的恩典。下一章會講到挪亞是義人、完全人、與神同行（創六9），這可能跟挪亞父母的敬虔榜樣有關，可能跟挪亞自己的屬靈追求有關，但最重要是出於神的恩典，所以神在第八節先說到「唯有挪亞在耶和華眼前蒙恩」。神要拯救一群人，先要使一個人蒙恩。如同神使亞伯拉罕蒙恩，通過他及他的後裔，要使萬國得福；神使大衛蒙恩，通過他及他的後裔要使神的百姓得拯救。同樣的原則，神使挪亞蒙恩，為要使他的全家進方舟，而能開展未來的新世代。
              </p>
              <p className="text-gray-700 leading-relaxed">
                今天我們這個人蒙恩，並非因為自己多好，也絕非僅為自己得救，乃是為了成為恩典的導管，將救恩帶入家庭、公司、學校、社區、城市，甚至國家。神使用腓力將福音傳給埃提阿伯（衣索匹亞）的太監（徒八26-39），通過這位太監，再把福音傳給衣索匹亞百姓。神過去如何使用這位太監，今天也能使用我們，來改變我們的國家。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                我們看到人的罪惡，也看到神的憂傷，最後看到，在神的大愛之下，人蒙恩得救，這是何等奇妙！我們在罪惡之中，神是公義的，一定要審判；但神也是慈愛的，一定要拯救。羔羊與方舟的救恩已經預備了，就在乎我們自由意志的抉擇，我們願意接受耶穌基督的救恩，就成為蒙恩的人。我們成為蒙恩的人，就接著成為神恩典的導管，去使更多的人蒙恩。這世代許多人在罪惡的洪流之中，至終會在審判中滅亡；但凡願意來投靠耶穌基督的人，都將成為蒙恩的人及神恩典的導管。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 重點整理 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-sky-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">重點整理</span>
          </div>
          {expanded['summary'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['summary'] && (
          <div className="p-5 bg-white">
            <ul className="space-y-3">
              {[
                '本章四個重點：人的罪惡、神的後悔、神的憂傷、人的蒙恩；引爆點是以情慾主導取代以愛主導的婚姻——健康的婚姻乃社會安定的基礎。',
                '人的罪惡：人是神精心設計的，人卻用同樣的精心籌算惡；「知道善惡」只是知識而非能力，反助長行惡；人的歷史是「人要作神」的歷史，孔子也說失其「本」則亡。',
                '神的「後悔」是翻譯選詞的問題：原文意思很廣（安慰、遺憾、憐憫、轉意等），用於神時宜譯為遺憾、憂傷、轉意，因中文「後悔」含犯錯之意，神並不犯錯（撒上十五29）。',
                '神的憂傷來自將要與所造所愛的人永遠隔絕；耶穌在客西馬尼「甚是憂傷，幾乎要死」——十架上有聖子的憂傷，也有父神的憂傷；神以獨生子承擔憂傷痛苦來拯救世人（約三16-17）。',
                '人的蒙恩：神要拯救一群人，先使一個人蒙恩（挪亞、亞伯拉罕、大衛都是如此）；蒙恩不是因為自己多好，也不僅為自己得救，乃是要成為恩典的導管。',
                '神是公義的，一定要審判；神也是慈愛的，一定要拯救——羔羊與方舟的救恩已預備好，在乎人自由意志的抉擇。',
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

      {/* 分享題目 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-yellow-50 hover:from-amber-100 hover:to-yellow-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">分享題目</span>
          </div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && (
          <div className="p-5 bg-white space-y-4">
            {[
              '洪水之前，多數人的「心」是在甚麼情況中？今天的世界有何相似之處？',
              '神的「後悔」跟人的「後悔」有何異同？有別的經文說，神不會後悔，為了彼此不衝突，最好應怎樣翻譯「神後悔」這種經文？',
              '聖經中，聖父與聖子分別為了什麼事而憂傷？現今神可能會為何事憂傷？',
              '挪亞蒙恩的原因是甚麼？神使他蒙恩包含了要使用他作為福音使者，今天你的蒙恩與挪亞的蒙恩有何相似之處？',
            ].map((q, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0 text-lg">{i + 1}.</span>
                <p className="text-gray-700 leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
