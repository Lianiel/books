import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book34Ch1() {
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
        <p className="text-cyan-700 font-semibold tracking-wide mb-1">第一篇　成長的三個因素</p>
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-700 to-teal-700 bg-clip-text text-transparent">第一章</h1>
        <h2 className="text-xl font-semibold text-gray-700">恩典與真理</h2>
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
              從前在銀河系中，有一種高等進步的外星人。他們想要的都有了：可以解決各種問題的科技，比我們一生還多的休閒時光。但他們覺得很無聊，無聊得要命。他們需要一點新鮮——一點刺激——使他們的星球快活起來。
            </p>
            <p className="text-gray-700 leading-relaxed">
              他們成立了一個委員會。他們討論到發展一種新的活動，或建立一個新的遊樂場。最後一個叫「忙」的提出了意見，大家都贊成了。
            </p>
            <p className="text-gray-700 leading-relaxed">
              「我們創造一個上帝如何？」他建議。
            </p>
            <p className="text-gray-700 leading-relaxed">
              「這樣我們的人民星期六就有事可做了。」一個人附議。另一個說：「也使我們多點話題。」
            </p>
            <p className="text-gray-700 leading-relaxed">
              因此他們試著發明一個上帝。但不成功。「忙」是這個委員會的主席，負責研究發展新的上帝，他把委員會召集來說：「各位，這樣不成，」他說：「我們如果發明出來一個上帝，會有什麼好處？我們知道那不是真的。為什麼我們不去尋找一位上帝——像地球的人敬拜的那一位？」
            </p>
            <p className="text-gray-700 leading-relaxed">
              委員會同意了，所以「忙」就出差到地球上。他以隱形之身，造訪了成打成打的教會和機構組織。記了不少的筆記，作了很多的報告。
            </p>
            <p className="text-gray-700 leading-relaxed">
              當他回去時，委員會迫不及待要聽他的結果。「同胞們，我不只找到一位上帝，我找到了兩位。」房間裡響起了一陣驚歎之聲。
            </p>
            <p className="text-gray-700 leading-relaxed">
              「第一位上帝的名字叫恩典，是很吸引人的神，她該是個女神。她常提到愛，『要與人和平相處，要和別人做朋友，要仁慈。如果你做不到，我還是原諒你。』」「忙」看起來有點困惑：「唯一的問題是，我看不出她要原諒什麼，他們根本沒有規範，怎麼會犯法呢？」
            </p>
            <p className="text-gray-700 leading-relaxed">
              「忙」繼續說：「我特別喜歡恩典之神的跟隨者所做的事，」像給窮人吃東西，探望被囚之人。然而——「忙」搖搖頭——這些跟隨者似乎迷失了。他們繼續做壞事，一錯再錯，他們不知往何處去。
            </p>
            <p className="text-gray-700 leading-relaxed">
              「忙」深深吸一口氣：另一位上帝，名叫真理。正如恩典如此之好，真理是如此可怕。他一直說著人們所做的錯事，使他們覺得自己很壞，他的跟隨者也做同樣的事。但真理好的一面是，他向仇敵宣戰，像謊言、欺騙、淫亂、墮胎、醉酒。他像一輛大掃街車，把敵人都掃清了。問題是，他掃掉壞事，也把做壞事的人掃除了。像恩典之神跟隨者臉上的笑容，在真理之神的跟隨者臉上，是絕對看不到的。所有真理之神的跟隨者都是面帶愁容，只會尖叫。
            </p>
            <p className="text-gray-700 leading-relaxed">
              不用說，聽完了「忙」的報告，委員會開始去興建一個新的遊樂場，因為兩種神他們都不喜歡。「忙」又提出了最後一個建議：「我們有這麼好的技術來融合不同的組成，像水和油，」他說：「我們試試來把恩典與真理結合在一起如何？」
            </p>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">一、恩典與真理分開</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們的神是一位充充滿滿有恩典有真理的神（約一：14）。我們常聽到「滿有恩典真理」的詞句，但我們很少停下來想它與我們在地上的掙扎有什麼關係——什麼是恩典與真理？它們為什麼如此重要？
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們先看恩典。恩典是神對無功之人的恩惠，是我們不能賺、也不配得到的。正如布真諾所說：「恩典是你不能得到、只能被給予的。沒有辦法賺得、配得，或令其發生。就像你無法賺得好容貌，或配得享受珍饈美味，或叫自己出生一樣。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                換言之，恩典是無條件的愛與接納。這樣的愛是所有醫治的基礎，是人類心靈的安息。這也是神的本質。「神就是愛」使徒約翰這樣寫（約壹四：8）。神白白地愛我們，毫無條件。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經上對恩典和愛並沒有很清楚的分別。正如國際聖經百科的註釋說：「愛強調神對不配的受造物的處理，而恩典強調祂有拯救或不救的自由。但期間的分別並不清楚。恩典與愛都是由基督而來（羅五：8；加一：6）。」兩者的共同點是，它們都是我們不配得的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                恩典是使我們長成有神形象的第一個因素。恩典是不能破壞、不能打斷、不能賺得、完全接受的一個關係，是人和神在伊甸園中的關係。神愛亞當和夏娃，供應他們一切。他們知道神的真理，也有完全的自由去行神的旨意。簡言之，他們很安全，他們沒有羞恥和憂慮。他們可以做真實的自己。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                也許你經歷過這樣的愛和恩典。你可以做自己，不需要隱藏自己的感覺或想法；不需要做出一些表現；不需要做任何事去贏得愛。那個人知道真正的你，而且無論如何都愛你。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                恩典，是神在關係方面的性格。恩典在神和我們無條件的關連中顯示出來。「忙」找到的第一位神有這種性格：恩典像是一個女神，有熱情、重關係。她的追隨者做許多有愛心的事；他們奉獻自己，要幫助在痛苦中的人，想與他們認同。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                他們只有一個問題：他們很少聽到真理的聲音。因此他們一再落入不好的景況，而需要更多更多的恩典。恩典之神不在乎多給一些恩典，因為她的恩典沒有限量。然而，恩典的追隨者需要方向，免得他們一再落入同樣的狀況。他們需要指引讓他們遠離麻煩。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                真理就在此出現了。「忙」所找到的第二位神最善於限定界限。他對追隨者有很多指令；他清清楚楚告訴他們什麼可做、什麼不可做。他們清楚知道善惡之分，對自己可以活動的範圍知道得一清二楚。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                真理是使我們成長有神形象的第二個因素。真理就是真實的，它指出事物的真相。正如恩典是神「關係」方面的性格，真理是神「結構」方面的性格。真理是生命賴以維持的骨架，使宇宙中各種事物有它的形體。神的真理引導我們趨向真實、精確。正如DNA包含了我們身體將有的形像，神的真理也包含了我們心靈應有的形象。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這些聽起來很好，但正如恩典一樣，真理也有它的問題。它太嚴厲了，對違背標準之人似乎不關心，只關心把壞的掃除。它沒有恩典所表露出來的熱情；有些時候它似乎漠不關心。簡言之，它沒有關係的一面：缺乏寬恕、恩寵、仁慈、熱情——所有恩典可以自然流露的特點。如果有人失敗，它只是把人丟出去，或對他大吼。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                正如恩典使「忙」想得著結構，真理使「忙」想得著愛。我們都或多或少經歷過這兩種神——慈愛之神，什麼都可以過關；嚴厲之神，不讓我們有一點退後。你也許已經理解，這兩個神是一位真神的兩種天性，也是不同教會所強調的不同兩面。但你也許不瞭解，這兩個「神」其實是人類墮落之後的情形，是罪把恩典與真理分割開了。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">二、真理缺了恩典</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                當亞當和夏娃在伊甸園中，他們有恩典與真理，並與神連結。他們犯罪之後，與神隔絕；失去了與神滿有恩典及真誠的關係。沒有恩典，亞當和夏娃覺得羞恥：當他們聽到神在園中行走，就躲藏起來。當神呼喚說：「你在哪裡？」亞當解釋說他躲藏是因為害怕（創三：8-10）。羞恥和罪惡感進入世界；人類不再安全了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                亞當夏娃自絕於與神的關係之後，也切斷了與恩典、真理的關係，因為這是從與神的關係中而來的。然而神並沒有讓他們孤立。看到了亞當夏娃在失落的境況中，神給了他們方向；祂以律法的形式給他們真理。這律法是人們賴以生活的藍圖及結構，給人引導，給人界限。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                唯一的問題是：神給了真理，而缺了恩典。亞當夏娃要試著達到神的標準，卻很快發現他們沒有辦法符合標準。不論多努力，總是不夠。真理缺了恩典就是論斷，它把你直推地獄。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">保羅在羅馬書談到真理缺了恩典——律法——以及它對我們的影響：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3 space-y-1.5">
                <p className="text-gray-700 italic">「我們曉得律法上的話，都是對律法以下之人說的，好塞住各人的口，叫普世的人都伏在神審判之下。所以凡有血氣，沒有一個因行律法能在神面前稱義，因為律法本是叫人知罪。」（羅三：19，20）</p>
                <p className="text-gray-700 italic">「因為律法本是惹動忿怒的。」（羅四：15）</p>
                <p className="text-gray-700 italic">「律法本是外添的，叫過犯顯多。」（羅五：20）</p>
                <p className="text-gray-700 italic">「因為我們屬肉體的時候，那因律法而生的惡慾就在我們肢體中發動，以致結成死亡的果子。」（羅七：5）</p>
                <p className="text-gray-700 italic">「我以前沒有律法是活著的；但是誡命來到，罪又活了，我就死了。那本來叫人活的誡命，反倒叫我死。」（羅七：9-10）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-2">對加拉太人，保羅寫道：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3 space-y-1.5">
                <p className="text-gray-700 italic">「凡以行律法為本的，都是被咒詛的；因為經上記著說：凡不常照律法書上所記一切之事去行的，就被咒詛。」（加三：10）</p>
                <p className="text-gray-700 italic">「我們被看守在律法之下。」（加三：23）</p>
                <p className="text-gray-700 italic">「你們這要靠律法稱義的，是與基督隔絕，從恩典中墮落了。」（加五：4）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                雅各也給了我們這樣的信息：「因為凡遵守全律法，只在一條上跌倒，他就是犯了眾條。」（雅二：10）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當我們看聖經提到律法，講到真理而缺少恩典時，我們發現律法使人啞口無言、惹動忿怒、使過犯顯多、發動惡慾、帶入死亡、使人成為被咒詛的、捆綁我們、與神隔絕、受嚴厲地論斷。難怪「忙」不喜歡真理！
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                沒有恩典的律法摧毀我們。沒有一個在律法之下的人會成長，因為律法把我們限制在與神的法律關係上：只有當你作對了，我才會愛你。將真理放在恩典之前，或真理放在關係之前，會帶來罪惡感、憂慮、忿怒，以及一大堆其他痛苦的情緒，正如以下的故事所說的：
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                路得的宣教士父親堅持這個廿二歲的女兒來看我。路得是大學生，受到沮喪之苦：她沒有胃口，睡不好，功課也有問題。她父親陪她一起來。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「怎麼了？」我問路得。但她父親卻回答我的問題：「很簡單嘛，她不照該做的去生活。」「怎麼說？」我問。「她服用藥品，又在外面混，」他用一種厭惡的口氣，「而且她很快被退學了，她不知道這輩子有什麼打算。」我還沒來得及問下一個問題，他接口說：「如果她念聖經、去教會，就不會這麼沮喪了。但她只想和那群朋友混在一起。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「如果她做了她該做的事會怎樣？」我問。「那她會像我和她媽媽一樣快樂，而且神會祝福她。」我看和路得的父親沒什麼好談的，就謝謝他，並請他讓我和路得單獨談談。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當她父親離開後，路得仍然躊躇不願講話，除了「是」、「不是」，不願多說。最後，我說：「路得，我想如果我和你父親同住，我也會吸藥。他的態度和你的沮喪有關嗎？」路得點點頭，她眼中充滿淚水。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「你是成人，這是成人的醫院。我不覺得你有什麼危險，你可以走了。但在你走之前，我要告訴你，我不知道整個故事，我知道你很沮喪，而這不是因為你沒有去做你父親說的那些事。我想有一些你父親不瞭解的原因導致你的沮喪。我們願意幫助你，但如果你留下來接受幫助，是你自己的選擇，不是你父親要你如此。」路得僵硬地坐在椅子上，從淚眼中看我。「我讓你自己一個人想一想。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                路得決定接受治療，而我的想法是對的。她的確有過很多「真理缺了恩典」的歲月。結果就是，她經歷到聖經上律法所帶來的：不好的感受和失敗。她動輒得咎，到處是「應該如何」，很少被接納。罪和死的律向她發動，而要掙脫它的捆綁是很痛苦的。
              </p>
              <p className="text-gray-700 leading-relaxed">
                當我看到她的掙扎，我不能不想到聖經上有關真理缺了恩典的話：它惹動忿怒，使人啞口無言，使過犯顯多，發動惡慾，帶入死亡，叫人被咒詛，使我們被捆綁，與神隔絕，受嚴厲地論斷。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">三、恩典缺了真理</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                真理缺了恩典是死路一條，但就像「忙」發現的，恩典缺了真理會導致失敗。在恩典的教會中，「忙」看到人們有愛，卻缺少方向。事實上，恩典不是這位女神的真名。就像「真理」（缺了恩典）可以稱為「論斷」，「恩典」（缺了真理）可以稱為「放縱」。聖經對此也有描述：
              </p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3 space-y-1.5">
                <p className="text-gray-700 italic">「弟兄們，你們蒙召是要得自由，只是不可將你們的自由當作放縱情慾的機會。」（加五：13）</p>
                <p className="text-gray-700 italic">「情慾的事都是顯而易見的：就如姦淫、污穢、邪蕩、拜偶像、邪術、仇恨、爭競、忌恨、惱怒、結黨、紛爭、異端、嫉妒、醉酒、荒宴等類，我從前告訴你們，現在又告訴你們，行這樣事的人必不能承受神的國。」（加五：19-21）</p>
                <p className="text-gray-700 italic">「這卻怎樣呢？我們在恩典之下，不在律法之下，就可以犯罪嗎？斷乎不可！豈不曉得你們獻上自己作奴僕，順從誰，就作誰的奴僕嗎？或作罪的奴僕，以至於死；或作順命的奴僕，以至成義。」（羅六：15，16）</p>
                <p className="text-gray-700 italic">「所以要治死你們在地上的肢體；就如淫亂、污穢、邪情、惡慾，和貪婪（貪婪就與拜偶像一樣）。」（西三：5）</p>
                <p className="text-gray-700 italic">「因為往日隨從外邦人的心意，行邪淫、惡慾、醉酒、荒宴、群飲，並可惡拜偶像的事，時候已經夠了。」（彼前四：3）</p>
                <p className="text-gray-700 italic">「棄絕管教的，必致貧受辱；領受責備的，必得尊榮。」（箴十三：18）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                在路得的家中——一個有真理缺了恩典的地方——帶入了負面的結果；同樣的，在一個有恩典缺了真理的家，也會帶來毀壞的結果。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                山姆在一次用藥過量的意外後被送到我們的醫院來。他忘了自己吸食了多少分量的古柯鹼。他雖然已經廿八歲，穿著卻像青少年——破破的牛仔褲、褪色的汗衫、高統的球鞋、鞋帶鬆開。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在頭幾次的輔導中，我們發現山姆有天才般的智力，但他從兩所大學退學，也不能固定保有一個工作。他的人際關係也有問題。他會在一個關係中，完全沒有界限地放縱自己，然後魯莽地放下所有的責任。他會拼命對一個約會的對象好，使她被嚇走。在他住院時，他最近的女朋友才離開他。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當我們問山姆家庭情況時，他說四歲時父親就過世了。他母親有很多年都在沮喪和退縮中，而且一直未再婚。為了彌補沒有父親的缺憾，她盡量對孩子好。他很少有什麼必須做的職責，反而有不少錢。他惹了麻煩，母親也很少管教他。事實上，他因為偷竊、行為不檢、持有藥物而被捕時，他母親都保釋他出來。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                起初，山姆繼續他一輩子養成的習慣，在醫院中生活，他晚起、缺席、忘了功課、不修邊幅。他生命中缺乏界限——缺乏真理與紀律——使他過著混亂的生活形態。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                醫院的人員並沒有像他母親一樣保護他，使他不受這種生活所帶來的壞結果。在一些強制、一些痛苦的教導之下，山姆學習去負起自己的責任。他很驚訝地發現，當他為自己負責時，他感覺好多了。
              </p>
              <p className="text-gray-700 leading-relaxed">
                聖經並沒有推薦「忙」的任何一位神：缺了恩典的真理，或缺了真理的恩典。「忙」的最後建議不錯：把真理和恩典融合在一起如何？他並不是第一個想到這個的：「道成了肉身住在我們中間，充充滿滿的有恩典有真理，我們也見過祂的榮光，正是父獨生子的榮光。從祂豐滿的恩典裡我們都領受了，而且恩上加恩。律法本是藉著摩西傳的，恩典和真理都是由耶穌基督來的。」（約一：14，16，17）這段經文告訴我們人如何失敗，以及如何蒙救贖。失敗從律法而來，救贖由耶穌而來。只有經由祂，我們才得以實現成長的兩個因素：恩典與真理。也經由祂，我們可以恢復亞當所有的關係：一個牢不可破的連結（恩典），連於那真實的一位（真理）。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">四、恩典與真理一起</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                恩典與真理一起時，就反轉了墮落的後果。墮落使神與人分開；恩典與真理一起時，使我們離開孤立，進入關係的建立。恩典加上真理，能將真實的自己，那個「我」，不管好的壞的，都帶入關係中。在一個關係中有安全感是一回事，能真正被接納、被認識，又是另一回事。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                只有恩典時，我們不受定罪的威脅，我們有安全感，但不能真正體會親密。當人給予恩典，加上真理（我們真正是怎樣的人，對方真正是怎樣的人，環繞我們的世界真正是怎樣的），而我們以真我來回應，真正的親密就變得可能。真實的親密一定伴隨真理而來。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                耶穌在約翰福音八章三到十一節所講的淫婦，是有關安全感和親密的極佳例子：耶穌清早到殿裡去教訓百姓。祂剛坐下，文士和法利賽人就帶著一個行淫時被拿的婦人來，叫她站在當中。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「夫子，這婦人是正在行淫之時被拿的。」他們說：「摩西在律法上吩咐我們，把這樣的婦人用石頭打死。你說該把她怎麼樣呢？」法利賽人是要得著告耶穌的把柄。羅馬政府不准猶太人私自處死刑，所以如果耶穌說：「用石頭打她，」祂會觸犯了羅馬人；如果祂說：「不要拿石頭打她，」祂會被控告為不守律法。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                但耶穌卻不受他們試探。祂彎腰用指頭在地上畫字。當他們還是不住地問祂，耶穌就對他們說：「你們中間誰是沒有罪的，誰就可以先拿石頭打她。」他們聽見這話，就從老到少一個一個地都出去了。只剩下耶穌一個人，還有那婦人仍然站在當中。耶穌問她說：「婦人，那些人在哪裡呢？沒有人定你的罪嗎？」「主啊，沒有。」她說。「我也不定你的罪。去吧，從此不要再犯罪了。」耶穌說。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在這次的事件中，耶穌讓我們看到什麼是恩典和真理。祂用寬恕和接納來表示對這婦女的恩典。祂說，這婦人不必為她的罪受死，她被接納，不需要與耶穌分離。祂也以恩典的大能使這婦人不必與她的同胞分開，法利賽人和她並無不同；她是罪人，他們也是。恩典有一種大能，使我們與神、與人和好，只要別人接受。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                但耶穌並不止於接納。祂接納她是以完全的認識：她是一個淫婦。祂接納她的真我，一個有罪行和罪慾的女人。然後祂對她的未來給予指引：「去吧，從此不要再犯罪了。」這兩個因素合在一起——接納和方向——將使真我進入一個關係中，而這就是醫治的開始。
              </p>
              <p className="text-gray-700 leading-relaxed">
                耶穌在約翰福音四章二十三到二十四節用另一種說法：「時候將到，如今就是了，那真正拜父的，要用心靈和誠實拜祂，因為父要這樣的人拜祂。神是個靈，所以拜祂的，必須用心靈和誠實拜祂。」我們必須在關係和誠實中敬拜祂，否則就沒有敬拜。可悲的是，我們因是罪人而來到基督面前，但我們卻花了餘生來證明我們不是罪人！我們要隱藏我們的真面目。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">五、真我對比假我</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                當真我與神、與別人發生關係，驚人的動力就產生了：我們會按照神創造我們的計劃成長。只有當我們連於元首（耶穌基督）及肢體（別人），才會「全身既然靠著祂筋節得以相助聯絡，就因神大得長進。」（西二：19）耶穌基督裡的恩典和真理是我們唯一的希望，而這希望的確不叫我們失望。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                傑克是我的朋友，他是一個正在接受治療的酗酒者。他這樣說：「當我在教會或與基督徒在一起，他們會告訴我喝酒不對，我該悔改。他們不知道我戒酒戒了多少次，他們不知道我多想做個好基督徒。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「當我到了酗酒者隱名社，我發現可以誠實地說出失敗，更重要的，我可以誠實地說出我的無助。當我發現神和別人接納我，包括我的酗酒和無助、我的不能控制，我開始有了希望。我能以真我尋求幫助。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「很多教會講臺說到恩典，但我不會以我的真實情況在那裡找到接納。他們老是期望我改變。在隱名社中，他們不但沒有期望我改變，而且告訴我：靠我自己，不可能改變！他們告訴我，我所能做的就是承認真我是怎麼樣一個人——是一個酗酒者，而神可以改變我，他們也會日日支持我。最後，我可以很誠實，也可以找到朋友。這是完全不同的，而這也改變了我的生命。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                傑克發現，當他能以真我和神及人建立關係，得醫治就變得可能了。當神創造的真我，對神及人隱藏起來，問題就發生了。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                如果真我隱藏了，假我就出現了。假我就是那效法這個世界的（羅十二：2），是我們向別人所表現的，一個穿戴上去的自己。保羅這樣論到假我：
              </p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「你們學了基督，卻不是這樣。如果你們聽過祂的道，領了祂的教，學了祂的真理，就要脫去你們從前行為上的舊人，這舊人是因私慾的迷惑，漸漸變壞的。又要將你們的心志改換一新。並且穿上新人。這新人是照著神的形像造的，有真理的仁義和聖潔。所以你們要棄絕謊言，各人與鄰舍說實話，因為我們是互相為肢體。」（弗四：20-25）</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                只要我們用假我去與神、與人、與自己建立關係，恩典與真理就不能醫治我們；假如我用自己的方法試著來醫治，它永遠只找到假的解決之道，而神所創造的真我一直被隱藏，沒有接觸到恩典與真理。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">六、罪惡感的障礙</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                恩典與真理之所以是得醫治的因素，是因為它們對付了成長的主要障礙：罪惡感。我們情緒上的困擾，是因為別人使我們受傷（別人犯罪侵犯了我們），或我們的悖逆（我們犯罪），或兩者都有。缺少愛、缺乏順服的結果，使我們隱藏在罪惡感的世界裡。亞當和夏娃因為犯罪之後的罪惡感和羞恥感，也因為他們變成了不完美的，使他們必須躲藏。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                罪惡感和羞恥感經常使我們躲藏。如果我們必須躲藏，我們就無法得到幫助；我們就不能成為靈裡貧窮的虛心者，也就不能成為有福的人了。當恩典進來，宣告我們不會因真正的我而被定罪時，罪惡感開始消失，我們就開始得醫治。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                有時候教會使我們更會躲藏。傑克在參加了隱名社之後才停止躲藏。當他在一個不必為失敗而羞恥的背景中，罪得赦免時，真理和恩典就開始在他生命中產生作用。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                拿一個守律法的教會和一個好的隱名社來比較，是很有趣的事。在這種教會的文化中，大家不能接受有問題的人，那會被稱為有罪；而在隱名社的文化中，不能接受完美的。前者是人們看起來比較好，卻愈來愈壞；後者是人們看起來比較壞，卻愈來愈好。當然也有好的教會和壞的隱名社，但因為教會缺乏恩典和真理，基督徒只得從別處尋找醫治。
              </p>
              <p className="text-gray-700 leading-relaxed">
                難怪外星人決定不敬拜上帝。一方面是有接納而無方向，這樣不好；另一方面是有方向而無關係，這會刺痛人！只有耶穌是恩典和真理的結合。只有耶穌能使我們照著神的形象成長。而我們也的確能得醫治——如果我們有另一個因素……
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
                '恩典是神對無功之人的無條件的愛與接納，是所有醫治的基礎；真理是神「結構」方面的性格，指出事物的真相，給人方向與界限。兩者都是神的性格，缺一不可。',
                '「真理缺了恩典」使人活在律法的定罪之下——動輒得咎，永遠不夠好，如同路得在嚴厲父親管教下所經歷的沮喪；「恩典缺了真理」則使人在毫無方向中放縱自我，如同山姆在母親過度保護、毫無界限的家庭中養成的混亂生活形態。',
                '耶穌是唯一將恩典與真理完全結合的一位。祂面對行淫時被拿的婦人，既以完全的認識接納她的真我（恩典），又給她方向：「從此不要再犯罪了」（真理）——接納與方向合一，正是醫治的開始。',
                '只有當我們以「真我」與神、與人建立關係，恩典與真理才能發生醫治的作用；若我們躲在「假我」之後，恩典與真理都碰觸不到那個真正需要醫治的自己，如傑克在隱名社中學會誠實面對自己才開始得醫治。',
                '罪惡感與羞恥感是使我們躲藏、無法得醫治的主要障礙。唯有恩典先進來、宣告我們不會因真正的我而被定罪，罪惡感才會開始消退，我們才能坦然面對真理的光照。',
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
              <h4 className="font-semibold text-gray-800 mb-2">為何教會容易走向兩個極端？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者觀察到教會文化常不自覺地偏向「恩典缺了真理」或「真理缺了恩典」其中一端：強調恩典的群體容易變得對罪不敏銳，缺乏應有的勸戒與界限；強調真理與聖潔的群體則容易變得論斷、缺乏憐憫。這不只是神學立場的差異，更常常是群體帶領者自身成長經歷（是否曾同時經歷過恩典與真理）的投射。健康的群體需要有意識地同時持守兩者，而不是選邊站。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「假我」如何在成長過程中形成？</h4>
              <p className="text-gray-700 leading-relaxed">
                心理學觀察發現，孩子若在成長中經驗到「只有表現符合期待才會被愛」，便學會隱藏真實的情緒與需要，發展出一個用來討好、應付外界的「表演版本的自己」。這個假我短期內能減少衝突、避免被拒絕，長期卻使人活在持續的疲憊與空虛中，因為沒有人真正認識、接納那個被隱藏起來的真我。這正是本章「假我」概念在發展心理學上的根源，也解釋了為何許多信主多年的基督徒仍覺得自己是「表演給神看」而非「被神真正認識」。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">恩典與真理如何在基督裡合一？</h4>
              <p className="text-gray-700 leading-relaxed">
                約翰福音一章十四、十六、十七節指出「律法本是藉著摩西傳的，恩典和真理都是由耶穌基督來的」。這不是說舊約沒有恩典、新約沒有真理，而是說：唯有在基督完全的位格與工作裡，恩典（神無條件接納我們的心）與真理（神對罪與生命實況毫不迴避的光照）才不再是彼此拉扯的兩極，而是同一個十字架事件的兩面——十字架既完全彰顯神對罪的絕不妥協（真理），也完全彰顯神對罪人的捨命之愛（恩典）。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">隱名戒癮團體（AA）的洞見對教會的提醒</h4>
              <p className="text-gray-700 leading-relaxed">
                作者以酗酒者隱名團體（Alcoholics Anonymous）作為對照，並非鼓吹以世俗方法取代信仰，而是指出：這類團體無意間活出了「恩典與真理並行」的群體文化——誠實承認自己無力自救（真理），同時被群體無條件接納、日日陪伴支持（恩典）。教會若能同時持守對罪的誠實與對人的接納，理當比任何世俗團體更能提供醫治的環境，這是本章留給教會群體的挑戰與提醒。
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
              '在你成長的原生家庭或信仰群體中，恩典與真理，哪一個相對缺席？這對你今天面對失敗、面對自己的態度，造成了什麼影響？',
              '路得的父親與山姆的母親，分別代表「真理缺了恩典」與「恩典缺了真理」兩種極端的教養方式。你覺得自己更容易被哪一種所吸引？為什麼？',
              '回想一次你向人坦承自己的失敗或軟弱的經驗——對方的回應，比較像「忙」找到的恩典之神，還是真理之神？那次經驗帶給你什麼感受？',
              '你在什麼樣的關係或場合中，最常戴上「假我」？是什麼讓你覺得不能在那裡呈現真實的自己？',
              '耶穌對行淫婦人說「我也不定你的罪」與「從此不要再犯罪了」是同時說出的。你能想像自己對一個正在犯罪掙扎中的朋友，同時說出這兩句話嗎？哪一句對你來說比較難開口？',
              '罪惡感和羞恥感讓亞當夏娃選擇躲藏。你生命中有哪些部分，至今仍因罪惡感或羞恥感而向神、向人躲藏著？',
              '如果恩典先於真理進入你的生命——先被接納，才被光照——你覺得你現在最需要神先向你顯明哪一項真理？',
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
              <h4 className="font-semibold text-green-700 mb-2">🪞 誠實盤點：找出你生命中恩典與真理失衡的地方</h4>
              <p className="text-gray-700 mb-2">用一週的時間，留意自己在不同關係中（家人、同事、教會肢體）的反應模式：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>寫下一段你最近經歷「論斷多於接納」的關係或處境</li>
                <li>寫下一段你最近經歷「接納多於方向」、卻沒有真正被幫助改變的關係或處境</li>
                <li>觀察：你自己在對待別人時，比較常扮演哪一種角色？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💬 卸下假我：找一個安全的人說真話</h4>
              <p className="text-gray-700 mb-2">
                本週主動找一位你信任、且過去曾以恩典待你的朋友或牧者，誠實說出一件你一直隱藏、覺得羞恥的真實光景（可以從小處開始）。留意當你被真實地認識、卻仍被接納時，內在的感受變化。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 默想約翰福音八章1-11節</h4>
              <p className="text-gray-700 mb-2">
                連續三天默想耶穌與行淫婦人的對話，每次默想後回答：如果耶穌此刻用同樣的語氣、同樣的兩句話對我說話，我會有什麼感受？
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，求祢光照我生命中恩典與真理失衡的地方。若我一直躲在論斷與罪惡感中，求祢的恩典先臨到我，讓我知道祢接納真正的我；若我一直用恩典包庇自己、逃避改變，求祢的真理光照我，讓我看清自己真實的光景。求祢幫助我卸下假我，讓真我在祢與人面前得以安然，因為醫治從真實開始。奉耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
