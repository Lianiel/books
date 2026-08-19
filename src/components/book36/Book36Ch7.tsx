import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book36Ch7() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-fuchsia-700 to-purple-700 bg-clip-text text-transparent">第七講</h1>
        <h2 className="text-xl font-semibold text-gray-700">為你的國家禱告（二）</h2>
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

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">一、回應提問：迦南滅族與美洲原住民之死有何不同？</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔先回答學員的提問：舊約中神讓以色列人進入迦南、除滅拜偶像的迦南人，這與歐洲白人殺害同樣拜偶像的美洲原住民，兩者有什麼不同？她的回答是：迦南人的罪惡之杯已經滿盈、拒絕悔改，神除滅他們也是為了不讓他們的偶像玷污以色列人的信仰（她指出以色列人後來未徹底執行、反而與迦南人通婚，偶像因此滲入了以色列的信仰生活）；但她強調，這是舊約特定時期的命令。到了新約，神給教會的使命不是用武力佔領一個國家，而是「到萬國去，使萬民作我的門徒」——用福音去「入侵」一個國家，而不是刀劍。她認為，大部分被殺的原住民從未有機會聽到福音，是「奉神的名」被殺害而非因傳福音而死；歐洲移民所謂的「天命」（Manifest Destiny）驅使他們單純為奪地而屠殺，而非傳福音。她提到，四百年後的今天，原住民後裔的信主比例仍偏低，她認為部分原因正是「這樣的神告訴基督徒去殺人，這樣的神我們不想服侍」的心結；她也指出原住民若一旦信任對方,便會成為一生的朋友，是很適合被傳福音的群體。她的結論是：這些原住民的死是無辜的死——不是因自己的罪受罰，而僅僅因為白人想要他們的土地。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">二、納瓦霍部落的旱災與復興</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔分享一次在洛杉磯一間華人教會舉行的鷹的聚集，當時約有一半參加者是美國印第安人，其中包括納瓦霍部落（美國最大的印第安部落）的成員。在此之前，她已為納瓦霍族持續禱告數月——他們正經歷三年嚴重旱災，農牧損失達數十億美元，是那個世代最嚴重的旱災之一。聚集中，與會者花時間彼此悔改：一方為過去對原住民所犯的罪悔改，原住民一方也為族群自身拜偶像的罪悔改，妮塔形容那場聚集充滿合一與彼此相愛的靈。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                聚集結束後的週六下午，她在禱告中求神若已悅納這樣的悔改，就求神明顯地破除納瓦霍族的旱災。她說，就在那個週六下午到主日早晨，納瓦霍保留區降下三年來的第一場雨，且雨勢從美國最南到最北連續下了三天，許多原住民冒雨在街上跳舞；一位受邀參加聚集的納瓦霍長老後來告知部落，「神造訪了我們的百姓」。妮塔說，那次聚集是在九月，復興隨後從十一月開始，並持續了很長一段時間。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">三、對原住民欠款的釋放</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔提到，過去美國政府與原住民所簽的多項條約中，承諾支付的款項大多未足額兌現，原住民族群至今仍是美國最貧困的族群之一。她說在鷹的聚集中，他們特別為此代禱，求神釋放本應歸屬原住民的資金；她表示此後確實有數十億美元的相關款項被釋出給原住民群體（她提到自己保留了當時的新聞報導作為佐證）。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">四、911之後在華盛頓DC的鷹的聚集</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔分享，他們在911事件後於華盛頓DC舉辦了第一次鷹的聚集，她自己搭乘的班機還是911之後首批飛往華盛頓DC的航班之一。聚集中他們為政府悔改代禱；不久後，她得知民主、共和兩黨在私下的聚會中彼此悔改，緩解了她所形容的、因黨爭而攔阻公義彰顯的對立局面。她提到聚集倒數第二場聚會敬拜時，異象中看見一把兩刃的利劍從空中直插入地，隨即有大理石般的盒子環繞刀口，主告訴她：「這是我放在這個城市的改革之劍」。她也提到團隊中一位活躍於共和黨事務的成員形容，當時參加共和黨的會議，聖靈同在的強度甚至超過教會聚會；並提及媒體曾報導，時任總統布希在接受議員建議前會先去禱告，禱告後才答覆，其幕僚曾對媒體表示希望總統聆聽議員的時間能與禱告的時間一樣多。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她也提到，在為非裔美國人的歷史悔改之後，一項就吉姆·克勞（Jim Crow）時代政府未能阻止對黑人私刑（她提到當時約有一萬名黑人被非法私刑處死，持續近百年直到1965年前後才真正有實質進展）向非裔美國人道歉的議案最終在參議院通過，且需總統辦公室參與道歉，她認為這是塗抹美國四百年來相關罪責的重要一步。她總結：這一切並非要突顯自己所做的事，而是要學員明白，當一個國家被放在心裡而願意起來代禱時，神回應的方式常常超乎人的預料，成就人所不能成就的事。
              </p>
              <p className="text-gray-700 leading-relaxed">
                由於時間有限，妮塔表示原本還想分享奈及利亞、義大利、以色列、新加坡等地藉代禱帶來改變的例子，但這一講到此為止，接下來要進入代禱恩膏的釋放環節。
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
                '妮塔區分舊約迦南滅族（神親自審判罪惡滿盈的民族）與新約教會的使命（用福音、而非武力使萬民作主的門徒），藉此說明她不認為殖民屠殺原住民能援引舊約作為正當依據。',
                '納瓦霍部落三年旱災在鷹的聚集悔改禱告之後降下甘霖的見證，被她視為悔改與代禱帶出實際果效的例子。',
                '鷹的聚集在911後於華盛頓DC舉辦，異象中「改革之劍」插地的畫面，被她解讀為神在政府中動工的記號。',
                '吉姆·克勞時代私刑道歉議案的通過，被她視為代禱影響公共政策、塗抹歷史罪責的具體例證。',
                '核心提醒：當一個人願意為所屬國家的歷史傷痛悔改代禱，神回應的方式常常超乎人所能成就的範圍。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「舊約迦南滅族 vs. 新約福音使命」的區分是否能完全解釋殖民歷史？</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔提出的區分——舊約特定時期神親自命令的審判，與新約教會蒙召傳福音、而非以武力征服——是基督教神學中常見且有一定共識的立場，避免了直接把舊約征服戰爭當作後世殖民暴力的神學藉口。不過，殖民歷史本身極其複雜，牽涉政治、經濟、族群衝突等多重因素，不同地區、不同時期的情況差異很大，單一的屬靈框架未必能涵蓋全部歷史事實的細節與責任歸屬。讀者可以把這段教導理解為她個人對這段歷史的信仰性反思與代禱負擔，而非嚴謹的歷史學論述。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">將天氣現象（如納瓦霍族降雨）直接歸因於特定禱告事件，該如何看待？</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔將旱災解除的時間點與聚集禱告直接連結，是見證式敘事中常見的手法，讀者可以把這類見證當作她個人信心經歷的分享，而非「只要照樣禱告，天氣必然照樣回應」的公式。聖經中確實有先知禱告求雨（如以利亞，雅各書五章17-18節），但也提醒我們神施行憐憫的方式與時機終究在祂自己的主權中，不應把單一見證絕對化為必然規律。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">將特定政黨或政治人物的舉措作為屬靈成功的例證，需要留意什麼？</h4>
              <p className="text-gray-700 leading-relaxed">
                這段教導提及的政治事件（如特定總統的禱告習慣、參議院道歉議案）帶有明顯的時代與立場色彩，是2000年代美國政治語境下的個人觀察與詮釋。跨文化、跨時代的讀者在閱讀時，應留意這類內容反映的是講者當時的處境與立場，不宜將特定政黨或政治人物的作為，直接等同於神旨意成就的證明——公共政策的評價本身涉及多元的價值判斷，基督徒對同一件公共事件也可能有不同的合理立場。
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
              '你如何理解「教會的使命是傳福音，不是用武力佔領」這個原則？在你所知的歷史或當代事件中，是否有值得反思的例子？',
              '納瓦霍族的降雨見證讓你有什麼感受？你會如何避免把單一見證變成「公式化」的信心期待？',
              '妮塔提到原住民信主比例偏低,部分原因是歷史傷痛造成的心結。你認為傳福音時,如何才能顧及對方族群的歷史傷痛?',
              '對於教導中涉及特定政治人物或政黨的部分，你會如何區分「神在歷史中掌權」的信念，與「特定政治立場」之間的界線？',
              '「當一個國家被放在你心裡，你開始代禱，神回應的方式超乎預料」——有沒有一個國家或群體，是神近來放在你心裡的？',
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
              <h4 className="font-semibold text-green-700 mb-2">🌍 為你所屬國家的一段歷史傷痛代禱</h4>
              <p className="text-gray-700 mb-2">選一段你所屬國家或民族歷史上真實發生過的傷痛（不論加害或受害），花時間安靜在神面前，求神光照你可以如何謙卑地代求與悔改。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🕊️ 為當前政府與掌權者代禱</h4>
              <p className="text-gray-700 mb-2">
                依提摩太前書二章1-2節的教導，固定為你所在地區或國家的執政者代禱，求神賜下智慧與公義的心，而不論你個人的政治立場為何。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，求你光照我們國家歷史上一切未被承認的傷痛，賜給我們謙卑悔改的心。求你在我們的政府與掌權者中間動工，使公義如江河滾滾而流。也求你幫助我們，不把屬靈的信念與特定的政治立場混為一談，單單尋求你的心意。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
