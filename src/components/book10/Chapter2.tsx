import { useState } from 'react';
import { ChevronDown, ChevronRight, Users, Heart, Gift, Sparkles, Shield, Target, Search, CheckCircle } from 'lucide-react';

// Section Component with expandable/collapsible functionality
const Section = ({ 
  title, 
  icon: Icon, 
  children, 
  defaultOpen = false 
}: { 
  title: string; 
  icon: any; 
  children: React.ReactNode; 
  defaultOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="mb-6 border-l-4 border-amber-600 pl-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 w-full text-left group hover:text-amber-700 transition-colors mb-3"
      >
        {isOpen ? (
          <ChevronDown className="w-5 h-5 text-amber-600 flex-shrink-0" />
        ) : (
          <ChevronRight className="w-5 h-5 text-amber-600 flex-shrink-0" />
        )}
        <Icon className="w-5 h-5 text-amber-600 flex-shrink-0" />
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-700 transition-colors">
          {title}
        </h3>
      </button>
      {isOpen && (
        <div className="ml-7 space-y-4 text-gray-700 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
};

export default function Book10Ch2() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Chapter Header */}
      <div className="mb-8 pb-6 border-b-2 border-amber-600">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-10 h-10 text-amber-700" />
          <div>
            <div className="text-sm text-amber-600 font-semibold tracking-wide">第二章</div>
            <h1 className="text-4xl font-bold text-gray-900">代禱者</h1>
          </div>
        </div>
        <p className="text-lg text-gray-600 italic mt-4 pl-13">
          「有代禱恩賜的人不多，然而代禱卻是每一位忠心的基督徒都應期許自己扮演的角色。」
        </p>
      </div>

      {/* Opening Quote */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow-md border-l-4 border-amber-600">
        <p className="text-gray-700 leading-relaxed">
          義大利的經濟學者派瑞特(Vilfredo Pareto)在上世紀末葉有一項驚人的發現。他發現無論一個國家所使用的稅務體制如何,幾乎都是百分之廿的人控制著百分之八十的資金。從那時候開始,就有人嚐試將「派瑞特原則」(Pareto Principle)應用在各方面...
        </p>
      </div>

      {/* Main Content Sections */}
      <Section title="重要的少數者" icon={Users} defaultOpen={true}>
        <p>
          這廿比八十定律亦可運用在關於地方性教會的代禱者上。然而我的研究卻顯示,少數的重要代禱者之比例較像是<strong className="text-amber-700">百分之五而非百分之廿</strong>。換句話說,平均百分之五的會友提供了教會內百分之八十有意義的代禱。
        </p>
        <p>
          我深知像這樣講法可能會因為某種理由而傷到一些人的感情。有的人會說,那不應是真的,應該有更多基督徒投入禱告才對。有些人則會說,那百分之九十五的人所作百分之廿的代禱絕不是「無關緊要之事」。對於這些說法我只能表示同意。
        </p>
        <p>
          雖然上面的反駁也許是對的,但我猜想你的教會大概和我的教會一樣,當中只有相當少數的會友自認或被其他人視為傑出的禱告者。
        </p>
        <div className="bg-amber-50 p-4 rounded-lg mt-4">
          <p className="font-semibold text-amber-900">真實見證:</p>
          <p className="mt-2">
            已過世的魏蒙·羅傑(Waymon Rodgers)曾在肯塔基州牧養一間大教會,他曾說到他教會裏某位弟兄的故事。那位弟兄來找他說:「我要教會的鑰匙,因為我想來教會禱告。」羅傑告訴他教會每天早上八點開門,誰知該弟兄卻回答說:「我從前都是清晨四點半就起床出去工作,因為現在退休了,所以想利用那一段時間來禁食禱告。」他拿到了鑰匙,<strong className="text-amber-700">每天清晨四點就到教會去禱告直到七點</strong>。
          </p>
        </div>
      </Section>

      <Section title="了解屬靈的恩賜" icon={Gift}>
        <p>
          為了要了解代禱的恩賜,我們必須回到聖經對屬靈恩賜的教導上。如保羅所說:「弟兄們,論到屬靈的恩賜,我不願意你們不明白。」(林前十二1)
        </p>
        <p>
          聖經說教會是一個身子,是基督身體(參弗一22～23)。基督身體在許多方面的運作就像是人類的身體一樣。保羅說:「正如我們一個身子上有好些肢體,肢體也不都是一樣的用處。我們這許多人在基督裏成為一身,互相聯絡作肢體,也是如此。」(羅十二4～5)
        </p>
        
        <div className="bg-white p-4 rounded-lg border border-amber-200 mt-4">
          <h4 className="font-bold text-gray-800 mb-2">上帝揀選恩賜</h4>
          <p>
            只有上帝夠清楚認識我們,可以決定我們應是身體的什麼部位。聖靈「隨己意分給各人」(林前十二11)。上帝已隨祂的旨意設立好身子的各肢體(參林前十二11),我們所得到的恩賜完全是本於上帝的心意並因祂的恩典而有的。
          </p>
          <p className="mt-2">
            聖經中最常用來描述屬靈恩賜的字是「<strong className="text-amber-700">Charisma</strong>」,這其中包含了「恩典」的希臘文Charis在內。恩賜不是我們自己憑努力取得的,也不是一種工作的報酬,乃是上帝恩惠且明智的贈予。
          </p>
        </div>

        <div className="bg-amber-50 p-4 rounded-lg mt-4">
          <h4 className="font-bold text-amber-900 mb-2">恩賜知多少?</h4>
          <p>
            解剖學的教科書可以告訴我們人體有哪些部分。幸運的是,基督的身體並沒有那麼複雜。究竟有多少屬靈的恩賜呢?大家眾說紛紜。我個人所做的研究總結在《你的屬靈恩賜能助你的教會增長》一書中。雖然我並不想與採其他不同意見的人爭論,但我的建議是有<strong className="text-amber-700">廿七種恩賜</strong>。
          </p>
          <p className="mt-2">
            在新約聖經裏,有三處主要的經文提到屬靈恩賜,那分別是<strong>羅馬書十二章、哥林多前書十二章及以弗所書四章</strong>。其中沒有一處是完全的,並且它們彼此又有許多重疊。綜合此三處經文計有廿項恩賜,另有幾項恩賜出現在此三處經文之外,精確地說是五項。這樣,在新約裏我們總共找出了廿五項恩賜。
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg border-l-4 border-amber-600 mt-4">
          <h4 className="font-bold text-gray-800 mb-2">趕鬼的恩賜</h4>
          <p>
            現在教會中愈來愈多不同神學派別的人將趕鬼視為靈方面的問題,甚至當那些以趕鬼著稱的教會在遇到困難的案例時,常常還會找一些特定的人來處理。這種人比大多數人更有上帝所賜予的能力來處理鬼附的問題,雖然我相信每位基督徒都被授予權柄可奉耶穌的名趕逐污鬼。
          </p>
          <p className="mt-2 text-sm text-gray-600">
            我的妻子桃麗絲就有趕鬼的恩賜。(書中接著分享了一個菲麗絲·賓耐特得醫治的真實見證...)
          </p>
        </div>
      </Section>

      <Section title="恩賜與角色" icon={Target}>
        <p>
          每一種屬靈恩賜就好傢人體的各部位,它本身只是少數。身體的大部分不是手指,也不都是肺。在教會裏也一樣,大部分人不是牧師、教師或醫治者。同理,我們也可以如此看待其他各項恩賜。
        </p>
        <p>
          雖然相形之下每一項屬靈恩賜只有少數基督徒能擁有,但沒有例外的,所有基督徒也都有與大部分恩賜相平行的「<strong className="text-amber-700">一種角色</strong>」。例如:
        </p>
        <ul className="list-none space-y-2 ml-4 mt-3">
          <li className="flex items-start gap-2">
            <ChevronRight className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
            <span>不是全部的基督徒都有傳福音的恩賜,但卻都有為基督作見證、領人歸主的角色</span>
          </li>
          <li className="flex items-start gap-2">
            <ChevronRight className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
            <span>不是全部基督徒都有施捨的恩賜,但都需扮演好什一奉獻的角色</span>
          </li>
          <li className="flex items-start gap-2">
            <ChevronRight className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
            <span>不是都有醫治的恩賜,但都有按手為病人禱告的角色</span>
          </li>
        </ul>
        
        <div className="bg-amber-50 p-4 rounded-lg mt-4">
          <p className="font-semibold text-amber-900">重要原則:</p>
          <p className="mt-2">
            其間的區別非常重要。我們在教會裏都因著上帝所賜的多重角色而做許許多多的事,但通常其中只有極少數具較高且較持續的能力與果效,因為<strong className="text-amber-700">聖靈透過我們的屬靈恩賜而賜給我們那方面的特別膏抹</strong>。
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg border border-amber-200 mt-4">
          <h4 className="font-bold text-gray-800 mb-3">代禱是基督徒的角色</h4>
          <p>
            如前所提,代禱只是禱告中的一種,但卻是非常重要的,甚至聖經描述耶穌自己也是個代禱者。耶穌基督在上帝的右邊「替我們祈求」(羅八34),同樣地,聖靈也「照著上帝的旨意替聖徒祈求」(羅八27)。
          </p>
          <p className="mt-2">
            保羅對羅馬信徒說「在禱告之間不住地提到你們」(羅一9另譯)時,他乃視自己為代禱者。
          </p>
          <p className="mt-2 text-amber-800">
            在說明代禱為一種屬靈恩賜的觀念之前,我想要澄清的是,<strong>代禱乃每一位忠心信徒被期許所要扮演的角色</strong>。事實上照常理說來,我不知道有任何真正基督徒弟兄或姐妹是不為其他人禱告的。
          </p>
        </div>
      </Section>

      <Section title="代禱是一種屬靈恩賜" icon={Sparkles}>
        <p>
          代禱雖不是新約聖經中所提到的廿五種恩賜之一,但是如同趕鬼的恩賜,我相信它應該被列入其內。當我與牧師們談到這點時,他們幾乎都有志一同地告訴我,在他們會眾中有些會人被公認具有特別的禱告事奉是超過一般人的。這是他們可能有代禱恩賜的早期徵兆。
        </p>
        
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-lg mt-4 border-2 border-amber-600">
          <h4 className="font-bold text-amber-900 mb-3 text-lg">代禱恩賜的定義:</h4>
          <p className="text-gray-800 leading-relaxed">
            「代禱恩賜是上帝賜給基督身子上某些肢體的特別能力。他們比一般人更有規律地長時間投入禱告,而且看見他們禱告蒙應允的次數與程度亦比一般信徒更頻繁。」
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg border border-amber-200 mt-4">
          <h4 className="font-bold text-gray-800 mb-3">有代禱恩賜者的特徵:</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span><strong>禱告比較久</strong>:至少每天一小時,更常是每天禱告二至五小時</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span><strong>比一般人更強烈的禱告</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span><strong>更多地享受禱告</strong>,在他們的禱告中也得到較多的個人滿足</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span><strong>更常也更戲劇性地看見他們的禱告蒙應允</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <span><strong>十分清楚地聽見上帝的聲音</strong>,許多人同時還伴隨有預言的恩賜</span>
            </li>
          </ul>
        </div>

        <p className="mt-4">
          一般會眾當中會有多小肢體具代禱的恩賜?答案並非完全可知。但毫無疑問地,進一步深入的研究也許可發掘出一些意表非凡的變數。我的禱告之一就是求上帝使用這本書來幫助促成教會環境的改變,使得各宗派中有更多的教會能積極在各層面上鼓勵代禱的服事。
        </p>
        <p className="mt-2">
          我先前提及在討論「重要的少數者」定律時所提到的數據是,會眾中平均<strong className="text-amber-700">百分之五的人</strong>具有代禱的恩賜,這看似是個合理的有效假設。
        </p>
      </Section>

      <Section title="女性代禱者" icon={Heart}>
        <p>
          有趣的是,在我的班級上所有具代禱恩賜的人都是女性。但這沒什麼不尋常。我雖尚未做夠多的研究以定出明確的數字,但依個人多年來的觀察敢大膽假設有<strong className="text-amber-700">百分之八十具代禱恩賜的人都是姊妹</strong>,不論其神學與文化背景為何。
        </p>
        
        <div className="bg-amber-50 p-4 rounded-lg mt-4">
          <h4 className="font-semibold text-amber-900 mb-2">為什麼有較多的女性是代禱者?</h4>
          <p>
            大體上從心理學來觀察,<strong>女性較直覺,男性較理性</strong>。有些代禱者自己說這可能與女性具有懷孕、孕育及生產的陣痛等生理功能有關。代禱服事的主要目標就是帶出上帝的旨意並使之成就,而許多人描述當他們的代禱進入最強烈的階段時,往往就像生產的陣痛一樣。
          </p>
          <p className="mt-2">
            因此母親們往往更容易完全了解使徒保羅所說的:「我小子阿,我為你們再受生產之苦,直等到基督成形在你們心裏。」(加四19)
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg border-l-4 border-amber-600 mt-4">
          <h4 className="font-bold text-gray-800 mb-3">禱告勇士(詩歌)</h4>
          <div className="space-y-2 text-gray-700 italic">
            <p>你可能看見她帶著孩子們在雜貨店購物,</p>
            <p>或在城市朝九晚五的忙碌工作裏,</p>
            <p>她不過是個母親,或老師,或婦女,</p>
            <p><strong className="text-amber-800">但當她在禱告時,卻變得全然不同。</strong></p>
            <p className="mt-3">我們看不見她孤單的代禱夜晚,</p>
            <p>或她呻吟禱告時所滴的淚水;</p>
            <p>我們可能看不見深藏在她內心的隱祕事,</p>
            <p><strong className="text-amber-800">但上帝的雙眼正關愛地注視著她。</strong></p>
            <p className="mt-3">她是位禱告勇士,當她雙膝跪下時,</p>
            <p>與空中執政、掌權的爭戰,</p>
            <p>為他人站在破口上,</p>
            <p>為她的姊妹及弟兄,</p>
            <p><strong className="text-amber-800">以她的心上達天庭......</strong></p>
          </div>
          <p className="text-xs text-gray-500 mt-3">— 福音團隊Heirloom</p>
        </div>
      </Section>

      <Section title="代禱者的職分" icon={Shield}>
        <p>
          要成為教會中的一個職分不僅需要擁有恩賜而已。敵人所了解的「職分」是「基督的身體(教會)公認某肢體具有特別的恩賜,並准許其在教會正規的事工裏名正言順地使用該恩賜」。這就是我們所知道按立成為聖職人員的基本原則。
        </p>
        
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-5 rounded-lg border-2 border-amber-600 mt-4">
          <h4 className="font-bold text-amber-900 mb-3 text-lg">重要建議:</h4>
          <p className="text-gray-800">
            我的建議是,教會將來要做一件現在許多教會沒有做的事:<strong className="text-amber-700">建立明確的代禱者職分</strong>,提供公開的認可給凡有代禱恩賜的人,就像我們對那些有牧師、傳福音、教師恩賜的人所做的。
          </p>
        </div>

        <p className="mt-4">
          我觀察到當偉大的禱告運動正橫掃我們國家之際,我們看見愈來愈多的教會比以前更正規代禱者及代禱職分的重要性。有些甚至還加上了所謂「禱告牧師」、「代禱傳道人」或一些其他名稱的全時間同工。
        </p>

        <div className="bg-white p-4 rounded-lg border border-amber-200 mt-4">
          <p className="text-gray-700">
            我們需要敏感於此事實,就是並非每位有代禱恩賜的人都會接受此職分。因為公開的認可常會帶來更高的責任、職務及委身。有些人並不希望如此。此外代禱者也會從經驗裏最先知道,在此職分中他們將受到更強烈的屬靈攻擊。要說「是的,我擁有代禱的屬靈恩賜,我預備要扛起責任,在基督身體的服事裏使用這恩賜」是需要冒險的。但有些人願意冒險,結果<strong className="text-amber-700">令人敬畏的新屬靈能力便被釋放在普世的教會及團體裏</strong>。
          </p>
        </div>
      </Section>

      <Section title="代禱的服事" icon={Target}>
        <p>
          一般說來,代禱者所從事的有<strong className="text-amber-700">四種特別的職事</strong>。
        </p>
        <p className="mt-2 text-sm text-gray-600">
          我以此要說明的是,上帝會指示給有相同屬靈恩賜的個人不同的職事。這原則可以適用於任何的屬靈恩賜,其中包括代禱的恩賜。
        </p>

        <div className="space-y-4 mt-6">
          <div className="bg-white p-5 rounded-lg border-l-4 border-amber-600">
            <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
              <span className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
              一般性代禱
            </h4>
            <p className="text-gray-700 mt-2">
              有一般性代禱職事的人常會花很長時間按著禱告事項、禱告指引及其他各種給予他們的禱告請求而代禱。許多教會固定在主日早晨收集代禱事項,一般性的代禱者則會在週間為他們禱告。你若請求某位一般性代禱者為某事禱告,你可引以安心地確知事情必會被好好地禱告到。
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg border-l-4 border-amber-600">
            <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
              <span className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
              危機的代禱
            </h4>
            <p className="text-gray-700 mt-2">
              危機的代禱者幾乎都只接受指派而禱告,而此指派通常直接來自於天父。他們對個人信口說出的禱告請求並不太有積極的回應,也大多不耐煩於按禱告單逐一禱告,而喜悅以敬拜讚美進入他們的禱告時刻,與父上帝親近,直接從祂聽到自己所需要禱告的事項。一旦上帝告訴他們要為某個危急狀況禱告,他們就會<strong className="text-amber-700">像鬥犬一樣緊咬住問題不放,直到那問題解決或上帝從差派中「釋放」他們為止</strong>。
            </p>
            <div className="bg-amber-50 p-3 rounded mt-3">
              <p className="text-sm text-gray-700">
                <strong>見證:</strong>克莉斯婷被授與要長期性不時為阿爾巴尼亞禱告的任務。當時阿爾巴尼亞是世界上最敵對基督教的國家,似乎最沒有機會向福音開門。然而世局在一九九一年全然改觀,一下子全世界驚愕不已:阿爾巴尼亞竟然開放了!
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border-l-4 border-amber-600">
            <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
              <span className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
              個人性的代禱
            </h4>
            <p className="text-gray-700 mt-2">
              有些代禱者蒙召為某位或某幾位特定的人作一般及特別的禱告。通常這些被禱告的人是牧師及其他的基督徒領袖。本書就是針對此等服事做深入的察考。根據聖經,我相信腓立比教會的<strong className="text-amber-700">友阿爹和循都基</strong>是保羅的個人性代禱者中的兩位代表(參腓四2～3)。
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg border-l-4 border-amber-600">
            <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
              <span className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">4</span>
              爭戰的代禱
            </h4>
            <p className="text-gray-700 mt-2">
              有些代禱者蒙召特別從事高層次的屬靈爭戰,為要擊敗仇敵的工作。這是一種高層次的代禱,是最需要也是最具潛在危險性的。許多危機代禱者及個人性的代禱者也發現他們時常會直接與黑暗權勢相衝突,因此有人可能會對將爭戰的代禱另分類一類提出異議。但我個人深信,認清有些代禱者確實在許多地從事此類代禱是有其價值的。
            </p>
          </div>
        </div>
      </Section>

      <Section title="如何發掘你的代禱恩賜?" icon={Search}>
        <p>
          許多人這時會問:「我懷疑自己是否有代禱的恩賜?」若你真的有,請記得這乃是因為上帝恩慈地選定要賜給你,而不是像芭蕾舞者或打棒球的人需要透過辛苦及持之以恆的訓練才能擁有的技巧。那既是上帝所給予的恩賜,因此你的責任就是去發挖究竟自己有沒有而已。
        </p>

        <div className="space-y-4 mt-6">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-5 rounded-lg border-l-4 border-amber-600">
            <h4 className="font-bold text-amber-900 mb-2">步驟一:探索可能性</h4>
            <p className="text-gray-700">
              此時你需要知道,代禱恩賜是上帝分賜給基督身體的屬靈恩賜之一。所有的基督徒都必須履行身為代禱者的角色,但有些人卻比一般人更進一步擁有恩賜與職事。
            </p>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-5 rounded-lg border-l-4 border-amber-600">
            <h4 className="font-bold text-amber-900 mb-2">步驟二:恩賜的實驗</h4>
            <p className="text-gray-700">
              儘可能隨時多方地試著去代禱。這種試驗是長期性的,且要認真地進行。在整個過程中,你可以求上帝向你顯明是否擁有此恩賜。若你的恩賜不是代禱,仍需繼續實驗以發現你的恩賜是什麼,但同時仍要做一個忠心的禱告者。
            </p>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-5 rounded-lg border-l-4 border-amber-600">
            <h4 className="font-bold text-amber-900 mb-2">步驟三:察驗你的感覺</h4>
            <p className="text-gray-700 mb-2">
              若你有代禱的恩賜,則你渴望禱告的心將會繼續增長。聖經上說:「因為你們立志行事都是上帝在你們心裏運行,為要成就祂的美意。」(腓二13)
            </p>
            <p className="text-gray-700">
              代禱一段時間後,若你發現代禱是辛苦的工作或令人厭煩,你內心根本不渴望去行,那就或許是你沒有這恩賜的證據。但若<strong className="text-amber-700">長時間的禱告是你的喜樂</strong>,那麼你就可以開始相信你有此恩賜了。
            </p>
            <div className="bg-white p-3 rounded mt-3">
              <p className="text-sm text-gray-700 italic">
                翟辛蒂說:「有代禱恩賜的人喜愛禱告。他們寧願不做其他的事。每當人們問我一天禱告多久時,我總是回答說:『儘可能地多!』」
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-5 rounded-lg border-l-4 border-amber-600">
            <h4 className="font-bold text-amber-900 mb-2">步驟四:衡量你禱告的有效性</h4>
            <p className="text-gray-700">
              得到屬靈恩賜之後,最重要的便是從聖靈獲得超自然的幫助,以產生有效的事奉。你能清楚地聽見上帝的聲音嗎?你的禱告蒙應允次數比一般人多嗎?你意識到有特別的能力從你的禱告中釋放出來嗎?若有的話,那麼你八成有此恩賜。
            </p>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-5 rounded-lg border-l-4 border-amber-600">
            <h4 className="font-bold text-amber-900 mb-2">步驟五:從肢體得到印證</h4>
            <p className="text-gray-700 mb-2">
              我很喜歡一位已被確認的代禱者葛蘭·費滋派克(Graham Fitzpatrick)的故事。他請求上帝向他顯示是否有代禱恩賜。很確定的是,聖靈清楚地向另外兩位較成熟的信徒提到了他。
            </p>
            <p className="text-gray-700">
              根據葛蘭所說,一位他素昧平生的男士「告訴我說上帝要我作他人的代禱者」。接著是一位他認識的女士,她並不曉得他企盼為人代禱,她說上帝也給了她這相同的信息。葛蘭說:「所以,<strong className="text-amber-700">上帝使用這兩位基督徒來印證我心所想的確實是祂向我說的</strong>——真的是出於祂,而不是出於我個人的想像或魔鬼。」
            </p>
          </div>
        </div>

        <div className="bg-amber-100 p-5 rounded-lg border-2 border-amber-700 mt-6">
          <p className="font-bold text-amber-900 mb-2">重要提醒:</p>
          <p className="text-gray-800">
            若你真發覺自己有代禱的恩賜,就不要不情願承認自己有此恩賜。不要陷入虛假的謙虛中。你若「誇口」自己是代禱者,絕不會比葛理翰誇口他是佈道家或你的牧師誇口他是牧師產生更嚴重的後果。仇敵常會使用你的不情願讓其他知道你有此恩賜的人削弱你在基督徒職事的影響。要為上帝所賜的感謝祂,這是好管家的本分之一,並<strong className="text-amber-700">使用此恩賜去結果實卅倍、六十倍、一百倍</strong>。
          </p>
        </div>
      </Section>

      {/* Discussion Questions */}
      <div className="mt-10 p-6 bg-white rounded-lg shadow-md border-t-4 border-amber-600">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <CheckCircle className="w-6 h-6 text-amber-600" />
          問題迴響
        </h3>
        <ol className="space-y-3 text-gray-700 list-decimal list-inside">
          <li>依你之見,上帝是否可能給今日基督徒一些屬靈恩賜是新約聖經中所沒有提到過的,試討論之。</li>
          <li>用你自己的話解釋屬靈恩賜與基督徒角色之間的差別。</li>
          <li>你認為為什麼女性比男性更多擁有代禱的屬靈恩賜?</li>
          <li>你是否知道有任何人符合本章所提到之代禱四種職事中的一項或多項?寫出他們的名字,並討論他們的職事。</li>
          <li>你是一個有上帝所賜予之代禱恩賜的人嗎?討論你所回答的理由。</li>
        </ol>
      </div>

      {/* Navigation hint */}
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>— 第二章完 —</p>
      </div>
    </div>
  );
}
