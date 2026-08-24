import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Waves, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book40Ch9() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-800 to-orange-900 bg-clip-text text-transparent">第九章</h1>
        <h2 className="text-xl font-semibold text-gray-700">第六誡（上）：不可殺人——戰爭與死刑</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          「凡流人血的，他的血也必被人所流，因為神造人是照自己的形像造的。」（創9:6）
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
              <h3 className="font-bold text-amber-900 text-lg mb-3">一、第六誡的精神——尊重人</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                第六誡是禁止「謀殺」，即為了個人利益和自私的目的而取去別人的性命。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記九章6節：「凡流人血的，他的血也必被人所流，因為神造人是照自己的形像造的」。第六誡的精神在於「尊重人」，因為人是「照著神的形像創造的」。因此，耶穌在登山寶訓中，把這條誡命教導的更完全，祂說：「你們聽見有吩咐古人的話，說：不可殺人；又說：凡殺人的難免受審判。只是我告訴你們：凡向弟兄動怒的，難免受審斷；凡罵弟兄是拉加的，難免公會的審斷；凡罵弟兄是魔利的，難免地獄的火。所以，你在祭壇上獻禮物的時候，若想起弟兄向你懷怨，就把禮物留在壇前，先去同弟兄和好，然後來獻禮物」（太5:21-24）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們尊重神所創造的人，不僅不能殺人，也不能隨意的向弟兄動怒，傷害弟兄，讓弟兄對我們懷怨；也不能辱罵弟兄是「拉加」（廢物之意）或「魔利」（笨蛋之意），當我們罵弟兄是廢物或笨蛋時，我們就是在辱罵神，因為人是照著神的形像造的。不但如此，我們是否會取笑別人？沒有認真對待別人？是否在他們的眼中看來，我們是在貶抑他們，以致於讓他們覺得不被尊重呢？
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">二、問題思想一：軍人在戰場上殺人算不算犯了第六誡？聖經贊不贊成戰爭？</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                耶穌說：「收刀入鞘吧！凡動刀的，必死在刀下」（太26:52），可見耶穌是反暴力的，耶穌教導我們，暴力解決不了問題，反而會帶來更多的暴力。所以，保羅也教導我們「不要以惡報惡」（羅12:17）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                然而，聖經並沒有反對所有的戰爭，在舊約中，神甚至常常應許以色列人出去爭戰時，會與他們同在（申20:1-4）。因此，那一種戰爭是神所許可的呢？從聖經來看，有兩種戰爭（或殺人）是神允許的：
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-amber-700">第一種就是所謂的「聖戰」，</span>就是「為耶和華爭戰，懲處惡人」。例如，在出埃及記卅二章25-29節記載，因著以色列人拜金牛犢，上帝非常憤怒，祂甚至鼓勵以色列人起來殺自己的同胞。另外，神消滅迦南人，不是為了讓以色列人得地，而是因為迦南人「惡貫滿盈」（創15:16）。然而，在今天的時代，神不再發起聖戰，神決不允許任何人奉神之名發動戰爭。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold text-amber-700">第二種允許的殺人就是出於「自衛」：</span>上帝不允許以色列人侵略別人，但當敵人起來侵犯以色列人時，神必與以色列人同在，為他們爭戰。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">三、問題思想二：死刑是否合神心意？是否應廢除死刑？</h3>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">贊成廢除死刑的原因與反駁</h4>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <span className="font-semibold text-amber-700">一、生命主權在神，人無權奪人性命</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  反對死刑者訴諸人道、人權，認為每個人的生命都可貴，政府不應用殘忍手段奪取人的生命。然而，要強調人權、生命權，不能只講「加害者」，而必須同時考慮「受害者」。「生命權不可剝奪」這個觀念，在聖經裡，不是用來為「加害者辯護」（廢除死刑），而是用來對「受害者申冤」（贊成死刑）的。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <span className="font-semibold text-amber-700">二、害怕錯判、誤殺</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  認為應廢除死刑的一個理由是他們認為，死刑有可能誤判，而死亡無法逆轉，造成不公義。「誤判」確實是很致命的問題，沒有法官能確保一切判決都絕對正確無誤。但是，因為會有「失誤」發生，所以，我們就乾脆「全面禁止」，這是不合理的。例如，因為汽車會出車禍撞死人，所以，必須廢除汽車嗎？因為刀子會被誤用殺死人，所以，一切刀子都該禁止嗎？
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  我們該做的，不是為了避免失誤發生，就乾脆全面禁止，而是該努力「改善失誤」，使「失誤減少」才是。為了避免死刑的誤用，好比：亂判、誤判、動輒一堆罪都判死刑，國家應列出相關規定，加以限制，以維護眾人的生命權，而不是乾脆將死刑禁止，這才是正確之路，也才是真正維護眾人的生命權。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <span className="font-semibold text-amber-700">三、給人機會悔改</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「矯正主義」者主張，制裁的目的是矯正，不是報應。因此，任何罪行都不該判處死刑，而該進行矯正。然而，矯正主義卻忽略了公義的原則。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">贊成執行死刑的原因</h4>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <span className="font-semibold text-amber-700">一、聖經有死刑</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  死刑是神自己吩咐的，可見聖經是支持死刑的。人類第一條死刑的法律，就是上帝親自設定的，上帝在伊甸園裡，就做出規定：「分別善惡樹上的果子，你不可吃，因為你吃的日子必定死」（創2:17），「必定死」就是死刑法律。死刑是上帝自己設立的，死刑不是由人主導，乃是出自神，因為人沒有權柄殺害別人，神將這權柄交給摩西，就是當時的首領，亦即現在的政府，由他們代替神去執行。在基督教的觀點，死刑的定義是「以上帝之名用人的手，合法地剝奪上帝賦予另外一個犯罪之人的生命權利。」
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  神為什麼主張要判人死刑，並且聲言，故意殺人的不可以用錢或別的贖價來代替，必須處死呢？（民35:31）。前面已提到，因為人是按著神的形像受造（創9:6），具有無比崇高的價值與尊嚴。神要人知道生命的寶貴，因此，殺人者要判處死刑，神施行刑罰，為的是要叫人知道，別人的人權很重要，要尊重別人的權利。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <span className="font-semibold text-amber-700">二、為了公義原則</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「報應主義」者主張，制裁的目的不僅是矯正，還包括報應。因此，某些嚴重的罪行，必須被處死刑。人不禁要問：「神為什麼要人執行死刑？這豈不有違祂慈愛的屬性麼？」不錯，神是慈愛的，祂滿有慈悲憐憫，祂愛惜每一個人的生命。可是，神也是公義的，慈愛與公義，缺一不可。因此，公義的神必定施行刑罰，以主持公道，伸張公義，而死刑就是所施行的一種刑罰。「報應與刑罰」的觀念，是全本聖經的重要精神：「祂要照各人的行為報應各人」（羅2:6）。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  我們還是要問：「殺人者要受罰，那是應該的，但為什麼一定要判他死刑，為何不以別的刑罰來代替呢？」舊約律法中有「以命償命，以眼還眼，以牙還牙，以手還手，以腳還腳，以烙還烙，以傷還傷，以打還打」的規定（出21:23-25），這正是律法的精神，就是要公平、要公正、公道。最公平的是你怎樣傷害人，就在同樣的地方受傷害。這樣，那傷害人的，也就能感受到那真正相同的痛。故意殺人者必須以命償命，他才了解、明白被殺害者的痛。這不是報復，乃是要教導人明白，什麼是公平，公正。因為唯有大家學習公平、公正，國家才能真正治理得好。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <span className="font-semibold text-amber-700">三、有嚇阻作用</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  贊成死刑者認為，殺人償命，是殺人者罪有應得，不然，其他的人會有恃無恐，爭相效尤。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <span className="font-semibold text-amber-700">四、社會的自我防衛</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  主張死刑者認為，許多殺人者已泯滅人性，若不判處死刑，以後仍然可能繼續為害社會，因此，死刑是社會的自我防衛。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">聖經的死刑是慎重的</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  當我們研讀聖經時，我們發現，聖經處理死刑時是很慎重的。聖經將「誤殺」和「謀殺」區分，將這兩種殺人的案情分開，免得混亂，免得判錯刑罰（參民35:16-34）。如果是「謀殺」，就判死刑；如果是「誤殺」，殺人者可以逃到特為這種人而設的「逃城」（民35:9-15），他在那裡可以保命，沒有任何人可以殺他。他可以住在那裡，直到當任的大祭司死了，他就可以回家，任何人也不可以傷害他。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  另外，聖經教導在審判時要非常小心，判刑時，不能單憑一個人的判定，必須要有多名證人才能作實，為的就是避免判錯案（民35:30，申17:6）。遇到難判的案件時，地方官要把案情交到祭司或最高審判官那裡，由他們作最後的裁定（申17:8-13）。這就是今天所謂的上訴、更審，目的顯然就是怕判錯案，怕有冤情。最高審判庭所作的裁決才是最後的定案。這種上呈的作風，表示審判是小心、慎重、不可隨便，因為這是人命關天，馬虎不得。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">死刑的存廢仍然要留意處境問題</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  支持死刑繼續存在之前，必須先確認，這個國家立足的價值體系是否仍然獲得我們的認可。如果我們身處於蘇丹社會，27歲懷有身孕的瑪麗亞姆改信基督教，嫁給基督徒，被判處100下鞭刑與絞刑。在這樣的國家中，我們對於蘇丹社會的死刑存廢與否，可能會抱持完全不同的想法。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  因此，身為一個基督徒，在決定支持一個國家是否應該繼續存在死刑之前，應該考慮兩個點：
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <span className="font-semibold text-amber-700">一、這個國家是否存在合法的政府，可以負責任、有效率地執行公權力？</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  這包含，死刑的存在是否能夠有效保障報應性正義原則的完整，以及社會整體生命的安全。死刑更不能變成執政黨維持政權、鎮壓人民的體制性暴力。如果一個國家的政治體制非常動盪不安，經常有政治干擾司法之虞，或公權力威信低落，人民對當前國家體制普遍不信任，我們一定不能贊同死刑的存續，必須等到國家體制改革出現令人滿意的結果，才能夠賦予這個國家執行死刑的權力。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <span className="font-semibold text-amber-700">二、這個國家的政府是否具備公正又訓練有素的司法系統？</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  這個國家的司法系統是否可以不受政治與私人的影響，保持良好的公信力。死刑不能變成政客用來陷害政敵、惡人謀害善良人的工具。惟有一個公正又訓練有素的司法系統才能有效防止上述濫刑與枉死事件的發生。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  身為一個基督徒，如果我們支持一個國家繼續存在死刑，我們也必須同時要求這個國家用最高的標準執行司法的行政。基督徒有可能在不主張廢除死刑的前提下，先全面暫緩死刑的執行，要求政府先完成司法改革，才能執行死刑。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  死刑必須能幫助社會向善，而不能變成一個不義的社會，自以為義的遮羞布。無怪乎，當那個行淫的婦人被帶到耶穌面前時，耶穌會說：「你們中間誰是沒有罪的，誰就可以先拿石頭打她」（約8:7）。其實我們所有人都是罪人，但那些罪犯反映出我們這個罪惡的社會最黑暗的一面。身為一個基督徒，如果我們同意一個社會執行死刑，不能只看作是一個罪人之死，而是整個社會都必須一起自我反省的嚴肅時刻。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">結論</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  就社會整體的組織原則而言，死刑的存在原則上是有必要的。然而，視國情之不同，國家體制若有重大瑕疵、公權力與公信力不彰的情形下，死刑可視情形暫時廢除。
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
                '第六誡的精神在於「尊重人」，因為人是照神形像所造；耶穌在登山寶訓中把這誡命的要求提升到內心層次——不只不可殺人，連向弟兄動怒、辱罵貶抑他人都不可，因為那也是在辱罵按神形像所造的人。',
                '聖經允許的殺人（戰爭）只有兩種：一是舊約特定時空下神親自發起、懲處惡貫滿盈之人的「聖戰」（今日神不再發起）；二是遭受侵略時的「自衛」——耶穌本身是反暴力的，「凡動刀的必死在刀下」，暴力解決不了問題。',
                '死刑議題上，作者持贊成死刑但重視處境限制的立場：聖經本身設立死刑（人按神形像受造使生命寶貴，殺人者必須付出等重代價），但同時嚴格區分「謀殺」與「誤殺」（逃城制度）、要求多重證人與上訴機制，顯示聖經對死刑的執行極其慎重。',
                '死刑存廢必須考慮處境——一個國家是否有合法有效的政府、是否具備公正訓練有素的司法系統，若國家體制有重大瑕疵、公信力不彰，死刑可視情形暫時廢除；死刑的目的是幫助社會向善，而非成為不義社會自以為義的遮羞布，全社會都當藉此自我反省。',
                '「誤判風險」不能成為全面廢除死刑的理由，正如汽車或刀具可能被誤用卻不必因此全面禁止——正確的方向是努力減少失誤（嚴謹的審判程序、多重上訴機制），而非因噎廢食地取消整套刑罰制度。',
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
              <h4 className="font-semibold text-gray-800 mb-2">耶穌把「不可殺人」延伸到「不可動怒、不可辱罵」，對今日網路言語文化有何提醒？</h4>
              <p className="text-gray-700 leading-relaxed">
                耶穌指出，辱罵弟兄「拉加」（廢物）或「魔利」（笨蛋）與殺人同樣嚴重，因為都是在貶低按神形像所造的人。這對社群媒體時代動輒用言語攻擊、貼標籤、酸言酸語的網路文化極具警示意義——鍵盤上的一句嘲諷或人身攻擊，本質上與耶穌所警戒的「向弟兄動怒、辱罵弟兄」是同一件事，基督徒在網路發言時應格外謹慎自省。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「生命權不可剝奪是用來為受害者申冤，而非為加害者辯護」，這個角度如何重新框架死刑辯論？</h4>
              <p className="text-gray-700 leading-relaxed">
                死刑議題的公共討論常常聚焦在加害者的人權，作者提醒聖經對生命尊嚴的強調，起點其實是保護受害者、伸張公義，而非為犯罪者尋求免死的理由。這個角度提醒我們，討論死刑存廢時，不能只看到加害者一方的處境，也要看見被害者及其家屬所承受的傷害與公義的需求，才是更完整、更貼近聖經原意的思考框架。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「死刑存廢要看國家司法體制是否公正」，對基督徒關心公共政策議題有何方法論啟發？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者沒有給出「所有國家都該有／沒有死刑」的單一標準答案，而是提出具體可檢視的判準（政府是否合法有效、司法系統是否公正訓練有素）。這種「原則清楚、應用因處境而異」的思考模式，值得應用在其他複雜的公共政策議題上——基督徒關心社會議題時，不應只停留在口號式的立場表態，而應學習具體檢視實際的制度條件。
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
              '在讀這一章之前，你認為「不可殺人」只是「不可奪人性命」，還是包含耶穌所延伸的「不可動怒、不可辱罵」的層面？',
              '你自己是否曾在言語上貶低、嘲笑過別人，甚至沒有意識到那也是對按神形像所造之人的不尊重？',
              '你原本對「死刑存廢」的立場是什麼？讀完本章的論證後，你的看法有沒有調整或更清晰？',
              '「生命權是用來為受害者申冤，而非為加害者辯護」，這個角度對你原本理解死刑議題的方式有何衝擊？',
              '作者提出判斷一個國家死刑存廢時，要看該國司法體制是否公正有效。你如何評估自己所在的社會目前的司法體制？',
              '面對「行淫婦人」的故事，耶穌說「誰沒有罪就可以先拿石頭打她」。你如何理解這句話與贊成死刑立場之間並不衝突？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 讀馬太福音五章21-24節</h4>
              <p className="text-gray-700 mb-2">找時間讀耶穌對第六誡的延伸教導，思想「先去同弟兄和好，然後來獻禮物」這句話，回想自己是否有尚未和好的關係需要處理。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 檢視自己的言語習慣</h4>
              <p className="text-gray-700 mb-2">
                本週留意自己在言語（包括社群媒體發言）中，是否曾用貶低、嘲諷的方式對待他人，練習用尊重的言語代替，把每一個人都當作按神形像所造的個體來對待。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，求祢幫助我真正尊重每一個按祢形像所造的人，不只在行為上不傷害人，也在心裡不向弟兄懷怒、口中不出惡言。求祢賜給教會和社會智慧，在面對戰爭、死刑這類艱難的公共議題時，既堅持公義的原則，也不失去憐憫的心腸。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
