import { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin, AlertCircle, Heart, Shield, Cross, Lightbulb, CheckCircle, MessageCircle, BookOpen, Target } from 'lucide-react';

export default function Chapter1() {
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
          第一章 易肇事路口
        </h1>
        <p className="text-xl text-gray-600">一九七九年八月</p>
        <p className="text-lg text-gray-500 mt-2">學習為地方禱告的大能</p>
      </div>

      {/* 章節簡介 */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 mb-8 border-l-4 border-amber-500">
        <div className="flex items-start gap-3">
          <MapPin className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-semibold text-amber-800 mb-3">章節概覽</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              本章記錄了作者一家搬到波特蘭一個危險路口的經歷。這個五叉路口因為連續彎道,平均每36小時就發生一次車禍。透過持續的禱告和宣告,神奇妙地改變了這個地方,十年間只發生兩次意外。
            </p>
            <p className="text-gray-700 leading-relaxed">
              這個真實故事向我們展示:禱告不僅能保護個人和家庭,更能為一個地方帶來神的保守和轉化。
            </p>
          </div>
        </div>
      </div>

      {/* 搬到危險路口 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('section1')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              搬到易肇事路口
            </h3>
          </div>
          {isExpanded('section1') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('section1') && (
          <div className="px-6 pb-6 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              一九七九年八月,我們舉家從奧瑞岡州哥倫比亞河沿岸的一個社區搬到同州北波特蘭聖約翰地區的一棟房子裡。這棟房子座落在通往波特蘭港國際航運碼頭一個車水馬龍、擁有連續彎道的五叉路口上。
            </p>
            <p className="text-gray-700 leading-relaxed">
              孩子們看到當地電視台的攝影機正在拍攝這個路口並訪問附近的鄰居時,都興奮得不得了。他們跑進屋裡,大聲叫道:「爸爸,快點出來!記者要訪問你!」
            </p>
            
            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-700 mb-2">機車騎士的悲劇</h4>
              <p className="text-gray-700 leading-relaxed">
                原來是一位騎機車的年輕人在穿越這個交叉路口時沒有注意到連續彎道,最後落得身首異處的下場。採訪的記者轉向我,問說:「請問你貴姓大名?住在這裡有多久了?」
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              一如預期,我的答案讓他們立刻失去了採訪我的興趣。然而,在接下來的幾個星期裡,我在天上的父親卻有許多的話要對我說。
            </p>

            <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-700 mb-2">不斷的意外</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                無論白天或晚上,不分時段,那裡總有車輛對撞、電線桿被撞倒、受害者困在擠壓變形的車中,或車子被撞成破銅爛鐵的情況發生。
              </p>
              <p className="text-gray-700 leading-relaxed">
                警車、救護車和消防車的鳴笛之聲不時尖銳而刺耳地呼嘯而來。一次又一次,我們的房子在卡車和汽車相撞的衝擊力道之下不停晃動。有時我們正在沉睡之際,全家都被撼動到驚醒過來。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 與神清晨同行 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('section2')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6 text-purple-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              與神清晨同行
            </h3>
          </div>
          {isExpanded('section2') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('section2') && (
          <div className="px-6 pb-6 space-y-4">
            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
              <p className="text-gray-700 leading-relaxed mb-3">
                那段時間裡,我經常在半夜被天父的靈感動。祂叫我:「快醒來!來,和我一起去散步。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                許多個早晨,我們沿著那條彎道結伴而行,在靈裡彼此相交,看著晨曦初曉,日頭慢慢升起。當天父與我分享祂對經過這裡的路人和當地社區居民的心腸意念時,我就在一旁不停地禱告。
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-700 mb-2">深度反思</h4>
              <p className="text-gray-700 leading-relaxed italic">
                神邀請作者在清晨與祂同行,這不僅是身體的行走,更是靈裡的交通。神渴望與我們建立親密的關係,分享祂的心意。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 下午三點的大車禍 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('section3')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <AlertCircle className="w-6 h-6 text-red-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              下午三點的大車禍
            </h3>
          </div>
          {isExpanded('section3') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('section3') && (
          <div className="px-6 pb-6 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              這些意外事故的高潮發生在某一天下午三點左右。當時我正坐在餐桌旁,整間屋子發出如雷的轟轟巨響,不停搖晃,伴隨著金屬被壓扁和玻璃碎裂的聲音。
            </p>
            <p className="text-gray-700 leading-relaxed">
              我跳起來,抓了我的外套就從後門衝了出去,口中不斷宣告著:「耶穌的寶血遮蓋!耶穌的寶血遮蓋!耶穌的寶血遮蓋!」
            </p>

            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-700 mb-2">可怕的景象</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                我繞過院子裡的側屋時,看見一幅我不願見到的景象。一輛從路那頭波特蘭港國際航運碼頭開過來、滿載著鋼條製品的「麥克」牌聯結車的車頭前,躺著一輛車身已被完全支解的小型汽車。
              </p>
              <p className="text-gray-700 leading-relaxed">
                看著它不斷冒出蒸氣和濃煙,我閃過一個念頭:「動作要快!看樣子這輛車隨時都會起火燃燒!」
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-700 mb-2">禱告帶來醫治</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                當我更靠近事故位置的時候,我看到裡面有兩位女士。其中一位趴倒在前座上,另一位則胸口趴在斷裂變形的方向盤上;兩人都已失去了知覺。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我一邊用力將車門打開,一邊不斷為這位女士禱告,而她的意識也果真慢慢恢復了過來。此時,聯結車的司機從他車頭的擋風玻璃窗爬了出來,往下朝著汽車殘骸大聲喊道:「不要移動她!」
              </p>
              <p className="text-gray-700 leading-relaxed">
                「我沒有,」我向他保證,「我是在為她禱告。」
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 小男孩麥修的神蹟 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('section4')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6 text-rose-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              小男孩麥修的神蹟
            </h3>
          </div>
          {isExpanded('section4') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('section4') && (
          <div className="px-6 pb-6 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              在此同時,有個全身是血的小男孩從汽車殘骸中爬出來,剛好踫進我的臂彎裡。為了保護他不被來往的車輛撞到,我抱著他往路邊走,一邊試著擦去他臉上和眼睛上的血,同時也為他禱告。
            </p>
            <p className="text-gray-700 leading-relaxed">
              他顫抖的身體開始平靜下來,哭聲也止住了。這時他開始四處張望。
            </p>

            <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-700 mb-2">母親的恐懼</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                「麥修呢?我的兒子在哪裡?」我轉身看到聯結車的司機正攙扶先前趴倒在汽車前座的那位女士出來。聚集在那裡的群眾則試著安撫她的情緒。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「我看不見!我什麼都看不見了!」她哭喊著說。「我的兒子呢?他還活著嗎?」
              </p>
              <p className="text-gray-700 leading-relaxed">
                此時我手中抱著的小男孩正好定睛看著她。我便對她說:「不要哭。他沒事。他正在這裡看著妳呢。」
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-700 mb-2">觸摸帶來安慰</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                然而,她的恐懼和問題仍然停不下來。她繼續哭喊著說:「可是我完全看不見!他還好嗎?他有在呼吸嗎?」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我輕聲哄著她:「來,把妳的手給我。」她照著做了。我便將她的手放在小男孩臉的正前方,對她說:「妳有感覺到他的呼吸嗎?他正在看著妳呢。他沒事的。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                我將小男孩交到他母親的手中,回頭走到意外發生的地點。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 疼痛消失的見證 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('section5')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-green-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              疼痛消失的見證
            </h3>
          </div>
          {isExpanded('section5') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('section5') && (
          <div className="px-6 pb-6 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              當我靠近那位正在逐漸恢復知覺的汽車駕駛時,我聽到她用微弱的聲音問:「剛才是誰在為麥修禱告?麻煩也為我禱告一下。拜託!拜託!我痛得不得了。我覺得我快要再度昏過去了。」
            </p>

            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-700 mb-2">醫治的大能</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                於是我大聲為她禱告。她看著我,微笑著說:「我覺得不痛了。疼痛完全消失了。謝謝你。可是我還是不能動。我覺得我整個人好像被緊緊地塞在這裡面。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                站在我身邊的消防員對她說:「女士,妳的確是。但是妳要努力撐下去喔。我們再一下下就會把妳救出來了。」
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              因為這緣故,他允許我在他們拆除車門的鉸鏈以便將她救出來的這段時間裡,留下來安慰她。當他們將她放在擔架上時,她請求我不要離開她身邊。救護人員於是准許我在他們將她打點好,送她去醫院之前暫時登上救護車,坐在她旁邊。
            </p>
          </div>
        )}
      </div>

      {/* 神的質問與回應 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('section6')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Cross className="w-6 h-6 text-indigo-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              神的質問與回應
            </h3>
          </div>
          {isExpanded('section6') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('section6') && (
          <div className="px-6 pb-6 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              接下來,麥修的媽媽問我是否可以打電話給她即將下班回家的先生,因為他回到家會找不到他們。她給了我他工作的電話號碼,並謝謝我的禱告和對他們三人的幫忙。
            </p>
            <p className="text-gray-700 leading-relaxed">
              我問了隨車人員他們會被送去哪家醫院之後,便快速離開救護車,跑回家去打那通電話。
            </p>

            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-700 mb-2">向天父的呼求</h4>
              <p className="text-gray-700 leading-relaxed mb-3 italic">
                掛上電話,我雙膝跪下,向天父呼求:「祢為什麼不阻止這種情況的發生?為什麼這些事故必須一而再、再而三地不斷發生?」
              </p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-4 border-l-4 border-indigo-500">
              <h4 className="font-semibold text-indigo-700 mb-2">神的回答</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                祂用下面這段話反問我,非常清楚地向我的心說話:
              </p>
              <p className="text-gray-700 leading-relaxed italic mb-3 text-lg">
                「你每天都為自己的房子和家人的平安作宣告禱告。你為什麼不也為這條交叉路口的安全作相同的宣告呢?」
              </p>
              <p className="text-gray-700 leading-relaxed italic text-lg">
                「你對於耶穌寶血的遮蓋能夠保守自己的屋子和家人免於毀損和死亡很有信心。那為什麼不也運用你的信心去相信它同樣能保守這個街角呢?」
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-700 mb-2">開始行動</h4>
              <p className="text-gray-700 leading-relaxed">
                於是我將主分享給我的這段話轉述給家人聽。從那天開始,我們便照著祂的話身體力行——每天早上在我們全家一起晨更靈修的時間裡,我們會將這個「易肇事路口」放在我們的禱告中。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 禱告的果效 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('section7')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              禱告帶來的轉化
            </h3>
          </div>
          {isExpanded('section7') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('section7') && (
          <div className="px-6 pb-6 space-y-4">
            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-700 mb-2">驚人的改變</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                從此直到十年後我們搬離那地為止,那裡總共<span className="font-bold text-green-700">只發生過兩次意外</span>。
              </p>
              <p className="text-gray-700 leading-relaxed">
                而在我們開始為它禱告之前,那裡<span className="font-bold text-red-700">平均每三十六個小時就會發生一次意外</span>。
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-700 mb-2">第一個意外(四年後)</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                第一個意外發生在大約四年之後。當時我們正在被我們稱為「小禮拜堂」的側屋裡進行查經班。突然大家聽到一聲輕微卻尖銳的輪胎磨擦聲,緊接著便是「碰」的一聲轟然巨響。
              </p>
              <p className="text-gray-700 leading-relaxed">
                一位年輕小姐衝進來,說:「求求你們讓我進去。我不要任何人知道我和他一起在那輛小貨車上。如果我先生知道了,他一定會殺了我的。」
              </p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-700 mb-2">拖吊車司機的見證</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                不一會,一位警察來到現場。他打電話叫了一輛拖吊車。拖吊車來到現場時,我聽到那位司機對警察說:
              </p>
              <p className="text-gray-700 leading-relaxed italic mb-3">
                「我到底做錯了什麼?你好幾年都沒打電話叫我來了;我以前一個禮拜至少被叫來這個路口四次。你後來都打電話叫誰了呢?」
              </p>
              <p className="text-gray-700 leading-relaxed">
                「我誰也沒叫,」那位警察先生不耐煩地回答。「連我自己也是這幾年來第一次被叫到這個路口。我不清楚另一組輪值同仁的情況,但我們這一組這幾年下來,一直都沒有接到要我們前來這裡處理事故的報案電話。」
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              聽了這話,我知道主具體回應了我們全家的禱告,真的向這附近的居民顯明在祂至高權柄之下的保守。於是我帶著感恩的心轉身離開他們,向著「小禮拜堂」走回去。
            </p>
          </div>
        )}
      </div>

      {/* 第二個意外 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
        <button
          onClick={() => toggleSection('section8')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              第二個意外:清晨的神蹟保守
            </h3>
          </div>
          {isExpanded('section8') ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded('section8') && (
          <div className="px-6 pb-6 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              那個彎道上的第二次意外發生在清晨大約四點三十分,就在我們搬離波特蘭前一年半左右。當時我被車子煞胎的聲音和「轟隆」的一聲巨響驚醒過來。
            </p>
            <p className="text-gray-700 leading-relaxed">
              為了確定沒有人受傷,我跳下床,迅速穿上我的及膝馬褲向門外走去。我一邊搖著頭,質問神:「主啊,這裡究竟是怎麼回事?我們不是一直都憑著信心宣告祢對這個交叉路口的保守和耶穌寶血對它的遮蓋嗎?」
            </p>

            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-700 mb-2">釣魚的意外</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                到了現場,原來是有一輛福特箱型車發生了一件自撞的車禍。車上的兩位男士一大清早正要去釣魚,身為乘客的那位男士詢問開車的那一位該把什麼樣的餌放在魚鉤上。
              </p>
              <p className="text-gray-700 leading-relaxed">
                這位開車的先生回答他時朝蝦子看了一眼,用手指了指,卻因此在這個彎道上打偏了方向盤,造成轉彎的弧度過大,結果撞倒了一根電話線桿!
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-700 mb-2">奇妙的保守</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                車子朝向路緣,停在路的另一邊。他們的傷勢都不嚴重。當警察來到現場時,這兩人正站在車子的外面,告訴我整件事發生的經過。
              </p>
              <p className="text-gray-700 leading-relaxed">
                警察非常困惑:「你們憑什麼認為我會相信這套說詞呢?你們車頭唯一的損傷只是一塊非常小的凹痕,連擋風玻璃都沒壓破,車頭也沒有凹陷到車身裡面;而你們卻告訴我,是你們把那支電話線桿給撞倒的?」
              </p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-700 mb-2">警察的困惑</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                我轉身離開現場,忍不住咯咯地笑了起來,因為我聽到這位警察不斷自言自語:
              </p>
              <p className="text-gray-700 leading-relaxed italic">
                「我要怎麼寫這份事故報告?他們絕對不會相信我的。你怎麼可能撞倒一支那麼粗的電線桿,卻連擋風玻璃都沒撞破?他們絕對不會相信我的。他們絕對不會相信我的。我要怎麼寫這份報告?」
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed italic">
              我的禱告很簡短,卻發自內心:「謝謝祢,主。祢又再一次行了神蹟。」
            </p>
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
                <h4 className="font-semibold text-blue-700 mb-2">1. 個人禱告生活的檢視</h4>
                <p className="text-gray-700 mb-2">• 你是否像作者一樣,每天為自己的家庭禱告?</p>
                <p className="text-gray-700 mb-2">• 你有沒有想過要為你居住的社區、街道或工作場所禱告?</p>
                <p className="text-gray-700">• 什麼攔阻了你為周遭環境禱告?</p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">2. 信心的範圍</h4>
                <p className="text-gray-700 mb-2">• 神質問作者:「你為什麼不也為這條交叉路口的安全作相同的宣告呢?」</p>
                <p className="text-gray-700 mb-2">• 這個質問對你有什麼衝擊?</p>
                <p className="text-gray-700">• 你的信心是否只限於保護自己和家人,還是願意擴展到更廣的範圍?</p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">3. 與神清晨同行</h4>
                <p className="text-gray-700 mb-2">• 作者經常在清晨被神喚醒,與神一起散步禱告</p>
                <p className="text-gray-700 mb-2">• 你有沒有這樣親密與神同行的經驗?</p>
                <p className="text-gray-700">• 你願意為此付上代價(早起、調整作息)嗎?</p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-blue-700 mb-2">4. 禱告的持續性</h4>
                <p className="text-gray-700 mb-2">• 作者一家每天早上在晨更時為這個路口禱告,持續了十年</p>
                <p className="text-gray-700 mb-2">• 你是否有持續為某事禱告的經驗?</p>
                <p className="text-gray-700">• 什麼讓你能堅持,或什麼讓你放棄?</p>
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
                  為你的地方禱告行走
                </h4>
                <p className="text-gray-700 mb-3">
                  <span className="font-semibold">本週行動:</span> 選擇一個地方(你的社區、街道、公園、學校)開始禱告行走
                </p>
                <ul className="space-y-2 text-gray-700 pl-4">
                  <li>• 每天或每週固定時間,在那個地方行走禱告</li>
                  <li>• 求神向你顯明那地的需要</li>
                  <li>• 宣告耶穌的寶血遮蓋那地</li>
                  <li>• 為居住在那裡的人禱告</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full text-sm">2</span>
                  建立家庭禱告祭壇
                </h4>
                <p className="text-gray-700 mb-3">
                  <span className="font-semibold">實際步驟:</span>
                </p>
                <ul className="space-y-2 text-gray-700 pl-4">
                  <li>• 與家人討論,設定每天家庭禱告的時間(建議清晨)</li>
                  <li>• 建立禱告清單:家人、住處、社區、學校/職場</li>
                  <li>• 輪流帶領禱告,讓每個家人都參與</li>
                  <li>• 記錄禱告事項和神的回應</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full text-sm">3</span>
                  學習屬靈宣告
                </h4>
                <p className="text-gray-700 mb-3">
                  <span className="font-semibold">宣告範例:</span>
                </p>
                <div className="bg-blue-50 rounded p-3 mb-3">
                  <p className="text-gray-700 italic">
                    「奉耶穌的名,我宣告耶穌的寶血遮蓋這個地方。我宣告神的平安、保護和醫治臨到這裡。我綑綁一切黑暗的權勢,釋放神的光明和祝福。」
                  </p>
                </div>
                <p className="text-gray-700">
                  練習用信心的話語宣告神的應許和保護
                </p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full text-sm">4</span>
                  培養與神清晨同行的習慣
                </h4>
                <p className="text-gray-700 mb-3">
                  <span className="font-semibold">三十天挑戰:</span>
                </p>
                <ul className="space-y-2 text-gray-700 pl-4">
                  <li>• 第1-10天:每天提早15分鐘起床親近神</li>
                  <li>• 第11-20天:加入禱告行走(在家附近散步禱告)</li>
                  <li>• 第21-30天:求神向你說話,分享祂的心意</li>
                  <li>• 記錄每天與神同行的經歷和領受</li>
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
                <h4 className="font-semibold text-purple-700 mb-3">一、屬靈爭戰的原則</h4>
                <p className="text-gray-700 mb-3">
                  本章顯示了一個重要的屬靈原則:<span className="font-semibold">我們不禱告的地方,撒但就有作工的空間</span>。
                </p>
                <p className="text-gray-700 mb-3">
                  作者為家庭禱告,家庭得保護;但沒有為路口禱告,路口就持續發生意外。當他們開始為路口禱告,情況就戲劇性地改變了。
                </p>
                <div className="bg-purple-50 rounded p-3">
                  <p className="text-gray-700">
                    <span className="font-semibold">思考:</span> 在你的生活中,有哪些領域你還沒有用禱告來遮蓋?工作場所?學校?社區?國家?
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-3">二、宣告的能力</h4>
                <p className="text-gray-700 mb-3">
                  作者在衝出門時不斷宣告:「耶穌的寶血遮蓋!」這不是迷信或咒語,而是<span className="font-semibold">憑信心宣告神的應許</span>。
                </p>
                <p className="text-gray-700 mb-3">
                  聖經真理:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4">
                  <li>• 啟示錄12:11 - 「弟兄勝過牠,是因羔羊的血和自己所見證的道」</li>
                  <li>• 希伯來書9:14 - 「基督的血...能洗淨你們的心」</li>
                  <li>• 希伯來書10:19 - 「因耶穌的血得以坦然進入至聖所」</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-3">三、禱告的果效需要時間</h4>
                <p className="text-gray-700 mb-3">
                  從開始禱告到第一次意外,中間經過了<span className="font-semibold text-purple-700">四年</span>。這說明:
                </p>
                <ul className="space-y-2 text-gray-700 pl-4">
                  <li>• 禱告的果效不是立即的,需要<span className="font-semibold">持續累積</span></li>
                  <li>• 屬靈爭戰是一場<span className="font-semibold">持久戰</span>,不是速戰速決</li>
                  <li>• 我們需要<span className="font-semibold">堅持不懈</span>的禱告</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-3">四、神蹟性的保護</h4>
                <p className="text-gray-700 mb-3">
                  第二次意外中,車子撞倒電線桿,卻幾乎沒有損傷,這是<span className="font-semibold">神蹟性的保護</span>。連警察都無法相信。
                </p>
                <p className="text-gray-700 mb-3">
                  這顯示:當我們為一個地方持續禱告,<span className="font-semibold">神會用超自然的方式保護那地</span>。
                </p>
                <div className="bg-purple-50 rounded p-3">
                  <p className="text-gray-700">
                    <span className="font-semibold">應用:</span> 相信神能夠用神蹟的方式保護你禱告的地方,不要限制神的作為。
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-purple-700 mb-3">五、禱告改變統計數據</h4>
                <p className="text-gray-700 mb-3">
                  禱告前:每36小時一次意外<br />
                  禱告後:十年只有2次意外
                </p>
                <p className="text-gray-700 mb-3">
                  這是<span className="font-semibold">可測量的改變</span>。禱告不僅是屬靈的,也會帶來<span className="font-semibold">實際可見的果效</span>。
                </p>
                <p className="text-gray-700">
                  拖吊車司機和警察的見證,都證實了這個路口確實發生了改變。這不是主觀感覺,而是<span className="font-semibold">客觀事實</span>。
                </p>
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
              「你對於耶穌寶血的遮蓋能夠保守自己的屋子和家人免於毀損和死亡很有信心。那為什麼不也運用你的信心去相信它同樣能保守這個街角呢?」
            </p>
            <p className="text-gray-700">
              神的保護不僅限於我們個人和家庭,祂渴望我們用信心的禱告遮蓋更廣的範圍,為我們的社區、城市和國家帶來轉化。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
