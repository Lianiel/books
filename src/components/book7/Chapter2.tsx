import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronDown, ChevronUp, Target, AlertTriangle, ChevronRight } from 'lucide-react';

export default function Chapter2() {
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [openFollow, setOpenFollow] = useState(false);
  const [showChecklist, setShowChecklist] = useState(false);

  const sections = [
    {
      num: "一", title: "每個人都已經在罪中", ref: "羅3：23",
      scripture: "因為世人都犯了罪、虧缺了神的榮耀。",
      questions: [
        { q: "有人可能沒有犯罪過嗎？", hint: "世界的混亂，我們都在言語思想行為上犯罪。罪的原文就是沒有命中紅心，例如說謊" },
        { q: "為何人犯罪會使神的榮耀受虧損？", hint: "比喻：孩子做錯事父母蒙羞" }
      ]
    },
    {
      num: "二", title: "罪讓我們與神隔絕", ref: "賽59：1~2",
      scripture: "耶和華的膀臂、並非縮短不能拯救．耳朵、並非發沉不能聽見．但你們的罪孽使你們與神隔絕、你們的罪惡使他掩面不聽你們。",
      questions: [
        { q: "為何我們無法領受到神的祝福？", hint: "罪如同自己堆砌牆，隔絕了光明" },
        { q: "神沒有能力祝福我們嗎？誰造成的結果？", hint: null }
      ]
    },
    {
      num: "三", title: "罪是人心所發出", ref: "可7：20~23",
      scripture: "又說、從人裏面出來的、那纔能污穢人．因為從裏面、就是從人心裏、發出惡念、苟合、偷盜、兇殺、姦淫、貪婪、邪惡、詭詐、淫蕩、嫉妒、謗讟、驕傲、狂妄．這一切的惡、都是從裏面出來、且能污穢人。",
      questions: [
        { q: "罪是從何而來？誰造成的？", hint: "從自己的心發出" },
        { q: "這裡有哪些是罪？還有其他的罪嗎？", hint: "都是罪；聖經還有記載很多罪" },
        { q: "罪會帶來甚麼後果？", hint: "破壞、傷害與神與人的關係，最終失去祝福" }
      ]
    },
    {
      num: "四", title: "人都會死且要面對審判", ref: "來9：27",
      scripture: "按着定命、人人都有一死、死後且有審判。",
      questions: [
        { q: "有認識人不死嗎？人人都會死公平嗎？", hint: null },
        { q: "如果死後沒有審判公平嗎？", hint: "殺人犯死了就沒事？" },
        { q: "渴望生命現在可以改變嗎？", hint: null }
      ],
      transition: "※中場關懷與鼓勵：簡單分享自己關於罪的見證，是可以改變的。"
    },
    {
      num: "五", title: "生命改變的結果——找回祝福", ref: "加5：22~23",
      scripture: "聖靈所結的果子、就是仁愛、喜樂、和平、忍耐、恩慈、良善、信實、溫柔、節制．這樣的事、沒有律法禁止。",
      questions: [
        { q: "罪或聖靈的果子喜歡哪一個？為什麼？", hint: null },
        { q: "現在最渴望擁有聖靈果子裡的哪些面向？為什麼？", hint: null }
      ]
    },
    {
      num: "六", title: "透過耶穌才有永生", ref: "羅6：23",
      scripture: "因為罪的工價乃是死．惟有神的恩賜．在我們的主基督耶穌裏．乃是永生。",
      questions: [
        { q: "甚麼是工價？自己承擔結果公平嗎？", hint: "自己換來的，如薪水、報酬" },
        { q: "罪的工價是甚麼？", hint: "靈性的死" },
        { q: "罪帶來死，而神要給的恩賜祝福是永生，願意接收這份恩賜祝福嗎？你的選擇是什麼？", hint: "相信可以得到永生" }
      ]
    }
  ];

  const sinChecklist = [
    ["殺人","嫉妒","拜偶像","借錢不還","常常吵架","憤怒/易怒"],
    ["賭博","淫念","算命","貪小便宜","欺負弱小","不饒恕"],
    ["毀謗他人","怨恨神的","紫微斗數","爭強好勝","忘恩負義","好比較"],
    ["同性戀","詭詐","吃符水","強詞奪理","性情凶暴","無憐憫"],
    ["行汙穢事","貪婪","乩童","好說不做","吸毒","動歪念"],
    ["捏造惡事","惡毒","交鬼活動","威脅恐嚇","輕視他人","暴力打架"],
    ["說謊／欺騙","思想邪惡","賣偶像用品","看輕他人","看色情影片","小氣"],
    ["違背父母","自私自利","摸骨","吹毛求疵","任意妄為","表裡不一"],
    ["無親情的","亂倫","牽亡魂","虛情假意","好說讒言","鑽牛角尖"],
    ["咒罵人","自我中心","一貫道儀式","惹是生非","偷竊","喪盡天良"],
    ["姦淫、性犯罪","完美主義","吃祭鬼食物","搬弄是非","發毒誓","心胸狹窄"],
    ["同居","自卑","玩碟仙等","好吃懶做","自殺","花言巧語"],
    ["醉酒／好酒","自以為是","作偶像義子","揭人瘡疤","販賣人口","參與異教儀式"],
    ["貪財","自暴自棄","出家","黃色笑話","驕傲自大","祭拜祖先"],
    ["貪食","驕傲自大","鬼附身","作白日夢","良知蒙昧","風水迷信"],
    ["練氣功","練瑜珈","太極拳","沉迷異教武術","迷信民間黃曆","改名改運"],
    ["言而無信","過火","求神問卜","八家將","接受賄絡","賄賂他人"],
    ["浪費錢財","沒有節制","作假見證","愛宴樂","幸災樂禍","咒罵父母"],
    ["奢侈浪費","搶奪","說髒話","作弊","幫派結黨",""]
  ];

  const followUp = [
    "安靜回顧自己的罪並記錄下來（給罪的檢核表），下次陪讀前勾選完成，並在第三課時帶來。",
    "願意信任身邊弟兄姊妹的愛與幫助。",
    "開始每天和神禱告 5 分鐘，學習將軟弱、擔心、罪交給神。",
    "持續每天靈修馬可福音 1 章，並每天複習一段此課經文，不明白隨時問。",
    "陪讀人員這週與朋友聯絡至少三次，一起持續關心、禱告。"
  ];

  const sectionColors = ["rose","indigo","amber","violet","emerald","blue"];

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="space-y-8">

      {/* ========== 課程標題 ========== */}
      <div className="bg-gradient-to-br from-rose-600 via-red-700 to-orange-800 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-rose-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="relative">
          <div className="flex items-center gap-2 mb-2"><AlertTriangle className="w-5 h-5 text-rose-300" /><span className="text-rose-300 text-sm tracking-widest">基要陪讀課程</span></div>
          <h1 className="font-extrabold mb-3" style={{fontSize:"32px"}}>第二課：祝福去哪了？</h1>
          <p className="text-rose-100 text-lg mb-4">現在的世界的亂象，有領受祝福嗎？為什麼？</p>
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
            <p className="text-white font-bold mb-2" style={{fontSize:"17px"}}>📋 課程目標：</p>
            <p className="text-rose-100" style={{fontSize:"17px"}}>1. 使朋友明白人現在已經沒有了這些祝福。</p>
            <p className="text-rose-100" style={{fontSize:"17px"}}>2. 知道因為人的罪所以無法領受上帝賜的祝福。</p>
          </div>
        </div>
      </div>

      {/* ========== 六段經文教學 ========== */}
      {sections.map((sec, i) => {
        const colorName = sectionColors[i % sectionColors.length];
        const bgMap: Record<string,string> = { emerald:"from-emerald-50 to-teal-50 border-emerald-100", blue:"from-blue-50 to-indigo-50 border-blue-100", rose:"from-rose-50 to-pink-50 border-rose-100", indigo:"from-indigo-50 to-violet-50 border-indigo-100", amber:"from-amber-50 to-orange-50 border-amber-100", violet:"from-violet-50 to-purple-50 border-violet-100" };
        const textMap: Record<string,string> = { emerald:"text-emerald-800", blue:"text-blue-800", rose:"text-rose-800", indigo:"text-indigo-800", amber:"text-amber-800", violet:"text-violet-800" };
        const badgeMap: Record<string,string> = { emerald:"bg-emerald-100 text-emerald-700 border-emerald-200", blue:"bg-blue-100 text-blue-700 border-blue-200", rose:"bg-rose-100 text-rose-700 border-rose-200", indigo:"bg-indigo-100 text-indigo-700 border-indigo-200", amber:"bg-amber-100 text-amber-700 border-amber-200", violet:"bg-violet-100 text-violet-700 border-violet-200" };
        return (
        <div key={i} className={`bg-gradient-to-br ${bgMap[colorName]} rounded-3xl p-6 md:p-8 border shadow-sm`}>
          <div className="flex items-center justify-between mb-4 cursor-pointer" onClick={() => setOpenSection(openSection === i ? null : i)}>
            <h3 className={`font-bold ${textMap[colorName]} flex items-center gap-2`} style={{fontSize:"24px"}}>
              <span className={`px-3 py-1 rounded-full text-sm border ${badgeMap[colorName]}`}>{sec.num}</span>
              {sec.title}
              <span className={`ml-2 text-xs px-2 py-1 rounded-full border ${badgeMap[colorName]} font-normal`}>{sec.ref}</span>
            </h3>
            {openSection === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 mb-4">
            <div className="flex items-start gap-2">
              <BookOpen className="w-5 h-5 text-slate-400 flex-shrink-0 mt-1" />
              <p className="text-slate-700 leading-relaxed" style={{fontSize:"18px"}}>{sec.scripture}</p>
            </div>
          </div>
          <AnimatePresence>{(openSection === i) && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
              <div className="space-y-3">
                <div className="bg-white/80 rounded-xl p-4 border border-slate-100">
                  <p className="font-bold text-slate-700 mb-3" style={{fontSize:"17px"}}>💬 討論問題：</p>
                  <div className="space-y-2">
                    {sec.questions.map((qa, j) => (
                      <div key={j} className="flex items-start gap-2 bg-slate-50 rounded-lg p-3 border border-slate-100">
                        <span className="text-slate-400 font-bold text-sm flex-shrink-0 mt-0.5">{j+1}.</span>
                        <div>
                          <p className="text-slate-700 font-medium" style={{fontSize:"17px"}}>{qa.q}</p>
                          {qa.hint && <p className="text-slate-500 text-sm mt-1 italic">💡 {qa.hint}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {sec.transition && (
                  <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                    <p className="text-amber-800 font-medium" style={{fontSize:"17px"}}>{sec.transition}</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}</AnimatePresence>
        </div>
      );})}

      {/* ========== 罪的檢核表 ========== */}
      <div className="bg-gradient-to-br from-slate-50 to-red-50 rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowChecklist(!showChecklist)}>
          <h3 className="font-bold text-rose-800 flex items-center gap-2" style={{fontSize:"24px"}}>
            <AlertTriangle className="w-6 h-6 text-rose-600" />
            附：罪的檢核表
          </h3>
          {showChecklist ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
        </div>
        <AnimatePresence>{showChecklist && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <tbody>
                  {sinChecklist.map((row, ri) => (
                    <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      {row.map((cell, ci) => (
                        <td key={ci} className="border border-slate-200 px-2 py-2 text-slate-600" style={{fontSize:"16px"}}>
                          {cell && <span>☐ {cell}</span>}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}</AnimatePresence>
      </div>

      {/* ========== 後續跟進 ========== */}
      <div className="bg-slate-800 rounded-3xl p-6 md:p-8 text-white">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => setOpenFollow(!openFollow)}>
          <h3 className="font-bold text-amber-300 flex items-center gap-2" style={{fontSize:"24px"}}><Target className="w-6 h-6 text-amber-400" />後續跟進</h3>
          {openFollow ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
        </div>
        <AnimatePresence>{openFollow && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <div className="space-y-2 mt-4">
              {followUp.map((item, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-4 border border-white/10 flex items-start gap-3">
                  <span className="text-amber-400 font-bold">{i+1}.</span>
                  <p className="text-slate-200" style={{fontSize:"17px"}}>{item}</p>
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
