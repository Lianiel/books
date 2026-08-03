import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book34Ch5() {
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
        <p className="text-cyan-700 font-semibold tracking-wide mb-1">第二篇　與人相連</p>
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-700 to-teal-700 bg-clip-text text-transparent">第五章</h1>
        <h2 className="text-xl font-semibold text-gray-700">學習相連</h2>
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
              在你失去了第一次的機會之後再來學習相連，也不是一朝一夕就能成功。在本章的末了你會看到：有位名叫裘安的婦女曾經憂鬱而試圖自殺，她花了好幾個月的努力來建立與人相連的關係。蘇珊，一位二十八歲的平面藝術設計師，無法單靠加入一個同業協會或一個教會的研討小組來建立情感上的連結。她費了相當的勁，在個別治療與團體治療之中與自己的問題角力，才能在「真實的世界」中伸出觸角與人有聯絡。
            </p>
            <p className="text-gray-700 leading-relaxed">
              若你在與人不相連結的環境之中長大，以後再要與人有連結，可得服一劑很強的恩典、真理、與時間。
            </p>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">一、相連的技巧</h3>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">認識需要</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                許多人並未認識到他們的問題來自缺乏相連與依附。你或許成長於一個不重視親密的家庭，或許受傷到一個程度使你忘了如何相連。因此，你第一件要做的事就是認知你是多麼需要與人相依。只要細讀聖經，你就會發現神多看重彼此連結。保羅用身體的比喻來說明此點：「你們就是基督的身子，並且各自作肢體。」（林前十二：27）你是一個身體的一部分，不能在情感上被割離身子的血液循環而仍期望能欣欣向榮。「眼不能對手說：『我用不著你！』」，若一個肢體受苦，所有的肢體就一同受苦。（林前十二：21、26）
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">靠近他人</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當他人靠近你並尋求與你有心靈之交，是很美妙的；因為神就是如此行。但許多時候，別人無法看到你的需要，不知道你在情感上有多麼孤立。因此，你要盡力主動伸手尋求幫助和支持。早先我們看到這個主意對瑞比是多陌生。他無法想像怎麼會有人想與他在一個更深的層次上有連結。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">把自己放在易受傷的地位</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                你可以靠近別人並與他們交往，但仍然孤立。你的孤立可能來自你無法開放自己，無法將你真實的自我展現於人。要學習使自己易受傷（Vulnerable）。Vulnerable一詞的字面意義是「敞向批評或攻擊」。你須對你的需要開放明示到易受攻擊的程度。對需要的認知是成長的開始。若要在一個深入的層次上與人相連，謙卑和易受傷的人格特質是絕對必須的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                若要人一開始就在一般社交中展現出易受傷的特質，可能令人覺得太受威脅。也許你需要一位牧師、輔導、或一個支持小組開始。但是易受傷的特質是一個技巧，能將心開啟，使愛能生根。當你能承認自己需要支持與幫助，而且能展示你受的傷與你的孤立，一個能改造你人格和生命的機能就實實在在發動了。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">向扭曲的思想挑戰</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                扭曲的思想阻擋你與人的關係。這在基本上使你重複過去的經歷。要向使你受捆綁的扭曲思想挑戰。你繼續透過孩提時代的眼鏡來看世界到什麼程度，你的過去就會在什麼程度上成為你的未來。舉例來說，你若不向「所有人都會離我而去」這一信念挑戰，你就永不能建立一個長存的依附關係，你也再造了過去的孤立。主已經應許將真理啟示給你，求祂指示你有何扭曲的思想。但是扭曲的思想是在人際關係之中學來的，也只有在人際關係中才能將此種思想去除。你需要新的關係來除去過去所學的；在其中你真實的自我可以在恩典與真理中與人連結並因而得以改變。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">冒險</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                要學習新的人際關係的技巧和與人相依的方法是要冒險的。請聽耶穌的邀請：「看哪！我站在門外叩門，若有聽見我聲音就開門的，我要進到他那裡去，我與他，他與我一同坐席。」（啟三：20）你有責任聽這聲音並且開門。人與神都會呼喚你，但若你那扭曲的思想和對冒險的排斥擋在途中，你就會讓門關著，而互相依附的關係也就無從產生。要容許你自己冒在情感上重視某人的險。要冒再次受傷的險。這是困難的，然而是必須的。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">容許有依賴的感覺</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                只要你開始讓人在你孤立的心中具有份量，使你不安的「有需要」和「依賴」的感覺就會浮現。這些是心開始軟化的表現。雖然令人不安，這些感覺卻是能否依附的關鍵。許多時候你以為必須顯出堅強的面貌，但容許你柔弱、有需要的一面向你需要的人們表現出來，卻能鞏固依附的關係並讓它成長。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">認識防衛手段</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                要認識你自己對依附的防衛手段。一旦你能認出那些熟悉的行為模式，你就能注意到它們是否正在進行之中，並為它們負起責任。你也許要說這樣的話：「哦，我又來了，貶低一個要愛我的人。我這次要試著讓他們對我有重要性。」要記住，你的成長，責任在於你自己。要挑戰你老舊的行為方式並讓聖靈賜你能力來抗拒你的防衛手段。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">安於憤怒</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                人常會因為怕對自己所需要、所愛的人有怒意而避免依附。結果，他們便進入孤立以保護他們所愛的人。對你需要的人感到憤怒是很自然的。你愈能安於向「好人」有怒意，就愈能將這些感覺整合進入人際關係中。許多人寧願將他們人格中憤怒的那一部分留在相連的關係之外，他們相信那是他們自身不可愛的部分。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">禱告與默想</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在詩篇一三九篇23-24節，戴維求神啟示他在一個深入的層面上是怎樣的人：「神啊，求你監察我，知道我的心思，試煉我的意念，看在我裡面有什麼惡行沒有，引導我走永生的道路。」請與戴維作同樣的禱告，神會啟示你內心真實的狀況。求神顯明你在依附上的問題。恆久不變的友誼是神對你的最高期許，因此你可以確知祂想要幫助你達到此目標。正如戴維在詩篇五十一篇6節所說：「你所喜愛的，是內裡誠實；你在我隱密處，必使我得智慧。」
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">有同理心</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                同理心是分享別人情緒、思想、與感覺的能力。對別人的需要感同身受，認同他們所受的傷，會軟化你自己的心。許多心已硬化的人因接近他人的傷而溶化。我並不是在鼓吹一個「給以求有所得」或一個「將你的注意力從自己挪開」的策略。我乃是說要透過與掙扎的人認同來觸到你自己的傷與孤單。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">倚靠聖靈</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖靈賜你能力改變並走出過去生活方式的捆綁。求祂釋放你脫離你過去緊握的防衛手段並給你勇氣來啟步與別人相連。每次當你發現自己處身十字路口，面對依照舊的模式作防衛式的反應或冒險採用新的模式，就求祂幫助。你無法獨自成功。當你面對自己的無能相連時，你必須承認自己的無能並求聖靈的幫助。你無法自己改變。你當倚靠祂來幫助你進行醫治的改變。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">向生命說是</p>
              <p className="text-gray-700 leading-relaxed">
                與別人和神相連的事，是件向生命說「是」的事。是向神及別人所發出的與他們連結的邀請說「是」的舉動。掙扎於孤立的人以許多方式向關係說不：當你藏匿在種種防衛機制之後，你是在說不；當你排斥親密，你是在說不；當你提出各樣的託辭，你是在說不。而「連結」要求你在「愛」開始向你展現的時候，向之說是。這也許意味著接受與人同處的邀請而不總是退縮。也許意味著在別人問你「近來如何」時，在安全的環境中給一個與以前不同的答案。也許意味著感同身受於別人的傷。不論是怎麼樣的機會，它意味著對關係說「是」。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">二、裘安</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                本章這一節始於裘安。她在許多的朋友中仍感孤立，又充滿了黑暗的沮喪，甚至試圖終結自己的生命。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                裘安在醫院的頭幾個禮拜是紛亂的。每一天醫院人員都想要努力地認識她，但都徒勞無功。她將自己藏在病房中，即使在出來的時候，也不談自己的問題。但當她開始注意到其他病人的痛苦，她慢慢開始讓一些人接近她。起初，她只是揭露她生命的表面事物——她的機敏，她的魅力，她那吸引人的個性，她的才智。但是後來，她開始向幾個信任的人敞開自己並述說她的故事。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                裘安成長於一個很強的基督教環境中，灌輸了很強烈的是非感。然而，她從未在一個深入的感情層次上與她的父母相依附。她承認：「我從未愛過我的母親。她太被動。至於我的父親，他感興趣的只是我有沒有作個『好孩子』。」結果，裘安在成長過程中的外在表現毫不馬虎、循規蹈矩、一板一眼，但她內心卻只是感到空虛。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                裘安說：「當我遇到戴維時，他是一個聰明又有前途的神學生。我們很年輕就結婚了，他對我而言是全世界——起初的時候。然後我發現他是多麼完美主義。他非常賣力工作，結果我們一同建立了一個很成功的事奉。但我總感到好孤單，即使和他在一起時。」裘安從不承認她需要別人，甚至是她的丈夫戴維。從她第一個家庭中，她學到忽視自己的需要、壓抑它們、將它們掩蓋起來。在她自己的婚姻以及與他人的友誼中，她也保持了同樣的行徑。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在醫院裡，裘安開始生平第一次的敞開。她分享自己的痛苦。她哭泣。而她也因別人在她表露出的弱點後依然愛她而感到驚異。當她開始感受到自己的獨立程度其實是有限的，她慢慢地容許別人在她生命中具有重要性。她也認識到：雖然自己是「窮困」的，但她的能力並未消失；於是她也向與她一同住院的夥伴們伸出手來。她也邀請老朋友來探望她，並為他們在她脆弱易受傷的景況中並未棄絕她而覺得驚訝。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                此外，裘安細察了她的婚姻，在那兒她也發現自己缺乏易受傷的人格特質。她和她丈夫一同努力建立了彼此的親密，那是他們從前因個別的背景與懼怕而未能擁有的。經過一段頗長的時間與努力，他們終於能建立一個新而更親密的關係，一個植基於互相分享與易受傷的人格特質的關係。隨著時間過去，裘安的沮喪開始消除。她開始發現活著的意義。生平第一次，她看到意義和盼望是由關係而生。她也生平第一次實在經驗到神、丈夫、家庭、與朋友的愛。其後她繼續努力去建立親密與相連的關係。如今，在她長期住院而出院的多年之後，她生活得非常好。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                裘安的戰爭不是一場容易的戰爭。像一個垂危的病人，她真的要為自己的生命而戰。然而有一天，當她面對她的救主，她將能以自己曾「打過那美好的仗」為傲；那是一場愛的仗，她也重新得回了那因人類墮落與她自己家庭背景而失去的「神的形像」。之後，她和她的家人則將享受在愛裡有根有基的生活。
              </p>
              <p className="text-gray-700 leading-relaxed">
                裘安不再生活於「孤立」的人間地獄。相反的，她活在「在地如天」的親密、相愛的關係中——一個耶穌應許我們可以知曉的關係。
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
                '學習相連需要一連串具體的技巧：認識自己的需要、主動靠近他人、把自己放在易受傷的地位、向扭曲的思想挑戰、冒險、容許依賴的感覺、認識並挑戰自己的防衛手段、安於對所愛之人的憤怒、禱告默想、培養同理心、倚靠聖靈，以及最終「向生命說是」。',
                '「易受傷」（Vulnerable）不是軟弱，而是「敞向批評或攻擊」的謙卑姿態，是深入相連的必要條件——唯有願意展現真實需要與傷痛的人，才可能被真正認識和愛。',
                '相連的學習必須發生在關係之中，不能單靠個人努力：扭曲的思想是在人際關係中學來的，也只能在新的、安全的人際關係中被重新塑造和醫治。',
                '裘安的故事示範了完整的醫治歷程：從隱藏、僅展現表面魅力，到逐漸向信任的人敞開真實的痛苦；從不敢承認需要任何人（包括丈夫），到學會在婚姻中建立植基於「互相分享與易受傷特質」的親密關係。',
                '真正的醫治使裘安從「活在孤立的人間地獄」轉變為「活在地如天的親密關係中」——這正是耶穌應許我們每個人都可以經歷的相連。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「易受傷」作為屬靈操練</h4>
              <p className="text-gray-700 leading-relaxed">
                現代文化常把「脆弱」（vulnerability）與軟弱、失敗混為一談，但作者在此指出的是完全不同的框架：易受傷是一種需要刻意選擇、逐步練習的能力，是通往深度連結唯一的門。這與研究羞恥與連結的學者布芮尼·布朗（Brené Brown）的洞見不謀而合——她的研究發現，能夠活出完整生命的人，共同特徵就是願意在關係中展現真實、不完美的自己。教會若能提供讓人安全展現「易受傷」的空間，其醫治力量遠超過單純的道理教導。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">同理心與「投射式付出」的區別</h4>
              <p className="text-gray-700 leading-relaxed">
                作者特別澄清同理心不是「給以求有所得」或「逃避自己問題」的策略——這呼應了上一章「投射」這個防衛機制：有些人透過「幫助別人」來間接、替代性地滿足自己未被承認的需要，看似付出，實際上是在迴避真正面對自己的傷。健康的同理心，是在認同別人的傷痛時，同時誠實地觸碰到自己內心相似的傷與孤單，而不是用照顧別人來掩蓋自己也需要被照顧的事實。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">裘安案例的教會啟示</h4>
              <p className="text-gray-700 leading-relaxed">
                裘安是「教會中有委身的領袖」，丈夫是「受人尊敬的牧師」，卻在光鮮外表下瀕臨自殺——這對教會群體是一記警鐘：服事上的忠心與外在的屬靈形象，完全可能與內在深度孤立並存。健康的教會文化需要主動創造機會，讓即使是領袖、服事者也能安全地展現自己的軟弱與需要，而不是預設「服事得越多、越屬靈的人，內心一定越沒問題」。
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
              '本章列出十一項相連的技巧（認識需要、靠近他人、易受傷、挑戰扭曲思想、冒險、容許依賴、認識防衛、安於憤怒、禱告默想、同理心、倚靠聖靈），哪一項你覺得對你目前最重要、也最困難？',
              '「易受傷」意味著敞向批評或攻擊。你在哪一段關係中，最能安全地展現自己易受傷的一面？',
              '你有沒有為了保護所愛的人而壓抑對他們的憤怒，反而讓自己更孤立？',
              '裘安起初只向人展示自己的魅力與才智，直到後來才敢述說真實的故事。你在人際關係中，通常先展現的是哪一面？要走到「述說真實故事」那一步，你覺得還缺什麼？',
              '裘安和丈夫戴維重新建立了「植基於互相分享與易受傷特質」的婚姻關係。如果你已婚，這對你的婚姻有什麼提醒？如果未婚，這對你未來的親密關係有什麼提醒？',
              '「向生命說是」意味著在愛展現時不退縮。這一週有沒有一個具體的邀請（一頓飯、一次談話、一句關心），你可以練習說「是」而不是找藉口迴避？',
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
              <h4 className="font-semibold text-green-700 mb-2">🪟 練習一次「易受傷」的敞開</h4>
              <p className="text-gray-700 mb-2">
                本週選一位你信任、也曾以恩典待你的人，主動告訴他一件你平常不會說的真實感受或掙扎（可以從小處開始）。留意敞開之後，內心的變化。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 逐項對照本章11項技巧</h4>
              <p className="text-gray-700 mb-2">
                重讀本章「相連的技巧」11個小標題，為每一項給自己打分（1-5分，5分表示做得很好），找出分數最低的兩項，寫下這週可以踏出的一小步。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 效法裘安，說出你的故事</h4>
              <p className="text-gray-700 mb-2">
                找一個安全的小組或一位輔導者，練習不只分享「表面事物」（機敏、才智、成就），而是像裘安後來所做的，述說你生命中真實而完整的故事。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，感謝祢透過裘安的故事讓我看見，孤立多年的心，仍然可以重新學會相連。求祢賜我勇氣，讓我願意冒險、願意易受傷、願意向那些祢差來愛我的人敞開心門。求聖靈幫助我認出並挑戰我心中扭曲的思想與慣用的防衛，讓我不再用忙碌、討好或逃避來替代真正的連結。願我也能像裘安一樣，有一天回顧時，能說自己打過了那美好的仗，重新活在祢愛的關係中。奉耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
