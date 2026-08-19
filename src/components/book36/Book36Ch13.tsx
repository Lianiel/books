import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book36Ch13() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-fuchsia-700 to-purple-700 bg-clip-text text-transparent">第十三講</h1>
        <h2 className="text-xl font-semibold text-gray-700">與主合而為一</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-fuchsia-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-fuchsia-50 to-purple-50 hover:from-fuchsia-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-fuchsia-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <p className="text-gray-700 leading-relaxed">
              妮塔請大家翻到約翰福音十七章17節、24-26節——耶穌向父神所做的大祭司禱告：「求你用真理使他們成聖……願你所賜給我的人也同我在那裡，叫他們看見你所賜給我的榮耀……使你所愛我的愛在他們裡面，我也在他們裡面。」她說，這一講要延續前面提到與神關係的第四個層次——變相／合一，並分享自己生命中一次真實抵達那個層次的經歷。
            </p>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">一、1989年的異象——「五百磅重的活真理」</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔分享，1989年她獨自一人時，耶穌基督向她顯現。她形容祂看起來「很胖」，像有五百磅重，她一看忍不住笑了出來，對耶穌說：「你真的很胖。」她隨即解釋，那並非字面意義上的肥胖，而是「真理的重量」——五百磅活的真理，是屬天、活著流動的能力，祂的話語本身就是生命，活的真理在祂的靈裡流動。她坦言人間的語言實在找不到恰當的詞來形容這個景象，只能盡力描述。她說，那次造訪中，耶穌渴望向她顯明許多與基督品格有關的事，一一將祂的美德展現出來。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">二、聖靈的果子如何從主裡面散發</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔引加拉太書五章22-23節「聖靈所結的果子，就是仁愛、喜樂、和平、忍耐、恩慈、良善、信實、溫柔、節制」，描述她所看見的景象：神聖的愛開始從耶穌裡面散發、彌漫整個空間；接著是神聖的喜樂，像充了氦氣的氣球般成串的泡泡，在空中輕盈地飄浮；然後是超越一切認知的平安，如同經歷巨大災難後突然被神的平安包裹，讓人確知一切都會沒事；接著祂的忍耐、慈愛、良善、溫柔、謙卑、節制，一一從祂裡面散發出來——正是加拉太書五章所列的聖靈果子。她坦言自己無法用人的語言完整形容這些美德「看起來」是什麼樣子，只能說，它們是如此真實、帶著極大的能力。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">三、「妮塔來站在我旁邊」——自我的消融與被基督充滿</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔描述，正當她站在那裡驚歎敬畏時，耶穌對她說：「妮塔，來站在我旁邊。」她走過去，感覺彷彿有一隻手環抱著她的腰；那一刻，她感覺自己所有屬人的熱情——不論好壞——開始像水從瓶中倒出一般，從她的腳底不斷流出、離去。當這些屬人的熱情完全清空後，耶穌裡面所充滿的一切開始充滿她：她人的愛離開，祂的愛進來取代；她人的喜樂離開，祂的喜樂進來取代；人短暫的平安離開，祂的平安進來取代；祂的忍耐、恩慈、良善也依次充滿了她，正如活的道充滿在耶穌裡面一樣，也充滿在她裡面。她形容那是一種「妮塔這個人離開、耶穌取而代之」的難以置信的經歷。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                耶穌隨後告訴她，她所經歷的正是約翰福音一章14節、16節所記載的：「道成了肉身，住在我們中間……從他豐滿的恩典裡我們都領受了，而且恩上加恩」——從基督的豐滿裡，人得以持續不斷地領受一個又一個的恩典、屬靈的祝福與恩賜。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">四、「你想住在這樣的境界裡嗎？」——付上任何代價的回應</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說，耶穌接著問她：「妮塔，你想住在這樣的境界裡嗎？」她驚訝地回問：「身為一個人，我能活在你裡面、在這樣的境地中嗎？」她形容那時自己已不再有任何屬人的懼怕或熱情，感覺被神完全佔據、完全包圍。她對主說：「神啊，如果祢說這是可能的，我要，我願意為此付上任何代價，不管祢渴望什麼我都給祢。」耶穌回答：「好的，你可以住在這裡。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她解釋，這正是生命中神聖的合一，就是「變相」的生命，被基督完全擁有的意義：不再活在人的驕傲裡，而是行走在屬天的謙卑中；不再經歷人的懼怕，而是行走在神的信心中——她提到，耶穌所說「你們若有信心」，希臘原文真正的意思其實更接近「你要有像神那樣的信心」，正如耶穌深知若命令大山投入海中，它必照做，只是祂從未這樣命令過。她也描述那樣的愛「像磐石、像大山，無法移動也無法穿透」——不再是「你對我重要，因為你讓我感覺良好」的有條件的愛，而是一旦給出就毫不動搖的愛，帶來對神恩寵毫無懷疑的安全感。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">五、通往這境界的鑰匙——禱告、順服、謙卑、愛</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔再次引用第十二講提到約翰·雷克天使造訪的話：「通往神心的唯一道路，就是經由禱告。」她說，通往她所描述的合一境地，同樣唯有透過禱告——一手帶著順服，一手帶著謙卑，同時懷著愛的心腸前行。她坦言，從這裡到那扇門之間有許多功課要學：在禱告中學習忍耐，學習相信神能成就不可能的事，學習在愛中不搖擺地擁抱、護衛神的百姓，也要透過走過一些不容易的地方學習順服——神可能會要求人放棄一些難以放棄的東西，而且這樣的要求往往因人而異，是神量身為每個人預備的功課。
              </p>
              <p className="text-gray-700 leading-relaxed">
                她特別提醒，這條路不會被身邊的人理解——若人人都能理解，那就算不得是十字架；她描述人們可能不會稱讚這樣的委身，反而質疑「你是不是瘋了」，甚至私下議論、試圖「解救」走這條路的人。她說，正是透過這樣不被理解的過程，老我才有機會死去，神才能更多擁有一個人的心。她也坦言，在這段旅程中，人會逐漸明白自己曾多少次讓耶穌傷心——不該有的論斷、該說「是」卻說了「不」、選擇了自己而非愛——但祂對人的愛始終穩固如磐石，祂永遠相信人勝過人相信自己，也永遠渴望人勝過人渴望祂。這一講的最後，妮塔帶領會眾進入一段敬拜與方言禱告，描述會場彷彿充滿天使的同在，如同新郎正在迎娶祂的新婦。
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
                '妮塔以「五百磅活的真理」的異象，形容耶穌話語與生命的分量——這是她個人經歷的形象化描述，重點不在字面畫面，而在「祂的話就是生命」。',
                '加拉太書五章的聖靈果子（仁愛、喜樂、和平、忍耐等）被描述為從基督裡面實際散發出來的屬性，而非僅是理性上的道德清單。',
                '「與主合一」的核心圖像是「自我消融、被基督充滿」——人的愛、喜樂、平安被神的愛、喜樂、平安取代，正如約翰福音一章14、16節「從他的豐滿裡我們都領受了」。',
                '進入這樣的合一境地，代價是願意接受不被人理解、甚至被質疑「瘋了」——但正是這個過程讓老我死去、讓神更多擁有一個人的心。',
                '通往這境地的鑰匙不是特殊的異象經歷，而是禱告、順服、謙卑與愛——這是每一個「願意付代價」的人都能走的路，不是少數人的專利。',
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
              <h4 className="font-semibold text-gray-800 mb-2">如何看待「五百磅耶穌」這類超出常規想像的異象描述？</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔自己也坦言找不到恰當的人間語言形容這個景象，這提醒我們：異象、異夢類的個人屬靈經歷，本質上是講述者試圖用有限的人類語言傳達超越性的體驗，聽者不必糾結於畫面本身的字面合理性，也不需要以「這符不符合我對耶穌形象的想像」作為評判真偽的標準。哥林多後書十二章保羅提到自己「被提到樂園裡，聽見隱秘的言語，是人不可說的」，同樣顯示這類經歷本就帶有難以言傳、因人而異的特質。讀者可以把重點放在這段敘述背後想傳達的信息——基督的話語有真實的生命力與分量——而非糾結於異象細節的字面解讀。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「自我完全消融、被基督取代」的合一觀，與聖經的「成聖」教導如何對照？</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔描述的「妮塔這個人離開，耶穌取而代之」，若照字面理解，容易讓人聯想到一些強調「自我完全消失」的神祕主義傳統，這與聖經教導的成聖過程（是「更新而變化」羅馬書十二章2節，是持續一生的過程，而非人格本身被替換或消滅）需要區分清楚。加拉太書二章20節「現在活著的不再是我，乃是基督在我裡面活著」是保羅常被引用的類似表達，但傳統上理解為生命的主權完全讓給基督、而非個人人格或意識的消失。讀者在追求與神更深合一時，可以把這段見證當作激勵渴慕的語言，而不必以「感覺不到自我」作為衡量屬靈是否成熟的標準。
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
              '「祂的愛像磐石，一旦給出就不再改變」——這句話如何挑戰你過去對神的愛「是否穩定」的懷疑或不安？',
              '妮塔說，走這條合一之路，會經歷不被身邊人理解，甚至被質疑「瘋了」。你是否曾因跟隨神的帶領而經歷過這樣的不理解？',
              '通往合一的鑰匙是「禱告、順服、謙卑、愛」——這四樣中，你覺得自己目前最欠缺操練的是哪一樣？',
              '你如何理解「加拉太書二章20節：現在活著的不再是我，乃是基督在我裡面活著」這句話在你自己生命中的意義？',
              '面對這一講描述的深刻異象經歷，你會如何避免「因為我沒有這樣的經歷,就覺得自己不夠屬靈」的比較心態？',
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
              <h4 className="font-semibold text-green-700 mb-2">📜 默想約翰福音十七章、加拉太書五章22-23節</h4>
              <p className="text-gray-700 mb-2">通讀約翰福音十七章耶穌的大祭司禱告，以及加拉太書五章22-23節聖靈的果子，逐一問自己：這九項果子，哪一項在我生命中最欠缺？</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🕊️ 操練「放下屬人的熱情」</h4>
              <p className="text-gray-700 mb-2">
                找一段安靜的禱告時間，誠實列出你目前生命中「屬人的、暫時的」熱情或依附，一項項在禱告中交託給神，求祂用祂的愛、喜樂、平安取代。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🤝 練習被誤解時仍持守</h4>
              <p className="text-gray-700 mb-2">
                回想一次你因跟隨神而不被身邊人理解的經歷，這一週在禱告中把那段經歷帶到神面前，求祂堅固你的心，不因不被理解而退縮。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主耶穌，禰是如此美麗，禰值得我付上任何代價。求你除去我裡面那些屬人的、短暫的熱情，用你的愛、喜樂、平安、忍耐充滿我。教導我如何在禱告中帶著順服、謙卑、愛，一步步走向與你更深的合一。不管你要什麼，我都願意給你。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
