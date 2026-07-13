import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch2() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第二章</h1>
        <h2 className="text-xl font-semibold text-gray-700">神創造天地</h2>
        <p className="text-gray-500 mt-1"><sup>1</sup>起初，神創造天地　創世記一1</p>
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
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、神／創造者——聖父、聖子、聖靈三位一體神</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「神」的希伯來文是 אֱלֹהִים（Elohim），文法上，這字是複數型態，可指眾神、眾天使，或者是加強語氣的複數，接單數動詞。使用複數型態的神，是強調神的偉大、豐富。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神創造的工作，是只有聖父在做，還是聖子、聖靈也一起做呢？根據創世記一1-3：「起初，神創造天地。地是空虛混沌，淵面黑暗；神的靈運行在水面上。神說，要有光，就有了光。」第二節可以看到聖靈在工作，神的靈就是聖靈。至於「聖子」，則隱藏在第三節的「神說」裡面，神藉著「說」來創造天地，是動詞。對照約翰福音一1-3：「太初有道，道與神同在，道就是神。……萬物是藉著他造的；凡被造的，沒有一樣不是藉著他造的。」神藉著「道」創造萬物，這裡乃是名詞，「道」的希臘文是 λόγος（Logos），英文是 Word，都是「話」的意思。兩邊合起來看，就是神藉「說話」創造萬物。在舊約看不出「說話」是聖子，在新約則很清楚看見是聖子。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                並非到了第二節聖靈才開始工作，也不是到了第三節聖子才開始工作。詩篇卅三6，9可作為佐證：「諸天藉耶和華的命而造，萬象藉他口中的氣而成。……因為他說有，就有，命立，就立。」耶和華的命就是神的話，也是神的道，他口中的氣就是神的靈。因此，在創世記一1聖父、聖子、聖靈就一起進行創造了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                新約還有三處重要經文，都講到聖子基督與聖父一起創造萬有：
              </p>
              <div className="space-y-3 mb-3">
                <div className="bg-indigo-50 rounded-lg p-3 border border-indigo-100">
                  <span className="font-semibold text-indigo-800">歌羅西書一16-17</span>
                  <p className="text-gray-700 text-sm mt-1 leading-relaxed">
                    「因為萬有都是靠他造的，無論是天上的，地上的；能看見的，不能看見的；或是有位的，主治的，執政的，掌權的；一概都是藉著他造的，又是為他造的。他在萬有之先；萬有也靠他而立。」這裡所說的「天上的，地上的；能看見的，不能看見的；或是有位的，主治的，執政的，掌權的」也讓我們清楚看到包括了天使。
                  </p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-3 border border-indigo-100">
                  <span className="font-semibold text-indigo-800">希伯來書一2-3</span>
                  <p className="text-gray-700 text-sm mt-1 leading-relaxed">
                    「就在這末世藉著他兒子曉諭我們；又早已立他為承受萬有的，也曾藉著他創造諸世界。他是神榮耀所發的光輝，是神本體的真像，常用他權能的命令托住萬有。他洗淨了人的罪，就坐在高天至大者的右邊。」這裡本來要講神兒子洗淨人的罪之後，就坐在高天至大者的右邊。但同時強調神兒子曾經參與創造諸世界，現在也托住萬有。可見，聖經在講起初的創造時，會引向終末的拯救；講終末的拯救時，會提到起初的創造。因為二者有相同的本質，一個是創造，一個是新造，二者都只有神能做。
                  </p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-3 border border-indigo-100">
                  <span className="font-semibold text-indigo-800">希伯來書一8-10</span>
                  <p className="text-gray-700 text-sm mt-1 leading-relaxed">
                    「論到子卻說：神啊，你的寶座是永永遠遠的；你的國權是正直的。你喜愛公義，恨惡罪惡；所以神，就是你的神，用喜樂油膏你，勝過膏你的同伴；又說：主啊，你起初立了地的根基；天也是你手所造的。」希伯來書一8-9引用詩篇四十五6-7，那裡提到聖子彌賽亞，稱他為神。希伯來書一10接著引用詩篇一○二25，本來是講耶和華神，但希伯來書的作者在聖靈的感動下，說這是在講聖子基督耶穌。
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                進一步看創世記一26：「神說，我們要照著我們的形像、按著我們的樣式造人。」可看出，神是複數的，神有多位。三位一體的神似乎先經過對話，而後一起進行創造。神跟誰說話，有些學者提出：會不會是天使？但神並不是按天使的形象造人，乃是照神的形象造人，所以「我們」不可能包括天使，只能是神自己。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、創造——前無今有</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創造的希伯來原文是 בָּרָא（bara），創世記第一章裡面，「創造」這個字共出現五次，在三節經文裡面：創世記一1講創造天地，一21講造出大魚，一27講造人、造男造女。這些並不都是無中生有，譬如造人，有使用塵土為材料（創二7）。這個字的通用意思並非無中生有，乃是前無今有。造出新的物、新的事，都可以用 בָּרָא（bara）這個字。<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（艾倫·羅斯，《創造與祝福——創世記註釋與信息》，頁129）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                以賽亞書四十八6-7的用法是一個典型：「……從今以後，我將新事，就是你所不知道的隱密事指示你。這事是現今造的，並非從古就有；在今日以先，你也未曾聽見，……」這個現今造的新事是什麼呢？就是神的救恩，以賽亞書四十二5-7既提到神創造天地，也提到神所預備的救恩：「創造諸天，鋪張穹蒼，將地和地所出的一併鋪開，賜氣息給地上的眾人，又賜靈性給行在其上之人的神耶和華，他如此說：我耶和華憑公義召你，必攙扶你的手，保守你，使你作眾民的中保（中保：原文是約），作外邦人的光，開瞎子的眼，領被囚的出牢獄，領坐黑暗的出監牢。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                新事不完全是正面的事，講到對可拉黨的審判，神也是在創作（bara）新事：「倘若耶和華創作一件新事，使地開口，把他們和一切屬他們的都吞下去，叫他們活活的墜落陰間，你們就明白這些人是藐視耶和華了。」（民十六30）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                有一件事是神特別造（bara）的新事，講到女子的重要性：「耶和華在地上造了一件新事，就是女子護衛男子。」（耶卅一22）大衛犯罪後的禱告，也用到造（bara）：「神啊，求你為我造清潔的心，使我裡面重新有正直（或譯：堅定）的靈。」（詩五十一10）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                從上述例子可看到，בָּרָא（bara）的主詞一定是神，他是創造天地的那一位，也是創作新事的那一位，其內涵有時好像與「轉化」相似，不變的是當神 בָּרָא（bara），一定是新鮮的、突然的、出人意外、不可思議的，顯出神無可比擬的性質。<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（紀博遜，《創世記注釋上冊》，頁28-30）</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                新約時代，基督降生、傳道、死而復活之後，救恩才完整成就。我們在哥林多後書五17看到這個新事，並且使徒保羅用了「創造」這個字：「若有人在基督裡，他就是新造的人，舊事已過，都變成新的了。」在基督裡蒙恩得救的人，乃是新創造的人。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、諸天與地</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                關於神創造天地，詩篇有豐富的表達，例如詩篇八1：「耶和華我們的主啊，你的名在全地何其美！你將你的榮耀彰顯於天。」詩篇十九1：「諸天述說神的榮耀；穹蒼傳揚他的手段。」詩篇一○四5：「將地立在根基上，使地永不動搖。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神所創造的「天」是複數，可以翻譯為「諸天」，可能包含天使，約伯記卅八4，7說到：「我立大地根基時，你在哪裡呢？……那時晨星一同歌唱，神的眾子也都歡呼。」造地之前沒有人，所以這裡的「神的眾子」不會是人，可能是天使。約伯記一6記載：「有一天，神的眾子來侍立在耶和華面前，撒但也來在其中。」按約伯記的用法，神的眾子就是眾天使。因此可以確定，神造地之前，也就是神造諸天的時候，就造了天使。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                諸天除了可包含天使，可能也包含天堂樂園這個靈界的天，保羅提到他曾被提到第三層天，並稱之為樂園（林後十二2-4）。神在地上設立樂園之前，讓天上先有樂園，這符合神做事的法則。不管會幕、聖殿，都是先有天上的，而後才有地上的（來八5，九23-24，代上廿八11-19）。配合保羅的說法，第一層天可能是地球大氣層範圍的天，是第二日的時候造的（創一6-8）；第二層天可能是日、月、眾星所在之處，第四日的時候才完全安置好（創一14-19）。<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（威明頓，《威明頓聖經輔讀（卷上）》，頁34-35）</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                創一章好像是在講神對宇宙的創造，其實最主要是在講神對「地」的預備。<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（黃儀章，《舊約神學——從創造到新創造》，頁7）</span>從第二節開始，就集中講地、然後講人。地與人是明顯的主角，佔聖經最多篇幅；神與天是隱藏的主角，雖然佔比較少的篇幅，但卻是真正左右全局的關鍵。如同啟示錄最多且最明顯的畫面是地上的災難，但主旋律其實是天上的敬拜。一生之久，我們活在地上，要與地連結，但我們同時也要與天連結，活在神面前，才能有得勝的人生。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">肆、「創造」的神蹟本質</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                很多人不了解創造的神蹟本質，懷疑神怎麼可能只用六天就把天地都創造好了。我們要用神學與科學雙重角度來說明這事。關於科學的角度，可以參考孫大程博士所寫的《創世以來的奧秘》、亨利．莫瑞士（Henry M. Morris）所寫的《科學創造論》等書，有更詳細的資料。<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（孫大程，《創世以來的奧秘》，頁29-66。亨利·莫瑞士，《科學創造論》，頁202-204）</span>
              </p>
              <div className="space-y-3">
                {[
                  { title: '創造包含時間：神創造成熟的宇宙與人', desc: '神創造亞當的當下，若依據身高體重皮膚等，藉由科學儀器來測量，可以推測出來亞當的年紀大約二十歲，夏娃的年紀大約十八歲。同理也可以測量宇宙的年齡，所得的答案跟今天一樣，大約一百八十億年，但其實神才在不久前創造了宇宙及人類。原因是，神的創造包含時間。神創造的是成熟的宇宙、成熟的人。只要是創造，必定包含時間。' },
                  { title: '創造包含智慧：各從其類，智慧設計', desc: '神創造菜蔬、樹木、水族、飛鳥、野獸、牲畜、昆蟲的時候，都說到各從其類，這在今天的科學就是DNA，這事顯示了神的智慧設計。各物種的DNA彼此不同，無法跨越，是神為自己所存留的創造證據。' },
                  { title: '創造包含能力：質能守恆，E=MC²', desc: '神所創造的宇宙包含極大的質量，而根據質能守恆定律，可知道是神的能力注入，才轉化出這些物質。愛因斯坦發現質能轉換的公式E=MC²，所以任何物質需要光速平方倍數的能量，才能轉換過來，由此可知神能力的浩大。' },
                  { title: '創造留下證據：五餅二魚留下十二籃', desc: '神的創造留下清楚的證據，正如耶穌所行的另一個創造性神蹟——五餅二魚給五千人吃飽，眾人吃飽後還剩下十二籃的零碎，這是創造後所留下的證據。哥林多後書五17說：「若有人在基督裡，他就是新造的人。」「新造」原文就是「新創造」（καινὴ κτίσις），一個人經歷重生得救後，會知道神的創造是真的，因為神的創造就發生在他身上。也有人經歷創造性的醫治神蹟，也會留下證據。' },
                ].map((item, i) => (
                  <div key={i} className="bg-indigo-50 rounded-lg p-3 border border-indigo-100">
                    <span className="font-semibold text-indigo-800">{i + 1}. {item.title}</span>
                    <p className="text-gray-700 text-sm mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">伍、「創造」所啟示之基本意義</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                不管對創世記第一章的六日，採取甚麼觀點，宇宙是年輕或年老，以下三個關於創造的基本意義是所有基督徒應當有的共識。
              </p>
              <div className="space-y-3">
                {[
                  { title: '宇宙是經由神的創造而開始的，並因神的維持而繼續存在', desc: '創世記第一章，不討論有沒有神，而是直接宣告，神創造天地；並且也看到神繼續維持宇宙萬物的運作。「創造」與「護理（維持）」都重要，若只有創造，而沒有護理，就變成是「自然神論」——神創造後，只設立自然定律讓它自己運轉。那是錯誤的。' },
                  { title: '天地和其中一切皆為上帝所有，物質與心靈皆不應輕視', desc: '神所創造的，包括有形無形的萬有，包括靈界與物質界的存在。所以心靈與物質原來都是好的。二元論者說，心靈是好的，物質是不好的，但聖經的真理強調，在神裡面，二者都是好的；若不在神裡面，二者也都會變成不好。' },
                  { title: '必須劃分創造者與受造者的絕對差別', desc: '我們可以管理、使用受造物，但不能崇拜之，乃要崇拜造物主，並順從他。聖經記載神的創造，就是要表明神是創造者（造物主），而所有的受造者，都與神自己有絕對的差別。這是本質的問題，也是次序的問題。受造物被神創造的時候，本是好的，但若使它的地位高過神，就會變得不好。' },
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-indigo-400 pl-4 py-1 mb-2">
                    <span className="font-semibold text-indigo-800">{i + 1}. {item.title}</span>
                    <p className="text-gray-700 text-sm mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mt-3">
                近代科學之父牛頓是虔誠的基督徒，他研究科學是為了想要更認識神<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（張文亮，《我聽見石頭在唱歌》，頁71-87）</span>。早期的科學家幾乎都是如此，他們研究科學的動機與神學家研究神學的動機是相似的<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（張文亮教授寫三本書——《科學大師的求學戀愛與理念》、《我聽見石頭在唱歌》、《我看到大山小山在跳舞》，完整介紹三批科學大師的理念與信仰。以第一本書為例，寫到信仰的頁數如下：張文亮，《科學大師的求學戀愛與理念》，頁23,33,39,45,54,67,73,84,91,101,108,124,134,144,151,163,172,180,188,198,208）</span>。讓我們藉著創世記的啟示，也更加認識這位創造的主，並委身於他。耶穌說：「愛父母過於愛我的，不配作我的門徒；愛兒女過於愛我的，不配作我的門徒；不背著他的十字架跟從我的，也不配作我的門徒。」（太十37-38）耶穌這話在強調，他就是造物主，我們理當愛他超過一切，專一地來跟隨他。
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
                '「神」（Elohim）是複數型態接單數動詞，強調神的偉大豐富；創世記一1-3已可見聖父（神說）、聖子（道，藏於「神說」中）、聖靈（神的靈運行）一起參與創造，歌羅西一16-17、來一2-3、來一8-10都是新約印證聖子與聖父一同創造萬有的重要經文。',
                '創造的希伯來文「bara」共出現五次，其主詞永遠是神，通用意思不是無中生有，而是「前無今有」；以賽亞書、民數記、耶利米書、詩篇都用這字描述神所做前所未有的新事，哥林多後書五17「新造的人」也是同一概念的延伸。',
                '神所創造的「諸天」是複數，可能包含天使與樂園；創一章雖名為創造天地，實際上以「地」與「人」為敘述主角，神與天則是隱藏卻真正左右全局的關鍵。',
                '創造的神蹟本質有四項：創造包含時間（成熟的宇宙與人）、創造包含智慧（各從其類的DNA設計）、創造包含能力（質能守恆E=MC²）、創造留下證據（五餅二魚的十二籃、重生得救的新造之人）。',
                '創造所啟示的三個基本共識：宇宙因神創造而開始、因神維持而存在（非自然神論）；天地萬物皆屬神所有，物質與心靈都是好的（非二元論）；必須劃分創造者與受造者的絕對差別，只能敬拜造物主。',
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
              '聖父、聖子、聖靈是怎麼一起創造的呢？可以用哪些經文來形容？',
              '神除了創造天地，還創造甚麼？你對神的創造有何經歷？',
              '神創造的諸天可能包含甚麼？神創造的地跟你有何關係？',
              '神的創造所啟示的基本意義有哪些？哪一項你最有感受？試著分享一下。',
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
