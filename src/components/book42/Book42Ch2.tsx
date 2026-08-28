import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book42Ch2() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-800 to-orange-900 bg-clip-text text-transparent">第一篇1</h1>
        <h2 className="text-xl font-semibold text-gray-700">道成肉身的宣教原理</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-amber-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">道成肉身的宣教神學——主動臨在</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「道成了肉身，住在我們中間，充充滿滿的有恩典有真理。我們也見過他的榮光，正是父獨生子的榮光。」（約一14）這節經文清楚宣告了上帝的宣教原理：以人能理解的方式——道成肉身，主動進入人中間，讓人體會祂的同在，使人領受恩典與真理，進而認識父上帝。因此耶穌說：「人看見了我，就是看見了父」（約十四9）道成肉身的宣教原理包含了豐富的宣教神學、清晰的宣教策略和可行的宣教方式。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                許多人的觀念，常常把上帝限制在超越的世界裡，視上帝為一位遙遠的，缺席的上帝（absentee），偶而才闖入這個世界來干涉而造成一些奇異的事情；或者認為上帝一直是處於被動的地位，被尋找的對象，然而「道成肉身」的教義卻啟示了上帝主動的臨在性。唐崇榮牧師在《佈道神學》一書中說：「創世記記載亞當被造成人並犯罪之後，上帝就開始啟示人。人墮落以前，救恩的計劃已經在上帝那裡隱藏著，當人墮落，救恩的啟示馬上就來了。我們在舊約看見上帝的預備；到了新約，耶穌基督到世上來親自成全；耶穌基督升天之後，聖靈直接進行。」人類始祖亞當夏娃犯罪後，上帝對人所講的第一句話是「你在那裡」（創三9）。「你在那裡」表明了上帝主動積極地尋找人。從創世記三章9至20節可以看出這句話的涵意包括愛的呼喚（創三9），罪的提醒（創三11），責任的面對（創三16～19），以及替贖的拯救（創三20），這是上帝主動救贖人類的過程。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                到新約，上帝更主動道成肉身，以人的樣式進入世界。道成肉身的耶穌基督繼續彰顯這崇高的救贖使命，祂說：「人子來為要尋找拯救失喪的人。」（路十九10）祂仍舊主動積極地尋找罪人。除非上帝主動啟示人，否則人無法認識上帝；除非上帝主動尋找人，否則人無法體會上帝；在整個啟示、救贖的過程，上帝一直採取主動積極的地位，耶穌說：「不是你們揀選了我，是我揀選了你們。」（約十五16）
              </p>
              <p className="text-gray-700 leading-relaxed">
                「住在……中間」也可譯作「紮營」，在舊約，這字是用來形容上帝的會幕，也就是上帝與祂的百姓同在，上帝住在他們中間。「會幕」是上帝榮耀的居所。而在新約，耶穌就是上帝的榮耀。布勞（Johannes Blauw）說：「舊約之宣教活動不在於言語或活動，乃在於「臨在」（Presence）。通過這種方式，上帝在祂的子民中間居住，而祂的子民則散居在世界各地。」在舊約中，上帝不僅藉著會幕臨在人中間，先知以賽亞早預言「主自己要給你們一個兆頭，必有童女懷孕生子，給他起名叫以馬內利，以馬內利就是上帝與我們同在的意思。」（賽七14）到了新約，這位以馬內利的上帝就照著預言，藉著耶穌基督道成肉身臨在我們當中（太一22～23）。因此，啟示錄二十一章3節說：「看哪，上帝的帳幕在人間，他要與人同住，他們要作他的子民，上帝要親自與他們同在，作他們的上帝。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">道成肉身的宣教策略——認同說服</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                從「道成肉身」的宣教神學，我們可清楚看出道成肉身的宣教策略乃是「先認同再說服」的宣教策略。「道成肉身住在我們中間」，首先表達的是進入人羣認同百姓。認同是先瞭解他的背景，肯定他的優點，清楚他的弱點，並接納他的樣式，然後思考如何將福音通過合適的方式傳給他。認同不是完全同意他的作法或與之妥協，而是建立福音接觸點的第一步，沒有接觸點，就毫無對話管道可言。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                接受主是「從一個羣體轉到另一個羣體」，隨墮落的人性回轉到屬神的新人性。然而「重生並不意味新信徒要否定他原來所屬的文化，與世界隔離、毫無接觸，而是在屬靈的層面上與世界分別」。傅禮敦（Leighton Ford）說：教會是「封閉的羣體」這種心態實傳福音的大忌，很多基督徒為免沾染世俗，竟千方百計避免與未信主的人有接觸。烏此緣故，他們就難以和未信主的人有溝通的渠道，沒有真正的友誼，作見證自然就變得生硬和不自然。事實，主要我們走入人羣，與之接觸，更要我們進入那些教會接觸不到的現代生活圈子，諸如娛樂圈、知識界、勞工階層和那些被剝削的貧苦大眾中間。耶穌基督本身就是率先走入人羣，認同百姓，憐憫軟弱者，「耶穌走遍各城各鄉，在會堂裡教訓人，宣講天國的福音，又醫治各樣的病症。祂看見許多人，就憐憫他們，因他們困苦流離，如同羊沒有牧人一般」（太九35～36）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                過去許多宣教的失敗是未先認同百姓，而只一味要他人皈依信主，以致讓人有一種福音是「我優你劣的入侵式福音」的感受。因此，黃伯和牧師主張要以道成肉身的「認同的宣教原理」取代我優你劣的「征服的宣教原理」。筆者同意道成肉身的宣教是一種「認同的宣教原理」，然而，認同的目的何在呢？福音終極的目標是什麼呢？道成肉身的宣教策略並非只停留在認同階段，它還有更進一步的目的，就是通過認同的橋樑，使人領受恩典與真理，認識父獨生子的榮光（約一14）。因此，認同的目的乃是要帶人進入獨一真神的信仰，使人降服在基督面前。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                耶穌基督走進人羣，醫治病人，但祂更積極「在會堂教訓人，宣講天國的福音」。因此，「勸人改宗信仰並非「入侵式福音」，也非「征服的宣教原理」，而正是道成肉身的宣教原理的運用。耶穌曾毫不含糊地對撒瑪利亞婦人宣告說：你們所拜的你們不知道，我們所拜的我們知道。因為救恩是從猶太人出來的（約四22）。這句話清楚地說明祂的目的，不僅是「認同」人間的苦難，更重要的是彰顯上帝獨特的救贖之路。
              </p>
              <p className="text-gray-700 leading-relaxed">
                道成肉身的宣教策略不是兩極化的只有「認同」，或只有「征服」。只有征服而無認同，無法使人信服；只有認同而無說服，那只是「社會福音」。我們也不能因過去宣教的失敗，而矯往過正的以「認同」取代「征服」，唯有「首先認同進而說服」才是道成肉身真正的宣教策略。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">道成肉身的宣教方式——針對需要</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「道成肉身，住在我們中間，充充滿滿的有恩典有真理，」進入人羣認同百姓之後，如何讓人具體體會到「充充滿滿的有恩典有真理」呢？宣教的方式是什麼呢？湯普生（W. Oscar Thompson, Jr.）說：「愛是針對需要，愛是滿足需要。」人除非知道福音能滿足他自覺的需要，否則他會拒絕聆聽福音，因此，有效的佈道是從目標對象的實況入手，而非照我們對他一廂情願的想法入手。有效的個人談道工作，必須以受眾為中心（receptor oriented）。保羅說：「向什麼樣的人，我就作什麼樣的人。」（林前九22）是在強調我們要有一個富彈性的生活方式，以適應不同的人和他不同的文化特徵的重要性。人和福音之間的接觸點，往往是人的需要、希望和渴慕。一位好的推銷員不單要認識自己的商品，也要認識人的心理，然而，在基督徒圈子裡很多人都只認識自己的產品（福音），但他們卻不大認識人。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                馬斯羅（Maslow）將人類的需要分為五個層次，艾偉傳（Joseph C. Aldrich）對於如何使用福音來滿足這五層次的人有詳細的論述：從生理需要（食物、居所、衣著、溫暖）、安全感的需要、愛與被愛的需要、受尊重的需要，一直到自我實現的需要，福音的好消息可以在每一層次進入人的生命，就在人最迫切的那個需要層次上進入，與人建立真正的關係。人的生理需要得到滿足後，就會想到安全感；人的內心深處都渴求安定平穩，不想受恐懼和憂慮所控制。對一個缺乏安全感的人來說，福音的好消息就是可以在神裡面找到永遠的歸宿，永遠的安樂窩；在那裡他可以像浪子回頭一般，在懷裡得到赦罪的平安。每個人都需要覺得自己是重要和有所價值。我們渴望別人知道並肯定我們生命有所貢獻。但有什麼比得上知道神看我為寶，祂連知道我的名字，並看我為獨特的？
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                希伯（Paul G. Hiebert）則將人的需要分為兩大類，一為現實迫切的需要（felt needs），包括：物質、好的生存環境、自我的實現；另一為終極真正的需要（real needs），那就是福音的內容：救恩、復和、公義、平安等。他認為福音要從現實迫切的需要入手，但必須要移轉到終極真正的需要。一個以滿足需要為中心的團契會激勵教會成為一個醫舍的羣體，使人可以經歷到安全感、愛、接納、被尊重和自我實現。人如果知道相信基督可以解決他的需要，他自然會對福音有回應。因此，談道者的首要工作就是要「找出對方在哪一個需要層次，然後針對需要下藥」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                喬治亨特（George Hunter）將個人談道分為演繹佈道法和歸納佈道法兩種。演繹法是以福音信息為中心，希望這個信息能在受道者的生命中引起共鳴。而歸納法則以談道者為中心，是按個別需要，經精心設計，才將福音傳遞出去。歸納法的傳福音者的主要責任是發掘對方的切實需要，抓緊成為傳福音的據點，使受衆先有了認同，再將福音介紹給他。耶穌的個人談道就是採用對症下藥的歸納式佈道。當我們仔細考查四福音書時，我們會發現，他以不同方式對待不同類型的人：一是面對反對真理，與耶穌作對、挑戰耶穌權柄的人，耶穌不理會他們（太廿23～27，可十五1～5）；二是對於那些聽見福音，經歷神蹟，但卻不肯悔改的人，耶穌責備他們（太十20，十二38）；三是對於一般的會衆，耶穌沒有和他們講天國的奧祕或其他深奧的道理，耶穌只用淺顯、生動、實際生活的比喻（路八4～10），目的是在引發人的興趣，激勵人思想，讓人從比喻中尋找真理，因此，巴克萊（William Barclay）說：「比喻把責任恰好地放在每一個人的身上，對於那些渴望真理的人，比喻向他們顯明真理；對於那不想看見真理的人，比喻就把真理隱藏起來。」四是對於跟隨祂的門徒，耶穌向他們解釋天國的奧祕（太十三10～13），用教訓的方式來教導，並以天國的標準給予要求（太五～七章）；五是面對罪人、軟弱者、失喪者，耶穌沒有長篇大論，更沒有任何責備，只有以愛來觸摸他的心，先以愛來接納他，接納後有了對話的管道，再給予談道（約四7～18；路十九1～10）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                此外，耶穌對於需要福音的人，也沒有一個定型的交談方式，祂是針對不同需要給予個人談道：一是對知識份子尼哥底母講重生（約三1～15）；二是對乾渴的撒瑪利亞婦人講活水（約四7～18）；三是對久病不痊者講醫治的信息（約五1～15）；四是對要吃餅得飽的羣衆講生命的糧（約六1～34）；五是對淫婦講罪和赦免（約八1～11）；六是對生來瞎眼的講上帝要在他身上彰顯奇妙作為（約九1～3）；七是對被社會排斥拒絕的稅吏撒該，以實際的拜訪傳達愛的接納（路十九1～10）。從耶穌的個人談道方式，我們發現歸納式佈道是一種過程，是從個人生活的某些具體層面開始。在這過程中，佈道者其實是在做以下的五件事：一是接納未信者的人性和獨特性，立意助他解決問題；二是找出對方的困難和需要，然後以福音是好消息來針對這需要；三是分享福音與他面對的難題有何關係，以及福音可以怎樣助他完全對付這困難；四是建議對方接受主，使聖靈可以在他身上工作；五是鼓勵對方作出決定，敏感於對方在作決定時的感受和思潮波動。
              </p>
              <p className="text-gray-700 leading-relaxed">
                傳統的談道訓練，大都只教導一種放諸四海皆準的談道方法，給予受訓者一瓶「罐裝福音」，意思是「受訓者必須要背頌全套福音講述，或是逐字逐句地讀出來給人聽，或是送上一份單張，錄音帶或書籍，在這種情況下，信徒所作的只是將「專家」——教牧人員——所生產的，機械式地傳給別人而已」。韓更士（Tom Hanks）指出耶穌為佈道者，從未同一方法向兩個人談道，但當耶穌為訓練者時，他需要給沒有經驗的門徒有詳盡的指示和嚴謹的模式去從事福音外展工作。因此，他認為「罐裝式的福音」也是合乎聖經的，同時，為要應付急切之需，這是訓練大量信徒投入福音事奉的最佳方法。我們可以「罐裝式的福音」給予談道者初步的訓練，對於初期談道訓練和訓練大量談道者有其一定效果，然而，當我們實際進行個人談道時，則需要學習耶穌針對需要、滿足需要、對症下藥的個人談道法，這才是真正道成肉身的宣教方式。從道成肉身的宣教神學、宣教策略，宣教方式，我們可歸結看出道成肉身的宣教，事實就是本土化的宣教。
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
                '道成肉身（約一14）啟示了上帝主動臨在的宣教神學：從亞當犯罪後上帝主動說「你在那裡」，到耶穌基督主動道成肉身進入世界，上帝一直是主動尋找失喪之人的那一位。',
                '道成肉身的宣教策略是「先認同，再說服」：認同是了解背景、肯定優點、接納樣式，建立福音的接觸點；但認同不是宣教的終點，其目的是帶人進入獨一真神、降服在基督面前。',
                '有效的個人談道必須「以受眾為中心」，針對對方的真實需要下藥——馬斯羅五層次需要與希伯的「現實迫切需要／終極真正需要」都提醒我們，福音要先從對方感受得到的需要切入，再引向終極的救恩需要。',
                '喬治亨特將佈道分為「演繹法」（以信息為中心）與「歸納法」（以談道者針對個別需要設計）；耶穌一貫採用歸納式、對症下藥的談道方式，對不同對象（反對者、猶疑者、群眾、門徒、罪人）用完全不同的方式對待。',
                '耶穌對不同需要的人給予完全不同的談道切入點：對知識份子講重生、對乾渴者講活水、對久病者講醫治、對飢餓者講生命的糧、對犯罪者講赦罪、對被排斥者以實際拜訪表達接納——沒有一套固定公式。',
                '「罐裝福音」（背誦式、單張式的傳福音）適合初信者訓練與應急使用，但真正道成肉身的宣教方式，是學習耶穌那種針對需要、滿足需要、對症下藥的個人談道法，這也正是本土化宣教的本質。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「認同」與「妥協」的界線在哪裡？黃伯和牧師提出「認同的宣教原理」取代「征服的宣教原理」，會不會有落入相對主義的風險？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者特別澄清：「認同不是完全同意他的作法或與之妥協」，而是「建立福音接觸點的第一步」。認同的終點不是停留在同理與接納，而是要「通過認同的橋樑，使人領受恩典與真理」，最終降服在基督面前。因此，認同與說服是一組必須並存的策略：只有認同而無說服，容易流於「社會福音」，把信仰簡化為社會關懷；只有說服而無認同，則容易流於「入侵式福音」，讓人感受不到尊重與理解。健康的本土化談道，是在充分認同對方處境之後，仍然堅定地指向福音真理的絕對性。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">馬斯羅需要層次與希伯「現實需要／終極需要」的架構，對華人談道者有什麼特別的提醒？</h4>
              <p className="text-gray-700 leading-relaxed">
                華人文化中，許多人對信仰的初始興趣，往往來自現實迫切的需要——身體的疾病、婚姻的破碎、事業的困頓、子女的教育問題等，而非一開始就渴慕「終極真理」。希伯的架構提醒談道者：從現實需要切入是合理且必要的起點，但若停留在只解決現實問題（例如只求身體醫治、只求平安順利），而沒有引導對方認識罪、悔改、與神復和的終極需要，福音便只淪為「有求必應」式的功利宗教，這正是本書後面第四章要處理的台灣民間信仰功利主義心理的核心問題。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">為什麼耶穌從不使用同一套方式向兩個人談道？這對教會目前普遍使用的「標準化福音單張」有什麼提醒？</h4>
              <p className="text-gray-700 leading-relaxed">
                韓更士指出耶穌從未用同一方法向兩個人談道，這反映出真正的個人談道是「因人施教」的藝術，而非公式化的流程。標準化福音單張（如「四律」）有其訓練初信者、應急使用的價值，但作者提醒，這只是「罐裝福音」——適合入門，卻不能取代真正對症下藥的談道。教會若只依賴單一套流程訓練信徒佈道，容易養成信徒機械式背誦，卻缺乏敏銳地察覺對方真實需要、隨機應變地展開對話的能力，這正是本書強調「歸納式佈道」的重要原因。</p>
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
              '「道成肉身」意味著上帝主動進入人的處境；你在傳福音時，是主動走進對方的生活圈子，還是期待對方先走進教會？',
              '回想你最近一次與非基督徒朋友的深入對話，你是先花時間認同、了解他的背景與處境，還是急著把福音信息講完？',
              '你身邊最近有沒有人正經歷「馬斯羅需要層次」中某一層的缺乏（生理、安全感、被愛、被尊重、自我實現）？福音可以如何切入他當下的需要？',
              '耶穌對反對者、猶疑者、群眾、門徒、罪人用完全不同的方式對待，你覺得自己習慣用哪一種方式與人談道？是否常常「一套方法用到底」？',
              '「罐裝福音」對初信者訓練有幫助，但也有其限制，你如何在「有基本裝備」與「因人施教」之間找到平衡？',
              '如果耶穌今天要向你最近接觸到的一位非基督徒朋友談道，你認為祂會選擇從哪一個切入點開始？為什麼？',
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 為一位朋友做「需要盤點」</h4>
              <p className="text-gray-700 mb-2">
                選一位你正在為他禱告的非基督徒朋友，對照馬斯羅五層次需要，寫下他目前最迫切的一項現實需要，思考福音可以如何具體回應這個需要，作為下一次談話的切入點。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">👂 練習「先認同、後說服」的對話</h4>
              <p className="text-gray-700 mb-2">
                這一週刻意練習：與人談話時，先用至少三個問題了解對方的處境、想法與感受，確認自己真正理解他之後，才自然地帶入福音的內容，而不是一開口就宣講。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主耶穌，祢道成肉身，主動進入人的世界，認同我們的軟弱與需要。求祢幫助我學習祢的樣式，不再站在遠處等待人來找我，而是願意主動走進身邊朋友的生命，用心傾聽他們真實的需要，並靠著祢的智慧，把握合適的時機，將恩典與真理帶給他們。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
