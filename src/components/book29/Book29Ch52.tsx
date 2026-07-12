import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch52() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第52章</h1>
        <h2 className="text-xl font-semibold text-gray-700">生命的豐盛</h2>
        <p className="text-gray-500 mt-1">神又對雅各說：起來！上伯特利去，住在那裏；要在那裏築一座壇給　神。　創世記卅五1</p>
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
              雅各的人生可以分成兩大段，第一大段是從出生時抓住人到雅博渡口抓住神，從與以掃相爭到與以掃和好，這是上一章的內容。第二大段是回到迦南地以後，首先築壇獻祭求告神，到生命的末了在埃及多次為人祝福。雅各豐盛的生命來自他一生中多重的苦難磨練，雖有人的軟弱、爭奪、聰明、算計與詭詐，但也有神的同在、供應、管教、保守與帶領。雅各的生命預表耶穌基督豐盛的生命，也是基督徒追求豐盛生命的榜樣。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、生命豐盛的過程</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                雅各從回到迦南地定居，直到去到埃及終老，主要有七件事，這七件事都幫助他生命更加豐盛。
              </p>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">一、築壇——神的吩咐（創卅五1-7）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  雅各在示劍築壇，也在伯特利築壇。創世記卅三18-20：「18雅各從巴旦亞蘭回來的時候，平平安安地到了迦南地的示劍城，在城東支搭帳棚，19就用一百塊銀子向示劍的父親、哈抹的子孫買了支帳棚的那塊地，20在那裡築了一座壇，起名叫伊利伊羅伊以色列（就是神、以色列神的意思）。」雅各回到迦南地，首先在示劍城東築壇獻祭，並將那地取名為「伊利伊羅伊以色列」（創卅三18-20）。「伊利伊羅伊以色列אֵל אֱלֹהֵי יִשְׂרָאֵל（El-elohey-Yisrael）」，這個複合字包含了三個אֵל（el，神），可翻譯為：「神，以色列的神」，或「神是以色列的神」，若中間那個אֱלֹהֵי（elohey）譯為全能的，意思就是「以色列全能的神」<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（謝挺，《始於神》，頁8月27日）</span>，這有可能是雅各的意思，因為他親自經歷了神的全能。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  在示劍發生淫亂與報復的事之後，神吩咐雅各離開示劍，去伯特利築壇：「1神對雅各說：起來！上伯特利去，住在那裡；要在那裡築一座壇給神，就是你逃避你哥哥以掃的時候向你顯現的那位。2雅各就對他家中的人並一切與他同在的人說：你們要除掉你們中間的外邦神，也要自潔，更換衣裳。……6於是雅各和一切與他同在的人到了迦南地的路斯，就是伯特利。7他在那裡築了一座壇，就給那地方起名叫伊勒伯特利（就是伯特利之神的意思）；因為他逃避他哥哥的時候，神在那裡向他顯現。」（創卅五1-7）伯特利בֵּית אֵל（Beyth-'El）的意思是神的家，伊勒伯特利אֵל בֵּית אֵל（El-Beyth-El）意思是「神的家之神」。神的家已經是很好的意思，雅各不滿足，再取名為「神的家之神」，強調神自己。如同我們說神的恩賜很好，但賜恩的神是更重要的。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">二、改名——神的顯現（創卅五8-15）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  創世記卅五9-15：「9雅各從巴旦亞蘭回來，神又向他顯現，賜福與他，10且對他說：你的名原是雅各，從今以後不要再叫雅各，要叫以色列。這樣，他就改名叫以色列。11神又對他說：我是全能的神；你要生養眾多，將來有一族和多國的民從你而生，又有君王從你而出。12我所賜給亞伯拉罕和以撒的地，我要賜給你與你的後裔。13神就從那與雅各說話的地方升上去了。14雅各便在那裡立了一根石柱，在柱子上奠酒，澆油。15雅各就給那地方起名叫伯特利。」在雅博渡口與神摔跤後，神已經幫他改名叫以色列（創卅二27-28），這次再重新吩咐一次，以示慎重。以色列這個名字由「神」與「較力」兩個字組成，可以理解為「與神同有能力」<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（威明頓，《威明頓聖經輔讀(卷上)》，頁89）</span>，第一次改名是關乎雅各本身的生命改變，見證神的能力；第二次改名是關乎後裔要有君王來治理這地，也見證神的能力。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">三、親人之死——神的剝奪（創卅五16-29）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  創世記卅五16-19：「16他們從伯特利起行，離以法他還有一段路程，拉結臨產甚是艱難。17正在艱難的時候，收生婆對她說：不要怕，你又要得一個兒子了。18她將近於死，靈魂要走的時候，就給她兒子起名叫便俄尼；他父親卻給他起名叫便雅憫。19拉結死了，葬在以法他的路旁；以法他就是伯利恆。20雅各在她的墳上立了一統碑，就是拉結的墓碑，到今日還在。」伯利恆就是將來耶穌基督出生的地方，便雅憫的意思是右手之子<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（謝挺，《始於神》，頁9月11日）</span>，代表這兒子如同是雅各的右手。同一個地方，馬利亞將來也生出神的右手之子耶穌基督。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  創世記卅五28-29：「28以撒共活了一百八十歲。29以撒年紀老邁，日子滿足，氣絕而死，歸到他列祖（原文作本民）那裡。他兩個兒子以掃、雅各把他埋葬了。」雅各在很短的時間內，接連失去他最愛的妻子拉結與親生父親以撒，必定非常哀痛。這是神的剝奪，讓雅各學習更深倚靠神。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">四、失去愛子——神的磨練（創卅七1-36）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  創世記卅七31-35：「31他們宰了一隻公山羊，把約瑟的那件彩衣染了血，32打發人送到他們的父親那裡，說：我們撿了這個：請認一認是你兒子的外衣不是？33他認得，就說：這是我兒子的外衣。有惡獸把他吃了，約瑟被撕碎了！撕碎了！34雅各便撕裂衣服，腰間圍上麻布，為他兒子悲哀了多日。35他的兒女都起來安慰他，他卻不肯受安慰，說：我必悲哀著下陰間，到我兒子那裡。約瑟的父親就為他哀哭。」雅各差遣約瑟去探望哥哥們，原是對兒子們單純的關愛，沒想到卻因此失去了自己最愛的兒子。這種剝奪與磨練是非常痛苦的，雅各需要去承受，更多以神來滿足自己情感的需要，這也會增加雅各生命的深度。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">五、遣子取糧——人的盡頭（創四二~四四章）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  埃及遭遇饑荒，迦南地也同樣遭遇饑荒。雅各聽說埃及有糧，就差兒子們去買糧。第一次小兒子便雅憫沒有去，第二次在約瑟的要求下，只好讓便雅憫也去。這對雅各是很大的挑戰，因為愛妻拉結所生的只有約瑟與便雅憫兩人，約瑟已經失去了，他很怕再失去便雅憫。但糧食吃完了，不得不再去埃及買糧，只好割捨便雅憫讓他跟哥哥們一起去埃及。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">六、同赴埃及——神的出路（創四五~四六章）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  這是神所預備的出路，讓以色列人能躲避饑荒，在埃及的歌珊地生養眾多，成為大族。雅各帶領全家族前往埃及避難，先有神預備約瑟作埃及宰相，才有這條出路，讓以色列全家在埃及的歌珊地發展，至終成為一個國族。
                </p>
              </div>

              <div>
                <span className="font-semibold text-indigo-700">七、祝福預言——神的權柄（創四七~四九章）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  雅各進埃及，首先被約瑟領去見法老，一見面就為法老祝福，離開法老前又為法老祝福，前後共兩次（創四七7、10），這是神的權柄。雅各臨死之前為約瑟兩個兒子以法蓮、瑪拿西祝福（創四八1-20）。接著也為以色列十二支派祝福（四九1-28），都滿有神的權柄。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、生命豐盛的緣由</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                有幾件事與雅各豐盛生命的形成是比較有關的，再深入一些分享。
              </p>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">一、長子名分——紅湯代價（創廿五1-34）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  我們看這事時不免懷疑，長子的名份怎麼這麼便宜，只要用一碗紅豆湯，就可以換得？希伯來書十二16告訴我們：「以掃貪戀世俗，因一點食物把自己長子的名分賣了。」人就是這樣，因著貪戀世俗，會因一點食物就賣掉自己的名分，甚至賣掉自己的生命。現今世代的人，醉酒、吸毒、一夜情、婚外情等，也都只是為了一時的快樂，而出賣了自己的人生，甚至永生。而猶大只為了三十塊錢，賣了耶穌，失去救恩，這些正如同以掃，以一碗紅豆湯賣掉長子名份。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  雅各的一碗紅豆湯，差不多是一餐飯的量而已。但基督徒不見得很容易付出一餐飯的代價。我們願意只付出一餐飯的代價，來禁食禱告嗎，很多人做不到。願意如此行的，所得的福分是大的。並非那餐飯的代價有多大，神看重的是我們對屬靈福分是否渴慕。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  雅各付代價，換取長子名分，有其合理性。但若雅各願意不計較，單純將紅豆湯給哥哥，神會親自報答他。正如耶穌對門徒所說：「無論何人……，只把一杯涼水給這小子裡的一個喝……，這人不能不得賞賜。」（太十42）耶穌又在山羊和綿羊的比喻中，對門徒說：「我餓了，你們給我吃；渴了，你們給我喝；我作客旅，你們留我住；我赤身露體，你們給我穿；我病了，你們看顧我；我在監裡，你們來看我。」（太廿五31-46）飲食、住宿、衣服，都是我們所擁有的，這些分享並不困難。去監裡探望小弟兄，也不困難，並非陪他留宿在監裡。神看的是我們的心，神紀念我們所做的每一件小事，並要大大回報我們。我們願意不計代價，善待最小的弟兄，主必賜我們屬靈的福份，享受天國的榮耀。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">二、奉獻心志——感恩許願（創廿八20-22）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  亞伯拉罕開始什一奉獻，雅各也有這榜樣，直到摩西時代才明訂律法，提醒以色列人感恩並獻上什一。什一奉獻的本質，是要人懂得感恩，要人知道萬物都是神所造，所擁有的一切都是神所賜，包括身體健康、能力才幹、智慧等，知道自己本來死在過犯罪惡之中，主耶穌基督將我救贖回來。因此我們奉獻，不是將我們自己的東西獻給神，而是將神賜給我的東西歸還給他。我們若正確瞭解什一奉獻的意義，就能謹記神的恩惠，存感恩的心，甘心樂意地獻上十分之一給神。雅各知道自己從神得恩典，所以樂意獻上十分之一。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">三、娶妻代價——愛的付出（創廿九20）</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  雅各愛拉結，他為拉班工作七年，卻看七年如同幾天。耶穌基督也因愛我們而來到世上，用他生命、寶血的重價，買贖我們（林前六20），這是耶穌對我們愛的付出。雅各在母舅拉班那裡服事十四年算是他給的聘禮，耶穌則用他的生命作為贖價，也等同聘禮，如此重價的聘禮，顯示我們的生命極其寶貴。最後晚餐的過程類似猶太人的聘婚禮，那時耶穌對門徒說：「19……這是我的身體，為你們捨的，……20……這杯是用我血所立的新約，是為你們流出來的。」（路廿二19-20）這是聘禮。接著說：「2在我父的家裡有許多住處；若是沒有，我就早已告訴你們了。我去原是為你們預備地方去。我若去為你們預備了地方，就必再來接你們到我那裡去，我在那裡，叫你們也在那裡。」（約十四2-3）這正如猶太丈夫對已許聘的妻子所說的：「我回去預備地方，預備好了會再回來接妳。」
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">四、毘努伊勒——降服於神（創卅二30）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  雅各在雅博渡口與神摔跤，得神祝福後將那地起名為毘努伊勒。雅博יַבֹּק（yabboq）是倒空或虛空的意思<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（謝挺，《始於神》，頁8月19日）</span>，在這裡雅各被神倒空了，而後重新被神充滿。毘努伊勒פְּנוּאֵל（peniel）意思是神的面，紀念雅各與神面對面，不僅存活，還得祝福。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  與雅各摔跤的若是舊約的基督，為何不能立刻打贏雅各？兩人看似不分強弱、旗鼓相當，但實際上那人是刻意保持與雅各有相同的戰鬥力，讓這場摔跤持續整夜，這樣做是為了使雅各學習謙卑，並使他瘸腿，不能再摔跤。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  面對能力、權柄都比自己高的人，我們比較容易謙卑；倘若對方能力與自己不相上下，我們就比較難謙卑。能力相當的夫妻、同工、同事、手足，常是神所預備來促使我們學習謙卑的人。為了調整我們的生命，神常將旗鼓相當的人擺在我們的生命中，若有一方願意學習十字架的功課，願意謙卑捨己，就能得著祝福，否則若要爭到公平、爭出勝負，只會以兩敗俱傷收場，如同雅各瘸腿一樣。因此毘努伊勒整夜的摔跤，是神刻意的安排。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  雅各原本雙腿正常有力，他想靠自己的力量，處理跟哥哥以掃的事。雅各原本為了預備以掃追殺過來時還能逃走，所以將僕人、兩個婢女及她們的孩子放在最前頭，接著是利亞、拉結和她們的孩子，自己走在最後頭。但神使他瘸腿，無法逃跑，只能謙卑面對哥哥。當他謙卑順服，就有神的保守和看顧。我們的生命也要對付這種問題，縱使有很多自己的想法、做法，也要在禱告中謙卑降服於神，願意調轉方向、步伐，願意去道歉、饒恕、放下，而非要神改變對方，一直跟神摔跤僵持不下。願我們的生命都能謙卑柔和，並效法耶穌在客西馬尼園的禱告（太廿六39），以及耶穌母親馬利亞的禱告（路一38），降服於神的旨意。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">五、兄弟相見——與人和好（創卅三10）</span>
                <p className="text-gray-700 leading-relaxed mt-2 mb-2">
                  創世記卅二9-12：「9雅各說：耶和華我祖亞伯拉罕的神，我父親以撒的神啊，你曾對我說：回你本地本族去，我要厚待你。10你向僕人所施的一切慈愛和誠實，我一點也不配得；我先前只拿著我的杖過這約但河，如今我卻成了兩隊了。11求你救我脫離我哥哥以掃的手；因為我怕他來殺我，連妻子帶兒女一同殺了。12你曾說：我必定厚待你，使你的後裔如同海邊的沙，多得不可勝數。」在雅博渡口的經歷之前，雅各已經先藉著禱告來倚靠神。雅各先讚美感謝神，而後具體求神保護。接著有雅博渡口與神面對面的經歷，這使他終於預備好自己去見哥哥以掃。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  雅各先見了神的面，而後見哥哥的面，所以他能說：「我見了你的面，如同見了神的面。」（創卅三10）若我們常常見神的面，當我們看人時，就比較容易看見別人裡面神的形象、神的榮美，否則我們比較容易會狗眼看人低，總是看到別人的缺點，總覺得不滿意。當我們先看見神，提升自己，就比較能用神的眼光來看人，我們會看見他裡面的優點，而能稱讚他；當我們越稱讚他，他就有可能越優秀、卓越。所以我們要親近神，並把神的眼光放在配偶、兒女、同工、同事、部屬、長官、老闆、同學的身上，看見對方的美好，帶來好的循環。
                </p>
              </div>

              <div className="mb-3">
                <span className="font-semibold text-indigo-700">六、失去親人——神的剝奪</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  雅各的愛妻拉結生子而死（創卅五16-19），不久後他的父親以撒離世（卅五28-29），很快地他又失去愛子約瑟（創卅七34-35）。雅各接連失去親人的遭遇，是神的剝奪，也是神給他的歷練，使他生命能更加成熟。
                </p>
              </div>

              <div>
                <span className="font-semibold text-indigo-700">七、祝福預言——神的權柄</span>
                <p className="text-gray-700 leading-relaxed mt-2">
                  雅各兩次為法老祝福（創四七7、10），也為約瑟兩個兒子以法蓮、瑪拿西祝福（創四八15-20），他將右手按在約瑟次子以法蓮的頭上，而將左手按在約瑟長子瑪拿西的頭上，後來兩支派果真如雅各的祝福來發展，以法蓮擁有了長子的位份，希伯來書說明雅各的祝福乃是出於信心：「雅各因著信，臨死的時候，給約瑟的兩個兒子各自祝福，扶著杖頭敬拜神。」（來十一21）接著雅各為以色列十二支派祝福（創四九1-28），後來也全都應驗。雖然雅各的人生充滿許多苦難，但年老時，他的祝福卻滿有恩膏，滿有神的權柄，此時也正是他人生的高峰。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                神揀選雅各成為以色列國的開國始祖，預表耶穌基督被差遣到世上，為要成為新約教會的開創者。神的揀選並非使雅各一帆風順，而是使他比常人經歷更多的磨練。雅各的生命豐盛與他所經歷的苦難有關，預表耶穌基督從受苦到豐盛的生命。基督徒走十字架的道路，也能使我們的生命更豐盛。有時候，更多的剝奪，是因為神要更多來充滿我們。讓我們順服神，接受神的雕琢、磨練，而能有豐盛的生命，如同耶穌基督的生命及雅各晚年的生命。
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
                '雅各回到迦南地後，先後在示劍與伯特利築壇（分別取名「伊利伊羅伊以色列」與「伊勒伯特利」），並在伯特利再次被神改名為以色列，這是他生命豐盛的起點。',
                '雅各接連經歷妻子拉結難產而死、父親以撒離世、愛子約瑟被誤傳喪命，這些是神的剝奪與磨練，使他的生命更深倚靠神、更加成熟。',
                '雅各在雅博渡口與神摔跤被弄瘸了腿，「毘努伊勒」（神的面）與「雅博」（倒空）兩個地名，共同說明神刻意使人謙卑降服、被倒空而後重新被神充滿的屬靈功課。',
                '雅各先見神的面（雅博渡口），而後才能坦然見哥哥以掃的面並與他和好，說明常常親近神、看見神的榮美，能幫助我們用神的眼光看待他人。',
                '雅各晚年雖歷經許多苦難，卻在為法老、為約瑟兩個兒子、為十二支派祝福上滿有神的權柄，印證越受磨練的生命，越能在末了活出豐盛與恩膏。',
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
              '雅各從回到迦南地定居，直到住在埃及地終老，經歷了幫助他生命成長的七件事。可分享其中一、二項，並分享自己的應用。',
              '雅各最終擁有豐盛的生命，跟七件事特別有關係。你覺得最重要是那幾項？請每人分享自己的經歷與可能的應用。',
              '雅各在毘努伊勒與神摔跤，跟後來兄弟相見和好，這兩件事有何關聯？可如何應用在我們與神與人的關係？',
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
