import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch48() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第48章</h1>
        <h2 className="text-xl font-semibold text-gray-700">獻上獨生子</h2>
        <p className="text-gray-500 mt-1">你既行了這事，不留下你的兒子，就是你獨生的兒子。　創世記廿二16</p>
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
              亞伯拉罕的信心，從開啟時期（離父家、築祭壇、搭帳棚、不爭地、救侄兒、獻什一），到成熟時期（肉體的拆毀、屬靈的新造），最後進到信心的高峰時期，具體行動是獻上以撒。亞伯拉罕從迦勒底的吾珥出來開始，一直到獻兒子以撒為止，大體完成了神給他的任務，留下美好的信心榜樣。雖然神有很好的計劃、策略，要大大的賜福亞伯拉罕，神應許給他土地、後裔、能建立國度、子孫得著仇敵城門等，但他必須要有順服的行動，才能得著這一切。
            </p>
            <p className="text-gray-700 leading-relaxed">
              亞伯拉罕通過試驗，顯現出他信心的堅定與寶貴。當我們信心還未成熟，神不會如此試驗我們；當我們信心成熟，神會來試驗我們，看我們的生命中是否還存留比神更重要的人、事、物。亞伯拉罕已經學習了許多信心功課，但學無止境。如果我們沒有基本的信心功課，神不會出更難的功課。亞伯拉罕已經到了信心高級班，神就給他比較難的功課——獻上獨生子。整件事包含三個內涵：1.完全順服主話，2.信靠神的能力，3.領受神的應許。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、完全順服主話（創廿二1~10）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                亞伯拉罕如何順服主話？就是主怎麼說，他就完全順服照做。創世記廿二1提到：「這些事以後，神要試驗亞伯拉罕。」這些事，就是亞伯拉罕信心成長過程中，所有出於信心的行動，以及所有失敗與成功的經歷。當他的信心成長到高峰時期，神藉著吩咐他獻上最愛的兒子以撒來試驗他，看看他會讓神居首位，還是讓兒子居首位。在順服主話的過程中，有四件事：1.積極行動，2.照神指示，3.二人同行，4.拿刀要殺。
              </p>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">一、積極行動（創廿二3）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  亞伯拉罕有積極的行動。面對神要他獻以撒，許多人認為亞伯拉罕會難過、憂慮、徹夜難眠，但我們在創世記廿二章看不出這種氛圍。聖經上提到：「亞伯拉罕清早起來，備上驢，帶著兩個僕人和他兒子以撒，也劈好了燔祭的柴，就起身往神所指示他的地方去了。」（創廿二3）要趕三天的路程，需要很好的體力，相信亞伯拉罕有安穩的睡眠，而後很有精神地出發。從聖經的描述，看見亞伯拉罕是一個積極行動的人，他一切都準備好，該上路就上路，應該三天到達的路程，絕不會花五天、十天才到；他馬上去做，有效率地做，而不是最後才做，不會拖延與不甘願。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">二、照神指示（創廿二2~4）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  這段經文裡面，分別出現「我所要指示你的山上」、「神所指示他的地方」、「神所指示的地方」（創廿二2，3，9），總共有三次相似的表達，表示這個地方有重要的意義。神要試驗亞伯拉罕，原可以叫他直接在住處附近獻祭，但神卻特別指示要他去一個三天旅程之外的地方，因為那是一個重要的地方。耶路撒冷地區，在亞伯拉罕的時代，是摩利亞人居住之處，稱為摩利亞地。摩利亞地的山上，與後來聖殿所在的聖殿山，以及耶穌被釘十字架的各各他山，都在同一個區域。預表將來有一天，耶穌基督要在那地被獻上為祭。獻以撒事件，表面看來，是神在試驗亞伯拉罕，更深層的含意是，神向我們啟示，他自己的兒子將來要被獻為祭。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">三、二人同行（創廿二6~8）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  獻祭的路上，亞伯拉罕跟以撒二人同行。以撒從小就看著父親四處築壇獻祭，他知道獻祭一定要有羊羔，所以問父親：「燔祭的羊羔在哪裡呢？」（創廿二7）亞伯拉罕回答說：「我兒，神必自己預備作燔祭的羊羔。」（創廿二8）以撒順服父親的話，沒再多問，相信神會預備，並與父親二人同行。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  耶穌上十字架前，在最後的晚餐結束後，對門徒說：「時候已到，你們要分散，各歸自己的地方去，留下我獨自一人，其實我不是獨自一人，因為有父與我同在。」（約十六32）雖然門徒四散，耶穌看起來像獨自一人，但耶穌說，父與我同在，代表耶穌與天父二人同行。以撒被獻，正預表耶穌上十架。以撒與父親亞伯拉罕二人同行，走向摩利亞地的山上準備被獻為祭，如同耶穌與天父二人同行，走向各各他山被獻為祭。
                </p>
              </div>

              <div>
                <span className="font-semibold text-indigo-700">四、拿刀要殺（創廿二9~10）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  亞伯拉罕真的拿刀要殺死自己的兒子時，他最能體會神的心。神知道他的兒子耶穌基督被釘十字架之後會復活，但過程中所經歷的死亡與分離是真實的。當耶穌在十字架上，神離棄他，雙方都很痛苦。亞伯拉罕親手拿刀，準備殺死以撒，若當時真的下手，他也必定極其痛苦。有信心的積極行動，不等於不會有痛苦。使徒行傳七59~60提到，司提反大有信心的為主殉道：「59他們正用石頭打的時候，司提反呼籲主說：求主耶穌接收我的靈魂！60又跪下大聲喊著說：主啊，不要將這罪歸於他們！說了這話，就睡了。」他被石頭打死時，必也經歷極大痛苦，可是他沒有退縮、懼怕、逃避。殉道一定有痛苦，但我們可以靠著神的恩典走過去。
                </p>

                <div className="flex flex-col items-center my-4">
                  <img
                    src="/images/book29/ch48-abraham-offering-isaac.jpg"
                    alt="圖十五：亞伯拉罕獻以撒，亞伯拉罕舉刀站在祭壇旁，以撒躺臥壇上，一旁有公羊"
                    className="max-w-full h-auto rounded-lg shadow-md border border-gray-200"
                  />
                  <p className="text-sm text-gray-500 mt-2 italic">圖十五：亞伯拉罕獻以撒</p>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  在這裡首先學習到，我們不能有了神所賜的兒子之後，就把神放在一邊。神永遠是最重要的，這個優先次序需要經過試驗，有時候神會要我們割捨一些他給我們的，來試驗我們的信心。其次，還有個屬靈功課，在創世記中沒有說明，但希伯來書十一19解釋得很清楚，就是亞伯拉罕相信他的兒子會復活。這跟下一段「信靠神的能力」有關。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、信靠神的能力（創廿二11~15）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                亞伯拉罕將以撒綑綁在祭壇上，拿起刀正準備殺以撒時，神的使者出聲攔阻他。並預備一隻公羊，讓亞伯拉罕用來獻祭（創廿二13）。這隻羊預表著未來的耶穌基督，神的獨生兒子耶穌基督要親自成為世人的代罪羔羊。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                亞伯拉罕告訴兒子：「神必自己預備」，並順服神要將以撒獻給神，果然後來神有預備。天使讓他看見有一隻公羊，使他用那隻公羊代替他的兒子，獻燔祭給神。亞伯拉罕將那地起名為「耶和華以勒」，意思是耶和華必預備。亞伯拉罕宣告神的屬性，而後經歷神的作為，這就是信靠神的能力。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                亞伯拉罕順服神去獻以撒，原因之一是他相信以撒會復活，正如希伯來書十一17-19所提的：「17亞伯拉罕因著信，被試驗的時候，就把以撒獻上；這便是那歡喜領受應許的，將自己獨生的兒子獻上。18論到這兒子，曾有話說：從以撒生的才要稱為你的後裔。19他以為神還能叫人從死裡復活；他也彷彿從死中得回他的兒子來。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這裡的「以為」，令人有不踏實的感覺，但從聖經上下文，我們看到亞伯拉罕的確信，因此若翻譯成「認為」會比較能夠完整表達文意。亞伯拉罕認為神能叫人從死裡復活，所以就順服神的旨意，獻上自己的獨生子（傅立德，《守約的上帝——舊約中的福音》，頁155）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                亞伯拉罕所說的「神必預備」有兩種可能，一種是神預備了獻祭的羊；另一種可能是，這祭物真的是以撒。亞伯拉罕知道，如果真的是以撒也沒有問題，因為神會讓以撒從死裡復活。神曾說要從以撒產生眾多的後裔，那麼神取走了，就還會重新給回來。亞伯拉罕認識神的屬性，他知道神是信實的，是信守承諾的，他做事不會自相矛盾，因此亞伯拉罕肯定地回答以撒：「神必自己預備。」擁有這樣的信心乃是屬靈的高峰。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                約伯也經歷了神的信實與復活的大能，當時因著撒旦的攻擊（伯一6~12），一日之內約伯的七兒三女全都死了，但神加倍賜福，重新給他七兒三女（伯四二12~13），而已死的兒女也在天上活著，所以是加倍的。
              </p>
              <p className="text-gray-700 leading-relaxed">
                一個人能夠面對死亡，只有一個秘訣，就是相信、確信、真知道有復活，這是基督徒信仰的焦點，因此復活節比聖誕節重要，有耶穌的復活，才有基督的信仰。因為對復活有信心，亞伯拉罕通過考驗，並使他的信心更加堅固和提升。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、領受神的應許（創廿二16~18）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                神看見了亞伯拉罕的信心與忠心，通過這試驗之後，神給他應許：「16……你既行了這事，不留下你獨生的兒子，……17論福，我必賜大福給你；論子孫，我必叫你的子孫多起來，如同天上的星，海邊的沙，你子孫必得著仇敵的城門，18並且地上萬國都必因你的後裔得福。……」（創廿二16~18）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                因著亞伯拉罕願意將自己的獨生兒子獻給上帝，上帝要更大使用他的後代子孫，去得著仇敵的城門。仇敵的城門，就是仇敵所掌控的範圍；得著仇敵的城門，就是去將被仇敵所擄掠的人和地土拯救、釋放出來。原本迦南地是偶像崇拜的地方，但神要用亞伯拉罕的子孫去得著迦南地。這是個艱鉅的任務，那地有七大族，每一族都非常兇惡。神給亞伯拉罕的策略就是先建立祭壇，得著神的同在，而後他的後裔將會來得著這地。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神給亞伯拉罕的應許包含三部分，首先是個人，他得到神的祝福；其次是子孫，有眾多的子孫，並且能得勝仇敵；最後是萬國，不是有血緣的後裔才得福，沒有血緣的萬國萬民都要因他的後裔得福。一個真正認識神的人，會從他信心的行動表現出來；亞伯拉罕聽從神的話，神就在個人、家庭、家族、國家等層面賜福給他，並使他成為祝福萬國的器皿與管道。當我們效法亞伯拉罕，學習信心的功課，我們就會成為很多人的祝福。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                歷史上有許多宣教士也像亞伯拉罕，離開家鄉，去到神指示他們去的地方。例如戴德生宣教士，他被神呼召，離開英國，到神應許要給他的迦南地——中國，如今他在中國的屬靈後裔跟亞伯拉罕的後裔一樣，如同海邊的沙、天上的星那樣多。戴德生宣教士的生命，有許多鮮為人知的細節，他在中國生的孩子有好幾個都夭折，因當時中國衛生條件不好，可能導致孩子水土不服；如果這些孩子在英國出生，應可以順利長大。即便如此，他還是堅持待在中國，願意付這樣的代價，就像亞伯拉罕獻以撒一樣。目前開始有更多華人宣教士從台灣、香港、中國大陸被差派前往回教、印度教、佛教地區，也類似戴德生，從零開始，將來很有可能產生許多屬靈後裔。你如何看待自己的生命，無論是在本地或外地，只要你願意付代價，就能被神使用，影響很多人。
              </p>
              <p className="text-gray-700 leading-relaxed">
                加拉太書三16提到：「所應許的原是向亞伯拉罕和他子孫說的。神並不是說眾子孫，指著許多人，乃是說你那一個子孫，指著一個人，就是基督。」保羅在這裡指出，創世記廿二18所說的後裔乃是耶穌基督。後裔是集合名詞，型態是單數，有雙重含意，可以是很多人，也可以是一個人。神給亞伯拉罕很多後裔是個事實，但神特別要用亞伯拉罕後裔當中的一個人——耶穌基督。因此創世記廿二18更清楚的意思乃是說：「萬國都必因你的後裔耶穌基督得福。」在摩利亞地獻以撒，預表耶穌基督釘十架，並使萬國萬民得福。當我們與亞伯拉罕一樣蒙神賜福，也會有很多後裔，可能神會使用其中一部分後裔，更加使別人蒙福。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                在亞伯拉罕的父親那一代之前，人們不認識神，對神沒有信心，所以神沒有甚麼特別的啟示。亞伯拉罕以信心回應神的呼召，開啟了封閉已久的屬靈泉源，使神的恩典能不斷地注入他的家。亞伯拉罕從離開本族到獻上獨生子，一方面顯明他信心的成長，使他更多蒙福；另一方面也預表了神施恩的行動——神先把地上的豐富給人，而後也把天上的豐富給人。神藉著差遣他的獨生子耶穌基督來到世上成為贖罪祭，開啟天上豐富的門，使凡接受基督為救主的人，也能成為奉獻的人，從奉獻財物到奉獻全人，使自己與別人蒙福。
              </p>
              <p className="text-gray-700 leading-relaxed">
                神也給我們每個人信心的功課，從還不是很有信心，到築祭壇、搭帳棚、能爭戰、願奉獻，並且與神同行、作代禱者，最後願意把兒女獻給神，這些都是信心的功課，而我們一切所做的，將會成為後代的榜樣與祝福。神給每位基督徒的應許其實一點也不少於亞伯拉罕，神一樣要給我們後裔、地土、建立屬神的國度、得著仇敵的城門、叫我們的名為大，就是名字記在生命冊上。然而這些應許的成就也在於我們是否順服神走這條信心之路，如同耶穌所說要跟從主的就要背起自己的十字架來跟從主（太十六24）。
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
                '獻以撒是亞伯拉罕信心的高峰試驗，包含完全順服主話（積極行動、照神指示、二人同行、拿刀要殺）、信靠神的能力、領受神的應許三大內涵。',
                '獻祭之地摩利亞山與後來的聖殿山、各各他山同在一個區域，預表耶穌基督將來要在那地被獻上為祭；以撒與父親二人同行，預表耶穌與天父同行走向十字架。',
                '神的使者攔阻亞伯拉罕，預備公羊代替以撒，亞伯拉罕將那地起名「耶和華以勒」（意思是耶和華必預備），這預表神親自預備耶穌基督作代罪羔羊。',
                '亞伯拉罕相信神能使以撒從死裡復活（來十一17-19），這是他順服獻以撒的關鍵信心根基，也說明了為何復活的信心是基督信仰的核心焦點。',
                '神給亞伯拉罕的應許包含個人、子孫、萬國三部分；加拉太書三16指出「後裔」單數形式特別指向耶穌基督，萬國要因這位後裔得福。',
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
              '神要亞伯拉罕獻以撒，亞伯拉罕如何完全順服主話？包含哪四個具體的行動？可以如何應用在我們身上？',
              '亞伯拉罕信靠神的能力，包括相信神會預備，還有神能夠使以撒復活。這事跟耶穌、跟你有何關係？分享一下你個人的經歷。',
              '亞伯拉罕通過試驗之後，神給他特別的應許，說到你的子孫必得著仇敵的城門，地上萬國都必因你的後裔得福。這個應許是否已經應驗？正在如何繼續應驗？與我們今天的使命有何關係？',
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
