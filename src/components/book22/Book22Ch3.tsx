import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Search, HelpCircle, Check } from 'lucide-react';

export default function Book22Ch3() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
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
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">第三章</h1>
        <h2 className="text-xl font-semibold text-gray-700">人是什麼？</h2>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-blue-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">一、人的本質：個人與團體</h3>
              <p className="text-gray-700 leading-relaxed">
                希伯來文「亞當」（Adam）既是人類始祖的名字，也是「人」（humanity）的意思。這告訴我們：聖經的人觀從來不只是關於個人，而是關於整個人類群體。個人永遠存在於關係與群體之中——與上帝的關係、與他人的關係、與自然的關係。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                西方文化（尤其是啟蒙以後）強調個人主義，視個人為最基本的單位。但聖經的人觀強調：人是在關係中存在的，「獨處不好」（創二18）不只是談婚姻，而是一個更廣泛的原則：人本來就是為了關係而被造的。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">二、人的罪：關係的破壞</h3>
              <p className="text-gray-700 leading-relaxed">
                罪的本質是關係的破壞：破壞了與上帝的關係（靈命的死亡）、破壞了人與人之間的關係（互相怪罪，創三12）、破壞了人與自然的關係（勞苦耕種，創三17-19）。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                奧古斯丁強調罪的根源是「驕傲」（pride）——將自己放在上帝的位置，以自我為中心。路德強調罪的根源是「不信」（unbelief）——最根本的罪是不信任上帝，轉而信任自己或偶像。德國神學家尼布爾（Niebuhr）則指出個人的罪與社會性罪惡的關係：個人的罪往往放大成群體性的壓迫與不義。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">三、文化處境下的罪</h3>
              <p className="text-gray-700 leading-relaxed">
                二戰後德國教會發表《斯圖佳認罪宣言》，承認教會在納粹暴行中的罪責，這是個人罪擴大為集體罪的典型例子。台灣的二二八事件、中國的文化大革命、日本對侵略歷史的否認，都是集體罪惡的例子。基督教的罪觀不只談個人道德失敗，也要面對集體性的罪惡。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">四、命運觀的比較</h3>
              <p className="text-gray-700 leading-relaxed">
                民間宗教的命運觀傾向循環（生命如輪回）、宿命（命中注定）、俗世化（注重現世福氣）。基督教的命運觀是直線型、向前的、向上的：歷史有起點（創造）、有方向（救贖）、有終點（更新萬物）。「重生」（新生命）不是「改運」（改變命盤），而是進入上帝國的新生命秩序。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">五、自卑的必升為高</h3>
              <p className="text-gray-700 leading-relaxed">
                路加福音18章9-14節的法利賽人與稅吏禱告的比喻，提供了清晰的對比：自以為義的法利賽人以自己為高，卻被貶低；謙卑認罪的稅吏自卑，卻被高舉。上帝國的邏輯顛倒了世界的邏輯——真正的高升，來自在上帝面前的謙卑和誠實。
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 延伸探討 */}
      <div className="mb-6 border border-indigo-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('exploration')} className="w-full px-5 py-3 bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">延伸探討</span>
          </div>
          {expanded['exploration'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['exploration'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「上帝形象」（Imago Dei）的神學意涵</h4>
              <p className="text-gray-700 leading-relaxed">創世記1:27說人是「按上帝的形象」被造的。這「形象」到底是什麼？神學傳統有多種詮釋：實體性詮釋（理性、道德能力）、功能性詮釋（作為上帝的管理代表）、關係性詮釋（為關係而造）。改革宗傳統強調：上帝形象雖因墮落而受損，卻未完全消失；在基督裡，上帝形象得以恢復。這個教義有深遠的倫理意涵：每個人，無論種族、性別、殘障與否，都有不可剝奪的尊嚴和價值。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">奧古斯丁、路德、尼布爾的罪觀比較</h4>
              <p className="text-gray-700 leading-relaxed">三位神學家對罪的根源各有強調。奧古斯丁（驕傲）的罪觀強調人試圖取代上帝的位置，這在道德與靈性層面最明顯。路德（不信）的罪觀更為根本——連信任本身都被罪所扭曲，人本能地信任自己和偶像，而非上帝。尼布爾（社會性的罪）則指出驕傲如何通過群體結構被放大，使個人罪惡轉化為制度性的壓迫。這三個視角不是互相矛盾，而是對罪的多維度描述。</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">台灣二二八事件與集體性的罪</h4>
              <p className="text-gray-700 leading-relaxed">1947年的二二八事件，是台灣歷史上最深重的集體創傷之一。基督信仰如何面對這段歷史？書中指出，教會不應迴避歷史的罪惡，而需要像德國教會那樣，有勇氣面對集體性的罪，促成認罪、和解與療癒。然而這不容易，因為面子問題、利益關係和政治壓力都阻礙著認罪與和解。基督徒的良心，正是在這種壓力下仍持守公義與真實的力量。</p>
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
              '你如何理解「人是個人也是群體的存在」？在你的文化背景中，個人主義和群體主義各有哪些表現？',
              '奧古斯丁說罪的根源是驕傲，路德說是不信——你認為哪個說法更能描述你自己的罪的根源？',
              '你是否曾意識到自己是某個集體性罪惡的參與者或受益者（如種族偏見、階級歧視）？你如何回應？',
              '台灣的民間命運觀（算命、改運）與基督教的命運觀有何根本不同？你信主後對「命運」的看法有何改變？',
              '路加福音18章的比喻中，你更容易認同哪個人物——法利賽人還是稅吏？為什麼？',
              '基督信仰的「重生」如何不同於一般宗教的「改運」？這個區分對你的信仰生活有何實際意義？',
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
              <h4 className="font-semibold text-green-700 mb-2">🎯 辨認生命中「驕傲」的模式</h4>
              <p className="text-gray-700 mb-2">花時間思考，在你的生活中，驕傲（自我中心）如何具體地表現？</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>在關係中：需要控制、害怕示弱、難以道歉</li>
                <li>在信仰中：以自己的標準評判別人、難以接受糾正</li>
                <li>在工作中：功勞歸於自己、失敗怪罪他人</li>
              </ul>
              <p className="text-gray-600 text-sm mt-2">辨認之後，帶到上帝面前，請求聖靈更新這些領域。</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 集體認罪的學習</h4>
              <p className="text-gray-700 mb-2">找一些資料閱讀德國教會的《斯圖佳認罪宣言》（1945），思考：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>這份宣言的精神和勇氣從何而來？</li>
                <li>作為台灣基督徒，你認為有哪些歷史創傷需要更深的認罪和和解？</li>
                <li>你所在的教會團體，是否有空間討論這些議題？</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-green-800 font-medium text-sm mb-2">禱告詞</p>
              <p className="text-green-700 text-sm italic leading-relaxed">
                主啊，我承認我是罪人，不只在個人的行為上，也在群體的罪惡中。求祢幫助我，像那個稅吏一樣，站在祢面前誠實地說：「上帝啊，開恩可憐我這個罪人！」我相信祢的恩典比我的罪更大。求祢更新我，使我活出上帝形象的尊嚴，也使我有謙卑的心，在社會的不義中站在受苦者一邊。奉主耶穌基督的名，阿們。
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
