import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Compass, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book30Ch8() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">第八章</h1>
        <h2 className="text-xl font-semibold text-gray-700">聖經的創造史</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            {/* 一、創世記錄的歷史性 */}
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">一、創世記錄的歷史性</h3>
              <p className="text-gray-700 leading-relaxed mb-3">前面幾章從純科學的角度已一再說明，科學事實與特別創造的模式遠比與進化的模式吻合。上帝六日精心創造的宇宙萬物，包括所有的生物種類，以及最後創造具有上帝形象的人類——這個模式與今日科學事實最吻合。至於創造時期的細節，如創造所需的時間長短久暫、先後次序、以及所用的方法和目的，則非科學所能定斷。</p>
              <p className="text-gray-700 leading-relaxed mb-3">創世記是「起初之書」，宇宙間必有一位創造主，祂必然知道如何創造萬物，也必然知道如何向人類解釋這創造的過程。反對創世記前幾章是真實歷史的老調，在今日已不再受重視。考古學已確定在亞伯拉罕以前就已有文字，因此摩西完全可能從更古老的文字資料中選編成書。新約所有的作者，包括耶穌自己，都接受創世記前幾章是正確的歷史和神聖啟示。</p>
            </div>

            {/* 二、創世記的分期 */}
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">二、創世記的分期</h3>
              <p className="text-gray-700 leading-relaxed mb-3">創世記全書以「某某的後裔記在下面」這個固定結構分為幾個段落，每個段落均以族長名字開首。這顯示各族長本身就是這些記錄的原始作者，而摩西則是最後的編者，把這些文獻收集整理成創世記。至於創世記一章一節至二章三節，這部份最可能是出自上帝親筆或藉超自然啟示傳達給第一個人類的。希伯來原文的「歷代」（Generations），在主前第三世紀七十學士翻譯舊約首版時，便變成了希臘文的「創世記」（Genesis）（註1）。</p>

              <div className="space-y-4">
                <div className="border border-blue-100 rounded-lg p-4 bg-blue-50">
                  <h4 className="font-semibold text-blue-800 mb-2">(一)上帝「創造」和「製作」之工</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">希伯來文「bara」（創造）意指從無到有，在全部創世記中只用了三次：㈠創造空間、質量、時間（創1:1）；㈡創造生命與意識（Nephesh，創1:21）；㈢創造上帝的形象（創1:27）。「Asah」意為「製作」（利用已有的材料），「Yatsar」意為「形成」（如陶匠塑造）。這三個動詞的分別，清楚說明了物質世界的創造、生命的創造和靈性存在的創造分別是截然不同的三個大事件（註2、3、4）。</p>
                </div>
                <div className="border border-blue-100 rounded-lg p-4 bg-blue-50">
                  <h4 className="font-semibold text-blue-800 mb-2">(二)六日創造之工</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">創世記一章把六日創造清楚分列：第一日，上帝以光化宇宙（早在太陽出現之前的光）；第二日，上帝分開水際與空際；第三日，上帝使陸地和生物界出現；第四日，上帝設立星象界（日月星辰）（註5）；第五日，上帝創造水裏和空中的生命；第六日，上帝創造陸地的生命，最後造人；第七日，上帝完工安息（創2:1-3）。</p>
                </div>
              </div>
            </div>

            {/* 三、三個基本原則 */}
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">三、三個基本原則</h3>
              <div className="space-y-4">
                <div className="border border-indigo-100 rounded-lg p-4 bg-indigo-50">
                  <h4 className="font-semibold text-indigo-800 mb-2">原則1：創造是有目的的、有先後的</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">每一被造之物都有特殊的用途和目的，沒有進化論所假設的「嘗試與錯誤」過程。創造的先後次序顯示，每一步都為下一步鋪路——光先於植物，植物先於動物，陸地動物先於人，人的創造則是整個創造工程的頂峰與目標。</p>
                </div>
                <div className="border border-indigo-100 rounded-lg p-4 bg-indigo-50">
                  <h4 className="font-semibold text-indigo-800 mb-2">原則2：被造之物看來已有年齡</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">創造一開始便是「成熟」的——亞當夏娃被造時已是成人，樹木被造時已有年輪，宇宙一開始便有「外觀年齡」。第一日的光，可能是「預先能化」的，即上帝創造出已在途中的光波，使這些光波看來好像已旅行了千萬光年。重要的是：創造不包含死亡和腐朽。</p>
                </div>
                <div className="border border-indigo-100 rounded-lg p-4 bg-indigo-50">
                  <h4 className="font-semibold text-indigo-800 mb-2">原則3：當時的世界（彼得後書三章六節）</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">起初的世界與今日截然不同。穹蒼（Raqia，創1:6）以上的水構成了一個巨大的水氣層，具有溫室效應，使全球氣候溫和均勻、防止極端氣溫、過濾有害的宇宙輻射線，令人類壽命極長。洪前地理也與今日不同（伊甸的河系、大淵的噴泉）。最關鍵的是：起初沒有死亡，因為死是從人的罪而來的（羅5:12；8:22）。</p>
                </div>
              </div>
            </div>

            {/* 四、墮落、咒詛與熱力律 */}
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">四、墮落、咒詛與熱力律</h3>
              <p className="text-gray-700 leading-relaxed mb-3">整個世界是為人而設計的，人有自由意志。在伊甸園中，人懷疑上帝的話語，罪就進入了，死亡也隨着罪進入世界（創3:17-19）。羅馬書八章二十至二十二節說：受造之物服在虛空之下，指望脫離敗壞的轄制。「腐朽」正是熱力學第二定律（熵恆增定律）在整個受造界的體現——萬物趨向無序、衰敗和死亡。</p>
              <p className="text-gray-700 leading-relaxed mb-3">另一方面，上帝「安息」（創2:1-3）和尼希米記九章六節「祂維持萬物」的描述，正是熱力學第一定律（能量守恆定律）的體現——宇宙的能量總量不增不減。這兩個物理定理在近一百多年前才被科學家發現和公認，而聖經數千年前便早有啟示。聖經多處引述第一定律（歌羅西書一章16-17節；希伯來書一章2-3節；彼得後書三章5-7節等）和第二定律（詩篇一百零二篇25-27節；以賽亞書五十一章六節；彼得前書一章24-25節等）。</p>
            </div>

            {/* 五、被水淹沒 */}
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">五、被水淹沒</h3>
              <p className="text-gray-700 leading-relaxed mb-3">挪亞大洪水標誌了原始世界與現今世界的分界點（彼得後書三章5-6節）。上帝對世界進行了兩次全球性的改變：第一次（創3:17的咒詛）改變了被造之物的內涵，加上了腐朽的內在性質；第二次（創6:13的大洪水）改變了地球表面的結構——水際、陸地、生物界被改變了其作用速度及外在性質。</p>
              <p className="text-gray-700 leading-relaxed mb-3">洪水後上帝說（創8:21）：不再因人緣故咒詛地，也不再按着祂所行的滅各種活物。咒詛和大洪水是上帝仇恨罪惡、呼召人悔改的永恆見證。然而人卻是悖逆的：把宇宙腐朽的原理顛倒過來，憑空想出「宇宙進化」的過程；把洪水蹟象的全球性證據扭轉成進化的「史錄」。上帝於是停止與人類直接交往，在巴別散了那些背叛者，選出以色列族及後來的教會施行對世人的救贖計劃。</p>
            </div>

            {/* 六、聖經模式綜結 */}
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">六、聖經模式綜結</h3>
              <p className="text-gray-700 leading-relaxed mb-3">聖經歷史以三件大事為中心：㈠六日精心創造→今日能量守恆定律（第一定律）；㈡人的叛逆→上帝咒詛→今日熵恆增定律（第二定律）；㈢挪亞洪水→現今世界大致以自然律為依循。</p>
              <p className="text-gray-700 leading-relaxed mb-3">後來的全球性事件尚有：巴別變亂口音；約書亞的「長日」；基督被釘時天色突然變黑。詮釋地球歷史的資料，必須全盤接納「創造」「咒詛」「洪水」三大事件。進化系統正試圖把這些資料納入純自然主義的架構，暗地否定上帝是創造者、救贖者和審判者。聖經對這三大事件的敘述是明確的歷史，批評任何「妥協性學說」時，上帝的話必須首先被尊重，其次才是科學觀察。</p>
            </div>

            {/* 七、神導進化論 */}
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">七、神導進化論（Theistic Evolution）</h3>
              <div className="space-y-4">
                <div className="border border-blue-100 rounded-lg p-4 bg-blue-50">
                  <h4 className="font-semibold text-blue-800 mb-2">(一)「各從其類」的創造排斥類際突變</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">創世記一章中有十大「類」（植物三大類+動物六大類+人）。每一類均包含許多被創造的物種，同類中可以有變種，但不能超越「類」的基本範圍。哥林多前書十五章38-39節確認各類的分野；40節更分天上形體與地上形體。所謂「聖經進化論」（Biblical evolution）是個語意上的矛盾詞，正統的釋經方法根本不能容納進化的觀念（註6）。</p>
                </div>
                <div className="border border-blue-100 rounded-lg p-4 bg-blue-50">
                  <h4 className="font-semibold text-blue-800 mb-2">(二)神導進化論在神學上的六大矛盾</h4>
                  <ul className="list-none space-y-2 text-sm text-gray-700">
                    {[
                      '(1)全能不一致：全能的上帝不需要用進化這麼複雜、低效率的方法創造。',
                      '(2)性格不一致：人是上帝創造的目標，祂不會等待億萬年才造人。',
                      '(3)無所不知不一致：進化充滿了滅種和死巷，這不合一位全知上帝的行事方式。',
                      '(4)愛的本性不一致：化石世界充滿殘暴和弱肉強食，這不符合愛的上帝的性情。',
                      '(5)有目的心意不一致：恐龍稱霸三億年然後滅絕，這在上帝的創造計劃中毫無意義。',
                      '(6)恩典不一致：進化靠競爭和淘汰，基督教靠恩典和愛，二者根本對立（註7）。',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0 mt-1.5"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* 八、漸進創造論 */}
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">八、漸進創造論（Progressive Creation）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">部份福音派信徒為避免與世俗科學正面衝突，接受地質時代的基本架構，認為在進化的關鍵節點上，上帝偶爾親手介入（例如始馬→中新馬→近新馬→現代馬的演化序列中，由上帝在關鍵點插手）。然而，這個學說從聖經或神學的角度看，並不比神導進化論高明。神導進化論的上帝還算是全程監督；漸進創造論的上帝卻暗示祂一開始就未曾周密籌劃，需要在中途反覆修改，更不合上帝全知全能的性情。</p>
              <p className="text-gray-700 leading-relaxed mb-3">這個學說的動機，很可能是讓基督徒學術界能說相信「創造」，既可安撫教會的董事和校友，又不引起非基督徒進化論同僚的反對——一種兩邊討好但兩邊都不忠實的妥協（註7）。</p>
            </div>

            {/* 九、一日千年說 */}
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">九、一日千年說（The Day-age Theory）</h3>
              <div className="space-y-4">
                <div className="border border-blue-100 rounded-lg p-4 bg-blue-50">
                  <h4 className="font-semibold text-blue-800 mb-2">(一)「一日」和「多日」的正確含義</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">希伯來文「Yom」（日）在欽定本聖經中譯作「時間」65次、「一日」約1200次。複數「Yamin」出現700次，無一例外均指實際的日子。創世記一章五節清楚定義「Yom」為光和暗循環一次有光的那一段時間；「有晚上有早晨」的限定語更排除了它是「時代」的可能性。出埃及記二十章8-11節的第四誡明確說明，人一週工作六日，因為上帝也在六日內創造，再次確認兩者長短相同。彼得後書三章8節「主看一日如千年」，其上下文是講末日預言（不信者嘲笑主再來的遲延），根本不是在討論創造的時間（註8、9、10）。</p>
                </div>
                <div className="border border-blue-100 rounded-lg p-4 bg-blue-50">
                  <h4 className="font-semibold text-blue-800 mb-2">(二)創世記與地質年代間的矛盾（至少25個）</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs border-collapse mt-2">
                      <thead>
                        <tr className="bg-blue-100">
                          <th className="border border-blue-200 px-2 py-1 text-left text-blue-800">聖經記載</th>
                          <th className="border border-blue-200 px-2 py-1 text-left text-blue-800">古今一致論（進化論）</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ['起初上帝創造物質', '物質自太初便存在'],
                          ['地球先太陽星辰', '太陽星辰先於地球'],
                          ['海洋先陸地', '陸地先海洋'],
                          ['光先於太陽', '太陽為第一光體'],
                          ['二水間是空氣', '水空二際毗鄰'],
                          ['果株先於魚', '魚先於果株'],
                          ['飛禽先於昆蟲', '昆蟲先於飛禽'],
                          ['陸上蔬果先於太陽', '太陽先於陸上植物'],
                          ['飛禽先於爬蟲', '爬蟲先於飛禽'],
                          ['男先於女', '女人先於男人'],
                          ['人類先於雨', '雨先於人類'],
                          ['創造早已完成', '「創造」依然繼續'],
                          ['人類乃爭競與死亡之因', '爭競與死亡早在人類之前'],
                        ].map(([bible, evolution], i) => (
                          <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                            <td className="border border-blue-200 px-2 py-1 text-gray-700">{bible}</td>
                            <td className="border border-blue-200 px-2 py-1 text-gray-500">{evolution}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-500 text-xs mt-2 italic">以上為部份主要矛盾，聖經與地質時代的矛盾至少有25個之多。</p>
                </div>
                <div className="border border-blue-100 rounded-lg p-4 bg-blue-50">
                  <h4 className="font-semibold text-blue-800 mb-2">(三)地質年代與進化論實為異名同體</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">地質年代體系的名稱（古生代、中生代、始新世等）皆根據岩層中的化石而定，按進化論的先後順序及各進化時期應存在的生物來解釋地層並判定其年代。因此，進化論是詮釋化石記錄的基礎，而化石記錄便是判定地質年代的根據——這是一個典型的「循環推論」（circular reasoning）。基督徒若接受地質時代的架構，事實上就是接受了整套進化論（最嚴重之處：與上帝性情相悖）（註8）。</p>
                </div>
                <div className="border border-blue-100 rounded-lg p-4 bg-blue-50">
                  <h4 className="font-semibold text-blue-800 mb-2">(四)「一日千年」說的修正派</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">有些釋經家提出兩種修正：一是「獨立的六日」——創造六日之間隔着很長的地質時距；另一是「啟示日說」——六日乃是上帝向人啟示的六天，而非創造的六天（「啟示日說」，註10）。對後者，出埃及記二十章十一節已明確反駁：「六日之內，耶和華造天、地、海和其中的萬物，第七日便安息。」（若那六天只是向一個身份不明的對象說上一分鐘的啟示，那麼上帝在第七天又何需休息？）結論是：任何形式的「一日千年」說，不論從聖經、科學或神學的角度來看，都是難以接受的。</p>
                </div>
              </div>
            </div>

            {/* 十、時溝說 */}
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">十、時溝說（The Gap Theory）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">既然地質年代不能出現於創造週之後（因創世記已包括各種生命的創造），也不能出現於創造週之中（一日千年說已被否定），那麼它只能在創造週之前——這就是眾所周知的「時溝說」，把地質年代置於創世記一章第一節與第二節之間所假設的時溝中（註11）。時溝說認為：創世記一章一節描述了完美的原始創造；二節則描述一次巨大的天災毀掉了這個世界（地球損毀空無一物），然後上帝在六個界說分明的日子裏「重新創造」或「重製」地球。連接詞「Waw」可譯「但是」，動詞「Hayetha」可譯「變成」而非「是」，「空虛混沌」（Tohu va bohu）又可譯為「損毀而空無一物」。</p>
              <div className="space-y-3">
                {[
                  {
                    title: '(一)在犯罪之前已有死亡',
                    content: '時溝說的最嚴重問題是：地質年代的五十億年包含了有機進化的三千萬年，其中夾雜着普遍的痛苦、掙扎和死亡。時溝說把這些死亡放在亞當犯罪之前、甚至撒旦犯罪之前，使痛苦和死亡不再是人類叛逆的刑罰，而是上帝創造及統治的一環——這是何等糊塗的神學！',
                  },
                  {
                    title: '(二)撒旦的墮落在地質年代之後',
                    content: '時溝說常用賽亞書十四章12-15節及以西結書二十八章11-17節說明，那大天災是撒旦背叛墮落的結果。然而，撒旦之犯罪與墮落是在天上「上帝的聖山上」，非在地球上。創世記一章三十一節說：「上帝看着一切所造的都甚好」，天上的萬物也都是好的！因此，撒旦之犯罪必然在人被造以後。即使退一步承認撒旦犯罪確在亞當以前並引發了地球大天災，仍無法解釋為何在這大天災之前已有地質年代，而且其中含有進化程序的化石。',
                  },
                  {
                    title: '(三)「時溝說」在科學上的困難',
                    content: '亞當前的大天災被認為使地球完全荒蕪、了無生跡、完全在黑暗之中、在水面之下。然而，岩層中的化石顯示無數動植物曾遍生於「以前的世界」。從一個滿含生命和動力的世界，突然轉變為極度空虛荒蕪、深埋於水和黑暗之下，必須驚天動地的大天災才能導致。問題是：亞當前的大天災只是一種假設，正統地質學並不接受這個說法，也沒有地質學家因此接受時溝說。地質層只能用「全球大天災」和「古今一致說」二者之一來解釋，不能二者都對。',
                  },
                  {
                    title: '(四)「時溝說」在聖經上的困難',
                    content: '創世記二章一至三節的總結敘文涵括全宇宙的「天地萬物……上帝歇了一切創造之工」，包括第一節所說的「天地」。出埃及記二十章十一節更明確：「六日之內，耶和華造（或製作）天、地、海和其中的萬物。」這與時溝說的「重製」或「重創」之說根本矛盾。另外，創世記一章三十一節上帝說「都甚好」，但若亞當和夏娃腳下的地層已滿含那些億萬年來苦難和死亡所形成的化石遺骸，這個「甚好」顯得荒謬可笑。',
                  },
                  {
                    title: '(五)對支持「時溝說」經文之批判',
                    content: '支持時溝說的常用經文包括：創世記一章二十八節「遍滿地面」（Male=充滿，非「再次充滿」）；耶利米書四章二十三節（上下文是關於以色列國土審判的預言，非地球過去歷史）；以賽亞書二十四章一節（同樣是以色列國土的審判預言）；以賽亞書四十五章十八節「並非使地荒涼，乃是要給人居住」（Tohu在此意「漫無目的」，在創1:2意「混沌」，前後語境不同，並無矛盾）。這些經文實際上都不能支持時溝說的基礎。',
                  },
                  {
                    title: '(六)創世記前時溝說（The Pre-Genesis Gap Theory）',
                    content: '以前在達拉斯神學院執教的Unger博士曾提出一修正的「時溝說」（註12），把天使的犯罪和亞當前的大天災置於創世記一章一節之前，即「起初，上帝創造天地」是指第二次的創造，在地質年代之後。Unger氏坦誠承認這理論是為了配合地質年代而想出來的，並無聖經根據。然而，它所接受的地質年代是基於進化論的古今一致論，而後者是Unger氏所不接受的——這學說的內在矛盾已足以令人將它擱置。',
                  },
                ].map((item, i) => (
                  <div key={i} className="border border-blue-100 rounded-lg p-4 bg-blue-50">
                    <h4 className="font-semibold text-blue-800 mb-2 text-sm">{item.title}</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 十一、文體說 */}
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">十一、文體說（The Framework Hypothesis）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">地質年代既不能置諸六日之前（時溝說），也不能置諸六日之中（一日千年說），更不能置諸六日之後，現在唯一的可能便是創造的六日與地質年代，二者之一根本便不存在。於是福音派中有人把創世記一至十一章視為一種文學上的思想和表達方式，而非史實。「文體說」把創世記一至十一章根本上視為文學上的思想和表達手法，用以闡明屬靈重要主題：「創造」（實存的意義和神聖的源頭）；人類的「墮落」（人類恆感靈性和道德的貧乏）；與「上帝重新和好」（在歷史洪流中不斷追求認識和調整生命的屬靈意義）（註13）。</p>
              <p className="text-gray-700 leading-relaxed mb-3">這種釋經法絕對不是誠信聖經者所能採納的。它刪去了創世記一至十一章，也就破壞了整本聖經的基礎。創世記從第一章至十一章，都是自然地順序發展的，把彌賽亞的家譜從亞當到亞伯拉罕一一列出，十二章也同樣緊接着十一章，把亞伯拉罕早年的史蹟錄出。耶穌基督也屢屢引據創世記前幾章以支持祂最重要的教訓，包括：婚姻教訓（太19:3-6；可10:2-9）；以全地大洪荒比喻末日審判（太24:37-42；路17:26-27）；以撒旦作為說謊之父（約8:44）。聖經的最後兩章（啟示錄二十一、二十二章）描述新天新地的創造，正是與創世記第一、二章首尾呼應。把創世記前十一章從真實歷史中刪除，就是把彼得、保羅和其他所有聖經作者的教訓斥為無知的迷信，把基督無訛的教訓斥為騙人的附會。</p>
            </div>

            {/* 十二、人類家譜之缺環 */}
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">十二、人類家譜之缺環</h3>
              <p className="text-gray-700 leading-relaxed mb-3">創世記五章列出亞當至洪水各代人物生兒子時的年齡，把這些年齡加起來，從亞當到洪水時期共得一千六百五十六年；創世記十一章同樣列出洪水以後的家族，從洪水至亞伯拉罕還進迦南共得三百六十八年。亞伯拉罕的時代是在可考歷史範圍內的。因此，創造的日期按聖經簡單加算，約在亞伯拉罕從哈蘭遷至迦南前兩千零二十四年，大約紀元前四千年（烏雪主教Ussher的計算）。</p>
              <div className="space-y-3">
                {[
                  {
                    title: '(一)傳遞的準確性',
                    content: '創世記五章與十一章中的年代，可能由於傳遞失誤而流於錯誤。上述數字是根據古希伯來版本的聖經，與古希臘七十士版本及撒瑪利亞版本有異。撒版多加了三百零一年；古希臘七十士版多加了一千四百六十六年。這樣算來，人類的創造最多也不過可追溯至紀元前五千五百年，與進化所需的年代相比，實在微不足道。',
                  },
                  {
                    title: '(二)家譜缺環',
                    content: '第二個可能是假定創世記五章與十一章的家譜中有些缺環，某人「生」某某之「生」字只表示宗嗣關係，而非父子關係。路加福音三章的家譜就有一個缺環（插入了該南之名）。另一缺環隱含在法勒的時代中（創10:25；11:18），因希伯與法勒之間，人類壽數顯然劇降，可能是中間漏了很多家族。即使加入最大可能的缺環，亦無法將聖經的人類起源年代與標準進化論的一百萬年人類史拉上關係——從亞當到亞伯拉罕僅列二十個族長，若要插入一百萬年，每父子代距平均就得五萬年，這顯然很荒謬。',
                  },
                  {
                    title: '(三)年代鑒定上之修正',
                    content: '考古學用來鑒定史前人類居處年代的方法，是極不可靠的。其鑒定過程涉及許多無法證明的假設（如放射性碳法）及主觀的評價（如陶器定年代法），這些或多或少都是以進化論是真為前題。既然沒有實在的證據證明相反的理論，我們有足夠的理由說，創世及洪水的日期不出數千年之外。',
                  },
                ].map((item, i) => (
                  <div key={i} className="border border-blue-100 rounded-lg p-4 bg-blue-50">
                    <h4 className="font-semibold text-blue-800 mb-2 text-sm">{item.title}</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 十三、局部地區洪水說 */}
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">十三、局部地區洪水說</h3>
              <p className="text-gray-700 leading-relaxed mb-3">要真正了解地球歷史，創世記六至九章所載的大洪水是極其重要的。前面已說過，正確的解經不能容許在創造六日之內或之前擺上一個地質年代，也不可能把六日的創造釋成非史實的傳說或寓言。唯一的選擇便是全盤否定地質年代的標準體系。正統地質學家不消說便會反對，然而，如果聖經是上帝的話，又如果耶穌基督是那位不能訕謗、無所不知的創造者，我們便必須堅信這世界和其中萬物都是在六日內造成的，進化史裏漫長的地質年代在實際上並不曾發生過（註14）。</p>
              <p className="text-gray-700 leading-relaxed mb-3">由於正統地質學家極力排斥全球性洪水的說法，許多福音派信徒便堅持把洪水記載解讀為局部地區性的。然而，洪水和全球創造是同一問題的兩面：全球性的洪水會破壞地質年代的全部理論，因此局部洪水說往往與「一日千年說」或「時溝說」一同出現。</p>
              <div className="space-y-3">
                {[
                  {
                    title: '(一)洪水的高度與久暫',
                    content: '聖經上說，洪水淹蓋了最高的山嶺（創7:19-20），水勢一直汎濫十個月之久（8:5）。若那時的山高一如今日，局部地區性洪水說便此假設，則洪水之高度最少為一萬七千尺（方舟所擱淺的亞拉臘山是這樣高），淹沒時間最少有九個月之久。若這種淹勢只是「局部地區性」的洪水，從水力學來說，簡直不可能，因為必須假設有過一股高達三哩的卵形洪水柱留在那局部地區。',
                  },
                  {
                    title: '(二)方舟的需要',
                    content: '挪亞所以需要建一座巨無霸大船者，為的是「可以留種，活在地上」（創7:3）。若那只是一個地區性的洪水，實無此需要。方舟之容量最少相等於五百二十二個標準火車車廂，其大小足以容納自古以來生存在陸地上的動物每種一對，而且還綽綽有餘。若那只是局部地區的泛濫，花上一百二十年來預備一只足容全世界各種動物的方舟，實乃愚蠢之舉。',
                  },
                  {
                    title: '(三)地的毀滅',
                    content: '聖經中描述洪水史無前例的洶湧實況使得「迷你」洪水說成為不可能。四十日的滂沱大雨、天「窗」（即「洪闇」）和「大淵的泉源」同時裂開（創7:11）、洪水前的乾旱（創2:5）、洪水後彩虹的設立（創9:13）及眾水「翻地」的情景（約伯記12:15），在在說明唯有空前絕後的全球大災荒才能如此。上帝也說，祂要「毀滅大地」（創6:13）。',
                  },
                  {
                    title: '(四)上帝的應許不變',
                    content: '若洪水真是地區性的，則上帝不再降洪水毀滅大地的明確應許（創9:11）便多次落了空——世界其他地方仍有洪水發生。地區性洪水說不但棄絕聖經對洪水記載的平易含義，甚至是在控告上帝食言！',
                  },
                  {
                    title: '(五)基督及其使徒們的引證',
                    content: '主耶穌基督自己（路加福音17:27）、彼得（彼後2:5；3:6）與保羅（希伯來書11:7）都不約而同地見證了那次洪水最低限度毀滅了全人類。基督說：「挪亞的日子……洪水就來，把他們全都滅了。」（路17:27）一個殃及全人類的大洪泛當然在地理上也必然是全面性的。充份證明聖經所說的是一次全球性的洪水；讀者若肯以「地區性洪水」的觀點逐句逐節地細讀創世記六至九章，他很快就會發現他必須把聖經中很平易的啟示內容加以扭曲變質才行。',
                  },
                ].map((item, i) => (
                  <div key={i} className="border border-blue-100 rounded-lg p-4 bg-blue-50">
                    <h4 className="font-semibold text-blue-800 mb-2 text-sm">{item.title}</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 十四、靜態洪水說 */}
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">十四、靜態洪水說</h3>
              <p className="text-gray-700 leading-relaxed mb-3">在過去一百年中，有好幾位有名的地質學家（如前世紀的Charles Lyell氏；當今的Kulp氏（註15）、Young氏及其他多位）曾公開表示，他們相信「全球性靜態天災」說。他們至少還承認聖經對挪亞那次全球性大洪水所載令人不得不信的見證；然而，他們卻忽視事實地假想這洪水可能只是溫和靜弱的，在地質學上起不了作用，不曾留下痕跡。</p>
              <p className="text-gray-700 leading-relaxed mb-3">即使根據「古今一致」學者們的假設，今日較小的地區性洪泛亦常會引致驚人的破壞，留下大溝谷、厚沉積層等痕跡。像聖經所描述那麼大一個全球性的大洪泛（Kataklismos）——水如巨柱從天而降，大淵的泉源都迸裂，普遍的破壞，洶湧的浪濤，夾雜着颶風，使山巒隆起和凹地深陷，以及其他種種非靜態的現象——必然形成了許多地質上的痕跡，即使很多次地區性泛濫的積累，亦遠莫能及。若我們認為一些和緩、規律性的自然力量留下了那些永恆的印記——龐大的沉積層和遍佈世界、歷盡各年代的化石塚——卻認為那史無前例的、威力極大的洪水震勢竟沒有留下任何痕跡，這實在替地質學說立下了一個空前絕後不可思議的大謎。所謂「靜態洪水」，不論從水力學或地球物理學而論，都是荒謬的。</p>
            </div>

            {/* 十五、結論 */}
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-3 border-b border-blue-100 pb-2">十五、結論</h3>
              <p className="text-gray-700 leading-relaxed mb-3">看來似乎無法避免這樣的一個結論：如果聖經和基督教教義是真的，則地質年代必須被全盤否定。諸如「一日千年說」、「時溝說」或其它學說均不可能與創世記相符相融。因此，聖經上所明確記載的全球性大洪水，必須被接納為造成地殼中含化石的沉積層之主要原因，此乃認識地球歷史的正確方法。</p>
              <p className="text-gray-700 leading-relaxed mb-3">要把這極其複雜的地殼結構和正確的聖經史綱間的關係完整詳盡地尋出來，需要很多確信聖經的科學家們大量的研究和探求。這項研究以當今世界對篤信聖經的基督徒與日俱增的壓力看來，無疑是迫切之務。</p>
              <p className="text-gray-700 leading-relaxed mb-3">勢力龐大的無神運動是這套無所不包、威力很大的古今一致進化學說的產物。要推翻它，只能由毀滅其根據地着手。這需要重新確立一個根據聖經和科學的特殊創造論，以之為各門知識與行業的真正基礎。因此，這必須成為各教會學校、教會和凡百機構的工作重點。切盼本書能為鞏固並推動這運動提供所需資料。</p>
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
            <ul className="space-y-2">
              {[
                '創世記具有真實歷史性：新約各書卷及耶穌本人都接受創世記前幾章為正確的歷史；族長制原作理論（各族長分別為創世記不同段落的原始作者，摩西為編者）也與古代近東的書寫傳統吻合。',
                '六日創造的三大原則：㈠有目的有先後（非嘗試錯誤）；㈡被造之物外觀已有年齡（成熟創造，非漸進老化）；㈢起初世界與現今大不同（水氣層、無死亡、不同地理）。',
                '熱力兩定律的聖經基礎：上帝「休息」對應第一定律（能量守恆），人的墮落帶來咒詛對應第二定律（熵恆增），大洪水完成了地球表面結構的改變。',
                '妥協學說的系統性失敗：神導進化論、漸進創造論、一日千年說、時溝說、文體說——每一種都無法同時在科學上和神學上站得住腳，最終都破壞了上帝的性情、聖經的可信度或人類罪與死亡的教義。',
                '大洪水是唯一出路：地質年代體系是循環推論的產物。要真實解釋地殼中的沉積岩層和化石，全球性的挪亞大洪水才是符合聖經和科學的唯一合理解釋；地質年代體系在科學上實無存在的必要。',
                '行動呼召：建立根據聖經和科學的創造論，是推翻進化論這套無神宇宙觀的唯一途徑，應成為教會、學校和各機構的工作重點。',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-gray-700">{point}</p>
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
              <h4 className="font-semibold text-gray-800 mb-2">熱力學兩定律與神學的深度關聯</h4>
              <p className="text-gray-700 leading-relaxed text-sm">第一定律（能量守恆）和第二定律（熵恆增）是現代科學最重要的兩條物理定律，分別在十九世紀被確立。然而，這章向我們展示，聖經在數千年前已以另一種語言描述了這兩個現實：上帝的「完工安息」呼應第一定律（宇宙維持現有能量總量不增不減）；人的墮落和上帝的咒詛呼應第二定律（萬物趨向無序、腐朽和死亡）。這不是表面的文字對應，而是宇宙物理現實和靈性現實之間深層的結構性關係。進化論者試圖用第二定律解釋為宇宙達到更複雜秩序之前的必要步驟，但熵增原理在封閉系統中必然走向更大的無序，這與進化論所要求的自發性增加組織複雜度根本矛盾。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">時溝說的歷史與神學影響</h4>
              <p className="text-gray-700 leading-relaxed text-sm">時溝說（Gap Theory）最早由蘇格蘭聖經學者Thomas Chalmers在1814年提出，試圖為十九世紀初新興地質學的深時間觀留出空間。這個學說在二十世紀初透過Scofield參考聖經廣泛傳播，至今在保守派基督徒中仍有影響。然而，這章的分析揭示了時溝說的根本缺陷：它把大量的痛苦和死亡置於人類犯罪以前（甚至撒旦犯罪以前），這完全破壞了羅馬書五章12節「死是因為罪」的核心救贖神學。若死亡不是罪的後果，耶穌的死也就無法成為贖罪的解決。因此，接受時溝說的神學代價，遠比其支持者所意識到的嚴重得多。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">大洪水地質學的科學研究前景</h4>
              <p className="text-gray-700 leading-relaxed text-sm">本章的結論為地質科學開拓了一個重要的研究方向：以全球性挪亞大洪水作為解釋地殼沉積岩層和化石分佈的主要框架，即所謂「洪水地質學」（Flood Geology）。這個領域在二十世紀中期由John C. Whitcomb和Henry Morris在《創世紀大洪水》（The Genesis Flood, 1961）一書中系統奠立。現代創造研究所（ICR）及答案在創世記（Answers in Genesis）等機構持續發展這個研究框架，探討沉積地層的快速形成、浮移林（floating forests）解釋煤層、深海基底岩漿流的貢獻等。這不是簡單排斥科學，而是在不同的歷史前提下重新詮釋相同的地質資料。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">創世記作者權問題：族長制原作理論</h4>
              <p className="text-gray-700 leading-relaxed text-sm">P.J. Wiseman在《巴比倫關於創世記的新發現》（1946）一書中詳細論證了所謂「族長制原作理論」（Patriarchal Documentary Theory）——創世記的各段落以「某某的後裔記在下面」為尾部標記（colophon），每段均為其開首所提及的族長親自撰寫或委託記錄的文件。摩西的角色是最終的收集、編輯和整理者。這與古代近東的泥板書寫傳統高度吻合：泥板文件末尾通常刻上所有者或作者的名字，作為版權標記。這個理論既解答了「摩西如何知道洪水前的事」，也解釋了為何創世記的各段落具有明顯不同的語氣和視角——因為它們本來就是來自不同時代、不同族長之手的原始文件。</p>
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
              '你認為「妥協性學說」（如神導進化論、一日千年說）的主要動機是什麼？面對學術界或主流文化的壓力，你自己會怎樣處理信仰與科學之間看似的衝突？',
              '本章指出，接受地質年代等於實際上接受整套進化論（循環論證）。這個分析對你有什麼啟發？你在其他議題上有沒有見過類似的「隱性前提」問題？',
              '「被造之物看來已有年齡」這個原則（成熟創造），對你理解上帝的創造方式有什麼意義？這與上帝的誠實和可信性之間是否有任何張力？',
              '本章多次強調死亡和腐朽是人類犯罪的後果，若在人類犯罪以前就已有死亡，將對基督救贖的神學造成什麼根本性的衝擊？',
              '耶穌在祂的教導中多次直接引用創世記前幾章（婚姻、末日、撒旦、洪水等）。這對你如何看待創世記的歷史性和可信性有什麼影響？',
              '「文體說」把創世記一至十一章視為文學表達而非史實，但保留其「神學意義」。你怎樣評估這個立場的吸引力和危險性？',
              '本章以行動呼召結束——建立以聖經和科學為基礎的創造論是教會的工作重點。你所在的教會或群體如何看待和回應這個呼召？',
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 整理「妥協性學說」的神學代價</h4>
              <p className="text-gray-700 mb-2 text-sm">本章詳細分析了各種妥協性學說的問題。花時間親自整理，加深理解。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>製作一張表格，列出神導進化論、漸進創造論、一日千年說、時溝說、文體說各自的神學問題</li>
                <li>對每個學說，找出它如何影響「死亡是罪的後果」這個核心教義</li>
                <li>與信仰朋友分享你的整理，討論哪個學說曾經或仍然吸引你，以及為什麼</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 追蹤耶穌引用創世記的經文</h4>
              <p className="text-gray-700 mb-2 text-sm">耶穌的教導是創世記歷史性最有力的保證。親自在四福音書中尋找和閱讀耶穌引用創世記的段落。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>太19:3-6（婚姻與創世記二章）；太24:37-42（洪水與末日）</li>
                <li>約8:44（撒旦在伊甸園說謊）；路11:51（亞伯的血）；路17:26-27（挪亞的日子）</li>
                <li>記下耶穌如何談論這些人物——祂把他們視為真實存在的歷史人物，還是寓言中的角色？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 以感恩的心默想創造的三大事件</h4>
              <p className="text-gray-700 mb-2 text-sm">聖經歷史的三大事件——創造、咒詛、洪水——直接關係到你的救贖和上帝對你的心意。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>創造：我是上帝特意設計、有目的、有尊嚴的被造物（不是進化的偶然產物）</li>
                <li>咒詛：死亡和痛苦是罪帶來的，不是上帝原本的設計——祂的原意是好的</li>
                <li>洪水：上帝在歷史中確實審判罪惡，這與祂在基督裏的救贖計劃是同一個上帝的行動</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">⏰ 深讀一個章節的洪水記載</h4>
              <p className="text-gray-700 mb-2 text-sm">本章指出，以「地區性洪水」的觀點逐句細讀創世記六至九章，讀者很快就會發現必須扭曲文意才行。親自做這個實驗。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>慢讀創世記七至八章，每遇一個描述洪水規模的語句就標記出來</li>
                <li>嘗試用「局部洪水」的解釋去閱讀這些語句，記下哪裏感到牽強</li>
                <li>再以「全球洪水」的解釋重讀，感受文本自然流暢的程度</li>
              </ul>
            </div>

            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-green-800 text-sm italic">「看來似乎無法避免這樣的一個結論：如果聖經和基督教教義是真的，則地質年代必須被全盤否定……聖經上所明確記載的全球性大洪水，必須被接納為造成地殼中含化石的沉積層之主要原因。」——亨利·莫瑞士</p>
              <p className="text-green-700 text-sm mt-3">主啊，感謝祢在創世記中誠實地告訴我們宇宙的起源、人的尊貴和罪的嚴重。求祢幫助我不向文化的壓力妥協，有勇氣按着祢話語本身的意思去相信它、持守它。也求祢興起更多願意把聖經的創造史與科學研究結合的工人，使教會在這個世代成為這個真理的見證。奉主耶穌基督的名，阿們。</p>
            </div>
          </div>
        )}
      </div>

      {/* 參考文獻 */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="font-semibold text-gray-700 mb-3 text-sm">第八章 參考文獻（註1-15）</h3>
        <div className="space-y-1 text-xs text-gray-500">
          <p>1. P.J. Wiseman, <em>New Discoveries in Babylonia about Genesis</em> (London: Marshall, Morgan & Scott, 1964).</p>
          <p>2-4. 關於bara / asah / yatsar 三詞的分辨，及從現今觀點看創造與製作之差別。</p>
          <p>5. 前三日的光源顯然並非來自太陽、月亮和星辰（第四日才造），但具有同等劃分晝夜的功能（創1:4, 18）。</p>
          <p>6. Richard Bube, <em>The Encounter Between Science and Christianity</em> (Grand Rapids: Eerdmans, 1968).</p>
          <p>7. Bernard Ramm, <em>The Christian View of Science and Scripture</em> (Grand Rapids: Eerdmans, 1954).</p>
          <p>8. Peter Stoner, <em>Science Speaks</em> (Chicago: Moody Press, 1952); J. Oliver Buswell Jr., "The Length of the Creative Days," <em>Christian Faith and Life</em>, Vol. 41 (Apr. 1935).</p>
          <p>9. 關於前三日光源與第四日光源的一致性說明。</p>
          <p>10. P.J. Wiseman, <em>Creation Revealed in Six Days</em> (London: Marshall, Morgan & Scott, 1949).</p>
          <p>11. L.A. Higley, <em>Science and Truth</em> (New York: Fleming H. Revell, 1940); Arthur C. Custance, <em>Without Form and Void</em> (Brockville: Doorway Publishers, 1970).</p>
          <p>12. <em>Unger's Bible Handbook</em> (Chicago: Moody Press, 1966), pp. 37-39.</p>
          <p>13. N.H. Ridderbos, <em>Is There A Conflict Between Genesis 1 and Natural Science?</em> (Grand Rapids: Eerdmans, 1957).</p>
          <p>14. 局部洪水說的代表著作：Bernard Ramm, <em>The Christian View of Science and Scripture</em>, pp. 229-249.</p>
          <p>15. Dr. J. Laurence Kulp, "Flood Geology," <em>Journal of the American Scientific Affiliation</em>, Vol. 2 (Jan. 1950), pp. 1-15.</p>
        </div>
      </div>

    </div>
  );
}
