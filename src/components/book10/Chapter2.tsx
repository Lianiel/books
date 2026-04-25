import { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Target, Gift, Heart, Sparkles, Brain } from 'lucide-react';

export default function Chapter2() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [expandAll, setExpandAll] = useState(false);

  const toggleSection = (id: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedSections(newExpanded);
  };

  const toggleAll = () => {
    if (expandAll) {
      setExpandedSections(new Set());
    } else {
      const allIds = ['intro', 'pareto', 'gifts', 'role', 'characteristics', 'summary'];
      setExpandedSections(new Set(allIds));
    }
    setExpandAll(!expandAll);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Chapter Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
            <Users className="w-7 h-7 text-white" />
          </div>
          <div>
            <div className="text-sm text-indigo-600 font-semibold">第二章</div>
            <h1 className="text-3xl font-bold text-gray-900">代禱者</h1>
          </div>
        </div>
        
        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl">
          <p className="text-lg text-gray-800 font-medium italic">
            「有代禱恩賜的人不多，然而代禱卻是每一位忠心的基督徒都應期許自己扮演的角色。」
          </p>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={toggleAll}
            className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-indigo-200 text-indigo-700 rounded-lg hover:bg-indigo-50 transition-colors font-medium"
          >
            {expandAll ? (
              <>
                <ChevronUp className="w-4 h-4" />
                <span>收合全部</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                <span>展開全部</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Section 1: 派瑞特原則 */}
      <Section
        id="pareto"
        icon={Target}
        title="20/80法則：重要的少數"
        isExpanded={expandedSections.has('pareto')}
        onToggle={() => toggleSection('pareto')}
      >
        <div className="space-y-6">
          <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
            <h4 className="font-bold text-indigo-900 mb-4">📊 派瑞特原則 (Pareto Principle)</h4>
            <p className="text-gray-700 mb-4">
              義大利經濟學者派瑞特（Vilfredo Pareto）在上世紀末葉有一項驚人的發現：無論一個國家使用什麼稅務體制，幾乎都是<strong className="text-indigo-700">百分之20的人控制著百分之80的資金</strong>。
            </p>
            <p className="text-gray-700">
              從那時候開始，人們嘗試將「派瑞特原則」應用到各個領域，發現這個比例驚人地準確：
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {paretoExamples.map((example, idx) => (
              <div key={idx} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-4 border border-indigo-200">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{example.icon}</span>
                  <span className="font-semibold text-gray-900">{example.field}</span>
                </div>
                <p className="text-sm text-gray-700">{example.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl p-6 border-2 border-purple-300">
            <h4 className="font-bold text-purple-900 mb-4 text-lg flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              教會中的代禱者比例
            </h4>
            <p className="text-gray-700 mb-3">
              作者的研究顯示，在地方教會中，少數的重要代禱者之比例<strong className="text-purple-700">更接近百分之5</strong>而非百分之20。
            </p>
            <div className="bg-white rounded-lg p-5 border border-purple-200">
              <p className="text-xl font-bold text-purple-900 text-center mb-2">
                平均 5% 的會友
              </p>
              <p className="text-center text-gray-600 mb-3">提供了教會內</p>
              <p className="text-3xl font-bold text-purple-700 text-center">
                80% 有意義的代禱
              </p>
            </div>
            <p className="text-sm text-gray-600 mt-4 italic">
              這不是要貶低其他80%會友的禱告，而是要說明：上帝確實呼召了某些人，賜給他們特別的代禱恩賜和負擔。
            </p>
          </div>
        </div>
      </Section>

      {/* Section 2: 屬靈恩賜的教導 */}
      <Section
        id="gifts"
        icon={Gift}
        title="了解屬靈的恩賜"
        isExpanded={expandedSections.has('gifts')}
        onToggle={() => toggleSection('gifts')}
      >
        <div className="space-y-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
            <p className="text-gray-700 mb-2">
              <strong className="text-blue-900">哥林多前書 12:1</strong>
            </p>
            <p className="text-gray-800 italic">
              「弟兄們，論到屬靈的恩賜，我不願意你們不明白。」
            </p>
          </div>

          <div className="bg-white border-2 border-indigo-200 rounded-xl p-6">
            <h4 className="font-bold text-indigo-900 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5" />
              基督的身體
            </h4>
            <p className="text-gray-700 mb-3">
              聖經說教會是一個身子，是<strong>基督的身體</strong>（以弗所書 1:22-23）。基督身體在許多方面的運作就像是人類的身體。
            </p>
            <div className="bg-indigo-50 rounded-lg p-4">
              <p className="text-sm text-gray-700 mb-2">就像人的身體有不同器官：</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-indigo-600">•</span>
                  <span>每個器官有其獨特功能（心臟、肺、眼睛、手）</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-600">•</span>
                  <span>各器官彼此需要，缺一不可</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-600">•</span>
                  <span>沒有「不重要」的器官</span>
                </li>
              </ul>
            </div>
          </div>

          <GiftPrinciple
            title="上帝揀選恩賜"
            verse="哥林多前書 12:11"
            content="只有上帝夠清楚認識我們，可以決定我們應是身體的什麼部位。聖靈「隨己意分給各人」。上帝已隨祂的旨意設立好身子的各肢體，我們所得到的恩賜完全是本於上帝的心意並因祂的恩典而有的。"
          />

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
            <h4 className="font-bold text-green-900 mb-4">📚 恩賜知多少？</h4>
            <p className="text-gray-700 mb-4">
              作者在《你的屬靈恩賜能助你的教會增長》一書中，總結出<strong className="text-green-700">27種屬靈恩賜</strong>：
            </p>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-green-800 mb-2">新約三處主要經文（20項）：</p>
                <p className="text-sm text-gray-700">
                  羅馬書12章、哥林多前書12章、以弗所書4章提到的恩賜
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-green-800 mb-2">其他經文（5項）：</p>
                <p className="text-sm text-gray-700">
                  獨身、賙濟、殉道、款待、宣教
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-200">
                <p className="text-sm font-semibold text-green-800 mb-2">作者增加的（2項）：</p>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>趕鬼（釋放）</strong> 和 <strong className="text-indigo-700">代禱</strong>
                </p>
                <p className="text-xs text-gray-600 italic">
                  「當我與牧師們談到這點時，他們幾乎都有志一同地告訴我，在他們會眾中有些人被公認具有特別的禱告事奉是超過一般人的。」
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 3: 恩賜與角色 */}
      <Section
        id="role"
        icon={Brain}
        title="恩賜與角色的區別"
        isExpanded={expandedSections.has('role')}
        onToggle={() => toggleSection('role')}
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-6 border-2 border-amber-200">
            <h4 className="font-bold text-amber-900 mb-4 text-lg">⚠️ 重要區分</h4>
            <p className="text-gray-700 mb-4">
              每一種屬靈恩賜就好像人體的各部位，它本身只是少數。身體的大部分不是手指，也不都是肺。在教會裏也一樣，<strong>大部分人不是牧師、教師或醫治者</strong>。
            </p>
            <p className="text-lg font-bold text-amber-900 mb-3">
              雖然相形之下每一項屬靈恩賜只有少數基督徒能擁有，但沒有例外地，<span className="text-red-600">每位基督徒都有一項所有恩賜所賦予的角色</span>。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-purple-200 rounded-xl p-6">
              <h5 className="font-bold text-purple-900 mb-4 flex items-center gap-2">
                <Gift className="w-5 h-5" />
                恩賜（Gift）
              </h5>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>上帝主權性的揀選</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>只有少數人擁有</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>超自然的能力</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span>例：代禱恩賜（5%會友）</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
              <h5 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5" />
                角色（Role）
              </h5>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>每位基督徒的責任</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>所有人都應該參與</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>成長中的操練</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>例：代禱角色（所有信徒）</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
            <h5 className="font-bold text-blue-900 mb-3">💡 應用在代禱上</h5>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <p className="font-semibold text-blue-800 mb-2">✝️ 代禱是基督徒的角色</p>
                <p className="text-sm text-gray-700 mb-2">
                  代禱只是禱告中的一種，但卻是非常重要的。聖經描述耶穌自己也是個代禱者：
                </p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 羅馬書 8:34 — 耶穌基督在上帝的右邊「替我們祈求」</li>
                  <li>• 羅馬書 8:27 — 聖靈「照著上帝的旨意替聖徒祈求」</li>
                </ul>
                <p className="text-sm text-gray-700 mt-2">
                  <strong>每位基督徒都被呼召要為別人代禱。</strong>
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <p className="font-semibold text-purple-800 mb-2">🎁 代禱是一種屬靈恩賜</p>
                <p className="text-sm text-gray-700 mb-2">
                  代禱雖不是新約聖經中明確提到的25種恩賜之一，但作者相信它應該被列入其內。
                </p>
                <p className="text-sm text-gray-700">
                  <strong>少數人被賜予代禱恩賜</strong>，他們在禱告事奉上超過一般人。
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 4: 代禱恩賜者的特徵 */}
      <Section
        id="characteristics"
        icon={Sparkles}
        title="有代禱恩賜者的特徵"
        isExpanded={expandedSections.has('characteristics')}
        onToggle={() => toggleSection('characteristics')}
      >
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6 border-2 border-purple-300">
            <p className="text-lg font-bold text-purple-900 mb-4">
              🎯 如何辨認有代禱恩賜的人？
            </p>
            <p className="text-gray-700">
              作者觀察到，具有代禱恩賜的人有以下明顯特徵：
            </p>
          </div>

          {characteristics.map((char, idx) => (
            <CharacteristicCard key={idx} {...char} number={idx + 1} />
          ))}

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
            <h5 className="font-bold text-yellow-900 mb-3">⏰ 禱告時間的差異</h5>
            <p className="text-gray-700 mb-3">
              一般基督徒的禱告時間可能是每天10-15分鐘，但有代禱恩賜的人：
            </p>
            <div className="bg-white rounded-lg p-4 border border-yellow-200">
              <p className="text-center mb-2">
                <span className="text-3xl font-bold text-yellow-900">每天 1-5 小時</span>
              </p>
              <p className="text-sm text-gray-600 text-center">
                至少每天一小時，更常是每天禱告二至五小時
              </p>
            </div>
            <p className="text-sm text-gray-600 mt-3 italic">
              唯一的例外是帶著幼小孩子又要做家事的母親們，她們在時間上受限，但負擔和渴望是一樣的。
            </p>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border-2 border-indigo-200">
            <h5 className="font-bold text-indigo-900 mb-4">🔮 常見的恩賜組合</h5>
            <p className="text-gray-700 mb-4">
              屬靈恩賜經常會以混合的型態連袂而來，某些恩賜更是常成雙對地出現（例如：牧師與教師）。
            </p>
            <p className="text-gray-700 mb-3">
              許多具代禱恩賜的人同時也擁有：
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-white rounded-lg p-4 border border-indigo-200">
                <p className="font-semibold text-indigo-800 mb-1">預言的恩賜</p>
                <p className="text-sm text-gray-700">包括「知識的言語」</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-indigo-200">
                <p className="font-semibold text-indigo-800 mb-1">辨別諸靈的恩賜</p>
                <p className="text-sm text-gray-700">能夠分辨屬靈爭戰</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 5: 章節總結 */}
      <Section
        id="summary"
        icon={Target}
        title="本章總結"
        isExpanded={expandedSections.has('summary')}
        onToggle={() => toggleSection('summary')}
      >
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 border-2 border-indigo-200">
          <h4 className="text-xl font-bold text-indigo-900 mb-6">🎯 第二章核心信息</h4>
          <div className="space-y-4">
            <SummaryPoint
              number={1}
              text="派瑞特原則在教會代禱中更為明顯：平均只有5%的會友提供了80%有意義的代禱。這不是貶低，而是上帝主權性的揀選。"
            />
            <SummaryPoint
              number={2}
              text="屬靈恩賜是上帝隨己意分給各人的，我們無法自己選擇。教會就像基督的身體，每個肢體都有其獨特功能，缺一不可。"
            />
            <SummaryPoint
              number={3}
              text="代禱既是「恩賜」也是「角色」——少數人被賜予代禱恩賜（每天1-5小時禱告），但每位基督徒都有代禱的角色和責任。"
            />
            <SummaryPoint
              number={4}
              text="有代禱恩賜者的五大特徵：禱告時間長、禱告強烈、享受禱告、常見禱告蒙應允、清楚聽見上帝的聲音。"
            />
            <SummaryPoint
              number={5}
              text="代禱恩賜雖不在新約明確列出的25種恩賜中，但作者相信它應該被承認——因為教會中確實有人在這方面被上帝特別使用。"
            />
          </div>
          
          <div className="mt-8 p-6 bg-white rounded-lg border-2 border-indigo-300">
            <p className="text-center text-lg font-bold text-indigo-900 mb-3">
              💭 反思問題
            </p>
            <div className="space-y-2 text-gray-700">
              <p className="text-sm">• 你是否認識教會中有代禱恩賜的人？</p>
              <p className="text-sm">• 你自己是否可能有代禱的恩賜？（檢視五大特徵）</p>
              <p className="text-sm">• 即使沒有恩賜，你如何操練代禱的角色？</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

// Data
const paretoExamples = [
  { icon: '💼', field: '保險業', description: '20%的推銷員賣了80%的保險' },
  { icon: '📚', field: '閱讀', description: '一本書20%的精華提供80%的相關內容' },
  { icon: '🎣', field: '漁業', description: '20%的漁夫補捉了80%的魚' },
  { icon: '💰', field: '教會奉獻', description: '20%的會友奉獻了教會預算的80%' },
  { icon: '🗳️', field: '政治', description: '20%的政治家得到了80%的選票' },
  { icon: '🏢', field: '企業', description: '20%的客戶創造了80%的營收' },
];

const characteristics = [
  {
    title: '禱告比較久',
    description: '至少每天一小時，更常是每天禱告二至五小時。',
    icon: '⏰',
    color: 'purple'
  },
  {
    title: '比一般人更強烈的禱告',
    description: '他們的禱告帶著迫切、火熱和屬靈的權柄，不只是例行公事。',
    icon: '🔥',
    color: 'red'
  },
  {
    title: '更多地享受禱告',
    description: '在禱告中得到較多的個人滿足，禱告對他們來說是喜樂而非重擔。',
    icon: '😊',
    color: 'yellow'
  },
  {
    title: '更常也更戲劇性地看見禱告蒙應允',
    description: '他們經常見證上帝奇妙的作為，禱告的果效清楚可見。',
    icon: '✨',
    color: 'blue'
  },
  {
    title: '十分清楚地聽見上帝的聲音',
    description: '許多人同時還伴隨有預言的恩賜，能夠領受從上帝來的特別信息。',
    icon: '🎧',
    color: 'green'
  },
];

// Component helpers
interface SectionProps {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

function Section({ id, icon: Icon, title, isExpanded, onToggle, children }: SectionProps) {
  return (
    <div className="mb-6">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 bg-white border-2 border-indigo-200 rounded-xl hover:bg-indigo-50 transition-colors group"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
            <Icon className="w-6 h-6 text-indigo-600" />
          </div>
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-indigo-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-indigo-600" />
        )}
      </button>
      {isExpanded && (
        <div className="mt-4 pl-4 border-l-4 border-indigo-200">
          {children}
        </div>
      )}
    </div>
  );
}

interface GiftPrincipleProps {
  title: string;
  verse: string;
  content: string;
}

function GiftPrinciple({ title, verse, content }: GiftPrincipleProps) {
  return (
    <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
      <h5 className="font-bold text-purple-900 mb-2">{title}</h5>
      <p className="text-sm text-purple-700 mb-3 italic">{verse}</p>
      <p className="text-gray-700 text-sm">{content}</p>
    </div>
  );
}

interface CharacteristicCardProps {
  number: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

function CharacteristicCard({ number, title, description, icon, color }: CharacteristicCardProps) {
  const colorClasses = {
    purple: 'from-purple-50 to-purple-100 border-purple-300',
    red: 'from-red-50 to-red-100 border-red-300',
    yellow: 'from-yellow-50 to-yellow-100 border-yellow-300',
    blue: 'from-blue-50 to-blue-100 border-blue-300',
    green: 'from-green-50 to-green-100 border-green-300',
  }[color];

  return (
    <div className={`bg-gradient-to-r ${colorClasses} border-2 rounded-xl p-5`}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl border-2 border-gray-200">
            {icon}
          </div>
        </div>
        <div className="flex-1">
          <h5 className="font-bold text-gray-900 mb-2">
            <span className="text-indigo-600">{number}.</span> {title}
          </h5>
          <p className="text-sm text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
}

interface SummaryPointProps {
  number: number;
  text: string;
}

function SummaryPoint({ number, text }: SummaryPointProps) {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
      <p className="text-gray-700 leading-relaxed pt-1">{text}</p>
    </div>
  );
}
