import { useState } from 'react';
import {
  ChevronDown, ChevronRight, Heart, Shield, Users, Target,
  Book, BookOpen, Star, Crown, Lightbulb, CheckCircle,
  AlertTriangle, Zap, Clock, MessageCircle, Search, Eye,
  TrendingUp, Gift
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
  
  const colors = {
    purple: { border: 'border-purple-400', bg: 'bg-purple-50', icon: 'text-purple-600', title: 'text-purple-900' },
    red: { border: 'border-red-400', bg: 'bg-red-50', icon: 'text-red-600', title: 'text-red-900' },
    amber: { border: 'border-amber-400', bg: 'bg-amber-50', icon: 'text-amber-600', title: 'text-amber-900' },
    green: { border: 'border-green-400', bg: 'bg-green-50', icon: 'text-green-600', title: 'text-green-900' },
    indigo: { border: 'border-indigo-400', bg: 'bg-indigo-50', icon: 'text-indigo-600', title: 'text-indigo-900' },
    blue: { border: 'border-blue-400', bg: 'bg-blue-50', icon: 'text-blue-600', title: 'text-blue-900' },
  };
  
  const c = colors[accentColor as keyof typeof colors] || colors.indigo;

  return (
    <div className={`rounded-xl border-l-4 ${c.border} ${c.bg} mb-4 shadow-sm overflow-hidden`}>
      <button
        className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-3">
          <Icon className={`w-5 h-5 ${c.icon} flex-shrink-0`} />
          <span className={`font-bold ${c.title}`} style={{ fontSize: '17px' }}>{title}</span>
        </div>
        {open ? <ChevronDown className={`w-5 h-5 ${c.icon}`} /> : <ChevronRight className={`w-5 h-5 ${c.icon}`} />}
      </button>
      {open && <div className="px-5 pb-5">{children}</div>}
    </div>
  );
};

export default function Book10Ch5() {
  const [openBarrier, setOpenBarrier] = useState<number | null>(null);
  const [openPrinciple, setOpenPrinciple] = useState<number | null>(null);

  const barriers = [
    {
      icon: Crown,
      title: '驕傲：「我不需要別人為我禱告」',
      color: 'red',
      problem: `許多牧師內心深處有一種「屬靈的驕傲」：我是牧養別人的人，我應該為別人禱告，而不是需要別人為我禱告。承認自己需要代禱，感覺像是承認自己「不夠格」當牧師。

這種心態常常被包裝成「謙卑」：「我只是平凡的器皿，不值得這樣的服事。」但本質上，這是一種驕傲——覺得自己應該靠自己的力量服事神，不需要肢體的扶持。`,
      consequence: '驕傲讓牧師孤立自己，拒絕神透過肢體給予的恩典。這樣的牧師可能外表剛強，內心卻逐漸枯竭。',
      breakthrough: '真正的謙卑是承認：我需要幫助。接受代禱不是軟弱，而是承認我們都是肢體，需要彼此扶持。',
      verse: '箴言 16:18「驕傲在敗壞以先；狂心在跌倒之前。」',
    },
    {
      icon: Eye,
      title: '恐懼：「如果他們知道真實的我……」',
      color: 'purple',
      problem: `許多牧師害怕讓代禱者知道自己真實的掙扎。如果我告訴他們我在與罪掙扎、我的婚姻有問題、我懷疑自己的呼召……他們會怎麼看我？他們會失去對我的信任嗎？

這種恐懼導致牧師即使接受代禱，也只分享「安全」的代禱事項：「請為主日講道禱告」「請為教會增長禱告」——但從不分享自己靈魂深處的掙扎。`,
      consequence: '表面的代禱只能帶來表面的幫助。當牧師隱藏真實需要，代禱者就無法為他真正的軟弱守望，屬靈的破口仍然敞開。',
      breakthrough: '找到可以完全信任的1-2位代禱者，與他們建立「靈魂之友」的關係。不需要對所有人敞開，但至少要有幾個人知道你真實的掙扎。',
      verse: '雅各書 5:16「所以你們要彼此認罪，互相代求，使你們可以得醫治。義人祈禱所發的力量是大有功效的。」',
    },
    {
      icon: AlertTriangle,
      title: '控制慾：「我只想要特定方式的代禱」',
      color: 'amber',
      problem: `有些牧師願意接受代禱，但有很多「條件」：只能在特定時間、只能用特定方式、只能禱告我指定的內容。這背後的心態是：我要「掌控」代禱的過程。

他們擔心：如果代禱者自由禱告，會不會為錯誤的事情禱告？會不會不符合我的神學？會不會太情緒化？所以寧願嚴格控制代禱的範圍。`,
      consequence: '過度控制會限制聖靈的工作。代禱的能力，往往在於聖靈引導代禱者為牧師「真正需要但自己沒意識到」的事守望。',
      breakthrough: '信任代禱者，也信任聖靈。給代禱者自由，讓他們按聖靈的感動禱告，而不只是照你的清單念。',
      verse: '羅馬書 8:26「況且，我們的軟弱有聖靈幫助；我們本不曉得當怎樣禱告，只是聖靈親自用說不出來的嘆息替我們祈求。」',
    },
    {
      icon: Clock,
      title: '忙碌：「我沒時間建立代禱關係」',
      color: 'red',
      problem: `建立代禱關係需要時間：與代禱者見面、分享需要、保持聯繫。許多牧師覺得「我已經夠忙了，哪有時間再經營這些關係？」

所以他們寧願獨自扛著所有重擔，也不願意「花時間」建立代禱網絡。`,
      consequence: '忙碌的牧師最需要代禱的遮蓋，但也最容易因為忙碌而拒絕代禱。這是撒但最喜歡的循環：讓你忙到沒時間被守望，然後在你最疲憊時攻擊你。',
      breakthrough: '重新定義「重要」與「緊急」。建立代禱關係看起來「不緊急」，但它是「最重要」的屬靈投資。每個月花一小時與代禱者見面，可以保護你接下來一個月的服事。',
      verse: '馬可福音 1:35「次日早晨，天未亮的時候，耶穌起來，到曠野地方去，在那裡禱告。」',
    },
  ];

  const principles = [
    {
      icon: Gift,
      title: '原則一：代禱是神給你的禮物，不是你賺來的',
      content: `許多牧師覺得：「我要先做得夠好，才配得代禱者的守望。」這是錯誤的心態。代禱不是「獎賞」，而是「恩典」。

神透過代禱者守望你，不是因為你很厲害，而是因為祂愛你。接受代禱，就是接受神的恩典。`,
      practice: '改變心態：不要問「我配得嗎？」而要問「神要透過這個恩典成就什麼？」',
      verse: '以弗所書 2:8「你們得救是本乎恩，也因著信；這並不是出於自己，乃是神所賜的。」',
    },
    {
      icon: Users,
      title: '原則二：選擇對的人，而非更多的人',
      content: `不是每個願意代禱的人都適合成為你的個人代禱者。你需要的是：靈命成熟、可以信任、懂得保密、不會論斷的人。

3-5位真正合適的代禱者，勝過30位泛泛之交的代禱名單。`,
      practice: '列出你教會中3-5位你信任的成熟信徒，個別邀請他們成為你的代禱者。說明你的需要，也說明這個角色的責任（守密、忠心、不論斷）。',
      verse: '箴言 18:24「濫交朋友的，自取敗壞；但有一朋友比弟兄更親密。」',
    },
    {
      icon: Heart,
      title: '原則三：真實勝過完美',
      content: `與代禱者分享時，不要美化自己的處境。他們不需要聽你「做得多好」，而需要知道你「真正的掙扎」。

代禱者不是你的粉絲，而是你的守望者。他們需要知道破口在哪裡，才能為那個破口站崗。`,
      practice: '下次與代禱者分享時，用這個句式開始：「這週我最大的掙扎是……」而非「這週我做了什麼……」',
      verse: '詩篇 51:6「你所喜愛的是內裡誠實；你在我隱密處，必使我得智慧。」',
    },
    {
      icon: Shield,
      title: '原則四：定期溝通，不要等到危機才聯繫',
      content: `有些牧師只在「真的撐不下去」時才想到代禱者。但那時往往已經太遲——破口已經很大，攻擊已經進來。

有效的代禱是「預防性的守望」，而非「事後的急救」。`,
      practice: '建立固定的溝通節奏：每週或每兩週，以電子郵件、訊息或見面的方式，主動分享你的代禱需要。不要等代禱者來問你。',
      verse: '箴言 27:12「通達人見禍藏躲；愚蒙人前往受害。」',
    },
    {
      icon: CheckCircle,
      title: '原則五：分享見證，建立代禱者的信心',
      content: `當代禱蒙應允時，要記得告訴代禱者！許多牧師只會在需要時聯繫代禱者，卻從不分享神如何回應禱告。

分享見證不只是感謝，更是建立代禱者的信心：「我的禱告真的有用！」這會激勵他們更熱心地守望。`,
      practice: '每個月至少分享一次「代禱蒙應允」的見證給你的代禱者。可以很簡單：「上次你為我的講道禱告，那天有三個人決志，感謝你的守望！」',
      verse: '詩篇 103:2「我的心哪，你要稱頌耶和華！不可忘記他的一切恩惠！」',
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Chapter Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-700 text-white rounded-2xl p-6 mb-8 shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <Heart className="w-7 h-7 text-green-200" />
          <span className="text-green-200 font-medium" style={{ fontSize: '14px' }}>第五章</span>
        </div>
        <h1 className="font-bold text-white mb-3" style={{ fontSize: '24px' }}>
          接受個人性的代禱
        </h1>
        <p className="text-green-200 leading-relaxed" style={{ fontSize: '15px' }}>
          為牧師代禱是重要的，但更重要的是：牧師願意接受代禱。
          這一章探討為何許多牧師抗拒接受代禱，以及如何突破這些障礙。
        </p>
      </div>

      {/* Core Verse */}
      <section className="bg-green-50 border-l-4 border-green-500 rounded-xl p-5 mb-6 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="w-5 h-5 text-green-600" />
          <span className="font-bold text-green-800" style={{ fontSize: '16px' }}>核心經文</span>
        </div>
        <blockquote className="text-green-900 leading-relaxed italic" style={{ fontSize: '16px' }}>
          「摩西何時舉手，以色列人就得勝，何時垂手，亞瑪力人就得勝。但摩西的手發沉，他們就搬石頭來，放在他以下，他就坐在上面。亞倫與戶珥扶著他的手……他的手就穩住，直到日落的時候。」
        </blockquote>
        <p className="text-green-600 mt-2 font-medium" style={{ fontSize: '14px' }}>出埃及記 17:11-12</p>
      </section>

      {/* Opening Story */}
      <Section title="開場故事：「我不需要代禱」的代價" icon={Star} defaultOpen accentColor="purple">
        <p className="text-gray-700 leading-relaxed mb-4" style={{ fontSize: '16px' }}>
          馬克牧師（化名）是個「自給自足」的牧者。他每天清晨五點起床禱告、靈修生活穩定、講台有能力、教會健康增長。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4" style={{ fontSize: '16px' }}>
          當有長執主動提出要為他代禱時，馬克禮貌地婉拒：「謝謝你的好意，但我不想佔用你的時間。我自己的禱告生活還可以，你去為那些更需要的人禱告吧。」
        </p>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
          <p className="text-purple-900 leading-relaxed italic" style={{ fontSize: '16px' }}>
            「我當時真的覺得自己不需要。我每天禱告、讀經，靈命狀態很好。接受別人代禱，感覺像是……示弱。好像在說『我自己搞不定』。」
          </p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4" style={{ fontSize: '16px' }}>
          兩年後，馬克的生命出現裂痕。一個長期的服事衝突、加上家庭的張力、再加上身體的疲憊——這些單獨來看都不致命，但累積起來，壓垮了他。
        </p>
        <p className="text-gray-700 leading-relaxed mb-4" style={{ fontSize: '16px' }}>
          他開始懷疑呼召、失去服事的熱情、甚至動了離開牧職的念頭。當他終於向那位長執坦承自己的掙扎時，長執嘆了一口氣：「如果你兩年前就讓我們為你守望，也許這些破口不會這麼大。」
        </p>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-green-800 font-semibold mb-1" style={{ fontSize: '15px' }}>後來的轉變：</p>
          <p className="text-green-700 leading-relaxed" style={{ fontSize: '15px' }}>
            馬克終於接受了3位長執成為他的代禱者。半年後，他說：「我以前以為接受代禱是軟弱，現在才明白，拒絕代禱才是驕傲。神要我學的功課是：我真的需要肢體。」
          </p>
        </div>
      </Section>

      {/* Four Barriers */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-red-600" />
          四大障礙：為何牧師抗拒接受代禱？
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4" style={{ fontSize: '15px' }}>
          了解這些障礙，才能突破它們。這四個障礙，幾乎每位牧師都會遇到。
        </p>
        {barriers.map((barrier, idx) => {
          const Icon = barrier.icon;
          const isOpen = openBarrier === idx;
          const c = barrier.color === 'red' ? { border: 'border-red-400', bg: 'bg-red-50', icon: 'text-red-600', title: 'text-red-900' } :
                    barrier.color === 'purple' ? { border: 'border-purple-400', bg: 'bg-purple-50', icon: 'text-purple-600', title: 'text-purple-900' } :
                    { border: 'border-amber-400', bg: 'bg-amber-50', icon: 'text-amber-600', title: 'text-amber-900' };

          return (
            <div key={idx} className={`rounded-xl border-l-4 ${c.border} ${c.bg} mb-3 shadow-sm overflow-hidden`}>
              <button
                className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                onClick={() => setOpenBarrier(isOpen ? null : idx)}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${c.icon} flex-shrink-0`} />
                  <span className={`font-bold ${c.title}`} style={{ fontSize: '16px' }}>{barrier.title}</span>
                </div>
                {isOpen ? <ChevronDown className={`w-5 h-5 ${c.icon}`} /> : <ChevronRight className={`w-5 h-5 ${c.icon}`} />}
              </button>
              {isOpen && (
                <div className="px-5 pb-5 space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2" style={{ fontSize: '15px' }}>問題所在:</h4>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line" style={{ fontSize: '15px' }}>
                      {barrier.problem}
                    </p>
                  </div>
                  <div className="bg-white border-l-4 border-red-400 rounded-lg p-3">
                    <h4 className="font-bold text-red-800 mb-2" style={{ fontSize: '14px' }}>後果:</h4>
                    <p className="text-red-700 leading-relaxed" style={{ fontSize: '14px' }}>
                      {barrier.consequence}
                    </p>
                  </div>
                  <div className="bg-white border-l-4 border-green-400 rounded-lg p-3">
                    <h4 className="font-bold text-green-800 mb-2" style={{ fontSize: '14px' }}>突破之道:</h4>
                    <p className="text-green-700 leading-relaxed" style={{ fontSize: '14px' }}>
                      {barrier.breakthrough}
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-gray-100">
                    <p className="text-gray-600 italic" style={{ fontSize: '14px' }}>{barrier.verse}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* Five Principles */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-green-600" />
          五個原則：如何有效接受代禱
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4" style={{ fontSize: '15px' }}>
          接受代禱不只是「同意」,而是要學習「如何接受」。這五個原則幫助你建立健康的代禱關係。
        </p>
        {principles.map((principle, idx) => {
          const Icon = principle.icon;
          const isOpen = openPrinciple === idx;

          return (
            <div key={idx} className="rounded-xl border-l-4 border-green-400 bg-green-50 mb-3 shadow-sm overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                onClick={() => setOpenPrinciple(isOpen ? null : idx)}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="font-bold text-green-900" style={{ fontSize: '16px' }}>{principle.title}</span>
                </div>
                {isOpen ? <ChevronDown className="w-5 h-5 text-green-600" /> : <ChevronRight className="w-5 h-5 text-green-600" />}
              </button>
              {isOpen && (
                <div className="px-5 pb-5 space-y-4">
                  <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
                    {principle.content}
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-green-800 mb-2" style={{ fontSize: '14px' }}>💡 實際操練:</h4>
                    <p className="text-gray-700" style={{ fontSize: '14px' }}>{principle.practice}</p>
                  </div>
                  <div className="bg-white border-l-4 border-green-400 rounded-lg p-3">
                    <p className="text-gray-600 italic" style={{ fontSize: '14px' }}>{principle.verse}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* Chapter Summary */}
      <section className="bg-gradient-to-r from-green-100 to-teal-100 p-6 rounded-xl shadow-md border-2 border-green-600 mb-6">
        <div className="flex items-center mb-4 text-green-900">
          <MessageCircle className="w-6 h-6 mr-2" />
          <h2 className="text-xl font-bold">本章總結</h2>
        </div>
        <div className="text-slate-800 space-y-3 leading-relaxed">
          <p>
            接受代禱,對許多牧師來說是一個很大的挑戰。驕傲、恐懼、控制慾、忙碌——這四大障礙讓牧師抗拒接受神透過肢體給予的恩典。
          </p>
          <p>
            但<strong className="text-green-900">拒絕代禱,本質上是拒絕承認：我需要幫助。</strong>這不是謙卑,而是驕傲的偽裝。
          </p>
          <p>
            五個原則提供了實際的突破之道：把代禱視為神的禮物、選擇對的人、真實勝過完美、定期溝通、分享見證。
          </p>
          <p>
            摩西的手會疲乏,但亞倫與戶珥扶住他的手。<strong className="text-green-900">每位牧師都需要這樣的「扶手者」。</strong>
          </p>
          <p>
            問題是：你願意放下驕傲,承認你需要代禱嗎？你願意讓代禱者看見真實的你嗎？
          </p>
        </div>
      </section>

      {/* Theological Depth */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Book className="w-6 h-6 text-green-600" />
          神學深度探討
        </h2>
        
        <Section title="一、肢體的相互依存：哥林多前書的身體神學" icon={Users} accentColor="green">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            哥林多前書12章保羅用「身體」來比喻教會：「眼不能對手說：我用不著你；頭也不能對腳說：我用不著你。」(林前12:21)
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-3">
            <p className="text-green-900 font-semibold mb-2" style={{ fontSize: '14px' }}>神學洞察：</p>
            <p className="text-green-800" style={{ fontSize: '14px' }}>
              牧師拒絕接受代禱，就像「頭對腳說：我用不著你」。這不只是個人的選擇，而是否定了身體的相互依存性。神設計教會成為「身體」，就是要每個肢體都承認：我需要你。
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
            接受代禱，是實踐身體神學的具體行動。當牧師謙卑地接受肢體的守望，整個身體就更加健康、更有力量。
          </p>
        </Section>

        <Section title="二、摩西的手：領袖也需要扶持" icon={Shield} accentColor="blue">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            出埃及記17章記載以色列與亞瑪力人爭戰。摩西在山上舉手禱告，以色列人就得勝；但「摩西的手發沉」——即使是神重用的領袖，手也會疲乏。
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-3">
            <p className="text-blue-900 font-semibold mb-2" style={{ fontSize: '14px' }}>關鍵真理：</p>
            <p className="text-blue-800" style={{ fontSize: '14px' }}>
              亞倫與戶珥沒有責備摩西「你怎麼這麼軟弱」，而是「扶著他的手」。代禱者的角色不是論斷牧師的軟弱，而是在他疲乏時扶持他。
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
            每位牧師都有「手發沉」的時刻。接受代禱，就是允許亞倫與戶珥來扶持你的手，讓禱告能持續到「日落的時候」——直到爭戰得勝。
          </p>
        </Section>

        <Section title="三、保羅的代禱請求：使徒也需要守望" icon={Heart} accentColor="purple">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            使徒保羅在書信中多次請求信徒為他代禱：
          </p>
          <ul className="space-y-2 mb-3">
            <li className="bg-white rounded-lg p-3 border border-purple-100">
              <span className="font-bold text-purple-800">羅馬書15:30：</span>
              <span className="text-gray-700" style={{ fontSize: '14px' }}> 「弟兄們，我藉著我們主耶穌基督，又藉著聖靈的愛，勸你們與我一同竭力，為我祈求神。」</span>
            </li>
            <li className="bg-white rounded-lg p-3 border border-purple-100">
              <span className="font-bold text-purple-800">以弗所書6:19：</span>
              <span className="text-gray-700" style={{ fontSize: '14px' }}> 「也為我祈求，使我得著口才，能以放膽開口講明福音的奧祕。」</span>
            </li>
            <li className="bg-white rounded-lg p-3 border border-purple-100">
              <span className="font-bold text-purple-800">帖撒羅尼迦後書3:1：</span>
              <span className="text-gray-700" style={{ fontSize: '14px' }}> 「弟兄們，我還有話說：請你們為我們禱告。」</span>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
            保羅是使徒中的使徒，但他從不覺得「我不需要代禱」。相反，他主動、具體、謙卑地請求代禱。這給所有牧者立下榜樣：接受代禱不是軟弱，而是屬靈的智慧。
          </p>
        </Section>

        <Section title="四、謙卑的真諦：不是否定自己，而是承認需要" icon={Crown} accentColor="amber">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            許多牧師把「我不配接受代禱」包裝成謙卑，但真正的謙卑不是否定自己的價值，而是承認自己的需要。
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-3">
            <p className="text-amber-900 font-semibold mb-2" style={{ fontSize: '14px' }}>區分：</p>
            <p className="text-amber-800 mb-2" style={{ fontSize: '14px' }}>
              <strong>假謙卑：</strong>「我不配，我不值得，我不需要。」（本質是驕傲——覺得自己可以靠自己）
            </p>
            <p className="text-amber-800" style={{ fontSize: '14px' }}>
              <strong>真謙卑：</strong>「我需要，我軟弱，請幫助我。」（承認自己的有限，願意接受恩典）
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
            耶穌在客西馬尼園對門徒說：「你們心靈固然願意，肉體卻軟弱了。」(太26:41) 祂沒有責備門徒軟弱，而是承認「肉體的軟弱」是真實的。接受代禱，就是承認這個真實。
          </p>
        </Section>
      </section>

      {/* Taiwan Context */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Target className="w-6 h-6 text-green-600" />
          華人教會處境應用
        </h2>

        <Section title="情境一：「面子文化」與承認軟弱的張力" icon={Eye} accentColor="red">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            華人文化重視「面子」，承認需要幫助常被視為「丟臉」。對牧師來說，這個壓力更大——如果我承認自己需要代禱，會不會讓會眾失望？會不會被認為「不夠屬靈」？
          </p>
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            所以許多華人牧師寧願獨自扛著重擔，也不願意讓人知道自己「撐不住了」。
          </p>
          <div className="bg-white border-l-4 border-red-400 rounded-lg p-4">
            <p className="text-red-800 font-semibold mb-2" style={{ fontSize: '14px' }}>突破之道：</p>
            <p className="text-red-700" style={{ fontSize: '14px' }}>
              重新定義「面子」：真正的榮耀不是「從不失敗」，而是「跌倒後能站起來」。承認需要代禱不是丟臉，而是給會眾看見：連牧師都需要肢體的扶持，何況我們？
            </p>
          </div>
        </Section>

        <Section title="情境二：「師徒制」文化下的權威形象" icon={Crown} accentColor="amber">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            華人教會受儒家文化影響，常有「師徒制」的觀念：牧師是「師」，會眾是「徒」。師父應該是全知全能的，怎麼可以向徒弟承認自己需要幫助？
          </p>
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            這種文化讓牧師覺得：如果我接受代禱，我的權威會不會被削弱？會眾還會尊重我嗎？
          </p>
          <div className="bg-white border-l-4 border-amber-400 rounded-lg p-4">
            <p className="text-amber-800 font-semibold mb-2" style={{ fontSize: '14px' }}>新的眼光：</p>
            <p className="text-amber-700" style={{ fontSize: '14px' }}>
              聖經中的權威不是「完美」，而是「真實」。保羅承認自己的軟弱、耶穌在客西馬尼園哭泣——真實的軟弱不會削弱權威，反而讓人更能認同、更能跟隨。
            </p>
          </div>
        </Section>

        <Section title="情境三：台灣小教會的「牧師孤島」現象" icon={Users} accentColor="indigo">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            台灣許多小型教會（30-50人）的牧師是「孤島」：沒有同工、沒有長執團隊、沒有可以信任的屬靈同伴。他們想接受代禱，但不知道可以找誰。
          </p>
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            更困難的是：小教會的牧師常常要「照顧每個人」，如果他向會眾承認自己需要代禱，會不會變成「增加會眾的負擔」？
          </p>
          <div className="bg-white border-l-4 border-indigo-400 rounded-lg p-4">
            <p className="text-indigo-800 font-semibold mb-2" style={{ fontSize: '14px' }}>實際建議：</p>
            <p className="text-indigo-700" style={{ fontSize: '14px' }}>
              小教會的牧師可以跨教會尋找代禱夥伴——鄰近教會的牧師、神學院的同學、宣教機構的同工。不一定要在自己教會內找，重點是找到真正可以信任、靈命成熟的人。
            </p>
          </div>
        </Section>

        <Section title="情境四：「屬靈巨人」的期待壓力" icon={Star} accentColor="purple">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            華人教會常把牧師「神化」：期待牧師永遠剛強、永遠有信心、永遠不會軟弱。在這樣的期待下，牧師如果承認自己需要代禱，會不會讓會眾失望？
          </p>
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            一位牧師說：「會眾常對我說：『牧師，你這麼屬靈，一定不需要我們的禱告。』每次聽到這句話，我都笑不出來。」
          </p>
          <div className="bg-white border-l-4 border-purple-400 rounded-lg p-4">
            <p className="text-purple-800 font-semibold mb-2" style={{ fontSize: '14px' }}>教育會眾：</p>
            <p className="text-purple-700" style={{ fontSize: '14px' }}>
              牧師需要主動教育會眾：「我也是人，我也會軟弱，我也需要你們的代禱。」當牧師願意示範「承認需要」，會眾也會學習在肢體中彼此扶持。
            </p>
          </div>
        </Section>

        <Section title="情境五：後疫情時代的信任危機" icon={AlertTriangle} accentColor="green">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            COVID-19疫情讓許多教會經歷撕裂：疫苗議題、政治立場、實體vs線上……牧師夾在中間，不知道可以信任誰。
          </p>
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            在這樣的氛圍中，牧師更難接受代禱——我如何確定代禱者不會把我的掙扎當作「八卦」傳出去？
          </p>
          <div className="bg-white border-l-4 border-green-400 rounded-lg p-4">
            <p className="text-green-800 font-semibold mb-2" style={{ fontSize: '14px' }}>重建信任：</p>
            <p className="text-green-700" style={{ fontSize: '14px' }}>
              選擇經過時間考驗、品格成熟、能保密的代禱者。一開始可以只分享「安全」的代禱事項，逐步建立信任後，再分享更深的掙扎。信任是可以培養的。
            </p>
          </div>
        </Section>
      </section>

      {/* Four-Week Challenge */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-green-600" />
          四週接受代禱操練
        </h2>
        
        {[
          {
            week: 1,
            title: '自我省察：我為何抗拒？',
            mission: '誠實面對自己：四大障礙（驕傲、恐懼、控制慾、忙碌）中，哪一個最常讓我拒絕接受代禱？這週不要急著「解決」，只要「覺察」。',
            practice: '每天花5分鐘安靜，問自己：「當有人說要為我代禱時，我心裡的第一個反應是什麼？」把這些反應誠實記錄下來。',
            journal: '我發現自己最常用什麼理由拒絕代禱？這背後真正的原因是什麼？',
          },
          {
            week: 2,
            title: '列出潛在的代禱者名單',
            mission: '列出3-5位你信任、靈命成熟、能保密的人。不需要急著邀請他們，先為這個名單禱告，求神確認。',
            practice: '為名單上的每個人禱告，問神：「這個人適合成為我的代禱者嗎？」也為自己禱告：「主啊，幫助我願意接受代禱。」',
            journal: '我最信任的人有哪些特質？我希望我的代禱者具備什麼條件？',
          },
          {
            week: 3,
            title: '邁出第一步：邀請代禱者',
            mission: '選擇1位你最信任的人，約他見面或視訊，告訴他：「我想邀請你成為我的代禱者。」不需要一次邀請很多人，先從1位開始。',
            practice: '準備好要說的話：「我發現自己需要更多代禱的遮蓋。你願意成為我的代禱者嗎？我會定期分享我的代禱需要，也請你為我守望。」',
            journal: '邀請的過程中，我的感受如何？對方的反應如何？',
          },
          {
            week: 4,
            title: '練習真實分享',
            mission: '這週與代禱者分享一個「真實的掙扎」——不是表面的代禱事項，而是你真正在掙扎的事。可以從「比較安全」的事開始，不需要一次掏心掏肺。',
            practice: '用這個句式開始：「這週我最大的掙扎是……」分享後，請代禱者當場為你禱告，體會被守望的感覺。',
            journal: '分享真實掙扎的感覺如何？被代禱者守望時，我有什麼感受？',
          },
        ].map((item, i) => (
          <div key={i} className="bg-green-50 border-l-4 border-green-500 rounded-xl p-5 mb-4 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-green-600 text-white text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center">{item.week}</span>
              <h3 className="font-bold text-green-900" style={{ fontSize: '17px' }}>第{item.week}週：{item.title}</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4">
                <p className="text-green-800 font-semibold mb-2" style={{ fontSize: '14px' }}>🎯 本週任務</p>
                <p className="text-gray-700" style={{ fontSize: '14px' }}>{item.mission}</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-blue-800 font-semibold mb-2" style={{ fontSize: '14px' }}>💡 具體操練</p>
                <p className="text-gray-700" style={{ fontSize: '14px' }}>{item.practice}</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-purple-800 font-semibold mb-2" style={{ fontSize: '14px' }}>📝 靈修日誌提示</p>
                <p className="text-gray-700 italic" style={{ fontSize: '14px' }}>{item.journal}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Group Discussion */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Users className="w-6 h-6 text-green-600" />
          小組討論問題
        </h2>
        
        <div className="space-y-4">
          <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-5">
            <h3 className="font-bold text-purple-900 mb-3" style={{ fontSize: '16px' }}>🔍 自我省察類</h3>
            <ol className="space-y-2 list-decimal list-inside text-gray-700" style={{ fontSize: '15px' }}>
              <li>回想你上一次拒絕別人為你代禱，是什麼時候？原因是什麼？</li>
              <li>四大障礙中，哪一個最能描述你的狀況？你認為這個障礙從何而來？</li>
              <li>你對「接受代禱」的第一個感覺是什麼？（感恩？不自在？懷疑？恐懼？）</li>
            </ol>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5">
            <h3 className="font-bold text-blue-900 mb-3" style={{ fontSize: '16px' }}>💭 深度思考類</h3>
            <ol className="space-y-2 list-decimal list-inside text-gray-700" style={{ fontSize: '15px' }}>
              <li>為什麼「拒絕代禱」有時會被包裝成「謙卑」？真謙卑與假謙卑的區別在哪裡？</li>
              <li>如果保羅都需要代禱，為什麼我們會覺得自己「不需要」？</li>
              <li>接受代禱會削弱牧師的權威嗎？還是反而增強？為什麼？</li>
            </ol>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-5">
            <h3 className="font-bold text-green-900 mb-3" style={{ fontSize: '16px' }}>🎯 行動應用類</h3>
            <ol className="space-y-2 list-decimal list-inside text-gray-700" style={{ fontSize: '15px' }}>
              <li>如果你要建立個人代禱團，你會邀請誰？他們有什麼特質讓你信任？</li>
              <li>你願意對代禱者多坦誠？有哪些事是你絕對不會分享的？為什麼？</li>
              <li>參加四週接受代禱操練，你最大的掙扎會是什麼？你需要什麼幫助？</li>
            </ol>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-5">
            <h3 className="font-bold text-amber-900 mb-3" style={{ fontSize: '16px' }}>🏠 教會文化類</h3>
            <ol className="space-y-2 list-decimal list-inside text-gray-700" style={{ fontSize: '15px' }}>
              <li>我們教會的文化是鼓勵「承認軟弱」還是「維持形象」？如何改變？</li>
              <li>如果牧師在講台上坦承自己需要代禱，會眾會如何反應？</li>
              <li>我們小組可以如何建立「安全的分享文化」，讓每個人都敢承認需要？</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Deep Reflection */}
      <section className="mb-6">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 shadow-xl">
          <h2 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-green-400" />
            深度反思與行動指南
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Reflection */}
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
              <h3 className="font-bold text-green-300 mb-4 flex items-center" style={{ fontSize: '18px' }}>
                <Search className="w-5 h-5 mr-2 text-green-400" /> 深度反思
              </h3>
              <ul className="space-y-4 text-slate-300">
                {[
                  '如果你繼續拒絕接受代禱，五年後你的服事會是什麼樣子？你的靈命會在哪裡？',
                  '想像有一天你真的撐不住了，崩潰了。那時你會後悔什麼？',
                  '你最害怕代禱者知道你哪一部分？為什麼？這個恐懼合理嗎？',
                  '如果摩西拒絕亞倫與戶珥扶他的手，會發生什麼事？以色列會打贏嗎？',
                  '你會給十年前的自己什麼建議？關於接受代禱這件事。',
                ].map((q, i) => (
                  <li key={i} className="flex items-start" style={{ fontSize: '15px' }}>
                    <span className="text-green-400 mr-2 font-bold">{i+1}.</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action */}
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
              <h3 className="font-bold text-blue-300 mb-4 flex items-center" style={{ fontSize: '18px' }}>
                <CheckCircle className="w-5 h-5 mr-2 text-blue-400" /> 具體行動方案
              </h3>
              <ul className="space-y-4 text-slate-300">
                {[
                  '今天就列出3-5位潛在代禱者的名單，為他們禱告。',
                  '這週約其中一位見面或視訊，誠實告訴他：「我需要代禱的遮蓋。」',
                  '練習說這句話：「我需要幫助。」在鏡子前練習，直到自然為止。',
                  '寫一封信給自己，說明為什麼接受代禱對你很重要。',
                  '下次有人說要為你代禱時，不要反射性拒絕，而是說：「謝謝，我真的需要。」',
                  '與代禱者約定每週或每兩週的固定溝通時間，放進行事曆。',
                  '參加四週接受代禱操練，記錄你的心路歷程。',
                ].map((a, i) => (
                  <li key={i} className="flex items-start" style={{ fontSize: '15px' }}>
                    <span className="text-blue-400 mr-2 font-bold">{i+1}.</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-green-900/30 border border-green-500/30 rounded-xl p-5">
            <p className="text-green-200 leading-relaxed italic text-center" style={{ fontSize: '16px' }}>
              「驕傲說：我不需要。<br />
              恐懼說：我不敢。<br />
              謙卑說：我需要，請幫助我。<br />
              問題是：你聽哪個聲音？」
            </p>
          </div>
        </div>
      </section>

      {/* Original Questions */}
      <section className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-green-600 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <MessageCircle className="w-6 h-6 text-green-600" />
          問題迴響（原書）
        </h2>
        <ol className="space-y-3 text-slate-700 list-decimal list-inside" style={{ fontSize: '15px' }}>
          <li>你是否曾經拒絕過別人為你代禱？原因是什麼？</li>
          <li>四大障礙中,哪一個最常阻礙你接受代禱？</li>
          <li>你認為接受代禱是示弱還是謙卑？為什麼？</li>
          <li>如果要建立個人代禱團,你會邀請誰？他們具備什麼特質？</li>
          <li>你願意對代禱者多坦誠？有哪些事是你絕對不會分享的？為什麼？</li>
        </ol>
      </section>

      {/* Navigation */}
      <div className="mt-4 text-center text-sm text-gray-400">
        <p>— 第五章完 —</p>
      </div>
    </div>
  );
}
