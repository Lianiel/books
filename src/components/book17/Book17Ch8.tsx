import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Search, HelpCircle, Check } from 'lucide-react';

export default function Book17Ch8() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    exploration: true,
    questions: true,
    practice: true,
  });

  const toggleSection = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">第八章</h1>
        <h2 className="text-xl font-semibold text-gray-700">面對信仰與處境的張力</h2>
        <p className="text-sm text-gray-500 mt-1">哥林多前書 七1-40</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <p className="text-gray-600 text-sm leading-relaxed border-l-4 border-purple-200 pl-3">從哥林多前書第七章開始，保羅不再只是談一些他聽聞的消息，而是回答哥林多信徒所提出的一些問題。每當基督徒真正想嘗試在今世過一個合神心意的生活時，就會發現這並不是一件容易的事。雖然這些問題的出現與我們現今的情況不盡相同，但保羅處理的方法和答案，仍然可以成為我們生活的指引。</p>

            <div>
              <h4 className="font-semibold text-purple-700 mb-2">一、性與獨身（七1-7）</h4>
              <p className="text-gray-700 leading-relaxed">在這章經文中，可以發現哥林多信徒在「婚姻」這方面的問題可真不少。七章1節「男不近女倒好」與六章12節的語氣相似，這是片面的真理，而2至5節的話則是加以補充修正。保羅在第7節突然提到他自己：「我願意眾人像我一樣」，但在下半節又加上另一種考量：「只是各人領受神的恩賜，一個是這樣，一個是那樣。」因此，哥林多教會中有些信徒，可能因誤解了保羅的資訊，而採行禁欲主義，不結婚，或結了婚後不理會對方的性需要。</p>
              <p className="text-gray-700 leading-relaxed mt-2">在結婚或獨身這個問題上，保羅面對的難題是：他自己的婚姻情況，是否應該成為其他信徒的榜樣？保羅的答案相當有意思：一方面，他不能說獨身不好；另一方面，他又要考慮到另一面的真理——單身是一種恩賜，沒有這恩賜，就不能像保羅一樣。為什麼獨身是恩賜呢？保羅的神學根據或許來自耶穌在馬太福音二十二章的話：「當復活的時候，人也不娶也不嫁，乃像天上的使者一樣。」對保羅來說，「恩賜」是屬天情況的彰顯，是神預先讓我們親嘗天國情況。因此，守獨身，可預先體驗耶穌再來復活後的情境。</p>
              <p className="text-gray-700 leading-relaxed mt-2">既然守獨身是恩賜，那麼無此恩賜的人又該如何？保羅在2至7節的勸告是：「男子當各有自己的妻子；女子也當各有自己的丈夫。」理想是一回事，恩賜與事實是另一回事，在實際生活上二者必須同時考慮。不但如此，保羅在3至4節進一步說，婚後夫妻對彼此都有責任，必須「用合宜之分」相待——這是保羅用文雅的方法，說明婚後夫妻應當有性行為，原因是婚後男女的身體都不屬自己。第5節直譯是：「總不要互相虧負，除了出於同意、暫時的，以便專心禱告，還要同在一處。」保羅用相當強烈的用詞，說停止性關係是「虧負對方」。值得強調的是，保羅完全沒有忽視夫妻間性行為的地位。聖經並沒有主張禁欲主義，獨身與結婚不是對立的。</p>
            </div>

            <div>
              <h4 className="font-semibold text-purple-700 mb-2">二、未婚者與寡婦（七8-9）</h4>
              <p className="text-gray-700 leading-relaxed">在8至9節，再次看到保羅面對的問題，是與他自己的婚姻狀況有關係，所以他再次說：「常像我就好」。但同時他面對的是另一種情況：倘若那些已經結婚的不能像保羅，那些還沒有結婚的，是不是應該效法他？在這一點，保羅的話與前段的原則一樣——若能守獨身，像保羅一樣最好；但做不到的，就當婚嫁。</p>
            </div>

            <div>
              <h4 className="font-semibold text-purple-700 mb-2">三、離婚（七10-24）</h4>
              <p className="text-gray-700 leading-relaxed">10至24節經文中的「離開」一詞，指的是離婚的問題。第10節非常重要：「我吩咐他們；其實不是我吩咐，乃是主吩咐說：妻子不可離開丈夫。」不可離婚是主的吩咐，是絕對的真理！耶穌回答法利賽人休妻的問題，說：「神配合的，人不可分開。」保羅謹守主耶穌的吩咐。在哥林多人的現實情況中，若已離家出走，已經離了婚，保羅的答案是：「不可再嫁，或是仍同丈夫和好。」婚姻的關係並不因人背約而解除。</p>
              <p className="text-gray-700 leading-relaxed mt-2">12至13節討論的是另一個實際問題：若是配偶不信主，又應該怎樣處理呢？此處假定的情況是：不是信主後才與不信主的人結婚，而是有的夫妻婚後其中一人才信了主。保羅說，他對這種情況的勸告是他自己的意思，不是主耶穌說的（因為耶穌在世時，並沒有討論到這種情況）。但保羅並沒有因此忽視主耶穌「不可離婚」的原則，他守住主耶穌的命令，應用在這新的情境：不可離婚。原因是「不信的丈夫就因著妻子成了聖潔」——夫妻中一方信主，就會影響另一方。第16節解釋第14節，說明「聖潔」並不等於得救，而是說一位信主者與不信的配偶在一起，對方就比較有得救的可能性。若是離開了，對方得救的可能性較少。保羅給出的三個原則是：<strong>第一</strong>，不離婚；<strong>第二</strong>，和睦；<strong>第三</strong>，積極帶領不信的配偶歸主。若不信的一方堅持要離婚，就由他離去，因為「神召我們原是要我們和睦」。</p>
              <p className="text-gray-700 leading-relaxed mt-2">17至24節是另一個基本原則：呼召時的身分是什麼，就照這身分而行。這裡最重要的一句話是：「各人蒙召的時候是什麼身分，仍要守住這身分。」這適用於受割禮與未受割禮者、奴僕與自由人。這通則應用在婚姻關係上的原則是：不離婚，除非不信主的對方堅持要離開。</p>
            </div>

            <div>
              <h4 className="font-semibold text-purple-700 mb-2">四、守童身（七25-38）</h4>
              <p className="text-gray-700 leading-relaxed">25至38節討論的主題，原文 parthenos（英文譯 "virgin"）。陳濟民認為這裡主要的問題是：有些已訂婚的男人，應否成婚呢？針對此問題，保羅從兩方面答覆。</p>
              <p className="text-gray-700 leading-relaxed mt-2">首先，在26至35節，保羅討論到婚姻的現實考量。他提及三件事：<strong>第一</strong>，「因現今的艱難，據我看來，人不如守素安常才好」（26節）；<strong>第二</strong>，「你若娶妻，並不是犯罪……然而這等人肉身必受苦難」（28節）；<strong>第三</strong>，「時候減少了。從此以後，那有妻子的，要像沒有妻子」（29節）——按現實看來，我們已處於末世，擁有一個家庭是不簡單的事，特別在社會艱困時更屬不易。保羅在33至34節又提到婚姻可能帶來的另一個危機：婚姻可能使人在服事神的事上分心。「娶了妻的，是為世上的事掛慮，想怎樣叫妻子喜悅。婦人和處女也有分別。沒有出嫁的，是為主的事掛慮，要身體、靈魂都聖潔。」</p>
              <p className="text-gray-700 leading-relaxed mt-2">值得注意的是，保羅也指出獨身的危機：在於淫亂（七2）。所以他實際上是說：有獨身恩賜的人，較易達到基督徒的理想，但並非所有獨身的人都一定能達到。同樣地，結婚不是犯罪，已婚的人也不是不能專心事奉主。保羅真正關心的是：作為基督徒——無論結婚與否，最要緊的是凡事專心事奉主、無所掛慮，保持身體與靈魂之聖潔。</p>
            </div>

            <div>
              <h4 className="font-semibold text-purple-700 mb-2">五、再婚的問題（七39-40）</h4>
              <p className="text-gray-700 leading-relaxed">最後的問題是：守寡的人是否可再婚呢？保羅的答案是可以，條件則是「要嫁在主裡面的人」（39節）；但若能不再結婚，守獨身則最好，是「更有福氣」。值得注意的是，保羅在第40節下半說：「我也想自己是被神的靈感動了。」他說這話，意謂著不要把他在此處所說的都當作「參考意見」，乃是要我們認真地思考他的看法。</p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
              <h4 className="font-semibold text-purple-700 mb-2">結語</h4>
              <p className="text-gray-700 leading-relaxed text-sm">在哥林多前書第七章，外邦的哥林多信徒信主以後在婚姻上發生了好些狀況，問題也相當複雜，有各式各樣的情況。保羅針對著這些問題一一作答，好像在寫法律條例一樣。當保羅在解答問題的時候，他堅持著主耶穌的教導，且明顯成為他最基本的指導原則。對那些已婚的人，保羅一再強調：已婚的人並不是犯罪，而且必須盡可能維護這段婚姻。對那些未婚的人，保羅指出：結婚與否不構成犯不犯罪的問題；基本的關鍵在於什麼是好？什麼是較好？在這種選擇中，有兩個因素必須考慮：恩賜與目前的處境。理想上，獨身是較好，因為較能專心事奉主；但由於多數人沒有獨身的恩賜，若強守獨身，反而容易引致犯罪，因此結婚才會成為更合理的選擇。</p>
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
              <h4 className="font-semibold text-indigo-700 mb-2">信仰與處境的張力：固守而靈活，理想而現實</h4>
              <p className="text-gray-700 leading-relaxed">哥林多教會之所以會產生婚姻問題，有兩個重要的原因。<strong>第一</strong>，是信徒們對真理的了解不足。有些哥林多信徒將「男不近女倒好」應用在婚姻生活上，認為基督徒應當停止夫妻間的性生活。他們也似乎覺得保羅的獨身就是這樣的典範，於是自然而然地模仿。<strong>第二</strong>，是不同時代都有其獨特的環境，這些環境因素也形成一些特殊的問題。耶穌基督在世時，事奉的對象主要是猶太人，他們都說自己是信奉神的人，應當依照神的話行事；因此當耶穌跟猶太聽眾談婚姻問題時，只要指出聖經的教導，猶太人便無話可說。可是在哥林多地區，有些信徒不是猶太人，且是第一代的信徒，他們的配偶有可能還沒有信主，因此若不信的一方提出離異，基督徒更不能只說一句「主耶穌說不可離婚」就解決問題。在固守與靈活、理想與現實之間，基督徒怎麼拿捏得準確？保羅處理的方法，就是在新環境中堅持主耶穌的原則，同時根據處境靈活應用——這正是今日教會面對各種新問題時最需要學習的榜樣。</p>
            </div>

            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「不信的配偶因著信主的一方成了聖潔」：聖潔的傳遞與福音的盼望</h4>
              <p className="text-gray-700 leading-relaxed">七章14節「因為不信的丈夫就因著妻子成了聖潔，並且不信的妻子就因著丈夫成了聖潔」，是整段最容易被誤解的一節。保羅這話的意思，可以借用出埃及記二十九章37節來理解：「凡挨著壇的都成為聖。」一個人屬神之後，他就是聖潔的，凡靠近他、屬他的都變成聖潔，也都屬於神了。因此，這裡所說的「聖潔」不是指得救，而是說信主的一方影響不信的一方，使整個家庭處於神的恩典影響之下。不信主的應受信徒的影響，而不是信徒受非信徒的影響。第16節也印證了這個解釋：「你……怎麼知道不能救你的丈夫呢？」一位信主者與不信的配偶在一起，對方就比較有得救的可能性；若是離開了，對方得救的可能性較少。這也是為什麼保羅不鼓勵信主者主動離開不信的配偶——離開，是斷絕了那個家庭接觸福音最自然的橋樑。今日許多「拯救另一半」的禱告和見證，正是這個神學的現代印證。</p>
            </div>

            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">獨身與結婚的選擇：恩賜、處境與專心事奉</h4>
              <p className="text-gray-700 leading-relaxed">基督教與天主教對傳道者或神職人員的要求有明顯差異：天主教往往強調獨身的好處；而基督教則常強調獨身有它的缺點存在。然而，保羅在這章經文中對雙方的立場，可以說都支持，但也都不完全支持。在他看來，獨身絕對有好處，但必須有恩賜；同樣他也明言結婚的人有危機，就是不專心事奉（33-34節），但他也強調結婚不是犯罪。保羅在這個議題上的立場，事實上並非從犯罪與否的角度處理，而是問一個更基本的問題：怎樣才能專心事奉主、無所掛慮、而身體靈魂聖潔？這讓教會對婚姻和獨身的討論，從「哪個更屬靈」的競爭，回到「如何在各自的處境中更全心服事神」的核心問題。這對今日華人教會中常見的「催婚」文化，以及對單身弟兄姊妹的輕視或憐憫，都是深刻的提醒。</p>
            </div>

            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">離婚與再婚：從信仰角度看現代難題</h4>
              <p className="text-gray-700 leading-relaxed">保羅處理離婚的問題時，其觀點與要求是一致的，他的基本原則是：以不離婚為原則！最主要的原因是：這是主耶穌的吩咐。特別值得注意的是，當保羅容許不信的一方提出離婚時，他似乎提供了一個可以離婚的理由，但他卻是同時勸告信主的一方不要主動提出離婚，所以他還是守住了主耶穌的吩咐。若有人說，這個婚姻是信主前所犯的錯誤，現在信了主就應當爭取自由——保羅在17至24節的回應是：呼召時的身分是什麼，就照樣按這身分而行。在現今的世代，導致離婚的最重要理由，恐怕是個性和價值觀的差異，這些差異若是沒有妥善地處理，往往令人覺得家庭猶如地獄，希望儘早脫離苦海。但聖經的原則明顯是要求基督徒努力實行拯救的工作，不輕易放棄。處理夫妻關係時，婚前輔導非常重要，婚後的教會團契生活也必須重視。我們現今最基本的問題是：平常並沒有花時間培養夫妻的關係，發生問題時卻以離婚為解決痛苦的方法。但這種痛苦最終是消除痛苦！</p>
            </div>

            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">華人教會的特殊處境：男少女多與信仰婚姻的張力</h4>
              <p className="text-gray-700 leading-relaxed">在華人教會中，有著男少女多的現象，而不少教會又教導信徒不能與非信徒結婚，因此出現了一個相當獨特的現象，就是有些姊妹們是不得不獨身。在這件事上，陳濟民認為華人教會應該在聖靈的引領下，更多、更深地思考聖經的原則。以經文的原意而言，哥林多後書六章14節的原意，並不是在談論婚姻的事；但現代婚姻中夫妻相處的困難、特別是信徒與非信徒結婚後價值觀差異所產生的張力，確實需要認真考慮信仰的因素。面對華人社會的處境，教會可以做兩件事：積極地說，應該鼓勵姊妹們祈求神賜下獨身的恩賜，並且幫助她們面對家庭所施加的壓力，更要與她們一同開闢事奉的機會。另一方面，也可以在某種情形下，容許她們與非信徒結婚，但在結婚前就約定好，婚後不能禁止配偶敬拜神，而且子女必定是屬主的。這不是降低標準，而是在聖靈的引領下，以愛和智慧幫助具體的人面對具體的處境。</p>
            </div>

            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">在聖靈引領下思考處境：保羅的榜樣</h4>
              <p className="text-gray-700 leading-relaxed">仔細讀25至40節這段經文的時候，會發現從第25節開始，保羅就不是直截了當、很有次序地寫出他的看法，反而我們的印象是：一邊寫一邊思索。但是，他卻也是在聖靈的引領下思考問題，因此他在第40節下半說：「我也想自己是被神的靈感動了。」他說這話，意謂著不要把他在此處所說的都當作「參考意見」，乃是要我們認真地思考他的看法。保羅多次說「這是我的意見，不是主的命令」（七6、10、12、25），這種細緻的區分，展示了一種屬靈的謙遜：即使是蒙神特別揀選的使徒，在某些沒有直接啟示的問題上，也只能以蒙聖靈的人的「判斷」來作回應，而不是以「主如此說」的命令口吻說話。這對今日教會中以「神的話」包裝個人判斷的現象，是深刻的提醒。怎樣才能從信仰與現實處境的張力中走出來呢？正是在聖靈的引領下，周全地考量聖經原則和處境的各種因素，同時避免錯誤的推論和偏激的立場——這是保羅處理哥林多前書第七章最值得我們學習的功課。</p>
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
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">1.</span>
              <p className="text-gray-700">你的教會文化對婚姻和獨身的態度是什麼？是否存在「已婚才算完整」或「獨身才更屬靈」的隱性壓力？這種文化氛圍對你個人或你身邊單身的弟兄姊妹造成了什麼影響？你願意在自己的言行中做什麼改變？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">保羅說婚姻中的性關係是夫妻雙方「應盡的義務」，且是互相對等的。這個觀點如何挑戰或確認你對婚姻中身體關係的理解？你是否曾因為「太忙」、「太累」或以「屬靈」理由，單方面在婚姻中的某個層面上「退出」或忽視配偶的需要？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">若你或你身邊有人處於混合婚姻（一方信主、一方未信），保羅所說的三個原則（不離婚、和睦、帶領配偶歸主）在現實中如何執行？你覺得哪一個原則最難做到，又最需要神的恩典？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">「各人蒙召的時候是什麼身分，仍要守住這身分。」誠實面對自己：你目前的處境（工作、婚姻、生活環境、身體狀況）中，有哪些是你強烈想要逃離的？你的逃離衝動，是出於渴望改善來更好地服事神，還是出於對不舒適的逃避？這兩者有什麼本質上的差異？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">保羅說婚姻的危機之一是「為世上的事掛慮，想怎樣叫妻子（丈夫）喜悅」，使人在服事神的事上分心。若你已婚，你是否在婚姻中體驗過「一心為主」和「掛慮家庭的事」之間的張力？你如何在婚姻的責任與對神的專心之間取得平衡？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">結婚、獨身、離婚——這些議題都牽涉到：性行為是罪嗎？若是已經犯了錯怎樣辦？如何與信仰不同的配偶相處？基督徒不是有自由嗎？怎樣事奉主最好？在這幾個問題中，你目前最需要思考哪一個？你認為在你具體的生命處境中，「怎樣才能更專心事奉主」的答案是什麼？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">7.</span>
              <p className="text-gray-700">保羅多次說「這是我的意見，不是主的命令」。你在傳遞信仰建議時，是否也有這種謹慎？你是否曾把自己的詮釋或文化觀念，以「神的話」或「聖靈感動」的方式傳達給別人，而沒有留給對方思考和選擇的空間？這讓你有什麼反省？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">8.</span>
              <p className="text-gray-700">無論結婚與否，保羅的最終呼召是：「凡事專心事奉主、無所掛慮、身體靈魂聖潔。」以此標準衡量你今日的生命狀態——你在哪個層面最接近這個呼召？又在哪個層面離它最遠？你願意在這個最遠的地方，做出一個具體的改變嗎？</p>
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
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 婚姻中的「互惠盤點」（已婚者適用）</h4>
              <p className="text-gray-700 mb-2">保羅說婚姻是雙向的義務關係，夫妻雙方的身體都「不屬自己」。這週誠實地做一個自我盤點：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>我在婚姻中有沒有長期忽視配偶的某些需要——情感連結、陪伴時間、身體關係、被傾聽的需要？</li>
                <li>我是否曾以「忙碌」、「屬靈事務」或「身體疲憊」為由，單方面在某個層面「退出」婚姻而沒有察覺？</li>
                <li>選一個你發現自己有所欠缺的地方，本週用一個具體行動表達對配偶的愛和關注</li>
                <li>若夫妻間有長期懸而未決的張力，考慮是否需要尋求婚姻輔導，不要等到危機爆發才行動</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💑 為混合婚姻家庭的代禱（適用於自身或代禱他人）</h4>
              <p className="text-gray-700 mb-2">若你自己或你身邊有弟兄姊妹處於混合婚姻中，根據保羅的三個原則（不離婚、和睦、帶領歸主），做以下的禱告和行動：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>每天為不信主的配偶（或你代禱的那位家人）禱告：求神讓信主的一方成為那個家庭中恩典的管道</li>
                <li>思考：在你的婚姻或家庭中，有哪些具體的行動，可以讓不信主的一方感受到信仰所帶來的真實改變，而不只是限制？</li>
                <li>與教會的牧者或輔導同工分享你所面對的張力，尋求支持和智慧</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 「在被召之處安然居住」的宣告與行動</h4>
              <p className="text-gray-700 mb-2">找一個你目前最想逃離、最不滿意的處境（工作環境、婚姻狀況、生活環境、身體限制），做以下的練習：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>把這個處境帶到神面前，誠實說出你的不滿和逃離的渴望，不需要假裝已經接受</li>
                <li>然後問神：「祢呼召我在這裡，是要讓我在這裡做什麼？」把答案寫下來</li>
                <li>這週在這個處境中做一件「在被召之處榮耀神」的具體行動</li>
                <li>若確實有改善處境的機會，也可以禱告問神：「這是祢給我的自由嗎？」——出於渴望更好地服事神，而非出於逃避</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 對身邊單身弟兄姊妹的關顧行動</h4>
              <p className="text-gray-700 mb-2">保羅肯定獨身是恩賜，是一種值得尊重的屬靈選擇。這週主動去做：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>主動關心你身邊單身的弟兄姊妹，問的重點不是「有沒有對象」，而是「最近在哪方面服事神？有什麼挑戰？」</li>
                <li>反省自己是否曾在言談中，無意識地傳遞了「你應該要結婚」或「你好可惜沒有伴侶」的信息，並且道歉或調整</li>
                <li>若你自己是單身者，這週用一段時間感謝神在你此刻的身份中給你的自由和事奉的可能性，而不只是盼望改變現狀</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 辨別「神的命令」與「人的意見」的練習</h4>
              <p className="text-gray-700 mb-2">保羅謹慎區分啟示與個人判斷，這對我們如何傳遞信仰是重要的提醒。這週做以下的反省：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>回想你最近傳達給別人的一個信仰建議，誠實評估：這是聖經的明確教導，還是我的個人詮釋或文化偏好？</li>
                <li>練習在表達個人見解時，加上「我個人認為」或「我的理解是」，而不是「神說」或「這是聖靈感動的」</li>
                <li>若你是小組長或事奉同工，思考：在你的帶領中，有沒有你「以神的名義」說出的話，其實是你的偏好或成長背景所塑造的觀念？</li>
              </ul>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-sm text-green-800 font-medium mb-2">本週默想與禱告</p>
              <p className="text-gray-700 text-lg leading-relaxed italic">
                「主啊，謝謝祢在我具體的處境中呼召了我——不是等我的處境完美才呼召，而是就在這裡、就在現在。讓我結合神的真理、理想與基督徒處世的實際情況，像保羅一樣：固守主耶穌的原則，又靈活地應用在具體的處境中。無論我是已婚或未婚、在艱難的婚姻中或在渴望婚姻的等待中，讓我的核心問題不是「怎樣改變我的處境」，而是「怎樣在我的處境中凡事專心事奉主、無所掛慮、身體靈魂聖潔」。讓我傳遞信仰時有保羅的謙遜：知道什麼是祢的命令，什麼是我的判斷。奉主耶穌基督的名禱告，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
