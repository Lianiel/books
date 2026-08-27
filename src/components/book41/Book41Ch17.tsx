import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Sprout, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book41Ch17() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-800 to-cyan-900 bg-clip-text text-transparent">第三部 3-1</h1>
        <h2 className="text-xl font-semibold text-gray-700">福音為「榮耀之愛」所形塑？</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          「父怎樣差遣了我，我也照樣差遣你們。」（約20:21）
        </p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Sprout className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">第三部：多元文化世界的全球福音</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                第一部闡述了西方神學對榮辱文化的盲點；第二部探討了聖經中榮辱文化的九項基本特徵和一個主題。現在進入第三部，作者要提升到榮/辱意識的第四層次——「宣教的」層次：運用第二部探討的十種榮辱動力，發展出更能與置身榮辱文化中的人們產生共鳴的福音表達方式。作者坦言，這部分內容具有創新性、甚至可能引起爭議，因此以三個段落打好基礎：「概述」引用七位來自世界不同地區的基督教學者，指出西方神學的偏見與局限；「福音種子」解釋外殼與核心的概念，用以說明全球福音情境化的方法；「對話」則提出一套「聖經、榮辱感與福音」三方對話的方法論，作為第三部十章的寫作基礎。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在「概述」中，作者引述南非宣教學者博許的名著《更新變化的宣教》：「當大規模西方殖民行動開始擴張時，西方基督徒並沒有意識到他們的神學受到文化條件的束縛；他們只能假設它是超越文化性、有普遍的效度。」<sup>1</sup><span style={cite}>（David Bosch, Transforming Mission, 448.）</span>拉丁美洲神學家埃斯克巴爾則提醒，必須屏棄「帝國式的宣教模式」——憑藉政治、軍事、金融、技術等優勢展開宣教，而應效法約翰福音二十章21節「父怎樣差遣了我，我也照樣差遣你們」所示範的宣教風格。<sup>2</sup><span style={cite}>（Samuel Escobar.）</span>紐畢真更直言：「純粹的福音是不存在的……宣教士並沒有帶來純正的福音，使福音適用於服事對象的文化；傳教士帶來的福音傳達了自己的文化。」<sup>3</sup><span style={cite}>（Lesslie Newbigin, 144.）</span>羅頌全批判美國福音派教會的「白人文化牢籠」，田奈特分析初代教會如何借用聽眾的思想形式傳講福音（如向外邦人宣講「主耶穌」而非「彌賽亞」、保羅在雅典引用希臘詩人的話），吳榮則提醒情境化神學要避免「簡化論」的陷阱。作者總結：這些學者共同的觀點是——西方基督教群體往往展現神學偏見，需要承認並減少；而靈活的福音情境化，才能讓福音在各種文化中展現生命力。
              </p>
              <p className="text-gray-700 leading-relaxed">
                「福音種子」這個比喻，來自博許：福音的種子有外殼（形式）與核心（功能）兩部分，傳統的情境化方法只調整外殼、核心維持不變，隱含著「核心即是西方觀點」的預設。<sup>4</sup><span style={cite}>（Bosch, 449.）</span>作者主張，應該採用一種更徹底的情境化方法：把福音的外殼和核心都情境化，讓福音能與宣教對象的文化真正產生共鳴。為此，第三部採用吳榮所建議的「對話式情境化」<sup>5</sup><span style={cite}>（Wu, "dialogical contextualization."）</span>：針對第二部探討的十種榮辱動力，逐一探問「聖經中是否有足夠素材，能發展出更貼近榮辱文化的福音表達方式？」田奈特提醒：「榮辱文化是古代地中海地區最重要的價值觀之一……隨著教會在以羞辱為基礎的文化背景中不斷擴展，福音如何與這種文化維持密切關係，顯得日益重要。」<sup>6</sup><span style={cite}>（Tennent, Theology in the Context of World Christianity, 101.）</span>
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">是否有一種全球福音由「榮耀之愛」衍生？</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者的答案是肯定的：聖經中有大量素材，結合了耶穌基督的福音與「榮耀之愛」。這種「全球福音」的呈現原則是：對於以榮辱為主要價值觀的人們而言，他們誠然渴望榮耀，而為了減輕羞辱，也可能成為激勵他們相信基督、獲得永生的因素。大多數西方人認為，福音的表達主要是為了減輕罪所衍生的內疚感——但這其實是一種西方的神學偏見<sup>7</sup><span style={cite}>（罪與罪疚是客觀事實，問題在於是否只關注這一面向。）</span>；何不換個角度，鋪陳「人類渴望尊榮，並藉此減輕羞恥感」這樣的福音信息？耶穌對法利賽人說：「你們互相受榮耀，卻不求從獨一之神來的榮耀，怎能信我呢？」（約五44）；保羅也寫道：「凡恆心行善、尋求榮耀、尊貴和不能朽壞之福的，就以永生報應他們」（羅二7）——這種對榮耀的渴望，本就是聖經信息的一部分。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者提出兩種可行的實踐作法。第一，以浪子回頭的比喻作為福音切入點：作者自己設計、Mission ONE出版的《天父之愛福音小冊》，正是以「對榮耀的渴望、對羞恥的遮蓋」為核心，透過浪子的故事和插圖鋪陳福音——小冊子的關鍵段落寫道：「耶穌教導世人，上帝就像故事中這位父親，願意為我們蒙受羞辱……祂死在十字架上，為全人類受羞辱。但是，祂從死裡復活，為我們打敗了罪惡和羞辱。」<sup>8</sup><span style={cite}>（The Father's Love Gospel Booklet, 18.）</span>這正呼應希伯來書：「因那擺在前面的喜樂，就輕看羞辱，忍受了十字架的苦難，便坐在神寶座的右邊」（來十二2）。這本小冊子已有英語、西班牙語和阿拉伯語版本，是把「福音種子」外殼與核心都情境化、同時忠於聖經文本的實際範例。
              </p>
              <p className="text-gray-700 leading-relaxed">
                第二，以彼得前書為布道素材：這卷書信明確提到救恩和基督十字架的救贖工作（一3、18-19，二24，三18），是寫給為信仰忍受羞辱、誹謗和敵意的信徒（一6，二4、11、19-21等），並非常強調信徒的至高榮耀與基督家庭的好聲望（一6-9、12、20-21等）——彼得引用以賽亞書：「他在你們信的人就為寶貴」（彼前二7；賽廿八16），正好呼應「信靠他的人必不至於羞愧」。作者也提出其他可能作法：以創世記十二章2節「叫你的名為大」連結亞伯拉罕的故事，適合重視先人傳承的穆斯林、亞洲社會或部落民族；以詩篇五十七篇「我的榮耀啊，你當醒起！」連結大衛戰勝歌利亞、被掃羅嫉妒追殺的故事，呼應羅馬書三章23節「世人都犯了罪，虧缺了神的榮耀」。作者總結提出三個問題：人們為了實現羞辱蒙遮蓋、渴望榮耀獲恢復，有何拯救路徑可依循？我們能否研擬出有創意的策略，凸顯聚焦於基督裡的「全球福音」？我們是否有足夠創意，傳達一種跨越單純罪惡醫治、也實現對榮耀渴望與羞辱減緩的福音信息？
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
                '第三部的方法論由「概述」（七位跨文化學者對西方神學偏見的反思）、「福音種子」（外殼與核心都需情境化）、「對話」（聖經、榮辱感與福音三方對話）三部分構成，是接下來十章的共同基礎。',
                '博許、埃斯克巴爾、紐畢真等學者一致指出：不存在「不帶文化色彩」的福音表達，西方福音派長期把自身文化預設當作普世標準，這是需要謙卑正視、卻常被忽略的神學盲點。',
                '「福音種子」外殼／核心的比喻提醒我們：傳統情境化只換了外殼（語言、風俗），核心（教義框架）卻仍固守西方觀點；真正徹底的情境化，應該連核心的表達方式都向聖經本身的榮辱文化敞開。',
                '本章主張：福音信息可以合法地以「榮耀之愛」為框架呈現——人渴望尊榮、渴望脫離羞辱，本身就是聖經（約五44、羅二7）認可、甚至可以成為信靠基督動機的合理渴望。',
                '《天父之愛福音小冊》示範了如何把浪子回頭的比喻，轉化為兼顧「外殼」（敘事、插圖）與「核心」（十字架帶來的羞辱遮蓋與榮耀恢復）都情境化的福音工具，已有多語言版本在跨文化宣教中使用。',
                '彼得前書因同時具備救恩教導、蒙羞信徒的處境、以及對信徒榮耀身分的強調，被作者推薦為特別適合向榮辱文化背景聽眾使用的布道素材。',
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
              <h4 className="font-semibold text-gray-800 mb-2">主張福音也應處理「人渴望榮耀」的動機，會不會助長一種以自我為中心、追求肯定的信仰動機？</h4>
              <p className="text-gray-700 leading-relaxed">
                這是值得謹慎分辨的問題。作者的論點並非鼓勵人「為了自己的虛榮心信主」，而是指出：聖經本身承認並肯定人對榮耀、免於羞辱的渴望是合理的人性需求，關鍵在於這份渴望的對象與方向——是追求從神而來的榮耀（約五44），還是追求人給的虛浮讚美。福音邀請人把這份渴望正確地指向神，而非壓抑或否定這份渴望本身，這與純粹自我中心的動機有本質上的不同。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「福音種子」外殼與核心都需情境化的主張，會不會有滑向「福音相對主義」（什麼都可以是福音）的風險？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者透過范浩沙的提醒設下了界限：「聖經的重要性應當高於文化、傳統或歷史」，情境化的參照來源必須始終回歸聖經本身，而非任意的文化偏好。第三部接下來十章的方法，也刻意限定在「聖經是否有充分素材支持這種表達方式」的檢驗上，而非憑空發明新教義。這與相對主義的關鍵差異在於：情境化改變的是「表達方式」與「切入角度」，而非福音的實質內容或聖經權威本身。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">《天父之愛福音小冊》以「浪子回頭」為核心敘事，這種故事型福音材料，相較於條列式的福音要點，有什麼獨特的溝通優勢？</h4>
              <p className="text-gray-700 leading-relaxed">
                故事型材料能同時承載「外殼」與「核心」——聽眾不需要先理解抽象神學術語，就能透過角色（小兒子的羞辱、父親的接納）直覺地感受到福音的情感重量，尤其對習慣口傳文化、重視關係與家庭敘事的群體（許多未得之民正是如此），故事比條列真理更容易記憶、傳誦與產生共鳴，也更貼近聖經本身大量使用敘事體裁傳達真理的方式。
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
              '紐畢真說「純粹的福音是不存在的」，這句話對你過去認為「我傳的就是純正的福音，沒有文化色彩」的想法，帶來什麼挑戰？',
              '回想你自己信主的歷程，「渴望脫離罪疚」和「渴望脫離羞辱、恢復尊榮」，哪一種動機對你而言更真實、更貼近你的經歷？',
              '你認為自己所屬的教會或宣教機構，是否也存在「福音種子」外殼有調整、核心卻仍固守西方框架的現象？',
              '如果要用「浪子回頭」的故事向一位重視家族顏面的朋友介紹福音，你會如何鋪陳這個故事，讓它與對方的處境產生共鳴？',
              '彼得前書對「蒙羞的信徒」說話，你認為今日教會中，有哪些群體正處於類似「為信仰忍受羞辱」的處境？',
              '作者結尾提出的三個問題——你自己會如何回答「我們是否有足夠創意，傳達一種實現對榮耀渴望與羞辱減緩的福音」？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 用「榮耀之愛」的角度重講浪子回頭的比喻</h4>
              <p className="text-gray-700 mb-2">
                找一個機會（主日學、小組分享、與朋友交談），用「父親願意為兒子蒙受羞辱、又恢復兒子榮耀身分」的角度，重新講述路加福音十五章的比喻，觀察聽眾的反應。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔍 查考彼得前書中的榮辱經文</h4>
              <p className="text-gray-700 mb-2">
                找出彼得前書一6-9、二4-10、四12-14等經文，整理出一份簡短大綱，練習向一位正經歷排斥或羞辱處境的朋友，分享這卷書信的安慰與盼望。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，求祢賜給我創意與智慧，能把福音的好消息，用更貼近身邊每個人處境的方式傳講出來。求祢幫助我不再固守單一的福音表達框架，而是像保羅一樣，靈活地把耶穌基督豐盛的救恩，傳給渴望榮耀、也渴望脫離羞辱的每一個人。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
