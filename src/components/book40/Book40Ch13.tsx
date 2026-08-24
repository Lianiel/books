import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Waves, Star, Search, HelpCircle, Check } from 'lucide-react';

const quote = "border-l-4 border-emerald-300 bg-emerald-50 pl-4 py-3 mb-3";
const quoteText = "text-emerald-800 leading-relaxed italic";

export default function Book40Ch13() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-800 to-orange-900 bg-clip-text text-transparent">第十三章</h1>
        <h2 className="text-xl font-semibold text-gray-700">第七誡（三）：不可姦淫——通姦除罪問題</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          「婚姻，人人都當尊重，床也不可污穢；因為苟合行淫的人，神必要審判。」（來13:4）
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
              <h3 className="font-bold text-amber-900 text-lg mb-3">一、通姦罪</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「通姦罪」即以刑法定罪並處罰婚外性行為。刑法第239條：「有配偶而與人通姦者，處一年以下有期徒刑，其相姦者亦同。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                2002年，大法官554號解釋：通姦罪功效為「預防通姦、保護婚姻」，具體包括：一、社會生活之基本規範；二、增強人民對婚姻尊重；三、維護婚姻與家庭制度。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                然而，台灣2020年5月29日大法官宣告通姦罪違憲，有人稱為，從此：「偷吃不用關，賠錢洗門風」。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">二、2020年大法官解釋判決通姦罪違憲的理由與反駁</h3>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">第一、高舉「性自主權」</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  大法官解釋說：「隨著社會自由化與多元化之發展，參諸當代民主國家婚姻法制之主要發展趨勢，婚姻關係中個人人格自主（包括性自主權）之重要性，已更加受到肯定與重視，而婚姻所承載之社會功能則趨於相對化」，因此，他們判定通姦罪違反《憲法》第22條所保障的「性自主權」。
                </p>
                <div className={quote}>
                  <p className={quoteText}>〈反駁〉</p>
                  <p className={quoteText}>
                    憲法第22條規定：「凡人民之其他自由及權利，不妨害社會秩序公共利益者，均受憲法之保障。」該條所保障之自由及權利，以不妨害社會秩序、公共利益者為限。然而，通姦行為會妨害社會秩序、公共利益，不受憲法之保障。
                  </p>
                  <p className={quoteText + " mt-2"}>
                    不結婚是每個人的絕對自由，想維持「性自主權」別結婚就好。若人有「絕對身體自主權」，那刑法為何可以限制及刑罰你用你的身體血親性交、獸交或從事性交易呢？既然永久結合，合而為一，就不該為了通姦而無限上綱「人格自主」，並以「人格自主」之名，背叛自己的諾言，行破壞人格之實。
                  </p>
                  <p className={quoteText + " mt-2"}>
                    「自由」不是為了「想跟誰上床，就跟誰上床」而設，而是為了「想不跟誰上床，就不跟誰上床」及其他更高的目的而設。前者常起因於當事人被慾望轄制，後者則常有道德自制層面，人跟動物不同的地方在於人類可以選擇後者。
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">第二、通姦行為乃私人問題</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  大法官認為「通姦行為係損及個人感情，且主要係私人間權利義務爭議之行為，尚不致明顯損及公益，故不應納入刑罰制裁」。
                </p>
                <div className={quote}>
                  <p className={quoteText}>〈反駁〉</p>
                  <p className={quoteText}>
                    家庭制度具有繁衍、教育、經濟、文化等多重功能，乃提供個人於社會生活之必要支持。有配偶而與人通姦，悖離婚姻忠誠，破壞家庭和諧，攸關國家社會之安定與發展，攸關社會秩序、公共利益，並不能單純以私人之間的民事關係視之。一個文明、法治之社會，難道要容許一夫多妻、一妻多夫、甚至多夫多妻之婚姻制度嗎？亦難道要容許婚姻倫理秩序蕩然無存，各個家庭支離破碎，婚生與婚外性行為所生子女，均在不正常的環境中成長，造成動盪不安之國家社會，而危害國家社會之發展嗎？
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">第三、以刑法處罰通姦罪違反比例原則</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  意思即「通姦罪以刑法應處太嚴重」。
                </p>
                <div className={quote}>
                  <p className={quoteText}>〈反駁〉</p>
                  <p className={quoteText}>
                    賣場偷乖乖也有刑責？跟破壞婚姻家庭比，那一個比較嚴重？
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">第四、只告一人（相姦者）違反平等原則</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  司法院統計資料顯示，通姦罪的定罪以女性為多，因為很多男性會與老婆和解，老婆最後對丈夫撤告，卻不對第三者撤告，造成法院中，通姦罪定罪者大部分是女性，與兩性平權的概念不符，甚至看起來像是懲罰女性。因此，他們認為違反平等原則，應廢除通姦罪。
                </p>
                <div className={quote}>
                  <p className={quoteText}>〈反駁〉</p>
                  <p className={quoteText}>
                    可同時告或改公訴來處理不平等的問題，但不應除罪。
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">第五、以刑罰懲處通姦者，可能反而破壞婚姻關係</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  大法官認為，國家以刑罰制裁手段處罰違反婚姻承諾的通姦配偶，因為國家權力介入人民的婚姻關係，可能反而會對婚姻關係產生負面影響。
                </p>
                <div className={quote}>
                  <p className={quoteText}>〈反駁〉</p>
                  <p className={quoteText}>
                    「通姦罪」對婚姻關係有什麼負面影響？是「通姦」傷害婚姻，還是「通姦罪」傷害婚姻？通姦已破壞婚姻，會告通姦罪的幾乎都是希望離婚的受害人，無法更進一步破壞婚姻。
                  </p>
                  <p className={quoteText + " mt-2"}>
                    懲罰有什麼不對？連小孩考試作弊都知道要受罰，更何況是成人通姦對婚姻作弊呢？依照大法官的邏輯，商業投資關係也可以說成「國家權力因此介入人民的商業投資關係，反而可能會對商業投資關係產生負面影響」。那國家大部分的法律都可以廢了。
                  </p>
                  <p className={quoteText + " mt-2"}>
                    事實已證明，通姦除罪後已嚴重破壞婚姻。印度通姦除罪之後，一年內偷情網站會員增加了六倍；南韓通姦除罪之後，一年內婚外情增加了一成；台灣2020年5月29日通姦除罪之後，不到半個月，偷情網站會員增加了70%。
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">第六、通姦罪不能挽回婚姻，故需廢除</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  大法官認為，感情破裂的原因很多，不應該唯獨「和配偶以外的人發生性行為」這件事必須受刑法制裁，兩個人之間的事情應該讓兩個人進行溝通和彌補，而非國家動用公力、耗費司法資源在規訓個人的性自主權。
                </p>
                <div className={quote}>
                  <p className={quoteText}>〈反駁〉</p>
                  <p className={quoteText}>
                    若依此邏輯，殺人罪也不能挽回死者生命，且訴訟過程帶給家屬許多痛苦，是否殺人罪也要廢除？！律法是約束犯罪，並叫人知罪，改變人心還需要靠教育、文化、環境及大家的努力。
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">第七、通姦論處雖然免除刑法，但還有民法可論處</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  大法官認為，廢除通姦刑法之論處沒有關係，因為還可以動用民法來論處。
                </p>
                <div className={quote}>
                  <p className={quoteText}>〈反駁〉</p>
                  <p className={quoteText}>
                    民法的威嚇性及代價不高，有錢人可以請律師代為出庭，且賠償過低（行情為幾十萬元）。除罪後不能以刑事告訴附帶民事賠償，只能提起民事訴訟且需先付訴訟費，對富有資力者而言，其資力足以承擔，對其無關痛癢，並無法達成防止通姦行為之目的。
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">第八、國外都已廢除通姦罪了</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  各國國情及文化不一，且廢除理由也不一樣。
                </p>
                <div className={quote}>
                  <p className={quoteText}>〈反駁〉</p>
                  <p className={quoteText}>
                    例如，美國仍有許多州有通姦罪，就算廢除通姦罪的州，也建立因通姦離婚的高額賠償配套措施。另外，印度之所以廢除，是因為只處罰女性，因不公平而廢除通姦罪；我國通姦罪是男女都可罰，較為公平，現被大法官廢除了，並沒有相關配套。
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">三、結語</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們對於大法官通姦除罪的判決感到失望，然而，愛家民眾可以作的是「珍惜自己的家，並培養下一代，拒絕外來的誘惑，好好愛另一半、愛自己的家人，並教導下一代正確的婚姻家庭觀念」。
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
                '台灣通姦罪原本依刑法第239條處罰婚外性行為，2002年大法官554號解釋肯定其「預防通姦、保護婚姻」的功效，但2020年5月29日大法官宣告通姦罪違憲，提出八點理由，本書逐一反駁。',
                '「性自主權」不能無限上綱到破壞婚姻承諾——不結婚才是維持性自主權的正途，一旦選擇永久結合，就不該以「人格自主」之名行背叛諾言之實；真正的自由是「能夠選擇不做」的道德自制力，而非慾望的隨意放縱。',
                '通姦絕非單純的私人問題——家庭制度承載繁衍、教育、經濟、文化等多重社會功能，通姦破壞婚姻忠誠攸關社會秩序與國家發展，不能簡化為兩人之間的民事糾紛。',
                '「除罪後改用民法追訴」的配套實際上威嚇力不足、賠償過低，對富有資力者無關痛癢，無法達成防止通姦的效果；印度、南韓、台灣除罪後的實際數據都顯示婚外情或偷情網站會員數大幅增加，證明除罪確實削弱了對婚姻的保護。',
                '面對通姦除罪已成定局的現實，本書提醒基督徒與愛家民眾應把重心放在自己能做的事——珍惜自己的家庭、拒絕外來誘惑、用心愛配偶與家人，並教導下一代正確的婚姻家庭觀念，而非僅停留在對法律判決的失望與抱怨。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「自由是為了想不做什麼而設，而非為了想做什麼而設」，這個對自由的重新定義有何深意？</h4>
              <p className="text-gray-700 leading-relaxed">
                本書對「自由」的定義極具反思價值——一般人常把自由理解為「想做什麼就做什麼」的權利，但作者提出，真正高層次的自由其實是「有能力選擇不做某些事」的道德自制力，這正是人與動物的分野。這個框架不只適用於通姦議題，也能延伸應用在思考消費主義、情慾試探等當代社會普遍鼓吹「想要就去做」的價值觀，提供基督徒一個更深刻的自由觀。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">用「小孩考試作弊都要受罰」類比通姦，這個論證方式對公共政策辯論有何啟發？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者善用類比論證來挑戰大法官判決的邏輯一致性（如拿殺人罪、商業投資關係、賣場偷竊等類比），這種論證方式的核心在於檢驗一個原則是否能被普遍化應用而不產生荒謬結論。這提醒基督徒在參與公共政策討論時，可以學習用邏輯一致性的檢驗方式，來評估某個論點是否站得住腳，而不僅僅停留在情緒化的表態。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">除罪後各國偷情網站會員數暴增的數據，對「法律不能規範道德」這個常見論調有何反思？</h4>
              <p className="text-gray-700 leading-relaxed">
                許多人主張「法律管不了人心，道德問題不該用法律解決」，但本章引用的實際數據（印度、南韓、台灣除罪後婚外情比例明顯上升）顯示，法律的存在確實對行為具有嚇阻與教育作用，即使無法完全杜絕，也能發揮一定的約束力。這提醒我們在思考法律與道德的關係時，不宜輕易接受「法律無用論」，而應正視法律作為社會規範工具的實際影響力。
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
              '在讀這一章之前，你對通姦除罪的判決持什麼立場？讀完本章的八點反駁後，你的看法有沒有調整？',
              '「自由是為了想不做什麼而設」，你如何理解這個對自由的定義？這與你原本對自由的理解有何不同？',
              '你如何看待「法律不能規範道德、道德問題該由兩人自行溝通解決」這個常見論調？本章的數據對這個論調有何挑戰？',
              '面對已經無法改變的法律現況（通姦除罪已定案），你認為基督徒個人與教會可以如何實際地守護婚姻與家庭？',
              '你是否認同「懲罰有嚇阻作用」這個論點？在你自己的生活經驗中，是否有法律或規範真正幫助你避免做出傷害他人的行為？',
              '你會如何向孩子或年輕一代，用不涉入政治立場但清楚合乎聖經的方式，解釋婚姻忠誠的重要性？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 讀希伯來書十三章4節</h4>
              <p className="text-gray-700 mb-2">找時間讀「婚姻，人人都當尊重，床也不可污穢」這節經文，默想無論外在法律如何變動，神對婚姻聖潔的心意始終不變。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 具體行動珍惜自己的婚姻與家庭</h4>
              <p className="text-gray-700 mb-2">
                回應本章結語「珍惜自己的家、好好愛另一半、教導下一代正確婚姻觀」的呼籲，本週安排一個具體的行動（一次約會、一段感謝的話、一次與孩子談論婚姻價值的對話），主動投資在自己的婚姻與家庭關係中。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，求祢賜給我智慧，在這個婚姻價值觀不斷被挑戰的世代中，仍然堅定持守祢對婚姻聖潔忠誠的心意。無論外在的法律如何改變，求祢幫助我從自己做起，好好愛我的配偶與家人，也求祢使用我，把正確的婚姻家庭觀念傳承給下一代。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
