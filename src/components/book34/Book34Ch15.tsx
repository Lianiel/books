import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book34Ch15() {
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
        <p className="text-cyan-700 font-semibold tracking-wide mb-1">第五篇　長大成人</p>
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-700 to-teal-700 bg-clip-text text-transparent">第十五章</h1>
        <h2 className="text-xl font-semibold text-gray-700">當我們沒有長大</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-cyan-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-cyan-50 to-teal-50 hover:from-cyan-100 hover:to-teal-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-cyan-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <p className="text-gray-700 leading-relaxed">
              我的朋友像發現新大陸一樣，她說：「你知道嗎，生命是倒過來的。」
            </p>
            <p className="text-gray-700 leading-relaxed">
              「這是什麼意思？」我問。
            </p>
            <p className="text-gray-700 leading-relaxed">
              「我們應該先做成人，再做小孩。現在這樣太難了。」
            </p>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">一、無法長大的症狀</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                每一個人都被生在大人世界，必須從小孩長大成人。我們都在權柄之下，經過一段時間，長大並為自己負責。這是不容易的工作。有些人從未完成。以下是沒有長大的症狀。
              </p>

              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">過度需要認可</span>——對要為自己負責一事常有掙扎的人，他們沒有別人的認可就不能獨立決斷。他們處於常常要獲得「重要人物」認可的掙扎中，這些重要人物可能是上司、配偶、朋友、牧師或同工。這種認可不同於我們一般需要的肯定。當我們將一件事做得很好時，我們需要別人的稱讚。而問題是，有些人不覺得自己好，一直要等到別人說他們好他們才覺得好。要權威人士說好才算好，否則他們就不會覺得好。權威人士一說好，他們整個自我形像都改變了。別人的意見佔了太多的份量，扮演了法官、父母的角色。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">恐懼別人不贊同</span>——這和上述的情況是相同的。這樣的人當權威人士在身邊時會很不自在。這使得他們做事的表現打折扣。每次他們的工作被評估，他們就恐懼。一個研究生每當學期末就很緊張。在學期結束前三週，一切正常，然後他就開始緊張痛苦，對於正在進行的事一概不見，所有心思集中在教授會不會喜歡他的報告一事上。原來他有個完美主義的父親，對他常常嚴辭批評。因為懼怕父親，他到了二十幾歲還像小孩一樣聽話。他從來沒有從父親的規條中出來，在他生命中大人的權柄仍然扮演裁判的角色。他們有贊同或不贊同的大權，而考試期間就讓他備受煎熬。漸漸地，當他開始挑戰教授，他學到教授不一定很有能力，最後他覺得自己和他們幾乎是平等的。他終於不再為考試焦慮。他和父親形像的人平等了，他不再害怕被論斷或評判了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">罪惡感</span>——罪惡感的來源和得不到父母的贊同有關係。每當有人掙扎於罪惡感，他仍然是在父母的聲音之下，他們內心仍然有父母坐在寶座上。罪惡感使我們的焦點離開後果。成人的良心是根據後果，不是根據罪惡感。舉例而言，如果成人違反交通規則吃了罰單，他們會為罰金難過，或為犯規覺得抱歉。但未長大的人會為罪惡感難過，甚於為後果難過。沒長大的人也會為帳單、截止日期、功課、和任務覺得有壓力。這些要求好像父母一樣，他們覺得有服從的壓力，否則他們就是「壞」。這種對壓力的抗拒，就造成了拖延，最後可能浪費更多時間金錢。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">性的掙扎</span>——畏懼權威的人常常遇到性的掙扎。理由很簡單：他們沒有走過青少年的反叛期，沒有和父母意見不同的經驗，沒有克服罪惡感。性對他們而言，仍然是一種禁忌。因為孩童沒有性行為，他們的思想攪擾了他們的性行為。他們遭受壓抑（怕父母批評）、缺少高潮、罪惡感、失去慾望、或為表現不佳而焦慮。當人覺得自己與別的成人平等，他們的身體屬於自己，可以給予配偶，並以他們所喜悅的彼此享受。只有這樣，他們可以互相給予和付出。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                莎利婚後完全失去性慾。在婚前，她對性很好奇，但現在這種感覺消失了。幾經努力，她尋求治療。當她慢慢說出始末，原來她仍然是爸爸身邊的小女孩。她父親在她的婚姻中太參與，她仍然強烈地想取悅父親，她其實還沒有離開家，既然她還在父親的權柄之下，她內心仍然是個小孩，而小孩是沒有性生活的。既然她主要的依附還在父親而非丈夫，性的期望使她無法處理。她把所有的性都壓抑下來。她努力使自己放掉與父親的親密關係，以及想取悅於他的希望。她甚至寫了一封信，辭掉使父親快樂的任務。當她在這過程中，她逐漸由壓抑的小女孩變成性感的女人。因為她對父母放手，她青少年的特質，也就是性的感覺才開始浮現。她開始享受性，也越來越不壓抑。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">害怕失敗</span>——仍然在父母權勢範圍中的人會害怕失敗，因為他們怕被規條捆綁的良心否定（加四：3；西二：20）。他們的內心覺得他們的行為會被論斷及否定。用聖經的說法就是，他們仍然在師傅的手下（加三：25）。當他們理解到，他們在基督裡的地位是在恩典中，那種等候別人認同的心態就改變了（加五：1）。他們可以自由地學習，不再怕失敗，罪惡感和焦慮。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">需要准許</span>——許多人過度需要別人准許才敢行事。他們甚至在談話中常常問「我可不可以發言」？其實他們根本不需要這樣問。他們這樣說是因為內心仍然受父母權柄的轄制。他們在機構或組織中，不敢嘗試去找出規條的極限在哪裡，什麼是可以去做的，什麼是不可以的。他們的上司常常被他們弄得很煩，因為他們怕做錯，所以需要很多指導，他們才敢作決定。好比他們在一棟大廈的地下室，他們不敢走出來探索，以致不知道自己有多大的空間。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">「你不可以這樣」症狀</span>——被權柄捆綁的人有制止創造力的傾向。有人想出做事的新點子，他會說：「你不可以這樣」，或「行不通的」。他們對任何新事或創意好像有一道牆。他們對嘗試新事物很悲觀。他們對父母的限制和懲罰太過認同。他們還沒有丟棄父母的限制而有自己的一套。他們做父母說的每一件事，像機器人一樣，甚至到四十歲還如此。創作家或企業家討厭這種人，他們說這種人眼光狹隘。創業的人都聽過這些嚇壞了的觀察家說的喪氣話。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">自卑感</span>——意思是覺得自己比別人低。顯然，當權柄人物常常貶損我們時，我們會覺得自卑。當父母沒有尊重孩子，他們必須時時看人臉色時，他們會有自卑感。他們會覺得別人老是比他們好，或是別人是他們的模範。他們從不覺得自己與人平等。馬丁是個極自卑的人。凡與他接觸的人，他都覺得自己比不上。他為別人做事時，極為賣力，但一旦他必須獨當一面，他就覺得很恐慌。他一方面怕別人反對他的意見，一方面又怕自己太聰明引起別人忌恨。他在這樣的捆綁中，使得他的工作生涯很痛苦。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">競爭性</span>——既然要與人平等意味著和父母爭奪「上司」的角色，沒有長大成人的人，從未建立與人平等的地位，他們會展現競爭性，尤其是與他同性別的人。我們最早的競爭對象是相同性別的父母一方，如果我們不解決這一層的競爭，這種競爭性會跟隨我們很久。有競爭性的人老是想篡奪上面的位子，他們不能忍受有人比他們好。他們不說「我打球打輸了」而說「我是個差勁的人」。因此他們必須要贏，才不覺得自卑。他們仍然試著與父母相等，所以每個情況他們都覺得有競爭性。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">失去能力</span>——尚未長大成人的人，他們不是一再地在人際關係中放棄能力，就是一再地覺得自己失去能力。一方面，他們不知道好的關係應該是彼此順服，在愛中雙方都可以享受自己的喜好；他們會一味地將能力全給另一方，然後像順從父母般地聽對方的。要他們做頭，簡直是個燙手山芋，最好趕快丟給別人。另一方面，這樣的人把能力全交給了控制支配型的人。他們以他們牧師的想法為想法。以屬靈領袖用的聖經版本為標準。他們去朋友告訴他們去的地方。他們把成人的功能交給了控制型的人。而問題是，太多人想在別人生命中扮演神的角色。很多屬靈領袖以為自己需要做別人的父母，而不是把人帶到成熟的地步，使基督做他們的主。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                許多基督徒不會自己思考。他們對教義不會發生疑問，他們認為某某人說的就一定是對的。馬丁路德不贊成這種態度。他認為所有的信徒都是祭司。每一個都可以與神有單獨的關係，他們可以聽教訓，並決定要相信什麼，而非由別人告訴他們該相信什麼。「你們從主所受的恩膏，常存在你們心裡，並不用人教訓你們，自有主的恩膏，在凡事上教訓你們。這恩膏是真的，不是假的。你們要按這恩膏的教訓，住在主裡面。」（約壹二：27）信徒可以倚靠神的話和聖靈去辨別，決定所信的是什麼。約翰並不是排除人所教導的，而是說所有的信徒都有辨別真理的能力。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">不能接受差異</span>——沒有長大成熟的人很難接受差異。如果有人想法不同，他們就是錯了。他們無法接受不同的意見。他們也會把不同品味看成對錯的事。如果朋友買了某種車，或把孩子送入不同的學校，他們會問自己：「我買對了車嗎？」「我要不要也把孩子送去那所學校？」沒長大的人認為差異是一種威脅，如果兩人做不同的事，一定有一個是錯的。這種人老是問：「哪一個比較好？」而非「你喜歡這個，我喜歡那個。」後者是兩個相等的成人經驗彼此不同的所在。這種法利賽人的心態，好比列出一張嚴厲的「正確教義」的單子，而失去了「愛人如己」的教義。他們的心思集中於別人做錯了什麼，以致他們不能愛人。法利賽人常常如此，他們覺得別人不如他們，因此別人是不好的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">不是黑就是白的思想</span>——人若看世界不是黑就是白，事情不是對就是錯，則他是受到未成年人的思想所限制。他們好像十一歲的孩子所想的。他們不能想到灰色。對他們而言，沒有困境，每件事都是簡明的，「如果規則是這樣就這樣做」。耶穌常常面對法利賽人的這種情況，他要帶領他們從這種僵化的景況中出來，進入成人的愛的地位。法利賽人忙於問「這樣合不合律法」？他們的心充滿了規條、對、錯，反而不能進入真理、智慧、和愛。執著於此的人，持守「徒有智慧之名」而無益於使人成熟的規條（西二：23）。只服從人的規矩，而不能彰顯神的愛，一定會造成問題。這也是為什麼青少年「反對規條」的階段是如此重要。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">論斷</span>——會論斷的人把自己和權柄律法融合，以致看低所有的人。他們不但抗拒自己裡面的青少年，他們論斷任何表現出來的青少年行為。「法利賽人和文士，就向耶穌的門徒發怨言，說，你們為什麼和稅吏，並罪人一同吃喝呢。耶穌對他們說，無病的人用不著醫生，有病的人才用得著，我來本不是召義人悔改，乃是召罪人悔改。」（路五：30-32）會論斷的人不把自己看為罪人，因此他們不饒恕，也不慈愛。相反的，他們否定自己裡面的罪人，好像自己是完美的，超越了罪（太二十三：27-29）。每當我們看低別人，我們就是「坐在摩西的位上」（太二十三：2），高過別人，也就無法認同自己裡面的罪人本性。青少年的重要過程——承認我們是罪人，使我們在神面前謙卑，而非在人面前驕傲。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">焦慮</span>——焦慮的人害怕別人不贊同，因此這和權柄有關。焦慮是一種訊號，使人意識危險。焦慮的人常常害怕父母會不贊同。山姆因為焦慮問題而來治療。每當他面對父母型態的人他就會焦慮。他在律師事務所和父親型態的人討論案件，他會被焦慮淹沒。山姆以為他的問題在懼怕權威，而實際上他是害怕自己的能力。他覺得自己和別人是平等的，這種感覺浮現時，他意識中必須處於父親之下的要求受到威脅。當他允許自己長大，向父母權威挑戰，他的意識許可他和人相等甚至超越。他的焦慮消失了，而他完成案件的能力也增加了。因為他征服了挑戰權威的恐懼，幾年之內，他的薪水增加四倍。他害怕與人相等，而非能力不足。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">衝動和壓抑</span>——都可能和權柄問題有關。一方面有些人十分痛恨權柄，他們完全抗拒規條，無法無天。通常他們很衝動，隨心所欲。這種不受控制的青少年型的成人不要權柄，甚至神的權柄也不要。另一方面，律法主義的人被罪惡感捆綁，他們毫不感覺自己會衝動。通常他們很害羞而壓抑，常常掙扎於自己的困窘感。他們的朋友常常說：「不要顧慮這麼多，說出來。」或像所羅門說的，「不要行義過分，也不要過於自逞智慧，何必自取敗亡呢？」（傳七：16）他們不能自由地享受生命或他們的感覺。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">優越感</span>——是自卑感的相反。有些人總是可以找出自己比別人好的地方。有點像自戀，或理想主義，其實就是喜歡在別人之上。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">做別人的父母</span>——有些沒有長大的人以為他們知道別人「應該」怎麼做，他們不能理解，自己對別人的情況知道的有限，或是每個人有不同的責任或能力去面對困難。有些輔導或教師直接告訴別人該如何做，就是屬於這種情形。他們不去培養對方成熟的處事能力，而叫對方依賴他們。這些輔導好像法利賽人坐在摩西的位上。他們對那律法上更重要的事——公義、憐憫、信實，反倒不行（太二十三：23）。他們喜歡控制他們下面的人。你可以察覺這種喜歡做父母的人，他們常常說「你應該」，他們的口氣像父母，對方在與他們相處之後，有一種被說服之感，或罪惡感，或覺得自己很寒酸。這種信念讓人覺得受寵，而不像從神來的信念使人覺得溫柔，有恩典。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">痛恨權威</span>——有些人從不與權柄認同，他們積極或消極地反抗權柄。這些成人其實是永續的青少年，從不與自己的成人地位認同，老是用青少年的態度對付權柄。消極的反抗就像批評權威，傳達一種微妙的感覺，似乎他們比權威更優越。他們中傷權柄所作的決策，懷疑他們的智慧，在背後說他們的壞話，他們對每一個權柄或牧師都找得出缺點。積極的反抗就像聖經所說抗拒權柄的人。他們反抗任何權柄，包括神的。兩個兒子的比喻（太二十一：28-32）說明了這兩種情形。只有警覺到自己的叛逆，才會悔改。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">沮喪</span>——這種沮喪來自自我批評，覺得自己是「壞的我」的一種態度。心中常被父母批評的人會覺得罪惡，因此導致沮喪。他們尚未從父母之下得釋放。當他們對自己的憤怒，以建設性的方式離開父母，以致自己長大成人，這種沮喪會離開，他們會有更多的創意取代沮喪。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">依賴</span>——有些人積極地避免自己負責，而去找一些人來做他們的父母。他們把自己生命的執行能力交給別人。需要別人做決定的人缺少自尊，而他們也常對父母形像的人發怒，因為這樣的人使他們長不大。常有人因依賴而結婚，之後又憎恨對方，因為對方把他當小孩看待。這種人會積極或消極地反抗配偶，以取得平等地位。他們有時候會為了取得自主權而離婚，他們以青少年的反叛來對待配偶，也使全家一同受害。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">將權柄理想化</span>——通常對權柄認同的人，知道他們和一般人一樣有弱點。但將權柄理想化的人，他們認為權柄人物是完美的，他們已經有自己在別人之下的假設。被理想化的權柄人物不被容許有缺點或軟弱。雖然聖經告訴我們：「凡從人間挑選的大祭司，是奉派替人辦理屬神的事，為要獻上禮物，和贖罪祭。他能體諒那愚蒙的，和失迷的人，因為他自己也是被軟弱所困。」（來五：1-2）將權柄理想化的人，要想想大衛、保羅、摩西、和彼得，以瞭解做成人並不可怕。成人不是完美的，只是從孩童踏出去，成為神的孩子（加四：4-5）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">將童年理想化</span>——由於對長大有衝突，有些人將童年理想化，視之為唯一值得活的一段生命。他們認為成年是充滿了責任和艱辛的；是無趣的。他們拒絕成長，將成人貶值。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">二、長大成人的障礙</h3>
              <p className="text-gray-700 leading-relaxed">
                正如其他階段，我們長大成人的階段也會因為我們對自己，對別人和對神的看法停滯。這些扭曲的想法應該被挑戰，才能冒險進入新的關係。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">三、扭曲的思想</h3>

              <p className="text-gray-700 leading-relaxed mb-2 font-semibold text-cyan-700">對自己的想法</p>
              <div className="bg-cyan-50/50 border border-cyan-100 rounded-lg p-4 mb-4">
                <ul className="space-y-1.5 text-gray-700">
                  <li>• 別人不認同我，因此我是不好的。</li>
                  <li>• 我不如別人。</li>
                  <li>• 我必須取悅別人才會有人喜歡。</li>
                  <li>• 我若不贊同別人，則我是不好的。</li>
                  <li>• 我的意見不像別人這麼好。</li>
                  <li>• 我沒有提意見的權利。</li>
                  <li>• 我必須從別人取得同意去……</li>
                  <li>• 我失敗了因此我不好。我不應該覺得這麼性感。</li>
                  <li>• 性的感覺是壞的。</li>
                  <li>• 我的計劃書決不會成功。</li>
                  <li>• 我應該順從別人的信念，雖然我不同意。</li>
                  <li>• 我需要別人來管理我的生活，我能力不夠。</li>
                  <li>• 如果我和人不同，我就是錯的。</li>
                  <li>• 我認為他們應該……</li>
                  <li>• 我不應該讓自己覺得……</li>
                  <li>• 我比他們都好。</li>
                  <li>• 我們的神學是最好的。</li>
                  <li>• 我們的事工是唯一真正的。</li>
                  <li>• 我知道什麼對他們最好。</li>
                  <li>• 我比他們知道得清楚。</li>
                  <li>• 我沒辦法教他們任何事。</li>
                  <li>• 扮好成人角色是我很難掌控的事。</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-2 font-semibold text-cyan-700">對別人的看法</p>
              <div className="bg-cyan-50/50 border border-cyan-100 rounded-lg p-4 mb-4">
                <ul className="space-y-1.5 text-gray-700">
                  <li>• 他們總是不贊同我，批評我。</li>
                  <li>• 他們比我好。</li>
                  <li>• 如果我同意，他們會對我好一點。</li>
                  <li>• 如果我不同意，他們會認為我不好。</li>
                  <li>• 他們的意見總是對的。</li>
                  <li>• 如果我失敗他們會覺得我不好。</li>
                  <li>• 他們沒有軟弱。</li>
                  <li>• 他們不會像我失敗得那麼慘。</li>
                  <li>• ……對他們很容易。</li>
                  <li>• 他們知道什麼對我最好。</li>
                  <li>• 他們所相信的比我相信的好。</li>
                  <li>• 他們絕不會覺得……</li>
                  <li>• 他們什麼都知道。</li>
                  <li>• 他們從不會這樣害怕，生氣或悲傷……</li>
                  <li>• 如果我站出來反對他們，他們會恨我。</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-2 font-semibold text-cyan-700">對神的看法</p>
              <div className="bg-cyan-50/50 border border-cyan-100 rounded-lg p-4 mb-4">
                <ul className="space-y-1.5 text-gray-700">
                  <li>• 神喜歡我對任何人都很好。</li>
                  <li>• 神喜歡我絕對順服權柄，什麼都不要問。</li>
                  <li>• 神不要我自己決定一切，他要我的領袖為我決定。</li>
                  <li>• 當我失敗時神就不贊同我，正如父母一樣。</li>
                  <li>• 神不喜歡我太激進。</li>
                  <li>• 神不喜歡我和牧師持相反意見。</li>
                  <li>• 神不給我自由選擇我的價值觀，所有一切都已記在聖經中了，沒有灰色的部分。</li>
                  <li>• 神認為別人比我重要（或不重要）。</li>
                  <li>• 神要我固守一大堆規條。</li>
                  <li>• 神喜愛紀律和犧牲，甚於憐憫、慈愛、和關係。</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-2 font-semibold text-cyan-700">對世界的看法</p>
              <div className="bg-cyan-50/50 border border-cyan-100 rounded-lg p-4 mb-4">
                <ul className="space-y-1.5 text-gray-700">
                  <li>• 競爭是不好的，一定有人受傷害。</li>
                  <li>• 不贊同是不好的，一定有人受傷害。</li>
                  <li>• 衝突是不好的，有人總是輸。</li>
                  <li>• 沒有一種關係是雙方都贏的。</li>
                  <li>• 取悅人的人總是討喜，勝過那些說真心話的人。</li>
                  <li>• 每一件事都有一個正確答案，尤其我們擁有聖經。</li>
                  <li>• 每件事都有正確的和錯誤的看法，展望將來也不會有什麼不同。</li>
                  <li>• 有彈性就是縱容，沒有法紀。</li>
                  <li>• 性是邪惡的。</li>
                  <li>• 每件事都有正確的或錯誤的作法。</li>
                  <li>• 絕對不會成功的。</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                這些對自己、對別人、對神的看法是我們從經驗中學習而來的，也造成我們長大成人的障礙。有些是從我們長大的家庭學習而來的，有些是成長的一種心態。無論如何，只有藉著努力、冒險、禱告、關係、和操練才能克服。下一章將討論長大成人所需的技巧。
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
                '「沒有長大」有二十多種表現：過度需要認可、恐懼不贊同、罪惡感（而非為後果負責）、性的掙扎（如莎利仍是「爸爸身邊的小女孩」）、害怕失敗、需要准許、扼殺創意、自卑感、競爭性、失去能力、無法接受差異、非黑即白的思想、論斷、焦慮（如山姆其實是害怕與人平等而非能力不足）、衝動或壓抑、優越感、做別人的父母、痛恨權威、沮喪、依賴、將權柄或童年理想化。',
                '「罪惡感」與「後果」的區別是重要診斷指標：成人的良心根據行為的實際後果來調整，未長大的人卻為單純的「不被贊同」而受苦，即使沒有實質後果也充滿罪惡感。',
                '性方面的掙扎往往源於尚未真正離開父母的權柄——莎利需要先在情感上「辭掉使父親快樂的任務」，才能從壓抑的小女孩轉變為能自由享受性的成熟女性。',
                '這些症狀的核心都圍繞著「與權柄的關係扭曲」：不是過度屈從（需要認可、失去能力、依賴），就是過度反抗（痛恨權威、競爭性、衝動），健康的成長路徑是與權柄建立不卑不亢、彼此平等的關係。',
                '長大成人的障礙來自對自己、別人、神、以及世界扭曲的思想（如「我必須取悅別人才會有人喜歡」「神喜歡我絕對順服，什麼都不要問」），唯有藉著努力、冒險、禱告、關係與操練才能挑戰並克服這些扭曲。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「屬靈依賴」與健康群體領導的分野</h4>
              <p className="text-gray-700 leading-relaxed">
                本章對「做別人的父母」型輔導者、「將權柄理想化」的追隨者的描述，直指教會與輔導關係中常見的不健康動態——有些屬靈領袖無意間（甚至有意）培養跟隨者對自己的依賴，而非引導他們成熟獨立地與神建立關係。健康的屬靈帶領應該像作者引用馬丁路德「信徒皆祭司」的教導，幫助每個人發展出自己與神、與聖靈同工辨別真理的能力，而不是讓群體成員永遠停留在「這位牧師/長輩說的都對」的孩童式依賴中。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">競爭性與同性別父母未解決的競爭</h4>
              <p className="text-gray-700 leading-relaxed">
                本章提到「我們最早的競爭對象是相同性別的父母一方」，這呼應了發展心理學中對「伊底帕斯情結」及其解決過程的觀察——孩子需要透過健康地認同並最終與同性別父母「和解」（而非永遠停留在競爭中），才能發展出成熟、不需要時時證明自己比別人強的自我價值感。若這層競爭沒有被處理，會終生投射到職場、人際關係中每一個與自己同性別的人身上，形成本章描述的「競爭性」症狀。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">四類扭曲思想清單的實用診斷價值</h4>
              <p className="text-gray-700 leading-relaxed">
                本章末尾列出對自己、對別人、對神、對世界四大類扭曲思想清單，實際上是一份極實用的自我診斷工具。讀者可以逐條核對，找出哪些句子是自己內心真實會出現的聲音，這比抽象地談論「長大成人」更具體有效——因為改變往往始於能準確辨識並說出自己心中運作的具體謊言，而非籠統地知道「我需要成長」。
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
              '本章列出二十多項「沒有長大」的症狀，哪幾項最貼近你目前或過去的經歷？',
              '你面對失敗或犯錯時，比較關注「實際的後果」，還是「有沒有人會不贊同我」的罪惡感？',
              '重讀「對自己的想法」清單，哪一句最像你內心真實的聲音？它可能源自哪位權威人物的影響？',
              '你有沒有在某段關係（工作、輔導、教會）中，把自己的成人功能交給了某個「控制型的人」？',
              '你比較容易落入哪一種與權柄的失衡關係：過度屈從（需要認可、依賴），還是過度反抗（痛恨權威、競爭）？',
              '對照「對神的看法」清單，你有沒有發現自己對神也存在類似的扭曲想像？',
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
              <h4 className="font-semibold text-green-700 mb-2">📋 對照四份清單逐條核對</h4>
              <p className="text-gray-700 mb-2">
                找一段安靜的時間，逐句朗讀本章四份扭曲思想清單（對自己/對別人/對神/對世界），在你有共鳴的句子旁做記號，並試著寫下這個信念最早可能是什麼時候、從誰身上學來的。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 練習一次「不需要准許」的行動</h4>
              <p className="text-gray-700 mb-2">
                本週選一件你平常會不必要地徵求他人同意的小事，練習直接照自己的判斷去做，觀察內心的不安以及事情的實際結果。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 默想加拉太書五章1節</h4>
              <p className="text-gray-700 mb-2">
                默想「基督釋放了我們，叫我們得以自由」，思想自己在哪些方面仍活在「等候別人認同」的轄制中，求神幫助你站立得穩。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，求祢光照我生命中還沒有長大的地方——不論是過度需要認可、害怕失敗，還是把自己的判斷力交給了別人。求祢幫助我分辨哪些是真實的後果、哪些只是不被贊同的罪惡感。求祢釋放我脫離對權柄扭曲的懼怕或抗拒，使我能在祢的恩典中，成為一個既尊重權柄、又能為自己負責的成熟兒女。奉耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
