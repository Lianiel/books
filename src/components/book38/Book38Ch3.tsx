import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book38Ch3() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent">第三章</h1>
        <h2 className="text-xl font-semibold text-gray-700">揚起船帆</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">一、划艇 vs 帆船——凱蒂與蘿拉的故事</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸以兩位耐力運動員的故事開場：凱蒂·斯伯茨（Katie Spotz）與蘿拉·德克爾（Laura Dekker）都擁有自己的船隻、都因單人航行登上新聞頭條，卻有一個巨大差異——凱蒂划船（rowed），蘿拉駕帆船（sailed）。二十三歲的凱蒂從西非一路把船划到南美洲，4,500多公里的航程耗時七十天五小時又二十二分鐘，每天划行八到十個小時，努力戰勝雙手的水泡；蘿拉則利用風力航行，2012年創下最年輕完成單人環遊世界的紀錄，旅程花了一年零五個月，過程中需要避開礁石、在無數風暴中生存。陸可鐸坦言自己絕不想模仿她們的冒險，但若一定要在划船和帆船之間選一個，他很清楚自己會選哪一種——他問讀者：在屬靈方面，哪種船更像你的靈性歷程？划艇還是帆船？
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">二、清單式基督徒生活的疲憊——擺脫不了自己</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸列出一長串神對信徒的呼召：照顧貧窮困苦的人、安慰失落迷惘的人、永遠誠實面對、原諒傷害你的人、不住禱告、無私給予、做合乎道德的決定；還要成為金錢的好管家、伴侶的好配偶、社會的好成員、環境的好管理者、職場的好員工；神還挑戰我們發掘恩賜、接觸迷失的人、找到浪子並祝福他們、控制脾氣慾望貪婪傲慢口舌懶惰食慾和惡劣態度。他問：看到這裡，你累了嗎？大海撈針都比完成這些任務更容易，改變世界？何必呢，大多數時候我們連改變自己都做不到！他分享一位朋友十歲兒子離家出走一整天後、垂頭喪氣走回家的故事，父親問他學到了什麼，男孩回答：「我學到無論去哪，都擺脫不了自己。」陸可鐸感嘆：說得真好，我們不都是如此嗎？我們都帶著貪婪、私慾、創傷和缺陷，連一刻也不敢想像自己有辦法活成神期望的模樣，但我們也不敢懷疑神會缺乏賜下這份能力的力量——祂賜我們力量，活出祂呼召的樣式。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">三、尼哥底母的深夜拜訪——「你必須重生」</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸講述約翰福音三章尼哥底母的故事：以色列只有六千名法利賽人，尼哥底母是其中之一；猶太最高議會只有七十一位神職人員，他也是其中之一；耶穌甚至稱他為「以色列人的先生」。這位地位崇高的宗教領袖夜裡來見耶穌，圓滑地奉承：「拉比，我們知道你是由神那裡來作師傅的；因為你所行的神蹟，若沒有神同在，無人能行。」（約翰福音三章2節）耶穌卻直接了當地回應：「我實實在在地告訴你，人若不重生，就不能見神的國。」（三章3節）陸可鐸指出，耶穌對尼哥底母顯赫的資歷絲毫不感興趣，只告訴他必須「回到起點，重新開始」。尼哥底母驚訝地問：「人已經老了，如何能重生呢？豈能再進母腹生出來嗎？」（三章4節）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸觀察到，尼哥底母在這段對話中四次使用「能」這個詞：「無人能……」「如何能……」「豈能……」「怎能有這事呢？」（三章9節）——他過度專注於人能做什麼、不能做什麼，全是關注人的努力、能力和成就，以為必須拼命努力才能進天國的大門。相反地，耶穌卻四次提到人的無能為力：若沒有屬天的幫助，我們不能見神的國（三章3節）、不能進神的國（三章5節）、不能從靈生出（三章6節）、不能察覺聖靈的引導（三章8節）。陸可鐸總結，這是一場經典的對話：一邊是尼哥底母，代表所有懷抱善意、敬畏神、信守聖經、遵守律法、老實划船的人；另一邊是耶穌基督，祂說：「我實實在在地告訴你，人若不是從水和聖靈生的，就不能進神的國。從肉身生的就是肉身；從靈生的就是靈。」（三章5-6節）他解釋，「神的國」指的是在今生與神建立關係、在來生進入天國——要獲得天國國籍，答案是我們得重生：第一次出生時是新生的人，第二次出生則是成為新造的人，而見證我們第二次出生的正是聖靈——若沒有聖靈的工作，我們將不可能重生，正如哥林多前書十二章3節所說：「若不是被聖靈感動的，也沒有能說『耶穌是主』的。」
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">四、聖靈像風——凱柏的引言</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸引約翰福音三章8節：「風隨著意思吹，你聽見風的響聲，卻不曉得從哪裡來，往哪裡去；凡從聖靈生的，也是如此。」他指出，耶穌在描述聖靈時有無數比喻可選——彗星、星系、海洋深處、大白鯨，卻選擇用「風」向尼哥底母說明，因為聖靈像風一樣，是一種無形的力量。他引荷蘭神學家凱柏（Abraham Kuyper）花多年撰寫、超過一千頁研究聖靈的著作，第一章標題「需謹慎對待」中的一段話：「祂不以眼見的形式顯現；祂從未由無形的虛空中浮現。祂徘徊在我們四周，沒有固定的形體，無法理解，祂始終是個謎。祂就像風！我們聽見它的聲音，卻不知道它從何而來，往哪裡去。肉眼看不見、耳朵聽不到，更別說要用手觸摸。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸說，這是何等的好消息！我們需要來自世界以外的力量幫助我們，一種不被我們所受的打擊、干擾和束縛所影響的力量——聖靈不受天氣狀況、身體老化、疫情、股市波動或獨裁者影響，祂從不生病、永不害怕、不擔心、不竭力、不掙扎。祂也不受任何政府或組織的支配，無須向總統、祭司、王子或牧師稟報，隨己意吹拂，力量大到可以開出一條道路、打破偏見的壁壘、征服最頑固的心腸，卻又極其溫柔，輕柔得幾乎連一片葉子都不會搖動——聖靈既可以是五旬節時那咆哮的狂風，也可以是何烈山上那微小的聲音。他引申三章8節下半句：「凡從聖靈生的，也是如此」——植物生的就是植物，狗生的就是狗，魚生的就是魚，從聖靈生的就是靈：我們裡面擁有聖靈之風和祂無形的力量，承載著神的奧祕和威嚴。他問讀者：停下來想想那些讓你感到困難的事，是什麼樣的挑戰讓你喘不過氣？原諒仇敵？解決問題？戒除壞習慣？你做不到嗎？聖靈能做到——天國之風的大能就在你裡面。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">五、划船式基督信仰與帆船出租的糗事</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                陸可鐸分享自己在風勢強勁的西德州長大，一次和朋友詹姆斯租了一艘帆船，兩人都不會航行，爬上船後失去動力，卻不知道怎麼解開桅杆或升起船帆，只好跳進湖裡游到船後，用力把船往碼頭推。他感嘆：兩個無知的少年踢著腿把船往碼頭推的模樣，也像是許多善良基督徒的寫照——耗盡每一絲力氣，想辦法把自己推到岸上，但耶穌邀請我們揚起船帆。他總結：划船式的基督信仰令人筋疲力盡、垂頭喪氣，人們在一遍又一遍的嘗試中枯竭和絕望；但讓聖靈來動工的人會找到新的力量——生活中依然有風暴，水面依舊波濤洶湧，但他們不必獨自面對狂風暴雨。他對比：尼哥底母執著於「能不能」，基督徒看重的則是「成了」——救恩的工作已經完成，神幫助那些承認靠自己無能為力的人。他鼓勵讀者信靠耶穌去完成只有祂能做的工作，依靠聖靈在裡面喚醒全新的靈和生命：不再追求儀式、不再疲憊不堪、不再受困於無盡的待辦清單，也不再有做了許多事卻感覺徒勞無功的頹喪，不必再在夜裡懷著恐懼到基督面前——在新的一天於光明中來到祂面前，領受全新的自己所帶來的力量。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-800 text-lg mb-3">六、停電之夜——人力無法發電的比喻</h3>
              <p className="text-gray-700 leading-relaxed">
                陸可鐸以一次社區停電的經歷作結：燈滅了、電視關了、空調停了、微波爐無法運轉、冰箱正逐漸變成烤箱，房間一瞬間變成黑暗靜悄悄的洞穴。他妻子德娜琳搬來梯子，用力旋轉天花板風扇葉片，氣喘吁吁地問：「你有感覺到風嗎？」陸可鐸則不斷把燈開了又關、關了又開，試圖靠開關動作產生電力，同時對著毫無反應的電視機大喊：「來吧！動起來吧！開始運作吧！」他自嘲：即使電力沒有恢復，我們仍然繼續努力，你該看看我們當時的樣子——他坦言，這樣的狂熱再怎麼努力也沒辦法發電。他說：這正是耶穌要告訴尼哥底母的訊息，也是祂對我們的教導——我們無法單靠自己完成使命，我們沒有足夠的力量、決心或能力，但是聖靈可以，所以信靠祂吧，這會是你最聰明的選擇。現在，揚起船帆！深呼吸一口氣，好好享受這趟旅程吧！
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
                '凱蒂靠「划船」橫渡大西洋、蘿拉靠「風」完成環遊世界，象徵了人的努力與聖靈能力這兩種截然不同的屬靈生命模式。',
                '屬靈生命若像划船，靠的是自己拼命的努力；若像帆船，則是揚起順服的帆，讓聖靈的風帶領前行——兩者付出的辛苦程度天差地遠。',
                '尼哥底母代表相信「拼命努力就能得救」的宗教心態，但耶穌告訴他：「人若不重生，就不能見神的國」——重生不是靠人的努力，而是聖靈的工作。',
                '人靠自己「不能」見、不能進、不能從靈生出、也不能察覺聖靈的引導——耶穌四次強調人的無能為力，正是為了指向聖靈的必要性。',
                '聖靈像風：不受限制、無法被掌控、充滿能力又極其溫柔，祂是使信徒重生、得力、改變生命的真正動力，而非我們自己拼盡全力硬撐。',
                '「停電之夜」的比喻生動地說明：無論多麼努力開關燈、對電視大喊，人的力量永遠無法「發電」——真正的能力來源，只能是聖靈。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「重生」（born again）這個詞在教會歷史上曾引發哪些理解上的分歧？</h4>
              <p className="text-gray-700 leading-relaxed">
                「重生」一詞在不同基督教傳統中有不同的神學強調：有些傳統將重生與洗禮的聖禮緊密連結（如天主教、東正教、部分聖公宗傳統），有些傳統（尤其是福音派、重生派）則更強調個人悔改信主那一刻聖靈內住的經歷。這段經文本身「從水和聖靈生的」（約翰福音三章5節）正是歷代神學家爭論的焦點之一——「水」究竟指洗禮的水，還是指以西結書三十六章25-27節「灑清水在你們身上」的潔淨意象。無論立場為何，各傳統都同意重生的核心是聖靈的工作而非人的成就，這正是陸可鐸這一章想強調的重點。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「靠自己努力」與「靠聖靈得力」的張力，如何避免變成不負責任的消極態度？</h4>
              <p className="text-gray-700 leading-relaxed">
                「揚起船帆」的比喻容易被誤解為「什麼都不用做，只要被動等待」，但聖經同時教導信徒要「作工」（腓立比書二章12-13節「就當恐懼戰兢，做成你們得救的工夫……因為你們立志行事都是神在你們心裡運行」）。健康的理解是：帆船仍然需要水手升帆、掌舵、調整方向，只是推動船前進的力量來源不是水手的體力，而是風——同樣，信徒仍然需要委身、操練、做出選擇，只是這一切的能力泉源不是靠自己咬牙硬撐，而是倚靠聖靈的工作。「揚帆」本身也是一種積極的順服行動，而非消極的躺平。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">尼哥底母後來的結局，對「深夜的懷疑者」有何鼓勵？</h4>
              <p className="text-gray-700 leading-relaxed">
                值得注意的是，尼哥底母在約翰福音的敘事中並未就此消失：他在七章50-51節為耶穌辯護（「不先聽本人的口供，不知道他所做的事，難道我們的律法還定他的罪嗎？」），並在十九章38-42節與亞利馬太的約瑟一同為耶穌的身體塗抹沒藥和沉香、安葬耶穌。這暗示了這位深夜來訪、滿心困惑的宗教領袖，最終真實地跟隨了耶穌——這對今日許多「帶著滿腹疑問、卻不敢公開表態」的慕道者是極大的鼓勵：真誠的疑問與緩慢的信心旅程，同樣被神所紀念。
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
              '你現在的信仰生活比較像「划艇型」還是「帆船型」？這種心態源自哪裡——成長的教會、某位導師、你讀到的聖經內容，還是你性格的某一部分？',
              '重讀約翰福音三章1-15節尼哥底母的故事：耶穌用「風」來比喻聖靈，你認為祂為什麼選擇這個意象？這段經文是否幫助你以全新方式理解聖靈？',
              '陸可鐸說「尼哥底母執著於能不能，基督徒看重的則是成了」。在基督教信仰中，什麼已經「成了」？你的思維和行動是否真實反映出你相信這一點？',
              '即使信主已久，也很容易回到划艇型的信仰觀，你覺得這是為什麼？你需要相信關於聖靈的哪些真理，才能真正擁有帆船型的信仰？',
              '請具體指出你現在正面臨的一個困難：若用划艇型信仰觀，你會怎麼解決？若用帆船型信仰觀，你會怎麼做？你現在需要如何倚靠聖靈度過這個難關？',
              '想像如果你真的完全依靠聖靈滿足一切需要，你的日常生活、你看待自己與他人的方式，會有什麼不同？',
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
              <h4 className="font-semibold text-green-700 mb-2">🚣 列出你的「划船清單」</h4>
              <p className="text-gray-700 mb-2">寫下你目前正靠自己「拼命划船」硬撐的三件事（可能是某段關係、某個壞習慣、某項服事），逐一在禱告中把它們交託給聖靈，練習「揚起船帆」而非繼續划槳。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 默想約翰福音三章1-15節</h4>
              <p className="text-gray-700 mb-2">
                完整讀一遍尼哥底母的故事，把自己代入尼哥底母的位置，寫下一句你此刻最想問耶穌的問題。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🌬️ 每天練習「感受風」</h4>
              <p className="text-gray-700 mb-2">
                本週每天找一個安靜的片刻（如走路、通勤、洗碗時），刻意停下手邊「用力硬撐」的思緒，改為簡單禱告：「聖靈，我把這件事交給祢的風，求祢帶領我前進。」
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「聖靈，我承認我常常像那個開了又關電燈開關的傻氣夜晚，用盡力氣卻無法產生真正的能力。求祢像風一樣充滿我，讓我不再靠自己拼命划船，而是揚起順服的帆，讓祢的風帶領我前行。求祢使我在祢裡面重生，經歷全新的自己所帶來的力量。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
