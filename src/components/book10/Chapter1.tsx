import { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Users, Zap, Heart } from 'lucide-react';

export default function Chapter1() {
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
      const allIds = ['intro', 'skyline', 'hereford', 'intercession', 'bible', 'power', 'summary'];
      setExpandedSections(new Set(allIds));
    }
    setExpandAll(!expandAll);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Chapter Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
            <Shield className="w-7 h-7 text-white" />
          </div>
          <div>
            <div className="text-sm text-purple-600 font-semibold">第一章</div>
            <h1 className="text-3xl font-bold text-gray-900">建立個人代禱同工所產生的能力</h1>
          </div>
        </div>
        
        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl">
          <p className="text-lg text-gray-800 font-medium italic">
            「在今日教會裏最少被運用的屬靈能力資源，就是為基督徒領袖們代禱的能力。」
          </p>
          <p className="text-sm text-gray-600 mt-2">—— 彼得·魏格納</p>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={toggleAll}
            className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-purple-200 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors font-medium"
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

      {/* Section 1: 核心主張 */}
      <Section
        id="intro"
        icon={Zap}
        title="被忽略的屬靈能力資源"
        isExpanded={expandedSections.has('intro')}
        onToggle={() => toggleSection('intro')}
      >
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            作者開宗明義地提出一個大膽的主張：<strong className="text-purple-700">「在今日教會裏最少被運用的屬靈能力資源，就是為基督徒領袖們代禱的能力。」</strong>
          </p>
          <p className="text-gray-700 leading-relaxed">
            他刻意不說「最少被運用的能力資源<em>之一</em>」，因為沒有任何一件事是如此重要卻又如此被忽略的。我們不僅沒有做，甚至也不常談及它。
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mt-4">
            <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
              <Users className="w-5 h-5" />
              為何如此重要？
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>代禱不是唯一的屬靈能力來源，但卻是「最被低估」的一個</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>許多教會問題不斷、牧師陷入緋聞，背後正是缺乏禱告遮蓋</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>當領袖被代禱者環繞，上帝的能力就以驚人的方式釋放出來</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Section 2: 天廓教會的見證 */}
      <Section
        id="skyline"
        icon={Shield}
        title="真實見證：天廓衛理教會的土地神蹟"
        isExpanded={expandedSections.has('skyline')}
        onToggle={() => toggleSection('skyline')}
      >
        <div className="space-y-6">
          <StoryCard
            title="📍 背景：尋找新堂址"
            content="聖地牙哥天廓衛理教會的馬約翰牧師，帶領教會尋找新的聚會場地。他們找到了一塊80英畝的完美土地，價格合理，位置理想。一切看起來都很順利……"
          />
          
          <StoryCard
            title="🙏 禱告會中的奇妙經歷"
            content="星期六，在重要的會友大會之前，馬約翰和他的100位代禱夥伴前往那塊地禱告。他們愈禱告，就愈開始有種奇怪的感覺——最初只是個別的感受，後來整體一起感受到了。在難以想像的掙扎之後，他們彼此坦誠：都聽到上帝說『這不是你們的地！』"
            highlight={true}
          />

          <StoryCard
            title="😱 會友大會的震撼"
            content="隔天晚上的會友大會上，馬約翰必須站在四千位會友面前宣布：「我們不買這塊地了。」可以想像會眾的反應——困惑、失望、甚至憤怒。但教會順服了從禱告中來的引導。"
          />

          <StoryCard
            title="✨ 神蹟般的翻轉"
            content="接下來發生的事讓所有人驚呆了：\n\n• 教會被迫買下原本3倍的水權分攤費（12萬美元）\n• 但南加州遇到旱災，水權價格飆漲\n• 地主請求買回2/3的水權，價格：25萬美元！\n• 教會不但沒虧，還從這筆交易中賺了13萬美元\n• 最終買到的土地從80英畝變成130英畝，價格更便宜\n\n上帝的智慧遠超過人的計算！"
            highlight={true}
          />

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border-2 border-purple-200">
            <h4 className="font-bold text-purple-900 mb-3 text-lg">💡 這個見證的關鍵</h4>
            <p className="text-gray-700 mb-3">
              不是馬約翰牧師個人有多屬靈，而是他有<strong>一百位委身的代禱夥伴</strong>。當他們一起站在破口上，上帝的聲音就清楚地臨到，拯救教會免於錯誤的決定，並帶來超乎想像的祝福。
            </p>
            <p className="text-sm text-purple-700 italic">
              「為領袖代禱的原則在他的教會裏被運用到最大的程度。」
            </p>
          </div>
        </div>
      </Section>

      {/* Section 3: 李拉瑞的復興故事 */}
      <Section
        id="hereford"
        icon={Heart}
        title="真實見證：德州赫里福德市的復興"
        isExpanded={expandedSections.has('hereford')}
        onToggle={() => toggleSection('hereford')}
      >
        <div className="space-y-6">
          <StoryCard
            title="🎤 年輕傳道人的第一次佈道會"
            content="李拉瑞（Larry Lea）剛從神學院畢業，在達拉斯的比佛利山莊浸信會負責青年事工。他的團契有1000位青少年，是當地最大的團契之一。他收到人生第一次主持全市福音佈道會的邀請——地點是德州的赫里福德市（人口15,853）。"
          />

          <StoryCard
            title="😰 前兩晚的慘敗"
            content="李拉瑞充滿信心地傳講福音。他知道自己有傳福音的恩賜，講章也準備得很好。\n\n第一晚：沒有一個人回應呼召。\n第二晚：還是沒有人。\n\n李拉瑞開始擔心：『到底怎麼回事？我的講章蠻不錯的，神學觀點純正，福音信息清楚，但為什麼會這樣？回達拉斯後要如何向我的青年團契交代？』"
            highlight={true}
          />

          <StoryCard
            title="🙏 兩位婦女的代禱"
            content="第三晚，聚會在衛理公會舉行。李拉瑞提前到達，兩位婦女走向他。她們看見他一副緊張的樣子，就說：『不要擔心，弟兄，今天我們已為你禱告了八個小時。』\n\n她們詢問是否可在那兒為他按手禱告。當禱告結束時，其中一位問：『「成了」這句話對你有什麼意義嗎？』\n\n那正是李拉瑞當晚要用的經文！"
            highlight={true}
          />

          <StoryCard
            title="🔥 突破性的果效"
            content="那天晚上，李拉瑞上台傳講，結果：\n\n• 一百個人回應呼召！\n\n隔天晚上，他又去尋找那兩位女士。她們再次為他禱告，另一位問他是否記得患血漏症的婦女——那又是他當晚選用的經文！\n\n整週結束前，有五百人決志相信基督。"
          />

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-r-lg">
            <h4 className="font-bold text-yellow-900 mb-3">🎯 上帝的當頭棒喝</h4>
            <p className="text-gray-700 mb-3">
              在回達拉斯的飛機上，李拉瑞正想著如何與青年團契分享他佈道成功的好消息。突然，在一個安靜的時刻中，他清楚地聽到上帝的聲音：
            </p>
            <p className="text-lg font-bold text-yellow-900 italic pl-4 border-l-2 border-yellow-400">
              「孩子，你與這次的復興一點關連都沒有。那些人之所以得救，是因為有人為此付上了禱告的代價！」
            </p>
            <p className="text-gray-700 mt-3">
              就在那一刻，李拉瑞學會了為領袖個人代禱的價值。他是戰場上的約書亞，但上帝的能力降臨，最主要卻是透過那兩位像摩西般的婦人忠心地為領袖代禱。
            </p>
          </div>
        </div>
      </Section>

      {/* Section 4: 何謂代禱？ */}
      <Section
        id="intercession"
        icon={Shield}
        title="何謂代禱？"
        isExpanded={expandedSections.has('intercession')}
        onToggle={() => toggleSection('intercession')}
      >
        <div className="space-y-4">
          <div className="bg-white border-2 border-purple-200 rounded-xl p-6">
            <h4 className="font-bold text-purple-900 mb-4">📖 定義釐清</h4>
            <div className="space-y-3">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-purple-600 font-bold">禱告</div>
                <div className="text-gray-700">向上帝說話</div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-purple-600 font-bold">代禱</div>
                <div className="text-gray-700">為了一個人的益處而來到上帝面前求告</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600 italic">
              所有的代禱都是禱告，但並非所有的禱告都是代禱。
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h4 className="font-bold text-blue-900 mb-3">🔍 英文字義探討</h4>
            <p className="text-gray-700 mb-2">
              「代禱」(intercession) 這個字源自於拉丁文 "inter" (between, 在...中間) 和 "cedere" (to go, 去)。
            </p>
            <p className="text-gray-700">
              代禱者就是「站在上帝與人之間的那位」，為別人的需要向上帝懇求。
            </p>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-200">
            <h4 className="font-bold text-red-900 mb-3 text-lg">⚡ 代求的能力有多大？</h4>
            <p className="text-gray-700 mb-3">
              有人可能會問：「你真的是說，單單人的祈求就能決定至高全能上帝的作為嗎？」
            </p>
            <p className="text-lg font-bold text-red-900 mb-3">答案是肯定的。</p>
            <p className="text-gray-700 mb-4">
              這就是全能上帝選擇用來設計這個世界並架構我們與祂關係的一種方式。
            </p>
            
            <div className="bg-white rounded-lg p-4 border border-red-200">
              <p className="text-sm font-semibold text-red-800 mb-2">📜 以斯帖的例子</p>
              <p className="text-gray-700 text-sm">
                若以斯帖沒有為猶太人代求，他們將全部被毀滅。直到今日，猶太人仍在每年的普珥節紀念並慶祝這事件。而今日的代禱者亦可能做出那種決定性的不同。
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 5: 聖經中的代禱榜樣 */}
      <Section
        id="bible"
        icon={Users}
        title="聖經中的代禱榜樣"
        isExpanded={expandedSections.has('bible')}
        onToggle={() => toggleSection('bible')}
      >
        <div className="space-y-6">
          <div className="bg-white border-2 border-purple-200 rounded-xl p-6">
            <h4 className="font-bold text-purple-900 mb-4 text-lg">📖 舊約：摩西與撒母耳</h4>
            <p className="text-gray-700 mb-4">
              耶利米書 15:1 —— 上帝說：「雖有摩西和撒母耳在我面前代求，我的心也不顧惜這百姓。」
            </p>
            <p className="text-gray-700">
              這裏的要點是：代禱者並非操縱上帝的人。但當上帝提到祂兩位最好的代禱僕人時，我們就知道代禱在上帝眼中何等重要。
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
            <h4 className="font-bold text-blue-900 mb-4 text-lg">✝️ 新約：耶穌基督</h4>
            <p className="text-gray-700 mb-3">
              新約裏，耶穌是最無與倫比的代禱者。
            </p>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <p className="text-sm font-semibold text-blue-800 mb-1">約翰福音 17章</p>
                <p className="text-gray-700 text-sm">
                  耶穌為百姓的禱告，透露出祂對子民所存的慈愛心腸，並且祂樂意站立在百姓及天父中間堵住破口。
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <p className="text-sm font-semibold text-blue-800 mb-1">希伯來書 7:25</p>
                <p className="text-gray-700 text-sm">
                  「祂是長遠活著，替他們祈求。」直到今日，祂仍持續不斷地為我們代求。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6">
            <h4 className="font-bold text-purple-900 mb-4 text-lg">📨 使徒保羅渴求代禱同工</h4>
            <p className="text-gray-700 mb-4">
              很顯然地，使徒保羅深知為領袖個人代禱的價值。在他的書信中，他<strong>五次</strong>要求人為他禱告：
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-purple-200 text-purple-800 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                <div>
                  <p className="text-sm font-semibold text-purple-800">帖前 5:25</p>
                  <p className="text-sm text-gray-700">「請弟兄們為我們禱告。」</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-purple-200 text-purple-800 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                <div>
                  <p className="text-sm font-semibold text-purple-800">弗 6:19</p>
                  <p className="text-sm text-gray-700">「也為我祈求，使我得著口才......」</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-purple-200 text-purple-800 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                <div>
                  <p className="text-sm font-semibold text-purple-800">西 4:3</p>
                  <p className="text-sm text-gray-700">「也要為我們禱告......」</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-purple-200 text-purple-800 rounded-full flex items-center justify-center text-xs font-bold">4</span>
                <div>
                  <p className="text-sm font-semibold text-purple-800">羅 15:30-31</p>
                  <p className="text-sm text-gray-700">「弟兄們，我藉著我們主耶穌基督，又藉著聖靈的愛，勸你們與我一同竭力，為我祈求神......」</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-purple-200 text-purple-800 rounded-full flex items-center justify-center text-xs font-bold">5</span>
                <div>
                  <p className="text-sm font-semibold text-purple-800">帖後 3:1</p>
                  <p className="text-sm text-gray-700">「弟兄們，我還有話說：請你們為我們禱告......」</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 6: 上帝能力的釋放 */}
      <Section
        id="power"
        icon={Zap}
        title="上帝的能力如何釋放出來？"
        isExpanded={expandedSections.has('power')}
        onToggle={() => toggleSection('power')}
      >
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-200">
            <h4 className="font-bold text-amber-900 mb-4 text-lg">⚔️ 出埃及記17章：利非訂之戰</h4>
            <p className="text-gray-700 mb-4">
              許多人會記起約書亞擊敗了亞瑪力人的利非訂之戰，約書亞的名字於是永久地被嵌入戰史之中，以贏得利非訂大戰的將軍之名流芳萬世。
            </p>
            <p className="text-gray-700 mb-4 font-semibold">
              但是聖經還告訴了我們故事的其他部分。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-blue-200 rounded-xl p-5">
              <h5 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🗡️</span>
                戰場上：約書亞
              </h5>
              <p className="text-gray-700 text-sm">
                約書亞率領精兵前往戰場，與亞瑪力人實際交戰。他是歷史上被記載的英雄。
              </p>
            </div>
            <div className="bg-white border-2 border-purple-200 rounded-xl p-5">
              <h5 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🙏</span>
                山頂上：摩西
              </h5>
              <p className="text-gray-700 text-sm">
                摩西上到附近的山頂為約書亞代求。他是幕後的代禱者，看起來沒有做什麼。
              </p>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
            <h5 className="font-bold text-red-900 mb-3">🔥 戰爭的真正勝負關鍵</h5>
            <p className="text-gray-700 mb-3">
              摩西何時舉手，以色列人就得勝；何時垂手，亞瑪力人就得勝。
            </p>
            <p className="text-gray-700 mb-3">
              當摩西的手發沉時，亞倫與戶珥就扶著他的手，一個在這邊，一個在那邊，他的手就穩住，直到日落的時候。
            </p>
            <p className="text-lg font-bold text-red-900 italic">
              約書亞的戰功，建立在摩西的代禱上。
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-6 border-2 border-purple-300">
            <h5 className="font-bold text-purple-900 mb-4 text-lg">💡 這個故事的屬靈原則</h5>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-purple-600 text-xl">1.</span>
                <p className="text-gray-700">
                  <strong>兩個戰場同時進行</strong>：屬靈的戰場（禱告）和實際的戰場（行動）
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-600 text-xl">2.</span>
                <p className="text-gray-700">
                  <strong>勝敗的關鍵在山上</strong>：不是約書亞的武力，而是摩西舉起的手
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-600 text-xl">3.</span>
                <p className="text-gray-700">
                  <strong>領袖需要支持者</strong>：摩西也需要亞倫與戶珥扶持他的手
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-600 text-xl">4.</span>
                <p className="text-gray-700">
                  <strong>代禱者釋放上帝的能力</strong>：他們雖在幕後，卻決定了前線的成敗
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 7: 章節總結 */}
      <Section
        id="summary"
        icon={Shield}
        title="本章總結"
        isExpanded={expandedSections.has('summary')}
        onToggle={() => toggleSection('summary')}
      >
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 border-2 border-purple-200">
          <h4 className="text-xl font-bold text-purple-900 mb-6">🎯 第一章核心信息</h4>
          <div className="space-y-4">
            <SummaryPoint
              number={1}
              text="為基督徒領袖代禱是今日教會最被低估、最少運用的屬靈能力資源。"
            />
            <SummaryPoint
              number={2}
              text="代禱不是可有可無的附加品，而是決定領袖事工成敗的關鍵因素——約書亞的勝利建立在摩西的代禱上。"
            />
            <SummaryPoint
              number={3}
              text="真實見證證明：當領袖被忠心的代禱者環繞，上帝的能力就以驚人的方式釋放——天廓教會的土地神蹟、赫里福德市的500人復興。"
            />
            <SummaryPoint
              number={4}
              text="代禱是「站在上帝與人之間」，為別人的益處向上帝懇求。它不是操縱上帝，而是與上帝的心意對齊，成為祂工作的管道。"
            />
            <SummaryPoint
              number={5}
              text="聖經充滿代禱的榜樣：摩西、撒母耳、耶穌、保羅。保羅五次在書信中要求人為他代禱，顯示他深知代禱的價值。"
            />
          </div>
          
          <div className="mt-8 p-6 bg-white rounded-lg border-2 border-purple-300">
            <p className="text-center text-lg font-bold text-purple-900 mb-3">
              ⚡ 行動呼召 ⚡
            </p>
            <p className="text-gray-700 text-center leading-relaxed">
              你是否願意成為一位站在破口上的代禱者？<br />
              或者，你是否願意尋找、呼召並保養為你代禱的同工？<br />
              <span className="text-purple-700 font-semibold">上帝的能力正等待著被釋放！</span>
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

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
        className="w-full flex items-center justify-between p-5 bg-white border-2 border-purple-200 rounded-xl hover:bg-purple-50 transition-colors group"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
            <Icon className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-purple-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-purple-600" />
        )}
      </button>
      {isExpanded && (
        <div className="mt-4 pl-4 border-l-4 border-purple-200">
          {children}
        </div>
      )}
    </div>
  );
}

interface StoryCardProps {
  title: string;
  content: string;
  highlight?: boolean;
}

function StoryCard({ title, content, highlight = false }: StoryCardProps) {
  return (
    <div className={`rounded-lg p-5 ${
      highlight 
        ? 'bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-300' 
        : 'bg-gray-50 border border-gray-200'
    }`}>
      <h5 className={`font-bold mb-3 ${highlight ? 'text-yellow-900' : 'text-gray-900'}`}>
        {title}
      </h5>
      <p className="text-gray-700 whitespace-pre-line leading-relaxed">
        {content}
      </p>
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
      <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
      <p className="text-gray-700 leading-relaxed pt-1">{text}</p>
    </div>
  );
}
