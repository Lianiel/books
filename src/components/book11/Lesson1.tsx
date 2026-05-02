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
                      src="/images/doubt-to-faith/lesson1-prophecies.png" 
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
                      src="/images/doubt-to-faith/lesson1-exodus.png" 
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
                      src="/images/doubt-to-faith/lesson1-authors.png" 
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
                      src="/images/doubt-to-faith/lesson1-testaments.png" 
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

    </div>
  );
};

export default DoubtToFaithLesson1;
