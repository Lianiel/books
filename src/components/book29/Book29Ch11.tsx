import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch11() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第十一章</h1>
        <h2 className="text-xl font-semibold text-gray-700">掌權的生命</h2>
        <p className="text-gray-500 mt-1">神就賜福給他們，又對他們說：要生養眾多，遍滿地面，治理這地。　創世記一28</p>
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
              創世記一26-31，記載第六日的後半，講到三位一體的神、神的形像樣式，人要生養眾多、遍滿地面、治理全地，最後講神供應食物。上一章已分享了神與神的形像，這一章要分享生養眾多、遍滿地面，治理全地、供應食物。這兩章是密切相關的，先有三位一體的神照他的形像造人，而後人才能生養眾多、治理這地。從文意上來看，「生養眾多，遍滿地面」本身是一個使命，但也是為了完成另一個使命「治理這地，管理活物」而必須有的先期任務。在執行這整個使命的過程中，神同時應許供應所需的食物。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、生養眾多</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                生養眾多，是一個充滿活力的行動，這行動源於神造了一對男女，且這對男女是二人一體的夫妻（創二25）。從沒有人到一個人，從一個人到兩個人，都是藉著神的創造，但從兩個人到近百億人，乃是藉著生養。這件事，有神清楚的心意，寫在瑪拉基書二15：「雖然神有靈的餘力能造多人，他不是單造一人麼？為何只造一人呢？乃是他願人得虔誠的後裔。所以當謹守你們的心，誰也不可以詭詐待幼年所娶的妻。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                先知說，神願人得敬虔的後裔，並且為達此目標，需要善待妻子。這節經文一語道破今日所有婚姻家庭的問題所在，為何會離婚、晚婚、不婚、少子？因為夫妻沒有真誠以愛相待，並且大部分是丈夫先出問題。要解決這個問題，必須按照以弗所書五22-33所說的去行：丈夫捨己愛妻子，妻子順服敬重丈夫。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                人得敬虔後裔，先決條件是身為父母的自己必須敬虔。我們每個人都需要有牧者來門訓遮蓋，但我們生養兒女，更能在我們身上產生門訓的效果。因為若要培養敬虔的後裔，自己就必須作榜樣過一個敬虔的生活，身教的果效遠大於言教。上一章提到人有神的形象，並非就馬上能活出神的形象，而是必須有種種成長歷練的過程，所以生養兒女，是一個非常重要的使命。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                新約時代的生養使命加上了屬靈的生養，與創世記一28相對應的是馬太福音廿八19-20：「所以，你們要去，使萬民作我的門徒，給他們施洗，歸於父、子、聖靈的名。凡我所吩咐你們的，都教訓他們遵守，我就常與你們同在，直到世界的末了。」施洗，如同使兒女出生；教導主的吩咐，如同使兒女成長，成為敬虔的人。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                屬靈生養的使命，舊約先知也有預言，以賽亞書五十三章預言基督十架救恩，接著在下一章，以賽亞書五十四1-3就說到：「你這不懷孕、不生養的要歌唱；你這未曾經過產難的要發聲歌唱，揚聲歡呼；因為沒有丈夫的比有丈夫的兒女更多。這是耶和華說的。要擴張你帳幕之地，張大你居所的幔子，不要限止；要放長你的繩子，堅固你的橛子。因為你要向左向右開展；你的後裔必得多國為業，又使荒涼的城邑有人居住。」這段經文所預言的可能包含傳福音、帶門徒的屬靈生養，也包含肉身家庭的領養、開辦孤兒院等。筆者相當敬佩三個人：1. 英國喬治穆勒開辦孤兒院，培養出超過一萬的國度人才。2. 印度克安通牧師皇家兒童（Royal Kid）收養許多棄嬰，將他們培養成敬拜、代禱者。3. 六龜山地育幼院的創辦人楊煦牧師，收養許多原住民孤兒，培養成為有用的人才。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                屬靈生養很重要，但大部分的人仍需要從肉身的生養去體會如何屬靈生養。因此保羅對於教會長老、執事的資格，都提到必須先有婚姻家庭的經歷與榜樣。提多書一5-6：「……在各城設立長老。若有無可指責的人，只作一個婦人的丈夫，兒女也是信主的，沒有人告他們是放蕩不服約束的，就可以設立。」提摩太前書三2-12：「作監督的，必須無可指責，只作一個婦人的丈夫，……好好管理自己的家，使兒女凡事端莊順服。人若不知道管理自己的家，焉能照管神的教會呢？……執事只要作一個婦人的丈夫，好好管理兒女和自己的家。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                使徒保羅有獨身的恩賜，選擇專心事奉主，他的事奉是宣教性、國度性的，不是典型的牧會者，但即使如此，他仍然在各種公眾事奉之外，特別用心的去做許多一對一的牧養栽培工作。他的屬靈兒女，包括提摩太、西拉、提多、以巴弗、亞居拉、百基拉、推基古、亞里達古、西公都，該猶、特羅非摩、所巴特、阿尼西母……等等。羅馬書十六章的問安名單及同工名單共有三十多位，這些幾乎都是保羅親自牧養過的人。所以保羅能說出這樣的話：「只在你們中間存心溫柔，如同母親乳養自己的孩子。……你們也曉得我們怎樣勸勉你們，安慰你們，囑咐你們各人，好像父親待自己的兒女一樣。」（帖前二7，11）代表他可能比真正結婚生養的人更懂得如何作父親、作母親。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                關於生養，神除了希望我們以敬虔生活去培養敬虔的下一代，還有一個心意，是希望從作父母的過程中去認識神。因為當我們去作父親、作母親的時候，付出無私的愛，有時遭悖逆、頂撞，必須以愛去接納、挽回兒女，幫助兒女成長，那時我們才會更深體會神的心，因為神就是我們的父親，有時也像我們的母親。如以賽亞書六十六13所說：「母親怎樣安慰兒子，我就照樣安慰你們；你們也必因耶路撒冷得安慰。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                屬靈生養絕非只是做聖工，不管我們提供多少講道、教導、敬拜、福音平台等，都不等於是屬靈生養。必須有一對一的關懷、見證、佈道、造就，才會產生屬靈生養的果效。這件事跟如何作肉身父母是相似的，男人在外面賺錢養家，女人在家裡整理房間、預備飯食，不等於在生養兒女。必須有充分時間跟兒女做一對一的關懷、互動、教導、訓練，才會使孩子在愛中成長，成為敬虔的後裔。同理，不管教會的事工做得多好，若少了一對一的關懷與門訓，基本上很難產生真正的門徒。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                整體互動也是需要的，耶穌帶領十二門徒，是很好的人數，耶穌與他們每個人都有個別的關係，但同時他們彼此的互動，也會帶出很多學習。一個家庭裡，若只生養一個孩子，或一個人只帶領一個門徒，缺乏家庭裡兄弟姊妹的關係、缺乏小組生活的互動關係，那是不夠的。
              </p>
              <p className="text-gray-700 leading-relaxed">
                我們不容易像目前九十歲的那一代，生養六至八人，但因為整個國家社會已經面臨少子化的種種危機，鼓勵每個基督徒家庭能生養四人以上。我們有神的生命，有能力培養比較多敬虔的後裔，所以要付出代價、彼此互助、克服困難，每個家庭去執行這個舊而彌新的命令——生養眾多。屬靈生養也一樣，鼓勵藉著禱告、關懷、見證佈道、教導訓練的過程，帶出自己屬靈的兒女，也是以四人以上為目標。這樣至少也能組成一個小組，有家庭式的互動、互助。這個數字不是絕對的，曾經有人推動G12，以每人帶出12個門徒、組成12人小組為目標，如同耶穌帶12門徒。能這樣當然很好，但若不能，至少生養三、四位肉身兒女及三、四位屬靈兒女，這是很好的目標。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、遍滿地面</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                遍滿地面，是一個具體的目標。這說出，大地的空間是有限的，才可以被遍滿。創世記的第一個詞「起初」指向「終末」，同樣的，「遍滿地面」這個目標，也指向「終末」。人類不可能像進化論所說的有數十萬年在地上繁衍，因為在正常的生育率下，只需數千年就會遍滿地面。人類歷史，已經有過一次遍滿地面，就是挪亞的時代。那時之前，人身體健康，生育率高，且大多長壽，所以僅需大約一千五百年，就遍滿地面了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                挪亞一家八口出方舟，他的三個兒子閃、含、雅弗與他們的妻子，繼續生養，其後代往亞洲、非洲、歐洲等三個方向去發展。至今又經過大約四千五百年，也大致遍滿地面了。第二次遍滿地面的時間，是第一次遍滿地面所需時間的三倍。因為愈接近現代，環境品質愈差，人的身體愈差，壽命比洪水前減短很多，疾病大大增加，瘟疫時常爆發，戰爭也不斷發生，奪走許多人的性命，洪水後的人類歷史，幾乎就是戰爭的歷史，所以人口不容易快速增加。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                人類第二次遍滿地面時，我們要將福音傳遍全地，基督才會再來。基督再來時，會有七年大災難，可怕程度類似大洪水。大多數的人在印災、號災、碗災之中將會死亡。而在大災難末了，所有圍攻耶路撒冷的列國軍隊將全軍覆沒，其屍體將成為野獸和鳥的食物。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                第三次遍滿地面是在千禧年國度結束的時候。我們這時代結束時，經過七年大災難仍存活的餘民，將成為千禧年國度的百姓，這些人的數目可能只剩約一億或幾千萬，這數字比挪亞一家八口多很多，所以只須大約一千年，就能遍滿全地。
              </p>
              <p className="text-gray-700 leading-relaxed">
                依聖經有記錄的時間，三階段合計約七千年，以後就是白色大寶座的審判，然後進入新天新地。前六千年剛好對應六日的創造，最後一千年對應第七日安息。主看千年如一日，我們也需要主的眼光，知道那終末的禧年國度就在眼前了，而新天新地也會緊接著實現。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、治理全地</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                遍滿全地不是最終目標，治理全地才是最終目標。千禧年國度的特色是得勝者與主基督一同作王治理全地，那時創世記一28的使命才終於完成。第一次遍滿全地時，全地充滿罪惡強暴，完全沒有治理全地。所以神施行審判，結束那個世代。第二次遍滿全地時，就是現在，我們看見人也破壞了全地，並且罪惡高漲，並沒有真正能治理全地。所以神也會以審判結束這世代。在第三次遍滿全地的過程中，得勝者會與基督一同作王，終於實現了創世記一28神所說治理全地的目標。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                不少彌賽亞詩篇預言基督在全地的掌權，僅舉二例：詩篇二8：「你求我，我就將列國賜你為基業，將地極賜你為田產。」詩篇七十二8，11：「他要執掌權柄，從這海直到那海，從大河直到地極。……諸王都要叩拜他；萬國都要事奉他。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                另有詩篇八篇，雖然沒有被列為彌賽亞詩篇，但與彌賽亞有重要的關聯。詩篇八3-6：「我觀看你指頭所造的天，並你所陳設的月亮星宿，便說：人算甚麼，你竟顧念他？世人算甚麼，你竟眷顧他？你叫他比天使（或譯：神）微小一點，並賜他榮耀尊貴為冠冕。你派他管理你手所造的，使萬物，就是一切的牛羊、田野的獸、空中的鳥、海裡的魚，凡經行海道的，都服在他的腳下。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                希伯來書二5-10：「我們所說將來的世界，神原沒有交給天使管轄。但有人在經上某處證明說：人算甚麼，你竟顧念他？世人算甚麼，你竟眷顧他？你叫他比天使微小一點（或作：你叫他暫時比天使小），賜他榮耀尊貴為冠冕，並將你手所造的都派他管理，叫萬物都服在他的腳下。既叫萬物都服他，就沒有剩下一樣不服他的。只是如今我們還不見萬物都服他。惟獨見那成為比天使小一點的耶穌（或作：惟獨見耶穌暫時比天使小）；因為受死的苦，就得了尊貴榮耀為冠冕，叫他因著神的恩，為人人嘗了死味。原來那為萬物所屬、為萬物所本的，要領許多的兒子進榮耀裡去，使救他們的元帥，因受苦難得以完全，本是合宜的。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                把詩篇八篇與希伯來書二章這兩段合在一起看，可發現神預定人有治理全地的權柄榮耀，乃是透過基督的死而復活才成就的。我們復活以後，與基督同得榮耀，才能真正在千禧年國度治理全地，也就是得勝者與主基督一同作王掌權時，治理全地才會完全實現。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">肆、神供應食物</h3>
              <p className="text-gray-700 leading-relaxed">
                治理全地的同時，神將蔬果青草賜給人與動物為食物。如創世記一29-31所記：「神說：看哪，我將遍地上一切結種子的菜蔬和一切樹上所結有核的果子全賜給你們作食物。至於地上的走獸和空中的飛鳥，並各樣爬在地上有生命的物，我將青草賜給他們作食物。事就這樣成了。神看著一切所造的都甚好。有晚上，有早晨，是第六日。」菜蔬、果子是容易消化的，青草是不容易消化的，有些動物能消化青草，轉化成為人可以吃的食物，如牛奶、羊奶。蜜蜂也採蜜作成蜂蜜，可供應人食用。神像父母一樣，在兒女出生以前，就為他們預備好一切所需要的，神也如此為人預備，來供應我們。人在治理全地的過程中，當與神同工，繼續使地生產出健康的食物，因此環境保護的課題是很重要的。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">伍、預表約瑟</h3>
              <p className="text-gray-700 leading-relaxed">
                本段的預表人物是希伯來書十一章第七位信心英雄約瑟，他多次降卑，而後升高。由於他所得的異夢，說到他將來會掌權，哥哥們就忌妒他、恨惡他。將他賣給米甸商人，而後在埃及大臣波提法的家作奴隸。他有神同在，百事順利，所以被提升成為管家。後來約瑟拒絕主人妻子的引誘，被誣告下監。在監牢裡，神與他同在，百事順利，作了監獄的總管。約瑟為法老王的酒政、膳長解夢，被遺忘。法老王作了奇怪的夢，無人能解，酒政想起約瑟，約瑟終於出監，為法老王解夢，而成為埃及宰相。約瑟的生命歷程，有多次的降卑、升高，最後在全埃及掌權。約瑟作埃及宰相，最主要的任務是為整個國家儲存及供應食物。他所做的正如同神供應食物給人與動物。因著他的事奉，以色列人在埃及歌珊地，經歷生養眾多，遍滿地面。以男性來算，從七十人增加到百萬人。那四百多年，大部分的時間，是帶給埃及祝福的。創世記一28所說的治理全地，約瑟在埃及地相當程度地實現了，是基督將在全地掌權的預表。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                神的計畫何等美善、奇妙，神創造人，啟動了整部聖經神的計畫。神要我們生養眾多，有肉身生養及屬靈生養，既要使人遍滿全地，也要我們把福音傳到地極，使萬民作主門徒，目的是要人能夠治理全地。主耶穌基督來了，拯救我們，給我們新的生命，使我們可以操練治理。治理全地的事今天可以局部實現，到禧年國度時將完全實現。主將要再來，在全地作王，得勝者將與主一同作王，也就是與主一同治理全地，這是何等榮耀的事！讓我們與主同心同行，至終一起來完成治理全地的使命。願主賜福每一位，使每一位都能如此被神使用！
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
                '生養眾多源於神造了二人一體的夫妻（創二25），瑪拉基書二15指出神願人得敬虔的後裔，先決條件是父母自己敬虔；新約加上屬靈生養的使命（太廿八19-20），需要一對一的關懷門訓才能產生果效。',
                '遍滿地面共有三次：挪亞後代約一千五百年遍滿（第一次）、現今世代約需三倍時間（第二次，因環境變差、戰爭疾病增多）、千禧年國度餘民約一千年遍滿（第三次），三階段合計約七千年，對應六日創造加第七日安息。',
                '治理全地是終極目標，前兩次遍滿全地都因罪惡而遭審判，唯有第三次得勝者與基督一同作王才能完全實現（詩八3-6、來二5-10），這權柄榮耀是透過基督死而復活才成就的。',
                '神在治理全地的同時應許供應食物（創一29-31），菜蔬果子容易消化、青草需經動物轉化為奶類供人食用，環境保護是人與神同工的重要課題。',
                '本段預表人物是希伯來書十一章第七位信心英雄約瑟，他多次降卑升高，最終在埃及作宰相供應糧食，使以色列人生養眾多、遍滿地面，是基督將來在全地掌權的預表。',
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
              '神為什麼要人生養眾多？從本章可以看到神的目的是什麼？',
              '生養眾多、遍滿全地，與末世之間的關係是什麼？人類遍滿全地有哪三個時候？',
              '從起初神要人治理全地，到末後基督再來、得勝者與主一同作王，你體會到神永恆的心意是什麼？每人試分享之。',
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
