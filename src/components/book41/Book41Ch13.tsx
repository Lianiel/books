import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HandHeart, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book41Ch13() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-800 to-cyan-900 bg-clip-text text-transparent">第二部 2-7</h1>
        <h2 className="text-xl font-semibold text-gray-700">榮辱感第七項：守護關係</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HandHeart className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">定義：守護者與受護者</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                本章描述聖經社會中，人與人之間不平等地位所存在的「守護者」－「受護者」關係（又稱「恩庇－侍從關係」），說明第一世紀的基督徒普遍用社會中盛行的守護關係來解釋救恩，並用這個觀念詮釋亞伯拉罕之約——教導我們如何成為祝福他人的人，就像神對亞伯拉罕的承諾一樣，他和他的後代將與神同作施恩者，祝福世上萬族萬民。「古羅馬社會中有守護關係，在『守護者』和『受護者』之間，有生動的關係。這種關係是階級式的，而且雙方都有責任義務。『守護者』是『受護者』的照顧者、贊助者和施恩者……雖然受資助者通常屬於社會較低階層，但守護者和受護者也可能擁有相同的社會地位；然而，前者擁有更大的財富、權力或聲望，因此能幫助或施惠受資助者。」<sup>1</sup><span style={cite}>（deSilva相關論述。）</span>藍頓在《榮耀帝國》中指出：「皇帝是他名下的每一臣民的守護者、恩人。反過來，臣民們以忠誠回報皇帝。這是皇帝權力的基礎。因此，整個帝國是一個巨大、蜘蛛網式的互惠網絡。」<sup>2</sup><span style={cite}>（Lendon.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                要理解守護關係的重要性，必須理解基督時期巴勒斯坦地區普遍存在著不平等的社會現象：學者羅爾博（Richard Rohrbaugh）的研究顯示，馬可福音寫成的年代，大部分耕地由百分之一到三的少數人口所擁有，社會精英僅佔總人口約2%；越來越多沒有土地的農民為地主工作，佃農租金可能高達收成的三分之二；出生第一年存活下來的人，大約有60%在十六歲以前就死亡；即使活到成年，健康狀況也可能非常差；暴力、欺詐、搶劫在鄉村生活中屢見不鮮。<sup>3</sup><span style={cite}>（Rohrbaugh相關統計。）</span>這樣的社會現實，說明了守護關係為何會如此風行——守護者是有威權力的人，可以提供受護者自己無法取得的物資和服務，受護者則以忠誠、尊榮回報。西方通常認為這種制度在道德上有瑕疵，但在古希臘羅馬，守護關係是社會運作的必要管道，「給予和接受恩惠是構成當時社會運作的主軸」<sup>4</sup><span style={cite}>（引自相關研究。）</span>。德西瓦指出：「耶穌和他的第一批門徒的互動方式，既有守護關係，也維持友誼網絡，因為在巴勒斯坦地區的守護關係風氣與希臘、小亞細亞、埃及、非洲和羅馬一樣盛行。」<sup>5</sup><span style={cite}>（deSilva.）</span>
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">聖經中的守護關係，與恩典（charis）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經中特別提到守護者和恩人，如路加福音中為猶太人建造會堂的百夫長：「你給他行這事是他所配得的；因為他愛我們的百姓，給我們建造會堂」（路七4-5）；耶穌也教導：「外邦人有君王為主治理他們，那掌權管他們的稱為恩主」（路廿二25）；保羅在羅馬書中稱非比為他的守護者：「她素來幫助許多人，也幫助了我」（羅十六1-2）；路加福音與使徒行傳的開頭也提及提阿非羅，路加為發行這兩卷書需要相當於今日四千美元的大筆經費，顯然需要資助者。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                德西瓦指出，一世紀的信徒都明白：「神的恩典（charis）與他們所熟悉的恩典是大同小異的，只有在內涵和程度上有所差別。」<sup>6</sup><span style={cite}>（deSilva.）</span>因此，守護和恩人的社會習俗與神的愛、恩典是一致的：「神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，反得永生」（約三16），神將獨生子賜給世人，也可以用守護關係的角度來看——一位大有榮耀、尊榮的施恩者，給世人一個偉大的祝福。古代作家塞內卡指出，施與受之間有「三項優點」：帶來好處、接受、回報，如同三個跳舞的姐妹，手牽手圍成圈，建構彼此扶持的關係。<sup>7</sup><span style={cite}>（塞內卡。）</span>
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">祝福與榮耀：八福是「宣告的榮耀」</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者的辦公室工作團隊對聖經中「祝福」及其衍生詞進行統計分析：幾近三分之二（62%）的出現頻率是上帝賜福人類，超過三分之一（38%）的次數是人類稱頌神或祝福他人（其中稱頌神佔20%，祝福其他人或民族佔18%）。「祝福」這個詞與榮耀的重疊度很高（創十二1-3；啟五12-13）——尼瑞歸納許多學者研究後認為：在「八福」（太五3-12）當中，希臘文的「福」（makarios），更貼切的翻譯應是「榮耀」。因此，有學者直接把「八福」稱為「宣告的祝福」（makarisms）：「榮耀是希臘文化和希伯來文化的重要價值觀……讚美或『祝福』是一種公開的宣告，建構了眾人的價值觀和預期行為，顯然，這也是榮耀的原始定意，即公認眾所期待的價值觀。」<sup>8</sup><span style={cite}>（Neyrey.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                尼瑞建議採用更貼近文化真實性的譯法：「虛心的人有福了」可譯為「虛心的人得榮耀」；「哀慟的人有福了」可譯為「哀慟的人得榮耀」；「人若因我辱罵你們……你們就有福了」可譯為「你們就得榮耀了」（太五3、4、11）。他為八福做了總結：「榮耀就是活出耶穌的新準則，其『獎賞』是得到天父的讚美。耶穌改變了榮耀的遊戲規則，祂為榮耀重新下定義，也就是：由神來認同，而不是世人。結果，為了活出與主相同的形象，門徒在世人眼中是蒙羞的，在鄰舍面前成為『最小的和在後的』。但是，耶穌會大大尊榮這群門徒，遠超過世人所期待的。」<sup>9</sup><span style={cite}>（Neyrey.）</span>由此可歸納：當上帝賜福人時，祂是神聖的守護者，把恩典賜給受護者；當人向上帝感恩時，透過公開的敬拜和讚美將榮耀歸給神；當人為他人祝福時，祝福人的就是守護者。作者提到，一位泰國原住民基督徒領袖曾告訴他：在泰國，人人活在守護關係中——父親是孩子的守護者，贊助商是運動隊伍的守護者，基金會是孤兒的守護者，神是信徒的守護者，守護關係深深交織在東南亞的文化脈絡中。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">亞伯拉罕：受護者與共同守護者的雙重角色</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                亞伯拉罕的生平，至少在兩個方面凸顯出守護關係：（1）身為「受護者」，他受到施恩者麥基洗德的祝福與尊榮（創十四17-20）；（2）身為得尊榮的「守護者」，上帝揀選了他，地上的萬族都因他而蒙福（創十二1-3）。首先，亞伯拉罕救回被擄的姪兒羅得、擊敗基大老瑪聯軍後，「撒冷王麥基洗德帶著餅和酒出來迎接；他是至高神的祭司。他為亞伯蘭祝福……亞伯蘭就把所得的拿出十分之一來，給麥基洗德」（創十四18-20）。希伯來書七章解釋：「從來位分大的給位分小的祝福，這是駁不倒的理」（來七7）——麥基洗德象徵施恩者，儘管沒有人比亞伯拉罕有更大的榮耀，但麥基洗德比他更偉大，亞伯拉罕是這段守護關係中的「受護者」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                接著，神呼召亞伯拉罕：「我必叫你成為大國。我必賜福給你，叫你的名為大；你也要叫別人得福。為你祝福的，我必賜福與他；那咒詛你的，我必咒詛他。地上的萬族都要因你得福」（創十二2-3）。作者指出，這段應許包含守護關係的概念——「叫你的名為大」正與創世記十一章巴別塔建造者「為要傳揚我們的名」的自我追求形成鮮明對比：巴別塔的建造者想靠自己的能力成名，神卻主動應許要「叫」亞伯拉罕的名為大。<sup>10</sup><span style={cite}>（Christopher Wright相關論述。）</span>亞伯拉罕因此獲得多方面的尊榮：新的土地、眾多後裔、屬天的祝福、大名、成為他人祝福的源頭、蒙神保護的尊榮，以及成為「地上萬族祝福」的終極應許——亞伯拉罕將與神同工，成為先祖，祝福全世界。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">亞伯拉罕之約：貫穿全本聖經的福音軌跡</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                加拉太書三章8節說：「聖經既然預先看明，神要叫外邦人因信稱義，就早已傳福音給亞伯拉罕，說：萬國都必因你得福。」作者用一連串經文，描繪出「福音」如何從亞伯拉罕之約一路貫穿到啟示錄，構成完整的救贖故事軌跡：加拉太書三章8節，福音「傳」給亞伯拉罕，穿越兩千年直到基督時代；馬太福音一章1節，耶穌基督同時是「大衛的子孫」（君王）和「亞伯拉罕的子孫」（犧牲者），實現對以色列的應許；路加福音四章18節，基督宣告自己是以賽亞書「好消息」應許的實現；哥林多前書十五章1-4節，福音的核心是基督照聖經所說為罪受死、埋葬、復活，這裡的「聖經」與加拉太書三章8節是同一本聖經；羅馬書一章1、5、16節，福音是神的大能，要「在萬國之中叫人為他的名信服真道」，實現對亞伯拉罕的應許；羅馬書四章16節，應許「本乎信，因此就屬乎恩，叫應許定然歸給一切後裔」；馬太福音廿四章14節，「這天國的福音要傳遍天下，對萬民作見證」；啟示錄十四章6-7節，「永恆的福音」傳給「各國、各族、各方、各民」，教導他們敬拜創造天地的神——這一切都回應著神對亞伯拉罕最初的應許：地上萬族都要得福。湯姆．賴特總結：「『福音』是拿撒勒人耶穌的故事，也是關於以色列民的長篇故事中，最精采之處，這個故事講述獨一真神如何拯救世界。」<sup>11</sup><span style={cite}>（N. T. Wright.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                最後，作者強調亞伯拉罕的意義，如何延續到今日的教會與信徒身上：「從屬靈角度而言，我們的『先祖』是亞伯拉罕；既是基督徒，我們因信而得到救恩……那以信為本的人，就是亞伯拉罕的子孫」（加三7）。亞伯拉罕的家族相當於今日主的教會，這個信仰大家庭「有使命感的、全文化的、跨國際的」——當我們祝福世人時，我們的榮耀也會加添，因為我們與神同做祝福者，一同祝福世上其他家族。作者提出一個深刻的洞察：對於重視家庭、祖先和榮耀的多數世界未得之民而言，亞伯拉罕生平所展現的榮辱感——從單純的信心，到長久期待所造成的情感耗損，再到獻上以撒所形成家族對舉世的重要性——這些關鍵因素，或許正能吸引他們接受從亞伯拉罕而出的後代「耶穌基督」。
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
                '守護關係（恩庇－侍從關係）是古羅馬與聖經社會運作的必要架構：守護者提供物資、保護、機會，受護者以忠誠與尊榮回報，這套關係雙方地位不對等，卻是一世紀社會普遍且公開被期待的常態。',
                '第一世紀巴勒斯坦社會階級極度不平等（社會精英僅約2%人口），這正是守護關係如此盛行的社會背景，也是理解福音書、保羅書信中相關比喻的重要文化脈絡。',
                '聖經多處用守護關係詮釋神人關係：神的恩典（charis）與古代社會熟悉的施恩概念一致，「神愛世人，甚至將他的獨生子賜給他們」正是最偉大的守護者對受護者的恩典。',
                '「祝福」與「榮耀」在聖經中高度重疊，八福的希臘文makarios更貼切的翻譯應是「得榮耀」——耶穌重新定義了榮耀的來源：不是由世人、而是由天父來認同和賞賜。',
                '亞伯拉罕經歷了守護關係的雙重角色：先是麥基洗德的「受護者」，後成為神揀選、與神同工的「共同守護者」，透過他和他的後裔，地上萬族都要得福。',
                '從加拉太書三章8節「早已傳福音給亞伯拉罕」開始，作者串連馬太、路加、哥林多前書、羅馬書到啟示錄，證明全本聖經的福音敘事，都是神對亞伯拉罕最初應許「地上萬族都要因你得福」的延續與實現。',
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
              <h4 className="font-semibold text-gray-800 mb-2">用「守護關係」理解恩典，會不會讓救恩顯得像是一種「交換」，而非白白的恩典？</h4>
              <p className="text-gray-700 leading-relaxed">
                這是一個值得謹慎分辨的問題。守護關係確實涉及「回報」，但關鍵在於：受護者的回報（忠誠、感恩、讚美）並非「賺取」恩典的條件，而是對已經領受之恩典的自然回應。正如亞伯拉罕並非因為完美的表現才配得神的應許，而是先蒙揀選、蒙應許，才在信心中回應與順服。守護關係的框架幫助我們理解「恩典呼召回應」這個關係性的動態，而非把救恩簡化成一場等價交換的商業契約。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「我們與神同做祝福者」這個身分，對今日教會的宣教觀有何挑戰？</h4>
              <p className="text-gray-700 leading-relaxed">
                許多教會把宣教理解為「盡義務」或「完成大使命的任務清單」，但本章提供了一個更豐富的框架：宣教是信徒領受亞伯拉罕之約的尊榮身分後，自然而然活出的身分——我們不是被迫去做一件苦差事，而是被邀請「與神同做祝福者」，這本身就是一種莫大的榮耀與喜樂。這個角度的轉換，能幫助教會把宣教從「責任」重新框架為「特權」。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">亞伯拉罕故事中的「守護關係」框架，如何幫助我們向重視家族、人情義理的華人聽眾介紹福音？</h4>
              <p className="text-gray-700 leading-relaxed">
                華人文化對「知恩圖報」「人情往來」有深刻的直覺理解，這與守護關係的邏輯高度契合。用「亞伯拉罕蒙神大恩、又成為萬民祝福的管道」這個框架介紹福音，比起純粹的法庭式赦罪語言，更能連結華人聽眾對「恩情」「家族」「傳承祝福」的文化直覺，也更能說明基督徒領受恩典後「理當」成為祝福他人管道的內在邏輯。
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
              '你和你的教會將宣教視為當有的責任嗎？到怎樣的程度？你是否願意——與神同為祝福者、做基督的使者，渴望得到永恆的榮耀？',
              '八福若翻譯成「得榮耀」而非「有福了」，這對你理解登山寶訓、以及你自己的門徒生命，帶來什麼新的體會？',
              '回想你生命中曾經領受過的「守護者」恩惠（家人、師長、貴人），這如何形塑了你回應恩典的方式？',
              '「我們與神同做祝福者」——你目前的生活或服事中，有哪些具體的方式，正在活出這個身分？',
              '你所服事的族群是否重視家庭、祖先和榮耀？如果是，你會如何引用加拉太書三章7-9節，介紹亞伯拉罕的故事？',
              '從創世記十二章到啟示錄十四章，貫穿全書的「萬族得福」應許，如何擴大你對「福音」這個詞的理解，使其超越個人得救的範疇？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 用「守護關係」重新設計一堂宣教主日學</h4>
              <p className="text-gray-700 mb-2">
                以創世記十二章1-3節為核心經文，設計一堂教導：說明神賜給亞伯拉罕的尊榮與祝福，以及信徒今日如何承接「與神同做守護者」的榮耀身分。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🌍 用加拉太書向重視家族的朋友介紹福音</h4>
              <p className="text-gray-700 mb-2">
                如果你服事的族群重視家庭、祖先和榮耀，本週試著用加拉太書三章7-9節、25-29節，向他們介紹亞伯拉罕的故事，觀察這個角度是否比一般傳福音方式更引起共鳴。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，感謝祢是我生命中至大的守護者，將祢的獨生愛子白白賜給我。求祢幫助我，不只是被動領受祢的恩典，更能像亞伯拉罕一樣，甘心成為祢施恩的管道，把祢的祝福傳遞給身邊尚未認識祢的家人、朋友和萬族萬民。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
