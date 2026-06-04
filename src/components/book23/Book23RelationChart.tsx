import React, { useState } from 'react';
import { Users, BookOpen, X, Star, Crown, Flame, Scroll } from 'lucide-react';

// ===== 人物資料 =====
interface Person {
  id: string;
  name: string;
  female?: boolean;
  note?: string;
  booksRef?: string;
  desc: string;
}

const P: Record<string, Person> = {
  god:       { id:'god',       name:'上帝',     booksRef:'全書',            desc:'宇宙的創造者，以色列人信仰的對象，舊約聖經中的核心角色。與挪亞、亞伯拉罕、摩西立約。' },
  adam:      { id:'adam',      name:'亞當',     booksRef:'創世記 1-5章',    desc:'上帝按照自己的形象造的第一個人，安置於伊甸園，受夏娃影響吃禁果，被逐出伊甸園，壽命九百三十歲。' },
  eve:       { id:'eve',       name:'夏娃',     female:true, booksRef:'創世記 2-3章',    desc:'上帝用亞當的肋骨造成，在蛇的引誘下偷嘗禁果，成為人類女性始祖。名字在希伯來語中意指「生命之源」。' },
  cain:      { id:'cain',      name:'該隱',     booksRef:'創世記 4章',      desc:'亞當夏娃長男，人類第一個嬰兒，也是第一個殺人犯。因嫉妒上帝接受弟弟亞伯的祭品，而殺死亞伯，被逐往擄得之地。' },
  abel:      { id:'abel',      name:'亞伯',     booksRef:'創世記 4章',      desc:'亞當夏娃次男，敬虔的牧羊人，獻上最肥美的羔羊給上帝，被兄長該隱嫉妒而殺害，是世界第一個謀殺受害者。' },
  seth:      { id:'seth',      name:'塞特',     booksRef:'創世記 4-5章',    desc:'亞當夏娃三男，亞伯被殺後出生，長相據說神似父親亞當，是挪亞、亞伯拉罕等重要人物的祖先，壽命九百一十二歲。' },
  enoch:     { id:'enoch',     name:'以諾',     booksRef:'創世記 5章',      desc:'塞特的子孫，瑪土撒拉的父親，挪亞的祖先。信仰堅定，「與上帝同行，上帝把他接去，他就不在了」，被認為是活著升天，一生三百六十五年。' },
  noah:      { id:'noah',      name:'挪亞',     booksRef:'創世記 6-9章',    desc:'在大洪水中奉上帝命令建造方舟，帶著妻子、三子和媳婦共八人倖存，是亞當起算第十代。大洪水後上帝以彩虹為記號立約。壽命九百五十歲。' },
  shem:      { id:'shem',      name:'閃',       booksRef:'創世記 10章',     desc:'挪亞長男，亞伯拉罕的祖先，以閃為祖先的民族分布在西亞到北非一帶，「閃族語言」（包括希伯來語、阿拉伯語）即由此而來。' },
  ham:       { id:'ham',       name:'含',       booksRef:'創世記 9-10章',   desc:'挪亞次男，因嘲笑醉酒裸臥的父親並告訴兄弟而受詛咒，傳說是埃及人的祖先，後代分布非洲北部。' },
  japheth:   { id:'japheth',   name:'雅弗',     booksRef:'創世記 10章',     desc:'挪亞三男，相傳是歐洲人的祖先，後代遍布泛海地區。大洪水後與閃一同為父親蓋上衣服，蒙父親祝福。' },
  cush:      { id:'cush',      name:'古實',     booksRef:'創世記 10章',     desc:'含的長男，尼羅河谷古實地方之人（努比亞人）的祖先。' },
  nimrod:    { id:'nimrod',    name:'寧錄',     booksRef:'創世記 10章',     desc:'古實的兒子，「主的面前勇敢的獵人」，世界最早的統治者，建設巴別、以力等眾多城市，統治美索不達米亞廣大地區。' },
  canaan:    { id:'canaan',    name:'迦南',     booksRef:'創世記 9-10章',   desc:'含的三男，迦南諸民族（耶布斯人、亞摩利人等十一族）的祖先，因父親含的罪而被挪亞詛咒，成為閃和雅弗後代的僕役。' },
  sidon:     { id:'sidon',     name:'西頓',     booksRef:'創世記 10章',     desc:'迦南的長男，腓尼基人的祖先。' },
  terah:     { id:'terah',     name:'他拉',     booksRef:'創世記 11章',     desc:'閃的子孫，亞伯拉罕、拿鶴、哈蘭的父親。原住在美索不達米亞的吾珥，後帶家人遷往哈蘭，在那裡去世，享年二百零五歲。' },
  abraham:   { id:'abraham',   name:'亞伯拉罕', booksRef:'創世記 12-25章',  desc:'以色列人的祖先，猶太教始祖。原名「亞伯蘭」，蒙上帝呼召離開吾珥前往迦南。九十九歲時上帝將他改名「亞伯拉罕」。猶太教、基督教、伊斯蘭教的共同先祖。' },
  sarah:     { id:'sarah',     name:'撒拉',     female:true, booksRef:'創世記 12-21章',  desc:'亞伯拉罕同父異母的妹妹，正室。原名撒萊，九十歲時生下應許之子以撒。埃及王和基拉耳王都曾因她的美麗而想納她為妃。' },
  hagar:     { id:'hagar',     name:'夏甲',     female:true, note:'妾', booksRef:'創世記 16-21章',  desc:'撒拉的埃及使女，被納為妾，生下以實瑪利。撒拉的兒子以撒出生後，與以實瑪利被逐出家門，在曠野奄奄一息時上帝聽見哭聲相助。' },
  keturah:   { id:'keturah',   name:'基土拉',   female:true, note:'續弦', booksRef:'創世記 25章',     desc:'撒拉死後成為亞伯拉罕的妻子，與他生了六個兒子。為免爭奪繼承權，亞伯拉罕打發他們遷居東方，留以撒在迦南。' },
  nahor:     { id:'nahor',     name:'拿鶴',     booksRef:'創世記 11章',     desc:'亞伯拉罕的弟弟，他拉次男，留在吾珥，娶姪女密迦為妻，是利百加的祖父。' },
  milcah:    { id:'milcah',    name:'密迦',     female:true, booksRef:'創世記 11章',     desc:'哈蘭的女兒，嫁給拿鶴為妻，是利百加的祖母。' },
  haran:     { id:'haran',     name:'哈蘭',     booksRef:'創世記 11章',     desc:'亞伯拉罕的幼弟，他拉三男，在他拉從吾珥出發前已去世。兒子是羅得，女兒是密迦和亦撒。' },
  lot:       { id:'lot',       name:'羅得',     booksRef:'創世記 13-19章',  desc:'哈蘭的兒子，亞伯拉罕的侄子。因牧人相爭與亞伯拉罕分開，選擇居住在所多瑪。城市被毀時得天使相救，妻子因回頭看而化為鹽柱。' },
  ishmael:   { id:'ishmael',   name:'以實瑪利', booksRef:'創世記 16-25章',  desc:'亞伯拉罕和夏甲的兒子，被逐出家門後在曠野得上帝相助，成為阿拉伯各族的祖先，共生了十二個兒子。名字意思是「上帝聽見了」。' },
  isaac:     { id:'isaac',     name:'以撒',     booksRef:'創世記 21-35章',  desc:'亞伯拉罕和撒拉的應許之子，亞伯拉罕一百歲時所生。上帝命亞伯拉罕獻他為燔祭考驗信心，最後提供公羊代替。娶利百加為妻，生了以掃和雅各。' },
  rebekah:   { id:'rebekah',   name:'利百加',   female:true, booksRef:'創世記 24-27章',  desc:'拿鶴的孫女，以撒的妻子。老僕在井旁遇見她，她主動給僕人和駱駝水喝，後嫁給以撒，生了雅各和以掃，偏愛小兒子雅各。' },
  esau:      { id:'esau',      name:'以掃',     booksRef:'創世記 25-36章',  desc:'以撒的長子，雅各的孿生兄弟，性格粗獷的獵人。以一碗紅豆湯賣掉長子名分，又被雅各騙走父親的祝福，後代成為以東人，長期與以色列為鄰。' },
  jacob:     { id:'jacob',     name:'雅各',     booksRef:'創世記 25-50章',  desc:'以撒的次子，以色列民族的父祖。在雅博渡口與天使摔跤，上帝將他改名為「以色列」（「與上帝較力」），生了十二個兒子，成為以色列十二支派的祖先。' },
  leah:      { id:'leah',      name:'利亞',     female:true, booksRef:'創世記 29-35章',  desc:'拉班的大女兒，雅各的正妻（雖非雅各最愛）。生了六子一女（呂便、西緬、利未、猶大、以薩迦、西布倫、底拿），對以色列十二支派的貢獻最大。' },
  rachel:    { id:'rachel',    name:'拉結',     female:true, booksRef:'創世記 29-35章',  desc:'拉班的小女兒，雅各最愛的妻子，為她工作了十四年。生了約瑟和便雅憫，生便雅憫時難產而死，葬在伯利恆路旁。' },
  zilpah:    { id:'zilpah',    name:'悉帕',     female:true, note:'妾', booksRef:'創世記 30章',     desc:'利亞的使女，生了迦得和亞設。' },
  bilhah:    { id:'bilhah',    name:'辟拉',     female:true, note:'妾', booksRef:'創世記 30章',     desc:'拉結的使女，生了但和拿弗他利。呂便曾與她私通，因而失去長子的祝福。' },
  laban:     { id:'laban',     name:'拉班',     booksRef:'創世記 24-31章',  desc:'利百加的兄弟，利亞和拉結的父親。雅各為娶拉結工作七年，被他以利亞掉包，使雅各又多工作七年。是聖經中著名的投機人物。' },
  bethuel:   { id:'bethuel',   name:'彼土利',   booksRef:'創世記 22-24章',  desc:'拿鶴的兒子，利百加和拉班的父親。' },
  reuben:    { id:'reuben',    name:'呂便',     booksRef:'創世記 29-35章',  desc:'雅各和利亞的長子，因與父親的妾辟拉私通而失去長子的祝福，但他也曾力圖阻止兄弟們殺害約瑟。' },
  simeon:    { id:'simeon',    name:'西緬',     booksRef:'創世記 29-42章',  desc:'雅各和利亞的次子，與利未一同為妹妹底拿報仇，屠殺了示劍城所有男丁，後被留在埃及為人質。' },
  levi:      { id:'levi',      name:'利未',     booksRef:'創世記 29章',     desc:'雅各和利亞的三子，手段激烈被父所厭，但他的後代卻成為以色列的祭司支派利未人，摩西、亞倫即出自此支派。' },
  judah:     { id:'judah',     name:'猶大',     booksRef:'創世記 29-44章',  desc:'雅各和利亞的四子，大衛王和耶穌基督的祖先，猶大支派的祖先。在約瑟的試驗中主動代替便雅憫留下為奴，顯示深刻的悔改。' },
  issachar:  { id:'issachar',  name:'以薩迦',   booksRef:'創世記 29章',     desc:'雅各和利亞的五子，以薩迦支派定居在以斯拉谷地區。' },
  zebulun:   { id:'zebulun',   name:'西布倫',   booksRef:'創世記 30章',     desc:'雅各和利亞的六子，西布倫支派後來居住在迦利利地區，出了許多著名士師。' },
  dinah:     { id:'dinah',     name:'底拿',     female:true, booksRef:'創世記 30-34章',  desc:'雅各和利亞唯一的女兒，在示劍城被當地王子強暴，兄長西緬和利未因此屠殺了示劍城全城男丁為她報仇。' },
  joseph:    { id:'joseph',    name:'約瑟',     booksRef:'創世記 37-50章',  desc:'雅各的第十一個兒子，父親最鍾愛的孩子。被兄弟嫉妒賣往埃及為奴，後因能解夢被法老重用，成為埃及宰相。飢荒發生時寬恕兄弟，帶領全家遷往埃及。' },
  benjamin:  { id:'benjamin',  name:'便雅憫',   booksRef:'創世記 35-45章',  desc:'雅各和拉結最小的兒子，以色列最後一個支派的祖先，父親最疼愛的孩子。使徒保羅即出自便雅憫支派。' },
  gad:       { id:'gad',       name:'迦得',     booksRef:'創世記 30章',     desc:'雅各和悉帕的兒子，迦得支派後來定居在約旦河東岸，雅各預言他的後代將擅長征戰。' },
  asher:     { id:'asher',     name:'亞設',     booksRef:'創世記 30章',     desc:'雅各和悉帕的兒子，亞設支派居住在迦南北部沿海，雅各預言他的後代必蒙福、富足。' },
  dan:       { id:'dan',       name:'但',       booksRef:'創世記 30章',     desc:'雅各和辟拉的兒子，但支派後來居住在迦南北部，著名士師參孫即出自但支派。' },
  naphtali:  { id:'naphtali',  name:'拿弗他利', booksRef:'創世記 30章',     desc:'雅各和辟拉的兒子，拿弗他利支派後來居住在迦利利湖一帶。' },
  manasseh:  { id:'manasseh',  name:'瑪拿西',   booksRef:'創世記 41-48章',  desc:'約瑟的長子，雅各臨終時收他為義子，成為以色列十二支派之一。其母是埃及祭司的女兒亞西納。' },
  ephraim:   { id:'ephraim',   name:'以法蓮',   booksRef:'創世記 41-48章',  desc:'約瑟的次子，雅各預言他將比哥哥瑪拿西更大，以法蓮支派後來成為北方以色列王國的核心支派。' },
  miriam:    { id:'miriam',    name:'米利暗',   female:true, booksRef:'出埃及記、民數記',  desc:'摩西的姐姐，以色列的女先知，是聖經中第一位被稱為「女先知」的人。在過紅海後帶領婦女擊鼓跳舞讚美上帝。' },
  aaron:     { id:'aaron',     name:'亞倫',     booksRef:'出埃及記、利未記', desc:'摩西的哥哥，口才極好，作為摩西的發言人。以色列第一任大祭司，其後代世代承擔祭司職務。曾因百姓要求而鑄造金牛犢，是他最大的過失。' },
  moses:     { id:'moses',     name:'摩西',     booksRef:'出埃及記至申命記', desc:'以色列最偉大的先知和領袖。被法老女兒救起養育，蒙上帝呼召帶領以色列人出埃及，在西乃山領受律法（十誡）。名字意思是「從水裡拉出來的」。' },
  zipporah:  { id:'zipporah',  name:'西坡拉',   female:true, booksRef:'出埃及記',        desc:'米甸祭司葉忒羅的女兒，摩西的妻子，協助摩西完成上帝要求的割禮。' },
  ruth:      { id:'ruth',      name:'路得',     female:true, booksRef:'路得記',           desc:'摩押女子，隨婆婆拿俄米回以色列，說出「你往哪裡去，我也往那裡去」的名言。後嫁給波阿斯，成為大衛王的曾祖母。' },
  naomi:     { id:'naomi',     name:'拿俄米',   female:true, booksRef:'路得記',           desc:'路得的婆婆，在丈夫和兒子相繼去世後，帶著媳婦路得回到伯利恆，協助路得與波阿斯相遇。' },
  boaz:      { id:'boaz',      name:'波阿斯',   booksRef:'路得記',           desc:'猶大支派富有的人，是拿俄米丈夫的近親，盡本族人的義務娶了路得，成為大衛王的曾祖父。' },
  obed:      { id:'obed',      name:'俄備得',   booksRef:'路得記',           desc:'路得和波阿斯的兒子，大衛的祖父。' },
  jesse:     { id:'jesse',     name:'耶西',     booksRef:'撒母耳記',         desc:'大衛的父親，家住伯利恆，有八個兒子，大衛是最小的。先知以賽亞以「耶西的根」預言彌賽亞的來臨。' },
  david:     { id:'david',     name:'大衛',     booksRef:'撒母耳記、詩篇',   desc:'以色列最偉大的君王，牧羊人出身，殺死巨人歌利亞而聞名。征服耶路撒冷並設為首都，是詩篇的主要作者，寫有五十七篇以上。' },
  bathsheba: { id:'bathsheba', name:'拔示巴',   female:true, booksRef:'撒母耳記下',       desc:'大衛最寵愛的妻子，所羅門的母親。大衛為娶她而設計讓她丈夫烏利亞戰死，引發了上帝的嚴厲懲罰。' },
  solomon:   { id:'solomon',   name:'所羅門',   booksRef:'列王記上',         desc:'大衛和拔示巴的兒子，以智慧聞名，建造了耶路撒冷聖殿。晚年因眾多外族妻子影響而崇拜偶像，王國在他死後分裂為南北兩國。' },
  esther:    { id:'esther',    name:'以斯帖',   female:true, booksRef:'以斯帖記',         desc:'成為波斯王后的猶太女子，以斯帖記主角。勇敢面對哈曼的滅族陰謀，說出「我若死就死吧」的名言，成功拯救猶太人。' },
  mordecai:  { id:'mordecai',  name:'末底改',   booksRef:'以斯帖記',         desc:'以斯帖的堂兄（養父），拒絕向哈曼下跪而引發危機，後協助以斯帖拯救猶太人，成為波斯帝國的重要官員。' },
  hosea:     { id:'hosea',     name:'何西阿',   booksRef:'何西阿書',         desc:'北方以色列王國的先知，以自己的婚姻生活（娶淫婦歌篾）比喻上帝對不忠以色列的愛，傳達「我喜愛憐恤，不喜愛祭祀」的信息。' },
};

// ===== 人物卡片 =====
const PersonNode: React.FC<{
  pid: string;
  onClick: (p: Person) => void;
}> = ({ pid, onClick }) => {
  const p = P[pid];
  if (!p) return null;
  return (
    <button
      onClick={() => onClick(p)}
      className={`inline-flex flex-col items-center px-2.5 py-1.5 rounded-xl border-2 text-xs font-semibold
        cursor-pointer hover:shadow-lg transition-all whitespace-nowrap min-w-[52px]
        ${p.female
          ? 'bg-rose-50 border-rose-300 text-rose-900 hover:bg-rose-100'
          : 'bg-amber-50 border-amber-300 text-amber-900 hover:bg-amber-100'}`}
    >
      <span>{p.name}</span>
      {p.note && (
        <span className="text-[9px] font-normal text-gray-500 mt-0.5">{p.note}</span>
      )}
    </button>
  );
};

// ===== 連接線元件 =====
const VLine: React.FC<{ h?: number }> = ({ h = 20 }) => (
  <div className="flex justify-center">
    <div className="w-px bg-gray-400" style={{ height: h }} />
  </div>
);

const HLine: React.FC = () => (
  <div className="w-8 h-px bg-gray-400 self-center flex-shrink-0" />
);

// ===== 夫妻組 =====
const Couple: React.FC<{
  left: string;
  right: string;
  onClick: (p: Person) => void;
  label?: string;
}> = ({ left, right, onClick, label }) => (
  <div className="flex flex-col items-center">
    {label && <div className="text-[10px] text-gray-400 mb-1">{label}</div>}
    <div className="flex items-center gap-0">
      <PersonNode pid={left} onClick={onClick} />
      <HLine />
      <PersonNode pid={right} onClick={onClick} />
    </div>
  </div>
);

// ===== 子女排列 =====
const Children: React.FC<{
  pids: string[];
  onClick: (p: Person) => void;
}> = ({ pids, onClick }) => (
  <div className="flex flex-wrap justify-center gap-3">
    {pids.map(pid => (
      <div key={pid} className="flex flex-col items-center">
        <VLine h={16} />
        <PersonNode pid={pid} onClick={onClick} />
      </div>
    ))}
  </div>
);

// ===== 段落標題 =====
const SectionHeader: React.FC<{
  icon: React.ReactNode;
  title: string;
  sub?: string;
  color: string;
}> = ({ icon, title, sub, color }) => (
  <div className={`flex items-center gap-2 px-4 py-2.5 rounded-t-xl ${color}`}>
    {icon}
    <div>
      <div className="font-bold text-sm text-white">{title}</div>
      {sub && <div className="text-[11px] text-white/80">{sub}</div>}
    </div>
  </div>
);

// ===== 主要關係圖組件 =====
export default function Book23RelationChart() {
  const [selected, setSelected] = useState<Person | null>(null);

  const click = (p: Person) => setSelected(p);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">

      {/* ── 頁面標題 ── */}
      <div className="mb-8 rounded-2xl overflow-hidden shadow-lg border border-amber-200">
        <div className="bg-gradient-to-r from-amber-600 to-red-700 px-5 py-3 flex flex-wrap gap-2 items-center">
          <span className="bg-white/20 text-white text-xs font-semibold px-2 py-0.5 rounded-full">關係圖</span>
          <span className="bg-white/20 text-white text-xs font-semibold px-2 py-0.5 rounded-full">家族譜系</span>
          <span className="ml-auto text-white/80 text-xs">點擊人物查看詳情</span>
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">舊約聖書主要人物關係圖</h1>
          <p className="text-sm text-amber-700">舊約聖書中有許多人物，本圖呈現主要人物之間的關係。<br/>這裡列出的只是一小部分，且部分世代有省略。</p>
          <div className="mt-3 flex flex-wrap gap-3 text-xs text-gray-600">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-0.5 bg-gray-400" />
              <span>夫妻 / 妾</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-px bg-gray-400" />
              <div className="w-px h-3 bg-gray-400" />
              <span>親子</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-md border-2 border-amber-300 bg-amber-50" />
              <span>男性</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-md border-2 border-rose-300 bg-rose-50" />
              <span>女性（黑字）</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── 選中人物詳情浮層 ── */}
      {selected && (
        <div className="mb-6 border-2 border-amber-300 rounded-xl overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-amber-500 to-red-600 px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-white" />
              <span className="font-bold text-white">{selected.name}</span>
              {selected.female && <span className="text-white/80 text-xs">（女）</span>}
              {selected.note && <span className="bg-white/20 text-white text-xs px-1.5 py-0.5 rounded-full">{selected.note}</span>}
            </div>
            <button onClick={() => setSelected(null)} className="text-white/80 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="bg-white p-4">
            {selected.booksRef && (
              <div className="flex items-center gap-1.5 text-xs text-amber-700 mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{selected.booksRef}</span>
              </div>
            )}
            <p className="text-sm text-gray-700 leading-relaxed">{selected.desc}</p>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════
          區塊 1：創世始祖（上帝 → 挪亞）
      ═══════════════════════════════════════ */}
      <div className="mb-6 rounded-xl overflow-hidden shadow border border-slate-200">
        <SectionHeader
          icon={<Flame className="w-4 h-4 text-white" />}
          title="創世始祖"
          sub="上帝 → 亞當 → 挪亞"
          color="bg-slate-600"
        />
        <div className="bg-white p-5 flex flex-col items-center gap-2 overflow-x-auto">

          {/* 上帝 */}
          <PersonNode pid="god" onClick={click} />
          <VLine />

          {/* 亞當 × 夏娃 */}
          <Couple left="adam" right="eve" onClick={click} />
          <VLine />

          {/* 該隱 亞伯 塞特 */}
          <div className="flex items-end gap-6 relative">
            <div className="absolute top-0 left-[26px] right-[26px] h-px bg-gray-400" />
            {['cain','abel','seth'].map(pid => (
              <div key={pid} className="flex flex-col items-center">
                <VLine h={16} />
                <PersonNode pid={pid} onClick={click} />
              </div>
            ))}
          </div>

          {/* 塞特 → 以諾（歷代省略）*/}
          <div className="flex flex-col items-end w-full pr-0" style={{alignItems:'flex-end', paddingRight:'0'}}>
            <div className="flex flex-col items-center" style={{marginLeft:'auto', marginRight:'auto', marginTop:'4px'}}>
              <div className="text-[10px] text-gray-400 mb-1">（塞特後代，歷代省略）</div>
              <PersonNode pid="enoch" onClick={click} />
              <VLine />
              <PersonNode pid="noah" onClick={click} />
              <VLine />

              {/* 閃 含 雅弗 */}
              <div className="flex items-end gap-6 relative">
                <div className="absolute top-0 left-[18px] right-[18px] h-px bg-gray-400" />
                {['shem','ham','japheth'].map(pid => (
                  <div key={pid} className="flex flex-col items-center">
                    <VLine h={16} />
                    <PersonNode pid={pid} onClick={click} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          區塊 2：含的後代
      ═══════════════════════════════════════ */}
      <div className="mb-6 rounded-xl overflow-hidden shadow border border-orange-200">
        <SectionHeader
          icon={<Users className="w-4 h-4 text-white" />}
          title="含的後代"
          sub="古實（寧錄）· 弗 · 迦南（西頓）"
          color="bg-orange-500"
        />
        <div className="bg-white p-5 overflow-x-auto">
          <div className="flex flex-col items-center gap-2">
            <PersonNode pid="ham" onClick={click} />
            <VLine />
            <div className="flex flex-wrap justify-center gap-6">
              {/* 古實 → 寧錄 */}
              <div className="flex flex-col items-center gap-1">
                <VLine h={16} />
                <PersonNode pid="cush" onClick={click} />
                <VLine h={16} />
                <PersonNode pid="nimrod" onClick={click} />
              </div>
              {/* 迦南 → 西頓 */}
              <div className="flex flex-col items-center gap-1">
                <VLine h={16} />
                <PersonNode pid="canaan" onClick={click} />
                <VLine h={16} />
                <PersonNode pid="sidon" onClick={click} />
                <div className="text-[10px] text-gray-400">（及赫等十一族）</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          區塊 3：他拉家族
      ═══════════════════════════════════════ */}
      <div className="mb-6 rounded-xl overflow-hidden shadow border border-amber-200">
        <SectionHeader
          icon={<Users className="w-4 h-4 text-white" />}
          title="他拉家族"
          sub="閃的後代（歷代省略）→ 他拉三子"
          color="bg-amber-700"
        />
        <div className="bg-white p-5 overflow-x-auto">
          <div className="flex flex-col items-center gap-2">
            <div className="text-[10px] text-gray-400">（閃的後代，歷代省略）</div>
            <PersonNode pid="terah" onClick={click} />
            <VLine />
            <div className="flex flex-wrap justify-center gap-8 relative">
              <div className="absolute top-0 left-[26px] right-[26px] h-px bg-gray-400" />
              {/* 亞伯拉罕 */}
              <div className="flex flex-col items-center">
                <VLine h={16} />
                <PersonNode pid="abraham" onClick={click} />
              </div>
              {/* 拿鶴 */}
              <div className="flex flex-col items-center">
                <VLine h={16} />
                <PersonNode pid="nahor" onClick={click} />
              </div>
              {/* 哈蘭 */}
              <div className="flex flex-col items-center">
                <VLine h={16} />
                <PersonNode pid="haran" onClick={click} />
              </div>
            </div>

            {/* 拿鶴的妻子和後代 */}
            <div className="mt-4 border-l-2 border-dashed border-amber-300 pl-4 self-start ml-8">
              <div className="text-[10px] text-amber-600 mb-2 font-semibold">拿鶴支系</div>
              <div className="flex flex-col items-start gap-2">
                <div className="flex items-center gap-1">
                  <PersonNode pid="nahor" onClick={click} />
                  <HLine />
                  <PersonNode pid="milcah" onClick={click} />
                </div>
                <div className="flex items-center gap-1 ml-8">
                  <div className="text-[10px] text-gray-400">↓</div>
                  <PersonNode pid="bethuel" onClick={click} />
                </div>
                <div className="flex gap-4 ml-14">
                  <PersonNode pid="rebekah" onClick={click} />
                  <PersonNode pid="laban" onClick={click} />
                </div>
              </div>
            </div>

            {/* 哈蘭的後代 */}
            <div className="mt-2 border-l-2 border-dashed border-gray-300 pl-4 self-start ml-8">
              <div className="text-[10px] text-gray-500 mb-2 font-semibold">哈蘭支系</div>
              <div className="flex items-center gap-1">
                <PersonNode pid="haran" onClick={click} />
                <span className="text-gray-400 text-sm">→</span>
                <PersonNode pid="lot" onClick={click} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          區塊 4：亞伯拉罕家族
      ═══════════════════════════════════════ */}
      <div className="mb-6 rounded-xl overflow-hidden shadow border border-red-200">
        <SectionHeader
          icon={<Star className="w-4 h-4 text-white" />}
          title="亞伯拉罕家族"
          sub="三位妻妾 · 三條血脈"
          color="bg-red-700"
        />
        <div className="bg-white p-5 overflow-x-auto">
          <div className="flex flex-col items-center gap-3">

            {/* 夏甲 × 亞伯拉罕 × 撒拉 */}
            <div className="flex items-center gap-1 flex-wrap justify-center">
              <PersonNode pid="hagar" onClick={click} />
              <HLine />
              <PersonNode pid="abraham" onClick={click} />
              <HLine />
              <PersonNode pid="sarah" onClick={click} />
            </div>
            <div className="text-[10px] text-gray-400">（另有續弦基土拉）</div>

            {/* 以實瑪利 和 以撒 */}
            <div className="flex gap-16 relative">
              <div className="absolute top-0 left-[30px] right-[30px] h-px bg-gray-400" />
              <div className="flex flex-col items-center">
                <VLine h={16} />
                <PersonNode pid="ishmael" onClick={click} />
                <div className="text-[10px] text-gray-400 mt-1">阿拉伯人始祖</div>
              </div>
              <div className="flex flex-col items-center">
                <VLine h={16} />
                <PersonNode pid="isaac" onClick={click} />
              </div>
            </div>

            {/* 以撒 × 利百加 */}
            <div className="mt-2 flex flex-col items-center gap-2">
              <div className="flex items-center gap-0">
                <PersonNode pid="isaac" onClick={click} />
                <HLine />
                <PersonNode pid="rebekah" onClick={click} />
              </div>
              <VLine />

              {/* 以掃 雅各 */}
              <div className="flex gap-12 relative">
                <div className="absolute top-0 left-[26px] right-[26px] h-px bg-gray-400" />
                <div className="flex flex-col items-center">
                  <VLine h={16} />
                  <PersonNode pid="esau" onClick={click} />
                  <div className="text-[10px] text-gray-400 mt-1">以東人始祖</div>
                </div>
                <div className="flex flex-col items-center">
                  <VLine h={16} />
                  <PersonNode pid="jacob" onClick={click} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          區塊 5：雅各的十二子（以色列十二支派）
      ═══════════════════════════════════════ */}
      <div className="mb-6 rounded-xl overflow-hidden shadow border border-indigo-200">
        <SectionHeader
          icon={<Scroll className="w-4 h-4 text-white" />}
          title="雅各的十二子：以色列十二支派"
          sub="四位母親所生的十二個兒子"
          color="bg-indigo-700"
        />
        <div className="bg-white p-5 overflow-x-auto">
          <div className="flex flex-col gap-4">

            {/* 利亞所生 */}
            <div className="border border-indigo-100 rounded-xl p-3 bg-indigo-50">
              <div className="flex items-center gap-2 mb-3">
                <PersonNode pid="jacob" onClick={click} />
                <HLine />
                <PersonNode pid="leah" onClick={click} />
                <span className="text-[11px] text-gray-500 ml-1">（正室）</span>
              </div>
              <div className="flex flex-wrap gap-2 ml-4">
                {['reuben','simeon','levi','judah','issachar','zebulun','dinah'].map(pid => (
                  <PersonNode key={pid} pid={pid} onClick={click} />
                ))}
              </div>
            </div>

            {/* 拉結所生 */}
            <div className="border border-rose-100 rounded-xl p-3 bg-rose-50">
              <div className="flex items-center gap-2 mb-3">
                <PersonNode pid="jacob" onClick={click} />
                <HLine />
                <PersonNode pid="rachel" onClick={click} />
              </div>
              <div className="flex flex-wrap gap-2 ml-4">
                {['joseph','benjamin'].map(pid => (
                  <PersonNode key={pid} pid={pid} onClick={click} />
                ))}
              </div>
              {/* 約瑟的兒子 */}
              <div className="mt-2 ml-8 flex items-center gap-2">
                <span className="text-[10px] text-gray-400">約瑟之子 →</span>
                <PersonNode pid="manasseh" onClick={click} />
                <PersonNode pid="ephraim" onClick={click} />
              </div>
            </div>

            {/* 悉帕所生 */}
            <div className="border border-green-100 rounded-xl p-3 bg-green-50">
              <div className="flex items-center gap-2 mb-3">
                <PersonNode pid="jacob" onClick={click} />
                <HLine />
                <PersonNode pid="zilpah" onClick={click} />
              </div>
              <div className="flex flex-wrap gap-2 ml-4">
                {['gad','asher'].map(pid => (
                  <PersonNode key={pid} pid={pid} onClick={click} />
                ))}
              </div>
            </div>

            {/* 辟拉所生 */}
            <div className="border border-blue-100 rounded-xl p-3 bg-blue-50">
              <div className="flex items-center gap-2 mb-3">
                <PersonNode pid="jacob" onClick={click} />
                <HLine />
                <PersonNode pid="bilhah" onClick={click} />
              </div>
              <div className="flex flex-wrap gap-2 ml-4">
                {['dan','naphtali'].map(pid => (
                  <PersonNode key={pid} pid={pid} onClick={click} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          區塊 6：摩西家族（利未支派）
      ═══════════════════════════════════════ */}
      <div className="mb-6 rounded-xl overflow-hidden shadow border border-blue-200">
        <SectionHeader
          icon={<Flame className="w-4 h-4 text-white" />}
          title="摩西家族"
          sub="利未支派 · 出埃及的領袖"
          color="bg-blue-700"
        />
        <div className="bg-white p-5 overflow-x-auto">
          <div className="flex flex-col items-center gap-2">
            <PersonNode pid="levi" onClick={click} />
            <div className="text-[10px] text-gray-400">（歷代省略）</div>
            <VLine />
            <div className="flex gap-8 relative">
              <div className="absolute top-0 left-[26px] right-[26px] h-px bg-gray-400" />
              {['miriam','aaron','moses'].map(pid => (
                <div key={pid} className="flex flex-col items-center">
                  <VLine h={16} />
                  <PersonNode pid={pid} onClick={click} />
                </div>
              ))}
            </div>

            <div className="mt-3 flex items-center gap-1">
              <PersonNode pid="moses" onClick={click} />
              <HLine />
              <PersonNode pid="zipporah" onClick={click} />
              <div className="text-[10px] text-gray-400 ml-2">米甸人，祭司女兒</div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          區塊 7：大衛王朝（路得 → 大衛 → 所羅門）
      ═══════════════════════════════════════ */}
      <div className="mb-6 rounded-xl overflow-hidden shadow border border-yellow-200">
        <SectionHeader
          icon={<Crown className="w-4 h-4 text-white" />}
          title="大衛王朝"
          sub="猶大支派 · 路得 → 大衛 → 所羅門"
          color="bg-yellow-600"
        />
        <div className="bg-white p-5 overflow-x-auto">
          <div className="flex flex-col items-center gap-2">

            {/* 路得 × 波阿斯 */}
            <div className="flex items-center gap-2">
              <div className="flex flex-col items-center">
                <PersonNode pid="naomi" onClick={click} />
                <div className="text-[10px] text-gray-400">（婆婆）</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-0">
                  <PersonNode pid="ruth" onClick={click} />
                  <HLine />
                  <PersonNode pid="boaz" onClick={click} />
                </div>
              </div>
            </div>

            <VLine />
            <PersonNode pid="obed" onClick={click} />
            <VLine />
            <PersonNode pid="jesse" onClick={click} />
            <VLine />
            <PersonNode pid="david" onClick={click} />
            <VLine />
            <div className="flex items-center gap-0">
              <PersonNode pid="david" onClick={click} />
              <HLine />
              <PersonNode pid="bathsheba" onClick={click} />
            </div>
            <VLine />
            <PersonNode pid="solomon" onClick={click} />
            <div className="text-[10px] text-gray-400 mt-1">（建造聖殿，王國分裂為南北二國）</div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          區塊 8：以斯帖與先知
      ═══════════════════════════════════════ */}
      <div className="mb-6 rounded-xl overflow-hidden shadow border border-purple-200">
        <SectionHeader
          icon={<Star className="w-4 h-4 text-white" />}
          title="以斯帖 · 何西阿"
          sub="波斯時代的猶太英雄 · 先知"
          color="bg-purple-700"
        />
        <div className="bg-white p-5">
          <div className="flex flex-wrap gap-8">
            {/* 以斯帖 */}
            <div className="flex flex-col items-center gap-2">
              <div className="text-xs font-semibold text-purple-700 mb-1">波斯時代</div>
              <div className="flex items-center gap-2">
                <PersonNode pid="mordecai" onClick={click} />
                <span className="text-[10px] text-gray-400">（養父）</span>
                <PersonNode pid="esther" onClick={click} />
              </div>
              <div className="text-[10px] text-gray-400 text-center">猶太人拯救者<br/>成為波斯王后</div>
            </div>

            {/* 何西阿 */}
            <div className="flex flex-col items-center gap-2">
              <div className="text-xs font-semibold text-purple-700 mb-1">北方以色列王國先知</div>
              <PersonNode pid="hosea" onClick={click} />
              <div className="text-[10px] text-gray-400 text-center">以婚姻喻上帝之愛</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 說明注腳 ── */}
      <div className="text-xs text-gray-400 text-center mt-4 pb-4">
        ※ 此關係圖僅呈現主要人物，部分中間世代已省略。<br/>
        ※ 資料來源：《舊約聖書人物圖鑑》小堀真一郎監修（p.232-233）
      </div>
    </div>
  );
}
