import { useState } from 'react';
import {
  ChevronDown, ChevronRight, Heart, Shield, Users, Target,
  Book, BookOpen, Star, Crown, Lightbulb, CheckCircle,
  AlertTriangle, Zap, Clock, MessageCircle, Search, Eye,
  TrendingUp, Gift, Layers
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

export default function Book10Ch6() {
  const [openType, setOpenType] = useState<number | null>(null);

  const threeTypes = [
    {
      icon: Shield,
      title: 'I型：一般性代禱者（General Intercessors）',
      color: 'indigo',
      definition: '這是最基礎、最普遍的代禱類型。每一位基督徒都應該是一般性代禱者——為教會、為國家、為宣教士、為世界需要禱告。',
      characteristics: [
        '為廣泛的需要禱告',
        '不需要特別的恩賜或呼召',
        '每位信徒都應該操練的基本責任',
        '通常在聚會中、小組中、個人靈修中進行',
      ],
      examples: '主日崇拜中的會眾禱告、小組禱告會、為宣教士的定期代禱、為國家社會的守望禱告。',
      verse: '提摩太前書2:1-2「我勸你，第一要為萬人懇求、禱告、代求、祝謝；為君王和一切在位的，也該如此。」',
      strength: '涵蓋範圍廣、動員人數多、建立教會整體的禱告文化。',
      limitation: '因為範圍廣，往往缺乏深度與持續性；禱告內容可能流於表面、籠統。',
    },
    {
      icon: Heart,
      title: 'II型：危機性代禱者（Crisis Intercessors）',
      color: 'red',
      definition: '當特殊危機發生時，神會呼召一群人暫時性地集中火力代禱——可能是疾病、災難、屬靈爭戰、教會危機等。這種代禱通常是「短期密集」的。',
      characteristics: [
        '針對特定危機、特定時間的代禱',
        '強度高、專注度強',
        '通常是暫時性的（幾週到幾個月）',
        '當危機結束，代禱也會結束',
      ],
      examples: '為重病的肢體禁食禱告、為教會衝突爭戰守望、為宣教士的安全緊急代求、為國家災難的守望禱告。',
      verse: '雅各書5:14-15「你們中間有病了的呢，他就該請教會的長老來；他們可以奉主的名用油抹他，為他禱告。出於信心的祈禱要救那病人，主必叫他起來。」',
      strength: '在關鍵時刻集中屬靈火力，能產生突破性的果效；激發教會同心合意的禱告。',
      limitation: '不是長期的守望；危機過後，代禱者可能因疲憊而退下；難以持續為非危機性的需要守望。',
    },
    {
      icon: Crown,
      title: 'III型：個人性代禱者（Personal Intercessors）',
      color: 'purple',
      definition: '這是本書的重點！個人性代禱者是神特別呼召、為特定的人（通常是牧師或屬靈領袖）長期、深度、忠心守望的代禱勇士。這不只是「恩賜」，更是一種「呼召」與「委身」。',
      characteristics: [
        '為特定的一個人（或少數幾個人）代禱',
        '是長期的、持續的守望（可能數年、甚至一生）',
        '關係深入、了解對方真實需要',
        '常常領受聖靈特別的感動、負擔',
        '願意付代價（時間、精力、甚至屬靈爭戰的痛苦）',
      ],
      examples: '為牧師守望的固定代禱團、為宣教士個人守望的代禱者、為教會特定同工守望的代禱勇士。',
      verse: '出埃及記17:11-12「摩西何時舉手，以色列人就得勝……亞倫與戶珥扶著他的手……他的手就穩住，直到日落的時候。」',
      strength: '深度守望、持續托住、能為具體需要代求、與受代禱者建立深厚的屬靈夥伴關係。',
      limitation: '需要付出極大的代價（時間、情感、屬靈爭戰）；人數通常較少；需要成熟的靈命與穩定的委身。',
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Chapter Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-2xl p-6 mb-8 shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <Layers className="w-7 h-7 text-purple-200" />
          <span className="text-purple-200 font-medium" style={{ fontSize: '14px' }}>第六章</span>
        </div>
        <h1 className="font-bold text-white mb-3" style={{ fontSize: '24px' }}>
          三種類型的代求者
        </h1>
        <p className="text-purple-200 leading-relaxed" style={{ fontSize: '15px' }}>
          不是所有的代禱都一樣。這一章區分三種代禱類型，幫助我們找到神對我們的呼召。
          個人性代禱者是最深入、最委身的守望者——也是本書的核心焦點。
        </p>
      </div>

      {/* Core Verse */}
      <section className="bg-purple-50 border-l-4 border-purple-500 rounded-xl p-5 mb-6 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="w-5 h-5 text-purple-600" />
          <span className="font-bold text-purple-800" style={{ fontSize: '16px' }}>核心經文</span>
        </div>
        <blockquote className="text-purple-900 leading-relaxed italic" style={{ fontSize: '16px' }}>
          「我又告訴你們，若是你們中間有兩個人在地上同心合意地求什麼事，我在天上的父必為他們成全。因為無論在哪裡，有兩三個人奉我的名聚會，那裡就有我在他們中間。」
        </blockquote>
        <p className="text-purple-600 mt-2 font-medium" style={{ fontSize: '14px' }}>馬太福音 18:19-20</p>
      </section>

      {/* Opening Story */}
      <Section title="開場對比：三種代禱者的真實案例" icon={Star} defaultOpen accentColor="indigo">
        <div className="space-y-4">
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
            <h4 className="font-bold text-indigo-900 mb-2" style={{ fontSize: '15px' }}>案例一：一般性代禱者——王姊妹</h4>
            <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
              王姊妹每週參加教會禱告會，為宣教士、為國家、為教會需要禱告。她的代禱涵蓋很廣：從非洲飢荒到教會增長，從政府官員到鄰舍福音。她忠心、熱心，但她自己也承認：「我為很多事禱告，但我不確定哪些禱告真的帶來改變。」
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-bold text-red-900 mb-2" style={{ fontSize: '15px' }}>案例二：危機性代禱者——李弟兄</h4>
            <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
              去年教會面臨重大分裂危機時，李弟兄領受負擔，召集了10位弟兄姊妹每天清晨為教會禁食禱告。三個月的密集守望後，危機化解、關係和好。但當危機過後，這個代禱團自然解散。李弟兄說：「那段時間真的很辛苦，但我知道神呼召我在那個時刻站出來。」
            </p>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-bold text-purple-900 mb-2" style={{ fontSize: '15px' }}>案例三：個人性代禱者——陳姊妹</h4>
            <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
              陳姊妹為她的牧師代禱已經12年了。她每天早上6點起床，第一件事就是為牧師的講道、家庭、健康、屬靈生命守望。牧師不需要告訴她代禱需要，她常常「就是知道」牧師在哪些方面需要守望。
            </p>
            <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
              有一次牧師在週三晚上突然感到極度的屬靈壓迫，心裡有一個聲音說「放棄吧」。隔天早上陳姊妹傳訊息：「牧師，昨晚我突然為你流淚禱告，感覺你正在經歷很大的爭戰。神要我告訴你：不要放棄。」牧師驚訝地回覆：「你怎麼知道？」陳姊妹說：「我不知道細節，但聖靈讓我知道你需要代禱。」
            </p>
          </div>

          <div className="bg-white border-l-4 border-indigo-400 rounded-lg p-4 mt-4">
            <p className="text-indigo-800 font-semibold mb-2" style={{ fontSize: '14px' }}>三者的區別：</p>
            <ul className="space-y-1 text-gray-700" style={{ fontSize: '14px' }}>
              <li>• <strong>廣度 vs 深度：</strong>一般性代禱涵蓋廣，但深度有限；個人性代禱專注於特定對象，深入且持續。</li>
              <li>• <strong>短期 vs 長期：</strong>危機性代禱是暫時性的；個人性代禱是長期的委身。</li>
              <li>• <strong>普遍 vs 特殊：</strong>一般性代禱是每個信徒的責任；個人性代禱是特殊的呼召。</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Three Types Detailed */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Layers className="w-6 h-6 text-purple-600" />
          三種代禱類型詳解
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4" style={{ fontSize: '15px' }}>
          理解這三種類型，可以幫助我們找到自己的定位，也更有效地動員教會的代禱資源。
        </p>
        {threeTypes.map((type, idx) => {
          const Icon = type.icon;
          const isOpen = openType === idx;
          const c = type.color === 'indigo' ? { border: 'border-indigo-400', bg: 'bg-indigo-50', icon: 'text-indigo-600', title: 'text-indigo-900' } :
                    type.color === 'red' ? { border: 'border-red-400', bg: 'bg-red-50', icon: 'text-red-600', title: 'text-red-900' } :
                    { border: 'border-purple-400', bg: 'bg-purple-50', icon: 'text-purple-600', title: 'text-purple-900' };

          return (
            <div key={idx} className={`rounded-xl border-l-4 ${c.border} ${c.bg} mb-3 shadow-sm overflow-hidden`}>
              <button
                className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                onClick={() => setOpenType(isOpen ? null : idx)}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${c.icon} flex-shrink-0`} />
                  <span className={`font-bold ${c.title}`} style={{ fontSize: '16px' }}>{type.title}</span>
                </div>
                {isOpen ? <ChevronDown className={`w-5 h-5 ${c.icon}`} /> : <ChevronRight className={`w-5 h-5 ${c.icon}`} />}
              </button>
              {isOpen && (
                <div className="px-5 pb-5 space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2" style={{ fontSize: '15px' }}>定義：</h4>
                    <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
                      {type.definition}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-2" style={{ fontSize: '15px' }}>特徵：</h4>
                    <ul className="space-y-1">
                      {type.characteristics.map((char, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                          <span className="text-gray-700" style={{ fontSize: '14px' }}>{char}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2" style={{ fontSize: '14px' }}>實例：</h4>
                    <p className="text-gray-700" style={{ fontSize: '14px' }}>{type.examples}</p>
                  </div>

                  <div className="bg-white border-l-4 border-green-400 rounded-lg p-3">
                    <p className="text-gray-600 italic mb-1" style={{ fontSize: '14px' }}><strong>經文：</strong></p>
                    <p className="text-gray-700" style={{ fontSize: '14px' }}>{type.verse}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-white border border-green-200 rounded-lg p-3">
                      <h5 className="font-bold text-green-800 mb-1" style={{ fontSize: '13px' }}>✓ 優勢：</h5>
                      <p className="text-gray-700" style={{ fontSize: '13px' }}>{type.strength}</p>
                    </div>
                    <div className="bg-white border border-amber-200 rounded-lg p-3">
                      <h5 className="font-bold text-amber-800 mb-1" style={{ fontSize: '13px' }}>⚠ 限制：</h5>
                      <p className="text-gray-700" style={{ fontSize: '13px' }}>{type.limitation}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* Why Focus on Type III */}
      <Section title="為何本書聚焦於「個人性代禱者」？" icon={Target} defaultOpen accentColor="purple">
        <p className="text-gray-700 leading-relaxed mb-4" style={{ fontSize: '16px' }}>
          瓦格納不是說其他兩種代禱不重要，而是指出：<strong>個人性代禱者是最被忽略、最被低估、卻最具影響力的守望者。</strong>
        </p>
        <div className="space-y-3 mb-4">
          {[
            { reason: '教會通常重視「一般性代禱」（禱告會）', but: '但往往缺乏「深度」與「持續性」' },
            { reason: '教會在危機時會動員「危機性代禱」', but: '但危機過後，代禱的熱情也冷卻了' },
            { reason: '個人性代禱者是「隱藏的英雄」', but: '他們默默守望，卻很少被看見、被肯定' },
          ].map((item, i) => (
            <div key={i} className="bg-purple-50 border border-purple-100 rounded-lg p-3">
              <p className="text-purple-900 mb-1" style={{ fontSize: '14px' }}>
                <strong>{i+1}. {item.reason}</strong>
              </p>
              <p className="text-gray-700" style={{ fontSize: '14px' }}>
                → {item.but}
              </p>
            </div>
          ))}
        </div>
        <div className="bg-white border-l-4 border-purple-400 rounded-lg p-4">
          <p className="text-purple-800 font-semibold mb-2" style={{ fontSize: '15px' }}>瓦格納的核心主張：</p>
          <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
            「如果每一位牧師都有3-5位忠心的個人性代禱者，長期、深度、具體地為他守望，牧師的服事效能將大幅提升，教會的屬靈能力將明顯增強，許多道德失敗和事工危機也能被預防。」
          </p>
        </div>
      </Section>

      {/* Comparison Table */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">三種代禱者比較表</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left font-bold text-gray-700" style={{ fontSize: '14px' }}>項目</th>
                <th className="p-3 text-left font-bold text-indigo-700" style={{ fontSize: '14px' }}>I型：一般性</th>
                <th className="p-3 text-left font-bold text-red-700" style={{ fontSize: '14px' }}>II型：危機性</th>
                <th className="p-3 text-left font-bold text-purple-700" style={{ fontSize: '14px' }}>III型：個人性</th>
              </tr>
            </thead>
            <tbody>
              {[
                { item: '對象', t1: '廣泛（國家、教會、世界）', t2: '特定危機事件', t3: '特定個人（牧師/領袖）' },
                { item: '時間', t1: '隨機、不定期', t2: '短期密集（數週-數月）', t3: '長期持續（數年-一生）' },
                { item: '深度', t1: '淺（表面性）', t2: '中（專注但暫時）', t3: '深（深入且持續）' },
                { item: '關係', t1: '距離較遠', t2: '暫時連結', t3: '深厚的屬靈夥伴' },
                { item: '人數', t1: '多', t2: '中', t3: '少' },
                { item: '呼召', t1: '每個信徒都應該做', t2: '特定時刻的負擔', t3: '特殊的呼召與恩賜' },
                { item: '果效', t1: '廣泛但不深入', t2: '關鍵時刻突破', t3: '持續托住、深度影響' },
              ].map((row, i) => (
                <tr key={i} className="border-t border-gray-200">
                  <td className="p-3 font-semibold text-gray-700" style={{ fontSize: '13px' }}>{row.item}</td>
                  <td className="p-3 text-gray-600" style={{ fontSize: '13px' }}>{row.t1}</td>
                  <td className="p-3 text-gray-600" style={{ fontSize: '13px' }}>{row.t2}</td>
                  <td className="p-3 text-gray-600" style={{ fontSize: '13px' }}>{row.t3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Chapter Summary */}
      <section className="bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-xl shadow-md border-2 border-purple-600 mb-6">
        <div className="flex items-center mb-4 text-purple-900">
          <MessageCircle className="w-6 h-6 mr-2" />
          <h2 className="text-xl font-bold">本章總結</h2>
        </div>
        <div className="text-slate-800 space-y-3 leading-relaxed">
          <p>
            這一章區分了三種代禱類型：<strong className="text-purple-900">一般性代禱、危機性代禱、個人性代禱</strong>。三者都重要，但功能不同。
          </p>
          <p>
            一般性代禱建立教會的禱告文化，危機性代禱在關鍵時刻集中火力，但<strong className="text-purple-900">個人性代禱是最深入、最持續、最具影響力的守望方式</strong>。
          </p>
          <p>
            個人性代禱者不是「超級屬靈人」,而是願意為特定的人長期、深度、忠心守望的委身者。他們是牧師的「亞倫與戶珥」,在牧師手發沉時扶住他的手。
          </p>
          <p>
            <strong className="text-purple-900">問題是：你願意成為哪一種代禱者？神是否正在呼召你成為某個人的個人性代禱者？</strong>
          </p>
        </div>
      </section>

      {/* Theological Depth */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Book className="w-6 h-6 text-purple-600" />
          神學深度探討
        </h2>
        
        <Section title="一、恩賜的多樣性：哥林多前書12章的身體比喻" icon={Layers} accentColor="indigo">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            保羅在哥林多前書12章說：「恩賜原有分別，聖靈卻是一位……這人蒙聖靈賜他智慧的言語，那人也蒙這位聖靈賜他知識的言語。」(林前12:4,8)
          </p>
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-3">
            <p className="text-indigo-900 font-semibold mb-2" style={{ fontSize: '14px' }}>神學洞察：</p>
            <p className="text-indigo-800" style={{ fontSize: '14px' }}>
              三種代禱類型反映了聖靈恩賜的多樣性。不是每個人都有同樣的代禱呼召，就像不是每個肢體都是「眼睛」或「手」。一般性代禱是「基礎恩賜」（每個信徒都應該操練），危機性代禱是「特殊時刻的恩賜」，個人性代禱則是「專業化的恩賜」。
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
            理解這個區分，可以避免兩種極端：(1)認為「每個人都應該成為個人性代禱者」（這會帶來罪疚感）；(2)認為「我只要做一般性代禱就好」（這可能錯過神的特殊呼召）。
          </p>
        </Section>

        <Section title="二、代禱作為屬靈爭戰的核心武器" icon={Shield} accentColor="red">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            以弗所書6:18說：「靠著聖靈，隨時多方禱告祈求；並要在此警醒不倦，為眾聖徒祈求。」這節經文緊接在「全副軍裝」的描述之後——代禱本身就是屬靈爭戰的核心武器。
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-3">
            <p className="text-red-900 font-semibold mb-2" style={{ fontSize: '14px' }}>三種代禱在爭戰中的角色：</p>
            <ul className="space-y-1 text-red-800" style={{ fontSize: '14px' }}>
              <li>• <strong>一般性代禱：</strong>像「防禦工事」，為廣泛的戰線禱告，建立整體的保護</li>
              <li>• <strong>危機性代禱：</strong>像「特種部隊」，在關鍵戰役中集中火力突破</li>
              <li>• <strong>個人性代禱：</strong>像「貼身保鏢」，專注保護特定的指揮官（屬靈領袖）</li>
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
            撒但的策略是「擊打牧人」（撒迦利亞13:7）。如果屬靈領袖倒下，整個教會就會分散。個人性代禱者的角色，就是站在領袖與攻擊之間，用禱告建立保護的牆垣。
          </p>
        </Section>

        <Section title="三、祭司職分：利未記的獻祭神學" icon={Heart} accentColor="purple">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            舊約中的祭司有兩個主要職責：(1)為百姓獻祭，(2)為百姓代求。新約說每個信徒都是「君尊的祭司」（彼前2:9），意味著我們都有代求的職責。
          </p>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-3">
            <p className="text-purple-900 font-semibold mb-2" style={{ fontSize: '14px' }}>三種代禱與祭司職分：</p>
            <p className="text-purple-800 mb-2" style={{ fontSize: '14px' }}>
              <strong>一般性代禱：</strong>像「平信徒的祭司職分」——每個人都應該操練的基本責任
            </p>
            <p className="text-purple-800 mb-2" style={{ fontSize: '14px' }}>
              <strong>危機性代禱：</strong>像「利未人的特殊任務」——在特定時刻被呼召執行特殊使命
            </p>
            <p className="text-purple-800" style={{ fontSize: '14px' }}>
              <strong>個人性代禱：</strong>像「大祭司的職分」——專門、深入、持續地為神的百姓守望
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
            希伯來書7:25說，耶穌「長遠活著，替他們祈求」。個人性代禱者效法基督的中保職分，為特定的人持續守望。
          </p>
        </Section>

        <Section title="四、呼召的確據：如何分辨神的引導" icon={Lightbulb} accentColor="amber">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            有人問：「我怎麼知道神呼召我成為個人性代禱者？」這是一個重要的問題，因為不是每個人都有這樣的呼召。
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-3">
            <p className="text-amber-900 font-semibold mb-2" style={{ fontSize: '14px' }}>辨別呼召的指標：</p>
            <ul className="space-y-2 text-amber-800" style={{ fontSize: '14px' }}>
              <li>• <strong>持續的負擔：</strong>不是一時的感動，而是持續數週、數月都無法放下的負擔</li>
              <li>• <strong>聖靈的感動：</strong>在禱告中常常想到某個人，甚至在意想不到的時刻領受為他代禱的感動</li>
              <li>• <strong>內心的平安：</strong>當你為這個人禱告時，感到深層的平安與喜樂</li>
              <li>• <strong>印證的果效：</strong>你的禱告常常帶來具體的果效，對方也見證代禱的幫助</li>
              <li>• <strong>願意付代價：</strong>即使知道這需要時間、精力、甚至屬靈爭戰的痛苦，你仍然願意</li>
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
            重要的是：呼召不是「強迫」，而是「邀請」。神不會勉強你成為個人性代禱者，但祂會清楚地引導那些被祂揀選的人。
          </p>
        </Section>
      </section>

      {/* Taiwan Context */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Users className="w-6 h-6 text-purple-600" />
          華人教會處境應用
        </h2>

        <Section title="情境一：「集體主義」vs「個人化」的張力" icon={Users} accentColor="indigo">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            華人文化強調集體主義，教會也習慣「大家一起禱告」的模式（禱告會、聯禱會）。這是一般性代禱的優勢，但也可能忽略了「個人化、深度化」的代禱需要。
          </p>
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            結果是：教會有很多禱告活動，但牧師仍然感到孤單，因為沒有人真正深入了解他的掙扎、為他的具體需要守望。
          </p>
          <div className="bg-white border-l-4 border-indigo-400 rounded-lg p-4">
            <p className="text-indigo-800 font-semibold mb-2" style={{ fontSize: '14px' }}>平衡之道：</p>
            <p className="text-indigo-700" style={{ fontSize: '14px' }}>
              不是放棄集體禱告，而是在集體禱告之外，發展「個人性代禱網絡」。讓每位牧師都有3-5位可以深入分享、長期守望的代禱者。
            </p>
          </div>
        </Section>

        <Section title="情境二：台灣教會的「志工文化」挑戰" icon={Clock} accentColor="red">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            台灣教會常把代禱視為「眾多服事之一」：主日學老師、敬拜團、招待組、代禱組……代禱變成「志工輪值」，而非「長期呼召」。
          </p>
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            這種文化下，危機性代禱容易動員（短期任務），但個人性代禱很難建立（需要長期委身）。
          </p>
          <div className="bg-white border-l-4 border-red-400 rounded-lg p-4">
            <p className="text-red-800 font-semibold mb-2" style={{ fontSize: '14px' }}>重新定義：</p>
            <p className="text-red-700" style={{ fontSize: '14px' }}>
              個人性代禱不是「服事項目」，而是「屬靈呼召」。不是「我這個月輪到為牧師禱告」，而是「神呼召我長期為這位牧師守望」。這需要教會重新教育會眾：代禱是恩賜，不只是工作。
            </p>
          </div>
        </Section>

        <Section title="情境三：「名人牧師」vs「小教會牧師」的代禱落差" icon={Eye} accentColor="purple">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            台灣有些「名人牧師」擁有龐大的代禱網絡，但更多的小教會牧師（30-50人的教會）卻幾乎沒有個人性代禱者。
          </p>
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            諷刺的是：小教會牧師往往更孤單、更疲憊、更需要代禱的遮蓋，但他們最容易被忽略。
          </p>
          <div className="bg-white border-l-4 border-purple-400 rounded-lg p-4">
            <p className="text-purple-800 font-semibold mb-2" style={{ fontSize: '14px' }}>關注弱小：</p>
            <p className="text-purple-700" style={{ fontSize: '14px' }}>
              教會需要主動關心那些「隱藏的牧者」——小教會的牧師、偏鄉的傳道人、獨立宣教士。他們可能沒有龐大的會眾基礎，但他們同樣需要（甚至更需要）個人性代禱者的守望。
            </p>
          </div>
        </Section>

        <Section title="情境四：危機性代禱後的「倦怠期」" icon={AlertTriangle} accentColor="amber">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            台灣教會常在重大危機時動員密集代禱（如疫情、天災、教會衝突）。但當危機過後，代禱的熱情也跟著冷卻。
          </p>
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            更危險的是：危機性代禱者在密集守望後，常會進入「倦怠期」——覺得疲憊、失去負擔、甚至質疑禱告的功效。
          </p>
          <div className="bg-white border-l-4 border-amber-400 rounded-lg p-4">
            <p className="text-amber-800 font-semibold mb-2" style={{ fontSize: '14px' }}>避免倦怠：</p>
            <p className="text-amber-700" style={{ fontSize: '14px' }}>
              (1)危機性代禱不應該由同一批人持續承擔，要輪替休息；(2)危機過後，要給代禱者「恢復期」，不要立刻投入下一個任務；(3)個人性代禱者因為是長期呼召，反而比較不會倦怠——他們的節奏是「馬拉松」，不是「百米衝刺」。
            </p>
          </div>
        </Section>

        <Section title="情境五：後疫情時代的「線上代禱團」" icon={Zap} accentColor="green">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            COVID-19疫情加速了「線上化」。許多教會開始建立「線上代禱群組」（LINE、WhatsApp、Facebook），讓代禱者即時分享代禱事項、彼此守望。
          </p>
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            這有優勢（突破地理限制、即時回應），但也有風險：線上代禱容易流於表面、缺乏深度關係、難以保密。
          </p>
          <div className="bg-white border-l-4 border-green-400 rounded-lg p-4">
            <p className="text-green-800 font-semibold mb-2" style={{ fontSize: '14px' }}>線上+線下結合：</p>
            <p className="text-green-700" style={{ fontSize: '14px' }}>
              個人性代禱者可以利用線上工具保持聯繫（如每週傳訊息分享代禱需要），但仍需要定期的「面對面」或「視訊深談」，建立真實的關係與信任。線上是工具，不是替代品。
            </p>
          </div>
        </Section>
      </section>

      {/* Four-Week Challenge */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Target className="w-6 h-6 text-purple-600" />
          四週辨別呼召挑戰
        </h2>
        
        {[
          {
            week: 1,
            title: '評估你目前的代禱類型',
            mission: '誠實回顧過去一年你的代禱生活：你主要是哪一種類型的代禱者？你的代禱是廣泛但淺層（一般性），還是短期密集（危機性），還是長期深入（個人性）？',
            practice: '列出你過去一年為哪些人事物代禱，分類到三種類型中。觀察：你的代禱生活是否失衡？是否缺少某一種類型？',
            journal: '我最常做哪一種類型的代禱？我最少做哪一種？為什麼？',
          },
          {
            week: 2,
            title: '安靜聆聽：神是否在呼召我？',
            mission: '這週特別為「個人性代禱」的呼召禱告。問神：「祢是否呼召我成為某個人的個人性代禱者？」不要急著找答案，只要安靜聆聽。',
            practice: '每天花10分鐘安靜在神面前，問：「主啊，有誰的名字不斷出現在我心中？」如果有，記錄下來，但不要立刻行動，繼續為這個感動禱告。',
            journal: '我心中是否有持續的負擔？有沒有某個人的名字一直出現？我對這個感動的感覺如何？',
          },
          {
            week: 3,
            title: '印證呼召：尋求確據',
            mission: '如果上週你領受了某個人的名字，這週為這個感動尋求印證。你可以：(1)與屬靈導師或成熟信徒分享，聽他們的看法；(2)為這個人禱告一週，觀察你的內心是否有平安；(3)尋求神透過聖經、環境、其他人的話給你確據。',
            practice: '為那個人禱告7天，每天至少5分鐘。記錄你禱告時的感受、領受的經文、發生的事。如果7天後你仍然有平安與負擔，這可能是神的呼召。',
            journal: '禱告7天後，我的負擔增強了還是減弱了？我有沒有得到任何印證？',
          },
          {
            week: 4,
            title: '邁出第一步：委身或放下',
            mission: '根據過去三週的尋求，做出決定：(1)如果確定神的呼召，就向那個人表達你願意成為他的個人性代禱者；(2)如果沒有清楚的呼召，就放下這個感動，繼續忠心做一般性代禱者。兩種都是對的回應。',
            practice: '如果確定呼召，這週約那個人見面（或視訊），告訴他：「我相信神呼召我成為你的個人性代禱者。你願意接受嗎？」然後討論如何開始。',
            journal: '我做出了什麼決定？我的感受如何？如果開始了，我的第一步是什麼？',
          },
        ].map((item, i) => (
          <div key={i} className="bg-purple-50 border-l-4 border-purple-500 rounded-xl p-5 mb-4 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-purple-600 text-white text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center">{item.week}</span>
              <h3 className="font-bold text-purple-900" style={{ fontSize: '17px' }}>第{item.week}週：{item.title}</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4">
                <p className="text-purple-800 font-semibold mb-2" style={{ fontSize: '14px' }}>🎯 本週任務</p>
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
          <Users className="w-6 h-6 text-purple-600" />
          小組討論問題
        </h2>
        
        <div className="space-y-4">
          <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-5">
            <h3 className="font-bold text-purple-900 mb-3" style={{ fontSize: '16px' }}>🔍 自我省察類</h3>
            <ol className="space-y-2 list-decimal list-inside text-gray-700" style={{ fontSize: '15px' }}>
              <li>你目前主要是哪一種類型的代禱者？你滿意這個狀態嗎？</li>
              <li>回顧過去，你是否曾經經歷過「危機性代禱」？那次經驗如何？</li>
              <li>讀完三種類型的描述，你內心是否對「個人性代禱」有特別的共鳴或負擔？</li>
            </ol>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5">
            <h3 className="font-bold text-blue-900 mb-3" style={{ fontSize: '16px' }}>💭 深度思考類</h3>
            <ol className="space-y-2 list-decimal list-inside text-gray-700" style={{ fontSize: '15px' }}>
              <li>為什麼「個人性代禱者」的人數通常最少？是因為呼召少，還是因為願意回應的人少？</li>
              <li>三種類型的代禱者，哪一種對教會最重要？還是三者都同等重要？</li>
              <li>如果一個人同時是三種類型的代禱者（既做一般性，也做危機性，也做個人性），會不會過度負荷？如何平衡？</li>
            </ol>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-5">
            <h3 className="font-bold text-green-900 mb-3" style={{ fontSize: '16px' }}>🎯 行動應用類</h3>
            <ol className="space-y-2 list-decimal list-inside text-gray-700" style={{ fontSize: '15px' }}>
              <li>你願意參加四週辨別呼召挑戰嗎？你覺得哪一週對你來說最困難？</li>
              <li>如果神呼召你成為個人性代禱者，你最大的顧慮是什麼？（時間？能力？不確定？）</li>
              <li>我們小組可以如何一起建立健康的「三種代禱」文化？（集體一般性、動員危機性、鼓勵個人性）</li>
            </ol>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-5">
            <h3 className="font-bold text-amber-900 mb-3" style={{ fontSize: '16px' }}>🏠 教會層面類</h3>
            <ol className="space-y-2 list-decimal list-inside text-gray-700" style={{ fontSize: '15px' }}>
              <li>我們教會目前的代禱事工，主要屬於哪一種類型？是否失衡？</li>
              <li>教會應該如何辨識、培養、支持那些有「個人性代禱」呼召的人？</li>
              <li>如果要建立「牧師個人性代禱團」，我們可以從哪裡開始？需要哪些資源？</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Deep Reflection */}
      <section className="mb-6">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 shadow-xl">
          <h2 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-purple-400" />
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
                  '如果神真的呼召你成為個人性代禱者，但你拒絕了，會錯過什麼？那個人會失去什麼？',
                  '你是否曾經羨慕那些「恩賜很明顯」的人（講道、敬拜、醫治）？代禱是「隱藏的恩賜」，你願意嗎？',
                  '想像你是牧師，你希望有怎樣的代禱者為你守望？你願意成為那樣的代禱者嗎？',
                  '三種代禱類型中，你最害怕哪一種？為什麼？這個害怕背後是什麼？',
                  '如果你一生只能選擇一種代禱類型專注做好，你會選哪一種？為什麼？',
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
                  '今天就評估你目前的代禱生活：列出你為哪些人事物代禱，分類到三種類型。',
                  '為「個人性代禱呼召」禱告一週，問神：「祢是否呼召我成為某個人的守望者？」',
                  '如果你已經是個人性代禱者，檢視你的委身：是否疲憊？是否需要調整？是否需要增加夥伴？',
                  '與牧師或屬靈導師分享你對代禱的負擔，聽聽他們的建議與印證。',
                  '參加四週辨別呼召挑戰，認真記錄每一步的感動與印證。',
                  '如果確定呼召，勇敢邁出第一步：告訴那個人你願意成為他的代禱者。',
                  '建立代禱日記，記錄你的代禱內容、感動、神的回應——這會成為你的見證。',
                ].map((a, i) => (
                  <li key={i} className="flex items-start" style={{ fontSize: '15px' }}>
                    <span className="text-green-400 mr-2 font-bold">{i+1}.</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-purple-900/30 border border-purple-500/30 rounded-xl p-5">
            <p className="text-purple-200 leading-relaxed italic text-center" style={{ fontSize: '16px' }}>
              「不是每個人都被呼召成為個人性代禱者，<br />
              但每個被呼召的人，都會帶來深遠的影響。<br />
              問題是：如果神呼召你，你願意回應嗎？」
            </p>
          </div>
        </div>
      </section>

      {/* Original Questions */}
      <section className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-purple-600 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <MessageCircle className="w-6 h-6 text-purple-600" />
          問題迴響（原書）
        </h2>
        <ol className="space-y-3 text-slate-700 list-decimal list-inside" style={{ fontSize: '15px' }}>
          <li>你目前主要是哪一種類型的代禱者？為什麼？</li>
          <li>三種類型中，你認為哪一種最符合你目前的靈命狀態與生活處境？</li>
          <li>你是否曾經經歷過「危機性代禱」？那次經驗如何？</li>
          <li>「個人性代禱者」的描述，是否激起你內心的共鳴或負擔？</li>
          <li>你認為教會應該如何平衡三種代禱類型的發展？</li>
        </ol>
      </section>

      {/* Navigation */}
      <div className="mt-4 text-center text-sm text-gray-400">
        <p>— 第六章完 —</p>
      </div>
    </div>
  );
}
