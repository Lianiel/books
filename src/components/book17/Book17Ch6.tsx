import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, Users, Search, HelpCircle, Check } from 'lucide-react';

export default function Book17Ch6() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    content: true,
    application: true,
    exploration: true,
    questions: true,
    practice: true,
  });

  const toggleSection = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">第六章</h1>
        <h2 className="text-xl font-semibold text-gray-700">正視罪惡的嚴重性</h2>
        <p className="text-sm text-gray-500 mt-1">哥林多前書 五1-13</p>
      </div>

      {/* 經文要義 */}
      <div className="mb-6 border border-purple-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('content')} className="w-full px-5 py-3 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">經文要義</span>
          </div>
          {expanded['content'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['content'] && (
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">一、哥林多教會的淫亂案（五1-5）</h4>
              <p className="text-gray-700 leading-relaxed">有人與父親的妻子同居（繼母），連外邦人也視為可恥之事，但哥林多教會非但沒有懲戒，反而自高自大（以包容罪惡顯示屬靈的成熟？）。保羅嚴厲指責：在名分上他已判定此人當被交給撒但，使他的肉體滅絕，靈魂可以在主耶穌的日子得救。懲戒的目的不是報復，而是使當事人悔改得救。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">二、酵母的比喻（五6-8）</h4>
              <p className="text-gray-700 leading-relaxed">「你們誇口是不好的。豈不知一點麵酵能使全團發起來嗎？」保羅以逾越節除酵的傳統為比喻：罪如酵，有蔓延和感染力。基督是我們的逾越節羔羊，已經被殺獻祭。因此信徒應除去舊酵，成為無酵的新麵。這個比喻說明：罪在教會中不是個人私事，而是影響整體的群體事務。</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">三、教會紀律的範圍（五9-13）</h4>
              <p className="text-gray-700 leading-relaxed">保羅澄清他在前信中的意思：不是不與外邦人罪人來往（那樣就要離開世界了），而是不與「稱為弟兄」卻犯罪的人來往。信徒對外界無審判責任，但對內部有管理責任。「審判教外的人與你們何干？教內的人豈不是你們審判的嗎？」這劃清了教會紀律的合法邊界。</p>
            </div>
          </div>
        )}
      </div>

      {/* 省思與應用 */}
      <div className="mb-6 border border-teal-100 rounded-lg overflow-hidden shadow-sm">
        <button onClick={() => toggleSection('application')} className="w-full px-5 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 flex items-center justify-between transition-all">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-teal-600 flex-shrink-0" />
            <span className="font-semibold text-gray-800">省思與應用</span>
          </div>
          {expanded['application'] ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
        {expanded['application'] && (
          <div className="p-5 bg-white space-y-5">
            <div>
              <h4 className="font-semibold text-teal-700 mb-2">教會紀律</h4>
              <p className="text-gray-700 leading-relaxed mb-3">作者提到一個在德國的留學生故事：他三次在公共汽車上逃票，第三次被抓後不只被罰款，居留許可也被取消，必須離境。這件事帶出一個重要問題：如果社會尚且有這樣的紀律機制，教會對待罪惡的態度是否應該至少同等嚴肅？</p>
              <p className="text-gray-700 leading-relaxed mb-3">另一個故事：在台灣抗戰期間，一個人在渡輪上信了耶穌。他後來主動回去還了當年欠的錢，因為信了耶穌之後不能繼續讓罪帳未清。這是真正悔改的見證。對比今日教會的現象：科羅拉多的槍擊悲劇、天主教的醜聞、台灣牧師性侵事件、美國牧師外遇被揭發後認罪、受到教會擁抱後被「恢復」牧職——這些案例引發一個問題：「恢復」是否過於倉促？</p>
              <p className="text-gray-700 leading-relaxed">紀律不是嚴懲，而是愛的一部分。就像律師要宣誓公約、醫生要遵守倫理守則，當一個代表基督名義的人犯罪，教會有責任認真對待。目的不是驅逐，而是使當事人的靈魂得救。</p>
            </div>
            <div>
              <h4 className="font-semibold text-teal-700 mb-2">十架救贖與聖潔生活</h4>
              <p className="text-gray-700 leading-relaxed mb-3">罪惡的傳染性並非誇張：美國某犯罪電視節目播出後，全國出現多起模仿犯罪案件，說明犯罪行為確實有示範效應。面酵的比喻在教會中的意義是：允許一個明顯罪惡繼續存在，會降低整體群體對罪的敏感度。天主教波士頓教區的醜聞之所以如此震驚人心，部分原因正是高層長期知情不報，讓罪惡在沉默中蔓延。</p>
              <p className="text-gray-700 leading-relaxed">十字架救贖和繼續犯罪之間存在根本性的不相容。基督已成為我們的逾越節羔羊，這是一個已完成的事實；因此「除去舊酵」是回應這個事實的必然行動。犯罪和宣告「基督已為我死」是彼此矛盾的——不是說信徒完全不犯罪，而是說信徒對罪的態度必須是認真的悔改，而非輕描淡寫。</p>
            </div>
            <div className="mt-2 p-4 bg-teal-50 rounded-lg border border-teal-100">
              <p className="font-medium text-teal-800 mb-2">默想</p>
              <p className="text-gray-700 leading-relaxed italic">「基督已成為我們的逾越節羔羊。這不只是歷史的宣告，而是對生命的要求：既然羔羊已被殺，就要除去舊酵，以誠實和真正的心守節。聖潔不是律法主義，而是對救恩的真實回應。」</p>
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
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">教會紀律的神學基礎</h4>
              <p className="text-gray-700 leading-relaxed">保羅的教會紀律觀建立在兩個基礎上：教會的聖潔本質（「神的殿」）和對犯罪者的愛（使其靈魂得救）。懲戒不是排斥，而是愛的最嚴肅形式。現代教會往往走兩個極端：要麼對罪視而不見（以「包容」為名），要麼以審判為樂。保羅的平衡是：嚴肅對待罪，卻始終以犯罪者的得救為終極目的。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">「交給撒但」的意義</h4>
              <p className="text-gray-700 leading-relaxed">「交給撒但，使肉體滅絕，靈魂得救」是保羅最嚴厲的語言之一。這並非詛咒，而是把人放回教會保護圈之外，讓他在世界的艱難中學習悔改。這個表達反映了保羅對教會的定義：教會是在神特別保護下的群體，被逐出教會意味著失去這道保護——不是永遠的詛咒，而是催促悔改的嚴厲愛。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">罪的群體影響力</h4>
              <p className="text-gray-700 leading-relaxed">「一點酵使全團發起來」——保羅指出罪不是私人問題。一個人公然犯罪而未受管教，其影響是：降低整體對罪的敏感度、讓旁觀者認為此行為被默許、損害教會的見證。這個原則提醒我們：教會群體的道德氛圍，是由每個成員的選擇共同塑造的。</p>
            </div>
            <div>
              <h4 className="font-semibold text-indigo-700 mb-2">對外不審判、對內有責任</h4>
              <p className="text-gray-700 leading-relaxed">保羅的區分非常重要：信徒不應以道德標準審判不信者（否則就要離開世界），但對教會內自稱弟兄的人，卻有維護教會聖潔的責任。這防止了兩個錯誤：一是以道德警察身份審判社會（文化戰爭），二是在教會內縱容犯罪（錯誤的包容）。</p>
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
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">1.</span>
              <p className="text-gray-700">哥林多教會以「包容」罪惡來顯示屬靈成熟，這個錯誤在今日教會中是否也存在？你認為真正的「包容」和縱容罪惡之間的分別是什麼？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">2.</span>
              <p className="text-gray-700">教會紀律在現代教會幾乎消失了。你認為這帶來了什麼後果？如果你的教會面對類似的情況，你會如何回應？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">3.</span>
              <p className="text-gray-700">「一點酵使全團發起來」——你是否曾目睹一個人的罪對整個群體（家庭、小組、教會）產生的蔓延效應？這讓你有什麼體悟？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">4.</span>
              <p className="text-gray-700">作者提到牧師犯罪後認罪、被教會「恢復」的案例，並質疑恢復是否過於倉促。你認為衡量一個領袖是否可以被恢復，應該考慮哪些因素？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">5.</span>
              <p className="text-gray-700">保羅強調懲戒的目的是「使靈魂得救」。你在面對犯罪的弟兄姊妹時，你的第一反應是憤怒、冷漠，還是以他/她的復原和得救為目標？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">6.</span>
              <p className="text-gray-700">保羅說不審判外面的人。你是否有時用聖經標準審判社會上的不信者，卻對教會內的問題視而不見？這兩種態度各自有什麼問題？</p>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-600 font-bold flex-shrink-0">7.</span>
              <p className="text-gray-700">「基督已成為我們的逾越節羔羊」——這個宣告對你的日常生活有何具體意義？你如何回應這個事實，讓聖潔不只是教條，而是真實的生命狀態？</p>
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
          <div className="p-5 bg-white space-y-4">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">🎯 個人的「除酵」行動</h4>
              <p className="text-gray-700 mb-2">參考逾越節「除舊酵」的意象，在個人生命中：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>靜心問自己：有沒有一個習慣性的罪，是我一直容忍卻沒有正視的？</li>
                <li>承認它的嚴重性，不再以「這沒什麼大不了」為藉口</li>
                <li>定一個具體的悔改行動：告訴信任的弟兄/姊妹，請他/她幫你守望</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">💚 以愛的方式關懷陷入罪中的人</h4>
              <p className="text-gray-700 mb-2">如果你知道教會中有弟兄/姊妹正陷在罪中：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>先為他/她禱告，求神賜你愛心和智慧</li>
                <li>以關懷而非指責的態度與他/她私下交談</li>
                <li>記住：目標是他/她的復原，不是你的正義感的滿足</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-2">📖 學習辨別「包容」與「縱容」</h4>
              <p className="text-gray-700 mb-2">思考你所在教會對罪的態度，與信任的同工討論：</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                <li>我們的教會是否有清楚的紀律原則，而非因人而異？</li>
                <li>遇到嚴重罪惡時，我們的處理方式是否兼顧聖潔與愛？</li>
                <li>如何在維護教會聖潔的同時，不陷入法利賽人的論斷精神？</li>
              </ul>
            </div>
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-sm text-green-800 font-medium mb-1">本週禱告</p>
              <p className="text-gray-700 text-lg leading-relaxed italic">
                「主啊，讓我對罪有正確的態度——既不縱容，也不以審判為樂。讓我以基督逾越節羔羊的寶血為根基，活在聖潔中。若我需要面對弟兄姊妹的罪，讓我的出發點是愛，我的目標是他/她的得救，不是我的自義。讓我的教會成為一個既有恩典、也有聖潔的地方。奉主耶穌的名求，阿們。」
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
