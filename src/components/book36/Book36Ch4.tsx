import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book36Ch4() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-fuchsia-700 to-purple-700 bg-clip-text text-transparent">第四講</h1>
        <h2 className="text-xl font-semibold text-gray-700">撒旦毀滅的伎倆</h2>
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
              妮塔請大家翻到馬可福音第三章，說明神想在教會中興起有大能和權柄的人，但仇敵卻想方設法把人捆綁，使人永遠成不了對神有價值的器皿——這一講要來談仇敵毀滅代禱者的伎倆。她引用馬可福音三章24-27節：「若一國自相紛爭，那國就站立不住；若一家自相紛爭，那家就站立不住。若撒但自相攻打紛爭，他就站立不住，必要滅亡。沒有人能進壯士家裡，搶奪他的傢俱；必先捆住那壯士，才可以搶奪他的家。」
            </p>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">一、事工若不建立在禱告上，神必親自拆毀</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔分享，她第一次以耳朵可聽見的方式聽見父神的聲音，像眾水的聲音，神說：「任何不是建立在個人禱告上的事工，在這個時刻，我會親自把它拆毀。」她說，因此在這個時刻建立事工，必須建立在個人的禱告上——不能依靠別人替你禱告，自己必須有健康的禱告生活，否則所建立的事工最終會被主拆毀。她說，如果撒旦成功攻擊你的禱告生活，就會使你對神的價值變得非常微小；不是建立在禱告上的事工，會變成屬肉體和屬魂的事工，無法長存。她解釋馬可福音的經文：你就是神的家、神國的一部分，如果撒旦能分割你的心，讓你的心與自己對抗，你就會像自相紛爭的家一樣站立不住。她提醒，沒有人比撒旦更清楚「必先捆住壯士，才能搶奪他的家」這個原則，所以基督徒要「馴良像鴿子，靈巧像蛇」，靈巧像蛇就是要明白仇敵的詭計——當你有這樣的能力，即便撒旦想搶奪你的家，也完全不需要害怕。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說，有些基督徒認為「我不想成為代禱者，也不想成為戰士，如果我不惹撒旦，牠就不會來跟我爭戰」，她笑說，這正是撒旦最厲害的一招——說服人不要起來爭戰。她提醒：我們一旦得救，不管願不願意，都已經在戰場上了；神從未應許給我們沒有刺的玫瑰園，但耶穌說「我已經勝了世界」，所以不需要懼怕撒旦所做的；唯一要懼怕的，是害怕爭戰本身——如果害怕爭戰，就不會反抗，撒旦就已經贏了。她說：爭戰從來都不是問題，問題在於怎麼處理生命中出現的事情。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">二、爭戰無法逃避——巴蘭咒詛以色列的故事</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔請大家翻到哥林多前書十章6-12節，提醒大家不要貪戀惡事、拜偶像、行姦淫、試探主、發怨言，「他們遭遇這些事都要作為監戒，並且寫在經上，正是警戒我們這末世的人」。她回顧摩西帶領以色列人出埃及的故事：探子回報迦南地有巨人，十個探子的報告使全以色列恐懼戰驚、拒絕進去得地為業。她說，如果以色列民不害怕爭戰，聖經裡就不會有巴蘭被摩押王召來咒詛以色列人的故事——但神對巴蘭說：「我喜愛這些人，我不喜歡你咒詛他們。我要給你話語來祝福以色列我的百姓。」她想像撒旦當時的挫敗：本來想咒詛神的教會，神卻在最後一刻扭轉局勢，於是撒旦轉而想出另一套辦法——拜偶像、悖逆和不道德。她說，如果能把百姓圈在這三樣裡，撒旦就不需要擔心神要做什麼了，因為牠已經得著他們了。妮塔強調，保羅把這段歷史寫進聖經，是為了幫助現今的教會明白神的法則，也更明白仇敵的作為。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">三、撒旦的第一招——幫你用血氣建立事工</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說，當一個人渴望在神裡面成長，起初對撒旦來說還不是很大的威脅；但如果撒旦看見這人真的在神裡面認真追求，牠要做的第一件事，反而是「幫助」這人做他想做的事——引誘他靠血氣服侍：你這麼有才華、這麼聰明、這麼有恩賜、長得又好看，這麼多人喜歡你，你會為神做大事的；不必特別關心禱告生活，只要每週準備好講道信息就行，神甚至會差派很多聰明有恩賜的人來與你同工，一起建立很大的事工。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她分享一個真實的例子：撒旦找到一位牧師，說要給他一個全球性的醫治事工，並在他面前先變成獵豹、再變成獅子、再變成人，證明自己有極大的能力，說：「你若向我下拜，敬拜我，我就給你一個全球性的醫治事工。」這位牧師竟然同意了。他從非洲回來後，帶著極大的醫治事工周遊世界，看到許多醫治和神跡奇事發生，不用擔心禱告、不必顧慮屬靈爭戰，也無需保持心裡的純潔——就這樣過了幾年，他陷入不道德的事，處於失去靈魂的危險境地。妮塔的一位朋友後來在一個娛樂場所遇見他，問他發生了什麼事，他說出了整個故事，並坦言：「我這樣過了幾年，我真希望我從來沒這樣做過，因為我真的相信那是神給我的事工。」幾年後他病得很重，躺在醫院等死，耶穌走進他的房間對他說：「我給你一個事工，你卻向撒旦下拜，認為你這樣就能建立你自己的事工，你毀壞我給你如此美好的東西，你現在躺在這裡，你會死，除非你現在就悔改。」耶穌要他找一個沒有人認識他的偏僻地方度過餘生，若保持生命潔淨，死後才能上天堂。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔總結：如果撒旦不能毀掉你的事工，牠會很樂意幫助你建立——不管是像這個真實例子那樣直接與你交易，或是用血氣的方式誘惑你，不管哪一種，你對神都會變得非常沒有果效。你可能建立非常大的事工，卻不代表這個事工是在神的國度裡的。唯一能保持不出軌、有效地行走在神旨意中的方法，就是保持讀經和禱告的生活。她說，如果撒旦不能幫助你建立事工，牠就會來毀掉你的呼召，最常用的三個方法就是：拜偶像、悖逆、不道德。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">四、拜偶像——貪愛權能與自我敬拜</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔解釋，拜偶像可以是驕傲、貪婪、苦毒，也可以是極深地偽裝自己的心。貪婪可以分為兩類，其中一類是喜愛能力，這點毀掉了很多牧師和代禱者——當你被神使用而被提升，同時開始渴望更多能力來證明自己的價值，就已經開始墮落，這正是拜偶像；如果你開始覺得只有自己為神做的事才重要，因此變得越來越貪慕高位、自我陶醉、自我敬拜，撒旦就能透過拜偶像打敗你。她說：今天我們不會向佛像下拜，但代禱者和牧師卻可能喜愛敬拜自己——如果沒有禱告生活，裡面的這些問題自己根本察覺不到；如果有禱告生活，神就可以藉此糾正、釋放你。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">五、悖逆——順服帶來的果效</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說，成為神大有能力的代禱者，一個非常重要的關鍵是順服的生命。她分享自己曾多次被神差遣去一個陌生城市、卻不被告知確切地點的經歷——她只能盲目地走，靠著聖靈的催促右轉、左轉，通常十五分鐘就能找到要去的地方，若靠自己的方式尋找，可能要花上兩個小時。她也提到，很多次她正跟客人相聚，主卻打斷她的計畫，要她立刻回家禱告——一進門就領受一個異象，或許是關於美國未來、教會，或是某個教會正遭遇的麻煩，她必須立刻代禱；因著這樣的順服，她能及時打電話提醒相關的牧師，幫助那間教會從麻煩中得釋放。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她講述一次印象深刻的經歷：神給她一個異象，讓她看見一個獨自坐在黑暗中哭泣的小孩，地點看起來像是一棟未完工的房子；主告訴她那孩子被一個邪靈控制，也告訴她那邪靈的名字，說這孩子已經預備好要得釋放了。她在靈裡奉命令那邪靈離開，然後打電話給孩子的父母，得知女兒已經離家出走、父母正在四處尋找。她把自己看見的、神吩咐她做的都告訴他們，叫他們回家等候，因為女兒已經得釋放了。半小時後，女孩回家了，整個人跟離家時判若兩人——妮塔說，那孩子當時正處於內心爭戰的極度痛苦中，恰好在那個時刻預備好要得釋放，如果她當時沒有順服，神需要人來釋放這孩子時，她卻不在場，這個離她幾千英里遠的女孩就可能無法在那一刻得著幫助。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔強調，講這些故事是有原因的：如果沒有在日常生活中學會順服的功課，神要你放棄一些東西時你不會放棄，神要你改變態度時你會拒絕——如果日常生活是悖逆的形態，當神在禱告中要求順服時，你也無法順服，因此也無法在禱告上被神大大使用，只能被很小地使用。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">六、苦毒與不道德——大衛的教訓與饒恕的重要</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說，她這些年的經歷讓她明白：很少人能理解日常生活與禱告生活對齊的重要性。她認識一些每日花兩三個小時禱告的牧師，卻因為一直受傷而越來越苦毒，即便花了很多時間禱告，卻沒什麼果效，因為他們已經在拜苦毒這個偶像。她解釋，禱告室外的生活會影響禱告室內的生活，禱告室內的生活也決定了禱告室外的生活：進到禱告室，首要目的是與神交流，其次是等候領受祂的旨意，第三才是順服祂的旨意去做——如果進禱告室就列出一堆要爭戰、要禱告的清單，就還沒學會跟隨神的紀律，禱告生活將沒什麼影響力。她說：「禱告不是在乎我們，是在乎祂。是在乎祂的旨意，祂的同在，祂的國度，祂的喜樂。禱告是在乎耶穌，不是在乎我們。」她建議，進到禱告室應先花時間敬拜、學習神的話語，培育與神的交通，之後再為人代求——把所愛之人的名帶到主面前，誠實承認自己按自然人理解所想的需要，然後等候神告訴你祂真正的心意，「這時候你禱告的，就是神要你為她禱告的，而不是你自己認為要禱告的」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔特別以大衛王為例說明苦毒如何一步步毀壞人：撒旦一直用掃羅王攻擊、傷害大衛，大衛努力保持心裡純淨，但傷害實在太大，不饒恕最終進來了。表面上一切順利——掃羅和約拿單死了，大衛順利繼承王位，神把國賜在他手中——但他心裡有苦毒。後來他看見拔示巴，故事的結局眾所皆知：他陷入不道德，最後導致謀殺，但最開始，只是苦毒。撒旦藉此捆綁了他，搶奪了他的家；神並沒有挪去他的王位，撒旦卻能進入大衛的家中製造一系列苦難，而這一切都是從不饒恕開始的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她也提到，不道德包括在網路上看不合宜的內容——進到禱告室，是進入地上最聖潔的地方，在創造萬物的主面前；即便自認為沒有做出實際不道德的行為，聖經教導我們，若不抵擋這些事就等同行惡，即使是被動地觀看這些內容，在神眼中仍是犯罪，會敗壞、玷污住在裡面的聖靈。她引用哥林多前書十章8-9節「不要行姦淫……也不要試探主」，以及希伯來書十二章14-16節：「你們要追求與眾人和睦，並要追求聖潔；非聖潔沒有人能見主。又要謹慎，恐怕有人失了神的恩；恐怕有毒根生出來擾亂你們，因此叫眾人沾染污穢。恐怕有淫亂的，有貪戀世俗如以掃的；他因一點食物把自己長子的名分賣了。」她說，如果渴望成為代禱者，這可能是聖經中對你最重要的經文。她提醒，撒旦並沒有比人強壯，除非人自己允許，牠無法打敗人；撒旦最常見的第一步，就是在心中製造苦毒——興起讓人受傷的環境，製造背叛、爭執、逼迫，一個原本和睦的家，常在有人決定成為代禱者之後，反而變得無法和睦相處，因為代禱者的生命開始屬於神，不僅屬於這個家，情感受傷便因此而生。妮塔最後鄭重提醒：身為代禱者或牧師，要好好為「不饒恕」爭戰，勝過為任何其他事爭戰——總是要馬上饒恕、忘記，因為拖得越久，就越難饒恕，撒旦也會在魂上放上越多鎖鏈，目的只有一個：搶奪你的產業，毀掉你，使你不能成為一個代禱者。
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
                '「任何不是建立在個人禱告上的事工，神會親自把它拆毀」——這是本講最核心的警告：即便事工看似成功、影響力龐大，若不是建立在扎實的個人禱告生活上，終究無法在神的國度裡站立得住。',
                '撒旦攻擊代禱者的第一招，往往不是直接毀滅，而是「幫助」人靠血氣、才華、魅力建立看似成功的事工，讓人誤以為不需要禱告生活也能為神做大事——這比正面打壓更隱蔽也更危險。',
                '撒旦捆綁代禱者最常用的三個伎倆是拜偶像（尤其是貪愛權能、自我敬拜）、悖逆（日常生活不順服，導致禱告生活也無法順服）、不道德（包括網路上被動接觸的不潔內容）。',
                '大衛王的教訓說明：毀滅性的罪往往從一個看似微小的「不饒恕」開始——苦毒像鎖鏈一層層加在魂上，最終讓仇敵能搶奪一個原本蒙福的生命。',
                '健康的禱告次序是：先與神交流敬拜，再等候領受祂的心意，最後才是順服去做、去代求——而不是一進禱告室就列出一堆自己認為該禱告的事項清單。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「靠血氣建立的成功事工」如何自我檢視？</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔提醒，撒旦最隱蔽的攻擊，是幫助人「成功」，而不是讓人失敗。這對評估任何事工（不限於教會事工，也包括工作、家庭經營）都是重要的提醒：外在的成果、規模、掌聲，不必然代表這是出於神、建立在對的根基上的。健康的自我檢視，或許可以定期誠實問自己：如果沒有禱告生活的支撐，我現在所做的一切，是否還能持續？我是否曾用「太忙了」作為減少禱告時間的理由，卻毫無警覺？
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「順服神看不見的催促」與正常判斷力之間的平衡</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔分享的迷路找地址、突然被打斷回家禱告等經歷，展現了對聖靈微小催促的高度敏銳。這類經歷對大多數讀者而言可能不容易複製，也不需要以此為標準來衡量自己是否「屬靈」。更普遍、可操練的原則，或許是：在日常生活中，願意為神的心意讓出自己的計畫與時間表，哪怕只是一件小事上的調整，也是操練順服的開始，不必等到有戲劇性的異象才願意順服。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「不饒恕的鎖鏈」與心理健康的對話</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔用「鎖鏈」描述不饒恕、苦毒層層累積對人的捆綁，這與現代心理學對長期壓抑憤怒、創傷未被處理如何影響身心健康的觀察，有相通之處。屬靈層面的教導（及時饒恕、不讓苦毒紮根）與心理層面的健康處理（承認受傷、適當表達情緒、必要時尋求輔導）並不衝突，反而可以互相補足——饒恕不代表否認傷害的真實性，而是不讓傷害繼續控制自己的生命。
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
              '你目前投入的事奉或工作，如果撤去所有外在的支持與掌聲，只看你私下的禱告生活，這個「事工」還撐得住嗎？',
              '「撒旦第一招是幫你成功」——回想你生命中一次順利到不太真實的際遇，你如何分辨那是出於神的祝福，還是屬血氣的捷徑？',
              '妮塔說「悖逆的日常生活無法在禱告上順服」。你在日常小事上，是否經常「知道該做卻選擇不做」？',
              '大衛的教訓提醒我們，不饒恕往往是後續更大失敗的開端。你生命中是否有一個尚未處理的不饒恕，正悄悄累積成苦毒？',
              '「禱告室外的生活決定禱告室內的生活」——你覺得自己日常生活的哪個部分，最需要先對齊，禱告才會真正有功效？',
              '面對本講提到的網路、媒體內容的提醒，你認為自己在「被動接觸不潔內容」這件事上，是否有需要調整的地方？',
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
              <h4 className="font-semibold text-green-700 mb-2">🔍 檢視事奉與禱告的比例</h4>
              <p className="text-gray-700 mb-2">誠實記錄一週內，你花在服事、工作準備上的時間，與花在單純禱告、親近神上的時間，看看兩者的比例，並求神光照是否需要調整。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💔 處理一件未解決的不饒恕</h4>
              <p className="text-gray-700 mb-2">
                誠實列出一位你尚未真正饒恕的人，這一週用具體的禱告，一步步把這件事帶到神面前，求神幫助你饒恕，並留意這個決定如何影響你整體的禱告生活。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙇 操練「先敬拜再代求」的禱告次序</h4>
              <p className="text-gray-700 mb-2">
                下一次為所愛的人代禱前，先花五分鐘單純敬拜、等候，再把這人的名字帶到神面前，求神告訴你祂對這人真正的心意，而不是直接列出你認為對方需要什麼。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，求你光照我生命中還沒有建立在禱告上的事工與計畫，赦免我曾靠血氣、靠自己的聰明才幹想要成就大事的心。求你挪去我心中一切的苦毒與不饒恕，不讓仇敵有機可乘。教導我在日常小事上學習順服，使我的禱告生活與日常生活彼此對齊，成為一個真正屬於你的代禱者。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
