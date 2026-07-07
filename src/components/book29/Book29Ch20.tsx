import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch20() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第二十章</h1>
        <h2 className="text-xl font-semibold text-gray-700">撒旦的謊言</h2>
        <p className="text-gray-500 mt-1">耶和華神所造的，惟有蛇比田野一切的活物更狡猾。蛇對女人說：「神豈是真說不許你們吃園中所有樹上的果子嗎？」女人對蛇說：「園中樹上的果子，我們可以吃，惟有園當中那棵樹上的果子，神曾說：『你們不可吃，也不可摸，免得你們死。』」蛇對女人說：「你們不一定死；因為神知道，你們吃的日子眼睛就明亮了，你們便如神能知道善惡。」創世記三1-5</p>
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

            <p className="text-gray-700 leading-relaxed">
              上一章已經說明，引誘始祖犯罪的蛇不是一般的蛇，很可能是撒旦自己，或者是撒旦藉蛇說話。所以蛇說話，就是撒旦說話。撒旦的希伯來文是是 שָׂטָן（sadan），在舊約出現23次，其中14次是用來作魔鬼的名字，其他9次有不同的翻譯，包括敵擋（2次）、敵人（4次）、仇敵（1次）、反對（1次）、對頭（1次）。所以撒旦這個字，本來就是敵人、對抗者的意思，稱為撒旦，因為牠是神的對敵，專門來敵擋神。牠所做的事，不一定都是很壞的事，但只要能讓人偏離神，讓人不專心愛神、不緊緊跟從神，那就是牠要做的事。
            </p>
            <p className="text-gray-700 leading-relaxed">
              在引誘亞當、夏娃犯罪的事上，魔鬼撒旦主要是用謊言，所以耶穌說，魔鬼是說謊者之父，如約翰福音八44所記：「你們是出於你們的父魔鬼，你們父的私慾你們偏要行。他從起初是殺人的，不守真理，因他心裡沒有真理。他說謊是出於自己；因他本來是說謊的，也是說謊之人的父。」創世記三1-5記載，魔鬼撒旦所做的第一件事，就是用謊言引誘人犯罪。創世記四8記載魔鬼撒旦所做的第二件事，就是藉該隱的手殺死亞伯。所以魔鬼既是說謊之人的父，又是從起初殺人的。創世記三1-5魔鬼撒旦共對夏娃說了兩次話，兩次都是巧妙的謊言，各有不同特色，第一次是以偏概全（1節），第二次顛倒是非（4~5節），以下分這兩方面來談。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、以偏概全</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                撒旦對女人說：「神豈是真說不許你們吃園中『所有』樹上的果子嗎？」撒旦所說的這話是以偏概全的手法。對於夏娃而言，她很難回答，她不能回答是或不是。因為她若回答說：「是，園中的果子都不能吃。」那樣她就說錯了，因為神是說：「園中的果子大部分都可以吃，只有分別善惡樹上的果子不能吃。」然而她也不能回答說：「不是」，若這樣回答，撒旦就會跟她說：「既然神沒有說不可以吃，那你就吃吧。」所以撒旦所說的這話是要誘使人不分辨有些可吃，有些不能吃，牠用以偏概全的說法來欺騙人。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這跟我們生活中某些遭遇很像，例如媽媽不給小孩子吃糖果時，小孩子很容易哭鬧說：「媽媽不愛我，我要吃的，媽媽都不給我吃。」其實媽媽常常供應小孩很多好的食物。又好比結婚後夫妻的相處生活，丈夫忘記做一件妻子交待的事，妻子心裡難過、生氣，心裡就有個謊言說：「丈夫不愛我，不在乎我，因為我交待的事他從來都不做。」其實她丈夫只是偶而會忘記，這就是以偏概全地去否定丈夫。一般人對神也常會以偏概全，當遇到困境或挫折，可能會對神說：「神啊！你怎麼都給我這樣的困境！」其實大部分都是順境，只有少數逆境，當逆境臨到，我們就會以偏概全地說上帝都給我困境、逆境。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                夏娃面對撒旦這個以偏概全的話沒有被騙，因為她回答說：「園中樹上的果子，我們可以吃，唯有園當中那棵樹上的果子，神曾說：你們不可吃，也不可摸，免得你們死。」（創三3）雖然她這次沒有被騙，但她多說了一句「也不可摸」。人常常會將聽來的話，加料儲存，看似大致一樣，但已產生意思的偏差。有時問題不大，但有時也可能產生很大的問題。
              </p>
              <p className="text-gray-700 leading-relaxed">
                神所說的話，原來是對亞當說的，夏娃所聽的應是從亞當轉傳給她的。神要亞當作頭，亞當有責任把神的話傳給妻子、兒女。而且所傳遞的內容必須很準確。很難說這個話是亞當傳錯，還是夏娃聽錯。最保險的方法就是講的人要請聽的人將所聽到的再講一遍，以確認講的人有沒有講錯、聽的人有沒有聽錯。我們學習神的話也要符合這原則，不僅單向聽講，也要雙向談論、回應，才不會聽錯、講錯。正如申命記六4-9所強調的：「以色列啊，你要聽！耶和華我們神是獨一的主。你要盡心、盡性、盡力愛耶和華你的神。我今日所吩咐你的話都要記在心上，也要殷勤教訓你的兒女。無論你坐在家裡，行在路上，躺下，起來，都要談論。也要繫在手上為記號，戴在額上為經文；又要寫在你房屋的門框上，並你的城門上。」這是神要以色列父母執行的傳承使命，務必將神的話一代一代地傳給子孫，並且切實遵行。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、顛倒是非</h3>
              <p className="text-gray-700 leading-relaxed mb-3">第二次的謊言是顛倒是非，而且包含了三種顛倒是非。</p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-indigo-700 mb-2">一、關於吃禁果會不會死</h4>
                  <p className="text-gray-700 leading-relaxed">
                    神明明說分別善惡樹的果子吃了會死（創二17），但撒旦卻說不一定會死，簡單講就是不會死，所以這是一個很大的謊言。撒旦所說的「你不會死」的謊言，是最深入人心的謊言。不可吃禁果，是最早的第一個誡命，有十誡的影子。十誡有二個要——要守安息日、要孝敬父母，以及八個不可——不可有別的神、不可拜偶像、不可妄稱神的名、不可殺人，不可姦淫、不可偷盜、不可作假見證陷害人/不可說謊害人、不可貪婪。神所禁戒的罪行，每項都會導向死亡，但撒旦都騙人說，不會死，沒那麼嚴重、沒關係。人接受謊言，就放心地去做這些會導致死亡的事。
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-700 mb-2">二、關於吃禁果有何效能</h4>
                  <p className="text-gray-700 leading-relaxed">
                    明明吃了會受咒詛，撒旦卻說：「你們吃的日子眼睛就明亮了，你們便如神能知道善惡」（創三5）。撒旦誇大吃了以後的好處。其實人增加分別善惡的知識，卻沒有真正能行善的生命，是更加痛苦的。人吃了眼睛明亮，是一個事實，但這個明亮乃是不平衡的早熟，若缺乏愛的生命，眼睛明亮只會帶來更多的犯罪。而且「如神」是絕對不可能的，唯獨神有全備的知識，人只能擁有片面的知識。
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-700 mb-2">三、關於神是否完全良善</h4>
                  <p className="text-gray-700 leading-relaxed">
                    撒旦說，神不給人吃分別善惡果，是「因為神知道，你們吃的日子眼睛就明亮了，你們便如神能知道善惡」（創三5）。這句話很明顯是在講神並不良善，因為神不想把好處給你們。神禁止人做某些事，全部出於良善，但撒旦以謊言將之形容為神的不良善。
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4 mb-3">
                在情慾的世界裡，有許多顛倒是非的事，皆與吃禁果相似。在此以婚前性關係為例。一百年前失去貞操是很嚴重的事情，但現今的青年大部分已不管貞操，只要快樂就好，甚至認為性的體驗可以增加智慧，有益於未來的婚姻，能了解彼此適不適合在一起。同儕朋友之間會視沒有性經驗的人為異類而取笑、鄙視之，這就是撒旦放在人裡面的謊言，正如同當初對夏娃所說的謊言一樣。
              </p>

              <div className="flex flex-col items-center my-4">
                <img
                  src="/images/book29/ch20-forbidden-fruit.jpg"
                  alt="圖八：始祖吃禁果，插畫呈現亞當夏娃在蛇的引誘下吃禁果"
                  className="max-w-full h-auto rounded-lg shadow-md border border-gray-200"
                />
                <p className="text-sm text-gray-500 mt-2 italic">圖八：始祖吃禁果</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-3">
                婚前性關係，神說會死，撒旦說不會死，其實這事真的有很大的壞處，如同死亡。不在婚姻裡面多對象的性關係，會傳染性病、愛滋病。整個國家愛滋病患者不斷增多，跟性解放有絕對的關係。心靈方面的傷害更大，婚前性關係很容易造成先親密後分手，這是會撕裂靈魂的，尤其女性會有比較大的心靈傷害，因為女性主觀上更需要一生一世安穩的親密關係。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">婚前性關係的不良結果有許多，可歸納為以下三方面：</p>
              <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100 mb-3 space-y-2 text-sm text-gray-700">
                <p><span className="font-semibold text-indigo-800">1. 因懷孕而墮胎，帶來下列結果：</span>（1）是殺嬰行為，且可能導致自己自殺，（2）自己有生命危險。根據統計，每年全球進行約4千4百萬例流產手術，一半是不安全墮胎，導致每年全球七萬女性因墮胎死亡，和五百萬墮胎失敗引起的送醫事故。（3）會傷害子宮，產生種種後遺症。</p>
                <p><span className="font-semibold text-indigo-800">2. 與多對象有性關係，帶來下列結果：</span>（1）結婚那天，帶著很多人來結婚，因為跟那些人是有魂結的，（2）結婚前心已經分給了很多人，不易全心愛自己的配偶，（3）會傳染疾病。保險套只有部分的保護效率，並不全然保險。</p>
                <p><span className="font-semibold text-indigo-800">3. 只與單對象有關係，也會有不好的結果：</span>（1）會變心：有了性關係，比較容易變心。（2）發生意外很難處理：當一方發生意外，再也無法再一起，若已有性關係，將使未來尋求婚姻更困難。（3）誓約效力減低：回答我願意，是由於已經有性關係。（4）有羞恥輕視：自己感覺羞恥，且會輕視對方。（5）失去信任：有婚前的經驗，導致失去安全感，隨時擔心對方外遇。有婚前性關係者，離婚率多兩倍。</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                其他像酒後駕車、飆車、無照騎車、開車等，神說會死，撒旦說不會死，這些都很可能會帶來嚴重的不良後果，包括自己死亡、重傷、成為植物人，以及害別人死亡或受傷，但撒旦會說沒關係，你喜歡就好。還有貪愛錢財，工作過勞，表面上是為了提升生活，實際上是由於情慾。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                我們不僅不要信從撒旦的謊言，也不要自己說謊，因自己說謊也會導致滅亡。說謊者的結局寫在啟示錄廿一8：「唯有膽怯的、不信的、可憎的、殺人的、淫亂的、行邪術的、拜偶像的，和一切說謊話的，他們的分就在燒著硫磺的火湖裡；這是第二次的死。」七個釋放禱告之一是「拒絕謊言，選擇真理」。耶穌基督是真理，神的道是真理。以弗所書六章全副軍裝第一項是「以真理當作腰帶束腰，才能站立得穩」。我們不受謊言欺騙，也不製造謊言；接受真理栽培，傳講實踐真理，而能擁有豐盛的生命，過得勝的生活。
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
                '撒旦（שָׂטָן，sadan）本義是敵人、對抗者，牠所做的事不一定都很壞，但只要能讓人偏離神，那就是牠要做的事；魔鬼是說謊者之父（約八44），也是從起初殺人的。',
                '第一次謊言是「以偏概全」（園中所有樹上的果子都不許吃？），誘使人不分辨可吃與不可吃；夏娃雖沒被騙，但多加了「也不可摸」，顯示聽傳話容易產生偏差，需雙向確認。',
                '第二次謊言是「顛倒是非」，包含三方面：吃禁果不會死（其實會死）、吃禁果使人如神知善惡（誇大好處）、神不讓人吃是因為神不良善（否定神的良善）。',
                '以婚前性關係為例說明顛倒是非的現代應用，其不良結果可歸納三方面：懷孕墮胎、多對象關係、單一對象關係也有變心與失去信任等風險，有婚前性關係者離婚率多兩倍。',
                '信徒不僅不信從撒旦的謊言，也不自己說謊；以弗所書六章全副軍裝第一項是「以真理當作腰帶束腰」，接受真理栽培、傳講實踐真理，才能擁有豐盛得勝的生活。',
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
              '撒旦的謊言會以偏概全，請舉出生活中有甚麼例子是屬於這類的謊言？',
              '撒旦對夏娃講的謊言在哪三方面顛倒是非？生活中有甚麼相似的例子？',
              '始祖吃禁果導致快樂一時、痛苦一生。「婚前性關係」也會有暫時的快樂，但會有哪些不良結果？今日教會對兒少青年的性教育當如何因應？',
            ].map((q, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-amber-600 font-bold flex-shrink-0 text-lg">{i + 1}.</span>
                <div>
                  <p className="text-gray-700 leading-relaxed">{q}</p>
                  {i === 0 && (
                    <p
                      className="text-gray-600 leading-relaxed mt-2"
                      style={{ fontSize: 'calc(1em - 6px)', whiteSpace: 'pre-line' }}
                    >
                      {`以偏概全就是把一件事、一次經驗、某個人的反應，放大成「全部都是這樣」。

例如：

一次禱告沒蒙應允
→「神根本不聽我的禱告。」
某位弟兄姊妹傷害我
→「教會的人都很假。」
牧者一句話讓我受傷
→「所有牧者都只會控制人。」
我又跌倒犯罪一次
→「我永遠不可能改變，神一定也厭煩我了。」
服事沒有被肯定
→「我做什麼都沒有價值，沒有人在乎。」
讀經時沒有感動
→「我跟神的關係一定很差。」
家庭祭壇一次失敗
→「我們家根本不可能建立屬靈生活。」
看到世界很多黑暗
→「神根本沒有掌權。」

這些話的可怕之處在於：它們不一定完全沒有事實，卻把一部分事實放大成全部真相。

比較合乎真理的分辨是：

我這次禱告還沒看見結果，不代表神不聽。
我被某個人傷害，不代表所有人都一樣。
我今天軟弱，不代表神放棄我。
我一次失敗，不代表永遠失敗。

撒但常常不是直接給我們一個明顯的假話，而是拿一點點真實的痛苦，加上一個錯誤的總結，讓我們遠離神。`}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
