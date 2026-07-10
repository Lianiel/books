import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch37() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第37章</h1>
        <h2 className="text-xl font-semibold text-gray-700">紀念與獻祭</h2>
        <p className="text-gray-500 mt-1">神紀念挪亞和挪亞方舟裡的一切走獸牲畜。神叫風吹地，水勢漸落。　創世記八1</p>
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

            <p className="text-gray-700 leading-relaxed">
              本章分兩大段分享，第一大段是神紀念，第二大段是人獻祭。第一段裡面包含七、八兩章的對照，並簡略整理方舟裡的日子，也說明洪水的去處。第二段主要是講挪亞出方舟後獻祭的事。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、神紀念</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記八1：「神紀念挪亞和挪亞方舟裡的一切走獸牲畜。神叫風吹地，水勢漸落。」這句話好像是一個分水嶺，比較這節經文前一章與後一章的內容，可看到完整的對應。
              </p>
              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200 mb-3 space-y-2">
                <p className="text-gray-700 text-sm leading-relaxed">七章：挪亞全家進方舟，洪水漸漲（創七1，17）。<br />八章：洪水漸退，挪亞全家出方舟（創八1，18）。</p>
                <p className="text-gray-700 text-sm leading-relaxed">七章：「大淵的泉源都裂開了，天上的窗戶也敞開了」（創七11）<br />八章：「淵源和天上的窗戶都閉塞了」（創八2）。</p>
                <p className="text-gray-700 text-sm leading-relaxed">七章：「方舟從地上漂起，……方舟在水面上漂來漂去」（創七17-18）。<br />八章：「方舟停在亞拉臘山上。」（創八4）</p>
                <p className="text-gray-700 text-sm leading-relaxed">七章：「……我要……把我所造的各種活物都從地上除滅。」（創七4）<br />八章：「……凡有血肉的活物，就是飛鳥、牲畜，和一切爬在地上的昆蟲，都要帶出來，叫牠在地上多多滋生，大大興旺。」（創八17）</p>
                <p className="text-gray-700 text-sm leading-relaxed">七章：「凡潔淨的畜類，你要帶七公七母；……空中的飛鳥也要帶七公七母……」（創七2-3）。<br />八章：「挪亞為耶和華築了一座壇，拿各類潔淨的牲畜、飛鳥獻在壇上為燔祭。」（創八20）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                從這些對應可以看到，神有完整的計劃。神降下大水，也挪走大水；神結束一個世代，也開始一個新世代；神審判也施恩，神拆毀也建造；神除滅活物，也使活物滋生興旺；神多帶潔淨的牲畜、飛鳥進方舟，為要使牠們被獻為燔祭。創世記八1：「……神叫風吹地，水勢漸落。」在原文，風與是休息、安定、安息的意思。這是在洪水開始的五個月後，方舟漂流已經一百五十天，這時神讓它停下來，等候水消退，就可以預備出方舟了。方舟裡像墳墓，因為不見天日，活動受限制。方舟也像天堂，因為沒有忌妒紛爭、沒有虐待動物的事，大家都和諧相處，有很好的安息。但這不是最終、最好的結局，這只是一個過程。如同信主得救的人，並非一直在天堂，時候到了，要離開天堂，復活得新身體，進到禧年國度、新天新地，那才是最好的終局。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神紀念，不是本來忘記後來想起來，乃是時候到了，神要做新事了。基督在墳墓裡三天，時候到了，神紀念，使他從死裡復活，離開墳墓。將來我們也都要到墳墓裡，但時候到了，神紀念，就使義人離開墳墓，從死裡復活，進到新世界。如約翰福音五28-29所說：「28……時候要到，凡在墳墓裡的，都要聽見他的聲音，就出來：29行善的，復活得生；作惡的，復活定罪。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                約伯原來在極大的苦難中，時候到了，神紀念，就使他脫離苦境，進入加倍祝福的境界。約伯記四十二10：「約伯為他的朋友祈禱。耶和華就使約伯從苦境（原文是擄掠）轉回，並且耶和華賜給他的比他從前所有的加倍。」我們今天也一樣，所有的苦境都有一個時候，時候到了，我們就要從苦境轉回，得加倍祝福。但過程中，當效法挪亞全家，在那如同墳墓般的方舟中敬拜讚美神。也效法約伯，順服神所給的處境，藉著虔誠迫切的禱告，至終親眼見到神。保羅也勉勵苦難中的聖徒，要忍耐等候神的時候。羅馬書八17-25：「17若是兒女，就是後嗣，是上帝的後嗣，和基督同作後嗣。如果我們和他一同受苦，是要我們和他一同得榮耀。18我認為，現在的苦楚，若比起將來要顯示給我們的榮耀，是不足介意的。19受造之物切望等候上帝的眾子顯出來。20-21因為受造之物屈服在虛空之下，不是自己願意，而是因那使它屈服的叫他如此。但受造之物仍然指望從敗壞的轄制下得釋放，得享上帝兒女榮耀的自由。22我們知道，一切受造之物一同呻吟，一同忍受陣痛，直到如今。23不但如此，就是我們這有聖靈作初熟果子的，也是自己內心呻吟，等候得着兒子的名分，就是我們的身體得救贖。24我們得救是在於盼望；可是看得見的盼望就不是盼望。誰還去盼望他所看得見的呢？25但我們若盼望那看不見的，我們就耐心等候。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                挪亞全家出方舟，所有活物就跟著出方舟，可到廣闊的大地奔馳、繁衍。同樣的，當神的眾子復活得榮耀時，一切受造之物也要脫離轄制，得到自由與榮耀。這是進入禧年國度時，要發生的事。
              </p>

              <div className="mt-4">
                <span className="font-semibold text-indigo-700">一、方舟裡的日子</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">整理一下方舟裡的日子：</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm ml-2">
                  <li>二月十七日挪亞全家進方舟，大淵的泉源裂開，天上的窗戶也敞開（創七11），然後四十晝夜降大雨在地上，淹沒了天下的高山，除滅地上所有活物。</li>
                  <li>三月廿七日，大雨停止，水開始漸退（創七12~23）。地上的水勢浩大共一百五十天（創七24；八3）。</li>
                  <li>七月十七日方舟停在亞拉臘山上，水又漸消。</li>
                  <li>十月一日山頂現出來了（創八4~5）。</li>
                  <li>一月一日地上的水都乾了（創八13）。</li>
                  <li>二月廿七日地都乾了，出方舟（創八14~19）。</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-2">
                  猶太曆一年是三百六十天，所以計算起來在方舟裡的日子，總共是一年又十天，也就是三百七十天。其中下雨出水四十天，水勢浩大一百五十天，地濕至地完全乾是三百七十天。
                </p>
              </div>

              <div className="mt-4">
                <span className="font-semibold text-indigo-700">二、洪水的去處</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-3">
                  洪水流向海洋，所以洪水過後的海洋比以前深廣；而大氣之上的水氣層已不存在，因此洪水過後的雲層比以前稀薄。詩一○四6~9說：「6你用深水遮蓋地面，猶如衣裳；諸水高過山嶺。7你的斥責一發，水便奔逃；你的雷聲一發，水便奔流。8諸山升上，諸谷沉下，歸你為它所安定之地。9你定了界限，使水不能過去，不再轉回遮蓋地面。」此詩篇可以描述創世記一章第三天的創造，但若用來描述大洪水會更貼切，這裡比較像在描述洪水淹沒全地「水高過山嶺」，並有新的造山運動「諸山升上」，還有新的海溝「谷沉下」，新海溝比以前更深，而能容納更多的水。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  中國曾有大禹治水，他所治的水不是洪水，而是洪水過後遺留下來的水；當時陸地上升，也推擠出新的大山，洪水很快向下奔流，但還有很多比較高的水來不及宣洩。大禹距離挪亞時代不遠，許多高山上的水陸續往低處流，氾濫成災。因此大禹挖出疏通的水道，將高山上的水引流至大海，解決了中國的水患。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、人獻祭</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記八20-22：「20挪亞為耶和華築了一座壇，拿各類潔淨的牲畜、飛鳥獻在壇上為燔祭。21耶和華聞那馨香之氣，就心裡說：我不再因人的緣故咒詛地，人從小時心裡懷著惡念，也不再按著我才行的滅各種的活物了。22地還存留的時候，稼穡、寒暑、冬夏、晝夜就永不停息了。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                挪亞所獻的祭，一方面是感恩的平安祭，因蒙神保守脫離洪水；也有贖罪祭的性質，因為：「耶和華聞那馨香之氣，就心裡說：我不再因人的緣故咒詛地，人從小時心裡懷著惡念，也不再按著我才行的滅各種的活物了。」（創八21）神將過去人類所犯的罪一筆勾銷了，從今以後有一個新的開始。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這預表基督的贖罪工作。基督的十字架是燔祭也是贖罪祭，因為基督將自己獻給神，同時也為世人贖罪。我們洗禮時，與基督同死同復活，也有燔祭與贖罪祭雙重意義，一方面得到赦罪之恩，一方面也把自己全然獻給神。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                從亞伯到挪亞，獻祭的事沒有停過，以後挪亞的兒子閃繼續獻祭，並將獻祭的事傳給華人的先祖。在黃帝之前，就有獻祭了。《史記》卷二十八〈封禪書〉第六詳細記載古時天子封禪之處（泰山築土為壇以祭天，報天之功，故曰「封」；泰山下，小山上，除地，報地之功，故曰「禪」，言禪者，神之也）：「管仲曰，古時封泰山禪梁父者七十二家，而夷吾所記者十有二焉。昔無懷氏封泰山，禪云云；虙羲封泰山，禪云云；神農封泰山，禪云云；炎帝封泰山，禪云云；黃帝封泰山，禪亭亭；顓頊封泰山，禪云云；帝嚳封泰山，禪云云；堯封泰山，禪云云；舜封泰山，禪云云；禹封泰山，禪會稽；湯封泰山，禪云云；周成王封泰山，禪社首。」黃帝不是最早的，以年代來看，那位最早的無懷氏有可能是閃的兒子之一。以人口數來看，中華民族長期佔了全世界人口的四分之一，而閃的後代在亞洲發展，佔了全世界人口的二分之一，可推論閃的兒子們，有一半是華人的祖先。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                除了中國字有許多跟獻祭相關的字，還有獻祭的儀式與禱詞，數千年流傳下來。西元十五世紀時，舉行郊祀的場所，由原來的邊界遷到了北京南方。那裡有一個大園子，園內有三個建築物：祈年殿、皇穹宇、圜丘壇。皇穹宇內沒有供奉任何偶像，只在朝北的牆壁上刻了四個大字：「皇天上帝」，顯然郊祀的對象就是那位看不見的造物主上帝。而圜丘壇的獻祭儀式、所用犧牲等幾乎與舊約利未記所記是一致的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                每年冬至皇帝率百官在天壇獻祭。其樂曲之詞載於《大明會典》。祭天大典所用禱詞內容古今相傳，大約一致。這些禱詞被傳承下來，表明了中國人自古以來對上帝的敬畏、尊崇、認罪，也見證了上帝的偉大、慈愛、赦罪恩典。歷代君王一直持守這重要的祭禮，直到清朝1911年被推翻，郊祀——祭天大典才停止。但天壇仍在北京見證著中國的郊祀。其獻祭過程之禱詞舉例並語譯如下：
              </p>
              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200 mb-3 space-y-3">
                <div>
                  <span className="font-semibold text-indigo-800">一、「迎帝神」之詞其中一式</span>
                  <p className="text-gray-700 text-sm mt-1 leading-relaxed">「於昔洪荒之初兮，混濛，五行未運兮，兩曜未明，其中挺立兮，有無容聲，神皇出御兮，始判濁清，立天立地人兮，群物生生。」語譯：「在天地初創的時候，到處都是混沌不明，沒有自然界金木水火土等星的運作，也沒有太陽、月亮的出現，這時候整個世界靜得連一點聲音也沒有，更看不到任何有形的物質。然而一旦神皇（上帝）出來統管，就有了黑暗與光明的分別，祂創造了天地萬物和人類，使萬物世世代代不斷地延續下去。」</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-800">二、獻祭過程吟唱之詞</span>
                  <p className="text-gray-700 text-sm mt-1 leading-relaxed">「群生總總分，悉蒙始恩，人物盡分，於帝仁，群生荷德悉，誰識所從來，於惟皇兮，億兆物之祖真。……」語譯：「萬物的開始，都是因為您施恩的緣故；整個天地人類，都蒙受上帝您的大愛；萬物都虧欠了您的美德，誰知道這些祝福是從那裏來的呢？哦上帝，惟有您才是天地萬物真正的始祖啊！……」</p>
                </div>
                <div>
                  <span className="font-semibold text-indigo-800">三、「送帝神」樂曲之詞</span>
                  <p className="text-gray-700 text-sm mt-1 leading-relaxed">「……寶稱泰號兮，昌有窮量，永固高厚兮，宰御久常，微臣頓首兮，攸沐恩光。」語譯：「……我們都大聲地歡呼您的名字，您的名字是歡呼不盡的。上帝，您永遠堅立著天地，您所統管的地域，會世世代代永存著。我是您微不足道的僕人，我要向您下拜，來蒙受您的大恩及光照。」</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                為何這些中國字與祭天大典的禱詞能夠那麼貼近聖經的真理，在華人當中被流傳下來？其實洪水之後挪亞還活了三百五十年，閃還活了五百多年。當黃帝與倉頡造字時，挪亞、閃可能都還在世，其信仰傳承可以是很清楚準確的。
              </p>
              <p className="text-gray-700 leading-relaxed">
                中國有別於其他國家，是唯一在四千多年當中，國格、文化、信仰都沒有中斷的國家。又因為中國字以形狀為主，不受語言變化影響，所以能記錄信仰真理，不因時代久遠而遺失。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                新約時代，我們不必再用牛羊鴿子獻祭，但我們從信主受洗後，就天天將自己獻為活祭。如同馬丁路德所說，他天天洗禮。因為每天都需要赦罪的恩典，每天也需要把自己全然獻給神，為神而活。不管我們目前的日子是不是像約伯在災難中受苦，或者像挪亞在方舟中不太能做甚麼事，可能神要我們安息等候。我們有一個等候的心，也有一個全然奉獻的心，時候到了，神就引領我們出離苦境，並且將更大蒙福，更大被神使用。
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
                '創世記八1「神紀念挪亞」與七、八兩章多處經文形成完整對應——洪水漸漲對洪水漸退、泉源天窗敞開對閉塞、除滅活物對使活物滋生，顯明神有完整的計劃：審判也施恩，拆毀也建造。',
                '「神紀念」不是遺忘後想起，而是時候到了神要做新事，如同基督復活、義人將來復活、約伯脫離苦境，都是「時候到了，神紀念」的例證，保羅在羅馬書八17-25勉勵在苦難中忍耐等候神的時候。',
                '方舟裡的日子總共三百七十天（猶太曆一年三百六十天又十天），其中下雨出水四十天、水勢浩大一百五十天，方舟停在亞拉臘山、山頂顯現、地漸乾直到出方舟，過程清楚有序。',
                '大洪水過後，海洋更深廣、水氣層消失、雲層變稀薄，並有新的造山運動與新海溝形成，詩篇一○四6-9可貼切描述這番景象；中國大禹治水，處理的正是洪水消退後遺留的水患。',
                '挪亞出方舟後築壇獻上燔祭，蒙神悅納，這預表基督十字架的燔祭與贖罪祭雙重意義；獻祭的傳統由亞伯、挪亞、閃傳承下來，中國自古的封禪祭天與天壇祭詞，內容竟與聖經真理高度吻合，見證閃族信仰的深遠傳承。',
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
              '神紀念挪亞和方舟裡面的動物，開啟了新的世界。如今我們在基督裡被神紀念，我們所盼望的新世界是什麼？',
              '華人文化當中有哪些地方提到對神的獻祭？這個獻祭的行動傳承自誰？預表了甚麼？',
              '以挪亞在方舟裡的日子為榜樣，我們遭遇艱難的處境，當以甚麼態度去面對？你目前的生活，與方舟的日子有何相似之處？可以提出來彼此代禱。',
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
