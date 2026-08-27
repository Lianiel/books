import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Compass, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book41Ch26() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-800 to-cyan-900 bg-clip-text text-transparent">第三部 3-10</h1>
        <h2 className="text-xl font-semibold text-gray-700">福音為「榮耀地位的逆轉」所形塑？</h2>
        <p className="text-gray-500 mt-1 text-sm leading-relaxed">
          第三部總結：十字架、故事、宣教、國度
        </p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <p className="text-gray-700 leading-relaxed mb-3">
              作者的答案是肯定的，而且是全書最強而有力的肯定：「是的！榮耀地位逆轉形塑的福音，有四個關鍵詞彙：十字架、故事、宣教和國度。」
            </p>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">十字架：所有神學、宣教、歷史的主軸</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                榮耀地位的逆轉，以基督的生平為例，而十字架正是轉捩點。基督在十字架上受難、為世人贖罪，隨後復活，是所有神學、所有宣教、所有歷史的主軸。因此，全球視野的福音不會對這個真理打折扣：「神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不致滅亡，反得永生」（約三16）。人子耶穌彰顯了神對世人的愛、對榮耀的熱情（約十二27-28），十字架是其最終的表達方式——教會中所有神學探討、所有宣教委身，理當指向耶穌的十字架。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">故事：對未得未觸之民有感染力的敘事</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                以榮耀地位逆轉為特徵的福音，本質上是一個旅程、一個故事，涵蓋情節、場景、旅程、家庭、愛情、榮與辱、意外、痛苦、勇氣、神祕、悲劇、征服、英雄、敵人、血、高潮起伏與末了的祝福——這些元素構成一部史詩故事，對習慣口傳文化的族群格外容易掌握。牛津宣教研究中心神學家蘇代孟提醒，西方教會講道常犯一個毛病：自由派教會偏重耶穌的生平、保守派教會偏重耶穌的死亡，兩者都只呈現了福音的片面，「在非西方文化情境中，介紹耶穌的生平，祂的出生、受洗、受試探、公開傳道、進入耶路撒冷、死亡，復活和治理一切，採用口頭敘述方法，更能全面呈現耶穌基督的訊息。」<sup>1</sup><span style={cite}>（Damon So, "How Should a Theological Institution Prepare Students/Leaders...".）</span>作者衷心認同：耶穌榮耀地位逆轉的完整故事，對未觸和未得之民的宣教果效，力道渾然天成。全球視野福音以敘述方式進行，特別適用於以口述方式接收訊息的族群，而世界上眾多的未得未觸之民（穆斯林、印度教徒、佛教徒、部落民族）大多深受榮辱價值觀影響，這種敘事方式勢必帶來極大共鳴。在聖經的結尾——啟示錄，同樣充滿氣勢磅礡的敘述：相信的人將代表各族各民，蒙應許得榮耀與尊貴（啟廿一22-27），在羔羊的婚宴上一同坐席（啟十九6-9）——多美的盼望！
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">宣教：一種「榮耀地位逆轉」的動態歷程</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                凸顯福音的主題「榮耀地位逆轉」本身就是宣教的一種模式：耶穌說「父怎樣差遣了我，我也照樣差遣你們」（約二十21）——正如父在榮耀地位逆轉的動力中差遣耶穌道成肉身，今日耶穌也照樣差遣信徒。作者提出五個實踐要點：（a）救恩持續進行——福音是「神的大能」（羅一16），信徒領受救恩正是為了傳遞它；（b）是夥伴，而非誰優誰劣——西方基督徒需要調整心態，博許提醒應「不再扮演知道所有答案的人，而是和其他人一樣，都是學習者」<sup>2</sup><span style={cite}>（Bosch, 453.）</span>；（c）與世俗之道相違——耶穌為窮人、卑微人、受逼迫的人祝福（路六20-23），卻對地位高、有權勢者發出警告「有禍了」（路六24-25），活出福音的人選擇與世俗價值觀背道而馳；（d）不僅是失喪者要悔改，教會也要悔改——西方主導勢力、文化優越性同樣需要警惕與翻轉，宣教結合帝國主義的時代早已必須結束；（e）軟弱是力量——宣教是降卑的歷程、僕人的服事，這種路徑對曾因教會濫用權力而受傷、疏離的後現代世人，反而更具吸引力。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">國度：已然、但未然的基督統治</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                榮耀地位的逆轉指出基督的國度統治：體現這個主題的福音，慶祝已然、但尚未完全實現的基督國度統治。作者提出四個具體要點：（a）耶穌的跟隨者，擁有新的與生俱有的榮耀來源——神自己是這個家庭的父親，這個家稱為「教會」，是「一個新人」（弗二15），信徒的屬靈DNA已被改變，「不是從血氣生的……乃是從神生的」（約一13）；（b）信徒已將與生俱有的榮耀，轉到基督所統治的國度中（西一13），這份榮耀不僅是教義中的客觀真理，也是此時此刻可以經歷的內在主觀事實——「所賜給我們的聖靈將神的愛澆灌在我們心裏」（羅五5）；（c）今日信徒擁有無限的新榮耀，因此可以從榮耀競爭、暴力的追逐場域中脫離<sup>3</sup><span style={cite}>（Neyrey, Honor and Shame in the Gospel of Matthew, 214.）</span>，跳脫「資源有限」的束縛，領受「祂必照他榮耀的豐富……使你們一切所需用的都充足」（腓四19）；（d）基督既已掌權、勝過所有仇敵，榮耀地位逆轉的全球福音，自然激勵信徒努力將神的國度傳揚到世界各地——「願你的國降臨；願你的旨意行在地上，如同行在天上」（太六10）。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">榮辱感是福音的核心</h3>
              <p className="text-gray-700 leading-relaxed">
                作者在第三部的結尾，做出全書最核心的總結性宣告：榮耀地位的逆轉是聖經的主題，是渾然天成的一部分——它確實是基督福音的本質，不可或缺的要素。至此，本書已探討了所有十種榮辱動力如何與基督的救贖息息相關，使用榮辱動力來詮釋福音，十分契合。作者引用吳榮的話作為總結：「福音向來契合榮辱文化的情境……（而且）榮與辱建構了福音本身的框架。」<sup>4</sup><span style={cite}>（Jackson Wu, "Rewriting the Gospel for Oral Cultures".）</span>換言之，耶穌基督的全球福音，有相當的潛力，可以帶給多元文化世界的人們共鳴——特別是那些在羞辱中掙扎的人，他們的痛苦，或許遠超過我們所能理解。第三部至此完結，本書即將進入第四部：探討如何將榮辱動力具體融入宣教目標、訓練與實踐當中。
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
                '「榮耀地位逆轉」形塑的全球福音，由十字架（救贖的轉捩點）、故事（完整敘事的感染力）、宣教（差遣的動態歷程）、國度（已然未然的君王統治）四個關鍵詞構成，是第三部十章的總結性框架。',
                '牛津學者蘇代孟提醒，西方教會習慣把耶穌的「生平」和「死亡」二選一地強調，但完整口述耶穌一生（出生、受洗、傳道、進城、死亡、復活、掌權）的敘事方式，對非西方口傳文化更具全面感染力。',
                '宣教本身被重新定義為「榮耀地位逆轉」的動態歷程——差遣即降卑，服事即得勝，教會不僅呼召失喪者悔改，也必須警惕自身文化優越感、持續悔改，以僕人的軟弱姿態宣教，而非帝國式的權力擴張。',
                '信徒因信基督領受了「與生俱有的新榮耀」，這份榮耀讓人得以脫離世俗的榮耀競爭與資源有限的焦慮，安息在基督裡「榮耀的豐富，使你們一切所需用的都充足」（腓四19）的應許中。',
                '本章是第三部的高潮與總結：作者引用吳榮「榮與辱建構了福音本身的框架」這句話，鄭重宣告榮辱動力不是福音的裝飾性補充，而是理解、傳講福音不可或缺的核心要素。',
                '第三部至此完結（前言＋3-1至3-10共11節），全書即將進入第四部「遍傳——世界基督教運動中的榮辱感」，探討如何把這套榮辱神學具體落實到宣教目標、訓練與實踐當中。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「不僅是失喪者要悔改，教會也要悔改」，這個論點在宣教歷史上有哪些具體的沉痛教訓可供借鏡？</h4>
              <p className="text-gray-700 leading-relaxed">
                殖民時代宣教與帝國擴張的糾纏（本書第三部前言已詳述），是最直接的歷史教訓：當教會把福音與西方文化優越感、政治軍事力量綁在一起時，即使動機良善，也可能對受宣教地區的文化尊嚴造成傷害，甚至讓福音本身背負了不必要的文化包袱。作者呼籲的「教會也要悔改」，正是提醒今日的宣教工作者，持續警醒自己是否仍不自覺地把某種文化優越感、資源優勢的心態，帶入跨文化服事中，而非真正謙卑地以僕人身分與當地群體同工。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「軟弱是力量」的宣教路徑，對於習慣「憑實力、憑資源」推展事工的教會文化，是怎樣的挑戰？</h4>
              <p className="text-gray-700 leading-relaxed">
                許多教會與機構在規劃宣教策略時，很自然地傾向評估「我們有多少資源、人才、資金」來決定行動方案，這種思維本身沒有錯，但若成為唯一的判準，就可能不知不覺地重蹈「帝國式宣教」的覆轍——用世上的實力邏輯來推展神的國度。作者提醒的「軟弱是力量」，呼籲教會重新學習耶穌降卑服事的路徑：有時候，最有果效的宣教，恰恰發生在最匱乏、最軟弱、最需要單單依靠神的處境中，這對習慣以資源多寡衡量事工「成功」的教會文化，是深刻的提醒。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">吳榮「榮與辱建構了福音本身的框架」這句話，是否意味著「因信稱義」等傳統教義在本書的論述中被取代或降級？</h4>
              <p className="text-gray-700 leading-relaxed">
                縱觀全書第三部的論述脈絡，作者並未主張用榮辱框架「取代」因信稱義、赦罪等傳統教義，而是持續強調兩者是互補、並存的——每一章都以「聖經是否有充分素材支持這個新的呈現角度」作為檢驗標準，且反覆提醒福音論述須以個人悔改、罪得赦免的訴求取得平衡（如3-4章）。榮辱框架的貢獻，在於補足、豐富西方神學傳統長期忽略的向度，而非否定或取代那些向度本身。
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
              '在你過去聽過的講道或福音材料中，是偏重耶穌的「生平」，還是偏重耶穌的「死亡」？讀完本章後，這對你有何提醒？',
              '「新約聖經中提到的詩篇一一○篇1節……什麼樣的人以及什麼樣的族群，可能會對榮耀地位逆轉的福音呈現方式做出回應？」試著具體列舉幾種你認識的群體。',
              '「不僅是失喪者要悔改，教會也要悔改」——你認為自己所屬的教會文化，是否存在需要悔改的文化優越感或權力濫用傾向？',
              '「軟弱是力量」這句話，如何挑戰你對「有效宣教」「成功事工」的既有定義？',
              '通讀完第三部十章（十種榮辱動力如何與福音連結）後，哪一章帶給你最深刻的啟發或改變？',
              '吳榮說「榮與辱建構了福音本身的框架」，你自己現在會如何回應這句話？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 練習用完整敘事口述耶穌的一生</h4>
              <p className="text-gray-700 mb-2">
                不看講稿，試著用五到十分鐘，口頭講述耶穌從出生、受洗、傳道、進耶路撒冷、死亡、復活到掌權的完整故事，感受這種敘事方式帶來的感染力。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🕊️ 檢視自己參與事奉的「軟弱」與「僕人」姿態</h4>
              <p className="text-gray-700 mb-2">
                誠實反省你目前參與的服事或宣教，是否更多依靠自身的資源、能力、地位，還是真正操練謙卑倚靠神、以僕人身分與人同工？記下一項本週可以具體調整的行動。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，感謝祢用榮耀地位逆轉的一生，向我啟示了十字架、故事、宣教與國度的完整福音。求祢幫助我，不僅用頭腦明白這些真理，更用生命活出降卑、服事、傳揚的樣式，讓我成為祢傳揚全球福音的一份子，把祢的國度帶到地極。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
