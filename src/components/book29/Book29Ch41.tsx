import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch41() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第41章</h1>
        <h2 className="text-xl font-semibold text-gray-700">巴別亂口音</h2>
        <p className="text-gray-500 mt-1">我們下去，在那裏變亂他們的口音，使他們的言語彼此不通。　創世記十一7</p>
      </div>

      {/* 正文 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">正文</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <p className="text-gray-700 leading-relaxed">
              創世記十章記載挪亞三個兒子後裔的名字，其中特別提到法勒。「法勒」是「分」的意思，因為那時人開始分地居住。創世記十一章前半章詳細說明人分地居住的過程，其中包含人的驕傲、自我中心以及神變亂人類口音的干預行動。神的干預，不僅使人分散全地，也是為了將來能夠逐一將各民族拯救回來。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、分散全地前</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記十一1-2：「1那時，天下人的口音、言語都是一樣。2他們往東邊遷移的時候，在示拿地遇見一片平原，就住在那裡。」
              </p>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">一、言語：天下人都一樣（創十一1）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  洪水前的世代，全天下人的口音、言語都是一樣的，這使得任何事的傳播都很快。壞處是，罪惡的影響會快速地擴大；好處是，挪亞的傳道工作沒有語言障礙。洪水後的初期，全天下人的口音仍都是一樣的，神在觀察，人用此特點來做好事還是壞事。結果，神發現人利用言語相同這個特點，正在做一件集體犯罪的事。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">二、地方：在示拿地平原（創十一2）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  挪亞全家出方舟，從土耳其東北部的亞拉臘山走到山下的平地，接著往東走到示拿地平原。「示拿」是「兩河」之意，兩河就是底格里斯河和幼發拉底河，兩河中間的平原就是示拿平原，是人類古文明發源地。挪亞之後的幾代子孫共同選擇了這個最適合生存的地方；這裡的土地最肥沃，而且容易取得飲水資源，這地正是現今的巴比倫平原，被稱為肥沃月彎，初期的文明在此發展。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">三、時間：生法勒的時候（創十25）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  巴別事件變亂口音的時間點，是在希伯生法勒的時候，那時人開始分地居住。希伯剛好生了一個兒子，就取名為法勒，「法勒」是分離的意思，藉此可推算人在何時分地居住。閃在洪水後兩年生亞法撒（創十一10），接著根據創世記十一11~16的記載，後面三代子孫生兒子的年紀分別是亞法撒卅五歲、沙拉卅歲、希伯卅四歲，加起來大約一百年，可推測在洪水後一百年開始分地居住。但這不一定是準確的年代，因其中可能有斷代。例如，路加福音三36的家譜顯示，亞法撒與沙拉之間還有一位該南，是創世記沒有記載的。所以至少是在洪水之後一百多年，人類開始分地居住。路加福音三36：「沙拉是該南的兒子；該南是亞法撒的兒子；亞法撒是閃的兒子；閃是挪亞的兒子；挪亞是拉麥的兒子。」路加福音的家譜與創世記的家譜稍有出入，這代表在以色列人當中，流傳保存了不同的族譜。這些族譜大同小異，所差異的就是有某些斷代，但他們能接受，因為兒子、孫子、子孫是相同的概念。所生的人可以是兒子，也可以是孫子、子孫。
                </p>
              </div>

              <div>
                <span className="font-semibold text-indigo-700">四、人口：約二萬五千人（創十22~25）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  當時距離洪水已過四代以上，由於創世記的記載是簡略的，所以有可能是五代以上。人類從出方舟的八個人開始繁衍，每代合理推估增加五倍人口，經過五代以上，人口應超過二萬五千人。上一章說過，挪亞一家有傳承了一些洪水前的科技知識、能力，再加上肥沃月彎的豐富條件，所以在短時間內，就生養出大量的人口，培養出很多人才，發展出相當高的文明，開始過享樂的生活，並且有很好的建築技術，能建造高塔。人愈有成就，就愈會以自我為中心，以物質享樂為優先，而把創造他、救贖他的上帝丟棄了。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、巴別城與塔</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記十一3-4：「3他們彼此商量說：來罷！我們要作磚，把磚燒透了。他們就拿磚當石頭，又拿石漆當灰泥。4他們說：來罷！我們要建造一座城和一座塔，塔頂通天，為要傳揚我們的名，免得我們分散在全地上。」
              </p>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">一、寧錄與巴別的關係（創十8~10）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  上一章提到，寧錄是洪水後的第一個君王，他比法勒高兩個輩份（創十一14~16），當時的人大約三十多歲生孩子，且可以活到四百多歲。所以當法勒出生、人開始分地居住時，寧錄大約是70歲的壯年時期，若考慮家譜有斷代，則寧錄可能約100歲，70歲至200歲都是最黃金的壯年期。合理推測，當時帶頭建造巴別塔的就是寧錄。他是英勇的獵戶，所施行的不會是文人政治，比較可能是帶有暴力的極權統治。這樣的統治者，再加上建高塔、拜天象、宣揚自己的名，神當然必須干預，使人類有導回正軌的可能。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">二、城與塔的建造（創十一3~4）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  <strong>1. 材料</strong>　所用的材料是人自己作磚，把磚燒透，拿磚當石頭，拿石漆當灰泥。以色列地區大多以石頭為建材，因為石頭很多；但示拿平原是沖積平原，缺少石頭，因此用泥土製磚，藉日照或火烤使之堅硬。石漆也稱岩漆，是生成於岩石表面的礦物性黏稠液體，通常是水中的礦物質在水份蒸發後，與微生物混合所形成，其外觀與瀝青類似，可作磚石的黏著劑，且是許多古代沙漠壁畫顏料的基本成分。所說的一座城和一座塔，這塔應是城裡的一部分。後來的巴比倫城也在此建立。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  從屬靈意義上為巴別城（巴比倫城）和耶路撒冷城做個比較：巴別（巴比倫）城，建材是磚，是人造的材料，是人所建造的一個屬地的城市，至終的結果是遭到毀滅。耶路撒冷城，建材是石頭，為天然材料，是神所建造的一個屬天的城市，至終要永存。耶路撒冷從古至今規定，無論城牆或房屋均要以石頭來建造，目前在當地找不到用磚塊所建造的房子。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>2. 目的</strong>　塔頂通天，原文是塔頂有天，表面意思是塔頂達到天上，實際情況是在最頂層的屋頂作一個天象圖，讓人可以去拜天象，這是一種偶像崇拜。魔鬼是天空屬靈氣的惡魔，因此在世界各地，尤其華人地區，百姓會在山上建塔、蓋廟，拜偶像，覺得越接近天越好。但上帝是無所不在的，我們隨時隨地都可以敬拜他。而在新約時代，聖徒就是神的殿。所以基督徒不需要跟異教的廟宇競爭建高大的教堂，乃應扁平化地將福音傳至每個家庭、每個職場，使人在家庭、職場就能奉主耶穌的名聚集來敬拜神。台灣的101大樓，高508公尺，杜拜的哈利法塔（Burj Khalifa），高828公尺，都不是為敬拜神而建造的，乃是為傳揚人的名。正如同巴別塔至終遭到毀滅，這些人手所造的高樓大廈，都將在七年大災難最後的大地震中傾倒。
                </p>
              </div>

              <div>
                <span className="font-semibold text-indigo-700">三、上帝的干預（創十一5~7）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  創世記十一5-7：「5耶和華降臨，要看看世人所建造的城和塔。6耶和華說：看哪，他們成為一樣的人民，都是一樣的言語，如今既作起這事來，以後他們所要作的事就沒有不成就的了。7我們下去，在那裡變亂他們的口音，使他們的言語彼此不通。」
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>1. 降臨查看</strong>　創世記十一5：「耶和華降臨，要看看世人所建造的城和塔。」這裡的城和塔，指的就是巴別城和城裡的巴別塔，如同耶路撒冷城裡有聖殿。神無所不在，但說他「降臨」，乃是指他關切並要干預這事。神降臨與人建塔有個對比。創世記十一3-4人兩次說：「來罷！」一次說要作磚，一次說要建城。相對應的，創世記十一6-7神兩次說：「看哪！」一次說他們成為一樣的人民，一次說我們下去變亂他們的口音。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>2. 商量計畫</strong>　原本人類語言相同，彼此合一，可以做偉大的事。為什麼神要干預他們的行動、變亂他們的口音？神是否嫉妒他所造的人？這事如同一個家庭中的孩子們彼此合一，但所做的事違背父親的心意，甚至聯合起來背叛父親。所以人合一不一定是好事。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  類似巴別塔的事件——有豐功偉業，卻沒有神，在人類歷史上不斷上演。大企業若沒有倚靠上帝，就成了撒旦的堅固營壘，表面看似興盛，最終走向滅亡；相反地，企業主若能在神權柄下倚靠神行事，則會被神更大賜福與使用。歷史上有名的大帝國——埃及、亞述、巴比倫、瑪代波斯、希臘、羅馬等，都是明顯的例證。亞述帝國的首都尼尼微城，是寧錄所建立（創十11），曾經強盛一時。希臘的亞歷山大大帝曾以武力征服歐、亞、非三洲，並遠達印度，藉此宣揚自己的盛名，但因為沒有信靠上帝，帝國終究瓦解。他臨死前交代要將他的雙手放在棺材外面，讓世人看見，他什麼也帶不走，兩手空空的離開人間。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  神不怕人能幹，但他不要人形成一股堅強勢力來背離神，免得人看不到自己正走在滅亡的道路上，錯失回轉歸向神的契機。就如同歷史上的中國，相較於其他西方國家，為何比較晚得著福音？並非神不眷顧中國。早在唐朝、元朝、明朝、清朝，陸續都有福音傳入中國。透過康熙皇帝的福音詩句，得知康熙也曾信耶穌。福音多次進入中國，但中國國勢強盛，不覺得需要耶穌，將宣教士趕出中國。直到滿清末年，中國腐敗，國勢走下坡，華人才開始有人信主。後來中國有更大的苦難——文化大革命，紅衛兵鬥爭父母，使華人看清自己的軟弱與罪惡，而後才謙卑下來，經歷福音大復興，基督徒人數從原本不到一百萬，增長到如今一億多。由此可見，神不讓人有強大的勢力，不是因為嫉妒，而是出於他的慈愛與憐憫，使人有回心轉意、得蒙救贖的機會。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  神說：「我們下去、在那裏變亂他們的口音、使他們的言語、彼此不通。」（創十一7）這裡的「我們」是指三位一體的上帝，而非上帝加上天使，天使沒有變亂人口音的權柄能力。如同創世記一26，神說：「我們要照著我們的形像、按著我們的樣式造人……。」當時是三位一體的上帝在商量對談，在這裡也是如此。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>3. 變亂口音</strong>　言語是神所給予的，原本神僅賜給人類一種語言，但巴別塔事件後，「耶和華在那裡變亂天下人的言語，使眾人分散在全地上。」（創十一9）現今全球有數千種不同的語言，在同一國家也有不同的語言與口音。例如，同樣在中國，廣東話和北京話有很大差別；同樣在福建，閩南語就跟福州話不一樣。神在巴別塔事件時，可能先將人類的語言變為閃、含、雅弗三種語言，再隨著人類的遷徙，演變為現今多種不同語言。變亂口音不是靜態的，而是動態的。巴別塔之後的語言有一種動態特性，使人們只要分地居住一段時間，就會繼續產生不同的方言。當時的結果是人們言語彼此不通，停工不再建造（創十一8~9）；並且眾人分散全地，各隨方言宗族立國（創十5、20、31~32）。為何聖經在第十章已記載人類分散全地，各隨方言宗族立國，卻在第十一章前半段回溯提到人類語言一樣，神要變亂他們的口音。這是聖經常用的寫法，在第十章大略描述已發生的情況，在第十一章補述第十章的細節，強調這事件的重要性。
                </p>
              </div>

              <div className="mt-4">
                <span className="font-semibold text-indigo-700">四、此事件的意義</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  <strong>1. 人的自大（創十一4）</strong>　在此看到人類強烈的自我中心與人本主義，心中沒有神，無視於神對人類遍滿全地的應許（創九1）與分散全地的命令。<br />
                  <strong>2. 神的權能（創十一8）</strong>　神的權能和憐憫干預了人的計畫，使他們停工，並分散全地。只剩下部分人還留在當地，建造了後來的巴比倫城。<br />
                  <strong>3. 神的目標</strong>　遍滿全地、治理全地，是神交付給挪亞的使命，豈知沒經過多久，挪亞的後代子孫就遺忘神的話，反而為宣揚己名而聚集。初代教會也有類似情況，經歷五旬節聖靈充滿的大復興後，基督徒留在耶路撒冷享受美好的教會生活，這並非神最終的心意。於是神容許逼迫臨到，使門徒分散到各地傳道。華人不易信主，信了主也不易往外宣教，二十世紀在大環境的苦難中許多華人移居海外，到了異地，比較容易信主；已經信主的基督徒，則到世界各地建立教會，為主火熱宣揚福音。
                </p>
              </div>

              <div className="mt-4">
                <span className="font-semibold text-indigo-700">五、對應事件（五旬節聖靈降臨）的意義</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  巴別塔事件後，神變亂人的口音，使人分散全地。而在五旬節，神賜方言給耶路撒冷的基督徒，使外地回來的猶僑都聽見僑居地的語言。這有對應的意義。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>1. 人的順服</strong>　耶穌囑咐門徒，要在耶路撒冷同心禱告、等候聖靈，當聖靈降臨，就必得著能力，可去全地為主作見證（徒一8）。於是門徒在耶路撒冷的馬可樓上同心合意禱告十天，直到聖靈充滿他們。我們看到，巴別塔和五旬節事件的差別，在於人的自大對應人的順服，人為的統一對應聖靈裡的合一。神要我們在聖靈裡合一，並去全地傳揚福音，而非以人為的方式統一在一起。應用在家庭、家族，父母與下一代的關係，是要合一，而非統一。孩子長大後，父母不能掌控孩子，只能從小將基督的生命帶給他們，在聖靈裡藉著禱告將孩子交託給神，使他們在聖靈的帶領中不走偏，支持孩子有自由發展的空間。家庭若沒有神，父母就會用威權來掌控一切，使孩子在高壓下成長；家庭若有神的愛，以神為中心，父母可以將孩子交託給神，使孩子能在充滿愛、尊重與包容的環境下成長茁壯。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <strong>2. 神的權能</strong>　神在五旬節賜下不同語言，使分散各地的猶僑因為聽見門徒講各國方言，敞開心來聽福音、信靠主，福音更隨著猶僑回到僑居地（徒二10）。因此我們推論，羅馬教會乃是由五旬節到耶路撒冷過節的羅馬猶僑，回去羅馬之後所建立的。由此可知，神在五旬節賜下方言，蘊含著強烈的宣教意義，要教會將福音傳到世界各地。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>3. 神的目標</strong>　神在巴別變亂人的口音，使人分散全地，是為要在將來各個擊破，逐一收復地土。神的目標，是使萬國、萬民作主的門徒。萬國的形成是由巴別塔事件後開始的，當時人類就分散全地，各隨其宗族、方言、支派立國（創十5、20、31~32）；而五旬節之後，使徒們則照耶穌所吩咐的大使命，去帶領萬民成為主門徒。洪水前的時代，挪亞將福音傳遍全地，但因全人類籠罩於一股強大的勢力之下，有相同的語言、文化，沒有人敢違背這樣的勢力來信從挪亞所傳的福音。為了救贖人類，神干預建造巴別塔的勢力，使人類分散全地。我們從現今各國信主的情況可以了解，越小的國家、越小的團體，越容易信主。以色列是第一個得到恩典的國家，她是很小的國家。福音接著傳到南歐、中歐與北歐；北歐的國家是小國家，比較容易被改變。在第十世紀的短短一百年間，挪威由一人信主到全國信主。反觀中國和印度，因為國家幅員廣闊，歷經二十個世紀，國家的屬靈氛圍才剛開始有一些明顯的改變。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                神所要的「一」，是我們在聖靈裡合神心意的合一，而非人自己極權的統一；是有愛、有神，藉著犧牲和真愛而得的合一，而不是無愛、無神，靠自己征戰和權謀而得的統一。不管中國歷史上的朝代，或是世界各地的大國，凡靠征戰、權謀得到統一的，很快就會瓦解、傾覆，是巴別塔事件的翻版。願神使用今日的我們，把福音帶給弱勢微小的人，使他們在聖靈裡進入正確地合一。對於表面比較強勢、優秀的人，求聖靈動工，讓他們看見自己的渺小、無能，願意謙卑來到神的面前，領受主耶穌的救恩。不是去轄制、統一別人，而是在聖靈裡與別人合一，被神使用去祝福別人。
              </p>
            </div>

          </div>
        )}
      </div>

      {/* 重點整理 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-sky-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">重點整理</span>
          </div>
          {expanded['summary'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['summary'] && (
          <div className="p-5 bg-white">
            <ul className="space-y-3">
              {[
                '洪水後全人類語言仍一致，遷移到示拿地平原（肥沃月彎），在洪水後約一百多年（希伯生法勒時）人口已達約二萬五千人，發展出高度文明，開始建塔宣揚己名。',
                '寧錄很可能是帶頭建造巴別塔者，塔頂通天實為在頂層設天象圖拜偶像；巴別城以磚為建材（人造、終將毀滅），對比耶路撒冷以石頭為建材（神造、永存）。',
                '神「降臨」變亂人的口音，並非出於嫉妒，而是不願人形成堅強勢力卻背離神，錯失回轉的機會；「我們下去」的「我們」指三位一體的上帝。',
                '巴別事件的意義在於：人的自大、神的權能干預、以及神要人遍滿全地治理全地的目標被短暫遺忘；語言變亂是動態的，之後隨人類遷徙持續演化出數千種語言。',
                '巴別塔與五旬節聖靈降臨形成對應：人的自大對應人的順服，人為的統一對應聖靈裡的合一；神在五旬節賜下方言，蘊含宣教意義，要藉福音使萬國萬民作主門徒。',
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

      {/* 分享題目 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-yellow-50 hover:from-amber-100 hover:to-yellow-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">分享題目</span>
          </div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && (
          <div className="p-5 bg-white space-y-4">
            {[
              '巴別塔事件，如何顯出人的自大、驕傲？神為何及如何出手干預？目的是甚麼？我們自己的生命或所屬的團隊，是否有哪些方面類似建造巴別塔，需要被神調整改變？',
              '巴別塔變亂口音與五旬節聖靈降臨門徒說方言，兩者有何對應的意義？',
              '神所要的合一與人做成的統一有何不同？我們如何為家族、教會、國家族群間的真正合一禱告？',
            ].map((q, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0 text-lg">{i + 1}.</span>
                <p className="text-gray-700 leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
