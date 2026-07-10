import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch43() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第43章</h1>
        <h2 className="text-xl font-semibold text-gray-700">呼召與拯救</h2>
        <p className="text-gray-500 mt-1">耶和華對亞伯蘭說：你要離開本地、本族、父家，往我所要指示你的地去。　創世記十二1</p>
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
              本章的經文可分為兩段，第一段創世記十二1-9是講亞伯蘭進迦南的事。第二段創世記十二10-20是講亞伯蘭進埃及的事。兩件事一前一後，恰好形成強烈的對比。進迦南是神所給的神聖呼召，進埃及是人自己的天然反應。進迦南以築壇獻祭敬拜神為首要行動，進埃及卻以欺騙說謊懼怕人為優先選項。這位信心之父有值得效法的榜樣，也有值得警惕的鑒誡。但神的慈愛包容了亞伯蘭的軟弱，帶領他全家安全豐富地離開埃及。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、呼召亞伯蘭進迦南</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記十二1-4：「1耶和華對亞伯蘭說：你要離開本地、本族、父家，往我所要指示你的地去。我必叫你成為大國。2我必賜福給你，叫你的名為大；你也要叫別人得福。3為你祝福的，我必賜福與他；那咒詛你的，我必咒詛他。地上的萬族都要因你得福。4亞伯蘭就照著耶和華的吩咐去了；羅得也和他同去。亞伯蘭出哈蘭的時候年七十五歲。」
              </p>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">一、兩次呼召</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  本書第卅五章談過，亞伯蘭是他拉屬靈的長子，所以名字被放在他拉兒子名單的最前面，但實際上他拉七十歲乃是生了肉身的長子哈蘭，過了六十年他拉一百三十歲時才生小兒子亞伯蘭，所以他拉二百零五歲去世時，亞伯蘭是七十五歲，那時亞伯蘭再次得到神的呼召，要前往神所指示的地方。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  亞伯蘭並未在父親去世之前提前離開哈蘭，這事在司提反的講道中得到印證：「2司提反說：諸位父兄請聽！當日我們的祖宗亞伯拉罕在米所波大米還未住哈蘭的時候，榮耀的神向他顯現，3對他說：你要離開本地和親族，往我所要指示你的地方去。4他就離開迦勒底人之地，住在哈蘭。他父親死了以後，神使他從那裡搬到你們現在所住之地。」（徒七2-4）這篇講道同時也清楚說出了神最早呼召亞伯蘭，乃是在迦勒底的吾珥，而不是在哈蘭。所以亞伯蘭進迦南之前，神一共給了兩次呼召，一次在吾珥，一次在哈蘭。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  在吾珥的呼召，不僅使亞伯蘭信了耶和華神，很可能也使父親的全家都信了神，因為父親願意與亞伯蘭一起離開吾珥去到哈蘭，而且亞伯蘭的哥哥拿鶴後來也離開吾珥去住在哈蘭。當亞伯拉罕差老僕人去幫兒子娶妻子時，老僕人是去到哈蘭，那裏被稱為拿鶴的城（創廿四10）。拿鶴的兒子彼土利、孫子拉班，講話時都提到耶和華（創廿四50-51）。可見他們這一家族都信耶和華神，也因此亞伯拉罕堅持一定要回本家去為兒子找媳婦，但也交代不可將兒子帶回去他的本家，固然家族都信耶和華神，但因為周遭大環境還是偶像文化，所以很難在那裏發展出屬神的民族。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  在吾珥的呼召，使亞伯蘭能將真神信仰帶給父親的全家，並走去哈蘭。在哈蘭的呼召，使亞伯蘭徹底離開父家，可以有更寬廣的發展。亞伯蘭在他父親死了之後，再次被神呼召要繼續前進到迦南地，所以他就帶著羅得去到迦南地，以迎接全面性的更新。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  兩階段的呼召可能是由於人的軟弱，需要神再次的幫助、提醒，也可能有其客觀的需要性。例如，挪亞在五百歲之前已經得到呼召要造方舟，他生三個兒子後要先花了約二十年時間陪伴兒子成長。在大約五百二十歲時神再次呼召他，使他開始正式建造方舟，並去各地傳道。耶穌也經過兩個階段，十二歲時已經第一次得到呼召，要以神的事為念，但他繼續與家人住在一起，盡到長兄的責任，大約三十歲時才離開家鄉出來傳道。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">二、多重應許</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  神呼召亞伯蘭的時候，同時給他多重的應許，一共有七項：「1.我必叫你成為大國。2.我必賜福給你。3.叫你的名為大。4.你也要叫別人得福。5.為你祝福的，我必賜福與他；6.那咒詛你的，我必咒詛他。7.地上的萬族都要因你得福。」可歸納為三類：
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 mb-2" style={{ fontSize: 'calc(1em - 4px)' }}>
                  <li><strong>本人得福</strong>——創世記十二2-3：「2……我必賜福給你，叫你的名為大；……3為你祝福的，我必賜福與他；那咒詛你的，我必咒詛他。……」</li>
                  <li><strong>後裔得福</strong>——創世記十二2，7：「2我必叫你成為大國。……7耶和華向亞伯蘭顯現，說：我要把這地賜給你的後裔。」</li>
                  <li><strong>萬族得福</strong>——創世記十二2-3：「2……你也要叫別人得福。……地上的萬族都要因你得福。」</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  神至少五次呼召亞伯拉罕，分別記在十二1-7，十三14-17，十五1-21，十七1-22，廿二15-18。每一次都會應許本人得福，後裔得福。第一次與最後一次呼召，另有提到萬族得福或萬國得福（創十二7，創廿二18）。
                </p>
              </div>

              <div>
                <span className="font-semibold text-indigo-700">三、遍地築壇</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  創世記十二7-8：「耶和華向亞伯蘭顯現，說：我要把這地賜給你的後裔。亞伯蘭就在那裡為向他顯現的耶和華築了一座壇。從那裡他又遷到伯特利東邊的山，支搭帳棚；西邊是伯特利，東邊是艾。他在那裡又為耶和華築了一座壇，求告耶和華的名。」創世記十三3-4、十三18也分別記載，亞伯蘭回到伯特利與艾的中間再次求告耶和華的名，並在希伯崙幔利的橡樹那裡築壇。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  祭壇可說是亞伯拉罕一生的主要記號，因為他每到一地，就建立祭壇。神呼召亞伯拉罕來到迦南地，為要在這地藉著他的後裔建立一個屬神的國度。亞伯拉罕的首要策略是建立祭壇，藉著祭壇得著神的同在，使這地能逐漸轉化。祭壇所在將成為屬靈的泉源，為這地帶來長久性的祝福。聖經記載亞伯拉罕在三個地方築壇獻祭求告神：一、在示劍築壇（創十二6~7）；二、在伯特利東邊築壇（創十二8，十三3-4）；三、在希伯崙築壇（創十三18）。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  以上這三處都是在以色列中部地區，是整個迦南地的核心地帶。亞伯拉罕是否還在別處築壇獻祭不太確定，至少聖經代表性地記載了這三處，大體說明他在所到之地築壇獻祭求告神的名。挪亞一下方舟，所做的第一件事就是築壇獻祭，為要得著神的同在。人分地居住以後，偶像祭壇取代了神的祭壇，現在神開始藉亞伯拉罕來恢復屬神聖潔的祭壇。這事還有一個重要性，是預表基督為贖罪祭，使人能回到神的面前。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、拯救亞伯蘭出埃及</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記十二9-10：「9後來亞伯蘭又漸漸遷往南地去。10那地遭遇饑荒。因饑荒甚大，亞伯蘭就下埃及去，要在那裡暫居。」後來亞伯蘭漸漸遷往南地，這是一個走向險境的過程，因為再過去就是埃及了。好不容易離開吾珥，現在卻靠近埃及，吾珥與埃及是當時拜偶像最嚴重的兩個地方。亞伯蘭下埃及，不是出於神的呼召，也不是他自己妥善的計劃，純粹只是因為所在地遭遇饑荒而採取的臨機應變做法，他沒有求問神就去了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這是聖經第一次提到埃及，埃及通常作為肉體世界的代表。後來神對以色列百姓說：「禍哉！那些下埃及求幫助的，是因仗賴馬匹，倚靠甚多的車輛，並倚靠強壯的馬兵，卻不仰望以色列的聖者，也不求問耶和華。」（賽卅一1）如果求問神，應可能有更好的解決方案，一個是神自己降下雨，使饑荒解除；一個是神指示往北走，去到加利利湖那邊；或者神提供指示，讓亞伯蘭提早知道關於下埃及該注意的事。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                但亞伯蘭完全出於本能，採用說謊欺騙的方法：「將近埃及，就對他妻子撒萊說：我知道你是容貌俊美的婦人。12埃及人看見你必說：這是他的妻子，他們就要殺我，卻叫你存活。13求你說，你是我的妹子，使我因你得平安，我的命也因你存活。」（創十二11-13）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                亞伯蘭希望撒萊說，她乃是亞伯蘭的妹妹，這樣做是為了避免埃及人殺他。這似乎是人所能想到的最好的方法，跟大部分人想用說謊解決問題是一樣的。撒萊是他的妹妹，這是事實，但他隱瞞了撒萊是他妻子的另一個事實，而妻子這個身分是更重要的；以前是妹妹，現在已經是妻子了。所以這是避重就輕的一種說謊模式。仔細探討，為了保護生命，採取欺敵策略，並非完全不可。收生婆為了保護男嬰，曾經說謊；妓女喇合為了保護探子，曾經說謊，神都嘉許他們的信心。在倫理學上，可歸為戰爭模式，這跟平時生活與鄰舍的關係不同。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                但我們可以做個比較，收生婆與妓女都是冒著自己生命的危險去保護別人，而亞伯蘭是為了保護自己而置妻子於險境。亞伯蘭的問題是沒有尋求神，以及因害怕埃及人殺他，而做了自私又不週全的安排，卻不知道會引出一個嚴重的後果，就是撒萊被法老娶去。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記十二14-15：「14及至亞伯蘭到了埃及，埃及人看見那婦人極其美貌。15法老的臣宰看見了她，就在法老面前誇獎她。那婦人就被帶進法老的宮去。16法老因這婦人就厚待亞伯蘭，亞伯蘭得了許多牛、羊、駱駝、公驢、母驢、僕婢。」這讓我們聯想到，創世記六2講到神的兒子們看到人的女子美貌，就隨意娶來為妻。我們解釋說，神的兒子們可能是指那時的君王，在這裡，法老娶撒萊就是一個典型的例證。似乎洪水前、洪水後，人繼續犯一樣的罪行，只要有夠大的權勢，就可以強娶美女為妻。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                典型的解經，強調亞伯蘭下埃及且說謊，造成至少四個問題：一、讓撒萊陷入險境，成為法老的妻子；二、給法老帶來災難，因為神為了保護撒萊而降災給法老；三、給姪兒羅得不好的示範，因羅得後來也缺乏誡心地去住到罪惡之城所多瑪；四、為兒子以撒樹立了不好的榜樣，以撒後來也犯同樣的罪。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                死海古卷中有一份寫於兩約之間的《創世記釋義》，它對亞伯蘭這件事有些補充說明，指出亞伯蘭並非如我們想像的那麼不好，他也曾為此事心裡非常懊悔。這古卷以亞伯蘭自述的方式，描寫出他內心的掙扎：「法老想要殺我，……因為撒萊的幫助，我不至於被殺，但那天晚上我痛苦地大哭。」這樣的情節顯出亞伯蘭沒有很不好，但撒萊犧牲自己來救丈夫。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這事情最終的解決是神干預、神出手拯救：「17耶和華因亞伯蘭妻子撒萊的緣故，降大災與法老和他的全家。18法老就召了亞伯蘭來，說：你這向我作的是甚麼事呢？為甚麼沒有告訴我她是你的妻子？為甚麼說她是你的妹子，以致我把她取來要作我的妻子？現在你的妻子在這裡，可以帶她走罷。20於是法老吩咐人將亞伯蘭和他妻子，並他所有的都送走了。」（創十二17-20）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                從律法的角度看這段聖經，是關於亞伯蘭的軟弱失敗，可作為我們的鑒誡。從福音的角度看這段聖經，則能看到神的慈悲憐憫與大能施恩。我們盡力不做錯事，但很多時候自己還是會出問題，最後是神來拯救幫助我們。可以相信，撒萊被娶走之後，亞伯蘭在那裡痛哭認罪，如詩篇五十一17所說：「神所要的祭就是憂傷的靈；神啊，憂傷痛悔的心，你必不輕看。」於是神饒恕亞伯蘭，也出手搭救。我們無法保證自己不犯錯，連信心之父亞伯拉罕都會犯很大的錯，但我們有一位能赦免過犯的神。當我們犯罪時，最上策就是來到神面前認罪禱告。神能赦免我們，並拯救我們脫離困境。
              </p>
              <p className="text-gray-700 leading-relaxed">
                整件事也預表了將來以色列進出埃及，前後兩件事至少有四個相似之處：一、起初都是由於人的罪，亞伯蘭的無知使自己進了埃及，約瑟的哥哥們出於忌妒把約瑟賣為奴隸，使他進了埃及；二、都跟饑荒有關，亞伯蘭因饑荒進了埃及，以色列全家也因饑荒進埃及；三、神都出手干預，神降災，法老才釋放撒萊，讓亞伯蘭全家離開，神降災，法老才釋放以色列人，讓以色列全族離開；四、都得到許多財富，亞伯蘭得了許多牛、羊、駱駝、公驢、母驢、僕婢（創十二16），以色列人出埃及時也得了許多財物（出十二35-36）。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                神呼召、神引領、神饒恕、神拯救屬乎他的人，這是我們在神與亞伯蘭的關係中看到的。亞伯蘭走上信靠神的路以後，仍會有軟弱，他停在哈蘭沒有前進，神再呼召、再給他使命異象，使他能繼續前行。他面對饑荒，不知如何處理，一時倚靠自己的小聰明而惹出大禍。但只要承認自己的過犯，神能赦免、拯救，並且讓整件事轉變為祝福。讓我們也一同來信靠亞伯拉罕的上帝，走神所引領的道路，來經歷他一切的美善！
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
                '亞伯蘭進迦南前經歷兩次呼召，一次在吾珥（使他信主並帶動父親全家），一次在哈蘭（父親死後徹底離開父家），兩階段呼召也見於挪亞、耶穌的蒙召經歷。',
                '神呼召亞伯蘭時給了七項應許，可歸納為本人得福、後裔得福、萬族得福三類；神至少五次向亞伯拉罕重申呼召與應許。',
                '築壇獻祭是亞伯拉罕一生的記號，聖經記載他在示劍、伯特利、希伯崙三處築壇求告耶和華的名，藉此得著神的同在，也預表基督的贖罪祭。',
                '亞伯蘭因迦南饑荒未求問神就下埃及，並教撒萊謊稱妹妹以自保，結果撒萊被法老娶去；神親自降災干預，使撒萊平安歸回，顯明神饒恕拯救的恩典。',
                '亞伯蘭進埃及一事與以色列後來進出埃及有四個相似之處：都因人的罪與饑荒而起，神都出手干預拯救，也都因此得到許多財富，預表了救贖歷史的模式。',
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
              '亞伯蘭經歷神兩階段的呼召，才來到迦南地。這事情包含哪些意義？聖經中其他人，以及你個人，是否也曾經歷兩階段的呼召？',
              '亞伯蘭所到之處，幾乎都會築壇獻祭，這事情有何重要意義？我們今日當如何築壇獻祭？',
              '亞伯蘭因迦南地遭遇飢荒而去到埃及，後來神出手搭救，他與妻子才全身而退。整件事包含了人的哪些問題，及神的哪些恩典？我是否面對什麼問題或困難，可帶到神面前，而不是靠自己的小聰明來解決？',
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
