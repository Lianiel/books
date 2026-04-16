import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, BookOpen, ChevronDown, ChevronUp, Target, MessageSquareQuote, Gift, ChevronRight } from 'lucide-react';

export default function Chapter1() {
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [openFollow, setOpenFollow] = useState(false);

  const sections = [
    {
      num: "一", title: "神定義要祝福人", ref: "創12：1~2",
      scripture: "耶和華對亞伯蘭說：你要離開本地、本族、父家、往我所要指示你的地去。我必叫你成為大國．我必賜福給你、叫你的名為大、你也要叫別人得福。",
      questions: [
        { q: "上帝告訴亞伯蘭甚麼事？", hint: "離開本地本族父家(舒適圈)，賜福給我，也使我叫別人得福" },
        { q: "現在生命中有神的祝福嗎？", hint: null },
        { q: "你的生命有帶給別人祝福嗎？", hint: null }
      ],
      transition: "※轉接句：我們來看看神要賜給我們那些祝福？讓我們一起來看聖經。"
    },
    {
      num: "二", title: "得自由的祝福", ref: "約8：31~32",
      scripture: "耶穌對信他的猶太人說：你們若常常遵守我的道、就真是我的門徒。你們必曉得真理、真理必叫你們得以自由。",
      questions: [
        { q: "自己認為什麼是自由？", hint: "對生命有害的事，能選擇不去做" },
        { q: "甚麼是真理？", hint: "放諸四海皆準，不因時間、空間而改變" },
        { q: "真理為何會使人得以自由？", hint: "說明：紅綠燈的例子" },
        { q: "信就夠了嗎？為何還要遵守？", hint: "是否願意跟隨燈號，跨出到目的地" },
        { q: "渴望自己有真理帶來的自由嗎？", hint: null }
      ],
      transition: null
    },
    {
      num: "三", title: "彼此相愛的祝福", ref: "約13：34~35",
      scripture: "我賜給你們一條新命令、乃是叫你們彼此相愛．我怎樣愛你們、你們也要怎樣相愛。你們若有彼此相愛的心、眾人因此就認出你們是我的門徒了。",
      questions: [
        { q: "甚麼是彼此相愛的關係？", hint: null },
        { q: "此刻你生命中有這樣的關係嗎？", hint: null },
        { q: "分享彼此自己生命中關係的現況？", hint: "陪讀者先開始：從教會、小組中" },
        { q: "對彼此相愛的關係會有期待嗎？為什麼？", hint: null }
      ],
      transition: null
    },
    {
      num: "四", title: "平安的祝福", ref: "約16：33",
      scripture: "我將這些事告訴你們、是要叫你們在我裏面有平安。在世上你們有苦難．但你們可以放心、我已經勝了世界。",
      questions: [
        { q: "甚麼是平安？", hint: "人生高山低谷都不害怕" },
        { q: "自己在苦難中會有平安？", hint: "瀑布旁邊的母鳥照顧雛鳥睡覺" },
        { q: "此刻自己是否有平安？", hint: null },
        { q: "平安從何而來？", hint: "在耶穌裡有平安" }
      ],
      transition: null
    },
    {
      num: "五", title: "有影響力的祝福", ref: "可1：16~18",
      scripture: "耶穌順着加利利的海邊走、看見西門、和西門的兄弟安得烈、在海裏撒網．他們本是打魚的。耶穌對他們說、來跟從我、我要叫你們得人如得魚一樣。他們就立刻捨了網、跟從了他。",
      questions: [
        { q: "甚麼叫做「得人如得魚」？", hint: "影響人的生命像漁夫捕魚一樣簡單" },
        { q: "覺得有影響力容易嗎？為什麼？", hint: "影響力是幫助人生命走到正確方向" },
        { q: "為何漁夫們立刻捨了網跟從耶穌？", hint: "看到機會想要改變" },
        { q: "你盼望有個影響力能幫助人的生命嗎？", hint: null }
      ],
      transition: "※中場關懷與鼓勵：上面的祝福最希望有哪些？為什麼？(*方便跟進)"
    },
    {
      num: "六", title: "神的祝福此刻要賜下", ref: "使17：22~27",
      scripture: "保羅站在亞略巴古當中、說：眾位雅典人哪、我看你們凡事很敬畏鬼神。我遊行的時候、觀看你們所敬拜的、遇見一座壇、上面寫着未識之神．你們所不認識而敬拜的、我現在告訴你們。創造宇宙和其中萬物的神、既是天地的主、就不住人手所造的殿．也不用人手服事、好像缺少甚麼、自己倒將生命、氣息、萬物、賜給萬人。他從一本造出萬族的人、住在全地上、並且預先定準他們的年限、和所住的疆界．要叫他們尋求神、或者可以揣摩而得、其實他離我們各人不遠。",
      questions: [
        { q: "神是怎樣的一位神？上帝為何要祝福人？", hint: "創造(創造宇宙和其中萬物的神)、保護(自己倒將生命、氣息、萬物、賜給萬人)的神 / 祂創造人" },
        { q: "為何有機會尋求神？", hint: "神預先定準，此刻不是偶然的" },
        { q: "神在哪裡？", hint: "可以體會到，就與我們同在，祂離我們各人不遠" }
      ],
      transition: null,
      backup: {
        ref: "羅1：19~20",
        title: "備用經文：神給人良知可以知道創造來自神",
        scripture: "神的事情、人所能知道的、原顯明在人心裏．因為神已經給他們顯明。自從造天地以來、神的永能和神性是明明可知的、雖是眼不能見、但藉着所造之物、就可以曉得、叫人無可推諉。",
        question: "從那些地方體會到神的存在？(宇宙萬物受造與運作就是證據)"
      }
    },
    {
      num: "七", title: "願意憑信心領受祝福", ref: "可9：23",
      scripture: "耶穌對他說、你若能信、在信的人、凡事都能。",
      questions: [
        { q: "你願意相信這位神要祝福你並領受從神來的祝福嗎？", hint: null },
        { q: "不願意？為什麼？", hint: "了解原因並鼓勵繼續看第二課" }
      ],
      transition: null
    }
  ];

  const followUp = [
    "為他祝福及需要禱告！",
    "要求每天開始專心 20 分鐘讀馬可福音 1 章，寫下問題（要跟進）。",
    "邀請固定參加主日聚會至少一個月，並與陪讀兄姊一起用愛筵，也可以邀請進入小組。",
    "預定下次陪讀時間（建議一週後，中間要關心讀經和生活情況）。"
  ];

  const sectionColors = ["emerald","blue","rose","indigo","amber","violet","teal"];

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="space-y-8">

      {/* ========== 課程標題 ========== */}
      <div className="bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="relative">
          <div className="flex items-center gap-2 mb-2"><Gift className="w-5 h-5 text-emerald-300" /><span className="text-emerald-300 text-sm tracking-widest">基要陪讀課程</span></div>
          <h1 className="font-extrabold mb-3" style={{fontSize:"30px"}}>第一課：上帝的祝福</h1>
          <p className="text-emerald-100 text-lg mb-4">你是上帝特別要賜給祝福的人！</p>
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10 mb-4">
            <p className="text-white font-bold mb-2" style={{fontSize:"15px"}}>📋 課程目標：</p>
            <p className="text-emerald-100" style={{fontSize:"15px"}}>1. 使朋友明白上帝創造人就是要將祝福賜給人。</p>
            <p className="text-emerald-100" style={{fontSize:"15px"}}>2. 幫助朋友從聖經中認識上帝並渴望領受祝福。</p>
          </div>
          <div className="bg-amber-500/20 rounded-xl p-4 border border-amber-400/30">
            <p className="text-amber-200 font-bold" style={{fontSize:"15px"}}>💬 前言引導：</p>
            <p className="text-amber-100" style={{fontSize:"15px"}}>先問問題：你的生命渴望有祝福嗎？</p>
          </div>
        </div>
      </div>

      {/* ========== 七段經文教學 ========== */}
      {sections.map((sec, i) => {
        const colorName = sectionColors[i % sectionColors.length];
        const bgMap: Record<string,string> = { emerald:"from-emerald-50 to-teal-50 border-emerald-100", blue:"from-blue-50 to-indigo-50 border-blue-100", rose:"from-rose-50 to-pink-50 border-rose-100", indigo:"from-indigo-50 to-violet-50 border-indigo-100", amber:"from-amber-50 to-orange-50 border-amber-100", violet:"from-violet-50 to-purple-50 border-violet-100", teal:"from-teal-50 to-cyan-50 border-teal-100" };
        const textMap: Record<string,string> = { emerald:"text-emerald-800", blue:"text-blue-800", rose:"text-rose-800", indigo:"text-indigo-800", amber:"text-amber-800", violet:"text-violet-800", teal:"text-teal-800" };
        const badgeMap: Record<string,string> = { emerald:"bg-emerald-100 text-emerald-700 border-emerald-200", blue:"bg-blue-100 text-blue-700 border-blue-200", rose:"bg-rose-100 text-rose-700 border-rose-200", indigo:"bg-indigo-100 text-indigo-700 border-indigo-200", amber:"bg-amber-100 text-amber-700 border-amber-200", violet:"bg-violet-100 text-violet-700 border-violet-200", teal:"bg-teal-100 text-teal-700 border-teal-200" };
        return (
        <div key={i} className={`bg-gradient-to-br ${bgMap[colorName]} rounded-3xl p-6 md:p-8 border shadow-sm`}>
          <div className="flex items-center justify-between mb-4 cursor-pointer" onClick={() => setOpenSection(openSection === i ? null : i)}>
            <h3 className={`font-bold ${textMap[colorName]} flex items-center gap-2`} style={{fontSize:"22px"}}>
              <span className={`px-3 py-1 rounded-full text-sm border ${badgeMap[colorName]}`}>{sec.num}</span>
              {sec.title}
              <span className={`ml-2 text-xs px-2 py-1 rounded-full border ${badgeMap[colorName]} font-normal`}>{sec.ref}</span>
            </h3>
            {openSection === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
          </div>

          {/* Scripture always visible */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 mb-4">
            <div className="flex items-start gap-2">
              <BookOpen className="w-5 h-5 text-slate-400 flex-shrink-0 mt-1" />
              <p className="text-slate-700 leading-relaxed" style={{fontSize:"16px"}}>{sec.scripture}</p>
            </div>
          </div>

          <AnimatePresence>{(openSection === i) && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
              <div className="space-y-3">
                {/* Questions */}
                <div className="bg-white/80 rounded-xl p-4 border border-slate-100">
                  <p className="font-bold text-slate-700 mb-3" style={{fontSize:"15px"}}>💬 討論問題：</p>
                  <div className="space-y-2">
                    {sec.questions.map((qa, j) => (
                      <div key={j} className="flex items-start gap-2 bg-slate-50 rounded-lg p-3 border border-slate-100">
                        <span className="text-slate-400 font-bold text-sm flex-shrink-0 mt-0.5">{j+1}.</span>
                        <div>
                          <p className="text-slate-700 font-medium" style={{fontSize:"15px"}}>{qa.q}</p>
                          {qa.hint && <p className="text-slate-500 text-sm mt-1 italic">💡 {qa.hint}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Transition sentence */}
                {sec.transition && (
                  <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                    <p className="text-amber-800 font-medium" style={{fontSize:"15px"}}>{sec.transition}</p>
                  </div>
                )}

                {/* Backup scripture if exists */}
                {sec.backup && (
                  <div className="bg-violet-50 rounded-xl p-4 border border-violet-200">
                    <p className="font-bold text-violet-700 mb-2" style={{fontSize:"15px"}}>📖 {sec.backup.title}（{sec.backup.ref}）</p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-2">{sec.backup.scripture}</p>
                    <p className="text-violet-600 text-sm font-medium">{sec.backup.question}</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}</AnimatePresence>
        </div>
      );})}

      {/* ========== 後續跟進 ========== */}
      <div className="bg-slate-800 rounded-3xl p-6 md:p-8 text-white">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => setOpenFollow(!openFollow)}>
          <h3 className="font-bold text-amber-300 flex items-center gap-2" style={{fontSize:"22px"}}><Target className="w-6 h-6 text-amber-400" />後續跟進</h3>
          {openFollow ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
        </div>
        <AnimatePresence>{openFollow && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <div className="space-y-2 mt-4">
              {followUp.map((item, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-4 border border-white/10 flex items-start gap-3">
                  <span className="text-amber-400 font-bold">{i+1}.</span>
                  <p className="text-slate-200" style={{fontSize:"15px"}}>{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}</AnimatePresence>
      </div>

      </div>
    </div>
  );
}
