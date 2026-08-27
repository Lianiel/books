import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Ear, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book41Ch29() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-800 to-cyan-900 bg-clip-text text-transparent">第四部 4-3</h1>
        <h2 className="text-xl font-semibold text-gray-700">融入榮辱感於實踐中</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Ear className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">泰國的見證：「好像他就是泰國人」</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者分享自己五年多來研究聖經榮辱動力的親身歷程：他把讀經時遇到的榮辱感段落，用彩色筆一一標記，越讀越喜歡，對聖經的理解也越來越寬敞。二○一三年，作者受邀到泰國，與當地宣教機構合作，舉辦為期三天的研習會，教導當地教會領袖聖經中的榮辱感；隔週主日，他以路加福音五章12-14節（耶穌醫治痲瘋病人）為題證道。回國後，合作夥伴轉述了一位泰國學員的回應：「聽你上課的內容，就好像你生活在泰國一樣，對泰國人非常的了解……從未見過或想像過，會有像他這樣了解泰國文化的西方人。」<sup>1</sup><span style={cite}>（作者與Chansamone Saiyasak私人回應，2013年11月25日。）</span>作者坦言，自己從未在泰國任教，對佛教所知甚少，也不懂泰語——他只是很認真研究聖經的榮辱觀念，這個經驗印證了他的核心信念：傳福音時具備聖經中榮辱感的意識，可以吸引生活在榮/辱文化中的人，讓他們對神的話語感到興趣。作者接著提出三項與榮辱文化相關的實踐建議。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">建議一：透過個人成長歷程，瞭解聖經中的榮與辱價值觀</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者提出一個生動的比喻：宣教士出發前要到「語言學校」裝備當地語言，而「學習聖經中的榮辱文化語言」，同樣應是宣教訓練不可或缺的一環——這需要紀律與委身：讀經、讀經、再讀經！作者建議以小組方式一起學習，以維持這種紀律，並提出三個具體步驟：「閱讀」——以榮辱文化的角度閱讀神的話，試圖以原始聽眾會怎麼聽、怎麼讀來理解經文，建議從路加福音開始；「述說」——不論與人交談或禱告，練習用聖經的榮辱語言（榮耀、榮光）表達自己的信仰心得，不必感到做作；「行動」——在基督的光照下，釐清自己由羞辱轉榮耀的真實路徑，無論是個人的還是群體的，透過禱告和彼此信任的小組，尋找處理生命中羞辱動力的健康管道。作者強調：當我們一起參與、彼此扶持時，這個旅程會更有果效。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">建議二：將「榮耀因素」融入宣教策略和行動中</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                分享耶穌基督的福音是一種榮耀，把福音的祝福帶給未得未觸之民，是更大的榮耀——作者以保羅為榜樣，引用使徒行傳中保羅離開以弗所時所言：「我凡事給你們作榜樣……又當記念主耶穌的話，說：施比受更為有福」（徒二十35）——用來思考基督教向全世界宣教，這個觀念不謀而合。作者以自己所服事的機構Mission ONE為例：長期計劃幫助跨文化合作夥伴在財務上具備永續性，運用本土資源持續宣教事工，這帶來兩方面好處：一是增強當地基督徒領袖及其家庭的尊嚴和榮耀感；二是讓福音的傳揚更具正當性——一位泰國本土宣教組織主任告訴作者：「當他們越能夠自己籌募到資金，越能彰顯基督信仰的榮耀，更容易引人歸主」，因為福音的新禾場「根植於亞洲的土壤」<sup>2</sup><span style={cite}>（Chansamone Saiyasak, "The Adaptation of Buddhism and Christianity to Asian Soils".）</span>時，就不再被視為西方的進口品。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">建議三：從高度掌控改為高度信任——帆船思維</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者指出，一牽扯到掌控，就會對榮耀帶來威脅：誰主導議程規則？誰控制資金？誰掌舵？這是世界基督教運動中敏感而深遠的問題。阿道忽（Alex Araujo）用「帆船航行模式」比喻這個轉變<sup>3</sup><span style={cite}>（Araujo, Lederleitner, and Mischke, "To Catch the Wind".）</span>：來自西方的跨文化工作者，應該從高度掌控的「機動船思維」，轉變為高度信任、順勢調整的「帆船思維」——這能幫助他們更能與聖靈的風搭配、更能掌握跨文化合作過程的潮流風浪、更能於禾場推動事工，並與其他夥伴合作。作者引用哥林多前書十二章保羅論教會身體的經文：「身上肢體，我們看為不體面的，越發給他加上體面……若一個肢體得榮耀，所有的肢體就一同快樂」（林前十二23-26），並歸納原則：教會中強健、榮耀的肢體，對羸弱、不榮耀的肢體表達出越多的尊重，越能展現出教會的合一。作者也誠實反思美國教會的全球主導地位——引用弗格森《文明》和蔡美兒對美國經濟霸權的分析，提醒美國基督徒可能在不知不覺中扮演「強者、榮耀」的角色，這帶來嫉妒、害怕和怨恨等複雜情緒。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者特別聚焦「傾聽」這項被低估的能力：西方人（特別是美國人）習慣掌控、動作迅速，把任務列為優先、關係放在其後，這使他們不容易放慢步伐、安靜傾聽。作者比較了兩種宣教「公式」：「機動船公式」以金錢為主要催化劑——「沒有資金=沒有事工=沒有成果」，金錢優先、傾聽是可有可無的最後選項；作者引述宣教學者洛溫四十多年前的觀察：南美叢林印第安人被問及「跟宣教士生活最有關的一項是什麼」時，不假思索回答「金錢！」<sup>4</sup><span style={cite}>（Jacob Loewen, Culture and Human Values.）</span>「帆船公式」則以「傾聽神、也傾聽人」為主要催化劑，金錢退居次要、與其他事項保持平衡——在榮辱文化中，榮耀是比金錢更重要的「貨幣」，願意花大量時間傾聽的信徒，自然會獲得榮耀與影響力，宣教的果效也隨之而來。
              </p>
              <p className="text-gray-700 leading-relaxed">
                本書最後，作者揭曉全書寫作緣起：一切始於黎巴嫩的一次聆聽。作者的好友以撒牧師是黎巴嫩本地宣教士，兩人一起開車行駛在彎曲山路間，暢談各自的生活與宣教事工，言談間，以撒牧師不經意地說了一句：「真是個大恥辱」——這句話，一直迴盪在作者心中，成為他探索聖經與多數世界人民共通榮辱感的起點，最終寫成了這整本書。作者總結：這是一本聚焦於榮/辱、關於耶穌全球福音的書，目的是聆聽——這正是世界宣教的催化劑。
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
                '作者在泰國教學的真實見證，具體印證了全書的核心論點：即使不懂當地語言、不熟悉當地宗教，光是深刻理解聖經的榮辱動力，就足以讓一位西方宣教士講道時，讓當地聽眾感覺「好像他就是泰國人」。',
                '三項實踐建議環環相扣：先透過個人讀經、述說、行動來親身經歷聖經榮辱動力（建議一），再把「榮耀因素」（如財務自立帶來的尊嚴）具體融入宣教策略（建議二），最後從機構、文化層面調整權力關係，從掌控轉為信任（建議三）。',
                '「帆船思維」對比「機動船思維」的框架，具體挑戰了西方宣教文化中「金錢優先」的預設——在榮辱文化中，傾聽帶來的尊重與關係，本身就是比資金更根本的「社會資本」和宣教催化劑。',
                '哥林多前書十二章「身上肢體，我們看為不體面的，越發給他加上體面」，被作者用來為當代西方教會（尤其美國教會）在全球基督教運動中的主導地位，提供了一面自我省察的鏡子。',
                '洛溫四十年前記錄的南美印第安人回應「金錢！」的故事，尖銳地提醒宣教工作者：即使口頭上宣講的是福音，行為模式若過度倚重資金，當地群體感受到的「終極價值」可能仍是金錢，而非關係與信仰本身。',
                '全書的寫作緣起，出自黎巴嫩友人以撒牧師隨口一句「真是個大恥辱」——這個私人化、充滿情感重量的起點，呼應了本章的核心訊息：真正改變宣教果效的，往往不是宏大的策略，而是願意停下腳步、認真傾聽一句話的謙卑。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「金錢優先」與「傾聽優先」兩種宣教公式，在實務操作上，教會或機構該如何具體轉換？</h4>
              <p className="text-gray-700 leading-relaxed">
                轉換不代表完全不需要資金（宣教事工仍需要實際資源），而是調整優先順序與決策流程：在規劃任何跨文化事工之前，先投入足夠時間傾聽當地夥伴的需求、智慧與意願，讓資金的使用方式、時機，回應傾聽所得的洞察，而非先設定好資金與目標，再要求當地夥伴配合執行。具體做法可能包括：延長初期建立關係、傾聽的階段，先於任何資金承諾；決策會議中，確保當地聲音的份量不低於出資方的意見。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">財務自立如何具體提升「福音的正當性」，這對台灣或華人教會參與跨文化宣教有何借鏡？</h4>
              <p className="text-gray-700 leading-relaxed">
                泰國本土宣教組織主任的觀察提醒我們：當一個地方教會或事工完全仰賴外來資金運作時，即使動機純正，也容易在當地社會中被貼上「外國勢力代理人」的標籤，削弱福音的說服力。對於自身也曾經歷、或至今仍在探索「本色化教會」議題的華人教會而言，這提醒無論是接受宣教支援，還是差派宣教士到其他文化，都應該把「協助當地建立財務自立能力」列為長期目標，而非長期依賴式的資助關係。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">作者以「一句朋友隨口的話」作為全書研究的起點，這對我們理解「神學研究」與「日常生活關係」之間的關係有何啟發？</h4>
              <p className="text-gray-700 leading-relaxed">
                這個真實的寫作緣起提醒我們：深刻的神學洞見，未必總是誕生於書齋或研討會，而常常源自對日常生活中一句話、一個處境的真誠好奇與傾聽。這鼓勵讀者，不要把「認真研讀聖經」與「用心傾聽身邊朋友的生命」看作兩件互不相干的事——正是因為作者願意讓一句朋友隨口的抱怨在心中「迴盪」，才促成了這場長達數年、影響深遠的神學探索之旅。
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
              '你自己在人際關係或服事中，比較習慣「機動船思維」（掌控、任務優先），還是「帆船思維」（順勢、傾聽優先）？',
              '作者建議用「閱讀、述說、行動」三步驟操練認識聖經榮辱動力，你願意從路加福音開始這樣的操練嗎？',
              '你是否曾像洛溫故事中的印第安人一樣，感覺到某個群體或機構「口頭講屬靈的事，實際最看重的卻是金錢」？這對你有何提醒？',
              '「教會中強健、榮耀的肢體，對羸弱、不榮耀的肢體表達出越多的尊重，越能展現出教會的合一」——你觀察自己所屬的教會或群體，是否活出了這個原則？',
              '回想一次你認真傾聽某人一句看似不經意的話，卻因此帶來深刻理解或轉變的經驗。',
              '通讀完全書第一至四部（除結論外）後，你認為「傾聽」這個主題，如何貫穿並總結了整本書關於榮辱、福音與宣教的探討？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 開始「閱讀、述說、行動」的榮辱動力操練</h4>
              <p className="text-gray-700 mb-2">
                本週開始閱讀路加福音，用色筆標記出與榮耀、羞辱相關的詞彙與情境，並找一位朋友，練習用「述說」的方式分享你的心得。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">👂 操練一次「帆船式」的傾聽</h4>
              <p className="text-gray-700 mb-2">
                本週找一次與人交流的機會（服事夥伴、家人、朋友），刻意放下自己的議程和急迫感，單純用心傾聽對方，不急著給建議或解決方案，觀察這帶來什麼不同的果效。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，感謝祢透過一句朋友隨口的話，開啟了這整本書的旅程。求祢也賜給我一顆願意傾聽的心——傾聽祢的聲音、傾聽身邊每一個人的心聲，讓我在服事與宣教中，不再只倚靠自己的計畫與資源，而是真正跟隨祢聖靈的風。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
