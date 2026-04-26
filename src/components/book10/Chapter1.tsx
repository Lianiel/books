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
            <h4 className="font-bold text-purple-900 mb-3" style={{fontSize:"19px"}}>重點整理</h4>
            <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
              作者開宗明義地提出一個大膽的主張：在今日教會裏最少被運用的屬靈能力資源，就是為基督徒領袖們代禱的能力。他刻意不說最少被運用的能力資源之一，因為沒有任何一件事是如此重要卻又如此被忽略的。上帝話語的宣講、禱告、敬拜、讚美、醫治、認罪、禁食、聖禮、屬靈恩賜...這些屬靈能力資源近來在教會中都普遍被使用。但在為我們的領袖們代求上卻往往不是如此。
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
            <h4 className="font-bold text-blue-900 mb-3" style={{fontSize:"19px"}}>延伸探討</h4>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              為什麼代禱如此重要卻又如此被忽略？可能的原因包括：一、代禱的果效不容易立即看見，不像講道或敬拜那樣有明顯的成果；二、代禱是隱藏的服事，不會得到公開的讚賞和認可；三、代禱需要付出時間和心力，在忙碌的現代生活中很容易被排擠；四、許多基督徒不了解代禱的屬靈意義和能力。
            </p>
            <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
              然而，歷史上偉大的復興和屬靈突破，背後往往都有忠心代禱者的付出。摩拉維亞弟兄會持續一百年不間斷的禱告會，帶來了全球宣教運動的興起。查理芬尼的大復興，背後有阿貝爾克拉里在穀倉中的代禱。約翰衛斯理說：除了回覆信心的禱告外，上帝在世上不做任何一件事。這不是誇張，而是屬靈的真理。
            </p>
          </div>

          <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
            <h4 className="font-bold text-amber-900 mb-3" style={{fontSize:"19px"}}>反思問題</h4>
            <ul className="space-y-2">
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 我的教會有沒有為牧師和領袖代禱的文化？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 我自己有沒有固定為某位基督徒領袖代禱？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 如果代禱真的如此重要，為什麼我還沒有開始？</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-xl p-5 border border-green-100">
            <h4 className="font-bold text-green-900 mb-3" style={{fontSize:"19px"}}>具體生活實踐應用</h4>
            <ul className="space-y-2">
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 本週選定一位你認識的基督徒領袖，每天為他禱告15分鐘</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 寫一張卡片告訴他你在為他禱告（不需要詳述內容）</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 邀請1-2位弟兄姊妹一起為教會領袖組成代禱小組</li>
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
              這個見證揭示了代禱的幾個重要真理：第一，代禱不是走形式，而是真正聆聽上帝的聲音。一百位代禱者都聽到上帝說「不」，這不是巧合，而是聖靈真實的引導。第二，代禱需要謙卑和順服。即使已經簽約、已經有完美的計畫，但當上帝說「不」時，他們願意放手。第三，代禱帶來超過想像的祝福。上帝不只給他們另一塊地，而是給他們一塊更大、更好、最後還不用花錢的地！
            </p>
            <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
              從這個見證我們也看到，真正的代禱團隊需要具備幾個特質：高度委身（一百位願意在關鍵時刻一起到現場禱告）、靈裡敏銳（能夠聽見上帝的聲音）、彼此坦誠（願意分享自己在禱告中的感動）、以及順服權柄（支持牧師做困難的決定）。
            </p>
          </div>

          <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
            <h4 className="font-bold text-amber-900 mb-3" style={{fontSize:"19px"}}>反思問題</h4>
            <ul className="space-y-2">
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 我的教會在重大決策時，有沒有先透過代禱尋求上帝的心意？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 如果上帝說「不」，我願意放棄看起來很好的計畫嗎？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 我是否相信代禱真的能夠帶來超過想像的祝福？</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-xl p-5 border border-green-100">
            <h4 className="font-bold text-green-900 mb-3" style={{fontSize:"19px"}}>具體生活實踐應用</h4>
            <ul className="space-y-2">
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 當教會有重要決策時，主動提議先禁食禱告一週再討論</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 學習在禱告中安靜等候，聆聽上帝的聲音而不只是說話</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 找2-3位弟兄姊妹組成代禱小組，為教會的方向守望</li>
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
              這個見證揭示了一個令人震撼的真理：服事的果效不在於服事者的能力，而在於代禱者的付出。李拉瑞前兩晚和第三晚的講道品質應該是差不多的，但結果天差地別。差別在哪裡？在於有沒有人為他禱告。這對今天所有服事者都是重要的提醒：你可以有最好的講章、最完美的企劃、最專業的技巧，但如果沒有人為你代禱，果效可能非常有限。
            </p>
            <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
              這個見證也讓我們看到代禱的具體實踐：兩位婦人為李拉瑞禱告了八小時。這不是隨便禱告幾句，而是長時間、深入的代求。她們可能禁食、可能流淚、可能在禱告中經歷屬靈爭戰。當代禱者付上這樣的代價時，上帝的能力就被釋放出來。
            </p>
          </div>

          <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
            <h4 className="font-bold text-amber-900 mb-3" style={{fontSize:"19px"}}>反思問題</h4>
            <ul className="space-y-2">
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 我在服事中有沒有依靠自己的能力多過依靠禱告？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 如果上帝告訴我「你與這次的成功一點關連都沒有」，我會有什麼感受？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 我願意像那兩位婦人一樣，為某位服事者禱告八小時嗎？</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-xl p-5 border border-green-100">
            <h4 className="font-bold text-green-900 mb-3" style={{fontSize:"19px"}}>具體生活實踐應用</h4>
            <ul className="space-y-2">
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 在牧師講道前一天，禁食為他守望禱告</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 當教會有福音外展活動時，組織代禱團隊在現場或後方守望</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 認領一位宣教士，每週為他的服事禱告至少30分鐘</li>
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
            <h4 className="font-bold text-purple-900 mb-3" style={{fontSize:"19px"}}>重點整理</h4>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              我們經常把代禱當成是禱告的同義詞。在日常的談話裏交替地使用這兩個詞是可以接受的，但是當我們以專業術語的角度來看時，就不可以互換了。禱告是向上帝說話，代禱是為了一個人的益處而來到上帝面前求告。所有的代禱都是禱告，但並非所有的禱告都是代禱。
            </p>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              代禱一字源於拉丁文 inter（意指之間）及 cedere（意指前去），所以代禱就是去到破口之間或站在破口內之意。主曾藉著先知以西結說：我在他們中間尋找一人重修牆垣，在我面前為這國站在破口防堵，使我不滅絕這國，卻找不著一個。
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
            <h4 className="font-bold text-blue-900 mb-3" style={{fontSize:"19px"}}>延伸探討</h4>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              站在破口上是什麼意思？在古代戰爭中，當城牆被敵人攻破、出現破口時，最勇敢的戰士會站在破口上，用自己的身體擋住敵人的進攻，直到破口被修補。代禱者就像這樣的戰士，當上帝的百姓面臨危機、當領袖被撒但攻擊、當教會陷入困境時，代禱者站在上帝與人之間，用禱告築起一道保護牆。
            </p>
            <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
              以斯帖記提供了代禱的完美類比。以斯帖冒著生命危險為她的同胞進謁君王，結果猶太人全族得救。代禱者就像以斯帖：謙卑而不自大，順服權柄，樂意調整自己來聆聽上帝的聲音，甚至冒著危險也要遵行所聽見的。
            </p>
          </div>

          <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
            <h4 className="font-bold text-amber-900 mb-3" style={{fontSize:"19px"}}>反思問題</h4>
            <ul className="space-y-2">
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 我的禱告生活中，有多少是真正的代禱（為別人）而不只是為自己？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 我是否願意站在破口上，即使可能要付出代價？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 在我的生命中，誰是站在破口上為我代禱的人？</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-xl p-5 border border-green-100">
            <h4 className="font-bold text-green-900 mb-3" style={{fontSize:"19px"}}>具體生活實踐應用</h4>
            <ul className="space-y-2">
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 每天禱告時，至少花一半時間為別人代求，而不只是為自己</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 列一份代禱清單，包括家人、牧師、教會領袖、宣教士</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 當聽到有人遇到困難時，立刻為他禱告而不只是說「我會為你禱告」</li>
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
            <h4 className="font-bold text-purple-900 mb-3" style={{fontSize:"19px"}}>重點整理</h4>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              聖經中充滿了代禱者的榜樣。耶利米書十五章一節中，上帝說：雖有摩西和撒母耳在我面前代求，我的心也不顧惜這百姓。這裏的要點是代禱者並非操縱上帝的人，有些事上帝早已具體地設定好它必然會有的結果了。而為了要強調這點，上帝提到祂兩位最好的代禱僕人：摩西與撒母耳。
            </p>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              摩西在出埃及記17章為約書亞代禱，當摩西舉手時以色列人就得勝；在出埃及記32章，以色列百姓敬拜金牛犢，上帝說要滅絕他們，摩西代求後耶和華後悔，不把所說的禍降與祂的百姓。撒母耳在撒母耳記上7章為以色列人代求，結果主降下雷聲霹靂，以色列人戰勝了非利士人。
            </p>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              耶穌是最無與倫比的代禱者。在約翰福音十七章中祂為百姓的禱告，透露出了祂對子民所存的慈愛心腸。直到今日，祂仍持續不斷地為我們代求。祂是長遠活著，替他們祈求。
            </p>
            <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
              使徒保羅深知為領袖個人代禱的價值，因此在他的書信中曾五次要求人為他禱告：帖撒羅尼迦前書5:25、羅馬書15:30、哥林多後書1:11、腓立比書1:19、腓利門書22。
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
            <h4 className="font-bold text-blue-900 mb-3" style={{fontSize:"19px"}}>延伸探討</h4>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              出埃及記17章的故事特別值得深思。約書亞在利非訂谷打仗時，摩西在山上為他代求。當摩西舉手時，約書亞就得勝；當摩西手下垂，約書亞就失敗。最終亞倫與戶珥扶住摩西的手，約書亞贏得了戰爭。這個故事揭示了代禱者與服事者的分工：約書亞在戰場上打仗，摩西在山上為約書亞代求。戰爭的勝敗關鍵不在約書亞的刀劍，而在摩西的禱告。
            </p>
            <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
              今日許多基督徒領袖就像約書亞一樣，他們在服事中很活躍，是得勝者，人們視他們為上帝成功的僕人。但這能力從何而來？乃是透過代禱而釋放出來的。至終當然是上帝的能力贏得了戰爭，但在人的部分，最直接被使用來作為上帝能力流通導管的是代禱者摩西，而非將軍約書亞。
            </p>
          </div>

          <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
            <h4 className="font-bold text-amber-900 mb-3" style={{fontSize:"19px"}}>反思問題</h4>
            <ul className="space-y-2">
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 在我的服事或工作中，我是約書亞還是摩西？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 如果我是約書亞，我有摩西嗎？如果我是摩西，我知道我的約書亞是誰嗎？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 如果連使徒保羅都需要代禱，今天的領袖更需要！</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-xl p-5 border border-green-100">
            <h4 className="font-bold text-green-900 mb-3" style={{fontSize:"19px"}}>具體生活實踐應用</h4>
            <ul className="space-y-2">
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 讀出埃及記17章、32章和撒母耳記上7章，默想摩西和撒母耳的代禱生命</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 找2-3位願意扮演「亞倫與戶珥」角色的夥伴，彼此代禱扶持</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 如果你是領袖，邀請可信任的人成為你的代禱團隊</li>
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
            <h4 className="font-bold text-purple-900 mb-3" style={{fontSize:"19px"}}>重點整理</h4>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              代求的能力有多大？有人可能會問：你真的是說，單單人的祈求就能決定至高全能上帝的作為嗎？答案是肯定的。這就是全能上帝選擇用來設計這個世界並架構我們與祂關係的一種方式。正確的假設是：若以斯帖沒有為猶太人代求，他們將全部被毀滅。
            </p>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              約翰衛斯理說：除了回覆信心的禱告外，上帝在世上不做任何一件事。加爾文說：千言萬語無法說明禱告是何等地必要。在上帝至高主權的安排中並不排除人類信心的運用。傑克海福德說：我們可以幫忙決定祝福或咒詛這兩者中的那一項臨到世上。禱告正是決定的關鍵因素。溫瓦特說：歷史是屬於代禱者的。
            </p>
            <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
              代禱是屬靈的爭戰。身為代禱者，他們可預期自己經常需要與那些想摧毀上帝工作的惡靈爭戰。愛德溫司脫伯說：代禱是一種爭戰，而爭戰主要是藉著這種方式來進行的。必須在禱告中先爭戰得勝，然後勝利才可能在現實生活中真正顯出來。
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
            <h4 className="font-bold text-blue-900 mb-3" style={{fontSize:"19px"}}>延伸探討</h4>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              這是一個令人震撼的神學真理：人的禱告能改變上帝的作為。但這不是說人能操縱上帝，而是上帝主動選擇限制自己，尊重人的自由意志和禱告。上帝是全能的，但祂卻為了尊重祂受造物的自由意志之故，而在某些部分自限了祂在地上的作為。
            </p>
            <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
              代禱也是屬靈爭戰。作者提到他的太太桃麗絲及代禱同伴珍白芮德的經歷：珍在深夜為在東歐宣教的約翰麥瑟代禱時，被一股可怕的強大黑暗力量攻擊，她察覺到這股強大的黑暗權勢本是被差遣去破壞約翰的，但牠卻攻擊了我，因為我正站在破口上。這揭示了代禱的危險性：當你站在破口上為領袖守望時，你會成為撒但首要攻擊的目標。
            </p>
          </div>

          <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
            <h4 className="font-bold text-amber-900 mb-3" style={{fontSize:"19px"}}>反思問題</h4>
            <ul className="space-y-2">
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 我是否真的相信我的禱告能夠改變事情？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 我是否理解代禱本質上就是屬靈爭戰？我是否預備好成為黑暗權勢攻擊的對象？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 如果代禱確實如此危險，為什麼我仍願意站在破口上？</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-xl p-5 border border-green-100">
            <h4 className="font-bold text-green-900 mb-3" style={{fontSize:"19px"}}>具體生活實踐應用</h4>
            <ul className="space-y-2">
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 學習屬靈爭戰的禱告：穿上全副軍裝、奉耶穌的名抵擋黑暗權勢</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 為正在經歷屬靈爭戰的領袖或宣教士守望禱告</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 與代禱夥伴建立緊急聯絡機制，當遇到屬靈攻擊時可以立即支援</li>
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
            <h4 className="font-bold text-purple-900 mb-3" style={{fontSize:"19px"}}>重點整理</h4>
            <p className="text-gray-700 leading-relaxed mb-3 font-semibold text-purple-800" style={{fontSize:"17px"}}>
              本章揭示了一個被教會忽略卻極其重要的真理：為基督徒領袖代禱的能力。
            </p>
            <ul className="space-y-2">
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 代禱的定義：不只是為別人禱告，而是站在破口上，成為上帝與需要之間的橋樑</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 代禱的能力：真實的見證顯示，代禱能改變決策、帶來復興</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 代禱的本質：是屬靈爭戰，代禱者常成為黑暗權勢首要攻擊的目標</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 聖經榜樣：摩西、撒母耳、耶穌、保羅都顯明代禱的重要性</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 神學真理：上帝選擇自限祂的作為，尊重人的禱告，歷史是屬於代禱者的</li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
            <h4 className="font-bold text-blue-900 mb-3" style={{fontSize:"19px"}}>延伸探討</h4>
            <p className="text-gray-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>
              李拉瑞在飛機上聽到的話值得我們深思：孩子，你與這次的復興一點關連都沒有。那些人之所以得救，是因為有人為此付上了禱告的代價！我們常常重視看得見的服事（講道、帶領、服事），卻忽略了看不見的代禱。但上帝的能力往往是透過後者釋放出來的。
            </p>
            <p className="text-gray-700 leading-relaxed" style={{fontSize:"17px"}}>
              天廓衛理教會和赫里福德市的見證都指向同一個真理：當代禱者付上代價、當代禱團隊忠心守望時，上帝的能力就被釋放，超乎想像的祝福就臨到。這不是理論，而是活生生的見證。問題是：我們願意成為那站在破口上的人嗎？
            </p>
          </div>

          <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
            <h4 className="font-bold text-amber-900 mb-3" style={{fontSize:"19px"}}>反思問題</h4>
            <ul className="space-y-2">
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 讀完本章後，我對代禱的看法有什麼改變？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 我是否願意成為某位領袖長期的代禱夥伴？</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 我的教會需要什麼樣的代禱文化？我可以做什麼來開始？</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-xl p-5 border border-green-100">
            <h4 className="font-bold text-green-900 mb-3" style={{fontSize:"19px"}}>具體生活實踐應用</h4>
            <ul className="space-y-2">
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 本週開始：每天為一位基督徒領袖禱告15-30分鐘，連續一週</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 本月目標：邀請1-2位弟兄姊妹組成代禱小組，每週一次一起禱告</li>
              <li className="text-gray-700" style={{fontSize:"17px"}}>• 長期委身：成為某位牧師或宣教士的固定代禱夥伴</li>
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
          恭喜！你現在看到的是包含所有擴充內容的完整版本，參照 Book 1 的格式：
        </p>
        <div className="grid md:grid-cols-2 gap-3 text-purple-700" style={{fontSize:"16px"}}>
          <div>✓ 7個詳細 Sections（重點整理）</div>
          <div>✓ 延伸探討（神學深度）</div>
          <div>✓ 反思問題（促進思考）</div>
          <div>✓ 具體生活實踐應用（可執行）</div>
        </div>
      </div>

    </div>
  );
}
