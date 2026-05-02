import { useState } from 'react';
import { ChevronDown, ChevronRight, Book, HelpCircle, CheckCircle, AlertCircle, Sparkles, Globe2, Calendar, Users, Eye, MessageCircle, Heart, Star } from 'lucide-react';

// ========== TypeScript 型別定義 ==========

interface SectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  color?: 'blue' | 'green' | 'purple' | 'amber' | 'red';
}

interface QuestionBoxProps {
  question: string;
  children?: React.ReactNode;
}

type TabId = 'intro' | 'creation' | 'endtimes';

// ========== 組件定義 ==========

const Section: React.FC<SectionProps> = ({ title, children, defaultOpen = false, color = "blue" }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  const colorMap = {
    blue: { bg: "bg-blue-50", border: "border-blue-400", text: "text-blue-900", icon: "text-blue-600" },
    green: { bg: "bg-green-50", border: "border-green-400", text: "text-green-900", icon: "text-green-600" },
    purple: { bg: "bg-purple-50", border: "border-purple-400", text: "text-purple-900", icon: "text-purple-600" },
    amber: { bg: "bg-amber-50", border: "border-amber-400", text: "text-amber-900", icon: "text-amber-600" },
    red: { bg: "bg-red-50", border: "border-red-400", text: "text-red-900", icon: "text-red-600" },
  };
  
  const c = colorMap[color];

  return (
    <div className={`${c.bg} border-l-4 ${c.border} rounded-lg mb-4 overflow-hidden shadow-sm`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-4 flex items-center justify-between font-bold ${c.text} hover:opacity-80 transition-opacity`}
      >
        <span className="text-left">{title}</span>
        {isOpen ? <ChevronDown className="w-5 h-5 flex-shrink-0" /> : <ChevronRight className="w-5 h-5 flex-shrink-0" />}
      </button>
      {isOpen && <div className="p-4 pt-0">{children}</div>}
    </div>
  );
};

const QuestionBox: React.FC<QuestionBoxProps> = ({ question, children }) => (
  <div className="bg-amber-50 border-2 border-amber-400 rounded-lg p-4 my-4">
    <div className="flex items-start gap-3">
      <HelpCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
      <div>
        <div className="font-bold text-amber-900 mb-2">{question}</div>
        {children && <div className="text-amber-800 text-sm">{children}</div>}
      </div>
    </div>
  </div>
);

// ========== 主組件 ==========

const DoubtToFaithLesson1: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('intro');

  const tabs = [
    { id: 'intro' as TabId, name: '聖經簡介', icon: Book },
    { id: 'creation' as TabId, name: '創造', icon: Globe2 },
    { id: 'endtimes' as TabId, name: '末世', icon: Calendar }
  ];

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6 mb-6 shadow-lg">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <Sparkles className="w-8 h-8" />
          從懷疑到相信
        </h1>
        <p className="text-blue-100 text-lg">第一課：神藉聖經傳達創造與末世</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {tabs.map(({ id, name, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap flex items-center gap-2 transition-all ${
              activeTab === id
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Icon className="w-4 h-4" />
            {name}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="space-y-6">
        
        {/* TAB 1: 聖經簡介 */}
        {activeTab === 'intro' && (
          <div className="space-y-6">
            {/* Section 1: 書寫期間 */}
            <Section title="1. 聖經書寫期間：1500年" color="blue" defaultOpen>
              <div className="space-y-4">
                {/* 核心概念 */}
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <p className="text-gray-800 leading-relaxed mb-3">
                    <strong className="text-blue-900">書寫期間 1500 年</strong>，聖經在西元 96 年就停寫了。
                    1500 年間神的默示，自第一卷<strong>「創世記」</strong>神告知世界開始，
                    至最後一卷<strong>「啟示錄」</strong>神告知末世、末日及新天新地為止，
                    <strong className="text-blue-600">所有神要傳遞給人的訊息，全在裡面了</strong>。
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    其實聖經是<strong>歷史書</strong>，是神向人類啟示祂自己，所留下來的話語。
                  </p>
                </div>

                {/* 圖1-1 */}
                <div className="bg-gradient-to-r from-orange-100 to-red-100 p-4 rounded-xl border-2 border-orange-300">
                  <div className="text-right mb-2">
                    <div className="inline-block bg-orange-500 text-white px-2 py-0.5 rounded text-[10px] font-semibold opacity-70">
                      附圖 1-1
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img 
                      src="/images/doubt-to-faith/lesson1-timeline.png" 
                      alt="書寫期間時間軸" 
                      className="max-w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                {/* 詳細說明 */}
                <div className="bg-white rounded-lg p-5 border border-blue-200 shadow-sm">
                  <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <Book className="w-5 h-5" />
                    為何神此時才啟示摩西？
                  </h4>
                  
                  <div className="space-y-3 text-gray-700">
                    <p className="leading-relaxed">
                      <strong>西元前 1400 年</strong>，神啟示摩西來寫創世記，
                      並不表示神造人是在西元前 1400 年。那為什麼神等到這個時候才啟示一個「人」來寫？
                    </p>

                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="font-semibold text-blue-900 mb-2">💡 可能的原因：</p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex gap-2">
                          <span className="text-blue-600 flex-shrink-0">•</span>
                          <span>那個時候<strong>文字比較成熟</strong>，不像早期文字是象形文</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-blue-600 flex-shrink-0">•</span>
                          <span>若要留一篇「神怎麼創造天地」刻在羊皮上面，要流傳很難</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-blue-600 flex-shrink-0">•</span>
                          <span>當時讀書的人也很少，<strong>知識不普及</strong></span>
                        </li>
                      </ul>
                    </div>

                    <p className="leading-relaxed text-sm">
                      所以可能因知識不普及、文字結構限制，神到這個時候才向人啟示祂自己。
                    </p>

                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-4">
                      <p className="font-bold mb-3">⏱️ 關鍵時間點</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <span className="text-yellow-300 text-lg flex-shrink-0">→</span>
                          <span><strong>西元前 1400年</strong>：寫了創世記(第一個書卷)</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-yellow-300 text-lg flex-shrink-0">→</span>
                          <span><strong>西元 96年</strong>：約翰寫了啟示錄(最後一個書卷)，主要描寫世界末了</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-yellow-300 text-lg flex-shrink-0">→</span>
                          <span><strong>總共 1500多年</strong>，所有神要傳遞給人的訊息，全都在裡面了</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            {/* Section 2: 預言書 */}
            <Section title="2. 預言書：1000多項預言，3/4已應驗" color="purple">
              <div className="space-y-4">
                {/* 核心概念 */}
                <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                  <p className="text-gray-800 leading-relaxed">
                    聖經中有<strong className="text-purple-900">1000 多項預言</strong>，
                    其中<strong className="text-purple-600">3/4 已應驗</strong>：
                    有隔千年、隔百年...隔幾十天應驗的；
                    另外還有 <strong className="text-purple-600">1/4 預言，正逐步應驗中！！</strong>
                  </p>
                </div>

                {/* 圖1-2 */}
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-4 rounded-xl border-2 border-purple-300">
                  <div className="text-right mb-2">
                    <div className="inline-block bg-purple-500 text-white px-2 py-0.5 rounded text-[10px] font-semibold opacity-70">
                      附圖 1-2
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img 
                      src={image1_2} 
                      alt="1000多項預言" 
                      className="max-w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                {/* 詳細說明 */}
                <div className="bg-white rounded-lg p-5 border border-purple-200 shadow-sm">
                  <h4 className="font-bold text-purple-900 mb-3">🔮 世界末了的預言</h4>
                  
                  <div className="space-y-3 text-gray-700">
                    <p className="leading-relaxed">
                      聖經中啟示錄早在<strong>1900 多年以前</strong>，預言世界會末了，
                      但我們還是不能看懂，一直到<strong className="text-purple-600">科技發達</strong>，
                      科學家証實溫室效應、北極冰快速溶化、水位上升、臭氧層破洞…
                      我們才明白，<strong>世界末了是有可能，而且指日可待</strong>。
                    </p>

                    <div className="bg-purple-50 rounded-lg p-4">
                      <p className="font-semibold text-purple-900 mb-2">🌍 近年天災實例：</p>
                      <div className="grid md:grid-cols-2 gap-2 text-sm">
                        <div>• 台灣 921大地震 (1999)</div>
                        <div>• 台灣 88水災 (2009)</div>
                        <div>• 中國四川大地震 (2008)</div>
                        <div>• 紐西蘭基督城大地震 (2011)</div>
                        <div>• 印尼海嘯 (2004)</div>
                        <div>• 電影「2012」等末日主題愈來愈多</div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-4">
                      <p className="font-bold text-purple-900 mb-2">💭 時代差異：</p>
                      <div className="space-y-2 text-sm">
                        <p><strong>若在 100 年前</strong>，有人說「世界會末了」，我們的反應：</p>
                        <p className="text-red-600 pl-4">「你頭殼壞掉」或「你有神精病」……</p>
                        <p><strong>但現在</strong>我們說「世界末了」，大家反應：</p>
                        <p className="text-blue-600 pl-4">「有可能耶！怎麼辦？...」</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-4">
                      <p className="font-bold text-lg">
                        ✨ 結論：科學幫我們證實聖經的預言是會應驗的！
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            {/* Section 3: 歷史書 */}
            <Section title="3. 歷史書：以色列人歷史，是事實" color="green">
              <div className="space-y-4">
                {/* 核心概念 */}
                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <p className="text-gray-800 leading-relaxed">
                    聖經是<strong className="text-green-900">以色列人歷史</strong>，
                    是歷史，就是<strong className="text-green-600">事實</strong>。
                    聖經較沒記載其他國家的歷史；除了創世記1-11章全人類歷史外。
                  </p>
                </div>

                {/* 圖1-3 */}
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-4 rounded-xl border-2 border-green-300">
                  <div className="text-right mb-2">
                    <div className="inline-block bg-green-500 text-white px-2 py-0.5 rounded text-[10px] font-semibold opacity-70">
                      附圖 1-3
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img 
                      src={image1_3} 
                      alt="以色列人出埃及" 
                      className="max-w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                {/* 詳細說明 */}
                <div className="bg-white rounded-lg p-5 border border-green-200 shadow-sm">
                  <h4 className="font-bold text-green-900 mb-3">📖 為何神只介入一族人？</h4>
                  
                  <div className="space-y-3 text-gray-700">
                    <p className="leading-relaxed">
                      神藉著40 多位作者，他們大都是<strong>以色列人</strong>，
                      且神跟著整個以色列人的歷史走。
                      很多人說，是不是以色列人比較優秀？為什麼不找我們中國人？
                      <span className="text-green-600 font-semibold">第三課就會解釋。</span>
                    </p>

                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="font-semibold text-green-900 mb-2">🎯 歷史就是事實</p>
                      <p className="text-sm leading-relaxed">
                        歷史是不是事實？既是歷史事實，不容我們倒填年月日。
                        就像中國一百年前清朝誰作王？做了什麼事，我們不能改寫；
                        相對的，以色列人歷史也是這樣。
                      </p>
                    </div>

                    <div className="bg-white border border-green-200 rounded-lg p-4">
                      <p className="font-semibold text-green-900 mb-2">🔍 出埃及的例子</p>
                      <p className="text-sm leading-relaxed mb-2">
                        以色列人在西元前1400 年，他們的命運是：<strong>在埃及做奴僕，已經做了400 多年</strong>。
                        這樣子的一個民族，有沒有可能脫離強大的埃及？應該是不可能。
                      </p>
                      <p className="text-sm leading-relaxed">
                        如果換了是我們中國人，遭到那樣的命運，有沒有可能脫離強大的埃及？也不可能。
                      </p>
                      <p className="text-sm leading-relaxed mt-2 text-green-700 font-semibold">
                        那他們脫離了，是怎麼脫離的？<strong className="text-green-900">靠神！</strong>
                        (證據呢？我們第三課會探討)
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg p-4">
                      <p className="font-bold mb-2">💡 神的心意</p>
                      <p className="text-sm leading-relaxed">
                        神介入一族人，就足以讓將來全人類回頭看這段以色列人的歷史，可以知道：
                        (1)有沒有神？(2)神要對我們說什麼？(3)人的景況？神將來要怎麼樣來處理人。
                      </p>
                      <p className="text-sm leading-relaxed mt-2">
                        又因為是<strong>歷史事實</strong>，比較覺得有證據，不會飄在空中。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            {/* Section 4: 作者40多位 */}
            <Section title="4. 作者40多位，卻貫穿一個旨意" color="amber">
              <div className="space-y-4">
                {/* 核心概念 */}
                <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500">
                  <p className="text-gray-800 leading-relaxed">
                    這1500 年當中，<strong className="text-amber-900">作者有40 多位</strong>，
                    落在西元前的大約30 位，落在西元後的大約10 位，
                    就這樣不同年代的人，卻做同一件事情，
                    <strong className="text-amber-600">貫穿同一個旨意，還能前面預言，後面應驗</strong>。
                  </p>
                </div>

                {/* 圖1-4 */}
                <div className="bg-gradient-to-br from-amber-100 to-yellow-100 p-4 rounded-xl border-2 border-amber-300">
                  <div className="text-right mb-2">
                    <div className="inline-block bg-amber-500 text-white px-2 py-0.5 rounded text-[10px] font-semibold opacity-70">
                      附圖 1-4
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img 
                      src={image1_4} 
                      alt="作者40多位" 
                      className="max-w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                {/* 詳細說明 */}
                <div className="bg-white rounded-lg p-5 border border-amber-200 shadow-sm">
                  <h4 className="font-bold text-amber-900 mb-3">📚 這是「人」有辦法寫的嗎？</h4>
                  
                  <div className="space-y-3 text-gray-700">
                    <p className="leading-relaxed">
                      你覺得這樣子的一本書，是「人」有辦法來寫的嗎？
                      因為<strong>人的歲數有限，最多活一百多年</strong>，
                      卻能跨越1500年，40多位作者，貫穿同一個旨意，
                      還能前面預言，後面應驗！
                    </p>

                    <div className="bg-amber-50 rounded-lg p-4">
                      <p className="font-semibold text-amber-900 mb-2">🎯 貫穿的證據</p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex gap-2">
                          <span className="text-amber-600 flex-shrink-0">•</span>
                          <span><strong>不同年代</strong>：西元前30位，西元後10位</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-amber-600 flex-shrink-0">•</span>
                          <span><strong>前後無矛盾</strong>：所有書卷和諧一致</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-amber-600 flex-shrink-0">•</span>
                          <span><strong>預言應驗</strong>：隔千年百年仍準確</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-lg p-4">
                      <p className="font-bold text-lg mb-2">
                        ✨ 結論：是神默示人所寫
                      </p>
                      <p className="text-sm">
                        這樣跨越1500年、40多位作者、卻貫穿一個旨意的書，
                        不是「人」有辦法寫出來的，而是<strong>神默示人所寫</strong>！
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            {/* Section 5: 神話語 */}
            <Section title="5. 是神話語，人直接轉述" color="red">
              <div className="space-y-4">
                {/* 核心概念 */}
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                  <p className="text-gray-800 leading-relaxed">
                    <strong className="text-red-900">舊約</strong>：耶和華(神)說「……」，大多是先知記載<br />
                    <strong className="text-red-900">新約</strong>：耶穌(神兒子)說「……」，門徒們記載
                  </p>
                  <p className="text-gray-700 text-sm mt-2">
                    為何<strong className="text-red-600">直接轉述</strong>如此重要？
                  </p>
                </div>

                {/* 圖1-5 */}
                <div className="bg-gradient-to-br from-red-100 to-pink-100 p-4 rounded-xl border-2 border-red-300">
                  <div className="text-right mb-2">
                    <div className="inline-block bg-red-500 text-white px-2 py-0.5 rounded text-[10px] font-semibold opacity-70">
                      附圖 1-5
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img 
                      src={image1_5} 
                      alt="舊約新約對照" 
                      className="max-w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                {/* 詳細說明 */}
                <div className="bg-white rounded-lg p-5 border border-red-200 shadow-sm">
                  <h4 className="font-bold text-red-900 mb-3">📜 直接轉述的重要性</h4>
                  
                  <div className="space-y-4 text-gray-700">
                    <div className="bg-red-50 rounded-lg p-4">
                      <p className="font-semibold text-red-900 mb-2">🔴 舊約：耶和華說</p>
                      <p className="text-sm leading-relaxed">
                        舊約是耶和華"說"(上帝告訴我們，祂的名字叫耶和華)。
                        耶和華說：「……」，<strong>先知直接轉述</strong>。
                      </p>
                      <p className="text-sm leading-relaxed mt-2">
                        例如：神帶領以色列人出埃及，是藉著摩西。
                        神對摩西說話，摩西就記載-耶和華說：「…」。
                        所以他是<strong>直接轉述神說的東西</strong>。
                      </p>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="font-semibold text-blue-900 mb-2">🔵 新約：耶穌說</p>
                      <p className="text-sm leading-relaxed">
                        新約是耶和華的兒子耶穌來，耶穌在西元33年被釘死。
                        耶穌說過很多預言，<strong>門徒們直接記載</strong>。
                      </p>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-4">
                      <p className="font-semibold text-purple-900 mb-2">💜 為何直接轉述重要？</p>
                      <p className="text-sm leading-relaxed">
                        很多預言，當時在寫下來的時候，<strong className="text-purple-600">完全不合人邏輯</strong>，
                        不合人邏輯的預言隔百年千年居然應驗了！
                      </p>
                      <div className="mt-2 space-y-1 text-sm">
                        <p>• 西元96年啟示錄說「世界會末了」→ 1900年後科學才證實有可能</p>
                        <p>• 西元前700年預言「童女懷孕生子」→ 隔700年應驗！</p>
                        <p>• 預言「救世主會被鞭傷刑罰」→ 不合邏輯但後來應驗</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg p-4">
                      <p className="font-bold text-lg mb-2">
                        ✨ 聖經的作者，其實就是神自己
                      </p>
                      <p className="text-sm">
                        聖經大部分的預言，當代或隔百年或隔千年，看來都不合邏輯；
                        但到後來都應驗。所以，聖經的作者，其實就是<strong>神自己，祂啟示人，人寫下</strong>。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Section>
          </div>
        )}
        {activeTab === 'creation' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Globe2 className="w-7 h-7 text-green-600" />
                二、神創造宇宙萬物及人類嗎？
              </h2>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded mb-6">
                <p className="text-green-900 font-semibold">請讀講義：第二大點第 1~4 小點</p>
                <p className="text-sm text-green-700 mt-2">
                  強調聖經是「神啟示，人所寫」的證據，而不是摩西（人）能憑自己想像寫的
                </p>
              </div>

              {/* 創世記第一章總圖表 */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border-2 border-green-300 mb-6">
                <div className="text-center mb-4">
                  <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-full font-bold text-lg">
                    創世記第一章 — 總圖表
                  </div>
                  <div className="text-sm text-gray-600 mt-2">請讀聖經:創世記 1:1-2</div>
                </div>
                
                <div className="flex justify-center">
                  <img 
                    src="data:image/png;base64,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" 
                    alt="創世記第一章總圖表" 
                    className="max-w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>


              {/* 方塊一提問模式 */}
              <div className="bg-amber-100 border-4 border-amber-500 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-500 text-white text-3xl font-bold w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                    ?
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-amber-900 mb-4">
                      使用「方塊一」模式來問對方
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-4 shadow-md">
                        <div className="font-bold text-amber-900 mb-2 text-lg">
                          ❶ 如果你是摩西（人），可能有這樣的邏輯嗎？
                        </div>
                        <div className="text-sm text-gray-700">
                          例：「空氣將水分開」— 在你腦子裡，會有水可以分開的觀念嗎？
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-4 shadow-md">
                        <div className="font-bold text-amber-900 mb-2 text-lg">
                          ❷ 以摩西當時科學、交通、眼界，能寫出這樣的創造原理嗎？
                        </div>
                        <div className="text-sm text-gray-700">
                          例：3400年前，能寫出「各從其類」「定日子年歲」嗎？
                        </div>
                      </div>
                      
                      <div className="bg-green-600 text-white rounded-lg p-4 shadow-lg">
                        <div className="font-bold mb-2 text-xl">❸ 堅立證據：</div>
                        <div className="text-green-100 text-lg">
                          所以，創世記是<strong>神啟示人（摩西）寫</strong>，
                          還是<strong>人（摩西）自己幻想</strong>而寫得出來的呢？
                        </div>
                        <div className="text-3xl font-bold mt-3 text-center">→ 是神啟示！</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 圖 1-7: 太陽系運行 */}
              <Section title="第四日：太陽、月亮、星星 — 定日子、年歲" color="purple" defaultOpen>
                <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-300">
                  <div className="text-center mb-2">
                    <div className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      圖 1-7
                    </div>
                  </div>
                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold text-purple-900">日月星辰運行</div>
                  </div>

                  {/* 太陽系簡圖 - 超清晰 */}
                  <div className="bg-white rounded-xl p-8 mb-4">
                    <div className="flex items-center justify-center gap-8">
                      {/* 太陽 */}
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-2xl flex items-center justify-center">
                          <span className="text-3xl">☀️</span>
                        </div>
                        <div className="font-bold text-orange-900 mt-2">太陽</div>
                      </div>

                      {/* 箭頭 */}
                      <div className="text-center">
                        <div className="text-5xl text-blue-500">→</div>
                        <div className="text-sm font-bold text-blue-700 mt-2">地球繞太陽</div>
                        <div className="text-xs text-blue-600">= 一年</div>
                      </div>

                      {/* 地球 + 月亮 */}
                      <div className="text-center">
                        <div className="relative">
                          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-full shadow-xl flex items-center justify-center">
                            <span className="text-2xl">🌍</span>
                          </div>
                          <div className="absolute -right-6 top-1/2 transform -translate-y-1/2">
                            <div className="w-10 h-10 bg-gray-300 rounded-full shadow-lg flex items-center justify-center">
                              <span className="text-sm">🌙</span>
                            </div>
                          </div>
                        </div>
                        <div className="font-bold text-blue-900 mt-8">地球</div>
                        <div className="text-xs text-gray-600 mt-1">自轉一圈 = 一日</div>
                        <div className="text-xs text-gray-600">月繞地 = 一月</div>
                      </div>
                    </div>
                  </div>

                  {/* 經文 */}
                  <div className="bg-purple-100 border-l-4 border-purple-500 rounded-lg p-4 mb-4">
                    <p className="font-bold text-purple-900 mb-2">創 1:14</p>
                    <p className="text-purple-800">
                      「天上要有光體，可以分晝夜，做記號，<strong className="text-purple-900 text-lg">定節令、日子、年歲</strong>。」
                    </p>
                  </div>

                  <QuestionBox question="3,400 年前的摩西，有沒有可能就講到太陽、月亮、星星是來定日子年歲的？">
                    <div className="space-y-2">
                      <p>🤔 摩西當時怎麼可能知道？</p>
                      <p className="font-bold text-green-700">→ 是神啟示他的！</p>
                    </div>
                  </QuestionBox>
                </div>

                {/* 圖 1-8: 科學發展 */}
                <div className="bg-indigo-100 rounded-xl p-6 border-2 border-indigo-300 mt-4">
                  <div className="text-center mb-2">
                    <div className="inline-block bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      圖 1-8
                    </div>
                  </div>
                  <div className="text-center mb-6">
                    <div className="text-xl font-bold text-indigo-900">
                      神在 3000 多年前的啟示，人類待科學發達才懂
                    </div>
                  </div>

                  {/* 科學發展時間軸 - 超清晰 */}
                  <div className="bg-white rounded-xl p-6">
                    <div className="space-y-6">
                      {/* BC1400 */}
                      <div className="flex items-center gap-4">
                        <div className="bg-indigo-500 text-white px-4 py-2 rounded-lg font-bold whitespace-nowrap">
                          約BC1400
                        </div>
                        <div className="flex-1 h-1 bg-indigo-300"></div>
                        <div className="bg-indigo-50 px-4 py-2 rounded-lg">
                          <div className="font-bold text-indigo-900">神啟示摩西寫創世記</div>
                          <div className="text-sm text-indigo-700">「定日子、年歲」</div>
                        </div>
                      </div>

                      {/* 15-17世紀 */}
                      <div className="flex items-center gap-4">
                        <div className="bg-purple-500 text-white px-4 py-2 rounded-lg font-bold whitespace-nowrap">
                          15-17世紀
                        </div>
                        <div className="flex-1 h-1 bg-purple-300"></div>
                        <div className="bg-purple-50 px-4 py-2 rounded-lg">
                          <div className="font-bold text-purple-900">科學家發現</div>
                          <div className="text-sm text-purple-700">哥白尼：地球繞太陽</div>
                          <div className="text-sm text-purple-700">伽利略：日心說</div>
                          <div className="text-sm text-purple-700">哥倫布：地球是圓的</div>
                        </div>
                      </div>

                      {/* 19世紀 */}
                      <div className="flex items-center gap-4">
                        <div className="bg-pink-500 text-white px-4 py-2 rounded-lg font-bold whitespace-nowrap">
                          19世紀
                        </div>
                        <div className="flex-1 h-1 bg-pink-300"></div>
                        <div className="bg-pink-50 px-4 py-2 rounded-lg">
                          <div className="font-bold text-pink-900">1884年</div>
                          <div className="text-sm text-pink-700">格林威治時間</div>
                          <div className="text-sm text-pink-700">算準世界各地時間</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 bg-indigo-600 text-white rounded-lg p-4 text-center">
                      <p className="font-bold text-lg">
                        → 神在3000多年前就啟示的創造原理，待科學發達才看懂！
                      </p>
                    </div>
                  </div>
                </div>
              </Section>

              {/* 人類被造 - 神的靈 */}
              <Section title="5. 人類被造 — 神的靈，人的靈" color="red" defaultOpen>
                <div className="space-y-4">
                  {/* 經文引用 */}
                  <div className="bg-red-50 rounded-xl p-5 border-2 border-red-300">
                    <p className="text-lg font-bold mb-3 text-red-900">請讀聖經：創世記 2:7</p>
                    <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                      <p className="text-gray-800 leading-relaxed">
                        耶和華神<strong className="text-red-600">用地上的塵土造人</strong>，
                        將<strong className="text-red-600">生氣吹在他鼻孔裡</strong>，
                        他就<strong className="text-red-600">成了有靈的活人</strong>，名叫亞當。
                      </p>
                    </div>
                  </div>

                  {/* 神吹一口靈氣的說明 */}
                  <div className="bg-blue-50 rounded-xl p-5 border-2 border-blue-300">
                    <div className="flex items-center gap-2 mb-3">
                      <Heart className="w-6 h-6 text-blue-600" />
                      <h4 className="font-bold text-blue-900 text-lg">神吹一口靈氣</h4>
                    </div>
                    <div className="space-y-3 text-gray-700">
                      <p className="leading-relaxed">
                        耶和華神，在亞當裡面<strong className="text-blue-600">吹了口靈氣</strong>！
                        神是靈，祂吹了一口氣給我們，是要我們與祂<strong className="text-blue-600">相通</strong>，
                        用<strong className="text-blue-600">靈裡</strong>與祂相通。
                      </p>
                      <p className="leading-relaxed">
                        但，當人進入罪裡，人變得不完全，無法與這位完全的神相通了。
                        神是聖潔無瑕疵的。當祂的光照在有瑕疵的形體上面，是我們招架不住。
                        見光～死。
                      </p>
                      <p className="leading-relaxed font-semibold text-blue-900">
                        不是神不要我們，是我們變得不完全以後，無法站立在祂前面。
                      </p>
                      <p className="leading-relaxed">
                        原來是靈裡相通，後來就通不了了。
                      </p>
                    </div>
                  </div>

                  {/* 人找神，動物不找神 */}
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-6 border-2 border-purple-300">
                    <h4 className="text-xl font-bold text-purple-900 mb-4 flex items-center gap-2">
                      <MessageCircle className="w-6 h-6" />
                      人找神，動物不找神
                    </h4>
                    
                    <div className="space-y-4 text-gray-700">
                      <p className="leading-relaxed">
                        其實人遠離神以後，心中一直有一個<strong className="text-purple-600">「要找神的心」</strong>；
                        不過當人進到不完全以後，亂找；自己創造神，說：「應該是這樣，應該是那樣…」。
                      </p>
                      
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <p className="font-semibold text-purple-900 mb-2">
                          我們第四課會講，為什麼造出這麼多神？這麼多神到底怎麼選擇？
                        </p>
                        <p className="text-sm">
                          聖經也有教我們耶！聖經知道我們人會這樣子製造神，神告訴我們怎麼分辨真假神。
                          所以我們第四課也會講。
                        </p>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <p className="font-bold text-purple-900 mb-2">❓ 人類不是猿猴變的</p>
                        <p className="text-sm leading-relaxed mb-2">
                          從這邊，不需要用科學的證據，就知道沒有一個猿猴、狗狗會想要找神；
                          會跟著人亂拜。
                        </p>
                        <p className="text-sm leading-relaxed">
                          今天我們都變得很不尊貴，為什麼呢？說靈裡相通，我們就說：「嗯，我們是猿猴變的」，
                          看看猿猴或家裡的狗，會不會見廟就拜，可是……人會不會？
                        </p>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <p className="font-bold text-purple-900 mb-2">🙏 觀光客會見廟就拜</p>
                        <p className="text-sm leading-relaxed">
                          觀光客，看到一間廟，雖然不認識，也進去拜一拜。如果不拜呢？
                          怕會得罪牠，那是誰說不拜會得罪呢？也沒有人，他只是自己心中覺得。
                        </p>
                      </div>

                      <div className="bg-purple-600 text-white rounded-lg p-4">
                        <p className="font-bold text-lg mb-2">
                          → 原來是靈裡相通
                        </p>
                        <p className="text-purple-100">
                          所以我們管理萬物有問題，也可以問祂！滿山遍野隨便你吃，這樣的天地你喜歡嗎？
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 科學證據 */}
                  <div className="bg-green-50 rounded-lg p-5 border-2 border-green-300">
                    <div className="flex items-center gap-2 mb-3">
                      <Eye className="w-6 h-6 text-green-600" />
                      <h4 className="font-bold text-green-900 text-lg">科學證據：神用塵土造人</h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      神用塵土造人。科學家，把人體上所搓下來的角質，拿去化驗，
                      其中的<strong className="text-green-600">礦物質</strong>與
                      <strong className="text-green-600">塵土所含的礦物質</strong>是一模一樣的。
                    </p>
                  </div>

                  {/* 預告下一課 */}
                  <div className="bg-amber-50 border-2 border-amber-400 rounded-lg p-5">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-amber-900 mb-2">預告：下一課會探討「罪」</p>
                        <p className="text-amber-800 text-sm leading-relaxed">
                          不過今天我們都變得很不尊貴，為什麼呢？
                          原來人與神靈裡相通，可以直接溝通，為什麼今天不能了？
                        </p>
                        <p className="text-amber-700 text-sm mt-2 italic">
                          ※ 下一課會詳細探討「罪」導致人與神隔絕，以及人的不完全
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Section>

              {/* 神用「說」創造 */}
              <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-6 text-white mt-6">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Sparkles className="w-7 h-7" />
                  7. 神用何種方法造世界？
                </h3>
                
                <div className="bg-white/20 backdrop-blur rounded-lg p-5 mb-4">
                  <p className="text-lg font-bold mb-3">請讀聖經：創世記 1:3</p>
                  <div className="bg-white/30 rounded-lg p-4">
                    <p className="text-2xl text-center">
                      神<span className="text-yellow-300 text-4xl font-bold mx-2">說</span>：『要有光』
                    </p>
                    <p className="text-xl text-center mt-2">就有了光。</p>
                  </div>
                </div>

                <QuestionBox question="如果你是摩西（人），你會想到上帝用『說』，說出一片天地嗎？">
                  <p className="mb-2">在你的想像中，神會怎麼創造？</p>
                  <p>大手一揮？眼睛一眨？像仙女棒一點？</p>
                </QuestionBox>

                <div className="bg-green-800 rounded-lg p-5 mt-4">
                  <div className="text-xl mb-3">每一天的創造都是：</div>
                  <div className="grid grid-cols-2 gap-2 text-lg">
                    <div>第一天：<span className="text-yellow-300 font-bold">神說</span></div>
                    <div>第二天：<span className="text-yellow-300 font-bold">神說</span></div>
                    <div>第三天：<span className="text-yellow-300 font-bold">神說</span></div>
                    <div>第四天：<span className="text-yellow-300 font-bold">神說</span></div>
                    <div>第五天：<span className="text-yellow-300 font-bold">神說</span></div>
                    <div>第六天：<span className="text-yellow-300 font-bold">神說</span></div>
                  </div>
                  <p className="text-green-100 mt-4 text-lg">
                    → 原來神是「<strong className="text-yellow-300 text-2xl">說</strong>」出一個宇宙空間！
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: 末世與永生 */}
        {activeTab === 'endtimes' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-7 h-7 text-purple-600" />
                三、末世 & 新天新地（啟示錄）
              </h2>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded mb-6">
                <p className="text-purple-900 font-semibold">請讀講義：第三大點第 1~2 點</p>
              </div>

              {/* 啟示錄背景 - 超清晰 */}
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl p-6 border-2 border-indigo-300 mb-6">
                <h3 className="text-xl font-bold text-indigo-900 mb-4">啟示錄 1:1-3</h3>
                
                <div className="bg-white rounded-xl p-5 mb-4">
                  <div className="space-y-3">
                    <div>
                      <span className="bg-indigo-600 text-white px-2 py-1 rounded text-sm font-bold">第1節</span>
                      <p className="text-gray-700 mt-2">
                        這個「他」是指<strong>耶穌</strong>，將必要快成的事指示他的眾僕人，
                        差遣使者，曉諭他的僕人<strong>約翰</strong>。
                      </p>
                    </div>
                    <div>
                      <span className="bg-purple-600 text-white px-2 py-1 rounded text-sm font-bold">第2-3節</span>
                      <p className="text-gray-700 mt-2">
                        什麼近了？<strong className="text-red-600 text-lg">日期近了</strong>，
                        是什麼日期近了？<strong className="text-red-600 text-xl">末日</strong>（不是末世）
                      </p>
                    </div>
                  </div>
                </div>

                {/* 63年圖 - 超清晰 */}
                <div className="bg-white rounded-xl p-6">
                  <div className="flex items-center justify-center gap-8">
                    <div className="text-center">
                      <div className="bg-purple-500 text-white w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-xl">
                        <div className="text-xs">AD</div>
                        <div className="text-xl font-bold">33</div>
                      </div>
                      <div className="mt-2 space-y-1">
                        <div className="font-bold text-purple-900">耶穌</div>
                        <div className="text-xs text-gray-600">被釘死</div>
                        <div className="text-xs text-gray-600">復活</div>
                        <div className="text-xs text-gray-600">升天</div>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-4xl text-purple-600">→</div>
                      <div className="bg-purple-200 px-4 py-2 rounded-lg mt-2">
                        <div className="font-bold text-purple-900 text-xl">63年</div>
                      </div>
                      <div className="text-xs text-purple-700 mt-1">耶穌在天上</div>
                    </div>

                    <div className="text-center">
                      <div className="bg-purple-600 text-white w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-xl">
                        <div className="text-xs">AD</div>
                        <div className="text-xl font-bold">96</div>
                      </div>
                      <div className="mt-2 space-y-1">
                        <div className="font-bold text-purple-900">約翰</div>
                        <div className="text-xs text-gray-600">在地上</div>
                        <div className="text-xs text-gray-600">寫啟示錄</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-indigo-50 rounded-lg p-4 text-center">
                    <p className="text-indigo-900">
                      西元 96 年時，<strong>耶穌從天上</strong>向約翰啟示，
                      要他寫下來<strong>末世的景況</strong>。
                    </p>
                  </div>
                </div>
              </div>

              {/* 天上四活物 */}
              <Section title="天上敬拜的景象（啟示 4:1-8）" color="blue">
                <QuestionBox question="你猜四活物是天上聖物或怪物？">
                  <div className="space-y-3">
                    <p className="font-bold">啟 4:6-8 描述：</p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-blue-50 rounded-lg p-3 text-center">
                        <div className="text-3xl mb-1">🦁</div>
                        <div className="font-bold">第一個</div>
                        <div className="text-sm">像獅子</div>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3 text-center">
                        <div className="text-3xl mb-1">🐂</div>
                        <div className="font-bold">第二個</div>
                        <div className="text-sm">像牛犢</div>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3 text-center">
                        <div className="text-3xl mb-1">👤</div>
                        <div className="font-bold">第三個</div>
                        <div className="text-sm">臉面像人</div>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3 text-center">
                        <div className="text-3xl mb-1">🦅</div>
                        <div className="font-bold">第四個</div>
                        <div className="text-sm">像飛鷹</div>
                      </div>
                    </div>
                    <p className="text-sm">• 四個活物各有<strong>六個翅膀</strong></p>
                    <p className="text-sm">• 遍體內外滿了<strong>眼睛</strong></p>
                    <p className="font-bold text-green-700 mt-3">
                      → 可見約翰是<strong>看甚麼寫甚麼</strong>，不是幻想寫的！
                    </p>
                  </div>
                </QuestionBox>
              </Section>

              {/* 七印七號七碗 - 超清晰圖 */}
              <Section title="災難：七印、七號、七碗" color="red" defaultOpen>
                <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-xl p-6 border-2 border-red-300">
                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold text-red-900 mb-2">七印、七號、七碗</div>
                    <div className="text-sm text-red-700">災難頻率越來越密集，像婦人生小孩的陣痛期</div>
                  </div>

                  {/* 超清晰的頻率圖 */}
                  <div className="bg-white rounded-xl p-6 mb-4">
                    {/* 七印 - 稀疏 */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold text-lg">
                          七印
                        </div>
                        <div className="text-sm text-gray-600">頻率：稀疏</div>
                      </div>
                      <div className="flex gap-12">
                        {[1,2,3,4,5,6,7].map(n => (
                          <div key={n} className="text-center">
                            <div className="bg-red-400 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                              {n}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 七號 - 中等 */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold text-lg">
                          七號
                        </div>
                        <div className="text-sm text-gray-600">頻率：較密集</div>
                      </div>
                      <div className="flex gap-8">
                        {[1,2,3,4,5,6,7].map(n => (
                          <div key={n} className="text-center">
                            <div className="bg-orange-400 w-11 h-11 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                              {n}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 七碗 - 密集 */}
                    <div className="mb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-amber-500 text-white px-4 py-2 rounded-lg font-bold text-lg">
                          七碗
                        </div>
                        <div className="text-sm text-gray-600">頻率：非常密集</div>
                      </div>
                      <div className="flex gap-4">
                        {[1,2,3,4,5,6,7].map(n => (
                          <div key={n} className="text-center">
                            <div className="bg-amber-400 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                              {n}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="text-center mt-6">
                      <div className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl font-bold text-lg shadow-lg">
                        <span className="text-3xl">⚠️</span>
                        世界末了
                      </div>
                    </div>
                  </div>

                  <p className="text-center text-red-700 font-semibold">
                    3個七會對齊一起發生，頻率越來越密集
                  </p>
                </div>
              </Section>

              {/* 新天新地 - 超清晰 */}
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl p-8 text-white mt-6">
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Heart className="w-9 h-9" />
                  4. 新天新地 — 有永生
                </h3>
                
                <div className="bg-white/20 backdrop-blur rounded-xl p-6 mb-6">
                  <p className="text-lg mb-3 font-bold">啟示錄 21:4</p>
                  <p className="text-2xl leading-relaxed">
                    「神要擦去他們一切的眼淚；<br/>
                    <strong className="text-yellow-300">不再有死亡，<br/>
                    也不再有悲哀、哭號、疼痛</strong>，<br/>
                    因為以前的事都過去了。」
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur rounded-xl p-5 text-center">
                    <div className="text-5xl mb-3">✨</div>
                    <div className="font-bold text-xl mb-2">人有永生</div>
                    <div className="text-blue-100">不再有死亡</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-xl p-5 text-center">
                    <div className="text-5xl mb-3">💚</div>
                    <div className="font-bold text-xl mb-2">沒有病痛</div>
                    <div className="text-blue-100">不再有疼痛</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-xl p-5 text-center">
                    <div className="text-5xl mb-3">😊</div>
                    <div className="font-bold text-xl mb-2">不再悲哀</div>
                    <div className="text-blue-100">精神的苦</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-xl p-5 text-center">
                    <div className="text-5xl mb-3">🙏</div>
                    <div className="font-bold text-xl mb-2">神與人同在</div>
                    <div className="text-blue-100">不再隔絕</div>
                  </div>
                </div>

                <div className="mt-6 bg-purple-900/40 backdrop-blur rounded-xl p-5">
                  <p className="text-xl text-purple-100">
                    「以前的事都過去了」— 以前的什麼事呢？<br/>
                    就是<strong className="text-yellow-300 text-2xl">罪導致死亡的事都過去了</strong>。
                  </p>
                  <p className="text-sm text-purple-200 mt-3">
                    （下一課會特別提到罪。罪導致我們與神隔絕，也導致我們勞苦愁煩...）
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl p-6 mt-12 text-center">
        <p className="text-gray-300 mb-2">從懷疑到相信 · 第一課完成</p>
        <p className="text-sm text-gray-400">
          基於姜文琪姊妹原教材改編 · 互動式電子書
        </p>
        <p className="text-xs text-gray-500 mt-3">
          本課重點：聖經是神默示人寫的證據 · 創造原理放諸四海皆準 · 預言應驗 · 新天新地的盼望
        </p>
      </div>
    </div>
  );
};

export default DoubtToFaithLesson1;