import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, BookOpen, ChevronDown, ChevronUp, Target, Brain, Lightbulb, MessageCircle, AlertTriangle, Sparkles, Eye, Shield, Users, Search, MessageSquareQuote, Layers, Flame, Church, CalendarCheck, BookMarked } from 'lucide-react';

export default function Chapter1() {
  const [openSymptom, setOpenSymptom] = useState<number | null>(null);
  const [openTheology, setOpenTheology] = useState<number | null>(null);
  const [openChallenge, setOpenChallenge] = useState<number | null>(null);
  const [openTaiwan, setOpenTaiwan] = useState<number | null>(null);

  const poolStory = [
    { phase: "邀請", detail: "作者在另一間教會講道時認識了約翰和蘇珊。在一個潮濕悶熱的七月主日，他們從康乃狄克州開車來訪，連續參加了三堂崇拜。約翰表示很想私下跟作者和太太潔芮聊聊。" },
    { phase: "違心的答應", detail: "作者其實很累，但心想萬一拒絕，他們回去不曉得會怎麼跟他們的牧師說？「他們牧師是我的朋友，我很在乎他會怎麼想。」於是說了一句違心話：「沒問題，潔芮會很高興跟你們聊聊。」" },
    { phase: "煎熬的下午", detail: "約翰一直說、一直說、一直說。作者完全插不上話。他滔滔不絕，講上帝、講生活、講事業。作者表面假裝專心在聽，裡面卻很憤怒，又覺得不該憤怒。他覺得應該讓他們覺得自己很親切、很好客。" },
    { phase: "潔芮的不滿", detail: "趁空檔時潔芮壓低嗓子：「彼得，你怎麼可以這樣？你不陪我，也不陪孩子。」作者頹喪地看著她，指望可憐兮兮的模樣能博得同情。可是並沒有。" },
    { phase: "費思站在泳池裡！", detail: "「費思呢？怎麼那麼久沒聽到她聲音？」——費思是他們三歲的女兒。潔芮衝去找，客廳、臥室、地下室都不見人影。一股恐懼緊緊攫住他們：游泳池！他們衝到後院，看到最不想看到的畫面。" },
    { phase: "千鈞一髮", detail: "費思就站在泳池正中央，背對著他們。三歲的女兒踮起腳尖站在水裡，水深剛好到她下巴。只要一個踉蹌，她的命就沒了。瞬間，他們覺得老了五歲。她是在池邊爬上爬下時滑進水裡的，天曉得她在那裡站了多久。" },
    { phase: "深層反思", detail: "「問題不在約翰，而是在我。表面上我親切、和善、有耐性，骨子裡卻完全不是那麼一回事。為了建立『好基督徒』的光鮮形象，我把自己隔絕在內心世界之外。那些門徒訓練和屬靈追求，並沒有真正觸碰到我內心深處的傷口和罪惡模式。」(p.010-011)" }
  ];

  const doorTrainingAttempts = [
    { attempt: "查經班", thought: "多開查經班，查考聖經才能改變人。心思意念被更新了，生命自然會改變。" },
    { attempt: "小組生活", thought: "鼓勵大家更投入小組、更深入群體生活，問題就解決了！" },
    { attempt: "禱告", thought: "只有聖靈大能才能帶來深刻的改變。這只能靠禱告。不禱告，神就不動工。" },
    { attempt: "屬靈爭戰", thought: "生命看不到真實的改變，是因為沒有去對抗撒但權勢。靠耶穌的權柄禱告，就能脫離捆綁。" },
    { attempt: "敬拜", thought: "藉著敬拜深入神的同在裡，人就會改變。" },
    { attempt: "服事", thought: "做在弟兄中一個最小的身上，就是做在基督身上。鼓勵大家去服事，他們就會改變。" },
    { attempt: "先知性", thought: "需要有能聽見神聲音、有先知性眼光的人，才能破除看不見的鎖鏈。" },
    { attempt: "恩典神學", thought: "問題出在沒有從神的福音去認識祂的恩典。天天灌輸這些道理，自然就會改變。" }
  ];

  const symptoms = [
    { num: 1, title: "利用神來逃避神", icon: "🎭", summary: "在所有致命病毒裡，這一隻藏得最好。從外表看一切都很好，但事實並非如此。", details: "做神的工是為了滿足自己；以神之名做些祂沒有要做的事；求神達成「我的」心願；故意在重要人士面前表現「基督徒行為」；用聖經真理論斷並貶低他人；誇大聖工成就暗地與人較勁；選擇性地拿聖經真理為自己背書拒絕做出重大改變。", example: "約翰的例子：從姊妹上教會的裙子長度到政治候選人的性別，他都利用神來為各種主張背書。他喜歡捕風捉影、不仔細傾聽。面對反彈，以錯誤方式引用經文說服自己是在做神的工。(p.023-024)", page: "p.022-024" },
    { num: 2, title: "漠視憤怒、哀傷和恐懼", icon: "😶", summary: "許多基督徒認為這些都是罪。「憤怒很危險」「悲傷代表信心不足」「恐懼就更不應該了」。", details: "我們用虛假自信膨脹自我，驅趕感覺。引用經文自我砥礪、背經文。但把感覺切斷了，如何聆聽神的聲音？作者用「火車頭」比喻：事實→信心→感覺（最不可靠）。這種偏頗認知會貶低人存在的價值，讓人性變麻木。否認感覺無異扭曲我們身為神形像承載者的意義。", example: "作者多年來的做法：憤怒時第一個動作就是引用經文壓制——「別生氣，神掌權。」結果感覺被壓抑但從未被處理，最終在家庭和事工中「洩漏出來」。(p.025-026)", page: "p.024-026" },
    { num: 3, title: "治死的對象錯誤", icon: "✂️", summary: "愛任紐說：「一個人活出完整的自己，就能展現神的榮光。」但我們常把好的部分也治死了。", details: "耶穌說「若有人要跟從我，就當捨己」——但若直接套用而沒有參考其他經文，就會走向狹隘神學：「越受苦神越愛你。」所謂捨己是要向罪死。神沒有要我們向友誼、喜樂、藝術、音樂、美麗、休閒、歡笑、大自然死。成聖的重要部分是讓聖靈拆除錯誤結構，讓真實的我顯現。", example: "每次問：「你有什麼願望和夢想？」對方通常答不出來，甚至反問：「我的願望和夢想不是應該只有一個嗎？那就是服事主。」——成為基督徒不代表要變成「無我」。(p.027)", page: "p.026-027" },
    { num: 4, title: "否認過去對現在的影響", icon: "🔗", summary: "信主後以為「舊事已過，都變成新的了」——但原生家庭的影響如影隨形。", details: "作者和潔芮第一次畫家族樹時目瞪口呆——他們對性別角色定義、處理怒氣衝突的方式、對成功的解釋、對家庭性愛悲傷的看法，竟然和父母婚姻如出一轍。雖然信主近二十年，在相處模式中原生家庭的痕跡還是比較多，至於神為新家庭所存的心意，相較之下並不明顯。", example: "作者的家庭：義裔美國人，父親烘焙師沒日沒夜工作，母親常年憂鬱症。哥哥十六歲加入統一教，父母十年不准他進家門。這些創傷並未因信主而自動消失。花了快二十年才逐漸恢復。(p.011-013)", page: "p.027-029" },
    { num: 5, title: "把生活劃分成「世俗」和「神聖」", icon: "⚖️", summary: "蓋洛普民調顯示，福音派基督徒和世人無異：崇尚享樂主義、以自我中心。", details: "法蘭克在教會稱頌神的慈愛，開車回家路上咒罵其他駕駛。肯恩靈修後一整天把神拋到九霄雲外。統計：教會離婚率與鄰舍相當、家暴頻率相當、金錢態度與非基督徒無異、最無法接受不同種族鄰居的反而是白人福音派。安琪拉問：「為什麼有那麼多基督徒是爛人？」", example: "賽德在《丟人現眼的福音派》中說：「無論是婚姻性行為，或使用金錢和照顧窮人上，現代福音派的態度完全背離聖經，實在很丟人。」(p.030-031)", page: "p.029-031" },
    { num: 6, title: "以為神做工取代與神同工", icon: "🏃", summary: "「做主工就代表靈命有長進」「堅持下去否則事工就會垮掉」「不禱告神就不動工」。", details: "如果沒有親近神讓內在生活獲得養分，為神所做的遲早會被自我、權力、企求認可所玷汙。我們變成human doings而非human beings。價值感從「神無條件愛我們」轉移到工作和表現，在基督裡的喜樂也漸漸消失。我們沒有的東西就沒有辦法給出去。", example: "作者坦承過去認為隱居修士「不是真基督徒」，覺得他們在逃避現實——「難道他們不曉得做工的人少嗎？」但到頭來，沒有神同在的生命，所行出來的自然也不會是為神做的。(p.031-032)", page: "p.031-032" },
    { num: 7, title: "用屬靈的藉口逃避衝突", icon: "🕊️", summary: "從耶穌身上可以看到，健康的基督徒不會避免衝突。祂渴望帶來真正的和平。", details: "面對衝突的錯誤反應：說一套做一套、輕易做無法兌現的承諾、怨天尤人、攻擊別人、發動冷戰、冷嘲熱諷、委屈自己、用不委婉的email發洩、只說部分事實避重就輕、心口不一、逃避退縮斷絕來往、找不相干的人訴苦。耶穌會刻意打破虛假的和平，祂拒絕用屬靈藉口逃避衝突。", example: "多數原生家庭不會用成熟方式解決衝突，所以我們很習慣把不舒服的心情放在心裡。信主後立志成為「和平之子」——結果卻學會了欺騙。(p.033-034)", page: "p.033-034" },
    { num: 8, title: "掩蓋生命的殘破、軟弱和失敗", icon: "🎪", summary: "大衛不但沒有隱瞞失敗，反而將它記錄在歷史書，還寫成詩歌在敬拜中唱誦。", details: "大衛知道「神所要的祭就是憂傷的靈」（詩51:17）。保羅為他身上的刺感謝神，基督的能力在人的軟弱上顯得完全。聖經不掩飾人物軟弱：摩西殺人、彼得否認主、挪亞喝醉、約拿種族歧視、雅各愛說謊、以利亞筋疲力竭、耶利米愛操煩、多馬疑心病重。每個人都是軟弱的，需要神也需要人。", example: "作者曾懷疑天賦不凡的人是否和一般人不同。但現在知道不是：他們也渾身缺點，生命也是千瘡百孔。(p.034-035)", page: "p.034-035" },
    { num: 9, title: "無法設立界線", icon: "🚧", summary: "「我聽他講電話講了兩個小時，但還是無法使他感到滿足。」", details: "我們不是神，不可能服事每一個需要幫助的人。保羅說「凡事都能做」之前是在勉勵我們要知足。耶穌沒有醫治每一個病人、沒有叫每一個死人復活、沒有讓每一個乞丐都有東西吃。巴默爾說：「照顧自己從來就不是自私，而是妥善管理我手上唯一的禮物——也是神安排我來世上要送給人的禮物。」", example: "朋友抱怨：「聽他講電話講了兩個小時還無法滿足，真的很想躲起來。」這種罪惡感久了就會變成灰心，最後開始和有需要的人保持距離。(p.036)", page: "p.036-037" },
    { num: 10, title: "論斷他人的靈命進程", icon: "👨‍⚖️", summary: "我們不允許別人在神面前作自己，看別人不一樣就把不舒服的感覺投射到他們身上。", details: "我們批評長老會太僵硬、五旬節派不夠紀律、聖公會太愛點蠟燭。不斷把人分門別類：「搞藝術的都瘋瘋癲癲」「讀工程的太冷漠」「男人都白癡」「女人太情緒化」「有錢人太放縱」「窮人都很懶惰」。最後因為無法把他們變得和我們一樣就漠不關心。有時候冷漠比仇恨還可怕。", example: "沙漠修士說：「修士必須向鄰舍死，無論如何不能論斷他。如果你忙著處理自己的過錯，哪會有時間去關注鄰舍？」(p.037-039)", page: "p.037-040" }
  ];

  const icebergLevels = [
    { level: "水面上 10%：別人看得見的", items: ["行為表現與外在改變", "規律上教會、加入群體", "「清潔自己」改掉壞習慣", "開始禱告、讀經、服事", "表現得更和善、值得尊敬"], color: "bg-sky-100 border-sky-300", icon: "☀️" },
    { level: "水面下 90%：隱藏的內心世界", items: ["未處理的憤怒、哀傷和恐懼", "原生家庭代代相傳的傷痛模式", "對安全感和被愛的深層渴望", "隱藏的羞愧感和自我形象", "扭曲的神觀（把神當苛刻的老闆）", "在關係中反覆出現的不健康模式", "未曾面對的童年創傷與失落", "對權力、認可和成就的執著"], color: "bg-indigo-100 border-indigo-300", icon: "🌊" }
  ];

  const theologyTopics = [
    { title: "情感與靈性：為何不可分割？", content: "聖經從未將人的情感與靈性切割開來。神按自己的形像造人（創1:27），這個形像包含五個層面：身體、靈性、情感、智力和人際（p.020）。詩篇中有三分之二是哀歌，坦率表達憤怒、悲傷、恐懼和困惑。耶穌在客西馬尼園「極其難過，幾乎要死」（太26:38）；在十字架上引用詩篇22篇；在拉撒路墳前哭泣（約11:35）；看到聖殿被褻瀆時發怒（可11:15-17）。如果連耶穌都會經歷這些情感，我們憑什麼認為它們是「不屬靈」的？", scriptures: ["創1:27 神就照著自己的形像造人", "詩42:5 我的心哪，你為何憂悶？", "太26:38 我心裡甚是憂傷，幾乎要死", "約11:35 耶穌哭了", "可3:5 耶穌怒目周圍看他們，憂愁他們的心剛硬"], reflection: "如果連耶穌都會悲傷、憤怒和恐懼，我們為什麼認為這些感覺是「不屬靈」的？我們是在效法哪個耶穌——那位真實表達情感的，還是我們自己創造的「永遠微笑的耶穌」？" },
    { title: "「舊事已過」的正確解讀：稱義 vs. 成聖", content: "哥林多後書5:17常被誤用。保羅的重點是我們在基督裡有了新的身分和地位（稱義），而非過去的創傷和模式會自動消失。稱義是一次性法律宣告；成聖卻是持續的過程。保羅自己承認「我所願意的善我反不做」（羅7:19），在腓3:12說「不是說我已經得著了」。如果連使徒保羅都在「過程中」，我們怎能假裝信主那一刻一切就完美了？成聖會迫使我們面對過去——不是為了沉溺痛苦，而是讓基督的光照進黑暗角落。", scriptures: ["腓3:12-14 這不是說我已經得著了，已經完全了", "羅7:19 我所願意的善，我反不做", "加5:16-17 情慾和聖靈相爭", "來12:1 放下各樣的重擔，脫去容易纏累我們的罪"], reflection: "你是否曾用「舊事已過」來迴避面對過去的傷痛？「忘記背後」是否意味著假裝過去不存在，還是指不讓過去定義我們的未來？" },
    { title: "門徒訓練的整全觀：從「冰山上」到「冰山下」", content: "傳統門訓側重知識傳遞和行為改變——但這些幾乎都停留在冰山水面上。耶穌的門訓卻是全人的：祂與門徒一起生活三年（可3:14），在暴風雨中暴露他們的恐懼（可4:40），在爭論誰為大時處理驕傲（可10:35-45），在彼得三次不認主後恢復他（約21:15-19）。本書作者嘗試了八種門訓方法，每種都有聖經依據也有功效——但到頭來都不夠。原因：這些操練有時反而變成阻力，讓人有「進步」的感覺就有了拒絕在情感上長大的屬靈藉口。", scriptures: ["可3:14 設立十二人要他們常與自己同在", "可4:40 為甚麼膽怯？你們還沒有信心嗎？", "約21:17 你愛我嗎？——耶穌問的不是神學問題而是關係問題"], reflection: "你所經歷的門訓是否觸碰到冰山水面下的世界？如果有人問你「你好嗎？」你是否能給出比「感謝主，很好」更真實的回答？" },
    { title: "人的完整性神學：五個層面缺一不可", content: "神按著祂的形像造人，包含肉體、靈性、情感、智力和人際五個層面（p.019-020）。任一部分沒有受到妥善照料，就會對與神、與人、與自己的關係產生負面影響。作者用自閉症的孩子類比：身心障礙的缺陷容易看出來，但情感發育不良就沒那麼明顯，通常得等到時間久了真實的一面才會浮現。在積極追求主的十七年中，「情感的部分」完全被晾在一旁——沒有任何語言、神學或訓練能幫助到他。", scriptures: ["帖前5:23 願你們的靈與魂與身子得蒙保守", "可12:30 你要盡心、盡性、盡意、盡力愛主——你的神——四個「盡」指向人的完整性"], reflection: "在五個層面中，哪個是你最容易忽略的？你的教會或小組在哪些層面投入最多？哪些幾乎沒有涉及？" }
  ];

  const taiwanExamples = [
    { title: "🏠 華人家庭中的「報喜不報憂」", scenario: "「家醜不可外揚」是根深蒂固的觀念。許多基督徒即使在小組中也不敢分享真實掙扎——婚姻張力、教養無力、工作壓力、信仰懷疑——因為怕被論斷、怕丟臉。甚至在牧師面前也只敢說「感謝主，都很好」。結果每個人都以為只有自己有問題，別人都很屬靈。", challenge: "下次小組聚會嘗試分享一個真實的掙扎：「最近我在……方面有點掙扎」。觀察：真實的分享往往會帶動其他人也願意敞開。", insight: "作者在約翰和蘇珊面前假裝一切都好，結果女兒差點溺水。華人教會中類似的「假裝」無處不在——我們的「女兒」（真實的關係和靈命）也正在「溺水」。" },
    { title: "⛪ 教會中的「超級基督徒」壓力", scenario: "服事越多、禱告越長、聚會越勤就被視為越屬靈。牧師和領袖被期待要「剛強」不能表現軟弱。一位師母曾說：「我已經很久沒有哭過了，因為師母不應該哭。」結果是服事者疲於奔命卻不敢喊累，情感問題累積到爆發——憂鬱、倦怠、甚至離開教會。", challenge: "如果你在教會有服事，這週練習對一件事說「不」——不是因為懶，而是承認自己的有限。觀察自己說「不」時的內心感受：是自由？還是罪惡感？那個罪惡感從何而來？", insight: "本書把「以為神做工取代與神同工」列為十大症狀之一。在台灣教會中這問題尤其嚴重：我們常把「很忙」等同於「很屬靈」。但耶穌沒有醫治所有病人——祂也會休息、退到曠野禱告。" },
    { title: "🗣️ 華人教會中的「和諧至上」文化", scenario: "「以和為貴」在教會更是如此。許多弟兄姊妹即使有強烈不同意見也選擇沉默、私下抱怨或背後談論，而不是正面溝通。結果是表面和諧暗地充滿張力：「我覺得牧師的決定不對但我不敢說」「那個弟兄老是遲到但沒人敢跟他談」「姊妹的教養方式我很擔心但說了怕傷感情」。", challenge: "找一個你一直想說但不敢說的意見，用溫和但誠實的方式表達：「我有一個不同觀點，不知道你願不願意聽聽看？」觀察：說出真話後關係是更近還是更遠？", insight: "耶穌不斷打破虛假的和平來帶來真正的和平。祂跟法利賽人、門徒、甚至家人起衝突。華人教會需要學習「用愛心說誠實話」（弗4:15），而不是把沉默和迴避當作和睦。" },
    { title: "🎓 台灣教育文化下的「表現導向」信仰", scenario: "台灣教育文化高度重視成績和表現。許多基督徒從小養成用表現換取認可的習慣，不自覺地帶進信仰——讀完幾遍聖經、背了多少經文、帶了多少人信主都成了衡量靈命的「成績單」。結果信仰變成另一個需要「表現好」的領域，而不是可以安息的關係。", challenge: "這一週嘗試在禱告中不「報告」任何事。不跟神報告你做了什麼要做什麼。只是安靜坐在祂面前什麼都不做什麼都不說，允許自己「無所事事」地在神面前待五分鐘。觀察：這讓你覺得自由還是焦慮？", insight: "本章的試探1「我的行為等於我」和症狀6「以為神做工取代與神同工」在台灣教育文化中特別容易出現。我們從小被訓練成achievement machine，很自然把這模式帶進信仰。但神不是用你的靈修紀錄來愛你的。" },
    { title: "👨‍👩‍👧‍👦 原生家庭的「情感遺產」", scenario: "在華人家庭中情感表達往往被壓抑。「男兒有淚不輕彈」「女孩子不要動不動生氣」「哭什麼哭？有什麼好哭的？」——這些話語深深刻在許多人記憶中。結果許多基督徒長大後不知道如何處理情感，也不知道如何在親密關係中真實表達。他們把原生家庭的情感模式帶進教會用同樣方式壓抑和迴避。", challenge: "回想你的原生家庭：憤怒如何被處理？悲傷呢？恐懼呢？寫下你家裡的「不成文規定」（例如「我們家不談這種事」「不要讓別人知道」），然後問自己：這些規定還在影響我現在的信仰生活嗎？", insight: "作者花了快二十年才逐漸從原生家庭的影響中恢復。他的父親雖然是教會裡最有信仰火花的人，但在扮演父親丈夫的角色時反映的是原生家庭的文化，不是耶穌新家庭的文化。這洞見對華人基督徒特別重要。" }
  ];

  const weeklyChallenge = [
    { week: "第一週", title: "情感日記操練", mission: "每天花10分鐘安靜，用日記記錄當天情感狀態。不加「屬靈包裝」不評判對錯。如實記錄：「今天我覺得……因為……」。特別注意通常會壓抑的感覺。記錄身體反應：胃有沒有打結？肩膀有沒有緊繃？頭有沒有痛？", scripture: "詩139:23-24「神啊，求你鑒察我，知道我的心思；試煉我，知道我的意念。」", journalPrompt: "每天記錄：(1)最強烈的情緒是什麼？(2)出現在什麼情境？(3)通常如何處理？(4)是否允許自己「感受」還是立刻壓抑？(5)把這感覺帶到神面前會對祂說什麼？" },
    { week: "第二週", title: "冰山探索與家族影響", mission: "畫一座冰山。水面上寫下別人看得見的你（行為、形象、角色、服事），水面下寫下隱藏的你（恐懼、渴望、傷痛、未說出口的期待）。然後畫簡單家族樹：祖父母和父母，用兩三個形容詞描述每人和他們的關係。帶著這兩幅畫到神面前禱告。", scripture: "耶17:9-10「人心比萬物都詭詐……我耶和華是鑒察人心、試驗人肺腑的。」", journalPrompt: "冰山水面下最讓你驚訝的發現是什麼？你願意讓耶穌觸碰冰山的哪個部分？在家族樹中你看到哪些正在重複的模式？" },
    { week: "第三週", title: "十大症狀深度自我檢測", mission: "重新閱讀十大症狀，為每項打分（1-5分，5代表「非常符合我」）。選得分最高的兩項，具體寫下它們在生活中的表現（什麼時候、什麼情境、跟誰在一起時最容易出現）。找一位信任的朋友分享發現，請他們誠實回饋：「你覺得我這個評估準確嗎？你看到的我是怎樣的？」", scripture: "詩51:6「你所喜愛的是內裡誠實；你在我隱密處必使我得智慧。」", journalPrompt: "得分最高的症狀是什麼？最常出現在哪些情境？背後的根源可能是什麼（原生家庭？文化壓力？恐懼？）？朋友的回饋讓你有什麼感受？" },
    { week: "第四週", title: "真實的禱告——向詩篇學習", mission: "這週禱告不用「套路」。每天讀一篇哀歌詩篇（建議：詩13、22、42、88、137），讓詩人的真實感受引導禱告。如果你生氣就對神說生氣。如果困惑就說困惑。詩88篇被稱為「聖經中最黑暗的詩篇」——從頭到尾沒有光明結尾，但仍被收錄在聖經中。這告訴我們：神允許我們在祂面前如此真實。", scripture: "詩13:1-2「耶和華啊，你忘記我要到幾時呢？要到永遠嗎？你掩面不顧我要到幾時呢？」", journalPrompt: "誠實表達「不好」的感覺時感受到什麼？神的同在是否有不同質感？你是否發現誠實的禱告比「正確」的禱告更能讓你感受到與神的連結？" }
  ];

  const groupDiscussion = [
    { category: "🧊 冰山的啟示", questions: ["如果你的生命是一座冰山，水面下隱藏著什麼是你最不想讓人看到的？你願意在小組中分享嗎？", "在你的信仰經驗中，哪些屬靈操練觸碰到了冰山水面下的世界？哪些完全沒有？", "作者說「心靈的底層卻動也不動，絲毫不受影響」——你是否有類似經歷？信主多年但某些內在模式一直沒有改變？"] },
    { category: "🎭 十大症狀的對照", questions: ["十大症狀中哪個最像在描述你？可以分享具體例子嗎？", "你是否曾「利用神來逃避神」——用屬靈活動逃避面對內心問題？", "在我們的小組或教會中，是否有「用屬靈藉口逃避衝突」的現象？我們如何能更真實？", "「治死的對象錯誤」——你是否曾把某些健康的欲望和夢想視為「不夠屬靈」而壓抑？"] },
    { category: "📖 經文與神學", questions: ["讀詩篇88篇（全篇）。你對這首詩有什麼感受？這種「沒有光明結尾」的禱告是否合乎信仰？", "耶穌在客西馬尼園說「我心裡甚是憂傷幾乎要死」——如果你的牧師在講台上說出這句話你會有什麼反應？", "「舊事已過都變成新的了」——讀完這一章之後你的理解是否有改變？"] },
    { category: "🌱 邁向改變", questions: ["如果要為這一章選一句座右銘你會選哪句？為什麼？", "什麼力量讓你一直停留在情感不健康的靈性中——恐懼？習慣？缺乏榜樣？文化壓力？", "作為小組我們如何創造「安全空間」讓彼此能談論冰山水面下的事？"] }
  ];

  const reflections = [
    "我的屬靈生活是否有「冰山效應」——表面看起來不錯但底層停滯不前？",
    "我在什麼情境下最容易「戴面具」？是在教會？在家？在職場？在小組裡？",
    "我是否把「很忙地服事神」當作迴避面對自己的藉口？忙碌是出於呼召還是出於逃避？",
    "如果耶穌今天坐在我面前問我「你真的好嗎？」——不是社交問候而是真的想知道——我會怎麼回答？",
    "我的原生家庭用什麼方式處理憤怒、悲傷和恐懼？這些方式如何影響我現在的信仰生活？",
    "在十大症狀中得分最高的是哪一項？我願意讓神觸碰這個領域嗎？",
    "我上一次在神面前真正哭泣、真正憤怒、真正表達困惑是什麼時候？如果很久沒有，為什麼？"
  ];

  const actions = [
    "本週找15分鐘寫「情感日記」：誠實記錄感受不加屬靈濾鏡。注意身體訊號。",
    "選十大症狀中得分最高的一項，找信任的朋友面對面分享（不是用LINE）。",
    "下次禱告時對神說出最真實的感覺。可用詩13篇或88篇作為禱告範本。",
    "觀察本週在哪些時候「為神做工」vs.「與神同工」。特別注意動機：是出於愛還是責任和恐懼？",
    "畫簡單的家族樹，用兩三個形容詞描述父母和他們的關係。問自己：這些模式是否還在影響我？",
    "讀詩88篇，然後寫一首你自己的「哀歌」——對神說出你最真實的心聲。"
  ];

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="space-y-8">

      {/* ========== 章節標題 ========== */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-800 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="relative">
          <div className="flex items-center gap-2 mb-2"><BookOpen className="w-5 h-5 text-indigo-300" /><span className="text-indigo-300 text-sm tracking-widest">第 1 章</span></div>
          <h1 className="font-extrabold mb-3" style={{fontSize:"30px"}}>情感不健康的靈性問題</h1>
          <p className="text-indigo-200 text-lg mb-4">有些事會錯得離譜</p>
          <p className="text-slate-200 leading-relaxed mb-3" style={{fontSize:"17px"}}>本章透過作者的親身經歷——女兒差點溺水的驚險事件、妻子的最後通牒、多年嘗試不同門訓方式的挫敗——層層剝開情感不健康靈性的十大症狀，並指出唯一的解藥：結合情感健康與默觀靈修。</p>
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
            <p className="text-slate-200 leading-relaxed italic" style={{fontSize:"17px"}}>「基督徒的靈性，若缺少健康的情感，對自己、與神和與人的關係都會帶來危害。我知道，因為我大半輩子都是如此。」 <span className="text-indigo-300 text-sm ml-1">(p.007)</span></p>
          </div>
        </div>
      </div>

      {/* ========== 開場故事 ========== */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-amber-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><MessageCircle className="w-6 h-6 text-amber-600" />開場故事：費思站在泳池裡！<span className="text-slate-400 bg-slate-100 px-2 py-1 rounded-md font-normal" style={{fontSize:"13px"}}>P7-11</span></h3>
        <p className="text-slate-600 mb-4 leading-relaxed" style={{fontSize:"17px"}}>這件事是作者「最不願意回想的」——一個炎熱的七月主日下午，他因為無法拒絕一對來訪的夫妻，假裝親切和有耐心，差點讓三歲的女兒喪命。這個故事鮮活地呈現了「情感不健康的靈性」如何在最日常的場景中造成最嚴重的後果。</p>
        <div className="space-y-3">
          {poolStory.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className={`flex items-start gap-4 rounded-xl p-4 border ${i === 4 ? 'bg-red-50 border-red-200' : i === 6 ? 'bg-amber-50 border-amber-200' : 'bg-slate-50 border-slate-100'}`}>
              <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold ${i === 4 ? 'bg-red-200 text-red-800' : 'bg-amber-100 text-amber-800'}`} style={{fontSize:"14px"}}>{i+1}</div>
              <div><div className={`font-bold mb-1 ${i === 4 ? 'text-red-800' : 'text-amber-800'}`} style={{fontSize:"16px"}}>{item.phase}</div><p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>{item.detail}</p></div>
            </motion.div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-5 border border-amber-200 mt-4">
          <p className="text-amber-900 font-bold leading-relaxed" style={{fontSize:"18px"}}>💡 「戴上面具，遠比曝露真實的自我來得安全。在靈性與情感的發展上，我一直停留在不成熟的階段，而當時成為基督徒的信仰方式，並沒能改變那個內心世界。這一點差點害死了我的女兒。」</p>
        </div>
      </div>

      {/* ========== 八種門訓嘗試 ========== */}
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}><Search className="w-6 h-6 text-blue-600" />八種門訓嘗試——都不夠<span className="text-slate-400 bg-slate-100 px-2 py-1 rounded-md font-normal" style={{fontSize:"13px"}}>P14-15</span></h3>
        <p className="text-slate-600 mb-4 leading-relaxed" style={{fontSize:"17px"}}>潔芮開始對教會產生不滿。作者的補救方法就是不停轉換門訓的重點——每一種都有聖經依據，也都發揮了一些功效，但到頭來都覺得不太對勁：</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {doorTrainingAttempts.map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-blue-100 hover:border-blue-300 transition-colors">
              <div className="flex items-center gap-2 mb-1"><span className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold" style={{fontSize:"12px"}}>{i+1}</span><span className="font-bold text-blue-800" style={{fontSize:"15px"}}>{item.attempt}</span></div>
              <p className="text-slate-600 text-sm leading-relaxed italic ml-9">「{item.thought}」</p>
            </div>
          ))}
        </div>
        <div className="bg-red-50 rounded-xl p-5 border border-red-200 mt-4">
          <p className="text-red-800 font-bold leading-relaxed" style={{fontSize:"17px"}}>⚠️ 「當人有了真實的屬靈經歷，就會覺得自己很好，即使人際關係千瘡百孔、內心世界混亂不堪，也還是會自認為沒問題。那些顯而易見的『進步』，恰好可以充當屬靈的藉口，讓人拒絕長大。」(p.015)</p>
        </div>
      </div>

      {/* ========== 冰山模式 ========== */}
      <div className="bg-gradient-to-b from-sky-50 to-indigo-50 rounded-3xl p-6 md:p-8 border border-sky-200 shadow-sm">
        <h3 className="font-bold text-sky-800 mb-5 flex items-center gap-2" style={{fontSize:"24px"}}><Layers className="w-6 h-6 text-sky-600" />🧊 冰山模式：什麼藏在表面下？<span className="ml-2 text-xs bg-sky-100 text-sky-600 px-2 py-1 rounded-full border border-sky-200">(p.016-017)</span></h3>
        <div className="space-y-4">
          {icebergLevels.map((level, i) => (
            <div key={i} className={`${level.color} border rounded-2xl p-5`}>
              <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2" style={{fontSize:"18px"}}><span className="text-xl">{level.icon}</span>{level.level}</h4>
              <div className="flex flex-wrap gap-2">{level.items.map((item, j) => (<span key={j} className="bg-white/70 px-3 py-1.5 rounded-lg text-sm text-slate-700 border border-slate-200">{item}</span>))}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-white/80 rounded-xl p-4 border border-indigo-200">
          <p className="text-indigo-800 font-bold" style={{fontSize:"17px"}}>💡 潔芮的攤牌：「彼得，我覺得我單身應該會比嫁給你還快樂。你那種領導方式根本不值得跟從。對了，你牧養的那間教會我也不去了。」——這是作者生命最大的轉折點，也是情感健康旅程的開始。(p.018-019)</p>
        </div>
      </div>

      {/* ========== 十大症狀 ========== */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}><AlertTriangle className="w-6 h-6 text-red-500" />情感不健康的靈性十大症狀</h3>
        <p className="text-slate-500 mb-5" style={{fontSize:"16px"}}>點擊展開每個症狀的詳細說明、書中例子和頁碼引用 (p.022-040)</p>
        <div className="space-y-3">
          {symptoms.map((s, i) => (
            <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden hover:border-indigo-200 transition-colors">
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer bg-white hover:bg-slate-50 transition-colors" onClick={() => setOpenSymptom(openSymptom === i ? null : i)}>
                <div className="flex items-center gap-3"><span className="text-2xl">{s.icon}</span><div><span className="text-xs text-slate-400 font-mono">症狀 {s.num}</span><h4 className="font-bold text-slate-800" style={{fontSize:"18px"}}>{s.title}</h4></div></div>
                {openSymptom === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>{openSymptom === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <div className="px-5 pb-5 space-y-3">
                    <div className="bg-amber-50 rounded-xl p-4 border border-amber-100"><div className="font-bold text-amber-700 mb-1" style={{fontSize:"15px"}}>📌 核心問題：</div><p className="text-slate-700 font-medium" style={{fontSize:"16px"}}>{s.summary}</p></div>
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100"><div className="font-bold text-slate-700 mb-1" style={{fontSize:"15px"}}>📖 詳細說明：</div><p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>{s.details}</p></div>
                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-200"><div className="font-bold text-blue-700 mb-1" style={{fontSize:"15px"}}>💬 書中例子：</div><p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>{s.example}</p></div>
                    <p className="text-xs text-slate-400 px-1">{s.page}</p>
                  </div>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 神學深度探討 ========== */}
      <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-6 md:p-8 border border-violet-100 shadow-sm">
        <h3 className="font-bold text-violet-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}><BookMarked className="w-6 h-6 text-violet-600" />神學深度探討<span className="ml-2 text-xs bg-violet-100 text-violet-500 px-2 py-1 rounded-full border border-violet-200">延伸學習</span></h3>
        <p className="text-slate-500 mb-5" style={{fontSize:"15px"}}>四個主題的深入探討，含經文依據與反思問題</p>
        <div className="space-y-3">
          {theologyTopics.map((topic, i) => (
            <div key={i} className="bg-white rounded-2xl border border-violet-100 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-violet-50 transition-colors" onClick={() => setOpenTheology(openTheology === i ? null : i)}>
                <h4 className="font-bold text-violet-800" style={{fontSize:"18px"}}>{topic.title}</h4>
                {openTheology === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>{openTheology === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <div className="px-5 pb-5 space-y-3">
                    <p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>{topic.content}</p>
                    <div className="bg-violet-50 rounded-xl p-4 border border-violet-100"><div className="font-bold text-violet-700 mb-2" style={{fontSize:"15px"}}>📖 相關經文：</div>{topic.scriptures.map((s: string, j: number) => (<p key={j} className="text-slate-600 text-sm mb-1.5 leading-relaxed">{s}</p>))}</div>
                    <div className="bg-amber-50 rounded-xl p-4 border border-amber-200"><div className="font-bold text-amber-700 mb-1" style={{fontSize:"15px"}}>💬 反思：</div><p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>{topic.reflection}</p></div>
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
        <p className="text-slate-500 mb-5" style={{fontSize:"15px"}}>五個華人教會常見情境——點擊展開具體分析與挑戰</p>
        <div className="space-y-3">
          {taiwanExamples.map((ex, i) => (
            <div key={i} className="bg-white rounded-2xl border border-orange-100 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-orange-50 transition-colors" onClick={() => setOpenTaiwan(openTaiwan === i ? null : i)}>
                <h4 className="font-bold text-orange-800" style={{fontSize:"18px"}}>{ex.title}</h4>
                {openTaiwan === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>{openTaiwan === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <div className="px-5 pb-5 space-y-3">
                    <div className="bg-orange-50 rounded-xl p-4 border border-orange-100"><div className="font-bold text-orange-700 mb-2" style={{fontSize:"15px"}}>📍 情境描述：</div><p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>{ex.scenario}</p></div>
                    <div className="bg-green-50 rounded-xl p-4 border border-green-200"><div className="font-bold text-green-700 mb-1" style={{fontSize:"15px"}}>🎯 本週挑戰：</div><p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>{ex.challenge}</p></div>
                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-200"><div className="font-bold text-blue-700 mb-1" style={{fontSize:"15px"}}>💡 回扣本書：</div><p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>{ex.insight}</p></div>
                  </div>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 四週挑戰 ========== */}
      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-6 md:p-8 border border-indigo-100 shadow-sm">
        <h3 className="font-bold text-indigo-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}><Target className="w-6 h-6 text-indigo-600" />四週操練挑戰<span className="ml-2 text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full border border-indigo-200">實踐計畫</span></h3>
        <div className="space-y-3">
          {weeklyChallenge.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-indigo-100 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-indigo-50 transition-colors" onClick={() => setOpenChallenge(openChallenge === i ? null : i)}>
                <div className="flex items-center gap-3"><span className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-700 font-bold text-sm">{item.week.slice(-2)}</span><h4 className="font-bold text-indigo-800" style={{fontSize:"18px"}}>{item.title}</h4></div>
                {openChallenge === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>{openChallenge === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <div className="px-5 pb-5 space-y-3">
                    <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100"><div className="font-bold text-indigo-700 mb-2" style={{fontSize:"15px"}}>🎯 任務說明：</div><p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>{item.mission}</p></div>
                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-200"><div className="font-bold text-blue-700 mb-1" style={{fontSize:"15px"}}>📖 本週經文：</div><p className="text-slate-600" style={{fontSize:"16px"}}>{item.scripture}</p></div>
                    <div className="bg-amber-50 rounded-xl p-4 border border-amber-200"><div className="font-bold text-amber-700 mb-1" style={{fontSize:"15px"}}>📓 日記提示：</div><p className="text-slate-600" style={{fontSize:"16px"}}>{item.journalPrompt}</p></div>
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
        <h3 className="font-bold text-teal-700 mb-4 flex items-center gap-2" style={{fontSize:"22px"}}>📝 第一章總結：問題的全景</h3>
        <div className="space-y-3">
          <div className="bg-amber-50 border-amber-200 border rounded-xl p-4"><div className="font-bold text-amber-700 mb-1.5" style={{fontSize:"17px"}}>🏊 費思泳池事件 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.007-011</span></div><p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>作者因為無法拒絕、害怕別人評價、戴著面具假裝親切，差點讓三歲女兒溺水。揭露情感不健康靈性的核心：外表成熟、內心幼稚。</p></div>
          <div className="bg-blue-50 border-blue-200 border rounded-xl p-4"><div className="font-bold text-blue-700 mb-1.5" style={{fontSize:"17px"}}>🔄 八種門訓嘗試 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.014-016</span></div><p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>查經、小組、禱告、屬靈爭戰、敬拜、服事、先知性、恩典——每種都有價值，但沒有一種能觸碰冰山水面下的世界。屬靈操練有時反而成為拒絕改變的藉口。</p></div>
          <div className="bg-indigo-50 border-indigo-200 border rounded-xl p-4"><div className="font-bold text-indigo-700 mb-1.5" style={{fontSize:"17px"}}>🧊 冰山模式 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.016-017</span></div><p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>水面上10%（外在行為）vs. 水面下90%（未處理的情感傷痛、原生家庭模式、扭曲的自我形象）。潔芮的攤牌成為作者生命最大的轉折點。</p></div>
          <div className="bg-red-50 border-red-200 border rounded-xl p-4"><div className="font-bold text-red-700 mb-1.5" style={{fontSize:"17px"}}>⚠️ 十大危險信號 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.022-040</span></div><p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>從利用神逃避神、漠視感覺、治死錯誤對象、否認過去，到世俗神聖二分法、以做工取代同工、逃避衝突、掩蓋軟弱、無法設界線、論斷他人——每個都有書中的具體案例和經文說明。</p></div>
          <div className="bg-emerald-50 border-emerald-200 border rounded-xl p-4"><div className="font-bold text-emerald-700 mb-1.5" style={{fontSize:"17px"}}>🌿 革命性的解藥 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.039-040</span></div><p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>結合情感健康與默觀靈修，藉由七種途徑到達健康的靈性。第一步：認識自己。認識自己，你才能認識神。</p></div>
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
