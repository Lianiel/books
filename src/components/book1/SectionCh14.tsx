import { motion } from 'framer-motion';
import { HeartHandshake, EyeOff, MessageCircleHeart, ShieldCheck, HelpCircle, HandHeart, Lightbulb, Brain, Target } from 'lucide-react';

export default function SectionCh14() {
  const godBoundaries = [
    {
      id: 1,
      title: "神尊重我們的界線 (God Respects Our Boundaries)",
      icon: <HandHeart className="w-6 h-6" />,
      page: "P350",
      desc: "神給我們自由意志，祂不會強迫我們愛祂或順服祂。祂站在門外叩門，等待我們主動開門。",
      scenario: "情境：你覺得如果自己不夠好，神就會生氣並強迫你改變。你把神想像成一個控制狂父母。",
      breakthrough: "突破點：神是完美的紳士。祂邀請你進入關係，但如果你選擇拒絕，祂會傷心，但祂會尊重你的選擇。真正的愛必須建立在自由之上。"
    },
    {
      id: 2,
      title: "神有祂自己的界線 (God Has His Own Boundaries)",
      icon: <ShieldCheck className="w-6 h-6" />,
      page: "P353",
      desc: "神清楚地劃定什麼是祂能接受的，什麼是祂不能接受的（罪）。祂不會為了討好我們而妥協祂的聖潔。",
      scenario: "情境：你不斷犯同樣的錯，卻期待神無條件地為你收拾殘局，認為「反正神充滿恩典，祂一定會原諒我」。",
      breakthrough: "突破點：神的恩典是免費的，但不是廉價的。神愛你，但祂不會為你的不負責任買單。祂會讓你經歷行為的自然後果，因為那是教導你成長的最好方式。"
    },
    {
      id: 3,
      title: "神要我們真實 (God Wants Us Real)",
      icon: <MessageCircleHeart className="w-6 h-6" />,
      page: "P356",
      desc: "神寧願我們對祂表達真實的憤怒與失望，也不要我們戴著虛偽的面具假裝讚美祂。",
      scenario: "情境：你在生活中遭遇重大挫折，內心對神充滿憤怒與不解，但你在禱告時卻不敢說出來，只敢說一些「感謝主」的屬靈套話。",
      breakthrough: "突破點：看看詩篇，大衛經常對神發脾氣、抱怨甚至絕望。神夠大，能夠承受你的負面情緒。真實的關係建立在誠實之上，包括對神的誠實。"
    },
    {
      id: 4,
      title: "對神說「不」的恐懼 (Fear of Saying No to God)",
      icon: <EyeOff className="w-6 h-6" />,
      page: "P360",
      desc: "許多基督徒出於罪疚感或恐懼而過度服事，把教會活動等同於神的心意，導致耗竭。",
      scenario: "情境：教會牧師邀請你擔任小組長，你其實已經因為工作和家庭焦頭爛額了，但你覺得「拒絕牧師就是拒絕神」，於是勉強答應，最後充滿怨恨地服事。",
      breakthrough: "突破點：神喜悅的是「甘心樂意的奉獻」，而不是出於勉強或轄制。如果你不能自由地對神說「不」，你的「是」就毫無價值。學會分辨「神的呼召」與「人的期待」。"
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 rounded-3xl p-8 md:p-10 border border-sky-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-sky-100 text-sky-800 font-bold mb-4" style={{fontSize:"17px"}}>
            Chapter 14
          </div>
          <h2 className="md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight" style={{fontSize:"33px"}}>
            界線與神
          </h2>
          <p className="text-slate-700 leading-relaxed max-w-3xl" style={{fontSize:"21px"}}>
            許多人在信仰中掙扎，是因為他們把過去與父母或權威人物的互動模式（移情作用）投射到了神身上。他們以為神是一個嚴厲、控制狂、不允許我們有個人界線的暴君。然而，聖經啟示的神，是一位設立界線、尊重界線，並邀請我們在自由中與祂建立真實關係的神。
          </p>
        </div>
      </div>

      {/* God Boundaries Grid */}
      <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-8 flex items-center" style={{fontSize:"27px"}}>
          <HeartHandshake className="w-7 h-7 mr-3 text-sky-500" />
          認識神與界線的 4 個真相 (P350-365)
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {godBoundaries.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-50 to-sky-50/30 rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-sky-100 p-3 rounded-xl text-sky-700 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-slate-800" style={{fontSize:"23px"}}>真相 {item.id}</h4>
                </div>
                <span className="font-medium text-slate-500 bg-white px-2 py-1 rounded-md border border-slate-200" style={{fontSize:"15px"}}>{item.page}</span>
              </div>
              
              <div className="space-y-4 flex-grow">
                <h5 className="font-bold text-sky-800 border-b border-sky-100 pb-2" style={{fontSize:"23px"}}>{item.title}</h5>
                <p className="text-slate-700 leading-relaxed" style={{fontSize:"19px"}}>
                  {item.desc}
                </p>
                <div className="bg-white p-4 rounded-xl border border-slate-100">
                  <strong className="text-slate-800 block mb-2" style={{fontSize:"17px"}}>🎬 具體情境：</strong>
                  <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>{item.scenario}</p>
                </div>
                <div className="bg-sky-50/80 p-4 rounded-xl border border-sky-200 mt-auto">
                  <strong className="text-sky-800 flex items-center mb-2" style={{fontSize:"17px"}}>
                    <Lightbulb className="w-4 h-4 mr-1 text-sky-600" />
                    解決突破點：
                  </strong>
                  <p className="text-sky-900/80 leading-relaxed" style={{fontSize:"17px"}}>{item.breakthrough}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Misunderstanding Discipline */}
      <div className="bg-slate-800 rounded-3xl p-8 md:p-10 border border-slate-700 shadow-sm text-white">
        <h3 className="font-bold text-sky-300 mb-8 flex items-center" style={{fontSize:"27px"}}>
          <HelpCircle className="w-7 h-7 mr-3" />
          釐清對「神的管教」的誤解 (P366-370)
        </h3>
        
        <div className="space-y-6">
          <div className="bg-slate-700/50 p-6 rounded-2xl border border-slate-600 hover:bg-slate-700/80 transition-colors">
            <h4 className="font-bold text-sky-200 mb-3 flex items-center" style={{fontSize:"23px"}}>
              <span className="bg-sky-500/20 p-2 rounded-lg mr-3 text-sky-400">迷思</span>
              神降災禍來懲罰我
            </h4>
            <p className="text-slate-300 leading-relaxed" style={{fontSize:"19px"}}>
              許多人遇到車禍、生病或失業時，第一個念頭是：「神在懲罰我做錯了什麼事。」這是一種將神視為暴君的恐懼心理。神不會用隨機的災難來報復我們。
            </p>
          </div>
          <div className="bg-slate-700/50 p-6 rounded-2xl border border-slate-600 hover:bg-slate-700/80 transition-colors">
            <h4 className="font-bold text-sky-200 mb-3 flex items-center" style={{fontSize:"23px"}}>
              <span className="bg-sky-500/20 p-2 rounded-lg mr-3 text-sky-400">真相</span>
              神允許自然後果發生
            </h4>
            <p className="text-slate-300 leading-relaxed" style={{fontSize:"19px"}}>
              神的管教通常是透過「種與收的律」來進行。如果你過度揮霍，神不會奇蹟似地幫你付清卡債，祂會讓你經歷貧窮的痛苦。這不是出於憤怒的報復，而是出於愛的教導，目的是讓你學會財務管理。
            </p>
          </div>
          <div className="bg-slate-700/50 p-6 rounded-2xl border border-slate-600 hover:bg-slate-700/80 transition-colors">
            <h4 className="font-bold text-sky-200 mb-3 flex items-center" style={{fontSize:"23px"}}>
              <span className="bg-sky-500/20 p-2 rounded-lg mr-3 text-sky-400">關鍵</span>
              管教是為了恢復，不是定罪
            </h4>
            <p className="text-slate-300 leading-relaxed" style={{fontSize:"19px"}}>
              希伯來書說：「凡管教的事，當時不覺得快樂，反覺得愁苦；後來卻為那經練過的人結出平安的果子，就是義。」神的管教永遠是向前看的，目的是為了塑造我們的品格，讓我們得益處。
            </p>
          </div>
        </div>
      </div>
      {/* Reflection & Action Guide */}

        {/* 本章總結 */}
        <div className="bg-gradient-to-br from-teal-50 to-slate-50 border border-teal-100 rounded-2xl p-6 mb-6">
          <h3 className="font-bold text-teal-700 mb-2 flex items-center gap-2" style={{fontSize:"22px"}}>
            <span style={{fontSize:"24px"}}>📝</span> 第14章總結：如何說「不」
          </h3>
          <p className="text-slate-500 mb-5 leading-relaxed" style={{fontSize:"18px"}}>本章從神學角度出發，探討神自己如何有界線，以及這如何成為我們設立界線的最深根基。作者同時提供說「不」的具體策略。</p>
          <div className="bg-blue-50 border-blue-200 border rounded-xl p-4 mb-3">
            <div className="font-bold text-blue-700 mb-1.5" style={{fontSize:"18px"}}>📖 神有界線：最深的神學根基</div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"20px"}}>作者提出一個深刻的洞見：界線不只是心理健康的工具，它有深刻的神學基礎。神自己就有界線——祂給了我們自由意志，讓我們能夠真正選擇愛祂或拒絕祂；祂有祂不能接受的（罪）；祂寧願我們對祂誠實，也不要我們帶著假面具與祂同行。若神有界線，界線本身就不可能是罪。</p>
          </div>
          <div className="bg-violet-50 border-violet-200 border rounded-xl p-4 mb-3">
            <div className="font-bold text-violet-700 mb-1.5" style={{fontSize:"18px"}}>🔍 說「不」的具體策略</div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"20px"}}>作者提供幾個實用的說「不」策略：清楚而直接，不要過度解釋（解釋越多，對方越有反駁的空間）；使用「我」的陳述（「我現在沒有能力答應這個」，而不是「你要求太多了」）；練習「緩衝語言」（「讓我想想，我再告訴你」）；在低風險情境中練習，逐漸建立說「不」的肌肉記憶。</p>
          </div>
          <div className="bg-amber-50 border-amber-200 border rounded-xl p-4 mb-3">
            <div className="font-bold text-amber-700 mb-1.5" style={{fontSize:"18px"}}>⚠️ 罪惡感是成長的信號</div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"20px"}}>作者特別提醒：在學習說「不」的初期，罪惡感是幾乎必然的伴隨物。但這個罪惡感不代表你做錯了——它只代表你在打破一個舊有的模式。就像長期不運動的人初次運動會肌肉酸痛，初期的罪惡感是界線肌肉在成長的信號，不是你越界的警告。</p>
          </div>
          <div className="bg-emerald-50 border-emerald-200 border rounded-xl p-4 mb-3">
            <div className="font-bold text-emerald-700 mb-1.5" style={{fontSize:"18px"}}>💡 本章的關鍵信息</div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"20px"}}>說「不」是可以練習的技能，也是你能給他人最誠實的禮物之一。一個總是說「好」卻內心充滿「不」的人，最終給予的是虛假的愛。真正說「好」的能力，建立在說「不」的自由之上——當你有能力說不，你的「好」才有意義。</p>
          </div>
        </div>

      <div className="bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-800 shadow-lg text-white mt-12">
        <h3 className="font-bold text-purple-300 mb-6 flex items-center" style={{fontSize:"27px"}}>
          <Brain className="w-7 h-7 mr-3" />
          深度反思與行動指南 <span className="ml-3 bg-slate-700/50 text-slate-300 px-2 py-1 rounded-full font-normal border border-slate-600" style={{fontSize:"15px"}}>💡 延伸應用 (非原書內容)</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="font-bold text-purple-200 mb-4 flex items-center" style={{fontSize:"23px"}}>
              <Brain className="w-5 h-5 mr-2 text-purple-400" />
              反思問題
            </h4>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 font-bold">1.</span>
                我是否認為神是一個「嚴厲的工頭」，只要我犯錯就會懲罰我？還是我相信祂尊重我的選擇並給予恩典？
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 font-bold">2.</span>
                我是否常常在禱告中要求神替我解決「我應該自己負責」的問題？
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 font-bold">3.</span>
                我是否常常覺得，如果我表現得夠好，神就「必須」祝福我？這反映了我對神的什麼誤解？
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 font-bold">4.</span>
                在遇到困難時，我是期待神直接把困難挪走，還是求神賜給我面對困難的智慧和勇氣？
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 font-bold">5.</span>
                我是否常常用「順服神」作為藉口，來逃避自己應該承擔的責任和決策？
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 font-bold">6.</span>
                當我對神感到失望或憤怒時，我是否允許自己真實地向祂表達，還是覺得這樣很不屬靈？
              </li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="font-bold text-emerald-300 mb-4 flex items-center" style={{fontSize:"23px"}}>
              <Target className="w-5 h-5 mr-2 text-emerald-400" />
              具體行動方案
            </h4>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">1.</span>
                在禱告中，誠實地向神表達你的憤怒、失望或軟弱，體驗祂接納你真實樣貌的恩典。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">2.</span>
                區分「神的責任」與「我的責任」。求神賜給你力量，去改變那些在你控制範圍內的事物。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">3.</span>
                每天花10分鐘安靜獨處，不帶任何祈求，只是單純地享受與神同在的平靜，建立與神的親密界線。
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2 font-bold">4.</span>
                檢視你對神的服事，是否出於「不得不」的壓力？嘗試推掉一項讓你感到耗竭的服事，重新尋找神真正要你做的事。
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
