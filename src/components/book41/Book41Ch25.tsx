import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Droplet, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book41Ch25() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-800 to-cyan-900 bg-clip-text text-transparent">第三部 3-9</h1>
        <h2 className="text-xl font-semibold text-gray-700">福音為「潔淨」的動力所形塑？</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Droplet className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">潔淨：多元文化世界的共通語言</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者的答案是肯定的。在探討之前，作者特別強調一個事實：基督教之外，佛教、印度教和伊斯蘭教的潔淨禮儀，同樣是各自文化中習以為常的一環——佛教的潔淨（suddha）指除去道德品格的汙穢，如憤怒、無知、慾望，以進入涅槃<sup>1</sup><span style={cite}>（"Purity in Buddhism," Wikipedia.）</span>；印度教徒在恆河等聖河沐浴淨身，於節日或喪禮前後進行潔淨儀式<sup>2</sup><span style={cite}>（"Ritual Purification," Wikipedia.）</span>；伊斯蘭教則規定每位穆斯林必須維持靈魂、衣服和環境的清潔，祈禱前需先潔淨儀式，可蘭經寫道：「真主的確喜愛悔罪的人，的確喜愛潔淨的人」（2:222）<sup>3</sup><span style={cite}>（"Ritual Purity in Islam," Wikipedia.）</span>。作者指出：今日世界上絕大多數福音的未觸或未得之民，都是穆斯林、印度教徒或佛教徒，都守著潔淨的風俗規範；而舊約和新約也有許多與潔淨相關的內容，多半與耶穌基督的贖罪有關——因此，運用潔淨的概念和語言傳達福音，是很有意義的策略。
              </p>
              <p className="text-gray-700 leading-relaxed">
                作者引述宣教士湯馬斯（Bruce Thomas）的觀察：他家中幫傭分享，穆斯林文化中「性交後不淨身，比犯姦淫還糟糕」——湯馬斯因此領悟：「也許對穆斯林而言，最重要的，並不是罪得救贖，而是擺脫汙穢。一旦沾染不潔，將是如影隨形的桎梏……汙穢，簡言之，是人類墮性的一部分。我好奇，在這種文化氛圍之下，是否傳福音有更貼切的方式？也許，透過處理人的汙穢、墮落，傳福音會更有果效。」<sup>4</sup><span style={cite}>（Bruce Thomas, "The Gospel for Shame Cultures."）</span>作者由此提出一個大哉問：藉由希伯來人的潔淨概念，使用潔淨相關的語彙來傳福音，是否能帶給穆斯林、印度教徒和佛教徒更多共鳴？傳福音，不再只是針對罪愆提出補救之道，而是宣告有一位能潔淨汙穢的救主。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">誰能潔淨我們？耶穌的潔淨大能</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                以賽亞在異象中見神時驚呼：「禍哉！我滅亡了！因為我是嘴唇不潔的人，又住在嘴唇不潔的民中」（賽六5）；書末又寫道：「我們都像不潔淨的人；所有的義都像污穢的衣服」（賽六四6）——罪就是不潔，這是先知反覆確認的觀點。福音書記載耶穌兩次潔淨不潔之人的神蹟：耶穌觸摸痲瘋病人，「大痲瘋立刻就離了他的身」（路五12-14），痲瘋病人本是極不潔淨、甚至連同處一室都會沾染不潔的存在，但耶穌的潔淨能力勝過痲瘋病人的汙穢，且吩咐他去見祭司，使他能在群眾中除去羞辱、恢復榮耀；耶穌也醫治患血漏十二年的婦人，「摸他的衣裳繸子……女人就痊癒了」（太九20-22），耶穌不僅潔淨了她，還稱她為「女兒」，把她當作家人，恢復並提升了她的地位。作者總結：與其用赦罪之恩作為福音的唯一媒介，聚焦於基督能潔淨生命，這種福音路徑，可能為許多人帶來更深的共鳴。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">利未記中「潔淨與贖罪一致」的見證</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                利未記十四章詳細記載潔淨長大痲瘋者的繁複儀式：獻上潔淨的活鳥，取活水與鳥血灑在求潔淨人身上；洗衣服、剃毛髮、沐浴；第八天獻上贖罪祭與贖愆祭，祭司取血抹在「求潔淨人的右耳垂上和右手的大拇指上，並右腳的大拇指上」<sup>5</sup><span style={cite}>（右耳、右手、右腳代表一個人從頭到腳全身恢復榮耀：聽見他人、展現效能、行走得宜。）</span>，最終「祭司為他贖罪，他就潔淨了」（利十四20）——這裡清楚看見，贖罪與潔淨的榮辱感是完全一致的。利未記十六章的贖罪日經文更直接宣告：「因在這日要為你們贖罪，使你們潔淨。你們要在耶和華面前得以潔淨，脫盡一切的罪愆」（利十六30）。作者統計，若大聲朗讀利未記十六章，會發現「贖罪」出現15次，「贖罪祭」11次，加上「血」「潔淨」「不潔」「沐浴」「水」「洗淨」等潔淨語彙頻繁出現——這些內容，讓我們更深理解：耶穌自己是完美的大祭司，祂能獻上完全的贖罪血祭（來七26-27，九13-14），為了永遠的潔淨，以耶穌寶血贖罪是必須的。
              </p>
              <p className="text-gray-700 leading-relaxed">
                新約作者延續這套潔淨語彙描述基督的救贖：「他兒子耶穌的血也洗淨我們一切的罪」（約壹一7-9）；「奉主耶穌基督的名……已經洗淨，成聖，稱義了」（林前六11）；希伯來書更直接對比：「若山羊和公牛的血……灑在不潔的人身上，尚且叫人成聖，身體潔淨，何況基督藉著永遠的靈，將自己無瑕無疵獻給神，他的血豈不更能洗淨你們的心，除去你們的死行」（來九13-14）；「我們既因耶穌的血得以坦然進入至聖所……身體用清水洗淨了，就當存著誠心和充足的信心來到神面前」（來十19-22）。作者提出實用建議：教會可以考慮以潔淨為主軸，為特定性別對象研發福音教材——對婦女可從耶穌潔淨血漏婦人的故事開始（路八43-48），對男士可從耶穌潔淨痲瘋病人（路五12-14）或汙鬼附身的人（可五1-20）著手，並邀請家人一起禱告：「耶穌，只要祢願意，祢可以洗淨我們的心，使我們得潔淨。」作者也提醒：利未記和希伯來書雖是西方教會不擅講授的書卷（因神學複雜、潔淨概念陌生），但對熟悉宗教潔淨儀式的佛教徒、印度教徒和穆斯林而言，這兩卷書或許正是引導他們認識福音、進行門訓裝備的關鍵路徑<sup>6</sup><span style={cite}>（沃爾斯觀察，非洲獨立教會因發現利未記與當地生活雷同，容易順理成章接受福音；十九世紀宣教家克勞瑟主張聖經翻譯應優先譯出利未記。）</span>。
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
                '佛教、印度教、伊斯蘭教都有各自的潔淨儀式傳統，這意味著「潔淨」是世界主要宗教共通的文化語言，而今日絕大多數未得未觸之民，正屬於這些宗教背景——這使潔淨動力成為極具潛力的福音切入點。',
                '宣教士湯馬斯的觀察提醒我們：對某些穆斯林而言，「擺脫汙穢」可能比「罪得赦免」更貼近他們真實的心理需求與文化直覺，這挑戰了西方教會單一化的福音表達習慣。',
                '耶穌潔淨痲瘋病人與血漏婦人的神蹟，示範了「觸摸不潔卻不被玷汙，反而使人潔淨」的獨特能力，這與利未記中複雜的潔淨儀式形成對比——耶穌以自己的聖潔，取代了繁瑣的外在儀式。',
                '利未記十四章潔淨痲瘋者的儀式中，血抹在右耳、右手、右腳大拇指上，象徵一個人從頭到腳、在聽、做、行三方面全然恢復榮耀，這個細節揭示了潔淨儀式背後「全人恢復」的深意。',
                '新約作者（約翰、保羅、希伯來書）大量沿用舊約潔淨語彙描述基督的救贖工作，證明「潔淨」不是外於福音核心的邊緣主題，而是聖經一以貫之描述救恩的重要語言系統。',
                '作者具體建議教會考慮以「潔淨」為主軸設計福音材料，並指出利未記、希伯來書雖是西方教會較少深入教導的書卷，對熟悉宗教潔淨傳統的多數世界民族而言，反而可能是最容易產生共鳴的宣教路徑。',
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
              <h4 className="font-semibold text-gray-800 mb-2">用「潔淨」取代「赦罪」作為福音的主要框架，是否有可能讓聽眾誤以為基督教也是一套「儀式潔淨」的宗教？</h4>
              <p className="text-gray-700 leading-relaxed">
                這是需要小心拿捏的溝通挑戰。關鍵差異必須清楚傳達：其他宗教的潔淨是人透過自己的行為（沐浴、齋戒、儀式）換取潔淨，是一種「人努力達成」的模式；而基督信仰宣告的潔淨，是耶穌基督主動、單方面、一次性地成就（來十12「基督獻了一次永遠的贖罪祭」），人只需憑信心領受，而非透過反覆的儀式勞碌換取。傳講時務必凸顯這個「恩典 vs. 行為」的根本區別，否則確實可能被誤解為又一套宗教潔淨儀軌。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">利未記十四章潔淨儀式中「右耳、右手、右腳」抹血的細節，對今日信徒理解「全人得贖」有何啟發？</h4>
              <p className="text-gray-700 leading-relaxed">
                這個細節提醒我們，聖經中的救贖從來不只是抽象的「靈魂得救」，而是具體涉及一個人生命的每個面向——聽的能力（耳）、做工的能力（手）、行走人生道路的能力（腳）。這對今日容易把信仰窄化為「內心平安」或「來世保障」的信徒是重要提醒：基督的救贖同樣關乎我們如何聆聽他人、如何在職場勞動、如何走前面的人生道路——是全人、全生命的更新，而非僅止於靈魂層面。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">西方教會不擅長教導利未記、希伯來書，這個現象本身，如何反映了本書第一部所指出的「西方神學盲點」？</h4>
              <p className="text-gray-700 leading-relaxed">
                這正是一個具體而微的案例，印證全書開篇的核心論點：不是這些經卷不重要或難以理解，而是西方讀者缺乏「潔淨文化」的生活經驗，因此難以直覺地進入這些經文的世界，導致長期被邊緣化、簡化成「舊約律法背景知識」，而非活生生的福音資源。這提醒西方神學教育工作者，應該更謙卑地向擁有潔淨文化背景的非西方教會學習，如何重新發掘這些經卷的宣教潛力。
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
              '根據希伯來書九章14節，基督的贖罪目的是「洗淨你們的心，除去你們的死行」——除了消除神的忿怒之外，你認為基督的贖罪還有什麼意義？',
              '你是否認識來自佛教、印度教或伊斯蘭教背景的朋友？他們對「潔淨」「汙穢」的觀念，與你過去理解的福音框架有何異同？',
              '耶穌潔淨痲瘋病人與血漏婦人的兩個故事，哪一個更能幫助你理解「基督的聖潔勝過我們的汙穢」這個真理？',
              '你認為自己所屬的教會，是否曾探討過利未記或希伯來書中潔淨的主題？這對你的信仰生活有何影響？',
              '如果要向一位穆斯林朋友介紹福音，你會如何運用「潔淨」而非單純「赦罪」的角度切入？',
              '本章結尾建議「教導家人一起禱告『耶穌，只要祢願意，祢可以洗淨我們的心』」——你願意為自己的家庭這樣禱告嗎？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 精讀利未記十四章、希伯來書九至十章</h4>
              <p className="text-gray-700 mb-2">
                對照舊約潔淨儀式的繁複步驟，與新約「基督一次獻上、永遠有效」的宣告，體會兩者之間的呼應與翻轉，寫下你的觀察。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙌 設計一份以「潔淨」為主軸的福音分享</h4>
              <p className="text-gray-700 mb-2">
                參考本章建議，練習用耶穌潔淨痲瘋病人或血漏婦人的故事，向人分享「耶穌能洗淨我們的心」這個福音信息。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，感謝祢是那位觸摸不潔卻不被玷汙、反而使人潔淨的大祭司。求祢用祢的寶血，洗淨我心中一切的汙穢與死行，也求祢幫助我，把這潔淨的好消息，傳給世界上每一個渴望脫離汙穢、卻不知道祢名字的人。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
