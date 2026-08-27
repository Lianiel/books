import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book41Ch4() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-800 to-cyan-900 bg-clip-text text-transparent">第一部　1-4</h1>
        <h2 className="text-xl font-semibold text-gray-700">聖經真理的帳幕</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          「耶和華超乎萬民之上；祂的榮耀高過諸天！」（詩113:4）
        </p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">帳幕：超越文化，卻又根植於文化</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                身為基督徒，我們相信聖經是神的話，神創造了宇宙，因此祂不僅僅是一個民族的神，祂乃是萬國萬民的唯一真神。不容置疑地，在特別的文化、歷史當中——神在古代中東，向祂的子民猶太人啟示了祂自己。我們也相信，耶穌基督是神子民故事的體現：耶穌，祂就是神，在特定的歷史情境和文化中（加四4）降世為人（約一14）。同時，我們相信神會拯救來自不同各民族、文化的人，並改變他們生命性情，成為基督的樣式——啟示錄中，在永恆的未來，神的子民有多樣性面貌：由不同部落、說不同方言的各族各民所組成（啟五9，廿一24-26）。換言之，神看重不同文化，人類文化的多元性在天堂中以某種方式持續著。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                我們也在聖經中看到，神在不同民族和各種文化的對抗與審判當中——就在這雙重動力之間（肯定和對抗、慶祝和審判），作者提出「聖經真理的帳幕」（Canopy of Biblical Truth）這個觀念：「耶和華超乎萬民之上；祂的榮耀高過諸天！」（詩一一三4）神像帳幕一樣，超越萬國、萬民和所有文化，祂的公義超越萬國，儘管祂的道根植於特定的歷史和文化當中，但祂的道同樣也是超越文化的。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">十三組「雙重性」對比</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者列舉了十三組聖經中同時並存、看似矛盾卻彼此互補的「雙重性」，說明神的話語如何涵蓋廣泛的人類思想範疇、社會情況和文化樣貌：
              </p>
              <div className="space-y-3 pl-2">
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-teal-700">1. 敘述/口頭——論述/書面文字：</span>神的話語包含歷史、故事和比喻等敘述性真理，適合以口述傳承歷史的民族文化；同時聖經也包含最寶貴的真理論述——宣告、箴言、法則、律法、先知啟示，或解釋神學真理的書信。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-teal-700">2. 榮/辱——清白/罪疚：</span>福音是罪惡/罪疚的救贖（利五19；羅三23-25；林前十五1-3），也是對罪/羞辱的救贖（路十五11-32；弗一3-11；來十二2）。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-teal-700">3. 國度/君主——民主/法治：</span>耶穌基督是大衛的子孫（太一1），萬王之王，祂的國度直到永遠（提前六15）；同時聖經也常被引用作為民主、人權和限制君王絕對權力的基礎。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-teal-700">4. 家族/祖先——個人/現在-未來：</span>神透過一個家族及其子孫，預表世上其他家族（創十二1）；同時神也透過個人來作工，救恩既臨到家族，也臨到個人（徒十六30-31）。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-teal-700">5. 順服/具體——知識/抽象：</span>神的話語強調順服和具體行動的必要性——「全心……愛主你的神」（可十二30），同時也警告若無知識，將走向滅亡（賽五13；何四6）。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-teal-700">6. 奧祕/兩者-都是——邏輯/不是-就是：</span>三位一體既是奧祕的悖論，同時聖經也充滿邏輯清晰的教導：「你們若不悔改，都要如此滅亡！」（路十三3）。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-teal-700">7. 貧困/弱勢——富裕/穩定：</span>「你們貧窮的人有福了！因為神的國是你們的。」（路六20）神的話同時也蘊含「發展的倫理」，箴言中有許多致富的原則。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-teal-700">8. 榮耀神——榮耀人：</span>神的榮耀是一切真理的關鍵（羅十一36），同時人依神的形象所造（創一27），相信並跟隨耶穌的人也與祂的榮耀有分（約十七22）。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-teal-700">9. 為受壓迫者伸張正義——忍受不公平：</span>神為受壓迫者帶來自由（路四18），嚴厲審判施壓者（賽十四3-6；太廿三1-36），同時也呼召子民效法耶穌，面對不公忍耐（太五10-12；彼前三9）。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-teal-700">10. 以色列相對化——以色列優先化：</span>「並不分猶太人、希利尼人……因為你們在基督耶穌裏都成為一了」（加三28），同時福音「先是猶太人，後是希利尼人」（羅一16），以色列在神的計畫中享有優先地位（羅四16-18，九1-5）。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-teal-700">11. 每日/此時此地——宇宙的/普世性的：</span>十誡後半部涉及日常人際關係（出二十12-17），神的國度就在此時此地（太六10），同時神也要使萬有在基督裡歸於一，貫穿全宇宙（弗一10；西一19-20）。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-teal-700">12. 浪漫/慾望——爭戰/責任：</span>神被喻為丈夫、子民是祂的新娘（結十六1-8；弗五25、31-32；啟十九6-9），關係本質深情熱望；同時神的子民也被呼召承擔屬靈爭戰的責任（弗六12）。</p>
                <p className="text-gray-700 leading-relaxed"><span className="font-semibold text-teal-700">13. 有別於世俗文化——在世俗文化中感到自在：</span>教會反對任何形式的偶像崇拜（啟十三章），同時新約也支持教會在社會、政治環境中運作（羅十三1-7；彼前二13-17），並指出異國文化路徑可成為福音切入點（徒十七22-34）。</p>
              </div>
              <p className="text-gray-700 leading-relaxed mt-3 mb-3">
                作者強調，這份清單並非全面性的，只是一個抽樣。鮑克漢（Richard Bauckham）寫道：「就某種意義上，聖經描繪一個內容豐富包羅萬象的故事，但這個故事並不是一件緊身衣，把所有內容都窄化、束縛在一個框架裡。對於多元化、緊繃氣氛、挑戰、甚至似乎矛盾的，聖經故事對這些都呈現出靈活的包容度。」<sup>1</sup><span style={cite}>（Richard Bauckham, Bible and Mission, 2004, 93-94.）</span>
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">兩種傳福音方式的文化比較</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                這也提醒我們，無論我們自己如何表達基督教，我們傳揚福音的方式必然體現在我們本身的價值觀和文化風格中。賴特（N. T. Wright）為麥克奈特著作《耶穌君王福音》寫的前言中提及：「基督教的信仰如萬花筒千變萬化，偏偏我們大多數人都是色盲。我們的信仰是多向度的，但是大多數的人只能夠在頭腦中頂多保持兩個向度，就像明明是旋律豐富的交響樂，我們卻只會吹單音符的口哨。」<sup>2</sup><span style={cite}>（引自 Scot McKnight, The King Jesus Gospel, 2011.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者以自己在基督徒國際宣教協會（ACMI）聚會中的觀察為例，比較了介紹福音的兩種不同文化立場。第一個例子是「學園傳道會」製作的《屬靈四律》：這份材料包含法則（或原則），論述真理涉及罪的問題，引用經文教導透過基督得救的恩典，用抽象圖解說明基督能夠解決人們的罪，並介紹何謂「基督導向的生活」，讓基督在心中的「寶座」做王<sup>3</sup><span style={cite}>（《屬靈四律》現已更名為《如何認識神》。）</span>；第二個例子是Mission ONE出版、由作者本人設計的《天父之愛福音小冊》，詮釋「浪子回頭」的故事（路十五11-32），搭配插圖，描述一個家庭中有兩個兒子，對於沉淪、蒙羞的小兒子，父親展現了澈底包容的愛，這個故事傳達小兒子除去羞辱的路徑，是透過父親的接納與憐憫。<sup>4</sup><span style={cite}>（Werner Mischke, "The Father's Love Gospel Booklet."）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者指出，《屬靈四律》體現了典型的西方福音派文化價值觀。保羅．赫伯特寫道，文化推測是文化世界觀的一部分，我們須檢視這些推測，讓真實的改變發生：「轉變世界觀的一種方式是『把問題攤到表面上來』——刻意地檢視我們在深層、未被檢視的推測，從而讓隱藏的（部分）顯為明確。」<sup>5</sup><span style={cite}>（Paul Hiebert, Transforming Worldviews, 2008.）</span>他引用阿爾諾（Dean Arnold）的說法：「文化推測是隱密的，不一定在於它們會有錯誤，而是在於它們是隱藏的，並影響置身其中者看待和詮釋世界的方式……經常，我們沒有察覺到：帶動我們文化的價值觀和推測並不在聖經中。」<sup>6</sup><span style={cite}>（Dean Arnold，引自Hiebert, Transforming Worldviews.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                田奈特在提到《屬靈四律》和《羅馬之路》救贖計劃時寫道：「它們都有經文依據，而且夠簡潔，任何信徒都可以使用。問題是：這種福音素材是否適用於多數世界？再者，福音故事是否可以從羞辱的角度來處理，仍保有經文的原意？」<sup>7</sup><span style={cite}>（Tennent, 82.）</span>在中東服事數十年的穆勒也寫道：「《屬靈四律》這本福音手冊，主要呈現福音信息的律法詮釋，比較適合對罪惡和清白有概念的人……讀者必須有罪惡和罪疚的概念，並且在一個人決志信主之後，這些素材無法教導信徒生活。」<sup>8</sup><span style={cite}>（Muller, The Messenger, The Message, The Community, 128.）</span>
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">西方神學的特徵，與盲點的代價</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                吳榮解釋，西方神學通常具備兩個特徵：其一，典型的西方福音結構是以律法、罪疚、公正和審判為導向的；其二，福音內容往往只聚焦在耶穌的生平、死亡和復活，人們從罪和永生中找到饒恕。作者強調，「西方」一詞並非貶抑，而是因為某些模式和強調方式，在西方神學中特別明顯。<sup>9</sup><span style={cite}>（Wu, Saving God's Face, 14.）</span>保羅．赫伯特則指出，西方世俗觀（現代性）帶給西方教會和神學的負面影響：「福音在現代生活中，越來越被視為抽象的教條真理，與日常生活脫節……真理透過理性論證來確定，並且依據理智做論述，這些專家認為：人類的理性依循一套思想規則，那是普世的、跨文化和跨歷史的。」<sup>10</sup><span style={cite}>（Hiebert, Transforming Worldviews.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者坦言，這樣的話題對在西方成長、受教育、重視邏輯和真理論述的基督徒而言，可能帶來很大挑戰，甚至令人不安：「我們必須承認此一事實：西方對耶穌基督福音的慣用詮釋，有其神學盲點，其文化預設立場不是中立的，吸引力也不是普世的。相對於上帝全面的榮耀，為各族群、部落、文化和民族帶來好消息，西方慣用的福音詮釋版本是片面的、缺乏完整的。」因此，他提出本書的核心命題：「如果基督教的神學觀點是西方的，然而其文化背景卻是多數世界的——亞洲、非洲、中東、拉丁美洲（或其他榮/辱文化）——那麼，忽視榮/辱文化的神學與文化問題之間存在著盲點，會阻礙了福音宣教的影響力。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者也再三強調：「盲點」的存在不是西方基督徒所特有的，各地的基督徒都有這個問題。然而，重要的是要認識到，西方的信仰表達在世界許多地區有很大的影響力，西方在基督教宣教領域中持續扮演領導角色；相對於多數世界的教會而言，西方基督教挾其豐裕資源優勢，仍居主導地位，這帶來不當的影響。更值得留意的是，多數世界中許多基督徒接受過或正接受西方神學傳統的訓練，不經意地把西方立場的神學偏見帶進宣教事工中，這正是吳榮所謂的「預設立場福音」症狀之一。<sup>11</sup><span style={cite}>（Wu, Saving God's Face, 51.）</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                沃爾斯提出更深切的憂慮：「整個西方世界，宣教士們正在接受培訓，未來的神學學者正在養成階段……基督教的思想呈現給他們的方式是西方的觀點，即使一開始不是以這種觀點出發，但這是現今神學教育的普遍現象。」<sup>12</sup><span style={cite}>（Walls.）</span>因此，作者呼籲我們應掌握西方基督教會固有的盲點，審慎讀經，以更敏銳的文化觸角來閱讀，瞭解聖經與今世多元文化的複雜性；最後，需以新的視野和角度來傳揚耶穌基督的福音，才能讓更多人接受、帶來更大影響力，這正是本書第三部分要探討的內容。關於榮辱文化的神學盲點之外，下一章將討論：羞辱，究竟是助力？還是阻力？
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
                '「聖經真理的帳幕」意象取自詩篇一一三篇4節：神像帳幕一樣超越萬國萬民，祂的道根植於特定歷史文化，卻同時超越一切文化，公義高過諸天。',
                '本章列舉的十三組「雙重性」對比（敘述/論述、榮辱/罪疚、國度/民主、家族/個人等），共同說明聖經涵蓋的思想範疇極為廣泛，不能被窄化進單一文化框架裡，聖經故事對多元、緊繃、看似矛盾的張力，展現出靈活的包容度。',
                '《屬靈四律》與《天父之愛福音小冊》的對照，具體展示了「法則式、抽象論述」與「敘事式、榮辱框架」兩種傳福音方式的文化差異，前者更貼近西方讀者，後者更貼近榮辱文化背景的讀者。',
                '文化推測之所以危險，不在於它必然錯誤，而在於它是隱藏的——「帶動我們文化的價值觀和推測並不在聖經中」，這句話提醒每個文化背景的信徒，都需要主動檢視自己傳福音方式背後未被察覺的文化預設。',
                '西方神學的典型特徵是以律法、罪疚、公正、審判為導向，聚焦於個人罪的赦免；這種詮釋版本本身並非錯誤，但若被當作福音的全貌，就會是片面、不完整的表達，無法涵蓋聖經啟示的整全榮耀。',
                '本章的核心呼籲是：教會需要以更敏銳的文化觸角讀經，用新的視野和角度傳揚福音，才能讓更多分處不同文化的人真正被觸動、接受——這正是本書第三部要具體展開的內容。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「帳幕」的意象，如何幫助我們避免兩種極端——文化相對主義與文化帝國主義？</h4>
              <p className="text-gray-700 leading-relaxed">
                若只強調聖經「超越文化」，容易走向文化帝國主義，以為某一種文化表達的福音（通常是強勢文化的版本）才是唯一正確的；若只強調聖經「根植於文化」，又容易走向文化相對主義，以為每種文化對福音的詮釋都同樣有效、沒有客觀標準。「帳幕」的意象巧妙地同時保留了兩者：神的道確實根植於特定歷史文化中被啟示出來，但祂的公義和榮耀高過諸天，能夠審視、修正、也能透過任何文化被恰當地表達出來。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">《屬靈四律》和《天父之愛福音小冊》，何者「更正確」？</h4>
              <p className="text-gray-700 leading-relaxed">
                作者的論述方式值得留意：他並未主張《屬靈四律》是錯誤的，而是指出它是一種「帶著西方文化推測」的福音表達方式，對某些讀者（特別是熟悉法治、個人主義框架的人）仍然有效，也仍被神使用。他真正要挑戰的是「以為只有一種文化表達方式適用於所有人」的心態。這提醒我們，福音材料的選擇應該視聽眾的文化處境而定，而不是把某一套材料當成放諸四海皆準的萬用公式。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">吳榮所說的「預設立場福音」，會如何不知不覺地滲入非西方教會的講台？</h4>
              <p className="text-gray-700 leading-relaxed">
                許多非西方（包括華人）神學生，是透過翻譯自西方的神學教材、聖經註釋、講道範例來受裝備的。若不刻意反思，很容易把材料背後隱含的西方文化預設（如強調個人選擇、法庭式的救恩圖像）當成「福音本身」，而非「福音的一種文化表達」，進而在自己的講台上，繼續傳講一種對本地會眾而言其實有隔閡的福音版本。
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
              '在本章列舉的十三組「雙重性」中，哪一組讓你感到特別驚訝或陌生？為什麼？',
              '你過去傳福音時，慣用的方式比較接近《屬靈四律》的法則式論述，還是《天父之愛福音小冊》的敘事式榮辱框架？',
              '「文化推測是隱藏的」——你能否想到一個自己過去傳福音時，不自覺帶入卻未曾察覺的文化預設？',
              '「賴特形容大多數人只能欣賞交響樂中的一兩個音符」，你認為自己對福音的理解，目前聽見了哪幾個「音符」？還有哪些向度是你較少留意的？',
              '如果要向一位來自榮辱文化背景（如許多東南亞或穆斯林背景）的朋友介紹福音，你會如何調整自己慣用的傳福音方式？',
              '「聖經真理的帳幕」超越所有文化，這對你理解不同宗派、不同文化背景教會之間的差異，帶來什麼樣的心胸上的轉變？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 用兩種方式各講一次福音</h4>
              <p className="text-gray-700 mb-2">
                找一個安全的對象（家人或熟識的肢體），先用你熟悉的「法則式」方式分享福音要點，再改用「浪子回頭」的敘事方式重講一次，記下兩種講法帶給對方（和你自己）不同的感受。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🔎 檢視自己教會慣用的福音材料</h4>
              <p className="text-gray-700 mb-2">
                找出你教會或團契常用的傳福音手冊或流程，用本章的「文化推測」概念檢視一遍，寫下你發現的文化預設立場（例如是否假設聽眾熟悉法庭、契約等西方法治概念）。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，祢的話語如帳幕般遮蓋萬國萬民，祢的公義高過諸天，卻又如此貼近每一個文化中掙扎的人心。求祢幫助我看見自己傳講福音時，可能帶著的文化偏見與盲點，也求祢賜給我智慧，能用貼近對方文化處境的方式，把耶穌基督完整的好消息傳講出去。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
