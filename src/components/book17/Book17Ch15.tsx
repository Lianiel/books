import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Users, Search, HelpCircle, Check } from 'lucide-react';

export default function Book17Ch15() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    application: true,
    exploration: true,
    questions: true,
    practice: true,
  });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">第十五章</h1>
        <h2 className="text-xl font-semibold text-gray-700">造就自己或造就他人（十四1-40）</h2>
      </div>

      {/* 經文要義 */}
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
            <div>
              <h3 className="font-bold text-gray-900 mb-2">一、聚會與方言（十四1-25）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅在第1節開宗明義：「你們要追求愛，也要切慕屬靈的恩賜，其中更要羡慕的，是作先知講道。」這傳達幾個信息：（1）再次強調追求愛，但並不反對恩賜；（2）信徒可以追求恩賜；（3）若要追求恩賜，應以「先知講道」為優先。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅在2-4節將「方言」與「先知講道」作比較：方言是對神說話，內容是奧秘，建立的是自己；先知講道是對人說話，造就、安慰、勸勉人，建立的是教會。結論是：「造就自己」是好，但能造就別人就更好。保羅並非說方言不好，也沒有禁止方言，但他勸信徒追求先知講道，因為追求方言只能建立自己，基本上還沒有掌握到「愛是不求自己的益處」（十三5）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在6-12節，保羅舉出三個例子：（1）以自己為例，若他到哥林多時只說方言，如何能對他們有益？（2）以音樂為例，噪音不能傳達資訊；（3）以人間語言為例，使用聽者不懂的語言，根本無法溝通。在13-19節，他指出方言只在靈性方面有益，在悟性上沒有果效，不能造就他人；先知講道加上悟性，可以教導人。用「靈」禱告與用「悟性」禱告並非衝突對立，在公眾場合中，用悟性禱告有更大的好處。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在20-25節，從教會整體的角度，保羅指出：說方言是為不信的人作證據，但如同「神跡」容易被人誤會，產生反作用（第23節「你們必說是瘋了」）；先知講道則可造就信徒，也能讓不信的人聽道悔改信主，讓不信者知道「神在你們中間」（24-25節）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                關於「方言是什麼」，保羅提供了幾個線索：方言是在講神的奧秘（第2節），是可以翻出來的（第5節），是用「舌頭說不容易明白的話」（第9節），講方言的人自己也不知道在講些什麼（15-16節），以賽亞書的引用表明外邦人的舌頭等於外邦人的語言（第20節）。因此，「說話者和在場的人所不懂的語言」是最合理的定義。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">二、如何落實？（十四26-40）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                從第26節起，保羅提出實用的教導。最基本的原則是：「凡事都當造就人」（26節）。根據這個原則提出兩點：（1）聚會時使用方言的原則：兩三個人輪流著說，也要翻譯出來；若沒人翻譯，就當在會中閉口不言（27-28節）。（2）先知講道的原則：兩三人講；其餘的人慎思明辨（29-33節）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                特別值得注意的是：保羅要求先知不能獨佔講台，要讓他人也有機會事奉；而「先知的靈原是順服先知的」（32節），表示先知傳達資訊時並沒有失去理智，更不會失控，沒有邪靈附身身不由己的現象。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                34-36節中婦女閉口的問題，需要在上下文中理解：保羅從第26節起就要求多種人在不同情況下閉口不言——講方言的人若沒人翻譯要閉口（28節），先知在別的先知有話說時要閉口（30節）。保羅要婦女不發表意見，真正的含義是：不要以發表意見來炫耀自己，因為那是一個特別的情況下的提醒，他的關懷點是哥林多教會聚會中的混亂，而非歧視婦女。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                保羅在第十三章的信息是：談恩賜，不能不以愛的原則為指導。在第十四章他進一步指出：追求恩賜同樣不能不以愛的原則為指導，即必須以造就他人為目的。落實在教會聚會中，他在39-40節作了一個總結：「凡事都要按著次序，照規矩行。」
              </p>
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
          <div className="p-5 bg-white space-y-5">
            <div>
              <h3 className="font-bold text-gray-800 mb-2">一、方言的問題</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                哥林多前書第十四章是現代討論靈恩課題時極重要的一段經文。在聚會中說方言的問題上，有三種不同的看法：（1）保羅根本是禁止人說方言；（2）保羅鼓勵人說方言；（3）保羅有條件地開放。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                第一種看法並不能從經文中得到支持。在整章經文中，絲毫看不到保羅認為說方言是件不好的事或需要禁止的事；他自己就是擁有方言恩賜的人，他也說願意哥林多信徒都說方言（第5節）。第二種看法同樣不能得到經文的支持。有人根據第5節認為保羅不僅不禁止，而且鼓勵人人都說方言；但保羅的教導是：你們最好追求先知講道，他並不多加鼓勵方言。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                最符合經文的是第三種看法：有條件地開放——可以說方言，但必須翻譯出來。作者有幾個感想：其一，這段經文所呈現的聚會方式，與現今許多教會有一段距離——不要說講方言，就是講道也只有一個人講；比較之下，貴格會原有的聚會，並不見得違背聖經。其二，這段經文處理的並非好與不好的區別，而是好與更好的分別——在保羅看來，是運用恩賜時能否建立、造就教會，而不是對個人是否有好處。其三，在現今講方言的熱潮中，不知道為什麼很少看到翻方言的恩賜，保羅在哥林多前書兩次談到方言，接著就提及翻方言，更是要他們求有人能翻方言（十四13）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                曾有人來信，說他聽到有人主張「聖靈充滿就必定要說方言」。作者在回信中表示：這是第一波靈恩運動的主張，目前支持這種主張的教會已提出修正。他同時指出，若是這主張成立，麻煩就大了——路德、加爾文和約翰·衛斯理都不會說方言，難道他們就沒有聖靈充滿？保羅在十四章5節所說的，也並不表示哥林多信徒都會說方言，只是表達保羅的善意，假定了當中有人不會說方言。保羅在十二章30節故意反問，明顯是要表達：沒有必要要求每一位信徒都有說方言的恩賜。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">二、先知講道</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                關於先知講道，目前爭論的焦點有兩方面：現今還有沒有先知？先知講道是怎麼一回事？作者個人認為，若能回答第二個問題，第一個問題也就迎刃而解。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                從新約的整體脈絡可以發現，先知講道的基本形式是傳達神的資訊：宣告神要在這世界上所行的事，以及信徒如何展現因應的生活。作者有一次特意去參加一間五旬節派教會的先知特會，聽完那天的先知資訊，覺得與華人教會奮興佈道會的講道，並沒有實質上的分別。不過，在第二和第三波的靈恩運動中，先知預言則有兩種：一種是個人性的引領和指示；另一種是有關整體社會或地區的預言。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅在第29節要其他的人在先知傳講資訊時「慎思明辨」，含義是：不要以為所有先知資訊都是從神而來，盲目聽從先知資訊的人，還是要向神負責。作者的觀察是：目前有些華人信徒對先知資訊趨之若鶩，是因為以為先知有直通神的捷徑，可以幫助他們解決眼前面對的困難，因此先知說什麼，他們就做什麼。信徒應當明白：先知固然可以指出我們的盲點、指點迷津，但信徒仍要為自己所做的事向神負責。不是所有先知的話都值得信賴！
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在靈恩議題爭論中，雙方往往過於簡化，以為一切問題若不是出於聖靈，就是出於邪靈。但本段經文提出另一種可能性：出於人的罪性（30節中先知在不應說話的時候靠自己血氣繼續說）。因此，不需要把一切靈恩現象過於聖化，也不需要把一切差錯都歸於魔鬼。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                約翰·衛斯理有一段話，說到復興運動中信徒常犯的一個嚴重錯誤，就是過度熱心。聖靈的感動與井然有序，在某些人看來往往是對立的；可是對保羅而言，這兩者卻是一致的，因為聖靈的特質本來就是如此。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">三、婦女講道</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                婦女講道的問題，也是現代教會爭論議題之一。值得信徒注意的有兩項：第一，「閉口不言」真正的含義有多種可能；第二，十四章34-36節的功能，是在第26節以下要求多種人閉口不言的一部分——講方言的人若沒有人翻譯，要閉口（28節）；先知也有不能說話的時候（30節）；因此保羅禁止婦女說話，無論如何解讀，都不能說是因為他歧視婦女。在整個段落中，保羅的關懷點是哥林多教會聚會中的混亂。他再次表示，基督徒的聚會不是表現個人才能的場合。
              </p>
            </div>
            <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-teal-400">
              <h4 className="font-bold text-teal-800 mb-2">默想</h4>
              <p className="text-gray-700 leading-relaxed">
                在哥林多前書第十四章，可以從保羅的教導中，學習到基督徒聚會時的基本要點。第一，信徒需要有神的同在。第二，信徒需要顧及他人的存在。基督徒聚會時切忌的是：個人的表現和自私的追求。在這種精神下，保羅也為信徒在追求聖靈的恩賜時，提出正確的路向。
              </p>
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
              <h4 className="font-semibold text-gray-800 mb-2">一、「方言」的考古與歷史學研究</h4>
              <p className="text-gray-700 leading-relaxed">
                學術界對哥林多教會「方言」（glossolalia）的性質有廣泛的研究。語言學家William Samarin在1970年代對「說方言」現象進行了廣泛的田野研究，發現現代靈恩運動的「方言」通常是說話者母語音韻系統的重組，並不符合人類自然語言的結構特徵，因而主張現代的「方言」是一種宗教性的語音現象（paralinguistic behavior），而非真正未知的語言。另一方面，古典學者E. A. Judge指出，在希臘-羅馬宗教中，神殿的祭司（尤其是德爾菲的神諭女祭司Pythia）在神靈附身時會發出難以理解的言語，這種現象在哥林多社會中非常熟悉，可能解釋了哥林多信徒為何如此重視方言。保羅的整個論述，很可能正是針對哥林多人將基督徒的方言與異教神靈現象相混淆的傾向。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">二、新約先知職分的比較研究</h4>
              <p className="text-gray-700 leading-relaxed">
                新約學者David Aune在《Prophecy in Early Christianity》中，對新約先知的性質進行了系統性的考察。他指出，新約的先知與舊約先知有連續性，但也有重要的差異：新約先知不再是神的代言人（「耶和華如此說」），而是在聖靈感動下傳達神的資訊，但這些資訊需要接受群體的辨別（林前十四29）。這種「可辨別的先知」（evaluable prophecy）是新約先知的獨特之處，也是早期教會防止假先知的機制。更重要的是，保羅在這章中對先知講道的描述，與現代教會中的「釋經式講道」（expository preaching）有相當大的重疊——二者都是在聖靈感動下傳達神的話語，目的是造就、安慰、勸勉聽眾。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">三、初代教會崇拜的形式與現代教會的反思</h4>
              <p className="text-gray-700 leading-relaxed">
                哥林多前書第十四章26節描述的初代教會崇拜，具有強烈的「參與性」（participatory）特徵：「你們聚會的時候，各人或有詩歌，或有教訓，或有啟示，或有方言，或有翻出來的話。」這與現代教會高度「觀眾化」（spectator）的崇拜模式形成鮮明對比。禮儀學家(liturgical scholars)指出，現代教會的崇拜形式深受中世紀天主教大彌撒形式的影響，信眾大多是被動的觀眾，只有被按立的神職人員才能主持。宗教改革雖然在神學上強調「萬民皆祭司」，但在崇拜形式上的改革並不徹底。貴格會（Quakers）的沉默等待式崇拜、以及弟兄會（Brethren）傳統中的「開放式聚會」（open meeting），是較接近哥林多前書十四章模型的嘗試，但也面臨質量控制和方向引導的挑戰。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">四、衛斯理復興運動與「有序的屬靈熱情」</h4>
              <p className="text-gray-700 leading-relaxed">
                十八世紀的衛斯理復興運動（Wesleyan Revival）提供了一個寶貴的歷史案例，展示了聖靈的感動與教會秩序如何並存。約翰·衛斯理的戶外佈道和小組聚會（class meetings）帶來了巨大的屬靈復興，同時伴隨著各種情緒和身體反應；但衛斯理始終堅持對這些現象進行神學辨別，拒絕讓「超自然感動」成為脫離理性和秩序的藉口。他建立了嚴格的班會制度，要求信徒在小組中彼此問責，並接受小組長的靈性牧導，這正是「先知的靈原是順服先知的」（林前十四32）在歷史中的具體實踐。歷史學家D. Bruce Hindmarsh認為，衛斯理的成功正在於他既不壓制屬靈的火熱，也不讓它失去控制，展現了保羅在哥林多前書所追求的「凡事都要按著次序，照規矩行」（40節）。
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
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">1.</span>
              <p className="text-gray-700">保羅說，追求恩賜要以「先知講道」為優先，因為它能造就他人，而非只造就自己。在你的信仰追求中，你更傾向於追求那些使你個人得益處的事，還是那些能造就他人的事？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">作者說，這段經文處理的是「好與更好的分別，而不是好與壞的區別」。你認為在你的教會文化中，信徒是否能以「更好」而非「禁止/允許」的框架來討論方言和先知恩賜？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">保羅說在聚會中要「顧及不信者的反應和益處」。你所在的教會聚會，在設計和進行方式上，是否有考慮到對初來者或不信者是否友善？有什麼可以改進的地方？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">「先知的靈原是順服先知的」（32節）——這意味著真正的聖靈感動不會讓人失去理智或控制。你認為什麼樣的表現可以幫助我們辨別某個屬靈現象是來自聖靈還是人的情緒？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">作者說有些華人信徒對先知資訊趨之若鶩，是因為他們以為先知有直通神的捷徑。你是否有過用先知的話來代替自己向神尋求的情況？這有什麼危險？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">約翰·衛斯理說復興運動中信徒常犯的嚴重錯誤就是過度熱心。你在信仰生活中是否曾有過「過度熱心」的經驗？那次經驗帶給你什麼教訓？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">7.</span>
              <p className="text-gray-700">保羅說基督徒聚會的要點是讓人看到「神在信徒中間」。回顧你最近參加的教會聚會，你覺得有沒有讓你真實感受到神的同在？影響這種感受的最大因素是什麼？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 評估自己使用恩賜的出發點</h4>
              <p className="text-gray-700 mb-2">保羅的核心挑戰是：你在使用恩賜時，目的是「造就自己」還是「造就他人」？這週做一個誠實的評估：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>回顧過去一個月你在教會或小組中的服侍，有哪些是主要為自己的滿足感而做的？</li>
                <li>想一件你本來不想做、但若做了能明顯造就別人的服侍，做出具體的計劃</li>
                <li>在禱告中求神更新你服侍的動機，讓「造就他人」成為你的第一考量</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 以「慎思明辨」的態度聆聽屬靈資訊</h4>
              <p className="text-gray-700 mb-2">保羅要信徒對先知資訊「慎思明辨」，不盲目接受。本週在接受任何屬靈引導時，學習這樣的辨別流程：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>這資訊是否與聖經的整體教導一致？</li>
                <li>這資訊是否與我所認識的神的性情一致（祂是一位帶來生命、和平和喜樂的神）？</li>
                <li>這資訊是否被其他敬虔的弟兄姊妹所確認？</li>
                <li>如果全部通過，再考慮是否順服行動</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💬 在聚會中主動顧及「他人的益處」</h4>
              <p className="text-gray-700 mb-2">保羅的原則是「凡事都當造就人」。在下次教會聚會或小組中，主動實踐：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>在分享時，刻意問自己：「我現在說的這些話，對在場的其他人有什麼益處？」</li>
                <li>留意聚會中是否有初來者或不熟悉的人，主動接待和解釋</li>
                <li>在聚會結束後，找一位你覺得需要關心的肢體，花五分鐘與他們交談</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">⏰ 練習「有序的熱心」</h4>
              <p className="text-gray-700 mb-2">保羅說「凡事都要按著次序，照規矩行」，衛斯理的教訓是防止「過度熱心」。在你熱切渴慕神的同時，練習一種「有根有基的屬靈熱情」：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>在每天的靈修中，不只讓自己情緒高漲，也要讓理智和聖經的教導去塑造你的熱情</li>
                <li>找一位你信任的屬靈長輩或弟兄姊妹，定期分享你的屬靈狀態，讓他們成為你的問責者</li>
                <li>在做任何重大的屬靈決定之前，花時間禱告和等候，而不是立即行動</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 leading-relaxed text-lg">
                主啊，感謝祢在這章的教導，提醒我：追求恩賜的最高目的，是造就他人，而非滿足自己。求祢讓我在每一次的聚會中，心裡的第一個問題不是「我能得到什麼」，而是「我能貢獻什麼，能讓弟兄姊妹和不信的人看見祢」。求祢也保護我的心，使我不盲目追求熱烈的屬靈感受，而是在聖靈的引導下，以有序、有愛、有智慧的方式事奉祢和服侍人。讓我成為一個使會眾能俯伏敬拜、感受到「神在你們中間」的事奉者。阿們。
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
