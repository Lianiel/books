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
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Book className="w-7 h-7 text-blue-600" />
                一、聖經簡介
              </h2>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6">
                <p className="text-blue-900 font-semibold">請讀講義：第一大點 1~5 點</p>
              </div>

              {/* 圖 1-1: 書寫期間 */}
              <Section title="1. 聖經書寫期間：1500年" color="blue" defaultOpen>
                <p className="text-gray-700 mb-4">
                  書寫期間 1500 年，聖經在西元 96 年就停寫了。1500 年間神的默示，
                  自第一卷「創世記」至最後一卷「啟示錄」，所有神要傳遞給人的訊息，全在裡面了。
                </p>

                {/* 圖1-1 清晰版 */}
                <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-xl border-2 border-orange-300">
                  <div className="text-center mb-2">
                    <div className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      圖 1-1
                    </div>
                  </div>
                  
                  {/* 大標題 */}
                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold text-orange-900 mb-2">為何神此時才啟示摩西？</div>
                  </div>

                  {/* 時間軸 - 超大清晰版 */}
                  <div className="bg-white rounded-xl p-6 mb-4">
                    <div className="relative">
                      {/* 主軸線 */}
                      <div className="absolute left-0 right-0 top-20 h-2 bg-gradient-to-r from-orange-400 via-yellow-400 to-red-500"></div>
                      
                      <div className="flex justify-between items-start relative z-10">
                        {/* BC1400 */}
                        <div className="flex flex-col items-center" style={{width: '120px'}}>
                          <div className="bg-orange-500 text-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-xl mb-3">
                            <div className="text-xs">約BC</div>
                            <div className="text-2xl font-bold">1400</div>
                          </div>
                          <div className="bg-orange-600 text-white px-3 py-2 rounded-lg shadow-md text-center">
                            <div className="font-bold">創世記</div>
                            <div className="text-xs mt-1">摩西</div>
                          </div>
                        </div>

                        {/* 1500年標示 */}
                        <div className="flex-1 flex flex-col items-center justify-center">
                          <div className="bg-yellow-400 text-yellow-900 px-6 py-3 rounded-xl font-bold text-2xl shadow-lg">
                            1500 年
                          </div>
                        </div>

                        {/* 西元元年 */}
                        <div className="flex flex-col items-center mx-4">
                          <div className="bg-yellow-500 text-white rounded-full w-20 h-20 flex items-center justify-center shadow-xl mb-3">
                            <div className="text-2xl font-bold">0</div>
                          </div>
                          <div className="text-sm font-semibold text-gray-700">西元元年</div>
                        </div>

                        {/* 空白過渡 */}
                        <div className="flex-1"></div>

                        {/* AD96 */}
                        <div className="flex flex-col items-center" style={{width: '120px'}}>
                          <div className="bg-red-500 text-white rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-xl mb-3">
                            <div className="text-xs">AD</div>
                            <div className="text-2xl font-bold">96</div>
                          </div>
                          <div className="bg-red-600 text-white px-3 py-2 rounded-lg shadow-md text-center">
                            <div className="font-bold">啟示錄</div>
                            <div className="text-xs mt-1">約翰</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 說明文字 */}
                  <div className="bg-white rounded-lg p-4 space-y-2 text-sm">
                    <p className="text-gray-700">• 西元前 1400 年，神啟示<strong>摩西</strong>來寫創世記</p>
                    <p className="text-gray-700">• 那個時候<strong>文字比較成熟</strong>（不像早期象形文）</p>
                    <p className="text-gray-700">• 到西元 96 年，<strong>約翰</strong>寫了啟示錄（最後一個書卷）</p>
                    <p className="text-gray-700">• 整個聖經的書寫期間，總共大約 <strong>1500 多年</strong></p>
                  </div>
                </div>
              </Section>

              {/* 圖 1-2: 預言 */}
              <Section title="2. 預言書：1000多項預言，3/4已應驗" color="purple">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-xl border-2 border-purple-300">
                  <div className="text-center mb-2">
                    <div className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      圖 1-2
                    </div>
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold text-purple-900">神預言未世，人類到底何時看懂？</div>
                  </div>

                  {/* 簡潔清晰的預言圖 */}
                  <div className="bg-white rounded-xl p-6 mb-4">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="bg-purple-500 text-white rounded-2xl p-6 shadow-lg">
                          <div className="text-5xl font-bold mb-2">1000+</div>
                          <div className="text-lg">項預言</div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-green-500 text-white rounded-xl p-4 shadow-md">
                          <div className="text-3xl font-bold">3/4</div>
                          <div>已應驗 ✓</div>
                        </div>
                        <div className="bg-amber-500 text-white rounded-xl p-4 shadow-md">
                          <div className="text-3xl font-bold">1/4</div>
                          <div>正應驗中 ⟳</div>
                        </div>
                      </div>
                    </div>

                    {/* 時間對比 */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4">
                        <div className="font-bold text-red-900 mb-2">100年前說</div>
                        <div className="text-red-700 text-sm">"世界會末了"</div>
                        <div className="text-2xl mt-2">🤔 ❌</div>
                        <div className="text-xs text-red-600 mt-1">「你頭殼壞掉！」</div>
                      </div>
                      <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4">
                        <div className="font-bold text-green-900 mb-2">現在說</div>
                        <div className="text-green-700 text-sm">"世界會末了"</div>
                        <div className="text-2xl mt-2">😰 ✓</div>
                        <div className="text-xs text-green-600 mt-1">「有可能耶！」</div>
                      </div>
                    </div>
                  </div>

                  {/* 天災舉例 */}
                  <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4">
                    <div className="font-bold text-red-900 mb-3">看現在的天災多不多？</div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-red-600">🔴</span>
                        <span>台灣 921 大地震 (1999)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-red-600">🔴</span>
                        <span>台灣 88 水災 (2009)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-red-600">🔴</span>
                        <span>中國四川大地震 (2008)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-red-600">🔴</span>
                        <span>紐西蘭基督城地震 (2011)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-red-600">🔴</span>
                        <span>印尼海嘯 (2004)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-amber-600">⚠️</span>
                        <span>溫室效應、北極冰融化</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-600 text-white rounded-lg p-4 mt-4">
                    <CheckCircle className="w-6 h-6 inline-block mr-2" />
                    <span className="font-bold">科學幫我們證實聖經的預言是會應驗的！！</span>
                  </div>
                </div>
              </Section>

              {/* 圖 1-3: 歷史書 */}
              <Section title="3. 歷史書：以色列人歷史，是事實" color="green">
                <div className="bg-gradient-to-br from-green-100 to-teal-100 p-6 rounded-xl border-2 border-green-300">
                  <div className="text-center mb-2">
                    <div className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      圖 1-3
                    </div>
                  </div>
                  
                  <div className="text-center mb-4">
                    <div className="text-xl font-bold text-green-900">
                      以色列人出埃及及到迦南後，才開始正式有國，有歷史
                    </div>
                    <div className="text-sm text-green-700 mt-2">
                      全人類回頭看此段歷史事實，找到有這位神的證據
                    </div>
                  </div>

                  {/* 超清晰的歷史流程圖 */}
                  <div className="bg-white rounded-xl p-6">
                    {/* 時間軸 */}
                    <div className="relative mb-8">
                      <div className="absolute left-0 right-0 top-12 h-1 bg-green-400"></div>
                      
                      <div className="relative z-10 flex justify-between">
                        {/* BC1400 */}
                        <div className="text-center">
                          <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                            <div className="text-xs font-bold">BC<br/>1400</div>
                          </div>
                          <div className="text-xs font-semibold">創世記</div>
                        </div>

                        {/* 西元年 */}
                        <div className="text-center">
                          <div className="bg-green-400 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                            <div className="text-sm font-bold">0</div>
                          </div>
                          <div className="text-xs">西元<br/>元年</div>
                        </div>

                        {/* AD30 */}
                        <div className="text-center">
                          <div className="bg-teal-500 text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                            <div className="text-sm font-bold">30</div>
                          </div>
                          <div className="text-xs font-semibold">耶穌<br/>誕生</div>
                        </div>

                        {/* AD33 */}
                        <div className="text-center">
                          <div className="bg-teal-600 text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                            <div className="text-sm font-bold">33</div>
                          </div>
                          <div className="text-xs font-semibold">復活<br/>升天</div>
                        </div>

                        {/* AD96 */}
                        <div className="text-center">
                          <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                            <div className="text-xs font-bold">AD<br/>96</div>
                          </div>
                          <div className="text-xs font-semibold">啟示錄</div>
                        </div>

                        {/* 現在 */}
                        <div className="text-center">
                          <div className="bg-green-300 text-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                            <div className="text-xs font-bold">現在</div>
                          </div>
                          <div className="text-xs font-semibold text-green-700">全人類</div>
                        </div>
                      </div>
                    </div>

                    {/* 回頭看箭頭 */}
                    <div className="text-center mb-4">
                      <div className="inline-block bg-green-50 border-2 border-green-500 rounded-lg px-6 py-3">
                        <div className="text-3xl mb-2">⬅️</div>
                        <div className="font-bold text-green-900">回頭看歷史</div>
                      </div>
                    </div>

                    {/* 說明 */}
                    <div className="bg-green-50 rounded-lg p-4 space-y-2 text-sm">
                      <p>• <strong>神介入一族人</strong>（以色列人），足以傳遞訊息給全人類</p>
                      <p>• 以色列人會做的事，我們也會做（拜偶像、不平安）</p>
                      <p>• 他們不可能的事（脫離埃及），我們也不可能</p>
                      <p className="text-green-700 font-bold">→ 全人類回頭看此段歷史，可以知道有神！</p>
                    </div>
                  </div>
                </div>
              </Section>

              {/* 圖 1-4: 40位作者 */}
              <Section title="4. 作者40多位，卻貫穿一個旨意" color="amber">
                <div className="bg-gradient-to-br from-amber-100 to-yellow-100 p-6 rounded-xl border-2 border-amber-300">
                  <div className="text-center mb-2">
                    <div className="inline-block bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      圖 1-4
                    </div>
                  </div>

                  {/* 超清晰的作者分佈圖 */}
                  <div className="bg-white rounded-xl p-6">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-amber-900 mb-2">40+ 位作者</div>
                      <div className="text-sm text-gray-600">不同年代，卻貫穿同一旨意</div>
                    </div>

                    {/* 神在中心 */}
                    <div className="flex justify-center mb-6">
                      <div className="bg-amber-500 text-white w-32 h-32 rounded-full flex items-center justify-center shadow-2xl">
                        <div className="text-4xl font-bold">神</div>
                      </div>
                    </div>

                    {/* 舊約約30位 vs 新約約10位 */}
                    <div className="grid grid-cols-2 gap-6">
                      {/* 舊約 */}
                      <div className="bg-orange-50 rounded-xl p-4 border-2 border-orange-300">
                        <div className="text-center mb-4">
                          <div className="text-2xl font-bold text-orange-900">約 30 位</div>
                          <div className="text-sm text-orange-700">舊約作者</div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          {[...Array(9)].map((_, i) => (
                            <div key={i} className="bg-orange-400 w-10 h-10 rounded-full"></div>
                          ))}
                        </div>
                        <div className="text-xs text-center mt-3 text-orange-600">
                          摩西、以賽亞、耶利米...
                        </div>
                      </div>

                      {/* 新約 */}
                      <div className="bg-yellow-50 rounded-xl p-4 border-2 border-yellow-300">
                        <div className="text-center mb-4">
                          <div className="text-2xl font-bold text-yellow-900">約 10 位</div>
                          <div className="text-sm text-yellow-700">新約作者</div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          {[...Array(6)].map((_, i) => (
                            <div key={i} className="bg-yellow-400 w-10 h-10 rounded-full"></div>
                          ))}
                        </div>
                        <div className="text-xs text-center mt-3 text-yellow-600">
                          馬太、保羅、約翰...
                        </div>
                      </div>
                    </div>

                    {/* 1500年 */}
                    <div className="text-center mt-6">
                      <div className="inline-block bg-amber-500 text-white px-8 py-3 rounded-xl text-2xl font-bold shadow-lg">
                        1500 年
                      </div>
                    </div>
                  </div>

                  <QuestionBox question="你覺得這樣子的一本書，是「人」有辦法來寫的嗎？">
                    不同年代的人，卻做同一件事情，貫穿同一個旨意，還能前面預言，後面應驗！
                  </QuestionBox>
                </div>
              </Section>

              {/* 圖 1-5: 舊約新約 */}
              <Section title="5. 是神話語，人直接轉述" color="red">
                <div className="bg-gradient-to-br from-red-100 to-pink-100 p-6 rounded-xl border-2 border-red-300">
                  <div className="text-center mb-2">
                    <div className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      圖 1-5
                    </div>
                  </div>

                  {/* 舊約 vs 新約 清晰對照 */}
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    {/* 舊約 */}
                    <div className="bg-amber-50 rounded-xl p-5 border-2 border-amber-400">
                      <div className="text-center mb-4">
                        <div className="bg-amber-600 text-white px-4 py-2 rounded-lg inline-block text-xl font-bold">
                          舊約
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-3 text-center">
                          <div className="text-sm text-gray-600">時間</div>
                          <div className="text-lg font-bold text-amber-900">BC 1400</div>
                        </div>
                        <div className="bg-white rounded-lg p-3">
                          <div className="text-sm text-gray-600 mb-1">模式</div>
                          <div className="font-bold text-amber-900">
                            耶和華（神）說「......」
                          </div>
                          <div className="text-xs text-amber-700 mt-1">先知記載</div>
                        </div>
                        <div className="bg-amber-600 text-white rounded-lg p-3">
                          <div className="text-sm mb-1">例：以賽亞預言</div>
                          <div className="font-bold text-xs">「將來必有童女懷孕生子...」</div>
                        </div>
                      </div>
                    </div>

                    {/* 新約 */}
                    <div className="bg-blue-50 rounded-xl p-5 border-2 border-blue-400">
                      <div className="text-center mb-4">
                        <div className="bg-blue-600 text-white px-4 py-2 rounded-lg inline-block text-xl font-bold">
                          新約
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-3 text-center">
                          <div className="text-sm text-gray-600">時間</div>
                          <div className="text-lg font-bold text-blue-900">AD 30 ~ 96</div>
                        </div>
                        <div className="bg-white rounded-lg p-3">
                          <div className="text-sm text-gray-600 mb-1">模式</div>
                          <div className="font-bold text-blue-900">
                            耶穌（神兒子）說「......」
                          </div>
                          <div className="text-xs text-blue-700 mt-1">門徒記載</div>
                        </div>
                        <div className="bg-blue-600 text-white rounded-lg p-3">
                          <div className="text-sm mb-1">預言應驗</div>
                          <div className="font-bold text-xs">隔 700 年應驗了！</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 神沉默400年 */}
                  <div className="bg-gray-500 text-white rounded-lg p-4 text-center mb-4">
                    <div className="text-2xl font-bold mb-1">神沉默 400 年 無聲</div>
                    <div className="text-sm opacity-90">BC 400 ~ AD 30</div>
                  </div>

                  {/* 重點 */}
                  <div className="bg-red-600 text-white rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">
                      預言隔千年百年應驗，是神啟示人所寫！
                    </div>
                    <div className="text-sm text-red-100">
                      這麼不合邏輯的預言（童女懷孕、救主被鞭傷），隔 700 年居然應驗了！
                    </div>
                  </div>
                </div>
              </Section>
            </div>
          </div>
        )}

        {/* TAB 2: 神創造宇宙 */}
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
                <div className="text-center mb-6">
                  <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-full font-bold text-lg">
                    創世記第一章 — 總圖表
                  </div>
                  <div className="text-sm text-gray-600 mt-2">請讀聖經：創世記 1:1-2</div>
                </div>

                {/* 未造世界以先 */}
                <div className="bg-slate-900 text-white rounded-xl p-5 mb-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Eye className="w-6 h-6" />
                    未造世界以先
                  </h3>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-slate-800 rounded-lg p-4">
                      <div className="text-4xl mb-2">🌑</div>
                      <div className="font-bold text-lg">暗</div>
                      <div className="text-sm text-gray-400">空虛混沌</div>
                    </div>
                    <div className="bg-slate-800 rounded-lg p-4">
                      <div className="text-4xl mb-2">💧</div>
                      <div className="font-bold text-lg">水</div>
                      <div className="text-sm text-gray-400">淵面的水</div>
                    </div>
                    <div className="bg-slate-800 rounded-lg p-4">
                      <div className="text-4xl mb-2">✨</div>
                      <div className="font-bold text-lg">神的靈</div>
                      <div className="text-sm text-gray-400">運行水面</div>
                    </div>
                  </div>
                </div>

                {/* 七日創造 - 超清晰表格 */}
                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
                    <thead>
                      <tr className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
                        <th className="p-4 text-left font-bold text-lg w-20">日</th>
                        <th className="p-4 text-left font-bold text-lg">神造了什麼</th>
                        <th className="p-4 text-left font-bold text-lg">創造原理</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          day: '1',
                          emoji: '💡',
                          what: '光',
                          detail: '神說要有光，就有了光',
                          principle: '光將原有的「暗」分開',
                          bg: 'bg-yellow-50'
                        },
                        {
                          day: '2',
                          emoji: '☁️',
                          what: '空氣（天）',
                          detail: '空氣將水分為上下',
                          principle: '空氣將水分為「上水」(雨、雪) 及「下水」(海、河)',
                          bg: 'bg-blue-50'
                        },
                        {
                          day: '3',
                          emoji: '🌍',
                          what: '地（海）+ 植物',
                          detail: '旱地從海中露出；造各樣植物',
                          principle: '地從海露出；植物「各從其類」',
                          bg: 'bg-green-50'
                        },
                        {
                          day: '4',
                          emoji: '☀️',
                          what: '太陽、月亮、星星',
                          detail: '天上光體，宇宙星系',
                          principle: '定節令、日子、年歲',
                          bg: 'bg-purple-50'
                        },
                        {
                          day: '5',
                          emoji: '🐟',
                          what: '魚 + 鳥',
                          detail: '海裡的魚、空中的鳥',
                          principle: '各從其類、滋生繁多',
                          bg: 'bg-teal-50'
                        },
                        {
                          day: '6',
                          emoji: '👤',
                          what: '動物 + 人',
                          detail: '陸地上的動物；人（照神形像）',
                          principle: '動物：各從其類 / 人：照神的形像、治理全地',
                          bg: 'bg-red-50'
                        },
                        {
                          day: '7',
                          emoji: '😌',
                          what: '安息',
                          detail: '神歇了一切創造的工',
                          principle: '神賜福第七日，定為聖日',
                          bg: 'bg-indigo-50'
                        },
                      ].map((item) => (
                        <tr key={item.day} className={`border-b ${item.bg}`}>
                          <td className="p-4">
                            <div className="text-4xl font-bold text-center">{item.day}</div>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <span className="text-3xl">{item.emoji}</span>
                              <div>
                                <div className="font-bold text-lg text-gray-900">{item.what}</div>
                                <div className="text-sm text-gray-600">{item.detail}</div>
                              </div>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="text-gray-800">{item.principle}</div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
}