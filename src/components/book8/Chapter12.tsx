import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, BookOpen, ChevronDown, ChevronUp, Target, Brain, MessageSquareQuote, Cross, Home } from 'lucide-react';

export default function Chapter12() {
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [openTheology, setOpenTheology] = useState<number | null>(null);
  const [openTaiwan, setOpenTaiwan] = useState<number | null>(null);
  const [openChallenge, setOpenChallenge] = useState<number | null>(null);
  const [showPdf, setShowPdf] = useState(false);

  const sections = [
    {
      title: "善終的條件", icon: "🕯️",
      content: "必須達到受苦的意義與面對死亡的準備。若無法接受病情或有許多「不甘願、不放心」，會出現靈性困擾。\n\n善終不是單純「安詳離世」的醫療結果，而是一個整全的生命整合過程——包含對受苦的詮釋、未完成關係的修補、生死兩無憾的心靈平安。"
    },
    {
      title: "四道人生：道謝", icon: "🙏",
      content: "表達感恩能讓人有幸福感並化解恩怨，能平穩度過困難。\n\n在臨終前說「謝謝」，不只是禮貌，而是對過去一生的正向整合——承認自己的生命受過許多人的恩惠、疼愛、幫助。當人能誠心感恩時，就超越了受害者的自憐，進入了感恩者的豐盛。"
    },
    {
      title: "四道人生：道愛", icon: "💖",
      content: "可透過蓋瑞·巧門博士的「愛的5種語言」來表達：\n\n1. 肯定的話語：說出對方的價值、貢獻、你的愛\n2. 優質時間：放下手機，專注陪伴\n3. 收到禮物：一個有意義的小物件勝過貴重卻空洞的禮物\n4. 服務的行動：為對方做一件他一直需要的事\n5. 肢體接觸：擁抱、握手、撫摸都有療癒力量\n\n不同的人對不同的愛的語言有不同的反應——要用對方「聽得懂」的語言來愛他。"
    },
    {
      title: "四道人生：道歉", icon: "🤝",
      content: "是一種關係的和解，承認對方的受傷感，重點在於讓對方感受到「我看到了你的痛苦」。\n\n真正的道歉不是「對不起，但是……」——有「但是」的道歉等於沒道歉。真誠的道歉是承認：「我傷害了你，我理解你的痛苦，我為此負責。」這種道歉會帶來深刻的和解。"
    },
    {
      title: "四道人生：道別", icon: "🕊️",
      content: "給予承諾減輕瀕死者的心理負擔（如「我們會照顧好自己，你放心」）。\n\n即使對方已昏迷，聽覺通常是最後消失的感官，此時溫柔說話或播放喜歡的音樂，加上輕握雙手等肢體接觸，仍具有極大安撫力量。\n\n道別不是結束的宣告，而是承諾——承諾好好活下去、承諾永遠記得、承諾在信仰裡我們還會再見。"
    }
  ];

  const theologyTopics = [
    {
      title: "基督徒的「善終」：從今生到永恆的過渡",
      content: "對一般人而言，「善終」是「安詳離世」；對基督徒而言，善終更是「榮歸天家」。保羅說：「我現在被澆奠，我離世的時候到了。那美好的仗我已經打過了，當跑的路我已經跑盡了，所信的道我已經守住了。從此以後，有公義的冠冕為我存留。」（提後四6-8）\n\n這段話向我們展示了基督徒善終的四個面向：\n\n1. 打過美好的仗——一生忠心事奉\n2. 跑盡當跑的路——完成神的呼召\n3. 守住所信的道——信仰不變\n4. 得著公義的冠冕——永恆的獎賞\n\n換言之，基督徒的善終不是在臨終那一刻才達成的，而是一生屬靈投資的結果。你今天如何活，決定了你將來如何離世。",
      scriptures: [
        "提後四6-8 那美好的仗我已經打過了……從此以後，有公義的冠冕為我存留。",
        "詩三十一5 我將我的靈魂交在你手裡；耶和華誠實的神啊，你救贖了我。",
        "路二十三46 父啊！我將我的靈魂交在你手裡。"
      ],
      reflection: "你覺得自己現在走的屬靈道路，到你離世時會不會讓你像保羅一樣說「那美好的仗我已經打過了」？還是你在為其他事奔跑？"
    },
    {
      title: "「道謝」的神學：從受害者到感恩者",
      content: "聖經對「感恩」的教導極其豐富。保羅說：「凡事謝恩，因為這是神在基督耶穌裡向你們所定的旨意。」（帖前五18）注意是「凡事謝恩」——不是「在喜事中謝恩」，而是在病痛、失去、失望中仍能感恩。\n\n這不是叫人「正向思考」，而是在認識神的掌權後產生的生命轉變。當我們相信「萬事都互相效力，叫愛神的人得益處」（羅八28），我們就能在任何處境中找到感恩的理由。\n\n在臨終時，這個屬靈能力特別重要。有些病人回顧一生全是怨恨——「老公不體貼」「子女不孝順」「老闆不公義」「醫生不用心」……這種態度會使臨終變成地獄的預演。反之，能感恩的病人常帶著微笑離世，因為他們已經在今生就嘗到了天國的滋味。",
      scriptures: [
        "帖前五18 凡事謝恩，因為這是神在基督耶穌裡向你們所定的旨意。",
        "詩一百零三2 我的心哪，你要稱頌耶和華！不可忘記他的一切恩惠！",
        "羅八28 我們曉得萬事都互相效力，叫愛神的人得益處。"
      ],
      reflection: "如果你今天就要離世，你會帶著感恩離開，還是帶著怨恨？這個答案揭露了你目前的屬靈狀態。"
    },
    {
      title: "「道歉」的福音核心：承認與被赦免",
      content: "基督教的核心就是「道歉的神學」——我們來到神面前，承認自己的罪，尋求神的赦免；這不是負擔，而是福音的起點。約翰一書說：「我們若認自己的罪，神是信實的，是公義的，必要赦免我們的罪。」（約壹一9）\n\n但很多基督徒一輩子不會道歉——對配偶、對孩子、對父母、對同事。因為「道歉」挑戰了我們的驕傲，揭露了我們的軟弱。本章說的「真正的道歉不是『對不起，但是……』」完全符合聖經的悔改觀：真正的悔改是「改變心意、轉向神」——沒有「但是」。\n\n在臨終時，「道歉」會成為一個強大的屬靈工具。有些關係可能已經破裂幾十年，但一句真誠的「對不起」就能打開和解的門。很多家族的怨恨，就是在臨終者的道歉中解開的。",
      scriptures: [
        "約壹一9 我們若認自己的罪，神是信實的，是公義的，必要赦免我們的罪。",
        "雅五16 你們要彼此認罪，互相代求，使你們可以得醫治。",
        "太五23-24 你若先和弟兄和好，然後來獻禮物。"
      ],
      reflection: "你有沒有一個人，是你一直欠著一句道歉的？不要等到臨終——現在就去做。"
    },
    {
      title: "「道別」的盼望：在基督裡的再見",
      content: "基督徒的「道別」和一般人的最大差別是：我們相信「再見」。保羅說：「論到睡了的人，我們不願意你們不知道，恐怕你們憂傷，像那些沒有指望的人一樣。」（帖前四13）\n\n這句話的重點不是說基督徒面對死亡不會憂傷，而是我們的憂傷和「沒有指望的人」不一樣——我們帶著「必能再見」的盼望。\n\n這個盼望影響我們的道別方式：\n\n1. 我們可以誠實地哀傷——不需要假裝堅強\n2. 我們可以平安地放手——因為我們知道對方去了更好的地方\n3. 我們可以承諾好好活下去——因為我們還有未完的使命\n4. 我們可以期待再見——因為天家有我們共同的家人\n\n本章提到「即使對方已昏迷，聽覺通常是最後消失的感官」——這是神的恩典。基督徒可以在這個時刻為臨終者讀聖經、唱聖詩、祈禱——讓他在意識離開前，最後聽到的是神的話和親人的愛。",
      scriptures: [
        "帖前四13-14 論到睡了的人……我們若信耶穌死而復活了，那已經在耶穌裡睡了的人，神也必將他與耶穌一同帶來。",
        "約十四2-3 在我父的家裡有許多住處……我在哪裡，叫你們也在那裡。",
        "啟二十一4 神要擦去他們一切的眼淚；不再有死亡，也不再有悲哀、哭號、疼痛。"
      ],
      reflection: "基督徒的「道別」不是「永別」。這個盼望真實地影響你面對失去的方式嗎？"
    }
  ];

  const taiwanExamples = [
    {
      title: "🏠 華人家庭中「愛在心口難開」的文化",
      scenario: "華人家庭的愛常常不說出口——父母愛孩子是用「你吃飯沒？」「要穿暖」表達，孩子對父母的愛是透過盡孝責任表現。我們很少直接說「我愛你」「謝謝你」「對不起」。結果很多家人之間有很深的情感，卻從未表達過。臨終時才想到要說，往往為時已晚或是太過勉強。",
      challenge: "這週主動對家人表達一句平常不敢說的話——對配偶說「謝謝你這些年的陪伴」、對父母說「我愛你」、對孩子說「你是我生命中最珍貴的禮物」、對曾經傷害過的人說「對不起」。不要等到臨終——現在就做。",
      insight: "本章的「四道人生」不該等到臨終才操練。這是一個健康基督徒的日常生活方式——每天都在道謝、道愛、道歉、道別（為明天可能不再見做準備）。"
    },
    {
      title: "💔 未解決的家族怨恨與臨終和解",
      scenario: "很多家族有長期的怨恨——兄弟姊妹為財產反目、夫妻冷戰多年、親子關係疏離、甚至跨世代的痛苦。這些怨恨像地底的地雷，平常大家假裝沒事，但到了某人臨終時全部爆發——有人急著要道歉、有人拒絕來見最後一面、有人來了但吵得更凶。",
      challenge: "思考你的家族/婚姻/朋友圈中有沒有尚未解決的關係傷痛。不要等到悲劇發生——現在就開始祈求神的帶領。可能需要：(1) 先處理自己內心的怨恨 (2) 尋求專業輔導或牧者幫助 (3) 採取和解的第一步（一通電話、一封信、一頓飯）。",
      insight: "本章說道歉要「讓對方感受到『我看到了你的痛苦』」——這需要同理心和勇氣。但這正是基督徒可以做的美好見證——因為我們自己就是被神「看到痛苦」並赦免的人。"
    },
    {
      title: "⛪ 教會如何陪伴臨終家庭",
      scenario: "當教會肢體面臨家人臨終時，弟兄姊妹通常會送花、送飯、參加告別式。但真正深度的陪伴——包括在臨終前幾週、幾天、最後時刻的屬靈陪伴——卻很少被做到。原因是：大家怕打擾、怕不知道說什麼、怕自己的情緒影響對方。",
      challenge: "如果你的教會肢體家中有人臨終，具體如何陪伴：(1) 主動詢問「我可以來陪你嗎？」而不是等對方開口 (2) 帶著聖經、詩歌、禱告去，但不強推 (3) 允許對方哭泣、憤怒、甚至沉默 (4) 為整個家庭禱告（包括病人、家屬、照顧者）(5) 在葬禮後持續關懷——很多人在葬禮後才開始真正面對失去。",
      insight: "本章強調「陪伴是最重要的」——在臨終時尤其如此。你不需要是靈性關懷專家，你需要的是「願意同在」的心。這是小組成員彼此之間最珍貴的服事。"
    },
    {
      title: "🎵 為自己和家人預備「善終」",
      scenario: "多數人對「死亡預備」感到忌諱——不想立遺囑、不想談葬禮、不想寫告別信。但這種迴避其實增加了家人將來的負擔，也錯失了自己屬靈整合的機會。有智慧的基督徒會在健康時就開始預備——不是出於病態的憂鬱，而是出於對永恆的盼望和對家人的愛。",
      challenge: "具體預備清單：(1) 寫好遺囑 (2) 做預立醫療決定（AD）註記在健保卡 (3) 整理重要文件 (4) 寫好給家人的告別信（即使多年後才需要）(5) 列出「四道人生」對象清單 (6) 和牧者談話：「我希望我的告別式是什麼樣？」(7) 跟家人談自己的信仰和期望。",
      insight: "本章說「臨終期是靈性煉淨的最佳機會」——但主動預備的人，可以把這個「煉淨」的過程從臨終期提前到日常生活。這是更智慧、更愛家人的做法。"
    }
  ];

  const weeklyChallenge = [
    {
      week: "第一週", title: "道謝：列出你的感恩清單",
      mission: "花一週時間，每天列出三個你要感謝的人（不能重複）。從家人、朋友、同事、老師、牧者、甚至傷害過你但讓你成長的人。然後選擇其中三個，主動發訊息、打電話或寫卡片向他們表達感恩。",
      scripture: "詩一百零三2「我的心哪，你要稱頌耶和華！不可忘記他的一切恩惠！」",
      journalPrompt: "做這個操練時，你的內心有什麼變化？對方的反應如何？感恩是否讓你對自己的生命有新的視角？"
    },
    {
      week: "第二週", title: "道愛：用對方的愛的語言愛家人",
      mission: "研究五種愛的語言（肯定的話語、優質時間、收到禮物、服務的行動、肢體接觸），判斷你家人主要的愛的語言是哪種。然後這週刻意用「他的」愛的語言，而非「你自己習慣的」愛的語言，去愛一位家人。",
      scripture: "約十三34-35「我賜給你們一條新命令，乃是叫你們彼此相愛……眾人因此就認出你們是我的門徒了。」",
      journalPrompt: "當你用對方的愛的語言去愛他，對方的反應有什麼不同？你自己有什麼新發現？"
    },
    {
      week: "第三週", title: "道歉：寫一封真誠的道歉信",
      mission: "想一個你曾經傷害過的人（可能是家人、朋友、同事、甚至多年前的關係）。寫一封真誠的道歉信——不是「對不起，但是……」，而是「對不起，我看到了你的痛苦，我為此負責」。然後決定是否要寄出（有時候寄出會造成二度傷害，需要謹慎判斷）。",
      scripture: "太五23-24「你在祭壇上獻禮物的時候，若想起弟兄向你懷怨……先去同弟兄和好，然後來獻禮物。」",
      journalPrompt: "寫這封信的過程如何？你發現了什麼是你一直不想承認的？寫完後你的感受如何？"
    },
    {
      week: "第四週", title: "道別：預備你自己的告別信",
      mission: "聽起來很震撼，但這是極有意義的操練：寫一封告別信給家人。假設你今天離世，你想對他們說什麼？要感謝什麼、期望什麼、祝福什麼？寫完後封存在一個安全的地方，告訴一位信任的人這封信的位置。這不是「悲傷的預備」，而是「對家人深切的愛」。",
      scripture: "提後四6-7「那美好的仗我已經打過了，當跑的路我已經跑盡了，所信的道我已經守住了。」",
      journalPrompt: "寫這封信時你有什麼感受？它讓你意識到自己現在最需要做的是什麼？你是否看到自己生命中還有哪些地方需要改變？"
    }
  ];

  const groupDiscussion = [
    {
      category: "🕯️ 善終與四道人生",
      questions: [
        "你覺得「善終」對基督徒和對一般人有什麼不同？",
        "四道人生中，哪一個對你最容易？哪一個最困難？為什麼？",
        "華人文化中「愛在心口難開」——這個文化特質如何影響我們的道謝、道愛、道歉、道別？",
        "為什麼我們要「現在」就開始四道人生的操練，而不是等到臨終？"
      ]
    },
    {
      category: "🤝 和解與饒恕",
      questions: [
        "你心中有沒有尚未解決的關係傷痛？如果有，是什麼在阻止你採取和解的第一步？",
        "真正的道歉和「對不起，但是……」的差別是什麼？",
        "饒恕、和解、信任重建——這三者是什麼關係？必須一起發生嗎？",
        "作為一個小組，我們如何成為彼此和解旅程的支持者？"
      ]
    },
    {
      category: "🕊️ 預備自己的善終",
      questions: [
        "你有做過具體的「死亡預備」嗎（遺囑、預立醫療決定、告別信等）？為什麼有或沒有？",
        "為什麼華人特別忌諱預備死亡？這個文化背後的假設是什麼？",
        "保羅說「那美好的仗我已經打過了」——你覺得自己現在打的是什麼樣的仗？",
        "如果我們真的相信基督徒的善終是「榮歸天家」，這個相信會如何改變我們現在的生活方式？"
      ]
    }
  ];

  const reflections = [
    "我現在走的屬靈道路，到離世時能不能像保羅一樣說「美好的仗我已經打過了」？",
    "我有沒有一些一直不敢說的話——對家人、朋友的感謝、愛、道歉？",
    "我心中有沒有尚未解決的怨恨？是對人，還是對神？",
    "我是否真的相信「在基督裡的再見」——還是我其實對永恆的盼望很淺薄？",
    "我有沒有為自己的善終做任何預備？為什麼有或沒有？",
    "我的屬靈生活是「等到臨終才整合」，還是「每天都在整合」？"
  ];

  const actions = [
    "開始四道人生：今天就找一個人、說一句平常不敢說的話。",
    "寫你的感恩清單：每天三個人、三件事，持續一個月。",
    "學習五種愛的語言：用對方的語言愛家人，不是用你自己習慣的方式。",
    "處理一段破裂關係：採取和解的第一步，即使只是一通電話。",
    "做死亡預備：遺囑、預立醫療決定、告別信——用行動愛你的家人。",
    "建立日常屬靈整合：不要等臨終才整合——每天晚上檢視自己的道謝、道愛、道歉、道別。"
  ];

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="space-y-8">

      <div className="bg-gradient-to-br from-amber-600 via-rose-700 to-purple-800 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="relative">
          <div className="flex items-center gap-2 mb-2"><Home className="w-5 h-5 text-amber-200" /><span className="text-amber-200 text-sm tracking-widest">靈性關懷與身心健康</span></div>
          <h1 className="font-extrabold mb-3" style={{fontSize:"32px"}}>第十二單元：靈性平安與四道人生</h1>
          <p className="text-amber-100 text-lg">道謝、道愛、道歉、道別——生死兩無憾的實踐</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-amber-50 rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><BookOpen className="w-6 h-6 text-slate-600" />原書重點</h3>
        <div className="space-y-3">
          {sections.map((sec, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-slate-50 transition-colors" onClick={() => setOpenSection(openSection === i ? null : i)}>
                <h4 className="font-bold text-slate-800 flex items-center gap-2" style={{fontSize:"19px"}}><span className="text-2xl">{sec.icon}</span>{sec.title}</h4>
                {openSection === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>{(openSection === i) && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <div className="px-5 pb-5 bg-slate-50">
                    {sec.content.split('\n\n').map((para, j) => (<p key={j} className="text-slate-700 leading-relaxed mb-3" style={{fontSize:"17px"}}>{para}</p>))}
                  </div>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-6 md:p-8 border border-violet-100 shadow-sm">
        <h3 className="font-bold text-violet-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}><Cross className="w-6 h-6 text-violet-600" />神學深度探討<span className="ml-2 text-xs bg-violet-100 text-violet-500 px-2 py-1 rounded-full border border-violet-200">基督徒觀點</span></h3>
        <div className="space-y-3 mt-4">
          {theologyTopics.map((topic, i) => (
            <div key={i} className="bg-white rounded-2xl border border-violet-100 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-violet-50 transition-colors" onClick={() => setOpenTheology(openTheology === i ? null : i)}>
                <h4 className="font-bold text-violet-800" style={{fontSize:"18px"}}>{topic.title}</h4>
                {openTheology === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>{(openTheology === i) && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <div className="px-5 pb-5 space-y-3">
                    {topic.content.split('\n\n').map((para: string, j: number) => (<p key={j} className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>{para}</p>))}
                    <div className="bg-violet-50 rounded-xl p-4 border border-violet-100"><div className="font-bold text-violet-700 mb-2" style={{fontSize:"15px"}}>📖 相關經文：</div>{topic.scriptures.map((s: string, j: number) => (<p key={j} className="text-slate-600 text-sm mb-1.5">{s}</p>))}</div>
                    <div className="bg-amber-50 rounded-xl p-4 border border-amber-200"><div className="font-bold text-amber-700 mb-1" style={{fontSize:"15px"}}>💬 反思：</div><p className="text-slate-600" style={{fontSize:"17px"}}>{topic.reflection}</p></div>
                  </div>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-6 md:p-8 border border-orange-100 shadow-sm">
        <h3 className="font-bold text-orange-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}><Heart className="w-6 h-6 text-orange-600" />在我們的處境中<span className="ml-2 text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full border border-orange-200">台灣教會應用</span></h3>
        <div className="space-y-3 mt-4">
          {taiwanExamples.map((ex, i) => (
            <div key={i} className="bg-white rounded-2xl border border-orange-100 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-orange-50 transition-colors" onClick={() => setOpenTaiwan(openTaiwan === i ? null : i)}>
                <h4 className="font-bold text-orange-800" style={{fontSize:"18px"}}>{ex.title}</h4>
                {openTaiwan === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>{(openTaiwan === i) && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <div className="px-5 pb-5 space-y-3">
                    <div className="bg-orange-50 rounded-xl p-4 border border-orange-100"><div className="font-bold text-orange-700 mb-2" style={{fontSize:"15px"}}>📍 情境：</div><p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>{ex.scenario}</p></div>
                    <div className="bg-green-50 rounded-xl p-4 border border-green-200"><div className="font-bold text-green-700 mb-1" style={{fontSize:"15px"}}>🎯 挑戰：</div><p className="text-slate-600" style={{fontSize:"17px"}}>{ex.challenge}</p></div>
                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-200"><div className="font-bold text-blue-700 mb-1" style={{fontSize:"15px"}}>💡 回扣本書：</div><p className="text-slate-600" style={{fontSize:"17px"}}>{ex.insight}</p></div>
                  </div>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-6 md:p-8 border border-indigo-100 shadow-sm">
        <h3 className="font-bold text-indigo-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}><Target className="w-6 h-6 text-indigo-600" />四週操練挑戰</h3>
        <div className="space-y-3 mt-4">
          {weeklyChallenge.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-indigo-100 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-indigo-50 transition-colors" onClick={() => setOpenChallenge(openChallenge === i ? null : i)}>
                <div className="flex items-center gap-3"><span className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-700 font-bold text-sm">{item.week.slice(-2)}</span><h4 className="font-bold text-indigo-800" style={{fontSize:"18px"}}>{item.title}</h4></div>
                {openChallenge === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>{(openChallenge === i) && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <div className="px-5 pb-5 space-y-3">
                    <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100"><div className="font-bold text-indigo-700 mb-2" style={{fontSize:"15px"}}>🎯 任務：</div><p className="text-slate-600" style={{fontSize:"17px"}}>{item.mission}</p></div>
                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-200"><div className="font-bold text-blue-700 mb-1" style={{fontSize:"15px"}}>📖 經文：</div><p className="text-slate-600" style={{fontSize:"17px"}}>{item.scripture}</p></div>
                    <div className="bg-amber-50 rounded-xl p-4 border border-amber-200"><div className="font-bold text-amber-700 mb-1" style={{fontSize:"15px"}}>📓 日記：</div><p className="text-slate-600" style={{fontSize:"17px"}}>{item.journalPrompt}</p></div>
                  </div>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-sm">
        <h3 className="font-bold text-emerald-800 mb-6 flex items-center gap-2" style={{fontSize:"24px"}}><MessageSquareQuote className="w-6 h-6 text-emerald-600" />小組討論問題<span className="ml-3 bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full font-normal border border-emerald-200" style={{fontSize:"13px"}}>小組使用</span></h3>
        <div className="space-y-6">
          {groupDiscussion.map((section, i) => (
            <div key={i}><h4 className="font-bold text-emerald-700 mb-3 flex items-center gap-2" style={{fontSize:"20px"}}><span className="w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-800 font-bold" style={{fontSize:"14px"}}>{i+1}</span>{section.category}</h4>
              <div className="space-y-2 ml-10">{section.questions.map((q: string, j: number) => (<div key={j} className="bg-white rounded-xl p-4 border border-emerald-100"><p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>{q}</p></div>))}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-800 shadow-lg text-white">
        <h3 className="font-bold text-orange-300 mb-6 flex items-center" style={{fontSize:"27px"}}><Brain className="w-7 h-7 mr-3" />深度反思與行動指南</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="font-bold text-orange-200 mb-4 flex items-center" style={{fontSize:"22px"}}><Brain className="w-5 h-5 mr-2 text-orange-400" /> 反思問題</h4>
            <ul className="space-y-4 text-slate-300">{reflections.map((r, i) => (<li key={i} className="flex items-start" style={{fontSize:"17px"}}><span className="text-orange-400 mr-2 font-bold">{i+1}.</span> {r}</li>))}</ul>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="font-bold text-emerald-300 mb-4 flex items-center" style={{fontSize:"22px"}}><Target className="w-5 h-5 mr-2 text-emerald-400" /> 具體行動方案</h4>
            <ul className="space-y-4 text-slate-300">{actions.map((a, i) => (<li key={i} className="flex items-start" style={{fontSize:"17px"}}><span className="text-emerald-400 mr-2 font-bold">{i+1}.</span> {a}</li>))}</ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-amber-50 to-rose-50 rounded-3xl p-6 md:p-8 border border-amber-100 shadow-sm">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowPdf(!showPdf)}>
          <h3 className="font-bold text-amber-800 flex items-center gap-2" style={{fontSize:"22px"}}><BookOpen className="w-6 h-6 text-amber-600" />📄 閱讀原書 PDF（含圖片與完整排版）</h3>
          {showPdf ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
        </div>
        <AnimatePresence>{showPdf && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <div className="mt-4 rounded-xl overflow-hidden border border-amber-200" style={{height:"80vh"}}>
              <iframe src="/spiritual-care.pdf#page=114" className="w-full h-full" title="原書 PDF" />
            </div>
          </motion.div>
        )}</AnimatePresence>
      </div>

      </div>
    </div>
  );
}
