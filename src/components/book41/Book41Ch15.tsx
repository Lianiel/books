import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book41Ch15() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-800 to-cyan-900 bg-clip-text text-transparent">第二部 2-9</h1>
        <h2 className="text-xl font-semibold text-gray-700">榮辱感第九項：潔淨</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">定義：從憎惡到聖潔的光譜</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                本章描述社會底層的人如何因不潔而被貶抑，成為社會的邊緣人物，相對地，擁有尊榮地位的人又如何因聖潔，而成為社會中的「核心人物」；說明利未記的潔淨規範和聖潔循環，這觀念對理解耶穌事奉的本質相當重要，但對西方人而言是陌生的概念；並回顧福音書中耶穌的生平故事，如何超越舊約律法、跨越潔淨的儀式與規範，為人類的道德失喪、疾病、殘廢或死亡帶來醫治；也探討傳揚基督的重要性——福音不僅醫治罪惡，也為不潔和羞辱帶來曙光。潔淨是指在神聖的神面前，擁有被認同、接納的條件，且有具體的條例可依循，這些條例提供清楚的界限，區分聖潔、平凡、潔淨、不潔和憎惡。
              </p>
              <p className="text-gray-700 leading-relaxed">
                耶穌醫治痲瘋病人的經文，貫穿了舊約和新約關於潔淨的概念：「有人滿身長了大痲瘋，看見他，就俯伏在地，求他說：主若肯，必能叫我潔淨了。耶穌伸手摸他，說：我肯，你潔淨了吧！」（路五12-14）如果沒有讀過利未記十三、十四章，一般人無從理解「長了大痲瘋」的羞辱有多嚴重，這也凸顯耶穌此舉彰顯了莫大的能力。利未記規定：痲瘋病人「衣服要撕裂，也要蓬頭散髮……喊叫說：不潔淨了！不潔淨了！……他便是不潔淨；他既是不潔淨，就要獨居營外」（利十三45-46）——痲瘋病人不可掩飾疾病，必須公開宣告自己的不潔，並被隔離於社群之外，猶太人的身分認同源自族群，因此這種排擠極其痛苦。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">聖潔循環：五種概念圖</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                希伯來人與造物主立約：「你們要成為聖潔，因為我是聖潔的」（利十一44-45）。生活中的一切，都與聖潔的基本標準相關：不聖潔的事物被認為是平凡的，平凡的事物不是潔淨、就是不潔淨。神的子民可以從不潔淨過渡到潔淨、再到聖潔，也可能從聖潔落到潔淨、再沉淪成為不潔淨，這構成了「成聖循環」<sup>1</sup><span style={cite}>（利十10相關教導。）</span>——潔淨的人可透過「潔淨儀式」除去不潔（如患漏症、觸摸屍體、吃不潔食物），潔淨的人也可透過「聖化」成為聖潔；反之，聖潔的祭司可能因接觸平凡事物而「褻瀆神」，潔淨的人也可能因各種汙染而被「玷汙」。
              </p>
              <p className="text-gray-700 leading-relaxed">
                德西瓦詳細描述猶太人關於聖潔、潔淨和不潔的心理地圖，包括五種概念圖<sup>2</sup><span style={cite}>（deSilva.）</span>：人物概念圖（範圍從大祭司、祭司、利未人、以色列平民，到血統不純正的猶太人，最底層是外邦人）；空間概念圖（從「外部」世界，到以色列、耶路撒冷城，再到聖殿的外院、內院，最後是最神聖也最危險的至聖所）；時間概念圖（安息日、安息年、禧年，為神騰出分別為聖的時間）；飲食規定（食物潔淨與否，屢屢提醒誰是「自己人」、誰不是）；身體概念圖（血液、夢遺、月經、身體排泄物的潔淨規範）。作者總結：這套潔淨規範和榮辱文化價值觀完全一致，神要求百姓遵守，是為了與祂維持穩固的團契關係。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">耶穌「改寫了潔淨概念圖」</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者列舉福音書中一連串耶穌跨越潔淨界限、卻絲毫不受玷汙的醫治故事：耶穌觸摸痲瘋病人，非但沒有變得不潔淨，反而醫治潔淨了他，耶穌的潔淨程度大過痲瘋病人的汙穢（太八2-4）；耶穌進入長大痲瘋的西門家中，在受十字架羞辱之前，先在這個不潔之地被尊榮相待（太廿六6-13）；耶穌醫治患血漏、極度不潔的女人，不僅沒有責備她「摸」了自己，反而稱她「女兒」，讓她成為祂家族的一份子，提升她的榮耀身分（可五21-34）；耶穌觸摸已死、被視為極不潔淨的女孩屍體，說「閨女，我吩咐你，起來！」使她復活，象徵她的地位獲得榮耀提升（可五21-43）；耶穌醫治住在墳塋裡、被稱為「群」的汙鬼所附身的人——這人集外邦人、被鬼附、赤身露體、住在死人墳塋間四重極度不潔於一身，耶穌卻命令汙鬼出來，使他回到自己的社區傳揚神的作為（路八26-39）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                德西瓦總結：「福音書介紹耶穌遇到一群不潔的人，他們甚至可能汙穢人，但當耶穌遇到這些人，他們並沒有玷汙耶穌；反而是耶穌的聖潔除去了他們的汙穢，潔淨了他們，並且幫助他們融入猶太人的主流社會中，恢復他們與生俱來的權利——他們是神的子民。」<sup>3</sup><span style={cite}>（deSilva.）</span>耶穌為門徒洗腳時，彼得抗拒：「你永不可洗我的腳」，耶穌回應後，彼得說：「主啊，不但我的腳，連手和頭也要洗」，耶穌卻說：「凡洗過澡的人，只要把腳一洗，全身就乾淨了。你們是乾淨的」（約十三8-10）——這句「你們是乾淨的」，是神的兒子親口對彼得的有力宣告。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">彼得與哥尼流：一場「文化革命」</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                初代教會最戲劇性的潔淨概念圖重寫，發生在使徒行傳十章：外邦百夫長哥尼流蒙天使指示，差人請彼得前來；彼得同時在異象中看見「一物降下，好像一塊大布……裏面有地上各樣四足的走獸和昆蟲」，有聲音說「彼得，起來，宰了吃！」彼得三次強烈抗議：「主啊，這是不可的！凡俗物和不潔淨的物，我從來沒有吃過」，主卻堅定回應：「神所潔淨的，你不可當作俗物」（徒十11-15）。彼得因此違反潔淨規範，前往外邦人哥尼流家中，坦言：「你們知道，猶太人和別國的人親近來往本是不合例的，但神已經指示我，無論什麼人都不可看作俗而不潔淨的」（徒十28）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                彼得向哥尼流一家傳講耶穌基督的福音，「彼得還說這話的時候，聖靈降在一切聽道的人身上」，猶太信徒「見聖靈的恩賜也澆在外邦人身上，就都希奇」（徒十44-45），彼得於是吩咐給他們施洗。作者形容：「神國度的恩典、包容和在基督裡的榮耀，進到哥尼流的家中。隔閡終於瓦解，基督的救恩消弭了敵意和藩籬」（弗二14）——外邦人不再是「與基督無關……沒有指望，沒有神」的局外人，而是「在基督耶穌裏，靠著他的血，已經得親近了」（弗二12-13）。這件事在初代教會引發不小爭執，「受割禮之人」批評彼得「進入未受割禮之人的家和他們一同吃飯」（徒十一3），弗萊明形容這「簡直是一場文化革命」<sup>4</sup><span style={cite}>（Dean Flemming.）</span>。此事最終促成耶路撒冷會議，彼得在會上見證：「神……藉著信潔淨了他們的心，並不分他們我們」（徒十五9），會議最終決議：外邦信徒不需受割禮，只需「因信耶穌基督而得救」。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">新約重繪潔淨概念圖</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                彼得、保羅和其他新約作者，把舊約潔淨的詞彙保留下來，賦予全新的意義。約翰寫道：「他兒子耶穌的血也洗淨我們一切的罪……我們若認自己的罪，神是信實的，是公義的，必要赦免我們的罪，洗淨我們一切的不義」（約壹一7-9）；耶穌在大祭司的禱告中求「你用真理使他們成聖」（約十七17），成聖的過程從主要是外在的潔淨儀式，重新定義為用神的真理做內在生命的潔淨。<sup>5</sup><span style={cite}>（相關神學論述。）</span>保羅寫基督「要用水藉著道把教會洗淨，成為聖潔」（弗五26），也提醒信徒「已經洗淨，成聖，稱義了」（林前六11），並用祭司的語言描述自己作外邦人使徒的呼召：「作神福音的祭司，叫所獻上的外邦人，因著聖靈成為聖潔」（羅十五16）。
              </p>
              <p className="text-gray-700 leading-relaxed">
                希伯來書對潔淨概念圖的改寫論述最為豐富：基督的事工被概括為「洗淨了人的罪」（來一3），祂流自己的血，能「洗淨我們的心，除去死行，使我們事奉那永生神」（來九13-14），信徒被告誡「我們心中天良的虧欠已經灑去，身體用清水洗淨了，就當存著誠心和充足的信心來到神面前」（來十22）——基督贖罪的潔淨能力，超越外在儀式，觸摸到人內心深處的良心與隱蔽的羞恥感。作者總結：不只罪疚在神面前被撤銷，透過基督榮耀的救贖，我們的羞辱也得以被醫治。舊約中，一年僅一天、唯獨大祭司一人能進入至聖所；相對地，在新約中，這種親近神、進入至聖所的至高尊榮，藉著基督的救贖，凡求告主名的人都能獲得。至此，作者總結全部九種榮辱動力（榮耀之愛、兩種榮耀來源、資源有限、挑戰反擊、情面概念、身體語言、守護關係、名字親屬血統、潔淨），並預告下一章將介紹貫穿全書的關鍵鑰匙：榮耀地位的逆轉。
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
                '利未記的潔淨規範構成一套「成聖循環」，人和物可在潔淨/不潔淨、聖潔/褻瀆之間移動，涵蓋人物、空間、時間、飲食、身體五大概念圖，這套系統與榮辱文化的界限邏輯完全一致。',
                '耶穌一次又一次跨越潔淨界限——觸摸痲瘋病人、患血漏的女人、死去的女孩屍體、被鬼附的人——卻從未因此變得不潔淨，反而是祂的聖潔翻轉了對方的不潔，使他們得醫治、重新被群體接納。',
                '彼得與哥尼流的故事（徒十至十五章）是初代教會最劇烈的潔淨概念圖重寫：神親自宣告「神所潔淨的，你不可當作俗物」，外邦人不需受割禮即可因信稱義，這被形容為「一場文化革命」。',
                '耶路撒冷會議確立了教會歷史的關鍵原則：救恩單單本乎信靠耶穌基督，不需要遵守猶太潔淨規範或受割禮，這為福音向普世萬族開展奠定了神學基礎。',
                '新約作者（約翰、保羅、希伯來書）持續使用「潔淨」「成聖」的語言，但將其重新定義為基督寶血洗淨人心、真理成聖生命的內在工作，而非單純的外在儀式。',
                '在舊約，只有大祭司一年一次能進入至聖所；在新約，藉著基督的救贖，凡求告主名的人都能獲得這種至高尊榮的親近神的權利——這正是福音「潔淨」向度所帶來的翻轉性好消息。',
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
              <h4 className="font-semibold text-gray-800 mb-2">利未記的潔淨規範，對今日讀者而言常顯得繁瑣甚至陌生，理解榮辱文化的框架，如何幫助我們重新欣賞這些律法的意義？</h4>
              <p className="text-gray-700 leading-relaxed">
                多數現代讀者讀利未記時，容易把這些規範當作過時、瑣碎的宗教儀式，甚至感到困惑或反感。但若理解這套規範背後所服務的，其實是「如何讓一個聖潔的神與一群不潔的百姓維持親密關係」這個核心關懷，就能看見這些條例並非隨意的禁令，而是神體貼百姓處境、為他們預備的一套具體可行的「親近神」路徑——這正是神看重與百姓關係的表現，而非單純的規條主義。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">耶穌「觸摸不潔卻不被玷汙」的模式，對今日教會如何接觸社會邊緣群體，有何具體的服事方法論啟發？</h4>
              <p className="text-gray-700 leading-relaxed">
                許多教會在接觸吸毒者、性工作者、更生人等被視為「不潔」的群體時，容易陷入兩難：要嘛過度保持距離以「保持聖潔」，要嘛因過度靠近而失去清楚的價值立場。耶穌的模式提供第三條路：主動靠近、觸摸不潔之人，卻靠著自身的聖潔翻轉對方的處境，而非被對方的不潔同化。這提醒教會，真正的聖潔不是隔離式的自我保護，而是有能力主動進入破碎處境、仍持守自身立場、並帶來翻轉性醫治的聖潔。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">彼得與哥尼流事件中「猶太信徒詫異到無言以對」的沉默，對今日教會面對神打破舊有框架時的反應，有何提醒？</h4>
              <p className="text-gray-700 leading-relaxed">
                即使是使徒彼得本人和初代教會核心領袖，面對神親自推翻延續兩千年的潔淨規範時，都經歷了震驚、抗拒、甚至長時間的沉默無語。這提醒今日教會，當面對神在文化處境化、跨文化宣教等議題上似乎正在做「新事」、挑戰既有傳統框架時，教會不必因一時的困惑、抗拒而自責，但也應效法耶路撒冷會議「聚集商議、尋求聖經根據、順服聖靈引導」的態度，而非固守傳統、拒絕神可能正在做的新工作。
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
              '根據希伯來書十章22節，基督寶血的力量足以洗淨我們的心！你是否曾經從罪疚和羞辱中，體驗過這股潔淨的力量？',
              '在耶穌醫治的五個例子（痲瘋病人、西門家的女子、患血漏的女人、死去的女孩、被鬼附的人）中，哪一個故事最觸動你？為什麼？',
              '你的生命或人際關係中，是否曾經像那位患血漏的女人一樣，長期活在「不敢被看見」的羞辱陰影中？耶穌的問題「誰摸我的衣裳」對你有什麼意義？',
              '彼得三次抗拒神要他吃「不潔淨」食物的異象，你是否也曾像他一樣，因固守某種傳統框架，而抗拒神可能正在做的新事？',
              '「神所潔淨的，你不可當作俗物」——這句話，如何挑戰你對某些群體（種族、社會地位、道德處境）根深柢固的成見？',
              '教會歷史上第一次重大紛爭（耶路撒冷會議），是關於「外邦人是否需要遵守猶太潔淨規範」，這對你理解今日教會面對文化差異的爭議，有何啟發？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 精讀利未記後重讀馬可福音</h4>
              <p className="text-gray-700 mb-2">
                先概覽利未記中的潔淨規範，重新認識摩西律法的架構；接著閱讀馬可福音，觀察耶穌一次次跨越這些界限醫治人的故事，體會這對當時讀者帶來的衝擊。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🌏 為「潔淨儀式」文化中的未得之民代禱</h4>
              <p className="text-gray-700 mb-2">
                許多未得或未觸之民，每日要進行潔淨儀式，這是他們宗教生活的一部分。本週為這樣的群體代禱，求神幫助他們認識：基督的十字架能消弭羞恥感、淨化人心，帶來真正的潔淨。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，感謝祢主動觸摸我生命中不潔、破碎、羞辱的部分，而不被我的不潔玷汙，反而用祢的聖潔翻轉了我。求祢幫助我，效法祢的樣式，願意主動靠近那些被社會視為不潔、邊緣的人，把祢潔淨、醫治的大能帶給他們。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
