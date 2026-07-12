import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, HelpCircle } from 'lucide-react';

export default function Book29Ch54() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    questions: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-indigo-700 to-blue-900 bg-clip-text text-transparent">第54章</h1>
        <h2 className="text-xl font-semibold text-gray-700">雅各與約瑟</h2>
        <p className="text-gray-500 mt-1">以色列對約瑟說：「我想不到得見你的面，不料，神又使我得見你的兒子。」　創世記四十八11</p>
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
              結束雅各的故事之前，分享雅各與他最愛的兒子約瑟之間不同階段的關係，分兩大段來分享：1.雅各人生旅程中的年齡，2.雅各與約瑟的獨特關係。
            </p>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">壹、雅各人生旅程中的年齡</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                雅各結婚、生子的年齡可能出乎許多人的意料之外，他不是年輕的時候去母舅拉班那裏，而是中年之後才去的。這需要一些推算才清楚。聖經提供的年齡資料如下：
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-3 ml-2">
                <li>約瑟原與父親雅各同住，十七歲被哥哥們賣到埃及（創卅七2-3,28）。</li>
                <li>約瑟被賣到埃及後，為奴、被囚共十三年，三十歲成為宰相（創四十一38-46）。</li>
                <li>隨後埃及經歷七個豐年和七個荒年（創四十一29-30），荒年兩年後，雅各舉家遷移至埃及，與約瑟重逢（創四十五6），那時約瑟三十九歲。</li>
                <li>雅各到埃及時是一百三十歲（創四十七9）。</li>
              </ol>
              <p className="text-gray-700 leading-relaxed mb-3">
                由以上四項資料，可推算出雅各生約瑟時是九十一歲。<span style={{ fontSize: 'calc(1em - 6px)', color: '#9ca3af' }}>（黃福德，《創世記釋義》，頁239-240）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                雅各生約瑟是在去巴旦亞蘭的第十四年（創卅24-25，卅一41），所以雅各是在七十七歲離開以撒去母舅拉班那裏。又由於以撒是在六十歲時生以掃、雅各（創廿五26），因此可推算以撒為兩個兒子祝福的時候是一百卅七歲（77+60），這年齡恰好符合聖經所描述的眼睛昏花。這年齡不能再更小，因為聖經說以撒一百八十歲去世（創卅五28），等於他在眼睛昏花的情況下又活了四十三年。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                按時間先後次序可完整敘述如下：以撒六十歲生以掃、雅各（創廿五26）。以撒一百卅七歲為兩個兒子祝福，那年雅各七十七歲（創廿七1）。雅各七十七歲去到母舅拉班那裡，為聘禮工作了七年，八十四歲時才娶妻。雅各後來活到一百四十七歲，所以雅各是在過了他人生的大半之後才娶妻生子，卻能夠生養十二個兒子，真令人佩服。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                以撒的個性真是無為而治，他已經年老眼睛昏花，為兩個兒子祝福的時候，雅各已七十七歲尚未結婚；而以掃則娶了兩個赫人的女子為妻（創廿六34-35），他也不在意。幸好妻子利百加比較積極，總算促成雅各回本家娶妻的事。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                雅各生孩子跟挪亞生孩子有異曲同工之處，挪亞五百歲才開始生孩子，連續三年生完三個兒子，這三個孩子是目前全人類的祖先。雅各八十四歲才結婚，九十一歲時生完十一個兒子（創卅24），只花七年時間。但因為是四個妻妾生的，最多的是利亞生六個，大約一年生一個，所以是可以的。第十二個兒子是雅各九十七歲時生的（創卅五16-18），這十二位是目前全以色列民族的祖先。全人類的三個祖先閃、含、雅弗，是挪亞晚年所生的；全以色列民族的十二個祖先，是雅各中年之後才生的。所以稍有年紀的弟兄們，不要輕易放棄，即使我們已經中年了，還可以為神生出重要的國度人才。屬靈後裔的生養當然更可以，我們活到老，傳到老，務必繼續屬靈生養，直到見主面。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                近代生物醫學發現近親結婚會使遺傳基因重疊，而容易產生殘障疾病。但古人的遺傳基因，疾病因子少，所以基因重疊不會產生疾病。反倒從心靈層面來看，近親結婚有其好處。亞伯拉罕與撒拉是兄妹，以撒與利百加是堂叔姪女的關係，類似堂兄妹，雅各與兩個妻子是表兄妹。這樣的配合，是基於希望同樣信仰真神，而從整體家庭背景來說，也是有比較多的相似、相通之處，所以這樣的婚姻品質是不錯的，尤以亞伯拉罕、撒拉的關係最好，因為他們從小一起長大。過去華人的傳統，尤其原住民族群，兄妹結婚、近親結婚是多的，也都有不錯的婚姻品質。反而現代人的婚姻對象，講究要能心動，太熟的對象不要，結果婚姻品質大不如前，離婚率節節上升。筆者認為，基於生物醫學的現實，肉體血統不能接近，但屬靈血統若能接近會是很好的。同一個教會長大的、同一個團契一起服事的，都應該是優先選擇的對象，或許一時的激情少一點，但長遠的基礎是比較穩固的，感情更是可深可久。
              </p>
              <p className="text-gray-700 leading-relaxed">
                雅各九十一歲生約瑟之後，向拉班說，請打發我回本鄉去。經過協調，雅各為工價再為拉班牧羊六年，總共在巴旦亞蘭二十年，雅各九十七歲回到迦南地，那時約瑟六歲。到了約瑟十七歲時，雅各一百零八歲，那年約瑟被賣。經過十三年，約瑟三十歲當宰相，再經過九年，約瑟卅九歲，雅各舉家遷移至埃及，與約瑟重逢（創四十五6）。因此雅各、約瑟父子分開的時間共廿二年（13+9）。雅各到埃及時一百三十歲（創四十七9），住在埃及地十七年，於一百四十七歲時去世（創四十七28）。因此雅各與約瑟父子同在埃及十七年，這十七年是約瑟九歲到五十六歲時。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">貳、雅各與約瑟的獨特關係（創卅七3）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                約瑟是雅各最愛的兒子，預表耶穌是天父的愛子（太三17）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                雅各九十一歲生約瑟到一百四十七歲年老去世，共有五十六年。這五十六年包含三個階段，時間的分配相當對稱。根據上一段所述整理如下：
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                第一階段，父子同在迦南十七年。第二階段，父子分別在迦南、埃及廿二年。第三階段，父子同在埃及十七年。每個人的生命，大部分會經歷這三個不同的階段。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                第一階段，在家與父母同住，享受父母的愛與照顧，接受父母的培育。第二階段，離開父母，在外工作，結婚。與配偶連合，二人成為一體；生養兒女，將他們撫養長大，使他們能獨立。第三階段，將父母接來同住，此時是父母最需被照顧的時候。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們不宜將第二、第三階段混合成一個階段，結婚後應以妻子和新家庭為重心，因為「人要離開父母，與妻子連合，二人成為一體。」（創二24）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                但我們不能只停留在第二階段，倘若我們沒有進入第三階段，盡到照顧年長父母的責任，也不算建立了健全的家庭，不算完成家庭任務。因為在十誡裡，有原則性的命令：「當孝敬父母，使你的日子在耶和華你神所賜你的地上得以長久。」（出廿12）使徒保羅也特別囑咐：「人若不看顧親屬，就是背了真道，比不信的人還不好，不看顧自己家裡的人，更是如此。」（提前五8）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                孝敬父母，有尊榮父母的意思，並非一定要住在一起才能做到。但照顧父母，則需要住在一起，或至少住在距離不遠的地方。雖然外勞、看護、養老院等，可以分擔兒女的照顧任務，但不能完全取代兒女的角色，正如同保姆不能完全取代父母的角色。平時的噓寒問暖，以及刻意安排的精心時刻都是需要的，例如與父母一起有些感恩回顧、對社會現況的聊天分享、為家族國家的同心代禱、領受父母的勉勵祝福等，都是很重要的。不要等到遠方的父母去世時，兒女在告別式才出現，那是很遺憾的事。父母並非只需要外在物質類的供應，乃是還要有內在心靈層次的交流。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                年輕一代若太晚獨立及結婚，自己的兒女尚未長大，父母卻已經衰老需要照顧，這時就會分身乏術，產生太大壓力，被稱為所謂夾心餅乾或三明治世代，因為雙面夾擊。若能早一點獨立及結婚生養，則當父母需要照顧時，兒女已經長大成人了，這時就比較能承擔照顧的責任，甚至能偕同自己的兒女，一起來照顧父母，那是很好的。若廿五歲結婚，三十歲左右生完二至四個孩子，接著約二十年專心養育兒女，那階段父母還不老，不太需要我們照顧。等到我們五十歲，孩子都成人了，這時父母約七十五歲，那是正需要我們照顧的時候。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                所謂照顧，不特指病床照顧，最主要是互動關係，孫子女與祖父母的互動能產生增長智慧與增加喜樂的結果。這不是隔代教養，原則上親身父母必須負起主要教養兒女的責任，但兒女成長過程中及已經成年後，與祖父母有互動，能帶給雙方正向的益處。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                約瑟十七歲被迫獨立，對他的人格養成，好過一直待在父母身邊。接著廿二年的獨立發展，讓他能操練更多倚靠神、建立與神的親密關係，可說是因禍得福。我們若為孩子好，不必讓他因遭害才學習獨立，可以從小讓他做家事、學理財、有打工經驗，也可以鼓勵孩子去做社會服務、短期宣教、農場實習、工廠實習等，或者高中職畢業就去工作、創業，都是不錯的選項。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                約瑟卅九歲迎接父親雅各來住，陪伴雅各走過人生最後十七年。雅各不僅重新與約瑟見面同住，還能看見約瑟的兩個兒子，為他們祝福，這事令雅各非常滿足，如創世記四十八11所記：「以色列對約瑟說：我想不到得見你的面，不料，神又使我得見你的兒子。」整個時間歷程接近完美組合，是很寶貴的父子關係。
              </p>
              <p className="text-gray-700 leading-relaxed">
                約瑟的生命所經過的三個階段，預表耶穌基督與天父的關係。第一階段，如同約瑟在迦南地與父親雅各同住，耶穌乃是在天上與天父同在。第二階段，約瑟與父親分離，被賣到埃及，而成為全家族的拯救者，耶穌則是與天父分離，來到世上而成為全世界的救贖主。第三階段，約瑟與父親雅各重逢，再次與父親同住，耶穌則在完成救贖任務後，再次回到天家與天父同住。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-indigo-800 text-lg mb-3">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                身為父母，當孩子長大到十八至二十歲左右，我們要捨得放手，讓他去做神要他做的事，如同天父捨下愛子，讓耶穌來到世上，完成拯救人類的使命。天父親自成為我們的榜樣，我們要學習天父，並帶著盼望，讓孩子去完成神託付給他的使命，並相信在我們年老的時候，孩子會再回到我們身邊，或者我們會去到他那裡，與他同住，被他照顧。身為兒女，也要懂得人生三階段的原理，第一階段接受父母照顧、培育，好好跟父母學習；第二階段要勇敢獨立發展，包括工作與結婚、生養；第三階段要與年老的父母同住或接近他們，提供必要而足夠的照顧。這件事帶著長壽的應許與祝福，懂得孝敬父母的約瑟，在雅各離世後，又活了五十四年。聖經說：「約瑟活了一百一十歲。約瑟得見以法蓮第三代的子孫，瑪拿西的孫子瑪吉的兒子，也養在約瑟的膝上。」（創五十22-23）這是何等美好的畫面！願我們從雅各與約瑟的關係，看見神的美好，也體會神的心意，一方面來享受與天父愛的關係，一方面也注重與父親、與兒子的關係，一起來擁有美好的人生三階段。
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
                '根據聖經的年齡資料推算，雅各是在九十一歲時生約瑟，八十四歲才娶妻，顯示雅各在人生大半之後才娶妻生子，卻仍能生養十二個兒子。',
                '雅各與約瑟的父子關係經歷三個對稱的階段：同在迦南十七年、分離廿二年（約瑟在埃及）、同在埃及十七年，共五十六年。',
                '人生也大致經歷相似的三階段：在家受父母照顧培育、離家獨立工作結婚生養、將年老父母接來照顧，三階段不宜混淆，各有當盡的責任。',
                '孝敬父母不僅是物質供應，更需要內在心靈層次的交流；早婚早育能避免「三明治世代」蠟燭兩頭燒的壓力。',
                '約瑟的三階段人生預表耶穌基督與天父的關係：與父同在天上、離開天父道成肉身成為救贖主、完成救贖後回到天家與父同住。',
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
              '雅各的人生旅程，經歷了哪些神的賜福？每人分享一項，並分享自己的應用。',
              '雅各與約瑟的關係，有哪三個階段？你與兒女的關係、與父母的關係，分別在哪個階段？有何體會或感受？',
              '雅各與約瑟的三階段關係，對基督有何預表？對今天的我們有何提醒？試分享你的應用與可能的具體行動。',
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
