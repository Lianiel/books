import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book36Ch14() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-fuchsia-700 to-purple-700 bg-clip-text text-transparent">第十四講</h1>
        <h2 className="text-xl font-semibold text-gray-700">成為基督的新婦</h2>
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
              妮塔提到，前一晚的聚會中，她感受到主耶穌以超乎預期的方式臨到，遲遲不願離開，甚至說：「我不離開，今晚我要做一些事。」她形容那是一波波如洪濤般的臨在，觸摸每個人的心；連她自己也事先不知道主要做什麼，只能放下自己的思想與計畫，讓神的心意執行在眾人當中。這一講便是承接那晚的經歷，再次回到馬太福音六章9-13節的主禱文架構。
            </p>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">一、異象：耶穌與父在榮耀花園中的相交</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔分享一個異象：她看見耶穌從一條兩旁種滿高大成熟樹木、開滿精美花園的美麗道路上走下來，父神榮耀的光輝始終環繞著祂，祂處在極大的喜樂中——那是父向子彰顯自己、與子交通、向子啟示國度的時刻。她描述耶穌的靈被大大擴張，與父暢飲團契的甘甜，臉上散發著超然的榮光；那樣的美麗不屬於地上，而是屬天的美麗，是行走在天父內心深處的花園裡。她說，這段與父相交的時光正是預備耶穌把父的旨意與國度啟示帶到地上；父、子、聖靈之間往返交織的愛，是任何言語都無法完整描述的。她強調，耶穌所行走的領域，與我們今天所行走的領域，是何等的不同。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">二、異象：海邊的新郎與新婦</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔接著分享另一個異象：她看見耶穌將新婦擁在懷中，兩人站在海邊沙灘上，新婦的頭靠在新郎肩上，新郎溫柔而深情地緊緊抱著她。他們右邊有一座通往「超凡榮耀之島」的大橋，那座島上有神國度極大的啟示，新郎與新婦將要在那裡的神的光與愛中一同執掌王權。新郎指著那座橋告訴新婦，時間已經非常近了，兩人即將一起走過那座橋——那一刻，新婦多年的渴望將得著滿足，她將被安置在新郎寶座旁，領受管理列國、看顧神子民所需的智慧。妮塔形容，新婦的心因新郎的愛與話語完全被捕獲，她已忘記自己所付上的代價，心中只有新郎的同在；她像孩子般純淨單純,卻又行走在無法言喻的智慧中。
              </p>
              <p className="text-gray-700 leading-relaxed">
                她說，教會被稱為基督的新婦已是常見的教導，但按今日教會實際行走的方式，多數並未真正走在「新婦」的道路上——她認為，兩千年來，神持續呼召祂的教會成為新婦，但真正回應這個呼召的人始終只是少數；歷世歷代，多數信徒更像是神的孩子，而非新婦。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">三、罪性被挪去——不只佔據靈，更佔據魂</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說，重生、有聖靈內住、心裡有印記，與「完全被神擁有」之間存在極大差別。她認為，神無法住在罪性仍然存在的地方，因此祂必須把罪的本性從屬祂之人的生命中拔除，才能進來完全居住在那本屬於祂的地方；她鼓勵大家不要相信「這是不可能的」這種說法。她再次提及自己「變相」的經歷：當罪的本性被挪去，神不再只是佔據一個基督徒靈的部分,也開始佔據魂的每一個部分,直到神完全擁有這個人，如同祂自己一般——正如耶穌全然是神也全然是人,行走在變相的屬天生命光景裡,屬天的生命佔據祂完全的人性，散發出榮耀的光芒。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">四、新婦身上的裝扮與職分</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔描述異象中的新婦：她穿著鑲滿珍貴寶石的華美禮服，寶石散發著神的榮耀；頭戴的冠冕上，每一個部分——不論黃金或珠寶——都散發著神七靈的榮耀。她極其謙卑，眼中卻迸發著神的火焰，臉上散發榮光，裡面充滿新郎所賜的愛的熱情。妮塔說，這位新婦是由各國各方各族所組成的，反射出神選民的榮美；教會目前正經歷的，是領受這新婦啟示的生產陣痛——這陣痛出於神自己的生命，目的就是為了生出這樣的新婦。
              </p>
              <p className="text-gray-700 leading-relaxed">
                她進一步說明，新婦被賦予的職分是把神的國帶進教會，也被賦予使徒性的權柄與能力，把神所愛的百姓帶入國度。當這樣的新婦服侍神所愛的人，神的榮耀將如江河般透過她湧流，話語被恩典包裹，捆綁人的鎖鏈得以脫落，讓人被帶入若不明白神的恩典就無法進入的成熟度——她認為，過去在特殊聚會中所經歷神彰顯能力、醫治釋放的經歷，其實只是這將要臨到之事的「預嘗」。她總結，新婦的工作就是把神的孩子們帶入成熟，這正是代禱者的呼召：禱告神的國降臨——先降臨在自己裡面，再臨到全教會，最終臨到地上。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">五、以弗所書中教會的豐滿與尚待釋放的奧秘</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔引以弗所書一章13-14節、17-23節：聖靈是我們得基業的憑據；神賜下智慧和啟示的靈，照明人心中的眼睛，使人明白祂恩召的指望、祂在聖徒中基業的豐盛，以及祂向信的人所顯浩大的能力——這能力正是使基督從死裡復活、坐在天上父神右邊的大能大力；教會是基督的身體，是那充滿萬有者所充滿的。她說，比起神跡奇事，更值得注目的是基督本性——祂的溫和、謙卑、智慧——在教會中完全被彰顯：一切虛假被揭穿，隱藏的真理被揭示，父神亙古隱藏的奧秘要釋放進入教會，全世界的黑暗權勢都要因教會所彰顯的能力權柄而震動。
              </p>
              <p className="text-gray-700 leading-relaxed">
                她提出，教會目前正經歷邁向基督千禧年掌權之前必經的「生產陣痛」，鼓勵大家藉著禁食禱告，天天為明白神國度的奧秘向神懇求。她也提出一個較強烈的觀點：不論現今坊間流通哪些書籍、不論信徒過去在教會體系中被教導了什麼，甚至包括當代知名的先知，她相信這些教導觸及的都只是「神國度中最低層次的奧秘」——更高的啟示尚未被普遍釋放出來，唯有當教會懇切呼求，神才會將這樣的啟示釋放，使新婦「從榮耀到榮耀」被轉化。這一講結束前，她提到並非所有聽眾都完全明白她所教導的內容，並表示對神而言，祂盼望每個人都能明白，好使眾人都能在恩典中一同成長。
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
                '教會被稱為基督的新婦是常見的聖經教導（啟示錄十九章7節、二十一章9節），妮塔認為多數信徒仍更像「神的孩子」，尚未真正活出「新婦」的親密與委身。',
                '「新婦」意象所要傳達的核心，是與基督徹底的合一與委身——不只是靈的重生，更是生命全人被神的性情、愛與智慧充滿轉化的過程。',
                '以弗所書一章描繪教會的豐滿與尊貴地位，是「新婦」教導的重要聖經根基：教會是基督的身體，是那充滿萬有者所充滿的。',
                '妮塔強調，教會目前所經歷的能力彰顯只是「預嘗」，真正的呼召是透過禁食禱告持續懇求神國度更深的啟示。',
                '本講內容豐富，涉及大量個人異象與較強烈的論斷性表述，讀者宜以聖經整體啟示為根基，帶著分辨的心領受。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「現今所有教導都只是最低層次的奧秘，更高啟示尚待釋放」這類主張，該如何看待？</h4>
              <p className="text-gray-700 leading-relaxed">
                這是本講中較需要謹慎分辨的部分。聖經教導「先知講道也是這樣有限」（哥林多前書十三章9節），確實提醒任何個人的屬靈認知都不完全；但將自己或當下的教導定位為「超越現今所有教師、包括知名先知」的更高啟示，這類表述在教會歷史上曾多次與偏離正統的異端運動有關，值得讀者格外謹慎。健康的態度是：任何自稱帶來「新的、更高啟示」的教導，都應該用提摩太後書三章16-17節「聖經都是神所默示的，於教訓、督責、使人歸正、教導人學義都是有益的」作為最終檢驗標準——凡與聖經整體啟示、歷代教會普遍認信的核心真理相符的，可以領受；凡建立教義權威凌駕聖經、或要求無條件順服某位教師個人啟示的，都需要提高警覺。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「新婦」與「兒女」的區分，是否意味著信徒之間有等級高低？</h4>
              <p className="text-gray-700 leading-relaxed">
                這與第八講「四種人」的討論類似——用「新婦」描述更深委身的信徒，用意是激勵人渴慕更親密的關係，而非劃分「一等信徒」與「二等信徒」。羅馬書八章14-17節同時使用「神的兒女」與「後嗣」來描述所有信徒的身分，並未暗示部分信徒地位較低。讀者可以把「新婦」教導當作對委身程度的呼召，而非對救恩或神眼中價值的評斷標準——每一個因信基督而重生的人，在神眼中都同樣寶貴、同樣被稱為義。
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
              '你目前信仰生活的樣貌，比較接近「神的孩子」，還是妮塔所描述、更深委身的「新婦」？兩者之間的差距，具體在哪裡？',
              '以弗所書一章描述教會「是那充滿萬有者所充滿的」——這句話對你如何看待自己所屬教會群體的呼召，有什麼提醒？',
              '面對本講中「更高啟示尚待釋放」的主張，你會如何用聖經的整體啟示，來分辨、篩選一個教導是否值得領受？',
              '妮塔強調禁食禱告是懇求神國度奧秘的方式。你過去是否有禁食禱告的操練？這一講對你有什麼激勵或提醒？',
              '「新婦已忘記自己所付上的代價，因為心完全被祂的同在捕捉」——你認為，一個人願意付上重大代價跟隨神，最終的動力應該是什麼？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 默想以弗所書一章17-23節</h4>
              <p className="text-gray-700 mb-2">通讀這段經文，逐句默想「智慧和啟示的靈」「恩召的指望」「基業的豐盛榮耀」「向信的人所顯浩大的能力」這幾個詞，寫下對你而言最有感觸的一句。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🍽️ 嘗試一次短期禁食禱告</h4>
              <p className="text-gray-700 mb-2">
                若你的身體狀況許可，可以嘗試一餐或一天的禁食，專心用這段時間為更深認識神、更深委身於祂禱告，並記錄這段經歷帶給你的感受與反思。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 用聖經檢驗一個你聽過的教導</h4>
              <p className="text-gray-700 mb-2">
                挑選一個你最近聽過、印象深刻的屬靈教導（不限於本書），對照聖經整體的啟示，練習分辨哪些部分有清楚的經文根據，哪些部分是講者個人的詮釋或經歷分享。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，求你光照我，使我明白你要我從『孩子』被帶向『新婦』所付的代價是什麼。求你把罪的本性從我裡面挪去，讓你的性情充滿我。也求你賜給我分辨的靈，使我能用你的話語，篩選一切我所聽見的教導。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
