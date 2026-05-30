import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Search, HelpCircle, Check } from 'lucide-react';

export default function Book18Ch12() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    exploration: true,
    questions: true,
    practice: true
  });

  const toggleSection = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-600 to-rose-700 bg-clip-text text-transparent">第十二章</h1>
        <h2 className="text-xl font-semibold text-gray-700">我們作為教會成員的挑戰</h2>
        <p className="text-sm text-gray-500 mt-2">第四部分：撒但的失敗</p>
      </div>

      {/* 主要內容 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">主要內容</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-6">

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">教會是屬靈爭戰的陣地</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                馬太福音16:18耶穌說：「我要把我的教會建造在這磐石上，陰間的門不能勝過他。」這句話既是應許，也是爭戰的宣告——撒但試圖攻打教會，但失敗是被應許的。教會不是一個被動的組織，而是神在地上的前線陣地，是屬靈爭戰的集體主角。
              </p>
              <p className="text-gray-700 leading-relaxed">
                正因為教會有如此崇高的地位和使命，撒但對教會的攻擊也特別猛烈。他攻擊教會的教義純正、道德聖潔、合一見證，以及宣教的動力。本章描述信徒作為教會成員，面對的四個核心挑戰和應對的方向。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">挑戰一：唯獨聖經——在真理的基礎上建造</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                教會最根本的挑戰是保持對聖經的忠心——相信聖經是神無誤的話語，是信仰和生活的最高權威（sola scriptura，唯獨聖經）。這個原則是宗教改革的核心成就之一，但在今天同樣需要捍衛。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                在當代，撒但以幾種方式攻擊聖經的權威：通過歷史批評（聖經只是人的著作，充滿錯誤）；通過後現代主義（沒有絕對真理，聖經只是一種詮釋）；通過文化主義（聖經的某些教導過時了，必須按照當代文化重新詮釋）；通過靈恩主義的極端（新的啟示取代或等同聖經）。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「唯獨聖經」的原則不是反對理性、歷史研究或文化智慧，而是堅持神話語對人類理性和文化的最終裁奪權。當科學、文化或個人經歷與聖經的明確教導相衝突時，基督徒的立場是讓聖經來評判，而非讓文化來評判聖經。
              </p>
              <p className="text-gray-700 leading-relaxed">
                教會成員在這方面的挑戰是：積極支持教會的聖經教導，對聖經的偏差保持辨別力，並在個人生活中使聖經的教導有最高的實際權威——不只是理論上相信聖經是無誤的，而是實際上讓它塑造我的決定、關係和世界觀。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">挑戰二：唯獨基督——在道成肉身的基督信仰中立足</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                「唯獨基督」（solus Christus）的原則宣告：耶穌基督是唯一的救主，是通向父神的唯一道路（約翰福音14:6）。這在多元主義盛行的時代是特別具有挑戰性的立場。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                撒但透過文化的「包容主義」壓力，試圖使教會軟化這個立場——「所有宗教不都在尋找同一個神嗎？」、「說耶穌是唯一的道路不是太傲慢了嗎？」、「說其他宗教的人都下地獄不是太殘忍了嗎？」這些問題都是真實的，反映了對人的關懷；但它們不能取代基督的明確宣告：「我就是道路、真理、生命。若不藉著我，沒有人能到父那裡去。」（約翰福音14:6）
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「唯獨基督」同樣適用於基督教內部的問題：信仰不只是基督加上「某種靈性操練」、「某種政治立場」、「某種文化認同」。保羅在腓立比書3:8說「我也將萬事當作有損的，因我以認識我主基督耶穌為至寶」——基督本身是我們信仰的中心和全部，不是達到其他目的的工具。
              </p>
              <p className="text-gray-700 leading-relaxed">
                教會成員的挑戰是：在文化的壓力下仍然溫和而清晰地宣告基督的唯一性，同時以真實的愛和謙卑靠近那些尚未認識基督的人。「唯獨基督」不是傲慢，而是把最好的禮物——基督自己——帶給需要它的人。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">挑戰三：改革與復興——持守純正並尋求更新</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                宗教改革有一個持續的口號：「改革的教會，永遠需要改革」（Ecclesia reformata, semper reformanda）。這不是說教會的教義要不斷改變，而是說真正的教會在每個世代都需要對照聖經評估自己，除去積累的錯誤，更新對真理的理解和應用。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                撒但攻擊教會的其中一個方式，是製造一種「保守主義」——不是保守聖經的真理，而是保守人的傳統，抵制任何更新和改革。啟示錄給教會的信件中，多間教會因為失去起初的愛（以弗所）、靈命死亡卻有虛名（撒狄）或溫不冷不熱（老底嘉）而受到基督的責備——這些都是撒但在「傳統化」過程中的勝利。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                「復興」（revival）是神在特定時期給祂教會的特殊恩典，帶來屬靈的覺醒、悔改的深化、宣教的爆發。歷史上的大復興（18世紀的約翰·衛斯理、喬治·懷菲爾德帶來的英國和美國大覺醒）對整個社會都產生了深遠影響——廢奴運動、社會改革和教育事業都受到復興的推動。
              </p>
              <p className="text-gray-700 leading-relaxed">
                教會成員的挑戰是：不滿足於屬靈的現狀，持續為教會的更新和復興禱告，同時自己先從個人的悔改和更新開始——因為復興從來不從宏觀開始，而是從一個一個人的心靈更新中積累。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">挑戰四：在基督裡的合一——抵抗分裂</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                約翰福音17:21耶穌為信徒禱告：「使他們都合而為一……叫世人可以信你差了我來。」教會的合一是屬靈爭戰的一個核心戰場，因為它直接影響世界對福音的接受——合一的教會是福音最有力的論據之一，分裂的教會是世界最常使用的拒絕藉口之一。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                撒但深知這一點，因此他積極地在教會中製造分裂——通過在非本質問題上的爭論（是否會說方言？禮拜是哪種音樂風格好？），通過個人之間的驕傲和不饒恕，通過對領袖的批評和八卦，通過政治立場的分化。教會歷史上無數的分裂，不是因為核心教義的真正分歧，而是因為驕傲、個性衝突和對次要問題的過度執著。
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                以弗所書4:3呼召信徒「用和平彼此聯絡，竭力保守聖靈所賜合而為一的心」——「竭力」（spoudazo，熱切、勤力）暗示合一不是自然發生的，需要積極的維護和努力。基督身體的合一是聖靈已賜的現實（「聖靈所賜」），但需要我們「竭力保守」。
              </p>
              <p className="text-gray-700 leading-relaxed">
                值得注意的是，合一不等於在一切事情上都同意——真正的合一（以弗所書4:13）是在「基督信仰的合一」上，不是在次要問題上的統一。在核心教義上堅定，在次要問題上寬容，在一切事上有愛心——這是合一與聖潔並存的原則。
              </p>
            </div>

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
          <div className="p-5 bg-white space-y-5">

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">宗教多元主義的挑戰：溫和而有力地宣告「唯獨基督」</h4>
              <p className="text-gray-700 leading-relaxed">
                在後現代文化中，宣告「基督是唯一的道路」常常被視為傲慢、不包容。如何溫和而有力地回應這個挑戰？首先，承認這個問題背後真實的關懷：若有一個善良的非基督徒朋友或親人，我們當然不希望他們受到永遠的痛苦——這是正常的人道關懷。其次，指出基督信仰的「排他性」根植於愛：耶穌宣告祂是唯一的道路，不是為了驕傲，而是因為只有祂真正解決了罪的問題，只有祂提供了人類真正需要的救贖。第三，挑戰「宗教多元論」的內在矛盾：各宗教對神、救恩、人性的理解是根本性地不同的，不是「殊途同歸」。佛教沒有人格神；伊斯蘭的阿拉不認基督的神性；印度教的神是多元的。假裝這些差異不重要，其實是對各宗教都不尊重。第四，以福音的美善吸引人：最有力的「唯獨基督」辯護，不是邏輯論證，而是在真實關係中讓人看見基督的美善和恩典的真實變化——因為「沒有人能拒絕一個真實的見證」。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">「本質與非本質」的區分：奧古斯丁的合一原則</h4>
              <p className="text-gray-700 leading-relaxed">
                歸功於奧古斯丁（或其他人）的一句話提供了很好的框架：「在本質之事上，合一；在非本質之事上，自由；在一切事上，愛心。」（In essentials, unity; in non-essentials, liberty; in all things, charity.）這個原則幫助我們辨別：哪些是本質性的教義（三位一體、基督的神性、道成肉身、救贖、復活、第二次降臨），在這些上必須合一；哪些是重要但可有不同理解的問題（千禧年觀、洗禮方式、聖靈恩賜），在這些上有自由；而在一切事情上（包括我們認為對方錯了的地方），都要有愛心和謙卑。許多教會分裂是將非本質的事提升到本質的地位，或是在爭論本質時失去了愛心。撒但很善於模糊這個區分——要麼使人將次要問題「本質化」（導致分裂），要麼使人將本質問題「非本質化」（導致妥協）。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">教會復興的歷史：神如何更新祂的教會</h4>
              <p className="text-gray-700 leading-relaxed">
                教會歷史上幾次重大復興（awakening/revival）顯示了神更新教會的模式：復興通常始於禱告的增加（往往是小群信徒開始迫切為復興禱告）；接著是傳道人講道力量的更新（神的道有特殊的能力）；然後是廣泛的悔改（人們為罪深深痛悔）；緊隨其後的是信徒生命的更新和不信者的大批歸信。18世紀的「第一次大覺醒」（美國，懷菲爾德、愛德華茲）和「第二次大覺醒」；19世紀的「禱告復興」（Prayer Revival of 1857-58）；20世紀的威爾斯大復興（1904-05，伊凡·羅伯茲）——每一次都顯示出相似的模式。值得注意的是，真正的復興通常是神的主權工作，不能被「組織」或「製造」，但可以通過禱告、悔改和對神話語的開放被準備好。在一個教會普遍衰退的時代，為復興禱告並非天真，而是根植於神在歷史中確實這樣工作的確信。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">教會合一與教會紀律：平衡的挑戰</h4>
              <p className="text-gray-700 leading-relaxed">
                教會合一與教會紀律之間存在一個必要的張力。一方面，教會被呼召竭力保守合一，要寬容、饒恕、接納不同性情的肢體；另一方面，馬太福音18:15-20和哥林多前書5章清楚地說明，某些嚴重的罪需要通過教會紀律來處理，以保護群體的聖潔和當事人的靈魂。這個張力如何平衡？保羅的原則是：在生活方式問題上要寬容（羅馬書14-15章關於「強壯的」和「軟弱的」信徒）；在核心教義和明顯的道德大罪上要堅定（加拉太書1:8的強烈語言）；在所有情況下都以當事人的屬靈益處為動機（馬太福音18:15說「你便得了你的弟兄」）。真正的合一不是在一切問題上都「沒有衝突」，而是通過真實的、有時困難的對話，在愛中處理分歧，以彼此的成長和神的榮耀為目標。
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
          <div className="p-5 bg-white space-y-4">
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">1.</span>
              <p className="text-gray-700">「唯獨聖經」——在你實際的生活和決策中，聖經的教導有多高的權威？是否有哪些領域，你理論上相信聖經是最高權威，但實際上更多地讓文化或個人偏好來決定你的選擇？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">「唯獨基督」——你是否有過因為文化壓力而避免說「耶穌是唯一的道路」的時候？在面對多元主義的挑戰時，你如何在不傲慢的同時仍然清楚地持守這個信念？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">「改革與復興」——你所在的教會目前是否有某種形式的「屬靈自滿」或「僵化的傳統」，阻礙了真正的更新？你作為一個普通成員，在不製造不必要紛爭的前提下，能做什麼來推動健康的更新？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">「合一」——你是否在教會中有任何未解決的人際衝突或不饒恕？這個衝突是否在某種程度上成了撒但在教會中製造分裂的機會？你願意主動採取步驟修復這個裂痕嗎？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">「本質與非本質的區分」——在你的教會生活中，你是否有時候把次要問題（禮拜風格、具體神學詮釋等）提升到類似核心教義的地位，導致與他人不必要的隔閡？你如何辨別什麼是真正的本質？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">你目前為教會的更新和復興有多少的代禱？「復興從禱告開始」——你是否願意加入或開始一個為你的教會和地區靈命復興迫切禱告的小組？什麼阻礙了你這樣做？</p>
            </div>
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
          <div className="p-5 bg-white space-y-5">

            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 研究你教會的信仰告白</h4>
              <p className="text-gray-700 mb-2">閱讀你所在教會所接受的信仰告白或信條，了解你作為成員所持守的核心信仰。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>找出告白中關於聖經、基督、救恩和教會的核心條款</li>
                <li>識別你對其中所有條款都清楚理解的部分，以及你感到模糊的部分</li>
                <li>為自己不清楚的地方制定一個學習計劃（詢問牧師、閱讀相關書籍）</li>
                <li>思考：這些信仰核心如何在你的日常生活中有實際的分別？</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🙏 為你的教會建立代禱習慣</h4>
              <p className="text-gray-700 mb-2">開始每週至少一次為你的教會具體代禱，不只是泛泛地「賜福我的教會」。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>為教會的教導純正（聖經信息的忠心）禱告</li>
                <li>為教會的合一——特別是任何你知道存在的張力關係——禱告</li>
                <li>為教會牧師和領袖的屬靈保護、恩賜充足和免受撒但攻擊禱告</li>
                <li>為教會的復興和更新禱告——求神讓更多人真實地認識基督</li>
                <li>考慮邀請幾位肢體每月聚在一起，專門為教會代禱</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🤝 修復一段緊張的教會關係</h4>
              <p className="text-gray-700 mb-2">若你在教會中有任何未解決的衝突或緊張關係，今天採取一步行動修復它。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>先在禱告中承認自己在這個衝突中的責任（即使只占一小部分）</li>
                <li>按照馬太福音18:15「你去，趁著只有他和你在一處的時候，指出他的錯來」——私下溝通，不在第三方面前批評</li>
                <li>以「我感到……」表達你的感受，而非以「你總是……」指責對方</li>
                <li>以恢復關係為目標，而非以「贏得辯論」為目標</li>
                <li>即使對方不回應，你自己先選擇饒恕——饒恕是為你的自由，不是為對方</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 積極參與教會生活的一個新方式</h4>
              <p className="text-gray-700 mb-2">思考你目前在教會中的參與方式，是否有一個你可以更深入貢獻的領域。</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2 text-sm">
                <li>不只是「出席崇拜」，而是思考如何更主動地服事——兒童主日學、小組帶領、探訪、行政支持等</li>
                <li>詢問牧師或長老，教會目前最需要什麼方面的幫助</li>
                <li>嘗試一個新的服事領域，即使你還不確定這是否適合你</li>
                <li>記住：積極參與教會生活本身就是在「攻打陰間的門」——每一個真實的基督徒群體，對撒但的陣地都是一個挑戰</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-4 mt-2">
              <h4 className="font-semibold text-green-800 mb-2">🙏 禱告詞</h4>
              <p className="text-gray-700 leading-relaxed italic text-sm">
                「主，感謝祢建立了教會，並應許陰間的門不能勝過她。我為我的教會感謝祢——她的弟兄姐妹、她的事工、她在這地區的見證。今天，我求祢保護她免受撒但的攻擊——保護她的教義純正、道德聖潔和肢體之間的合一。讓我自己先從個人的悔改和服事開始，成為教會健康的一部分而非問題的一部分。為了祢的名，為了更多未得之人，賜下復興——從我開始。奉基督的名，阿們。」
              </p>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
