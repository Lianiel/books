import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Users, Search, HelpCircle, Check } from 'lucide-react';

export default function Book17Ch14() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    application: true,
    exploration: true,
    questions: true,
    practice: true,
  });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">第十四章</h1>
        <h2 className="text-xl font-semibold text-gray-700">追求成就或追求愛人（十三1-13）</h2>
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
            <div>
              <p className="text-gray-700 leading-relaxed mb-3">
                哥林多前書第十三章表面上像是獨立的一章，主題是「愛」。但若將十二章31節（「你們要切切地求那更大的恩賜，我現今把最妙的道指示你們」）與十四章1節（「你們要追求愛，也要切慕屬靈的恩賜」）接續閱讀，便會發現這三章是連貫的三明治結構：十二章和十四章談恩賜，第十三章談的是「最妙的道」。保羅談愛，是為了說明哥林多信徒所看重的恩賜！
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">一、愛與恩賜（十三1-3，8-13）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                在第一段（1-3節），保羅列出一系列令人羡慕的恩賜：方言、天使的話語、先知講道、奧秘和知識、移山的信心、賙濟窮人、捨己身。他用誇張的語氣假定自己擁有一切，卻說：若沒有愛，這些不但沒有意義，「我這個人什麼都不是」，也「沒有益處」。恩賜並不是不好，問題在於當這些恩賜和行動缺乏了愛的動機時，它們無法肯定個人的價值，也達不到真正的功效。賙濟窮人或殉道，表面看來是為愛而做，但也可以出於非常自私的動機——正如保羅在八章1節指出「知識可以叫人自高自大」。愛是貫穿一切恩賜的樞紐。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在第三段（8-13節），保羅強調愛的超越性：「愛是永不止息。」方言、先知講道和知識，都有它們的時間性。第10節說：「等那完全的來到，這有限的必歸於無有了。」有人認為這裡指新約正典的形成，因而主張方言、先知和使徒等恩賜現今都已終止。作者覺得這種詮釋有困難：保羅接著說信心和盼望也都有一天不再需要，難道新約成立後信心和盼望都不需要了？若是新約成立後恩賜不再需要，那今天事奉是靠什麼？
              </p>
              <p className="text-gray-700 leading-relaxed">
                保羅在11-13節用孩子長大及面對鏡子的比喻，讓讀者看到恩賜有它的時間性：就算恩賜再好，也只是成長過程中需要的；恩賜不是信徒追求的終點，真正最終的目的是認識神。信、望、愛三者都是現今世代所需要的，但因為讀者還沒有成熟，尚未完全認識主，相比較之下，愛是最重要、最大的——因為主再來後，信心和盼望已成現實，但愛仍不止息。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">二、愛的行動（十三4-7）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅在這四節中使用一種特別的表達方法：「愛」字後面接動詞——愛是會行動的。愛不僅是主觀的感覺，也不僅是一種心態，愛是會借由行動表現的。歸納起來，愛有正反兩面：
              </p>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p className="text-gray-700"><span className="font-medium">積極表現：</span>恆久忍耐（容忍犯罪頂撞的人，為要給悔改的機會）、又有恩慈（讓人容易接近）、喜歡真理、凡事包容、凡事相信（信任人、有信心）、凡事盼望、凡事忍耐（有愛心的人在敵對環境下堅毅不撓）。</p>
                <p className="text-gray-700"><span className="font-medium">消極表現：</span>不嫉妒（明白恩賜不是每人相同，就不會嫉妒）、不自誇、不張狂（不自高自大）、不作害羞的事（不鹵莽、不粗話）、不求自己的益處、不輕易發怒、不計算人的惡（不懷怨記恨）、不喜歡不義（不幸災樂禍）。</p>
              </div>
              <p className="text-gray-700 leading-relaxed mt-3">
                注意哥林多教會的問題，不難發現他們恰恰是把正反兩面的表現倒置了：一至四章彼此嫉妒紛爭；五至六章對羞恥的事當作光榮；八至十章自高自大、不顧他人；十一章忘記了等候貧窮的肢體；十四章追求只讓自己得益的恩賜；十五章在信心和盼望上出現差錯。整卷哥林多前書的癥結，就在第十三章。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                保羅在第十二章要求信徒接納彼此恩賜的不同，維護在主裡的合一。在第十三章，他一方面肯定恩賜的存在和價值，另一方面提出運用恩賜的原則，指出聖靈的恩賜和聖靈的果子之間的正確關係。
              </p>
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
          <div className="p-5 bg-white space-y-5">
            <p className="text-gray-700 leading-relaxed">
              由於受到基督教的影響，現今很少有人會否認愛的重要，哥林多前書第十三章的內容也被譜成受歡迎的詩歌，經常傳唱。但也因為如此，我們更需要重視保羅在這章著名而熟悉的經文中所說的要點。
            </p>
            <div>
              <p className="text-gray-700 leading-relaxed mb-3">
                有一次，作者讀到一個現代管理學著名的故事。在功利主義的影響下，二十世紀美國商業界流行的經營理念是將銷售量和獲利當作一間公司最重要的指標，因此美國生產的汽車基本上讓消費者使用六年。有一位美國企管學者卻指出，品質其實也是商業產品重要的因素。然而，他的理論並不受美國商界的重視，反而是日本人接受了。到了二十一世紀，日本的豐田汽車公司終於超過美國的通用，成為世界第一大的汽車公司！
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                按世俗的標準，人的價值靠著自我的擁有與成就而得到肯定；在商業掛帥的世界中，績效更是衡量成就的標準。但保羅卻認為，即便擁有最好的恩賜和極高的成就，仍然不能增加自身的價值，也不具永恆的結果。賙濟窮人背後的真正動機，可以是為著建立自己的名譽，現代更是有人為了逃稅才這麼做。而佛教傳統中的捨己救人，也可以是為自己積聚功德。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                教會今日提及聖靈恩賜時，往往只看到說方言、講道等外顯功能，而忘了聖靈的果子與愛心比這些都重要。在加拉太書第五章，保羅清楚地指出「愛心」是聖靈的果子。在現今這個追求超自然事物及追求恩賜的世代，信徒需要格外謹慎小心。在哥林多前書第十二章，保羅強調恩賜因人而異，不同的人擁有不同的恩賜，因此不能要求每位信徒都有同樣的恩賜。在第十三章，他強調每一個有恩賜的人，都需要有愛。愛是神賜給每位基督徒的禮物，也是神衡量每位信徒的準則。一個在人看來有大恩賜的人，卻不一定是有愛心的人。一個默默無聞、不識字、沒才幹的人，可能比有恩賜的佈道家、宗教界頂尖領袖來得更有愛心、更屬靈也說不定。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                以現代的神學語言表達，保羅在此處強調的是聖靈的果子。若將聖靈的果子與聖靈的恩賜相互比較，保羅顯然認為聖靈的果子比恩賜更能長遠。但請別誤會，保羅絕不否定恩賜；他是拒絕將恩賜與個人的成就或個人的價值掛鉤。「愛」是一切恩賜的總動力，也是推動一切恩賜的源頭。若是我們必須與他人比較，比較的不應是恩賜，而應該是愛心。信徒可以沒有某種恩賜，但是不能沒有愛心。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在現代有關靈恩的爭論中，往往會發現許多人對「靈恩」有所不滿，不過原因不是認為聖靈的恩賜不好，只是很可惜在表達時給人的印象是輕看了聖靈的恩賜。另一方面，也看到一些所謂靈恩的人士，事實上並不是不知道愛心的重要，但是講起話來給人的印象，卻好像認為其他人一無是處。在華人教會中，這種現象特別明顯。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                事實上，華人教會中有些反對靈恩的人，本身卻擁有靈恩運動所強調的恩賜，包括說方言、醫病、趕鬼；有些人講道，實際而論是先知型的；有些人展現出來的，甚至是近年所強調的使徒的恩賜；而強調靈恩的人，其實同時也非常注意肢體彼此間的扶持和社會的關懷。只是由於雙方的表達出現問題，因此在溝通過程中，心中都是「有氣」，都在愛心上彼此虧欠，特別是缺乏忍耐，因此難免呈現出自高自大的心態。作者個人的感受是：讓我們再次回到聖經的教導中，承認彼此都是罪人，都難免有偏差，同時也在偏差的現實世界中，繼續實踐愛心。說方言可叫人自高自大，有知識也同樣可以叫人自高自大。總括而言，彼此都需要愛心！
              </p>
              <p className="text-gray-700 leading-relaxed">
                有些人之所以對靈恩有顧慮，是怕目前靈恩現象中的一些恩賜，特別是所謂知識的言語、先知和使徒這一類的恩賜，會威脅到聖經的權威。目前靈恩派和福音派人士都同意，現今並沒有任何先知或使徒，可以繼續寫聖經。這也就是承認，即使現今的世代有先知和使徒，他們的權威與新舊約時代的並不同等。作者覺得雙方在這方面，需要更多在愛心中溝通。
              </p>
            </div>
            <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-teal-400">
              <h4 className="font-bold text-teal-800 mb-2">默想</h4>
              <p className="text-gray-700 leading-relaxed">
                在哥林多前書第十三章，可以看到哥林多人僅僅注重聖靈的恩賜，而忽視了聖靈的果子，這是嚴重的偏差。保羅不輕看恩賜可以做到的事，但是他認為在接受恩賜的同時，需要在愛心中運作。在今天的世代，當我們信徒重視恩賜的同時，保羅的教導也是我們應當注意的。
              </p>
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
              <h4 className="font-semibold text-gray-800 mb-2">一、agape、eros、philia——「愛」的希臘哲學背景</h4>
              <p className="text-gray-700 leading-relaxed">
                希臘語對「愛」有多個不同詞彙，各有不同的哲學與文化含義。保羅在哥林多前書第十三章使用的是「agape」（agapē），而非「eros」（浪漫愛、慾望之愛）或「philia」（友情之愛）。「agape」在古典希臘文學中較為罕見，在七十士譯本（Septuagint）中被用來翻譯舊約中神對人類的愛，以及誡命中「愛鄰舍如同自己」的愛。學者Anders Nygren在其經典著作《Agape and Eros》中指出，agape代表一種「無條件的、主動施予的愛」，其動機完全在於施愛者，而非被愛者的價值——這與柏拉圖式的eros（因對象的美善而被吸引的愛）截然相反。保羅對愛的這種理解，根植於神在基督裡的自我給予：「神愛世人，甚至將祂的獨生子賜給他們」（約三16），這愛的出發點是神的性情，而非人的可愛性。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">二、「那完全的來到」的末世論詮釋爭議</h4>
              <p className="text-gray-700 leading-relaxed">
                哥林多前書十三章10節的「那完全的來到」（to teleion），是靈恩神學爭論的核心文本之一。「廢止論」（cessationism）主張「那完全的」指新約正典的完成，因此第一世紀的部分恩賜（如方言、先知）在新約正典形成後即已終止；「連續論」（continuationism）則主張「那完全的」指基督再來時的完全狀態。除了作者提出的兩點困難（信心和盼望的問題），連續論者還指出：新約中沒有任何一處明言某種恩賜會在正典完成後停止；四世紀的奧古斯丁（Augustine）雖早年持某種廢止論的立場，晚年卻在《上帝之城》（City of God）中改變看法，記錄了他親眼目睹的神蹟醫治。這一爭論在今日仍未有共識，但多數學者同意：這節經文本身並不足以支撐廢止論的全部主張。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">三、哥林多前書十三章的原始語境與現代應用</h4>
              <p className="text-gray-700 leading-relaxed">
                哥林多前書第十三章在現代教會中幾乎無處不在——婚禮誓詞、勵志牌匾、社交媒體。但學者Gordon Fee指出，這種「去語境化」的使用，恰恰背叛了保羅的原意。這段經文不是在談浪漫的愛情，也不是一首讚美愛的詩篇；它是保羅在激烈的教會衝突中，針對一群因恩賜問題而驕傲分裂的信徒所說的「軍規」。「愛是恆久忍耐」在婚禮中聽起來是溫柔的，但在哥林多教會的脈絡中，這是在責備那些「說方言就了不起、不說就沒用」的心態。保羅的愛論，是教會論的核心：只有在共同體的脈絡中，才能真正理解和實踐這裡所說的愛。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">四、聖靈果子與聖靈恩賜的系統神學關係</h4>
              <p className="text-gray-700 leading-relaxed">
                聖靈的果子（加拉太書五章22-23節）與聖靈的恩賜（哥林多前書十二章），在系統神學中代表兩種不同的聖靈工作面向。恩賜（charismata）是「功能性的」：是為了建造教會和服侍世界而賜的能力，不同的人得到不同的恩賜。果子（karpos）是「品格性的」：是聖靈在每位信徒生命中結出的共同特質，反映基督的性情。神學家Millard Erickson指出，恩賜的有無取決於聖靈的主權分配，但果子的結出則與信徒的順服和成長過程有關。因此，有恩賜而無果子，是神學上的矛盾；而有果子的人雖然恩賜各異，卻必然在愛中運用。保羅在哥林多前書的教導，暗示了一個屬靈成熟度的衡量：成熟的信徒不是問「我有什麼恩賜」，而是問「我的恩賜是否在愛中表達出來」。
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
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">1.</span>
              <p className="text-gray-700">保羅說即便有「萬人的方言」「全備的信」「將所有的賙濟窮人」而沒有愛，「我這個人什麼都不是」。你認為這種說法對你的信仰追求有什麼最大的挑戰？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">作者用豐田汽車的故事作類比，說明在追求「績效」（恩賜和成就）的同時，「品質」（愛心）才是真正持久的基礎。在你的信仰生活和事奉中，你是否有過只追求「績效」而忽略了「品質」的情況？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">「一個默默無聞、不識字、沒才幹的人，可能比有恩賜的佈道家更有愛心、更屬靈」——你認為這種說法在你所在的教會文化中，是否被普遍接受？如果不是，障礙在哪裡？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">保羅列出愛的十五種特質（正面七種，反面八種）。誠實地反省，哪三種特質在你的日常關係中最難實踐？為什麼？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">作者說：在華人教會的靈恩/福音派爭論中，「雙方都在愛心上彼此虧欠」。你是否曾因為在某個神學立場上堅持己見，而在表達中忽略了愛心？那次經歷帶給你什麼學習？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">「說方言可叫人自高自大，有知識也同樣可以叫人自高自大」——在你的生命中，你最容易因為什麼（恩賜、知識、服侍成果、屬靈經歷）而自高自大？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">7.</span>
              <p className="text-gray-700">愛「凡事相信、凡事盼望」，意味著對人抱有相信其改變的可能性。你是否曾對某位弟兄姊妹放棄了這種盼望？今天，你願意重新把這份盼望帶回嗎？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 用「愛的鏡子」檢驗自己的恩賜</h4>
              <p className="text-gray-700 mb-2">保羅說愛是一切恩賜的總動力。這週做一個「動機省察」練習：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>列出你近期在教會或日常生活中使用恩賜的三個場合（如講道、服侍、幫助人）</li>
                <li>誠實地問自己：每個場合背後的真正動機是什麼？是愛弟兄姊妹？還是希望被認可、被稱讚、或感到自己有價值？</li>
                <li>在禱告中將這些動機帶到神面前，求神潔淨並更新你服侍的動機</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 十五種愛的特質的個人評量</h4>
              <p className="text-gray-700 mb-2">這週逐一默想保羅列出的十五種愛的特質，為自己做一個真誠的評量：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>在一張紙上列出這十五種特質，逐一打分（1-5分），1分表示「我很難做到」，5分表示「我通常能做到」</li>
                <li>找出分數最低的兩至三項，思考背後的根源（是過往的傷害、性格弱點、或錯誤的信念？）</li>
                <li>選擇一項本週集中練習，在每天的互動中有意識地應用它</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 向一位不起眼的肢體學習愛</h4>
              <p className="text-gray-700 mb-2">作者說，沒有才幹的人可能比有恩賜的人更有愛心。這週主動尋找並認識教會中一位通常被忽視的肢體：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>找一位在教會中沒有明顯恩賜或職分、但始終默默服侍的弟兄姊妹</li>
                <li>與他/她進行一次真誠的交談，了解他/她信仰的故事和生命中的愛心功課</li>
                <li>記錄你從他/她身上看到的愛的表現，思考他/她的哪些品質是你需要學習的</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 在衝突中實踐「愛不計算人的惡」</h4>
              <p className="text-gray-700 mb-2">保羅說愛「不計算人的惡」——字面是不在帳本上記錄別人的過犯。如果你目前與某位弟兄姊妹有未解決的張力：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>在禱告中，將對方的過犯和你的傷感情逐一「劃掉」——不是否認它們真實存在，而是選擇不讓它們繼續定義這段關係</li>
                <li>考慮以一個具體的善意行動（一個問候、一個感謝）打開和好的門</li>
                <li>若暫時無法和好，先從停止在心中「計算他的惡」開始</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 leading-relaxed text-lg">
                主耶穌，祢是愛的本體。感謝祢在哥林多前書第十三章，不只告訴我什麼是愛，更讓我看見自己在愛上是多麼的虧缺。求祢幫助我，不要讓我把恩賜當成驕傲的資本，而是讓愛成為一切服侍的動力和根基。當我講道、當我服侍、當我與弟兄姊妹同行時，求祢讓我問的不是「我的恩賜有沒有發揮」，而是「我有沒有在愛中服侍」。求祢在我生命中不斷地澆灌祢的愛，讓我能用祢愛我的方式，去愛身邊的每一個人。阿們。
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
