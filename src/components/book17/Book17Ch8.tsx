import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Users, Search, HelpCircle, Check } from 'lucide-react';

export default function Book17Ch8() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    application: true,
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
            <span className="font-semibold text-gray-800">經文要義</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-5">
            <p className="text-gray-600 text-sm leading-relaxed border-l-4 border-purple-200 pl-3">從哥林多前書第七章開始，保羅不再只是談一些他聽聞的消息，而是回答哥林多信徒所提出的問題。每當基督徒真正想嘗試在今世過一個合神心意的生活時，就會發現這並不是一件容易的事。雖然這些問題的出現與我們現今的情況不盡相同，但保羅處理的方法和答案，仍然可以成為我們生活的指引。</p>

            <div>
              <h4 className="font-semibold text-purple-700 mb-3">一、性與獨身（七1-7）</h4>
              <p className="text-gray-700 leading-relaxed mb-2">七章1節「男不近女倒好」與六章12節的語氣相似，是片面的真理，而2至5節則是加以補充修正。保羅在第7節突然提到他自己：「我願意眾人像我一樣」，但在下半節又加上：「只是各人領受神的恩賜，一個是這樣，一個是那樣。」因此保羅在此處所討論的問題，很可能又是哥林多人的誤解——有些信徒以保羅為榜樣，採行禁欲主義不結婚，或結了婚後不理會對方的性需要。</p>
              <p className="text-gray-700 leading-relaxed mb-2">在結婚或獨身這個問題上，保羅面對的難題是：他自己的婚姻情況，是否應該成為其他信徒的榜樣？保羅的答案相當有意思——一方面，他不能說獨身不好；另一方面，他又要考慮到另一面的真理：單身是一種恩賜，沒有這恩賜，就不能像保羅一樣。為什麼守獨身是恩賜？保羅的神學根據或許來自耶穌在馬太福音二十二章的話：「當復活的時候，人也不娶也不嫁，乃像天上的使者一樣。」對保羅來說，「恩賜」是屬天情況的彰顯，是神預先讓我們親嘗天國情況。因此，守獨身可預先體驗耶穌再來復活後的情境。</p>
              <p className="text-gray-700 leading-relaxed mb-2">既然守獨身是恩賜，那麼無此恩賜的人又該如何？保羅在2至7節的勸告是：「男子當各有自己的妻子；女子也當各有自己的丈夫。」理想是一回事，恩賜與事實是另一回事，在實際生活上二者必須同時考慮。保羅在3至4節進一步說，婚後夫妻對彼此都有責任，必須「用合宜之分」相待——這是保羅用文雅的方法，說明婚後夫妻應當有性行為，原因是婚後男女的身體都不屬自己。</p>
              <p className="text-gray-700 leading-relaxed">第5節直譯是：「總不要互相虧負，除了出於同意、暫時的，以便專心禱告，還要同在一處。」保羅用相當強烈的用詞，說停止性關係是「虧負對方」。保羅只容許暫時性的禁欲，但目的是為要專心禱告，且得經由對方同意。聖經並沒有主張禁欲主義；獨身與結婚不是對立的。</p>
            </div>

            <div>
              <h4 className="font-semibold text-purple-700 mb-3">二、未婚者與寡婦（七8-9）</h4>
              <p className="text-gray-700 leading-relaxed">在8至9節，再次看到保羅面對的問題，是與他自己的婚姻狀況有關係，所以他再次說：「常像我就好」。但同時他面對的是另一種情況：倘若那些已經結婚的不能像保羅，那些還沒有結婚的，是不是應該效法他？在這一點，保羅的話與前段的原則一樣——若能守獨身，像保羅一樣最好；但做不到的，就當婚嫁。</p>
            </div>

            <div>
              <h4 className="font-semibold text-purple-700 mb-3">三、離婚（七10-24）</h4>
              <p className="text-gray-700 leading-relaxed mb-2">10至24節中，「離開」一詞指的是離婚的問題。第10節非常重要：「我吩咐他們；其實不是我吩咐，乃是主吩咐說：妻子不可離開丈夫。」不可離婚是主的吩咐，是絕對的真理！耶穌說：「神配合的，人不可分開。」（可十9）這是耶穌修正了當代猶太人對舊約摩西律法的解釋，根據的是神創造人時的原意。</p>
              <p className="text-gray-700 leading-relaxed mb-2">第11節討論的是現實狀況——若已離婚怎麼辦？保羅的答案是：「不可再嫁，或是仍同丈夫和好。」他仍然堅持主耶穌不可離婚的原則。婚姻的關係並不因人背約而解除。既然離婚的理由不正當，主耶穌的原則就仍然適用。</p>
              <p className="text-gray-700 leading-relaxed mb-2">12至13節討論另一個實際問題：若是配偶不信主，又應該如何？需注意這問題背後假定的情況：不是信主後才與不信主的人結婚，而是夫妻雙方本來都不是基督徒，婚後其中一人信了主。保羅說，他針對這種情況的勸告是他自己的意思，不是主耶穌說的，因為主耶穌在世時並沒有討論到這種情況。但保羅沒有因此忽視「不可離婚」的原則。</p>
              <p className="text-gray-700 leading-relaxed mb-2">14節說的「聖潔」不是指得救，乃是指：一個人屬神之後，凡靠近他、屬他的都變成聖潔，也都屬於神了。信主的一方影響不信的一方，而不是信徒受非信徒的影響。</p>
              <p className="text-gray-700 leading-relaxed mb-2">第15節談到若不信主的一方堅持要離婚，保羅的答案是「就由他離去吧」，因為「神召我們原是要我們和睦」。所以，保羅在婚姻上的第一原則是「不離婚」，第二原則是「和睦」，第三原則是：積極帶領不信的配偶歸主。</p>
              <p className="text-gray-700 leading-relaxed">17至24節是另一個基本原則：呼召時的身分是什麼，就照這身分而行。「各人蒙召的時候是什麼身分，仍要守住這身分。」（20節）這是人從不信到相信之後的生活通則。應用在婚姻關係上：不離婚，除非不信主的對方堅持要離開。</p>
            </div>

            <div>
              <h4 className="font-semibold text-purple-700 mb-3">四、守童身（七25-38）</h4>
              <p className="text-gray-700 leading-relaxed mb-2">25至38節討論的原文為「parqenos」（童身），此處主要的問題是：有些男人已訂婚，那麼應否成婚呢？針對此問題，保羅從兩方面答覆。</p>
              <p className="text-gray-700 leading-relaxed mb-2">首先在26至35節，他討論婚姻的危機，從事實著手：第一，「因現今的艱難，據我看來，人不如守素安常才好」（26節）；第二，結婚後「肉身必受苦難」（28節）；第三，「時候減少了……從此以後，那有妻子的，要像沒有妻子」（29節）——即按現實看來，我們已處於末世。擁有一個家庭是不簡單的事，特別在社會艱困時更屬不易。</p>
              <p className="text-gray-700 leading-relaxed mb-2">在33至34節，保羅又提到婚姻可能使人在服事神的事上分心：「娶了妻的，是為世上的事掛慮，想怎樣叫妻子喜悅。」相對地，保羅也看到獨身的危機：在於淫亂（七2）！所以保羅實際上是說：有獨身恩賜的人，較易達到基督徒的理想，但並非所有獨身的人都一定能達到。</p>
              <p className="text-gray-700 leading-relaxed">從36至38節可見保羅在這方面的見解：（1）注意性欲的問題；（2）結婚不是犯罪；（3）不結婚更好。保羅真正關心的是：無論結婚與否，作為基督徒最要緊的是凡事專心事奉主、無所掛慮，保持身體與靈魂之聖潔。</p>
            </div>

            <div>
              <h4 className="font-semibold text-purple-700 mb-3">五、再婚的問題（七39-40）</h4>
              <p className="text-gray-700 leading-relaxed">守寡的人是否可再婚呢？保羅的答案是可以，條件則是「要嫁這在主裡面的人」（39節）；但若能不再結婚、像守獨身的人，則最好，是「更有福氣」。仔細讀25至40節的時候，我們發現從第25節開始，保羅好像是一邊寫一邊思索。但他是在聖靈的引領下思考問題，因此他在第40節下半說：「我也想自己是被神的靈感動了。」這不是說他說的話只是「參考意見」而已，而是要我們認真地思考他的看法。</p>
            </div>

            <div className="border-t border-purple-100 pt-4">
              <h4 className="font-semibold text-purple-700 mb-3">結語</h4>
              <p className="text-gray-700 leading-relaxed mb-2">在哥林多前書第七章，我們看到外邦的哥林多信徒，信主以後在婚姻上發生了好些狀況，而且問題也相當複雜，有各式各樣的情況。保羅針對這些問題一一作答，好像在寫法律條例一樣。當保羅在解答問題的時候，他堅持著主耶穌的教導，且明顯成為他最基本的指導原則。</p>
              <p className="text-gray-700 leading-relaxed">在這章經文中，對那些已經結婚的人，保羅一再強調已婚的人並不是犯罪，而且必須盡可能地維護這段婚姻。對那些沒有結婚的人，保羅指出結婚與否，不構成犯不犯罪的問題；其基本的關鍵在於：什麼是好？什麼是較好？在這種選擇中，有兩個因素必須考慮：恩賜與目前的處境。理想上，獨身是較好，因為較能專心事奉主；但由於多數人沒有獨身的恩賜，若強守獨身，反而容易引致犯罪，因此結婚與獨身的問題，才會成為好與不好之間的抉擇。</p>
            </div>
          </div>
        )}
      </div>

      {/* 省思與應用 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('application')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-teal-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">省思與應用</span>
          </div>
          {expanded['application'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['application'] && (
          <div className="p-5 bg-white space-y-6">
            <p className="text-gray-600 text-sm leading-relaxed border-l-4 border-teal-200 pl-3">在教會歷史中，我們常常為著一些聖經的教導，而爭得面紅耳赤，甚至導致教會分裂。記得年輕時，看到天主教的神父和修女因著不結婚，可以專心事奉神，而且往往比基督教的傳道人更有學問，因此便與一些主內的朋友討論到基督教的傳道人是否也不應當結婚。</p>

            <p className="text-gray-700 leading-relaxed border-l-4 border-teal-100 pl-3">另有一位青年人，未信主前已經有一位交往中的女朋友，甚至已論及婚嫁，就在還沒有結婚前，他信了耶穌。信主後，他在教會中聽到基督徒不能與非基督徒結婚的教導，他立刻寫信給女朋友斷絕交往。女友收到信以後，受不了突然的打擊與刺激而精神失常。</p>

            <p className="text-gray-700 leading-relaxed border-l-4 border-teal-100 pl-3">從前輩的口中，也聽到類似的事：有位男士原有兩名妻妾，信主後為了遵守教會的一夫一妻制，把所愛的姨太太送回娘家，結果這位姨太太也精神失常。</p>

            <p className="text-gray-700 leading-relaxed border-l-4 border-teal-100 pl-3">又有一位同工，年輕時投筆從戎，後因國共戰爭，與妻子分離。隻身到了臺灣而信了主的他，堅守聖經原則沒有再婚。多年後對岸傳來消息，遠在另一方的妻子，曾因著諸多壓力與另一個男人結婚，且有了子女，可是這位丈夫也已去世。他所面對的問題是：怎麼辦？可以與她復合嗎？</p>

            <p className="text-gray-700 leading-relaxed border-l-4 border-teal-100 pl-3">華人教會這些年來，困擾著姊妹們的一個問題則是：教會中普遍是女性多、男性少，若是要堅持非基督徒不嫁，那結婚的物件就非常有限，許多時候甚至是找不到物件，怎麼辦？當然在現今的世代中，分居、離婚、再婚、同居，甚至所謂的性開放等等，都是我們面對的真實現況。保羅在哥林多前書第七章，亦讓我們看到他要面對眾多與婚姻有關的問題。因此在這應用部分，我們先檢視保羅解決問題的基本方法，然後再談一些現代的問題。</p>

            <div>
              <h4 className="font-semibold text-teal-700 mb-3">一、信仰與處境的張力</h4>
              <p className="text-gray-700 leading-relaxed mb-2">在哥林多前書第七章，可以看到哥林多教會之所以會產生婚姻問題，有兩個重要的原因。第一，是信徒們對真理的了解不足。從1、2節的轉接，保羅讓我們看到，「男不近女倒好」這一句話在他心中的理解，與在哥林多信徒心中的理解有一段距離。有些哥林多信徒將這句話應用在婚姻生活上，顯然認為這句話表示基督徒應當停止夫妻間的性生活。保羅在婚姻生活這件事上，所面對的困難似乎也有點類似——信徒看到傳道人的「榜樣」，也會自然而然地模仿。</p>
              <p className="text-gray-700 leading-relaxed mb-2">第二個原因，則是不同的時代都有其獨特的環境，這些環境因素也形成一些特殊的問題。哥林多信徒在婚姻問題上，正是面對這樣的景況。耶穌基督在世時，祂事奉的對象主要是猶太人；但在哥林多地區，有些信徒明顯不是猶太人，而且還是第一代的信徒，他們的配偶有可能還沒有信主。倘若有些信徒認為信主的人應當停止性生活，造成的衝突當然更大。若是不信主的一方提出離異，基督徒更是明顯地不能以一句「主耶穌說不可離婚」就解決問題。</p>
              <p className="text-gray-700 leading-relaxed mb-2">故此，哥林多信徒在婚姻問題上有衝突掙扎，是可以理解的。在固守與靈活、理想與現實之間，基督徒怎麼拿捏得準確？有沒有可能理想而現實、固守而靈活？若是有，秘訣在哪裡？保羅處理的方法和答案，誠然可以作我們生活的指引。</p>
              <p className="text-gray-700 leading-relaxed mb-2">保羅首先思索的是主耶穌的教導。他在第10節說：「我吩咐他們；其實不是我吩咐，乃是主吩咐說：妻子不可離開丈夫。」「不可離婚」是主的吩咐，是絕對的真理！保羅謹守主耶穌的吩咐，在新環境中堅持主耶穌的原則：不可離婚。即使現實生活中是有人已經離了婚，保羅的答案是：「不可再嫁，或是仍同丈夫和好」（11節）。</p>
              <p className="text-gray-700 leading-relaxed mb-2">12至13節討論若是未信主的一方提出離異，基督徒還有可能堅持主耶穌的原則嗎？保羅說他對這種情況的勸告是他自己的意思，不是主耶穌說的，但他沒離開主吩咐「不可離婚」的原則。他一方面為新環境中的信徒開了一扇離婚的門，但同時堅持信主的一方，必須遵行主的教導。可見保羅既固守，卻又靈活。</p>
              <p className="text-gray-700 leading-relaxed mb-2">我們從保羅可以學到的第二個原則是：從信仰的角度看處境。在17至25節，保羅提及一個重要的觀念——「神的呼召」。這種「呼召」的看法，讓基督徒看到，神不僅是掌管著基督徒信主後的人生，他們信主前的情況也是神所容許和接納的，儘管有些狀況並不是那麼理想。應用在婚姻上，保羅的原則是：「守住你的身分」。</p>
              <p className="text-gray-700 leading-relaxed">那麼，怎樣才能從信仰與現實處境的張力中走出來呢？七章40節下半是保羅在聖靈的引領下，思索其所要面對的挑戰。在聖靈的引領下，他能夠周全地考量聖經原則和處境的各種因素，同時避免錯誤的推論和偏激的立場。</p>
            </div>

            <div>
              <h4 className="font-semibold text-teal-700 mb-3">二、婚姻與性生活</h4>
              <p className="text-gray-700 leading-relaxed mb-2">保羅在哥林多前書第七章，講到基督徒的婚姻時，有兩個重點值得我們注意。</p>
              <p className="text-gray-700 leading-relaxed mb-2">第一，保羅在第七章假定且延續了創世記第二章神設立婚姻制度的觀念——最明顯的證據就是他在七章14節談到夫妻中有一方是不信主的，所使用的是舊約聖潔的語言：「因為不信的丈夫就因著妻子成了聖潔，並且不信的妻子就因著丈夫成了聖潔。」保羅這話的意思是，即便另一方不是基督徒，神卻承認這婚姻是有效的。特別值得注意的是，信主的一方影響不信的一方，不是不信的那方決定了這個婚姻的意義。也因為這樣，保羅在這章經文中一再指出，結婚不是犯罪的行為。</p>
              <p className="text-gray-700 leading-relaxed">第二，性行為是婚姻生活中必須盡的義務，因此保羅用文雅的方法說夫妻當「用合宜之分」相待，婚後夫妻在性行為方面基本上不需禁欲，也該彼此尊重（3至4節）。在這一點，保羅的教導與佛教以性為欲，以及西方傳統中的禁欲主義，都明顯有著不一樣的看法。</p>
            </div>

            <div>
              <h4 className="font-semibold text-teal-700 mb-3">三、獨身與結婚的選擇</h4>
              <p className="text-gray-700 leading-relaxed mb-2">基督教與天主教對傳道者或神職人員的要求有差異，在這一點上非常明顯。天主教往往強調獨身的好處；而基督教則常強調獨身有它的缺點存在。筆者甚至看過有間教會聘牧的條件中，有一則是「必須是已婚的男性」。但是，保羅在這章經文中對雙方的立場，可以說都支援，但也都不支援。在他看來，獨身絕對有好處，但必須有恩賜。同樣他明言結婚的人其實也有他的危機，就是不專心事奉（33至34節），可是保羅也強調結婚不是犯罪。因此，保羅在這個議題上的立場，事實上並非從犯罪與否的角度處理，而是問一個更基本的問題：怎樣才能專心事奉主、無所掛慮、而身體靈魂聖潔？</p>
              <p className="text-gray-700 leading-relaxed mb-2">根據保羅的教導，若要求神職人員都要獨身，明顯是過分的要求。在哥林多前書第九章，我們可以看到彼得帶著他的妻子到各處事奉。若是彼得今日在世，天主教恐怕要罷免他們的第一位教宗了！然則聖經明顯認為獨身有它的好處——當筆者看到上一段所說那間教會的聘牧條件時，第一個反應是：看來這間教會若是接到主耶穌和保羅的申請書，他們也要拒絕了！若有些人具獨身的恩賜，同時組織了一個修道會之類的團體，其實是完全符合聖經教導的。當代英國的斯托得牧師（John Stott）是一位知名福音派的領袖，他本身便是獨身的；在德國，也有一個基督教的修會。</p>
              <p className="text-gray-700 leading-relaxed mb-2">傳統的華人文化相當注重傳宗接代，獨身的人常被輕視恥笑。而在現代西方文化的衝擊之下，世人更好像認為性行為是人生不可缺的事。但是聖經一方面對性的需求予以肯定，另一方面卻也不認為性的需求是每個人都有、且是不可或缺的。在華人社會中，面對獨身的女性，更是要注意調整自己的心態。記得多年前，有一位主內的姊妹從歐美回到東南亞的原生地事奉，不久卻打道回府，其中一個主要的原因，是她受不了家中一天到晚逼她要結婚的壓力。在教會中看到未婚的姊妹時，要懂得尊重她們，絕對不能存輕視或譏笑的心理。</p>
              <p className="text-gray-700 leading-relaxed">在華人教會中，有著男少女多的現象，而不少教會又教導信徒不能與非信徒結婚，因此出現了一個相當獨特的現象，就是有些姊妹們是不得不獨身。在這件事上，筆者認為華人教會應該在聖靈的引領下，更多、更深地思考聖經的原則。以經文的原意而言，筆者認為哥林多後書六章14節的原意，並不是在談論婚姻的事；但是筆者也深深了解現代婚姻中夫妻相處的困難，特別是信徒與非信徒結婚後價值觀差異所產生的張力，因此也是強力主張，信徒的婚姻大事需要考慮信仰的因素。但是面對華人社會的處境，筆者覺得教會可以做兩件事：積極地說，我們應該鼓勵姊妹們祈求神賜下獨身的恩賜，並且幫助她們面對家庭所施加的壓力，更要與她們一同開闢事奉的機會。另一方面，也許也可以參考天主教處理的方法，在某種情形下容許她們與非信徒結婚，但在結婚前就約定好，婚後不能禁止配偶敬拜神，而且子女必定是屬主的。</p>
            </div>

            <div>
              <h4 className="font-semibold text-teal-700 mb-3">四、離婚與再婚的問題</h4>
              <p className="text-gray-700 leading-relaxed mb-2">第一世紀的希臘羅馬社會，原是一個性開放的社會。同樣地，在開放的現代社會中，我們也不可能不面對離婚與再婚的問題。不同的時代都擁有它獨特的環境，此等環境因素也形成它獨特的問題。這原是可以理解的，但是保羅處理問題的原則還是值得我們學習。</p>
              <p className="text-gray-700 leading-relaxed mb-2">保羅處理離婚的問題時，其觀點與要求是一致的，他的基本原則是：以不離婚為原則！最主要的原因是：這是主耶穌的吩咐。特別值得注意的是，當保羅容許不信的一方提出離婚時，他似乎提供了一個可以離婚的理由，但他卻是同時勸告信主的一方不要主動提出離婚，所以他還是守住了主耶穌的吩咐。若有人說，這個婚姻是信主前所犯的錯誤，現在信了主就應當爭取自由，保羅在17至24節的回應是：呼召時的身分是什麼，就照樣按這身分而行。不但如此，保羅也提供了幾個原則：第一原則是不主動提出離婚的要求；第二原則是和睦；第三原則是帶領不信的配偶歸主。</p>
              <p className="text-gray-700 leading-relaxed mb-2">在現今的世代，導致離婚的最重要理由，恐怕是個性和價值觀的差異，這些差異若是沒有妥善地處理，往往令人覺得家庭猶如地獄，希望儘早脫離苦海。我們常忘記的是，在聖經中，特別是舊約，其實也記載著一些家庭生活中痛苦的個案，而新約中更有不少經文針對這種問題提出救贖的原則。從聖經的角度看夫妻問題，解決痛苦最好的方法明顯是預防勝於補救，拯救勝於破壞。因此處理夫妻關係時，婚前的輔導非常重要，婚後的教會團契生活也必須重視。我們現今最基本的問題是：平常並沒有花時間培養夫妻的關係，發生問題時卻以離婚為解決痛苦的方法。但聖經的原則明顯是要求基督徒努力實行拯救的工作，不輕易放棄。這當然不是沒有痛苦，但這種痛苦最終是消除痛苦！</p>
              <p className="text-gray-700 leading-relaxed">至於離婚後再婚的問題，近年有人研究當時代的風俗，發現在保羅當時代的離婚檔中，通常有「此後婚嫁悉聽其便」一類的文字，因此認為，當保羅在第15節接受不信的一方離婚時，他也同時是假定了信主的一方可以再婚。筆者覺得這個意見極值得參考。但是，筆者也覺得，即使保羅同意一些人在某種情形下再婚，他恐怕也會說：再婚與否都不犯罪，重要的是應當考慮怎樣才能更專心事奉主。更重要的是：以保羅在這章經文中所表現的基本精神而言，他絕不會贊成一些現代人的想法：反正離了可以再婚，因此先離了再說。此外，在再婚的問題上，現代的研究發現，若沒有從先前的婚姻經驗中學到功課，即便再婚日後還是會再離婚。因此，倘若教會容許再婚，就必須同時建立良好的輔導機制。</p>
            </div>

            <div className="border-t border-teal-100 pt-4">
              <h4 className="font-semibold text-teal-700 mb-3">默想</h4>
              <p className="text-gray-700 leading-relaxed mb-2">結婚、獨身、離婚，牽涉到好些議題：性行為是罪嗎？若是已經犯了錯怎樣辦？如何與信仰不同的配偶相處？基督徒不是有自由嗎？怎樣事奉主最好？這些議題都是我們討論和思考時所應當注意的。</p>
              <p className="text-gray-700 leading-relaxed">保羅在哥林多前書第七章結合了神的真理、理想與基督徒處世的實際情況，為基督徒在婚姻問題上找出可行的方案。這是後世信徒應該學習的重要功課，讓我們處理婚姻問題時，也能幫助基督徒建立一個正確的婚姻觀。在婚姻輔導時，除了要教導合乎聖經的性觀念之外，更需要幫助信徒看到神在他們婚姻上的安排，以及耶穌基督的教訓，進而把他們的心志引到專心事奉神的基礎上。所以，無論結婚與否，作為基督徒，生活中最要緊的是<span className="font-semibold text-teal-700">凡事專心事奉主、無所掛慮、身體靈魂聖潔</span>。</p>
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
              <h4 className="font-semibold text-indigo-700 mb-2">一、第一世紀哥林多的婚姻文化背景</h4>
              <p className="text-gray-700 leading-relaxed">哥林多是羅馬帝國的重要商業城市，以道德敗壞著稱。希臘羅馬社會對婚姻和離婚的態度相當寬鬆——羅馬法律允許雙方以極簡單的程序離婚，甚至婦女也可主動離家出走（希臘文「分離」apochorizo）。在這種文化土壤中，哥林多的基督徒要活出合神心意的婚姻，面臨的不只是個人道德的挑戰，更是文化與信仰的深層衝突。保羅的回應方式，是以神的話為準則，而非以文化習俗為標準，這對今日的基督徒同樣具有重要啟示。</p>
            </div>

            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">二、保羅的詮釋方法論：經文應用的範式</h4>
              <p className="text-gray-700 leading-relaxed">保羅在這章經文中示範了一個非常重要的詮釋學原則：區分「主的命令」（主耶穌明確說過的話，如「不可離婚」，第10節）與「我自己的意見」（保羅對新情況的應用判斷，如混合婚姻的處理，第12節）。這不是說保羅的「意見」沒有權威，而是他在展示如何誠實地面對聖經沒有直接回答的新問題：先固守已有的原則，再在聖靈引領下靈活應用於新處境。這種「固守而靈活、理想而現實」的神學方法論，對今日教會面對倫理議題（如輔助生殖、安樂死、同性伴侶等）仍具有方法論上的借鑑意義。</p>
            </div>

            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">三、末世論與婚姻觀的神學張力</h4>
              <p className="text-gray-700 leading-relaxed">保羅在七章26至31節強調「時候減少了」、「現今的艱難」，以末世論的眼光影響他對婚姻的評估。早期教父對這段話的解讀產生了兩種傾向：一是奧古斯丁（Augustine）等人的禁欲神學，視婚姻為次等的屬靈狀態；二是改革宗神學家加爾文（Calvin）與路德（Luther）對婚姻的積極肯定。事實上，保羅的意思並非輕視婚姻，而是要基督徒以「末世的眼光」理解婚姻——婚姻不是最終的目標，它是服事主的場域，而非目的本身。這種神學平衡，避免了既不陷入禁欲主義，也不走向婚姻至上主義的兩個極端。</p>
            </div>

            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">四、「聖潔」（hagiazō）的語義學考察</h4>
              <p className="text-gray-700 leading-relaxed">七章14節「聖潔」一詞（希臘文hagiazō，使聖潔）在此具有獨特的語用意義，並非指「得救」或「道德純潔」，而是指「被劃歸神的範疇」（consecrated to God）。這與出埃及記二十九章37節所描述的「聖潔」概念一脈相承：凡挨著壇的都成為至聖。神承認信徒與不信徒之間的婚姻為有效婚約，並以信徒的身分在這婚姻中保持其神聖的覆蓋。這一點顛覆了某些圈子中「信徒與不信徒結婚等於污穢」的錯誤觀念——保羅的神學強調的是影響力的方向（信徒影響非信徒），而非污染的方向（非信徒污染信徒）。</p>
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
              <span className="text-amber-600 font-bold flex-shrink-0 text-lg">1.</span>
              <p className="text-gray-700 leading-relaxed">當你在教會或信仰群體中聽到關於婚姻、獨身、離婚的教導時，你是否能夠區分「主的命令」（聖經明確的原則）與「信仰應用中的判斷」（針對特定處境的牧養建議）？你曾有過將兩者混淆的經歷嗎？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0 text-lg">2.</span>
              <p className="text-gray-700 leading-relaxed">保羅描述的那位青年、那對夫妻（妻妾問題）、那位老兵的故事，讓你有什麼感受？當聖經的真理在現實生活中遭遇到複雜處境時，你認為「固守而靈活、理想而現實」在實踐上意味著什麼？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0 text-lg">3.</span>
              <p className="text-gray-700 leading-relaxed">你個人對「獨身是恩賜」這句話有什麼感受？在你的文化背景（家庭、教會、社會）中，未婚的人受到怎樣的對待？這與聖經的教導是否吻合？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0 text-lg">4.</span>
              <p className="text-gray-700 leading-relaxed">保羅說停止夫妻間的性生活是「虧負對方」。這個教導對你理解婚姻中的責任與愛有什麼啟發？在你的信仰群體中，是否足夠公開、健康地談論婚姻中的性生活？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0 text-lg">5.</span>
              <p className="text-gray-700 leading-relaxed">在華人教會中「男少女多」的現象，以及「信徒不能嫁非信徒」的教導之間，你認為教會應該如何回應這種張力？陳濟民牧師提出的兩個建議（鼓勵獨身恩賜、有條件容許與非信徒結婚）你有什麼看法？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0 text-lg">6.</span>
              <p className="text-gray-700 leading-relaxed">保羅強調「凡事專心事奉主、無所掛慮、身體靈魂聖潔」是基督徒生命的核心追求。無論你目前是已婚、未婚或獨身，這個目標在你的生命中是怎樣具體呈現的？什麼是最大的阻礙？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0 text-lg">7.</span>
              <p className="text-gray-700 leading-relaxed">陳濟民牧師說「解決痛苦最好的方法明顯是預防勝於補救，拯救勝於破壞」。你所在的教會在婚姻輔導（婚前輔導、婚後支援）方面做得如何？作為教會群體的一員，你可以如何貢獻？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0 text-lg">8.</span>
              <p className="text-gray-700 leading-relaxed">保羅面對新的倫理問題時，是在聖靈的引領下，周全考量聖經原則和處境因素，而不是死守條文或任意開放。面對你生命中正在經歷的某個婚姻或關係上的困難，你如何在這種「聖靈引領下的辨別」中尋求神的心意？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 辨別「主的命令」與「處境應用」</h4>
              <p className="text-gray-700 mb-2">本週選擇一個教會常見的婚姻倫理議題（如：信徒能否嫁娶非信徒？離婚後能否再婚？），嘗試以保羅的方法進行辨別：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>找出聖經中明確的原則（「主的命令」層面）</li>
                <li>辨識這個議題中屬於「處境應用」的部分</li>
                <li>記錄你的思考過程，並與一位信任的弟兄姊妹分享</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 婚姻關係的積極建造</h4>
              <p className="text-gray-700 mb-2">若你已婚：本週選擇一天，刻意放下手機和工作，專注陪伴配偶，問他／她：「最近什麼事讓你感到壓力或孤單？我可以如何支持你？」若你未婚：本週為身邊一對正在婚姻中掙扎的夫妻具體禱告，並考慮主動關心或提供支持。</p>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 以尊重取代評判</h4>
              <p className="text-gray-700 mb-2">回想你是否曾對身邊未婚、離婚或選擇獨身的人有過輕視、議論或不當的追問（如：「為什麼還不結婚？」）。本週做兩件事：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>對一位你認識的未婚或獨身的弟兄姊妹，用行動表達尊重與關懷（而非給予婚姻建議）</li>
                <li>在禱告中悔改自己可能有過的論斷態度</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">⏰ 「凡事專心事奉主」的個人盤點</h4>
              <p className="text-gray-700 mb-2">保羅說，無論婚姻狀況如何，基督徒最終的目標是「凡事專心事奉主、無所掛慮、身體靈魂聖潔」。本週做一次誠實的個人盤點：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>目前什麼事物在分散你事奉主的注意力？</li>
                <li>你的身體和靈魂的聖潔處於什麼狀態？</li>
                <li>確定一件這週可以具體調整的事</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 為教會的婚姻事工禱告並行動</h4>
              <p className="text-gray-700 mb-2">陳濟民牧師指出，婚前輔導和婚後團契生活對婚姻的健康至關重要。了解你所在教會目前是否有相關事工。若有，考慮如何參與支持；若沒有，可以向教會領袖提出關心，或與小組一起研究如何在群體中建立更健康的婚姻文化。</p>
            </div>

            <div className="border-t border-green-100 pt-4 mt-4">
              <h4 className="font-semibold text-green-700 mb-3">🙏 本週禱告</h4>
              <p className="text-gray-700 leading-relaxed text-lg italic border-l-4 border-green-300 pl-4 py-2 bg-green-50 rounded-r">
                天父，感謝袮為我設立婚姻與家庭，也賜給一些人守獨身事奉袮的恩賜。求袮幫助我在固守袮話語原則的同時，也能在聖靈的引領下，以智慧和愛心面對生命中複雜的處境。無論我的婚姻狀況如何，求袮幫助我的心志始終指向那最重要的目標——凡事專心事奉袮、無所掛慮、身體靈魂聖潔。求袮也讓我的教會成為一個真正尊重每一個人、在婚姻與家庭事上彼此扶持的群體。奉耶穌基督的名禱告，阿們。
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
