import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp, Search } from 'lucide-react';

export default function Book14Ch7() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ sec0: true });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          第7章
        </h1>
        <h2 className="text-xl font-semibold text-gray-700">聖靈的路徑：解釋聖靈生活</h2>
      </div>

      <div className="mb-4 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => toggleSection('sec0')}
          className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800 text-left text-sm">說方言代表一種對於神的真相的醒覺，並將這醒覺對焦和強化；因此，說方言成了一種自然的表達崇敬…</span>
          </div>
          {expanded['sec0'] ? <ChevronUp className="w-4 h-4 text-gray-500 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />}
        </button>
        {expanded['sec0'] && (
          <div className="p-5 bg-white">
              <p className="text-gray-700 leading-relaxed mb-3">說方言代表一種對於神的真相的醒覺，並將這醒覺對焦和強化；因此，說方言成了一種自然的表達崇敬情緒的方法，而靈恩派信徒稱方言為他們「禱告的語言」是一點也不希奇的。說方言，雖然不是以一種概念性的語言形式出現，但作為發自心靈的聲音，在基督教裡，正如在其他領域一樣，他總是「說出」一些東西——他說出一個人有意識地投入並直接回應鄂圖（Rlldolph OttO）稱為「那聖潔的」或「那神聖不可測的」，也就是現今社會學家和人類學家一般稱為「那神聖的」。</p>
              <p className="text-gray-700 leading-relaxed mb-3">那些尋覓、尋索和運用方言的人通常視說方言的群體為屬靈上「特殊」的一群，並希望全然投入他整個團體經驗之中。</p>
              <p className="text-gray-700 leading-relaxed mb-3">但無論如何，以上一切觀點辯證出對於一些人來說，說方言是從神而來美好的恩賜，即如對於我們所有人來說，能清晰表達思想的語言能力是神給我們一個美好的恩賜。可是，既然說方言者視方言的作用主要是（縱非全然）為私人用途，也不宣稱他們知道自己所說的是什麼，而保羅所講述的方言是純粹為公開發言及要求把意思翻出來的，並且保羅也許認為講者總會對自己的話的含意有多少認識，我們不可能確定這兩種現象能夠達到複還論所要求的一致。</p>
              <p className="text-gray-700 leading-relaxed mb-3">在我來看，有關翻方言這問題，似乎是最莫衷一是的。翻方言就是將所說方言的訊息內容（一如他們自己所聲稱的）宣佈出來。複還論引導我們將說方言及翻方言與哥林多教會的方言（charismata）等同。保羅給「翻」方言的用字是 diermeneuo（林前一二 30，一四 5、13、27），可以指到解釋任何不明白的事情（一如路二四 27 所載的）；這辭彙與語言連結起來很自然是指到把字句本身蘊含的意思翻譯出來（一如徒九 36 所載）。從保羅的話看來，他顯然認為哥林多信徒的方言是帶有可翻出來的意義的（—四 19-13），而今天的翻方言者對今天的方言亦有相同的假設，把他們對方言的解釋視為方言的實際翻譯。</p>
              <p className="text-gray-700 leading-relaxed mb-3">然而，他們的表現是令人因惑的。那些流暢、肯定而又自然流露出來的解釋，後來卻被證實是千篇一律、含糊不清和無所傳達的。其中造成了許多荒誕的錯誤。喬達（Kildahl）告訴我們非洲土話主禱文如何被翻為主再來的訊息。27 一位我曾教導過的衣索比亞牧師，參加一個說方言的聚會，他誤以為是一個非正式的多種語言讚美崇拜會，於是，他站起來用基茲話（ Ge’ez，譯者注：一種已廢的閃族語，今用於衣索比亞基督徒的禱文中。）背誦詩篇第二十三篇，這是他出生的科普替族（Coptic）崇拜時用的古老語言；他的背誦立刻被當眾翻譯出來。翌日，他憂愁困惑地告訴我：「全都翻錯了。」喬達也報導過一件事，同一段方言錄音經兩個不同的人翻譯，其中一個翻為「為一份新工作尋求引導」的禱告，另一個則翻為「為一次嚴重大病最近康復而獻上的感恩」。當告訴翻方言的人兩種解釋有出入時，「那翻譯者毫不遲疑，亦不自辯地說神給予一個翻譯者一種翻譯，又給予另一個翻譯者另一種翻譯。」</p>
              <p className="text-gray-700 leading-relaxed mb-3">28 那翻方言者的經驗是，「方言的解釋」是即時浮現腦海的，換句話說，聽見方言之後，那些即時深印腦海的思想就視為那段方言的解釋。他們宣稱神直接賜予翻譯的內容；就好像靈恩派的預言一樣，他們持相類似的宣稱，只要該預言是合乎聖經的話，他就可以成立，不能修改，因為他是無從驗證的。我們可以看出一個翻方言的人——尤其是一開始就滿腦袋儲存了許多聖經真理的人——如何能夠借著與講者、或講者的聲線語調、或聚會的氣氛共嗚感應而產生恰當並造就人的「解釋」。可是，至於這些解釋如何能夠直接表達所剛剛聽到的聲音的意義，以致實際上將一種不明白的言語翻譯為一種能明白的言語，那就難以理解了。</p>
              <p className="text-gray-700 leading-relaxed mb-3">我不會妄自憑幾句翻譯錯誤的例子作為基礎，去全盤否定所有方言的解釋，看他們為虛妄的，同時，我同意撒瑪連（Samarin）的意見，他認為說方言加上翻方言的宗教儀式所產生的團結友愛本身可以是有價值的。 29 但我想，因此就假設我們已重獲保羅所說的翻方言恩賜，卻是十分危險的。無他，事實的證據委實太不肯定了。</p>
              <p className="text-gray-700 leading-relaxed mb-3">賀其馬提出當說方言帶來祝福的時候，祝福的源頭「並不是方言本身，而是說方言時候的心境，或者說„„在方言說出之先，一顆尋求更多被聖靈充滿的心。」 30 這個意見似乎比任何認為現時人所說的方言，在思想暫時停止活動的情況下，這方言本身能造就人的說法來得實在。同樣，翻方言也可以帶來祝福，是由於他傳達了聖經的激勵，而不一定像一些人的想法，認為這些必然是神所賜方言的神授解釋，就如當日在哥林多教會裡被翻出來的方言可能是神授的一樣。</p>
          </div>
        )}
      </div>

      <div className="mb-4 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => toggleSection('sec1')}
          className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800 text-left text-sm">（contemplation）裡。這種操練對於某一類人可能尤其有益，由於現代生活匆忙、浮面…</span>
          </div>
          {expanded['sec1'] ? <ChevronUp className="w-4 h-4 text-gray-500 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />}
        </button>
        {expanded['sec1'] && (
          <div className="p-5 bg-white">
              <p className="text-gray-700 leading-relaxed mb-3">（contemplation）裡。這種操練對於某一類人可能尤其有益，由於現代生活匆忙、浮面、脆弱而不真實，許多人成為這種生活的受害者，無法在更深層面與他們的自我接觸，於是，他們的基督教變成形式化、概念性、隨俗、定型、抄襲和二手的信仰。（畢竟，靈恩運動主要是一種都市現象，而在城市裡面，這些壓力對人有最直接的影響。）</p>
              <p className="text-gray-700 leading-relaxed mb-3">這樣看來，起碼對某些人來說，說方言可以是神的美善恩賜；這是基於一個觀念，就是任何能夠幫助人專注神、體驗他的同在，並使人敞開心靈讓神影響的東西，都是美善的恩賜。（可是，對其他擁有不同問題的人來說，神已經幫助他們自心裡向神發出通達的禱告，說方言對他們來說，遂變為不屬靈、瑣碎和不著邊際了；現時有些人對於不論何處出現的方言都持這種看法。這就是正所謂一人的佳餚可能是另一人的毒藥了。）靈洗</p>
              <p className="text-gray-700 leading-relaxed mb-3">那麼，我們對於靈洗又有什麼看法呢？我們已經看過，正如靈恩派導師所教導的，以及靈恩派信徒所見證的，都說明了這「第二次祝福」的核心是喜樂的確據，因在基督裡認識到天父的慈愛，得以淺嘗天國的滋味。我曾經指出過，在這裡面，說方言幾乎與抗辯宗或大公教會所見證的每一個「第二次祝福」經驗都有關聯。現在我提議一個解釋這些經驗、為他們作神學闡釋的正確方法，就是以這些經驗為實質上一種更深的覺醒，更深刻認識那位元元見證在基督裡父神的愛的聖靈（參羅八 15 一 17），又更深刻認識到借著聖靈，聖父及聖子將自己顯明給順服的聖徒看（參約一四 15—23）。聖靈的見證，以及父與子啟示性的臨在是神恒常的作為。只不過，有時候，基督徒發現自己比平時更意識到這些神工，並裡面所表達和傳遞的神的愛和恩慈；信徒見證聖靈的洗，所指的正是這些時刻的特別經歷。</p>
              <p className="text-gray-700 leading-relaxed mb-3">這些經驗，就是保羅為信徒祈求的事情得以實現：「„„借著他的靈，叫你們心裡的力量剛強起來；使基督因你們的信，住在你們心裡，叫你們的愛心，有根有基，能以和眾聖徒一同明白基督的愛，是何等長闊高深，並知道這愛是過於人所能測度的，便叫神一切所充滿的，充滿了你們。」（弗三 16 一 19 ）這些經驗帶來彼得形容的心境，我們愛我們所相信的基督，「就有說不出來、滿有榮光的大喜樂」（彼前一 8）。雖然這些經驗使人新鮮地意識到聖靈內住的實在，但他們不絕對是領受聖靈的經驗；雖然這些經驗能帶來使人成聖的效果，但他們不絕對是成聖經驗；雖然這些經驗確能使人得若能力，但他們不絕對是得力經驗。實質上，這些經驗是得著確據的經驗，亦即是對何謂與基督成為一體有主觀的瞭解。</p>
              <p className="text-gray-700 leading-relaxed mb-3">雖然我們在敘述這些經驗時，很容易傾向令這些經驗聽起來是獨立分割的，尤其當一個人心裡早已存有衛斯理式或凱錫克式「第二次祝福」神學觀念時，更是如此，而事實上，從沒有任何這樣的經驗是真真正正與一個人生命中有意識的部分完全分割開來的。但事實上，這類經驗最多不過是——也最少是——更加強烈地感受到被接納、被承認為神的兒女，以及與神更深的相交；大概從悔改那一刻開始，聖靈就將這種感覺賦予信徒，又讓這種感覺在他們心裡持續（參加四 6，三 2）。</p>
              <p className="text-gray-700 leading-relaxed mb-3">為何還需要有這加劇感覺的經驗——因此並不是一次過的事情，『第二次「亦是最後一次！」祝福』實在時不時重現（感謝神！）？對於神選擇什麼時候就近他的兒女，什麼季節以這種傳神、令人心蕩神馳的方式，讓兒女親切體會他的愛的真實，我們不是時常知道原因的。36 有時候，我們或許能夠在事後明白到這些經歷是為裝備我們面對將臨的苦楚、困惑、失落，或迎接一些特別苛刻或令人沮喪的職事。可是，在另一些情況下，我們只能夠說：「神選擇向他的兒女表達他的愛，純粹是由於他愛他的兒女。」亦有一些時候，似乎很清楚表明是神就近那些願意就近他的人（參雅四 8；耶二九 13、14；路— 一 9 一 13，其中「將聖靈給„„人」的意思是「讓人體驗聖靈的職事、影響和祝福」）；這正是我們現在要處理的情況。</p>
              <p className="text-gray-700 leading-relaxed mb-3">不同的關注驅使基督徒更新他們將自己奉獻給神的誓約，並尋求他的臉——亦即是說，在當前的需要中，不斷向神呼求，祈求他的關注、恩惠及幫助，一如詩篇二十七篇七至十四節所描述的。信徒面對的可能是罪咎、恐懼、失敗感或無能感、灰心失望、精神委靡、沮喪、受試探攻擊，與居衷的罪惡爭戰、不祥的疾病、遭拒絕或被出賣的經驗、對神的渴慕（凡此種種，詩篇裡都有描述）；可能還有許多其他境況。當神向這些尋求者的心靈啟示他的愛，把喜樂放在他們心裡，賦予他們新的精神力量及屬靈力量去應付那使他們消沉的境遇時，這經驗對他們的特殊意義，就與他們那藉這經驗得到滿足的需要有關。無怪乎一些人給這經驗的神學解釋為成聖的裝備，另一些人解釋他為事奉能力的賦予，而靈恩派信徒——他們看這經驗為更深進入聖靈掌管的生命裡——的解釋則是兩者兼備的。可是，他們所見證關乎聖經真理的現實，是神使人重新得著更深確據的工作；這些見證部分具洞見，部分帶誤導成分。</p>
              <p className="text-gray-700 leading-relaxed mb-3">讓我們根據這假設去衡量五旬節派和靈恩派信徒的靈洗見證；讓我們衡量的時候，也考慮到領受祝福之前的教導和期望，以及祝福以後所作的見證兩者之間的關係；讓我們忘掉在這祝福中各種各類身體上的附屬反應——呼喊、說方言、肌肉痙攣、四肢的觸電感覺、神志昏迷的現象和其他歇斯底里的征狀——，因為根據我們上述經過驗證的觀點，這一切只不過或多或少反映我們個人的脾性和心理，而不是神為加深人的信仰確據以及深化人與救贖主的相交而作在各人身上的不同工作。只要大家這樣去衡量，就會發覺我在這裡提出的神學解釋與事實相符。37 結論</p>
          </div>
        )}
      </div>

      <div className="mb-4 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => toggleSection('sec2')}
          className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800 text-left text-sm">在 The Charismatic Movement，ed． Michael P． Ham…</span>
          </div>
          {expanded['sec2'] ? <ChevronUp className="w-4 h-4 text-gray-500 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />}
        </button>
        {expanded['sec2'] && (
          <div className="p-5 bg-white">
              <p className="text-gray-700 leading-relaxed mb-3">在 The Charismatic Movement，ed． Michael P． Hamilton（Grand Rapids： Eerdmans， 1975），第53頁。</p>
              <p className="text-gray-700 leading-relaxed mb-3">Bruner， TheolOgy，第60頁，注12 .</p>
              <p className="text-gray-700 leading-relaxed mb-3">或者不然。第14節的Akarpos（沒有結果）可以解作「幫助不到任何人」（ GOODSPEED，一如在弗五11；多三14；彼後一8；猶12）或者「空白」。前者的意思與說方言的人明白他自己所說的話兩者之間並沒有衝突， Charles Hodge，</p>
              <p className="text-gray-700 leading-relaxed mb-3">An Ex．position of the First Epistle to the Corinthians（London：Banner of Truth， 1958），第288頁指出這意思是隱含在經文裡面的。但今日靈恩信徒都承認他們不明白他們所說的方言。</p>
              <p className="text-gray-700 leading-relaxed mb-3">同上，第 248—252、 276—302 頁。 Robert G． Gromacki， The Modern Tongues Movement（Philadelphia： Presbyterian and Reformed， 1967），第113頁，也是採取這個觀點。</p>
              <p className="text-gray-700 leading-relaxed mb-3">Abraham Kuyper， The Work of the Holy Spirit（Grand Rapids： Eerdmans， 1956），第133—138頁。</p>
              <p className="text-gray-700 leading-relaxed mb-3">A． A． Hoekema， What About Tongue－Speaking？（Grand  RaPids： Eerdmans， 1966），第 83 頁；另參第</p>
              <p className="text-gray-700 leading-relaxed mb-3">128頁：「剩下令人因惑的問題：五旬節派信徒怎樣„„可以肯定今天在說方言的圈子所進行的事情與昔日在新約時期的情況是否一樣？」</p>
          </div>
        )}
      </div>

      <div className="mb-4 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button
          onClick={() => toggleSection('sec3')}
          className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all"
        >
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800 text-left text-sm">魂，使我們充滿喜悅、狂喜，有時候滿心是無法形容的歡天喜地。」…</span>
          </div>
          {expanded['sec3'] ? <ChevronUp className="w-4 h-4 text-gray-500 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />}
        </button>
        {expanded['sec3'] && (
          <div className="p-5 bg-white">
              <p className="text-gray-700 leading-relaxed mb-3">魂，使我們充滿喜悅、狂喜，有時候滿心是無法形容的歡天喜地。」</p>
              <p className="text-gray-700 leading-relaxed mb-3">（Works， ed、 W． Goold， London： Banner of Truth，［1967］，2： 253）</p>
              <p className="text-gray-700 leading-relaxed mb-3">靈恩派神學塚諸如 Thomas Small，他不接受「第二次祝福」的靈洗觀點，他的神學眼光看整件事件是進入基督裡的獨一信主過程的其中一方面，水禮是外在的記號。可是，基督徒信主，實質上是在基督裡及透過基督建立與神及神的子民的關係，正如我們看過，靈洗的本質就是這個關係的清晰體會（我堅信這體會是從神而來的），說明你「已經」信主進入基督裡面；即是說，你是他的，他是你的。肯定地說，我們沒有可能稱靈洗為神呼召人信主的作為的「一部分」或「其中一方面」，尤其是對於某些基督徒而言，聖靈的洗是悔改信主後許多年才發生的。Smail的經驗正是這樣。比較直截了當的說法，是聖靈的洗先假設人已信主歸入基督裡，而聖靈就是為此作見證。參Thom．as Smai，Reflected</p>
              <p className="text-gray-700 leading-relaxed mb-3">Glory（Grand Rapids：Eerdmans1976），第十章。</p>
              <p className="text-gray-700 leading-relaxed mb-3">參 Thomas A． Smail， The Forgotten Father（Grand  Rapids：Eerdmans， 1981），尤其是第9—20頁。</p>
          </div>
        )}
      </div>
    </div>
  );
}
