import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch13() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第十三章</h1>
        <h2 className="text-xl font-semibold text-gray-700">神精心造人</h2>
        <p className="text-gray-500 mt-1">創造天地的來歷，在耶和華神造天地的日子，乃是這樣，野地還沒有草木，田間的菜蔬還沒有長起來；因為耶和華神還沒有降雨在地上，也沒有人耕地，但有霧氣從地上騰，滋潤遍地。耶和華神用地上的塵土造人，將生氣吹在他鼻孔裡，他就成了有靈的活人，名叫亞當。耶和華神在東方的伊甸立了一個園子，把所造的人安置在那裡　創世記二4-8</p>
      </div>

      {/* 正文 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">正文</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、創世記二章的特色</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記二4-25乃是第二個創造的故事，與創世記一1至二3第一個創造的故事相比較，有些部分相似，但大部分是用另一個角度來補充第一個故事。謝挺博士認為創世記一、二章是在講創世中的創造，第一章是宏觀，第二章是微觀。二者暫用創一與創二作代表。在時間次序上，創二並非在創一之後，而是與創一有部分平行。類似創世記十章與十一章的關係，十章涵蓋整體較廣的時間，十一章則補充過程中人們分地居住的細節，並詳細講閃的後代。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">以下列出十六方面創一與創二的不同。</p>
              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200 mb-3">
                <ol className="space-y-1.5 leading-relaxed text-gray-700 list-decimal list-inside">
                  <li>創一是宏觀的，概略講整體的事；創二是微觀的，仔細講局部的事。</li>
                  <li>創一的神是超越的主，創二的神是同在的父。</li>
                  <li>創一講神是萬有的創造者，創二講神是伊甸園及婚姻的設立者。</li>
                  <li>創一的神無所不在，創二的神在一個特定的地方（伊甸園）。</li>
                  <li>創一是按時間次序創造；創二是以人為中心超越時間來創造。</li>
                  <li>創一提供了養育魚的海，創二提供了滋潤樹的河。</li>
                  <li>創一講人有神的形象，創二講人有身體與靈魂。</li>
                  <li>創一神藉說話創造，創二神用塵土造人。</li>
                  <li>創一只提供身體的食物——蔬果，創二加上提供靈魂的食物——生命果。</li>
                  <li>創一講神豐富萬物，創二講神豐富人生。</li>
                  <li>創一講神的普遍恩典，創二講神的特殊恩典——生命果。</li>
                  <li>創一的內容呈現在自然啟示之中，創二的內容需藉特殊啟示傳達。</li>
                  <li>創一講人要治理全地，創二講人要看守伊甸園。</li>
                  <li>創一講人領受神的權柄，創二講人順服神的權柄——禁吃善惡果。</li>
                  <li>創一看一切所造皆甚好，創二說那人獨居不好。</li>
                  <li>創一同時造男造女，創二先造男後造女（從男人造出女人）。</li>
                </ol>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                從這十六方面的不同，可以看出，神不僅是大有能力的神，也是大有智慧的神；神不僅高高在上，神也在我們身邊，與我們親近。這些都值得我們細細體會。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                看完創一與創二的不同，重新審視創世記一章的地與創世記二章的伊甸園相似之處，舊約學者黃儀章認為創世記一章的地與創世記二章的伊甸園是相合的：1. 兩者都提到供給人食用的果樹，2. 一章講人按神的形像而造，二章講神使人成為有靈的活人，且有夫妻關係，這是神的形像；3. 都有供人安息之處，4. 都有動物陪伴。
              </p>
              <p className="text-gray-700 leading-relaxed">
                伊甸園也關連到神後來應許亞伯拉罕的地：1. 園子四邊的疆界是希底結河、伯拉河、比遜河、基訓河，基訓河是環繞古實全地的河，古實與埃及是一體的，故基訓河可以理解為埃及河。神應許給亞伯拉罕子孫的地，亦是以伯拉河、埃及河為邊界（創十五18）。2. 伊甸園與應許之地都被形容為「好」地。3. 伊甸園與應許之地都被看成是安息之地。4. 它們都是上帝給人的禮物。5. 都是神用大能的手預備的。6. 都指向新耶路撒冷，一個充滿茂盛、和諧和醫治的土地。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、創造天地的來歷</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                第二個創造故事的起始句是：「創造天地的來歷……」來歷這個字希伯來文是 תּוֹלְדוֹת（towledowth），在創世記裡面出現十三次，大部分都翻譯作後代，各有一次翻譯作來歷、支派、家譜，大體都有後代或家譜的意思。總共包含十個後代家譜的紀錄，與整個創世記的主要脈絡相關，值得列出來：
              </p>
              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200 mb-3">
                <ol className="space-y-1.5 leading-relaxed text-gray-700 list-decimal list-inside">
                  <li>天地的後代：「創造天地的來歷……」（創二4），意思是以下將會講關於創造天地之後的故事。稍微隱含：亞當從地土而造，如同是地的後代。亞當與地有連結的關係，所以亞當犯罪，地也受咒詛。亞當有雙重的生命本質，既是從地而出，也是從神而出，所以也稱為神的兒子（路三38）。</li>
                  <li>亞當的後代：「亞當的後代記在下面……」（創五1）</li>
                  <li>挪亞的後代：「挪亞的後代記在下面……」（創六9）</li>
                  <li>閃、含、雅弗的後代：「挪亞的兒子閃、含、雅弗的後代記在下面……各隨他們的支派（後代）立國。」（創十1，32）</li>
                  <li>閃的後代：「閃的後代記在下面……」（創十一10）</li>
                  <li>他拉（亞伯拉罕）的後代：「他拉的後代記在下面……」（創十一27）</li>
                  <li>以實瑪利的後代：「撒拉的使女埃及人夏甲給亞伯拉罕所生的兒子是以實瑪利（後代），以實瑪利兒子們的名字，按著他們的家譜（後代）記在下面……」（創廿五12-13）</li>
                  <li>以撒的後代：「以撒的後代記在下面……」（創廿五19）</li>
                  <li>以掃的後代：「以掃就是以東，他的後代記在下面……以掃是西珥山裡以東人的始祖，他的後代記在下面……」（創卅六1，9）</li>
                  <li>雅各的後代：「雅各的記略（後代）如下……」（創卅七2）</li>
                </ol>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                這十段家譜，前五段屬於創世記前半，大體在十一章之前；後五段屬於創世記後半，大體在十二章之後。創世記家譜的焦點人物是亞伯拉罕，創世記的十段家譜就以亞伯拉罕為中心，前後各有五段。越仔細研究創世記的家譜，越能感受到神為了拯救人類所傾注的愛。從家譜中可看到許多敬虔的後裔擔負使命，不斷傳承，打美好的仗，為使所應許的彌賽亞來到，以成就全人類的救恩。
              </p>
              <p className="text-gray-700 leading-relaxed">
                有一個主要的譜系，是彌賽亞譜系，從這個譜系將會產生彌賽亞。從亞當開始，其中六個名字——亞當、挪亞、閃、他拉、以撒、雅各，屬於彌賽亞譜系。其後代將產生預表基督的大衛王，並從大衛的子孫產生永遠的君王基督耶穌。含、雅弗不在彌賽亞譜系的主脈裡，但他們是重要的配角，直到如今，其後裔都大大活躍在世界的舞台上，藉著基督的福音，也有許多人會成為彌賽亞的屬靈後裔。以實瑪利不在彌賽亞譜系的主脈裡，但他也是重要的配角，直到如今，其後裔在今天的世界舞台上真是舉足輕重。末後的日子，神要眷顧以實瑪利的子孫（阿拉伯人），多多地信靠耶穌，成為彌賽亞的屬靈後裔，這事正在發生。以掃不在彌賽亞譜系的主脈裡，甚至成為雅各的對敵，但他在以色列的歷史中有不小的影響，因此其後裔也被記錄下來。從正面來說，約伯記的主角約伯住在東方，他不是雅各的後裔，或許有可能是以掃的後裔，而約伯的幾位朋友，至少有一位是以掃的後裔。約伯親眼見神，約伯的朋友最後都被約伯祝福代禱，領受了神的恩典。整個民族不一定很蒙福，但其中的個人，只要願意來尋求神、認識神、敬拜神，還是可以很蒙福。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">參、神造人的時機</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記二5：「野地還沒有草木，菜蔬還沒有長起來，因為還沒有降雨，也沒有人耕地。」這句話看起來，好像是說，必須先有人才有植物。其實這裡不是在講神完成造人的時間點，而是在講神造人的其中一個動機，是要讓人來耕地，也就是經營利用土地。後面的第八節說到：「耶和華神在東方的伊甸立了一個園子，把所造的人安置在那裡。」這說明長出植物還是在完成造人之前。
              </p>
              <p className="text-gray-700 leading-relaxed">
                所以4-8節完整的意思是，當有了地而還沒有植物的時候，神已經在構思造人的事，接著開始了造人的行動（7節）。在伊甸園設立好之後，人才完整被造好，而被放在伊甸園裡。這樣的理解會有別於創世記一章第六日創造給我們的印象，那裡是說第六天的後半才造人，好像有點倉促。但第二章是說，神早就在籌畫了，比動物更早，比植物更早，甚至已在進行中，到了第六天後半才有了完成品。這說明，人是神最精心的創造。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">肆、神造人的方法</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                創世記二7：「耶和華神用地上的塵土造人，將生氣吹在他鼻孔裡，他就成了有靈的活人，名叫亞當。」這裡描述，神親手塑造人，人的眼睛、鼻子、嘴巴、耳朵、手腳，都是神親自捏出來的。然後有一個吹氣的動作，這很像親吻，之後這人就活了，成為有靈魂的人。這表明神與人親密，也期待與人繼續有親密的關係。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                神造人用了兩種成分：地上塵土與神的氣，而有了身體與靈魂。有幾處經文講到塵土、靈、氣，呼應這個真理。創世記三19：「你必汗流滿面才得糊口，直到你歸了土，因為你是從土而出的。你本是塵土，仍要歸於塵土。」傳道書三19-21：「因為世人遭遇的，獸也遭遇，所遭遇的都是一樣：這個怎樣死，那個也怎樣死，氣息都是一樣。人不能強於獸，都是虛空。都歸一處，都是出於塵土，也都歸於塵土。誰知道人的靈是往上升，獸的魂是下入地呢？」
              </p>
              <p className="text-gray-700 leading-relaxed">
                獸只有一個本體，牠的魂是出於體，所以死了就歸於地。但人不僅有體，也有靈，所以人的靈會往上升，歸於賜靈的神。這不是說人都要上天堂，而是說人的靈是永存的，要接受神的安排處置，有的要去天堂，有的要去地獄。約伯記卅二8：「但在人裡面有靈；全能者的氣使人有聰明。」從這裡看出，人的靈是從神的氣而來的，並藉此有了聰明。箴言二十27：「人的靈是耶和華的燈，鑒察人的心腹。」從這裡看出，靈有神的光，有良知的功能。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">伍、人的本體</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                人有兩個本體，可稱之為體與靈，第一個本體是體，體出於地，體需與地循環，才能生存、成長，也就是每天吃菜蔬與果子，就算洪水後開放吃動物的肉，動物的肉也是來自吃地的出產。第二個本體是靈，靈出於神，靈需與神相交，才能生存、成長。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                路加福音四4：「耶穌回答說：經上記著說：人活著不是單靠食物，乃是靠神口裡所出的一切話。」這句話引用自申命記八3。約翰福音六63：「叫人活著的乃是靈，肉體是無益的。我對你們所說的話就是靈，就是生命。」所以我們每天領受神的話是很重要的，是在供應裡面的靈，靈沒有屬靈的食物，會虛弱枯萎；靈有豐盛的食物，才會健壯有能力。不是虛應故事地看一下聖經，乃是要讀了並禱告出來，那是在消化神的話。要感受到甘甜、飽足，才是真正領受了神的話。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                關於人有身體與靈魂兩個本體，在舊約是很清楚的，就如傳道書所講的：「塵土仍歸於地，靈仍歸於賜靈的神。」（傳十二7）到了新約時代，有人提出，人有三個本體——靈、魂、體，因為帖撒羅尼迦前書五23說到：「願賜平安的神親自使你們全然成聖！又願你們的靈與魂與身子得蒙保守，在我主耶穌基督降臨的時候，完全無可指摘！」還有希伯來書四12說到：「神的道是活潑的，是有功效的，比一切兩刃的劍更快，甚至魂與靈，骨節與骨髓，都能刺入、剖開，連心中的思念和主意都能辨明。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這可能是因為在新約時代，人被聖靈重生之後，開始有能力對抗三仇敵——魔鬼、世俗、私慾，魂的功能被凸顯出來。魂的功能是理智、情感、意志，當靈飽足神的食物之後，魂就能夠作正確的反應，因為魂的功能一部分是從靈來的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                整個舊約聖經，靈與魂基本通用，都是講同一個本體，就是一般華人說的靈魂。所以基本上應該還是兩個本體，主要根據就是創世記二章神的創造，藉由塵土與神的氣使人有了兩個本體。所以帖撒羅尼迦前書五23與希伯來書四12兩處經文所說的魂比較可能是指功能，不是本體。林道亮博士提出二體三用說，認為人有兩個本體，就是「靈」與「體」。但有「靈」、「魂」、「體」三種功用。「靈」的功用是靈覺、良知。「魂」的功用是理智、情感、意志，「體」的功用包含四肢、五官、各種體內系統等。「魂」的理智、情感、意志等三功用，既出於「靈」的運作，也受到「體」的影響。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當我們的靈與神緊密連結時，我們能作出正確的意志決定，人若打我的臉，出於肉體的反應，我會踢他的腳；但若靈強壯，我會願意讓他打我另一邊的臉。理智方面，吃某些食物會補充腦所需的營養，使人聰明；但聖經說，敬畏耶和華是智慧的開端，所以理智受到體與靈雙方面的影響。情感方面，人遇到不好的事會沮喪，但靈若強壯，我們可以在任何景況，依然靠主喜樂。
              </p>
              <p className="text-gray-700 leading-relaxed">
                動物沒有「靈」，但有「魂」（知情意）的功能，是從「體」而來的，死亡的時候，這些功能就全部消失了。人有「靈」與「體」，共同產生「魂」的功能，死亡的時候，雖然失去「體」，但仍有「靈」的本體，那時「知情意」的功能就全部由「靈」而來。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                神是何等用心、何等有智慧地來造人，使我們與神之間可以有很親密的關係，神樂意與人親密，也期待人與他親密。因此我們每一天要餵養裡面的靈，讓我們每天領受神的話、默想神的話、禱告神的話、實行神的話。而能活出神的形像，活出神的生命，這是主所說豐盛生命的樣式。願我們都能如此蒙福，被神大大使用！
              </p>
            </div>

          </div>
        )}
      </div>

      {/* 重點整理 */}
      <div className="mb-6 border border-sky-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('summary')} className="w-full px-5 py-3 bg-gradient-to-r from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-sky-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">重點整理</span>
          </div>
          {expanded['summary'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['summary'] && (
          <div className="p-5 bg-white">
            <ul className="space-y-3">
              {[
                '創世記一、二章是宏觀與微觀的兩個互補創造故事，共有十六方面的不同，顯出神既有能力又有智慧，既超越又親近；創一之地與創二之伊甸園彼此相合，也與亞伯拉罕應許之地相連。',
                '「來歷」（תּוֹלְדוֹת，towledowth）貫穿創世記十段家譜，前五段在十一章之前、後五段在十二章之後，以亞伯拉罕為中心；彌賽亞譜系（亞當、挪亞、閃、他拉、以撒、雅各）產生大衛與基督。',
                '創世記二5-8說明神造人的時機是精心籌畫的，早於植物完全長成，是神最精心的創造；神造人的方法是用塵土塑形、吹氣賦靈，表明神與人親密的關係。',
                '人有體與靈兩個本體，體出於地需與地循環，靈出於神需與神相交（路四4、約六63）；林道亮博士的「二體三用說」認為靈、魂、體是兩個本體、三種功用。',
                '動物只有從體而來的魂（知情意），人有靈與體，靈使人在死後仍存續並歸於神；每天餵養裡面的靈、活出神的形像與生命，才是主所說豐盛生命的樣式。',
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

      {/* 分享題目 */}
      <div className="mb-6 border border-amber-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('questions')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-yellow-50 hover:from-amber-100 hover:to-yellow-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">分享題目</span>
          </div>
          {expanded['questions'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['questions'] && (
          <div className="p-5 bg-white space-y-4">
            {[
              '創世記第一章和第二章的重點有何不同？試著描述看看。',
              '神將氣吹在人的鼻孔裡面，使人成為「有靈的活人」，試解釋「有靈的活人」與動物有什麼不一樣？',
              '我們要怎麼繼續與聖靈互動，而活出神創造我們的美好？',
            ].map((q, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0 text-lg">{i + 1}.</span>
                <p className="text-gray-700 leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
