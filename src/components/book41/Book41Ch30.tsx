import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkle, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book41Ch30() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
    exploration: true,
    questions: true,
    practice: true,
  });
  const toggleSection = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

  const refrain = (
    <div className="my-5 pl-4 border-l-4 border-teal-300 bg-teal-50 py-3 space-y-1">
      <p className="text-teal-900 leading-relaxed font-medium">信徒滿有榮耀。</p>
      <p className="text-teal-900 leading-relaxed font-medium">他們是神的孩子、是君王的兄弟姐妹。</p>
      <p className="text-teal-900 leading-relaxed font-medium">他們不致於感到羞恥。</p>
      <p className="text-teal-900 leading-relaxed font-medium">他們是豐足、自由的，</p>
      <p className="text-teal-900 leading-relaxed font-medium">與神同負使命，要祝福世上所有人。</p>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-800 to-cyan-900 bg-clip-text text-transparent">第四部 4-4</h1>
        <h2 className="text-xl font-semibold text-gray-700">結論：信徒無虧缺的榮耀</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">全書總結章</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Sparkle className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <p className="text-gray-700 leading-relaxed mb-3">
              全書以一段近乎詩歌的總結作結。作者寫道：關於個人、民族方面的罪，這複雜的問題其實有解決之道，答案就是耶穌基督，這真是大好消息。在基督的國度裡，這位君王大有能力，不僅為百姓的罪疚、羞辱付上代價，祂甚至為了自己的榮耀和憐憫，把榮耀分享給百姓。跟隨這位君王的人，稱為基督徒，或簡稱為信徒——他們滿有榮耀，不再感到羞恥，他們是神的孩子、是君王的手足，是富足、自由的，與神共負使命，要祝福世上所有人。
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              耶穌，這位滿有尊榮的君王，把自己的榮耀賜給「相信祂的名」的人（約十七22；約一12；約壹三1），使他們真正成為「神的兒女」——在神面前，信徒的榮耀大獲提升，這是榮耀地位逆轉。雖然君王把榮耀慷慨賜下、與百姓共享，祂的榮耀卻絲毫未減，反而因著越來越多人的敬拜，君王的尊榮越加增（約十二32；林後四15）。凡是愛這位君王、遵行祂旨意的人，就是祂的弟兄姊妹（太十二48-50），他們經歷了重生，在基督的大家庭裡有了新的親屬團體——「不是從血氣生的，不是從情慾生的，也不是從人意生的，乃是從神生的」（約一13），他們有一種新的屬靈DNA，因著神的恩典享有神所賜的榮耀，不是自己努力而得到的，所以沒有人可以自誇（弗二9），神獨得當得的一切榮耀（羅十一36）。
            </p>
            {refrain}
            <p className="text-gray-700 leading-relaxed mb-3">
              無論是對罪惡、羞恥感到軟弱無力的人，或是被壓迫的人，面對醉心於權力、禁不起試探的人，或是自認為是局外人、寄居者的人，都有一種新的榮耀來源，可以醫治、掩蓋這些受害者的羞辱——這個國度的榮耀源自基督，這種「在耶穌裡的榮耀」，為信徒帶來發自內心、勝過恥辱的生命經驗。在他們得救的那一刻，這些跟隨耶穌的人獲得莫大榮耀；他們受洗，象徵歸入「父、子、聖靈的名下」（太廿八19）；擁有榮耀帶來豐盛的生命，讓口渴的人有水喝、飢餓的人得到完全的飽足（約七38）；榮耀持續延伸，透過生活體驗，藉著聖靈充滿，在神的話語中成長，同時在基督建造的身體——教會群體中，活出豐盛的生命（林前十二21-26）。
            </p>
            {refrain}
            <p className="text-gray-700 leading-relaxed mb-3">
              有人可能會認為，追求認識基督、經歷祂的榮耀，是一種自私的意念。其實，這種追求符合耶穌的教導：「你們要先求他的國和他的義」（太六33），使徒保羅的生活也展現了同樣的追求（腓三7-11；羅二7）——這種追求生命榮耀的動機，與自私、驕傲截然不同。藉著國度觀的注入、基督的內住、聖靈的流露、話語的領受、教會的支持，匯聚成充沛的榮耀，讓信徒們從罪中得釋放（羅六7-8、17-18）：真正的信徒能為愛和付出做出犧牲，被侮辱時不受挾制，在必要的時候可以為他人的羞辱付代價，是帶來和好訊息的基督使者，不需自我防衛，也不須訴諸暴力，因為他們是和平使者。一方面，信徒可以像耶穌一樣，謙卑地挑戰現狀、對當權者說實話；另一方面，他們也可以自在地彎腰、互相洗腳，像耶穌一樣滿有榮耀（約十三14-15）——這些行為，都是自由、無私的表現，這種自由，恰恰展現出耶穌的生命。
            </p>
            {refrain}
            <p className="text-gray-700 leading-relaxed mb-3">
              許多信徒生活在崇拜物質、消費主義的社會氛圍中，但由於他們有充足的榮耀，能游刃有餘地避開物質的捆綁，甚至對代表社會地位的事物自在放手，不受挾制。他們可能擁有最新的科技產品、時尚的汽車和衣服、體面的房子，或令人羨慕的工作頭銜，卻認為一切出自神、是神賞賜的禮物；無論處在什麼景況，他們都可以知足（腓四11）——因為他們以認識基督、服事君王為滿足，他們的榮耀源於基督和神的國度，而不是世界的國度。因為在耶穌裡的充沛榮耀，即使受苦，他們依舊心裡歡喜，「因被算是配為這名受辱」（徒五41）；他們喜樂地生活，遵守神所給的道德、公義規範，不致隨著今世墮落的文化沉淪，因為他們深知：這種沉淪的文化使神蒙羞——罪不僅是不守法律規範，罪其實是羞辱全能的上帝（羅一21-26，二23-24）。
            </p>
            {refrain}
            <p className="text-gray-700 leading-relaxed mb-3">
              當信徒活在君王的榮耀中，他們會樂意服事神。他們知道藉著君王寶血、十字架和復活，他們就不被定罪了（羅八1），而且可以成為神的子嗣（弗一5），進入永恆尊榮的上帝家庭中（彼前二6-10）。他們盡心盡意，擁抱基督救恩的祝福，把這份榮耀延伸到「地上的萬族」（創十二3；加三29）——他們與基督君王、祂的家人聯合，一起宣揚神的偉大救恩、祝福萬民；這個榮耀激勵著他們，帶給他們清楚的目標、莫大的喜悅。他們在基督國度的經歷，勝過羞辱的愛，釋放出醫治能力（太五3；羅五5）。所有信徒都將在永恆，經歷到屬神的豐盛、美好。
            </p>
            {refrain}
            <p className="text-gray-700 leading-relaxed text-center font-semibold text-teal-900 text-lg">
              這就是「世界等待的福音」。
            </p>

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
                '全書以一段反覆吟詠的「信徒滿有榮耀」詩節作結，五句話濃縮了全書三十章的神學論述：信徒滿有榮耀、是神的孩子與君王的手足、不再羞恥、豐足自由、與神同負使命祝福萬民。',
                '基督把自己的榮耀分享給跟隨祂的人，但祂的榮耀絲毫不因分享而減少，反而因萬民的敬拜越加增——這是全書反覆強調的「榮耀不是零和資源」的終極體現。',
                '信徒的榮耀完全出於恩典，「不是從血氣生的……乃是從神生的」，因此無人可以自誇；這使信徒既能坦然享受、渴望這份榮耀，又不至陷入自我中心的驕傲，因為一切都指向基督。',
                '真正經歷這份榮耀的信徒，會活出一種獨特的生命樣式：不受物質主義捆綁、面對羞辱仍能喜樂、既能謙卑服事洗腳，也能勇敢對當權者說真話——自由與無私是這份榮耀最具體的果實。',
                '信徒領受的榮耀不是用來私自享受的終點，而是被差派、延伸出去的起點——「把這份榮耀延伸到地上的萬族」，這正是本書從頭到尾反覆強調的：福音的榮耀必然導向宣教的使命。',
                '全書最後一句「這就是『世界等待的福音』」，直接呼應書名，宣告：這套整合了罪疚赦免與羞辱醫治、個人救恩與萬族祝福的整全福音，正是這個世界（尤其是深陷榮辱文化的多數世界）長久以來所等待的好消息。',
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
              <h4 className="font-semibold text-gray-800 mb-2">作者選擇用反覆吟詠的詩節，而非條列式的重點摘要來總結全書，這種文體選擇本身傳達了什麼訊息？</h4>
              <p className="text-gray-700 leading-relaxed">
                這個文體選擇本身就是全書論點的具體示範：作者在第三部一再強調，敘事與詩歌比條列真理更能觸動習慣口傳文化的聽眾，此刻他用同樣的方式為自己的著作作結，而非用學術性的條列摘要。這種「形式即內容」的寫作策略，讓讀者在閱讀結論的過程中，親身體會到「榮耀感」帶來的情感重量，而不只是理性上同意一套神學論點。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「君王的榮耀因百姓的敬拜而增加，卻不因分享而減少」，這個看似矛盾的說法，如何解決「榮耀是否為零和資源」的神學困惑？</h4>
              <p className="text-gray-700 leading-relaxed">
                這正好回應了第二部「資源有限」與第三部相應章節的核心論點：在世俗、榮辱競爭的世界裡，榮耀確實常被視為零和的稀缺資源——你多我就少。但神的榮耀運作邏輯完全不同：祂慷慨地把榮耀分享給百姓，百姓因此更多地敬拜祂，而這敬拜本身又進一步彰顯、增添了祂的榮耀——這是一個良性循環，而非此消彼長的競爭，這正是「在基督裡資源無限」這個真理最具體、最終極的展現。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">全書標題「世界等待的福音」在全書最後一句話中被直接點出，這對讀者理解全書的寫作目的有何統整作用？</h4>
              <p className="text-gray-700 leading-relaxed">
                這個安排讓讀者在讀完三十章的神學論述後，重新回到書名本身，帶著全新的理解重新詮釋這個標題：「世界」不只是地理概念，而是特指那些深陷榮辱文化、卻長期被西方福音框架忽略的多數世界人民；「等待」暗示著這個福音的完整信息其實一直都在聖經裡，只是教會長期未能充分宣講；「福音」則被重新定義為同時處理罪疚與羞辱、個人與群體、現在與永恆的整全好消息。這個首尾呼應的寫作手法，讓全書的論證與書名合而為一。
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
              '讀完全書三十章後，「信徒滿有榮耀，他們不致於感到羞恥」這句反覆出現的詩節，此刻對你而言，意味著什麼？',
              '「他們是豐足、自由的，與神同負使命，要祝福世上所有人」——你認為自己目前的生命，活出了多少這樣的豐足、自由與使命感？',
              '通讀全書後，你對「福音」這個詞的理解，發生了哪些具體的擴展或改變？',
              '「這就是『世界等待的福音』」——你認為自己身邊，有哪些人正在「等待」這樣一個同時處理罪疚與羞辱的完整福音？',
              '如果要用一句話向朋友介紹這本書帶給你最大的收穫，你會怎麼說？',
              '讀完全書後，你會如何具體地把「榮辱動力」這個新的認知框架，實踐在你自己的讀經、禱告、服事或宣教參與中？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 抄寫並默想全書的結語詩節</h4>
              <p className="text-gray-700 mb-2">
                把「信徒滿有榮耀……與神同負使命，要祝福世上所有人」這五句話抄寫在你隨身可見之處，每天默想一週，讓這份榮耀的身分認同深植心中。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 寫一封信給自己，總結這本書帶來的改變</h4>
              <p className="text-gray-700 mb-2">
                花時間寫下一封給自己的信，總結讀完全書後，你對福音、榮辱文化、跨文化宣教的理解發生了哪些改變，以及你願意採取的具體行動。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，感謝祢是配得一切尊榮的君王，也感謝祢如此慷慨，把祢的榮耀白白分享給我這蒙恩的罪人。求祢幫助我，真實活出滿有榮耀、不再羞恥、豐足自由的生命，並與祢同負使命，把這世界等待已久的完整福音，傳給每一個仍活在羞辱與失喪中的人，直到萬族萬民一同敬拜祢，直到永永遠遠。奉主耶穌基督的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
