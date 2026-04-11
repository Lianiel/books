import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, BookOpen, ChevronDown, ChevronUp, Target, Brain, MessageCircle, AlertTriangle, Sparkles, Shield, Users, MessageSquareQuote, Layers, BookMarked, CloudRain, Minus, ArrowDown } from 'lucide-react';

export default function Chapter5({ expandAll }: { expandAll?: boolean }) {
  const [openLoss, setOpenLoss] = useState<number | null>(null);
  const [openShield, setOpenShield] = useState<number | null>(null);
  const [openStage, setOpenStage] = useState<number | null>(null);
  const [openStep, setOpenStep] = useState<number | null>(null);
  const [openLimit, setOpenLimit] = useState<number | null>(null);
  const [openTheology, setOpenTheology] = useState<number | null>(null);
  const [openChallenge, setOpenChallenge] = useState<number | null>(null);
  const [openTaiwan, setOpenTaiwan] = useState<number | null>(null);

  const lossTypes = [
    { type: "失去青春", detail: "再多的整形手術、化妝品、健康飲食、規律運動，都無法阻擋變老的速度。", icon: "⏳" },
    { type: "失去夢想", detail: "誰不曾失去夢想？誰不曾失去對工作、婚姻、兒女的夢想？", icon: "💭" },
    { type: "失去規律和穩定", detail: "每一次換工作、移民、搬家都是一種失去。兒女漸獨立，我們轉而照顧老邁的父母。", icon: "🔄" },
    { type: "重大的失去", detail: "親人驟逝、配偶外遇、罹癌、裁員、先天性殘疾、不孕、流產、友情破裂、喪失記憶、遭受暴力。", icon: "💔" },
    { type: "無能為力的失去", detail: "每個人在成長家庭裡都會失去些什麼。有些人「在成長的戰役中失去一條腿」，如今傷痕累累。", icon: "🩹" },
    { type: "失去謬誤的神觀與教會觀", detail: "到頭來發現自己蠢得可以，甚至覺得被神背叛。我們發現，原來神遠比想像的還要偉大。也失去對教會的幻想——原來教會和其中的人並沒有想像中完美。（感謝神！）", icon: "⛪" }
  ];

  const jobProfile = [
    { aspect: "財富", detail: "七萬隻羊、五萬隻駱駝、五百對牛和五百頭驢、大批員工。如果是現代，就是全球首富，登上《富比士》封面。" },
    { aspect: "品格", detail: "忠心與神同行，以神為樂，全心順服，「敬畏上帝，遠離惡事」（伯一1）。當代最受敬重的基督徒領袖。" },
    { aspect: "災難", detail: "短短不到一個上午——敵人入侵、雷電交加、龍捲風肆虐——頓失所有，連十個兒女都喪命。" },
    { aspect: "回應", detail: "遭遇如此打擊，他還是沒有犯罪埋怨神。他就是堅持敬拜神！但隨後他從頭到腳長滿毒瘡，妻子崩潰說：「你棄掉神，死了吧！」（伯二9）" }
  ];

  const defenseMechanisms = [
    { mechanism: "拒絕相信（遺忘）", example: "「我還好。老闆欺壓我最後還把我解僱，我其實沒有很生氣。坦白說，我一點也不在意。」", icon: "🙈" },
    { mechanism: "刻意淡化", example: "「我兒子跟神的關係還好，他偶爾才會喝點酒。」但事實上是嚴重酗酒。", icon: "🤏" },
    { mechanism: "怨天尤人", example: "「因為醫生開錯藥，才害我哥哥生病住院。」——不認為自己有錯，把責任推給別人。", icon: "👉" },
    { mechanism: "自責", example: "「都是我不好，我媽媽才不願意照顧我，整天喝酒。都是我害的。」", icon: "😔" },
    { mechanism: "合理化", example: "「你知道約翰他們家族有脾氣暴躁的問題嗎？所以協談也沒什麼用。」", icon: "🧠" },
    { mechanism: "訴諸理智", example: "「世界上有那麼多人在受苦，相較之下，我的問題真的不算什麼。」——迴避不舒服的感覺。", icon: "📊" },
    { mechanism: "分散注意力", example: "「為什麼要一直想那些負面的事？我們家去年聖誕節不是很好嗎？」——改變話題。", icon: "🎯" },
    { mechanism: "變得不友善", example: "「不要再提到喬依，他已經死了，你一直講他也不會回來。」——一觸碰某些話題就生氣。", icon: "😤" }
  ];

  const fiveGriefStages = [
    { num: 1, title: "正視負面的情緒", detail: "約伯毫不保留地吶喊內心的痛苦，甚至咒詛自己出生的日子：「願我生的那日和說懷了男胎的那夜都滅沒……我一切的災害放在天平裏，現今都比海沙更重。」（伯三3-4；六2-4）他沒有避諱痛苦，反而直接面對。詩篇中有三分之二是哀歌，都在向神抱怨。即使是耶穌也會哭泣（約11:35；路19:41）。有位學者寫了一篇文章叫〈該死的神：在禱告中表達怒氣的省思〉——這個標題本身就挑戰了我們認為「生氣就是犯罪」的觀念。", scripture: "伯三3-4；六2-4", page: "p.150-152" },
    { num: 2, title: "在混沌未明、困惑不解中忍耐等候", detail: "約伯的三位朋友以利法、比勒達和瑣法堅信約伯受苦是罪有應得：「你種的是什麼收的就是什麼。」他們代表「傳統的宗教」或「律法主義」——你禱告不夠、禁食不夠、聖經讀不夠。但約伯的的確確是無辜受苦。他的朋友無法忍受「在困惑不解中忍耐等候」，無法接受任何的奧祕。他們高估了自己對真理的理解，不是來安慰約伯而是讓他更痛苦。混沌未明的狀態拒絕一切快速解決辦法，與我們的文化背道而馳。", scripture: "詩三十七7「你當默然倚靠耶和華，耐性等候祂。」", page: "p.154-156" },
    { num: 3, title: "接受限制、視為禮物", detail: "就是因為有限制，我們才不得不在神和人面前謙卑。限制包括：身體（終將歸回塵土）、原生家庭（帶著禮物也帶著限制）、婚姻狀態、智能、才能與恩賜（唯獨耶穌擁有全備恩賜）、物質財富、特質（性格是禮物也是限制）、時間（只有一輩子）、工作與人際（總有做不完的事和不完美的關係）、屬靈悟性（隱祕的事是屬耶和華的）。施洗約翰成功示範了接受有限：「若不是從天上賜的，人就不能得甚麼。」（約三27）", scripture: "約三27、30「祂必興旺，我必衰微。」", page: "p.156-159" },
    { num: 4, title: "攀爬謙卑的階梯", detail: "聖本篤在六世紀將謙卑的成長劃分為八級階梯。最終目標是完全的愛和全人的改變。八級：(1)時時敬畏神(2)遵行神的旨意(3)願意服從別人指導(4)耐心包容他人難處(5)向人坦承自己的軟弱(6)深知自己是罪人中的罪魁(7)刻意少說話——「智者寡言」(8)生命被改變進入神的愛——不再有傲慢和不可一世，能接受自己和他人的有限，很滿足於成為自己。", scripture: "太五3-10；路十四7-11", page: "p.159-162" },
    { num: 5, title: "從舊我長出新生命", detail: "好的悲傷不僅僅是放下，更是讓那些不好的事成為我們的祝福。當我們正視負面情緒、在混沌中等候、接受限制、攀爬謙卑的階梯——接著上帝的時間到了，那些失落反而會成為我們的祝福。「耶和華就使約伯從苦境轉回，並且耶和華賜給他的比他從前所有的加倍。」（伯四十二10-17）但別忘了，真實的死亡之後才會有復活。我們的虧損是真實的，我們的神也是真實的。", scripture: "伯四十二10-17", page: "p.162-163" }
  ];

  const humilityLadder = [
    { step: 1, desc: "時時敬畏神——我們常忘記神的同在，彷彿祂不在身邊。" },
    { step: 2, desc: "遵行神的旨意（不照自己或他人的意思）——讓自己的意思伏在神對我們的計畫之下。" },
    { step: 3, desc: "願意服從別人的指導——放下驕傲和自以為是，在聽從別人指導時毫無怨言。" },
    { step: 4, desc: "耐心包容他人的難處——讓人有機會照他們的時間和方式認識自己的軟弱。" },
    { step: 5, desc: "願意向人完全坦承自己的軟弱或錯誤——不再偽裝。" },
    { step: 6, desc: "深知自己是「罪人中的罪魁」——不是自我嫌惡，而是讓自己變得更有慈悲、更良善。" },
    { step: 7, desc: "刻意少說話（更能勒住舌頭）——聖本篤說：「智者寡言。」" },
    { step: 8, desc: "生命被改變進入神的愛——不再有傲慢和冷嘲熱諷，能接受自己和他人的有限。" }
  ];

  const limitations = [
    { area: "身體", detail: "一天天老去，終將歸回塵土。為了存活必須睡覺、吃飯、喝水。再高明的整形醫師也無法延緩變老。" },
    { area: "原生家庭", detail: "家族、種族、出生國和文化會給你禮物也加諸限制。無論出生於雙親或單親家庭都帶著限制長大。" },
    { area: "婚姻狀態", detail: "已婚或單身都會受到限制。有小孩的會受小孩人數和狀態所限制。" },
    { area: "智能", detail: "沒有人同時是文學、數學、機械、木工、物理和音樂各方面的天才。" },
    { area: "才能與恩賜", detail: "唯獨耶穌擁有所有恩賜。你可能有十項恩賜，我可能只有三項。" },
    { area: "物質財富", detail: "就算是億萬富翁，資源還是有限。" },
    { area: "特質", detail: "神給每個人不同的性格和氣質——是禮物也是限制。" },
    { area: "時間", detail: "每個人都只有一輩子，不可能什麼都參與。" },
    { area: "工作與人際", detail: "工作永遠做不完。人與人的關係必須到天堂之後才會完全。" },
    { area: "屬靈悟性", detail: "「隱祕的事是屬耶和華我們神的。」（申二十九29）關於神還有很多是我們不知道的。" }
  ];

  const movieOrdinaryPeople = {
    title: "電影《凡夫俗子》：不哀傷的代價",
    summary: "住在芝加哥郊區的哈登夫婦凱文和貝絲，看似完美——美麗的房子、幸福的婚姻。但大兒子巴克在船難中喪生後，一切開始崩解。弟弟康納德企圖輕生被送進精神病院。全家人都無法說出內心的失落與悲痛。",
    climax: "凱文終於對貝絲說：「你好漂亮，可是我不懂你在想什麼……或許你沒辦法愛任何人。你很愛巴克，但巴克已經死了，你所有的愛好像也跟著他埋進土裡。」貝絲聽完，上樓打包行李，悄悄坐上計程車離開。(p.153-154)",
    lesson: "貝絲拒絕正視內心的痛苦與失落，以致喪失愛人的能力。她裡面有一部分已經死了。"
  };

  const theologyTopics = [
    { title: "聖經中的哀歌傳統：被遺忘的禱告語言", content: "詩篇中有三分之二（約100篇）是哀歌——向神表達痛苦、憤怒、困惑和被遺棄感的禱告。有位學者說：「詩篇常被稱為禱告的學校。若真是如此，近幾年的基督徒在選課時心態非常偏頗，因為他們堅稱有多首咒詛或咒罵的詩不適用於敬拜。」(p.151) 舊約有一整卷書叫「耶利米哀歌」。耶穌在十字架上引用詩22篇（「我的神，我的神，為什麼離棄我」），這是一首完整的哀歌。我們的教會幾乎完全丟失了這個豐富的禱告傳統——取而代之的是「常常喜樂」和「向他歌唱」的單一敘事。但聖經教導我們：「凡事都有定期……哭有時，笑有時；哀慟有時，跳舞有時。」（傳三1、4）", scriptures: ["詩十三1 耶和華啊，你忘記我要到幾時呢？", "哀三22-23 我們不至消滅是出於耶和華諸般的慈愛", "傳三1、4 凡事都有定期…哭有時笑有時", "太二十七46 我的神我的神為什麼離棄我"], reflection: "你上一次在神面前「哀歌」是什麼時候？你的教會是否有空間讓弟兄姊妹表達悲傷和困惑？還是只允許「讚美」和「感恩」？" },
    { title: "人的有限性神學：「謙卑」的拉丁文根源", content: "「謙卑」（humility）的英文字源自拉丁文humus，意思是「來自地上」。神用地上的塵土造人，也提醒我們終將歸回塵土（創三19）。接受有限不是認輸或自暴自棄，而是認清一個事實：我們不是神。施洗約翰是最好的榜樣：當群眾都轉去跟隨耶穌，他的門徒來抱怨「眾人都往他那裡去了」，約翰回答：「若不是從天上賜的，人就不能得什麼。」（約三27）然後說出那句名言：「祂必興旺，我必衰微。」（約三30）他沒有因此陷入自憐或苦毒——他接受了自己的有限和角色，並且在那個有限中找到深刻的平安。聖本篤的八級謙卑階梯提供了一個具體的操練路徑：從時時敬畏神開始，最終到達「生命被改變進入神的愛」。", scriptures: ["創三19 你本是塵土，仍要歸於塵土", "約三27 若不是從天上賜的人就不能得什麼", "腓二5-8 祂本有神的形像…反倒虛己…自己卑微存心順服以至於死"], reflection: "你最難接受的「限制」是什麼？你是否能像施洗約翰一樣說「祂必興旺，我必衰微」——不只是嘴上說，而是從心裡接受？" },
    { title: "「經過死亡才有生命」：十字架的悖論", content: "基督信仰的核心是一個悖論：經過死亡才能得著生命，釘十字架之後才是復活。傑瑞·席哲在《出人意外的恩典》中回憶奪走母親、妻子和幼女的車禍。他發現：「要迎接黎明曙光，最快的方法不是往西去追逐太陽，而是往東走入黑暗，走到最後就能看見日出。」(p.148) 這是反直覺的——我們的本能是逃避痛苦，但信仰的邏輯是穿越痛苦。約伯選擇進入混亂的靈魂暗夜而不是自己想辦法解決。結果，「耶和華後來賜福給約伯比先前更多。」（伯四十二12）但注意：復活不是廉價的。真實的死亡之後才會有復活——我們的虧損是真實的，不能跳過死亡直接要求復活。", scriptures: ["約十二24 一粒麥子不落在地裡死了仍舊是一粒；若是死了就結出許多子粒來", "林後四17 我們這至暫至輕的苦楚，要為我們成就極重無比永遠的榮耀", "伯四十二12 耶和華後來賜福給約伯比先前更多"], reflection: "你是否曾經歷過「經過死亡才有生命」的悖論？有沒有一個你以為是最壞的經歷，後來卻成為最大的祝福？你現在是否正在經歷「死亡」——你能否相信「復活」會來？" }
  ];

  const taiwanExamples = [
    { title: "😢 華人文化中的「堅強」迷思", scenario: "在華人文化中，「要堅強」是面對失去的標準答案。「男兒有淚不輕彈」「節哀順變」「要想開一點」「一切都是神的旨意」——這些話語雖然出於好意，卻往往阻止人真正面對悲傷。在教會中更是如此：「你要喜樂」「神不會給你承擔不起的」「萬事互相效力」——這些話可能在對的時機是安慰，但在錯的時機就是二次傷害。", challenge: "下次有人跟你分享失去和悲傷時，不要急著給「答案」或引用經文。試著只是陪伴和傾聽。最有力量的話可能是：「這真的很痛。我陪你。」然後保持沉默。", insight: "約伯的三個朋友犯的最大錯誤不是「說錯話」，而是「不願意陪伴約伯在混沌中等候」。他們急著給答案——因為他們自己也受不了沒有答案的焦慮。我們是否也常犯同樣的錯？(p.155-156)" },
    { title: "🏫 台灣社會中的「失去夢想」", scenario: "台灣的教育體制和社會期待往往為年輕人設定了一條「正確的路」：好成績→好大學→好工作→結婚生子→退休。當現實偏離這條路時——考不上理想學校、找不到好工作、三十歲還沒結婚、四十歲沒有孩子——那種失落感是巨大的。在教會中更會被加上屬靈的解讀：「是不是你不夠順服？」「是不是神在管教你？」", challenge: "寫下你曾經失去的三個夢想（可以是小時候的夢想、對婚姻的期待、對事業的規劃）。為每一個夢想做一件事：(1)承認失落的感受——「我真的很難過」(2)在神面前放下——「我相信祢有更好的計畫，即使我現在看不見」(3)尋找新的可能——「在這個限制中，祢要給我什麼新的禮物？」", insight: "本章說「我們失去夢想——誰不曾失去夢想？」(p.142) 在台灣的高壓社會中，失去夢想的痛苦特別強烈，因為「成功」被定義得非常狹窄。但約伯的故事告訴我們：失去一切之後，神給的比先前更多——但那個「更多」可能和我們原來的夢想長得完全不一樣。" },
    { title: "🛡️ 華人教會中的「防護罩」", scenario: "本章列出八種防護罩（拒絕相信、淡化、怨天尤人、自責、合理化、訴諸理智、分散注意力、變得不友善）。在華人教會中最常見的可能是「合理化」和「訴諸理智」——用屬靈的語言來迴避真實的感受：「這是神的旨意」「我應該要感恩」「比起非洲的孩子我已經很幸福了」。這些話不是不對，但如果用來壓抑悲傷，就變成防護罩而非真理。", challenge: "回想你最近一次的失去或失望（不必是很大的事）。從八種防護罩中，找出你最常使用的一種。然後問自己：如果拿掉這個防護罩，我真正的感受是什麼？我是否願意在神面前如實說出來？", insight: "作者說：「小孩會直覺地豎起防護罩阻絕痛苦——這對當事者來說是健康的生存機制。但長大成人之後，就必須卸下否認的防護機制，誠實面對事實。」(p.148) 許多華人基督徒的防護罩是從童年就建立的——現在是時候卸下了。" },
    { title: "🪜 聖本篤的謙卑階梯在華人處境中的應用", scenario: "聖本篤的八級謙卑階梯對華人基督徒來說既陌生又挑戰。在華人文化中，「謙卑」常被理解為「自我貶低」或「不敢表達自己」。但聖本篤的謙卑不是自我嫌惡——第六級「深知自己是罪人中的罪魁」不是自我否定，而是讓自己變得「更有慈悲、更良善」。第七級「刻意少說話」在話多的社交文化中更是反文化的操練。", challenge: "從八級階梯中選一級這週操練：(1)設定手機鬧鐘每三小時響一次，提醒自己「神在這裡」(2)找一件你想按自己意思做的事，刻意問「神祢的旨意是什麼？」(3)接受一位你通常不會聽從的人的建議(4)今天刻意少說三句話。", insight: "聖本篤的階梯最頂端不是「成為屬靈超人」而是「生命被改變進入神的愛」——能接受自己和他人的有限，很滿足於成為自己。這正是情感健康靈性的目標。(p.162)" },
    { title: "⚰️ 面對死亡：華人文化中最大的禁忌", scenario: "在華人文化中，「死亡」是最大的禁忌話題。醫院不設四樓，數字四要避諱，過年不能說「死」字。在教會中也很少直接面對死亡的現實——我們更喜歡談「永生」而迴避「死亡」。但本章列出的最後一項限制就是：「你早晚會死。」理查・羅爾的五個認知中，這是最後也是最震撼的一個。", challenge: "寫一封信給未來的自己（假設你只剩一年的生命）：你會後悔什麼？你會優先做什麼？你會對誰說什麼話？你會放下什麼？你會抓住什麼？寫完後在神面前禱告：「主啊，教我數算自己的日子，好叫我得著智慧的心。」（詩九十12）", insight: "本章核心信息之一是「接受限制視為禮物」。我們最大的限制就是死亡——但死亡也是最大的禮物，因為它迫使我們認真面對：什麼才是真正重要的？(p.156-159)" }
  ];

  const weeklyChallenge = [
    { week: "第一週", title: "盤點你的失落", mission: "參考本章的六種失去類型，寫下你生命中經歷過的每一種失落——大的和小的。不要跳過那些你覺得「不算什麼」的。為每一個失落寫下：(1)我有真正面對這個失落嗎？(2)我用了什麼「防護罩」來逃避？(3)如果把防護罩拿掉，我真正的感受是什麼？", scripture: "傳三1、4「凡事都有定期……哭有時，笑有時；哀慟有時，跳舞有時。」", journalPrompt: "哪一個失落是你從未真正面對過的？你的防護罩是什麼？如果這週允許自己為那個失落哭泣，你會害怕什麼？" },
    { week: "第二週", title: "學習約伯的五個階段", mission: "每天讀約伯記的一段（建議：第1-2章→3章→6-7章→38-41章→42章），對照五個悲傷階段：正視負面情緒→在混沌中等候→接受限制→攀爬謙卑階梯→從舊我長出新生命。問自己：我目前在哪個階段？我是否試圖跳過某個階段？", scripture: "伯四十二5「我從前風聞有你，現在親眼看見你。」", journalPrompt: "約伯從「風聞」到「親眼看見」——這個轉變經歷了多少痛苦？你是否渴望從「風聞」進入「親眼看見」？你願意付上什麼代價？" },
    { week: "第三週", title: "接受你的限制", mission: "參考本章列出的十種限制（身體、原生家庭、婚姻、智能、才能、財富、特質、時間、工作、屬靈悟性），選出三個你最難接受的限制。為每一個寫下：(1)為什麼我難以接受？(2)這個限制帶來了什麼禮物？(3)施洗約翰的話「若不是從天上賜的人就不能得什麼」對我有什麼意義？", scripture: "約三27 若不是從天上賜的，人就不能得甚麼。", journalPrompt: "你最難接受的限制是什麼？你能否看到這個限制中隱藏的禮物？如果把它交給神，你的生活會有什麼不同？" },
    { week: "第四週", title: "攀爬謙卑的階梯", mission: "閱讀聖本篤的八級謙卑階梯。從最底層開始，每兩天操練一級：第1-2天「時時敬畏神」（設鬧鐘提醒神的同在）→第3-4天「遵行神的旨意」（在一個決定上刻意問神）→第5-6天「願意服從別人指導」（接受一位你通常不會聽從的人的建議）→第7天「耐心包容他人難處」（對一個讓你不耐煩的人多一點耐心）。", scripture: "太五3「虛心（靈裡貧窮）的人有福了！因為天國是他們的。」", journalPrompt: "哪一級最困難？為什麼？你在攀爬的過程中發現了什麼關於自己的事？你是否感受到「越謙卑越自由」？" }
  ];

  const groupDiscussion = [
    { category: "💧 面對失落", questions: ["你生命中最大的失去是什麼？你是如何面對的——還是你其實從未真正面對？", "八種防護罩中你最常使用的是哪一種？可以分享一個具體的例子嗎？", "電影《凡夫俗子》中的貝絲「拒絕正視內心的痛苦以致喪失愛人的能力」——你是否認識有人像貝絲一樣？（或者你自己就是？）", "「要迎接黎明曙光最快的方法不是往西追逐太陽，而是往東走入黑暗」——這句話對你有什麼意義？"] },
    { category: "📖 約伯的智慧", questions: ["約伯的三位朋友說「你受苦是罪有應得」——你是否曾在教會中聽到類似的話（或者你自己說過）？", "五個悲傷階段中你目前在哪一個？你是否試圖跳過某個階段？", "「在混沌未明中忍耐等候」對你來說最大的挑戰是什麼？你如何抵擋「快速解決」的誘惑？", "約伯從「風聞」到「親眼看見」——你渴望這種轉變嗎？你覺得需要經歷什麼才能到達那裡？"] },
    { category: "🪜 謙卑與限制", questions: ["聖本篤的八級謙卑階梯中哪一級最讓你不舒服？為什麼？", "十種限制中你最難接受的是哪一個？你能否看到其中的禮物？", "施洗約翰說「祂必興旺我必衰微」——如果你是約翰你做得到嗎？", "作為小組我們可以如何創造安全的空間讓彼此真正悲傷——而不是急著給答案？"] }
  ];

  const reflections = [
    "我生命中有哪些失落是我從未真正面對過的？我用了什麼防護罩來逃避？",
    "我最常壓抑的情緒是什麼——悲傷？憤怒？恐懼？我為什麼不允許自己去感受它？",
    "在五個悲傷階段中，我目前卡在哪一個？我是否試圖跳過某個不舒服的階段？",
    "我最難接受的人生限制是什麼？我能否看到這個限制中隱藏的禮物？",
    "如果耶穌會哭泣、會憤怒、會說「我的神為什麼離棄我」，那我為什麼覺得這些感覺是不屬靈的？",
    "聖本篤的謙卑階梯上，我目前在第幾級？我願意繼續往上爬嗎？",
    "「要迎接黎明曙光最快的方法是往東走入黑暗」——我是否願意走入黑暗？"
  ];

  const actions = [
    "盤點你的失落：列出生命中所有經歷過的失去（大的和小的），為每一個辨識你使用的「防護罩」。",
    "讀約伯記1-2章和42章。注意開頭和結尾的巨大反差。在日記中寫下：約伯的旅程對我有什麼啟示？",
    "從十種限制中選出你最難接受的三個，為每一個寫下它帶來的禮物。默想約三27。",
    "選擇聖本篤謙卑階梯的一級，這週刻意操練。記錄你的經驗和感受。",
    "為你生命中一個重大的失落寫一首「哀歌」——不需要押韻，只需要真實。然後把它獻給神。",
    "如果你身邊有人正在經歷失去，不要給答案。只是陪伴和傾聽。說：「這真的很痛。我陪你。」"
  ];

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="space-y-8">

      {/* ========== 章節標題 ========== */}
      <div className="bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="relative">
          <div className="flex items-center gap-2 mb-2"><BookOpen className="w-5 h-5 text-blue-300" /><span className="text-blue-300 text-sm tracking-widest">第 5 章</span></div>
          <h1 className="font-extrabold mb-3" style={{fontSize:"30px"}}>藉悲傷與失落擴張生命境界</h1>
          <p className="text-blue-200 text-lg mb-4">接受自己的有限</p>
          <p className="text-slate-200 leading-relaxed mb-3" style={{fontSize:"17px"}}>本章透過約伯的故事、八種防護罩、五個合乎聖經的悲傷階段、十種人生限制、聖本篤的謙卑階梯——帶領我們學習用勇氣面對失去、用信心接受有限、讓虧損擴大生命的境界。</p>
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
            <p className="text-slate-200 leading-relaxed italic" style={{fontSize:"17px"}}>「靈性生活最大的災難就是與現實脫節。真正的靈性生活，不是逃避現實，而是徹底投入。」 <span className="text-blue-300 text-sm ml-1">(p.141)</span></p>
          </div>
        </div>
      </div>

      {/* ========== 所有人類的故事：失去 ========== */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><CloudRain className="w-6 h-6 text-blue-500" />所有人類的故事：我們在失去什麼？<span className="ml-2 text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded-full border border-slate-200">(p.142-143)</span></h3>
        <p className="text-slate-600 mb-4" style={{fontSize:"17px"}}>愛德華茲說，約伯的故事其實就是我們每個人的故事。一般人是用一輩子的時間慢慢失去所有，直到走完人生道路，留下一切，進入死亡：</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {lossTypes.map((l, i) => (
            <div key={i} className="bg-blue-50 rounded-xl p-4 border border-blue-100 flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">{l.icon}</span>
              <div><span className="font-bold text-blue-800" style={{fontSize:"15px"}}>{l.type}：</span><span className="text-slate-600" style={{fontSize:"15px"}}>{l.detail}</span></div>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 約伯 ========== */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 md:p-8 border border-amber-200 shadow-sm">
        <h3 className="font-bold text-amber-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><BookOpen className="w-6 h-6 text-amber-600" />約伯：當代比爾·蓋茲的故事<span className="ml-2 text-xs bg-amber-100 text-amber-600 px-2 py-1 rounded-full border border-amber-200">(p.143-145)</span></h3>
        <div className="space-y-3">
          {jobProfile.map((j, i) => (
            <div key={i} className={`rounded-xl p-4 border ${i === 2 ? 'bg-red-50 border-red-200' : 'bg-white border-amber-100'}`}>
              <span className={`font-bold ${i === 2 ? 'text-red-700' : 'text-amber-700'}`} style={{fontSize:"16px"}}>{j.aspect}：</span>
              <span className="text-slate-600" style={{fontSize:"16px"}}>{j.detail}</span>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-5 border border-amber-200 mt-4">
          <p className="text-amber-900 font-bold" style={{fontSize:"17px"}}>💡 慈愛良善的神，怎麼會對忠心耿耿的約伯下此毒手？他是無辜的。他並非罪有應得。他的遭遇讓人覺得很不公平。</p>
        </div>
      </div>

      {/* ========== 八種防護罩 ========== */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}><Shield className="w-6 h-6 text-slate-600" />卸下防護罩：八種逃避痛苦的方式<span className="ml-2 text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded-full border border-slate-200">(p.149-150)</span></h3>
        <p className="text-slate-500 mb-4" style={{fontSize:"16px"}}>小孩會直覺地豎起防護罩——這是健康的生存機制。但長大之後必須卸下，誠實面對事實：</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {defenseMechanisms.map((d, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-slate-200 hover:border-blue-200 transition-colors cursor-pointer" onClick={() => setOpenShield(openShield === i ? null : i)}>
              <div className="flex items-center gap-2 mb-1"><span className="text-xl">{d.icon}</span><span className="font-bold text-slate-800" style={{fontSize:"15px"}}>{d.mechanism}</span></div>
              <AnimatePresence>{(expandAll || openShield === i) && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <p className="text-slate-500 text-sm italic mt-2 bg-slate-50 p-3 rounded-lg">「{d.example}」</p>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 電影《凡夫俗子》 ========== */}
      <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-6 md:p-8 border border-rose-100 shadow-sm">
        <h3 className="font-bold text-rose-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><Heart className="w-6 h-6 text-rose-600" />{movieOrdinaryPeople.title}<span className="ml-2 text-xs bg-rose-100 text-rose-600 px-2 py-1 rounded-full border border-rose-200">(p.152-154)</span></h3>
        <p className="text-slate-600 mb-3 leading-relaxed" style={{fontSize:"17px"}}>{movieOrdinaryPeople.summary}</p>
        <div className="bg-white rounded-xl p-4 border border-rose-200 mb-3">
          <p className="text-slate-700 italic leading-relaxed" style={{fontSize:"16px"}}>{movieOrdinaryPeople.climax}</p>
        </div>
        <div className="bg-rose-100 rounded-xl p-4 border border-rose-200">
          <p className="text-rose-800 font-bold" style={{fontSize:"16px"}}>⚠️ {movieOrdinaryPeople.lesson}</p>
        </div>
      </div>

      {/* ========== 五個悲傷階段 ========== */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-indigo-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}><Layers className="w-6 h-6 text-indigo-600" />約伯示範的五個合乎聖經的悲傷階段<span className="ml-2 text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full border border-indigo-200">(p.150-163)</span></h3>
        <div className="space-y-3 mt-4">
          {fiveGriefStages.map((s, i) => (
            <div key={i} className="border border-indigo-100 rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer bg-indigo-50 hover:bg-indigo-100 transition-colors" onClick={() => setOpenStage(openStage === i ? null : i)}>
                <h4 className="font-bold text-indigo-800" style={{fontSize:"18px"}}>{s.num}. {s.title}</h4>
                {openStage === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>{(expandAll || openStage === i) && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <div className="px-5 pb-5 space-y-3 bg-white">
                    <p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>{s.detail}</p>
                    <div className="bg-blue-50 rounded-xl p-3 border border-blue-200"><p className="text-blue-700 text-sm font-medium">📖 {s.scripture}</p></div>
                    <p className="text-xs text-slate-400">{s.page}</p>
                  </div>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 十種限制 ========== */}
      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-6 md:p-8 border border-teal-100 shadow-sm">
        <h3 className="font-bold text-teal-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><Minus className="w-6 h-6 text-teal-600" />接受限制、視為禮物：十種人生限制<span className="ml-2 text-xs bg-teal-100 text-teal-600 px-2 py-1 rounded-full border border-teal-200">(p.156-158)</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {limitations.map((l, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-teal-100">
              <span className="font-bold text-teal-700" style={{fontSize:"15px"}}>{l.area}：</span>
              <span className="text-slate-600" style={{fontSize:"15px"}}>{l.detail}</span>
            </div>
          ))}
        </div>
        <div className="bg-teal-100 rounded-xl p-4 border border-teal-200 mt-4">
          <p className="text-teal-800 font-bold" style={{fontSize:"16px"}}>💡 施洗約翰：「若不是從天上賜的，人就不能得甚麼。」（約三27）「祂必興旺，我必衰微。」（約三30）——接受有限不是認輸，而是認清我們不是神。</p>
        </div>
      </div>

      {/* ========== 聖本篤的謙卑階梯 ========== */}
      <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl p-6 md:p-8 border border-amber-100 shadow-sm">
        <h3 className="font-bold text-amber-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><ArrowDown className="w-6 h-6 text-amber-600" />聖本篤的謙卑階梯：八級操練<span className="ml-2 text-xs bg-amber-100 text-amber-600 px-2 py-1 rounded-full border border-amber-200">(p.160-162)</span></h3>
        <div className="space-y-2">
          {humilityLadder.map((h, i) => (
            <div key={i} className={`rounded-xl p-4 border flex items-start gap-3 ${i === 7 ? 'bg-amber-100 border-amber-300' : 'bg-white border-amber-100'}`}>
              <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${i === 7 ? 'bg-amber-300 text-amber-900' : 'bg-amber-100 text-amber-700'}`}>{h.step}</span>
              <p className={`leading-relaxed ${i === 7 ? 'text-amber-900 font-bold' : 'text-slate-600'}`} style={{fontSize:"15px"}}>{h.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 神學深度探討 ========== */}
      <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-6 md:p-8 border border-violet-100 shadow-sm">
        <h3 className="font-bold text-violet-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}><BookMarked className="w-6 h-6 text-violet-600" />神學深度探討<span className="ml-2 text-xs bg-violet-100 text-violet-500 px-2 py-1 rounded-full border border-violet-200">延伸學習</span></h3>
        <div className="space-y-3 mt-4">
          {theologyTopics.map((topic, i) => (
            <div key={i} className="bg-white rounded-2xl border border-violet-100 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-violet-50 transition-colors" onClick={() => setOpenTheology(openTheology === i ? null : i)}>
                <h4 className="font-bold text-violet-800" style={{fontSize:"18px"}}>{topic.title}</h4>
                {openTheology === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>{(expandAll || openTheology === i) && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <div className="px-5 pb-5 space-y-3">
                    <p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>{topic.content}</p>
                    <div className="bg-violet-50 rounded-xl p-4 border border-violet-100"><div className="font-bold text-violet-700 mb-2" style={{fontSize:"15px"}}>📖 相關經文：</div>{topic.scriptures.map((s: string, j: number) => (<p key={j} className="text-slate-600 text-sm mb-1.5">{s}</p>))}</div>
                    <div className="bg-amber-50 rounded-xl p-4 border border-amber-200"><div className="font-bold text-amber-700 mb-1" style={{fontSize:"15px"}}>💬 反思：</div><p className="text-slate-600" style={{fontSize:"16px"}}>{topic.reflection}</p></div>
                  </div>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 在我們的處境中 ========== */}
      <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-6 md:p-8 border border-orange-100 shadow-sm">
        <h3 className="font-bold text-orange-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}><Heart className="w-6 h-6 text-orange-600" />在我們的處境中<span className="ml-2 text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full border border-orange-200">生活應用</span></h3>
        <div className="space-y-3 mt-4">
          {taiwanExamples.map((ex, i) => (
            <div key={i} className="bg-white rounded-2xl border border-orange-100 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-orange-50 transition-colors" onClick={() => setOpenTaiwan(openTaiwan === i ? null : i)}>
                <h4 className="font-bold text-orange-800" style={{fontSize:"18px"}}>{ex.title}</h4>
                {openTaiwan === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>{(expandAll || openTaiwan === i) && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <div className="px-5 pb-5 space-y-3">
                    <div className="bg-orange-50 rounded-xl p-4 border border-orange-100"><div className="font-bold text-orange-700 mb-2" style={{fontSize:"15px"}}>📍 情境：</div><p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>{ex.scenario}</p></div>
                    <div className="bg-green-50 rounded-xl p-4 border border-green-200"><div className="font-bold text-green-700 mb-1" style={{fontSize:"15px"}}>🎯 挑戰：</div><p className="text-slate-600" style={{fontSize:"16px"}}>{ex.challenge}</p></div>
                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-200"><div className="font-bold text-blue-700 mb-1" style={{fontSize:"15px"}}>💡 回扣本書：</div><p className="text-slate-600" style={{fontSize:"16px"}}>{ex.insight}</p></div>
                  </div>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 四週挑戰 ========== */}
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-6 md:p-8 border border-indigo-100 shadow-sm">
        <h3 className="font-bold text-indigo-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}><Target className="w-6 h-6 text-indigo-600" />四週操練挑戰</h3>
        <div className="space-y-3 mt-4">
          {weeklyChallenge.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-indigo-100 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-indigo-50 transition-colors" onClick={() => setOpenChallenge(openChallenge === i ? null : i)}>
                <div className="flex items-center gap-3"><span className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-700 font-bold text-sm">{item.week.slice(-2)}</span><h4 className="font-bold text-indigo-800" style={{fontSize:"18px"}}>{item.title}</h4></div>
                {openChallenge === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>{(expandAll || openChallenge === i) && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <div className="px-5 pb-5 space-y-3">
                    <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100"><div className="font-bold text-indigo-700 mb-2" style={{fontSize:"15px"}}>🎯 任務：</div><p className="text-slate-600" style={{fontSize:"16px"}}>{item.mission}</p></div>
                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-200"><div className="font-bold text-blue-700 mb-1" style={{fontSize:"15px"}}>📖 經文：</div><p className="text-slate-600" style={{fontSize:"16px"}}>{item.scripture}</p></div>
                    <div className="bg-amber-50 rounded-xl p-4 border border-amber-200"><div className="font-bold text-amber-700 mb-1" style={{fontSize:"15px"}}>📓 日記：</div><p className="text-slate-600" style={{fontSize:"16px"}}>{item.journalPrompt}</p></div>
                  </div>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 小組討論 ========== */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-sm">
        <h3 className="font-bold text-emerald-800 mb-6 flex items-center gap-2" style={{fontSize:"24px"}}><MessageSquareQuote className="w-6 h-6 text-emerald-600" />小組討論問題<span className="ml-3 bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full font-normal border border-emerald-200" style={{fontSize:"13px"}}>小組使用</span></h3>
        <div className="space-y-6">
          {groupDiscussion.map((section, i) => (
            <div key={i}><h4 className="font-bold text-emerald-700 mb-3 flex items-center gap-2" style={{fontSize:"20px"}}><span className="w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-800 font-bold" style={{fontSize:"14px"}}>{i+1}</span>{section.category}</h4>
              <div className="space-y-2 ml-10">{section.questions.map((q: string, j: number) => (<div key={j} className="bg-white rounded-xl p-4 border border-emerald-100"><p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>{q}</p></div>))}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 本章總結 ========== */}
      <div className="bg-gradient-to-br from-teal-50 to-slate-50 border border-teal-100 rounded-3xl p-6 md:p-8">
        <h3 className="font-bold text-teal-700 mb-4" style={{fontSize:"22px"}}>📝 第五章總結：悲傷是通往生命的門</h3>
        <div className="space-y-3">
          <div className="bg-blue-50 border-blue-200 border rounded-xl p-4"><div className="font-bold text-blue-700 mb-1.5" style={{fontSize:"17px"}}>💧 六種失去 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.142-143</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>青春、夢想、穩定、重大失去、無能為力的失去、謬誤的神觀與教會觀。我們用一輩子的時間慢慢失去所有。</p></div>
          <div className="bg-amber-50 border-amber-200 border rounded-xl p-4"><div className="font-bold text-amber-700 mb-1.5" style={{fontSize:"17px"}}>📖 約伯的故事 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.143-163</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>當代比爾·蓋茲在一個上午失去一切。他的五個悲傷階段：正視負面情緒→在混沌中等候→接受限制→攀爬謙卑階梯→從舊我長出新生命。結果：「耶和華賜給約伯的比從前所有的加倍。」</p></div>
          <div className="bg-slate-100 border-slate-300 border rounded-xl p-4"><div className="font-bold text-slate-700 mb-1.5" style={{fontSize:"17px"}}>🛡️ 八種防護罩 + 十種限制 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.149-159</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>我們用各種方式逃避痛苦（否認、淡化、自責、合理化……），但長大之後必須卸下防護罩。接受身體、家庭、才能、時間等限制是通往謙卑的門。</p></div>
          <div className="bg-emerald-50 border-emerald-200 border rounded-xl p-4"><div className="font-bold text-emerald-700 mb-1.5" style={{fontSize:"17px"}}>🪜 謙卑階梯 + 新生命 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.159-163</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>聖本篤的八級操練從「時時敬畏神」到「生命被改變進入神的愛」。真實的死亡之後才有復活——虧損是真實的，神也是真實的。</p></div>
        </div>
      </div>

      {/* ========== 反思與行動 ========== */}
      <div className="bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-800 shadow-lg text-white">
        <h3 className="font-bold text-orange-300 mb-6 flex items-center" style={{fontSize:"27px"}}><Brain className="w-7 h-7 mr-3" />深度反思與行動指南</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="font-bold text-orange-200 mb-4 flex items-center" style={{fontSize:"22px"}}><Brain className="w-5 h-5 mr-2 text-orange-400" /> 反思問題</h4>
            <ul className="space-y-4 text-slate-300">{reflections.map((r, i) => (<li key={i} className="flex items-start" style={{fontSize:"16px"}}><span className="text-orange-400 mr-2 font-bold">{i+1}.</span> {r}</li>))}</ul>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
            <h4 className="font-bold text-emerald-300 mb-4 flex items-center" style={{fontSize:"22px"}}><Target className="w-5 h-5 mr-2 text-emerald-400" /> 具體行動方案</h4>
            <ul className="space-y-4 text-slate-300">{actions.map((a, i) => (<li key={i} className="flex items-start" style={{fontSize:"16px"}}><span className="text-emerald-400 mr-2 font-bold">{i+1}.</span> {a}</li>))}</ul>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
}
