import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HeartHandshake, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book41Ch5() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-800 to-cyan-900 bg-clip-text text-transparent">第一部　1-5</h1>
        <h2 className="text-xl font-semibold text-gray-700">傷害或治癒？</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">羞恥和罪疚的共同特徵與差異</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                社會學家唐尼（June Price Tangney）和迪林（Ronda L. Dearing）合著的《羞辱與罪疚》，對基督教的全球宣教事工提供了真知灼見。<sup>1</sup><span style={cite}>（June Tangney and Ronda Dearing, Shame and Guilt, 2002, 25——此書引用延續四十多年的量化研究成果。）</span>兩位學者指出，羞恥和罪疚有五個共同特徵：兩者都屬於「道德」情感類型；兩者都是「自我意識」、自我反思的情緒；兩者都是負面的平衡情緒；兩者都涉及某些內在的動機歸因；兩者都經常涉及人際衝突。導致羞辱和罪疚的負面事件也非常相似，經常涉及道德淪喪或違法行為。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                但兩者的差異，對牧養與宣教事工有深刻的意義：羞辱告訴我們「我做了那件可怕的事情」，而罪疚告訴我們「我做了那件可怕的事情」——重音的位置不同，意義天差地遠。戴尼斯和科坎南認為：羞辱牽扯出更深層的事實問題，不僅行為有狀況，人也是；羞辱的自我是一個受損、缺乏自我認同、缺乏好的標竿的自我，也就是有嚴重瑕疵。<sup>2</sup><span style={cite}>（Dyrness and Kärkkäinen, 815.）</span>簡單地說，羞辱是關乎「我是誰」；罪疚是關乎「我所做的」。因此，羞辱通常比罪疚更痛苦。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                唐尼和迪林清楚描述了兩者影響的對比：「罪疚的緊繃、悔恨和遺憾，讓我們不得不停下來重新思考，它提供了一條出路，迫使我們承認、道歉並且改正；我們因此成為更好的人，世界變得更美好。」相較之下，羞辱在某些方面並非「道德式」的情感——當人們自己感到羞愧時，他們並沒因此產生特別的動機去道歉或修補，也不會把事情搞好，相反地，人們往往做出各種自我防禦措施：可能退縮並避開人群，可能逃避責任並將引發羞恥的情境歸咎他人，也可能對這個讓他們感覺不堪的世界，充滿敵意和憤怒；懷有羞辱感的人容易採取自我防禦的姿態，而不是採取建設性的、修復的態度來經營關係。<sup>3</sup><span style={cite}>（Tangney and Dearing, 180.）</span>
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">這對宣教事工有何意義？</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                耶穌說：「信他的人，不被定罪；不信的人，罪已經定了，因為他不信神獨生子的名。」（約三18）我們會有迫切感，希望罪惡、內疚獲得赦免。但作者提醒：論及情緒和社會層面，我們的羞辱同樣迫切需要醫治；當我們讀這段話時，若只專注於罪疚而忽視了羞辱的原貌，是否也忽略了福音能夠治癒、改造人類靈魂的偉大影響力？
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                唐尼和迪林經過四十多年來各大學的相關研究成果一再確認：羞辱通常使人「躲避、逃避或想要反擊」，罪疚則通常促使人「坦承、道歉或修復」。簡言之，恥辱較可能導致傷害行為；而罪疚較可能帶來醫治行為。許多宣教和文化領袖都知道，對多數世界的人而言，榮與辱是他們的關鍵文化價值——當基督徒僅以「解決人類在神面前的罪疚」這一種方式，向世界多數人民宣講基督福音時，不難理解何以這些人會抵制基督福音。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                普瑞斯瓊斯（David Pryce-Jones）如此描述阿拉伯世界由榮/辱所主導的價值觀：「榮耀賦予生命價值：羞辱是一種活的死亡，令人難以忍受、渴望平反。榮耀是獲得眾人認同、尊重，使此人在自己眼中和他人面前擁有一席之地，既有安全感又有重要性。」<sup>4</sup><span style={cite}>（David Pryce-Jones, The Closed Circle, 1989/2009, 35.）</span>「在榮與辱的兩極之間，存在著一個未知地帶，每個人都在這個地帶中持續摸索、探險，努力釐清他人的行為、話語，觀察他人對挑戰、威權的反應；就在其間，贏家與輸家、榮與辱於焉產生。」<sup>5</sup><span style={cite}>（Pryce-Jones, 40-41.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                作者提出一個大哉問：如果耶穌基督的贖罪，不僅提供對罪疚、定罪問題的解決之道，還可以遮掩我們的羞辱、恢復我們在神面前的榮耀，這不正是浪子回頭故事的主旨嗎？<sup>6</sup><span style={cite}>（路十五11-32；參《天父之愛福音小冊》。）</span>從這個角度切入，對於置身在榮辱文化價值體系的人而言，是否更有說服力，甚至值得為之犧牲在所不惜？
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">改革宗神學中缺少的一部分？</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                改革宗神學中，有一個重要觀點就是「澈底墮落」（也稱為「完全無能」或「澈底腐敗」），這與奧古斯丁所提倡的原罪學說密切相關，也是許多新教教派信仰告白和要理問答的依據，特別是加爾文教派——該教義教導世人，由於人類墮落的結果，生於世上的每個人都是道德敗壞、被罪所奴役的，若非神的恩典，人自己根本無法選擇跟隨神，或憑信心尋求拯救、歸向基督。<sup>7</sup><span style={cite}>（"Total depravity," Theopedia.com.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者進一步思考：澈底墮落的教義確認人類的絕對墮落，不僅存在我們的行為中——「我做了那件可怕的事」，而且也和我們的生命並存——「我做了那件可怕的事」。由於西方神學界對榮辱文化的盲點，往往把基督的贖罪當作是為罪人辯解、免除罪疚的手段，而且通常對罪和羞辱三緘其口。因此，這種只表達人的罪疚、罪行，卻遮掩其羞辱、罪惡的神學，是否可能是有問題的？我們可能相信「完全墮落」，同時卻錯過了福音的重要部分嗎？
              </p>
              <p className="text-gray-700 leading-relaxed">
                作者認為，這種傳揚福音的方式，若能同時包括「罪得赦免」的信息，也包括除去我們的羞愧，將形成更「全球性」的福音——在神學上更有一致性，反映出聖經的寬廣，而且對於深感墮落、帶著罪疚和羞辱的人類，更符合整體需求、帶來生命的改變。無論是來自多數世界文化的人，還是像作者這樣的西方人，我們都有一樣的掙扎：面對如影隨形的羞辱感努力對抗；自然而然，我們都需要更具全球視野的福音。作者提醒基督徒領袖、牧師和宣教士：我最近一次傳講藉著耶穌基督十字架的信息，可以克服羞辱，是在什麼時候？
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">「從來沒有聽到過有關羞辱的信息」</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                羞辱是複雜的，無論從情感、社交、心理，還是精神層面來看，恥辱的動力具有多面性；在不同文化中，經驗羞辱的方式也有所不同。作者以自己的親身經歷說明榮辱文化影響的深遠：二○一三年，他在亞利桑那州坦佩一座教堂教導榮辱文化，講題關於宣教。他引用路加福音十五章11-32節，同時發給每人一冊《天父之愛福音小冊》，也提及羞辱的陰影如何影響他，分享自己青少年時期的心路歷程。
              </p>
              <p className="text-gray-700 leading-relaxed">
                聚會結束後，一位年約七十歲的白人女士走向他，帶著愉快的笑容說：「小時候，我經歷過一些事，一直困擾我至今。信主多年，我從來沒有聽到過關於羞辱的信息，今天是第一次。透過你的教導，神觸摸了我的心，挪去我心中的石頭。非常感謝！」作者感慨：只有神知道，在世界各地的教會中，有多少人——無論是出身哪個種族，或位居任何社會地位——對這句話，或多或少，感到心有戚戚焉。本章的主要論點是：羞辱可能是一個大的問題，超乎我們所能理解，羞辱可能導致傷害行為，而罪疚很可能帶來醫治行為。下一章，我們將進一步探討問題的嚴重程度，以及理解病態的羞辱有多棘手。
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
                '羞恥與罪疚雖同屬道德性、自我反思性的負面情緒，但本質截然不同：罪疚是關於「我做了什麼」，通常促人坦承、道歉、修復；羞辱是關於「我是誰」，通常使人躲避、逃避或想要反擊。',
                '四十多年的量化研究一致顯示：罪疚較可能帶來醫治行為，恥辱較可能導致傷害行為——這個發現對只強調罪疚赦免、卻忽略羞辱醫治的傳統福音表達方式，是重要的提醒與挑戰。',
                '對榮辱文化中的人而言，「福音不只解決罪疚定罪的問題，還能遮掩羞辱、恢復在神面前的榮耀」這個角度，往往比純粹的法庭赦罪框架更具說服力，浪子回頭的故事正是最佳例證。',
                '改革宗「澈底墮落」教義正確地指出人在罪中的絕對敗壞，但西方神學界常只從罪疚角度詮釋這個教義，忽略了墮落同樣帶來羞辱——如何同時處理罪疚與羞辱，才是更完整反映聖經寬廣度的福音。',
                '作者親身經歷印證了這個落差：一位信主多年的七十歲美國婦女，第一次聽到「關於羞辱的信息」時深受觸動——顯示即使在西方教會內部，羞辱的醫治信息也長期缺席。',
                '本章總結全書開篇論點：羞辱可能是一個遠超我們理解的大問題，若教會持續只處理罪疚而忽略羞辱，將錯失福音能觸及的更深層生命轉化——這也為下一章探討羞辱的破壞性後果鋪路。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「羞辱使人逃避、攻擊，罪疚使人修復」，這個心理學發現如何解釋教會牧養中常見的難題？</h4>
              <p className="text-gray-700 leading-relaxed">
                許多牧者都曾遇過信徒在犯錯後不是坦承悔改，反而防衛、迴避，甚至離開教會的情況。若只用「罪疚」的框架理解，很容易將這種反應簡化為「不肯認罪」；但若意識到當事人可能正經歷的是「羞辱」而非單純「罪疚」，牧養者就能明白：對方需要的不是更嚴厲的道德指正（那只會加深羞辱、觸發更強的防禦），而是先被接納、被醫治羞辱的自我認同，才有可能走向真正的悔改與修復。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">作者主張福音應同時處理罪疚與羞辱，這會不會稀釋了十字架「為罪受死」的核心意義？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者並未否定十字架赦免罪疚的核心意義，而是主張這只是十字架果效的一部分，而非全部。他引用來十二2「祂因那擺在前面的喜樂，就輕看羞辱，忍受了十字架的苦難」，說明聖經本身就將「羞辱」與十字架事件緊密相連。因此，強調羞辱得醫治，不是稀釋十字架的意義，而是恢復十字架原本就涵蓋、卻常被窄化神學忽略的另一個向度。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">那位七十歲美國婦女的見證，對「福音材料是否需要因地制宜」這個問題有什麼啟發？</h4>
              <p className="text-gray-700 leading-relaxed">
                這個例子特別值得留意之處在於：受感動的並非某個「榮辱文化」背景的外國人，而是一位在西方教會信主多年的美國本地信徒。這提醒我們，「處理羞辱的福音信息」並非只是為了向非西方文化的人「客製化」的宣教策略，而是連西方教會內部長期被忽略、卻同樣迫切需要的完整福音要素。
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
              '回想一次你自己感到「罪疚」和一次感到「羞辱」的經驗，兩者帶給你的內在反應（想道歉修復，或想逃避反擊）有何不同？',
              '「我最近一次傳講藉著耶穌基督十字架的信息，可以克服羞辱，是在什麼時候？」——請誠實回答作者這個提問。',
              '你所屬的教會，講道和輔導中，多常觸及「羞辱得醫治」這個主題？和「罪得赦免」相比，比例是否懸殊？',
              '「羞辱是關乎我是誰，罪疚是關乎我所做的」——這句話，讓你想起自己生命中哪一段仍未被觸及、醫治的羞辱經驗？',
              '如果浪子回頭的故事，同時是「罪疚的赦免」也是「羞辱的醫治」，你認為哪一部分更貼近你自己讀這個故事時的共鳴？',
              '身處華人「面子文化」中，你觀察身邊的人（包括自己），在犯錯後更常表現出「坦承修復」，還是「逃避防衛」的反應？這對你如何牧養或陪伴他人，有什麼提醒？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 重讀路加福音十五章11-32節，圈出「羞辱」與「榮耀」的線索</h4>
              <p className="text-gray-700 mb-2">
                找出小兒子離家、揮霍、淪落到餵豬（在猶太文化中極度羞辱）、以及父親奔跑相擁、給他袍子戒指鞋子（恢復榮耀身分）的細節，體會這個故事如何同時處理罪疚與羞辱。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 找一個安全的對象，練習「先接納、再談對錯」</h4>
              <p className="text-gray-700 mb-2">
                這一週，若遇到有人向你坦承過犯或軟弱，練習先用言語肯定、接納對方的身分和價值，再溫和地談論行為本身，觀察這樣的順序，是否讓對方更容易敞開。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，感謝祢的十字架不僅赦免我的罪疚，也遮蓋、醫治我的羞辱。求祢光照我心中那些從來沒有被觸及、卻一直困擾我的羞恥感，讓我像那位七十歲的婦人一樣，經歷祢挪去心中石頭的觸摸。也求祢使用我，把這完整的福音，傳給身邊同樣被羞辱綑綁的人。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
