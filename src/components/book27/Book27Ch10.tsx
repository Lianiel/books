import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book27Ch10() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">第十課</h1>
        <h2 className="text-xl font-semibold text-gray-700">十字架與日常生活（十架篇下）</h2>
        <p className="text-sm text-gray-500 mt-2">約翰一書 2:1–2；3:1–3；路加福音 15:11–24</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-emerald-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-emerald-700 mb-3">約翰一書：恩典中的日常認罪</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                上一課我們看到十字架的宏大神學——加拉太書2:20的身分宣告。但十字架如何進入每一天的生活？約翰一書2:1-2給了我們一個驚人實際的答案：「我的小子們哪，我將這些話寫給你們，是要叫你們不犯罪。若有人犯了罪，在父那裡我們有一位中保，就是那義者耶穌基督；他為我們的罪作了挽回祭，不是單為我們的罪，也是為普天下人的罪。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                約翰寫這話的語境，是面對信徒的日常失敗。他沒有說：「如果你犯了罪，你就不是真信徒」；也沒有說：「只要你盡力就好」。他說：「我們有一位中保」——現在時態，持續有效的中保。每一次的失敗，每一次落入荊棘藪，都有一個解決方案：那義者耶穌基督在父那裡為我們代求。
              </p>
              <p className="text-gray-700 leading-relaxed">
                約翰一書3:1-3更進一步：「你看父賜給我們是何等的慈愛，使我們得稱為神的兒女……親愛的弟兄啊，我們現在是神的兒女，將來如何，還未顯明；但我們知道，主若顯現，我們必要像他，因為必得見他的真體。凡向他有這指望的，就潔淨自己，像他潔淨一樣。」我們的身分（神的兒女）和我們的盼望（將來像祂），正是日常潔淨生命的動力。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-emerald-700 mb-3">信心悔改的三步驟</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                本課介紹了一個把十字架應用於日常失敗的具體框架：信心悔改三步驟。這三步驟不是一個機械式的程序，而是福音邏輯的自然流動：
              </p>

              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                  <h4 className="font-semibold text-red-700 mb-2">第一步：承認（Acknowledge）</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-2">
                    誠實地承認自己落入了荊棘藪——不只是承認「行為不好」，更要承認「心走錯了方向」。「主啊，我承認我剛才對孩子發脾氣，背後是因為我把自己的方便看得比他的需要更重要。這是驕傲，是一種偶像崇拜。」
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    承認要誠實，不自我辯護（「但是他也有問題」），也不自我定罪（「我真是個壞父親/壞母親」）。承認就是把真相擺在神面前，不多也不少。
                  </p>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-400">
                  <h4 className="font-semibold text-yellow-700 mb-2">第二步：悔改（Repent）</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-2">
                    悔改是心的轉向，不只是行為的修正。悔改包含兩個方向：「轉離」（turning from）——轉離那個偶像，轉離那個荊棘藪的回應；「轉向」（turning to）——轉向基督，轉向十字架，轉向祂的恩典。
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    真正的悔改不是「下定決心以後不這樣做了」，而是「我承認我的心走錯了方向，我選擇重新把心轉向那位已經為我成就一切的基督」。悔改是一個心的動作，行為的改變是它自然的果子。
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-400">
                  <h4 className="font-semibold text-green-700 mb-2">第三步：相信（Believe）</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-2">
                    相信十字架的恩典是夠用的——不只是相信「罪被赦免了」，更是相信「我有能力在下一個相似的炎熱中做不同的選擇」。約翰一書2:1說基督是我們的中保，這意味著：我不需要靠自我定罪來懲罰自己，也不需要把這次的失敗「抹去」才能繼續前行。中保已經處理了這件事。
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    相信不是一種情感（「我感覺被赦免了」），而是一種根據事實的選擇（「無論我感覺如何，基督確實已經為這個罪付上代價，我選擇相信這個真實」）。
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-emerald-700 mb-3">浪子的比喻：悔改的形象</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                路加福音15:11-24的「浪子比喻」是信心悔改三步驟最生動的圖像。小兒子（路加15:17-20）：「他醒悟過來，就說：我父親有多少的雇工，口糧有餘，我倒在這裡餓死嗎？我要起來，到我父親那裡去，向他說：父親哪，我得罪了天，又得罪了你；從今以後，我不配稱為你的兒子，把我當作一個雇工吧。於是他起來，往他父親那裡去。」
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                注意浪子的心路歷程：「他醒悟過來」——這是承認（第一步）。「我要起來，到我父親那裡去」——這是悔改，心的轉向（第二步）。「父親哪，我得罪了天，又得罪了你」——這是誠實的認罪，不自我辯護。而父親的回應（路加15:20-24）是信心悔改第三步「相信」的基礎：父親在遠處看見他，跑去迎接，吩咐人拿袍子給他穿，給他戴戒指，吃喜筵歡樂。
              </p>
              <p className="text-gray-700 leading-relaxed">
                父親沒有等兒子完成一個「補過計畫」才接納他。父親在他「還離得很遠的時候」就跑去擁抱他。這就是十字架恩典的邏輯：悔改帶來的不是「試察期」，而是立即的、完全的、喜慶式的接納。這個確信，是信心悔改三步驟能夠持續進行的基礎。
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
                '約翰一書2:1-2告訴我們：日常失敗（落入荊棘藪）有一個持續有效的解決方案——耶穌基督這位義者在父那裡為我們代求。悔改不是一次性的，而是基督徒生命的持續節奏。',
                '信心悔改三步驟：承認（誠實地說出心走錯的方向）、悔改（心的轉向，從偶像轉向基督）、相信（相信十字架的恩典夠用，可以前行）。',
                '真正的悔改不是「下定決心不再犯」（意志力）而是「把心的方向從偶像轉向基督」（信心）。行為的改變是心轉向的自然果子。',
                '浪子比喻是信心悔改最生動的形象：「醒悟過來」（承認）→「起來往父親那裡去」（悔改）→「父親跑去迎接、立即接納」（相信恩典夠用）。',
                '相信不依賴情感，而是根據事實的選擇：「無論我感覺如何，基督確實已經為這個罪付上代價，我選擇相信這個真實，繼續前行。」',
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
              <h4 className="font-semibold text-indigo-700 mb-2">「中保」的神學意涵</h4>
              <p className="text-gray-700 leading-relaxed text-sm">
                約翰一書2:1的「中保」（paraklētos，有時譯「保惠師」）在法庭比喻中是站在被告旁邊為其辯護的律師。耶穌作為我們的中保，不是說「這個人沒有罪」（祂比任何人更清楚我們有罪），而是說「這個人的罪，我已經付上了代價」。這個理解對日常悔改非常重要：悔改不是去說服神不生氣，而是向父說「我知道我的中保已經處理了這件事，我來到祢面前是靠祂的功勞，不是靠我的悔改的品質」。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">悔改與假悔改的區別</h4>
              <p className="text-gray-700 leading-relaxed text-sm">
                哥林多後書7:10區分了「依著神的意思憂愁」（真悔改）和「世俗的憂愁」（假悔改）。世俗的憂愁是「我因為失敗而為自己難過」——焦點仍在自己的形象和感受；真悔改是「我因為我的罪傷了神的心而難過」——焦點在關係和神的榮耀。世俗的憂愁往往伴隨長期的自我定罪，卻沒有真正的改變；真悔改帶來「熱心、自訴、自恨」，然後立即站起來繼續前行（哥後7:11）。浪子的悔改是真悔改：他起來了，去見父親了，沒有在豬圈裡繼續自憐。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">大兒子的荊棘藪</h4>
              <p className="text-gray-700 leading-relaxed text-sm">
                浪子比喻還有一個常被忽略的部分：大兒子的反應（路加15:25-32）。大兒子代表了另一種荊棘藪——不是明顯的放蕩，而是「自以為義的順從」。他在父親旁邊，卻不認識父親的心；他從未「離家出走」，卻也從未真正「在家」。他的問題是：他服事父親是為了「這麼多年服事你，從來沒有違背你的命」這個自我形象，而非出於對父親的愛。父親對兩個兒子都奔跑——大兒子也是蒙恩典的對象，但他沉浸在自憐和義憤中，拒絕進去享受筵席。這是對那些「外表遵守規矩，內心卻遠離神」的人的嚴肅提醒。
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
              '你對「約翰一書2:1我們有一位中保」這個真理的認識，是讓你更容易承認失敗（因為有解決方案），還是讓你不把罪當回事（因為反正有赦免）？這兩種極端各反映了什麼樣的對福音的誤解？',
              '在信心悔改三步驟中，哪一步對你最困難？為什麼？',
              '你的「悔改」更像哥林多後書7:10的「依著神的意思憂愁」（焦點在與神的關係），還是「世俗的憂愁」（焦點在自己的形象和感受）？',
              '浪子「醒悟過來」（路加15:17）——你有沒有在某個荊棘藪模式中，也有過這樣的「醒悟時刻」？那個時刻是如何發生的？',
              '大兒子的故事，讓你在自己的生命中看到什麼？你有沒有以「遵守規矩」取代「認識父親的心」的情況？',
              '「相信」這一步要求我們相信恩典夠用，繼續前行。有沒有某些罪，是你覺得「需要先懲罰自己一段時間」才能被赦免的？這個想法來自哪裡？',
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
              <h4 className="font-semibold text-green-700 mb-2">🔄 信心悔改三步驟每日操練</h4>
              <p className="text-gray-700 text-sm mb-2">每晚睡前，花10分鐘回顧當天，對最明顯的荊棘藪回應做三步驟：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li><strong>承認</strong>：「今天我在___情況中，做了___（行為），因為我的心在追求___ （偶像）」</li>
                <li><strong>悔改</strong>：「主啊，我把心從這個偶像轉向祢。我不再要求___，我選擇信靠祢」</li>
                <li><strong>相信</strong>：「感謝祢，耶穌已為這個罪付上代價。我選擇接受赦免，明天繼續前行」</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 浪子比喻的默想</h4>
              <p className="text-gray-700 text-sm mb-2">讀路加福音15:11-32，把自己放進故事裡：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>你有沒有像小兒子一樣，遠離神在「豬圈」（荊棘藪）中？你的「醒悟時刻」是什麼？</li>
                <li>你有沒有像大兒子一樣，表面在父親旁邊，內心卻不認識父親的心？</li>
                <li>父親「從遠處看見他，就跑去」——這幅圖像對你意味著什麼？</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🤝 與群體同行悔改</h4>
              <p className="text-gray-700 text-sm mb-2">找一個屬靈同伴，本週一起做：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>各自分享一個本週落入的荊棘藪，用三步驟框架表達</li>
                <li>互相說：「我相信神的恩典對你是夠用的」</li>
                <li>一起為彼此禱告，求神讓信心悔改成為生命的節奏</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-600 text-sm italic">
                「父啊，感謝祢像那位父親一樣，在我還離得很遠的時候就跑去迎接我。我承認我有時活得像大兒子，表面服事祢，內心卻不認識祢的心；有時活得像小兒子，在豬圈裡不肯起來回家。求祢讓信心悔改成為我每天的節奏——不是沉重的功課，而是回家的路。感謝祢在耶穌基督裡，永遠有一個中保在祢面前為我代求。奉主名，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
