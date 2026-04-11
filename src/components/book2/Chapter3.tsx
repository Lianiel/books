import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, BookOpen, ChevronDown, ChevronUp, Target, Brain, Lightbulb, MessageCircle, AlertTriangle, Sparkles, Eye, Shield, Users, Search, MessageSquareQuote, Layers, BookMarked, GitBranch, Repeat, Home } from 'lucide-react';

export default function Chapter3() {
  const [openPattern, setOpenPattern] = useState<number | null>(null);
  const [openCommandment, setOpenCommandment] = useState<number | null>(null);
  const [openBaggage, setOpenBaggage] = useState<number | null>(null);
  const [openJoseph, setOpenJoseph] = useState<number | null>(null);
  const [openTheology, setOpenTheology] = useState<number | null>(null);
  const [openChallenge, setOpenChallenge] = useState<number | null>(null);
  const [openTaiwan, setOpenTaiwan] = useState<number | null>(null);
  const [openBeaver, setOpenBeaver] = useState<number | null>(null);

  const frankStory = [
    { phase: "面容憔悴", detail: "法蘭克是大型企業中階經理，已婚，育有兩個正值青春期的兒子。走進餐廳時心事重重。「昨晚我太太跟我說，她覺得她好像不愛我了。我問她是不是有別的男人，她說沒有。天曉得！」(p.083-084)" },
    { phase: "表面的好丈夫", detail: "「我自認是個好丈夫、好爸爸，努力工作讓家人衣食無慮。我向神禱告，我們也一起禱告，可是我真的不知道怎麼會變成這樣。」法蘭克和太太瑪麗亞都在基督教家庭長大，熟悉聖經，參加各種小組和夫妻成長營。" },
    { phase: "原生家庭的真相", detail: "法蘭克的父親是軍人，每三四年搬一次家。母親最後受不了壓力選擇離婚。他是老大，被迫填補父親在財務上的空缺——努力打工卻導致交友不易。他也很少和父親說話。(p.087-088)" },
    { phase: "瑪麗亞的背景", detail: "瑪麗亞的父親原本酗酒，信主後世界只有教會和壘球，情感上依然是個缺席的父親。她是獨生女，常常覺得很孤單，和母親特別親近。(p.088)" },
    { phase: "隱藏的祕密", detail: "法蘭克終於卸下心防說出多年的祕密：「我在十二歲那年接觸到色情。之後就一直被那種癮頭糾纏著。那些問責小組、認罪悔改、禱告連線，好像都起不了什麼作用。」他覺得把家裡的祕密說給外人聽是背叛父母。(p.094-095)" },
    { phase: "關鍵問題", detail: "從小在教會長大，被耶穌基督的真理團團圍繞，為什麼還是這樣？為什麼內在生命和婚姻還是無法改變？答案：他們必須先回到過去，才能往前邁進。(p.085)" }
  ];

  const abrahamPatterns = [
    { pattern: "每一代都有說謊的習慣", examples: ["亞伯拉罕兩度欺騙撒拉是他妹妹", "以撒和利百加的婚姻充滿謊言", "雅各說謊成性，名字意思就是「騙子」", "雅各十個兒子偽造約瑟的死訊十多年"], icon: "🤥" },
    { pattern: "每一代都有父母偏心", examples: ["亞伯拉罕偏愛以實瑪利", "以撒偏愛以掃", "雅各偏愛約瑟和便雅憫"], icon: "❤️‍🩹" },
    { pattern: "每一代都有兄弟失和", examples: ["以撒和以實瑪利失和", "雅各逃離哥哥以掃，兄弟失和多年", "約瑟和十個哥哥失和十多年"], icon: "⚔️" },
    { pattern: "每一代都有婚姻問題", examples: ["亞伯拉罕和夏甲非婚生子", "以撒和利百加感情不睦", "雅各有二妻二妾"], icon: "💔" }
  ];

  const familyCommandments = [
    { num: 1, area: "金錢", rules: ["不要負債", "金錢是地位的象徵", "賺大錢才能抬頭挺胸"] },
    { num: 2, area: "衝突", rules: ["要想辦法避免衝突", "不要惹別人不高興", "發脾氣大聲吵架是很正常的事"] },
    { num: 3, area: "性愛", rules: ["不可公開談論性", "男人可以多情，女人必須貞節", "婚後自然就能享受性愛"] },
    { num: 4, area: "傷心失落", rules: ["傷心是軟弱的表現", "不可以心情不好", "儘快收拾失落繼續往前"] },
    { num: 5, area: "表達憤怒", rules: ["生氣很危險、很不好", "發脾氣可以作為手段", "冷嘲熱諷發洩怒氣是可以接受的"] },
    { num: 6, area: "家庭", rules: ["天下無不是的父母", "家醜不可外揚", "對家庭和社會的責任高於一切"] },
    { num: 7, area: "人際關係", rules: ["不要相信任何人才能避免失望", "不允許有人再度傷害我", "不能曝露弱點"] },
    { num: 8, area: "對不同文化的態度", rules: ["只和同類人交朋友", "不和其他種族和文化的人結婚", "瞧不起某些文化和種族的人"] },
    { num: 9, area: "成功", rules: ["進名校", "賺大錢", "結婚生子"] },
    { num: 10, area: "感覺和情緒", rules: ["不允許有某些感覺", "你的感覺是什麼並不重要", "憑感覺不假思索的回應沒什麼不好"] }
  ];

  const authorBaggage = [
    { title: "責任感太超過", detail: "因為父親常不在，作者從小就必須負責「讓母親開心」。信主後很自然就開始照顧別人——負責對象從原生家庭變成別人的得救和教會成長。後來成為牧師、無法建立健康界線，一點也不奇怪。(p.099-100)", icon: "🎒" },
    { title: "過度追求表現", detail: "身為義裔移民家庭後代，背負著功成名就的責任：「要光宗耀祖。如果不是他們作牛作馬，你怎麼有辦法上大學？」信主後很自然就敦促自己要「為耶穌賣力」。許多「成功人士」一邊被羞愧感催促著追逐功名，一邊在心底吶喊：「我在這裡！請看看我！」(p.100)", icon: "🏆" },
    { title: "對婚姻的期待受文化影響", detail: "對婚姻和性別角色的觀念，比較多受家庭影響而非聖經。認為女人就該在家帶孩子、有重大決定交給男人。潔芮的抱怨在他看來很「正常」——「在我們家，哪個人的太太不抱怨？」(p.100-101)", icon: "💍" },
    { title: "不擅長解決衝突", detail: "母親在家會大發雷霆、指天罵地，父親不想吵架就安撫她。作者和父親一樣，一出問題就先認錯、接受責難、避免氣氛緊張。以為這就是效法基督像羊羔被牽到宰殺之地。(p.101)", icon: "🕊️" },
    { title: "不允許自己有感覺", detail: "從小覺得自己在家裡最不重要。從來不會有人問：「你感覺如何？你想什麼？你需要什麼？」所以信主後被「捨己」和「為朋友捨命」吸引，但對「安息日」等真理視若無睹。小孩不會問「環境出了什麼問題」，只會想「我做錯了什麼」。(p.101-102)", icon: "😶" }
  ];

  const beaverLevels = [
    { level: "等級五：痛苦的家庭", desc: "沒有人當家作主，混亂不堪、一塌糊塗、毫無秩序，充滿不確定和不安，衝突從未處理和解決。", color: "bg-red-100 border-red-300" },
    { level: "等級四：邊緣型家庭", desc: "獨裁統治，規矩非黑即白，對每個成員的思想、感覺和行為都有非常嚴格的要求。沒有人可以有不同意見。", color: "bg-orange-100 border-orange-300" },
    { level: "等級三：隱形規矩牽制的家庭", desc: "能不能覺得被愛取決於有否遵守有形和無形的家規。瀰漫操控、威嚇和罪惡感。有一個隱形裁判。", color: "bg-yellow-100 border-yellow-300" },
    { level: "等級二：符合需要的家庭", desc: "每個人的情感都很有彈性，彼此珍惜，看重親密關係。父母團隊合作，能成功克服困難與衝突。", color: "bg-green-100 border-green-300" },
    { level: "等級一：最理想的家庭", desc: "和等級二的區別就是一個字：喜歡。等級一的家庭成員是真的喜歡和家人在一起。", color: "bg-emerald-100 border-emerald-300" }
  ];

  const josephLessons = [
    { num: 1, title: "約瑟深知神的偉大", detail: "「差我到這裡來的不是你們，乃是神。」（創四十五8）他深信一切苦難都出於那位慈愛偉大的神。神會利用黑暗環境引領我們進入祂的旨意。當我們將自己獻給神，過往所有遭遇都能被祂用來建構祂為我們安排的未來。", scripture: "創四十五8；羅八28", page: "p.107-108" },
    { num: 2, title: "約瑟坦然面對遺憾與虧損", detail: "他在見到久別家人時哭了好多回，有次放聲大哭連埃及人都聽得到（創四十五2）。他沒有輕輕帶過，也沒有合理化。他扎扎實實去感受痛苦，以致最後能真正原諒並祝福出賣他的兄長。他為兒子取名瑪拿西（忘了）和以法蓮（多結果子）。", scripture: "創四十一50-52；四十五2", page: "p.108-109" },
    { num: 3, title: "約瑟用聖經改寫人生腳本", detail: "他有太多理由告訴自己：「我不配存在。我是沒有價值的人。」但他選擇給自己機會和神一起改寫腳本——不讓過去的創傷決定未來。據說了解自己的最好方法，就是和父母共處三天以上，然後問自己：「我現在覺得我是幾歲？」", scripture: "約八32「你們必曉得真理，真理必叫你們得以自由。」", page: "p.109-110" },
    { num: 4, title: "約瑟與神同工成為祝福", detail: "他有充分理由報復，但選擇與神一同祝福家人。每天面臨的選擇：神可靠嗎？祂是好神嗎？值得相信嗎？他的一生都建構在跟隨神的根基上，所以在面臨抉擇時就知道該如何行。我們的選擇會大大影響我們是否能成為神的器皿，為人帶來祝福。", scripture: "創五十20「從前你們的意思是要害我，但神的意思原是好的，要保全許多人的性命。」", page: "p.110" }
  ];

  const theologyTopics = [
    { title: "「自父及子直到三四代」：代間影響的聖經根據", content: "出埃及記二十4-6是聖經關於代間影響最重要的經文之一：神在頒布十誡時就將這個原則和祂的屬性結合在一起——「恨我的，我必追討他的罪，自父及子，直到三四代；愛我守我誡命的，我必向他們發慈愛，直到千代。」後來摩西要求親眼看見神的榮耀，神再次重申同樣的真理（出三十四6-7）。大衛因為拔示巴事件，神說：「刀劍必永不離開你的家。」（撒下十二10）大衛的子女和後代，家庭關係緊張、兄弟鬩牆、家族紛擾不斷。這個原則不是「家族的咒詛」迷信，而是聖經清楚描述的屬靈和心理現實：我們的選擇會影響後代。但好消息是：「愛我的，直到千代」——祝福的傳承遠遠超過罪的影響！", scriptures: ["出二十4-6 恨我的我必追討…直到三四代；愛我的…直到千代", "出三十四6-7 萬不以有罪的為無罪，必追討…直到三四代", "撒下十二10 刀劍必永不離開你的家", "結十八20 兒子必不擔當父親的罪孽——但模式和影響仍會傳遞"], reflection: "你能否在你的家族中看到某些模式代代相傳？是正面的還是負面的？你想為下一代留下什麼樣的遺產？" },
    { title: "成為基督徒 = 進入新的家庭系統", content: "保羅借用羅馬政府對收養的規定來解釋重生的意義：信主後，我們與一位新的父親建立新的永恆關係，得到新的名字（基督徒）、新的產業（自由、盼望、榮耀）和一群新的兄弟姊妹（弗一章）。耶穌說：「誰是我的母親？誰是我的弟兄？」（可三33-35）——信祂的人就是這個神聖「第一家庭」的成員。但「進入新家庭」不代表舊家庭的模式會自動消失。就像以色列人雖然離開了埃及，但埃及的文化和思考方式仍深深烙印在他們身上。神渴望我們脫離舊有的家庭模式，就像祂渴望以色列人離開埃及——但這個過程需要在「曠野」中一步步學習新的生活方式。", scriptures: ["弗一5 預定我們藉著耶穌基督得兒子的名分", "可三33-35 凡遵行神旨意的人就是我的弟兄姐妹和母親了", "太十37 愛父母過於愛我的不配作我的門徒", "羅八15 你們所受的不是奴僕的心…乃是兒子的心"], reflection: "你在「基督的新家庭」中學到的生活方式，和在「原生家庭」中學到的，有什麼不同？有哪些衝突？你選擇跟隨哪一個？" },
    { title: "約瑟的智慧：回到過去才能往前邁進", content: "約瑟的故事占了創世記四分之一的篇幅（第37-50章），聖經用如此大的篇幅來描述一個人如何在情感和靈性上長大成熟——特別是在原生家庭帶來巨大傷痛的情況下。約瑟在一天之內失去父母、手足、文化、食物、語言、自由和希望。他三十歲前的人生是一場悲劇。但他做了四件關鍵的事：(1)深知神的偉大(2)坦然面對遺憾(3)用聖經改寫腳本(4)與神同工成為祝福。他為兩個兒子取名瑪拿西（忘了苦楚）和以法蓮（多結果子）——這兩個名字就是回到過去、往前邁進的最佳寫照：不是假裝過去不存在，而是讓神把苦楚轉化為多結果子的泉源。", scriptures: ["創四十一51-52 瑪拿西…以法蓮", "創五十20 你們的意思是要害我，但神的意思原是好的", "創四十五5 不要因為把我賣到這裡自憂自恨"], reflection: "約瑟有充分理由報復，但他選擇祝福。在你的生命中，有誰是你需要選擇祝福（而非苦毒）的人？你願意讓神「把苦楚轉化為多結果子」嗎？" }
  ];

  const taiwanExamples = [
    { title: "🏠 華人家庭的「孝道」vs.「自我分化」", scenario: "在華人文化中，孝順父母是最高美德之一。但在某些家庭中，「孝順」被扭曲成「絕對服從」：不能有自己的意見、不能選擇自己的職業、不能嫁娶父母不贊同的對象。「爸媽為你犧牲了這麼多，你怎麼可以不聽話？」這種罪惡感操控讓許多成年基督徒無法做出獨立的信仰決定。", challenge: "列出三件你想做但因為「怕爸媽不高興」而沒做的事。然後問自己：這些是「尊榮父母」還是「被控制」？兩者有什麼區別？", insight: "耶穌說「愛父母過於愛我的不配作我的門徒」（太十37），但祂自己也在十字架上託付約翰照顧母親。尊榮父母不等於完全由父母決定你的人生——兩者可以並存。" },
    { title: "🤫 華人家庭中的「祕密」", scenario: "「家醜不可外揚」是華人文化的鐵律。許多家庭有不能說的祕密：父親的外遇、親戚的精神疾病、家族的財務問題、長輩的成癮、過去的性侵或家暴。這些祕密被一代代地掩埋，但它們的影響力並沒有消失——反而在暗處發酵，影響下一代的關係模式和情感健康。", challenge: "想一想你的家庭是否有一些「不能說的事」。你不需要把它公開，但可以找一位信任的屬靈導師或諮商師，在安全的環境中把它說出來。記住：唯有真理（真相）才能使人自由（約八32）。", insight: "法蘭克花了好幾次才終於說出他十二歲就接觸色情的祕密。他覺得「把家裡的祕密說給外人聽是背叛父母」——但祕密不會因為被掩埋就消失。正好相反，它會在暗處持續運作。" },
    { title: "📋 台灣社會的「家族十誡」", scenario: "每個台灣家庭都有自己不成文的「十誡」。例如：「萬般皆下品唯有讀書高」「男主外女主內」「哭什麼哭，有什麼好哭的」「你看隔壁的小明考上台大」「不要讓外人知道我們家的事」「爸媽做的都是為你好」。這些規則深深影響了我們對金錢、成功、情感表達、性別角色和人際關係的看法。", challenge: "寫下你家的「不成文十誡」（至少五條）。然後把它們和聖經的教導對照：哪些和聖經一致？哪些和聖經衝突？哪些需要被「改寫」？", insight: "本章列出的十個領域（金錢、衝突、性愛、傷心、憤怒、家庭、人際、文化態度、成功、情緒）是檢視家族隱形規則的好框架。華人家庭在「家庭」和「成功」這兩個領域的規則往往特別強烈。" },
    { title: "🔄 在台灣教會中打破代間循環", scenario: "許多台灣基督徒是「第一代信徒」——父母不是基督徒，或只是名義上的基督徒。這意味著他們在教會學到的價值觀，常常和家裡的價值觀直接衝突。例如：教會教導饒恕，但家裡教導報復（「別人欺負你你要打回去」）；教會教導謙卑，但家裡教導「出人頭地」。這種衝突讓許多人在兩套系統之間來回擺盪。", challenge: "畫一張簡單的圖：左邊列出你原生家庭教你的價值觀，右邊列出你在基督裡學到的價值觀。在衝突的地方畫一個叉。然後為每個衝突寫下：「我選擇……因為……」", insight: "作者說：「學習作門徒，就是要讓基督的真理落實於日常生活中。但深入了解就不難發現，我們的所作所為基本上和原生家庭沒有兩樣。」(p.097) 成為基督徒不是自動切換系統——需要有意識地選擇。" },
    { title: "🌳 海狸系統模式：評估你的家庭健康度", scenario: "海狸系統模式將家庭健康分為五個等級——從等級五（混亂痛苦）到等級一（真心喜歡在一起）。許多華人家庭可能落在等級三（隱形規矩牽制）：表面上和諧有序，但能不能被愛取決於有否遵守家規。「如果你愛我就不會做我不允許的事」——這種隱形的操控在許多華人家庭中非常普遍。", challenge: "用海狸系統模式為你的原生家庭打分（1-5）。然後問自己：你目前建立的家庭（或你在教會小組中的關係）是在哪個等級？你希望它在哪個等級？要達到那個等級，你需要改變什麼？", insight: "等級一和等級二的區別只有一個字：「喜歡」——不只是愛家人（義務），而是真的喜歡和家人在一起（享受）。你和你的家人或小組成員，是處於「愛」的層次還是「喜歡」的層次？" }
  ];

  const weeklyChallenge = [
    { week: "第一週", title: "繪製你的家族簡譜", mission: "畫一份三代家族簡譜：祖父母→父母→你。用兩三個形容詞描述每個人。在每對夫妻之間標註他們的關係品質（親密/疏遠/衝突）。標出重大事件：離婚、過世、搬遷、疾病、成癮、創傷。完成後帶到神面前，安靜等候祂光照你需要看見的模式。", scripture: "詩一三九23-24「求你鑒察我，知道我的心思。」", journalPrompt: "畫家族簡譜時你有什麼感受？驚訝？難過？憤怒？你看到哪些代代重複的模式？有哪些模式正在你的生命中重演？" },
    { week: "第二週", title: "寫出你家的「不成文十誡」", mission: "參考本章的十個領域（金錢、衝突、性愛、傷心失落、表達憤怒、家庭、人際關係、對不同文化的態度、成功、感覺和情緒），寫出你家的不成文規則——每個領域至少寫一條。然後在旁邊寫下聖經對同一主題的教導。比較兩者的差異。", scripture: "約八32「你們必曉得真理，真理必叫你們得以自由。」", journalPrompt: "哪些家族規則最讓你驚訝？你是否一直在遵守某些規則卻從未質疑？哪條規則對你現在的信仰生活影響最大？" },
    { week: "第三週", title: "辨識你的「情感包袱」", mission: "參考作者的五個情感包袱（責任感太超過、過度追求表現、文化影響的期待、不擅長解決衝突、不允許自己有感覺），辨識你帶著從原生家庭來的哪些包袱。為每個包袱寫下：(1)它從哪裡來的？(2)它如何影響我現在的關係？(3)我願意讓神改變這個部分嗎？找一位信任的人分享。", scripture: "來十二1「我們既有這許多的見證人……就當放下各樣的重擔。」", journalPrompt: "你的哪個情感包袱最沉重？如果能放下一個，你會選哪個？想像放下之後的生活會是什麼樣子。" },
    { week: "第四週", title: "像約瑟一樣改寫腳本", mission: "寫下三個你從原生家庭接收到的負面訊息（例如「你不夠好」「你不配被愛」「你必須完美」）。然後用聖經的真理改寫每一個：原生家庭說→神說。最後為你的「新腳本」禱告，求神幫助你活出祂的真理而非家族的謊言。如果你願意，可以把舊腳本寫在紙上撕掉，象徵你選擇放下。", scripture: "創五十20「你們的意思是要害我，但神的意思原是好的。」", journalPrompt: "改寫腳本時你有什麼感受？你是否真的相信「神的意思原是好的」？哪一個新腳本最難相信？為什麼？" }
  ];

  const groupDiscussion = [
    { category: "📖 聖經中的家族模式", questions: ["讀創世記中亞伯拉罕-以撒-雅各-約瑟的故事，你看到哪些代代重複的模式（說謊、偏心、失和、婚姻問題）？這些模式在你的家族中是否也有類似的版本？", "出埃及記二十4-6說罪的影響「直到三四代」但愛「直到千代」——這對你有什麼意義？你覺得這是「公平」的嗎？", "耶穌說「愛父母過於愛我的不配作我的門徒」（太十37）。在華人文化中，這句話有什麼特別的挑戰？"] },
    { category: "🏠 原生家庭的影響", questions: ["如果用海狸系統模式（五個等級）來評估你的原生家庭，你會給幾分？為什麼？", "你家的「不成文十誡」中，哪一條對你影響最深？它如何影響你現在的信仰生活？", "法蘭克的故事（從小缺乏父愛→交友困難→色情成癮→婚姻危機）中，你看到了什麼因果關係？你是否在自己的生命中也能追溯類似的因果鏈？", "作者說「把家裡的祕密說給外人聽感覺像是背叛父母」——你是否也有類似的感受？如何在「尊榮父母」和「面對真相」之間取得平衡？"] },
    { category: "🌱 邁向改變", questions: ["約瑟的四個做法中（深知神的偉大、坦然面對遺憾、改寫腳本、與神同工成為祝福），哪一個對你目前最有幫助？", "你是否有一些從原生家庭來的「負面腳本」一直在你的內心反覆播放？你願意讓神幫你改寫嗎？", "作為小組，我們可以如何幫助彼此「回到過去才能往前邁進」？需要什麼樣的安全環境？", "如果你能和你的父母（或主要照顧者）進行一次完全誠實的對話，你最想說什麼？"] }
  ];

  const reflections = [
    "我的家庭簡譜中，最讓我驚訝的發現是什麼？有哪些模式正在我的生命中重演？",
    "我從原生家庭帶到信仰生活中最沉重的「情感包袱」是什麼？",
    "我家的哪些「不成文十誡」和聖經的教導直接衝突？我是否一直在不自覺地遵守它們？",
    "如果用海狸系統模式來評估我目前建立的家庭（或最親密的關係），我在哪個等級？我想在哪個等級？",
    "我是否害怕「回到過去」？我擔心會發現什麼？",
    "在我的生命中，有哪些「家族的祕密」是我從未跟任何人說過的？這些祕密如何影響我？",
    "約瑟選擇祝福而非報復。在我的生命中，有誰是我需要選擇祝福的人？"
  ];

  const actions = [
    "畫一份三代家族簡譜，用兩三個形容詞描述每個人和他們的關係品質。帶到神面前禱告。",
    "寫出你家在十個領域中的「不成文十誡」，和聖經教導對照。找出最大的衝突點。",
    "辨識你從原生家庭帶來的「情感包袱」——哪些模式你一直在重複？你願意讓神改變哪一個？",
    "用聖經真理改寫三個從原生家庭接收到的負面訊息。把舊腳本寫在紙上撕掉，為新腳本禱告。",
    "如果你的生命中有從未說出口的家族祕密，考慮找一位信任的屬靈導師或專業諮商師談談。",
    "讀創世記37-50章（約瑟的故事），特別注意他如何處理原生家庭帶來的傷痛。默想創五十20。"
  ];

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="space-y-8">

      {/* ========== 章節標題 ========== */}
      <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-800 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="relative">
          <div className="flex items-center gap-2 mb-2"><BookOpen className="w-5 h-5 text-purple-300" /><span className="text-purple-300 text-sm tracking-widest">第 3 章</span></div>
          <h1 className="font-extrabold mb-3" style={{fontSize:"30px"}}>面對過往，迎向未來</h1>
          <p className="text-purple-200 text-lg mb-4">切斷昔日的影響力</p>
          <p className="text-slate-200 leading-relaxed mb-3" style={{fontSize:"17px"}}>本章透過法蘭克和瑪麗亞的婚姻危機、亞伯拉罕家族的代間模式、作者自己的五個情感包袱、家族的「不成文十誡」、海狸家庭健康模式，以及約瑟的四個智慧，帶領我們面對一個核心真理：必須先回到過去，才能往前邁進。</p>
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
            <p className="text-slate-200 leading-relaxed italic" style={{fontSize:"17px"}}>「情感健康的門徒能夠看清事實，不否認事實，也不會活在幻想的世界。真正的靈性能使我們卸下包袱，自由自在、歡歡喜喜活在當下。」 <span className="text-purple-300 text-sm ml-1">(p.083)</span></p>
          </div>
        </div>
      </div>

      {/* ========== 開場故事：法蘭克 ========== */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-purple-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><MessageCircle className="w-6 h-6 text-purple-600" />開場故事：法蘭克和瑪麗亞的婚姻危機<span className="text-slate-400 bg-slate-100 px-2 py-1 rounded-md font-normal" style={{fontSize:"13px"}}>P83-95</span></h3>
        <p className="text-slate-600 mb-4 leading-relaxed" style={{fontSize:"17px"}}>一對從小在教會長大的夫妻，參加過無數講道、小組和成長營，為什麼婚姻還是無法改變？這個故事揭示了一個關鍵：門訓如果不觸碰原生家庭的影響，就永遠只是在冰山水面上做工。</p>
        <div className="space-y-3">
          {frankStory.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className={`flex items-start gap-4 rounded-xl p-4 border ${i === 4 ? 'bg-red-50 border-red-200' : i === 5 ? 'bg-amber-50 border-amber-200' : 'bg-slate-50 border-slate-100'}`}>
              <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold ${i === 4 ? 'bg-red-200 text-red-800' : 'bg-purple-100 text-purple-800'}`} style={{fontSize:"14px"}}>{i+1}</div>
              <div><div className={`font-bold mb-1 ${i === 4 ? 'text-red-800' : 'text-purple-800'}`} style={{fontSize:"16px"}}>{item.phase}</div><p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>{item.detail}</p></div>
            </motion.div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl p-5 border border-purple-200 mt-4">
          <p className="text-purple-900 font-bold leading-relaxed" style={{fontSize:"17px"}}>💡 兩個重要的聖經真理：(1)兩三代前祖先所蒙的福和所犯的罪，影響力延續至今。(2)要學習作門徒，就必須切斷原生家庭的罪惡模式，重新學習在神的家過合神心意的生活。(p.085)</p>
        </div>
      </div>

      {/* ========== 亞伯拉罕家族的代間模式 ========== */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 md:p-8 border border-amber-200 shadow-sm">
        <h3 className="font-bold text-amber-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><GitBranch className="w-6 h-6 text-amber-600" />亞伯拉罕家族：代代相傳的四種模式<span className="ml-2 text-xs bg-amber-100 text-amber-600 px-2 py-1 rounded-full border border-amber-200">(p.089-090)</span></h3>
        <p className="text-slate-600 mb-4" style={{fontSize:"17px"}}>聖經第一卷書創世記記錄了罪與祝福如何代代相傳。亞伯拉罕因順服神所得的福傳承後代，但罪惡模式也同樣延續：</p>
        <div className="space-y-3">
          {abrahamPatterns.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl border border-amber-100 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-amber-50 transition-colors" onClick={() => setOpenPattern(openPattern === i ? null : i)}>
                <div className="flex items-center gap-3"><span className="text-2xl">{p.icon}</span><h4 className="font-bold text-amber-800" style={{fontSize:"18px"}}>{p.pattern}</h4></div>
                {openPattern === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>{openPattern === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <div className="px-5 pb-5"><div className="bg-amber-50 rounded-xl p-4 border border-amber-100 space-y-1">{p.examples.map((e, j) => (<p key={j} className="text-slate-600 flex items-start gap-2" style={{fontSize:"16px"}}><span className="text-amber-500">•</span>{e}</p>))}</div></div>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 家族的「不成文十誡」========== */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}><Layers className="w-6 h-6 text-indigo-600" />你家族特有的「不成文十誡」<span className="ml-2 text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded-full border border-slate-200">(p.091-092)</span></h3>
        <p className="text-slate-500 mb-5" style={{fontSize:"16px"}}>每個家庭都有心照不宣的規則。點擊展開每個領域：</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {familyCommandments.map((c, i) => (
            <div key={i} className="border border-slate-200 rounded-xl overflow-hidden hover:border-indigo-200 transition-colors">
              <div className="flex items-center justify-between px-4 py-3 cursor-pointer bg-white hover:bg-slate-50 transition-colors" onClick={() => setOpenCommandment(openCommandment === i ? null : i)}>
                <div className="flex items-center gap-2"><span className="w-7 h-7 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold" style={{fontSize:"12px"}}>{c.num}</span><span className="font-bold text-indigo-800" style={{fontSize:"16px"}}>{c.area}</span></div>
                {openCommandment === i ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
              </div>
              <AnimatePresence>{openCommandment === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                  <div className="px-4 pb-3"><div className="bg-slate-50 rounded-lg p-3 space-y-1">{c.rules.map((r, j) => (<p key={j} className="text-slate-600 text-sm flex items-start gap-2"><span className="text-indigo-400">•</span>{r}</p>))}</div></div>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
        <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200 mt-4">
          <p className="text-indigo-800 font-bold" style={{fontSize:"16px"}}>💡 「當代代相傳的家族誡命深深烙印在基因裡，深到我們無法區分哪個是家族的腳本、哪個是基督的腳本，結局就會很悲慘。」(p.092)</p>
        </div>
      </div>

      {/* ========== 作者的五個情感包袱 ========== */}
      <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-6 md:p-8 border border-rose-100 shadow-sm">
        <h3 className="font-bold text-rose-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><Heart className="w-6 h-6 text-rose-600" />作者的五個「情感包袱」<span className="ml-2 text-xs bg-rose-100 text-rose-600 px-2 py-1 rounded-full border border-rose-200">(p.099-102)</span></h3>
        <div className="space-y-3">
          {authorBaggage.map((b, i) => (
            <div key={i} className="bg-white rounded-2xl border border-rose-100 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-rose-50 transition-colors" onClick={() => setOpenBaggage(openBaggage === i ? null : i)}>
                <div className="flex items-center gap-3"><span className="text-2xl">{b.icon}</span><h4 className="font-bold text-rose-800" style={{fontSize:"18px"}}>{b.title}</h4></div>
                {openBaggage === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>{openBaggage === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <div className="px-5 pb-5"><div className="bg-rose-50 rounded-xl p-4 border border-rose-100"><p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>{b.detail}</p></div></div>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-xl p-5 border border-rose-200 mt-4">
          <p className="text-rose-900 font-bold" style={{fontSize:"17px"}}>💡 「我愛基督的好消息。然而學習作門徒的頭十七年，因為無法擺脫原生家庭的影響，以至於這個真理無法深入我真實的經驗中。我的童年斷了一條腿——靠著神的恩典，我最終找到了那條腿，把它接回去。」(p.102)</p>
        </div>
      </div>

      {/* ========== 海狸系統模式 ========== */}
      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-6 md:p-8 border border-teal-100 shadow-sm">
        <h3 className="font-bold text-teal-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><Home className="w-6 h-6 text-teal-600" />海狸系統模式：五個家庭健康等級<span className="ml-2 text-xs bg-teal-100 text-teal-600 px-2 py-1 rounded-full border border-teal-200">(p.104-106)</span></h3>
        <p className="text-slate-600 mb-4" style={{fontSize:"17px"}}>你的成長經歷屬於哪一種？你至今仍受原生家庭影響嗎？</p>
        <div className="space-y-3">
          {beaverLevels.map((b, i) => (
            <div key={i} className={`${b.color} border rounded-xl p-4`}>
              <h4 className="font-bold text-slate-800 mb-1" style={{fontSize:"16px"}}>{b.level}</h4>
              <p className="text-slate-600" style={{fontSize:"15px"}}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 約瑟的四個智慧 ========== */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-emerald-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}><Sparkles className="w-6 h-6 text-emerald-600" />約瑟：回顧過去、往前邁進的最佳示範<span className="ml-2 text-xs bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full border border-emerald-200">(p.106-110)</span></h3>
        <p className="text-slate-600 mb-4" style={{fontSize:"17px"}}>約瑟在一天之內失去父母、手足、文化、語言、自由和希望。他三十歲前的人生是一場悲劇。但他做了四件關鍵的事：</p>
        <div className="space-y-3">
          {josephLessons.map((l, i) => (
            <div key={i} className="bg-emerald-50 rounded-2xl border border-emerald-100 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-emerald-100 transition-colors" onClick={() => setOpenJoseph(openJoseph === i ? null : i)}>
                <h4 className="font-bold text-emerald-800" style={{fontSize:"18px"}}>{l.num}. {l.title}</h4>
                {openJoseph === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>{openJoseph === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <div className="px-5 pb-5 space-y-3">
                    <p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>{l.detail}</p>
                    <div className="bg-white rounded-xl p-3 border border-emerald-200"><p className="text-emerald-700 text-sm font-medium">📖 {l.scripture}</p></div>
                    <p className="text-xs text-slate-400">{l.page}</p>
                  </div>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl p-5 border border-emerald-200 mt-4">
          <p className="text-emerald-900 font-bold" style={{fontSize:"17px"}}>💡 瑪拿西（忘了苦楚）+ 以法蓮（多結果子）= 回到過去、往前邁進的最佳寫照。不是假裝過去不存在，而是讓神把苦楚轉化為多結果子的泉源。</p>
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
              <AnimatePresence>{openTheology === i && (
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
              <AnimatePresence>{openTaiwan === i && (
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
              <AnimatePresence>{openChallenge === i && (
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
        <h3 className="font-bold text-teal-700 mb-4" style={{fontSize:"22px"}}>📝 第三章總結：回到過去才能往前邁進</h3>
        <div className="space-y-3">
          <div className="bg-purple-50 border-purple-200 border rounded-xl p-4"><div className="font-bold text-purple-700 mb-1.5" style={{fontSize:"17px"}}>💔 法蘭克的婚姻危機 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.083-095</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>從小在教會長大但婚姻仍然破碎——原因是原生家庭的傷痛模式從未被觸碰。軍人家庭→頻繁搬遷→交友困難→色情成癮→婚姻危機。</p></div>
          <div className="bg-amber-50 border-amber-200 border rounded-xl p-4"><div className="font-bold text-amber-700 mb-1.5" style={{fontSize:"17px"}}>🔄 代間模式 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.086-092</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>亞伯拉罕家族四種重複模式（說謊、偏心、失和、婚姻問題）。每個家庭的「不成文十誡」影響十個生活領域。家族的腳本和基督的腳本不一致時衝突就發生。</p></div>
          <div className="bg-rose-50 border-rose-200 border rounded-xl p-4"><div className="font-bold text-rose-700 mb-1.5" style={{fontSize:"17px"}}>🎒 五個情感包袱 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.099-102</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>作者的五個包袱：責任感太超過、過度追求表現、文化影響的婚姻期待、不擅長解決衝突、不允許自己有感覺。童年斷了一條腿——靠神的恩典把它接回去。</p></div>
          <div className="bg-emerald-50 border-emerald-200 border rounded-xl p-4"><div className="font-bold text-emerald-700 mb-1.5" style={{fontSize:"17px"}}>✨ 約瑟的四個智慧 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.106-110</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>深知神的偉大→坦然面對遺憾→用聖經改寫腳本→與神同工成為祝福。瑪拿西＋以法蓮＝回到過去、往前邁進的最佳寫照。</p></div>
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
