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

export default function Book10Ch8() {
  const [openCharacteristic, setOpenCharacteristic] = useState<number | null>(null);

  const characteristics = [
    {
      icon: Heart,
      title: '特徵一：有從神而來的負擔與呼召',
      color: 'purple',
      description: '個人性代禱者不是「志願」加入，而是「被神呼召」。他們心中有一個持續的、無法忽視的負擔，要為特定的人守望。這不是一時的感動，而是深層的、長期的負擔。',
      signs: [
        '在禱告中常常想到某個人（牧師或領袖），即使沒有特別的代禱事項',
        '聽到這個人的名字或消息時，心中會有「我要為他禱告」的感動',
        '即使很忙、很累，仍然願意為這個人騰出時間禱告',
        '為這個人禱告時，感到深層的平安與喜樂',
      ],
      notSigns: '不是因為「牧師很棒，我很崇拜他」（那是粉絲心態），也不是因為「我應該為牧師禱告」（那是義務感），而是聖靈在心中放下的真實負擔。',
      verse: '使徒行傳 13:2「他們事奉主、禁食的時候，聖靈說：要為我分派巴拿巴和掃羅，去做我召他們所做的工。」',
    },
    {
      icon: Shield,
      title: '特徵二：願意付代價、長期委身',
      color: 'red',
      description: '個人性代禱不是「短期任務」，而是「長期呼召」。可能是幾年、十幾年、甚至一生。這需要極大的委身——願意持續守望，即使看不見立即的果效、即使經歷屬靈爭戰的痛苦。',
      signs: [
        '願意每天或每週固定為這個人禱告，即使生活很忙碌',
        '當這個人經歷困難或攻擊時，願意加倍守望（甚至禁食禱告）',
        '不會因為短期內「看不見果效」就放棄',
        '願意承受屬靈爭戰的壓力（例如：為牧師禱告時感到屬靈壓迫、疲憊）',
      ],
      notSigns: '不是「三分鐘熱度」的人，也不是「看心情禱告」的人。委身意味著：無論順境逆境，都持續守望。',
      verse: '加拉太書 6:9「我們行善，不可喪志；若不灰心，到了時候就要收成。」',
    },
    {
      icon: Eye,
      title: '特徵三：屬靈敏銳度與辨別力',
      color: 'indigo',
      description: '優秀的代禱者常常能「感知」到牧師的屬靈狀態，即使牧師沒有說出來。他們能分辨什麼時候牧師正在經歷爭戰、什麼時候需要鼓勵、什麼時候需要安靜守望。',
      signs: [
        '常常在「正確的時間」為「正確的事」禱告——雖然不知道細節，但聖靈引導他們的禱告',
        '能從牧師的語氣、表情、甚至沉默中，感受到他的真實狀態',
        '在禱告中領受聖靈的感動、經文、或異象，後來證實與牧師的需要吻合',
        '能分辨哪些是真正的屬靈攻擊，哪些只是正常的壓力或疲憊',
      ],
      notSigns: '這不是「通靈」或「神秘主義」，而是聖靈賜予的屬靈洞察力。而且，這種敏銳度是可以培養的——透過親近神、熟悉聖經、與牧師建立深入關係。',
      verse: '哥林多前書 2:10「只有神藉著聖靈向我們顯明了，因為聖靈參透萬事，就是神深奧的事也參透了。」',
    },
    {
      icon: Users,
      title: '特徵四：靈命成熟、品格穩定',
      color: 'green',
      description: '個人性代禱者需要靈命成熟，因為他們會知道牧師的軟弱、掙扎、甚至失敗。不成熟的人可能會論斷、傳播八卦、或失去對牧師的尊重。',
      signs: [
        '能「守密」——牧師分享的私事絕對不會外傳',
        '能「不論斷」——即使看見牧師的軟弱，仍然愛他、為他禱告、不批評',
        '能「鼓勵而非論斷」——在必要時溫柔提醒，而非定罪或攻擊',
        '自己的屬靈生活穩定——有穩定的禱告、讀經、聚會習慣',
      ],
      notSigns: '不是「完美的人」（沒有人完美），而是「成熟的人」——知道如何處理軟弱、如何保守舌頭、如何在愛中說誠實話。',
      verse: '雅各書 3:17「惟獨從上頭來的智慧，先是清潔，後是和平，溫良柔順，滿有憐憫，多結善果，沒有偏見，沒有假冒。」',
    },
    {
      icon: Gift,
      title: '特徵五：謙卑、不求名聲',
      color: 'amber',
      description: '個人性代禱者是「隱藏的英雄」。他們不求被看見、不求被肯定、不求特殊待遇。他們的獎賞在天上，不在地上。',
      signs: [
        '不會到處宣揚「我是牧師的代禱者」',
        '不會因為「我為牧師禱告」就期待特殊對待（優先探訪、特別關照）',
        '當牧師的服事有果效時，默默感恩，不居功',
        '即使從不被公開感謝，仍然忠心守望',
      ],
      notSigns: '不是「想接近牧師」「想被重視」「想有影響力」的人。如果動機不純，代禱關係會變質。',
      verse: '馬太福音 6:6「你禱告的時候，要進你的內屋，關上門，禱告你在暗中的父；你父在暗中察看，必然報答你。」',
    },
    {
      icon: Compass,
      title: '特徵六：與受代禱者有深厚的信任關係',
      color: 'blue',
      description: '個人性代禱不只是「為一個人禱告」，而是「與一個人同行」。代禱者與牧師之間需要建立深厚的信任關係——彼此了解、彼此尊重、彼此守望。',
      signs: [
        '與牧師有定期的溝通（見面、電話、訊息），不只是「收到代禱信」',
        '牧師願意對他們分享真實的掙扎（不只是表面的代禱事項）',
        '他們也願意對牧師敞開自己的生命，彼此守望',
        '這種關係是「雙向的」——不只是代禱者服事牧師，牧師也關心代禱者',
      ],
      notSigns: '不是「遠距離的陌生人」。如果代禱者與牧師沒有真實的關係，代禱只能停留在表面。',
      verse: '箴言 17:17「朋友乃時常親愛，弟兄為患難而生。」',
    },
    {
      icon: Zap,
      title: '特徵七：經歷代禱的果效與見證',
      color: 'purple',
      description: '雖然不是每次禱告都會立刻看見果效，但長期忠心的代禱者，通常會經歷「代禱蒙應允」的見證——看見神如何透過他們的禱告，保護牧師、突破困境、帶來復興。',
      signs: [
        '牧師曾經見證：「那段時間我正在經歷爭戰，感謝你的守望」',
        '代禱者自己經歷：「我為牧師禱告的事，後來真的發生了」',
        '教會或服事出現明顯的突破、增長、或復興',
        '這些見證成為代禱者繼續守望的動力',
      ],
      notSigns: '不是「每次禱告都立刻靈驗」（那是迷信），而是「長期看見神的作為」。有時候，果效要數年後才會顯明。',
      verse: '雅各書 5:16「義人祈禱所發的力量是大有功效的。」',
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Chapter Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-2xl p-6 mb-8 shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <Award className="w-7 h-7 text-indigo-200" />
          <span className="text-indigo-200 font-medium" style={{ fontSize: '14px' }}>第八章</span>
        </div>
        <h1 className="font-bold text-white mb-3" style={{ fontSize: '24px' }}>
          個人代禱者的輪廓特徵
        </h1>
        <p className="text-indigo-200 leading-relaxed" style={{ fontSize: '15px' }}>
          什麼樣的人適合成為個人性代禱者？這一章描繪七個關鍵特徵，
          幫助我們辨識神所呼召的代禱勇士，也幫助我們自我檢視。
        </p>
      </div>

      {/* Core Verse */}
      <section className="bg-indigo-50 border-l-4 border-indigo-500 rounded-xl p-5 mb-6 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="w-5 h-5 text-indigo-600" />
          <span className="font-bold text-indigo-800" style={{ fontSize: '16px' }}>核心經文</span>
        </div>
        <blockquote className="text-indigo-900 leading-relaxed italic" style={{ fontSize: '16px' }}>
          「我在他們中間尋找一人重修牆垣，在我面前為這國站在破口防堵，使我不滅絕這國，卻找不著一個。」
        </blockquote>
        <p className="text-indigo-600 mt-2 font-medium" style={{ fontSize: '14px' }}>以西結書 22:30</p>
      </section>

      {/* Opening Story */}
      <Section title="開場故事：一位理想代禱者的畫像" icon={Star} defaultOpen accentColor="purple">
        <p className="text-gray-700 leading-relaxed mb-4" style={{ fontSize: '16px' }}>
          瑪麗（化名）是一位退休的小學老師，70多歲。她不是教會的長執、不在台上服事、講話也不多。但她的牧師說：「瑪麗是我最寶貴的代禱者之一。」
        </p>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
          <p className="text-purple-900 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            <strong>她的故事：</strong>12年前，瑪麗在禱告中領受強烈的感動，要為她的牧師守望。她主動找牧師，說：「我相信神呼召我為您代禱。我不知道為什麼，但這個負擔很清楚。您願意接受嗎？」
          </p>
          <p className="text-purple-900 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            牧師答應了。從那天開始，瑪麗每天早上6點起床，第一件事就是為牧師禱告30分鐘。她不求被看見、不求特殊待遇。她只是忠心守望。
          </p>
          <p className="text-purple-900 leading-relaxed" style={{ fontSize: '15px' }}>
            12年來，她經歷了無數次「不可思議的巧合」：她為牧師的某個掙扎禱告，後來發現牧師那天正在面對那個試探；她突然在半夜醒來為牧師禱告，隔天得知牧師的家人那時正在急診室。
          </p>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4" style={{ fontSize: '16px' }}>
          牧師說：「瑪麗不是完美的人，但她是神揀選的代禱者。她有負擔、有委身、有屬靈敏銳度、有成熟的品格、有謙卑的心。這就是個人性代禱者的樣子。」
        </p>
        <div className="bg-white border-l-4 border-indigo-400 rounded-lg p-4">
          <p className="text-indigo-800 font-semibold mb-2" style={{ fontSize: '15px' }}>這個故事告訴我們：</p>
          <ul className="space-y-1 text-gray-700" style={{ fontSize: '14px' }}>
            <li>• 個人性代禱者不一定是「屬靈名人」，可能是安靜、不起眼的人</li>
            <li>• 呼召是真實的——神會清楚地引導那些被揀選的人</li>
            <li>• 忠心比恩賜更重要——12年如一日的守望，勝過偶爾的「大能禱告」</li>
            <li>• 代禱的果效是真實的——禱告真的會改變屬靈局勢</li>
          </ul>
        </div>
      </Section>

      {/* Seven Characteristics */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Compass className="w-6 h-6 text-indigo-600" />
          七個關鍵特徵
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4" style={{ fontSize: '15px' }}>
          這七個特徵不是「完美的標準」（沒有人完全符合），而是「理想的輪廓」。
          它們幫助我們辨識誰適合成為個人性代禱者，也幫助我們自我檢視與成長。
        </p>
        {characteristics.map((char, idx) => {
          const Icon = char.icon;
          const isOpen = openCharacteristic === idx;
          const c = char.color === 'purple' ? { border: 'border-purple-400', bg: 'bg-purple-50', icon: 'text-purple-600', title: 'text-purple-900' } :
                    char.color === 'red' ? { border: 'border-red-400', bg: 'bg-red-50', icon: 'text-red-600', title: 'text-red-900' } :
                    char.color === 'indigo' ? { border: 'border-indigo-400', bg: 'bg-indigo-50', icon: 'text-indigo-600', title: 'text-indigo-900' } :
                    char.color === 'green' ? { border: 'border-green-400', bg: 'bg-green-50', icon: 'text-green-600', title: 'text-green-900' } :
                    char.color === 'amber' ? { border: 'border-amber-400', bg: 'bg-amber-50', icon: 'text-amber-600', title: 'text-amber-900' } :
                    { border: 'border-blue-400', bg: 'bg-blue-50', icon: 'text-blue-600', title: 'text-blue-900' };

          return (
            <div key={idx} className={`rounded-xl border-l-4 ${c.border} ${c.bg} mb-3 shadow-sm overflow-hidden`}>
              <button
                className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                onClick={() => setOpenCharacteristic(isOpen ? null : idx)}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${c.icon} flex-shrink-0`} />
                  <span className={`font-bold ${c.title}`} style={{ fontSize: '16px' }}>{char.title}</span>
                </div>
                {isOpen ? <ChevronDown className={`w-5 h-5 ${c.icon}`} /> : <ChevronRight className={`w-5 h-5 ${c.icon}`} />}
              </button>
              {isOpen && (
                <div className="px-5 pb-5 space-y-4">
                  <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
                    {char.description}
                  </p>

                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2" style={{ fontSize: '14px' }}>✓ 具備這個特徵的表現：</h4>
                    <ul className="space-y-2">
                      {char.signs.map((sign, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                          <span className="text-gray-700" style={{ fontSize: '14px' }}>{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white border-l-4 border-amber-400 rounded-lg p-3">
                    <h4 className="font-bold text-amber-800 mb-2" style={{ fontSize: '14px' }}>⚠ 不是：</h4>
                    <p className="text-amber-700" style={{ fontSize: '14px' }}>
                      {char.notSigns}
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-3 border border-gray-100">
                    <p className="text-gray-600 italic" style={{ fontSize: '14px' }}>{char.verse}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* Important Clarification */}
      <Section title="重要澄清：沒有人是「完美的代禱者」" icon={AlertTriangle} accentColor="red">
        <p className="text-gray-700 leading-relaxed mb-4" style={{ fontSize: '16px' }}>
          讀完這七個特徵，你可能會想：「我一個都不符合，我不夠格當代禱者。」<strong>請等等！</strong>
        </p>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
          <h4 className="font-bold text-red-900 mb-2" style={{ fontSize: '15px' }}>這些特徵不是「入門門檻」，而是「成長目標」</h4>
          <p className="text-red-800 mb-3" style={{ fontSize: '14px' }}>
            沒有人一開始就完全具備這些特徵。瑪麗也是經過多年的操練，才成為成熟的代禱者。重點不是「你現在有沒有」，而是「神是否呼召你，你是否願意成長」。
          </p>
          <p className="text-red-800" style={{ fontSize: '14px' }}>
            如果神呼召你成為代禱者，祂會逐步培養你、塑造你。你的責任是回應呼召、忠心操練。
          </p>
        </div>
        <div className="space-y-2">
          <div className="bg-white rounded-lg p-3 border border-green-200">
            <p className="text-green-800" style={{ fontSize: '14px' }}>
              <strong>負擔</strong> 可以逐漸加深——一開始可能只是微弱的感動，但持續禱告會讓負擔越來越清楚
            </p>
          </div>
          <div className="bg-white rounded-lg p-3 border border-green-200">
            <p className="text-green-800" style={{ fontSize: '14px' }}>
              <strong>委身</strong> 可以逐步建立——從每週禱告一次，到每天禱告；從5分鐘，到30分鐘
            </p>
          </div>
          <div className="bg-white rounded-lg p-3 border border-green-200">
            <p className="text-green-800" style={{ fontSize: '14px' }}>
              <strong>敏銳度</strong> 可以培養——透過親近神、熟悉聖經、與牧師建立關係
            </p>
          </div>
          <div className="bg-white rounded-lg p-3 border border-green-200">
            <p className="text-green-800" style={{ fontSize: '14px' }}>
              <strong>成熟度</strong> 可以成長——沒有人天生成熟，都是在跌倒、學習、悔改中成長
            </p>
          </div>
        </div>
      </Section>

      {/* Self-Assessment */}
      <Section title="自我評估：我適合成為個人性代禱者嗎？" icon={Search} accentColor="indigo">
        <p className="text-gray-700 leading-relaxed mb-4" style={{ fontSize: '15px' }}>
          用這七個問題檢視自己。不需要每個都答「是」，但如果大部分答案是「是」或「正在學習」，神可能正在呼召你。
        </p>
        <div className="space-y-3">
          {[
            '我心中是否有持續的負擔，要為某個人（牧師或領袖）守望？',
            '我是否願意長期委身（數年甚至更久）為這個人禱告？',
            '我在禱告中是否曾經領受過關於這個人的感動、經文、或異象？',
            '我的靈命是否足夠成熟，能守密、不論斷、在愛中說誠實話？',
            '我是否願意隱藏在幕後，不求名聲、不求特殊待遇？',
            '我與這個人是否有（或願意建立）信任的關係？',
            '我是否曾經為這個人禱告後，看見代禱蒙應允的見證？',
          ].map((q, i) => (
            <div key={i} className="bg-indigo-50 border border-indigo-100 rounded-lg p-4">
              <p className="text-indigo-900 font-semibold mb-2" style={{ fontSize: '14px' }}>問題 {i+1}:</p>
              <p className="text-gray-700" style={{ fontSize: '14px' }}>{q}</p>
            </div>
          ))}
        </div>
        <div className="bg-white border-l-4 border-indigo-400 rounded-lg p-4 mt-4">
          <p className="text-indigo-800 font-semibold mb-2" style={{ fontSize: '14px' }}>解讀結果：</p>
          <ul className="space-y-1 text-gray-700" style={{ fontSize: '14px' }}>
            <li>• <strong>5-7個「是」：</strong>神很可能在呼召你成為個人性代禱者</li>
            <li>• <strong>3-4個「是」：</strong>繼續禱告尋求，神可能在培養你</li>
            <li>• <strong>1-2個「是」：</strong>可能不是你的呼召，但你仍可以做一般性代禱者</li>
            <li>• <strong>0個「是」：</strong>神可能呼召你在其他領域服事，而非代禱</li>
          </ul>
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
            這一章描繪了七個個人性代禱者的關鍵特徵：<strong className="text-indigo-900">有負擔、願委身、有敏銳度、夠成熟、很謙卑、有關係、見果效</strong>。
          </p>
          <p>
            這些特徵不是「完美的標準」，而是「成長的目標」。沒有人一開始就完全具備，但如果神呼召你，祂會逐步培養你。
          </p>
          <p>
            <strong className="text-indigo-900">自我評估的七個問題</strong>幫助我們辨識：神是否在呼召我成為個人性代禱者？如果大部分答案是「是」，就勇敢回應呼召。
          </p>
          <p>
            記住：個人性代禱者不一定是「屬靈名人」，可能是安靜、不起眼的人。<strong className="text-indigo-900">忠心比恩賜更重要，長期守望比偶爾的大能禱告更有影響力</strong>。
          </p>
          <p>
            問題是：如果神正在呼召你，你願意回應嗎？
          </p>
        </div>
      </section>

      {/* Theological Depth */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Book className="w-6 h-6 text-indigo-600" />
          神學深度探討
        </h2>
        
        <Section title="一、聖靈的恩賜分配：羅馬書12章的多樣性" icon={Gift} accentColor="purple">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            羅馬書12:6-8列舉了七種恩賜：說預言、服事、教導、勸化、施捨、治理、憐憫。代禱雖然沒有明確列在這裡，但保羅強調「按我們所得的恩賜，各有不同」。
          </p>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-3">
            <p className="text-purple-900 font-semibold mb-2" style={{ fontSize: '14px' }}>神學洞察：</p>
            <p className="text-purple-800" style={{ fontSize: '14px' }}>
              代禱恩賜的分配也是如此——不是每個人都有同樣的代禱負擔與能力。有些人被呼召為廣泛的需要禱告（一般性代禱），有些人被呼召為特定的人守望（個人性代禱）。這不是高下之分，而是聖靈主權的分配。
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
            這提醒我們：不要勉強沒有這個恩賜的人成為個人性代禱者，也不要因為「我不會」就自卑。每個人都有神給的恩賜，忠心使用自己的恩賜，就是榮耀神。
          </p>
        </Section>

        <Section title="二、屬靈爭戰的層次：以弗所書6章的全副軍裝" icon={Shield} accentColor="red">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            以弗所書6:12說：「我們並不是與屬血氣的爭戰，乃是與那些執政的、掌權的、管轄這幽暗世界的，以及天空屬靈氣的惡魔爭戰。」
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-3">
            <p className="text-red-900 font-semibold mb-2" style={{ fontSize: '14px' }}>個人性代禱者的爭戰：</p>
            <p className="text-red-800" style={{ fontSize: '14px' }}>
              個人性代禱者常常會經歷比一般代禱者更激烈的屬靈爭戰——因為他們在為「策略性目標」（牧師、領袖）守望，撒但會特別攻擊他們。這可能表現為：身體疲憊、心靈壓迫、家庭衝突、甚至信心動搖。
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
            這也是為什麼「靈命成熟」「願意付代價」是必要的特徵——個人性代禱不只是「多禱告一點」，而是真正進入屬靈戰場的最前線。
          </p>
        </Section>

        <Section title="三、中保的職分：基督的榜樣" icon={Heart} accentColor="green">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            希伯來書7:25說，耶穌「長遠活著，替他們祈求」。耶穌是我們的大祭司、我們的中保，祂持續為我們代求。
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-3">
            <p className="text-green-900 font-semibold mb-2" style={{ fontSize: '14px' }}>代禱者效法基督：</p>
            <p className="text-green-800" style={{ fontSize: '14px' }}>
              個人性代禱者在效法基督的中保職分——站在神與人之間，為人代求。這是極高的榮耀，但也是極重的責任。就像基督為我們承擔十字架，代禱者也要為受代禱者承擔屬靈的重擔。
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
            這也解釋了為什麼「謙卑」是必要特徵——如果我們高舉自己，就失去了中保的本質。真正的中保是隱藏的、捨己的、不求回報的。
          </p>
        </Section>

        <Section title="四、屬靈父母的呼召：保羅與提摩太的關係" icon={Users} accentColor="amber">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            保羅稱提摩太為「我親愛的兒子」（提後1:2），他們之間不只是「老師與學生」，而是「屬靈父子」的深厚關係。保羅為提摩太守望、教導、代禱、扶持。
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-3">
            <p className="text-amber-900 font-semibold mb-2" style={{ fontSize: '14px' }}>代禱者的「屬靈父母」角色：</p>
            <p className="text-amber-800" style={{ fontSize: '14px' }}>
              成熟的個人性代禱者，常常成為受代禱者的「屬靈父母」——雖然不一定年齡更大，但在代禱中承擔著「守望、遮蓋、扶持」的角色。這需要深厚的關係與長期的委身。
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed" style={{ fontSize: '15px' }}>
            這也提醒代禱者：不要把牧師當作「偶像」或「明星」，而要把他們當作「需要守望的屬靈兒女」。這種心態會讓代禱更真實、更有愛。
          </p>
        </Section>
      </section>

      {/* Taiwan Context */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Target className="w-6 h-6 text-indigo-600" />
          華人教會處境應用
        </h2>

        <Section title="情境一：「年齡階級」文化的挑戰" icon={Users} accentColor="red">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            華人文化重視「尊老」，年輕人很難成為年長牧師的代禱者——因為「我怎麼有資格為長輩禱告？」相反，年長的信徒也可能覺得「我不應該為年輕牧師禱告，我應該教導他們」。
          </p>
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            這種階級觀念限制了代禱網絡的建立。
          </p>
          <div className="bg-white border-l-4 border-red-400 rounded-lg p-4">
            <p className="text-red-800 font-semibold mb-2" style={{ fontSize: '14px' }}>突破之道：</p>
            <p className="text-red-700" style={{ fontSize: '14px' }}>
              在代禱關係中，重點不是「誰比較老」，而是「誰被神呼召」。年輕人可以為年長牧師守望（如同提摩太可以為保羅禱告），年長者也可以為年輕牧師守望。屬靈的呼召超越年齡的界線。
            </p>
          </div>
        </Section>

        <Section title="情境二：「群體主義」vs「個人呼召」的張力" icon={Heart} accentColor="purple">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            華人文化強調「跟大家一起」，個人的特殊呼召常被視為「標新立異」。如果有人說「神呼召我成為牧師的個人代禱者」，可能會被質疑：「你為什麼要特別？我們大家一起為牧師禱告不就好了嗎？」
          </p>
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            這種文化讓許多人不敢回應個人呼召。
          </p>
          <div className="bg-white border-l-4 border-purple-400 rounded-lg p-4">
            <p className="text-purple-800 font-semibold mb-2" style={{ fontSize: '14px' }}>教育與澄清：</p>
            <p className="text-purple-700" style={{ fontSize: '14px' }}>
              教會需要教導：一般性代禱與個人性代禱都重要，不是競爭關係。個人性代禱者不是「比別人屬靈」，而是「被神呼召到特殊的崗位」。就像有人被呼召傳道、有人被呼召教導，代禱也是如此。
            </p>
          </div>
        </Section>

        <Section title="情境三：「功利主義」對代禱的影響" icon={TrendingUp} accentColor="amber">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            台灣社會重視「效率」「成果」「看得見的果效」。代禱常被視為「看不見成果」的事工，所以不被重視。
          </p>
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            更糟的是：有些教會把代禱「量化」（每天禱告幾分鐘、每週幾次禱告會），用數字來衡量代禱的「效能」。這會讓代禱變成「績效管理」，失去了關係的本質。
          </p>
          <div className="bg-white border-l-4 border-amber-400 rounded-lg p-4">
            <p className="text-amber-800 font-semibold mb-2" style={{ fontSize: '14px' }}>重新定義果效：</p>
            <p className="text-amber-700" style={{ fontSize: '14px' }}>
              代禱的果效不是立刻可見的數字（人數增長、奉獻提升），而是長期的、屬靈的影響（牧師的品格、教會的健康、撒但攻擊的被阻擋）。這需要信心的眼光，而非功利的計算。
            </p>
          </div>
        </Section>

        <Section title="情境四：「忙碌文化」對長期委身的挑戰" icon={Clock} accentColor="indigo">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            台灣的生活節奏很快，大家都很忙。長期委身（幾年、十幾年）為一個人禱告，感覺「太奢侈」——我連自己的時間都不夠用了，哪有時間為別人禱告？
          </p>
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            結果是：許多人願意「偶爾」為牧師禱告，但很難「長期」委身。
          </p>
          <div className="bg-white border-l-4 border-indigo-400 rounded-lg p-4">
            <p className="text-indigo-800 font-semibold mb-2" style={{ fontSize: '14px' }}>重新定義優先順序：</p>
            <p className="text-indigo-700" style={{ fontSize: '14px' }}>
              如果神呼召你成為個人性代禱者，這不是「額外的負擔」，而是「優先的使命」。就像你會為工作、家庭騰出時間，神的呼召也值得你騰出時間。從每天5分鐘開始，逐步建立習慣。
            </p>
          </div>
        </Section>

        <Section title="情境五：後疫情時代的「屬靈倦怠」" icon={AlertTriangle} accentColor="green">
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            COVID-19疫情讓許多基督徒經歷「屬靈倦怠」——線上聚會的疲憊、信仰熱情的冷卻、服事動力的下降。在這樣的氛圍中，很難找到「願意長期委身」的代禱者。
          </p>
          <p className="text-gray-700 leading-relaxed mb-3" style={{ fontSize: '15px' }}>
            更困難的是：牧師自己也可能在倦怠中，沒有力氣建立代禱團。
          </p>
          <div className="bg-white border-l-4 border-green-400 rounded-lg p-4">
            <p className="text-green-800 font-semibold mb-2" style={{ fontSize: '14px' }}>在倦怠中重燃：</p>
            <p className="text-green-700" style={{ fontSize: '14px' }}>
              代禱團可以成為「彼此重燃」的管道——牧師與代禱者彼此守望、彼此鼓勵、彼此扶持。不是「牧師單向接受代禱」，而是「群體一起重新得力」。這可能是後疫情時代教會最需要的復興起點。
            </p>
          </div>
        </Section>
      </section>

      {/* Four-Week Challenge */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6 text-indigo-600" />
          四週代禱者成長挑戰
        </h2>
        
        {[
          {
            week: 1,
            title: '自我檢視：我具備哪些特徵？',
            mission: '這週認真檢視七個特徵，誠實評估自己目前的狀態。不要美化自己，也不要過度自卑。只要真實面對。',
            practice: '每天選一個特徵，花10分鐘反思：我在這個特徵上的表現如何？有哪些進步？有哪些需要成長？',
            journal: '七個特徵中，我最強的是哪一個？最弱的是哪一個？這告訴我什麼？',
          },
          {
            week: 2,
            title: '操練屬靈敏銳度',
            mission: '這週特別操練「屬靈敏銳度」。在為牧師或領袖禱告時，刻意安靜聆聽聖靈的感動。不要急著說話，先聆聽。',
            practice: '每天為同一個人禱告15分鐘。前5分鐘安靜聆聽，問神：「祢要我為他禱告什麼？」記錄領受的感動、經文、或畫面。',
            journal: '我在禱告中領受到什麼感動？這些感動後來是否得到印證？',
          },
          {
            week: 3,
            title: '培養謙卑與守密的品格',
            mission: '這週特別操練「謙卑」與「守密」。如果有人問你「你在為誰禱告」，練習不炫耀、不詳述。如果知道某人的軟弱，練習絕對不告訴第三者。',
            practice: '為每一次「想要炫耀代禱」或「想要分享八卦」的試探禱告，求神幫助你守住舌頭。',
            journal: '我是否曾經在不經意中洩漏別人的隱私？我如何避免這個試探？',
          },
          {
            week: 4,
            title: '建立長期委身的習慣',
            mission: '這週開始建立「每日為特定人代禱」的習慣。選擇一個固定時段（如每天早上起床後、或睡前），為同一個人禱告10-15分鐘。',
            practice: '設定手機提醒，幫助你不要忘記。如果某天忘記了，不要自責，第二天繼續。重點是建立習慣，而非完美執行。',
            journal: '30天後，這個習慣是否建立起來了？我有什麼改變？',
          },
        ].map((item, i) => (
          <div key={i} className="bg-indigo-50 border-l-4 border-indigo-500 rounded-xl p-5 mb-4 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-indigo-600 text-white text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center">{item.week}</span>
              <h3 className="font-bold text-indigo-900" style={{ fontSize: '17px' }}>第{item.week}週：{item.title}</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4">
                <p className="text-indigo-800 font-semibold mb-2" style={{ fontSize: '14px' }}>🎯 本週任務</p>
                <p className="text-gray-700" style={{ fontSize: '14px' }}>{item.mission}</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-purple-800 font-semibold mb-2" style={{ fontSize: '14px' }}>💡 具體操練</p>
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
          <Users className="w-6 h-6 text-indigo-600" />
          小組討論問題
        </h2>
        
        <div className="space-y-4">
          <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-5">
            <h3 className="font-bold text-purple-900 mb-3" style={{ fontSize: '16px' }}>🔍 自我省察類</h3>
            <ol className="space-y-2 list-decimal list-inside text-gray-700" style={{ fontSize: '15px' }}>
              <li>七個特徵中，你最具備哪一個？你最缺乏哪一個？</li>
              <li>自我評估的七個問題，你有幾個答「是」？這個結果讓你驚訝嗎？</li>
              <li>你是否曾經因為「我不夠格」而拒絕代禱的呼召？現在回頭看，那是謙卑還是逃避？</li>
            </ol>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5">
            <h3 className="font-bold text-blue-900 mb-3" style={{ fontSize: '16px' }}>💭 深度思考類</h3>
            <ol className="space-y-2 list-decimal list-inside text-gray-700" style={{ fontSize: '15px' }}>
              <li>為什麼「謙卑」是必要特徵？代禱者如果驕傲，會帶來什麼問題？</li>
              <li>「屬靈敏銳度」是天生的還是可以培養的？如何培養？</li>
              <li>個人性代禱者常經歷更激烈的屬靈爭戰，這公平嗎？為什麼神允許這樣的爭戰？</li>
            </ol>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-5">
            <h3 className="font-bold text-green-900 mb-3" style={{ fontSize: '16px' }}>🎯 行動應用類</h3>
            <ol className="space-y-2 list-decimal list-inside text-gray-700" style={{ fontSize: '15px' }}>
              <li>參加四週代禱者成長挑戰，你最期待哪一週？你覺得哪一週最困難？</li>
              <li>如果你想培養「屬靈敏銳度」，你的第一步會是什麼？</li>
              <li>我們小組可以如何一起成長為更好的代禱者？（彼此問責？分享見證？集體操練？）</li>
            </ol>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-5">
            <h3 className="font-bold text-amber-900 mb-3" style={{ fontSize: '16px' }}>🏠 教會層面類</h3>
            <ol className="space-y-2 list-decimal list-inside text-gray-700" style={{ fontSize: '15px' }}>
              <li>我們教會如何辨識、培養那些有代禱恩賜的人？</li>
              <li>教會應該為代禱者提供什麼樣的支持與培訓？</li>
              <li>如何避免代禱者因為屬靈爭戰而倦怠或受傷？</li>
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
              <h3 className="font-bold text-indigo-300 mb-4 flex items-center" style={{ fontSize: '18px' }}>
                <Search className="w-5 h-5 mr-2 text-indigo-400" /> 深度反思
              </h3>
              <ul className="space-y-4 text-slate-300">
                {[
                  '如果神正在呼召你成為代禱者，但你因為「我不夠格」而拒絕，你會錯過什麼？那個人會失去什麼？',
                  '想像十年後，你仍然忠心為某個人守望。那時你與他的關係會是什麼樣子？你的生命會有什麼改變？',
                  '你最害怕代禱者的哪一個特徵？為什麼？這個害怕背後是什麼？',
                  '如果你知道成為個人性代禱者會遭遇激烈的屬靈爭戰，你還願意嗎？',
                  '七個特徵中，你最想在哪一個上成長？如果一年後你真的成長了，你的代禱生活會有什麼不同？',
                ].map((q, i) => (
                  <li key={i} className="flex items-start" style={{ fontSize: '15px' }}>
                    <span className="text-indigo-400 mr-2 font-bold">{i+1}.</span>
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
                  '今天就做自我評估：七個問題，誠實回答，看看神是否在呼召你。',
                  '參加四週代禱者成長挑戰，每週專注一個特徵的操練。',
                  '找一位靈命成熟的人，請他為你的代禱呼召禱告、問責。',
                  '開始每天為特定的人禱告10-15分鐘，建立習慣。',
                  '培養屬靈敏銳度：每次禱告前先安靜5分鐘聆聽聖靈。',
                  '操練守密與謙卑：絕不把代禱當作炫耀的資本。',
                  '記錄代禱見證，建立你的信心——神真的在聽你的禱告！',
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
              「忠心比恩賜更重要。<br />
              長期守望比偶爾的大能禱告更有影響力。<br />
              問題是：你願意成為那樣的代禱者嗎？」
            </p>
          </div>
        </div>
      </section>

      {/* Original Questions */}
      <section className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-indigo-600 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <MessageCircle className="w-6 h-6 text-indigo-600" />
          問題迴響（原書）
        </h2>
        <ol className="space-y-3 text-slate-700 list-decimal list-inside" style={{ fontSize: '15px' }}>
          <li>七個特徵中，你認為哪一個最重要？為什麼？</li>
          <li>你自己具備哪些特徵？哪些還在成長中？</li>
          <li>自我評估的七個問題，你有幾個答「是」？這告訴你什麼？</li>
          <li>你是否認識符合這些特徵的代禱者？他們有什麼共同點？</li>
          <li>如果你想成為個人性代禱者，你最需要在哪一個特徵上成長？</li>
        </ol>
      </section>

      {/* Navigation */}
      <div className="mt-4 text-center text-sm text-gray-400">
        <p>— 第八章完 —</p>
      </div>
    </div>
  );
}
