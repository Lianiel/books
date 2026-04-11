import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, BookOpen, ChevronDown, ChevronUp, Target, Brain, Lightbulb, MessageCircle, AlertTriangle, Sparkles, Eye, Shield, Users, Search, MessageSquareQuote, Layers, Flame } from 'lucide-react';

export default function Chapter1() {
  const [openSymptom, setOpenSymptom] = useState<number | null>(null);
  const [openTheology, setOpenTheology] = useState<number | null>(null);
  const [openChallenge, setOpenChallenge] = useState<number | null>(null);
  const [openTaiwan, setOpenTaiwan] = useState<number | null>(null);

  const symptoms = [
    {
      num: 1, title: "利用神來逃避神", icon: "🎭",
      summary: "做神的工是為了滿足自己，不是要滿足神。以神之名做些祂沒有要我做的事。",
      details: "通常只要出現下列狀況，就知道有問題了：求神達成我的心願，不是求祂幫助我順服祂的旨意；故意在重要人士面前表現「基督徒的行為」；特別關注某些神學觀點，是出於恐懼心理和情感上未解的結；利用聖經經文合理化家庭關係、文化價值裡罪惡的部分；開口閉口都是神，以免探照燈照到自己殘破的內在。",
      page: "p.022-024"
    },
    {
      num: 2, title: "漠視憤怒、哀傷和恐懼", icon: "😶",
      summary: "許多基督徒認為憤怒、哀傷和恐懼都是罪，用虛假的自信來驅趕那些感覺。",
      details: "我們引用經文自我砥礪、用經文禱告、背經文，設法不要被那些感覺淹沒！但把這些感覺切斷了，要如何聆聽神的聲音？人之所以為人，就是因為有各種感覺。否認感覺的存在或壓抑感覺，無異扭曲我們身為神的形像承載者的意義。若因此無法表達情緒，也會連帶削弱我們愛神、愛人、愛己的能力。",
      page: "p.024-026"
    },
    {
      num: 3, title: "治死的對象錯誤", icon: "✂️",
      summary: "把健康的慾望和生活樂趣也一起「治死」，以為越受苦神就越愛你。",
      details: "所謂的捨己，是要向身上的罪死。神並沒有要我們向「好」的部分死。友誼、喜樂、藝術、音樂、美麗、休閒、歡笑和大自然，這些是神放在我們裡面的慾望，是要我們去開發和享受的。愛任紐說：「一個人活出完整的自己，就能展現神的榮光。」成聖的重要部分，就是讓聖靈拆除錯誤結構，讓真實的我顯現出來。",
      page: "p.026-027"
    },
    {
      num: 4, title: "否認過去對現在的影響", icon: "🔗",
      summary: "以為信主後「舊事已過」就不用再面對過去，但原生家庭的影響如影隨形。",
      details: "信主後，我們領受新的身分、新的未來。但這並不表示過去發生的事不會繼續影響我們。在基督裡成長，不代表在奔向恩典時不必回到過去。成聖的過程會迫使我們面對過去，除掉那些不健康的有害模式，以免無法照神的設計去愛人、愛己。",
      page: "p.027-029"
    },
    {
      num: 5, title: "把生活劃分成「世俗」和「神聖」兩種", icon: "⚖️",
      summary: "主日敬拜神、週一到週六拋到腦後。信仰和日常生活完全脫節。",
      details: "法蘭克在教會稱頌神的慈愛，開車回家的路上咒罵其他駕駛。肯恩靈修親近神後一整天把神拋到九霄雲外。統計顯示，福音派基督徒的離婚率、家暴率、對金錢的態度與非基督徒相差無幾。安琪拉問：「為什麼有那麼多基督徒是爛人？」",
      page: "p.029-031"
    },
    {
      num: 6, title: "以為神做工取代與神同工", icon: "🏃",
      summary: "不停地服事卻失去內在養分，把自我價值建立在工作表現上。",
      details: "如果沒有親近神讓內在獲得養分，為神所做的遲早會被自我、權力、企求認可所玷汙。我們變成「為事工而存在」（human doings），而不是「為存在而存在」（human beings）。沒有的東西就無法給出去。神的同在有多少，就為神做多少工。",
      page: "p.031-032"
    },
    {
      num: 7, title: "用屬靈的藉口逃避衝突", icon: "🕊️",
      summary: "掩蓋不同的聲音，維持表面和平，以為這就是跟隨主。",
      details: "我們學會說一套做一套、輕易做出無法兌現的承諾、委屈自己避免別人不高興、逃避退縮斷絕來往。但從耶穌身上可以看到，健康的基督徒不會避免衝突。祂經常和宗教領袖、群眾、門徒、自家人發生衝突。祂渴望帶來真正的和平，所以會刻意打破虛假的和平。",
      page: "p.033-034"
    },
    {
      num: 8, title: "掩蓋生命的殘破、軟弱和失敗", icon: "🎪",
      summary: "為了維持剛強的形象承受極大壓力，忘記這世界沒有完全人。",
      details: "大衛將他與拔示巴的失敗鉅細靡遺記錄在歷史書，還寫成詩歌。他曉得「神所要的祭就是憂傷的靈」（詩五十一17）。保羅為他身上的刺感謝神，「基督的能力是在人的軟弱上顯得完全」。聖經人物摩西殺人、彼得勸耶穌別上十架、以利亞筋疲力竭——告訴我們每個人都軟弱，需要神也需要人。",
      page: "p.034-035"
    },
    {
      num: 9, title: "無法設立界線", icon: "🚧",
      summary: "認為基督徒應該來者不拒，否則就是自私。最後把自己累垮。",
      details: "保羅說「靠著那加給我力量的，凡事都能做」，但在此之前他是在勉勵我們要知足。耶穌沒有醫治所遇到的每一個病人，沒有叫每一個死人復活。巴默爾說：「照顧自己從來就不是自私，而是妥善管理我手上唯一的禮物——也是神安排我來世上要送給人的禮物。」",
      page: "p.036-037"
    },
    {
      num: 10, title: "論斷他人的靈命進程", icon: "⚖️",
      summary: "把自己的與眾不同轉化為道德優越感，批評別人、把人分門別類。",
      details: "我們批評別人的音樂、穿著、看的電影。我們不允許別人在神面前作自己、照他的節奏過日子。最後因為無法把他們變得和我們一樣，就冷漠以對。但就像耶穌說的，若不先拿走自己眼中的樑木，就看不見也無法幫助別人。",
      page: "p.037-040"
    }
  ];

  const icebergLevels = [
    { level: "水面上（10%）", items: ["行為表現", "別人看得見的改變", "規律上教會", "加入群體", "改掉明顯的壞習慣", "開始禱告"], color: "bg-sky-100 border-sky-300" },
    { level: "水面下（90%）", items: ["未處理的憤怒和哀傷", "原生家庭的傷痛模式", "對安全感和被愛的深層渴望", "隱藏的羞愧和恐懼", "扭曲的神觀和自我形象", "不健康的人際關係模式"], color: "bg-indigo-100 border-indigo-300" }
  ];

  const theologyTopics = [
    {
      title: "情感與靈性：一體兩面的聖經根據",
      content: "聖經從未將人的情感與靈性切割開來。詩篇中有三分之二是哀歌（lament），表達憤怒、悲傷、恐懼和困惑。耶穌在客西馬尼園「極其難過，幾乎要死」（太26:38），在十字架上引用詩篇22篇「我的神！我的神！為甚麼離棄我？」神照祂的形像造人，這個形像包含理性、意志，也包含情感。否認感覺就是否認我們身為神形像承載者的一部分。",
      scriptures: ["創世記1:27「神就照著自己的形像造人。」", "詩篇42:5「我的心哪，你為何憂悶？為何在我裡面煩躁？」", "馬太福音26:38「我心裡甚是憂傷，幾乎要死。」"],
      reflection: "如果連耶穌都會悲傷、憤怒和恐懼，我們為什麼認為這些感覺是「不屬靈」的？"
    },
    {
      title: "「舊事已過」的正確理解",
      content: "哥林多後書5:17「若有人在基督裡，他就是新造的人，舊事已過，都變成新的了」常被誤用來否認過去的影響。保羅的重點是我們在基督裡有了新的身分和地位（稱義），而非過去的創傷和模式會自動消失。成聖是一個過程（腓3:12-14），需要聖靈持續的工作。保羅自己也承認「我所願意的善，我反不做；我所不願意的惡，我倒去做」（羅7:19），顯示即使使徒也在與舊有模式搏鬥。",
      scriptures: ["腓立比書3:12「這不是說我已經得著了，已經完全了。」", "羅馬書7:19「我所願意的善，我反不做。」", "加拉太書5:16-17「情慾和聖靈相爭，聖靈和情慾相爭。」"],
      reflection: "你是否曾用「舊事已過」來迴避面對過去的傷痛？成聖是一次完成的事件，還是持續進行的過程？"
    },
    {
      title: "門徒訓練的整全觀：不只是頭腦的知識",
      content: "傳統門訓往往側重知識傳遞（聖經知識、神學觀念）和行為改變（戒除壞習慣、建立屬靈操練），卻忽略了人的情感維度。但耶穌的門訓方法是全人的——祂與門徒一起生活、一起經歷風浪和衝突、讓他們面對自己的恐懼和驕傲。耶穌不只教導門徒「應該做什麼」，更帶領他們經歷「成為什麼樣的人」。神按著祂的形像造人，這個形像包含身體、靈性、情感、智力和人際五個層面（p.020），缺一不可。",
      scriptures: ["馬可福音3:14「祂就設立十二個人，要他們常與自己同在。」", "約翰福音13:34-35「你們要彼此相愛；我怎樣愛你們，你們也要怎樣相愛。」"],
      reflection: "你所經歷的門徒訓練，是否有觸碰到你的情感世界？如果有人問你「你好嗎？」，你是否能給出比「感謝主，很好」更真實的回答？"
    }
  ];

  const taiwanExamples = [
    {
      title: "🏠 華人家庭中的「報喜不報憂」文化",
      scenario: "在華人文化中，「家醜不可外揚」是根深蒂固的觀念。許多基督徒即使在小組中也不敢分享真實的掙扎——婚姻的張力、教養的無力、工作的壓力、信仰的懷疑——因為怕被論斷、怕丟臉、怕別人覺得自己靈命不好。",
      challenge: "下次小組聚會時，嘗試分享一個你真實的掙扎（不必是最深層的），觀察別人的反應。真實的分享往往會帶動其他人也願意敞開。",
      insight: "作者在書中描述自己如何在約翰和蘇珊面前假裝一切都好，結果女兒差點溺水。華人教會中類似的「假裝」無處不在，而我們的「女兒」——真實的關係和靈命——也正在「溺水」。"
    },
    {
      title: "⛪ 教會中的「超級基督徒」形象",
      scenario: "在某些教會文化中，服事越多、禱告越長、聚會越勤，就被視為越屬靈。牧師和領袖尤其被期待要「剛強」，不能表現出軟弱。結果是很多服事者疲於奔命卻不敢喊累，情感問題累積到爆發——憂鬱、倦怠、甚至離開教會。",
      challenge: "如果你在教會有服事，這週練習對一件事說「不」，不是因為懶，而是因為承認自己的有限。觀察自己說「不」時的內心感受。",
      insight: "作者把「以為神做工取代與神同工」列為十大症狀之一。在台灣教會中，這個問題尤其嚴重——我們常把「很忙」等同於「很屬靈」。"
    },
    {
      title: "🗣️ 華人教會中的衝突迴避",
      scenario: "華人文化強調「和氣生財」、「以和為貴」，在教會中更是如此。許多弟兄姊妹即使對某件事有強烈不同意見，也會選擇沉默或私下抱怨，而不是正面溝通。結果是表面和諧，暗地裡卻充滿張力和不滿。",
      challenge: "找一個你一直想說但不敢說的意見（不必是最敏感的話題），用溫和但誠實的方式表達出來。可以用「我覺得……」或「我想分享一個不同的觀點……」開頭。",
      insight: "耶穌不斷打破虛假的和平來帶來真正的和平。在華人教會中，我們需要學習「用愛心說誠實話」（弗4:15），而不是把沉默當作和睦。"
    }
  ];

  const weeklyChallenge = [
    {
      week: "第一週", title: "情感日記操練",
      mission: "每天花10分鐘安靜，用日記記錄你當天的情感狀態。不加任何「屬靈包裝」，不評判自己的感覺是對是錯。只是如實記錄：「今天我覺得……因為……」。特別注意那些你通常會壓抑的感覺。",
      scripture: "詩篇139:23-24「神啊，求你鑒察我，知道我的心思；試煉我，知道我的意念。」",
      journalPrompt: "記錄：今天最強烈的情緒是什麼？我通常如何處理這種情緒？我是否允許自己去「感受」這個感覺？"
    },
    {
      week: "第二週", title: "冰山探索",
      mission: "畫一座冰山，水面上寫下別人看得見的你（行為、形象、角色），水面下寫下隱藏的你（恐懼、渴望、傷痛、未說出口的期待）。帶著這幅畫到神面前禱告。",
      scripture: "耶利米書17:9-10「人心比萬物都詭詐……我——耶和華是鑒察人心、試驗人肺腑的。」",
      journalPrompt: "水面下最讓你驚訝的發現是什麼？你願意讓耶穌觸碰冰山的哪個部分？"
    },
    {
      week: "第三週", title: "十大症狀自我檢測",
      mission: "重新閱讀十大症狀，為每一項打分數（1-5分，5分表示「非常符合我」）。選擇得分最高的兩項，思考它們在你生活中的具體表現。找一位信任的朋友分享你的發現。",
      scripture: "詩篇51:6「你所喜愛的是內裡誠實；你在我隱密處，必使我得智慧。」",
      journalPrompt: "得分最高的症狀是什麼？它最常出現在哪些情境？你覺得背後的根源可能是什麼？"
    },
    {
      week: "第四週", title: "真實的禱告",
      mission: "這週的禱告不要用「套路」。如果你生氣，就對神說你在生氣。如果你困惑，就對神說你很困惑。如果你覺得神很遙遠，就跟祂說。讀詩篇13篇或22篇作為禱告的範本。",
      scripture: "詩篇13:1-2「耶和華啊，你忘記我要到幾時呢？要到永遠嗎？你掩面不顧我要到幾時呢？」",
      journalPrompt: "當你在禱告中誠實表達「不好」的感覺時，你感受到什麼？神的同在是否有不同的質感？"
    }
  ];

  const groupDiscussion = [
    {
      category: "🧊 冰山的啟示",
      questions: [
        "如果你的生命是一座冰山，水面下隱藏著什麼是你最不想讓人看到的？你願意在小組中分享嗎？",
        "在你的信仰經驗中，哪些屬靈操練（禱告、查經、敬拜等）觸碰到了冰山的水面下？哪些沒有？",
        "作者說「心靈的底層卻動也不動，絲毫不受影響」——這句話引起你什麼共鳴？"
      ]
    },
    {
      category: "🎭 十大症狀的對照",
      questions: [
        "十大症狀中哪一個最像在描述你？可以分享一個具體的例子嗎？",
        "你是否曾經「利用神來逃避神」？回想一個你用「屬靈活動」來逃避面對內心問題的時刻。",
        "在我們的小組中，是否有「用屬靈的藉口逃避衝突」的現象？我們如何能更真實？"
      ]
    },
    {
      category: "🌱 邁向改變",
      questions: [
        "如果要為這一章選一句話作為你接下來一個月的座右銘，你會選哪句？",
        "你覺得什麼力量讓你一直停留在「情感不健康的靈性」中？是恐懼、習慣、還是缺乏榜樣？",
        "作者說「結合情感健康與默觀靈修，才能將耶穌改變的大能釋放出來」——你願意嘗試什麼新的操練？"
      ]
    }
  ];

  const reflections = [
    "我的屬靈生活是否有「冰山效應」——表面看起來不錯，但底層其實停滯不前？",
    "我在什麼情境下最容易「戴面具」？是在教會？在家？還是在職場？",
    "我是否把「很忙地服事神」當作迴避面對自己的藉口？",
    "如果耶穌今天坐在我面前，問我「你真的好嗎？」，我會怎麼回答？",
    "我的原生家庭用什麼方式處理憤怒、悲傷和恐懼？這些方式如何影響我現在的信仰生活？"
  ];

  const actions = [
    "本週找15分鐘寫「情感日記」：誠實記錄你的感受，不加任何屬靈濾鏡。",
    "選擇十大症狀中最觸動你的一項，找一位信任的朋友或導師分享。",
    "下次禱告時，嘗試對神說出你最真實的感覺——即使是憤怒、困惑或失望。",
    "觀察自己本週在哪些時候「為神做工」vs.「與神同工」，記錄差別。",
    "讀詩篇88篇（聖經中最黑暗的詩篇），思考：神是否允許我們在祂面前如此真實？"
  ];

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="space-y-8">

      {/* ========== 章節標題 ========== */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-800 rounded-3xl p-8 text-white shadow-xl">
        <div className="flex items-center gap-2 mb-2">
          <Layers className="w-5 h-5 text-indigo-300" />
          <span className="text-indigo-300 text-sm tracking-widest">第 1 章</span>
        </div>
        <h1 className="text-3xl font-bold mb-3">情感不健康的靈性問題</h1>
        <p className="text-indigo-200 text-lg mb-4">有些事會錯得離譜</p>
        <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
          <p className="text-slate-200 leading-relaxed" style={{fontSize:"17px"}}>
            基督徒的靈性，若缺少健康的情感，對自己、與神和與人的關係都會帶來危害。 <span className="text-indigo-300 text-sm ml-1">(p.007)</span>
          </p>
        </div>
      </div>

      {/* ========== 冰山模式 ========== */}
      <div className="bg-gradient-to-b from-sky-50 to-indigo-50 rounded-3xl p-6 md:p-8 border border-sky-200 shadow-sm">
        <h3 className="font-bold text-sky-800 mb-5 flex items-center gap-2" style={{fontSize:"24px"}}>
          <Layers className="w-6 h-6 text-sky-600" />
          🧊 冰山模式：什麼藏在表面下？
          <span className="ml-2 text-xs bg-sky-100 text-sky-600 px-2 py-1 rounded-full border border-sky-200">(p.016-017)</span>
        </h3>
        <p className="text-slate-600 mb-5 leading-relaxed" style={{fontSize:"17px"}}>
          多數人會承認自己就像一座冰山，水面下藏著層層的內心世界。這座冰山只有十分之一露在外面。隱藏在水面下的那十分之九，時下的靈命塑造和門徒訓練觸碰到的只有一點點，除非認真處理「情感健康的靈性」，否則還是無法被耶穌基督摸著。
        </p>
        <div className="space-y-4">
          {icebergLevels.map((level, i) => (
            <div key={i} className={`${level.color} border rounded-2xl p-5`}>
              <h4 className="font-bold text-slate-800 mb-3" style={{fontSize:"18px"}}>{level.level}</h4>
              <div className="flex flex-wrap gap-2">
                {level.items.map((item, j) => (
                  <span key={j} className="bg-white/70 px-3 py-1.5 rounded-lg text-sm text-slate-700 border border-slate-200">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-white/80 rounded-xl p-4 border border-indigo-200">
          <p className="text-indigo-800 font-bold" style={{fontSize:"17px"}}>
            💡 關鍵洞見：信主後，我們只看到自己和身邊的人靈命長進，卻對那些情感不成熟的明顯跡象視若無睹。那些門徒訓練有時反而變成一道阻力，讓人更難在情感上長大成熟——因為有了「進步」的感覺，就有了拒絕改變的屬靈藉口。
          </p>
        </div>
      </div>

      {/* ========== 十大症狀（可展開） ========== */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}>
          <AlertTriangle className="w-6 h-6 text-red-500" />
          情感不健康的靈性十大症狀
        </h3>
        <p className="text-slate-500 mb-5" style={{fontSize:"16px"}}>點擊展開每個症狀的詳細說明 <span className="text-slate-400">(p.022-040)</span></p>
        <div className="space-y-3">
          {symptoms.map((s, i) => (
            <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden hover:border-indigo-200 transition-colors">
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer bg-white hover:bg-slate-50 transition-colors" onClick={() => setOpenSymptom(openSymptom === i ? null : i)}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{s.icon}</span>
                  <div>
                    <span className="text-xs text-slate-400 font-mono">症狀 {s.num}</span>
                    <h4 className="font-bold text-slate-800" style={{fontSize:"18px"}}>{s.title}</h4>
                  </div>
                </div>
                {openSymptom === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>
                {openSymptom === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <div className="px-5 pb-5 space-y-3">
                      <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                        <p className="text-slate-700 font-medium" style={{fontSize:"16px"}}>{s.summary}</p>
                      </div>
                      <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                        <p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>{s.details}</p>
                        <p className="text-xs text-slate-400 mt-2">{s.page}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 神學深度探討 ========== */}
      <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-6 md:p-8 border border-violet-100 shadow-sm">
        <h3 className="font-bold text-violet-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}>
          <BookOpen className="w-6 h-6 text-violet-600" />
          神學深度探討
          <span className="ml-2 text-xs bg-violet-100 text-violet-500 px-2 py-1 rounded-full border border-violet-200">延伸學習</span>
        </h3>
        <p className="text-slate-500 mb-5" style={{fontSize:"15px"}}>點擊展開詳細內容與經文依據</p>
        <div className="space-y-3">
          {theologyTopics.map((topic, i) => (
            <div key={i} className="bg-white rounded-2xl border border-violet-100 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-violet-50 transition-colors" onClick={() => setOpenTheology(openTheology === i ? null : i)}>
                <h4 className="font-bold text-violet-800" style={{fontSize:"18px"}}>{topic.title}</h4>
                {openTheology === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>
                {openTheology === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <div className="px-5 pb-5 space-y-3">
                      <p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>{topic.content}</p>
                      <div className="bg-violet-50 rounded-xl p-4 border border-violet-100">
                        <div className="font-bold text-violet-700 mb-2" style={{fontSize:"15px"}}>📖 相關經文：</div>
                        {topic.scriptures.map((s, j) => (
                          <p key={j} className="text-slate-600 text-sm mb-1">{s}</p>
                        ))}
                      </div>
                      <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                        <div className="font-bold text-amber-700 mb-1" style={{fontSize:"15px"}}>💬 反思：</div>
                        <p className="text-slate-600" style={{fontSize:"16px"}}>{topic.reflection}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 在台灣的生活應用 ========== */}
      <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-6 md:p-8 border border-orange-100 shadow-sm">
        <h3 className="font-bold text-orange-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}>
          <Heart className="w-6 h-6 text-orange-600" />
          在我們的處境中
          <span className="ml-2 text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full border border-orange-200">生活應用</span>
        </h3>
        <p className="text-slate-500 mb-5" style={{fontSize:"15px"}}>點擊展開具體情境與挑戰</p>
        <div className="space-y-3">
          {taiwanExamples.map((ex, i) => (
            <div key={i} className="bg-white rounded-2xl border border-orange-100 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-orange-50 transition-colors" onClick={() => setOpenTaiwan(openTaiwan === i ? null : i)}>
                <h4 className="font-bold text-orange-800" style={{fontSize:"18px"}}>{ex.title}</h4>
                {openTaiwan === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>
                {openTaiwan === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <div className="px-5 pb-5 space-y-3">
                      <div className="bg-orange-50 rounded-xl p-4 border border-orange-100">
                        <div className="font-bold text-orange-700 mb-2" style={{fontSize:"15px"}}>📍 情境：</div>
                        <p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>{ex.scenario}</p>
                      </div>
                      <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                        <div className="font-bold text-green-700 mb-1" style={{fontSize:"15px"}}>🎯 本週挑戰：</div>
                        <p className="text-slate-600" style={{fontSize:"16px"}}>{ex.challenge}</p>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                        <div className="font-bold text-blue-700 mb-1" style={{fontSize:"15px"}}>💡 回扣本書：</div>
                        <p className="text-slate-600" style={{fontSize:"16px"}}>{ex.insight}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 四週挑戰 ========== */}
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-6 md:p-8 border border-indigo-100 shadow-sm">
        <h3 className="font-bold text-indigo-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}>
          <Target className="w-6 h-6 text-indigo-600" />
          四週操練挑戰
          <span className="ml-2 text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full border border-indigo-200">實踐計畫</span>
        </h3>
        <p className="text-slate-500 mb-5" style={{fontSize:"15px"}}>逐步探索你的情感世界，建立更真實的靈性</p>
        <div className="space-y-3">
          {weeklyChallenge.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-indigo-100 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-indigo-50 transition-colors" onClick={() => setOpenChallenge(openChallenge === i ? null : i)}>
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-700 font-bold text-sm">{item.week.slice(-2)}</span>
                  <h4 className="font-bold text-indigo-800" style={{fontSize:"18px"}}>{item.title}</h4>
                </div>
                {openChallenge === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>
                {openChallenge === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <div className="px-5 pb-5 space-y-3">
                      <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100">
                        <div className="font-bold text-indigo-700 mb-2" style={{fontSize:"15px"}}>🎯 任務說明：</div>
                        <p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>{item.mission}</p>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                        <div className="font-bold text-blue-700 mb-1" style={{fontSize:"15px"}}>📖 本週經文：</div>
                        <p className="text-slate-600" style={{fontSize:"16px"}}>{item.scripture}</p>
                      </div>
                      <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                        <div className="font-bold text-amber-700 mb-1" style={{fontSize:"15px"}}>📓 日記提示：</div>
                        <p className="text-slate-600" style={{fontSize:"16px"}}>{item.journalPrompt}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 小組討論問題 ========== */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-sm">
        <h3 className="font-bold text-emerald-800 mb-6 flex items-center gap-2" style={{fontSize:"24px"}}>
          <MessageSquareQuote className="w-6 h-6 text-emerald-600" />
          小組討論問題
          <span className="ml-3 bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full font-normal border border-emerald-200" style={{fontSize:"13px"}}>小組使用</span>
        </h3>
        <div className="space-y-6">
          {groupDiscussion.map((section, i) => (
            <div key={i}>
              <h4 className="font-bold text-emerald-700 mb-3 flex items-center gap-2" style={{fontSize:"20px"}}>
                <span className="w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-800 font-bold" style={{fontSize:"14px"}}>{i+1}</span>
                {section.category}
              </h4>
              <div className="space-y-2 ml-10">
                {section.questions.map((q, j) => (
                  <div key={j} className="bg-white rounded-xl p-4 border border-emerald-100">
                    <p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>{q}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 本章總結 ========== */}
      <div className="bg-gradient-to-br from-teal-50 to-slate-50 border border-teal-100 rounded-3xl p-6 md:p-8">
        <h3 className="font-bold text-teal-700 mb-4 flex items-center gap-2" style={{fontSize:"22px"}}>
          📝 第一章總結
        </h3>
        <p className="text-slate-500 mb-5 leading-relaxed" style={{fontSize:"17px"}}>
          本章揭示了一個根本問題：傳統門訓的屬靈操練有時反而變成一道阻力，讓人更難在情感上長大成熟。
        </p>
        <div className="space-y-3">
          <div className="bg-indigo-50 border-indigo-200 border rounded-xl p-4">
            <div className="font-bold text-indigo-700 mb-1.5" style={{fontSize:"17px"}}>🧊 冰山的警示 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.016-017</span></div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>我們的生命就像一座冰山，水面下的十分之九——包括未處理的傷痛、扭曲的自我形象和不健康的關係模式——是傳統門訓幾乎不曾觸碰的領域。</p>
          </div>
          <div className="bg-red-50 border-red-200 border rounded-xl p-4">
            <div className="font-bold text-red-700 mb-1.5" style={{fontSize:"17px"}}>⚠️ 十大危險信號 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.022-040</span></div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>從利用神逃避神、漠視感覺、治死錯誤的對象、否認過去、世俗神聖二分法，到以做工取代同工、逃避衝突、掩蓋軟弱、無法設界線、論斷他人——每一個都是情感不健康靈性的明確症狀。</p>
          </div>
          <div className="bg-emerald-50 border-emerald-200 border rounded-xl p-4">
            <div className="font-bold text-emerald-700 mb-1.5" style={{fontSize:"17px"}}>🌿 革命性的解藥 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.039-040</span></div>
            <p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>結合情感健康與默觀靈修，才能將耶穌改變的大能釋放出來。第一步：認識自己。認識自己，才能認識神。</p>
          </div>
        </div>
      </div>

      {/* ========== 反思與行動 ========== */}
      <div className="bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-800 shadow-lg text-white">
        <h3 className="font-bold text-orange-300 mb-6 flex items-center" style={{fontSize:"27px"}}>
          <Brain className="w-7 h-7 mr-3" />
          深度反思與行動指南
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="font-bold text-orange-200 mb-4 flex items-center" style={{fontSize:"22px"}}>
              <Brain className="w-5 h-5 mr-2 text-orange-400" /> 反思問題
            </h4>
            <ul className="space-y-4 text-slate-300">
              {reflections.map((r, i) => (
                <li key={i} className="flex items-start" style={{fontSize:"16px"}}>
                  <span className="text-orange-400 mr-2 font-bold">{i+1}.</span> {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="font-bold text-emerald-300 mb-4 flex items-center" style={{fontSize:"22px"}}>
              <Target className="w-5 h-5 mr-2 text-emerald-400" /> 具體行動方案
            </h4>
            <ul className="space-y-4 text-slate-300">
              {actions.map((a, i) => (
                <li key={i} className="flex items-start" style={{fontSize:"16px"}}>
                  <span className="text-emerald-400 mr-2 font-bold">{i+1}.</span> {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
}
