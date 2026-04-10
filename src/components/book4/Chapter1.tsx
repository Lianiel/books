import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Globe, Users, BookOpen, ChevronDown, ChevronUp, Target, Brain, Lightbulb, MessageCircle, Search, AlertTriangle, Sparkles, Eye, Cross, HandHeart, ShieldCheck } from 'lucide-react';

export default function Chapter1() {
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [openParable, setOpenParable] = useState<number | null>(null);
  const toggle = (i: number) => setOpenSection(openSection === i ? null : i);
  const toggleParable = (i: number) => setOpenParable(openParable === i ? null : i);

  const scienceFacts = [
    { fact: "星球距離", detail: "如果星球之間的平均距離再增大一點，像地球這類行星就不會形成；如果再小一點，生命存在所需的行星軌道就不會出現。" },
    { fact: "碳氧比例", detail: "如果碳和氧的比例跟今天的情況稍有不同，就沒有人可以在這裏呼吸空氣。" },
    { fact: "地軸傾斜", detail: "把地軸的傾斜角度往某方向稍偏一點，我們就會凍死；往另一方向稍偏一點，我們就會被燒死。" },
    { fact: "地球位置", detail: "地球跟太陽的距離稍微近一點或遠一點，兩者的體積稍微大一點或小一點，甚至地球轉動的速度與現今稍有不同——只要以上任何一點改變了，這些改變所造成的溫度變化就會要了人的命。" },
    { fact: "宇宙擴張率", detail: "只要把宇宙的擴張率提高或降低百萬分之一，生命就不可能出現。這讓所有專家都無法否認，無論他們本身有無宗教信仰。" }
  ];

  const parables = [
    {
      title: "🐑 走失的羊",
      story: "有個人有一百隻羊。有一隻毛茸茸的小傢伙晃蕩到別處去了。於是他把九十九隻留在原地，出去找那隻走失的。他一直找一直找，終於找到了。他輕柔地抱起這隻羊，扛在肩上，帶回羊群。然後他召請牧羊人朋友來，說：「我們開個慶祝會吧，我找回那隻走失的羊了！」",
      significance: "走失的羊對牧人的生計很重要。牧人不惜撇下九十九隻，全力尋找那一隻迷失的。",
      application: "神不會因為教會裏已經有九十九個「好基督徒」，就放棄追尋那一個迷失的人。"
    },
    {
      title: "💰 遺失的錢幣",
      story: "有個女人有十個銅錢，她弄丟了其中一枚。於是她點起燈來，打掃屋子，移開所有家具，不停地找不停地找，終於找到了。這女人找到後開心得不得了，把朋友都叫了來，請他們跟她一起慶祝。",
      significance: "這女人很可能是寡婦，這錢幣可能是她全部財產的十分之一。遺失的錢幣攸關她的生存。",
      application: "每一個靈魂在神眼中都是不可或缺的，值得翻遍全屋去尋找。"
    },
    {
      title: "🏠 浪子回頭",
      story: "有一個人有兩個男孩子，小的那個帶著滿口袋的現金遠走他方，走上放蕩之路。當他阮囊羞澀、在餵豬討生活時終於覺悟過來，決定回家。他父親每天都引頸企盼這兒子歸來，在他離大門還有很長一段距離時就看到了他。滿懷希望的父親跑上前去擁抱他。孩子說：「爸爸，我犯了很大的錯，不配再作你的兒子。」父親打斷他：「噓，別這麼說！我很高興你終於回來了！」然後命人舉辦盛大宴會。",
      significance: "父親每天引頸企盼、看到時跑上前去擁抱——這描繪的是神對每一個偏離之人那份永不放棄的愛。",
      application: "不管我們偏離多遠、犯了多少錯，神的愛說：「儘管你們偏離正途，仍然是我看重的！真的如此！」"
    }
  ];

  const gymStory = [
    { phase: "初見", detail: "健身中心雇了一名印度移民——身材短小、禿頭、講一口破英語、個性有點怪，而且是虔誠的回教徒。「換言之，他不是我會想邀他打高爾夫球的人。」" },
    { phase: "冷落", detail: "健身中心裏很多人都不大想跟這人往來。他們的行為很清楚地顯示，對他們而言他是那種「算不得甚麼」的人。" },
    { phase: "靠近", detail: "作者開始設法跟他作朋友，起初還頗有點尷尬。他們談話、開玩笑，漸漸有了一些交往。有一天作者給他一本聖經，下回見面時，他給了作者一本可蘭經！" },
    { phase: "痛苦", detail: "有一天他焦慮地來找作者：「比爾先生，我太太離開我，現在我孤單一人。我真不知道該怎麼辦！」作者是他第一個講起這事的人。" },
    { phase: "掙扎", detail: "聖靈引導作者擁抱他，但作者在內心喊暫停：「首先，我不是天生情感豐富的人，特別是對男人！其次，主啊，祢要我擁抱的這人與無神論者差不多。」" },
    { phase: "順服", detail: "聖靈說：「比爾，這些我都知道。但是我要他在這樣的痛苦中知道真神非常看重他。我只是要我的一個兒女把這意思傳達給他。你願意為我這麼做嗎？」" },
    { phase: "突破", detail: "「當我用手臂圍住他的時候，他立即崩潰，淚水氾濫在我肩頭。這對他來說顯然是相當重要的一刻。如今回想起來，對我也相當重要。」" }
  ];

  const dangerSigns = [
    { sign: "評斷名單", desc: "我們高談闊論地評斷甚麼人可以為神所用、甚麼人不能。不知不覺地，我們把神所關心的名單縮減到周圍剛好跟我們很像的那一小撮人。" },
    { sign: "排斥外人", desc: "「那些『只來一回的人』對我不重要。」——如果我們認為他們對神也不重要，就不知不覺卻很有效地除掉任何想傳播福音的盼望。" },
    { sign: "自義態度", desc: "宗教領袖不滿耶穌跟「那種人」混在一起——這種自義態度正是耶穌講三個比喻的理由。我們是否也在不自覺中成了現代的法利賽人？" },
    { sign: "隱形名單", desc: "作者承認自己隨身帶著一張「不太重要的人」的名單：加油站服務員、餐廳女服務生、結帳員、開車慢的人、鄰居、飛機上喝醉的人、意見不同的同事……" }
  ];

  const reflections = [
    "我心中是否有一張「不太重要的人」名單？哪些人被我排除在神的關心之外？",
    "我在教會的生活是否太過「往內生長」，以致忘了接觸外面的人？",
    "我是否曾經像法利賽人一樣，評斷甚麼人「可以為神所用」、甚麼人「不能」？",
    "上一次我主動關心一個跟我很不一樣的人，是什麼時候？",
    "如果神看重每一個人，我的生活方式是否反映出這個信念？",
    "對於那些「只來一回的人」、偶爾出現在教會的人，我的態度是歡迎還是排斥？",
    "當聖靈感動我去接近某個「不方便」的人時，我是否像作者一樣在內心喊暫停？"
  ];

  const actions = [
    "本週刻意找一位你平常不會主動交談的人（同事、鄰居、服務人員），真誠地關心他的近況。",
    "把路加福音十五章重新讀一遍，思想三個比喻中神尋找失喪者的心。",
    "在禱告中列出三位你認識但還未信主的人，開始每天為他們禱告。",
    "反省自己的「舒適圈」——是否只跟同類型的人來往？考慮如何跨出這個圈子。",
    "下次在公共場所遇到服務人員時，刻意多說一句關心的話，把他們當「人」而非「工具」看待。",
    "檢視你心中的「不重要名單」，把上面的人一一寫下來，然後在禱告中把他們交託給神。"
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
          <p className="text-amber-800 leading-relaxed mb-3" style={{fontSize:"18px"}}>
            成為有感染力的基督徒的第一步，是用神的眼光看人——認識到<strong>每個人在神眼中都有無可取代的價值</strong>。
          </p>
          <p className="text-amber-700 leading-relaxed" style={{fontSize:"17px"}}>
            本章透過科學界的「人本法則」、商業界的「顧客革命」、耶穌在路加福音十五章的三個比喻、十架上的對話，
            以及作者在健身中心的親身經歷，層層推進一個核心信息：神極其看重每一個人，不分種族、薪水、性別、教育水準或宗教標籤。
            而我們也必須學會像神一樣看重人——這是傳福音的根基。
          </p>
        </div>
      </div>

      {/* 開場故事：水手湯姆 */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-amber-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}>
          <MessageCircle className="w-6 h-6 text-amber-600" />
          開場故事：水手湯姆的信仰旅程
          <span className="text-slate-400 bg-slate-100 px-2 py-1 rounded-md font-normal" style={{fontSize:"13px"}}>P7-9</span>
        </h3>
        <div className="space-y-4">
          <div className="bg-amber-50 rounded-xl p-5 border border-amber-100" style={{fontSize:"17px"}}>
            <p className="text-slate-700 leading-relaxed mb-3">
              湯姆是一流的水手、勇猛的賽者，愈在冒險邊緣愈蓬勃有活力。他是很極端的人——
              <strong>要不就是完全投入，要不就是完全不理會</strong>。挑戰在於：湯姆對任何信仰都沒興趣。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
              <div className="font-bold text-slate-700 mb-2" style={{fontSize:"16px"}}>🔑 轉折點：一節經文</div>
              <p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>
                湯姆手臂掛著吊帶（打架受傷）來找作者，半開玩笑地求禱告。作者沒有禱告，反而給了他一節經文：
                「人種的是甚麼，收的也是甚麼。」（加拉太書六7）湯姆愣住了：「不會真的是這麼說的吧？」
                這節經文成了他們之間常講的笑話，卻也開啟了指向屬靈談話的門。
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
              <div className="font-bold text-slate-700 mb-2" style={{fontSize:"16px"}}>📖 漸進過程</div>
              <p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>
                經過兩年的禱告與關係建立，湯姆問：「哪裏可以買到聖經啊？」秋末，他開了好幾百哩來教會。
                回家後打電話說：「我覺得我裏面不大一樣，好像在拼拼圖。」但他還沒準備好——
                <strong>他還在過程中，朝正確方向移動，但還沒準備簽訂合約</strong>。
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-5 border border-amber-200">
            <p className="text-amber-900 font-bold leading-relaxed" style={{fontSize:"18px"}}>
              💡 「人生沒有任何事比朋友相交、彼此相愛、領對方一路走向基督更刺激。沒有任何事。」
            </p>
            <p className="text-amber-700 mt-2" style={{fontSize:"16px"}}>
              那些談話的內容永遠不可預測，充滿風險，讓人振奮，相互為師，並且高潮迭起。
              所有真正跟隨基督的人內心深處都渴望成為有感染力的基督徒，但<strong>除非我們先提升動機，否則不會真正採取行動</strong>。
            </p>
          </div>
        </div>
      </div>

      {/* 科學界的功課 */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-blue-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}>
          <Globe className="w-6 h-6 text-blue-600" />
          科學界教導我們的功課：人本法則
          <span className="text-slate-400 bg-slate-100 px-2 py-1 rounded-md font-normal" style={{fontSize:"13px"}}>P10-11</span>
        </h3>
        <p className="text-slate-600 mb-4 leading-relaxed" style={{fontSize:"17px"}}>
          人本法則（Anthropic Principle）的意思是：我們審視周圍世界時，總覺得宇宙好像專為維持和供養人的生命而設計的。
          這個觀念甚至不是源自基督徒學者，但許多證據都強烈顯示宇宙明顯是經過設計的，讓所有專家都無法否認。以下是一些鐵的事實：
        </p>
        <div className="space-y-3 mb-4">
          {scienceFacts.map((item, i) => (
            <div key={i} className="bg-blue-50 rounded-xl p-4 border border-blue-100 flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-200 text-blue-800 flex items-center justify-center font-bold" style={{fontSize:"14px"}}>{i+1}</span>
              <div>
                <span className="font-bold text-blue-800" style={{fontSize:"16px"}}>{item.fact}：</span>
                <span className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>{item.detail}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl p-5 border border-blue-200">
          <p className="text-blue-900 font-bold" style={{fontSize:"18px"}}>
            ✨ 結論：一定有某一位下了很大工夫把事情安排得如此巧妙，好讓你我可以在此享受人生。現代科學指向一個事實：<span className="text-blue-600">神一定很看重人！</span>
          </p>
        </div>
      </div>

      {/* 商業界的功課 */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-emerald-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}>
          <Users className="w-6 h-6 text-emerald-600" />
          商業界教導我們的功課：顧客革命
          <span className="text-slate-400 bg-slate-100 px-2 py-1 rounded-md font-normal" style={{fontSize:"13px"}}>P11-12</span>
        </h3>
        <div className="space-y-4">
          <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100" style={{fontSize:"17px"}}>
            <p className="text-slate-700 leading-relaxed mb-3">
              湯姆‧彼得斯在《亂中求勝》中稱之為「顧客革命」；肯恩‧布蘭查宣揚「倒金字塔」觀念。
              核心信息：<strong>一個企業如果想要長久成功，必須把注意力由自己身上拉開，把能量投在服務顧客上。</strong>
            </p>
            <p className="text-slate-700 leading-relaxed">
              想想看，多少次你在加油站、餐廳、銀行、麵包店要求基本服務時都非常挫折？
              這些組織的自然傾向是<strong>往內生長</strong>——員工在內部問題上焚燒自己的能量，
              這一切常發生在顧客站在結帳櫃台耐心等候服務的那一刻。
            </p>
          </div>
          <div className="bg-emerald-100 rounded-xl p-5 border border-emerald-200">
            <div className="font-bold text-emerald-800 mb-2" style={{fontSize:"17px"}}>🔄 教會的姊妹版問題</div>
            <p className="text-slate-700 leading-relaxed" style={{fontSize:"17px"}}>
              我們很容易過分糾纏在教會的內部問題、疑難和個人狀況，以致很難記得我們還留在這星球的主要理由其實是要去接觸「外面」的人。
              就如商業組織需要把焦點由自己身上挪開，同樣地，我們必須重新把眼光轉回神交付我們的目標：<strong>靈裏失落的人</strong>。
            </p>
          </div>
          <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl p-5 border border-emerald-200">
            <p className="text-emerald-900 font-bold" style={{fontSize:"18px"}}>
              ✨ 如果從科學界學得的功課是「神一定很看重人」，那麼從商業界學到的功課便是：<span className="text-emerald-600">我們最好也看重人。</span>
            </p>
            <p className="text-slate-600 mt-2" style={{fontSize:"16px"}}>
              我們只有在重視基督教社群外的人時才會真正感到充實，才能按著神對我們的心意發揮功能。但我們也得誠實面對：<strong>我們很不容易守住焦點；我們很容易忘了要看重靈裏困惑的人。</strong>
            </p>
          </div>
        </div>
      </div>

      {/* 危險警示：價值判斷的陷阱 */}
      <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-6 md:p-8 border border-red-100 shadow-sm">
        <h3 className="font-bold text-red-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}>
          <AlertTriangle className="w-6 h-6 text-red-600" />
          危險警示：價值判斷的陷阱
          <span className="text-slate-400 bg-slate-100 px-2 py-1 rounded-md font-normal" style={{fontSize:"13px"}}>P13</span>
        </h3>
        <p className="text-slate-700 mb-4 leading-relaxed" style={{fontSize:"17px"}}>
          作者遇見一位舊識，對方說：「我復活節不去教會，因為我受不了『只來一回的人』。那些每年只來一次的人，盛裝出席，把教會裏的事全都攪亂，特別是停車場。」
          作者心想：這人不但認為那些人對他不重要，恐怕他也深信他們對神也不重要。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {dangerSigns.map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-red-200">
              <div className="font-bold text-red-700 mb-2 flex items-center gap-2" style={{fontSize:"16px"}}>
                <AlertTriangle className="w-4 h-4" />
                {item.sign}
              </div>
              <p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-red-100 rounded-xl p-5 border border-red-200 mt-4">
          <p className="text-red-800 font-bold" style={{fontSize:"17px"}}>
            ⚠️ 一旦我們讓這種思維進來，就不知不覺卻很有效地除掉任何想傳播神恩惠福音的盼望。畢竟，如果這些人對神而言沒甚麼大不了，那我們幹嘛要費心接觸他們呢？
          </p>
        </div>
      </div>

      {/* 耶穌的三個比喻 */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-violet-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}>
          <BookOpen className="w-6 h-6 text-violet-600" />
          耶穌的三個比喻（路加福音15章）
          <span className="text-slate-400 bg-slate-100 px-2 py-1 rounded-md font-normal" style={{fontSize:"13px"}}>P14-17</span>
        </h3>
        <div className="bg-violet-50 rounded-xl p-5 border border-violet-100 mb-4" style={{fontSize:"17px"}}>
          <p className="text-slate-700 leading-relaxed mb-2">
            <strong>背景</strong>：耶穌在一個都會區教導時，被一大群不敬虔的人包圍。宗教領袖在一邊竊竊私語，不滿耶穌跟「那種人」混在一起。
          </p>
          <p className="text-violet-700 leading-relaxed font-bold">
            這是唯一有記載的一次，耶穌一口氣連講三個比喻。祂想：「這回我要一舉澄清這一切。我要像連珠砲般地講上三個故事——不是一個，不是兩個——好確保人人都了解誰是神真正看重的。」
          </p>
        </div>
        <div className="space-y-4">
          {parables.map((item, i) => (
            <div key={i} className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden cursor-pointer hover:bg-slate-100 transition-colors" onClick={() => toggleParable(i)}>
              <div className="p-5 flex items-center justify-between">
                <h4 className="font-bold text-slate-800" style={{fontSize:"20px"}}>{item.title}</h4>
                {openParable === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>
                {openParable === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <div className="px-5 pb-5 space-y-3">
                      <div className="bg-white rounded-xl p-4 border border-slate-100">
                        <div className="font-bold text-slate-700 mb-2" style={{fontSize:"16px"}}>📖 故事內容：</div>
                        <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>{item.story}</p>
                      </div>
                      <div className="bg-violet-50 rounded-xl p-4 border border-violet-200">
                        <div className="font-bold text-violet-700 mb-2" style={{fontSize:"16px"}}>🔍 重要意義：</div>
                        <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>{item.significance}</p>
                      </div>
                      <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                        <div className="font-bold text-amber-700 mb-2" style={{fontSize:"16px"}}>💡 生活應用：</div>
                        <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>{item.application}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-violet-100 to-purple-100 rounded-xl p-5 border border-violet-200 mt-4">
          <div className="font-bold text-violet-800 mb-2" style={{fontSize:"18px"}}>📌 三個故事的共同點：</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-white rounded-lg p-3 text-center border border-violet-100">
              <div className="font-bold text-violet-700" style={{fontSize:"16px"}}>① 失去的很重要</div>
              <p className="text-slate-500 mt-1" style={{fontSize:"15px"}}>不見的東西攸關生計、生存、親情</p>
            </div>
            <div className="bg-white rounded-lg p-3 text-center border border-violet-100">
              <div className="font-bold text-violet-700" style={{fontSize:"16px"}}>② 值得全力搜尋</div>
              <p className="text-slate-500 mt-1" style={{fontSize:"15px"}}>牧人出去找、女人翻遍全屋、父親引頸企盼</p>
            </div>
            <div className="bg-white rounded-lg p-3 text-center border border-violet-100">
              <div className="font-bold text-violet-700" style={{fontSize:"16px"}}>③ 找回後極其歡喜</div>
              <p className="text-slate-500 mt-1" style={{fontSize:"15px"}}>每次都開慶祝會——天國也是如此</p>
            </div>
          </div>
        </div>
      </div>

      {/* 十架上的對話 */}
      <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-6 md:p-8 border border-rose-100 shadow-sm">
        <h3 className="font-bold text-rose-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}>
          <Heart className="w-6 h-6 text-rose-600" />
          十架上的對話
          <span className="text-slate-400 bg-slate-100 px-2 py-1 rounded-md font-normal" style={{fontSize:"13px"}}>P17-18</span>
        </h3>
        <div className="space-y-4" style={{fontSize:"17px"}}>
          <p className="text-slate-700 leading-relaxed">
            耶穌被釘在兩個盜賊中間。這些人是很嚴重的罪犯——猶太人不會為芝麻綠豆的錯把人釘上十字架。他們對社會造成嚴重的破壞，社會不再接受他們。
          </p>
          <div className="bg-white rounded-xl p-5 border border-rose-200">
            <p className="text-slate-700 leading-relaxed mb-3">
              其中一人攻擊耶穌。但<strong>另一人卻看懂了眼前發生的事</strong>。他了解自己過不了多久就要面對永世，痛苦地覺悟到自己過的是怎樣的一生。
            </p>
            <p className="text-slate-700 leading-relaxed mb-3">
              他對前面那人說：「住嘴！你難道還不明白眼前發生的事嗎？」然後轉向耶穌說：「我們現在的下場是罪有應得。但是祢並沒有做甚麼錯事。所以請原諒我這麼問：<strong>像我這樣犯了許多罪的人，還有人看重我嗎？</strong>」
            </p>
            <div className="bg-rose-50 rounded-lg p-4 border border-rose-300">
              <p className="text-rose-800 font-bold leading-relaxed" style={{fontSize:"18px"}}>
                耶穌立刻毫不猶豫地保證：「你遠比你所能想像的重要！因著你的信心和溫柔悔改的靈，今天稍後你就要跟我一起在天堂了，我們要永遠一起！」
              </p>
            </div>
          </div>
          <p className="text-rose-700 font-bold">
            耶穌的憐憫不是我們可以理解的。面對事實吧！你我的愛根本不是這樣。
          </p>
        </div>
      </div>

      {/* 健身中心的故事 */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-teal-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}>
          <HandHeart className="w-6 h-6 text-teal-600" />
          真實見證：健身中心的印度朋友
          <span className="text-slate-400 bg-slate-100 px-2 py-1 rounded-md font-normal" style={{fontSize:"13px"}}>P18-20</span>
        </h3>
        <p className="text-slate-600 mb-4" style={{fontSize:"17px"}}>
          作者在讀路加福音十五章時，努力想了解「神看重所有人」在實際生活中是甚麼意思。然後，神給了他一個考驗：
        </p>
        <div className="space-y-3">
          {gymStory.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="flex items-start gap-4 bg-teal-50 rounded-xl p-4 border border-teal-100">
              <div className="flex-shrink-0 w-10 h-10 bg-teal-200 rounded-full flex items-center justify-center font-bold text-teal-800" style={{fontSize:"14px"}}>{i+1}</div>
              <div>
                <div className="font-bold text-teal-800 mb-1" style={{fontSize:"16px"}}>{item.phase}</div>
                <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-teal-100 to-emerald-100 rounded-xl p-5 border border-teal-200 mt-4">
          <p className="text-teal-900 font-bold leading-relaxed" style={{fontSize:"18px"}}>
            💡 「當我領悟到神有多關心這個人，就使得我可以更關心他。」——這就是看重人的起點。
          </p>
        </div>
      </div>

      {/* 寶貴的一課：撕掉名單 */}
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-6 md:p-8 border border-orange-100 shadow-sm">
        <h3 className="font-bold text-orange-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}>
          <Eye className="w-6 h-6 text-orange-600" />
          寶貴的一課：撕掉你的「不重要名單」
          <span className="text-slate-400 bg-slate-100 px-2 py-1 rounded-md font-normal" style={{fontSize:"13px"}}>P20-21</span>
        </h3>
        <div className="space-y-4" style={{fontSize:"17px"}}>
          <p className="text-slate-700 leading-relaxed">
            作者坦承雖然是基督徒、又是牧師，卻仍常做出跟法利賽人一樣的事——隨身帶著一張小小的「不太重要的人」的名單：
          </p>
          <div className="bg-white rounded-xl p-5 border border-orange-200">
            <p className="text-slate-600 leading-relaxed italic">
              「加油站服務員、餐廳女服務生、結帳員、在我前面把車開得慢慢的傢伙、家裏的狗老是亂叫的鄰居、
              跟我同機飛往洛杉磯坐在我旁邊那個喝得醉醺醺的討厭傢伙、跟我看事情方式總是不同的那個同事。
              這些人都不太重要，對不對？」
            </p>
          </div>
          <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl p-5 border border-orange-300">
            <p className="text-orange-900 font-bold leading-relaxed" style={{fontSize:"18px"}}>
              「事實上他們很重要。他們對神很重要。不管他們屬於甚麼種族、拿多少薪水、性別為何、教育水準怎樣、貼有甚麼宗教標籤或沒有，祂都看重他們，因此我最好也看重他們——真心看重。」
            </p>
          </div>
          <p className="text-slate-700 leading-relaxed">
            <strong>等你開始以這種態度看待別人，你待人的方式就會產生革命性的改變。</strong>
            你眼目鎖定過的人之中，沒有一個是神不看重的。當這個事實抓住你生命的核心，你就會不一樣——
            你會活在充滿對神長闊高深之愛的敬畏中，你待人的方式會大不相同。
          </p>
        </div>
      </div>

      {/* 值得花費力氣 + 使命 */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-indigo-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}>
          <Target className="w-6 h-6 text-indigo-600" />
          值得花費力氣：我們在一場使命中
          <span className="text-slate-400 bg-slate-100 px-2 py-1 rounded-md font-normal" style={{fontSize:"13px"}}>P21-22</span>
        </h3>
        <div className="space-y-4" style={{fontSize:"17px"}}>
          <p className="text-slate-700 leading-relaxed">
            神看重人到甚麼程度？<strong>重要到值得展開全面搜尋。</strong>羊走失了，牧羊人就出去找，直到找著為止。
            錢弄丟了，女人就四處找，直到終於找到為止。父親的眼睛始終望向地平線，等候兒子回家。
          </p>
          <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-200">
            <p className="text-slate-700 leading-relaxed mb-3">
              每個真基督徒的內心深處都能意識到，我們活在這行星上是為了一個更遠大的目的——
              這個目的遠超過擁有一個事業、支付日用帳單、愛我們的家人。就連上教會、敬拜神，有時也會讓我們有種少了甚麼的感覺。
            </p>
            <p className="text-indigo-800 font-bold leading-relaxed" style={{fontSize:"18px"}}>
              神要我們成為有感染力的基督徒——作祂的代言人，抓住祂的愛，再急切又有感染力地提供給所有願意考慮接受的人。
              這就是祂的計畫：把神的恩典和真理一個一個傳給人，直到全世界都感染上這種會改變人生命的「傳染病」。
            </p>
          </div>
          <p className="text-slate-600 leading-relaxed">
            耶穌說祂來到世間是為了「尋找、拯救失喪的人」。祂在離世前說：「父怎樣差遣了我，我也照樣差遣你們。」
          </p>
        </div>
      </div>

      {/* 天上的慶祝會 */}
      <div className="bg-gradient-to-br from-violet-50 to-indigo-50 rounded-3xl p-6 md:p-8 border border-violet-100 shadow-sm">
        <h3 className="font-bold text-violet-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}>
          <Sparkles className="w-6 h-6 text-violet-600" />
          天上的慶祝會
          <span className="text-slate-400 bg-slate-100 px-2 py-1 rounded-md font-normal" style={{fontSize:"13px"}}>P23-24</span>
        </h3>
        <div className="space-y-4" style={{fontSize:"17px"}}>
          <div className="bg-violet-100 rounded-xl p-5 border border-violet-200">
            <p className="text-violet-800 font-bold" style={{fontSize:"18px"}}>
              📖 路加福音十五章10節：「我告訴你們，一個罪人悔改，在神的使者面前也是這樣為他歡喜。」
            </p>
          </div>
          <p className="text-slate-700 leading-relaxed">
            作者回憶自己十七歲時驕傲、叛逆、任性，自以為能靠自己的敬虔打動神。但透過聖經和關心他的基督徒朋友，
            他開始明白自己永遠不可能累積足夠的義打動一位聖潔的神——他需要承認自己的罪，信靠基督為救主。
          </p>
          <p className="text-slate-700 leading-relaxed">
            他在威斯康辛州南部的一個基督徒營會中，在神面前崩潰、悔改。那一刻，全天國爆發出壯麗的宇宙級慶賀——
            <strong>天國開了一場極盛大的慶祝會，旗幟上寫著受賀主角的大名</strong>。
          </p>
          <div className="bg-white rounded-xl p-5 border border-violet-200">
            <p className="text-violet-800 leading-relaxed">
              如果你是真正跟隨基督的人，當你承認自己的罪、信靠祂的時候，也發生了同樣的事。
              不管那是上週還是四十年前，那一刻全天國爆發出極大的慶祝，旗幟上寫著你的大名。
            </p>
          </div>
          <div className="bg-gradient-to-r from-violet-100 to-purple-100 rounded-xl p-5 border border-violet-300">
            <p className="text-violet-900 font-bold leading-relaxed" style={{fontSize:"18px"}}>
              🎉 「如果你以為你現在懂了甚麼叫作歡欣鼓舞，等你作過朋友歸向基督之過程的主要推手時再說吧！
              當你參與在天國為他開的慶祝會時，你會喜樂得幾乎要爆炸——特別是當你很清楚你真的是使他們名字登上那面旗幟的推手！」
            </p>
          </div>
        </div>
      </div>

      {/* 本章總結 */}
      <div className="bg-gradient-to-br from-teal-50 to-slate-50 border border-teal-100 rounded-3xl p-6 md:p-8">
        <h3 className="font-bold text-teal-700 mb-4 flex items-center gap-2" style={{fontSize:"22px"}}>
          📝 第一章總結：神看重人
        </h3>
        <p className="text-slate-500 mb-5 leading-relaxed" style={{fontSize:"17px"}}>
          本章從多個角度建立一個核心信念：每個人在神眼中都極其寶貴。這個信念是成為有感染力的基督徒的根基——
          如果我們不相信神看重每一個人，就不會有動力去接觸他們。
        </p>
        <div className="space-y-3">
          <div className="bg-blue-50 border-blue-200 border rounded-xl p-4">
            <div className="font-bold text-blue-700 mb-1.5" style={{fontSize:"18px"}}>🔬 科學界：人本法則 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>P10-11</span></div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>宇宙的一切都精心設計來維持人的生命——星球距離、碳氧比例、地軸角度、地球位置、宇宙擴張率，任何一項稍有偏差，生命就不可能存在。結論：神一定很看重人。</p>
          </div>
          <div className="bg-emerald-50 border-emerald-200 border rounded-xl p-4">
            <div className="font-bold text-emerald-700 mb-1.5" style={{fontSize:"18px"}}>💼 商業界：顧客革命 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>P11-12</span></div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>企業必須把焦點從自身挪到顧客身上。教會也有同樣的問題：容易往內生長，忘了接觸「外面」的人。我們最好也看重人。</p>
          </div>
          <div className="bg-red-50 border-red-200 border rounded-xl p-4">
            <div className="font-bold text-red-700 mb-1.5" style={{fontSize:"18px"}}>⚠️ 危險警示：價值判斷陷阱 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>P13</span></div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>我們很容易評斷誰可以為神所用、誰不能，把神的關心名單縮減到跟我們很像的一小撮人。這種思維會有效地除掉傳福音的盼望。</p>
          </div>
          <div className="bg-violet-50 border-violet-200 border rounded-xl p-4">
            <div className="font-bold text-violet-700 mb-1.5" style={{fontSize:"18px"}}>📖 耶穌的三個比喻 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>P14-17</span></div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>失羊、失錢、浪子——唯一有記載耶穌一口氣連講三個比喻的場合。共同點：失去的很重要、值得全力搜尋、找回後天國歡喜慶祝。</p>
          </div>
          <div className="bg-rose-50 border-rose-200 border rounded-xl p-4">
            <div className="font-bold text-rose-700 mb-1.5" style={{fontSize:"18px"}}>✝️ 十架上的對話 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>P17-18</span></div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>即使是被社會完全拋棄的重刑犯，耶穌也毫不猶豫地肯定他的價值：「你遠比你所能想像的重要！」神的憐憫超越我們的理解。</p>
          </div>
          <div className="bg-teal-50 border-teal-200 border rounded-xl p-4">
            <div className="font-bold text-teal-700 mb-1.5" style={{fontSize:"18px"}}>🤝 健身中心的見證 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>P18-20</span></div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>一位被眾人冷落的印度籍回教徒，在妻子離開時向作者傾訴。聖靈引導作者擁抱他——雖然內心掙扎，但順服後帶來深刻的改變：「當我領悟到神有多關心這個人，就使得我可以更關心他。」</p>
          </div>
          <div className="bg-amber-50 border-amber-200 border rounded-xl p-4">
            <div className="font-bold text-amber-700 mb-1.5" style={{fontSize:"18px"}}>💡 核心行動 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>P20-24</span></div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>撕掉心中的「不重要名單」，以神的眼光看待每一個人。我們在一場使命中——神要我們成為有感染力的基督徒，作祂的代言人。每一個罪人悔改，天國都會為他開慶祝會！</p>
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
