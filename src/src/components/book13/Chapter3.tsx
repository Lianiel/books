import { useState } from 'react';
import { ChevronDown, ChevronUp, AlertTriangle, Heart, Shield, Cross, Lightbulb, Target, BookOpen, MessageCircle, Users, Eye } from 'lucide-react';

export default function Chapter3() {
  const [expandedSections, setExpandedSections] = useState<string[]>(['background','children-call','knife-threat','life-change','prayer-moment','tired-day','transformation']);

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
          第三章 一根繩子
        </h1>
        <p className="text-xl text-gray-600">於八〇年代</p>
        <p className="text-lg text-gray-500 mt-2">不隨血氣起舞的真實見證</p>
      </div>

      {/* 章節簡介 */}
      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 mb-8 border-l-4 border-red-500">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-semibold text-red-800 mb-3">章節概覽</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              本章記錄了作者在生命受威脅時,仍然選擇不隨血氣起舞的真實經歷。一個持刀男孩威脅要割斷作者的喉嚨,但作者靠著聖靈的帶領,說出了神要他說的話。
            </p>
            <p className="text-gray-700 leading-relaxed">
              這個驚心動魄的故事,最終帶來了奇妙的轉化 - 這個曾經充滿憤怒的男孩把心獻給了神。
            </p>
          </div>
        </div>
      </div>

      {/* 疲憊的一天 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('tired-day')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              疲憊的一天
            </h3>
          </div>
          {isExpanded('tired-day') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('tired-day') && (
          <div className="px-6 pb-6 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              那天我花了一整天的時間,為一些被起訴的謀殺犯提供協談服務。事情發生時,我剛從州立監獄回到家。光是開車往返兩地就花了我好幾個鐘頭。所以毫無疑問地,我真的是累癱了。
            </p>
            
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <p className="text-gray-700 leading-relaxed mb-3">
                之前有位先生借了一根麻繩給我們的鄰居。繩子主人的一家想要順道過來將它取回去,但不巧這位鄰居不在家,無法親自將繩子還給他們。
              </p>
              <p className="text-gray-700 leading-relaxed">
                於是我告訴這位先生,我會將繩子放在我前門的台階上,他可以找個方便的時間前來取走。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 孩子的呼叫 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('children-call')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-yellow-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              「爹地,他們要偷那根繩子!」
            </h3>
          </div>
          {isExpanded('children-call') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('children-call') && (
          <div className="px-6 pb-6 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              當我正在停車時,我的一個兒子朝著我跑過來。他大聲叫道:「爹地,爹地,他們要偷那根繩子!」然後就又跑開,轉到屋子後面去了。
            </p>
            
            <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
              <p className="text-gray-700 leading-relaxed mb-3">
                我跟著他往那個方向走,看到我的孩子全都站在一棵樹下,而那根繩子則從樹上垂下來。他們違背我的命令,把它從台階上拿了過來,綁在樹上,並且抓著它盪了起來。
              </p>
              <p className="text-gray-700 leading-relaxed">
                到了那裡,我抬頭一看,看到樹上有個男孩手裡拿著一把刀,正準備要將繩子割斷。我朝著他大喊:「不准碰那根繩子!」
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 持刀威脅 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('knife-threat')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-red-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              刀抵住喉嚨的威脅
            </h3>
          </div>
          {isExpanded('knife-threat') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('knife-threat') && (
          <div className="px-6 pb-6 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              我還在仰著頭往上看的時候,突然有個年輕人站在我面前,抽出一把刀,抵住我下巴的正中央。接著,他下了個命令:「艾瑞克,砍斷它!」
            </p>

            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-700 mb-2">血氣 vs 聖靈</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                若要發聲說話,我必須張開我的嘴,同時還得小心翼翼不讓下巴往下移動一分一毫,否則那把刀就會刺到我。因此我其實根本不想開口說話。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                然而此時我卻聽到自己的嘴裡說出這兩句話:<span className="font-semibold text-red-700">「你不能擁有這根繩子!它不是我的!」</span>
              </p>
              <p className="text-gray-700 leading-relaxed italic">
                (看到了嗎?這就是「不隨血氣起舞」的一個例子。)
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-500">
              <h4 className="font-semibold text-gray-700 mb-2">肉體的想法</h4>
              <p className="text-gray-700 leading-relaxed">
                其實在我的心裡我想要說的是:「你可以擁有這根繩子!拿去吧!只要你放過我們全家,不要騷擾我們就夠了!」
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              這個拿著刀抵住我喉嚨的年輕人言簡意賅地說:「我們不是在向你要這根繩子;我們是拿定它了。」我直視他的眼睛,看得出來他當時正處於嗑藥後的亢奮狀態。他接著說:「不准再說一個字,否則我就割斷你的喉嚨!」
            </p>
          </div>
        )}
      </div>

      {/* 向天父呼求 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('prayer-moment')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6 text-purple-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              在危機中向天父呼求
            </h3>
          </div>
          {isExpanded('prayer-moment') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('prayer-moment') && (
          <div className="px-6 pb-6 space-y-4">
            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
              <p className="text-gray-700 leading-relaxed mb-3 italic">
                我的心思和意念齊聲向神呼求說:「天父啊,這個男孩隨時都可能割斷我的喉嚨,而不知自己在做什麼。在眼前這個情況下,我對祢的責任是什麼?我需要祢的智慧。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                我有幾個孩子站在那裡看著我們。我並不想讓他們目睹自己的父親喉嚨被利刃切開,但我們在天上的父知道我所不知道的事。祂知道如何幫助我說出恰當言語觸動這個男孩的心。
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <p className="text-gray-700 leading-relaxed italic mb-2">
                羅馬書八章 28 節:
              </p>
              <p className="text-gray-700 leading-relaxed">
                「我們曉得萬事都互相效力,叫愛神的人得益處。」
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              話雖如此,當我聽到自己口中所說出來的話,我還是幾乎無法相信我自己。我再一次小心翼翼地說出這幾個字:<span className="font-semibold">「你不明白。你不能擁有這根繩子。它不是我的。」</span>
            </p>

            <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
              <p className="text-gray-700 leading-relaxed">
                我的頭腦告訴我:「告訴他把繩子拿走。」但來自天父的心聲卻要我告訴他,他不能得到那根繩子。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 奇妙的轉變 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('transformation')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-green-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              奇妙的轉變
            </h3>
          </div>
          {isExpanded('transformation') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('transformation') && (
          <div className="px-6 pb-6 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              此時這個大男孩更加生氣了。他重覆他先前的威脅:「你再不閉上你的嘴,我就割斷你的喉嚨。我不是在請你給我這根繩子;我是拿定它了!艾瑞克,把它砍斷!」
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              我再次聽到自己重覆相同的聲明:「你不可以砍斷它。它是借來的。你不能擁有它。」
            </p>

            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-700 mb-2">神的介入</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                這個持刀的男孩開始顫抖。他把刀子折起來,放在口袋裡,然後定定地看著我的臉。接著他仰頭往樹上看,並且說:「喂,艾瑞克,下來啦!反正我也不想要那個爛東西。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                語畢,他出乎意料地回過頭看著我,唐突地問:<span className="font-semibold text-green-700">「你為什麼不害怕?」</span>
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-700 mb-2">關鍵對話</h4>
              <p className="text-gray-700 leading-relaxed mb-2">我回答:「我非常害怕!」</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「先生,你表現害怕的方式還真是與眾不同啊。我或許嗑藥恍神,但我還分辨得出一個人是否害怕;而你是不害怕的。為什麼?」
              </p>
              <p className="text-gray-700 leading-relaxed font-semibold text-blue-700 mb-3">
                我的回答很簡單:「我屬於耶穌。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                「當我腦袋清醒一點的時候,可以找個時間回來找你聊一聊嗎?」
              </p>
              <p className="text-gray-700 leading-relaxed">
                「當然,不管白天或晚上,我隨時歡迎你。」我又補上一句:「我的大門永遠為你而開。」
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 男孩的背景 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('background')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Eye className="w-6 h-6 text-indigo-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              神看見事情的全貌
            </h3>
          </div>
          {isExpanded('background') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('background') && (
          <div className="px-6 pb-6 space-y-4">
            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-700 mb-2">過去的騷擾</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                在這之前,有一次這個男孩曾經手裡拿著一把榔頭,追在我一個兒子的後面衝進我們家,因為他想要像玩打地鼠的遊戲一樣敲他的頭。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                他也曾經踢開我地下室的窗戶,潛入其中,咒罵我的母親和太太。
              </p>
              <p className="text-gray-700 leading-relaxed">
                還有一次他敲破我前門的窗玻璃,試圖打開門鎖,只為了能抓到我另外一個兒子。他站在前門外面,語氣平和地乞求我們:「只要讓我打他五分鐘就夠了,我要打爆他的頭!」
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              你不難看出我其實有充分的理由對他耿耿於懷,並且隨著自己的血氣行事。然而,因為天父的心腸,我就是無法恨這個男孩。
            </p>

            <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-500">
              <h4 className="font-semibold text-indigo-700 mb-2">神的視角 vs 我們的視角</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">祂看到的:</span> 一個在很小的時候就被父親拋棄的男孩。<br />
                <span className="font-semibold">我看到的:</span> 一個無賴,而且還是一個具有危險性的無賴。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">祂看到:</span> 一個男孩,他和姊姊被他母親的歷任男友不斷施暴。<br />
                <span className="font-semibold">我看到的:</span> 一個男孩,他恐嚇我的兒女、母親和太太。
              </p>
              <p className="text-gray-700 leading-relaxed">
                在我面前的是一個對世界——尤其是對男人——極端憤怒的男孩。但這一回,他面對的是一個沒有譴責他的男人。他看見在我裡面的耶穌,祂不怕刀械和威嚇。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 生命的改變 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('life-change')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6 text-rose-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              生命的徹底改變
            </h3>
          </div>
          {isExpanded('life-change') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('life-change') && (
          <div className="px-6 pb-6 space-y-4">
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <p className="text-gray-700 leading-relaxed mb-3">
                這在他的生命中開啟了奇妙的改變。<span className="font-semibold text-green-700">在我們搬離那間屋子之前,他把他的心獻給了神。</span>
              </p>
            </div>

            <div className="bg-rose-50 rounded-lg p-4 border-l-4 border-rose-500">
              <h4 className="font-semibold text-rose-700 mb-2">搬家那一天</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                搬家那一天,我們租了一輛大卡車,塞滿了家具,正準備要開走。我從後視鏡一看,看到他坐在路邊,雙手托著下巴,兩隻手肘撐在膝蓋上。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我告訴兩個要和我一同坐卡車上路的兒子:「我一下就回來,」然後便下了車,坐到他身旁。我學他的樣子,用手托住下巴,撐在膝蓋上。
              </p>
              <p className="text-gray-700 leading-relaxed italic mb-3">
                他當時正在哭,邊哭邊說了這段話:「我不明白。我剪了頭髮,我不再吸毒、爆粗口和發毒誓,我也讀經也禱告,我還上教堂。我姊姊也把她的心獻給了耶穌。但現在神竟然要把你從我的身邊帶走。這是為什麼?」
              </p>
              <p className="text-gray-700 leading-relaxed">
                我聽了心裡非常難過,不知該說些什麼。我只能告訴他世界還有很多像他一樣,耶穌要我去接觸和幫助他們;他現在已是神家裡的一份子,和耶穌是一家人了。我還告訴他我們會保持聯絡,而且最重要的是我以他為榮。
              </p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-700 mb-2">如果當時...</h4>
              <p className="text-gray-700 leading-relaxed mb-2">
                假使那個晚上我憑著自己的血氣行事,結果會是什麼?
              </p>
              <p className="text-gray-700 leading-relaxed">
                當他騷擾我的房子、我的母親和太太時,假使我報了警,結果又會如何?
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
                <h4 className="font-semibold text-blue-700 mb-2">1. 面對威脅時的反應</h4>
                <p className="text-gray-700 mb-2">• 如果你面對生命威脅,你會如何反應?</p>
                <p className="text-gray-700 mb-2">• 作者說「我非常害怕」,但仍然順服神的引導。你如何理解害怕與順服並存?</p>
                <p className="text-gray-700">• 在危險中,你能聽見神的聲音嗎?</p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">2. 看見神所看見的</h4>
                <p className="text-gray-700 mb-2">• 作者說:「我們的眼睛只能看到事情的某一面」</p>
                <p className="text-gray-700 mb-2">• 在你的生活中,有沒有某個「無賴」讓你很難愛他們?</p>
                <p className="text-gray-700">• 你願意求神讓你看見祂所看見的嗎?</p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">3. 頭腦 vs 聖靈</h4>
                <p className="text-gray-700 mb-2">• 作者的頭腦說「告訴他把繩子拿走」,但聖靈說「他不能得到繩子」</p>
                <p className="text-gray-700 mb-2">• 你如何分辨自己的想法和聖靈的引導?</p>
                <p className="text-gray-700">• 有沒有經歷過順服聖靈的結果遠超過你的理性判斷?</p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">4. 如果當時...</h4>
                <p className="text-gray-700 mb-2">• 如果作者報警,這個男孩可能會被關進監獄</p>
                <p className="text-gray-700 mb-2">• 但因為不隨血氣起舞,這個男孩得救了</p>
                <p className="text-gray-700">• 你是否曾因為「合理的反應」而錯失了神要做的奇妙工作?</p>
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
                  在危機中先禱告
                </h4>
                <p className="text-gray-700 mb-3">
                  作者在刀抵住喉嚨時,第一個反應是向神呼求:「在眼前這個情況下,我對祢的責任是什麼?我需要祢的智慧。」
                </p>
                <ul className="space-y-2 text-gray-700 pl-4">
                  <li>• 在衝突或危機中,先暫停,在心裡向神禱告</li>
                  <li>• 求神給你智慧和引導</li>
                  <li>• 不要立即按照你的情緒或理性反應</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full text-sm">2</span>
                  求神的視角
                </h4>
                <p className="text-gray-700 mb-3">
                  列出一個讓你難以相處或難以原諒的人:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4">
                  <li>• 寫下你看見的(他們做了什麼傷害你的事)</li>
                  <li>• 禱告求神讓你看見祂所看見的(他們的傷痛、背景)</li>
                  <li>• 求神給你憐憫的心</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full text-sm">3</span>
                  敞開的門
                </h4>
                <p className="text-gray-700 mb-3">
                  作者說:「我的大門永遠為你而開。」
                </p>
                <ul className="space-y-2 text-gray-700 pl-4">
                  <li>• 有沒有人曾經傷害你,但神要你向他們敞開?</li>
                  <li>• 考慮主動聯絡一個你曾經避開的人</li>
                  <li>• 不是要你讓自己陷入危險,而是在神的引導下重建關係</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full text-sm">4</span>
                  長期委身
                </h4>
                <p className="text-gray-700 mb-3">
                  作者沒有在危機結束後就忘記這個男孩,而是持續關懷他直到他信主、改變。
                </p>
                <ul className="space-y-2 text-gray-700 pl-4">
                  <li>• 不隨血氣起舞不是一次性的,而是長期的委身</li>
                  <li>• 為那些「難搞」的人禱告,不要放棄</li>
                  <li>• 相信神能改變任何人</li>
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
                <h4 className="font-semibold text-purple-700 mb-3">一、為什麼神不讓作者說「拿去吧」?</h4>
                <p className="text-gray-700 mb-3">
                  從人的角度看,說「拿去吧」是最安全的選擇。但神有更深的計畫:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4 mb-3">
                  <li>• <span className="font-semibold">誠實的見證:</span> 繩子確實不是作者的,說實話是正確的</li>
                  <li>• <span className="font-semibold">挑戰男孩的良知:</span> 持續的真理宣告觸動了男孩內心</li>
                  <li>• <span className="font-semibold">展現不同的回應:</span> 男孩一生中遇到的都是恐懼或憤怒的反應,但作者展現了第三種可能</li>
                </ul>
                <div className="bg-purple-50 rounded p-3">
                  <p className="text-gray-700">
                    <span className="font-semibold">教訓:</span> 神的智慧遠超過我們的安全計算。順服神的引導,即使看起來不合理,往往帶來最好的結果。
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-3">二、「我屬於耶穌」的能力</h4>
                <p className="text-gray-700 mb-3">
                  當男孩問「你為什麼不害怕?」,作者的回答是「我屬於耶穌」。這句話的能力在於:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4 mb-3">
                  <li>• 不是「我是基督徒」(宗教身分)</li>
                  <li>• 不是「我信耶穌」(信念)</li>
                  <li>• 而是「我屬於耶穌」(關係和所有權)</li>
                </ul>
                <p className="text-gray-700 mb-3">
                  這種歸屬感帶來:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4">
                  <li>• 在威脅中的平安(因為生命在神手中)</li>
                  <li>• 超越死亡的盼望(死了就與主同在)</li>
                  <li>• 不需要自我保護(神是我的保護者)</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-3">三、愛與界線</h4>
                <p className="text-gray-700 mb-3">
                  作者不隨血氣起舞,但這<span className="font-semibold">不等於沒有界線</span>:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4 mb-3">
                  <li>• 他沒有讓男孩傷害他的孩子</li>
                  <li>• 他沒有允許男孩繼續破壞</li>
                  <li>• 他站在真理中(「你不能擁有它」)</li>
                </ul>
                <p className="text-gray-700 mb-3">
                  但同時:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4">
                  <li>• 他沒有報復</li>
                  <li>• 他沒有報警</li>
                  <li>• 他敞開門歡迎男孩</li>
                </ul>
                <div className="bg-purple-50 rounded p-3">
                  <p className="text-gray-700">
                    <span className="font-semibold">平衡:</span> 不隨血氣起舞不是軟弱或縱容,而是在愛中堅持真理,在真理中展現愛。
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-3">四、長期委身的代價</h4>
                <p className="text-gray-700 mb-3">
                  作者不是在危機後就結束關係,而是持續陪伴這個男孩直到他信主、改變:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4 mb-3">
                  <li>• 需要時間和精力</li>
                  <li>• 需要承受鄰居的誤解</li>
                  <li>• 需要冒險(男孩可能再次發作)</li>
                  <li>• 需要犧牲(搬家時的不捨)</li>
                </ul>
                <p className="text-gray-700">
                  但結果是:一個生命被完全改變,一個家庭(男孩和他姊姊)歸向神。
                </p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-3">五、為什麼不隨血氣起舞如此重要?</h4>
                <p className="text-gray-700 mb-3">
                  本章清楚展示:
                </p>
                <div className="bg-red-50 rounded p-3 mb-3">
                  <p className="text-gray-700 mb-2"><span className="font-semibold text-red-700">如果隨血氣起舞:</span></p>
                  <ul className="space-y-1 text-gray-700 pl-4">
                    <li>• 作者可能被殺</li>
                    <li>• 或者他報警,男孩進監獄</li>
                    <li>• 男孩繼續他的憤怒人生</li>
                    <li>• 可能傷害更多人</li>
                    <li>• 永遠失喪</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded p-3">
                  <p className="text-gray-700 mb-2"><span className="font-semibold text-green-700">因為不隨血氣起舞:</span></p>
                  <ul className="space-y-1 text-gray-700 pl-4">
                    <li>• 所有人平安</li>
                    <li>• 男孩看見不一樣的愛</li>
                    <li>• 男孩信主、改變</li>
                    <li>• 姊姊也信主</li>
                    <li>• 生命被救贖</li>
                  </ul>
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
              「我們曉得萬事都互相效力,叫愛神的人得益處。」
            </p>
            <p className="text-sm text-gray-600 mb-4">— 羅馬書八章 28 節</p>
            <p className="text-gray-700 mb-4">
              即使在刀抵住喉嚨的危機中,神仍然掌權。當我們不隨血氣起舞,順服神的引導時,祂能將最危險的處境轉化為最美的見證。
            </p>
            <p className="text-gray-700 font-semibold">
              「我屬於耶穌」- 這句話包含了一切:平安、勇氣、盼望和愛。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
