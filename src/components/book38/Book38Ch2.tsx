import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book38Ch2() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    exploration: true,
    questions: true,
    practice: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">第二章</h1>
        <h2 className="text-xl font-semibold text-gray-700">與我同行</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">一、羅馬導遊的比喻——若有人能像介紹西斯汀禮拜堂那樣介紹耶穌</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸回憶一位帶團為生的義大利導遊，帶他們一家參觀西斯汀禮拜堂。這位導遊對這座教堂瞭若指掌：從前往梵蒂岡最快的路線、排隊時間最短的地方，甚至守衛的名字都知道，一路訴說米開朗基羅的故事、鷹架的搭建，直到親眼見到天花板壁畫的震撼。導遊帶他走到角落，指出原本不會注意到的細節——他改變了陸可鐸看待這座教堂的方式，過去只是從遠處欣賞讚嘆，那一天卻親身感受到震撼。陸可鐸不禁想：如果有人能像這位導遊介紹教堂那樣，向我們講述耶穌的故事，清楚教導我們基督的面貌、提醒我們關於祂的一切、激勵我們為這位救主火熱，那該有多好？
              </p>
              <p className="text-gray-700 leading-relaxed">
                他說，真的有這樣一位嚮導——雖然記不得那位羅馬導遊的名字，但耶穌確保我們都會記得這位幫助者是誰：耶穌稱祂為「保惠師」（Paraclete），這個詞在聖經中只出現五次，其中四次出現在耶穌受難前夕（約翰福音十四章16-17節、26節，十五章26節，十六章7-8節，13-14節）。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">二、保惠師——聖靈是一個「祂」，不是「它」</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸指出這幾處經文值得注意之處：首先是三位一體的合一——子要求父，父差派聖靈，展現了快樂的合作關係，彷彿整個天堂都在向門徒提供幫助。其次是代名詞的使用：耶穌不希望我們把聖靈當作一個物體，聖靈是一位有位格的存在，像人一樣有智力、情感與意志——聖靈對教會說話（啟示錄二章7節）、為信徒代求（羅馬書八章26節）、引導並給予門徒指令（使徒行傳八章29節；十六章6-7節）、任命長老（使徒行傳二十章28節）、查驗萬事、知曉神的心意、教導我們何謂福音（哥林多前書二章10-13節）、住在信徒中間和裡面、分賜屬靈恩賜、賜予信徒生命、從我們心裡呼叫（加拉太書四章6節）、引導我們走在神的道上、在軟弱上扶持我們、使萬事互相效力、使信徒剛強——祂也可能被欺哄（使徒行傳五章3-4節）、會憂傷（以弗所書四章30節）、被褻慢和褻瀆。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                他引一項研究指出，只有四成的人相信聖靈是神聖的位格，其他人要麼沒有意見，要麼認為聖靈更像是一股電流或能量——他認為這樣的想法令人遺憾，畢竟很難想像自己與「電流」建立友誼。他邀請讀者與他一同宣誓：永遠不稱聖靈為「它」，聖靈是一位有位格的神，耶穌稱祂為「保惠師」。他也提到不同聖經版本對這個希臘詞的翻譯各異——「安慰者」（KJV）、「輔導者」（ESV）、「辯護者」（NEB）、「代求者」（NASB註釋），菲利普斯譯本則解釋為「另一位來陪伴你的人」；儘管翻譯各異，核心概念相同：我們都不是孤單一個人。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">三、聖靈的使命：教導我們關於耶穌的一切</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸問：聖靈為何而來？只是為了成為我們的神聖夥伴、陪伴我們左右嗎？即便如此，這已足夠——但事實是聖靈有個明確的使命：教導我們關於耶穌的一切事。他再次引約翰福音十四至十六章的經文，感嘆：「誰想得到呢！上帝在地上無形的同在，竟邀請你來上課、向祂學習。」他引哥林多前書二章9-10節：「神為愛他的人所預備的是眼睛未曾看見，耳朵未曾聽見，人心也未曾想到的。只有神藉著聖靈向我們顯明了，因為聖靈參透萬事，就是神深奧的事也參透了。」他指出，世俗主義者在哲學和知識中尋找答案，世界各宗教追隨已故創始人的教誨——唯有基督徒堅守這個不可思議的美好應許：我們的教師不僅在過去說話，現在依然在說話，祂的智慧不被縮限在古老文獻中，而是藉由名為「聖靈」的導師，在我們每天的生活中不斷啟發和教導我們。他再引哥林多前書二章10、12-13、16節：「誰曾知道主的心去教導他呢？但我們是有基督的心了。」總結：我們不必獨自面對問題，不必自己解決「人為何存在」的艱難奧祕，因為我們有一位幫助者、一位神聖的導師，領我們向祂學習最基本的課程：認識耶穌基督。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">四、聖靈榮耀基督，不榮耀自己</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸說，聖靈的主要目標是帶領你進入耶穌的西斯汀禮拜堂，看著你張大眼睛、驚嘆到合不攏嘴——祂會以馬槽的故事吸引你、以十字架的大能賦予你勇氣、以空墳墓的得勝使你再次剛強起來，將對救主炙烈的熱愛毫無保留地傳遞給你，因為「聖靈對耶穌充滿熱情」。他引詹姆斯·I·巴刻（J.I. Packer）的話：「聖靈彷彿站在我們身後，越過我們的肩膀投射光芒，照亮面對我們的耶穌。聖靈的信息從來不是『看著我，聽我說，來到我面前，認識我』，而是『看著祂，瞻仰祂的榮耀；聽祂說，傾聽祂的話語；尋求祂，得著生命；認識祂，品嘗祂賜予的喜樂和平安。』」正如耶穌所預言：「他要榮耀我，因為他要將受於我的告訴你們。」（約翰福音十六章14節）
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">五、彼得與哥尼流的故事——聖靈打開福音之門</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸講述使徒行傳十章的經典故事：虔誠的猶太人彼得，與敬畏尋求神的外邦人哥尼流相遇。哥尼流不引述摩西五經、非亞伯拉罕的後裔，穿長袍、廚房掛豬肉、未受割禮、不潔淨——但他善良又虔誠，「他是個虔誠人，他和全家都敬畏神，多多賙濟百姓，常常禱告神」（使徒行傳十章2節），甚至有天使直接呼喚哥尼流的名字，要他去找當時住在三十英里外約帕的彼得。哥尼流派了三個人去接彼得，彼得起初並不願意赴約，直到「聖靈向他說：『有三個人來找你。起來，下去，和他們同往，不要疑惑，因為是我差他們來的。』」（使徒行傳十章19-20節）陸可鐸總結：聖靈打開了福音之門，不僅歡迎猶太人，也樂意擁抱世界上的其他人；彼得早就知道耶穌對世人的愛不限猶太人，跟隨耶穌三年了，只是仍需要一些提醒，而正是聖靈做了這件事——「叫你們想起」可以詮釋為「適用於現在」，聖靈不僅複述耶穌所說的話，也使這些話語變得有意義，揭示在此時此刻生活中的重要性。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">六、勞苦擔重擔的邀請——陸可鐸自己服事初期的疲憊</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸分享，剛開始服事的某天下午，他本該在研經，卻完全無法集中注意力，正處於上一章所說的疲憊狀態，設法克服失眠、無止盡的不安全感和必須交付的各種期限——他以為自己必須解決每個人的問題、背負每個人的重擔，並且在這過程中永遠不該感到疲憊。過了一會兒，他從辦公椅移到接待客人的椅子上，低下頭嘆了一口氣，就在這時，這句經文在他腦海中浮現：「凡勞苦擔重擔的人可以到我這裡來，我就使你們得安息。」（馬太福音十一章28節）他說，這裡的人稱代名詞「我」讓他深受感動——他一直轉向其他人事物求助，唯獨沒有尋求祂，此時耶穌的話語躍然紙上，安慰了他的心。他問：那句經文為什麼會出現在他的腦海？很簡單，是他的導師聖靈提醒了他，基督的靈也會用同樣的方式幫助讀者——聖靈在我們耳邊輕聲呢喃，讓我們意識到耶穌的真實、祂的邀請也貨真價實，同時實現更大的事工：使我們與主相交，敦促我們、吸引我們、引導我們，鼓動我們接受主耶穌，讓祂成為我們的救主、主、朋友、王。他感嘆：這豈不是天大的好消息嗎？聖靈——那位在創世之初就存在、曾在道成肉身的耶穌身上彰顯力量、陪伴神子經歷復活神蹟、掌管最終啟示的神聖力量，如今要成為你的導師，向你揭示全新的奧祕。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">七、迴力車與高爾夫球僮的比喻——謙卑受教、常常請教</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸分享一個家庭場景：妻子德娜琳買了六台迴力玩具車，四歲的孫女蘿絲已經知道怎麼玩，二十個月大的孫子麥斯卻是第一次見到這種玩具。德娜琳坐在地上教麥斯來回滾動小車，讓車子準備好出發，當車子向前衝、麥斯開心大笑時，德娜琳笑得更加燦爛——麥斯的快樂讓德娜琳歡喜不已。陸可鐸說：聖靈保惠師也是這樣，祂要成為你生命中的德娜琳，問題是，你願意成為祂的麥斯嗎？孫子展現了我們需要抱持的態度：如孩子般單純的靈魂，渴望被教導、願意受引導——謙卑是土壤最好的養分，讓聖靈的果子在其中生長。他鼓勵讀者邀請聖靈進入生活，用這些話語展開一天：「聖靈，歡迎祢！」讓與聖靈同行成為目標，正如加拉太書五章25節所說：「我們若是靠聖靈得生，就當靠聖靈行事。」常常思想這樣的禱告：「祢此刻要教我什麼呢？」「主啊，我該如何應對這個挑戰呢？」「請引領我，我該怎麼做？」停下來留心傾聽，留意聖靈的聲音。
              </p>
              <p className="text-gray-700 leading-relaxed">
                他分享另一個比喻：一次有球僮隨行的高爾夫球賽，球僮不僅幫他揹球袋，還告訴他該怎麼打球——「我在這裡當了二十年球僮，大約打了一萬場。」他對球場的每一株草、果嶺的每個轉折都瞭如指掌，甚至能在黑暗中打球。陸可鐸不停向他提問，球僮都給了明確的答案，他說：若不向他請教，那就太愚蠢了。對基督徒來說也一樣，若我們不開口向聖靈求問，同樣也很愚蠢——祂在這裡就是為了教導我們，而我們擁有每一天、每時每刻與祂精心交流的特權。他以此作結：跟隨聖靈進入耶穌基督的西斯汀禮拜堂，聆聽這位神聖導師在耳邊低聲訴說一切奧妙——祂是充滿熱情的導師，天天期待與你同行。
              </p>
            </div>

          </div>
        )}
      </div>

      {/* 重點總結 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-sky-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">重點總結</span>
          </div>
          {expanded['summary'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['summary'] && (
          <div className="p-5 bg-white">
            <ul className="space-y-3">
              {[
                '聖靈不是一股能量或「它」，而是一位有位格、會說話、會安慰、會引導的神聖保惠師——耶穌用清楚的人稱代名詞來描述祂。',
                '聖靈如同一位最懂耶穌的嚮導，帶領信徒看見屬靈真理中原本容易錯過的細節，使基督在心中變得鮮明生動。',
                '聖靈的核心使命是教導我們一切關於耶穌的事：使我們想起主的話、明白真理、為罪為義為審判自省，正如巴刻所說，聖靈總是把光投射在耶穌身上，而非自己身上。',
                '彼得與哥尼流相遇的故事說明，聖靈不只教導既有的真理，更會在關鍵時刻推動我們跨出舒適圈、明白神更大的心意（如福音也向外邦人敞開）。',
                '陸可鐸自己服事初期疲憊時，正是聖靈用「凡勞苦擔重擔的人可以到我這裡來」這句經文提醒他——聖靈天天與我們同行，使我們不再孤單摸索人生。',
                '迴力車與高爾夫球僮的比喻提醒我們：面對聖靈，健康的態度是像孩子一樣單純受教、常常主動請教，而非自行摸索、獨自承擔。',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-gray-700 leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* 延伸探討 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('exploration')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">延伸探討</span>
          </div>
          {expanded['exploration'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['exploration'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「保惠師」（Paraclete）一詞的多重翻譯，反映了什麼樣的神學豐富性？</h4>
              <p className="text-gray-700 leading-relaxed">
                希臘文 parakletos 字面意思是「被呼召到身旁的人」，在古希臘法律語境中常指出庭為人辯護的律師或代求者。這解釋了為何不同譯本會譯成「安慰者」「輔導者」「辯護者」「代求者」——每個翻譯都捕捉到這個詞的一個面向，卻沒有一個能單獨窮盡其豐富含義。這提醒我們，聖靈的工作本身就是多面向的：祂既在我們軟弱時安慰，也在我們犯罪時如律師般為我們代求（羅馬書八章34節、約翰壹書二章1節提到基督也是我們的中保/辯護者），這種「一位保惠師，多重角色」的特質，正呼應了陸可鐸在第一章提到聖經用十幾種比喻描述聖靈的現象。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">聖靈「榮耀基督、不榮耀自己」的原則，對辨別屬靈教導有何幫助？</h4>
              <p className="text-gray-700 leading-relaxed">
                約翰福音十六章14節「他要榮耀我」是分辨屬靈現象真偽的重要準則之一：任何自稱出於聖靈的教導、經歷或運動，若最終導向的是某位講員、某個群體、或某種屬靈技巧本身的榮耀，而非導向對基督更深的認識與敬拜，就值得謹慎檢視。這與約翰壹書四章2-3節「凡靈認耶穌基督是成了肉身來的，就是出於神的」的辨別原則相呼應——聖靈工作的果效，最終應該讓人「更認識耶穌」，而不是「更佩服某個屬靈明星」。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">彼得需要聖靈「提醒」才能跨出族群界限，對今日教會跨文化事工有何啟發？</h4>
              <p className="text-gray-700 leading-relaxed">
                彼得雖然跟隨耶穌三年、理應深知福音是給萬民的，卻仍需要聖靈明確的介入（連續三次異象、加上聖靈直接的話語）才真正跨出猶太文化的舒適圈，接納外邦人哥尼流。這說明即便是最親近耶穌的門徒，長期文化與宗教習慣所形成的盲點也不易靠自己突破，需要聖靈主動的光照與推動。這對今日教會處理跨文化、跨族群、跨社會階層的隔閡時，同樣是重要的提醒：屬靈的認知正確，不代表行為上已經真正跨越了心理與文化的界限。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 反思問題 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">反思問題</span>
          </div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && (
          <div className="p-5 bg-white space-y-3">
            {[
              '你生命中遇過最好的導師是誰（無論在學校、教會或其他地方）？他具備哪些特質，如何改變了你的人生？',
              '「保惠師」有安慰者、輔導者、辯護者、代求者等不同翻譯，哪一種對你目前的處境最有意義？為什麼？',
              '你是否曾把聖靈當成一股抽象的「能量」或「力量」，而不是一位有位格的「祂」？這樣的認知差異，對你與聖靈的關係有什麼影響？',
              '你曾經從聖靈那裡學到關於耶穌的事嗎？如果有，是什麼樣的經歷？',
              '讀完彼得與哥尼流的故事，你認為聖靈在這個故事中扮演了什麼角色？這對你理解「聖靈如何推動我們跨出既有框架」有什麼提醒？',
              '陸可鐸說自己服事初期「以為必須解決每個人的問題、背負每個人的重擔，且永遠不能感到疲憊」。你是否也背負著類似不屬於自己的重擔？',
              '「你願意成為聖靈的麥斯嗎？」——面對這位渴望教導你的保惠師，你目前的態度更像謙卑受教的孩子，還是習慣獨自摸索的成年人？',
            ].map((q, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0">{i + 1}.</span>
                <p className="text-gray-700">{q}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 具體實踐方針 */}
      <div className="mb-6 border border-green-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('practice')} className="w-full px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">具體實踐方針</span>
          </div>
          {expanded['practice'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['practice'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 逐句標註約翰福音十四至十六章</h4>
              <p className="text-gray-700 mb-2">找一段時間，把約翰福音十四章16-17、26節、十五章26節、十六章7-8、13-14節連續讀過一遍，用不同顏色標註每個用來描述聖靈的詞彙，感受聖靈位格的立體樣貌。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🗣️ 每天一句「聖靈，歡迎祢」</h4>
              <p className="text-gray-700 mb-2">
                本週每天早上起床後，第一件事用一句話邀請聖靈進入你的一天：「聖靈，歡迎祢！」持續一週，觀察這個小小的習慣如何改變你一天的心境。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">❓ 練習主動請教聖靈</h4>
              <p className="text-gray-700 mb-2">
                面對本週一個具體的挑戰或決定，練習像請教高爾夫球僮一樣，直接向聖靈提問：「祢此刻要教我什麼？」「我該怎麼做？」並留心傾聽祂的回應——可能透過經文、平靜的感動、或旁人的一句話臨到。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「保惠師聖靈，謝謝祢不是一股抽象的力量，而是願意與我同行、教導我一切關於耶穌之事的那一位。求祢像那位熟悉每一株草的球僮一樣，天天引導我走過生命中的每一個球道。求祢使我像孩子一樣單純受教，也求祢挪去我不必獨自背負的重擔，安息在耶穌『到我這裡來』的邀請中。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
