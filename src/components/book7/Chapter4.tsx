import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronDown, ChevronUp, Target, Heart, Gift } from 'lucide-react';

export default function Chapter4() {
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [openFollow, setOpenFollow] = useState(false);

  const sections = [
    {
      num: "一", title: "作決定遠離罪、歸向神", ref: "代下七14",
      scripture: "這稱為我名下的子民，若是自卑、禱告，尋求我的面，轉離他們的惡行，我必從天上垂聽，赦免他們的罪，醫治他們的地。",
      questions: [
        { q: "我們怎麼做，上帝會垂聽並赦免我們的罪，醫治我們的地？", hint: "罪是人心裏面出來的惡念，除非在上帝面前徹底的「認罪悔改」，上帝才會「赦免醫治」。如同「遮掩自己罪過的，必不亨通；承認離棄罪過的，必蒙憐恤。」（箴言二十八13）" }
      ]
    },
    {
      num: "二", title: "藉著相信可以稱義", ref: "羅五1-2",
      scripture: "我們既因信稱義，就藉著我們的主耶穌基督得與神相和。我們又藉著他，因信得進入現在所站的這恩典中，並且歡歡喜喜盼望神的榮耀。",
      questions: [
        { q: "藉著誰可以跟上帝和好？", hint: "主耶穌基督" },
        { q: "如何進入這恩典中？", hint: "因著信" },
        { q: "你明白這裡的信是什麼嗎？", hint: "相信，是持續不斷的行動，並永遠的信靠祂。舉例：坐椅子。讓主永遠住在你心中，成為你生命的首位。" }
      ],
      transition: "※轉折語：信心所帶出的行動就是「洗禮」。洗禮的意義是什麼？"
    },
    {
      num: "三", title: "洗禮的意義", ref: "羅六3-5",
      scripture: "豈不知我們這受洗歸入基督耶穌的人，是受洗歸入他的死嗎？所以我們藉著洗禮歸入死，和他一同埋葬，原是叫我們一舉一動有新生的樣式，像基督藉著父的榮耀從死裡復活一樣。我們若在他死的形狀上與他聯合，也要在他復活的形狀上與他聯合。",
      questions: [
        { q: "什麼是洗禮？", hint: "我們藉著洗禮歸入死，與他同死、同埋葬、同復活，有新生的樣式" },
        { q: "「受洗歸入基督耶穌」表示什麼？", hint: "歸入基督的身體——教會" }
      ],
      transition: "※轉折語：洗禮使我們成為忠心跟隨主的門徒。"
    },
    {
      num: "四", title: "聚會的祝福", ref: "來十24-25",
      scripture: "又要彼此相顧，激發愛心，勉勵行善。你們不可停止聚會，好像那些停止慣了的人，倒要彼此勸勉，既知道那日子臨近，就更當如此。",
      questions: [
        { q: "為何基督徒要穩定持續聚會？", hint: "聚會的重要性：1. 敬拜神；2. 在關係中落實彼此相愛，效法實踐耶穌的教導；3. 彼此鼓勵、恆心忍耐、等待主耶穌再來" },
        { q: "肢體不能脫離身體，否則無法存活。真正的生命必須在日常生活、關係中才能實踐。", hint: "每個聚會是幫助門徒落實愛神愛人的最好機會。包括主日崇拜、小組聚會分享、禱告會、各樣教會活動等。" },
        { q: "請陪讀兄姊簡單分享自己或身邊兄姊在教會中成長的經歷與見證。", hint: null }
      ]
    },
    {
      num: "五", title: "奉獻的祝福", ref: "瑪三10-12；太二十三23",
      scripture: "萬軍之耶和華說：你們要將當納的十分之一全然送入倉庫，使我家有糧，以此試試我，是否為你們敞開天上的窗戶，傾福與你們，甚至無處可容。萬軍之耶和華說：我必為你們斥責蝗蟲(原文是吞噬者)，不容他毀壞你們的土產。你們田間的葡萄樹在未熟之先也不掉果子。萬軍之耶和華說：萬國必稱你們為有福的，因你們的地必成為喜樂之地。",
      extraScripture: "（太二十三23）你們這假冒為善的文士和法利賽人有禍了！因為你們將薄荷、茴香、芹菜，獻上十分之一，那律法上更重的事，就是公義、憐憫、信實，反倒不行了。這更重的是你們當行的；那也是不可不行的。",
      questions: [
        { q: "為何門徒要奉獻？", hint: "十一奉獻本是當納給神的基本，從亞伯拉罕自發的感動開始。十一奉獻必然會經歷神的信實、供應、保護與祝福、喜樂；也回應我們對神的愛、信心與感恩。奉獻單純是敬拜神、信靠神、感謝神的回應，不是交換條件。" },
        { q: "新約也要十一奉獻嗎？", hint: "耶穌斥責法利賽人對神表面且不忠心，教導十一奉獻是最基本不可不行的，進而更要活出公義、憐憫、信實的生命；奉獻是用於教會各樣福音事工、牧養工作、行政支出等。" },
        { q: "請陪讀兄姊簡單分享自己或身邊兄姊的經歷與見證。", hint: null }
      ]
    },
    {
      num: "六", title: "大使命～成為門徒", ref: "太二十八18-20",
      scripture: "耶穌進前來，對他們說：天上地下所有的權柄都賜給我了。所以，你們要去，使萬民作我的門徒，奉父、子、聖靈的名給他們施洗。凡我所吩咐你們的，都教訓他們遵守，我就常與你們同在，直到世界的末了。",
      questions: [
        { q: "耶穌把權柄賜給我們的目的？", hint: "使萬民作我的門徒：包含 1.傳福音；2.奉父、子、聖靈的名給他們施洗；3.凡我所吩咐你們的，都教訓他們遵守" },
        { q: "這是耶穌離開門徒、升天之前吩咐門徒的都要遵行的大使命。", hint: null }
      ]
    },
    {
      num: "七", title: "決志邀請：你願意擁抱祝福嗎？", ref: "",
      scripture: "",
      questions: [
        { q: "你願意相信耶穌是你生命的救主，悔改信靠祂，擁抱神給你的祝福嗎？", hint: "陪讀者帶領交託禱告" }
      ]
    }
  ];

  const followUp = [
    "請與身邊的人分享你生命得著祝福的見證。",
    "請於一週內找傳道人進行受洗約談並寫洗禮申請書。"
  ];

  const sectionColors = ["amber","blue","violet","emerald","rose","indigo","teal"];

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="space-y-8">

      {/* ========== 課程標題 ========== */}
      <div className="bg-gradient-to-br from-amber-500 via-orange-600 to-red-700 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="relative">
          <div className="flex items-center gap-2 mb-2"><Gift className="w-5 h-5 text-amber-200" /><span className="text-amber-200 text-sm tracking-widest">基要陪讀課程</span></div>
          <h1 className="font-extrabold mb-3" style={{fontSize:"32px"}}>第四課：擁抱祝福</h1>
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10 mb-4">
            <p className="text-white font-bold mb-2" style={{fontSize:"17px"}}>📋 課程目標：</p>
            <p className="text-amber-100" style={{fontSize:"17px"}}>1. 惟有相信耶穌的救恩才能稱義（因信稱義）。</p>
            <p className="text-amber-100" style={{fontSize:"17px"}}>2. 洗禮是一個重生得救的人公開表明歸屬基督的儀式（就像結婚典禮）。</p>
          </div>
          <div className="bg-amber-500/20 rounded-xl p-4 border border-amber-400/30">
            <p className="text-amber-200 font-bold" style={{fontSize:"17px"}}>💬 前言引導：</p>
            <p className="text-amber-100" style={{fontSize:"17px"}}>分享悔改後你做了什麼？陪讀者分享悔改後生命的改變及具體的盼望。</p>
          </div>
        </div>
      </div>

      {/* ========== 經文教學 ========== */}
      {sections.map((sec, i) => {
        const colorName = sectionColors[i % sectionColors.length];
        const bgMap: Record<string,string> = { emerald:"from-emerald-50 to-teal-50 border-emerald-100", blue:"from-blue-50 to-indigo-50 border-blue-100", rose:"from-rose-50 to-pink-50 border-rose-100", indigo:"from-indigo-50 to-violet-50 border-indigo-100", amber:"from-amber-50 to-orange-50 border-amber-100", violet:"from-violet-50 to-purple-50 border-violet-100", teal:"from-teal-50 to-cyan-50 border-teal-100" };
        const textMap: Record<string,string> = { emerald:"text-emerald-800", blue:"text-blue-800", rose:"text-rose-800", indigo:"text-indigo-800", amber:"text-amber-800", violet:"text-violet-800", teal:"text-teal-800" };
        const badgeMap: Record<string,string> = { emerald:"bg-emerald-100 text-emerald-700 border-emerald-200", blue:"bg-blue-100 text-blue-700 border-blue-200", rose:"bg-rose-100 text-rose-700 border-rose-200", indigo:"bg-indigo-100 text-indigo-700 border-indigo-200", amber:"bg-amber-100 text-amber-700 border-amber-200", violet:"bg-violet-100 text-violet-700 border-violet-200", teal:"bg-teal-100 text-teal-700 border-teal-200" };

        // Special handling for decision section (no scripture)
        if (!sec.scripture) {
          return (
            <div key={i} className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-6 md:p-8 border border-amber-200 shadow-sm text-center">
              <Gift className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="font-extrabold text-amber-800 mb-4" style={{fontSize:"24px"}}>{sec.title}</h3>
              <p className="text-amber-700 font-medium mb-4" style={{fontSize:"18px"}}>{sec.questions[0].q}</p>
              {sec.questions[0].hint && <p className="text-amber-600 italic" style={{fontSize:"17px"}}>({sec.questions[0].hint})</p>}
            </div>
          );
        }

        return (
        <div key={i} className={`bg-gradient-to-br ${bgMap[colorName]} rounded-3xl p-6 md:p-8 border shadow-sm`}>
          <div className="flex items-center justify-between mb-4 cursor-pointer" onClick={() => setOpenSection(openSection === i ? null : i)}>
            <h3 className={`font-bold ${textMap[colorName]} flex items-center gap-2 flex-wrap`} style={{fontSize:"24px"}}>
              <span className={`px-3 py-1 rounded-full text-sm border ${badgeMap[colorName]}`}>{sec.num}</span>
              {sec.title}
              {sec.ref && <span className={`text-xs px-2 py-1 rounded-full border ${badgeMap[colorName]} font-normal`}>{sec.ref}</span>}
            </h3>
            {openSection === i ? <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />}
          </div>
          <div className="bg-white rounded-xl p-5 border border-slate-200 mb-4">
            <div className="flex items-start gap-2">
              <BookOpen className="w-5 h-5 text-slate-400 flex-shrink-0 mt-1" />
              <p className="text-slate-700 leading-relaxed" style={{fontSize:"17px"}}>{sec.scripture}</p>
            </div>
          </div>
          {sec.extraScripture && (
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 mb-4">
              <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>{sec.extraScripture}</p>
            </div>
          )}
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
