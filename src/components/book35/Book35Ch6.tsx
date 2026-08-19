import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book35Ch6() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-violet-700 to-purple-700 bg-clip-text text-transparent">第六講</h1>
        <h2 className="text-xl font-semibold text-gray-700">回應成為祭司的呼召</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-violet-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-violet-50 to-purple-50 hover:from-violet-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-violet-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <p className="text-gray-700 leading-relaxed">
              妮塔開場說，時間有限，她可能沒辦法講完所有打算要講的，但會把最重要的告訴大家——她笑說天使講話的速度比人快得多，天使講一句，人要講十句才能表達清楚，所以她要盡量講重點。她引用出埃及記二十八章1至3節：「你要從以色列人中，使你的哥哥亞倫和他的兒子拿答、亞比戶、以利亞撒、以他瑪一同就近你，給我供祭司的職分。你要給你哥哥亞倫作聖衣為榮耀，為華美。又要吩咐一切心中有智慧的，就是我用智慧的靈所充滿的，給亞倫作衣服，使他分別為聖，可以給我供祭司的職分。」
            </p>

            <div>
              <h3 className="font-bold text-violet-800 text-lg mb-3">一、祭司是為了服事神，不是服事人——大衛最看重的職分</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔問：祭司是為了什麼？聖經說是為了服事神，並沒有說要來服事人。她提到，代禱者的職分在神的家中是最高的呼召——大衛是使徒、君王、先知，也是祭司，但他最看重的是祭司這個身份。他是世界上最偉大國家的君王，百姓歡呼、愛他、尊敬他，但真正讓他流淚感動的，卻是他祭司的職分。當他行走在祭司的職分裡（迎接約櫃跳舞歸回）時，他的妻子米甲卻輕視辱罵他。大衛回應說：「是，我在神面前甚至可以表現得更加愚蠢。」妮塔解釋，這並不是因為他跳舞的緣故，而是因為他穿著祭司的衣袍、護衛著神的榮耀回來，這正是他被妻子輕視辱罵的原因，卻也是這件事給大衛帶來了極大的喜樂。他對祭司職分是如此尊崇，甚至讓許多兒子做祭司——雖然聖經記載是利未人做祭司，但大衛這個出身猶大支派的人，仍把家族中許多人放進祭司的職分裡。事實上，他被人尊崇，是因為神膏他成為君王，但真正觸動大衛內心最深處的，乃是他向著神所是的祭司身份，他深深知道怎樣在信徒中做一個祭司。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-violet-800 text-lg mb-3">二、我們都被呼召成為祭司——五重執事建立在祭司職分之上</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說，在神的家中，我們並不明白神呼召我們每一個人都要成為祭司，每天到祂面前服事祂。當你服事神，祂就會來服事祂的子民。她分享自己的經歷：當她把自己分別為聖，每天花很多時間讀經、禁食、禱告，為即將要做的事工預備自己，主告訴她：「如果你一直這樣服事我，我就能夠一直服事我的百姓。」這就是對每一個人作祭司的呼召，包括在座的每一位。她接著引用以弗所書四章11-13節（擴大版）：「祂的恩賜［不同的，祂按自己的旨意分給人］，有些是使徒，有些是先知，有些是傳福音的，還有就是牧師和教師。」她指出，我們常稱這是「五重執事」，但按希臘原文文法，牧師和教師其實是同一種職事，所以實際上是四重執事。這四重（或五重）執事的目的，記在12、13節：「祂的目的是為了完善和充分裝備聖徒［被神分別為聖的人］，各樣的服侍，建立基督的身體（教會）……［培育］直到我們眾人擁有同樣的信心，對神兒子完全和準確的認識，達到正真成人的身量。」妮塔強調：五重執事是為了服事教會，因此凡是在五重執事裡的，身上都有祭司的職分——像江牧師，她是使徒、教師、牧師，但在這些職分之上，她首先是一個祭司，向著神、服事神；妮塔自己是使徒、先知，但這兩個職分之上，是她服事神的祭司呼召。使徒或先知的職分是為了服事眾人，但唯有祭司的職分，讓人有權利到神面前服事祂。根據這段經文，每個人最主要的呼召，就是服事神的祭司職分，然後才是服事弟兄姐妹。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔強調，你被造來成就大祭司的職分，這個呼召遠勝過你在教會裡的一切其他呼召——如果教會中有一位被聖靈充滿的牧師同時也是這個國家的總統，對他而言，沒有一件事比單獨去見神、服事神更重要，他最高的呼召不是成為總統。同樣，江牧師最高的呼召不是使徒，而是大祭司，有特權到神面前來事奉祂。她問大家：如果你們都是祭司，你們的特權是什麼？江牧師身上使徒的呼召，難道比你大祭司的呼召更高嗎？她說：不是的！如果我們在魂的最深處不明白自己是大祭司，並且沒有活出來，五重執事就失敗了。她舉了一個尖銳的例子：如果一個五歲得癌症的孩子在醫院病床上快要死了，神會垂聽誰的禱告？是一位使徒的禱告，還是他哭泣的爸爸的禱告？她說：為什麼我們總是要找一些「比較重量級」的人物呢？因為人們不了解自己就是服事神的大祭司——他們的禱告，跟五重執事中任何人的禱告一樣重要。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-violet-800 text-lg mb-3">三、禱告時都穿著祭司的袍子</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔分享，多年前她在聖經學院服事時，睡夢中醒來看見一個異象——大祭司的異象，身穿大祭司的袍子，散發著神的榮耀，美得令她窒息。神花時間為她一一說明祭司所穿戴的服飾，從頭上戴的冠冕到胸牌，在神寶座前代表的意義，然後說：「我要你改變你所傳講的資訊，我要你到世界各地，去傳講教導人禱告，我要你分享異象中看到的。告訴他們，當他們到我面前禱告時，他們身上穿的是大祭司的袍子。」她解釋，這意味著神會仔細聽我們的禱告，就像當年亞倫進到至聖所一樣——一年一次亞倫的禱告，使以色列民得以存活；因著亞倫每年的禱告，百萬人可以存活到下一年，這就叫權柄，就是祭司禱告的能力。正如神垂聽亞倫為以色列的代禱，神同樣也聽我們的禱告——我們身上穿的，就像亞倫那樣漂亮的祭司袍子，使我們成為聖潔、成為至高神的大祭司。妮塔說：你什麼時候得到這樣的袍子呢？就是你得救的那一天。要不要使用這樣的特權，完全取決於你自己，是你自己決定要不要讓神培育你，逐漸被建造進入祭司的職分。她也提醒：我們被呼召成為祭司，並不代表我們就會禱告，也不意味著就會降服於神——就像出埃及記十八章拒絕神的以色列民，教會的同工年復一年教導你該做的事，你卻可以充耳不聞，繼續讓你對自己、對神毫無價值。如果你被造要成為有君尊的祭司，卻沒有進入你的呼召，對你自己和對神來說，你就是沒有價值——神仍然愛你，有需要時也會服事、祝福你，但你卻沒有為祂成就任何事。她說：這是極美的榮幸，一旦你明白你的聲音在神寶座前是何等重要，你的代禱會充滿全地，動搖世界的根基，改變整個世界的樣貌。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔也談到五重執事的角色：教會需要五重執事，這是神的心意，教會的管理組織會持續到永遠。她提醒要尊重、尊榮、順服五重執事，因為這對我們自己有好處，不是對他們有好處——如果他們與神同行，順服他們就是在順服神。她以舊約作對比：亞倫身為大祭司，本是這個國家最高的職分，擁有烏陵與土明，但他並沒有進入他該有的屬靈強度，反而一直看摩西在做什麼，把以色列人一再帶回摩西身邊。事實上，摩西從來沒有要以色列人敬拜他，也從來沒有要百姓凡事仰望他——摩西從神那裡得的指示，是要設立大祭司，好讓百姓依靠大祭司的職分治理，代代相傳，因為摩西終有一天會被神接走，神並不希望整個國家依靠他一人。當大祭司沒有負起責任，神就必須興起先知；當祭司職分繼續失去功用，神就必須再興起王，直到先知與王一同治理這國。妮塔說：神要我們個人性地成為祭司，到神面前聽見祂的聲音，得到的話語應當與神在教會裡所做的事完全聯合，這樣才能確認自己的確聽到了神的話。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-violet-800 text-lg mb-3">四、你身上有烏陵和土明——祭司職分帶來的啟示能力</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說，身為大祭司，我們身上有烏陵和土明，這是神的聲音；身上有這些寶石，代表神的子民；來到神的寶座前，頭上戴著「歸耶和華為聖」的聖冠，提醒我們每天在神面前的生活應當聖潔。她提到聖殿是由活石建造成的，活石代表的就是今天的教會——當我們來到神面前，神看到頭上「歸耶和華為聖」的聖冠，就會記起我們一切的罪、所做錯的事，都已被祂兒子的寶血遮蓋。當我們為神的子民代禱，就是胸牌上的寶石在發揮作用，神看到基督獻上的血，就會尊崇我們的禱告——即便對方仍在罪中，禱告仍能使神把刑罰拿走。她說，神的家（教會）之所以處在不健康的狀況，是因為不明白自己祭司的職責和特權——神的百姓看到弟兄失敗，常常只是自覺自義，而不是用祭司的職責和特權來到父神面前說：「請禰饒恕這個人，神啊，雖然他大大得罪你，但請禰饒恕他。因著禰兒子的緣故，請你赦免他，醫治他。」她說：如果我們像個真正的祭司，少一點論斷，在憐憫中多一點禱告，整個神的家會更加健康。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔接著解釋出埃及記二十九章20節：「你要宰這羊，取點血抹在亞倫的右耳垂上和他兒子的右耳垂上，又抹在他們右手的大拇指上和右腳的大拇指上，並要把血灑在壇的四圍。」她問：為什麼要把血抹在右腳的大拇指上，而不是比較小的腳趾？因為右邊代表啟示，祭司是為著神的啟示被分別為聖的——身為祭司，我們的右腳趾已經被耶穌基督的血塗抹，將我們分別為聖，讓心可以領受神的啟示，就是有關神祂自己的屬性、本質，還有神旨意的啟示。她說，有人曾跟她說：「可是我從來沒有從神那邊得到什麼啟示呀！」她的回應是：「那是因為你沒有操練你祭司的職分。」而帶來啟示的，正是胸牌上的烏陵與土明。她提到大衛在曠野逃避掃羅追擊時，帶了一位祭司，祭司的胸牌上就有烏陵和土明——大衛問神：「我該這樣做嗎？我該去這個地方嗎？如果我進了這個城，掃羅會來找我嗎？」烏陵與土明是兩塊石頭，一個透明紅色、一個透明藍色（妮塔說她親眼見過），如果神的啟示是「不是」，其中一塊會發亮；如果是「是」，另一個石頭就會亮起，這就是神向尋求祂旨意的人發出的啟示性信號。她說，有意思的是，大衛逃亡時居然帶著一位大祭司，可以從祭司身上的胸牌得著方向——而我們每一個人，裡面其實都有這樣一個「胸牌」，都有烏陵和土明，都有能力知道神說的是「是」還是「不是」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔舉例說明這種內在的啟示如何運作：也許你昨天說「我一定要去」，但突然覺得有個查驗，一個訊息好像說「我大概不該去」——這就表示你裡面的烏陵和土明正在做工，你正從神那裡得著方向；或者神給你一節經文，打開聖經時那段經文就跳出來，你突然知道不應該做原本打算要做的事，這也是從神得到了啟示。同樣，一打開聖經就知道「這句話就是給我的」，或清楚知道某個夢是從神而來，看到異象，或突然對某人有負擔（雖然不知道具體是什麼）——這些都是神給祂祭司的啟示。她解釋，右腳拇指上的血潔淨了我們所當行的路，是說神已經在我們靈裡指示了這一生所當行的道路，不管是醫生、律師、建築師、全職照顧家庭的主婦、牧師，或是專職學生，都已經在靈裡了。那個「指示器」已經在你的靈裡，不需要再去問先知——世界上最屬靈的人中，有些幾乎從來沒有見過異象，但他們非常屬靈、跟神非常親密同行，因為那已經在他們的靈裡了。她說：你的左邊是先知預言性的，右邊則是啟示性的；右手拇指上的血，代表你在神家中事工的啟示——那不是「來自神的啟示」，而是「神放在你裡面、透過你在教會裡去做」的啟示本身。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-violet-800 text-lg mb-3">五、你就是神的啟示——每個人都彰顯基督不同的一面</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔說，如果這啟示是從神而來，神就是啟示的源頭，然後進入你裡面，就像神給你的一份禮物。她邀請幾位同工上台作示範：Nicky姐妹的特殊之處、她寶貴的地方、她的恩賜與才華，就是耶穌基督向教會所彰顯的一幅圖畫——當你看到Nicky，就看到耶穌的這一部分；當你看到江牧師，就看到耶穌另一部分，你從她身上看到使徒的恩膏，使她能在教會裡栽培、孕育、培育眾人；David的呼召、才華與恩賜，對大家來說又代表了耶穌的另一面。妮塔說，這三位彼此都不一樣，卻讓我們看到耶穌基督服事與呼召的三個不同面向，也是神對教會智慧的三個不同面向。她進一步說明：如果神呼召一個人成為會計師，神會給他相應的能力和恩賜有效處理工作；敏文牧師有寫詩歌的美好恩賜，這些詩歌就是神藉著她要傳達的一個啟示，並不是敏文牧師本身，而是有關基督的啟示透過她傳出來，這正是這些詩歌如此美麗的原因。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔問大家：有多少人在得救之後換了職業，或發現以前從來不知道的恩賜和才華？這就是耶穌基督的啟示。她提醒，不要以為「沒有異象或異夢就不是神的啟示」——神其實很在乎我們生命中最基本的特質，例如一位曾被虐待的人，得救、被聖靈充滿之後，成為世界上非常好的母親，她因神如此擴充，就成為神對她孩子的啟示。所以，每一次神在你裡面釋放一個才華或恩賜，祂乃是藉著你向教會彰顯有關祂自己的啟示，這正是你所當行的路。她也舉了先知職分的例子：耶利米是先知，卻跟以賽亞完全不同，以賽亞跟大衛也不一樣。她引用希伯來書一章1節（擴大版）：「用許多單獨的啟示［每一個都是真理的一部分］，以不同的方式曉諭古時列祖和眾先知。」她說，這不單指先知性的信息，更指先知自己的生命、在神百姓面前的行事為人——耶利米書裡，耶利米其實沒有說過一句「先知性的話」，但他的生活、生命卻一直在釋放先知性的信息；他的話語和他一生的經歷合併起來，就成了神藉著耶利米向以色列人所說的完整信息。以西結被神要求靠一邊睡40天、又靠另一邊睡390天（結四：4-6），不僅是他說的話，更是他整個人的行為舉止，向神的百姓說出神的心意；何西阿被神要求娶一個按他本性不可能娶的女子，他的婚姻本身就陳述出神對以色列人的心意。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                妮塔總結：神用許多方式向我們彰顯耶穌基督自己——從約瑟身上，我們學到耶穌是受苦的僕人，也預定要來掌權；從大衛身上，我們看到耶穌是君王、先知、使徒、也是祭司，看到耶穌基督在教會裡是如何運行的；我們也從教會裡不同的弟兄姐妹身上，學到有關神的啟示。她總結出埃及記二十九章20節塗血的意義：右腳拇指的血引導道路，右手拇指的血使你在教會裡的工作成聖、把耶穌的一部分啟示給教會，右耳垂的血則讓你能夠聽見神的話——不管是透過聖經、心裡的感動，或異夢異象，甚至像她自己那樣被帶到湖邊談論謙卑。透過將右耳分別為聖，神開了我們的耳朵，使我們能聽見神的啟示。她問：祭司在什麼地方聽到神的啟示呢？乃是在於神的同在中。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">全書最後，妮塔以一段禱告作結：</p>
              <div className="border-l-4 border-violet-200 bg-violet-50/50 pl-4 py-3 my-3">
                <p className="text-gray-700 italic leading-relaxed">
                  「父神，我今天下午傳講了很多資訊，也許離簡單還有一些差距，但你差遣天使來告訴我這是應該傳講的，所以我求禰持續地來澆灌今天下午在他們心中撒下的種子，求禰來激發這些人心中的渴慕，興起進入他們祭司的職份裡，到禰面前來侍奉禰，並允許禰透過他們來服侍教會。父啊，我們感謝禰教導我們這神國裡的事，使我們可以成為祭司的國度，我們把一切的榮耀、尊貴都歸給耶穌基督的名。主啊，祝福他們散去的腳步，禰的保護四圍環繞著他們，他們心中滿了喜樂，釋放他們進入神國裡面更大的事……我們奉禰寶貴的名，阿們！祝福你們，愛你們！」
                </p>
              </div>
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
                '祭司是為了服事神，不是服事人——大衛雖貴為君王，卻最看重、也因此最喜樂的是祭司的身份，即便因此被妻子米甲輕視也在所不惜。',
                '以弗所書四章的五重執事（使徒、先知、傳福音的、牧師、教師）都是為了裝備聖徒進入服事，而每一位五重執事身上，最重要的職分都是「祭司」——服事神優先於服事人，這也是每一位信徒的首要呼召。',
                '得救那一刻起，每個信徒就穿上了屬靈的祭司袍子，禱告蒙神看重，正如亞倫的禱告使以色列民得以存活；但這是需要主動使用、被神培育才能活出的特權，不會自動發生。',
                '每個信徒裡面都有屬靈的「烏陵與土明」——透過心中的查驗、跳出來的經文、感動、異夢異象等各種方式，神向願意操練祭司職分的人賜下明確的引導與啟示。',
                '「你就是神的啟示」是全書最深刻的總結：每個人的呼召、恩賜、才華、甚至一生的經歷（如耶利米、以西結、何西阿），都是神向教會與世界彰顯基督某一面向的獨特方式——沒有一個信徒的生命是多餘或不重要的。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「烏陵與土明」的內在啟示，如何與過度倚賴超自然徵兆分別開來？</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔用烏陵與土明比喻信徒裡面分辨神心意的能力，鼓勵大家留意內心的查驗、跳出來的經文、突發的感動。這種操練若不謹慎，也可能被誤用為「凡事都要等神給明確徵兆才敢行動」的迷信式信仰。健康的分辨，應當是這些內在印證與聖經整體教導、群體智慧、常識判斷彼此參照印證，而不是取代它們——正如妮塔自己也強調，個人領受的啟示，應當與神在教會群體中所做的事完全聯合，而非各行其是的依據。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「你就是神的啟示」對職業呼召神學的貢獻</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔以會計師、家庭主婦、全職學生等日常職業為例，說明神的啟示不局限於異夢異象等超自然經歷，也體現在每個人被造的恩賜、才幹與日常呼召裡。這個提醒對常把「屬靈」與「全職服事」畫上等號的信仰文化，是重要的平衡——一個盡忠職守的會計師、悉心照顧家庭的主婦，跟一位在台上講道的傳道人，在神眼中同樣是在活出祭司的呼召、彰顯基督啟示的一部分，沒有高低之分。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">先知的「一生即信息」對現代基督徒見證觀的提醒</h4>
              <p className="text-gray-700 leading-relaxed">
                妮塔以耶利米、以西結、何西阿為例，指出這些先知有時不是靠「說了什麼」傳達神的信息，而是靠自己整個人生命的經歷、甚至婚姻、生活作息本身成為信息。這提醒現代基督徒：見證不只是言語上的分享，更是生命本身如何被神所用、如何活出來的整體樣式——有時候，一個人如何面對苦難、如何持守婚姻、如何在平凡崗位上忠心，本身就是最有力的「先知性信息」，不亞於任何一篇講章。
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
              '大衛因祭司的身份被妻子輕視卻仍甘之如飴。你生命中是否也曾為了討神喜悅，做過一件在人看來「愚蠢」或不體面，卻讓你心裡充滿喜樂的事？',
              '如果「服事神優先於服事人」是每個信徒的首要呼召，你目前的生活節奏裡，單獨與神相處的時間，跟服事他人的時間，比例大概如何？',
              '妮塔說「你什麼時候得到祭司的袍子？就是你得救的那一天」。你是否曾覺得自己的禱告「不夠份量」，需要更屬靈的人代禱才有用？這一講如何挑戰這個想法？',
              '回想你生命中一次「烏陵土明式」的內在印證經驗——一個突然的查驗、一句跳出來的經文、一個莫名的感動。當時你如何回應？',
              '妮塔說每個人的恩賜、才華、甚至職業，都是「神的啟示」在彰顯基督的一部分。你的恩賜、職業或人生經歷，可能正在向周圍的人彰顯耶穌的哪一面？',
              '讀完全書六講，你覺得自己對「代禱」與「祭司」這兩個詞的理解，跟一開始相比有什麼改變？',
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
              <h4 className="font-semibold text-green-700 mb-2">👑 每天優先安排「祭司的時間」</h4>
              <p className="text-gray-700 mb-2">接下來一週，每天在服事、工作、照顧他人之前，先安排一段（哪怕只有五到十分鐘）單單服事神、單單與神相處的時間，不求任何回應或答案，操練「服事神先於服事人」的次序。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✨ 找出你正在彰顯基督的哪一面</h4>
              <p className="text-gray-700 mb-2">
                安靜列出你的恩賜、才華、職業或人生經歷中，最獨特、最與眾不同的兩三項，禱告求問神：「這些如何在彰顯禰自己的哪一部分？」寫下你的領受。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🕊️ 為身邊一位失敗的弟兄姐妹代求，而非論斷</h4>
              <p className="text-gray-700 mb-2">
                想一位你曾在心裡對他有論斷、批評的肢體，這一週改用祭司的職分為他禱告：「主啊，求禰饒恕他，因著禰兒子的緣故，赦免他、醫治他」，而不是繼續在心裡定他的罪。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 全書總結禱告</h4>
              <p className="text-gray-700 italic">
                「親愛的天父，感謝禰讓我明白，我被造是要成為禰的祭司，服事禰、也能聽見禰的聲音。求禰赦免我常常倚靠別人替我聽神說話，而不肯自己親近禰。求禰啟動我裡面的烏陵與土明，使我能分辨禰的心意；求禰使用我的恩賜、才華、甚至我的軟弱，向這個世界彰顯耶穌基督的美好。願我這一生，無論言語或生命本身，都成為禰榮耀的啟示。奉主耶穌寶貴的名禱告，阿們！」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
