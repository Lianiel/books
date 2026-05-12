import { useState } from 'react';
import { ChevronDown, ChevronUp, TrendingUp, Brain, Eye, Heart, Shield, Lightbulb, Target, BookOpen, MessageCircle, Zap, Users } from 'lucide-react';

export default function Chapter4() {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

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
          第四章 操練——長大成人的關鍵
        </h1>
        <p className="text-lg text-gray-500 mt-2">從小事開始,習練心竅</p>
      </div>

      {/* 章節簡介 */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 mb-8 border-l-4 border-green-500">
        <div className="flex items-start gap-3">
          <TrendingUp className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-semibold text-green-800 mb-3">章節概覽</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              神不會一開始就讓你面對持刀威脅,祂會從生活中的小事開始訓練你。本章教導如何透過操練五感來分辨善惡,並且在每個處境中將事情帶到天父面前。
            </p>
            <p className="text-gray-700 leading-relaxed">
              關鍵是:不隨血氣起舞,而是保持與天父的親密關係。
            </p>
          </div>
        </div>
      </div>

      {/* 從小事開始 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('small-things')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Zap className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              神從小事開始訓練你
            </h3>
          </div>
          {isExpanded('small-things') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('small-things') && (
          <div className="px-6 pb-6 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              現在我想花點時間來幫助你明白,遇到這種情況時該怎麼做。我要鼓勵你的是,如果你求神教導你明白這個道理,<span className="font-semibold text-blue-700">祂絕不會一開始就找個人拿把刀架在你的喉嚨上</span>。
            </p>
            
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-700 mb-2">神的訓練方式</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                祂會從較小的事情開始——像是你和你的兄弟或姊妹、丈夫或妻子、鄰居或在公路上所遇到的陌生人之間的齟齬。
              </p>
              <p className="text-gray-700 leading-relaxed">
                在這種時候,你怎麼知道該怎麼做呢?
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 心竅習練得通達 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('senses-training')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Brain className="w-6 h-6 text-purple-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              心竅習練得通達
            </h3>
          </div>
          {isExpanded('senses-training') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('senses-training') && (
          <div className="px-6 pb-6 space-y-4">
            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
              <p className="text-gray-700 leading-relaxed italic mb-2">
                希伯來書五章 14 節:
              </p>
              <p className="text-gray-700 leading-relaxed">
                「惟獨長大成人的〔即成熟的人〕才能吃乾糧;他們的<span className="font-semibold text-purple-700">心竅習練得通達</span>,就能分辨好歹了。」
              </p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-700 mb-2">錯誤的操練</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                現今許多人不斷在操練他們的「感受」。他們可以告訴你所有有關歌利亞的事。他們可以告訴你每一件殘暴的謀殺案、強姦案和其他各種兇殺案鉅細靡遺的內容與過程。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                他們還可以歷歷如繪地描述他們在報章、雜誌或電影中所看到的傷風敗俗之事。他們甚至對這一切感到十分無力或憤怒。
              </p>
              <p className="text-gray-700 leading-relaxed">
                但這並無法改變現狀,不是嗎?
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-700 mb-2">正確的操練</h4>
              <p className="text-gray-700 leading-relaxed">
                那麼,「操練你的心竅」究竟指的是什麼?這節經文說經常使用你的五感(視覺、嗅覺、聽覺、味覺和觸覺)將能使你分辨善惡。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 五感的運作 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('five-senses')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Eye className="w-6 h-6 text-indigo-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              五感如何運作
            </h3>
          </div>
          {isExpanded('five-senses') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('five-senses') && (
          <div className="px-6 pb-6 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              人們總是告訴我:「我沒有任何分辨力。」我的回答是,你的感官一天廿四小時都在不眠不休地將資訊傳遞給你。
            </p>

            <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-500">
              <ul className="space-y-2 text-gray-700">
                <li>• 你<span className="font-semibold">看見</span>時,你會思考所看到的</li>
                <li>• 你<span className="font-semibold">聽到</span>時,你會思考所聽到的</li>
                <li>• 你<span className="font-semibold">嗅聞</span>時,你會思考所聞到的</li>
                <li>• 你<span className="font-semibold">觸摸</span>時,你會思考所摸到的</li>
                <li>• 你<span className="font-semibold">品嚐</span>時,你會思考所嚐到的</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-blue-700">關鍵:</span> 你如何思考你的五官所感受到的事物,就是在操練你的心竅。
              </p>
              <p className="text-gray-700 leading-relaxed">
                你現在清楚了嗎?如果我看見邪惡之事,我就知道它是邪惡的,不是嗎?如果我聞到好聞的東西,我就知道它是好的,不是嗎?
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-700 mb-2">神給你五感是有目的的</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                神並不禁止你看、去聽、去聞、去觸摸和去品嚐;是祂給了你這些感官。它們就是我所謂的「夜貓的鬍鬚」。
              </p>
              <p className="text-gray-700 leading-relaxed">
                貓在晚上或許無法看見,但牠可以感覺、可以感受,不是嗎?鬍鬚就是牠感官的一部分。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 分辨善惡的操練 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('discernment')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-amber-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              分辨善惡:將事情帶到天父面前
            </h3>
          </div>
          {isExpanded('discernment') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('discernment') && (
          <div className="px-6 pb-6 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              我們必須開始在生活中操練自己的感官以分辨兩件事——善與惡。你或許會說:「亨利,我知道它們的差別。這根本就不是問題好嗎?」
            </p>

            <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500">
              <p className="text-gray-700 leading-relaxed mb-3">
                沒錯,但<span className="font-semibold text-amber-700">如果我們隨著自己的血氣起舞,用人的方式來面對,而不是將事情帶到天父的面前</span>,那問題就來了。
              </p>
              <p className="text-gray-700 leading-relaxed">
                那麼,我們又該如何將事情帶到天父的面前呢?
              </p>
            </div>

            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-700 mb-2">實例:面對淫念</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                比方說,我看見一件使我心思起淫念的東西。我該怎麼處理那個意念?
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-red-700">隨血氣起舞:</span> 假使我隨著血氣起舞,順著人的本性,我就在腦海裡拼命想著它,於是它就成了我的罪。
              </p>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-green-700">不隨血氣起舞:</span> 然而我不可以那樣做,因為我記得歌羅西書三章3節告訴我,我已經死了,與基督一同埋葬,藏在神的裡面。為了得著我的生命,首先我必須找到祂把它藏在哪裡。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 罪切斷親密關係 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('sin-breaks-intimacy')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6 text-rose-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              罪切斷與神的親密關係
            </h3>
          </div>
          {isExpanded('sin-breaks-intimacy') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('sin-breaks-intimacy') && (
          <div className="px-6 pb-6 space-y-4">
            <div className="bg-rose-50 rounded-lg p-4 border-l-4 border-rose-500">
              <p className="text-gray-700 leading-relaxed mb-3">
                當罪進入我們的身體,我們就死了,因為罪切斷了我們與天父之間的密契和交通。
              </p>
              <p className="text-gray-700 leading-relaxed italic mb-2">
                創世記二章 17 節:
              </p>
              <p className="text-gray-700 leading-relaxed">
                「只是分別善惡樹上的果子,你不可吃,因為你吃的日子必定死!」
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-700 mb-2">伊甸園的教訓</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                這裡所指的就是失去與天父之間的親密關係。每天傍晚天涼的時候,神會來到園中與亞當一邊散步一邊聊天。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                夏娃來到伊甸園之後也很清楚神的命令。祂警告他們如果吃了祂說不能吃的果子而犯了罪,他們和祂之間的親密關係就會終止。
              </p>
              <p className="text-gray-700 leading-relaxed">
                結果發生了什麼事?他們還是吃了,對不對?他們和天父之間的交通和密契也從此斷絕。
              </p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-700 mb-2">失去的能力</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                他們失去了向創造主輕鬆討教不了解之事的能力。他們可以分辨善惡,但卻無力勝過罪惡。
              </p>
              <p className="text-gray-700 leading-relaxed">
                罪開始在他們的肉體中掌權,於是他們最後死了——而且之後所有的人類都是生下來便註定步向死亡。<span className="font-semibold text-yellow-700">罪一旦進來,並在你的肉體掌權,你就死了!</span>
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 恢復親密關係 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('restoration')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6 text-green-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              透過耶穌恢復親密關係
            </h3>
          </div>
          {isExpanded('restoration') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('restoration') && (
          <div className="px-6 pb-6 space-y-4">
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <p className="text-gray-700 leading-relaxed mb-3">
                當罪進來並在你的肉體掌權,你便失去與天父之間的親密關係。<span className="font-semibold text-green-700">感謝神,透過耶穌基督,你不再被定罪和判死刑了!</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                你可以承認你的罪,而祂會以祂的信實和公義饒恕你!
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-700 mb-2">關鍵問題</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                問題不在於你是否犯了罪。問題在於當你看到、聽到、聞到、嗅到、嚐到或摸到罪的時候,你會怎麼做?
              </p>
              <p className="text-gray-700 leading-relaxed">
                你會隨著血氣起舞並試圖以自己的智慧來處理它,還是會將它帶到天父的面前?
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-700 mb-2">保持親密關係</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                重點是我們要與天父親密同行,不讓任何人事物中斷那份親密關係。保羅在羅馬書第八章問眾信徒是否有任何事或任何人能使我們與那在主耶穌基督裡的神的愛隔絕。他用鏗鏘有力的「不!」回答了那個問題。
              </p>
              <p className="text-gray-700 leading-relaxed">
                我們一定要與他立場一致,<span className="font-semibold text-purple-700">不讓任何人事物有機會拆散我們和天父之間的親密關係</span>。祂渴望我們這麼做;恢復和祂之間的親密關係是絕對必要之事。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 救恩禱告 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('salvation-prayer')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-indigo-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              救恩的禱告
            </h3>
          </div>
          {isExpanded('salvation-prayer') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('salvation-prayer') && (
          <div className="px-6 pb-6 space-y-4">
            <p className="text-gray-700 leading-relaxed mb-4">
              當你讀這本書時,如果你發現自己從未真正領受過耶穌誕生、死亡和復活的「好消息」,也許你應該開始操練你的感官使你「得生」,而非操練它們使自己「入死」了。
            </p>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border-l-4 border-indigo-500">
              <h4 className="font-semibold text-indigo-700 mb-4 text-center">請同我這樣禱告:</h4>
              
              <div className="space-y-4 text-gray-700 leading-relaxed italic">
                <p>
                  親愛的天父,我以我起初受造的樣式來到祢面前。我了解自己生下來便註定走向死亡。我現在領受信心,相信祢是一位有眼可看、有耳可聽、有手可觸、有鼻可聞,並有可分辨苦與甜、善與惡的味覺的神。祢同時也是一位願意與我散步在伊甸園中,傾聽我、甚至渴望聽到我聲音的神。
                </p>

                <p>
                  從今天開始,我立下心志,盼望在我有生之年的每一天,真實經歷與祢之間的親密關係。請祢進入我的心和我的生命之中,白白賞賜給我與祢密契和交通的能力。
                </p>

                <p>
                  我了解我的罪扼殺了我與祢之間的親密關係。我像亞當和夏娃一樣躲避祢的面,並且尋求以人的方式來遮蓋自己所犯的罪,正如他們用無花果樹的葉子遮蓋他們的罪一樣。
                </p>

                <p>
                  我現在明白,我這麼做是因為我從來沒有了解到親密關係和饒恕的真諦是什麼。我相信當我呼求祢時,祢的確是惟一能以永恆的救恩拯救我的那一位。我相信祢會重新恢復我與祢之間的親密關係,在其中身兼我的創造者、天父和朋友,並且祢還是應許絕不再離棄我、留我孤獨一人的那一位。
                </p>

                <p>
                  耶穌,謝謝祢來到這個世界,引導我如何改變自己回到天父的懷中。耶穌,謝謝祢為了遮蓋我的罪,付上接受刑罰的代價,在十字架上傾流祢的寶血。聖靈,謝謝祢回應耶穌的禱告,現在就進入了我的心中,教導我如何不隨著自己的血氣起舞。
                </p>

                <p className="text-center font-semibold not-italic">
                  阿們。
                </p>
              </div>
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
                <h4 className="font-semibold text-blue-700 mb-2">1. 你如何操練你的感官?</h4>
                <p className="text-gray-700 mb-2">• 當你看到、聽到、聞到不好的事物時,你的第一反應是什麼?</p>
                <p className="text-gray-700 mb-2">• 你是沉浸其中(操練入死),還是帶到神面前(操練得生)?</p>
                <p className="text-gray-700">• 你花更多時間在媒體的負面資訊,還是神的話語?</p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">2. 小事中的操練</h4>
                <p className="text-gray-700 mb-2">• 回想今天有沒有「小事」讓你不愉快(家人、同事、交通)?</p>
                <p className="text-gray-700 mb-2">• 你當時是隨血氣起舞,還是將事情帶到天父面前?</p>
                <p className="text-gray-700">• 如果再來一次,你會如何回應?</p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">3. 罪如何影響你與神的關係?</h4>
                <p className="text-gray-700 mb-2">• 有沒有某個罪讓你不敢親近神?</p>
                <p className="text-gray-700 mb-2">• 你是用「無花果葉」遮蓋(自己處理),還是坦誠來到神面前?</p>
                <p className="text-gray-700">• 你相信神真的會饒恕你嗎?</p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">4. 與天父的親密關係</h4>
                <p className="text-gray-700 mb-2">• 你渴望像伊甸園那樣與神「散步聊天」嗎?</p>
                <p className="text-gray-700 mb-2">• 什麼阻礙了這份親密關係?</p>
                <p className="text-gray-700">• 你願意每天花時間單獨與神相處嗎?</p>
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
                  從小事開始操練
                </h4>
                <p className="text-gray-700 mb-3">
                  這週選擇一個「小衝突」場景操練:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4">
                  <li>• 家人的一句話讓你不舒服</li>
                  <li>• 同事做了讓你生氣的事</li>
                  <li>• 開車時被人插隊</li>
                </ul>
                <p className="text-gray-700 mt-3">
                  在回應前,先停下來禱告:「天父,我該如何回應?」
                </p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full text-sm">2</span>
                  操練五感分辨善惡
                </h4>
                <p className="text-gray-700 mb-3">
                  每天操練:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4">
                  <li>• <span className="font-semibold">看:</span> 看到不好的畫面時,立刻移開目光並禱告</li>
                  <li>• <span className="font-semibold">聽:</span> 聽到負面言語時,不加入,反而心裡為對方禱告</li>
                  <li>• <span className="font-semibold">觸:</span> 被試探時,想起「我已經死了,與基督一同藏在神裡面」</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full text-sm">3</span>
                  建立每日親密時刻
                </h4>
                <p className="text-gray-700 mb-3">
                  像伊甸園的「散步時刻」:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4">
                  <li>• 每天固定時間(建議早晨或睡前)</li>
                  <li>• 找一個安靜的地方</li>
                  <li>• 不是急著說話,而是先安靜聆聽</li>
                  <li>• 像朋友般與神對話</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full text-sm">4</span>
                  立即處理罪
                </h4>
                <p className="text-gray-700 mb-3">
                  不要讓罪累積:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4">
                  <li>• 一發現就立刻認罪</li>
                  <li>• 不要試圖自己遮蓋(無花果葉)</li>
                  <li>• 相信神的饒恕是真實的</li>
                  <li>• 恢復與神的親密關係</li>
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
                <h4 className="font-semibold text-purple-700 mb-3">一、為什麼神從小事開始訓練?</h4>
                <p className="text-gray-700 mb-3">
                  神不會一開始就讓你面對持刀威脅,而是從生活中的小衝突開始。原因:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4 mb-3">
                  <li>• <span className="font-semibold">循序漸進:</span> 屬靈肌肉需要逐漸鍛鍊</li>
                  <li>• <span className="font-semibold">失敗成本低:</span> 小事中失敗不致命,可以重來</li>
                  <li>• <span className="font-semibold">頻繁練習:</span> 小事每天都有,練習機會多</li>
                  <li>• <span className="font-semibold">建立習慣:</span> 小事中的習慣會延續到大事</li>
                </ul>
                <div className="bg-purple-50 rounded p-3">
                  <p className="text-gray-700">
                    <span className="font-semibold">應用:</span> 不要小看日常小事的操練。在家人的小摩擦中學會不隨血氣起舞,將來才能在大危機中靠主得勝。
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-3">二、心竅習練得通達的過程</h4>
                <p className="text-gray-700 mb-3">
                  希伯來書 5:14 說的「習練」是什麼意思?
                </p>
                <ul className="space-y-2 text-gray-700 pl-4 mb-3">
                  <li>• <span className="font-semibold">不是天生的:</span> 分辨力需要操練,不是自動擁有</li>
                  <li>• <span className="font-semibold">需要時間:</span> 「習練」意味著重複、持續的練習</li>
                  <li>• <span className="font-semibold">會越來越敏銳:</span> 就像品酒師的味覺需要訓練</li>
                  <li>• <span className="font-semibold">目標是自然反應:</span> 最終不用思考就能分辨</li>
                </ul>
                <p className="text-gray-700">
                  從「吃奶」(需要別人餵養)到「吃乾糧」(自己能分辨),是基督徒成熟的標記。
                </p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-3">三、五感與屬靈生命</h4>
                <p className="text-gray-700 mb-3">
                  神給我們五感不是為了讓我們犯罪,而是為了幫助我們分辨:
                </p>
                <div className="space-y-3">
                  <div className="bg-blue-50 rounded p-3">
                    <p className="text-gray-700 mb-2"><span className="font-semibold text-blue-700">視覺:</span></p>
                    <p className="text-gray-700">看見不潔的 → 立刻移開目光 + 禱告求潔淨</p>
                  </div>
                  <div className="bg-green-50 rounded p-3">
                    <p className="text-gray-700 mb-2"><span className="font-semibold text-green-700">聽覺:</span></p>
                    <p className="text-gray-700">聽見抱怨 → 不加入,反而為對方禱告</p>
                  </div>
                  <div className="bg-yellow-50 rounded p-3">
                    <p className="text-gray-700 mb-2"><span className="font-semibold text-yellow-700">觸覺:</span></p>
                    <p className="text-gray-700">被試探觸摸 → 想起身分(我屬於耶穌)</p>
                  </div>
                  <div className="bg-purple-50 rounded p-3">
                    <p className="text-gray-700 mb-2"><span className="font-semibold text-purple-700">嗅覺/味覺:</span></p>
                    <p className="text-gray-700">分辨聖靈的引導 vs 肉體的慾望</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-3">四、伊甸園的親密關係</h4>
                <p className="text-gray-700 mb-3">
                  神最想要的是什麼?不是我們的服事,而是<span className="font-semibold">親密關係</span>:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4 mb-3">
                  <li>• 神在伊甸園「散步聊天」的畫面 = 祂渴望的關係</li>
                  <li>• 不是正式的宗教儀式,而是輕鬆的友誼</li>
                  <li>• 亞當可以「輕鬆討教」= 沒有距離感</li>
                  <li>• 罪切斷的就是這份親密,救恩恢復的也是這份親密</li>
                </ul>
                <div className="bg-purple-50 rounded p-3">
                  <p className="text-gray-700">
                    <span className="font-semibold">反思:</span> 你與神的關係更像「散步聊天」,還是「正式朝見君王」?神要的是前者。
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-3">五、操練的終極目標</h4>
                <p className="text-gray-700 mb-3">
                  操練心竅的最終目的不是「完美表現」,而是:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4">
                  <li>• <span className="font-semibold">與神親密同行:</span> 不讓罪打斷關係</li>
                  <li>• <span className="font-semibold">自然反應:</span> 不用掙扎就能選擇對的</li>
                  <li>• <span className="font-semibold">成為祝福:</span> 在危機中成為神的器皿(如第三章的例子)</li>
                  <li>• <span className="font-semibold">活出基督:</span> 讓人看見基督而不是我們</li>
                </ul>
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
              「惟獨長大成人的才能吃乾糧;他們的心竅習練得通達,就能分辨好歹了。」
            </p>
            <p className="text-sm text-gray-600 mb-4">— 希伯來書五章 14 節</p>
            <p className="text-gray-700">
              屬靈成熟不是自動發生的,而是透過每天在小事中操練而來。當我們習練將每件事帶到天父面前,而不是隨血氣起舞時,我們就在長大成人。最終目標是恢復與神在伊甸園中「散步聊天」的親密關係。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
