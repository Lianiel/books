import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book37Ch5() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-fuchsia-700 to-purple-700 bg-clip-text text-transparent">第五講</h1>
        <h2 className="text-xl font-semibold text-gray-700">讓耶穌透過你活出來</h2>
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
              妮塔在這最後一講開場說，今天的信息延續前幾天的主題——如何在聖靈裡持守復興，並談論復興最終要把我們引向何處。她提醒，即將到來的復興會比過去更大更高，是為了預備新婦迎接新郎的再臨；若把復興最高的心意誤解為只是失喪者得救、神跡奇事發生，就會完全錯失神的心意。她也肯定江秀琴牧師多年來教導的內在生活真理，已經預備會眾更容易領受接下來的信息。
            </p>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">一、帶領許多兒子進入榮耀——成熟兒子的呼召</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔引希伯來書二章10節：「原來那為萬物所屬、為萬物所本的，要領許多的兒子進榮耀裡去，使救他們的元帥因受苦難得以完全，本是合宜的」，並引羅馬書八章21-23節「受造之物仍然指望脫離敗壞的轄制，得享神兒女自由的榮耀……等候得著兒子的名分」，指出這一切指向一個核心目的：帶領許多兒子進入榮耀。她也引希伯來書七章11節論到麥基洗德等次的祭司職分，說明神與人之間存在一種「完美關係」的可能性——神預備要把人的信心帶到完全的地步，打開一扇門，使人成為「成熟的兒子」。她指出，這次復興會傾倒一個以賽亞書六十一章所描述的「禧年恩膏」，主要成就兩件事：打開人的心思，並使人明白神恩召的指望——她引以弗所書一章17-20節，說明保羅所講的「呼召」並非事工上的呼召，而是使人真知道神、明白祂在聖徒中所得基業何等豐盛榮耀的啟示之靈。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她特別區分「成為神的兒子」與「成為神成熟的兒子」是兩回事——後者是一種跨越式的成熟，是從屬魂的生命進入耶穌的生命。她提醒，與耶穌同行絕不需要害怕困難，肉體或許會有不適、魂或許會有攪擾，但那只是因為人還不明白：真正的自己並非眼前所見的，而是魂裡面那個靈；身體只是地上暫時的帳幕，在復活時會被轉變成榮耀的身體——若屬於耶穌基督，沒有任何事、任何方法能真正傷害到人。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">二、羅馬書八章28-30節——神計畫中的完整鏈條</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔引羅馬書八章28-30節：「我們曉得萬事都互相效力，叫愛神的人得益處……預先所定下的人又召他們來，所召來的人又稱他們為義，所稱為義的人又叫他們得榮耀」，並提出她自己對這段經文的理解：許多人以為這裡所說的「榮耀」只指向天堂，但她認為神的呼召其實比這更高——是要人的身體、靈、魂與神合一同行，這是一個極高、極聖潔、卻不容易達到的狀態，許多基督徒終其一生都未能真正進入。她說，耶穌深知這一點，因此願意透過釋放禧年的恩膏，幫助人行走在原本未曾想過、未曾達到的高度。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">三、耶穌變換形像的異象——活的真理、神聖的愛、喜樂與平安</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔分享一次耶穌向她顯現、逐步變換形像的異象。她首先看見從耶穌裡面散發出「活的道」——不只是經文本身，而是經文所帶出的、充滿活力運行在祂全身的生命；接著顯現的是神聖的愛，她坦言很難描述這種愛的樣貌，只能說耶穌本身就是神的聖愛，這愛帶著極大的力量，如花崗岩般堅固穩定，卻同時又極其柔和良善。當這神聖的愛漸漸退去，接著顯現的是極大的喜樂——她形容那喜樂輕盈得像氦氣氣球一般，她因此忍不住笑著對主說：「祢的喜樂怎麼像泡泡一樣冒出來，我都不知道祢這麼輕還能在地上走路。」喜樂退去後，接著湧上來的是超自然的平安，正如耶穌所應許「我所賜給你們的平安，不是世人所給的」；接著顯現的是忍耐、恩慈、良善、信實等各具特質的美德，合在一起正是聖靈的果子，是神本性的具體展現。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她描述，這個持續變換的異象結束時，耶穌對她說：「妮塔，你來站在我旁邊。」她走過去，感覺祂的手環抱住她的腰，那一刻，她感覺自己屬人的本性不斷從腳底流出、離去——一切阻擋聖靈果子的舊本性完全離開她。她引加拉太書五章19-21節列出的情慾之事清單，並引雅各書二章10節「凡遵守全律法的，只在一條上跌倒，他就是犯了眾條」，說明這些屬肉體的表現雖然她自己當下並未實際去做，卻仍源自每個基督徒裡面亞當夏娃墮落後所遺留的罪性；當這一切被倒空，耶穌裡面所充滿的愛、喜樂、平安、良善、仁慈便開始充滿她，使她在主裡被提升到一個地步，甚至感覺不到自己是個「人」——她強調，這與今天教會普遍所處的光景，是白天與黑夜般的差別。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">四、新造的人——耶穌透過你活出來，而非你為祂而活</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說，這正是「新造的人」真正的樣式：一個人肉身的殿宇卻充滿神的榮耀，耶穌完全佔有這個人——不只是得救時主的靈住在人的靈裡，而是主的靈進到人的魂裡面，把罪性完全潔淨，完全佔有這人的魂。她說，這樣的人不再只是「為基督而活的基督徒」，而是耶穌基督親自住在裡面、透過這個人活出來；她引以賽亞書十一章2節提到的神七靈，形容那天所經歷的正是這樣的轉變：她的心思不再是自己的心思，而是神的心思；她的心不再是自己的心，而是基督的心在她裡面；她的思想不再是「一個基督徒為基督而活」，而是主耶穌自己的思想。她坦言，今天教會領袖普遍的問題，是不明白人可以在地上活出屬天的生命——這不僅是一種可能，更是每個信徒被呼召要進入的生命，正是耶穌釘十字架所要帶給人的目的。她提到自己曾與江秀琴牧師分享這樣的生命光景，牧師表示明白，並向會眾推薦了羅炳深師母所著的《榮耀光輝》一書，指出那正是活在這樣榮耀生命裡的見證，而通往這樣生命最基礎的第一步，正是持續操練內在生活。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">五、西奈山的異象——神的話語進入人魂的最深處</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔分享一個關於摩西日子的異象：神在西奈山降臨頒布律法時，祂所說的每一句話都在空中化為希伯來文字，包裹住山腳下等候的每一個以色列人，不只是包圍，更是深深進入每個人魂的最深處，使他們在那短暫的時刻，完全被提升進入屬靈的領域、能用神的眼光看世界；只是這樣的經歷在那一刻結束後，眾人便恢復原有的樣式。她說，神要把同樣的事帶到今天這個時刻——不僅外邦教會，也包括猶太人的教會，都要被帶到這樣的至高之處，這是史無前例、極具紀念價值的工作。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">六、末世神跡與神軍隊的興起</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說，神接下來要做的事情剛剛開始，會有各樣神跡奇事在全地運行，一方面吸引需要神的人的注意力，一方面釋放教會從道德掙扎、情緒問題、傷害與疾病中得自由。她分享自己得救第一年，神就告訴她，在這場偉大的復興中，神的百姓將沒有一個人生病，這些醫治神跡也會打開以色列人的眼睛，使他們開始尋求彌賽亞。她相信，以賽亞書六十一章禧年的恩膏將被釋放，使信徒的生命能達到「不是我活，而是基督在我裡面活出來」的高度——祂的愛、喜樂、平安要藉著信徒向天父活出來，興起一支能勝過黑暗權勢、拆毀堅固營壘的軍隊，醫院與精神病院將被清空。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她延續前幾講提到的颶風話題，表示自己相信，當神的軍隊在地上行走，將有能力勝過颶風、地震、龍捲風等各樣災難——她提到自己曾在特定城市服事時，憑神的指示攔阻龍捲風，也曾與江牧師和部分會眾一起，在神的帶領下攔阻加州一次預報中的地震。她強調，這一切之所以能成就，關鍵在於神使人的魂裡充滿亮光與聰明，讓原本看似太大太難的事，變得可以承擔；但她鄭重提醒，若在即將到來的復興中，人單單專注於神跡奇事本身，就會錯失神所預備最好的部分——真正該專注培育的，是愛、喜樂、平安、謙卑、仁慈、柔和這些內在的品格與神的本性，神跡奇事自然會發生，因為神的話必要成就，但焦點應當放在效法基督的品格上。
              </p>
              <p className="text-gray-700 leading-relaxed">
                最後，她分享一個異象：她在靈裡與摩西面對面，看見他臉上散發出如當年下山時一般的榮光，美麗到令人驚異。她問摩西為何以這樣的形像向她顯現，摩西回答：「在末世會有像摩西一樣的人在地上行走，他們身上所散發出的榮耀，就像摩西身上所散發的一樣；也有一些人像耶穌一樣，行走在這樣極致的榮耀裡——這是不常見的，所以會有這兩類人。」整個五講的教導，就在這樣的異象與敬拜聲中，帶領全場安靜下來一同敬拜神的榮耀同在。
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
                '這一講的核心信息：即將到來的復興最終的目的，是要帶領許多兒子進入「成熟兒子」的榮耀，而不僅僅是失喪者得救、神跡奇事發生。',
                '耶穌變換形像的異象——活的道、神聖的愛、喜樂、平安、聖靈的果子——描繪了信徒被聖靈充滿、屬肉體的本性被倒空後的樣式。',
                '「新造的人」的核心是：不再只是「為基督而活」，而是「耶穌基督透過你活出來」——這是每個信徒都被呼召進入、卻少有人真正達到的生命光景。',
                '西奈山的異象提醒我們，神的話語有能力進入人魂的最深處，使人被提升到屬靈的領域，用神的眼光看世界。',
                '妮塔鄭重提醒：若在復興中單單專注神跡奇事，就會錯失神最好的心意——真正該培育的是像基督一樣的品格：愛、喜樂、平安、謙卑、仁慈、柔和。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「攔阻颶風、地震、龍捲風」的主張，該如何理性看待？</h4>
              <p className="text-gray-700 leading-relaxed">
                這一講延續了本書系（也包括姊妹作《深度禱告學》）中反覆出現的主題：相信禱告與屬靈爭戰能直接影響天氣與自然災害。聖經確實記載先知以利亞禱告使天不下雨、後又求雨（雅各書五章17-18節），顯示神有時確實會透過人的禱告介入自然現象，但這類記載在聖經中是特殊蒙召先知的個別事件，不是普遍適用的操作公式。讀者應對這類個人見證保持審慎的態度：既不必全盤否定神介入自然界的可能性，也不宜把「只要有信心、禱告，就必然能攔阻任何自然災害」當作可以隨意套用的原則——過度強調這類神跡本身，也正好與這一講結尾自己所提醒的「不要單單專注神跡奇事」形成微妙的張力，值得讀者自己留意分辨。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「耶穌透過你活出來，你不再感覺自己是個人」，這與健康的自我認同如何協調？</h4>
              <p className="text-gray-700 leading-relaxed">
                這個概念呼應了加拉太書二章20節「現在活著的不再是我，乃是基督在我裡面活著」，是歷代基督徒靈修傳統中反覆探討的深刻主題（可參考十字若望、勞倫斯弟兄等靈修作家的類似描述）。但如同[[project_book36_progress]]中討論過的類似經歷，讀者不必以「感覺不到自我的存在」作為衡量屬靈是否成熟的標準——多數信徒終其一生對這種合一的經歷程度深淺不一，這是一個持續一生的成聖過程（腓立比書一章6節），而非一次性、可以被明確判定「達成」或「未達成」的門檻。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「成熟兒子」神學與傳統救恩論的關係</h4>
              <p className="text-gray-700 leading-relaxed">
                「成熟兒子」（Manifest Sons of God）的教導在靈恩派歷史中曾引發不少神學討論，部分傳統教會對此持保留態度，擔心過度強調「達到某種屬靈高度」可能模糊因信稱義、單憑恩典得救的核心教義。讀者在閱讀這類教導時，可以把重點放在其中呼籲「活出基督品格、被聖靈更新生命」的部分（這與聖經整體教導一致），同時對其中較獨特的神學框架保持自己的判斷空間，不必照單全收整套術語體系。
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
              '「不再是你為基督而活，而是基督透過你活出來」——這句話對你目前的信仰生活方式，帶來什麼樣的挑戰或反思？',
              '妮塔提醒，若復興中單單專注神跡奇事，就會錯失神最好的心意。你認為自己更容易被神跡吸引，還是更渴望品格的塑造？',
              '加拉太書五章19-21節列出的情慾之事，哪一項是你目前仍在與之爭戰的？',
              '回顧整本《復興的奧秘》五講的內容，哪一講對你觸動最深？你打算具體如何回應？',
              '「耶穌透過你活出來」是一生持續的過程，而非一次性的門檻。你今天可以踏出的第一小步是什麼？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 默想以弗所書一章17-20節</h4>
              <p className="text-gray-700 mb-2">通讀這段經文，求神開啟你心中的眼睛，明白祂恩召的指望；寫下一段你對「更深認識神」而非「更多追求恩賜」的具體禱告。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🍇 逐項檢視聖靈的果子</h4>
              <p className="text-gray-700 mb-2">
                對照加拉太書五章22-23節的九項果子（仁愛、喜樂、和平、忍耐、恩慈、良善、信實、溫柔、節制），誠實為自己打分，選出最需要操練的一項，本週具體實踐。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📚 整合五講的整體回顧</h4>
              <p className="text-gray-700 mb-2">
                花一段時間回顧《復興的奧秘》整本書五講的內容（神賜下復興的目的、單單愛主你的神、在愛中行事的信心、存謙卑的心與神同行、讓耶穌透過你活出來），寫下屬於自己的一段總結與委身禱告。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主耶穌，我渴望不再只是為祢而活，而是讓祢自己透過我活出來。求祢用祢的話語進入我魂的最深處，倒空我裡面一切屬肉體的本性，用祢的愛、喜樂、平安、良善充滿我。求祢帶領我進入成熟兒子的榮耀，也使我單單專注於祢的本性與品格，勝過單單追求神跡奇事。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
