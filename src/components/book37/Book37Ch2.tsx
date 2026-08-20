import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book37Ch2() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-fuchsia-700 to-purple-700 bg-clip-text text-transparent">第二講</h1>
        <h2 className="text-xl font-semibold text-gray-700">單單愛主你的神</h2>
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
              妮塔開場說明，她身上除了先知性恩膏，還有一件更高的使徒性恩膏外袍，其中一個功用就是把事情帶回平衡——如同火車若脫軌，使徒性職份能幫助教會重新回到正軌。她說，今天許多教會在經文解讀或先知性預言上走錯方向，神正興起許多使徒來糾正這些偏差；雖然正確的教導有時會立下教會不喜歡的界限，卻能帶來更大的自由。她提到，自己在禱告與隱密處常被神管教、糾正，也提到甘堅信牧師的著作曾幫助她發現自己生命中幾個在先知性運動中走偏的領域——她強調自己不完全認同甘堅信牧師的所有觀點，但認同運行在他身上的先知性與使徒性恩膏；她鼓勵眾人保持謙卑，即便糾正來自看似不起眼的器皿（甚至一個孩子），只要出於神，就當立刻回轉。
            </p>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">一、先知性宣告的界限——颶風的例子</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔舉了一個她認為誤用權柄的例子：美國一位知名先知曾責備教會，說面對颶風只要斥責它、颶風就會離開，而教會沒有操練這樣的權柄。她提出不同看法：教會之所以還沒有達到那樣的權柄地位，一是因為基督徒心裡仍有許多未處理的罪，二是當神正在管教、審判一個國家時，人不能自行站在與神管教心意相反的立場去斥責祂所允許的天氣現象——即便成千上萬教會一起斥責，颶風仍可能持續增強，因為教會尚未成熟到能準確分辨何時、如何使用這樣的權柄。她以此類比，人同樣無法單憑意志「呼叫」復興降臨，因為人裡面並沒有這樣的權柄。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">二、復興降臨前必要的預備</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔解釋，當一個國家正處在神的審判之中，復興會被攔阻、無法降臨；復興的降臨，必須先有真實的悔改——正如約珥書中約珥召集長老與領袖一起悔改。她分享自己曾與美國一些重要官員交流：這些官員多年前開始飛遍全國各地宣告命令復興降臨，多年後她再次追問效果，其中一位官員坦承心中確實有疑問——因為復興始終沒有真正降臨。她指出，一個國家迎接復興前，必須做到三件事：第一，悔改，為一切得罪神的事悔改、禁食、哭泣、深深懊悔，達到約珥書所說「在神面前自卑」的基本要求；第二，尋求祂的面而非祂的手——不是尋求復興中神跡般的彰顯，而是尋求耶穌自己；第三，在悔改與尋求神面之後，把聖潔真實地活出來。她說，當這三件事做得足夠徹底，神會處理流無辜人血、拜偶像等重大的罪，接著還有一件事：處理空中屬靈的惡者——這不是每個信徒都有的能力與權柄，而是神特別恩膏、差派特定器皿去做的屬靈爭戰工作。她強調，復興是神親自醫治這地，不是人的眼淚醫治這地；人不能單憑呼求就讓復興降臨，只有神知道靈界的事何時被處理乾淨，能把醫治帶下來——人能做的部分，是宣告，也是安靜等候。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">三、馬太福音二十二章——愛神而非愛恩賜</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔引馬太福音二十二章37-40節：「你要盡心、盡性、盡意愛主你的神。這是誡命中的第一，且是最大的。其次也相仿，就是要愛人如己。這兩條誡命是律法和先知一切道理的總綱。」她提醒，這段經文從未教導人要盡心盡性盡意愛「復興」或愛「聖靈的恩賜」——渴慕聖靈恩賜在會眾中運行並沒有錯，為此禱告、渴望也是對的，但人心真正應當專注的對象是神自己、是祂的榮面，而非恩賜本身。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">四、摩西向神所求的——渴望認識神本身</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔以摩西獨自在山上遇見神、百姓在山下等候為對比：山下不成熟的百姓所求的是領袖、食物、衣服、水，是神的眷顧與供應；而摩西在山頂上所求的截然不同。她引出埃及記三十三章13節：「我如今若在你眼前蒙恩，求你將你的道指示我，使我可以認識你，好在你眼前蒙恩。求你想到，這民是你的民。」她解釋，摩西不是向神求吃的、喝的、供應，也不是求神跡奇事，而是求神向他顯明做事的法則，好使他能更深、更親密地認識神。她指出，摩西雖然擁有神跡奇事與一切供應的能力，但他深知，這些神跡本身無法帶領以色列百姓進入應許之地——神跡奇事只是用來證明神愛百姓，摩西真正渴望的，是超越物質供應之外，更深地認識神，好把百姓帶到應許之地；若沒有這樣的認識，他自己反倒會「破產」，帶領百姓走錯方向，因為能力本身是一種屬靈的力量，能抓住人的心，把人帶往與神心意相反的方向。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">五、認識神就是永生——被造的目的</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說，她今天早上看見一個異象：神對復興有極大的熱情，但許多人更傾向渴望神跡奇事，而非渴望對耶穌基督的啟示——這種「愛恩賜能力多過愛神」的傾向必須被糾正過來。她引約翰福音十七章3節的精神闡述：「永生就是認識你獨一的真神，並且神所差來的耶穌基督」，強調人被召、被拯救、被造的目的就是認識神，除此之外都是分散注意力的事。她說，要認識神，必須行走在聖潔、謙卑、神的愛與順服裡，持續禱告，並且願意前往那些危險、艱難的地方，把神的榮耀、能力、愛與名字帶到別人不願意去的地方——「如果你坐在家裡舒服的椅子上看足球賽，你絕對沒辦法真實地認識祂」；要認識神，就要去神所去的地方，走向受傷、垂死、失喪的人。她描述摩西在領受神啟示、明白百萬百姓將要滅亡時，心如爆裂般破碎，向神呼求：「你若不赦免他們的罪，就把我的名字從祢的生命冊上塗抹掉」——她認為，正是這樣把生命完全傾倒出去的過程，讓摩西真正認識了神、明白了什麼是愛。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">六、破裂的器皿——絕不觸碰神的榮耀</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔分享一次在數千人特會上服事前，神給她看一個裂痕破損的器皿的異象，她因此忍不住流淚；神告訴她：「那個器皿就是你，但我還是選擇要使用你……你要記得你只不過是一個破裂的器皿，榮耀是單單屬於我的。」她描述那次聚會中，她只是揮手，會場兩側三分之一的人便接連倒在神的大能中，發生許多超乎想像的醫治神跡；但聚會結束後，她始終記得自己不過是個破裂的器皿，一切榮耀屬於天父。她鼓勵大家：我們不過是泥土做的器皿，裡面所盛裝的榮耀屬於神，這榮耀奇妙、真實、超越言語，之所以藏在屬地的器皿裡，正是要提醒人這榮耀不屬於自己——當人禱告、犧牲、受苦、憑信心站立，當榮耀來臨時，絕不可觸碰它。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她再次強調馬太福音二十二章37-38節，提醒抬約櫃的人不能讓人敬拜的對象變成自己，而應該仍是約櫃本身；她坦言自己剛開始服事時也曾犯過同樣的錯，神曾對她說：「你可以開凱迪拉克豪華轎車去教會、自己確保事工，或者開輛普通的德國大眾車，讓我親自確保你的事工——奢華的地方，你不要去。我的兒子被差下來，生在馬槽，被放在木匠家裡，因為這能彰顯我的本性，我與謙卑、裡面沒有虛假的器皿同工；如果你自取尊榮，我就會把你拉下來，當你謙卑自己，我就會把你高舉。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                最後，她引馬太福音二十二章39-40節「愛人如己」，說天堂真正仰慕的並非住豪宅、開名車、坐頭等艙的人，也不在乎事工規模或學位頭銜，而是那些願意謙卑俯伏、擺上自己去觸摸神所託付之事的人——她以德蕾莎修女為例，她在地上沒有顯赫學位，卻把生命傾倒在有需要的人身上，天上有許多冠冕正等著她。妮塔以此帶領全場舉手、跪下向神表態，願意為神完全擺上，並鄭重宣告絕不觸碰單單屬於神的榮耀。
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
                '妮塔提醒，屬靈權柄的行使有其界限：教會未必已成熟到能命令或斥責一切超自然現象，誤用權柄反而暴露了不成熟。',
                '復興降臨前有三個必要的預備：真實的悔改、尋求神的面（而非祂的手）、活出聖潔的生活——這是人能做的部分，其餘交託給神的時間表。',
                '馬太福音二十二章的誡命是「愛主你的神」，不是「愛復興」或「愛恩賜」——渴慕聖靈運行沒有錯，但心的焦點必須是神自己。',
                '摩西向神所求的不是供應與神跡，而是「認識你」——這提醒人，能力若沒有對神真實的認識作根基，反而可能把人帶往錯誤的方向。',
                '「破裂的器皿」是這一講的核心意象：無論神藉一個人成就多大的事，都要謹記榮耀單單屬於神，絕不可自取尊榮。',
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
              <h4 className="font-semibold text-gray-800 mb-2">妮塔對另一位「知名先知」颶風教導的公開評論，該如何看待？</h4>
              <p className="text-gray-700 leading-relaxed">
                這段內容展現的是靈恩派、先知性事工圈內部真實存在的觀點分歧——不同先知性教師對於「教會是否應該、能否斥責自然災害」有不同看法，這本身反映出這個傳統內部一直存在的自我修正機制（妮塔自陳她的使徒性恩膏功用之一正是「糾正教會走偏的教導」）。讀者不需要因此評斷哪一方「更對」，而可以把重點放在她提出的原則本身：權柄的使用需要與神的心意、時機相符，而非單憑信心宣告就能奏效，這是一個具有聖經根據的提醒（如馬太福音十七章20-21節提到某些事「非用禱告禁食，這一類的鬼就不出來」，顯示屬靈爭戰有其對應的預備工夫）。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「復興無法被人為命令召喚，需要神的時間表」，這個觀點與「積極宣告信心」的教導如何平衡？</h4>
              <p className="text-gray-700 leading-relaxed">
                部分靈恩教導強調信徒可以「宣告」帶出屬靈現實（根據馬可福音十一章23-24節），但妮塔在這裡提醒，復興的降臨還牽涉到神對一個地區、國家審判與憐憫的整體時間表，不是單靠信心宣告就能繞過的。這兩種看似衝突的教導，其實可以理解為互補：信心的宣告與禱告是人被呼召去做的忠心本分，但結果的時機終究在神手中（參使徒行傳一章7節「父憑著自己的權柄所定的時候、日期，不是你們可以知道的」）——重點不在「要不要宣告」，而在於不能把宣告當作能夠強迫神按人的時間表行動的公式。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">摩西「若不赦免他們，就塗抹我的名」的呼求，反映怎樣的代求精神？</h4>
              <p className="text-gray-700 leading-relaxed">
                這段記載於出埃及記三十二章31-32節，是聖經中最激烈的代求例子之一，常被視為舊約中最接近基督捨己精神的預表（羅馬書九章3節保羅也表達過類似「情願自己被咒詛，與基督分離，為我弟兄」的心志）。這提醒代禱者，真正的代求有時需要以自己的生命為代價，但讀者也應留意，這是聖經中極特殊蒙召的例子，不代表每個信徒的代禱都需要以「自我犧牲式的交換」為前提——關鍵在於代求背後那顆願意捨己、為他人擺上的心，而非模仿字面上的具體用詞。
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
              '摩西向神所求的是「認識你」，而非供應或神跡——回顧你最近的禱告內容，你更常求什麼？',
              '「愛恩賜多過愛神」是妮塔提醒要糾正的傾向。你是否曾發現自己更渴望「神的作為」勝過「神自己」？',
              '「破裂的器皿」這個意象，如何幫助你看待自己過去某次被神使用、卻可能悄悄滋生驕傲的經歷？',
              '「要認識神，就要去神所去的地方」——你生命中，是否有一個因著愛而必須走進的艱難處境，是你一直迴避的？',
              '面對「復興無法被人強行召喚，需要神的時間表」，你如何在「積極禱告宣告」與「安靜等候神的時機」之間找到平衡？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 用出埃及記三十三章13節禱告</h4>
              <p className="text-gray-700 mb-2">連續一週，每天用摩西這句禱告開始你的靈修時間：「求你將你的道指示我，使我可以認識你」，而不先急著列出代求清單。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🧺 檢視「悔改—尋求—聖潔」三步驟</h4>
              <p className="text-gray-700 mb-2">
                依妮塔提出的三個預備步驟，誠實寫下你目前生命中還需要悔改的一件事、你渴望更深尋求神面的一個具體行動、以及你願意在聖潔上做出的一項調整。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🏺 練習把榮耀歸還給神</h4>
              <p className="text-gray-700 mb-2">
                回想一次你曾被神使用、卻悄悄享受了旁人稱讚的經歷，這一週在禱告中誠實承認，並練習在下一次類似情境發生時，立刻把榮耀歸還給神。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，我要盡心、盡性、盡意愛祢，不是愛祢的恩賜，也不是愛祢的作為。求祢向我顯明祢的道路，使我更深認識祢。求祢使我成為謙卑、破裂卻願被祢使用的器皿，而絕不觸碰單單屬於祢的榮耀。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
