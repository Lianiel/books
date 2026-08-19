import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book36Ch3() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-fuchsia-700 to-purple-700 bg-clip-text text-transparent">第三講</h1>
        <h2 className="text-xl font-semibold text-gray-700">神成年的兒子</h2>
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
              妮塔請大家翻回以弗所書一章22-23節：「又將萬有服在他的腳下，使他為教會作萬有之首。教會是祂的身體，是那充滿萬有者所充滿的。」她說，在那個身體裡滿了祂的身量，祂使一切都完全，充滿萬有，無處不在，她想接著上一講繼續談「神成年的兒子」。
            </p>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">一、神成年的兒子——稀少卻將要興起的大軍</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說，今天很難找到一個活得像神成年兒子的人——他們確實存在，但非常少。你或許會指著某位有名的聖徒說「這個肯定就是神成年的兒子」，但她坦言，這樣的判斷基本上都是錯的，因為真正達到這樣身量的人非常少、且大多被隱藏，在一般基督徒群體中是看不到的。她說，這只是暫時的，在未來的日子，將有一支大軍出現，就是一群神成年的兒子。她強調：如果沒有一個禱告生活，不可能達到這樣的身量——不管你多麼喜愛讀神的話，都還必須有禱告生活；成為屬靈人的唯一途徑，就是在禱告生活裡訓練和培育自己的靈，離開禱告生活，永遠無法達到這樣的身量。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">二、與神同在不在乎禱告時數的多寡</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔澄清，這不是說一天要禱告五到十個小時。她提到一位歷史上與神合一極深的姐妹（編者按：可能是指蓋恩夫人），她的丈夫只允許她每天禱告半個小時，這是她能給主的全部時間；但因為她明白對主謙卑、降服和絕對順服的重要性，使得她生命的各個層面都能極深地行走在愛中——雖然她沒辦法長時間在內室禱告，卻透過神的恩典和美德，學會行走在神的同在中。妮塔說，這正是我們所有人學會一整天保持神同在的關鍵：你是否願意花時間在內室禱告，或者透過禱告學會一整天保持神的同在，來培育自己成為神成年的兒子？她說，一旦你變得成熟，那遠超過一切執政的、有能力的、主治的權柄和能力都要放在你手裡，你被提升到與基督一起作王掌權的地位。她強調：每個神兒子的目標，是要有一個健康的禱告生活；每個代禱者的目標，是成為神成年的兒子——到那時，你一禱告便看到世界改變，許多事情發生。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">三、屬靈爭戰的兵器——不憑血氣爭戰</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔請大家翻到哥林多後書十章3-6節：「因為我們雖然在血氣中行事，卻不憑著血氣爭戰。我們爭戰的兵器，本不是屬血氣的，乃是在神面前有能力，可以攻破堅固的營壘，將各樣的計謀，各樣攔阻人認識神的那些自高之事一概攻破了，又將人所有的心意奪回，使他都順服基督。並且我已經預備好了，等你們十分順服的時候，要責罰那一切不順服的人。」她問：假如有人冒犯了你，你會怎麼想？會不會產生負面的想法，甚至屬肉體地說「那人真是個混球，我希望他被好好教訓一頓」？她說，如果面對得罪你的人，你能想到的是「今天到底是什麼靈在折磨他」，那才算真正進入這節經文的方向。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說，聖經告訴我們，要越過人一切的軟弱，看見不是肉體血氣、而是邪惡的國度在控制人——神要我們打破屬人的思維，自動想到所發生之事背後屬靈界的實情，不僅如此，還要敏銳到能立即分辨是什麼靈在作怪，不再關注自己受傷的感覺，而是關注那個人被邪靈攻擊所遭受的痛苦，起來對付背後的邪靈。她說，這種反應對基督徒來說應該是再正常不過的——當有這樣的屬靈成熟度，人自然就會想到屬靈的事，而不是屬人的事。她引用保羅的教導：不是與屬血氣的爭戰；如果有人用口中的話與你爭執，不要用口與他們爭執，而是要對抗背後的邪靈——這樣的爭戰兵器，能攻破生命中、他人生命中、教會、城市、州、國家的堅固營壘，拒絕爭吵和理論，攻破各樣攔阻人認識神的自高之事，將心意奪回使人順服基督。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔提醒：當你越深入屬靈爭戰，就越需要有基督美德上的成熟——聖靈的果子在代禱服侍進入成熟階段是非常重要的。她說，如果一個人一直活在悖逆神裡，就沒有能力告訴仇敵牠在抵擋神的旨意，因此關鍵是任何時候都不要進入超過神呼召你進入的爭戰層面，同時也要不斷渴望進到神要你進入的層面，讓神持續煉淨你。她問：怎麼做才能把心思意念從現今的世界轉移到靈界呢？她說，必須同時有讀經和禱告生活——心越多注視神，就越多思想屬靈的事，而不是地上的事；越多讀神的話，心意就越更新變化，從思想人做事的法則，轉向思想神做事的法則。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">四、棄絕屬世的干擾——電視與電腦遊戲的挑戰</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔用一個生活化的例子說明：如果晚上一直看喜愛的電視節目，或坐在電腦前玩喜愛的遊戲，當你想默想屬靈的事時，滿腦子想到的會是什麼？往往是剛才看的節目、玩的遊戲，思維方式已經被世界佔據。她說，想要提升、得著更多神的權柄和能力，就要大大減少、最終完全棄絕這些東西——如果你是電視迷，耶穌大概不會呼召你來阻止一場地震，雖然祂肯定知道在哪裡能找到你，就在電視機前，祂就不會呼召你做你原本被造要做的事。她引用耶穌的教導：不能同時吃主的宴席又吃魔鬼的宴席，不能又愛神又愛瑪門——她坦言，觀看今日大部分電視節目，某種程度上就是在吃魔鬼的宴席，鼓勵大家甚至可以考慮把電視機丟出家門。她也半開玩笑地提到，電腦遊戲和車子似乎是弟兄比姐妹更容易軟弱的兩個領域——當太太在煮飯時，常常會發現先生在玩電腦遊戲，坐在電腦前，不能讓人在神裡面有提升。
              </p>
              <p className="text-gray-700 leading-relaxed">
                妮塔鼓勵大家：如果還是選擇繼續留戀這些東西，就會繼續停留在很基礎的屬靈程度——想要被提升，最簡單的方法就是離開魔鬼的宴席，學會吃神的宴席；每當聖靈感動要棄掉這些東西，就不要因為別人一句勸又走回頭路，要學會放棄那些根本不需要的屬世事物，將自己從浪費時間、精力、毀掉靈性的事情中分別出來。她說，一旦下定決心，就比較容易拒絕那些與神的話相抵觸的原則，也更容易分辨當下屬靈界正在發生什麼事，不需要有人告訴你房間裡有邪靈存在，你會第一個知道；同時也會更敏銳地知道天使何時出現、主何時來到。這一講最後，妮塔請大家起立，帶領大家把生命中屬世的、令人分心的東西帶到十字架前，並說出一段預言性的話語：「我的孩子們，我在這裡就是你的中保和大祭司……靠近我的人，我要求你要聖潔。我會把一切你所需的都給你。但你要潔淨你的手、你的心，以至於我可以無暇無疵、全然美麗地把你獻給神……」
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
                '神成年的兒子非常稀少、且多半隱藏，但將在末後興起成為大軍；達到這樣的屬靈身量，唯一途徑是禱告生活的訓練與培育，沒有其他捷徑。',
                '與神同在的深度不在乎禱告時數的多寡——一位每天只能禱告半小時的姊妹，透過謙卑降服、絕對順服，仍能學會一整天行走在神的同在裡，這對忙碌的現代人是重要的提醒。',
                '屬靈爭戰的兵器不是屬血氣的：面對得罪自己的人，成熟的代禱者會問「是什麼靈在折磨他」，而不是停留在自己受傷的情緒裡，並學會分辨、對付背後真正的攻擊源頭。',
                '心思意念要從屬世轉向屬靈，需要同時倚靠讀經與禱告的生活；持續被電視、電玩等屬世娛樂佔據的心思，很難在關鍵時刻被神使用來成就大事。',
                '真正的屬靈提升，關鍵在於甘心棄絕不必要的屬世事物、把心中攔阻與神親密的東西帶到十字架前——這通常是一個具體、需要下定決心的選擇，而不只是模糊的屬靈渴望。',
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
              <h4 className="font-semibold text-gray-800 mb-2">蓋恩夫人的靈修傳統與「行走在神同在中」</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔提到的這位每天僅能禱告半小時、卻活出極深與神合一的姊妹，很可能指的是十七世紀法國靈修作家蓋恩夫人（Madame Guyon），她所倡導的「內室禱告」與「單純信心的默觀」，強調的正是不在乎禱告時間長短，而在乎心是否持續單純地轉向神。這個傳統對現代忙碌的信徒特別有意義：屬靈的深度不必然與可支配的整段時間成正比，而在於是否學會在有限的時間、甚至日常生活的縫隙中持續與神連結。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「分辨背後的靈」與健康的人際界限如何並存？</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔教導遇到冒犯時，要想到「是什麼靈在折磨對方」而非停留在自己受傷的情緒。這個屬靈爭戰的視角，若操練得宜，能幫助人不被人際衝突困住、生出憐憫而非苦毒；但也需要留意，不能因此忽略對方行為造成的真實傷害，或用「都是邪靈作怪」來迴避設立健康的人際界限、處理實際的關係問題。健康的操練是兩者並存：既屬靈地為對方的捆綁代求，也誠實面對、適當回應對方行為帶來的傷害。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">媒體節制在數位時代的延伸應用</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔對電視、電腦遊戲的提醒是在2006年前後給出的，若放在今天手機、社群媒體、短影音無所不在的處境，這個提醒的適用範圍其實更廣、也更迫切。核心原則不變：什麼佔據你大量的注意力與心思，什麼就會在你想安靜默想屬靈事物時率先浮現。讀者可以把這個原則自行延伸到自己生活中真正佔據心思的事物上，而不必拘泥於電視、電玩這兩個具體項目。
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
              '「神成年的兒子」不在於禱告時數多寡，而在於是否學會一整天保持神的同在。你在忙碌的日常中，如何在有限的時間裡持續與神連結？',
              '回想最近一次被人冒犯的經驗，你當時想的是「這人真討厭」，還是「是什麼在攻擊他」？這一講的教導對你會帶來什麼改變？',
              '你目前的讀經與禱告生活，是否足以讓你的心思意念「從人做事的法則，轉向神做事的法則」？',
              '什麼是你生活中「佔據大量心思」、以至於想安靜默想時第一個浮現的事物（不一定是電視或電玩）？',
              '妮塔說「不能同時吃主的宴席，又吃魔鬼的宴席」。你是否曾經歷過為了追求更深屬靈生命，主動放下某樣東西的經驗？',
              '結尾的預言性話語說「你要潔淨你的手、你的心，以至於我可以無暇無疵地把你獻給神」。這句話對你目前的生命光景，帶出什麼樣的感動或挑戰？',
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
              <h4 className="font-semibold text-green-700 mb-2">⏱️ 操練「零碎時間的同在」</h4>
              <p className="text-gray-700 mb-2">效法蓋恩夫人，本週在通勤、做家事、排隊等零碎時間，練習短短幾句話與神連結（例如「主，我在這裡想你」），而不是只倚靠整段的禱告時間。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 操練「屬靈分辨」而非「情緒反應」</h4>
              <p className="text-gray-700 mb-2">
                下一次被人冒犯或惹怒時，先停下來安靜幾秒，問神：「這背後在發生什麼？」練習用禱告回應，而不是立即用言語反擊。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📵 誠實面對「佔據心思」的事物</h4>
              <p className="text-gray-700 mb-2">
                誠實列出這一週佔據你最多注意力的娛樂或消遣，選一項本週刻意減少使用時間，並用省下的時間安靜親近神，留意這個改變帶來的差異。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，求你潔淨我的手、我的心，讓我能無瑕無疵地被你獻給父神。求你光照我生命中佔據心思、攔阻我親近你的事物，賜給我下定決心棄絕它們的力量。教導我在爭戰中不憑血氣，而是看見背後屬靈的實情，用禰的兵器攻破一切堅固的營壘。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
