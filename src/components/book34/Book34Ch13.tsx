import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book34Ch13() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-700 to-teal-700 bg-clip-text text-transparent">第十三章</h1>
        <h2 className="text-xl font-semibold text-gray-700">學習同時接受善與惡</h2>
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
              我們都想住在一個「不被定罪」的地方。但我們怎麼在情緒上達到此地？
            </p>
            <p className="text-gray-700 leading-relaxed">
              第一步是看看真我和理想的我之間的關係。如果關係是基於愛和接納，並朝著愛的目標，則我們會視失敗是學習的過程。如果關係是憤怒、定罪、責罰、劃分好與壞，則我們會視失敗是必須掩飾的事。
            </p>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">一、我們為何劃分善惡</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                真我和理想我之間的錯誤關係來自兩方面：先天性和後天的養育。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們天生有罪性，我們生來「想與至高者同等」（賽十四：13-14），這也是為什麼我們對自己有一套理想的看法。我們要更好。同時，我們生在律法之下，我們有一個墮落的良心，在我們失敗時會責罰我們。「因為凡遵守全律法的，只在一條上跌倒，他就是犯了眾條。」（雅二：10）
              </p>
              <p className="text-gray-700 leading-relaxed">
                再者，我們被不完美的人，以不完美的方法養育長大。而當我們失敗，他們常常非常憤怒，更加強了我們定罪的良心。我們將父母的批評變成一套自我評價的系統，我們稱之為良心，它常以父母對我們說話的態度對我們說話。如果父母是慈愛接納的，我們的良心就會是慈愛接納的，如果父母是嚴厲苛刻的，我們的良心就是嚴厲苛刻的。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">二、我們如何再接納善惡並存</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                從沒有慈愛的景況如何得到饒恕？我們可以從恩典中學習。這是基督肢體的工作之一。我們應該不計自己的失敗，彼此接納彼此相愛，並在愛中彼此勉勵。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在教會裡相互饒恕的關係能解決把好和壞分開的問題。這問題最重要的解藥有二：承認和饒恕。第三是整合負面的情緒。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">承認</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「你們要彼此認罪，互相代求，使你們可以得醫治。」（雅五：16）基督徒知道向神認罪，但這只是一半，他們需要向彼此認罪。我們不能向人認罪，又不能體會到被愛被饒恕，這就是造成我們痛苦的來源。要感覺神的饒恕，我們必須受到神兒女的接納。如果我們向人認罪而被接納，我們理想的自我就會改變。我們將會從別人來的接納內在化，我們的良心也改變了，它會更有慈愛。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                同時，在黑暗中的惡，在光中顯現，耶穌把它改變了。「承認」就是解決好與壞問題的途徑。在黑暗中埋藏的問題顯露出來，同時被神被人接納。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                墮落使我們與神、與人、與自己分離。結果就是，我們把自己藏在黑暗中。我們把自己的光景向神向人向自己隱藏，它就越來越壞。離開與神與人與自己的關係，它就越來越黑，再者，我們的行為態度與恩典、真理、時間分開，它們就不會成長與改變。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當我們向神認罪，這隱藏的部分就與神發生關係，神就可以開始潔淨醫治。當我們向人坦白他們就可以接納我們，而醫治我們的孤立，我們就進入一個被愛的地位。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                但我們很多人對向人認罪坦白都有困難。我們有許多藉口，像是「成功的經驗才分享出來」。這是與聖經違背的。它告訴我們要彼此認罪。任何達不到這點的都是驕傲。我們不想揭露自己，因為我們想要表現完美。另一些藉口像「做好見證」，但真正還是驕傲作祟。真正的好見證是，一個罪人不見證他多麼得勝，而見證神多麼饒恕。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這並不是叫我們向每一個人認罪。那會很危險。我們要向那些愛我們、可以將神的恩典提供我們，像是神道成肉身的天國大使來認罪。這將改變我們把善惡分開的問題，因為誰被赦免多，他的愛也多。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                可悲的是許多人只敢對某些表面的事認罪，像缺少靈修時間、沒耐性、或起了什麼誓，而不敢向殺死我們靈魂的癌症挑戰（可七：21-22）。如果我們為這些心中的惡念向神認罪，並且不再有被定罪的感覺，我們的個性被改變。隱藏這些，會使它們進入黑暗中自生自滅。這是那些坐雲霄飛車式基督徒常有的經驗。一大堆的恨意悲傷被壓抑隱藏（耶穌說的黑暗），就從心理疾病、心理功能障礙表現出來。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                經由認罪，表達真我，我們體會別人的饒恕，理解恩典、真理，這是走向改變，及得醫治之路的關鍵。我們改變在黑暗中的部分，也改變理想自我與真實自我的關係。當關係中不再有定罪，越來越多的平安生出來，理想自我和真實自我的差距就越來越小。理想自我可以變成一個目標而非一個要求，而真實的自我可以在朝目標前行時，被愛被接納。愛爾是個好例子。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                愛爾由於有爆發性的憤怒而來尋求治療。他會突然對犯錯的人大怒，嚇走任何人，尤其是他的孩子。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在治療中，他承認對父母有很強的恨意。他覺得自己是基督徒不該恨父親，他拒絕自己的感覺，變成兩個人。一面他是好基督徒，一面他埋藏自己的恨。當他學到神不因他的恨定他的罪，他開始能向神向人認罪，並找出恨的真正理由。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當他能自由地在支持小團體中認罪，他那黑暗的部分得到饒恕和醫治。這是讓光接觸黑暗受傷的部分，而非以律法迫使不被接納的部分隱藏起來。當這樣的過程繼續，愛爾開始能接納饒恕做錯事的人。他父親得罪他的影響，經由認罪得以改變。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700 mt-4">饒恕</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                饒恕是治療把好壞分開這個問題的第二種方法。耶穌說：「你們不饒恕人的過犯，你們的天父也必不饒恕你們的過犯。」（太六：15）既然當我們接受基督時，我們都被饒恕了，耶穌在這裡必是說，如果我們不饒恕別人，我們就沒有讓祂的恩典觸摸我們，並結果子。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                馬太福音十八章29節說到這個例子。一個欠很多債的僕人，被主人赦免，他卻不能同樣赦免欠他一點點的朋友。其實，這僕人不會經歷恩典。他還想還他的主人，因此他也要求別人還他。這是一個人不能饒恕的原因：他們從未真正接受恩典。他們還想還神什麼，賺得他們的地位。他們還在律法之下。
              </p>
              <p className="text-gray-700 leading-relaxed">
                有些人接受過恩典仍然要求別人還債。我們必須免人的債，才能得醫治。否則，我們就是把自己加上手銬交給傷害我們的人。饒恕就是砍斷手銬的刀。放開傷害你的人，能釋放你自己得自由。苦毒、懷恨會使你和傷害者連在一起。當我們因饒恕將結開啟，我們就可以接納傷害我們的人，向神接納我們一樣，我們就可以將自己的壞，和不饒恕的部分，和好的部分整合起來。我們因怨恨人結仇，我們的這部分不會愛，也不會被愛。我們必須認罪，並放棄怨恨。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700 mt-4">整合負面情緒</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                許多人將負面情緒隱藏起來，像生氣、悲傷、和懼怕。這些人無法應付好壞的問題，因為他們沒有處理負面情緒，並為許多事受苦，像人際關係、沮喪、和焦慮。負面情緒是正當的，必須面對，否則將造成問題。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">怒氣</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                怒氣是我們最基本的負面情緒，告訴我們有不對了。我們傾向保護讓我們不想失去的好。怒氣就是一種啟示，說有一些我們重視的東西，正有失去的危機。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當我們被教導不要表現怒氣，啟示就是被教導，不要管關乎自己重要的事。以弗所書四章26節說：「生氣卻不要犯罪，不可含怒到日落，也不可給魔鬼留地步。」感覺生氣其實是好的，因為怒氣警告我們，有危機了，並使我們知道什麼需要保護。但在解決問題時，我們不要犯罪，就是說以不仁慈的方法解決問題，或是帶來對自己及對方的傷害。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                否認怒氣的感覺會帶來一些後果，從身體方面的徵狀，像頭痛、胃潰瘍，到個性上的失序，像被動的侵略性、無法工作、嚴重沮喪焦慮。從任何一個角度而言，否認怒氣都不能解決問題。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                另一個否認怒氣的問題是，它會轉變成苦毒，導致一種批評、不饒恕的靈：「又要謹慎，恐怕有人失了神的恩，恐怕有毒根生出來擾亂你們，因此叫眾人沾染污穢。」（來十二：15）苦毒使門開啟，讓撒但乘虛而入，進而掌控我們。
              </p>
              <p className="text-gray-700 leading-relaxed">
                我們不要否認怒氣，反而要擁有它，找出它的原因。當我們檢視怒氣的原因，我們要找出什麼是我們要保護的。可能是易受傷的感覺，或被控制的意願。我們或許在別人咒詛的裡面，或許需要從完美主義中被釋放。無論原因，怒氣告訴你有問題，絕不要否認它。我們也會發現，怒氣是想保護一些壞的部分，如驕傲、控制、想要無所不能、完美主義。我們生氣也許因為失去對別人的控制。任何一種情形，如果我們否認怒氣，我們就不能知道原因。因此生氣是有幫助的，因為它是一個指標，指出要保護的部分，無論是好是壞。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700 mt-4">悲傷</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                悲傷指出受傷和失落，我們生活在一個令我們受傷和失落的世界裡。悲傷幫助我們放手。如果我們壓抑並否認悲傷，我們不可避免地會沮喪。沒有解決的悲傷導致沮喪，以及一大堆別的徵狀。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                傳道書的作者說：「憂愁強如喜笑，因為面帶愁容，終必使心喜樂。智慧人的心在遭喪之家。」（傳七：3-4）詩篇三十篇5節說：「一宿雖然有哭泣，早晨便必歡呼。」悲傷是走向喜樂的途徑。因為悲傷指出一個需要處理的傷害。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當人否認他們的悲傷，他們就是硬著心，失落了神的溫柔形象。以弗所書四章19節說：「良心喪盡」。他們無法去愛、無法溫柔、無法為罪憂傷，使他們成為非常不敏感的人。壓抑傷痛導致很多徵狀，包括沮喪、心理問題、飲食失常等。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                蘇珊二十多歲，她深受恐懼之苦，常在半夜因害怕死亡而驚醒。她覺得身為基督徒而如此很羞愧，她試著背有關死亡的聖經經文卻沒有幫助。她完全無助。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                蘇珊唯一親近的妹妹在她十五歲時突然半夜死亡，她父親宣布從此不提此事，必須堅強。蘇珊的傷痛沒有解決，她想隨妹妹而去，因為那是她愛的泉源。這希望深印心中，成為恐懼，而事實上，這是她的渴望——和妹妹在一起。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當我們談這件失落，蘇珊開始為妹妹悲傷。她開始談她這許多年一再否認的感覺。經過幾個月正常悲傷的循環之後，她可以對妹妹放手。這件事應該在她十五歲時就發生過，但她家的規矩使她不能悲傷，延遲到如今。當她處理悲傷，她就不再對死亡恐懼，也不再有過去經常發生的沮喪。
              </p>
              <p className="text-gray-700 leading-relaxed">
                對悲傷有一個重要的方向就是柔軟。柔和謙卑是神形象的重要相貌。我們的傷悲必須以各樣代價去保護。如果我們不能感覺悲傷，我們就是太冷淡了。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700 mt-4">懼怕</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                懼怕是另一種負面的情緒，警告我們有危險了。這危險可能是真實的，可能是想像的。但我們必須警覺到它的出現，然後去面對解決。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經告訴我們，不要懼怕。因為神保護我們。這是一個重要的選擇。然而若我們不警覺懼怕出現，我們就不會選擇信靠神。有時候，懼怕的根本是不信靠神。有些人否認懼怕，轉變成冷漠、不敏感、驕傲、競爭的人。我們若不是懼怕，又不信靠神時，我們的選擇就只有信靠自己的能力。
              </p>
              <p className="text-gray-700 leading-relaxed">
                否認恐懼，使我們忘記自己生在宇宙中卑微的地位，使我們遠離神。恐懼應該使我們來到父神面前，使我們更依靠神，因此我們必須承認自己的恐懼，使我們有需要。舉例而言，如果我們沒有受遺棄的恐懼，我們就不會有需要別人的感覺，我們就會對人冷漠。在婚姻中，若一方不怕被遺棄，就會如此。他會視另一方為理所當然。恐懼使我們與自己裡面那易受傷的一面接觸，恐懼也使我們需要別人、需要神。有時候人會非常不敏感地對待別人，因為他們自己擋住了裡面易受傷的恐懼。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">三、整合好與壞的其他方法</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                成長需要努力。對解決好與壞的問題，有些方法是需要學習與操練的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">
                <span className="font-semibold">禱告</span>——除了認罪，求神告訴你警覺一些被你忽略的事。大衛禱告說：
              </p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「神啊，求你監察我，知道我的心思，試煉我，知道我的意念，看在我裡面有什麼惡行沒有，引導我走永生的道路。」（詩一三九：23-24）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                求神光照你的心靈，顯出你所忽略的，並求祂饒恕。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">調整理想</span>——理想自我中有很多部分是假的。檢視有哪些是應該從你的理想自我圖書中除去的。你也許該除去一些從文化或家庭來的理想，而非從神來的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">調整扭曲思想</span>——對扭曲的思想提出挑戰，不論對自己，對別人或對神。這些根深蒂固的信念不容易改變，但當你有新的關係，可以重新學習。研讀聖經中有關我們的理想、我們的實際、神與救恩的經文。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">監視理想與真實的關係</span>——監視你對達不到理想時的反應。你有沒有否定它？你有沒有否定好的？有沒有攻擊論斷？你有沒有接納和饒恕？許多人很驚訝地發現自己多會攻擊別人和自己。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">練習去愛未達你理想的他人</span>——學習接納別人的軟弱，能解決劃分好壞的問題。當別人未達你的理想，保持與他建立關係，不去要求別人。如此，關係加強了，你愛的能力增加了。未達理想的那個人，現在比理想還重要，因為你和他有真實關係的存在。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">不要丟棄不完美的他人</span>——如果你的問題是當一點不完美出現，你就把全部都看為壞的，所以你會從一個朋友換到另一個朋友、一個配偶到另一個配偶、一個教會到另一個教會。你可以試著停留在原有的關係中，去解決問題。積極去找好的和壞的，並去愛整個對方。與真實為友而非為敵。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">處理並珍視負面情緒</span>——當你委身於真實，委身於好壞並存的事實，你會看到負面情緒是生活的一部分。你越不怕它，你越可以處理它，而不會造成前一章所描述的問題。大多問題都是因為害怕負面情緒而起。它們其實不像你想的那麼壞。負面情緒不會殺了你，但避免負面情緒可能會。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">每個人都有弱點的心理準備</span>——我不是說你要變成悲觀主義者。我是說「實際一點」。你認識的每一個人，包括你自己，都有好有壞，有優點有缺點。當缺點出現，擁抱它、愛它，這樣你可以克服分化好與壞的問題，也會與人更親密。
              </p>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">自然界也有缺點的心理準備</span>——因為世界是真實的，不是理想的，每一件東西最後都會壞。每一次你計劃旅行都可能遇到下雨。每一棵你種的樹都會枯萎。對事情的結果做心理準備，你就不會太訝異。你會珍惜不太理想的車、房子、居住的城市。縱然不理想，但也許夠好了。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">四、泰德</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                記得泰德嗎？他追求一個接一個的成功，以掩飾幼年家庭的傷害。他的父母有許多問題，也試圖以成功來掩飾。他們不接受不完美，要求泰德和其他小孩子，在學校、運動、禮貌、以及每件事上，都要完美。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「我父親很跋扈，他攻擊我每一個弱點。我覺得不好時，決不能表現出來，在他面前更不能哭。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                泰德很快學會不表露感情。由於不能與人分享他的弱點，他開始對自己也隱藏弱點。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當他父母離婚時，他垮了。「雖然我父親是個冷酷的人，但我愛他，」他說，「我也愛我的母親。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                父母離婚使泰德充滿了不能解決、不能言喻的傷痛和怒氣。這麼多年來他一直隱藏怒氣。他用父母的模式來處理壞的情況，也就是追求成就，一個接一個。然而沒有一個成就可以撫平他的痛苦。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當他的成就受到威脅，事業婚姻出現危機時，他走投無路。他從未接納自我，也從未有一個人在他失敗時仍然愛他。他不能想像離了外在表現的愛是什麼，或離了傾慕的友誼是什麼。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                慶幸的是，別人可以瞭解。他的朋友支持他，在他周圍表露對他的愛。他們愛他的本身，而非他的成就。他們將他們自己的失敗告訴他，他學到失敗並非世界末日，而成功並非愛的基礎。他開始能敞開自己，述說他的受傷和恐懼。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                泰德被朋友的愛贏回來，他漸漸放棄不健康地追求理想自我，而開始以真我向別人出現。這真我是帶著各樣傷害、罪惡、軟弱、不成熟的。從理想自我中得了自由釋放，他成立了一個支持團體，去幫助同樣景況中的人。
              </p>
              <p className="text-gray-700 leading-relaxed">
                泰德並未放棄追求卓越，他把它看成遠景。不再為叫人羨慕而努力，他努力是基於愛。失敗不會否定他，成功也不會定義他存在的價值。他愛他的工作，但他更愛周圍的人。找到了愛，他不需要再造一個理想自我了。
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
                '我們天生把善惡分開，一是因為與生俱來想「與至高者同等」的罪性，二是因為被不完美的父母以不完美的方式養育，父母對待我們失敗時的態度，會內化成我們良心對自己說話的方式。',
                '解決善惡分裂問題的三把鑰匙是：承認（彼此認罪、把黑暗帶進光中）、饒恕（放開加在傷害者身上的手銬，也釋放自己）、以及整合負面情緒（不否認怒氣、悲傷、懼怕，而是找出它們背後要保護或警示的東西）。',
                '怒氣提醒我們有重要的東西正在被威脅，悲傷幫助我們對失落放手（如蘇珊延遲多年才為妹妹哀悼），懼怕提醒我們需要依靠神——三種負面情緒若被否認壓抑，都會轉化成沮喪、身體症狀或關係問題；若被承認整合，反而成為成長的資源。',
                '整合好壞的具體操練包括：禱告求光照、調整扭曲或錯誤的理想、監視自己對失敗的反應模式、練習去愛未達理想的他人、不輕易丟棄不完美的關係、並提前對自己與世界的不完美有心理準備。',
                '泰德的轉變關鍵在於：朋友「愛他的本身，而非他的成就」，並主動分享自己的失敗——這使泰德第一次體會到，失敗不是世界末日、成功也不是愛的基礎，讓他終於能放下不斷建構理想自我的重擔，帶著真實的軟弱與人建立關係。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「彼此認罪」為何常被教會文化忽略</h4>
              <p className="text-gray-700 leading-relaxed">
                雅各書五章16節明確教導「你們要彼此認罪」，但作者觀察到許多基督徒只操練向神認罪，卻迴避向人認罪，理由常是「只分享成功見證」「怕不夠屬靈」。這種迴避背後其實是驕傲——不願意讓別人看見自己的真實光景。真正健康的群體文化，需要有意識地為「彼此認罪」創造安全空間，而不是預設只有得勝的見證才值得分享，否則整個群體會停留在表演式的屬靈生活裡，如同本章反覆提及的「坐雲霄飛車式基督徒」。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">悲傷輔導中的「延遲哀悼」現象</h4>
              <p className="text-gray-700 leading-relaxed">
                蘇珊的案例是悲傷輔導領域常見的「延遲哀悼」（delayed grief）典型範例：因家庭規則（「必須堅強，從此不提」）而被迫中斷的哀悼過程，並不會自動消失，而是以扭曲的形式（如對死亡莫名的恐懼）在多年後浮現。這提醒我們，處理喪失最好的方式不是「快點走出來」，而是給予足夠安全的空間，讓悲傷完成它原本該有的歷程——這也呼應了第二章「好時間與壞時間」的概念：被埋藏在壞時間裡的哀傷，需要被重新帶回時間之中才能真正被處理。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「不要丟棄不完美的他人」對現代關係文化的挑戰</h4>
              <p className="text-gray-700 leading-relaxed">
                在一個選擇眾多、關係容易被輕易替換的時代（換朋友、換伴侶、換教會），本章「不要丟棄不完美的他人」的教導格外具有挑戰性。作者並非鼓勵停留在有害的關係中，而是指出：許多人真正的問題不是關係本身出了大問題，而是無法忍受任何不完美，因此不斷用「換一個」來逃避處理衝突與失望的功課。學習「與真實為友而非為敵」，是建立深度、持久關係不可或缺的能力。
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
              '你的良心對自己說話的方式，比較像慈愛接納的父母，還是嚴厲苛刻的父母？這跟你成長的家庭有什麼關聯？',
              '你有沒有向人認罪坦白的困難？如果有，你常用的藉口是「只分享成功見證」，還是別的理由？',
              '你有沒有一個像愛爾一樣「加了手銬交給傷害你的人」的怒氣或苦毒，至今還沒有真正饒恕？',
              '面對怒氣、悲傷、懼怕這三種負面情緒，你最常否認、壓抑的是哪一種？',
              '回想你的原生家庭，處理負面情緒的規則是什麼（可以表達、還是必須壓抑）？這如何影響你今天處理情緒的方式？',
              '像泰德一樣，你身邊有沒有人「愛你的本身，而非你的成就」？如果有，這對你意味著什麼？如果沒有，你可以怎麼開始尋找？',
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
              <h4 className="font-semibold text-green-700 mb-2">🗣️ 向一位信任的人認罪</h4>
              <p className="text-gray-700 mb-2">
                找一位能提供神恩典的人（而非任意一個人），誠實說出一件你一直隱藏、不敢承認的心中惡念或掙扎，觀察被接納後內心的變化。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💔 檢視你未饒恕的清單</h4>
              <p className="text-gray-700 mb-2">
                寫下一個你至今仍懷恨、未真正饒恕的人與事件，思想：這根「手銬」如何仍在捆綁你？這週可以踏出饒恕的哪一小步？
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 默想詩篇一三九篇23-24節</h4>
              <p className="text-gray-700 mb-2">
                用大衛的禱告祈求神光照你忽略的心思意念，寫下神向你顯明的一件事，並帶著它來到神與人面前。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，感謝祢藉著承認、饒恕與整合情緒，為我開了一條走出好壞分裂的道路。求祢賜我勇氣向祢、也向信任的肢體，誠實承認我心中隱藏的黑暗，好讓祢的光照進來醫治。求祢幫助我不再懼怕自己的怒氣、悲傷、恐懼，而是學習擁有它們、從中認識自己需要保護和依靠祢的地方。願我像泰德一樣，最終不再需要打造一個理想的自己，而能帶著真實的軟弱，安然活在祢與人的愛中。奉耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
