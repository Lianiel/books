import { useState } from 'react';
import {
  ChevronDown, ChevronRight, Shield, AlertTriangle, Star,
  Users, Eye, Target, BookOpen, MessageCircle, CheckCircle,
  Zap, Heart, TrendingUp, Crown, Search, Book, Clock, Lightbulb
} from 'lucide-react';

const Section = ({
  title,
  icon: Icon,
  children,
  defaultOpen = false,
  accentColor = 'indigo',
}: {
  title: string;
  icon: any;
  children: React.ReactNode;
  defaultOpen?: boolean;
  accentColor?: string;
}) => {
  const [open, setOpen] = useState(defaultOpen);
  const borderColor = accentColor === 'purple' ? 'border-purple-400' : accentColor === 'red' ? 'border-red-400' : accentColor === 'amber' ? 'border-amber-400' : 'border-indigo-400';
  const bgColor = accentColor === 'purple' ? 'bg-purple-50' : accentColor === 'red' ? 'bg-red-50' : accentColor === 'amber' ? 'bg-amber-50' : 'bg-indigo-50';
  const iconColor = accentColor === 'purple' ? 'text-purple-600' : accentColor === 'red' ? 'text-red-600' : accentColor === 'amber' ? 'text-amber-600' : 'text-indigo-600';
  const titleColor = accentColor === 'purple' ? 'text-purple-900' : accentColor === 'red' ? 'text-red-900' : accentColor === 'amber' ? 'text-amber-900' : 'text-indigo-900';

  return (
    <div className={`rounded-xl border-l-4 ${borderColor} ${bgColor} mb-4 shadow-sm overflow-hidden`}>
      <button
        className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-3">
          <Icon className={`w-5 h-5 ${iconColor} flex-shrink-0`} />
          <span className={`font-bold ${titleColor}`} style={{ fontSize: '17px' }}>{title}</span>
        </div>
        {open
          ? <ChevronDown className={`w-5 h-5 ${iconColor}`} />
          : <ChevronRight className={`w-5 h-5 ${iconColor}`} />}
      </button>
      {open && <div className="px-5 pb-5">{children}</div>}
    </div>
  );
};

export default function Book10Ch3() {
  const [openReason, setOpenReason] = useState<number | null>(null);
  const [openVul, setOpenVul] = useState<number | null>(null);

  const reasons = [
    {
      icon: Crown,
      title: '原因一：牧師承擔更重的道德責任',
      color: 'purple',
      verse: '雅各書 3:1「我的弟兄們，不要多人作師傅，因為曉得我們要受更重的判斷。」',
      content: `使徒雅各警告：教導者要受到更嚴格的審判。這不是懲罰性的不公平，而是「影響力越大，責任越重」的屬靈原則。

牧師每週站在講台上，向幾十、幾百甚至幾千人傳遞神的話語。他的詮釋、他的榜樣、他的性格，都深深影響著會眾的信仰塑造。正因如此，當牧師在道德上失足，受到震撼的不只是他自己，而是整個會眾群體。

在一項對四百名牧師的調查中，有一組令人心碎的數據：
• **80%** 的牧師認為牧會工作對他們的家庭有負面影響
• **70%** 的牧師表示自己沒有親密朋友
• **50%** 的牧師說如果有可能，他們寧願選擇另一種職業

這些數字不是在說牧師脆弱，而是在說：他們扛著的重量，比我們多數人意識到的更沉。而這個重量，本可以因著代禱而得到分擔。`,
      application: '每次我們進入教會坐下等候崇拜開始時，那位站在台上即將開口講道的人，正需要我們的代禱。他站在一個比任何人都更需要神同在的位置上。'
    },
    {
      icon: Target,
      title: '原因二：牧師是撒但攻擊的首要目標',
      color: 'red',
      verse: '撒迦利亞書 13:7「……要擊打牧人，羊就分散。」',
      content: `這是撒但最古老、最有效的策略：不要逐一消滅羊群，要去打倒牧人。當牧人倒下，羊群自然四散。

瓦格納在書中記述了一件令他深感震驚的事：一封來自女巫的信，信中坦白說明她所在的撒但敬拜群體，每天都在有組織地為基督教牧師的垮台而禱告。她們的策略目標明確：牧師的道德失敗、家庭破裂、教會分裂。

當惡者如此有系統地攻擊牧師，而教會卻從未有人為牧師的保守代禱，這場屬靈爭戰根本毫無公平可言。

更驚人的是，這種攻擊往往潛伏在最隱蔽之處：一個善意的女性會友突然對牧師產生過度依戀；財務壓力在最不恰當的時刻達到頂點；一個小小的誤解逐漸在教會中發酵……這些都不是「巧合」，而是有靈性背景的攻擊。`,
      application: '代禱不是在替牧師解決問題，而是在屬靈層面建立一個保護的圍牆。每一個為牧師代禱的信徒，都是在真正的意義上守護自己的教會。'
    },
    {
      icon: AlertTriangle,
      title: '原因三：牧師面對更多的誘惑與試探',
      color: 'red',
      verse: '哥林多前書 10:13「……神是信實的，必不叫你們受試探過於所能受的；在受試探的時候，總要給你們開一條出路，叫你們能忍受得住。」',
      content: `牧師所面對的三大誘惑，往往也是他服事的三大領域：

**金錢**：牧師接觸到許多人的財務危機、遺囑規劃、感恩奉獻……在這些敏感時刻，誘惑是真實的。

**性**：婚姻輔導、危機關懷、長期陪伴——這些服事的本質，常常讓牧師與異性會友建立深度情感連結，若沒有嚴格的界線保護，很容易越界。

**權力**：「我的方式是對的」「教會沒有我不行」「他們不懂我的異象」——屬靈的傲慢，是最不易被察覺的誘惑，也是最具破壞性的一種。

瓦格納強調：不是牧師比一般信徒更「壞」，而是他們因著職分，每天都在這三個領域的最前線服事——暴露在誘惑中的頻率與強度，遠超過一般信徒。`,
      application: '當我們為牧師代禱：「主啊，保守他的心，堅固他的界線，讓他在金錢、性和權力上有超然的聖潔」，這是真實屬靈保護的禱告，不是空泛的祝福。'
    },
    {
      icon: TrendingUp,
      title: '原因四：牧師的影響力有乘數效果',
      color: 'indigo',
      verse: '羅馬書 15:29「而且我也曉得，我到你們那裏去，必帶著基督豐盛的恩典而去。」',
      content: `一個普通信徒的屬靈狀態，主要影響他的家庭和親近的朋友——大約十至二十個人的生命圈。但一位牧師的屬靈狀態，卻直接影響他所牧養的整個群體。

如果牧師在屬靈上活力充沛、充滿恩膏，他的講道有能力，他的生命有見證，整個教會都會被帶旺。反之，如果牧師疲憊、懷疑、靈命低落，即使他繼續履行職責，會眾也會感受到那種「空洞感」。

這就是「乘數原理」：對牧師每一分的代禱投資，都會以倍數的方式流向整個教會群體。

南施·法芙（Nancy Pfaff）在她的研究中發現：
• 擁有個人代禱同工的牧師，有 **89%** 表示服事有顯著改善
• 其中有 **60%** 的教會在同一時期出現增長
• **78%** 表示個人靈命生活也有明顯進步`,
      application: '你不需要親自站上講台、帶領小組，你的代禱就已經在做乘法了。每一個為牧師禱告的信徒，都是在間接服事整個教會群體。'
    },
    {
      icon: Eye,
      title: '原因五：牧師生活在眾人的注視之下',
      color: 'purple',
      verse: '腓立比書 4:11「我學會了，無論在什麼狀態，可以知足，這是我學會了。」',
      content: `有一種說法叫做「金魚缸人生」（fishbowl life）——牧師和他的家人，生活在透明玻璃缸中，四面八方都是注視的眼睛。

這種處境帶來的壓力是真實而長期的：
• 牧師的孩子被期待成為「完美的基督徒兒女」
• 牧師的配偶被期待擔任「免費的副牧師」
• 牧師本人被期待在每個領域都有完美的答案
• 他的情緒、婚姻、財務、育兒……每一個層面都在眾目睽睽之下

許多牧師的配偶坦白說：最難的，不是財務壓力、不是繁重的服事，而是永遠「活在表演中」的感覺——無論在哪裡，都不能真實地喘一口氣。

瓦格納分享道：他有一位認識多年的牧師朋友，在一次深夜的長談中，流著淚說：「最孤獨的感覺，就是站在五百人面前，卻沒有一個人真正認識我。」`,
      application: '為牧師代禱：「主，給他真實的休息；保護他的家庭；讓他在你面前可以誠實地做自己。」這是最貼近牧師真實需要的禱告。'
    },
  ];

  const vulnerabilities = [
    {
      title: '品德層面的軟弱',
      icon: Heart,
      content: '道德失敗是牧師最公開、也最具破壞性的軟弱形式。外遇、財務不誠信、說謊……這些事件一旦曝光，往往讓整個教會陷入危機。代禱者可以為牧師的品格完整性持續守望，成為他看不見的保護網。',
      prayer: '主啊，保守他的心，讓他在私下與公開的生活中都保持一致。讓他不輕易為私利妥協，讓他的誠信成為整個教會的根基。'
    },
    {
      title: '信仰層面的疲憊',
      icon: Zap,
      content: '「職業性的無聊」（professional boredom）是牧師最危險的屬靈疾病之一。每週準備講章、主持儀式、辦理行政……漸漸地，這些聖潔的事物變成了例行公事，神的同在不再真實，禱告成了表演。代禱者的守望，可以成為牧師靈命更新的重要資源。',
      prayer: '主啊，讓他對你的話語保持驚奇；讓他在每次準備講章時都遇見你；讓他的禱告是真實的渴慕，而非職業的義務。'
    },
    {
      title: '家庭層面的張力',
      icon: Users,
      content: '牧師的家庭常常是最後一個被牧養的群體。配偶可能對「分享先生/妻子給所有人」感到疲憊；孩子可能對被比較、被期待感到怨恨；牧師本人可能在付出了整週之後，沒有餘力再陪伴家人。這個隱藏的張力，常常是牧師心裡最深的痛。',
      prayer: '主啊，保守他的婚姻，使他與配偶同心同行；保護他的孩子，讓他們在家中看見父親真實地愛神、愛家人。讓他的家成為他服事的後盾，而非代價。'
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Chapter Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-2xl p-6 mb-8 shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <Shield className="w-7 h-7 text-indigo-200" />
          <span className="text-indigo-200 font-medium" style={{ fontSize: '14px' }}>第三章</span>
        </div>
        <h1 className="font-bold text-white mb-3" style={{ fontSize: '24px' }}>
          為什麼牧師需要我們代禱
        </h1>
        <p className="text-indigo-200 leading-relaxed" style={{ fontSize: '15px' }}>
          牧師每天站在屬靈爭戰的最前線，卻鮮少有人主動為他們的保守守望代禱。
          這一章揭示五個關鍵理由，讓我們重新認識代禱牧師這件事的急迫性與重要性。
        </p>
      </div>

      {/* Opening Core Verse */}
      <section className="bg-indigo-50 border-l-4 border-indigo-500 rounded-xl p-5 mb-6 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="w-5 h-5 text-indigo-600" />
          <span className="font-bold text-indigo-800" style={{ fontSize: '16px' }}>核心經文</span>
        </div>
        <blockquote className="text-indigo-900 leading-relaxed italic" style={{ fontSize: '16px' }}>
          「我又勸你，第一要為萬人懇求、禱告、代求、祝謝；為君王和一切在位的，也該如此，使我們可以敬虔、端正、平安無事地度日。」
        </blockquote>
        <p className="text-indigo-600 mt-2 font-medium" style={{ fontSize: '14px' }}>提摩太前書 2:1-2</p>
      </section>

      {/* Opening Story */}
      <Section title="開場故事：差點放棄的牧師" icon={Star} defaultOpen accentColor="purple">
        <p className="text-gray-700 leading-relaxed mb-4" style={{ fontSize: '16px' }}>
          吉姆（化名）是一間中型教會的主任牧師，牧會第十二年。從外表看，一切都很好：教會穩定增長、講台受到肯定、家庭也還算和諧。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4" style={{ fontSize: '16px' }}>
          但在他的內心深處，有一口緩慢枯竭的井。
        </p>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
          <p className="text-purple-900 leading-relaxed italic" style={{ fontSize: '16px' }}>
            「那天我走進辦公室，坐下來，看著桌上堆積的信件、電話留言、待回的電子郵件，突然有一個聲音說：『你為什麼還要繼續？』我嚇了一跳——不是因為有人說話，而是因為我發現，我心底早就有同樣的問題，只是第一次被說出聲音。」
          </p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4" style={{ fontSize: '16px' }}>
          就在同一周，教會的一位長執注意到吉姆的狀態，不動聲色地召集了六個人，開始每天早上為他代禱。他們為他的服事、婚姻、孩子、屬靈生命守望。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4" style={{ fontSize: '16px' }}>
          三個月後，吉姆告訴長執：「我不知道你們做了什麼，但我覺得自己像是被人從水中撈起來了。我重新感覺到了呼召。」
        </p>
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
          <p className="text-indigo-800 font-semibold mb-1" style={{ fontSize: '15px' }}>瓦格納的觀察：</p>
          <p className="text-indigo-700 leading-relaxed" style={{ fontSize: '15px' }}>
            「吉姆的故事並不罕見。許多牧師在某一個時刻，都曾站在要放棄的邊緣。在多數情況下，讓他們繼續走下去的，不是更好的薪資，也不是更多的肯定，而是知道有人在為他們守望。」
          </p>
        </div>
      </Section>

      {/* The Core Claim */}
      <Section title="本章核心主張：牧師是最脆弱的人之一" icon={AlertTriangle} defaultOpen accentColor="red">
        <p className="text-gray-700 leading-relaxed mb-4" style={{ fontSize: '16px' }}>
          這聽起來可能出乎意料。許多信徒心目中的牧師，是一個屬靈力量的象徵——信心剛強、話語有能力、不會輕易動搖。但現實是：
        </p>
        <div className="grid grid-cols-1 gap-3 mb-4">
          {[
            { num: '1', text: '牧師承擔超乎尋常的道德責任' },
            { num: '2', text: '牧師是撒但攻擊的策略性目標' },
            { num: '3', text: '牧師面對的誘惑，比一般信徒更多、更強' },
            { num: '4', text: '牧師的失敗，影響的人數以倍數計' },
            { num: '5', text: '牧師的生活沒有「下班時間」，全年無休地活在眾人眼光下' },
          ].map(item => (
            <div key={item.num} className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-lg p-3">
              <span className="bg-red-500 text-white text-sm font-bold rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center">{item.num}</span>
              <p className="text-red-900 leading-relaxed" style={{ fontSize: '15px' }}>{item.text}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed" style={{ fontSize: '16px' }}>
          瓦格納強調：這不是在說牧師的靈命不夠好，或者他們需要被同情。而是要說，在屬靈的現實中，他們每天站在最前線的位置上，身旁卻常常沒有人守望。這正是本章存在的理由。
        </p>
      </Section>

      {/* 5 Reasons - Expandable */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Shield className="w-6 h-6 text-indigo-600" />
          五個理由：為何牧師比一般信徒更需要代禱
        </h2>
        {reasons.map((reason, idx) => {
          const Icon = reason.icon;
          const isOpen = openReason === idx;
          const borderColor = reason.color === 'red' ? 'border-red-400' : reason.color === 'purple' ? 'border-purple-400' : 'border-indigo-400';
          const bgColor = reason.color === 'red' ? 'bg-red-50' : reason.color === 'purple' ? 'bg-purple-50' : 'bg-indigo-50';
          const iconColor = reason.color === 'red' ? 'text-red-600' : reason.color === 'purple' ? 'text-purple-600' : 'text-indigo-600';
          const titleColor = reason.color === 'red' ? 'text-red-900' : reason.color === 'purple' ? 'text-purple-900' : 'text-indigo-900';

          return (
            <div key={idx} className={`rounded-xl border-l-4 ${borderColor} ${bgColor} mb-3 shadow-sm overflow-hidden`}>
              <button
                className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                onClick={() => setOpenReason(isOpen ? null : idx)}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${iconColor} flex-shrink-0`} />
                  <span className={`font-bold ${titleColor}`} style={{ fontSize: '16px' }}>{reason.title}</span>
                </div>
                {isOpen
                  ? <ChevronDown className={`w-5 h-5 ${iconColor} flex-shrink-0`} />
                  : <ChevronRight className={`w-5 h-5 ${iconColor} flex-shrink-0`} />}
              </button>
              {isOpen && (
                <div className="px-5 pb-5">
                  <div className="bg-white rounded-lg p-3 mb-4 border border-gray-100">
                    <p className="text-gray-600 italic" style={{ fontSize: '14px' }}>{reason.verse}</p>
                  </div>
                  <div className="text-gray-700 leading-relaxed mb-4 whitespace-pre-line" style={{ fontSize: '15px' }}>
                    {reason.content}
                  </div>
                  <div className="bg-white border-l-4 border-green-400 rounded-lg p-3">
                    <p className="text-green-800 font-semibold mb-1" style={{ fontSize: '14px' }}>💡 應用提醒</p>
                    <p className="text-green-700 leading-relaxed" style={{ fontSize: '14px' }}>{reason.application}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* Research Evidence */}
      <Section title="研究數據：代禱確實有效" icon={Search} accentColor="indigo">
        <p className="text-gray-700 leading-relaxed mb-4" style={{ fontSize: '16px' }}>
          南施·法芙（Nancy Pfaff）針對四百名擁有「個人代禱同工」的牧師進行研究，結果令人驚喜：
        </p>
        <div className="grid grid-cols-1 gap-3 mb-4">
          {[
            { pct: '89%', desc: '的牧師表示服事有顯著改善', color: 'indigo' },
            { pct: '78%', desc: '的牧師表示個人靈命生活更健康', color: 'purple' },
            { pct: '60%', desc: '的教會在同一時期出現明顯增長', color: 'blue' },
          ].map((item, i) => (
            <div key={i} className={`flex items-center gap-4 bg-${item.color}-50 border border-${item.color}-100 rounded-lg p-4`}>
              <span className="text-3xl font-black text-indigo-700">{item.pct}</span>
              <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
          這不是軼事，而是可量化的事實。當代禱者認真守望牧師，整個教會都感受得到那份恩典的流動。
        </p>
      </Section>

      {/* Three Vulnerability Areas */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-amber-600" />
          牧師的三大軟弱區域
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4" style={{ fontSize: '15px' }}>
          了解牧師在哪些地方最脆弱，我們的代禱就能更有針對性、更有能力。
        </p>
        {vulnerabilities.map((vul, idx) => {
          const Icon = vul.icon;
          const isOpen = openVul === idx;
          return (
            <div key={idx} className="rounded-xl border-l-4 border-amber-400 bg-amber-50 mb-3 shadow-sm overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                onClick={() => setOpenVul(isOpen ? null : idx)}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  <span className="font-bold text-amber-900" style={{ fontSize: '16px' }}>{vul.title}</span>
                </div>
                {isOpen
                  ? <ChevronDown className="w-5 h-5 text-amber-600" />
                  : <ChevronRight className="w-5 h-5 text-amber-600" />}
              </button>
              {isOpen && (
                <div className="px-5 pb-5">
                  <p className="text-gray-700 leading-relaxed mb-4" style={{ fontSize: '15px' }}>
                    {vul.content}
                  </p>
                  <div className="bg-white border-l-4 border-amber-400 rounded-lg p-4">
                    <p className="text-amber-800 font-semibold mb-2" style={{ fontSize: '14px' }}>🙏 針對性的代禱</p>
                    <p className="text-amber-700 leading-relaxed italic" style={{ fontSize: '14px' }}>
                      {vul.prayer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* Spiritual Warfare Reality */}
      <Section title="屬靈爭戰的真實面貌" icon={Zap} accentColor="red">
        <p className="text-gray-700 leading-relaxed mb-4" style={{ fontSize: '16px' }}>
          瓦格納在書中引述了一個令許多基督徒感到陌生的現實：組織性的黑暗力量，確實有針對基督教領袖的系統性攻擊計畫。
        </p>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
          <p className="text-red-900 leading-relaxed" style={{ fontSize: '15px' }}>
            他收到一封來自前女巫的信，信中坦承：她所在的撒但崇拜群體有一個「禱告目標清單」，專門針對城市中最具影響力的基督教領袖，每天為他們的道德失敗、家庭破裂、教會衝突「禱告」。
          </p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4" style={{ fontSize: '16px' }}>
          這段分享的用意不是要製造恐懼，而是要讓我們清醒：如果黑暗的一方如此有組織、如此有目的地攻擊，光明的一方是否更應該有同樣的覺醒與組織性的守望？
        </p>
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
          <p className="text-indigo-800 font-semibold mb-2" style={{ fontSize: '15px' }}>以弗所書 6:12</p>
          <p className="text-indigo-700 leading-relaxed italic" style={{ fontSize: '15px' }}>
            「因為我們並不是與屬血氣的爭戰，乃是與那些執政的、掌權的、管轄這幽暗世界的，以及天空屬靈氣的惡魔爭戰。」
          </p>
        </div>
      </Section>

      {/* Practical Applications */}
      <Section title="實踐：你可以具體做的事" icon={CheckCircle} accentColor="indigo">
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-indigo-500">
            <h3 className="font-bold text-indigo-800 mb-2" style={{ fontSize: '15px' }}>個人層面的代禱</h3>
            <ol className="space-y-2 list-decimal list-inside text-gray-700" style={{ fontSize: '15px' }}>
              <li>每天用 5 分鐘，為牧師的三大軟弱區域禱告（品德、信仰、家庭）。</li>
              <li>每次在聚會前，閉眼默禱一分鐘，為即將站上台的牧師求神同在。</li>
              <li>主動告訴牧師：「我每天都在為你代禱」——這句話本身就是巨大的鼓勵。</li>
              <li>在你的代禱筆記中為牧師留出固定的位置，並記錄見證。</li>
            </ol>
          </div>

          <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
            <h3 className="font-bold text-purple-800 mb-2" style={{ fontSize: '15px' }}>小組層面的行動</h3>
            <ol className="space-y-2 list-decimal list-inside text-gray-700" style={{ fontSize: '15px' }}>
              <li>在小組聚會中，固定留出 5-10 分鐘，一起為牧師代禱。</li>
              <li>建立「牧師代禱接力」：每天輪流由一位組員為牧師守望，讓牧師每天都有人在代禱。</li>
              <li>收集組員的代禱見證，定期分享，建立代禱的信心與群體記憶。</li>
            </ol>
          </div>

          <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
            <h3 className="font-bold text-green-800 mb-2" style={{ fontSize: '15px' }}>教會層面的建議</h3>
            <ol className="space-y-2 list-decimal list-inside text-gray-700" style={{ fontSize: '15px' }}>
              <li>在同工會中正式提出「建立牧師代禱事工」的議案。</li>
              <li>公開徵召有代禱心志的信徒，組成「牧師代禱盾牌隊」。</li>
              <li>定期在主日崇拜中，邀請會眾一起為牧師禱告，建立全教會的代禱文化。</li>
            </ol>
          </div>
        </div>
      </Section>

      {/* Chapter Summary */}
      <section className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-xl shadow-md border-2 border-indigo-600 mb-6">
        <div className="flex items-center mb-4 text-indigo-900">
          <MessageCircle className="w-6 h-6 mr-2" />
          <h2 className="text-xl font-bold">本章總結</h2>
        </div>
        <div className="text-slate-800 space-y-3 leading-relaxed">
          <p>
            這一章用五個理由，讓我們看見一個常被忽略的真相：<strong className="text-indigo-900">牧師是最需要被守望的人，卻往往是最少被守望的人</strong>。
          </p>
          <p>
            不是因為會眾不關心牧師，而是我們從來沒有被提醒、被教導——為牧師代禱，是我們身為肢體的責任，不是可有可無的選項。
          </p>
          <p>
            南施·法芙的研究給了我們信心：代禱是真實有效的。擁有代禱同工的牧師，有 89% 表示服事明顯改善；60% 的教會同期出現增長。這些數字背後，是真實的人、真實的禱告、真實的神。
          </p>
          <p>
            <strong className="text-indigo-900">你今天的代禱，可以成為牧師明天站立的力量。你今天的守望，可以成為整個教會明年收割的根基。</strong>
          </p>
          <p>
            問題只有一個：你願意開始嗎？
          </p>
        </div>
      </section>

      {/* Theological Depth */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Book className="w-6 h-6 text-indigo-600" />
          神學深度探討
        </h2>
        <Section title="一、牧師在屬靈爭戰中的位置" icon={Shield} accentColor="indigo">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            聖經清楚揭示:在神的國度中,不同的職分承擔不同的責任與攻擊。牧師作為「群羊的監督」(彼得前書 5:2),站在屬靈爭戰的最前線。
          </p>
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-3">
            <p className="text-indigo-900 font-semibold mb-2" style={{ fontSize: '14px' }}>關鍵經文:</p>
            <p className="text-indigo-800 italic mb-2" style={{ fontSize: '14px' }}>
              以弗所書 6:12「因為我們並不是與屬血氣的爭戰,乃是與那些執政的、掌權的、管轄這幽暗世界的,以及天空屬靈氣的惡魔爭戰。」
            </p>
            <p className="text-indigo-800 italic" style={{ fontSize: '14px' }}>
              撒迦利亞書 13:7「擊打牧人,羊就分散。」
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
            撒但的策略從不改變:不是逐一攻擊羊群,而是集中火力擊倒牧人。因為牧人一旦倒下,整個羊群就會四散。這不是神學理論,而是屬靈戰場上的實際策略。
          </p>
        </Section>

        <Section title="二、代禱的神學基礎:祭司與中保職分" icon={Heart} accentColor="purple">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            為牧師代禱,不只是「幫個忙」,而是參與神國度的祭司職分。每一位信徒都是「君尊的祭司」(彼得前書 2:9),而祭司的核心職責之一就是「為人代求」。
          </p>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-3">
            <p className="text-purple-900 font-semibold mb-2" style={{ fontSize: '14px' }}>關鍵經文:</p>
            <p className="text-purple-800 italic mb-2" style={{ fontSize: '14px' }}>
              以賽亞書 62:6-7「耶路撒冷啊,我在你城上設立守望的,他們晝夜必不靜默。呼籲耶和華的,你們不要歇息,也不要使他歇息,直等他建立耶路撒冷,使耶路撒冷在地上成為可讚美的。」
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            守望者的職責是「晝夜必不靜默」——這是持續的、警醒的、不放棄的代禱。為牧師代禱的人,正是站在城牆上的守望者,在屬靈的層面保護神的家。
          </p>
          <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
            更深一層:當我們為牧師代禱時,我們是在效法基督的中保職分。希伯來書 7:25說,耶穌「長遠活著,替他們祈求」。代禱不是次要的服事,而是最像基督的服事之一。
          </p>
        </Section>

        <Section title="三、代禱與教會復興的關係" icon={Zap} accentColor="amber">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            歷史上每一次教會大復興,都可以追溯到一群忠心代禱者的守望。摩拉維亞教會的「百年禱告會」、韓國教會的清晨禱告傳統、中國家庭教會在逼迫中的代禱運動——這些都證明:禱告是復興的前奏,而為領袖代禱是禱告的核心。
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-3">
            <p className="text-amber-900 font-semibold mb-2" style={{ fontSize: '14px' }}>關鍵經文:</p>
            <p className="text-amber-800 italic" style={{ fontSize: '14px' }}>
              歷代志下 7:14「這稱為我名下的子民,若是自卑、禱告,尋求我的面,轉離他們的惡行,我必從天上垂聽,赦免他們的罪,醫治他們的地。」
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
            「醫治他們的地」不只是個人的醫治,而是群體的、國度的、土地的醫治。而這一切的起點是:「自卑、禱告、尋求神的面」。當牧師與代禱者一同跪下,神的能力就會臨到整個群體。
          </p>
        </Section>

        <Section title="四、為何代禱能改變屬靈局勢？" icon={Target} accentColor="green">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            有人會問:「神難道不知道牧師的需要嗎？為何還需要我們代禱？」答案是:神選擇透過人的禱告來成就祂的旨意。這不是因為神需要我們,而是神邀請我們參與祂的工作。
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-3">
            <p className="text-green-900 font-semibold mb-2" style={{ fontSize: '14px' }}>關鍵經文:</p>
            <p className="text-green-800 italic" style={{ fontSize: '14px' }}>
              以西結書 22:30「我在他們中間尋找一人重修牆垣,在我面前為這國站在破口防堵,使我不滅絕這國,卻找不著一個。」
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
            神在「尋找」站在破口的人。祂本可以自己堵住破口,但祂選擇等待人的回應。為牧師代禱的人,就是神所尋找的「站在破口」的勇士——他們站在牧師與攻擊之間,用禱告建立保護的牆垣。
          </p>
        </Section>
      </section>

      {/* Taiwan Context Applications */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Users className="w-6 h-6 text-indigo-600" />
          華人教會處境應用
        </h2>
        
        <Section title="情境一:「牧師很忙,不要打擾他」的文化" icon={Clock} accentColor="red">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            華人教會普遍有一種「體貼牧師」的文化:「牧師那麼忙,我不要麻煩他。」「我的問題很小,不值得佔用牧師的時間。」這種體貼出於好意,但也可能讓牧師變成「孤島」。
          </p>
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            更深的問題是:當會眾都覺得「不要打擾牧師」,也就沒有人主動關心牧師的需要。牧師在照顧所有人,卻沒有人照顧牧師。
          </p>
          <div className="bg-white border-l-4 border-red-400 rounded-lg p-4">
            <p className="text-red-800 font-semibold mb-2" style={{ fontSize: '14px' }}>實際應用:</p>
            <p className="text-red-700" style={{ fontSize: '14px' }}>
              改變觀念:為牧師代禱不是「打擾」,而是「托住」。你可以私下傳訊息給牧師:「牧師,我每天都在為你禱告。有什麼我可以特別為你守望的嗎？」這句話本身就是巨大的鼓勵。
            </p>
          </div>
        </Section>

        <Section title="情境二:牧師的道德失敗震撼華人教會" icon={AlertTriangle} accentColor="amber">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            近年來,華人教會經歷了幾起震撼的牧師道德失敗事件——外遇、財務不誠信、權力濫用。每次事件曝光,整個教會群體都受到重創,許多信徒的信心動搖。
          </p>
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            事後我們常聽到:「怎麼會這樣？」「他看起來那麼屬靈！」但很少人反思:在事情發生之前,有多少人真正為這位牧師的品格與界線守望代禱？
          </p>
          <div className="bg-white border-l-4 border-amber-400 rounded-lg p-4">
            <p className="text-amber-800 font-semibold mb-2" style={{ fontSize: '14px' }}>預防勝於治療:</p>
            <p className="text-amber-700" style={{ fontSize: '14px' }}>
              如果每間教會都有一群忠心的代禱者,每天為牧師的品格、婚姻、界線、誠信守望,許多悲劇是可以避免的。代禱不只是為了「成功」,更是為了「保守」。
            </p>
          </div>
        </Section>

        <Section title="情境三:台灣教會的「小而美」困境" icon={Users} accentColor="indigo">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            台灣有許多30-50人的小型教會,牧師常常是「一人樂隊」:講道、探訪、輔導、行政、維修、財務……全部一人包辦。他們疲於奔命,卻很難找到同工分擔。
          </p>
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            在這樣的處境中,牧師最大的需要不只是「人力」,而是「代禱的遮蓋」。當他們獨自面對各種挑戰時,知道有人在為他們守望,會成為極大的力量。
          </p>
          <div className="bg-white border-l-4 border-indigo-400 rounded-lg p-4">
            <p className="text-indigo-800 font-semibold mb-2" style={{ fontSize: '14px' }}>小教會的代禱策略:</p>
            <p className="text-indigo-700" style={{ fontSize: '14px' }}>
              即使只有30人的教會,也可以建立「牧師代禱輪值表」:每週由2-3位會友專責為牧師代禱,讓牧師每天都有人守望。小教會的優勢是:每個人都認識牧師,代禱可以更具體、更貼近需要。
            </p>
          </div>
        </Section>

        <Section title="情境四:跨文化宣教士的隱形掙扎" icon={Eye} accentColor="purple">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            台灣差派出去的宣教士,在異國他鄉面對文化衝擊、語言障礙、孤獨感、屬靈爭戰。但因為距離遙遠,母會常常「眼不見為淨」,逐漸淡忘了他們的需要。
          </p>
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            更糟的是:宣教士為了維持「堅強」的形象,不敢在代禱信中說出真實的掙扎。他們報喜不報憂,結果越來越孤單。
          </p>
          <div className="bg-white border-l-4 border-purple-400 rounded-lg p-4">
            <p className="text-purple-800 font-semibold mb-2" style={{ fontSize: '14px' }}>跨越距離的代禱:</p>
            <p className="text-purple-700" style={{ fontSize: '14px' }}>
              建立「宣教士代禱小組」,每週為特定宣教士守望。用視訊通話、即時訊息保持聯繫,讓他們知道:即使身在遠方,仍有人每天為他們站在破口。
            </p>
          </div>
        </Section>

        <Section title="情境五:後疫情時代的牧者倦怠" icon={Zap} accentColor="green">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            COVID-19 疫情讓許多牧師身心俱疲:實體聚會停擺、線上事工摸索、會眾流失、奉獻減少、探訪受限……加上社會撕裂(疫苗議題、政治立場),牧師常常夾在中間兩面不是人。
          </p>
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            許多牧師坦承:疫情後他們的心理健康亮紅燈,考慮離開牧職的念頭比以往更強烈。
          </p>
          <div className="bg-white border-l-4 border-green-400 rounded-lg p-4">
            <p className="text-green-800 font-semibold mb-2" style={{ fontSize: '14px' }}>為心理健康代禱:</p>
            <p className="text-green-700" style={{ fontSize: '14px' }}>
              為牧師的身心靈健康守望:「主啊,保守他的心不被焦慮吞噬;讓他在疲憊時找到真正的安息;賜他智慧面對複雜的局勢;讓他不孤單。」具體的代禱,會帶來真實的托住。
            </p>
          </div>
        </Section>
      </section>

      {/* Four-Week Challenge */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Target className="w-6 h-6 text-indigo-600" />
          四週代禱操練挑戰
        </h2>
        
        {[
          {
            week: 1,
            title: '認識你的牧師',
            mission: '這一週,主動了解你的牧師:他的家庭狀況、服事壓力、代禱需要。可以私下傳訊息、寫信,或找機會與他短暫交談。目標不是「訪問」,而是「關心」。',
            prayer: '每天為牧師的一個具體需要禱告(例如週一為他的講道預備、週二為他的家庭、週三為他的身體健康……)',
            journal: '記錄:你對牧師有哪些新的認識？你為他禱告時有什麼感動？',
          },
          {
            week: 2,
            title: '為五大脆弱區代禱',
            mission: '複習本章提到的五個理由(道德責任、撒但攻擊、誘惑試探、影響力、眾人注視)。這週每天輪流為其中一個領域深度代禱。',
            prayer: '用本章提供的經文為牧師禱告,把經文轉化為代求:「主啊,讓他在道德上站立得穩……保護他不受撒但攻擊……」',
            journal: '哪一個脆弱區讓你最有負擔？為什麼？你在禱告中有什麼看見？',
          },
          {
            week: 3,
            title: '邀請同伴一起代禱',
            mission: '找1-2位同樣關心牧師的弟兄姊妹,組成「牧師代禱小組」。約定每週一次(實體或線上)一起為牧師守望15-30分鐘。',
            prayer: '在群體中禱告,體會「兩三個人奉我的名聚會」的能力。輪流開口,彼此補充。',
            journal: '群體代禱與個人代禱有什麼不同？你在群體中領受到什麼？',
          },
          {
            week: 4,
            title: '成為持續的守望者',
            mission: '建立「每日為牧師代禱」的習慣。可以設定手機提醒,在固定時段(如每天早上通勤時、睡前)為牧師禱告5分鐘。',
            prayer: '嘗試「守望式禱告」:不只求神賜福,更求神保守、遮蓋、加力量給牧師。像站崗的士兵一樣,警醒守望。',
            journal: '四週挑戰結束後,你會繼續為牧師代禱嗎？你的代禱生活有什麼改變？',
          },
        ].map((item, i) => (
          <div key={i} className="bg-indigo-50 border-l-4 border-indigo-500 rounded-xl p-5 mb-4 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-indigo-600 text-white text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center">{item.week}</span>
              <h3 className="font-bold text-indigo-900" style={{ fontSize: '17px' }}>第{item.week}週:{item.title}</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4">
                <p className="text-indigo-800 font-semibold mb-2" style={{ fontSize: '14px' }}>🎯 本週任務</p>
                <p className="text-gray-700" style={{ fontSize: '14px' }}>{item.mission}</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-purple-800 font-semibold mb-2" style={{ fontSize: '14px' }}>🙏 禱告焦點</p>
                <p className="text-gray-700" style={{ fontSize: '14px' }}>{item.prayer}</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-green-800 font-semibold mb-2" style={{ fontSize: '14px' }}>📝 靈修日誌提示</p>
                <p className="text-gray-700 italic" style={{ fontSize: '14px' }}>{item.journal}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Group Discussion */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Users className="w-6 h-6 text-indigo-600" />
          小組討論問題
        </h2>
        
        <div className="space-y-4">
          <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-5">
            <h3 className="font-bold text-purple-900 mb-3" style={{ fontSize: '16px' }}>🔍 自我省察類</h3>
            <ol className="space-y-2 list-decimal list-inside text-gray-700" style={{ fontSize: '15px' }}>
              <li>在讀這一章之前,你多久為牧師禱告一次？你通常為他禱告什麼內容？</li>
              <li>五個理由中,哪一個最讓你驚訝或震撼？為什麼？</li>
              <li>你是否曾經認為「牧師比一般信徒更屬靈,不太需要代禱」？這一章如何改變你的看法？</li>
            </ol>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5">
            <h3 className="font-bold text-blue-900 mb-3" style={{ fontSize: '16px' }}>💭 深度思考類</h3>
            <ol className="space-y-2 list-decimal list-inside text-gray-700" style={{ fontSize: '15px' }}>
              <li>為什麼撒但要特別攻擊牧師？如果你是撒但,你會怎麼破壞一間教會？(這個問題的目的是讓我們更清楚屬靈爭戰的策略)</li>
              <li>南施·法芙的研究顯示:有代禱者的牧師,89%服事改善。你相信代禱真的有這麼大的影響力嗎？為什麼？</li>
              <li>本章提到牧師生活在「金魚缸」中,被眾人注視。你認為這對牧師的心理健康有什麼影響？</li>
            </ol>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-5">
            <h3 className="font-bold text-green-900 mb-3" style={{ fontSize: '16px' }}>🎯 行動應用類</h3>
            <ol className="space-y-2 list-decimal list-inside text-gray-700" style={{ fontSize: '15px' }}>
              <li>你願意成為牧師的個人代禱者嗎？如果願意,你打算如何開始？(可以分享具體的時間、方式)</li>
              <li>我們小組可以如何一起為牧師守望？(討論可行的方案:代禱輪值、每週群體代禱、建立代禱群組……)</li>
              <li>除了禱告,你還可以用什麼實際行動來支持牧師？(鼓勵的話、分擔事工、保護他的時間……)</li>
            </ol>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-5">
            <h3 className="font-bold text-amber-900 mb-3" style={{ fontSize: '16px' }}>🏠 教會層面類</h3>
            <ol className="space-y-2 list-decimal list-inside text-gray-700" style={{ fontSize: '15px' }}>
              <li>我們教會目前有為牧師代禱的事工嗎？如果有,運作得如何？如果沒有,我們可以如何發起？</li>
              <li>當牧師遇到道德失敗或信仰危機時,教會通常如何反應？我們可以如何「預防勝於治療」？</li>
              <li>我們教會對牧師的期待是否合理？我們是否給了牧師足夠的支持與保護？</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Deep Reflection */}
      <section className="mb-6">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 shadow-xl">
          <h2 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-indigo-400" />
            深度反思與行動指南
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Reflection */}
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
              <h3 className="font-bold text-purple-300 mb-4 flex items-center" style={{ fontSize: '18px' }}>
                <Search className="w-5 h-5 mr-2 text-purple-400" /> 深度反思
              </h3>
              <ul className="space-y-4 text-slate-300">
                {[
                  '如果你的牧師明天道德失敗,你會有多驚訝？你會責怪他「不屬靈」,還是反省「我是否有為他守望」？',
                  '想像你是牧師:每天被期待「完美」、「剛強」、「有答案」,卻沒有人問你「你還好嗎」。這會是什麼感覺？',
                  '為牧師代禱,是「錦上添花」還是「雪中送炭」？你的答案反映了你對代禱重要性的認知。',
                  '如果撒但教徒每天為破壞牧師而禱告,而基督徒卻幾乎不為保護牧師而禱告,這場屬靈爭戰的天平會往哪邊傾斜？',
                  '你希望別人如何為你禱告？你的牧師可能也有同樣的期待——被真實地關心、被具體地守望、被持續地托住。',
                ].map((q, i) => (
                  <li key={i} className="flex items-start" style={{ fontSize: '15px' }}>
                    <span className="text-purple-400 mr-2 font-bold">{i+1}.</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action */}
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
              <h3 className="font-bold text-green-300 mb-4 flex items-center" style={{ fontSize: '18px' }}>
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" /> 具體行動方案
              </h3>
              <ul className="space-y-4 text-slate-300">
                {[
                  '今天就傳訊息給牧師:「牧師,我想成為您的代禱者。請告訴我可以如何為您守望。」',
                  '建立「牧師代禱筆記」:記錄他的代禱需要、禱告日期、蒙應允的見證。這會成為你信心的記錄。',
                  '邀請2-3位小組成員,每週固定時間(如週三晚上)一起為牧師禱告15分鐘。',
                  '在你的每日靈修時間中,固定留5分鐘為牧師禱告。設定手機提醒,讓代禱成為習慣。',
                  '當牧師講道、帶領聚會時,坐在會眾席中默默為他禱告:「主啊,此刻賜他恩膏,讓他的話語帶著能力。」',
                  '每個月至少一次,主動告訴牧師:「我在為您禱告。」這句話本身就是巨大的鼓勵。',
                  '關心牧師的家人:為師母、牧師的孩子代禱。他們也在承受「牧者家庭」的壓力。',
                ].map((a, i) => (
                  <li key={i} className="flex items-start" style={{ fontSize: '15px' }}>
                    <span className="text-green-400 mr-2 font-bold">{i+1}.</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-indigo-900/30 border border-indigo-500/30 rounded-xl p-5">
            <p className="text-indigo-200 leading-relaxed italic text-center" style={{ fontSize: '16px' }}>
              「你今天的代禱,可能成為牧師明天站立的力量。<br />
              你今天的守望,可能成為整個教會明年收割的根基。<br />
              問題只有一個:你願意開始嗎？」
            </p>
          </div>
        </div>
      </section>

      {/* Original Book Questions */}
      <section className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-indigo-600 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <MessageCircle className="w-6 h-6 text-indigo-600" />
          問題迴響（原書）
        </h2>
        <ol className="space-y-3 text-slate-700 list-decimal list-inside" style={{ fontSize: '15px' }}>
          <li>本章說到牧師是「最易受攻擊的」。為何你認為這是真的？試舉例說明。</li>
          <li>何以牧師比一般的基督徒要負更多道德行為上的責任？</li>
          <li>試區別本章所提到屬靈爭戰的三種層次，就你個人所知或經驗舉例說明。</li>
          <li>討論邪靈在引誘牧師陷入淫亂試探的可能。這是否能免除牧師自己的道德責任？</li>
          <li>若代禱可以改善牧師的服事，你建議要如何做才能釋放出更多使你牧師得益處的禱告？</li>
        </ol>
      </section>

      {/* Navigation */}
      <div className="mt-4 text-center text-sm text-gray-400">
        <p>— 第三章完 —</p>
      </div>
    </div>
  );
}
