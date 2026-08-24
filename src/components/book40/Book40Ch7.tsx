import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Waves, Star, Search, HelpCircle, Check } from 'lucide-react';

const quote = "border-l-4 border-emerald-300 bg-emerald-50 pl-4 py-3 mb-3";
const quoteText = "text-emerald-800 leading-relaxed italic";

export default function Book40Ch7() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-800 to-orange-900 bg-clip-text text-transparent">第七章</h1>
        <h2 className="text-xl font-semibold text-gray-700">第四誡：當守安息日</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          「安息日是為人而設的，人不是為安息日而生的。」（可2:27）
        </p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Waves className="w-5 h-5 text-amber-800 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <p className="text-gray-700 leading-relaxed">
              出埃及記廿章8節：「當記念安息日，守為聖日」。
            </p>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">一、問題思想：新約聖徒是否仍需要遵守安息日？</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                關於這個問題有三個看法：
              </p>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">第一個看法：新約聖徒仍然必須遵守週六安息日</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  他們認為，十誡是新約聖徒仍然需要持守的「道德性律法」，所以，基督徒必須遵守週六安息日。今天，真耶穌教會及基督復臨安息日會的信徒就是遵守週六的安息日，並且他們認為我們違反了第四誡。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">第二種看法：我們不守安息日，只守主日</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  歌羅西書二章16-17節保羅說：「所以不拘在飲食上，或節期、月朔、安息日，都不可讓人論斷你們。這些原是後事的影兒；那形體卻是基督」。他們認為，基督已成就安息日的意義，所以新約的聖徒不需要遵守安息日，只需要守主日。這樣的講法似乎也不能被接受，因為這樣的講法，會讓聖經中上帝道德律的總綱「十誡」，變成了「九誡」。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">第三種看法：守主日就是守安息日</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  筆者認為這一派的看法較為正確。如果我們明白聖經有所謂的「漸進啟示性」，我們會得到一個結論，就是「守安息日的誡命，已演變為守主日的誡命」，因為有關安息日的啟示是「漸漸發展」的：
                </p>

                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-amber-700 mb-1">一、出埃及記二十章11節</p>
                    <p className="text-gray-700 leading-relaxed">
                      「因為六日之內，耶和華造天、地、海和其中的萬物，第七日便安息，所以耶和華賜福給安息日，定為聖日」。在此我們看見，原來安息日的意義是為了「記念神的創造」，讓我們帶著感恩的心，為著上帝為我們所做的，獻上感謝！
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-amber-700 mb-1">二、申命記五章15節</p>
                    <p className="text-gray-700 leading-relaxed">
                      「你也要紀念你在埃及地做過奴僕，耶和華你神用大能的手，和伸出來的膀臂，將你從那裏領出來，因此，耶和華你的神吩咐你守安息日」。這節經文讓我們看見，安息日的意義有了新的發展：就是不僅「記念神的創造」，也要記念「神的救贖」，神設立安息日的目的，是要人放下一切，來到祂的面前，敬拜祂、記念祂的恩典。對以色列人而言，神的創造固然重要，但是神帶領他們出埃及，更是值得感恩和慶祝的事。所以，我們看見，安息日的意義是「逐漸發展」的。
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-amber-700 mb-1">三、詩篇一百一十八篇24節</p>
                    <p className="text-gray-700 leading-relaxed">
                      「這是耶和華所定的日子，我們在其中要高興歡喜」。這裡詩人提到有「另一個」耶和華所定的日子，是值得我們歡慶的日子。是什麼日子呢？22節：「匠人所棄的石頭，已成了房角的頭塊石頭」。「匠人所棄的石頭」是預言「耶穌被釘十字架」，「成了房角的頭塊石頭」是預言「耶穌基督復活得勝」，所以我們看見，耶和華定了另一個新的歡慶日，就是「耶穌復活日」。我們再次看見，「安息日」的意義是「漸進發展」的！
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-amber-700 mb-1">四、使徒行傳二十章7節</p>
                    <p className="text-gray-700 leading-relaxed">
                      「七日的第一日，我們聚會擘餅的時候，保羅因為要次日起行，就與他們講論，直到半夜」。我們看見，新約的教會已然把「七日的第一日」，就是「耶穌復活日」成為「聖日」，成為「歡慶」的日子。所以「安息日」在神的啟示裡，已漸漸發展為「主日」，我們仍然遵守第四條誡命「守安息日」，但是「安息日」已發展為「主日」。
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-3 mt-3">
                  哥林多前書十六章2節：「每逢七日的第一日，各人要照自己的進項抽出來留著，免得我來的時候現湊」，再次提到「七日的第一日」。最後，啟示錄一章10節：「當主日，我被聖靈感動」，這是聖經唯一一次提到「主日」，約翰因為被逼迫，被放逐到拔摩海島，但是他仍然在「主日」，就是「復活日」，特別來親近神、敬拜神。所以我們從整本聖經來看，「安息日」已經漸進發展為「主日」。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  然而，筆者認為安息日兼具「預表性」律法及「道德性」律法的功能，因此，我們雖應分別主日來記念主、慶祝耶穌的復活，但卻應更看重「意義」勝過「日子」。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">二、安息日的意義</h3>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">1. 感恩的日子</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  創世記一章31節至二章3節：「神看著一切所造的都甚好——天地萬物都造齊了。到第七日，神造物的工已經完畢，就在第七日歇了祂一切的工，安息了。神賜福給第七日，定為聖日；因為在這日，神歇了祂一切創造的工，就安息了」。「看著是好的」，我們當為過去六天，神的工作獻上感恩，感謝神在過去六天的生活、工作、事奉中賜給我們的福份。上帝在六日中為我們創造一切看為美好的事，當細細數算，心中必受激勵！所以，我們當有寫感恩日記的習慣，學習「儆醒感恩」。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  因著感恩，所以我們學習把時間分別為聖歸給神來敬拜神、朝見神（創2:3），與什一奉獻的意義一樣。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">2. 記念的日子</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  申命記五章15節：「你也要記念你在埃及地作過奴僕；耶和華你——神用大能的手和伸出來的膀臂將你從那裡領出來。因此，耶和華——你的神吩咐你守安息日」。當記念我們乃被救贖的人，是否我們工作、生活是為主而活？回顧自己工作的目標、意義、使命，問自己「工作為了誰？」有何需要調整之處？
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  我們也當在安息日記念主復活的大能，並看我們心中是否還有捆綁、轄制、重擔，再次支取主復活的大能，讓我們重新得力，面對一週的生活！
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">3. 前瞻的日子</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  神的第七日（安息日）是人的第一日，表明人乃以「安息」開始。在空虛混沌中讓神的靈運行成為秩序，開始一週的生活（創1:1）。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">4. 安息的日子</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  神的心意是：「不讓工作成為人的轄制」。神親自示範「安息」的重要。安息日就是表明我們的信心：「把工作交給主」。出埃及記卅四章21節：「你六日要做工，第七日要安息，雖在耕種收割的時候也要安息」，耕種時特別忙碌，神仍然吩咐他們放下工作，來到神面前得安息，這就是信心的表現；而收割時若不搶收，莊稼就會爛掉，因此，此時更是忙碌，神仍然要他們學習，以信心把這一切的工作都交在神的手中。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  所以，安息日當省察的是：「我是否把我的生計交給主了？或者我仍在擔重擔？」工作是神的恩賜而非人的轄制，不要讓工作成為轄制人的暴虐惡魔！
                </p>
                <div className={quote}>
                  <p className={quoteText}>
                    有很多基督徒把「守安息日」的誡命簡化成禮拜天到教會做禮拜，但這並不完全符合上帝原來的心意。在這條誡命裡，上帝所關切的，並不是祂的尊榮和對祂的崇拜，祂關心的是人類的自由與解放。上帝想要為人類留下一段能夠規律地安靜與休息的時間。
                  </p>
                  <p className={quoteText + " mt-2"}>
                    因此，安息日是上帝給我們的恩典，上帝希望能為人們創造出可以喘息的空間。如果我們能有一小段時間跳脫工作，得到充分的休息，這對我們的工作來說，是很有幫助的，會帶來更好的成果。有時候我們需要擺脫工作，才能真的結出果實。但是上帝賜福安息日並不只是要我們暫時放下工作而已。我們人類若能每個禮拜在安息日充分休息，並在當中去感受上帝所賜給我們的一切，就會使我們變得更有活力。我們需要休息，使內在的力量得以恢復。守安息日的意思就是，我們能夠像上帝一樣，對我們的生命說出：「神看著一切都甚好。」（參看古倫神父「活出十誡的真自由」第三章）
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">5. 將這一天分別出來</h4>
                <div className={quote}>
                  <p className={quoteText}>
                    不只如此，上帝還將安息日訂為聖日。「神聖」在聖經中是表示從這個世界中被分別出來的意思。安息日被訂為聖日，意思就是：從這世界的控制範圍，從無數的約會或期限，從不斷加諸在我們身上的期待所帶來的壓力中，把這一天分別出來。這是一段屬於我們和上帝的神聖時間，在這段時間裡，沒有人能支配我們。這是一段自由的時間，我們能在其中獲得喘息，擺脫每天的煩惱重擔，擁有自由自在的感覺。安息日對我們來說是一種藥，讓我們不會陷入慌亂、緊張的發燒狀態，而能在安靜的休息中，找到我們的重心，得到醫治與完全。（參看古倫神父「活出十誡的真自由」第三章）
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">6. 守安息日是自由的表現</h4>
                <div className={quote}>
                  <p className={quoteText}>
                    安息日與「自由」有關。因為上帝將祂的子民從在埃及為奴的處境中解救出來，所以安息日是要保護我們，免得我們成為工作的奴隸。因此，守安息日是自由的表現，表示我們不受到任何「工頭」的催逼，沒有人有權支配我們。
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  當耶穌和門徒在安息日經過麥田，門徒們一邊走，一邊摘取麥穗，法利賽人看了極為反感，認為他們做了不准在安息日做的事。耶穌為門徒的行為辯護，祂說：「安息日是為人而設的，人不是為安息日而生的」（可2:27）。如果守安息日的誡命奴役了人們，這就已經與上帝原本的心意大相逕庭了。耶穌瞭解，上帝所訂的每一條誡命，對人類而言都是一種恩典。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  耶穌也故意在安息日醫治人。以色列人不在安息日向上帝祈求什麼，以免打擾上帝休息。當耶穌在安息日醫治人的時候，祂所傳講的是上帝的另一種面貌：上帝是我們隨時的幫助。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  在耶穌的時代，除非病人情況危急、生死交關，否則是不許在安息日治病的，但耶穌並不認同這樣的規定，祂的作為表明了安息日原本的意義：安息日的存在，是為了要醫治人在日常生活中，因為受到傷害而造成的扭曲及殘缺，並使他得到安慰，能夠成為上帝所希望的樣貌，重新再振作起來（參看古倫神父「活出十誡的真自由」第三章）。
                </p>
              </div>
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
                '新約聖徒是否仍要守安息日有三種立場：仍守週六（真耶穌教會等）、不守安息日只守主日（會讓十誡變九誡）、守主日就是守安息日（作者立場）——聖經對安息日的啟示是漸進發展的，從記念創造→記念救贖→預言復活→實際守主日聚會，安息日已發展為主日，重點在意義而非日子本身。',
                '安息日首先是「感恩的日子」——為過去六天神所賜的一切數算感恩，也是「記念的日子」——記念自己是蒙救贖的人，工作與生活都當為主而活，並支取主復活的大能重新得力。',
                '安息日也是「前瞻的日子」——人的第一日以安息開始，而非以工作開始；更是「安息的日子」——即使在耕種收割最忙碌的時候也要安息，這是把生計交託給神的信心表現，工作是神的恩賜而非轄制人的暴虐惡魔。',
                '古倫神父提醒，守安息日不只是「禮拜天上教會」的形式，而是把這一天「分別出來」，脫離世界的控制、約會期限、他人期待所帶來的壓力，成為一段屬於我們和上帝的神聖自由時間，是醫治慌亂緊張的良藥。',
                '守安息日是自由的表現而非新的奴役——耶穌說「安息日是為人而設的，人不是為安息日而生的」，並故意在安息日醫治人，彰顯安息日原本的心意是醫治人因日常生活受傷而造成的扭曲殘缺，而非用規條捆綁人。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「把守安息日簡化成禮拜天上教會」的提醒，對今日教會的主日崇拜文化有何反省？</h4>
              <p className="text-gray-700 leading-relaxed">
                古倫神父指出，上帝設立安息日真正關切的不是自己的尊榮，而是人類的自由與解放。這對今日教會極具反省價值——如果主日聚會變成另一種令人疲於奔命的行程（趕場式的服事、緊湊的節目安排），反而失去了安息日「讓人得安息」的核心精神。教會在安排主日活動時，值得反思是否真正讓會眾經歷到安息與自由，還是無意間加添了另一種忙碌與壓力。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「即使在耕種收割最忙碌時也要安息」，對現代高壓工作文化的基督徒有何挑戰？</h4>
              <p className="text-gray-700 leading-relaxed">
                現代職場文化常以「越忙越不能休息」為理所當然的邏輯，但神吩咐以色列人即使在最需要搶收的農忙時期也要安息，這正是對「工作至上」價值觀最直接的挑戰。這提醒基督徒，安息不是等到沒事做才有的獎賞，而是無論多忙都必須持守的信心操練——這考驗的正是我們是否真的相信神能看顧我們放下的那部分工作。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">耶穌故意在安息日醫治人，對今日教會如何理解「安息日／主日」與「服事他人的需要」之間的張力有何啟發？</h4>
              <p className="text-gray-700 leading-relaxed">
                法利賽人認為安息日治病是違反誡命，耶穌卻故意在安息日行醫治，彰顯安息日的真義是醫治人、使人重新振作，而非禁止一切行動的教條。這提醒教會，在思考主日該不該從事某些服事（如探訪病人、緊急關懷）時，應當回到「這是否符合安息日使人得安息、得醫治的初衷」這個核心問題，而非拘泥於表面的形式規條。
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
              '在讀這一章之前，你對「守主日」的理解，比較偏向「規定要做的事」還是「上帝給我的恩典」？讀完後有什麼調整？',
              '安息日的意義包括感恩、記念、前瞻、安息四個層面，你自己的主日生活，實際上比較偏重哪一個層面？哪一個層面最容易被忽略？',
              '「工作是神的恩賜而非人的轄制」——你如何評估自己目前的工作狀態，是把生計交託給主，還是仍在自己扛著重擔？',
              '古倫神父說安息日是「一段沒有人能支配我們的神聖自由時間」。你的主日（或休息日）是否真正做到不受他人期待與約會壓力的控制？',
              '耶穌故意在安息日醫治人，挑戰了法利賽人的規條主義。你觀察自己或教會，是否也曾把「守主日」變成一種形式化的規條，而忽略了它原本使人得安息、得醫治的心意？',
              '本週你打算如何具體實踐「將這一天分別出來」，讓主日或安息時間真正成為屬於你和上帝的神聖時間？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 讀馬可福音二章23-28節</h4>
              <p className="text-gray-700 mb-2">找時間讀耶穌和門徒在安息日經過麥田的故事，思想耶穌「安息日是為人而設的，人不是為安息日而生的」這句話，對你重新認識安息日精神有何幫助。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 寫一篇「六天感恩日記」</h4>
              <p className="text-gray-700 mb-2">
                在下一個安息日／主日之前，每天花幾分鐘記下當天神賜給你的一件美好事物，累積六天後在安息日安靜回顧，練習「儆醒感恩」的操練。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，感謝祢賜下安息日／主日作為恩典而非重擔，求祢幫助我把這一天真正分別出來，脫離世界的控制與他人期待的壓力。求祢幫助我把工作和生計真正交託在祢手中，不再讓工作成為轄制我的暴君，也求祢在這安息的時刻，醫治我因忙碌生活而扭曲、殘缺的身心，使我重新得力。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
