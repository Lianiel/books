import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Waves, Star, Search, HelpCircle, Check } from 'lucide-react';

const quote = "border-l-4 border-emerald-300 bg-emerald-50 pl-4 py-3 mb-3";
const quoteText = "text-emerald-800 leading-relaxed italic";

export default function Book40Ch1() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-800 to-orange-900 bg-clip-text text-transparent">第一章</h1>
        <h2 className="text-xl font-semibold text-gray-700">基督教倫理學概論</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          「敬畏耶和華是知識的開端。」（箴1:7）
        </p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Waves className="w-5 h-5 text-amber-800 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">一、何謂「基督教倫理學」？</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「倫理」希臘文是「Ethics」，也可繙譯為「習俗」。所以，「倫理」是指「人類從習俗演變而來的規條或道德規範」。華人文化中有所謂的「五倫」，指的就是「君臣、父子、夫婦、兄弟、朋友」等五種關係的道德規範。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「基督教倫理學」的標準不是從習俗來的，也不是人類約定俗成的，而是指「以整本聖經為標準與根基，來研究怎樣的品格、行為、動機為神所認可或不悅」。換言之，「基督教倫理學」就是整本聖經的生活應用。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                學習基督教倫理學能幫助我們，在現今如此複雜的社會環境中，如何恰當而正確地，按聖經的教導過基督徒的生活。我們面臨一個複雜多變的社會，如何按聖經的教導而活，是一個重要的課題，按著聖經教導所做出的行為也決定了每一個基督徒不同的生活模式。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                許多基督徒會問很多生活的問題：例如：「基督徒可不可以墮胎？」「基督徒可不可以避孕？」；「基督徒可不可以抽煙？」；「基督徒可不可以喝酒？」；「基督徒可不可以吃拜過的東西？」；「基督徒可不可以吃血？」；「基督徒可不可以化妝？」；「基督徒可不可以去夜店？」；「基督徒可不可以參觀廟宇？」；「基督徒可不可以看鬼片？」；「基督徒可不可以買股票？」；「基督徒可不可以買樂透？」；「基督徒可不可以離婚？」；「基督徒可不可以跪拜遺體或遺像？」；「基督徒可不可以貸款？」；「基督徒贊成安樂死嗎？」；「基督徒贊成廢除死刑嗎？」；「基督徒贊成同性戀嗎？基督徒對於同性婚姻的看法如何？」；「基督徒贊成代理孕母嗎？」；「基督徒對於通姦除罪有何看法？」；「基督徒可不可以染髮？」；「基督徒可不可以刺青？」；「基督徒姐妹可不可以穿著暴露？」等，我們如何面對這些問題呢？聖經怎麼看這些問題呢？
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                利未記第十章第10節說：「使你們可以將聖的、俗的，潔淨的、不潔淨的，分別出來」；保羅也說：「使你們無可指摘，誠實無偽，在這彎曲悖謬的世代作神無瑕疵的兒女。你們顯在這世代中，好像明光照耀，將生命的道表明出來，叫我在基督的日子好誇我沒有空跑，也沒有徒勞」（腓2:15-16）。我們生活在彎曲悖謬的世代中，信主前所做的事，必須以聖經的標準重新衡量，並分別為聖，作神無瑕疵的兒女。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">二、平衡的基督教倫理學</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                倫理的問題需要留意的就是：如何不會「太過」，也不會「不及」。「不及」可能達不到神的標準；但「太過」卻會造成基督徒生活上許多的困擾。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                例如，有人主張基督徒不能當兵，因為當兵就有可能會「殺人」，而違反了「第六誡」。然而，這樣的教導若是在「募兵制」的國家可能沒有太大的問題；但在「徵兵制」的國家，服兵役是國民應盡的義務，拒絕服兵役便會招致牢獄之災。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                又例如，曾經有人教導基督徒不可以向國父遺像敬禮，認為這是拜偶像，甚至他們教導，不可以向國旗敬禮，因為國旗上有日月星辰，向國旗敬禮違反第二誡！這樣偏激的教導，曾經導致許多軍中的弟兄被開除，甚至被判刑。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                又例如，有教會教導基督徒不能避孕，也導致許多基督徒沒有節育，兒女過多而造成家庭的負擔等。因此，平衡教導的基督教倫理學非常重要！
              </p>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">三、注重倫理學的規範是否「太律法」？</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                許多基督徒批評那些按照神的規範行事的基督徒「太律法」或「律法主義」。甚至有許多基督徒是「非律主義」，就是認為我們不是靠行律法得救，我們是「因信稱義」，所以，不要太注重律法和規範。因此，我們需要明白：何謂「太律法」？何謂「律法主義」？
              </p>
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">一、「律法主義」是指「所定的標準超出神的標準」</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  這也是耶穌常常責備法利賽人的。例如，神只要求「安息日不能作工」，但有人卻定出嚴苛的安息日規條，他們規定安息日只能走多少里的路程；安息日只能拿多少重量的東西，甚至規定安息日不能按電梯樓層按鈕等，這就是「太律法」或「律法主義」！
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">二、「律法主義」是指「死守律法的形式而忽略了律法的精神」</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  耶穌也責備法利賽人只注重外面的形式，而忽略了律法真正的精神，這也是「律法主義」。
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">三、「律法主義」是指「試圖以要求、規定、定罪、監督、處罰的方式，使人達到律法的要求，或試圖靠自己的力量達到律法的要求」</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  耶穌教導我們，律法只能叫人知罪，只有愛、赦免及接納能使人「不再犯罪」（約8:1-11）耶穌說：「莫想我來要廢掉律法和先知，我來不是要廢掉，乃是要成全。我實在告訴你們，就是到天地都廢去了，律法的一點一畫也不能廢去，都要成全」（太5:17-18）。耶穌來不但沒有廢掉律法，而且是「成全律法」、堅固律法。因此，耶穌說：「我告訴你們，你們的義，若不勝於文士和法利賽人的義，斷不能進天國」（太5:20）。保羅也說：「這樣，我們因信廢了律法嗎？斷乎不是！更是堅固律法」（羅3:31）。神的心意是透過「愛的激勵」及「聖靈的幫助」，使我們達到律法的要求。以西結先知預言：「我必將我的靈放在你們裡面，使你們順從我的律例，謹守遵行我的典章」（結36:27）。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">四、學習倫理學應有的態度</h3>
              <div className="space-y-3">
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-amber-800">一、學習倫理學不能用來批判別人，而是用在自己身上，並且用來幫助別人。</span>
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-amber-800">二、我們要存謙卑的心面對不同的看法。</span> 保羅教導我們，許多倫理學的問題無關乎救恩及道德，我們應當學習了解並尊重別人的意見。保羅說：「有人信百物都可吃；但那軟弱的，只吃蔬菜。吃的人不可輕看不吃的人；不吃的人不可論斷吃的人；因為神已經收納他了。有人看這日比那日強；有人看日日都是一樣，只是各人心裡要意見堅定。守日的人，是為主守的；吃的人是為主吃的，因他感謝神；不吃的人，是為主不吃的，也感謝神」（羅14:2-6）。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-amber-800">三、聖靈的果子是結出來的，不是要求出來的。</span> 所以，箴言雖然教導我們許多「處事、處人的智慧和訓誨」，但它一開始就強調：「敬畏耶和華是知識的開端」（箴1:7），唯有敬畏神的生命，才願意領受基督教倫理學的一切教導，活出合神心意的生活來。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-amber-800">四、倫理學必須配合輔導學才是真正的牧養。</span> 只有愛才能遮罪，用律法來要求，常只能引起更多彼此律法的要求。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">五、基督教倫理學與一般倫理學的差異——倫理學的三個觀點</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                倫理的問題很複雜，有時候無法用一句話就能回答完整，甚至也無法有一個統一的標準答案。因此，處理倫理的問題需要顧及各種不同的角度及處境。從哥林多前書第八到十章我們看見，保羅用了三章的篇幅來處理「可否吃祭物？」的問題。本章我們就從保羅處理祭物的問題作為範例，來學習如何面對各樣基督徒倫理的問題。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們從保羅處理「可否吃祭物？」的問題看見，處理倫理問題必須透過三個觀點來處理，那就是「準則、處境及動機」。
              </p>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">倫理學的第一個觀點——「準則」</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  所謂「準則」就是「面對一個倫理的問題，聖經所啟示永恆不變的行事原則是什麼？」我們從哥林多前書看見保羅從四個原則衡量一件倫理的問題：
                </p>
                <div>
                  <h5 className="font-semibold text-amber-700 mb-2">一、知識原則</h5>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    針對某事，神的看法如何？哥林多前書八章1節保羅說：「論到祭偶像之物，我們曉得我們都有知識。但知識是叫人自高自大，惟有愛心能造就人」。所以第一個原則是「知識原則」，所謂「知識原則」就是：「聖經中對這件事，有啟示什麼樣的真理知識嗎？」
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-amber-700 mb-2">二、自由原則</h5>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    什麼是「自由原則」呢？有兩方面的意義：
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    （一）不受限制：基督徒的生活是自由的，是不受「不可吃、不可摸」的規條所限制的。保羅說：「因為神的國不在乎吃喝，只在乎公義、和平、並聖靈中的喜樂」（羅14:17）。基督徒在吃、喝的事上，應當活出神國兒女的自由，吃喝的問題不是最重要的，神的兒女最重要的是活出在聖靈中的喜樂。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    （二）不受轄制：基督徒一方面要活出在基督徒「不受限制」的自由，但另一方面也要活出「不受轄制」的自由來。保羅說：「凡事我都可行，但不都有益處。凡事我都可行，但無論那一件，我總不受他的轄制」（林前6:12）。真正的自由必須是「不受某事物或某人轄制、捆綁」。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    所以，所謂「自由原則」，一方面乃指我們應活出基督徒自由的生活來；但另一方面，強調要活出基督徒不受人、事、物捆綁的自由來。
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-amber-700 mb-2">三、愛心原則（或稱「見證原則」）</h5>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    所謂「愛心原則」強調的是，雖然基督徒有自由作任何事，但基督徒不可以絆倒弟兄，我們甚至願意為了愛心而放棄自己的自由。保羅說：「論到祭偶像之物，我們曉得我們都有知識；但知識是叫人自高自大，惟有愛心能造就人」（林前8:1）；又說：「只是你們要謹慎，恐怕你們這自由竟成了那軟弱人的絆腳石」（林前8:9）；「所以，食物若叫我弟兄跌倒，我就永遠不吃肉，免得叫我弟兄跌倒了」（林前8:13）；「我憑著主耶穌確知深信，凡物本來沒有不潔淨的，惟獨人以為不潔淨的，在他就不潔淨了。你若因食物叫弟兄憂愁，就不是按著愛人的道理行。基督已經替他死，你不可因你的食物叫他敗壞」（羅14:14-15）。基督徒可以因為愛心而放棄自由。
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-amber-700 mb-2">四、造就原則</h5>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    所謂「造就原則」就是，我們做每件事時問自己：「這件事能造就自己或別人嗎？」保羅說：「凡事我都可行，但不都有益處。」（林前6:12）；又說：「凡事都可行，但不都有益處。凡事都可行，但不都造就人」（林前10:23）。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    這是倫理學的第一個觀點：「準則」。當我們面對每一件事情，我們都用這四個原則來檢視：「知識原則」、「自由原則」、「愛心原則」及「造就原則」。
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">倫理學的第二個觀點——「處境」</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  我們需要按照不同的時間、場合及社會環境來運用以上四個原則。從哥林多前書第八～十章我們看見，保羅在處理「可否吃祭物？」的問題時，他會考慮到不同的「處境」。例如，市場上可能拜過的食物，未信者家裡可能拜過的食物，寺廟舉辦的筵席，或者有良心軟弱的弟兄在場時的筵席等。不同的處境保羅會有不同的面對方式。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  釋經學有一個原則就是，當我們要應用聖經時，我們需要留意「聖經中的人物事例或榜樣，必須先脫除文化背景，找出其基本原則，並依照我們的文化背景加以應用」。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  聖經中的教導分成兩類：一類是「命令」，一類是「榜樣」。「命令」就是聖經明文規定的律例，例如：孝敬父母、不可姦淫、不可殺人、不可休妻，當納十一等。這些「命令」讓我們很清楚神的心意和原則是什麼。但是「榜樣」，也就是聖經記載聖徒們的行蹤，我們當如何效法呢？我們必須先「脫除」文化背景的因素，找出聖靈藉著這些事蹟要教導我們的「屬靈原則」，這些「屬靈原則」是「共同的、基本的屬靈原則」，是「放諸四海皆準」的原則，是不管那個時代的人都應當遵行的原則，來應用在我們現今的時代中。這是學習聖經的「榜樣」很重要的原則。
                </p>

                <div>
                  <h5 className="font-semibold text-amber-700 mb-2">〈例一〉凡物公用</h5>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    使徒行傳二章44-45節：「信的人都在一處，凡物公用；並且賣了田產家業，照各人所需用的分給各人」。這裡提到這個新生的教會是「凡物公用」的教會。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    歷世歷代常有許多火熱的教會，嘗試建立「凡物公用」的教會，但最後都失敗了。「凡物公用」真的是上帝對教會的心意嗎？首先，我們當留意，除了使徒行傳前面記載教會凡物公用之外，所有新約聖經記載的教會，都沒有「凡物公用」，否則，保羅就不需要對哥林多教會募款了。可見「凡物公用」只是教會初期的特殊需要。面對聖經的榜樣，我們必須先「脫除」文化背景因素，找出「一般的屬靈原則」。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    初期的教會「凡物公用」有幾個可能的原因：第一個原因是因為教會是從「五旬節」聖靈降臨開始的，當時有很多猶太人從各地來到耶路撒冷，他們聽見福音就信主了，因為渴慕，他們就留下來繼續學習使徒的教訓，因此，大家就凡物公用。另外，當時他們還有一些人，因為信主而被家人趕出家門，所以，教會就接待他們，大家在一起，凡物公用。這兩個原因都是「特殊情況」，我們研讀這些記載時，不能完全按照「它的形式」來學習，而是找出聖靈藉著這些記載，要教導我們的「屬靈原則」。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    「凡物公用」的「基本精神」是什麼呢？二章45節：「並且賣了田產家業，照各人所需用的分給各人」；四章32節：「那許多信的人都是一心一意的，沒有一人說他的東西有一樣是自己的，都是大家公用」；34-35節提到：「內中也沒有一個缺乏」；「照各人所需用的，分給各人」。「凡物公用」的基本的精神就是：教會要彼此互相幫助，讓每一個有需要的人都得著滿足，讓教會中沒有一個是缺乏的。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    今天在教會中，我們不可能實行「凡物公用」的「形式」，但是我們需要抓住它的「精神」，當弟兄姊妹有需要時，我們要同心合意一起幫助他們，讓他們沒有缺乏，這個原則是很重要的。
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold text-amber-700 mb-2">〈例二〉婦女蒙頭</h5>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    哥林多前書十一章提到「婦女蒙頭」的問題，歷世歷代有許多教會要求婦女要「蒙頭」，特別是「講道」時。當我們學習聖經的榜樣時，一定要留意不能只學習「形式」，要學習它的「精神」和「原則」。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    哥林多是漁港，所以當中有很多的妓女，婦女則以「蒙頭」來表明他們是「良家婦女」，因著當時的背景，「女人蒙頭」是聖潔女人的形象。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    哥林多教會有很多婦女，信了耶穌就不願意遵守這些規定，保羅勸告他們：「我們個人蒙召的時候是什麼身份，仍然要守住那個身份」，保羅要求婦女仍然以蒙頭來表明他們的「順服」。所以，「順服」才是蒙頭的「基本精神」，在今天的時代中，我們仍然要求姐妹們要「順服」，但我們已不需要要求她們要「蒙頭」了。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    學習聖經的榜樣時，我們不要照著「形式」來學習，而是找出「基本的原則和精神」來學習。
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold text-amber-700 mb-2">〈例三〉辮頭髮、戴金飾、穿美衣</h5>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    彼得前書三章3節：「你們不要以外面的辮頭髮，戴金飾、穿美衣為妝飾」。彼得教導婦女，不要以辮頭髮、戴金飾、穿美衣為妝飾，這節經文是否也要求，每一個時代的婦女都不可以辮頭髮、戴金飾、穿美衣呢？我們應當思想的仍然是這個教導的「基本精神」。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    在那個時代，女人「辮頭髮、戴金飾、穿美衣」是一種「虛榮」的表現，所以，基本精神在於：「女人不要愛慕虛榮」，而這個原則在不同的時代和地區，會有不同的標準，也許在一個貧窮的農村，女人辮頭髮、戴金飾、穿美衣仍然是一種「虛榮」的形像，但是在現在的大都會中，這些打扮可能就不會這麼嚴重了。
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold text-amber-700 mb-2">〈例四〉跪拜遺體、遺像，或向遺像及國旗敬禮</h5>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    我們應當了解：在華人的文化中，下跪和敬禮是「尊敬」的意思，不一定是把它們當作神明、偶像敬拜。在清朝時，也有宣教士因為拒絕向皇帝下跪而被逐出中國，失去了宣教的機會。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    所以，我們當留意「處境」問題，不要落入拘泥「形式」中，而是有智慧的應用聖經啟示的「原則」和「精神」。
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold text-amber-700 mb-2">〈例五〉基督徒可否染髮？</h5>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    有人考察，染髮源自於日本，是妓女的一種象徵。因為當時道德傳統非常強烈，這些女人害怕道德的譴責，不敢面對道德和輿論，可是她們為了讓嫖客們能辨識出自己的職業身份，因此，就想到了在頭髮上做記號，並染上黃色，使嫖客們一見，就明白她們的職業身份。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    然而，今天染髮已失去這樣的意義，染髮已成為個人的喜好，基督徒不應禁止信徒染髮，也不應彼此論斷。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    保羅說：「吃的人不可輕看不吃的人；不吃的人不可論斷吃的人；因為神已經收納他了」（羅14:3）。這一節可以用這個角度來想：贊成染髮追求流行的人，不可因為對方持保守的態度而輕看對方；而那些站在反對的人，也不可以去論斷，或給對方貼標籤，認定對方是怎樣的人。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    教會的長輩，對於年輕人的穿著與打扮，總是有著很多的意見，但是這些意見，可能年輕人很難接受，甚至認為，為何你們要這樣管我？有人甚至會從對方的穿著與打扮，來認定信徒屬靈與否，因為年輕人喜愛追求時尚，就給他們貼了一個標籤，認定他們不屬靈。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    保羅說：「我憑著主耶穌確知深信，凡物本來沒有不潔淨的；惟獨人以為不潔淨的，在他就不潔淨了」（羅14:14）。原本，羅馬書十四章講的是因為吃的認知，產生了信徒間的不和睦，可以引申到對於流行、染頭髮、留長髮的認知，其實這些東西本身，就沒有所謂的對錯的問題，重點在於「人加諸在其上的眼光與言論」。我們應彼此尊重，不再彼此論斷。
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold text-amber-700 mb-2">〈例六〉可否刺青、紋身？</h5>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    紋身是罪嗎？基督徒可以刺青嗎？那些持反對意見的人常引用利未記十九章28節：「不可為死人用刀劃身，也不可在身上刺花紋。我是耶和華。」然而，幾乎所有解經書都同意，利未記十九章的處境是，上帝不准以色列民去接受或參與周遭鄰邦的異教儀式。對以色列的異教鄰邦來說，刺青有重要的宗教象徵。但如果完全不涉及宗教、迷信或偶像崇拜呢？基督徒可以刺青嗎？
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    如果你認為利未記十九章的禁止紋身，是所有人、在任何環境下都要遵守的，那麼，我們對所有律法的條文也都要遵行不悖。包括頭的兩鬢不可剃，鬍鬚的周圍也不可損壞（27節）；但這對在軍中服役的人來說，根本是不可能的。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    其次，上帝自己會憎惡紋身嗎？以賽亞書四九章16節，神說：「看哪！我將你銘刻在我掌上；你的牆垣常在我眼前」。「銘刻」這個詞，希伯來文的意思是「雕刻」，學者們直接將它翻譯成「我已將你的名字紋刺在我掌上」。當約翰在異象中看到神揀選的十四萬四千人，他們的額頭上受「印」，「寫」了父的名字（啟7:3；14:1）。那些字在希臘原文的意思是「標記」、「戳記」及「銘刻」。保羅也提到這個字，他說「因為我身上帶著耶穌的印記」（加6:17）。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    姑不論先知以賽亞、使徒約翰和保羅是在說隱喻或是別的，有一件確定的事就是，神並沒有反對紋身。因此，我們要小心，不要隨便大筆一揮，就將刺青跟邪惡或罪孽畫上等號。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    現今對大部分的人而言，紋身不過是自我個性與風格表現的管道，就蠻像是衣著、化妝、髮型、塑身和流行配件一樣，他們並不帶有宗教、迷信和悖逆的含意，純粹是美學的考量，它不過就是一種特殊的品味。在台灣，刺青的意義也已漸漸跟染髮、穿耳洞變得差不多。在過去，染髮的都是不良少年，現在，染髮、刺青都是一種特殊的審美品味。刺青文化已漸漸與黑道文化脫鈎。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    刺青其實是一種語言，就像服裝是一種語言一樣。刺青是個人的抉擇，大部分的時候，它既非反映悖逆本質，也不表達宗教傾向。聖經清楚地記載，神所看的遠超越人的外貌而直達內心。我們必須要謹慎，不要單以紋身來評判一個人是否愛主。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    但是，每個想要刺青的人應當問的是「動機」，就是「為什麼要刺青？」若是刻意要違背父母，這就是不好的。就算藝術上的自我表達是可以被接受的，但我們做任何事還是要能榮耀神，並把人的注意力引導到神身上而不是自己。你想要人看見你，還是看見神？你究竟想要透過刺青表達什麼呢？
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    刺青是非常強烈的訊息，表現出一個人的價值觀。刺青近乎是永久性，會跟著你一輩子。基督徒若真想刺青，應藉著刺青表達正面、符合聖經的價值觀。
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold text-amber-700 mb-2">形式與功能</h5>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    在教會事奉，我們也要注意分辨「形式」和「功能」。「形式」不是最重要的，「功能」才是最重要的。例如，當我們禱告時，把眼睛閉起來，這是「形式」，但是，為什麼要把眼睛閉起來呢？是為了幫助我們「專心」。在教會中，我們要留意，不要只注重「形式」，不要只學習「形式」，而忽略了它主要的「功能」。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    有一個人他注意到，每次他的妻子蒸魚時，都把頭和尾巴切掉才放到鍋子裡蒸。有一天，他忍不住了問她：「妳為何每次蒸魚時，都把頭和尾巴切掉，才放到鍋子裡蒸呢？」妻子回答：「你問我，我才想到，我也不知道，因為我看我媽媽都是這樣蒸的」。他們就一起去問媽媽，媽媽也回答說：「你們問我，我才想到，因為我看我媽媽都是這樣蒸的」。他們就再去問外婆，外婆回答：「因為我們那時候鍋子太小了」！
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    這雖然是一個笑話，但也是我們很容易犯的錯誤，就是只學習「形式」，而忽略了「功能」，以致，許多時候，我們就落入「形式化」當中，「功能」已經失去了，我們仍然死守「形式」。因此，在教會中我們要常問：「這個方式要達到什麼功能？」例如，小組教會強調聚會的四個「W」，每一個小組事奉的同工要留意：「四個W要達到什麼功能？」而不是死守形式；又如，教會應當問：「詩班」要達到什麼「功能」？這個「形式」能達到這個「功能」嗎？為何教會要辦佈道大會？這個「形式」能達到佈道的「功能」嗎？是否有更好的「方式」呢？許多時候，教會以為「形式」是神聖不可侵犯的，是不可以改變的，以致教會就落入「死守形式」的情況中，這是我們當留意的。
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold text-amber-700 mb-2">〈美國鐵軌寬度的由來〉</h5>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    經濟學中有個名詞稱為「路徑依賴」，它是類似於物理學中的「慣性」，一旦選擇進入某一路徑（無論是「好」的、還是「壞」的），就可能對這種路徑產生依賴。以下美國鐵軌的故事也許有助於我們理解這一概念，並且加深對其後果的印象。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    美國鐵路兩條鐵軌之間的標準距離是四點八五英尺。這是一個很奇怪的標準，究竟從何而來的？原來這是英國的鐵路標準，因為美國的鐵路最早是由英國人設計建造的。那麼，為什麼英國人用這個標準呢？原來英國的鐵路是由建電車軌道的人設計的，而這個四點八五英尺正是電車所用的標準。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    電車軌道標準又是從哪裡來的呢？原來最先造電車的人，以前是造馬車的，而他們是用馬車的輪寬做標準。那麼，馬車為什麼要用這個一定的輪距離標準呢？因為如果那時候的馬車用任何其他輪距的話，馬車的輪子很快會在英國的老路上撞壞的。為什麼？因為這些路上的轍跡的寬度為四點八五英尺。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    這些轍跡又是從何而來呢？答案是古羅馬人定的，四點八五英尺正是羅馬戰車的寬度。如果任何人用不同的輪寬在這些路上行車的話，輪子的壽命都不會長。我們再問：羅馬人為什麼用四點八五英尺為戰車的輪距寬度呢？原因很簡單，這是兩匹拉戰車的馬的屁股寬度。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    故事到此應該完結了，但事實上還沒有完。下次你在電視上看到美國太空梭立在發射臺上的雄姿時，你留意看，在它的燃料箱的兩旁有兩個火箭推進器，這些推進器是由設在猶他州的工廠所提供的。這家工廠的工程師希望把這些推進器造得再胖一些，這樣容量就會大一些。但是他們不可以，為什麼？因為這些推進器造好後，要用火車從工廠運到發射點，路上要通過一些隧道，而這些隧道的寬度只比火車軌道的寬度寬了一點點，然而，我們不要忘記火車軌道的寬度是由馬的屁股的寬度所決定的。
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    因此，我們可以斷言：可能今天世界上最先進的運輸系統的設計，是兩千年前，便由兩匹馬的屁股寬度決定了。這就是路徑依賴，看起來有幾許悖謬與幽默，但卻是事實。這則故事仍然提醒我們，不要只注意「形式」要注意「功能」和「原則」，這也是倫理學很重要的觀點。
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-amber-800 mb-2">倫理學的第三個觀點——「動機」</h4>
                <p className="text-gray-700 leading-relaxed mb-3">
                  基督教倫理學除了看重準則，注意處境之外，也看重「行事的動機」，這也是基督教倫理學和一般倫理學不同之處。上帝非常看重我們的內心，聖經說：「耶和華不像人看人：人是看外貌；耶和華是看內心」（撒上16:7）。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  保羅教導我們，以兩個動機來察驗自己的行為：
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span className="font-semibold text-amber-700">一、我所行的事是否「榮耀神」？</span> 保羅說：「所以，你們或吃或喝，無論作甚麼，都要為榮耀神而行」（林前10:31）。
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span className="font-semibold text-amber-700">二、我所行的事是否「造就人」？</span> 保羅說：「凡事都可行，但不都有益處；凡事都可行，但不都造就人」（林前10:23）；第33節保羅又說：「就好像我凡事都叫眾人喜歡，不求自己的益處，只求眾人的益處，叫他們得救」。
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-amber-900 text-lg mb-3">六、處境倫理學的謬誤</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                基督教倫理學的這三個觀點：「準則、處境及動機」必須同時看重，否則就會落入「處境倫理學」（或場合倫理學）的錯謬中。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「處境倫理學」認為，這個世界沒有絕對的善與惡，乃視「情況」而定，而最重要的根據就是「以愛為出發點」。所以，只要動機是愛就是善。這樣的倫理學讓人可以以愛為理由，做盡神眼中看為惡的事！例如：為愛犯淫亂，為愛殺人等。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「處境倫理學」就是「沒有準則」、「同情處境」、「看重動機」，或者說，他們認為「動機就是準則」，而「基督教倫理學」是「注重準則」、「注意處境」、「看重動機」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                其實，世人大都以「處境倫理學」為他們行事的原則，也就是：當人們發現，若他們為了持守道德原則而失去利益，甚至要付出代價時，他們就會犧牲道德原則；或者當他們發現，只要犧牲道德原則，就能使他們得到好處時，他們就會犧牲這些原則。所以世人會「撒白謊」；為了談成生意而說謊、送紅包、走後門；為了逃稅而作假帳；為了順利當選而「買票」等，他們的理由就是：「人在江湖身不由己」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                而基督徒也常活在「處境倫理學」中而不自知。例如：我的「環境」較艱難，所以我無法什一奉獻；教會弟兄這麼少，找不到好的對象，只能與未信者結婚；我是長孫，所以我一定要祭祖；我的「環境」艱難，所以我必須墮胎等。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                處境倫理學的優點就是提醒我們注意處境，不可以把信仰變成教條化而與社會脫節。
              </p>
              <div className={quote}>
                <p className={quoteText}>
                  你們所遇見的試探，無非是人所能受的。神是信實的，必不叫你們受試探過於所能受的；在受試探的時候，總要給你們開一條出路，叫你們能忍受得住。（林前10:13）
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">
                聖經教導我們，在艱難的環境中，我們仍然必須持守神的法度，這才是信心的表現。「信心」就是當「神的話語」與「環境」似乎有衝突時，我們仍然持守神的話。詩人說：「我看重你的一切命令，就不至於羞愧」（詩119:6），基督徒相信，當我們以信心持守神的話語時，神必定幫助我們勝過環境！這就是基督徒的信心！若因著環境就犧牲了原則，我們就不是信靠上帝的人了！
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                另外，「處境倫理學」建立在一個現實上，就是「逃避苦難」。是的！沒有人願意受苦，基督徒也不會自討苦吃，但是，基督徒不逃避苦難，為了持守神的道，我們願意受苦，這就是基督教倫理學與世人倫理學不同之處。
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
                '「基督教倫理學」不同於一般習俗演變而來的倫理學，而是「以整本聖經為標準與根基」，研究品格、行為、動機是否為神所悅納，本質上就是整本聖經的生活應用。',
                '倫理教導必須平衡，「不及」達不到神的標準，「太過」則造成生活困擾（如反對服兵役、反對向國旗敬禮、反對避孕等偏激教導），三種常見的律法主義是：標準超出神的標準、死守形式忽略精神、試圖靠自己力量達到律法要求。',
                '學習倫理學應有的四種態度：用在自己身上而非批判別人、存謙卑心尊重不同意見、聖靈的果子是結出來的不是要求出來的、倫理學必須配合輔導學才是真正的牧養。',
                '基督教倫理學處理問題須兼顧「準則、處境、動機」三個觀點：準則有知識、自由、愛心、造就四項原則；處境提醒我們學習聖經榜樣時要脫除文化背景、找出屬靈原則而非死守形式；動機則以「是否榮耀神」「是否造就人」來察驗行為。',
                '學習聖經「榜樣」的關鍵在於分辨「形式」與「精神」——凡物公用的精神是彼此相顧、婦女蒙頭的精神是順服、辮髮戴金飾的精神是不愛慕虛榮，形式可能因時代文化而調整，屬靈原則卻歷久不變。',
                '「處境倫理學」以愛為唯一準則、忽略聖經真理與行為準則，會導致「為愛犯罪」的謬誤；基督教倫理學堅持在艱難處境中仍持守神的話語為信心的表現，不因環境而犧牲原則，也不逃避為道受苦。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「路徑依賴」的鐵軌故事，對教會沿用已久的事奉「形式」有何提醒？</h4>
              <p className="text-gray-700 leading-relaxed">
                美國鐵軌寬度竟然源自兩千年前羅馬戰馬的屁股寬度，這個看似荒謬卻真實的例子，生動地說明許多「理所當然」的做法，其實只是層層沿襲下來的慣性，未必仍然服務原初的功能。教會事奉中許多固定流程（聚會形式、詩班安排、佈道方式）也常如此——值得定期回頭檢視：這個「形式」現在還能達成原本的「功能」嗎？還是已經淪為為做而做？
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">刺青、染髮這類「灰色地帶」議題，如何避免教會落入論斷或縱容兩極？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者指出，聖經反對紋身的經文原本針對異教儀式的宗教象徵，而非紋身本身；同時也提醒紋身動機若是刻意違背父母或炫耀自我，仍值得省思。這種「不簡化為非黑即白」的處理方式，提醒教會面對類似灰色地帶議題時，既不用單一經文條文論斷他人，也不能完全不顧動機與見證，而是回到準則、處境、動機三者並重的框架來牧養。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">基督徒常「活在處境倫理學中而不自知」，這句提醒對今日信徒有何實際挑戰？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者舉例：「環境艱難所以無法什一奉獻」「找不到對象只能與未信者結婚」等，都是打著處境的名義悄悄放棄原則。這提醒信徒，每當用「環境所逼」來合理化違背聖經原則的決定時，都該誠實檢視：這是真正被聖靈引導的智慧權衡，還是自己不願意付上代價、持守信心的藉口？
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
              '回想你自己信仰生活中，是否曾遇過「太過」或「不及」的倫理教導？當時你如何面對？',
              '「知識、自由、愛心、造就」四個準則原則中，你覺得自己最容易忽略哪一項？為什麼？',
              '文中的六個「處境」例子（凡物公用、婦女蒙頭、辮髮戴金飾、跪拜遺像、染髮、刺青），哪一個對你最有啟發？你如何區分其中的「形式」與「精神」？',
              '你是否曾用「環境所逼」來合理化某個違背聖經原則的決定？現在回頭看，那真的是無可避免的處境，還是不願付代價的藉口？',
              '保羅教導的兩個動機檢驗——「是否榮耀神」「是否造就人」——你可以如何具體應用在本週的一個決定上？',
              '教會裡有哪些「形式」，你觀察到可能已經失去了原本的「功能」？你會如何溫和地提出反思？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 用「準則、處境、動機」三觀點分析一個生活難題</h4>
              <p className="text-gray-700 mb-2">挑選一個你正在猶豫的生活抉擇（工作應酬飲酒、社群媒體使用、金錢消費等），依序寫下：聖經的準則是什麼？我的處境有哪些因素？我的動機是否經得起「榮耀神、造就人」的檢驗？</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 檢視自己是否落入「處境倫理學」</h4>
              <p className="text-gray-700 mb-2">
                誠實列出近期你曾用「環境所逼」合理化的一個決定，重新用林前十13的應許來檢視：神應許為我開一條出路，我是否曾經沒有真正尋求那條出路，就先妥協了？
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，求祢幫助我在複雜多變的社會中，不憑習俗、也不憑自己的喜好行事，而是單單以祢的話語為準則。求祢賜給我智慧，分辨形式與精神，不落入律法主義的苛刻，也不落入處境倫理學的妥協。求祢光照我內心真實的動機，使我無論做甚麼，都是為了榮耀祢、造就人。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
