import { useState } from 'react';
import {
  ChevronDown, ChevronRight, Heart, Shield, Users, Target,
  Book, BookOpen, Star, Crown, Lightbulb, CheckCircle,
  AlertTriangle, Zap, Clock, MessageCircle, Search, Eye,
  TrendingUp, Gift, Layers, Phone, Mail, UserPlus, Award, Compass
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

export default function Book10Ch9() {
  const [openPrinciple, setOpenPrinciple] = useState<number | null>(null);
  const [openPitfall, setOpenPitfall] = useState<number | null>(null);

  const principles = [
    {
      icon: Heart,
      title: '原則一：定期溝通，保持連結',
      color: 'green',
      problem: '許多代禱團在建立後的3-6個月就逐漸冷卻，最主要的原因是「失去連結」。牧師太忙，忘記分享代禱事項；代禱者不知道要為什麼禱告，久而久之就停止守望了。',
      solution: '建立固定的溝通節奏。可以是每週一封代禱信（電子郵件或訊息）、每月一次見面或視訊、或每季一次代禱團聚餐。重點是「固定」與「持續」，不要讓溝通變成「想到才做」。',
      practice: [
        '每週五發出下週的代禱事項（講道主題、重要會議、個人需要）',
        '每月第一個週六早上與代禱團見面（或視訊），深入分享與代禱',
        '每季辦一次代禱團聚餐或退修，建立更深的關係',
      ],
      verse: '希伯來書 10:25「你們不可停止聚會，好像那些停止慣了的人，倒要彼此勸勉，既知道那日子臨近，就更當如此。」',
    },
    {
      icon: Gift,
      title: '原則二：見證回饋，建立信心',
      color: 'purple',
      problem: '代禱者最大的挫折是「不知道我的禱告有沒有用」。如果牧師從不分享代禱蒙應允的見證，代禱者會逐漸失去動力，覺得自己只是「例行公事」地禱告。',
      solution: '定期分享見證，讓代禱者知道「你的禱告真的有影響力」。可以在每次溝通時，簡短分享一兩個代禱蒙應允的例子；或在每月見面時，特別留時間分享見證與感恩。',
      practice: [
        '每週代禱信中加入「上週禱告蒙應允」的見證（哪怕很小的事）',
        '每月見面時，至少分享2-3個具體的代禱果效',
        '年終時整理一份「全年代禱見證集」，送給代禱者',
      ],
      verse: '詩篇 103:2「我的心哪，你要稱頌耶和華！不可忘記他的一切恩惠！」',
    },
    {
      icon: Users,
      title: '原則三：雙向守望，彼此關懷',
      color: 'blue',
      problem: '有些牧師把代禱團當作「單向的服事」——代禱者只為牧師禱告，牧師從不關心代禱者的需要。這會讓關係變得「不對等」，代禱者感覺自己只是「工具」。',
      solution: '建立雙向守望的文化。牧師也要主動關心代禱者的生活、家庭、工作、屬靈光景。在見面時，留時間讓代禱者分享他們的需要，牧師也為代禱者禱告。',
      practice: [
        '每次見面時，先問代禱者：「你最近好嗎？有什麼需要禱告的？」',
        '記住代禱者的生日、重要節日，發訊息問候或送小禮物',
        '如果代禱者遇到困難（生病、家庭問題），主動探訪或關心',
      ],
      verse: '加拉太書 6:2「你們各人的重擔要互相擔當，如此，就完全了基督的律法。」',
    },
    {
      icon: Shield,
      title: '原則四：守住界線，避免依賴',
      color: 'red',
      problem: '有些牧師過度依賴代禱團，把他們當作「免費諮商師」或「情緒垃圾桶」。每次見面都在抱怨、發洩，卻不真正禱告。這會讓代禱者疲憊、甚至倦怠。',
      solution: '清楚的界線：代禱團是為了「代禱」，不是「輔導」或「治療」。分享需要是好的，但要適度，最終目的是禱告。如果牧師需要深度輔導，應該尋求專業幫助，而非把代禱者當輔導員。',
      practice: [
        '每次見面時，分享不要超過總時間的1/3，留2/3給禱告',
        '如果發現自己在「抱怨」而非「分享需要」，要自我提醒',
        '如果需要深度輔導，誠實告訴代禱者，並尋求專業協助',
      ],
      verse: '箴言 11:14「無智謀，民就敗落；謀士多，人便安居。」',
    },
    {
      icon: Lightbulb,
      title: '原則五：定期評估，適時調整',
      color: 'amber',
      problem: '代禱團的運作不是「一成不變」的。有時候代禱者因為生活變化（工作調動、家庭因素）無法繼續；有時候溝通方式需要調整；有時候代禱架構需要修正。如果從不評估，問題會累積。',
      solution: '每半年或每年，與代禱團一起評估：運作得如何？有什麼需要調整？有沒有人需要退下？有沒有新的人需要加入？坦誠溝通，靈活調整。',
      practice: [
        '每半年安排一次「代禱團檢討會」，問：哪些做得好？哪些需要改進？',
        '如果代禱者因故無法繼續，不要勉強，也不要責備，而是感謝他的守望',
        '如果需要新的代禱者，重新為神的揀選禱告，然後邀請',
      ],
      verse: '哥林多前書 14:40「凡事都要規規矩矩地按著次序行。」',
    },
    {
      icon: Star,
      title: '原則六：肯定與感謝，永不停止',
      color: 'indigo',
      problem: '代禱者是「隱藏的英雄」，他們默默守望、付出代價，卻很少被看見、被肯定。如果牧師從不感謝他們，他們會感到「不被重視」，甚至懷疑「我的服事有意義嗎？」',
      solution: '永遠不要停止肯定與感謝代禱者。每個月至少一次公開或私下感謝；在特殊節日（生日、聖誕節、教師節）送小禮物或卡片；在教會場合（不破壞保密原則的情況下）肯定代禱事工的重要性。',
      practice: [
        '每個月至少一次，親口對代禱者說：「謝謝你的守望，你真的很重要」',
        '在代禱者生日時，送卡片或小禮物表達感謝',
        '年終時，為每位代禱者寫一封感謝信，具體說明他們的守望如何幫助你',
      ],
      verse: '帖撒羅尼迦前書 5:12-13「弟兄們，我們勸你們敬重那在你們中間勞苦的人……又因他們所做的工，用愛心格外尊重他們。」',
    },
  ];

  const commonPitfalls = [
    {
      title: '陷阱一：把代禱團當作「粉絲團」',
      problem: '有些牧師享受被代禱者「崇拜」的感覺，把代禱團變成「我的支持者」。他們喜歡聽代禱者的讚美，但不願意分享真實的軟弱。',
      consequence: '這會讓代禱團變質——代禱者成為「粉絲」，而非「守望者」。他們只為牧師的成功禱告，卻無法為他的軟弱守望。最終，這樣的代禱團無法保護牧師的真正破口。',
      solution: '記住：代禱者不是粉絲，而是守望者。他們需要知道你的軟弱，才能為你的軟弱守望。',
    },
    {
      title: '陷阱二：忽略代禱者的需要',
      problem: '牧師太專注於自己的需要，忘記代禱者也是人、也會疲憊、也需要被關心。結果代禱者默默承擔，直到撐不住才退下。',
      consequence: '代禱者倦怠、退下，甚至對代禱事工失去熱情。更糟的是，他們可能因為「不好意思說」而一直撐，直到心靈受傷。',
      solution: '主動關心代禱者。不要等他們說「我很累」，而是主動問「你還好嗎？」並為他們禱告。',
    },
    {
      title: '陷阱三：溝通頻率失衡',
      problem: '有些牧師在危機時密集聯繫代禱者（一天好幾次），但危機過後就消失不見（好幾個月沒消息）。這種不穩定的節奏會讓代禱者困惑。',
      consequence: '代禱者不知道該如何守望——危機時過度密集，會讓他們疲憊；危機後完全沉默，會讓他們覺得「被利用」。',
      solution: '建立穩定的溝通節奏。不要「需要時才聯繫」，而是「固定時間聯繫」，無論是否有危機。',
    },
    {
      title: '陷阱四：期待代禱者「讀心術」',
      problem: '有些牧師從不主動分享代禱需要，卻期待代禱者「應該知道我需要什麼」。當代禱者沒有為「正確的事」禱告時，牧師心裡失望。',
      consequence: '代禱者感到挫折——「我不知道該為什麼禱告」；牧師也感到失望——「他們為什麼不懂我」。雙方都覺得委屈。',
      solution: '主動、具體、清楚地分享代禱需要。不要讓代禱者猜，要告訴他們。',
    },
    {
      title: '陷阱五：從不處理衝突或誤會',
      problem: '代禱團也是人組成的群體，難免會有誤會、衝突、或不同意見。有些牧師選擇「逃避」——不處理，希望問題自己消失。',
      consequence: '小誤會累積成大裂痕。代禱者之間可能產生嫌隙、論斷、或分裂。最終，代禱團無法繼續。',
      solution: '勇敢面對衝突。如果發現誤會或問題，主動約當事人溝通、澄清、和解。不要讓問題發酵。',
    },
    {
      title: '陷阱六：把代禱團當作「免費勞工」',
      problem: '有些牧師不只邀請代禱者為他禱告，還期待他們做很多其他事工（探訪、關懷、行政）。代禱者因為「不好意思拒絕」而默默承擔，最終疲憊不堪。',
      consequence: '代禱者的時間與精力被其他事工耗盡，無法專注守望。而且，他們會感到「我不是代禱者，我只是免費勞工」。',
      solution: '尊重代禱者的呼召。他們被呼召的是「代禱」，不是「所有事工」。如果需要其他幫助，應該另外邀請其他人。',
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Chapter Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-700 text-white rounded-2xl p-6 mb-8 shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <Heart className="w-7 h-7 text-green-200" />
          <span className="text-green-200 font-medium" style={{ fontSize: '14px' }}>第九章</span>
        </div>
        <h1 className="font-bold text-white mb-3" style={{ fontSize: '24px' }}>
          保養與維護代禱關係
        </h1>
        <p className="text-green-200 leading-relaxed" style={{ fontSize: '15px' }}>
          建立代禱團只是開始，長期維護才是關鍵。這一章提供實用的原則與警示，
          幫助牧師與代禱者建立健康、持久、有果效的守望關係。
        </p>
      </div>

      {/* Core Verse */}
      <section className="bg-green-50 border-l-4 border-green-500 rounded-xl p-5 mb-6 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="w-5 h-5 text-green-600" />
          <span className="font-bold text-green-800" style={{ fontSize: '16px' }}>核心經文</span>
        </div>
        <blockquote className="text-green-900 leading-relaxed italic" style={{ fontSize: '16px' }}>
          「你們各人的重擔要互相擔當，如此，就完全了基督的律法。」
        </blockquote>
        <p className="text-green-600 mt-2 font-medium" style={{ fontSize: '14px' }}>加拉太書 6:2</p>
      </section>

      {/* Opening Story */}
      <Section title="開場案例：兩個代禱團的不同結局" icon={Star} defaultOpen accentColor="red">
        <div className="space-y-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-bold text-red-900 mb-2" style={{ fontSize: '15px' }}>❌ 失敗案例：李牧師的代禱團</h4>
            <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
              李牧師花了三個月建立代禱團，邀請了5位弟兄姊妹。一開始大家都很熱心，每週見面禱告。但三個月後，李牧師因為忙碌，開始「忘記」發代禱信；半年後，見面改成「有空再約」；一年後，代禱團名存實亡——大家都還在LINE群組裡，但沒有人禱告了。
            </p>
            <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
              李牧師很失望，覺得「代禱團根本不管用」。但其實問題不在代禱者，而在他沒有好好維護這個關係。
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-bold text-green-900 mb-2" style={{ fontSize: '15px' }}>✅ 成功案例：王牧師的代禱團</h4>
            <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
              王牧師也花了三個月建立代禱團，同樣邀請了5位代禱者。但他從一開始就建立清楚的架構：每週五發代禱信（無論多忙）、每月第一個週六早上見面（在行事曆上固定）、每季辦一次代禱團聚餐（建立更深關係）。
            </p>
            <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
              五年過去了，代禱團仍然穩定運作。其中2位因為工作調動離開，但王牧師感謝他們的守望，並為神的新揀選禱告，後來邀請了2位新的代禱者加入。
            </p>
            <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
              王牧師說：「維護代禱團，就像維護任何重要的關係一樣——需要時間、需要用心、需要委身。但這是最值得的投資。」
            </p>
          </div>
        </div>
      </Section>

      {/* Six Principles */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Target className="w-6 h-6 text-green-600" />
          六個維護原則
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4" style={{ fontSize: '15px' }}>
          這六個原則是從無數成功與失敗的案例中總結出來的最佳實踐。
        </p>
        {principles.map((principle, idx) => {
          const Icon = principle.icon;
          const isOpen = openPrinciple === idx;
          const c = principle.color === 'green' ? { border: 'border-green-400', bg: 'bg-green-50', icon: 'text-green-600', title: 'text-green-900' } :
                    principle.color === 'purple' ? { border: 'border-purple-400', bg: 'bg-purple-50', icon: 'text-purple-600', title: 'text-purple-900' } :
                    principle.color === 'blue' ? { border: 'border-blue-400', bg: 'bg-blue-50', icon: 'text-blue-600', title: 'text-blue-900' } :
                    principle.color === 'red' ? { border: 'border-red-400', bg: 'bg-red-50', icon: 'text-red-600', title: 'text-red-900' } :
                    principle.color === 'amber' ? { border: 'border-amber-400', bg: 'bg-amber-50', icon: 'text-amber-600', title: 'text-amber-900' } :
                    { border: 'border-indigo-400', bg: 'bg-indigo-50', icon: 'text-indigo-600', title: 'text-indigo-900' };

          return (
            <div key={idx} className={`rounded-xl border-l-4 ${c.border} ${c.bg} mb-3 shadow-sm overflow-hidden`}>
              <button
                className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                onClick={() => setOpenPrinciple(isOpen ? null : idx)}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${c.icon} flex-shrink-0`} />
                  <span className={`font-bold ${c.title}`} style={{ fontSize: '16px' }}>{principle.title}</span>
                </div>
                {isOpen ? <ChevronDown className={`w-5 h-5 ${c.icon}`} /> : <ChevronRight className={`w-5 h-5 ${c.icon}`} />}
              </button>
              {isOpen && (
                <div className="px-5 pb-5 space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2" style={{ fontSize: '15px' }}>常見問題：</h4>
                    <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
                      {principle.problem}
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2" style={{ fontSize: '14px' }}>解決方案：</h4>
                    <p className="text-gray-700 leading-relaxed" style={{ fontSize: '14px' }}>
                      {principle.solution}
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-green-800 mb-2" style={{ fontSize: '14px' }}>💡 具體操練：</h4>
                    <ul className="space-y-2">
                      {principle.practice.map((p, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                          <span className="text-gray-700" style={{ fontSize: '14px' }}>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-3 border border-gray-100">
                    <p className="text-gray-600 italic" style={{ fontSize: '14px' }}>{principle.verse}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* Common Pitfalls */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-red-600" />
          六個常見陷阱
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4" style={{ fontSize: '15px' }}>
          了解這些陷阱，可以避免代禱團走向失敗。
        </p>
        {commonPitfalls.map((item, idx) => {
          const isOpen = openPitfall === idx;

          return (
            <div key={idx} className="rounded-xl border-l-4 border-red-400 bg-red-50 mb-3 shadow-sm overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                onClick={() => setOpenPitfall(isOpen ? null : idx)}
              >
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="font-bold text-red-900" style={{ fontSize: '16px' }}>{item.title}</span>
                </div>
                {isOpen ? <ChevronDown className="w-5 h-5 text-red-600" /> : <ChevronRight className="w-5 h-5 text-red-600" />}
              </button>
              {isOpen && (
                <div className="px-5 pb-5 space-y-3">
                  <div>
                    <h4 className="font-bold text-red-800 mb-2" style={{ fontSize: '14px' }}>問題：</h4>
                    <p className="text-gray-700 leading-relaxed" style={{ fontSize: '14px' }}>
                      {item.problem}
                    </p>
                  </div>
                  <div className="bg-white border-l-4 border-red-400 rounded-lg p-3">
                    <h4 className="font-bold text-red-800 mb-2" style={{ fontSize: '14px' }}>後果：</h4>
                    <p className="text-red-700" style={{ fontSize: '14px' }}>
                      {item.consequence}
                    </p>
                  </div>
                  <div className="bg-white border-l-4 border-green-400 rounded-lg p-3">
                    <h4 className="font-bold text-green-800 mb-2" style={{ fontSize: '14px' }}>解決之道：</h4>
                    <p className="text-green-700" style={{ fontSize: '14px' }}>
                      {item.solution}
                    </p>
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
            建立代禱團不難，<strong className="text-green-900">維護代禱團才是最大的挑戰</strong>。許多代禱團在建立後的3-6個月就逐漸冷卻，原因往往不是代禱者不忠心，而是牧師沒有好好維護這個關係。
          </p>
          <p>
            六個維護原則提供了清楚的路徑：<strong className="text-green-900">定期溝通、見證回饋、雙向守望、守住界線、定期評估、永遠感謝</strong>。每一個原則都重要，都需要刻意操練。
          </p>
          <p>
            六個常見陷阱則提醒我們：不要把代禱團當粉絲團、不要忽略代禱者需要、不要溝通失衡、不要期待讀心術、不要逃避衝突、不要把代禱者當免費勞工。
          </p>
          <p>
            記住：<strong className="text-green-900">代禱關係就像任何重要的關係一樣——需要時間、需要用心、需要委身</strong>。但這是最值得的投資。
          </p>
          <p>
            五年、十年後，當你回頭看，你會發現：忠心的代禱者是神給你最寶貴的禮物之一。
          </p>
        </div>
      </section>

      {/* Theological Depth */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Book className="w-6 h-6 text-green-600" />
          神學深度探討
        </h2>
        
        <Section title="一、關係的盟約性：聖經中的委身" icon={Heart} accentColor="purple">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            聖經中重要的關係都帶有「盟約」的性質——神與人的約、婚姻的約、大衛與約拿單的約。盟約的核心是「長期的、忠誠的、不輕易放棄的委身」。
          </p>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-3">
            <p className="text-purple-900 font-semibold mb-2" style={{ fontSize: '14px' }}>代禱關係的盟約性：</p>
            <p className="text-purple-800" style={{ fontSize: '14px' }}>
              個人性代禱關係雖然不是正式的「約」，但它帶有盟約的精神——這是長期的委身，不是短期的交易。牧師與代禱者彼此守望、彼此負責、彼此扶持，這種關係需要被「維護」，就像維護任何盟約關係一樣。
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
            這也提醒我們：代禱關係不能只靠「初期的熱情」，而需要「持續的委身」。就像婚姻需要經營，代禱關係也需要刻意維護。
          </p>
        </Section>

        <Section title="二、互相擔當重擔：加拉太書6:2的實踐" icon={Shield} accentColor="green">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            加拉太書6:2說：「你們各人的重擔要互相擔當。」這節經文的關鍵詞是「互相」——不是單向的服事，而是雙向的守望。
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-3">
            <p className="text-green-900 font-semibold mb-2" style={{ fontSize: '14px' }}>在代禱關係中的應用：</p>
            <p className="text-green-800" style={{ fontSize: '14px' }}>
              牧師不應該把代禱團當作「單向服事我的人」，而應該看見「我們在互相擔當重擔」。代禱者擔當牧師的屬靈重擔，牧師也擔當代禱者的生命重擔。這種「互相」的精神，是維護代禱關係的關鍵。
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
            如果代禱關係變成「牧師一直索取、代禱者一直付出」，關係最終會失衡。健康的代禱關係是雙向的、互惠的。
          </p>
        </Section>

        <Section title="三、忠心的管家：路加福音16章的提醒" icon={Users} accentColor="blue">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            路加福音16:10說：「人在最小的事上忠心，在大事上也忠心。」神給我們的每一個託付——包括代禱團——都需要忠心的管理。
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-3">
            <p className="text-blue-900 font-semibold mb-2" style={{ fontSize: '14px' }}>忠心管理代禱團：</p>
            <p className="text-blue-800" style={{ fontSize: '14px' }}>
              建立代禱團是神的託付，維護代禱團是忠心的表現。如果牧師因為忙碌而忽略代禱團，就是對神託付的不忠心。相反，如果牧師忠心維護代禱關係，神會將更大的託付交給他。
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
            這提醒牧師：代禱團不是「可有可無」的，而是神給你的寶貴資源，需要忠心管理。
          </p>
        </Section>

        <Section title="四、感恩與記念：舊約的紀念石" icon={Star} accentColor="amber">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            舊約中多次提到「紀念石」——當以色列人經歷神的作為時，他們會立石為記（書4:6-7）。這不只是紀念，更是提醒後代：神曾經如何信實。
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-3">
            <p className="text-amber-900 font-semibold mb-2" style={{ fontSize: '14px' }}>代禱團的「紀念石」：</p>
            <p className="text-amber-800" style={{ fontSize: '14px' }}>
              定期分享代禱見證、整理代禱蒙應允的紀錄，就像立「紀念石」——提醒代禱者：神真的在聽我們的禱告！這不只是感恩，更是建立代禱者的信心，讓他們有動力繼續守望。
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
            如果牧師從不分享見證，代禱者會忘記神的作為，失去繼續守望的動力。但如果常常「立紀念石」，代禱團會越來越堅固。
          </p>
        </Section>
      </section>

      {/* Taiwan Context */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Target className="w-6 h-6 text-green-600" />
          華人教會處境應用
        </h2>

        <Section title="情境一：「交情文化」vs「制度化」的平衡" icon={Users} accentColor="red">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            華人文化重視「交情」，關係常常是「隨性」的——有空見面、想到再約。但這種「交情文化」在維護代禱團時會遇到問題：沒有固定節奏，容易失去聯繫。
          </p>
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            相反，西方教會強調「制度化」——固定時間、固定流程。但過度制度化又會讓關係變得僵化。
          </p>
          <div className="bg-white border-l-4 border-red-400 rounded-lg p-4">
            <p className="text-red-800 font-semibold mb-2" style={{ fontSize: '14px' }}>平衡之道：</p>
            <p className="text-red-700" style={{ fontSize: '14px' }}>
              建立「有彈性的架構」——有固定的溝通節奏（如每週五發信、每月第一週六見面），但也保留靈活空間（如果有特殊狀況可以調整）。既不過度隨性，也不過度僵化。
            </p>
          </div>
        </Section>

        <Section title="情境二：「面子」文化阻礙真實溝通" icon={Eye} accentColor="purple">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            華人文化重視「面子」，不習慣直接溝通衝突或問題。當代禱團出現誤會或不滿時，大家選擇「忍耐」「不說」，希望問題自己消失。
          </p>
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            結果是：小問題累積成大裂痕，最終代禱團無聲無息地解散。
          </p>
          <div className="bg-white border-l-4 border-purple-400 rounded-lg p-4">
            <p className="text-purple-800 font-semibold mb-2" style={{ fontSize: '14px' }}>勇敢面對：</p>
            <p className="text-purple-700" style={{ fontSize: '14px' }}>
              牧師需要主動創造「安全的溝通空間」——定期問代禱者：「運作得如何？有什麼需要調整？」並且示範「可以誠實表達」。當有誤會時，勇敢約當事人溝通，而非逃避。
            </p>
          </div>
        </Section>

        <Section title="情境三：「情感式」vs「任務式」的張力" icon={Heart} accentColor="green">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            華人文化重視「情感」，關係的維繫常靠「感覺」——感覺好就繼續，感覺不好就疏遠。但代禱關係不能只靠感覺，也需要「任務式」的忠心——即使感覺平淡，仍然持續守望。
          </p>
          <div className="bg-white border-l-4 border-green-400 rounded-lg p-4">
            <p className="text-green-800 font-semibold mb-2" style={{ fontSize: '14px' }}>兩者兼顧：</p>
            <p className="text-green-700" style={{ fontSize: '14px' }}>
              代禱關係需要「情感的溫度」（真誠的關懷、深入的友誼）加上「任務的忠心」（固定的禱告、持續的守望）。不要只有感情沒有委身，也不要只有任務沒有溫度。
            </p>
          </div>
        </Section>

        <Section title="情境四：台灣教會的「流動性」挑戰" icon={TrendingUp} accentColor="amber">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            台灣都會區教會的會眾流動性很高——工作調動、結婚搬家、換教會。這讓長期維護代禱團變得困難——代禱者可能因為搬家離開。
          </p>
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            更困難的是：有些牧師「不敢」邀請新的代禱者，因為「怕他們又會離開」。
          </p>
          <div className="bg-white border-l-4 border-amber-400 rounded-lg p-4">
            <p className="text-amber-800 font-semibold mb-2" style={{ fontSize: '14px' }}>接受現實，持續建立：</p>
            <p className="text-amber-700" style={{ fontSize: '14px' }}>
              接受「會有人離開」是現實，但不要因此放棄建立。當代禱者因故離開時，感謝他們的守望，為神的新揀選禱告，然後邀請新的代禱者。維護代禱團是「動態的過程」，不是「靜態的凍結」。
            </p>
          </div>
        </Section>

        <Section title="情境五：後疫情時代的「線上vs實體」困境" icon={Phone} accentColor="blue">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            COVID-19疫情改變了許多事工模式。有些代禱團完全轉線上（Zoom見面、LINE群組溝通），但發現「線上很難建立深度關係」；有些代禱團堅持實體，但發現「很難約到時間」。
          </p>
          <div className="bg-white border-l-4 border-blue-400 rounded-lg p-4">
            <p className="text-blue-800 font-semibold mb-2" style={{ fontSize: '14px' }}>混合模式：</p>
            <p className="text-blue-700" style={{ fontSize: '14px' }}>
              採用「混合模式」——每月一次實體見面（建立深度關係），其他時間用線上工具溝通（分享代禱事項、簡短交流）。實體是核心，線上是補充。不要完全放棄實體，也不要拒絕線上工具的便利性。
            </p>
          </div>
        </Section>
      </section>

      {/* Four-Week Challenge */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-green-600" />
          四週維護代禱團實踐
        </h2>
        
        {[
          {
            week: 1,
            title: '檢視目前的代禱團狀況',
            mission: '這週誠實評估你的代禱團運作狀況。用六個維護原則檢視：哪些做得好？哪些需要改進？如果代禱團已經冷卻了，原因是什麼？',
            practice: '為每個維護原則打分數（1-10分）：定期溝通、見證回饋、雙向守望、守住界線、定期評估、永遠感謝。找出分數最低的2-3項。',
            journal: '我的代禱團最需要改進的是哪一方面？我願意為此做什麼？',
          },
          {
            week: 2,
            title: '重建溝通節奏',
            mission: '這週專注改善「溝通」。如果你已經很久沒聯繫代禱者了，這週重新啟動。寫一封真誠的信，告訴他們你的近況、感謝他們的守望、分享代禱需要。',
            practice: '設定固定的溝通時間表（如每週五發信、每月第一週六見面），並且在行事曆上標註。這週就執行第一次。',
            journal: '重新聯繫代禱者的感覺如何？他們的反應如何？',
          },
          {
            week: 3,
            title: '分享見證，建立信心',
            mission: '這週特別操練「見證回饋」。整理過去3-6個月代禱蒙應允的見證（哪怕很小的事），與代禱者分享。讓他們知道「你的禱告真的有用」。',
            practice: '寫一封「見證信」，列出至少3-5個代禱蒙應允的例子，發給代禱團。也可以在見面時口頭分享。',
            journal: '當我分享見證時，代禱者的反應如何？這對他們有什麼影響？',
          },
          {
            week: 4,
            title: '雙向守望，彼此關懷',
            mission: '這週操練「雙向守望」。主動關心每一位代禱者的近況——他們的家庭、工作、屬靈光景。為他們禱告，不只是讓他們為你禱告。',
            practice: '約每位代禱者見面（或視訊），這次的主題不是「我的代禱需要」，而是「你最近好嗎？」認真聆聽，為他們禱告。',
            journal: '當我關心代禱者時，我發現了什麼？這對我們的關係有什麼影響？',
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
                <p className="text-teal-800 font-semibold mb-2" style={{ fontSize: '14px' }}>💡 具體操練</p>
                <p className="text-gray-700" style={{ fontSize: '14px' }}>{item.practice}</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-blue-800 font-semibold mb-2" style={{ fontSize: '14px' }}>📝 靈修日誌提示</p>
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
              <li>如果你有代禱團，你在六個維護原則中得分最高的是哪一個？最低的是哪一個？</li>
              <li>六個常見陷阱中，你是否曾經掉入其中之一？結果如何？你如何走出來？</li>
              <li>如果你的代禱團已經冷卻了，誠實面對：主要原因是什麼？你願意重新啟動嗎？</li>
            </ol>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5">
            <h3 className="font-bold text-blue-900 mb-3" style={{ fontSize: '16px' }}>💭 深度思考類</h3>
            <ol className="space-y-2 list-decimal list-inside text-gray-700" style={{ fontSize: '15px' }}>
              <li>為什麼「見證回饋」對維護代禱團這麼重要？如果從不分享見證會怎樣？</li>
              <li>「雙向守望」與「單向服事」有什麼本質的區別？哪一種更符合聖經的教導？</li>
              <li>你認為維護代禱團最大的挑戰是什麼？時間？用心？還是關係的複雜性？</li>
            </ol>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-5">
            <h3 className="font-bold text-green-900 mb-3" style={{ fontSize: '16px' }}>🎯 行動應用類</h3>
            <ol className="space-y-2 list-decimal list-inside text-gray-700" style={{ fontSize: '15px' }}>
              <li>參加四週維護代禱團實踐，你覺得哪一週最困難？你需要什麼幫助？</li>
              <li>如果你現在要改善與代禱團的溝通，你的第一步會是什麼？</li>
              <li>我們小組可以如何一起支持牧師維護代禱團？（為牧師禱告？提醒牧師？成為代禱者？）</li>
            </ol>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-5">
            <h3 className="font-bold text-amber-900 mb-3" style={{ fontSize: '16px' }}>📚 全書回顧類</h3>
            <ol className="space-y-2 list-decimal list-inside text-gray-700" style={{ fontSize: '15px' }}>
              <li>讀完這九章，你對「個人性代禱」最大的收穫是什麼？</li>
              <li>九章中，哪一章對你的衝擊最大？為什麼？</li>
              <li>如果要用一句話總結這本書的核心信息，你會說什麼？</li>
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
                  '如果五年後，你的代禱團仍然穩定運作，那時你的服事會是什麼樣子？你的生命會有什麼不同？',
                  '想像代禱團因為你的忽略而解散，那時你會後悔什麼？你會對自己說什麼？',
                  '你是否曾經因為「太忙」而犧牲重要的關係？代禱團會不會是下一個？',
                  '讀完這九章，你最深的感動是什麼？這個感動會讓你採取行動嗎？',
                  '如果神問你：「我給你的代禱團，你忠心管理了嗎？」你會如何回答？',
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
              <h3 className="font-bold text-teal-300 mb-4 flex items-center" style={{ fontSize: '18px' }}>
                <CheckCircle className="w-5 h-5 mr-2 text-teal-400" /> 具體行動方案
              </h3>
              <ul className="space-y-4 text-slate-300">
                {[
                  '今天就檢視你的代禱團運作狀況，用六個維護原則評分。',
                  '這週重新聯繫代禱者，分享你的近況與代禱需要。',
                  '建立固定的溝通時間表，並且在行事曆上標註（不能改）。',
                  '整理過去3-6個月代禱蒙應允的見證，與代禱者分享。',
                  '約每位代禱者見面，主動關心他們的需要，為他們禱告。',
                  '參加四週維護代禱團實踐，逐週執行，改善關係。',
                  '年終時，為每位代禱者寫一封感謝信，表達你的感恩。',
                ].map((a, i) => (
                  <li key={i} className="flex items-start" style={{ fontSize: '15px' }}>
                    <span className="text-teal-400 mr-2 font-bold">{i+1}.</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-green-900/30 border border-green-500/30 rounded-xl p-5">
            <p className="text-green-200 leading-relaxed italic text-center" style={{ fontSize: '16px' }}>
              「建立代禱團不難，維護代禱團才是最大的挑戰。<br />
              但這是最值得的投資。<br />
              五年、十年後，你會發現：忠心的代禱者是神給你最寶貴的禮物之一。」
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
          <li>如果你有代禱團，你在六個維護原則中，哪一個做得最好？哪一個最需要改進？</li>
          <li>六個常見陷阱中，你是否曾經掉入其中之一？結果如何？</li>
          <li>你認為維護代禱團最大的挑戰是什麼？時間？用心？還是其他？</li>
          <li>如果你的代禱團已經冷卻了，你願意重新啟動嗎？第一步會是什麼？</li>
          <li>讀完這九章，你對「個人性代禱」有什麼新的認識？你的行動計畫是什麼？</li>
        </ol>
      </section>

      {/* Final Encouragement */}
      <section className="bg-gradient-to-br from-green-600 to-teal-700 text-white rounded-2xl p-6 mb-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Heart className="w-7 h-7" />
          最後的勉勵
        </h2>
        <div className="space-y-3 text-green-50 leading-relaxed" style={{ fontSize: '16px' }}>
          <p>
            如果你讀到這裡，我相信你的心中已經有所感動。也許你是牧師，正在思考如何建立代禱團；也許你是會友，正在辨識神是否呼召你成為代禱者。
          </p>
          <p>
            <strong className="text-white">無論你是哪一種身份，記住這個真理：</strong>
          </p>
          <div className="bg-white/10 rounded-lg p-4 my-4">
            <p className="text-white text-center italic" style={{ fontSize: '17px' }}>
              「代禱不是可有可無的事工，而是屬靈爭戰的核心武器。」
            </p>
          </div>
          <p>
            每一位牧師都需要代禱的遮蓋。每一個代禱者都是神國度的守望者。當牧師與代禱者同心合意守望，神的大能會顯明，撒但的攻擊會被阻擋，教會會經歷復興。
          </p>
          <p>
            <strong className="text-white">現在，問題只有一個：你願意回應神的呼召嗎？</strong>
          </p>
          <p>
            如果你是牧師，願意放下驕傲，承認你需要代禱，並開始建立代禱團嗎？
          </p>
          <p>
            如果你是會友，願意回應神的呼召，成為某個人忠心的守望者嗎？
          </p>
          <p className="text-xl font-bold text-white mt-6">
            不要再等待。從今天開始。神已經在等待你的回應。
          </p>
        </div>
      </section>

      {/* Navigation */}
      <div className="mt-4 text-center text-sm text-gray-400">
        <p>— 全書完 —</p>
      </div>
    </div>
  );
}
