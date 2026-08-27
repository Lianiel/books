import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Star, Search, HelpCircle, Check } from 'lucide-react';

const cite = { fontSize: 'calc(1em - 6px)', color: '#9ca3af' } as const;

export default function Book41Ch8() {
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-teal-800 to-cyan-900 bg-clip-text text-transparent">第二部 2-2</h1>
        <h2 className="text-xl font-semibold text-gray-700">榮辱感第二項：兩種榮耀來源——與生俱有的榮耀和努力獲得的榮耀</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-teal-700 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">定義：與生俱有的，和努力獲得的</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                本章幫助讀者了解榮耀與地位的關係，包括頭銜、階級、家族名望和社會地位（與生俱來的榮耀），彼此間如何與藉著競爭或汲汲營營（靠努力獲得的榮耀）得來的地位和尊重相互區隔；也幫助讀者明白，聖經作者特別重視耶穌基督與生俱有的和努力贏來的榮耀，進而更貼切地傳達信徒在耶穌基督裡所擁有的莫大榮耀。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                尼瑞認為：「一個人的價值不是與生俱來，就是人憑自己努力所獲得。」<sup>1</sup><span style={cite}>（Neyrey, Honor and Shame in the Gospel of Matthew, 15.）</span>與生俱有的榮耀「是指一個人受到家族或國人所尊崇，這種肯定來自兩個自古以來就運作的基本組織——家族/血統或國家/政治」<sup>2</sup><span style={cite}>（Neyrey, 15.）</span>；努力獲得的榮耀則是「因出自競爭、汲汲營營和羨慕嫉妒，所獲得的榮耀……套用古代學者的說法，這是一個『不認輸的社會』，這樣的社會本質上充滿競爭，對他人的成功普遍帶著覬覦眼光」<sup>3</sup><span style={cite}>（Neyrey, 16.）</span>。簡言之，與生俱來的榮耀多半與人的出身有關——源自家庭、親族、部落、出生地或頭銜，並非源自個人表現；努力獲得的榮耀則多半與行為表現、成就有關——展現在教育、運動、政治、戰爭，或社會上常見的競逐追逐中。正如第一部區分羞辱與罪疚的圖解，這個對比也可延伸描述：與生俱來的榮耀關乎「我是誰」，努力獲得的榮耀則關乎「我做了什麼」。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">耶穌基督：與生俱有的榮耀</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「亞伯拉罕的後裔，大衛的子孫，耶穌基督的家譜」（太一1）——馬太福音第一章藉著記錄一個猶太人家庭一脈相傳直到耶穌到來，確立了耶穌的榮耀身分，這對猶太讀者而言非常重要。接著，「從天上有聲音說：這是我的愛子，我所喜悅的」（太三17）——耶穌受洗後，父神公開表達祂對耶穌的聖愛和喜悅，賦予耶穌「上帝之子」的與生俱有的榮耀。新約學者德西瓦解釋：「在古代，人們不僅被他們的『優勢』左右；而『優勢』始於他們血統的優勢（或繼承）、家族祖先的聲望。希臘人和羅馬人從他們的大家族中確定自己身分。」<sup>4</sup><span style={cite}>（deSilva, 159.）</span>對於置身榮辱社會的人而言，天父對聖子公開的宣告，這股彰顯與生俱有榮耀的力量不容小覷。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-teal-900 text-lg mb-3">耶穌基督：努力獲得的榮耀</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                腓立比書二章8-11節記載了一段關於耶穌基督與生俱有的榮耀的經典經文：「既有人的樣子，就自己卑微，存心順服，以至於死，且死在十字架上。所以，神將他升為至高，又賜給他那超乎萬名之上的名……」注意「所以」這個連接詞，將主耶穌基督升為至高，與祂在十字架上所成就的事結合起來——從這個角度而言，耶穌的榮耀是成就、努力得到的，因祂所遭受的羞辱和所成就的工作（「成了」，約十九30），藉著上十字架、羞辱受死，以及隨後復活。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                希伯來書一章1-5、8-9節，更完整地結合了耶穌基督與生俱有的和努力獲得的兩種榮耀：祂被「立他為承受萬有的」、「是神榮耀所發的光輝，是神本體的真像」（與生俱有的榮耀），同時「常用他權能的命令托住萬有」、「他洗淨了人的罪，就坐在高天至大者的右邊」（努力獲得的榮耀）；祂「所承受的名，既比天使的名更尊貴」（與生俱有的榮耀），「用喜樂油膏你，勝過膏你的同伴」（努力獲得的榮耀）。作者評論：希伯來書作者不僅希望讀者能了解基督的崇高榮耀，更要讓讀者感同身受，激發順從心志，心甘情願回應這位偉大的救主。
              </p>
              <p className="text-gray-700 leading-relaxed">
                作者特別提出一個觀察：西方的基督徒，可能會從頭到尾保持客觀的距離、運用理性思考，來解讀希伯來書的開頭篇章，就像看一幅「聖經」的地圖，上面有一條河流，名為「上帝之子的輝煌河流」，西方信徒會說：「啊，就在這裡，好壯闊的一條河流啊！」相對地，來自榮辱文化、以榮辱價值觀主宰生活的基督徒，閱讀這些經文時，不會只是把榮辱切割成真理的一部分，而是像在真理河流中游泳，經歷到河水的衝擊，既憂心河水太深，卻也領受到一股滔滔不竭的生命力——他們每時每刻，都在真實的榮辱情境中游泳。
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
                '榮耀有兩種來源：「與生俱有的榮耀」源自家族血統、出身、頭銜，關乎「我是誰」；「努力獲得的榮耀」源自競爭、成就、表現，關乎「我做了什麼」，兩者在古代榮辱社會中同樣重要。',
                '馬太福音一章的家譜、三章天父公開宣告「這是我的愛子」，確立耶穌與生俱有的尊貴身分；腓立比書二章「所以神將他升為至高」則彰顯耶穌透過十字架的降卑與順服所努力贏得的榮耀。',
                '希伯來書一章巧妙地交織耶穌與生俱有與努力獲得的雙重榮耀，顯示聖經作者刻意運用榮辱框架來塑造讀者對基督崇高地位的認識與敬拜回應，而非僅止於理性論述。',
                '作者提出西方讀者與榮辱文化讀者閱讀希伯來書一章的體驗差異——前者像旁觀壯闊的河流，後者則像置身河中游泳、被真實觸動——生動說明榮辱意識如何影響讀經的深度與感染力。',
                '信徒在基督裡同樣領受兩種榮耀：因與基督聯合而「與生俱有」兒女的身分（羅八），也因效法基督捨己、服事而「努力獲得」在神國度中的尊榮——兩者缺一不可，是完整的門徒生命觀。',
                '本章提醒教會在牧養與敬拜設計上，應同時強調信徒因信稱義所領受、與生俱有的兒女身分，以及信徒憑信心順服、努力活出的見證與成就，避免偏廢任何一端。',
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
              <h4 className="font-semibold text-gray-800 mb-2">「與生俱有的榮耀」與「因信稱義」的神學，兩者之間有什麼呼應？</h4>
              <p className="text-gray-700 leading-relaxed">
                「因信稱義」教導信徒的義是白白領受、而非靠行為賺取的，這與「與生俱有的榮耀」（源於血統、出身、身分，而非個人表現）的邏輯高度呼應。信徒因信與基督聯合，「與生俱來」地承接兒女的身分（羅八15-17），這個框架比起單純用法庭語言（無罪開釋）解釋因信稱義，更能觸動來自榮辱文化背景的讀者，讓他們理解自己在基督裡「家族身分」的轉換——從罪的奴僕，變成神家中與生俱來的兒女。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">教會若只強調「與生俱有的榮耀」（因信稱義、白白的恩典），會不會削弱信徒委身、追求聖潔的動力？</h4>
              <p className="text-gray-700 leading-relaxed">
                這正是本章希伯來書一章例子所要平衡的重點：耶穌基督的榮耀，既是與生俱有的（本為神的兒子），也是努力獲得的（因順服至死、成就救贖工作而升為至高）。同樣地，信徒的生命也應兼具兩者——因信白白領受兒女的身分是根基，但這身分應當激勵信徒活出與身分相稱的委身與見證，而非成為停滯不前的藉口。兩者是相輔相成，而非互相取代的關係。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">華人文化中「拚出頭天」「光宗耀祖」的價值觀，如何幫助我們理解「努力獲得的榮耀」這個聖經動力？</h4>
              <p className="text-gray-700 leading-relaxed">
                華人社會對「努力奮鬥、出人頭地、為家族爭光」有深刻的文化共鳴，這正是「努力獲得的榮耀」的具體體現。這種文化直覺，其實比西方個人主義文化更貼近聖經作者原本想傳達的榮耀動力——理解這一點，能幫助華人信徒更自然地連結自己的文化經驗，與聖經中「因順服、捨己而升為至高」的榮耀邏輯。
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
              '希伯來書一章描述耶穌基督與生俱有的和努力獲得的榮耀，這對於你個人的靈修或小組敬拜，可以如何運用，幫助你有更合神心意的敬拜？',
              '你在生活中，比較容易因「身分、出身」而感到自信，還是比較容易因「表現、成就」而感到自信？聖經對這兩種榮耀來源的教導，如何調整你的自我價值感？',
              '「與生俱有的榮耀」和「努力獲得的榮耀」，你認為哪一種在你的教會文化中更被強調？這是否造成某種失衡？',
              '你能否想到一段自己的生命經歷，同時體現了「因信白白領受身分」與「因順服努力活出見證」這兩種榮耀？',
              '古代中東文化是階級式的，頭銜與稱謂往往蘊含與生俱有的身分背景，你認為這對今日理解聖經中的稱謂（如「神的兒子」「君尊的祭司」）有何幫助？',
              '如果你要向一位努力打拚、渴望「出人頭地」的朋友介紹福音，你會如何運用「與生俱有的榮耀」這個概念，讓福音對他更有意義？',
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
              <h4 className="font-semibold text-green-700 mb-2">📖 精讀希伯來書一章1-14節與腓立比書二章5-11節</h4>
              <p className="text-gray-700 mb-2">
                逐節標記哪些片語描述耶穌「與生俱有的榮耀」、哪些描述「努力獲得的榮耀」，體會兩者如何交織，深化你對基督崇高身分與工作的敬拜。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🌍 在跨文化夥伴關係中留意榮耀動力</h4>
              <p className="text-gray-700 mb-2">
                若你參與宣教旅程或跨文化夥伴關係，本週留意自己的言行是否顧及當地夥伴「與生俱有的」身分尊嚴（如家族、頭銜），而不只是看重他們「表現出來的」能力與貢獻。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 禱告</h4>
              <p className="text-gray-700 italic">
                「主啊，感謝祢讓我因信與基督聯合，與生俱來地承接祢兒女的尊貴身分。也求祢幫助我，不安逸於這白白的恩典，而是像基督一樣，甘心降卑、順服至死，活出與這身分相稱的生命見證。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
