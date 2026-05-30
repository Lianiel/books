import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Shield, Target, Users, Star, Heart, Search, Check } from 'lucide-react';

const chapters = [
  {
    num: 1,
    title: '聖戰',
    part: '第一部分：認識敵人',
    color: 'from-red-50 to-rose-50',
    border: 'border-red-100',
    badge: 'from-red-500 to-rose-600',
    icon: Shield,
    keyPoints: [
      '撒但憎恨信徒，是因為我們身上有基督的形象，也因為我們是從他的國度中被搶救出來的。',
      '屬靈爭戰有三個特徵：激烈的爭戰（生死之戰，沒有中立）、屬靈的爭戰（不是對付有血有肉的人，乃是對付黑暗中的鬼靈，弗6:12）、必要的爭戰（信徒無法迴避，必須主動認識）。',
      '托馬斯·布魯克斯說：「信徒有四件大事必須用心研究：基督的榮美、聖經的奧秘、你自己的心，以及撒但的詭計。」',
      '愈是認識撒但，愈要靠近基督；認識仇敵的目的是更深地倚靠救主。',
    ],
  },
  {
    num: 2,
    title: '舊約中的撒但',
    part: '第一部分：認識敵人',
    color: 'from-orange-50 to-amber-50',
    border: 'border-orange-100',
    badge: 'from-orange-500 to-amber-600',
    icon: BookOpen,
    keyPoints: [
      '「撒但」的希伯來文含義：控告者、敵人、抵擋者——三個名字揭示他對人的三種攻擊姿態。',
      '以西結書28章描述撒但原是完美的受造物（智慧完備、全然美麗），卻因驕傲而墮落，說明罪的根源是以自我代替上帝。',
      '撒但在伊甸園的四個誘惑模式：歪曲上帝的誡命、質疑上帝的動機與品格、引誘人想要像上帝一樣、使罪看起來美善而有益。',
      '整個舊約一致的信息：撒但雖活躍，始終在上帝主權的掌管之下——加爾文說「魔鬼甚至也可以當我們的醫生」。',
    ],
  },
  {
    num: 3,
    title: '新約中的撒但',
    part: '第一部分：認識敵人',
    color: 'from-yellow-50 to-amber-50',
    border: 'border-yellow-100',
    badge: 'from-yellow-500 to-amber-600',
    icon: BookOpen,
    keyPoints: [
      '新約稱撒但為「diabolos」（誹謗者）60次、「Satan」34次，另有12個別名，顯示他活動的廣度與危險性。',
      '撒但是有位格的存在，具有理性（智慧）、情感（憤怒）、意志（圖謀）——他不是一種抽象力量或象徵。',
      '撒但統領有組織的邪靈軍隊（執政、掌權、幽暗世界的管轄者），並能透過人、情境、思想三條途徑攻擊信徒。',
      '十字架是決定性的轉捩點：基督藉死廢掉了那有死亡之能力的魔鬼（來2:14），並把他從這世界的王位上趕下去（約12:31-32）。',
      '路德說：「一個字就能把撒但擊倒」——那個字就是耶穌基督的名字和他的得勝。',
    ],
  },
  {
    num: 4,
    title: '教會歷史中的撒但',
    part: '第一部分：認識敵人',
    color: 'from-lime-50 to-green-50',
    border: 'border-lime-100',
    badge: 'from-lime-600 to-green-600',
    icon: Users,
    keyPoints: [
      '撒但最常使用的歷史策略是從教會內部進行腐化，比直接逼迫更有效——「他利用贗品比公然反對所造成的破壞更多」（哈夫納）。',
      '特土良說：「殉道者的鮮血是教會的種子」——外部逼迫反而使教會壯大，歷史一再證明這一點。',
      '從奧利金、奧古斯丁、馬丁路德、加爾文到愛德華滋，改革宗傳統堅持撒但的真實存在，反對以神話或象徵來解釋聖經的魔鬼學。',
      '正確立場：既不要過分關注撒但（趕鬼主義），也不要否認其存在（理性主義）；要以合乎聖經的平衡態度應對。',
    ],
  },
  {
    num: 5,
    title: '今天的撒但',
    part: '第一部分：認識敵人',
    color: 'from-teal-50 to-cyan-50',
    border: 'border-teal-100',
    badge: 'from-teal-500 to-cyan-600',
    icon: Target,
    keyPoints: [
      '撒但現在「被捆綁」（啟20章）意指他不能阻止福音傳遍萬國，但他仍然積極攻擊個人信徒。',
      '撒但對基督徒的七種具體攻擊：誘惑犯罪、控告良心、製造疑惑、破壞關係、散播謊言、妨礙禱告、造成靈命衰退。',
      '面對撒但的攻擊，信徒有兩條應對之道：（1）逃往基督——他是我們的中保和代求者；（2）使用上帝的話語——司布真說「學習說『不』」。',
      '《羅馬書》16:20的應許：「賜平安的上帝快要將撒但踐踏在你們腳下。」這是每個信徒的盼望和確據。',
    ],
  },
  {
    num: 6,
    title: '撒但的將來',
    part: '第一部分：認識敵人',
    color: 'from-violet-50 to-purple-50',
    border: 'border-violet-100',
    badge: 'from-violet-500 to-purple-600',
    icon: Star,
    keyPoints: [
      '棋局比喻：撒但雖然看似控制棋局，但我們的王仍在，我們仍可下出制勝的一步——在基督裡永遠的得勝是確定的。',
      '撒但的最終命運：被投入火湖，永遠受苦（啟20:10；太25:41）——這個結局連惡鬼們自己也知道並懼怕（可1:24；路8:31）。',
      '撒但是墮落的天使，不是墮落的上帝：他不是全能、全知、全在的——信徒不必像懼怕上帝一樣懼怕他。',
      '羅伯特·霍爾丹解釋「兩個勝利」（羅16:20）：第一個勝利是信徒個人的屬靈得勝；第二個勝利是撒但在末日被永遠摧毀。',
    ],
  },
  {
    num: 7,
    title: '建造堅固防線',
    part: '第二部分：認識撒但的弱點',
    color: 'from-blue-50 to-indigo-50',
    border: 'border-blue-100',
    badge: 'from-blue-500 to-indigo-600',
    icon: Shield,
    keyPoints: [
      '農夫的比喻：要先讓毒甜瓜在附近長大再採摘，還是一開始就種正確的東西？拉姆塞·厄斯金說：「逃跑還是爭戰——有時最屬靈的行動是逃跑！」',
      '真理的腰帶：真理把全副軍裝繫在一起，沒有它其他軍裝都會脫落。必須用真理裝備頭腦，不讓謊言有立足之地。',
      '公義的護心鏡：基督的主動順服（完全遵行律法）和被動順服（代替我們受死）合起來構成信徒的稱義——當撒但控告時，可以說「我的義是基督的義」。',
      '平安福音的鞋子：像羅馬士兵鞋底的釘子防止滑倒，平安的福音使信徒站立得穩，路德的「我在這裡站立，別無他法」是最好的例子。',
      '信德的藤牌（大盾）：信心能（1）在試探偽裝之前就認出罪；（2）把基督放在撒但和我們之間，攔截他的火箭。格諾爾說：「地獄中沒有任何策略能夠勝過信心。」',
      '救恩的頭盔：盼望是頭盔，防止灰心——灰心是撒但最常用的武器。羅馬書8:29-30的「黃金鏈」和約翰福音10:28-29是信徒的確據。',
    ],
  },
  {
    num: 8,
    title: '主動發起進攻',
    part: '第二部分：認識撒但的弱點',
    color: 'from-sky-50 to-blue-50',
    border: 'border-sky-100',
    badge: 'from-sky-500 to-blue-600',
    icon: Target,
    keyPoints: [
      '聖靈的寶劍（上帝的道）有防禦性和進攻性兩面：（1）防禦——「經上記著說」的模式，對抗試探；（2）進攻——每日讀經、背誦，使撒但在出口時毫無機會。',
      '禱告是最強的進攻武器。路德說：「禱告是教會的堡壘。」班揚說：「禱告是上帝賜給基督徒最大的武器。」禱告的四個面向：隨時禱告（不住地禱告）、懇切禱告（心靈的狀態比語言更重要）、多方禱告（帶上一切需要）、靠聖靈禱告（讓聖靈引導）。',
      '警醒不倦的四個面向：保持靈性警覺（盯住仇敵的動向）、為他人代禱（TJ巴赫：我在哪裡代禱，我就愛那裡）、堅持不懈（繼續敲門，不要放棄）、謹慎小心（E.M.邦茲：「撒但對禱告的懼怕遠超過對任何其他事情的懼怕」）。',
      '全書最深刻的洞見：「撒但是上帝的劍術教練」（盧瑟福）；「撒但這個毀滅者成了精煉者」（查諾克）——屬靈爭戰本身是上帝使信徒成聖的工具。',
    ],
  },
  {
    num: 9,
    title: '撒但的策略與伎倆',
    part: '第三部分：認識撒但的策略',
    color: 'from-fuchsia-50 to-pink-50',
    border: 'border-fuchsia-100',
    badge: 'from-fuchsia-500 to-pink-600',
    icon: BookOpen,
    keyPoints: [
      '特洛伊木馬警告：撒但常「出乎意料地從後面或裡面進行攻擊」——路德說「凡是上帝建教堂的地方，撒但都會在那裡建一個分堂」。',
      '詞彙釐清：目標（撒但的終極意圖）→ 策略（達成目標的大計畫）→ 詭計/device（具體的欺騙手段）→ 應對辦法（聖經提供的對抗之道）。',
      '撒但善於試探的六個原因（司布斯托）：屬靈本質可直接侵入人心、數千年的豐富經驗、不知疲倦的精力、邪靈國度的高度團結、暗示難以與人自身敗壞區分、善於用人自己的推理來強化誘惑。',
      '六位清教徒是本書第三部分的主要資料來源：湯瑪斯·布魯克斯、理查·吉爾平、威廉·司布斯托、約翰·道內姆、威廉·格諾爾、湯瑪斯·古德文。',
    ],
  },
  {
    num: 10,
    title: '直面撒但的四大策略',
    part: '第三部分：認識撒但的策略',
    color: 'from-rose-50 to-red-50',
    border: 'border-rose-100',
    badge: 'from-rose-500 to-red-600',
    icon: Shield,
    keyPoints: [
      '策略一【誘惑犯罪】：撒但以快樂為誘餌、使罪看起來是美德、謊稱悔改很容易、鼓勵世俗友誼——應對：記住罪的後果、遠離誘惑場景、積極侍奉、公開問責。',
      '策略二【攔阻靈修】：使靈修顯得艱難、用虛妄思想分散注意力——應對：專注上帝的命令、記住靈修的益處、路德大聲禱告以集中注意力。',
      '策略三【歪曲上帝】：把上帝描繪成殘酷工頭、分裂三位一體的救恩意願、濫用上帝的憐憫——應對：「撒但把自己的顏色塗在上帝身上」（查諾克），以聖經的真實形象認識上帝。',
      '策略四【阻礙成聖】：攔阻救贖性知識、強調頭腦知識足夠、使成聖顯得不切實際、混淆信心與行為——應對：追求與基督的真實相交，不停留在理論上。',
      '布魯克斯的十個總結應對辦法：以聖經為標準、不使聖靈擔憂、追求屬天智慧、立刻抵擋撒但的第一個提議、被聖靈充滿、保持謙卑、始終警醒、保持與上帝的團契、靠基督的力量（非自己的力量）、多多禱告。',
    ],
  },
  {
    num: 11,
    title: '我們作為信徒的挑戰',
    part: '第四部分：撒但的失敗',
    color: 'from-emerald-50 to-green-50',
    border: 'border-emerald-100',
    badge: 'from-emerald-500 to-green-600',
    icon: Heart,
    keyPoints: [
      '「現在/尚未」框架：基督已在十字架上打敗撒但（「現在」），但最後的審判尚未來臨（「尚未」）——信徒生活在閃電（十字架）和雷聲（大審判）之間。',
      '決心一：按照在基督裡的身份生活（羅6章）——罪不再是我們的君主、暴君、將軍或雇主；我們已是自由人，不必再「向罪交租金」。',
      '決心二：靠著信心勝過世界（約壹5:4-5）——不是逃離世界，而是在世界中以信心高於世界，過舍己的生活，耐心忍受逼迫。',
      '決心三：靠著基督的旗幟爭戰（雅4:7）——立刻、堅決地抵擋撒但，不猶豫，不拖延；以上帝的聖道和基督的寶血來抵擋。',
      '決心四：為基督多結果子（約15章）——聖靈九種果子是一個整體，常在葡萄樹上是結果子的唯一方法。',
      '決心五：不做魔鬼的工具（太18:6-7）——不要誘惑他人犯罪；誘惑者對他人屬靈生命的破壞，耶穌說死了比活著更好。',
    ],
  },
  {
    num: 12,
    title: '我們作為教會成員的挑戰',
    part: '第四部分：撒但的失敗',
    color: 'from-cyan-50 to-sky-50',
    border: 'border-cyan-100',
    badge: 'from-cyan-500 to-sky-600',
    icon: Users,
    keyPoints: [
      '決心一：惟獨靠著聖經生活——路德說「上帝的大衛投向撒但歌利亞的所有石頭，都取自聖經的溪流」。教會的頭號武器不是節目或策略，而是忠心宣講的上帝話語。',
      '決心二：靠著在基督裡的信心辛勤勞作——「陰間的權柄必不能勝過上帝的教會」（太16:18）。教會是漁船的港灣，不是遊艇的俱樂部；是罪人的醫院，不是聖徒的博物館。',
      '決心三：為教會的改革和復興而活——改革的四個前沿：敬拜改革、教義改革、教會治理與勸懲、以教義為根基的敬虔。「沒有改革的復興」是沒有光的熱；「沒有復興的改革」可能變得冰冷甚至殘酷。',
      '決心四：過合一的生活——撒但正在向教會的分裂禱告（飛機上的撒但崇拜者故事）。真正的合一建立在基督，以真理為根基的必要分裂與為次要問題固守己見導致的分裂必須分清。',
    ],
  },
  {
    num: 13,
    title: '我們作為國家公民的挑戰',
    part: '第四部分：撒但的失敗',
    color: 'from-indigo-50 to-violet-50',
    border: 'border-indigo-100',
    badge: 'from-indigo-500 to-violet-600',
    icon: Star,
    keyPoints: [
      '決心一：傳播真理、傳揚福音——撒但是謊言之父，因此真理的傳播是直接對抗他的工具。從電梯交談到飛機旅程，每個機會都可以撒種；「保守真理，真理就會保守你」（布裡奇）。',
      '決心二：把基督的愛給予窮人和有需要的人——「信心若沒有行為就是死的」（雅2:17）。斯托特：基督徒關心鄰舍的「全部福益」——靈魂、身體、社群，缺一不可。',
      '決心三：大膽宣講聖經和道德——上帝設立國家政權施行公義（羅13:1-7）；基督徒可以寫信、投票、參政，用合法的公民身份追求公義（如保羅使用羅馬公民身份）。教會不是政治機構，但基督徒個人可以從政。',
      '決心四（全書終結）：為基督而活——「不可給魔鬼留地步」（弗4:27）。藉著基督的能力，我們可以過打敗撒但的得勝生活——在個人、教會、國家三個層面都如此。全書以加爾文的禱告作結：「無論撒但及其邪靈如何誘騙我們，我們都永不偏離……直到爭戰結束，使我們最終享受蒙福的安息。」',
    ],
  },
];

export default function Book18Summary() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggleChapter = (num: number) => {
    setExpanded(prev => ({ ...prev, [num]: !prev[num] }));
  };

  const expandAll = () => {
    const allExpanded: Record<number, boolean> = {};
    chapters.forEach(ch => { allExpanded[ch.num] = true; });
    setExpanded(allExpanded);
  };

  const collapseAll = () => setExpanded({});

  const parts = [
    { key: '第一部分：認識敵人', label: '第一部分', subtitle: '認識敵人（第1-6章）', color: 'from-red-600 to-rose-700' },
    { key: '第二部分：認識撒但的弱點', label: '第二部分', subtitle: '認識撒但的弱點（第7-8章）', color: 'from-blue-600 to-indigo-700' },
    { key: '第三部分：認識撒但的策略', label: '第三部分', subtitle: '認識撒但的策略（第9-10章）', color: 'from-fuchsia-600 to-pink-700' },
    { key: '第四部分：撒但的失敗', label: '第四部分', subtitle: '撒但的失敗（第11-13章）', color: 'from-emerald-600 to-green-700' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-600 to-rose-700 bg-clip-text text-transparent">
          重點總結整理
        </h1>
        <h2 className="text-lg font-semibold text-gray-600 mb-1">《與撒但爭戰》全書13章精要</h2>
        <p className="text-gray-500 text-sm">周必克（Joel Beeke）著</p>
      </div>

      {/* 快速導覽 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {parts.map(p => (
          <div key={p.key} className={`bg-gradient-to-r ${p.color} rounded-lg p-3 text-white text-center`}>
            <p className="font-bold text-sm">{p.label}</p>
            <p className="text-xs opacity-90 mt-1">{p.subtitle}</p>
          </div>
        ))}
      </div>

      {/* 展開/收合按鈕 */}
      <div className="flex gap-3 mb-6 justify-end">
        <button
          onClick={expandAll}
          className="px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          全部展開
        </button>
        <button
          onClick={collapseAll}
          className="px-4 py-2 text-sm bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
        >
          全部收合
        </button>
      </div>

      {/* 各章節 */}
      <div className="space-y-3">
        {parts.map(part => (
          <div key={part.key}>
            <div className={`bg-gradient-to-r ${part.color} rounded-lg px-5 py-2 mb-3`}>
              <p className="text-white font-bold text-sm">{part.label}　{part.subtitle}</p>
            </div>
            <div className="space-y-2 mb-4">
              {chapters.filter(ch => ch.part === part.key).map(ch => {
                const Icon = ch.icon;
                const isOpen = expanded[ch.num] ?? false;
                return (
                  <div key={ch.num} className={`border ${ch.border} rounded-lg overflow-hidden shadow-sm`}>
                    <button
                      onClick={() => toggleChapter(ch.num)}
                      className={`w-full px-5 py-3 bg-gradient-to-r ${ch.color} hover:opacity-90 flex items-center justify-between transition-all`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br ${ch.badge} flex items-center justify-center text-white text-xs font-bold`}>
                          {ch.num}
                        </div>
                        <Icon className="w-4 h-4 text-gray-600 flex-shrink-0" />
                        <span className="font-semibold text-gray-800">第{ch.num}章：{ch.title}</span>
                      </div>
                      {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />}
                    </button>
                    {isOpen && (
                      <div className="p-5 bg-white">
                        <ul className="space-y-3">
                          {ch.keyPoints.map((point, i) => (
                            <li key={i} className="flex gap-3">
                              <span className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${ch.badge} flex items-center justify-center text-white text-xs font-bold mt-0.5`}>
                                {i + 1}
                              </span>
                              <p className="text-gray-700 leading-relaxed">{point}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* 全書核心線索 */}
      <div className="mt-8 bg-gradient-to-r from-red-50 to-rose-50 border border-red-100 rounded-xl p-6 shadow-sm">
        <h3 className="font-bold text-red-800 text-lg mb-4 flex items-center gap-2">
          <Check className="w-5 h-5 text-red-600" />
          全書核心線索
        </h3>
        <div className="space-y-3">
          {[
            { label: '認識撒但的目的', content: '不是要迷戀屬靈爭戰，而是更加清楚地看見基督的得勝，從而更深地倚靠他。' },
            { label: '爭戰的性質', content: '激烈（生死之戰）、屬靈（不對付血肉之人）、必要（信徒無法迴避）。' },
            { label: '防禦的裝備', content: '以弗所書6章全副軍裝：真理腰帶、公義護心鏡、平安福音鞋、信德藤牌、救恩頭盔。' },
            { label: '進攻的武器', content: '聖靈的寶劍（上帝的道）+ 禱告 + 警醒——三者缺一不可。' },
            { label: '撒但的弱點', content: '基督的十字架、上帝的話語、信徒堅定的信心和禱告——撒但「看到髑髏地就嚇得面色蒼白」。' },
            { label: '最終的盼望', content: '「賜平安的上帝快要將撒但踐踏在你們腳下」（羅16:20）——爭戰必有終結，基督的得勝是確定的。' },
          ].map((item, i) => (
            <div key={i} className="flex gap-3">
              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-red-500 mt-2.5" />
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-red-700">{item.label}：</span>{item.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 彼得前書5:8-9 */}
      <div className="mt-6 bg-gradient-to-r from-gray-50 to-slate-50 border border-gray-200 rounded-xl p-6 text-center shadow-sm">
        <p className="text-gray-700 italic leading-relaxed text-lg mb-2">
          「務要謹守，警醒；因為你們的仇敵魔鬼，如同吼叫的獅子，遍地遊行，尋找可吞吃的人。你們要用堅固的信心抵擋它。」
        </p>
        <p className="text-gray-500 text-sm">彼得前書 5:8-9</p>
      </div>
    </div>
  );
}
