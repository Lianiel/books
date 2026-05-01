import { useState } from 'react';
import {
  ChevronDown, ChevronRight, Heart, Shield, Users, Target,
  Book, BookOpen, Star, Crown, Lightbulb, CheckCircle,
  AlertTriangle, Zap, Clock, MessageCircle, Search, Eye,
  TrendingUp, Gift, Layers, Phone, Mail, UserPlus
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

export default function Book10Ch7() {
  const [openStep, setOpenStep] = useState<number | null>(null);
  const [openMistake, setOpenMistake] = useState<number | null>(null);

  const steps = [
    {
      icon: Heart,
      title: '步驟一：先為自己的代禱生活禱告',
      color: 'purple',
      why: '在呼召別人之前，牧師自己要先有穩定的禱告生活。你不能把你沒有的東西給別人。如果你自己的禱告生活一團糟，你如何帶領代禱團？',
      how: '每天至少花30分鐘個人禱告，為自己的服事、家庭、靈命守望。建立禱告日記，記錄神的回應。讓禱告成為你生活的優先順序，而非「有空再做」的選項。',
      warning: '不要因為「太忙」而犧牲禱告。記住：摩西的手也會發沉，但他沒有停止舉手禱告。',
      verse: '馬可福音 1:35「次日早晨，天未亮的時候，耶穌起來，到曠野地方去，在那裡禱告。」',
    },
    {
      icon: Users,
      title: '步驟二：為神揀選代禱者禱告',
      color: 'indigo',
      why: '不是你選代禱者，而是神選。你的責任是尋求神的心意：神要揀選誰來為我守望？不要憑自己的喜好或方便來選人。',
      how: '為此禱告至少一個月。求神顯明誰是祂揀選的代禱者。觀察：誰已經在為你禱告？誰對你的服事有負擔？誰靈命成熟、可以信任？列出3-7個名字，繼續為這個名單禱告。',
      warning: '不要急著找人。倉促邀請不合適的人，只會帶來問題（例如：代禱者變成論斷者、散播八卦、或自己靈命不穩）。',
      verse: '路加福音 6:12-13「那時，耶穌出去，上山禱告，整夜禱告神；到了天亮，叫他的門徒來，就從他們中間挑選十二個人，稱他們為使徒。」',
    },
    {
      icon: UserPlus,
      title: '步驟三：親自、個別邀請',
      color: 'green',
      why: '不要在講台上公開招募（「有誰願意為牧師代禱？請舉手」），這會找來不合適的人。個人性代禱是「呼召」，需要一對一的邀請與委身。',
      how: '約每個候選人單獨見面（或視訊），說明：(1)你相信神呼召他成為你的代禱者；(2)說明這個角色的責任（守密、忠心、長期）；(3)給他時間考慮與禱告；(4)如果他願意，正式開始代禱關係。',
      warning: '不要給對方壓力。如果他說不，尊重他的決定。神的呼召是清楚的，不需要勉強。',
      verse: '馬太福音 4:19「耶穌對他們說：來跟從我，我要叫你們得人如得魚一樣。」',
    },
    {
      icon: Book,
      title: '步驟四：建立清楚的代禱架構',
      color: 'blue',
      why: '代禱者需要知道：我該如何為你禱告？多久禱告一次？如何聯繫你？有哪些界線？清楚的架構可以避免混亂與失望。',
      how: '與代禱團討論並建立共識：(1)代禱頻率（每天？每週？）；(2)溝通方式（每週電子郵件？每月見面？）；(3)代禱內容（你會分享哪些需要？哪些不會分享？）；(4)保密原則；(5)代禱團的運作方式（個別代禱？集體見面？）。',
      warning: '不要假設「他們會知道該怎麼做」。許多代禱團失敗，是因為缺乏清楚的架構與期待。',
      verse: '哥林多前書 14:40「凡事都要規規矩矩地按著次序行。」',
    },
    {
      icon: Mail,
      title: '步驟五：定期分享代禱需要',
      color: 'amber',
      why: '代禱者不是通靈者，他們需要你告訴他們具體的代禱需要。不要讓他們「猜」你需要什麼。',
      how: '建立固定的溝通節奏：每週或每兩週，以電子郵件、訊息或見面的方式，分享你的代禱需要。可以包括：(1)本週的講道主題；(2)重要會議或決策；(3)個人或家庭的掙扎；(4)感謝代禱蒙應允的見證。',
      warning: '不要只分享「安全」的代禱事項。如果你只說「請為主日講道禱告」，代禱者無法為你真正的軟弱守望。要有選擇地真實分享。',
      verse: '腓立比書 4:6「應當一無掛慮，只要凡事藉著禱告、祈求，和感謝，將你們所要的告訴神。」',
    },
    {
      icon: Gift,
      title: '步驟六：肯定、感謝、見證',
      color: 'red',
      why: '代禱者是隱藏的英雄，他們很少被看見、被肯定。如果你不定期感謝他們，他們會逐漸失去動力。',
      how: '(1)每個月至少一次，公開或私下感謝代禱者；(2)分享代禱蒙應允的見證——讓他們知道「我的禱告真的有用」；(3)在特殊節日（生日、聖誕節）送小禮物或卡片表達感謝；(4)偶爾為代禱者禱告，守望他們的需要。',
      warning: '不要把代禱者當作「理所當然」。他們付出時間、精力、甚至屬靈爭戰的代價，他們值得被肯定。',
      verse: '帖撒羅尼迦前書 5:12-13「弟兄們，我們勸你們敬重那在你們中間勞苦的人……又因他們所做的工，用愛心格外尊重他們。」',
    },
  ];

  const commonMistakes = [
    {
      mistake: '錯誤一：在講台上公開招募代禱者',
      problem: '這會吸引不合適的人（出於義務、想接近牧師、或靈命不成熟的人）。個人性代禱需要神的呼召，不是「志願服務」。',
      solution: '一對一、私下邀請。讓每個邀請都是經過禱告、深思熟慮的。',
    },
    {
      mistake: '錯誤二：只找「屬靈巨人」',
      problem: '有些牧師只想找那些「很會禱告」的人，結果錯過了神真正揀選的代禱者。代禱的關鍵不是「能力」，而是「忠心」與「負擔」。',
      solution: '尋求神的心意，而非憑自己的標準。有時候，神會揀選你意想不到的人。',
    },
    {
      mistake: '錯誤三：期待代禱者「讀心術」',
      problem: '許多牧師不主動分享代禱需要，卻期待代禱者「應該知道我需要什麼」。結果代禱者只能為表面的事代禱，無法真正守望。',
      solution: '主動、具體、真實地分享。不要讓代禱者猜，要告訴他們。',
    },
    {
      mistake: '錯誤四：把代禱者當作「免費諮商師」',
      problem: '有些牧師把代禱時間變成「傾訴時間」，不斷抱怨、發洩，卻不真正禱告。代禱者不是輔導，而是守望者。',
      solution: '分享需要是好的，但要記得：最終目的是禱告，不是抱怨。',
    },
    {
      mistake: '錯誤五：從不感謝代禱者',
      problem: '代禱者默默守望、付出代價，卻從未得到肯定。久而久之，他們會疲憊、失望、退下。',
      solution: '定期感謝、分享見證、肯定他們的價值。讓他們知道：你的守望真的有影響力。',
    },
    {
      mistake: '錯誤六：邀請太多人',
      problem: '有些牧師想「越多人禱告越好」，結果邀請了20-30位代禱者。但人數太多，關係就會變淺，無法深入分享。',
      solution: '3-7位是理想人數。寧可少而深，也不要多而淺。',
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Chapter Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-6 mb-8 shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <UserPlus className="w-7 h-7 text-blue-200" />
          <span className="text-blue-200 font-medium" style={{ fontSize: '14px' }}>第七章</span>
        </div>
        <h1 className="font-bold text-white mb-3" style={{ fontSize: '24px' }}>
          呼召代禱同工
        </h1>
        <p className="text-blue-200 leading-relaxed" style={{ fontSize: '15px' }}>
          建立個人代禱團不是「找志工」，而是尋求神的心意、邀請神揀選的人。
          這一章提供實際的步驟與原則，幫助牧師建立健康、有效的代禱網絡。
        </p>
      </div>

      {/* Core Verse */}
      <section className="bg-blue-50 border-l-4 border-blue-500 rounded-xl p-5 mb-6 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="w-5 h-5 text-blue-600" />
          <span className="font-bold text-blue-800" style={{ fontSize: '16px' }}>核心經文</span>
        </div>
        <blockquote className="text-blue-900 leading-relaxed italic" style={{ fontSize: '16px' }}>
          「那時，耶穌出去，上山禱告，整夜禱告神；到了天亮，叫他的門徒來，就從他們中間挑選十二個人，稱他們為使徒。」
        </blockquote>
        <p className="text-blue-600 mt-2 font-medium" style={{ fontSize: '14px' }}>路加福音 6:12-13</p>
      </section>

      {/* Opening Story */}
      <Section title="開場案例：兩種呼召方式的對比" icon={Star} defaultOpen accentColor="red">
        <div className="space-y-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-bold text-red-900 mb-2" style={{ fontSize: '15px' }}>❌ 失敗案例：張牧師的公開招募</h4>
            <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
              張牧師在主日講台上說：「我需要代禱者！如果你願意為牧師代禱，請在週報上簽名。」結果有15個人報名。張牧師很高興，建立了一個LINE群組，每週發代禱事項。
            </p>
            <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
              三個月後，問題開始出現：有人在群組裡批評教會決策、有人把牧師的私事告訴別人、有人根本沒在禱告只是「掛名」。張牧師失望地解散了代禱團，心想：「代禱團根本沒用。」
            </p>
            <div className="bg-white border-l-4 border-red-400 rounded-lg p-3">
              <p className="text-red-800 font-semibold mb-1" style={{ fontSize: '14px' }}>問題所在：</p>
              <p className="text-red-700" style={{ fontSize: '14px' }}>
                公開招募會吸引不合適的人。沒有經過禱告辨識、沒有建立關係、沒有清楚的架構，代禱團只是「形式」，沒有實質。
              </p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-bold text-green-900 mb-2" style={{ fontSize: '15px' }}>✅ 成功案例：陳牧師的禱告尋求</h4>
            <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
              陳牧師為「代禱者」這件事禱告了兩個月。他列出10個名字，為每個人禱告，求神顯明誰是祂揀選的。最後，他感動邀請5位弟兄姊妹。
            </p>
            <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
              他一對一約每個人見面，說明這個角色的責任與委身。其中2位婉拒（因為時間或其他負擔），3位答應。陳牧師沒有失望，因為他知道：神的心意是3位，不是5位。
            </p>
            <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
              這3位代禱者與陳牧師建立了深厚的關係。他們每週收到代禱信、每月見面一次、為牧師的服事、家庭、靈命守望。五年後，陳牧師說：「這3位代禱者，是神給我最寶貴的禮物之一。」
            </p>
            <div className="bg-white border-l-4 border-green-400 rounded-lg p-3">
              <p className="text-green-800 font-semibold mb-1" style={{ fontSize: '14px' }}>成功關鍵：</p>
              <p className="text-green-700" style={{ fontSize: '14px' }}>
                禱告尋求、一對一邀請、清楚說明、尊重對方的決定、建立深入關係、定期溝通。
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Six Steps */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Target className="w-6 h-6 text-blue-600" />
          六個關鍵步驟
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4" style={{ fontSize: '15px' }}>
          建立代禱團不是一蹴可幾，而是需要按部就班。這六個步驟是瓦格納從無數牧師的經驗中整理出來的最佳實踐。
        </p>
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isOpen = openStep === idx;
          const c = step.color === 'purple' ? { border: 'border-purple-400', bg: 'bg-purple-50', icon: 'text-purple-600', title: 'text-purple-900' } :
                    step.color === 'indigo' ? { border: 'border-indigo-400', bg: 'bg-indigo-50', icon: 'text-indigo-600', title: 'text-indigo-900' } :
                    step.color === 'green' ? { border: 'border-green-400', bg: 'bg-green-50', icon: 'text-green-600', title: 'text-green-900' } :
                    step.color === 'blue' ? { border: 'border-blue-400', bg: 'bg-blue-50', icon: 'text-blue-600', title: 'text-blue-900' } :
                    step.color === 'amber' ? { border: 'border-amber-400', bg: 'bg-amber-50', icon: 'text-amber-600', title: 'text-amber-900' } :
                    { border: 'border-red-400', bg: 'bg-red-50', icon: 'text-red-600', title: 'text-red-900' };

          return (
            <div key={idx} className={`rounded-xl border-l-4 ${c.border} ${c.bg} mb-3 shadow-sm overflow-hidden`}>
              <button
                className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                onClick={() => setOpenStep(isOpen ? null : idx)}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${c.icon} flex-shrink-0`} />
                  <span className={`font-bold ${c.title}`} style={{ fontSize: '16px' }}>{step.title}</span>
                </div>
                {isOpen ? <ChevronDown className={`w-5 h-5 ${c.icon}`} /> : <ChevronRight className={`w-5 h-5 ${c.icon}`} />}
              </button>
              {isOpen && (
                <div className="px-5 pb-5 space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2" style={{ fontSize: '15px' }}>為什麼重要：</h4>
                    <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
                      {step.why}
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2" style={{ fontSize: '14px' }}>如何實踐：</h4>
                    <p className="text-gray-700 leading-relaxed" style={{ fontSize: '14px' }}>
                      {step.how}
                    </p>
                  </div>

                  <div className="bg-white border-l-4 border-amber-400 rounded-lg p-3">
                    <h4 className="font-bold text-amber-800 mb-2" style={{ fontSize: '14px' }}>⚠ 警告：</h4>
                    <p className="text-amber-700" style={{ fontSize: '14px' }}>
                      {step.warning}
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-3 border border-gray-100">
                    <p className="text-gray-600 italic" style={{ fontSize: '14px' }}>{step.verse}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* Common Mistakes */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-red-600" />
          六個常見錯誤
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4" style={{ fontSize: '15px' }}>
          了解別人的失敗，可以避免自己重蹈覆轍。這些錯誤都是真實案例的總結。
        </p>
        {commonMistakes.map((item, idx) => {
          const isOpen = openMistake === idx;

          return (
            <div key={idx} className="rounded-xl border-l-4 border-red-400 bg-red-50 mb-3 shadow-sm overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                onClick={() => setOpenMistake(isOpen ? null : idx)}
              >
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="font-bold text-red-900" style={{ fontSize: '16px' }}>{item.mistake}</span>
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

      {/* Ideal Number */}
      <Section title="理想的代禱團人數：3-7位" icon={Users} accentColor="indigo">
        <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '16px' }}>
          許多牧師問：「我應該邀請幾位代禱者？」瓦格納的建議是：<strong>3-7位是理想人數</strong>。
        </p>
        <div className="space-y-3 mb-4">
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-3">
            <p className="text-indigo-900 font-semibold mb-1" style={{ fontSize: '14px' }}>為什麼不要太少（少於3位）？</p>
            <p className="text-indigo-800" style={{ fontSize: '14px' }}>
              如果只有1-2位，風險太高：他們可能因為生病、搬家、或其他原因無法繼續，你就失去了所有的代禱遮蓋。而且人數太少，代禱者的負擔太重。
            </p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <p className="text-red-900 font-semibold mb-1" style={{ fontSize: '14px' }}>為什麼不要太多（超過7位）？</p>
            <p className="text-red-800" style={{ fontSize: '14px' }}>
              人數太多，關係就會變淺。你無法與每個人都建立深入的信任關係，分享也會變得表面。而且管理太多代禱者（溝通、聯繫、感謝）會變成牧師的負擔。
            </p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <p className="text-green-900 font-semibold mb-1" style={{ fontSize: '14px' }}>3-7位的優勢：</p>
            <ul className="space-y-1 text-green-800" style={{ fontSize: '14px' }}>
              <li>• 足夠的人數分擔代禱負擔</li>
              <li>• 小到可以建立深入關係</li>
              <li>• 即使有人暫時無法代禱，仍有其他人守望</li>
              <li>• 容易管理與溝通</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
          記住：寧可少而深，也不要多而淺。質勝於量。
        </p>
      </Section>

      {/* Chapter Summary */}
      <section className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-xl shadow-md border-2 border-blue-600 mb-6">
        <div className="flex items-center mb-4 text-blue-900">
          <MessageCircle className="w-6 h-6 mr-2" />
          <h2 className="text-xl font-bold">本章總結</h2>
        </div>
        <div className="text-slate-800 space-y-3 leading-relaxed">
          <p>
            建立個人代禱團，不是在講台上公開招募，而是<strong className="text-blue-900">禱告尋求、一對一邀請、建立深入關係</strong>。
          </p>
          <p>
            六個關鍵步驟提供了清楚的路徑：從為自己的禱告生活禱告開始，到定期感謝代禱者結束。每一步都重要，不能跳過。
          </p>
          <p>
            六個常見錯誤則提醒我們：不要公開招募、不要只找「屬靈巨人」、不要期待代禱者讀心術、不要把他們當諮商師、不要從不感謝、不要邀請太多人。
          </p>
          <p>
            <strong className="text-blue-900">理想人數是3-7位</strong>——足夠分擔負擔，又小到可以建立深入關係。
          </p>
          <p>
            記住：<strong className="text-blue-900">不是你選代禱者，而是神選</strong>。你的責任是尋求、順服、邀請、珍惜。
          </p>
        </div>
      </section>

      {/* Theological Depth */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Book className="w-6 h-6 text-blue-600" />
          神學深度探討
        </h2>
        
        <Section title="一、耶穌選召門徒的模式：禱告先於行動" icon={Heart} accentColor="purple">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            路加福音6:12記載，耶穌在選召十二使徒之前，「整夜禱告神」。這不是隨意的選擇，而是經過深度禱告尋求的決定。
          </p>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-3">
            <p className="text-purple-900 font-semibold mb-2" style={{ fontSize: '14px' }}>神學洞察：</p>
            <p className="text-purple-800" style={{ fontSize: '14px' }}>
              如果耶穌選召同工都需要整夜禱告，何況我們選召代禱者？這提醒我們：呼召代禱者不是「人力資源管理」，而是「尋求神的心意」。神知道誰適合、誰不適合，我們的責任是禱告聆聽。
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
            更深一層：耶穌選召的十二使徒中，有一位是猶大——神知道他會背叛，但仍然揀選他。這提醒我們：即使我們禱告尋求，代禱團中仍可能有「不完美」的人。但這不是我們的失敗，而是神的主權。
          </p>
        </Section>

        <Section title="二、屬靈權柄的委派：以利沙與僕人" icon={Shield} accentColor="indigo">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            列王紀下6:15-17記載，以利沙的僕人看見敵軍圍城，驚慌失措。以利沙為僕人禱告：「耶和華啊，求你開這少年人的眼目，使他能看見。」神開了僕人的眼睛，他看見滿山的火車火馬。
          </p>
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-3">
            <p className="text-indigo-900 font-semibold mb-2" style={{ fontSize: '14px' }}>應用於代禱團：</p>
            <p className="text-indigo-800" style={{ fontSize: '14px' }}>
              代禱者需要「屬靈的眼睛」，能看見牧師所面對的屬靈爭戰。牧師的責任不只是「分享代禱事項」，更是「幫助代禱者看見屬靈的真實」——撒但的攻擊在哪裡？神的保護在哪裡？爭戰的關鍵在哪裡？
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
            這也意味著：牧師需要培養代禱者的屬靈敏銳度，而非只是把他們當作「禱告機器」。定期的教導、分享、交流，都是為了打開他們屬靈的眼睛。
          </p>
        </Section>

        <Section title="三、問責與遮蓋：大衛與拿單的關係" icon={Users} accentColor="green">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            撒母耳記下12章記載，先知拿單勇敢地指出大衛的罪。這不只是先知的責任，更是因為他與大衛有深厚的信任關係——他不是外人，而是「王的朋友」。
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-3">
            <p className="text-green-900 font-semibold mb-2" style={{ fontSize: '14px' }}>代禱者的雙重角色：</p>
            <ul className="space-y-1 text-green-800" style={{ fontSize: '14px' }}>
              <li>• <strong>守望者：</strong>為牧師的需要禱告、托住他的服事</li>
              <li>• <strong>問責者：</strong>在必要時，愛心說誠實話、提醒牧師的盲點</li>
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
            健康的代禱關係不是「單向的服事」（代禱者只為牧師禱告），而是「雙向的守望」（代禱者也可以溫柔地提醒、勸勉、問責）。這需要深厚的信任關係。
          </p>
        </Section>

        <Section title="四、恩賜與呼召的區別：哥林多前書12章" icon={Lightbulb} accentColor="amber">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            保羅在哥林多前書12:11說：「這一切都是這位聖靈所運行、隨己意分給各人的。」恩賜不是靠努力「學來」的，而是聖靈主權的分配。
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-3">
            <p className="text-amber-900 font-semibold mb-2" style={{ fontSize: '14px' }}>代禱恩賜的辨識：</p>
            <p className="text-amber-800 mb-2" style={{ fontSize: '14px' }}>
              不是每個「很會禱告」的人都有代禱恩賜，也不是每個有代禱恩賜的人都「很會禱告」（口才流利、禱詞華麗）。代禱恩賜的核心是：<strong>持續的負擔、聖靈的感動、禱告的果效</strong>。
            </p>
            <p className="text-amber-800" style={{ fontSize: '14px' }}>
              牧師在選召代禱者時，不要只看「外在表現」（他禱告很大聲、他參加每次禱告會），而要看「內在負擔」（他是否真的有持續的感動為你守望）。
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
            這也提醒牧師：不要勉強沒有這個恩賜的人成為代禱者。尊重聖靈的主權，邀請神揀選的人。
          </p>
        </Section>
      </section>

      {/* Taiwan Context */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Target className="w-6 h-6 text-blue-600" />
          華人教會處境應用
        </h2>

        <Section title="情境一：「不好意思麻煩人」的文化障礙" icon={Users} accentColor="red">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            華人文化強調「不麻煩別人」，許多牧師覺得邀請代禱者是「增加別人的負擔」，所以寧願自己扛著，也不願意開口。
          </p>
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            結果是：牧師孤單、代禱者不知道如何幫助、教會缺乏代禱文化。
          </p>
          <div className="bg-white border-l-4 border-red-400 rounded-lg p-4">
            <p className="text-red-800 font-semibold mb-2" style={{ fontSize: '14px' }}>突破之道：</p>
            <p className="text-red-700" style={{ fontSize: '14px' }}>
              重新定義：邀請代禱者不是「麻煩」，而是「給予機會」。你讓他們參與神的工作、成為神國度的守望者——這是榮耀的呼召，不是負擔。而且，代禱者也需要被需要——他們渴望用禱告服事神，你的邀請成全了他們的呼召。
            </p>
          </div>
        </Section>

        <Section title="情境二：「關係導向」vs「任務導向」的張力" icon={Heart} accentColor="purple">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            華人文化重視關係，但教會常常被「任務導向」的事工模式影響——把代禱當作「任務」分配，而非「關係」建立。
          </p>
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            結果是：代禱者覺得自己只是「工具」，不是「夥伴」；牧師也把代禱當作「功能」，而非「關係」。
          </p>
          <div className="bg-white border-l-4 border-purple-400 rounded-lg p-4">
            <p className="text-purple-800 font-semibold mb-2" style={{ fontSize: '14px' }}>重建關係：</p>
            <p className="text-purple-700" style={{ fontSize: '14px' }}>
              代禱關係的核心是「關係」，不是「任務」。牧師需要投資時間與代禱者建立真實的友誼——不只是「我需要你禱告」，而是「我想與你同行」。定期見面、真誠分享、彼此關心，都是建立關係的方式。
            </p>
          </div>
        </Section>

        <Section title="情境三：台灣小教會的「人才荒」" icon={AlertTriangle} accentColor="amber">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            台灣許多小教會（30-50人）面臨「人才荒」：能講道的少、能教導的少、能代禱的也少。牧師想建立代禱團，卻找不到合適的人。
          </p>
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            更困難的是：小教會的牧師常常要「照顧每個人」，如果他邀請某幾個人成為代禱者，其他人會不會覺得被忽略？
          </p>
          <div className="bg-white border-l-4 border-amber-400 rounded-lg p-4">
            <p className="text-amber-800 font-semibold mb-2" style={{ fontSize: '14px' }}>創意解決：</p>
            <ul className="space-y-1 text-amber-700" style={{ fontSize: '14px' }}>
              <li>• <strong>跨教會合作：</strong>與鄰近教會的牧師交換代禱者——你為他的會友代禱，他的會友為你代禱</li>
              <li>• <strong>培養新人：</strong>不要只找「已經很會禱告」的人，也可以邀請有潛力的人，陪伴他們成長</li>
              <li>• <strong>透明溝通：</strong>向會眾說明「個人代禱團」與「教會禱告會」的區別，避免誤會</li>
            </ul>
          </div>
        </Section>

        <Section title="情境四：「牧師是超人」的期待壓力" icon={Crown} accentColor="indigo">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            華人教會常期待牧師「什麼都能、什麼都會」。如果牧師公開說「我需要代禱者」，會不會被認為「你不夠屬靈」？
          </p>
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            這種壓力讓許多牧師不敢承認需要，寧願獨自掙扎，也不願意讓會眾看見自己的軟弱。
          </p>
          <div className="bg-white border-l-4 border-indigo-400 rounded-lg p-4">
            <p className="text-indigo-800 font-semibold mb-2" style={{ fontSize: '14px' }}>示範真實：</p>
            <p className="text-indigo-700" style={{ fontSize: '14px' }}>
              牧師需要勇敢示範「承認需要」。當你在講台上說「我需要代禱者，因為我也會軟弱、也會疲憊」，你不是失去權威，而是給會眾看見：連牧師都需要肢體的扶持，何況我們？這會建立更健康的教會文化。
            </p>
          </div>
        </Section>

        <Section title="情境五：後疫情時代的「線上呼召」挑戰" icon={Phone} accentColor="green">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            COVID-19疫情改變了許多事工模式。有些牧師嘗試「線上呼召」代禱者（透過Zoom、視訊），但發現效果不如面對面。
          </p>
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            問題在於：代禱關係需要深度的信任，而信任很難在螢幕前建立。
          </p>
          <div className="bg-white border-l-4 border-green-400 rounded-lg p-4">
            <p className="text-green-800 font-semibold mb-2" style={{ fontSize: '14px' }}>混合模式：</p>
            <p className="text-green-700" style={{ fontSize: '14px' }}>
              初次邀請代禱者時，盡可能面對面（或至少視訊深談）。但代禱團建立後，可以靈活運用線上工具（LINE群組分享代禱事項、Zoom月會）。關鍵是：關係是面對面建立的，維持可以線上化。
            </p>
          </div>
        </Section>
      </section>

      {/* Four-Week Challenge */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-blue-600" />
          四週建立代禱團實踐
        </h2>
        
        {[
          {
            week: 1,
            title: '為自己的禱告生活禱告',
            mission: '這週不要急著找代禱者，而是先檢視自己的禱告生活。如果你自己的禱告生活一團糟，你如何帶領代禱團？每天至少花30分鐘個人禱告，為自己的服事、家庭、靈命守望。',
            practice: '建立禱告日記，記錄你的禱告內容、感動、神的回應。問自己：我的禱告生活是否成為代禱者的榜樣？',
            journal: '我目前的禱告生活狀況如何？有哪些需要改進的地方？',
          },
          {
            week: 2,
            title: '為神揀選代禱者禱告',
            mission: '這週開始為「代禱者」這件事禱告。列出10-15個名字（你教會中靈命成熟、可以信任的人），每天為他們禱告，求神顯明誰是祂揀選的代禱者。',
            practice: '為每個名字禱告時，問神：「這個人適合嗎？」留意聖靈的感動。到週末，將名單縮減到5-7位。',
            journal: '哪些名字讓我有特別的感動？為什麼？',
          },
          {
            week: 3,
            title: '準備邀請內容與架構',
            mission: '這週不要急著邀請，而是先準備好「要說什麼」「如何運作」。寫下：(1)邀請詞（如何說明這個角色）；(2)代禱架構（多久禱告、如何溝通、保密原則）；(3)你會分享哪些代禱需要、哪些不會。',
            practice: '與配偶或屬靈導師討論你的計畫，聽聽他們的建議。修正你的邀請內容，直到清楚、具體。',
            journal: '我準備好了嗎？我的邀請內容夠清楚嗎？',
          },
          {
            week: 4,
            title: '開始一對一邀請',
            mission: '這週開始約候選人見面（或視訊），一對一邀請。每次見面說明：(1)你相信神呼召他成為你的代禱者；(2)這個角色的責任與委身；(3)給他一週時間考慮與禱告；(4)如果他願意，下週開始正式代禱關係。',
            practice: '不要一次約太多人，每週約1-2位就好。尊重對方的決定——如果他說不，感謝他的考慮，不要勉強。',
            journal: '邀請的過程如何？對方的反應如何？我的感受如何？',
          },
        ].map((item, i) => (
          <div key={i} className="bg-blue-50 border-l-4 border-blue-500 rounded-xl p-5 mb-4 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-blue-600 text-white text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center">{item.week}</span>
              <h3 className="font-bold text-blue-900" style={{ fontSize: '17px' }}>第{item.week}週：{item.title}</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4">
                <p className="text-blue-800 font-semibold mb-2" style={{ fontSize: '14px' }}>🎯 本週任務</p>
                <p className="text-gray-700" style={{ fontSize: '14px' }}>{item.mission}</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-indigo-800 font-semibold mb-2" style={{ fontSize: '14px' }}>💡 具體操練</p>
                <p className="text-gray-700" style={{ fontSize: '14px' }}>{item.practice}</p>
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
          <Users className="w-6 h-6 text-blue-600" />
          小組討論問題
        </h2>
        
        <div className="space-y-4">
          <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-5">
            <h3 className="font-bold text-purple-900 mb-3" style={{ fontSize: '16px' }}>🔍 自我省察類</h3>
            <ol className="space-y-2 list-decimal list-inside text-gray-700" style={{ fontSize: '15px' }}>
              <li>如果你是牧師，你會如何開始建立代禱團？你最大的顧慮是什麼？</li>
              <li>如果你是會友，你希望牧師如何邀請你成為代禱者？什麼方式最能打動你？</li>
              <li>回顧你參與的代禱事工，哪些是「有架構」的？哪些是「隨興」的？哪種更有效？</li>
            </ol>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5">
            <h3 className="font-bold text-blue-900 mb-3" style={{ fontSize: '16px' }}>💭 深度思考類</h3>
            <ol className="space-y-2 list-decimal list-inside text-gray-700" style={{ fontSize: '15px' }}>
              <li>為什麼「一對一邀請」比「公開招募」更有效？背後的神學或心理原因是什麼？</li>
              <li>六個常見錯誤中，你認為哪一個最嚴重？為什麼？</li>
              <li>「3-7位」的建議，是否適用於所有教會？大型教會（1000人以上）的牧師是否需要更多代禱者？</li>
            </ol>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-5">
            <h3 className="font-bold text-green-900 mb-3" style={{ fontSize: '16px' }}>🎯 行動應用類</h3>
            <ol className="space-y-2 list-decimal list-inside text-gray-700" style={{ fontSize: '15px' }}>
              <li>如果你要參加四週建立代禱團實踐，你會從哪一週開始？為什麼？</li>
              <li>如果你是牧師，你會邀請誰成為你的代禱者？列出3個名字，說明原因。</li>
              <li>我們小組可以如何支持牧師建立代禱團？（為他禱告？提供建議？成為候選人？）</li>
            </ol>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-5">
            <h3 className="font-bold text-amber-900 mb-3" style={{ fontSize: '16px' }}>🏠 教會層面類</h3>
            <ol className="space-y-2 list-decimal list-inside text-gray-700" style={{ fontSize: '15px' }}>
              <li>我們教會的牧師有個人代禱團嗎？如果有，運作得如何？如果沒有，我們可以如何鼓勵他建立？</li>
              <li>教會應該公開支持「牧師個人代禱團」嗎？還是應該保持低調？為什麼？</li>
              <li>如果要在教會推動「為領袖代禱」的文化，可以從哪裡開始？</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Deep Reflection */}
      <section className="mb-6">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 shadow-xl">
          <h2 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-blue-400" />
            深度反思與行動指南
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Reflection */}
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
              <h3 className="font-bold text-blue-300 mb-4 flex items-center" style={{ fontSize: '18px' }}>
                <Search className="w-5 h-5 mr-2 text-blue-400" /> 深度反思
              </h3>
              <ul className="space-y-4 text-slate-300">
                {[
                  '如果你一直沒有建立代禱團，五年後你的服事會是什麼樣子？你會不會已經倒下了？',
                  '你是否曾經因為「不好意思麻煩人」而拒絕尋求幫助？這背後是謙卑還是驕傲？',
                  '如果耶穌選召十二使徒都需要整夜禱告，你為代禱者禱告了多久？',
                  '你最害怕建立代禱團的哪一部分？邀請？分享真實掙扎？被拒絕？失望？',
                  '想像你的代禱團已經運作三年。那時你與代禱者的關係會是什麼樣子？',
                ].map((q, i) => (
                  <li key={i} className="flex items-start" style={{ fontSize: '15px' }}>
                    <span className="text-blue-400 mr-2 font-bold">{i+1}.</span>
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
                  '今天就開始為自己的禱告生活禱告，每天至少30分鐘。',
                  '這週列出10-15個潛在代禱者的名字，每天為他們禱告。',
                  '與配偶或屬靈導師討論你建立代禱團的計畫，聽聽他們的建議。',
                  '寫下邀請詞與代禱架構，確保清楚、具體、可執行。',
                  '參加四週建立代禱團實踐，按部就班執行。',
                  '開始一對一邀請候選人，給他們時間考慮與禱告。',
                  '建立感謝代禱者的習慣——每個月至少一次公開或私下感謝。',
                ].map((a, i) => (
                  <li key={i} className="flex items-start" style={{ fontSize: '15px' }}>
                    <span className="text-green-400 mr-2 font-bold">{i+1}.</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-blue-900/30 border border-blue-500/30 rounded-xl p-5">
            <p className="text-blue-200 leading-relaxed italic text-center" style={{ fontSize: '16px' }}>
              「不是你選代禱者，而是神選。<br />
              你的責任是尋求、順服、邀請、珍惜。<br />
              問題是：你願意開始這個旅程嗎？」
            </p>
          </div>
        </div>
      </section>

      {/* Original Questions */}
      <section className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-blue-600 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <MessageCircle className="w-6 h-6 text-blue-600" />
          問題迴響（原書）
        </h2>
        <ol className="space-y-3 text-slate-700 list-decimal list-inside" style={{ fontSize: '15px' }}>
          <li>你目前有個人代禱團嗎？如果有，當初是如何建立的？如果沒有，原因是什麼？</li>
          <li>六個步驟中，哪一個對你來說最困難？為什麼？</li>
          <li>六個常見錯誤中，你是否曾經犯過其中一個？結果如何？</li>
          <li>你認為「3-7位」的建議合理嗎？你理想中的人數是多少？</li>
          <li>如果你要開始建立代禱團，你的第一步會是什麼？</li>
        </ol>
      </section>

      {/* Navigation */}
      <div className="mt-4 text-center text-sm text-gray-400">
        <p>— 第七章完 —</p>
      </div>
    </div>
  );
}
