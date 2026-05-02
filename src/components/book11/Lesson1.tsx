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
                          <span><strong>西元前 1400 年</strong>：摩西寫創世記</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-yellow-300 text-lg flex-shrink-0">→</span>
                          <span><strong>西元 96 年</strong>：約翰寫啟示錄（聖經完成）</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-yellow-300 text-lg flex-shrink-0">→</span>
                          <span><strong>共 1500 年</strong>：神完整的啟示</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            {/* Section 2: 作者群 */}
            <Section title="2. 聖經作者群：40多位" color="green">
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <p className="text-gray-800 leading-relaxed mb-3">
                    聖經有<strong className="text-green-900">40 多位作者</strong>，
                    這些作者之間<strong>互不認識</strong>，因為他們分散在 1500 年不同的時空。
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    但他們所寫的內容卻<strong className="text-green-600">前後呼應、彼此貫通</strong>，
                    這證明了背後有一位<strong>統一的策劃者</strong>——就是神自己。
                  </p>
                </div>

                <div className="bg-white rounded-lg p-5 border border-green-200 shadow-sm">
                  <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    作者背景多元
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="font-bold text-green-900 mb-1">👑 君王</div>
                      <div className="text-sm text-gray-700">如大衛王、所羅門王</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="font-bold text-green-900 mb-1">⚖️ 先知</div>
                      <div className="text-sm text-gray-700">如以賽亞、耶利米</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="font-bold text-green-900 mb-1">🐟 漁夫</div>
                      <div className="text-sm text-gray-700">如彼得、約翰</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="font-bold text-green-900 mb-1">⚕️ 醫生</div>
                      <div className="text-sm text-gray-700">如路加</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="font-bold text-green-900 mb-1">📜 文士</div>
                      <div className="text-sm text-gray-700">如以斯拉</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="font-bold text-green-900 mb-1">🎓 學者</div>
                      <div className="text-sm text-gray-700">如保羅（法利賽人）</div>
                    </div>
                  </div>

                  <div className="mt-4 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg p-4">
                    <p className="font-bold mb-2">🎯 重點思考</p>
                    <p className="text-sm leading-relaxed">
                      這些人來自不同時代、不同階層、不同文化背景，
                      卻能寫出<strong>主題一致、互相印證</strong>的內容，
                      這不是人為編造能做到的，必定是<strong>神的默示</strong>！
                    </p>
                  </div>
                </div>
              </div>
            </Section>

            {/* Section 3: 聖經分類 */}
            <Section title="3. 聖經分類：舊約 + 新約" color="purple">
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                  <p className="text-gray-800 leading-relaxed mb-3">
                    聖經共有 <strong className="text-purple-900">66 卷書</strong>，
                    分為<strong>舊約 39 卷</strong>和<strong>新約 27 卷</strong>。
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* 舊約 */}
                  <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl p-5 border-2 border-blue-300">
                    <h4 className="font-bold text-blue-900 mb-3 text-xl">📖 舊約 39 卷</h4>
                    <div className="space-y-2 text-sm">
                      <div className="bg-white rounded-lg p-3">
                        <div className="font-bold text-blue-800 mb-1">律法書（5卷）</div>
                        <div className="text-gray-600">創世記到申命記</div>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <div className="font-bold text-blue-800 mb-1">歷史書（12卷）</div>
                        <div className="text-gray-600">約書亞記到以斯帖記</div>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <div className="font-bold text-blue-800 mb-1">詩歌智慧書（5卷）</div>
                        <div className="text-gray-600">約伯記到雅歌</div>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <div className="font-bold text-blue-800 mb-1">先知書（17卷）</div>
                        <div className="text-gray-600">以賽亞書到瑪拉基書</div>
                      </div>
                    </div>
                  </div>

                  {/* 新約 */}
                  <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-xl p-5 border-2 border-green-300">
                    <h4 className="font-bold text-green-900 mb-3 text-xl">📖 新約 27 卷</h4>
                    <div className="space-y-2 text-sm">
                      <div className="bg-white rounded-lg p-3">
                        <div className="font-bold text-green-800 mb-1">福音書（4卷）</div>
                        <div className="text-gray-600">馬太、馬可、路加、約翰</div>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <div className="font-bold text-green-800 mb-1">使徒行傳（1卷）</div>
                        <div className="text-gray-600">教會歷史</div>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <div className="font-bold text-green-800 mb-1">書信（21卷）</div>
                        <div className="text-gray-600">羅馬書到猶大書</div>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <div className="font-bold text-green-800 mb-1">預言書（1卷）</div>
                        <div className="text-gray-600">啟示錄</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-4">
                  <p className="font-bold mb-2">🔗 舊約與新約的關係</p>
                  <p className="text-sm leading-relaxed text-purple-100">
                    <strong>舊約</strong>預言彌賽亞（救主）要來；
                    <strong>新約</strong>記載彌賽亞已經來了，就是耶穌基督。
                    舊約是<strong>預備</strong>，新約是<strong>成就</strong>。
                  </p>
                </div>
              </div>
            </Section>

            {/* Section 4: 證據 */}
            <Section title="4. 聖經可信的證據" color="amber">
              <div className="space-y-4">
                <QuestionBox question="聖經是人寫的，為什麼說是神的話？">
                  <p className="leading-relaxed">
                    因為這些作者都宣稱：<strong>「這是耶和華的話臨到我」</strong>、
                    <strong>「聖靈感動我寫下」</strong>。
                    他們不是憑自己的意思寫，而是被<strong>神的靈感動</strong>而寫的。
                  </p>
                </QuestionBox>

                <div className="bg-white rounded-lg p-5 border border-amber-200 shadow-sm">
                  <h4 className="font-bold text-amber-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    三大證據
                  </h4>

                  <div className="space-y-4">
                    {/* 證據1 */}
                    <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-400">
                      <div className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                        <span className="bg-amber-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm flex-shrink-0">1</span>
                        考古學不斷證實聖經記載的準確性
                      </div>
                      <div className="text-gray-700 text-sm space-y-2">
                        <p>• 死海古卷的發現證實了聖經抄寫的準確性</p>
                        <p>• 許多聖經中提到的城市、人物都被考古發掘證實</p>
                        <p>• 例如：大衛城、希西家水道、彼拉多石碑等</p>
                      </div>
                    </div>

                    {/* 證據2 */}
                    <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-400">
                      <div className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                        <span className="bg-amber-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm flex-shrink-0">2</span>
                        預言的應驗
                      </div>
                      <div className="text-gray-700 text-sm space-y-2">
                        <p>• 舊約有超過 300 個關於彌賽亞的預言</p>
                        <p>• 全部在耶穌身上應驗（出生地、死亡方式、復活等）</p>
                        <p>• 以色列復國、聖殿被毀等預言也都應驗了</p>
                      </div>
                    </div>

                    {/* 證據3 */}
                    <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-400">
                      <div className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                        <span className="bg-amber-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm flex-shrink-0">3</span>
                        聖經改變了無數生命
                      </div>
                      <div className="text-gray-700 text-sm space-y-2">
                        <p>• 兩千年來，聖經翻譯成 3000 多種語言</p>
                        <p>• 是世界上發行量最大、影響力最廣的書</p>
                        <p>• 無數人因信靠聖經的話而生命改變、得著盼望</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg p-4">
                  <p className="font-bold mb-2 flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    結論
                  </p>
                  <p className="text-sm leading-relaxed">
                    聖經不是一本普通的書，而是<strong>神透過人寫給全人類的信</strong>。
                    它經得起時間考驗、考古驗證、預言應驗，
                    更重要的是，它能<strong>改變生命、帶來盼望</strong>！
                  </p>
                </div>
              </div>
            </Section>
          </div>
        )}

        {/* TAB 2: 創造 */}
        {activeTab === 'creation' && (
          <div className="space-y-6">
            <Section title="1. 神的創造：萬物背後的設計" color="green" defaultOpen>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <p className="text-gray-800 leading-relaxed mb-3">
                    創世記第一章記載了神的創造過程。
                    神用<strong className="text-green-900">六天創造天地萬物</strong>，
                    第七天安息。這不是神話故事，而是<strong>真實的歷史記錄</strong>。
                  </p>
                </div>

                <div className="bg-white rounded-lg p-5 border border-green-200 shadow-sm">
                  <h4 className="font-bold text-green-900 mb-3">六天創造</h4>
                  <div className="space-y-3">
                    {[
                      { day: 1, content: '光與暗分開', detail: '創造了時間的概念' },
                      { day: 2, content: '空氣與水分開', detail: '形成天空和海洋' },
                      { day: 3, content: '陸地與海分開，植物生長', detail: '地球生態系統的基礎' },
                      { day: 4, content: '日月星辰', detail: '設立季節、日子、年歲' },
                      { day: 5, content: '水中生物與飛鳥', detail: '生命的多樣性' },
                      { day: 6, content: '陸地動物與人', detail: '人按神形象受造，管理萬物' }
                    ].map(({ day, content, detail }) => (
                      <div key={day} className="bg-green-50 rounded-lg p-3 flex gap-3">
                        <div className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                          {day}
                        </div>
                        <div>
                          <div className="font-bold text-green-900">{content}</div>
                          <div className="text-sm text-gray-600">{detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <QuestionBox question="為什麼神要用六天創造，而不是一瞬間？">
                  <p className="leading-relaxed">
                    神當然有能力一瞬間創造一切，但祂選擇用<strong>六天</strong>，
                    可能是要給人類一個<strong>工作與休息的典範</strong>：
                    六天工作，第七天安息。這是神賜給人類的<strong>生活節奏</strong>。
                  </p>
                </QuestionBox>
              </div>
            </Section>

            <Section title="2. 科學與聖經：真理不衝突" color="blue">
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <p className="text-gray-800 leading-relaxed">
                    許多人以為科學與信仰是對立的，其實不然。
                    <strong className="text-blue-900">真正的科學發現往往印證了聖經的記載</strong>。
                  </p>
                </div>

                <div className="bg-white rounded-lg p-5 border border-blue-200 shadow-sm">
                  <h4 className="font-bold text-blue-900 mb-4">科學印證的例子</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                        <Globe2 className="w-5 h-5" />
                        宇宙有起點
                      </div>
                      <div className="text-gray-700 text-sm space-y-1">
                        <p><strong>聖經</strong>：「起初，神創造天地」（創 1:1）</p>
                        <p><strong>科學</strong>：大爆炸理論證實宇宙有個起點</p>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                        <Eye className="w-5 h-5" />
                        生命的複雜設計
                      </div>
                      <div className="text-gray-700 text-sm space-y-1">
                        <p><strong>聖經</strong>：神創造萬物，各從其類</p>
                        <p><strong>科學</strong>：DNA 的精密設計、生物的複雜器官（如眼睛）</p>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                        <Heart className="w-5 h-5" />
                        地球的獨特性
                      </div>
                      <div className="text-gray-700 text-sm space-y-1">
                        <p><strong>聖經</strong>：神為人類預備了特別的居所</p>
                        <p><strong>科學</strong>：地球位於「適居帶」，條件極其精確</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg p-4">
                  <p className="font-bold mb-2">🔬 重點思考</p>
                  <p className="text-sm leading-relaxed">
                    科學研究的是「<strong>如何</strong>」（How），
                    聖經啟示的是「<strong>為何</strong>」（Why）和「<strong>誰</strong>」（Who）。
                    兩者互補，不衝突！
                  </p>
                </div>
              </div>
            </Section>

            <Section title="3. 人的獨特性：按神形象受造" color="purple">
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                  <p className="text-gray-800 leading-relaxed mb-3">
                    創世記 1:27 說：<strong className="text-purple-900">「神就照著自己的形像造人」</strong>。
                    這意味著人與其他受造物有本質上的不同。
                  </p>
                </div>

                <div className="bg-white rounded-lg p-5 border border-purple-200 shadow-sm">
                  <h4 className="font-bold text-purple-900 mb-4">「神的形像」的意義</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-purple-50 rounded-lg p-4">
                      <div className="font-bold text-purple-900 mb-2">🧠 理性思考</div>
                      <div className="text-sm text-gray-700">
                        人能思考、推理、創造，這是神賜給人的能力
                      </div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <div className="font-bold text-purple-900 mb-2">❤️ 情感意志</div>
                      <div className="text-sm text-gray-700">
                        人能愛、能選擇、有道德意識
                      </div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <div className="font-bold text-purple-900 mb-2">🙏 靈性需求</div>
                      <div className="text-sm text-gray-700">
                        人渴望與神連結，尋求生命意義
                      </div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <div className="font-bold text-purple-900 mb-2">👑 治理使命</div>
                      <div className="text-sm text-gray-700">
                        神賜人權柄管理受造界
                      </div>
                    </div>
                  </div>
                </div>

                <QuestionBox question="既然人是按神形像造的,為什麼會犯罪？">
                  <p className="leading-relaxed">
                    神給人<strong>自由意志</strong>——選擇愛神或背離神的自由。
                    愛若不是出於自由選擇，就不是真正的愛。
                    人選擇了背離神（犯罪），但神仍然愛人，
                    差派耶穌來拯救我們，這就是<strong>救贖的故事</strong>（下一課會詳細討論）。
                  </p>
                </QuestionBox>
              </div>
            </Section>
          </div>
        )}

        {/* TAB 3: 末世 */}
        {activeTab === 'endtimes' && (
          <div className="space-y-6">
            <Section title="1. 啟示錄：揭開末世面紗" color="red" defaultOpen>
              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                  <p className="text-gray-800 leading-relaxed mb-3">
                    <strong className="text-red-900">啟示錄</strong>是聖經的最後一卷書，
                    記載使徒約翰在<strong>拔摩海島</strong>所看見的異象，
                    揭示了末世、末日，以及<strong>新天新地</strong>的景象。
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    這不是恐怖小說，而是神給信徒的<strong>盼望與警告</strong>。
                  </p>
                </div>

                <div className="bg-white rounded-lg p-5 border border-red-200 shadow-sm">
                  <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                    <Book className="w-5 h-5" />
                    啟示錄的結構
                  </h4>
                  
                  <div className="space-y-3">
                    <div className="bg-red-50 rounded-lg p-3">
                      <div className="font-bold text-red-900 mb-1">第 1-3 章：七個教會</div>
                      <div className="text-sm text-gray-700">神對教會的信息與警告</div>
                    </div>
                    <div className="bg-red-50 rounded-lg p-3">
                      <div className="font-bold text-red-900 mb-1">第 4-5 章：天上寶座</div>
                      <div className="text-sm text-gray-700">神的榮耀與羔羊（基督）</div>
                    </div>
                    <div className="bg-red-50 rounded-lg p-3">
                      <div className="font-bold text-red-900 mb-1">第 6-19 章：末世災難與審判</div>
                      <div className="text-sm text-gray-700">七印、七號、七碗；基督再來</div>
                    </div>
                    <div className="bg-red-50 rounded-lg p-3">
                      <div className="font-bold text-red-900 mb-1">第 20-22 章：新天新地</div>
                      <div className="text-sm text-gray-700">撒但被扔進火湖；永恆的國度</div>
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            <Section title="2. 末世徵兆：四活物異象" color="amber">
              <div className="space-y-4">
                <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-amber-500">
                  <p className="text-gray-800 leading-relaxed mb-3">
                    啟示錄 4:6-8 記載約翰看見<strong className="text-amber-900">四個活物</strong>，
                    圍繞著神的寶座，晝夜不住地敬拜。
                  </p>
                </div>

                <div className="bg-white rounded-lg p-5 border border-amber-200 shadow-sm">
                  <h4 className="font-bold text-amber-900 mb-4">四活物的描述</h4>
                  
                  <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-lg p-4 mb-4">
                    <p className="text-gray-800 leading-relaxed mb-3 font-semibold">
                      啟示錄 4:7-8
                    </p>
                    <p className="text-gray-700 leading-relaxed text-sm italic">
                      「第一個活物像獅子，第二個像牛犢，第三個臉面像人，第四個像飛鷹。
                      四活物各有六個翅膀，遍體內外都滿了眼睛。他們晝夜不住地說：
                      聖哉！聖哉！聖哉！主神是昔在、今在、以後永在的全能者！」
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                    <div className="bg-amber-50 rounded-lg p-3 text-center">
                      <div className="text-4xl mb-2">🦁</div>
                      <div className="font-bold text-amber-900">獅子</div>
                      <div className="text-xs text-gray-600 mt-1">王權、能力</div>
                    </div>
                    <div className="bg-amber-50 rounded-lg p-3 text-center">
                      <div className="text-4xl mb-2">🐂</div>
                      <div className="font-bold text-amber-900">牛犢</div>
                      <div className="text-xs text-gray-600 mt-1">服事、犧牲</div>
                    </div>
                    <div className="bg-amber-50 rounded-lg p-3 text-center">
                      <div className="text-4xl mb-2">👤</div>
                      <div className="font-bold text-amber-900">人臉</div>
                      <div className="text-xs text-gray-600 mt-1">智慧、理性</div>
                    </div>
                    <div className="bg-amber-50 rounded-lg p-3 text-center">
                      <div className="text-4xl mb-2">🦅</div>
                      <div className="font-bold text-amber-900">飛鷹</div>
                      <div className="text-xs text-gray-600 mt-1">敏銳、屬天</div>
                    </div>
                  </div>

                  <div className="bg-amber-100 rounded-lg p-4">
                    <p className="font-semibold text-amber-900 mb-2">💡 特別記號：</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• <strong>六個翅膀</strong>：完全的敬拜與服事</li>
                      <li>• <strong>遍體滿了眼睛</strong>：全知、洞察一切</li>
                      <li>• <strong>晝夜不住</strong>：永不止息的敬拜</li>
                    </ul>
                  </div>
                </div>

                <QuestionBox question="為什麼約翰要這樣詳細描述？">
                  <div className="space-y-2">
                    <p className="leading-relaxed">
                      因為這些都是<strong>約翰親眼看見的真實異象</strong>，不是憑想像編造的。
                    </p>
                    <p className="leading-relaxed text-sm">
                      神讓約翰看見天上的景象，目的是要讓信徒知道：
                      無論地上多麼混亂，<strong className="text-amber-700">神仍然掌權</strong>，
                      祂的寶座永遠穩固！
                    </p>
                  </div>
                </QuestionBox>
              </div>
            </Section>

            {/* 修正：四活物的圖片區塊移除或保留占位 */}
            <Section title="3. 末世災難與盼望" color="purple">
              <div className="space-y-4">
                <QuestionBox question="既然約翰看到這些，他怎麼寫下來？">
                  <div className="space-y-3">
                    <p className="leading-relaxed">
                      約翰當時被<strong>羅馬政府放逐</strong>到拔摩海島（一個荒涼的小島），
                      但他隨身應該有<strong>簡單的書寫工具</strong>。
                    </p>
                    <div className="bg-purple-50 rounded-lg p-3">
                      <p className="font-semibold text-purple-900 mb-2">可能的書寫方式：</p>
                      <ul className="space-y-1 text-sm">
                        <li>• 當時已有<strong>紙莎草紙</strong>（papyrus）和羊皮卷</li>
                        <li>• 使用蘆葦筆和墨水</li>
                        <li>• 可能先用<strong>簡短筆記</strong>記錄關鍵異象</li>
                        <li>• 後來整理成完整書卷</li>
                      </ul>
                    </div>
                    <p className="leading-relaxed text-sm">
                      重點是：約翰<strong>忠實記錄</strong>他所看見的一切，
                      即使有些景象難以用人類語言描述（如四活物的形象），
                      他仍盡力用當時的語言和概念來表達。
                    </p>
                  </div>
                </QuestionBox>

                <QuestionBox question="為什麼要用「四活物」這樣奇特的形象？">
                  <div className="space-y-3">
                    <p className="leading-relaxed">
                      這些形象都有<strong>象徵意義</strong>，代表受造界的不同層面：
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-blue-50 rounded-lg p-3 text-center">
                        <div className="text-3xl mb-1">🦁</div>
                        <div className="font-bold">獅子</div>
                        <div className="text-sm">野獸之王</div>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3 text-center">
                        <div className="text-3xl mb-1">🐂</div>
                        <div className="font-bold">牛犢</div>
                        <div className="text-sm">家畜之代表</div>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3 text-center">
                        <div className="text-3xl mb-1">👤</div>
                        <div className="font-bold">人臉</div>
                        <div className="text-sm">人類</div>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3 text-center">
                        <div className="text-3xl mb-1">🦅</div>
                        <div className="font-bold">飛鷹</div>
                        <div className="text-sm">飛禽</div>
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
