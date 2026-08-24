import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Waves, Star, Search, HelpCircle, Check } from 'lucide-react';

const quote = "border-l-4 border-emerald-300 bg-emerald-50 pl-4 py-3 mb-3";
const quoteText = "text-emerald-800 leading-relaxed italic";

export default function Book40Ch16() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-800 to-orange-900 bg-clip-text text-transparent">第十六章</h1>
        <h2 className="text-xl font-semibold text-gray-700">第七誡（六）：不可姦淫——同性戀</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          「凡勞苦擔重擔的人，可以到我這裡來，我就使你們得安息。」（太11:28）
        </p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Waves className="w-5 h-5 text-amber-800 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">一、一般人對同性戀的看法</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                一、認為是「罪」。<br />
                二、認為是「病」。<br />
                三、認為是「正常」的，人不可以反對他們。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">二、聖經對同性戀的看法</h3>
              <h4 className="font-semibold text-amber-800 mb-2">一、認為同性戀是「罪」</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                利未記十八章22節：「不可與男人苟合，像與女人一樣；這本是可憎惡的」；利未記廿章13節：「人若與男人苟合，像與女人一樣，他們二人行了可憎的事，總要把他們治死，罪要歸到他們身上」；羅馬書一章26-27節：「因此，神任憑他們放縱可羞恥的情慾．他們的女人，把順性的用處，變為逆性的用處，男人也是如此，棄了女人順性的用處，慾火攻心，彼此貪戀，男和男行可羞恥的事，就在自己身上受這妄為當得的報應」；哥林多前書六章9-10節：「你們豈不知不義的人不能承受神的國嗎？不要自欺！無論是淫亂的、拜偶像的、姦淫的、作孌童的、親男色的、偷竊的、貪婪的、醉酒的、辱罵的、勒索的，都不能承受神的國」；提摩太前書一章9-10節：「因為律法不是為義人設立的，乃是為不法和不服的，不虔誠和犯罪的，不聖潔和戀世俗的，弒父母和殺人的，行淫和親男色的——」。
              </p>
              <h4 className="font-semibold text-amber-800 mb-2">二、認為同性戀是可以得勝、得醫治的</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者依此立場，進一步從「同性戀性傾向」的定義、成因、因應方式等角度來討論這個議題，說明如下。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">三、「同性戀性傾向」的完整定義</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                <span className="font-semibold text-amber-700">一、以年滿20～28歲來判斷：</span>因為青春期前的年少者、兒童，會經歷同性密友期（12-17歲），最渴望結交同性死黨，同性玩鬧居多，有時會有偶發同性性行為，因此容易混淆。所以，很多自認為同性戀者並非真正的同性戀者。根據2013年的統計，受訪的中學生中，自認同性戀與雙性戀者有70％，但幾年後再次受訪時，又聲稱自己已恢復異性戀。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                <span className="font-semibold text-amber-700">二、</span>無法克制的對同性產生性衝動與性幻想，每週至少三次，並且連續持續六個月以上，而且不包含身處單一性別的環境（例如，男女校、軍隊、監獄、遠洋、偏遠地區）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-amber-700">三、</span>對異性的身體有無法克制的排斥與厭惡。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">四、人為何會有同性戀的問題？</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者主張，同性戀與基因無關，非天生的，是後天的環境造成的，認為目前同性戀的「先天論」依舊毫無生物科學根據，反而很多論證證明其「早期後天」的可能性。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者也提到，今天，許多同志們慢慢接受同運團體的教導：「性侵不是性侵，是兒少性自主的覺醒，不是個傷害，不是個問題，更不是形成同性戀的因素，你天生傾向如此」。作者認為，急於處理掉羞恥感的同志，會非常願意擁抱這種說法，因為一石三鳥：既可以丟掉羞恥，又可以逃避面對處理性侵問題的痛苦，最重要的是賦予他（或她）目前性向的正當性而無需與之搏鬥。
              </p>

              <h4 className="font-semibold text-amber-800 mb-2">同性戀的可能成因（作者觀點）</h4>
              <div className="space-y-2">
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">一、</span>童年同性密友期（約12-17歲），無法認同同性群體或是得不到同性群體的認同，被同性排斥。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">二、</span>青春期性慾旺盛時，與異性未能有良性的互動，或與同性有過度親密的接觸。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">三、</span>童年或青少年時期，被同性侵犯或有同性性經驗（據研究，有80%的同性戀者小時候有此經驗，而其中又有80%是熟人）。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">四、不健康的親子關係：</span></p>
                <p className="text-gray-700 leading-relaxed pl-4">
                  （一）強勢的母親、軟弱的父親，以致缺乏強有力男性可倣效，沒信心與女性親近。<br />
                  （二）有些男同志父親缺席，沒有男性模範，又與母親過度親密，認同母親的性別更多，但在丈夫缺席的情況下，這個母親容易因不安全感而對兒子掌控，讓兒子又愛又恨，儘管自己認同女性的性別，可是又對女人從心裡討厭，心裡渴望得到有個父親形象的人的肯定和愛，逐漸形成一個很大的洞（void）。<br />
                  （三）母親不信任、害怕女性；教導兒子如此（相反亦然）。<br />
                  （四）男生週圍都是女生，以致角色錯認。<br />
                  （五）父母希望女孩是男孩（相反亦然）。
                </p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">五、</span>惡劣的異性戀經驗（其中以女同性戀者為大宗）：例如，曾被異性拒絕，甚至曾被異性性侵。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">六、</span>缺乏與異性接觸的機會：例如，男女校、軍隊、監獄、遠洋、偏遠地區、修道院等。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">七、</span>受媒體影響：同性戀A片或動漫。</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">五、若有同性戀傾向時當如何面對？</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                <span className="font-semibold text-amber-700">一、抗拒：</span>正如單身者抗拒情慾誘惑一樣。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-amber-700">二、求主醫治：</span>透過禱告及輔導。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">六、如何對待同性戀者？</h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                <span className="font-semibold text-amber-700">一、神愛「罪人」恨「罪」：</span>我們無法認同他們的行為，但接納及愛他們。對於這群特別敏感，各項能力與藝術天分又奇佳的朋友們，我們應該以接納與關懷對待他們，以及他們所受過的傷（不論他們自己曉不曉得，或願不願意承認），而非過度針對其無法自力扭轉的性傾向。我相信只要身為人類，一定有許多不堪的過去與回憶，旁人需要的是傾聽與接納即可。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-amber-700">二、幫助他們接受神的醫治：</span>透過禱告及輔導。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">七、見證：耶穌——同性戀者的盼望</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                書中收錄了一位化名「詹姆士」的弟兄的第一人稱見證，摘要如下：
              </p>
              <div className={quote}>
                <p className={quoteText}>
                  「從我有記憶以來，我就喜歡看男性的身體……高一時，我看著電視上的同志話題脫口秀，心裡開始問：『我是同性戀嗎？』於是掙扎開始了。接下來的八年，我與幾百個和我個人性傾向有關的問題不斷地角力著……我決定永遠都不會告訴別人我內心中的掙扎，我會壓抑它們。但在大學裡待得越久，這種壓抑的方法就越不管用。我變得更孤單、更難受、更沮喪。」
                </p>
                <p className={quoteText + " mt-2"}>
                  「2002年11月11日，我和一位舊識發生了性關係。凌晨起床時，我意識到自己睡在一張幾乎是陌生人的床上，那時，我有難以言喻的罪惡感，就像自己是世上最骯髒的人。我想死，甚至認真地考慮過要去這麼做。我開車回家，鑽進宿舍的床，關上門，哭了整整兩天……於是，我打電話給我以前的牧師陶德。『陶德，我想我是個同性戀。』聽了我將近1個半小時的傾訴以後，他先是沉默了很長一段時間，然後說：『哦！詹姆士！我非常非常抱歉！』『什麼？為什麼抱歉？』陶德繼續說：『我非常非常抱歉這些年來你得獨自承受這些。』」
                </p>
                <p className={quoteText + " mt-2"}>
                  「他沒有論斷我，沒有定我的罪，他只是愛我。這是我從來沒料到過的。陶德告訴我：『我會委身來協助你，我要你知道，無論怎樣，你是被愛的，我永遠會在這裡。』……陶德問：『詹姆士！你真的認為上帝會因為你曾經做過的事而大吃一驚嗎？正因你的罪，耶穌才會來到世上為我們受死。難道你以為基督為所有的罪死，除了同性戀？』」
                </p>
                <p className={quoteText + " mt-2"}>
                  「我知道基督想與我建立關係，於是，我回應基督，求祂赦免我所有的罪，幫助我成為祂希望我成為的樣式。當我禱告時，並沒有火花發生，但祂真的開始改變裡面的我。接下來的兩年，基督與我一同經歷了我心靈的醫治……神教導我有關我是誰，我第一次經歷到內在的潔淨，幫助我從孩童時期被性侵的經驗中得醫治。」
                </p>
                <p className={quoteText + " mt-2"}>
                  「而現在，我已經結婚7個月了，我和我太太所經歷到的親密感，遠遠超過我與同性戀者的關係，我不會拿這世界上任何事物來交換我與她的關係……在過去幾年，我遇到一些在同性戀中掙扎的大學生，我都告訴他們『你不需要在來到耶穌之前先把一切都清乾淨。』如果這個世界、你的家人、教會、政客或其他人拒絕你，記得耶穌在世的時候，可是處理『拒絕往來戶』的專家呢！請聽祂對你的邀請：『凡勞苦擔重擔的人，可以到我這裡來』（太11:28）。」
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">〈附錄〉駁「同性婚姻」及其法制化提議</h3>
              <p className="text-gray-500 text-sm mb-3">（節錄台大教授柯志明文章）</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「婚姻」意指，締結的男女雙方誓願相互委身，彼此忠誠，樂於共同生養兒女，建構家庭，維繫倫常秩序，以實現人性價值與生命意義的盟約關係。這種盟約關係所涉及的不只是締結婚姻者之間的情感與意願之實現，更是整個社會、國家與人類的普遍價值之實現，因為，現實觀之，這種婚姻是整個人類社會得以穩固、延續、興盛、有意義、有價值的基礎。其中，「生養兒女」尤其要被高舉強調，因為無此原則，整個人類社會文化無法延續，生命之尊貴、價值與意義皆不可能實現。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                確實，「生養兒女」正是婚姻的核心意義所在，正是婚姻最具創造性之所在。生養兒女絕非如當代激進反婚姻分子與性解放分子所言，只是一繁衍後代的生物行為或傳宗接代的家族行為。「生養兒女」同時是延續人類生命與承傳並創造人類文化價值不可取代的環節，它不只是生物行為或偏狹的家族行為，而更關乎實現整個人類文化與價值的普遍人性行為。「婚姻法」的目的就在肯定、保障、維護這種能延續人類尊貴生命而其價值無可取代的婚姻盟約。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                因此，婚姻關係不是一般的人倫關係（如親子、兄弟、姊妹、師生、朋友、同事、同道等等），而是最基本、不可取代、珍貴與特定的人倫關係；它是一切倫理關係的根源，所有人倫關係都從婚姻關係衍生出來。據此，作者認為所謂的「同性婚姻」不是婚姻，因其違反了他所定義構成婚姻的本質要件：男女兩性，也就是異性。作者強調，並不否定同性戀者渴望並愛戀同性對象的真實情感與愛情，也不否定同性戀者與其同性戀對象可以相互委身，彼此忠誠，共同生活一起。但作者認為，這都不足以構成婚姻，因為在他的定義中，婚姻不只是有性情感、性關係、相互委身、彼此忠誠、共同生活一起而已。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者主張，婚姻必須是符合能創造並延續人類生命，共構社會群體，維繫倫常秩序，承傳文化價值的男女兩性關係，這是他所認定婚姻的必要條件；並主張所謂的「同性婚姻」完全違反能生養兒女的這個婚姻之可能性，故其本質上不是婚姻。
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
                '本章立場屬於傳統保守派基督教倫理觀：依據利未記、羅馬書、哥林多前書等經文，認定同性性行為是聖經定義的罪；同時主張同性戀傾向並非不能改變，可以透過禱告、輔導尋求「醫治」，這是書中「認為同性戀是可以得勝、得醫治的」立場的基礎。',
                '書中特別提醒青春期「同性密友期」（12-17歲）常見的偶發同性親密經驗容易被誤認為同性戀傾向，並引用統計數據說明許多青少年自認的性傾向會隨時間改變，藉此主張判斷「同性戀性傾向」需要較嚴謹的年齡與持續時間標準。',
                '書中對同性戀成因的分析（親子關係、同儕排斥、性侵經驗、性別角色混淆等）反映的是特定基督教輔導傳統的觀點，這類「後天環境成因論」在學術與心理學界存在爭議，讀者應知道這是本書作者的立場陳述，而非學界公認的定論。',
                '本章強調「神愛罪人恨罪」的牧養原則——書中主張不認同同性性行為，但呼籲以接納、傾聽、關懷對待同性戀者本身，特別留意他們可能承受過的傷害，而非單純針對性傾向本身加以排斥論斷。',
                '書中收錄的第一人稱見證，敘述一位弟兄在牧者「先表達抱歉而非論斷」的回應中經歷被接納的轉折，並描述自己後續的心理醫治歷程與婚姻生活；附錄則節錄學者文章，從「生養兒女」的角度論證反對同性婚姻法制化的立場。',
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
              <h4 className="font-semibold text-gray-800 mb-2">見證中「牧者先說抱歉而非定罪」的回應方式，對教會牧養同性戀掙扎者有何具體示範？</h4>
              <p className="text-gray-700 leading-relaxed">
                見證中最打動人心的轉折，不是任何神學論證，而是牧者陶德聽完告白後第一句話是「我很抱歉這些年來你得獨自承受這些」，而非立刻宣講立場或責備。這個牧養細節提醒教會，無論神學立場如何，第一步永遠是傾聽與陪伴受苦的人，讓對方先感受到被愛與被理解，才有可能展開真實的信仰對話——這與本章所述「神愛罪人恨罪」的原則相呼應，也是許多牧養失敗案例中最容易被忽略的一步。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">書中對同性戀成因的討論屬於特定神學／輔導傳統的立場，讀者應如何看待這類與主流學術見解有落差的內容？</h4>
              <p className="text-gray-700 leading-relaxed">
                性傾向的成因目前在心理學與醫學界仍有多元的研究與持續的討論，本書作者所持的「後天環境論」是特定基督教輔導圈內流傳已久的觀點，但並非學術界的共識結論。作為讀者，理解一本書忠實反映了作者所屬群體的神學立場是重要的，但也應該意識到這類命題存在爭議，不宜將書中陳述直接等同於科學定論，這種分辨能力本身也是成熟信仰思辨的一部分。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">面對同性戀議題時，教會如何在「持守信仰立場」與「避免傷害弱勢群體」之間找到智慧的平衡？</h4>
              <p className="text-gray-700 leading-relaxed">
                這是當代教會界持續存在張力與多元立場的議題。無論教會最終抱持哪一種神學立場，本章至少提供了一個共通的提醒——書中反覆強調的「以接納與關懷對待他們、留意他們所受過的傷」，是任何立場的教會都不該迴避的牧養責任。討論教義立場與展現對人的尊重、傾聽和關懷，兩者不必然互相排斥，這也是許多教會在實際牧養處境中持續學習的功課。
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
              '見證中牧者陶德的第一句回應是「我很抱歉」而非任何教義宣講，這對你自己面對身邊正在掙扎的人時，有何實際的提醒？',
              '你如何理解「神愛罪人恨罪」這個原則？在實際生活中，要同時做到「不認同某個行為」又「真誠接納並愛這個人」，你觀察到有什麼具體的困難或智慧？',
              '本章提到的同性戀成因分析屬於特定觀點，你如何在閱讀類似具爭議性的內容時，保持既尊重作者立場、又能獨立思辨的態度？',
              '若你身邊有正在同性戀掙扎中的親友向你坦白，你會如何回應，才能像陶德一樣讓對方感受到被愛而非被論斷？',
              '你如何看待教會界對同性戀議題存在的不同神學立場？這種差異對你自己所屬的信仰群體有何影響？',
              '無論最終立場為何，你認為教會可以如何更好地承擔起「陪伴受傷的人」這個共通的牧養責任？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 讀馬太福音十一章28-30節</h4>
              <p className="text-gray-700 mb-2">找時間讀耶穌「凡勞苦擔重擔的人，可以到我這裡來」的邀請，思想這個邀請是向所有掙扎痛苦的人敞開，不設任何前提條件。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 練習「傾聽先於論斷」的回應方式</h4>
              <p className="text-gray-700 mb-2">
                本週留意自己面對任何與自己立場不同、或正在掙扎中的人時，是否習慣性地急於表達自己的看法或立場，練習學習見證中陶德牧師「先傾聽、先表達關心」的回應方式。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，求祢賜給我一顆像耶穌一樣的心，既持守祢話語的真理，也能真誠地愛每一個受傷、掙扎的人。求祢幫助我不用論斷的眼光看待與我立場不同的人，而是先學習傾聽他們的故事與傷痛。求祢也親自安慰、醫治那些在各樣掙扎中感到孤單、被拒絕的人，讓他們經歷到祢無條件的愛與盼望。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
