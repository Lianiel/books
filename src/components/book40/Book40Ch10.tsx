import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Waves, Star, Search, HelpCircle, Check } from 'lucide-react';

const quote = "border-l-4 border-emerald-300 bg-emerald-50 pl-4 py-3 mb-3";
const quoteText = "text-emerald-800 leading-relaxed italic";

export default function Book40Ch10() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-800 to-orange-900 bg-clip-text text-transparent">第十章</h1>
        <h2 className="text-xl font-semibold text-gray-700">第六誡（下）：不可殺人——安樂死、墮胎與迦南人</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          「我未將你造在腹中，我已曉得你；你未出母胎，我已分別你為聖。」（耶1:5）
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
              <h3 className="font-bold text-amber-900 text-lg mb-3">一、問題思想三：基督教贊同「安樂死」嗎？</h3>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">什麼是「安樂死」？</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「安樂死」就是「以人為的方法」引致死亡，目的是要使死亡變得沒有痛苦。一般可分為：
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <span className="font-semibold text-amber-700">一、積極安樂死：</span>指通過一個直接的行動來結束生命，包括由醫生幫助的自殺行動，是製造死亡。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <span className="font-semibold text-amber-700">二、消極安樂死：</span>以撤去某種維生的因素，使死亡自然或加速發生，是容許死亡。按所撤去的維生因素之種類，又可分為：
                </p>
                <p className="text-gray-700 leading-relaxed mb-3 pl-4">
                  （一）非自然的消極安樂死：停止給予自然的維生因素（如食物、水、空氣等），與積極安樂死其實沒有分別，都是直接導致死亡的行動。<br />
                  （二）自然的消極安樂死：撤去非自然的維生因素（如人工呼吸器、醫療措施、CPR等）。有人認為，只有此種安樂死，有可能在道德上是正當的。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「安樂死」，是一個很嚴肅的課題。基督徒如何面對此課題呢？年逾104歲的澳洲生態與植物專家大衛．古道爾博士（Dr David Goodall），選擇以安樂死方式結束生命。他在生前接受澳洲廣播公司（ABC）採訪時表示：「我非常後悔活到這把年紀，生活質量惡化，就如同一場沒有盡頭的病」。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  「安樂死」是一項近代社會才逐漸廣泛被討論的議題，現代醫學技術的進步日益凸顯了此議題。因為醫學技術發達，延長了人類的壽命，但同時也無法保證完全健康，於是產生了：讓人死不了，但又活不好，甚至很痛苦的情況。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  觀察今日世界各國邁入「老年化」的同時，確實也產生了一種狀態：雖然生命延長了，但也落入了活在痛苦中的困境。安樂死的問題就出現了：「我是不是可以提早結束這死不了活著又痛苦的生命？」
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  人會想選擇安樂死了結自己的生命，根本原因就是痛苦。「痛苦」有不同層面，包含肉體的痛苦和心靈的痛苦（如，孤單、被遺棄感或無意義感等）。「痛苦感」會讓人思考「用死亡來結束沒有意義的生命」。死亡不是目的，而是一種手段，一種結束痛苦的手段。他們真正的目的不是想死，而是想要結束痛苦。當世上醫療無法除去他們的痛苦，所以就只能尋求「安樂死」。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">贊成積極安樂死的理由</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  一、尊嚴地死去是人的道德權利。<br />
                  二、尊嚴地死去受到憲法隱私權的保障。<br />
                  三、對受苦的人，這是仁慈的作法。<br />
                  四、對受苦的家人，也是仁慈的作法。<br />
                  五、解除家人沉重的經濟負擔。<br />
                  六、減輕社會的負擔。<br />
                  七、是合乎人道的行為。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">反對積極安樂死的理由</h4>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <span className="font-semibold text-amber-700">一、生命主權在神</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  我們不是生命的創造者，我們是神所創造的，因而生命的主權在神手中，上帝才有決定人死亡的權利，包括死亡的時間和方式，人並沒有終結生命的權力。神怎麼樣帶領我們，我們都去面對，所以基督徒反對自殺。從這個角度出發，積極安樂死即在一定條件下，申請讓醫生協助自殺，是基督徒應該反對的。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span className="font-semibold text-amber-700">二、憲法並沒有給予殺人的權利</span><br />
                  <span className="font-semibold text-amber-700">三、無法保證病人一定無法好起來</span><br />
                  <span className="font-semibold text-amber-700">四、基督徒不逃避苦難：</span>基督徒不逃避苦難，但也不害怕死亡；因此，我們不主動，但也不拖延死亡。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  當今俗世文化也助長安樂死的呼聲，當代文化的特色是「重視快樂」（甚至是享樂），「不快樂或痛苦」往往被詮釋為「沒有價值、沒有意義、沒有品質」，當人們用「快樂」與否來衡量人的生命，就很容易產生「躺在病床上很痛苦，倒不如早點死」的想法。但是，值得我們深思的是：「痛苦或沒有快樂，就表示不值得活了嗎？」生命的價值與意義到底應由什麼來界定？是快樂嗎？
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  有人認為安樂死就是讓人尊嚴地死亡。然而，生命的尊嚴或品質並不是由客觀的環境條件決定的，那些在苦難中的人，他們活出來的生命力、活出來勝過困難的能力，那是「更大的尊嚴」。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  不論是疾病的苦難，或者其他的苦難，聖經從來沒有告訴我們逃避，聖經告訴我們是靠著神去勝過、去面對。神並沒有把我們從苦難的世界中抽離，而是希望我們面對苦難時，能夠靠著仰望神，活出不一樣的生命力，即使「在生命最後終結之前的這一段時間裡面，仍然是一個學習倚靠神的機會，仍然是可以活出見證的機會。」
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">自然的消極安樂死與安寧療護</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  關於「自然的消極安樂死」，神命定人人都有一死，容許人自然地死去，也是好的！有人認為，今天的醫療技術可以大大減輕因病所帶來的疼痛，痛苦的瀕死者，真正所需要的，是平靜度過死亡的過程，因此，「安寧療護」才是此一問題最應被好好思考的焦點：
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <span className="font-semibold text-amber-700">一、基督徒要好好去陪伴這些「瀕死的痛苦患者」，</span>在陪伴的過程中，使他們平靜、不孤單地走完生命的最後一哩路，坦然預備自己接受死亡。
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <span className="font-semibold text-amber-700">二、「瀕死的痛苦患者」要正向的思想自己生命的價值，回憶、省思自己的生命。</span>基督徒應真誠面對自己的一生，或懺悔、或感謝、或讚美，而不只專注在痛苦上。或者與家人藉著「道謝、道歉、道愛、道別」，了無遺憾地離開人世。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span className="font-semibold text-amber-700">三、政府相關單位應該更長遠的規劃「安寧療護」，</span>政府應建立健全的制度來幫補陷入困境的痛苦者及其家庭，而不要讓個人與家庭獨自辛苦地承擔。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">二、問題思想四：有關墮胎的問題——在何種情況下神允許墮胎？</h3>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">一般人認為容許墮胎的理由有那些呢？</h4>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <span className="font-semibold text-amber-700">一、為了母體的健康：</span>因為妊娠而危害到母親的生命而不得不流產時，這樣的流產手術應是被允許的。但身為基督徒，仍然應非常慎重地作這個不得不的決定。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span className="font-semibold text-amber-700">二、為了優生：</span>有人主張若胎兒出生可能是畸形兒或嚴重的先天性疾病，為了不讓孩子及家庭受苦，應當容許墮胎。然而，我們認為：無人有權決定有先天性疾病胎兒的生死。本世紀神學家John Stott曾經引用一段發人深省的對話：
                </p>
                <div className={quote}>
                  <p className={quoteText}>
                    一位醫生問另一位想要墮胎的婦女道：「我想請問您對墮胎的看法。父親患有梅毒，母親得了肺結核，前四個孩子中，頭一個是瞎的，第二個死了，第三個又聾又啞，第四個也有肺結核，您會怎麼處理？」婦女答道：「我一定會墮胎！」醫生說：「那你就是殺掉了貝多芬。」
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span className="font-semibold text-amber-700">三、為了道德：</span>有人主張，若女子是因為被強暴而懷孕，她有權利拿掉非自願所懷的孩子。我們固然同情這樣的處境，然而，我們仍然沒有權利拿走這個孩子的生命。
                </p>
                <div className={quote}>
                  <p className={quoteText}>
                    教會復興史有一位被神重用的牧師，他的母親被男主人強暴而懷孕，絕望之時，決定要去自殺，此時上帝跟她講話，說：「留下這個孩子，將來我會大大使用他」。母親順服上帝的旨意，把這個孩子扶養長大，神果然使用他帶動教會的復興，帶領很多人信主。
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span className="font-semibold text-amber-700">四、為了環境因素：</span>有人主張若女子未婚懷孕、或非預期性懷孕、或者生活窮困無法養育孩子，應可允許墮胎。然而，基督教倫理學和世人倫理學是不同的，基督徒不逃避苦難，「舒服」不是我們的目標，「順服」才是我們的目標。
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">聖經對胎兒的看法如何？胎兒是人嗎？</h4>
                <p className="text-gray-700 leading-relaxed mb-2">
                  <span className="font-semibold text-amber-700">一、未出生的胎兒也被稱為孩童：</span>聖經中被稱為「胎兒」的用詞，也被用來稱呼「孩童」（路1:41、44；2:12、16；出21:22）及成人（王上3:17）。所以，從聖經中的用法可以知道，未出生的胎兒並不低於一個幼童或是成人。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span className="font-semibold text-amber-700">二、胎兒乃是神所創造的：</span>詩人說：「我的肺腑是你所造的；我在母腹中，你已覆庇我」（詩139:13）。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span className="font-semibold text-amber-700">三、未出生胎兒的生命與成人一樣受到律法保護：</span>出埃及記廿一章22-25節提到，有孕的婦人若與別人打鬥而受傷小產，若是胎兒無恙，只須賠償價銀。但若是導致母體或胎兒任何一位死亡，則要以命償命，可見胎兒的生命是與成人等值的。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span className="font-semibold text-amber-700">四、未出生的胎兒具備個人的特質：</span>路加福音一章44節記載，當施洗約翰還在以利沙伯的腹中時，一聽到馬利亞的問安，就在腹中歡喜跳動。現在很多人注重胎教，就是瞭解到胎兒具有意識這個部份。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span className="font-semibold text-amber-700">五、未出生的嬰兒已被神所認識和呼召：</span>神對耶利米說：「我未將你造在腹中，我已曉得你；你未出母胎，我已分別你為聖；我已派你作列國的先知」（耶1:5）。未出生的胎兒在出生前也蒙神呼召。創世記廿五章22-23節記載，在雅各和以掃未出生前，上帝就預言將來大的要服事小的。士師記十三章2-7節記載，參孫還未被母親懷胎前，就已經被分別為聖作拿細耳人。保羅也提到，神在母腹裡就呼召他，把他分別出來（加1:15）。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">三、問題思想五：神為了以色列人而滅絕迦南人是否不公平？神是否特別偏愛以色列人？</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                有人認為，上帝偏愛以色列人，認為上帝為了給以色列產業而消滅了迦南人。然而，當我們讀舊約時，我們看見，上帝「賞善罰惡」的原則從未改變。許多人只看見上帝恩待以色列人，卻沒有看見，上帝對以色列人的管教也是非常嚴厲的！雖然以色列人是祂的選民，祂把他們從埃及拯救出來，但是，當以色列人悖逆妄為時，上帝也照樣讓他們仆倒在曠野。相反的，有些迦南人，雖然是外邦人，但是，當他們的心歸向上帝時，上帝也沒有忘記他們，也照樣拯救他們。例如，約書亞記第二章中的妓女喇合的家族。所以，上帝賞善罰惡的原則沒有改變。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                另外，有人誤解上帝，以為上帝消滅迦南人，是因為愛以色列人的緣故。事實上，上帝消滅迦南人是因為他們「惡貫滿盈」。申命記九章4-5節：「耶和華——你的神將這些國民從你面前攆出以後，你心裏不可說：耶和華將我領進來得這地，是因我的義，其實耶和華將他們從你面前趕出去，是因他們的惡，你進去得他們的地，並不是因你的義，也不是因你心裏正直，乃是因這些國民的惡，所以耶和華——你的神將他們從你面前趕出去」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                耶穌說：「多給誰就向誰多要」，以色列人是上帝的選民，上帝特別揀選他們，但是上帝對他們也特別嚴厲，我們從歷史看見，以色列人的苦難是何等的多！上帝是公義的，因為祂「賞善罰惡」的原則沒有改變，而且祂「多給誰就向誰多要」，這個公平的原則也一直沒有改變。
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
                '安樂死分為積極安樂死（直接行動結束生命）與消極安樂死（撤去維生因素，又分非自然/自然兩種）；作者立場是反對積極安樂死（生命主權在神、憲法無授予殺人權利、無法保證病人一定無法好轉、基督徒不逃避苦難），但接受「自然的消極安樂死」（撤去人工呼吸器等非自然維生措施），並主張安寧療護才是最應被重視的方向。',
                '生命的尊嚴或品質不是由環境條件決定的，那些在苦難中仍活出生命力、勝過困難的人，反而擁有「更大的尊嚴」；聖經從未教導我們逃避苦難，而是靠著神去面對，生命終結前的階段仍是學習倚靠神、活出見證的機會。',
                '一般人容許墮胎的四個常見理由（母體健康、優生、道德/強暴、環境因素）逐一被檢視：唯有真正危及母體生命時的流產可被允許但仍須慎重，其餘理由都可能剝奪一個生命的存活權——聖經清楚教導胎兒也是「孩童」、是神所創造、與成人生命等值、具備個人特質，且在出生前就已被神認識與呼召。',
                '基督徒面對苦難的核心價值觀是「順服而非舒服」——即使處境艱難（強暴受孕、經濟窮困），也不因此擁有終結另一個生命的權利，貝多芬家族的假設性提問生動地挑戰了「優生式墮胎」的合理性。',
                '神消滅迦南人並非出於偏愛以色列人，而是因為迦南人「惡貫滿盈」；神「賞善罰惡」與「多給誰就向誰多要」的公平原則從未改變——以色列人悖逆時同樣受嚴厲管教，而外邦人（如喇合）歸向神時同樣蒙拯救，可見神的公義不因族群而有差異。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「痛苦或沒有快樂，就表示不值得活了嗎？」這個提問，對當代「唯快樂論」的生命價值觀有何挑戰？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者指出，當代文化習慣用「快樂與否」來衡量生命是否值得活下去，這與聖經對苦難的態度形成鮮明對比。這個提醒對今日社會極具反思價值——當媒體、廣告不斷灌輸「追求舒適快樂才是人生意義」的訊息時，教會需要重新教導信徒，生命的價值和尊嚴，不在於是否處於舒適愉悅的狀態，而在於是否活出神所賦予的意義與見證，這對安寧照護、身心障礙關懷等領域的實務工作也有深遠影響。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「貝多芬」的思想實驗，對優生式墮胎的論證有何獨特的說服力？</h4>
              <p className="text-gray-700 leading-relaxed">
                這個故事的巧妙之處在於，它讓讀者先做出「一定會墮胎」的直覺判斷，再揭曉答案是貝多芬，瞬間顛覆讀者原本的立場。這種論證方式提醒我們，任何以「預期生活品質」來判斷一個生命是否值得存在的邏輯，本質上都帶有極大的風險與傲慢——我們永遠無法預知一個生命將來會活出什麼樣的價值與貢獻。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「上帝賞善罰惡、多給誰就向誰多要」的原則，對今日「上帝偏心」的誤解有何澄清作用？</h4>
              <p className="text-gray-700 leading-relaxed">
                許多人（包括基督徒）誤以為舊約中神揀選以色列人代表神偏愛某個民族，本章卻提醒我們，蒙揀選同時意味著承擔更大的責任與更嚴厲的管教。這個原則對今日蒙恩得救、領受特別呼召或恩賜的基督徒同樣適用——被神特別揀選使用，不是驕傲自滿的理由，而是承擔更高責任、面對更嚴格對付的提醒。
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
              '在讀這一章之前，你對「安樂死」的認識，是否已經知道積極/消極安樂死的分別？讀完本章後，你的立場有何調整？',
              '「痛苦不代表沒有價值」——你是否見過或聽過在苦難中仍活出生命力、成為他人祝福的見證？那段經歷帶給你什麼啟發？',
              '面對「貝多芬」的思想實驗，你的第一直覺反應是什麼？這個故事對你原本可能持有的優生式墮胎立場有何衝擊？',
              '你如何理解「基督徒不逃避苦難，舒服不是我們的目標，順服才是我們的目標」這句話？這對你個人生命中的艱難處境有何提醒？',
              '「未出生的胎兒已被神認識和呼召」——這個角度如何影響你看待生命從何時開始具有價值和尊嚴？',
              '「上帝多給誰就向誰多要」——回想你自己蒙受的特別恩典或呼召，這句話對你有何提醒與警惕？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 讀詩篇一三九篇13-16節</h4>
              <p className="text-gray-700 mb-2">找時間讀這段描述神在母腹中創造與看顧人的經文，默想神對每一個生命（包括尚未出生的胎兒）的珍視與計畫。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 實際探訪或關懷一位年長、患病或臨終的肢體</h4>
              <p className="text-gray-700 mb-2">
                本週安排時間探訪教會中或家族中正經歷疾病痛苦、年邁瀕臨死亡的長輩，練習「道謝、道歉、道愛、道別」的陪伴，用實際行動活出「基督徒好好陪伴瀕死患者」的教導。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，感謝祢是生命的主，掌管生與死的一切。求祢幫助我在面對苦難時不選擇逃避，而是靠著祢活出更大的生命力和尊嚴。求祢幫助教會和社會善待每一個生命，包括尚未出生的胎兒、年邁瀕死的長者，讓他們都能經歷祢的眷顧與同在。也求祢光照我，讓我明白蒙祢揀選、恩待的同時，也當存謙卑戰兢的心來回應祢的呼召。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
