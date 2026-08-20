import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book37Ch3() {
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
        <h2 className="text-xl font-semibold text-gray-700">在愛中行事的信心</h2>
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
              妮塔說，這一講要談得到復興之後如何持守它——生產一個復興需要付出極大的代價，若得到這個禮物、品格卻有缺陷，很快就會失去它。她坦言自己是出於愛才來分享這些真情告白：「我很在乎你們，也很關切神在你們教會的計畫和目的」，她要把自己所犯的錯誤說出來，好讓大家不用重蹈覆轍，如同母親對孩子的心腸。
            </p>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">一、恩膏之下什麼人都能愛——一個醫治的教訓</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔分享服事初期的一次經歷：在奧勒岡州一間教會服事，一位年長男士上前請她為背痛禱告，她簡單一句禱告後，這位男士立刻得了醫治。事後師母臉色蒼白地把她拉到一旁，告知這位「溫和慈祥」的男士其實曾外遇、把妻子（一位基督徒）趕到客廳，帶給妻子極大痛苦。她坦言聽到後自己臉也變得慘白，但她從這件事學到一個功課：神的愛與恆久忍耐，是要引人悔改，而不是出於人的審判——這位男士後來也因這次醫治而信主得救。她強調，恩膏臨到時，人會發現自己什麼人都能愛；但她想告訴會眾的是，即便不在恩膏之下，她仍然是真心愛他們的。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">二、復興中信心的見證</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔分享服事初期，在復興大能的同在中，信心會變得單純而堅定——相信神願意做、也能夠做任何事。她舉了三個見證：一是一位母親抱著天生沒有腳跟骨、腳被石膏固定的一歲半嬰孩前來求禱告，她按手禱告約三十秒後宣告孩子得醫治；後來醫院X光顯示孩子擁有完美的腳跟骨、腿骨和腳，連醫生都無法解釋。二是一位年輕女孩在沒有人觸碰的情況下被神的大能擊倒、昏迷約半小時，醒來後說看見天使觸摸她兩邊臉頰、告訴她要矯正她原本需要手術才能處理的智齒問題，事後父親檢查發現牙齒真的被矯正了。三是一位弟兄求她為耳朵禱告，禱告後他像被重擊腹部般整個人騰空跌落，起身後聽力完全恢復——她事後得知這位弟兄天生耳膜發育不正常，即使戴最好的助聽器也只能勉強聽到微弱聲音。她說，在復興中運行是非常奇妙的經歷，人會為神所能做、所願意做的一切而驚異。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">三、恩膏因缺少愛而離開——她的親身教訓</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔坦承，疲憊時人會變得不耐煩。她分享一次與同工一起吃午餐時，對方正經歷試煉、把情緒發洩在她身上，她只回了一句話卻是帶著怒氣的，話一出口她就感覺恩膏離開了自己——她病得很重，走進餐廳時還能自己走，離開時卻需要人攙扶。她在車上問神原因，神回答：「當你要在我榮耀中運行，你需要行走在愛裡。當你學會愛的功課，我就把恩膏還給你。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她也分享一個異夢：曾有幾位弟兄在美國一次大復興中被神大大使用，數年後神的能力卻離開、事工分崩離析。她在異夢中看見一間曾經充滿榮耀、坐滿信徒的教會，後來神的同在離開、教會只剩原本的幾分之一，天使向她解釋：「我一次又一次要處理這位牧師脾氣的問題，但他卻不聽，因此這個牧師就失去他的恩膏。」她總結，一個人對待他人的方式，顯明他是否真有品格——而神所定義的品格，就是神聖的愛。她說，末世神所尋找的領袖與教會，是願意付代價學習神聖之愛的人；她也提到，查理斯·芬尼（Charles Finney）終生被神使用在復興中，直到被主接回天家，從未經歷恩膏離開的失落。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">四、哥林多前書十三章——沒有愛，就算不得什麼</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔引哥林多前書十三章1-3節：「我若能說萬人的方言，並天使的話語，卻沒有愛，我就成了鳴的鑼，響的鈸一般……」，並引第4-7節「愛是恆久忍耐，又有恩慈……凡事包容，凡事相信，凡事盼望，凡事忍耐。愛永不止息」，指出不論方言、先知講道、知識奧秘、移山的信心，甚至捨己焚身，若沒有愛都毫無意義。她說，若一個人不行走在愛中，就會嚴厲、喜歡批判、爭競、嫉妒——若神把能力放在這樣的人身上，反而會給教會帶來麻煩；若神給了一個人盛載復興的特權，卻始終沒有學會愛，神最終會把這人棄置一旁，恩膏會漸漸離開，最終所成就的都是靠自己的能力而非神的能力。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她強調，若渴望被神更高地使用，就必須從謙卑開始，最終進入愛的操練——若真心渴望學習神的愛，神會刻意讓身邊出現許多不容易相處的人，且不是短期的，好讓人每天都有機會操練像耶穌一樣的愛。她分享神曾對她說，教導她這些屬靈啟示，其中一個原因是「想讓我的教會嫉妒」——當人們聽見她與神的關係、渴望也擁有同樣的關係。她提醒，神給人啟示，不是為了讓人出名，而是為了在人裡面塑造基督的形像，使人能把這啟示帶給教會，這需要付上代價。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">五、以弗所書三章與求神愛而「怕爆炸」的禱告</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔引以弗所書三章16-21節：「求他按著他豐盛的榮耀，藉著他的靈，叫你們心裡的力量剛強起來……叫神一切所充滿的，充滿了你們」，指出人裡面需要被聖靈充滿堅固，才能承載並經歷神愛的長闊高深。她分享初信主時，曾迫切地向神禱告，求祂讓自己經歷祂最大量的愛；有一晚十一點，神回應說：「妮塔，我沒辦法回應你這樣的禱告。」她追問原因，神說：「我如果真的回應了你的禱告，你的人就會爆炸掉。」她解釋，愛本身是神的生命、能力與活潑的能量，人殘破的肉體無法一次盛裝那樣浩大的生命，因此需要聖靈長時間堅固人裡面的靈人，才能逐漸承載神愛的寬度、長度、高度、深度。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                她引歌羅西書二章9-10節：「因為神本性一切的豐盛，都有形有體地居住在基督裡面……你們在他裡面也得了豐盛」，說明信徒在基督裡同樣能被聖父、聖子、聖靈充滿到豐盛的地步，行走在得勝的生命裡，像神一樣去愛，讓愛如河流般從裡面湧流出來，這樣的愛能改變列國、影響各族群。她提到，神向她啟示過，中國最需要的正是神無條件、無法測度的愛，這樣的愛能融化一切懼怕與憂慮、揭露一切謊言，沒有人能拒絕。她總結，神聖的愛本身就是一種權柄、能力、神的生命；教會若真正住在這樣的愛裡，一切都會改變——她以耶穌一個下午醫治格拉森被六千個鬼附的人為例，說明在神聖之愛的能力裡，教會原本需要一生才能處理的事，可能在極短時間內就被成就。她引提摩太前書一章5節：「但命令的總歸就是愛，這愛是從清潔的心和無虧的良心、無偽的信心生出來的」，作為這一段的總結。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-fuchsia-800 text-lg mb-3">六、查理斯·芬尼的至高之處，與十字架上的愛</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔再次提到查理斯·芬尼，說他終生行走在與神完全的聯合中——神曾試驗他，讓他面對「若神喜悅，他願意與神永遠分離、落在地獄裡」這樣的抉擇，當芬尼如此回應時，主對他說：「你已經達到愛的至高之處，你再也不會與我分離。」妮塔以此邀請眾人回應這樣的呼召。
              </p>
              <p className="text-gray-700 leading-relaxed">
                最後，她分享初信主時曾向主禱告，渴望明白十字架苦難的每一個層面，好使自己更愛主；她說主多次回應了這個禱告，只是那痛苦太大，她無法一次看完。她描述所看見的：主被鞭打、吐唾沫時，心中從未有一絲憎恨或反抗，只有愛；被荊棘冠冕刺穿、血流滿面時，感受到的仍是愛；被釘十字架、身體因疼痛不斷抽搐時，望著十字架下的眾人，湧流出來的依然只有愛，沒有一絲苦毒。她描述那最艱難的一刻——天父的同在第一次離開祂，主的眼睛睜大、急切地尋找父——妮塔說她看到這一幕，忍不住不斷哭泣，問主：「你為什麼要經歷如此的痛苦？」主回答：「那是為了你，為了你。」她說，主完全不需要如此受苦，祂大可以求天父差遣十二營天使來搭救祂，但祂為了愛的緣故，甘願如此犧牲。
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
                '生產一個復興需要付出極大的代價，但持守復興靠的不是恩膏本身，而是品格——尤其是神聖的愛。',
                '哥林多前書十三章的教導是這一講的核心：不論方言、知識、信心、捨己，若沒有愛，在神眼中都算不得什麼。',
                '妮塔以自身經歷說明：一次未行在愛裡的怒氣爆發，就足以讓恩膏當場離開；反過來，查理斯·芬尼終生持守愛的功課，恩膏也終生未曾離開。',
                '真實渴望學習神的愛，神會刻意安排身邊出現不易相處的人，作為日常操練愛的功課的機會——這是神所允許的「愛的訓練場」。',
                '十字架的核心動機是愛：主在極度痛苦中從未有一絲憎恨或苦毒，湧流出來的只有愛——這是所有屬靈恩賜與能力最終都要回歸的根基。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「恩膏因一次發怒瞬間離開」的教導，如何理解才不致落入恐懼？</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔用自己一次生病的經歷來說明恩膏與品格的關聯，這類第一手見證帶有強烈的個人詮釋色彩，讀者不必把它理解成「每次發脾氣，恩膏就會消失」這樣機械化的因果律。更穩妥的理解方式，是把這段見證當作提醒：長期缺乏愛心、缺乏節制的生命樣式，終究會影響一個人事奉的果效與生命的見證（加拉太書五章22-23節，節制本身就是聖靈的果子之一），而不必因為一時情緒失控就活在「恩膏已經離開我」的恐懼與自我論斷中——神的恩典夠用，悔改認罪後神仍然願意繼續使用願意回轉的人（約翰一書一章9節）。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「神安排不可愛的人在你身邊，好讓你學習愛」，這個觀點如何看待？</h4>
              <p className="text-gray-700 leading-relaxed">
                這個觀點與羅馬書五章3-4節「患難生忍耐，忍耐生老練，老練生盼望」的精神相呼應，提醒人際關係中的摩擦可以成為屬靈成長的機會。但讀者也需要留意，這不代表人應該被動忍受一切傷害性或有害的關係——聖經同時也教導設立界限、遠離持續性的惡待（如箴言二十二章24-25節提醒不要與好生氣的人結交）。健康的理解是：日常人際摩擦中操練饒恕與忍耐是重要的屬靈功課，但這不等同於必須留在真正具傷害性、需要尋求協助或界限保護的關係中。
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
              '重讀哥林多前書十三章4-7節，哪一句你覺得自己目前生命中最欠缺、最需要操練？',
              '你身邊是否有一位「不容易相處的人」，回顧這段關係，你認為神想藉此在你身上操練什麼功課？',
              '妮塔說「神給啟示不是為了讓人出名，而是為了在人裡面塑造基督的形像」。你如何檢視自己追求屬靈恩賜背後真正的動機？',
              '默想十字架上耶穌「沒有一絲憎恨，只有愛」的畫面，這對你如何面對生命中曾傷害過你的人，有什麼提醒？',
              '查理斯·芬尼終生持守恩膏，未曾像妮塔一樣經歷失落。這對你追求「持久」而非「一時」的屬靈果效，有什麼啟發？',
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
              <h4 className="font-semibold text-green-700 mb-2">📜 逐句默想哥林多前書十三章4-7節</h4>
              <p className="text-gray-700 mb-2">把「愛」換成自己的名字重讀這段經文（如「[你的名字]是恆久忍耐……」），誠實檢視哪些字句讀起來覺得刺痛或不合身，並帶到神面前禱告。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🕊️ 練習「當下悔改」而非「累積怒氣」</h4>
              <p className="text-gray-700 mb-2">
                本週留意自己一次感到不耐煩或動怒的時刻，練習在當下（而非事後）迅速在心裡向神承認、求祂幫助你在那個當下選擇愛。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💌 為一位不容易相處的人祝福禱告</h4>
              <p className="text-gray-700 mb-2">
                想一位目前讓你感到疲憊或不易相處的人，這一週每天為他做一個具體的祝福禱告，觀察這樣的操練如何逐漸軟化你對他的態度。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，求你剛強我裡面的人，使我能承載並活出祢愛的長闊高深。求你光照我生命中缺乏愛心、容易發怒論斷的地方，教導我在每一次的試煉中，持續選擇去愛、去愛、去愛。願你聖潔的愛透過我如江河湧流出來。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
