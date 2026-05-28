import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Users, Search, HelpCircle, Check } from 'lucide-react';

export default function Book17Ch12() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">第十二章</h1>
        <h2 className="text-xl font-semibold text-gray-700">敬拜神，尊重他人（十一2-34）</h2>
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
              <h3 className="font-bold text-gray-900 mb-2">一、敬拜事奉與社會秩序（十一2-16）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅在第2節先稱讚哥林多教會依照他的教導行事，因為整體教會在「蒙頭」這件事上的立場，正是他的立場。值得注意的是，保羅並沒有禁止婦女在教會中禱告或「講道」（先知講道），第5節「凡女人禱告或是講道……」清楚表明這是已存在的事實，保羅只是要求她們在做這些事時要「蒙頭」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「蒙頭」究竟是什麼？保羅在第5節直譯是「有東西從頭垂下」，並未清楚說明，可能是遮頭的布，也可能是指披頭散髮的髮型問題。無論如何，保羅這主張的基本精神，是「榮耀」與「羞辱」的問題：女性信徒「蒙頭」是榮耀，「不蒙頭」是羞辱。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅為此提出三個理由：（1）神創造的次序（3-12節）——男女各有其頭，要榮耀自己的頭而非羞辱；第11節「然而」二字指出，男人的權威也不是至上的，「萬有都是出乎神」；（2）本性的指示（13-15節）——按當代倫理標準，女性自我省覺到有頭髮才是光榮；（3）教會的習例（16節）——順服是各地教會共通的守則。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">二、與主合一和社會階級（十一17-34）</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅在第17節明言：「你們聚會不是受益，乃是招損。」這與第2節形成明顯對照——前段是稱讚，這段是責備。問題出在哥林多信徒守聖餐時，有人饑餓、有人酒醉（第20節）。這與當時社會文化背景有關：初代教會的聖餐是真的一起用餐；有人因為是奴隸，無法掌控時間而遲到；當時社會習慣將貴賓與一般客人分隔而食，哥林多信徒已習以為常。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅從多角度責備這現象：這是「分門別類」（與一章10節的「分黨」同字），是破壞教會合一的行動；從教會中貧富的分別，可以看出誰是真正屬神的；各人吃自己的飯，不算是吃主的晚餐；羞辱窮人，就是「藐視神的教會」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅在23-26節提醒聖餐的意義：（1）基督的身體是「為你們捨的」；（2）「為的是紀念我」；（3）這血是立新約的血，猶如舊約逾越節。主耶穌救贖的身體不只是祂自己，所有屬基督的也都是一體（參十章17節），這種「一體」的關係必須在行動上表明出來。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「按理」守聖餐包含兩方面：（1）「自己省察」——分辨聖餐是屬乎主的，不容干犯；（2）「彼此等待」——顧及他人的需要與感受。不以這態度守聖餐，保羅三次提到將受審（吃喝自己的罪、自己取罪、受審），表現為軟弱、患病甚至死亡。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">結語</h3>
              <p className="text-gray-700 leading-relaxed">
                哥林多前書第十一章兩段在主題上一致：告訴信徒聚會時必須顧及其他信徒的存在和尊嚴。第一大段是女性羞辱男性，第二大段是有錢的信徒羞辱貧窮的男女信徒。兩段也互補：第一段看到信徒有禱告、有先知講道；第二段看到初代教會有聖餐聚會。信徒在運用基督裡的自由敬拜神時，要維護他人的尊嚴；而敬拜神與尊重他人，有著密不可分的關係。
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
              <h3 className="font-bold text-gray-800 mb-2">一、敬拜事奉與社會秩序</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                近代西方教會討論這段經文，往往從「蒙頭」進而思考婦女地位及事奉崗位問題，有人甚至認為保羅的要求是輕視婦女的表現。華人教會自二十世紀起，受倪柝聲影響，常將焦點放在「蒙頭」上。談到應用，可以從這兩個主題切入。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                關於「蒙頭」的方式，由於資料不足，不能肯定正確方式。作者個人認為很可能與現代伊斯蘭教婦女的方式類同。在西方文化中有象徵性表現：天主教婦女披紗，基督教婦女戴帽。由於中國文化中漢族婦女沒有披紗戴帽的習慣，宣教士並未在這一點上堅持。今天真正應注意的，不是「蒙頭」這個舉動本身，而是它背後的精神。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                關於婦女事奉，不可忘記近代史上，華人教會扮演了先驅的角色：第一間女子學校是宣教士開始的；十九世紀教會已有女傳道的角色；二十世紀出現好幾位女教育家、佈道家，影響力相當大的伯特利佈道團，更是由兩位女性所創立和帶領的。比較之下，華人教會比西方主流教會相當「先進」。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                保羅及哥林多教會與當時的猶太教相比，也是先進而開放的。在第一世紀，婦女可以在教會聚會中「講道」和禱告，這已大大提升了婦女的地位——她們得到聖靈的恩賜，與男性信徒一樣可以在教會事奉。若按現代用語，這是「解放」而非壓制。若有人認為保羅在此呈現大男人主義，是嚴重的誤解。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                近代西方教會爭論婦女事奉，重點幾乎都以婦女按牧為焦點，主要聖經根據是哥林多前書十四章34節和提摩太前書二章14節。然而，哥林多前書第十一章的這段經文，對不准婦女講道的看法是非常不利的——經文分明說明有些婦女是女先知，負責傳達神的資訊。從新約的教導看來，不贊成婦女按牧的西方教會，是將恩賜的範圍縮小了，因而導致婦女失去多方事奉的機會，違背了本段經文的基本精神。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者常說：若是有人認為聖經真的不准婦女在崇拜中講道，我可以尊重；但千萬不要讓教會的崇拜甚至事奉，皆由男性霸佔了，因為這絕對不是新約聖經的精神。婦女的解放不只是為提升個人自由，而是為了促使她們參與神的事工。在運用自由時，聖經明文提醒婦女，不要損害他人的尊嚴，不可忘記神創造的社會秩序。倘若基督徒婦女在伊斯蘭教社會中穿著袒胸露背的衣服，或在帶領詩歌聚會時穿著性感時裝，聖經都不會贊同。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">二、與主合一和社會階級</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                哥林多前書十一章23-26節是教會守聖餐時常誦讀的經文，信徒自然認為它談的是聖餐。從某角度看，這理解並非完全誤解，因為這段資訊的中間部分確實講聖餐的意義。但仔細看，卻有好幾個重要資訊值得現代華人基督徒注意。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                首先談聖餐的重要性。在系統神學中，教會對聖餐的意義有幾種詮釋：天主教主張「化質說」，認為餅和杯實際就是主耶穌的身體和血；路德宗主張「同質說」，認為餅和杯同時有物質和屬靈的含義；加爾文宗主張主耶穌屬靈的臨在；浸信會則主張象徵性的解說。按作者個人觀察，浸信會的象徵性說法是目前華人教會普遍接受的看法。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                令人遺憾的是，一般教會對聖餐的重要性基本上沒有正確的教導，有時甚至看到令人相當傷心的事。作者是在長老宗的傳統中成長，教會每個月一次守聖餐聚會。那時牧師每個月在聖餐禮拜前一週必定宣佈，要求弟兄姊妹預備心，在家中好好認罪；他也教導信徒：平常的聚會可以缺席，但聖餐聚會不可缺席。但這種教導目前很少聽到。有一次，作者甚至聽到有人在聖餐時，把餅和杯分給自己年幼的小孩吃喝。保羅若在世，一定會高聲疾呼：守聖餐豈僅是吃喝而已！聖餐是件非常嚴肅的事，若是帶著罪守聖餐，必會受到主的懲治，甚至是死亡。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                當保羅要哥林多信徒省察自己的罪時，他指的不僅是個人得罪主，更是個人因得罪了別人而得罪了主。守聖餐不僅是個人與主之間的關係，亦涵蓋個人與群體的關係。在這個群體中，正如保羅在加拉太書三章20節所說，在基督裡沒有男女之別，也沒有貧富之別。在教會裡，一個重要的考驗，就是那些「有的」——有恩賜的、有錢財的——如何對待其他弱勢的。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                常有人對教會失望，或覺得講台資訊對自己沒有幫助，因而發問：「在家中做禮拜不是更好嗎？為什麼要上教會？」這種問題犯了嚴重的錯誤，就是將神與人的關係過分內在化。在聖經中，「敬拜神」絕對不是純粹個人與神之間的事。在舊約中，先知們常責備以色列人在獻祭時忘了倫理道德（摩五21-24；彌六6-8）。在新約中，主耶穌也教導人，在獻祭前要先與人修好（太五23-26）。誰是屬神的人？絕對不是一個獨自在家敬拜、不與其他信徒來往的人。一個人是否屬神，是要經過驗證的，而考驗方法之一，就是他與其他信徒間的關係。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                現代人很難掌握這段經文的含義，原因之一是現在守聖餐的方式與初代教會不同，不會有類似哥林多教會那種事情發生；另一個原因，是將聖餐過分個人化，沒有考慮到聚會時會在行動上羞辱其他的人。再加上現今教會成員基本上屬於同一社會階層，更難看到富翁和奴隸同時聚會的現象。但若深入思考，這段經文呈現的核心，與保羅在一章26-31節的教導相同：耶穌基督的福音必須改變信徒個人的價值觀和社會結構；在教會中不能存在貧富的差異和社會階層的區分。無論富有或貧窮，每一位屬神的兒女在神面前都具有同等的價值，也值得同樣的尊重。
              </p>
            </div>
            <div className="bg-teal-50 rounded-lg p-4 border-l-4 border-teal-400">
              <h4 className="font-bold text-teal-800 mb-2">默想</h4>
              <p className="text-gray-700 leading-relaxed">
                保羅在哥林多前書第十一章，表面上處理的是兩件截然不同的事，但事實上都是在處理教會聚會中所呈現的亂象。兩件事處理的是兩種不同的人，然而基本上，這兩種人都犯了同樣的錯誤。有些人在聚會中只想到自己的權利和恩賜的表現，另一些人則沒有顧及他人的存在，而這兩種人都需要學習尊重他人。尊重他人，就是尊重創造的真神和救贖的主耶穌！
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
              <h4 className="font-semibold text-gray-800 mb-2">一、第一世紀哥林多的蒙頭習俗考察</h4>
              <p className="text-gray-700 leading-relaxed">
                考古學與古典文獻的研究，揭示了第一世紀哥林多城中複雜的蒙頭習俗。希臘-羅馬文化中，已婚婦女在公共場合通常以頭巾遮頭，彰顯其受丈夫保護的身份。而「不蒙頭」有時與特定職業（如妓女）或宗教場景（如某些神廟儀式中的女祭司）相關聯。近代學者如Bruce Winter在《古代哥林多的羅馬妻子、寡婦和少女》（Roman Wives, Widows and Virgins in Ancient Corinth）中指出，羅馬化的哥林多有所謂「新女性」（nova femina）的興起，她們刻意突破傳統頭飾規範，以彰顯社會解放。保羅對蒙頭的論述，很可能正是回應這一文化潮流對教會聚會的滲透。這一背景說明，蒙頭問題不只是宗教規範，更牽涉到文化身份認同的問題。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">二、哥林多聖餐問題的社會學分析</h4>
              <p className="text-gray-700 leading-relaxed">
                社會學家格爾德·泰森（Gerd Theissen）在其開創性研究《哥林多的社會環境》中，深入分析了哥林多教會聖餐問題的社會階層背景。他指出，羅馬時代的「collegia」（同業公會）宴會通常依社會地位分配食物與座位，這種差異化對待在哥林多教會中也可能存在。擁有房屋並提供聚會場所的「有房子的人」（oikos households），往往是社會上層人士，他們按羅馬習慣先招待同階層的賓客。泰森認為，這是「強者」與「弱者」的衝突在另一個領域的再現——在飲食上的特權，反映了在知識與社會地位上的優越感。保羅以神學回應這一社會問題：在主的餐桌上，沒有社會階級的分別；每一個人都同樣是「被買贖的」，都同樣是基督身體的一部分。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">三、保羅聖餐神學與逾越節的關係</h4>
              <p className="text-gray-700 leading-relaxed">
                保羅在11章23-26節的聖餐陳述，是新約中最早（先於四福音書）有關聖餐的記錄，其神學根植於猶太逾越節傳統（出十二章；申十六章）。「這是我的身體，為你們捨的」與「這杯是用我的血所立的新約」，使用了「新約」（kainos diatheke）的語言，呼應了耶利米書三十一章31-34節的新約預言。猶太學者Alan Segal指出，早期基督徒對聖餐的理解，深受「紀念」（anamnesis）神學的影響——逾越節的紀念，是以行動重新經歷救贖歷史，而非僅僅象徵性的回憶。保羅在第26節說「你們每逢吃這餅、喝這杯，是宣揚主的死，直等到祂來」，將聖餐置於末世論的框架中：這是「已然」（主已死而復活）與「未然」（主要再來）之間的時間標誌。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">四、女性神學的多元進路與教會實踐</h4>
              <p className="text-gray-700 leading-relaxed">
                二十世紀後半葉，女性神學（feminist theology）對教會男女關係的討論發生了根本性轉變。在「互補主義」（complementarianism）與「平等主義」（egalitarianism）兩大陣營的辯論中，哥林多前書十一章始終是重要的戰場。互補主義者如Wayne Grudem，以男女的「功能性差異」（functional differentiation）強調創造秩序；平等主義者如Gordon Fee則指出，保羅在此明確承認婦女在聚會中先知講道，這必須成為詮釋其他「限制性」經文的框架。值得注意的是，全球多數教會成長最快的地區（包括非洲、亞洲、拉丁美洲），女性事奉者承擔了大量宣教、牧養和植堂的工作，這一實踐現實也在不斷挑戰西方神學院的理論討論。
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
              <p className="text-gray-700">保羅在十一章2-16節的重點，是關於婦女的地位，還是關於她們在事奉時的服飾態度？這個區別對你所在教會如何討論婦女事奉，有什麼啟發？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">「蒙頭」在當時是有特定文化含義的行為。在你的文化和教會背景中，有哪些服飾或行為規範，其背後精神是「不羞辱他人」或「維護他人尊嚴」？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">作者指出，哥林多前書第十一章實際上表明婦女可以在聚會中先知講道。你認為這對現代教會關於婦女事奉的討論，應該帶來怎樣的影響？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">哥林多教會在聖餐中有人饑餓、有人酒醉，反映了貧富階層之間的漠視。在你的教會生活中，是否存在某些形式的「有意無意忽視弱勢群體」的現象？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">保羅說守聖餐不按理，可能導致軟弱、患病甚至死亡。你如何理解這種「審判」的性質？它如何影響你對守聖餐的態度？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">「敬拜神絕對不是純粹個人與神之間的事」——這句話對你的信仰實踐有何挑戰？你是否曾有「在家做禮拜更好」的想法，根源是什麼？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">7.</span>
              <p className="text-gray-700">作者說：在教會裡，重要的考驗之一，是「有的人」——有恩賜的、有錢財的——如何對待弱勢的人。你在這方面的表現如何？有什麼需要調整的地方？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">8.</span>
              <p className="text-gray-700">本章兩段的核心信息是「尊重他人，就是尊重創造的真神和救贖的主耶穌」。你是否曾在教會聚會中，感受到自己或他人的尊嚴被忽視？如何以這真理回應？</p>
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 在服飾與言行上尊重他人</h4>
              <p className="text-gray-700 mb-2">保羅關於蒙頭的核心精神，是不在聚會中羞辱他人。本週在教會場合中，主動省察自己的衣著、言辭和舉止，是否有維護他人的尊嚴：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>在聚會前，問自己：「我今天的穿著和態度，是在彰顯自我，還是在榮耀神？」</li>
                <li>留意自己在聚會中說話的方式，是否曾讓弱勢或不同背景的人感到被排除在外</li>
                <li>主動接觸在教會中看起來邊緣化或不被重視的人</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 預備心守聖餐</h4>
              <p className="text-gray-700 mb-2">參照作者分享的長老宗傳統，在下次聖餐前主動預備心靈：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>在聖餐前一天，花15-20分鐘安靜下來，省察自己與神的關係及與弟兄姊妹的關係</li>
                <li>若有未和好的關係，嘗試在守聖餐前採取和好的第一步（參太五23-26）</li>
                <li>閱讀哥林多前書十一章23-26節，默想主耶穌「為你們捨的」的愛</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🤝 打破教會中的社會階層隔閡</h4>
              <p className="text-gray-700 mb-2">保羅責備哥林多信徒在聖餐中以社會階層對待他人。本月嘗試一個具體行動，打破你在教會中可能已形成的「同溫層」：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>主動邀請一位你平時不太交往、來自不同社會或經濟背景的弟兄姊妹一起用飯</li>
                <li>在教會肢體分享時，留意是否有人的需要沒有被看見，採取實際關懷的行動</li>
                <li>反思教會的活動和費用，是否對經濟較弱的肢體造成隱形障礙</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💬 以行動回應「在家做禮拜」的誘惑</h4>
              <p className="text-gray-700 mb-2">若你或你認識的人曾有「在家做禮拜更好」的想法，這週花時間反思：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>在日記中寫下：你對教會群體有什麼未解決的失望或傷害？這些是否影響了你對公共敬拜的投入？</li>
                <li>與一位你信任的肢體分享你的感受，讓群體成為醫治而非孤立的空間</li>
                <li>記錄一件你在公共敬拜中，因群體的存在而經歷到獨自無法得到的屬靈恩典</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 leading-relaxed text-lg">
                主耶穌，祢在最後的晚餐中，彎腰為門徒洗腳，設立聖餐，教導我們服侍的真義。求祢幫助我，在每次與肢體聚集的時候，不只想到自己的感受和需要，更能看見身邊每一個人的存在和尊嚴。當我守聖餐時，求祢讓我真實感受那奇妙的合一——我與祢的合一，也與每一位被祢寶血買贖的弟兄姊妹的合一。願我的敬拜，不只是嘴唇的讚美，更是在日常生活中對他人的尊重與服侍，因為尊重他人，就是尊重祢。阿們。
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
