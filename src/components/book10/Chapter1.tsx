import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Zap, Globe, Sparkles, Heart, BookOpen, Shield, Users, Brain, Target, MessageCircle, Compass } from 'lucide-react';

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
      
      <div className="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 rounded-3xl p-8 md:p-10 border border-purple-100 shadow-sm relative overflow-hidden mb-8">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-bold mb-4" style={{fontSize:"17px"}}>
            Chapter 1
          </div>
          <h2 className="md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight" style={{fontSize:"33px"}}>
            建立個人代禱同工所產生的能力
          </h2>
          <p className="text-slate-700 leading-relaxed max-w-3xl mb-6" style={{fontSize:"21px"}}>
            在今日教會裏，最少被運用的屬靈能力資源，就是為基督徒領袖們代禱的能力。
          </p>
          <div className="bg-white/60 backdrop-blur-sm border border-purple-200 rounded-xl p-5 mt-4">
            <p className="text-lg text-gray-800 font-medium italic leading-relaxed" style={{fontSize:"19px"}}>
              在今日教會裏最少被運用的屬靈能力資源，就是為基督徒領袖們代禱的能力。
            </p>
            <p className="text-sm text-gray-600 mt-2" style={{fontSize:"15px"}}>—— 彼得·魏格納</p>
          </div>
        </div>
      </div>

      <Section
        id="intro"
        icon={Zap}
        title="被忽略的屬靈能力資源"
        isExpanded={expandedSections.has('intro')}
        onToggle={() => toggleSection('intro')}
      >
        <div className="space-y-4">
          <div className="bg-purple-50 rounded-xl p-5 border border-purple-100 mb-4">
            <h4 className="font-bold text-purple-900 mb-4" style={{fontSize:"19px"}}>重點整理</h4>

            {/* 核心主張 */}
            <div className="bg-white rounded-xl p-4 border-l-4 border-purple-500 mb-4 shadow-sm">
              <p className="font-bold text-purple-800 mb-2" style={{fontSize:"17px"}}>① 一個令人震驚的大膽主張</p>
              <p className="text-gray-700 leading-relaxed" style={{fontSize:"16px"}}>
                作者開宗明義提出：在今日教會裡<strong>最少被運用的屬靈能力資源</strong>，就是為基督徒領袖們代禱的能力。
                他刻意不說「最少被運用的能力資源<em>之一</em>」，而是直接說「最少被運用的」——
                因為在他數十年的觀察中，沒有任何一件事是如此重要、卻又如此被忽略的。
              </p>
            </div>

            {/* 對比：其他資源 vs 為領袖代禱 */}
            <div className="bg-white rounded-xl p-4 border-l-4 border-blue-400 mb-4 shadow-sm">
              <p className="font-bold text-blue-800 mb-3" style={{fontSize:"17px"}}>② 被重視的資源，與被忽略的代禱</p>
              <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"16px"}}>
                作者列出教會近年來日益重視的屬靈能力資源：
              </p>
              <div className="grid grid-cols-2 gap-2 mb-3">
                {['上帝話語的宣講', '禱告與靈修操練', '敬拜與讚美', '醫治與趕鬼', '認罪與復和', '禁食與等候', '聖禮與聖餐', '屬靈恩賜的運用'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-green-50 rounded-lg px-2 py-1.5">
                    <span className="text-green-600 font-bold text-sm">✓</span>
                    <span className="text-gray-700" style={{fontSize:"15px"}}>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 bg-red-50 rounded-lg px-3 py-2.5 border border-red-200">
                <span className="text-red-500 font-bold text-lg">✗</span>
                <span className="text-red-800 font-semibold" style={{fontSize:"16px"}}>專門為基督徒領袖個人守望的代禱——幾乎付之闕如</span>
              </div>
            </div>

            {/* 這種代禱的定義 */}
            <div className="bg-white rounded-xl p-4 border-l-4 border-amber-400 mb-4 shadow-sm">
              <p className="font-bold text-amber-800 mb-2" style={{fontSize:"17px"}}>③ 「為領袖代禱」是什麼意思？</p>
              <p className="text-gray-700 leading-relaxed mb-2" style={{fontSize:"16px"}}>
                作者強調，這不是禱告會中例行、泛泛的「為教會領袖守護」，而是一種<strong>專門、持續、深入的個人守望式代禱</strong>，包括：
              </p>
              <ul className="space-y-1.5 ml-1">
                {[
                  '定期、忠實地為特定領袖代禱，視之為自己的屬靈使命',
                  '為領袖的靈命狀況、家庭關係、身心健康守望',
                  '為領袖面對的屬靈爭戰和試探站在破口上',
                  '在禱告中回應聖靈帶領，為領袖的具體需要呼求',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700" style={{fontSize:"15px"}}>
                    <span className="text-amber-500 mt-1 flex-shrink-0">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 保羅的五次請求 */}
            <div className="bg-white rounded-xl p-4 border-l-4 border-indigo-400 mb-4 shadow-sm">
              <p className="font-bold text-indigo-800 mb-2" style={{fontSize:"17px"}}>④ 聖經的依據：保羅五次明確請求代禱</p>
              <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"16px"}}>
                使徒保羅在書信中<strong>五次明確請求教會為他個人代禱</strong>，顯示代禱不是可有可無的支持，
                而是屬靈爭戰中生死攸關的武器：
              </p>
              <div className="space-y-2">
                {[
                  { ref: '羅馬書 15:30', text: '懇求你們靠我們主耶穌基督，並聖靈的愛，與我一同竭力，在禱告中為我用力...' },
                  { ref: '以弗所書 6:19', text: '也為我祈求，使我得著口才，能以放膽，開口講明福音的奧祕...' },
                  { ref: '歌羅西書 4:3',  text: '也要為我們禱告，求神給我們開傳道的門...' },
                  { ref: '帖撒羅尼迦前書 5:25', text: '弟兄們，請你們為我們禱告。' },
                  { ref: '帖撒羅尼迦後書 3:1',  text: '弟兄們，我還有一件事，請你們為我們禱告...' },
                ].map((v, i) => (
                  <div key={i} className="bg-indigo-50 rounded-lg px-3 py-2">
                    <span className="font-semibold text-indigo-700" style={{fontSize:"14px"}}>{v.ref}</span>
                    <p className="text-gray-600 leading-relaxed mt-0.5 italic" style={{fontSize:"14px"}}>{v.text}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mt-3 italic" style={{fontSize:"15px"}}>
                若連使徒保羅都如此迫切需要代禱的支持，今天的牧師、傳道人、教會領袖，豈不更需要嗎？
              </p>
            </div>

            {/* 忽略的代價 */}
            <div className="bg-red-50 rounded-xl p-4 border-l-4 border-red-400 shadow-sm">
              <p className="font-bold text-red-800 mb-2" style={{fontSize:"17px"}}>⑤ 忽略代禱的代價</p>
              <p className="text-gray-700 leading-relaxed mb-2" style={{fontSize:"16px"}}>
                撒但深知領袖的影響力——擊倒一位牧師，可以散散一個羊群；摧毀一個教會的領導核心，可以讓整體見證蒙羞。
                當沒有人為領袖守望，他們便在屬靈戰場上陷入孤立，其後果往往包括：
              </p>
              <ul className="space-y-1.5 ml-1">
                {[
                  '道德失足與醜聞——許多曾被上帝使用的領袖因此陷落',
                  '靈命枯竭與倦怠——在服事的外殼下，內心早已荒涼',
                  '家庭破裂——配偶和兒女常常付上最高的代價',
                  '教會分裂——源於領袖屬靈軟弱和人際衝突',
                  '使命停滯——本可突破的服事，因缺乏代禱支撐而受阻',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700" style={{fontSize:"15px"}}>
                    <span className="text-red-500 mt-1 flex-shrink-0">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
            <h4 className="font-bold text-blue-900 mb-3" style={{fontSize:"19px"}}>延伸探討</h4>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              為什麼代禱如此重要卻又如此被忽略？第一，代禱的果效不容易立即看見。講道後可以看到會眾的回應，敬拜可以感受到聖靈的同在，但代禱往往是隱藏的、看不見果效的。第二，代禱是沒有掌聲的服事。講員可以得到讚美，詩班可以得到肯定，但代禱者往往默默無聞。第三，代禱需要付出時間和心力。在忙碌的現代生活中，禱告很容易被排擠到生活的邊緣。
            </p>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              然而，歷史上偉大的復興和屬靈突破，背後往往都有忠心代禱者的付出。摩拉維亞弟兄會持續一百年不間斷的禱告會，帶來了全球宣教運動的興起。查理芬尼的大復興，背後有阿貝爾克拉里在穀倉中的代禱。約翰衛斯理說：除了回覆信心的禱告外，上帝在世上不做任何一件事。這不是誇張，而是屬靈的真理。
            </p>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              從神學角度來看，代禱揭示了上帝工作的奧秘：祂全能，卻選擇透過人的禱告來釋放祂的能力。這不是因為祂需要我們，而是因為祂尊重我們，願意讓我們成為祂工作的同工。當我們代禱時，我們不只是在祈求，更是在與上帝同工，參與祂的救贖計畫。
            </p>
            <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
              在台灣教會的處境中，代禱文化的缺乏可能與我們的理性主義傾向有關。我們相信策略、計畫、方法，卻往往忽略了屬靈的層面。我們會花兩小時開會討論教會增長，卻只花五分鐘禱告。我們會參考成功教會的模式，卻不問上帝對我們教會的心意。結果是：策略很多，果效很少。
            </p>
          </div>

          <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
            <h4 className="font-bold text-amber-900 mb-3" style={{fontSize:"19px"}}>反思問題</h4>
            <ul className="space-y-2">
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 我的教會有沒有為牧師和領袖代禱的文化？如果沒有，可能的原因是什麼？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 我自己有沒有固定為某位基督徒領袖代禱？如果沒有，是因為不知道怎麼禱告，還是因為太忙？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 如果代禱真的如此重要，為什麼我還沒有開始？我在等什麼？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 我是否更重視看得見的服事（講台、詩班、招待）而輕忽看不見的服事（代禱）？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 當我聽到復興的見證時，我是否只羨慕結果，卻不願意付上代禱的代價？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 我的禱告生活是以自己的需要為中心，還是以上帝國度的需要為中心？</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-xl p-5 border border-green-100">
            <h4 className="font-bold text-green-900 mb-3" style={{fontSize:"19px"}}>具體生活實踐應用</h4>
            <ul className="space-y-2">
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 本週選定一位你認識的基督徒領袖，每天為他禱告15分鐘，連續七天</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 寫一張卡片告訴他你在為他禱告（不需要詳述內容），讓他知道有人在守望</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 邀請1-2位弟兄姊妹一起為教會領袖組成代禱小組，每週見面一次</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 在日曆上標出固定的守望禱告時段，將代禱當作重要的約會，不輕易取消</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 主動詢問牧師或小組長的代禱需要，讓他們知道你願意成為他們的代禱夥伴</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 建立代禱日記，記錄你為誰禱告、禱告什麼、以及上帝如何回應</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        id="skyline"
        icon={Globe}
        title="真實見證：天廓衛理教會的屬靈冒險"
        isExpanded={expandedSections.has('skyline')}
        onToggle={() => toggleSection('skyline')}
      >
        <div className="space-y-4">
          <div className="bg-purple-50 rounded-xl p-5 border border-purple-100 mb-4">
            <h4 className="font-bold text-purple-900 mb-3" style={{fontSize:"19px"}}>重點整理</h4>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              馬約翰牧師牧養聖地牙哥天廓衛理教會，在他多年的領導之下，上帝祝福這間教會使它實質成長至約三千人。老舊的會堂已容不下了，他們需要遷往新的建築。
            </p>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              馬約翰的教會中有一百位高度委身的人為他禱告。他們找到一塊五十英畝的土地，以兩百萬美元成交。看起來一切都很好，但馬約翰想確定他們是否真的已經禱告足夠了。所以他對代禱夥伴們說：讓我們弄清楚是否真的做了正確的決定，現在大夥兒全都到那塊土地上再作一次禱告吧！
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl my-3">
              <p className="text-red-900 font-semibold mb-2">代禱團隊聽到上帝說：這不是你們的地！</p>
              <p className="text-gray-700" style={{fontSize:"17px"}}>
                星期六當天，在重要的會友大會之前，馬約翰及他的一百位代禱夥伴前往那塊土地。他們愈禱告就愈開始有種奇怪的感覺，最初只是個別地感覺到，後來則是整體一起感受到了。在難以想像的掙扎之後，他們彼此坦誠溝通，承認都聽到上帝說：這不是你們的地！
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              馬約翰建議天廓衛理教會撤回購買土地一案，同時也堅定地向會眾說：若上帝真的告訴他們不要買這塊地，那是因為祂存留更好的福分要給他們。
            </p>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-xl my-3">
              <p className="text-green-900 font-semibold mb-2">上帝的祝福超過想像</p>
              <p className="text-gray-700 mb-2" style={{fontSize:"17px"}}>
                他們找到了一塊八十英畝的美地，以一百八十萬美元成交（比之前五十英畝兩百萬更划算）。但奇蹟才剛開始...
              </p>
              <ul className="space-y-1 text-gray-700" style={{fontSize:"17px"}}>
                <li>• 透過評估者發現，土地真正地價是四百五十萬美元</li>
                <li>• 水權買賣賺了十三萬美元</li>
                <li>• 測量發現不是八十英畝，而是一百一十英畝</li>
                <li>• 水資源處交換得到額外二十英畝（正好是停車場所在）</li>
                <li>• 剩餘土地以四百萬美元賣出作為工業用地</li>
              </ul>
              <p className="text-green-800 font-bold mt-3" style={{fontSize:"17px"}}>
                最終結果：天廓衛理教會得到一塊很好的教會用地，價值可能超過一千萬美元，而總共算起來他們居然未花一分錢就得到了！
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
            <h4 className="font-bold text-blue-900 mb-3" style={{fontSize:"19px"}}>延伸探討</h4>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              這個見證揭示了代禱的幾個重要真理。第一，代禱不是走形式，而是真正聆聽上帝的聲音。一百位代禱者都聽到上帝說不，這不是巧合，而是聖靈真實的引導。當我們願意在禱告中安靜等候、彼此印證時，上帝的聲音就會清晰顯明。
            </p>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              第二，代禱需要謙卑和順服。即使已經簽約、已經有完美的計畫，但當上帝說不時，他們願意放手。這需要極大的信心和勇氣。想像一下：你花了幾個月找到理想的土地，所有細節都談好了，但在最後一刻上帝說不。你願意順服嗎？還是會找各種理由說服自己「這就是上帝的旨意」？
            </p>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              第三，代禱帶來超過想像的祝福。上帝不只給他們另一塊地，而是給他們一塊更大、更好、最後還不用花錢的地！這揭示了上帝的性格：當我們順服祂時，祂總是給我們超過所求所想的。但前提是：我們願意等候、願意順服。
            </p>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              從這個見證我們也看到，真正的代禱團隊需要具備幾個特質：高度委身（一百位願意在關鍵時刻一起到現場禱告）、靈裡敏銳（能夠聽見上帝的聲音）、彼此坦誠（願意分享自己在禱告中的感動，即使那感動可能與大家的期待相反）、以及順服權柄（支持牧師做困難的決定）。
            </p>
            <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
              在台灣教會的處境中，這個見證特別有意義。我們常常習慣用理性分析做決策：評估財務、分析優缺點、比較方案。這些都很重要，但如果缺少了禱告尋求，我們可能會錯過上帝更好的計畫。天廓教會的見證提醒我們：在重大決策時，禱告不是點綴，而是核心。
            </p>
          </div>

          <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
            <h4 className="font-bold text-amber-900 mb-3" style={{fontSize:"19px"}}>反思問題</h4>
            <ul className="space-y-2">
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 我的教會在重大決策時，有沒有先透過代禱尋求上帝的心意？還是只是走形式？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 如果上帝說不，我願意放棄看起來很好的計畫嗎？還是會找理由說服自己繼續？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 我是否相信代禱真的能夠帶來超過想像的祝福？還是覺得這只是特殊案例？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 我在禱告中能夠安靜等候、聆聽上帝的聲音嗎？還是只會說話、不會聽？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 如果我是那一百位代禱者之一，當大家都感覺到上帝說不時，我有勇氣說出來嗎？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 我的代禱生活是否只求上帝成就我的計畫，而不是尋求祂的心意？</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-xl p-5 border border-green-100">
            <h4 className="font-bold text-green-900 mb-3" style={{fontSize:"19px"}}>具體生活實踐應用</h4>
            <ul className="space-y-2">
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 當教會有重要決策時，主動提議先禁食禱告一週再討論</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 學習在禱告中安靜等候，每次禱告至少留10分鐘靜默聆聽</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 找2-3位弟兄姊妹組成代禱小組，為教會的方向守望，每週見面印證</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 建立代禱日記，記錄在禱告中領受到的感動，事後驗證上帝的引導</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 當你在做重要決定時（換工作、買房、結婚等），先用一週時間禁食禱告</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 培養順服的品格：當上帝的引導與你的計畫不同時，練習說「是，主」</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        id="hereford"
        icon={Sparkles}
        title="真實見證：德州赫里福德市的復興"
        isExpanded={expandedSections.has('hereford')}
        onToggle={() => toggleSection('hereford')}
      >
        <div className="space-y-4">
          <div className="bg-purple-50 rounded-xl p-5 border border-purple-100 mb-4">
            <h4 className="font-bold text-purple-900 mb-3" style={{fontSize:"19px"}}>重點整理</h4>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              李拉瑞剛結束神學院的課程，在達拉斯市比佛利山莊浸信會負責服事年輕人。他收到生平第一次主持全市福音佈道會的邀請，地點是德州的赫里福德市。李拉瑞覺得傳福音是他較強的恩賜之一，而且他有極大的信心，相信上帝會給他在赫里福德市一次靈魂的大豐收。
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl my-3">
              <p className="text-red-900 font-semibold mb-2">前兩晚：沒有任何回應</p>
              <p className="text-gray-700" style={{fontSize:"17px"}}>
                第一天晚上他全心全力地傳講，但沒有一個人回應他的呼召。第二天晚上又是同樣的情況。李拉瑞開始擔心了。到底怎麼回事？我知道我的講章蠻不錯的，神學觀點是純正的，福音信息也說得很清楚，但為什麼會這樣呢？
              </p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-xl my-3">
              <p className="text-green-900 font-semibold mb-2">第三晚：兩位婦人禱告8小時，100人決志</p>
              <p className="text-gray-700 mb-2" style={{fontSize:"17px"}}>
                第三天晚上的聚會是在衛理公會舉行的。李拉瑞提前到達時，有兩位婦人走向他。她們看見他一副很緊張的模樣，就說：不要擔心，弟兄，今天我們已為你禱告了八個小時。她們並詢問是否可在那兒為他按手禱告。
              </p>
              <p className="text-gray-700" style={{fontSize:"17px"}}>
                他上台傳講，之後有一百個人回應他的呼召！隔天晚上李拉瑞又去尋找那兩位女士。她們再次為他禱告。整週結束，有五百人決志相信基督！
              </p>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-xl my-3">
              <p className="text-yellow-900 font-semibold mb-2">飛機上的啟示</p>
              <p className="text-gray-700" style={{fontSize:"17px"}}>
                在回達拉斯的飛機上，李拉瑞開始思想如何與青年團契分享他佈道成功的好消息。然而在一個安靜的時刻中，李拉瑞清楚地聽到上帝的聲音就近他說：孩子，你與這次的復興一點關連都沒有。那些人之所以得救，是因為有人為此付上了禱告的代價！
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
            <h4 className="font-bold text-blue-900 mb-3" style={{fontSize:"19px"}}>延伸探討</h4>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              這個見證揭示了一個令人震撼的真理：服事的果效不在於服事者的能力，而在於代禱者的付出。李拉瑞前兩晚和第三晚的講道品質應該是差不多的——同樣的講員、同樣的恩賜、同樣的信息。但結果天差地別：前兩晚零回應，第三晚一百人決志。差別在哪裡？在於有沒有人為他禱告。
            </p>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              這對今天所有服事者都是重要的提醒：你可以有最好的講章、最完美的企劃、最專業的技巧，但如果沒有人為你代禱，果效可能非常有限。相反地，即使你的能力有限、經驗不足，但如果有人為你守望代禱，上帝的能力就會透過你彰顯。這不是貶低服事者的預備，而是提醒我們：屬靈的事工需要屬靈的能力，而屬靈的能力是透過禱告釋放的。
            </p>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              這個見證也讓我們看到代禱的具體實踐：兩位婦人為李拉瑞禱告了八小時。這不是隨便禱告幾句就結束，而是長時間、深入的代求。她們可能禁食、可能流淚、可能在禱告中經歷屬靈爭戰、可能一遍又一遍地為同樣的需要呼求。當代禱者付上這樣的代價時，上帝的能力就被釋放出來。
            </p>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              更深刻的是，上帝在飛機上對李拉瑞說的話：孩子，你與這次的復興一點關連都沒有。這句話刺痛了李拉瑞的自我，但也釋放了他。刺痛，是因為我們都喜歡居功、喜歡被肯定；釋放，是因為當我們明白一切都是上帝的恩典、都是代禱者的付出時，我們就不需要證明自己、不需要背負成敗的重擔。我們只是器皿，真正做工的是上帝和代禱者。
            </p>
            <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
              在台灣教會的處境中，我們常常過度強調服事者的訓練、技巧、能力，卻忽略了代禱團隊的建立。我們會送傳道人去讀神學院、參加研習會、學習新方法，這些都很重要。但如果沒有代禱團隊的支持，訓練再好的傳道人也可能事倍功半。相反地，一個被代禱托住的傳道人，即使能力有限，也能經歷上帝大能的彰顯。
            </p>
          </div>

          <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
            <h4 className="font-bold text-amber-900 mb-3" style={{fontSize:"19px"}}>反思問題</h4>
            <ul className="space-y-2">
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 我在服事中有沒有依靠自己的能力多過依靠禱告？我是否花更多時間預備技巧而不是預備禱告？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 如果上帝告訴我「你與這次的成功一點關連都沒有」，我會有什麼感受？受傷？釋放？還是不能接受？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 我願意像那兩位婦人一樣，為某位服事者禱告八小時嗎？還是覺得這太誇張、不切實際？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 當我的服事沒有果效時，我會先檢討自己的方法，還是先檢討自己的禱告生活？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 我是否把服事的成功歸功於自己的努力，而忘記了背後代禱者的付出？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 如果我是服事者，我有沒有主動尋求代禱夥伴？還是覺得自己應該可以獨自應付？</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-xl p-5 border border-green-100">
            <h4 className="font-bold text-green-900 mb-3" style={{fontSize:"19px"}}>具體生活實踐應用</h4>
            <ul className="space-y-2">
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 在牧師講道前一天，禁食為他守望禱告至少2-3小時</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 當教會有福音外展活動時，組織代禱團隊在現場或後方守望，輪流禱告</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 認領一位宣教士，每週為他的服事禱告至少30分鐘，了解他的需要</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 如果你是服事者，主動邀請2-3位可信任的人成為你的代禱夥伴</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 嘗試一次長時間代禱（4-8小時），體驗深度代求的力量</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 建立代禱群組，當有緊急需要時可以立即發出代禱呼籲</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        id="intercession"
        icon={Heart}
        title="何謂代禱？"
        isExpanded={expandedSections.has('intercession')}
        onToggle={() => toggleSection('intercession')}
      >
        <div className="space-y-4">
          <div className="bg-purple-50 rounded-xl p-5 border border-purple-100 mb-4">
            <h4 className="font-bold text-purple-900 mb-4" style={{fontSize:"19px"}}>重點整理</h4>

            {/* 禱告 vs 代禱 */}
            <div className="bg-white rounded-xl p-4 border-l-4 border-purple-500 mb-4 shadow-sm">
              <p className="font-bold text-purple-800 mb-2" style={{fontSize:"17px"}}>① 禱告 vs 代禱——重要的區分</p>
              <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"16px"}}>
                我們常把「代禱」和「禱告」當同義詞交替使用，但作者指出這兩者有根本的區別：
              </p>
              <div className="grid grid-cols-2 gap-3 mb-2">
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                  <p className="font-bold text-blue-700 mb-1" style={{fontSize:"15px"}}>禱告（Prayer）</p>
                  <p className="text-gray-600" style={{fontSize:"14px"}}>向上帝說話。範圍廣泛，包括讚美、感謝、認罪、求告，以自我為中心或為國度。</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                  <p className="font-bold text-purple-700 mb-1" style={{fontSize:"15px"}}>代禱（Intercession）</p>
                  <p className="text-gray-600" style={{fontSize:"14px"}}>為了<strong>另一個人的益處</strong>來到上帝面前求告，是他人導向而非自我導向的禱告。</p>
                </div>
              </div>
              <p className="text-gray-600 italic" style={{fontSize:"15px"}}>✦ 所有的代禱都是禱告，但並非所有的禱告都是代禱。</p>
            </div>

            {/* 字源與意義 */}
            <div className="bg-white rounded-xl p-4 border-l-4 border-blue-400 mb-4 shadow-sm">
              <p className="font-bold text-blue-800 mb-2" style={{fontSize:"17px"}}>② 字源揭示代禱的本質</p>
              <p className="text-gray-700 leading-relaxed mb-2" style={{fontSize:"16px"}}>
                「代禱」源自拉丁文：
              </p>
              <div className="flex gap-3 mb-3">
                <div className="bg-indigo-50 rounded-lg px-4 py-2 flex-1 text-center">
                  <p className="font-bold text-indigo-700" style={{fontSize:"16px"}}><em>inter</em></p>
                  <p className="text-gray-600 text-sm">在……之間</p>
                </div>
                <div className="flex items-center text-gray-400 font-bold">+</div>
                <div className="bg-indigo-50 rounded-lg px-4 py-2 flex-1 text-center">
                  <p className="font-bold text-indigo-700" style={{fontSize:"16px"}}><em>cedere</em></p>
                  <p className="text-gray-600 text-sm">前去、走入</p>
                </div>
                <div className="flex items-center text-gray-400 font-bold">=</div>
                <div className="bg-purple-100 rounded-lg px-4 py-2 flex-1 text-center">
                  <p className="font-bold text-purple-700" style={{fontSize:"15px"}}>走入破口之間</p>
                  <p className="text-gray-600 text-sm">站在中間守護</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed" style={{fontSize:"16px"}}>
                代禱者<strong>站在上帝與有需要的人之間</strong>，作為橋樑，透過禱告讓上帝的能力流向那需要的人。這是一個主動進入、不是被動等候的動作。
              </p>
            </div>

            {/* 以西結的呼聲 */}
            <div className="bg-white rounded-xl p-4 border-l-4 border-amber-400 mb-4 shadow-sm">
              <p className="font-bold text-amber-800 mb-2" style={{fontSize:"17px"}}>③ 以西結書的呼聲：上帝在找人</p>
              <div className="bg-amber-50 rounded-lg p-3 mb-3 border border-amber-200">
                <p className="text-amber-900 italic leading-relaxed" style={{fontSize:"16px"}}>
                  「我在他們中間尋找一人，重修牆垣，在我面前為這國站在破口防堵，使我不滅絕這國，<strong>卻找不著一個。</strong>」
                </p>
                <p className="text-amber-700 text-sm mt-1">——以西結書 22:30</p>
              </div>
              <p className="text-gray-700 leading-relaxed" style={{fontSize:"16px"}}>
                這節經文令人心碎：全能的上帝<strong>主動尋找</strong>一個願意站在破口的代禱者，卻找不著一個。這揭示了一個震撼的真相——不是上帝沒有能力介入，而是祂選擇等候人的禱告，等候有人願意「站在破口上」，與祂同工。
              </p>
            </div>

            {/* 站在破口是什麼意思 */}
            <div className="bg-white rounded-xl p-4 border-l-4 border-red-400 mb-4 shadow-sm">
              <p className="font-bold text-red-800 mb-2" style={{fontSize:"17px"}}>④ 「站在破口上」的圖像</p>
              <p className="text-gray-700 leading-relaxed mb-2" style={{fontSize:"16px"}}>
                在古代戰爭中，當城牆被攻破出現缺口，最勇敢的戰士會站在破口處，用自己的身體擋住敵人的進攻——這是最危險的位置，也是最關鍵的位置。代禱者就是這樣的人：
              </p>
              <ul className="space-y-1.5 ml-1">
                {[
                  '當領袖被撒但攻擊時，代禱者站在上帝與領袖之間，為他守護',
                  '當教會陷入危機時，代禱者站在上帝與會眾之間，築起禱告的牆',
                  '當家庭面臨破裂時，代禱者在上帝面前為這個家族懇求',
                  '代禱者不是旁觀者，而是參戰者；不是評論者，而是守護者',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700" style={{fontSize:"15px"}}>
                    <span className="text-red-400 mt-1 flex-shrink-0">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 以斯帖的代禱榜樣 */}
            <div className="bg-white rounded-xl p-4 border-l-4 border-green-400 shadow-sm">
              <p className="font-bold text-green-800 mb-2" style={{fontSize:"17px"}}>⑤ 代禱者的四種品格——以斯帖為榜樣</p>
              <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"16px"}}>
                以斯帖冒著生命危險為同胞進謁君王，是代禱者最鮮明的聖經圖像。她身上展現了代禱者應有的品格：
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: '謙卑', desc: '不以救世主姿態出現，以卑微僕人身分求情' },
                  { label: '順服', desc: '尊重君王的權柄，是懇求而非強求' },
                  { label: '預備', desc: '禁食三天，在進入王面前充分預備自己' },
                  { label: '甘冒風險', desc: '「我若死就死吧」，願意為別人付出自己' },
                ].map((item, i) => (
                  <div key={i} className="bg-green-50 rounded-lg p-2.5 border border-green-200">
                    <p className="font-bold text-green-700 text-sm">{item.label}</p>
                    <p className="text-gray-600" style={{fontSize:"13px"}}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
            <h4 className="font-bold text-blue-900 mb-3" style={{fontSize:"19px"}}>延伸探討</h4>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              站在破口上是什麼意思？在古代戰爭中，當城牆被敵人攻破、出現破口時，最勇敢的戰士會站在破口上，用自己的身體擋住敵人的進攻，直到破口被修補。這是最危險的位置，因為敵人的攻擊會集中在破口處。但如果沒有人站在破口上，整座城就會淪陷。
            </p>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              代禱者就像這樣的戰士。當上帝的百姓面臨危機、當領袖被撒但攻擊、當教會陷入困境時，代禱者站在上帝與人之間，用禱告築起一道保護牆。代禱者不是旁觀者，而是參戰者；不是評論者，而是守護者。代禱者願意承受屬靈爭戰的攻擊，好讓被代禱的人可以安全地完成上帝的呼召。
            </p>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              以斯帖記提供了代禱的完美類比。以斯帖冒著生命危險為她的同胞進謁君王，結果猶太人全族得救。代禱者就像以斯帖：第一，謙卑而不自大——以斯帖不是以救世主的姿態出現，而是以卑微的僕人身分求情。第二，順服權柄——她尊重王的權柄，不是強求而是懇求。第三，樂意調整自己——她禁食三天，預備自己進入王的面前。第四，甚至冒著危險——她說「我若死就死吧」，願意為同胞付出生命的代價。
            </p>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              從神學角度來看，代禱揭示了上帝與人合作的奧秘。上帝全能，祂可以直接介入、直接拯救。但祂選擇透過人的禱告來工作。為什麼？因為祂尊重人的自由意志，也願意讓人參與祂的工作。當我們代禱時，我們不只是在請求上帝做事，更是在與上帝同工，成為祂祝福流通的管道。
            </p>
            <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
              在台灣教會的處境中，我們需要恢復對代禱的正確認識。代禱不是禱告會結束前的例行公事，不是隨口說說「我會為你禱告」，而是嚴肅的委身、是站在破口上的勇氣、是願意付代價的愛。當我們真正理解代禱的意義時，我們就不會輕忽它，也不會輕易承諾它。
            </p>
          </div>

          <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
            <h4 className="font-bold text-amber-900 mb-3" style={{fontSize:"19px"}}>反思問題</h4>
            <ul className="space-y-2">
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 我的禱告生活中，有多少是真正的代禱（為別人）而不只是為自己？比例是多少？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 我是否願意站在破口上，即使可能要付出代價、承受攻擊？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 在我的生命中，誰是站在破口上為我代禱的人？我有沒有感謝過他們？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 當我說「我會為你禱告」時，我是真的會禱告，還是只是客套話？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 我有沒有像以斯帖一樣的特質：謙卑、順服、願意調整、願意冒險？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 我是否理解代禱是與上帝同工，而不只是向上帝求東西？</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-xl p-5 border border-green-100">
            <h4 className="font-bold text-green-900 mb-3" style={{fontSize:"19px"}}>具體生活實踐應用</h4>
            <ul className="space-y-2">
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 每天禱告時，至少花一半時間為別人代求，而不只是為自己</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 列一份代禱清單，包括家人、牧師、教會領袖、宣教士，每天輪流為他們禱告</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 當聽到有人遇到困難時，立刻為他禱告而不只是說「我會為你禱告」</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 學習禁食禱告，為重要的代禱需要付上更大的代價</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 讀以斯帖記，默想代禱者的品格和態度</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 向那些為你代禱的人表達感謝，讓他們知道他們的守望對你的意義</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        id="bible"
        icon={BookOpen}
        title="代禱的聖經基礎"
        isExpanded={expandedSections.has('bible')}
        onToggle={() => toggleSection('bible')}
      >
        <div className="space-y-4">
          <div className="bg-purple-50 rounded-xl p-5 border border-purple-100 mb-4">
            <h4 className="font-bold text-purple-900 mb-4" style={{fontSize:"19px"}}>重點整理</h4>

            {/* 摩西的代禱 */}
            <div className="bg-white rounded-xl p-4 border-l-4 border-purple-500 mb-4 shadow-sm">
              <p className="font-bold text-purple-800 mb-2" style={{fontSize:"17px"}}>① 摩西：代禱改變戰局，甚至改變上帝的決定</p>
              <div className="space-y-3">
                <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
                  <p className="font-semibold text-purple-700 text-sm mb-1">出埃及記 17章——手舉起，就得勝</p>
                  <p className="text-gray-700 leading-relaxed" style={{fontSize:"15px"}}>
                    約書亞在谷中打仗，摩西在山上舉手代禱。<strong>摩西手舉起，以色列人就得勝；手垂下，亞瑪力人就得勝。</strong>
                    最終亞倫與戶珥扶住摩西的手，約書亞贏得戰爭。戰場的勝負，不在刀劍，而在禱告。
                  </p>
                </div>
                <div className="bg-red-50 rounded-lg p-3 border border-red-100">
                  <p className="font-semibold text-red-700 text-sm mb-1">出埃及記 32章——一人的代禱，留住全族的命</p>
                  <p className="text-gray-700 leading-relaxed" style={{fontSize:"15px"}}>
                    以色列百姓敬拜金牛犢，上帝說要滅絕他們。摩西在上帝面前代求，甚至說：
                    「倘若祢肯赦免他們的罪...不然，求祢從祢所寫的冊上塗抹我的名。」
                    結果：<strong>耶和華後悔，不把所說的禍降與百姓。</strong>一個人的代禱，改變了整個民族的命運。
                  </p>
                </div>
              </div>
            </div>

            {/* 撒母耳的代禱 */}
            <div className="bg-white rounded-xl p-4 border-l-4 border-blue-400 mb-4 shadow-sm">
              <p className="font-bold text-blue-800 mb-2" style={{fontSize:"17px"}}>② 撒母耳：代禱呼來雷電，擊退敵軍</p>
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                <p className="font-semibold text-blue-700 text-sm mb-1">撒母耳記上 7章</p>
                <p className="text-gray-700 leading-relaxed" style={{fontSize:"15px"}}>
                  以色列人在米斯巴聚集悔改，非利士人趁機攻打。撒母耳在上帝面前為百姓代求，
                  <strong>耶和華就用大雷轟非利士人，使他們大亂，敗在以色列人面前。</strong>
                  耶利米書15:1中，上帝提到「摩西和撒母耳」，將他們列為最偉大的代禱者——代禱不是少數人的天賦，而是上帝揀選的呼召。
                </p>
              </div>
            </div>

            {/* 耶穌的代禱 */}
            <div className="bg-white rounded-xl p-4 border-l-4 border-amber-400 mb-4 shadow-sm">
              <p className="font-bold text-amber-800 mb-2" style={{fontSize:"17px"}}>③ 耶穌：最無與倫比的代禱者，至今仍在代求</p>
              <div className="space-y-2">
                <div className="bg-amber-50 rounded-lg p-3 border border-amber-100">
                  <p className="font-semibold text-amber-700 text-sm mb-1">約翰福音 17章——大祭司的禱告</p>
                  <p className="text-gray-700 leading-relaxed" style={{fontSize:"15px"}}>
                    受難前夕，耶穌不為自己禱告，而是為門徒、為今後一切信祂的人代求。祂為合一、為聖潔、為保守、為見證代禱。
                    這章禱告「透露出祂對子民所存的慈愛心腸」——這是代禱最深的動力：<strong>愛</strong>。
                  </p>
                </div>
                <div className="bg-amber-50 rounded-lg p-3 border border-amber-100">
                  <p className="font-semibold text-amber-700 text-sm mb-1">希伯來書 7:25——祂現在仍在代求</p>
                  <p className="text-gray-700 leading-relaxed" style={{fontSize:"15px"}}>
                    「祂是長遠活著，替他們祈求。」升天後的耶穌，此刻仍在父的右邊為我們代求。
                    代禱不只是屬地的行動，更是天上正在進行的事工。
                  </p>
                </div>
              </div>
            </div>

            {/* 保羅的五次請求 */}
            <div className="bg-white rounded-xl p-4 border-l-4 border-indigo-400 mb-4 shadow-sm">
              <p className="font-bold text-indigo-800 mb-2" style={{fontSize:"17px"}}>④ 保羅五次明確請求代禱——大使徒也需要守望</p>
              <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"16px"}}>
                使徒保羅書信中明確出現五次「請為我禱告」的請求，顯示領袖尋求代禱不是軟弱，而是智慧：
              </p>
              <div className="space-y-2">
                {[
                  { ref: '帖前 5:25', text: '弟兄們，請你們為我們禱告。', note: '最簡短，最直接' },
                  { ref: '羅 15:30', text: '懇求你們與我一同竭力，在禱告中為我用力，使我脫離在猶太不順從之人的手。', note: '為宣教安全代禱' },
                  { ref: '弗 6:19', text: '也為我祈求，使我得著口才，能以放膽開口，講明福音的奧祕。', note: '為講道的能力代禱' },
                  { ref: '西 4:3', text: '也要為我們禱告，求神給我們開傳道的門，能以講基督的奧祕。', note: '為傳道機會代禱' },
                  { ref: '帖後 3:1', text: '要為我們禱告，使主的道快快行開，得著榮耀。', note: '為福音廣傳代禱' },
                ].map((v, i) => (
                  <div key={i} className="bg-indigo-50 rounded-lg px-3 py-2">
                    <div className="flex justify-between items-center mb-0.5">
                      <span className="font-semibold text-indigo-700" style={{fontSize:"14px"}}>{v.ref}</span>
                      <span className="text-indigo-400 text-xs">{v.note}</span>
                    </div>
                    <p className="text-gray-600 italic leading-relaxed" style={{fontSize:"14px"}}>{v.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 結論 */}
            <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl p-4 border border-purple-200 shadow-sm">
              <p className="font-bold text-purple-900 mb-2" style={{fontSize:"17px"}}>⑤ 聖經代禱的核心邏輯</p>
              <p className="text-gray-700 leading-relaxed" style={{fontSize:"16px"}}>
                耶利米書15:1中，上帝說即使摩西和撒母耳代求，也無法改變某些已定的審判——但這恰恰反映出代禱<strong>通常確實能改變上帝的作為</strong>，否則提到這兩位就毫無意義。聖經的代禱邏輯是：上帝全能，卻主動選擇尊重人的禱告，讓人成為祂工作的同工。
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
            <h4 className="font-bold text-blue-900 mb-3" style={{fontSize:"19px"}}>延伸探討</h4>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              出埃及記17章的故事特別值得深思。約書亞在利非訂谷打仗時，摩西在山上為他代求。當摩西舉手時，約書亞就得勝；當摩西手下垂，約書亞就失敗。最終亞倫與戶珥扶住摩西的手，約書亞贏得了戰爭。這個故事揭示了代禱者與服事者的分工：約書亞在戰場上打仗（服事），摩西在山上為約書亞代求（代禱）。戰爭的勝敗關鍵不在約書亞的刀劍，而在摩西的禱告。
            </p>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              這個故事也揭示了代禱的艱難。摩西舉手代禱並不輕鬆——他的手發沉、疲累、酸痛。代禱不是舒適的靈修，而是辛苦的勞動。當摩西無法再堅持時，亞倫與戶珥扶住他的手。這提醒我們：代禱需要團隊。沒有人可以獨自承擔長期代禱的重擔，我們需要彼此扶持、輪流守望。
            </p>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              出埃及記32章的故事更加震撼。以色列百姓敬拜金牛犢，上帝說要滅絕他們。摩西為百姓代求，甚至對上帝說：倘若祢肯赦免他們的罪...不然，求祢從祢所寫的冊上塗抹我的名。這是何等大的愛！摩西願意為百姓的罪犧牲自己的救恩。這也是代禱的極致：不只是為別人求好處，更是願意為別人付出自己的代價。
            </p>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              保羅五次要求人為他禱告，這對我們也是重要的提醒。如果連使徒保羅都需要代禱，今天的領袖更需要！保羅不是軟弱的人，他寫了新約一半的書信、建立了無數教會、經歷了無數神蹟。但他知道，若沒有代禱者的支持，他無法完成上帝的呼召。這提醒今天的領袖：尋求代禱不是軟弱，而是智慧；不是依賴，而是謙卑。
            </p>
            <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
              在台灣教會的處境中，我們需要恢復對代禱的重視。我們會送領袖去受訓、讀書、進修，這些都很重要。但如果沒有代禱團隊的支持，再好的訓練也可能事倍功半。相反地，一個被代禱托住的領袖，即使能力有限，也能經歷上帝大能的彰顯。
            </p>
          </div>

          <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
            <h4 className="font-bold text-amber-900 mb-3" style={{fontSize:"19px"}}>反思問題</h4>
            <ul className="space-y-2">
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 在我的服事或工作中，我是約書亞還是摩西？我是在前線打仗的人，還是在後方代禱的人？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 如果我是約書亞，我有摩西嗎？如果我是摩西，我知道我的約書亞是誰嗎？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 我有沒有像摩西一樣，願意為別人的罪付出代價、甚至犧牲自己的益處？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 如果連使徒保羅都需要代禱，我為什麼覺得自己不需要？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 我有沒有像保羅一樣，主動尋求代禱夥伴？還是覺得這樣太麻煩、不好意思？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 我有沒有亞倫與戶珥——當我無法堅持代禱時，有人可以扶住我的手嗎？</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-xl p-5 border border-green-100">
            <h4 className="font-bold text-green-900 mb-3" style={{fontSize:"19px"}}>具體生活實踐應用</h4>
            <ul className="space-y-2">
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 讀出埃及記17章、32章和撒母耳記上7章，默想摩西和撒母耳的代禱生命</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 找2-3位願意扮演亞倫與戶珥角色的夥伴，彼此代禱扶持</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 如果你是領袖，邀請可信任的人成為你的代禱團隊，定期分享你的需要</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 學習保羅的榜樣，主動尋求代禱而不覺得不好意思</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 建立代禱輪值表，確保有人在不同時段為教會和領袖守望</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 讀約翰福音17章，默想耶穌的代禱，學習祂的心腸和態度</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        id="power"
        icon={Shield}
        title="代禱能力的釋放"
        isExpanded={expandedSections.has('power')}
        onToggle={() => toggleSection('power')}
      >
        <div className="space-y-4">
          <div className="bg-purple-50 rounded-xl p-5 border border-purple-100 mb-4">
            <h4 className="font-bold text-purple-900 mb-4" style={{fontSize:"19px"}}>重點整理</h4>

            {/* 核心神學命題 */}
            <div className="bg-white rounded-xl p-4 border-l-4 border-purple-500 mb-4 shadow-sm">
              <p className="font-bold text-purple-800 mb-2" style={{fontSize:"17px"}}>① 最震撼的神學命題：人的禱告真的能改變上帝的作為</p>
              <p className="text-gray-700 leading-relaxed mb-2" style={{fontSize:"16px"}}>
                作者提出一個令人震驚卻植根聖經的主張：<strong>單單人的祈求，真的能影響至高全能上帝的作為。</strong>
                這不是說人能操縱上帝，而是上帝主動選擇讓人的禱告成為祂行動的條件。
              </p>
              <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
                <p className="text-gray-700 italic" style={{fontSize:"15px"}}>
                  正確的假設是：<strong>若以斯帖沒有為猶太人代求，他們將全部被毀滅。</strong>
                  上帝有能力介入，卻等候一個人願意站在破口，才釋放祂的能力。
                </p>
              </div>
            </div>

            {/* 上帝自限的神學 */}
            <div className="bg-white rounded-xl p-4 border-l-4 border-blue-400 mb-4 shadow-sm">
              <p className="font-bold text-blue-800 mb-2" style={{fontSize:"17px"}}>② 上帝「自限」的神學——為愛而等候</p>
              <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"16px"}}>
                上帝是全能的，卻選擇讓人的禱告成為祂工作的管道。為什麼？
              </p>
              <ul className="space-y-1.5 ml-1">
                {[
                  '祂不要我們成為機器人，要我們成為兒女、同工',
                  '尊重人的自由意志——強迫的愛不是愛',
                  '讓我們參與祂的計畫，分享祂工作的榮耀',
                  '這是上帝的謙卑：全能者願意等候受造者的禱告',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700" style={{fontSize:"15px"}}>
                    <span className="text-blue-400 mt-1 flex-shrink-0">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 歷代神學家的見證 */}
            <div className="bg-white rounded-xl p-4 border-l-4 border-amber-400 mb-4 shadow-sm">
              <p className="font-bold text-amber-800 mb-2" style={{fontSize:"17px"}}>③ 歷代神學家一致的見證</p>
              <div className="space-y-2">
                {[
                  { name: '約翰衛斯理', quote: '除了回覆信心的禱告外，上帝在世上不做任何一件事。', note: '強調禱告是上帝工作的前提' },
                  { name: '加爾文', quote: '千言萬語無法說明禱告是何等地必要。在上帝至高主權的安排中，並不排除人類信心的運用。', note: '即使主張主權，也肯定禱告的必要' },
                  { name: '傑克海福德', quote: '我們可以幫忙決定祝福或咒詛這兩者中的那一項臨到世上。禱告正是決定的關鍵因素。', note: '代禱有決定性影響力' },
                  { name: '溫瓦特', quote: '歷史是屬於代禱者的。', note: '最簡潔有力的總結' },
                  { name: '愛德溫司脫伯', quote: '代禱是一種爭戰，必須在禱告中先爭戰得勝，然後勝利才可能在現實生活中真正顯出來。', note: '揭示代禱的屬靈爭戰本質' },
                ].map((v, i) => (
                  <div key={i} className="bg-amber-50 rounded-lg px-3 py-2 border border-amber-100">
                    <div className="flex justify-between items-center mb-0.5">
                      <span className="font-semibold text-amber-700" style={{fontSize:"14px"}}>{v.name}</span>
                      <span className="text-amber-400 text-xs italic">{v.note}</span>
                    </div>
                    <p className="text-gray-600 italic leading-relaxed" style={{fontSize:"14px"}}>「{v.quote}」</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 代禱是屬靈爭戰 */}
            <div className="bg-white rounded-xl p-4 border-l-4 border-red-400 mb-4 shadow-sm">
              <p className="font-bold text-red-800 mb-2" style={{fontSize:"17px"}}>④ 代禱是屬靈爭戰——珍白芮德的真實見證</p>
              <div className="bg-red-50 rounded-lg p-3 border border-red-100 mb-3">
                <p className="text-red-900 font-semibold text-sm mb-1">深夜的代禱爭戰</p>
                <p className="text-gray-700 leading-relaxed" style={{fontSize:"15px"}}>
                  珍白芮德深夜為在東歐宣教的約翰麥瑟代禱時，突然被一股強大黑暗力量攻擊，完全癱瘓無法動彈。
                  她後來察覺：<strong>這黑暗權勢本是被差遣去破壞約翰的，卻因她站在破口上而轉而攻擊她。</strong>
                  就在一眨眼之間，一位天使進入房間引開了邪靈。珍精疲力竭，心中卻充滿得勝的喜悅。
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-2" style={{fontSize:"16px"}}>
                這個見證揭示代禱的三個嚴肅真相：
              </p>
              <ul className="space-y-1.5 ml-1">
                {[
                  '代禱者站在破口上，會成為撒但優先攻擊的目標',
                  '代禱不是安全舒適的靈修，而是危險的前線屬靈作戰',
                  '爭戰是真實的，但得勝也是真實的——「勝利是屬於上帝的」',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700" style={{fontSize:"15px"}}>
                    <span className="text-red-400 mt-1 flex-shrink-0">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 代禱者的生命圖像 */}
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-4 border border-purple-200 shadow-sm">
              <p className="font-bold text-purple-900 mb-2" style={{fontSize:"17px"}}>⑤ 代禱者的生命：代價與榮耀並存</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/70 rounded-lg p-3">
                  <p className="font-semibold text-red-700 text-sm mb-1.5">代禱者所付的代價</p>
                  {['時間與精力的犧牲', '屬靈攻擊與爭戰', '疲乏與掙扎', '無人知曉的默默付出'].map((item, i) => (
                    <p key={i} className="text-gray-600 text-xs leading-relaxed">• {item}</p>
                  ))}
                </div>
                <div className="bg-white/70 rounded-lg p-3">
                  <p className="font-semibold text-green-700 text-sm mb-1.5">代禱者所領受的榮耀</p>
                  {['親歷上帝大能的釋放', '與上帝同工的榮耀', '得勝的超越喜悅', '歷史是屬於代禱者的'].map((item, i) => (
                    <p key={i} className="text-gray-600 text-xs leading-relaxed">• {item}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
            <h4 className="font-bold text-blue-900 mb-3" style={{fontSize:"19px"}}>延伸探討</h4>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              這是一個令人震撼的神學真理：人的禱告能改變上帝的作為。但這不是說人能操縱上帝，而是上帝主動選擇限制自己，尊重人的自由意志和禱告。上帝是全能的，但祂卻為了尊重祂受造物的自由意志之故，而在某些部分自限了祂在地上的作為。這是上帝的謙卑，也是上帝的愛。
            </p>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              為什麼上帝要這樣設計？因為祂不要我們成為機器人，祂要我們成為祂的兒女、祂的同工。當我們代禱時，我們不只是在請求上帝做事，更是在與上帝同工、參與祂的計畫、成為祂祝福流通的管道。這是何等大的榮耀！全能的上帝竟然願意等候我們禱告，才釋放祂的能力。
            </p>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              代禱也是屬靈爭戰。作者提到他的太太桃麗絲及代禱同伴珍白芮德的經歷：珍在深夜為在東歐宣教的約翰麥瑟代禱時，被一股可怕的強大黑暗力量攻擊。她說：我在禱告中爭戰，但牠仍然超過我所能掌握的。牠耗盡了我所有的精力及生命維持系統。我無法動彈——一下子完全地癱瘓了。她察覺到這股強大的黑暗權勢本是被差遣去破壞約翰的，但牠卻攻擊了我，因為我正站在破口上。
            </p>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              這揭示了代禱的危險性：當你站在破口上為領袖守望時，你會成為撒但首要攻擊的目標。為什麼？因為撒但知道，如果能擊倒代禱者，領袖就會失去保護。所以代禱不是安全舒適的靈修，而是危險的前線作戰。代禱者需要預備好，自己會經歷屬靈攻擊、會疲累、會掙扎、會受傷。
            </p>
            <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
              但同時，代禱者也會經歷得勝的喜樂。珍的見證說：就在一眨眼之間，珍感覺到有位天使進入房間並引開那黑暗的邪靈。爭戰結束了，但珍卻軟弱無力，精疲力竭。但是她心中卻欣喜無比，因為勝利是屬於上帝的。這就是代禱者的生命：經歷爭戰的痛苦，也經歷得勝的喜樂；付出巨大的代價，也領受超越的賞賜。
            </p>
          </div>

          <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
            <h4 className="font-bold text-amber-900 mb-3" style={{fontSize:"19px"}}>反思問題</h4>
            <ul className="space-y-2">
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 我是否真的相信我的禱告能夠改變事情？還是只是試試看而已？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 我是否理解代禱本質上就是屬靈爭戰？我是否預備好成為黑暗權勢攻擊的對象？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 如果代禱確實如此危險，為什麼我仍願意（或不願意）站在破口上？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 我有沒有經歷過像珍那樣的屬靈爭戰？如果沒有，可能的原因是什麼？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 當我的禱告似乎沒有被回應時，我是否會懷疑禱告的能力？還是繼續堅持？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 我是否把代禱當作一種責任、重擔，還是當作一種榮耀、特權？</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-xl p-5 border border-green-100">
            <h4 className="font-bold text-green-900 mb-3" style={{fontSize:"19px"}}>具體生活實踐應用</h4>
            <ul className="space-y-2">
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 學習屬靈爭戰的禱告：穿上全副軍裝（以弗所書6章）、奉耶穌的名抵擋黑暗權勢</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 為正在經歷屬靈爭戰的領袖或宣教士守望禱告，特別是在他們服事的關鍵時刻</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 與代禱夥伴建立緊急聯絡機制，當遇到屬靈攻擊時可以立即支援</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 學習辨識屬靈爭戰的徵兆：異常的疲累、莫名的恐懼、突然的試探等</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 建立代禱防護：定期為自己的屬靈防護禱告，穿上屬靈的全副軍裝</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 閱讀關於屬靈爭戰的書籍，裝備自己成為更有效的代禱者</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        id="summary"
        icon={Users}
        title="本章總結"
        isExpanded={expandedSections.has('summary')}
        onToggle={() => toggleSection('summary')}
      >
        <div className="space-y-4">
          <div className="bg-purple-50 rounded-xl p-5 border border-purple-100 mb-4">
            <h4 className="font-bold text-purple-900 mb-4" style={{fontSize:"19px"}}>重點整理</h4>

            <div className="bg-white rounded-xl p-4 border-l-4 border-purple-500 mb-4 shadow-sm">
              <p className="font-bold text-purple-800 mb-3" style={{fontSize:"17px"}}>第一章的五大核心洞見</p>
              <div className="space-y-3">
                {[
                  {
                    num: '①', color: 'bg-purple-100 text-purple-700',
                    title: '最被忽略的資源',
                    body: '為基督徒領袖個人守望的代禱，是今日教會最少被運用、卻最具能力的屬靈資源。不是「之一」，而是「最」。',
                  },
                  {
                    num: '②', color: 'bg-blue-100 text-blue-700',
                    title: '代禱有真實的能力',
                    body: '天廓衛理教會：代禱帶來超乎想像的祝福（免費得到價值千萬的土地）。赫里福德市：兩位婦人禱告八小時，500人決志——服事的果效不在服事者，在代禱者。',
                  },
                  {
                    num: '③', color: 'bg-amber-100 text-amber-700',
                    title: '代禱的真實定義',
                    body: '代禱（inter + cedere）= 走入破口之間。代禱者站在上帝與有需要的人之間，是危險的位置，也是榮耀的呼召。不是例行公事，是生死攸關的守護。',
                  },
                  {
                    num: '④', color: 'bg-green-100 text-green-700',
                    title: '聖經的雙重見證',
                    body: '摩西、撒母耳、耶穌、保羅——代禱貫穿整本聖經。保羅五次請求代禱：即使最偉大的使徒，也深知自己離不開代禱的支撐。尋求代禱不是軟弱，是智慧。',
                  },
                  {
                    num: '⑤', color: 'bg-red-100 text-red-700',
                    title: '代禱是屬靈爭戰',
                    body: '代禱者會成為撒但的攻擊對象（珍白芮德的見證）。禱告不是舒適的靈修，而是前線作戰。人的代禱真能影響上帝的作為——「歷史是屬於代禱者的」。',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className={`${item.color} rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5`}>{item.num}</span>
                    <div>
                      <p className="font-semibold text-gray-800 mb-0.5" style={{fontSize:"16px"}}>{item.title}</p>
                      <p className="text-gray-600 leading-relaxed" style={{fontSize:"15px"}}>{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-4 border border-purple-200 shadow-sm">
              <p className="font-bold text-purple-900 mb-2" style={{fontSize:"17px"}}>本章的核心呼召</p>
              <p className="text-gray-700 leading-relaxed mb-2" style={{fontSize:"16px"}}>
                上帝對以西結說「我尋找一人，卻找不著」——這是本章最令人震撼的結語。全能的上帝，
                在等候一個願意站在破口的代禱者。
              </p>
              <p className="text-gray-700 leading-relaxed font-medium" style={{fontSize:"16px"}}>
                你願意成為那個人嗎？不需要特殊恩賜，不需要顯赫地位——你只需要一顆願意的心，
                和每天為你的牧師、你的領袖、你的弟兄姊妹<strong>持續、忠實地代禱</strong>的委身。
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
            <h4 className="font-bold text-blue-900 mb-3" style={{fontSize:"19px"}}>延伸探討</h4>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              李拉瑞在飛機上聽到的話值得我們深思：孩子，你與這次的復興一點關連都沒有。那些人之所以得救，是因為有人為此付上了禱告的代價！我們常常重視看得見的服事（講道、帶領、服事），卻忽略了看不見的代禱。但上帝的能力往往是透過後者釋放出來的。
            </p>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              天廓衛理教會和赫里福德市的見證都指向同一個真理：當代禱者付上代價、當代禱團隊忠心守望時，上帝的能力就被釋放，超乎想像的祝福就臨到。這不是理論，而是活生生的見證。問題是：我們願意成為那站在破口上的人嗎？
            </p>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              本章也提醒我們，代禱不是少數人的恩賜，而是每個基督徒的呼召。不是每個人都能講道、不是每個人都能帶領，但每個人都可以代禱。代禱不需要特殊的恩賜，只需要願意的心。當我們願意付出時間、願意承受爭戰、願意站在破口上時，上帝就會使用我們成為祂能力流通的管道。
            </p>
            <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
              最後，本章也挑戰台灣教會重新思考我們的優先次序。我們花多少資源在建堂、在節目、在活動上？我們花多少資源在建立代禱團隊、培養代禱者、教導代禱文化上？如果我們真的相信歷史是屬於代禱者的，那麼代禱應該成為教會最優先的投資。
            </p>
          </div>

          <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
            <h4 className="font-bold text-amber-900 mb-3" style={{fontSize:"19px"}}>反思問題</h4>
            <ul className="space-y-2">
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 讀完本章後，我對代禱的看法有什麼改變？從1到10分，改變了幾分？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 我是否願意成為某位領袖長期的代禱夥伴？如果願意，是誰？如果不願意，為什麼？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 我的教會需要什麼樣的代禱文化？我可以做什麼來開始改變？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 本章提到的三個見證（天廓、赫里福德、珍），哪一個對我衝擊最大？為什麼？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 如果我開始認真代禱，我生活中的哪些事情需要調整？我願意調整嗎？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 我是否相信代禱真的是教會最少被運用的屬靈能力資源？如果是，我要做什麼？</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-xl p-5 border border-green-100">
            <h4 className="font-bold text-green-900 mb-3" style={{fontSize:"19px"}}>具體生活實踐應用</h4>
            <ul className="space-y-2">
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 本週開始：每天為一位基督徒領袖禱告15-30分鐘，連續一週，記錄感受</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 本月目標：邀請1-2位弟兄姊妹組成代禱小組，每週一次一起禱告30-60分鐘</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 三個月委身：成為某位牧師或宣教士的固定代禱夥伴，每週至少禱告一次</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 長期目標：在教會中推動代禱文化，組織代禱團隊或代禱會</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 個人操練：建立代禱日記，記錄代禱事項和上帝的回應</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 閱讀計畫：讀關於代禱的書籍，如《禱告出來的能力》（邦茲）或《祈禱的學校》（慕安得烈）</li>
            </ul>
          </div>
        </div>
      </Section>

      <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 rounded-2xl p-6 mt-12">
        <div className="flex items-center gap-3 mb-4">
          <Compass className="w-8 h-8 text-purple-600" />
          <h3 className="text-purple-900 font-bold text-2xl">完整版本</h3>
        </div>
        <p className="text-purple-800 mb-4" style={{fontSize:"17px"}}>
          恭喜！你現在看到的是包含所有豐富內容的完整版本，參照 Book 1 的格式：
        </p>
        <div className="grid md:grid-cols-2 gap-3 text-purple-700" style={{fontSize:"16px"}}>
          <div>✓ 7個詳細 Sections（完整重點整理）</div>
          <div>✓ 豐富的延伸探討（每個4-5段深入論述）</div>
          <div>✓ 充足的反思問題（每個5-6題）</div>
          <div>✓ 具體生活實踐應用（每個5-6項可執行）</div>
        </div>
      </div>

    </div>
  );
}
