import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Eye, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book41Ch3() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-800 to-cyan-900 bg-clip-text text-transparent">第一部　1-3</h1>
        <h2 className="text-xl font-semibold text-gray-700">宣道盲點——何以對榮耀與羞辱的文化處境視而不見？</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <p className="text-gray-700 leading-relaxed mb-3">
              本章探討榮辱價值這個聖經中關鍵的文化價值觀，為何常被忽略的三個理由：第一，與清白/罪疚相比，榮/辱議題在神學探究上廣泛被忽略；第二，相對之下，這是一個較新的研究領域，不論是用來理解多數世界的人們，或是用在釋經方面，榮/辱因素最近才被重視；第三，盲點經常發生，這是自然的現象——每位身處社會、文化中的基督徒，無論生命成熟度如何，都難免有神學上的盲點。<sup>1</sup><span style={cite}>（另有第四個原因：羞辱作為禁忌話題，教會不知不覺瀰漫著羞辱感，領導者面對這些問題可能感到不舒服而抗拒探究。）</span>
            </p>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">榮/辱觀念，連牧師、神學家都忽略</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                弗雷斯特（John Forrester）以牧者身分談論這個盲點：「西方的牧師常遇的盲點，一言以蔽之，就是缺乏榮/辱觀念。我們在神學院沒接觸羞辱這方面的教導，我們也沒有這方面的神學閱讀素材，聖經內容也沒有直接碰觸這個議題，加上我們在周圍人群中也沒有察覺這個現象，羞辱自然不會是我們牧養關照的一部分。」<sup>2</sup><span style={cite}>（John A. Forrester, Grace for Shame, 2010, 9.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者親自到亞利桑那州鳳凰城神學院圖書館，用簡易關鍵字在現有神學辭典中查詢「罪」（guilt）和「羞辱」（shame），發現直到一九九六年，「羞辱」才出現在艾爾衛編寫的神學字典中；有趣的是，二○○○年出版的字典都沒有出現「羞辱」的條目，只有戴尼斯和科坎南撰寫的《全球神學大辭典》詞條較為廣泛，但絕大多數西方牧師不太可能使用這類具備全球視野的神學辭典。福音派學者田奈特指出，《福音派神學評論》期刊創始人尼寇斯早已察覺這個問題：基督教神學家「很少強調救恩是為了榮耀神，鮮少把罪的顯露視為羞恥，也很少把接納的過程視為榮耀的恢復」。<sup>3</sup><span style={cite}>（Bruce Nicholls, "The Role of Shame and Guilt in a Theology of Cross-Cultural Mission," 2001.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                更根本的原因，或許與系統神學的研究方式有關：一項針對傳統系統神學主流教科書所做的調查顯示，「罪疚」在索引中頻頻出現，但「羞辱」一詞只出現在其中一本教科書的索引中<sup>4</sup><span style={cite}>（作者調查Berkhof、Thiessen、Shedd、Thielicke、Pannenberg、Erickson、Garrett、Grudem等系統神學教科書，唯一論及羞恥的是吉斯勒《系統神學》第三卷。）</span>——儘管「罪疚」及其相關衍生字，在舊約中出現了145次、在新約中出現十次；而「羞辱」及相關衍生字，在舊約中出現了近三百次、在新約中出現四十五次，這種忽視現象持續存在。作者確信，就聖經觀點而言，一旦離了基督，人的角色是由罪疚、恐懼和羞恥構成，這樣的切入點也將幫助多數世界的人理解基督工作帶來的強大生命力量。<sup>5</sup><span style={cite}>（Tennent, 92-93.）</span>
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">榮耀與羞辱為嶄新的探索領域</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                產生盲點的第二個原因，與這是個新領域有關。根據田奈特的說法：「潘乃德（Ruth Benedict）是第一位提出這個觀點的人類學家：西方文化以罪疚為基礎，而東方文化以恥辱為基礎。」<sup>6</sup><span style={cite}>（Tennent, 79；潘乃德的書寫於一九四六年。）</span>此後，一系列重要著作陸續問世：馬利納作為研究榮與辱關鍵文化價值的先驅，其《新約世界：文化人類學的見解》於一九九三年首度發表；尼瑞一九九八年出版的《馬太福音中的榮與辱》，是描述古希臘羅馬文化榮辱感的經典著作；在中東地區服事三十年的跨文化教會植堂者穆勒（Roland Muller），著有《打開閉鎖的福音之門》（華神出版）與《使者、信息、社區》，提供了罪疚與清白、羞辱與榮耀、恐懼與權能三種世界觀的比較；德西瓦二○○○年出版《榮耀、守護關係、親族和潔淨：另眼看新約》，用社會科學方法探究新約有顯著貢獻；汝耶（Robert Jewett）二○○七年出版的羅馬書評論廣泛探討榮辱文化；弗雷斯特二○一○年出版的《恥辱中看見恩典：被遺忘的福音》對牧者特別具實用性；史托奇二○一二年出版《從羞辱中尋求恢復》；韋爾奇同年出版《翻轉羞辱》，以基督徒教牧觀點寫成；田奈特本人二○○七年出版的《基督教神學》第四章專章探討人類學與羞辱概念；吳榮二○一二年出版《保存上帝的面子：從榮與辱談中國文化處境的救恩》，整合改革宗神學與聖經榮辱價值觀；克魯克二○○四年出版的《觀點轉換》則深入探討使徒保羅歸信與宣教事工中的守護關係與榮辱動力。<sup>7</sup><span style={cite}>（詳細書目見各章附註，其中「守護關係」即patron-client relationship，或譯「恩庇－侍從關係」。）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                此外，布朗（Brené Brown）雖非基督教學者，但身為人母、教育家和社會科學研究者，她對羞恥與忍受力的研究，作者認為可以為宣教事工帶來反思；她二○一○年和二○一二年發表的兩本作品，讓「羞恥」這項議題成為世人認真探討研究的領域，她的兩次TED演說觀看次數超過一千三百萬次。<sup>8</sup><span style={cite}>（Brené Brown, Daring Greatly; The Gifts of Imperfection.）</span>作者總結：在整個教會歷史發展過程中，這些學者提供的見解和研究心得，到了二十世紀九○年代以後才出現，像一股清新泉水注入神學領域。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">神學盲點是常見現象——吳榮的情境化圖解</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                第三個對榮辱文化有盲點的原因是：盲點是人性的一部分。人們如此有限，如何能在靈性、智力和文化方面，完全理解這位無限的上帝？根本不可能。吳榮在《保存上帝的面子》中，用清楚的圖解說明文化處境化的歷程：圖中頂部橢圓代表「聖經真理」，左邊橢圓代表「神學」，右邊橢圓代表「基督徒努力宣揚福音的文化脈絡」。此圖的重點訊息是：聖經真理大於神學，因為不管一個人的神學有多高明，都不及聖經本身能涵蓋全面完整的真理。備受推崇的神學家保羅．赫伯特（Paul Hiebert）論述聖經真理、啟示與神學之間的區別：「前者是上帝賜予的啟示，後者是人類對這種啟示的理解，兩者不能完全畫上等號……我們的神學是我們在我們的處境下對聖經的理解；這可能是對的，但這種理解是局部的，而且受制於我們自己的想法，為了回應我們的問題。」<sup>9</sup><span style={cite}>（引自Paul Hiebert, "The Gospel in Human Contexts," 2010, 93.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                吳榮圖解中標示了六個區域：第一區是神學與聖經真理重疊、卻與文化背景不一致的地方，聖經教導在此與文化發生對抗；第二區是「文化在不知不覺中接受聖經的範疇和價值」，但不屬於自己神學的地方，這正是發生盲點的區域；第三區是價值觀、信仰與聖經真理、神學和文化處境都一致的理想地帶；第四區是神學中被文化處境接納、卻不屬於聖經真理的特定價值觀<sup>10</sup><span style={cite}>（如結合美式消費主義的「成功神學」，以及二戰期間德國基督教運動刻意創造、用以支持大屠殺的神學論述——參Susannah Heschel, The Aryan Jesus, 2008。）</span>；第五區是屬於神學一部分、卻既不符合聖經也不與文化處境交集的信仰；第六區則是文化背景中，既不符合聖經、也不屬於神學的信仰和價值觀。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                吳榮解釋，福音的適度情境化需要在整體聖經真理、自己的神學和文化情境之間持續對話，他稱之為「對話模式」。<sup>11</sup><span style={cite}>（Wu, Saving God's Face, 52-53.）</span>他引用紐畢真（Lesslie Newbigin）的話：「我們必須從基本的事實切入，純粹的福音根本不存在；這意味著，福音的某些部分不能沒有透過文化體現……每一種福音詮釋都需透過某種文化形式表達。」<sup>12</sup><span style={cite}>（Lesslie Newbigin, The Gospel in a Pluralistic Society, 1989, 144.）</span>諾爾（Mark Noll）也提出同樣的觀點：「西方與非西方之間的對比，絕不是在於『沒有文化的基督教』與『文化嵌入式的基督教』之間，而是在於『文化嵌入式基督教』之間的多元對比。」<sup>13</sup><span style={cite}>（Noll.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                第二區正是盲點發生的地方：文化不知不覺接受了聖經的範疇和價值觀，但傳教士仍試圖拒絕這種文化，並批判實際上不符合聖經或當地文化的教導——「個人偏見可能會導致對文化洞察力的否定，視之為不合理。」<sup>14</sup><span style={cite}>（Wu, 53.）</span>榮辱神學和文化問題正是與第二區一致：據估計，世界上有70%到80%人民的文化共識是集體主義方式，而不是個人主義<sup>15</sup><span style={cite}>（引自 Triandis, 1989；Malina and Neyrey 估計世界80%的人屬集體主義文化。）</span>，因此，與西方人相比，榮/辱是一種很有影響力的價值觀；但大多數西方神學家向來忽視榮辱文化，系統神學也完全忽略了這股動力。吳榮補充：「從中國人的角度來看，西方神學家忽視了聖經的一些重要觀點，如榮/辱文化、群體認同、偶像崇拜和家庭孝道。」<sup>16</sup><span style={cite}>（Wu, 54.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                關於非洲的議題，沃爾斯（Andrew Walls）寫道，西方神學對於非洲生活的實際認知格局太小了：「西方的神學多半反映啟蒙運動的世界觀，這是一種狹隘的世界觀……論及像巫術、魔法這方面的問題，他們完全無計可施，因為這些並不存在於啟蒙運動的世界裡。」<sup>17</sup><span style={cite}>（Walls.）</span>但神學盲點的發生，不僅顯示神學知識的有限，更提供了讓人認識耶穌基督、更深經歷神的管道。沃爾斯進一步指出：跨文化福音事工的擴展，即是更充分了解基督的管道——每一種基督教文化的信仰展現，都應該像猶太人和希臘人在初代教會時期一樣，將自己歸信基督後的生活方式，展現出信仰帶來的文化特徵；任何群體的基督信仰，代表其自身文化的一部分，需要透過其他人來互補或修正。<sup>18</sup><span style={cite}>（Walls.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                除去神學盲點，能引導我們更充分地表達耶穌在我們的生活、家裡、教堂和社區裡；這對於提高基督徒在跨文化宣教的果效，也相當重要。<sup>19</sup><span style={cite}>（可參 Paul Hiebert, "The Flaw of the Excluded Middle," Missiology, 1982。）</span>神的話語的權威高於所有文化，同時也能包容不同的文化觀點和風格——對這個矛盾之處，下一章將以「聖經真理的帳幕」為主題繼續探討。
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
                '西方教會對榮辱文化的三大盲點成因是：神學辭典與系統神學教科書長期忽略「羞辱」議題、榮辱研究是近三十年才興起的新興學術領域、以及盲點本身是人類有限性下難以避免的常態現象。',
                '神學辭典調查與系統神學教科書索引比對顯示驚人落差：「罪疚」在舊約新約合計出現超過150次且廣受神學著作討論，「羞辱」在舊約新約合計出現超過340次，卻幾乎不見於主流系統神學教科書的討論。',
                '一九九○年代後，馬利納、尼瑞、穆勒、德西瓦、田奈特、吳榮、克魯克等學者的著作，如清新泉水般注入神學領域，標誌著榮辱神學研究從邊緣走向成熟。',
                '吳榮的情境化圖解，用「聖經真理、神學、文化脈絡」三個橢圓的交集，清楚指出「盲點」發生在文化已不知不覺接受聖經價值觀、卻未被自己的神學體系承認的區域——這正是榮辱文化在西方神學中的處境。',
                '全球約70%至80%人口的文化屬於集體主義，而非西方熟悉的個人主義，這意味著忽視榮辱動力的神學框架，實際上與大多數世界人口的文化現實脫節。',
                '除去神學盲點不只是知識上的補課，更關乎能否更充分地在生活、家庭、教會與社區中活出基督、並提升跨文化宣教的果效——這是本書貫穿全書的核心關懷。',
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
              <h4 className="font-semibold text-gray-800 mb-2">吳榮的「第四區」例子（成功神學、納粹德國基督教運動），對我們辨識今日的神學偏差有何提醒？</h4>
              <p className="text-gray-700 leading-relaxed">
                第四區代表「被文化處境接納、卻不屬於聖經真理」的神學，這是最危險的一種盲點，因為它披著神學的外衣，卻實際上是文化偏見的產物。作者舉的兩個例子——迎合消費主義的成功神學、迎合種族主義的納粹基督教——都提醒我們，任何時代的教會都可能在不自覺中，讓某種強勢文化價值觀滲透進「神學」的外殼裡。這對今日教會的提醒是：辨識神學論述背後是否夾帶著特定文化議程，是每個世代信徒都需要操練的分辨能力。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">為什麼「盲點是人性的一部分」這個承認，反而是謙卑而非消極的態度？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者並沒有把西方神學家描繪成刻意忽視榮辱文化的反派，而是指出盲點源自人類認知的有限性——這是所有文化的神學家都無法倖免的處境，並非西方獨有。這種論述方式，一方面避免了對西方神學傳統的全盤否定，另一方面也邀請所有文化背景的信徒，用更謙卑的態度面對自己神學認知中可能存在的死角，而不是彼此指責「誰的盲點比較嚴重」。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">榮辱神學研究是近三十年才興起的「新領域」，這對華人教會而言是危機還是機會？</h4>
              <p className="text-gray-700 leading-relaxed">
                由於這是相對新興的研究領域，代表全球教會（包括西方教會）在這方面的神學積累都還不算深厚。對長期身處榮辱文化、卻主要仰賴西方翻譯神學教材的華人教會而言，這其實是一個獨特的契機——華人信徒對榮辱動力有第一手的生活體會，若能結合扎實的釋經功底，反而有機會在這個新興領域做出貢獻，而不只是被動接收西方學術成果。
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
              '回想你所受過的神學裝備或聽過的講道，「罪疚得赦免」和「羞辱得醫治」這兩個主題，出現的頻率是否明顯不對等？',
              '吳榮的情境化圖解中，你能否想到一個自己教會或個人信仰中，屬於「第二區」（文化已接受聖經價值、卻未被神學承認）的例子？',
              '「盲點是人性的一部分」這句話，會不會讓你對自己過去堅持的某些神學立場，多一分謙卑和開放？',
              '身為華人信徒，你認為自己在羞辱動力上的親身經驗，能為教會的神學反思帶來哪些西方神學家未曾觸及的洞見？',
              '本章列舉的多本榮辱神學著作，有哪一本的書名或觀點，特別引發你想進一步閱讀的興趣？',
              '如果你是一位神學院教師，讀完本章後，你會如何調整系統神學或宣教學課程的內容？',
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
              <h4 className="font-semibold text-green-700 mb-2">📚 查一查自己常用的神學工具書</h4>
              <p className="text-gray-700 mb-2">
                翻開你書架上或常用的聖經字典、神學辭典，查詢「羞辱」「榮耀」條目的篇幅，與「罪」「救恩」條目相比，是否也存在本章所描述的失衡現象？記下你的觀察。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 用吳榮的圖解，檢視自己的神學認知</h4>
              <p className="text-gray-700 mb-2">
                拿一張紙畫出三個交疊的圓圈（聖經真理、我的神學、我的文化處境），試著寫下幾個你能想到、屬於「第二區」（文化已默默接受、卻未被自己神學承認）的信仰經驗。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，求祢光照我心中看不見的死角，讓我謙卑承認自己的神學認知有限，也不完全。求祢幫助我不僅重視罪疚得赦免的信息，也同樣看重羞辱得醫治的福音，好使我能更全面地把耶穌基督的好消息，傳給身邊每一個文化處境不同的人。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
