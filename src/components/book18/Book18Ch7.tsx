import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Search, HelpCircle, Check } from 'lucide-react';

export default function Book18Ch7() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    exploration: true,
    questions: true,
    practice: true
  });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">第七章</h1>
        <h2 className="text-xl font-semibold text-gray-700">建造堅固防線</h2>
        <p className="text-sm text-gray-500 mt-2">以弗所書6：14-17</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">
            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">農夫與毒瓜的比喻</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                曾有一個農夫為了對付偷瓜的賊，在地裡豎了一塊標誌牌，上面寫著：「警告：這些瓜中有一個下了毒。」在接下來的幾天裡，他的辦法很有效：瓜沒有再丟。然而，有一天，他發現那塊牌子被改動了，上面的內容變成：「警告：這些瓜中有兩個下了毒。」農夫不得不毀了他的全部瓜田，因為他不知道哪個瓜被下了毒。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                魔鬼也用類似的方法作惡。無論你豎起怎樣的牌子，他都會改變它，提出一些似乎更好的東西。他是個手段高明的竄改者和欺騙者。我們應當怎樣成功地與之爭戰呢？
              </p>
              <p className="text-gray-700 leading-relaxed">
                十八世紀蘇格蘭牧師拉爾夫·厄斯金說，我們對付撒但的惟一選擇是「逃走或戰鬥」。保羅在《以弗所書》第6章10至18節中，主要描述了建立堅固防線的策略：我們靠著上帝所賜軍裝的力量，站穩、戰鬥、取勝，然後把撒但趕出去。保羅告訴我們要穿戴上帝所賜的「全副軍裝」（弗6：11），這包括五件防禦裝備。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">1. 真理的腰帶</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅在《以弗所書》第6章14節中說：「所以要站穩了，用真理當作帶子束腰。」聖經時代，在有形的戰場上，腰帶是用來系或扣在士兵穿的軍裝短上衣的腰部周圍的。腰帶支持腰部和後背下方的肌肉，是佩帶其他軍裝部件的基礎。護心鏡和劍都是附著在腰帶上面的。因此，「束腰」象徵著已經準備好進行戰鬥。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                用真理當作帶子束腰象徵著基督徒使自己持守聖經中所啟示的基督教真道。聖經是我們所信仰的真理的客觀標準，是我們教義和生活的最終權威。聖經談到要約束心意，而不是約束心靈（彼前1：13），因為真理在到達心靈之前，必須先經過頭腦。所以你如果要抵擋撒但，必須先在自己的頭腦裡裝滿真理。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                然而，僅僅頭腦有真理是不夠的，我們還必須擁有心靈的真知識。若要成功地與魔鬼爭戰，不僅我們必須掌握真理，而且真理必須掌握我們。除了上帝之外，撒但可能是宇宙中最有能力的頭腦。人類的智慧和理性不足以與撒但抗衡，但記錄在聖經中並由上帝的兒子賦予了人性的真理，抵擋撒但綽綽有餘。
              </p>
              <p className="text-gray-700 leading-relaxed">
                湯瑪斯·布魯克斯在《寶貴的應對辦法》中說：「人可以合法地買賣自己的房子、土地和珠寶，但真理是無價之寶，千萬不可賣」（21頁）。耶穌說：「你們必曉得真理，真理必叫你們得以自由」（約8：32）。撒但的第一大弱點是他是以謊言為根基的，謊言最終無法抵擋真理。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">2. 公義的護心鏡</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                第二件軍事裝備是公義的護心鏡（6：14）。在保羅生活的時代，士兵們佩帶用金屬或很堅硬的皮革製成的護心鏡。護心鏡遮蓋胸部和腹部，保護重要的器官免受刀劍或其他武器的傷害。護心鏡是抵擋致命傷和其他次要傷害的關鍵性防衛設備。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                公義的護心鏡是上帝在基督裡面賜下的。基督藉著他主動而積極的順服為信徒贏得了公義。基督在主動的順服中，藉著他的受苦和受死，為罪付清了全部贖價，滿足了上帝刑罰的公義。在積極的順服中，基督完美無暇地遵行了上帝聖潔的律法，滿足了上帝完美的要求，為選民贏得了永生。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅說他一生中最大的目標就是得著基督，「並且得以在他裡面，不是有自己因律法而得的義，乃是有信基督的義，就是因信上帝而來的義」（腓3：9）。正如讚美詩所唱的：「我的盼望惟獨建立在耶穌的寶血和公義之上。」
              </p>
              <p className="text-gray-700 leading-relaxed">
                撒但圖謀攔阻我們在基督的公義中安息。他企圖誘惑我們把救恩的盼望建立在自己的感覺之上。然後，當我們的感覺消失了或變得不冷不熱時，撒但便會對我們耳語：「你不是上帝的孩子——否則你不會有這樣的感覺。」感覺不是我們救恩的根基，先要有信心。感覺是信靠基督之公義所結的果子。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">3. 平安的福音當作鞋子</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅在第15節中告訴我們基督徒的第三件軍事裝備：「又用平安的福音當作預備走路的鞋穿在腳上。」一個優秀的士兵需要有合宜的鞋子。保羅所熟悉的羅馬士兵，穿著有很結實的帶子的鞋子，鞋子釘有結實而鋒利的釘子，可以防止士兵滑倒。凱撒和亞歷山大大帝打了很多勝仗，在一定程度上是因為他們的軍隊裝備了適於戰鬥的鞋子，使他們能夠快速行軍，出其不意地趕上敵人。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                平安的福音是一雙有釘子的鞋子，使基督徒在爭戰中能夠放下腳並站立得穩。基督徒可以像路德一樣說「這是我的立場」，或者像保羅一樣說：「在真道上站立得穩」（林前16：13）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                在魔鬼面前站立得穩的最佳辦法，是對福音有盡可能清楚的理解並藉著對基督之寶血的領悟經歷福音的平安。我們的身份、安慰和穩定都取決於在智力上瞭解福音，並在心靈中經歷福音的甘甜。然後你可以確定地說：「賜平安的上帝快要將撒但踐踏在你們腳下」（羅16：20）。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">4. 信德的藤牌</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                第四件軍事裝備是信德的藤牌。保羅說這個藤牌可以幫助信徒「滅盡那惡者一切的火箭」（16節）。在保羅生活的時代，羅馬人的藤牌大約四英尺長，兩英尺寬，足以遮擋身體的大部分。那些藤牌有防火的金屬表層，具有把火箭的殺傷力降到最低的重要作用。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                撒但的詭計就像火箭一樣。撒但有成千上萬種用箭攻擊信徒的方法，包括褻瀆上帝的思想、罪惡的建議和敗壞的願望。他不僅在外部向信徒發射火箭，而且在內部向信徒的心靈和頭腦發射火箭。信心有兩個作用：
              </p>
              <div className="ml-4 space-y-3 mb-3">
                <div className="border-l-4 border-purple-300 pl-4">
                  <p className="font-semibold text-gray-800 mb-1">（1）信心幫助我們認出撒但的詭計</p>
                  <p className="text-gray-700">威廉·格諾爾說：「信心能夠看到感覺的幕後，在罪還沒有化裝登臺之前就看到罪。」信心能夠看透罪的偽裝，看到罪的醜陋和可怕。</p>
                </div>
                <div className="border-l-4 border-purple-300 pl-4">
                  <p className="font-semibold text-gray-800 mb-1">（2）信心把基督放在撒但與我們之間</p>
                  <p className="text-gray-700">基督的寶血是我們藤牌表面的防火層。我們在與撒但爭戰過程中最大的問題是我們忘記抓牢信德的藤牌。要信靠他。他永遠不會離開你或拋棄你。</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                據說：「地獄中最有天才的戰略家制定的戰略計畫也不能勝過信心。所有燃燒的可怕的火箭撞到信心的藤牌上，都只能徒然落下，不能造成任何傷害。」如果沒有使用信心的藤牌——換言之，生活在不信之中——無疑是非常危險的。不信會使我們蒙羞，使我們變得軟弱，毀掉我們的安慰。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3 text-lg">5. 救恩的頭盔</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「戴上救恩的頭盔」（6：17上）。救恩的頭盔是一件關鍵的軍事裝備。無論士兵的身體得到多麼嚴密的保護，如果他的頭沒有遮蓋，那麼他倖存的機會是非常微小的。《帖撒羅尼迦前書》第5章8節告訴我們，這種頭盔是「得救的盼望」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                沮喪是撒但常用的花招。撒但想要基督徒認為自己已經與撒但爭戰了很長時間，但卻幾乎沒有任何進展。他們每天都在同樣的罪上跌倒，似乎沒有任何進步。「我與罪的爭戰是毫無意義的，」他們對自己說，「我想要過聖潔生活的努力是徒然的。我根本不配侍奉上帝。」撒但悄悄潛入，誘惑信徒成為基督軍隊裡的逃兵。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                對付這種火箭的惟一回答是我們將來得救的盼望。救恩在過去是稱義，救恩在如今是成聖，救恩在將來是得榮。得榮是保羅此時所思念的。當撒但使你覺得想要放棄與罪的爭戰時，戴上盼望的頭盔。相信你已經得救，正在得救，將要得救。
              </p>
              <p className="text-gray-700 leading-relaxed">
                《羅馬書》第8章29至30節描述了救恩從永恆的過去到永恆的將來的過程。救恩的鏈條不可能斷開，每一環都是用上帝永恆的、預定的愛固定起來的。預定、呼召、信心、稱義、成聖、得榮這些環節都是緊密聯繫在一起的。沒有人能把你從上帝的手中奪去，也沒有人能把你從基督的手中奪去（約10：28-29）。
              </p>
            </div>
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
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">全副軍裝的整體性</h4>
              <p className="text-gray-700 leading-relaxed">
                保羅兩次強調「全副軍裝」（弗6：11，13），意思是缺少任何一件都是危險的。這五件防禦裝備各有其功能，彼此不可取代：腰帶（真理）支撐整套裝備；護心鏡（公義）保護情感中心；鞋子（平安）使人穩固站立；藤牌（信心）抵擋火箭；頭盔（盼望）防止沮喪。一個只有「感覺真理」但缺乏「基督公義」的人，在撒但的控告面前會崩潰；一個有「公義確信」但沒有「平安」的人，又會在掙扎中站立不穩。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">威廉·格諾爾（William Gurnall）的清教徒貢獻</h4>
              <p className="text-gray-700 leading-relaxed">
                威廉·格諾爾（1617-1679）是清教徒中專門研究以弗所書6章的權威，他的著作《基督徒全副軍裝》（The Christian in Complete Armour）共三卷、超過1200頁，是清教徒屬靈文學的巔峰之作。他對全副軍裝的每一件逐一深入分析，提供了大量關於撒但策略和基督徒回應的實用指導。C.H.司布真稱此書為「清教徒文學的寶庫」，並說他幾乎每天都從中取材。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「客觀公義」vs.「主觀感覺」的神學區別</h4>
              <p className="text-gray-700 leading-relaxed">
                作者強調公義的護心鏡是「基督的公義」而非「個人的感覺」，這是宗教改革的核心教義。路德的「因信稱義」的革命性之處在於：我的義（道德狀態、感覺如何）和我在上帝眼中的地位（基督的義算在我帳上）是分開的。當撒但以「你不夠好」攻擊信徒時，正確的回應不是「我有進步」（主觀感覺），而是「基督的義是我的」（客觀事實）。清教徒稱這為「穿上基督的義袍」。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">盼望作為抵抗沮喪的屬靈武器</h4>
              <p className="text-gray-700 leading-relaxed">
                作者將「救恩的頭盔」解釋為「盼望」，這具有重要的心理學意義。研究顯示，盼望（對未來的積極確定期待）是精神韌性的核心因素之一。聖經的盼望不是樂觀主義（可能失望），而是建立在上帝應許上的確信（「那起初做了善工的，必完成這工」）。撒但對信徒最有效的攻擊之一是讓他們「看不見任何希望」，而保羅的解藥是讓信徒以確定的末世盼望「保護頭部」——即保護心智免受絕望的侵入。
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
          <div className="p-5 bg-white space-y-4">
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">1.</span>
              <p className="text-gray-700">在五件防禦裝備（腰帶/護心鏡/鞋子/藤牌/頭盔）中，你認為你目前哪一件是最薄弱的？為什麼？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">作者說「不僅我們必須掌握真理，而且真理必須掌握我們」。在你的生命中，有哪些真理你知道，但還沒有真正「抓住你」？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">撒但用「你的感覺不好，所以你不是上帝的孩子」來攻擊信徒。你有遭受過這樣的攻擊嗎？用「基督的公義」回應這種攻擊對你有多難？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">「在魔鬼面前站立得穩的最佳辦法，是對福音有盡可能清楚的理解。」你對福音的理解有多清楚？你如何在日常生活中「對自己宣告福音」？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">保羅說信心的藤牌可以「滅盡那惡者一切的火箭」。在你生命中，信心曾如何幫助你抵擋一個具體的撒但攻擊？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">沮喪是撒但的常用武器。你最近有沒有感受到屬靈的沮喪——覺得爭戰毫無意義？盼望的頭盔如何幫助你面對這種攻擊？</p>
            </div>
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
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 「全副軍裝」每日操練</h4>
              <p className="text-gray-700 mb-2">每天早晨花5分鐘，用禱告「穿戴」每一件裝備：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>腰帶：「主，讓我今天以真理束腰——讓聖經真理指導我的一切決定」</li>
                <li>護心鏡：「主，我靠的是基督的公義，不是自己的好壞感覺」</li>
                <li>鞋子：「主，讓福音的平安使我今天站立得穩」</li>
                <li>藤牌：「主，我舉起信心——無論撒但射什麼箭，我信靠祢的保護」</li>
                <li>頭盔：「主，我今天有得救的盼望——祢已開始的善工必要完成」</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 對自己宣告福音真理</h4>
              <p className="text-gray-700 mb-2">識別你最常遭受的撒但攻擊，並建立對應的「公義護心鏡」回應：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>攻擊：「你不夠好」→ 回應：「我的義是基督的義，不是我自己的表現」</li>
                <li>攻擊：「你犯了太多罪」→ 回應：「基督已付清全部贖價，無論多少罪都已被赦」</li>
                <li>攻擊：「你不是真正的信徒」→ 回應：「我受洗了，我領受了基督，這是上帝的恩典」</li>
                <li>把這些真理寫下來，放在睡前讀的地方</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">⏰ 培養「盼望思維」習慣</h4>
              <p className="text-gray-700 mb-2">每週睡前花10分鐘默想將來的榮耀（來自羅8：29-30的救恩金鏈），問自己：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>今天的爭戰和試煉，在永恆的視角下有多大？</li>
                <li>上帝的預定計畫（預知→呼召→稱義→成聖→得榮）如何確保我的最終結局？</li>
                <li>「沒有人能把你從我手中奪去」（約10：28）這個承諾讓你感到什麼？</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">🙏 本章禱告</h4>
              <p className="text-gray-700 leading-relaxed italic">
                「主啊，感謝祢為我預備了全副軍裝。求祢幫助我每日穿戴，不要把任何一件留在衣櫥裡。讓真理束住我的腰，讓基督的公義保護我的心，讓福音的平安使我站立得穩，讓信心擋住一切火箭，讓盼望保護我的頭。在一切軟弱中，讓我想起：爭戰的最終是祢，不是我。奉耶穌的名祈求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
