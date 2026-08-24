import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Waves, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book40Ch12() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-800 to-orange-900 bg-clip-text text-transparent">第十二章</h1>
        <h2 className="text-xl font-semibold text-gray-700">第七誡（二）：不可姦淫——婚外情</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          「夫妻不可彼此虧負……免得撒但趁著你們情不自禁，引誘你們。」（林前7:5）
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
              <h3 className="font-bold text-amber-900 text-lg mb-3">一、婚外情的三種特性</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                外遇有三種特性，一旦具備這三個因素，就已進入外遇的高危險期！
              </p>
              <p className="text-gray-700 leading-relaxed mb-2"><span className="font-semibold text-amber-700">一、親密感：</span>和第三者感情上很有共鳴，心靈感覺很親近。</p>
              <p className="text-gray-700 leading-relaxed mb-2"><span className="font-semibold text-amber-700">二、藏匿性：</span>你有意無意地想隱藏你們之間的事情，不願意讓自己的伴侶知道。當你不願意把心中的感受和配偶分享的時候，便會成為外遇的高危險群！</p>
              <p className="text-gray-700 leading-relaxed mb-3"><span className="font-semibold text-amber-700">三、性吸引力：</span>兩人之間產生興奮又緊張的感覺。</p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">二、發生外遇機率較高的人</h3>
              <div className="space-y-2">
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">一、</span>認為「女人是男人附庸」的大男人主義者：許多大男人主義者認為，男人有個三妻四妾是正常的。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">二、</span>在婚前就發生性行為的夫妻。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">三、</span>婚姻品質較低的夫妻，愛的生活不夠滿足或性生活不滿足者。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">四、</span>配偶中覺得自己較倒楣、很吃虧的一方。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">五、</span>婚姻中權力較大，作最後決定者。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">六、</span>某些時機：例如，缺乏自信心、安全感或遭受重大失落、環境遭遇重大轉變時（例：台商、留學生等）。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">七、</span>對婚姻及愛情有錯誤的觀念：例如，相信偷來的比較香，或者相信可以有所謂的「紅粉知己」等。</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">三、外遇的六種類型</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-amber-700 mb-1">一、一夜情型</p>
                  <p className="text-gray-700 leading-relaxed">非蓄意出軌，因遇見試探無法抵擋，這類型的外遇因為與第三者並無深厚感情，可能反而比較容易處理。</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-700 mb-1">二、拈花惹草型</p>
                  <p className="text-gray-700 leading-relaxed">這類型的人通常人格有缺陷，需藉著不斷操控、征服第三者，以獲得心理與情慾上的刺激，暫時安撫心中強烈的焦躁與不安，滿足長久渴求的肯定與價值感。</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-700 mb-1">三、修復型</p>
                  <p className="text-gray-700 leading-relaxed">想藉著外遇，刺激已經平淡的夫妻關係，這是引火自焚！</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-700 mb-1">四、長期情感外遇型</p>
                  <p className="text-gray-700 leading-relaxed">兩人成為朋友、知己、相知相惜，進而發生性關係，彼此難分難捨，這是最難處理型的外遇！</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-700 mb-1">五、報復型</p>
                  <p className="text-gray-700 leading-relaxed">對配偶不滿，藉著外遇報復對方。</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-700 mb-1">六、退場型</p>
                  <p className="text-gray-700 leading-relaxed">知婚姻已無藥可救，以致徹底破壞它！</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">四、兩性對外遇反應的差異</h3>
              <div className="space-y-2">
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">一、</span>女性多半為了尋找心靈相契的伴侶；男性許多是尋求性方面的滿足。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">二、</span>男性受不了妻子和別的男人有染；女性受不了丈夫把另一個女人當作心上人。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">三、</span>男性外遇只是生活一部份，女性會成為生活的全部。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">四、</span>女性會想挽救婚姻，男性會想離婚。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">五、</span>女性會想找出外遇的原因，男性會以逃避方式面對。</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">五、外遇受害者的心路歷程</h3>
              <div className="space-y-2">
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">一、失去自我認同：</span>以前的優點在丈夫眼中變成缺點，不知何去何從！</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">二、突然覺得不再被珍愛：</span>覺得自己是沒有價值，可能隨時被拋棄的人。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">三、失去自尊心和自我價值感：</span>覺得人生是如此的不值得！</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">四、突然失去身心掌控的能力：</span>身心煎熬，常使受害者陷入憂鬱中！</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">五、某些人生基本信念開始動搖：</span></p>
                <p className="text-gray-700 leading-relaxed pl-4">（一）不再相信這世界是善良、仁慈，覺得處處不安全，隨時會被害！<br />（二）這世界不再是有規可循、有意義的地方，耕耘不一定會有收穫，行善反而遭惡報！<br />（三）不再認為自己是可愛、有價值的人。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">六、</span>常自問：「為何會遭遇這種事？」甚至懷疑信仰。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">七、</span>產生強烈孤寂感。</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">六、破除外遇的八個迷思</h3>
              <div className="space-y-2">
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">一、</span>大家都這樣、我為什麼不可以？</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">二、</span>外遇的對象一定比元配更漂亮、更性感、更有吸引力？「事實不然，外遇男人是因從第三者得到尊重、崇拜和需要感」。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">三、</span>會發生外遇，被背叛的一方一定也有錯？「事實上，外遇是自己的選擇，外遇者不可以找合理的藉口，以減輕自己的罪惡感」！</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">四、</span>會有外遇一定是因為不忠者不再愛原來的配偶了？「事實上，夫妻一定有一份攜手共度甘苦的恩情，出軌者會昧著良心，刻意忽視那份恩情。所以，我們要重新喚醒那份存在的恩情，是治療重要的過程」！</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">五、</span>外遇對瀕臨破裂的婚姻關係有活化作用？「這是引火自焚」！</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">六、</span>人對性的需求有一定的限度，如果在外面得到了滿足，對性的需求就減少，所以一旦有了外遇，回家後會逃避房事？「這不一定正確」！</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">七、</span>如果在情感和性生活上得到滿足，就一定不會有外遇？「這忽略了人的軟弱和劣根性！我們都需要上帝的恩典和保守才能逃避魔鬼的誘惑」！</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">八、</span>發生外遇最後一定會以離婚收場？「事實上外遇可以是轉機，讓婚姻的問題被調整和改進。然而，修復婚姻需要時間，有些受害者在出軌的配偶回頭的初期，相當平靜、理智，但過一陣子，潛意識開始試驗不忠的一方，有時會無理取鬧以試探對方是否真正悔改、真正愛自己。此時，不忠者若能以耐心、愛心傾聽，體諒自己傷害的配偶心中的傷痛，受害者便能重新信任不忠的配偶，二人才能進入更高層次的醫治」。</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">七、如何避免婚外情？</h3>
              <div className="space-y-2">
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">一、</span>夫妻建立滿足的愛的生活，並且與神建立關係，也建立屬靈同伴的關係，彼此看守。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">二、</span>對「神所配合的配偶必能滿足我的一切需要」有完全的信心，並破除對愛情的錯誤觀念。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">三、</span>小心與異性交往，盡量避免與異性單獨處在同一個空間，或單獨搭載在同一車內，若實在不得已需要給異性搭載便車，也選擇坐在後座，避免在副駕駛座。因為當男女獨處一室時的特殊情境氛圍，會由於「異性相吸」緣故而產生莫名的「化學情愫」，這甚至可以衝破、跨越你想不到的年齡、理智、倫理上的界線。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">四、</span>夫妻不宜分開太久。保羅說：「夫妻不可彼此虧負，除非兩相情願，暫時分房，為要專心禱告方可；以後仍要同房，免得撒但趁著你們情不自禁，引誘你們」（林前7:5）。</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">八、如何面對外遇風暴？</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                外遇是非常複雜的問題，隨便告訴別人該如何做是很危險的，因為每個人的情況都不一樣。
              </p>

              <h4 className="font-semibold text-amber-800 mb-2">多數人面對外遇的四種方式</h4>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-amber-700 mb-1">第一種：毀滅性的報復</p>
                  <p className="text-gray-700 leading-relaxed">在憤怒中故意去打擊、傷害不忠實的外遇者，以各樣的方式控告對方不良的行為，對其施加壓力，強迫他放棄第三者。這樣的方法雖抓住了他的人，卻無法抓住他的心，無法擔保對方將來不會再發生外遇。</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-700 mb-1">第二種：當對方的腳踏墊</p>
                  <p className="text-gray-700 leading-relaxed">一味努力的討好、姑息對方，對他百依百順，甚至告訴他：「我很愛你，可以把第三者帶回家來，我們可以二女共事一夫，唯一的條件就是，你不要離開我」！因為她把自尊和安全感建立在丈夫的身上，覺得失去丈夫就不能生存，為了留住丈夫，不惜犧牲人格尊嚴，只要丈夫不拋棄她，什麼都願意做。然而，這樣做反而使對方無法對你產生愛意！愛情的氧氣就是給對方心理空間，一味依賴、討好，只會使對方感到窒息，反而與你保持距離。愛情的燃料來自一個人的信心、骨氣、自尊與自重，連自己都看不起自己，又如何能使配偶欣賞妳、被妳吸引呢？</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-700 mb-1">第三種：忍耐等候</p>
                  <p className="text-gray-700 leading-relaxed">長期容忍，以愛心和耐心等待不忠的配偶回頭，不輕言放棄婚姻，願意長期容忍，讓不忠者自由進出家門，可以和第三者競爭到底，可能反敗為勝。這種方式的缺點是：不忠者有可能腳踏兩條船，兩邊都不放棄，等到不忠者與第三者有了孩子，事情會變得更複雜。因此，若要長期容忍，必須作好心理準備，萬一外遇者永不回頭，自己也能堅強地開創新生，有了這樣的決心與胸懷，不患得患失，才能增加反敗為勝的機率！</p>
                </div>
                <div>
                  <p className="font-semibold text-amber-700 mb-1">第四種：堅靭的愛</p>
                  <p className="text-gray-700 leading-relaxed">「堅靭的愛」的重點是：當初我並沒有拿槍逼著你和我結婚，如果你不再愛我，那就隨你去吧！如果我把鳥籠打開，不再拘束他的時候，這隻鳥必須仔細考量到底要不要飛出去？使不忠者必須面對後果，並仔細思量應如何抉擇，不姑息，要對方負起責任作選擇：「只要你願意中止外遇，我願意與你重新再來，一起醫治、重建我們的婚姻」！</p>
                </div>
              </div>

              <h4 className="font-semibold text-amber-800 mb-2 mt-4">最合宜的處理方式</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                介於第三種和第四種之間的處理方式：
              </p>
              <div className="space-y-2">
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">一、不要衝動行事：</span>在不忠者未能用理性作正確判斷與抉擇之前，儘量不要衝動地把不忠者趕出家門或馬上離婚。鼓勵受害者尋求婚姻輔導的支持與引導，一方面療傷止痛，一方面全盤思索外遇發生的因由與有效的對策。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">二、減少推力、增加吸力：</span>痛定思痛，反省自身的缺點，努力改善自己的性情，吸引力就會增加（例如，改善過度強悍或愛掌控的性情、或過度依賴、毫無主見的性情等）。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">三、善用智慧增加「愛的存款」：</span>例如，把家打理好、保持情緒穩定、盡心照顧子女及對方家人等。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-amber-700">四、一步步重建彼此之間的信任與親密，將痛苦變成祝福：</span></p>
                <p className="text-gray-700 leading-relaxed pl-4">（一）勸勉受害者：若開始自省與成長，在痛苦中更深刻體驗上帝的愛，並增加生命的深度，變成一個更可愛的人，這就成功了！在痛苦時尋求上帝的愛，因為你幸福的來源並不是你的伴侶，而是上帝的愛！在外遇危機中，千萬不要孤立自己，不管對方是否回頭，都要堅強地以積極的態度面對，為自己和家庭開創光明的未來。</p>
                <p className="text-gray-700 leading-relaxed pl-4">（二）勸勉不忠者：找到可靠的朋友，協助你弄清混亂的情緒，理智地作出對各方傷害最小的抉擇，只要有心，婚姻可以重建，愛火可以重燃！</p>
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
                '外遇的三大警訊是親密感、藏匿性、性吸引力，一旦具備這三項就已進入外遇高危險期；六種外遇類型（一夜情、拈花惹草、修復、長期情感外遇、報復、退場型）中，「長期情感外遇型」因涉及深厚情感依附而最難處理。',
                '男女對外遇的反應存在明顯差異——女性多為尋求心靈相契、男性多為尋求性滿足；女性容易把外遇看作生活全部並想挽救婚姻，男性則傾向把外遇視為生活一部份並想逃避或離婚，理解這些差異有助於陪伴外遇受害者。',
                '外遇受害者常經歷失去自我認同、不再被珍愛感、失去自尊與自我價值、失控的身心煎熬、基本人生信念動搖（世界不再善良安全、行善未必有好報、自己不再可愛有價值）等心路歷程，需要被溫柔地陪伴而非簡化評斷。',
                '破除外遇八個迷思——外遇不是因為第三者更有魅力、被背叛者未必有錯、外遇不代表不再愛原配偶、外遇不能活化瀕臨破裂的婚姻（是引火自焚）、性滿足與否不能保證杜絕外遇，這些迷思的破除有助於當事人與陪伴者更準確理解外遇的本質。',
                '面對外遇風暴常見四種方式（毀滅性報復、當腳踏墊、忍耐等候、堅韌的愛）各有利弊，最合宜的處理方式介於「忍耐等候」與「堅韌的愛」之間——不衝動行事、減少推力增加吸力、累積愛的存款、一步步重建信任，並提醒受害者的幸福源頭是上帝的愛而非伴侶本身。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「當對方的腳踏墊」為何反而無法挽回婚姻，對受害者的自我價值有何提醒？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者指出，一味犧牲自尊、無底線討好外遇的配偶，反而會讓對方失去尊重與被吸引的動力——「愛情的燃料來自一個人的信心、骨氣、自尊與自重」。這提醒受害者，健康的自我價值感不應建立在配偶是否留下，而應根植於神的愛；唯有先穩固自己與神的關係，才能在婚姻危機中活出真正有吸引力、有尊嚴的生命樣式，而非用犧牲尊嚴的方式挽留對方。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「小心與異性交往」的具體提醒（避免單獨處在同一空間、坐後座而非副駕），對今日職場與服事中的異性互動有何實用價值？</h4>
              <p className="text-gray-700 leading-relaxed">
                這些看似瑣碎的細節提醒，反映出作者對「化學情愫」如何在不知不覺中滋長的深刻理解——外遇往往不是從一開始就蓄意計畫，而是從一次次看似無害的獨處機會中逐漸累積。這對今日教會同工、職場夥伴之間的異性互動具有實用的防範價值，建立清楚的界線規範，是保護婚姻與服事關係的智慧之舉，而非不信任的表現。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「你幸福的來源不是你的伴侶，而是上帝的愛」，這句話對受害者走出外遇創傷有何深層意義？</h4>
              <p className="text-gray-700 leading-relaxed">
                外遇對受害者最深的傷害之一，是把整個人生的意義感與安全感都寄託在配偶的忠誠上，一旦配偶背叛，整個人生基本信念隨之崩解。作者提醒受害者把幸福的根基重新錨定在神身上，這不是要人放棄對婚姻的努力，而是提醒唯有先在神裡面找到不被人奪去的價值與安全感，才能有足夠的內在力量去面對婚姻修復這條漫長而艱難的道路。
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
              '在讀這一章之前，你是否知道外遇有「親密感、藏匿性、性吸引力」三個明顯的警訊？你如何在自己與異性的互動中防範這些警訊的出現？',
              '「破除外遇八個迷思」中，哪一個迷思是你原本也曾相信、但讀完後有所調整的？',
              '若你身邊有朋友正經歷配偶外遇的痛苦，你如何運用「外遇受害者的心路歷程」這段內容，更有同理心地陪伴他們？',
              '面對外遇風暴的四種方式（毀滅性報復、腳踏墊、忍耐等候、堅韌的愛），你認為自己天生的個性傾向會落在哪一種？',
              '「你幸福的來源不是你的伴侶，而是上帝的愛」——你如何理解這句話？這對你經營婚姻或感情關係的心態有何提醒？',
              '你認為教會可以如何更好地建立防範機制（如異性互動界線的教導），來保護弟兄姐妹的婚姻不落入外遇的試探？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 讀哥林多前書七章1-5節</h4>
              <p className="text-gray-700 mb-2">找時間讀保羅對夫妻親密關係的教導，思想「夫妻不宜分開太久」這個提醒，對維繫婚姻親密感的實際意義。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 檢視自己與異性互動的界線</h4>
              <p className="text-gray-700 mb-2">
                誠實檢視自己（尤其若已婚）與異性同事、朋友、服事夥伴的互動方式，是否已經出現「親密感」「藏匿性」「性吸引力」的警訊，並主動與配偶或屬靈同伴坦誠溝通、建立健康的界線。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，求祢保守我的婚姻與家庭，使我與配偶之間有滿足的愛的關係，也與祢建立親密的關係。求祢賜給我智慧，能敏銳察覺任何可能導致外遇的警訊，並勇敢設立健康的界線。若有正在經歷外遇創傷的弟兄姐妹，求祢親自醫治他們破碎的心，讓他們知道，真正的幸福與安全感，唯獨在祢的愛裡才能尋見。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
