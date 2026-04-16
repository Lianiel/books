import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronDown, ChevronUp, Target, Heart, ChevronRight } from 'lucide-react';

export default function Chapter3() {
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [openFollow, setOpenFollow] = useState(false);

  const sections = [
    {
      num: "一", title: "神為何要將耶穌賜給世人", ref: "約三16",
      scripture: "神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，反得永生。",
      questions: [
        { q: "神愛那些人，包含你嗎？", hint: null },
        { q: "神的獨生子是誰？", hint: "耶穌" },
        { q: "信他的人會有什麼結果？什麼是永生？", hint: "經過審判不致滅亡(地獄)，反得永生(與神永遠同在天堂)" }
      ]
    },
    {
      num: "二", title: "藉著死，耶穌背負世人的罪", ref: "彼前二22-25",
      scripture: "他並沒有犯罪，口裡也沒有詭詐。他被罵不還口；受害不說威嚇的話，只將自己交託那按公義審判人的主。他被掛在木頭上，親身擔當了我們的罪，使我們既然在罪上死，就得以在義上活。因他受的鞭傷，你們便得了醫治。",
      questions: [
        { q: "神用什麼方法將耶穌賜給世人？", hint: "耶穌被釘十字架，親身擔當我的罪" },
        { q: "使我們可以在什麼方面死？什麼方面活？", hint: "奇妙的交換：我們的罪卸給神，神視我們為義" },
        { q: "耶穌受鞭傷，我們便得著什麼？", hint: "罪得赦免，內心傷痛得醫治" }
      ]
    },
    {
      num: "三", title: "耶穌，預言中唯一的拯救者", ref: "賽五十三6-7",
      subtitle: "此經文為耶穌誕生前700年",
      scripture: "我們都如羊走迷；各人偏行己路；耶和華使我們眾人的罪孽都歸在他身上。他被欺壓，在受苦的時候卻不開口；他像羊羔被牽到宰殺之地，又像羊在剪毛的人手下無聲，他也是這樣不開口。",
      questions: [
        { q: "我們走迷偏行己路，但上帝使眾人的罪都歸在誰的身上？", hint: "耶穌" },
        { q: "陪讀者分享自己過往生命迷失的見證。", hint: null }
      ]
    },
    {
      num: "四", title: "為何只有耶穌可以為我們死？", ref: "林後五21",
      scripture: "神使那無罪的，替我們成為罪，好叫我們在他裡面成為神的義。",
      questions: [
        { q: "無罪的代替有罪的這樣公平嗎？", hint: "不公平" },
        { q: "如果找一個比較好的人上十字架，取代一個比較不好的人，罪的問題可以解決嗎？", hint: "不能，因為比較好的人仍然有罪，無法自救，只有耶穌是無罪的，祂的死才能使我們得救，這就是上帝賜給我們寶貴的救恩。" }
      ],
      transition: "※轉接句：只有耶穌的死才能解決我們罪的問題。耶穌如何為我們死？"
    },
    {
      num: "五", title: "耶穌為你承受情感上的痛苦", ref: "太二十六36-46",
      scripture: "他就稍往前走，俯伏在地，禱告說：我父啊，倘若可行，求你叫這杯離開我。然而，不要照我的意思，只要照你的意思。來到門徒那裡，見他們睡著了，就對彼得說：怎麼樣？你們不能同我警醒片時嗎？……於是來到門徒那裡，對他們說：現在你們仍然睡覺安歇吧！時候到了，人子被賣在罪人手裡了。起來！我們走吧。看哪，賣我的人近了。",
      questions: [],
      guide: "引導：耶穌順服上帝的旨意上十字架，並且面對猶大的背叛及門徒的睡著感到孤單，在情感上經歷被背叛的痛苦。"
    },
    {
      num: "六A", title: "耶穌為你承受肉體上的痛苦（一）", ref: "太二十六59-67",
      scripture: "祭司長和全公會尋找假見證控告耶穌，要治死他。……大祭司對他說：我指著永生神叫你起誓告訴我們，你是神的兒子基督不是？耶穌對他說：你說的是。大祭司就撕開衣服，說：他說了僭妄的話……他們就吐唾沫在他臉上，用拳頭打他；也有用手掌打他的。",
      questions: [],
      guide: "引導：耶穌被吐唾沫在臉上、被拳頭及手掌打臉。祂承受了身體的痛苦，以及人格、尊嚴的羞辱。"
    },
    {
      num: "六B", title: "耶穌為你承受肉體上的痛苦（二）", ref: "太二十七15-23",
      scripture: "巡撫有一個常例，每逢這節期，隨眾人所要的釋放一個囚犯給他們。……眾人聚集的時候，彼拉多就對他們說：你們要我釋放哪一個給你們？是巴拉巴呢？是稱為基督的耶穌呢？……祭司長和長老挑唆眾人，求釋放巴拉巴，除滅耶穌。……彼拉多說：為什麼呢？他做了什麼惡事呢？他們便極力的喊著說：把他釘十字架！於是彼拉多釋放巴拉巴給他們，把耶穌鞭打了，交給人釘十字架。",
      questions: [],
      guide: "引導：巴拉巴是殺人叛亂犯；耶穌被鞭打。（解釋鞭子鞭刑的殘酷，39下 申25:3、林後11:24）；耶穌為何這樣做？（因為祂愛你）"
    },
    {
      num: "六C", title: "耶穌為你承受肉體上的痛苦（三）", ref: "太二十七29-30",
      scripture: "用荊棘編做冠冕，戴在他頭上，拿一根葦子放在他右手裡，跪在他面前，戲弄他，說：恭喜，猶太人的王啊！又吐唾沫在他臉上，拿葦子打他的頭。",
      questions: [],
      guide: "引導：耶穌頭上被戴上荊棘做的冠冕，且被打頭。（描述荊棘冠、太陽穴神經、微血管最密）祂為何如此堅持？（因為祂愛你）"
    },
    {
      num: "六D", title: "耶穌為你承受肉體上的痛苦（四）", ref: "太二十七33-35",
      scripture: "到了一個地方名叫各各他，意思就是髑髏地。……他們既將他釘在十字架上，就拈鬮分他的衣服。",
      questions: [],
      guide: "引導：耶穌被釘十字架（十字架刑罰的不人道）。為何耶穌一路上沒有反駁，堅持要上十字架？（因為祂愛你，順服上帝的旨意）"
    },
    {
      num: "六E", title: "神離棄耶穌", ref: "太二十七45-46",
      scripture: "從午正到申初，遍地都黑暗了。約在申初，耶穌大聲喊著說：以利！以利！拉馬撒巴各大尼？就是說：我的神！我的神！為什麼離棄我？",
      note: "午正到申初是指 12:00-15:00；耶穌從前一天晚上就開始被審訊",
      questions: [
        { q: "神為何要離棄耶穌？", hint: "因為神愛世人，透過祂獨生子耶穌上十字架，承擔人的罪" },
        { q: "耶穌為何願意承擔與最愛天父的分離？", hint: "因祂愛你，順服上帝的旨意" },
        { q: "這跟你過去對耶穌的認識一樣嗎？", hint: null },
        { q: "那此刻你想對耶穌說什麼？", hint: null }
      ]
    },
    {
      num: "七", title: "你還是罪人時，耶穌就為你死", ref: "羅五6-8",
      scripture: "因我們還軟弱的時候，基督就按所定的日期為罪人死。為義人死，是少有的；為仁人死、或者有敢做的。惟有基督在我們還作罪人的時候為我們死，神的愛就在此向我們顯明了。",
      questions: [
        { q: "在什麼時候，耶穌就為我們死？", hint: "罪人時，這就是神愛我們的證明" },
        { q: "分享明白耶穌十字架的愛後，如何幫助自己與神和好的見證。", hint: null },
        { q: "你願意接受耶穌的愛，相信耶穌能洗淨你一切的罪，得著新生命及祝福嗎？", hint: "耶穌犧牲的愛，我們還不起，只能回應耶穌的愛，就是為祂而活，一生跟隨祂" }
      ],
      transition: "※轉折句：那你知道可以怎麼做嗎？"
    },
    {
      num: "八", title: "認罪悔改歸主", ref: "使二37~38",
      scripture: "眾人聽見這話，覺得扎心，就對彼得和其餘的使徒說：弟兄們，我們當怎樣行？彼得說：你們各人要悔改，奉耶穌基督的名受洗，叫你們的罪得赦，就必領受所賜的聖靈。",
      questions: [
        { q: "罪得到赦免的方式是？", hint: "上帝的祝福只能透過相信耶穌的贖罪救恩得著，藉由真實的認罪悔改帶出具體行動。悔改是「遠離罪，歸向神」，不再倚靠自己，而是相信聖靈會幫助我們倚靠上帝，生命真正改變。" },
        { q: "上次寫的「認罪表」，你是否願意切實悔改？", hint: null },
        { q: "做個感恩及認罪悔改的禱告。", hint: null }
      ]
    }
  ];

  const followUp = [
    "自己花一段時間與神禱告，感謝祂十字架的救恩、透過禱告向神認每個罪。",
    "對於其中的罪，願意開始有悔改的行動（路三8：你們要結出果子來，與悔改的心相稱），回家思想後，下回可以分享。"
  ];

  const sectionColors = ["blue","emerald","violet","amber","rose","indigo","teal","blue","emerald","violet","amber","indigo"];

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="space-y-8">

      {/* ========== 課程標題 ========== */}
      <div className="bg-gradient-to-br from-indigo-600 via-violet-700 to-purple-800 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="relative">
          <div className="flex items-center gap-2 mb-2"><Heart className="w-5 h-5 text-indigo-300" /><span className="text-indigo-300 text-sm tracking-widest">基要陪讀課程</span></div>
          <h1 className="font-extrabold mb-3" style={{fontSize:"30px"}}>第三課：祝福在耶穌裡</h1>
          <p className="text-indigo-100 text-lg mb-4">一個人掉入流沙裡，沒有辦法救自己。唯有透過耶穌才能得著祝福！</p>
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10 mb-4">
            <p className="text-white font-bold mb-2" style={{fontSize:"15px"}}>📋 課程目標：</p>
            <p className="text-indigo-100" style={{fontSize:"15px"}}>1. 認識耶穌十字架的救恩。</p>
            <p className="text-indigo-100" style={{fontSize:"15px"}}>2. 願意真實對罪悔改，信靠耶穌。</p>
          </div>
          <div className="bg-amber-500/20 rounded-xl p-4 border border-amber-400/30">
            <p className="text-amber-200 italic" style={{fontSize:"15px"}}>「盜賊來，無非要偷竊、殺害、毀壞；我來了，是要叫羊得生命，並且得的更豐盛。」（約十10）</p>
          </div>
        </div>
      </div>

      {/* ========== 經文教學 ========== */}
      {sections.map((sec, i) => {
        const colorName = sectionColors[i % sectionColors.length];
        const bgMap: Record<string,string> = { emerald:"from-emerald-50 to-teal-50 border-emerald-100", blue:"from-blue-50 to-indigo-50 border-blue-100", rose:"from-rose-50 to-pink-50 border-rose-100", indigo:"from-indigo-50 to-violet-50 border-indigo-100", amber:"from-amber-50 to-orange-50 border-amber-100", violet:"from-violet-50 to-purple-50 border-violet-100", teal:"from-teal-50 to-cyan-50 border-teal-100" };
        const textMap: Record<string,string> = { emerald:"text-emerald-800", blue:"text-blue-800", rose:"text-rose-800", indigo:"text-indigo-800", amber:"text-amber-800", violet:"text-violet-800", teal:"text-teal-800" };
        const badgeMap: Record<string,string> = { emerald:"bg-emerald-100 text-emerald-700 border-emerald-200", blue:"bg-blue-100 text-blue-700 border-blue-200", rose:"bg-rose-100 text-rose-700 border-rose-200", indigo:"bg-indigo-100 text-indigo-700 border-indigo-200", amber:"bg-amber-100 text-amber-700 border-amber-200", violet:"bg-violet-100 text-violet-700 border-violet-200", teal:"bg-teal-100 text-teal-700 border-teal-200" };
        return (
        <div key={i} className={`bg-gradient-to-br ${bgMap[colorName]} rounded-3xl p-6 md:p-8 border shadow-sm`}>
          <div className="flex items-center justify-between mb-4 cursor-pointer" onClick={() => setOpenSection(openSection === i ? null : i)}>
            <h3 className={`font-bold ${textMap[colorName]} flex items-center gap-2 flex-wrap`} style={{fontSize:"20px"}}>
              <span className={`px-3 py-1 rounded-full text-sm border ${badgeMap[colorName]}`}>{sec.num}</span>
              {sec.title}
              <span className={`text-xs px-2 py-1 rounded-full border ${badgeMap[colorName]} font-normal`}>{sec.ref}</span>
            </h3>
            {openSection === i ? <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />}
          </div>
          {sec.subtitle && <p className="text-slate-500 text-sm italic mb-3 -mt-2 ml-12">{sec.subtitle}</p>}
          <div className="bg-white rounded-xl p-5 border border-slate-200 mb-4">
            <div className="flex items-start gap-2">
              <BookOpen className="w-5 h-5 text-slate-400 flex-shrink-0 mt-1" />
              <p className="text-slate-700 leading-relaxed" style={{fontSize:"15px"}}>{sec.scripture}</p>
            </div>
          </div>
          {sec.note && <p className="text-slate-500 text-xs italic mb-3 ml-2">* {sec.note}</p>}
          <AnimatePresence>{(openSection === i) && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
              <div className="space-y-3">
                {sec.guide && (
                  <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                    <p className="text-amber-800 font-medium" style={{fontSize:"15px"}}>📌 {sec.guide}</p>
                  </div>
                )}
                {sec.questions.length > 0 && (
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
                )}
                {sec.transition && (
                  <div className="bg-violet-50 rounded-xl p-4 border border-violet-200">
                    <p className="text-violet-800 font-medium" style={{fontSize:"15px"}}>{sec.transition}</p>
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
