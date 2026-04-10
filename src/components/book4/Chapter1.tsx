import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Globe, Users, BookOpen, ChevronDown, ChevronUp, Target, Brain, Lightbulb, MessageCircle, Search } from 'lucide-react';

export default function Chapter1() {
  const [openSection, setOpenSection] = useState<number | null>(null);
  const toggle = (i: number) => setOpenSection(openSection === i ? null : i);

  const keyPoints = [
    {
      title: "科學界的功課：人本法則（Anthropic Principle）",
      icon: <Globe className="w-6 h-6" />,
      summary: "宇宙的一切似乎都是專為維持人類的生命而精心設計的。",
      details: [
        "如果星球之間的平均距離稍有不同，像地球這類行星就不會形成。",
        "碳和氧的比例如果跟今天稍有不同，就沒有人可以呼吸空氣。",
        "地軸的傾斜角度稍偏一點，我們就會凍死或被燒死。",
        "地球跟太陽的距離、體積或轉速稍有不同，溫度變化就會致命。"
      ],
      conclusion: "現代科學指向一個事實：神一定很看重人！",
      page: "P10-11"
    },
    {
      title: "商業界的功課：顧客革命",
      icon: <Users className="w-6 h-6" />,
      summary: "企業要長久成功，必須把焦點從自己身上拉開，投注在服務顧客上。",
      details: [
        "湯姆‧彼得斯稱之為「顧客革命」，肯恩‧布蘭查提出「倒金字塔」觀念。",
        "組織的自然傾向是往內生長，員工把能量花在內部問題上，忘了服務對象。",
        "教會也有同樣的問題：容易過分糾纏在內部事務，忘了接觸「外面」的人。"
      ],
      conclusion: "如果科學教我們「神看重人」，商業則教我們「我們最好也看重人」。",
      page: "P11-12"
    },
    {
      title: "耶穌的三個比喻（路加福音15章）",
      icon: <Search className="w-6 h-6" />,
      summary: "耶穌破天荒一口氣講三個比喻，只為澄清一件事：神看重每一個人。",
      details: [
        "走失的羊：牧人撇下九十九隻去找那一隻，找到後開慶祝會。",
        "遺失的錢幣：女人翻遍全屋找到後，請朋友一起慶祝。",
        "浪子回頭：父親每天引頸企盼兒子歸來，見面就擁抱他、為他設宴。"
      ],
      conclusion: "三個故事的共同點：失去的東西很重要、值得全力搜尋、找回後令人歡喜。",
      page: "P14-17"
    },
    {
      title: "十架上的對話",
      icon: <Heart className="w-6 h-6" />,
      summary: "即使是十字架上的重刑犯，耶穌也毫不猶豫地肯定他的價值。",
      details: [
        "其中一個盜賊攻擊耶穌，另一個卻看懂了眼前發生的事。",
        "他問耶穌：「像我這樣犯了許多罪的人，還有人看重我嗎？」",
        "耶穌立刻回應：「你遠比你所能想像的重要！今天你要與我同在樂園了。」"
      ],
      conclusion: "神的憐憫超越我們的理解——沒有人是不被看重的。",
      page: "P17-18"
    },
    {
      title: "健身中心的印度朋友",
      icon: <MessageCircle className="w-6 h-6" />,
      summary: "作者在健身中心認識一位被眾人冷落的印度籍回教徒，學到看重每個人的功課。",
      details: [
        "健身中心雇了一名印度移民，身材短小、講破英語、虔誠的回教徒。",
        "大多數人都不想跟這人往來，覺得他是「算不得甚麼」的人。",
        "當這人太太離開他時，聖靈引導作者擁抱他——雖然一開始內心掙扎。",
        "聖靈說：「我要他在痛苦中知道真神非常看重他。你願意為我這麼做嗎？」"
      ],
      conclusion: "當我們領悟到神有多關心一個人，就使得我們可以更關心他。",
      page: "P18-20"
    }
  ];

  const reflections = [
    "我心中是否有一張「不太重要的人」名單？哪些人被我排除在神的關心之外？",
    "我在教會的生活是否太過「往內生長」，以致忘了接觸外面的人？",
    "我是否曾經像法利賽人一樣，評斷甚麼人「可以為神所用」、甚麼人「不能」？",
    "上一次我主動關心一個跟我很不一樣的人，是什麼時候？",
    "如果神看重每一個人，我的生活方式是否反映出這個信念？"
  ];

  const actions = [
    "本週刻意找一位你平常不會主動交談的人（同事、鄰居、服務人員），真誠地關心他的近況。",
    "把路加福音十五章重新讀一遍，思想三個比喻中神尋找失喪者的心。",
    "在禱告中列出三位你認識但還未信主的人，開始每天為他們禱告。",
    "反省自己的「舒適圈」——是否只跟同類型的人來往？考慮如何跨出這個圈子。"
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header */}
      <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-3xl p-8 md:p-10 border border-amber-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="relative">
          <div className="flex items-center gap-2 text-amber-600 font-medium mb-2" style={{fontSize:"15px"}}>
            <BookOpen className="w-5 h-5" />
            PART 1：為何要成為有感染力的基督徒？
          </div>
          <h2 className="font-extrabold text-amber-900 mb-4" style={{fontSize:"30px"}}>第一章：神看重人</h2>
          <p className="text-amber-800 leading-relaxed" style={{fontSize:"18px"}}>
            成為有感染力的基督徒的第一步，是用神的眼光看人——認識到每個人在神眼中都有無可取代的價值。
            從科學界的「人本法則」到商業界的「顧客革命」，從耶穌的三個比喻到十架上的對話，
            本章告訴我們：<strong>神極其看重每一個人</strong>，不分種族、薪水、性別、教育水準或宗教標籤。
          </p>
        </div>
      </div>

      {/* 開場故事 */}
      <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-amber-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}>
          <MessageCircle className="w-6 h-6 text-amber-600" />
          開場故事：水手湯姆
        </h3>
        <div className="bg-amber-50 rounded-xl p-5 border border-amber-100" style={{fontSize:"17px"}}>
          <p className="text-slate-700 leading-relaxed mb-3">
            作者比爾‧海波斯在帆船隊認識了湯姆——一個極端的人，要不完全投入，要不完全不理會。
            湯姆對任何信仰毫無興趣，卻在兩年的友誼中，透過一句經文（加拉太書六7：「人種的是甚麼，收的也是甚麼」）
            開始對信仰產生好奇。
          </p>
          <p className="text-slate-700 leading-relaxed mb-3">
            從背經文的玩笑話，到主動問「哪裏可以買到聖經」，再到開車數百哩去教會——湯姆一步步走向基督。
          </p>
          <p className="text-amber-700 font-bold leading-relaxed">
            💡 核心信息：「人生沒有任何事比朋友相交、彼此相愛、領對方一路走向基督更刺激。沒有任何事。」
          </p>
        </div>
      </div>

      {/* 五大重點 */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-amber-800 mb-6 flex items-center gap-2" style={{fontSize:"24px"}}>
          <Lightbulb className="w-6 h-6 text-amber-600" />
          本章五大重點
        </h3>
        <div className="space-y-4">
          {keyPoints.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden cursor-pointer hover:bg-slate-100 transition-colors" onClick={() => toggle(i)}>
                <div className="p-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-700">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-slate-800" style={{fontSize:"19px"}}>{item.title}</h4>
                      <p className="text-slate-500 mt-1" style={{fontSize:"16px"}}>{item.summary}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex items-center gap-2">
                    <span className="text-slate-400 bg-slate-200 px-2 py-1 rounded-md" style={{fontSize:"13px"}}>{item.page}</span>
                    {openSection === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                  </div>
                </div>
                <AnimatePresence>
                  {openSection === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="px-5 pb-5 space-y-4">
                        <div className="bg-white rounded-xl p-4 border border-slate-100">
                          <h5 className="font-bold text-slate-700 mb-3" style={{fontSize:"17px"}}>📖 書中要點：</h5>
                          <ul className="space-y-2">
                            {item.details.map((d, j) => (
                              <li key={j} className="flex items-start gap-2">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold mt-0.5" style={{fontSize:"12px"}}>{j+1}</span>
                                <span className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                          <p className="text-amber-800 font-bold" style={{fontSize:"17px"}}>✨ {item.conclusion}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 寶貴的一課 */}
      <div className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-2xl p-6 md:p-8 border border-rose-100">
        <h3 className="font-bold text-rose-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}>
          <Heart className="w-6 h-6 text-rose-600" />
          寶貴的一課：撕掉你的「不重要名單」
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4" style={{fontSize:"17px"}}>
          作者坦承自己雖然是基督徒、又是牧師，卻隨身帶著一張「不太重要的人」的名單：
          加油站服務員、餐廳女服務生、結帳員、開車慢的人、鄰居、飛機上喝醉的人、意見不同的同事……
        </p>
        <div className="bg-white rounded-xl p-5 border border-rose-200">
          <p className="text-rose-800 font-bold leading-relaxed" style={{fontSize:"18px"}}>
            「不管他們屬於甚麼種族、拿多少薪水、性別為何、教育水準怎樣、貼有甚麼宗教標籤或沒有，
            神都看重他們，因此我最好也看重他們——真心看重。」
          </p>
          <p className="text-slate-500 mt-2" style={{fontSize:"14px"}}>——P.20</p>
        </div>
      </div>

      {/* 天上的慶祝會 */}
      <div className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-2xl p-6 md:p-8 border border-violet-100">
        <h3 className="font-bold text-violet-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}>
          🎉 天上的慶祝會
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4" style={{fontSize:"17px"}}>
          路加福音十五章10節：「一個罪人悔改，在神的使者面前也是這樣為他歡喜。」
        </p>
        <p className="text-slate-700 leading-relaxed mb-4" style={{fontSize:"17px"}}>
          每個信主的人，在委身那一刻，全天國爆發出極大的慶祝——旗幟上寫著你的大名。
          當你參與帶領朋友歸向基督，你也參與了那場天國的慶祝會！
        </p>
        <p className="text-violet-700 font-bold" style={{fontSize:"17px"}}>
          再沒有任何事比得上被神使用，進行這場向人傳播祂愛、真理與生命的冒險之旅更精彩。
        </p>
      </div>

      {/* 本章總結 */}
      <div className="bg-gradient-to-br from-teal-50 to-slate-50 border border-teal-100 rounded-2xl p-6">
        <h3 className="font-bold text-teal-700 mb-4 flex items-center gap-2" style={{fontSize:"22px"}}>
          📝 第一章總結
        </h3>
        <div className="space-y-3">
          <div className="bg-blue-50 border-blue-200 border rounded-xl p-4">
            <div className="font-bold text-blue-700 mb-1.5" style={{fontSize:"18px"}}>🔬 科學界的功課</div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>人本法則顯示宇宙是精心設計的，為要維持人的生命。結論：神一定很看重人。</p>
          </div>
          <div className="bg-violet-50 border-violet-200 border rounded-xl p-4">
            <div className="font-bold text-violet-700 mb-1.5" style={{fontSize:"18px"}}>💼 商業界的功課</div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>企業要成功就必須聚焦於顧客。同樣地，基督徒和教會必須把眼光轉回靈裏失落的人。</p>
          </div>
          <div className="bg-amber-50 border-amber-200 border rounded-xl p-4">
            <div className="font-bold text-amber-700 mb-1.5" style={{fontSize:"18px"}}>📖 耶穌的教導</div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>路加福音15章三個比喻：失羊、失錢、浪子。每個人都是神極看重的，值得全力尋找，找回後天國歡喜。</p>
          </div>
          <div className="bg-emerald-50 border-emerald-200 border rounded-xl p-4">
            <div className="font-bold text-emerald-700 mb-1.5" style={{fontSize:"18px"}}>💡 核心行動</div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>撕掉心中的「不重要名單」，以神的眼光看待每一個人——不分種族、宗教、社會地位。成為有感染力的基督徒的第一步，就是真心看重人。</p>
          </div>
        </div>
      </div>

      {/* 反思與行動 */}
      <div className="bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-800 shadow-lg text-white">
        <h3 className="font-bold text-orange-300 mb-6 flex items-center" style={{fontSize:"27px"}}>
          <Brain className="w-7 h-7 mr-3" />
          深度反思與行動指南
          <span className="ml-3 bg-slate-700/50 text-slate-300 px-2 py-1 rounded-full font-normal border border-slate-600" style={{fontSize:"15px"}}>💡 延伸應用</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="font-bold text-orange-200 mb-4 flex items-center" style={{fontSize:"23px"}}>
              <Brain className="w-5 h-5 mr-2 text-orange-400" />
              反思問題
            </h4>
            <ul className="space-y-4 text-slate-300">
              {reflections.map((r, i) => (
                <li key={i} className="flex items-start" style={{fontSize:"17px"}}>
                  <span className="text-orange-400 mr-2 font-bold">{i+1}.</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="font-bold text-emerald-300 mb-4 flex items-center" style={{fontSize:"23px"}}>
              <Target className="w-5 h-5 mr-2 text-emerald-400" />
              具體行動方案
            </h4>
            <ul className="space-y-4 text-slate-300">
              {actions.map((a, i) => (
                <li key={i} className="flex items-start" style={{fontSize:"17px"}}>
                  <span className="text-emerald-400 mr-2 font-bold">{i+1}.</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
