import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Users, Search, HelpCircle, Check } from 'lucide-react';

export default function Book17Ch9() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    application: true,
    exploration: true,
    questions: true,
    practice: true,
  });

  const toggleSection = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">第九章</h1>
        <h2 className="text-xl font-semibold text-gray-700">愛與理性</h2>
        <p className="text-sm text-gray-500 mt-1">哥林多前書 八1-13</p>
      </div>

      {/* 經文要義 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">經文要義</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <p className="text-gray-600 text-sm leading-relaxed border-l-4 border-purple-200 pl-3">從哥林多前書八章1節開始，一直到十一章1節，保羅回答哥林多信徒提出的另一個問題，也就是吃祭過偶像的食物的問題。這件事表面上與第七章所談的婚姻問題沒有什麼相關，實際上卻是同一性質的事件，兩者都是涉及哥林多信徒信主以後，要如何過基督徒的生活。要明白哥林多前書八章至十一章1節的經文，就必須先清楚整個事件的背景。</p>

            <p className="text-gray-600 text-sm leading-relaxed border-l-4 border-purple-100 pl-3 italic">二〇〇四年，華神應屆班的畢業旅行選擇去聖地以色列，回程搭乘以色列航空班機，途經香港而抵達臺灣。機上提供的晚餐主食是牛肉，當有人問空服員可否提供一杯牛奶時，空姐的回答是：沒有牛奶！這麼大的航空公司，怎麼可能沒有牛奶？答案是因為舊約申命記第十四章的規定：不可以用山羊羔母的奶來煮山羊羔，所以當班機的供餐是牛肉時，就不提供牛奶！</p>

            <p className="text-gray-700 leading-relaxed">吃祭偶像之物，是哥林多外邦基督徒在日常生活中天天要面對的問題——當時社會中有些食物是先到神廟裡祭拜之後，隨即送往市場上去販賣，所以這不單是某種特定節慶的祭拜現象，而是天天生活需要面對的狀況。若答案是「不可吃」祭拜過的食物，那絕大多數的肉類可能都是祭拜過的，基督徒就有可能無肉可吃；再者，假如家中一人信主、另一人不信，情況就更複雜麻煩；若是非基督徒朋友請客，不去參加也不容易交代。</p>

            <p className="text-gray-700 leading-relaxed">使徒保羅在哥林多前書第八章中，讓我們看見對於基督徒是否可以吃祭偶像之物，實際上有兩種意見：一種認為可以吃；另一種認為絕不可吃。那些主張可以吃的，甚至認為這是他們個人「自由」的問題，因此不顧及他人的感受，先吃了再說。保羅在此處的回應，就是特別針對主張可以吃的信徒而說的。第八章1至3節是一段，4至13節是另一段；每一段的開頭第一句，都是保羅刻意引用當時認為可以吃之人所提供的答案。</p>

            <div>
              <h4 className="font-semibold text-purple-700 mb-3">一、知識與愛（八1-6）</h4>
              <p className="text-gray-700 leading-relaxed mb-2">那些認為可以吃的人，所提出的第一個理由是在八章1節：「論到祭偶像之物，我們曉得我們都有知識。」這「知識」指的是什麼？八章4至6節即是答案：「我們知道偶像在世上算不得什麼，也知道神只有一位，再沒有別的神……然而我們只有一位神，就是父——萬物都本於他；我們也歸於他——並有一位主，就是耶穌基督——萬物都是借著他有的；我們也是借著他有的。」這是他們對聖經的認知，特別是他們對神的認識，也可以說是神學的知識，或聖經的真理。這群人深受希臘文化的影響，因此他們遇見問題時的解決方法，就是運用頭腦的「知識」。</p>
              <p className="text-gray-700 leading-relaxed mb-2">依據聖經的教導提出答案，絕對不會有所偏差——這是哥林多人的見解。倘若我們僅僅看他們這種知識的內容，相信也很難找到什麼問題。但使徒保羅卻提出另一看法，他說：「但知識是叫人自高自大，惟有愛心能造就人。若有人以為自己知道什麼，按他所當知道的，他仍是不知道。若有人愛神，這人乃是神所知道的。」</p>
              <p className="text-gray-700 leading-relaxed">保羅所謂的「真知識」，特別是指對於神真正的認識。神其實比我們所想的更高超偉大，即便我們的知識比其他人還豐富，但事實上按自己所能了解的，對神的認識還是很貧乏，依舊不夠完全，因此，即便自己所擁有的聖經知識，也許是正確的，但這些正確的教訓，卻不一定是全面性的，也不是神所有一切的真理。保羅要我們知道：神就是「愛」，假如不認識這點，其他的知識只會叫人自高自大。「神所知道的」這句話，意味著假如一個人真正曉得愛神，其實是因為神先愛了他。換言之，我們能夠愛神，都不是因為我們高超過人，而是蒙神的恩典。</p>
            </div>

            <div>
              <h4 className="font-semibold text-purple-700 mb-3">二、知識與良心（八7-10）</h4>
              <p className="text-gray-700 leading-relaxed mb-2">接著，使徒保羅針對他們的話（4至6節，「我們有知識」）而加以糾正。他說：「人不都有這等知識」（7節）。要記得，有人可以擁有知識，或蒙神恩典具有特別的經驗與亮光，但這並非表示人人皆能如此，所以不能單憑自己對神的認識，就以為全世界的人皆需與自己的情況相同。</p>
              <p className="text-gray-700 leading-relaxed mb-2">保羅說，事實上「有人到如今因拜慣了偶像，就以為所吃的是祭偶像之物。他們的良心既然軟弱，也就污穢了。其實食物不能叫神看中我們，因為我們不吃也無損，吃也無益」，因為問題不在「食物」，而在吃的時候的「心態」。有些人因為沒有這等知識，所以在世界生活的方式，只是依照良知來行事，但他們的良心因為拜慣了偶像，而有所軟弱，因此不能分辨「食物」本身是中性的，不具有特別意義，所以絕不會因為拜過偶像，食物本身就變得不潔淨。</p>
              <p className="text-gray-700 leading-relaxed">但這群人既是這樣的認定，因此告訴他們凡物可以吃的時候，其良心總是過意不去。這是保羅對人非常實際而深刻的觀察——誠如許多時候我們對事情的看法，往往深受過往習慣與自身訓練所影響，卻自以為是理所當然。</p>
            </div>

            <div>
              <h4 className="font-semibold text-purple-700 mb-3">三、知識與基督（八10-13）</h4>
              <p className="text-gray-700 leading-relaxed mb-2">最後，保羅說如果自認為認識神，知道何謂「愛」，卻不管他人想法如何，只要自己認為是對的，就可以獨斷獨行，將會造成什麼結果呢？10至13節說：「只是你們要謹慎，恐怕你們這自由竟成了那軟弱人的絆腳石。若有人見你這有知識的，在偶像的廟裡坐席，這人的良心若是軟弱，豈不放膽去吃那祭偶像之物嗎？因此，基督為他死的那軟弱弟兄，也就因你的知識沉淪了。」</p>
              <p className="text-gray-700 leading-relaxed mb-2">或許有知識的人認為無所謂，因為只有一位神，那些偶像都是假的，而且食物都源自於神，因此無論在何處、吃何物都可以。但對那些軟弱的弟兄而言，他們卻不是如此想，他們會跟著去吃、甚至去膜拜，也就會因著你的緣故，犯了拜偶像之罪。所以保羅說：他們因為你的知識而沉淪，意即——你的自由，卻是讓他人跌倒！</p>
              <p className="text-gray-700 leading-relaxed">這些會受絆跌之人有何重要？保羅在此講了一句很重的話：這是「基督為他死的那軟弱弟兄」（11節），請注意，保羅並不認為這些弟兄是剛強的，但即便這是軟弱的弟兄，基督仍為他死，這正是福音的特點！無論上智或下愚，基督總為我們死，總要拯救。而且得罪他們就是得罪基督（12節）。因此保羅說：「所以，食物若叫我弟兄跌倒，我就永遠不吃肉，免得叫我弟兄跌倒了。」因著耶穌基督為他死的弟兄，我寧願犧牲自己可以做的事情。這是基督的愛！</p>
            </div>

            <div className="border-t border-purple-100 pt-4">
              <h4 className="font-semibold text-purple-700 mb-3">結語</h4>
              <p className="text-gray-700 leading-relaxed">面對吃祭偶像之物的問題，哥林多的基督徒有兩種不同的立場。在這章經文中，保羅主要是針對著那些自認為有知識的人說話。他並沒有說知識不好，也沒有說他們的知識不正確。他只是指出他們的知識不夠全面，同時他們沒有想到，有些人並不具備這等知識。更重要的是，保羅指出他們純粹以知識決定行動的自由，無視於其他肢體而獨斷獨行，並非正確且自由的行為，因為他們忽視了其他弟兄姊妹的價值。這麼一來，卻又凸顯出他們的知識的確是不夠周全，因為不知道最高的知識是認識神，而認識神最重要的就是認識祂的愛。</p>
            </div>
          </div>
        )}
      </div>

      {/* 省思與應用 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('application')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-teal-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">省思與應用</span>
          </div>
          {expanded['application'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['application'] && (
          <div className="p-5 bg-white space-y-6">
            <p className="text-gray-600 text-sm leading-relaxed border-l-4 border-teal-200 pl-3">新環境總是會帶來衝擊。假如生活環境從過去至今沒改變，那問題不大，我們只需按前人腳蹤而行即可，但若環境不斷改變時，所要面對的是新的處境與問題，這時當何去何從？從新約至今，歷世歷代基督徒皆會面臨到不同的問題，而不同基督徒會提出各自之解答，以及多面之方向。</p>

            <p className="text-gray-700 leading-relaxed border-l-4 border-teal-100 pl-3">談到哥林多前書第八章這段經文對於現代基督徒的意義，生活在華人宗教和文化傳統中的基督徒並不難體會。例如，有人的問題是：閩南和臺灣地區的人每年農曆七月的鬼節，都有邀請鄰居吃飯的習俗，作為基督徒，可以接受他們的邀請嗎？若是不接受他們的邀請，豈不是令鄰舍失面子，而且連作朋友的情誼都沒有？也有一些基督徒家中的父母尚未信主，當父母祭祖以後，作為基督徒的兒女可以吃祭祖之後的食物嗎？若是不吃，那不僅是要挨餓，更是不孝，怎麼辦？</p>

            <p className="text-gray-700 leading-relaxed border-l-4 border-teal-100 pl-3">不僅如此，這段經文對於那些活在現代化環境中的人，也是很有意思，因為今日的教會和基督徒也面對許多爭議性的問題，大至全國性乃至是世界性的問題，如女性按牧等議題；小至實際生活上應當如何回應的問題。筆者曾在洛杉磯牧會，有一對夫妻來到教會中，說他們因為那間教會開始走現代敬拜讚美的詩歌路線，他們認為不合適，認為此舉是向世俗靠近，因此就到筆者牧養的教會聚會，但恰好此次聚會敬拜時所用的形式，也是採用現代的敬拜讚美詩歌，所以筆者知道下星期這對夫婦就不會再來了，因為他們有很堅定的信念，甚至讓他們決定離開教會。從第一世紀哥林多教會到今天的二十一世紀，不同時代面對新的現象出現時，基督徒會有不同的答案，而且在每一方面都相當堅持自己的答案，也就在堅持己見的張力下，教會中產生了不少的矛盾與衝突。</p>

            <div>
              <h4 className="font-semibold text-teal-700 mb-3">一、知識的地位</h4>
              <p className="text-gray-700 leading-relaxed mb-2">首先，我們需要為「知識」定位。由於保羅在第1節下半說：「但知識是叫人自高自大，惟有愛心能造就人。」在筆者成長的過程中，就曾聽過有些人斷章取義，認為保羅在此處是將知識與愛心對立，否定知識的重要，因此這些人根據這節經文，反對神學知識和神學教育。他們甚至引用教會歷史，證明神學只會引起教會的紛爭。</p>
              <p className="text-gray-700 leading-relaxed mb-2">其實，保羅在這段經文並沒有否定知識。在1至3節這第一段經文中，他主要想表達的是：要談知識，必須掌握聖經中最基本的知識——就是認識神，而認識神最基本的特徵，就是認識到神是愛。因此，若談知識而不談愛心，只是片面的認知。所以這段經文對我們的提醒是：要謹防片面的知識。</p>
              <p className="text-gray-700 leading-relaxed mb-2">中國人有句俗語形容某些人是「半桶水」——當你挑半桶水走路時，水在桶裡會搖搖晃晃，很容易潑出來。而我們對神的認識，很多時候其實也屬於半桶水狀態，自覺對神的認識已經是非常奧妙、特別，但終究不過是滄海一粟。筆者在英國讀博士學位時，指導老師告訴我們這群博士研究生說：你們在博士研究過程中，尋獲某個答案，若以為是過去兩千年來從來沒有人發現或是說過的，這只表示你看書看得還不夠多！其實，每個博士研究生，都會自認為尋獲兩千年以來從未發現的亮光。直到今日，筆者作基督徒已經超過五十年，仍舊發現在聖經中有好些話語，似乎就像從來沒念過一樣。</p>
              <p className="text-gray-700 leading-relaxed">保羅說：「知識是叫人自高自大，惟有愛心能造就人……若有人愛神，這人乃是神所知道的。」這不單是博士研究生常犯的一種毛病；就是在教會中，假如有人禱告時看見異象，相信一定會希望全世界的人立刻都知道神多麼恩待他，讓他擁有如此獨特的經驗，這種心態是：你知道我多麼棒嗎？我所擁有的是你所缺乏的！這是世人的真相，認為「知識」提升自我身價，卻不管內容所指為何。這與「愛心能造就人」剛好是相反的。若沒有愛心，只專注於對神的認識，認為這種「知識」可以解決一切的問題，這事實上並沒有做到真認識神後，所應該有的果效。弟兄姊妹們沒有因為你而得造就，反而因你的知識沉淪跌倒，即便有好心，卻收到相反的果效。</p>
            </div>

            <div>
              <h4 className="font-semibold text-teal-700 mb-3">二、理性的限制</h4>
              <p className="text-gray-700 leading-relaxed mb-2">在哥林多前書第八章中，我們看到的是有一群人深受希臘風俗影響，遇見問題時的解決方法，就是運用「知識」，甚至是自認對神的認識。在中國文化的背景中，我們也是採取類似的方法——以理服人；我們認為，只要我有理，你就得聽從。</p>
              <p className="text-gray-700 leading-relaxed mb-2">但是，保羅提醒我們：以理性解決紛爭，並不是萬能的仙丹！保羅認為要改變一個人的行為模式，不是以「聖經這樣說」的方式，就可以迎刃而解的，這是基於保羅對人類行為深入地觀察。他指出理性之所以不能解決問題，有兩個原因。第一，因為理性假定了知識的存在，但並非所有的人都有同樣的知識；其次，中國有句俗語說：「秀才遇到兵，有理說不清。」保羅指出一些人處理事情，是根據他們的「良心」。</p>
              <p className="text-gray-700 leading-relaxed mb-2">要注意，保羅不是說哥林多信徒在4至6節所說的知識不對；事實上，這幾節經文的內容是正確的，後來保羅在歌羅西書第一章也講過類似的話，而約翰福音一章1至18節的序言，也有類似的話。在此同時，保羅也沒有說憑良心行事就一定是對的；事實上，他在第十章的結語中，便間接地指出這些人過於拘謹，並在羅馬書中指出這些人不能單單靠良心行事。但是，保羅在此處卻是平衡地檢視這件事。</p>
              <p className="text-gray-700 leading-relaxed mb-2">許多時候，我們的問題就是忽視了保羅在這裡所講的現象。「良心」原是神給世人分辨是非的，但同時，良心卻又深深受到不同文化環境的影響，因此良心並不是基督徒行事最高的指導準則。可是，它卻又是深根柢固，經常影響基督徒的行為；更麻煩的是：許多時候我們自以為根據的是聖經的教導，實際上卻是良心的引導。就如在婚姻中，有些夫妻相處二、三十年，仍舊無法改變對方一些特殊行為，而在結婚之初，滿心以為只要用正確的話語加以指導，就可以解決，但對方至今卻仍無動於衷。</p>
              <p className="text-gray-700 leading-relaxed">近來，許多年輕人很喜歡唱現代敬拜讚美的詩歌，對一些熟悉校園詩歌、青年聖歌的中壯年人而言，往往不知道音樂何時是過門，而何時應該跟著唱和，因為傳統詩歌有其規矩，而現代詩歌往往會從後半拍切入。此外，現代詩歌敬拜時往往高舉雙手，對於年老者或是受中國傳統士大夫觀念影響而講究體統者，很不容易適應。但是，聖經中何處定下了詩歌的曲調？舉起雙手真的是聖經禁止的嗎？只要我們肯面對事實，便會發現我們真正的問題，並不是聖經的教導，而是我們自己深受過去文化、教育背景的影響，面對新鮮事物很難立刻接受或跟上，更何況若是良心過意不去，心中認為是錯誤的、不合體統的，就更不容易接受。所以，不要以為只要思想正確，「一句話」就可以解決問題，從實際經驗裡我們發現這是不可能的，要解決問題是需要時間與不斷溝通的。</p>
            </div>

            <div>
              <h4 className="font-semibold text-teal-700 mb-3">三、軟弱的弟兄姊妹的價值</h4>
              <p className="text-gray-700 leading-relaxed mb-2">在八章11至12節，保羅讓我們看到，我們處理不同意見時，另一個更嚴重的問題出在——自以為站在真理的一方，就輕視他人，認為不需要傾聽對方的聲音，甚或採取讓步。保羅提醒我們：處理教會中的不同意見時，必須看見論調相左之人，同樣是在基督裡具有寶貴價值，因為主耶穌是為他們而死！</p>
              <p className="text-gray-700 leading-relaxed mb-2">這段經文一個很值得玩味的地方，就是被保羅責備的是一些「剛強」的人。這些人的行事原則除了是憑知識以外，就是基督徒的自由——這些原也不能說是錯誤的。問題是：在這兩個指導原則下，他們表現出來的卻是我行我素，忽視了那些「軟弱」者存在的價值。若是用哥林多前書第一章的話，這就是違背了「活在十字架蔭影下」的原則，按著世俗的標準在行事。如此觀之，這是一件非常弔詭的現象，也是非常諷刺的事情。有知識、有自由，而沒有基督十字架上的愛，結果就是走上世俗的路途。這豈不是現代好些人的寫照？</p>
              <p className="text-gray-700 leading-relaxed">在處理弟兄姊妹間的不同意見時，需要注意到這個層面。我們在面對意見相左之人時，基本心態若是自恃過高而輕視對方，即便意見多正確、有效，都得不到對方的信任，也無法幫助他；只有真正將對方視為寶貴、值得多加尊重時，才會收到果效。</p>
            </div>

            <div className="border-t border-teal-100 pt-4">
              <h4 className="font-semibold text-teal-700 mb-3">默想</h4>
              <p className="text-gray-700 leading-relaxed mb-2">歷世歷代中的每位基督徒，都要面對新環境，我們都要問：該如何回應？每一個時代都會提供不同的看法，也引起諸多不同的行動，而我們該何去何從？</p>
              <p className="text-gray-700 leading-relaxed">最重要的是，在耶穌基督的「愛」中解決問題——這並非說知識不重要，一如保羅從未說不吃祭物之人是對的；但也沒說主張吃的人是錯的，而只能說認識不夠——對實際處境的了解不夠深刻；對於那些持不同意見的人，要知道他們在耶穌基督裡仍擁有寶貴的救贖地位與價值，是絕對不能得罪的。若明白此一層面，再去處理教會中不同意見時，相信可以看見真正在主裡的愛，至終大家都被建造，同得好處，而不會有人因此跌倒；相反地，若不如此行，其實我們是大大地得罪主耶穌。</p>
            </div>
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
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">一、希臘斯多葛哲學的「知識論」背景</h4>
              <p className="text-gray-700 leading-relaxed">哥林多是希臘文化的重要中心，城中流行的斯多葛哲學（Stoicism）強調理性（logos）是宇宙的最高秩序，認為有知識、有理性的人（sophos，智者）可以通過邏輯推論達到美德。這種「知識即美德」的觀念，使得哥林多的知識分子基督徒相信：只要我的神學推論是正確的（偶像不是真神，食物是中性的），行動就是合理的。保羅的回應，是從希伯來傳統的「認識」概念（yada，代表關係性的了解）出發，挑戰希臘式純理性的認識論。真正的認識，不是對命題的掌握，而是與神建立愛的關係；因此「認識神」的頂峰，是「被神所知」（第3節），而非「知道更多關於神的事」。</p>
            </div>

            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">二、「良心」（syneidesis）的文化形塑問題</h4>
              <p className="text-gray-700 leading-relaxed">保羅在這段經文中使用的「良心」（希臘文syneidesis）一詞，在當時的希臘-羅馬文化中已是倫理討論的常用詞。哲學家如西塞羅（Cicero）和塞內卡（Seneca）都討論過良心作為人內在道德裁判官的功能。然而，保羅對良心的理解比哲學家更為複雜：良心並非絕對可靠的道德指南，因為它深受文化習慣和個人背景的形塑（「拜慣了偶像」，7節）。這一觀察超越了斯多葛式對理性良心的樂觀估計，更接近現代心理學對「認知偏見」（cognitive bias）的理解——我們的道德直覺往往是被過去的經歷所訓練出來的，而非純粹客觀的判斷。教會因此需要耐心和長期的門訓，才能幫助人從良心深處更新。</p>
            </div>

            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">三、「強者」與「弱者」的社會學詮釋</h4>
              <p className="text-gray-700 leading-relaxed">新約學者葛爾德·特森（Gerd Theissen）的社會學研究指出，哥林多教會中「有知識」、認為可以吃祭偶像之物的「強者」，往往是社會階層較高的信徒——他們有機會接觸希臘哲學教育，也常受邀參加在神廟舉辦的社交宴席（10節「在偶像的廟裡坐席」即是社交宴請的場景）。而「軟弱的弟兄」，往往是社會底層的信徒，他們的信仰是從文化習俗中掙扎出來的，對偶像崇拜仍有深切的恐懼。保羅在這裡是讓擁有知識和社會地位的「強者」，為了「弱者」犧牲自己的文化特權——這是十字架倫理的社會學體現。在今日教會，同樣的動態以不同的面貌出現：受過神學教育者與文化程度較低者、城市教會與農村教會、改革宗傳統與靈恩傳統之間，如何彼此尊重。</p>
            </div>

            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">四、現代「知識優越感」與教會的合一挑戰</h4>
              <p className="text-gray-700 leading-relaxed">今日社會媒體時代，「知識優越感」（epistemic arrogance）以全新面貌呈現：教會內的神學辯論、各式屬靈操練的高下之爭、對「還不夠開明」的弟兄姊妹的論斷……這些都是哥林多問題的現代版本。重要的是，保羅並不主張「知識無用」，而是主張知識必須被愛所塑造——愛「不求自己的益處」（林前十三5）。在當代教會語境中，這意味著：神學上的正確，若沒有對軟弱者的體貼，不僅無法建造教會，反而可能造成比不知道真理更大的傷害。「基督為他死的那軟弱弟兄」（11節）這句話，應當成為每一個自認有知識的基督徒最深的警醒，也是教會合一最堅實的神學基礎。</p>
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
          <div className="p-5 bg-white space-y-4">
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0 text-lg">1.</span>
              <p className="text-gray-700 leading-relaxed">你是否曾有過因為「我有聖經根據」而對他人的信仰實踐採取論斷態度的經歷？回想那個情境，你當時是否考慮過對方的「良心軟弱」背景？那次的互動結果如何？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0 text-lg">2.</span>
              <p className="text-gray-700 leading-relaxed">保羅說「知識是叫人自高自大，惟有愛心能造就人」。在你的信仰成長過程中，你有沒有經歷過某種「知識」讓你感到自己比其他信徒更屬靈或更成熟？那種感覺背後反映了什麼心態？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0 text-lg">3.</span>
              <p className="text-gray-700 leading-relaxed">在你的文化或家庭背景中，有沒有類似「吃祭偶像之物」的情境——例如參加非基督徒家人的祭祖儀式、接受鄰居的祭拜食物等？你是如何處理的？你的選擇是基於知識、良心還是對他人的考量？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0 text-lg">4.</span>
              <p className="text-gray-700 leading-relaxed">「基督為他死的那軟弱弟兄」——這句話對你有什麼衝擊？在你的教會群體中，有沒有人是你認為信仰「不夠成熟」或「觀念不夠正確」的？保羅這句話如何改變你看待他們的方式？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0 text-lg">5.</span>
              <p className="text-gray-700 leading-relaxed">保羅說良心深受過往習慣影響，因此「拜慣了偶像」的人即使在神學上知道偶像不是真神，良心仍然會軟弱。你自己有沒有某些根深柢固的文化習慣或家庭教導，你「知道」那可能不完全正確，但良心仍然難以接受？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0 text-lg">6.</span>
              <p className="text-gray-700 leading-relaxed">保羅最終說：「食物若叫我弟兄跌倒，我就永遠不吃肉。」這是一個極端的自我節制。在你目前的生活中，有沒有什麼你有自由去做、但為了不讓某人跌倒而願意放棄的事？這種放棄對你有什麼感受？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0 text-lg">7.</span>
              <p className="text-gray-700 leading-relaxed">陳濟民牧師說，我們有時誤以為自己依據的是聖經教導，實際上卻是良心的引導。面對教會中的爭議（例如：敬拜風格、聚會形式、神學立場），你如何辨別自己的堅持是出於聖經原則，還是個人的文化習慣或良心傾向？</p>
            </div>
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
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 識別你的「知識優越感」時刻</h4>
              <p className="text-gray-700 mb-2">本週刻意留意自己在教會討論或家庭對話中，何時會出現「我比他更了解聖經」或「他的信仰理解太膚淺」的內在態度。每次發現這樣的念頭時：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>在心裡默念：「基督也為他死。」</li>
                <li>問自己：「我現在更想建造他，還是更想贏得這場辯論？」</li>
                <li>週末記錄下這週發生了幾次，心態上有什麼改變</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 學習傾聽「軟弱者」的聲音</h4>
              <p className="text-gray-700 mb-2">選擇一位在信仰實踐上與你有所不同的弟兄姊妹（例如：對某些文化習俗的處理、對敬拜風格的喜好），刻意找機會與他們交談，目的不是說服對方，而是真誠地了解：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>他們的成長背景如何影響他們的信仰實踐？</li>
                <li>他們在這個議題上的顧慮是什麼？</li>
                <li>聆聽後，你對「良心軟弱」有什麼新的理解？</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 為他人的好處而自我節制</h4>
              <p className="text-gray-700 mb-2">仿照保羅「我就永遠不吃肉」的精神，本週選擇一件你有自由去做、但你知道某位弟兄姊妹可能會因此心裡難過或良心受到影響的事，主動放棄它。這個練習的重點不是那件事本身，而是建立一種「為他人的益處而甘願放棄自己自由」的屬靈習慣。事後，在禱告中把這個犧牲獻給神，感謝祂賜給你這樣做的意願。</p>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">⏰ 以「愛心造就人」審視一次過去的爭論</h4>
              <p className="text-gray-700 mb-2">回想過去三個月內，你在教會或信仰群體中參與過的一次爭論或意見分歧。用以下問題重新審視：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>我在那次爭論中的目標是「贏」、「證明對方錯」，還是「造就對方」？</li>
                <li>事後，那位弟兄姊妹在信仰上有沒有被建造？</li>
                <li>如果可以重來，我會怎樣做不一樣的事？</li>
                <li>如果有必要，考慮主動向對方表達歉意或和解</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 面對文化張力的實際計畫</h4>
              <p className="text-gray-700 mb-2">若你身處華人文化，思考你可能在未來一個月內面對的一次與祭祖、鬼節飲食或非基督徒家庭習俗相關的情境。提前寫下你的回應計畫：如何在不傷害福音見證、不無謂地傷害家人感情，同時也不讓自己或他人的良心受損的情況下作出回應。若沒有這樣的情境，則為身邊正在面對此問題的弟兄姊妹代禱，並思考如何給予支持而非直接的答案。</p>
            </div>

            <div className="border-t border-green-100 pt-4 mt-4">
              <h4 className="font-semibold text-green-700 mb-3">🙏 本週禱告</h4>
              <p className="text-gray-700 leading-relaxed text-lg italic border-l-4 border-green-300 pl-4 py-2 bg-green-50 rounded-r">
                天父，感謝袮賜給我認識袮的知識與恩典。求袮幫助我謹記，真正認識袮的最深記號，不是我知道多少關於袮的事，而是我是否被袮所愛，並且在這愛中去愛我的弟兄姊妹。當我面對教會中意見分歧、信仰差異的時刻，求袮提醒我：那些持不同看法的人，也是「基督為他死的弟兄」，是袮用寶血所買贖的。讓我不以知識自高，而以愛心造就人；不以自由傷害人，而以捨己成全人。願我的每一個選擇，都建造袮的教會，而非使人跌倒。奉耶穌基督的名禱告，阿們。
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
