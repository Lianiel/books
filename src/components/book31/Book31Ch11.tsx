import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book31Ch11() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    exploration: true,
    questions: true,
    practice: true,
  });
  const toggle = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">第十一章</h1>
        <h2 className="text-xl font-semibold text-gray-700">神的救贖計劃</h2>
        <p className="text-sm text-gray-500 mt-1">書頁 257–264</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-teal-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <div>
              <h3 className="text-lg font-bold text-teal-700 mb-3">有一奇妙嬰孩誕生</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經告訴我們　神讓萬族的人「住在全地上，並且預先定準他們的年限，和所住的疆界；要叫他們尋求　神，或者可以揣摩而得，其實祂離我們各人不遠」¹。巴別塔事件之後，各民族遷徙全地，各人居住在各自的疆界裏面，他們藉著大自然宇宙的奧秘和來自他們心中的良知，又看見　神在人類歷史中掌權。如果人謙卑己心真誠去尋找　神，全能的主是會帶領他們。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                然而在述這種「一般啟示」雖然人人能看見，卻不是人人能正確認知的。人類因為罪而蒙蔽了心眼，常常曲解這些「一般啟示」的真實意義，甚至有時候朝相反的方向去思考，發展出完全錯誤的理論。所以　神不僅藉著上述的「一般啟示」向人類啟示祂自己，更在未後差祂的兒子主耶穌基督降世為人，使人類真正能認識　神並且能因祂重生得救。主耶穌基督就是　神的「特殊啟示」，也就是　神創世以來的救贖計劃。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                主耶穌降世為人是件非常奇妙的事，祂是　神賜給人類最大的恩典。主耶穌是　神獨生的子，因聖靈感孕，由童貞女馬利亞所生。祂無罪仔的寶血，可以洗淨任何願意接受祂救恩之人的罪。正是「　神愛世人，甚至將祂的獨生子賜給他們，叫一切信祂的，不至滅亡，反得永生。」（約翰福音三章16節）。　神的大愛就在這裏更加顯明了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                主耶穌被釘十字架的時候雖只有三十三歲，但是祂所行的種種神蹟、充分顯出祂是來自　神。萬物是藉著祂造的，凡被造的，沒有一樣不是藉著祂造的。祂為我們的罪被釘死在十字架上，第三天又從死裏復活，充分顯示生命在祂裏頭，這生命就是人的光。祂的一生應驗聖經所有指著祂所說的預言，證明祂就是「彌賽亞」（　神的受膏者），是　神為人類備的贖罪羔羊。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                主耶穌其實可以藉著超能力，脫離那十字架上的死亡，但是祂為祂來成就　神的旨意，甘心為我們的罪死在十字架上。祂為祂來成就　神的旨意，甘心為我們的罪死在十字架上，祂救那些接受主耶穌基督的人「以　神的義為義」的重要性³。　神揀選那些接受主耶穌的人後來在神的國度，使那些在主耶穌基督裏重生得救的人才能擁有永恆的生命，並且使他們在　神的永恆上有份，與祂成為一同作工。至於那些拒絕祂救恩的人，　神只好任憑他們在火湖裏永遠離開　神的面，不得與祂同享榮耀。
              </p>
              <p className="text-gray-700 leading-relaxed">
                當主耶穌基督三天從死裏復活以後，祂曾經顯給五百多位弟兄看（哥林多前書十五章6節），四十天之後在門徒面前升天，並且應許將來必要自天而降，審判萬民。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-teal-700 mb-3">神恩典臨到願意接受的人</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                朋友，你以為這件事不可思議嗎？　神常用人以為愚拙的方法，來成就　神的智慧，以免有人自誇驕傲。難道　神只愛愚拙的人嗎？並不是如此。　神先是揀選有智慧的人，若是有智慧的人自願捨棄這個恩典，救恩就臨到愚拙的人。　神的揀選先是臨到那俊美的，那俊美的若不領受，就臨到那不體面的。　神的恩典先是臨到長子，長子不接受，恩典就臨到那後生的孩子。能說　神偏心嗎？不能。　神的恩典是公平、公義的，按各人領受的賦與人，每一個人都有機會。朋友，你可曾珍惜你的機會嗎？
              </p>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch11-fig103-grace.jpg" alt="圖103 神恩典臨到各國各族" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖103 — 　神的恩典臨到各國、各族、各民、各方屬於祂的子民，凡是願意接受祂的人並不分亞洲人、美洲人、歐洲人、非洲人或是澳洲人。</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                自從亞當犯罪，將全人類的子孫陷在罪裏，　神就為人類備了一個救贖計劃，也預備了一個新天新地，將來要從　神那裏降臨，代替那將有的天地（啟示錄二十一章1至2節）。人類要和　神重新恢復父子的關係，那日子將會比伊甸園的日子更美好。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-teal-700 mb-3">所有預言必會應驗</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經裏面有三分之二是　神的預言，證明祂才是人類歷史的主宰者。三分之二的預言當中大部分又是和救贖人類有關聯，而歷史中只有主耶穌基督符合聖經中所有關於彌賽亞的預言。朋友，既然　神在過去的預言都已經應驗，你想祂難道會讓將來的最後預言不應驗嗎？
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                自從人類走出方舟以後，　神宣佈審判和死刑的命令（創世記九章5至6節），在歷史裏面　神曾經降硫磺與火覆滅了所多瑪和蛾摩拉等罪惡之城（創世記十九章全文），更以火山爆發活埋了龐貝城。今天世界上人心敗壞，正義弗存，情慾橫流，性別錯亂，你想，這種情況是不是更甚於所多瑪和蛾摩拉的居民？今天許多人自高自大，又有許多人盲目崇拜偶像，他們不敬畏　神，又拒絕懺悔　神真僕人的警告，卻夢想鬼假先知的訴說。朋友，這種情形是不是更甚於昔日的巴別塔？
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                　神的救贖計劃是遠在早期的；早在四千多年以前祂就在閃族中，揀選了亞伯拉罕³。後來其孫雅各蒙恩，他預言救世主必出自他的兒子猶大支派（創世記四十九章10節）。直到三十多年前，　神與猶大的後裔大衛的子孫立約，預言救世主將會出自大衛的子孫。這預言蓄著歷代先知到聖經寫出，愈往後的時代，愈來愈明顯，更指明　神要親自差祂的兒子誕生，藉著童貞女感孕生子（以賽亞書七章14節）。在主耶穌誕生前七百多年和五百多年之間，先知又預言祂誕生的地點——伯利恆（彌迦書五章2節），和祂降生的日期（但以理書九章25節）。不僅如此，就連主耶穌被釘十字架的詳情，也在祂降生前一千年左右清楚指明（如詩篇二十二章12至19節等）⁴。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-teal-700 mb-3">撒但最後必定會失敗</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                撒但魔鬼知道自己剩下的日子不多，牠就賴其全力使牠命等拖延人類墮落。牠先是造謠逼迫那些行義的人，然後引誘人跟牠妥協，使人類社會失去去道德的標準與原則。牠先是使人極力的塑灌　神，然後製造各種假象與異端迷惑人心。牠先是使人沉迷於巫術與占卜，然後讓人在混亂的音響中迷失方向；牠先是使用美酒讓人沉醉，然後用大麻及安非他命等藥使人墮落。牠的手段自人類有史以來都不勝枚舉，但是不論牠怎樣作，牠將來在最後審判的時候一定失敗。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經告訴我們，在主耶穌基督將來從天降臨審判世人的時候：「一位天使從天降下，手裏拿著無底坑的鑰匙，和一條大鍊子。他捉住那龍，就是古蛇，又叫魔鬼，也叫撒但，把牠捆綁一千年，扔在無底坑裏，將無底坑關閉，用印封上，使牠不得再迷惑列國，等到那一千年完了，以後必須暫時釋放牠。」（啟示錄二十章1至3節）。那一千年完了，撒但必從監牢中被釋放，出來要迷惑地上四方的列國，就是歌革和瑪各，叫他們聚集爭戰，他們的人數多如海沙。他們上來遍滿了全地，圍住聖徒的營，與蒙愛的城。就有火從天降下，燒滅了他們。那迷惑他們的魔鬼，被扔在硫磺的火湖裏，就是獸和假先知所在的地方，他們必晝夜受苦，直到永永遠遠。」（啟示錄二十章7至10節）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                撒但最後也定會失敗，為什麼你要和牠為伍，被牠帶到火湖那裏去受苦呢？聖經告訴我們，那裏是一個十分可怕與痛苦的地方，那裏「蟲是不死的，火是不滅的」⁵。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-teal-700 mb-3">接受主耶穌是唯一的道路</h3>
              <div className="flex flex-col items-center my-4">
                <img src="/images/book31/ch11-fig104-cross.jpg" alt="圖104 主耶穌十字架佈道大會" className="max-w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <p className="text-sm text-gray-500 mt-2 italic">圖104 — 主耶穌基督說：「我就是道路、真理、生命，若不藉著我，沒有人能到父那裏去。」（約翰福音十四章6節）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                你以為到天國的道路不只一條嗎？你以為可以自我修煉，就可消災解福嗎？你錯了。朋友，到　神的國度只有一條道路。主耶穌基督說：「我就是道路、真理、生命，若不藉著我，沒有人能到父那裏去。」（約翰福音十四章6節）。引到永生的，那門是窄的，路是小的，找著的人也少；惟有接受主耶穌的才能找著我。主耶穌基督就是那門，凡從祂進來的，必然得救。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                朋友，你曾拒絕祂了嗎？只有祂才是生命的光，人類生命真正的意義只在祂裏頭面才能找到。主耶穌基督說過：「我是世界的光，跟從我的，就不在黑暗裏走，必要得著生命的光。」（約翰福音八章12節）。趁著還有回頭的機會，來接受主耶穌基督作你個人的救主吧！
              </p>
              <p className="text-gray-700 leading-relaxed">
                神如果不審判就讓所有人的都都有永恆的生命，那麼　神當初何必需要讓亞當和夏娃離開伊甸園呢？由這邏輯思考下來，我們就清楚看到接受主耶穌基督「以　神的義為義」的重要性。　神揀選那些接受主耶穌的人進入　神的國度，使那些在主耶穌基督裏重生得救的人才能擁有永恆的生命，並且使他們在　神的永恆上有份，與祂成為一同作工。至於那些拒絕祂救恩的人，　神只好任憑他們在火湖裏永遠離開　神的面，不得與祂同享榮耀。
              </p>
            </div>

            <div className="mt-4 p-4 bg-teal-50 rounded-lg border border-teal-200">
              <p className="text-center text-gray-700 leading-relaxed italic">
                「我又看見死了的人，無論大小，都站在寶座前。案卷展開了，並且另有一卷展開，就是生命冊。死了的人都憑著這些案卷所記載的，照他們所行的受審判。於是海交出其中的死人，死亡和陰間也交出其中的死人，他們都照各人所行的受審判。死亡和陰間也被扔在火湖裏，這火湖就是第二次的死。若有人名字沒記在生命冊上，他就被扔在火湖裏。」
              </p>
              <p className="text-right text-sm text-teal-600 mt-2 font-medium">—— 啟示錄二十章12至15節 ——</p>
            </div>
          </div>
        )}
      </div>

      {/* 重點總結 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
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
                '神的救贖計劃不是臨時起意，而是創世以來就預備好的——祂差遣獨生子主耶穌基督降世為人，無罪受死，第三天復活，為人類打開得救的唯一道路。',
                '神的恩典是公平、公義的，臨到每一個願意接受的人，不分種族、膚色、國籍、智愚美醜——「按各人領受的賦與人，每一個人都有機會」。',
                '聖經三分之二是預言，其中關於彌賽亞的預言（出生地、時間、十字架細節）在主耶穌身上都精準應驗，歷史印證神所說的話必定成就。',
                '撒但的策略包括逼迫義人、製造假象、宗教欺騙、毒品沉迷、媒體色情——但牠最終的結局是被扔在火湖，在最後審判中一敗塗地。',
                '接受主耶穌是唯一的道路——「我就是道路、真理、生命，若不藉著我，沒有人能到父那裏去」（約翰福音十四章6節）；自我修煉和其他宗教都無法帶人進入神的國。',
                '最後的審判是真實的——生命冊、白色大寶座的審判、第二次的死（火湖）；如今還有回頭的機會，趁著恩典的日子接受救主是最迫切的選擇。',
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
        <button onClick={() => toggle('exploration')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">延伸探討</span>
          </div>
          {expanded['exploration'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['exploration'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">彌賽亞預言的統計奇蹟</h4>
              <p className="text-gray-700 leading-relaxed">
                學者彼得·史多納（Peter Stoner）在《科學說話》（Science Speaks）中計算：若隨機選一個人在主前600年前、同時應驗8條彌賽亞預言的概率是10的17次方分之一——相當於在德克薩斯州鋪滿兩英尺厚的硬幣，其中只有一枚做了記號，蒙住眼睛隨機取中那一枚的概率。而主耶穌一人應驗了超過300條預言，這已遠超任何人類可計算的概率，只能用「　神的計劃」來解釋。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「道路、真理、生命」的深層意義</h4>
              <p className="text-gray-700 leading-relaxed">
                約翰福音十四章6節的「我就是道路、真理、生命」，在原文希臘文中三個名詞都帶有定冠詞（the Way, the Truth, the Life），強調「唯一性」而非「其中一條路」。「道路」解決方向問題（我該怎麼走？），「真理」解決認知問題（我該相信什麼？），「生命」解決本質問題（我憑什麼有資格進入　神面前？）。這三重宣告加在一起，構成了最完整的救恩宣言。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">撒但的策略與現代信徒的防備</h4>
              <p className="text-gray-700 leading-relaxed">
                本章列出撒但的手段：逼迫義人→引誘妥協→製造偶像假象→沉迷占卜巫術→音樂和娛樂迷失→酒精毒品上癮。這個序列在今天的數位時代有了新形式：社群媒體的成癮設計、演算法製造的資訊泡泡、AI 生成的假新聞、沉浸式遊戲的時間盜竊。保羅在以弗所書六章說「要穿戴神所賜的全副軍裝」，這在今天不是隱喻，而是迫切的生存策略。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「第二次的死」與「生命冊」的神學意義</h4>
              <p className="text-gray-700 leading-relaxed">
                啟示錄二十章所描述的白色大寶座審判，顯示兩種審判標準：一是「案卷」（所行的事），一是「生命冊」（是否接受救恩）。「第二次的死」（火湖）不是肉體的死亡，而是與　神永遠分離——這才是聖經所說的「死亡」最深層的意義（創世記二章17節「你必定死」）。「生命冊」的存在說明：得救不是靠好行為，而是靠名字被記錄在冊——這正是「因信稱義」（羅馬書三章28節）的終極彰顯。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 反思問題 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggle('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">反思問題</span>
          </div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && (
          <div className="p-5 bg-white space-y-3">
            {[
              '本章說神的恩典是「公平、公義的，按各人領受的賦與人，每一個人都有機會」。你相信這句話嗎？有沒有你認識的人，你覺得神好像對他們不公平？這個疑惑如何得到解答？',
              '超過300條彌賽亞預言都在主耶穌身上應驗了。這個事實對你有何影響？你如何向一位對聖經持懷疑態度的朋友說明這件事？',
              '本章描述撒但使用媒體、娛樂、毒品等手段迷惑人類。在你的日常生活中，你覺得哪些事物最容易讓你「迷失方向」或偏離與神的關係？',
              '「接受主耶穌是唯一的道路」——這在今天是一個充滿爭議的主張。你如何在「堅持真理」和「尊重他人」之間取得平衡？',
              '啟示錄二十章描述了最後的審判——生命冊、白色大寶座。想到這幅景象，你內心有什麼感受？恐懼？平安？還是別的什麼？為什麼？',
              '如果今天你得知一位好友從未聽過福音，而你有機會告訴他，你最想分享本章的哪一部分？你會怎麼說？',
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
        <button onClick={() => toggle('practice')} className="w-full px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">具體實踐方針</span>
          </div>
          {expanded['practice'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['practice'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 深入認識彌賽亞預言</h4>
              <p className="text-gray-700 mb-2">讓預言的應驗成為你信仰確信的根基。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>閱讀以賽亞書五十三章，數一數其中關於主耶穌受難的預言，一一對照福音書的記載。</li>
                <li>選一個朋友或家人，本週把你認為最有力的一條彌賽亞預言應驗的事實分享給他們。</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🛡️ 識別並抵擋撒但的試探</h4>
              <p className="text-gray-700 mb-2">防備從了解開始——知道牠怎麼作，才能不被牠利用。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>本週誠實地記錄你每天花在社群媒體、娛樂、遊戲上的時間，對比花在讀經禱告上的時間。</li>
                <li>識別你生命中最容易被撒但利用的弱點，把它帶到禱告中，請神給你具體的對策。</li>
                <li>閱讀以弗所書六章10至18節（全副軍裝），思考每一件屬靈軍裝對應你哪個具體的生活處境。</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 為未信主的人禱告並行動</h4>
              <p className="text-gray-700 mb-2">每個人都有機會，但機會不是永遠開著的門。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>寫下三位你為之代禱、希望他們接受主耶穌的人的名字，本週每天為他們禱告一次。</li>
                <li>本月找一個機會，主動與其中一位分享你個人的信仰見證（不必是完整的佈道，就是你自己的故事）。</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 本章禱告詞</h4>
              <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                <p className="text-gray-700 leading-relaxed italic">
                  「親愛的天父，感謝祢創世以來就為我預備了救恩，差遣祢的獨生子主耶穌為我的罪死在十字架上，又從死裏復活。求祢讓我對這救恩的確信越來越深，不只停在頭腦裏，更要活在我每一天的生命中。求祢讓我有勇氣和智慧，把這唯一的道路——主耶穌基督——告訴我周圍還未認識祢的人。趁著還有機會，讓更多人的名字被寫在生命冊上。奉耶穌基督的名禱告，阿們。」
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
