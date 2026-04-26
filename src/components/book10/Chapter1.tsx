import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Shield, Users, Zap, Heart, BookOpen, Brain, Target, MessageCircle, Sparkles, Globe, Compass } from 'lucide-react';

// ========== Component Helper (必須在 export default 之前定義) ==========
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
    <motion.div 
      className="mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 md:p-7 bg-gradient-to-r from-white to-purple-50/30 border-2 border-purple-200 rounded-2xl hover:border-purple-300 hover:shadow-md transition-all group"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
            <Icon className="w-7 h-7 text-white" />
          </div>
          <h3 className="font-extrabold text-slate-900 text-left" style={{fontSize:"21px"}}>{title}</h3>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-6 h-6 text-purple-600 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-6 h-6 text-purple-600 flex-shrink-0" />
        )}
      </button>
      {isExpanded && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 pl-6 md:pl-8 border-l-4 border-purple-200 bg-white rounded-r-2xl p-6 shadow-sm"
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}

// ========== Main Component ==========
export default function Chapter1({ expandAll }: { expandAll?: boolean }) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = (id: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedSections(newExpanded);
  };

  useEffect(() => {
    if (expandAll) {
      const allIds = ['intro', 'skyline', 'hereford', 'intercession', 'bible', 'power', 'summary'];
      setExpandedSections(new Set(allIds));
    } else {
      setExpandedSections(new Set());
    }
  }, [expandAll]);

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-700">
      >
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
            作者的朋友<strong>馬約翰牧師</strong>牧養聖地牙哥天廓衛理教會（Skyline Wesleyan Church）。在本書中作者常提到他，因為從他那兒學到許多有關牧師的私人代禱同工的事。
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-xl">
            <p className="text-blue-900 font-semibold mb-2" style={{fontSize:"17px"}}>📍 教會增長的挑戰</p>
            <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
              在馬約翰多年的領導之下，上帝祝福這間教會使它實質成長。當人數增長至約三千人時，老舊的會堂已容不下了。主日早晨的三堂崇拜仍無法容納所有想參加禮拜的人。顯而易見地，若要完全接納上帝所託付的百姓，他們需要遷往新的建築。
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
            但在聖地牙哥地區找到夠大的空間並不容易。房地產經紀人告訴他們，現在已不可能找到至少一百英畝的土地了——應該早在十或十五年前找才有可能。
          </p>

          <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
            馬約翰的教會中有<strong className="text-purple-700">一百位高度委身的人為他禱告</strong>。他們與馬約翰及教會領袖們一起禱告。一個月又一個月過去，挫折感愈來愈重，士氣也開始低落。
          </p>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-r-xl mt-4">
            <p className="text-orange-900 font-semibold mb-2" style={{fontSize:"17px"}}>🏗️ 第一次機會：五十英畝的土地</p>
            <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
              沒多久轉機來了。有一塊座落在公路旁的五十英畝土地準備出售，約翰帶著禱告團隊前去察看。經過艱辛的交涉和談判，最後以兩百萬美元成交。約翰及長執們都覺得已考慮清楚所有細節，相信搬遷過去是對的。
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed font-semibold text-red-700 mt-4" style={{fontSize:"17px"}}>
            但馬約翰想確定他們是否真的已經禱告足夠了。畢竟這是教會有史以來最關鍵性的決定之一。
          </p>

          <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
            所以馬約翰對他的代禱夥伴們說：<em>「夥伴們，讓我們弄清楚是否真的做了正確的決定，現在大夥兒全都到那塊土地上再作一次禱告吧！」</em>
          </p>

          <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl mt-4">
            <p className="text-red-900 font-semibold mb-2" style={{fontSize:"17px"}}>⚠️ 「這不是你們的地！」</p>
            <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
              星期六當天，在重要的會友大會之前，馬約翰及他的一百位代禱夥伴前往那塊土地。他們愈禱告就愈開始有種奇怪的感覺，最初只是個別地感覺到，後來則是整體一起感受到了。
            </p>
            <p className="text-red-800 font-bold mt-2" style={{fontSize:"17px"}}>
              在難以想像的掙扎之後，他們彼此坦誠溝通，承認都聽到上帝說：「這不是你們的地！」
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed mt-4" style={{fontSize:"17px"}}>
            在隔天晚上的會友大會上，約翰複述他們決定購買那塊土地的過程。從各方面看，這項決定似乎都是正確的。但有一件事比所有積極正面的跡象都還更重要——<strong className="text-purple-700">那就是透過認真及有效禱告所得到的主的話語</strong>。
          </p>

          <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
            馬約翰建議天廓衛理教會撤回購買土地一案，同時也堅定地向會眾說：若上帝真的告訴他們不要買這塊地，那是因為祂存留更好的福分要給他們。究竟有多美好，在當時是無人能想像的！
          </p>

          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r-xl mt-4">
            <p className="text-green-900 font-semibold mb-2" style={{fontSize:"17px"}}>✨ 上帝的祝福超過想像</p>
            <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
              尋找的過程又再一次開始。他們找到了一塊<strong>八十英畝</strong>的美地，兩次詢問地主是否願意出售都被拒絕。代禱夥伴繼續禱告，很快地主有了財務上的困難，他們願意準備出售了。
            </p>
            <p className="text-gray-700 leading-relaxed mt-2" style={{fontSize:"17px"}}>
              天廓衛理教會出了一個非常低的價錢——<strong>八十英畝地一百八十萬美元</strong>（比之前五十英畝兩百萬更划算）。地主們因財務困難勉強同意出售。
            </p>
            <p className="text-green-800 font-semibold mt-2" style={{fontSize:"17px"}}>
              但奇蹟才剛開始...
            </p>
          </div>

          <ul className="space-y-3 mt-4">
            <li className="flex items-start">
              <span className="text-green-600 mr-2 text-xl">✓</span>
              <span className="text-gray-700" style={{fontSize:"17px"}}>透過評估者發現，土地真正地價是<strong className="text-green-700">四百五十萬美元</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2 text-xl">✓</span>
              <span className="text-gray-700" style={{fontSize:"17px"}}>水權買賣賺了<strong className="text-green-700">十三萬美元</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2 text-xl">✓</span>
              <span className="text-gray-700" style={{fontSize:"17px"}}>測量發現不是八十英畝，而是<strong className="text-green-700">一百一十英畝</strong></span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2 text-xl">✓</span>
              <span className="text-gray-700" style={{fontSize:"17px"}}>水資源處交換得到額外<strong className="text-green-700">二十英畝</strong>（正好是停車場所在）</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2 text-xl">✓</span>
              <span className="text-gray-700" style={{fontSize:"17px"}}>剩餘土地以<strong className="text-green-700">四百萬美元</strong>賣出作為工業用地</span>
            </li>
          </ul>

          <div className="bg-purple-100 border-2 border-purple-300 p-6 rounded-xl mt-4">
            <p className="text-purple-900 font-bold text-center" style={{fontSize:"19px"}}>
              🎉 最終結果：天廓衛理教會得到一塊很好的教會用地，價值可能超過一千萬美元，而總共算起來他們居然<span className="text-purple-700">未花一分錢</span>就得到了！
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed font-semibold text-purple-800 mt-4" style={{fontSize:"17px"}}>
            這都是禱告帶來的果效。透過禱告，牧師的代禱夥伴們聽見上帝說「不」。他們靈性上的成熟度使得他們有足夠的勇氣去行一件自己知道是不尋常的舉動。一旦他們去行了，就開始聽見一連串從上帝而來的「是」，帶領他們跨越門檻，進入天廓衛理教會歷史上最偉大的時期。
          </p>
        </div>
      </Section>

      {/* ========== Section 3: 真實見證 - 德州赫里福德市的復興 ========== */}
      <Section
        id="hereford"
        icon={Sparkles}
        title="真實見證：德州赫里福德市的復興"
        isExpanded={expandedSections.has('hereford')}
        onToggle={() => toggleSection('hereford')}
      >
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
            有關個人代禱能力的另一個真實生活經驗，是從作者的朋友<strong>李拉瑞（Larry Lea）</strong>那兒聽聞的。
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-xl">
            <p className="text-blue-900 font-semibold mb-2" style={{fontSize:"17px"}}>📖 背景：年輕的傳道人</p>
            <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
              當時李拉瑞剛結束神學院的課程，在達拉斯市比佛利山莊浸信會（Beverly Hills Baptist Church）負責服事年輕人。這間教會成長得很好，他的青年團契有一千位青少年，是當地最大的團契之一。
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed mt-4" style={{fontSize:"17px"}}>
            接著他收到他生平第一次主持全市福音佈道會的邀請——地點是德州的<strong>赫里福德市（Hereford）</strong>，人口一萬五千八百五十三人。李拉瑞覺得傳福音是他較強的恩賜之一，而且他有極大的信心，相信上帝會給他在赫里福德市一次靈魂的大豐收。
          </p>

          <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl mt-4">
            <p className="text-red-900 font-semibold mb-2" style={{fontSize:"17px"}}>😟 第一、二天晚上：沒有任何回應</p>
            <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
              <strong>第一天晚上</strong>：他全心全力地傳講，但<span className="text-red-700 font-semibold">沒有一個人回應他的呼召</span>。
            </p>
            <p className="text-gray-700 leading-relaxed mt-2" style={{fontSize:"17px"}}>
              <strong>第二天晚上</strong>：又是同樣的情況。李拉瑞開始擔心了。
            </p>
            <p className="text-red-800 italic mt-2" style={{fontSize:"17px"}}>
              「到底怎麼回事？我知道我的講章蠻不錯的，神學觀點是純正的，福音信息也說得很清楚，但為什麼會這樣呢？當我回達拉斯時要如何向我的青年團契說呢？」
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r-xl mt-4">
            <p className="text-green-900 font-semibold mb-2" style={{fontSize:"17px"}}>🙏 第三天晚上：兩位婦人的禱告</p>
            <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
              第三天晚上的聚會是在衛理公會舉行的。李拉瑞提前到達時，有<strong className="text-green-700">兩位婦人</strong>走向他。
            </p>
            <p className="text-gray-700 leading-relaxed mt-2" style={{fontSize:"17px"}}>
              她們看見他一副很緊張的模樣，就說：<em>「不要擔心，弟兄，今天我們已為你禱告了<strong className="text-green-700">八個小時</strong>。」</em>
            </p>
            <p className="text-gray-700 leading-relaxed mt-2" style={{fontSize:"17px"}}>
              她們並詢問是否可在那兒為他按手禱告。當禱告結束時，其中一位婦人問他說：<em>「『成了』這句話對你有什麼意義嗎？」</em>
            </p>
            <p className="text-green-800 font-semibold mt-2" style={{fontSize:"17px"}}>
              那正是李拉瑞當天晚上信息要用的經文！
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed mt-4" style={{fontSize:"17px"}}>
            他上台傳講，之後有<strong className="text-purple-700 font-bold">一百個人</strong>回應他的呼召！
          </p>

          <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
            隔天晚上李拉瑞又去尋找那兩位女士。她們再次為他禱告，其中另外一位女士問他是否記得患血漏症的婦女。他再次得到印證，因為那正是他為當天晚上所選用的經文！
          </p>

          <div className="bg-purple-100 border-2 border-purple-300 p-6 rounded-xl mt-4">
            <p className="text-purple-900 font-bold" style={{fontSize:"19px"}}>
              📊 本週結果：
            </p>
            <ul className="mt-3 space-y-2">
              <li className="text-gray-800" style={{fontSize:"17px"}}>• 前兩晚（沒有代禱）：0人決志</li>
              <li className="text-gray-800" style={{fontSize:"17px"}}>• 第三晚（8小時代禱）：100人決志</li>
              <li className="text-green-700 font-semibold" style={{fontSize:"17px"}}>• 整週結束：<strong>五百人</strong>決志相信基督！</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-r-xl mt-4">
            <p className="text-yellow-900 font-semibold mb-2" style={{fontSize:"17px"}}>💡 飛機上的啟示</p>
            <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
              在回達拉斯的飛機上，李拉瑞開始思想如何與青年團契分享他佈道成功的好消息。然而在一個安靜的時刻中，李拉瑞清楚地聽到上帝的聲音就近他說：
            </p>
            <p className="text-red-800 font-bold mt-3 text-center text-lg" style={{fontSize:"19px"}}>
              「孩子，你與這次的復興一點關連都沒有。那些人之所以得救，是因為有人為此付上了禱告的代價！」
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed font-semibold text-purple-800 mt-4" style={{fontSize:"17px"}}>
            就在那一刻，李拉瑞學會了為領袖個人代禱的價值。他是戰場上的約書亞，在這種情況下這位佈道家走進了歷史舞台，看見德州赫里福德市有五百人歸向基督。然而，上帝的能力降臨最主要卻是透過這兩位像摩西般的婦人忠心地為領袖代禱。
          </p>
        </div>
      </Section>

      {/* ========== Section 4: 何謂代禱？ ========== */}
      <Section
        id="intercession"
        icon={Heart}
        title="何謂代禱？"
        isExpanded={expandedSections.has('intercession')}
        onToggle={() => toggleSection('intercession')}
      >
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
            我們經常把「代禱」當成是「禱告」的同義詞。在日常的談話裏交替地使用這兩個詞是可以接受的，但是當我們以專業術語的角度來看時，就不可以互換了。
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-xl">
            <p className="text-blue-900 font-semibold mb-2" style={{fontSize:"17px"}}>📖 定義</p>
            <ul className="space-y-2">
              <li className="text-gray-700" style={{fontSize:"17px"}}>
                • <strong>禱告（Prayer）</strong>：向上帝說話
              </li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>
                • <strong>代禱（Intercession）</strong>：為了一個人的益處而來到上帝面前求告
              </li>
            </ul>
            <p className="text-gray-700 mt-3 italic" style={{fontSize:"17px"}}>
              所有的代禱都是禱告，但並非所有的禱告都是代禱。
            </p>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-r-xl mt-4">
            <p className="text-purple-900 font-semibold mb-2" style={{fontSize:"17px"}}>🔤 字源</p>
            <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
              「代禱」（intercession）一字源於拉丁文：
            </p>
            <ul className="mt-2 space-y-1">
              <li className="text-gray-700" style={{fontSize:"17px"}}>• <strong>inter</strong>：意指「之間」</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• <strong>cedere</strong>：意指「前去」</li>
            </ul>
            <p className="text-purple-800 font-semibold mt-3" style={{fontSize:"17px"}}>
              所以代禱就是「去到破口之間或站在破口內」之意。
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed mt-4" style={{fontSize:"17px"}}>
            主曾藉著先知以西結說：<em>「我在他們中間尋找一人重修牆垣，在我面前為這國站在破口防堵，使我不滅絕這國，卻找不著一個。」</em>（結廿二30）這正是對代禱的一個最清楚介紹。
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl mt-4">
            <p className="text-amber-900 font-semibold mb-2" style={{fontSize:"17px"}}>🎯 神學角度的定義</p>
            <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
              「代禱是由一個在上帝眼光中看為<strong className="text-amber-700">有此權利</strong>的人去為另一個有需要的人向上帝懇求，使他能得著上帝恩惠的舉動。」
            </p>
            <p className="text-gray-700 mt-2" style={{fontSize:"17px"}}>
              這段話中有一個重要的點，就是立於上帝面前的人有些夠格、有些則不夠格成為有潛力的代禱者。
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed font-semibold text-purple-800 mt-4" style={{fontSize:"17px"}}>
            以斯帖記這卷書提供了我們一個強有力的聖經比擬，可用來說明代禱者之作用。
          </p>
        </div>
      </Section>

      {/* ========== Section 5: 代禱的聖經基礎 ========== */}
      <Section
        id="bible"
        icon={BookOpen}
        title="代禱的聖經基礎"
        isExpanded={expandedSections.has('bible')}
        onToggle={() => toggleSection('bible')}
      >
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed font-semibold text-purple-800" style={{fontSize:"17px"}}>
            聖經中充滿了代禱者的榜樣。讓我們來看其中幾位最偉大的代禱者。
          </p>

          <div className="bg-blue-50 rounded-xl p-6 mt-4">
            <h4 className="font-bold text-blue-900 mb-3 flex items-center" style={{fontSize:"19px"}}>
              <Shield className="w-5 h-5 mr-2" /> 舊約中最偉大的代禱者：摩西與撒母耳
            </h4>
            <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
              耶利米書十五章一節中，上帝說：<em>「雖有摩西和撒母耳在我面前代求，我的心也不顧惜這百姓。」</em>這裏的要點是代禱者並非操縱上帝的人，有些事上帝早已具體地設定好它必然會有的結果了。而為了要強調這點，上帝提到祂兩位<strong className="text-blue-700">最好的代禱僕人</strong>——摩西與撒母耳。
            </p>

            <div className="mt-4 space-y-3">
              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-blue-800 mb-2" style={{fontSize:"17px"}}>📖 摩西的代禱</p>
                <p className="text-gray-700" style={{fontSize:"17px"}}>
                  • <strong>出埃及記17章</strong>：摩西在山上為約書亞代禱，當摩西舉手時以色列人就得勝
                </p>
                <p className="text-gray-700 mt-1" style={{fontSize:"17px"}}>
                  • <strong>出埃及記32章</strong>：以色列百姓敬拜金牛犢，上帝說要滅絕他們，摩西代求後「耶和華後悔，不把所說的禍降與祂的百姓」
                </p>
                <p className="text-blue-700 italic mt-2" style={{fontSize:"17px"}}>
                  摩西甚至對上帝說：「倘若祢肯赦免他們的罪……不然，求祢從祢所寫的冊上塗抹我的名。」（出卅二32）
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-blue-800 mb-2" style={{fontSize:"17px"}}>📖 撒母耳的代禱</p>
                <p className="text-gray-700" style={{fontSize:"17px"}}>
                  • <strong>撒母耳記上7章</strong>：非利士人要攻擊以色列，以色列人懼怕，對撒母耳說「願你不住地為我們呼求耶和華」，撒母耳代求後，主降下雷聲霹靂，以色列人戰勝了
                </p>
                <p className="text-blue-700 italic mt-2" style={{fontSize:"17px"}}>
                  撒母耳說：「至於我，斷不停止為你們禱告，以致得罪耶和華。」（撒上十二23）
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-6 mt-4">
            <h4 className="font-bold text-green-900 mb-3 flex items-center" style={{fontSize:"19px"}}>
              <Heart className="w-5 h-5 mr-2" /> 新約中無與倫比的代禱者：耶穌
            </h4>
            <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
              耶穌是最無與倫比的代禱者。在約翰福音十七章中祂為百姓的禱告，透露出了祂對子民所存的慈愛心腸，並且祂樂意站立在百姓及天父中間堵住破口。
            </p>
            <p className="text-green-700 font-semibold mt-2" style={{fontSize:"17px"}}>
              直到今日，祂仍持續不斷地為我們代求。「祂是長遠活著，替他們祈求。」（來七25）
            </p>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 mt-4">
            <h4 className="font-bold text-purple-900 mb-3 flex items-center" style={{fontSize:"19px"}}>
              <Users className="w-5 h-5 mr-2" /> 保羅渴求代禱同工
            </h4>
            <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
              很顯然地，使徒保羅深知為領袖個人代禱的價值，因此在他的書信中曾<strong className="text-purple-700">五次要求人為他禱告</strong>。讓我們看看這五處經文：
            </p>

            <div className="mt-4 space-y-3">
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-purple-800" style={{fontSize:"17px"}}>1. 帖撒羅尼迦前書5:25</p>
                <p className="text-gray-700 italic" style={{fontSize:"17px"}}>「請弟兄們為我們禱告。」</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-purple-800" style={{fontSize:"17px"}}>2. 羅馬書15:30</p>
                <p className="text-gray-700 italic" style={{fontSize:"17px"}}>「弟兄們，我藉著我們主耶穌基督，又藉著聖靈的愛，勸你們與我一同竭力，為我祈求上帝。」</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-purple-800" style={{fontSize:"17px"}}>3. 哥林多後書1:11</p>
                <p className="text-gray-700 italic" style={{fontSize:"17px"}}>「你們以祈禱幫助我們...」（這是關乎生死的事）</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-purple-800" style={{fontSize:"17px"}}>4. 腓立比書1:19</p>
                <p className="text-gray-700 italic" style={{fontSize:"17px"}}>「因為我知道這事藉著你們的祈禱，和耶穌基督之靈的幫助，終必叫我得救。」</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="font-semibold text-purple-800" style={{fontSize:"17px"}}>5. 腓利門書22</p>
                <p className="text-gray-700 italic" style={{fontSize:"17px"}}>「我盼望藉著你們的禱告，必蒙恩到你們那裏去。」</p>
              </div>
            </div>

            <p className="text-purple-800 font-semibold mt-4" style={{fontSize:"17px"}}>
              如果連使徒保羅都需要代禱，今天的領袖更需要！
            </p>
          </div>
        </div>
      </Section>

      {/* ========== Section 6: 代禱能力的釋放 ========== */}
      <Section
        id="power"
        icon={Zap}
        title="代禱能力的釋放"
        isExpanded={expandedSections.has('power')}
        onToggle={() => toggleSection('power')}
      >
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed font-semibold text-purple-800" style={{fontSize:"17px"}}>
            代求的能力有多大？有人可能會問：「你真的是說，單單人的祈求就能決定至高全能上帝的作為嗎？」
          </p>

          <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl">
            <p className="text-red-900 font-bold mb-2" style={{fontSize:"19px"}}>答案是肯定的。</p>
            <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
              這就是全能上帝選擇用來設計這個世界並架構我們與祂關係的一種方式。正確的假設是：若以斯帖沒有為猶太人代求，他們將全部被毀滅。直到今日，猶太人仍在他們每年的普珥節紀念並慶祝這事件。
            </p>
            <p className="text-gray-700 mt-2" style={{fontSize:"17px"}}>
              而今日的代禱者亦能確定：在許多情況下若沒有他們忠心的代禱服事，上帝就不會行出祂所行的。
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 mt-4">
            <p className="font-bold text-blue-900 mb-3" style={{fontSize:"19px"}}>💬 神學家和領袖們怎麼說？</p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-blue-800" style={{fontSize:"17px"}}>約翰·衛斯理（John Wesley）</p>
                <p className="text-gray-700 italic mt-1" style={{fontSize:"17px"}}>
                  「除了回覆信心的禱告外，上帝在世上不做任何一件事。」
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-blue-800" style={{fontSize:"17px"}}>加爾文（John Calvin）</p>
                <p className="text-gray-700 italic mt-1" style={{fontSize:"17px"}}>
                  「千言萬語無法說明禱告是何等地必要。」
                </p>
                <p className="text-gray-700 mt-2" style={{fontSize:"17px"}}>
                  他說，在上帝至高主權的安排中並不排除人類信心的運用。雖然以色列的保護者並不打盹也不睡覺，但當祂看見我們又懶又沈默無聲時，祂也是不動的，就好像忘掉了我們一般。
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-blue-800" style={{fontSize:"17px"}}>傑克·海福德（Jack Hayford）</p>
                <p className="text-gray-700 italic mt-1" style={{fontSize:"17px"}}>
                  「我們可以幫忙決定祝福或咒詛這兩者中的那一項臨到世上。我們可以決定是讓上帝的良善在某些特殊的情況中被釋放出來，抑或允許撒但及罪的權勢蔓延氾濫。禱告正是決定的關鍵因素。」
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-blue-800" style={{fontSize:"17px"}}>溫瓦特（Walter Wink）</p>
                <p className="text-gray-700 italic mt-1" style={{fontSize:"17px"}}>
                  「歷史是屬於代禱者的。」
                </p>
                <p className="text-gray-700 mt-2" style={{fontSize:"17px"}}>
                  他拒絕「上帝就是導致這世上所有事件發生的唯一主因」這種看法。上帝是無所不能的，但祂卻為了尊重祂受造物的自由意志之故，而在某些部分自限了祂在地上的作為。在確定禱告可以改變我們的同時，溫瓦特說：「它同時也改變了上帝可能做的事。」
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl mt-4">
            <p className="text-amber-900 font-semibold mb-2" style={{fontSize:"17px"}}>⚔️ 代禱是屬靈的爭戰</p>
            <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
              作者的太太桃麗絲及他個人的代禱同伴珍·白芮德（Jane Anne Pratt）有一次深夜經歷了激烈的屬靈爭戰。當時約翰·麥瑟在東歐各國宣講福音，珍在達拉斯為他代禱。
            </p>
            <p className="text-gray-700 mt-2" style={{fontSize:"17px"}}>
              在某晚凌晨兩點左右，珍被她房間裏一股可怕的強大黑暗力量所驚醒。她說：<em>「我在禱告中爭戰，但牠仍然超過我所能掌握的。牠耗盡了我所有的精力及生命維持系統。我無法動彈——一下子完全地癱瘓了。」</em>
            </p>
            <p className="text-red-700 font-semibold mt-2" style={{fontSize:"17px"}}>
              她察覺到「這股強大的黑暗權勢本是被差遣去破壞約翰的，但牠卻攻擊了我，因為我正站在破口上」。
            </p>
            <p className="text-gray-700 mt-2" style={{fontSize:"17px"}}>
              在爭戰最白熱化時珍呼求援兵，包括天使們及代求者，而上帝兩者都差遣了。就在一眨眼之間，珍感覺到有位天使進入房間並引開那黑暗的邪靈。爭戰結束了，但珍卻軟弱無力，精疲力竭。
            </p>
            <p className="text-green-700 font-semibold mt-2" style={{fontSize:"17px"}}>
              但是她心中卻欣喜無比，因為勝利是屬於上帝的。
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed font-semibold text-purple-800 mt-4" style={{fontSize:"17px"}}>
            身為代禱者，他們可預期自己經常需要與那些想摧毀上帝工作的惡靈爭戰。愛德溫·司脫伯（Edwin Stube）說：「代禱是一種爭戰，而爭戰主要是藉著這種方式來進行的。必須在禱告中先爭戰得勝，然後勝利才可能在現實生活中真正顯出來。」
          </p>
        </div>
      </Section>

      {/* ========== Section 7: 本章總結 ========== */}
      <Section
        id="summary"
        icon={Compass}
        title="本章總結"
        isExpanded={expandedSections.has('summary')}
        onToggle={() => toggleSection('summary')}
      >
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed font-semibold text-purple-800" style={{fontSize:"17px"}}>
            本章揭示了一個被教會忽略卻極其重要的真理：為基督徒領袖代禱的能力。
          </p>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
            <p className="font-bold text-purple-900 mb-3" style={{fontSize:"19px"}}>✨ 關鍵要點回顧</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 text-xl font-bold">1.</span>
                <span className="text-gray-700" style={{fontSize:"17px"}}>
                  <strong>代禱的定義</strong>：不只是「為別人禱告」，而是「站在破口上」，成為上帝與需要之間的橋樑
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 text-xl font-bold">2.</span>
                <span className="text-gray-700" style={{fontSize:"17px"}}>
                  <strong>代禱的能力</strong>：真實的見證顯示，代禱能改變決策（天廓教會）、帶來復興（赫里福德市）
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 text-xl font-bold">3.</span>
                <span className="text-gray-700" style={{fontSize:"17px"}}>
                  <strong>代禱的本質</strong>：是屬靈爭戰，代禱者常成為黑暗權勢首要攻擊的目標
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 text-xl font-bold">4.</span>
                <span className="text-gray-700" style={{fontSize:"17px"}}>
                  <strong>聖經榜樣</strong>：摩西、撒母耳、耶穌、保羅都顯明代禱的重要性
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2 text-xl font-bold">5.</span>
                <span className="text-gray-700" style={{fontSize:"17px"}}>
                  <strong>神學真理</strong>：上帝選擇自限祂的作為，尊重人的禱告——「歷史是屬於代禱者的」
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl mt-4">
            <p className="text-amber-900 font-semibold mb-2" style={{fontSize:"17px"}}>💭 深度反思</p>
            <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
              李拉瑞在飛機上聽到的話值得我們深思：<em>「孩子，你與這次的復興一點關連都沒有。那些人之所以得救，是因為有人為此付上了禱告的代價！」</em>
            </p>
            <p className="text-gray-700 mt-2" style={{fontSize:"17px"}}>
              我們常常重視「看得見的服事」（講道、帶領、服事），卻忽略了「看不見的代禱」。但上帝的能力往往是透過後者釋放出來的。
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed font-semibold text-purple-800 mt-4" style={{fontSize:"17px"}}>
            接下來的章節，我們將深入探討：誰是代禱者？如何成為代禱者？如何組建代禱團隊？
          </p>
        </div>
      </Section>

      {/* ========== 新增區塊將在下一個訊息繼續... ========== */}

    </div>
  );
}

      >
        <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-8 md:p-10 border border-violet-100 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-violet-600" />
            <div>
              <h3 className="font-extrabold text-violet-800" style={{fontSize:"27px"}}>神學深度探討</h3>
              <p className="text-slate-600" style={{fontSize:"17px"}}>四個主題的深入探討，含經文依據與反思問題</p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Topic 1 */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-violet-100"
            >
              <h4 className="font-extrabold text-violet-900 mb-4" style={{fontSize:"21px"}}>
                1. 代禱的神學基礎：站在破口上的聖經意義
              </h4>
              
              <div className="prose prose-slate max-w-none mb-4">
                <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
                  「代禱」（intercession）一字源於拉丁文「inter」（意指「之間」）及「cedere」（意指「前去」），所以代禱就是「去到破口之間或站在破口內」之意。以西結書22:30說：「我在他們中間尋找一人重修牆垣，在我面前為這國站在破口防堵，使我不滅絕這國，卻找不著一個。」
                </p>
                <p className="text-gray-700 leading-relaxed mt-3" style={{fontSize:"17px"}}>
                  這段經文揭示了一個驚人的真理：<strong>上帝的作為常常取決於是否有人站在破口上代求</strong>。以斯帖記提供了最清楚的類比——以斯帖冒著生命危險為她的同胞進謁君王，結果猶太人全族得救。代禱者就像以斯帖，謙卑而不自大，順服權柄，樂意調整自己來聆聽上帝的聲音，甚至冒著危險也要遵行所聽見的。
                </p>
                <p className="text-gray-700 leading-relaxed mt-3" style={{fontSize:"17px"}}>
                  神學家加爾文說：「禱告是如此地重要，以致我們幾乎不可能把它完全說明清楚。」他並不誇張。在上帝至高主權的安排中並不排除人類信心的運用。雖然以色列的保護者並不打盹也不睡覺，但當祂看見我們又懶又沈默無聲時，祂也是不動的，就好像忘掉了我們一般。
                </p>
                <p className="text-purple-800 font-semibold mt-3" style={{fontSize:"17px"}}>
                  這是代禱的奧祕：上帝全能，卻選擇將某些作為繫於人的禱告。
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-5 mb-4 border border-blue-100">
                <div className="font-bold text-blue-800 mb-3" style={{fontSize:"17px"}}>📖 相關經文：</div>
                <ul className="space-y-2">
                  <li className="text-blue-900 leading-relaxed" style={{fontSize:"16px"}}>
                    • 結22:30 我在他們中間尋找一人重修牆垣，在我面前為這國站在破口防堵
                  </li>
                  <li className="text-blue-900 leading-relaxed" style={{fontSize:"16px"}}>
                    • 斯4:14 焉知你得了王后的位分不是為現今的機會嗎
                  </li>
                  <li className="text-blue-900 leading-relaxed" style={{fontSize:"16px"}}>
                    • 出32:9-14 摩西為百姓代求，耶和華後悔，不把所說的禍降與祂的百姓
                  </li>
                  <li className="text-blue-900 leading-relaxed" style={{fontSize:"16px"}}>
                    • 撒上7:8-9 以色列人對撒母耳說：願你不住地為我們呼求耶和華我們的上帝
                  </li>
                  <li className="text-blue-900 leading-relaxed" style={{fontSize:"16px"}}>
                    • 路22:31-32 耶穌對彼得說：我已經為你祈求，叫你不至於失了信心
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
                <div className="font-bold text-amber-800 mb-2" style={{fontSize:"17px"}}>💭 反思：</div>
                <p className="text-gray-700 leading-relaxed italic" style={{fontSize:"16px"}}>
                  你是否曾經歷過「站在破口上」為他人代求的經驗？當時你是否感受到上帝的能力透過你的禱告釋放出來？如果上帝真的在尋找「站在破口上」的人，你願意成為那個人嗎？什麼阻止了你？
                </p>
              </div>
            </motion.div>

            {/* Topic 2 */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-violet-100"
            >
              <h4 className="font-extrabold text-violet-900 mb-4" style={{fontSize:"21px"}}>
                2. 代禱與屬靈爭戰：不可見的戰場
              </h4>
              
              <div className="prose prose-slate max-w-none mb-4">
                <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
                  保羅在腓立比書4:2-3提到友阿爹和循都基時，用了一個極強烈的動詞「synathleo」，意思是「奮鬥」、「搏鬥」或「與我一同爭戰」。聖經學者貝爾（F.W. Beare）指出，這兩位婦人是「與保羅一同敵擋以弗所書6:12中所說執政的、掌權的及天空屬靈氣的惡魔」。
                </p>
                <p className="text-gray-700 leading-relaxed mt-3" style={{fontSize:"17px"}}>
                  代禱不只是溫和的祈求，<strong>更是激烈的屬靈爭戰</strong>。珍·白芮德為約翰·麥瑟在東歐的宣教代禱時，在凌晨兩點被「可怕的強大黑暗力量」攻擊，她察覺到「這股強大的黑暗權勢本是被差遣去破壞約翰的，但牠卻攻擊了我，因為我正站在破口上」。
                </p>
                <p className="text-red-700 font-semibold mt-3" style={{fontSize:"17px"}}>
                  這揭示了代禱的本質：代禱者成為黑暗權勢首要攻擊的目標，因為他們站在領袖與仇敵之間。當代禱者站立時，領袖得到保護；當代禱者倒下時，仇敵就能直接攻擊領袖。
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-5 mb-4 border border-blue-100">
                <div className="font-bold text-blue-800 mb-3" style={{fontSize:"17px"}}>📖 相關經文：</div>
                <ul className="space-y-2">
                  <li className="text-blue-900 leading-relaxed" style={{fontSize:"16px"}}>
                    • 弗6:12 因我們並不是與屬血氣的爭戰，乃是與那些執政的、掌權的爭戰
                  </li>
                  <li className="text-blue-900 leading-relaxed" style={{fontSize:"16px"}}>
                    • 但10:12-13 但以理禁食禱告，天使說：因你的言語蒙應允，我就來了。但波斯國的魔君攔阻我二十一日
                  </li>
                  <li className="text-blue-900 leading-relaxed" style={{fontSize:"16px"}}>
                    • 徒12:5 教會卻為彼得切切地禱告，結果天使救他出監
                  </li>
                  <li className="text-blue-900 leading-relaxed" style={{fontSize:"16px"}}>
                    • 林後1:10-11 祂曾救我們脫離那極大的死亡...你們以祈禱幫助我們
                  </li>
                  <li className="text-blue-900 leading-relaxed" style={{fontSize:"16px"}}>
                    • 西4:12 以巴弗常為你們竭力地祈求
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
                <div className="font-bold text-amber-800 mb-2" style={{fontSize:"17px"}}>💭 反思：</div>
                <p className="text-gray-700 leading-relaxed italic" style={{fontSize:"16px"}}>
                  你是否理解代禱本質上就是屬靈爭戰？當你為領袖代禱時，你是否預備好成為黑暗權勢攻擊的對象？如果代禱確實如此危險，為什麼你仍願意（或不願意）站在破口上？
                </p>
              </div>
            </motion.div>

            {/* Topic 3 */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-violet-100"
            >
              <h4 className="font-extrabold text-violet-900 mb-4" style={{fontSize:"21px"}}>
                3. 代禱的果效：人的禱告能改變上帝的作為嗎？
              </h4>
              
              <div className="prose prose-slate max-w-none mb-4">
                <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
                  有人可能會問：「你真的是說，單單人的祈求就能決定至高全能上帝的作為嗎？」答案是肯定的。這就是全能上帝選擇用來設計這個世界並架構我們與祂關係的一種方式。
                </p>
                <p className="text-gray-700 leading-relaxed mt-3" style={{fontSize:"17px"}}>
                  約翰·衛斯理（John Wesley）說：「除了回覆信心的禱告外，上帝在世上不做任何一件事。」傑克·海福德（Jack Hayford）說：「我們可以幫忙決定祝福或咒詛這兩者中的那一項臨到世上。我們可以決定是讓上帝的良善在某些特殊的情況中被釋放出來，抑或允許撒但及罪的權勢蔓延氾濫。禱告正是決定的關鍵因素。」
                </p>
                <p className="text-purple-800 font-semibold mt-3" style={{fontSize:"17px"}}>
                  聖經證據充足：摩西為百姓代求，「耶和華後悔，不把所說的禍降與祂的百姓」（出32:14）；撒母耳為以色列人代求，耶和華就應允他，擊敗了非利士人（撒上7:9）；教會為彼得切切地禱告，結果天使救他出監（徒12:5）。
                </p>
                <p className="text-gray-700 leading-relaxed mt-3" style={{fontSize:"17px"}}>
                  上帝是無所不能的，但祂卻為了尊重祂受造物的自由意志之故，而在某些部分自限了祂在地上的作為。溫瓦特說：「禱告可以改變我們，同時也改變了上帝可能做的事。」
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-5 mb-4 border border-blue-100">
                <div className="font-bold text-blue-800 mb-3" style={{fontSize:"17px"}}>📖 相關經文：</div>
                <ul className="space-y-2">
                  <li className="text-blue-900 leading-relaxed" style={{fontSize:"16px"}}>
                    • 出32:10-14 上帝說要滅絕百姓，摩西代求，耶和華就後悔不降禍
                  </li>
                  <li className="text-blue-900 leading-relaxed" style={{fontSize:"16px"}}>
                    • 賽62:6-7 你們這提說耶和華名的，不要歇息，也不要使他歇息
                  </li>
                  <li className="text-blue-900 leading-relaxed" style={{fontSize:"16px"}}>
                    • 路18:1-8 寡婦因著不斷祈求而使不義的官給她伸冤
                  </li>
                  <li className="text-blue-900 leading-relaxed" style={{fontSize:"16px"}}>
                    • 雅5:16 義人祈禱所發的力量是大有功效的
                  </li>
                  <li className="text-blue-900 leading-relaxed" style={{fontSize:"16px"}}>
                    • 約壹5:14-15 我們若照他的旨意求什麼，他就聽我們
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
                <div className="font-bold text-amber-800 mb-2" style={{fontSize:"17px"}}>💭 反思：</div>
                <p className="text-gray-700 leading-relaxed italic" style={{fontSize:"16px"}}>
                  你是否真的相信你的禱告能夠改變事情？還是你只是「試試看」而已？如果上帝真的自限祂的作為以尊重人的禱告，那麼你不禱告，會有多少上帝想做的事無法成就？
                </p>
              </div>
            </motion.div>

            {/* Topic 4 */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-violet-100"
            >
              <h4 className="font-extrabold text-violet-900 mb-4" style={{fontSize:"21px"}}>
                4. 摩西與約書亞的模式：服事者與代禱者的分工
              </h4>
              
              <div className="prose prose-slate max-w-none mb-4">
                <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
                  出埃及記17章記載了一個關鍵的真理：約書亞在利非訂谷打仗時，摩西在山上為他代求。當摩西舉手時，約書亞就得勝；當摩西手下垂，約書亞就失敗。最終亞倫與戶珥扶住摩西的手，約書亞贏得了戰爭。
                </p>
                <p className="text-purple-800 font-semibold mt-3" style={{fontSize:"17px"}}>
                  這個故事揭示了代禱者與服事者的分工：約書亞在戰場上打仗（服事），摩西在山上為約書亞代求（代禱）。戰爭的勝敗關鍵不在約書亞的刀劍，而在摩西的禱告。
                </p>
                <p className="text-gray-700 leading-relaxed mt-3" style={{fontSize:"17px"}}>
                  正如作者所說：「至終當然是上帝的能力贏得了戰爭，但在人的部分，最直接被使用來作為上帝能力流通導管的是代禱者摩西，而非將軍約書亞。」溫瓦特（Walter Wink）說：「歷史是屬於代禱者的。」
                </p>
                <p className="text-gray-700 leading-relaxed mt-3" style={{fontSize:"17px"}}>
                  今日許多基督徒領袖就像約書亞一樣，他們在服事中很活躍，是得勝者，人們視他們為上帝成功的僕人。但<strong>這能力從何而來？乃是透過代禱而釋放出來的</strong>。
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-5 mb-4 border border-blue-100">
                <div className="font-bold text-blue-800 mb-3" style={{fontSize:"17px"}}>📖 相關經文：</div>
                <ul className="space-y-2">
                  <li className="text-blue-900 leading-relaxed" style={{fontSize:"16px"}}>
                    • 出17:8-13 摩西舉手時以色列人就得勝，摩西何時垂手亞瑪力人就得勝
                  </li>
                  <li className="text-blue-900 leading-relaxed" style={{fontSize:"16px"}}>
                    • 民11:2 百姓向摩西哀求，摩西祈求耶和華，火就熄了
                  </li>
                  <li className="text-blue-900 leading-relaxed" style={{fontSize:"16px"}}>
                    • 申9:18-19 摩西俯伏在耶和華面前四十晝夜，因耶和華說要滅絕百姓
                  </li>
                  <li className="text-blue-900 leading-relaxed" style={{fontSize:"16px"}}>
                    • 詩106:23 若非有他所揀選的摩西站在當中，使他的忿怒轉消
                  </li>
                  <li className="text-blue-900 leading-relaxed" style={{fontSize:"16px"}}>
                    • 來7:25 凡靠著他進到神面前的人，他都能拯救到底，因為他是長遠活著替他們祈求
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
                <div className="font-bold text-amber-800 mb-2" style={{fontSize:"17px"}}>💭 反思：</div>
                <p className="text-gray-700 leading-relaxed italic" style={{fontSize:"16px"}}>
                  在你的服事或工作中，你是約書亞還是摩西？你是在前線打仗的人，還是在後方代禱的人？如果你是約書亞，你有摩西嗎？如果你是摩西，你知道你的約書亞是誰嗎？
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>


      {/* ========== 新增：台灣處境化應用 ========== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 md:p-10 border border-emerald-100 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-8 h-8 text-emerald-600" />
            <div>
              <h3 className="font-extrabold text-emerald-800" style={{fontSize:"27px"}}>台灣教會處境應用</h3>
              <p className="text-slate-600" style={{fontSize:"17px"}}>五個貼近台灣教會文化的實際案例</p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Example 1 */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-emerald-100"
            >
              <h4 className="font-extrabold text-emerald-900 mb-4" style={{fontSize:"21px"}}>
                🏠 華人教會中的「代禱文化缺席」
              </h4>
              
              <div className="mb-4">
                <div className="text-sm font-bold text-emerald-700 mb-2" style={{fontSize:"15px"}}>📌 現象描述：</div>
                <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
                  在許多華人教會中，代禱往往被視為「次要的服事」。主日崇拜有精美的節目單、詩班有專業的訓練、講道有深度的預備，但代禱往往只是主日結束前匆匆念過的「代禱事項」。許多教會甚至沒有固定的代禱會，更不用說建立牧師的個人代禱團隊。我們重視「看得見的服事」——講台、詩班、招待、兒主——卻忽略了「看不見的服事」：代禱。結果是：牧師孤軍奮戰、同工疲於奔命、教會問題不斷、信徒靈命停滯。
                </p>
              </div>

              <div className="bg-orange-50 rounded-xl p-5 mb-4 border border-orange-200">
                <div className="font-bold text-orange-800 mb-2" style={{fontSize:"17px"}}>🎯 本週挑戰：</div>
                <p className="text-gray-700 leading-relaxed" style={{fontSize:"16px"}}>
                  詢問你的牧師：「您有固定為您代禱的團隊嗎？如果沒有，您願意讓我開始為您代禱嗎？」不要等教會「建立制度」——從你自己開始。每天為牧師禱告15分鐘，持續一個月，然後觀察你和教會的變化。
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                <div className="font-bold text-green-800 mb-2" style={{fontSize:"17px"}}>💡 神學洞見：</div>
                <p className="text-gray-700 leading-relaxed" style={{fontSize:"16px"}}>
                  本章提到馬約翰牧師有100位委身的代禱夥伴，結果教會避免了重大錯誤，得到超過想像的祝福。台灣教會需要的不是更多的「策略」，而是更多站在破口上的代禱者。上帝的能力正等待透過禱告釋放——問題是：有人願意站在破口上嗎？
                </p>
              </div>
            </motion.div>

            {/* Example 2 */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-emerald-100"
            >
              <h4 className="font-extrabold text-emerald-900 mb-4" style={{fontSize:"21px"}}>
                ⛪ 教會領袖的「孤獨戰場」
              </h4>
              
              <div className="mb-4">
                <div className="text-sm font-bold text-emerald-700 mb-2" style={{fontSize:"15px"}}>📌 現象描述：</div>
                <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
                  台灣許多牧師和教會領袖活在極大的孤獨中。他們在講台上看起來剛強，但回到家卻疲憊不堪；他們在會眾面前微笑，但內心充滿掙扎；他們要處理教會大小事務，但沒有人為他們的重擔代求。一位牧師曾私下分享：「我每週預備講章、探訪會友、處理行政、調解糾紛、面對批評...我覺得自己像約書亞在前線打仗，但沒有摩西在山上為我禱告。我不敢說自己軟弱，因為會友期待牧師要『剛強』。」更糟的是，當牧師陷入試探或犯錯時，教會往往是定罪而非代求。我們忘記了：<strong className="text-red-700">牧師是撒但首要攻擊的目標</strong>。
                </p>
              </div>

              <div className="bg-orange-50 rounded-xl p-5 mb-4 border border-orange-200">
                <div className="font-bold text-orange-800 mb-2" style={{fontSize:"17px"}}>🎯 本週挑戰：</div>
                <p className="text-gray-700 leading-relaxed" style={{fontSize:"16px"}}>
                  這週練習「為牧師守望禱告」：選一個固定時間（例如每天早上6:30-7:00），專門為你的牧師禱告。為他的靈命、婚姻、家庭、服事、身體、心理健康代求。一週後，寫一張卡片給牧師，告訴他你在為他禱告（不需要詳述內容）。觀察這對你和牧師的關係有什麼影響。
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                <div className="font-bold text-green-800 mb-2" style={{fontSize:"17px"}}>💡 神學洞見：</div>
                <p className="text-gray-700 leading-relaxed" style={{fontSize:"16px"}}>
                  珍·白芮德為約翰·麥瑟代禱時被黑暗權勢攻擊，她說：「這股強大的黑暗權勢本是被差遣去破壞約翰的，但牠卻攻擊了我，因為我正站在破口上。」台灣教會需要更多願意「站在破口上」、承受屬靈爭戰攻擊的代禱者，好讓牧師能專心在上帝呼召他的服事上。
                </p>
              </div>
            </motion.div>

            {/* Example 3 */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-emerald-100"
            >
              <h4 className="font-extrabold text-emerald-900 mb-4" style={{fontSize:"21px"}}>
                🎓 「理性主義」vs「禱告依賴」
              </h4>
              
              <div className="mb-4">
                <div className="text-sm font-bold text-emerald-700 mb-2" style={{fontSize:"15px"}}>📌 現象描述：</div>
                <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
                  台灣教育文化高度重視理性、分析、策略。許多教會領袖受過高等教育，習慣用「理性思考」解決問題：市場分析、SWOT分析、策略規劃、數據追蹤...這些都很重要，但當它們取代了禱告依賴時，就成了問題。我們會花兩小時開會討論教會增長策略，卻只花五分鐘禱告。我們會參考成功教會的模式，卻不問上帝對我們教會的心意。我們相信「好的策略」勝過「好的禱告」，結果是：策略很多，果效很少。
                </p>
              </div>

              <div className="bg-orange-50 rounded-xl p-5 mb-4 border border-orange-200">
                <div className="font-bold text-orange-800 mb-2" style={{fontSize:"17px"}}>🎯 本週挑戰：</div>
                <p className="text-gray-700 leading-relaxed" style={{fontSize:"16px"}}>
                  下次教會有重要決策時（例如：聘牧、購地、事工方向），建議先用一週時間「禁食禱告尋求」，再來開會討論。觀察：先禱告後討論，跟先討論後禱告，決策的品質有什麼不同？
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                <div className="font-bold text-green-800 mb-2" style={{fontSize:"17px"}}>💡 神學洞見：</div>
                <p className="text-gray-700 leading-relaxed" style={{fontSize:"16px"}}>
                  天廓衛理教會原本要買一塊「從各方面看都很合適」的土地，但代禱團隊禱告後聽到上帝說「不」。結果教會避免了重大錯誤，得到更好的祝福。台灣教會需要學習：理性分析是工具，但禱告尋求是根基。
                </p>
              </div>
            </motion.div>

            {/* Example 4 */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-emerald-100"
            >
              <h4 className="font-extrabold text-emerald-900 mb-4" style={{fontSize:"21px"}}>
                👨‍👩‍👧‍👦 「忙碌文化」與禱告時間的競爭
              </h4>
              
              <div className="mb-4">
                <div className="text-sm font-bold text-emerald-700 mb-2" style={{fontSize:"15px"}}>📌 現象描述：</div>
                <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
                  台灣社會以「忙碌」為榮。學生忙課業、上班族忙工作、父母忙育兒、服事者忙事工。「你最近好嗎？」「很忙！」已成了標準答案。在這種文化中，「每天禱告1-2小時」聽起來像天方夜譚。許多基督徒覺得：「我連每天靈修15分鐘都做不到，怎麼可能禱告1小時？我有工作、有家庭、有服事...時間根本不夠！」於是禱告被擠到生活的邊緣，成為「有空才做」的事。
                </p>
              </div>

              <div className="bg-orange-50 rounded-xl p-5 mb-4 border border-orange-200">
                <div className="font-bold text-orange-800 mb-2" style={{fontSize:"17px"}}>🎯 本週挑戰：</div>
                <p className="text-gray-700 leading-relaxed" style={{fontSize:"16px"}}>
                  這週嘗試「晨間守望」：每天早起30分鐘（是的，要更早起床），專門用來禱告。不是靈修、不是讀經，就只是禱告。連續七天。觀察：當你把禱告放在一天的開始，整天的節奏和心態有什麼不同？
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                <div className="font-bold text-green-800 mb-2" style={{fontSize:"17px"}}>💡 神學洞見：</div>
                <p className="text-gray-700 leading-relaxed" style={{fontSize:"16px"}}>
                  本章提到有位退休弟兄每天清晨4點到教會禱告直到7點。不是每個人都能做到，但問題是：我們是否連嘗試都沒有？上帝不是要每個人都禱告3小時，但祂確實要我們把禱告「當一回事」，而不是「有空才做」。
                </p>
              </div>
            </motion.div>

            {/* Example 5 */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-emerald-100"
            >
              <h4 className="font-extrabold text-emerald-900 mb-4" style={{fontSize:"21px"}}>
                🗣️ 「代禱」vs「閒聊」的界線
              </h4>
              
              <div className="mb-4">
                <div className="text-sm font-bold text-emerald-700 mb-2" style={{fontSize:"15px"}}>📌 現象描述：</div>
                <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
                  許多華人教會的「代禱會」實際上是「分享會」：大家分享近況、訴苦抱怨、彼此安慰，然後最後10分鐘才開始「禱告」。結果是：我們知道彼此的問題，但沒有真正為彼此代求。更糟的是，「代禱事項」常常變成「八卦消息」：「某某人的婚姻有問題，我們要為他們禱告」——然後開始討論細節、分析原因、猜測發展...這不是代禱，這是gossip。真正的代禱者不需要知道所有細節。
                </p>
              </div>

              <div className="bg-orange-50 rounded-xl p-5 mb-4 border border-orange-200">
                <div className="font-bold text-orange-800 mb-2" style={{fontSize:"17px"}}>🎯 本週挑戰：</div>
                <p className="text-gray-700 leading-relaxed" style={{fontSize:"16px"}}>
                  參加代禱會時，嘗試「少說多禱」：當別人分享代禱事項時，立刻在心裡為他開始禱告，而不是問更多問題或分享自己的意見。觀察：當代禱會真的變成「禱告」而不是「分享」時，會發生什麼？
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                <div className="font-bold text-green-800 mb-2" style={{fontSize:"17px"}}>💡 神學洞見：</div>
                <p className="text-gray-700 leading-relaxed" style={{fontSize:"16px"}}>
                  保羅說友阿爹和循都基「在福音上曾與我一同勞苦」，用的是「爭戰」的動詞。真正的代禱不是輕鬆的閒聊，而是激烈的屬靈爭戰。台灣教會需要恢復「代禱」的真正意義。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>


      {/* ========== 新增：四週操練挑戰 ========== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-8 md:p-10 border border-indigo-100 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-8 h-8 text-indigo-600" />
            <div>
              <h3 className="font-extrabold text-indigo-800" style={{fontSize:"27px"}}>四週操練挑戰</h3>
              <p className="text-slate-600" style={{fontSize:"17px"}}>循序漸進的代禱實踐計畫</p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Week 1 */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-indigo-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg font-bold" style={{fontSize:"17px"}}>
                  第一週
                </div>
                <h4 className="font-extrabold text-indigo-900" style={{fontSize:"21px"}}>
                  建立代禱習慣：為一位領袖守望
                </h4>
              </div>

              <div className="mb-4">
                <div className="text-sm font-bold text-indigo-700 mb-2" style={{fontSize:"15px"}}>🎯 本週任務：</div>
                <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
                  選定一位你認識的基督徒領袖（牧師、小組長、同工、宣教士），每天為他/她禱告15-30分鐘，連續七天。為他們的靈命、婚姻與家庭、身體健康、服事果效、面對的試探五大面向代求。
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 mb-4 border border-blue-200">
                <div className="font-bold text-blue-800 mb-1" style={{fontSize:"15px"}}>📖 本週經文：</div>
                <p className="text-blue-900" style={{fontSize:"16px"}}>
                  帖前5:25「請弟兄們為我們禱告。」——保羅五次在書信中要求人為他禱告，因為他深知代禱的價值。
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <div className="font-bold text-purple-800 mb-1" style={{fontSize:"15px"}}>✍️ 日記提示：</div>
                <p className="text-gray-700 leading-relaxed text-sm" style={{fontSize:"15px"}}>
                  每天記錄：(1)今天為誰禱告？禱告了什麼？(2)禱告時有什麼感動或畫面？(3)是否感受到屬靈爭戰？(4)這週結束時：你是否願意成為這位領袖長期的代禱夥伴？
                </p>
              </div>
            </motion.div>

            {/* Week 2 */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-indigo-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg font-bold" style={{fontSize:"17px"}}>
                  第二週
                </div>
                <h4 className="font-extrabold text-indigo-900" style={{fontSize:"21px"}}>
                  學習聆聽：危機代禱的操練
                </h4>
              </div>

              <div className="mb-4">
                <div className="text-sm font-bold text-indigo-700 mb-2" style={{fontSize:"15px"}}>🎯 本週任務：</div>
                <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
                  本週不使用「代禱事項清單」，而是每天在禱告開始時先敬拜讚美15分鐘，然後安靜等候，問上帝：「今天祢要我為誰禱告？為什麼事代求？」記錄上帝放在你心上的人名或事件，然後專注為那人/事代求直到感覺「釋放」。這是學習像克莉斯婷那樣的「危機代禱者」。
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 mb-4 border border-blue-200">
                <div className="font-bold text-blue-800 mb-1" style={{fontSize:"15px"}}>📖 本週經文：</div>
                <p className="text-blue-900" style={{fontSize:"16px"}}>
                  撒上3:9-10「耶和華啊，請說，僕人敬聽！」——撒母耳學會聆聽上帝的聲音，成為偉大的代禱者。
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <div className="font-bold text-purple-800 mb-1" style={{fontSize:"15px"}}>✍️ 日記提示：</div>
                <p className="text-gray-700 leading-relaxed text-sm" style={{fontSize:"15px"}}>
                  每天記錄：(1)敬拜讚美時有什麼感受？(2)上帝放在我心上的人/事是什麼？(3)為什麼是這個人/事？(4)代禱過程中是否感受到爭戰或突破？(5)本週結束時：回顧這七天，上帝透過代禱做了什麼？
                </p>
              </div>
            </motion.div>

            {/* Week 3 */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-indigo-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg font-bold" style={{fontSize:"17px"}}>
                  第三週
                </div>
                <h4 className="font-extrabold text-indigo-900" style={{fontSize:"21px"}}>
                  站在破口上：為教會守望禱告
                </h4>
              </div>

              <div className="mb-4">
                <div className="text-sm font-bold text-indigo-700 mb-2" style={{fontSize:"15px"}}>🎯 本週任務：</div>
                <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
                  本週每天為你的教會禱告30-45分鐘。按這個順序：週一為牧師和領袖團隊、週二為教會的屬靈氛圍與合一、週三為會友的靈命成長、週四為教會面對的挑戰與攻擊、週五為教會未來的方向與異象、週六為特定需要、主日為崇拜和信息。像摩西在山上為約書亞禱告一樣，為在前線爭戰的教會領袖守望。
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 mb-4 border border-blue-200">
                <div className="font-bold text-blue-800 mb-1" style={{fontSize:"15px"}}>📖 本週經文：</div>
                <p className="text-blue-900" style={{fontSize:"16px"}}>
                  結22:30「我在他們中間尋找一人重修牆垣，在我面前為這國站在破口防堵。」——上帝在尋找願意站在破口上的人。
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <div className="font-bold text-purple-800 mb-1" style={{fontSize:"15px"}}>✍️ 日記提示：</div>
                <p className="text-gray-700 leading-relaxed text-sm" style={{fontSize:"15px"}}>
                  每天記錄：(1)今天為教會的哪個層面禱告？有什麼特別的負擔或感動？(2)是否看見教會的「破口」在哪裡？(3)禱告中是否領受到上帝對教會的心意？(4)本週結束時：你是否願意長期成為教會的守望者？
                </p>
              </div>
            </motion.div>

            {/* Week 4 */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-indigo-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg font-bold" style={{fontSize:"17px"}}>
                  第四週
                </div>
                <h4 className="font-extrabold text-indigo-900" style={{fontSize:"21px"}}>
                  組建代禱團隊：從一個人到一群人
                </h4>
              </div>

              <div className="mb-4">
                <div className="text-sm font-bold text-indigo-700 mb-2" style={{fontSize:"15px"}}>🎯 本週任務：</div>
                <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
                  本週挑戰：邀請1-2位弟兄姊妹加入你，開始為某位領袖或某個事工組成「代禱小組」。約定每週一次（實體或線上）一起禱告30-60分鐘，或各自禱告後在群組分享。體驗「亞倫與戶珥扶住摩西的手」——代禱不是solo，而是team work。
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 mb-4 border border-blue-200">
                <div className="font-bold text-blue-800 mb-1" style={{fontSize:"15px"}}>📖 本週經文：</div>
                <p className="text-blue-900" style={{fontSize:"16px"}}>
                  出17:12「摩西的手發沉，亞倫與戶珥就搬石頭來，放在他以下，他就坐在上面。亞倫與戶珥扶著他的手。」
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                <div className="font-bold text-purple-800 mb-1" style={{fontSize:"15px"}}>✍️ 日記提示：</div>
                <p className="text-gray-700 leading-relaxed text-sm" style={{fontSize:"15px"}}>
                  本週記錄：(1)邀請誰加入？他們的回應如何？(2)第一次一起禱告的經驗如何？(3)團隊禱告跟個人禱告有什麼不同？(4)四週挑戰結束：你是否發現自己可能有代禱的恩賜？你是否願意繼續？
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>


      {/* ========== 新增：小組討論問題 ========== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8 md:p-10 border border-rose-100 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <MessageCircle className="w-8 h-8 text-rose-600" />
            <div>
              <h3 className="font-extrabold text-rose-800" style={{fontSize:"27px"}}>小組討論問題</h3>
              <p className="text-slate-600" style={{fontSize:"17px"}}>四個類別，共25題，促進深度對話</p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Category 1 */}
            <div className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-rose-100">
              <h4 className="font-extrabold text-rose-900 mb-4" style={{fontSize:"21px"}}>
                ⚡ 代禱的能力與果效
              </h4>
              <ul className="space-y-3">
                <li className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
                  • 天廓衛理教會因為代禱團隊聽到上帝說「不」而避免了重大錯誤，最後得到價值千萬的土地。你是否經歷過類似的見證？
                </li>
                <li className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
                  • 李拉瑞在赫里福德前兩晚沒有果效，第三晚兩位婦女禱告8小時後有100人決志。這對你理解「代禱與服事果效的關係」有什麼啟發？
                </li>
                <li className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
                  • 作者說「歷史是屬於代禱者的」——你同意嗎？如果代禱真的如此重要，為什麼我們的教會和個人生活中卻如此缺乏？
                </li>
                <li className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
                  • 保羅說他在監獄中「藉著你們的祈禱，終必叫我得救（釋放）」（腓1:19）。你是否真的相信你的禱告能改變別人的處境？
                </li>
                <li className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
                  • 在你的經驗中，代禱蒙應允的比例高嗎？如果不高，可能的原因是什麼？
                </li>
                <li className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
                  • 出埃及記17章說摩西舉手時以色列人就得勝，垂手時就失敗。這對你理解「代禱與服事果效的關係」有什麼啟發？
                </li>
              </ul>
            </div>

            {/* Category 2 */}
            <div className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-rose-100">
              <h4 className="font-extrabold text-rose-900 mb-4" style={{fontSize:"21px"}}>
                🔥 屬靈爭戰的真實性
              </h4>
              <ul className="space-y-3">
                <li className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
                  • 珍·白芮德在凌晨兩點被黑暗權勢攻擊——這對你來說是「真實的經歷」還是「誇大的描述」？為什麼？
                </li>
                <li className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
                  • 保羅說友阿爹和循都基「與我一同爭戰」，用的是激烈的軍事用語。你是否理解代禱本質上就是屬靈爭戰？
                </li>
                <li className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
                  • 你或你認識的人是否曾在代禱中經歷屬靈爭戰？可以分享嗎？那次經驗如何影響你對代禱的看法？
                </li>
                <li className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
                  • 為什麼代禱者會成為黑暗權勢首要攻擊的目標？這對我們理解「站在破口上」的代價有什麼啟發？
                </li>
                <li className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
                  • 如果代禱真的如此危險，你還願意成為代禱者嗎？為什麼願意或不願意？
                </li>
                <li className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
                  • 翟辛蒂在達拉斯感受到珍在德州房間裡的屬靈爭戰——這種「靈裡相通」的經歷對你來說可信嗎？
                </li>
              </ul>
            </div>

            {/* Category 3 */}
            <div className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-rose-100">
              <h4 className="font-extrabold text-rose-900 mb-4" style={{fontSize:"21px"}}>
                📖 聖經與神學基礎
              </h4>
              <ul className="space-y-3">
                <li className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
                  • 「上帝全能，為什麼還需要人禱告？」——讀完本章後你的答案是什麼？
                </li>
                <li className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
                  • 摩西為百姓代求，「耶和華後悔，不把所說的禍降與祂的百姓」（出32:14）——這是什麼意思？人的禱告真的能改變上帝的心意嗎？
                </li>
                <li className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
                  • 出埃及記17章摩西與約書亞的故事：你在這個故事中是摩西還是約書亞？你如何找到你的摩西（或約書亞）？
                </li>
                <li className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
                  • 以斯帖的故事如何成為代禱的類比？代禱者像以斯帖哪些方面？
                </li>
                <li className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
                  • 耶穌自己也是代禱者（來7:25），聖靈也為我們代求（羅8:27）。這對你理解「三一真神都在代禱」有什麼啟發？
                </li>
                <li className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
                  • 撒母耳說：「至於我，斷不停止為你們禱告，以致得罪耶和華」（撒上12:23）——「不禱告」竟然是「得罪上帝」？
                </li>
                <li className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
                  • 約翰·衛斯理說：「除了回覆信心的禱告外，上帝在世上不做任何一件事。」你同意嗎？這會不會太誇張？
                </li>
              </ul>
            </div>

            {/* Category 4 */}
            <div className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-rose-100">
              <h4 className="font-extrabold text-rose-900 mb-4" style={{fontSize:"21px"}}>
                🎯 實踐與行動
              </h4>
              <ul className="space-y-3">
                <li className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
                  • 本章提到馬約翰牧師有100位代禱夥伴。我們的牧師有嗎？如果沒有，我們願意成為那「100人」的一員嗎？
                </li>
                <li className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
                  • 保羅五次在書信中要求人為他禱告。如果保羅都需要代禱，我們的領袖呢？
                </li>
                <li className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
                  • 作為小組，我們是否願意開始「為某位領袖或某個事工組成代禱團隊」？具體可以怎麼做？
                </li>
                <li className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
                  • 四週挑戰中，哪一週對你來說最困難？為什麼？你如何克服？
                </li>
                <li className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
                  • 如果要在我們教會建立「代禱者的職分」（像牧師、執事一樣被認可和按立），你認為需要什麼條件？
                </li>
                <li className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
                  • 你會如何向一個「不相信禱告」或「覺得禱告沒用」的人分享本章的內容？
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ========== 新增：個人反思與行動 ========== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-10 border border-slate-700 shadow-sm text-white">
          <div className="flex items-center gap-3 mb-6">
            <Brain className="w-8 h-8 text-orange-300" />
            <h3 className="font-extrabold text-orange-300" style={{fontSize:"27px"}}>深度反思與行動指南</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-orange-200 mb-4 flex items-center" style={{fontSize:"22px"}}>
                <Brain className="w-5 h-5 mr-2 text-orange-400" /> 個人反思問題
              </h4>
              <ul className="space-y-3">
                <li className="text-slate-300 leading-relaxed" style={{fontSize:"16px"}}>
                  • 我是否曾經歷過「站在破口上」為他人代求的經驗？
                </li>
                <li className="text-slate-300 leading-relaxed" style={{fontSize:"16px"}}>
                  • 如果上帝真的在尋找「站在破口上」的人，我願意成為那個人嗎？什麼阻止了我？
                </li>
                <li className="text-slate-300 leading-relaxed" style={{fontSize:"16px"}}>
                  • 李拉瑞聽到上帝說：「孩子，你與這次的復興一點關連都沒有...」這句話對我有什麼衝擊？
                </li>
                <li className="text-slate-300 leading-relaxed" style={{fontSize:"16px"}}>
                  • 我在服事中，是約書亞還是摩西？我是在前線打仗的人，還是在後方代禱的人？
                </li>
                <li className="text-slate-300 leading-relaxed" style={{fontSize:"16px"}}>
                  • 我是否理解代禱本質上就是屬靈爭戰？我是否預備好成為黑暗權勢攻擊的對象？
                </li>
                <li className="text-slate-300 leading-relaxed" style={{fontSize:"16px"}}>
                  • 我的教會/小組有沒有為領袖代禱的文化和機制？如果沒有，我能做什麼？
                </li>
                <li className="text-slate-300 leading-relaxed" style={{fontSize:"16px"}}>
                  • 我每天花多少時間禱告？其中有多少時間是為別人代求？
                </li>
                <li className="text-slate-300 leading-relaxed" style={{fontSize:"16px"}}>
                  • 四週挑戰結束後，我是否發現自己可能有代禱的恩賜？我願意回應這個呼召嗎？
                </li>
                <li className="text-slate-300 leading-relaxed" style={{fontSize:"16px"}}>
                  • 讀完本章後，我對「禱告能改變事情」的信心有沒有增加？
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-emerald-300 mb-4 flex items-center" style={{fontSize:"22px"}}>
                <Target className="w-5 h-5 mr-2 text-emerald-400" /> 具體行動方案
              </h4>
              <ul className="space-y-3">
                <li className="text-slate-300 leading-relaxed" style={{fontSize:"16px"}}>
                  • 本週找你的牧師，問他：「您有固定為您代禱的人嗎？我可以開始為您代禱嗎？」
                </li>
                <li className="text-slate-300 leading-relaxed" style={{fontSize:"16px"}}>
                  • 每天為一位基督徒領袖禱告15-30分鐘，連續一週，記錄感受。
                </li>
                <li className="text-slate-300 leading-relaxed" style={{fontSize:"16px"}}>
                  • 邀請1-2位弟兄姊妹組成「代禱小組」，每週一次一起禱告30-60分鐘。
                </li>
                <li className="text-slate-300 leading-relaxed" style={{fontSize:"16px"}}>
                  • 在日曆上標出固定的「守望禱告時段」，專門用來為領袖和教會代求。
                </li>
                <li className="text-slate-300 leading-relaxed" style={{fontSize:"16px"}}>
                  • 學習「危機代禱」：本週不用代禱清單，而是在禱告中問上帝：「今天祢要我為誰禱告？」
                </li>
                <li className="text-slate-300 leading-relaxed" style={{fontSize:"16px"}}>
                  • 讀出埃及記17章、32章和撒母耳記上7章，默想摩西和撒母耳的代禱生命。
                </li>
                <li className="text-slate-300 leading-relaxed" style={{fontSize:"16px"}}>
                  • 主日提早30分鐘到教會，為當天的崇拜守望禱告。
                </li>
                <li className="text-slate-300 leading-relaxed" style={{fontSize:"16px"}}>
                  • 認領一位宣教士，每週為他/她禱告。
                </li>
                <li className="text-slate-300 leading-relaxed" style={{fontSize:"16px"}}>
                  • 選一天禁食禱告，專門為教會的一個重要事項代求。
                </li>
                <li className="text-slate-300 leading-relaxed" style={{fontSize:"16px"}}>
                  • 如果教會有代禱會，開始參加。如果沒有，主動跟牧師提議開始一個。
                </li>
                <li className="text-slate-300 leading-relaxed" style={{fontSize:"16px"}}>
                  • 讀《禱告出來的能力》（邦茲）或《祈禱的學校》（慕安得烈）。
                </li>
                <li className="text-slate-300 leading-relaxed" style={{fontSize:"16px"}}>
                  • 在小組或適當場合公開分享：「我正在學習成為代禱者，如果你有代禱需要，可以告訴我。」
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
