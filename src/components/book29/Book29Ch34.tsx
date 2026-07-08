import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch34() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第三十四章</h1>
        <h2 className="text-xl font-semibold text-gray-700">挪亞造方舟</h2>
        <p className="text-gray-500 mt-1">你要用歌斐木造一隻方舟，分一間一間地造，裡外抹上松香。方舟的造法乃是這樣：要長三百肘，寬五十肘，高三十肘。方舟上邊要留透光處，高一肘。方舟的門要開在旁邊。方舟要分上、中、下三層。……挪亞就這樣行。凡神所吩咐的，他都照樣行了。創世記六14-22</p>
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
              挪亞造方舟，不僅在基督的救恩上有重要的預表，它在人類歷史本身，也是一個具關鍵地位的里程碑。洪水之前有所謂的史前文明，其科技是相當先進的，許多人對此很有探究的興趣。其實聖經早已有記載，讓我們知道洪水前的概況。沒有很久，就在大約四千五百年前之前，人類已經有高度的文明，但罪惡使那一切沉入海裡、掩入土中。考古學的工作會陸續發現這些遺跡，告訴人們，今天引以為傲的文明，一樣會被全然毀滅，正如啟示錄所預言的。但挪亞的方舟保存了一家人，以及一些重要文物，使洪水後的新世代，有一些基礎可以快速發展。以下分八方面來分享：
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、挪亞的造與行</h3>
              <p className="text-gray-700 leading-relaxed">
                「造」這個字，神造天地（創二4）、造一個配偶（創二18），都用這個字。不僅神能造，神也賦予他所造的人有造的能力，所以神要挪亞造方舟。但這件事不僅需要能力，也需要順服，22節兩次講到挪亞就這樣行、照樣行，充分描繪出挪亞順服的態度。這是人與神同工應有的樣式，正如耶穌基督在世上事奉的態度：「耶穌對他們說：我實實在在的告訴你們，子憑著自己不能做甚麼，唯有看見父所做的，子纔能做；父所做的事，子也照樣做。」（約五19）（謝挺，《始於神──創世記靈修日引》，2月15日）
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、歌斐木的方舟</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                歌斐木（gopher）這個字在聖經中唯獨出現這一次，似乎在表達，這是另一個世界的木頭，洪水後就不再有這種木頭了。這大概是在高氧壓、高大氣壓力下歷經數百年成長出來的一種堅硬木頭，不會朽壞。用歌斐木來製造方舟，一方面可以在大洪水中抵抗撞擊，一方面能存留久遠成為一個見證。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在人類歷史中，有許多關於方舟被人看見的記載，包括主前三世紀的巴比倫文獻、主前三十年代的埃及史料，著名的馬可波羅也在十三世紀時紀錄說，方舟在天氣晴朗時，仍可以在亞拉臘山上看見。第二次世界大戰時，美國飛行員、俄國空軍都有目睹方舟的見證。亞拉臘山上是長年積雪之處，一年之中只有短暫的時間冰雪會融化，才可看得到方舟，但很快的又會被冰雪覆蓋起來。亞拉臘山海拔5137公尺，所有路徑每年都會被新雪覆蓋，所以雖然曾經有人看過方舟，但要重複相同路線去看，是非常困難的。還有許多記載與傳說，可參看《威明頓聖經輔讀（卷上）》的內容，及孫大程博士在《創世以來的奧秘》一書中的整理。
              </p>
              <p className="text-gray-700 leading-relaxed">
                「方舟」這個字也用在裝嬰孩摩西的蒲草箱上，那箱子保護了摩西免於被水淹死，帶領以色列全家去流奶與蜜的迦南地發展。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、裡外抹上松香</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「松香」的原文有動詞與名詞。前者是動詞，有遮蓋及贖罪的意思，在舊約出現102次，可翻譯為潔淨、贖、贖罪、赦免、饒恕、除掉等，其中最多譯為贖罪。後者是名詞，有覆蓋物、贖金（贖價）的意思，在舊約出現17次。只有一次在這裡譯為松香，兩次譯為賄賂，其餘大部分都譯為贖價。聖經這樣用字，隱含著重要的屬靈意義。挪亞所用的松香，以科學的角度推測，可能類似瀝青，塗抹在整個方舟上，是為了讓滅命的水不能侵入。這事正像以色列預備出埃及時，神指示要將羔羊的血塗抹在門框上，使滅命的使者不能進入家中。後來神繼續指示摩西，要用祭物的血來塗抹各樣的物件，都為了潔淨、贖罪。如希伯來書九21-22所說：「21他又照樣把血灑在帳幕和各樣器皿上。22按著律法，凡物差不多都是用血潔淨的；若不流血，罪就不得赦免了。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                到了新約，清楚看到，舊約的祭物都是預表基督，是基督的寶血塗抹遮蓋我們，使我們除去罪的污穢、脫離罪的綑綁，而這罪是能使我們滅命的，如大洪水一般。所以耶穌說：「人子來，並不是要受人的服事，乃是要服事人，並且要捨命作多人的贖價。」（可十45）保羅也說：「他（耶穌）捨自己作萬人的贖價，到了時候，這事必證明出來。」（提前二6）
              </p>
              <p className="text-gray-700 leading-relaxed">
                可以想像嗎，方舟能保護洪水中的唯一命脈──挪亞一家八口，是因為基督的寶血塗抹在整個方舟上面，無一處例外。今天我們要蒙神保護，除了信主時一次接受耶穌寶血除罪，也當天天支取這恩典，奉主名宣告基督的寶血塗抹在我們這個人身上、在我們的家、在我們的教會。每次若察覺罪念或罪行，也當靠基督寶血洗淨，如約翰壹書一7-9所說：「7我們若在光明中行，如同神在光明中，就彼此相交，他兒子耶穌的血也洗淨我們一切的罪。8我們若說自己無罪，便是自欺，真理不在我們心裡了。9我們若認自己的罪，神是信實的，是公義的，必要赦免我們的罪，洗淨我們一切的不義。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">肆、上邊留透光處</h3>
              <p className="text-gray-700 leading-relaxed">
                創世記六16：「方舟上邊要留（造）透光處，高一肘。」上邊造透光處，說明光的重要。若沒有光，他們看不見，無法做事；若沒有光，他們會缺乏日照所能產生的營養素，身體抵抗力下降，容易生病。屬靈生命上，一定要有透光處，讓神的光能照進我們內心。如耶穌所說：「22眼睛就是身上的燈。你的眼睛若瞭亮，全身就光明；23你的眼睛若昏花，全身就黑暗。你裡頭的光若黑暗了，那黑暗是何等大呢！」（太六22-23）許多人的屬靈眼睛是瞎的，以至於內心是黑暗的，至終就走向滅亡，如耶穌與法利賽人的對話所顯示的：「39耶穌說：我為審判到這世上來，叫不能看見的，可以看見；能看見的，反瞎了眼。40同他在那裡的法利賽人聽見這話，就說：難道我們也瞎了眼麼？41耶穌對他們說：你們若瞎了眼，就沒有罪了；但如今你們說我們能看見，所以你們的罪還在。」（約九39-41）
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">伍、門要開在旁邊</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「方舟的門要開在旁邊」（創六16），這有實用性、必要性，門開在旁邊，人與動物才方便進入。但這個門如何關，洪水會不會從門縫進來？這裡會不會成為最脆弱的地方？我們看到，最後是神親自來關門的：「凡有血肉進入方舟的，都是有公有母，正如神所吩咐挪亞的。耶和華就把他關在方舟裡頭。」（創七16）若是神親自關的，就有安全保障。在我們的生命中，有很多事情是我們的責任該做的，我們就盡力去做，但也有一些事，其實是我們做不到的，卻是重要的，那就讓神來做。在這些事上，我們所能做的，只有禱告、仰望。神是活的，是掌管一切的，我們若已經做了神所吩咐的，神豈不會做他的那一份呢？就像挪亞，他已經照神的吩咐把人與動物都帶進方舟了，神豈不親自來關門嗎？
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                本書第十一章提到喬治慕勒開辦孤兒院，他是一個大有信心的人。有一次孤兒院沒有錢可買食物，用餐時間到了，餐廳同工來請示慕勒。慕勒說，照常擺餐具，做謝飯禱告。結果，一禱告完，整卡車的食物就送到了，原來有工廠臨時不能開工，原要給員工的食物就轉送來孤兒院。喬治慕勒努力做很多事，但最主要的是倚靠神，才能養育出那麼多的孤兒。
              </p>
              <p className="text-gray-700 leading-relaxed">
                門開在旁邊，相似於耶穌的肋旁被打開那個情景，使生命有了活路。當耶穌在十字架上斷氣時，聖殿的幔子打開了，成為一個可進入至聖所的門，正如福音書及希伯來書所說的。馬可福音十五37-38：「37耶穌大聲喊叫，氣就斷了，38殿裡的幔子從上到下裂為兩半。」希伯來書十19-20：「19弟兄們，我們既因耶穌的血得以坦然進入至聖所，20是藉著他給我們開了一條又新又活的路，從幔子經過，這幔子就是他的身體。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">陸、要分層與分間</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「方舟要分（造）上、中、下三層」（創六16），這是一個相當科學的做法，不僅使方舟具有橫向的力量去擋住方舟前後左右四個方向的水壓，也使方舟產生了三倍的空間，加上前面說過「分一間一間地造」（創六14），這樣就可以很充裕地用來安置各種動物及擺放食物。挪亞全家的活動空間，應該是在上層，這樣他們可以配合陽光，日出而作，日落而息。有些動物可以類似冬眠，就讓牠們安置在下層，那是比較沒有陽光的地方。食物則可以放在中間層，取用比較方便。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                帶進方舟的，除了人、動物、食物之外，很有可能他們把樂器、銅器、鐵器等也帶進方舟。創世記四20-22提到雅八是牧養牲畜之人的祖師，猶八是一切彈琴吹簫之人的祖師，土八該隱是打造各樣銅鐵利器的。這種講法，暗示這些技術有被傳承下來。這些技術是中性的，屬神的人也可以運用，但用得合乎中道，不會把藝術、科技當作上帝。若挪亞全家在方舟上層，用樂器伴奏，一起唱詩讚美神，那應是一幅非常美好的畫面。
              </p>
              <p className="text-gray-700 leading-relaxed">
                洪水後的民生科技可以發展得很快速，可能因為挪亞全家有把一些科技傳承到新的世界，而不是全部從頭摸索。有件事可作為佐證，就是洪水後不久，人們齊心建造巴別塔，那會需要用到不少科技。挪亞所做的事超過一般人的想像，他把全家人帶到新世界，他把創世記一至八章所有的故事與啟示帶到新世界，他把各種有用的藝術、科技帶到新世界，以至於人們能知道整個創造、墮落、拯救的故事，也能快速發展新世代的文明。另一個聖經之外的佐證是，中華民族古老的文明並不需要漫長時間的發展，因為有挪亞、閃的傳遞，福音信仰與民生科技都在神州大地快速生根發展。（莊東傑，《跨越鴻溝》，頁183-184；《華人回家》，頁11-12）
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">柒、最完美的比例</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                方舟長三百肘，寬五十肘，高三十肘，每肘約為一呎半。現代的船隻有尖尖的船首，那是為了航行減少阻力。但方舟不是為了航行，乃是要穩重地漂浮在海面上，所以四面都是筆直的，其外型類似簡易棺材或一個長方形的箱子。依當時大洪水的情況，方舟若像現代船隻，必定傾覆。但方舟是從神的智慧、神的設計、神的啟示而來的，其長、寬、高的比例是最能抵抗洪水的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                方舟寬五十肘、高三十肘的比例，使它縱使傾斜四十五度都不會翻船；而方舟長三百肘、寬五十肘的比例則是為了抵抗漩渦，不像較短的船隻容易被漩渦捲進去。當時的人沒有遭遇過洪水或類似的狀況，以當時的知識，可能不會設計出這樣的方舟。但挪亞本人及這段故事的紀錄者，都有從神而來的啟示，才會如此建造方舟，並且記錄了方舟這樣的尺寸。方舟必須這樣建造，才能在大洪水中安然度過。順便一提，許多主日學教材都把挪亞的方舟畫成像一艘大船，甚至還蓋了房子在最上面，那是錯誤的，沒有考慮洪水的巨大破壞力量，也完全違反了神的啟示。
              </p>
              <p className="text-gray-700 leading-relaxed">
                方舟像棺材將人關鎖在其中，如同人向著世界死了；而洪水正如死亡漫過人類，沒進方舟的人全被洪水滅沒了，但當人從方舟出來時，就如同復活一般。這也預表了耶穌的死而復活及新約時代的洗禮。如彼得前書三20-21所說：「20……當時進入方舟，藉著水得救的不多，只有八個人。21這水所表明的洗禮，現在藉著耶穌基督復活也拯救你們；這洗禮本不在乎除掉肉體的污穢，只求在神面前有無虧的良心。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">捌、有動物與食物</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記六19-21：「19凡有血肉的活物，每樣兩個，一公一母，你要帶進方舟，好在你那裡保全生命。20飛鳥各從其類，牲畜各從其類，地上的昆蟲各從其類，每樣兩個，要到你那裡，好保全生命。21你要拿各樣食物積蓄起來，好作你和他們的食物。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                方舟裡的活物，與起初神所造的基本一樣，原來神造了甚麼，現在也保存甚麼，而且再次強調是各從其類。不僅方舟內的活物是各從其類，那些被洪水淹沒的也是各從其類，所以才會在化石中發現「寒武紀大爆炸」，意思是在代表「寒武紀」的同一個岩石層中，發現了各從其類的各種物種。因此，化石不是進化的證據，乃是洪水的證據。唯有在大洪水中，各物種才會一起被快速掩埋，而成為化石。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                生物學家統計，動物種類共有一百多萬種，但大部分是海生動物，需要靠方舟才能存活的只有哺乳類3500種，鳥類8800種，爬蟲及兩棲類5500種，昆蟲25500種。昆蟲的種類多沒關係，因牠們體積小，佔不了多少空間。這些動物每種都成對計算，最多是大約35000隻羊的體積，僅需一列150節車廂的火車就足夠了，因此載貨量超過520節車廂的方舟，還有很多其他空間可以存放食物及做一些活動。（威明頓，《威明頓聖經輔讀（卷上）》，頁63）
              </p>
              <p className="text-gray-700 leading-relaxed">
                當時挪亞的家人必須預備所有動物和他們一家八口一年所需要的食物份量。可能在建造方舟的那八十年中，男人建造方舟，女人則負責預備食物，並且研發可儲存一年以上的食物，例如泡菜。這個大工程需要他們全家同心信靠神，並且同心合意工作才能完成。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                讓我們效法挪亞的順服，神如何說，他就如何行。也常來領受神的啟示與指示，因為唯有神所設計的是最好的。若不是神設計方舟，誰能造出可越過洪水的方舟呢？我們也要常常禱告、仰望神，因為有些事是我們當做的，有些事只有神能做。我們面對即將來臨的審判，唯有照著神的安排，進入已經預備好的末日方舟──耶穌基督裡面，才能越過末後的大災難，進入禧年國度及新天新地。所以我們要繼續傳福音、帶門徒，使家人、親友、同胞、各國各族的人更多能一同進入末日方舟──基督耶穌裡面。
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
                '挪亞的造與行：神賦予人「造」的能力，但更需要順服──「凡神所吩咐的，他都照樣行了」，正如耶穌「父所做的事，子也照樣做」（約五19）。',
                '歌斐木是洪水前世界的堅硬木頭，使方舟能抗撞擊、存留久遠；歷代有多起在亞拉臘山目睹方舟的記載。',
                '「松香」原文即「贖罪／贖價」——方舟裡外的塗抹預表基督寶血的遮蓋，如同羔羊血塗門框；我們當天天支取寶血遮蓋的恩典（約壹一7-9）。',
                '透光處提醒屬靈生命要讓神的光照進內心（太六22-23）；門開在旁邊、由神親自關門——人盡當盡的責任，神必成就人做不到的那一份；門也預表耶穌肋旁與裂開的幔子，開出又新又活的路。',
                '分三層分間是科學的設計；長寬高300×50×30肘的比例最能抗洪水漩渦、傾斜45度不翻覆——方舟形如棺材，預表向世界死、從方舟出來如同復活，指向基督的死而復活與洗禮（彼前三20-21）。',
                '方舟容量足以容納所有需要保全的陸上動物（約35000隻羊的體積，而方舟載貨量超過520節車廂）；「各從其類」的化石正是洪水的證據而非進化的證據；挪亞全家八十年同心分工，把家人、啟示與科技帶進新世界。',
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
              '方舟的設計、製造有哪些特色及意義？請就長度比例、空間分配、開門方式、所用材料等試著說明。',
              '挪亞順服神來造方舟，他的態度可以怎麼應用在我們今日的生活？',
              '方舟與洪水預表了哪些我們現在信仰中的屬靈經歷？',
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
