import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book34Ch12() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-700 to-teal-700 bg-clip-text text-transparent">第十二章</h1>
        <h2 className="text-xl font-semibold text-gray-700">當我們不接納善與惡</h2>
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

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">一、當我們不接納善與惡</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                無論你喜歡或不喜歡，我們生活在不完美的世界中。我們都知道世界不只有善。幸運地，世界也不只有惡。世界混和著善與惡。人若不能面對這個事實，會有下列的問題產生。
              </p>

              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">完美主義</span>——是極端要求自己、別人及世界達到完美。每件事都要沒有缺點，否則就不好。我們在工作中、關係中、感覺中隨處可見完美主義者。完美主義要求墮落以前的情形，拒絕任何不好的人或事。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">理想主義</span>——這是完美主義的另一個版本，是浪漫的，看不出實際的惡。理想主義帶著粉紅色眼鏡看世界。每一件事都美好。他們可能落在非常不好的光景中，因為他們不承認的惡，以後可能抓住他們。舉例而言，一個女人將情人理想化，對他嚴重的性格缺點完全盲目。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">無法忍受惡</span>——這是不聖潔的任何事都拒絕。這種法利賽人心態是違反人性的。這種「我比你聖潔」的徵狀，使惡不被接納不被容忍。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">無法忍受軟弱</span>——人的弱點被拒絕，因為它不理想。為了像神，無法忍受弱點是一種很殘酷的分裂。它導致各種關係的破壞，產生對能力不足的恨惡。這其實是一種驕傲，因為我們都是軟弱的，而在我們的軟弱上，神的力量得以彰顯。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">無法忍受負面感覺</span>——這種對負面感覺的迴避，有兩方面：有些人避開不愉快的感覺，像怒氣、悲傷、失望，有些人根本否認他們有這些感覺。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">情緒問題</span>——這些是有關感覺和情緒的問題。沮喪與過分情緒化都有可能起源於不能處理負面感覺。如果人不會處理悲傷和怒氣，他們無可避免地會經歷到某種情緒問題。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">自我形像問題</span>——人要對自己的感覺好，也就是要有好的自我形像，唯一的辦法就是真實的自我被無條件的愛。當人不能接受善與惡，他們無法把自己不夠理想的部分帶入關係中，不能讓那一部分的自己被接納。如此，他們不會有正面的自我形像，因為他們太害怕不好。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">焦慮和恐慌</span>——源於負面情況之可能被發現。有人焦慮是因為怕別人會發現他們的不好。有人恐慌是因為發現衣服上有塊污點。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">飲食問題</span>——飲食失控或濫用藥物的原因，可能來自沒有解決的負面情緒。人們以飲食、藥物、酒精來麻痺他們的情緒。比如，對失敗或失落的傷痛，他們不去處理，反而以酒精來逃避。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">自戀</span>——簡單地說，就是對自己的外觀、舒適、重要、能力，過分有興趣。自戀者對自己有一種既有的理想形像。他們太專注於自己的理想形像，以致他們失去了真我。生活變成一連串支持這理想的活動。愛不在其中。只有崇拜才算。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">罪惡感</span>——如果人不能承認自己的錯誤，他們無法把真實的自我帶入與神與人的關係中。他們不能面對良心的控告，也永不可能達到不被定罪的情況。他們從未經驗過「完全被接納」。因此，罪惡感折磨著他們。他們被自己的好與壞的問題充滿，而不能關心自己與神與人的相愛關係。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">性關係的沉溺</span>——許多有強迫性性行為者，是在逃避沒有處理的痛苦和失落的理想。他們在尋找性方面的理想，或以性行為來對付痛苦。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">破裂的關係</span>——各種關係的破壞，不論對人、對工作、對配偶，都是善惡問題的表徵。一開始，對這些人而言，某些是好的，但當壞的出現，他們就破壞關係，換工作、或離婚。他們不能理解一個人可以好壞並存。他們看人只有全好或全壞。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                <span className="font-semibold">過度的憤怒</span>——把人分為好人壞人的人會有過度憤怒的情形。他們忍受挫折的程度較低。當一些不好的事發生，沒有好的事去抵銷它。他們所相處的人，一下子會變成敵人，他們的情緒也常是負面的。他們並沒有愛來安撫怒氣。
              </p>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">全惡的我</span>——有時候人以為他全然是壞的。他們無法看到自己的優點，只看到缺失。<span className="font-semibold">全善的我</span>——全善的人對錯誤非常有防衛性。他們也許同意自己也和別人一樣是罪人，但他們好像沒有屬於自己的錯失。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-cyan-800 text-lg mb-3">二、解決善惡問題的障礙</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們扭曲對自己、對別人、對神的看法，以致我們在解決善惡上有一些障礙。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700">扭曲的思想——對自己的看法</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「我不值得愛。」不敢把真我顯示出來的人，有一種從童年深植在心中的思想，就是我不值得愛。他們不明白，我們值不值得愛，在於愛我們的對象，而不在於我們的功勞。一個男人提到他的支持團體時說，他不值得他們的愛。我說對，我們都不值得別人愛，我們不能賺得愛。愛是別人給的。我們可以贏得贊同，但不能贏得愛。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「我比別人更壞。」許多不會對同樣情況者敞開的人，會以為自己比別人壞。他們不會找到同病相憐的團體。他們以為自己是唯一像聖經中所說的：「從人心裡發出惡念、苟合、偷盜、兇殺、姦淫、貪婪、邪惡、詭詐淫蕩、忌妒、謗讟、驕傲、狂妄。」（可七：21-22）他們覺得別人都不像他們這麼墮落。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「我有一些不該有的感覺。」有些人定罪自己的不達理想的感覺，如需要、悲傷、性慾、軟弱。這些感覺本身不是罪，卻被理想的自我斷定為壞的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「我應該比現在更好。」有這種思想的人低估了墮落的影響。他們不知道墮落對人的影響有多深。他們好像覺得不應該如此。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「我非常理想。」很少人會如此坦白地說出來，但很多人真相信這樣。他們覺得自己是特別的，一般人的壞處他們不會有。他們似乎比較超越。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「我不可原諒。」有些人覺得自己犯了不可饒恕的罪。他們覺得自己的罪超過人類的罪，也超出神赦免的範圍。他們不知道，唯一不可原諒的罪就是不想被原諒。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「我不能忍受不完美的世界。」這個扭曲的思想使許多人成為完美主義的奴隸。他們認為在一個不理想的世界中，他們不可能快樂。他們因為太失望，就拒絕任何不理想的，以致錯失了真實的世界。
              </p>
              <p className="text-gray-700 leading-relaxed">
                「我沒有力量或才能。」有些人認為他們天生沒有一點長處。聖經教導我們，我們墮落了，但它也教導我們，我們都有力量和才能。恐懼和扭曲使人以為他們沒有，所以他們放棄不顧。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700 mt-4">扭曲的思想——對別人的看法</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「他們會為我的不好而不喜歡我。」為善惡掙扎的人覺得，他們的不好會使人不喜歡他們。他們把別人視為拒絕自己的父母，很快批評很慢關愛。這樣的恐懼使他們不敢敞開自己，除非他們經驗到新的不同。因此，向別人坦承自己是非常重要的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「他們會因我的軟弱攻擊我。」有些人認為他們的軟弱易受傷，會帶來嚴重的懲罰。好像有人隨時會出現來打擊他們，正如他們父母對待他們的樣子。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「他們不會有這種感覺。」人會將別人理想化，以為對他講話的人是完美的。他們怕自己不夠完美。如果我們知道別人也是罪人，會讓生活容易不少。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「如果他們發現……他們會離開我。」潛在怕被遺棄恐懼，使他們追求完美。他們與人的關係太不穩固，以致他們覺得自己的一點錯誤就會使關係破裂。事實上，向人敞開自己的弱點能穩固我們的人際關係。隱藏弱點反而使關係薄弱。這在許多婚姻中正是如此。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「如果我不是這麼壞，他們會不喜歡我。」有些人為了不要別人羨慕，而發展出一種自己是很壞的身分。他們隱藏自己的優點，好像只有如此才能讓人喜歡。他們怕別人會忌妒他們的成就，因此就埋藏起來。
              </p>
              <p className="text-gray-700 leading-relaxed">
                「我必須完美，他們才會尊敬我的基督徒生活。」這是一個異端。人應該尊崇基督，而非我們。我們要讓人知道耶穌是救主，拯救我們這種人，所以他們也會被引導進入恩典，而非屬靈的自我陶醉。聖經舉出許多領袖的失敗，而顯出神的恩典能力，非人的能力。要求屬靈的尊敬是怕失面子，並拒絕恩典和饒恕。
              </p>

              <p className="text-gray-700 leading-relaxed mb-1 font-semibold text-cyan-700 mt-4">扭曲的思想——對神的看法</p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「神期望我是全善的。」沒有比這更扭曲更不合真理，卻又如此普遍的看法了。神說我們是罪人，他知道我們的本體（詩一〇三：14）。我們必須從神的角度來看自己，一方面謙卑以致脫離完美主義，一方面因他的恩典心存敬畏。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「當我好的時候，神接納我；當我壞的時候，神拒絕我。當我又變好，他會再接納我。」這種雲霄飛車式的看法，是不瞭解神一次完成的救贖。我們的地位是安穩的，因此我們可以顯露我們的軟弱。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「神被我所作的事震驚。」有些人覺得自己所想所作令神震驚。事實是，神無所不知，他知道我們的罪和軟弱，他仍然愛我們救我們。沒有什麼會使他震驚。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「如果我做了……神會拒絕我。」聖經教導我們，我們不會被拒絕。有些人一直是有條件地被愛，他們不能想像什麼叫做「總不被丟棄」（約六：37）。他們生活在與神關係斷絕的恐懼中。
              </p>
              <p className="text-gray-700 leading-relaxed mb-2">「神會記錄我的錯誤。」神是時時在看顧我們，但他不是要記錄我們的錯誤來罰我們。東離西有多遠，他使我們的過犯離我們也有多遠：</p>
              <div className="border-l-4 border-cyan-200 bg-cyan-50/50 pl-4 py-2 my-3">
                <p className="text-gray-700 italic">「基督既然一次被獻，擔當了多人的罪，將來要向那等候他的人第二次顯現，並與罪無關，乃是為拯救他們。」（來九：28）</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                「神認為不成熟是壞的。」這樣認為的人忘了，神瞭解生長過程，它需要時間。他看我們就像父親看孩子一樣。我們在成長，他並不要求完美。耶穌預先知道彼得會失敗，也會再回頭。不成熟不是道德上有問題，年輕不是不好，年輕就是年輕。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「神不能體會我的掙扎。」人有時會想，神是神，他不瞭解人的敗壞與軟弱。這是耶穌道成肉身的原因之一。他是大祭司，並非不能體恤我們的軟弱（來四：15）。他可以體會我們的感覺，但是他不會犯罪。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這些扭曲的思想，使我們的真我成為奴隸。撒但用各種伎倆叫我們相信謊言，將我們的生命經由謊言和扭曲的想法，竊取而去。我們需要面對謊言，看看它們從何而來，奉主大能的名斥退它們。
              </p>
              <p className="text-gray-700 leading-relaxed">
                這些扭曲的思想都從人際關係學習而來，而這些關係必須重新學習，我們如何被人對待，會深植在我們裡面，而我們必須把它放在神如何對待我們的關係中，而不是舊有的關係中。這正如別的事一樣，不是沒有風險和痛苦的。然而，真正的醫治和能力，會從一個安全的關係中發展出來，如果你肯向對方承認自己，表白自己。在這個關係中黑暗會變成光明，而黑暗的部分會找到饒恕和接納。
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
                '無法接納善惡並存的世界，會產生近二十種表面問題（完美主義、理想主義、無法忍受軟弱或負面感覺、自我形像問題、焦慮恐慌、飲食問題、自戀、罪惡感、性沉溺、破裂的關係、過度憤怒、全善或全惡的自我認知等）——這些都是同一個根本問題的不同面具。',
                '「無法忍受軟弱」本質上是一種驕傲：因為我們都是軟弱的，而神的力量恰恰在人的軟弱上彰顯，拒絕承認自己的軟弱，其實是拒絕神彰顯恩典的方式。',
                '對自己扭曲的思想（如「我不值得愛」「我比別人更壞」「我非常理想」）往往從童年的經歷深植心中；作者特別澄清：值不值得被愛，取決於愛我們的那一位，而非我們自身的功勞——愛從來不是靠賺取的。',
                '對別人扭曲的思想（如「他們會因我的軟弱攻擊我」「如果他們發現……他們會離開我」）常使人隱藏弱點以求關係穩固，但事實恰恰相反：向人敞開弱點能穩固人際關係，隱藏弱點反而使關係薄弱。',
                '對神扭曲的思想（如「當我好，神接納我；當我壞，神拒絕我」的雲霄飛車式想法）源於不瞭解基督一次獻祭、永遠成就的救贖；神了解我們的軟弱（來四：15），也了解成長需要時間，不會因我們的不成熟而定我們的罪。',
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
              <h4 className="font-semibold text-gray-800 mb-2">自戀作為對「真我」的替代</h4>
              <p className="text-gray-700 leading-relaxed">
                本章對自戀的定義值得深思：自戀者不是「太愛自己」，而是太專注於維護一個理想化的自我形像，以致失去了真實的自己——「生活變成一連串支持這理想的活動，愛不在其中，只有崇拜才算」。這個定義呼應精神分析學者海因茨·科胡特（Heinz Kohut）對自戀型人格的理解：自戀的核心不是自信滿滿，而是脆弱的自我需要不斷靠外在讚美來維持，本質上是對真實自我缺乏安全依附的一種代償。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「全善的我」防衛性背後的恐懼</h4>
              <p className="text-gray-700 leading-relaxed">
                本章描述「全善的我對錯誤非常有防衛性」，這種表面上的自信滿滿，實際上往往是對「全惡的我」恐懼的另一面反應——因為內心深處相信一旦承認任何一點錯誤，就會全盤墜入「全惡」的自我認知，所以必須拚命防衛。這解釋了為什麼有些人特別無法接受批評：不是因為他們驕傲，而是因為他們的自我認同建立在一個非黑即白、經不起任何裂縫的脆弱結構上。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「隱藏弱點反而使關係薄弱」的關係辯證</h4>
              <p className="text-gray-700 leading-relaxed">
                本章對婚姻關係的觀察極具洞見：許多人以為隱藏自己的軟弱能保護關係，實際上卻使關係停留在表面而脆弱。這與研究婚姻穩定度的學者（如約翰·高特曼John Gottman）的發現不謀而合——能夠在關係中安全地展現脆弱、道歉、修復裂痕的伴侶，關係韌性反而更強；而總是維持完美形像、不敢示弱的關係，往往一旦出現真正的裂縫就難以修復，因為雙方從未練習過「暴露弱點而仍被接納」的經驗。
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
              '本章列出近二十項無法接納善惡並存的症狀，哪幾項最貼近你目前或過去的經歷？',
              '你有沒有把某個人或某段關係「理想化」，事後才發現自己對明顯的問題視而不見？',
              '重讀「對自己的看法」中列出的扭曲思想，哪一句最像你內心真實的聲音？它可能源自哪段成長經驗？',
              '你比較容易落入「全善的我」還是「全惡的我」的自我認知？具體舉一個最近的例子。',
              '你有沒有發現自己對神也存在某種扭曲的想像（如覺得神時好時壞地對待你、神會被你的軟弱震驚）？',
              '「隱藏弱點反而使關係薄弱」對你目前的一段重要關係（婚姻、友誼、與神的關係）有什麼提醒？',
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
              <h4 className="font-semibold text-green-700 mb-2">📋 對照症狀清單自我檢視</h4>
              <p className="text-gray-700 mb-2">
                重讀本章列出近二十項症狀，圈出你目前正在經歷的，然後追問：這背後對應的是哪一句「對自己／對別人／對神」的扭曲思想？
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🗣️ 練習一次向人示弱</h4>
              <p className="text-gray-700 mb-2">
                本週在一段你信任的關係中，主動說出一個你平常會隱藏的弱點或錯誤，觀察對方的反應，以及這對關係親密度的影響。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 默想希伯來書四章15節</h4>
              <p className="text-gray-700 mb-2">
                默想「並非不能體恤我們的軟弱」，思想耶穌道成肉身、親自經歷人性軟弱這件事，對你「神會不會因我的軟弱而震驚或拒絕我」的恐懼有什麼安慰。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，求祢光照我用來逃避善惡並存事實的各種面具——不論是完美主義、理想化別人，還是把自己看成全善或全惡。求祢也光照我對祢扭曲的想像，讓我明白祢的接納不是雲霄飛車，而是因著基督一次獻上、永遠堅立的救贖。求祢幫助我在安全的關係中，學習誠實地展現軟弱，也學習用祢的恩典和真理，同時看待自己與他人身上的好與壞。奉耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
