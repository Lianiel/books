import React, { useState, useMemo } from 'react';
import { Search, X, BookOpen, Users } from 'lucide-react';

interface Character {
  id: string;
  name: string;
  englishName: string;
  subtitle: string;
  era: string;
  books: string;
  quote: string;
  description: string;
  fact?: string;
}

type Era = '全部' | '摩西五經' | '歷史書' | '智慧文學' | '先知書';

const eraColors: Record<string, { bg: string; text: string; border: string; header: string }> = {
  '摩西五經': { bg: 'bg-amber-50', text: 'text-amber-800', border: 'border-amber-200', header: 'bg-gradient-to-r from-amber-100 to-orange-100' },
  '歷史書':   { bg: 'bg-blue-50',   text: 'text-blue-800',   border: 'border-blue-200',   header: 'bg-gradient-to-r from-blue-100 to-indigo-100' },
  '智慧文學': { bg: 'bg-emerald-50', text: 'text-emerald-800', border: 'border-emerald-200', header: 'bg-gradient-to-r from-emerald-100 to-teal-100' },
  '先知書':   { bg: 'bg-purple-50',  text: 'text-purple-800',  border: 'border-purple-200',  header: 'bg-gradient-to-r from-purple-100 to-violet-100' },
};

const characters: Character[] = [
  // ===== 摩西五經 =====
  { id: 'adam', name: '亞當', englishName: 'Adam', subtitle: '第一個人', era: '摩西五經', books: '創世記', quote: '這是我骨中的骨，肉中的肉', description: '上帝用地上的塵土造了亞當，將生氣吹在他鼻孔裡，他就成了有靈的活人。上帝把他安置在伊甸園，囑咐他不可吃分別善惡樹上的果子。亞當受夏娃影響吃了禁果，違背上帝命令，與夏娃一同被逐出伊甸園。', fact: '亞當在希伯來文中是「紅色的土」的意思，壽命長達九百三十歲。' },
  { id: 'eve', name: '夏娃', englishName: 'Eve', subtitle: '第一個女人，所有活人的母親', era: '摩西五經', books: '創世記', quote: '那蛇引誘了我，我就吃了', description: '上帝從亞當的肋骨造了夏娃，作為他的配偶。她受蛇的引誘，吃了善惡樹上的果子，並給亞當吃，導致兩人被逐出伊甸園。她生了該隱、亞伯、塞特等眾多兒女，是「所有活人的母親」。', fact: '夏娃在希伯來文中是「生命」的意思。' },
  { id: 'cain', name: '該隱', englishName: 'Cain', subtitle: '人類歷史上第一個殺人犯', era: '摩西五經', books: '創世記', quote: '我豈是看守我兄弟的嗎？', description: '亞當和夏娃的長子，以農耕為業。因上帝悅納弟弟亞伯的供物而心生嫉妒，將亞伯殺害，成為人類歷史上第一個殺人犯。被上帝懲罰，流離飄蕩於地上，但上帝也為他作記號保護他。他在東方建立了第一座城市。', fact: '該隱在東方之地設立第一座城市，以其子以諾命名。' },
  { id: 'abel', name: '亞伯', englishName: 'Abel', subtitle: '人類歷史上第一個受難者', era: '摩西五經', books: '創世記', quote: '我的血從地裡向上帝呼求', description: '亞當和夏娃的次子，以牧羊為業。他獻上羊群的頭生羊，上帝悅納了他的祭物，卻沒有悅納哥哥該隱的供物，因而遭該隱殺害，是人類歷史上第一個因信仰付出生命的人。新約稱他為義人。', fact: '亞伯在希伯來文中是「短暫」或「虛空」的意思。' },
  { id: 'seth', name: '塞特', englishName: 'Seth', subtitle: '亞當的第三個兒子', era: '摩西五經', books: '創世記', quote: '上帝另立了一個兒子代替亞伯', description: '亞伯被殺後，上帝賜給亞當和夏娃的兒子。塞特的後代延續了敬虔的信仰傳統，從塞特一系，後來出了以諾、挪亞，再到亞伯拉罕，形成信仰族系的主幹。', fact: '塞特壽命長達九百一十二歲。' },
  { id: 'enoch', name: '以諾', englishName: 'Enoch', subtitle: '與上帝同行三百年而不見的義人', era: '摩西五經', books: '創世記', quote: '以諾與上帝同行，就不見了', description: '塞特的後裔，享年三百六十五歲，與上帝同行了三百年。他是聖經中兩位不經歷死亡就被上帝接走的人之一（另一位是以利亞），代表了至高的敬虔生活。希伯來書說「他因信被接去，不至於見死」。', fact: '以諾的名字在不同世代中出現兩次，另一個以諾是該隱的兒子。' },
  { id: 'noah', name: '挪亞', englishName: 'Noah', subtitle: '方舟的建造者', era: '摩西五經', books: '創世記', quote: '我要使洪水全面覆蓋大地，消滅一切有氣息的活物', description: '在充滿罪惡和暴力的時代，挪亞是上帝眼中的義人。上帝命他建造方舟，帶領全家八口及各類動物渡過大洪水。洪水後上帝與挪亞立約，以彩虹為記號，應許不再用洪水毀滅大地。', fact: '挪亞在希伯來文中是「休息」或「安慰」的意思，壽命長達九百五十歲。' },
  { id: 'shem-japheth', name: '閃、雅弗', englishName: 'Shem, Japheth', subtitle: '挪亞敬虔的兒子', era: '摩西五經', books: '創世記', quote: '我們遮蓋父親的醜', description: '挪亞的兒子。含看見父親的醜態並告訴兄弟，閃和雅弗進去遮蓋父親，背著臉，沒有看父親的醜。挪亞因此為他們的後代祝福。閃的後代成為閃族，包括以色列人在內；雅弗的後代成為歐洲和中亞各族。', fact: '閃（Shem）成為「閃族語言」一詞的來源，包括希伯來語、阿拉伯語等。' },
  { id: 'ham', name: '含', englishName: 'Ham', subtitle: '挪亞的兒子，迦南的父親', era: '摩西五經', books: '創世記', quote: '我看見了父親的醜', description: '挪亞的次子。挪亞醉酒露體，含看見父親的醜態而告訴兩個兄弟。因此受挪亞詛咒，他的兒子迦南必作兄弟的僕人。含的後代包括古實、麥西（埃及）、弗和迦南，建立了非洲和近東地區的文明。', fact: '含的後代建立了古代強大的文明，包括埃及和迦南地區。' },
  { id: 'nimrod', name: '寧錄', englishName: 'Nimrod', subtitle: '地上第一個英雄獵人', era: '摩西五經', books: '創世記', quote: '我在上帝面前是個英勇的獵人', description: '含的孫子，是地上第一位英雄，在上帝面前是英勇的獵人。他開始在地上建立王國，統治巴比倫、以列、亞甲和迦尼等城市，是人類建立政治體制的先驅，也與巴別塔事件有所關聯。', fact: '巴別塔事件使人類語言混亂，從此分散到世界各地。' },
  { id: 'abraham', name: '亞伯拉罕', englishName: 'Abraham', subtitle: '信仰之父，萬國的父', era: '摩西五經', books: '創世記', quote: '我信上帝能叫死人復活，使無變為有', description: '上帝呼召他離開本地本族，應許賜他土地、子孫和祝福，使萬國因他得福。他以信心回應呼召，與上帝立約，甚至在上帝要求獻以撒為燔祭時也順服遵行，上帝在最後關頭提供羊羔代替。', fact: '亞伯拉罕原名亞伯蘭，上帝改他的名為亞伯拉罕，意思是「多國的父」。' },
  { id: 'sarah', name: '撒拉', englishName: 'Sarah', subtitle: '亞伯拉罕的妻子', era: '摩西五經', books: '創世記', quote: '我年老了，難道還有此喜事嗎？', description: '亞伯拉罕的妻子，以撒的母親。上帝應許她在九十歲時生兒子以撒時，她在帳棚門口暗笑。她是信心的女英雄，新約稱她為信心的榜樣，而且她服從亞伯拉罕稱他為主人。', fact: '撒拉原名撒萊，上帝改名為撒拉，意思是「公主」，壽命一百二十七歲。' },
  { id: 'hagar', name: '夏甲', englishName: 'Hagar', subtitle: '以實瑪利的母親', era: '摩西五經', books: '創世記', quote: '祢是看顧人的上帝', description: '撒拉的埃及使女。撒拉不育時，將夏甲給亞伯拉罕為妾，生了以實瑪利。後因撒拉的嫉妒而被逐出，在曠野奄奄一息時，上帝使者向她顯現，應許賜福她的兒子，使他成為大國。她是第一個見到上帝並為祂起名的人。', fact: '夏甲是聖經中第一個見到上帝使者並對上帝起名的人，稱祂「看顧人的上帝」。' },
  { id: 'lot', name: '羅得', englishName: 'Lot', subtitle: '亞伯拉罕的侄子', era: '摩西五經', books: '創世記', quote: '讓我往那個小地方去', description: '亞伯拉罕的侄子。因牧人相爭，與亞伯拉罕分開，選擇土地肥沃的所多瑪附近居住。上帝毀滅所多瑪和蛾摩拉時，天使帶他一家逃出，他妻子因回頭看而變成鹽柱。他的兩個女兒後來生下摩押和亞捫的祖先。', fact: '羅得的妻子因回頭看而變成鹽柱，成為聖經中著名的警示故事。' },
  { id: 'melchizedek', name: '麥基洗德', englishName: 'Melchizedek', subtitle: '撒冷王，至高上帝的祭司', era: '摩西五經', books: '創世記', quote: '天地的主人，至高的上帝，賜福你', description: '撒冷王，也是至高上帝的祭司。亞伯拉罕打敗基大老瑪等王凱旋歸來時，麥基洗德帶著餅和酒出來迎接，並為他祝福，亞伯拉罕獻上十分之一給他。希伯來書稱他為基督祭司職分的預表。', fact: '麥基洗德被希伯來書描述為「沒有父、沒有母、沒有族譜」，代表永恆的祭司職分。' },
  { id: 'ishmael', name: '以實瑪利', englishName: 'Ishmael', subtitle: '阿拉伯人的祖先', era: '摩西五經', books: '創世記', quote: '我要使他的後裔極其繁多', description: '亞伯拉罕和夏甲的兒子。在以撒出生後，與母親夏甲被逐出家門。在曠野奄奄一息時，上帝聽見他哭聲，向夏甲應許使以實瑪利成為大國。他後來成為阿拉伯各族的祖先，共生了十二個兒子。', fact: '以實瑪利的名字在希伯來文中意思是「上帝聽見了」。' },
  { id: 'isaac', name: '以撒', englishName: 'Isaac', subtitle: '應許之子', era: '摩西五經', books: '創世記', quote: '父親啊，火與柴都有了，祭物在哪裡呢？', description: '亞伯拉罕和撒拉在年邁時所生的應許之子。上帝命亞伯拉罕獻以撒為燔祭考驗信心，亞伯拉罕順服，上帝在最後關頭提供羊羔代替。以撒娶利百加為妻，生了以掃和雅各，成為以色列民族的先祖。', fact: '以撒的名字意思是「他笑了」，因撒拉在聽到懷孕消息時笑了。' },
  { id: 'esau', name: '以掃', englishName: 'Esau', subtitle: '以東人的祖先', era: '摩西五經', books: '創世記', quote: '我快要死了，長子的名分有什麼用處呢？', description: '以撒的長子，雅各的孿生兄弟。性格粗獷，以打獵為業。因為一碗紅豆湯就把長子名分賣給弟弟雅各，後又被雅各騙走父親的祝福。他的後代成為以東人，長期與以色列為敵。', fact: '以掃出生時全身都是紅色的毛，因此叫以掃，又稱以東。' },
  { id: 'rebekah', name: '利百加', englishName: 'Rebekah', subtitle: '以撒的妻子', era: '摩西五經', books: '創世記', quote: '我偏愛雅各勝過以掃', description: '亞伯拉罕讓老僕以利以謝去找妻子給以撒，在井旁遇見利百加，她主動給僕人和駱駝水喝，顯示善良和殷勤。她嫁給以撒後生了雅各和以掃，偏愛小兒子雅各，幫助他騙取了以撒對以掃的祝福。', fact: '利百加是拿鶴（亞伯拉罕的兄弟）的孫女，屬亞伯拉罕的親族。' },
  { id: 'jacob', name: '雅各', englishName: 'Jacob', subtitle: '以色列民族的父祖', era: '摩西五經', books: '創世記', quote: '我不讓你走，除非你給我祝福', description: '以撒之子。他用一碗紅豆湯買了長子名分，又騙取了父親的祝福。後在雅博渡口與天使摔跤，上帝改他的名為以色列（「與上帝較力」）。他生了十二個兒子，成為以色列十二支派的祖先。', fact: '雅各的名字意思是「抓住腳跟的人」，因他出生時抓住以掃的腳跟。' },
  { id: 'rachel', name: '拉結', englishName: 'Rachel', subtitle: '雅各最愛的妻子', era: '摩西五經', books: '創世記', quote: '求你給我孩子，不然我就死了', description: '拉班的小女兒，雅各最愛的妻子。雅各為她工作了十四年。生了約瑟和便雅憫，在生便雅憫時難產而死，葬在伯利恆路旁，成為聖經中著名的悲劇人物。', fact: '拉結死後葬在伯利恆路旁，至今仍有她的傳統墓地。' },
  { id: 'laban', name: '拉班', englishName: 'Laban', subtitle: '雅各的舅父', era: '摩西五經', books: '創世記', quote: '嫁小女兒在大女兒之前是不可以的', description: '利百加的兄弟，利亞和拉結的父親。雅各為娶拉結工作七年，卻被拉班以利亞掉包，使雅各又多工作七年。他多次欺騙雅各，是聖經中著名的投機人物，但最後與雅各立約和解。', fact: '拉班是個拜偶像的人，他的女兒拉結也偷走了他家中的神像。' },
  { id: 'leah', name: '利亞', englishName: 'Leah', subtitle: '雅各的大妻', era: '摩西五經', books: '創世記', quote: '耶和華看見我受苦，賜給我兒子', description: '拉班的大女兒，雅各的正妻。雖然不是雅各最愛的妻子，但她生了六個兒子（呂便、西緬、利未、猶大、以薩迦、西布倫）和一個女兒底拿，對以色列十二支派的貢獻最大。', fact: '利亞最後被安葬在麥比拉洞，與亞伯拉罕、撒拉等人同葬。' },
  { id: 'joseph', name: '約瑟', englishName: 'Joseph', subtitle: '解夢者，以色列的救星', era: '摩西五經', books: '創世記', quote: '你們的意思是要害我，但上帝的意思是要化為益處', description: '雅各的第十一個兒子，父親最鍾愛的兒子。因被兄弟嫉妒，被賣到埃及為奴，後因能解夢而被法老重用，成為埃及宰相。當飢荒發生時，他寬恕了出賣他的兄弟，帶領全家遷往埃及定居。', fact: '約瑟的彩衣是父親偏愛他的象徵，也引起了兄弟們的嫉妒。' },
  { id: 'benjamin', name: '便雅憫', englishName: 'Benjamin', subtitle: '雅各最小的兒子', era: '摩西五經', books: '創世記', quote: '我們怎能把這弟弟帶去呢？', description: '雅各和拉結的兒子，以色列最後一個支派的祖先。在約瑟的故事中，他是試驗兄弟們是否改過的關鍵人物。約瑟假裝要把便雅憫留下為奴，兄弟們的反應讓約瑟確認他們已經改過自新。', fact: '使徒保羅是便雅憫支派的人。' },
  { id: 'judah', name: '猶大', englishName: 'Judah', subtitle: '雅各第四個兒子，猶大支派的祖先', era: '摩西五經', books: '創世記', quote: '讓我代替便雅憫留下來', description: '雅各和利亞的第四個兒子。起初是出賣約瑟的主謀之一，但在約瑟的試驗中，他主動要求代替便雅憫留下為奴，顯示他深刻的悔改。他的後代成為猶大支派，大衛王和耶穌基督都出自猶大支派。', fact: '雅各臨終時預言猶大：「圭必不離猶大，直到示羅來到」，被認為是彌賽亞預言。' },
  { id: 'miriam', name: '米利暗', englishName: 'Miriam', subtitle: '摩西的姐姐，女先知', era: '摩西五經', books: '出埃及記、民數記', quote: '你們要歌頌耶和華，因他大大得勝', description: '摩西和亞倫的姐姐，以色列的女先知。年幼時機智地幫助保護嬰兒摩西，後在過紅海後帶領婦女擊鼓跳舞讚美上帝。曾因批評摩西而患麻瘋病，後蒙摩西代禱痊癒。', fact: '米利暗是聖經中第一位被稱為「女先知」的人。' },
  { id: 'aaron', name: '亞倫', englishName: 'Aaron', subtitle: '摩西的哥哥，以色列首任大祭司', era: '摩西五經', books: '出埃及記、利未記', quote: '我要作你的口，代你發言', description: '摩西的哥哥，口才極好。當摩西說自己口拙時，上帝指定亞倫作他的發言人。他支持摩西帶領以色列人出埃及，是以色列第一任大祭司，他的後代世代承擔祭司職務。曾在摩西上西乃山時，因百姓要求而鑄造金牛犢，是他最大的過失。', fact: '亞倫的杖在曠野奇蹟地開花結果，作為上帝選定他家族擔任祭司的憑據。' },
  { id: 'moses', name: '摩西', englishName: 'Moses', subtitle: '以色列最偉大的先知和領袖', era: '摩西五經', books: '出埃及記、利未記、民數記、申命記', quote: '我是誰，能去見法老，能帶以色列人出埃及？', description: '以色列歷史上最偉大的先知和領袖。被法老的女兒從尼羅河中救起養育，後得到燃燒荊棘中上帝的呼召，帶領以色列人出埃及，在西乃山從上帝領受律法（十誡）。引導以色列人在曠野漂流四十年，直到迦南邊境才去世，未能進入應許之地。', fact: '摩西的名字意思是「從水裡拉出來的」，由埃及公主命名。' },
  { id: 'jethro', name: '葉忒羅', englishName: 'Jethro', subtitle: '摩西的岳父，米甸的祭司', era: '摩西五經', books: '出埃及記', quote: '你所做的不好，你必弄得過於疲勞', description: '米甸的祭司，摩西的岳父。他帶著摩西的妻子和孩子來見摩西。觀察到摩西從早到晚一個人裁決百姓，建議摩西設立千夫長、百夫長的代議制度，有效分擔領導工作，是管理智慧的典範。', fact: '葉忒羅建議摩西建立有效的代議制度，被視為組織管理的先驅。' },
  { id: 'caleb', name: '迦勒', englishName: 'Caleb', subtitle: '信仰勇士', era: '摩西五經', books: '民數記、約書亞記', quote: '我們立刻上去得那地吧，我們足能得勝', description: '猶大支派的首領，是十二探子之一。當其他十個探子因看到迦南人身形高大而喪膽，迦勒和約書亞堅持上去佔領那地，因此上帝應許他能進入應許之地。他在八十五歲時仍勇於征戰，得到希伯崙為業。', fact: '迦勒在希伯來文中意思是「狗」，可能象徵忠心。' },
  { id: 'balaam', name: '巴蘭', englishName: 'Balaam', subtitle: '被神驢制止的先知', era: '摩西五經', books: '民數記', quote: '上帝所說的，我都要謹守遵行', description: '受摩押王巴勒雇用前來咒詛以色列人的先知。上帝使他的驢三次躲避上帝使者，巴蘭鞭打驢，上帝使驢開口說話問他。最後巴蘭只能祝福以色列，無法咒詛他們。他後來因教唆以色列人犯罪而被殺。', fact: '巴蘭的驢是聖經中少有的會說話的動物之一。' },
  { id: 'phinehas', name: '非尼哈', englishName: 'Phinehas', subtitle: '熱心為上帝的祭司', era: '摩西五經', books: '民數記', quote: '他為上帝的榮耀大發熱心', description: '亞倫之孫，以利亞撒的兒子。當以色列人在什亭與外族通婚和拜偶像時，非尼哈挺身而出，用槍刺穿了一對犯罪的男女，止住了瘟疫。上帝因此賜他平和之約，確立他的後代為永遠的祭司。', fact: '非尼哈的名字在埃及語中的意思是「黑膚色的人」。' },

  // ===== 歷史書 =====
  { id: 'joshua', name: '約書亞', englishName: 'Joshua', subtitle: '征服迦南的領袖', era: '歷史書', books: '約書亞記', quote: '至於我和我的家，我們必定侍奉耶和華', description: '摩西的繼承人，以色列民族進入迦南地的領袖。他帶領以色列人渡過約旦河，攻克耶利哥城，征服迦南全地，並將土地分給各支派。上帝命太陽在基遍停住，讓以色列人有充足時間擊敗敵人。', fact: '約書亞記載太陽停住的神蹟，這是聖經中獨一無二的自然現象。' },
  { id: 'rahab', name: '喇合', englishName: 'Rahab', subtitle: '相信上帝的妓女', era: '歷史書', books: '約書亞記', quote: '耶和華的名是可畏的，我信祂掌管天地', description: '耶利哥城的妓女，接待並保護了約書亞派去的兩個探子，讓他們從窗口用紅繩逃下城牆。她相信以色列的上帝，以紅線為記號，在耶利哥城被毀時全家得救。她後來嫁給撒門，成為大衛和耶穌的先祖。', fact: '喇合是馬太福音所記大衛家譜中提到的外邦女性之一。' },
  { id: 'othniel', name: '俄陀聶', englishName: 'Othniel', subtitle: '以色列第一位士師', era: '歷史書', books: '士師記', quote: '聖靈降在我身上，我擊敗了敵人', description: '以色列的第一位士師，迦勒的侄子。以色列人因拜偶像被上帝交在美索不達米亞王的手中，俄陀聶起來拯救他們，上帝的靈充滿他，他出去征戰勝利，使以色列人得平安四十年。', fact: '俄陀聶是聖經士師記中記載的第一位士師。' },
  { id: 'deborah', name: '底波拉', englishName: 'Deborah', subtitle: '女先知，以色列唯一的女士師', era: '歷史書', books: '士師記', quote: '這次征戰的榮耀不歸給你，必歸給一個婦人', description: '以色列的女先知和士師，在棕樹下坐著聽案。她激勵將軍巴拉出征迦南王耶賓的元帥西西拉。上帝使迦南軍隊潰敗，西西拉逃到雅億帳棚避難，被雅億用帳棚橛子釘死，應驗了底波拉的預言。', fact: '底波拉是以色列歷史上唯一一位女士師。' },
  { id: 'gideon', name: '基甸', englishName: 'Gideon', subtitle: '用三百人擊敗米甸大軍的士師', era: '歷史書', books: '士師記', quote: '我算什麼人，能拯救以色列呢？', description: '以色列的第五位士師。上帝呼召膽小的基甸起來拯救以色列，他以羊毛的兩次奇蹟確認呼召，率領三百人以角聲和火把突擊米甸大軍，大獲全勝。後來百姓要他作王，他拒絕說：「應當由上帝管理你們。」', fact: '基甸又名耶路巴力，因他拆毀了巴力的壇。' },
  { id: 'samson', name: '參孫', englishName: 'Samson', subtitle: '力大無窮的士師', era: '歷史書', books: '士師記', quote: '上帝啊，求你記念我，再賜我力量', description: '以色列的最後一位士師，以神奇力量著名。曾徒手撕裂獅子、用驢腮骨打死一千非利士人。他的力量秘密是留長頭髮作為許願的象徵。被戀人大利拉出賣，頭髮被剪，力量消失，最後在神殿中奮力一搏，與敵人同歸於盡。', fact: '參孫的名字在希伯來文中意思是「小太陽」。' },
  { id: 'delilah', name: '大利拉', englishName: 'Delilah', subtitle: '出賣參孫的女人', era: '歷史書', books: '士師記', quote: '你愛我就告訴我你力量的秘密', description: '非利士人雇用的女子，與參孫相愛後多次試圖探知他力量的秘密。最終參孫透露了頭髮的秘密，大利拉趁他睡著時剃去他的頭髮，將他交給非利士人。她成為背叛和誘惑的象徵。', fact: '大利拉被非利士人各首領許以一千一百塊銀子報酬。' },
  { id: 'jephthah', name: '耶弗他', englishName: 'Jephthah', subtitle: '輕率的誓言', era: '歷史書', books: '士師記', quote: '凡從我家門出來迎接我的，我必將他獻給上帝', description: '迦列的兒子，被兄弟趕出家門後成為強盜頭目，後被以色列人請回抵抗亞捫人。戰前許願將迎接他的第一個人獻給上帝，結果是他的女兒出來迎接。他的女兒為此哀哭了兩個月，最後成為燔祭。', fact: '此事在以色列成為慣例，每年設立四天紀念耶弗他的女兒。' },
  { id: 'ruth', name: '路得', englishName: 'Ruth', subtitle: '忠心的摩押媳婦', era: '歷史書', books: '路得記', quote: '你往哪裡去，我也往那裡去', description: '摩押女子，拿俄米的媳婦。丈夫去世後，她忠心不離拿俄米，隨婆婆回到以色列。在波阿斯的田裡拾穗為生，波阿斯依照律法迎娶她為妻，她成為大衛王的曾祖母，也是耶穌基督的先祖。', fact: '路得是馬太福音耶穌家譜中提到的四位女性之一。' },
  { id: 'naomi', name: '拿俄米', englishName: 'Naomi', subtitle: '路得的婆婆', era: '歷史書', books: '路得記', quote: '不要叫我拿俄米，要叫我瑪拉（苦）', description: '以利沙家的妻子，隨丈夫去摩押避饑荒，丈夫和兩個兒子都死了。她稱自己是「瑪拉」（苦），要帶著媳婦路得回到伯利恆。她智慧地為路得安排了與波阿斯的婚姻，使她們的生活得以重建。', fact: '拿俄米這個名字在希伯來文中意思是「我的愉快」或「我的甜蜜」。' },
  { id: 'boaz', name: '波阿斯', englishName: 'Boaz', subtitle: '路得的丈夫，大衛的先祖', era: '歷史書', books: '路得記', quote: '你離開本地跟隨婆婆，你所行的全都傳揚出來了', description: '伯利恆的大地主，是拿俄米丈夫以利沙家的親族。他對外邦女子路得展現仁慈，允許她在田中拾穗，後依照律法的「近親救贖」制度迎娶路得為妻。他們的兒子俄備得是大衛的祖父。', fact: '波阿斯體現了希伯來文「chesed」（慈愛）的精神，即對家族和弱勢者的忠誠關愛。' },
  { id: 'hannah', name: '哈拿', englishName: 'Hannah', subtitle: '撒母耳的母親', era: '歷史書', books: '撒母耳記上', quote: '求你賜給我一個兒子，我必使他終身事奉耶和華', description: '以利加拿的妻子，因不育而痛苦，在示羅聖殿向上帝禱告，許願若得子必將孩子還給上帝。上帝垂聽禱告，她生了撒母耳，並在孩子斷奶後獻給祭司以利服事。她的感恩之歌「哈拿之歌」是詩歌典範。', fact: '哈拿的禱告成為新約中馬利亞尊主頌的範本。' },
  { id: 'samuel', name: '撒母耳', englishName: 'Samuel', subtitle: '以色列最後的士師，先知中的先知', era: '歷史書', books: '撒母耳記上', quote: '耶和華啊，請說，僕人敬聽', description: '以色列最後的士師，也是偉大的先知。從小在聖殿服事祭司以利，三次聽見上帝呼叫他的名字，才認出是上帝的聲音。他膏立了以色列的第一任和第二任國王——掃羅和大衛，是以色列從士師時代過渡到王國時代的關鍵人物。', fact: '撒母耳是以色列繼摩西後最偉大的先知之一。' },
  { id: 'eli', name: '以利', englishName: 'Eli', subtitle: '年老的大祭司', era: '歷史書', books: '撒母耳記上', quote: '上帝是耶和華，讓祂行祂所喜悅的吧', description: '以色列的大祭司，在示羅的聖殿服事上帝。他收養了哈拿的兒子撒母耳，在聖殿中訓練他服事。他的兩個兒子何弗尼和非尼哈行事邪惡，他未能有效管教，上帝因此審判他的家族。他聽聞約櫃被擄走時，從椅子上仰跌，頸折而死。', fact: '以利擔任大祭司長達四十年。' },
  { id: 'saul', name: '掃羅', englishName: 'Saul', subtitle: '以色列第一任國王', era: '歷史書', books: '撒母耳記上下', quote: '我犯罪了，我背棄了耶和華的命令', description: '便雅憫支派基士的兒子，以色列第一任國王。初膏立時謙遜，後逐漸自大悖逆，未等撒母耳就擅自獻祭，又不遵守對亞瑪力的聖戰令。上帝廢棄了他，膏立大衛代替他。他嫉妒大衛，多次追殺他，最終在基利波山自殺身亡。', fact: '掃羅是全以色列中最高的，從肩頭以上比眾民高出一頭。' },
  { id: 'jonathan', name: '約拿單', englishName: 'Jonathan', subtitle: '大衛最摯誠的朋友', era: '歷史書', books: '撒母耳記上', quote: '你不要懼怕，我父掃羅的手必不加害於你', description: '掃羅的兒子，大衛最親密的朋友。他們之間的友誼被稱為「過於婦女的愛情」。儘管知道大衛將繼承父親的王位，他仍忠於友誼，多次暗中保護大衛，幫他逃脫父親掃羅的追殺，最終與父親同死在基利波山。', fact: '約拿單和大衛的友誼成為歷代最美好的友誼典範之一。' },
  { id: 'david', name: '大衛', englishName: 'David', subtitle: '以色列最偉大的王，合上帝心意的人', era: '歷史書', books: '撒母耳記、列王記、歷代志、詩篇', quote: '耶和華是我的牧者，我必不致缺乏', description: '伯利恆人耶西的小兒子，以色列最偉大的君王。年少時以石頭打死非利士巨人歌利亞，成為以色列第二任國王，建立耶路撒冷為首都。他犯了與拔示巴通姦及謀害烏利亞的重罪，深刻悔改，寫下詩篇五十一篇。聖經稱他為「合上帝心意的人」。', fact: '大衛被許諾他的後裔將永遠統治以色列，耶穌基督就是大衛的後裔。' },
  { id: 'goliath', name: '歌利亞', englishName: 'Goliath', subtitle: '非利士巨人', era: '歷史書', books: '撒母耳記上', quote: '你拿棍子來，我豈是狗嗎？我要把你的肉給天上的飛鳥', description: '非利士人中的巨人，身高約三公尺，每天向以色列軍隊挑戰。以色列士兵都懼怕他，直到少年牧羊人大衛用一塊石頭彈弓將他打倒，然後斬下他的頭。這場勝利使大衛一戰成名。', fact: '歌利亞的鱗甲重達五十七公斤，鐵槍頭重約七公斤。' },
  { id: 'bathsheba', name: '烏利亞、拔示巴', englishName: 'Uriah, Bathsheba', subtitle: '大衛犯罪事件的關係人', era: '歷史書', books: '撒母耳記下', quote: '大衛在以色列中做了可恥的事', description: '烏利亞是大衛手下忠誠的赫人武士，拔示巴是其妻。大衛迷戀其美色，在烏利亞出征期間與她通姦，後命令將烏利亞置於戰場最前線，使其被殺，再娶拔示巴。先知拿單指責大衛此罪，大衛悔改。拔示巴後來成為所羅門的母親。', fact: '拔示巴在所羅門繼位過程中發揮了重要作用，成為王太后。' },
  { id: 'absalom', name: '押沙龍', englishName: 'Absalom', subtitle: '大衛英俊的兒子', era: '歷史書', books: '撒母耳記下', quote: '押沙龍在以色列全境的人心都歸向他了', description: '大衛的第三個兒子，以俊美著稱，全身上下沒有瑕疵。因兄長暗嫩強暴了他的妹妹他瑪而殺死暗嫩，後被父親大衛赦免，卻又圖謀篡位，散布謠言贏得民心，最後發動叛變。在逃跑時頭髮被橡樹枝纏住，懸空被約押殺死。', fact: '押沙龍的頭髮據說每年剪下來的重量相當於約二公斤。' },
  { id: 'solomon', name: '所羅門', englishName: 'Solomon', subtitle: '以色列最智慧的王', era: '歷史書', books: '列王記上、歷代志下', quote: '求賜我智慧和聰明，我好在民前出入', description: '大衛和拔示巴之子，以色列第三任國王，以超凡智慧著名。他建造了耶路撒冷聖殿（「所羅門聖殿」），是以色列最輝煌的建築。然而晚年娶了七百名妻子和三百名妾，受她們影響拜偶像，導致王國在其子時代分裂。', fact: '所羅門接受示巴女王拜訪，顯示他的智慧和財富聞名於當時的全世界。' },
  { id: 'rehoboam-jeroboam', name: '羅波安、耶羅波安一世', englishName: 'Rehoboam, Jeroboam I', subtitle: '南北分裂的兩位首任君主', era: '歷史書', books: '列王記上', quote: '我被以色列人所討厭，使得王國分裂', description: '羅波安是所羅門的兒子，南方猶大王國第一任君主。他企圖進一步增加重稅和強制勞動，導致十個支派背叛，王國南北分裂。耶羅波安一世成為北方以色列王國第一任國王，為防止百姓去南方猶大王國敬拜，在伯特利和但建造金牛犢。', fact: '南北分裂是以色列歷史的重要轉折點，南北兩國此後各自發展。' },
  { id: 'elijah', name: '以利亞', englishName: 'Elijah', subtitle: '雅各的後代，北方以色列王國的先知', era: '歷史書', books: '列王記上下', quote: '我在真神的保佑下，與異教的先知對決', description: '北方以色列王國的先知，在亞哈和耶洗別時代活躍。曾預言三年半乾旱，在迦密山集合四百五十名巴力先知進行火祭對決，上帝的火從天而降顯示真神的能力。最終在大旋風中乘火馬車升天，是聖經中不死而升天的先知之一。', fact: '馬拉基書預言以利亞將在末日再來，新約認為施洗約翰是應驗此預言的人。' },
  { id: 'elisha', name: '以利沙', englishName: 'Elisha', subtitle: '以利亞的繼承人', era: '歷史書', books: '列王記下', quote: '願感動你的靈加倍地感動我', description: '以利亞的繼承人，所行神蹟比以利亞更多。他使書念婦人死去的兒子復活，治癒亞蘭大元帥乃縵的麻瘋病，使浮起的斧頭從水中升上來。他死後，有人將屍體拋入他的墓中，一碰到以利沙的骸骨便復活了。', fact: '以利沙一生行了四十八個神蹟，是以利亞所行神蹟數目的兩倍。' },
  { id: 'naaman', name: '乃縵', englishName: 'Naaman', subtitle: '亞蘭軍的元帥', era: '歷史書', books: '列王記下', quote: '以利沙幫我治好了嚴重的皮膚病', description: '亞蘭國的元帥，患有嚴重的皮膚病（麻瘋病）。亞蘭王指示他去找以利沙治病，以利沙命他在約旦河洗浴七次。他起初傲慢地不服從，後聽從僕人勸說，依命而行，皮膚立刻痊癒。他的故事成為上帝恩典給外邦人的例子。', fact: '乃縵治癒後表示不再拜別神，只拜以色列的上帝。' },
  { id: 'gehazi', name: '基哈西', englishName: 'Gehazi', subtitle: '以利沙的僕人', era: '歷史書', books: '列王記下', quote: '我因騙走了給以利沙的謝禮，而遭到詛咒', description: '以利沙的僕人，是個不規矩的人。乃縵痊癒後送禮物給以利沙，以利沙拒絕了，但基哈西私下去向乃縵討取銀子和衣服據為己有。以利沙知道後，乃縵的麻瘋病轉移到了基哈西身上，並傳及他的後代。', fact: '據說以利沙讓基哈西的麻瘋病也傳給他的後代。' },
  { id: 'ahab', name: '亞哈', englishName: 'Ahab', subtitle: '北方以色列王國第七任君主', era: '歷史書', books: '列王記上', quote: '我受妻子影響，崇拜異教之神，招來家臣的反感', description: '暗利王的兒子，北方以色列王國第七任君主。娶西頓人耶洗別為妻，引進巴力崇拜，招來先知以利亞的強烈反對。他的統治使王國走向墮落，但在面對死亡預言時也曾短暫悔改，上帝因而延緩審判。', fact: '亞哈王在首都撒瑪利亞建造巴力神的神殿，觸怒了上帝。' },
  { id: 'jezebel', name: '耶洗別', englishName: 'Jezebel', subtitle: '北方以色列王國的王后', era: '歷史書', books: '列王記上下', quote: '將母國的神祇帶進以色列的就是我', description: '亞哈王的王后，西頓人摩押力王的女兒。將母國的巴力信仰帶進以色列，讓亞哈受影響崇拜異教之神，引起以利亞的激烈反對。謀殺農夫拿伯奪其葡萄園，最終在耶戶政變中被推下城牆摔死，狗吃了她的屍體。', fact: '亞哈王在首都撒瑪利亞建造異教神的神殿，觸怒了上帝。' },
  { id: 'naboth', name: '拿伯', englishName: 'Naboth', subtitle: '耶斯列的農夫', era: '歷史書', books: '列王記上', quote: '我只是要守護祖先代代相傳的葡萄園，沒想到卻被殺害', description: '耶斯列擁有田地的農夫，被亞哈王和王后耶洗別所殺。亞哈王想要拿伯世代相傳的葡萄園，拿伯堅持不讓，耶洗別便誣告拿伯褻瀆上帝和國王，使拿伯被殺。先知以利亞宣告上帝對亞哈家族的審判。', fact: '對以色列人來說，土地是上帝所賜的，不可買賣，拿伯的拒絕是依據律法的正當行為。' },
  { id: 'jehu', name: '耶戶', englishName: 'Jehu', subtitle: '北方以色列王國第十任君主', era: '歷史書', books: '列王記下', quote: '大家都說我是北方以色列王國唯一的名君', description: '約蘭王的部下、軍隊的元帥。亞哈謝王死後發動政變，殺死北方以色列的約蘭王、王后耶洗別及崇拜異教之神的人，剷除亞哈家族。他建立的王朝傳了四代，但他保留了耶羅波安建造的金牛犢，上帝因此生氣。', fact: '耶戶作戰時會駕著戰車橫衝直撞，以此聞名。' },
  { id: 'josiah', name: '約西亞', englishName: 'Josiah', subtitle: '南方猶大王國第十五任君主，宗教改革的善王', era: '歷史書', books: '列王記下、歷代志下', quote: '我拆毀偶像，推動宗教改革，因而被稱為善王', description: '亞們王年紀輕就去世，他僅八歲就即位為王。約西亞努力重振王國，導正沉迷於偶像崇拜的人。在整修聖殿過程中發現「律法書」（摩西五經），進行宗教改革，拆毀巴力和亞斯他錄的神像，是以色列歷史上最著名的宗教改革君王。', fact: '據說約西亞找到的律法書是摩西所寫的申命記。' },
  { id: 'hezekiah', name: '希西家', englishName: 'Hezekiah', subtitle: '南方猶大王國第十二任君主', era: '歷史書', books: '列王記下、以賽亞書', quote: '我信靠耶和華，不懼亞述的威脅', description: '南方猶大王國第十二任君主，以信仰和政治改革著名。當亞述帝國西拿基立圍攻耶路撒冷時，他向上帝禱告，先知以賽亞傳達上帝的回應，亞述軍隊在一夜之間被天使擊殺十八萬五千人撤退。他患病將死，禱告後上帝延長他十五年壽命。', fact: '希西家挖掘了著名的希西家水道，將水引入耶路撒冷城內，至今仍可參觀。' },
  { id: 'nebuchadnezzar', name: '尼布甲尼撒', englishName: 'Nebuchadnezzar', subtitle: '新巴比倫帝國的君主', era: '歷史書', books: '列王記下、耶利米書、但以理書', quote: '我是攻陷南方猶大王國舉世無雙的巴比倫王', description: '巴比倫帝國的大王，兩度攻破南方猶大王國首都耶路撒冷，將居民擄往巴比倫。他把耶路撒冷聖殿的珍寶都帶到巴比倫，選留優秀才俊（包括但以理）在身邊顧問。晚年有段時間精神失常，像牛一樣四肢爬行，後來悔改歸向上帝。', fact: '傳說他為懷念故鄉的妻子，建造了重現家鄉景色的「空中花園」，是古代七大奇觀之一。' },
  { id: 'daniel', name: '但以理', englishName: 'Daniel', subtitle: '巴比倫宮廷的猶太先知', era: '先知書', books: '但以理書', quote: '我靠著上帝的力量解夢並在獅子坑中得救', description: '一次巴比倫之囚事件中被擄走的智者。他身在異國仍保有信仰，因而獲得上帝的庇佑，被特別讓他接受王室教育。他成功解開尼布甲尼撒王的夢境，獲得重用。在波斯帝國大流士一世時代，因不屈服於壓力而被投入獅子坑，上帝保護他安然無恙。', fact: '但以理在波斯帝國大流士一世時代依然繼續受到重用。' },
  { id: 'belshazzar', name: '伯沙撒', englishName: 'Belshazzar', subtitle: '新巴比倫帝國最後一位王子', era: '先知書', books: '但以理書', quote: '我舉辦豪華盛宴，但牆上出現了神秘文字', description: '尼布甲尼撒王的兒子，新巴比倫帝國最後一位王子。他在宴席上突然看見牆上顯現無法解讀的文字，受到驚嚇，找來但以理解讀。但以理讀出的內容是「伯拉撒和巴比倫將滅亡」，而當晚他便遭人殺害（但5章）。', fact: '伯沙撒的宴席上使用了從耶路撒冷聖殿奪來的金銀器皿，觸怒了上帝。' },
  { id: 'ezra', name: '以斯拉', englishName: 'Ezra', subtitle: '祭司、律法學者', era: '歷史書', books: '以斯拉記、尼希米記', quote: '我是精通律法的學者，為重建耶路撒冷竭盡全力', description: '生於巴比倫的猶太人祭司、律法學者。波斯帝國亞達薛西一世的書記官，第二批巴比倫囚虜還返時，他和耶路撒冷省長尼希米同樣以宗教改革者的姿態，重新帶領猶太人研讀摩西律法，恢復與上帝的立約關係。', fact: '除了金、銀以外，亞達薛西還讓以斯拉帶上祭儀所需要的道具。' },
  { id: 'nehemiah', name: '尼希米', englishName: 'Nehemiah', subtitle: '耶路撒冷省長', era: '歷史書', books: '尼希米記', quote: '我獻出家財，重建耶路撒冷的城牆', description: '生於波斯帝國首都書珊的猶太人，耶路撒冷重建的指導者。亞達薛西王信任尼希米，任命他為猶太省長。回到耶路撒冷後，儘管遭受各方阻撓，他在短短五十二天內帶領百姓重建城牆，之後積極推動宗教改革（尼3-13章）。', fact: '尼希米所擔任的酒政，就是負責為國王的飲食試毒。' },
  { id: 'esther', name: '以斯帖', englishName: 'Esther', subtitle: '波斯帝國的王后', era: '歷史書', books: '以斯帖記', quote: '我救了我的同胞猶太人，免於遭到虐殺', description: '波斯帝國薛西斯一世的王后，猶太人。父母雙亡，由堂兄末底改養育。薛西斯王后位空缺，以斯帖被選為王后。後來官員哈曼計畫滅絕猶太人，她不顧性命危險求見國王，揭露哈曼的陰謀，拯救了猶太人免遭滅族。', fact: '每年初春舉行的「普珥節」，就是紀念以斯帖救猶太人的英勇表現。' },
  { id: 'mordecai', name: '末底改', englishName: 'Mordecai', subtitle: '以斯帖的監護人', era: '歷史書', books: '以斯帖記', quote: '我救了波斯王，成為國王的家臣', description: '波斯帝國薛西斯一世服務的便雅憫支派猶太人，是以斯帖的堂兄和養父。他察覺到密謀叛變計畫，緊急稟告薛西斯一世，救了國王一命。後來成了國王的寵臣，對抗官員哈曼的滅猶計畫（斯2章）。', fact: '末底改擔心以斯帖的處境，一直不讓人告訴她她的猶太身世。' },
  { id: 'vashti', name: '瓦實提', englishName: 'Vashti', subtitle: '波斯帝國的前任王后', era: '歷史書', books: '以斯帖記', quote: '我因為沒出現在宴席上而被離婚', description: '波斯帝國薛西斯一世的第一任王后。國王在大宴上要她當眾展示美貌，但她拒絕了，因而遭廢黜（斯1章）。她的廢黜間接導致以斯帖成為新王后，改變了猶太人的命運。', fact: '瓦實提的廢黜是以斯帖成為王后的關鍵前提。' },
  { id: 'haman', name: '哈曼', englishName: 'Haman', subtitle: '波斯國王的家臣', era: '歷史書', books: '以斯帖記', quote: '我打算殺光猶太人', description: '波斯帝國薛西斯一世的近臣，傲慢自大。對不向自己跪拜的末底改記恨，因而企圖滅絕全波斯境內的猶太人，但計畫被以斯帖和末底改揭露而失敗。最後在自己建設的絞刑台上被處死（斯3-7章）。', fact: '傳說哈曼先以抽籤方式決定猶太人滅絕計畫的執行日，再去脅服國王。' },
  { id: 'cyrus', name: '居魯士二世', englishName: 'Kyros II', subtitle: '波斯帝國的君主', era: '歷史書', books: '以斯拉記', quote: '我使波斯壯大成為一個大帝國，並讓猶太人還鄉', description: '僅二十年就把波斯打造成一個大帝國。西元前五三九年滅了新巴比倫帝國，建立波斯帝國。成為征服巴比倫後釋放被囚禁在巴比倫的猶太人，允許他們返回耶路撒冷並重建聖殿（拉1章），是猶太歷史上最受尊崇的外邦君主。', fact: '獲釋的猶太人稱居魯士二世為救世主（彌賽亞）。' },
  { id: 'nehemiah-zerubbabel', name: '所羅巴伯、耶書亞', englishName: 'Zerubbabel, Jeshua', subtitle: '帶領猶太人回國的領袖', era: '歷史書', books: '以斯拉記、哈該書、撒迦利亞書', quote: '我為耶路撒冷的復興竭盡全力', description: '所羅巴伯是有大衛血統的猶太支派省長，第一批從巴比倫獲釋返回耶路撒冷的人之一。他奉波斯帝國大流士一世的命令，和大祭司耶書亞一起成為耶路撒冷聖殿重建的指導者，信仰的復興也做出巨大貢獻（拉3-5章；該2章；亞4章）。', fact: '耶書亞原本企圖幫助所羅巴伯在聖殿重建完成後即位為王，但計畫落空。' },

  // ===== 智慧文學 =====
  { id: 'job', name: '約伯', englishName: 'Job', subtitle: '忍耐的義人', era: '智慧文學', books: '約伯記', quote: '不論遭遇多大的不幸，我都相信上帝', description: '在應許之地迦南東方一個叫烏斯的地方，擁有堅定信仰的富豪，非猶太人。家有七子三女，過著清清白白的正派生活。上帝稱讚他是最純潔敬虔的人，撒旦試探他，使他失去一切財產、子女，甚至染上嚴重的皮膚病。約伯仍不怨恨上帝，最終上帝賜福他，財產加倍恢復。', fact: '約伯最後壽命長達一百四十歲，擁有一萬四千頭綿羊、六千頭駱駝。' },
  { id: 'jobs-wife', name: '約伯的妻子', englishName: "Job's Wife", subtitle: '患難中的妻子', era: '智慧文學', books: '約伯記', quote: '家裡接連遭逢不幸，難免會說些喪氣話', description: '舊約聖經中以「約伯之妻」出場，沒有名字。與丈夫約伯一起過著正派生活，但遭遇大風吹垮房屋、孩子死去、牲畜遭難，加上約伯得了嚴重的皮膚病。她勸約伯說「你不如詛咒上帝，死了吧」的喪氣話，約伯卻仍表現得毫不動搖（伯2章）。', fact: '約伯的妻子在患難中說出了許多人心中想說的話，卻仍陪伴丈夫走過苦難。' },
  { id: 'eliphaz-bildad-zophar', name: '以利法、比勒達、瑣法', englishName: 'Eliphaz, Bildad, Zophar', subtitle: '約伯的三個朋友', era: '智慧文學', books: '約伯記', quote: '我們想要安慰約伯，卻反而把他逼入絕境', description: '約伯的三個朋友，聽聞約伯的災難後特地來探訪。他們起初陪約伯靜坐七天七夜，後在爭論中，各自主張約伯的苦難是因犯了罪，使約伯更加痛苦。上帝後來斥責他們說的不如約伯，要他們向約伯獻祭並求他代禱（伯3-31章）。', fact: '上帝最後對三個朋友說：「你們說的不如我的僕人約伯說的是。」' },
  { id: 'elihu', name: '以利戶', englishName: 'Elihu', subtitle: '一旁聆聽的青年', era: '智慧文學', books: '約伯記', quote: '我的話應該帶給約伯一絲希望', description: '約伯與三個朋友爭論時，在一旁靜靜聆聽的年輕人。他說：「苦難並不總是上帝的懲罰，也許是上帝基於教育的考量所給予的苦難。」（伯32-37章）。他的話雖未被稱讚，但帶來了不同的觀點。', fact: '有一說認為忒拉的長男鳥斯是約伯的祖先，次男布斯則是以利戶的祖先。' },

  // ===== 先知書 =====
  { id: 'isaiah', name: '以賽亞', englishName: 'Isaiah', subtitle: '南方猶大王國的先知', era: '先知書', books: '以賽亞書', quote: '我預言了巴比倫之囚事件和彌賽亞的降臨', description: '南方猶大王國的先知，活動期間從第九任的烏西雅王到第十二任希西家王時代，長達四十年。他對國王提出建言，預言「只要服從上帝，耶路撒冷必將受到保護」，同時也預言了「童女懷孕生子，起名以馬內利」的彌賽亞預言。', fact: '以賽亞書五十六章以後的作者，一般認為是從巴比倫被擄歸來的猶太人中的一人。' },
  { id: 'jeremiah', name: '耶利米', englishName: 'Jeremiah', subtitle: '南方猶大王國末期的先知', era: '先知書', books: '耶利米書', quote: '我見證了南方猶大王國的覆亡', description: '耶路撒冷出生大的先知，祭司之子。不滿二十歲時接受上帝的召命成為先知。他預言「只要不悔改，耶路撒冷就會被北方的敵人所滅，人民被帶往巴比倫」，但沒有人願意聽（耶1、27章）。他目睹王國覆滅，寫下哀歌。', fact: '耶利米書三十一章的「新契約」預言，是新約聖經的重要神學基礎。' },
  { id: 'ezekiel', name: '以西結', englishName: 'Ezekiel', subtitle: '異象先知', era: '先知書', books: '以西結書', quote: '我以看見異象的方式領受神啟', description: '以西結與其他先知不同，他是以看見異象的方式領受神啟。被帶到巴比倫的第五年，在迦巴魯河旁看見火焰中藍寶石色光中的上帝異象。後在上帝的引導下向骸骨發出預言，骸骨長出肉，復活成為大軍。他的異象包含新聖殿的異象，給遭遇苦難的以色列人帶來盼望。', fact: '以西結的父親名叫「布西」，在耶路撒冷擔任祭司。' },
  { id: 'isaiah-eliakim', name: '以利亞敬', englishName: 'Eliakim', subtitle: '南方猶大王國的宮廷總管', era: '先知書', books: '以賽亞書、列王記下', quote: '我參與和亞述的和談，保護國王不受威脅', description: '南方猶大王國希西家王的宮廷長，和書記官舍伯那一起與亞述使者拉伯沙基進行和談。他沒有隨著拉伯沙基的辱罵和恐嚇起舞，使南方猶大王國的人民聽了拉伯沙基的話後並沒有背叛希西家王（王下18-19章）。', fact: '南方猶大王國的人民聽了拉伯沙基的話後並沒有背叛希西家王。' },
  { id: 'hananiah', name: '哈拿尼雅', englishName: 'Hananiah', subtitle: '南方猶大王國的假先知', era: '先知書', books: '耶利米書', quote: '我用巧妙的假預言蠱惑民眾', description: '南方猶大王國西底家王時代的假冒先知。耶利米預告「巴比倫必將猶太人民套上頸軛」，相反地，哈拿尼雅預言「和平必將到來」，使民眾高興。不過，哈拿尼雅沒有預言能力，不久就被擄去巴比倫（耶28章）。', fact: '耶利米透過上帝預告了哈拿尼雅的死亡，結果應驗了。' },
  { id: 'joel', name: '約珥', englishName: 'Joel', subtitle: '南方猶大王國的先知', era: '先知書', books: '約珥書', quote: '我預言將有上帝的審判及聖靈降臨', description: '巴比倫之囚釋放以後出現的先知。耶路撒冷有一次遭到大批蝗蟲侵擾，約珥將成群的蝗蟲比喻外國軍隊，預告上帝的審判不久將到來（珥1章）。當人們悔改、禁食、向上帝禱告後，上帝憐憫百姓。他也預言「以後我要將我的靈澆灌所有人」（珥3章）。', fact: '約珥這個名字在希伯來語中代表「耶和華是上帝」的意思。' },
  { id: 'hosea', name: '何西阿', englishName: 'Hosea', subtitle: '北方以色列王國的先知', era: '先知書', books: '何西阿書', quote: '大家說我是原諒妻子不貞的「愛的先知」', description: '元前八世紀左右活躍於北方以色列王國的先知。上帝命他娶歌篾為妻，歌篾後來外遇離開，何西阿仍重新買回接納她，象徵上帝對不斷背叛祂的以色列的不離不棄之愛（何1-3章）。他也勸告人們不要拜偶像、淫亂、放蕩。', fact: '何西阿的名字在希伯來語中代表「主的救恩」之意。' },
  { id: 'gomer', name: '歌篾', englishName: 'Gomer', subtitle: '何西阿的妻子', era: '先知書', books: '何西阿書', quote: '我背叛了丈夫何西阿，但後來破鏡重圓', description: '知何西阿的妻子，生有三名子女。那之後歌篾與其他男人私奔，但丈夫何西阿領受了神啟原諒她，兩人重修舊好（何1-3章）。一般認為這在暗喻以色列悔過後，上帝會將他們擁抱回來。', fact: '何西阿所付的十五舍客勒銀子和一個半荷姆大麥，在當時是很大一筆錢。' },
  { id: 'amos', name: '阿摩司', englishName: 'Amos', subtitle: '北方以色列王國的先知', era: '先知書', books: '阿摩司書', quote: '我批判階級差異，遭到驅逐', description: '元前八世紀的先知，原本是在南方猶大王國的提哥亞城牧羊、修理桑樹的粗人（摩7章）。當時的北方以色列王國繁榮興盛，但統治階級的人榨取貧窮百姓，阿摩司前往北方以色列王國告訴他們災害和破壞必將到來（摩7-9章），後遭大祭司驅逐。', fact: '阿摩司是被耶羅波安二世的大祭司亞瑪謝驅逐出境的。' },
  { id: 'jonah', name: '約拿', englishName: 'Jonah', subtitle: '被魚吞下的先知', era: '先知書', books: '約拿書', quote: '我最終還是遵從上帝，前往尼尼微傳講悔改', description: '上帝命令約拿前往亞述帝國的首都尼尼微傳道，但約拿逃跑，乘船往他施去。上帝使暴風雨席捲船隻，水手們抽籤確認是約拿惹的禍，約拿被投入海中，被大魚吞進魚肚三天，後被吐在岸上。他最終前往尼尼微傳道，全城悔改，上帝撤回審判。', fact: '約拿被魚吞進魚肚的故事也被寫成繪本，家喻戶曉。' },
  { id: 'micah', name: '彌迦', englishName: 'Micah', subtitle: '南方猶大王國的先知', era: '先知書', books: '彌迦書', quote: '我譴責有錢人的貪婪，為窮人發聲', description: '彌迦的名字在希伯來文中是「誰能像主一樣」的意思，出身南方猶大王國的鄉村摩利沙。能站在弱者的立場去思考，批判首都耶路撒冷統治階級犯下貪婪之罪（彌2-3章）。同時也預言救世主（彌賽亞）不久將在大衛的故鄉伯利恆誕生，給予人們希望（彌迦5章）。', fact: '耶穌基督的誕生被解釋為應驗了彌迦書中關於伯利恆的預言。' },
  { id: 'nahum', name: '那鴻', englishName: 'Nahum', subtitle: '南方猶大王國的先知、詩人', era: '先知書', books: '那鴻書', quote: '我預言敵國首都尼尼微必將陷落，撫慰了猶太人的心', description: '元前七世紀後半的先知、詩人。那鴻這個名字在希伯來文中意指「安慰者」。他是先知以賽亞的接班人之一。他預言以殘暴著稱的亞述帝國首都尼尼微必將覆滅（鴻3章）。果然不久一如那鴻的預言，尼尼微在西元前六○九年遭到新巴比倫帝國侵略而陷落。', fact: '據說那鴻是伊勒歌詩出身，確切位置不明。' },
  { id: 'habakkuk', name: '哈巴谷', englishName: 'Habakkuk', subtitle: '南方猶大王國的先知、詩人', era: '先知書', books: '哈巴谷書', quote: '我在混亂失序的南方猶大王國等待上帝拯救', description: '活動間從西元前七世紀後半南方猶大王國的約西亞王時代到王國末年。他向上帝呼求：「為什麼不救援你的子民？」上帝告訴哈巴谷：「巴比倫的侵略是我對南方猶大王國所犯的罪的審判。」但上帝也應許巴比倫不久也會滅亡，帶給他希望（哈1-2章）。', fact: '哈巴谷是位詩人，新約聖經裡也引用了哈巴谷書優美的詞句。' },
  { id: 'zephaniah', name: '西番雅', englishName: 'Zephaniah', subtitle: '南方猶大王國的先知', era: '先知書', books: '西番雅書', quote: '我是擁有南方猶大王國王室血統，說話簡單明瞭的先知', description: '元前七世紀後半南方猶大王國約西亞王治世初期的先知。相傳他是希西家王的曾孫，擁有南方猶大王國王室血統。西番雅是個很有教養的人，直接宣講上帝的審判，不僅對猶大國的百姓和統治階級，也包括鄰近各國。', fact: '西番雅書被認為不是全部由本人寫成，有些部分經過竄改。' },
  { id: 'haggai', name: '哈該', englishName: 'Haggai', subtitle: '耶路撒冷的先知', era: '先知書', books: '哈該書', quote: '我很遺憾，沒能親眼看到民族的復興和聖殿重建', description: '元前六世紀後半在耶路撒冷活動的年老先知，活動期間僅四個月。新巴比倫帝國瓦解後，他向負責重建耶路撒冷的所羅巴伯和大祭司耶書亞闡述聖殿的重要性，強調建設聖殿是建立民族信仰的關鍵，為重建聖殿竭盡全力。', fact: '哈該書寫成於西元前五二○年，聖殿於五年後重建完成。' },
  { id: 'zechariah', name: '撒迦利亞', englishName: 'Zechariah', subtitle: '耶路撒冷的先知', era: '先知書', books: '撒迦利亞書、以斯拉記', quote: '我看見八個異象，努力重建聖殿', description: '元前六世紀後半在耶路撒冷活動的先知，活動期間比哈該晚一些返回，推動聖殿重建。他能透過看異象領受上帝的話（亞1-6章）。有一天晚上，他看見八個奇妙的異象，其中金燈臺和兩棵橄欖樹的異象，暗示省長所羅巴伯和大祭司耶書亞得到上帝的幫助。', fact: '舊約聖經中叫做「撒迦利亞」的人物有三十個之多。' },
  { id: 'obadiah', name: '俄巴底亞', englishName: 'Obadiah', subtitle: '活動地點不明的先知', era: '先知書', books: '俄巴底亞書', quote: '我預言了以掃所居住的以東將滅亡', description: '生平事蹟不詳。他激起對背叛上帝和以色列人、服從新巴比倫帝國的以東人同仇敵愾的心理，預言以東必滅（俄1章）。俄巴底亞書只有一章，在日文版舊約聖經裡只有兩頁，是篇幅最短的一卷先知書。', fact: '俄巴底亞的活動期間有西元前九世紀和西元前六世紀兩種說法。' },
];

const ERAS: Era[] = ['全部', '摩西五經', '歷史書', '智慧文學', '先知書'];

const eraButtonColors: Record<Era, string> = {
  '全部': 'bg-gray-700 text-white',
  '摩西五經': 'bg-amber-600 text-white',
  '歷史書': 'bg-blue-600 text-white',
  '智慧文學': 'bg-emerald-600 text-white',
  '先知書': 'bg-purple-600 text-white',
};

export default function Book23Home() {
  const [search, setSearch] = useState('');
  const [selectedEra, setSelectedEra] = useState<Era>('全部');
  const [selected, setSelected] = useState<Character | null>(null);

  const filtered = useMemo(() => {
    const s = search.trim().toLowerCase();
    return characters.filter(c => {
      const matchEra = selectedEra === '全部' || c.era === selectedEra;
      const matchSearch = !s ||
        c.name.includes(s) ||
        c.englishName.toLowerCase().includes(s) ||
        c.subtitle.includes(s) ||
        c.description.includes(s);
      return matchEra && matchSearch;
    });
  }, [search, selectedEra]);

  const eraCounts = useMemo(() => {
    const counts: Record<string, number> = { '全部': characters.length };
    characters.forEach(c => {
      counts[c.era] = (counts[c.era] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-red-700 bg-clip-text text-transparent">
          舊約聖經人物圖鑑
        </h1>
        <p className="text-gray-600 text-sm">收錄兩百七十六位舊約聖經人物，點選人物卡片查看詳細介紹</p>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="搜尋人物姓名、英文名稱或身份..."
          className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Era filter */}
      <div className="flex flex-wrap gap-2 mb-5">
        {ERAS.map(era => (
          <button
            key={era}
            onClick={() => setSelectedEra(era)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
              selectedEra === era
                ? eraButtonColors[era]
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {era}
            <span className="ml-1 text-xs opacity-75">({eraCounts[era] || 0})</span>
          </button>
        ))}
      </div>

      {/* Count */}
      <div className="flex items-center gap-2 mb-4">
        <Users className="w-4 h-4 text-gray-400" />
        <p className="text-sm text-gray-500">找到 <span className="font-semibold text-gray-700">{filtered.length}</span> 位人物</p>
      </div>

      {/* Character grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <p>找不到符合「{search}」的人物</p>
          <button onClick={() => setSearch('')} className="mt-2 text-amber-600 underline text-sm">清除搜尋</button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {filtered.map(char => {
            const colors = eraColors[char.era] || eraColors['摩西五經'];
            return (
              <button
                key={char.id}
                onClick={() => setSelected(char)}
                className={`p-3 rounded-xl border ${colors.border} ${colors.bg} hover:shadow-md active:scale-95 transition-all text-left`}
              >
                <div className={`text-xs font-medium ${colors.text} mb-1 opacity-80`}>{char.era}</div>
                <div className="font-bold text-gray-800 text-base leading-tight">{char.name}</div>
                <div className="text-xs text-gray-500 mt-0.5">{char.englishName}</div>
                <div className="text-xs text-gray-600 mt-1 leading-snug line-clamp-2">{char.subtitle}</div>
              </button>
            );
          })}
        </div>
      )}

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-t-3xl sm:rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal drag handle (mobile) */}
            <div className="flex justify-center pt-3 pb-1 sm:hidden">
              <div className="w-10 h-1 bg-gray-300 rounded-full" />
            </div>

            {/* Modal header */}
            <div className={`px-5 py-4 ${(eraColors[selected.era] || eraColors['摩西五經']).header}`}>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <span className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full bg-white/70 ${(eraColors[selected.era] || eraColors['摩西五經']).text} mb-2`}>
                    {selected.era}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900 leading-tight">{selected.name}</h2>
                  <p className="text-gray-600 text-sm">{selected.englishName}</p>
                  <p className="text-sm font-medium text-gray-700 mt-1">{selected.subtitle}</p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="ml-3 p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors flex-shrink-0"
                >
                  <X className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>

            {/* Modal body */}
            <div className="p-5 space-y-4">
              {/* Quote */}
              <div className={`rounded-xl p-4 border ${(eraColors[selected.era] || eraColors['摩西五經']).border} ${(eraColors[selected.era] || eraColors['摩西五經']).bg}`}>
                <p className={`font-medium italic leading-relaxed ${(eraColors[selected.era] || eraColors['摩西五經']).text}`}>
                  「{selected.quote}」
                </p>
              </div>

              {/* Books */}
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <span className="text-sm text-gray-600">出現於：<span className="font-medium text-gray-800">{selected.books}</span></span>
              </div>

              {/* Description */}
              <div>
                <p className="text-gray-700 leading-relaxed text-sm">{selected.description}</p>
              </div>

              {/* Fact */}
              {selected.fact && (
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-3">
                  <p className="text-xs text-amber-900 leading-relaxed">
                    <span className="font-semibold">💡 小知識：</span>{selected.fact}
                  </p>
                </div>
              )}

              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                className="w-full py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium text-sm transition-colors"
              >
                關閉
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
