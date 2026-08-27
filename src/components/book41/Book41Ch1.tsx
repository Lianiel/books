import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Globe, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book41Ch1() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-800 to-cyan-900 bg-clip-text text-transparent">第一部　1-1</h1>
        <h2 className="text-xl font-semibold text-gray-700">隨處可遇的未得之民</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">一則臉書貼文說起的故事</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                二○一三年七月二十日，作者沃爾納．米胥克（Werner Mischke）在臉書上發佈了一則充滿懊惱的貼文：他錯過了飛往佛羅里達州坦帕城的航班，原因是忘了帶筆電背包。他只好搭計程車回辦公室取回背包，往返約四十哩。載他的計程車司機來自索馬利亞，兩人在車程中聊了起來。司機提到自己固定會在星期四晚上，到一家名叫「朱巴紅海」的索馬利亞餐廳，跟老闆阿布一起看足球賽。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                可惜，作者那個星期四晚上沒能及時趕回家、去成朱巴紅海餐廳；但接下來連續兩個星期四晚上，他都去了。儘管阿布始終不在店裡，他卻和餐廳老闆巴希爾（Bashir）聊得很投機，彼此留下好印象，成了持續聯絡的朋友。這段看似偶然的插曲，正是這本書要談的現實：我們生活在一個多元文化交織的世界裡，「未得之民」不必遠渡重洋才能遇見——他們往往就在我們住處附近，開著計程車，經營著街角的一家小餐廳。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">我們生活在多元文化的世界</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                世界上有數以千計的種族、語言和文化。我們自己生活的「世界」——所在的城市、社區、學校、工作場所——比起以前的世代更加多元。隨著網路和社群媒體的普及，國際交流、接觸多元文化的機會也越來越頻繁。作者提到，光是在一天二十四小時內，他就透過臉書和住在南蘇丹托里特的宣教夥伴賽維里諾牧師、住在黎巴嫩的好友以撒牧師，以及索馬利亞計程車司機聊天談地——多元文化早已滲入日常生活的縫隙。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者引用了幾組具體數據來說明這個現象：《紐約時報》曾報導，儘管沒有確切數字，但部分學者認為住在紐約的居民所使用的語言多達八百種，遠超過紐約市公立學校的數目；皇后區的學生種族背景極為多元。<sup>1</sup><span style={cite}>（Sam Roberts, "Listening to (and Saving) the World's Languages," The New York Times, 2010.）</span>洛杉磯人口中，說多種語言的居民占57%，這座城市擁有全美最大的文化飛地，包括歷史悠久的菲律賓城、韓國城、小亞美尼亞、小衣索匹亞等。<sup>2</sup><span style={cite}>（Daniel Echevarria, "Top Multilingual U.S. Cities," 2010.）</span>作者的出生地——紐約州羅雀斯特市，人口約二十一萬，當地一個非營利組織專為移民開設英語教學課程。<sup>3</sup><span style={cite}>（ESOL Associates of Rochester, NY, 2013.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                約翰史東（Patrick Johnstone）更直言：「到二○五○年之前，白種人可能成為北美的少數民族。」<sup>4</sup><span style={cite}>（Patrick Johnstone, The Future of the Global Church, 2011, 5.）</span>布魯金斯研究所根據二○一○年美國人口普查指出，二○○○年到二○一○年間，美國兒童人口統計出現驚人變化：除了西班牙裔、亞裔、白人、黑人、印第安人之外，社會上還有一群新興少數民族，帶動全美兒童人口的增長；全美白人兒童在這十年間減少四百三十萬人，而西班牙裔和亞裔兒童卻大幅增加。全美近半數的州和三分之一的都會區，兒童人口全面下降，但新興少數民族兒童人數的增長，讓整體年輕人口下降的現象趨緩；德州增加的兒童人口，高達95%是西班牙裔；目前已有十個州和三十五個大都會地區，白人兒童人口成了少數族群。<sup>5</sup><span style={cite}>（William H. Frey, "America's Diverse Future," The Brookings Institution, 2011.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                潘傑（J. Payne）所著的《陌生鄰舍：移入，移出和使命》，也提供了很好的補充資料：截至二○○六年，多倫多是加拿大擁有最多移民的地區，都會區人口中，外國出生的人口占45.7%；從二○○○年到二○○七年，國際學生人數增加了一倍多，達到兩百多萬，主要前往美國、英國、德國、法國和澳洲；而紐西蘭、韓國、荷蘭、希臘、西班牙、義大利和愛爾蘭的增幅最大。<sup>6</sup><span style={cite}>（J. D. Payne, Strangers Next Door, 2012.）</span>二○一○年，移民占北美總人口的14.2%，西歐占12.4%，澳洲占22%，加拿大占21.3%，美國占13.5%，英國占10.4%。<sup>7</sup><span style={cite}>（Payne, 引自加拿大政府2006年人口普查資料。）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                跨文化研究專家史萊德（Robert Schreiter）觀察，今日世人遷徙的頻繁度可謂史無前例，這樣的現象帶來了文化衝擊。全球資本主義市場的擴展，創造了新興的世界金融和交易中心；為了尋求財富，或為了避開貧富差距造成的貧窮循環，這些因素帶動全球人口的遷徙，也造成部分地區文化衝突、人們爭奪有限資源。<sup>8</sup><span style={cite}>（Robert J. Schreiter, "Reconciliation as a Model of Mission," 2009.）</span>教會該如何回應這樣的處境？出生於韓國家庭、在美國長大的芝加哥北園神學院教授羅頌全（Soong-Chan Rah）提醒：美國教會需要面對不可避免的問題，為邁向下一階段做好準備——不久的將來，美國基督徒將由多元種族所組成，白人不再是多數；但很可惜，儘管組成分子不再以白人為主，美國福音派仍然持守過去的觀點和價值觀。<sup>9</sup><span style={cite}>（Soong-Chan Rah, The Next Evangelicalism, 2009.）</span>
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">多元文化的世界，多元民族的全球教會</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                近十年的基督教世界宣教文獻一再明確顯示：西方人不再處於一個從「西方傳到他方」的宣教世界中。時至今日，福音顯然已是「從任何地方傳到任何人」，正如埃斯科巴爾（Samuel Escobar）所言。<sup>10</sup><span style={cite}>（參見 Johnson and Ross, eds., Atlas of Global Christianity, 2009；Philip Jenkins, The Next Christendom, 2002/2011〔中譯本：《下一個基督王國》〕；Mark Noll, The New Shape of World Christianity, 2009。）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                《全球基督教人口分布研究》聚焦於「基督教人口密集區」位置的變遷，其結論值得留意：自從一九八○年起，南半球的基督徒人口超過了北半球基督徒人數，這是公元十世紀以來首次出現的現象；最明顯的增長出現在非洲，基督徒人口從一九○○年的一千萬增加到了二○○○年的三億六千萬。<sup>11</sup><span style={cite}>（Johnson and Ross, Atlas of Global Christianity, 52.）</span>詹金斯（Philip Jenkins）在《下一個基督王國》書中指出，全球教會正經歷巨大的人口變化：「如果在我們所處的環境中，發現每五個基督徒中，只有一個是非拉丁裔的白人，這樣的預測會令人震驚嗎？」<sup>12</sup><span style={cite}>（Jenkins, 108.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                鮑維克（Paul Borthwick）引用詹金斯的論述，也根據他自己過去在基督教世界參與服事的豐富經驗，發表看法：儘管西方世界向來在基督教歷史中位居主導地位，但現在基督教的人口不再以白人為主。<sup>13</sup><span style={cite}>（Paul Borthwick, Western Christians in Global Mission, 2012.）</span>蘇格蘭密西根大學的沃爾斯（Andrew Walls）長期進行教會趨勢觀察，他指出：基督教最大的變化是教徒人口分布中心的南移，歐洲和北美的基督教人口都呈現衰退，反而拉丁美洲、亞太地區，特別是非洲，都有顯著增長；目前所有證據都顯示，這種趨勢還會持續下去。<sup>14</sup><span style={cite}>（Andrew Walls, "Globalization and the Study of Christian History," 2006.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                基督教信仰南移的地區，擁有廣泛的語言、種族和文化底蘊，衍生出的現象是：懷疑西方價值的部分南半球地區，當地人們對福音的好奇心提升了。提安帑（Tiénou）中肯地說：「基督教重心的改變是好消息。」<sup>15</sup><span style={cite}>（Tite Tiénou, "Christian Theology in an Era of World Christianity," 2006.）</span>埃斯科巴爾以他在第三世界國家做得有聲有色的宣教事工為例分析：「宣教的動力不再出自居高位者或特權人士的支持……相對地，有一股神祕的力量，來自底層、卑微的人們。」<sup>16</sup><span style={cite}>（Escobar, 19.）</span>作者提醒讀者：沒錯，過去一百年基督徒的人數有驚人的成長，但要完成大使命，還有很多工作必須有人承擔。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">許多的「未得之民」和「未觸之民」</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                什麼是「未得之民」？什麼是「未觸之民」？根據約書亞計畫網站的定義：未得之民或極少接觸到福音的族群，是指當地的基督徒沒有足夠的人數和資源來對自己族群傳福音；起初約書亞計畫編輯委員會選定的標準是，當地的福音派基督徒不到人口的2%，並與基督信仰相關的信徒低於5%。<sup>17</sup><span style={cite}>（"Definitions," Joshua Project, 2013.）</span>「未觸之民」則是指該族群沒有積極進行教會植堂——根據國際宣教委員會（IMB）全球研究室的資料，「已觸之民」是指該族群與福音派信仰和實踐一致、正在推動教會植堂策略。要帶出具體的福音果效，至少需要四個基本條件：駐地的使徒性牧養；使用當地語言並致力於符合當地文化的工作；委身於長期宣教；傳福音的方式與植堂運動的目標一致。<sup>18</sup><span style={cite}>（同上。）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者利用約書亞計畫網站的資料庫，做過四次搜尋，關鍵字是「未觸之民」搭配「佛教」、「印度教」、「穆斯林」或「部落信仰」等宗教團體標籤，結果如下：佛教徒中，有十七個福音未觸之群體，每個群體都超過十萬人，共有一千九百零三萬人；印度教中，有272個福音未觸之群體，人口在十萬以上，總人數為二億四千六百五十五萬人；穆斯林中，有285個福音未觸之群體，人口在十萬以上，總人數為三億七千二百五十一萬人；還有三十五個福音未觸之部落宗教群體，人口在十萬以上，總人數是二千三百六十五萬人。撇開族群人口多寡因素，總共有4793個未觸群體，總人數高達七億三千五百零四萬人。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這些數字不容易拿捏得很精準。作者的朋友拉次寇（Mike Latsko）對未觸之民格外關切，他坦言：「『未觸』這個詞是宣教術語中最冒犯人的……也是對萬軍之耶和華的冒犯……對基督本身的冒犯……對聖靈的冒犯。」<sup>19</sup><span style={cite}>（Mike Latsko, "The Most Abominable Word," Mission Frontiers, 2013.）</span>作者也提醒，成千上萬的佛教徒、印度教徒、穆斯林和部落民族，都是未得與未觸之民，他們的文化和西方很不一樣——西方文化以個人主義和多元主義為特徵，與佛教、印度教、穆斯林或部落世界在文化上相距甚遠；非西方社會通常以群體為核心，而榮辱正是這些社會共通的文化底色。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">多元文化的世界是否為我們帶來好消息呢？</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者的回答是肯定的：我們有好消息，耶穌基督的福音。然而，他接連拋出一連串發人深省的提問：倘若我們所認知的福音，帶著西方文化的主觀色彩，以致耶穌的好消息不太能吸引來自第三世界的人呢？倘若可以用新的眼光閱讀聖經，如同聖經最初被書寫下來時那樣，具有豐富的文化視角呢？倘若我們能克服某些神學盲點，透過合理的管道，一改過去對福音的獨斷詮釋方式呢？倘若我們可以分享更大格局的全球福音，讓神的恩典為多元文化的鄰居帶來更多共鳴，不論他們近在比鄰、或遠在世界各地呢？倘若我們察覺舊約和新約社會中，有關榮耀與羞辱的核心文化價值，且發現這套價值觀更貼近我們多元文化的鄰居，甚至遠超過西方人所能理解呢？
              </p>
              <p className="text-gray-700 leading-relaxed">
                這，就是下一章要探討的內容——聖經，其實不是任何一個文化能夠獨佔的書。
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
                '一位索馬利亞計程車司機和一家索馬利亞餐廳的偶遇，說明「未得之民」不必遠渡重洋才能遇見——多元文化早已滲入我們日常生活的縫隙，未得之民可能就住在我們的城市、社區裡。',
                '紐約、洛杉磯、羅雀斯特市等地的語言與族裔統計數據顯示，西方城市的多元文化程度遠超過一般人的想像，白人在北美許多地區的兒童人口中已逐漸成為少數。',
                '全球基督教的人口重心正從北半球移向南半球：自一九八○年起南半球基督徒人數已超過北半球，非洲基督徒人口在一世紀內成長了三十六倍，宣教格局已從「西方傳到他方」轉為「從任何地方傳到任何人」。',
                '「未得之民」指福音派基督徒比例過低、缺乏自傳能力的族群；「未觸之民」則是尚未展開教會植堂運動的族群。約書亞計畫的資料顯示，佛教、印度教、穆斯林、部落信仰四大類未觸群體加總超過七億人。',
                '這些未得與未觸之民絕大多數屬於非西方、群體導向的文化，與西方個人主義、多元主義的文化底色差異極大——這正是本書要處理的核心課題：我們是否用了一套帶著西方文化盲點的福音框架，去向這些文化背景迥異的人傳福音？',
                '本章以一連串反問作結，鋪陳全書的核心命題：舊約與新約社會中根深柢固的「榮耀與羞辱」文化價值，或許比西方熟悉的「罪疚與清白」框架，更貼近今日世界上多數未得之民的處境。',
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
              <h4 className="font-semibold text-gray-800 mb-2">為什麼作者選擇用一則計程車上的閒聊，而不是宣教統計數字，作為全書的開場？</h4>
              <p className="text-gray-700 leading-relaxed">
                統計數字容易讓「未得之民」變成遙遠、抽象的群體標籤；但索馬利亞司機和巴希爾的故事，把未得之民還原成有名有姓、會一起看球賽、值得深交的朋友。這種敘事策略呼應本書後面反覆強調的觀點：福音的傳遞終究發生在具體的人際關係中，而不只是策略規劃或人口統計。作者用生活化的相遇經驗開場，也暗示讀者：跨文化宣教的起點，可能就在自己每天會經過的街角。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">全球基督教人口重心南移，對西方教會和華人教會分別意味著什麼？</h4>
              <p className="text-gray-700 leading-relaxed">
                對西方教會而言，這意味著必須放下「福音由我們傳給他們」的單向思維，正視自己在神學與宣教策略上可能存在的西方文化盲點。對華人教會而言，這則是一個提醒：華人教會既身處「多數世界」文化脈絡（更貼近榮辱文化），又深受西方宣教訓練與神學教材影響，正好處在一個獨特的位置，有機會成為連結兩種文化視角、幫助福音更貼近未得之民處境的橋樑。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「未得之民」與「未觸之民」的區分，對教會的宣教策略規劃有何實際意義？</h4>
              <p className="text-gray-700 leading-relaxed">
                這個區分提醒教會：光是某個地區「有基督徒存在」，不代表福音已經在當地生根、能夠自行傳承。「未觸之民」的定義聚焦於「教會植堂運動」是否已經啟動，這意味著宣教工作的終極目標不只是個人歸信，而是建立能夠自我繁殖、自我治理、自我供應的在地教會群體，讓福音的傳遞不再依賴外來宣教士的持續投入。
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
              '回想你居住的城市或社區，是否也有像索馬利亞計程車司機、巴希爾這樣，來自不同文化背景的鄰居？你與他們的互動深度到什麼程度？',
              '讀完本章的人口統計數據後，你對「未得之民」的想像，是遙遠的異國他鄉，還是可能近在你我身邊？這個認知上的轉變，會如何影響你對宣教的參與方式？',
              '「未得之民」與「未觸之民」的定義，讓你重新思考教會過去對「宣教已經完成」的理解嗎？',
              '作者提到，西方福音派教會組成分子不再以白人為主，卻仍持守過去的觀點和價值觀。你觀察自己所處的教會，是否也存在類似「處境已經改變，但思維方式尚未跟上」的落差？',
              '本章結尾一連串的反問——「倘若我們所認知的福音，帶著西方文化的主觀色彩……」——哪一個問題最觸動你？為什麼？',
              '你認為華人教會在「西方福音框架」與「多數世界榮辱文化」之間，處於什麼樣的位置？這對你所屬教會的宣教策略會有什麼啟發？',
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
              <h4 className="font-semibold text-green-700 mb-2">🗺️ 繪製你的「身邊未得之民地圖」</h4>
              <p className="text-gray-700 mb-2">
                本週花點時間，留意你日常會接觸到的人——計程車司機、店家老闆、鄰居、同事——記下其中來自不同文化或信仰背景的人。試著像作者一樣，主動再多聊幾句，認識他們的故事，而不只是完成一次交易或短暫的招呼。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 查詢一個你感興趣的未觸群體</h4>
              <p className="text-gray-700 mb-2">
                上約書亞計畫網站（Joshua Project）搜尋一個你有負擔或好奇的族群，了解他們的人口、地理分布與福音接觸現況，為他們代禱一週。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，求祢打開我的眼睛，讓我看見祢已經把多元文化的世界，安放在我每天經過的街角。求祢賜給我一顆願意認識、願意傾聽的心，不再把『未得之民』當作遙遠的統計數字，而是當作祢所愛、也呼召我去愛的鄰舍。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
