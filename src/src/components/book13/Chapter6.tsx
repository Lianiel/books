import { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, Heart, AlertCircle, Shield, Lightbulb, Target, BookOpen, MessageCircle, Moon, Users } from 'lucide-react';

export default function Chapter6() {
  const [expandedSections, setExpandedSections] = useState<string[]>(['about-to-leave','angry-question','first-meeting','frank-face','frank-prayer','frank-surrender','going-home','holy-spirit-call','perfect-timing','suicide-note']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const isExpanded = (section: string) => expandedSections.includes(section);

  return (
    <div className="max-w-4xl mx-auto">
      {/* 標題 */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          第六章 「我叫法蘭克!干你什麼事?」
        </h1>
        <p className="text-lg text-gray-500 mt-2">凌晨 1:45 的神蹟</p>
      </div>

      {/* 章節簡介 */}
      <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-6 mb-8 border-l-4 border-red-500">
        <div className="flex items-start gap-3">
          <Clock className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-semibold text-red-800 mb-3">章節概覽</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              本章記錄了一個戰爭老兵法蘭克的故事。他因戰爭創傷對神充滿怨恨,多次在街頭質問作者同一個問題。
            </p>
            <p className="text-gray-700 leading-relaxed">
              直到某個凌晨 1:30,聖靈催促作者立刻出門。當作者在 1:45 抵達時,法蘭克剛好寫完遺書準備自殺...
            </p>
          </div>
        </div>
      </div>

      {/* 第一次相遇 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('first-meeting')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              第一次相遇:憤怒的質問
            </h3>
          </div>
          {isExpanded('first-meeting') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('first-meeting') && (
          <div className="px-6 pb-6 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              我第一次遇見他——或者更準確地說,是第一次聽見他的聲音——時,他正踏出一間小酒館,大聲咒罵著,朝著我走過來。
            </p>

            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <p className="text-gray-700 leading-relaxed mb-3">
                他離我約有半條街遠,而我前看後看都看不到半個人影。於是我左看右看,想要看看他到底是對誰這麼生氣。
              </p>
              <p className="text-gray-700 leading-relaxed">
                他沒有花太多的時間就走到他的目標——我——的前面,而且當他停下來時,他不僅幾乎貼著我的臉,還繼續扯著嗓門咒罵個不停。
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-500">
              <p className="text-gray-700 leading-relaxed mb-3">
                他猛地倒退了一步,並停止了咆哮。接下來他就站在那裡盯著我看。
              </p>
              <p className="text-gray-700 leading-relaxed italic text-sm">
                (這使我依稀想起從墳塋裡出來,大聲喊著說「時候還沒有到,祢就上這裡來叫我們受苦嗎?」的那個名叫「群」的污鬼。)
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 法蘭克的臉 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('frank-face')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <AlertCircle className="w-6 h-6 text-amber-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              「我叫法蘭克!干你什麼事?」
            </h3>
          </div>
          {isExpanded('frank-face') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('frank-face') && (
          <div className="px-6 pb-6 space-y-4">
            <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500">
              <p className="text-gray-700 leading-relaxed mb-2">
                我問:「你叫什麼名字?」
              </p>
              <p className="text-gray-700 leading-relaxed font-semibold text-amber-700 mb-3">
                他語帶挑釁地迅速回答:「我叫法蘭克!干你什麼事?」
              </p>
            </div>

            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-700 mb-2">戰爭的創傷</h4>
              <p className="text-gray-700 leading-relaxed">
                當我看到他的左臉時,我的側隱之心油然而生。那半張臉整個凹了下去,看起來有如一塊很大的疤;他的左眼和左耳都略微變形。
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-700 mb-2">唯一能說的話</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                我問耶穌我該對他說些什麼。結果只有這幾個字臨到我,並從我的嘴中吐出來:
              </p>
              <p className="text-gray-700 leading-relaxed font-semibold text-blue-700">
                「法蘭克,我就是必須來這裡告訴你耶穌愛你。」
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 憤怒的質問 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('angry-question')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <AlertCircle className="w-6 h-6 text-red-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              同一個問題,一次又一次
            </h3>
          </div>
          {isExpanded('angry-question') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('angry-question') && (
          <div className="px-6 pb-6 space-y-4">
            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-700 mb-2">法蘭克的質問</h4>
              <p className="text-gray-700 leading-relaxed">
                他把臉再次湊到我的面前大聲反駁:<span className="font-semibold text-red-700">「如果真有一位愛的神,當那顆砲彈在我們的壕溝裡爆開時,祂為什麼要讓我活下來?祂又為什麼讓正在我旁邊讀聖經的那個男孩被炸成碎片?」</span>
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              他像機關槍掃射般地快速回答完畢後,就轉身走回那間酒館裡面,一路上繼續充滿怨氣地咒罵著。
            </p>

            <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-700 mb-2">周而復始</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                每當我為了實踐在除夕夜所立下的新年志向,而行走在那些街頭時,同樣的場景總是一次又一次地發生。
              </p>
              <p className="text-gray-700 leading-relaxed">
                我從來無法確切預知何時何地——但一定是晚上——他會從某一扇門走出來,彷彿知道我是專程來找他似的。
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-700 mb-2">作者的掙扎</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                每一次我都耐心聽他喋喋不休的咒罵和牢騷,等著他能夠停頓下來。望著他的臉在我面前晃動,我的靈向神吶喊:
              </p>
              <p className="text-gray-700 leading-relaxed italic">
                「主啊,我要怎麼摸著他的心?他似乎有正當的理由抱怨。我真的不知道該如何回答他。」
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-700 mb-2">唯一的回答</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                但每當他終於停下來時,我所能說的還是同樣的話:<span className="font-semibold text-green-700">「法蘭克,我就是必須來這裡告訴你耶穌愛你。」</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                這句話也總是激起同樣的反應,接著他便快速退回他剛才走出來的那間酒館中。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 聖靈的催促 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('holy-spirit-call')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Moon className="w-6 h-6 text-purple-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              凌晨 1:30 的呼召
            </h3>
          </div>
          {isExpanded('holy-spirit-call') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('holy-spirit-call') && (
          <div className="px-6 pb-6 space-y-4">
            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
              <p className="text-gray-700 leading-relaxed mb-3">
                就這樣,周而復始,每次我回到貧民區,同樣的情況總是重複上演,直到有一天<span className="font-semibold text-purple-700">聖靈把我從沉睡中叫醒</span>,說:
              </p>
              <p className="text-gray-700 leading-relaxed font-semibold text-purple-700">
                「起來!快去市中心,就是現在!」
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              那是一個寒冷的二月天晚上,所以我只是躺在那裡禱告問主:「為什麼?」我並沒有得到任何答案,但要我趕緊起床出門的相同催促卻在我裡頭揮之不去。
            </p>

            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-700 mb-2">理性 vs 順服</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                於是我只好起身,開了十五英里的路去到鳳凰城的市中心。當時已過了凌晨一點半,我有千百種理由認為我應該留在家裡。
              </p>
              <p className="text-gray-700 leading-relaxed">
                我心想:「今晚沒有人會在街上逗留的。夜已經很深了。」當我到達時,果真如我所料,街上看不到任何人影。
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-700 mb-2">持續順服</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                倒是廉價旅社中傳來許多聲音,其間穿插著一個酒館老闆關門打烊,正準備離去的身影。在這段時間裡,一輛警車從我身旁慢慢巡行了兩次,狐疑地看著這個過於年輕、不該於此刻出現在這個街頭的年輕人。
              </p>
              <p className="text-gray-700 leading-relaxed">
                我的理智或與順服角力,但我的靈已向主承諾我要在祂的平安和詩歌中行進。當下這兩者我都有,於是我就繼續一邊走一邊禱告。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 準備放棄 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('about-to-leave')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-gray-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              「如果沒有事發生,我就回家」
            </h3>
          </div>
          {isExpanded('about-to-leave') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('about-to-leave') && (
          <div className="px-6 pb-6 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              看起來什麼事情也不會發生。所以我向主開出條件:
            </p>

            <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-500">
              <p className="text-gray-700 leading-relaxed italic">
                「我要順著這條路往回走。我的車子離這裡有一條半街那麼遠。如果走到那裡還是沒有什麼事發生,那我就要回家去了。我自認這麼做也算是順服祢了。也許祢只是要我走過這個地方為它禱告,也或者我沒有弄清楚祢所要告訴我的事情。」
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 完美的時間 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('perfect-timing')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-green-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              凌晨 1:45 - 完美的時間
            </h3>
          </div>
          {isExpanded('perfect-timing') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('perfect-timing') && (
          <div className="px-6 pb-6 space-y-4">
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <p className="text-gray-700 leading-relaxed mb-3">
                正當我準備調頭往車子的方向走回去,我抬頭看到一間廉價旅社門上的一扇窗。
              </p>
              <p className="text-gray-700 leading-relaxed font-semibold text-green-700">
                透過那扇窗,我瞥見法蘭克正把一件東西交給大夜班的櫃台。
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              接著他轉身看到我站在下面的街上,便沿著階梯走下來,而且一如往常,邊走邊大聲咒罵。我向主呼求說:「耶穌,請祢幫幫我。他如果在這個時候還繼續這樣大吼大叫,我們兩人都會被關進監獄的!」
            </p>

            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-700 mb-2">不一樣的反應</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                夜深人靜並沒有使他有所收斂。他咚咚咚地走下階梯,直奔我的面前,並且一如往常,幾乎貼到我的臉上。
              </p>
              <p className="text-gray-700 leading-relaxed">
                只是這一次他停下來之後不是只盯著我看,而是往後退了一步,看著我,然後抓起我的雙手,將它們合在一起搓起來,並且大叫:<span className="font-semibold text-blue-700">「年輕人,這裡很冷!這麼晚了你還出門跑到這些街上來。你怎麼這麼沒大腦啊?」</span>
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 法蘭克的降服 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('frank-surrender')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6 text-rose-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              「神啊,祢果真是愛我的」
            </h3>
          </div>
          {isExpanded('frank-surrender') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('frank-surrender') && (
          <div className="px-6 pb-6 space-y-4">
            <div className="bg-rose-50 rounded-lg p-4 border-l-4 border-rose-500">
              <p className="text-gray-700 leading-relaxed mb-3">
                我的內心澎湃莫名,不禁衝口而出:<span className="font-semibold text-rose-700">「法蘭克,我就是必須再來這裡一次告訴你耶穌愛你!」</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                當我這回再次說出這幾個字,他開始跪在地上,大聲喊道:
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-700 mb-2">法蘭克的禱告</h4>
              <p className="text-gray-700 leading-relaxed italic">
                「喔,神啊,祢果真是愛我的。這些年來我對祢充滿了怨恨。因為這些怨恨,我拋棄了老婆和家人,而他們卻仍然忠心耿耿地等著我。這個年輕人讓我看見祢仍然愛我。喔,請祢幫助我並且饒恕我。」
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              我們兩人一起流下男兒淚,我對發生在眼前的這件神恩典的傑作,心中充滿了感恩。
            </p>
          </div>
        )}
      </div>

      {/* 遺書 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('suicide-note')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <AlertCircle className="w-6 h-6 text-red-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              遺書:「我再也無法忍受」
            </h3>
          </div>
          {isExpanded('suicide-note') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('suicide-note') && (
          <div className="px-6 pb-6 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              他接著說:「和我一起上樓去。我給你看樣東西。」我們上了階梯,走到夜班的櫃台,法蘭克要回了他的信。那是一封剛封好不久的信。
            </p>

            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-700 mb-2">給妻兒的遺書</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                當我讀著他寫給他忠心妻兒的字字句句,我的心深受感動。他告訴他們,當他們收到這封信時,應該已經得知了他的死訊。
              </p>
              <p className="text-gray-700 leading-relaxed">
                他解釋說,他再也無法忍受自己是他們的拖累這件事。他請他們原諒他結束自己的生命,因為看起來這是惟一的出路。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 法蘭克的禱告 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('frank-prayer')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-indigo-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              法蘭克的最後禱告
            </h3>
          </div>
          {isExpanded('frank-prayer') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('frank-prayer') && (
          <div className="px-6 pb-6 space-y-4">
            <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-500">
              <h4 className="font-semibold text-indigo-700 mb-2">那天下午</h4>
              <p className="text-gray-700 leading-relaxed">
                那天他取得一把手槍,並將它帶回自己的住房。當夜暮漸漸低垂,他知道自己必須做個了斷了。
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-700 mb-2">午夜的呼求</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                但過了午夜,他的心卻忍不住向神吶喊:
              </p>
              <p className="text-gray-700 leading-relaxed italic font-semibold text-purple-700">
                「喔,神啊,如果祢當真愛我,那祢今天晚上就再把那個年輕人派來這裡告訴我一次。如果祢派他來,我就不結束自己的生命。」
              </p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-700 mb-2">在街上尋找</h4>
              <p className="text-gray-700 leading-relaxed">
                然後他就走出旅社,在街上四處遊蕩,直到凌晨一點四十五分。他看到我沒有出現,變得更加沮喪,便回到房間寫下了那封信。
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-700 mb-2">神的回應</h4>
              <p className="text-gray-700 leading-relaxed">
                當他將信交給值班的櫃台,一回頭看到我就站在下面的那一刻,我們彼此心中同享的那份喜悅真是難以形容!
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 回家 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('going-home')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6 text-amber-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              回家團圓
            </h3>
          </div>
          {isExpanded('going-home') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('going-home') && (
          <div className="px-6 pb-6 space-y-4">
            <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500">
              <p className="text-gray-700 leading-relaxed mb-3">
                談到這裡他告訴我,我再也不會在這個貧民區的街上看到他了,因為他即將回家與妻兒團圓。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我可以老實告訴你,我從此真的沒在那裡遇見過他了。
              </p>
              <p className="text-gray-700 leading-relaxed italic">
                有時候我會隨著心裡的負擔為他和他的家人禱告。我相信當我們下次再相遇,那將會是在天堂毫無瑕疵的黃金街上。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 深度反思 */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-8 border-l-4 border-blue-600">
        <div className="flex items-start gap-3">
          <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">深度反思問題</h3>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">1. 面對「無法回答」的問題</h4>
                <p className="text-gray-700 mb-2">• 法蘭克的問題很難回答:「為什麼神讓我活,讓讀聖經的人死?」</p>
                <p className="text-gray-700 mb-2">• 作者也不知道答案,但他只說「耶穌愛你」</p>
                <p className="text-gray-700">• 你是否曾遇到無法回答的屬靈問題?你如何回應?</p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">2. 重複同樣的話</h4>
                <p className="text-gray-700 mb-2">• 作者一次又一次對法蘭克說同樣的話</p>
                <p className="text-gray-700 mb-2">• 看似沒有果效,但神在使用</p>
                <p className="text-gray-700">• 你會不會因為「沒有立即果效」就放棄對某人傳福音?</p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">3. 凌晨 1:30 的順服</h4>
                <p className="text-gray-700 mb-2">• 聖靈在深夜叫醒作者,要他立刻出門</p>
                <p className="text-gray-700 mb-2">• 沒有解釋,沒有理由,只是「現在!」</p>
                <p className="text-gray-700">• 如果是你,你會順服嗎?還是會說「明天再去」?</p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">4. 15 分鐘的差距</h4>
                <p className="text-gray-700 mb-2">• 法蘭克在 1:45 交出遺書</p>
                <p className="text-gray-700 mb-2">• 作者剛好在 1:45 抵達</p>
                <p className="text-gray-700">• 如果晚 15 分鐘,法蘭克可能已經自殺。你相信神掌管時間嗎?</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 行動指南 */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 mb-8 border-l-4 border-green-600">
        <div className="flex items-start gap-3">
          <Target className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-green-800 mb-4">實踐行動指南</h3>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full text-sm">1</span>
                  不要放棄「看似沒果效」的人
                </h4>
                <p className="text-gray-700 mb-3">
                  有沒有某個人你已經傳福音很多次,但他總是拒絕?
                </p>
                <ul className="space-y-2 text-gray-700 pl-4">
                  <li>• 不要放棄,繼續為他禱告</li>
                  <li>• 神可能正在做你看不見的工作</li>
                  <li>• 你的「重複」可能正是神的計畫</li>
                  <li>• 列出 3 個你要繼續為他們禱告的人</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full text-sm">2</span>
                  即時順服,不要拖延
                </h4>
                <p className="text-gray-700 mb-3">
                  當聖靈催促你做某事時:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4">
                  <li>• 不要問「為什麼」,先順服</li>
                  <li>• 不要說「等一下」或「明天再說」</li>
                  <li>• 生命可能在那 15 分鐘的延遲中失喪</li>
                  <li>• 練習:當你想到要為某人禱告或聯絡某人時,立刻做</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full text-sm">3</span>
                  準備好說簡單的真理
                </h4>
                <p className="text-gray-700 mb-3">
                  面對複雜問題時:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4">
                  <li>• 你不需要有所有答案</li>
                  <li>• 簡單的「耶穌愛你」可能比神學論述更有力</li>
                  <li>• 求神給你一句話,而不是一篇講章</li>
                  <li>• 練習用一句話分享福音</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full text-sm">4</span>
                  為「難搞的人」禱告
                </h4>
                <p className="text-gray-700 mb-3">
                  法蘭克一次又一次咒罵、質問,但作者沒有放棄:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4">
                  <li>• 列出那些「讓你頭痛」的人</li>
                  <li>• 承諾每天為他們禱告一個月</li>
                  <li>• 求神給你機會再次向他們傳福音</li>
                  <li>• 相信神的時間,不是你的時間</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 延伸探討 */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 mb-8 border-l-4 border-purple-600">
        <div className="flex items-start gap-3">
          <BookOpen className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">延伸探討</h3>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-3">一、神的時間精準到分鐘</h4>
                <p className="text-gray-700 mb-3">
                  這個故事展現驚人的時間精準度:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4 mb-3">
                  <li>• 午夜後:法蘭克禱告求神派人來</li>
                  <li>• 凌晨 1:30:聖靈叫醒作者</li>
                  <li>• 1:30-1:45:作者開車 15 英里</li>
                  <li>• 1:45:法蘭克剛好交出遺書,轉身看見作者</li>
                </ul>
                <p className="text-gray-700 mb-3">
                  如果任何一個時間點不同:
                </p>
                <ul className="space-y-1 text-gray-700 pl-4">
                  <li>• 早 10 分鐘 → 法蘭克還在街上,可能錯過</li>
                  <li>• 晚 10 分鐘 → 法蘭克可能已經自殺</li>
                  <li>• 作者說「明天再去」→ 法蘭克死了</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-3">二、重複的能力</h4>
                <p className="text-gray-700 mb-3">
                  作者一次又一次說同樣的話:「法蘭克,耶穌愛你」
                </p>
                <p className="text-gray-700 mb-3">
                  為什麼重複很重要?
                </p>
                <ul className="space-y-2 text-gray-700 pl-4 mb-3">
                  <li>• <span className="font-semibold">建立一致性:</span> 讓法蘭克知道這不是隨便說說</li>
                  <li>• <span className="font-semibold">穿透防衛:</span> 每次重複都是在軟化剛硬的心</li>
                  <li>• <span className="font-semibold">成為記號:</span> 當法蘭克禱告時,他知道要等這個人說這句話</li>
                  <li>• <span className="font-semibold">神的策略:</span> 神透過重複來工作</li>
                </ul>
                <p className="text-gray-700">
                  不要小看「重複」的力量。有時候神要我們說一百次同樣的話。
                </p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-3">三、你不需要有所有答案</h4>
                <p className="text-gray-700 mb-3">
                  法蘭克的問題是真實的、困難的:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4 mb-3">
                  <li>• 為什麼讀聖經的好人死了?</li>
                  <li>• 為什麼我這個罪人活下來?</li>
                  <li>• 神在哪裡?神為什麼允許?</li>
                </ul>
                <p className="text-gray-700 mb-3">
                  作者也不知道答案。但他沒有:
                </p>
                <ul className="space-y-1 text-gray-700 pl-4 mb-3">
                  <li>• 試圖用神學解釋</li>
                  <li>• 說「這是神的旨意」(容易引起反感)</li>
                  <li>• 迴避問題</li>
                </ul>
                <p className="text-gray-700">
                  他只是說:「耶穌愛你。」有時候,愛的見證比神學答案更有力。
                </p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-3">四、忠心妻兒的角色</h4>
                <p className="text-gray-700 mb-3">
                  法蘭克說:「他們卻仍然忠心耿耿地等著我」
                </p>
                <p className="text-gray-700 mb-3">
                  他的妻兒在背後:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4 mb-3">
                  <li>• 沒有放棄他</li>
                  <li>• 繼續等待</li>
                  <li>• 可能一直在禱告</li>
                </ul>
                <p className="text-gray-700">
                  神使用作者說「耶穌愛你」,也使用妻兒的忠心等待。救恩是團隊工作。
                </p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-3">五、凌晨順服的代價</h4>
                <p className="text-gray-700 mb-3">
                  作者的順服不容易:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4 mb-3">
                  <li>• 半夜被叫醒</li>
                  <li>• 開車 15 英里</li>
                  <li>• 寒冷的二月夜晚</li>
                  <li>• 街上沒有人</li>
                  <li>• 警察巡邏兩次(可能被誤會)</li>
                  <li>• 理智說「回家吧」</li>
                </ul>
                <p className="text-gray-700 mb-3">
                  但如果他說「明天再去」:
                </p>
                <ul className="space-y-1 text-gray-700 pl-4">
                  <li>• 法蘭克會自殺</li>
                  <li>• 妻兒失去丈夫/父親</li>
                  <li>• 一個靈魂失喪</li>
                </ul>
                <div className="bg-purple-50 rounded p-3 mt-3">
                  <p className="text-gray-700">
                    <span className="font-semibold">真理:</span> 你的不方便順服,可能是某人的生死關鍵。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 本章金句 */}
      <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-6 border-l-4 border-amber-600">
        <div className="flex items-start gap-3">
          <MessageCircle className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-semibold text-amber-800 mb-3">本章金句</h3>
            <p className="text-lg text-gray-800 italic mb-4">
              「法蘭克,我就是必須來這裡告訴你耶穌愛你。」
            </p>
            <p className="text-gray-700 mb-4">
              有時候,神要我們說一百次同樣的話。有時候,祂要我們在凌晨 1:30 立刻出門。順服可能不方便、不合理、看不見果效,但你的順服可能正是某人的生死關鍵。
            </p>
            <p className="text-gray-700 font-semibold">
              神的時間精準到分鐘。不要說「明天再說」,因為明天可能太遲了。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
