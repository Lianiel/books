import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, Star, HelpCircle, Check } from 'lucide-react';

export default function Book27Ch8() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    summary: true,
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">第八課</h1>
        <h2 className="text-xl font-semibold text-gray-700">為什麼你會被纏累（荊棘篇下）</h2>
        <p className="text-sm text-gray-500 mt-2">申命記 5:6–21；雅各書 4:1–4</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-emerald-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-emerald-700 mb-3">問題不在行為，在乎心</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                上一課我們認識了荊棘藪的「表現形式」——五種罪性回應模式。但這一課要問一個更深的問題：為什麼我們的心會走向這些荊棘藪？是什麼在驅動這些反應？
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                雅各書4:1-4提供了一個精準的診斷：「你們中間的爭戰鬥毆是從哪裡來的呢？不是從你們百體中戰鬥之私慾來的嗎？你們貪戀，還是得不著；你們殺害嫉妒，又不能得；你們爭戰鬥毆，也不能得，因為你們不求……你們求也得不著，是因為你們妄求，要浪費在你們的宴樂中。」（雅各書4:1-3）
              </p>
              <p className="text-gray-700 leading-relaxed">
                雅各的答案是：荊棘藪的根源是「私慾」（原文 hēdonē，即「快樂主義」）——心渴望某樣東西超過渴望神，並且願意用各種方式去得到它。這就是心的偶像問題。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-emerald-700 mb-3">X光掃描：三十四個診斷問題</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                在本課中，作者提供了一套「X光問題」，幫助我們掃描自己的心，找出荊棘藪背後的偶像。申命記5章的十誡是這套X光的基礎——十誡揭示了人心可能以神以外的東西為「神」的各種領域。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                這些問題按照十誡的結構排列，每個誡命對應幾個心靈診斷問題。它們不是讓人定罪的工具，而是幫助我們識別：「在這個炎熱處境中，我的心把什麼看得比神更重要？」
              </p>

              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-400">
                  <h4 className="font-semibold text-gray-700 mb-2 text-sm">第一至第二誡：神以外的神</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• 在這個處境中，什麼對我來說是不可或缺的（除了神以外）？</li>
                    <li>• 如果我得不到這樣東西，我的生命感覺會沒有意義？</li>
                    <li>• 我把什麼當作安全感的來源（而非神）？</li>
                    <li>• 我的情緒是被什麼控制的？是神，還是某個人、某件事、某種結果？</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-400">
                  <h4 className="font-semibold text-gray-700 mb-2 text-sm">第三誡：神的名</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• 我有沒有用「神的旨意」來合理化我自私的決定？</li>
                    <li>• 我的屬靈語言是真實的，還是表演給人看的？</li>
                    <li>• 我有沒有用禱告來說服神按我的意思行，而非真心求祂旨意成就？</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-400">
                  <h4 className="font-semibold text-gray-700 mb-2 text-sm">第五誡：孝敬父母（一切權威關係）</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• 我對權威（父母、老闆、教會領袖）的反應，是服從還是反抗？背後的動機是什麼？</li>
                    <li>• 我有沒有在心裡把自己設立為「終極法官」，評判所有人的決定？</li>
                    <li>• 當有人對我有權威時，我的第一反應是抗拒還是信靠神在此中的主權？</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-400">
                  <h4 className="font-semibold text-gray-700 mb-2 text-sm">第六誡：殺人（憤怒與心中的殺意）</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• 我有沒有在心裡傷害某人——用言語、態度、或默默的蔑視？</li>
                    <li>• 我希望某人受苦或失敗嗎？</li>
                    <li>• 我的憤怒是出於對義的渴望，還是出於自我利益被威脅？</li>
                    <li>• 我有沒有用「義憤」來包裝我對某人的怨恨？</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-400">
                  <h4 className="font-semibold text-gray-700 mb-2 text-sm">第七誡：姦淫（對人的慾望與物化）</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• 我有沒有在心裡把某人（或某事物）當作滿足自己需要的工具？</li>
                    <li>• 我的人際關係中，有多少是「我能從中得到什麼」的計算？</li>
                    <li>• 我有沒有對某人的「功能」產生依賴，而非真心關愛他這個人？</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-400">
                  <h4 className="font-semibold text-gray-700 mb-2 text-sm">第八至第九誡：偷盜與作假見證</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• 我有沒有奪取本不屬於我的——別人的讚美、功勞、時間、注意力？</li>
                    <li>• 我有沒有扭曲真相來保護自己的形象？</li>
                    <li>• 我說話時，有多少是為了讓自己看起來更好？</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-400">
                  <h4 className="font-semibold text-gray-700 mb-2 text-sm">第十誡：貪心</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• 我的滿足感是否依賴於擁有某樣東西（別人的婚姻、工作、才能、認可）？</li>
                    <li>• 「如果只要……我就會快樂」這個句子的空白，我填的是什麼？</li>
                    <li>• 我對神所賜給我的，是感恩還是不足？</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-emerald-700 mb-3">X光的目的：診斷不是定罪</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                這些問題不是要讓我們陷入定罪感，而是要幫助我們看清：「在這個具體的情況下，我的心到底在追求什麼？」只有當我們誠實地識別出心裡的偶像，我們才能把它帶到十字架前。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                作者提醒：X光的結果需要在群體中分享。一個人很難客觀地看清自己的心，因為「人心比萬物都詭詐，壞到極處，誰能識透呢？」（耶利米書17:9）我們需要彼此誠實的群體，幫助我們看見自己的盲點。
              </p>
              <p className="text-gray-700 leading-relaxed">
                最終，X光問題指向的不是更努力的自我管理，而是更深刻的悔改——轉離那些佔據了神的位置的偶像，轉向那位配受我們全心的神。
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
            <ul className="space-y-2">
              {[
                '荊棘藪的根源是心的「私慾」（雅各書4:1-3）——渴望某樣東西超過渴望神，並為了得到它而付出代價。',
                'X光問題以十誡為框架，幫助我們識別炎熱中心的偶像——「在這個處境中，我把什麼看得比神更重要？」',
                'X光問題的目的是診斷而非定罪，是引導悔改而非增加羞恥感。識別偶像是改變的第一步。',
                '申命記5章（十誡）揭示了人心可能把神以外的事物「神化」的各種領域，提供了全面的心靈診斷框架。',
                '心的診斷需要群體的幫助，因為人心難以客觀地看清自己（耶利米書17:9）。分享我們的X光結果是群體生命的重要功能。',
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-gray-700">{point}</p>
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
              <h4 className="font-semibold text-indigo-700 mb-2">「私慾」的神學含義</h4>
              <p className="text-gray-700 leading-relaxed text-sm">
                雅各書4:1的「私慾」（hēdonē）原指感官快樂，但在新約的倫理框架中，它指任何讓心偏離神的渴望。馬丁路德在討論第一誡時說：「你所倚靠、仰賴的是什麼，那就是你的神。」這把「偶像崇拜」從宗教儀式擴展到日常生活的每個角落——金錢、關係、成就、安全感，都可能成為「神」。X光問題正是幫助我們用第一誡的眼光審視自己的心。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">十誡作為心靈地圖</h4>
              <p className="text-gray-700 leading-relaxed text-sm">
                十誡通常被視為行為規範，但本課把它用作「心靈地圖」——揭示心可能走錯的各種方向。這與耶穌對十誡的詮釋一致：祂把「殺人」擴展到心中的怒氣，把「姦淫」擴展到眼中的慾望（馬太福音5:21-30）。耶穌的詮釋告訴我們：律法從來不只是關於外在行為，而是關於心的向度。X光問題是把這個洞見應用到具體生活情境的工具。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">診斷與醫治的次序</h4>
              <p className="text-gray-700 leading-relaxed text-sm">
                作者強調X光診斷必須帶到十字架前，而非帶到更努力的自我改善前。這個次序很重要：先診斷（看清偶像），然後認罪（承認這是罪，不只是軟弱），然後轉向十字架（相信基督已為我們的偶像崇拜付上代價），然後以信心接受聖靈的更新。如果跳過認罪直接「努力改變」，會落入行為主義；如果只認罪卻不轉向恩典，會落入絕望主義。
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
              '「如果只要……我就會快樂」——請誠實地把這個句子的空白填完。你填進去的東西，透露了你心裡的什麼？',
              '在三十四個X光問題中，哪一個問題讓你感到不舒服或抗拒？這種反應本身告訴你什麼？',
              '你有沒有某個長期的荊棘藪模式（例如：容易動怒、習慣性地批評他人、說話誇大其詞）？當你用X光問題來掃描它，你看到什麼樣的偶像在背後？',
              '雅各書說我們「不求，所以得不著」。你的禱告生活是否反映了雅各書4:2-3所說的問題——要麼根本不求神，要麼求是為了滿足自己的私慾？',
              '你有沒有曾經在「群體」中分享過你的X光結果？是什麼讓你覺得這很困難？',
              '如果你真的相信神是夠用的（足以滿足你所有深層的需要），你今天的行為和反應會有什麼不同？',
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
              <h4 className="font-semibold text-green-700 mb-2">🔦 X光自我掃描功課</h4>
              <p className="text-gray-700 text-sm mb-2">選擇一個你目前正面對的困難（炎熱），用以下問題掃描你的心：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>在這個情況中，我最害怕失去什麼？</li>
                <li>我最渴望得到什麼（除了神的榮耀以外）？</li>
                <li>如果我得不到這個，我的反應是什麼？（憤怒？絕望？操控？）</li>
                <li>這個渴望本身是罪嗎，還是它的優先次序錯了？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📝 十誡個人默想</h4>
              <p className="text-gray-700 text-sm mb-2">本週讀申命記5章，把每一條誡命應用到你目前最困難的人際關係：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>在這段關係中，我有沒有把神放在第一位？</li>
                <li>我有沒有把這個人（或他們的認可）當作「神」來對待？</li>
                <li>我對這個人的言語是誠實的、造就人的嗎？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">✍️ 認罪禱告日記</h4>
              <p className="text-gray-700 text-sm mb-2">每天花5分鐘，把X光問題掃描出的偶像寫下來，然後用以下格式禱告：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>「主啊，我承認我今天把___看得比祢更重要」</li>
                <li>「這讓我做了/想了___」</li>
                <li>「感謝祢在基督裡赦免了我的偶像崇拜」</li>
                <li>「求祢讓我的心重新以祢為最大的渴望」</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-600 text-sm italic">
                「主啊，祢是那位鑒察人心的神，祢認識我比我認識自己更深。求祢用祢的話語如X光般照射我的心，讓我看見那些取代了祢位置的偶像。我承認我的心詭詐，我需要祢的光才能看清自己。感謝祢在基督裡為我的一切罪和偶像付上代價。求祢讓我的心越來越以祢為滿足，不再尋求別處的安慰。奉主耶穌的名，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
