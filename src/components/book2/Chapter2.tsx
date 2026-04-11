import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, BookOpen, ChevronDown, ChevronUp, Target, Brain, Lightbulb, MessageCircle, AlertTriangle, Sparkles, Eye, Shield, Users, Search, MessageSquareQuote, Layers, Flame, BookMarked, Compass } from 'lucide-react';

export default function Chapter2() {
  const [openTemptation, setOpenTemptation] = useState<number | null>(null);
  const [openStep, setOpenStep] = useState<number | null>(null);
  const [openTheology, setOpenTheology] = useState<number | null>(null);
  const [openChallenge, setOpenChallenge] = useState<number | null>(null);
  const [openTaiwan, setOpenTaiwan] = useState<number | null>(null);

  const beachStory = [
    { phase: "宣告", detail: "潔芮走進客廳：「彼得，跟你說一聲，今年暑假我要去紐澤西海邊。」她停下來，等著看他的反應。「不行！」他在心裡說。" },
    { phase: "抵抗", detail: "「不行！」他口氣堅定、特別提高音量想嚇嚇她。「你不可以一個月都把我一個人丟在紐約，這樣對我們的婚姻不好。」但他知道自己沒說實話——其實他比較擔心的是自己一個人怎麼生活，還有教會的人會怎麼想。" },
    { phase: "潔芮有備而來", detail: "「這十年來，每一年我都想去海邊避暑，但每一年你都說不行，我也都乖乖聽話。但我受夠了。那是你的問題，你自己處理。」她冷冷丟下一句就轉身走向廚房。" },
    { phase: "聖經藉口閃過腦海", detail: "作者想到以前用過的說詞：「神要我們在一起，夫妻是一體」「我是牧師你是師母，我們是團隊」「這種事女人不該自作主張」——但他一句也沒說出口，因為他很清楚這些都只是藉口。" },
    { phase: "核心問題浮現", detail: "「她明明只是要回娘家四個星期，為什麼我會覺得她好像要去四年？又好像要跟我離婚？」他發現自己希望潔芮能成為他過去未能擁有的那種母親——不會在情感上「拋棄」他的母親。(p.046)" },
    { phase: "意外的自由", detail: "最後他不得不妥協。沒想到，他反而很享受一個人的生活。神利用這段時間重新配置他裡面的線路，修補他在原生家庭受到的傷害。他感到前所未有的自由——發現他所受的訓練和靈性，既無助於處理不安全感，更無法幫助他認識自己。(p.047-048)" }
  ];

  const godEmotions = [
    { emotion: "喜悅", scripture: "「神看著是好的。」——神喜悅、欣賞我們，臉上流露對我們的喜愛。", ref: "創一25、31" },
    { emotion: "憂傷", scripture: "「耶和華就後悔造人在地上，心中憂傷。」", ref: "創六6" },
    { emotion: "忌邪/嫉妒", scripture: "「我耶和華——你的神是忌邪的神。」", ref: "出二十5" },
    { emotion: "急迫/喊叫", scripture: "「我許久閉口不言，靜默不語；現在我要喊叫，像產難的婦人。」", ref: "賽四十二14" },
    { emotion: "烈怒", scripture: "「耶和華的烈怒必不轉消，直到祂心中所擬定的成就了。」", ref: "耶三十24" },
    { emotion: "永遠的愛", scripture: "「我以永遠的愛愛你，因此我以慈愛吸引你。」", ref: "耶三十一3" },
    { emotion: "憐愛/不捨", scripture: "「以色列啊，我怎能棄絕你？……我回心轉意，我的憐愛大大發動。」", ref: "何十一8" },
    { emotion: "極其難過", scripture: "「我心裡甚是憂傷，幾乎要死。」", ref: "太二十六37-38" },
    { emotion: "怒目/憂愁", scripture: "「耶穌怒目周圍看他們，憂愁他們的心剛硬。」", ref: "可三5" },
    { emotion: "歡樂", scripture: "「正當那時，耶穌被聖靈感動就歡樂。」", ref: "路十21" }
  ];

  const eightEmotions = [
    { category: "憤怒", examples: "暴怒、敵意、易怒、惱怒", color: "bg-red-100 border-red-300 text-red-800" },
    { category: "悲傷", examples: "難過、自憐、絕望、沮喪、孤單", color: "bg-blue-100 border-blue-300 text-blue-800" },
    { category: "恐懼", examples: "焦慮、急躁、緊張、驚嚇、恐怖、憂懼", color: "bg-purple-100 border-purple-300 text-purple-800" },
    { category: "快樂", examples: "喜樂、解脫、滿足、欣喜、興奮、愉快、狂喜", color: "bg-yellow-100 border-yellow-300 text-yellow-800" },
    { category: "愛", examples: "接納、信任、奉獻、愛慕", color: "bg-pink-100 border-pink-300 text-pink-800" },
    { category: "驚喜", examples: "震驚、驚訝、驚奇", color: "bg-amber-100 border-amber-300 text-amber-800" },
    { category: "厭惡", examples: "蔑視、輕看、反感、厭惡、嫌惡", color: "bg-green-100 border-green-300 text-green-800" },
    { category: "羞愧", examples: "內疚、悔恨、屈辱、尷尬、懊惱", color: "bg-slate-200 border-slate-400 text-slate-800" }
  ];

  const temptations = [
    { num: 1, title: "我的行為等於我（好表現）", icon: "🏆", satanLine: "「你若是神的兒子，可以吩咐這些石頭變成食物。」（太四3）", background: "在之前三十年，耶穌顯然一事無成。祂還沒有開始服事，在他人眼中就是個失敗者。現在祂肚子餓了。祂對這個世界有過什麼貢獻嗎？", cultureLie: "你有什麼成就？你用什麼證明你有用？當我們在工作、家庭、教會上有好成績，就會認為自己是有用的。萬一沒有，我們就會加倍努力、加速前進，為自己的無用羞愧自責。", merton: "梅頓說：「如果因為寫了一本暢銷書就被認為是成功的，我只能說那純屬巧合。若要問我對現代人有什麼話要說，就是不惜代價避開一件事：那就是成功。」(p.057)", page: "p.056-058" },
    { num: 2, title: "我所擁有的就等於我（擁有物）", icon: "💰", satanLine: "魔鬼帶耶穌去觀看世界的繁華與權勢：「你看別人有什麼！你什麼都沒有！」", background: "魔鬼利用恐懼和缺乏安全感的心理對耶穌下手。現代文化以擁有的東西作為衡量成就的標準。", cultureLie: "商業市場每年投入超過一百五十億美元引誘孩童和青少年相信某些東西是人生不可或缺的。成年人用互相比較做衡量：誰最有錢？誰身材最好？誰最好命？", merton: "電影《阿瑪迪斯》中的薩列裡，不肯承認莫札特是天才，反而怪罪神不公平。我們也很容易受世俗成就的引誘，而不以神在基督裡的愛為滿足。要相信神的愛，就必須讓意志降服於天父的愛，不再掙扎。(p.058-059)", page: "p.058-059" },
    { num: 3, title: "我就是別人眼中的我（討人喜歡）", icon: "👥", satanLine: "撒但要耶穌從聖殿最高點往下跳，這樣人們就會相信祂。", background: "那時大家對耶穌沒有任何想法，基本上祂就是個籍籍無名的小人物。既然如此，祂怎麼會認為自己是重要的、有價值的呢？", cultureLie: "我們在乎別人的想法，在乎的程度遠超過想像。一受讚美就歡天喜地，一被批評就唉聲嘆氣。真正的自由，來自於知道自己是被愛的，不需要別人對我們刮目相看。", merton: "史考特·派克在十五歲時意識到，和好友碰面的整整十分鐘，他滿腦子只想著自己——碰面前想著如何炫耀，碰面中想著如何接話、看表情，分別後懊惱少說了幾句。「從頭到尾，我根本沒把他放在心上。」這樣的戲碼會持續上演到二十歲、五十歲、甚至九十歲。(p.059-060)", page: "p.059-060" }
  ];

  const differentiationScale = [
    { range: "0-25分", traits: ["無法區分事實和感覺", "情感需求強烈，對別人高度強烈反應", "把多數力氣花在贏得掌聲", "無法說出「我認為……」「我覺得……」", "無法在情感上與家人分離", "強烈依賴婚姻關係"], color: "bg-red-50 border-red-200" },
    { range: "25-50分", traits: ["大部分自我意識到的都是「假我」——別人反射的倒影", "會為了被接納而快速表示同意", "說一套做一套", "受恭維就自信滿滿，被批評就玻璃心碎滿地", "關係破裂就開始焦慮和情緒失控", "追逐權力、榮耀、知識和被愛來包裹假我"], color: "bg-orange-50 border-orange-200" },
    { range: "50-75分", traits: ["意識到理智和感覺必須互相合作", "擁有合理程度的「真我」", "能按部就班追尋人生目標", "與配偶以夥伴關係經營婚姻", "允許孩子循序漸進發展成獨立成年人", "能獨處也能與人共處、臨危不亂"], color: "bg-green-50 border-green-200" },
    { range: "75-100分（極少人）", traits: ["重視原則、目標導向，不被批評或稱讚左右", "能離開原生家庭成為有主見的獨立成年人", "傾聽而不激動，溝通而不對立", "尊重他人不要求對方改變", "能自在享受人生、盡情玩樂", "抗壓性高，能為自己的命定負責"], color: "bg-blue-50 border-blue-200" }
  ];

  const fourSteps = [
    { num: 1, title: "安靜與獨處時留意內心世界", icon: "🧘", detail: "有太多的干擾讓我們聽不到自己的感覺。唯有獨處，才能聽到裡面的聲音。作者的方法很簡單：利用每天靈修親近神的時間，允許自己去感受各種感覺，然後記錄下來。他也刻意從一週工作六天七十個小時，減少到五天四十五個小時，開始操練靜默和獨處。", quote: "睿智的修道院老院長摩西說：「回房去！你該學的都在你的房間裡！」", page: "p.071-072" },
    { num: 2, title: "找到信任的同伴", icon: "🤝", detail: "除非能找到幾位可靠成熟的同伴，否則很少人會願意脫下假我。潘霍華警告：「無法獨處的人要小心群體，無法融入群體的人要小心獨處。」我們需要「一起孤獨」——形成一個「獨處的群體」。作者有導師、屬靈顧問、輔導、成熟的朋友和小組成員，最重要的是太太潔芮。", quote: "迦賢努說了一個故事：修士西羅在沙漠隱居十五年，拒絕與其他修士交流，最後聽到「聲音」要他跳進深井。他跳了，差點死掉。獨自一人太危險了。", page: "p.072-074" },
    { num: 3, title: "走出舒適圈", icon: "🚀", detail: "捨去虛假的我、讓真實的我浮現，對有些人來說很恐怖。有些人覺得不該稱讚別人也不該接受讚美；有些人害怕衝突怕得要命；有些人覺得向人求助就是承認失敗。作者花很多年感覺自己快要窒息、像隻困獸——他不想當CEO和經理人，他想要牧養。到後來，偏離神旨意的痛苦遠遠凌駕改變的痛苦。", quote: "波斯詩人魯米：「如果你在我們當中沒有誠實作自己，你所造成的傷害是難以想像的。」", page: "p.075-076" },
    { num: 4, title: "禱告求勇氣", icon: "🙏", detail: "當我們在基督裡分化出真正的自我，身邊的人通常會出現反彈。包溫說反彈分為三個階段：(1)「你改變成這樣是不對的」(2)「改回來，否則我們無法接受」(3)「如果你不改回來，我告訴你會有什麼後果」。在每個階段，我們都需要向聖靈求堅持下去的力量。", quote: "路撒亞拉比年老時曾說：「到了來世，不會有人問我『為什麼你不是摩西？』反而會問：『為什麼你不是路撒亞？』」", page: "p.077-078" }
  ];

  const jesusExamples = [
    { who: "家人", detail: "祂離開原生家庭，拋開家人對身為木匠兒子的期待，成為獨立自主的成年人。母親和手足甚至一度懷疑祂是不是瘋了。(可三21)" },
    { who: "鄉親", detail: "拿撒勒鄉親聽到祂自稱是彌賽亞，群情激憤，甚至想把祂推下懸崖。祂仍然充滿自信，堅持自己是對的。(路四28-29)" },
    { who: "門徒", detail: "十二個門徒把對彌賽亞的想像投射在祂身上，但他們的想像裡沒有屈辱受死這一段。最後一個個棄祂而去，猶大出賣祂。祂仍然沒有懷恨在心。" },
    { who: "群眾", detail: "群眾期待屬世的彌賽亞：衣食無缺、施行神蹟、推翻羅馬政府。祂令他們失望了，但仍舊服事他們、愛他們。" },
    { who: "宗教領袖", detail: "他們不滿祂打亂日常生活步調、顛覆神學、還批評祂的力量來自魔鬼。承受如此巨大的壓力，祂不慌亂、不焦慮。" }
  ];

  const theologyTopics = [
    { title: "「認識自己才能認識神」的靈修傳統", content: "這個主題在基督教靈修傳統中有極深的根基。奧古斯丁（主後400年）禱告：「主啊，使我能認識自己，好教我能認識祢。」艾克哈特（13世紀）：「不先認識自己，無人能認識神。」聖女大德蘭：「靈性生活的一切問題，無一不是不認識自己所造成的。」加爾文（1530年）：「我們的智慧主要分成兩個部分：認識神和認識自己，兩者的關係緊密而複雜。」屈梭多模：「找到你心靈的入口，你會發現那也是通往神國度的大門。」從古至今，每一位偉大的靈修作家都強調同一件事：認識自己和認識神是一體兩面。這不是「自我中心」，而是通往神的必經之路。", scriptures: ["弗四22-24 脫去你們的舊人…穿上新人；這新人是照著神的形像造的", "詩一三九1-4 耶和華啊，你已經鑒察我認識我。我坐下我起來你都曉得", "耶十七10 我耶和華是鑒察人心、試驗人肺腑的"], reflection: "你是否害怕「太認識自己」？你擔心發現什麼？如果神已經完全認識你（詩139），而且祂認識你之後仍然愛你，那你有什麼理由不敢認識自己？" },
    { title: "依納爵的「神慰」與「神枯」：情緒也是神說話的管道", content: "依納爵（Ignatius of Loyola）是耶穌會創辦人，他的經典作品主張理性（頭腦）與感覺（心靈）必須保持平衡。他開發了一套分析神如何透過情緒對我們說話的方法——四百五十年來幫助了無數基督徒。「神慰」（consolations）指內在的活動和感覺能帶來生命、喜樂、平安和聖靈果子。「神枯」（desolations）則會帶來「死亡」、心靈混亂、浮躁和靈裡不平安。使徒約翰說：「一切的靈，你們不可都信，總要試驗那些靈。」（約壹四1）感覺有時出於肉體和仇敵，但也有時出於神的感動。神期許我們能熟悉祂說話的方式。", scriptures: ["約壹四1 一切的靈你們不可都信，總要試驗那些靈", "加五22-23 聖靈所結的果子就是仁愛、喜樂、和平…", "羅八16 聖靈與我們的心同證我們是神的兒女"], reflection: "你是否曾經有過一種強烈的內在感動（平安或不安），後來發現那其實是神在對你說話？你如何分辨哪些感覺來自神、哪些來自肉體？" },
    { title: "「自我分化」的神學基礎：耶穌如何做自己", content: "耶穌是自我分化的完美典範。祂的身分根基不是別人的評價，而是天父的愛。在受洗時，天父宣告：「這是我的愛子，我所喜悅的」（太三17）——那時耶穌還沒行任何神蹟、還沒為人類捨命。天父的意思是：「你是我所愛的，你很好，你的存在是好的。」耶穌對天父的愛有安全感，所以能抗拒家人、鄉親、門徒、群眾和宗教領袖的龐大壓力，活出真我。祂不自我意識（不只在乎別人忽略自己），也不自私（不只在意自己忘記別人）。連結於天父的愛，讓祂擁有成熟、健康的「真我」。同樣，神在基督裡的愛也是我們活出真我的唯一根基。", scriptures: ["太三17 這是我的愛子，我所喜悅的", "約十五9 我愛你們，正如父愛我一樣；你們要常在我的愛裡", "羅八38-39 無論是死是生…都不能叫我們與神的愛隔絕"], reflection: "你的身分根基是什麼？是天父的愛？還是工作表現、別人的評價、教會中的角色？如果明天你失去了這些外在的身分標籤，你還知道自己是誰嗎？" },
    { title: "「假我」vs.「真我」：梅頓的洞見", content: "修士梅頓（Thomas Merton）深刻描述了假我與真我的對比。他寫道：「我習慣穿上這個假我……將快樂和榮耀的體驗像繃帶一樣纏繞在身上，好讓自己和別人都能看得到我。我就像個透明人，必須穿上不透明的外殼才能被看見。但這個外殼底下是沒有東西的、空的……拿掉這個外殼便一無所有，只剩下那個赤裸裸的我，空虛又空心。」(p.070) 假我產生的結果是：害怕、自我保護、占有欲、操控、自我毀滅的傾向、自我吹噓和自我放縱。神要我們一層層剝掉虛假的面具，讓那個真實的我露出來，喚醒祂早已栽種在我們裡面的「真我種子」。", scriptures: ["弗二10 我們原是祂的工作，在基督耶穌裡造成的", "耶一5 我未將你造在腹中，我已曉得你", "詩一三九13-16 我在母腹中你已覆庇我…你的眼目看見我的肢體"], reflection: "你身上有哪些「外殼」——是你用來讓自己被看見、被接受的？如果拿掉這些外殼，你覺得剩下什麼？你相信「真我種子」已經被神栽種在你裡面嗎？" }
  ];

  const taiwanExamples = [
    { title: "🎭 華人文化中的「面子」與「假我」", scenario: "在華人文化中，「面子」是核心價值之一。我們從小被教導要「顧面子」「給面子」「不丟面子」。在教會中這個模式更加強化：牧師不能表現軟弱、師母必須完美、執事要有體面的家庭。結果是每個人都在維護一個精心打造的「假我」，真實的掙扎和需要被深深掩蓋。", challenge: "列出三個你在教會中展現的「面子」（例如：總是微笑、總是說很好、總是願意服事），然後問自己：哪一個面子如果拿掉，你會覺得最不安？那個不安感告訴你什麼？", insight: "梅頓描述的「穿上假我像穿上外殼」，在華人面子文化中特別真實。我們可能一輩子都在維護那個外殼，到最後連自己都忘了外殼底下的真實自己長什麼樣子。" },
    { title: "📊 台灣社會的「比較文化」與三種試探", scenario: "台灣社會充斥著比較：孩子的成績排名、大學的錄取率、公司的職位高低、房子的坪數大小。這三種試探在台灣特別有力：(1)行為等於我——你考上什麼學校？在哪裡工作？(2)擁有物等於我——開什麼車？住哪一區？(3)別人眼中的我——LINE群組裡別人怎麼看我？朋友圈怎麼想？", challenge: "這週刻意觀察自己在什麼時候會「比較」——薪水、學歷、外表、孩子的表現、教會的服事崗位。每次發現自己在比較時，在心裡對神說：「天父，祢說我是祢所愛的，我所喜悅的。」觀察這句話如何影響你的感受。", insight: "耶穌在受洗時，天父說「你是我的愛子，我所喜悅的」——那時耶穌什麼都還沒做。祂的身分不是建立在表現上。在比較文化中，這是最反文化的宣告。" },
    { title: "🏠 華人家庭中的「情感融合」", scenario: "在許多華人家庭中，孩子的人生就是父母的延伸：「你要讀醫學院因為媽媽希望你當醫生」「你不能嫁給那個人因為爸爸不同意」「你不能搬到另一個城市因為我們需要你在身邊」。這種「情感融合」（enmeshment）和「自我分化」正好相反——孩子無法在不得罪父母的情況下做出自己的選擇。在教會中，類似的動態也會出現：「你不能離開這個小組」「你不能改變服事崗位」。", challenge: "在自我分化量表上為自己打分數。然後思考：你和父母的關係中，有哪些地方你覺得「我不能做我自己，因為他們會不高興」？你是否能在維持關係的同時，堅持自己的想法和選擇？", insight: "包溫的自我分化理論指出：在一個家庭裡有一個人變成熟了，通常會遭遇強大的阻力。三個階段的反彈——「你不對」「改回來」「否則後果自負」——在華人家庭中特別明顯。" },
    { title: "😶 「你正在感覺——就算你未曾察覺」：身體的訊號", scenario: "許多華人基督徒不善於辨識自己的情緒。當被問到「你現在覺得怎麼樣？」時，常見的回答是「還好」「沒什麼」「就那樣」。但身體不會說謊：胃打結、肌肉緊繃、頭痛、心跳加速、失眠——這些都是神透過身體對我們說話的方式。作者說：「往往在頭腦意識到之前，身體已經早一步知道我們裡面出了什麼狀況。」(p.051)", challenge: "這一週練習「身體掃描」：每天晚上花三分鐘，從頭頂到腳底慢慢感受每個部位。哪裡緊繃？哪裡疼痛？哪裡不舒服？然後問自己：這個身體反應可能和今天的什麼經歷有關？把發現寫在日記中。", insight: "書中列出十種常見的「感覺盲區」反應，例如：「我不太重視感覺」「我不知道我的感覺是什麼」「心情不好時分不清是害怕還是生氣」「在我們家，女孩不該發脾氣，男孩不該掉眼淚」。你是否也有類似的經驗？(p.052)" },
    { title: "✈️ 突破「音障」的勇氣", scenario: "作者用1947年楊格突破音障的故事來類比靈性的改變。楊格的上司告訴他：「沒有人能預知結果。在你前面的是一塊未知之地。」飛機在接近音障時劇烈搖晃，所有人都以為會炸裂——但突破之後，楊格說：「不可思議！所謂的『未知』，原來和用手指頭戳果凍一樣簡單。」(p.078-079)", challenge: "想一想你生命中的「音障」是什麼——那個你一直想突破但害怕突破的東西。可能是對父母說出真實的感受、在小組中摘下面具、承認自己的軟弱、或者追求一個被你壓抑已久的夢想。寫下來，然後問神：「祢願意和我一起穿越這道音障嗎？」", insight: "書中的重點不是叫我們像高速飛行一樣生活——作者反而求神幫助我們放慢腳步。但有些時候我們需要勇氣去穿越那道牆。「有些人打敗敵國，有些人為主殉道被鋸成兩半。你的未來如何，只有神知道。」(p.079)" }
  ];

  const weeklyChallenge = [
    { week: "第一週", title: "認識你的情緒語言", mission: "每天晚上花五分鐘，用八大情緒類別（憤怒、悲傷、恐懼、快樂、愛、驚喜、厭惡、羞愧）來「標記」你今天的情感狀態。試著不用「還好」「普通」這種模糊的詞，而是精確地說出：「今天下午開會時我感到焦慮（恐懼類），因為……」「晚上和家人吃飯時我感到滿足（快樂類），因為……」。", scripture: "詩四4「你們應當畏懼，不可犯罪；在床上的時候要心裡思想，並要肅靜。」", journalPrompt: "這一週你最常出現的情緒是哪一類？你是否發現某些情緒是你從來不允許自己去感受的？為什麼？" },
    { week: "第二週", title: "探索三種試探", mission: "花時間默想太四1-11耶穌在曠野受試探的場景。然後問自己：這三種試探中哪一種對我影響最大？(1)用行為證明自己——你是否覺得「不夠努力就不夠好」？(2)用擁有物定義自己——你是否在比較中尋找安全感？(3)用別人的眼光看自己——你是否太在乎別人怎麼想？找一位朋友分享你的發現。", scripture: "太三17「這是我的愛子，我所喜悅的。」——在耶穌還沒做任何事之前，天父已經肯定祂的價值。", journalPrompt: "如果天父今天對你說「你是我的愛子/女，我所喜悅的」，你會有什麼感受？你相信嗎？還是你覺得要「先做到什麼」才配得？" },
    { week: "第三週", title: "自我分化評估", mission: "仔細閱讀自我分化量表的四個層級（0-25, 25-50, 50-75, 75-100），誠實為自己打分。然後找一個你信任的人（配偶、好友或導師）請他也為你打分——注意聽他的理由，不要急著辯解。比較兩個分數的差異，思考為什麼會有差異。", scripture: "箴二十七6「朋友加的傷痕出於忠誠。」", journalPrompt: "自評分數和他人評分有什麼差異？哪些層級的描述最讓你感到不安？那個不安感可能在告訴你什麼？" },
    { week: "第四週", title: "發展真我的第一步", mission: "從四個步驟中選一個開始操練：(1)每天安靜十分鐘留意內心（不聽音樂、不看手機）；(2)找一位信任的人分享你這個月的發現；(3)在一件小事上走出舒適圈——表達不同意見、拒絕一件事、承認一個軟弱；(4)每天用一分鐘禱告：「主啊，讓我有勇氣作真正的自己。」", scripture: "約八32「你們必曉得真理，真理必叫你們得以自由。」", journalPrompt: "你選了哪一步？為什麼選它？執行後有什麼感受？是自由？不安？還是兩者都有？" }
  ];

  const groupDiscussion = [
    { category: "📖 經文探討", questions: ["讀以弗所書四22-24。「脫去舊人、穿上新人」在情感的層面意味著什麼？是一次性的還是持續的過程？", "讀太三17和太四1-11。天父的肯定如何幫助耶穌勝過三種試探？這對你有什麼啟發？", "神在聖經中表達了十種以上的情感（喜悅、憂傷、忌邪、烈怒、永遠的愛等）。這如何改變你對「神是有感覺的」這個概念的理解？"] },
    { category: "🪞 自我探索", questions: ["在三種假身分的試探中，你最容易受到哪一種的影響？可以分享一個最近的例子嗎？", "你在自我分化量表上給自己打幾分？你身邊最親近的人可能會給你打幾分？差異在哪裡？", "作者描述潔芮要去海邊時他的強烈反應——你是否有過類似的經驗：別人的決定讓你產生不成比例的情緒反應？背後的根源是什麼？", "你身上的「假我外殼」是什麼樣子的？如果拿掉它，你覺得別人會看到什麼？"] },
    { category: "🌱 實踐討論", questions: ["四個發展真我的步驟中，哪一個對你最具挑戰性？為什麼？", "當你開始改變，你預期會遭遇什麼樣的「反彈」？從誰那裡？你打算如何面對？", "作為一個小組，我們可以如何幫助彼此「認識自己」？有什麼具體的作法？", "作者說改變的過程像「突破音障」——你生命中的「音障」是什麼？你願意讓小組為你禱告嗎？"] }
  ];

  const reflections = [
    "我是否知道「真正的我」是誰？如果拿掉所有的角色和標籤（職業、教會服事、家庭角色），我還剩下什麼？",
    "我最害怕讓別人看到我的哪一面？這種恐懼如何影響我與神和他人的關係？",
    "三種試探中，哪一種在我的生命中最根深蒂固？它如何影響我每天的決定？",
    "我的「自我分化」程度如何？我是否能在不失去關係的情況下表達不同的意見和選擇？",
    "潔芮要去海邊的故事觸動了我什麼？我是否也有類似的「過度反應」，背後的根源是什麼？",
    "我是否允許自己去感受所有的情緒？還是有些情緒（憤怒、悲傷、恐懼）是我一直在壓抑的？",
    "如果神今天對我說「你是我的愛子/女，我所喜悅的」——在我還沒做任何事之前——我真的相信嗎？"
  ];

  const actions = [
    "用八大情緒類別來「標記」你這一週每天的情感狀態。精確命名你的感受，不要用「還好」帶過。",
    "在自我分化量表上為自己打分數，然後請一位信任的人也為你打分。比較差異。",
    "默想太三17「你是我的愛子/女，我所喜悅的」——每天早上在鏡子前對自己說這句話，持續一週。觀察你的內心變化。",
    "選擇四個發展真我步驟中的一個，這週開始操練。寫下你的經驗和感受。",
    "找出你生命中一個「音障」——你一直想突破但害怕突破的東西。寫下來，帶到禱告中。",
    "讀詩篇139篇全篇，默想神對你的認識有多深。然後寫一封信給神，告訴祂你對「真正的自己」的感受。"
  ];

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="space-y-8">

      {/* ========== 章節標題 ========== */}
      <div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-800 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="relative">
          <div className="flex items-center gap-2 mb-2"><BookOpen className="w-5 h-5 text-emerald-300" /><span className="text-emerald-300 text-sm tracking-widest">第 2 章</span></div>
          <h1 className="font-extrabold mb-3" style={{fontSize:"30px"}}>認識自己才能認識神</h1>
          <p className="text-emerald-200 text-lg mb-4">成為真正的自己</p>
          <p className="text-slate-200 leading-relaxed mb-3" style={{fontSize:"17px"}}>本章從一個驚人的洞見開始：認識自己和認識神是一體兩面。透過潔芮要去海邊的故事、八大情緒類別、三種假身分試探、自我分化量表、耶穌的榜樣、發展真我的四個步驟，以及突破音障的比喻——帶領我們走上認識真實自我的旅程。</p>
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
            <p className="text-slate-200 leading-relaxed italic" style={{fontSize:"17px"}}>「認識自己、認識你與神的關係，兩者的關係錯綜複雜、密不可分。要脫掉虛假的老我，真實活出新我，這個挑戰直接衝擊的就是靈性的核心。」 <span className="text-emerald-300 text-sm ml-1">(p.043)</span></p>
          </div>
        </div>
      </div>

      {/* ========== 開場故事：潔芮要去海邊 ========== */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-teal-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><MessageCircle className="w-6 h-6 text-teal-600" />開場故事：潔芮又要離開了<span className="text-slate-400 bg-slate-100 px-2 py-1 rounded-md font-normal" style={{fontSize:"13px"}}>P44-48</span></h3>
        <p className="text-slate-600 mb-4 leading-relaxed" style={{fontSize:"17px"}}>這個故事揭露了作者深層的不安全感和對妻子的過度依賴——以及他是如何利用聖經來合理化自己的情感不成熟。</p>
        <div className="space-y-3">
          {beachStory.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className={`flex items-start gap-4 rounded-xl p-4 border ${i === 4 ? 'bg-amber-50 border-amber-200' : i === 5 ? 'bg-emerald-50 border-emerald-200' : 'bg-slate-50 border-slate-100'}`}>
              <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold ${i === 5 ? 'bg-emerald-200 text-emerald-800' : 'bg-teal-100 text-teal-800'}`} style={{fontSize:"14px"}}>{i+1}</div>
              <div><div className={`font-bold mb-1 ${i === 5 ? 'text-emerald-800' : 'text-teal-800'}`} style={{fontSize:"16px"}}>{item.phase}</div><p className="text-slate-600 leading-relaxed" style={{fontSize:"17px"}}>{item.detail}</p></div>
            </motion.div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-teal-100 to-emerald-100 rounded-xl p-5 border border-teal-200 mt-4">
          <p className="text-teal-900 font-bold leading-relaxed" style={{fontSize:"18px"}}>💡 「要掙脫束縛、追求自由，就得先學會感受，學會分辨感覺和想法，才會有勇氣去追求神所賜的『真我』，而不是聽從別人的聲音和指令。」(p.048)</p>
        </div>
      </div>

      {/* ========== 神是有感覺的 ========== */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 md:p-8 border border-amber-200 shadow-sm">
        <h3 className="font-bold text-amber-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><Heart className="w-6 h-6 text-amber-600" />我們的神是有感覺的<span className="ml-2 text-xs bg-amber-100 text-amber-600 px-2 py-1 rounded-full border border-amber-200">(p.050-051)</span></h3>
        <p className="text-slate-600 mb-4 leading-relaxed" style={{fontSize:"17px"}}>你的感覺是神所賜的。你是按祂的形像所造的，所以神會思考你也會思考；神有意志你也有；神有感覺你也有。聖經讓我們看見神的十種情感表達：</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {godEmotions.map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-amber-100">
              <span className="font-bold text-amber-700" style={{fontSize:"15px"}}>{item.emotion}：</span>
              <span className="text-slate-600" style={{fontSize:"15px"}}>{item.scripture}</span>
              <span className="text-xs text-slate-400 ml-1">({item.ref})</span>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 八大情緒類別 ========== */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><Compass className="w-6 h-6 text-indigo-600" />八大情緒類別<span className="ml-2 text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded-full border border-slate-200">(p.048-049)</span></h3>
        <p className="text-slate-600 mb-4" style={{fontSize:"16px"}}>丹尼爾·高曼（《EQ》作者）說：「神創造人類就是要他們去感受各種不同的情緒。」研究人員將情緒分為八大類：</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {eightEmotions.map((e, i) => (
            <div key={i} className={`${e.color} border rounded-xl p-3 text-center`}>
              <div className="font-bold" style={{fontSize:"16px"}}>{e.category}</div>
              <p className="text-xs mt-1 opacity-80">{e.examples}</p>
            </div>
          ))}
        </div>
        <div className="bg-red-50 rounded-xl p-4 border border-red-200 mt-4">
          <p className="text-red-800 font-bold" style={{fontSize:"16px"}}>⚠️ 「我們日復一日、年復一年壓抑那些痛苦和失落的感覺，結果變得越來越不像個人，反而比較像是一個外面畫著一張笑臉的空殼——遺憾的是，這卻是教會門徒訓練最常見的結果。」(p.049)</p>
        </div>
      </div>

      {/* ========== 三種試探 ========== */}
      <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-6 md:p-8 border border-violet-100 shadow-sm">
        <h3 className="font-bold text-violet-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}><Shield className="w-6 h-6 text-violet-600" />偽裝假我的三種強烈試探<span className="ml-2 text-xs bg-violet-100 text-violet-500 px-2 py-1 rounded-full border border-violet-200">(p.055-060)</span></h3>
        <p className="text-slate-600 mb-4" style={{fontSize:"16px"}}>耶穌在受洗時，天父宣告：「你是我的愛子，我所喜悅的。」那時祂尚未行神蹟也還沒為人類捨命。緊接著，撒但就用三種假身分來攻擊祂：</p>
        <div className="space-y-3">
          {temptations.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl border border-violet-100 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-violet-50 transition-colors" onClick={() => setOpenTemptation(openTemptation === i ? null : i)}>
                <div className="flex items-center gap-3"><span className="text-2xl">{t.icon}</span><div><span className="text-xs text-slate-400">試探 {t.num}</span><h4 className="font-bold text-violet-800" style={{fontSize:"18px"}}>{t.title}</h4></div></div>
                {openTemptation === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>{openTemptation === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <div className="px-5 pb-5 space-y-3">
                    <div className="bg-violet-50 rounded-xl p-4 border border-violet-100"><div className="font-bold text-violet-700 mb-1" style={{fontSize:"15px"}}>😈 撒但的話：</div><p className="text-slate-700 italic" style={{fontSize:"16px"}}>{t.satanLine}</p></div>
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100"><div className="font-bold text-slate-700 mb-1" style={{fontSize:"15px"}}>📖 背景：</div><p className="text-slate-600" style={{fontSize:"16px"}}>{t.background}</p></div>
                    <div className="bg-orange-50 rounded-xl p-4 border border-orange-200"><div className="font-bold text-orange-700 mb-1" style={{fontSize:"15px"}}>🌍 文化的謊言：</div><p className="text-slate-600" style={{fontSize:"16px"}}>{t.cultureLie}</p></div>
                    <div className="bg-amber-50 rounded-xl p-4 border border-amber-200"><div className="font-bold text-amber-700 mb-1" style={{fontSize:"15px"}}>💡 深入思考：</div><p className="text-slate-600" style={{fontSize:"16px"}}>{t.merton}</p></div>
                    <p className="text-xs text-slate-400">{t.page}</p>
                  </div>
                </motion.div>
              )}</AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 耶穌的真我 ========== */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-teal-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><Sparkles className="w-6 h-6 text-teal-600" />耶穌的真我：讓所有人失望的彌賽亞<span className="ml-2 text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded-full border border-slate-200">(p.064-065)</span></h3>
        <p className="text-slate-600 mb-4" style={{fontSize:"17px"}}>耶穌因為對天父的愛有安全感，所以能抗拒龐大的壓力，活出真我。但幾乎每個人都對祂感到失望：</p>
        <div className="space-y-3">
          {jesusExamples.map((item, i) => (
            <div key={i} className="bg-teal-50 rounded-xl p-4 border border-teal-100 flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-teal-200 rounded-full flex items-center justify-center text-teal-800 font-bold" style={{fontSize:"13px"}}>{item.who}</span>
              <p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>{item.detail}</p>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-teal-100 to-cyan-100 rounded-xl p-5 border border-teal-200 mt-4">
          <p className="text-teal-900 font-bold" style={{fontSize:"17px"}}>💡 「耶穌不自我意識（不會只在乎別人疏忽自己），也不自私（不會只在意自己忘記別人）。連結於天父的愛，讓祂擁有一個成熟、健康的『真我』。」(p.065)</p>
        </div>
      </div>

      {/* ========== 自我分化量表 ========== */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 md:p-8 border border-blue-100 shadow-sm">
        <h3 className="font-bold text-blue-800 mb-4 flex items-center gap-2" style={{fontSize:"24px"}}><Layers className="w-6 h-6 text-blue-600" />自我分化量表<span className="ml-2 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full border border-blue-200">(p.066-069)</span></h3>
        <p className="text-slate-600 mb-4" style={{fontSize:"17px"}}>假設耶穌是百分之百忠於自我，自我分化能力得滿分——你會為自己打幾分？</p>
        <div className="space-y-4">
          {differentiationScale.map((level, i) => (
            <div key={i} className={`${level.color} border rounded-2xl p-5`}>
              <h4 className="font-bold text-slate-800 mb-3" style={{fontSize:"18px"}}>{level.range}</h4>
              <div className="space-y-1">{level.traits.map((t, j) => (<p key={j} className="text-slate-600 flex items-start gap-2" style={{fontSize:"15px"}}><span className="text-slate-400">•</span>{t}</p>))}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ========== 發展真我四步驟 ========== */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="font-bold text-emerald-800 mb-2 flex items-center gap-2" style={{fontSize:"24px"}}><Target className="w-6 h-6 text-emerald-600" />發展真實自我的四個步驟<span className="ml-2 text-xs bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full border border-emerald-200">(p.071-078)</span></h3>
        <div className="space-y-3 mt-4">
          {fourSteps.map((step, i) => (
            <div key={i} className="bg-emerald-50 rounded-2xl border border-emerald-100 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-emerald-100 transition-colors" onClick={() => setOpenStep(openStep === i ? null : i)}>
                <div className="flex items-center gap-3"><span className="text-2xl">{step.icon}</span><h4 className="font-bold text-emerald-800" style={{fontSize:"18px"}}>{step.num}. {step.title}</h4></div>
                {openStep === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </div>
              <AnimatePresence>{openStep === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <div className="px-5 pb-5 space-y-3">
                    <p className="text-slate-600 leading-relaxed" style={{fontSize:"16px"}}>{step.detail}</p>
                    <div className="bg-white rounded-xl p-4 border border-emerald-200 italic text-slate-700" style={{fontSize:"16px"}}>💬 {step.quote}</div>
                    <p className="text-xs text-slate-400">{step.page}</p>
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
        <h3 className="font-bold text-teal-700 mb-4" style={{fontSize:"22px"}}>📝 第二章總結：認識自己的旅程地圖</h3>
        <div className="space-y-3">
          <div className="bg-teal-50 border-teal-200 border rounded-xl p-4"><div className="font-bold text-teal-700 mb-1.5" style={{fontSize:"17px"}}>🏖️ 潔芮要去海邊 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.044-048</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>作者發現自己對妻子的過度依賴源於原生家庭的傷痛。他的「不安全感」無法透過聖經藉口來解決，只能透過認識真實的自己來面對。意外的是，獨處帶來了前所未有的自由。</p></div>
          <div className="bg-amber-50 border-amber-200 border rounded-xl p-4"><div className="font-bold text-amber-700 mb-1.5" style={{fontSize:"17px"}}>❤️ 神是有感覺的 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.048-055</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>情緒分為八大類。神有十種以上的情感表達。感覺是靈魂的語言。依納爵的「神慰」與「神枯」教導我們辨識神透過情緒對我們說話。</p></div>
          <div className="bg-violet-50 border-violet-200 border rounded-xl p-4"><div className="font-bold text-violet-700 mb-1.5" style={{fontSize:"17px"}}>🎭 三種試探與自我分化 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.055-069</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>假身分：行為=我、擁有物=我、別人眼中=我。自我分化量表幫助我們評估成熟度。耶穌是完美的典範——祂讓所有人失望，但忠於天父的旨意。</p></div>
          <div className="bg-emerald-50 border-emerald-200 border rounded-xl p-4"><div className="font-bold text-emerald-700 mb-1.5" style={{fontSize:"17px"}}>🚀 四步驟與音障突破 <span style={{fontSize:"12px", fontWeight:"normal", opacity:0.7}}>p.071-080</span></div><p className="text-slate-600" style={{fontSize:"16px"}}>安靜獨處→找到同伴→走出舒適圈→禱告求勇氣。改變的過程像突破音障——劇烈搖晃之後，所謂的「未知」其實像用手指頭戳果凍一樣簡單。</p></div>
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
