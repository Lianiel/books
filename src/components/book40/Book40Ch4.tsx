import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Waves, Star, Search, HelpCircle, Check } from 'lucide-react';

const quote = "border-l-4 border-emerald-300 bg-emerald-50 pl-4 py-3 mb-3";
const quoteText = "text-emerald-800 leading-relaxed italic";

export default function Book40Ch4() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-800 to-orange-900 bg-clip-text text-transparent">第四章</h1>
        <h2 className="text-xl font-semibold text-gray-700">第一誡：除了耶和華以外，你不可有別的神</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          「除了我以外，你不可有別的神。」（出20:3）
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
              這一條誡命強調的是我們「敬拜的對象」是「獨一的真神」。我們相信，一個重生得救的基督徒，應當不會再去膜拜別的宗教的神明。因此，是否我們就不會觸犯第一誡呢？
            </p>
            <p className="text-gray-700 leading-relaxed">
              以西結先知說：「人子啊！這些人已將他們的假神接到心裡，把陷於罪的絆腳石放在面前，我豈能絲毫被他們求問嗎？所以，你要告訴他們：主耶和華如此說：以色列家的人中，凡將他的假神接到心裡，把陷於罪的絆腳石放在面前，又就了先知來的，我耶和華在他所求的事上，必按他眾多的假神回答他，好在以色列家的心事上捉住他們，因為他們都藉著假神與我生疏」（結14:3-5）。從這裡看見，什麼是基督徒生命中可能的「假神」呢？
            </p>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">一、假神——什麼會佔據神在我們心中的地位</h3>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">一、假神「抓住我們的心」</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  以色列人「將他們的假神接到心裡」；這些假神「在以色列家的心事上捉住他們」。可見，「假神」不只是指那些看得見的偶像，所有「佔據我們的心」的人、事、物，都是我們的「假神」；所有超過神在我們心中地位的一切人、事、物，都是我們心中的「假神」。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  因此，求主光照我們，我們心中是否有任何人、事、物的地位超過神呢？也許是「金錢」，我們是否為了金錢而犧牲了服事神、追求神的時間和機會呢？也許是「我們最親近的人」，我們是否也把他們看得比神還要重要呢？也許是「教會的屬靈領袖」，我們是否也可能把他們當成我們崇拜的對象呢？讓我們都從心中除去我們的「假神」！
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">二、假神「使我們與神生疏」</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  第5節提到以色列人「藉著假神與真神生疏」；所有妨礙我們與神之關係的人、事、物，都是我們的「假神」。也許是沉迷於對瑪門的事奉，也許是沉迷於上網、電視節目、運動比賽、線上遊戲等。所有誘惑我們迷戀它們，以致讓我們失去親近神的渴慕，而漸漸與神遠離的人、事、物，都是我們心中的假神！讓我們省察自己，是否有任何使我們漸漸遠離神的「假神」在我們心中？我們要除去它們！
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">三、假神「陷我們於罪」</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  第3、4節提到，假神會把「陷於罪的絆腳石放在人面前」。人若迷戀金錢、或其他的人、事、物，往往會使他們陷入罪中而因此沉淪。多少事奉瑪門的人，為著急速發財而財迷心竅，以致落入各樣的愁苦及罪惡當中！所有使人沉迷其中的人、事、物，都會使人落入愁苦、空虛及許多無知有害的私慾中。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">二、問題思想：信耶穌的人不拜祖先是否不孝？</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經教導我們不可祭祖，詩篇一○六28：「他們又與巴力・毘珥連合，且吃了祭死神（或譯：人）的物」。因此，許多人批評基督教：「死沒人哭」，認為基督徒不祭祖就是數典忘祖。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當我們面對這樣的問題時，我們應先了解，華人祭祖的原因是什麼，針對不同的原因，我們有不同面對的方式：
              </p>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">一、孝順</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  有人認為祭祖是「慎終追遠」、「飲水思源」的表現。針對這個原因，我們可以先告訴他們，聖經是非常看重「孝道」的。舊約律法規定，不孝敬父母的人要用石頭打死。新約馬太福音第一章就是「家譜」，所以基督徒非常看重「孝道」，只是我們不用「祭祖」的方式來表達，我們強調「生孝」而非「死孝」，我們強調應當趁著父母活著時，好好孝順他們，而不是在他們死後才藉著祭祖表達孝順。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">二、祈福</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  有人「祭祖」的原因，是因為他們認為「祭拜祖先」能為他們帶來祝福，祖先能保佑他們，給他們帶來福份。若是這個原因，我們告訴他們，我們看重孝道，但我們並不認為祖先能庇蔭我們，我們只相信上帝是萬福的來源。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">三、懼怕</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  也有人祭拜祖先是因為「害怕」，害怕若不祭拜祖先，會為家族帶來惡運，遭受祖先的咒詛。面對因著懼怕而祭祖的人，我們更要告訴他們，這是非理性的驚嚇，我們的祖先生前都是愛我們子孫的，怎可能因著我們不祭拜他們而降禍給我們呢？魔鬼總是利用人害怕的心態來轄制人。
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
                '第一誡強調敬拜的對象是「獨一的真神」，但重生得救、不拜宗教神明的基督徒未必就沒有觸犯第一誡——以西結書提醒，凡「將假神接到心裡」的都算，假神不限於看得見的偶像。',
                '假神的第一個特徵是「抓住我們的心」：任何在我們心中地位超過神的人、事、物，都是假神，可能是金錢、最親近的人，甚至教會的屬靈領袖。',
                '假神的第二個特徵是「使我們與神生疏」：任何妨礙我們與神關係、使我們失去親近神渴慕的人、事、物（如沉迷瑪門、上網、電視、運動比賽、線上遊戲），都是假神。',
                '假神的第三個特徵是「陷我們於罪」：迷戀金錢或其他人事物，往往使人為了快速獲得而落入愁苦、空虛與各樣有害的私慾罪惡當中。',
                '面對「信耶穌不拜祖先是否不孝」的質疑，應先分辨對方祭祖的動機——孝順（回應：聖經重視孝道，但強調「生孝」而非「死孝」）、祈福（回應：唯獨上帝是萬福的來源）、懼怕（回應：這是非理性的驚嚇，祖先生前愛子孫，不會因不祭拜而降禍），對症下藥地說明立場。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「教會的屬靈領袖」也可能成為假神，這對信徒與牧者的關係有何提醒？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者特別點出，即使是教會的屬靈領袖，若在我們心中的地位超過神，一樣是假神。這提醒信徒，敬重牧者、跟隨屬靈教導是好事，但若演變成盲目崇拜、對牧者的話語照單全收而不再對照聖經求證，或把個人的信仰安全感建立在對某位牧者的依附而非對神本身，都是危險的信號，值得健康的教會文化提早留意並教導信徒分辨。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「生孝而非死孝」這個立場，如何幫助基督徒在華人家庭中回應祭祖壓力？</h4>
              <p className="text-gray-700 leading-relaxed">
                許多基督徒面對家人「不祭祖就是不孝」的指控時，容易陷入防衛或內疚。作者提供的「生孝而非死孝」框架，把焦點從「死後如何祭拜」轉移到「生前如何實際孝順」，這種正面積極的立場遠比單純說「不可以」更有說服力，也更貼近聖經對孝道的整全教導，值得基督徒在向家人解釋信仰立場時具體引用。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">分辨對方祭祖動機（孝順/祈福/懼怕）再對症回應，這種方法對處理其他信仰衝突議題有何借鑑？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者沒有用單一制式答案回應「可否祭祖」，而是先探究背後動機，再針對性回應，這種方法論可以延伸應用到其他常見的信仰與文化衝突議題（如節慶習俗、婚喪禮儀等）——先理解對方行為背後真正的心理需要，再用合乎聖經的方式提供替代性的滿足，往往比直接否定對方的做法更能真正溝通並帶來理解。
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
              '在讀這一章之前，你認為「不拜偶像」就等於「沒有觸犯第一誡」嗎？讀完之後，這個看法有什麼調整？',
              '誠實省察你自己的內心，有沒有任何人、事、物的地位，已經不知不覺超過了神在你心中的地位？',
              '你生活中是否有讓你「漸漸與神生疏」的事物（例如手機、社群媒體、追劇、遊戲）？你打算如何調整？',
              '回想你曾經因為迷戀某件事物（金錢、關係、成就）而落入愁苦或罪中的經驗，那次經歷給你什麼提醒？',
              '如果家人質疑你「信耶穌不祭祖就是不孝」，你會怎麼用「生孝而非死孝」的角度來回應？',
              '你身邊是否有人因為「害怕祖先降禍」而不敢改信基督教？你會如何用愛心和智慧幫助他們？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 默想以西結書十四章3-5節</h4>
              <p className="text-gray-700 mb-2">找時間慢慢讀這段經文，逐句思想「假神抓住我們的心」「假神使我們與神生疏」「假神陷我們於罪」三個特徵，求聖靈光照自己生命中可能存在的假神。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 列出可能佔據心中神位置的清單</h4>
              <p className="text-gray-700 mb-2">
                誠實寫下三樣目前佔用你最多時間、心力、注意力的人事物，逐一檢視：這些是否已經不知不覺取代了神在你心中的地位？本週選一樣做出具體調整（例如減少某項活動的時間，把省下的時間用來親近神）。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，求祢光照我心中隱藏的假神——那些不知不覺抓住我的心、使我與祢生疏、甚至陷我於罪的人事物。求祢幫助我把祢放回生命中應有的第一位，也求祢賜給我智慧與愛心，幫助身邊仍被恐懼與傳統轄制的家人朋友，認識祢是又真又活、獨一的神。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
