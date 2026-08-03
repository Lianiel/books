import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book34Ch11() {
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
        <p className="text-cyan-700 font-semibold tracking-wide mb-1">第四篇　分辨善惡</p>
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-700 to-teal-700 bg-clip-text text-transparent">第十一章</h1>
        <h2 className="text-xl font-semibold text-gray-700">問題在哪裡？</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-cyan-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-cyan-50 to-teal-50 hover:from-cyan-100 hover:to-teal-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-cyan-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <p className="text-gray-700 leading-relaxed">
              泰德好像點石成金似的，他一帆風順，高中的各科都極優秀。到了大學，他得到體育獎學金，仍然保持完美記錄。大學畢業，他繼續享受接踵而來的成功。三十歲的時候，他已是百萬富翁。他在社區受尊重，娶了「世界上最美麗」的女孩為妻，並有兩個「完美」的孩子。他似乎擁有一切。
            </p>
            <p className="text-gray-700 leading-relaxed">
              漸漸地，他的成功消退了。訴訟發生，名譽受損，短短幾年，他失去了地位、名譽、家庭。泰德無法調適，想以自殺結束生命。
            </p>
            <p className="text-gray-700 leading-relaxed">
              在醫院中，他終日恍惚，幾乎不說話。他拒絕任何朋友探視，他不要他們的「英雄」被看見是躺在精神科中的。
            </p>
            <p className="text-gray-700 leading-relaxed">
              當泰德向他的痛苦敞開時，我們清楚看見，他無法處理失敗。只要對他理想中的自己有威脅時，他就去尋求更多的成就，建立一個鏡子似的房屋，掩飾他的失望和痛苦。他有極多的痛苦要隱藏，包括來自幼年以來家庭破碎的傷害。
            </p>
            <p className="text-gray-700 leading-relaxed">
              泰德以更多的善來對抗他家庭及環境的惡。在無力對付不完美的世界時，他成了一個定時炸彈。三十八歲時，炸彈爆了。
            </p>
            <p className="text-gray-700 leading-relaxed">
              泰德試著建立完美的形像和生活。當壞的事發生，他馬上覺得毫無希望，一切都成為壞。
            </p>
            <p className="text-gray-700 leading-relaxed">
              我們周圍的世界有善有惡。我們周圍的人有好有壞。我們也有好的一面和壞的一面。
            </p>
            <p className="text-gray-700 leading-relaxed">
              我們自然的傾向就是要分別善惡，把壞的和好的完全分開。我們自然想要經驗到那善的我、善的別人、及好的世界是「全然善的」。為此，我們將那惡的我、惡的別人、及壞的世界看為「全然壞的」。這產生衝突——一個不根據事實，不能經歷時間考驗的分裂。
            </p>
            <p className="text-gray-700 leading-relaxed">
              這分裂使我們不能忍受惡、弱點、和失敗，不論是自己的或別人的。它導致兩種基本問題：有時我們否認惡的存在；有時我們否認善的存在。當我們失敗，我們覺得我們一無是處，盡都是惡。當我們做得好，我們覺得我們一切都是好的。
            </p>
            <p className="text-gray-700 leading-relaxed">
              當別人不能達到我們期望的全善時，我們會責怪、懲罰他們。有時我們拒絕承認別人的惡，結果我們與他們的關係是不真實的，終究會失敗。
            </p>
            <p className="text-gray-700 leading-relaxed">
              我們對周圍的世界要求完美，對使我們失望的人群、教會、工作加以貶損。我們要不就是從教會、人群、工作中退縮，去到另一個不完美的地方；要不就是對壞處閉起眼睛，把它理想化。簡言之，如果我們不能忍受及處理善惡的並存，我們就不能成功地面對及生活在這世界上，因為世界和我們就是這樣：善惡並存。
            </p>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">一、聖經對善惡的看法</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                情形並非自始如此。曾有一段時間地球一切都是好的。神在天幕所繪的是完美的。創造，包括人類，是沒有瑕疵的。我們曾是無罪的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                有時候我們幾乎看到完美。當我們注視日落美景，當我們看到人體的美，當有些音樂演出無懈可擊，當體育表現出令人驚訝的優雅和美，當情人的愛似乎使人在地如天。這樣的時刻，使我們對理想世界毫無疑問。我們是應該被創造在這樣的世界中，而非我們現在生活的世界。我們好像被送錯了地址。神創造我們是完美的，而我們發現自己住在不完美中。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們並沒有預備好要生活在一個不完美的世界。我們不知如何面對墮落的後果。本來，牙齒沒有蛀洞，腳下沒有荊刺，我們不必互相防衛；我們與完美的人有完美的關係，然而我們卻發現人們處處傷害我們，我們的心卻太軟，無法面對一群受傷的人。人會對我們說謊，不忠實，有時候就是很殘酷。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們沒有預備好成為不完美。在我們裡面沒有足夠的恩典，使我們面對自己的惡所帶來的痛苦。感覺罪的存在令人恐懼，但罪帶來的罪惡感更糟糕。我們感覺恨和分離，而不是愛和相連；我們感覺別人的忌妒而不是感激；我們感覺悲傷生氣而非喜樂；我們驚嚇擔憂而不覺得安全；我們覺得羞恥，恨惡自己，而非自愛自信；最後，我們覺得怕神而非愛神敬神。所有這些感覺都與善惡好壞有關。要能在情緒心靈上都過得成功，我們必須有處理的能力。如果我們不能與善惡並存，我們將很難生活在這世界上。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當我們將事情看為全善或全惡，並在兩端盪來盪去，我們無法有一致的關係，不論與自己，與別人，或與周圍的世界。人們會從一個朋友到一個朋友，一個配偶到一個配偶、一個教會到一個教會、一個工作到一個工作，不斷更換。有時他們想想，一切都還好，而一旦壞的出現，他們則無法處理。他們要求完美；不完美的就全都是壞的，因此就被拒絕。他們好像坐雲霄飛車。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                也許你有一個人際關係還不錯，然後有一次你晚歸而忘了打電話，他們就視你如痲瘋病人。這是人無法處理別人不完美之處的例子。又如你買了一部夢寐以求的新車，後來有了一個碰撞，不再完美。如果不完美，就是全都不好。又如你為新鄰居預備一個歡迎餐會，蛋糕倒了，「使整晚泡湯」。這都是分辨善惡的問題。如果我們要面對世界，好好生活，我們必須找出生活在世界上的方法，這世界是善惡並存的。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">理想的自我</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們都可以想像完美的自我是什麼樣子。想想如果你每一件事都做得很完美，當你強迫自己去想時，你可以知道想像的你和真實的你之間有多大的不同，而其間的緊張有多大。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                如果理想的自我和真實的自我互相爭戰，我們就常在衝突中了。理想的我是我們想像及希望的我。看看自己特殊的才能，再想像這能力達到完美是什麼情形。譬如，打高爾夫球時，我希望理想的我每一桿都照最完美的去打。這是很好的目標和幻想。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                又如你是一位律師，理想的你會看到每一個辯護的角度，對手毫無反擊餘地。你在法庭的表現無懈可擊，發揮出你自己都不知道的潛力。又如你是一位教師，你在學生和學問之間建立了橋樑，你在瞬間就可以洞察學生的盲點，你也開始想像用創意來進行課程，跳出傳統的教法。又如你是父母，你可以想像瞭解孩子的每一個需要，並且每一次都能適當地反應。你可以看自己是孩子的榜樣，並且你們的關係美妙。如果你擁有企業，你可以想像理想的情況，你獲得最新資訊，專業技術，在各地開設分支機構。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">擁有理想的希望是我們之所以為人的一部分。這些希望是從失落的神的形像而來。我們可以想像理想的婦女是如何（箴三十一），或是理想的男人是如何（弗四：14-15）。在任何一方面，我們都可以想像理想情況，我們也渴望如此。</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「我們知道一切受造之物一同嘆息勞苦，直到如今。不但如此，就是我們這有聖靈初結果子的，也是自己心裡嘆息，等候得著兒子的名分，乃是我們的身體得贖。我們得救是在乎盼望，只是所見的盼望不是盼望，誰還盼望他所見的呢。但我們若盼望那所不見的，就必忍耐等候。」（羅八：22-25）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們急切盼望恢復失去的理想；這盼望是與生俱來的。那是我們本來該有的形像，也是我們有一天將成為的樣式。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">真實的自我</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                真實的自我是我們的真面目，不是我們希望的樣子。真我不是理想的我，不論我們多希望那是真的。事實是，真我已經墮落了；理想的我已經失落了。我們又軟弱又墮落，內心破碎，想要好而無能為力。保羅如此說：「我是屬肉體的，是已經賣給罪了。」（羅七：14）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在罪性之外，我們還是軟弱的。有時候我們不知道我們可以是軟弱的，理想的自我是不會軟弱的。我們是破碎的，在各個方面受傷害，真我裡藏著各種傷害的證據。我們所擁有的痛苦、破碎、和情緒發展不足、不成熟都是真我的一部分。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們自然重視理想的我過於真我。因為它看起來較好，操作較好，需要較少的維修。簡言之，它就是一個比真實好的模式，但問題是，它是幻想，不是真的，而且不存在。我們必須看看真我與理想之間的關係。如果兩者有衝突，則他們將持續為了爭取舞台的主角而戰。每當真我出現，理想的自我就評論他，設法使他躲藏。而當我們躲藏，我們和神和人的關係就不對。
              </p>
              <p className="text-gray-700 leading-relaxed">
                如果我們對自己要求完美，我們就不是生活在真實的世界中。真我不完美——我們必須承認的事實。許多人口裡說的是一回事，行出來卻是另一回事。他們的行為背叛他們的信念，就是理想的自我，一個沒有不完美的自我。但我們都有許多不完美、軟弱、不成熟，這都不是我們的理想，卻是事實。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700 mt-4">理想與真實的關係</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                理想與真實的問題在於，理想批評真實，把真我視為不能接納的，並定他的罪，對他發怒。這使得兩方敵對，越行越遠。理察是個四十六歲的商人，他因充滿恐懼不能控制的思想而到醫院來。他會幻想打妻子，對孩子生氣。他試著讀經禱告把幻想除去，但它們一再回來攪擾他。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                理察常常說「我知道我不該有這種想法」或「我這樣想真是可怕」。他總是說理想的自己應該不會這樣，但事實是，他就是會這樣。理察試著用各種強制行為使這些思想離開他，但情形依舊，理察覺得自己無藥可救，充滿罪惡。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在住院期間，理察學習到他對妻子的很多事感到生氣，卻沒有告訴她。他覺得他不應該生氣，所以他壓抑這個感覺並拒絕承認。他也對自己幼稚的行為生氣，所以他對孩子的幼稚生氣。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                問題不在他生氣或行為幼稚，這是生命的一部分。問題在於他不接受自己的這一部分。理想的自我決定這部分不屬於他。因此，這部分就開始控制他。他所不承認的「壞」，以一種破壞性、強迫性的思想出現。當理察瞭解理想的自我會這樣要求，並開始接納真實的自我，他就可以解決對自己和對妻子的怒氣。當他如此做時，強迫性的行為就消失了。
              </p>
              <p className="text-gray-700 leading-relaxed">
                這種理想與真實分歧的問題是基督徒掙扎的主要理由。教會通常強調太高的標準，以致人們覺得不可能又做基督徒又做一個人。然而這不就是當初我們成為基督徒的理由嗎？我們是罪人，需要饒恕和接納。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700 mt-4">論斷的腔調對接納的腔調</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                理想與現實的關係中很重要的一點是情緒的腔調。如果我們採取論斷的腔調，對真我定罪生氣，我們將會自相紛爭。理想的自我會論斷定罪真實的自我。我們用羞恥、罪惡、躲藏、不承認、分化及其他防衛使真我躲起來。凡是我們不能在恩典中接納的，就會遭定罪論斷，我們就把它藏在心裡的無花果葉子下。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">如果我們採取愛和接納的腔調，對真實的自我則有變化的希望。如果我們能接納不理想的自我那部分，這個部分會被愛而痊癒。它們會以無法想像的方式成長。接納是這個困境的答案，這就是恩典。我們可以看到保羅的掙扎：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「因為我所作的，我自己不明白。我所願意的，我並不做。我所恨惡的，我倒去做。若我作的，是我不願意的，我就承認律法是善的。既是這樣，就不是我作的，乃是住在我裡頭的罪作的。我也知道在我裡頭，就是我肉體之中，沒有良善。因為立志為善由得我，只是行出來由不得我。故此我所願意的善，我反不作，我所不願意的惡，我倒去作。」（羅七：15-19）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                他希望的是一樣，找到的卻是另一樣，是痛苦的事實。我們自然的傾向是更努力去達到理想，但保羅的答案是接納。「如今那些在基督耶穌裡的就不定罪了。」（羅八：1）理想的要求達到了，不再因不夠完美而被定罪。神差他的兒子做了贖罪祭，「使律法的義成就在我們身上。」（4節）當我們可以達到不定自己的罪，我們就可以承認自己犯的錯，而與自己有好的關係，不再處於必須完美的壓力中。這樣的接納帶來不可想像的成長，及屬靈的能力。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">因此，理想與真實的自我之間應該是恩典，無條件的愛，及接納。如果這樣，我們就不會自相紛爭。好的關係就會建立。好的關係是一面持有理想，一面以愛接納真實。如果真我被接納被愛，它就被鼓勵向著理想成長。傳道書這樣教導我們：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「有義的人行義，反致滅亡。有惡人行惡，倒享長壽。這都是我在虛度之日中所見過的。不要行義過分，也不要過於自逞智慧，何必自取敗亡呢。不要行惡過分，也不要為人愚昧，何必不到期而死呢。你持守這個為美，那個也不要鬆手，因為敬畏神的人，必從這兩樣出來。」（傳七：15-18）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-2">換句話說，要求完美會毀壞我們的生命。我們都知道完美主義的人，一點不能享受生命，也使其他人活得很淒慘。然而另一極端，放棄標準和理想的結果，會使我們死亡，敬畏神的人避免兩種極端，過平凡的生活。當我們接受標準，珍視目標，接納自我，就會有成長和平安。我們就可以做真正的自己。這種對自己的看法和神對我們的看法是一致的。他說我們是非常奇妙，而又是有罪的；被軟弱包圍，又充滿各樣才幹。試著把這些都想在一起，分辨善惡真是不容易的工作！讓我們來看看聖經上「衝突」的說法：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3 space-y-1">
                <p className="text-gray-700 italic">「人算什麼，你竟顧念他。世人算什麼，你竟眷顧他。你叫他比天使微小一點，並賜他榮耀尊貴為冠冕。你派他管理你手所造的，使萬物都服在他的腳下。」（詩八：4-6）</p>
                <p className="text-gray-700 italic">「沒有義人，連一個也沒有。」（羅三：10）</p>
                <p className="text-gray-700 italic">「因為他知道我們的本體，思念我們不過是塵土。」（詩一〇三：14）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                整本聖經告訴我們兩個主題：第一，我們是照著神的形像造的，因此我們的價值極其寶貴。第二，我們是有罪又破碎的，有理想的自我和真實的自我，兩者皆是事實，都需要與神與人在恩典中和好。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700 mt-4">理想的扭曲</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                有些人以為的理想，其實從來不是神創造的一部分。舉例而言，神創造我們會需要人際關係。「那人獨居不好。」（創二：18）但有些人以為，理想狀態是不需要別人的。另一些人以為理想的自我是拒絕性感覺的。也有人想像理想的自我是不會生氣或傷心的。這些扭曲的理想自我，都不是照神的形像創造的。神從來就不是這樣想的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                有些人的理想自我是不需要工作，或成就什麼的。他們以為不使用自己的才能或任人踐踏也會快樂。然而神創造我們，是要我們管理這地。人們扭曲的理想自我有兩方面：一是已失落的（完美），一是錯誤的（非人性）。兩者都不是真實的，而我們需要接納真實的自我。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們對理想自我的觀念，大部分來自從小的養育。我們家庭重視的，我們會把它變成理想的一部分。我們家庭鄙視的，我們把它打入冷宮。我們把後者視為壞的，不論它是不是壞的。有些人把一些好的視為壞的，只因他們的家庭不接納。理想的自我會定罪這一部分，好像定謀殺罪一樣。舉例而言，我們的文化使男孩子從家中得到一個訊息，就是表現軟弱和有需要是不好的。他們要表現超人一等，壓抑傷痛和軟弱的感情。理想的自我不一定是不會犯錯的。那是從小長大價值觀的累積，加上我們對自己的期望。然而只要是我們不接納的，即使是真實的，它也會受到批評論斷。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                派區是成功的經理，他找了許多醫生，結果都說他身體健康。而他終於知道自己的病是情緒上的。他痛苦的原因是，他不能接受自己的好些方面。派區理想的自我是像他父親一樣堅強，絕不表露感情。而且和母親越不一樣越好。他形容母親是個感情用事的人。派區否定任何的弱點，因為他認定那是壞的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                漸漸地，這樣的想法牢籠了他。他開始有恐懼，尤其害怕生病。他的弱點以生病出現，因為身體的病痛，在他理想自我中是視為可以接受的。他可以生病，只要情緒上沒有弱點或悲傷就好。在治療中，他重新承認真我中的感覺，他變得更人性，而他的恐懼也消失了。他不再害怕自己患了不治之症，從急診室到急診室，一直看醫生。
              </p>
              <p className="text-gray-700 leading-relaxed">
                另一個常見的自我扭曲是界限設定錯誤。很多人壓抑自己，不敢對別人設限，因為這在他家是不被允許的。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700 mt-4">解決好與壞的衝突</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們以四種方式解決好與壞的衝突，其中三種總是會失敗。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">否認壞的</span>——否認是一些人對付生命中壞的部分的方法。理察否認他對妻子生氣，因為生氣是被定罪論斷的。珊蒂否認她想設限，因為她的家庭並不鼓勵如此。有些人否認一些感覺，是理想的自我所不認同的感覺。有些人被教導不要表現傷感。否認情緒會導致壓抑，因為傷感是神所設計用來處理受傷失落情緒的。有些人否認罪惡感，像情慾、忌妒、或苦毒。他們認為基督徒不可以有這些情緒，所以他們否認它的存在。我記得一位客戶，她正結束二十年的婚姻。她計劃去度假，並開派對慶祝。她說對分開一事，她毫無痛苦。她完全否認她的感覺。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">聖經有時候嚴厲地指責我們否認自己的壞，因為這是驕傲的罪。聽聽耶穌怎麼對法利賽人說：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「你這假冒為善的文士和法利賽人有禍了，因為你們洗淨杯盤的外面，裡面卻盛滿了勒索和放蕩。你這瞎眼的法利賽人，先洗淨杯盤的裡面，好叫外面也乾淨了。你們這假冒為善的文士和法利賽人有禍了。因為你們好像粉飾的墳墓，外面好看，裡面卻裝滿了死人的骨頭，和一切的污穢。」（太二十三：25-27）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經強調我們不要否認自己裡面的惡。也不要只看別人是好的，否認人的惡。他們把人偶像化，看他們是完美的，而沒有看見人都一樣是罪人（羅三：23）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                路得因抑鬱來看病。她經常為小事貶低自己，像太累，或晚餐上得太慢。我無法找出困擾她的真正理由。她似乎有很大的壓力，但我問她的過去，她說一切都不錯。當我問到她丈夫對她病情的反應，她說他很支持，他會送花，幫忙做飯。兩人都不想做飯時，就到外面吃。他也管家裡的修理工作。我聽了很高興，有這麼支持她的丈夫。直到我見到她丈夫才真相大白。他整堂課都在貶損路得。說她頭髮沒梳好，又說她無精打采。幾乎她說的每一句話，他都要反駁。雖然他經年這樣吹毛求疵，路得否認他的不好，在他的罪上成為第一個受害者。難怪她要抑鬱，不得解決。她忍氣吞聲，對所有的問題逆來順受，她全是不好，他全是好。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">否認好的</span>——有些人剛好相反。他們否認好的。他們生活在惡中而渾然不知。他們硬著心，否認有任何標準要依循（羅一：18-23）。同樣的，我們可以把我們裡面的善惡分開，否認其中好的。我們對別人也可能如此。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                約翰二十六歲，新婚，為了婚姻來找我。他形容他的妻子如何愛批評、要求太多，又從不作家事。結婚之後，玲玲就邋邋遢遢，因為體重，她不再吸引人。我要求他下一次帶太太一起來。當約翰的太太出現在我辦公室時，我大吃一驚。玲玲高而苗條，散發一股自信。跟她談了幾分鐘後，我發現約翰把不可思議的完美標準放在玲玲身上，使她看起來全是不好的。玲玲對他的回應是更努力地取悅他，而這對完美主義者是永遠行不通的。他不能忍受她有一點點達不到完美，嚴厲地論斷她。而事實上她的表現已經非常好，雖然不一定完美，但約翰全然否定她的好。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                <span className="font-semibold">攻擊和論斷</span>——通常是人們處理「惡」的作法。一般良心的論斷和定罪會說這樣的話：「我真笨，沒有用，我真壞。」這種對真我的攻擊是定罪的，令人受傷的。聖經稱之為「世俗的憂愁」。
              </p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「因為依著神的意思憂愁，就生出沒有後悔的懊悔來，以致得救。但世俗的憂愁，是叫人死。」（林後七：10）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                對惡事憂傷以致悔改，是屬神的憂愁。攻擊和定罪是屬世的方法。猶大和彼得是兩個不同的例子。猶大定自己的罪以致自殺。彼得為三次不認主而難過，然而他的眼淚轉變為悔改。論斷不會帶來任何醫治。律法會論斷而無恩典。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                許多人會看到好的和壞的，但他們攻擊別人的壞處。非雨是個好丈夫，他看他妻子的優點，忠心地支持她。當她做得好時，他會稱讚並表示感激。但當她犯錯，或不按他的意思做事，他就會生氣。對她大吼，說一些很卑劣的話。他會論斷批評她，使她有罪惡感，叫她為做了他不悅之事而羞愧。他不否認好與壞的同時存在。但對他所見到的壞，他嚴厲地攻擊論斷。他給她真理而無恩典。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                <span className="font-semibold">接納</span>——接納好與壞是符合聖經的選擇。這稱為恩典與真理。在這選擇中，我們不否認理想的和壞的之並存。我們接納並原諒壞的，同時把理想當成尚未達成的目標，在完全接納的氣氛中追求達成。我們站在恩典中。這個作法並不分好與壞，不生氣定罪，而是同時掌握好與壞。正如我們接納自己的好與壞，我們也必須對別人如此：
              </p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3 space-y-1">
                <p className="text-gray-700 italic">「並以恩慈相待，存憐憫的心，彼此寬恕，正如上帝在基督裡饒恕了你們一樣。」（弗四：32）</p>
                <p className="text-gray-700 italic">「所以你們既是神的選民，聖潔蒙愛的人，就要存憐憫、恩慈、謙虛、溫柔、忍耐的心。倘若這人與那人有嫌隙，總要彼此包容，彼此饒恕。主怎樣饒恕了你們，你們也要怎樣饒恕人。」（西三：12-13）</p>
                <p className="text-gray-700 italic">「所以你們要彼此接納，如同基督接納你們一樣，使榮耀歸於神。」（羅十五：7）</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                在這些經文中，恩典和真理都顯而易見。我們必須面對真理，而我們的態度必須是接納而非拒絕。我們必須是恩慈而非怒氣沖沖的。「遮掩人過的，尋求人愛，屢次挑錯的，離間密友。」（箴十七：9）
              </p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">二、從孩童發展的角度來看</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                如果不能解決善惡的後果是如此具破壞性，為什麼我們不做呢？為什麼我們不就接受壞的，珍惜好的呢？
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                要瞭解這個過程，我們必須記得墮落的本質。我們本來就不會處理善惡同時存在的問題。神要保護我們免於此種景況。但是我們犯罪，使自己落入困境。理由是：我們生來就不懂得恩典，我們必須讓恩典在我們裡面生根，使我們能接受壞的，同時又不拒絕彼此的關係。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">聖經指出我們生來就沒有人際關係，我們必須被邀請進入關係中。當這樣的情形發生時，我們就會產生愛和饒恕。聖經的原則是：我們愛、我們饒恕，因為我們被愛、我們被饒恕。耶穌到法利賽人西門家吃飯，一個有罪的女人來靠近耶穌，並把香膏倒在耶穌的腳上，又用頭髮擦乾。法利賽人心想，耶穌若是先知，必知道摸他的是怎樣的女人。耶穌就講了一個故事：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「一個債主有兩個人欠他的債。一個欠五十兩銀子，一個欠五兩銀子。因為他們無力償還，債主就開恩免了他們兩個人的債。這兩個人哪一個更愛他呢？」西門回答說：「我想是那多得恩典的人。」耶穌說：「你斷的不錯。」最後，耶穌說：「他許多的罪都赦免了，因為他的愛多，但那赦免少的，他的愛就少。」（路七：36-47）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們不是生來就能饒恕人，因為我們沒有被饒恕過。聖經教我們，我們被饒恕多少，我們就能饒恕別人到什麼程度。我們必須理解自己被饒恕，才能饒恕人。我們也才能不把人分成全善全惡而失去了與他們的接觸點。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                因此當一個孩子來到世上，他是不知道饒恕這回事的。他不懂得去饒恕，恩典和真理、愛和界限，都是分開的。他開心時他會愛，他不高興時他就恨。他的頭腦中黑白分明；好人和壞人；好的我和不好的我。好壞完全分開，而且深怕壞的會打倒好的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這樣的想法對孩子是很普遍的。如果孩子得到適當的養育，世界是個好地方，媽媽是個好媽媽，他們覺得很快樂。他們似乎在說：「一切都是好的。」孩子沒有灰色的部分，當他們的需要得到滿足，一切都是好的。相反的，當孩子沮喪，每個人都是壞人。媽媽是壞媽媽，爸爸是壞爸爸，世界是不好的地方。他不知道，遲了三分鐘餵他喝奶的這個壞媽媽，是昨天安撫他睡覺的同一個好媽媽。當媽媽終於來使他得到滿足時，她又變成全部是好的了。沒有人能使這個孩子相信，媽媽在這時刻是不完美的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                經過長期之後，孩子會將母親的照顧和愛，變成內在的一部分。他會漸漸明白，媽媽不是全善或全惡的。他學習到，愛他的媽媽也會使他沮喪。和他玩的媽媽有時候也會使他等待。如果有足夠的好，孩子就能忍受不好。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                一方面，如果沒有足夠的好，足夠的饒恕，善與惡不能並存。從這種家庭出來的孩子，會繼續把他們的世界分成好人壞人——他們愛那些滿足他們的人，恨那些不能滿足他們的人；他們愛那些滿足他們的工作，離開那些不能滿足他們的工作；愛滿足他們的妻子，離開不能滿足他們的妻子，因為壞的就全都是壞。另一方面，從來沒有沮喪過的孩子，也可能變得不能饒恕。如果善惡並存是靠我們在滿足與沮喪之間遊走，從未沮喪的人，就沒有機會學習饒恕使他們沮喪的人。我們都會看過很溫和的人，因為排隊等了五分鐘就把全世界都看成壞的了。他們無法讓好壞並存。以上兩種情形，當善惡不能互相容忍，人會把滿足自己的人看為全善，反之為全惡。這種人不能饒恕「全善」者任何一點錯誤。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當孩子繼續發展，當他活動範圍增加，理想自我的意識就出現了。他們開始覺得他們可以做任何事。他們因才發現的「能力」覺得自己像超人一樣。他們可以說話、探險、跑遠。他們還沒有夠多的跌倒經驗。他們希望被看為理想的自我。也就是「媽咪，你看！」的階段。我們都經過這段希望被讚賞的時期。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                然而，一段時期之後，理想自我應該服從真實的自我。孩子將學到跌倒是生活的一部分，他們不是超人。當我們的脆弱被別人瞭解接納，我們學習把這部分接受為自我的一部分，因而能重視真實的自我，那是不完美、非理想的。我們學習像保羅一樣，將自己看得「合乎中道」（羅十二：3）。我們不會看自己過於所當看的，並重視那脆弱的真實自我，也能饒恕接納別人的真實面。在以後的人生中，我們學到不僅我們有好有壞，我們也會成功也會失敗。我們在期望和表現之間生活。在這段期間，可能發展出一種對真我攻擊論斷的關係。這是由於我們的失敗沒有被愛被饒恕，而是嚴厲地受批評。失敗應該要被承認、被討論、和被饒恕。
              </p>
              <p className="text-gray-700 leading-relaxed">
                父母要像神一樣接受孩子的失敗。神不否認失敗，也不責打我們。他使我們覺悟——他將真理顯示我們——但同時也將恩慈寬容給我們，因為「他的恩慈是領你悔改」（羅二：4）。神的恩慈憐憫使我們面對失敗，他並沒有嚴厲地定罪論斷。如果這是許多父母管教的方法，就不會有太多人覺得自己的失敗是無藥可救，或者自己是唯一的失敗者了。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">三、愛與接納</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                愛是解決善惡問題的答案。當我們在伊甸園裡，完全被愛被接納，善惡不造成問題。當我們悖逆，善惡便成為主要的問題。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                如果有足夠的愛加上界限，或恩典加上真理，我們就會經驗到神與我們的關係，並學習站在恩典中（羅五：2），其中並無定罪論斷可容身。當失敗時，我們覺得難過，因為那會使我們失去愛人的機會。如果我們不必擔心定罪的問題，我們就有更多精力去關心我們所傷害的人。這是依神的意思憂愁，而非使人站不住的罪惡感。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在第一章講到關於相連時，我說過有時候我問參加研討會的學生：「如果我給你一根球棒，讓你打我的臉，你會打嗎？」他們會說不會，因為「這是不好的事」。他們這樣的回答並非依照基督徒的最高標準。真正的答案應該是：「不會，因為那會使你痛。」耶穌說律法的總綱都包括在愛人如己了。當我們視我們的失敗和罪在於不夠愛人，而非我們的「壞」，我們在善惡的事上就往更成熟邁進了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這對我們自己也適用。當我們犯罪，我們可以從罪會傷害我們的角度來看，而非稱自己為「惡人」，我們就可以脫離罪和死的律。只有當我們看出罪會給我們帶來怎樣的毀壞傷害，我們才會開始改變。用罪惡感來操縱是不會使人改變的；它只會使我們犯更多罪。「律法本是外添的，叫過犯顯多，只是罪在那裡顯多，恩典就更顯多了。」（羅五：20）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這是福音的真理：只有恩典叫我們自由。保羅為一再犯罪掙扎時，他就說：「誰能救我脫離這取死的身體呢？」（羅七：24）他繼續說：「如今那些在基督耶穌裡的就不定罪了。」（羅八：1）只有當我們不被定罪時，我們才能放手。我們從律法中釋放出來，我們可以隨從聖靈行事。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                然而，我們如果繼續將我們的惡視為定罪和罪惡感的來源，罪的循環會繼續下去。這樣的循環在深陷其中的人身上，很容易看到。他們做了，覺得自己很不值得被愛，很糟糕。然後為了從這種感覺中出來，他們又做一次。李就是一個好例子。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                李的「罪惡循環」是這樣的。當他覺得孤單，他就去找妓女。他覺得自己的慾望很不好，但他還是去了。之後，他覺得非常罪惡，幾個星期都揮之不去。他覺得自己更不值得愛，就更從人群退縮。而這樣又更使自己有需要，壓力必須解決，痛苦孤單又再次來襲。他就會去找另一個妓女，罪惡感又回來，循環又繼續。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當他把事情向一個小的支持團體傾吐，他發現自己沒有被定罪。他發現人對他的壞並不驚訝，而他們不管他做了什麼，仍然愛他。他試了又試，想拒絕這愛與接納，並想躲起來。但漸漸地，他發現「不被定罪」是一個他不會失去的地位，即使他又犯罪也不被定罪。他的地位不因為他的表現有所改變。
              </p>
              <p className="text-gray-700 leading-relaxed">
                在不被定罪的地位中，李學習到他的「壞」和罪惡感都不是問題，已經在十字架上解決了。真正的問題在於他缺少真愛。這是最大的殺傷力。除非他能從罪的循環中出來，否則罪帶來的毀壞是很真實的。只有「不定罪」才能使罪失去能力。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">四、接納罪人，恨惡罪惡</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                對基督徒而言，我們的惡已經除去了，我們「在他愛子裡」被接納（弗一：6）。我們不必像坐旋轉馬一樣上上下下，當我們做得好我們就覺得自己好，當我們犯罪我們就覺得自己壞。我們已經在一個不變的地位，就是被愛的地位。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">希伯來書指出，罪與惡都已經解決了：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「因為他一次獻祭，便叫那得以成聖的人永遠完全。聖靈也對我們做見證，『我不再紀念他們的罪愆，和他們的過犯』。」（來十：14-15、17）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-2">許多基督徒停留旋轉馬上，他們認為自己一下在被饒恕的地位，一下在有罪的地位，如此繼續。他們對自己的被接納沒有安全感。他們不能領會：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「凡靠他進到神面前來的人，他都能拯救到底，因為他是長遠活著，替他們祈求。他不像那些大祭司，每日必須先為自己的罪，後為百姓的罪獻祭，因為他只一次將自己獻上，就把這事成全了。」（來七：25、27）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                耶穌使我們被接納，是一次就永遠做成的。問題不在於「我們是好是壞」？而是「我們在做什麼？」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                如果我們傷害了別人、自己、或神，這罪會使我們難過。依神的意思憂愁，不會使我們處罰自己，或別人，而是去關心被傷害的對象。這是以愛做基礎的規範，而非以懼怕刑罰做基礎的規範。
              </p>
              <p className="text-gray-700 leading-relaxed">
                「不被定罪」是大有能力的一件事。是改變生命的事。當人達到不被定罪的感覺時，他們已經走上越來越能去愛的路上，因為「誰的赦免多，誰的愛就多」。這也是我們對真自我和理想自我應有的態度。對理想自我，我們要以愛為目標，朝理想調整。對真實自我，我們不要以怒氣和攻擊來面對失敗。
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
                '泰德的悲劇源於無法忍受「善惡並存」——他用不斷的成就來對抗內心的破碎與家庭的傷害，一旦失敗發生，他立刻從「全善」墜入「全惡」，最終走向崩潰，這正是本章要處理的核心問題：我們自然傾向把自己、別人、世界簡化為「全好」或「全壞」，而現實卻是善惡並存的。',
                '每個人裡面都有「理想的自我」（我們希望、想像中的自己）與「真實的自我」（真實但不完美的自己），健康的關係是理想與真實之間存在恩典——以愛接納真實的自我，同時懷抱理想作為努力的方向，而非讓理想論斷、攻擊真實。',
                '孩童從「非黑即白」（媽媽滿足我就是好媽媽，不滿足就是壞媽媽）逐漸發展出「善惡並存」的能力，關鍵在於是否得到「足夠的好、足夠的饒恕」——若父母本身不能容忍孩子的失敗，孩子也學不會饒恕與接納。',
                '面對好壞衝突，人有四種反應，其中三種都會失敗：否認壞的（如路得否認丈夫的挑剔）、否認好的（如約翰對妻子玲玲吹毛求疵）、攻擊論斷（如非雨嚴厲批評妻子）；唯有「接納」——同時承認並原諒壞的、以愛擁抱好的——才符合聖經恩典與真理並存的原則。',
                '基督徒的核心盼望在於：因基督一次獻祭，我們已經「不被定罪」，這地位不會因表現時好時壞而動搖；唯有先安穩在「不被定罪」的地位中，我們才能真正脫離罪惡感操控的循環（如李的「罪惡循環」），越來越能去愛。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「分裂」（Splitting）作為心理防衛機制</h4>
              <p className="text-gray-700 leading-relaxed">
                本章描述的「全善／全惡」二元思維，正是精神分析學派所稱的「分裂」（splitting）防衛機制——早期客體關係理論家梅蘭妮·克萊恩（Melanie Klein）指出，嬰兒最初無法把「滿足我的乳房」與「令我挫折的乳房」整合成同一個對象，因此把世界分裂成「全好」與「全壞」兩極。健康發展的核心任務之一，就是逐漸整合這兩極，達到「客體恆常性」（本書稱為「情緒對象的恆常性」，見第三章），能同時容納一個人身上的好與壞。作者把這套心理學觀察，緊密地與聖經對恩典與真理、饒恕的教導結合，說明屬靈成熟與心理成熟在此處是同一件事。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「世俗的憂愁」與「依神的意思憂愁」的實務辨別</h4>
              <p className="text-gray-700 leading-relaxed">
                林後七章10節區分的兩種憂愁，在本章有非常具體的行為對照：猶大的「世俗的憂愁」導向自我毀滅（自殺），彼得「依神的意思憂愁」則導向悔改與更深的愛。實務上可以用一個簡單的問題來分辨：這份對犯罪的難過，是把焦點放在「我糟透了、我沒有價值」（论断自我），還是放在「我傷害了誰、我需要修復什麼」（关心受伤的对象）？前者容易陷入本章描述的「罪惡循環」，後者才會真正帶來悔改與生命的改變。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">完美主義文化下的教會反思</h4>
              <p className="text-gray-700 leading-relaxed">
                本章直言「教會通常強調太高的標準，以致人們覺得不可能又做基督徒又做一個人」，這是對教會文化的犀利提醒。許多教會在傳講聖潔、順服的同時，若沒有同等強調恩典與接納，很容易培養出像理察、派區這樣把真實自我藏起來、只呈現「理想基督徒」表演版本的會眾。健康的屬靈羣體，應該是一個安全到讓人可以誠實展現真實自我（包括軟弱與失敗）的地方，正如泰德若能在成功之前就有這樣的群體，或許不必等到崩潰才第一次向人敞開痛苦。
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
              '像泰德一樣，你有沒有用某種形式的「成就」或「表現良好」來掩蓋自己內心的破碎與痛苦？',
              '回想你的「理想自我」形象——你希望自己是什麼樣子。這個形象跟你的「真實自我」之間，衝突最大的地方是哪裡？',
              '面對自己的失敗或軟弱，你比較常用哪一種方式回應：否認、攻擊論斷自己，還是接納？',
              '你有沒有像路得或約翰的妻子玲玲一樣，長期活在某個人「全然否定你的好」或「你也否認對方的壞」的關係中？',
              '「不被定罪」對你來說是一個真實的經驗，還是仍然覺得自己的價值隨表現起伏（坐在旋轉馬上）？',
              '如果你能像神接納你一樣去接納自己此刻的真實樣子（包括軟弱失敗的部分），你覺得會有什麼改變？',
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
              <h4 className="font-semibold text-green-700 mb-2">🪞 寫下你的理想自我與真實自我</h4>
              <p className="text-gray-700 mb-2">
                分兩欄寫下：「理想的我」是什麼樣子（我希望自己如何），「真實的我」目前是什麼樣子（誠實面對軟弱與不足）。逐項對照，練習用接納的口吻而非論斷的口吻描述真實的自己。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💬 練習「依神的意思憂愁」</h4>
              <p className="text-gray-700 mb-2">
                下次犯錯或失敗時，練習不說「我真沒用、我真糟糕」，改成具體描述：「這件事傷害了誰？我可以怎麼修復？」
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 默想羅馬書八章1節</h4>
              <p className="text-gray-700 mb-2">
                連續幾天默想「如今那些在基督耶穌裡的就不定罪了」，每次默想後寫下一句：如果我真的相信這句話，今天我會有什麼不同？
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，感謝祢不是按著我的表現來愛我，而是因著基督一次的獻祭，永遠接納了我。求祢幫助我不再把自己或別人簡化成全好或全壞，而是學習像祢一樣，以恩典和真理同時看待軟弱與美善。求祢醫治我裡面那個不斷用成就掩飾破碎的泰德，讓我可以誠實地把真實的自己帶到祢與人面前，也在祢的愛中，逐漸活出理想的樣式。奉耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
