import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book36Ch15() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-fuchsia-700 to-purple-700 bg-clip-text text-transparent">第十五講</h1>
        <h2 className="text-xl font-semibold text-gray-700">預備自己和教會來盛裝神</h2>
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
              妮塔在這最後一講開場說明，因著這幾天主不斷以超乎預期的方式臨到、打斷原本的教學安排，許多原本想分享的內容還沒機會講完；她決定這一講的話語教導提早結束，把更多時間留給服侍與禱告。她邀請大家一起翻到以弗所書三章16-21節，這一講將以一連串禱告經文作結，鼓勵學員把這些經文轉化成為自己、也為教會代求的禱告。
            </p>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">一、以弗所書三章——剛強內在的人，好盛裝神的愛</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔引以弗所書三章16-21節：「求他按著他豐盛的榮耀，藉著他的靈，叫你們心裡的力量剛強起來……便叫神一切所充滿的，充滿了你們。」她解釋，神的愛是一種活的能力，人目前魂的容量無法完全盛裝這樣的愛，因此需要聖靈在人裡面持續做工，才能成為盛裝神愛的器皿。她分享自己初信主時的經歷：曾被神的愛完全淹沒，熱切禱告一小時，求神將祂一切的愛都毫無保留地澆灌在她身上；神最後溫柔地回應：「妮塔，我不能這麼做，按你所求的，你的身體會爆炸。」她以此說明，神的愛本質浩大，人需要被恩典的靈預備妥當才能盛裝——承載神愛的容量越大，就越能盛裝神自己。她鼓勵學員常用這段經文為自己與教會禱告。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">二、歌羅西書一章——為屬靈的智慧與悟性禱告</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔引歌羅西書一章9-11節：「願你們在一切屬靈的智慧悟性上，滿心知道神的旨意……照他榮耀的權能，得以在各樣的力上加力。」她解釋，神說話的方式與人不同——祂所釋放的每一句話，都是祂生命的一部分；因此即便只是領受神的一句話，也是在領受祂自己活的本質，這正是為什麼人的靈需要被預備好來盛裝。她分享自己的經歷：每當神對她說一句話，整個人便彷彿被擴張到永恆的邊緣，需要花上數小時才能消化吸收那句話。她鼓勵學員按這段經文，為自己與教會祈求智慧、知識、洞察力、悟性與屬靈的分辨力。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">三、詩篇八十六篇與出埃及記三十三章——摩西式的渴求</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔引詩篇八十六篇11節：「耶和華啊，求你將你的道指教我，我要照你的真理行；求你使我專心敬畏你的名」，說明被神親自指引教導的同時，也是祂直接把恩典與榮耀分賜在人裡面的過程——頭腦裡的知識固然重要，但更重要的是心裡與魂裡真實承載神的生命，才能真正行走在所領受的真理中。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她接著引出埃及記三十三章13節，並用擴大版聖經（Amplified Bible）的譯文詳細說明：「求你將你的道指示我，使我可以認識你……漸漸地更深更親密地認識你」。她指出，摩西已經多次經歷神的榮耀，這次所求的並非重複已有的經歷，而是渴望瞻仰神自己的面——那是地上極少數人被允許看見的，需要極大的恩典才能承受。她鼓勵學員以這樣的渴慕為自己和教會禱告，求神建造裡面的人，使人有一天能像摩西那樣瞻仰祂的面。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">四、腓立比書三章——認識基督超越一切</h3>
              <p className="text-gray-700 leading-relaxed">
                由於時間有限，妮塔直接誦讀腓立比書三章8-11節的擴大版譯本：保羅將一切都當作損失，為要得著那超越一切的珍寶——認識基督耶穌；他捨棄一切自己憑遵行律法而得的義，只願意因信基督而得那從神而來的義，一心要更深、更清晰地認識祂、明白祂復活的大能，並甘願在祂的苦難上有份、在生命中持續被模成祂死的形狀，使自己的靈魂從死人中復活。妮塔指出，這段經文所禱告的，正是活在「變相」生命裡的渴望——與認識基督的奇妙相比，世上一切暫時的事物都如同糞土；她鼓勵學員同樣為自己與教會如此禱告：讓神倒空一切自義，用祂的義充滿人，帶人進入變相的生命——這正是「你的國降臨，你的旨意成就」在個人生命與教會群體中真實發生的樣式。
              </p>
              <p className="text-gray-700 leading-relaxed">
                妮塔在這一系列教導的結尾坦言，這幾天她所分享的，關於神自己的內容，其實比具體「如何禱告」的技巧要多得多，並笑說下次的教導安排也許會不一樣。她把最後的時間交給服侍與代求，按江秀琴牧師與瑪緹娜牧師的安排，先為傳道人、牧師、宣教士禱告，再為台灣的原住民禱告，最後為其他與會者個別代禱，整個系列的教導便在這樣的禱告服侍中告一段落。
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
                '以弗所書三章16-21節提醒我們，需要聖靈剛強內在的人，才能承載並盛裝神浩大的愛——這愛的容量遠超人天然的魂所能負荷。',
                '歌羅西書一章9-11節、詩篇八十六篇11節，都指向同一個渴求：不只是頭腦的知識，更是心與魂裡真實承載神的智慧、悟性與生命。',
                '摩西在出埃及記三十三章對「認識神、瞻仰祂面」的渴求，超越了單純見證神榮耀的層次，是這整套教導所指向的終極渴慕。',
                '腓立比書三章8-11節保羅「以認識基督為至寶、視萬事如糞土」的宣告，把整卷書的核心主題——變相的生命——濃縮成一段禱告。',
                '這一系列十五講的教導，最終導向的不是一套「如何禱告」的技巧手冊，而是對神自己性情、聖潔、愛與同在越來越深的認識與渴慕。',
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
              <h4 className="font-semibold text-gray-800 mb-2">回顧全書：如何整合這十五講豐富卻風格多樣的內容？</h4>
              <p className="text-gray-700 leading-relaxed">
                通讀全書會發現，妮塔的教導風格在「聖經注釋式的教導」（如主禱文逐句解析、神的聖潔、屬靈爭戰的三個陷阱）與「高度個人化的異象見證」（如「五百磅耶穌」、海邊新郎新婦的異象）之間交替出現。讀者在整合閱讀時，可以有意識地分開這兩類內容的權重：前者有清楚的經文根據，適合作為禱告與靈修生活的具體指引；後者是講者個人蒙恩的經歷分享，可以作為激勵渴慕神的素材，但不宜當作教義或普遍規範來遵循。這樣的分辨態度，貫穿全書「延伸探討」部分反覆強調的原則，也是研讀任何個人見證性質的屬靈書籍時值得養成的習慣。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「認識基督超越一切」與日常生活的實際張力如何調和？</h4>
              <p className="text-gray-700 leading-relaxed">
                保羅在腓立比書三章的宣告，是在他個人經歷極大苦難與逼迫的處境下寫成的，「以認識基督為至寶」不代表輕看或迴避日常的責任（家庭、工作、健康），保羅自己在其他書信中同樣教導人要「安靜作工，親手做工」（帖撒羅尼迦後書三章12節）。讀者可以把這樣的渴慕理解為生命的核心優先次序，而非要求放棄一切現實生活的責任——真正的「以認識基督為至寶」，往往會使人在日常的責任中活得更有根基、更少被瑣事的焦慮牽動，而不是逃避現實。
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
              '回顧整本《深度禱告學》十五講，哪一講的內容對你的禱告生活帶來最直接、最具體的改變？',
              '以弗所書三章「叫神一切所充滿的，充滿了你們」——你認為自己目前生命中，哪個部分最需要被神的愛與力量剛強起來？',
              '摩西向神求「使我認識你」而非僅僅「使我再看見你的榮耀」——這對你重新定義自己禱告時真正渴求的東西，有什麼提醒？',
              '「以認識基督為至寶，看萬事如糞土」——你生命中最難放下、最捨不得當作損失的是什麼？',
              '整本書結束時,妮塔說「我講關於神的事更多一些」而非教禱告技巧。你認為，認識神本身與學習禱告技巧，兩者的關係是什麼？',
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
              <h4 className="font-semibold text-green-700 mb-2">📜 建立一份「經文禱告清單」</h4>
              <p className="text-gray-700 mb-2">把這一講提到的以弗所書三章16-21節、歌羅西書一章9-11節、詩篇八十六篇11節、出埃及記三十三章13節、腓立比書三章8-11節整理成一份禱告清單，每週固定用其中一段為自己與教會禱告。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📝 回顧整本書，寫下你的「代禱者宣言」</h4>
              <p className="text-gray-700 mb-2">
                花一段時間回顧整本《深度禱告學》十五講的內容，用自己的話寫下一段簡短的「代禱者宣言」——包括你對神的認識、你願意付上的代價、你渴望成為的禱告生命樣式。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🤝 邀請一位同伴一起持續操練</h4>
              <p className="text-gray-700 mb-2">
                找一位信任的屬靈同伴，分享這本書帶給你的觸動，並約定固定時間彼此代禱、彼此提醒，讓這本書的內容不只停留在閱讀，而能真正落實在持續的禱告生活中。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「天父，感謝你藉著這十五講的教導，一次次把我的眼光從『如何禱告』引向『認識你自己』。求你剛強我裡面的人，使我能盛裝你的愛與榮耀。求你賜給我摩西那樣的渴慕——不只是看見你的作為，更是認識你自己。願你的國降臨在我心裡，也降臨在我所屬的教會與這地上。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
