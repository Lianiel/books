import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Star, Search, HelpCircle, Check } from 'lucide-react';

export default function Book22Ch3() {
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
          <div className="p-5 bg-white space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">一、人的本質：個人與團體</h3>
              <p className="text-gray-700 leading-relaxed">
                聖經的人觀從一開始就是群體性的。希伯來文「亞當」（Adam）既是人類始祖的名字，也是「人」（humanity）的集體名詞。這個語言事實揭示了一個深刻的真理：人從來不只是一個孤立的個體，而是整個人類群體的代表。個人永遠存在於三重關係網絡之中——與上帝的關係（垂直）、與他人的關係（水平）、與自然的關係（生態）。這三重關係在創造時都是和諧美好的，在墮落時都遭到破壞，在救贖中都需要得到更新。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                啟蒙運動以來的西方文化強調個人主義（individualism），視個人為最基本的單位，社群是個人主動選擇組成的契約關係。但聖經的人觀深刻地挑戰這種個人主義：「那人獨居不好，我要為他造一個配偶幫助他」（創2:18），這句話不只是談婚姻制度，更是聲明了一個更廣泛的原則——人是為關係而被造的，孤立不是人的正常狀態。真正的人性，只能在關係中得到充分表達。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">二、上帝的形象：人的尊嚴根基</h3>
              <p className="text-gray-700 leading-relaxed">
                創世記1:27說「上帝按著自己的形象造人」（Imago Dei），這是聖經人觀最核心的宣告。它意味著每一個人，無論種族、性別、能力高低，都具有來自上帝的尊嚴和價值，這種尊嚴不依賴於人的成就或能力，而是源於上帝的創造行動。神學傳統對「上帝形象」的詮釋有多種：實體性詮釋（人具有理性、道德判斷力等上帝賦予的能力）、功能性詮釋（人受命代表上帝管理受造界）、關係性詮釋（人被造為能與上帝建立位格關係的存在）。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                改革宗傳統強調：上帝形象雖因墮落而受損（人的理性、道德判斷、與上帝的關係都受到罪的扭曲），卻未完全消失。即使是罪人，仍保有某種程度的上帝形象，這是為何我們仍能欣賞美、追求真、渴望善。而在基督裡，上帝形象得以恢復和更新——基督是完全的上帝形象（西1:15），跟隨基督的過程，就是恢復上帝形象的過程（羅8:29）。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">三、罪的本質：關係的破壞</h3>
              <p className="text-gray-700 leading-relaxed">
                罪的本質是關係的全面破壞。創世記3章描述了墮落的後果：與上帝的關係破壞了（人逃避上帝，靈命死亡）；人與人之間的關係破壞了（亞當怪責夏娃，3:12）；人與自然的關係破壞了（勞苦耕種，3:17-19）。罪不只是道德行為的失敗，更是存在性的扭曲——人的整個存在取向從上帝轉向自我。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                神學傳統對罪的根源有不同強調。奧古斯丁認為罪的根源是「驕傲」（superbia）——人試圖取代上帝的位置，以自我為宇宙中心。路德則強調罪的根源是「不信」（unbelief）——最根本的罪是不信任上帝、轉而信任自己或其他事物。德國神學家尼布爾（Reinhold Niebuhr）進一步指出個人的罪如何放大成群體性的罪惡：當驕傲和不信透過社會結構、意識形態被組織化，就造成制度性的不義和壓迫。這三種觀點不是互相矛盾，而是對罪的多維度描述。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">四、命運觀的比較</h3>
              <p className="text-gray-700 leading-relaxed">
                台灣的民間宗教文化對許多人的人觀有深刻影響，尤其是命運觀。民間宗教的命運觀往往是循環式的（生命如輪迴，今生的苦是前世的報應）、宿命式的（命中注定，難以改變）、俗世化的（關注現世的福氣和禍害）。算命、改運、拜祖先等行為，都是在這種命運觀框架下對命運的回應方式。
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                基督教的命運觀則根本不同：歷史是直線型的，有創造的起點、救贖的中心（基督）和更新萬物的終點；人不是命運的被動承受者，而是在上帝的呼召下積極回應的行動者；「重生」（約3:3）是真正的新生命，不只是「改運」（改變命盤），而是進入上帝國的全新存在秩序。這兩種命運觀的差異，深刻影響著人如何面對苦難、死亡和未來。
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">五、自卑的必升為高</h3>
              <p className="text-gray-700 leading-relaxed">
                路加福音18:9-14記載了法利賽人與稅吏同在聖殿禱告的比喻。法利賽人的禱告是一份驕傲的履歷表：「我感謝祢，我不像別人……我每週禁食兩次，凡我所得的都獻上十分之一。」他的禱告不是對上帝說話，而是在上帝面前表揚自己。相比之下，稅吏遠遠地站著，連眼睛也不敢舉向天，只是捶著胸說：「上帝啊，開恩可憐我這個罪人！」耶穌的評語令人震驚：「這人回家去，比那人更稱義了。」
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                這個比喻深刻地反映了上帝國的邏輯，它顛覆了人類社會「強者得勝、弱者被棄」的邏輯。在上帝面前，真正的謙卑——承認自己的罪與需要、完全倚靠上帝的憐憫——反而是得到上帝悅納的路徑。這不是鼓勵消極的自我貶低，而是指出一種真實：在上帝面前的誠實，是與上帝建立真實關係的起點。上帝國的價值觀就是「凡自高的，必降為卑；自卑的，必升為高」（路18:14）。
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
          <div className="p-5 bg-white space-y-3">
            {[
              '聖經的人觀是關係性的：人被造為在三重關係中存在——與上帝（垂直）、與他人（水平）、與自然（生態），三者在墮落中都受損，在救贖中都需更新。',
              '「上帝形象」（Imago Dei）是每個人不可剝奪的尊嚴根基：無論種族、性別或能力，每人都具有來自上帝創造的內在價值，不依賴人的成就。',
              '罪的本質是三重關係的全面破壞：奧古斯丁強調驕傲（自我取代上帝），路德強調不信（不信任上帝），尼布爾強調社會性的罪（個人罪惡被制度化放大）。',
              '基督教的命運觀與民間宗教根本不同：歷史不是循環而是直線，人不是命運的被動承受者，「重生」是進入上帝國的全新存在，而非命盤的改變。',
              '法利賽人與稅吏的比喻宣告了上帝國的邏輯：在上帝面前誠實地承認自己的罪與需要，比宗教履歷表更能得到上帝的悅納，「自卑的必升為高」。',
            ].map((point, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-sky-600 font-bold flex-shrink-0">{i + 1}.</span>
                <p className="text-gray-700 leading-relaxed">{point}</p>
              </div>
            ))}
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
